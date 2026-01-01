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
      var Run, Scatter, d, Ωimt__10, Ωimt___1, Ωimt___2, Ωimt___4, Ωimt___5, Ωimt___6, Ωimt___7, Ωimt___8, Ωimt___9;
      ({Run, Scatter} = SFMODULES.require_intermission());
      //.......................................................................................................
      this.throws((Ωimt___1 = function() {
        return new Run();
      }), /expected an integer or a text, got a null/);
      this.throws((Ωimt___2 = function() {
        return new Run({
          hi: 7
        });
      }), /expected an integer or a text, got a null/);
      // d = new Run();                  @eq ( Ωimt___3 = -> [ d, d.size, ] ), [ { lo: 0, hi: 0, },  1, ]
      d = new Run(7);
      this.eq((Ωimt___4 = function() {
        return [d, d.size];
      }), [
        {
          lo: 7,
          hi: 7
        },
        1
      ]);
      d = new Run(7, 7);
      this.eq((Ωimt___5 = function() {
        return [d, d.size];
      }), [
        {
          lo: 7,
          hi: 7
        },
        1
      ]);
      d = new Run(7, 12);
      this.eq((Ωimt___6 = function() {
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
      d = new Run({
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
        return (new Run(1, 1)).scatter;
      }), null);
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    basic_scatters: function() {
      var Run, Scatter;
      ({Run, Scatter} = SFMODULES.require_intermission());
      (() => {        //.......................................................................................................
        var s, Ωimt__11, Ωimt__12, Ωimt__13, Ωimt__14, Ωimt__15, Ωimt__17, Ωimt__19, Ωimt__20, Ωimt__21, Ωimt__22;
        s = new Scatter({
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
        var s, Ωimt__23, Ωimt__25, Ωimt__26, Ωimt__27, Ωimt__28, Ωimt__29, Ωimt__30, Ωimt__33, Ωimt__34, Ωimt__35, Ωimt__36;
        s = new Scatter({
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
        var s, Ωimt__37, Ωimt__38, Ωimt__39, Ωimt__40, Ωimt__41, Ωimt__42, Ωimt__43, Ωimt__46, Ωimt__47;
        s = new Scatter({
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
        var i, len, ref, run, s, Ωimt__48, Ωimt__49, Ωimt__50, Ωimt__51, Ωimt__52, Ωimt__53, Ωimt__54, Ωimt__56, Ωimt__57, Ωimt__58;
        s = new Scatter({
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
        var s, Ωimt__59, Ωimt__60, Ωimt__61, Ωimt__62, Ωimt__63, Ωimt__64, Ωimt__65, Ωimt__66, Ωimt__67, Ωimt__68;
        s = new Scatter({
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
        var s, Ωimt__69, Ωimt__70, Ωimt__71, Ωimt__72, Ωimt__73, Ωimt__74, Ωimt__75, Ωimt__76, Ωimt__77, Ωimt__78, Ωimt__79, Ωimt__80;
        s = new Scatter({
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
      var Run, Scatter;
      ({Run, Scatter} = SFMODULES.require_intermission());
      (() => {        //.......................................................................................................
        var s, Ωimt_100, Ωimt_101, Ωimt_102, Ωimt_103, Ωimt__81, Ωimt__82, Ωimt__83, Ωimt__84, Ωimt__85, Ωimt__86, Ωimt__87, Ωimt__88, Ωimt__89, Ωimt__90, Ωimt__91, Ωimt__92, Ωimt__93, Ωimt__94, Ωimt__95, Ωimt__96, Ωimt__97, Ωimt__98, Ωimt__99;
        s = new Scatter();
        s.add(25, 30);
        s.add(32, 40);
        this.eq((Ωimt__81 = function() {
          return s.has(21);
        }), false);
        this.eq((Ωimt__82 = function() {
          return s.has(22);
        }), false);
        this.eq((Ωimt__83 = function() {
          return s.has(23);
        }), false);
        this.eq((Ωimt__84 = function() {
          return s.has(24);
        }), false);
        this.eq((Ωimt__85 = function() {
          return s.has(25);
        }), true);
        this.eq((Ωimt__86 = function() {
          return s.has(26);
        }), true);
        this.eq((Ωimt__87 = function() {
          return s.has(27);
        }), true);
        this.eq((Ωimt__88 = function() {
          return s.has(28);
        }), true);
        this.eq((Ωimt__89 = function() {
          return s.has(29);
        }), true);
        this.eq((Ωimt__90 = function() {
          return s.has(30);
        }), true);
        this.eq((Ωimt__91 = function() {
          return s.has(31);
        }), false);
        this.eq((Ωimt__92 = function() {
          return s.has(32);
        }), true);
        this.eq((Ωimt__93 = function() {
          return s.has(33);
        }), true);
        this.eq((Ωimt__94 = function() {
          return s.has(34);
        }), true);
        this.eq((Ωimt__95 = function() {
          return s.has(35);
        }), true);
        this.eq((Ωimt__96 = function() {
          return s.has(36);
        }), true);
        this.eq((Ωimt__97 = function() {
          return s.has(37);
        }), true);
        this.eq((Ωimt__98 = function() {
          return s.has(38);
        }), true);
        this.eq((Ωimt__99 = function() {
          return s.has(39);
        }), true);
        this.eq((Ωimt_100 = function() {
          return s.has(40);
        }), true);
        this.eq((Ωimt_101 = function() {
          return s.has(41);
        }), false);
        this.eq((Ωimt_102 = function() {
          return s.has(42);
        }), false);
        this.eq((Ωimt_103 = function() {
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
        var Ωimt_104, Ωimt_105, Ωimt_106;
        this.eq((Ωimt_104 = function() {
          return [...(new Run(1))];
        }), [1]);
        this.eq((Ωimt_105 = function() {
          return [...(new Run(297))];
        }), [297]);
        this.eq((Ωimt_106 = function() {
          return [...(new Run(297, 308))];
        }), [297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt_107, Ωimt_108, Ωimt_109, Ωimt_110, Ωimt_111, Ωimt_112, Ωimt_113, Ωimt_114, Ωimt_115, Ωimt_116, Ωimt_117, Ωimt_118, Ωimt_119, Ωimt_120, Ωimt_121;
        s = new Scatter();
        this.eq((Ωimt_107 = function() {
          return [...s];
        }), []);
        s.add(1);
        this.eq((Ωimt_108 = function() {
          return [...s];
        }), [1]);
        this.eq((Ωimt_109 = function() {
          return s.is_normalized;
        }), true);
        s.add(297);
        this.eq((Ωimt_110 = function() {
          return [...s];
        }), [1, 297]);
        this.eq((Ωimt_111 = function() {
          return s.is_normalized;
        }), true);
        s.add(299, 302);
        this.eq((Ωimt_112 = function() {
          return [...s];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_113 = function() {
          return s.is_normalized;
        }), true);
        s.add(298);
        this.eq((Ωimt_114 = function() {
          return [...s];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_115 = function() {
          return s.is_normalized;
        }), true);
        s.add(300, 301);
        this.eq((Ωimt_116 = function() {
          return [...s];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_117 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_118 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_119 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt_120 = function() {
          return s.runs[1];
        }), {
          lo: 297,
          hi: 302
        });
        this.eq((Ωimt_121 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt_122, Ωimt_123, Ωimt_124, Ωimt_125, Ωimt_126, Ωimt_127, Ωimt_128, Ωimt_129, Ωimt_130, Ωimt_131, Ωimt_132, Ωimt_133, Ωimt_134, Ωimt_135, Ωimt_136;
        s = new Scatter();
        this.eq((Ωimt_122 = function() {
          return [...s.walk()];
        }), []);
        s.add(1);
        this.eq((Ωimt_123 = function() {
          return [...s.walk()];
        }), [1]);
        this.eq((Ωimt_124 = function() {
          return s.is_normalized;
        }), true);
        s.add(297);
        this.eq((Ωimt_125 = function() {
          return [...s.walk()];
        }), [1, 297]);
        this.eq((Ωimt_126 = function() {
          return s.is_normalized;
        }), true);
        s.add(299, 302);
        this.eq((Ωimt_127 = function() {
          return [...s.walk()];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_128 = function() {
          return s.is_normalized;
        }), true);
        s.add(298);
        this.eq((Ωimt_129 = function() {
          return [...s.walk()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_130 = function() {
          return s.is_normalized;
        }), true);
        s.add(300, 301);
        this.eq((Ωimt_131 = function() {
          return [...s.walk()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_132 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_133 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_134 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt_135 = function() {
          return s.runs[1];
        }), {
          lo: 297,
          hi: 302
        });
        this.eq((Ωimt_136 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt_137, Ωimt_138, Ωimt_139, Ωimt_140, Ωimt_141, Ωimt_142, Ωimt_143, Ωimt_144, Ωimt_145, Ωimt_146, Ωimt_147, Ωimt_148, Ωimt_149, Ωimt_150, Ωimt_151, Ωimt_152, Ωimt_153, Ωimt_154;
        s = new Scatter();
        this.eq((Ωimt_137 = function() {
          return [...s.walk_raw()];
        }), []);
        s.add(1);
        this.eq((Ωimt_138 = function() {
          return [...s.walk_raw()];
        }), [1]);
        this.eq((Ωimt_139 = function() {
          return s.is_normalized;
        }), false);
        s.add(297);
        this.eq((Ωimt_140 = function() {
          return [...s.walk_raw()];
        }), [1, 297]);
        this.eq((Ωimt_141 = function() {
          return s.is_normalized;
        }), false);
        s.add(299, 302);
        this.eq((Ωimt_142 = function() {
          return [...s.walk_raw()];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_143 = function() {
          return s.is_normalized;
        }), false);
        s.add(298);
        this.eq((Ωimt_144 = function() {
          return [...s.walk_raw()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_145 = function() {
          return s.is_normalized;
        }), false);
        s.add(300, 301);
        this.eq((Ωimt_146 = function() {
          return [...s.walk_raw()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_147 = function() {
          return s.is_normalized;
        }), false);
        this.eq((Ωimt_148 = function() {
          return s.runs.length;
        }), 5);
        this.eq((Ωimt_149 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt_150 = function() {
          return s.runs[1];
        }), {
          lo: 297,
          hi: 297
        });
        this.eq((Ωimt_151 = function() {
          return s.runs[2];
        }), {
          lo: 299,
          hi: 302
        });
        this.eq((Ωimt_152 = function() {
          return s.runs[3];
        }), {
          lo: 298,
          hi: 298
        });
        this.eq((Ωimt_153 = function() {
          return s.runs[4];
        }), {
          lo: 300,
          hi: 301
        });
        this.eq((Ωimt_154 = function() {
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
        var s, Ωimt_155, Ωimt_156, Ωimt_157;
        s = new Scatter();
        this.throws((Ωimt_155 = function() {
          return s.add(5.8);
        }), /expected an integer or a text, got a float/);
        this.throws((Ωimt_156 = function() {
          return s.add(-3);
        }), /-0x3 is not between \+0x0 and \+0x10ffff/);
        this.throws((Ωimt_157 = function() {
          return s.add(0, -3);
        }), /-0x3 is not between \+0x0 and \+0x10ffff/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt_158, Ωimt_159, Ωimt_160, Ωimt_161;
        s = new Scatter({
          first: -10,
          last: +10
        });
        s.add(-10);
        this.eq((Ωimt_158 = function() {
          return s.points;
        }), [-10]);
        s.add(+10);
        this.eq((Ωimt_159 = function() {
          return s.points;
        }), [-10, +10]);
        this.throws((Ωimt_160 = function() {
          return s.add(-11);
        }), /-0xb is not between -0xa and \+0xa/);
        this.throws((Ωimt_161 = function() {
          return s.add(+11);
        }), /\+0xb is not between -0xa and \+0xa/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt_162, Ωimt_163, Ωimt_164, Ωimt_165, Ωimt_166, Ωimt_167;
        s = new Scatter();
        s.add('A');
        this.eq((Ωimt_162 = function() {
          return s.points;
        }), ['A'.codePointAt(0)]);
        s.add('A', 'Z');
        this.eq((Ωimt_163 = function() {
          return s.points;
        }), [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]);
        s.add('a', 'z');
        this.eq((Ωimt_164 = function() {
          return s.points;
        }), [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
        this.eq((Ωimt_165 = function() {
          return s.min;
        }), 'A'.codePointAt(0));
        this.eq((Ωimt_166 = function() {
          return s.max;
        }), 'z'.codePointAt(0));
        this.eq((Ωimt_167 = function() {
          return {
            min: s.min,
            max: s.max
          };
        }), s.minmax);
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt_168;
        s = new Scatter();
        s.add('Abc');
        this.eq((Ωimt_168 = function() {
          return s.points;
        }), ['A'.codePointAt(0)]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt_169, Ωimt_170;
        s = new Scatter();
        s.add_codepoints_of('Abc');
        this.eq((Ωimt_169 = function() {
          return s.points;
        }), ['A'.codePointAt(0), 'b'.codePointAt(0), 'c'.codePointAt(0)]);
        this.eq((Ωimt_170 = function() {
          return s.runs.length;
        }), 3);
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt_171, Ωimt_172, Ωimt_173, Ωimt_174, Ωimt_175;
        s = new Scatter();
        s.add_codepoints_of('Abc');
        this.eq((Ωimt_171 = function() {
          return s.points;
        }), ['A'.codePointAt(0), 'b'.codePointAt(0), 'c'.codePointAt(0)]);
        this.eq((Ωimt_172 = function() {
          return s.runs.length;
        }), 3);
        s.normalize();
        this.eq((Ωimt_173 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_174 = function() {
          return s.runs[0];
        }), {
          lo: 'A'.codePointAt(0),
          hi: 'A'.codePointAt(0)
        });
        this.eq((Ωimt_175 = function() {
          return s.runs[1];
        }), {
          lo: 'b'.codePointAt(0),
          hi: 'c'.codePointAt(0)
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var s, Ωimt_176, Ωimt_177, Ωimt_178;
        s = new Scatter();
        s.add_codepoints_of('aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ');
        this.eq((Ωimt_176 = function() {
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
        this.eq((Ωimt_177 = function() {
          return s.runs.length;
        }), 16);
        s.normalize();
        this.eq((Ωimt_178 = function() {
          return s.runs.length;
        }), 16);
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
    // debug 'Ωimt_179', { a, b, }
    // debug 'Ωimt_180', { a..., data, }
    return {...a, data};
  };

  create_reducer = function(fn) {
    return (ranges) => {
      return ranges.reduce(fn);
    };
  };

  demo_intervals_fn = function() {
    var a, b, e, i, len, merge_data_2, merged, rng, rng_2;
    (() => {      // debug 'Ωimt_181', ( k for k of IFN ).sort()
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
        urge('Ωimt_182', idx + 1, rng);
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
        urge('Ωimt_183', idx + 1, rng);
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
    help('Ωimt_184', a, b, {
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
    help('Ωimt_185', a, b, {
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
    help('Ωimt_186', a, b, {
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
    help('Ωimt_187', a, b, {
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
    help('Ωimt_188', a, b, {
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
    help('Ωimt_189', a, b, {
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
      help('Ωimt_190', a, b, {
        meeting: IFN.isMeeting(a, b),
        overlapping: IFN.isOverlapping(a, b),
        overlapping_s: IFN.isOverlappingSimple(a, b)
      });
    } catch (error) {
      e = error;
      warn('Ωimt_191', e.message);
    }
    info();
    info('Ωimt_192', IFN.simplify([]));
    info('Ωimt_193', IFN.simplify([
      {
        start: 4,
        end: 20
      }
    ]));
    info('Ωimt_194', IFN.simplify([
      {
        start: 4,
        end: 18
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_195', IFN.simplify([
      {
        start: 4,
        end: 19
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_196', IFN.simplify([
      {
        start: 4,
        end: 20
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_197', IFN.simplify([
      {
        start: 4,
        end: 21
      },
      {
        start: 19,
        end: 22
      }
    ]));
    info('Ωimt_198', IFN.simplify([
      {
        start: 3,
        end: 9
      },
      {
        start: 9,
        end: 13
      }
    ]));
    info('Ωimt_199', IFN.simplify([
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
    info('Ωimt_200', IFN.simplify([
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
    info('Ωimt_201', ((new Rangeset()).add()).simplify());
    info('Ωimt_202', ((new Rangeset()).add({
      start: 4,
      end: 20
    })).simplify());
    info('Ωimt_203', ((new Rangeset()).add({
      start: 4,
      end: 18
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_204', ((new Rangeset()).add({
      start: 4,
      end: 19
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_205', ((new Rangeset()).add({
      start: 4,
      end: 20
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_206', ((new Rangeset()).add({
      start: 4,
      end: 21
    }, {
      start: 19,
      end: 22
    })).simplify());
    info('Ωimt_207', ((new Rangeset()).add({
      start: 3,
      end: 9
    }, {
      start: 9,
      end: 13
    })).simplify());
    info('Ωimt_208', ((new Rangeset()).add({
      start: 3,
      end: 9
    }, {
      start: 9,
      end: 13
    }, {
      start: 11,
      end: 14
    })).simplify()); // [{ start: 3, end: 14 }]
    info('Ωimt_209', ((new Rangeset()).add({
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
    info('Ωimt_210', ((new Rangeset()).add()).simplify());
    info('Ωimt_211', ((new Rangeset()).add({
      lo: 4,
      hi: 19
    })).simplify());
    info('Ωimt_212', ((new Rangeset()).add({
      lo: 4,
      hi: 17
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_213', ((new Rangeset()).add({
      lo: 4,
      hi: 18
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_214', ((new Rangeset()).add({
      lo: 4,
      hi: 19
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_215', ((new Rangeset()).add({
      lo: 4,
      hi: 20
    }, {
      lo: 19,
      hi: 21
    })).simplify());
    info('Ωimt_216', ((new Rangeset()).add({
      lo: 3,
      hi: 8
    }, {
      lo: 9,
      hi: 12
    })).simplify());
    info('Ωimt_217', ((new Rangeset()).add({
      lo: 3,
      hi: 8
    }, {
      lo: 9,
      hi: 12
    }, {
      lo: 11,
      hi: 13
    })).simplify()); // [{ lo: 3, hi: 13 }]
    info('Ωimt_218', ((new Rangeset()).add({
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
        // debug 'Ωimt_219', { a, b, } #, { a..., b..., }
        ...a,
        data: a.data * b.data
      };
    };
    merged = IFN.merge(create_reducer(merge_data_2), rng_2); // [{ start: 3, end: 14 }]
    for (i = 0, len = merged.length; i < len; i++) {
      rng = merged[i];
      info('Ωimt_220', rng);
    }
    // urge 'Ωimt_221', rng for rng in merged_ft
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
      return (new Test(guytest_cfg)).test({tests});
    })();
  }

  // ( new Test guytest_cfg ).test { basic_scatters: tests.basic_scatters, }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtaW50ZXJtaXNzaW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxjQUFBLEVBQUEsS0FBQSxFQUFBLGlCQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsV0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHdCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBekJBOzs7RUEyQkEsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUE0QixPQUFB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PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtaW50ZXJtaXNzaW9uJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbkZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcblxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBiYXNpY19ydW5zOiAtPlxuICAgIHsgUnVuLFxuICAgICAgU2NhdHRlciwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfaW50ZXJtaXNzaW9uKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEB0aHJvd3MgKCDOqWltdF9fXzEgPSAtPiBuZXcgUnVuKCkgICAgICAgICAgICksIC9leHBlY3RlZCBhbiBpbnRlZ2VyIG9yIGEgdGV4dCwgZ290IGEgbnVsbC9cbiAgICBAdGhyb3dzICggzqlpbXRfX18yID0gLT4gbmV3IFJ1biB7IGhpOiA3LCB9ICApLCAvZXhwZWN0ZWQgYW4gaW50ZWdlciBvciBhIHRleHQsIGdvdCBhIG51bGwvXG4gICAgIyBkID0gbmV3IFJ1bigpOyAgICAgICAgICAgICAgICAgIEBlcSAoIM6paW10X19fMyA9IC0+IFsgZCwgZC5zaXplLCBdICksIFsgeyBsbzogMCwgaGk6IDAsIH0sICAxLCBdXG4gICAgZCA9IG5ldyBSdW4gNzsgICAgICAgICAgICAgICAgICBAZXEgKCDOqWltdF9fXzQgPSAtPiBbIGQsIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiA3LCB9LCAgMSwgXVxuICAgIGQgPSBuZXcgUnVuIDcsIDc7ICAgICAgICAgICAgICAgQGVxICggzqlpbXRfX181ID0gLT4gWyBkLCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogNywgfSwgIDEsIF1cbiAgICBkID0gbmV3IFJ1biA3LCAxMjsgICAgICAgICAgICAgIEBlcSAoIM6paW10X19fNiA9IC0+IFsgZCwgZC5zaXplLCBdICksIFsgeyBsbzogNywgaGk6IDEyLCB9LCA2LCBdXG4gICAgZCA9IG5ldyBSdW4geyBsbzogNywgfTsgICAgICAgICBAZXEgKCDOqWltdF9fXzcgPSAtPiBbIGQsIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiA3LCB9LCAgMSwgXVxuICAgIGQgPSBuZXcgUnVuIHsgbG86IDcsIGhpOiA3LCB9OyAgQGVxICggzqlpbXRfX184ID0gLT4gWyBkLCBkLnNpemUsIF0gKSwgWyB7IGxvOiA3LCBoaTogNywgfSwgIDEsIF1cbiAgICBkID0gbmV3IFJ1biB7IGxvOiA3LCBoaTogMjEsIH07IEBlcSAoIM6paW10X19fOSA9IC0+IFsgZCwgZC5zaXplLCBdICksIFsgeyBsbzogNywgaGk6IDIxLCB9LCAxNSwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlpbXRfXzEwID0gLT4gKCBuZXcgUnVuIDEsIDEgKS5zY2F0dGVyICksIG51bGxcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNfc2NhdHRlcnM6IC0+XG4gICAgeyBSdW4sXG4gICAgICBTY2F0dGVyLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9pbnRlcm1pc3Npb24oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHMgPSBuZXcgU2NhdHRlciB7IGRhdGE6IHsgYTogMSwgfSB9XG4gICAgICBAZXEgKCDOqWltdF9fMTEgPSAtPiB7IHMuLi4sIH0gKSwgeyBkYXRhOiB7IGE6IDEsIH0sIHJ1bnM6IFtdLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMTIgPSAtPiBzLmlzX25vcm1hbGl6ZWQgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHMuYWRkIHsgbG86IDEsIGhpOiAxLCB9OyAgICAgICAgICBAZXEgKCDOqWltdF9fMTMgPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAxXG4gICAgICBzLmFkZCAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgQGVxICggzqlpbXRfXzE0ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMlxuICAgICAgcy5hZGQgeyBsbzogMSwgaGk6IDEsIH07ICAgICAgICAgIEBlcSAoIM6paW10X18xNSA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDNcbiAgICAgICMgcy5hZGQgbmV3IFJ1biB7IGxvOiAxLCBoaTogMSwgfTsgIEBlcSAoIM6paW10X18xNiA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbXRfXzE3ID0gLT4gcy5pc19ub3JtYWxpemVkICAgKSwgZmFsc2VcbiAgICAgICMgQGVxICggzqlpbXRfXzE4ID0gLT4gcy5pc19zb3J0ZWQgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X18xOSA9IC0+IHMuZGF0YSAgICAgICAgICAgICksIHsgYTogMSwgfVxuICAgICAgQGVxICggzqlpbXRfXzIwID0gLT4gcy5ydW5zWyAwIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18yMSA9IC0+IHMucnVuc1sgMSBdICAgICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMjIgPSAtPiBzLnJ1bnNbIDIgXSAgICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIgeyBkYXRhOiB7IGE6IDIsIH0sIHNvcnQ6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6paW10X18yMyA9IC0+IHMuaXNfbm9ybWFsaXplZCAgICksIHRydWVcbiAgICAgICMgQGVxICggzqlpbXRfXzI0ID0gLT4gcy5pc19zb3J0ZWQgICAgICAgKSwgZmFsc2VcbiAgICAgIHMuYWRkIHsgbG86IDEsIGhpOiAxLCB9OyAgICAgICAgICBAZXEgKCDOqWltdF9fMjUgPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAxOyBAZXEgKCDOqWltdF9fMjYgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIHMuYWRkIDE7ICAgICAgICAgICAgICAgICAgICAgICAgICBAZXEgKCDOqWltdF9fMjcgPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAyOyBAZXEgKCDOqWltdF9fMjggPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIHMuYWRkIHsgbG86IDEsIGhpOiAxLCB9OyAgICAgICAgICBAZXEgKCDOqWltdF9fMjkgPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAzOyBAZXEgKCDOqWltdF9fMzAgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgICMgcy5hZGQgbmV3IFJ1biB7IGxvOiAxLCBoaTogMSwgfTsgIEBlcSAoIM6paW10X18zMSA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDM7IEBlcSAoIM6paW10X18zMiA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWltdF9fMzMgPSAtPiBzLmRhdGEgICAgICAgICAgICApLCB7IGE6IDIsIH1cbiAgICAgIEBlcSAoIM6paW10X18zNCA9IC0+IHMucnVuc1sgMCBdICAgICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMzUgPSAtPiBzLnJ1bnNbIDEgXSAgICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgQGVxICggzqlpbXRfXzM2ID0gLT4gcy5ydW5zWyAyIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyIHsgZGF0YTogeyBhOiAzLCB9LCBub3JtYWxpemU6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6paW10X18zNyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCB7IGxvOiAxLCBoaTogMSwgfTsgICAgICAgICAgQGVxICggzqlpbXRfXzM4ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxOyBAZXEgKCDOqWltdF9fMzkgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMTsgICAgICAgICAgICAgICAgICAgICAgICAgIEBlcSAoIM6paW10X180MCA9IC0+IHMucnVucy5sZW5ndGggKSwgMTsgQGVxICggzqlpbXRfXzQxID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIHsgbG86IDEsIGhpOiAxLCB9OyAgICAgICAgICBAZXEgKCDOqWltdF9fNDIgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X180MyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICAjIHMuYWRkIG5ldyBSdW4geyBsbzogMSwgaGk6IDEsIH07ICBAZXEgKCDOqWltdF9fNDQgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X180NSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paW10X180NiA9IC0+IHMuZGF0YSAgICAgICAgICAgICksIHsgYTogMywgfVxuICAgICAgQGVxICggzqlpbXRfXzQ3ID0gLT4gcy5ydW5zWyAwIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyIHsgZGF0YTogeyBhOiA0LCB9LCBub3JtYWxpemU6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6paW10X180OCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAxMDM7ICBAZXEgKCDOqWltdF9fNDkgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X181MCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAxMDA7ICBAZXEgKCDOqWltdF9fNTEgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDI7IEBlcSAoIM6paW10X181MiA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAxMDE7ICBAZXEgKCDOqWltdF9fNTMgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDI7IEBlcSAoIM6paW10X181NCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRlYnVnICfOqWltdF9fNTUnLCBydW4gZm9yIHJ1biBpbiBzLnJ1bnNcbiAgICAgIEBlcSAoIM6paW10X181NiA9IC0+IHMuZGF0YSAgICAgICAgICAgICksIHsgYTogNCwgfVxuICAgICAgQGVxICggzqlpbXRfXzU3ID0gLT4gcy5ydW5zWyAwIF0gICAgICAgKSwgeyBsbzogMTAwLCBoaTogMTAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fNTggPSAtPiBzLnJ1bnNbIDEgXSAgICAgICApLCB7IGxvOiAxMDMsIGhpOiAxMDMsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyIHsgbm9ybWFsaXplOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWltdF9fNTkgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMTAzLCAxMDk7ICAgQGVxICggzqlpbXRfXzYwID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxOyBAZXEgKCDOqWltdF9fNjEgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMTExLCAxMTU7ICAgQGVxICggzqlpbXRfXzYyID0gLT4gcy5ydW5zLmxlbmd0aCApLCAyOyBAZXEgKCDOqWltdF9fNjMgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMTEwOyAgICAgICAgQGVxICggzqlpbXRfXzY0ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxOyBAZXEgKCDOqWltdF9fNjUgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzY2ID0gLT4geyBtaW46IHMubWluLCBtYXg6IHMubWF4LCB9ICksIHsgbWluOiAxMDMsIG1heDogMTE1LCB9XG4gICAgICBAZXEgKCDOqWltdF9fNjcgPSAtPiBzLm1pbm1heCAgICAgICAgICAgICAgICAgICAgKSwgeyBtaW46IDEwMywgbWF4OiAxMTUsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbXRfXzY4ID0gLT4gcy5ydW5zWyAwIF0gICAgICAgKSwgeyBsbzogMTAzLCBoaTogMTE1LCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHMgPSBuZXcgU2NhdHRlciB7IG5vcm1hbGl6ZTogZmFsc2UsIH1cbiAgICAgIEBlcSAoIM6paW10X182OSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAxMDMsIDEwOTsgICBAZXEgKCDOqWltdF9fNzAgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X183MSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgcy5hZGQgMTExLCAxMTU7ICAgQGVxICggzqlpbXRfXzcyID0gLT4gcy5ydW5zLmxlbmd0aCApLCAyOyBAZXEgKCDOqWltdF9fNzMgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIHMuYWRkIDExMDsgICAgICAgIEBlcSAoIM6paW10X183NCA9IC0+IHMucnVucy5sZW5ndGggKSwgMzsgQGVxICggzqlpbXRfXzc1ID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fNzYgPSAtPiB7IG1pbjogcy5taW4sIG1heDogcy5tYXgsIH0gKSwgeyBtaW46IDEwMywgbWF4OiAxMTUsIH1cbiAgICAgIEBlcSAoIM6paW10X183NyA9IC0+IHMubWlubWF4ICAgICAgICAgICAgICAgICAgICApLCB7IG1pbjogMTAzLCBtYXg6IDExNSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWltdF9fNzggPSAtPiBzLnJ1bnNbIDAgXSApLCB7IGxvOiAxMDMsIGhpOiAxMDksIH1cbiAgICAgIEBlcSAoIM6paW10X183OSA9IC0+IHMucnVuc1sgMSBdICksIHsgbG86IDExMSwgaGk6IDExNSwgfVxuICAgICAgQGVxICggzqlpbXRfXzgwID0gLT4gcy5ydW5zWyAyIF0gKSwgeyBsbzogMTEwLCBoaTogMTEwLCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnRhaW5tZW50OiAtPlxuICAgIHsgUnVuLFxuICAgICAgU2NhdHRlciwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfaW50ZXJtaXNzaW9uKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIoKVxuICAgICAgcy5hZGQgMjUsIDMwXG4gICAgICBzLmFkZCAzMiwgNDBcbiAgICAgIEBlcSAoIM6paW10X184MSA9IC0+IHMuaGFzIDIxICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fODIgPSAtPiBzLmhhcyAyMiAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzgzID0gLT4gcy5oYXMgMjMgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X184NCA9IC0+IHMuaGFzIDI0ICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fODUgPSAtPiBzLmhhcyAyNSAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODYgPSAtPiBzLmhhcyAyNiAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODcgPSAtPiBzLmhhcyAyNyAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODggPSAtPiBzLmhhcyAyOCAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODkgPSAtPiBzLmhhcyAyOSAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTAgPSAtPiBzLmhhcyAzMCAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTEgPSAtPiBzLmhhcyAzMSAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzkyID0gLT4gcy5oYXMgMzIgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzkzID0gLT4gcy5oYXMgMzMgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzk0ID0gLT4gcy5oYXMgMzQgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzk1ID0gLT4gcy5oYXMgMzUgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzk2ID0gLT4gcy5oYXMgMzYgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzk3ID0gLT4gcy5oYXMgMzcgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzk4ID0gLT4gcy5oYXMgMzggICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzk5ID0gLT4gcy5oYXMgMzkgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTAwID0gLT4gcy5oYXMgNDAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTAxID0gLT4gcy5oYXMgNDEgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzEwMiA9IC0+IHMuaGFzIDQyICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMDMgPSAtPiBzLmhhcyA0MyAgICAgICApLCBmYWxzZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpdGVyYXRpb246IC0+XG4gICAgeyBSdW4sXG4gICAgICBTY2F0dGVyLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9pbnRlcm1pc3Npb24oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIEBlcSAoIM6paW10XzEwNCA9IC0+IFsgKCBuZXcgUnVuIDEgICAgICAgICApLi4uLCBdICAgICAgICksIFsgMSwgXVxuICAgICAgQGVxICggzqlpbXRfMTA1ID0gLT4gWyAoIG5ldyBSdW4gMjk3ICAgICAgICkuLi4sIF0gICAgICAgKSwgWyAyOTcsIF1cbiAgICAgIEBlcSAoIM6paW10XzEwNiA9IC0+IFsgKCBuZXcgUnVuIDI5NywgMzA4ICApLi4uLCBdICAgICAgICksIFsgMjk3LCAyOTgsIDI5OSwgMzAwLCAzMDEsIDMwMiwgMzAzLCAzMDQsIDMwNSwgMzA2LCAzMDcsIDMwOCBdXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHMgPSBuZXcgU2NhdHRlcigpXG4gICAgICBAZXEgKCDOqWltdF8xMDcgPSAtPiBbIHMuLi4sIF0gICAgICAgKSwgW11cbiAgICAgIHMuYWRkIDE7ICAgICAgICBAZXEgKCDOqWltdF8xMDggPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xMDkgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMjk3OyAgICAgIEBlcSAoIM6paW10XzExMCA9IC0+IFsgcy4uLiwgXSApLCBbIDEsIDI5NywgICAgICAgICAgICAgICAgICAgICAgICAgIF07IEBlcSAoIM6paW10XzExMSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZCAyOTksIDMwMjsgQGVxICggzqlpbXRfMTEyID0gLT4gWyBzLi4uLCBdICksIFsgMSwgMjk3LCAgICAgIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTEzID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIDI5ODsgICAgICBAZXEgKCDOqWltdF8xMTQgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xMTUgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGQgMzAwLCAzMDE7IEBlcSAoIM6paW10XzExNiA9IC0+IFsgcy4uLiwgXSApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzExNyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMTggPSAtPiBzLnJ1bnMubGVuZ3RoICAgKSwgMlxuICAgICAgQGVxICggzqlpbXRfMTE5ID0gLT4gcy5ydW5zWyAwIF0gICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF8xMjAgPSAtPiBzLnJ1bnNbIDEgXSAgICAgKSwgeyBsbzogMjk3LCBoaTogMzAyLCB9XG4gICAgICBAZXEgKCDOqWltdF8xMjEgPSAtPiBzLnBvaW50cyAgICAgICAgKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyIF1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyKClcbiAgICAgIEBlcSAoIM6paW10XzEyMiA9IC0+IFsgcy53YWxrKCkuLi4sIF0gICAgICAgKSwgW11cbiAgICAgIHMuYWRkIDE7ICAgICAgICBAZXEgKCDOqWltdF8xMjMgPSAtPiBbIHMud2FsaygpLi4uLCBdICksIFsgMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTsgQGVxICggzqlpbXRfMTI0ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIDI5NzsgICAgICBAZXEgKCDOqWltdF8xMjUgPSAtPiBbIHMud2FsaygpLi4uLCBdICksIFsgMSwgMjk3LCAgICAgICAgICAgICAgICAgICAgICAgICAgXTsgQGVxICggzqlpbXRfMTI2ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIDI5OSwgMzAyOyBAZXEgKCDOqWltdF8xMjcgPSAtPiBbIHMud2FsaygpLi4uLCBdICksIFsgMSwgMjk3LCAgICAgIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTI4ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIDI5ODsgICAgICBAZXEgKCDOqWltdF8xMjkgPSAtPiBbIHMud2FsaygpLi4uLCBdICksIFsgMSwgMjk3LCAyOTgsIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTMwID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkIDMwMCwgMzAxOyBAZXEgKCDOqWltdF8xMzEgPSAtPiBbIHMud2FsaygpLi4uLCBdICksIFsgMSwgMjk3LCAyOTgsIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTMyID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEzMyA9IC0+IHMucnVucy5sZW5ndGggICApLCAyXG4gICAgICBAZXEgKCDOqWltdF8xMzQgPSAtPiBzLnJ1bnNbIDAgXSAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10XzEzNSA9IC0+IHMucnVuc1sgMSBdICAgICApLCB7IGxvOiAyOTcsIGhpOiAzMDIsIH1cbiAgICAgIEBlcSAoIM6paW10XzEzNiA9IC0+IHMucG9pbnRzICAgICAgICApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIgXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIoKVxuICAgICAgQGVxICggzqlpbXRfMTM3ID0gLT4gWyBzLndhbGtfcmF3KCkuLi4sIF0gICAgICAgKSwgW11cbiAgICAgIHMuYWRkIDE7ICAgICAgICBAZXEgKCDOqWltdF8xMzggPSAtPiBbIHMud2Fsa19yYXcoKS4uLiwgXSApLCBbIDEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07IEBlcSAoIM6paW10XzEzOSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgcy5hZGQgMjk3OyAgICAgIEBlcSAoIM6paW10XzE0MCA9IC0+IFsgcy53YWxrX3JhdygpLi4uLCBdICksIFsgMSwgMjk3LCAgICAgICAgICAgICAgICAgICAgICAgICAgXTsgQGVxICggzqlpbXRfMTQxID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBzLmFkZCAyOTksIDMwMjsgQGVxICggzqlpbXRfMTQyID0gLT4gWyBzLndhbGtfcmF3KCkuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNDMgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIHMuYWRkIDI5ODsgICAgICBAZXEgKCDOqWltdF8xNDQgPSAtPiBbIHMud2Fsa19yYXcoKS4uLiwgXSApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzE0NSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgcy5hZGQgMzAwLCAzMDE7IEBlcSAoIM6paW10XzE0NiA9IC0+IFsgcy53YWxrX3JhdygpLi4uLCBdICksIFsgMSwgMjk3LCAyOTgsIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTQ3ID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xNDggPSAtPiBzLnJ1bnMubGVuZ3RoICAgKSwgNVxuICAgICAgQGVxICggzqlpbXRfMTQ5ID0gLT4gcy5ydW5zWyAwIF0gICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF8xNTAgPSAtPiBzLnJ1bnNbIDEgXSAgICAgKSwgeyBsbzogMjk3LCBoaTogMjk3LCB9XG4gICAgICBAZXEgKCDOqWltdF8xNTEgPSAtPiBzLnJ1bnNbIDIgXSAgICAgKSwgeyBsbzogMjk5LCBoaTogMzAyLCB9XG4gICAgICBAZXEgKCDOqWltdF8xNTIgPSAtPiBzLnJ1bnNbIDMgXSAgICAgKSwgeyBsbzogMjk4LCBoaTogMjk4LCB9XG4gICAgICBAZXEgKCDOqWltdF8xNTMgPSAtPiBzLnJ1bnNbIDQgXSAgICAgKSwgeyBsbzogMzAwLCBoaTogMzAxLCB9XG4gICAgICBAZXEgKCDOqWltdF8xNTQgPSAtPiBzLnBvaW50cyAgICAgICAgKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyIF1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdXNpbmdfc3RyaW5nc19mb3JfYm91bmRzOiAtPlxuICAgIHsgUnVuLFxuICAgICAgU2NhdHRlciwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfaW50ZXJtaXNzaW9uKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIoKVxuICAgICAgQHRocm93cyAoIM6paW10XzE1NSA9IC0+IHMuYWRkIDUuOCAgICAgICAgICksIC9leHBlY3RlZCBhbiBpbnRlZ2VyIG9yIGEgdGV4dCwgZ290IGEgZmxvYXQvXG4gICAgICBAdGhyb3dzICggzqlpbXRfMTU2ID0gLT4gcy5hZGQgLTMgICAgICAgICAgKSwgLy0weDMgaXMgbm90IGJldHdlZW4gXFwrMHgwIGFuZCBcXCsweDEwZmZmZi9cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8xNTcgPSAtPiBzLmFkZCAwLCAtMyAgICAgICApLCAvLTB4MyBpcyBub3QgYmV0d2VlbiBcXCsweDAgYW5kIFxcKzB4MTBmZmZmL1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIgeyBmaXJzdDogLTEwLCBsYXN0OiArMTAsIH1cbiAgICAgIHMuYWRkIC0xMDsgQGVxICggzqlpbXRfMTU4ID0gLT4gcy5wb2ludHMgICApLCBbIC0xMCwgXVxuICAgICAgcy5hZGQgKzEwOyBAZXEgKCDOqWltdF8xNTkgPSAtPiBzLnBvaW50cyAgICksIFsgLTEwLCArMTAsIF1cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8xNjAgPSAtPiBzLmFkZCAtMTEgICAgICAgICApLCAvLTB4YiBpcyBub3QgYmV0d2VlbiAtMHhhIGFuZCBcXCsweGEvXG4gICAgICBAdGhyb3dzICggzqlpbXRfMTYxID0gLT4gcy5hZGQgKzExICAgICAgICAgKSwgL1xcKzB4YiBpcyBub3QgYmV0d2VlbiAtMHhhIGFuZCBcXCsweGEvXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHMgPSBuZXcgU2NhdHRlcigpXG4gICAgICBzLmFkZCAnQSc7ICAgICAgQGVxICggzqlpbXRfMTYyID0gLT4gcy5wb2ludHMgICApLCBbICggJ0EnLmNvZGVQb2ludEF0IDAgKSwgXVxuICAgICAgcy5hZGQgJ0EnLCAnWic7IEBlcSAoIM6paW10XzE2MyA9IC0+IHMucG9pbnRzICAgKSwgWyA2NSwgNjYsIDY3LCA2OCwgNjksIDcwLCA3MSwgNzIsIDczLCA3NCwgNzUsIDc2LCA3NywgNzgsIDc5LCA4MCwgODEsIDgyLCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA4OSwgOTAgXVxuICAgICAgcy5hZGQgJ2EnLCAneic7IEBlcSAoIM6paW10XzE2NCA9IC0+IHMucG9pbnRzICAgKSwgWyA2NSwgNjYsIDY3LCA2OCwgNjksIDcwLCA3MSwgNzIsIDczLCA3NCwgNzUsIDc2LCA3NywgNzgsIDc5LCA4MCwgODEsIDgyLCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA4OSwgOTAsIDk3LCA5OCwgOTksIFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwLCAxMDEsIDEwMiwgMTAzLCAxMDQsIDEwNSwgMTA2LCAxMDcsIDEwOCwgMTA5LCAxMTAsIDExMSwgMTEyLCAxMTMsIDExNCwgMTE1LCAxMTYsIDExNywgMTE4LCAxMTksIDEyMCwgMTIxLCAxMjIsIF1cbiAgICAgIEBlcSAoIM6paW10XzE2NSA9IC0+IHMubWluICApLCAoICdBJy5jb2RlUG9pbnRBdCAwIClcbiAgICAgIEBlcSAoIM6paW10XzE2NiA9IC0+IHMubWF4ICApLCAoICd6Jy5jb2RlUG9pbnRBdCAwIClcbiAgICAgIEBlcSAoIM6paW10XzE2NyA9IC0+IHsgbWluOiBzLm1pbiwgbWF4OiBzLm1heCwgfSAgKSwgcy5taW5tYXhcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyKClcbiAgICAgIHMuYWRkICdBYmMnXG4gICAgICBAZXEgKCDOqWltdF8xNjggPSAtPiBzLnBvaW50cyAgICksIFsgKCAnQScuY29kZVBvaW50QXQgMCApLCBdXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHMgPSBuZXcgU2NhdHRlcigpXG4gICAgICBzLmFkZF9jb2RlcG9pbnRzX29mICdBYmMnXG4gICAgICBAZXEgKCDOqWltdF8xNjkgPSAtPiBzLnBvaW50cyApLCBbICggJ0EnLmNvZGVQb2ludEF0IDAgKSwgKCAnYicuY29kZVBvaW50QXQgMCApLCAoICdjJy5jb2RlUG9pbnRBdCAwICksIF1cbiAgICAgIEBlcSAoIM6paW10XzE3MCA9IC0+IHMucnVucy5sZW5ndGggKSwgM1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzID0gbmV3IFNjYXR0ZXIoKVxuICAgICAgcy5hZGRfY29kZXBvaW50c19vZiAnQWJjJ1xuICAgICAgQGVxICggzqlpbXRfMTcxID0gLT4gcy5wb2ludHMgKSwgWyAoICdBJy5jb2RlUG9pbnRBdCAwICksICggJ2InLmNvZGVQb2ludEF0IDAgKSwgKCAnYycuY29kZVBvaW50QXQgMCApLCBdXG4gICAgICBAZXEgKCDOqWltdF8xNzIgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDNcbiAgICAgIHMubm9ybWFsaXplKClcbiAgICAgIEBlcSAoIM6paW10XzE3MyA9IC0+IHMucnVucy5sZW5ndGggKSwgMlxuICAgICAgQGVxICggzqlpbXRfMTc0ID0gLT4gcy5ydW5zWyAwIF0gKSwgeyBsbzogKCAnQScuY29kZVBvaW50QXQgMCApLCBoaTogKCAnQScuY29kZVBvaW50QXQgMCApLCB9XG4gICAgICBAZXEgKCDOqWltdF8xNzUgPSAtPiBzLnJ1bnNbIDEgXSApLCB7IGxvOiAoICdiJy5jb2RlUG9pbnRBdCAwICksIGhpOiAoICdjJy5jb2RlUG9pbnRBdCAwICksIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyKClcbiAgICAgIHMuYWRkX2NvZGVwb2ludHNfb2YgJ2FlaW91w6TDtsO8JywgJ2FlaW91w6TDtsO8JywgJ0FFSU9Vw4TDlsOcJywgJ0FFSU9Vw4TDlsOcJ1xuICAgICAgQGVxICggzqlpbXRfMTc2ID0gLT4gKCAoIFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZCApIGZvciBjaWQgaW4gcy5wb2ludHMgKS5qb2luICcnICksICdBRUlPVWFlaW91w4TDlsOcw6TDtsO8J1xuICAgICAgQGVxICggzqlpbXRfMTc3ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxNlxuICAgICAgcy5ub3JtYWxpemUoKVxuICAgICAgQGVxICggzqlpbXRfMTc4ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAxNlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYXRhX3JldHJpZXZhbDogLT5cbiAgICB7IFJ1bixcbiAgICAgIFNjYXR0ZXIsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2ludGVybWlzc2lvbigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcyA9IG5ldyBTY2F0dGVyKClcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuZiA9IC0+XG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnN1bV9vZl9kYXRhID0gKCBhLCBiICkgPT5cbiAgZGF0YSA9IFsgYS5kYXRhID8gW10sIGIuZGF0YSA/IFtdLCBdLmZsYXQoKVxuICAjIGRlYnVnICfOqWltdF8xNzknLCB7IGEsIGIsIH1cbiAgIyBkZWJ1ZyAnzqlpbXRfMTgwJywgeyBhLi4uLCBkYXRhLCB9XG4gIHsgYS4uLiwgZGF0YSwgfVxuY3JlYXRlX3JlZHVjZXIgPSAoIGZuICkgLT4gKCByYW5nZXMgKSA9PiByYW5nZXMucmVkdWNlKCBmbiApO1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9faW50ZXJ2YWxzX2ZuID0gLT5cbiAgIyBkZWJ1ZyAnzqlpbXRfMTgxJywgKCBrIGZvciBrIG9mIElGTiApLnNvcnQoKVxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGRvID0+XG4gICAgcm5nXzEgICAgICAgPSBbXG4gICAgICB7IHN0YXJ0OiAxLCBlbmQ6ICAxMCwgZGF0YTogICA1LCB9XG4gICAgICB7IHN0YXJ0OiA0LCBlbmQ6ICAgNywgZGF0YTogIDEwLCB9XG4gICAgICB7IHN0YXJ0OiA0LCBlbmQ6ICAxMiwgZGF0YTogIDEyLCB9XG4gICAgICB7IHN0YXJ0OiAwLCBlbmQ6IDEwMCwgZGF0YTogMTAyLCB9XG4gICAgICB7IHN0YXJ0OiAwLCBlbmQ6IDEwMCwgZGF0YTogMTAxLCB9XG4gICAgICBdXG4gICAgbWVyZ2VkICAgICAgPSBJRk4ubWVyZ2UgKCBjcmVhdGVfcmVkdWNlciBzdW1fb2ZfZGF0YSApLCBybmdfMVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB1cmdlKClcbiAgICB1cmdlICfOqWltdF8xODInLCBpZHggKyAxLCBybmcgZm9yIHJuZywgaWR4IGluIG1lcmdlZFxuICAgIHVyZ2UoKVxuICAgIDtudWxsXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZG8gPT5cbiAgICBybmdfMSAgICAgICA9IG5ldyBSYW5nZXNldCAxXG4gICAgcm5nXzEuYWRkIHsgbG86IDEsIGhpOiAgIDksIH1cbiAgICBybmdfMS5hZGQgeyBsbzogNCwgaGk6ICAgNiwgfVxuICAgIHJuZ18xLmFkZCB7IGxvOiA0LCBoaTogIDExLCB9XG4gICAgcm5nXzEuYWRkIHsgbG86IDAsIGhpOiAgOTksIH1cbiAgICBybmdfMS5hZGQgeyBsbzogMCwgaGk6ICA5OSwgfVxuICAgIG1lcmdlZCAgICAgID0gcm5nXzEubWVyZ2UgKCBjcmVhdGVfcmVkdWNlciBzdW1fb2ZfZGF0YSApXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHVyZ2UoKVxuICAgIHVyZ2UgJ86paW10XzE4MycsIGlkeCArIDEsIHJuZyBmb3Igcm5nLCBpZHggaW4gbWVyZ2VkLnJhbmdlc1xuICAgIHVyZ2UoKVxuICAgIDtudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgYSA9IHsgc3RhcnQ6IDQwLCBlbmQ6IDQ5LCB9OyBiID0geyBzdGFydDogNTAsIGVuZDogNTksIH07IGhlbHAgJ86paW10XzE4NCcsIGEsIGIsIHsgbWVldGluZzogKCBJRk4uaXNNZWV0aW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmc6ICggSUZOLmlzT3ZlcmxhcHBpbmcgYSwgYiApLCBvdmVybGFwcGluZ19zOiAoIElGTi5pc092ZXJsYXBwaW5nU2ltcGxlIGEsIGIgKSwgfVxuICBhID0geyBzdGFydDogNDAsIGVuZDogNTAsIH07IGIgPSB7IHN0YXJ0OiA1MCwgZW5kOiA1OSwgfTsgaGVscCAnzqlpbXRfMTg1JywgYSwgYiwgeyBtZWV0aW5nOiAoIElGTi5pc01lZXRpbmcgYSwgYiApLCBvdmVybGFwcGluZzogKCBJRk4uaXNPdmVybGFwcGluZyBhLCBiICksIG92ZXJsYXBwaW5nX3M6ICggSUZOLmlzT3ZlcmxhcHBpbmdTaW1wbGUgYSwgYiApLCB9XG4gIGEgPSB7IHN0YXJ0OiA0MCwgZW5kOiA1MSwgfTsgYiA9IHsgc3RhcnQ6IDUwLCBlbmQ6IDU5LCB9OyBoZWxwICfOqWltdF8xODYnLCBhLCBiLCB7IG1lZXRpbmc6ICggSUZOLmlzTWVldGluZyBhLCBiICksIG92ZXJsYXBwaW5nOiAoIElGTi5pc092ZXJsYXBwaW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmdfczogKCBJRk4uaXNPdmVybGFwcGluZ1NpbXBsZSBhLCBiICksIH1cbiAgYSA9IHsgc3RhcnQ6IDQwLCBlbmQ6IDUyLCB9OyBiID0geyBzdGFydDogNTAsIGVuZDogNTksIH07IGhlbHAgJ86paW10XzE4NycsIGEsIGIsIHsgbWVldGluZzogKCBJRk4uaXNNZWV0aW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmc6ICggSUZOLmlzT3ZlcmxhcHBpbmcgYSwgYiApLCBvdmVybGFwcGluZ19zOiAoIElGTi5pc092ZXJsYXBwaW5nU2ltcGxlIGEsIGIgKSwgfVxuICBhID0geyBzdGFydDogIDUsIGVuZDogMTAsIH07IGIgPSB7IHN0YXJ0OiAwLCBlbmQ6IDQgfTsgaGVscCAnzqlpbXRfMTg4JywgYSwgYiwgeyBtZWV0aW5nOiAoIElGTi5pc01lZXRpbmcgYSwgYiApLCBvdmVybGFwcGluZzogKCBJRk4uaXNPdmVybGFwcGluZyBhLCBiICksIG92ZXJsYXBwaW5nX3M6ICggSUZOLmlzT3ZlcmxhcHBpbmdTaW1wbGUgYSwgYiApLCB9XG4gIGEgPSB7IHN0YXJ0OiAgNSwgZW5kOiAxMCwgfTsgYiA9IHsgc3RhcnQ6IDcsIGVuZDogOCB9OyBoZWxwICfOqWltdF8xODknLCBhLCBiLCB7IG1lZXRpbmc6ICggSUZOLmlzTWVldGluZyBhLCBiICksIG92ZXJsYXBwaW5nOiAoIElGTi5pc092ZXJsYXBwaW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmdfczogKCBJRk4uaXNPdmVybGFwcGluZ1NpbXBsZSBhLCBiICksIH1cbiAgdHJ5XG4gICAgYSA9IHsgc3RhcnQ6ICA1LCBlbmQ6IDEwLCB9OyBiID0gWyB7IHN0YXJ0OiAwLCBlbmQ6IDQgfSwgeyBzdGFydDogNywgZW5kOiA4IH0sIF07IGhlbHAgJ86paW10XzE5MCcsIGEsIGIsIHsgbWVldGluZzogKCBJRk4uaXNNZWV0aW5nIGEsIGIgKSwgb3ZlcmxhcHBpbmc6ICggSUZOLmlzT3ZlcmxhcHBpbmcgYSwgYiApLCBvdmVybGFwcGluZ19zOiAoIElGTi5pc092ZXJsYXBwaW5nU2ltcGxlIGEsIGIgKSwgfVxuICBjYXRjaCBlIHRoZW4gd2FybiAnzqlpbXRfMTkxJywgZS5tZXNzYWdlXG4gIGluZm8oKVxuICBpbmZvICfOqWltdF8xOTInLCBJRk4uc2ltcGxpZnkgW11cbiAgaW5mbyAnzqlpbXRfMTkzJywgSUZOLnNpbXBsaWZ5IFsgeyBzdGFydDogNCwgZW5kOiAyMCwgfSwgXVxuICBpbmZvICfOqWltdF8xOTQnLCBJRk4uc2ltcGxpZnkgWyB7IHN0YXJ0OiA0LCBlbmQ6IDE4LCB9LCB7IHN0YXJ0OiAxOSwgZW5kOiAyMiwgfSwgXVxuICBpbmZvICfOqWltdF8xOTUnLCBJRk4uc2ltcGxpZnkgWyB7IHN0YXJ0OiA0LCBlbmQ6IDE5LCB9LCB7IHN0YXJ0OiAxOSwgZW5kOiAyMiwgfSwgXVxuICBpbmZvICfOqWltdF8xOTYnLCBJRk4uc2ltcGxpZnkgWyB7IHN0YXJ0OiA0LCBlbmQ6IDIwLCB9LCB7IHN0YXJ0OiAxOSwgZW5kOiAyMiwgfSwgXVxuICBpbmZvICfOqWltdF8xOTcnLCBJRk4uc2ltcGxpZnkgWyB7IHN0YXJ0OiA0LCBlbmQ6IDIxLCB9LCB7IHN0YXJ0OiAxOSwgZW5kOiAyMiwgfSwgXVxuICBpbmZvICfOqWltdF8xOTgnLCBJRk4uc2ltcGxpZnkgWyB7IHN0YXJ0OiAzLCBlbmQ6ICA5LCB9LCB7IHN0YXJ0OiAgOSwgZW5kOiAxMywgfSwgXVxuICBpbmZvICfOqWltdF8xOTknLCBJRk4uc2ltcGxpZnkgWyB7IHN0YXJ0OiAzLCBlbmQ6ICA5LCB9LCB7IHN0YXJ0OiAgOSwgZW5kOiAxMywgfSwgeyBzdGFydDogMTEsIGVuZDogMTQsIH0sIF0gIyBbeyBzdGFydDogMywgZW5kOiAxNCB9XVxuICBpbmZvICfOqWltdF8yMDAnLCBJRk4uc2ltcGxpZnkgWyB7IHN0YXJ0OiAzLCBlbmQ6ICA5LCB9LCB7IHN0YXJ0OiAxMCwgZW5kOiAxMywgfSwgeyBzdGFydDogMTEsIGVuZDogMTQsIH0sIF1cbiAgaW5mbygpXG4gIGluZm8gJ86paW10XzIwMScsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIGluZm8gJ86paW10XzIwMicsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IHN0YXJ0OiA0LCBlbmQ6IDIwLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIGluZm8gJ86paW10XzIwMycsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IHN0YXJ0OiA0LCBlbmQ6IDE4LCB9LCB7IHN0YXJ0OiAxOSwgZW5kOiAyMiwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIGluZm8gJ86paW10XzIwNCcsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IHN0YXJ0OiA0LCBlbmQ6IDE5LCB9LCB7IHN0YXJ0OiAxOSwgZW5kOiAyMiwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIGluZm8gJ86paW10XzIwNScsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IHN0YXJ0OiA0LCBlbmQ6IDIwLCB9LCB7IHN0YXJ0OiAxOSwgZW5kOiAyMiwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIGluZm8gJ86paW10XzIwNicsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IHN0YXJ0OiA0LCBlbmQ6IDIxLCB9LCB7IHN0YXJ0OiAxOSwgZW5kOiAyMiwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIGluZm8gJ86paW10XzIwNycsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IHN0YXJ0OiAzLCBlbmQ6ICA5LCB9LCB7IHN0YXJ0OiAgOSwgZW5kOiAxMywgfSAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIGluZm8gJ86paW10XzIwOCcsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IHN0YXJ0OiAzLCBlbmQ6ICA5LCB9LCB7IHN0YXJ0OiAgOSwgZW5kOiAxMywgfSwgeyBzdGFydDogMTEsIGVuZDogMTQsIH0gKS5zaW1wbGlmeSgpICMgW3sgc3RhcnQ6IDMsIGVuZDogMTQgfV1cbiAgaW5mbyAnzqlpbXRfMjA5JywgKCAoIG5ldyBSYW5nZXNldCgpICkuYWRkIHsgc3RhcnQ6IDMsIGVuZDogIDksIH0sIHsgc3RhcnQ6IDEwLCBlbmQ6IDEzLCB9LCB7IHN0YXJ0OiAxMSwgZW5kOiAxNCwgfSApLnNpbXBsaWZ5KClcbiAgaW5mbygpXG4gIGluZm8gJ86paW10XzIxMCcsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIGluZm8gJ86paW10XzIxMScsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IGxvOiA0LCBoaTogMTksIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIGluZm8gJ86paW10XzIxMicsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IGxvOiA0LCBoaTogMTcsIH0sIHsgbG86IDE5LCBoaTogMjEsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIGluZm8gJ86paW10XzIxMycsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IGxvOiA0LCBoaTogMTgsIH0sIHsgbG86IDE5LCBoaTogMjEsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIGluZm8gJ86paW10XzIxNCcsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IGxvOiA0LCBoaTogMTksIH0sIHsgbG86IDE5LCBoaTogMjEsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIGluZm8gJ86paW10XzIxNScsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IGxvOiA0LCBoaTogMjAsIH0sIHsgbG86IDE5LCBoaTogMjEsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIGluZm8gJ86paW10XzIxNicsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IGxvOiAzLCBoaTogIDgsIH0sIHsgbG86ICA5LCBoaTogMTIsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zaW1wbGlmeSgpXG4gIGluZm8gJ86paW10XzIxNycsICggKCBuZXcgUmFuZ2VzZXQoKSApLmFkZCB7IGxvOiAzLCBoaTogIDgsIH0sIHsgbG86ICA5LCBoaTogMTIsIH0sIHsgbG86IDExLCBoaTogMTMsIH0gICAgICAgICAgICAgKS5zaW1wbGlmeSgpICMgW3sgbG86IDMsIGhpOiAxMyB9XVxuICBpbmZvICfOqWltdF8yMTgnLCAoICggbmV3IFJhbmdlc2V0KCkgKS5hZGQgeyBsbzogMywgaGk6ICA4LCB9LCB7IGxvOiAxMCwgaGk6IDEyLCB9LCB7IGxvOiAxMSwgaGk6IDEzLCB9ICAgICAgICAgICAgICkuc2ltcGxpZnkoKVxuICBybmdfMiA9IFtcbiAgICB7IHN0YXJ0OiAgMywgZW5kOiAxMCwgZGF0YTogMiwgfVxuICAgIHsgc3RhcnQ6ICA5LCBlbmQ6IDEzLCBkYXRhOiAzLCB9XG4gICAgeyBzdGFydDogMTEsIGVuZDogMTQsIGRhdGE6IDUsIH1cbiAgICBdXG4gIG1lcmdlX2RhdGFfMiA9ICggYSwgYiApIC0+XG4gICAgIyBkZWJ1ZyAnzqlpbXRfMjE5JywgeyBhLCBiLCB9ICMsIHsgYS4uLiwgYi4uLiwgfVxuICAgIHJldHVybiB7IGEuLi4sIGRhdGE6IGEuZGF0YSAqIGIuZGF0YSwgfVxuICBtZXJnZWQgPSBJRk4ubWVyZ2UgKCBjcmVhdGVfcmVkdWNlciBtZXJnZV9kYXRhXzIgKSwgcm5nXzIgIyBbeyBzdGFydDogMywgZW5kOiAxNCB9XVxuICBpbmZvICfOqWltdF8yMjAnLCBybmcgZm9yIHJuZyBpbiBtZXJnZWRcbiAgIyB1cmdlICfOqWltdF8yMjEnLCBybmcgZm9yIHJuZyBpbiBtZXJnZWRfZnRcbiAgIyB1cmdlKClcbiAgO251bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgYmFzaWNfc2NhdHRlcnM6IHRlc3RzLmJhc2ljX3NjYXR0ZXJzLCB9XG5cblxuXG4iXX0=
