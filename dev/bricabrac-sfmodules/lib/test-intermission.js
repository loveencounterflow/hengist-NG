(async function() {
  'use strict';
  var FS, GTNG, GUY, PATH, SFMODULES, Test, alert, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, tests, urge, warn, whisper, white;

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
      var Hoard, d, h, Ωimt__10, Ωimt___1, Ωimt___2, Ωimt___4, Ωimt___5, Ωimt___6, Ωimt___7, Ωimt___8, Ωimt___9;
      ({Hoard} = SFMODULES.require_intermission());
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
      ({Hoard} = SFMODULES.require_intermission());
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
        s.add({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__13 = function() {
          return s.runs.length;
        }), 1);
        s.add(1);
        this.eq((Ωimt__14 = function() {
          return s.runs.length;
        }), 2);
        s.add({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__15 = function() {
          return s.runs.length;
        }), 3);
        // s.add new Run { lo: 1, hi: 1, };  @eq ( Ωimt__16 = -> s.runs.length     ), 3
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
        s.add({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__25 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__26 = function() {
          return s.is_normalized;
        }), false);
        s.add(1);
        this.eq((Ωimt__27 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__28 = function() {
          return s.is_normalized;
        }), false);
        s.add({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__29 = function() {
          return s.runs.length;
        }), 3);
        this.eq((Ωimt__30 = function() {
          return s.is_normalized;
        }), false);
        // s.add new Run { lo: 1, hi: 1, };  @eq ( Ωimt__31 = -> s.runs.length     ), 3; @eq ( Ωimt__32 = -> s.is_normalized ), false
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
        s.add({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__38 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__39 = function() {
          return s.is_normalized;
        }), true);
        s.add(1);
        this.eq((Ωimt__40 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__41 = function() {
          return s.is_normalized;
        }), true);
        s.add({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__42 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__43 = function() {
          return s.is_normalized;
        }), true);
        // s.add new Run { lo: 1, hi: 1, };  @eq ( Ωimt__44 = -> s.runs.length ), 1; @eq ( Ωimt__45 = -> s.is_normalized ), true
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
        var h, i, len, ref, run, s, Ωimt__48, Ωimt__49, Ωimt__50, Ωimt__51, Ωimt__52, Ωimt__53, Ωimt__54, Ωimt__56, Ωimt__57, Ωimt__58;
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
        s.add(103);
        this.eq((Ωimt__49 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__50 = function() {
          return s.is_normalized;
        }), true);
        s.add(100);
        this.eq((Ωimt__51 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__52 = function() {
          return s.is_normalized;
        }), true);
        s.add(101);
        this.eq((Ωimt__53 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__54 = function() {
          return s.is_normalized;
        }), true);
        ref = s.runs;
        for (i = 0, len = ref.length; i < len; i++) {
          run = ref[i];
          //.....................................................................................................
          debug('Ωimt__55', run);
        }
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
        s.add(103, 109);
        this.eq((Ωimt__60 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__61 = function() {
          return s.is_normalized;
        }), true);
        s.add(111, 115);
        this.eq((Ωimt__62 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__63 = function() {
          return s.is_normalized;
        }), true);
        s.add(110);
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
        s.add(103, 109);
        this.eq((Ωimt__70 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__71 = function() {
          return s.is_normalized;
        }), false);
        s.add(111, 115);
        this.eq((Ωimt__72 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__73 = function() {
          return s.is_normalized;
        }), false);
        s.add(110);
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
    containment: function() {
      var Hoard;
      ({Hoard} = SFMODULES.require_intermission());
      (() => {        //.......................................................................................................
        var h, r, Ωimt_100, Ωimt_101, Ωimt__81, Ωimt__82, Ωimt__83, Ωimt__84, Ωimt__85, Ωimt__86, Ωimt__87, Ωimt__88, Ωimt__89, Ωimt__90, Ωimt__91, Ωimt__92, Ωimt__93, Ωimt__94, Ωimt__95, Ωimt__96, Ωimt__97, Ωimt__98, Ωimt__99;
        h = new Hoard();
        r = h.create_run({
          lo: 25,
          hi: 30
        });
        this.eq((Ωimt__81 = function() {
          return r.contains(21);
        }), false);
        this.eq((Ωimt__82 = function() {
          return r.contains(22);
        }), false);
        this.eq((Ωimt__83 = function() {
          return r.contains(23);
        }), false);
        this.eq((Ωimt__84 = function() {
          return r.contains(24);
        }), false);
        this.eq((Ωimt__85 = function() {
          return r.contains(25);
        }), true);
        this.eq((Ωimt__86 = function() {
          return r.contains(26);
        }), true);
        this.eq((Ωimt__87 = function() {
          return r.contains(27);
        }), true);
        this.eq((Ωimt__88 = function() {
          return r.contains(28);
        }), true);
        this.eq((Ωimt__89 = function() {
          return r.contains(29);
        }), true);
        this.eq((Ωimt__90 = function() {
          return r.contains(30);
        }), true);
        this.eq((Ωimt__91 = function() {
          return r.contains(31);
        }), false);
        this.eq((Ωimt__92 = function() {
          return r.contains(41);
        }), false);
        this.eq((Ωimt__93 = function() {
          return r.contains([25]);
        }), true);
        this.eq((Ωimt__94 = function() {
          return r.contains([30]);
        }), true);
        this.eq((Ωimt__95 = function() {
          return r.contains([31]);
        }), false);
        this.eq((Ωimt__96 = function() {
          return r.contains([32]);
        }), false);
        this.eq((Ωimt__97 = function() {
          return r.contains([25, 26, 27, 28, 29, 30]);
        }), true);
        this.eq((Ωimt__98 = function() {
          return r.contains([25, 26, 27, 28, 29, 30, 31]);
        }), false);
        this.eq((Ωimt__99 = function() {
          return r.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30]);
          })());
        }), true);
        this.eq((Ωimt_100 = function() {
          return r.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31]);
          })());
        }), false);
        this.eq((Ωimt_101 = function() {
          return r.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31, 32]);
          })());
        }), false);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, s1, Ωimt_102, Ωimt_103, Ωimt_104, Ωimt_105, Ωimt_106, Ωimt_107, Ωimt_108, Ωimt_109, Ωimt_110, Ωimt_111, Ωimt_112, Ωimt_113, Ωimt_114, Ωimt_115, Ωimt_116, Ωimt_117, Ωimt_118, Ωimt_119, Ωimt_120, Ωimt_121, Ωimt_122, Ωimt_123, Ωimt_124, Ωimt_125, Ωimt_126, Ωimt_127, Ωimt_128, Ωimt_129, Ωimt_130, Ωimt_131, Ωimt_132, Ωimt_133, Ωimt_134, Ωimt_135, Ωimt_136, Ωimt_137, Ωimt_138, Ωimt_139, Ωimt_140, Ωimt_141, Ωimt_142, Ωimt_143;
        h = new Hoard();
        s = h.create_scatter();
        s.add(25, 30);
        s.add(32, 40);
        this.eq((Ωimt_102 = function() {
          return s.contains(21);
        }), false);
        this.eq((Ωimt_103 = function() {
          return s.contains(22);
        }), false);
        this.eq((Ωimt_104 = function() {
          return s.contains(23);
        }), false);
        this.eq((Ωimt_105 = function() {
          return s.contains(24);
        }), false);
        this.eq((Ωimt_106 = function() {
          return s.contains(25);
        }), true);
        this.eq((Ωimt_107 = function() {
          return s.contains(26);
        }), true);
        this.eq((Ωimt_108 = function() {
          return s.contains(27);
        }), true);
        this.eq((Ωimt_109 = function() {
          return s.contains(28);
        }), true);
        this.eq((Ωimt_110 = function() {
          return s.contains(29);
        }), true);
        this.eq((Ωimt_111 = function() {
          return s.contains(30);
        }), true);
        this.eq((Ωimt_112 = function() {
          return s.contains(31);
        }), false);
        this.eq((Ωimt_113 = function() {
          return s.contains(32);
        }), true);
        this.eq((Ωimt_114 = function() {
          return s.contains(33);
        }), true);
        this.eq((Ωimt_115 = function() {
          return s.contains(34);
        }), true);
        this.eq((Ωimt_116 = function() {
          return s.contains(35);
        }), true);
        this.eq((Ωimt_117 = function() {
          return s.contains(36);
        }), true);
        this.eq((Ωimt_118 = function() {
          return s.contains(37);
        }), true);
        this.eq((Ωimt_119 = function() {
          return s.contains(38);
        }), true);
        this.eq((Ωimt_120 = function() {
          return s.contains(39);
        }), true);
        this.eq((Ωimt_121 = function() {
          return s.contains(40);
        }), true);
        this.eq((Ωimt_122 = function() {
          return s.contains(41);
        }), false);
        this.eq((Ωimt_123 = function() {
          return s.contains(42);
        }), false);
        this.eq((Ωimt_124 = function() {
          return s.contains(43);
        }), false);
        this.eq((Ωimt_125 = function() {
          return s.contains([25, 26, 27, 28, 29, 30]);
        }), true);
        this.eq((Ωimt_126 = function() {
          return s.contains([25, 26, 27, 28, 29, 30, 31]);
        }), false);
        this.eq((Ωimt_127 = function() {
          return s.contains([30]);
        }), true);
        this.eq((Ωimt_128 = function() {
          return s.contains([31]);
        }), false);
        this.eq((Ωimt_129 = function() {
          return s.contains([32]);
        }), true);
        this.eq((Ωimt_130 = function() {
          return s.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30]);
          })());
        }), true);
        this.eq((Ωimt_131 = function() {
          return s.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31]);
          })());
        }), false);
        this.eq((Ωimt_132 = function() {
          return s.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31, 32]);
          })());
        }), false);
        this.eq((Ωimt_133 = function() {
          return s.contains(h.create_run(25));
        }), true);
        this.eq((Ωimt_134 = function() {
          return s.contains(h.create_run(25, 30));
        }), true);
        this.eq((Ωimt_135 = function() {
          return s.contains(h.create_run(25, 32));
        }), false);
        s1 = h.create_scatter();
        s1.add(26, 27);
        s1.add(37, 40);
        this.eq((Ωimt_136 = function() {
          return s1.is_normalized;
        }), false);
        this.eq((Ωimt_137 = function() {
          return s.contains(s1);
        }), true);
        this.eq((Ωimt_138 = function() {
          return s1.is_normalized;
        }), true);
        s1.add(25, 32);
        this.eq((Ωimt_139 = function() {
          return s.contains(s1);
        }), false);
        this.eq((Ωimt_140 = function() {
          return s.is_normalized;
        }), true);
        s.add(31);
        this.eq((Ωimt_141 = function() {
          return s.is_normalized;
        }), false);
        this.eq((Ωimt_142 = function() {
          return s.contains(s1);
        }), true);
        this.eq((Ωimt_143 = function() {
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
      ({Hoard} = SFMODULES.require_intermission());
      (() => {        //.......................................................................................................
        var h, Ωimt_144, Ωimt_145, Ωimt_146;
        h = new Hoard();
        this.eq((Ωimt_144 = function() {
          return [...(h.create_run(1))];
        }), [1]);
        this.eq((Ωimt_145 = function() {
          return [...(h.create_run(297))];
        }), [297]);
        this.eq((Ωimt_146 = function() {
          return [...(h.create_run(297, 308))];
        }), [297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_147, Ωimt_148, Ωimt_149, Ωimt_150, Ωimt_151, Ωimt_152, Ωimt_153, Ωimt_154, Ωimt_155, Ωimt_156, Ωimt_157, Ωimt_158, Ωimt_159, Ωimt_160, Ωimt_161;
        h = new Hoard();
        s = h.create_scatter();
        this.eq((Ωimt_147 = function() {
          return [...s];
        }), []);
        s.add(1);
        this.eq((Ωimt_148 = function() {
          return [...s];
        }), [1]);
        this.eq((Ωimt_149 = function() {
          return s.is_normalized;
        }), true);
        s.add(297);
        this.eq((Ωimt_150 = function() {
          return [...s];
        }), [1, 297]);
        this.eq((Ωimt_151 = function() {
          return s.is_normalized;
        }), true);
        s.add(299, 302);
        this.eq((Ωimt_152 = function() {
          return [...s];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_153 = function() {
          return s.is_normalized;
        }), true);
        s.add(298);
        this.eq((Ωimt_154 = function() {
          return [...s];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_155 = function() {
          return s.is_normalized;
        }), true);
        s.add(300, 301);
        this.eq((Ωimt_156 = function() {
          return [...s];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_157 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_158 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_159 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt_160 = function() {
          return s.runs[1];
        }), {
          lo: 297,
          hi: 302
        });
        this.eq((Ωimt_161 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_162, Ωimt_163, Ωimt_164, Ωimt_165, Ωimt_166, Ωimt_167, Ωimt_168, Ωimt_169, Ωimt_170, Ωimt_171, Ωimt_172, Ωimt_173, Ωimt_174, Ωimt_175, Ωimt_176;
        h = new Hoard();
        s = h.create_scatter();
        this.eq((Ωimt_162 = function() {
          return [...s.walk()];
        }), []);
        s.add(1);
        this.eq((Ωimt_163 = function() {
          return [...s.walk()];
        }), [1]);
        this.eq((Ωimt_164 = function() {
          return s.is_normalized;
        }), true);
        s.add(297);
        this.eq((Ωimt_165 = function() {
          return [...s.walk()];
        }), [1, 297]);
        this.eq((Ωimt_166 = function() {
          return s.is_normalized;
        }), true);
        s.add(299, 302);
        this.eq((Ωimt_167 = function() {
          return [...s.walk()];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_168 = function() {
          return s.is_normalized;
        }), true);
        s.add(298);
        this.eq((Ωimt_169 = function() {
          return [...s.walk()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_170 = function() {
          return s.is_normalized;
        }), true);
        s.add(300, 301);
        this.eq((Ωimt_171 = function() {
          return [...s.walk()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_172 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_173 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_174 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt_175 = function() {
          return s.runs[1];
        }), {
          lo: 297,
          hi: 302
        });
        this.eq((Ωimt_176 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_177, Ωimt_178, Ωimt_179, Ωimt_180, Ωimt_181, Ωimt_182, Ωimt_183, Ωimt_184, Ωimt_185, Ωimt_186, Ωimt_187, Ωimt_188, Ωimt_189, Ωimt_190, Ωimt_191, Ωimt_192, Ωimt_193, Ωimt_194;
        h = new Hoard();
        s = h.create_scatter();
        this.eq((Ωimt_177 = function() {
          return [...s.walk_raw()];
        }), []);
        s.add(1);
        this.eq((Ωimt_178 = function() {
          return [...s.walk_raw()];
        }), [1]);
        this.eq((Ωimt_179 = function() {
          return s.is_normalized;
        }), false);
        s.add(297);
        this.eq((Ωimt_180 = function() {
          return [...s.walk_raw()];
        }), [1, 297]);
        this.eq((Ωimt_181 = function() {
          return s.is_normalized;
        }), false);
        s.add(299, 302);
        this.eq((Ωimt_182 = function() {
          return [...s.walk_raw()];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_183 = function() {
          return s.is_normalized;
        }), false);
        s.add(298);
        this.eq((Ωimt_184 = function() {
          return [...s.walk_raw()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_185 = function() {
          return s.is_normalized;
        }), false);
        s.add(300, 301);
        this.eq((Ωimt_186 = function() {
          return [...s.walk_raw()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_187 = function() {
          return s.is_normalized;
        }), false);
        this.eq((Ωimt_188 = function() {
          return s.runs.length;
        }), 5);
        this.eq((Ωimt_189 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt_190 = function() {
          return s.runs[1];
        }), {
          lo: 297,
          hi: 297
        });
        this.eq((Ωimt_191 = function() {
          return s.runs[2];
        }), {
          lo: 299,
          hi: 302
        });
        this.eq((Ωimt_192 = function() {
          return s.runs[3];
        }), {
          lo: 298,
          hi: 298
        });
        this.eq((Ωimt_193 = function() {
          return s.runs[4];
        }), {
          lo: 300,
          hi: 301
        });
        this.eq((Ωimt_194 = function() {
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
      ({Hoard} = SFMODULES.require_intermission());
      (() => {        //.......................................................................................................
        var h, s, Ωimt_195, Ωimt_196, Ωimt_197;
        h = new Hoard();
        s = h.create_scatter();
        this.throws((Ωimt_195 = function() {
          return s.add(5.8);
        }), /expected an integer or a text, got a float/);
        this.throws((Ωimt_196 = function() {
          return s.add(-3);
        }), /-0x3 is not between \+0x0 and \+0x10ffff/);
        this.throws((Ωimt_197 = function() {
          return s.add(0, -3);
        }), /-0x3 is not between \+0x0 and \+0x10ffff/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_198, Ωimt_199, Ωimt_200, Ωimt_201;
        h = new Hoard({
          first: -10,
          last: +10
        });
        s = h.create_scatter();
        s.add(-10);
        this.eq((Ωimt_198 = function() {
          return s.points;
        }), [-10]);
        s.add(+10);
        this.eq((Ωimt_199 = function() {
          return s.points;
        }), [-10, +10]);
        this.throws((Ωimt_200 = function() {
          return s.add(-11);
        }), /-0xb is not between -0xa and \+0xa/);
        this.throws((Ωimt_201 = function() {
          return s.add(+11);
        }), /\+0xb is not between -0xa and \+0xa/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_202, Ωimt_203, Ωimt_204, Ωimt_205, Ωimt_206, Ωimt_207;
        h = new Hoard();
        s = h.create_scatter();
        s.add('A');
        this.eq((Ωimt_202 = function() {
          return s.points;
        }), ['A'.codePointAt(0)]);
        s.add('A', 'Z');
        this.eq((Ωimt_203 = function() {
          return s.points;
        }), [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]);
        s.add('a', 'z');
        this.eq((Ωimt_204 = function() {
          return s.points;
        }), [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
        this.eq((Ωimt_205 = function() {
          return s.min;
        }), 'A'.codePointAt(0));
        this.eq((Ωimt_206 = function() {
          return s.max;
        }), 'z'.codePointAt(0));
        this.eq((Ωimt_207 = function() {
          return {
            min: s.min,
            max: s.max
          };
        }), s.minmax);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_208;
        h = new Hoard();
        s = h.create_scatter();
        s.add('Abc');
        this.eq((Ωimt_208 = function() {
          return s.points;
        }), ['A'.codePointAt(0)]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_209, Ωimt_210;
        h = new Hoard();
        s = h.create_scatter();
        s.add_codepoints_of('Abc');
        this.eq((Ωimt_209 = function() {
          return s.points;
        }), ['A'.codePointAt(0), 'b'.codePointAt(0), 'c'.codePointAt(0)]);
        this.eq((Ωimt_210 = function() {
          return s.runs.length;
        }), 3);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_211, Ωimt_212, Ωimt_213, Ωimt_214, Ωimt_215;
        h = new Hoard();
        s = h.create_scatter();
        s.add_codepoints_of('Abc');
        this.eq((Ωimt_211 = function() {
          return s.points;
        }), ['A'.codePointAt(0), 'b'.codePointAt(0), 'c'.codePointAt(0)]);
        this.eq((Ωimt_212 = function() {
          return s.runs.length;
        }), 3);
        s.normalize();
        this.eq((Ωimt_213 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_214 = function() {
          return s.runs[0];
        }), {
          lo: 'A'.codePointAt(0),
          hi: 'A'.codePointAt(0)
        });
        this.eq((Ωimt_215 = function() {
          return s.runs[1];
        }), {
          lo: 'b'.codePointAt(0),
          hi: 'c'.codePointAt(0)
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_216, Ωimt_217, Ωimt_218;
        h = new Hoard();
        s = h.create_scatter();
        s.add_codepoints_of('aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ');
        this.eq((Ωimt_216 = function() {
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
        this.eq((Ωimt_217 = function() {
          return s.runs.length;
        }), 16);
        s.normalize();
        this.eq((Ωimt_218 = function() {
          return s.runs.length;
        }), 16);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    data_retrieval: function() {
      var Hoard;
      ({Hoard} = SFMODULES.require_intermission());
      (() => {        //.......................................................................................................
        var h, s, Ωimt_219, Ωimt_220, Ωimt_221, Ωimt_222;
        h = new Hoard();
        s = h.create_scatter({
          data: {
            tags: ['vowel']
          }
        });
        s.add_codepoints_of('aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ');
        this.eq((Ωimt_219 = function() {
          return s.contains('A');
        }), true);
        this.eq((Ωimt_220 = function() {
          return s.data_for('A');
        }), {
          tags: ['vowel']
        });
        this.eq((Ωimt_221 = function() {
          return s.contains('B');
        }), false);
        this.eq((Ωimt_222 = function() {
          return s.data_for('B');
        }), {
          tags: ['vowel']
        });
        return null;
      })();
      //.......................................................................................................
      return null;
    }
  };

  // f = ->
  // #-----------------------------------------------------------------------------------------------------------
  // sum_of_data = ( a, b ) =>
  //   data = [ a.data ? [], b.data ? [], ].flat()
  //   # debug 'Ωimt_223', { a, b, }
  //   # debug 'Ωimt_224', { a..., data, }
  //   { a..., data, }
  // create_reducer = ( fn ) -> ( ranges ) => ranges.reduce( fn );

  // #===========================================================================================================
  // demo_intervals_fn = ->
  //   # debug 'Ωimt_225', ( k for k of IFN ).sort()
  //   #=========================================================================================================
  //   do =>
  //     rng_1       = [
  //       { start: 1, end:  10, data:   5, }
  //       { start: 4, end:   7, data:  10, }
  //       { start: 4, end:  12, data:  12, }
  //       { start: 0, end: 100, data: 102, }
  //       { start: 0, end: 100, data: 101, }
  //       ]
  //     merged      = IFN.merge ( create_reducer sum_of_data ), rng_1
  //     #.........................................................................................................
  //     urge()
  //     urge 'Ωimt_226', idx + 1, rng for rng, idx in merged
  //     urge()
  //     ;null
  //   #=========================================================================================================
  //   do =>
  //     rng_1       = new Rangeset 1
  //     rng_1.add { lo: 1, hi:   9, }
  //     rng_1.add { lo: 4, hi:   6, }
  //     rng_1.add { lo: 4, hi:  11, }
  //     rng_1.add { lo: 0, hi:  99, }
  //     rng_1.add { lo: 0, hi:  99, }
  //     merged      = rng_1.merge ( create_reducer sum_of_data )
  //     #.........................................................................................................
  //     urge()
  //     urge 'Ωimt_227', idx + 1, rng for rng, idx in merged.ranges
  //     urge()
  //     ;null
  //   #.........................................................................................................
  //   a = { start: 40, end: 49, }; b = { start: 50, end: 59, }; help 'Ωimt_228', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  //   a = { start: 40, end: 50, }; b = { start: 50, end: 59, }; help 'Ωimt_229', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  //   a = { start: 40, end: 51, }; b = { start: 50, end: 59, }; help 'Ωimt_230', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  //   a = { start: 40, end: 52, }; b = { start: 50, end: 59, }; help 'Ωimt_231', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  //   a = { start:  5, end: 10, }; b = { start: 0, end: 4 }; help 'Ωimt_232', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  //   a = { start:  5, end: 10, }; b = { start: 7, end: 8 }; help 'Ωimt_233', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  //   try
  //     a = { start:  5, end: 10, }; b = [ { start: 0, end: 4 }, { start: 7, end: 8 }, ]; help 'Ωimt_234', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  //   catch e then warn 'Ωimt_235', e.message
  //   info()
  //   info 'Ωimt_236', IFN.simplify []
  //   info 'Ωimt_237', IFN.simplify [ { start: 4, end: 20, }, ]
  //   info 'Ωimt_238', IFN.simplify [ { start: 4, end: 18, }, { start: 19, end: 22, }, ]
  //   info 'Ωimt_239', IFN.simplify [ { start: 4, end: 19, }, { start: 19, end: 22, }, ]
  //   info 'Ωimt_240', IFN.simplify [ { start: 4, end: 20, }, { start: 19, end: 22, }, ]
  //   info 'Ωimt_241', IFN.simplify [ { start: 4, end: 21, }, { start: 19, end: 22, }, ]
  //   info 'Ωimt_242', IFN.simplify [ { start: 3, end:  9, }, { start:  9, end: 13, }, ]
  //   info 'Ωimt_243', IFN.simplify [ { start: 3, end:  9, }, { start:  9, end: 13, }, { start: 11, end: 14, }, ] # [{ start: 3, end: 14 }]
  //   info 'Ωimt_244', IFN.simplify [ { start: 3, end:  9, }, { start: 10, end: 13, }, { start: 11, end: 14, }, ]
  //   info()
  //   info 'Ωimt_245', ( ( new Rangeset() ).add()                                                                        ).simplify()
  //   info 'Ωimt_246', ( ( new Rangeset() ).add { start: 4, end: 20, }                                                   ).simplify()
  //   info 'Ωimt_247', ( ( new Rangeset() ).add { start: 4, end: 18, }, { start: 19, end: 22, }                          ).simplify()
  //   info 'Ωimt_248', ( ( new Rangeset() ).add { start: 4, end: 19, }, { start: 19, end: 22, }                          ).simplify()
  //   info 'Ωimt_249', ( ( new Rangeset() ).add { start: 4, end: 20, }, { start: 19, end: 22, }                          ).simplify()
  //   info 'Ωimt_250', ( ( new Rangeset() ).add { start: 4, end: 21, }, { start: 19, end: 22, }                          ).simplify()
  //   info 'Ωimt_251', ( ( new Rangeset() ).add { start: 3, end:  9, }, { start:  9, end: 13, }                          ).simplify()
  //   info 'Ωimt_252', ( ( new Rangeset() ).add { start: 3, end:  9, }, { start:  9, end: 13, }, { start: 11, end: 14, } ).simplify() # [{ start: 3, end: 14 }]
  //   info 'Ωimt_253', ( ( new Rangeset() ).add { start: 3, end:  9, }, { start: 10, end: 13, }, { start: 11, end: 14, } ).simplify()
  //   info()
  //   info 'Ωimt_254', ( ( new Rangeset() ).add()                                                                        ).simplify()
  //   info 'Ωimt_255', ( ( new Rangeset() ).add { lo: 4, hi: 19, }                                                       ).simplify()
  //   info 'Ωimt_256', ( ( new Rangeset() ).add { lo: 4, hi: 17, }, { lo: 19, hi: 21, }                                  ).simplify()
  //   info 'Ωimt_257', ( ( new Rangeset() ).add { lo: 4, hi: 18, }, { lo: 19, hi: 21, }                                  ).simplify()
  //   info 'Ωimt_258', ( ( new Rangeset() ).add { lo: 4, hi: 19, }, { lo: 19, hi: 21, }                                  ).simplify()
  //   info 'Ωimt_259', ( ( new Rangeset() ).add { lo: 4, hi: 20, }, { lo: 19, hi: 21, }                                  ).simplify()
  //   info 'Ωimt_260', ( ( new Rangeset() ).add { lo: 3, hi:  8, }, { lo:  9, hi: 12, }                                  ).simplify()
  //   info 'Ωimt_261', ( ( new Rangeset() ).add { lo: 3, hi:  8, }, { lo:  9, hi: 12, }, { lo: 11, hi: 13, }             ).simplify() # [{ lo: 3, hi: 13 }]
  //   info 'Ωimt_262', ( ( new Rangeset() ).add { lo: 3, hi:  8, }, { lo: 10, hi: 12, }, { lo: 11, hi: 13, }             ).simplify()
  //   rng_2 = [
  //     { start:  3, end: 10, data: 2, }
  //     { start:  9, end: 13, data: 3, }
  //     { start: 11, end: 14, data: 5, }
  //     ]
  //   merge_data_2 = ( a, b ) ->
  //     # debug 'Ωimt_263', { a, b, } #, { a..., b..., }
  //     return { a..., data: a.data * b.data, }
  //   merged = IFN.merge ( create_reducer merge_data_2 ), rng_2 # [{ start: 3, end: 14 }]
  //   info 'Ωimt_264', rng for rng in merged
  //   # urge 'Ωimt_265', rng for rng in merged_ft
  //   # urge()
  //   ;null

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
      return (new Test(guytest_cfg)).test({
        containment: tests.containment
      });
    })();
  }

  // ( new Test guytest_cfg ).test { basic_scatters: tests.basic_scatters, }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtaW50ZXJtaXNzaW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0Isd0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFBLEdB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QUEsSUFBeEM7OztFQXhlQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLWludGVybWlzc2lvbidcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5GUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNfcnVuczogLT5cbiAgICB7IEhvYXJkLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2ludGVybWlzc2lvbigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBoID0gbmV3IEhvYXJkKClcbiAgICBAdGhyb3dzICggzqlpbXRfX18xID0gLT4gaC5jcmVhdGVfcnVuKCkgICAgICAgICAgICksIC9leHBlY3RlZCBhbiBpbnRlZ2VyIG9yIGEgdGV4dCwgZ290IGEgbnVsbC9cbiAgICBAdGhyb3dzICggzqlpbXRfX18yID0gLT4gaC5jcmVhdGVfcnVuIHsgaGk6IDcsIH0gICksIC9leHBlY3RlZCBhbiBpbnRlZ2VyIG9yIGEgdGV4dCwgZ290IGEgbnVsbC9cbiAgICAjIGQgPSBoLmNyZWF0ZV9ydW4oKTsgICAgICAgICAgICAgICAgICBAZXEgKCDOqWltdF9fXzMgPSAtPiBbIGQsIGQuc2l6ZSwgXSApLCBbIHsgbG86IDAsIGhpOiAwLCB9LCAgMSwgXVxuICAgIGQgPSBoLmNyZWF0ZV9ydW4gNzsgICAgICAgICAgICAgICAgICBAZXEgKCDOqWltdF9fXzQgPSAtPiBbIGQsIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiA3LCB9LCAgMSwgXVxuICAgIGQgPSBoLmNyZWF0ZV9ydW4gNywgNzsgICAgICAgICAgICAgICBAZXEgKCDOqWltdF9fXzUgPSAtPiBbIGQsIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiA3LCB9LCAgMSwgXVxuICAgIGQgPSBoLmNyZWF0ZV9ydW4gNywgMTI7ICAgICAgICAgICAgICBAZXEgKCDOqWltdF9fXzYgPSAtPiBbIGQsIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiAxMiwgfSwgNiwgXVxuICAgIGQgPSBoLmNyZWF0ZV9ydW4geyBsbzogNywgfTsgICAgICAgICBAZXEgKCDOqWltdF9fXzcgPSAtPiBbIGQsIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiA3LCB9LCAgMSwgXVxuICAgIGQgPSBoLmNyZWF0ZV9ydW4geyBsbzogNywgaGk6IDcsIH07ICBAZXEgKCDOqWltdF9fXzggPSAtPiBbIGQsIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiA3LCB9LCAgMSwgXVxuICAgIGQgPSBoLmNyZWF0ZV9ydW4geyBsbzogNywgaGk6IDIxLCB9OyBAZXEgKCDOqWltdF9fXzkgPSAtPiBbIGQsIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiAyMSwgfSwgMTUsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paW10X18xMCA9IC0+ICggaC5jcmVhdGVfcnVuIDEsIDEgKS5zY2F0dGVyICksIHVuZGVmaW5lZFxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBiYXNpY19zY2F0dGVyczogLT5cbiAgICB7IEhvYXJkLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2ludGVybWlzc2lvbigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5jcmVhdGVfc2NhdHRlciB7IGRhdGE6IHsgYTogMSwgfSB9XG4gICAgICBAZXEgKCDOqWltdF9fMTEgPSAtPiB7IHMuLi4sIH0gKSwgeyBkYXRhOiB7IGE6IDEsIH0sIHJ1bnM6IFtdLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMTIgPSAtPiBzLmlzX25vcm1hbGl6ZWQgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHMuYWRkIHsgbG86IDEsIGhpOiAxLCB9OyAgICAgICAgICBAZXEgKCDOqWltdF9fMTMgPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAxXG4gICAgICBzLmFkZCAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgQGVxICggzqlpbXRfXzE0ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMlxuICAgICAgcy5hZGQgeyBsbzogMSwgaGk6IDEsIH07ICAgICAgICAgIEBlcSAoIM6paW10X18xNSA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDNcbiAgICAgICMgcy5hZGQgbmV3IFJ1biB7IGxvOiAxLCBoaTogMSwgfTsgIEBlcSAoIM6paW10X18xNiA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbXRfXzE3ID0gLT4gcy5pc19ub3JtYWxpemVkICAgKSwgZmFsc2VcbiAgICAgICMgQGVxICggzqlpbXRfXzE4ID0gLT4gcy5pc19zb3J0ZWQgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X18xOSA9IC0+IHMuZGF0YSAgICAgICAgICAgICksIHsgYTogMSwgfVxuICAgICAgQGVxICggzqlpbXRfXzIwID0gLT4gcy5ydW5zWyAwIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18yMSA9IC0+IHMucnVuc1sgMSBdICAgICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMjIgPSAtPiBzLnJ1bnNbIDIgXSAgICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmNyZWF0ZV9zY2F0dGVyIHsgZGF0YTogeyBhOiAyLCB9LCBzb3J0OiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMjMgPSAtPiBzLmlzX25vcm1hbGl6ZWQgICApLCB0cnVlXG4gICAgICAjIEBlcSAoIM6paW10X18yNCA9IC0+IHMuaXNfc29ydGVkICAgICAgICksIGZhbHNlXG4gICAgICBzLmFkZCB7IGxvOiAxLCBoaTogMSwgfTsgICAgICAgICAgQGVxICggzqlpbXRfXzI1ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMTsgQGVxICggzqlpbXRfXzI2ID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBzLmFkZCAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgQGVxICggzqlpbXRfXzI3ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMjsgQGVxICggzqlpbXRfXzI4ID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBzLmFkZCB7IGxvOiAxLCBoaTogMSwgfTsgICAgICAgICAgQGVxICggzqlpbXRfXzI5ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMzsgQGVxICggzqlpbXRfXzMwID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICAjIHMuYWRkIG5ldyBSdW4geyBsbzogMSwgaGk6IDEsIH07ICBAZXEgKCDOqWltdF9fMzEgPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAzOyBAZXEgKCDOqWltdF9fMzIgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbXRfXzMzID0gLT4gcy5kYXRhICAgICAgICAgICAgKSwgeyBhOiAyLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMzQgPSAtPiBzLnJ1bnNbIDAgXSAgICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgQGVxICggzqlpbXRfXzM1ID0gLT4gcy5ydW5zWyAxIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18zNiA9IC0+IHMucnVuc1sgMiBdICAgICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguY3JlYXRlX3NjYXR0ZXIgeyBkYXRhOiB7IGE6IDMsIH0sIG5vcm1hbGl6ZTogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlpbXRfXzM3ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIHsgbG86IDEsIGhpOiAxLCB9OyAgICAgICAgICBAZXEgKCDOqWltdF9fMzggPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X18zOSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgQGVxICggzqlpbXRfXzQwID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxOyBAZXEgKCDOqWltdF9fNDEgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgeyBsbzogMSwgaGk6IDEsIH07ICAgICAgICAgIEBlcSAoIM6paW10X180MiA9IC0+IHMucnVucy5sZW5ndGggKSwgMTsgQGVxICggzqlpbXRfXzQzID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgICMgcy5hZGQgbmV3IFJ1biB7IGxvOiAxLCBoaTogMSwgfTsgIEBlcSAoIM6paW10X180NCA9IC0+IHMucnVucy5sZW5ndGggKSwgMTsgQGVxICggzqlpbXRfXzQ1ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbXRfXzQ2ID0gLT4gcy5kYXRhICAgICAgICAgICAgKSwgeyBhOiAzLCB9XG4gICAgICBAZXEgKCDOqWltdF9fNDcgPSAtPiBzLnJ1bnNbIDAgXSAgICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmNyZWF0ZV9zY2F0dGVyIHsgZGF0YTogeyBhOiA0LCB9LCBub3JtYWxpemU6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6paW10X180OCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAxMDM7ICBAZXEgKCDOqWltdF9fNDkgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X181MCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAxMDA7ICBAZXEgKCDOqWltdF9fNTEgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDI7IEBlcSAoIM6paW10X181MiA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAxMDE7ICBAZXEgKCDOqWltdF9fNTMgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDI7IEBlcSAoIM6paW10X181NCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRlYnVnICfOqWltdF9fNTUnLCBydW4gZm9yIHJ1biBpbiBzLnJ1bnNcbiAgICAgIEBlcSAoIM6paW10X181NiA9IC0+IHMuZGF0YSAgICAgICAgICAgICksIHsgYTogNCwgfVxuICAgICAgQGVxICggzqlpbXRfXzU3ID0gLT4gcy5ydW5zWyAwIF0gICAgICAgKSwgeyBsbzogMTAwLCBoaTogMTAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fNTggPSAtPiBzLnJ1bnNbIDEgXSAgICAgICApLCB7IGxvOiAxMDMsIGhpOiAxMDMsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5jcmVhdGVfc2NhdHRlciB7IG5vcm1hbGl6ZTogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlpbXRfXzU5ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIDEwMywgMTA5OyAgIEBlcSAoIM6paW10X182MCA9IC0+IHMucnVucy5sZW5ndGggKSwgMTsgQGVxICggzqlpbXRfXzYxID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIDExMSwgMTE1OyAgIEBlcSAoIM6paW10X182MiA9IC0+IHMucnVucy5sZW5ndGggKSwgMjsgQGVxICggzqlpbXRfXzYzID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIDExMDsgICAgICAgIEBlcSAoIM6paW10X182NCA9IC0+IHMucnVucy5sZW5ndGggKSwgMTsgQGVxICggzqlpbXRfXzY1ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X182NiA9IC0+IHsgbWluOiBzLm1pbiwgbWF4OiBzLm1heCwgfSApLCB7IG1pbjogMTAzLCBtYXg6IDExNSwgfVxuICAgICAgQGVxICggzqlpbXRfXzY3ID0gLT4gcy5taW5tYXggICAgICAgICAgICAgICAgICAgICksIHsgbWluOiAxMDMsIG1heDogMTE1LCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paW10X182OCA9IC0+IHMucnVuc1sgMCBdICAgICAgICksIHsgbG86IDEwMywgaGk6IDExNSwgfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmNyZWF0ZV9zY2F0dGVyIHsgbm9ybWFsaXplOiBmYWxzZSwgfVxuICAgICAgQGVxICggzqlpbXRfXzY5ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIDEwMywgMTA5OyAgIEBlcSAoIM6paW10X183MCA9IC0+IHMucnVucy5sZW5ndGggKSwgMTsgQGVxICggzqlpbXRfXzcxID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBzLmFkZCAxMTEsIDExNTsgICBAZXEgKCDOqWltdF9fNzIgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDI7IEBlcSAoIM6paW10X183MyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgcy5hZGQgMTEwOyAgICAgICAgQGVxICggzqlpbXRfXzc0ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAzOyBAZXEgKCDOqWltdF9fNzUgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X183NiA9IC0+IHsgbWluOiBzLm1pbiwgbWF4OiBzLm1heCwgfSApLCB7IG1pbjogMTAzLCBtYXg6IDExNSwgfVxuICAgICAgQGVxICggzqlpbXRfXzc3ID0gLT4gcy5taW5tYXggICAgICAgICAgICAgICAgICAgICksIHsgbWluOiAxMDMsIG1heDogMTE1LCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paW10X183OCA9IC0+IHMucnVuc1sgMCBdICksIHsgbG86IDEwMywgaGk6IDEwOSwgfVxuICAgICAgQGVxICggzqlpbXRfXzc5ID0gLT4gcy5ydW5zWyAxIF0gKSwgeyBsbzogMTExLCBoaTogMTE1LCB9XG4gICAgICBAZXEgKCDOqWltdF9fODAgPSAtPiBzLnJ1bnNbIDIgXSApLCB7IGxvOiAxMTAsIGhpOiAxMTAsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29udGFpbm1lbnQ6IC0+XG4gICAgeyBIb2FyZCwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9pbnRlcm1pc3Npb24oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgciA9IGguY3JlYXRlX3J1biB7IGxvOiAyNSwgaGk6IDMwLCB9XG4gICAgICBAZXEgKCDOqWltdF9fODEgPSAtPiByLmNvbnRhaW5zIDIxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fODIgPSAtPiByLmNvbnRhaW5zIDIyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fODMgPSAtPiByLmNvbnRhaW5zIDIzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fODQgPSAtPiByLmNvbnRhaW5zIDI0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fODUgPSAtPiByLmNvbnRhaW5zIDI1ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X184NiA9IC0+IHIuY29udGFpbnMgMjYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzg3ID0gLT4gci5jb250YWlucyAyNyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODggPSAtPiByLmNvbnRhaW5zIDI4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X184OSA9IC0+IHIuY29udGFpbnMgMjkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzkwID0gLT4gci5jb250YWlucyAzMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTEgPSAtPiByLmNvbnRhaW5zIDMxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fOTIgPSAtPiByLmNvbnRhaW5zIDQxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fOTMgPSAtPiByLmNvbnRhaW5zIFsgMjUsIF0gICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X185NCA9IC0+IHIuY29udGFpbnMgWyAzMCwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzk1ID0gLT4gci5jb250YWlucyBbIDMxLCBdICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzk2ID0gLT4gci5jb250YWlucyBbIDMyLCBdICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzk3ID0gLT4gci5jb250YWlucyBbIDI1IC4uIDMwIF0gICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTggPSAtPiByLmNvbnRhaW5zIFsgMjUgLi4gMzEgXSAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fOTkgPSAtPiByLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMwIF0gKSgpICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEwMCA9IC0+IHIuY29udGFpbnMgKCAtPiB5aWVsZCBmcm9tIFsgMjUgLi4gMzEgXSApKCkgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzEwMSA9IC0+IHIuY29udGFpbnMgKCAtPiB5aWVsZCBmcm9tIFsgMjUgLi4gMzIgXSApKCkgKSwgZmFsc2VcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5jcmVhdGVfc2NhdHRlcigpXG4gICAgICBzLmFkZCAyNSwgMzBcbiAgICAgIHMuYWRkIDMyLCA0MFxuICAgICAgQGVxICggzqlpbXRfMTAyID0gLT4gcy5jb250YWlucyAyMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTAzID0gLT4gcy5jb250YWlucyAyMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTA0ID0gLT4gcy5jb250YWlucyAyMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTA1ID0gLT4gcy5jb250YWlucyAyNCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTA2ID0gLT4gcy5jb250YWlucyAyNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMDcgPSAtPiBzLmNvbnRhaW5zIDI2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEwOCA9IC0+IHMuY29udGFpbnMgMjcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTA5ID0gLT4gcy5jb250YWlucyAyOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMTAgPSAtPiBzLmNvbnRhaW5zIDI5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzExMSA9IC0+IHMuY29udGFpbnMgMzAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTEyID0gLT4gcy5jb250YWlucyAzMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTEzID0gLT4gcy5jb250YWlucyAzMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMTQgPSAtPiBzLmNvbnRhaW5zIDMzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzExNSA9IC0+IHMuY29udGFpbnMgMzQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTE2ID0gLT4gcy5jb250YWlucyAzNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMTcgPSAtPiBzLmNvbnRhaW5zIDM2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzExOCA9IC0+IHMuY29udGFpbnMgMzcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTE5ID0gLT4gcy5jb250YWlucyAzOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMjAgPSAtPiBzLmNvbnRhaW5zIDM5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEyMSA9IC0+IHMuY29udGFpbnMgNDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTIyID0gLT4gcy5jb250YWlucyA0MSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTIzID0gLT4gcy5jb250YWlucyA0MiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTI0ID0gLT4gcy5jb250YWlucyA0MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTI1ID0gLT4gcy5jb250YWlucyBbIDI1IC4uIDMwIF0gICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMjYgPSAtPiBzLmNvbnRhaW5zIFsgMjUgLi4gMzEgXSAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMjcgPSAtPiBzLmNvbnRhaW5zIFsgMzAsIF0gICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEyOCA9IC0+IHMuY29udGFpbnMgWyAzMSwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzEyOSA9IC0+IHMuY29udGFpbnMgWyAzMiwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTMwID0gLT4gcy5jb250YWlucyAoIC0+IHlpZWxkIGZyb20gWyAyNSAuLiAzMCBdICkoKSApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMzEgPSAtPiBzLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMxIF0gKSgpICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMzIgPSAtPiBzLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMyIF0gKSgpICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMzMgPSAtPiBzLmNvbnRhaW5zICggaC5jcmVhdGVfcnVuIDI1ICAgICAgICAgICAgICApICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEzNCA9IC0+IHMuY29udGFpbnMgKCBoLmNyZWF0ZV9ydW4gMjUsIDMwICAgICAgICAgICkgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTM1ID0gLT4gcy5jb250YWlucyAoIGguY3JlYXRlX3J1biAyNSwgMzIgICAgICAgICAgKSApLCBmYWxzZVxuICAgICAgczEgPSBoLmNyZWF0ZV9zY2F0dGVyKClcbiAgICAgIHMxLmFkZCAyNiwgMjdcbiAgICAgIHMxLmFkZCAzNywgNDBcbiAgICAgIEBlcSAoIM6paW10XzEzNiA9IC0+IHMxLmlzX25vcm1hbGl6ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzEzNyA9IC0+IHMuY29udGFpbnMgczEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTM4ID0gLT4gczEuaXNfbm9ybWFsaXplZCAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBzMS5hZGQgMjUsIDMyXG4gICAgICBAZXEgKCDOqWltdF8xMzkgPSAtPiBzLmNvbnRhaW5zIHMxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xNDAgPSAtPiBzLmlzX25vcm1hbGl6ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIHMuYWRkIDMxXG4gICAgICBAZXEgKCDOqWltdF8xNDEgPSAtPiBzLmlzX25vcm1hbGl6ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xNDIgPSAtPiBzLmNvbnRhaW5zIHMxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzE0MyA9IC0+IHMuaXNfbm9ybWFsaXplZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpdGVyYXRpb246IC0+XG4gICAgeyBIb2FyZCwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9pbnRlcm1pc3Npb24oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgQGVxICggzqlpbXRfMTQ0ID0gLT4gWyAoIGguY3JlYXRlX3J1biAxICAgICAgICAgKS4uLiwgXSAgICAgICApLCBbIDEsIF1cbiAgICAgIEBlcSAoIM6paW10XzE0NSA9IC0+IFsgKCBoLmNyZWF0ZV9ydW4gMjk3ICAgICAgICkuLi4sIF0gICAgICAgKSwgWyAyOTcsIF1cbiAgICAgIEBlcSAoIM6paW10XzE0NiA9IC0+IFsgKCBoLmNyZWF0ZV9ydW4gMjk3LCAzMDggICkuLi4sIF0gICAgICAgKSwgWyAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCAzMDMsIDMwNCwgMzA1LCAzMDYsIDMwNywgMzA4IF1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5jcmVhdGVfc2NhdHRlcigpXG4gICAgICBAZXEgKCDOqWltdF8xNDcgPSAtPiBbIHMuLi4sIF0gICAgICAgKSwgW11cbiAgICAgIHMuYWRkIDE7ICAgICAgICBAZXEgKCDOqWltdF8xNDggPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xNDkgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMjk3OyAgICAgIEBlcSAoIM6paW10XzE1MCA9IC0+IFsgcy4uLiwgXSApLCBbIDEsIDI5NywgICAgICAgICAgICAgICAgICAgICAgICAgIF07IEBlcSAoIM6paW10XzE1MSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAyOTksIDMwMjsgQGVxICggzqlpbXRfMTUyID0gLT4gWyBzLi4uLCBdICksIFsgMSwgMjk3LCAgICAgIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTUzID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIDI5ODsgICAgICBAZXEgKCDOqWltdF8xNTQgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNTUgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMzAwLCAzMDE7IEBlcSAoIM6paW10XzE1NiA9IC0+IFsgcy4uLiwgXSApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzE1NyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xNTggPSAtPiBzLnJ1bnMubGVuZ3RoICAgKSwgMlxuICAgICAgQGVxICggzqlpbXRfMTU5ID0gLT4gcy5ydW5zWyAwIF0gICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF8xNjAgPSAtPiBzLnJ1bnNbIDEgXSAgICAgKSwgeyBsbzogMjk3LCBoaTogMzAyLCB9XG4gICAgICBAZXEgKCDOqWltdF8xNjEgPSAtPiBzLnBvaW50cyAgICAgICAgKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyIF1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5jcmVhdGVfc2NhdHRlcigpXG4gICAgICBAZXEgKCDOqWltdF8xNjIgPSAtPiBbIHMud2FsaygpLi4uLCBdICAgICAgICksIFtdXG4gICAgICBzLmFkZCAxOyAgICAgICAgQGVxICggzqlpbXRfMTYzID0gLT4gWyBzLndhbGsoKS4uLiwgXSApLCBbIDEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07IEBlcSAoIM6paW10XzE2NCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAyOTc7ICAgICAgQGVxICggzqlpbXRfMTY1ID0gLT4gWyBzLndhbGsoKS4uLiwgXSApLCBbIDEsIDI5NywgICAgICAgICAgICAgICAgICAgICAgICAgIF07IEBlcSAoIM6paW10XzE2NiA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAyOTksIDMwMjsgQGVxICggzqlpbXRfMTY3ID0gLT4gWyBzLndhbGsoKS4uLiwgXSApLCBbIDEsIDI5NywgICAgICAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzE2OCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAyOTg7ICAgICAgQGVxICggzqlpbXRfMTY5ID0gLT4gWyBzLndhbGsoKS4uLiwgXSApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzE3MCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAzMDAsIDMwMTsgQGVxICggzqlpbXRfMTcxID0gLT4gWyBzLndhbGsoKS4uLiwgXSApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzE3MiA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xNzMgPSAtPiBzLnJ1bnMubGVuZ3RoICAgKSwgMlxuICAgICAgQGVxICggzqlpbXRfMTc0ID0gLT4gcy5ydW5zWyAwIF0gICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF8xNzUgPSAtPiBzLnJ1bnNbIDEgXSAgICAgKSwgeyBsbzogMjk3LCBoaTogMzAyLCB9XG4gICAgICBAZXEgKCDOqWltdF8xNzYgPSAtPiBzLnBvaW50cyAgICAgICAgKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyIF1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5jcmVhdGVfc2NhdHRlcigpXG4gICAgICBAZXEgKCDOqWltdF8xNzcgPSAtPiBbIHMud2Fsa19yYXcoKS4uLiwgXSAgICAgICApLCBbXVxuICAgICAgcy5hZGQgMTsgICAgICAgIEBlcSAoIM6paW10XzE3OCA9IC0+IFsgcy53YWxrX3JhdygpLi4uLCBdICksIFsgMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTsgQGVxICggzqlpbXRfMTc5ID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBzLmFkZCAyOTc7ICAgICAgQGVxICggzqlpbXRfMTgwID0gLT4gWyBzLndhbGtfcmF3KCkuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xODEgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIHMuYWRkIDI5OSwgMzAyOyBAZXEgKCDOqWltdF8xODIgPSAtPiBbIHMud2Fsa19yYXcoKS4uLiwgXSApLCBbIDEsIDI5NywgICAgICAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzE4MyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgcy5hZGQgMjk4OyAgICAgIEBlcSAoIM6paW10XzE4NCA9IC0+IFsgcy53YWxrX3JhdygpLi4uLCBdICksIFsgMSwgMjk3LCAyOTgsIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTg1ID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBzLmFkZCAzMDAsIDMwMTsgQGVxICggzqlpbXRfMTg2ID0gLT4gWyBzLndhbGtfcmF3KCkuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xODcgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzE4OCA9IC0+IHMucnVucy5sZW5ndGggICApLCA1XG4gICAgICBAZXEgKCDOqWltdF8xODkgPSAtPiBzLnJ1bnNbIDAgXSAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10XzE5MCA9IC0+IHMucnVuc1sgMSBdICAgICApLCB7IGxvOiAyOTcsIGhpOiAyOTcsIH1cbiAgICAgIEBlcSAoIM6paW10XzE5MSA9IC0+IHMucnVuc1sgMiBdICAgICApLCB7IGxvOiAyOTksIGhpOiAzMDIsIH1cbiAgICAgIEBlcSAoIM6paW10XzE5MiA9IC0+IHMucnVuc1sgMyBdICAgICApLCB7IGxvOiAyOTgsIGhpOiAyOTgsIH1cbiAgICAgIEBlcSAoIM6paW10XzE5MyA9IC0+IHMucnVuc1sgNCBdICAgICApLCB7IGxvOiAzMDAsIGhpOiAzMDEsIH1cbiAgICAgIEBlcSAoIM6paW10XzE5NCA9IC0+IHMucG9pbnRzICAgICAgICApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIgXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1c2luZ19zdHJpbmdzX2Zvcl9ib3VuZHM6IC0+XG4gICAgeyBIb2FyZCwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9pbnRlcm1pc3Npb24oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguY3JlYXRlX3NjYXR0ZXIoKVxuICAgICAgQHRocm93cyAoIM6paW10XzE5NSA9IC0+IHMuYWRkIDUuOCAgICAgICAgICksIC9leHBlY3RlZCBhbiBpbnRlZ2VyIG9yIGEgdGV4dCwgZ290IGEgZmxvYXQvXG4gICAgICBAdGhyb3dzICggzqlpbXRfMTk2ID0gLT4gcy5hZGQgLTMgICAgICAgICAgKSwgLy0weDMgaXMgbm90IGJldHdlZW4gXFwrMHgwIGFuZCBcXCsweDEwZmZmZi9cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8xOTcgPSAtPiBzLmFkZCAwLCAtMyAgICAgICApLCAvLTB4MyBpcyBub3QgYmV0d2VlbiBcXCsweDAgYW5kIFxcKzB4MTBmZmZmL1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkIHsgZmlyc3Q6IC0xMCwgbGFzdDogKzEwLCB9XG4gICAgICBzID0gaC5jcmVhdGVfc2NhdHRlcigpXG4gICAgICBzLmFkZCAtMTA7IEBlcSAoIM6paW10XzE5OCA9IC0+IHMucG9pbnRzICAgKSwgWyAtMTAsIF1cbiAgICAgIHMuYWRkICsxMDsgQGVxICggzqlpbXRfMTk5ID0gLT4gcy5wb2ludHMgICApLCBbIC0xMCwgKzEwLCBdXG4gICAgICBAdGhyb3dzICggzqlpbXRfMjAwID0gLT4gcy5hZGQgLTExICAgICAgICAgKSwgLy0weGIgaXMgbm90IGJldHdlZW4gLTB4YSBhbmQgXFwrMHhhL1xuICAgICAgQHRocm93cyAoIM6paW10XzIwMSA9IC0+IHMuYWRkICsxMSAgICAgICAgICksIC9cXCsweGIgaXMgbm90IGJldHdlZW4gLTB4YSBhbmQgXFwrMHhhL1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmNyZWF0ZV9zY2F0dGVyKClcbiAgICAgIHMuYWRkICdBJzsgICAgICBAZXEgKCDOqWltdF8yMDIgPSAtPiBzLnBvaW50cyAgICksIFsgKCAnQScuY29kZVBvaW50QXQgMCApLCBdXG4gICAgICBzLmFkZCAnQScsICdaJzsgQGVxICggzqlpbXRfMjAzID0gLT4gcy5wb2ludHMgICApLCBbIDY1LCA2NiwgNjcsIDY4LCA2OSwgNzAsIDcxLCA3MiwgNzMsIDc0LCA3NSwgNzYsIDc3LCA3OCwgNzksIDgwLCA4MSwgODIsIDgzLCA4NCwgODUsIDg2LCA4NywgODgsIDg5LCA5MCBdXG4gICAgICBzLmFkZCAnYScsICd6JzsgQGVxICggzqlpbXRfMjA0ID0gLT4gcy5wb2ludHMgICApLCBbIDY1LCA2NiwgNjcsIDY4LCA2OSwgNzAsIDcxLCA3MiwgNzMsIDc0LCA3NSwgNzYsIDc3LCA3OCwgNzksIDgwLCA4MSwgODIsIDgzLCA4NCwgODUsIDg2LCA4NywgODgsIDg5LCA5MCwgOTcsIDk4LCA5OSwgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAsIDEwMSwgMTAyLCAxMDMsIDEwNCwgMTA1LCAxMDYsIDEwNywgMTA4LCAxMDksIDExMCwgMTExLCAxMTIsIDExMywgMTE0LCAxMTUsIDExNiwgMTE3LCAxMTgsIDExOSwgMTIwLCAxMjEsIDEyMiwgXVxuICAgICAgQGVxICggzqlpbXRfMjA1ID0gLT4gcy5taW4gICksICggJ0EnLmNvZGVQb2ludEF0IDAgKVxuICAgICAgQGVxICggzqlpbXRfMjA2ID0gLT4gcy5tYXggICksICggJ3onLmNvZGVQb2ludEF0IDAgKVxuICAgICAgQGVxICggzqlpbXRfMjA3ID0gLT4geyBtaW46IHMubWluLCBtYXg6IHMubWF4LCB9ICApLCBzLm1pbm1heFxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmNyZWF0ZV9zY2F0dGVyKClcbiAgICAgIHMuYWRkICdBYmMnXG4gICAgICBAZXEgKCDOqWltdF8yMDggPSAtPiBzLnBvaW50cyAgICksIFsgKCAnQScuY29kZVBvaW50QXQgMCApLCBdXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguY3JlYXRlX3NjYXR0ZXIoKVxuICAgICAgcy5hZGRfY29kZXBvaW50c19vZiAnQWJjJ1xuICAgICAgQGVxICggzqlpbXRfMjA5ID0gLT4gcy5wb2ludHMgKSwgWyAoICdBJy5jb2RlUG9pbnRBdCAwICksICggJ2InLmNvZGVQb2ludEF0IDAgKSwgKCAnYycuY29kZVBvaW50QXQgMCApLCBdXG4gICAgICBAZXEgKCDOqWltdF8yMTAgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDNcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5jcmVhdGVfc2NhdHRlcigpXG4gICAgICBzLmFkZF9jb2RlcG9pbnRzX29mICdBYmMnXG4gICAgICBAZXEgKCDOqWltdF8yMTEgPSAtPiBzLnBvaW50cyApLCBbICggJ0EnLmNvZGVQb2ludEF0IDAgKSwgKCAnYicuY29kZVBvaW50QXQgMCApLCAoICdjJy5jb2RlUG9pbnRBdCAwICksIF1cbiAgICAgIEBlcSAoIM6paW10XzIxMiA9IC0+IHMucnVucy5sZW5ndGggKSwgM1xuICAgICAgcy5ub3JtYWxpemUoKVxuICAgICAgQGVxICggzqlpbXRfMjEzID0gLT4gcy5ydW5zLmxlbmd0aCApLCAyXG4gICAgICBAZXEgKCDOqWltdF8yMTQgPSAtPiBzLnJ1bnNbIDAgXSApLCB7IGxvOiAoICdBJy5jb2RlUG9pbnRBdCAwICksIGhpOiAoICdBJy5jb2RlUG9pbnRBdCAwICksIH1cbiAgICAgIEBlcSAoIM6paW10XzIxNSA9IC0+IHMucnVuc1sgMSBdICksIHsgbG86ICggJ2InLmNvZGVQb2ludEF0IDAgKSwgaGk6ICggJ2MnLmNvZGVQb2ludEF0IDAgKSwgfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmNyZWF0ZV9zY2F0dGVyKClcbiAgICAgIHMuYWRkX2NvZGVwb2ludHNfb2YgJ2FlaW91w6TDtsO8JywgJ2FlaW91w6TDtsO8JywgJ0FFSU9Vw4TDlsOcJywgJ0FFSU9Vw4TDlsOcJ1xuICAgICAgQGVxICggzqlpbXRfMjE2ID0gLT4gKCAoIFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZCApIGZvciBjaWQgaW4gcy5wb2ludHMgKS5qb2luICcnICksICdBRUlPVWFlaW91w4TDlsOcw6TDtsO8J1xuICAgICAgQGVxICggzqlpbXRfMjE3ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxNlxuICAgICAgcy5ub3JtYWxpemUoKVxuICAgICAgQGVxICggzqlpbXRfMjE4ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxNlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYXRhX3JldHJpZXZhbDogLT5cbiAgICB7IEhvYXJkLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2ludGVybWlzc2lvbigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5jcmVhdGVfc2NhdHRlciB7IGRhdGE6IHsgdGFnczogWyAndm93ZWwnLCBdLCB9LCB9XG4gICAgICBzLmFkZF9jb2RlcG9pbnRzX29mICdhZWlvdcOkw7bDvCcsICdhZWlvdcOkw7bDvCcsICdBRUlPVcOEw5bDnCcsICdBRUlPVcOEw5bDnCdcbiAgICAgIEBlcSAoIM6paW10XzIxOSA9IC0+IHMuY29udGFpbnMgJ0EnICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzIyMCA9IC0+IHMuZGF0YV9mb3IgJ0EnICksIHsgdGFnczogWyAndm93ZWwnLCBdLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMjEgPSAtPiBzLmNvbnRhaW5zICdCJyApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMjIyID0gLT4gcy5kYXRhX2ZvciAnQicgKSwgeyB0YWdzOiBbICd2b3dlbCcsIF0sIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuIyBmID0gLT5cbiMgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jIHN1bV9vZl9kYXRhID0gKCBhLCBiICkgPT5cbiMgICBkYXRhID0gWyBhLmRhdGEgPyBbXSwgYi5kYXRhID8gW10sIF0uZmxhdCgpXG4jICAgIyBkZWJ1ZyAnzqlpbXRfMjIzJywgeyBhLCBiLCB9XG4jICAgIyBkZWJ1ZyAnzqlpbXRfMjI0JywgeyBhLi4uLCBkYXRhLCB9XG4jICAgeyBhLi4uLCBkYXRhLCB9XG4jIGNyZWF0ZV9yZWR1Y2VyID0gKCBmbiApIC0+ICggcmFuZ2VzICkgPT4gcmFuZ2VzLnJlZHVjZSggZm4gKTtcblxuIyAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiMgZGVtb19pbnRlcnZhbHNfZm4gPSAtPlxuIyAgICMgZGVidWcgJ86paW10XzIyNScsICggayBmb3IgayBvZiBJRk4gKS5zb3J0KClcbiMgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4jICAgZG8gPT5cbiMgICAgIHJuZ18xICAgICAgID0gW1xuIyAgICAgICB7IHN0YXJ0OiAxLCBlbmQ6ICAxMCwgZGF0YTogICA1LCB9XG4jICAgICAgIHsgc3RhcnQ6IDQsIGVuZDogICA3LCBkYXRhOiAgMTAsIH1cbiMgICAgICAgeyBzdGFydDogNCwgZW5kOiAgMTIsIGRhdGE6ICAxMiwgfVxuIyAgICAgICB7IHN0YXJ0OiAwLCBlbmQ6IDEwMCwgZGF0YTogMTAyLCB9XG4jICAgICAgIHsgc3RhcnQ6IDAsIGVuZDogMTAwLCBkYXRhOiAxMDEsIH1cbiMgICAgICAgXVxuIyAgICAgbWVyZ2VkICAgICAgPSBJRk4ubWVyZ2UgKCBjcmVhdGVfcmVkdWNlciBzdW1fb2ZfZGF0YSApLCBybmdfMVxuIyAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuIyAgICAgdXJnZSgpXG4jICAgICB1cmdlICfOqWltdF8yMjYnLCBpZHggKyAxLCBybmcgZm9yIHJuZywgaWR4IGluIG1lcmdlZFxuIyAgICAgdXJnZSgpXG4jICAgICA7bnVsbFxuIyAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiMgICBkbyA9PlxuIyAgICAgcm5nXzEgICAgICAgPSBuZXcgUmFuZ2VzZXQgMVxuIyAgICAgcm5nXzEuYWRkIHsgbG86IDEsIGhpOiAgIDksIH1cbiMgICAgIHJuZ18xLmFkZCB7IGxvOiA0LCBoaTogICA2LCB9XG4jICAgICBybmdfMS5hZGQgeyBsbzogNCwgaGk6ICAxMSwgfVxuIyAgICAgcm5nXzEuYWRkIHsgbG86IDAsIGhpOiAgOTksIH1cbiMgICAgIHJuZ18xLmFkZCB7IGxvOiAwLCBoaTogIDk5LCB9XG4jICAgICBtZXJnZWQgICAgICA9IHJuZ18xLm1lcmdlICggY3JlYXRlX3JlZHVjZXIgc3VtX29mX2RhdGEgKVxuIyAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuIyAgICAgdXJnZSgpXG4jICAgICB1cmdlICfOqWltdF8yMjcnLCBpZHggKyAxLCBybmcgZm9yIHJuZywgaWR4IGluIG1lcmdlZC5yYW5nZXNcbiMgICAgIHVyZ2UoKVxuIyAgICAgO251bGxcbiMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4jICAgYSA9IHsgc3RhcnQ6IDQwLCBlbmQ6IDQ5LCB9OyBiID0geyBzdGFydDogNTAsIGVuZDogNTksIH07IGhlbHAgJ86paW10XzIyOCcsIGEsIGIsIHsgbWVldGluZzogKCBJRk4uaXNNZWV0aW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmc6ICggSUZOLmlzT3ZlcmxhcHBpbmcgYSwgYiApLCBvdmVybGFwcGluZ19zOiAoIElGTi5pc092ZXJsYXBwaW5nU2ltcGxlIGEsIGIgKSwgfVxuIyAgIGEgPSB7IHN0YXJ0OiA0MCwgZW5kOiA1MCwgfTsgYiA9IHsgc3RhcnQ6IDUwLCBlbmQ6IDU5LCB9OyBoZWxwICfOqWltdF8yMjknLCBhLCBiLCB7IG1lZXRpbmc6ICggSUZOLmlzTWVldGluZyBhLCBiICksIG92ZXJsYXBwaW5nOiAoIElGTi5pc092ZXJsYXBwaW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmdfczogKCBJRk4uaXNPdmVybGFwcGluZ1NpbXBsZSBhLCBiICksIH1cbiMgICBhID0geyBzdGFydDogNDAsIGVuZDogNTEsIH07IGIgPSB7IHN0YXJ0OiA1MCwgZW5kOiA1OSwgfTsgaGVscCAnzqlpbXRfMjMwJywgYSwgYiwgeyBtZWV0aW5nOiAoIElGTi5pc01lZXRpbmcgYSwgYiApLCBvdmVybGFwcGluZzogKCBJRk4uaXNPdmVybGFwcGluZyBhLCBiICksIG92ZXJsYXBwaW5nX3M6ICggSUZOLmlzT3ZlcmxhcHBpbmdTaW1wbGUgYSwgYiApLCB9XG4jICAgYSA9IHsgc3RhcnQ6IDQwLCBlbmQ6IDUyLCB9OyBiID0geyBzdGFydDogNTAsIGVuZDogNTksIH07IGhlbHAgJ86paW10XzIzMScsIGEsIGIsIHsgbWVldGluZzogKCBJRk4uaXNNZWV0aW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmc6ICggSUZOLmlzT3ZlcmxhcHBpbmcgYSwgYiApLCBvdmVybGFwcGluZ19zOiAoIElGTi5pc092ZXJsYXBwaW5nU2ltcGxlIGEsIGIgKSwgfVxuIyAgIGEgPSB7IHN0YXJ0OiAgNSwgZW5kOiAxMCwgfTsgYiA9IHsgc3RhcnQ6IDAsIGVuZDogNCB9OyBoZWxwICfOqWltdF8yMzInLCBhLCBiLCB7IG1lZXRpbmc6ICggSUZOLmlzTWVldGluZyBhLCBiICksIG92ZXJsYXBwaW5nOiAoIElGTi5pc092ZXJsYXBwaW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmdfczogKCBJRk4uaXNPdmVybGFwcGluZ1NpbXBsZSBhLCBiICksIH1cbiMgICBhID0geyBzdGFydDogIDUsIGVuZDogMTAsIH07IGIgPSB7IHN0YXJ0OiA3LCBlbmQ6IDggfTsgaGVscCAnzqlpbXRfMjMzJywgYSwgYiwgeyBtZWV0aW5nOiAoIElGTi5pc01lZXRpbmcgYSwgYiApLCBvdmVybGFwcGluZzogKCBJRk4uaXNPdmVybGFwcGluZyBhLCBiICksIG92ZXJsYXBwaW5nX3M6ICggSUZOLmlzT3ZlcmxhcHBpbmdTaW1wbGUgYSwgYiApLCB9XG4jICAgdHJ5XG4jICAgICBhID0geyBzdGFydDogIDUsIGVuZDogMTAsIH07IGIgPSBbIHsgc3RhcnQ6IDAsIGVuZDogNCB9LCB7IHN0YXJ0OiA3LCBlbmQ6IDggfSwgXTsgaGVscCAnzqlpbXRfMjM0JywgYSwgYiwgeyBtZWV0aW5nOiAoIElGTi5pc01lZXRpbmcgYSwgYiApLCBvdmVybGFwcGluZzogKCBJRk4uaXNPdmVybGFwcGluZyBhLCBiICksIG92ZXJsYXBwaW5nX3M6ICggSUZOLmlzT3ZlcmxhcHBpbmdTaW1wbGUgYSwgYiApLCB9XG4jICAgY2F0Y2ggZSB0aGVuIHdhcm4gJ86paW10XzIzNScsIGUubWVzc2FnZVxuIyAgIGluZm8oKVxuIyAgIGluZm8gJ86paW10XzIzNicsIElGTi5zaW1wbGlmeSBbXVxuIyAgIGluZm8gJ86paW10XzIzNycsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDQsIGVuZDogMjAsIH0sIF1cbiMgICBpbmZvICfOqWltdF8yMzgnLCBJRk4uc2ltcGxpZnkgWyB7IHN0YXJ0OiA0LCBlbmQ6IDE4LCB9LCB7IHN0YXJ0OiAxOSwgZW5kOiAyMiwgfSwgXVxuIyAgIGluZm8gJ86paW10XzIzOScsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDQsIGVuZDogMTksIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9LCBdXG4jICAgaW5mbyAnzqlpbXRfMjQwJywgSUZOLnNpbXBsaWZ5IFsgeyBzdGFydDogNCwgZW5kOiAyMCwgfSwgeyBzdGFydDogMTksIGVuZDogMjIsIH0sIF1cbiMgICBpbmZvICfOqWltdF8yNDEnLCBJRk4uc2ltcGxpZnkgWyB7IHN0YXJ0OiA0LCBlbmQ6IDIxLCB9LCB7IHN0YXJ0OiAxOSwgZW5kOiAyMiwgfSwgXVxuIyAgIGluZm8gJ86paW10XzI0MicsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDMsIGVuZDogIDksIH0sIHsgc3RhcnQ6ICA5LCBlbmQ6IDEzLCB9LCBdXG4jICAgaW5mbyAnzqlpbXRfMjQzJywgSUZOLnNpbXBsaWZ5IFsgeyBzdGFydDogMywgZW5kOiAgOSwgfSwgeyBzdGFydDogIDksIGVuZDogMTMsIH0sIHsgc3RhcnQ6IDExLCBlbmQ6IDE0LCB9LCBdICMgW3sgc3RhcnQ6IDMsIGVuZDogMTQgfV1cbiMgICBpbmZvICfOqWltdF8yNDQnLCBJRk4uc2ltcGxpZnkgWyB7IHN0YXJ0OiAzLCBlbmQ6ICA5LCB9LCB7IHN0YXJ0OiAxMCwgZW5kOiAxMywgfSwgeyBzdGFydDogMTEsIGVuZDogMTQsIH0sIF1cbiMgICBpbmZvKClcbiMgICBpbmZvICfOqWltdF8yNDUnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuIyAgIGluZm8gJ86paW10XzI0NicsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IHN0YXJ0OiA0LCBlbmQ6IDIwLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4jICAgaW5mbyAnzqlpbXRfMjQ3JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDQsIGVuZDogMTgsIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiMgICBpbmZvICfOqWltdF8yNDgnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBzdGFydDogNCwgZW5kOiAxOSwgfSwgeyBzdGFydDogMTksIGVuZDogMjIsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuIyAgIGluZm8gJ86paW10XzI0OScsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IHN0YXJ0OiA0LCBlbmQ6IDIwLCB9LCB7IHN0YXJ0OiAxOSwgZW5kOiAyMiwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4jICAgaW5mbyAnzqlpbXRfMjUwJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDQsIGVuZDogMjEsIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiMgICBpbmZvICfOqWltdF8yNTEnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBzdGFydDogMywgZW5kOiAgOSwgfSwgeyBzdGFydDogIDksIGVuZDogMTMsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuIyAgIGluZm8gJ86paW10XzI1MicsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IHN0YXJ0OiAzLCBlbmQ6ICA5LCB9LCB7IHN0YXJ0OiAgOSwgZW5kOiAxMywgfSwgeyBzdGFydDogMTEsIGVuZDogMTQsIH0gKS5zaW1wbGlmeSgpICMgW3sgc3RhcnQ6IDMsIGVuZDogMTQgfV1cbiMgICBpbmZvICfOqWltdF8yNTMnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBzdGFydDogMywgZW5kOiAgOSwgfSwgeyBzdGFydDogMTAsIGVuZDogMTMsIH0sIHsgc3RhcnQ6IDExLCBlbmQ6IDE0LCB9ICkuc2ltcGxpZnkoKVxuIyAgIGluZm8oKVxuIyAgIGluZm8gJ86paW10XzI1NCcsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4jICAgaW5mbyAnzqlpbXRfMjU1JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDQsIGhpOiAxOSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiMgICBpbmZvICfOqWltdF8yNTYnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBsbzogNCwgaGk6IDE3LCB9LCB7IGxvOiAxOSwgaGk6IDIxLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuIyAgIGluZm8gJ86paW10XzI1NycsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IGxvOiA0LCBoaTogMTgsIH0sIHsgbG86IDE5LCBoaTogMjEsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4jICAgaW5mbyAnzqlpbXRfMjU4JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDQsIGhpOiAxOSwgfSwgeyBsbzogMTksIGhpOiAyMSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiMgICBpbmZvICfOqWltdF8yNTknLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBsbzogNCwgaGk6IDIwLCB9LCB7IGxvOiAxOSwgaGk6IDIxLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuIyAgIGluZm8gJ86paW10XzI2MCcsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IGxvOiAzLCBoaTogIDgsIH0sIHsgbG86ICA5LCBoaTogMTIsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4jICAgaW5mbyAnzqlpbXRfMjYxJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDMsIGhpOiAgOCwgfSwgeyBsbzogIDksIGhpOiAxMiwgfSwgeyBsbzogMTEsIGhpOiAxMywgfSAgICAgICAgICAgICApLnNpbXBsaWZ5KCkgIyBbeyBsbzogMywgaGk6IDEzIH1dXG4jICAgaW5mbyAnzqlpbXRfMjYyJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDMsIGhpOiAgOCwgfSwgeyBsbzogMTAsIGhpOiAxMiwgfSwgeyBsbzogMTEsIGhpOiAxMywgfSAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiMgICBybmdfMiA9IFtcbiMgICAgIHsgc3RhcnQ6ICAzLCBlbmQ6IDEwLCBkYXRhOiAyLCB9XG4jICAgICB7IHN0YXJ0OiAgOSwgZW5kOiAxMywgZGF0YTogMywgfVxuIyAgICAgeyBzdGFydDogMTEsIGVuZDogMTQsIGRhdGE6IDUsIH1cbiMgICAgIF1cbiMgICBtZXJnZV9kYXRhXzIgPSAoIGEsIGIgKSAtPlxuIyAgICAgIyBkZWJ1ZyAnzqlpbXRfMjYzJywgeyBhLCBiLCB9ICMsIHsgYS4uLiwgYi4uLiwgfVxuIyAgICAgcmV0dXJuIHsgYS4uLiwgZGF0YTogYS5kYXRhICogYi5kYXRhLCB9XG4jICAgbWVyZ2VkID0gSUZOLm1lcmdlICggY3JlYXRlX3JlZHVjZXIgbWVyZ2VfZGF0YV8yICksIHJuZ18yICMgW3sgc3RhcnQ6IDMsIGVuZDogMTQgfV1cbiMgICBpbmZvICfOqWltdF8yNjQnLCBybmcgZm9yIHJuZyBpbiBtZXJnZWRcbiMgICAjIHVyZ2UgJ86paW10XzI2NScsIHJuZyBmb3Igcm5nIGluIG1lcmdlZF9mdFxuIyAgICMgdXJnZSgpXG4jICAgO251bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGNvbnRhaW5tZW50OiB0ZXN0cy5jb250YWlubWVudCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgYmFzaWNfc2NhdHRlcnM6IHRlc3RzLmJhc2ljX3NjYXR0ZXJzLCB9XG5cbiJdfQ==
