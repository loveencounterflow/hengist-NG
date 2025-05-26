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
        var internals, jsid_anchored_re, jsid_re, slevithan_regex, Ωilxt___1, Ωilxt___2, Ωilxt___3, Ωilxt___4, Ωilxt___5, Ωilxt___6, Ωilxt___7;
        // { partial, regex, }       = require '../../../apps/interlex/node_modules/regex'
        // _jsid_re = regex""" ^ [ $ _ \p{ID_Start} ] [ $ _ \u200C \u200D \p{ID_Continue} ]* $ """
        ({internals} = require('../../../apps/interlex'));
        ({slevithan_regex, jsid_re} = internals);
        jsid_anchored_re = slevithan_regex.regex`^${jsid_re}$`;
        this.eq((Ωilxt___1 = function() {
          return jsid_anchored_re.flags;
        }), 'v');
        this.eq((Ωilxt___2 = function() {
          return ('_abc3'.match(jsid_anchored_re)) != null;
        }), true);
        this.eq((Ωilxt___3 = function() {
          return ('_abc$'.match(jsid_anchored_re)) != null;
        }), true);
        this.eq((Ωilxt___4 = function() {
          return ('$abc'.match(jsid_anchored_re)) != null;
        }), true);
        this.eq((Ωilxt___5 = function() {
          return ('abc'.match(jsid_anchored_re)) != null;
        }), true);
        this.eq((Ωilxt___6 = function() {
          return ('3_abc'.match(jsid_anchored_re)) != null;
        }), false);
        this.eq((Ωilxt___7 = function() {
          return ('&%'.match(jsid_anchored_re)) != null;
        }), false);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      sort_lexemes_by_length_dec: function() {
        var internals, Ωilxt__10, Ωilxt__11, Ωilxt__12, Ωilxt__13, Ωilxt__14, Ωilxt__15, Ωilxt__16, Ωilxt___8, Ωilxt___9;
        ({internals} = require('../../../apps/interlex'));
        //.....................................................................................................
        this.eq((Ωilxt___8 = function() {
          return internals.sort_lexemes_by_length_dec([]);
        }), []);
        this.eq((Ωilxt___9 = function() {
          return internals.sort_lexemes_by_length_dec(['1']);
        }), ['1']);
        this.eq((Ωilxt__10 = function() {
          return internals.sort_lexemes_by_length_dec(['1', 'i']);
        }), ['1', 'i']);
        this.eq((Ωilxt__11 = function() {
          return internals.sort_lexemes_by_length_dec(['1', '123', '1', '1234']);
        }), ['1234', '123', '1', '1']);
        this.eq((Ωilxt__12 = function() {
          return internals.sort_lexemes_by_length_dec(['abcd', '1234', '1', '123', 'i']);
        }), ['abcd', '1234', '123', '1', 'i']);
        this.eq((Ωilxt__13 = function() {
          return internals.sort_lexemes_by_length_dec(['1234', 'abcd', '1', '123', 'i']);
        }), ['1234', 'abcd', '123', '1', 'i']);
        this.eq((Ωilxt__14 = function() {
          return internals.sort_lexemes_by_length_dec(['1234', '1', 'abcd', '123', 'i']);
        }), ['1234', 'abcd', '123', '1', 'i']);
        this.eq((Ωilxt__15 = function() {
          return internals.sort_lexemes_by_length_dec(['1234', '1', '123', 'abcd', 'i']);
        }), ['1234', 'abcd', '123', '1', 'i']);
        this.eq((Ωilxt__16 = function() {
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
        var internals, new_regex_tag, rx, Ωilxt__17, Ωilxt__18, Ωilxt__19, Ωilxt__20, Ωilxt__21, Ωilxt__22, Ωilxt__23, Ωilxt__24, Ωilxt__25, Ωilxt__26, Ωilxt__27, Ωilxt__28, Ωilxt__29, Ωilxt__30, Ωilxt__31, Ωilxt__32, Ωilxt__33, Ωilxt__34, Ωilxt__35, Ωilxt__36, Ωilxt__37, Ωilxt__38, Ωilxt__39, Ωilxt__40, Ωilxt__41, Ωilxt__42, Ωilxt__43, Ωilxt__44, Ωilxt__45, Ωilxt__46, Ωilxt__47, Ωilxt__48, Ωilxt__49, Ωilxt__50, Ωilxt__51, Ωilxt__52, Ωilxt__53, Ωilxt__54, Ωilxt__55, Ωilxt__56, Ωilxt__57, Ωilxt__58, Ωilxt__59, Ωilxt__60, Ωilxt__61, Ωilxt__62, Ωilxt__63;
        ({rx, new_regex_tag, internals} = require('../../../apps/interlex'));
        //=====================================================================================================
        this.throws((Ωilxt__17 = function() {
          return internals.normalize_regex_flags();
        }), /Cannot destructure property 'flags'/);
        this.throws((Ωilxt__18 = function() {
          return internals.normalize_regex_flags(void 0);
        }), /Cannot destructure property 'flags'/);
        this.throws((Ωilxt__19 = function() {
          return internals.normalize_regex_flags(null);
        }), /Cannot destructure property 'flags'/);
        this.eq((Ωilxt__20 = function() {
          return internals.normalize_regex_flags({
            flags: '',
            mode: 'slr'
          });
        }), 'dy');
        this.eq((Ωilxt__21 = function() {
          return internals.normalize_regex_flags({
            flags: 'd',
            mode: 'slr'
          });
        }), 'dy');
        this.eq((Ωilxt__22 = function() {
          return internals.normalize_regex_flags({
            flags: 'y',
            mode: 'slr'
          });
        }), 'dy');
        this.eq((Ωilxt__23 = function() {
          return internals.normalize_regex_flags({
            flags: 'dy',
            mode: 'slr'
          });
        }), 'dy');
        this.eq((Ωilxt__24 = function() {
          return internals.normalize_regex_flags({
            flags: 'yd',
            mode: 'slr'
          });
        }), 'dy');
        //.....................................................................................................
        this.eq((Ωilxt__25 = function() {
          return internals.normalize_regex_flags({
            flags: 'i',
            mode: 'slr'
          });
        }), 'diy');
        this.eq((Ωilxt__26 = function() {
          return internals.normalize_regex_flags({
            flags: 'g',
            mode: 'slr'
          });
        }), 'dgy');
        this.eq((Ωilxt__27 = function() {
          return internals.normalize_regex_flags({
            flags: 'm',
            mode: 'slr'
          });
        }), 'dmy');
        this.eq((Ωilxt__28 = function() {
          return internals.normalize_regex_flags({
            flags: 's',
            mode: 'slr'
          });
        }), 'dsy');
        this.eq((Ωilxt__29 = function() {
          return internals.normalize_regex_flags({
            flags: 'dgimsuvy',
            mode: 'slr'
          });
        }), 'dgimsy');
        //.....................................................................................................
        this.throws((Ωilxt__30 = function() {
          return internals.normalize_regex_flags({
            flags: 'a',
            mode: 'slr'
          });
        }), /illegal or duplicate flags/);
        this.throws((Ωilxt__31 = function() {
          return internals.normalize_regex_flags({
            flags: 'yy',
            mode: 'slr'
          });
        }), /illegal or duplicate flags/);
        //-----------------------------------------------------------------------------------------------------
        this.eq((Ωilxt__32 = function() {
          return internals.normalize_regex(/./);
        }), /./dvy);
        this.eq((Ωilxt__33 = function() {
          return internals.normalize_regex(/./d);
        }), /./dvy);
        this.eq((Ωilxt__34 = function() {
          return internals.normalize_regex(/./y);
        }), /./dvy);
        this.eq((Ωilxt__35 = function() {
          return internals.normalize_regex(/./dy);
        }), /./dvy);
        this.eq((Ωilxt__36 = function() {
          return internals.normalize_regex(/./yd);
        }), /./dvy);
        //.....................................................................................................
        this.eq((Ωilxt__37 = function() {
          return internals.normalize_regex(/./i);
        }), /./divy);
        this.eq((Ωilxt__38 = function() {
          return internals.normalize_regex(/./g);
        }), /./dgvy);
        this.eq((Ωilxt__39 = function() {
          return internals.normalize_regex(/./m);
        }), /./dmvy);
        this.eq((Ωilxt__40 = function() {
          return internals.normalize_regex(/./s);
        }), /./dsvy);
        this.eq((Ωilxt__41 = function() {
          return internals.normalize_regex(/./dgimsvy);
        }), /./dgimsvy);
        this.eq((Ωilxt__42 = function() {
          return internals.normalize_regex(/./dgimsuy);
        }), /./dgimsvy);
        //.....................................................................................................
        this.throws((Ωilxt__43 = function() {
          return internals.normalize_regex();
        }), /expected a regex, got/);
        this.throws((Ωilxt__44 = function() {
          return internals.normalize_regex('helo');
        }), /expected a regex, got/);
        //-----------------------------------------------------------------------------------------------------
        this.eq((Ωilxt__45 = function() {
          return (new_regex_tag(''))`.`;
        }), /./dvy);
        this.eq((Ωilxt__46 = function() {
          return (new_regex_tag('d'))`.`;
        }), /./dvy);
        this.eq((Ωilxt__47 = function() {
          return (new_regex_tag('y'))`.`;
        }), /./dvy);
        this.eq((Ωilxt__48 = function() {
          return (new_regex_tag('dy'))`.`;
        }), /./dvy);
        this.eq((Ωilxt__49 = function() {
          return (new_regex_tag('yd'))`.`;
        }), /./dvy);
        this.eq((Ωilxt__50 = function() {
          return (new_regex_tag('d')).d`.`;
        }), /./dvy);
        this.eq((Ωilxt__51 = function() {
          return (new_regex_tag('y')).y`.`;
        }), /./dvy);
        this.eq((Ωilxt__52 = function() {
          return (new_regex_tag('dy')).dy`.`;
        }), /./dvy);
        this.eq((Ωilxt__53 = function() {
          return (new_regex_tag('yd')).yd`.`;
        }), /./dvy);
        this.eq((Ωilxt__54 = function() {
          return (new_regex_tag('')).d`.`;
        }), /./dvy);
        this.eq((Ωilxt__55 = function() {
          return (new_regex_tag('')).y`.`;
        }), /./dvy);
        this.eq((Ωilxt__56 = function() {
          return (new_regex_tag('')).dy`.`;
        }), /./dvy);
        this.eq((Ωilxt__57 = function() {
          return (new_regex_tag('')).yd`.`;
        }), /./dvy);
        //.....................................................................................................
        this.eq((Ωilxt__58 = function() {
          return (new_regex_tag('')).i`.`;
        }), /./divy);
        this.eq((Ωilxt__59 = function() {
          return (new_regex_tag('')).g`.`;
        }), /./dgvy);
        this.eq((Ωilxt__60 = function() {
          return (new_regex_tag('')).m`.`;
        }), /./dmvy);
        this.eq((Ωilxt__61 = function() {
          return (new_regex_tag('')).s`.`;
        }), /./dsvy);
        this.eq((Ωilxt__62 = function() {
          return (new_regex_tag('')).dgimsvy`.`;
        }), /./dgimsvy);
        this.eq((Ωilxt__63 = function() {
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
        var Grammar, ILX, Level, Lexeme, Token, g, gnd, internals, number_lx, number_tk, number_tk_matcher, rx, Ωilxt_100, Ωilxt_101, Ωilxt_102, Ωilxt__64, Ωilxt__65, Ωilxt__66, Ωilxt__67, Ωilxt__68, Ωilxt__69, Ωilxt__70, Ωilxt__71, Ωilxt__72, Ωilxt__73, Ωilxt__74, Ωilxt__75, Ωilxt__76, Ωilxt__77, Ωilxt__78, Ωilxt__79, Ωilxt__80, Ωilxt__81, Ωilxt__82, Ωilxt__83, Ωilxt__84, Ωilxt__85, Ωilxt__86, Ωilxt__87, Ωilxt__88, Ωilxt__89, Ωilxt__90, Ωilxt__91, Ωilxt__92, Ωilxt__93, Ωilxt__94, Ωilxt__95, Ωilxt__96, Ωilxt__97, Ωilxt__98, Ωilxt__99;
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
        this.eq((Ωilxt__64 = function() {
          return g.start_level instanceof Level;
        }), true);
        this.eq((Ωilxt__65 = function() {
          return g.start_level;
        }), gnd);
        this.eq((Ωilxt__66 = function() {
          return g.start_level_name;
        }), 'gnd');
        this.eq((Ωilxt__67 = function() {
          return g.name;
        }), 'g');
        this.eq((Ωilxt__68 = function() {
          return g.levels instanceof Object;
        }), true);
        this.eq((Ωilxt__69 = function() {
          return g.levels.gnd;
        }), gnd);
        //.....................................................................................................
        this.eq((Ωilxt__70 = function() {
          return gnd instanceof Level;
        }), true);
        this.eq((Ωilxt__71 = function() {
          return gnd.name;
        }), 'gnd');
        this.eq((Ωilxt__72 = function() {
          return gnd.grammar;
        }), g);
        this.eq((Ωilxt__73 = function() {
          return gnd.tokens instanceof Array;
        }), true);
        this.eq((Ωilxt__74 = function() {
          return gnd.tokens.length;
        }), 1);
        this.eq((Ωilxt__75 = function() {
          return gnd.tokens[0];
        }), number_tk);
        //.....................................................................................................
        this.eq((Ωilxt__76 = function() {
          return number_tk instanceof Token;
        }), true);
        this.eq((Ωilxt__77 = function() {
          return number_tk.name;
        }), 'number');
        this.eq((Ωilxt__78 = function() {
          return number_tk.level;
        }), gnd);
        this.eq((Ωilxt__79 = function() {
          return number_tk.grammar;
        }), g);
        this.eq((Ωilxt__80 = function() {
          return number_tk.matcher;
        }), /[0-9]+/dvy);
        this.eq((Ωilxt__81 = function() {
          return number_tk.matcher.hasIndices;
        }), true);
        this.eq((Ωilxt__82 = function() {
          return number_tk.matcher.sticky;
        }), true);
        this.eq((Ωilxt__83 = function() {
          return number_tk.matcher.unicodeSets;
        }), true);
        this.eq((Ωilxt__84 = function() {
          return number_tk.jump;
        }), null);
        this.eq((Ωilxt__85 = function() {
          return number_tk.jump_spec;
        }), null);
        //.....................................................................................................
        this.eq((Ωilxt__86 = function() {
          return (number_lx = number_tk.match_at(0, '398ä')) != null;
        }), true);
        this.eq((Ωilxt__87 = function() {
          return number_lx instanceof Lexeme;
        }), true);
        this.eq((Ωilxt__88 = function() {
          return number_lx.name;
        }), 'number');
        this.eq((Ωilxt__89 = function() {
          return number_lx.fqname;
        }), 'gnd.number');
        this.eq((Ωilxt__90 = function() {
          return number_lx.level;
        }), gnd);
        this.eq((Ωilxt__91 = function() {
          return number_lx.hit;
        }), '398');
        this.eq((Ωilxt__92 = function() {
          return number_lx.start;
        }), 0);
        this.eq((Ωilxt__93 = function() {
          return number_lx.stop;
        }), 3);
        //.....................................................................................................
        this.eq((Ωilxt__94 = function() {
          return (number_lx = number_tk.match_at(7, 'abcdefgh00102xyz')) != null;
        }), false);
        this.eq((Ωilxt__95 = function() {
          return (number_lx = number_tk.match_at(8, 'abcdefgh00102xyz')) != null;
        }), true);
        this.eq((Ωilxt__96 = function() {
          return number_lx instanceof Lexeme;
        }), true);
        this.eq((Ωilxt__97 = function() {
          return number_lx.name;
        }), 'number');
        this.eq((Ωilxt__98 = function() {
          return number_lx.fqname;
        }), 'gnd.number');
        this.eq((Ωilxt__99 = function() {
          return number_lx.level;
        }), gnd);
        this.eq((Ωilxt_100 = function() {
          return number_lx.hit;
        }), '00102');
        this.eq((Ωilxt_101 = function() {
          return number_lx.start;
        }), 8);
        this.eq((Ωilxt_102 = function() {
          return number_lx.stop;
        }), 13);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      new_regex_tag: function() {
        var internals, new_regex_tag, regex, rx, Ωilxt_103, Ωilxt_104, Ωilxt_105, Ωilxt_106, Ωilxt_107, Ωilxt_108, Ωilxt_109, Ωilxt_110, Ωilxt_111, Ωilxt_112, Ωilxt_113;
        ({rx, regex, internals, new_regex_tag} = require('../../../apps/interlex'));
        //.....................................................................................................
        this.eq((Ωilxt_103 = function() {
          return typeof new_regex_tag('dy');
        }), 'function');
        this.eq((Ωilxt_104 = function() {
          return typeof (new_regex_tag('dy')).si;
        }), 'function');
        this.eq((Ωilxt_105 = function() {
          return ((new_regex_tag('dyis'))`[a-z]`) instanceof RegExp;
        }), true);
        //.....................................................................................................
        this.eq((Ωilxt_106 = function() {
          return (new_regex_tag('dyis'))`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_107 = function() {
          return (new_regex_tag('dy')).si`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_108 = function() {
          return (new_regex_tag('dys')).si`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_109 = function() {
          return (new_regex_tag('dys')).i`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_110 = function() {
          return (new_regex_tag('dysi'))`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_111 = function() {
          return (new_regex_tag('v')).si`[a-z]`;
        }), /[a-z]/disvy);
        //.....................................................................................................
        this.throws((Ωilxt_112 = function() {
          return (new_regex_tag('dy')).ab`[a-z]`;
        }), /illegal or duplicate flags/);
        this.throws((Ωilxt_113 = function() {
          return (new_regex_tag('dyab'))`[a-z]`;
        }), /illegal or duplicate flags/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      normalize_regex: function() {
        var internals, normalize_regex, Ωilxt_114, Ωilxt_115, Ωilxt_116, Ωilxt_117, Ωilxt_118, Ωilxt_119, Ωilxt_120;
        ({internals} = require('../../../apps/interlex'));
        ({normalize_regex} = internals);
        this.eq((Ωilxt_114 = function() {
          return typeof normalize_regex;
        }), 'function');
        this.eq((Ωilxt_115 = function() {
          return normalize_regex(/[a-z]/ig);
        }), /[a-z]/dgivy);
        this.eq((Ωilxt_116 = function() {
          return normalize_regex(/[a-z]/i);
        }), /[a-z]/divy);
        this.eq((Ωilxt_117 = function() {
          return normalize_regex(/[a-z]/u);
        }), /[a-z]/dvy);
        this.eq((Ωilxt_118 = function() {
          return normalize_regex(/[a-z]/gv);
        }), /[a-z]/dgvy);
        this.eq((Ωilxt_119 = function() {
          return normalize_regex(/[a-z]/gu);
        }), /[a-z]/dgvy);
        this.eq((Ωilxt_120 = function() {
          return normalize_regex(/[a-z]/v);
        }), /[a-z]/dvy);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      rx_flags: function() {
        var rx, Ωilxt_121, Ωilxt_122, Ωilxt_124, Ωilxt_125;
        ({rx} = require('../../../apps/interlex'));
        this.eq((Ωilxt_121 = function() {
          return (rx`x`).flags;
        }), 'dvy');
        this.eq((Ωilxt_122 = function() {
          return (rx.si`x`).flags;
        }), 'disvy');
        // @eq ( Ωilxt_123 = -> ( rx.sidvy"x"  ).flags ), 'disvy'
        this.eq((Ωilxt_124 = function() {
          return (rx.y`x`).flags;
        }), 'dvy');
        this.eq((Ωilxt_125 = function() {
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
          var g, lexemes, matcher, probe, probes_and_matchers, x, Ωilxt_126, Ωilxt_127, Ωilxt_128, Ωilxt_129, Ωilxt_132;
          g = new_grammar();
          this.eq((Ωilxt_126 = function() {
            return g.cfg.counter_name;
          }), 'line_nr');
          this.eq((Ωilxt_127 = function() {
            return g.cfg.counter_step;
          }), +1);
          this.eq((Ωilxt_128 = function() {
            return g.cfg.counter_value;
          }), 1);
          this.eq((Ωilxt_129 = function() {
            return g.state.count;
          }), 1);
          probes_and_matchers = [["1st line", 1], ["2nd line", 2], ["3rd line", 3], ["4th line (and EOF)", 4]];
//...................................................................................................
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            info('Ωilxt_130', rpr(probe));
            lexemes = g.get_lexemes(probe);
            urge('Ωilxt_131', lexemes);
            this.eq((Ωilxt_132 = function() {
              return lexemes[0].line_nr;
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, matcher, probe, probes_and_matchers, x, Ωilxt_133, Ωilxt_134, Ωilxt_135, Ωilxt_136, Ωilxt_142;
          g = new_grammar({
            counter_name: 'test_id',
            counter_step: -1,
            counter_value: 10
          });
          this.eq((Ωilxt_133 = function() {
            return g.cfg.counter_name;
          }), 'test_id');
          this.eq((Ωilxt_134 = function() {
            return g.cfg.counter_step;
          }), -1);
          this.eq((Ωilxt_135 = function() {
            return g.cfg.counter_value;
          }), 10);
          this.eq((Ωilxt_136 = function() {
            return g.state.count;
          }), 10);
          probes_and_matchers = [["1st line", 10], ["2nd line", 9], ["3rd line", 8], ["4th line (and EOF)", 7]];
//...................................................................................................
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            info('Ωilxt_137', rpr(probe));
            lexemes = g.get_lexemes(probe);
            // urge 'Ωilxt_138', lexemes
            urge('Ωilxt_139', g);
            urge('Ωilxt_140', g.cfg);
            urge('Ωilxt_141', g.state);
            this.eq((Ωilxt_142 = function() {
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
          var lexemes, matcher, probe, x, Ωilxt_143, Ωilxt_144, Ωilxt_145;
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            g.reset_count();
            lexemes = g.get_lexemes(probe);
            this.eq((Ωilxt_143 = function() {
              return condense_lexemes(lexemes);
            }), matcher.condensed);
            this.eq((Ωilxt_144 = function() {
              return lexemes.length;
            }), matcher.length);
            g.reset_count();
            this.eq((Ωilxt_145 = function() {
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
    strategies: {
      //-------------------------------------------------------------------------------------------------------
      levels_implement_strategies: function() {
        var Grammar;
        ({Grammar} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          /* strategy 'first', shortest tokens first */
          var first, g, i, len, matcher, position, probes_and_matchers, source, Ωilxt_146;
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
            this.eq((Ωilxt_146 = function() {
              return condense_lexemes(first.match_first_at(position, source));
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'first', longest tokens first */
          var first, g, i, len, matcher, position, probes_and_matchers, source, Ωilxt_147;
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
            this.eq((Ωilxt_147 = function() {
              return condense_lexemes(first.match_first_at(position, source));
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'longest', shortest tokens first */
          var first, g, i, len, matcher, position, probes_and_matchers, source, Ωilxt_148;
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
            this.eq((Ωilxt_148 = function() {
              return condense_lexemes(first.match_longest_at(position, source));
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'longest', longest tokens first */
          var first, g, i, len, matcher, position, probes_and_matchers, source, Ωilxt_149;
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
            this.eq((Ωilxt_149 = function() {
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
              var first, g, j, k, len, len1, matcher, position, source, token_cfg, token_cfgs, Ωilxt_150;
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
                this.eq((Ωilxt_150 = function() {
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
              var first, g, j, k, len, len1, matcher, source, token_cfg, token_cfgs, Ωilxt_151, Ωilxt_152, Ωilxt_153;
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
              this.eq((Ωilxt_151 = function() {
                return g.cfg.strategy;
              }), 'longest');
              this.eq((Ωilxt_152 = function() {
                return first.strategy;
              }), 'longest');
              for (k = 0, len1 = probes_and_matchers.length; k < len1; k++) {
                [source, matcher] = probes_and_matchers[k];
                this.eq((Ωilxt_153 = function() {
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
          var first, g, i, len, matcher, probes_and_matchers, source, Ωilxt_154, Ωilxt_155, Ωilxt_156;
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
          this.eq((Ωilxt_154 = function() {
            return g.cfg.strategy;
          }), 'first');
          this.eq((Ωilxt_155 = function() {
            return first.strategy;
          }), 'first');
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [source, matcher] = probes_and_matchers[i];
            this.eq((Ωilxt_156 = function() {
              return condense_lexemes(g.get_lexemes(source));
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'first', long tokens first */
          var first, g, i, len, matcher, probes_and_matchers, source, Ωilxt_157, Ωilxt_158, Ωilxt_159;
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
          this.eq((Ωilxt_157 = function() {
            return g.cfg.strategy;
          }), 'first');
          this.eq((Ωilxt_158 = function() {
            return first.strategy;
          }), 'first');
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [source, matcher] = probes_and_matchers[i];
            this.eq((Ωilxt_159 = function() {
              return condense_lexemes(g.get_lexemes(source));
            }), matcher);
          }
          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      all_strategies_refuse_jumpless_empty_matches: function() {
        var Grammar;
        ({Grammar} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var g, gnd, Ωilxt_160;
          g = new Grammar({
            strategy: 'first'
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          gnd.new_token({
            name: 'a',
            matcher: /a/
          });
          gnd.new_token({
            name: 'b',
            matcher: /(?=b)/
          });
          return this.throws((Ωilxt_160 = function() {
            return g.get_lexemes("ab");
          }), /encountered zero-length match/);
        })();
        (() => {          //.....................................................................................................
          var g, gnd, Ωilxt_161;
          g = new Grammar({
            strategy: 'longest'
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          gnd.new_token({
            name: 'a',
            matcher: /a/
          });
          gnd.new_token({
            name: 'b',
            matcher: /(?=b)/
          });
          return this.throws((Ωilxt_161 = function() {
            return g.get_lexemes("ab");
          }), /encountered zero-length match/);
        })();
        (() => {          //.....................................................................................................
          /* We accept the empty match here since while it does get produced as an intermediate value to find
                 the longest match, it does not get passed on as a resulting lexeme. */
          var g, gnd, Ωilxt_162;
          g = new Grammar({
            strategy: 'longest'
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          gnd.new_token({
            name: 'a',
            matcher: /[ab]/
          });
          gnd.new_token({
            name: 'b',
            matcher: /(?=b)/
          });
          return this.eq((Ωilxt_162 = function() {
            return condense_lexemes(g.get_lexemes("ab"));
          }), "gnd.a'a'|gnd.a'b'");
        })();
        //.....................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    levels: {
      //-------------------------------------------------------------------------------------------------------
      illegal_to_declare_jump_to_same_level: function() {
        var Grammar;
        ({Grammar} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var first, g, Ωilxt_163, Ωilxt_164;
          g = new Grammar();
          first = g.new_level({
            name: 'first'
          });
          this.throws((Ωilxt_163 = function() {
            return first.new_token({
              name: 'digit',
              matcher: /[0-9]/,
              jump: 'first'
            });
          }), /cannot jump to same level/);
          this.throws((Ωilxt_164 = function() {
            return first.new_token({
              name: 'digit',
              matcher: /[0-9]/,
              jump: 'first!'
            });
          }), /cannot jump to same level/);
          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      parse_jumps: function() {
        var Token, Ωilxt_165, Ωilxt_166, Ωilxt_167, Ωilxt_168, Ωilxt_169, Ωilxt_170, Ωilxt_171, Ωilxt_172, Ωilxt_173, Ωilxt_174, Ωilxt_175, Ωilxt_176, Ωilxt_177, Ωilxt_178, Ωilxt_179, Ωilxt_180, Ωilxt_181, Ωilxt_182, Ωilxt_183, Ωilxt_184, Ωilxt_185, Ωilxt_186, Ωilxt_187;
        ({Token} = require('../../../apps/interlex'));
        //.....................................................................................................
        this.eq((Ωilxt_165 = function() {
          return Token._parse_jump();
        }), null);
        this.eq((Ωilxt_166 = function() {
          return Token._parse_jump('..');
        }), {
          jump_spec: '..',
          carry: false,
          action: 'back',
          target: '..'
        });
        this.eq((Ωilxt_167 = function() {
          return Token._parse_jump('mylevel');
        }), {
          jump_spec: 'mylevel',
          carry: false,
          action: 'fore',
          target: 'mylevel'
        });
        this.eq((Ωilxt_168 = function() {
          return Token._parse_jump('..!');
        }), {
          jump_spec: '..!',
          carry: true,
          action: 'back',
          target: '..'
        });
        this.eq((Ωilxt_169 = function() {
          return Token._parse_jump('mylevel!');
        }), {
          jump_spec: 'mylevel!',
          carry: true,
          action: 'fore',
          target: 'mylevel'
        });
        this.eq((Ωilxt_170 = function() {
          return Token._parse_jump('mylevel!', {
            name: 'otherlevel'
          });
        }), {
          jump_spec: 'mylevel!',
          carry: true,
          action: 'fore',
          target: 'mylevel'
        });
        this.throws((Ωilxt_171 = function() {
          return Token._parse_jump('..]');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_172 = function() {
          return Token._parse_jump(']..');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_173 = function() {
          return Token._parse_jump('[mylevel');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_174 = function() {
          return Token._parse_jump('mylevel[');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_175 = function() {
          return Token._parse_jump('mylevel[', {
            name: 'otherlevel'
          });
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_176 = function() {
          return Token._parse_jump('[mylevel[');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_177 = function() {
          return Token._parse_jump('[mylevel]');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_178 = function() {
          return Token._parse_jump(']mylevel');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_179 = function() {
          return Token._parse_jump('[..');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_180 = function() {
          return Token._parse_jump('[..]');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_181 = function() {
          return Token._parse_jump('..[');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_182 = function() {
          return Token._parse_jump('[...');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_183 = function() {
          return Token._parse_jump('...');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_184 = function() {
          return Token._parse_jump('%');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_185 = function() {
          return Token._parse_jump('my-name');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_186 = function() {
          return Token._parse_jump('mylevel', {
            name: 'mylevel'
          });
        }), /cannot jump to same level/);
        this.throws((Ωilxt_187 = function() {
          return Token._parse_jump('mylevel!', {
            name: 'mylevel'
          });
        }), /cannot jump to same level/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      can_set_lexeme_level: function() {
        var Grammar, Lexeme, Token;
        ({Grammar, Token, Lexeme} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var first, g, lexeme, number, Ωilxt_188, Ωilxt_189, Ωilxt_190, Ωilxt_191, Ωilxt_192, Ωilxt_193, Ωilxt_194, Ωilxt_195, Ωilxt_196, Ωilxt_197;
          g = new Grammar();
          //...................................................................................................
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'digit',
            matcher: /[0-9]/,
            jump: 'number'
          });
          first.new_token({
            name: 'other',
            matcher: /[^0-9]+/
          });
          //...................................................................................................
          number = g.new_level({
            name: 'number'
          });
          number.new_token({
            name: 'digits',
            matcher: /[0-9]+/
          });
          number.new_token({
            name: 'other',
            matcher: /[^0-9]/,
            jump: '..'
          });
          //...................................................................................................
          [lexeme] = g.get_lexemes('5');
          this.eq((Ωilxt_188 = function() {
            return lexeme instanceof Lexeme;
          }), true);
          this.eq((Ωilxt_189 = function() {
            return lexeme.token instanceof Token;
          }), true);
          this.eq((Ωilxt_190 = function() {
            return lexeme.name;
          }), 'digit');
          this.eq((Ωilxt_191 = function() {
            return lexeme.level.name;
          }), 'first');
          this.eq((Ωilxt_192 = function() {
            return lexeme.fqname;
          }), 'first.digit');
          lexeme.set_level(number);
          this.eq((Ωilxt_193 = function() {
            return lexeme instanceof Lexeme;
          }), true);
          this.eq((Ωilxt_194 = function() {
            return lexeme.token instanceof Token;
          }), true);
          this.eq((Ωilxt_195 = function() {
            return lexeme.name;
          }), 'digit');
          this.eq((Ωilxt_196 = function() {
            return lexeme.level.name;
          }), 'number');
          return this.eq((Ωilxt_197 = function() {
            return lexeme.fqname;
          }), 'number.digit');
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      carrying_and_sticking_jumps: function() {
        var Grammar, abbrlx;
        ({Grammar} = require('../../../apps/interlex'));
        abbrlx = function(lexeme) {
          return {
            level: lexeme.level.name,
            fqname: lexeme.fqname,
            hit: lexeme.hit
          };
        };
        (() => {          //.....................................................................................................
          /* forejump carries, backjump sticks */
          var dqstring, first, g, lexemes, Ωilxt_198, Ωilxt_199, Ωilxt_200, Ωilxt_201, Ωilxt_202, Ωilxt_203, Ωilxt_204, Ωilxt_205, Ωilxt_206, Ωilxt_207;
          g = new Grammar();
          //...................................................................................................
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'other',
            matcher: /[^"]+/
          });
          first.new_token({
            name: 'dq',
            matcher: /"/,
            jump: 'dqstring!'
          });
          //...................................................................................................
          dqstring = g.new_level({
            name: 'dqstring'
          });
          dqstring.new_token({
            name: 'other',
            matcher: /[^"]+/
          });
          dqstring.new_token({
            name: 'dq',
            matcher: /"/,
            jump: '..'
          });
          //...................................................................................................
          this.eq((Ωilxt_198 = function() {
            return first.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_199 = function() {
            return first.tokens[1].jump;
          }), {
            jump_spec: 'dqstring!',
            carry: true,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_200 = function() {
            return dqstring.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_201 = function() {
            return dqstring.tokens[1].jump;
          }), {
            jump_spec: '..',
            carry: false,
            action: 'back',
            target: '..'
          });
          //...................................................................................................
          lexemes = g.walk_lexemes('Bob said "wow".');
          this.eq((Ωilxt_202 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'first',
            fqname: 'first.other',
            hit: 'Bob said '
          });
          this.eq((Ωilxt_203 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'dqstring',
            fqname: 'dqstring.dq',
            hit: '"'
          });
          this.eq((Ωilxt_204 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'dqstring',
            fqname: 'dqstring.other',
            hit: 'wow'
          });
          this.eq((Ωilxt_205 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'dqstring',
            fqname: 'dqstring.dq',
            hit: '"'
          });
          this.eq((Ωilxt_206 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'first',
            fqname: 'first.other',
            hit: '.'
          });
          this.eq((Ωilxt_207 = function() {
            return lexemes.next().done;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          /* forejump sticks, backjump carries */
          var dqstring, first, g, lexemes, Ωilxt_208, Ωilxt_209, Ωilxt_210, Ωilxt_211, Ωilxt_212, Ωilxt_213, Ωilxt_214, Ωilxt_215, Ωilxt_216, Ωilxt_217;
          g = new Grammar();
          //...................................................................................................
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'other',
            matcher: /[^"]+/
          });
          first.new_token({
            name: 'dq',
            matcher: /"/,
            jump: 'dqstring'
          });
          //...................................................................................................
          dqstring = g.new_level({
            name: 'dqstring'
          });
          dqstring.new_token({
            name: 'other',
            matcher: /[^"]+/
          });
          dqstring.new_token({
            name: 'dq',
            matcher: /"/,
            jump: '..!'
          });
          //...................................................................................................
          this.eq((Ωilxt_208 = function() {
            return first.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_209 = function() {
            return first.tokens[1].jump;
          }), {
            jump_spec: 'dqstring',
            carry: false,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_210 = function() {
            return dqstring.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_211 = function() {
            return dqstring.tokens[1].jump;
          }), {
            jump_spec: '..!',
            carry: true,
            action: 'back',
            target: '..'
          });
          //...................................................................................................
          lexemes = g.walk_lexemes('Bob said "wow".');
          this.eq((Ωilxt_212 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'first',
            fqname: 'first.other',
            hit: 'Bob said '
          });
          this.eq((Ωilxt_213 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'first',
            fqname: 'first.dq',
            hit: '"'
          });
          this.eq((Ωilxt_214 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'dqstring',
            fqname: 'dqstring.other',
            hit: 'wow'
          });
          this.eq((Ωilxt_215 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'first',
            fqname: 'first.dq',
            hit: '"'
          });
          this.eq((Ωilxt_216 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'first',
            fqname: 'first.other',
            hit: '.'
          });
          this.eq((Ωilxt_217 = function() {
            return lexemes.next().done;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          /* forejump carries, backjump carries */
          var dqstring, first, g, lexemes, Ωilxt_218, Ωilxt_219, Ωilxt_220, Ωilxt_221, Ωilxt_222, Ωilxt_223, Ωilxt_224, Ωilxt_225, Ωilxt_226, Ωilxt_227;
          g = new Grammar();
          //...................................................................................................
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'other',
            matcher: /[^"]+/
          });
          first.new_token({
            name: 'dq',
            matcher: /"/,
            jump: 'dqstring!'
          });
          //...................................................................................................
          dqstring = g.new_level({
            name: 'dqstring'
          });
          dqstring.new_token({
            name: 'other',
            matcher: /[^"]+/
          });
          dqstring.new_token({
            name: 'dq',
            matcher: /"/,
            jump: '..!'
          });
          //...................................................................................................
          this.eq((Ωilxt_218 = function() {
            return first.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_219 = function() {
            return first.tokens[1].jump;
          }), {
            jump_spec: 'dqstring!',
            carry: true,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_220 = function() {
            return dqstring.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_221 = function() {
            return dqstring.tokens[1].jump;
          }), {
            jump_spec: '..!',
            carry: true,
            action: 'back',
            target: '..'
          });
          //...................................................................................................
          lexemes = g.walk_lexemes('Bob said "wow".');
          this.eq((Ωilxt_222 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'first',
            fqname: 'first.other',
            hit: 'Bob said '
          });
          this.eq((Ωilxt_223 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'dqstring',
            fqname: 'dqstring.dq',
            hit: '"'
          });
          this.eq((Ωilxt_224 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'dqstring',
            fqname: 'dqstring.other',
            hit: 'wow'
          });
          this.eq((Ωilxt_225 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'first',
            fqname: 'first.dq',
            hit: '"'
          });
          this.eq((Ωilxt_226 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'first',
            fqname: 'first.other',
            hit: '.'
          });
          this.eq((Ωilxt_227 = function() {
            return lexemes.next().done;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          /* forejump sticks, backjump sticks */
          var dqstring, first, g, lexemes, Ωilxt_228, Ωilxt_229, Ωilxt_230, Ωilxt_231, Ωilxt_232, Ωilxt_233, Ωilxt_234, Ωilxt_235, Ωilxt_236, Ωilxt_237;
          g = new Grammar();
          //...................................................................................................
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'other',
            matcher: /[^"]+/
          });
          first.new_token({
            name: 'dq',
            matcher: /"/,
            jump: 'dqstring'
          });
          //...................................................................................................
          dqstring = g.new_level({
            name: 'dqstring'
          });
          dqstring.new_token({
            name: 'other',
            matcher: /[^"]+/
          });
          dqstring.new_token({
            name: 'dq',
            matcher: /"/,
            jump: '..'
          });
          //...................................................................................................
          this.eq((Ωilxt_228 = function() {
            return first.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_229 = function() {
            return first.tokens[1].jump;
          }), {
            jump_spec: 'dqstring',
            carry: false,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_230 = function() {
            return dqstring.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_231 = function() {
            return dqstring.tokens[1].jump;
          }), {
            jump_spec: '..',
            carry: false,
            action: 'back',
            target: '..'
          });
          //...................................................................................................
          lexemes = g.walk_lexemes('Bob said "wow".');
          this.eq((Ωilxt_232 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'first',
            fqname: 'first.other',
            hit: 'Bob said '
          });
          this.eq((Ωilxt_233 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'first',
            fqname: 'first.dq',
            hit: '"'
          });
          this.eq((Ωilxt_234 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'dqstring',
            fqname: 'dqstring.other',
            hit: 'wow'
          });
          this.eq((Ωilxt_235 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'dqstring',
            fqname: 'dqstring.dq',
            hit: '"'
          });
          this.eq((Ωilxt_236 = function() {
            return abbrlx(lexemes.next().value);
          }), {
            level: 'first',
            fqname: 'first.other',
            hit: '.'
          });
          this.eq((Ωilxt_237 = function() {
            return lexemes.next().done;
          }), true);
          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      can_use_zero_length_matchers_with_jumps: function() {
        var Grammar, probes_and_matchers, rx, test;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //-----------------------------------------------------------------------------------------------------
        probes_and_matchers = [
          [
            "Alice has 431 owls",
            {
              length: 8,
              condensed: "gnd.letters'Alice'|gnd.ws' '|gnd.letters'has'|gnd.ws' '|gnd.before_digits''|number.digits'431'|gnd.ws' '|gnd.letters'owls'"
            }
          ],
          [
            "99kg",
            {
              length: 3,
              condensed: "gnd.before_digits''|number.digits'99'|gnd.letters'kg'"
            }
          ]
        ];
        //-----------------------------------------------------------------------------------------------------
        test = (g) => {
          var lexemes, matcher, probe, x, Ωilxt_238, Ωilxt_239, Ωilxt_240;
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            g.reset_count();
            lexemes = g.get_lexemes(probe);
            this.eq((Ωilxt_238 = function() {
              return condense_lexemes(lexemes);
            }), matcher.condensed);
            this.eq((Ωilxt_239 = function() {
              return lexemes.length;
            }), matcher.length);
            g.reset_count();
            this.eq((Ωilxt_240 = function() {
              return [...(g.walk_lexemes(probe))];
            }), lexemes);
          }
          return null;
        };
        (() => {          //-----------------------------------------------------------------------------------------------------
          var g, gnd, lexeme, number, results, source;
          g = new Grammar({
            name: 'g'
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          number = g.new_level({
            name: 'number'
          });
          //...................................................................................................
          gnd.new_token({
            name: 'letters',
            matcher: /[a-z]+/i
          });
          gnd.new_token({
            name: 'before_digits',
            matcher: /(?=[0-9])/i,
            jump: 'number'
          });
          gnd.new_token({
            name: 'ws',
            matcher: /\s+/i
          });
          //...................................................................................................
          number.new_token({
            name: 'digits',
            matcher: /[0-9]+/i,
            jump: '..'
          });
          //...................................................................................................
          test(g);
          source = probes_and_matchers[0][0];
          results = [];
          for (lexeme of g.walk_lexemes(source)) {
            results.push(urge('Ωilxt_241', f`${lexeme.fqname}:_<25c; ${rpr(lexeme.hit)}:<20c;`));
          }
          return results;
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
        // debug 'Ωilxt_242', [ string11, string12, ]
        // console.debug 'Ωilxt_243', [ string11, string12, ]
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
          jump: '..!'
        });
        string11.new_token({
          name: 'text',
          matcher: rx`[^']*`
        });
        //.........................................................................................................
        debug('Ωilxt_244', g);
        debug('Ωilxt_245', g.levels);
        debug('Ωilxt_246', g.levels.gnd);
        debug('Ωilxt_247', g.levels.gnd.tokens);
        debug('Ωilxt_248', gnd);
        for (token of gnd) {
          debug('Ωilxt_249', token);
        }
        //.........................................................................................................
        show_lexeme = function(lexeme) {
          var fqname, groups, groups_rpr, hit, jump, jump_rpr, jump_spec, name, start, stop;
          ({name, fqname, start, stop, hit, jump, jump_spec, groups} = lexeme);
          groups_rpr = groups != null ? rpr({...groups}) : '';
          jump_rpr = jump_spec != null ? jump_spec : '';
          return urge('Ωilxt_250', f`${start}:>3.0f;:${stop}:<3.0f; ${fqname}:<20c; ${rpr(hit)}:<30c; ${jump_rpr}:<15c; ${groups_rpr}`);
        };
        //.........................................................................................................
        sources = ["Alice in Cairo 1912 (approximately)", "Alice in Cairo 1912 'approximately'"];
//.........................................................................................................
        for (source of sources) {
          info('Ωilxt_251', rpr(source));
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
        throw_on_error: false
      })).test(this.interlex_tasks);
      // ( new Test { throw_on_error: true, } ).test @interlex_tasks
      (new Test({
        throw_on_error: true
      })).test({
        can_use_zero_length_matchers_with_jumps: this.interlex_tasks.levels.can_use_zero_length_matchers_with_jumps
      });
      (() => {})();      // ( new Test { throw_on_error: true, } ).test { demo: @interlex_tasks.demo.demo, }
      return f = function() {
        var match;
        help('Ωilxt_252', Array.from('a🈯z'));
        help('Ωilxt_253', 'a🈯z'.split(/(.)/u));
        help('Ωilxt_254', 'a🈯z'.split(/(.)/v));
        help('Ωilxt_255', 'a🈯z'.split(/(.)/d));
        help('Ωilxt_256', match = 'a🈯z'.match(/^(?<head>[a-z]+)(?<other>[^a-z]+)(?<tail>[a-z]+)/d));
        help('Ωilxt_257', {...match.groups});
        return help('Ωilxt_258', {...match.indices.groups});
      };
    })();
  }

  // help 'Ωilxt_259', rx"."
// help 'Ωilxt_260', rx/./

}).call(this);

//# sourceMappingURL=test-basics.js.map