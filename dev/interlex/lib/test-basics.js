(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('interlex/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  //###########################################################################################################

  //===========================================================================================================
  this.interlex_tasks = {
    //=========================================================================================================
    internals: {
      //-------------------------------------------------------------------------------------------------------
      jsid_re: function() {
        var _jsid_re, Ωilxt___2, Ωilxt___3, Ωilxt___4, Ωilxt___5, Ωilxt___6, Ωilxt___7;
        // { partial, regex, }       = require '../../../apps/interlex/node_modules/regex'
        // _jsid_re = regex""" ^ [ $ _ \p{ID_Start} ] [ $ _ \u200C \u200D \p{ID_Continue} ]* $ """
        ({_jsid_re} = require('../../../apps/interlex'));
        debug('Ωilxt___1', _jsid_re);
        this.eq((Ωilxt___2 = function() {
          return ('abc'.match(_jsid_re)) != null;
        }), true);
        this.eq((Ωilxt___3 = function() {
          return ('$abc'.match(_jsid_re)) != null;
        }), true);
        this.eq((Ωilxt___4 = function() {
          return ('_abc$'.match(_jsid_re)) != null;
        }), true);
        this.eq((Ωilxt___5 = function() {
          return ('_abc3'.match(_jsid_re)) != null;
        }), true);
        this.eq((Ωilxt___6 = function() {
          return ('3_abc'.match(_jsid_re)) != null;
        }), false);
        this.eq((Ωilxt___7 = function() {
          return ('&%'.match(_jsid_re)) != null;
        }), false);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      jump_spec_re: function() {
        var _jump_spec_re, Ωilxt__10, Ωilxt__11, Ωilxt__12, Ωilxt__13, Ωilxt__14, Ωilxt__15, Ωilxt__16, Ωilxt__17, Ωilxt__18, Ωilxt__19, Ωilxt__20, Ωilxt__21, Ωilxt__22, Ωilxt__23, Ωilxt__24, Ωilxt__25, Ωilxt___9;
        // { partial, regex, }       = require '../../../apps/interlex/node_modules/regex'
        // _jsid_re = regex""" ^ [ $ _ \p{ID_Start} ] [ $ _ \u200C \u200D \p{ID_Continue} ]* $ """
        ({_jump_spec_re} = require('../../../apps/interlex'));
        debug('Ωilxt___8', _jump_spec_re);
        //.....................................................................................................
        this.eq((Ωilxt___9 = function() {
          return ('abc'.match(_jump_spec_re)) != null;
        }), true);
        this.eq((Ωilxt__10 = function() {
          return ('$abc'.match(_jump_spec_re)) != null;
        }), true);
        this.eq((Ωilxt__11 = function() {
          return ('_abc$'.match(_jump_spec_re)) != null;
        }), true);
        this.eq((Ωilxt__12 = function() {
          return ('_abc3'.match(_jump_spec_re)) != null;
        }), true);
        this.eq((Ωilxt__13 = function() {
          return ('..'.match(_jump_spec_re)) != null;
        }), true);
        //.....................................................................................................
        this.eq((Ωilxt__14 = function() {
          return ('abc'.match(_jump_spec_re)).groups;
        }), {
          back: void 0,
          fore: 'abc'
        });
        this.eq((Ωilxt__15 = function() {
          return ('$abc'.match(_jump_spec_re)).groups;
        }), {
          back: void 0,
          fore: '$abc'
        });
        this.eq((Ωilxt__16 = function() {
          return ('_abc$'.match(_jump_spec_re)).groups;
        }), {
          back: void 0,
          fore: '_abc$'
        });
        this.eq((Ωilxt__17 = function() {
          return ('_abc3'.match(_jump_spec_re)).groups;
        }), {
          back: void 0,
          fore: '_abc3'
        });
        this.eq((Ωilxt__18 = function() {
          return ('..'.match(_jump_spec_re)).groups;
        }), {
          back: '..',
          fore: void 0
        });
        //.....................................................................................................
        this.eq((Ωilxt__19 = function() {
          return ('[abc'.match(_jump_spec_re)) != null;
        }), false);
        this.eq((Ωilxt__20 = function() {
          return ('abc['.match(_jump_spec_re)) != null;
        }), false);
        this.eq((Ωilxt__21 = function() {
          return (']abc'.match(_jump_spec_re)) != null;
        }), false);
        this.eq((Ωilxt__22 = function() {
          return ('abc]'.match(_jump_spec_re)) != null;
        }), false);
        this.eq((Ωilxt__23 = function() {
          return ('3_abc'.match(_jump_spec_re)) != null;
        }), false);
        this.eq((Ωilxt__24 = function() {
          return ('&%'.match(_jump_spec_re)) != null;
        }), false);
        this.eq((Ωilxt__25 = function() {
          return ('.'.match(_jump_spec_re)) != null;
        }), false);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      parse_jump: function() {
        var Grammar, Level, Token, rx, Ωilxt__26, Ωilxt__27;
        ({Grammar, Level, Token, rx} = require('../../../apps/interlex'));
        //.....................................................................................................
        this.eq((Ωilxt__26 = function() {
          return Token._parse_jump('somewhere');
        }), {
          action: 'fore',
          target: 'somewhere'
        });
        this.eq((Ωilxt__27 = function() {
          return Token._parse_jump('..');
        }), {
          action: 'back',
          target: null
        });
        //.....................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    basics: {
      //-------------------------------------------------------------------------------------------------------
      regexes: function() {
        var internals, new_regex_tag, regex, rx, slevithan_regex, Ωilxt__28, Ωilxt__29, Ωilxt__30, Ωilxt__31, Ωilxt__32, Ωilxt__33, Ωilxt__39, Ωilxt__40;
        ({rx, new_regex_tag, internals} = require('../../../apps/interlex'));
        ({slevithan_regex} = internals);
        ({regex} = slevithan_regex);
        //===========================================================================================================
        this.eq((Ωilxt__28 = function() {
          return rpr(regex`..`);
        }), '/../v');
        this.eq((Ωilxt__29 = function() {
          return rpr(rx`..`);
        }), '/../dvy');
        this.eq((Ωilxt__30 = function() {
          return ((new_regex_tag('dy'))`..`).flags;
        }), 'dvy');
        this.eq((Ωilxt__31 = function() {
          return ((new_regex_tag('dy'))`..`).flags;
        }), 'dvy');
        //.....................................................................................................
        this.eq((Ωilxt__32 = function() {
          return ((new_regex_tag('d'))`..`).flags;
        }), 'dvy');
        this.eq((Ωilxt__33 = function() {
          return ((new_regex_tag('y'))`..`).flags;
        }), 'dvy');
        // @eq ( Ωilxt__34 = -> ( ( new_regex_tag 'dvy'  )'..' ).flags             ), 'dvy'
        // @eq ( Ωilxt__35 = -> ( ( new_regex_tag 'dv'   )'..' ).flags             ), 'dvy'
        // @eq ( Ωilxt__36 = -> ( ( new_regex_tag 'v'    )'..' ).flags             ), 'dvy'
        // @eq ( Ωilxt__37 = -> ( ( new_regex_tag 'x'   )'..' ).flags              ), 'dvy'
        // @eq ( Ωilxt__38 = -> ( ( new_regex_tag 'n'   )'..' ).flags              ), 'dvy'
        this.throws((Ωilxt__39 = function() {
          return ((new_regex_tag('duy'))`..`).flags;
        }), /———————————/);
        this.throws((Ωilxt__40 = function() {
          return ((new_regex_tag('u'))`..`).flags;
        }), /———————————/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      regexes_new_implementation: function() {
        var internals, new_regex_tag, regex, rx, slevithan_regex, Ωilxt__43, Ωilxt__44, Ωilxt__45, Ωilxt__46, Ωilxt__47, Ωilxt__48, Ωilxt__49, Ωilxt__50, Ωilxt__51, Ωilxt__52, Ωilxt__53, Ωilxt__54, Ωilxt__55;
        ({rx, new_regex_tag, internals} = require('../../../apps/interlex'));
        ({slevithan_regex} = internals);
        ({regex} = slevithan_regex);
        //=====================================================================================================
        internals = {
          regex_flags_re: /^(?!.*(.).*\1)[dgimsuvy]*$/,
          mandatory_flags_txt: 'dy',
          forbidden_flags_re: /[uv]/g,
          //---------------------------------------------------------------------------------------------------------
          normalize_flags: function(flags = '') {
            /* Given a RegExp flags text, sets `d`, `y`, removes `u`, `v`, and returns sorted text with unique
                     flags. */
            if (!(typeof flags)) {
              throw new Error(`Ωilx__41 expected a text, got ${rpr(flags)}`);
            }
            if (!internals.regex_flags_re.test(flags)) {
              throw new Error(`Ωilx__42 illegal or duplicate flags in ${rpr(flags)}`);
            }
            flags = flags.replace(internals.forbidden_flags_re, '');
            flags += internals.mandatory_flags_txt;
            return [...(new Set(flags))].sort().join('');
          },
          //---------------------------------------------------------------------------------------------------------
          copy_regex: function(regex, new_flags) {
            var flags, new_flag;
            flags = new Set(regex.flags);
            for (new_flag of new_flags) {
              switch (true) {
                case _regex_flag_lower_re.test(new_flag):
                  flags.add(new_flag);
                  break;
                case _regex_flag_upper_re.test(new_flag):
                  flags.delete(new_flag.toLowerCase());
                  break;
                default:
                  throw new Error(`Ωilx___1 invalid regex flag ${rpr(new_flag)} in ${rpr(new_flags)}`);
              }
            }
            return new RegExp(regex.source, [...flags].join(''));
          }
        };
        //-----------------------------------------------------------------------------------------------------------
        this.eq((Ωilxt__43 = function() {
          return internals.normalize_flags();
        }), 'dy');
        this.eq((Ωilxt__44 = function() {
          return internals.normalize_flags('');
        }), 'dy');
        this.eq((Ωilxt__45 = function() {
          return internals.normalize_flags('d');
        }), 'dy');
        this.eq((Ωilxt__46 = function() {
          return internals.normalize_flags('y');
        }), 'dy');
        this.eq((Ωilxt__47 = function() {
          return internals.normalize_flags('dy');
        }), 'dy');
        this.eq((Ωilxt__48 = function() {
          return internals.normalize_flags('yd');
        }), 'dy');
        //-----------------------------------------------------------------------------------------------------------
        this.eq((Ωilxt__49 = function() {
          return internals.normalize_flags('i');
        }), 'diy');
        this.eq((Ωilxt__50 = function() {
          return internals.normalize_flags('g');
        }), 'dgy');
        this.eq((Ωilxt__51 = function() {
          return internals.normalize_flags('m');
        }), 'dmy');
        this.eq((Ωilxt__52 = function() {
          return internals.normalize_flags('s');
        }), 'dsy');
        this.eq((Ωilxt__53 = function() {
          return internals.normalize_flags('dgimsuvy');
        }), 'dgimsy');
        //-----------------------------------------------------------------------------------------------------------
        this.throws((Ωilxt__54 = function() {
          return internals.normalize_flags('a');
        }), /illegal or duplicate flags/);
        this.throws((Ωilxt__55 = function() {
          return internals.normalize_flags('yy');
        }), /illegal or duplicate flags/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      simple_1: function() {
        var Grammar, ILX, Level, Lexeme, Token, g, gnd, internals, number_lx, number_tk, number_tk_matcher, rx, slevithan_regex, Ωilxt_100, Ωilxt_101, Ωilxt_102, Ωilxt_103, Ωilxt_104, Ωilxt_105, Ωilxt_106, Ωilxt_107, Ωilxt__69, Ωilxt__70, Ωilxt__71, Ωilxt__72, Ωilxt__73, Ωilxt__74, Ωilxt__75, Ωilxt__76, Ωilxt__77, Ωilxt__78, Ωilxt__79, Ωilxt__80, Ωilxt__81, Ωilxt__82, Ωilxt__83, Ωilxt__84, Ωilxt__85, Ωilxt__86, Ωilxt__87, Ωilxt__88, Ωilxt__89, Ωilxt__90, Ωilxt__91, Ωilxt__92, Ωilxt__93, Ωilxt__94, Ωilxt__95, Ωilxt__96, Ωilxt__97, Ωilxt__98, Ωilxt__99;
        ILX = require('../../../apps/interlex');
        ({Grammar, Level, Token, Lexeme, rx, internals} = ILX);
        ({slevithan_regex} = internals);
        //===========================================================================================================
        g = new Grammar({
          name: 'g'
        });
        gnd = g.new_level({
          name: 'gnd'
        });
        number_tk_matcher = rx`[0-9]+\P{Letter}`;
        number_tk = gnd.new_token({
          name: 'number',
          matcher: number_tk_matcher
        });
        number_lx = null;
        //.....................................................................................................
        this.eq((Ωilxt__69 = function() {
          return g.start_level instanceof Level;
        }), true);
        this.eq((Ωilxt__70 = function() {
          return g.start_level;
        }), gnd);
        this.eq((Ωilxt__71 = function() {
          return g.start_level_name;
        }), 'gnd');
        this.eq((Ωilxt__72 = function() {
          return g.name;
        }), 'g');
        this.eq((Ωilxt__73 = function() {
          return g.levels instanceof Object;
        }), true);
        this.eq((Ωilxt__74 = function() {
          return g.levels.gnd;
        }), gnd);
        //.....................................................................................................
        this.eq((Ωilxt__75 = function() {
          return gnd instanceof Level;
        }), true);
        this.eq((Ωilxt__76 = function() {
          return gnd.name;
        }), 'gnd');
        this.eq((Ωilxt__77 = function() {
          return gnd.grammar;
        }), g);
        this.eq((Ωilxt__78 = function() {
          return gnd.tokens instanceof Array;
        }), true);
        this.eq((Ωilxt__79 = function() {
          return gnd.tokens.length;
        }), 1);
        this.eq((Ωilxt__80 = function() {
          return gnd.tokens[0];
        }), number_tk);
        //.....................................................................................................
        this.eq((Ωilxt__81 = function() {
          return number_tk instanceof Token;
        }), true);
        this.eq((Ωilxt__82 = function() {
          return number_tk.name;
        }), 'number');
        this.eq((Ωilxt__83 = function() {
          return number_tk.level;
        }), gnd);
        this.eq((Ωilxt__84 = function() {
          return number_tk.grammar;
        }), g);
        this.eq((Ωilxt__85 = function() {
          return rpr(number_tk.matcher);
        }), '/[0-9]+/dvy');
        this.eq((Ωilxt__86 = function() {
          return number_tk.matcher.hasIndices;
        }), true);
        this.eq((Ωilxt__87 = function() {
          return number_tk.matcher.sticky;
        }), true);
        this.eq((Ωilxt__88 = function() {
          return number_tk.matcher.unicodeSets;
        }), true);
        this.eq((Ωilxt__89 = function() {
          return number_tk.jump;
        }), null);
        this.eq((Ωilxt__90 = function() {
          return number_tk.jump_spec;
        }), null);
        //.....................................................................................................
        this.eq((Ωilxt__91 = function() {
          return (number_lx = number_tk.match_at(0, '398ä')) != null;
        }), true);
        this.eq((Ωilxt__92 = function() {
          return number_lx instanceof Lexeme;
        }), true);
        this.eq((Ωilxt__93 = function() {
          return number_lx.name;
        }), 'number');
        this.eq((Ωilxt__94 = function() {
          return number_lx.fqname;
        }), 'gnd.number');
        this.eq((Ωilxt__95 = function() {
          return number_lx.level;
        }), gnd);
        this.eq((Ωilxt__96 = function() {
          return number_lx.hit;
        }), '398');
        this.eq((Ωilxt__97 = function() {
          return number_lx.start;
        }), 0);
        this.eq((Ωilxt__98 = function() {
          return number_lx.stop;
        }), 3);
        //.....................................................................................................
        this.eq((Ωilxt__99 = function() {
          return (number_lx = number_tk.match_at(7, 'abcdefgh00102xyz')) != null;
        }), false);
        this.eq((Ωilxt_100 = function() {
          return (number_lx = number_tk.match_at(8, 'abcdefgh00102xyz')) != null;
        }), true);
        this.eq((Ωilxt_101 = function() {
          return number_lx instanceof Lexeme;
        }), true);
        this.eq((Ωilxt_102 = function() {
          return number_lx.name;
        }), 'number');
        this.eq((Ωilxt_103 = function() {
          return number_lx.fqname;
        }), 'gnd.number');
        this.eq((Ωilxt_104 = function() {
          return number_lx.level;
        }), gnd);
        this.eq((Ωilxt_105 = function() {
          return number_lx.hit;
        }), '00102');
        this.eq((Ωilxt_106 = function() {
          return number_lx.start;
        }), 8);
        this.eq((Ωilxt_107 = function() {
          return number_lx.stop;
        }), 13);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      new_regex_tag: function() {
        var new_regex_tag, regex, rx, Ωilxt_108, Ωilxt_109, Ωilxt_110, Ωilxt_111, Ωilxt_112, Ωilxt_113, Ωilxt_114, Ωilxt_115, Ωilxt_116, Ωilxt_117, Ωilxt_118;
        ({rx, regex, new_regex_tag} = require('../../../apps/interlex'));
        //.....................................................................................................
        this.eq((Ωilxt_108 = function() {
          return typeof new_regex_tag('dy');
        }), 'function');
        this.eq((Ωilxt_109 = function() {
          return ((new_regex_tag('dyis'))`[a-z]`) instanceof RegExp;
        }), true);
        this.eq((Ωilxt_110 = function() {
          return rpr((new_regex_tag('dyis'))`[a-z]`);
        }), '/[a-z]/disvy');
        this.eq((Ωilxt_111 = function() {
          return typeof (new_regex_tag('dy')).si;
        }), 'function');
        this.eq((Ωilxt_112 = function() {
          return rpr((new_regex_tag('dy')).si`[a-z]`);
        }), '/[a-z]/disvy');
        this.eq((Ωilxt_113 = function() {
          return rpr((new_regex_tag('dys')).si`[a-z]`);
        }), '/[a-z]/disvy');
        this.eq((Ωilxt_114 = function() {
          return rpr((new_regex_tag('dys')).i`[a-z]`);
        }), '/[a-z]/disvy');
        this.eq((Ωilxt_115 = function() {
          return rpr((new_regex_tag('dysi'))`[a-z]`);
        }), '/[a-z]/disvy');
        this.eq((Ωilxt_116 = function() {
          return rpr((new_regex_tag('v')).si`[a-z]`);
        }), '/[a-z]/disvy');
        this.throws((Ωilxt_117 = function() {
          return (new_regex_tag('dy')).ab`[a-z]`;
        }), /invalid flags/);
        this.throws((Ωilxt_118 = function() {
          return (new_regex_tag('dyab'))`[a-z]`;
        }), /invalid flags/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      copy_regex: function() {
        var _copy_regex, Ωilxt_119, Ωilxt_120, Ωilxt_121, Ωilxt_122, Ωilxt_123, Ωilxt_124, Ωilxt_125, Ωilxt_126, Ωilxt_127, Ωilxt_128, Ωilxt_129;
        ({_copy_regex} = require('../../../apps/interlex'));
        this.eq((Ωilxt_119 = function() {
          return typeof _copy_regex;
        }), 'function');
        this.eq((Ωilxt_120 = function() {
          return (_copy_regex(/[a-z]/i, 'I')) instanceof RegExp;
        }), true);
        this.eq((Ωilxt_121 = function() {
          return (_copy_regex(/[a-z]/i, 'I')).source;
        }), '[a-z]');
        this.eq((Ωilxt_122 = function() {
          return (_copy_regex(/[a-z]/i, 'I')).flags;
        }), '');
        this.eq((Ωilxt_123 = function() {
          return (_copy_regex(/[a-z]/i, 'Ig')).flags;
        }), 'g');
        this.eq((Ωilxt_124 = function() {
          return (_copy_regex(/[a-z]/i, 'IgV')).flags;
        }), 'g');
        this.eq((Ωilxt_125 = function() {
          return (_copy_regex(/[a-z]/i, 'gv')).flags;
        }), 'giv');
        this.eq((Ωilxt_126 = function() {
          return (_copy_regex(/[a-z]/i, 'gu')).flags;
        }), 'giu');
        this.eq((Ωilxt_127 = function() {
          return (_copy_regex(/[a-z]/igvys, 'SYVGI')).flags;
        }), '');
        this.throws((Ωilxt_128 = function() {
          return _copy_regex(/[a-z]/i, 'guv');
        }), /Invalid flags supplied to RegExp constructor/);
        this.throws((Ωilxt_129 = function() {
          return _copy_regex(/[a-z]/u, 'v');
        }), /Invalid flags supplied to RegExp constructor/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      rx_flags: function() {
        var rx, Ωilxt_130, Ωilxt_131, Ωilxt_133, Ωilxt_134;
        ({rx} = require('../../../apps/interlex'));
        this.eq((Ωilxt_130 = function() {
          return (rx`x`).flags;
        }), 'dvy');
        this.eq((Ωilxt_131 = function() {
          return (rx.si`x`).flags;
        }), 'disvy');
        // @eq ( Ωilxt_132 = -> ( rx.sidvy"x"  ).flags ), 'disvy'
        this.eq((Ωilxt_133 = function() {
          return (rx.y`x`).flags;
        }), 'dvy');
        this.eq((Ωilxt_134 = function() {
          return rpr(rx`[abc]+`);
        }), '/[abc]+/dvy');
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      numbering: function() {
        var Grammar, ILX, new_grammar, rx;
        ILX = require('../../../apps/interlex');
        ({Grammar, rx} = ILX);
        //=====================================================================================================
        new_grammar = function(cfg) {
          var g, gnd;
          g = new Grammar({
            name: 'g',
            ...cfg
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          //.....................................................................................................
          gnd.new_token({
            name: 'name',
            matcher: rx`(?<initial>[A-Z])[a-z]*`
          });
          gnd.new_token({
            name: 'number',
            matcher: rx`[0-9]+`
          });
          gnd.new_token({
            name: 'ws',
            matcher: rx`\s+`
          });
          gnd.new_token({
            name: 'text',
            matcher: rx`[^a-zA-Z0-9\s]+`
          });
          //.....................................................................................................
          return g;
        };
        (() => {          //.....................................................................................................
          var g, lexemes, matcher, probe, probes_and_matchers, x, Ωilxt_135, Ωilxt_136, Ωilxt_137, Ωilxt_138, Ωilxt_141;
          g = new_grammar();
          this.eq((Ωilxt_135 = function() {
            return g.cfg.counter_name;
          }), 'line_nr');
          this.eq((Ωilxt_136 = function() {
            return g.cfg.counter_step;
          }), +1);
          this.eq((Ωilxt_137 = function() {
            return g.cfg.counter_value;
          }), 1);
          this.eq((Ωilxt_138 = function() {
            return g.state.count;
          }), 1);
          probes_and_matchers = [["1st line", 1], ["2nd line", 2], ["3rd line", 3], ["4th line (and EOF)", 4]];
//...................................................................................................
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            info('Ωilxt_139', rpr(probe));
            lexemes = g.get_lexemes(probe);
            urge('Ωilxt_140', lexemes);
            this.eq((Ωilxt_141 = function() {
              return lexemes[0].line_nr;
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, matcher, probe, probes_and_matchers, x, Ωilxt_142, Ωilxt_143, Ωilxt_144, Ωilxt_145, Ωilxt_151;
          g = new_grammar({
            counter_name: 'test_id',
            counter_step: -1,
            counter_value: 10
          });
          this.eq((Ωilxt_142 = function() {
            return g.cfg.counter_name;
          }), 'test_id');
          this.eq((Ωilxt_143 = function() {
            return g.cfg.counter_step;
          }), -1);
          this.eq((Ωilxt_144 = function() {
            return g.cfg.counter_value;
          }), 10);
          this.eq((Ωilxt_145 = function() {
            return g.state.count;
          }), 10);
          probes_and_matchers = [["1st line", 10], ["2nd line", 9], ["3rd line", 8], ["4th line (and EOF)", 7]];
//...................................................................................................
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            info('Ωilxt_146', rpr(probe));
            lexemes = g.get_lexemes(probe);
            // urge 'Ωilxt_147', lexemes
            urge('Ωilxt_148', g);
            urge('Ωilxt_149', g.cfg);
            urge('Ωilxt_150', g.state);
            this.eq((Ωilxt_151 = function() {
              return lexemes[0].test_id;
            }), matcher);
          }
          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      can_use_plain_regexes: function() {
        var Grammar, condense_lexemes, probes_and_matchers, rx, test;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //-----------------------------------------------------------------------------------------------------
        condense_lexemes = function(lexemes) {
          var lexeme;
          return ((function() {
            var results;
            results = [];
            for (lexeme of lexemes) {
              results.push(`${lexeme.fqname}${rpr(lexeme.hit)}`);
            }
            return results;
          })()).join('|');
        };
        //-----------------------------------------------------------------------------------------------------
        probes_and_matchers = [
          [
            "1st line",
            {
              length: 3,
              condensed: "gnd.ordinal'1st'|gnd.ws' '|gnd.word'line'"
            }
          ],
          [
            "2nd line",
            {
              length: 3,
              condensed: "gnd.ordinal'2nd'|gnd.ws' '|gnd.word'line'"
            }
          ],
          [
            "3rd line",
            {
              length: 3,
              condensed: "gnd.ordinal'3rd'|gnd.ws' '|gnd.word'line'"
            }
          ],
          [
            "4th line (and EOF)",
            {
              length: 9,
              condensed: "gnd.ordinal'4th'|gnd.ws' '|gnd.word'line'|gnd.ws' '|gnd.other'('|gnd.word'and'|gnd.ws' '|gnd.word'EOF'|gnd.other')'"
            }
          ]
        ];
        //-----------------------------------------------------------------------------------------------------
        test = (g) => {
          var lexemes, matcher, probe, x, Ωilxt_152, Ωilxt_153, Ωilxt_154;
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            g.reset_count();
            lexemes = g.get_lexemes(probe);
            this.eq((Ωilxt_152 = function() {
              return condense_lexemes(lexemes);
            }), matcher.condensed);
            this.eq((Ωilxt_153 = function() {
              return lexemes.length;
            }), matcher.length);
            g.reset_count();
            this.eq((Ωilxt_154 = function() {
              return [...(g.walk_lexemes(probe))];
            }), lexemes);
          }
          return null;
        };
        (() => {          //-----------------------------------------------------------------------------------------------------
          var g, gnd;
          g = new Grammar({
            name: 'g'
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          //...................................................................................................
          gnd.new_token({
            name: 'name',
            matcher: rx`(?<initial>[A-Z])[a-z]+`
          });
          gnd.new_token({
            name: 'ordinal',
            matcher: rx`(?<ordinal>[0-9]+)(st|nd|rd|th)`
          });
          gnd.new_token({
            name: 'number',
            matcher: rx`[0-9]+`
          });
          gnd.new_token({
            name: 'ws',
            matcher: rx`\s+`
          });
          gnd.new_token({
            name: 'word',
            matcher: rx.i`[a-z]+`
          });
          gnd.new_token({
            name: 'other',
            matcher: rx.i`[^a-z0-9\s]+`
          });
          //...................................................................................................
          return test(g);
        })();
        (() => {          //-----------------------------------------------------------------------------------------------------
          var g, gnd;
          g = new Grammar({
            name: 'g'
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          //...................................................................................................
          gnd.new_token({
            name: 'name',
            matcher: /(?<initial>[A-Z])[a-z]+/dvy
          });
          gnd.new_token({
            name: 'ordinal',
            matcher: /(?<ordinal>[0-9]+)(?:st|nd|rd|th)/dvy
          });
          gnd.new_token({
            name: 'number',
            matcher: /[0-9]+/dvy
          });
          gnd.new_token({
            name: 'ws',
            matcher: /\s+/dvy
          });
          gnd.new_token({
            name: 'word',
            matcher: /[a-z]+/divy
          });
          gnd.new_token({
            name: 'other',
            matcher: /[^a-z0-9\s]+/divy
          });
          //...................................................................................................
          return test(g);
        })();
        (() => {          //-----------------------------------------------------------------------------------------------------
          var g, gnd;
          g = new Grammar({
            name: 'g'
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          //...................................................................................................
          gnd.new_token({
            name: 'name',
            matcher: /(?<initial>[A-Z])[a-z]+/
          });
          gnd.new_token({
            name: 'ordinal',
            matcher: /(?<ordinal>[0-9]+)(?:st|nd|rd|th)/
          });
          gnd.new_token({
            name: 'number',
            matcher: /[0-9]+/
          });
          gnd.new_token({
            name: 'ws',
            matcher: /\s+/
          });
          gnd.new_token({
            name: 'word',
            matcher: /[a-z]+/i
          });
          gnd.new_token({
            name: 'other',
            matcher: /[^a-z0-9\s]+/i
          });
          //...................................................................................................
          return test(g);
        })();
        (() => {          //-----------------------------------------------------------------------------------------------------
          var g, gnd;
          g = new Grammar({
            name: 'g'
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          //...................................................................................................
          gnd.new_token({
            name: 'name',
            matcher: /(?<initial>[A-Z])[a-z]+/v
          });
          gnd.new_token({
            name: 'ordinal',
            matcher: /(?<ordinal>[0-9]+)(?:st|nd|rd|th)/u
          });
          gnd.new_token({
            name: 'number',
            matcher: /[0-9]+/
          });
          gnd.new_token({
            name: 'ws',
            matcher: /\s+/
          });
          gnd.new_token({
            name: 'word',
            matcher: /[a-z]+/i
          });
          gnd.new_token({
            name: 'other',
            matcher: /[^a-z0-9\s]+/i
          });
          //...................................................................................................
          return test(g);
        })();
        //.....................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    demo: {
      //-------------------------------------------------------------------------------------------------------
      demo: function() {
        var Grammar, g, gnd, lexeme, rx, show_lexeme, source, sources, string11, string12, token;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //===========================================================================================================
        g = new Grammar({
          name: 'g'
        });
        gnd = g.new_level({
          name: 'gnd'
        });
        string11 = g.new_level({
          name: 'string11'
        });
        string12 = g.new_level({
          name: 'string12'
        });
        // debug 'Ωilxt_155', [ string11, string12, ]
        // console.debug 'Ωilxt_156', [ string11, string12, ]
        // process.exit 111
        //.........................................................................................................
        gnd.new_token({
          name: 'name',
          matcher: rx`(?<initial>[A-Z])[a-z]*`
        });
        gnd.new_token({
          name: 'number',
          matcher: rx`[0-9]+`
        });
        gnd.new_token({
          name: 'string11_start',
          matcher: rx`(?!<\\)'`,
          jump: 'string11'
        });
        gnd.new_token({
          name: 'string12_start',
          matcher: rx`(?!<\\)"`,
          jump: 'string12'
        });
        gnd.new_token({
          name: 'paren_start',
          matcher: rx`\(`
        });
        gnd.new_token({
          name: 'paren_stop',
          matcher: rx`\)`
        });
        gnd.new_token({
          name: 'other',
          matcher: rx`[A-Za-z0-9]+`
        });
        gnd.new_token({
          name: 'ws',
          matcher: rx`\s+`
        });
        //.........................................................................................................
        string11.new_token({
          name: 'string11_stop',
          matcher: rx`(?!<\\)'`,
          jump: '..'
        });
        string11.new_token({
          name: 'text',
          matcher: rx`[^']*`
        });
        //.........................................................................................................
        debug('Ωilxt_157', g);
        debug('Ωilxt_158', g.levels);
        debug('Ωilxt_159', g.levels.gnd);
        debug('Ωilxt_160', g.levels.gnd.tokens);
        debug('Ωilxt_161', gnd);
        for (token of gnd) {
          debug('Ωilxt_162', token);
        }
        //.........................................................................................................
        show_lexeme = function(lexeme) {
          var fqname, groups, groups_rpr, hit, jump, jump_rpr, jump_spec, name, start, stop;
          ({name, fqname, start, stop, hit, jump, jump_spec, groups} = lexeme);
          groups_rpr = groups != null ? rpr({...groups}) : '';
          jump_rpr = jump_spec != null ? jump_spec : '';
          return urge('Ωilxt_163', f`${start}:>3.0f;:${stop}:<3.0f; ${fqname}:<20c; ${rpr(hit)}:<30c; ${jump_rpr}:<15c; ${groups_rpr}`);
        };
        //.........................................................................................................
        sources = ["Alice in Cairo 1912 (approximately)", "Alice in Cairo 1912 'approximately'"];
//.........................................................................................................
        for (source of sources) {
          info('Ωilxt_164', rpr(source));
          for (lexeme of g.walk_lexemes(source)) {
            show_lexeme(lexeme);
          }
        }
        //.........................................................................................................
        return null;
      }
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // ( new Test { throw_on_error: true, } ).test @interlex_tasks
      // ( new Test { throw_on_error: false, } ).test @interlex_tasks
      // ( new Test { throw_on_error: true, } ).test { regexes: @interlex_tasks.basics.regexes, }
      (new Test({
        throw_on_error: true
      })).test({
        regexes_new_implementation: this.interlex_tasks.basics.regexes_new_implementation
      });
      (() => {})();      // ( new Test { throw_on_error: true, } ).test { can_use_plain_regexes: @interlex_tasks.basics.can_use_plain_regexes, }
      // ( new Test { throw_on_error: true, } ).test { demo: @interlex_tasks.demo.demo, }
      // demo()
      // demo_jsidentifier()
      return f = function() {
        var match;
        help('Ωilxt_165', Array.from('a🈯z'));
        help('Ωilxt_166', 'a🈯z'.split(/(.)/u));
        help('Ωilxt_167', 'a🈯z'.split(/(.)/v));
        help('Ωilxt_168', 'a🈯z'.split(/(.)/d));
        help('Ωilxt_169', match = 'a🈯z'.match(/^(?<head>[a-z]+)(?<other>[^a-z]+)(?<tail>[a-z]+)/d));
        help('Ωilxt_170', {...match.groups});
        return help('Ωilxt_171', {...match.indices.groups});
      };
    })();
  }

  // help 'Ωilxt_172', rx"."
// help 'Ωilxt_173', rx/./

}).call(this);

//# sourceMappingURL=test-basics.js.map