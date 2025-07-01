(async function() {
  'use strict';
  var GTNG, GUY, Test, abbrlxm, alert, condense_lexemes, debug, echo, f, help, info, inspect, isa, log, plain, praise, reverse, rpr, std, tabulate_lexeme, tabulate_lexemes, type_of, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('interlex/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  ({condense_lexemes, abbrlxm, tabulate_lexemes, tabulate_lexeme} = require('./helpers'));

  ({isa, std, type_of} = require('../../../apps/cleartype'));

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
        var Grammar, ILX, Level, Lexeme, Token, g, gnd, internals, k, number_lx, number_tk, number_tk_matcher, rx, Ωilxt_100, Ωilxt_101, Ωilxt_102, Ωilxt_103, Ωilxt_104, Ωilxt_108, Ωilxt_109, Ωilxt_110, Ωilxt__64, Ωilxt__65, Ωilxt__66, Ωilxt__67, Ωilxt__68, Ωilxt__69, Ωilxt__70, Ωilxt__71, Ωilxt__72, Ωilxt__73, Ωilxt__74, Ωilxt__75, Ωilxt__76, Ωilxt__77, Ωilxt__78, Ωilxt__79, Ωilxt__80, Ωilxt__81, Ωilxt__82, Ωilxt__83, Ωilxt__84, Ωilxt__85, Ωilxt__86, Ωilxt__87, Ωilxt__88, Ωilxt__89, Ωilxt__90, Ωilxt__91, Ωilxt__92, Ωilxt__93, Ωilxt__94, Ωilxt__95, Ωilxt__96, Ωilxt__97, Ωilxt__98, Ωilxt__99;
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
          fit: number_tk_matcher
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
          return g.levels.constructor;
        }), void 0);
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
          return gnd.tokens.constructor;
        }), void 0);
        this.eq((Ωilxt__74 = function() {
          return gnd.tokens.length;
        }), void 0);
        this.eq((Ωilxt__75 = function() {
          return gnd.tokens.number;
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
          return number_tk.fit;
        }), /[0-9]+/dvy);
        this.eq((Ωilxt__81 = function() {
          return number_tk.fit.hasIndices;
        }), true);
        this.eq((Ωilxt__82 = function() {
          return number_tk.fit.sticky;
        }), true);
        this.eq((Ωilxt__83 = function() {
          return number_tk.fit.unicodeSets;
        }), true);
        this.eq((Ωilxt__84 = function() {
          return number_tk.jump;
        }), null);
        //.....................................................................................................
        this.eq((Ωilxt__85 = function() {
          return (number_lx = number_tk.match_at(0, '398ä')) != null;
        }), true);
        this.eq((Ωilxt__86 = function() {
          return number_lx instanceof Lexeme;
        }), true);
        this.eq((Ωilxt__87 = function() {
          return number_lx.name;
        }), 'number');
        this.eq((Ωilxt__88 = function() {
          return number_lx.fqname;
        }), 'gnd.number');
        this.eq((Ωilxt__89 = function() {
          return number_lx.level;
        }), gnd);
        this.eq((Ωilxt__90 = function() {
          return number_lx.hit;
        }), '398');
        this.eq((Ωilxt__91 = function() {
          return number_lx.start;
        }), 0);
        this.eq((Ωilxt__92 = function() {
          return number_lx.stop;
        }), 3);
        //.....................................................................................................
        this.eq((Ωilxt__93 = function() {
          return (number_lx = number_tk.match_at(7, 'abcdefgh00102xyz')) != null;
        }), false);
        this.eq((Ωilxt__94 = function() {
          return (number_lx = number_tk.match_at(8, 'abcdefgh00102xyz')) != null;
        }), true);
        this.eq((Ωilxt__95 = function() {
          return number_lx instanceof Lexeme;
        }), true);
        this.eq((Ωilxt__96 = function() {
          return number_lx.name;
        }), 'number');
        this.eq((Ωilxt__97 = function() {
          return number_lx.fqname;
        }), 'gnd.number');
        this.eq((Ωilxt__98 = function() {
          return number_lx.level;
        }), gnd);
        this.eq((Ωilxt__99 = function() {
          return number_lx.hit;
        }), '00102');
        this.eq((Ωilxt_100 = function() {
          return number_lx.start;
        }), 8);
        this.eq((Ωilxt_101 = function() {
          return number_lx.stop;
        }), 13);
        //.....................................................................................................
        this.eq((Ωilxt_102 = function() {
          return g.levels.gnd;
        }), gnd);
        this.eq((Ωilxt_103 = function() {
          return g.levels.gnd.tokens.number;
        }), number_tk);
        this.eq((Ωilxt_104 = function() {
          return isa(std.function, g.token_from_fqname);
        }), true);
        debug('Ωilxt_105', 'isa                 ', rpr(isa));
        debug('Ωilxt_106', 'std.function        ', rpr(std.function));
        debug('Ωilxt_106', '( k for k of std )        ', rpr((function() {
          var results;
          results = [];
          for (k in std) {
            results.push(k);
          }
          return results;
        })()));
        debug('Ωilxt_107', 'g.token_from_fqname ', rpr(g.token_from_fqname));
        process.exit(111);
        this.eq((Ωilxt_108 = function() {
          return g.token_from_fqname('gnd.number');
        }), number_tk);
        this.throws((Ωilxt_109 = function() {
          return g.token_from_fqname('XXX.XXX');
        }), /unknown level 'XXX'/);
        this.throws((Ωilxt_110 = function() {
          return g.token_from_fqname('gnd.XXX');
        }), /unknown token 'XXX'/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      new_regex_tag: function() {
        var internals, new_regex_tag, regex, rx, Ωilxt_111, Ωilxt_112, Ωilxt_113, Ωilxt_114, Ωilxt_115, Ωilxt_116, Ωilxt_117, Ωilxt_118, Ωilxt_119, Ωilxt_120, Ωilxt_121;
        ({rx, regex, internals, new_regex_tag} = require('../../../apps/interlex'));
        //.....................................................................................................
        this.eq((Ωilxt_111 = function() {
          return typeof new_regex_tag('dy');
        }), 'function');
        this.eq((Ωilxt_112 = function() {
          return typeof (new_regex_tag('dy')).si;
        }), 'function');
        this.eq((Ωilxt_113 = function() {
          return ((new_regex_tag('dyis'))`[a-z]`) instanceof RegExp;
        }), true);
        //.....................................................................................................
        this.eq((Ωilxt_114 = function() {
          return (new_regex_tag('dyis'))`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_115 = function() {
          return (new_regex_tag('dy')).si`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_116 = function() {
          return (new_regex_tag('dys')).si`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_117 = function() {
          return (new_regex_tag('dys')).i`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_118 = function() {
          return (new_regex_tag('dysi'))`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_119 = function() {
          return (new_regex_tag('v')).si`[a-z]`;
        }), /[a-z]/disvy);
        //.....................................................................................................
        this.throws((Ωilxt_120 = function() {
          return (new_regex_tag('dy')).ab`[a-z]`;
        }), /illegal or duplicate flags/);
        this.throws((Ωilxt_121 = function() {
          return (new_regex_tag('dyab'))`[a-z]`;
        }), /illegal or duplicate flags/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      normalize_regex: function() {
        var internals, normalize_regex, Ωilxt_122, Ωilxt_123, Ωilxt_124, Ωilxt_125, Ωilxt_126, Ωilxt_127, Ωilxt_128;
        ({internals} = require('../../../apps/interlex'));
        ({normalize_regex} = internals);
        this.eq((Ωilxt_122 = function() {
          return typeof normalize_regex;
        }), 'function');
        this.eq((Ωilxt_123 = function() {
          return normalize_regex(/[a-z]/ig);
        }), /[a-z]/dgivy);
        this.eq((Ωilxt_124 = function() {
          return normalize_regex(/[a-z]/i);
        }), /[a-z]/divy);
        this.eq((Ωilxt_125 = function() {
          return normalize_regex(/[a-z]/u);
        }), /[a-z]/dvy);
        this.eq((Ωilxt_126 = function() {
          return normalize_regex(/[a-z]/gv);
        }), /[a-z]/dgvy);
        this.eq((Ωilxt_127 = function() {
          return normalize_regex(/[a-z]/gu);
        }), /[a-z]/dgvy);
        this.eq((Ωilxt_128 = function() {
          return normalize_regex(/[a-z]/v);
        }), /[a-z]/dvy);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      rx_flags: function() {
        var rx, Ωilxt_129, Ωilxt_130, Ωilxt_132, Ωilxt_133;
        ({rx} = require('../../../apps/interlex'));
        this.eq((Ωilxt_129 = function() {
          return (rx`x`).flags;
        }), 'dvy');
        this.eq((Ωilxt_130 = function() {
          return (rx.si`x`).flags;
        }), 'disvy');
        // @eq ( Ωilxt_131 = -> ( rx.sidvy"x"  ).flags ), 'disvy'
        this.eq((Ωilxt_132 = function() {
          return (rx.y`x`).flags;
        }), 'dvy');
        this.eq((Ωilxt_133 = function() {
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
            fit: rx`(?<initial>[A-Z])[a-z]*`
          });
          gnd.new_token({
            name: 'number',
            fit: rx`[0-9]+`
          });
          gnd.new_token({
            name: 'ws',
            fit: rx`\s+`
          });
          gnd.new_token({
            name: 'text',
            fit: rx`[^a-zA-Z0-9\s]+`
          });
          //.....................................................................................................
          return g;
        };
        (() => {          //.....................................................................................................
          var fit, g, lexemes, probe, probes_and_matchers, x, Ωilxt_134, Ωilxt_137;
          g = new_grammar({
            emit_signals: false
          });
          this.eq((Ωilxt_134 = function() {
            return g.state.lnr;
          }), 1);
          probes_and_matchers = [["1st line", 1], ["2nd line", 2], ["3rd line", 3], ["4th line (and EOF)", 4]];
//...................................................................................................
          for (x of probes_and_matchers) {
            [probe, fit] = x;
            info('Ωilxt_135', rpr(probe));
            lexemes = g.scan_to_list(probe);
            // urge 'Ωilxt_136', lexemes
            this.eq((Ωilxt_137 = function() {
              return lexemes[0].lnr;
            }), fit);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          var fit, g, lexeme, probe, probes_and_matchers, x, Ωilxt_138, Ωilxt_139, Ωilxt_141;
          g = new_grammar({
            lnr: 10,
            emit_signals: false
          });
          this.eq((Ωilxt_138 = function() {
            return g.state.lnr;
          }), 10);
          this.throws((Ωilxt_139 = function() {
            return g.reset_lnr(10);
          }), /does not accept arguments/);
          probes_and_matchers = [["1st line", 10], ["2nd line", 11], ["3rd line", 12], ["4th line (and EOF)", 13]];
//...................................................................................................
          for (x of probes_and_matchers) {
            [probe, fit] = x;
            info('Ωilxt_140', rpr(probe));
            lexeme = (g.scan_to_list(probe))[0];
            this.eq((Ωilxt_141 = function() {
              return lexeme.lnr;
            }), fit);
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
          var fit, lexemes, probe, x, Ωilxt_142, Ωilxt_143, Ωilxt_144;
          for (x of probes_and_matchers) {
            [probe, fit] = x;
            g.reset_lnr();
            lexemes = g.scan_to_list(probe);
            this.eq((Ωilxt_142 = function() {
              return condense_lexemes(lexemes);
            }), fit.condensed);
            this.eq((Ωilxt_143 = function() {
              return lexemes.length;
            }), fit.length);
            g.reset_lnr();
            this.eq((Ωilxt_144 = function() {
              return [...(g.scan(probe))];
            }), lexemes);
          }
          return null;
        };
        (() => {          //-----------------------------------------------------------------------------------------------------
          var g, gnd;
          g = new Grammar({
            name: 'g',
            emit_signals: false
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          //...................................................................................................
          gnd.new_token({
            name: 'name',
            fit: rx`(?<initial>[A-Z])[a-z]+`
          });
          gnd.new_token({
            name: 'ordinal',
            fit: rx`(?<ordinal>[0-9]+)(st|nd|rd|th)`
          });
          gnd.new_token({
            name: 'number',
            fit: rx`[0-9]+`
          });
          gnd.new_token({
            name: 'ws',
            fit: rx`\s+`
          });
          gnd.new_token({
            name: 'word',
            fit: rx.i`[a-z]+`
          });
          gnd.new_token({
            name: 'other',
            fit: rx.i`[^a-z0-9\s]+`
          });
          //...................................................................................................
          return test(g);
        })();
        (() => {          //-----------------------------------------------------------------------------------------------------
          var g, gnd;
          g = new Grammar({
            name: 'g',
            emit_signals: false
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          //...................................................................................................
          gnd.new_token({
            name: 'name',
            fit: /(?<initial>[A-Z])[a-z]+/dvy
          });
          gnd.new_token({
            name: 'ordinal',
            fit: /(?<ordinal>[0-9]+)(?:st|nd|rd|th)/dvy
          });
          gnd.new_token({
            name: 'number',
            fit: /[0-9]+/dvy
          });
          gnd.new_token({
            name: 'ws',
            fit: /\s+/dvy
          });
          gnd.new_token({
            name: 'word',
            fit: /[a-z]+/divy
          });
          gnd.new_token({
            name: 'other',
            fit: /[^a-z0-9\s]+/divy
          });
          //...................................................................................................
          return test(g);
        })();
        (() => {          //-----------------------------------------------------------------------------------------------------
          var g, gnd;
          g = new Grammar({
            name: 'g',
            emit_signals: false
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          //...................................................................................................
          gnd.new_token({
            name: 'name',
            fit: /(?<initial>[A-Z])[a-z]+/
          });
          gnd.new_token({
            name: 'ordinal',
            fit: /(?<ordinal>[0-9]+)(?:st|nd|rd|th)/
          });
          gnd.new_token({
            name: 'number',
            fit: /[0-9]+/
          });
          gnd.new_token({
            name: 'ws',
            fit: /\s+/
          });
          gnd.new_token({
            name: 'word',
            fit: /[a-z]+/i
          });
          gnd.new_token({
            name: 'other',
            fit: /[^a-z0-9\s]+/i
          });
          //...................................................................................................
          return test(g);
        })();
        (() => {          //-----------------------------------------------------------------------------------------------------
          var g, gnd;
          g = new Grammar({
            name: 'g',
            emit_signals: false
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          //...................................................................................................
          gnd.new_token({
            name: 'name',
            fit: /(?<initial>[A-Z])[a-z]+/v
          });
          gnd.new_token({
            name: 'ordinal',
            fit: /(?<ordinal>[0-9]+)(?:st|nd|rd|th)/u
          });
          gnd.new_token({
            name: 'number',
            fit: /[0-9]+/
          });
          gnd.new_token({
            name: 'ws',
            fit: /\s+/
          });
          gnd.new_token({
            name: 'word',
            fit: /[a-z]+/i
          });
          gnd.new_token({
            name: 'other',
            fit: /[^a-z0-9\s]+/i
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
          var first, fit, g, i, len, position, probes_and_matchers, source, Ωilxt_145;
          probes_and_matchers = [[[0, 'abcd1234'], "first.one_letter'a'"], [[1, 'abcd1234'], "first.one_letter'b'"], [[2, 'abcd1234'], "first.one_letter'c'"], [[3, 'abcd1234'], "first.one_letter'd'"], [[4, 'abcd1234'], "first.one_digit'1'"], [[5, 'abcd1234'], "first.one_digit'2'"], [[0, '123abc'], "first.one_digit'1'"], [[1, '123abc'], "first.one_digit'2'"], [[2, '123abc'], "first.one_digit'3'"], [[3, '123abc'], "first.one_letter'a'"], [[4, '123abc'], "first.one_letter'b'"], [[5, '123abc'], "first.one_letter'c'"]];
          //...................................................................................................
          g = new Grammar();
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'one_digit',
            fit: /[0-9]{1}/i
          });
          first.new_token({
            name: 'two_digits',
            fit: /[0-9]{2}/i
          });
          first.new_token({
            name: 'three_digits',
            fit: /[0-9]{3}/i
          });
          first.new_token({
            name: 'four_digits',
            fit: /[0-9]{4}/i
          });
          first.new_token({
            name: 'one_letter',
            fit: /[a-z]{1}/i
          });
          first.new_token({
            name: 'two_letters',
            fit: /[a-z]{2}/i
          });
          first.new_token({
            name: 'three_letters',
            fit: /[a-z]{3}/i
          });
          first.new_token({
            name: 'four_letters',
            fit: /[a-z]{4}/i
          });
//.....................................................................................................
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [[position, source], fit] = probes_and_matchers[i];
            this.eq((Ωilxt_145 = function() {
              return condense_lexemes(first.match_first_at(position, source));
            }), fit);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'first', longest tokens first */
          var first, fit, g, i, len, position, probes_and_matchers, source, Ωilxt_146;
          probes_and_matchers = [[[0, 'abcd1234'], "first.four_letters'abcd'"], [[1, 'abcd1234'], "first.three_letters'bcd'"], [[2, 'abcd1234'], "first.two_letters'cd'"], [[3, 'abcd1234'], "first.one_letter'd'"], [[4, 'abcd1234'], "first.four_digits'1234'"], [[5, 'abcd1234'], "first.three_digits'234'"], [[0, '123abc'], "first.three_digits'123'"], [[1, '123abc'], "first.two_digits'23'"], [[2, '123abc'], "first.one_digit'3'"], [[3, '123abc'], "first.three_letters'abc'"], [[4, '123abc'], "first.two_letters'bc'"], [[5, '123abc'], "first.one_letter'c'"]];
          //...................................................................................................
          g = new Grammar();
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'four_digits',
            fit: /[0-9]{4}/i
          });
          first.new_token({
            name: 'three_digits',
            fit: /[0-9]{3}/i
          });
          first.new_token({
            name: 'two_digits',
            fit: /[0-9]{2}/i
          });
          first.new_token({
            name: 'one_digit',
            fit: /[0-9]{1}/i
          });
          first.new_token({
            name: 'four_letters',
            fit: /[a-z]{4}/i
          });
          first.new_token({
            name: 'three_letters',
            fit: /[a-z]{3}/i
          });
          first.new_token({
            name: 'two_letters',
            fit: /[a-z]{2}/i
          });
          first.new_token({
            name: 'one_letter',
            fit: /[a-z]{1}/i
          });
//.....................................................................................................
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [[position, source], fit] = probes_and_matchers[i];
            this.eq((Ωilxt_146 = function() {
              return condense_lexemes(first.match_first_at(position, source));
            }), fit);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'longest', shortest tokens first */
          var first, fit, g, i, len, position, probes_and_matchers, source, Ωilxt_147;
          probes_and_matchers = [[[0, 'abcd1234'], "first.four_letters'abcd'"], [[1, 'abcd1234'], "first.three_letters'bcd'"], [[2, 'abcd1234'], "first.two_letters'cd'"], [[3, 'abcd1234'], "first.one_letter'd'"], [[4, 'abcd1234'], "first.four_digits'1234'"], [[5, 'abcd1234'], "first.three_digits'234'"], [[0, '123abc'], "first.three_digits'123'"], [[1, '123abc'], "first.two_digits'23'"], [[2, '123abc'], "first.one_digit'3'"], [[3, '123abc'], "first.three_letters'abc'"], [[4, '123abc'], "first.two_letters'bc'"], [[5, '123abc'], "first.one_letter'c'"]];
          //...................................................................................................
          g = new Grammar();
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'one_digit',
            fit: /[0-9]{1}/i
          });
          first.new_token({
            name: 'two_digits',
            fit: /[0-9]{2}/i
          });
          first.new_token({
            name: 'three_digits',
            fit: /[0-9]{3}/i
          });
          first.new_token({
            name: 'four_digits',
            fit: /[0-9]{4}/i
          });
          first.new_token({
            name: 'one_letter',
            fit: /[a-z]{1}/i
          });
          first.new_token({
            name: 'two_letters',
            fit: /[a-z]{2}/i
          });
          first.new_token({
            name: 'three_letters',
            fit: /[a-z]{3}/i
          });
          first.new_token({
            name: 'four_letters',
            fit: /[a-z]{4}/i
          });
//.....................................................................................................
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [[position, source], fit] = probes_and_matchers[i];
            this.eq((Ωilxt_147 = function() {
              return condense_lexemes(first.match_longest_at(position, source));
            }), fit);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'longest', longest tokens first */
          var first, fit, g, i, len, position, probes_and_matchers, source, Ωilxt_148;
          probes_and_matchers = [[[0, 'abcd1234'], "first.four_letters'abcd'"], [[1, 'abcd1234'], "first.three_letters'bcd'"], [[2, 'abcd1234'], "first.two_letters'cd'"], [[3, 'abcd1234'], "first.one_letter'd'"], [[4, 'abcd1234'], "first.four_digits'1234'"], [[5, 'abcd1234'], "first.three_digits'234'"], [[0, '123abc'], "first.three_digits'123'"], [[1, '123abc'], "first.two_digits'23'"], [[2, '123abc'], "first.one_digit'3'"], [[3, '123abc'], "first.three_letters'abc'"], [[4, '123abc'], "first.two_letters'bc'"], [[5, '123abc'], "first.one_letter'c'"]];
          //...................................................................................................
          g = new Grammar();
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'four_digits',
            fit: /[0-9]{4}/i
          });
          first.new_token({
            name: 'three_digits',
            fit: /[0-9]{3}/i
          });
          first.new_token({
            name: 'two_digits',
            fit: /[0-9]{2}/i
          });
          first.new_token({
            name: 'one_digit',
            fit: /[0-9]{1}/i
          });
          first.new_token({
            name: 'four_letters',
            fit: /[a-z]{4}/i
          });
          first.new_token({
            name: 'three_letters',
            fit: /[a-z]{3}/i
          });
          first.new_token({
            name: 'two_letters',
            fit: /[a-z]{2}/i
          });
          first.new_token({
            name: 'one_letter',
            fit: /[a-z]{1}/i
          });
//.....................................................................................................
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [[position, source], fit] = probes_and_matchers[i];
            this.eq((Ωilxt_148 = function() {
              return condense_lexemes(first.match_longest_at(position, source));
            }), fit);
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
              var first, fit, g, j, l, len, len1, position, source, token_cfg, token_cfgs, Ωilxt_149;
              g = new Grammar();
              first = g.new_level({
                name: 'first'
              });
              token_cfgs = shuffle([
                {
                  name: 'one_digit',
                  fit: /[0-9]{1}/i
                },
                {
                  name: 'two_digits',
                  fit: /[0-9]{2}/i
                },
                {
                  name: 'three_digits',
                  fit: /[0-9]{3}/i
                },
                {
                  name: 'four_digits',
                  fit: /[0-9]{4}/i
                },
                {
                  name: 'one_letter',
                  fit: /[a-z]{1}/i
                },
                {
                  name: 'two_letters',
                  fit: /[a-z]{2}/i
                },
                {
                  name: 'three_letters',
                  fit: /[a-z]{3}/i
                },
                {
                  name: 'four_letters',
                  fit: /[a-z]{4}/i
                }
              ]);
              for (j = 0, len = token_cfgs.length; j < len; j++) {
                token_cfg = token_cfgs[j];
                first.new_token(token_cfg);
              }
//...............................................................................................
              for (l = 0, len1 = probes_and_matchers.length; l < len1; l++) {
                [[position, source], fit] = probes_and_matchers[l];
                this.eq((Ωilxt_149 = function() {
                  return condense_lexemes(first.match_longest_at(position, source));
                }), fit);
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
              var first, fit, g, j, l, len, len1, source, token_cfg, token_cfgs, Ωilxt_150, Ωilxt_151, Ωilxt_152;
              g = new Grammar({
                strategy: 'longest',
                emit_signals: false
              });
              first = g.new_level({
                name: 'first'
              });
              token_cfgs = shuffle([
                {
                  name: 'one_digit',
                  fit: /[0-9]{1}/i
                },
                {
                  name: 'two_digits',
                  fit: /[0-9]{2}/i
                },
                {
                  name: 'three_digits',
                  fit: /[0-9]{3}/i
                },
                {
                  name: 'four_digits',
                  fit: /[0-9]{4}/i
                },
                {
                  name: 'one_letter',
                  fit: /[a-z]{1}/i
                },
                {
                  name: 'two_letters',
                  fit: /[a-z]{2}/i
                },
                {
                  name: 'three_letters',
                  fit: /[a-z]{3}/i
                },
                {
                  name: 'four_letters',
                  fit: /[a-z]{4}/i
                }
              ]);
              for (j = 0, len = token_cfgs.length; j < len; j++) {
                token_cfg = token_cfgs[j];
                first.new_token(token_cfg);
              }
              //...............................................................................................
              this.eq((Ωilxt_150 = function() {
                return g.cfg.strategy;
              }), 'longest');
              this.eq((Ωilxt_151 = function() {
                return first.strategy;
              }), 'longest');
              for (l = 0, len1 = probes_and_matchers.length; l < len1; l++) {
                [source, fit] = probes_and_matchers[l];
                this.eq((Ωilxt_152 = function() {
                  return condense_lexemes(g.scan_to_list(source));
                }), fit);
              }
              //...............................................................................................
              return null;
            })();
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'first', scrambled tokens */
          var first, fit, g, i, len, probes_and_matchers, source, Ωilxt_153, Ωilxt_154, Ωilxt_155;
          probes_and_matchers = [['abcd1234', "first.two_letters'ab'|first.two_letters'cd'|first.one_digit'1'|first.one_digit'2'|first.one_digit'3'|first.one_digit'4'"], ['abcde12345', "first.two_letters'ab'|first.two_letters'cd'|first.one_letter'e'|first.one_digit'1'|first.one_digit'2'|first.one_digit'3'|first.one_digit'4'|first.one_digit'5'"], ['abcdef123456', "first.two_letters'ab'|first.two_letters'cd'|first.two_letters'ef'|first.one_digit'1'|first.one_digit'2'|first.one_digit'3'|first.one_digit'4'|first.one_digit'5'|first.one_digit'6'"], ['123abc', "first.one_digit'1'|first.one_digit'2'|first.one_digit'3'|first.two_letters'ab'|first.one_letter'c'"]];
          //...................................................................................................
          g = new Grammar({
            strategy: 'first',
            emit_signals: false
          });
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'two_letters',
            fit: /[a-z]{2}/i
          });
          first.new_token({
            name: 'one_digit',
            fit: /[0-9]{1}/i
          });
          first.new_token({
            name: 'three_digits',
            fit: /[0-9]{3}/i
          });
          first.new_token({
            name: 'four_digits',
            fit: /[0-9]{4}/i
          });
          first.new_token({
            name: 'two_digits',
            fit: /[0-9]{2}/i
          });
          first.new_token({
            name: 'one_letter',
            fit: /[a-z]{1}/i
          });
          first.new_token({
            name: 'four_letters',
            fit: /[a-z]{4}/i
          });
          first.new_token({
            name: 'three_letters',
            fit: /[a-z]{3}/i
          });
          //...................................................................................................
          this.eq((Ωilxt_153 = function() {
            return g.cfg.strategy;
          }), 'first');
          this.eq((Ωilxt_154 = function() {
            return first.strategy;
          }), 'first');
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [source, fit] = probes_and_matchers[i];
            this.eq((Ωilxt_155 = function() {
              return condense_lexemes(g.scan_to_list(source));
            }), fit);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'first', long tokens first */
          var first, fit, g, i, len, probes_and_matchers, source, Ωilxt_156, Ωilxt_157, Ωilxt_158;
          probes_and_matchers = [['abcd1234', "first.four_letters'abcd'|first.four_digits'1234'"], ['abcde12345', "first.four_letters'abcd'|first.one_letter'e'|first.four_digits'1234'|first.one_digit'5'"], ['abcdef123456', "first.four_letters'abcd'|first.two_letters'ef'|first.four_digits'1234'|first.two_digits'56'"], ['123abc', "first.three_digits'123'|first.three_letters'abc'"]];
          //...................................................................................................
          g = new Grammar({
            strategy: 'first',
            emit_signals: false
          });
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'four_letters',
            fit: /[a-z]{4}/i
          });
          first.new_token({
            name: 'three_letters',
            fit: /[a-z]{3}/i
          });
          first.new_token({
            name: 'two_letters',
            fit: /[a-z]{2}/i
          });
          first.new_token({
            name: 'one_letter',
            fit: /[a-z]{1}/i
          });
          first.new_token({
            name: 'four_digits',
            fit: /[0-9]{4}/i
          });
          first.new_token({
            name: 'three_digits',
            fit: /[0-9]{3}/i
          });
          first.new_token({
            name: 'two_digits',
            fit: /[0-9]{2}/i
          });
          first.new_token({
            name: 'one_digit',
            fit: /[0-9]{1}/i
          });
          //...................................................................................................
          this.eq((Ωilxt_156 = function() {
            return g.cfg.strategy;
          }), 'first');
          this.eq((Ωilxt_157 = function() {
            return first.strategy;
          }), 'first');
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [source, fit] = probes_and_matchers[i];
            this.eq((Ωilxt_158 = function() {
              return condense_lexemes(g.scan_to_list(source));
            }), fit);
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
          var g, gnd, Ωilxt_159;
          g = new Grammar({
            strategy: 'first',
            emit_signals: false
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          gnd.new_token({
            name: 'a',
            fit: /a/
          });
          gnd.new_token({
            name: 'b',
            fit: /(?=b)/
          });
          return this.throws((Ωilxt_159 = function() {
            return g.scan_to_list("ab");
          }), /encountered zero-length match/);
        })();
        (() => {          //.....................................................................................................
          var g, gnd, Ωilxt_160;
          g = new Grammar({
            strategy: 'longest',
            emit_signals: false
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          gnd.new_token({
            name: 'a',
            fit: /a/
          });
          gnd.new_token({
            name: 'b',
            fit: /(?=b)/
          });
          return this.throws((Ωilxt_160 = function() {
            return g.scan_to_list("ab");
          }), /encountered zero-length match/);
        })();
        (() => {          //.....................................................................................................
          /* We accept the empty match here since while it does get produced as an intermediate value to find
                 the longest match, it does not get passed on as a resulting lexeme. */
          var g, gnd, Ωilxt_161;
          g = new Grammar({
            strategy: 'longest',
            emit_signals: false
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          gnd.new_token({
            name: 'a',
            fit: /[ab]/
          });
          gnd.new_token({
            name: 'b',
            fit: /(?=b)/
          });
          return this.eq((Ωilxt_161 = function() {
            return condense_lexemes(g.scan_to_list("ab"));
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
          var first, g, Ωilxt_162, Ωilxt_163;
          g = new Grammar();
          first = g.new_level({
            name: 'first'
          });
          this.throws((Ωilxt_162 = function() {
            return first.new_token({
              name: 'digit',
              fit: /[0-9]/,
              jump: 'first'
            });
          }), /cannot jump to same level/);
          this.throws((Ωilxt_163 = function() {
            return first.new_token({
              name: 'digit',
              fit: /[0-9]/,
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
        var Token, Ωilxt_164, Ωilxt_165, Ωilxt_166, Ωilxt_167, Ωilxt_168, Ωilxt_169, Ωilxt_170, Ωilxt_171, Ωilxt_172, Ωilxt_173, Ωilxt_174, Ωilxt_175, Ωilxt_176, Ωilxt_177, Ωilxt_178, Ωilxt_179, Ωilxt_180, Ωilxt_181, Ωilxt_182, Ωilxt_183, Ωilxt_184, Ωilxt_185, Ωilxt_186;
        ({Token} = require('../../../apps/interlex'));
        //.....................................................................................................
        this.eq((Ωilxt_164 = function() {
          return Token._parse_jump();
        }), null);
        this.eq((Ωilxt_165 = function() {
          return Token._parse_jump('..');
        }), {
          spec: '..',
          carry: false,
          action: 'back',
          target: '..'
        });
        this.eq((Ωilxt_166 = function() {
          return Token._parse_jump('mylevel');
        }), {
          spec: 'mylevel',
          carry: false,
          action: 'fore',
          target: 'mylevel'
        });
        this.eq((Ωilxt_167 = function() {
          return Token._parse_jump('..!');
        }), {
          spec: '..!',
          carry: true,
          action: 'back',
          target: '..'
        });
        this.eq((Ωilxt_168 = function() {
          return Token._parse_jump('mylevel!');
        }), {
          spec: 'mylevel!',
          carry: true,
          action: 'fore',
          target: 'mylevel'
        });
        this.eq((Ωilxt_169 = function() {
          return Token._parse_jump('mylevel!', {
            name: 'otherlevel'
          });
        }), {
          spec: 'mylevel!',
          carry: true,
          action: 'fore',
          target: 'mylevel'
        });
        this.throws((Ωilxt_170 = function() {
          return Token._parse_jump('..]');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_171 = function() {
          return Token._parse_jump(']..');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_172 = function() {
          return Token._parse_jump('[mylevel');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_173 = function() {
          return Token._parse_jump('mylevel[');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_174 = function() {
          return Token._parse_jump('mylevel[', {
            name: 'otherlevel'
          });
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_175 = function() {
          return Token._parse_jump('[mylevel[');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_176 = function() {
          return Token._parse_jump('[mylevel]');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_177 = function() {
          return Token._parse_jump(']mylevel');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_178 = function() {
          return Token._parse_jump('[..');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_179 = function() {
          return Token._parse_jump('[..]');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_180 = function() {
          return Token._parse_jump('..[');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_181 = function() {
          return Token._parse_jump('[...');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_182 = function() {
          return Token._parse_jump('...');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_183 = function() {
          return Token._parse_jump('%');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_184 = function() {
          return Token._parse_jump('my-name');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_185 = function() {
          return Token._parse_jump('mylevel', {
            name: 'mylevel'
          });
        }), /cannot jump to same level/);
        this.throws((Ωilxt_186 = function() {
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
          var first, g, lexeme, number, Ωilxt_187, Ωilxt_188, Ωilxt_189, Ωilxt_190, Ωilxt_191, Ωilxt_192, Ωilxt_193, Ωilxt_194, Ωilxt_195, Ωilxt_196;
          g = new Grammar({
            emit_signals: false
          });
          //...................................................................................................
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'digit',
            fit: /[0-9]/,
            jump: 'number'
          });
          first.new_token({
            name: 'other',
            fit: /[^0-9]+/
          });
          //...................................................................................................
          number = g.new_level({
            name: 'number'
          });
          number.new_token({
            name: 'digits',
            fit: /[0-9]+/
          });
          number.new_token({
            name: 'other',
            fit: /[^0-9]/,
            jump: '..'
          });
          //...................................................................................................
          [lexeme] = g.scan_to_list('5');
          this.eq((Ωilxt_187 = function() {
            return lexeme instanceof Lexeme;
          }), true);
          this.eq((Ωilxt_188 = function() {
            return lexeme.token instanceof Token;
          }), true);
          this.eq((Ωilxt_189 = function() {
            return lexeme.name;
          }), 'digit');
          this.eq((Ωilxt_190 = function() {
            return lexeme.level.name;
          }), 'first');
          this.eq((Ωilxt_191 = function() {
            return lexeme.fqname;
          }), 'first.digit');
          lexeme.set_level(number);
          this.eq((Ωilxt_192 = function() {
            return lexeme instanceof Lexeme;
          }), true);
          this.eq((Ωilxt_193 = function() {
            return lexeme.token instanceof Token;
          }), true);
          this.eq((Ωilxt_194 = function() {
            return lexeme.name;
          }), 'digit');
          this.eq((Ωilxt_195 = function() {
            return lexeme.level.name;
          }), 'number');
          return this.eq((Ωilxt_196 = function() {
            return lexeme.fqname;
          }), 'number.digit');
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      carrying_and_sticking_jumps: function() {
        var Grammar, g_cfg;
        ({Grammar} = require('../../../apps/interlex'));
        g_cfg = {
          emit_signals: false
        };
        (() => {          //.....................................................................................................
          /* forejump carries, backjump sticks */
          var dqstring, first, g, lexemes, Ωilxt_197, Ωilxt_198, Ωilxt_199, Ωilxt_200, Ωilxt_201, Ωilxt_202, Ωilxt_203, Ωilxt_204, Ωilxt_205, Ωilxt_206;
          g = new Grammar(g_cfg);
          //...................................................................................................
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'other',
            fit: /[^"]+/
          });
          first.new_token({
            name: 'dq',
            fit: /"/,
            jump: 'dqstring!'
          });
          //...................................................................................................
          dqstring = g.new_level({
            name: 'dqstring'
          });
          dqstring.new_token({
            name: 'other',
            fit: /[^"]+/
          });
          dqstring.new_token({
            name: 'dq',
            fit: /"/,
            jump: '..'
          });
          //...................................................................................................
          this.eq((Ωilxt_197 = function() {
            return first.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_198 = function() {
            return first.tokens.dq.jump;
          }), {
            spec: 'dqstring!',
            carry: true,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_199 = function() {
            return dqstring.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_200 = function() {
            return dqstring.tokens.dq.jump;
          }), {
            spec: '..',
            carry: false,
            action: 'back',
            target: '..'
          });
          //...................................................................................................
          lexemes = g.scan('Bob said "wow".');
          this.eq((Ωilxt_201 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: 'Bob said ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_202 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.dq',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_203 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.other',
            hit: 'wow',
            pos: '1:10:13'
          });
          this.eq((Ωilxt_204 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.dq',
            hit: '"',
            pos: '1:13:14'
          });
          this.eq((Ωilxt_205 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: '.',
            pos: '1:14:15'
          });
          this.eq((Ωilxt_206 = function() {
            return lexemes.next().done;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          /* forejump sticks, backjump carries */
          var dqstring, first, g, lexemes, Ωilxt_207, Ωilxt_208, Ωilxt_209, Ωilxt_210, Ωilxt_211, Ωilxt_212, Ωilxt_213, Ωilxt_214, Ωilxt_215, Ωilxt_216;
          g = new Grammar(g_cfg);
          //...................................................................................................
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'other',
            fit: /[^"]+/
          });
          first.new_token({
            name: 'dq',
            fit: /"/,
            jump: 'dqstring'
          });
          //...................................................................................................
          dqstring = g.new_level({
            name: 'dqstring'
          });
          dqstring.new_token({
            name: 'other',
            fit: /[^"]+/
          });
          dqstring.new_token({
            name: 'dq',
            fit: /"/,
            jump: '..!'
          });
          //...................................................................................................
          this.eq((Ωilxt_207 = function() {
            return first.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_208 = function() {
            return first.tokens.dq.jump;
          }), {
            spec: 'dqstring',
            carry: false,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_209 = function() {
            return dqstring.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_210 = function() {
            return dqstring.tokens.dq.jump;
          }), {
            spec: '..!',
            carry: true,
            action: 'back',
            target: '..'
          });
          //...................................................................................................
          lexemes = g.scan('Bob said "wow".');
          this.eq((Ωilxt_211 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: 'Bob said ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_212 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.dq',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_213 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.other',
            hit: 'wow',
            pos: '1:10:13'
          });
          this.eq((Ωilxt_214 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.dq',
            hit: '"',
            pos: '1:13:14'
          });
          this.eq((Ωilxt_215 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: '.',
            pos: '1:14:15'
          });
          this.eq((Ωilxt_216 = function() {
            return lexemes.next().done;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          /* forejump carries, backjump carries */
          var dqstring, first, g, lexemes, Ωilxt_217, Ωilxt_218, Ωilxt_219, Ωilxt_220, Ωilxt_221, Ωilxt_222, Ωilxt_223, Ωilxt_224, Ωilxt_225, Ωilxt_226;
          g = new Grammar(g_cfg);
          //...................................................................................................
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'other',
            fit: /[^"]+/
          });
          first.new_token({
            name: 'dq',
            fit: /"/,
            jump: 'dqstring!'
          });
          //...................................................................................................
          dqstring = g.new_level({
            name: 'dqstring'
          });
          dqstring.new_token({
            name: 'other',
            fit: /[^"]+/
          });
          dqstring.new_token({
            name: 'dq',
            fit: /"/,
            jump: '..!'
          });
          //...................................................................................................
          this.eq((Ωilxt_217 = function() {
            return first.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_218 = function() {
            return first.tokens.dq.jump;
          }), {
            spec: 'dqstring!',
            carry: true,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_219 = function() {
            return dqstring.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_220 = function() {
            return dqstring.tokens.dq.jump;
          }), {
            spec: '..!',
            carry: true,
            action: 'back',
            target: '..'
          });
          //...................................................................................................
          lexemes = g.scan('Bob said "wow".');
          this.eq((Ωilxt_221 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: 'Bob said ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_222 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.dq',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_223 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.other',
            hit: 'wow',
            pos: '1:10:13'
          });
          this.eq((Ωilxt_224 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.dq',
            hit: '"',
            pos: '1:13:14'
          });
          this.eq((Ωilxt_225 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: '.',
            pos: '1:14:15'
          });
          this.eq((Ωilxt_226 = function() {
            return lexemes.next().done;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          /* forejump sticks, backjump sticks */
          var dqstring, first, g, lexemes, Ωilxt_227, Ωilxt_228, Ωilxt_229, Ωilxt_230, Ωilxt_231, Ωilxt_232, Ωilxt_233, Ωilxt_234, Ωilxt_235, Ωilxt_236;
          g = new Grammar(g_cfg);
          //...................................................................................................
          first = g.new_level({
            name: 'first'
          });
          first.new_token({
            name: 'other',
            fit: /[^"]+/
          });
          first.new_token({
            name: 'dq',
            fit: /"/,
            jump: 'dqstring'
          });
          //...................................................................................................
          dqstring = g.new_level({
            name: 'dqstring'
          });
          dqstring.new_token({
            name: 'other',
            fit: /[^"]+/
          });
          dqstring.new_token({
            name: 'dq',
            fit: /"/,
            jump: '..'
          });
          //...................................................................................................
          this.eq((Ωilxt_227 = function() {
            return first.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_228 = function() {
            return first.tokens.dq.jump;
          }), {
            spec: 'dqstring',
            carry: false,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_229 = function() {
            return dqstring.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_230 = function() {
            return dqstring.tokens.dq.jump;
          }), {
            spec: '..',
            carry: false,
            action: 'back',
            target: '..'
          });
          //...................................................................................................
          lexemes = g.scan('Bob said "wow".');
          this.eq((Ωilxt_231 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: 'Bob said ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_232 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.dq',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_233 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.other',
            hit: 'wow',
            pos: '1:10:13'
          });
          this.eq((Ωilxt_234 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.dq',
            hit: '"',
            pos: '1:13:14'
          });
          this.eq((Ωilxt_235 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: '.',
            pos: '1:14:15'
          });
          this.eq((Ωilxt_236 = function() {
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
          var fit, lexemes, probe, x, Ωilxt_237, Ωilxt_238, Ωilxt_239;
          for (x of probes_and_matchers) {
            [probe, fit] = x;
            g.reset_lnr();
            lexemes = g.scan_to_list(probe);
            this.eq((Ωilxt_237 = function() {
              return condense_lexemes(lexemes);
            }), fit.condensed);
            this.eq((Ωilxt_238 = function() {
              return lexemes.length;
            }), fit.length);
            g.reset_lnr();
            this.eq((Ωilxt_239 = function() {
              return [...(g.scan(probe))];
            }), lexemes);
          }
          return null;
        };
        (() => {          //-----------------------------------------------------------------------------------------------------
          var g, gnd, number, source;
          g = new Grammar({
            name: 'g',
            emit_signals: false
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
            fit: /[a-z]+/i
          });
          gnd.new_token({
            name: 'before_digits',
            fit: /(?=[0-9])/i,
            jump: 'number'
          });
          gnd.new_token({
            name: 'ws',
            fit: /\s+/i
          });
          //...................................................................................................
          number.new_token({
            name: 'digits',
            fit: /[0-9]+/i,
            jump: '..'
          });
          //...................................................................................................
          test(g);
          source = probes_and_matchers[0][0];
          info('Ωilxt_240', rpr(source));
          g.reset_lnr();
          return tabulate_lexemes(g.scan(source));
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      can_use_zero_length_matchers_with_jumps_2: function() {
        var Grammar, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        (() => {          //-----------------------------------------------------------------------------------------------------
          var g, gnd, lexemes, number, source, Ωilxt_242, Ωilxt_243, Ωilxt_244, Ωilxt_245, Ωilxt_246, Ωilxt_247, Ωilxt_248;
          g = new Grammar({
            name: 'g',
            emit_signals: false
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
            fit: /[a-zA-Z]+/
          });
          gnd.new_token({
            name: 'before_digits',
            fit: /(?=[0-9])/,
            jump: 'number'
          });
          gnd.new_token({
            name: 'ws',
            fit: /\s+/
          });
          //...................................................................................................
          number.new_token({
            name: 'integer',
            fit: /[0-9]+/
          });
          number.new_token({
            name: 'unit',
            fit: /[a-zA-Z]+/,
            jump: '..'
          });
          //...................................................................................................
          source = "99kg23mm";
          info('Ωilxt_241', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_242 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.before_digits',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_243 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '99',
            pos: '1:0:2'
          });
          this.eq((Ωilxt_244 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'kg',
            pos: '1:2:4'
          });
          this.eq((Ωilxt_245 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.before_digits',
            hit: '',
            pos: '1:4:4'
          });
          this.eq((Ωilxt_246 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '23',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_247 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'mm',
            pos: '1:6:8'
          });
          return this.eq((Ωilxt_248 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      duplicate_token_names_are_forbidden: function() {
        var Grammar, Token, rx;
        ({Grammar, Token, rx} = require('../../../apps/interlex'));
        (() => {          //-----------------------------------------------------------------------------------------------------
          var g, gnd, Ωilxt_249, Ωilxt_250;
          g = new Grammar({
            name: 'g',
            emit_signals: false
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          //...................................................................................................
          this.eq((Ωilxt_249 = function() {
            return (gnd.new_token({
              name: 'letters',
              fit: /[a-z]+/
            })) instanceof Token;
          }), true);
          return this.throws((Ωilxt_250 = function() {
            return gnd.new_token({
              name: 'letters',
              fit: /[A-Z]+/
            });
          }), null);
        })();
        //.....................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    stack: function() {
      var Levelstack;
      Levelstack = (require('../../../apps/interlex')).internals.Levelstack;
      (() => {
        var stack, Ωilxt_251, Ωilxt_252, Ωilxt_253, Ωilxt_254, Ωilxt_255;
        stack = new Levelstack();
        this.eq((Ωilxt_251 = function() {
          return stack.is_empty;
        }), true);
        stack.push({
          name: '1'
        });
        this.eq((Ωilxt_252 = function() {
          return stack.length;
        }), 1);
        this.eq((Ωilxt_253 = function() {
          return stack.peek();
        }), {
          name: '1'
        });
        this.eq((Ωilxt_254 = function() {
          return stack.pop();
        }), {
          name: '1'
        });
        return this.eq((Ωilxt_255 = function() {
          return stack.length;
        }), 0);
      })();
      (() => {
        var stack, Ωilxt_256, Ωilxt_257, Ωilxt_258, Ωilxt_259;
        stack = new Levelstack({
          name: '1'
        });
        this.eq((Ωilxt_256 = function() {
          return stack.length;
        }), 1);
        this.eq((Ωilxt_257 = function() {
          return stack.peek();
        }), {
          name: '1'
        });
        this.eq((Ωilxt_258 = function() {
          return stack.pop();
        }), {
          name: '1'
        });
        return this.eq((Ωilxt_259 = function() {
          return stack.length;
        }), 0);
      })();
      (() => {
        var stack, Ωilxt_260, Ωilxt_261, Ωilxt_262, Ωilxt_263, Ωilxt_264, Ωilxt_265, Ωilxt_266;
        stack = new Levelstack({
          name: '1'
        }, {
          name: '2'
        });
        this.eq((Ωilxt_260 = function() {
          return stack.length;
        }), 2);
        this.eq((Ωilxt_261 = function() {
          return stack.peek();
        }), {
          name: '2'
        });
        this.eq((Ωilxt_262 = function() {
          return stack.popnpeek();
        }), {
          name: '1'
        });
        this.eq((Ωilxt_263 = function() {
          return stack.length;
        }), 1);
        this.eq((Ωilxt_264 = function() {
          return stack.peek();
        }), {
          name: '1'
        });
        this.eq((Ωilxt_265 = function() {
          return stack.pop();
        }), {
          name: '1'
        });
        return this.eq((Ωilxt_266 = function() {
          return stack.length;
        }), 0);
      })();
      (() => {
        var stack, Ωilxt_267, Ωilxt_270, Ωilxt_271, Ωilxt_273, Ωilxt_274, Ωilxt_275;
        stack = new Levelstack({
          name: '1'
        }, {
          name: '2'
        });
        this.eq((Ωilxt_267 = function() {
          return stack.length;
        }), 2);
        // @eq     ( Ωilxt_268 = -> stack.peek_name()                ), '2'
        // @eq     ( Ωilxt_269 = -> stack.popnpeek_name()            ), '1'
        stack.pop();
        this.eq((Ωilxt_270 = function() {
          return stack.length;
        }), 1);
        this.eq((Ωilxt_271 = function() {
          return stack.is_empty;
        }), false);
        // @eq     ( Ωilxt_272 = -> stack.peek_name()                ), '1'
        this.eq((Ωilxt_273 = function() {
          return stack.pop_name();
        }), '1');
        this.eq((Ωilxt_274 = function() {
          return stack.length;
        }), 0);
        return this.eq((Ωilxt_275 = function() {
          return stack.is_empty;
        }), true);
      })();
      (() => {
        var stack, Ωilxt_276, Ωilxt_277, Ωilxt_278, Ωilxt_279, Ωilxt_280, Ωilxt_281, Ωilxt_282, Ωilxt_284, Ωilxt_285, Ωilxt_286;
        stack = new Levelstack({
          name: '1'
        }, {
          name: '2'
        });
        this.eq((Ωilxt_276 = function() {
          return stack.pop();
        }), {
          name: '2'
        });
        this.eq((Ωilxt_277 = function() {
          return stack.is_empty;
        }), false);
        this.eq((Ωilxt_278 = function() {
          return stack.pop();
        }), {
          name: '1'
        });
        this.eq((Ωilxt_279 = function() {
          return stack.is_empty;
        }), true);
        this.throws((Ωilxt_280 = function() {
          return stack.pop();
        }), /stack is empty/);
        this.throws((Ωilxt_281 = function() {
          return stack.popnpeek();
        }), /stack is empty/);
        this.throws((Ωilxt_282 = function() {
          return stack.pop_name();
        }), /stack is empty/);
        // @throws ( Ωilxt_283 = -> stack.popnpeek_name()            ), /stack is empty/
        this.eq((Ωilxt_284 = function() {
          return stack.pop('fallback');
        }), 'fallback');
        this.eq((Ωilxt_285 = function() {
          return stack.popnpeek('fallback');
        }), 'fallback');
        return this.eq((Ωilxt_286 = function() {
          return stack.pop_name('fallback');
        }), 'fallback');
      })();
      // @eq     ( Ωilxt_287 = -> stack.popnpeek_name  'fallback'  ), 'fallback'
      return null;
    },
    //=========================================================================================================
    lexeme_merging: {
      //-------------------------------------------------------------------------------------------------------
      no_merging: function() {
        var Grammar, g, number, rx, text;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //=====================================================================================================
        g = new Grammar({
          name: 'g',
          emit_signals: false
        });
        text = g.new_level({
          name: 'text'
        });
        number = g.new_level({
          name: 'number'
        });
        //.....................................................................................................
        text.new_token({
          name: 'text',
          fit: /\\\p{Decimal_Number}|\p{Letter}/v
        });
        text.new_token({
          name: 'ws',
          fit: /\p{White_Space}/v
        });
        text.new_token({
          name: 'number_start',
          fit: /(?=(?!<\\)\p{Decimal_Number})/v,
          jump: 'number'
        });
        number.new_token({
          name: 'digit',
          fit: /\p{Decimal_Number}|\.|e/v
        });
        number.new_token({
          name: 'number_stop',
          fit: /(?=\P{Decimal_Number})/v,
          jump: '..'
        });
        return (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_290, Ωilxt_291, Ωilxt_292, Ωilxt_293, Ωilxt_294, Ωilxt_295, Ωilxt_296, Ωilxt_297, Ωilxt_298, Ωilxt_299, Ωilxt_300, Ωilxt_301, Ωilxt_302, Ωilxt_303, Ωilxt_304, Ωilxt_305, Ωilxt_306, Ωilxt_307, Ωilxt_308, Ωilxt_309, Ωilxt_310, Ωilxt_311, Ωilxt_312, Ωilxt_313, Ωilxt_314, Ωilxt_315, Ωilxt_316, Ωilxt_317;
          source = "R\\2D\\2 has 3556.3 Petabytes";
          // g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_288', rpr source; tabulate_lexemes g.scan source
          info('Ωilxt_289', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_290 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'R',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_291 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: '\\2',
            pos: '1:1:3'
          });
          this.eq((Ωilxt_292 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'D',
            pos: '1:3:4'
          });
          this.eq((Ωilxt_293 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: '\\2',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_294 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.ws',
            hit: ' ',
            pos: '1:6:7'
          });
          this.eq((Ωilxt_295 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'h',
            pos: '1:7:8'
          });
          this.eq((Ωilxt_296 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'a',
            pos: '1:8:9'
          });
          this.eq((Ωilxt_297 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 's',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_298 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.ws',
            hit: ' ',
            pos: '1:10:11'
          });
          this.eq((Ωilxt_299 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.number_start',
            hit: '',
            pos: '1:11:11'
          });
          this.eq((Ωilxt_300 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.digit',
            hit: '3',
            pos: '1:11:12'
          });
          this.eq((Ωilxt_301 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.digit',
            hit: '5',
            pos: '1:12:13'
          });
          this.eq((Ωilxt_302 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.digit',
            hit: '5',
            pos: '1:13:14'
          });
          this.eq((Ωilxt_303 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.digit',
            hit: '6',
            pos: '1:14:15'
          });
          this.eq((Ωilxt_304 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.digit',
            hit: '.',
            pos: '1:15:16'
          });
          this.eq((Ωilxt_305 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.digit',
            hit: '3',
            pos: '1:16:17'
          });
          this.eq((Ωilxt_306 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.number_stop',
            hit: '',
            pos: '1:17:17'
          });
          this.eq((Ωilxt_307 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.ws',
            hit: ' ',
            pos: '1:17:18'
          });
          this.eq((Ωilxt_308 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'P',
            pos: '1:18:19'
          });
          this.eq((Ωilxt_309 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'e',
            pos: '1:19:20'
          });
          this.eq((Ωilxt_310 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 't',
            pos: '1:20:21'
          });
          this.eq((Ωilxt_311 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'a',
            pos: '1:21:22'
          });
          this.eq((Ωilxt_312 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'b',
            pos: '1:22:23'
          });
          this.eq((Ωilxt_313 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'y',
            pos: '1:23:24'
          });
          this.eq((Ωilxt_314 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 't',
            pos: '1:24:25'
          });
          this.eq((Ωilxt_315 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'e',
            pos: '1:25:26'
          });
          this.eq((Ωilxt_316 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 's',
            pos: '1:26:27'
          });
          this.eq((Ωilxt_317 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
      },
      //-------------------------------------------------------------------------------------------------------
      token_merging: function() {
        var Grammar, g, number, rx, text;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //=====================================================================================================
        g = new Grammar({
          name: 'g',
          emit_signals: false
        });
        text = g.new_level({
          name: 'text'
        });
        number = g.new_level({
          name: 'number'
        });
        //.....................................................................................................
        text.new_token({
          name: 'text',
          fit: /\\\p{Decimal_Number}|\p{Letter}/v,
          merge: true
        });
        text.new_token({
          name: 'ws',
          fit: /\p{White_Space}/v,
          merge: true
        });
        text.new_token({
          name: 'number_start',
          fit: /(?=(?!<\\)\p{Decimal_Number})/v,
          jump: 'number'
        });
        number.new_token({
          name: 'digit',
          fit: /\p{Decimal_Number}|\.|e/v,
          merge: true
        });
        number.new_token({
          name: 'number_stop',
          fit: /(?=\P{Decimal_Number})/v,
          jump: '..'
        });
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_320, Ωilxt_321, Ωilxt_322, Ωilxt_323, Ωilxt_324, Ωilxt_325, Ωilxt_326, Ωilxt_327, Ωilxt_328, Ωilxt_329;
          source = "R\\2D\\2 has 3556.3 Petabytes";
          // g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_318', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          info('Ωilxt_319', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_320 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'R\\2D\\2',
            pos: '1:0:6'
          });
          this.eq((Ωilxt_321 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.ws',
            hit: ' ',
            pos: '1:6:7'
          });
          this.eq((Ωilxt_322 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'has',
            pos: '1:7:10'
          });
          this.eq((Ωilxt_323 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.ws',
            hit: ' ',
            pos: '1:10:11'
          });
          this.eq((Ωilxt_324 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.number_start',
            hit: '',
            pos: '1:11:11'
          });
          this.eq((Ωilxt_325 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.digit',
            hit: '3556.3',
            pos: '1:11:17'
          });
          this.eq((Ωilxt_326 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.number_stop',
            hit: '',
            pos: '1:17:17'
          });
          this.eq((Ωilxt_327 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.ws',
            hit: ' ',
            pos: '1:17:18'
          });
          this.eq((Ωilxt_328 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'Petabytes',
            pos: '1:18:27'
          });
          this.eq((Ωilxt_329 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      token_merging_with_default: function() {
        var Grammar, g, rx, text;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //=====================================================================================================
        g = new Grammar({
          name: 'g',
          emit_signals: false
        });
        text = g.new_level({
          name: 'text'
        });
        //.....................................................................................................
        text.new_token({
          name: 'name',
          fit: /(?<initial>\p{Uppercase_Letter})\p{Lowercase_Letter}+/v,
          merge: true
        });
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_332, Ωilxt_333;
          source = "ArcBoCyDeen";
          // g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_330', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          info('Ωilxt_331', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_332 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.name',
            hit: 'ArcBoCyDeen',
            pos: '1:0:11',
            data: {
              initial: ['A', 'B', 'C', 'D']
            }
          });
          this.eq((Ωilxt_333 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      token_merging_with_assign: function() {
        var Grammar, g, rx, text;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //=====================================================================================================
        g = new Grammar({
          name: 'g',
          emit_signals: false
        });
        text = g.new_level({
          name: 'text'
        });
        //.....................................................................................................
        text.new_token({
          name: 'name',
          fit: /(?<initial>\p{Uppercase_Letter})\p{Lowercase_Letter}+/v,
          merge: 'assign'
        });
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_336, Ωilxt_337;
          source = "ArcBoCyDeen";
          // g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_334', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          info('Ωilxt_335', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_336 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.name',
            hit: 'ArcBoCyDeen',
            pos: '1:0:11',
            data: {
              initial: 'D'
            }
          });
          this.eq((Ωilxt_337 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      token_merging_with_default_and_single_match: function() {
        var Grammar, g, rx, text;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //=====================================================================================================
        g = new Grammar({
          name: 'g',
          emit_signals: false
        });
        text = g.new_level({
          name: 'text'
        });
        //.....................................................................................................
        text.new_token({
          name: 'name',
          fit: /(?<initial>\p{Uppercase_Letter})\p{Lowercase_Letter}+/v,
          merge: true
        });
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_340, Ωilxt_341;
          source = "Arc";
          // g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_338', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          info('Ωilxt_339', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_340 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.name',
            hit: 'Arc',
            pos: '1:0:3',
            data: {
              initial: ['A']
            }
          });
          this.eq((Ωilxt_341 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      token_merging_with_merge_function: function() {
        var Grammar, g, internals, merge, rx, text;
        ({Grammar, internals, rx} = require('../../../apps/interlex'));
        //=====================================================================================================
        g = new Grammar({
          name: 'g',
          emit_signals: false
        });
        text = g.new_level({
          name: 'text'
        });
        //.....................................................................................................
        merge = function({merged, lexemes}) {
          var lxm;
          merged.assign({
            initial: (function() {
              var i, len, results;
              results = [];
              for (i = 0, len = lexemes.length; i < len; i++) {
                lxm = lexemes[i];
                results.push(lxm.data.initial);
              }
              return results;
            })()
          });
          return null;
        };
        text.new_token({
          name: 'name',
          fit: /(?<initial>\p{Uppercase_Letter})\p{Lowercase_Letter}+/v,
          merge
        });
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_344, Ωilxt_345;
          source = "ArcBoCyDeen";
          // g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_342', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          info('Ωilxt_343', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_344 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.name',
            hit: 'ArcBoCyDeen',
            pos: '1:0:11',
            data: {
              initial: ['A', 'B', 'C', 'D']
            }
          });
          this.eq((Ωilxt_345 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      token_merging_with_merge_list: function() {
        var Grammar, fit, g, internals, rx, text;
        ({Grammar, internals, rx} = require('../../../apps/interlex'));
        //=====================================================================================================
        g = new Grammar({
          name: 'g',
          emit_signals: false
        });
        text = g.new_level({
          name: 'text'
        });
        //.....................................................................................................
        fit = /(?<parts>(?<initials>\p{Uppercase_Letter})\p{Lowercase_Letter}+)/v;
        text.new_token({
          name: 'name',
          fit,
          merge: 'list'
        });
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_348, Ωilxt_349;
          source = "ArcBoCyDeen";
          // g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_346', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          info('Ωilxt_347', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_348 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.name',
            hit: 'ArcBoCyDeen',
            pos: '1:0:11',
            data: {
              parts: ['Arc', 'Bo', 'Cy', 'Deen'],
              initials: ['A', 'B', 'C', 'D']
            }
          });
          this.eq((Ωilxt_349 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        return null;
      }
    },
    // #-------------------------------------------------------------------------------------------------------
    // token_merging_with_merge_join: ->
    //   { Grammar
    //     internals
    //     rx      } = require '../../../apps/interlex'
    //   #=====================================================================================================
    //   g         = new Grammar { name: 'g', emit_signals: false, }
    //   text      = g.new_level { name: 'text', }
    //   #.....................................................................................................
    //   fit = /// (?<parts> (?<initials> \p{Uppercase_Letter} ) \p{Lowercase_Letter}+ ) ///v
    //   text.new_token { name: 'name', fit, merge: 'join', }
    //   #.....................................................................................................
    //   do =>
    //     source = "ArcBoCyDeen"
    //     # g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
    //     # info 'Ωilxt_350', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
    //     info 'Ωilxt_351', rpr source; g.reset_lnr(); lexemes = g.scan source
    //     @eq ( Ωilxt_352 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.name', hit: 'ArcBoCyDeen', pos: '1:0:11', data: { parts: [ 'ArcBoCyDeen' ], initials: [ 'ABCD' ] } }
    //     @eq ( Ωilxt_353 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
    //     return null
    //   return null

    //=========================================================================================================
    data_capture: {
      //-------------------------------------------------------------------------------------------------------
      data_property: function() {
        var Grammar, g, gnd, lexeme, name, Ωilxt_354, Ωilxt_355, Ωilxt_356, Ωilxt_357, Ωilxt_358, Ωilxt_359;
        ({Grammar} = require('../../../apps/interlex'));
        g = new Grammar();
        gnd = g.new_level({
          name: 'gnd'
        });
        name = gnd.new_token({
          name: 'name',
          fit: /(?<initial>\p{Uppercase_Letter})(?<tail>\p{Lowercase_Letter}*)/
        });
        lexeme = g.scan_first('Brobdignac');
        this.eq((Ωilxt_354 = function() {
          return lexeme.groups;
        }), void 0);
        this.eq((Ωilxt_355 = function() {
          return lexeme.data != null;
        }), true);
        this.eq((Ωilxt_356 = function() {
          return lexeme.has_data;
        }), true);
        this.eq((Ωilxt_357 = function() {
          return lexeme.data.constructor;
        }), void 0);
        this.eq((Ωilxt_358 = function() {
          return lexeme.data.initial;
        }), 'B');
        this.eq((Ωilxt_359 = function() {
          return lexeme.data.tail;
        }), 'robdignac');
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      reset_data: function() {
        var Grammar;
        ({Grammar} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var g, g_data, Ωilxt_360, Ωilxt_361, Ωilxt_362, Ωilxt_363, Ωilxt_364, Ωilxt_365;
          g = new Grammar();
          g_data = g.data;
          this.eq((Ωilxt_360 = function() {
            return type_of(g.reset_data);
          }), 'function');
          this.eq((Ωilxt_361 = function() {
            return type_of(g.assign);
          }), 'function');
          this.eq((Ωilxt_362 = function() {
            return g.data;
          }), {});
          this.eq((Ωilxt_363 = function() {
            return g.data === g_data;
          }), true);
          g.assign({
            key: 'value'
          });
          this.eq((Ωilxt_364 = function() {
            return g.data;
          }), {
            key: 'value'
          });
          this.eq((Ωilxt_365 = function() {
            return g.data === g_data;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, g_data, Ωilxt_366;
          g = new Grammar();
          g_data = g.data;
          g.assign({
            key: 'value'
          });
          this.throws((Ωilxt_366 = function() {
            return g.reset_data(false);
          }), /does not accept arguments/);
          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      data_templating: function() {
        var Grammar;
        ({Grammar} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var g, template, Ωilxt_367, Ωilxt_368, Ωilxt_369, Ωilxt_370;
          template = {
            one: 1,
            list: [],
            set: new Set()
          };
          g = new Grammar({
            data: template
          });
          this.eq((Ωilxt_367 = function() {
            return g.data;
          }), template);
          this.eq((Ωilxt_368 = function() {
            return g.data === template;
          }), false);
          this.eq((Ωilxt_369 = function() {
            return g.data.list === template.list;
          }), true);
          this.eq((Ωilxt_370 = function() {
            return g.data.set === template.set;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, matcher, template, Ωilxt_372, Ωilxt_373, Ωilxt_374, Ωilxt_375, Ωilxt_376;
          template = {
            one: 1,
            list: (function() {
              return [];
            }),
            set: (function() {
              return new Set();
            })
          };
          matcher = {
            one: 1,
            list: [],
            set: new Set()
          };
          g = new Grammar({
            data: template
          });
          /* guy_test doesn't currently recognize nested maps, sets so we're doing it the long way */
          // @eq ( Ωilxt_371 = -> g.data                           ), matcher
          this.eq((Ωilxt_372 = function() {
            return g.data === template;
          }), false);
          this.eq((Ωilxt_373 = function() {
            return g.data.list === template.list;
          }), false);
          this.eq((Ωilxt_374 = function() {
            return g.data.set === template.set;
          }), false);
          this.eq((Ωilxt_375 = function() {
            return type_of(g.data.list);
          }), 'list');
          this.eq((Ωilxt_376 = function() {
            return type_of(g.data.set);
          }), 'set');
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, matcher, template, Ωilxt_378, Ωilxt_379, Ωilxt_380, Ωilxt_381, Ωilxt_382, Ωilxt_383, Ωilxt_384, Ωilxt_385, Ωilxt_386;
          template = {
            count: 1,
            list: (function() {
              return [];
            })
          };
          matcher = {
            count: 1,
            list: []
          };
          g = new Grammar({
            data: template
          });
          /* guy_test doesn't currently recognize nested maps, sets so we're doing it the long way */
          // @eq ( Ωilxt_377 = -> g.data                           ), matcher
          this.eq((Ωilxt_378 = function() {
            return g.data.count;
          }), matcher.count);
          this.eq((Ωilxt_379 = function() {
            return g.data.list;
          }), matcher.list);
          this.eq((Ωilxt_380 = function() {
            return g.cfg.data.count === template.count;
          }), true);
          this.eq((Ωilxt_381 = function() {
            return g.cfg.data.list === g.cfg.data.list;
          }), false);
          this.eq((Ωilxt_382 = function() {
            return isa(std.list, g.cfg.data.list);
          }), true);
          g.data.count++;
          g.data.list.push('value');
          this.eq((Ωilxt_383 = function() {
            return g.data.count;
          }), 2);
          this.eq((Ωilxt_384 = function() {
            return g.data.list;
          }), ['value']);
          g.reset_data();
          this.eq((Ωilxt_385 = function() {
            return g.data.count;
          }), matcher.count);
          this.eq((Ωilxt_386 = function() {
            return g.data.list;
          }), matcher.list);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, template, Ωilxt_388, Ωilxt_389, Ωilxt_390, Ωilxt_391;
          template = {
            count: 1
          };
          g = new Grammar({
            data: template
          });
          /* guy_test doesn't currently recognize nested maps, sets so we're doing it the long way */
          // @eq ( Ωilxt_387 = -> g.data                           ), matcher
          this.eq((Ωilxt_388 = function() {
            return g.data.count;
          }), 1);
          g.data.count++;
          this.eq((Ωilxt_389 = function() {
            return g.data.count;
          }), 2);
          g.reset_data();
          this.eq((Ωilxt_390 = function() {
            return g.data.count;
          }), 1);
          g.data.count++;
          g.reset_data();
          this.eq((Ωilxt_391 = function() {
            return g.data.count;
          }), 1);
          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      grammar_cfg_reset_lnr: function() {
        var Grammar;
        ({Grammar} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var Ωilxt_392;
          return this.eq((Ωilxt_392 = function() {
            return (new Grammar()).cfg.reset_lnr;
          }), false);
        })();
        (() => {          //.....................................................................................................
          var g, gnd, lexeme, text, Ωilxt_393, Ωilxt_394, Ωilxt_395, Ωilxt_396, Ωilxt_397;
          g = new Grammar({
            reset_lnr: false
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          text = gnd.new_token({
            name: 'text',
            fit: /.+/
          });
          this.eq((Ωilxt_393 = function() {
            return g.state.lnr;
          }), 1);
          lexeme = g.scan_first('helo');
          this.eq((Ωilxt_394 = function() {
            return lexeme.lnr;
          }), 1);
          this.eq((Ωilxt_395 = function() {
            return g.state.lnr;
          }), 2);
          lexeme = g.scan_first('how');
          this.eq((Ωilxt_396 = function() {
            return lexeme.lnr;
          }), 2);
          return this.eq((Ωilxt_397 = function() {
            return g.state.lnr;
          }), 3);
        })();
        (() => {          //.....................................................................................................
          var g, gnd, lexeme, text, Ωilxt_398, Ωilxt_399, Ωilxt_400, Ωilxt_401, Ωilxt_402;
          g = new Grammar({
            reset_lnr: true
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          text = gnd.new_token({
            name: 'text',
            fit: /.+/
          });
          this.eq((Ωilxt_398 = function() {
            return g.state.lnr;
          }), 1);
          lexeme = g.scan_first('helo');
          this.eq((Ωilxt_399 = function() {
            return lexeme.lnr;
          }), 1);
          this.eq((Ωilxt_400 = function() {
            return g.state.lnr;
          }), 1);
          lexeme = g.scan_first('how');
          this.eq((Ωilxt_401 = function() {
            return lexeme.lnr;
          }), 1);
          return this.eq((Ωilxt_402 = function() {
            return g.state.lnr;
          }), 1);
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      grammar_cfg_reset_data: function() {
        var Grammar;
        ({Grammar} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var Ωilxt_403;
          return this.eq((Ωilxt_403 = function() {
            return (new Grammar()).cfg.reset_data;
          }), false);
        })();
        (() => {          //.....................................................................................................
          var g, gnd, hits, lexeme, text, Ωilxt_404, Ωilxt_405, Ωilxt_406, Ωilxt_407, Ωilxt_408, Ωilxt_409;
          g = new Grammar({
            data: {
              count: 1,
              hits: (function() {
                return [];
              })
            },
            reset_data: false
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          text = gnd.new_token({
            name: 'text',
            fit: /.+/
          });
          hits = g.data.hits;
          this.eq((Ωilxt_404 = function() {
            return g.data.count;
          }), 1);
          g.data.count++;
          lexeme = g.scan_first('helo');
          g.data.hits.push(lexeme.hit);
          this.eq((Ωilxt_405 = function() {
            return g.data.count;
          }), 2);
          this.eq((Ωilxt_406 = function() {
            return g.data.hits;
          }), ['helo']);
          g.data.count++;
          lexeme = g.scan_first('how');
          g.data.hits.push(lexeme.hit);
          this.eq((Ωilxt_407 = function() {
            return g.data.count;
          }), 3);
          this.eq((Ωilxt_408 = function() {
            return g.data.hits;
          }), ['helo', 'how']);
          return this.eq((Ωilxt_409 = function() {
            return g.data.hits === hits;
          }), true);
        })();
        (() => {          //.....................................................................................................
          var g, gnd, hits, lexeme, text, Ωilxt_410, Ωilxt_411, Ωilxt_412, Ωilxt_413, Ωilxt_414, Ωilxt_415;
          g = new Grammar({
            data: {
              count: 1,
              hits: (function() {
                return [];
              })
            },
            reset_data: true
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          text = gnd.new_token({
            name: 'text',
            fit: /.+/
          });
          hits = g.data.hits;
          this.eq((Ωilxt_410 = function() {
            return g.data.count;
          }), 1);
          g.data.count++;
          lexeme = g.scan_first('helo');
          g.data.hits.push(lexeme.hit);
          this.eq((Ωilxt_411 = function() {
            return g.data.count;
          }), 1);
          this.eq((Ωilxt_412 = function() {
            return g.data.hits;
          }), ['helo']);
          g.data.count++;
          lexeme = g.scan_first('how');
          g.data.hits.push(lexeme.hit);
          this.eq((Ωilxt_413 = function() {
            return g.data.count;
          }), 1);
          this.eq((Ωilxt_414 = function() {
            return g.data.hits;
          }), ['how']);
          return this.eq((Ωilxt_415 = function() {
            return g.data.hits === hits;
          }), false);
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      grammar_cfg_reset_errors: function() {
        var Grammar;
        ({Grammar} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var Ωilxt_416;
          return this.eq((Ωilxt_416 = function() {
            return (new Grammar()).cfg.reset_errors;
          }), false);
        })();
        (() => {          //.....................................................................................................
          var g, gnd, hits, lexeme, text, Ωilxt_417, Ωilxt_418, Ωilxt_419, Ωilxt_420, Ωilxt_421, Ωilxt_422;
          g = new Grammar({
            data: {
              count: 1,
              hits: (function() {
                return [];
              })
            },
            reset_errors: false
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          text = gnd.new_token({
            name: 'text',
            fit: /[0-9]+/
          });
          hits = g.data.hits;
          lexeme = g.scan_first('helo');
          this.eq((Ωilxt_417 = function() {
            return g.state.errors.length;
          }), 1);
          this.eq((Ωilxt_418 = function() {
            return g.has_errors;
          }), true);
          lexeme = g.scan_first('how');
          this.eq((Ωilxt_419 = function() {
            return g.state.errors.length;
          }), 2);
          this.eq((Ωilxt_420 = function() {
            return g.has_errors;
          }), true);
          lexeme = g.scan_first('753');
          this.eq((Ωilxt_421 = function() {
            return g.state.errors.length;
          }), 2);
          return this.eq((Ωilxt_422 = function() {
            return g.has_errors;
          }), true);
        })();
        // #.....................................................................................................
        // do =>
        //   g         = new Grammar { data: { count: 1, hits: ( -> [] ), }, reset_errors: true, }
        //   gnd       = g.new_level { name: 'gnd', }
        //   text      = gnd.new_token { name: 'text', fit: /[0-9]+/, }
        //   hits      = g.data.hits
        //   lexeme = g.scan_first 'helo'
        //   @eq ( Ωilxt_423 = -> g.data.hits          ), [ 'helo', ]
        //   lexeme = g.scan_first 'how'
        //   @eq ( Ωilxt_424 = -> g.data.hits          ), [ 'how', ]
        //   @eq ( Ωilxt_425 = -> g.data.hits is hits  ), false
        //.....................................................................................................
        return null;
      },
      // #-------------------------------------------------------------------------------------------------------
      // reset: ->
      //   { Grammar } = require '../../../apps/interlex'
      //   #.....................................................................................................
      //   do =>
      //     template  = { one: 1, list: [], set: new Set(), }
      //     g         = new Grammar { data: template, }
      //     @eq ( Ωilxt_426 = -> g.data                           ), template
      //   #.....................................................................................................
      //   return null
      data_casting: function() {},
      data_absorption: function() {}
    },
    // * **`[—]`** `Grammar::reset: ({ lnr: 1, data: null, }) ->`
    // * **`[+]`** `reset_lnr: ( lnr = 1 ) ->`
    // * **`[—]`** `reset_data: ( data = null ) ->`
    // * **`[—]`** `grammar_cfg = { reset_on_scan: { lnr: 1, data: null }, }` (also `true`, `false`)
    // * **`[—]`** `grammar_cfg = { absorb_data: false, }` (also `true`)

    //=========================================================================================================
    signals: {
      //-------------------------------------------------------------------------------------------------------
      cfg_settings: function() {
        var Grammar, Ωilxt_427, Ωilxt_428, Ωilxt_429, Ωilxt_430;
        ({Grammar} = require('../../../apps/interlex'));
        this.eq((Ωilxt_427 = function() {
          return (new Grammar({
            emit_signals: false
          })).cfg.emit_signals;
        }), false);
        this.eq((Ωilxt_428 = function() {
          return (new Grammar({
            emit_signals: true
          })).cfg.emit_signals;
        }), true);
        this.eq((Ωilxt_429 = function() {
          return (new Grammar({})).cfg.emit_signals;
        }), true);
        this.eq((Ωilxt_430 = function() {
          return (new Grammar()).cfg.emit_signals;
        }), true);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      lexeme_props: function() {
        var Grammar, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var extract_props, g, level_one, level_two, lexemes, source, Ωilxt_434, Ωilxt_435, Ωilxt_436, Ωilxt_437, Ωilxt_438, Ωilxt_439, Ωilxt_440, Ωilxt_441, Ωilxt_442, Ωilxt_443;
          g = new Grammar({
            name: 'g',
            emit_signals: true,
            loop_errors: 'emit'
          });
          level_one = g.new_level({
            name: 'level_one'
          });
          level_two = g.new_level({
            name: 'level_two'
          });
          //...................................................................................................
          level_one.new_token({
            name: 'to_level_two',
            fit: /(?=)/,
            jump: 'level_two'
          });
          level_two.new_token({
            name: 'to_level_one',
            fit: /|/,
            jump: 'level_one'
          });
          //...................................................................................................
          extract_props = function(lexeme) {
            if (lexeme == null) {
              return null;
            }
            return {
              fqname: lexeme.fqname,
              is_system: lexeme.is_system,
              is_error: lexeme.is_error,
              is_signal: lexeme.is_signal,
              is_user: lexeme.is_user
            };
          };
          //...................................................................................................
          source = "doesn't matter";
          // info 'Ωilxt_431', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωilxt_432', rpr source; g.reset_lnr(); echo extract_props lexeme for lexeme from g.scan source
          info('Ωilxt_433', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_434 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            is_system: true,
            is_error: false,
            is_signal: true,
            is_user: false
          });
          this.eq((Ωilxt_435 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            is_system: true,
            is_error: false,
            is_signal: true,
            is_user: false
          });
          this.eq((Ωilxt_436 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'level_one.to_level_two',
            is_system: false,
            is_error: false,
            is_signal: false,
            is_user: true
          });
          this.eq((Ωilxt_437 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            is_system: true,
            is_error: false,
            is_signal: true,
            is_user: false
          });
          this.eq((Ωilxt_438 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'level_two.to_level_one',
            is_system: false,
            is_error: false,
            is_signal: false,
            is_user: true
          });
          this.eq((Ωilxt_439 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$error.loop',
            is_system: true,
            is_error: true,
            is_signal: false,
            is_user: false
          });
          this.eq((Ωilxt_440 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            is_system: true,
            is_error: false,
            is_signal: true,
            is_user: false
          });
          this.eq((Ωilxt_441 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$error.earlystop',
            is_system: true,
            is_error: true,
            is_signal: false,
            is_user: false
          });
          this.eq((Ωilxt_442 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            is_system: true,
            is_error: false,
            is_signal: true,
            is_user: false
          });
          this.eq((Ωilxt_443 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        //...................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      merge_jump_signals: function() {
        var Grammar, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          /* fore jump carry, back jump sticky */
          var g, gnd, lexemes, number, source, Ωilxt_447, Ωilxt_448, Ωilxt_449, Ωilxt_450, Ωilxt_451, Ωilxt_452, Ωilxt_453, Ωilxt_454, Ωilxt_455, Ωilxt_456, Ωilxt_457, Ωilxt_458;
          g = new Grammar({
            name: 'g',
            emit_signals: true
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
            fit: /[a-zA-Z]+/
          });
          gnd.new_token({
            name: 'before_digits',
            fit: /(?=[0-9])/,
            jump: 'number!'
          });
          gnd.new_token({
            name: 'ws',
            fit: /\s+/
          });
          //...................................................................................................
          number.new_token({
            name: 'integer',
            fit: /[0-9]+/
          });
          number.new_token({
            name: 'unit',
            fit: /[a-zA-Z]+/,
            jump: '..'
          });
          //...................................................................................................
          source = "99kg23mm";
          info('Ωilxt_444', rpr(source));
          tabulate_lexemes(g.scan(source));
          // info 'Ωilxt_445', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_446', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_447 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_448 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'number'
            }
          });
          this.eq((Ωilxt_449 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.before_digits',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_450 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '99',
            pos: '1:0:2'
          });
          this.eq((Ωilxt_451 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'kg',
            pos: '1:2:4'
          });
          this.eq((Ωilxt_452 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:4:4',
            data: {
              target: 'number'
            }
          });
          this.eq((Ωilxt_453 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.before_digits',
            hit: '',
            pos: '1:4:4'
          });
          this.eq((Ωilxt_454 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '23',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_455 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'mm',
            pos: '1:6:8'
          });
          this.eq((Ωilxt_456 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:8:8',
            data: {
              target: null
            }
          });
          this.eq((Ωilxt_457 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:8:8'
          });
          this.eq((Ωilxt_458 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        //...................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    infinite_loops: {
      //-------------------------------------------------------------------------------------------------------
      zero_matches_with_jumps_as_exceptions: function() {
        var Grammar, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var g, level_one, level_two, lexemes, source, Ωilxt_462, Ωilxt_463, Ωilxt_464, Ωilxt_465, Ωilxt_466, Ωilxt_467;
          g = new Grammar({
            name: 'g',
            emit_signals: true,
            loop_errors: 'throw'
          });
          level_one = g.new_level({
            name: 'level_one'
          });
          level_two = g.new_level({
            name: 'level_two'
          });
          //...................................................................................................
          level_one.new_token({
            name: 'to_level_two',
            fit: /(?=)/,
            jump: 'level_two'
          });
          level_two.new_token({
            name: 'to_level_one',
            fit: /|/,
            jump: 'level_one'
          });
          //...................................................................................................
          source = "doesn't matter";
          // info 'Ωilxt_459', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωilxt_460', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_461', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_462 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_463 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'level_one'
            }
          });
          this.eq((Ωilxt_464 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'level_one.to_level_two',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_465 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'level_two'
            }
          });
          this.eq((Ωilxt_466 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'level_two.to_level_one',
            hit: '',
            pos: '1:0:0'
          });
          this.throws((Ωilxt_467 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), /encountered loop/);
          return null;
        })();
        //...................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      zero_matches_with_jumps_as_error_signals: function() {
        var Grammar, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var g, level_one, level_two, lexemes, source, Ωilxt_471, Ωilxt_472, Ωilxt_473, Ωilxt_474, Ωilxt_475, Ωilxt_476, Ωilxt_477, Ωilxt_478, Ωilxt_479, Ωilxt_480, Ωilxt_481, Ωilxt_482, Ωilxt_483, Ωilxt_484, Ωilxt_485;
          g = new Grammar({
            name: 'g',
            emit_signals: true,
            loop_errors: 'emit'
          });
          level_one = g.new_level({
            name: 'level_one'
          });
          level_two = g.new_level({
            name: 'level_two'
          });
          //...................................................................................................
          level_one.new_token({
            name: 'to_level_two',
            fit: /(?=)/,
            jump: 'level_two'
          });
          level_two.new_token({
            name: 'to_level_one',
            fit: /|/,
            jump: 'level_one'
          });
          //...................................................................................................
          source = "doesn't matter";
          // info 'Ωilxt_468', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωilxt_469', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_470', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_471 = function() {
            return g.has_errors;
          }), false);
          this.eq((Ωilxt_472 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_473 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'level_one'
            }
          });
          this.eq((Ωilxt_474 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'level_one.to_level_two',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_475 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'level_two'
            }
          });
          this.eq((Ωilxt_476 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'level_two.to_level_one',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_477 = function() {
            return g.has_errors;
          }), false);
          this.eq((Ωilxt_478 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$error.loop',
            hit: '',
            pos: '1:0:0',
            data: {
              message: "encountered loop at position +0 (indicated by '⚠': '⚠doesn\\'t matter')"
            }
          });
          this.eq((Ωilxt_479 = function() {
            return g.has_errors;
          }), true);
          this.eq((Ωilxt_480 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: null
            }
          });
          this.eq((Ωilxt_481 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$error.earlystop',
            hit: "doesn't matter",
            pos: '1:0:14',
            data: {
              message: 'expected stop at 14, got +0'
            }
          });
          this.eq((Ωilxt_482 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_483 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          this.eq((Ωilxt_484 = function() {
            return g.has_errors;
          }), true);
          lexemes = g.scan(source);
          abbrlxm(lexemes.next().value);
          this.eq((Ωilxt_485 = function() {
            return g.has_errors;
          }), true);
          return null;
        })();
        //...................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      has_errors: function() {
        var Grammar, g, gnd, lexemes, rx, Ωilxt_486, Ωilxt_487, Ωilxt_488, Ωilxt_489, Ωilxt_490, Ωilxt_491, Ωilxt_492, Ωilxt_493, Ωilxt_494, Ωilxt_495;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //.....................................................................................................
        g = new Grammar({
          name: 'g',
          reset_errors: true,
          emit_signals: true,
          loop_errors: 'emit'
        });
        gnd = g.new_level({
          name: 'gnd'
        });
        this.eq((Ωilxt_486 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [0, false]);
        //.....................................................................................................
        g.state.errors.push(null);
        g.state.errors.push(null);
        this.eq((Ωilxt_487 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [2, true]);
        lexemes = g.scan('ghi');
        this.eq((Ωilxt_488 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [2, true]);
        this.eq((Ωilxt_489 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_490 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [0, false]);
        this.eq((Ωilxt_491 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:0:0',
          data: {
            target: null
          }
        });
        this.eq((Ωilxt_492 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$error.earlystop',
          hit: 'ghi',
          pos: '1:0:3',
          data: {
            message: 'expected stop at 3, got +0'
          }
        });
        this.eq((Ωilxt_493 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.stop',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_494 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), null);
        this.eq((Ωilxt_495 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [1, true]);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      can_throw_earlystop_errors: function() {
        var Grammar, g, gnd, lexemes, rx, Ωilxt_496, Ωilxt_497, Ωilxt_498, Ωilxt_499, Ωilxt_500, Ωilxt_501;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //.....................................................................................................
        g = new Grammar({
          name: 'g',
          reset_errors: true,
          emit_signals: true,
          loop_errors: 'emit',
          earlystop_errors: 'throw'
        });
        gnd = g.new_level({
          name: 'gnd'
        });
        this.eq((Ωilxt_496 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [0, false]);
        //.....................................................................................................
        g.state.errors.push(null);
        g.state.errors.push(null);
        this.eq((Ωilxt_497 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [2, true]);
        lexemes = g.scan('ghi');
        this.eq((Ωilxt_498 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [2, true]);
        this.eq((Ωilxt_499 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_500 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [0, false]);
        this.throws((Ωilxt_501 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), /expected stop at 3/);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      ok_when_levels_back_to_back: function() {
        var Grammar, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var g, lexemes, source, tag, text, Ωilxt_505, Ωilxt_506, Ωilxt_507, Ωilxt_508, Ωilxt_509, Ωilxt_510, Ωilxt_511, Ωilxt_512, Ωilxt_513, Ωilxt_514, Ωilxt_515, Ωilxt_516;
          g = new Grammar({
            name: 'g',
            emit_signals: true
          });
          text = g.new_level({
            name: 'text'
          });
          tag = g.new_level({
            name: 'tag'
          });
          //...................................................................................................
          text.new_token({
            name: 'pretag',
            fit: /(?=<)/,
            jump: 'tag'
          });
          text.new_token({
            name: 'text',
            fit: /.+/,
            jump: null
          });
          tag.new_token({
            name: 'tag',
            fit: /<[^>]*>+?/,
            jump: 'text'
          });
          //...................................................................................................
          // source = "<tag-a><tag-b><tag-c><tag-d>"
          // source = "<tag-a><tag-b><tag-c>"
          source = "<tag-a><tag-b>";
          // source = "<tag-a>"
          // info 'Ωilxt_502', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωilxt_503', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_504', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_505 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_506 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'text'
            }
          });
          this.eq((Ωilxt_507 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.pretag',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_508 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'tag'
            }
          });
          this.eq((Ωilxt_509 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'tag.tag',
            hit: '<tag-a>',
            pos: '1:0:7'
          });
          this.eq((Ωilxt_510 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:7:7',
            data: {
              target: 'text'
            }
          });
          this.eq((Ωilxt_511 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.pretag',
            hit: '',
            pos: '1:7:7'
          });
          this.eq((Ωilxt_512 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:7:7',
            data: {
              target: 'tag'
            }
          });
          this.eq((Ωilxt_513 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'tag.tag',
            hit: '<tag-b>',
            pos: '1:7:14'
          });
          this.eq((Ωilxt_514 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:14:14',
            data: {
              target: null
            }
          });
          this.eq((Ωilxt_515 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:14:14'
          });
          this.eq((Ωilxt_516 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        //...................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    ghost_tokens: {
      //-------------------------------------------------------------------------------------------------------
      ok_when_levels_back_to_back: function() {
        var Grammar, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var g, lexemes, source, tag, text, Ωilxt_520, Ωilxt_521, Ωilxt_522, Ωilxt_523, Ωilxt_524, Ωilxt_525, Ωilxt_526, Ωilxt_527;
          g = new Grammar({
            name: 'g',
            emit_signals: true
          });
          text = g.new_level({
            name: 'text'
          });
          tag = g.new_level({
            name: 'tag'
          });
          //...................................................................................................
          text.new_token({
            name: 'pretag',
            fit: /(?=<)/,
            jump: 'tag',
            emit: false
          });
          text.new_token({
            name: 'text',
            fit: /[^<]+/,
            jump: null
          });
          tag.new_token({
            name: 'tag',
            fit: /<[^>]*>+?/,
            jump: '..'
          });
          //...................................................................................................
          // source = "<tag-a><tag-b><tag-c><tag-d>"
          // source = "<tag-a><tag-b><tag-c>"
          // source = "<tag-a>c<tag-b>"
          // source = "<tag-a>"
          // source = "text1<tag-a>text2<tag-b>text3"
          source = "<tag-a><tag-b>";
          info('Ωilxt_517', rpr(source));
          g.reset_lnr();
          tabulate_lexemes(g.scan(source));
          // info 'Ωilxt_518', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_519', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_520 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_521 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'tag'
            }
          });
          this.eq((Ωilxt_522 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'tag.tag',
            hit: '<tag-a>',
            pos: '1:0:7'
          });
          this.eq((Ωilxt_523 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:7:7',
            data: {
              target: 'tag'
            }
          });
          this.eq((Ωilxt_524 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'tag.tag',
            hit: '<tag-b>',
            pos: '1:7:14'
          });
          this.eq((Ωilxt_525 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:14:14',
            data: {
              target: null
            }
          });
          this.eq((Ωilxt_526 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:14:14'
          });
          this.eq((Ωilxt_527 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        //...................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    user_errors: {
      //-------------------------------------------------------------------------------------------------------
      user_error_declared_on_token: function() {
        var Grammar, cast, error, g, gnd, internals, lexemes, name1, name2, rx, source, Ωilxt_528, Ωilxt_529, Ωilxt_530, Ωilxt_531, Ωilxt_532, Ωilxt_533, Ωilxt_534, Ωilxt_535, Ωilxt_539, Ωilxt_540, Ωilxt_541, Ωilxt_542, Ωilxt_543, Ωilxt_544, Ωilxt_545, Ωilxt_546, Ωilxt_547, Ωilxt_548, Ωilxt_549, Ωilxt_550, Ωilxt_551, Ωilxt_552;
        ({Grammar, rx, internals} = require('../../../apps/interlex'));
        //=====================================================================================================
        cast = function*({hit, start, source, new_lexeme, lexeme}) {
          if (hit !== 'c') {
            yield lexeme;
            return null;
          }
          yield new_lexeme('error.nolikedis', start, source, {
            letter: hit
          });
          return null;
        };
        //.....................................................................................................
        g = new Grammar({
          name: 'g',
          emit_signals: true
        });
        gnd = g.new_level({
          name: 'gnd'
        });
        error = g.new_level({
          name: 'error'
        });
        //.....................................................................................................
        name1 = gnd.new_token({
          name: 'name1',
          fit: rx`(?<initial>[A-Z])`,
          merge: true
        });
        name2 = gnd.new_token({
          name: 'name2',
          fit: rx`(?<lower>[a-z])`,
          merge: true,
          cast
        });
        error.new_token({
          name: 'nolikedis',
          fit: rx`.`,
          merge: true
        });
        //.....................................................................................................
        this.eq((Ωilxt_528 = function() {
          return g.cast;
        }), null);
        this.eq((Ωilxt_529 = function() {
          return g.cast_method;
        }), null);
        this.eq((Ωilxt_530 = function() {
          return gnd.cast;
        }), null);
        this.eq((Ωilxt_531 = function() {
          return gnd.cast_method;
        }), null);
        this.eq((Ωilxt_532 = function() {
          return error.cast;
        }), null);
        this.eq((Ωilxt_533 = function() {
          return error.cast_method;
        }), null);
        this.eq((Ωilxt_534 = function() {
          return name2.cast === cast;
        }), true);
        this.eq((Ωilxt_535 = function() {
          return name2.cast_method;
        }), 'walk');
        //.....................................................................................................
        source = "Acceptreject";
        // info 'Ωilxt_536', rpr source; tabulate_lexemes g.scan source
        // info 'Ωilxt_537', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info('Ωilxt_538', rpr(source));
        g.reset_lnr();
        lexemes = g.scan(source);
        this.eq((Ωilxt_539 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_540 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:0:0',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_541 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name1',
          hit: 'A',
          pos: '1:0:1',
          data: {
            initial: ['A']
          }
        });
        this.eq((Ωilxt_542 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:1:1',
          data: {
            target: 'error'
          }
        });
        this.eq((Ωilxt_543 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'cc',
          pos: '1:1:3',
          data: {
            letter: ['c', 'c']
          }
        });
        this.eq((Ωilxt_544 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:3:3',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_545 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 'eptreje',
          pos: '1:3:10',
          data: {
            lower: ['e', 'p', 't', 'r', 'e', 'j', 'e']
          }
        });
        this.eq((Ωilxt_546 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:10:10',
          data: {
            target: 'error'
          }
        });
        this.eq((Ωilxt_547 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'c',
          pos: '1:10:11',
          data: {
            letter: ['c']
          }
        });
        this.eq((Ωilxt_548 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:11:11',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_549 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 't',
          pos: '1:11:12',
          data: {
            lower: ['t']
          }
        });
        this.eq((Ωilxt_550 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:12:12',
          data: {
            target: null
          }
        });
        this.eq((Ωilxt_551 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.stop',
          hit: '',
          pos: '1:12:12'
        });
        this.eq((Ωilxt_552 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), null);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      user_error_declared_on_level: function() {
        var Grammar, cast, error, g, gnd, internals, lexemes, name1, name2, rx, source, Ωilxt_553, Ωilxt_554, Ωilxt_555, Ωilxt_556, Ωilxt_557, Ωilxt_558, Ωilxt_559, Ωilxt_560, Ωilxt_564, Ωilxt_565, Ωilxt_566, Ωilxt_567, Ωilxt_568, Ωilxt_569, Ωilxt_570, Ωilxt_571, Ωilxt_572, Ωilxt_573, Ωilxt_574, Ωilxt_575, Ωilxt_576, Ωilxt_577;
        ({Grammar, rx, internals} = require('../../../apps/interlex'));
        //=====================================================================================================
        cast = function*({hit, start, source, new_lexeme, lexeme}) {
          if (hit !== 'c') {
            yield lexeme;
            return null;
          }
          yield new_lexeme('error.nolikedis', start, source, {
            letter: hit
          });
          return null;
        };
        //.....................................................................................................
        g = new Grammar({
          name: 'g',
          emit_signals: true
        });
        gnd = g.new_level({
          name: 'gnd',
          cast
        });
        error = g.new_level({
          name: 'error'
        });
        //.....................................................................................................
        name1 = gnd.new_token({
          name: 'name1',
          fit: rx`(?<initial>[A-Z])`,
          merge: true
        });
        name2 = gnd.new_token({
          name: 'name2',
          fit: rx`(?<lower>[a-z])`,
          merge: true
        });
        error.new_token({
          name: 'nolikedis',
          fit: rx`.`,
          merge: true
        });
        //.....................................................................................................
        this.eq((Ωilxt_553 = function() {
          return g.cast;
        }), null);
        this.eq((Ωilxt_554 = function() {
          return g.cast_method;
        }), null);
        this.eq((Ωilxt_555 = function() {
          return gnd.cast === cast;
        }), true);
        this.eq((Ωilxt_556 = function() {
          return gnd.cast_method;
        }), 'walk');
        this.eq((Ωilxt_557 = function() {
          return error.cast;
        }), null);
        this.eq((Ωilxt_558 = function() {
          return error.cast_method;
        }), null);
        this.eq((Ωilxt_559 = function() {
          return name2.cast;
        }), null);
        this.eq((Ωilxt_560 = function() {
          return name2.cast_method;
        }), null);
        //.....................................................................................................
        source = "Acceptreject";
        // info 'Ωilxt_561', rpr source; tabulate_lexemes g.scan source
        // info 'Ωilxt_562', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info('Ωilxt_563', rpr(source));
        g.reset_lnr();
        lexemes = g.scan(source);
        this.eq((Ωilxt_564 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_565 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:0:0',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_566 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name1',
          hit: 'A',
          pos: '1:0:1',
          data: {
            initial: ['A']
          }
        });
        this.eq((Ωilxt_567 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:1:1',
          data: {
            target: 'error'
          }
        });
        this.eq((Ωilxt_568 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'cc',
          pos: '1:1:3',
          data: {
            letter: ['c', 'c']
          }
        });
        this.eq((Ωilxt_569 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:3:3',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_570 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 'eptreje',
          pos: '1:3:10',
          data: {
            lower: ['e', 'p', 't', 'r', 'e', 'j', 'e']
          }
        });
        this.eq((Ωilxt_571 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:10:10',
          data: {
            target: 'error'
          }
        });
        this.eq((Ωilxt_572 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'c',
          pos: '1:10:11',
          data: {
            letter: ['c']
          }
        });
        this.eq((Ωilxt_573 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:11:11',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_574 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 't',
          pos: '1:11:12',
          data: {
            lower: ['t']
          }
        });
        this.eq((Ωilxt_575 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:12:12',
          data: {
            target: null
          }
        });
        this.eq((Ωilxt_576 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.stop',
          hit: '',
          pos: '1:12:12'
        });
        this.eq((Ωilxt_577 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), null);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      user_error_declared_on_grammar: function() {
        var Grammar, cast, error, g, gnd, internals, lexemes, name1, name2, rx, source, Ωilxt_578, Ωilxt_579, Ωilxt_580, Ωilxt_581, Ωilxt_582, Ωilxt_583, Ωilxt_584, Ωilxt_585, Ωilxt_589, Ωilxt_590, Ωilxt_591, Ωilxt_592, Ωilxt_593, Ωilxt_594, Ωilxt_595, Ωilxt_596, Ωilxt_597, Ωilxt_598, Ωilxt_599, Ωilxt_600, Ωilxt_601, Ωilxt_602;
        ({Grammar, rx, internals} = require('../../../apps/interlex'));
        //=====================================================================================================
        cast = function*({hit, start, source, new_lexeme, lexeme}) {
          if (hit !== 'c') {
            yield lexeme;
            return null;
          }
          yield new_lexeme('error.nolikedis', start, source, {
            letter: hit
          });
          return null;
        };
        //.....................................................................................................
        g = new Grammar({
          name: 'g',
          emit_signals: true,
          cast
        });
        gnd = g.new_level({
          name: 'gnd'
        });
        error = g.new_level({
          name: 'error'
        });
        //.....................................................................................................
        name1 = gnd.new_token({
          name: 'name1',
          fit: rx`(?<initial>[A-Z])`,
          merge: true
        });
        name2 = gnd.new_token({
          name: 'name2',
          fit: rx`(?<lower>[a-z])`,
          merge: true
        });
        error.new_token({
          name: 'nolikedis',
          fit: rx`.`,
          merge: true
        });
        //.....................................................................................................
        this.eq((Ωilxt_578 = function() {
          return g.cast === cast;
        }), true);
        this.eq((Ωilxt_579 = function() {
          return g.cast_method;
        }), 'walk');
        this.eq((Ωilxt_580 = function() {
          return gnd.cast;
        }), null);
        this.eq((Ωilxt_581 = function() {
          return gnd.cast_method;
        }), null);
        this.eq((Ωilxt_582 = function() {
          return error.cast;
        }), null);
        this.eq((Ωilxt_583 = function() {
          return error.cast_method;
        }), null);
        this.eq((Ωilxt_584 = function() {
          return name2.cast;
        }), null);
        this.eq((Ωilxt_585 = function() {
          return name2.cast_method;
        }), null);
        //.....................................................................................................
        source = "Acceptreject";
        // info 'Ωilxt_586', rpr source; tabulate_lexemes g.scan source
        // info 'Ωilxt_587', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info('Ωilxt_588', rpr(source));
        g.reset_lnr();
        lexemes = g.scan(source);
        this.eq((Ωilxt_589 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_590 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:0:0',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_591 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name1',
          hit: 'A',
          pos: '1:0:1',
          data: {
            initial: ['A']
          }
        });
        this.eq((Ωilxt_592 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:1:1',
          data: {
            target: 'error'
          }
        });
        this.eq((Ωilxt_593 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'cc',
          pos: '1:1:3',
          data: {
            letter: ['c', 'c']
          }
        });
        this.eq((Ωilxt_594 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:3:3',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_595 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 'eptreje',
          pos: '1:3:10',
          data: {
            lower: ['e', 'p', 't', 'r', 'e', 'j', 'e']
          }
        });
        this.eq((Ωilxt_596 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:10:10',
          data: {
            target: 'error'
          }
        });
        this.eq((Ωilxt_597 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'c',
          pos: '1:10:11',
          data: {
            letter: ['c']
          }
        });
        this.eq((Ωilxt_598 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:11:11',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_599 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 't',
          pos: '1:11:12',
          data: {
            lower: ['t']
          }
        });
        this.eq((Ωilxt_600 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:12:12',
          data: {
            target: null
          }
        });
        this.eq((Ωilxt_601 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.stop',
          hit: '',
          pos: '1:12:12'
        });
        this.eq((Ωilxt_602 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), null);
        //.....................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    demo: {
      //-------------------------------------------------------------------------------------------------------
      demo_nr_1: function() {
        var Grammar, g, gnd, lexemes, rx, source, Ωilxt_605, Ωilxt_606, Ωilxt_607, Ωilxt_608, Ωilxt_609, Ωilxt_610, Ωilxt_611, Ωilxt_612, Ωilxt_613, Ωilxt_614, Ωilxt_615, Ωilxt_616, Ωilxt_617, Ωilxt_618, Ωilxt_620, Ωilxt_ACCEPT_619;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //=====================================================================================================
        g = new Grammar({
          name: 'g'
        });
        gnd = g.new_level({
          name: 'gnd'
        });
        //.....................................................................................................
        gnd.new_token({
          name: 'name',
          fit: rx`(?<initial>[A-Z])[a-z]*`
        });
        gnd.new_token({
          name: 'number',
          fit: rx`[0-9]+`
        });
        gnd.new_token({
          name: 'paren_start',
          fit: rx`\(`
        });
        gnd.new_token({
          name: 'paren_stop',
          fit: rx`\)`
        });
        gnd.new_token({
          name: 'other',
          fit: rx`[A-Za-z0-9]+`
        });
        gnd.new_token({
          name: 'ws',
          fit: rx`\s+`
        });
        //.....................................................................................................
        source = "Alice in Cairo 1912 (approximately)";
        // info 'Ωilxt_603', rpr source; tabulate_lexemes g.scan source
        info('Ωilxt_604', rpr(source));
        g.reset_lnr();
        lexemes = g.scan(source);
        this.eq((Ωilxt_605 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_606 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:0:0',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_607 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name',
          hit: 'Alice',
          pos: '1:0:5',
          data: {
            initial: 'A'
          }
        });
        this.eq((Ωilxt_608 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:5:6'
        });
        this.eq((Ωilxt_609 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.other',
          hit: 'in',
          pos: '1:6:8'
        });
        this.eq((Ωilxt_610 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:8:9'
        });
        this.eq((Ωilxt_611 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name',
          hit: 'Cairo',
          pos: '1:9:14',
          data: {
            initial: 'C'
          }
        });
        this.eq((Ωilxt_612 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:14:15'
        });
        this.eq((Ωilxt_613 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.number',
          hit: '1912',
          pos: '1:15:19'
        });
        this.eq((Ωilxt_614 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:19:20'
        });
        this.eq((Ωilxt_615 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.paren_start',
          hit: '(',
          pos: '1:20:21'
        });
        this.eq((Ωilxt_616 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.other',
          hit: 'approximately',
          pos: '1:21:34'
        });
        this.eq((Ωilxt_617 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.paren_stop',
          hit: ')',
          pos: '1:34:35'
        });
        this.eq((Ωilxt_618 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:35:35',
          data: {
            target: null
          }
        });
        this.eq((Ωilxt_ACCEPT_619 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.stop',
          hit: '',
          pos: '1:35:35'
        });
        this.eq((Ωilxt_620 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), null);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      demo_nr_2: function() {
        var Grammar, g, gnd, lexemes, rx, source, string11, Ωilxt_623, Ωilxt_624, Ωilxt_625, Ωilxt_626, Ωilxt_627, Ωilxt_628, Ωilxt_629, Ωilxt_630, Ωilxt_631, Ωilxt_632, Ωilxt_633, Ωilxt_634, Ωilxt_635, Ωilxt_636, Ωilxt_637, Ωilxt_638, Ωilxt_639;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //=====================================================================================================
        g = new Grammar({
          name: 'faulty'
        });
        gnd = g.new_level({
          name: 'gnd'
        });
        string11 = g.new_level({
          name: 'string11'
        });
        //.....................................................................................................
        gnd.new_token({
          name: 'name',
          fit: rx`(?<initial>[A-Z])[a-z]*`
        });
        gnd.new_token({
          name: 'number',
          fit: rx`[0-9]+`
        });
        gnd.new_token({
          name: 'string11_start',
          fit: rx`(?!<\\)'`,
          jump: 'string11'
        });
        gnd.new_token({
          name: 'paren_start',
          fit: rx`\(`
        });
        gnd.new_token({
          name: 'paren_stop',
          fit: rx`\)`
        });
        gnd.new_token({
          name: 'other',
          fit: rx`[A-Za-z0-9]+`
        });
        gnd.new_token({
          name: 'ws',
          fit: rx`\s+`
        });
        //.....................................................................................................
        // string11.new_token  { name: 'string11_stop',  fit: rx"(?!<\\)'",                jump: '..!', }
        string11.new_token({
          name: 'text',
          fit: rx`[^']+`
        });
        //.....................................................................................................
        source = "Alice in Cairo 1912 'approximately'";
        // info 'Ωilxt_621', rpr source; tabulate_lexemes g.scan source
        info('Ωilxt_622', rpr(source));
        g.reset_lnr();
        lexemes = g.scan(source);
        this.eq((Ωilxt_623 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_624 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:0:0',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_625 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name',
          hit: 'Alice',
          pos: '1:0:5',
          data: {
            initial: 'A'
          }
        });
        this.eq((Ωilxt_626 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:5:6'
        });
        this.eq((Ωilxt_627 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.other',
          hit: 'in',
          pos: '1:6:8'
        });
        this.eq((Ωilxt_628 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:8:9'
        });
        this.eq((Ωilxt_629 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name',
          hit: 'Cairo',
          pos: '1:9:14',
          data: {
            initial: 'C'
          }
        });
        this.eq((Ωilxt_630 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:14:15'
        });
        this.eq((Ωilxt_631 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.number',
          hit: '1912',
          pos: '1:15:19'
        });
        this.eq((Ωilxt_632 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:19:20'
        });
        this.eq((Ωilxt_633 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.string11_start',
          hit: "'",
          pos: '1:20:21'
        });
        this.eq((Ωilxt_634 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:21:21',
          data: {
            target: 'string11'
          }
        });
        this.eq((Ωilxt_635 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'string11.text',
          hit: 'approximately',
          pos: '1:21:34'
        });
        this.eq((Ωilxt_636 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:34:34',
          data: {
            target: null
          }
        });
        this.eq((Ωilxt_637 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$error.earlystop',
          hit: "'",
          pos: '1:34:35',
          data: {
            message: 'expected stop at 35, got 34'
          }
        });
        this.eq((Ωilxt_638 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.stop',
          hit: '',
          pos: '1:34:34'
        });
        this.eq((Ωilxt_639 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), null);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      demo_nr_3: function() {
        var Grammar, g, gnd, number, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //=====================================================================================================
        g = new Grammar({
          name: 'faulty',
          emit_signals: false
        });
        gnd = g.new_level({
          name: 'gnd'
        });
        number = g.new_level({
          name: 'number'
        });
        //.....................................................................................................
        gnd.new_token({
          name: 'text',
          fit: rx.i`\\[0-9]|[a-z\s]+`
        });
        gnd.new_token({
          name: 'number_start',
          fit: rx`(?=(?!<\\)[0-9])`,
          jump: 'number'
        });
        number.new_token({
          name: 'number',
          fit: rx`[0-9]+`
        });
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_642, Ωilxt_643, Ωilxt_644, Ωilxt_645, Ωilxt_646, Ωilxt_647, Ωilxt_648, Ωilxt_649;
          source = "R\\2D\\2 on Charon 3";
          // info 'Ωilxt_640', rpr source; tabulate_lexemes g.scan source
          info('Ωilxt_641', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_642 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'R',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_643 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: '\\2',
            pos: '1:1:3'
          });
          this.eq((Ωilxt_644 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'D',
            pos: '1:3:4'
          });
          this.eq((Ωilxt_645 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: '\\2',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_646 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' on Charon ',
            pos: '1:6:17'
          });
          this.eq((Ωilxt_647 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.number_start',
            hit: '',
            pos: '1:17:17'
          });
          this.eq((Ωilxt_648 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.number',
            hit: '3',
            pos: '1:17:18'
          });
          this.eq((Ωilxt_649 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_652, Ωilxt_653, Ωilxt_654, Ωilxt_655, Ωilxt_656, Ωilxt_657, Ωilxt_658, Ωilxt_659, Ωilxt_660;
          source = "R\\2D\\2 on Charon 3!!";
          // echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_650', rpr source; tabulate_lexemes g.scan source
          info('Ωilxt_651', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_652 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'R',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_653 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: '\\2',
            pos: '1:1:3'
          });
          this.eq((Ωilxt_654 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'D',
            pos: '1:3:4'
          });
          this.eq((Ωilxt_655 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: '\\2',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_656 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' on Charon ',
            pos: '1:6:17'
          });
          this.eq((Ωilxt_657 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.number_start',
            hit: '',
            pos: '1:17:17'
          });
          this.eq((Ωilxt_658 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.number',
            hit: '3',
            pos: '1:17:18'
          });
          this.eq((Ωilxt_659 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$error.earlystop',
            hit: '!!',
            pos: '1:18:20',
            data: {
              message: 'expected stop at 20, got 18'
            }
          });
          this.eq((Ωilxt_660 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        return null;
      }
    },
    //=========================================================================================================
    cfg_settings: {
      //-------------------------------------------------------------------------------------------------------
      grammar: function() {
        var Grammar, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        (() => {          //.........................................................................................................
          var g, Ωilxt_661, Ωilxt_662, Ωilxt_663;
          g = new Grammar();
          this.eq((Ωilxt_661 = function() {
            return g.cfg.name;
          }), 'g');
          this.eq((Ωilxt_662 = function() {
            return g.cfg.strategy;
          }), 'first');
          this.eq((Ωilxt_663 = function() {
            return g.cfg.emit_signals;
          }), true);
          return null;
        })();
        (() => {          //.........................................................................................................
          var g, Ωilxt_664, Ωilxt_665, Ωilxt_666;
          g = new Grammar({
            emit_signals: false
          });
          this.eq((Ωilxt_664 = function() {
            return g.cfg.name;
          }), 'g');
          this.eq((Ωilxt_665 = function() {
            return g.cfg.strategy;
          }), 'first');
          this.eq((Ωilxt_666 = function() {
            return g.cfg.emit_signals;
          }), false);
          return null;
        })();
        //.........................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    linking: {
      //-------------------------------------------------------------------------------------------------------
      string_literal_with_line_breaks_staccato: function() {
        var Grammar, g, gnd, rx, string;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //=====================================================================================================
        g = new Grammar({
          emit_signals: false
        });
        gnd = g.new_level({
          name: 'gnd'
        });
        string = g.new_level({
          name: 'string'
        });
        //.....................................................................................................
        gnd.new_token({
          name: 'dq1',
          fit: /(?<!\\)"/,
          jump: 'string!'
        });
        gnd.new_token({
          name: 'text',
          fit: /(\\"|[^"])+/
        });
        string.new_token({
          name: 'string',
          fit: /(\\"|[^"])+/
        });
        string.new_token({
          name: 'dq1',
          fit: /(?<!\\)"/,
          jump: '..'
        });
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_670, Ωilxt_671, Ωilxt_672, Ωilxt_673, Ωilxt_674, Ωilxt_675;
          g.reset();
          source = 'the word "black bird" is the word\n';
          // info 'Ωilxt_667', rpr source; tabulate_lexemes g.scan source
          // info 'Ωilxt_668', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_669', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_670 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_671 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_672 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.string',
            hit: 'black bird',
            pos: '1:10:20'
          });
          this.eq((Ωilxt_673 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:20:21'
          });
          this.eq((Ωilxt_674 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' is the word\n',
            pos: '1:21:34'
          });
          this.eq((Ωilxt_675 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_679, Ωilxt_680, Ωilxt_681, Ωilxt_682, Ωilxt_683, Ωilxt_684;
          g.reset();
          source = 'the word "black\nbird" is the word\n';
          // info 'Ωilxt_676', rpr source; tabulate_lexemes g.scan source
          // info 'Ωilxt_677', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_678', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_679 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_680 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_681 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.string',
            hit: 'black\nbird',
            pos: '1:10:20'
          });
          this.eq((Ωilxt_682 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:20:21'
          });
          this.eq((Ωilxt_683 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' is the word\n',
            pos: '1:21:34'
          });
          this.eq((Ωilxt_684 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var lexemes, source1, source2, Ωilxt_688, Ωilxt_689, Ωilxt_690, Ωilxt_691, Ωilxt_695, Ωilxt_696, Ωilxt_697, Ωilxt_698;
          /* NOTE we here accept a 'wrong' solution b/c the grammar declaration did not specify a continuous
                 / legato scan which means that the second line is correctly analyzed as starting on the `text` level
                 and ending with an unfinished string literal; */
          g.reset();
          source1 = 'the word "black\n';
          source2 = 'bird" is the word\n';
          // info 'Ωilxt_685', rpr source1; tabulate_lexemes g.scan source1
          // info 'Ωilxt_686', rpr source1; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source1
          info('Ωilxt_687', rpr(source1));
          g.reset_lnr();
          lexemes = g.scan(source1);
          this.eq((Ωilxt_688 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_689 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_690 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.string',
            hit: 'black\n',
            pos: '1:10:16'
          });
          this.eq((Ωilxt_691 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          // info 'Ωilxt_692', rpr source2; tabulate_lexemes g.scan source2
          // info 'Ωilxt_693', rpr source2; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source2
          info('Ωilxt_694', rpr(source2));
          g.reset_lnr();
          lexemes = g.scan(source2);
          this.eq((Ωilxt_695 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'bird',
            pos: '1:0:4'
          });
          this.eq((Ωilxt_696 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:4:5'
          });
          this.eq((Ωilxt_697 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.string',
            hit: ' is the word\n',
            pos: '1:5:18'
          });
          this.eq((Ωilxt_698 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      string_literal_with_linked_scanning: function() {
        var Grammar, g, gnd, rx, string, Ωilxt_699, Ωilxt_700;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //=====================================================================================================
        g = new Grammar({
          emit_signals: false,
          linking: true
        });
        gnd = g.new_level({
          name: 'gnd'
        });
        string = g.new_level({
          name: 'string'
        });
        //.....................................................................................................
        gnd.new_token({
          name: 'dq1',
          fit: /(?<!\\)"/,
          jump: 'string!'
        });
        gnd.new_token({
          name: 'text',
          fit: /(\\"|[^"])+/
        });
        string.new_token({
          name: 'literal',
          fit: /(\\"|[^"])+/
        });
        string.new_token({
          name: 'dq1',
          fit: /(?<!\\)"/,
          jump: '..'
        });
        //.....................................................................................................
        this.eq((Ωilxt_699 = function() {
          return g.cfg.reset_stack;
        }), false);
        this.eq((Ωilxt_700 = function() {
          return g.cfg.linking;
        }), true);
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_704, Ωilxt_705, Ωilxt_706, Ωilxt_707, Ωilxt_708, Ωilxt_709;
          g.reset();
          source = 'the word "black bird" is the word\n';
          // info 'Ωilxt_701', rpr source; tabulate_lexemes g.scan source
          // info 'Ωilxt_702', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_703', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_704 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_705 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_706 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.literal',
            hit: 'black bird',
            pos: '1:10:20'
          });
          this.eq((Ωilxt_707 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:20:21'
          });
          this.eq((Ωilxt_708 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' is the word\n',
            pos: '1:21:34'
          });
          this.eq((Ωilxt_709 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_713, Ωilxt_714, Ωilxt_715, Ωilxt_716, Ωilxt_717, Ωilxt_718;
          g.reset();
          source = 'the word "black\nbird" is the word\n';
          // info 'Ωilxt_710', rpr source; tabulate_lexemes g.scan source
          // info 'Ωilxt_711', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_712', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_713 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_714 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_715 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.literal',
            hit: 'black\nbird',
            pos: '1:10:20'
          });
          this.eq((Ωilxt_716 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:20:21'
          });
          this.eq((Ωilxt_717 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' is the word\n',
            pos: '1:21:34'
          });
          this.eq((Ωilxt_718 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var lexemes, source1, source2, source3, Ωilxt_726, Ωilxt_727, Ωilxt_728, Ωilxt_729, Ωilxt_731, Ωilxt_732, Ωilxt_733, Ωilxt_734, Ωilxt_736, Ωilxt_737;
          g.reset();
          source1 = 'the word "black\n';
          source2 = 'bird" is the word\n';
          source3 = 'or so I heard\n';
          // info 'Ωilxt_719', rpr source1; tabulate_lexemes g.scan source1
          // info 'Ωilxt_720', rpr source2; tabulate_lexemes g.scan source2
          // info 'Ωilxt_721', rpr source3; tabulate_lexemes g.scan source3
          // info 'Ωilxt_722', rpr source1; echo abbrlxm lexeme for lexeme from g.scan source1
          // info 'Ωilxt_723', rpr source2; echo abbrlxm lexeme for lexeme from g.scan source2
          // info 'Ωilxt_724', rpr source3; echo abbrlxm lexeme for lexeme from g.scan source3
          g.reset();
          info('Ωilxt_725', rpr(source1));
          lexemes = g.scan(source1);
          this.eq((Ωilxt_726 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_727 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_728 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.literal',
            hit: 'black\n',
            pos: '1:10:16'
          });
          this.eq((Ωilxt_729 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_730', rpr(source2));
          lexemes = g.scan(source2);
          this.eq((Ωilxt_731 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.literal',
            hit: 'bird',
            pos: '2:0:4'
          });
          this.eq((Ωilxt_732 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '2:4:5'
          });
          this.eq((Ωilxt_733 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' is the word\n',
            pos: '2:5:18'
          });
          this.eq((Ωilxt_734 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_735', rpr(source3));
          lexemes = g.scan(source3);
          this.eq((Ωilxt_736 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'or so I heard\n',
            pos: '3:0:14'
          });
          this.eq((Ωilxt_737 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      linked_scanning_with_signals: function() {
        var Grammar, g, gnd, rx, source1, source2, source3, string;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //=====================================================================================================
        g = new Grammar({
          emit_signals: true,
          linking: true
        });
        gnd = g.new_level({
          name: 'gnd'
        });
        string = g.new_level({
          name: 'string'
        });
        //.....................................................................................................
        gnd.new_token({
          name: 'dq1',
          fit: /(?<!\\)"/,
          jump: 'string!'
        });
        gnd.new_token({
          name: 'text',
          fit: /(\\"|[^"])+/
        });
        string.new_token({
          name: 'literal',
          fit: /(\\"|[^"])+/
        });
        string.new_token({
          name: 'dq1',
          fit: /(?<!\\)"/,
          jump: '..'
        });
        //.....................................................................................................
        source1 = 'the word "black\n';
        source2 = 'bird" is the word\n';
        source3 = 'or so I heard\n';
        (() => {          // do =>
          //   g.reset()
          //   info 'Ωilxt_738', rpr source1; tabulate_lexemes g.scan source1
          //   info 'Ωilxt_739', rpr source2; tabulate_lexemes g.scan source2
          //   info 'Ωilxt_740', rpr source3; tabulate_lexemes g.scan source3
          //   info 'Ωilxt_741', rpr null; tabulate_lexemes g.scan null
          //   return null
          // do =>
          //   g.reset()
          //   info 'Ωilxt_742', rpr source1; echo abbrlxm lexeme for lexeme from g.scan source1
          //   info 'Ωilxt_743', rpr source2; echo abbrlxm lexeme for lexeme from g.scan source2
          //   info 'Ωilxt_744', rpr source3; echo abbrlxm lexeme for lexeme from g.scan source3
          //   info 'Ωilxt_745', rpr null; echo abbrlxm lexeme for lexeme from g.scan null
          //   return null
          var lexemes, Ωilxt_747, Ωilxt_748, Ωilxt_749, Ωilxt_750, Ωilxt_751, Ωilxt_752, Ωilxt_753, Ωilxt_754, Ωilxt_756, Ωilxt_757, Ωilxt_758, Ωilxt_759, Ωilxt_760, Ωilxt_761, Ωilxt_762, Ωilxt_764, Ωilxt_765, Ωilxt_766, Ωilxt_767, Ωilxt_769, Ωilxt_770, Ωilxt_771;
          g.reset();
          info('Ωilxt_746', rpr(source1));
          lexemes = g.scan(source1);
          this.eq((Ωilxt_747 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_748 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'gnd'
            }
          });
          this.eq((Ωilxt_749 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_750 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:9:9',
            data: {
              target: 'string'
            }
          });
          this.eq((Ωilxt_751 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_752 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.literal',
            hit: 'black\n',
            pos: '1:10:16'
          });
          this.eq((Ωilxt_753 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.pause',
            hit: '',
            pos: '1:16:16'
          });
          this.eq((Ωilxt_754 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_755', rpr(source2));
          lexemes = g.scan(source2);
          this.eq((Ωilxt_756 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.resume',
            hit: '',
            pos: '2:0:0'
          });
          this.eq((Ωilxt_757 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.literal',
            hit: 'bird',
            pos: '2:0:4'
          });
          this.eq((Ωilxt_758 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '2:4:5'
          });
          this.eq((Ωilxt_759 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '2:5:5',
            data: {
              target: 'gnd'
            }
          });
          this.eq((Ωilxt_760 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' is the word\n',
            pos: '2:5:18'
          });
          this.eq((Ωilxt_761 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.pause',
            hit: '',
            pos: '2:18:18'
          });
          this.eq((Ωilxt_762 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_763', rpr(source3));
          lexemes = g.scan(source3);
          this.eq((Ωilxt_764 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.resume',
            hit: '',
            pos: '3:0:0'
          });
          this.eq((Ωilxt_765 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'or so I heard\n',
            pos: '3:0:14'
          });
          this.eq((Ωilxt_766 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.pause',
            hit: '',
            pos: '3:14:14'
          });
          this.eq((Ωilxt_767 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_768', rpr(null));
          lexemes = g.scan(null);
          this.eq((Ωilxt_769 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '4:0:0',
            data: {
              target: null
            }
          });
          this.eq((Ωilxt_770 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '4:0:0'
          });
          return this.eq((Ωilxt_771 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      grammar_cfg_supply_eol: function() {
        var Grammar, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var g, Ωilxt_772;
          g = new Grammar();
          return this.eq((Ωilxt_772 = function() {
            return g.cfg.supply_eol;
          }), false);
        })();
        (() => {          //.....................................................................................................
          var g, Ωilxt_773;
          g = new Grammar({
            supply_eol: false
          });
          return this.eq((Ωilxt_773 = function() {
            return g.cfg.supply_eol;
          }), false);
        })();
        (() => {          //.....................................................................................................
          var g, Ωilxt_774;
          g = new Grammar({
            supply_eol: true
          });
          return this.eq((Ωilxt_774 = function() {
            return g.cfg.supply_eol;
          }), '\n');
        })();
        (() => {          //.....................................................................................................
          var g, Ωilxt_775;
          g = new Grammar({
            supply_eol: '\n'
          });
          return this.eq((Ωilxt_775 = function() {
            return g.cfg.supply_eol;
          }), '\n');
        })();
        (() => {          //.....................................................................................................
          var g, Ωilxt_776;
          g = new Grammar({
            supply_eol: '(EOL)'
          });
          return this.eq((Ωilxt_776 = function() {
            return g.cfg.supply_eol;
          }), '(EOL)');
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      linked_scanning_with_supply_eol: function() {
        var Grammar, g, gnd, rx, source1, source2, source3, string;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //=====================================================================================================
        g = new Grammar({
          emit_signals: true,
          linking: true,
          supply_eol: true
        });
        gnd = g.new_level({
          name: 'gnd'
        });
        string = g.new_level({
          name: 'string'
        });
        //.....................................................................................................
        gnd.new_token({
          name: 'dq1',
          fit: /(?<!\\)"/,
          jump: 'string!'
        });
        gnd.new_token({
          name: 'text',
          fit: /(\\"|[^"])+/
        });
        string.new_token({
          name: 'literal',
          fit: /(\\"|[^"])+/
        });
        string.new_token({
          name: 'dq1',
          fit: /(?<!\\)"/,
          jump: '..'
        });
        //.....................................................................................................
        source1 = 'the word "black';
        source2 = 'bird" is the word';
        source3 = 'or so I heard';
        (() => {          // do =>
          //   g.reset()
          //   info 'Ωilxt_777', rpr source1; tabulate_lexemes g.scan source1
          //   info 'Ωilxt_778', rpr source2; tabulate_lexemes g.scan source2
          //   info 'Ωilxt_779', rpr source3; tabulate_lexemes g.scan source3
          //   info 'Ωilxt_780', rpr null; tabulate_lexemes g.scan null
          //   return null
          // do =>
          //   g.reset()
          //   info 'Ωilxt_781', rpr source1; echo abbrlxm lexeme for lexeme from g.scan source1
          //   info 'Ωilxt_782', rpr source2; echo abbrlxm lexeme for lexeme from g.scan source2
          //   info 'Ωilxt_783', rpr source3; echo abbrlxm lexeme for lexeme from g.scan source3
          //   info 'Ωilxt_784', rpr null; echo abbrlxm lexeme for lexeme from g.scan null
          //   return null
          var lexemes, Ωilxt_786, Ωilxt_787, Ωilxt_788, Ωilxt_789, Ωilxt_790, Ωilxt_791, Ωilxt_792, Ωilxt_793, Ωilxt_795, Ωilxt_796, Ωilxt_797, Ωilxt_798, Ωilxt_799, Ωilxt_800, Ωilxt_801, Ωilxt_803, Ωilxt_804, Ωilxt_805, Ωilxt_806, Ωilxt_808, Ωilxt_809, Ωilxt_810;
          g.reset();
          info('Ωilxt_785', rpr(source1));
          lexemes = g.scan(source1);
          this.eq((Ωilxt_786 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_787 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'gnd'
            }
          });
          this.eq((Ωilxt_788 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_789 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:9:9',
            data: {
              target: 'string'
            }
          });
          this.eq((Ωilxt_790 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_791 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.literal',
            hit: 'black\n',
            pos: '1:10:16'
          });
          this.eq((Ωilxt_792 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.pause',
            hit: '',
            pos: '1:16:16'
          });
          this.eq((Ωilxt_793 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_794', rpr(source2));
          lexemes = g.scan(source2);
          this.eq((Ωilxt_795 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.resume',
            hit: '',
            pos: '2:0:0'
          });
          this.eq((Ωilxt_796 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.literal',
            hit: 'bird',
            pos: '2:0:4'
          });
          this.eq((Ωilxt_797 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '2:4:5'
          });
          this.eq((Ωilxt_798 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '2:5:5',
            data: {
              target: 'gnd'
            }
          });
          this.eq((Ωilxt_799 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' is the word\n',
            pos: '2:5:18'
          });
          this.eq((Ωilxt_800 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.pause',
            hit: '',
            pos: '2:18:18'
          });
          this.eq((Ωilxt_801 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_802', rpr(source3));
          lexemes = g.scan(source3);
          this.eq((Ωilxt_803 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.resume',
            hit: '',
            pos: '3:0:0'
          });
          this.eq((Ωilxt_804 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'or so I heard\n',
            pos: '3:0:14'
          });
          this.eq((Ωilxt_805 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.pause',
            hit: '',
            pos: '3:14:14'
          });
          this.eq((Ωilxt_806 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_807', rpr(null));
          lexemes = g.scan(null);
          this.eq((Ωilxt_808 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '4:0:0',
            data: {
              target: null
            }
          });
          this.eq((Ωilxt_809 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '4:0:0'
          });
          return this.eq((Ωilxt_810 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
        })();
        //.....................................................................................................
        return null;
      }
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
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
      // guytest_cfg = { throw_on_error: false, show_passes: true, report_checks: true, }
      return (new Test(guytest_cfg)).test(this.interlex_tasks);
    })();
  }

  // ( new Test guytest_cfg ).test { linking: @interlex_tasks.linking, }

}).call(this);

//# sourceMappingURL=test-basics.js.map