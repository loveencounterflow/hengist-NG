(async function() {
  'use strict';
  var FS, GTNG, GUY, Hoard, PATH, Run, SFMODULES, Scatter, Test, alert, blue, bold, cid_of, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, summarize_data, tests, type_of, urge, warn, whisper, white;

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

  ({Hoard, Scatter, Run, summarize_data} = require('../../../apps/bricabrac-sfmodules/lib/intermission'));

  cid_of = function(text) {
    return text.codePointAt(0);
  };

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    basic_runs: function() {
      var d, h, Ωimt__10, Ωimt__11, Ωimt__12, Ωimt__13, Ωimt__14, Ωimt___4, Ωimt___5, Ωimt___6, Ωimt___7, Ωimt___8, Ωimt___9;
      h = new Hoard();
      d = new Run();
      this.eq((Ωimt___4 = function() {
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
      this.eq((Ωimt___5 = function() {
        return [{...d}, d.size];
      }), [
        {
          lo: 0,
          hi: 7
        },
        8
      ]);
      d = new Run(7);
      this.eq((Ωimt___6 = function() {
        return [{...d}, d.size];
      }), [
        {
          lo: 7,
          hi: 7
        },
        1
      ]);
      d = new Run(7, 7);
      this.eq((Ωimt___7 = function() {
        return [{...d}, d.size];
      }), [
        {
          lo: 7,
          hi: 7
        },
        1
      ]);
      d = new Run(7, 12);
      this.eq((Ωimt___8 = function() {
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
      this.eq((Ωimt___9 = function() {
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
      this.eq((Ωimt__10 = function() {
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
      this.eq((Ωimt__11 = function() {
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
      this.throws((Ωimt__12 = function() {
        return d.lo = 6;
      }), /cannot assign to read only property/i);
      d = new Run({
        lo: 7,
        hi: 21
      });
      this.throws((Ωimt__13 = function() {
        return d.hi = 22;
      }), /cannot assign to read only property/i);
      //.......................................................................................................
      this.eq((Ωimt__14 = function() {
        return (new Run(1, 1)).scatter;
      }), void 0);
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    basic_scatters: function() {
      (() => {
        var h, s, Ωimt__15, Ωimt__16, Ωimt__17, Ωimt__18, Ωimt__19, Ωimt__21, Ωimt__23, Ωimt__24, Ωimt__25, Ωimt__26;
        h = new Hoard();
        s = h.add_scatter({
          a: 1
        });
        this.eq((Ωimt__15 = function() {
          return {...s};
        }), {
          data: {
            a: 1
          },
          rowid: 't:hrd:scatters,R=1',
          runs: []
        });
        this.eq((Ωimt__16 = function() {
          return s.is_normalized;
        }), false);
        //.....................................................................................................
        s.add_run({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__17 = function() {
          return s.runs.length;
        }), 1);
        s.add_run(1);
        this.eq((Ωimt__18 = function() {
          return s.runs.length;
        }), 2);
        s.add_run({
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__19 = function() {
          return s.runs.length;
        }), 3);
        // s.add_run new Run { lo: 1, hi: 1, };  @eq ( Ωimt__20 = -> s.runs.length     ), 3
        //.....................................................................................................
        this.eq((Ωimt__21 = function() {
          return s.is_normalized;
        }), false);
        // @eq ( Ωimt__22 = -> s.is_sorted       ), false
        this.eq((Ωimt__23 = function() {
          return s.data;
        }), {
          a: 1
        });
        this.eq((Ωimt__24 = function() {
          return {...s.runs[0]};
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__25 = function() {
          return {...s.runs[1]};
        }), {
          lo: 1,
          hi: 1
        });
        this.eq((Ωimt__26 = function() {
          return {...s.runs[2]};
        }), {
          lo: 1,
          hi: 1
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt__27, Ωimt__28, Ωimt__29, Ωimt__30, Ωimt__31, Ωimt__32, Ωimt__33, Ωimt__34, Ωimt__35, Ωimt__36, Ωimt__37, Ωimt__38;
        h = new Hoard();
        s = h.add_scatter();
        this.eq((Ωimt__27 = function() {
          return s.is_normalized;
        }), false);
        s.add_run(103, 109);
        this.eq((Ωimt__28 = function() {
          return s.runs.length;
        }), 1);
        this.eq((Ωimt__29 = function() {
          return s.is_normalized;
        }), false);
        s.add_run(111, 115);
        this.eq((Ωimt__30 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt__31 = function() {
          return s.is_normalized;
        }), false);
        s.add_run(110);
        this.eq((Ωimt__32 = function() {
          return s.runs.length;
        }), 3);
        this.eq((Ωimt__33 = function() {
          return s.is_normalized;
        }), false);
        this.eq((Ωimt__34 = function() {
          return {
            min: s.min,
            max: s.max
          };
        }), {
          min: 103,
          max: 115
        });
        this.eq((Ωimt__35 = function() {
          return s.minmax;
        }), {
          min: 103,
          max: 115
        });
        //.....................................................................................................
        this.eq((Ωimt__36 = function() {
          return {...s.runs[0]};
        }), {
          lo: 103,
          hi: 109
        });
        this.eq((Ωimt__37 = function() {
          return {...s.runs[1]};
        }), {
          lo: 111,
          hi: 115
        });
        this.eq((Ωimt__38 = function() {
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
        var h, s, Ωimt__41, Ωimt__42, Ωimt__43, Ωimt__44, Ωimt__45;
        h = new Hoard();
        s = h.add_scatter();
        s.add_run('a', 'y');
        s.add_run('A', 'Y');
        debug('Ωimt__39', h);
        debug('Ωimt__40', h.scatters);
        this.eq((Ωimt__41 = function() {
          return s.contains('a');
        }), true);
        this.eq((Ωimt__42 = function() {
          return s.contains({
            lo: 'a'
          });
        }), true);
        this.eq((Ωimt__43 = function() {
          return s.contains({
            lo: 'a',
            hi: 'y'
          });
        }), true);
        this.eq((Ωimt__44 = function() {
          return s.contains({
            lo: 'a',
            hi: 'z'
          });
        }), true);
        this.eq((Ωimt__45 = function() {
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
        var h, r, Ωimt__46, Ωimt__47, Ωimt__48, Ωimt__49, Ωimt__50, Ωimt__51, Ωimt__52, Ωimt__53, Ωimt__54, Ωimt__55, Ωimt__56, Ωimt__57, Ωimt__58, Ωimt__59, Ωimt__60, Ωimt__61, Ωimt__62, Ωimt__63, Ωimt__64, Ωimt__65, Ωimt__66;
        h = new Hoard();
        r = new Run({
          lo: 25,
          hi: 30
        });
        this.eq((Ωimt__46 = function() {
          return r.contains(21);
        }), false);
        this.eq((Ωimt__47 = function() {
          return r.contains(22);
        }), false);
        this.eq((Ωimt__48 = function() {
          return r.contains(23);
        }), false);
        this.eq((Ωimt__49 = function() {
          return r.contains(24);
        }), false);
        this.eq((Ωimt__50 = function() {
          return r.contains(25);
        }), true);
        this.eq((Ωimt__51 = function() {
          return r.contains(26);
        }), true);
        this.eq((Ωimt__52 = function() {
          return r.contains(27);
        }), true);
        this.eq((Ωimt__53 = function() {
          return r.contains(28);
        }), true);
        this.eq((Ωimt__54 = function() {
          return r.contains(29);
        }), true);
        this.eq((Ωimt__55 = function() {
          return r.contains(30);
        }), true);
        this.eq((Ωimt__56 = function() {
          return r.contains(31);
        }), false);
        this.eq((Ωimt__57 = function() {
          return r.contains(41);
        }), false);
        this.eq((Ωimt__58 = function() {
          return r.contains([25]);
        }), true);
        this.eq((Ωimt__59 = function() {
          return r.contains([30]);
        }), true);
        this.eq((Ωimt__60 = function() {
          return r.contains([31]);
        }), false);
        this.eq((Ωimt__61 = function() {
          return r.contains([32]);
        }), false);
        this.eq((Ωimt__62 = function() {
          return r.contains([25, 26, 27, 28, 29, 30]);
        }), true);
        this.eq((Ωimt__63 = function() {
          return r.contains([25, 26, 27, 28, 29, 30, 31]);
        }), false);
        this.eq((Ωimt__64 = function() {
          return r.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30]);
          })());
        }), true);
        this.eq((Ωimt__65 = function() {
          return r.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31]);
          })());
        }), false);
        this.eq((Ωimt__66 = function() {
          return r.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31, 32]);
          })());
        }), false);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, s1, Ωimt_100, Ωimt_101, Ωimt_102, Ωimt_103, Ωimt_104, Ωimt_105, Ωimt_106, Ωimt_107, Ωimt_108, Ωimt_109, Ωimt_110, Ωimt_111, Ωimt_112, Ωimt_113, Ωimt_114, Ωimt_115, Ωimt_116, Ωimt_117, Ωimt_118, Ωimt_119, Ωimt_120, Ωimt_121, Ωimt_122, Ωimt_123, Ωimt_124, Ωimt_125, Ωimt_126, Ωimt_127, Ωimt_128, Ωimt_129, Ωimt_130, Ωimt_131, Ωimt_132, Ωimt_133, Ωimt_134, Ωimt_135, Ωimt_136, Ωimt_137, Ωimt_138, Ωimt_139, Ωimt_140, Ωimt_141, Ωimt_142, Ωimt__67, Ωimt__68, Ωimt__69, Ωimt__70, Ωimt__71, Ωimt__72, Ωimt__73, Ωimt__74, Ωimt__75, Ωimt__76, Ωimt__77, Ωimt__78, Ωimt__79, Ωimt__80, Ωimt__81, Ωimt__82, Ωimt__83, Ωimt__84, Ωimt__85, Ωimt__86, Ωimt__87, Ωimt__88, Ωimt__89, Ωimt__90, Ωimt__91, Ωimt__92, Ωimt__93, Ωimt__94, Ωimt__95, Ωimt__96, Ωimt__97, Ωimt__98, Ωimt__99;
        h = new Hoard();
        s = h.add_scatter();
        s.add_run(25, 30);
        s.add_run(32, 40);
        this.eq((Ωimt__67 = function() {
          return s.contains(21);
        }), false);
        this.eq((Ωimt__68 = function() {
          return s.contains(22);
        }), false);
        this.eq((Ωimt__69 = function() {
          return s.contains(23);
        }), false);
        this.eq((Ωimt__70 = function() {
          return s.contains(24);
        }), false);
        this.eq((Ωimt__71 = function() {
          return s.contains(25);
        }), true);
        this.eq((Ωimt__72 = function() {
          return s.contains(26);
        }), true);
        this.eq((Ωimt__73 = function() {
          return s.contains(27);
        }), true);
        this.eq((Ωimt__74 = function() {
          return s.contains(28);
        }), true);
        this.eq((Ωimt__75 = function() {
          return s.contains(29);
        }), true);
        this.eq((Ωimt__76 = function() {
          return s.contains(30);
        }), true);
        this.eq((Ωimt__77 = function() {
          return s.contains(31);
        }), false);
        this.eq((Ωimt__78 = function() {
          return s.contains(32);
        }), true);
        this.eq((Ωimt__79 = function() {
          return s.contains(33);
        }), true);
        this.eq((Ωimt__80 = function() {
          return s.contains(34);
        }), true);
        this.eq((Ωimt__81 = function() {
          return s.contains(35);
        }), true);
        this.eq((Ωimt__82 = function() {
          return s.contains(36);
        }), true);
        this.eq((Ωimt__83 = function() {
          return s.contains(37);
        }), true);
        this.eq((Ωimt__84 = function() {
          return s.contains(38);
        }), true);
        this.eq((Ωimt__85 = function() {
          return s.contains(39);
        }), true);
        this.eq((Ωimt__86 = function() {
          return s.contains(40);
        }), true);
        this.eq((Ωimt__87 = function() {
          return s.contains(41);
        }), false);
        this.eq((Ωimt__88 = function() {
          return s.contains(42);
        }), false);
        this.eq((Ωimt__89 = function() {
          return s.contains(43);
        }), false);
        this.eq((Ωimt__90 = function() {
          return s.contains([25, 26, 27, 28, 29, 30]);
        }), true);
        this.eq((Ωimt__91 = function() {
          return s.contains([25, 26, 27, 28, 29, 30, 31]);
        }), false);
        this.eq((Ωimt__92 = function() {
          return s.contains([30]);
        }), true);
        this.eq((Ωimt__93 = function() {
          return s.contains([31]);
        }), false);
        this.eq((Ωimt__94 = function() {
          return s.contains([32]);
        }), true);
        this.eq((Ωimt__95 = function() {
          return s.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30]);
          })());
        }), true);
        this.eq((Ωimt__96 = function() {
          return s.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31]);
          })());
        }), false);
        this.eq((Ωimt__97 = function() {
          return s.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31, 32]);
          })());
        }), false);
        this.eq((Ωimt__98 = function() {
          return s.contains(new Run(25));
        }), true);
        this.eq((Ωimt__99 = function() {
          return s.contains(new Run(25, 30));
        }), true);
        this.eq((Ωimt_100 = function() {
          return s.contains(new Run(25, 32));
        }), false);
        //.....................................................................................................
        this.eq((Ωimt_101 = function() {
          return h.contains(21);
        }), false);
        this.eq((Ωimt_102 = function() {
          return h.contains(22);
        }), false);
        this.eq((Ωimt_103 = function() {
          return h.contains(23);
        }), false);
        this.eq((Ωimt_104 = function() {
          return h.contains(24);
        }), false);
        this.eq((Ωimt_105 = function() {
          return h.contains(25);
        }), true);
        this.eq((Ωimt_106 = function() {
          return h.contains(26);
        }), true);
        this.eq((Ωimt_107 = function() {
          return h.contains(27);
        }), true);
        this.eq((Ωimt_108 = function() {
          return h.contains(28);
        }), true);
        this.eq((Ωimt_109 = function() {
          return h.contains(29);
        }), true);
        this.eq((Ωimt_110 = function() {
          return h.contains(30);
        }), true);
        this.eq((Ωimt_111 = function() {
          return h.contains(31);
        }), false);
        this.eq((Ωimt_112 = function() {
          return h.contains(32);
        }), true);
        this.eq((Ωimt_113 = function() {
          return h.contains(33);
        }), true);
        this.eq((Ωimt_114 = function() {
          return h.contains(34);
        }), true);
        this.eq((Ωimt_115 = function() {
          return h.contains(35);
        }), true);
        this.eq((Ωimt_116 = function() {
          return h.contains(36);
        }), true);
        this.eq((Ωimt_117 = function() {
          return h.contains(37);
        }), true);
        this.eq((Ωimt_118 = function() {
          return h.contains(38);
        }), true);
        this.eq((Ωimt_119 = function() {
          return h.contains(39);
        }), true);
        this.eq((Ωimt_120 = function() {
          return h.contains(40);
        }), true);
        this.eq((Ωimt_121 = function() {
          return h.contains(41);
        }), false);
        this.eq((Ωimt_122 = function() {
          return h.contains(42);
        }), false);
        this.eq((Ωimt_123 = function() {
          return h.contains(43);
        }), false);
        this.eq((Ωimt_124 = function() {
          return h.contains([25, 26, 27, 28, 29, 30]);
        }), true);
        this.eq((Ωimt_125 = function() {
          return h.contains([25, 26, 27, 28, 29, 30, 31]);
        }), false);
        this.eq((Ωimt_126 = function() {
          return h.contains([30]);
        }), true);
        this.eq((Ωimt_127 = function() {
          return h.contains([31]);
        }), false);
        this.eq((Ωimt_128 = function() {
          return h.contains([32]);
        }), true);
        this.eq((Ωimt_129 = function() {
          return h.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30]);
          })());
        }), true);
        this.eq((Ωimt_130 = function() {
          return h.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31]);
          })());
        }), false);
        this.eq((Ωimt_131 = function() {
          return h.contains((function*() {
            return (yield* [25, 26, 27, 28, 29, 30, 31, 32]);
          })());
        }), false);
        this.eq((Ωimt_132 = function() {
          return h.contains(new Run(25));
        }), true);
        this.eq((Ωimt_133 = function() {
          return h.contains(new Run(25, 30));
        }), true);
        this.eq((Ωimt_134 = function() {
          return h.contains(new Run(25, 32));
        }), false);
        //.....................................................................................................
        s1 = h.add_scatter();
        s1.add_run(26, 27);
        s1.add_run(37, 40);
        this.eq((Ωimt_135 = function() {
          return s1.is_normalized;
        }), false);
        this.eq((Ωimt_136 = function() {
          return s.contains(s1);
        }), true);
        this.eq((Ωimt_137 = function() {
          return s1.is_normalized;
        }), true);
        s1.add_run(25, 32);
        this.eq((Ωimt_138 = function() {
          return s.contains(s1);
        }), false);
        this.eq((Ωimt_139 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(31);
        this.eq((Ωimt_140 = function() {
          return s.is_normalized;
        }), false);
        this.eq((Ωimt_141 = function() {
          return s.contains(s1);
        }), true);
        this.eq((Ωimt_142 = function() {
          return s.is_normalized;
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    iteration: function() {
      (() => {
        var h, Ωimt_143, Ωimt_144, Ωimt_145;
        h = new Hoard();
        this.eq((Ωimt_143 = function() {
          return [...(new Run(1))];
        }), [1]);
        this.eq((Ωimt_144 = function() {
          return [...(new Run(297))];
        }), [297]);
        this.eq((Ωimt_145 = function() {
          return [...(new Run(297, 308))];
        }), [297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_146, Ωimt_147, Ωimt_148, Ωimt_149, Ωimt_150, Ωimt_151, Ωimt_152, Ωimt_153, Ωimt_154, Ωimt_155, Ωimt_156, Ωimt_157, Ωimt_158, Ωimt_159, Ωimt_160;
        h = new Hoard();
        s = h.add_scatter();
        this.eq((Ωimt_146 = function() {
          return [...s];
        }), []);
        s.add_run(1);
        this.eq((Ωimt_147 = function() {
          return [...s];
        }), [1]);
        this.eq((Ωimt_148 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(297);
        this.eq((Ωimt_149 = function() {
          return [...s];
        }), [1, 297]);
        this.eq((Ωimt_150 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(299, 302);
        this.eq((Ωimt_151 = function() {
          return [...s];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_152 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(298);
        this.eq((Ωimt_153 = function() {
          return [...s];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_154 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(300, 301);
        this.eq((Ωimt_155 = function() {
          return [...s];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_156 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_157 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_158 = function() {
          return {...s.runs[0]};
        }), {
          lo: 1,
          hi: 1,
          rowid: 't:hrd:runs,R=9',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_159 = function() {
          return {...s.runs[1]};
        }), {
          lo: 297,
          hi: 302,
          rowid: 't:hrd:runs,R=10',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_160 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_161, Ωimt_162, Ωimt_163, Ωimt_164, Ωimt_165, Ωimt_166, Ωimt_167, Ωimt_168, Ωimt_169, Ωimt_170, Ωimt_171, Ωimt_172, Ωimt_173, Ωimt_174, Ωimt_175;
        h = new Hoard();
        s = h.add_scatter();
        this.eq((Ωimt_161 = function() {
          return [...s.walk()];
        }), []);
        s.add_run(1);
        this.eq((Ωimt_162 = function() {
          return [...s.walk()];
        }), [1]);
        this.eq((Ωimt_163 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(297);
        this.eq((Ωimt_164 = function() {
          return [...s.walk()];
        }), [1, 297]);
        this.eq((Ωimt_165 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(299, 302);
        this.eq((Ωimt_166 = function() {
          return [...s.walk()];
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_167 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(298);
        this.eq((Ωimt_168 = function() {
          return [...s.walk()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_169 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(300, 301);
        this.eq((Ωimt_170 = function() {
          return [...s.walk()];
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_171 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_172 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_173 = function() {
          return {...s.runs[0]};
        }), {
          lo: 1,
          hi: 1,
          rowid: 't:hrd:runs,R=9',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_174 = function() {
          return {...s.runs[1]};
        }), {
          lo: 297,
          hi: 302,
          rowid: 't:hrd:runs,R=10',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_175 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_176, Ωimt_177, Ωimt_178, Ωimt_179, Ωimt_180, Ωimt_181, Ωimt_182, Ωimt_183, Ωimt_184, Ωimt_185, Ωimt_186, Ωimt_187, Ωimt_188, Ωimt_189, Ωimt_190;
        h = new Hoard();
        s = h.add_scatter();
        this.eq((Ωimt_176 = function() {
          return s.points;
        }), []);
        s.add_run(1);
        this.eq((Ωimt_177 = function() {
          return s.points;
        }), [1]);
        this.eq((Ωimt_178 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(297);
        this.eq((Ωimt_179 = function() {
          return s.points;
        }), [1, 297]);
        this.eq((Ωimt_180 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(299, 302);
        this.eq((Ωimt_181 = function() {
          return s.points;
        }), [1, 297, 299, 300, 301, 302]);
        this.eq((Ωimt_182 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(298);
        this.eq((Ωimt_183 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_184 = function() {
          return s.is_normalized;
        }), true);
        s.add_run(300, 301);
        this.eq((Ωimt_185 = function() {
          return s.points;
        }), [1, 297, 298, 299, 300, 301, 302]);
        this.eq((Ωimt_186 = function() {
          return s.is_normalized;
        }), true);
        this.eq((Ωimt_187 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_188 = function() {
          return {...s.runs[0]};
        }), {
          lo: 1,
          hi: 1,
          rowid: 't:hrd:runs,R=9',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_189 = function() {
          return {...s.runs[1]};
        }), {
          lo: 297,
          hi: 302,
          rowid: 't:hrd:runs,R=10',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωimt_190 = function() {
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
        var h, s, Ωimt_191, Ωimt_193;
        h = new Hoard();
        s = h.add_scatter();
        this.throws((Ωimt_191 = function() {
          return s.add_run(5.8);
        }), /not a valid point/);
        // @throws ( Ωimt_192 = -> s.add_run -3          ), /-0x3 is not between \+0x0 and \+0x10ffff/
        this.throws((Ωimt_193 = function() {
          return s.add_run(0, -3);
        }), /lo must be less than or equal to hi/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_194, Ωimt_195, Ωimt_196, Ωimt_197;
        h = new Hoard({
          first: -10,
          last: +10
        });
        s = h.add_scatter();
        s.add_run(-10);
        this.eq((Ωimt_194 = function() {
          return s.points;
        }), [-10]);
        s.add_run(+10);
        this.eq((Ωimt_195 = function() {
          return s.points;
        }), [-10, +10]);
        this.throws((Ωimt_196 = function() {
          return s.add_run(-11);
        }), /expected run to be entirely between -0xa and \+0xa, got \{ lo: -0xb, -0xb, \}/);
        this.throws((Ωimt_197 = function() {
          return s.add_run(+11);
        }), /expected run to be entirely between -0xa and \+0xa, got \{ lo: \+0xb, \+0xb, \}/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_198, Ωimt_199, Ωimt_200, Ωimt_201, Ωimt_202, Ωimt_203;
        h = new Hoard();
        s = h.add_scatter();
        s.add_run(cid_of('A'));
        this.eq((Ωimt_198 = function() {
          return s.points;
        }), ['A'.codePointAt(0)]);
        s.add_run(cid_of('A'), cid_of('Z'));
        this.eq((Ωimt_199 = function() {
          return s.points;
        }), [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]);
        s.add_run(cid_of('a'), cid_of('z'));
        this.eq((Ωimt_200 = function() {
          return s.points;
        }), [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
        this.eq((Ωimt_201 = function() {
          return s.min;
        }), 'A'.codePointAt(0));
        this.eq((Ωimt_202 = function() {
          return s.max;
        }), 'z'.codePointAt(0));
        this.eq((Ωimt_203 = function() {
          return {
            min: s.min,
            max: s.max
          };
        }), s.minmax);
        return null;
      })();
      (() => {        //.......................................................................................................
        var h, s, Ωimt_204, Ωimt_205, Ωimt_206, Ωimt_207, Ωimt_208;
        h = new Hoard();
        s = h.add_scatter();
        s = h.add_scatter();
        s = h.add_scatter();
        s.add_codepoints_of('Abc');
        this.eq((Ωimt_204 = function() {
          return s.runs.length;
        }), 3);
        this.eq((Ωimt_205 = function() {
          return s.points;
        }), ['A'.codePointAt(0), 'b'.codePointAt(0), 'c'.codePointAt(0)]);
        this.eq((Ωimt_206 = function() {
          return s.runs.length;
        }), 2);
        this.eq((Ωimt_207 = function() {
          return {...s.runs[0]};
        }), {
          lo: 'A'.codePointAt(0),
          hi: 'A'.codePointAt(0),
          rowid: 't:hrd:runs,R=1',
          scatter: 't:hrd:scatters,R=3'
        });
        this.eq((Ωimt_208 = function() {
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
        var h, s, Ωimt_209, Ωimt_210, Ωimt_211;
        h = new Hoard();
        s = h.add_scatter();
        s.add_codepoints_of('aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ');
        this.eq((Ωimt_209 = function() {
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
        this.eq((Ωimt_210 = function() {
          return s.runs.length;
        }), 16);
        s.normalize();
        this.eq((Ωimt_211 = function() {
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
        var h, s_umlaut, s_vowels, Ωimt_212, Ωimt_213, Ωimt_214, Ωimt_215, Ωimt_216, Ωimt_217;
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
        this.eq((Ωimt_212 = function() {
          return s_vowels.contains(cid_of('A'));
        }), true);
        this.eq((Ωimt_213 = function() {
          return s_vowels.contains(cid_of('B'));
        }), false);
        this.eq((Ωimt_214 = function() {
          return h.summarize_data_for_point(cid_of('A'));
        }), {
          is_ascii: [true],
          tags: ['vowel']
        });
        this.eq((Ωimt_215 = function() {
          return h.summarize_data_for_point(cid_of('ä'));
        }), {
          is_ascii: [true],
          tags: ['umlaut', 'vowel']
        });
        this.eq((Ωimt_216 = function() {
          return h.summarize_data_for_point(cid_of('B'));
        }), null);
        this.eq((Ωimt_217 = function() {
          return h.summarize_data_for_point(cid_of('y'));
        }), null);
        return null;
      })();
      (() => {        //.......................................................................................................
        var Vu_hoard, h, s_ascii, s_not_ascii, s_umlaut, s_vowels, Ωimt_218, Ωimt_219, Ωimt_220, Ωimt_221, Ωimt_222, Ωimt_223, Ωimt_224, Ωimt_225, Ωimt_226, Ωimt_227, Ωimt_228, Ωimt_229, Ωimt_230, Ωimt_231, Ωimt_232, Ωimt_233, Ωimt_234, Ωimt_235;
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
        this.eq((Ωimt_218 = function() {
          return s_ascii.contains(cid_of('A'));
        }), true);
        this.eq((Ωimt_219 = function() {
          return s_ascii.contains(cid_of('Q'));
        }), true);
        this.eq((Ωimt_220 = function() {
          return s_ascii.contains(cid_of('f'));
        }), true);
        this.eq((Ωimt_221 = function() {
          return s_vowels.contains(cid_of('A'));
        }), true);
        this.eq((Ωimt_222 = function() {
          return s_vowels.contains(cid_of('B'));
        }), false);
        this.eq((Ωimt_223 = function() {
          return h.get_data_for_point(cid_of('A'));
        }), [
          {
            is_ascii: true
          },
          {
            tags: ['vowel']
          }
        ]);
        this.eq((Ωimt_224 = function() {
          return h.get_data_for_point(cid_of('Q'));
        }), [
          {
            is_ascii: true
          }
        ]);
        this.eq((Ωimt_225 = function() {
          return h.get_data_for_point(cid_of('f'));
        }), [
          {
            is_ascii: true
          }
        ]);
        this.eq((Ωimt_226 = function() {
          return h.get_data_for_point(cid_of('B'));
        }), [
          {
            is_ascii: true
          }
        ]);
        this.eq((Ωimt_227 = function() {
          return h.get_data_for_point(cid_of('ä'));
        }), [
          {
            tags: ['vowel']
          },
          {
            tags: ['umlaut']
          }
        ]);
        this.eq((Ωimt_228 = function() {
          return h.summarize_data_for_point(cid_of('A'));
        }), {
          is_ascii: true,
          tags: ['vowel']
        });
        this.eq((Ωimt_229 = function() {
          return h.summarize_data_for_point(cid_of('Q'));
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_230 = function() {
          return h.summarize_data_for_point(cid_of('f'));
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_231 = function() {
          return h.summarize_data_for_point(cid_of('B'));
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_232 = function() {
          return h.summarize_data_for_point(cid_of('ä'));
        }), {
          tags: ['umlaut', 'vowel']
        });
        //.....................................................................................................
        s_not_ascii = h.add_scatter({
          is_ascii: false
        });
        s_not_ascii.add_run(0x80, 0x10ffff);
        this.eq((Ωimt_233 = function() {
          return h.summarize_data_for_point(cid_of('B'));
        }), {
          is_ascii: true
        });
        this.eq((Ωimt_234 = function() {
          return h.summarize_data_for_point(cid_of('ä'));
        }), {
          is_ascii: false,
          tags: ['umlaut', 'vowel']
        });
        this.throws((Ωimt_235 = function() {
          return h.summarize_data_for_point('äwhat');
        }), /not a valid point/);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    validation: function() {
      var My_typespace, T, Type, Typespace, Ωimt_238, Ωimt_239, Ωimt_240, Ωimt_241, Ωimt_242, Ωimt_243, Ωimt_244, Ωimt_245, Ωimt_246, Ωimt_247, Ωimt_248, Ωimt_249, Ωimt_250, Ωimt_251, Ωimt_252, Ωimt_253;
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
      debug('Ωimt_236', T.integer);
      debug('Ωimt_237', T.integer.isa);
      //.......................................................................................................
      this.eq((Ωimt_238 = function() {
        return T.integer.isa(5);
      }), true);
      this.eq((Ωimt_239 = function() {
        return T.point.isa(5);
      }), true);
      this.eq((Ωimt_240 = function() {
        return T.point.isa('a');
      }), true);
      //.......................................................................................................
      this.eq((Ωimt_241 = function() {
        return T.integer.isa(55.5);
      }), false);
      this.eq((Ωimt_242 = function() {
        return T.point.isa(55.5);
      }), false);
      this.eq((Ωimt_243 = function() {
        return T.point.isa('abc');
      }), false);
      //.......................................................................................................
      this.eq((Ωimt_244 = function() {
        return T.integer.validate(5);
      }), 5);
      this.eq((Ωimt_245 = function() {
        return T.point.validate(5);
      }), 5);
      this.eq((Ωimt_246 = function() {
        return T.point.validate('a');
      }), 'a');
      //.......................................................................................................
      this.eq((Ωimt_247 = function() {
        var e;
        try {
          return T.integer.validate(55.5);
        } catch (error) {
          e = error;
          return e.message;
        }
      }), `(integer) not a valid integer: 55.5 – 55.5 is a non-integer number`);
      this.eq((Ωimt_248 = function() {
        var e;
        try {
          return T.point.validate(55.5);
        } catch (error) {
          e = error;
          return e.message;
        }
      }), `(point) not a valid point: 55.5 – 55.5 is not an integer and not a text`);
      this.eq((Ωimt_249 = function() {
        var e;
        try {
          return T.point.validate('abc');
        } catch (error) {
          e = error;
          return e.message;
        }
      }), `(point) not a valid point: abc – 'abc' is a text but not with a single codepoint`);
      //.......................................................................................................
      this.throws((Ωimt_250 = function() {
        return T.integer.validate(55.5);
      }), /not a valid integer/);
      this.throws((Ωimt_251 = function() {
        return T.point.validate(55.5);
      }), /not a valid point/);
      this.throws((Ωimt_252 = function() {
        return T.point.validate('abc');
      }), /not a valid point/);
      this.throws((Ωimt_253 = function() {
        return T.point.validate('');
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
      // ( new Test guytest_cfg ).test { containment: tests.containment, }
      //.........................................................................................................
      if (do_coverage) {
        if (ca.unused_names.length > 0) {
          ref = ca.unused_names;
          for (i = 0, len = ref.length; i < len; i++) {
            name = ref[i];
            warn('Ωimt_254', "not covered:", reverse(bold(` ${name} `)));
          }
        }
      }
      //.........................................................................................................
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtaW50ZXJtaXNzaW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLGNBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0Isd0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxD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PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtaW50ZXJtaXNzaW9uJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbkZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbnsgdHlwZV9vZiwgICAgICAgICAgICAgIH0gPSAoIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvdW5zdGFibGUtcnByLXR5cGVfb2YtYnJpY3MnICkucmVxdWlyZV90eXBlX29mKClcbnsgSG9hcmQsXG4gIFNjYXR0ZXIsXG4gIFJ1bixcbiAgc3VtbWFyaXplX2RhdGEsICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2ludGVybWlzc2lvbidcbmNpZF9vZiAgICAgICAgICAgICAgICAgICAgPSAoIHRleHQgKSAtPiB0ZXh0LmNvZGVQb2ludEF0IDBcblxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBiYXNpY19ydW5zOiAtPlxuICAgIGggPSBuZXcgSG9hcmQoKVxuICAgIGQgPSBuZXcgUnVuKCk7ICAgICAgICAgICAgICAgICAgQGVxICggzqlpbXRfX180ID0gLT4gWyB7IGQuLi4sIH0sIGQuc2l6ZSwgXSApLCBbIHsgbG86IDAsIGhpOiAwLCB9LCAgMSwgXVxuICAgIGQgPSBuZXcgUnVuIHsgaGk6IDcsIH07ICAgICAgICAgQGVxICggzqlpbXRfX181ID0gLT4gWyB7IGQuLi4sIH0sIGQuc2l6ZSwgXSApLCBbIHsgbG86IDAsIGhpOiA3LCB9LCAgOCwgXVxuICAgIGQgPSBuZXcgUnVuIDc7ICAgICAgICAgICAgICAgICAgQGVxICggzqlpbXRfX182ID0gLT4gWyB7IGQuLi4sIH0sIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiA3LCB9LCAgMSwgXVxuICAgIGQgPSBuZXcgUnVuIDcsIDc7ICAgICAgICAgICAgICAgQGVxICggzqlpbXRfX183ID0gLT4gWyB7IGQuLi4sIH0sIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiA3LCB9LCAgMSwgXVxuICAgIGQgPSBuZXcgUnVuIDcsIDEyOyAgICAgICAgICAgICAgQGVxICggzqlpbXRfX184ID0gLT4gWyB7IGQuLi4sIH0sIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiAxMiwgfSwgNiwgXVxuICAgIGQgPSBuZXcgUnVuIHsgbG86IDcsIH07ICAgICAgICAgQGVxICggzqlpbXRfX185ID0gLT4gWyB7IGQuLi4sIH0sIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiA3LCB9LCAgMSwgXVxuICAgIGQgPSBuZXcgUnVuIHsgbG86IDcsIGhpOiA3LCB9OyAgQGVxICggzqlpbXRfXzEwID0gLT4gWyB7IGQuLi4sIH0sIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiA3LCB9LCAgMSwgXVxuICAgIGQgPSBuZXcgUnVuIHsgbG86IDcsIGhpOiAyMSwgfTsgQGVxICggzqlpbXRfXzExID0gLT4gWyB7IGQuLi4sIH0sIGQuc2l6ZSwgXSApLCBbIHsgbG86IDcsIGhpOiAyMSwgfSwgMTUsIF1cbiAgICBkID0gbmV3IFJ1biB7IGxvOiA3LCBoaTogMjEsIH07IEB0aHJvd3MgKCDOqWltdF9fMTIgPSAtPiBkLmxvID0gNiAgICksIC9jYW5ub3QgYXNzaWduIHRvIHJlYWQgb25seSBwcm9wZXJ0eS9pXG4gICAgZCA9IG5ldyBSdW4geyBsbzogNywgaGk6IDIxLCB9OyBAdGhyb3dzICggzqlpbXRfXzEzID0gLT4gZC5oaSA9IDIyICApLCAvY2Fubm90IGFzc2lnbiB0byByZWFkIG9ubHkgcHJvcGVydHkvaVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlpbXRfXzE0ID0gLT4gKCBuZXcgUnVuIDEsIDEgKS5zY2F0dGVyICksIHVuZGVmaW5lZFxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBiYXNpY19zY2F0dGVyczogLT5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5hZGRfc2NhdHRlciB7IGE6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18xNSA9IC0+IHsgcy4uLiwgfSApLCB7IGRhdGE6IHsgYTogMSB9LCByb3dpZDogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScsIHJ1bnM6IFtdIH1cbiAgICAgIEBlcSAoIM6paW10X18xNiA9IC0+IHMuaXNfbm9ybWFsaXplZCAgICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHMuYWRkX3J1biB7IGxvOiAxLCBoaTogMSwgfTsgICAgICAgICAgQGVxICggzqlpbXRfXzE3ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgKSwgMVxuICAgICAgcy5hZGRfcnVuIDE7ICAgICAgICAgICAgICAgICAgICAgICAgICBAZXEgKCDOqWltdF9fMTggPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAyXG4gICAgICBzLmFkZF9ydW4geyBsbzogMSwgaGk6IDEsIH07ICAgICAgICAgIEBlcSAoIM6paW10X18xOSA9IC0+IHMucnVucy5sZW5ndGggICAgICksIDNcbiAgICAgICMgcy5hZGRfcnVuIG5ldyBSdW4geyBsbzogMSwgaGk6IDEsIH07ICBAZXEgKCDOqWltdF9fMjAgPSAtPiBzLnJ1bnMubGVuZ3RoICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paW10X18yMSA9IC0+IHMuaXNfbm9ybWFsaXplZCAgICksIGZhbHNlXG4gICAgICAjIEBlcSAoIM6paW10X18yMiA9IC0+IHMuaXNfc29ydGVkICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fMjMgPSAtPiBzLmRhdGEgICAgICAgICAgICApLCB7IGE6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18yNCA9IC0+IHsgcy5ydW5zWyAwIF0uLi4sIH0gKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18yNSA9IC0+IHsgcy5ydW5zWyAxIF0uLi4sIH0gKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIEBlcSAoIM6paW10X18yNiA9IC0+IHsgcy5ydW5zWyAyIF0uLi4sIH0gKSwgeyBsbzogMSwgaGk6IDEsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5hZGRfc2NhdHRlcigpXG4gICAgICBAZXEgKCDOqWltdF9fMjcgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIHMuYWRkX3J1biAxMDMsIDEwOTsgICBAZXEgKCDOqWltdF9fMjggPSAtPiBzLnJ1bnMubGVuZ3RoICksIDE7IEBlcSAoIM6paW10X18yOSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCBmYWxzZVxuICAgICAgcy5hZGRfcnVuIDExMSwgMTE1OyAgIEBlcSAoIM6paW10X18zMCA9IC0+IHMucnVucy5sZW5ndGggKSwgMjsgQGVxICggzqlpbXRfXzMxID0gLT4gcy5pc19ub3JtYWxpemVkICksIGZhbHNlXG4gICAgICBzLmFkZF9ydW4gMTEwOyAgICAgICAgQGVxICggzqlpbXRfXzMyID0gLT4gcy5ydW5zLmxlbmd0aCApLCAzOyBAZXEgKCDOqWltdF9fMzMgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X18zNCA9IC0+IHsgbWluOiBzLm1pbiwgbWF4OiBzLm1heCwgfSApLCB7IG1pbjogMTAzLCBtYXg6IDExNSwgfVxuICAgICAgQGVxICggzqlpbXRfXzM1ID0gLT4gcy5taW5tYXggICAgICAgICAgICAgICAgICAgICksIHsgbWluOiAxMDMsIG1heDogMTE1LCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paW10X18zNiA9IC0+IHsgcy5ydW5zWyAwIF0uLi4sIH0gKSwgeyBsbzogMTAzLCBoaTogMTA5LCB9XG4gICAgICBAZXEgKCDOqWltdF9fMzcgPSAtPiB7IHMucnVuc1sgMSBdLi4uLCB9ICksIHsgbG86IDExMSwgaGk6IDExNSwgfVxuICAgICAgQGVxICggzqlpbXRfXzM4ID0gLT4geyBzLnJ1bnNbIDIgXS4uLiwgfSApLCB7IGxvOiAxMTAsIGhpOiAxMTAsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgX292ZXJsYXBwaW5nOiAtPlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIHMuYWRkX3J1biAnYScsICd5J1xuICAgICAgcy5hZGRfcnVuICdBJywgJ1knXG4gICAgICBkZWJ1ZyAnzqlpbXRfXzM5JywgaFxuICAgICAgZGVidWcgJ86paW10X180MCcsIGguc2NhdHRlcnNcbiAgICAgIEBlcSAoIM6paW10X180MSA9IC0+IHMuY29udGFpbnMgJ2EnICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNDIgPSAtPiBzLmNvbnRhaW5zIHsgbG86ICdhJywgfSAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzQzID0gLT4gcy5jb250YWlucyB7IGxvOiAnYScsIGhpOiAneScsIH0gICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X180NCA9IC0+IHMuY29udGFpbnMgeyBsbzogJ2EnLCBoaTogJ3onLCB9ICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNDUgPSAtPiBzLmNvbnRhaW5zICcwJyAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29udGFpbm1lbnQ6IC0+XG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgciA9IG5ldyBSdW4geyBsbzogMjUsIGhpOiAzMCwgfVxuICAgICAgQGVxICggzqlpbXRfXzQ2ID0gLT4gci5jb250YWlucyAyMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzQ3ID0gLT4gci5jb250YWlucyAyMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzQ4ID0gLT4gci5jb250YWlucyAyMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzQ5ID0gLT4gci5jb250YWlucyAyNCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzUwID0gLT4gci5jb250YWlucyAyNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNTEgPSAtPiByLmNvbnRhaW5zIDI2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X181MiA9IC0+IHIuY29udGFpbnMgMjcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzUzID0gLT4gci5jb250YWlucyAyOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNTQgPSAtPiByLmNvbnRhaW5zIDI5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X181NSA9IC0+IHIuY29udGFpbnMgMzAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzU2ID0gLT4gci5jb250YWlucyAzMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzU3ID0gLT4gci5jb250YWlucyA0MSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzU4ID0gLT4gci5jb250YWlucyBbIDI1LCBdICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNTkgPSAtPiByLmNvbnRhaW5zIFsgMzAsIF0gICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X182MCA9IC0+IHIuY29udGFpbnMgWyAzMSwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X182MSA9IC0+IHIuY29udGFpbnMgWyAzMiwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X182MiA9IC0+IHIuY29udGFpbnMgWyAyNSAuLiAzMCBdICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzYzID0gLT4gci5jb250YWlucyBbIDI1IC4uIDMxIF0gICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzY0ID0gLT4gci5jb250YWlucyAoIC0+IHlpZWxkIGZyb20gWyAyNSAuLiAzMCBdICkoKSApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNjUgPSAtPiByLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMxIF0gKSgpICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fNjYgPSAtPiByLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMyIF0gKSgpICksIGZhbHNlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguYWRkX3NjYXR0ZXIoKVxuICAgICAgcy5hZGRfcnVuIDI1LCAzMFxuICAgICAgcy5hZGRfcnVuIDMyLCA0MFxuICAgICAgQGVxICggzqlpbXRfXzY3ID0gLT4gcy5jb250YWlucyAyMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzY4ID0gLT4gcy5jb250YWlucyAyMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzY5ID0gLT4gcy5jb250YWlucyAyMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzcwID0gLT4gcy5jb250YWlucyAyNCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzcxID0gLT4gcy5jb250YWlucyAyNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNzIgPSAtPiBzLmNvbnRhaW5zIDI2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X183MyA9IC0+IHMuY29udGFpbnMgMjcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzc0ID0gLT4gcy5jb250YWlucyAyOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNzUgPSAtPiBzLmNvbnRhaW5zIDI5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X183NiA9IC0+IHMuY29udGFpbnMgMzAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzc3ID0gLT4gcy5jb250YWlucyAzMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzc4ID0gLT4gcy5jb250YWlucyAzMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fNzkgPSAtPiBzLmNvbnRhaW5zIDMzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X184MCA9IC0+IHMuY29udGFpbnMgMzQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzgxID0gLT4gcy5jb250YWlucyAzNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODIgPSAtPiBzLmNvbnRhaW5zIDM2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X184MyA9IC0+IHMuY29udGFpbnMgMzcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzg0ID0gLT4gcy5jb250YWlucyAzOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fODUgPSAtPiBzLmNvbnRhaW5zIDM5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X184NiA9IC0+IHMuY29udGFpbnMgNDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzg3ID0gLT4gcy5jb250YWlucyA0MSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzg4ID0gLT4gcy5jb250YWlucyA0MiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzg5ID0gLT4gcy5jb250YWlucyA0MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfXzkwID0gLT4gcy5jb250YWlucyBbIDI1IC4uIDMwIF0gICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTEgPSAtPiBzLmNvbnRhaW5zIFsgMjUgLi4gMzEgXSAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fOTIgPSAtPiBzLmNvbnRhaW5zIFsgMzAsIF0gICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10X185MyA9IC0+IHMuY29udGFpbnMgWyAzMSwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10X185NCA9IC0+IHMuY29udGFpbnMgWyAzMiwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfXzk1ID0gLT4gcy5jb250YWlucyAoIC0+IHlpZWxkIGZyb20gWyAyNSAuLiAzMCBdICkoKSApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTYgPSAtPiBzLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMxIF0gKSgpICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fOTcgPSAtPiBzLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMyIF0gKSgpICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF9fOTggPSAtPiBzLmNvbnRhaW5zICggbmV3IFJ1biAyNSAgICAgICAgICAgICAgKSApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF9fOTkgPSAtPiBzLmNvbnRhaW5zICggbmV3IFJ1biAyNSwgMzAgICAgICAgICAgKSApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMDAgPSAtPiBzLmNvbnRhaW5zICggbmV3IFJ1biAyNSwgMzIgICAgICAgICAgKSApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWltdF8xMDEgPSAtPiBoLmNvbnRhaW5zIDIxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMDIgPSAtPiBoLmNvbnRhaW5zIDIyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMDMgPSAtPiBoLmNvbnRhaW5zIDIzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMDQgPSAtPiBoLmNvbnRhaW5zIDI0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMDUgPSAtPiBoLmNvbnRhaW5zIDI1ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEwNiA9IC0+IGguY29udGFpbnMgMjYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTA3ID0gLT4gaC5jb250YWlucyAyNyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMDggPSAtPiBoLmNvbnRhaW5zIDI4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEwOSA9IC0+IGguY29udGFpbnMgMjkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTEwID0gLT4gaC5jb250YWlucyAzMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMTEgPSAtPiBoLmNvbnRhaW5zIDMxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMTIgPSAtPiBoLmNvbnRhaW5zIDMyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzExMyA9IC0+IGguY29udGFpbnMgMzMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTE0ID0gLT4gaC5jb250YWlucyAzNCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMTUgPSAtPiBoLmNvbnRhaW5zIDM1ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzExNiA9IC0+IGguY29udGFpbnMgMzYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTE3ID0gLT4gaC5jb250YWlucyAzNyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMTggPSAtPiBoLmNvbnRhaW5zIDM4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzExOSA9IC0+IGguY29udGFpbnMgMzkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTIwID0gLT4gaC5jb250YWlucyA0MCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMjEgPSAtPiBoLmNvbnRhaW5zIDQxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMjIgPSAtPiBoLmNvbnRhaW5zIDQyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMjMgPSAtPiBoLmNvbnRhaW5zIDQzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8xMjQgPSAtPiBoLmNvbnRhaW5zIFsgMjUgLi4gMzAgXSAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEyNSA9IC0+IGguY29udGFpbnMgWyAyNSAuLiAzMSBdICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzEyNiA9IC0+IGguY29udGFpbnMgWyAzMCwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTI3ID0gLT4gaC5jb250YWlucyBbIDMxLCBdICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTI4ID0gLT4gaC5jb250YWlucyBbIDMyLCBdICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8xMjkgPSAtPiBoLmNvbnRhaW5zICggLT4geWllbGQgZnJvbSBbIDI1IC4uIDMwIF0gKSgpICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEzMCA9IC0+IGguY29udGFpbnMgKCAtPiB5aWVsZCBmcm9tIFsgMjUgLi4gMzEgXSApKCkgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzEzMSA9IC0+IGguY29udGFpbnMgKCAtPiB5aWVsZCBmcm9tIFsgMjUgLi4gMzIgXSApKCkgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzEzMiA9IC0+IGguY29udGFpbnMgKCBuZXcgUnVuIDI1ICAgICAgICAgICAgICApICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEzMyA9IC0+IGguY29udGFpbnMgKCBuZXcgUnVuIDI1LCAzMCAgICAgICAgICApICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzEzNCA9IC0+IGguY29udGFpbnMgKCBuZXcgUnVuIDI1LCAzMiAgICAgICAgICApICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHMxID0gaC5hZGRfc2NhdHRlcigpXG4gICAgICBzMS5hZGRfcnVuIDI2LCAyN1xuICAgICAgczEuYWRkX3J1biAzNywgNDBcbiAgICAgIEBlcSAoIM6paW10XzEzNSA9IC0+IHMxLmlzX25vcm1hbGl6ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzEzNiA9IC0+IHMuY29udGFpbnMgczEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTM3ID0gLT4gczEuaXNfbm9ybWFsaXplZCAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBzMS5hZGRfcnVuIDI1LCAzMlxuICAgICAgQGVxICggzqlpbXRfMTM4ID0gLT4gcy5jb250YWlucyBzMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlpbXRfMTM5ID0gLT4gcy5pc19ub3JtYWxpemVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4gMzFcbiAgICAgIEBlcSAoIM6paW10XzE0MCA9IC0+IHMuaXNfbm9ybWFsaXplZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paW10XzE0MSA9IC0+IHMuY29udGFpbnMgczEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTQyID0gLT4gcy5pc19ub3JtYWxpemVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGl0ZXJhdGlvbjogLT5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBAZXEgKCDOqWltdF8xNDMgPSAtPiBbICggbmV3IFJ1biAxICAgICAgICAgKS4uLiwgXSAgICAgICApLCBbIDEsIF1cbiAgICAgIEBlcSAoIM6paW10XzE0NCA9IC0+IFsgKCBuZXcgUnVuIDI5NyAgICAgICApLi4uLCBdICAgICAgICksIFsgMjk3LCBdXG4gICAgICBAZXEgKCDOqWltdF8xNDUgPSAtPiBbICggbmV3IFJ1biAyOTcsIDMwOCAgKS4uLiwgXSAgICAgICApLCBbIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIsIDMwMywgMzA0LCAzMDUsIDMwNiwgMzA3LCAzMDggXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIEBlcSAoIM6paW10XzE0NiA9IC0+IFsgcy4uLiwgXSAgICAgICApLCBbXVxuICAgICAgcy5hZGRfcnVuIDE7ICAgICAgICBAZXEgKCDOqWltdF8xNDcgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xNDggPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5NzsgICAgICBAZXEgKCDOqWltdF8xNDkgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xNTAgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5OSwgMzAyOyBAZXEgKCDOqWltdF8xNTEgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNTIgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5ODsgICAgICBAZXEgKCDOqWltdF8xNTMgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNTQgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDMwMCwgMzAxOyBAZXEgKCDOqWltdF8xNTUgPSAtPiBbIHMuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNTYgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTU3ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgICApLCAyXG4gICAgICBAZXEgKCDOqWltdF8xNTggPSAtPiB7IHMucnVuc1sgMCBdLi4uLCB9ICksIHsgbG86IDEsIGhpOiAxLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj05Jywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlpbXRfMTU5ID0gLT4geyBzLnJ1bnNbIDEgXS4uLiwgfSApLCB7IGxvOiAyOTcsIGhpOiAzMDIsIHJvd2lkOiAndDpocmQ6cnVucyxSPTEwJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlpbXRfMTYwID0gLT4gcy5wb2ludHMgICAgICAgICAgICApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIgXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIEBlcSAoIM6paW10XzE2MSA9IC0+IFsgcy53YWxrKCkuLi4sIF0gICAgICAgKSwgW11cbiAgICAgIHMuYWRkX3J1biAxOyAgICAgICAgQGVxICggzqlpbXRfMTYyID0gLT4gWyBzLndhbGsoKS4uLiwgXSApLCBbIDEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07IEBlcSAoIM6paW10XzE2MyA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4gMjk3OyAgICAgIEBlcSAoIM6paW10XzE2NCA9IC0+IFsgcy53YWxrKCkuLi4sIF0gKSwgWyAxLCAyOTcsICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xNjUgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5OSwgMzAyOyBAZXEgKCDOqWltdF8xNjYgPSAtPiBbIHMud2FsaygpLi4uLCBdICksIFsgMSwgMjk3LCAgICAgIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTY3ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAyOTg7ICAgICAgQGVxICggzqlpbXRfMTY4ID0gLT4gWyBzLndhbGsoKS4uLiwgXSApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzE2OSA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4gMzAwLCAzMDE7IEBlcSAoIM6paW10XzE3MCA9IC0+IFsgcy53YWxrKCkuLi4sIF0gKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xNzEgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTcyID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgICApLCAyXG4gICAgICBAZXEgKCDOqWltdF8xNzMgPSAtPiB7IHMucnVuc1sgMCBdLi4uLCB9ICksIHsgbG86IDEsIGhpOiAxLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj05Jywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlpbXRfMTc0ID0gLT4geyBzLnJ1bnNbIDEgXS4uLiwgfSApLCB7IGxvOiAyOTcsIGhpOiAzMDIsIHJvd2lkOiAndDpocmQ6cnVucyxSPTEwJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlpbXRfMTc1ID0gLT4gcy5wb2ludHMgICAgICAgICAgICApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIgXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIEBlcSAoIM6paW10XzE3NiA9IC0+IHMucG9pbnRzICksIFtdXG4gICAgICBzLmFkZF9ydW4gMTsgICAgICAgIEBlcSAoIM6paW10XzE3NyA9IC0+IHMucG9pbnRzICksIFsgMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTsgQGVxICggzqlpbXRfMTc4ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAyOTc7ICAgICAgQGVxICggzqlpbXRfMTc5ID0gLT4gcy5wb2ludHMgKSwgWyAxLCAyOTcsICAgICAgICAgICAgICAgICAgICAgICAgICBdOyBAZXEgKCDOqWltdF8xODAgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgcy5hZGRfcnVuIDI5OSwgMzAyOyBAZXEgKCDOqWltdF8xODEgPSAtPiBzLnBvaW50cyApLCBbIDEsIDI5NywgICAgICAyOTksIDMwMCwgMzAxLCAzMDIsIF07IEBlcSAoIM6paW10XzE4MiA9IC0+IHMuaXNfbm9ybWFsaXplZCApLCB0cnVlXG4gICAgICBzLmFkZF9ydW4gMjk4OyAgICAgIEBlcSAoIM6paW10XzE4MyA9IC0+IHMucG9pbnRzICksIFsgMSwgMjk3LCAyOTgsIDI5OSwgMzAwLCAzMDEsIDMwMiwgXTsgQGVxICggzqlpbXRfMTg0ID0gLT4gcy5pc19ub3JtYWxpemVkICksIHRydWVcbiAgICAgIHMuYWRkX3J1biAzMDAsIDMwMTsgQGVxICggzqlpbXRfMTg1ID0gLT4gcy5wb2ludHMgKSwgWyAxLCAyOTcsIDI5OCwgMjk5LCAzMDAsIDMwMSwgMzAyLCBdOyBAZXEgKCDOqWltdF8xODYgPSAtPiBzLmlzX25vcm1hbGl6ZWQgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbXRfMTg3ID0gLT4gcy5ydW5zLmxlbmd0aCAgICAgICApLCAyXG4gICAgICBAZXEgKCDOqWltdF8xODggPSAtPiB7IHMucnVuc1sgMCBdLi4uLCB9ICksIHsgbG86IDEsIGhpOiAxLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj05Jywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlpbXRfMTg5ID0gLT4geyBzLnJ1bnNbIDEgXS4uLiwgfSApLCB7IGxvOiAyOTcsIGhpOiAzMDIsIHJvd2lkOiAndDpocmQ6cnVucyxSPTEwJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlpbXRfMTkwID0gLT4gcy5wb2ludHMgICAgICAgICAgICApLCBbIDEsIDI5NywgMjk4LCAyOTksIDMwMCwgMzAxLCAzMDIgXVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1c2luZ19zdHJpbmdzX2Zvcl9ib3VuZHM6IC0+XG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgcyA9IGguYWRkX3NjYXR0ZXIoKVxuICAgICAgQHRocm93cyAoIM6paW10XzE5MSA9IC0+IHMuYWRkX3J1biA1LjggICAgICAgICApLCAvbm90IGEgdmFsaWQgcG9pbnQvXG4gICAgICAjIEB0aHJvd3MgKCDOqWltdF8xOTIgPSAtPiBzLmFkZF9ydW4gLTMgICAgICAgICAgKSwgLy0weDMgaXMgbm90IGJldHdlZW4gXFwrMHgwIGFuZCBcXCsweDEwZmZmZi9cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8xOTMgPSAtPiBzLmFkZF9ydW4gMCwgLTMgICAgICAgKSwgL2xvIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGhpL1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkIHsgZmlyc3Q6IC0xMCwgbGFzdDogKzEwLCB9XG4gICAgICBzID0gaC5hZGRfc2NhdHRlcigpXG4gICAgICBzLmFkZF9ydW4gLTEwOyBAZXEgKCDOqWltdF8xOTQgPSAtPiBzLnBvaW50cyAgICksIFsgLTEwLCBdXG4gICAgICBzLmFkZF9ydW4gKzEwOyBAZXEgKCDOqWltdF8xOTUgPSAtPiBzLnBvaW50cyAgICksIFsgLTEwLCArMTAsIF1cbiAgICAgIEB0aHJvd3MgKCDOqWltdF8xOTYgPSAtPiBzLmFkZF9ydW4gLTExICAgICAgICAgKSwgL2V4cGVjdGVkIHJ1biB0byBiZSBlbnRpcmVseSBiZXR3ZWVuIC0weGEgYW5kIFxcKzB4YSwgZ290IFxceyBsbzogLTB4YiwgLTB4YiwgXFx9L1xuICAgICAgQHRocm93cyAoIM6paW10XzE5NyA9IC0+IHMuYWRkX3J1biArMTEgICAgICAgICApLCAvZXhwZWN0ZWQgcnVuIHRvIGJlIGVudGlyZWx5IGJldHdlZW4gLTB4YSBhbmQgXFwrMHhhLCBnb3QgXFx7IGxvOiBcXCsweGIsIFxcKzB4YiwgXFx9L1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIHMuYWRkX3J1biAoIGNpZF9vZiAnQScgKTsgICAgICAgICAgICAgICAgIEBlcSAoIM6paW10XzE5OCA9IC0+IHMucG9pbnRzICAgKSwgWyAoICdBJy5jb2RlUG9pbnRBdCAwICksIF1cbiAgICAgIHMuYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgKCBjaWRfb2YgJ1onICk7IEBlcSAoIM6paW10XzE5OSA9IC0+IHMucG9pbnRzICAgKSwgWyA2NSwgNjYsIDY3LCA2OCwgNjksIDcwLCA3MSwgNzIsIDczLCA3NCwgNzUsIDc2LCA3NywgNzgsIDc5LCA4MCwgODEsIDgyLCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA4OSwgOTAgXVxuICAgICAgcy5hZGRfcnVuICggY2lkX29mICdhJyApLCAoIGNpZF9vZiAneicgKTsgQGVxICggzqlpbXRfMjAwID0gLT4gcy5wb2ludHMgICApLCBbIDY1LCA2NiwgNjcsIDY4LCA2OSwgNzAsIDcxLCA3MiwgNzMsIDc0LCA3NSwgNzYsIDc3LCA3OCwgNzksIDgwLCA4MSwgODIsIDgzLCA4NCwgODUsIDg2LCA4NywgODgsIDg5LCA5MCwgOTcsIDk4LCA5OSwgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAsIDEwMSwgMTAyLCAxMDMsIDEwNCwgMTA1LCAxMDYsIDEwNywgMTA4LCAxMDksIDExMCwgMTExLCAxMTIsIDExMywgMTE0LCAxMTUsIDExNiwgMTE3LCAxMTgsIDExOSwgMTIwLCAxMjEsIDEyMiwgXVxuICAgICAgQGVxICggzqlpbXRfMjAxID0gLT4gcy5taW4gICksICggJ0EnLmNvZGVQb2ludEF0IDAgKVxuICAgICAgQGVxICggzqlpbXRfMjAyID0gLT4gcy5tYXggICksICggJ3onLmNvZGVQb2ludEF0IDAgKVxuICAgICAgQGVxICggzqlpbXRfMjAzID0gLT4geyBtaW46IHMubWluLCBtYXg6IHMubWF4LCB9ICApLCBzLm1pbm1heFxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gbmV3IEhvYXJkKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIHMgPSBoLmFkZF9zY2F0dGVyKClcbiAgICAgIHMuYWRkX2NvZGVwb2ludHNfb2YgJ0FiYydcbiAgICAgIEBlcSAoIM6paW10XzIwNCA9IC0+IHMucnVucy5sZW5ndGggKSwgM1xuICAgICAgQGVxICggzqlpbXRfMjA1ID0gLT4gcy5wb2ludHMgKSwgWyAoICdBJy5jb2RlUG9pbnRBdCAwICksICggJ2InLmNvZGVQb2ludEF0IDAgKSwgKCAnYycuY29kZVBvaW50QXQgMCApLCBdXG4gICAgICBAZXEgKCDOqWltdF8yMDYgPSAtPiBzLnJ1bnMubGVuZ3RoICksIDJcbiAgICAgIEBlcSAoIM6paW10XzIwNyA9IC0+IHsgcy5ydW5zWyAwIF0uLi4sIH0gKSwgeyBsbzogKCAnQScuY29kZVBvaW50QXQgMCApLCBoaTogKCAnQScuY29kZVBvaW50QXQgMCApLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0xJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MycsIH1cbiAgICAgIEBlcSAoIM6paW10XzIwOCA9IC0+IHsgcy5ydW5zWyAxIF0uLi4sIH0gKSwgeyBsbzogKCAnYicuY29kZVBvaW50QXQgMCApLCBoaTogKCAnYycuY29kZVBvaW50QXQgMCApLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0yJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MycsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IG5ldyBIb2FyZCgpXG4gICAgICBzID0gaC5hZGRfc2NhdHRlcigpXG4gICAgICBzLmFkZF9jb2RlcG9pbnRzX29mICdhZWlvdcOkw7bDvCcsICdhZWlvdcOkw7bDvCcsICdBRUlPVcOEw5bDnCcsICdBRUlPVcOEw5bDnCdcbiAgICAgIEBlcSAoIM6paW10XzIwOSA9IC0+ICggKCBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWQgKSBmb3IgY2lkIGluIHMucG9pbnRzICkuam9pbiAnJyApLCAnQUVJT1VhZWlvdcOEw5bDnMOkw7bDvCdcbiAgICAgIEBlcSAoIM6paW10XzIxMCA9IC0+IHMucnVucy5sZW5ndGggKSwgMTZcbiAgICAgIHMubm9ybWFsaXplKClcbiAgICAgIEBlcSAoIM6paW10XzIxMSA9IC0+IHMucnVucy5sZW5ndGggKSwgMTZcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGF0YV9yZXRyaWV2YWw6IC0+XG4gICAgZG8gPT5cbiAgICAgIGggPSBuZXcgSG9hcmQoKVxuICAgICAgc192b3dlbHMgPSBoLmFkZF9zY2F0dGVyIHsgdGFnczogWyAndm93ZWwnLCBdLCBpc19hc2NpaTogdHJ1ZSwgfVxuICAgICAgc191bWxhdXQgPSBoLmFkZF9zY2F0dGVyIHsgdGFnczogWyAndW1sYXV0JywgXSwgfVxuICAgICAgc192b3dlbHMuYWRkX2NvZGVwb2ludHNfb2YgJ2FlaW91w6TDtsO8JywgJ2FlaW91w6TDtsO8JywgJ0FFSU9Vw4TDlsOcJywgJ0FFSU9Vw4TDlsOcJ1xuICAgICAgc191bWxhdXQuYWRkX2NvZGVwb2ludHNfb2YgJ8Okw7bDvCcsICfDpMO2w7wnLCAnw4TDlsOcJ1xuICAgICAgQGVxICggzqlpbXRfMjEyID0gLT4gc192b3dlbHMuY29udGFpbnMgICAgICAgICAgICggY2lkX29mICdBJyApICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWltdF8yMTMgPSAtPiBzX3Zvd2Vscy5jb250YWlucyAgICAgICAgICAgKCBjaWRfb2YgJ0InICkgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8yMTQgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgKCBjaWRfb2YgJ0EnICkgICksIHsgaXNfYXNjaWk6IFsgdHJ1ZSwgXSwgdGFnczogWyAndm93ZWwnLCBdLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMTUgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgKCBjaWRfb2YgJ8OkJyApICApLCB7IGlzX2FzY2lpOiBbIHRydWUsIF0sIHRhZ3M6IFsgJ3VtbGF1dCcsICd2b3dlbCcsIF0sIH1cbiAgICAgIEBlcSAoIM6paW10XzIxNiA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICAoIGNpZF9vZiAnQicgKSAgKSwgbnVsbFxuICAgICAgQGVxICggzqlpbXRfMjE3ID0gLT4gaC5zdW1tYXJpemVfZGF0YV9mb3JfcG9pbnQgICggY2lkX29mICd5JyApICApLCBudWxsXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIFZ1X2hvYXJkIGV4dGVuZHMgSG9hcmRcbiAgICAgICAgc3VtbWFyaXplX2RhdGFfaXNfYXNjaWk6IHN1bW1hcml6ZV9kYXRhLmFzX2Jvb2xlYW5fYW5kXG4gICAgICBoID0gbmV3IFZ1X2hvYXJkKClcbiAgICAgIHNfYXNjaWkgICA9IGguYWRkX3NjYXR0ZXIgeyBpc19hc2NpaTogdHJ1ZSwgfVxuICAgICAgc192b3dlbHMgID0gaC5hZGRfc2NhdHRlciB7IHRhZ3M6IFsgJ3Zvd2VsJywgXSwgfVxuICAgICAgc191bWxhdXQgID0gaC5hZGRfc2NhdHRlciB7IHRhZ3M6IFsgJ3VtbGF1dCcsIF0sIH1cbiAgICAgIHNfYXNjaWkuYWRkX3J1biAoIGNpZF9vZiAnYScgKSwgKCBjaWRfb2YgJ3onIClcbiAgICAgIHNfYXNjaWkuYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgKCBjaWRfb2YgJ1onIClcbiAgICAgIHNfdm93ZWxzLmFkZF9jb2RlcG9pbnRzX29mICdhZWlvdcOkw7bDvCcsICdhZWlvdcOkw7bDvCcsICdBRUlPVcOEw5bDnCcsICdBRUlPVcOEw5bDnCdcbiAgICAgIHNfdW1sYXV0LmFkZF9jb2RlcG9pbnRzX29mICfDpMO2w7wnLCAnw6TDtsO8JywgJ8OEw5bDnCdcbiAgICAgIEBlcSAoIM6paW10XzIxOCA9IC0+IHNfYXNjaWkuY29udGFpbnMgICAgICAgICAgICggY2lkX29mICdBJyApICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzIxOSA9IC0+IHNfYXNjaWkuY29udGFpbnMgICAgICAgICAgICggY2lkX29mICdRJyApICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzIyMCA9IC0+IHNfYXNjaWkuY29udGFpbnMgICAgICAgICAgICggY2lkX29mICdmJyApICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzIyMSA9IC0+IHNfdm93ZWxzLmNvbnRhaW5zICAgICAgICAgICggY2lkX29mICdBJyApICksIHRydWVcbiAgICAgIEBlcSAoIM6paW10XzIyMiA9IC0+IHNfdm93ZWxzLmNvbnRhaW5zICAgICAgICAgICggY2lkX29mICdCJyApICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWltdF8yMjMgPSAtPiBoLmdldF9kYXRhX2Zvcl9wb2ludCAgICAgICAoIGNpZF9vZiAnQScgKSApLCBbIHsgaXNfYXNjaWk6IHRydWUgfSwgeyB0YWdzOiBbICd2b3dlbCcgXSB9IF1cbiAgICAgIEBlcSAoIM6paW10XzIyNCA9IC0+IGguZ2V0X2RhdGFfZm9yX3BvaW50ICAgICAgICggY2lkX29mICdRJyApICksIFsgeyBpc19hc2NpaTogdHJ1ZSB9LCBdXG4gICAgICBAZXEgKCDOqWltdF8yMjUgPSAtPiBoLmdldF9kYXRhX2Zvcl9wb2ludCAgICAgICAoIGNpZF9vZiAnZicgKSApLCBbIHsgaXNfYXNjaWk6IHRydWUgfSwgXVxuICAgICAgQGVxICggzqlpbXRfMjI2ID0gLT4gaC5nZXRfZGF0YV9mb3JfcG9pbnQgICAgICAgKCBjaWRfb2YgJ0InICkgKSwgWyB7IGlzX2FzY2lpOiB0cnVlIH0sIF1cbiAgICAgIEBlcSAoIM6paW10XzIyNyA9IC0+IGguZ2V0X2RhdGFfZm9yX3BvaW50ICAgICAgICggY2lkX29mICfDpCcgKSApLCBbIHsgdGFnczogWyAndm93ZWwnLCBdLCB9LCB7IHRhZ3M6IFsgJ3VtbGF1dCcsIF0sIH0sIF1cbiAgICAgIEBlcSAoIM6paW10XzIyOCA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICggY2lkX29mICdBJyApICksIHsgaXNfYXNjaWk6IHRydWUsIHRhZ3M6IFsgJ3Zvd2VsJyBdLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMjkgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAoIGNpZF9vZiAnUScgKSApLCB7IGlzX2FzY2lpOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMzAgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAoIGNpZF9vZiAnZicgKSApLCB7IGlzX2FzY2lpOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMzEgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAoIGNpZF9vZiAnQicgKSApLCB7IGlzX2FzY2lpOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMzIgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAoIGNpZF9vZiAnw6QnICkgKSwgeyB0YWdzOiBbICd1bWxhdXQnLCAndm93ZWwnLCBdLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNfbm90X2FzY2lpID0gaC5hZGRfc2NhdHRlciB7IGlzX2FzY2lpOiBmYWxzZSwgfVxuICAgICAgc19ub3RfYXNjaWkuYWRkX3J1biAweDgwLCAweDEwZmZmZlxuICAgICAgQGVxICggzqlpbXRfMjMzID0gLT4gaC5zdW1tYXJpemVfZGF0YV9mb3JfcG9pbnQgICAgICAoIGNpZF9vZiAnQicgKSApLCB7IGlzX2FzY2lpOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWltdF8yMzQgPSAtPiBoLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAgICAgICggY2lkX29mICfDpCcgKSApLCB7IGlzX2FzY2lpOiBmYWxzZSwgdGFnczogWyAndW1sYXV0JywgJ3Zvd2VsJywgXSwgfVxuICAgICAgQHRocm93cyAoIM6paW10XzIzNSA9IC0+IGguc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICAnw6R3aGF0JyAgICAgICAgKSwgL25vdCBhIHZhbGlkIHBvaW50L1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YWxpZGF0aW9uOiAtPlxuICAgIHsgVHlwZSxcbiAgICAgIFR5cGVzcGFjZSwgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9uYW5vdHlwZXNfdjIoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgcmV0dXJuIHRydWUgaWYgTnVtYmVyLmlzU2FmZUludGVnZXIgeFxuICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQHRleHQ6ICggeCApIC0+XG4gICAgICAgIEBhc3NpZ24geyB4LCB9XG4gICAgICAgIHJldHVybiB0cnVlIGlmICggdHlwZW9mIHggKSBpcyAnc3RyaW5nJ1xuICAgICAgICA7ZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBwb2ludDogKCB4ICkgLT5cbiAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgcmV0dXJuIHRydWUgaWYgKCBAVC5pbnRlZ2VyLmlzYSB4IClcbiAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgbm90IGFuIGludGVnZXIgYW5kIG5vdCBhIHRleHRcIiAgICAgICAgICB1bmxlc3MgKCBAVC50ZXh0LmlzYSB4IClcbiAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSB0ZXh0IGJ1dCBub3Qgd2l0aCBhIHNpbmdsZSBjb2RlcG9pbnRcIiB1bmxlc3MgKCAoIEFycmF5LmZyb20geCApLmxlbmd0aCBpcyAxIClcbiAgICAgICAgO3RydWVcbiAgICAgICAgIyByZXR1cm4gdHJ1ZSBpZiBOdW1iZXIuaXNTYWZlSW50ZWdlciB4XG4gICAgICAgICMgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgIyByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICBkZWJ1ZyAnzqlpbXRfMjM2JywgVC5pbnRlZ2VyXG4gICAgZGVidWcgJ86paW10XzIzNycsIFQuaW50ZWdlci5pc2FcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6paW10XzIzOCA9IC0+IFQuaW50ZWdlci5pc2EgICAgICAgICAgIDUgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlpbXRfMjM5ID0gLT4gVC5wb2ludC5pc2EgICAgICAgICAgICAgNSAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWltdF8yNDAgPSAtPiBULnBvaW50LmlzYSAgICAgICAgICAgICAnYScgICAgICAgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlpbXRfMjQxID0gLT4gVC5pbnRlZ2VyLmlzYSAgICAgICAgICAgNTUuNSAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlpbXRfMjQyID0gLT4gVC5wb2ludC5pc2EgICAgICAgICAgICAgNTUuNSAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqlpbXRfMjQzID0gLT4gVC5wb2ludC5pc2EgICAgICAgICAgICAgJ2FiYycgICAgICksIGZhbHNlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWltdF8yNDQgPSAtPiBULmludGVnZXIudmFsaWRhdGUgICAgICA1ICAgICAgICAgKSwgNVxuICAgIEBlcSAoIM6paW10XzI0NSA9IC0+IFQucG9pbnQudmFsaWRhdGUgICAgICAgIDUgICAgICAgICApLCA1XG4gICAgQGVxICggzqlpbXRfMjQ2ID0gLT4gVC5wb2ludC52YWxpZGF0ZSAgICAgICAgJ2EnICAgICAgICksICdhJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlpbXRfMjQ3ID0gLT4gdHJ5IFQuaW50ZWdlci52YWxpZGF0ZSAgNTUuNSAgY2F0Y2ggZSB0aGVuIHJldHVybiBlLm1lc3NhZ2UgKSwgXCJcIlwiKGludGVnZXIpIG5vdCBhIHZhbGlkIGludGVnZXI6IDU1LjUg4oCTIDU1LjUgaXMgYSBub24taW50ZWdlciBudW1iZXJcIlwiXCJcbiAgICBAZXEgKCDOqWltdF8yNDggPSAtPiB0cnkgVC5wb2ludC52YWxpZGF0ZSAgICA1NS41ICBjYXRjaCBlIHRoZW4gcmV0dXJuIGUubWVzc2FnZSApLCBcIlwiXCIocG9pbnQpIG5vdCBhIHZhbGlkIHBvaW50OiA1NS41IOKAkyA1NS41IGlzIG5vdCBhbiBpbnRlZ2VyIGFuZCBub3QgYSB0ZXh0XCJcIlwiXG4gICAgQGVxICggzqlpbXRfMjQ5ID0gLT4gdHJ5IFQucG9pbnQudmFsaWRhdGUgICAgJ2FiYycgY2F0Y2ggZSB0aGVuIHJldHVybiBlLm1lc3NhZ2UgKSwgXCJcIlwiKHBvaW50KSBub3QgYSB2YWxpZCBwb2ludDogYWJjIOKAkyAnYWJjJyBpcyBhIHRleHQgYnV0IG5vdCB3aXRoIGEgc2luZ2xlIGNvZGVwb2ludFwiXCJcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQHRocm93cyAoIM6paW10XzI1MCA9IC0+IFQuaW50ZWdlci52YWxpZGF0ZSAgNTUuNSAgICAgICksIC9ub3QgYSB2YWxpZCBpbnRlZ2VyL1xuICAgIEB0aHJvd3MgKCDOqWltdF8yNTEgPSAtPiBULnBvaW50LnZhbGlkYXRlICAgIDU1LjUgICAgICApLCAvbm90IGEgdmFsaWQgcG9pbnQvXG4gICAgQHRocm93cyAoIM6paW10XzI1MiA9IC0+IFQucG9pbnQudmFsaWRhdGUgICAgJ2FiYycgICAgICksIC9ub3QgYSB2YWxpZCBwb2ludC9cbiAgICBAdGhyb3dzICggzqlpbXRfMjUzID0gLT4gVC5wb2ludC52YWxpZGF0ZSAgICAnJyAgICAgICAgKSwgL25vdCBhIHZhbGlkIHBvaW50L1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZG9fY292ZXJhZ2UgPSBmYWxzZVxuICBkb19jb3ZlcmFnZSA9IHRydWVcbiAgaWYgZG9fY292ZXJhZ2VcbiAgICB7IENvdmVyYWdlX2FuYWx5emVyLCAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9jb3ZlcmFnZS1hbmFseXplcidcbiAgICBjYSA9IG5ldyBDb3ZlcmFnZV9hbmFseXplcigpXG4gICAgY2Eud3JhcF9jbGFzcyBIb2FyZFxuICAgIGNhLndyYXBfY2xhc3MgU2NhdHRlclxuICAgIGNhLndyYXBfY2xhc3MgUnVuXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGNvbnRhaW5tZW50OiB0ZXN0cy5jb250YWlubWVudCwgfVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGlmIGRvX2NvdmVyYWdlXG4gICAgd2FybiAnzqlpbXRfMjU0JywgXCJub3QgY292ZXJlZDpcIiwgKCByZXZlcnNlICBib2xkIFwiICN7bmFtZX0gXCIgKSBmb3IgbmFtZSBpbiBjYS51bnVzZWRfbmFtZXMgaWYgY2EudW51c2VkX25hbWVzLmxlbmd0aCA+IDBcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICA7bnVsbFxuXG4iXX0=
