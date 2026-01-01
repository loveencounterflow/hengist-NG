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
        var s, Ωimt__53, Ωimt__54, Ωimt__55, Ωimt__56, Ωimt__57, Ωimt__58, Ωimt__59, Ωimt__60, Ωimt__61, Ωimt__62;
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
        this.eq((Ωimt__60 = function() {
          return {
            min: s.min,
            max: s.max
          };
        }), {
          min: 103,
          max: 115
        });
        this.eq((Ωimt__61 = function() {
          return s.minmax;
        }), {
          min: 103,
          max: 115
        });
        //.....................................................................................................
        this.eq((Ωimt__62 = function() {
          return s.runs[0];
        }), {
          lo: 103,
          hi: 115
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt__63, Ωimt__64, Ωimt__65, Ωimt__66, Ωimt__67, Ωimt__68, Ωimt__69, Ωimt__70, Ωimt__71, Ωimt__72, Ωimt__73, Ωimt__74;
        s = new Scatter({
          normalize: false
        });
        this.eq((Ωimt__63 = function() {
          return s.is_normalized;
        }), true);
        s.add(103, 109);
        this.eq((Ωimt__64 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__65 = function() {
          return s.is_normalized;
        }), false);
        s.add(111, 115);
        this.eq((Ωimt__66 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__67 = function() {
          return s.is_normalized;
        }), false);
        s.add(110);
        this.eq((Ωimt__68 = function() {
          return s.runs.length;
        }), 3);
        this.eq((Ωimt__69 = function() {
          return s.is_normalized;
        }), false);
        this.eq((Ωimt__70 = function() {
          return {
            min: s.min,
            max: s.max
          };
        }), {
          min: 103,
          max: 115
        });
        this.eq((Ωimt__71 = function() {
          return s.minmax;
        }), {
          min: 103,
          max: 115
        });
        //.....................................................................................................
        this.eq((Ωimt__72 = function() {
          return s.runs[0];
        }), {
          lo: 103,
          hi: 109
        });
        this.eq((Ωimt__73 = function() {
          return s.runs[1];
        }), {
          lo: 111,
          hi: 115
        });
        this.eq((Ωimt__74 = function() {
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
      var Run, Scatter;
      ({Run, Scatter} = SFMODULES.require_intermission());
      (() => {        //.......................................................................................................
        var s, Ωimt__75, Ωimt__76, Ωimt__77, Ωimt__78, Ωimt__79, Ωimt__80, Ωimt__81, Ωimt__82, Ωimt__83, Ωimt__84, Ωimt__85, Ωimt__86, Ωimt__87, Ωimt__88, Ωimt__89, Ωimt__90, Ωimt__91, Ωimt__92, Ωimt__93, Ωimt__94, Ωimt__95, Ωimt__96, Ωimt__97;
        s = new Scatter();
        s.add(25, 30);
        s.add(32, 40);
        this.eq((Ωimt__75 = function() {
          return s.has(21);
        }), false);
        this.eq((Ωimt__76 = function() {
          return s.has(22);
        }), false);
        this.eq((Ωimt__77 = function() {
          return s.has(23);
        }), false);
        this.eq((Ωimt__78 = function() {
          return s.has(24);
        }), false);
        this.eq((Ωimt__79 = function() {
          return s.has(25);
        }), true);
        this.eq((Ωimt__80 = function() {
          return s.has(26);
        }), true);
        this.eq((Ωimt__81 = function() {
          return s.has(27);
        }), true);
        this.eq((Ωimt__82 = function() {
          return s.has(28);
        }), true);
        this.eq((Ωimt__83 = function() {
          return s.has(29);
        }), true);
        this.eq((Ωimt__84 = function() {
          return s.has(30);
        }), true);
        this.eq((Ωimt__85 = function() {
          return s.has(31);
        }), false);
        this.eq((Ωimt__86 = function() {
          return s.has(32);
        }), true);
        this.eq((Ωimt__87 = function() {
          return s.has(33);
        }), true);
        this.eq((Ωimt__88 = function() {
          return s.has(34);
        }), true);
        this.eq((Ωimt__89 = function() {
          return s.has(35);
        }), true);
        this.eq((Ωimt__90 = function() {
          return s.has(36);
        }), true);
        this.eq((Ωimt__91 = function() {
          return s.has(37);
        }), true);
        this.eq((Ωimt__92 = function() {
          return s.has(38);
        }), true);
        this.eq((Ωimt__93 = function() {
          return s.has(39);
        }), true);
        this.eq((Ωimt__94 = function() {
          return s.has(40);
        }), true);
        this.eq((Ωimt__95 = function() {
          return s.has(41);
        }), false);
        this.eq((Ωimt__96 = function() {
          return s.has(42);
        }), false);
        this.eq((Ωimt__97 = function() {
          return s.has(43);
        }), false);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    iteration: function() {
      var Run, Scatter;
      ({Run, Scatter} = SFMODULES.require_intermission());
      (() => {        //.......................................................................................................
        var Ωimt_100, Ωimt__98, Ωimt__99;
        this.eq((Ωimt__98 = function() {
          return [...(new Run(1))];
        }), [1]);
        this.eq((Ωimt__99 = function() {
          return [...(new Run(297))];
        }), [297]);
        this.eq((Ωimt_100 = function() {
          return [...(new Run(297, 308))];
        }), [297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt_101, Ωimt_102, Ωimt_103, Ωimt_104, Ωimt_105, Ωimt_106, Ωimt_107, Ωimt_108, Ωimt_109, Ωimt_110, Ωimt_111, Ωimt_112, Ωimt_113, Ωimt_114, Ωimt_115;
        s = new Scatter();
        this.eq((Ωimt_101 = function() {
          return [...s];
        }), []);
        s.add(1);
        this.eq((Ωimt_102 = function() {
          return [...s];
        }), [1]);
        this.eq((Ωimt_103 = function() {
          return s.is_normalized;
        }), true);
        s.add(297);
        this.eq((Ωimt_104 = function() {
          return [...s];
        }), [1, 297]);
        this.eq((Ωimt_105 = function() {
          return s.is_normalized;
        }), true);
        s.add(299, 302);
        this.eq((Ωimt_106 = function() {
          return [...s];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_107 = function() {
          return s.is_normalized;
        }), true);
        s.add(298);
        this.eq((Ωimt_108 = function() {
          return [...s];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_109 = function() {
          return s.is_normalized;
        }), true);
        s.add(300, 301);
        this.eq((Ωimt_110 = function() {
          return [...s];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_111 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_112 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_113 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt_114 = function() {
          return s.runs[1];
        }), {
          lo: 297,
          hi: 302
        });
        this.eq((Ωimt_115 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt_116, Ωimt_117, Ωimt_118, Ωimt_119, Ωimt_120, Ωimt_121, Ωimt_122, Ωimt_123, Ωimt_124, Ωimt_125, Ωimt_126, Ωimt_127, Ωimt_128, Ωimt_129, Ωimt_130;
        s = new Scatter();
        this.eq((Ωimt_116 = function() {
          return [...s.walk()];
        }), []);
        s.add(1);
        this.eq((Ωimt_117 = function() {
          return [...s.walk()];
        }), [1]);
        this.eq((Ωimt_118 = function() {
          return s.is_normalized;
        }), true);
        s.add(297);
        this.eq((Ωimt_119 = function() {
          return [...s.walk()];
        }), [1, 297]);
        this.eq((Ωimt_120 = function() {
          return s.is_normalized;
        }), true);
        s.add(299, 302);
        this.eq((Ωimt_121 = function() {
          return [...s.walk()];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_122 = function() {
          return s.is_normalized;
        }), true);
        s.add(298);
        this.eq((Ωimt_123 = function() {
          return [...s.walk()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_124 = function() {
          return s.is_normalized;
        }), true);
        s.add(300, 301);
        this.eq((Ωimt_125 = function() {
          return [...s.walk()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_126 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_127 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_128 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt_129 = function() {
          return s.runs[1];
        }), {
          lo: 297,
          hi: 302
        });
        this.eq((Ωimt_130 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt_131, Ωimt_132, Ωimt_133, Ωimt_134, Ωimt_135, Ωimt_136, Ωimt_137, Ωimt_138, Ωimt_139, Ωimt_140, Ωimt_141, Ωimt_142, Ωimt_143, Ωimt_144, Ωimt_145, Ωimt_146, Ωimt_147, Ωimt_148;
        s = new Scatter();
        this.eq((Ωimt_131 = function() {
          return [...s.walk_raw()];
        }), []);
        s.add(1);
        this.eq((Ωimt_132 = function() {
          return [...s.walk_raw()];
        }), [1]);
        this.eq((Ωimt_133 = function() {
          return s.is_normalized;
        }), false);
        s.add(297);
        this.eq((Ωimt_134 = function() {
          return [...s.walk_raw()];
        }), [1, 297]);
        this.eq((Ωimt_135 = function() {
          return s.is_normalized;
        }), false);
        s.add(299, 302);
        this.eq((Ωimt_136 = function() {
          return [...s.walk_raw()];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_137 = function() {
          return s.is_normalized;
        }), false);
        s.add(298);
        this.eq((Ωimt_138 = function() {
          return [...s.walk_raw()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_139 = function() {
          return s.is_normalized;
        }), false);
        s.add(300, 301);
        this.eq((Ωimt_140 = function() {
          return [...s.walk_raw()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_141 = function() {
          return s.is_normalized;
        }), false);
        this.eq((Ωimt_142 = function() {
          return s.runs.length;
        }), 5);
        this.eq((Ωimt_143 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt_144 = function() {
          return s.runs[1];
        }), {
          lo: 297,
          hi: 297
        });
        this.eq((Ωimt_145 = function() {
          return s.runs[2];
        }), {
          lo: 299,
          hi: 302
        });
        this.eq((Ωimt_146 = function() {
          return s.runs[3];
        }), {
          lo: 298,
          hi: 298
        });
        this.eq((Ωimt_147 = function() {
          return s.runs[4];
        }), {
          lo: 300,
          hi: 301
        });
        this.eq((Ωimt_148 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    using_strings_for_bounds: function() {
      var Run, Scatter;
      ({Run, Scatter} = SFMODULES.require_intermission());
      (() => {        //.......................................................................................................
        var s, Ωimt_149, Ωimt_150;
        s = new Scatter();
        this.throws((Ωimt_149 = function() {
          return s.add(5.8);
        }), /yyy/);
        this.throws((Ωimt_150 = function() {
          return s.add(-3);
        }), /yyy/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt_151, Ωimt_152, Ωimt_153, Ωimt_154;
        s = new Scatter({
          first: -10,
          last: +10
        });
        s.add(-10);
        this.eq((Ωimt_151 = function() {
          return s.points;
        }), [-10]);
        s.add(+10);
        this.eq((Ωimt_152 = function() {
          return s.points;
        }), [-10, +10]);
        this.throws((Ωimt_153 = function() {
          return s.add(-11);
        }), /yyy/);
        this.throws((Ωimt_154 = function() {
          return s.add(+11);
        }), /yyy/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var s;
        s = new Scatter();
        s.add('A');
        return null;
      })();
      (() => {        //.......................................................................................................
        var s;
        s = new Scatter();
        s.add('A', 'Z');
        return null;
      })();
      (() => {        //.......................................................................................................
        var s;
        s = new Scatter();
        s.add('A whole lot of points');
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    data_retrieval: function() {
      var Run, Scatter;
      ({Run, Scatter} = SFMODULES.require_intermission());
      (() => {        //.......................................................................................................
        var s;
        s = new Scatter();
        return null;
      })();
      //.......................................................................................................
      return null;
    }
  };

  f = function() {};

  //-----------------------------------------------------------------------------------------------------------
  sum_of_data = (a, b) => {
    var data, ref, ref1;
    data = [(ref = a.data) != null ? ref : [], (ref1 = b.data) != null ? ref1 : []].flat();
    // debug 'Ωimt_155', { a, b, }
    // debug 'Ωimt_156', { a..., data, }
    return {...a, data};
  };

  create_reducer = function(fn) {
    return (ranges) => {
      return ranges.reduce(fn);
    };
  };

  demo_intervals_fn = function() {
    var a, b, e, i, len, merge_data_2, merged, rng, rng_2;
    (() => {      // debug 'Ωimt_157', ( k for k of IFN ).sort()
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
        urge('Ωimt_158', idx + 1, rng);
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
        urge('Ωimt_159', idx + 1, rng);
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
    help('Ωimt_160', a, b, {
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
    help('Ωimt_161', a, b, {
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
    help('Ωimt_162', a, b, {
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
    help('Ωimt_163', a, b, {
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
    help('Ωimt_164', a, b, {
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
    help('Ωimt_165', a, b, {
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
      help('Ωimt_166', a, b, {
        meeting: IFN.isMeeting(a, b),
        overlapping: IFN.isOverlapping(a, b),
        overlapping_s: IFN.isOverlappingSimple(a, b)
      });
    } catch (error) {
      e = error;
      warn('Ωimt_167', e.message);
    }
    info();
    info('Ωimt_168', IFN.simplify([]));
    info('Ωimt_169', IFN.simplify([
      {
        start: 4,
        end: 20
      }
    ]));
    info('Ωimt_170', IFN.simplify([
      {
        start: 4,
        end: 18
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_171', IFN.simplify([
      {
        start: 4,
        end: 19
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_172', IFN.simplify([
      {
        start: 4,
        end: 20
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_173', IFN.simplify([
      {
        start: 4,
        end: 21
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_174', IFN.simplify([
      {
        start: 3,
        end: 9
      },
      {
        start: 9,
        end: 13
      }
    ]));
    info('Ωimt_175', IFN.simplify([
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
    info('Ωimt_176', IFN.simplify([
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
    info('Ωimt_177', ((new Rangeset()).add()).simplify());
    info('Ωimt_178', ((new Rangeset()).add({
      start: 4,
      end: 20
    })).simplify());
    info('Ωimt_179', ((new Rangeset()).add({
      start: 4,
      end: 18
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_180', ((new Rangeset()).add({
      start: 4,
      end: 19
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_181', ((new Rangeset()).add({
      start: 4,
      end: 20
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_182', ((new Rangeset()).add({
      start: 4,
      end: 21
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_183', ((new Rangeset()).add({
      start: 3,
      end: 9
    }, {
      start: 9,
      end: 13
    })).simplify());
    info('Ωimt_184', ((new Rangeset()).add({
      start: 3,
      end: 9
    }, {
      start: 9,
      end: 13
    }, {
      start: 11,
      end: 14
    })).simplify()); // [{ start: 3, end: 14 }]
    info('Ωimt_185', ((new Rangeset()).add({
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
    info('Ωimt_186', ((new Rangeset()).add()).simplify());
    info('Ωimt_187', ((new Rangeset()).add({
      lo: 4,
      hi: 19
    })).simplify());
    info('Ωimt_188', ((new Rangeset()).add({
      lo: 4,
      hi: 17
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_189', ((new Rangeset()).add({
      lo: 4,
      hi: 18
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_190', ((new Rangeset()).add({
      lo: 4,
      hi: 19
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_191', ((new Rangeset()).add({
      lo: 4,
      hi: 20
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_192', ((new Rangeset()).add({
      lo: 3,
      hi: 8
    }, {
      lo: 9,
      hi: 12
    })).simplify());
    info('Ωimt_193', ((new Rangeset()).add({
      lo: 3,
      hi: 8
    }, {
      lo: 9,
      hi: 12
    }, {
      lo: 11,
      hi: 13
    })).simplify()); // [{ lo: 3, hi: 13 }]
    info('Ωimt_194', ((new Rangeset()).add({
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
        // debug 'Ωimt_195', { a, b, } #, { a..., b..., }
        ...a,
        data: a.data * b.data
      };
    };
    merged = IFN.merge(create_reducer(merge_data_2), rng_2); // [{ start: 3, end: 14 }]
    for (i = 0, len = merged.length; i < len; i++) {
      rng = merged[i];
      info('Ωimt_196', rng);
    }
    // urge 'Ωimt_197', rng for rng in merged_ft
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
      // ( new Test guytest_cfg ).test { tests, }
      return (new Test(guytest_cfg)).test({
        basic_runs: tests.basic_runs
      });
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtaW50ZXJtaXNzaW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxjQUFBLEVBQUEsS0FBQSxFQUFBLGlCQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsV0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHdCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBekJBOzs7RUEyQkEsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUE0QixPQUFB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QUFBLEdBQVMsR0FBRyxDQUFDLEtBQUosQ0FBWSxjQUFBLENBQWUsWUFBZixDQUFaLEVBQTJDLEtBQTNDLEVBOUVYO0lBK0VFLEtBQUEsd0NBQUE7O01BQUEsSUFBQSxDQUFLLFVBQUwsRUFBaUIsR0FBakI7SUFBQSxDQS9FRjs7O1dBa0ZHO0VBbkZpQixFQTFTcEI7OztFQWlZQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUEsV0FBQTs7O01BRUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsSUFBdkM7UUFBNkMsYUFBQSxFQUFlO01BQTVEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdELEVBSmhCOzthQU1FLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxVQUFBLEVBQVksS0FBSyxDQUFDO01BQXBCLENBQTlCO0lBUHNDLENBQUEsSUFBeEM7O0FBallBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLWludGVybWlzc2lvbidcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5GUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNfcnVuczogLT5cbiAgICB7IFJ1bixcbiAgICAgIFNjYXR0ZXIsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2ludGVybWlzc2lvbigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkID0gbmV3IFJ1bigpOyAgICAgICAgICAgICAgICAgIEBlcSAoIM6paW10X19fMSA9IC0+IFsgZCwgZC5zaXplLCBdICksIFsgeyBsbzogMCwgaGk6IDAsIH0sICAxLCBdXG4gICAgZCA9IG5ldyBSdW4gNzsgICAgICAgICAgICAgICAgICBAZXEgKCDOqWltdF9fXzIgPSAtPiBbIGQsIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiA3LCB9LCAgMSwgXVxuICAgIGQgPSBuZXcgUnVuIDcsIDc7ICAgICAgICAgICAgICAgQGVxICggzqlpbXRfX18zID0gLT4gWyBkLCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogNywgfSwgIDEsIF1cbiAgICBkID0gbmV3IFJ1biA3LCAxMjsgICAgICAgICAgICAgIEBlcSAoIM6paW10X19fNCA9IC0+IFsgZCwgZC5zaXplLCBdICksIFsgeyBsbzogNywgaGk6IDEyLCB9LCA2LCBdXG4gICAgZCA9IG5ldyBSdW4geyBsbzogNywgfTsgICAgICAgICBAZXEgKCDOqWltdF9fXzUgPSAtPiBbIGQsIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiA3LCB9LCAgMSwgXVxuICAgIGQgPSBuZXcgUnVuIHsgaGk6IDcsIH07ICAgICAgICAgQGVxICggzqlpbXRfX182ID0gLT4gWyBkLCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogNywgfSwgIDEsIF1cbiAgICBkID0gbmV3IFJ1biB7IGxvOiA3LCBoaTogNywgfTsgIEBlcSAoIM6paW10X19fNyA9IC0+IFsgZCwgZC5zaXplLCBdICksIFsgeyBsbzogNywgaGk6IDcsIH0sICAxLCBdXG4gICAgZCA9IG5ldyBSdW4geyBsbzogNywgaGk6IDIxLCB9OyBAZXEgKCDOqWltdF9fXzggPSAtPiBbIGQsIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiAyMSwgfSwgMTUsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paW10X19fOSA9IC0+IG5ldyBSdW4oKS5zY2F0dGVyICksIG51bGxcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNfc2NhdHRlcnM6IC0+XG4gICAgeyBSdW4sXG4gICAgICBTY2F0dGVyLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9pbnRlcm1pc3Npb24oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHMgPSBuZXcgU2NhdHRlciB7IGRhdGE6IHsgYTogMSwgfSB9XG4gICAgICBAZXEgKCDOqWltdF9fMTAgPSAtPiBzICksIHsgZGF0YTogeyBhOiAxLCB9LCBydW5zOiBbXSwgfVxuICAgICAgQGVxICggzqlpbXRfXzExID0gLT4gcy5pc19ub3JtYWxpemVkICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzLmFkZCB7IGxvOiAxLCBoaTogMSwgfTsgICAgICAgICAgQGVxICggzqlpbXRfXzEyID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMVxuICAgICAgcy5hZGQgMTsgICAgICAgICAgICAgICAgICAgICAgICAgIEBlcSAoIM6paW10X18xMyA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDJcbiAgICAgIHMuYWRkIG5ldyBSdW4geyBsbzogMSwgaGk6IDEsIH07ICBAZXEgKCDOqWltdF9fMTQgPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paW10X18xNSA9IC0+IHMuaXNfbm9ybWFsaXplZCAgICksIGZhbHNlXG4gICAgICAjIEBlcSAoIM6paW10X18xNiA9IC0+IHMuaXNfc29ydGVkICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fMTcgPSAtPiBzLmRhdGEgICAgICAgICAgICApLCB7IGE6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18xOCA9IC0+IHMucnVuc1sgMCBdICAgICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMTkgPSAtPiBzLnJ1bnNbIDEgXSAgICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgQGVxICggzqlpbXRfXzIwID0gLT4gcy5ydW5zWyAyIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyIHsgZGF0YTogeyBhOiAyLCB9LCBzb3J0OiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMjEgPSAtPiBzLmlzX25vcm1hbGl6ZWQgICApLCB0cnVlXG4gICAgICAjIEBlcSAoIM6paW10X18yMiA9IC0+IHMuaXNfc29ydGVkICAgICAgICksIGZhbHNlXG4gICAgICBzLmFkZCB7IGxvOiAxLCBoaTogMSwgfTsgICAgICAgICAgQGVxICggzqlpbXRfXzIzID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMTsgQGVxICggzqlpbXRfXzI0ID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBzLmFkZCAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgQGVxICggzqlpbXRfXzI1ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMjsgQGVxICggzqlpbXRfXzI2ID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBzLmFkZCBuZXcgUnVuIHsgbG86IDEsIGhpOiAxLCB9OyAgQGVxICggzqlpbXRfXzI3ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMzsgQGVxICggzqlpbXRfXzI4ID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paW10X18yOSA9IC0+IHMuZGF0YSAgICAgICAgICAgICksIHsgYTogMiwgfVxuICAgICAgQGVxICggzqlpbXRfXzMwID0gLT4gcy5ydW5zWyAwIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18zMSA9IC0+IHMucnVuc1sgMSBdICAgICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMzIgPSAtPiBzLnJ1bnNbIDIgXSAgICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIgeyBkYXRhOiB7IGE6IDMsIH0sIG5vcm1hbGl6ZTogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlpbXRfXzMzID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIHsgbG86IDEsIGhpOiAxLCB9OyAgICAgICAgICBAZXEgKCDOqWltdF9fMzQgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X18zNSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgQGVxICggzqlpbXRfXzM2ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxOyBAZXEgKCDOqWltdF9fMzcgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgbmV3IFJ1biB7IGxvOiAxLCBoaTogMSwgfTsgIEBlcSAoIM6paW10X18zOCA9IC0+IHMucnVucy5sZW5ndGggKSwgMTsgQGVxICggzqlpbXRfXzM5ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbXRfXzQwID0gLT4gcy5kYXRhICAgICAgICAgICAgKSwgeyBhOiAzLCB9XG4gICAgICBAZXEgKCDOqWltdF9fNDEgPSAtPiBzLnJ1bnNbIDAgXSAgICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIgeyBkYXRhOiB7IGE6IDQsIH0sIG5vcm1hbGl6ZTogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlpbXRfXzQyID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIDEwMzsgIEBlcSAoIM6paW10X180MyA9IC0+IHMucnVucy5sZW5ndGggKSwgMTsgQGVxICggzqlpbXRfXzQ0ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIDEwMDsgIEBlcSAoIM6paW10X180NSA9IC0+IHMucnVucy5sZW5ndGggKSwgMjsgQGVxICggzqlpbXRfXzQ2ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIDEwMTsgIEBlcSAoIM6paW10X180NyA9IC0+IHMucnVucy5sZW5ndGggKSwgMjsgQGVxICggzqlpbXRfXzQ4ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGVidWcgJ86paW10X180OScsIHJ1biBmb3IgcnVuIGluIHMucnVuc1xuICAgICAgQGVxICggzqlpbXRfXzUwID0gLT4gcy5kYXRhICAgICAgICAgICAgKSwgeyBhOiA0LCB9XG4gICAgICBAZXEgKCDOqWltdF9fNTEgPSAtPiBzLnJ1bnNbIDAgXSAgICAgICApLCB7IGxvOiAxMDAsIGhpOiAxMDEsIH1cbiAgICAgIEBlcSAoIM6paW10X181MiA9IC0+IHMucnVuc1sgMSBdICAgICAgICksIHsgbG86IDEwMywgaGk6IDEwMywgfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIgeyBub3JtYWxpemU6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6paW10X181MyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAxMDMsIDEwOTsgICBAZXEgKCDOqWltdF9fNTQgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X181NSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAxMTEsIDExNTsgICBAZXEgKCDOqWltdF9fNTYgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDI7IEBlcSAoIM6paW10X181NyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAxMTA7ICAgICAgICBAZXEgKCDOqWltdF9fNTggPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X181OSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNjAgPSAtPiB7IG1pbjogcy5taW4sIG1heDogcy5tYXgsIH0gKSwgeyBtaW46IDEwMywgbWF4OiAxMTUsIH1cbiAgICAgIEBlcSAoIM6paW10X182MSA9IC0+IHMubWlubWF4ICAgICAgICAgICAgICAgICAgICApLCB7IG1pbjogMTAzLCBtYXg6IDExNSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWltdF9fNjIgPSAtPiBzLnJ1bnNbIDAgXSAgICAgICApLCB7IGxvOiAxMDMsIGhpOiAxMTUsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyIHsgbm9ybWFsaXplOiBmYWxzZSwgfVxuICAgICAgQGVxICggzqlpbXRfXzYzID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIDEwMywgMTA5OyAgIEBlcSAoIM6paW10X182NCA9IC0+IHMucnVucy5sZW5ndGggKSwgMTsgQGVxICggzqlpbXRfXzY1ID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBzLmFkZCAxMTEsIDExNTsgICBAZXEgKCDOqWltdF9fNjYgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDI7IEBlcSAoIM6paW10X182NyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgcy5hZGQgMTEwOyAgICAgICAgQGVxICggzqlpbXRfXzY4ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAzOyBAZXEgKCDOqWltdF9fNjkgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X183MCA9IC0+IHsgbWluOiBzLm1pbiwgbWF4OiBzLm1heCwgfSApLCB7IG1pbjogMTAzLCBtYXg6IDExNSwgfVxuICAgICAgQGVxICggzqlpbXRfXzcxID0gLT4gcy5taW5tYXggICAgICAgICAgICAgICAgICAgICksIHsgbWluOiAxMDMsIG1heDogMTE1LCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paW10X183MiA9IC0+IHMucnVuc1sgMCBdICksIHsgbG86IDEwMywgaGk6IDEwOSwgfVxuICAgICAgQGVxICggzqlpbXRfXzczID0gLT4gcy5ydW5zWyAxIF0gKSwgeyBsbzogMTExLCBoaTogMTE1LCB9XG4gICAgICBAZXEgKCDOqWltdF9fNzQgPSAtPiBzLnJ1bnNbIDIgXSApLCB7IGxvOiAxMTAsIGhpOiAxMTAsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29udGFpbm1lbnQ6IC0+XG4gICAgeyBSdW4sXG4gICAgICBTY2F0dGVyLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9pbnRlcm1pc3Npb24oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHMgPSBuZXcgU2NhdHRlcigpXG4gICAgICBzLmFkZCAyNSwgMzBcbiAgICAgIHMuYWRkIDMyLCA0MFxuICAgICAgQGVxICggzqlpbXRfXzc1ID0gLT4gcy5oYXMgMjEgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X183NiA9IC0+IHMuaGFzIDIyICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fNzcgPSAtPiBzLmhhcyAyMyAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzc4ID0gLT4gcy5oYXMgMjQgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X183OSA9IC0+IHMuaGFzIDI1ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X184MCA9IC0+IHMuaGFzIDI2ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X184MSA9IC0+IHMuaGFzIDI3ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X184MiA9IC0+IHMuaGFzIDI4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X184MyA9IC0+IHMuaGFzIDI5ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X184NCA9IC0+IHMuaGFzIDMwICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X184NSA9IC0+IHMuaGFzIDMxICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fODYgPSAtPiBzLmhhcyAzMiAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODcgPSAtPiBzLmhhcyAzMyAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODggPSAtPiBzLmhhcyAzNCAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODkgPSAtPiBzLmhhcyAzNSAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTAgPSAtPiBzLmhhcyAzNiAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTEgPSAtPiBzLmhhcyAzNyAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTIgPSAtPiBzLmhhcyAzOCAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTMgPSAtPiBzLmhhcyAzOSAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTQgPSAtPiBzLmhhcyA0MCAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTUgPSAtPiBzLmhhcyA0MSAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzk2ID0gLT4gcy5oYXMgNDIgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X185NyA9IC0+IHMuaGFzIDQzICAgICAgICksIGZhbHNlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGl0ZXJhdGlvbjogLT5cbiAgICB7IFJ1bixcbiAgICAgIFNjYXR0ZXIsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2ludGVybWlzc2lvbigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQGVxICggzqlpbXRfXzk4ID0gLT4gWyAoIG5ldyBSdW4gMSAgICAgICAgICkuLi4sIF0gICAgICAgKSwgWyAxLCBdXG4gICAgICBAZXEgKCDOqWltdF9fOTkgPSAtPiBbICggbmV3IFJ1biAyOTcgICAgICAgKS4uLiwgXSAgICAgICApLCBbIDI5NywgXVxuICAgICAgQGVxICggzqlpbXRfMTAwID0gLT4gWyAoIG5ldyBSdW4gMjk3LCAzMDggICkuLi4sIF0gICAgICAgKSwgWyAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCAzMDMsIDMwNCwgMzA1LCAzMDYsIDMwNywgMzA4IF1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyKClcbiAgICAgIEBlcSAoIM6paW10XzEwMSA9IC0+IFsgcy4uLiwgXSAgICAgICApLCBbXVxuICAgICAgcy5hZGQgMTsgICAgICAgIEBlcSAoIM6paW10XzEwMiA9IC0+IFsgcy4uLiwgXSApLCBbIDEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07IEBlcSAoIM6paW10XzEwMyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAyOTc7ICAgICAgQGVxICggzqlpbXRfMTA0ID0gLT4gWyBzLi4uLCBdICksIFsgMSwgMjk3LCAgICAgICAgICAgICAgICAgICAgICAgICAgXTsgQGVxICggzqlpbXRfMTA1ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIDI5OSwgMzAyOyBAZXEgKCDOqWltdF8xMDYgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xMDcgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMjk4OyAgICAgIEBlcSAoIM6paW10XzEwOCA9IC0+IFsgcy4uLiwgXSApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzEwOSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAzMDAsIDMwMTsgQGVxICggzqlpbXRfMTEwID0gLT4gWyBzLi4uLCBdICksIFsgMSwgMjk3LCAyOTgsIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTExID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzExMiA9IC0+IHMucnVucy5sZW5ndGggICApLCAyXG4gICAgICBAZXEgKCDOqWltdF8xMTMgPSAtPiBzLnJ1bnNbIDAgXSAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10XzExNCA9IC0+IHMucnVuc1sgMSBdICAgICApLCB7IGxvOiAyOTcsIGhpOiAzMDIsIH1cbiAgICAgIEBlcSAoIM6paW10XzExNSA9IC0+IHMucG9pbnRzICAgICAgICApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIgXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIoKVxuICAgICAgQGVxICggzqlpbXRfMTE2ID0gLT4gWyBzLndhbGsoKS4uLiwgXSAgICAgICApLCBbXVxuICAgICAgcy5hZGQgMTsgICAgICAgIEBlcSAoIM6paW10XzExNyA9IC0+IFsgcy53YWxrKCkuLi4sIF0gKSwgWyAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xMTggPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMjk3OyAgICAgIEBlcSAoIM6paW10XzExOSA9IC0+IFsgcy53YWxrKCkuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xMjAgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMjk5LCAzMDI7IEBlcSAoIM6paW10XzEyMSA9IC0+IFsgcy53YWxrKCkuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xMjIgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMjk4OyAgICAgIEBlcSAoIM6paW10XzEyMyA9IC0+IFsgcy53YWxrKCkuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xMjQgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMzAwLCAzMDE7IEBlcSAoIM6paW10XzEyNSA9IC0+IFsgcy53YWxrKCkuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xMjYgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTI3ID0gLT4gcy5ydW5zLmxlbmd0aCAgICksIDJcbiAgICAgIEBlcSAoIM6paW10XzEyOCA9IC0+IHMucnVuc1sgMCBdICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgQGVxICggzqlpbXRfMTI5ID0gLT4gcy5ydW5zWyAxIF0gICAgICksIHsgbG86IDI5NywgaGk6IDMwMiwgfVxuICAgICAgQGVxICggzqlpbXRfMTMwID0gLT4gcy5wb2ludHMgICAgICAgICksIFsgMSwgMjk3LCAyOTgsIDI5OSwgMzAwLCAzMDEsIDMwMiBdXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHMgPSBuZXcgU2NhdHRlcigpXG4gICAgICBAZXEgKCDOqWltdF8xMzEgPSAtPiBbIHMud2Fsa19yYXcoKS4uLiwgXSAgICAgICApLCBbXVxuICAgICAgcy5hZGQgMTsgICAgICAgIEBlcSAoIM6paW10XzEzMiA9IC0+IFsgcy53YWxrX3JhdygpLi4uLCBdICksIFsgMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTsgQGVxICggzqlpbXRfMTMzID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBzLmFkZCAyOTc7ICAgICAgQGVxICggzqlpbXRfMTM0ID0gLT4gWyBzLndhbGtfcmF3KCkuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xMzUgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIHMuYWRkIDI5OSwgMzAyOyBAZXEgKCDOqWltdF8xMzYgPSAtPiBbIHMud2Fsa19yYXcoKS4uLiwgXSApLCBbIDEsIDI5NywgICAgICAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzEzNyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgcy5hZGQgMjk4OyAgICAgIEBlcSAoIM6paW10XzEzOCA9IC0+IFsgcy53YWxrX3JhdygpLi4uLCBdICksIFsgMSwgMjk3LCAyOTgsIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTM5ID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBzLmFkZCAzMDAsIDMwMTsgQGVxICggzqlpbXRfMTQwID0gLT4gWyBzLndhbGtfcmF3KCkuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNDEgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzE0MiA9IC0+IHMucnVucy5sZW5ndGggICApLCA1XG4gICAgICBAZXEgKCDOqWltdF8xNDMgPSAtPiBzLnJ1bnNbIDAgXSAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10XzE0NCA9IC0+IHMucnVuc1sgMSBdICAgICApLCB7IGxvOiAyOTcsIGhpOiAyOTcsIH1cbiAgICAgIEBlcSAoIM6paW10XzE0NSA9IC0+IHMucnVuc1sgMiBdICAgICApLCB7IGxvOiAyOTksIGhpOiAzMDIsIH1cbiAgICAgIEBlcSAoIM6paW10XzE0NiA9IC0+IHMucnVuc1sgMyBdICAgICApLCB7IGxvOiAyOTgsIGhpOiAyOTgsIH1cbiAgICAgIEBlcSAoIM6paW10XzE0NyA9IC0+IHMucnVuc1sgNCBdICAgICApLCB7IGxvOiAzMDAsIGhpOiAzMDEsIH1cbiAgICAgIEBlcSAoIM6paW10XzE0OCA9IC0+IHMucG9pbnRzICAgICAgICApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIgXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1c2luZ19zdHJpbmdzX2Zvcl9ib3VuZHM6IC0+XG4gICAgeyBSdW4sXG4gICAgICBTY2F0dGVyLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9pbnRlcm1pc3Npb24oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHMgPSBuZXcgU2NhdHRlcigpXG4gICAgICBAdGhyb3dzICggzqlpbXRfMTQ5ID0gLT4gcy5hZGQgNS44ICksIC95eXkvXG4gICAgICBAdGhyb3dzICggzqlpbXRfMTUwID0gLT4gcy5hZGQgLTMgKSwgL3l5eS9cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyIHsgZmlyc3Q6IC0xMCwgbGFzdDogKzEwLCB9XG4gICAgICBzLmFkZCAtMTA7IEBlcSAoIM6paW10XzE1MSA9IC0+IHMucG9pbnRzICksIFsgLTEwLCBdXG4gICAgICBzLmFkZCArMTA7IEBlcSAoIM6paW10XzE1MiA9IC0+IHMucG9pbnRzICksIFsgLTEwLCArMTAsIF1cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8xNTMgPSAtPiBzLmFkZCAtMTEgKSwgL3l5eS9cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8xNTQgPSAtPiBzLmFkZCArMTEgKSwgL3l5eS9cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyKClcbiAgICAgIHMuYWRkICdBJ1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIoKVxuICAgICAgcy5hZGQgJ0EnLCAnWidcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyKClcbiAgICAgIHMuYWRkICdBIHdob2xlIGxvdCBvZiBwb2ludHMnXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRhdGFfcmV0cmlldmFsOiAtPlxuICAgIHsgUnVuLFxuICAgICAgU2NhdHRlciwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfaW50ZXJtaXNzaW9uKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIoKVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuXG5mID0gLT5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuc3VtX29mX2RhdGEgPSAoIGEsIGIgKSA9PlxuICBkYXRhID0gWyBhLmRhdGEgPyBbXSwgYi5kYXRhID8gW10sIF0uZmxhdCgpXG4gICMgZGVidWcgJ86paW10XzE1NScsIHsgYSwgYiwgfVxuICAjIGRlYnVnICfOqWltdF8xNTYnLCB7IGEuLi4sIGRhdGEsIH1cbiAgeyBhLi4uLCBkYXRhLCB9XG5jcmVhdGVfcmVkdWNlciA9ICggZm4gKSAtPiAoIHJhbmdlcyApID0+IHJhbmdlcy5yZWR1Y2UoIGZuICk7XG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19pbnRlcnZhbHNfZm4gPSAtPlxuICAjIGRlYnVnICfOqWltdF8xNTcnLCAoIGsgZm9yIGsgb2YgSUZOICkuc29ydCgpXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZG8gPT5cbiAgICBybmdfMSAgICAgICA9IFtcbiAgICAgIHsgc3RhcnQ6IDEsIGVuZDogIDEwLCBkYXRhOiAgIDUsIH1cbiAgICAgIHsgc3RhcnQ6IDQsIGVuZDogICA3LCBkYXRhOiAgMTAsIH1cbiAgICAgIHsgc3RhcnQ6IDQsIGVuZDogIDEyLCBkYXRhOiAgMTIsIH1cbiAgICAgIHsgc3RhcnQ6IDAsIGVuZDogMTAwLCBkYXRhOiAxMDIsIH1cbiAgICAgIHsgc3RhcnQ6IDAsIGVuZDogMTAwLCBkYXRhOiAxMDEsIH1cbiAgICAgIF1cbiAgICBtZXJnZWQgICAgICA9IElGTi5tZXJnZSAoIGNyZWF0ZV9yZWR1Y2VyIHN1bV9vZl9kYXRhICksIHJuZ18xXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHVyZ2UoKVxuICAgIHVyZ2UgJ86paW10XzE1OCcsIGlkeCArIDEsIHJuZyBmb3Igcm5nLCBpZHggaW4gbWVyZ2VkXG4gICAgdXJnZSgpXG4gICAgO251bGxcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBkbyA9PlxuICAgIHJuZ18xICAgICAgID0gbmV3IFJhbmdlc2V0IDFcbiAgICBybmdfMS5hZGQgeyBsbzogMSwgaGk6ICAgOSwgfVxuICAgIHJuZ18xLmFkZCB7IGxvOiA0LCBoaTogICA2LCB9XG4gICAgcm5nXzEuYWRkIHsgbG86IDQsIGhpOiAgMTEsIH1cbiAgICBybmdfMS5hZGQgeyBsbzogMCwgaGk6ICA5OSwgfVxuICAgIHJuZ18xLmFkZCB7IGxvOiAwLCBoaTogIDk5LCB9XG4gICAgbWVyZ2VkICAgICAgPSBybmdfMS5tZXJnZSAoIGNyZWF0ZV9yZWR1Y2VyIHN1bV9vZl9kYXRhIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdXJnZSgpXG4gICAgdXJnZSAnzqlpbXRfMTU5JywgaWR4ICsgMSwgcm5nIGZvciBybmcsIGlkeCBpbiBtZXJnZWQucmFuZ2VzXG4gICAgdXJnZSgpXG4gICAgO251bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBhID0geyBzdGFydDogNDAsIGVuZDogNDksIH07IGIgPSB7IHN0YXJ0OiA1MCwgZW5kOiA1OSwgfTsgaGVscCAnzqlpbXRfMTYwJywgYSwgYiwgeyBtZWV0aW5nOiAoIElGTi5pc01lZXRpbmcgYSwgYiApLCBvdmVybGFwcGluZzogKCBJRk4uaXNPdmVybGFwcGluZyBhLCBiICksIG92ZXJsYXBwaW5nX3M6ICggSUZOLmlzT3ZlcmxhcHBpbmdTaW1wbGUgYSwgYiApLCB9XG4gIGEgPSB7IHN0YXJ0OiA0MCwgZW5kOiA1MCwgfTsgYiA9IHsgc3RhcnQ6IDUwLCBlbmQ6IDU5LCB9OyBoZWxwICfOqWltdF8xNjEnLCBhLCBiLCB7IG1lZXRpbmc6ICggSUZOLmlzTWVldGluZyBhLCBiICksIG92ZXJsYXBwaW5nOiAoIElGTi5pc092ZXJsYXBwaW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmdfczogKCBJRk4uaXNPdmVybGFwcGluZ1NpbXBsZSBhLCBiICksIH1cbiAgYSA9IHsgc3RhcnQ6IDQwLCBlbmQ6IDUxLCB9OyBiID0geyBzdGFydDogNTAsIGVuZDogNTksIH07IGhlbHAgJ86paW10XzE2MicsIGEsIGIsIHsgbWVldGluZzogKCBJRk4uaXNNZWV0aW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmc6ICggSUZOLmlzT3ZlcmxhcHBpbmcgYSwgYiApLCBvdmVybGFwcGluZ19zOiAoIElGTi5pc092ZXJsYXBwaW5nU2ltcGxlIGEsIGIgKSwgfVxuICBhID0geyBzdGFydDogNDAsIGVuZDogNTIsIH07IGIgPSB7IHN0YXJ0OiA1MCwgZW5kOiA1OSwgfTsgaGVscCAnzqlpbXRfMTYzJywgYSwgYiwgeyBtZWV0aW5nOiAoIElGTi5pc01lZXRpbmcgYSwgYiApLCBvdmVybGFwcGluZzogKCBJRk4uaXNPdmVybGFwcGluZyBhLCBiICksIG92ZXJsYXBwaW5nX3M6ICggSUZOLmlzT3ZlcmxhcHBpbmdTaW1wbGUgYSwgYiApLCB9XG4gIGEgPSB7IHN0YXJ0OiAgNSwgZW5kOiAxMCwgfTsgYiA9IHsgc3RhcnQ6IDAsIGVuZDogNCB9OyBoZWxwICfOqWltdF8xNjQnLCBhLCBiLCB7IG1lZXRpbmc6ICggSUZOLmlzTWVldGluZyBhLCBiICksIG92ZXJsYXBwaW5nOiAoIElGTi5pc092ZXJsYXBwaW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmdfczogKCBJRk4uaXNPdmVybGFwcGluZ1NpbXBsZSBhLCBiICksIH1cbiAgYSA9IHsgc3RhcnQ6ICA1LCBlbmQ6IDEwLCB9OyBiID0geyBzdGFydDogNywgZW5kOiA4IH07IGhlbHAgJ86paW10XzE2NScsIGEsIGIsIHsgbWVldGluZzogKCBJRk4uaXNNZWV0aW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmc6ICggSUZOLmlzT3ZlcmxhcHBpbmcgYSwgYiApLCBvdmVybGFwcGluZ19zOiAoIElGTi5pc092ZXJsYXBwaW5nU2ltcGxlIGEsIGIgKSwgfVxuICB0cnlcbiAgICBhID0geyBzdGFydDogIDUsIGVuZDogMTAsIH07IGIgPSBbIHsgc3RhcnQ6IDAsIGVuZDogNCB9LCB7IHN0YXJ0OiA3LCBlbmQ6IDggfSwgXTsgaGVscCAnzqlpbXRfMTY2JywgYSwgYiwgeyBtZWV0aW5nOiAoIElGTi5pc01lZXRpbmcgYSwgYiApLCBvdmVybGFwcGluZzogKCBJRk4uaXNPdmVybGFwcGluZyBhLCBiICksIG92ZXJsYXBwaW5nX3M6ICggSUZOLmlzT3ZlcmxhcHBpbmdTaW1wbGUgYSwgYiApLCB9XG4gIGNhdGNoIGUgdGhlbiB3YXJuICfOqWltdF8xNjcnLCBlLm1lc3NhZ2VcbiAgaW5mbygpXG4gIGluZm8gJ86paW10XzE2OCcsIElGTi5zaW1wbGlmeSBbXVxuICBpbmZvICfOqWltdF8xNjknLCBJRk4uc2ltcGxpZnkgWyB7IHN0YXJ0OiA0LCBlbmQ6IDIwLCB9LCBdXG4gIGluZm8gJ86paW10XzE3MCcsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDQsIGVuZDogMTgsIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9LCBdXG4gIGluZm8gJ86paW10XzE3MScsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDQsIGVuZDogMTksIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9LCBdXG4gIGluZm8gJ86paW10XzE3MicsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDQsIGVuZDogMjAsIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9LCBdXG4gIGluZm8gJ86paW10XzE3MycsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDQsIGVuZDogMjEsIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9LCBdXG4gIGluZm8gJ86paW10XzE3NCcsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDMsIGVuZDogIDksIH0sIHsgc3RhcnQ6ICA5LCBlbmQ6IDEzLCB9LCBdXG4gIGluZm8gJ86paW10XzE3NScsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDMsIGVuZDogIDksIH0sIHsgc3RhcnQ6ICA5LCBlbmQ6IDEzLCB9LCB7IHN0YXJ0OiAxMSwgZW5kOiAxNCwgfSwgXSAjIFt7IHN0YXJ0OiAzLCBlbmQ6IDE0IH1dXG4gIGluZm8gJ86paW10XzE3NicsIElGTi5zaW1wbGlmeSBbIHsgc3RhcnQ6IDMsIGVuZDogIDksIH0sIHsgc3RhcnQ6IDEwLCBlbmQ6IDEzLCB9LCB7IHN0YXJ0OiAxMSwgZW5kOiAxNCwgfSwgXVxuICBpbmZvKClcbiAgaW5mbyAnzqlpbXRfMTc3JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTc4JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDQsIGVuZDogMjAsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTc5JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDQsIGVuZDogMTgsIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTgwJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDQsIGVuZDogMTksIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTgxJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDQsIGVuZDogMjAsIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTgyJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDQsIGVuZDogMjEsIH0sIHsgc3RhcnQ6IDE5LCBlbmQ6IDIyLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTgzJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDMsIGVuZDogIDksIH0sIHsgc3RhcnQ6ICA5LCBlbmQ6IDEzLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTg0JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDMsIGVuZDogIDksIH0sIHsgc3RhcnQ6ICA5LCBlbmQ6IDEzLCB9LCB7IHN0YXJ0OiAxMSwgZW5kOiAxNCwgfSApLnNpbXBsaWZ5KCkgIyBbeyBzdGFydDogMywgZW5kOiAxNCB9XVxuICBpbmZvICfOqWltdF8xODUnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBzdGFydDogMywgZW5kOiAgOSwgfSwgeyBzdGFydDogMTAsIGVuZDogMTMsIH0sIHsgc3RhcnQ6IDExLCBlbmQ6IDE0LCB9ICkuc2ltcGxpZnkoKVxuICBpbmZvKClcbiAgaW5mbyAnzqlpbXRfMTg2JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTg3JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDQsIGhpOiAxOSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTg4JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDQsIGhpOiAxNywgfSwgeyBsbzogMTksIGhpOiAyMSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTg5JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDQsIGhpOiAxOCwgfSwgeyBsbzogMTksIGhpOiAyMSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTkwJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDQsIGhpOiAxOSwgfSwgeyBsbzogMTksIGhpOiAyMSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTkxJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDQsIGhpOiAyMCwgfSwgeyBsbzogMTksIGhpOiAyMSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTkyJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDMsIGhpOiAgOCwgfSwgeyBsbzogIDksIGhpOiAxMiwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnNpbXBsaWZ5KClcbiAgaW5mbyAnzqlpbXRfMTkzJywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgbG86IDMsIGhpOiAgOCwgfSwgeyBsbzogIDksIGhpOiAxMiwgfSwgeyBsbzogMTEsIGhpOiAxMywgfSAgICAgICAgICAgICApLnNpbXBsaWZ5KCkgIyBbeyBsbzogMywgaGk6IDEzIH1dXG4gIGluZm8gJ86paW10XzE5NCcsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IGxvOiAzLCBoaTogIDgsIH0sIHsgbG86IDEwLCBoaTogMTIsIH0sIHsgbG86IDExLCBoaTogMTMsIH0gICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIHJuZ18yID0gW1xuICAgIHsgc3RhcnQ6ICAzLCBlbmQ6IDEwLCBkYXRhOiAyLCB9XG4gICAgeyBzdGFydDogIDksIGVuZDogMTMsIGRhdGE6IDMsIH1cbiAgICB7IHN0YXJ0OiAxMSwgZW5kOiAxNCwgZGF0YTogNSwgfVxuICAgIF1cbiAgbWVyZ2VfZGF0YV8yID0gKCBhLCBiICkgLT5cbiAgICAjIGRlYnVnICfOqWltdF8xOTUnLCB7IGEsIGIsIH0gIywgeyBhLi4uLCBiLi4uLCB9XG4gICAgcmV0dXJuIHsgYS4uLiwgZGF0YTogYS5kYXRhICogYi5kYXRhLCB9XG4gIG1lcmdlZCA9IElGTi5tZXJnZSAoIGNyZWF0ZV9yZWR1Y2VyIG1lcmdlX2RhdGFfMiApLCBybmdfMiAjIFt7IHN0YXJ0OiAzLCBlbmQ6IDE0IH1dXG4gIGluZm8gJ86paW10XzE5NicsIHJuZyBmb3Igcm5nIGluIG1lcmdlZFxuICAjIHVyZ2UgJ86paW10XzE5NycsIHJuZyBmb3Igcm5nIGluIG1lcmdlZF9mdFxuICAjIHVyZ2UoKVxuICA7bnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb19pbmZpbml0ZV9wcm94eSgpXG4gICMgZGVtb19jb2xvcmZ1bF9wcm94eSgpXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogdHJ1ZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBiYXNpY19ydW5zOiB0ZXN0cy5iYXNpY19ydW5zLCB9XG5cblxuXG4iXX0=
