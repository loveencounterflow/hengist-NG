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
      var Hoard, d, h, Ωimt__10, Ωimt__11, Ωimt__12, Ωimt___1, Ωimt___2, Ωimt___4, Ωimt___5, Ωimt___6, Ωimt___7, Ωimt___8, Ωimt___9;
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
      d = h.create_run({
        lo: 7,
        hi: 21
      });
      this.throws((Ωimt__10 = function() {
        return d.lo = 6;
      }), /cannot assign to read only property/i);
      d = h.create_run({
        lo: 7,
        hi: 21
      });
      this.throws((Ωimt__11 = function() {
        return d.hi = 22;
      }), /cannot assign to read only property/i);
      //.......................................................................................................
      this.eq((Ωimt__12 = function() {
        return (h.create_run(1, 1)).scatter;
      }), void 0);
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    basic_scatters: function() {
      var Hoard;
      ({Hoard} = require('../../../apps/bricabrac-sfmodules/lib/intermission'));
      (() => {        //.......................................................................................................
        var h, s, Ωimt__13, Ωimt__14, Ωimt__15, Ωimt__16, Ωimt__17, Ωimt__19, Ωimt__21, Ωimt__22, Ωimt__23, Ωimt__24;
        h = new Hoard();
        s = h.add_scatter({
          a: 1
        });
        this.eq((Ωimt__13 = function() {
          return {...s};
        }), {
          data: {
            a: 1
          },
          rowid: 't:hrd:scatters,R=1',
          runs: []
        });
        this.eq((Ωimt__14 = function() {
          return s.is_normalized;
        }), false);
        //.....................................................................................................
        s.add_run({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__15 = function() {
          return s.runs.length;
        }), 1);
        s.add_run(1);
        this.eq((Ωimt__16 = function() {
          return s.runs.length;
        }), 2);
        s.add_run({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__17 = function() {
          return s.runs.length;
        }), 3);
        // s.add_run new Run { lo: 1, hi: 1, };  @eq ( Ωimt__18 = -> s.runs.length     ), 3
        //.....................................................................................................
        this.eq((Ωimt__19 = function() {
          return s.is_normalized;
        }), false);
        // @eq ( Ωimt__20 = -> s.is_sorted       ), false
        this.eq((Ωimt__21 = function() {
          return s.data;
        }), {
          a: 1
        });
        this.eq((Ωimt__22 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__23 = function() {
          return s.runs[1];
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__24 = function() {
          return s.runs[2];
        }), {
          lo: 1,
          hi: 1
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt__71, Ωimt__72, Ωimt__73, Ωimt__74, Ωimt__75, Ωimt__76, Ωimt__77, Ωimt__78, Ωimt__79, Ωimt__80, Ωimt__81, Ωimt__82;
        h = new Hoard();
        s = h.add_scatter();
        this.eq((Ωimt__71 = function() {
          return s.is_normalized;
        }), false);
        s.add_run(103, 109);
        this.eq((Ωimt__72 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__73 = function() {
          return s.is_normalized;
        }), false);
        s.add_run(111, 115);
        this.eq((Ωimt__74 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__75 = function() {
          return s.is_normalized;
        }), false);
        s.add_run(110);
        this.eq((Ωimt__76 = function() {
          return s.runs.length;
        }), 3);
        this.eq((Ωimt__77 = function() {
          return s.is_normalized;
        }), false);
        this.eq((Ωimt__78 = function() {
          return {
            min: s.min,
            max: s.max
          };
        }), {
          min: 103,
          max: 115
        });
        this.eq((Ωimt__79 = function() {
          return s.minmax;
        }), {
          min: 103,
          max: 115
        });
        //.....................................................................................................
        this.eq((Ωimt__80 = function() {
          return s.runs[0];
        }), {
          lo: 103,
          hi: 109
        });
        this.eq((Ωimt__81 = function() {
          return s.runs[1];
        }), {
          lo: 111,
          hi: 115
        });
        this.eq((Ωimt__82 = function() {
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
    _overlapping: function() {
      var Hoard;
      ({Hoard} = require('../../../apps/bricabrac-sfmodules/lib/intermission'));
      (() => {        //.......................................................................................................
        var h, s, Ωimt__85, Ωimt__86, Ωimt__87, Ωimt__88, Ωimt__89;
        h = new Hoard();
        s = h.add_scatter();
        s.add_run('a', 'y');
        s.add_run('A', 'Y');
        debug('Ωimt__83', h);
        debug('Ωimt__84', h.scatters);
        this.eq((Ωimt__85 = function() {
          return s.contains('a');
        }), true);
        this.eq((Ωimt__86 = function() {
          return s.contains({
            lo: 'a'
          });
        }), true);
        this.eq((Ωimt__87 = function() {
          return s.contains({
            lo: 'a',
            hi: 'y'
          });
        }), true);
        this.eq((Ωimt__88 = function() {
          return s.contains({
            lo: 'a',
            hi: 'z'
          });
        }), true);
        this.eq((Ωimt__89 = function() {
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
        var h, r, Ωimt_100, Ωimt_101, Ωimt_102, Ωimt_103, Ωimt_104, Ωimt_105, Ωimt_106, Ωimt_107, Ωimt_108, Ωimt_109, Ωimt_110, Ωimt__90, Ωimt__91, Ωimt__92, Ωimt__93, Ωimt__94, Ωimt__95, Ωimt__96, Ωimt__97, Ωimt__98, Ωimt__99;
        h = new Hoard();
        r = h.create_run({
          lo: 25,
          hi: 30
        });
        this.eq((Ωimt__90 = function() {
          return r.contains(21);
        }), false);
        this.eq((Ωimt__91 = function() {
          return r.contains(22);
        }), false);
        this.eq((Ωimt__92 = function() {
          return r.contains(23);
        }), false);
        this.eq((Ωimt__93 = function() {
          return r.contains(24);
        }), false);
        this.eq((Ωimt__94 = function() {
          return r.contains(25);
        }), true);
        this.eq((Ωimt__95 = function() {
          return r.contains(26);
        }), true);
        this.eq((Ωimt__96 = function() {
          return r.contains(27);
        }), true);
        this.eq((Ωimt__97 = function() {
          return r.contains(28);
        }), true);
        this.eq((Ωimt__98 = function() {
          return r.contains(29);
        }), true);
        this.eq((Ωimt__99 = function() {
          return r.contains(30);
        }), true);
        this.eq((Ωimt_100 = function() {
          return r.contains(31);
        }), false);
        this.eq((Ωimt_101 = function() {
          return r.contains(41);
        }), false);
        this.eq((Ωimt_102 = function() {
          return r.contains([25]);
        }), true);
        this.eq((Ωimt_103 = function() {
          return r.contains([30]);
        }), true);
        this.eq((Ωimt_104 = function() {
          return r.contains([31]);
        }), false);
        this.eq((Ωimt_105 = function() {
          return r.contains([32]);
        }), false);
        this.eq((Ωimt_106 = function() {
          return r.contains([25, 26, 27, 28, 29, 30]);
        }), true);
        this.eq((Ωimt_107 = function() {
          return r.contains([25, 26, 27, 28, 29, 30, 31]);
        }), false);
        this.eq((Ωimt_108 = function() {
          return r.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30]);
          })());
        }), true);
        this.eq((Ωimt_109 = function() {
          return r.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31]);
          })());
        }), false);
        this.eq((Ωimt_110 = function() {
          return r.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31, 32]);
          })());
        }), false);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, s1, Ωimt_111, Ωimt_112, Ωimt_113, Ωimt_114, Ωimt_115, Ωimt_116, Ωimt_117, Ωimt_118, Ωimt_119, Ωimt_120, Ωimt_121, Ωimt_122, Ωimt_123, Ωimt_124, Ωimt_125, Ωimt_126, Ωimt_127, Ωimt_128, Ωimt_129, Ωimt_130, Ωimt_131, Ωimt_132, Ωimt_133, Ωimt_134, Ωimt_135, Ωimt_136, Ωimt_137, Ωimt_138, Ωimt_139, Ωimt_140, Ωimt_141, Ωimt_142, Ωimt_143, Ωimt_144, Ωimt_145, Ωimt_146, Ωimt_147, Ωimt_148, Ωimt_149, Ωimt_150, Ωimt_151, Ωimt_152;
        h = new Hoard();
        s = h.add_scatter();
        s.add_run(25, 30);
        s.add_run(32, 40);
        this.eq((Ωimt_111 = function() {
          return s.contains(21);
        }), false);
        this.eq((Ωimt_112 = function() {
          return s.contains(22);
        }), false);
        this.eq((Ωimt_113 = function() {
          return s.contains(23);
        }), false);
        this.eq((Ωimt_114 = function() {
          return s.contains(24);
        }), false);
        this.eq((Ωimt_115 = function() {
          return s.contains(25);
        }), true);
        this.eq((Ωimt_116 = function() {
          return s.contains(26);
        }), true);
        this.eq((Ωimt_117 = function() {
          return s.contains(27);
        }), true);
        this.eq((Ωimt_118 = function() {
          return s.contains(28);
        }), true);
        this.eq((Ωimt_119 = function() {
          return s.contains(29);
        }), true);
        this.eq((Ωimt_120 = function() {
          return s.contains(30);
        }), true);
        this.eq((Ωimt_121 = function() {
          return s.contains(31);
        }), false);
        this.eq((Ωimt_122 = function() {
          return s.contains(32);
        }), true);
        this.eq((Ωimt_123 = function() {
          return s.contains(33);
        }), true);
        this.eq((Ωimt_124 = function() {
          return s.contains(34);
        }), true);
        this.eq((Ωimt_125 = function() {
          return s.contains(35);
        }), true);
        this.eq((Ωimt_126 = function() {
          return s.contains(36);
        }), true);
        this.eq((Ωimt_127 = function() {
          return s.contains(37);
        }), true);
        this.eq((Ωimt_128 = function() {
          return s.contains(38);
        }), true);
        this.eq((Ωimt_129 = function() {
          return s.contains(39);
        }), true);
        this.eq((Ωimt_130 = function() {
          return s.contains(40);
        }), true);
        this.eq((Ωimt_131 = function() {
          return s.contains(41);
        }), false);
        this.eq((Ωimt_132 = function() {
          return s.contains(42);
        }), false);
        this.eq((Ωimt_133 = function() {
          return s.contains(43);
        }), false);
        this.eq((Ωimt_134 = function() {
          return s.contains([25, 26, 27, 28, 29, 30]);
        }), true);
        this.eq((Ωimt_135 = function() {
          return s.contains([25, 26, 27, 28, 29, 30, 31]);
        }), false);
        this.eq((Ωimt_136 = function() {
          return s.contains([30]);
        }), true);
        this.eq((Ωimt_137 = function() {
          return s.contains([31]);
        }), false);
        this.eq((Ωimt_138 = function() {
          return s.contains([32]);
        }), true);
        this.eq((Ωimt_139 = function() {
          return s.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30]);
          })());
        }), true);
        this.eq((Ωimt_140 = function() {
          return s.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31]);
          })());
        }), false);
        this.eq((Ωimt_141 = function() {
          return s.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31, 32]);
          })());
        }), false);
        this.eq((Ωimt_142 = function() {
          return s.contains(h.create_run(25));
        }), true);
        this.eq((Ωimt_143 = function() {
          return s.contains(h.create_run(25, 30));
        }), true);
        this.eq((Ωimt_144 = function() {
          return s.contains(h.create_run(25, 32));
        }), false);
        s1 = h.add_scatter();
        s1.add_run(26, 27);
        s1.add_run(37, 40);
        this.eq((Ωimt_145 = function() {
          return s1.is_normalized;
        }), false);
        this.eq((Ωimt_146 = function() {
          return s.contains(s1);
        }), true);
        this.eq((Ωimt_147 = function() {
          return s1.is_normalized;
        }), true);
        s1.add_run(25, 32);
        this.eq((Ωimt_148 = function() {
          return s.contains(s1);
        }), false);
        this.eq((Ωimt_149 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(31);
        this.eq((Ωimt_150 = function() {
          return s.is_normalized;
        }), false);
        this.eq((Ωimt_151 = function() {
          return s.contains(s1);
        }), true);
        this.eq((Ωimt_152 = function() {
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
        var h, Ωimt_153, Ωimt_154, Ωimt_155;
        h = new Hoard();
        this.eq((Ωimt_153 = function() {
          return [...(h.create_run(1))];
        }), [1]);
        this.eq((Ωimt_154 = function() {
          return [...(h.create_run(297))];
        }), [297]);
        this.eq((Ωimt_155 = function() {
          return [...(h.create_run(297, 308))];
        }), [297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_156, Ωimt_157, Ωimt_158, Ωimt_159, Ωimt_160, Ωimt_161, Ωimt_162, Ωimt_163, Ωimt_164, Ωimt_165, Ωimt_166, Ωimt_167, Ωimt_168, Ωimt_169, Ωimt_170;
        h = new Hoard();
        s = h.add_scatter();
        this.eq((Ωimt_156 = function() {
          return [...s];
        }), []);
        s.add_run(1);
        this.eq((Ωimt_157 = function() {
          return [...s];
        }), [1]);
        this.eq((Ωimt_158 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(297);
        this.eq((Ωimt_159 = function() {
          return [...s];
        }), [1, 297]);
        this.eq((Ωimt_160 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(299, 302);
        this.eq((Ωimt_161 = function() {
          return [...s];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_162 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(298);
        this.eq((Ωimt_163 = function() {
          return [...s];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_164 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(300, 301);
        this.eq((Ωimt_165 = function() {
          return [...s];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_166 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_167 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_168 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1,
          rowid: 't:hrd:runs,R=1',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_169 = function() {
          return s.runs[1];
        }), {
          lo: 297,
          hi: 302,
          rowid: 't:hrd:runs,R=2',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_170 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_171, Ωimt_172, Ωimt_173, Ωimt_174, Ωimt_175, Ωimt_176, Ωimt_177, Ωimt_178, Ωimt_179, Ωimt_180, Ωimt_181, Ωimt_182, Ωimt_183, Ωimt_184, Ωimt_185;
        h = new Hoard();
        s = h.add_scatter();
        this.eq((Ωimt_171 = function() {
          return [...s.walk()];
        }), []);
        s.add_run(1);
        this.eq((Ωimt_172 = function() {
          return [...s.walk()];
        }), [1]);
        this.eq((Ωimt_173 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(297);
        this.eq((Ωimt_174 = function() {
          return [...s.walk()];
        }), [1, 297]);
        this.eq((Ωimt_175 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(299, 302);
        this.eq((Ωimt_176 = function() {
          return [...s.walk()];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_177 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(298);
        this.eq((Ωimt_178 = function() {
          return [...s.walk()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_179 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(300, 301);
        this.eq((Ωimt_180 = function() {
          return [...s.walk()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_181 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_182 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_183 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1,
          rowid: 't:hrd:runs,R=1',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_184 = function() {
          return s.runs[1];
        }), {
          lo: 297,
          hi: 302,
          rowid: 't:hrd:runs,R=2',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_185 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_186, Ωimt_187, Ωimt_188, Ωimt_189, Ωimt_190, Ωimt_191, Ωimt_192, Ωimt_193, Ωimt_194, Ωimt_195, Ωimt_196, Ωimt_197, Ωimt_198, Ωimt_199, Ωimt_200;
        h = new Hoard();
        s = h.add_scatter();
        this.eq((Ωimt_186 = function() {
          return s.points;
        }), []);
        s.add_run(1);
        this.eq((Ωimt_187 = function() {
          return s.points;
        }), [1]);
        this.eq((Ωimt_188 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(297);
        this.eq((Ωimt_189 = function() {
          return s.points;
        }), [1, 297]);
        this.eq((Ωimt_190 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(299, 302);
        this.eq((Ωimt_191 = function() {
          return s.points;
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_192 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(298);
        this.eq((Ωimt_193 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_194 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(300, 301);
        this.eq((Ωimt_195 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_196 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_197 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_198 = function() {
          return s.runs[0];
        }), {
          lo: 1,
          hi: 1,
          rowid: 't:hrd:runs,R=1',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_199 = function() {
          return s.runs[1];
        }), {
          lo: 297,
          hi: 302,
          rowid: 't:hrd:runs,R=2',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_200 = function() {
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
        var h, s, Ωimt_201, Ωimt_202, Ωimt_203;
        h = new Hoard();
        s = h.add_scatter();
        this.throws((Ωimt_201 = function() {
          return s.add_run(5.8);
        }), /expected an integer or a text, got a float/);
        this.throws((Ωimt_202 = function() {
          return s.add_run(-3);
        }), /-0x3 is not between \+0x0 and \+0x10ffff/);
        this.throws((Ωimt_203 = function() {
          return s.add_run(0, -3);
        }), /-0x3 is not between \+0x0 and \+0x10ffff/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_204, Ωimt_205, Ωimt_206, Ωimt_207;
        h = new Hoard({
          first: -10,
          last: +10
        });
        s = h.add_scatter();
        s.add_run(-10);
        this.eq((Ωimt_204 = function() {
          return s.points;
        }), [-10]);
        s.add_run(+10);
        this.eq((Ωimt_205 = function() {
          return s.points;
        }), [-10, +10]);
        this.throws((Ωimt_206 = function() {
          return s.add_run(-11);
        }), /-0xb is not between -0xa and \+0xa/);
        this.throws((Ωimt_207 = function() {
          return s.add_run(+11);
        }), /\+0xb is not between -0xa and \+0xa/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_208, Ωimt_209, Ωimt_210, Ωimt_211, Ωimt_212, Ωimt_213;
        h = new Hoard();
        s = h.add_scatter();
        s.add_run('A');
        this.eq((Ωimt_208 = function() {
          return s.points;
        }), ['A'.codePointAt(0)]);
        s.add_run('A', 'Z');
        this.eq((Ωimt_209 = function() {
          return s.points;
        }), [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]);
        s.add_run('a', 'z');
        this.eq((Ωimt_210 = function() {
          return s.points;
        }), [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
        this.eq((Ωimt_211 = function() {
          return s.min;
        }), 'A'.codePointAt(0));
        this.eq((Ωimt_212 = function() {
          return s.max;
        }), 'z'.codePointAt(0));
        this.eq((Ωimt_213 = function() {
          return {
            min: s.min,
            max: s.max
          };
        }), s.minmax);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_214;
        h = new Hoard();
        s = h.add_scatter();
        s.add_run('Abc');
        this.eq((Ωimt_214 = function() {
          return s.points;
        }), ['A'.codePointAt(0)]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_215, Ωimt_216, Ωimt_217, Ωimt_218, Ωimt_219;
        h = new Hoard();
        s = h.add_scatter();
        s = h.add_scatter();
        s = h.add_scatter();
        s.add_codepoints_of('Abc');
        this.eq((Ωimt_215 = function() {
          return s.runs.length;
        }), 3);
        this.eq((Ωimt_216 = function() {
          return s.points;
        }), ['A'.codePointAt(0), 'b'.codePointAt(0), 'c'.codePointAt(0)]);
        this.eq((Ωimt_217 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_218 = function() {
          return s.runs[0];
        }), {
          lo: 'A'.codePointAt(0),
          hi: 'A'.codePointAt(0),
          rowid: 't:hrd:runs,R=1',
          scatter: 't:hrd:scatters,R=3'
        });
        this.eq((Ωimt_219 = function() {
          return s.runs[1];
        }), {
          lo: 'b'.codePointAt(0),
          hi: 'c'.codePointAt(0),
          rowid: 't:hrd:runs,R=2',
          scatter: 't:hrd:scatters,R=3'
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_220, Ωimt_221, Ωimt_222;
        h = new Hoard();
        s = h.add_scatter();
        s.add_codepoints_of('aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ');
        this.eq((Ωimt_220 = function() {
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
        this.eq((Ωimt_221 = function() {
          return s.runs.length;
        }), 16);
        s.normalize();
        this.eq((Ωimt_222 = function() {
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
        var h, s_umlaut, s_vowels, Ωimt_223, Ωimt_224, Ωimt_225, Ωimt_226, Ωimt_227, Ωimt_228, Ωimt_229, Ωimt_230;
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
        this.eq((Ωimt_223 = function() {
          return s_vowels.contains('A');
        }), true);
        this.eq((Ωimt_224 = function() {
          return s_vowels.contains('A'.codePointAt(0));
        }), true);
        this.eq((Ωimt_225 = function() {
          return s_vowels.contains('B');
        }), false);
        this.eq((Ωimt_226 = function() {
          return s_vowels.contains('B'.codePointAt(0));
        }), false);
        this.eq((Ωimt_227 = function() {
          return h.summarize_data_for_point('A');
        }), {
          is_ascii: [true],
          tags: ['vowel']
        });
        this.eq((Ωimt_228 = function() {
          return h.summarize_data_for_point('ä');
        }), {
          is_ascii: [true],
          tags: ['umlaut', 'vowel']
        });
        this.eq((Ωimt_229 = function() {
          return h.summarize_data_for_point('B');
        }), null);
        this.eq((Ωimt_230 = function() {
          return h.summarize_data_for_point('y');
        }), null);
        return null;
      })();
      (() => {        //.......................................................................................................
        var Vu_hoard, h, s_ascii, s_not_ascii, s_umlaut, s_vowels, Ωimt_231, Ωimt_232, Ωimt_233, Ωimt_234, Ωimt_235, Ωimt_236, Ωimt_237, Ωimt_238, Ωimt_239, Ωimt_240, Ωimt_241, Ωimt_242, Ωimt_243, Ωimt_244, Ωimt_245, Ωimt_246, Ωimt_247, Ωimt_248, Ωimt_249, Ωimt_250, Ωimt_251, Ωimt_252, Ωimt_253, Ωimt_254;
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
        s_ascii.add_run('a', 'z');
        s_ascii.add_run('A', 'Z');
        s_vowels.add_codepoints_of('aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ');
        s_umlaut.add_codepoints_of('äöü', 'äöü', 'ÄÖÜ');
        this.eq((Ωimt_231 = function() {
          return s_ascii.contains('A');
        }), true);
        this.eq((Ωimt_232 = function() {
          return s_ascii.contains('Q');
        }), true);
        this.eq((Ωimt_233 = function() {
          return s_ascii.contains('f');
        }), true);
        this.eq((Ωimt_234 = function() {
          return s_vowels.contains('A');
        }), true);
        this.eq((Ωimt_235 = function() {
          return s_vowels.contains('A'.codePointAt(0));
        }), true);
        this.eq((Ωimt_236 = function() {
          return s_vowels.contains('B');
        }), false);
        this.eq((Ωimt_237 = function() {
          return s_vowels.contains('B'.codePointAt(0));
        }), false);
        this.eq((Ωimt_238 = function() {
          return h.get_data_for_point('A');
        }), [
          {
            is_ascii: true
          },
          {
            tags: ['vowel']
          }
        ]);
        this.eq((Ωimt_239 = function() {
          return h.get_data_for_point('A'.codePointAt(0));
        }), [
          {
            is_ascii: true
          },
          {
            tags: ['vowel']
          }
        ]);
        this.eq((Ωimt_240 = function() {
          return h.get_data_for_point('Q');
        }), [
          {
            is_ascii: true
          }
        ]);
        this.eq((Ωimt_241 = function() {
          return h.get_data_for_point('f');
        }), [
          {
            is_ascii: true
          }
        ]);
        this.eq((Ωimt_242 = function() {
          return h.get_data_for_point('B');
        }), [
          {
            is_ascii: true
          }
        ]);
        this.eq((Ωimt_243 = function() {
          return h.get_data_for_point('B'.codePointAt(0));
        }), [
          {
            is_ascii: true
          }
        ]);
        this.eq((Ωimt_244 = function() {
          return h.get_data_for_point('ä');
        }), [
          {
            tags: ['vowel']
          },
          {
            tags: ['umlaut']
          }
        ]);
        this.eq((Ωimt_245 = function() {
          return h.summarize_data_for_point('A');
        }), {
          is_ascii: true,
          tags: ['vowel']
        });
        this.eq((Ωimt_246 = function() {
          return h.summarize_data_for_point('A'.codePointAt(0));
        }), {
          is_ascii: true,
          tags: ['vowel']
        });
        this.eq((Ωimt_247 = function() {
          return h.summarize_data_for_point('Q');
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_248 = function() {
          return h.summarize_data_for_point('f');
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_249 = function() {
          return h.summarize_data_for_point('B');
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_250 = function() {
          return h.summarize_data_for_point('B'.codePointAt(0));
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_251 = function() {
          return h.summarize_data_for_point('ä');
        }), {
          tags: ['umlaut', 'vowel']
        });
        //.....................................................................................................
        s_not_ascii = h.add_scatter({
          is_ascii: false
        });
        s_not_ascii.add_run(0x80, 0x10ffff);
        this.eq((Ωimt_252 = function() {
          return h.summarize_data_for_point('B');
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_253 = function() {
          return h.summarize_data_for_point('ä');
        }), {
          is_ascii: false,
          tags: ['umlaut', 'vowel']
        });
        this.throws((Ωimt_254 = function() {
          return h.summarize_data_for_point('äwhat');
        }), /not a valid point/);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    validation: function() {
      var My_typespace, T, Type, Typespace, Ωimt_257, Ωimt_258, Ωimt_259, Ωimt_260, Ωimt_261, Ωimt_262, Ωimt_263, Ωimt_264, Ωimt_265, Ωimt_266, Ωimt_267, Ωimt_268, Ωimt_269, Ωimt_270, Ωimt_271, Ωimt_272;
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
      debug('Ωimt_255', T.integer);
      debug('Ωimt_256', T.integer.isa);
      //.......................................................................................................
      this.eq((Ωimt_257 = function() {
        return T.integer.isa(5);
      }), true);
      this.eq((Ωimt_258 = function() {
        return T.point.isa(5);
      }), true);
      this.eq((Ωimt_259 = function() {
        return T.point.isa('a');
      }), true);
      //.......................................................................................................
      this.eq((Ωimt_260 = function() {
        return T.integer.isa(55.5);
      }), false);
      this.eq((Ωimt_261 = function() {
        return T.point.isa(55.5);
      }), false);
      this.eq((Ωimt_262 = function() {
        return T.point.isa('abc');
      }), false);
      //.......................................................................................................
      this.eq((Ωimt_263 = function() {
        return T.integer.validate(5);
      }), 5);
      this.eq((Ωimt_264 = function() {
        return T.point.validate(5);
      }), 5);
      this.eq((Ωimt_265 = function() {
        return T.point.validate('a');
      }), 'a');
      //.......................................................................................................
      this.eq((Ωimt_266 = function() {
        var e;
        try {
          return T.integer.validate(55.5);
        } catch (error) {
          e = error;
          return e.message;
        }
      }), `(integer) not a valid integer: 55.5 – 55.5 is a non-integer number`);
      this.eq((Ωimt_267 = function() {
        var e;
        try {
          return T.point.validate(55.5);
        } catch (error) {
          e = error;
          return e.message;
        }
      }), `(point) not a valid point: 55.5 – 55.5 is not an integer and not a text`);
      this.eq((Ωimt_268 = function() {
        var e;
        try {
          return T.point.validate('abc');
        } catch (error) {
          e = error;
          return e.message;
        }
      }), `(point) not a valid point: abc – 'abc' is a text but not with a single codepoint`);
      //.......................................................................................................
      this.throws((Ωimt_269 = function() {
        return T.integer.validate(55.5);
      }), /not a valid integer/);
      this.throws((Ωimt_270 = function() {
        return T.point.validate(55.5);
      }), /not a valid point/);
      this.throws((Ωimt_271 = function() {
        return T.point.validate('abc');
      }), /not a valid point/);
      this.throws((Ωimt_272 = function() {
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
      debug('Ωimt_273', Hoard);
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
      // @eq ( Ωimt_274 = -> type_of Hoard.get_udfs                                    ), 'function'
      // @eq ( Ωimt_275 = -> type_of Hoard.get_build_statements                        ), 'function'
      // #.......................................................................................................
      // @eq ( Ωimt_276 = -> type_of Hoard.get_udfs              { prefix, }           ), 'pod'
      // @eq ( Ωimt_277 = -> type_of Hoard.get_build_statements  { prefix, }           ), 'list'
      // #.......................................................................................................
      // @eq ( Ωimt_278 = -> ( Object.keys Hoard.get_udfs        { prefix, } ).length  ), 3
      // @eq ( Ωimt_279 = -> ( Hoard.get_build_statements        { prefix, } ).length  ), 3
      // #.......................................................................................................
      // {}
      // udfs              = Hoard.get_udfs { prefix, }
      // build_statements  = Hoard.get_build_statements { prefix, }
      // db                = new Dbric ':memory:'
      // #.......................................................................................................
      // for name, definition of udfs
      //   info 'Ωimt_280', "create UDF #{definition.name}"
      //   db.create_function definition
      // debug 'Ωimt_281',  name for name from get_function_names db when name.startsWith "#{prefix}_"
      // #.......................................................................................................
      // for statement, idx in build_statements
      //   statement = db.prepare statement
      //   info 'Ωimt_282', statement.run()
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
      // ( new Test guytest_cfg ).test { overlapping: tests.overlapping, }
      // ( new Test guytest_cfg ).test { dbric_integration: tests._dbric_integration, }
      // ( new Test guytest_cfg ).test { basic_scatters: tests.basic_scatters, }
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtaW50ZXJtaXNzaW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHdCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBekJBOzs7RUEyQkEsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsNENBQVIsQ0FBNUI7O0VB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QUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsQ0FBRSxLQUFGLENBQTlCLEVBTEY7Ozs7YUFTRztJQVZxQyxDQUFBLElBQXhDOztBQS9mQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1pbnRlcm1pc3Npb24nXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xueyB0eXBlX29mLCAgICAgICAgICAgICAgfSA9ICggcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi91bnN0YWJsZS1ycHItdHlwZV9vZi1icmljcycgKS5yZXF1aXJlX3R5cGVfb2YoKVxuXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJhc2ljX3J1bnM6IC0+XG4gICAgeyBIb2FyZCwgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2ludGVybWlzc2lvbidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGggPSBuZXcgSG9hcmQoKVxuICAgIEB0aHJvd3MgKCDOqWltdF9fXzEgPSAtPiBoLmNyZWF0ZV9ydW4oKSAgICAgICAgICAgKSwgL2V4cGVjdGVkIGFuIGludGVnZXIgb3IgYSB0ZXh0LCBnb3QgYSBudWxsL1xuICAgIEB0aHJvd3MgKCDOqWltdF9fXzIgPSAtPiBoLmNyZWF0ZV9ydW4geyBoaTogNywgfSAgKSwgL2V4cGVjdGVkIGFuIGludGVnZXIgb3IgYSB0ZXh0LCBnb3QgYSBudWxsL1xuICAgICMgZCA9IGguY3JlYXRlX3J1bigpOyAgICAgICAgICAgICAgICAgIEBlcSAoIM6paW10X19fMyA9IC0+IFsgZCwgZC5zaXplLCBdICksIFsgeyBsbzogMCwgaGk6IDAsIH0sICAxLCBdXG4gICAgZCA9IGguY3JlYXRlX3J1biA3OyAgICAgICAgICAgICAgICAgIEBlcSAoIM6paW10X19fNCA9IC0+IFsgZCwgZC5zaXplLCBdICksIFsgeyBsbzogNywgaGk6IDcsIH0sICAxLCBdXG4gICAgZCA9IGguY3JlYXRlX3J1biA3LCA3OyAgICAgICAgICAgICAgIEBlcSAoIM6paW10X19fNSA9IC0+IFsgZCwgZC5zaXplLCBdICksIFsgeyBsbzogNywgaGk6IDcsIH0sICAxLCBdXG4gICAgZCA9IGguY3JlYXRlX3J1biA3LCAxMjsgICAgICAgICAgICAgIEBlcSAoIM6paW10X19fNiA9IC0+IFsgZCwgZC5zaXplLCBdICksIFsgeyBsbzogNywgaGk6IDEyLCB9LCA2LCBdXG4gICAgZCA9IGguY3JlYXRlX3J1biB7IGxvOiA3LCB9OyAgICAgICAgIEBlcSAoIM6paW10X19fNyA9IC0+IFsgZCwgZC5zaXplLCBdICksIFsgeyBsbzogNywgaGk6IDcsIH0sICAxLCBdXG4gICAgZCA9IGguY3JlYXRlX3J1biB7IGxvOiA3LCBoaTogNywgfTsgIEBlcSAoIM6paW10X19fOCA9IC0+IFsgZCwgZC5zaXplLCBdICksIFsgeyBsbzogNywgaGk6IDcsIH0sICAxLCBdXG4gICAgZCA9IGguY3JlYXRlX3J1biB7IGxvOiA3LCBoaTogMjEsIH07IEBlcSAoIM6paW10X19fOSA9IC0+IFsgZCwgZC5zaXplLCBdICksIFsgeyBsbzogNywgaGk6IDIxLCB9LCAxNSwgXVxuICAgIGQgPSBoLmNyZWF0ZV9ydW4geyBsbzogNywgaGk6IDIxLCB9OyBAdGhyb3dzICggzqlpbXRfXzEwID0gLT4gZC5sbyA9IDYgICApLCAvY2Fubm90IGFzc2lnbiB0byByZWFkIG9ubHkgcHJvcGVydHkvaVxuICAgIGQgPSBoLmNyZWF0ZV9ydW4geyBsbzogNywgaGk6IDIxLCB9OyBAdGhyb3dzICggzqlpbXRfXzExID0gLT4gZC5oaSA9IDIyICApLCAvY2Fubm90IGFzc2lnbiB0byByZWFkIG9ubHkgcHJvcGVydHkvaVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlpbXRfXzEyID0gLT4gKCBoLmNyZWF0ZV9ydW4gMSwgMSApLnNjYXR0ZXIgKSwgdW5kZWZpbmVkXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJhc2ljX3NjYXR0ZXJzOiAtPlxuICAgIHsgSG9hcmQsICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9pbnRlcm1pc3Npb24nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5hZGRfc2NhdHRlciB7IGE6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18xMyA9IC0+IHsgcy4uLiwgfSApLCB7IGRhdGE6IHsgYTogMSB9LCByb3dpZDogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScsIHJ1bnM6IFtdIH1cbiAgICAgIEBlcSAoIM6paW10X18xNCA9IC0+IHMuaXNfbm9ybWFsaXplZCAgICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHMuYWRkX3J1biB7IGxvOiAxLCBoaTogMSwgfTsgICAgICAgICAgQGVxICggzqlpbXRfXzE1ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMVxuICAgICAgcy5hZGRfcnVuIDE7ICAgICAgICAgICAgICAgICAgICAgICAgICBAZXEgKCDOqWltdF9fMTYgPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAyXG4gICAgICBzLmFkZF9ydW4geyBsbzogMSwgaGk6IDEsIH07ICAgICAgICAgIEBlcSAoIM6paW10X18xNyA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDNcbiAgICAgICMgcy5hZGRfcnVuIG5ldyBSdW4geyBsbzogMSwgaGk6IDEsIH07ICBAZXEgKCDOqWltdF9fMTggPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paW10X18xOSA9IC0+IHMuaXNfbm9ybWFsaXplZCAgICksIGZhbHNlXG4gICAgICAjIEBlcSAoIM6paW10X18yMCA9IC0+IHMuaXNfc29ydGVkICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fMjEgPSAtPiBzLmRhdGEgICAgICAgICAgICApLCB7IGE6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18yMiA9IC0+IHMucnVuc1sgMCBdICAgICAgICksIHsgbG86IDEsIGhpOiAxLCB9XG4gICAgICBAZXEgKCDOqWltdF9fMjMgPSAtPiBzLnJ1bnNbIDEgXSAgICAgICApLCB7IGxvOiAxLCBoaTogMSwgfVxuICAgICAgQGVxICggzqlpbXRfXzI0ID0gLT4gcy5ydW5zWyAyIF0gICAgICAgKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5hZGRfc2NhdHRlcigpXG4gICAgICBAZXEgKCDOqWltdF9fNzEgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIHMuYWRkX3J1biAxMDMsIDEwOTsgICBAZXEgKCDOqWltdF9fNzIgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X183MyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgcy5hZGRfcnVuIDExMSwgMTE1OyAgIEBlcSAoIM6paW10X183NCA9IC0+IHMucnVucy5sZW5ndGggKSwgMjsgQGVxICggzqlpbXRfXzc1ID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBzLmFkZF9ydW4gMTEwOyAgICAgICAgQGVxICggzqlpbXRfXzc2ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAzOyBAZXEgKCDOqWltdF9fNzcgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X183OCA9IC0+IHsgbWluOiBzLm1pbiwgbWF4OiBzLm1heCwgfSApLCB7IG1pbjogMTAzLCBtYXg6IDExNSwgfVxuICAgICAgQGVxICggzqlpbXRfXzc5ID0gLT4gcy5taW5tYXggICAgICAgICAgICAgICAgICAgICksIHsgbWluOiAxMDMsIG1heDogMTE1LCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paW10X184MCA9IC0+IHMucnVuc1sgMCBdICksIHsgbG86IDEwMywgaGk6IDEwOSwgfVxuICAgICAgQGVxICggzqlpbXRfXzgxID0gLT4gcy5ydW5zWyAxIF0gKSwgeyBsbzogMTExLCBoaTogMTE1LCB9XG4gICAgICBAZXEgKCDOqWltdF9fODIgPSAtPiBzLnJ1bnNbIDIgXSApLCB7IGxvOiAxMTAsIGhpOiAxMTAsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgX292ZXJsYXBwaW5nOiAtPlxuICAgIHsgSG9hcmQsIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2ludGVybWlzc2lvbidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIHMuYWRkX3J1biAnYScsICd5J1xuICAgICAgcy5hZGRfcnVuICdBJywgJ1knXG4gICAgICBkZWJ1ZyAnzqlpbXRfXzgzJywgaFxuICAgICAgZGVidWcgJ86paW10X184NCcsIGguc2NhdHRlcnNcbiAgICAgIEBlcSAoIM6paW10X184NSA9IC0+IHMuY29udGFpbnMgJ2EnICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODYgPSAtPiBzLmNvbnRhaW5zIHsgbG86ICdhJywgfSAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzg3ID0gLT4gcy5jb250YWlucyB7IGxvOiAnYScsIGhpOiAneScsIH0gICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X184OCA9IC0+IHMuY29udGFpbnMgeyBsbzogJ2EnLCBoaTogJ3onLCB9ICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODkgPSAtPiBzLmNvbnRhaW5zICcwJyAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29udGFpbm1lbnQ6IC0+XG4gICAgeyBIb2FyZCwgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2ludGVybWlzc2lvbidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHIgPSBoLmNyZWF0ZV9ydW4geyBsbzogMjUsIGhpOiAzMCwgfVxuICAgICAgQGVxICggzqlpbXRfXzkwID0gLT4gci5jb250YWlucyAyMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzkxID0gLT4gci5jb250YWlucyAyMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzkyID0gLT4gci5jb250YWlucyAyMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzkzID0gLT4gci5jb250YWlucyAyNCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzk0ID0gLT4gci5jb250YWlucyAyNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTUgPSAtPiByLmNvbnRhaW5zIDI2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X185NiA9IC0+IHIuY29udGFpbnMgMjcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzk3ID0gLT4gci5jb250YWlucyAyOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTggPSAtPiByLmNvbnRhaW5zIDI5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X185OSA9IC0+IHIuY29udGFpbnMgMzAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTAwID0gLT4gci5jb250YWlucyAzMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTAxID0gLT4gci5jb250YWlucyA0MSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTAyID0gLT4gci5jb250YWlucyBbIDI1LCBdICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMDMgPSAtPiByLmNvbnRhaW5zIFsgMzAsIF0gICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEwNCA9IC0+IHIuY29udGFpbnMgWyAzMSwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzEwNSA9IC0+IHIuY29udGFpbnMgWyAzMiwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzEwNiA9IC0+IHIuY29udGFpbnMgWyAyNSAuLiAzMCBdICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTA3ID0gLT4gci5jb250YWlucyBbIDI1IC4uIDMxIF0gICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTA4ID0gLT4gci5jb250YWlucyAoIC0+IHlpZWxkIGZyb20gWyAyNSAuLiAzMCBdICkoKSApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMDkgPSAtPiByLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMxIF0gKSgpICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMTAgPSAtPiByLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMyIF0gKSgpICksIGZhbHNlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguYWRkX3NjYXR0ZXIoKVxuICAgICAgcy5hZGRfcnVuIDI1LCAzMFxuICAgICAgcy5hZGRfcnVuIDMyLCA0MFxuICAgICAgQGVxICggzqlpbXRfMTExID0gLT4gcy5jb250YWlucyAyMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTEyID0gLT4gcy5jb250YWlucyAyMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTEzID0gLT4gcy5jb250YWlucyAyMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTE0ID0gLT4gcy5jb250YWlucyAyNCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTE1ID0gLT4gcy5jb250YWlucyAyNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMTYgPSAtPiBzLmNvbnRhaW5zIDI2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzExNyA9IC0+IHMuY29udGFpbnMgMjcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTE4ID0gLT4gcy5jb250YWlucyAyOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMTkgPSAtPiBzLmNvbnRhaW5zIDI5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEyMCA9IC0+IHMuY29udGFpbnMgMzAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTIxID0gLT4gcy5jb250YWlucyAzMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTIyID0gLT4gcy5jb250YWlucyAzMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMjMgPSAtPiBzLmNvbnRhaW5zIDMzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEyNCA9IC0+IHMuY29udGFpbnMgMzQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTI1ID0gLT4gcy5jb250YWlucyAzNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMjYgPSAtPiBzLmNvbnRhaW5zIDM2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEyNyA9IC0+IHMuY29udGFpbnMgMzcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTI4ID0gLT4gcy5jb250YWlucyAzOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMjkgPSAtPiBzLmNvbnRhaW5zIDM5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEzMCA9IC0+IHMuY29udGFpbnMgNDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTMxID0gLT4gcy5jb250YWlucyA0MSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTMyID0gLT4gcy5jb250YWlucyA0MiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTMzID0gLT4gcy5jb250YWlucyA0MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTM0ID0gLT4gcy5jb250YWlucyBbIDI1IC4uIDMwIF0gICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMzUgPSAtPiBzLmNvbnRhaW5zIFsgMjUgLi4gMzEgXSAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMzYgPSAtPiBzLmNvbnRhaW5zIFsgMzAsIF0gICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEzNyA9IC0+IHMuY29udGFpbnMgWyAzMSwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzEzOCA9IC0+IHMuY29udGFpbnMgWyAzMiwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTM5ID0gLT4gcy5jb250YWlucyAoIC0+IHlpZWxkIGZyb20gWyAyNSAuLiAzMCBdICkoKSApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xNDAgPSAtPiBzLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMxIF0gKSgpICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xNDEgPSAtPiBzLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMyIF0gKSgpICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xNDIgPSAtPiBzLmNvbnRhaW5zICggaC5jcmVhdGVfcnVuIDI1ICAgICAgICAgICAgICApICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzE0MyA9IC0+IHMuY29udGFpbnMgKCBoLmNyZWF0ZV9ydW4gMjUsIDMwICAgICAgICAgICkgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTQ0ID0gLT4gcy5jb250YWlucyAoIGguY3JlYXRlX3J1biAyNSwgMzIgICAgICAgICAgKSApLCBmYWxzZVxuICAgICAgczEgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIHMxLmFkZF9ydW4gMjYsIDI3XG4gICAgICBzMS5hZGRfcnVuIDM3LCA0MFxuICAgICAgQGVxICggzqlpbXRfMTQ1ID0gLT4gczEuaXNfbm9ybWFsaXplZCAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTQ2ID0gLT4gcy5jb250YWlucyBzMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xNDcgPSAtPiBzMS5pc19ub3JtYWxpemVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIHMxLmFkZF9ydW4gMjUsIDMyXG4gICAgICBAZXEgKCDOqWltdF8xNDggPSAtPiBzLmNvbnRhaW5zIHMxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xNDkgPSAtPiBzLmlzX25vcm1hbGl6ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAzMVxuICAgICAgQGVxICggzqlpbXRfMTUwID0gLT4gcy5pc19ub3JtYWxpemVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTUxID0gLT4gcy5jb250YWlucyBzMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xNTIgPSAtPiBzLmlzX25vcm1hbGl6ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXRlcmF0aW9uOiAtPlxuICAgIHsgSG9hcmQsICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9pbnRlcm1pc3Npb24nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBAZXEgKCDOqWltdF8xNTMgPSAtPiBbICggaC5jcmVhdGVfcnVuIDEgICAgICAgICApLi4uLCBdICAgICAgICksIFsgMSwgXVxuICAgICAgQGVxICggzqlpbXRfMTU0ID0gLT4gWyAoIGguY3JlYXRlX3J1biAyOTcgICAgICAgKS4uLiwgXSAgICAgICApLCBbIDI5NywgXVxuICAgICAgQGVxICggzqlpbXRfMTU1ID0gLT4gWyAoIGguY3JlYXRlX3J1biAyOTcsIDMwOCAgKS4uLiwgXSAgICAgICApLCBbIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIsIDMwMywgMzA0LCAzMDUsIDMwNiwgMzA3LCAzMDggXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIEBlcSAoIM6paW10XzE1NiA9IC0+IFsgcy4uLiwgXSAgICAgICApLCBbXVxuICAgICAgcy5hZGRfcnVuIDE7ICAgICAgICBAZXEgKCDOqWltdF8xNTcgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xNTggPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5NzsgICAgICBAZXEgKCDOqWltdF8xNTkgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xNjAgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5OSwgMzAyOyBAZXEgKCDOqWltdF8xNjEgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNjIgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5ODsgICAgICBAZXEgKCDOqWltdF8xNjMgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNjQgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDMwMCwgMzAxOyBAZXEgKCDOqWltdF8xNjUgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNjYgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTY3ID0gLT4gcy5ydW5zLmxlbmd0aCAgICksIDJcbiAgICAgIEBlcSAoIM6paW10XzE2OCA9IC0+IHMucnVuc1sgMCBdICAgICApLCB7IGxvOiAxLCBoaTogMSwgcm93aWQ6ICd0OmhyZDpydW5zLFI9MScsIHNjYXR0ZXI6ICd0OmhyZDpzY2F0dGVycyxSPTEnIH1cbiAgICAgIEBlcSAoIM6paW10XzE2OSA9IC0+IHMucnVuc1sgMSBdICAgICApLCB7IGxvOiAyOTcsIGhpOiAzMDIsIHJvd2lkOiAndDpocmQ6cnVucyxSPTInLCBzY2F0dGVyOiAndDpocmQ6c2NhdHRlcnMsUj0xJyB9XG4gICAgICBAZXEgKCDOqWltdF8xNzAgPSAtPiBzLnBvaW50cyAgICAgICAgKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyIF1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5hZGRfc2NhdHRlcigpXG4gICAgICBAZXEgKCDOqWltdF8xNzEgPSAtPiBbIHMud2FsaygpLi4uLCBdICAgICAgICksIFtdXG4gICAgICBzLmFkZF9ydW4gMTsgICAgICAgIEBlcSAoIM6paW10XzE3MiA9IC0+IFsgcy53YWxrKCkuLi4sIF0gKSwgWyAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xNzMgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5NzsgICAgICBAZXEgKCDOqWltdF8xNzQgPSAtPiBbIHMud2FsaygpLi4uLCBdICksIFsgMSwgMjk3LCAgICAgICAgICAgICAgICAgICAgICAgICAgXTsgQGVxICggzqlpbXRfMTc1ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAyOTksIDMwMjsgQGVxICggzqlpbXRfMTc2ID0gLT4gWyBzLndhbGsoKS4uLiwgXSApLCBbIDEsIDI5NywgICAgICAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzE3NyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4gMjk4OyAgICAgIEBlcSAoIM6paW10XzE3OCA9IC0+IFsgcy53YWxrKCkuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNzkgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDMwMCwgMzAxOyBAZXEgKCDOqWltdF8xODAgPSAtPiBbIHMud2FsaygpLi4uLCBdICksIFsgMSwgMjk3LCAyOTgsIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTgxID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzE4MiA9IC0+IHMucnVucy5sZW5ndGggICApLCAyXG4gICAgICBAZXEgKCDOqWltdF8xODMgPSAtPiBzLnJ1bnNbIDAgXSAgICAgKSwgeyBsbzogMSwgaGk6IDEsIHJvd2lkOiAndDpocmQ6cnVucyxSPTEnLCBzY2F0dGVyOiAndDpocmQ6c2NhdHRlcnMsUj0xJyB9XG4gICAgICBAZXEgKCDOqWltdF8xODQgPSAtPiBzLnJ1bnNbIDEgXSAgICAgKSwgeyBsbzogMjk3LCBoaTogMzAyLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0yJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlpbXRfMTg1ID0gLT4gcy5wb2ludHMgICAgICAgICksIFsgMSwgMjk3LCAyOTgsIDI5OSwgMzAwLCAzMDEsIDMwMiBdXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguYWRkX3NjYXR0ZXIoKVxuICAgICAgQGVxICggzqlpbXRfMTg2ID0gLT4gcy5wb2ludHMgKSwgW11cbiAgICAgIHMuYWRkX3J1biAxOyAgICAgICAgQGVxICggzqlpbXRfMTg3ID0gLT4gcy5wb2ludHMgKSwgWyAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xODggPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5NzsgICAgICBAZXEgKCDOqWltdF8xODkgPSAtPiBzLnBvaW50cyApLCBbIDEsIDI5NywgICAgICAgICAgICAgICAgICAgICAgICAgIF07IEBlcSAoIM6paW10XzE5MCA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4gMjk5LCAzMDI7IEBlcSAoIM6paW10XzE5MSA9IC0+IHMucG9pbnRzICksIFsgMSwgMjk3LCAgICAgIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTkyID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAyOTg7ICAgICAgQGVxICggzqlpbXRfMTkzID0gLT4gcy5wb2ludHMgKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xOTQgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDMwMCwgMzAxOyBAZXEgKCDOqWltdF8xOTUgPSAtPiBzLnBvaW50cyApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzE5NiA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xOTcgPSAtPiBzLnJ1bnMubGVuZ3RoICAgKSwgMlxuICAgICAgQGVxICggzqlpbXRfMTk4ID0gLT4gcy5ydW5zWyAwIF0gICAgICksIHsgbG86IDEsIGhpOiAxLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0xJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlpbXRfMTk5ID0gLT4gcy5ydW5zWyAxIF0gICAgICksIHsgbG86IDI5NywgaGk6IDMwMiwgcm93aWQ6ICd0OmhyZDpydW5zLFI9MicsIHNjYXR0ZXI6ICd0OmhyZDpzY2F0dGVycyxSPTEnIH1cbiAgICAgIEBlcSAoIM6paW10XzIwMCA9IC0+IHMucG9pbnRzICAgICAgICApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIgXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1c2luZ19zdHJpbmdzX2Zvcl9ib3VuZHM6IC0+XG4gICAgeyBIb2FyZCwgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2ludGVybWlzc2lvbidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIEB0aHJvd3MgKCDOqWltdF8yMDEgPSAtPiBzLmFkZF9ydW4gNS44ICAgICAgICAgKSwgL2V4cGVjdGVkIGFuIGludGVnZXIgb3IgYSB0ZXh0LCBnb3QgYSBmbG9hdC9cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8yMDIgPSAtPiBzLmFkZF9ydW4gLTMgICAgICAgICAgKSwgLy0weDMgaXMgbm90IGJldHdlZW4gXFwrMHgwIGFuZCBcXCsweDEwZmZmZi9cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8yMDMgPSAtPiBzLmFkZF9ydW4gMCwgLTMgICAgICAgKSwgLy0weDMgaXMgbm90IGJldHdlZW4gXFwrMHgwIGFuZCBcXCsweDEwZmZmZi9cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCB7IGZpcnN0OiAtMTAsIGxhc3Q6ICsxMCwgfVxuICAgICAgcyA9IGguYWRkX3NjYXR0ZXIoKVxuICAgICAgcy5hZGRfcnVuIC0xMDsgQGVxICggzqlpbXRfMjA0ID0gLT4gcy5wb2ludHMgICApLCBbIC0xMCwgXVxuICAgICAgcy5hZGRfcnVuICsxMDsgQGVxICggzqlpbXRfMjA1ID0gLT4gcy5wb2ludHMgICApLCBbIC0xMCwgKzEwLCBdXG4gICAgICBAdGhyb3dzICggzqlpbXRfMjA2ID0gLT4gcy5hZGRfcnVuIC0xMSAgICAgICAgICksIC8tMHhiIGlzIG5vdCBiZXR3ZWVuIC0weGEgYW5kIFxcKzB4YS9cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8yMDcgPSAtPiBzLmFkZF9ydW4gKzExICAgICAgICAgKSwgL1xcKzB4YiBpcyBub3QgYmV0d2VlbiAtMHhhIGFuZCBcXCsweGEvXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguYWRkX3NjYXR0ZXIoKVxuICAgICAgcy5hZGRfcnVuICdBJzsgICAgICBAZXEgKCDOqWltdF8yMDggPSAtPiBzLnBvaW50cyAgICksIFsgKCAnQScuY29kZVBvaW50QXQgMCApLCBdXG4gICAgICBzLmFkZF9ydW4gJ0EnLCAnWic7IEBlcSAoIM6paW10XzIwOSA9IC0+IHMucG9pbnRzICAgKSwgWyA2NSwgNjYsIDY3LCA2OCwgNjksIDcwLCA3MSwgNzIsIDczLCA3NCwgNzUsIDc2LCA3NywgNzgsIDc5LCA4MCwgODEsIDgyLCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA4OSwgOTAgXVxuICAgICAgcy5hZGRfcnVuICdhJywgJ3onOyBAZXEgKCDOqWltdF8yMTAgPSAtPiBzLnBvaW50cyAgICksIFsgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDcyLCA3MywgNzQsIDc1LCA3NiwgNzcsIDc4LCA3OSwgODAsIDgxLCA4MiwgODMsIDg0LCA4NSwgODYsIDg3LCA4OCwgODksIDkwLCA5NywgOTgsIDk5LCBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCwgMTAxLCAxMDIsIDEwMywgMTA0LCAxMDUsIDEwNiwgMTA3LCAxMDgsIDEwOSwgMTEwLCAxMTEsIDExMiwgMTEzLCAxMTQsIDExNSwgMTE2LCAxMTcsIDExOCwgMTE5LCAxMjAsIDEyMSwgMTIyLCBdXG4gICAgICBAZXEgKCDOqWltdF8yMTEgPSAtPiBzLm1pbiAgKSwgKCAnQScuY29kZVBvaW50QXQgMCApXG4gICAgICBAZXEgKCDOqWltdF8yMTIgPSAtPiBzLm1heCAgKSwgKCAneicuY29kZVBvaW50QXQgMCApXG4gICAgICBAZXEgKCDOqWltdF8yMTMgPSAtPiB7IG1pbjogcy5taW4sIG1heDogcy5tYXgsIH0gICksIHMubWlubWF4XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguYWRkX3NjYXR0ZXIoKVxuICAgICAgcy5hZGRfcnVuICdBYmMnXG4gICAgICBAZXEgKCDOqWltdF8yMTQgPSAtPiBzLnBvaW50cyAgICksIFsgKCAnQScuY29kZVBvaW50QXQgMCApLCBdXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguYWRkX3NjYXR0ZXIoKVxuICAgICAgcyA9IGguYWRkX3NjYXR0ZXIoKVxuICAgICAgcyA9IGguYWRkX3NjYXR0ZXIoKVxuICAgICAgcy5hZGRfY29kZXBvaW50c19vZiAnQWJjJ1xuICAgICAgQGVxICggzqlpbXRfMjE1ID0gLT4gcy5ydW5zLmxlbmd0aCApLCAzXG4gICAgICBAZXEgKCDOqWltdF8yMTYgPSAtPiBzLnBvaW50cyApLCBbICggJ0EnLmNvZGVQb2ludEF0IDAgKSwgKCAnYicuY29kZVBvaW50QXQgMCApLCAoICdjJy5jb2RlUG9pbnRBdCAwICksIF1cbiAgICAgIEBlcSAoIM6paW10XzIxNyA9IC0+IHMucnVucy5sZW5ndGggKSwgMlxuICAgICAgQGVxICggzqlpbXRfMjE4ID0gLT4gcy5ydW5zWyAwIF0gKSwgeyBsbzogKCAnQScuY29kZVBvaW50QXQgMCApLCBoaTogKCAnQScuY29kZVBvaW50QXQgMCApLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0xJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MycsIH1cbiAgICAgIEBlcSAoIM6paW10XzIxOSA9IC0+IHMucnVuc1sgMSBdICksIHsgbG86ICggJ2InLmNvZGVQb2ludEF0IDAgKSwgaGk6ICggJ2MnLmNvZGVQb2ludEF0IDAgKSwgcm93aWQ6ICd0OmhyZDpydW5zLFI9MicsIHNjYXR0ZXI6ICd0OmhyZDpzY2F0dGVycyxSPTMnLCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguYWRkX3NjYXR0ZXIoKVxuICAgICAgcy5hZGRfY29kZXBvaW50c19vZiAnYWVpb3XDpMO2w7wnLCAnYWVpb3XDpMO2w7wnLCAnQUVJT1XDhMOWw5wnLCAnQUVJT1XDhMOWw5wnXG4gICAgICBAZXEgKCDOqWltdF8yMjAgPSAtPiAoICggU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkICkgZm9yIGNpZCBpbiBzLnBvaW50cyApLmpvaW4gJycgKSwgJ0FFSU9VYWVpb3XDhMOWw5zDpMO2w7wnXG4gICAgICBAZXEgKCDOqWltdF8yMjEgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE2XG4gICAgICBzLm5vcm1hbGl6ZSgpXG4gICAgICBAZXEgKCDOqWltdF8yMjIgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE2XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRhdGFfcmV0cmlldmFsOiAtPlxuICAgIHsgSG9hcmQsXG4gICAgICBzdW1tYXJpemVfZGF0YSwgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2ludGVybWlzc2lvbidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHNfdm93ZWxzID0gaC5hZGRfc2NhdHRlciB7IHRhZ3M6IFsgJ3Zvd2VsJywgXSwgaXNfYXNjaWk6IHRydWUsIH1cbiAgICAgIHNfdW1sYXV0ID0gaC5hZGRfc2NhdHRlciB7IHRhZ3M6IFsgJ3VtbGF1dCcsIF0sIH1cbiAgICAgIHNfdm93ZWxzLmFkZF9jb2RlcG9pbnRzX29mICdhZWlvdcOkw7bDvCcsICdhZWlvdcOkw7bDvCcsICdBRUlPVcOEw5bDnCcsICdBRUlPVcOEw5bDnCdcbiAgICAgIHNfdW1sYXV0LmFkZF9jb2RlcG9pbnRzX29mICfDpMO2w7wnLCAnw6TDtsO8JywgJ8OEw5bDnCdcbiAgICAgIEBlcSAoIM6paW10XzIyMyA9IC0+IHNfdm93ZWxzLmNvbnRhaW5zICdBJyAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMjI0ID0gLT4gc192b3dlbHMuY29udGFpbnMgJ0EnLmNvZGVQb2ludEF0IDAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8yMjUgPSAtPiBzX3Zvd2Vscy5jb250YWlucyAnQicgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8yMjYgPSAtPiBzX3Zvd2Vscy5jb250YWlucyAnQicuY29kZVBvaW50QXQgMCAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8yMjcgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgJ0EnICAgICAgICksIHsgaXNfYXNjaWk6IFsgdHJ1ZSwgXSwgdGFnczogWyAndm93ZWwnLCBdLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMjggPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgJ8OkJyAgICAgICApLCB7IGlzX2FzY2lpOiBbIHRydWUsIF0sIHRhZ3M6IFsgJ3VtbGF1dCcsICd2b3dlbCcsIF0sIH1cbiAgICAgIEBlcSAoIM6paW10XzIyOSA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICAnQicgICAgICAgKSwgbnVsbFxuICAgICAgQGVxICggzqlpbXRfMjMwID0gLT4gaC5zdW1tYXJpemVfZGF0YV9mb3JfcG9pbnQgICd5JyAgICAgICApLCBudWxsXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIFZ1X2hvYXJkIGV4dGVuZHMgSG9hcmRcbiAgICAgICAgc3VtbWFyaXplX2RhdGFfaXNfYXNjaWk6IHN1bW1hcml6ZV9kYXRhLmFzX2Jvb2xlYW5fYW5kXG4gICAgICBoID0gbmV3IFZ1X2hvYXJkKClcbiAgICAgIHNfYXNjaWkgICA9IGguYWRkX3NjYXR0ZXIgeyBpc19hc2NpaTogdHJ1ZSwgfVxuICAgICAgc192b3dlbHMgID0gaC5hZGRfc2NhdHRlciB7IHRhZ3M6IFsgJ3Zvd2VsJywgXSwgfVxuICAgICAgc191bWxhdXQgID0gaC5hZGRfc2NhdHRlciB7IHRhZ3M6IFsgJ3VtbGF1dCcsIF0sIH1cbiAgICAgIHNfYXNjaWkuYWRkX3J1biAnYScsICd6J1xuICAgICAgc19hc2NpaS5hZGRfcnVuICdBJywgJ1onXG4gICAgICBzX3Zvd2Vscy5hZGRfY29kZXBvaW50c19vZiAnYWVpb3XDpMO2w7wnLCAnYWVpb3XDpMO2w7wnLCAnQUVJT1XDhMOWw5wnLCAnQUVJT1XDhMOWw5wnXG4gICAgICBzX3VtbGF1dC5hZGRfY29kZXBvaW50c19vZiAnw6TDtsO8JywgJ8Okw7bDvCcsICfDhMOWw5wnXG4gICAgICBAZXEgKCDOqWltdF8yMzEgPSAtPiBzX2FzY2lpLmNvbnRhaW5zICAgICAgJ0EnICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMjMyID0gLT4gc19hc2NpaS5jb250YWlucyAgICAgICdRJyAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzIzMyA9IC0+IHNfYXNjaWkuY29udGFpbnMgICAgICAnZicgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8yMzQgPSAtPiBzX3Zvd2Vscy5jb250YWlucyAgICAgJ0EnICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMjM1ID0gLT4gc192b3dlbHMuY29udGFpbnMgICAgICdBJy5jb2RlUG9pbnRBdCAwICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzIzNiA9IC0+IHNfdm93ZWxzLmNvbnRhaW5zICAgICAnQicgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMjM3ID0gLT4gc192b3dlbHMuY29udGFpbnMgICAgICdCJy5jb2RlUG9pbnRBdCAwICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8yMzggPSAtPiBoLmdldF9kYXRhX2Zvcl9wb2ludCAgICAgICAgJ0EnICAgICAgICAgICAgICAgKSwgWyB7IGlzX2FzY2lpOiB0cnVlIH0sIHsgdGFnczogWyAndm93ZWwnIF0gfSBdXG4gICAgICBAZXEgKCDOqWltdF8yMzkgPSAtPiBoLmdldF9kYXRhX2Zvcl9wb2ludCAgICAgICAgJ0EnLmNvZGVQb2ludEF0IDAgKSwgWyB7IGlzX2FzY2lpOiB0cnVlIH0sIHsgdGFnczogWyAndm93ZWwnIF0gfSBdXG4gICAgICBAZXEgKCDOqWltdF8yNDAgPSAtPiBoLmdldF9kYXRhX2Zvcl9wb2ludCAgICAgICAgJ1EnICAgICAgICAgICAgICAgKSwgWyB7IGlzX2FzY2lpOiB0cnVlIH0sIF1cbiAgICAgIEBlcSAoIM6paW10XzI0MSA9IC0+IGguZ2V0X2RhdGFfZm9yX3BvaW50ICAgICAgICAnZicgICAgICAgICAgICAgICApLCBbIHsgaXNfYXNjaWk6IHRydWUgfSwgXVxuICAgICAgQGVxICggzqlpbXRfMjQyID0gLT4gaC5nZXRfZGF0YV9mb3JfcG9pbnQgICAgICAgICdCJyAgICAgICAgICAgICAgICksIFsgeyBpc19hc2NpaTogdHJ1ZSB9LCBdXG4gICAgICBAZXEgKCDOqWltdF8yNDMgPSAtPiBoLmdldF9kYXRhX2Zvcl9wb2ludCAgICAgICAgJ0InLmNvZGVQb2ludEF0IDAgKSwgWyB7IGlzX2FzY2lpOiB0cnVlIH0sIF1cbiAgICAgIEBlcSAoIM6paW10XzI0NCA9IC0+IGguZ2V0X2RhdGFfZm9yX3BvaW50ICAgICAgICAnw6QnICAgICAgICAgICAgICAgKSwgWyB7IHRhZ3M6IFsgJ3Zvd2VsJywgXSwgfSwgeyB0YWdzOiBbICd1bWxhdXQnLCBdLCB9LCBdXG4gICAgICBAZXEgKCDOqWltdF8yNDUgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgJ0EnICAgICAgICAgICAgICAgKSwgeyBpc19hc2NpaTogdHJ1ZSwgdGFnczogWyAndm93ZWwnIF0sIH1cbiAgICAgIEBlcSAoIM6paW10XzI0NiA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICAnQScuY29kZVBvaW50QXQgMCApLCB7IGlzX2FzY2lpOiB0cnVlLCB0YWdzOiBbICd2b3dlbCcgXSwgfVxuICAgICAgQGVxICggzqlpbXRfMjQ3ID0gLT4gaC5zdW1tYXJpemVfZGF0YV9mb3JfcG9pbnQgICdRJyAgICAgICAgICAgICAgICksIHsgaXNfYXNjaWk6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6paW10XzI0OCA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICAnZicgICAgICAgICAgICAgICApLCB7IGlzX2FzY2lpOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWltdF8yNDkgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgJ0InICAgICAgICAgICAgICAgKSwgeyBpc19hc2NpaTogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlpbXRfMjUwID0gLT4gaC5zdW1tYXJpemVfZGF0YV9mb3JfcG9pbnQgICdCJy5jb2RlUG9pbnRBdCAwICksIHsgaXNfYXNjaWk6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6paW10XzI1MSA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICAnw6QnICAgICAgICAgICAgICAgKSwgeyB0YWdzOiBbICd1bWxhdXQnLCAndm93ZWwnLCBdLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNfbm90X2FzY2lpID0gaC5hZGRfc2NhdHRlciB7IGlzX2FzY2lpOiBmYWxzZSwgfVxuICAgICAgc19ub3RfYXNjaWkuYWRkX3J1biAweDgwLCAweDEwZmZmZlxuICAgICAgQGVxICggzqlpbXRfMjUyID0gLT4gaC5zdW1tYXJpemVfZGF0YV9mb3JfcG9pbnQgICdCJyAgICAgICAgICAgICAgICksIHsgaXNfYXNjaWk6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6paW10XzI1MyA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICAnw6QnICAgICAgICAgICAgICAgKSwgeyBpc19hc2NpaTogZmFsc2UsIHRhZ3M6IFsgJ3VtbGF1dCcsICd2b3dlbCcsIF0sIH1cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8yNTQgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgJ8Okd2hhdCcgICAgICAgICksIC9ub3QgYSB2YWxpZCBwb2ludC9cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFsaWRhdGlvbjogLT5cbiAgICB7IFR5cGUsXG4gICAgICBUeXBlc3BhY2UsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfbmFub3R5cGVzX3YyKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIE15X3R5cGVzcGFjZSBleHRlbmRzIFR5cGVzcGFjZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgIEBhc3NpZ24geyB4LCB9XG4gICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEB0ZXh0OiAoIHggKSAtPlxuICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICByZXR1cm4gdHJ1ZSBpZiAoIHR5cGVvZiB4ICkgaXMgJ3N0cmluZydcbiAgICAgICAgO2ZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAcG9pbnQ6ICggeCApIC0+XG4gICAgICAgIEBhc3NpZ24geyB4LCB9XG4gICAgICAgIHJldHVybiB0cnVlIGlmICggQFQuaW50ZWdlci5pc2EgeCApXG4gICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBhbiBpbnRlZ2VyIGFuZCBub3QgYSB0ZXh0XCIgICAgICAgICAgdW5sZXNzICggQFQudGV4dC5pc2EgeCApXG4gICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIGEgdGV4dCBidXQgbm90IHdpdGggYSBzaW5nbGUgY29kZXBvaW50XCIgdW5sZXNzICggKCBBcnJheS5mcm9tIHggKS5sZW5ndGggaXMgMSApXG4gICAgICAgIDt0cnVlXG4gICAgICAgICMgcmV0dXJuIHRydWUgaWYgTnVtYmVyLmlzU2FmZUludGVnZXIgeFxuICAgICAgICAjIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyXCIsIHsgZnJhY3Rpb246IHggJSAxLCB9IGlmIE51bWJlci5pc0Zpbml0ZSB4XG4gICAgICAgICMgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBUID0gbmV3IE15X3R5cGVzcGFjZSgpXG4gICAgZGVidWcgJ86paW10XzI1NScsIFQuaW50ZWdlclxuICAgIGRlYnVnICfOqWltdF8yNTYnLCBULmludGVnZXIuaXNhXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWltdF8yNTcgPSAtPiBULmludGVnZXIuaXNhICAgICAgICAgICA1ICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6paW10XzI1OCA9IC0+IFQucG9pbnQuaXNhICAgICAgICAgICAgIDUgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlpbXRfMjU5ID0gLT4gVC5wb2ludC5pc2EgICAgICAgICAgICAgJ2EnICAgICAgICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paW10XzI2MCA9IC0+IFQuaW50ZWdlci5pc2EgICAgICAgICAgIDU1LjUgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paW10XzI2MSA9IC0+IFQucG9pbnQuaXNhICAgICAgICAgICAgIDU1LjUgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6paW10XzI2MiA9IC0+IFQucG9pbnQuaXNhICAgICAgICAgICAgICdhYmMnICAgICApLCBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlpbXRfMjYzID0gLT4gVC5pbnRlZ2VyLnZhbGlkYXRlICAgICAgNSAgICAgICAgICksIDVcbiAgICBAZXEgKCDOqWltdF8yNjQgPSAtPiBULnBvaW50LnZhbGlkYXRlICAgICAgICA1ICAgICAgICAgKSwgNVxuICAgIEBlcSAoIM6paW10XzI2NSA9IC0+IFQucG9pbnQudmFsaWRhdGUgICAgICAgICdhJyAgICAgICApLCAnYSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paW10XzI2NiA9IC0+IHRyeSBULmludGVnZXIudmFsaWRhdGUgIDU1LjUgIGNhdGNoIGUgdGhlbiByZXR1cm4gZS5tZXNzYWdlICksIFwiXCJcIihpbnRlZ2VyKSBub3QgYSB2YWxpZCBpbnRlZ2VyOiA1NS41IOKAkyA1NS41IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyXCJcIlwiXG4gICAgQGVxICggzqlpbXRfMjY3ID0gLT4gdHJ5IFQucG9pbnQudmFsaWRhdGUgICAgNTUuNSAgY2F0Y2ggZSB0aGVuIHJldHVybiBlLm1lc3NhZ2UgKSwgXCJcIlwiKHBvaW50KSBub3QgYSB2YWxpZCBwb2ludDogNTUuNSDigJMgNTUuNSBpcyBub3QgYW4gaW50ZWdlciBhbmQgbm90IGEgdGV4dFwiXCJcIlxuICAgIEBlcSAoIM6paW10XzI2OCA9IC0+IHRyeSBULnBvaW50LnZhbGlkYXRlICAgICdhYmMnIGNhdGNoIGUgdGhlbiByZXR1cm4gZS5tZXNzYWdlICksIFwiXCJcIihwb2ludCkgbm90IGEgdmFsaWQgcG9pbnQ6IGFiYyDigJMgJ2FiYycgaXMgYSB0ZXh0IGJ1dCBub3Qgd2l0aCBhIHNpbmdsZSBjb2RlcG9pbnRcIlwiXCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEB0aHJvd3MgKCDOqWltdF8yNjkgPSAtPiBULmludGVnZXIudmFsaWRhdGUgIDU1LjUgICAgICApLCAvbm90IGEgdmFsaWQgaW50ZWdlci9cbiAgICBAdGhyb3dzICggzqlpbXRfMjcwID0gLT4gVC5wb2ludC52YWxpZGF0ZSAgICA1NS41ICAgICAgKSwgL25vdCBhIHZhbGlkIHBvaW50L1xuICAgIEB0aHJvd3MgKCDOqWltdF8yNzEgPSAtPiBULnBvaW50LnZhbGlkYXRlICAgICdhYmMnICAgICApLCAvbm90IGEgdmFsaWQgcG9pbnQvXG4gICAgQHRocm93cyAoIM6paW10XzI3MiA9IC0+IFQucG9pbnQudmFsaWRhdGUgICAgJycgICAgICAgICksIC9ub3QgYSB2YWxpZCBwb2ludC9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBfZGJyaWNfaW50ZWdyYXRpb246IC0+XG4gICAgeyBIb2FyZCxcbiAgICAgIHN1bW1hcml6ZV9kYXRhLCAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvaW50ZXJtaXNzaW9uJ1xuICAgIHsgRGJyaWMsXG4gICAgICBhc19ib29sLFxuICAgICAgU1FMLFxuICAgICAgTElULFxuICAgICAgSUROLFxuICAgICAgVkVDLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIHByZWZpeCA9ICdwcmZ4J1xuICAgIGRlYnVnICfOqWltdF8yNzMnLCBIb2FyZFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBnZXRfZnVuY3Rpb25zID0gKCBkYiApIC0+XG4gICAgIyAgIFIgPSB7fVxuICAgICMgICBmb3IgeyBuYW1lLCBidWlsdGluLCB0eXBlLCB9IGZyb20gZGIud2FsayBTUUxcIlwiXCJzZWxlY3QgbmFtZSwgYnVpbHRpbiwgdHlwZSBmcm9tIHByYWdtYV9mdW5jdGlvbl9saXN0KCkgb3JkZXIgYnkgbmFtZTtcIlwiXCJcbiAgICAjICAgICBpc19idWlsdGluID0gYXNfYm9vbCBidWlsdGluXG4gICAgIyAgICAgUlsgbmFtZSBdID0geyBuYW1lLCBpc19idWlsdGluLCB0eXBlLCB9XG4gICAgIyAgIHJldHVybiBSXG4gICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgZ2V0X2Z1bmN0aW9uX25hbWVzID0gKCBkYiApIC0+IG5ldyBTZXQgKCBrZXkgZm9yIGtleSBvZiBnZXRfZnVuY3Rpb25zIGRiIClcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBAZXEgKCDOqWltdF8yNzQgPSAtPiB0eXBlX29mIEhvYXJkLmdldF91ZGZzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICMgQGVxICggzqlpbXRfMjc1ID0gLT4gdHlwZV9vZiBIb2FyZC5nZXRfYnVpbGRfc3RhdGVtZW50cyAgICAgICAgICAgICAgICAgICAgICAgICksICdmdW5jdGlvbidcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBAZXEgKCDOqWltdF8yNzYgPSAtPiB0eXBlX29mIEhvYXJkLmdldF91ZGZzICAgICAgICAgICAgICB7IHByZWZpeCwgfSAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAjIEBlcSAoIM6paW10XzI3NyA9IC0+IHR5cGVfb2YgSG9hcmQuZ2V0X2J1aWxkX3N0YXRlbWVudHMgIHsgcHJlZml4LCB9ICAgICAgICAgICApLCAnbGlzdCdcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBAZXEgKCDOqWltdF8yNzggPSAtPiAoIE9iamVjdC5rZXlzIEhvYXJkLmdldF91ZGZzICAgICAgICB7IHByZWZpeCwgfSApLmxlbmd0aCAgKSwgM1xuICAgICMgQGVxICggzqlpbXRfMjc5ID0gLT4gKCBIb2FyZC5nZXRfYnVpbGRfc3RhdGVtZW50cyAgICAgICAgeyBwcmVmaXgsIH0gKS5sZW5ndGggICksIDNcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyB7fVxuICAgICMgdWRmcyAgICAgICAgICAgICAgPSBIb2FyZC5nZXRfdWRmcyB7IHByZWZpeCwgfVxuICAgICMgYnVpbGRfc3RhdGVtZW50cyAgPSBIb2FyZC5nZXRfYnVpbGRfc3RhdGVtZW50cyB7IHByZWZpeCwgfVxuICAgICMgZGIgICAgICAgICAgICAgICAgPSBuZXcgRGJyaWMgJzptZW1vcnk6J1xuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGZvciBuYW1lLCBkZWZpbml0aW9uIG9mIHVkZnNcbiAgICAjICAgaW5mbyAnzqlpbXRfMjgwJywgXCJjcmVhdGUgVURGICN7ZGVmaW5pdGlvbi5uYW1lfVwiXG4gICAgIyAgIGRiLmNyZWF0ZV9mdW5jdGlvbiBkZWZpbml0aW9uXG4gICAgIyBkZWJ1ZyAnzqlpbXRfMjgxJywgIG5hbWUgZm9yIG5hbWUgZnJvbSBnZXRfZnVuY3Rpb25fbmFtZXMgZGIgd2hlbiBuYW1lLnN0YXJ0c1dpdGggXCIje3ByZWZpeH1fXCJcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBmb3Igc3RhdGVtZW50LCBpZHggaW4gYnVpbGRfc3RhdGVtZW50c1xuICAgICMgICBzdGF0ZW1lbnQgPSBkYi5wcmVwYXJlIHN0YXRlbWVudFxuICAgICMgICBpbmZvICfOqWltdF8yODInLCBzdGF0ZW1lbnQucnVuKClcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBpbnNlcnRfZGF0YSA9IGRiLnByZXBhcmUgU1FMXCJcIlwiaW5zZXJ0IGludG8gI3tJRE4gXCIje3ByZWZpeH1faG9hcmRfc2NhdHRlcnNcIn0gKCBkYXRhICkgdmFsdWVzICggJGRhdGEgKVwiXCJcIlxuICAgICMgaW5zZXJ0X2RhdGEucnVuIHsgZGF0YTogKCBKU09OLnN0cmluZ2lmeSB7IGxldHRlcjogJ0EnLCBhcmM6IHRydWUsIHpldGE6IGZhbHNlLCB9ICksIH1cbiAgICAjIGluc2VydF9kYXRhLnJ1biB7IGRhdGE6ICggSlNPTi5zdHJpbmdpZnkgeyB6ZXRhOiBmYWxzZSwgbGV0dGVyOiAnQScsIGFyYzogdHJ1ZSwgfSApLCB9XG4gICAgIyBpbnNlcnRfZGF0YS5ydW4geyBkYXRhOiAoIEpTT04uc3RyaW5naWZ5IHsgbGV0dGVyOiAnQicsIGFyYzogdHJ1ZSwgemV0YTogZmFsc2UsIH0gKSwgfVxuICAgICMgaW5zZXJ0X2RhdGEucnVuIHsgZGF0YTogKCBKU09OLnN0cmluZ2lmeSB7IGxldHRlcjogJ0MnLCBhcmM6IHRydWUsIHpldGE6IGZhbHNlLCB9ICksIH1cbiAgICAjIGVjaG8geyByb3cuLi4sIH0gZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJcIlwic2VsZWN0ICogZnJvbSAje0lETiBcIiN7cHJlZml4fV9ob2FyZF9zY2F0dGVyc1wifVwiXCJcIlxuICAgICMgZWNobyB7IHJvdy4uLiwgfSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcIlwiXCJzZWxlY3QgI3tJRE4gXCIje3ByZWZpeH1fbm9ybWFsaXplX2RhdGFcIn0oICRkYXRhICkgYXMgbmRhdGE7XCJcIlwiLCB7IGRhdGE6ICggSlNPTi5zdHJpbmdpZnkgeyBsZXR0ZXI6ICdBJywgYXJjOiB0cnVlLCB6ZXRhOiBmYWxzZSwgfSApLCB9XG4gICAgIyBlY2hvIHsgcm93Li4uLCB9IGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwiXCJcInNlbGVjdCAje0lETiBcIiN7cHJlZml4fV9ub3JtYWxpemVfZGF0YVwifSggJGRhdGEgKSBhcyBuZGF0YTtcIlwiXCIsIHsgZGF0YTogKCBKU09OLnN0cmluZ2lmeSB7IHpldGE6IGZhbHNlLCBsZXR0ZXI6ICdBJywgYXJjOiB0cnVlLCB9ICksIH1cbiAgICAjIGVjaG8geyByb3cuLi4sIH0gZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJcIlwic2VsZWN0ICN7SUROIFwiI3twcmVmaXh9X25vcm1hbGl6ZV9kYXRhXCJ9KCAkZGF0YSApIGFzIG5kYXRhO1wiXCJcIiwgeyBkYXRhOiAoIEpTT04uc3RyaW5naWZ5IHsgbGV0dGVyOiAnQicsIGFyYzogdHJ1ZSwgemV0YTogZmFsc2UsIH0gKSwgfVxuICAgICMgZWNobyB7IHJvdy4uLiwgfSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcIlwiXCJzZWxlY3QgI3tJRE4gXCIje3ByZWZpeH1fbm9ybWFsaXplX2RhdGFcIn0oICRkYXRhICkgYXMgbmRhdGE7XCJcIlwiLCB7IGRhdGE6ICggSlNPTi5zdHJpbmdpZnkgeyBsZXR0ZXI6ICdDJywgYXJjOiB0cnVlLCB6ZXRhOiBmYWxzZSwgfSApLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgb3ZlcmxhcHBpbmc6IHRlc3RzLm92ZXJsYXBwaW5nLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkYnJpY19pbnRlZ3JhdGlvbjogdGVzdHMuX2RicmljX2ludGVncmF0aW9uLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBiYXNpY19zY2F0dGVyczogdGVzdHMuYmFzaWNfc2NhdHRlcnMsIH1cbiAgO251bGxcblxuIl19
