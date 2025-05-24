(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, condense_lexemes, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('interlex/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  //###########################################################################################################

  //===========================================================================================================
  condense_lexemes = function(lexemes) {
    var lexeme;
    if (!Array.isArray(lexemes)) {
      lexemes = [lexemes];
    }
    return ((function() {
      var results;
      results = [];
      for (lexeme of lexemes) {
        results.push(`${lexeme.fqname}${rpr(lexeme.hit)}`);
      }
      return results;
    })()).join('|');
  };

  //###########################################################################################################

  //===========================================================================================================
  this.interlex_tasks = {
    //=========================================================================================================
    internals: {
      //-------------------------------------------------------------------------------------------------------
      jsid_re: function() {
        var internals, jsid_re, Ωilxt___2, Ωilxt___3, Ωilxt___4, Ωilxt___5, Ωilxt___6, Ωilxt___7;
        // { partial, regex, }       = require '../../../apps/interlex/node_modules/regex'
        // _jsid_re = regex""" ^ [ $ _ \p{ID_Start} ] [ $ _ \u200C \u200D \p{ID_Continue} ]* $ """
        ({internals} = require('../../../apps/interlex'));
        ({jsid_re} = internals);
        debug('Ωilxt___1', jsid_re);
        this.eq((Ωilxt___2 = function() {
          return ('abc'.match(jsid_re)) != null;
        }), true);
        this.eq((Ωilxt___3 = function() {
          return ('$abc'.match(jsid_re)) != null;
        }), true);
        this.eq((Ωilxt___4 = function() {
          return ('_abc$'.match(jsid_re)) != null;
        }), true);
        this.eq((Ωilxt___5 = function() {
          return ('_abc3'.match(jsid_re)) != null;
        }), true);
        this.eq((Ωilxt___6 = function() {
          return ('3_abc'.match(jsid_re)) != null;
        }), false);
        this.eq((Ωilxt___7 = function() {
          return ('&%'.match(jsid_re)) != null;
        }), false);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      jump_spec_re: function() {
        var internals, jump_spec_re, Ωilxt__10, Ωilxt__11, Ωilxt__12, Ωilxt__13, Ωilxt__14, Ωilxt__15, Ωilxt__16, Ωilxt__17, Ωilxt__18, Ωilxt__19, Ωilxt__20, Ωilxt__21, Ωilxt__22, Ωilxt__23, Ωilxt__24, Ωilxt___8, Ωilxt___9;
        // { partial, regex, }       = require '../../../apps/interlex/node_modules/regex'
        // _jsid_re = regex""" ^ [ $ _ \p{ID_Start} ] [ $ _ \u200C \u200D \p{ID_Continue} ]* $ """
        ({internals} = require('../../../apps/interlex'));
        ({jump_spec_re} = internals);
        //.....................................................................................................
        this.eq((Ωilxt___8 = function() {
          return ('abc'.match(jump_spec_re)) != null;
        }), true);
        this.eq((Ωilxt___9 = function() {
          return ('$abc'.match(jump_spec_re)) != null;
        }), true);
        this.eq((Ωilxt__10 = function() {
          return ('_abc$'.match(jump_spec_re)) != null;
        }), true);
        this.eq((Ωilxt__11 = function() {
          return ('_abc3'.match(jump_spec_re)) != null;
        }), true);
        this.eq((Ωilxt__12 = function() {
          return ('..'.match(jump_spec_re)) != null;
        }), true);
        //.....................................................................................................
        this.eq((Ωilxt__13 = function() {
          return ('abc'.match(jump_spec_re)).groups;
        }), {
          back: void 0,
          fore: 'abc'
        });
        this.eq((Ωilxt__14 = function() {
          return ('$abc'.match(jump_spec_re)).groups;
        }), {
          back: void 0,
          fore: '$abc'
        });
        this.eq((Ωilxt__15 = function() {
          return ('_abc$'.match(jump_spec_re)).groups;
        }), {
          back: void 0,
          fore: '_abc$'
        });
        this.eq((Ωilxt__16 = function() {
          return ('_abc3'.match(jump_spec_re)).groups;
        }), {
          back: void 0,
          fore: '_abc3'
        });
        this.eq((Ωilxt__17 = function() {
          return ('..'.match(jump_spec_re)).groups;
        }), {
          back: '..',
          fore: void 0
        });
        //.....................................................................................................
        this.eq((Ωilxt__18 = function() {
          return ('[abc'.match(jump_spec_re)) != null;
        }), false);
        this.eq((Ωilxt__19 = function() {
          return ('abc['.match(jump_spec_re)) != null;
        }), false);
        this.eq((Ωilxt__20 = function() {
          return (']abc'.match(jump_spec_re)) != null;
        }), false);
        this.eq((Ωilxt__21 = function() {
          return ('abc]'.match(jump_spec_re)) != null;
        }), false);
        this.eq((Ωilxt__22 = function() {
          return ('3_abc'.match(jump_spec_re)) != null;
        }), false);
        this.eq((Ωilxt__23 = function() {
          return ('&%'.match(jump_spec_re)) != null;
        }), false);
        this.eq((Ωilxt__24 = function() {
          return ('.'.match(jump_spec_re)) != null;
        }), false);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      parse_jump: function() {
        var Grammar, Level, Token, rx, Ωilxt__25, Ωilxt__26;
        ({Grammar, Level, Token, rx} = require('../../../apps/interlex'));
        //.....................................................................................................
        this.eq((Ωilxt__25 = function() {
          return Token._parse_jump('somewhere');
        }), {
          action: 'fore',
          target: 'somewhere'
        });
        this.eq((Ωilxt__26 = function() {
          return Token._parse_jump('..');
        }), {
          action: 'back',
          target: null
        });
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      sort_lexemes_by_length_dec: function() {
        var internals, Ωilxt__27, Ωilxt__28, Ωilxt__29, Ωilxt__30, Ωilxt__31, Ωilxt__32, Ωilxt__33, Ωilxt__34, Ωilxt__35;
        ({internals} = require('../../../apps/interlex'));
        //.....................................................................................................
        this.eq((Ωilxt__27 = function() {
          return internals.sort_lexemes_by_length_dec([]);
        }), []);
        this.eq((Ωilxt__28 = function() {
          return internals.sort_lexemes_by_length_dec(['1']);
        }), ['1']);
        this.eq((Ωilxt__29 = function() {
          return internals.sort_lexemes_by_length_dec(['1', 'i']);
        }), ['1', 'i']);
        this.eq((Ωilxt__30 = function() {
          return internals.sort_lexemes_by_length_dec(['1', '123', '1', '1234']);
        }), ['1234', '123', '1', '1']);
        this.eq((Ωilxt__31 = function() {
          return internals.sort_lexemes_by_length_dec(['abcd', '1234', '1', '123', 'i']);
        }), ['abcd', '1234', '123', '1', 'i']);
        this.eq((Ωilxt__32 = function() {
          return internals.sort_lexemes_by_length_dec(['1234', 'abcd', '1', '123', 'i']);
        }), ['1234', 'abcd', '123', '1', 'i']);
        this.eq((Ωilxt__33 = function() {
          return internals.sort_lexemes_by_length_dec(['1234', '1', 'abcd', '123', 'i']);
        }), ['1234', 'abcd', '123', '1', 'i']);
        this.eq((Ωilxt__34 = function() {
          return internals.sort_lexemes_by_length_dec(['1234', '1', '123', 'abcd', 'i']);
        }), ['1234', 'abcd', '123', '1', 'i']);
        this.eq((Ωilxt__35 = function() {
          return internals.sort_lexemes_by_length_dec(['1234', '1', '123', 'i', 'abcd']);
        }), ['1234', 'abcd', '123', '1', 'i']);
        //.....................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    regexes: {
      //-------------------------------------------------------------------------------------------------------
      new_implementation: function() {
        var internals, new_regex_tag, rx, Ωilxt__36, Ωilxt__37, Ωilxt__38, Ωilxt__39, Ωilxt__40, Ωilxt__41, Ωilxt__42, Ωilxt__43, Ωilxt__44, Ωilxt__45, Ωilxt__46, Ωilxt__47, Ωilxt__48, Ωilxt__49, Ωilxt__50, Ωilxt__51, Ωilxt__52, Ωilxt__53, Ωilxt__54, Ωilxt__55, Ωilxt__56, Ωilxt__57, Ωilxt__58, Ωilxt__59, Ωilxt__60, Ωilxt__61, Ωilxt__62, Ωilxt__63, Ωilxt__64, Ωilxt__65, Ωilxt__66, Ωilxt__67, Ωilxt__68, Ωilxt__69, Ωilxt__70, Ωilxt__71, Ωilxt__72, Ωilxt__73, Ωilxt__74, Ωilxt__75, Ωilxt__76, Ωilxt__77, Ωilxt__78, Ωilxt__79, Ωilxt__80, Ωilxt__81, Ωilxt__82;
        ({rx, new_regex_tag, internals} = require('../../../apps/interlex'));
        //=====================================================================================================
        this.throws((Ωilxt__36 = function() {
          return internals.normalize_regex_flags();
        }), /Cannot destructure property 'flags'/);
        this.throws((Ωilxt__37 = function() {
          return internals.normalize_regex_flags(void 0);
        }), /Cannot destructure property 'flags'/);
        this.throws((Ωilxt__38 = function() {
          return internals.normalize_regex_flags(null);
        }), /Cannot destructure property 'flags'/);
        this.eq((Ωilxt__39 = function() {
          return internals.normalize_regex_flags({
            flags: '',
            mode: 'slr'
          });
        }), 'dy');
        this.eq((Ωilxt__40 = function() {
          return internals.normalize_regex_flags({
            flags: 'd',
            mode: 'slr'
          });
        }), 'dy');
        this.eq((Ωilxt__41 = function() {
          return internals.normalize_regex_flags({
            flags: 'y',
            mode: 'slr'
          });
        }), 'dy');
        this.eq((Ωilxt__42 = function() {
          return internals.normalize_regex_flags({
            flags: 'dy',
            mode: 'slr'
          });
        }), 'dy');
        this.eq((Ωilxt__43 = function() {
          return internals.normalize_regex_flags({
            flags: 'yd',
            mode: 'slr'
          });
        }), 'dy');
        //.....................................................................................................
        this.eq((Ωilxt__44 = function() {
          return internals.normalize_regex_flags({
            flags: 'i',
            mode: 'slr'
          });
        }), 'diy');
        this.eq((Ωilxt__45 = function() {
          return internals.normalize_regex_flags({
            flags: 'g',
            mode: 'slr'
          });
        }), 'dgy');
        this.eq((Ωilxt__46 = function() {
          return internals.normalize_regex_flags({
            flags: 'm',
            mode: 'slr'
          });
        }), 'dmy');
        this.eq((Ωilxt__47 = function() {
          return internals.normalize_regex_flags({
            flags: 's',
            mode: 'slr'
          });
        }), 'dsy');
        this.eq((Ωilxt__48 = function() {
          return internals.normalize_regex_flags({
            flags: 'dgimsuvy',
            mode: 'slr'
          });
        }), 'dgimsy');
        //.....................................................................................................
        this.throws((Ωilxt__49 = function() {
          return internals.normalize_regex_flags({
            flags: 'a',
            mode: 'slr'
          });
        }), /illegal or duplicate flags/);
        this.throws((Ωilxt__50 = function() {
          return internals.normalize_regex_flags({
            flags: 'yy',
            mode: 'slr'
          });
        }), /illegal or duplicate flags/);
        //-----------------------------------------------------------------------------------------------------
        this.eq((Ωilxt__51 = function() {
          return internals.normalize_regex(/./);
        }), /./dvy);
        this.eq((Ωilxt__52 = function() {
          return internals.normalize_regex(/./d);
        }), /./dvy);
        this.eq((Ωilxt__53 = function() {
          return internals.normalize_regex(/./y);
        }), /./dvy);
        this.eq((Ωilxt__54 = function() {
          return internals.normalize_regex(/./dy);
        }), /./dvy);
        this.eq((Ωilxt__55 = function() {
          return internals.normalize_regex(/./yd);
        }), /./dvy);
        //.....................................................................................................
        this.eq((Ωilxt__56 = function() {
          return internals.normalize_regex(/./i);
        }), /./divy);
        this.eq((Ωilxt__57 = function() {
          return internals.normalize_regex(/./g);
        }), /./dgvy);
        this.eq((Ωilxt__58 = function() {
          return internals.normalize_regex(/./m);
        }), /./dmvy);
        this.eq((Ωilxt__59 = function() {
          return internals.normalize_regex(/./s);
        }), /./dsvy);
        this.eq((Ωilxt__60 = function() {
          return internals.normalize_regex(/./dgimsvy);
        }), /./dgimsvy);
        this.eq((Ωilxt__61 = function() {
          return internals.normalize_regex(/./dgimsuy);
        }), /./dgimsvy);
        //.....................................................................................................
        this.throws((Ωilxt__62 = function() {
          return internals.normalize_regex();
        }), /expected a regex, got/);
        this.throws((Ωilxt__63 = function() {
          return internals.normalize_regex('helo');
        }), /expected a regex, got/);
        //-----------------------------------------------------------------------------------------------------
        this.eq((Ωilxt__64 = function() {
          return (new_regex_tag(''))`.`;
        }), /./dvy);
        this.eq((Ωilxt__65 = function() {
          return (new_regex_tag('d'))`.`;
        }), /./dvy);
        this.eq((Ωilxt__66 = function() {
          return (new_regex_tag('y'))`.`;
        }), /./dvy);
        this.eq((Ωilxt__67 = function() {
          return (new_regex_tag('dy'))`.`;
        }), /./dvy);
        this.eq((Ωilxt__68 = function() {
          return (new_regex_tag('yd'))`.`;
        }), /./dvy);
        this.eq((Ωilxt__69 = function() {
          return (new_regex_tag('d')).d`.`;
        }), /./dvy);
        this.eq((Ωilxt__70 = function() {
          return (new_regex_tag('y')).y`.`;
        }), /./dvy);
        this.eq((Ωilxt__71 = function() {
          return (new_regex_tag('dy')).dy`.`;
        }), /./dvy);
        this.eq((Ωilxt__72 = function() {
          return (new_regex_tag('yd')).yd`.`;
        }), /./dvy);
        this.eq((Ωilxt__73 = function() {
          return (new_regex_tag('')).d`.`;
        }), /./dvy);
        this.eq((Ωilxt__74 = function() {
          return (new_regex_tag('')).y`.`;
        }), /./dvy);
        this.eq((Ωilxt__75 = function() {
          return (new_regex_tag('')).dy`.`;
        }), /./dvy);
        this.eq((Ωilxt__76 = function() {
          return (new_regex_tag('')).yd`.`;
        }), /./dvy);
        //.....................................................................................................
        this.eq((Ωilxt__77 = function() {
          return (new_regex_tag('')).i`.`;
        }), /./divy);
        this.eq((Ωilxt__78 = function() {
          return (new_regex_tag('')).g`.`;
        }), /./dgvy);
        this.eq((Ωilxt__79 = function() {
          return (new_regex_tag('')).m`.`;
        }), /./dmvy);
        this.eq((Ωilxt__80 = function() {
          return (new_regex_tag('')).s`.`;
        }), /./dsvy);
        this.eq((Ωilxt__81 = function() {
          return (new_regex_tag('')).dgimsvy`.`;
        }), /./dgimsvy);
        this.eq((Ωilxt__82 = function() {
          return (new_regex_tag('')).dgimsuy`.`;
        }), /./dgimsvy);
        //.....................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    basics: {
      //-------------------------------------------------------------------------------------------------------
      simple_1: function() {
        var Grammar, ILX, Level, Lexeme, Token, g, gnd, internals, number_lx, number_tk, number_tk_matcher, rx, Ωilxt_100, Ωilxt_101, Ωilxt_102, Ωilxt_103, Ωilxt_104, Ωilxt_105, Ωilxt_106, Ωilxt_107, Ωilxt_108, Ωilxt_109, Ωilxt_110, Ωilxt_111, Ωilxt_112, Ωilxt_113, Ωilxt_114, Ωilxt_115, Ωilxt_116, Ωilxt_117, Ωilxt_118, Ωilxt_119, Ωilxt_120, Ωilxt_121, Ωilxt__83, Ωilxt__84, Ωilxt__85, Ωilxt__86, Ωilxt__87, Ωilxt__88, Ωilxt__89, Ωilxt__90, Ωilxt__91, Ωilxt__92, Ωilxt__93, Ωilxt__94, Ωilxt__95, Ωilxt__96, Ωilxt__97, Ωilxt__98, Ωilxt__99;
        ILX = require('../../../apps/interlex');
        ({Grammar, Level, Token, Lexeme, rx, internals} = ILX);
        //===========================================================================================================
        g = new Grammar({
          name: 'g'
        });
        gnd = g.new_level({
          name: 'gnd'
        });
        number_tk_matcher = rx`[0-9]+`;
        number_tk = gnd.new_token({
          name: 'number',
          matcher: number_tk_matcher
        });
        number_lx = null;
        //.....................................................................................................
        this.eq((Ωilxt__83 = function() {
          return g.start_level instanceof Level;
        }), true);
        this.eq((Ωilxt__84 = function() {
          return g.start_level;
        }), gnd);
        this.eq((Ωilxt__85 = function() {
          return g.start_level_name;
        }), 'gnd');
        this.eq((Ωilxt__86 = function() {
          return g.name;
        }), 'g');
        this.eq((Ωilxt__87 = function() {
          return g.levels instanceof Object;
        }), true);
        this.eq((Ωilxt__88 = function() {
          return g.levels.gnd;
        }), gnd);
        //.....................................................................................................
        this.eq((Ωilxt__89 = function() {
          return gnd instanceof Level;
        }), true);
        this.eq((Ωilxt__90 = function() {
          return gnd.name;
        }), 'gnd');
        this.eq((Ωilxt__91 = function() {
          return gnd.grammar;
        }), g);
        this.eq((Ωilxt__92 = function() {
          return gnd.tokens instanceof Array;
        }), true);
        this.eq((Ωilxt__93 = function() {
          return gnd.tokens.length;
        }), 1);
        this.eq((Ωilxt__94 = function() {
          return gnd.tokens[0];
        }), number_tk);
        //.....................................................................................................
        this.eq((Ωilxt__95 = function() {
          return number_tk instanceof Token;
        }), true);
        this.eq((Ωilxt__96 = function() {
          return number_tk.name;
        }), 'number');
        this.eq((Ωilxt__97 = function() {
          return number_tk.level;
        }), gnd);
        this.eq((Ωilxt__98 = function() {
          return number_tk.grammar;
        }), g);
        this.eq((Ωilxt__99 = function() {
          return number_tk.matcher;
        }), /[0-9]+/dvy);
        this.eq((Ωilxt_100 = function() {
          return number_tk.matcher.hasIndices;
        }), true);
        this.eq((Ωilxt_101 = function() {
          return number_tk.matcher.sticky;
        }), true);
        this.eq((Ωilxt_102 = function() {
          return number_tk.matcher.unicodeSets;
        }), true);
        this.eq((Ωilxt_103 = function() {
          return number_tk.jump;
        }), null);
        this.eq((Ωilxt_104 = function() {
          return number_tk.jump_spec;
        }), null);
        //.....................................................................................................
        this.eq((Ωilxt_105 = function() {
          return (number_lx = number_tk.match_at(0, '398ä')) != null;
        }), true);
        this.eq((Ωilxt_106 = function() {
          return number_lx instanceof Lexeme;
        }), true);
        this.eq((Ωilxt_107 = function() {
          return number_lx.name;
        }), 'number');
        this.eq((Ωilxt_108 = function() {
          return number_lx.fqname;
        }), 'gnd.number');
        this.eq((Ωilxt_109 = function() {
          return number_lx.level;
        }), gnd);
        this.eq((Ωilxt_110 = function() {
          return number_lx.hit;
        }), '398');
        this.eq((Ωilxt_111 = function() {
          return number_lx.start;
        }), 0);
        this.eq((Ωilxt_112 = function() {
          return number_lx.stop;
        }), 3);
        //.....................................................................................................
        this.eq((Ωilxt_113 = function() {
          return (number_lx = number_tk.match_at(7, 'abcdefgh00102xyz')) != null;
        }), false);
        this.eq((Ωilxt_114 = function() {
          return (number_lx = number_tk.match_at(8, 'abcdefgh00102xyz')) != null;
        }), true);
        this.eq((Ωilxt_115 = function() {
          return number_lx instanceof Lexeme;
        }), true);
        this.eq((Ωilxt_116 = function() {
          return number_lx.name;
        }), 'number');
        this.eq((Ωilxt_117 = function() {
          return number_lx.fqname;
        }), 'gnd.number');
        this.eq((Ωilxt_118 = function() {
          return number_lx.level;
        }), gnd);
        this.eq((Ωilxt_119 = function() {
          return number_lx.hit;
        }), '00102');
        this.eq((Ωilxt_120 = function() {
          return number_lx.start;
        }), 8);
        this.eq((Ωilxt_121 = function() {
          return number_lx.stop;
        }), 13);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      new_regex_tag: function() {
        var internals, new_regex_tag, regex, rx, Ωilxt_122, Ωilxt_123, Ωilxt_124, Ωilxt_125, Ωilxt_126, Ωilxt_127, Ωilxt_128, Ωilxt_129, Ωilxt_130, Ωilxt_131, Ωilxt_132;
        ({rx, regex, internals, new_regex_tag} = require('../../../apps/interlex'));
        //.....................................................................................................
        this.eq((Ωilxt_122 = function() {
          return typeof new_regex_tag('dy');
        }), 'function');
        this.eq((Ωilxt_123 = function() {
          return typeof (new_regex_tag('dy')).si;
        }), 'function');
        this.eq((Ωilxt_124 = function() {
          return ((new_regex_tag('dyis'))`[a-z]`) instanceof RegExp;
        }), true);
        //.....................................................................................................
        this.eq((Ωilxt_125 = function() {
          return (new_regex_tag('dyis'))`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_126 = function() {
          return (new_regex_tag('dy')).si`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_127 = function() {
          return (new_regex_tag('dys')).si`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_128 = function() {
          return (new_regex_tag('dys')).i`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_129 = function() {
          return (new_regex_tag('dysi'))`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_130 = function() {
          return (new_regex_tag('v')).si`[a-z]`;
        }), /[a-z]/disvy);
        //.....................................................................................................
        this.throws((Ωilxt_131 = function() {
          return (new_regex_tag('dy')).ab`[a-z]`;
        }), /illegal or duplicate flags/);
        this.throws((Ωilxt_132 = function() {
          return (new_regex_tag('dyab'))`[a-z]`;
        }), /illegal or duplicate flags/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      normalize_regex: function() {
        var internals, normalize_regex, Ωilxt_133, Ωilxt_134, Ωilxt_135, Ωilxt_136, Ωilxt_137, Ωilxt_138, Ωilxt_139;
        ({internals} = require('../../../apps/interlex'));
        ({normalize_regex} = internals);
        this.eq((Ωilxt_133 = function() {
          return typeof normalize_regex;
        }), 'function');
        this.eq((Ωilxt_134 = function() {
          return normalize_regex(/[a-z]/ig);
        }), /[a-z]/dgivy);
        this.eq((Ωilxt_135 = function() {
          return normalize_regex(/[a-z]/i);
        }), /[a-z]/divy);
        this.eq((Ωilxt_136 = function() {
          return normalize_regex(/[a-z]/u);
        }), /[a-z]/dvy);
        this.eq((Ωilxt_137 = function() {
          return normalize_regex(/[a-z]/gv);
        }), /[a-z]/dgvy);
        this.eq((Ωilxt_138 = function() {
          return normalize_regex(/[a-z]/gu);
        }), /[a-z]/dgvy);
        this.eq((Ωilxt_139 = function() {
          return normalize_regex(/[a-z]/v);
        }), /[a-z]/dvy);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      rx_flags: function() {
        var rx, Ωilxt_140, Ωilxt_141, Ωilxt_143, Ωilxt_144;
        ({rx} = require('../../../apps/interlex'));
        this.eq((Ωilxt_140 = function() {
          return (rx`x`).flags;
        }), 'dvy');
        this.eq((Ωilxt_141 = function() {
          return (rx.si`x`).flags;
        }), 'disvy');
        // @eq ( Ωilxt_142 = -> ( rx.sidvy"x"  ).flags ), 'disvy'
        this.eq((Ωilxt_143 = function() {
          return (rx.y`x`).flags;
        }), 'dvy');
        this.eq((Ωilxt_144 = function() {
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
          var g, lexemes, matcher, probe, probes_and_matchers, x, Ωilxt_145, Ωilxt_146, Ωilxt_147, Ωilxt_148, Ωilxt_151;
          g = new_grammar();
          this.eq((Ωilxt_145 = function() {
            return g.cfg.counter_name;
          }), 'line_nr');
          this.eq((Ωilxt_146 = function() {
            return g.cfg.counter_step;
          }), +1);
          this.eq((Ωilxt_147 = function() {
            return g.cfg.counter_value;
          }), 1);
          this.eq((Ωilxt_148 = function() {
            return g.state.count;
          }), 1);
          probes_and_matchers = [["1st line", 1], ["2nd line", 2], ["3rd line", 3], ["4th line (and EOF)", 4]];
//...................................................................................................
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            info('Ωilxt_149', rpr(probe));
            lexemes = g.get_lexemes(probe);
            urge('Ωilxt_150', lexemes);
            this.eq((Ωilxt_151 = function() {
              return lexemes[0].line_nr;
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, matcher, probe, probes_and_matchers, x, Ωilxt_152, Ωilxt_153, Ωilxt_154, Ωilxt_155, Ωilxt_161;
          g = new_grammar({
            counter_name: 'test_id',
            counter_step: -1,
            counter_value: 10
          });
          this.eq((Ωilxt_152 = function() {
            return g.cfg.counter_name;
          }), 'test_id');
          this.eq((Ωilxt_153 = function() {
            return g.cfg.counter_step;
          }), -1);
          this.eq((Ωilxt_154 = function() {
            return g.cfg.counter_value;
          }), 10);
          this.eq((Ωilxt_155 = function() {
            return g.state.count;
          }), 10);
          probes_and_matchers = [["1st line", 10], ["2nd line", 9], ["3rd line", 8], ["4th line (and EOF)", 7]];
//...................................................................................................
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            info('Ωilxt_156', rpr(probe));
            lexemes = g.get_lexemes(probe);
            // urge 'Ωilxt_157', lexemes
            urge('Ωilxt_158', g);
            urge('Ωilxt_159', g.cfg);
            urge('Ωilxt_160', g.state);
            this.eq((Ωilxt_161 = function() {
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
        var Grammar, probes_and_matchers, rx, test;
        ({Grammar, rx} = require('../../../apps/interlex'));
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
          var lexemes, matcher, probe, x, Ωilxt_162, Ωilxt_163, Ωilxt_164;
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            g.reset_count();
            lexemes = g.get_lexemes(probe);
            this.eq((Ωilxt_162 = function() {
              return condense_lexemes(lexemes);
            }), matcher.condensed);
            this.eq((Ωilxt_163 = function() {
              return lexemes.length;
            }), matcher.length);
            g.reset_count();
            this.eq((Ωilxt_164 = function() {
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
    // #-------------------------------------------------------------------------------------------------------
    // can_use_zero_length_matchers: ->
    //   { Grammar
    //     rx      } = require '../../../apps/interlex'
    //   #-----------------------------------------------------------------------------------------------------
    //   probes_and_matchers = [
    //     [ "Alice has 431 owls",           { length: 3, condensed: "gnd.ordinal'1st'|gnd.ws' '|gnd.word'line'", }, ]
    //     ]
    //   #-----------------------------------------------------------------------------------------------------
    //   test = ( g ) =>
    //     for [ probe, matcher, ] from probes_and_matchers
    //       g.reset_count()
    //       lexemes = g.get_lexemes probe
    //       @eq ( Ωilxt_165 = -> condense_lexemes lexemes ), matcher.condensed
    //       @eq ( Ωilxt_166 = -> lexemes.length ), matcher.length
    //       g.reset_count()
    //       @eq ( Ωilxt_167 = -> [ ( g.walk_lexemes probe )..., ] ), lexemes
    //     return null
    //   #-----------------------------------------------------------------------------------------------------
    //   do =>
    //     g         = new Grammar { name: 'g', }
    //     gnd       = g.new_level { name: 'gnd', }
    //     #...................................................................................................
    //     gnd.new_token { name: 'letters',          matcher: /[a-z]+/i,       }
    //     gnd.new_token { name: 'before_digits',    matcher: /(?<![0-9])(?=[0-9])/i,    }
    //     gnd.new_token { name: 'digits',           matcher: /[0-9]+/i,       }
    //     gnd.new_token { name: 'ws',               matcher: /\s+/i,          }
    //     #...................................................................................................
    //     # test g
    //     source = probes_and_matchers[ 0 ][ 0 ]
    //     # for lexeme from g.walk_lexemes source
    //     #   # info 'Ωilxt_168', condense_lexemes [ lexeme]
    //     #   urge 'Ωilxt_169', f"#{lexeme.name}:<15c;#{rpr lexeme.hit}:<20c;"
    //     urge 'Ωilxt_170', condense_lexemes gnd.match_all_at 10, source
    //   #.....................................................................................................
    //   return null

    //=========================================================================================================
    strategies: {
      //-------------------------------------------------------------------------------------------------------
      levels_implement_strategies: function() {
        var Grammar;
        ({Grammar} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          /* strategy 'first', shortest tokens first */
          var first, g, i, len, matcher, position, probes_and_matchers, source, Ωilxt_171;
          probes_and_matchers = [[[0, 'abcd1234'], "first.one_letter'a'"], [[1, 'abcd1234'], "first.one_letter'b'"], [[2, 'abcd1234'], "first.one_letter'c'"], [[3, 'abcd1234'], "first.one_letter'd'"], [[4, 'abcd1234'], "first.one_digit'1'"], [[5, 'abcd1234'], "first.one_digit'2'"], [[0, '123abc'], "first.one_digit'1'"], [[1, '123abc'], "first.one_digit'2'"], [[2, '123abc'], "first.one_digit'3'"], [[3, '123abc'], "first.one_letter'a'"], [[4, '123abc'], "first.one_letter'b'"], [[5, '123abc'], "first.one_letter'c'"]];
          //...................................................................................................
          g = new Grammar();
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'one_digit',
            matcher: /[0-9]{1}/i
          });
          first.new_token({
            name: 'two_digits',
            matcher: /[0-9]{2}/i
          });
          first.new_token({
            name: 'three_digits',
            matcher: /[0-9]{3}/i
          });
          first.new_token({
            name: 'four_digits',
            matcher: /[0-9]{4}/i
          });
          first.new_token({
            name: 'one_letter',
            matcher: /[a-z]{1}/i
          });
          first.new_token({
            name: 'two_letters',
            matcher: /[a-z]{2}/i
          });
          first.new_token({
            name: 'three_letters',
            matcher: /[a-z]{3}/i
          });
          first.new_token({
            name: 'four_letters',
            matcher: /[a-z]{4}/i
          });
//.....................................................................................................
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [[position, source], matcher] = probes_and_matchers[i];
            this.eq((Ωilxt_171 = function() {
              return condense_lexemes(first.match_first_at(position, source));
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'first', longest tokens first */
          var first, g, i, len, matcher, position, probes_and_matchers, source, Ωilxt_172;
          probes_and_matchers = [[[0, 'abcd1234'], "first.four_letters'abcd'"], [[1, 'abcd1234'], "first.three_letters'bcd'"], [[2, 'abcd1234'], "first.two_letters'cd'"], [[3, 'abcd1234'], "first.one_letter'd'"], [[4, 'abcd1234'], "first.four_digits'1234'"], [[5, 'abcd1234'], "first.three_digits'234'"], [[0, '123abc'], "first.three_digits'123'"], [[1, '123abc'], "first.two_digits'23'"], [[2, '123abc'], "first.one_digit'3'"], [[3, '123abc'], "first.three_letters'abc'"], [[4, '123abc'], "first.two_letters'bc'"], [[5, '123abc'], "first.one_letter'c'"]];
          //...................................................................................................
          g = new Grammar();
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'four_digits',
            matcher: /[0-9]{4}/i
          });
          first.new_token({
            name: 'three_digits',
            matcher: /[0-9]{3}/i
          });
          first.new_token({
            name: 'two_digits',
            matcher: /[0-9]{2}/i
          });
          first.new_token({
            name: 'one_digit',
            matcher: /[0-9]{1}/i
          });
          first.new_token({
            name: 'four_letters',
            matcher: /[a-z]{4}/i
          });
          first.new_token({
            name: 'three_letters',
            matcher: /[a-z]{3}/i
          });
          first.new_token({
            name: 'two_letters',
            matcher: /[a-z]{2}/i
          });
          first.new_token({
            name: 'one_letter',
            matcher: /[a-z]{1}/i
          });
//.....................................................................................................
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [[position, source], matcher] = probes_and_matchers[i];
            this.eq((Ωilxt_172 = function() {
              return condense_lexemes(first.match_first_at(position, source));
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'longest', shortest tokens first */
          var first, g, i, len, matcher, position, probes_and_matchers, source, Ωilxt_173;
          probes_and_matchers = [[[0, 'abcd1234'], "first.four_letters'abcd'"], [[1, 'abcd1234'], "first.three_letters'bcd'"], [[2, 'abcd1234'], "first.two_letters'cd'"], [[3, 'abcd1234'], "first.one_letter'd'"], [[4, 'abcd1234'], "first.four_digits'1234'"], [[5, 'abcd1234'], "first.three_digits'234'"], [[0, '123abc'], "first.three_digits'123'"], [[1, '123abc'], "first.two_digits'23'"], [[2, '123abc'], "first.one_digit'3'"], [[3, '123abc'], "first.three_letters'abc'"], [[4, '123abc'], "first.two_letters'bc'"], [[5, '123abc'], "first.one_letter'c'"]];
          //...................................................................................................
          g = new Grammar();
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'one_digit',
            matcher: /[0-9]{1}/i
          });
          first.new_token({
            name: 'two_digits',
            matcher: /[0-9]{2}/i
          });
          first.new_token({
            name: 'three_digits',
            matcher: /[0-9]{3}/i
          });
          first.new_token({
            name: 'four_digits',
            matcher: /[0-9]{4}/i
          });
          first.new_token({
            name: 'one_letter',
            matcher: /[a-z]{1}/i
          });
          first.new_token({
            name: 'two_letters',
            matcher: /[a-z]{2}/i
          });
          first.new_token({
            name: 'three_letters',
            matcher: /[a-z]{3}/i
          });
          first.new_token({
            name: 'four_letters',
            matcher: /[a-z]{4}/i
          });
//.....................................................................................................
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [[position, source], matcher] = probes_and_matchers[i];
            this.eq((Ωilxt_173 = function() {
              return condense_lexemes(first.match_longest_at(position, source));
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'longest', longest tokens first */
          var first, g, i, len, matcher, position, probes_and_matchers, source, Ωilxt_174;
          probes_and_matchers = [[[0, 'abcd1234'], "first.four_letters'abcd'"], [[1, 'abcd1234'], "first.three_letters'bcd'"], [[2, 'abcd1234'], "first.two_letters'cd'"], [[3, 'abcd1234'], "first.one_letter'd'"], [[4, 'abcd1234'], "first.four_digits'1234'"], [[5, 'abcd1234'], "first.three_digits'234'"], [[0, '123abc'], "first.three_digits'123'"], [[1, '123abc'], "first.two_digits'23'"], [[2, '123abc'], "first.one_digit'3'"], [[3, '123abc'], "first.three_letters'abc'"], [[4, '123abc'], "first.two_letters'bc'"], [[5, '123abc'], "first.one_letter'c'"]];
          //...................................................................................................
          g = new Grammar();
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'four_digits',
            matcher: /[0-9]{4}/i
          });
          first.new_token({
            name: 'three_digits',
            matcher: /[0-9]{3}/i
          });
          first.new_token({
            name: 'two_digits',
            matcher: /[0-9]{2}/i
          });
          first.new_token({
            name: 'one_digit',
            matcher: /[0-9]{1}/i
          });
          first.new_token({
            name: 'four_letters',
            matcher: /[a-z]{4}/i
          });
          first.new_token({
            name: 'three_letters',
            matcher: /[a-z]{3}/i
          });
          first.new_token({
            name: 'two_letters',
            matcher: /[a-z]{2}/i
          });
          first.new_token({
            name: 'one_letter',
            matcher: /[a-z]{1}/i
          });
//.....................................................................................................
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [[position, source], matcher] = probes_and_matchers[i];
            this.eq((Ωilxt_174 = function() {
              return condense_lexemes(first.match_longest_at(position, source));
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'longest', scrambled tokens */
          var _, i, probes_and_matchers, shuffle;
          probes_and_matchers = [[[0, 'abcd1234'], "first.four_letters'abcd'"], [[1, 'abcd1234'], "first.three_letters'bcd'"], [[2, 'abcd1234'], "first.two_letters'cd'"], [[3, 'abcd1234'], "first.one_letter'd'"], [[4, 'abcd1234'], "first.four_digits'1234'"], [[5, 'abcd1234'], "first.three_digits'234'"], [[0, '123abc'], "first.three_digits'123'"], [[1, '123abc'], "first.two_digits'23'"], [[2, '123abc'], "first.one_digit'3'"], [[3, '123abc'], "first.three_letters'abc'"], [[4, '123abc'], "first.two_letters'bc'"], [[5, '123abc'], "first.one_letter'c'"]];
          //...................................................................................................
          shuffle = GUY.rnd.get_shuffle(0.9876, 0.3456);
          for (_ = i = 1; i <= 100; _ = ++i) {
            (() => {
              var first, g, j, k, len, len1, matcher, position, source, token_cfg, token_cfgs, Ωilxt_175;
              g = new Grammar();
              first = g.new_level({
                name: 'first'
              });
              token_cfgs = shuffle([
                {
                  name: 'one_digit',
                  matcher: /[0-9]{1}/i
                },
                {
                  name: 'two_digits',
                  matcher: /[0-9]{2}/i
                },
                {
                  name: 'three_digits',
                  matcher: /[0-9]{3}/i
                },
                {
                  name: 'four_digits',
                  matcher: /[0-9]{4}/i
                },
                {
                  name: 'one_letter',
                  matcher: /[a-z]{1}/i
                },
                {
                  name: 'two_letters',
                  matcher: /[a-z]{2}/i
                },
                {
                  name: 'three_letters',
                  matcher: /[a-z]{3}/i
                },
                {
                  name: 'four_letters',
                  matcher: /[a-z]{4}/i
                }
              ]);
              for (j = 0, len = token_cfgs.length; j < len; j++) {
                token_cfg = token_cfgs[j];
                first.new_token(token_cfg);
              }
//...............................................................................................
              for (k = 0, len1 = probes_and_matchers.length; k < len1; k++) {
                [[position, source], matcher] = probes_and_matchers[k];
                this.eq((Ωilxt_175 = function() {
                  return condense_lexemes(first.match_longest_at(position, source));
                }), matcher);
              }
              //...............................................................................................
              return null;
            })();
          }
          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      grammars_use_strategies: function() {
        var Grammar;
        ({Grammar} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          /* strategy 'longest', scrambled tokens */
          var _, i, probes_and_matchers, shuffle;
          probes_and_matchers = [['abcd1234', "first.four_letters'abcd'|first.four_digits'1234'"], ['abcdefgh1234567890', "first.four_letters'abcd'|first.four_letters'efgh'|first.four_digits'1234'|first.four_digits'5678'|first.two_digits'90'"], ['abcdefg123456789', "first.four_letters'abcd'|first.three_letters'efg'|first.four_digits'1234'|first.four_digits'5678'|first.one_digit'9'"], ['123abc', "first.three_digits'123'|first.three_letters'abc'"]];
          //.....................................................................................................
          shuffle = GUY.rnd.get_shuffle(0.9876, 0.3456);
          for (_ = i = 1; i <= 100; _ = ++i) {
            (() => {
              var first, g, j, k, len, len1, matcher, source, token_cfg, token_cfgs, Ωilxt_176, Ωilxt_177, Ωilxt_178;
              g = new Grammar({
                strategy: 'longest'
              });
              first = g.new_level({
                name: 'first'
              });
              token_cfgs = shuffle([
                {
                  name: 'one_digit',
                  matcher: /[0-9]{1}/i
                },
                {
                  name: 'two_digits',
                  matcher: /[0-9]{2}/i
                },
                {
                  name: 'three_digits',
                  matcher: /[0-9]{3}/i
                },
                {
                  name: 'four_digits',
                  matcher: /[0-9]{4}/i
                },
                {
                  name: 'one_letter',
                  matcher: /[a-z]{1}/i
                },
                {
                  name: 'two_letters',
                  matcher: /[a-z]{2}/i
                },
                {
                  name: 'three_letters',
                  matcher: /[a-z]{3}/i
                },
                {
                  name: 'four_letters',
                  matcher: /[a-z]{4}/i
                }
              ]);
              for (j = 0, len = token_cfgs.length; j < len; j++) {
                token_cfg = token_cfgs[j];
                first.new_token(token_cfg);
              }
              //...............................................................................................
              this.eq((Ωilxt_176 = function() {
                return g.cfg.strategy;
              }), 'longest');
              this.eq((Ωilxt_177 = function() {
                return first.strategy;
              }), 'longest');
              for (k = 0, len1 = probes_and_matchers.length; k < len1; k++) {
                [source, matcher] = probes_and_matchers[k];
                this.eq((Ωilxt_178 = function() {
                  return condense_lexemes(g.get_lexemes(source));
                }), matcher);
              }
              //...............................................................................................
              return null;
            })();
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'first', scrambled tokens */
          var first, g, i, len, matcher, probes_and_matchers, source, Ωilxt_179, Ωilxt_180, Ωilxt_181;
          probes_and_matchers = [['abcd1234', "first.two_letters'ab'|first.two_letters'cd'|first.one_digit'1'|first.one_digit'2'|first.one_digit'3'|first.one_digit'4'"], ['abcde12345', "first.two_letters'ab'|first.two_letters'cd'|first.one_letter'e'|first.one_digit'1'|first.one_digit'2'|first.one_digit'3'|first.one_digit'4'|first.one_digit'5'"], ['abcdef123456', "first.two_letters'ab'|first.two_letters'cd'|first.two_letters'ef'|first.one_digit'1'|first.one_digit'2'|first.one_digit'3'|first.one_digit'4'|first.one_digit'5'|first.one_digit'6'"], ['123abc', "first.one_digit'1'|first.one_digit'2'|first.one_digit'3'|first.two_letters'ab'|first.one_letter'c'"]];
          //...................................................................................................
          g = new Grammar({
            strategy: 'first'
          });
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'two_letters',
            matcher: /[a-z]{2}/i
          });
          first.new_token({
            name: 'one_digit',
            matcher: /[0-9]{1}/i
          });
          first.new_token({
            name: 'three_digits',
            matcher: /[0-9]{3}/i
          });
          first.new_token({
            name: 'four_digits',
            matcher: /[0-9]{4}/i
          });
          first.new_token({
            name: 'two_digits',
            matcher: /[0-9]{2}/i
          });
          first.new_token({
            name: 'one_letter',
            matcher: /[a-z]{1}/i
          });
          first.new_token({
            name: 'four_letters',
            matcher: /[a-z]{4}/i
          });
          first.new_token({
            name: 'three_letters',
            matcher: /[a-z]{3}/i
          });
          //...................................................................................................
          this.eq((Ωilxt_179 = function() {
            return g.cfg.strategy;
          }), 'first');
          this.eq((Ωilxt_180 = function() {
            return first.strategy;
          }), 'first');
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [source, matcher] = probes_and_matchers[i];
            this.eq((Ωilxt_181 = function() {
              return condense_lexemes(g.get_lexemes(source));
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'first', long tokens first */
          var first, g, i, len, matcher, probes_and_matchers, source, Ωilxt_182, Ωilxt_183, Ωilxt_184;
          probes_and_matchers = [['abcd1234', "first.four_letters'abcd'|first.four_digits'1234'"], ['abcde12345', "first.four_letters'abcd'|first.one_letter'e'|first.four_digits'1234'|first.one_digit'5'"], ['abcdef123456', "first.four_letters'abcd'|first.two_letters'ef'|first.four_digits'1234'|first.two_digits'56'"], ['123abc', "first.three_digits'123'|first.three_letters'abc'"]];
          //...................................................................................................
          g = new Grammar({
            strategy: 'first'
          });
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'four_letters',
            matcher: /[a-z]{4}/i
          });
          first.new_token({
            name: 'three_letters',
            matcher: /[a-z]{3}/i
          });
          first.new_token({
            name: 'two_letters',
            matcher: /[a-z]{2}/i
          });
          first.new_token({
            name: 'one_letter',
            matcher: /[a-z]{1}/i
          });
          first.new_token({
            name: 'four_digits',
            matcher: /[0-9]{4}/i
          });
          first.new_token({
            name: 'three_digits',
            matcher: /[0-9]{3}/i
          });
          first.new_token({
            name: 'two_digits',
            matcher: /[0-9]{2}/i
          });
          first.new_token({
            name: 'one_digit',
            matcher: /[0-9]{1}/i
          });
          //...................................................................................................
          this.eq((Ωilxt_182 = function() {
            return g.cfg.strategy;
          }), 'first');
          this.eq((Ωilxt_183 = function() {
            return first.strategy;
          }), 'first');
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [source, matcher] = probes_and_matchers[i];
            this.eq((Ωilxt_184 = function() {
              return condense_lexemes(g.get_lexemes(source));
            }), matcher);
          }
          return null;
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
        // debug 'Ωilxt_185', [ string11, string12, ]
        // console.debug 'Ωilxt_186', [ string11, string12, ]
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
        debug('Ωilxt_187', g);
        debug('Ωilxt_188', g.levels);
        debug('Ωilxt_189', g.levels.gnd);
        debug('Ωilxt_190', g.levels.gnd.tokens);
        debug('Ωilxt_191', gnd);
        for (token of gnd) {
          debug('Ωilxt_192', token);
        }
        //.........................................................................................................
        show_lexeme = function(lexeme) {
          var fqname, groups, groups_rpr, hit, jump, jump_rpr, jump_spec, name, start, stop;
          ({name, fqname, start, stop, hit, jump, jump_spec, groups} = lexeme);
          groups_rpr = groups != null ? rpr({...groups}) : '';
          jump_rpr = jump_spec != null ? jump_spec : '';
          return urge('Ωilxt_193', f`${start}:>3.0f;:${stop}:<3.0f; ${fqname}:<20c; ${rpr(hit)}:<30c; ${jump_rpr}:<15c; ${groups_rpr}`);
        };
        //.........................................................................................................
        sources = ["Alice in Cairo 1912 (approximately)", "Alice in Cairo 1912 'approximately'"];
//.........................................................................................................
        for (source of sources) {
          info('Ωilxt_194', rpr(source));
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
      (new Test({
        throw_on_error: true
      })).test(this.interlex_tasks);
      (() => {})();      // ( new Test { throw_on_error: false, } ).test @interlex_tasks
      // ( new Test { throw_on_error: true, } ).test { regexes: @interlex_tasks.basics.regexes, }
      // ( new Test { throw_on_error: true, } ).test { new_implementation: @interlex_tasks.regexes.new_implementation, }
      // ( new Test { throw_on_error: true, } ).test { can_use_zero_length_matchers: @interlex_tasks.basics.can_use_zero_length_matchers, }
      // ( new Test { throw_on_error: true, } ).test { sort_lexemes_by_length_dec: @interlex_tasks.internals.sort_lexemes_by_length_dec, }
      // ( new Test { throw_on_error: true, } ).test { demo: @interlex_tasks.demo.demo, }
      // demo()
      // demo_jsidentifier()
      return f = function() {
        var match;
        help('Ωilxt_195', Array.from('a🈯z'));
        help('Ωilxt_196', 'a🈯z'.split(/(.)/u));
        help('Ωilxt_197', 'a🈯z'.split(/(.)/v));
        help('Ωilxt_198', 'a🈯z'.split(/(.)/d));
        help('Ωilxt_199', match = 'a🈯z'.match(/^(?<head>[a-z]+)(?<other>[^a-z]+)(?<tail>[a-z]+)/d));
        help('Ωilxt_200', {...match.groups});
        return help('Ωilxt_201', {...match.indices.groups});
      };
    })();
  }

  // help 'Ωilxt_202', rx"."
// help 'Ωilxt_203', rx/./

}).call(this);

//# sourceMappingURL=test-basics.js.map