(async function() {
  'use strict';
  var GTNG, GUY, Test, abbrlxm, alert, condense_lexemes, ct_internals, debug, echo, f, help, info, inspect, isa, log, plain, praise, reverse, rpr, std, tabulate_lexeme, tabulate_lexemes, type_of, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('interlex/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  ({condense_lexemes, abbrlxm, tabulate_lexemes, tabulate_lexeme} = require('./helpers'));

  ({
    internals: ct_internals,
    isa,
    std,
    type_of
  } = require('../../../apps/cleartype'));

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
        var Grammar, ILX, Level, Lexeme, Token, g, gnd, internals, number_lx, number_tk, number_tk_matcher, rx, Ωilxt_100, Ωilxt_101, Ωilxt_102, Ωilxt_103, Ωilxt_104, Ωilxt_105, Ωilxt_106, Ωilxt_107, Ωilxt__64, Ωilxt__65, Ωilxt__66, Ωilxt__67, Ωilxt__68, Ωilxt__69, Ωilxt__70, Ωilxt__71, Ωilxt__72, Ωilxt__73, Ωilxt__74, Ωilxt__75, Ωilxt__76, Ωilxt__77, Ωilxt__78, Ωilxt__79, Ωilxt__80, Ωilxt__81, Ωilxt__82, Ωilxt__83, Ωilxt__84, Ωilxt__85, Ωilxt__86, Ωilxt__87, Ωilxt__88, Ωilxt__89, Ωilxt__90, Ωilxt__91, Ωilxt__92, Ωilxt__93, Ωilxt__94, Ωilxt__95, Ωilxt__96, Ωilxt__97, Ωilxt__98, Ωilxt__99;
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
          return ct_internals.gnd.function.isa(g.token_from_fqname);
        }), true);
        this.eq((Ωilxt_105 = function() {
          return g.token_from_fqname('gnd.number');
        }), number_tk);
        this.throws((Ωilxt_106 = function() {
          return g.token_from_fqname('XXX.XXX');
        }), /unknown level 'XXX'/);
        this.throws((Ωilxt_107 = function() {
          return g.token_from_fqname('gnd.XXX');
        }), /unknown token 'XXX'/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      flexible_new_token_syntax: function() {
        var Grammar, ILX, Level, Lexeme, Token, internals, rx;
        ILX = require('../../../apps/interlex');
        ({Grammar, Level, Token, Lexeme, rx, internals} = ILX);
        (() => {          //.....................................................................................................
          var g, gnd, number_lx, number_tk, number_tk_matcher, Ωilxt_108, Ωilxt_109;
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
          number_lx = g.scan_first('9753');
          this.eq((Ωilxt_108 = function() {
            return number_tk.name;
          }), 'number');
          this.eq((Ωilxt_109 = function() {
            return number_lx.token;
          }), number_tk);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, gnd, number_lx, number_tk, number_tk_matcher, Ωilxt_110, Ωilxt_111;
          g = new Grammar({
            name: 'g'
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          number_tk_matcher = rx`[0-9]+`;
          number_tk = gnd.new_token('number', {
            fit: number_tk_matcher
          });
          number_lx = g.scan_first('9753');
          this.eq((Ωilxt_110 = function() {
            return number_tk.name;
          }), 'number');
          this.eq((Ωilxt_111 = function() {
            return number_lx.token;
          }), number_tk);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, gnd, number_lx, number_tk, number_tk_matcher, Ωilxt_112, Ωilxt_113;
          g = new Grammar({
            name: 'g'
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          number_tk_matcher = rx`[0-9]+`;
          number_tk = gnd.new_token('number', number_tk_matcher);
          number_lx = g.scan_first('9753');
          this.eq((Ωilxt_112 = function() {
            return number_tk.name;
          }), 'number');
          this.eq((Ωilxt_113 = function() {
            return number_lx.token;
          }), number_tk);
          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      new_regex_tag: function() {
        var internals, new_regex_tag, regex, rx, Ωilxt_114, Ωilxt_115, Ωilxt_116, Ωilxt_117, Ωilxt_118, Ωilxt_119, Ωilxt_120, Ωilxt_121, Ωilxt_122, Ωilxt_123, Ωilxt_124;
        ({rx, regex, internals, new_regex_tag} = require('../../../apps/interlex'));
        //.....................................................................................................
        this.eq((Ωilxt_114 = function() {
          return typeof new_regex_tag('dy');
        }), 'function');
        this.eq((Ωilxt_115 = function() {
          return typeof (new_regex_tag('dy')).si;
        }), 'function');
        this.eq((Ωilxt_116 = function() {
          return ((new_regex_tag('dyis'))`[a-z]`) instanceof RegExp;
        }), true);
        //.....................................................................................................
        this.eq((Ωilxt_117 = function() {
          return (new_regex_tag('dyis'))`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_118 = function() {
          return (new_regex_tag('dy')).si`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_119 = function() {
          return (new_regex_tag('dys')).si`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_120 = function() {
          return (new_regex_tag('dys')).i`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_121 = function() {
          return (new_regex_tag('dysi'))`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_122 = function() {
          return (new_regex_tag('v')).si`[a-z]`;
        }), /[a-z]/disvy);
        //.....................................................................................................
        this.throws((Ωilxt_123 = function() {
          return (new_regex_tag('dy')).ab`[a-z]`;
        }), /illegal or duplicate flags/);
        this.throws((Ωilxt_124 = function() {
          return (new_regex_tag('dyab'))`[a-z]`;
        }), /illegal or duplicate flags/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      normalize_regex: function() {
        var internals, normalize_regex, Ωilxt_125, Ωilxt_126, Ωilxt_127, Ωilxt_128, Ωilxt_129, Ωilxt_130, Ωilxt_131;
        ({internals} = require('../../../apps/interlex'));
        ({normalize_regex} = internals);
        this.eq((Ωilxt_125 = function() {
          return typeof normalize_regex;
        }), 'function');
        this.eq((Ωilxt_126 = function() {
          return normalize_regex(/[a-z]/ig);
        }), /[a-z]/dgivy);
        this.eq((Ωilxt_127 = function() {
          return normalize_regex(/[a-z]/i);
        }), /[a-z]/divy);
        this.eq((Ωilxt_128 = function() {
          return normalize_regex(/[a-z]/u);
        }), /[a-z]/dvy);
        this.eq((Ωilxt_129 = function() {
          return normalize_regex(/[a-z]/gv);
        }), /[a-z]/dgvy);
        this.eq((Ωilxt_130 = function() {
          return normalize_regex(/[a-z]/gu);
        }), /[a-z]/dgvy);
        this.eq((Ωilxt_131 = function() {
          return normalize_regex(/[a-z]/v);
        }), /[a-z]/dvy);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      rx_flags: function() {
        var rx, Ωilxt_132, Ωilxt_133, Ωilxt_135, Ωilxt_136;
        ({rx} = require('../../../apps/interlex'));
        this.eq((Ωilxt_132 = function() {
          return (rx`x`).flags;
        }), 'dvy');
        this.eq((Ωilxt_133 = function() {
          return (rx.si`x`).flags;
        }), 'disvy');
        // @eq ( Ωilxt_134 = -> ( rx.sidvy"x"  ).flags ), 'disvy'
        this.eq((Ωilxt_135 = function() {
          return (rx.y`x`).flags;
        }), 'dvy');
        this.eq((Ωilxt_136 = function() {
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
          var fit, g, lexemes, probe, probes_and_matchers, x, Ωilxt_137, Ωilxt_140;
          g = new_grammar({
            emit_signals: false
          });
          this.eq((Ωilxt_137 = function() {
            return g.state.lnr;
          }), 1);
          probes_and_matchers = [["1st line", 1], ["2nd line", 2], ["3rd line", 3], ["4th line (and EOF)", 4]];
//...................................................................................................
          for (x of probes_and_matchers) {
            [probe, fit] = x;
            info('Ωilxt_138', rpr(probe));
            lexemes = g.scan_to_list(probe);
            // urge 'Ωilxt_139', lexemes
            this.eq((Ωilxt_140 = function() {
              return lexemes[0].lnr;
            }), fit);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          var fit, g, lexeme, probe, probes_and_matchers, x, Ωilxt_141, Ωilxt_142, Ωilxt_144;
          g = new_grammar({
            lnr: 10,
            emit_signals: false
          });
          this.eq((Ωilxt_141 = function() {
            return g.state.lnr;
          }), 10);
          this.throws((Ωilxt_142 = function() {
            return g.reset_lnr(10);
          }), /does not accept arguments/);
          probes_and_matchers = [["1st line", 10], ["2nd line", 11], ["3rd line", 12], ["4th line (and EOF)", 13]];
//...................................................................................................
          for (x of probes_and_matchers) {
            [probe, fit] = x;
            info('Ωilxt_143', rpr(probe));
            lexeme = (g.scan_to_list(probe))[0];
            this.eq((Ωilxt_144 = function() {
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
          var fit, lexemes, probe, x, Ωilxt_145, Ωilxt_146, Ωilxt_147;
          for (x of probes_and_matchers) {
            [probe, fit] = x;
            g.reset_lnr();
            lexemes = g.scan_to_list(probe);
            this.eq((Ωilxt_145 = function() {
              return condense_lexemes(lexemes);
            }), fit.condensed);
            this.eq((Ωilxt_146 = function() {
              return lexemes.length;
            }), fit.length);
            g.reset_lnr();
            this.eq((Ωilxt_147 = function() {
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
          var first, fit, g, i, len, position, probes_and_matchers, source, Ωilxt_148;
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
            this.eq((Ωilxt_148 = function() {
              return condense_lexemes(first.match_first_at(position, source));
            }), fit);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'first', longest tokens first */
          var first, fit, g, i, len, position, probes_and_matchers, source, Ωilxt_149;
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
            this.eq((Ωilxt_149 = function() {
              return condense_lexemes(first.match_first_at(position, source));
            }), fit);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'longest', shortest tokens first */
          var first, fit, g, i, len, position, probes_and_matchers, source, Ωilxt_150;
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
            this.eq((Ωilxt_150 = function() {
              return condense_lexemes(first.match_longest_at(position, source));
            }), fit);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'longest', longest tokens first */
          var first, fit, g, i, len, position, probes_and_matchers, source, Ωilxt_151;
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
            this.eq((Ωilxt_151 = function() {
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
              var first, fit, g, j, k, len, len1, position, source, token_cfg, token_cfgs, Ωilxt_152;
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
              for (k = 0, len1 = probes_and_matchers.length; k < len1; k++) {
                [[position, source], fit] = probes_and_matchers[k];
                this.eq((Ωilxt_152 = function() {
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
              var first, fit, g, j, k, len, len1, source, token_cfg, token_cfgs, Ωilxt_153, Ωilxt_154, Ωilxt_155;
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
              this.eq((Ωilxt_153 = function() {
                return g.cfg.strategy;
              }), 'longest');
              this.eq((Ωilxt_154 = function() {
                return first.strategy;
              }), 'longest');
              for (k = 0, len1 = probes_and_matchers.length; k < len1; k++) {
                [source, fit] = probes_and_matchers[k];
                this.eq((Ωilxt_155 = function() {
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
          var first, fit, g, i, len, probes_and_matchers, source, Ωilxt_156, Ωilxt_157, Ωilxt_158;
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
        (() => {          //.....................................................................................................
          /* strategy 'first', long tokens first */
          var first, fit, g, i, len, probes_and_matchers, source, Ωilxt_159, Ωilxt_160, Ωilxt_161;
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
          this.eq((Ωilxt_159 = function() {
            return g.cfg.strategy;
          }), 'first');
          this.eq((Ωilxt_160 = function() {
            return first.strategy;
          }), 'first');
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [source, fit] = probes_and_matchers[i];
            this.eq((Ωilxt_161 = function() {
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
          var g, gnd, Ωilxt_162;
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
          return this.throws((Ωilxt_162 = function() {
            return g.scan_to_list("ab");
          }), /encountered zero-length match/);
        })();
        (() => {          //.....................................................................................................
          var g, gnd, Ωilxt_163;
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
          return this.throws((Ωilxt_163 = function() {
            return g.scan_to_list("ab");
          }), /encountered zero-length match/);
        })();
        (() => {          //.....................................................................................................
          /* We accept the empty match here since while it does get produced as an intermediate value to find
                 the longest match, it does not get passed on as a resulting lexeme. */
          var g, gnd, Ωilxt_164;
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
          return this.eq((Ωilxt_164 = function() {
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
          var first, g, Ωilxt_165, Ωilxt_166;
          g = new Grammar();
          first = g.new_level({
            name: 'first'
          });
          this.throws((Ωilxt_165 = function() {
            return first.new_token({
              name: 'digit',
              fit: /[0-9]/,
              jump: 'first'
            });
          }), /cannot jump to same level/);
          this.throws((Ωilxt_166 = function() {
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
        var Token, Ωilxt_167, Ωilxt_168, Ωilxt_169, Ωilxt_170, Ωilxt_171, Ωilxt_172, Ωilxt_173, Ωilxt_174, Ωilxt_175, Ωilxt_176, Ωilxt_177, Ωilxt_178, Ωilxt_179, Ωilxt_180, Ωilxt_181, Ωilxt_182, Ωilxt_183, Ωilxt_184, Ωilxt_185, Ωilxt_186, Ωilxt_187, Ωilxt_188, Ωilxt_189;
        ({Token} = require('../../../apps/interlex'));
        //.....................................................................................................
        this.eq((Ωilxt_167 = function() {
          return Token._parse_jump();
        }), null);
        this.eq((Ωilxt_168 = function() {
          return Token._parse_jump('..');
        }), {
          spec: '..',
          carry: false,
          action: 'back',
          target: '..'
        });
        this.eq((Ωilxt_169 = function() {
          return Token._parse_jump('mylevel');
        }), {
          spec: 'mylevel',
          carry: false,
          action: 'fore',
          target: 'mylevel'
        });
        this.eq((Ωilxt_170 = function() {
          return Token._parse_jump('..!');
        }), {
          spec: '..!',
          carry: true,
          action: 'back',
          target: '..'
        });
        this.eq((Ωilxt_171 = function() {
          return Token._parse_jump('mylevel!');
        }), {
          spec: 'mylevel!',
          carry: true,
          action: 'fore',
          target: 'mylevel'
        });
        this.eq((Ωilxt_172 = function() {
          return Token._parse_jump('mylevel!', {
            name: 'otherlevel'
          });
        }), {
          spec: 'mylevel!',
          carry: true,
          action: 'fore',
          target: 'mylevel'
        });
        this.throws((Ωilxt_173 = function() {
          return Token._parse_jump('..]');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_174 = function() {
          return Token._parse_jump(']..');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_175 = function() {
          return Token._parse_jump('[mylevel');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_176 = function() {
          return Token._parse_jump('mylevel[');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_177 = function() {
          return Token._parse_jump('mylevel[', {
            name: 'otherlevel'
          });
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_178 = function() {
          return Token._parse_jump('[mylevel[');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_179 = function() {
          return Token._parse_jump('[mylevel]');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_180 = function() {
          return Token._parse_jump(']mylevel');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_181 = function() {
          return Token._parse_jump('[..');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_182 = function() {
          return Token._parse_jump('[..]');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_183 = function() {
          return Token._parse_jump('..[');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_184 = function() {
          return Token._parse_jump('[...');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_185 = function() {
          return Token._parse_jump('...');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_186 = function() {
          return Token._parse_jump('%');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_187 = function() {
          return Token._parse_jump('my-name');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_188 = function() {
          return Token._parse_jump('mylevel', {
            name: 'mylevel'
          });
        }), /cannot jump to same level/);
        this.throws((Ωilxt_189 = function() {
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
          var first, g, lexeme, number, Ωilxt_190, Ωilxt_191, Ωilxt_192, Ωilxt_193, Ωilxt_194, Ωilxt_195, Ωilxt_196, Ωilxt_197, Ωilxt_198, Ωilxt_199;
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
          this.eq((Ωilxt_190 = function() {
            return lexeme instanceof Lexeme;
          }), true);
          this.eq((Ωilxt_191 = function() {
            return lexeme.token instanceof Token;
          }), true);
          this.eq((Ωilxt_192 = function() {
            return lexeme.name;
          }), 'digit');
          this.eq((Ωilxt_193 = function() {
            return lexeme.level.name;
          }), 'first');
          this.eq((Ωilxt_194 = function() {
            return lexeme.fqname;
          }), 'first.digit');
          lexeme.set_level(number);
          this.eq((Ωilxt_195 = function() {
            return lexeme instanceof Lexeme;
          }), true);
          this.eq((Ωilxt_196 = function() {
            return lexeme.token instanceof Token;
          }), true);
          this.eq((Ωilxt_197 = function() {
            return lexeme.name;
          }), 'digit');
          this.eq((Ωilxt_198 = function() {
            return lexeme.level.name;
          }), 'number');
          return this.eq((Ωilxt_199 = function() {
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
          var dqstring, first, g, lexemes, Ωilxt_200, Ωilxt_201, Ωilxt_202, Ωilxt_203, Ωilxt_204, Ωilxt_205, Ωilxt_206, Ωilxt_207, Ωilxt_208, Ωilxt_209;
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
          this.eq((Ωilxt_200 = function() {
            return first.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_201 = function() {
            return first.tokens.dq.jump;
          }), {
            spec: 'dqstring!',
            carry: true,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_202 = function() {
            return dqstring.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_203 = function() {
            return dqstring.tokens.dq.jump;
          }), {
            spec: '..',
            carry: false,
            action: 'back',
            target: '..'
          });
          //...................................................................................................
          lexemes = g.scan('Bob said "wow".');
          this.eq((Ωilxt_204 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: 'Bob said ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_205 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.dq',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_206 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.other',
            hit: 'wow',
            pos: '1:10:13'
          });
          this.eq((Ωilxt_207 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.dq',
            hit: '"',
            pos: '1:13:14'
          });
          this.eq((Ωilxt_208 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: '.',
            pos: '1:14:15'
          });
          this.eq((Ωilxt_209 = function() {
            return lexemes.next().done;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          /* forejump sticks, backjump carries */
          var dqstring, first, g, lexemes, Ωilxt_210, Ωilxt_211, Ωilxt_212, Ωilxt_213, Ωilxt_214, Ωilxt_215, Ωilxt_216, Ωilxt_217, Ωilxt_218, Ωilxt_219;
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
          this.eq((Ωilxt_210 = function() {
            return first.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_211 = function() {
            return first.tokens.dq.jump;
          }), {
            spec: 'dqstring',
            carry: false,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_212 = function() {
            return dqstring.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_213 = function() {
            return dqstring.tokens.dq.jump;
          }), {
            spec: '..!',
            carry: true,
            action: 'back',
            target: '..'
          });
          //...................................................................................................
          lexemes = g.scan('Bob said "wow".');
          this.eq((Ωilxt_214 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: 'Bob said ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_215 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.dq',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_216 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.other',
            hit: 'wow',
            pos: '1:10:13'
          });
          this.eq((Ωilxt_217 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.dq',
            hit: '"',
            pos: '1:13:14'
          });
          this.eq((Ωilxt_218 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: '.',
            pos: '1:14:15'
          });
          this.eq((Ωilxt_219 = function() {
            return lexemes.next().done;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          /* forejump carries, backjump carries */
          var dqstring, first, g, lexemes, Ωilxt_220, Ωilxt_221, Ωilxt_222, Ωilxt_223, Ωilxt_224, Ωilxt_225, Ωilxt_226, Ωilxt_227, Ωilxt_228, Ωilxt_229;
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
          this.eq((Ωilxt_220 = function() {
            return first.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_221 = function() {
            return first.tokens.dq.jump;
          }), {
            spec: 'dqstring!',
            carry: true,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_222 = function() {
            return dqstring.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_223 = function() {
            return dqstring.tokens.dq.jump;
          }), {
            spec: '..!',
            carry: true,
            action: 'back',
            target: '..'
          });
          //...................................................................................................
          lexemes = g.scan('Bob said "wow".');
          this.eq((Ωilxt_224 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: 'Bob said ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_225 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.dq',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_226 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.other',
            hit: 'wow',
            pos: '1:10:13'
          });
          this.eq((Ωilxt_227 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.dq',
            hit: '"',
            pos: '1:13:14'
          });
          this.eq((Ωilxt_228 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: '.',
            pos: '1:14:15'
          });
          this.eq((Ωilxt_229 = function() {
            return lexemes.next().done;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          /* forejump sticks, backjump sticks */
          var dqstring, first, g, lexemes, Ωilxt_230, Ωilxt_231, Ωilxt_232, Ωilxt_233, Ωilxt_234, Ωilxt_235, Ωilxt_236, Ωilxt_237, Ωilxt_238, Ωilxt_239;
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
          this.eq((Ωilxt_230 = function() {
            return first.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_231 = function() {
            return first.tokens.dq.jump;
          }), {
            spec: 'dqstring',
            carry: false,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_232 = function() {
            return dqstring.tokens.dq.name;
          }), 'dq');
          this.eq((Ωilxt_233 = function() {
            return dqstring.tokens.dq.jump;
          }), {
            spec: '..',
            carry: false,
            action: 'back',
            target: '..'
          });
          //...................................................................................................
          lexemes = g.scan('Bob said "wow".');
          this.eq((Ωilxt_234 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: 'Bob said ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_235 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.dq',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_236 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.other',
            hit: 'wow',
            pos: '1:10:13'
          });
          this.eq((Ωilxt_237 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.dq',
            hit: '"',
            pos: '1:13:14'
          });
          this.eq((Ωilxt_238 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: '.',
            pos: '1:14:15'
          });
          this.eq((Ωilxt_239 = function() {
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
          var fit, lexemes, probe, x, Ωilxt_240, Ωilxt_241, Ωilxt_242;
          for (x of probes_and_matchers) {
            [probe, fit] = x;
            g.reset_lnr();
            lexemes = g.scan_to_list(probe);
            this.eq((Ωilxt_240 = function() {
              return condense_lexemes(lexemes);
            }), fit.condensed);
            this.eq((Ωilxt_241 = function() {
              return lexemes.length;
            }), fit.length);
            g.reset_lnr();
            this.eq((Ωilxt_242 = function() {
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
          info('Ωilxt_243', rpr(source));
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
          var g, gnd, lexemes, number, source, Ωilxt_245, Ωilxt_246, Ωilxt_247, Ωilxt_248, Ωilxt_249, Ωilxt_250, Ωilxt_251;
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
          info('Ωilxt_244', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_245 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.before_digits',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_246 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '99',
            pos: '1:0:2'
          });
          this.eq((Ωilxt_247 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'kg',
            pos: '1:2:4'
          });
          this.eq((Ωilxt_248 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.before_digits',
            hit: '',
            pos: '1:4:4'
          });
          this.eq((Ωilxt_249 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '23',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_250 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'mm',
            pos: '1:6:8'
          });
          return this.eq((Ωilxt_251 = function() {
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
          var g, gnd, Ωilxt_252, Ωilxt_253;
          g = new Grammar({
            name: 'g',
            emit_signals: false
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          //...................................................................................................
          this.eq((Ωilxt_252 = function() {
            return (gnd.new_token({
              name: 'letters',
              fit: /[a-z]+/
            })) instanceof Token;
          }), true);
          return this.throws((Ωilxt_253 = function() {
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
        var stack, Ωilxt_254, Ωilxt_255, Ωilxt_256, Ωilxt_257, Ωilxt_258;
        stack = new Levelstack();
        this.eq((Ωilxt_254 = function() {
          return stack.is_empty;
        }), true);
        stack.push({
          name: '1'
        });
        this.eq((Ωilxt_255 = function() {
          return stack.length;
        }), 1);
        this.eq((Ωilxt_256 = function() {
          return stack.peek();
        }), {
          name: '1'
        });
        this.eq((Ωilxt_257 = function() {
          return stack.pop();
        }), {
          name: '1'
        });
        return this.eq((Ωilxt_258 = function() {
          return stack.length;
        }), 0);
      })();
      (() => {
        var stack, Ωilxt_259, Ωilxt_260, Ωilxt_261, Ωilxt_262;
        stack = new Levelstack({
          name: '1'
        });
        this.eq((Ωilxt_259 = function() {
          return stack.length;
        }), 1);
        this.eq((Ωilxt_260 = function() {
          return stack.peek();
        }), {
          name: '1'
        });
        this.eq((Ωilxt_261 = function() {
          return stack.pop();
        }), {
          name: '1'
        });
        return this.eq((Ωilxt_262 = function() {
          return stack.length;
        }), 0);
      })();
      (() => {
        var stack, Ωilxt_263, Ωilxt_264, Ωilxt_265, Ωilxt_266, Ωilxt_267, Ωilxt_268, Ωilxt_269;
        stack = new Levelstack({
          name: '1'
        }, {
          name: '2'
        });
        this.eq((Ωilxt_263 = function() {
          return stack.length;
        }), 2);
        this.eq((Ωilxt_264 = function() {
          return stack.peek();
        }), {
          name: '2'
        });
        this.eq((Ωilxt_265 = function() {
          return stack.popnpeek();
        }), {
          name: '1'
        });
        this.eq((Ωilxt_266 = function() {
          return stack.length;
        }), 1);
        this.eq((Ωilxt_267 = function() {
          return stack.peek();
        }), {
          name: '1'
        });
        this.eq((Ωilxt_268 = function() {
          return stack.pop();
        }), {
          name: '1'
        });
        return this.eq((Ωilxt_269 = function() {
          return stack.length;
        }), 0);
      })();
      (() => {
        var stack, Ωilxt_270, Ωilxt_273, Ωilxt_274, Ωilxt_276, Ωilxt_277, Ωilxt_278;
        stack = new Levelstack({
          name: '1'
        }, {
          name: '2'
        });
        this.eq((Ωilxt_270 = function() {
          return stack.length;
        }), 2);
        // @eq     ( Ωilxt_271 = -> stack.peek_name()                ), '2'
        // @eq     ( Ωilxt_272 = -> stack.popnpeek_name()            ), '1'
        stack.pop();
        this.eq((Ωilxt_273 = function() {
          return stack.length;
        }), 1);
        this.eq((Ωilxt_274 = function() {
          return stack.is_empty;
        }), false);
        // @eq     ( Ωilxt_275 = -> stack.peek_name()                ), '1'
        this.eq((Ωilxt_276 = function() {
          return stack.pop_name();
        }), '1');
        this.eq((Ωilxt_277 = function() {
          return stack.length;
        }), 0);
        return this.eq((Ωilxt_278 = function() {
          return stack.is_empty;
        }), true);
      })();
      (() => {
        var stack, Ωilxt_279, Ωilxt_280, Ωilxt_281, Ωilxt_282, Ωilxt_283, Ωilxt_284, Ωilxt_285, Ωilxt_287, Ωilxt_288, Ωilxt_289;
        stack = new Levelstack({
          name: '1'
        }, {
          name: '2'
        });
        this.eq((Ωilxt_279 = function() {
          return stack.pop();
        }), {
          name: '2'
        });
        this.eq((Ωilxt_280 = function() {
          return stack.is_empty;
        }), false);
        this.eq((Ωilxt_281 = function() {
          return stack.pop();
        }), {
          name: '1'
        });
        this.eq((Ωilxt_282 = function() {
          return stack.is_empty;
        }), true);
        this.throws((Ωilxt_283 = function() {
          return stack.pop();
        }), /stack is empty/);
        this.throws((Ωilxt_284 = function() {
          return stack.popnpeek();
        }), /stack is empty/);
        this.throws((Ωilxt_285 = function() {
          return stack.pop_name();
        }), /stack is empty/);
        // @throws ( Ωilxt_286 = -> stack.popnpeek_name()            ), /stack is empty/
        this.eq((Ωilxt_287 = function() {
          return stack.pop('fallback');
        }), 'fallback');
        this.eq((Ωilxt_288 = function() {
          return stack.popnpeek('fallback');
        }), 'fallback');
        return this.eq((Ωilxt_289 = function() {
          return stack.pop_name('fallback');
        }), 'fallback');
      })();
      // @eq     ( Ωilxt_290 = -> stack.popnpeek_name  'fallback'  ), 'fallback'
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
          var lexemes, source, Ωilxt_293, Ωilxt_294, Ωilxt_295, Ωilxt_296, Ωilxt_297, Ωilxt_298, Ωilxt_299, Ωilxt_300, Ωilxt_301, Ωilxt_302, Ωilxt_303, Ωilxt_304, Ωilxt_305, Ωilxt_306, Ωilxt_307, Ωilxt_308, Ωilxt_309, Ωilxt_310, Ωilxt_311, Ωilxt_312, Ωilxt_313, Ωilxt_314, Ωilxt_315, Ωilxt_316, Ωilxt_317, Ωilxt_318, Ωilxt_319, Ωilxt_320;
          source = "R\\2D\\2 has 3556.3 Petabytes";
          // g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_291', rpr source; tabulate_lexemes g.scan source
          info('Ωilxt_292', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_293 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'R',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_294 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: '\\2',
            pos: '1:1:3'
          });
          this.eq((Ωilxt_295 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'D',
            pos: '1:3:4'
          });
          this.eq((Ωilxt_296 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: '\\2',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_297 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.ws',
            hit: ' ',
            pos: '1:6:7'
          });
          this.eq((Ωilxt_298 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'h',
            pos: '1:7:8'
          });
          this.eq((Ωilxt_299 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'a',
            pos: '1:8:9'
          });
          this.eq((Ωilxt_300 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 's',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_301 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.ws',
            hit: ' ',
            pos: '1:10:11'
          });
          this.eq((Ωilxt_302 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.number_start',
            hit: '',
            pos: '1:11:11'
          });
          this.eq((Ωilxt_303 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.digit',
            hit: '3',
            pos: '1:11:12'
          });
          this.eq((Ωilxt_304 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.digit',
            hit: '5',
            pos: '1:12:13'
          });
          this.eq((Ωilxt_305 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.digit',
            hit: '5',
            pos: '1:13:14'
          });
          this.eq((Ωilxt_306 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.digit',
            hit: '6',
            pos: '1:14:15'
          });
          this.eq((Ωilxt_307 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.digit',
            hit: '.',
            pos: '1:15:16'
          });
          this.eq((Ωilxt_308 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.digit',
            hit: '3',
            pos: '1:16:17'
          });
          this.eq((Ωilxt_309 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.number_stop',
            hit: '',
            pos: '1:17:17'
          });
          this.eq((Ωilxt_310 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.ws',
            hit: ' ',
            pos: '1:17:18'
          });
          this.eq((Ωilxt_311 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'P',
            pos: '1:18:19'
          });
          this.eq((Ωilxt_312 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'e',
            pos: '1:19:20'
          });
          this.eq((Ωilxt_313 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 't',
            pos: '1:20:21'
          });
          this.eq((Ωilxt_314 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'a',
            pos: '1:21:22'
          });
          this.eq((Ωilxt_315 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'b',
            pos: '1:22:23'
          });
          this.eq((Ωilxt_316 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'y',
            pos: '1:23:24'
          });
          this.eq((Ωilxt_317 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 't',
            pos: '1:24:25'
          });
          this.eq((Ωilxt_318 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'e',
            pos: '1:25:26'
          });
          this.eq((Ωilxt_319 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 's',
            pos: '1:26:27'
          });
          this.eq((Ωilxt_320 = function() {
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
          var lexemes, source, Ωilxt_323, Ωilxt_324, Ωilxt_325, Ωilxt_326, Ωilxt_327, Ωilxt_328, Ωilxt_329, Ωilxt_330, Ωilxt_331, Ωilxt_332;
          source = "R\\2D\\2 has 3556.3 Petabytes";
          // g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_321', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          info('Ωilxt_322', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_323 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'R\\2D\\2',
            pos: '1:0:6'
          });
          this.eq((Ωilxt_324 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.ws',
            hit: ' ',
            pos: '1:6:7'
          });
          this.eq((Ωilxt_325 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'has',
            pos: '1:7:10'
          });
          this.eq((Ωilxt_326 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.ws',
            hit: ' ',
            pos: '1:10:11'
          });
          this.eq((Ωilxt_327 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.number_start',
            hit: '',
            pos: '1:11:11'
          });
          this.eq((Ωilxt_328 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.digit',
            hit: '3556.3',
            pos: '1:11:17'
          });
          this.eq((Ωilxt_329 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.number_stop',
            hit: '',
            pos: '1:17:17'
          });
          this.eq((Ωilxt_330 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.ws',
            hit: ' ',
            pos: '1:17:18'
          });
          this.eq((Ωilxt_331 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.text',
            hit: 'Petabytes',
            pos: '1:18:27'
          });
          this.eq((Ωilxt_332 = function() {
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
          var lexemes, source, Ωilxt_335, Ωilxt_336;
          source = "ArcBoCyDeen";
          // g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_333', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          info('Ωilxt_334', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_335 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.name',
            hit: 'ArcBoCyDeen',
            pos: '1:0:11',
            data: {
              initial: ['A', 'B', 'C', 'D']
            }
          });
          this.eq((Ωilxt_336 = function() {
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
          var lexemes, source, Ωilxt_339, Ωilxt_340;
          source = "ArcBoCyDeen";
          // g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_337', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          info('Ωilxt_338', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_339 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.name',
            hit: 'ArcBoCyDeen',
            pos: '1:0:11',
            data: {
              initial: 'D'
            }
          });
          this.eq((Ωilxt_340 = function() {
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
          var lexemes, source, Ωilxt_343, Ωilxt_344;
          source = "Arc";
          // g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_341', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          info('Ωilxt_342', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_343 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.name',
            hit: 'Arc',
            pos: '1:0:3',
            data: {
              initial: ['A']
            }
          });
          this.eq((Ωilxt_344 = function() {
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
          var lexemes, source, Ωilxt_347, Ωilxt_348;
          source = "ArcBoCyDeen";
          // g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_345', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          info('Ωilxt_346', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_347 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.name',
            hit: 'ArcBoCyDeen',
            pos: '1:0:11',
            data: {
              initial: ['A', 'B', 'C', 'D']
            }
          });
          this.eq((Ωilxt_348 = function() {
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
          var lexemes, source, Ωilxt_351, Ωilxt_352;
          source = "ArcBoCyDeen";
          // g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_349', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          info('Ωilxt_350', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_351 = function() {
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
          this.eq((Ωilxt_352 = function() {
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
    //     # info 'Ωilxt_353', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
    //     info 'Ωilxt_354', rpr source; g.reset_lnr(); lexemes = g.scan source
    //     @eq ( Ωilxt_355 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.name', hit: 'ArcBoCyDeen', pos: '1:0:11', data: { parts: [ 'ArcBoCyDeen' ], initials: [ 'ABCD' ] } }
    //     @eq ( Ωilxt_356 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
    //     return null
    //   return null

    //=========================================================================================================
    data_capture: {
      //-------------------------------------------------------------------------------------------------------
      data_property: function() {
        var Grammar, g, gnd, lexeme, name, Ωilxt_357, Ωilxt_358, Ωilxt_359, Ωilxt_360, Ωilxt_361, Ωilxt_362;
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
        this.eq((Ωilxt_357 = function() {
          return lexeme.groups;
        }), void 0);
        this.eq((Ωilxt_358 = function() {
          return lexeme.data != null;
        }), true);
        this.eq((Ωilxt_359 = function() {
          return lexeme.has_data;
        }), true);
        this.eq((Ωilxt_360 = function() {
          return lexeme.data.constructor;
        }), void 0);
        this.eq((Ωilxt_361 = function() {
          return lexeme.data.initial;
        }), 'B');
        this.eq((Ωilxt_362 = function() {
          return lexeme.data.tail;
        }), 'robdignac');
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      reset_data: function() {
        var Grammar;
        ({Grammar} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var g, g_data, Ωilxt_363, Ωilxt_364, Ωilxt_365, Ωilxt_366, Ωilxt_367, Ωilxt_368;
          g = new Grammar();
          g_data = g.data;
          this.eq((Ωilxt_363 = function() {
            return type_of(g.reset_data);
          }), 'function');
          this.eq((Ωilxt_364 = function() {
            return type_of(g.assign);
          }), 'function');
          this.eq((Ωilxt_365 = function() {
            return g.data;
          }), {});
          this.eq((Ωilxt_366 = function() {
            return g.data === g_data;
          }), true);
          g.assign({
            key: 'value'
          });
          this.eq((Ωilxt_367 = function() {
            return g.data;
          }), {
            key: 'value'
          });
          this.eq((Ωilxt_368 = function() {
            return g.data === g_data;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, g_data, Ωilxt_369;
          g = new Grammar();
          g_data = g.data;
          g.assign({
            key: 'value'
          });
          this.throws((Ωilxt_369 = function() {
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
          var g, template, Ωilxt_370, Ωilxt_371, Ωilxt_372, Ωilxt_373;
          template = {
            one: 1,
            list: [],
            set: new Set()
          };
          g = new Grammar({
            data: template
          });
          this.eq((Ωilxt_370 = function() {
            return g.data;
          }), template);
          this.eq((Ωilxt_371 = function() {
            return g.data === template;
          }), false);
          this.eq((Ωilxt_372 = function() {
            return g.data.list === template.list;
          }), true);
          this.eq((Ωilxt_373 = function() {
            return g.data.set === template.set;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, matcher, template, Ωilxt_375, Ωilxt_376, Ωilxt_377, Ωilxt_378, Ωilxt_379;
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
          // @eq ( Ωilxt_374 = -> g.data                           ), matcher
          this.eq((Ωilxt_375 = function() {
            return g.data === template;
          }), false);
          this.eq((Ωilxt_376 = function() {
            return g.data.list === template.list;
          }), false);
          this.eq((Ωilxt_377 = function() {
            return g.data.set === template.set;
          }), false);
          this.eq((Ωilxt_378 = function() {
            return type_of(g.data.list);
          }), 'list');
          this.eq((Ωilxt_379 = function() {
            return type_of(g.data.set);
          }), 'set');
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, matcher, template, Ωilxt_381, Ωilxt_382, Ωilxt_383, Ωilxt_384, Ωilxt_385, Ωilxt_386, Ωilxt_387, Ωilxt_388, Ωilxt_389;
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
          // @eq ( Ωilxt_380 = -> g.data                           ), matcher
          this.eq((Ωilxt_381 = function() {
            return g.data.count;
          }), matcher.count);
          this.eq((Ωilxt_382 = function() {
            return g.data.list;
          }), matcher.list);
          this.eq((Ωilxt_383 = function() {
            return g.cfg.data.count === template.count;
          }), true);
          this.eq((Ωilxt_384 = function() {
            return g.cfg.data.list === g.cfg.data.list;
          }), false);
          this.eq((Ωilxt_385 = function() {
            return std.list.isa(g.cfg.data.list);
          }), true);
          g.data.count++;
          g.data.list.push('value');
          this.eq((Ωilxt_386 = function() {
            return g.data.count;
          }), 2);
          this.eq((Ωilxt_387 = function() {
            return g.data.list;
          }), ['value']);
          g.reset_data();
          this.eq((Ωilxt_388 = function() {
            return g.data.count;
          }), matcher.count);
          this.eq((Ωilxt_389 = function() {
            return g.data.list;
          }), matcher.list);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, template, Ωilxt_391, Ωilxt_392, Ωilxt_393, Ωilxt_394;
          template = {
            count: 1
          };
          g = new Grammar({
            data: template
          });
          /* guy_test doesn't currently recognize nested maps, sets so we're doing it the long way */
          // @eq ( Ωilxt_390 = -> g.data                           ), matcher
          this.eq((Ωilxt_391 = function() {
            return g.data.count;
          }), 1);
          g.data.count++;
          this.eq((Ωilxt_392 = function() {
            return g.data.count;
          }), 2);
          g.reset_data();
          this.eq((Ωilxt_393 = function() {
            return g.data.count;
          }), 1);
          g.data.count++;
          g.reset_data();
          this.eq((Ωilxt_394 = function() {
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
          var Ωilxt_395;
          return this.eq((Ωilxt_395 = function() {
            return (new Grammar()).cfg.reset_lnr;
          }), false);
        })();
        (() => {          //.....................................................................................................
          var g, gnd, lexeme, text, Ωilxt_396, Ωilxt_397, Ωilxt_398, Ωilxt_399, Ωilxt_400;
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
          this.eq((Ωilxt_396 = function() {
            return g.state.lnr;
          }), 1);
          lexeme = g.scan_first('helo');
          this.eq((Ωilxt_397 = function() {
            return lexeme.lnr;
          }), 1);
          this.eq((Ωilxt_398 = function() {
            return g.state.lnr;
          }), 2);
          lexeme = g.scan_first('how');
          this.eq((Ωilxt_399 = function() {
            return lexeme.lnr;
          }), 2);
          return this.eq((Ωilxt_400 = function() {
            return g.state.lnr;
          }), 3);
        })();
        (() => {          //.....................................................................................................
          var g, gnd, lexeme, text, Ωilxt_401, Ωilxt_402, Ωilxt_403, Ωilxt_404, Ωilxt_405;
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
          this.eq((Ωilxt_401 = function() {
            return g.state.lnr;
          }), 1);
          lexeme = g.scan_first('helo');
          this.eq((Ωilxt_402 = function() {
            return lexeme.lnr;
          }), 1);
          this.eq((Ωilxt_403 = function() {
            return g.state.lnr;
          }), 1);
          lexeme = g.scan_first('how');
          this.eq((Ωilxt_404 = function() {
            return lexeme.lnr;
          }), 1);
          return this.eq((Ωilxt_405 = function() {
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
          var Ωilxt_406;
          return this.eq((Ωilxt_406 = function() {
            return (new Grammar()).cfg.reset_data;
          }), false);
        })();
        (() => {          //.....................................................................................................
          var g, gnd, hits, lexeme, text, Ωilxt_407, Ωilxt_408, Ωilxt_409, Ωilxt_410, Ωilxt_411, Ωilxt_412;
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
          this.eq((Ωilxt_407 = function() {
            return g.data.count;
          }), 1);
          g.data.count++;
          lexeme = g.scan_first('helo');
          g.data.hits.push(lexeme.hit);
          this.eq((Ωilxt_408 = function() {
            return g.data.count;
          }), 2);
          this.eq((Ωilxt_409 = function() {
            return g.data.hits;
          }), ['helo']);
          g.data.count++;
          lexeme = g.scan_first('how');
          g.data.hits.push(lexeme.hit);
          this.eq((Ωilxt_410 = function() {
            return g.data.count;
          }), 3);
          this.eq((Ωilxt_411 = function() {
            return g.data.hits;
          }), ['helo', 'how']);
          return this.eq((Ωilxt_412 = function() {
            return g.data.hits === hits;
          }), true);
        })();
        (() => {          //.....................................................................................................
          var g, gnd, hits, lexeme, text, Ωilxt_413, Ωilxt_414, Ωilxt_415, Ωilxt_416, Ωilxt_417, Ωilxt_418;
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
          this.eq((Ωilxt_413 = function() {
            return g.data.count;
          }), 1);
          g.data.count++;
          lexeme = g.scan_first('helo');
          g.data.hits.push(lexeme.hit);
          this.eq((Ωilxt_414 = function() {
            return g.data.count;
          }), 1);
          this.eq((Ωilxt_415 = function() {
            return g.data.hits;
          }), ['helo']);
          g.data.count++;
          lexeme = g.scan_first('how');
          g.data.hits.push(lexeme.hit);
          this.eq((Ωilxt_416 = function() {
            return g.data.count;
          }), 1);
          this.eq((Ωilxt_417 = function() {
            return g.data.hits;
          }), ['how']);
          return this.eq((Ωilxt_418 = function() {
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
          var Ωilxt_419;
          return this.eq((Ωilxt_419 = function() {
            return (new Grammar()).cfg.reset_errors;
          }), false);
        })();
        (() => {          //.....................................................................................................
          var g, gnd, hits, lexeme, text, Ωilxt_420, Ωilxt_421, Ωilxt_422, Ωilxt_423, Ωilxt_424, Ωilxt_425;
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
          this.eq((Ωilxt_420 = function() {
            return g.state.errors.length;
          }), 1);
          this.eq((Ωilxt_421 = function() {
            return g.has_errors;
          }), true);
          lexeme = g.scan_first('how');
          this.eq((Ωilxt_422 = function() {
            return g.state.errors.length;
          }), 2);
          this.eq((Ωilxt_423 = function() {
            return g.has_errors;
          }), true);
          lexeme = g.scan_first('753');
          this.eq((Ωilxt_424 = function() {
            return g.state.errors.length;
          }), 2);
          return this.eq((Ωilxt_425 = function() {
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
        //   @eq ( Ωilxt_426 = -> g.data.hits          ), [ 'helo', ]
        //   lexeme = g.scan_first 'how'
        //   @eq ( Ωilxt_427 = -> g.data.hits          ), [ 'how', ]
        //   @eq ( Ωilxt_428 = -> g.data.hits is hits  ), false
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
      //     @eq ( Ωilxt_429 = -> g.data                           ), template
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
        var Grammar, Ωilxt_430, Ωilxt_431, Ωilxt_432, Ωilxt_433;
        ({Grammar} = require('../../../apps/interlex'));
        this.eq((Ωilxt_430 = function() {
          return (new Grammar({
            emit_signals: false
          })).cfg.emit_signals;
        }), false);
        this.eq((Ωilxt_431 = function() {
          return (new Grammar({
            emit_signals: true
          })).cfg.emit_signals;
        }), true);
        this.eq((Ωilxt_432 = function() {
          return (new Grammar({})).cfg.emit_signals;
        }), true);
        this.eq((Ωilxt_433 = function() {
          return (new Grammar()).cfg.emit_signals;
        }), true);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      lexeme_props: function() {
        var Grammar, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var extract_props, g, level_one, level_two, lexemes, source, Ωilxt_437, Ωilxt_438, Ωilxt_439, Ωilxt_440, Ωilxt_441, Ωilxt_442, Ωilxt_443, Ωilxt_444, Ωilxt_445, Ωilxt_446;
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
          // info 'Ωilxt_434', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωilxt_435', rpr source; g.reset_lnr(); echo extract_props lexeme for lexeme from g.scan source
          info('Ωilxt_436', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_437 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            is_system: true,
            is_error: false,
            is_signal: true,
            is_user: false
          });
          this.eq((Ωilxt_438 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            is_system: true,
            is_error: false,
            is_signal: true,
            is_user: false
          });
          this.eq((Ωilxt_439 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'level_one.to_level_two',
            is_system: false,
            is_error: false,
            is_signal: false,
            is_user: true
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
            fqname: 'level_two.to_level_one',
            is_system: false,
            is_error: false,
            is_signal: false,
            is_user: true
          });
          this.eq((Ωilxt_442 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$error.loop',
            is_system: true,
            is_error: true,
            is_signal: false,
            is_user: false
          });
          this.eq((Ωilxt_443 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            is_system: true,
            is_error: false,
            is_signal: true,
            is_user: false
          });
          this.eq((Ωilxt_444 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$error.earlystop',
            is_system: true,
            is_error: true,
            is_signal: false,
            is_user: false
          });
          this.eq((Ωilxt_445 = function() {
            return extract_props(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            is_system: true,
            is_error: false,
            is_signal: true,
            is_user: false
          });
          this.eq((Ωilxt_446 = function() {
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
          var g, gnd, lexemes, number, source, Ωilxt_450, Ωilxt_451, Ωilxt_452, Ωilxt_453, Ωilxt_454, Ωilxt_455, Ωilxt_456, Ωilxt_457, Ωilxt_458, Ωilxt_459, Ωilxt_460, Ωilxt_461;
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
          info('Ωilxt_447', rpr(source));
          tabulate_lexemes(g.scan(source));
          // info 'Ωilxt_448', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_449', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_450 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_451 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'number'
            }
          });
          this.eq((Ωilxt_452 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.before_digits',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_453 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '99',
            pos: '1:0:2'
          });
          this.eq((Ωilxt_454 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'kg',
            pos: '1:2:4'
          });
          this.eq((Ωilxt_455 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:4:4',
            data: {
              target: 'number'
            }
          });
          this.eq((Ωilxt_456 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.before_digits',
            hit: '',
            pos: '1:4:4'
          });
          this.eq((Ωilxt_457 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '23',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_458 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'mm',
            pos: '1:6:8'
          });
          this.eq((Ωilxt_459 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:8:8',
            data: {
              target: null
            }
          });
          this.eq((Ωilxt_460 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:8:8'
          });
          this.eq((Ωilxt_461 = function() {
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
          var g, level_one, level_two, lexemes, source, Ωilxt_465, Ωilxt_466, Ωilxt_467, Ωilxt_468, Ωilxt_469, Ωilxt_470;
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
          // info 'Ωilxt_462', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωilxt_463', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_464', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_465 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_466 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'level_one'
            }
          });
          this.eq((Ωilxt_467 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'level_one.to_level_two',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_468 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'level_two'
            }
          });
          this.eq((Ωilxt_469 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'level_two.to_level_one',
            hit: '',
            pos: '1:0:0'
          });
          this.throws((Ωilxt_470 = function() {
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
          var g, level_one, level_two, lexemes, source, Ωilxt_474, Ωilxt_475, Ωilxt_476, Ωilxt_477, Ωilxt_478, Ωilxt_479, Ωilxt_480, Ωilxt_481, Ωilxt_482, Ωilxt_483, Ωilxt_484, Ωilxt_485, Ωilxt_486, Ωilxt_487, Ωilxt_488;
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
          // info 'Ωilxt_471', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωilxt_472', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_473', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_474 = function() {
            return g.has_errors;
          }), false);
          this.eq((Ωilxt_475 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_476 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'level_one'
            }
          });
          this.eq((Ωilxt_477 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'level_one.to_level_two',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_478 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'level_two'
            }
          });
          this.eq((Ωilxt_479 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'level_two.to_level_one',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_480 = function() {
            return g.has_errors;
          }), false);
          this.eq((Ωilxt_481 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$error.loop',
            hit: '',
            pos: '1:0:0',
            data: {
              message: "encountered loop at position +0 (indicated by '⚠': '⚠doesn\\'t matter')"
            }
          });
          this.eq((Ωilxt_482 = function() {
            return g.has_errors;
          }), true);
          this.eq((Ωilxt_483 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: null
            }
          });
          this.eq((Ωilxt_484 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$error.earlystop',
            hit: "doesn't matter",
            pos: '1:0:14',
            data: {
              message: 'expected stop at 14, got +0'
            }
          });
          this.eq((Ωilxt_485 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_486 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          this.eq((Ωilxt_487 = function() {
            return g.has_errors;
          }), true);
          lexemes = g.scan(source);
          abbrlxm(lexemes.next().value);
          this.eq((Ωilxt_488 = function() {
            return g.has_errors;
          }), true);
          return null;
        })();
        //...................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      has_errors: function() {
        var Grammar, g, gnd, lexemes, rx, Ωilxt_489, Ωilxt_490, Ωilxt_491, Ωilxt_492, Ωilxt_493, Ωilxt_494, Ωilxt_495, Ωilxt_496, Ωilxt_497, Ωilxt_498;
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
        this.eq((Ωilxt_489 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [0, false]);
        //.....................................................................................................
        g.state.errors.push(null);
        g.state.errors.push(null);
        this.eq((Ωilxt_490 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [2, true]);
        lexemes = g.scan('ghi');
        this.eq((Ωilxt_491 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [2, true]);
        this.eq((Ωilxt_492 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_493 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [0, false]);
        this.eq((Ωilxt_494 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:0:0',
          data: {
            target: null
          }
        });
        this.eq((Ωilxt_495 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$error.earlystop',
          hit: 'ghi',
          pos: '1:0:3',
          data: {
            message: 'expected stop at 3, got +0'
          }
        });
        this.eq((Ωilxt_496 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.stop',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_497 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), null);
        this.eq((Ωilxt_498 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [1, true]);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      can_throw_earlystop_errors: function() {
        var Grammar, g, gnd, lexemes, rx, Ωilxt_499, Ωilxt_500, Ωilxt_501, Ωilxt_502, Ωilxt_503, Ωilxt_504;
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
        this.eq((Ωilxt_499 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [0, false]);
        //.....................................................................................................
        g.state.errors.push(null);
        g.state.errors.push(null);
        this.eq((Ωilxt_500 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [2, true]);
        lexemes = g.scan('ghi');
        this.eq((Ωilxt_501 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [2, true]);
        this.eq((Ωilxt_502 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_503 = function() {
          return [g.state.errors.length, g.has_errors];
        }), [0, false]);
        this.throws((Ωilxt_504 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), /expected stop at 3/);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      ok_when_levels_back_to_back: function() {
        var Grammar, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var g, lexemes, source, tag, text, Ωilxt_508, Ωilxt_509, Ωilxt_510, Ωilxt_511, Ωilxt_512, Ωilxt_513, Ωilxt_514, Ωilxt_515, Ωilxt_516, Ωilxt_517, Ωilxt_518, Ωilxt_519;
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
          // info 'Ωilxt_505', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωilxt_506', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_507', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_508 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_509 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'text'
            }
          });
          this.eq((Ωilxt_510 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.pretag',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_511 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'tag'
            }
          });
          this.eq((Ωilxt_512 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'tag.tag',
            hit: '<tag-a>',
            pos: '1:0:7'
          });
          this.eq((Ωilxt_513 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:7:7',
            data: {
              target: 'text'
            }
          });
          this.eq((Ωilxt_514 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'text.pretag',
            hit: '',
            pos: '1:7:7'
          });
          this.eq((Ωilxt_515 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:7:7',
            data: {
              target: 'tag'
            }
          });
          this.eq((Ωilxt_516 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'tag.tag',
            hit: '<tag-b>',
            pos: '1:7:14'
          });
          this.eq((Ωilxt_517 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:14:14',
            data: {
              target: null
            }
          });
          this.eq((Ωilxt_518 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:14:14'
          });
          this.eq((Ωilxt_519 = function() {
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
          var g, lexemes, source, tag, text, Ωilxt_523, Ωilxt_524, Ωilxt_525, Ωilxt_526, Ωilxt_527, Ωilxt_528, Ωilxt_529, Ωilxt_530;
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
          info('Ωilxt_520', rpr(source));
          g.reset_lnr();
          tabulate_lexemes(g.scan(source));
          // info 'Ωilxt_521', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_522', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_523 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_524 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'tag'
            }
          });
          this.eq((Ωilxt_525 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'tag.tag',
            hit: '<tag-a>',
            pos: '1:0:7'
          });
          this.eq((Ωilxt_526 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:7:7',
            data: {
              target: 'tag'
            }
          });
          this.eq((Ωilxt_527 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'tag.tag',
            hit: '<tag-b>',
            pos: '1:7:14'
          });
          this.eq((Ωilxt_528 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:14:14',
            data: {
              target: null
            }
          });
          this.eq((Ωilxt_529 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:14:14'
          });
          this.eq((Ωilxt_530 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        //...................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    token_data: {
      //-------------------------------------------------------------------------------------------------------
      can_use_token_data_1: function() {
        var Grammar, cast, error, g, gnd, internals, lexemes, name1, name2, rx, source, Ωilxt_531, Ωilxt_532, Ωilxt_536, Ωilxt_537, Ωilxt_538, Ωilxt_539, Ωilxt_540, Ωilxt_541;
        ({Grammar, rx, internals} = require('../../../apps/interlex'));
        //=====================================================================================================
        cast = function*({hit, start, source, new_lexeme, lexeme}) {
          if (hit !== 'c') {
            yield lexeme;
            return null;
          }
          yield new_lexeme('error.nolikedis', start, source, {
            letter: hit,
            is_upper: lexeme.data.is_upper
          });
          return null;
        };
        //.....................................................................................................
        g = new Grammar({
          name: 'g',
          emit_signals: false
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
          merge: true,
          data: {
            is_upper: true
          }
        });
        name2 = gnd.new_token({
          name: 'name2',
          fit: rx`(?<lower>[a-z])`,
          merge: true,
          cast,
          data: {
            is_upper: false
          }
        });
        error.new_token({
          name: 'nolikedis',
          fit: rx`.`,
          merge: true
        });
        //.....................................................................................................
        this.eq((Ωilxt_531 = function() {
          return name1.data;
        }), {
          is_upper: true
        });
        this.eq((Ωilxt_532 = function() {
          return name2.data;
        }), {
          is_upper: false
        });
        //.....................................................................................................
        source = "Acceptreject";
        // info 'Ωilxt_533', rpr source; tabulate_lexemes g.scan source
        // info 'Ωilxt_534', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info('Ωilxt_535', rpr(source));
        g.reset_lnr();
        lexemes = g.scan(source);
        this.eq((Ωilxt_536 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name1',
          hit: 'A',
          pos: '1:0:1',
          data: {
            initial: ['A'],
            is_upper: [true]
          }
        });
        this.eq((Ωilxt_537 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'cc',
          pos: '1:1:3',
          data: {
            letter: ['c', 'c'],
            is_upper: [false, false]
          }
        });
        this.eq((Ωilxt_538 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 'eptreje',
          pos: '1:3:10',
          data: {
            lower: ['e', 'p', 't', 'r', 'e', 'j', 'e'],
            is_upper: [false, false, false, false, false, false, false]
          }
        });
        this.eq((Ωilxt_539 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'c',
          pos: '1:10:11',
          data: {
            letter: ['c'],
            is_upper: [false]
          }
        });
        this.eq((Ωilxt_540 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 't',
          pos: '1:11:12',
          data: {
            lower: ['t'],
            is_upper: [false]
          }
        });
        this.eq((Ωilxt_541 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), null);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      can_use_token_data_2: function() {
        var Grammar, cast, error, g, gnd, internals, lexemes, name1, name2, rx, source, Ωilxt_542, Ωilxt_543, Ωilxt_547, Ωilxt_548, Ωilxt_549, Ωilxt_550, Ωilxt_551, Ωilxt_552, Ωilxt_553, Ωilxt_554, Ωilxt_555, Ωilxt_556, Ωilxt_557, Ωilxt_558;
        ({Grammar, rx, internals} = require('../../../apps/interlex'));
        //=====================================================================================================
        cast = function*({hit, start, source, new_lexeme, lexeme}) {
          if (hit !== 'c') {
            yield lexeme;
            return null;
          }
          yield new_lexeme('error.nolikedis', start, source, {
            letter: hit,
            is_upper: lexeme.data.is_upper
          });
          return null;
        };
        //.....................................................................................................
        g = new Grammar({
          name: 'g',
          emit_signals: false
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
          merge: false,
          data: {
            is_upper: true
          }
        });
        name2 = gnd.new_token({
          name: 'name2',
          fit: rx`(?<lower>[a-z])`,
          merge: false,
          cast,
          data: {
            is_upper: false
          }
        });
        error.new_token({
          name: 'nolikedis',
          fit: rx`.`,
          merge: false
        });
        //.....................................................................................................
        this.eq((Ωilxt_542 = function() {
          return name1.data;
        }), {
          is_upper: true
        });
        this.eq((Ωilxt_543 = function() {
          return name2.data;
        }), {
          is_upper: false
        });
        //.....................................................................................................
        source = "Acceptreject";
        // info 'Ωilxt_544', rpr source; tabulate_lexemes g.scan source
        // info 'Ωilxt_545', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info('Ωilxt_546', rpr(source));
        g.reset_lnr();
        lexemes = g.scan(source);
        this.eq((Ωilxt_547 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name1',
          hit: 'A',
          pos: '1:0:1',
          data: {
            is_upper: true,
            initial: 'A'
          }
        });
        this.eq((Ωilxt_548 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'c',
          pos: '1:1:2',
          data: {
            letter: 'c',
            is_upper: false
          }
        });
        this.eq((Ωilxt_549 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'c',
          pos: '1:2:3',
          data: {
            letter: 'c',
            is_upper: false
          }
        });
        this.eq((Ωilxt_550 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 'e',
          pos: '1:3:4',
          data: {
            is_upper: false,
            lower: 'e'
          }
        });
        this.eq((Ωilxt_551 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 'p',
          pos: '1:4:5',
          data: {
            is_upper: false,
            lower: 'p'
          }
        });
        this.eq((Ωilxt_552 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 't',
          pos: '1:5:6',
          data: {
            is_upper: false,
            lower: 't'
          }
        });
        this.eq((Ωilxt_553 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 'r',
          pos: '1:6:7',
          data: {
            is_upper: false,
            lower: 'r'
          }
        });
        this.eq((Ωilxt_554 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 'e',
          pos: '1:7:8',
          data: {
            is_upper: false,
            lower: 'e'
          }
        });
        this.eq((Ωilxt_555 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 'j',
          pos: '1:8:9',
          data: {
            is_upper: false,
            lower: 'j'
          }
        });
        this.eq((Ωilxt_556 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 'e',
          pos: '1:9:10',
          data: {
            is_upper: false,
            lower: 'e'
          }
        });
        this.eq((Ωilxt_557 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'c',
          pos: '1:10:11',
          data: {
            letter: 'c',
            is_upper: false
          }
        });
        this.eq((Ωilxt_558 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 't',
          pos: '1:11:12',
          data: {
            is_upper: false,
            lower: 't'
          }
        });
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      can_use_token_data_3: function() {
        var Grammar, g, gnd, internals, lexemes, name1, name2, rx, source, Ωilxt_562, Ωilxt_573;
        ({Grammar, rx, internals} = require('../../../apps/interlex'));
        //.....................................................................................................
        g = new Grammar({
          name: 'g',
          emit_signals: false
        });
        gnd = g.new_level({
          name: 'gnd'
        });
        //.....................................................................................................
        name1 = gnd.new_token({
          name: 'name1',
          fit: 'A',
          data: {
            is_upper: true
          }
        });
        name2 = gnd.new_token({
          name: 'name2',
          fit: 'b',
          data: {
            is_upper: false
          }
        });
        //.....................................................................................................
        source = "AbAb";
        // info 'Ωilxt_559', rpr source; tabulate_lexemes g.scan source
        // info 'Ωilxt_560', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info('Ωilxt_561', rpr(source));
        g.reset_lnr();
        lexemes = g.scan(source);
        this.eq((Ωilxt_562 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name1',
          hit: 'A',
          pos: '1:0:1',
          data: {
            is_upper: true
          }
        });
        this.eq((Ωilxt_562 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 'b',
          pos: '1:1:2',
          data: {
            is_upper: false
          }
        });
        this.eq((Ωilxt_562 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name1',
          hit: 'A',
          pos: '1:2:3',
          data: {
            is_upper: true
          }
        });
        this.eq((Ωilxt_562 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 'b',
          pos: '1:3:4',
          data: {
            is_upper: false
          }
        });
        this.eq((Ωilxt_573 = function() {
          return lexemes.next().done;
        }), true);
        //.....................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    user_errors: {
      //-------------------------------------------------------------------------------------------------------
      user_error_declared_on_token: function() {
        var Grammar, cast, error, g, gnd, internals, lexemes, name1, name2, rx, source, Ωilxt_574, Ωilxt_575, Ωilxt_576, Ωilxt_577, Ωilxt_578, Ωilxt_579, Ωilxt_580, Ωilxt_581, Ωilxt_585, Ωilxt_586, Ωilxt_587, Ωilxt_588, Ωilxt_589, Ωilxt_590, Ωilxt_591, Ωilxt_592, Ωilxt_593, Ωilxt_594, Ωilxt_595, Ωilxt_596, Ωilxt_597, Ωilxt_598;
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
        this.eq((Ωilxt_574 = function() {
          return g.cast;
        }), null);
        this.eq((Ωilxt_575 = function() {
          return g.cast_method;
        }), null);
        this.eq((Ωilxt_576 = function() {
          return gnd.cast;
        }), null);
        this.eq((Ωilxt_577 = function() {
          return gnd.cast_method;
        }), null);
        this.eq((Ωilxt_578 = function() {
          return error.cast;
        }), null);
        this.eq((Ωilxt_579 = function() {
          return error.cast_method;
        }), null);
        this.eq((Ωilxt_580 = function() {
          return name2.cast === cast;
        }), true);
        this.eq((Ωilxt_581 = function() {
          return name2.cast_method;
        }), 'walk');
        //.....................................................................................................
        source = "Acceptreject";
        // info 'Ωilxt_582', rpr source; tabulate_lexemes g.scan source
        // info 'Ωilxt_583', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info('Ωilxt_584', rpr(source));
        g.reset_lnr();
        lexemes = g.scan(source);
        this.eq((Ωilxt_585 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_586 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:0:0',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_587 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name1',
          hit: 'A',
          pos: '1:0:1',
          data: {
            initial: ['A']
          }
        });
        this.eq((Ωilxt_588 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:1:1',
          data: {
            target: 'error'
          }
        });
        this.eq((Ωilxt_589 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'cc',
          pos: '1:1:3',
          data: {
            letter: ['c', 'c']
          }
        });
        this.eq((Ωilxt_590 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:3:3',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_591 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 'eptreje',
          pos: '1:3:10',
          data: {
            lower: ['e', 'p', 't', 'r', 'e', 'j', 'e']
          }
        });
        this.eq((Ωilxt_592 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:10:10',
          data: {
            target: 'error'
          }
        });
        this.eq((Ωilxt_593 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'c',
          pos: '1:10:11',
          data: {
            letter: ['c']
          }
        });
        this.eq((Ωilxt_594 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:11:11',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_595 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 't',
          pos: '1:11:12',
          data: {
            lower: ['t']
          }
        });
        this.eq((Ωilxt_596 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:12:12',
          data: {
            target: null
          }
        });
        this.eq((Ωilxt_597 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.stop',
          hit: '',
          pos: '1:12:12'
        });
        this.eq((Ωilxt_598 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), null);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      user_error_declared_on_level: function() {
        var Grammar, cast, error, g, gnd, internals, lexemes, name1, name2, rx, source, Ωilxt_599, Ωilxt_600, Ωilxt_601, Ωilxt_602, Ωilxt_603, Ωilxt_604, Ωilxt_605, Ωilxt_606, Ωilxt_610, Ωilxt_611, Ωilxt_612, Ωilxt_613, Ωilxt_614, Ωilxt_615, Ωilxt_616, Ωilxt_617, Ωilxt_618, Ωilxt_619, Ωilxt_620, Ωilxt_621, Ωilxt_622, Ωilxt_623;
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
        this.eq((Ωilxt_599 = function() {
          return g.cast;
        }), null);
        this.eq((Ωilxt_600 = function() {
          return g.cast_method;
        }), null);
        this.eq((Ωilxt_601 = function() {
          return gnd.cast === cast;
        }), true);
        this.eq((Ωilxt_602 = function() {
          return gnd.cast_method;
        }), 'walk');
        this.eq((Ωilxt_603 = function() {
          return error.cast;
        }), null);
        this.eq((Ωilxt_604 = function() {
          return error.cast_method;
        }), null);
        this.eq((Ωilxt_605 = function() {
          return name2.cast;
        }), null);
        this.eq((Ωilxt_606 = function() {
          return name2.cast_method;
        }), null);
        //.....................................................................................................
        source = "Acceptreject";
        // info 'Ωilxt_607', rpr source; tabulate_lexemes g.scan source
        // info 'Ωilxt_608', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info('Ωilxt_609', rpr(source));
        g.reset_lnr();
        lexemes = g.scan(source);
        this.eq((Ωilxt_610 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_611 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:0:0',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_612 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name1',
          hit: 'A',
          pos: '1:0:1',
          data: {
            initial: ['A']
          }
        });
        this.eq((Ωilxt_613 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:1:1',
          data: {
            target: 'error'
          }
        });
        this.eq((Ωilxt_614 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'cc',
          pos: '1:1:3',
          data: {
            letter: ['c', 'c']
          }
        });
        this.eq((Ωilxt_615 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:3:3',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_616 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 'eptreje',
          pos: '1:3:10',
          data: {
            lower: ['e', 'p', 't', 'r', 'e', 'j', 'e']
          }
        });
        this.eq((Ωilxt_617 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:10:10',
          data: {
            target: 'error'
          }
        });
        this.eq((Ωilxt_618 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'c',
          pos: '1:10:11',
          data: {
            letter: ['c']
          }
        });
        this.eq((Ωilxt_619 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:11:11',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_620 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 't',
          pos: '1:11:12',
          data: {
            lower: ['t']
          }
        });
        this.eq((Ωilxt_621 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:12:12',
          data: {
            target: null
          }
        });
        this.eq((Ωilxt_622 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.stop',
          hit: '',
          pos: '1:12:12'
        });
        this.eq((Ωilxt_623 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), null);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      user_error_declared_on_grammar: function() {
        var Grammar, cast, error, g, gnd, internals, lexemes, name1, name2, rx, source, Ωilxt_624, Ωilxt_625, Ωilxt_626, Ωilxt_627, Ωilxt_628, Ωilxt_629, Ωilxt_630, Ωilxt_631, Ωilxt_635, Ωilxt_636, Ωilxt_637, Ωilxt_638, Ωilxt_639, Ωilxt_640, Ωilxt_641, Ωilxt_642, Ωilxt_643, Ωilxt_644, Ωilxt_645, Ωilxt_646, Ωilxt_647, Ωilxt_648;
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
        this.eq((Ωilxt_624 = function() {
          return g.cast === cast;
        }), true);
        this.eq((Ωilxt_625 = function() {
          return g.cast_method;
        }), 'walk');
        this.eq((Ωilxt_626 = function() {
          return gnd.cast;
        }), null);
        this.eq((Ωilxt_627 = function() {
          return gnd.cast_method;
        }), null);
        this.eq((Ωilxt_628 = function() {
          return error.cast;
        }), null);
        this.eq((Ωilxt_629 = function() {
          return error.cast_method;
        }), null);
        this.eq((Ωilxt_630 = function() {
          return name2.cast;
        }), null);
        this.eq((Ωilxt_631 = function() {
          return name2.cast_method;
        }), null);
        //.....................................................................................................
        source = "Acceptreject";
        // info 'Ωilxt_632', rpr source; tabulate_lexemes g.scan source
        // info 'Ωilxt_633', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info('Ωilxt_634', rpr(source));
        g.reset_lnr();
        lexemes = g.scan(source);
        this.eq((Ωilxt_635 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_636 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:0:0',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_637 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name1',
          hit: 'A',
          pos: '1:0:1',
          data: {
            initial: ['A']
          }
        });
        this.eq((Ωilxt_638 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:1:1',
          data: {
            target: 'error'
          }
        });
        this.eq((Ωilxt_639 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'cc',
          pos: '1:1:3',
          data: {
            letter: ['c', 'c']
          }
        });
        this.eq((Ωilxt_640 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:3:3',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_641 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 'eptreje',
          pos: '1:3:10',
          data: {
            lower: ['e', 'p', 't', 'r', 'e', 'j', 'e']
          }
        });
        this.eq((Ωilxt_642 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:10:10',
          data: {
            target: 'error'
          }
        });
        this.eq((Ωilxt_643 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'error.nolikedis',
          hit: 'c',
          pos: '1:10:11',
          data: {
            letter: ['c']
          }
        });
        this.eq((Ωilxt_644 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:11:11',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_645 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name2',
          hit: 't',
          pos: '1:11:12',
          data: {
            lower: ['t']
          }
        });
        this.eq((Ωilxt_646 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:12:12',
          data: {
            target: null
          }
        });
        this.eq((Ωilxt_647 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.stop',
          hit: '',
          pos: '1:12:12'
        });
        this.eq((Ωilxt_648 = function() {
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
        var Grammar, g, gnd, lexemes, rx, source, Ωilxt_651, Ωilxt_652, Ωilxt_653, Ωilxt_654, Ωilxt_655, Ωilxt_656, Ωilxt_657, Ωilxt_658, Ωilxt_659, Ωilxt_660, Ωilxt_661, Ωilxt_662, Ωilxt_663, Ωilxt_664, Ωilxt_666, Ωilxt_ACCEPT_665;
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
        // info 'Ωilxt_649', rpr source; tabulate_lexemes g.scan source
        info('Ωilxt_650', rpr(source));
        g.reset_lnr();
        lexemes = g.scan(source);
        this.eq((Ωilxt_651 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_652 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:0:0',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_653 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name',
          hit: 'Alice',
          pos: '1:0:5',
          data: {
            initial: 'A'
          }
        });
        this.eq((Ωilxt_654 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:5:6'
        });
        this.eq((Ωilxt_655 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.other',
          hit: 'in',
          pos: '1:6:8'
        });
        this.eq((Ωilxt_656 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:8:9'
        });
        this.eq((Ωilxt_657 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name',
          hit: 'Cairo',
          pos: '1:9:14',
          data: {
            initial: 'C'
          }
        });
        this.eq((Ωilxt_658 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:14:15'
        });
        this.eq((Ωilxt_659 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.number',
          hit: '1912',
          pos: '1:15:19'
        });
        this.eq((Ωilxt_660 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:19:20'
        });
        this.eq((Ωilxt_661 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.paren_start',
          hit: '(',
          pos: '1:20:21'
        });
        this.eq((Ωilxt_662 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.other',
          hit: 'approximately',
          pos: '1:21:34'
        });
        this.eq((Ωilxt_663 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.paren_stop',
          hit: ')',
          pos: '1:34:35'
        });
        this.eq((Ωilxt_664 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:35:35',
          data: {
            target: null
          }
        });
        this.eq((Ωilxt_ACCEPT_665 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.stop',
          hit: '',
          pos: '1:35:35'
        });
        this.eq((Ωilxt_666 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), null);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      demo_nr_2: function() {
        var Grammar, g, gnd, lexemes, rx, source, string11, Ωilxt_669, Ωilxt_670, Ωilxt_671, Ωilxt_672, Ωilxt_673, Ωilxt_674, Ωilxt_675, Ωilxt_676, Ωilxt_677, Ωilxt_678, Ωilxt_679, Ωilxt_680, Ωilxt_681, Ωilxt_682, Ωilxt_683, Ωilxt_684, Ωilxt_685;
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
        // info 'Ωilxt_667', rpr source; tabulate_lexemes g.scan source
        info('Ωilxt_668', rpr(source));
        g.reset_lnr();
        lexemes = g.scan(source);
        this.eq((Ωilxt_669 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_670 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:0:0',
          data: {
            target: 'gnd'
          }
        });
        this.eq((Ωilxt_671 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name',
          hit: 'Alice',
          pos: '1:0:5',
          data: {
            initial: 'A'
          }
        });
        this.eq((Ωilxt_672 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:5:6'
        });
        this.eq((Ωilxt_673 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.other',
          hit: 'in',
          pos: '1:6:8'
        });
        this.eq((Ωilxt_674 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:8:9'
        });
        this.eq((Ωilxt_675 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name',
          hit: 'Cairo',
          pos: '1:9:14',
          data: {
            initial: 'C'
          }
        });
        this.eq((Ωilxt_676 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:14:15'
        });
        this.eq((Ωilxt_677 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.number',
          hit: '1912',
          pos: '1:15:19'
        });
        this.eq((Ωilxt_678 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:19:20'
        });
        this.eq((Ωilxt_679 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.string11_start',
          hit: "'",
          pos: '1:20:21'
        });
        this.eq((Ωilxt_680 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:21:21',
          data: {
            target: 'string11'
          }
        });
        this.eq((Ωilxt_681 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'string11.text',
          hit: 'approximately',
          pos: '1:21:34'
        });
        this.eq((Ωilxt_682 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:34:34',
          data: {
            target: null
          }
        });
        this.eq((Ωilxt_683 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$error.earlystop',
          hit: "'",
          pos: '1:34:35',
          data: {
            message: 'expected stop at 35, got 34'
          }
        });
        this.eq((Ωilxt_684 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.stop',
          hit: '',
          pos: '1:34:34'
        });
        this.eq((Ωilxt_685 = function() {
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
          var lexemes, source, Ωilxt_688, Ωilxt_689, Ωilxt_690, Ωilxt_691, Ωilxt_692, Ωilxt_693, Ωilxt_694, Ωilxt_695;
          source = "R\\2D\\2 on Charon 3";
          // info 'Ωilxt_686', rpr source; tabulate_lexemes g.scan source
          info('Ωilxt_687', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_688 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'R',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_689 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: '\\2',
            pos: '1:1:3'
          });
          this.eq((Ωilxt_690 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'D',
            pos: '1:3:4'
          });
          this.eq((Ωilxt_691 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: '\\2',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_692 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' on Charon ',
            pos: '1:6:17'
          });
          this.eq((Ωilxt_693 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.number_start',
            hit: '',
            pos: '1:17:17'
          });
          this.eq((Ωilxt_694 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.number',
            hit: '3',
            pos: '1:17:18'
          });
          this.eq((Ωilxt_695 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_698, Ωilxt_699, Ωilxt_700, Ωilxt_701, Ωilxt_702, Ωilxt_703, Ωilxt_704, Ωilxt_705, Ωilxt_706;
          source = "R\\2D\\2 on Charon 3!!";
          // echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_696', rpr source; tabulate_lexemes g.scan source
          info('Ωilxt_697', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_698 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'R',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_699 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: '\\2',
            pos: '1:1:3'
          });
          this.eq((Ωilxt_700 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'D',
            pos: '1:3:4'
          });
          this.eq((Ωilxt_701 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: '\\2',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_702 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' on Charon ',
            pos: '1:6:17'
          });
          this.eq((Ωilxt_703 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.number_start',
            hit: '',
            pos: '1:17:17'
          });
          this.eq((Ωilxt_704 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.number',
            hit: '3',
            pos: '1:17:18'
          });
          this.eq((Ωilxt_705 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$error.earlystop',
            hit: '!!',
            pos: '1:18:20',
            data: {
              message: 'expected stop at 20, got 18'
            }
          });
          this.eq((Ωilxt_706 = function() {
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
          var g, Ωilxt_707, Ωilxt_708, Ωilxt_709;
          g = new Grammar();
          this.eq((Ωilxt_707 = function() {
            return g.cfg.name;
          }), 'g');
          this.eq((Ωilxt_708 = function() {
            return g.cfg.strategy;
          }), 'first');
          this.eq((Ωilxt_709 = function() {
            return g.cfg.emit_signals;
          }), true);
          return null;
        })();
        (() => {          //.........................................................................................................
          var g, Ωilxt_710, Ωilxt_711, Ωilxt_712;
          g = new Grammar({
            emit_signals: false
          });
          this.eq((Ωilxt_710 = function() {
            return g.cfg.name;
          }), 'g');
          this.eq((Ωilxt_711 = function() {
            return g.cfg.strategy;
          }), 'first');
          this.eq((Ωilxt_712 = function() {
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
          var lexemes, source, Ωilxt_716, Ωilxt_717, Ωilxt_718, Ωilxt_719, Ωilxt_720, Ωilxt_721;
          g.reset();
          source = 'the word "black bird" is the word\n';
          // info 'Ωilxt_713', rpr source; tabulate_lexemes g.scan source
          // info 'Ωilxt_714', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_715', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_716 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_717 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_718 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.string',
            hit: 'black bird',
            pos: '1:10:20'
          });
          this.eq((Ωilxt_719 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:20:21'
          });
          this.eq((Ωilxt_720 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' is the word\n',
            pos: '1:21:34'
          });
          this.eq((Ωilxt_721 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_725, Ωilxt_726, Ωilxt_727, Ωilxt_728, Ωilxt_729, Ωilxt_730;
          g.reset();
          source = 'the word "black\nbird" is the word\n';
          // info 'Ωilxt_722', rpr source; tabulate_lexemes g.scan source
          // info 'Ωilxt_723', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_724', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_725 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_726 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_727 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.string',
            hit: 'black\nbird',
            pos: '1:10:20'
          });
          this.eq((Ωilxt_728 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:20:21'
          });
          this.eq((Ωilxt_729 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' is the word\n',
            pos: '1:21:34'
          });
          this.eq((Ωilxt_730 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var lexemes, source1, source2, Ωilxt_734, Ωilxt_735, Ωilxt_736, Ωilxt_737, Ωilxt_741, Ωilxt_742, Ωilxt_743, Ωilxt_744;
          /* NOTE we here accept a 'wrong' solution b/c the grammar declaration did not specify a continuous
                 / legato scan which means that the second line is correctly analyzed as starting on the `text` level
                 and ending with an unfinished string literal; */
          g.reset();
          source1 = 'the word "black\n';
          source2 = 'bird" is the word\n';
          // info 'Ωilxt_731', rpr source1; tabulate_lexemes g.scan source1
          // info 'Ωilxt_732', rpr source1; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source1
          info('Ωilxt_733', rpr(source1));
          g.reset_lnr();
          lexemes = g.scan(source1);
          this.eq((Ωilxt_734 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_735 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_736 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.string',
            hit: 'black\n',
            pos: '1:10:16'
          });
          this.eq((Ωilxt_737 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          // info 'Ωilxt_738', rpr source2; tabulate_lexemes g.scan source2
          // info 'Ωilxt_739', rpr source2; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source2
          info('Ωilxt_740', rpr(source2));
          g.reset_lnr();
          lexemes = g.scan(source2);
          this.eq((Ωilxt_741 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'bird',
            pos: '1:0:4'
          });
          this.eq((Ωilxt_742 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:4:5'
          });
          this.eq((Ωilxt_743 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.string',
            hit: ' is the word\n',
            pos: '1:5:18'
          });
          this.eq((Ωilxt_744 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      string_literal_with_linked_scanning: function() {
        var Grammar, g, gnd, rx, string, Ωilxt_745, Ωilxt_746;
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
        this.eq((Ωilxt_745 = function() {
          return g.cfg.reset_stack;
        }), false);
        this.eq((Ωilxt_746 = function() {
          return g.cfg.linking;
        }), true);
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_750, Ωilxt_751, Ωilxt_752, Ωilxt_753, Ωilxt_754, Ωilxt_755;
          g.reset();
          source = 'the word "black bird" is the word\n';
          // info 'Ωilxt_747', rpr source; tabulate_lexemes g.scan source
          // info 'Ωilxt_748', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_749', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_750 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
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
            hit: 'black bird',
            pos: '1:10:20'
          });
          this.eq((Ωilxt_753 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:20:21'
          });
          this.eq((Ωilxt_754 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' is the word\n',
            pos: '1:21:34'
          });
          this.eq((Ωilxt_755 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_759, Ωilxt_760, Ωilxt_761, Ωilxt_762, Ωilxt_763, Ωilxt_764;
          g.reset();
          source = 'the word "black\nbird" is the word\n';
          // info 'Ωilxt_756', rpr source; tabulate_lexemes g.scan source
          // info 'Ωilxt_757', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_758', rpr(source));
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωilxt_759 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_760 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_761 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.literal',
            hit: 'black\nbird',
            pos: '1:10:20'
          });
          this.eq((Ωilxt_762 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:20:21'
          });
          this.eq((Ωilxt_763 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' is the word\n',
            pos: '1:21:34'
          });
          this.eq((Ωilxt_764 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var lexemes, source1, source2, source3, Ωilxt_772, Ωilxt_773, Ωilxt_774, Ωilxt_775, Ωilxt_777, Ωilxt_778, Ωilxt_779, Ωilxt_780, Ωilxt_782, Ωilxt_783;
          g.reset();
          source1 = 'the word "black\n';
          source2 = 'bird" is the word\n';
          source3 = 'or so I heard\n';
          // info 'Ωilxt_765', rpr source1; tabulate_lexemes g.scan source1
          // info 'Ωilxt_766', rpr source2; tabulate_lexemes g.scan source2
          // info 'Ωilxt_767', rpr source3; tabulate_lexemes g.scan source3
          // info 'Ωilxt_768', rpr source1; echo abbrlxm lexeme for lexeme from g.scan source1
          // info 'Ωilxt_769', rpr source2; echo abbrlxm lexeme for lexeme from g.scan source2
          // info 'Ωilxt_770', rpr source3; echo abbrlxm lexeme for lexeme from g.scan source3
          g.reset();
          info('Ωilxt_771', rpr(source1));
          lexemes = g.scan(source1);
          this.eq((Ωilxt_772 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_773 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_774 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.literal',
            hit: 'black\n',
            pos: '1:10:16'
          });
          this.eq((Ωilxt_775 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_776', rpr(source2));
          lexemes = g.scan(source2);
          this.eq((Ωilxt_777 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.literal',
            hit: 'bird',
            pos: '2:0:4'
          });
          this.eq((Ωilxt_778 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '2:4:5'
          });
          this.eq((Ωilxt_779 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' is the word\n',
            pos: '2:5:18'
          });
          this.eq((Ωilxt_780 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_781', rpr(source3));
          lexemes = g.scan(source3);
          this.eq((Ωilxt_782 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'or so I heard\n',
            pos: '3:0:14'
          });
          this.eq((Ωilxt_783 = function() {
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
          //   info 'Ωilxt_784', rpr source1; tabulate_lexemes g.scan source1
          //   info 'Ωilxt_785', rpr source2; tabulate_lexemes g.scan source2
          //   info 'Ωilxt_786', rpr source3; tabulate_lexemes g.scan source3
          //   info 'Ωilxt_787', rpr null; tabulate_lexemes g.scan null
          //   return null
          // do =>
          //   g.reset()
          //   info 'Ωilxt_788', rpr source1; echo abbrlxm lexeme for lexeme from g.scan source1
          //   info 'Ωilxt_789', rpr source2; echo abbrlxm lexeme for lexeme from g.scan source2
          //   info 'Ωilxt_790', rpr source3; echo abbrlxm lexeme for lexeme from g.scan source3
          //   info 'Ωilxt_791', rpr null; echo abbrlxm lexeme for lexeme from g.scan null
          //   return null
          var lexemes, Ωilxt_793, Ωilxt_794, Ωilxt_795, Ωilxt_796, Ωilxt_797, Ωilxt_798, Ωilxt_799, Ωilxt_800, Ωilxt_802, Ωilxt_803, Ωilxt_804, Ωilxt_805, Ωilxt_806, Ωilxt_807, Ωilxt_808, Ωilxt_810, Ωilxt_811, Ωilxt_812, Ωilxt_813, Ωilxt_815, Ωilxt_816, Ωilxt_817;
          g.reset();
          info('Ωilxt_792', rpr(source1));
          lexemes = g.scan(source1);
          this.eq((Ωilxt_793 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_794 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'gnd'
            }
          });
          this.eq((Ωilxt_795 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_796 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:9:9',
            data: {
              target: 'string'
            }
          });
          this.eq((Ωilxt_797 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_798 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.literal',
            hit: 'black\n',
            pos: '1:10:16'
          });
          this.eq((Ωilxt_799 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.pause',
            hit: '',
            pos: '1:16:16'
          });
          this.eq((Ωilxt_800 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_801', rpr(source2));
          lexemes = g.scan(source2);
          this.eq((Ωilxt_802 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.resume',
            hit: '',
            pos: '2:0:0'
          });
          this.eq((Ωilxt_803 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.literal',
            hit: 'bird',
            pos: '2:0:4'
          });
          this.eq((Ωilxt_804 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '2:4:5'
          });
          this.eq((Ωilxt_805 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '2:5:5',
            data: {
              target: 'gnd'
            }
          });
          this.eq((Ωilxt_806 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' is the word\n',
            pos: '2:5:18'
          });
          this.eq((Ωilxt_807 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.pause',
            hit: '',
            pos: '2:18:18'
          });
          this.eq((Ωilxt_808 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_809', rpr(source3));
          lexemes = g.scan(source3);
          this.eq((Ωilxt_810 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.resume',
            hit: '',
            pos: '3:0:0'
          });
          this.eq((Ωilxt_811 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'or so I heard\n',
            pos: '3:0:14'
          });
          this.eq((Ωilxt_812 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.pause',
            hit: '',
            pos: '3:14:14'
          });
          this.eq((Ωilxt_813 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_814', rpr(null));
          lexemes = g.scan(null);
          this.eq((Ωilxt_815 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '4:0:0',
            data: {
              target: null
            }
          });
          this.eq((Ωilxt_816 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '4:0:0'
          });
          return this.eq((Ωilxt_817 = function() {
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
          var g, Ωilxt_818;
          g = new Grammar();
          return this.eq((Ωilxt_818 = function() {
            return g.cfg.supply_eol;
          }), false);
        })();
        (() => {          //.....................................................................................................
          var g, Ωilxt_819;
          g = new Grammar({
            supply_eol: false
          });
          return this.eq((Ωilxt_819 = function() {
            return g.cfg.supply_eol;
          }), false);
        })();
        (() => {          //.....................................................................................................
          var g, Ωilxt_820;
          g = new Grammar({
            supply_eol: true
          });
          return this.eq((Ωilxt_820 = function() {
            return g.cfg.supply_eol;
          }), '\n');
        })();
        (() => {          //.....................................................................................................
          var g, Ωilxt_821;
          g = new Grammar({
            supply_eol: '\n'
          });
          return this.eq((Ωilxt_821 = function() {
            return g.cfg.supply_eol;
          }), '\n');
        })();
        (() => {          //.....................................................................................................
          var g, Ωilxt_822;
          g = new Grammar({
            supply_eol: '(EOL)'
          });
          return this.eq((Ωilxt_822 = function() {
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
          //   info 'Ωilxt_823', rpr source1; tabulate_lexemes g.scan source1
          //   info 'Ωilxt_824', rpr source2; tabulate_lexemes g.scan source2
          //   info 'Ωilxt_825', rpr source3; tabulate_lexemes g.scan source3
          //   info 'Ωilxt_826', rpr null; tabulate_lexemes g.scan null
          //   return null
          // do =>
          //   g.reset()
          //   info 'Ωilxt_827', rpr source1; echo abbrlxm lexeme for lexeme from g.scan source1
          //   info 'Ωilxt_828', rpr source2; echo abbrlxm lexeme for lexeme from g.scan source2
          //   info 'Ωilxt_829', rpr source3; echo abbrlxm lexeme for lexeme from g.scan source3
          //   info 'Ωilxt_830', rpr null; echo abbrlxm lexeme for lexeme from g.scan null
          //   return null
          var lexemes, Ωilxt_832, Ωilxt_833, Ωilxt_834, Ωilxt_835, Ωilxt_836, Ωilxt_837, Ωilxt_838, Ωilxt_839, Ωilxt_841, Ωilxt_842, Ωilxt_843, Ωilxt_844, Ωilxt_845, Ωilxt_846, Ωilxt_847, Ωilxt_849, Ωilxt_850, Ωilxt_851, Ωilxt_852, Ωilxt_854, Ωilxt_855, Ωilxt_856;
          g.reset();
          info('Ωilxt_831', rpr(source1));
          lexemes = g.scan(source1);
          this.eq((Ωilxt_832 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_833 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'gnd'
            }
          });
          this.eq((Ωilxt_834 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'the word ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_835 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:9:9',
            data: {
              target: 'string'
            }
          });
          this.eq((Ωilxt_836 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_837 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.literal',
            hit: 'black\n',
            pos: '1:10:16'
          });
          this.eq((Ωilxt_838 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.pause',
            hit: '',
            pos: '1:16:16'
          });
          this.eq((Ωilxt_839 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_840', rpr(source2));
          lexemes = g.scan(source2);
          this.eq((Ωilxt_841 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.resume',
            hit: '',
            pos: '2:0:0'
          });
          this.eq((Ωilxt_842 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.literal',
            hit: 'bird',
            pos: '2:0:4'
          });
          this.eq((Ωilxt_843 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'string.dq1',
            hit: '"',
            pos: '2:4:5'
          });
          this.eq((Ωilxt_844 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '2:5:5',
            data: {
              target: 'gnd'
            }
          });
          this.eq((Ωilxt_845 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' is the word\n',
            pos: '2:5:18'
          });
          this.eq((Ωilxt_846 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.pause',
            hit: '',
            pos: '2:18:18'
          });
          this.eq((Ωilxt_847 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_848', rpr(source3));
          lexemes = g.scan(source3);
          this.eq((Ωilxt_849 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.resume',
            hit: '',
            pos: '3:0:0'
          });
          this.eq((Ωilxt_850 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'or so I heard\n',
            pos: '3:0:14'
          });
          this.eq((Ωilxt_851 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.pause',
            hit: '',
            pos: '3:14:14'
          });
          this.eq((Ωilxt_852 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          info('Ωilxt_853', rpr(null));
          lexemes = g.scan(null);
          this.eq((Ωilxt_854 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '4:0:0',
            data: {
              target: null
            }
          });
          this.eq((Ωilxt_855 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '4:0:0'
          });
          return this.eq((Ωilxt_856 = function() {
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
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      // guytest_cfg = { throw_on_error: false, show_passes: true, report_checks: true, }
      (new Test(guytest_cfg)).test(this.interlex_tasks);
      // # ( new Test guytest_cfg ).test { linking: @interlex_tasks.linking, }
      // ( new Test guytest_cfg ).test { flexible_new_token_syntax: @interlex_tasks.basics.flexible_new_token_syntax, }
      return (new Test(guytest_cfg)).test({
        token_data: this.interlex_tasks.token_data
      });
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBLGdCQUFBLEVBQUEsWUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxlQUFBLEVBQUEsZ0JBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTs7RUFJQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHNCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFkQTs7O0VBb0JBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLENBQUEsQ0FBRSxnQkFBRixFQUNFLE9BREYsRUFFRSxnQkFGRixFQUdFLGVBSEYsQ0FBQSxHQUc0QixPQUFBLENBQVEsV0FBUixDQUg1Qjs7RUFJQSxDQUFBO0lBQUUsU0FBQSxFQUFXLFlBQWI7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Q0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsS0FBSyxDQUFDO1FBQVQsQ0FBZCxDQUFSLEVBQTZELENBQTdEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUMsSUFBTixDQUFBO1FBQUgsQ0FBZCxDQUFSLEVBQTZEO1VBQUUsSUFBQSxFQUFNO1FBQVIsQ0FBN0Q7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQyxRQUFOLENBQUE7UUFBSCxDQUFkLENBQVIsRUFBNkQ7VUFBRSxJQUFBLEVBQU07UUFBUixDQUE3RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsS0FBSyxDQUFDO1FBQVQsQ0FBZCxDQUFSLEVBQTZELENBQTdEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUMsSUFBTixDQUFBO1FBQUgsQ0FBZCxDQUFSLEVBQTZEO1VBQUUsSUFBQSxFQUFNO1FBQVIsQ0FBN0Q7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQyxHQUFOLENBQUE7UUFBSCxDQUFkLENBQVIsRUFBNkQ7VUFBRSxJQUFBLEVBQU07UUFBUixDQUE3RDtlQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsS0FBSyxDQUFDO1FBQVQsQ0FBZCxDQUFSLEVBQTZELENBQTdEO01BUkMsQ0FBQTtNQVNBLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDUCxZQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFB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LENBQUEsY0FBL0IsRUFIRjs7O2FBTUUsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLFVBQUEsRUFBWSxJQUFDLENBQUEsY0FBYyxDQUFDO01BQTlCLENBQTlCO0lBUHNDLENBQUEsSUFBeEM7O0FBdDdFQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cblxuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2ludGVybGV4L3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbnsgY29uZGVuc2VfbGV4ZW1lc1xuICBhYmJybHhtXG4gIHRhYnVsYXRlX2xleGVtZXNcbiAgdGFidWxhdGVfbGV4ZW1lICAgICAgIH0gPSByZXF1aXJlICcuL2hlbHBlcnMnXG57IGludGVybmFsczogY3RfaW50ZXJuYWxzXG4gIGlzYVxuICBzdGRcbiAgdHlwZV9vZiAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2NsZWFydHlwZSdcblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGludGVybGV4X3Rhc2tzID1cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGludGVybmFsczpcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAganNpZF9yZTogLT5cbiAgICAgICMgeyBwYXJ0aWFsLCByZWdleCwgfSAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgvbm9kZV9tb2R1bGVzL3JlZ2V4J1xuICAgICAgIyBfanNpZF9yZSA9IHJlZ2V4XCJcIlwiIF4gWyAkIF8gXFxwe0lEX1N0YXJ0fSBdIFsgJCBfIFxcdTIwMEMgXFx1MjAwRCBcXHB7SURfQ29udGludWV9IF0qICQgXCJcIlwiXG4gICAgICB7IGludGVybmFscyAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICB7IHNsZXZpdGhhbl9yZWdleFxuICAgICAgICBqc2lkX3JlICAgICAgIH0gPSBpbnRlcm5hbHNcbiAgICAgIGpzaWRfYW5jaG9yZWRfcmUgID0gc2xldml0aGFuX3JlZ2V4LnJlZ2V4XCJeI3tqc2lkX3JlfSRcIlxuICAgICAgQGVxICggzqlpbHh0X19fMSA9IC0+IGpzaWRfYW5jaG9yZWRfcmUuZmxhZ3MgKSwgJ3YnXG4gICAgICBAZXEgKCDOqWlseHRfX18yID0gLT4gKCAoICdfYWJjMycgICkubWF0Y2gganNpZF9hbmNob3JlZF9yZSAgKT8gKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbHh0X19fMyA9IC0+ICggKCAnX2FiYyQnICApLm1hdGNoIGpzaWRfYW5jaG9yZWRfcmUgICk/ICksIHRydWVcbiAgICAgIEBlcSAoIM6paWx4dF9fXzQgPSAtPiAoICggJyRhYmMnICAgKS5tYXRjaCBqc2lkX2FuY2hvcmVkX3JlICApPyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWlseHRfX181ID0gLT4gKCAoICdhYmMnICAgICkubWF0Y2gganNpZF9hbmNob3JlZF9yZSAgKT8gKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbHh0X19fNiA9IC0+ICggKCAnM19hYmMnICApLm1hdGNoIGpzaWRfYW5jaG9yZWRfcmUgICk/ICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWlseHRfX183ID0gLT4gKCAoICcmJScgICAgICkubWF0Y2gganNpZF9hbmNob3JlZF9yZSAgKT8gKSwgZmFsc2VcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHNvcnRfbGV4ZW1lc19ieV9sZW5ndGhfZGVjOiAtPlxuICAgICAgeyBpbnRlcm5hbHMgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paWx4dF9fXzggPSAtPiBpbnRlcm5hbHMuc29ydF9sZXhlbWVzX2J5X2xlbmd0aF9kZWMgW10gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbXVxuICAgICAgQGVxICggzqlpbHh0X19fOSA9IC0+IGludGVybmFscy5zb3J0X2xleGVtZXNfYnlfbGVuZ3RoX2RlYyBbICcxJywgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgJzEnIF1cbiAgICAgIEBlcSAoIM6paWx4dF9fMTAgPSAtPiBpbnRlcm5hbHMuc29ydF9sZXhlbWVzX2J5X2xlbmd0aF9kZWMgWyAnMScsICdpJywgXSAgICAgICAgICAgICAgICAgICAgICAgICApLCBbICcxJywgJ2knIF1cbiAgICAgIEBlcSAoIM6paWx4dF9fMTEgPSAtPiBpbnRlcm5hbHMuc29ydF9sZXhlbWVzX2J5X2xlbmd0aF9kZWMgWyAnMScsICcxMjMnLCAnMScsICcxMjM0JywgXSAgICAgICAgICApLCBbICcxMjM0JywgJzEyMycsICcxJywgJzEnIF1cbiAgICAgIEBlcSAoIM6paWx4dF9fMTIgPSAtPiBpbnRlcm5hbHMuc29ydF9sZXhlbWVzX2J5X2xlbmd0aF9kZWMgWyAnYWJjZCcsICcxMjM0JywgJzEnLCAnMTIzJywgJ2knLCBdICApLCBbICdhYmNkJywgJzEyMzQnLCAnMTIzJywgJzEnLCAnaScgXVxuICAgICAgQGVxICggzqlpbHh0X18xMyA9IC0+IGludGVybmFscy5zb3J0X2xleGVtZXNfYnlfbGVuZ3RoX2RlYyBbICcxMjM0JywgJ2FiY2QnLCAnMScsICcxMjMnLCAnaScsIF0gICksIFsgJzEyMzQnLCAnYWJjZCcsICcxMjMnLCAnMScsICdpJyBdXG4gICAgICBAZXEgKCDOqWlseHRfXzE0ID0gLT4gaW50ZXJuYWxzLnNvcnRfbGV4ZW1lc19ieV9sZW5ndGhfZGVjIFsgJzEyMzQnLCAnMScsICdhYmNkJywgJzEyMycsICdpJywgXSAgKSwgWyAnMTIzNCcsICdhYmNkJywgJzEyMycsICcxJywgJ2knIF1cbiAgICAgIEBlcSAoIM6paWx4dF9fMTUgPSAtPiBpbnRlcm5hbHMuc29ydF9sZXhlbWVzX2J5X2xlbmd0aF9kZWMgWyAnMTIzNCcsICcxJywgJzEyMycsICdhYmNkJywgJ2knLCBdICApLCBbICcxMjM0JywgJ2FiY2QnLCAnMTIzJywgJzEnLCAnaScgXVxuICAgICAgQGVxICggzqlpbHh0X18xNiA9IC0+IGludGVybmFscy5zb3J0X2xleGVtZXNfYnlfbGVuZ3RoX2RlYyBbICcxMjM0JywgJzEnLCAnMTIzJywgJ2knLCAnYWJjZCcsIF0gICksIFsgJzEyMzQnLCAnYWJjZCcsICcxMjMnLCAnMScsICdpJyBdXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICByZWdleGVzOlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBuZXdfaW1wbGVtZW50YXRpb246IC0+XG4gICAgICB7IHJ4XG4gICAgICAgIG5ld19yZWdleF90YWdcbiAgICAgICAgaW50ZXJuYWxzICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBAdGhyb3dzICggzqlpbHh0X18xNyA9IC0+IGludGVybmFscy5ub3JtYWxpemVfcmVnZXhfZmxhZ3MoKSAgICAgICAgICAgICAgICApLCAvQ2Fubm90IGRlc3RydWN0dXJlIHByb3BlcnR5ICdmbGFncycvXG4gICAgICBAdGhyb3dzICggzqlpbHh0X18xOCA9IC0+IGludGVybmFscy5ub3JtYWxpemVfcmVnZXhfZmxhZ3MgdW5kZWZpbmVkICAgICAgICApLCAvQ2Fubm90IGRlc3RydWN0dXJlIHByb3BlcnR5ICdmbGFncycvXG4gICAgICBAdGhyb3dzICggzqlpbHh0X18xOSA9IC0+IGludGVybmFscy5ub3JtYWxpemVfcmVnZXhfZmxhZ3MgbnVsbCAgICAgICAgICAgICApLCAvQ2Fubm90IGRlc3RydWN0dXJlIHByb3BlcnR5ICdmbGFncycvXG4gICAgICBAZXEgKCDOqWlseHRfXzIwID0gLT4gaW50ZXJuYWxzLm5vcm1hbGl6ZV9yZWdleF9mbGFncyB7IGZsYWdzOiAnJywgICAgICAgICBtb2RlOiAnc2xyJywgfSApLCAnZHknXG4gICAgICBAZXEgKCDOqWlseHRfXzIxID0gLT4gaW50ZXJuYWxzLm5vcm1hbGl6ZV9yZWdleF9mbGFncyB7IGZsYWdzOiAnZCcsICAgICAgICBtb2RlOiAnc2xyJywgfSApLCAnZHknXG4gICAgICBAZXEgKCDOqWlseHRfXzIyID0gLT4gaW50ZXJuYWxzLm5vcm1hbGl6ZV9yZWdleF9mbGFncyB7IGZsYWdzOiAneScsICAgICAgICBtb2RlOiAnc2xyJywgfSApLCAnZHknXG4gICAgICBAZXEgKCDOqWlseHRfXzIzID0gLT4gaW50ZXJuYWxzLm5vcm1hbGl6ZV9yZWdleF9mbGFncyB7IGZsYWdzOiAnZHknLCAgICAgICBtb2RlOiAnc2xyJywgfSApLCAnZHknXG4gICAgICBAZXEgKCDOqWlseHRfXzI0ID0gLT4gaW50ZXJuYWxzLm5vcm1hbGl6ZV9yZWdleF9mbGFncyB7IGZsYWdzOiAneWQnLCAgICAgICBtb2RlOiAnc2xyJywgfSApLCAnZHknXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paWx4dF9fMjUgPSAtPiBpbnRlcm5hbHMubm9ybWFsaXplX3JlZ2V4X2ZsYWdzIHsgZmxhZ3M6ICdpJywgICAgICAgIG1vZGU6ICdzbHInLCB9ICksICdkaXknXG4gICAgICBAZXEgKCDOqWlseHRfXzI2ID0gLT4gaW50ZXJuYWxzLm5vcm1hbGl6ZV9yZWdleF9mbGFncyB7IGZsYWdzOiAnZycsICAgICAgICBtb2RlOiAnc2xyJywgfSApLCAnZGd5J1xuICAgICAgQGVxICggzqlpbHh0X18yNyA9IC0+IGludGVybmFscy5ub3JtYWxpemVfcmVnZXhfZmxhZ3MgeyBmbGFnczogJ20nLCAgICAgICAgbW9kZTogJ3NscicsIH0gKSwgJ2RteSdcbiAgICAgIEBlcSAoIM6paWx4dF9fMjggPSAtPiBpbnRlcm5hbHMubm9ybWFsaXplX3JlZ2V4X2ZsYWdzIHsgZmxhZ3M6ICdzJywgICAgICAgIG1vZGU6ICdzbHInLCB9ICksICdkc3knXG4gICAgICBAZXEgKCDOqWlseHRfXzI5ID0gLT4gaW50ZXJuYWxzLm5vcm1hbGl6ZV9yZWdleF9mbGFncyB7IGZsYWdzOiAnZGdpbXN1dnknLCBtb2RlOiAnc2xyJywgfSApLCAnZGdpbXN5J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAdGhyb3dzICggzqlpbHh0X18zMCA9IC0+IGludGVybmFscy5ub3JtYWxpemVfcmVnZXhfZmxhZ3MgeyBmbGFnczogJ2EnLCAgICBtb2RlOiAnc2xyJywgfSApLCAvaWxsZWdhbCBvciBkdXBsaWNhdGUgZmxhZ3MvXG4gICAgICBAdGhyb3dzICggzqlpbHh0X18zMSA9IC0+IGludGVybmFscy5ub3JtYWxpemVfcmVnZXhfZmxhZ3MgeyBmbGFnczogJ3l5JywgICBtb2RlOiAnc2xyJywgfSApLCAvaWxsZWdhbCBvciBkdXBsaWNhdGUgZmxhZ3MvXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBlcSAoIM6paWx4dF9fMzIgPSAtPiBpbnRlcm5hbHMubm9ybWFsaXplX3JlZ2V4IC8uLyAgICAgICAgICAgICAgKSwgLy4vZHZ5XG4gICAgICBAZXEgKCDOqWlseHRfXzMzID0gLT4gaW50ZXJuYWxzLm5vcm1hbGl6ZV9yZWdleCAvLi9kICAgICAgICAgICAgICksIC8uL2R2eVxuICAgICAgQGVxICggzqlpbHh0X18zNCA9IC0+IGludGVybmFscy5ub3JtYWxpemVfcmVnZXggLy4veSAgICAgICAgICAgICApLCAvLi9kdnlcbiAgICAgIEBlcSAoIM6paWx4dF9fMzUgPSAtPiBpbnRlcm5hbHMubm9ybWFsaXplX3JlZ2V4IC8uL2R5ICAgICAgICAgICAgKSwgLy4vZHZ5XG4gICAgICBAZXEgKCDOqWlseHRfXzM2ID0gLT4gaW50ZXJuYWxzLm5vcm1hbGl6ZV9yZWdleCAvLi95ZCAgICAgICAgICAgICksIC8uL2R2eVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWlseHRfXzM3ID0gLT4gaW50ZXJuYWxzLm5vcm1hbGl6ZV9yZWdleCAvLi9pICAgICAgICAgICAgICksIC8uL2RpdnlcbiAgICAgIEBlcSAoIM6paWx4dF9fMzggPSAtPiBpbnRlcm5hbHMubm9ybWFsaXplX3JlZ2V4IC8uL2cgICAgICAgICAgICAgKSwgLy4vZGd2eVxuICAgICAgQGVxICggzqlpbHh0X18zOSA9IC0+IGludGVybmFscy5ub3JtYWxpemVfcmVnZXggLy4vbSAgICAgICAgICAgICApLCAvLi9kbXZ5XG4gICAgICBAZXEgKCDOqWlseHRfXzQwID0gLT4gaW50ZXJuYWxzLm5vcm1hbGl6ZV9yZWdleCAvLi9zICAgICAgICAgICAgICksIC8uL2RzdnlcbiAgICAgIEBlcSAoIM6paWx4dF9fNDEgPSAtPiBpbnRlcm5hbHMubm9ybWFsaXplX3JlZ2V4IC8uL2RnaW1zdnkgICAgICAgKSwgLy4vZGdpbXN2eVxuICAgICAgQGVxICggzqlpbHh0X180MiA9IC0+IGludGVybmFscy5ub3JtYWxpemVfcmVnZXggLy4vZGdpbXN1eSAgICAgICApLCAvLi9kZ2ltc3Z5XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEB0aHJvd3MgKCDOqWlseHRfXzQzID0gLT4gaW50ZXJuYWxzLm5vcm1hbGl6ZV9yZWdleCgpICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgcmVnZXgsIGdvdC9cbiAgICAgIEB0aHJvd3MgKCDOqWlseHRfXzQ0ID0gLT4gaW50ZXJuYWxzLm5vcm1hbGl6ZV9yZWdleCAnaGVsbycgICAgICAgKSwgL2V4cGVjdGVkIGEgcmVnZXgsIGdvdC9cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGVxICggzqlpbHh0X180NSA9IC0+ICggbmV3X3JlZ2V4X3RhZyAnJyAgICAgICApJy4nICAgICAgICAgICAgICApLCAvLi9kdnlcbiAgICAgIEBlcSAoIM6paWx4dF9fNDYgPSAtPiAoIG5ld19yZWdleF90YWcgJ2QnICAgICAgKScuJyAgICAgICAgICAgICAgKSwgLy4vZHZ5XG4gICAgICBAZXEgKCDOqWlseHRfXzQ3ID0gLT4gKCBuZXdfcmVnZXhfdGFnICd5JyAgICAgICknLicgICAgICAgICAgICAgICksIC8uL2R2eVxuICAgICAgQGVxICggzqlpbHh0X180OCA9IC0+ICggbmV3X3JlZ2V4X3RhZyAnZHknICAgICApJy4nICAgICAgICAgICAgICApLCAvLi9kdnlcbiAgICAgIEBlcSAoIM6paWx4dF9fNDkgPSAtPiAoIG5ld19yZWdleF90YWcgJ3lkJyAgICAgKScuJyAgICAgICAgICAgICAgKSwgLy4vZHZ5XG4gICAgICBAZXEgKCDOqWlseHRfXzUwID0gLT4gKCBuZXdfcmVnZXhfdGFnICdkJyAgICAgICkuZCcuJyAgICAgICAgICAgICksIC8uL2R2eVxuICAgICAgQGVxICggzqlpbHh0X181MSA9IC0+ICggbmV3X3JlZ2V4X3RhZyAneScgICAgICApLnknLicgICAgICAgICAgICApLCAvLi9kdnlcbiAgICAgIEBlcSAoIM6paWx4dF9fNTIgPSAtPiAoIG5ld19yZWdleF90YWcgJ2R5JyAgICAgKS5keScuJyAgICAgICAgICAgKSwgLy4vZHZ5XG4gICAgICBAZXEgKCDOqWlseHRfXzUzID0gLT4gKCBuZXdfcmVnZXhfdGFnICd5ZCcgICAgICkueWQnLicgICAgICAgICAgICksIC8uL2R2eVxuICAgICAgQGVxICggzqlpbHh0X181NCA9IC0+ICggbmV3X3JlZ2V4X3RhZyAnJyAgICAgICApLmQnLicgICAgICAgICAgICApLCAvLi9kdnlcbiAgICAgIEBlcSAoIM6paWx4dF9fNTUgPSAtPiAoIG5ld19yZWdleF90YWcgJycgICAgICAgKS55Jy4nICAgICAgICAgICAgKSwgLy4vZHZ5XG4gICAgICBAZXEgKCDOqWlseHRfXzU2ID0gLT4gKCBuZXdfcmVnZXhfdGFnICcnICAgICAgICkuZHknLicgICAgICAgICAgICksIC8uL2R2eVxuICAgICAgQGVxICggzqlpbHh0X181NyA9IC0+ICggbmV3X3JlZ2V4X3RhZyAnJyAgICAgICApLnlkJy4nICAgICAgICAgICApLCAvLi9kdnlcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbHh0X181OCA9IC0+ICggbmV3X3JlZ2V4X3RhZyAnJyAgICAgICApLmknLicgICAgICAgICAgICApLCAvLi9kaXZ5XG4gICAgICBAZXEgKCDOqWlseHRfXzU5ID0gLT4gKCBuZXdfcmVnZXhfdGFnICcnICAgICAgICkuZycuJyAgICAgICAgICAgICksIC8uL2RndnlcbiAgICAgIEBlcSAoIM6paWx4dF9fNjAgPSAtPiAoIG5ld19yZWdleF90YWcgJycgICAgICAgKS5tJy4nICAgICAgICAgICAgKSwgLy4vZG12eVxuICAgICAgQGVxICggzqlpbHh0X182MSA9IC0+ICggbmV3X3JlZ2V4X3RhZyAnJyAgICAgICApLnMnLicgICAgICAgICAgICApLCAvLi9kc3Z5XG4gICAgICBAZXEgKCDOqWlseHRfXzYyID0gLT4gKCBuZXdfcmVnZXhfdGFnICcnICAgICAgICkuZGdpbXN2eScuJyAgICAgICksIC8uL2RnaW1zdnlcbiAgICAgIEBlcSAoIM6paWx4dF9fNjMgPSAtPiAoIG5ld19yZWdleF90YWcgJycgICAgICAgKS5kZ2ltc3V5Jy4nICAgICAgKSwgLy4vZGdpbXN2eVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgYmFzaWNzOlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBzaW1wbGVfMTogLT5cbiAgICAgIElMWCAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgeyBHcmFtbWFyXG4gICAgICAgIExldmVsXG4gICAgICAgIFRva2VuXG4gICAgICAgIExleGVtZVxuICAgICAgICByeFxuICAgICAgICBpbnRlcm5hbHMgICAgICAgfSA9IElMWFxuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBnICAgICAgICAgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgbmFtZTogJ2cnLCB9XG4gICAgICBnbmQgICAgICAgICAgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2duZCcsIH1cbiAgICAgIG51bWJlcl90a19tYXRjaGVyID0gcnhcIlswLTldK1wiXG4gICAgICBudW1iZXJfdGsgICAgICAgICA9IGduZC5uZXdfdG9rZW4geyBuYW1lOiAnbnVtYmVyJywgZml0OiBudW1iZXJfdGtfbWF0Y2hlciwgfVxuICAgICAgbnVtYmVyX2x4ICAgICAgICAgPSBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paWx4dF9fNjQgPSAtPiBnLnN0YXJ0X2xldmVsIGluc3RhbmNlb2YgTGV2ZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWlseHRfXzY1ID0gLT4gZy5zdGFydF9sZXZlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZ25kXG4gICAgICBAZXEgKCDOqWlseHRfXzY2ID0gLT4gZy5zdGFydF9sZXZlbF9uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2duZCdcbiAgICAgIEBlcSAoIM6paWx4dF9fNjcgPSAtPiBnLm5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnZydcbiAgICAgIEBlcSAoIM6paWx4dF9fNjggPSAtPiBnLmxldmVscy5jb25zdHJ1Y3RvciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB1bmRlZmluZWRcbiAgICAgIEBlcSAoIM6paWx4dF9fNjkgPSAtPiBnLmxldmVscy5nbmQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBnbmRcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbHh0X183MCA9IC0+IGduZCBpbnN0YW5jZW9mIExldmVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paWx4dF9fNzEgPSAtPiBnbmQubmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnZ25kJ1xuICAgICAgQGVxICggzqlpbHh0X183MiA9IC0+IGduZC5ncmFtbWFyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGdcbiAgICAgIEBlcSAoIM6paWx4dF9fNzMgPSAtPiBnbmQudG9rZW5zLmNvbnN0cnVjdG9yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB1bmRlZmluZWRcbiAgICAgIEBlcSAoIM6paWx4dF9fNzQgPSAtPiBnbmQudG9rZW5zLmxlbmd0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB1bmRlZmluZWRcbiAgICAgIEBlcSAoIM6paWx4dF9fNzUgPSAtPiBnbmQudG9rZW5zLm51bWJlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBudW1iZXJfdGtcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbHh0X183NiA9IC0+IG51bWJlcl90ayBpbnN0YW5jZW9mIFRva2VuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paWx4dF9fNzcgPSAtPiBudW1iZXJfdGsubmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnbnVtYmVyJ1xuICAgICAgQGVxICggzqlpbHh0X183OCA9IC0+IG51bWJlcl90ay5sZXZlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGduZFxuICAgICAgQGVxICggzqlpbHh0X183OSA9IC0+IG51bWJlcl90ay5ncmFtbWFyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGdcbiAgICAgIEBlcSAoIM6paWx4dF9fODAgPSAtPiBudW1iZXJfdGsuZml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvWzAtOV0rL2R2eVxuICAgICAgQGVxICggzqlpbHh0X184MSA9IC0+IG51bWJlcl90ay5maXQuaGFzSW5kaWNlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paWx4dF9fODIgPSAtPiBudW1iZXJfdGsuZml0LnN0aWNreSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWlseHRfXzgzID0gLT4gbnVtYmVyX3RrLmZpdC51bmljb2RlU2V0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbHh0X184NCA9IC0+IG51bWJlcl90ay5qdW1wICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbHh0X184NSA9IC0+ICggbnVtYmVyX2x4ID0gbnVtYmVyX3RrLm1hdGNoX2F0IDAsICczOTjDpCcgKT8gICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWlseHRfXzg2ID0gLT4gbnVtYmVyX2x4IGluc3RhbmNlb2YgTGV4ZW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbHh0X184NyA9IC0+IG51bWJlcl9seC5uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdudW1iZXInXG4gICAgICBAZXEgKCDOqWlseHRfXzg4ID0gLT4gbnVtYmVyX2x4LmZxbmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2duZC5udW1iZXInXG4gICAgICBAZXEgKCDOqWlseHRfXzg5ID0gLT4gbnVtYmVyX2x4LmxldmVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZ25kXG4gICAgICBAZXEgKCDOqWlseHRfXzkwID0gLT4gbnVtYmVyX2x4LmhpdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzM5OCdcbiAgICAgIEBlcSAoIM6paWx4dF9fOTEgPSAtPiBudW1iZXJfbHguc3RhcnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAwXG4gICAgICBAZXEgKCDOqWlseHRfXzkyID0gLT4gbnVtYmVyX2x4LnN0b3AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgM1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWlseHRfXzkzID0gLT4gKCBudW1iZXJfbHggPSBudW1iZXJfdGsubWF0Y2hfYXQgNywgJ2FiY2RlZmdoMDAxMDJ4eXonICk/ICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paWx4dF9fOTQgPSAtPiAoIG51bWJlcl9seCA9IG51bWJlcl90ay5tYXRjaF9hdCA4LCAnYWJjZGVmZ2gwMDEwMnh5eicgKT8gICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWlseHRfXzk1ID0gLT4gbnVtYmVyX2x4IGluc3RhbmNlb2YgTGV4ZW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbHh0X185NiA9IC0+IG51bWJlcl9seC5uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdudW1iZXInXG4gICAgICBAZXEgKCDOqWlseHRfXzk3ID0gLT4gbnVtYmVyX2x4LmZxbmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2duZC5udW1iZXInXG4gICAgICBAZXEgKCDOqWlseHRfXzk4ID0gLT4gbnVtYmVyX2x4LmxldmVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZ25kXG4gICAgICBAZXEgKCDOqWlseHRfXzk5ID0gLT4gbnVtYmVyX2x4LmhpdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzAwMTAyJ1xuICAgICAgQGVxICggzqlpbHh0XzEwMCA9IC0+IG51bWJlcl9seC5zdGFydCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDhcbiAgICAgIEBlcSAoIM6paWx4dF8xMDEgPSAtPiBudW1iZXJfbHguc3RvcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAxM1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWlseHRfMTAyID0gLT4gZy5sZXZlbHMuZ25kICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZ25kXG4gICAgICBAZXEgKCDOqWlseHRfMTAzID0gLT4gZy5sZXZlbHMuZ25kLnRva2Vucy5udW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbnVtYmVyX3RrXG4gICAgICBAZXEgKCDOqWlseHRfMTA0ID0gLT4gY3RfaW50ZXJuYWxzLmduZC5mdW5jdGlvbi5pc2EgZy50b2tlbl9mcm9tX2ZxbmFtZSAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbHh0XzEwNSA9IC0+IGcudG9rZW5fZnJvbV9mcW5hbWUgJ2duZC5udW1iZXInICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIG51bWJlcl90a1xuICAgICAgQHRocm93cyAoIM6paWx4dF8xMDYgPSAtPiBnLnRva2VuX2Zyb21fZnFuYW1lICdYWFguWFhYJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC91bmtub3duIGxldmVsICdYWFgnL1xuICAgICAgQHRocm93cyAoIM6paWx4dF8xMDcgPSAtPiBnLnRva2VuX2Zyb21fZnFuYW1lICdnbmQuWFhYJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC91bmtub3duIHRva2VuICdYWFgnL1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBmbGV4aWJsZV9uZXdfdG9rZW5fc3ludGF4OiAtPlxuICAgICAgSUxYICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICB7IEdyYW1tYXJcbiAgICAgICAgTGV2ZWxcbiAgICAgICAgVG9rZW5cbiAgICAgICAgTGV4ZW1lXG4gICAgICAgIHJ4XG4gICAgICAgIGludGVybmFscyAgICAgICB9ID0gSUxYXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGcgICAgICAgICAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBuYW1lOiAnZycsIH1cbiAgICAgICAgZ25kICAgICAgICAgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnLCB9XG4gICAgICAgIG51bWJlcl90a19tYXRjaGVyID0gcnhcIlswLTldK1wiXG4gICAgICAgIG51bWJlcl90ayAgICAgICAgID0gZ25kLm5ld190b2tlbiB7IG5hbWU6ICdudW1iZXInLCBmaXQ6IG51bWJlcl90a19tYXRjaGVyLCB9XG4gICAgICAgIG51bWJlcl9seCAgICAgICAgID0gZy5zY2FuX2ZpcnN0ICc5NzUzJ1xuICAgICAgICBAZXEgKCDOqWlseHRfMTA4ID0gLT4gbnVtYmVyX3RrLm5hbWUgICAgICAgICAgICAgICApLCAnbnVtYmVyJ1xuICAgICAgICBAZXEgKCDOqWlseHRfMTA5ID0gLT4gbnVtYmVyX2x4LnRva2VuICAgICAgICAgICAgICApLCBudW1iZXJfdGtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZyAgICAgICAgICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgfVxuICAgICAgICBnbmQgICAgICAgICAgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2duZCcsIH1cbiAgICAgICAgbnVtYmVyX3RrX21hdGNoZXIgPSByeFwiWzAtOV0rXCJcbiAgICAgICAgbnVtYmVyX3RrICAgICAgICAgPSBnbmQubmV3X3Rva2VuICdudW1iZXInLCB7IGZpdDogbnVtYmVyX3RrX21hdGNoZXIsIH1cbiAgICAgICAgbnVtYmVyX2x4ICAgICAgICAgPSBnLnNjYW5fZmlyc3QgJzk3NTMnXG4gICAgICAgIEBlcSAoIM6paWx4dF8xMTAgPSAtPiBudW1iZXJfdGsubmFtZSAgICAgICAgICAgICAgICksICdudW1iZXInXG4gICAgICAgIEBlcSAoIM6paWx4dF8xMTEgPSAtPiBudW1iZXJfbHgudG9rZW4gICAgICAgICAgICAgICksIG51bWJlcl90a1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBnICAgICAgICAgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgbmFtZTogJ2cnLCB9XG4gICAgICAgIGduZCAgICAgICAgICAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZ25kJywgfVxuICAgICAgICBudW1iZXJfdGtfbWF0Y2hlciA9IHJ4XCJbMC05XStcIlxuICAgICAgICBudW1iZXJfdGsgICAgICAgICA9IGduZC5uZXdfdG9rZW4gJ251bWJlcicsIG51bWJlcl90a19tYXRjaGVyXG4gICAgICAgIG51bWJlcl9seCAgICAgICAgID0gZy5zY2FuX2ZpcnN0ICc5NzUzJ1xuICAgICAgICBAZXEgKCDOqWlseHRfMTEyID0gLT4gbnVtYmVyX3RrLm5hbWUgICAgICAgICAgICAgICApLCAnbnVtYmVyJ1xuICAgICAgICBAZXEgKCDOqWlseHRfMTEzID0gLT4gbnVtYmVyX2x4LnRva2VuICAgICAgICAgICAgICApLCBudW1iZXJfdGtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbmV3X3JlZ2V4X3RhZzogLT5cbiAgICAgIHsgcnhcbiAgICAgICAgcmVnZXhcbiAgICAgICAgaW50ZXJuYWxzXG4gICAgICAgIG5ld19yZWdleF90YWcgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paWx4dF8xMTQgPSAtPiB0eXBlb2YgICBuZXdfcmVnZXhfdGFnICdkeScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgQGVxICggzqlpbHh0XzExNSA9IC0+IHR5cGVvZiAoIG5ld19yZWdleF90YWcgJ2R5JyAgICApLnNpICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgICBAZXEgKCDOqWlseHRfMTE2ID0gLT4gKCAoICAgICAgbmV3X3JlZ2V4X3RhZyAnZHlpcycgIClcIlthLXpdXCIgKSBpbnN0YW5jZW9mIFJlZ0V4cCAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWlseHRfMTE3ID0gLT4gKCBuZXdfcmVnZXhfdGFnICdkeWlzJyAgKVwiW2Etel1cIiAgICAgKSwgL1thLXpdL2Rpc3Z5XG4gICAgICBAZXEgKCDOqWlseHRfMTE4ID0gLT4gKCBuZXdfcmVnZXhfdGFnICdkeScgICAgKS5zaVwiW2Etel1cIiAgKSwgL1thLXpdL2Rpc3Z5XG4gICAgICBAZXEgKCDOqWlseHRfMTE5ID0gLT4gKCBuZXdfcmVnZXhfdGFnICdkeXMnICAgKS5zaVwiW2Etel1cIiAgKSwgL1thLXpdL2Rpc3Z5XG4gICAgICBAZXEgKCDOqWlseHRfMTIwID0gLT4gKCBuZXdfcmVnZXhfdGFnICdkeXMnICAgKS5pXCJbYS16XVwiICAgKSwgL1thLXpdL2Rpc3Z5XG4gICAgICBAZXEgKCDOqWlseHRfMTIxID0gLT4gKCBuZXdfcmVnZXhfdGFnICdkeXNpJyAgKVwiW2Etel1cIiAgICAgKSwgL1thLXpdL2Rpc3Z5XG4gICAgICBAZXEgKCDOqWlseHRfMTIyID0gLT4gKCBuZXdfcmVnZXhfdGFnICd2JyAgICAgKS5zaVwiW2Etel1cIiAgKSwgL1thLXpdL2Rpc3Z5XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEB0aHJvd3MgKCDOqWlseHRfMTIzID0gLT4gKCBuZXdfcmVnZXhfdGFnICdkeScgICAgKS5hYlwiW2Etel1cIiAgKSwgL2lsbGVnYWwgb3IgZHVwbGljYXRlIGZsYWdzL1xuICAgICAgQHRocm93cyAoIM6paWx4dF8xMjQgPSAtPiAoIG5ld19yZWdleF90YWcgJ2R5YWInICApXCJbYS16XVwiICAgICApLCAvaWxsZWdhbCBvciBkdXBsaWNhdGUgZmxhZ3MvXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG5vcm1hbGl6ZV9yZWdleDogLT5cbiAgICAgIHsgaW50ZXJuYWxzICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgeyBub3JtYWxpemVfcmVnZXggfSA9IGludGVybmFsc1xuICAgICAgQGVxICggzqlpbHh0XzEyNSA9IC0+IHR5cGVvZiBub3JtYWxpemVfcmVnZXggICAgICksICdmdW5jdGlvbidcbiAgICAgIEBlcSAoIM6paWx4dF8xMjYgPSAtPiBub3JtYWxpemVfcmVnZXggL1thLXpdL2lnICApLCAvW2Etel0vZGdpdnlcbiAgICAgIEBlcSAoIM6paWx4dF8xMjcgPSAtPiBub3JtYWxpemVfcmVnZXggL1thLXpdL2kgICApLCAvW2Etel0vZGl2eVxuICAgICAgQGVxICggzqlpbHh0XzEyOCA9IC0+IG5vcm1hbGl6ZV9yZWdleCAvW2Etel0vdSAgICksIC9bYS16XS9kdnlcbiAgICAgIEBlcSAoIM6paWx4dF8xMjkgPSAtPiBub3JtYWxpemVfcmVnZXggL1thLXpdL2d2ICApLCAvW2Etel0vZGd2eVxuICAgICAgQGVxICggzqlpbHh0XzEzMCA9IC0+IG5vcm1hbGl6ZV9yZWdleCAvW2Etel0vZ3UgICksIC9bYS16XS9kZ3Z5XG4gICAgICBAZXEgKCDOqWlseHRfMTMxID0gLT4gbm9ybWFsaXplX3JlZ2V4IC9bYS16XS92ICAgKSwgL1thLXpdL2R2eVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByeF9mbGFnczogLT5cbiAgICAgIHsgcnggfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICBAZXEgKCDOqWlseHRfMTMyID0gLT4gKCByeFwieFwiICAgICAgICApLmZsYWdzICksICdkdnknXG4gICAgICBAZXEgKCDOqWlseHRfMTMzID0gLT4gKCByeC5zaVwieFwiICAgICApLmZsYWdzICksICdkaXN2eSdcbiAgICAgICMgQGVxICggzqlpbHh0XzEzNCA9IC0+ICggcnguc2lkdnlcInhcIiAgKS5mbGFncyApLCAnZGlzdnknXG4gICAgICBAZXEgKCDOqWlseHRfMTM1ID0gLT4gKCByeC55XCJ4XCIgICAgICApLmZsYWdzICksICdkdnknXG4gICAgICBAZXEgKCDOqWlseHRfMTM2ID0gLT4gcnByIHJ4XCJbYWJjXStcIiApLCAnL1thYmNdKy9kdnknXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG51bWJlcmluZzogLT5cbiAgICAgIElMWCAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgIHsgR3JhbW1hclxuICAgICAgICByeCAgICAgIH0gPSBJTFhcbiAgICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgbmV3X2dyYW1tYXIgPSAoIGNmZyApIC0+XG4gICAgICAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgbmFtZTogJ2cnLCBjZmcuLi4sIH1cbiAgICAgICAgZ25kICAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZ25kJywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICduYW1lJywgICAgICAgICAgIGZpdDogcnhcIig/PGluaXRpYWw+W0EtWl0pW2Etel0qXCIsIH1cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdudW1iZXInLCAgICAgICAgIGZpdDogcnhcIlswLTldK1wiLCAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICd3cycsICAgICAgICAgICAgIGZpdDogcnhcIlxccytcIiwgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAndGV4dCcsICAgICAgICAgICBmaXQ6IHJ4XCJbXmEtekEtWjAtOVxcc10rXCIsICAgICAgICAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIGdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZyA9IG5ld19ncmFtbWFyIHsgZW1pdF9zaWduYWxzOiBmYWxzZSwgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMTM3ID0gLT4gZy5zdGF0ZS5sbnIgKSwgMVxuICAgICAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgICAgIFsgXCIxc3QgbGluZVwiLCAgICAgICAgICAgMSwgXVxuICAgICAgICAgIFsgXCIybmQgbGluZVwiLCAgICAgICAgICAgMiwgXVxuICAgICAgICAgIFsgXCIzcmQgbGluZVwiLCAgICAgICAgICAgMywgXVxuICAgICAgICAgIFsgXCI0dGggbGluZSAoYW5kIEVPRilcIiwgNCwgXSBdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZm9yIFsgcHJvYmUsIGZpdCwgXSBmcm9tIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgICBpbmZvICfOqWlseHRfMTM4JywgcnByIHByb2JlXG4gICAgICAgICAgbGV4ZW1lcyA9IGcuc2Nhbl90b19saXN0IHByb2JlXG4gICAgICAgICAgIyB1cmdlICfOqWlseHRfMTM5JywgbGV4ZW1lc1xuICAgICAgICAgIEBlcSAoIM6paWx4dF8xNDAgPSAtPiBsZXhlbWVzWyAwIF0ubG5yICksIGZpdFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBnID0gbmV3X2dyYW1tYXIgeyBsbnI6IDEwLCBlbWl0X3NpZ25hbHM6IGZhbHNlLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8xNDEgPSAtPiBnLnN0YXRlLmxuciApLCAxMFxuICAgICAgICBAdGhyb3dzICggzqlpbHh0XzE0MiA9IC0+IGcucmVzZXRfbG5yIDEwICksIC9kb2VzIG5vdCBhY2NlcHQgYXJndW1lbnRzL1xuICAgICAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgICAgIFsgXCIxc3QgbGluZVwiLCAgICAgICAgICAgMTAsIF1cbiAgICAgICAgICBbIFwiMm5kIGxpbmVcIiwgICAgICAgICAgIDExLCBdXG4gICAgICAgICAgWyBcIjNyZCBsaW5lXCIsICAgICAgICAgICAxMiwgXVxuICAgICAgICAgIFsgXCI0dGggbGluZSAoYW5kIEVPRilcIiwgMTMsIF0gXVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGZvciBbIHByb2JlLCBmaXQsIF0gZnJvbSBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICAgaW5mbyAnzqlpbHh0XzE0MycsIHJwciBwcm9iZVxuICAgICAgICAgIGxleGVtZSA9ICggZy5zY2FuX3RvX2xpc3QgcHJvYmUgKVsgMCBdXG4gICAgICAgICAgQGVxICggzqlpbHh0XzE0NCA9IC0+IGxleGVtZS5sbnIgKSwgZml0XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNhbl91c2VfcGxhaW5fcmVnZXhlczogLT5cbiAgICAgIHsgR3JhbW1hclxuICAgICAgICByeCAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgICBbIFwiMXN0IGxpbmVcIiwgICAgICAgICAgIHsgbGVuZ3RoOiAzLCBjb25kZW5zZWQ6IFwiZ25kLm9yZGluYWwnMXN0J3xnbmQud3MnICd8Z25kLndvcmQnbGluZSdcIiwgfSwgXVxuICAgICAgICBbIFwiMm5kIGxpbmVcIiwgICAgICAgICAgIHsgbGVuZ3RoOiAzLCBjb25kZW5zZWQ6IFwiZ25kLm9yZGluYWwnMm5kJ3xnbmQud3MnICd8Z25kLndvcmQnbGluZSdcIiwgfSwgXVxuICAgICAgICBbIFwiM3JkIGxpbmVcIiwgICAgICAgICAgIHsgbGVuZ3RoOiAzLCBjb25kZW5zZWQ6IFwiZ25kLm9yZGluYWwnM3JkJ3xnbmQud3MnICd8Z25kLndvcmQnbGluZSdcIiwgfSwgXVxuICAgICAgICBbIFwiNHRoIGxpbmUgKGFuZCBFT0YpXCIsIHsgbGVuZ3RoOiA5LCBjb25kZW5zZWQ6IFwiZ25kLm9yZGluYWwnNHRoJ3xnbmQud3MnICd8Z25kLndvcmQnbGluZSd8Z25kLndzJyAnfGduZC5vdGhlcicoJ3xnbmQud29yZCdhbmQnfGduZC53cycgJ3xnbmQud29yZCdFT0YnfGduZC5vdGhlcicpJ1wiLCB9LCBdIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgdGVzdCA9ICggZyApID0+XG4gICAgICAgIGZvciBbIHByb2JlLCBmaXQsIF0gZnJvbSBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICAgZy5yZXNldF9sbnIoKVxuICAgICAgICAgIGxleGVtZXMgPSBnLnNjYW5fdG9fbGlzdCBwcm9iZVxuICAgICAgICAgIEBlcSAoIM6paWx4dF8xNDUgPSAtPiBjb25kZW5zZV9sZXhlbWVzIGxleGVtZXMgKSwgZml0LmNvbmRlbnNlZFxuICAgICAgICAgIEBlcSAoIM6paWx4dF8xNDYgPSAtPiBsZXhlbWVzLmxlbmd0aCApLCBmaXQubGVuZ3RoXG4gICAgICAgICAgZy5yZXNldF9sbnIoKVxuICAgICAgICAgIEBlcSAoIM6paWx4dF8xNDcgPSAtPiBbICggZy5zY2FuIHByb2JlICkuLi4sIF0gKSwgbGV4ZW1lc1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBkbyA9PlxuICAgICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgZW1pdF9zaWduYWxzOiBmYWxzZSwgfVxuICAgICAgICBnbmQgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICduYW1lJywgICAgICAgICAgIGZpdDogcnhcIig/PGluaXRpYWw+W0EtWl0pW2Etel0rXCIsICAgICAgICAgICB9XG4gICAgICAgIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnb3JkaW5hbCcsICAgICAgICBmaXQ6IHJ4XCIoPzxvcmRpbmFsPlswLTldKykoc3R8bmR8cmR8dGgpXCIsICAgfVxuICAgICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ251bWJlcicsICAgICAgICAgZml0OiByeFwiWzAtOV0rXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICd3cycsICAgICAgICAgICAgIGZpdDogcnhcIlxccytcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ3dvcmQnLCAgICAgICAgICAgZml0OiByeC5pXCJbYS16XStcIiwgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdvdGhlcicsICAgICAgICAgIGZpdDogcnguaVwiW15hLXowLTlcXHNdK1wiLCAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHRlc3QgZ1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBkbyA9PlxuICAgICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgZW1pdF9zaWduYWxzOiBmYWxzZSwgfVxuICAgICAgICBnbmQgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICduYW1lJywgICAgICAgICAgIGZpdDogLyg/PGluaXRpYWw+W0EtWl0pW2Etel0rL2R2eSwgICAgICAgICAgICB9XG4gICAgICAgIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnb3JkaW5hbCcsICAgICAgICBmaXQ6IC8oPzxvcmRpbmFsPlswLTldKykoPzpzdHxuZHxyZHx0aCkvZHZ5LCAgfVxuICAgICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ251bWJlcicsICAgICAgICAgZml0OiAvWzAtOV0rL2R2eSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICd3cycsICAgICAgICAgICAgIGZpdDogL1xccysvZHZ5LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ3dvcmQnLCAgICAgICAgICAgZml0OiAvW2Etel0rL2RpdnksICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdvdGhlcicsICAgICAgICAgIGZpdDogL1teYS16MC05XFxzXSsvZGl2eSwgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHRlc3QgZ1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBkbyA9PlxuICAgICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgZW1pdF9zaWduYWxzOiBmYWxzZSwgfVxuICAgICAgICBnbmQgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICduYW1lJywgICAgICAgICAgIGZpdDogLyg/PGluaXRpYWw+W0EtWl0pW2Etel0rLywgICAgICAgICAgICAgICB9XG4gICAgICAgIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnb3JkaW5hbCcsICAgICAgICBmaXQ6IC8oPzxvcmRpbmFsPlswLTldKykoPzpzdHxuZHxyZHx0aCkvLCAgICAgfVxuICAgICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ251bWJlcicsICAgICAgICAgZml0OiAvWzAtOV0rLywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICd3cycsICAgICAgICAgICAgIGZpdDogL1xccysvLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ3dvcmQnLCAgICAgICAgICAgZml0OiAvW2Etel0rL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdvdGhlcicsICAgICAgICAgIGZpdDogL1teYS16MC05XFxzXSsvaSwgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHRlc3QgZ1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBkbyA9PlxuICAgICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgZW1pdF9zaWduYWxzOiBmYWxzZSwgfVxuICAgICAgICBnbmQgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICduYW1lJywgICAgICAgICAgIGZpdDogLyg/PGluaXRpYWw+W0EtWl0pW2Etel0rL3YsICAgICAgICAgICAgICB9XG4gICAgICAgIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnb3JkaW5hbCcsICAgICAgICBmaXQ6IC8oPzxvcmRpbmFsPlswLTldKykoPzpzdHxuZHxyZHx0aCkvdSwgICAgfVxuICAgICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ251bWJlcicsICAgICAgICAgZml0OiAvWzAtOV0rLywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICd3cycsICAgICAgICAgICAgIGZpdDogL1xccysvLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ3dvcmQnLCAgICAgICAgICAgZml0OiAvW2Etel0rL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdvdGhlcicsICAgICAgICAgIGZpdDogL1teYS16MC05XFxzXSsvaSwgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHRlc3QgZ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc3RyYXRlZ2llczpcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbGV2ZWxzX2ltcGxlbWVudF9zdHJhdGVnaWVzOiAtPlxuICAgICAgeyBHcmFtbWFyIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICAjIyMgc3RyYXRlZ3kgJ2ZpcnN0Jywgc2hvcnRlc3QgdG9rZW5zIGZpcnN0ICMjI1xuICAgICAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgICAgIFsgWyAwLCAnYWJjZDEyMzQnLCBdLCBcImZpcnN0Lm9uZV9sZXR0ZXInYSdcIiwgXVxuICAgICAgICAgIFsgWyAxLCAnYWJjZDEyMzQnLCBdLCBcImZpcnN0Lm9uZV9sZXR0ZXInYidcIiwgXVxuICAgICAgICAgIFsgWyAyLCAnYWJjZDEyMzQnLCBdLCBcImZpcnN0Lm9uZV9sZXR0ZXInYydcIiwgXVxuICAgICAgICAgIFsgWyAzLCAnYWJjZDEyMzQnLCBdLCBcImZpcnN0Lm9uZV9sZXR0ZXInZCdcIiwgXVxuICAgICAgICAgIFsgWyA0LCAnYWJjZDEyMzQnLCBdLCBcImZpcnN0Lm9uZV9kaWdpdCcxJ1wiLCAgXVxuICAgICAgICAgIFsgWyA1LCAnYWJjZDEyMzQnLCBdLCBcImZpcnN0Lm9uZV9kaWdpdCcyJ1wiLCAgXVxuICAgICAgICAgIFsgWyAwLCAnMTIzYWJjJywgICBdLCBcImZpcnN0Lm9uZV9kaWdpdCcxJ1wiLCAgXVxuICAgICAgICAgIFsgWyAxLCAnMTIzYWJjJywgICBdLCBcImZpcnN0Lm9uZV9kaWdpdCcyJ1wiLCAgXVxuICAgICAgICAgIFsgWyAyLCAnMTIzYWJjJywgICBdLCBcImZpcnN0Lm9uZV9kaWdpdCczJ1wiLCAgXVxuICAgICAgICAgIFsgWyAzLCAnMTIzYWJjJywgICBdLCBcImZpcnN0Lm9uZV9sZXR0ZXInYSdcIiwgXVxuICAgICAgICAgIFsgWyA0LCAnMTIzYWJjJywgICBdLCBcImZpcnN0Lm9uZV9sZXR0ZXInYidcIiwgXVxuICAgICAgICAgIFsgWyA1LCAnMTIzYWJjJywgICBdLCBcImZpcnN0Lm9uZV9sZXR0ZXInYydcIiwgXVxuICAgICAgICAgIF1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBnICAgICA9IG5ldyBHcmFtbWFyKClcbiAgICAgICAgZmlyc3QgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdmaXJzdCcsIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ29uZV9kaWdpdCcsICAgICAgZml0OiAvWzAtOV17MX0vaSwgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAndHdvX2RpZ2l0cycsICAgICBmaXQ6IC9bMC05XXsyfS9pLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICd0aHJlZV9kaWdpdHMnLCAgIGZpdDogL1swLTldezN9L2ksIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ2ZvdXJfZGlnaXRzJywgICAgZml0OiAvWzAtOV17NH0vaSwgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAnb25lX2xldHRlcicsICAgICBmaXQ6IC9bYS16XXsxfS9pLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICd0d29fbGV0dGVycycsICAgIGZpdDogL1thLXpdezJ9L2ksIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ3RocmVlX2xldHRlcnMnLCAgZml0OiAvW2Etel17M30vaSwgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAnZm91cl9sZXR0ZXJzJywgICBmaXQ6IC9bYS16XXs0fS9pLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBmb3IgWyBbIHBvc2l0aW9uLCBzb3VyY2UsIF0sIGZpdCwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICAgQGVxICggzqlpbHh0XzE0OCA9IC0+IGNvbmRlbnNlX2xleGVtZXMgZmlyc3QubWF0Y2hfZmlyc3RfYXQgcG9zaXRpb24sIHNvdXJjZSApLCBmaXRcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgIyMjIHN0cmF0ZWd5ICdmaXJzdCcsIGxvbmdlc3QgdG9rZW5zIGZpcnN0ICMjI1xuICAgICAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgICAgIFsgWyAwLCAnYWJjZDEyMzQnLCBdLCBcImZpcnN0LmZvdXJfbGV0dGVycydhYmNkJ1wiLCBdXG4gICAgICAgICAgWyBbIDEsICdhYmNkMTIzNCcsIF0sIFwiZmlyc3QudGhyZWVfbGV0dGVycydiY2QnXCIsIF1cbiAgICAgICAgICBbIFsgMiwgJ2FiY2QxMjM0JywgXSwgXCJmaXJzdC50d29fbGV0dGVycydjZCdcIiwgICAgXVxuICAgICAgICAgIFsgWyAzLCAnYWJjZDEyMzQnLCBdLCBcImZpcnN0Lm9uZV9sZXR0ZXInZCdcIiwgICAgICBdXG4gICAgICAgICAgWyBbIDQsICdhYmNkMTIzNCcsIF0sIFwiZmlyc3QuZm91cl9kaWdpdHMnMTIzNCdcIiwgIF1cbiAgICAgICAgICBbIFsgNSwgJ2FiY2QxMjM0JywgXSwgXCJmaXJzdC50aHJlZV9kaWdpdHMnMjM0J1wiLCAgXVxuICAgICAgICAgIFsgWyAwLCAnMTIzYWJjJywgICBdLCBcImZpcnN0LnRocmVlX2RpZ2l0cycxMjMnXCIsICBdXG4gICAgICAgICAgWyBbIDEsICcxMjNhYmMnLCAgIF0sIFwiZmlyc3QudHdvX2RpZ2l0cycyMydcIiwgICAgIF1cbiAgICAgICAgICBbIFsgMiwgJzEyM2FiYycsICAgXSwgXCJmaXJzdC5vbmVfZGlnaXQnMydcIiwgICAgICAgXVxuICAgICAgICAgIFsgWyAzLCAnMTIzYWJjJywgICBdLCBcImZpcnN0LnRocmVlX2xldHRlcnMnYWJjJ1wiLCBdXG4gICAgICAgICAgWyBbIDQsICcxMjNhYmMnLCAgIF0sIFwiZmlyc3QudHdvX2xldHRlcnMnYmMnXCIsICAgIF1cbiAgICAgICAgICBbIFsgNSwgJzEyM2FiYycsICAgXSwgXCJmaXJzdC5vbmVfbGV0dGVyJ2MnXCIsICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBnICAgICA9IG5ldyBHcmFtbWFyKClcbiAgICAgICAgZmlyc3QgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdmaXJzdCcsIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ2ZvdXJfZGlnaXRzJywgICAgZml0OiAvWzAtOV17NH0vaSwgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAndGhyZWVfZGlnaXRzJywgICBmaXQ6IC9bMC05XXszfS9pLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICd0d29fZGlnaXRzJywgICAgIGZpdDogL1swLTldezJ9L2ksIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ29uZV9kaWdpdCcsICAgICAgZml0OiAvWzAtOV17MX0vaSwgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAnZm91cl9sZXR0ZXJzJywgICBmaXQ6IC9bYS16XXs0fS9pLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICd0aHJlZV9sZXR0ZXJzJywgIGZpdDogL1thLXpdezN9L2ksIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ3R3b19sZXR0ZXJzJywgICAgZml0OiAvW2Etel17Mn0vaSwgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAnb25lX2xldHRlcicsICAgICBmaXQ6IC9bYS16XXsxfS9pLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBmb3IgWyBbIHBvc2l0aW9uLCBzb3VyY2UsIF0sIGZpdCwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICAgQGVxICggzqlpbHh0XzE0OSA9IC0+IGNvbmRlbnNlX2xleGVtZXMgZmlyc3QubWF0Y2hfZmlyc3RfYXQgcG9zaXRpb24sIHNvdXJjZSApLCBmaXRcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgIyMjIHN0cmF0ZWd5ICdsb25nZXN0Jywgc2hvcnRlc3QgdG9rZW5zIGZpcnN0ICMjI1xuICAgICAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgICAgIFsgWyAwLCAnYWJjZDEyMzQnLCBdLCBcImZpcnN0LmZvdXJfbGV0dGVycydhYmNkJ1wiLCBdXG4gICAgICAgICAgWyBbIDEsICdhYmNkMTIzNCcsIF0sIFwiZmlyc3QudGhyZWVfbGV0dGVycydiY2QnXCIsIF1cbiAgICAgICAgICBbIFsgMiwgJ2FiY2QxMjM0JywgXSwgXCJmaXJzdC50d29fbGV0dGVycydjZCdcIiwgICAgXVxuICAgICAgICAgIFsgWyAzLCAnYWJjZDEyMzQnLCBdLCBcImZpcnN0Lm9uZV9sZXR0ZXInZCdcIiwgICAgICBdXG4gICAgICAgICAgWyBbIDQsICdhYmNkMTIzNCcsIF0sIFwiZmlyc3QuZm91cl9kaWdpdHMnMTIzNCdcIiwgIF1cbiAgICAgICAgICBbIFsgNSwgJ2FiY2QxMjM0JywgXSwgXCJmaXJzdC50aHJlZV9kaWdpdHMnMjM0J1wiLCAgXVxuICAgICAgICAgIFsgWyAwLCAnMTIzYWJjJywgICBdLCBcImZpcnN0LnRocmVlX2RpZ2l0cycxMjMnXCIsICBdXG4gICAgICAgICAgWyBbIDEsICcxMjNhYmMnLCAgIF0sIFwiZmlyc3QudHdvX2RpZ2l0cycyMydcIiwgICAgIF1cbiAgICAgICAgICBbIFsgMiwgJzEyM2FiYycsICAgXSwgXCJmaXJzdC5vbmVfZGlnaXQnMydcIiwgICAgICAgXVxuICAgICAgICAgIFsgWyAzLCAnMTIzYWJjJywgICBdLCBcImZpcnN0LnRocmVlX2xldHRlcnMnYWJjJ1wiLCBdXG4gICAgICAgICAgWyBbIDQsICcxMjNhYmMnLCAgIF0sIFwiZmlyc3QudHdvX2xldHRlcnMnYmMnXCIsICAgIF1cbiAgICAgICAgICBbIFsgNSwgJzEyM2FiYycsICAgXSwgXCJmaXJzdC5vbmVfbGV0dGVyJ2MnXCIsICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBnICAgICA9IG5ldyBHcmFtbWFyKClcbiAgICAgICAgZmlyc3QgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdmaXJzdCcsIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ29uZV9kaWdpdCcsICAgICAgZml0OiAvWzAtOV17MX0vaSwgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAndHdvX2RpZ2l0cycsICAgICBmaXQ6IC9bMC05XXsyfS9pLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICd0aHJlZV9kaWdpdHMnLCAgIGZpdDogL1swLTldezN9L2ksIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ2ZvdXJfZGlnaXRzJywgICAgZml0OiAvWzAtOV17NH0vaSwgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAnb25lX2xldHRlcicsICAgICBmaXQ6IC9bYS16XXsxfS9pLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICd0d29fbGV0dGVycycsICAgIGZpdDogL1thLXpdezJ9L2ksIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ3RocmVlX2xldHRlcnMnLCAgZml0OiAvW2Etel17M30vaSwgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAnZm91cl9sZXR0ZXJzJywgICBmaXQ6IC9bYS16XXs0fS9pLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBmb3IgWyBbIHBvc2l0aW9uLCBzb3VyY2UsIF0sIGZpdCwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICAgQGVxICggzqlpbHh0XzE1MCA9IC0+IGNvbmRlbnNlX2xleGVtZXMgZmlyc3QubWF0Y2hfbG9uZ2VzdF9hdCBwb3NpdGlvbiwgc291cmNlICksIGZpdFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICAjIyMgc3RyYXRlZ3kgJ2xvbmdlc3QnLCBsb25nZXN0IHRva2VucyBmaXJzdCAjIyNcbiAgICAgICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgICAgICBbIFsgMCwgJ2FiY2QxMjM0JywgXSwgXCJmaXJzdC5mb3VyX2xldHRlcnMnYWJjZCdcIiwgXVxuICAgICAgICAgIFsgWyAxLCAnYWJjZDEyMzQnLCBdLCBcImZpcnN0LnRocmVlX2xldHRlcnMnYmNkJ1wiLCBdXG4gICAgICAgICAgWyBbIDIsICdhYmNkMTIzNCcsIF0sIFwiZmlyc3QudHdvX2xldHRlcnMnY2QnXCIsICAgIF1cbiAgICAgICAgICBbIFsgMywgJ2FiY2QxMjM0JywgXSwgXCJmaXJzdC5vbmVfbGV0dGVyJ2QnXCIsICAgICAgXVxuICAgICAgICAgIFsgWyA0LCAnYWJjZDEyMzQnLCBdLCBcImZpcnN0LmZvdXJfZGlnaXRzJzEyMzQnXCIsICBdXG4gICAgICAgICAgWyBbIDUsICdhYmNkMTIzNCcsIF0sIFwiZmlyc3QudGhyZWVfZGlnaXRzJzIzNCdcIiwgIF1cbiAgICAgICAgICBbIFsgMCwgJzEyM2FiYycsICAgXSwgXCJmaXJzdC50aHJlZV9kaWdpdHMnMTIzJ1wiLCAgXVxuICAgICAgICAgIFsgWyAxLCAnMTIzYWJjJywgICBdLCBcImZpcnN0LnR3b19kaWdpdHMnMjMnXCIsICAgICBdXG4gICAgICAgICAgWyBbIDIsICcxMjNhYmMnLCAgIF0sIFwiZmlyc3Qub25lX2RpZ2l0JzMnXCIsICAgICAgIF1cbiAgICAgICAgICBbIFsgMywgJzEyM2FiYycsICAgXSwgXCJmaXJzdC50aHJlZV9sZXR0ZXJzJ2FiYydcIiwgXVxuICAgICAgICAgIFsgWyA0LCAnMTIzYWJjJywgICBdLCBcImZpcnN0LnR3b19sZXR0ZXJzJ2JjJ1wiLCAgICBdXG4gICAgICAgICAgWyBbIDUsICcxMjNhYmMnLCAgIF0sIFwiZmlyc3Qub25lX2xldHRlcidjJ1wiLCAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZyAgICAgPSBuZXcgR3JhbW1hcigpXG4gICAgICAgIGZpcnN0ID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZmlyc3QnLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICdmb3VyX2RpZ2l0cycsICAgIGZpdDogL1swLTldezR9L2ksIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ3RocmVlX2RpZ2l0cycsICAgZml0OiAvWzAtOV17M30vaSwgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAndHdvX2RpZ2l0cycsICAgICBmaXQ6IC9bMC05XXsyfS9pLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICdvbmVfZGlnaXQnLCAgICAgIGZpdDogL1swLTldezF9L2ksIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ2ZvdXJfbGV0dGVycycsICAgZml0OiAvW2Etel17NH0vaSwgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAndGhyZWVfbGV0dGVycycsICBmaXQ6IC9bYS16XXszfS9pLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICd0d29fbGV0dGVycycsICAgIGZpdDogL1thLXpdezJ9L2ksIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ29uZV9sZXR0ZXInLCAgICAgZml0OiAvW2Etel17MX0vaSwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZm9yIFsgWyBwb3NpdGlvbiwgc291cmNlLCBdLCBmaXQsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICAgIEBlcSAoIM6paWx4dF8xNTEgPSAtPiBjb25kZW5zZV9sZXhlbWVzIGZpcnN0Lm1hdGNoX2xvbmdlc3RfYXQgcG9zaXRpb24sIHNvdXJjZSApLCBmaXRcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgIyMjIHN0cmF0ZWd5ICdsb25nZXN0Jywgc2NyYW1ibGVkIHRva2VucyAjIyNcbiAgICAgICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgICAgICBbIFsgMCwgJ2FiY2QxMjM0JywgXSwgXCJmaXJzdC5mb3VyX2xldHRlcnMnYWJjZCdcIiwgXVxuICAgICAgICAgIFsgWyAxLCAnYWJjZDEyMzQnLCBdLCBcImZpcnN0LnRocmVlX2xldHRlcnMnYmNkJ1wiLCBdXG4gICAgICAgICAgWyBbIDIsICdhYmNkMTIzNCcsIF0sIFwiZmlyc3QudHdvX2xldHRlcnMnY2QnXCIsICAgIF1cbiAgICAgICAgICBbIFsgMywgJ2FiY2QxMjM0JywgXSwgXCJmaXJzdC5vbmVfbGV0dGVyJ2QnXCIsICAgICAgXVxuICAgICAgICAgIFsgWyA0LCAnYWJjZDEyMzQnLCBdLCBcImZpcnN0LmZvdXJfZGlnaXRzJzEyMzQnXCIsICBdXG4gICAgICAgICAgWyBbIDUsICdhYmNkMTIzNCcsIF0sIFwiZmlyc3QudGhyZWVfZGlnaXRzJzIzNCdcIiwgIF1cbiAgICAgICAgICBbIFsgMCwgJzEyM2FiYycsICAgXSwgXCJmaXJzdC50aHJlZV9kaWdpdHMnMTIzJ1wiLCAgXVxuICAgICAgICAgIFsgWyAxLCAnMTIzYWJjJywgICBdLCBcImZpcnN0LnR3b19kaWdpdHMnMjMnXCIsICAgICBdXG4gICAgICAgICAgWyBbIDIsICcxMjNhYmMnLCAgIF0sIFwiZmlyc3Qub25lX2RpZ2l0JzMnXCIsICAgICAgIF1cbiAgICAgICAgICBbIFsgMywgJzEyM2FiYycsICAgXSwgXCJmaXJzdC50aHJlZV9sZXR0ZXJzJ2FiYydcIiwgXVxuICAgICAgICAgIFsgWyA0LCAnMTIzYWJjJywgICBdLCBcImZpcnN0LnR3b19sZXR0ZXJzJ2JjJ1wiLCAgICBdXG4gICAgICAgICAgWyBbIDUsICcxMjNhYmMnLCAgIF0sIFwiZmlyc3Qub25lX2xldHRlcidjJ1wiLCAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc2h1ZmZsZSA9IEdVWS5ybmQuZ2V0X3NodWZmbGUgMC45ODc2LCAwLjM0NTZcbiAgICAgICAgZm9yIF8gaW4gWyAxIC4uIDEwMCBdXG4gICAgICAgICAgZG8gPT5cbiAgICAgICAgICAgIGcgICAgICAgICAgID0gbmV3IEdyYW1tYXIoKVxuICAgICAgICAgICAgZmlyc3QgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdmaXJzdCcsIH1cbiAgICAgICAgICAgIHRva2VuX2NmZ3MgID0gc2h1ZmZsZSBbXG4gICAgICAgICAgICAgIHsgbmFtZTogJ29uZV9kaWdpdCcsICAgICAgZml0OiAvWzAtOV17MX0vaSwgfVxuICAgICAgICAgICAgICB7IG5hbWU6ICd0d29fZGlnaXRzJywgICAgIGZpdDogL1swLTldezJ9L2ksIH1cbiAgICAgICAgICAgICAgeyBuYW1lOiAndGhyZWVfZGlnaXRzJywgICBmaXQ6IC9bMC05XXszfS9pLCB9XG4gICAgICAgICAgICAgIHsgbmFtZTogJ2ZvdXJfZGlnaXRzJywgICAgZml0OiAvWzAtOV17NH0vaSwgfVxuICAgICAgICAgICAgICB7IG5hbWU6ICdvbmVfbGV0dGVyJywgICAgIGZpdDogL1thLXpdezF9L2ksIH1cbiAgICAgICAgICAgICAgeyBuYW1lOiAndHdvX2xldHRlcnMnLCAgICBmaXQ6IC9bYS16XXsyfS9pLCB9XG4gICAgICAgICAgICAgIHsgbmFtZTogJ3RocmVlX2xldHRlcnMnLCAgZml0OiAvW2Etel17M30vaSwgfVxuICAgICAgICAgICAgICB7IG5hbWU6ICdmb3VyX2xldHRlcnMnLCAgIGZpdDogL1thLXpdezR9L2ksIH0gXVxuICAgICAgICAgICAgZmlyc3QubmV3X3Rva2VuIHRva2VuX2NmZyBmb3IgdG9rZW5fY2ZnIGluIHRva2VuX2NmZ3NcbiAgICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgICAgZm9yIFsgWyBwb3NpdGlvbiwgc291cmNlLCBdLCBmaXQsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICAgICAgICBAZXEgKCDOqWlseHRfMTUyID0gLT4gY29uZGVuc2VfbGV4ZW1lcyBmaXJzdC5tYXRjaF9sb25nZXN0X2F0IHBvc2l0aW9uLCBzb3VyY2UgKSwgZml0XG4gICAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGdyYW1tYXJzX3VzZV9zdHJhdGVnaWVzOiAtPlxuICAgICAgeyBHcmFtbWFyIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICAjIyMgc3RyYXRlZ3kgJ2xvbmdlc3QnLCBzY3JhbWJsZWQgdG9rZW5zICMjI1xuICAgICAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgICAgIFsgJ2FiY2QxMjM0JywgICAgICAgICAgIFwiZmlyc3QuZm91cl9sZXR0ZXJzJ2FiY2QnfGZpcnN0LmZvdXJfZGlnaXRzJzEyMzQnXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgWyAnYWJjZGVmZ2gxMjM0NTY3ODkwJywgXCJmaXJzdC5mb3VyX2xldHRlcnMnYWJjZCd8Zmlyc3QuZm91cl9sZXR0ZXJzJ2VmZ2gnfGZpcnN0LmZvdXJfZGlnaXRzJzEyMzQnfGZpcnN0LmZvdXJfZGlnaXRzJzU2NzgnfGZpcnN0LnR3b19kaWdpdHMnOTAnXCIsIF1cbiAgICAgICAgICBbICdhYmNkZWZnMTIzNDU2Nzg5JywgICBcImZpcnN0LmZvdXJfbGV0dGVycydhYmNkJ3xmaXJzdC50aHJlZV9sZXR0ZXJzJ2VmZyd8Zmlyc3QuZm91cl9kaWdpdHMnMTIzNCd8Zmlyc3QuZm91cl9kaWdpdHMnNTY3OCd8Zmlyc3Qub25lX2RpZ2l0JzknXCIsICAgXVxuICAgICAgICAgIFsgJzEyM2FiYycsICAgICAgICAgICAgIFwiZmlyc3QudGhyZWVfZGlnaXRzJzEyMyd8Zmlyc3QudGhyZWVfbGV0dGVycydhYmMnXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc2h1ZmZsZSA9IEdVWS5ybmQuZ2V0X3NodWZmbGUgMC45ODc2LCAwLjM0NTZcbiAgICAgICAgZm9yIF8gaW4gWyAxIC4uIDEwMCBdXG4gICAgICAgICAgZG8gPT5cbiAgICAgICAgICAgIGcgICAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBzdHJhdGVneTogJ2xvbmdlc3QnLCBlbWl0X3NpZ25hbHM6IGZhbHNlLCB9XG4gICAgICAgICAgICBmaXJzdCAgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2ZpcnN0JywgfVxuICAgICAgICAgICAgdG9rZW5fY2ZncyAgPSBzaHVmZmxlIFtcbiAgICAgICAgICAgICAgeyBuYW1lOiAnb25lX2RpZ2l0JywgICAgICBmaXQ6IC9bMC05XXsxfS9pLCB9XG4gICAgICAgICAgICAgIHsgbmFtZTogJ3R3b19kaWdpdHMnLCAgICAgZml0OiAvWzAtOV17Mn0vaSwgfVxuICAgICAgICAgICAgICB7IG5hbWU6ICd0aHJlZV9kaWdpdHMnLCAgIGZpdDogL1swLTldezN9L2ksIH1cbiAgICAgICAgICAgICAgeyBuYW1lOiAnZm91cl9kaWdpdHMnLCAgICBmaXQ6IC9bMC05XXs0fS9pLCB9XG4gICAgICAgICAgICAgIHsgbmFtZTogJ29uZV9sZXR0ZXInLCAgICAgZml0OiAvW2Etel17MX0vaSwgfVxuICAgICAgICAgICAgICB7IG5hbWU6ICd0d29fbGV0dGVycycsICAgIGZpdDogL1thLXpdezJ9L2ksIH1cbiAgICAgICAgICAgICAgeyBuYW1lOiAndGhyZWVfbGV0dGVycycsICBmaXQ6IC9bYS16XXszfS9pLCB9XG4gICAgICAgICAgICAgIHsgbmFtZTogJ2ZvdXJfbGV0dGVycycsICAgZml0OiAvW2Etel17NH0vaSwgfSBdXG4gICAgICAgICAgICBmaXJzdC5uZXdfdG9rZW4gdG9rZW5fY2ZnIGZvciB0b2tlbl9jZmcgaW4gdG9rZW5fY2Znc1xuICAgICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgICBAZXEgKCDOqWlseHRfMTUzID0gLT4gZy5jZmcuc3RyYXRlZ3kgKSwgJ2xvbmdlc3QnXG4gICAgICAgICAgICBAZXEgKCDOqWlseHRfMTU0ID0gLT4gZmlyc3Quc3RyYXRlZ3kgKSwgJ2xvbmdlc3QnXG4gICAgICAgICAgICBmb3IgWyBzb3VyY2UsIGZpdCwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICAgICAgIEBlcSAoIM6paWx4dF8xNTUgPSAtPiBjb25kZW5zZV9sZXhlbWVzIGcuc2Nhbl90b19saXN0IHNvdXJjZSApLCBmaXRcbiAgICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgIyMjIHN0cmF0ZWd5ICdmaXJzdCcsIHNjcmFtYmxlZCB0b2tlbnMgIyMjXG4gICAgICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICAgICAgWyAnYWJjZDEyMzQnLCAgICAgXCJmaXJzdC50d29fbGV0dGVycydhYid8Zmlyc3QudHdvX2xldHRlcnMnY2QnfGZpcnN0Lm9uZV9kaWdpdCcxJ3xmaXJzdC5vbmVfZGlnaXQnMid8Zmlyc3Qub25lX2RpZ2l0JzMnfGZpcnN0Lm9uZV9kaWdpdCc0J1wiLCBdXG4gICAgICAgICAgWyAnYWJjZGUxMjM0NScsICAgXCJmaXJzdC50d29fbGV0dGVycydhYid8Zmlyc3QudHdvX2xldHRlcnMnY2QnfGZpcnN0Lm9uZV9sZXR0ZXInZSd8Zmlyc3Qub25lX2RpZ2l0JzEnfGZpcnN0Lm9uZV9kaWdpdCcyJ3xmaXJzdC5vbmVfZGlnaXQnMyd8Zmlyc3Qub25lX2RpZ2l0JzQnfGZpcnN0Lm9uZV9kaWdpdCc1J1wiLCBdXG4gICAgICAgICAgWyAnYWJjZGVmMTIzNDU2JywgXCJmaXJzdC50d29fbGV0dGVycydhYid8Zmlyc3QudHdvX2xldHRlcnMnY2QnfGZpcnN0LnR3b19sZXR0ZXJzJ2VmJ3xmaXJzdC5vbmVfZGlnaXQnMSd8Zmlyc3Qub25lX2RpZ2l0JzInfGZpcnN0Lm9uZV9kaWdpdCczJ3xmaXJzdC5vbmVfZGlnaXQnNCd8Zmlyc3Qub25lX2RpZ2l0JzUnfGZpcnN0Lm9uZV9kaWdpdCc2J1wiLCBdXG4gICAgICAgICAgWyAnMTIzYWJjJywgICAgICAgXCJmaXJzdC5vbmVfZGlnaXQnMSd8Zmlyc3Qub25lX2RpZ2l0JzInfGZpcnN0Lm9uZV9kaWdpdCczJ3xmaXJzdC50d29fbGV0dGVycydhYid8Zmlyc3Qub25lX2xldHRlcidjJ1wiLCBdXG4gICAgICAgICAgXVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGcgICAgID0gbmV3IEdyYW1tYXIgeyBzdHJhdGVneTogJ2ZpcnN0JywgZW1pdF9zaWduYWxzOiBmYWxzZSwgfVxuICAgICAgICBmaXJzdCA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2ZpcnN0JywgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAndHdvX2xldHRlcnMnLCAgICBmaXQ6IC9bYS16XXsyfS9pLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICdvbmVfZGlnaXQnLCAgICAgIGZpdDogL1swLTldezF9L2ksIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ3RocmVlX2RpZ2l0cycsICAgZml0OiAvWzAtOV17M30vaSwgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAnZm91cl9kaWdpdHMnLCAgICBmaXQ6IC9bMC05XXs0fS9pLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICd0d29fZGlnaXRzJywgICAgIGZpdDogL1swLTldezJ9L2ksIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ29uZV9sZXR0ZXInLCAgICAgZml0OiAvW2Etel17MX0vaSwgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAnZm91cl9sZXR0ZXJzJywgICBmaXQ6IC9bYS16XXs0fS9pLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICd0aHJlZV9sZXR0ZXJzJywgIGZpdDogL1thLXpdezN9L2ksIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWlseHRfMTU2ID0gLT4gZy5jZmcuc3RyYXRlZ3kgKSwgJ2ZpcnN0J1xuICAgICAgICBAZXEgKCDOqWlseHRfMTU3ID0gLT4gZmlyc3Quc3RyYXRlZ3kgKSwgJ2ZpcnN0J1xuICAgICAgICBmb3IgWyBzb3VyY2UsIGZpdCwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICAgQGVxICggzqlpbHh0XzE1OCA9IC0+IGNvbmRlbnNlX2xleGVtZXMgZy5zY2FuX3RvX2xpc3Qgc291cmNlICksIGZpdFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICAjIyMgc3RyYXRlZ3kgJ2ZpcnN0JywgbG9uZyB0b2tlbnMgZmlyc3QgIyMjXG4gICAgICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICAgICAgWyAnYWJjZDEyMzQnLCAgICAgXCJmaXJzdC5mb3VyX2xldHRlcnMnYWJjZCd8Zmlyc3QuZm91cl9kaWdpdHMnMTIzNCdcIiwgXVxuICAgICAgICAgIFsgJ2FiY2RlMTIzNDUnLCAgIFwiZmlyc3QuZm91cl9sZXR0ZXJzJ2FiY2QnfGZpcnN0Lm9uZV9sZXR0ZXInZSd8Zmlyc3QuZm91cl9kaWdpdHMnMTIzNCd8Zmlyc3Qub25lX2RpZ2l0JzUnXCIsIF1cbiAgICAgICAgICBbICdhYmNkZWYxMjM0NTYnLCBcImZpcnN0LmZvdXJfbGV0dGVycydhYmNkJ3xmaXJzdC50d29fbGV0dGVycydlZid8Zmlyc3QuZm91cl9kaWdpdHMnMTIzNCd8Zmlyc3QudHdvX2RpZ2l0cyc1NidcIiwgXVxuICAgICAgICAgIFsgJzEyM2FiYycsICAgICAgIFwiZmlyc3QudGhyZWVfZGlnaXRzJzEyMyd8Zmlyc3QudGhyZWVfbGV0dGVycydhYmMnXCIsIF1cbiAgICAgICAgICBdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZyAgICAgPSBuZXcgR3JhbW1hciB7IHN0cmF0ZWd5OiAnZmlyc3QnLCBlbWl0X3NpZ25hbHM6IGZhbHNlLCB9XG4gICAgICAgIGZpcnN0ID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZmlyc3QnLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICdmb3VyX2xldHRlcnMnLCAgIGZpdDogL1thLXpdezR9L2ksIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ3RocmVlX2xldHRlcnMnLCAgZml0OiAvW2Etel17M30vaSwgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAndHdvX2xldHRlcnMnLCAgICBmaXQ6IC9bYS16XXsyfS9pLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICdvbmVfbGV0dGVyJywgICAgIGZpdDogL1thLXpdezF9L2ksIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ2ZvdXJfZGlnaXRzJywgICAgZml0OiAvWzAtOV17NH0vaSwgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAndGhyZWVfZGlnaXRzJywgICBmaXQ6IC9bMC05XXszfS9pLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICd0d29fZGlnaXRzJywgICAgIGZpdDogL1swLTldezJ9L2ksIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuIHsgbmFtZTogJ29uZV9kaWdpdCcsICAgICAgZml0OiAvWzAtOV17MX0vaSwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6paWx4dF8xNTkgPSAtPiBnLmNmZy5zdHJhdGVneSApLCAnZmlyc3QnXG4gICAgICAgIEBlcSAoIM6paWx4dF8xNjAgPSAtPiBmaXJzdC5zdHJhdGVneSApLCAnZmlyc3QnXG4gICAgICAgIGZvciBbIHNvdXJjZSwgZml0LCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgICBAZXEgKCDOqWlseHRfMTYxID0gLT4gY29uZGVuc2VfbGV4ZW1lcyBnLnNjYW5fdG9fbGlzdCBzb3VyY2UgKSwgZml0XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFsbF9zdHJhdGVnaWVzX3JlZnVzZV9qdW1wbGVzc19lbXB0eV9tYXRjaGVzOiAtPlxuICAgICAgeyBHcmFtbWFyIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBnID0gbmV3IEdyYW1tYXIgeyBzdHJhdGVneTogJ2ZpcnN0JywgZW1pdF9zaWduYWxzOiBmYWxzZSwgfVxuICAgICAgICBnbmQgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnLCB9XG4gICAgICAgIGduZC5uZXdfdG9rZW4geyBuYW1lOiAnYScsIGZpdDogL2EvLCB9XG4gICAgICAgIGduZC5uZXdfdG9rZW4geyBuYW1lOiAnYicsIGZpdDogLyg/PWIpLywgfVxuICAgICAgICBAdGhyb3dzICggzqlpbHh0XzE2MiA9IC0+IGcuc2Nhbl90b19saXN0IFwiYWJcIiApLCAvZW5jb3VudGVyZWQgemVyby1sZW5ndGggbWF0Y2gvXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGcgPSBuZXcgR3JhbW1hciB7IHN0cmF0ZWd5OiAnbG9uZ2VzdCcsIGVtaXRfc2lnbmFsczogZmFsc2UsIH1cbiAgICAgICAgZ25kID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZ25kJywgfVxuICAgICAgICBnbmQubmV3X3Rva2VuIHsgbmFtZTogJ2EnLCBmaXQ6IC9hLywgfVxuICAgICAgICBnbmQubmV3X3Rva2VuIHsgbmFtZTogJ2InLCBmaXQ6IC8oPz1iKS8sIH1cbiAgICAgICAgQHRocm93cyAoIM6paWx4dF8xNjMgPSAtPiBnLnNjYW5fdG9fbGlzdCBcImFiXCIgKSwgL2VuY291bnRlcmVkIHplcm8tbGVuZ3RoIG1hdGNoL1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICAjIyMgV2UgYWNjZXB0IHRoZSBlbXB0eSBtYXRjaCBoZXJlIHNpbmNlIHdoaWxlIGl0IGRvZXMgZ2V0IHByb2R1Y2VkIGFzIGFuIGludGVybWVkaWF0ZSB2YWx1ZSB0byBmaW5kXG4gICAgICAgIHRoZSBsb25nZXN0IG1hdGNoLCBpdCBkb2VzIG5vdCBnZXQgcGFzc2VkIG9uIGFzIGEgcmVzdWx0aW5nIGxleGVtZS4gIyMjXG4gICAgICAgIGcgPSBuZXcgR3JhbW1hciB7IHN0cmF0ZWd5OiAnbG9uZ2VzdCcsIGVtaXRfc2lnbmFsczogZmFsc2UsIH1cbiAgICAgICAgZ25kID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZ25kJywgfVxuICAgICAgICBnbmQubmV3X3Rva2VuIHsgbmFtZTogJ2EnLCBmaXQ6IC9bYWJdLywgfVxuICAgICAgICBnbmQubmV3X3Rva2VuIHsgbmFtZTogJ2InLCBmaXQ6IC8oPz1iKS8sIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzE2NCA9IC0+IGNvbmRlbnNlX2xleGVtZXMgZy5zY2FuX3RvX2xpc3QgXCJhYlwiICksIFwiZ25kLmEnYSd8Z25kLmEnYidcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBsZXZlbHM6XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlsbGVnYWxfdG9fZGVjbGFyZV9qdW1wX3RvX3NhbWVfbGV2ZWw6IC0+XG4gICAgICB7IEdyYW1tYXIgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGcgICAgICAgPSBuZXcgR3JhbW1hcigpXG4gICAgICAgIGZpcnN0ICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdmaXJzdCcsIH1cbiAgICAgICAgQHRocm93cyAoIM6paWx4dF8xNjUgPSAtPiBmaXJzdC5uZXdfdG9rZW4geyBuYW1lOiAnZGlnaXQnLCBmaXQ6IC9bMC05XS8sIGp1bXA6ICdmaXJzdCcsICB9ICksIC9jYW5ub3QganVtcCB0byBzYW1lIGxldmVsL1xuICAgICAgICBAdGhyb3dzICggzqlpbHh0XzE2NiA9IC0+IGZpcnN0Lm5ld190b2tlbiB7IG5hbWU6ICdkaWdpdCcsIGZpdDogL1swLTldLywganVtcDogJ2ZpcnN0IScsIH0gKSwgL2Nhbm5vdCBqdW1wIHRvIHNhbWUgbGV2ZWwvXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHBhcnNlX2p1bXBzOiAtPlxuICAgICAgeyBUb2tlbiB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICAgICAoIM6paWx4dF8xNjcgPSAtPiBUb2tlbi5fcGFyc2VfanVtcCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBudWxsXG4gICAgICBAZXEgICAgICggzqlpbHh0XzE2OCA9IC0+IFRva2VuLl9wYXJzZV9qdW1wICcuLicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgc3BlYzogJy4uJywgICAgICAgY2Fycnk6IGZhbHNlLCBhY3Rpb246ICdiYWNrJywgdGFyZ2V0OiAnLi4nLCAgICAgIH1cbiAgICAgIEBlcSAgICAgKCDOqWlseHRfMTY5ID0gLT4gVG9rZW4uX3BhcnNlX2p1bXAgJ215bGV2ZWwnICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBzcGVjOiAnbXlsZXZlbCcsICBjYXJyeTogZmFsc2UsIGFjdGlvbjogJ2ZvcmUnLCB0YXJnZXQ6ICdteWxldmVsJywgfVxuICAgICAgQGVxICAgICAoIM6paWx4dF8xNzAgPSAtPiBUb2tlbi5fcGFyc2VfanVtcCAnLi4hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IHNwZWM6ICcuLiEnLCAgICAgIGNhcnJ5OiB0cnVlLCAgYWN0aW9uOiAnYmFjaycsIHRhcmdldDogJy4uJywgICAgICB9XG4gICAgICBAZXEgICAgICggzqlpbHh0XzE3MSA9IC0+IFRva2VuLl9wYXJzZV9qdW1wICdteWxldmVsIScgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgc3BlYzogJ215bGV2ZWwhJywgY2Fycnk6IHRydWUsICBhY3Rpb246ICdmb3JlJywgdGFyZ2V0OiAnbXlsZXZlbCcsIH1cbiAgICAgIEBlcSAgICAgKCDOqWlseHRfMTcyID0gLT4gVG9rZW4uX3BhcnNlX2p1bXAgJ215bGV2ZWwhJywgeyBuYW1lOiAnb3RoZXJsZXZlbCcsIH0gKSwgeyBzcGVjOiAnbXlsZXZlbCEnLCBjYXJyeTogdHJ1ZSwgIGFjdGlvbjogJ2ZvcmUnLCB0YXJnZXQ6ICdteWxldmVsJywgfVxuICAgICAgQHRocm93cyAoIM6paWx4dF8xNzMgPSAtPiBUb2tlbi5fcGFyc2VfanVtcCAnLi5dJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvZW5jb3VudGVyZWQgaWxsZWdhbCBqdW1wIHNwZWMvXG4gICAgICBAdGhyb3dzICggzqlpbHh0XzE3NCA9IC0+IFRva2VuLl9wYXJzZV9qdW1wICddLi4nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9lbmNvdW50ZXJlZCBpbGxlZ2FsIGp1bXAgc3BlYy9cbiAgICAgIEB0aHJvd3MgKCDOqWlseHRfMTc1ID0gLT4gVG9rZW4uX3BhcnNlX2p1bXAgJ1tteWxldmVsJyAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL2VuY291bnRlcmVkIGlsbGVnYWwganVtcCBzcGVjL1xuICAgICAgQHRocm93cyAoIM6paWx4dF8xNzYgPSAtPiBUb2tlbi5fcGFyc2VfanVtcCAnbXlsZXZlbFsnICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvZW5jb3VudGVyZWQgaWxsZWdhbCBqdW1wIHNwZWMvXG4gICAgICBAdGhyb3dzICggzqlpbHh0XzE3NyA9IC0+IFRva2VuLl9wYXJzZV9qdW1wICdteWxldmVsWycsIHsgbmFtZTogJ290aGVybGV2ZWwnLCB9ICksIC9lbmNvdW50ZXJlZCBpbGxlZ2FsIGp1bXAgc3BlYy9cbiAgICAgIEB0aHJvd3MgKCDOqWlseHRfMTc4ID0gLT4gVG9rZW4uX3BhcnNlX2p1bXAgJ1tteWxldmVsWycgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL2VuY291bnRlcmVkIGlsbGVnYWwganVtcCBzcGVjL1xuICAgICAgQHRocm93cyAoIM6paWx4dF8xNzkgPSAtPiBUb2tlbi5fcGFyc2VfanVtcCAnW215bGV2ZWxdJyAgICAgICAgICAgICAgICAgICAgICAgICApLCAvZW5jb3VudGVyZWQgaWxsZWdhbCBqdW1wIHNwZWMvXG4gICAgICBAdGhyb3dzICggzqlpbHh0XzE4MCA9IC0+IFRva2VuLl9wYXJzZV9qdW1wICddbXlsZXZlbCcgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9lbmNvdW50ZXJlZCBpbGxlZ2FsIGp1bXAgc3BlYy9cbiAgICAgIEB0aHJvd3MgKCDOqWlseHRfMTgxID0gLT4gVG9rZW4uX3BhcnNlX2p1bXAgJ1suLicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL2VuY291bnRlcmVkIGlsbGVnYWwganVtcCBzcGVjL1xuICAgICAgQHRocm93cyAoIM6paWx4dF8xODIgPSAtPiBUb2tlbi5fcGFyc2VfanVtcCAnWy4uXScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvZW5jb3VudGVyZWQgaWxsZWdhbCBqdW1wIHNwZWMvXG4gICAgICBAdGhyb3dzICggzqlpbHh0XzE4MyA9IC0+IFRva2VuLl9wYXJzZV9qdW1wICcuLlsnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9lbmNvdW50ZXJlZCBpbGxlZ2FsIGp1bXAgc3BlYy9cbiAgICAgIEB0aHJvd3MgKCDOqWlseHRfMTg0ID0gLT4gVG9rZW4uX3BhcnNlX2p1bXAgJ1suLi4nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL2VuY291bnRlcmVkIGlsbGVnYWwganVtcCBzcGVjL1xuICAgICAgQHRocm93cyAoIM6paWx4dF8xODUgPSAtPiBUb2tlbi5fcGFyc2VfanVtcCAnLi4uJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvZW5jb3VudGVyZWQgaWxsZWdhbCBqdW1wIHNwZWMvXG4gICAgICBAdGhyb3dzICggzqlpbHh0XzE4NiA9IC0+IFRva2VuLl9wYXJzZV9qdW1wICclJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9lbmNvdW50ZXJlZCBpbGxlZ2FsIGp1bXAgc3BlYy9cbiAgICAgIEB0aHJvd3MgKCDOqWlseHRfMTg3ID0gLT4gVG9rZW4uX3BhcnNlX2p1bXAgJ215LW5hbWUnICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL2VuY291bnRlcmVkIGlsbGVnYWwganVtcCBzcGVjL1xuICAgICAgQHRocm93cyAoIM6paWx4dF8xODggPSAtPiBUb2tlbi5fcGFyc2VfanVtcCAnbXlsZXZlbCcsICB7IG5hbWU6ICdteWxldmVsJywgfSAgICApLCAvY2Fubm90IGp1bXAgdG8gc2FtZSBsZXZlbC9cbiAgICAgIEB0aHJvd3MgKCDOqWlseHRfMTg5ID0gLT4gVG9rZW4uX3BhcnNlX2p1bXAgJ215bGV2ZWwhJywgeyBuYW1lOiAnbXlsZXZlbCcsIH0gICAgKSwgL2Nhbm5vdCBqdW1wIHRvIHNhbWUgbGV2ZWwvXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNhbl9zZXRfbGV4ZW1lX2xldmVsOiAtPlxuICAgICAgeyBHcmFtbWFyXG4gICAgICAgIFRva2VuXG4gICAgICAgIExleGVtZSB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZyAgICAgICA9IG5ldyBHcmFtbWFyIHsgZW1pdF9zaWduYWxzOiBmYWxzZSwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGZpcnN0ICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdmaXJzdCcsIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuICAgeyBuYW1lOiAnZGlnaXQnLCAgICAgIGZpdDogL1swLTldLywgICAgIGp1bXA6ICdudW1iZXInLCAgIH1cbiAgICAgICAgZmlyc3QubmV3X3Rva2VuICAgeyBuYW1lOiAnb3RoZXInLCAgICAgIGZpdDogL1teMC05XSsvLCAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBudW1iZXIgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnbnVtYmVyJywgfVxuICAgICAgICBudW1iZXIubmV3X3Rva2VuICB7IG5hbWU6ICdkaWdpdHMnLCAgICAgZml0OiAvWzAtOV0rLywgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBudW1iZXIubmV3X3Rva2VuICB7IG5hbWU6ICdvdGhlcicsICAgICAgZml0OiAvW14wLTldLywgICAganVtcDogJy4uJywgICAgICAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFsgbGV4ZW1lLCBdID0gZy5zY2FuX3RvX2xpc3QgJzUnXG4gICAgICAgIEBlcSAoIM6paWx4dF8xOTAgPSAtPiBsZXhlbWUgaW5zdGFuY2VvZiBMZXhlbWUgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqWlseHRfMTkxID0gLT4gbGV4ZW1lLnRva2VuIGluc3RhbmNlb2YgVG9rZW4gICksIHRydWVcbiAgICAgICAgQGVxICggzqlpbHh0XzE5MiA9IC0+IGxleGVtZS5uYW1lICAgICAgICAgICAgICAgICAgICApLCAnZGlnaXQnXG4gICAgICAgIEBlcSAoIM6paWx4dF8xOTMgPSAtPiBsZXhlbWUubGV2ZWwubmFtZSAgICAgICAgICAgICAgKSwgJ2ZpcnN0J1xuICAgICAgICBAZXEgKCDOqWlseHRfMTk0ID0gLT4gbGV4ZW1lLmZxbmFtZSAgICAgICAgICAgICAgICAgICksICdmaXJzdC5kaWdpdCdcbiAgICAgICAgbGV4ZW1lLnNldF9sZXZlbCBudW1iZXJcbiAgICAgICAgQGVxICggzqlpbHh0XzE5NSA9IC0+IGxleGVtZSBpbnN0YW5jZW9mIExleGVtZSAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAoIM6paWx4dF8xOTYgPSAtPiBsZXhlbWUudG9rZW4gaW5zdGFuY2VvZiBUb2tlbiAgKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqWlseHRfMTk3ID0gLT4gbGV4ZW1lLm5hbWUgICAgICAgICAgICAgICAgICAgICksICdkaWdpdCdcbiAgICAgICAgQGVxICggzqlpbHh0XzE5OCA9IC0+IGxleGVtZS5sZXZlbC5uYW1lICAgICAgICAgICAgICApLCAnbnVtYmVyJ1xuICAgICAgICBAZXEgKCDOqWlseHRfMTk5ID0gLT4gbGV4ZW1lLmZxbmFtZSAgICAgICAgICAgICAgICAgICksICdudW1iZXIuZGlnaXQnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNhcnJ5aW5nX2FuZF9zdGlja2luZ19qdW1wczogLT5cbiAgICAgIHsgR3JhbW1hciB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgIGdfY2ZnID0geyBlbWl0X3NpZ25hbHM6IGZhbHNlLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgICMjIyBmb3JlanVtcCBjYXJyaWVzLCBiYWNranVtcCBzdGlja3MgIyMjXG4gICAgICAgIGcgPSBuZXcgR3JhbW1hciBnX2NmZ1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGZpcnN0ICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2ZpcnN0JywgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4gICAgIHsgbmFtZTogJ290aGVyJywgICAgICBmaXQ6IC9bXlwiXSsvLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4gICAgIHsgbmFtZTogJ2RxJywgICAgICAgICBmaXQ6IC9cIi8sICAgICAgICAgICAgIGp1bXA6ICdkcXN0cmluZyEnLCAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGRxc3RyaW5nICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2Rxc3RyaW5nJywgfVxuICAgICAgICBkcXN0cmluZy5uZXdfdG9rZW4gIHsgbmFtZTogJ290aGVyJywgICAgICBmaXQ6IC9bXlwiXSsvLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBkcXN0cmluZy5uZXdfdG9rZW4gIHsgbmFtZTogJ2RxJywgICAgICAgICBmaXQ6IC9cIi8sICAgICAgICAgICAgIGp1bXA6ICcuLicgICAgICAgICAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6paWx4dF8yMDAgPSAtPiBmaXJzdC50b2tlbnMuZHEubmFtZSAgICAgKSwgJ2RxJ1xuICAgICAgICBAZXEgKCDOqWlseHRfMjAxID0gLT4gZmlyc3QudG9rZW5zLmRxLmp1bXAgICAgICksIHsgc3BlYzogJ2Rxc3RyaW5nIScsIGNhcnJ5OiB0cnVlLCBhY3Rpb246ICdmb3JlJywgdGFyZ2V0OiAnZHFzdHJpbmcnLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8yMDIgPSAtPiBkcXN0cmluZy50b2tlbnMuZHEubmFtZSAgKSwgJ2RxJ1xuICAgICAgICBAZXEgKCDOqWlseHRfMjAzID0gLT4gZHFzdHJpbmcudG9rZW5zLmRxLmp1bXAgICksIHsgc3BlYzogJy4uJywgY2Fycnk6IGZhbHNlLCBhY3Rpb246ICdiYWNrJywgdGFyZ2V0OiAnLi4nLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgbGV4ZW1lcyA9IGcuc2NhbiAnQm9iIHNhaWQgXCJ3b3dcIi4nXG4gICAgICAgIEBlcSAoIM6paWx4dF8yMDQgPSAtPiBhYmJybHhtIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZmlyc3Qub3RoZXInLCAgICBoaXQ6ICdCb2Igc2FpZCAnLCAgcG9zOiAnMTowOjknLCAgIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzIwNSA9IC0+IGFiYnJseG0gbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdkcXN0cmluZy5kcScsICAgIGhpdDogJ1wiJywgICAgICAgICAgcG9zOiAnMTo5OjEwJywgIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzIwNiA9IC0+IGFiYnJseG0gbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdkcXN0cmluZy5vdGhlcicsIGhpdDogJ3dvdycsICAgICAgICBwb3M6ICcxOjEwOjEzJywgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMjA3ID0gLT4gYWJicmx4bSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2Rxc3RyaW5nLmRxJywgICAgaGl0OiAnXCInLCAgICAgICAgICBwb3M6ICcxOjEzOjE0JywgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMjA4ID0gLT4gYWJicmx4bSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2ZpcnN0Lm90aGVyJywgICAgaGl0OiAnLicsICAgICAgICAgIHBvczogJzE6MTQ6MTUnLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8yMDkgPSAtPiBsZXhlbWVzLm5leHQoKS5kb25lICApLCB0cnVlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgICMjIyBmb3JlanVtcCBzdGlja3MsIGJhY2tqdW1wIGNhcnJpZXMgIyMjXG4gICAgICAgIGcgPSBuZXcgR3JhbW1hciBnX2NmZ1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGZpcnN0ICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2ZpcnN0JywgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4gICAgIHsgbmFtZTogJ290aGVyJywgICAgICBmaXQ6IC9bXlwiXSsvLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBmaXJzdC5uZXdfdG9rZW4gICAgIHsgbmFtZTogJ2RxJywgICAgICAgICBmaXQ6IC9cIi8sICAgICAgICAgICAgIGp1bXA6ICdkcXN0cmluZycsICAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGRxc3RyaW5nICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2Rxc3RyaW5nJywgfVxuICAgICAgICBkcXN0cmluZy5uZXdfdG9rZW4gIHsgbmFtZTogJ290aGVyJywgICAgICBmaXQ6IC9bXlwiXSsvLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBkcXN0cmluZy5uZXdfdG9rZW4gIHsgbmFtZTogJ2RxJywgICAgICAgICBmaXQ6IC9cIi8sICAgICAgICAgICAgIGp1bXA6ICcuLiEnICAgICAgICAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6paWx4dF8yMTAgPSAtPiBmaXJzdC50b2tlbnMuZHEubmFtZSAgICAgKSwgJ2RxJ1xuICAgICAgICBAZXEgKCDOqWlseHRfMjExID0gLT4gZmlyc3QudG9rZW5zLmRxLmp1bXAgICAgICksIHsgc3BlYzogJ2Rxc3RyaW5nJywgY2Fycnk6IGZhbHNlLCBhY3Rpb246ICdmb3JlJywgdGFyZ2V0OiAnZHFzdHJpbmcnLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8yMTIgPSAtPiBkcXN0cmluZy50b2tlbnMuZHEubmFtZSAgKSwgJ2RxJ1xuICAgICAgICBAZXEgKCDOqWlseHRfMjEzID0gLT4gZHFzdHJpbmcudG9rZW5zLmRxLmp1bXAgICksIHsgc3BlYzogJy4uIScsIGNhcnJ5OiB0cnVlLCBhY3Rpb246ICdiYWNrJywgdGFyZ2V0OiAnLi4nLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgbGV4ZW1lcyA9IGcuc2NhbiAnQm9iIHNhaWQgXCJ3b3dcIi4nXG4gICAgICAgIEBlcSAoIM6paWx4dF8yMTQgPSAtPiBhYmJybHhtIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZmlyc3Qub3RoZXInLCAgICBoaXQ6ICdCb2Igc2FpZCAnLCBwb3M6ICcxOjA6OScsICAgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMjE1ID0gLT4gYWJicmx4bSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2ZpcnN0LmRxJywgICAgICAgaGl0OiAnXCInLCAgICAgICAgIHBvczogJzE6OToxMCcsICB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8yMTYgPSAtPiBhYmJybHhtIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZHFzdHJpbmcub3RoZXInLCBoaXQ6ICd3b3cnLCAgICAgICBwb3M6ICcxOjEwOjEzJywgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMjE3ID0gLT4gYWJicmx4bSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2ZpcnN0LmRxJywgICAgICAgaGl0OiAnXCInLCAgICAgICAgIHBvczogJzE6MTM6MTQnLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8yMTggPSAtPiBhYmJybHhtIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZmlyc3Qub3RoZXInLCAgICBoaXQ6ICcuJywgICAgICAgICBwb3M6ICcxOjE0OjE1JywgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMjE5ID0gLT4gbGV4ZW1lcy5uZXh0KCkuZG9uZSAgKSwgdHJ1ZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICAjIyMgZm9yZWp1bXAgY2FycmllcywgYmFja2p1bXAgY2FycmllcyAjIyNcbiAgICAgICAgZyA9IG5ldyBHcmFtbWFyIGdfY2ZnXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZmlyc3QgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZmlyc3QnLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiAgICAgeyBuYW1lOiAnb3RoZXInLCAgICAgIGZpdDogL1teXCJdKy8sICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiAgICAgeyBuYW1lOiAnZHEnLCAgICAgICAgIGZpdDogL1wiLywgICAgICAgICAgICAganVtcDogJ2Rxc3RyaW5nIScsICB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZHFzdHJpbmcgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZHFzdHJpbmcnLCB9XG4gICAgICAgIGRxc3RyaW5nLm5ld190b2tlbiAgeyBuYW1lOiAnb3RoZXInLCAgICAgIGZpdDogL1teXCJdKy8sICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIGRxc3RyaW5nLm5ld190b2tlbiAgeyBuYW1lOiAnZHEnLCAgICAgICAgIGZpdDogL1wiLywgICAgICAgICAgICAganVtcDogJy4uIScgICAgICAgICB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlpbHh0XzIyMCA9IC0+IGZpcnN0LnRva2Vucy5kcS5uYW1lICAgICApLCAnZHEnXG4gICAgICAgIEBlcSAoIM6paWx4dF8yMjEgPSAtPiBmaXJzdC50b2tlbnMuZHEuanVtcCAgICAgKSwgeyBzcGVjOiAnZHFzdHJpbmchJywgY2Fycnk6IHRydWUsIGFjdGlvbjogJ2ZvcmUnLCB0YXJnZXQ6ICdkcXN0cmluZycsIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzIyMiA9IC0+IGRxc3RyaW5nLnRva2Vucy5kcS5uYW1lICApLCAnZHEnXG4gICAgICAgIEBlcSAoIM6paWx4dF8yMjMgPSAtPiBkcXN0cmluZy50b2tlbnMuZHEuanVtcCAgKSwgeyBzcGVjOiAnLi4hJywgY2Fycnk6IHRydWUsIGFjdGlvbjogJ2JhY2snLCB0YXJnZXQ6ICcuLicsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBsZXhlbWVzID0gZy5zY2FuICdCb2Igc2FpZCBcIndvd1wiLidcbiAgICAgICAgQGVxICggzqlpbHh0XzIyNCA9IC0+IGFiYnJseG0gbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdmaXJzdC5vdGhlcicsICAgIGhpdDogJ0JvYiBzYWlkICcsIHBvczogJzE6MDo5JywgICB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8yMjUgPSAtPiBhYmJybHhtIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZHFzdHJpbmcuZHEnLCAgICBoaXQ6ICdcIicsICAgICAgICAgcG9zOiAnMTo5OjEwJywgIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzIyNiA9IC0+IGFiYnJseG0gbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdkcXN0cmluZy5vdGhlcicsIGhpdDogJ3dvdycsICAgICAgIHBvczogJzE6MTA6MTMnLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8yMjcgPSAtPiBhYmJybHhtIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZmlyc3QuZHEnLCAgICAgICBoaXQ6ICdcIicsICAgICAgICAgcG9zOiAnMToxMzoxNCcsIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzIyOCA9IC0+IGFiYnJseG0gbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdmaXJzdC5vdGhlcicsICAgIGhpdDogJy4nLCAgICAgICAgIHBvczogJzE6MTQ6MTUnLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8yMjkgPSAtPiBsZXhlbWVzLm5leHQoKS5kb25lICApLCB0cnVlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgICMjIyBmb3JlanVtcCBzdGlja3MsIGJhY2tqdW1wIHN0aWNrcyAjIyNcbiAgICAgICAgZyA9IG5ldyBHcmFtbWFyIGdfY2ZnXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZmlyc3QgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZmlyc3QnLCB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiAgICAgeyBuYW1lOiAnb3RoZXInLCAgICAgIGZpdDogL1teXCJdKy8sICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIGZpcnN0Lm5ld190b2tlbiAgICAgeyBuYW1lOiAnZHEnLCAgICAgICAgIGZpdDogL1wiLywgICAgICAgICAgICAganVtcDogJ2Rxc3RyaW5nJywgICB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZHFzdHJpbmcgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZHFzdHJpbmcnLCB9XG4gICAgICAgIGRxc3RyaW5nLm5ld190b2tlbiAgeyBuYW1lOiAnb3RoZXInLCAgICAgIGZpdDogL1teXCJdKy8sICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIGRxc3RyaW5nLm5ld190b2tlbiAgeyBuYW1lOiAnZHEnLCAgICAgICAgIGZpdDogL1wiLywgICAgICAgICAgICAganVtcDogJy4uJyAgICAgICAgICB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlpbHh0XzIzMCA9IC0+IGZpcnN0LnRva2Vucy5kcS5uYW1lICAgICApLCAnZHEnXG4gICAgICAgIEBlcSAoIM6paWx4dF8yMzEgPSAtPiBmaXJzdC50b2tlbnMuZHEuanVtcCAgICAgKSwgeyBzcGVjOiAnZHFzdHJpbmcnLCBjYXJyeTogZmFsc2UsIGFjdGlvbjogJ2ZvcmUnLCB0YXJnZXQ6ICdkcXN0cmluZycsIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzIzMiA9IC0+IGRxc3RyaW5nLnRva2Vucy5kcS5uYW1lICApLCAnZHEnXG4gICAgICAgIEBlcSAoIM6paWx4dF8yMzMgPSAtPiBkcXN0cmluZy50b2tlbnMuZHEuanVtcCAgKSwgeyBzcGVjOiAnLi4nLCBjYXJyeTogZmFsc2UsIGFjdGlvbjogJ2JhY2snLCB0YXJnZXQ6ICcuLicsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBsZXhlbWVzID0gZy5zY2FuICdCb2Igc2FpZCBcIndvd1wiLidcbiAgICAgICAgQGVxICggzqlpbHh0XzIzNCA9IC0+IGFiYnJseG0gbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdmaXJzdC5vdGhlcicsICAgIGhpdDogJ0JvYiBzYWlkICcsIHBvczogJzE6MDo5JywgICB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8yMzUgPSAtPiBhYmJybHhtIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZmlyc3QuZHEnLCAgICAgICBoaXQ6ICdcIicsICAgICAgICAgcG9zOiAnMTo5OjEwJywgIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzIzNiA9IC0+IGFiYnJseG0gbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdkcXN0cmluZy5vdGhlcicsIGhpdDogJ3dvdycsICAgICAgIHBvczogJzE6MTA6MTMnLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8yMzcgPSAtPiBhYmJybHhtIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZHFzdHJpbmcuZHEnLCAgICBoaXQ6ICdcIicsICAgICAgICAgcG9zOiAnMToxMzoxNCcsIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzIzOCA9IC0+IGFiYnJseG0gbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdmaXJzdC5vdGhlcicsICAgIGhpdDogJy4nLCAgICAgICAgIHBvczogJzE6MTQ6MTUnLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8yMzkgPSAtPiBsZXhlbWVzLm5leHQoKS5kb25lICApLCB0cnVlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNhbl91c2VfemVyb19sZW5ndGhfbWF0Y2hlcnNfd2l0aF9qdW1wczogLT5cbiAgICAgIHsgR3JhbW1hclxuICAgICAgICByeCAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgICBbIFwiQWxpY2UgaGFzIDQzMSBvd2xzXCIsIHsgbGVuZ3RoOiA4LCBjb25kZW5zZWQ6IFwiZ25kLmxldHRlcnMnQWxpY2UnfGduZC53cycgJ3xnbmQubGV0dGVycydoYXMnfGduZC53cycgJ3xnbmQuYmVmb3JlX2RpZ2l0cycnfG51bWJlci5kaWdpdHMnNDMxJ3xnbmQud3MnICd8Z25kLmxldHRlcnMnb3dscydcIiwgfSwgXVxuICAgICAgICBbIFwiOTlrZ1wiLCAgICAgICAgICAgICAgIHsgbGVuZ3RoOiAzLCBjb25kZW5zZWQ6IFwiZ25kLmJlZm9yZV9kaWdpdHMnJ3xudW1iZXIuZGlnaXRzJzk5J3xnbmQubGV0dGVycydrZydcIiwgfSwgXVxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHRlc3QgPSAoIGcgKSA9PlxuICAgICAgICBmb3IgWyBwcm9iZSwgZml0LCBdIGZyb20gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICAgIGcucmVzZXRfbG5yKClcbiAgICAgICAgICBsZXhlbWVzID0gZy5zY2FuX3RvX2xpc3QgcHJvYmVcbiAgICAgICAgICBAZXEgKCDOqWlseHRfMjQwID0gLT4gY29uZGVuc2VfbGV4ZW1lcyBsZXhlbWVzICksIGZpdC5jb25kZW5zZWRcbiAgICAgICAgICBAZXEgKCDOqWlseHRfMjQxID0gLT4gbGV4ZW1lcy5sZW5ndGggKSwgZml0Lmxlbmd0aFxuICAgICAgICAgIGcucmVzZXRfbG5yKClcbiAgICAgICAgICBAZXEgKCDOqWlseHRfMjQyID0gLT4gWyAoIGcuc2NhbiBwcm9iZSApLi4uLCBdICksIGxleGVtZXNcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgZG8gPT5cbiAgICAgICAgZyAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBuYW1lOiAnZycsIGVtaXRfc2lnbmFsczogZmFsc2UsIH1cbiAgICAgICAgZ25kICAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZ25kJywgfVxuICAgICAgICBudW1iZXIgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdudW1iZXInLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgeyBuYW1lOiAnbGV0dGVycycsICAgICAgICAgIGZpdDogL1thLXpdKy9pLCAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIGduZC5uZXdfdG9rZW4gICAgIHsgbmFtZTogJ2JlZm9yZV9kaWdpdHMnLCAgICBmaXQ6IC8oPz1bMC05XSkvaSwgIGp1bXA6ICdudW1iZXInLCAgfVxuICAgICAgICBnbmQubmV3X3Rva2VuICAgICB7IG5hbWU6ICd3cycsICAgICAgICAgICAgICAgZml0OiAvXFxzKy9pLCAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgbnVtYmVyLm5ld190b2tlbiAgeyBuYW1lOiAnZGlnaXRzJywgICAgICAgICAgIGZpdDogL1swLTldKy9pLCAgICAganVtcDogJy4uJywgICAgICB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgdGVzdCBnXG4gICAgICAgIHNvdXJjZSA9IHByb2Jlc19hbmRfbWF0Y2hlcnNbIDAgXVsgMCBdXG4gICAgICAgIGluZm8gJ86paWx4dF8yNDMnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyB0YWJ1bGF0ZV9sZXhlbWVzIGcuc2NhbiBzb3VyY2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY2FuX3VzZV96ZXJvX2xlbmd0aF9tYXRjaGVyc193aXRoX2p1bXBzXzI6IC0+XG4gICAgICB7IEdyYW1tYXJcbiAgICAgICAgcnggICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgZG8gPT5cbiAgICAgICAgZyAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBuYW1lOiAnZycsIGVtaXRfc2lnbmFsczogZmFsc2UsIH1cbiAgICAgICAgZ25kICAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZ25kJywgfVxuICAgICAgICBudW1iZXIgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdudW1iZXInLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgeyBuYW1lOiAnbGV0dGVycycsICAgICAgICAgIGZpdDogIC9bYS16QS1aXSsvLCAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIGduZC5uZXdfdG9rZW4gICAgIHsgbmFtZTogJ2JlZm9yZV9kaWdpdHMnLCAgICBmaXQ6ICAvKD89WzAtOV0pLywgIGp1bXA6ICdudW1iZXInLCAgfVxuICAgICAgICBnbmQubmV3X3Rva2VuICAgICB7IG5hbWU6ICd3cycsICAgICAgICAgICAgICAgZml0OiAgL1xccysvLCAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgbnVtYmVyLm5ld190b2tlbiAgeyBuYW1lOiAnaW50ZWdlcicsICAgICAgICAgIGZpdDogIC9bMC05XSsvLCAgICAgICAgICAgfVxuICAgICAgICBudW1iZXIubmV3X3Rva2VuICB7IG5hbWU6ICd1bml0JywgICAgICAgICAgICAgZml0OiAgL1thLXpBLVpdKy8sICAgICBqdW1wOiAnLi4nLCAgICAgIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzb3VyY2UgPSBcIjk5a2cyM21tXCJcbiAgICAgICAgaW5mbyAnzqlpbHh0XzI0NCcsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlXG4gICAgICAgIEBlcSAoIM6paWx4dF8yNDUgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5iZWZvcmVfZGlnaXRzJywgaGl0OiAnJywgICBwb3M6ICcxOjA6MCcsIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzI0NiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnbnVtYmVyLmludGVnZXInLCAgICBoaXQ6ICc5OScsIHBvczogJzE6MDoyJywgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMjQ3ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdudW1iZXIudW5pdCcsICAgICAgIGhpdDogJ2tnJywgcG9zOiAnMToyOjQnLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8yNDggPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5iZWZvcmVfZGlnaXRzJywgaGl0OiAnJywgICBwb3M6ICcxOjQ6NCcsIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzI0OSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnbnVtYmVyLmludGVnZXInLCAgICBoaXQ6ICcyMycsIHBvczogJzE6NDo2JywgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMjUwID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdudW1iZXIudW5pdCcsICAgICAgIGhpdDogJ21tJywgcG9zOiAnMTo2OjgnLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8yNTEgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGR1cGxpY2F0ZV90b2tlbl9uYW1lc19hcmVfZm9yYmlkZGVuOiAtPlxuICAgICAgeyBHcmFtbWFyXG4gICAgICAgIFRva2VuXG4gICAgICAgIHJ4ICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGRvID0+XG4gICAgICAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgbmFtZTogJ2cnLCBlbWl0X3NpZ25hbHM6IGZhbHNlLCB9XG4gICAgICAgIGduZCAgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2duZCcsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgICAgICggzqlpbHh0XzI1MiA9IC0+ICggZ25kLm5ld190b2tlbiB7IG5hbWU6ICdsZXR0ZXJzJywgZml0OiAgL1thLXpdKy8sIH0gKSBpbnN0YW5jZW9mIFRva2VuICksIHRydWVcbiAgICAgICAgQHRocm93cyAoIM6paWx4dF8yNTMgPSAtPiAgIGduZC5uZXdfdG9rZW4geyBuYW1lOiAnbGV0dGVycycsIGZpdDogIC9bQS1aXSsvLCB9ICksIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHN0YWNrOiAtPlxuICAgIExldmVsc3RhY2sgPSAoIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnICkuaW50ZXJuYWxzLkxldmVsc3RhY2tcbiAgICBkbyA9PlxuICAgICAgc3RhY2sgPSBuZXcgTGV2ZWxzdGFjaygpXG4gICAgICBAZXEgICAgICggzqlpbHh0XzI1NCA9IC0+IHN0YWNrLmlzX2VtcHR5ICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIHN0YWNrLnB1c2ggeyBuYW1lOiAnMScsIH1cbiAgICAgIEBlcSAgICAgKCDOqWlseHRfMjU1ID0gLT4gc3RhY2subGVuZ3RoICAgICAgICAgICAgICAgICAgICAgKSwgMVxuICAgICAgQGVxICAgICAoIM6paWx4dF8yNTYgPSAtPiBzdGFjay5wZWVrKCkgICAgICAgICAgICAgICAgICAgICApLCB7IG5hbWU6ICcxJywgfVxuICAgICAgQGVxICAgICAoIM6paWx4dF8yNTcgPSAtPiBzdGFjay5wb3AoKSAgICAgICAgICAgICAgICAgICAgICApLCB7IG5hbWU6ICcxJywgfVxuICAgICAgQGVxICAgICAoIM6paWx4dF8yNTggPSAtPiBzdGFjay5sZW5ndGggICAgICAgICAgICAgICAgICAgICApLCAwXG4gICAgZG8gPT5cbiAgICAgIHN0YWNrID0gbmV3IExldmVsc3RhY2sgeyBuYW1lOiAnMScsIH1cbiAgICAgIEBlcSAgICAgKCDOqWlseHRfMjU5ID0gLT4gc3RhY2subGVuZ3RoICAgICAgICAgICAgICAgICAgICAgKSwgMVxuICAgICAgQGVxICAgICAoIM6paWx4dF8yNjAgPSAtPiBzdGFjay5wZWVrKCkgICAgICAgICAgICAgICAgICAgICApLCB7IG5hbWU6ICcxJywgfVxuICAgICAgQGVxICAgICAoIM6paWx4dF8yNjEgPSAtPiBzdGFjay5wb3AoKSAgICAgICAgICAgICAgICAgICAgICApLCB7IG5hbWU6ICcxJywgfVxuICAgICAgQGVxICAgICAoIM6paWx4dF8yNjIgPSAtPiBzdGFjay5sZW5ndGggICAgICAgICAgICAgICAgICAgICApLCAwXG4gICAgZG8gPT5cbiAgICAgIHN0YWNrID0gbmV3IExldmVsc3RhY2sgeyBuYW1lOiAnMScsIH0sIHsgbmFtZTogJzInLCB9XG4gICAgICBAZXEgICAgICggzqlpbHh0XzI2MyA9IC0+IHN0YWNrLmxlbmd0aCAgICAgICAgICAgICAgICAgICAgICksIDJcbiAgICAgIEBlcSAgICAgKCDOqWlseHRfMjY0ID0gLT4gc3RhY2sucGVlaygpICAgICAgICAgICAgICAgICAgICAgKSwgeyBuYW1lOiAnMicsIH1cbiAgICAgIEBlcSAgICAgKCDOqWlseHRfMjY1ID0gLT4gc3RhY2sucG9wbnBlZWsoKSAgICAgICAgICAgICAgICAgKSwgeyBuYW1lOiAnMScsIH1cbiAgICAgIEBlcSAgICAgKCDOqWlseHRfMjY2ID0gLT4gc3RhY2subGVuZ3RoICAgICAgICAgICAgICAgICAgICAgKSwgMVxuICAgICAgQGVxICAgICAoIM6paWx4dF8yNjcgPSAtPiBzdGFjay5wZWVrKCkgICAgICAgICAgICAgICAgICAgICApLCB7IG5hbWU6ICcxJywgfVxuICAgICAgQGVxICAgICAoIM6paWx4dF8yNjggPSAtPiBzdGFjay5wb3AoKSAgICAgICAgICAgICAgICAgICAgICApLCB7IG5hbWU6ICcxJywgfVxuICAgICAgQGVxICAgICAoIM6paWx4dF8yNjkgPSAtPiBzdGFjay5sZW5ndGggICAgICAgICAgICAgICAgICAgICApLCAwXG4gICAgZG8gPT5cbiAgICAgIHN0YWNrID0gbmV3IExldmVsc3RhY2sgeyBuYW1lOiAnMScsIH0sIHsgbmFtZTogJzInLCB9XG4gICAgICBAZXEgICAgICggzqlpbHh0XzI3MCA9IC0+IHN0YWNrLmxlbmd0aCAgICAgICAgICAgICAgICAgICAgICksIDJcbiAgICAgICMgQGVxICAgICAoIM6paWx4dF8yNzEgPSAtPiBzdGFjay5wZWVrX25hbWUoKSAgICAgICAgICAgICAgICApLCAnMidcbiAgICAgICMgQGVxICAgICAoIM6paWx4dF8yNzIgPSAtPiBzdGFjay5wb3BucGVla19uYW1lKCkgICAgICAgICAgICApLCAnMSdcbiAgICAgIHN0YWNrLnBvcCgpXG4gICAgICBAZXEgICAgICggzqlpbHh0XzI3MyA9IC0+IHN0YWNrLmxlbmd0aCAgICAgICAgICAgICAgICAgICAgICksIDFcbiAgICAgIEBlcSAgICAgKCDOqWlseHRfMjc0ID0gLT4gc3RhY2suaXNfZW1wdHkgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICMgQGVxICAgICAoIM6paWx4dF8yNzUgPSAtPiBzdGFjay5wZWVrX25hbWUoKSAgICAgICAgICAgICAgICApLCAnMSdcbiAgICAgIEBlcSAgICAgKCDOqWlseHRfMjc2ID0gLT4gc3RhY2sucG9wX25hbWUoKSAgICAgICAgICAgICAgICAgKSwgJzEnXG4gICAgICBAZXEgICAgICggzqlpbHh0XzI3NyA9IC0+IHN0YWNrLmxlbmd0aCAgICAgICAgICAgICAgICAgICAgICksIDBcbiAgICAgIEBlcSAgICAgKCDOqWlseHRfMjc4ID0gLT4gc3RhY2suaXNfZW1wdHkgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgIGRvID0+XG4gICAgICBzdGFjayA9IG5ldyBMZXZlbHN0YWNrIHsgbmFtZTogJzEnLCB9LCB7IG5hbWU6ICcyJywgfVxuICAgICAgQGVxICAgICAoIM6paWx4dF8yNzkgPSAtPiBzdGFjay5wb3AoKSAgICAgICAgICAgICAgICAgICAgICApLCB7IG5hbWU6ICcyJywgfVxuICAgICAgQGVxICAgICAoIM6paWx4dF8yODAgPSAtPiBzdGFjay5pc19lbXB0eSAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICAgICAoIM6paWx4dF8yODEgPSAtPiBzdGFjay5wb3AoKSAgICAgICAgICAgICAgICAgICAgICApLCB7IG5hbWU6ICcxJywgfVxuICAgICAgQGVxICAgICAoIM6paWx4dF8yODIgPSAtPiBzdGFjay5pc19lbXB0eSAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAdGhyb3dzICggzqlpbHh0XzI4MyA9IC0+IHN0YWNrLnBvcCgpICAgICAgICAgICAgICAgICAgICAgICksIC9zdGFjayBpcyBlbXB0eS9cbiAgICAgIEB0aHJvd3MgKCDOqWlseHRfMjg0ID0gLT4gc3RhY2sucG9wbnBlZWsoKSAgICAgICAgICAgICAgICAgKSwgL3N0YWNrIGlzIGVtcHR5L1xuICAgICAgQHRocm93cyAoIM6paWx4dF8yODUgPSAtPiBzdGFjay5wb3BfbmFtZSgpICAgICAgICAgICAgICAgICApLCAvc3RhY2sgaXMgZW1wdHkvXG4gICAgICAjIEB0aHJvd3MgKCDOqWlseHRfMjg2ID0gLT4gc3RhY2sucG9wbnBlZWtfbmFtZSgpICAgICAgICAgICAgKSwgL3N0YWNrIGlzIGVtcHR5L1xuICAgICAgQGVxICAgICAoIM6paWx4dF8yODcgPSAtPiBzdGFjay5wb3AgICAgICAgICAgICAnZmFsbGJhY2snICApLCAnZmFsbGJhY2snXG4gICAgICBAZXEgICAgICggzqlpbHh0XzI4OCA9IC0+IHN0YWNrLnBvcG5wZWVrICAgICAgICdmYWxsYmFjaycgICksICdmYWxsYmFjaydcbiAgICAgIEBlcSAgICAgKCDOqWlseHRfMjg5ID0gLT4gc3RhY2sucG9wX25hbWUgICAgICAgJ2ZhbGxiYWNrJyAgKSwgJ2ZhbGxiYWNrJ1xuICAgICAgIyBAZXEgICAgICggzqlpbHh0XzI5MCA9IC0+IHN0YWNrLnBvcG5wZWVrX25hbWUgICdmYWxsYmFjaycgICksICdmYWxsYmFjaydcbiAgICByZXR1cm4gbnVsbFxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgbGV4ZW1lX21lcmdpbmc6XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG5vX21lcmdpbmc6IC0+XG4gICAgICB7IEdyYW1tYXJcbiAgICAgICAgcnggICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgZyAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBuYW1lOiAnZycsIGVtaXRfc2lnbmFsczogZmFsc2UsIH1cbiAgICAgIHRleHQgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ3RleHQnLCB9XG4gICAgICBudW1iZXIgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdudW1iZXInLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHRleHQubmV3X3Rva2VuICAgIHsgbmFtZTogJ3RleHQnLCAgICAgICAgIGZpdDogLy8vIFxcXFwgXFxwe0RlY2ltYWxfTnVtYmVyfSB8IFxccHtMZXR0ZXJ9IC8vL3YsICAgICAgICAgICAgICAgICB9XG4gICAgICB0ZXh0Lm5ld190b2tlbiAgICB7IG5hbWU6ICd3cycsICAgICAgICAgICBmaXQ6IC8vLyBcXHB7V2hpdGVfU3BhY2V9ICAgICAgICAgICAgICAgICAgICAvLy92LCAgICAgICAgICAgICAgICAgfVxuICAgICAgdGV4dC5uZXdfdG9rZW4gICAgeyBuYW1lOiAnbnVtYmVyX3N0YXJ0JywgZml0OiAvLy8gKD89ICg/ITwgXFxcXCApIFxccHtEZWNpbWFsX051bWJlcn0gKSAvLy92LCBqdW1wOiAnbnVtYmVyJywgfVxuICAgICAgbnVtYmVyLm5ld190b2tlbiAgeyBuYW1lOiAnZGlnaXQnLCAgICAgICAgZml0OiAvLy8gXFxwe0RlY2ltYWxfTnVtYmVyfSB8IFxcLiB8IGUgICAgICAgIC8vL3YsICAgICAgICAgICAgICAgICB9XG4gICAgICBudW1iZXIubmV3X3Rva2VuICB7IG5hbWU6ICdudW1iZXJfc3RvcCcsICBmaXQ6IC8vLyAoPz0gXFxQe0RlY2ltYWxfTnVtYmVyfSApICAgICAgICAgICAvLy92LCBqdW1wOiAnLi4nLCAgICAgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBzb3VyY2UgPSBcIlJcXFxcMkRcXFxcMiBoYXMgMzU1Ni4zIFBldGFieXRlc1wiXG4gICAgICAgICMgZy5yZXNldF9sbnIoKTsgZWNobyBhYmJybHhtIGx4bSBmb3IgbHhtIGZyb20gZy5zY2FuIHNvdXJjZVxuICAgICAgICAjIGluZm8gJ86paWx4dF8yOTEnLCBycHIgc291cmNlOyB0YWJ1bGF0ZV9sZXhlbWVzIGcuc2NhbiBzb3VyY2VcbiAgICAgICAgaW5mbyAnzqlpbHh0XzI5MicsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlXG4gICAgICAgIEBlcSAoIM6paWx4dF8yOTMgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQudGV4dCcsICAgICAgICAgIGhpdDogJ1InLCBwb3M6ICcxOjA6MScgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMjk0ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICd0ZXh0LnRleHQnLCAgICAgICAgICBoaXQ6ICdcXFxcMicsIHBvczogJzE6MTozJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8yOTUgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQudGV4dCcsICAgICAgICAgIGhpdDogJ0QnLCBwb3M6ICcxOjM6NCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMjk2ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICd0ZXh0LnRleHQnLCAgICAgICAgICBoaXQ6ICdcXFxcMicsIHBvczogJzE6NDo2JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8yOTcgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQud3MnLCAgICAgICAgICAgIGhpdDogJyAnLCBwb3M6ICcxOjY6NycgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMjk4ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICd0ZXh0LnRleHQnLCAgICAgICAgICBoaXQ6ICdoJywgcG9zOiAnMTo3OjgnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzI5OSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAndGV4dC50ZXh0JywgICAgICAgICAgaGl0OiAnYScsIHBvczogJzE6ODo5JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zMDAgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQudGV4dCcsICAgICAgICAgIGhpdDogJ3MnLCBwb3M6ICcxOjk6MTAnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzMwMSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAndGV4dC53cycsICAgICAgICAgICAgaGl0OiAnICcsIHBvczogJzE6MTA6MTEnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzMwMiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAndGV4dC5udW1iZXJfc3RhcnQnLCAgaGl0OiAnJywgcG9zOiAnMToxMToxMScgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMzAzID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdudW1iZXIuZGlnaXQnLCAgICAgICBoaXQ6ICczJywgcG9zOiAnMToxMToxMicgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMzA0ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdudW1iZXIuZGlnaXQnLCAgICAgICBoaXQ6ICc1JywgcG9zOiAnMToxMjoxMycgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMzA1ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdudW1iZXIuZGlnaXQnLCAgICAgICBoaXQ6ICc1JywgcG9zOiAnMToxMzoxNCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMzA2ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdudW1iZXIuZGlnaXQnLCAgICAgICBoaXQ6ICc2JywgcG9zOiAnMToxNDoxNScgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMzA3ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdudW1iZXIuZGlnaXQnLCAgICAgICBoaXQ6ICcuJywgcG9zOiAnMToxNToxNicgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMzA4ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdudW1iZXIuZGlnaXQnLCAgICAgICBoaXQ6ICczJywgcG9zOiAnMToxNjoxNycgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMzA5ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdudW1iZXIubnVtYmVyX3N0b3AnLCBoaXQ6ICcnLCBwb3M6ICcxOjE3OjE3JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zMTAgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQud3MnLCAgICAgICAgICAgIGhpdDogJyAnLCBwb3M6ICcxOjE3OjE4JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zMTEgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQudGV4dCcsICAgICAgICAgIGhpdDogJ1AnLCBwb3M6ICcxOjE4OjE5JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zMTIgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQudGV4dCcsICAgICAgICAgIGhpdDogJ2UnLCBwb3M6ICcxOjE5OjIwJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zMTMgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQudGV4dCcsICAgICAgICAgIGhpdDogJ3QnLCBwb3M6ICcxOjIwOjIxJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zMTQgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQudGV4dCcsICAgICAgICAgIGhpdDogJ2EnLCBwb3M6ICcxOjIxOjIyJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zMTUgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQudGV4dCcsICAgICAgICAgIGhpdDogJ2InLCBwb3M6ICcxOjIyOjIzJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zMTYgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQudGV4dCcsICAgICAgICAgIGhpdDogJ3knLCBwb3M6ICcxOjIzOjI0JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zMTcgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQudGV4dCcsICAgICAgICAgIGhpdDogJ3QnLCBwb3M6ICcxOjI0OjI1JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zMTggPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQudGV4dCcsICAgICAgICAgIGhpdDogJ2UnLCBwb3M6ICcxOjI1OjI2JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zMTkgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQudGV4dCcsICAgICAgICAgIGhpdDogJ3MnLCBwb3M6ICcxOjI2OjI3JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zMjAgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCBudWxsXG4gICAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRva2VuX21lcmdpbmc6IC0+XG4gICAgICB7IEdyYW1tYXJcbiAgICAgICAgcnggICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgZyAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBuYW1lOiAnZycsIGVtaXRfc2lnbmFsczogZmFsc2UsIH1cbiAgICAgIHRleHQgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ3RleHQnLCB9XG4gICAgICBudW1iZXIgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdudW1iZXInLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHRleHQubmV3X3Rva2VuICAgIHsgbmFtZTogJ3RleHQnLCAgICAgICAgIGZpdDogLy8vIFxcXFwgXFxwe0RlY2ltYWxfTnVtYmVyfSB8IFxccHtMZXR0ZXJ9IC8vL3YsIG1lcmdlOiB0cnVlLCAgICB9XG4gICAgICB0ZXh0Lm5ld190b2tlbiAgICB7IG5hbWU6ICd3cycsICAgICAgICAgICBmaXQ6IC8vLyBcXHB7V2hpdGVfU3BhY2V9ICAgICAgICAgICAgICAgICAgICAvLy92LCBtZXJnZTogdHJ1ZSwgICAgfVxuICAgICAgdGV4dC5uZXdfdG9rZW4gICAgeyBuYW1lOiAnbnVtYmVyX3N0YXJ0JywgZml0OiAvLy8gKD89ICg/ITwgXFxcXCApIFxccHtEZWNpbWFsX051bWJlcn0gKSAvLy92LCBqdW1wOiAnbnVtYmVyJywgfVxuICAgICAgbnVtYmVyLm5ld190b2tlbiAgeyBuYW1lOiAnZGlnaXQnLCAgICAgICAgZml0OiAvLy8gXFxwe0RlY2ltYWxfTnVtYmVyfSB8IFxcLiB8IGUgICAgICAgIC8vL3YsIG1lcmdlOiB0cnVlLCAgICB9XG4gICAgICBudW1iZXIubmV3X3Rva2VuICB7IG5hbWU6ICdudW1iZXJfc3RvcCcsICBmaXQ6IC8vLyAoPz0gXFxQe0RlY2ltYWxfTnVtYmVyfSApICAgICAgICAgICAvLy92LCBqdW1wOiAnLi4nLCAgICAgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBzb3VyY2UgPSBcIlJcXFxcMkRcXFxcMiBoYXMgMzU1Ni4zIFBldGFieXRlc1wiXG4gICAgICAgICMgZy5yZXNldF9sbnIoKTsgZWNobyBhYmJybHhtIGx4bSBmb3IgbHhtIGZyb20gZy5zY2FuIHNvdXJjZVxuICAgICAgICAjIGluZm8gJ86paWx4dF8zMjEnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyB0YWJ1bGF0ZV9sZXhlbWVzIGcuc2NhbiBzb3VyY2VcbiAgICAgICAgaW5mbyAnzqlpbHh0XzMyMicsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlXG4gICAgICAgIEBlcSAoIM6paWx4dF8zMjMgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQudGV4dCcsICAgICAgICAgIGhpdDogJ1JcXFxcMkRcXFxcMicsICBwb3M6ICcxOjA6NicgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMzI0ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICd0ZXh0LndzJywgICAgICAgICAgICBoaXQ6ICcgJywgICAgICAgICBwb3M6ICcxOjY6NycgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMzI1ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICd0ZXh0LnRleHQnLCAgICAgICAgICBoaXQ6ICdoYXMnLCAgICAgICBwb3M6ICcxOjc6MTAnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzMyNiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAndGV4dC53cycsICAgICAgICAgICAgaGl0OiAnICcsICAgICAgICAgcG9zOiAnMToxMDoxMScgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMzI3ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICd0ZXh0Lm51bWJlcl9zdGFydCcsICBoaXQ6ICcnLCAgICAgICAgICBwb3M6ICcxOjExOjExJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zMjggPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ251bWJlci5kaWdpdCcsICAgICAgIGhpdDogJzM1NTYuMycsICAgIHBvczogJzE6MTE6MTcnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzMyOSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnbnVtYmVyLm51bWJlcl9zdG9wJywgaGl0OiAnJywgICAgICAgICAgcG9zOiAnMToxNzoxNycgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMzMwID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICd0ZXh0LndzJywgICAgICAgICAgICBoaXQ6ICcgJywgICAgICAgICBwb3M6ICcxOjE3OjE4JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zMzEgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQudGV4dCcsICAgICAgICAgIGhpdDogJ1BldGFieXRlcycsIHBvczogJzE6MTg6MjcnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzMzMiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRva2VuX21lcmdpbmdfd2l0aF9kZWZhdWx0OiAtPlxuICAgICAgeyBHcmFtbWFyXG4gICAgICAgIHJ4ICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgbmFtZTogJ2cnLCBlbWl0X3NpZ25hbHM6IGZhbHNlLCB9XG4gICAgICB0ZXh0ICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICd0ZXh0JywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICB0ZXh0Lm5ld190b2tlbiB7IG5hbWU6ICduYW1lJywgZml0OiAvLy8gKD88aW5pdGlhbD4gXFxwe1VwcGVyY2FzZV9MZXR0ZXJ9ICkgXFxwe0xvd2VyY2FzZV9MZXR0ZXJ9KyAvLy92LCBtZXJnZTogdHJ1ZSwgICAgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBzb3VyY2UgPSBcIkFyY0JvQ3lEZWVuXCJcbiAgICAgICAgIyBnLnJlc2V0X2xucigpOyBlY2hvIGFiYnJseG0gbHhtIGZvciBseG0gZnJvbSBnLnNjYW4gc291cmNlXG4gICAgICAgICMgaW5mbyAnzqlpbHh0XzMzMycsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IHRhYnVsYXRlX2xleGVtZXMgZy5zY2FuIHNvdXJjZVxuICAgICAgICBpbmZvICfOqWlseHRfMzM0JywgcnByIHNvdXJjZTsgZy5yZXNldF9sbnIoKTsgbGV4ZW1lcyA9IGcuc2NhbiBzb3VyY2VcbiAgICAgICAgQGVxICggzqlpbHh0XzMzNSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAndGV4dC5uYW1lJywgaGl0OiAnQXJjQm9DeURlZW4nLCBwb3M6ICcxOjA6MTEnLCBkYXRhOiB7IGluaXRpYWw6IFsgJ0EnLCAnQicsICdDJywgJ0QnIF0gfSwgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMzM2ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdG9rZW5fbWVyZ2luZ193aXRoX2Fzc2lnbjogLT5cbiAgICAgIHsgR3JhbW1hclxuICAgICAgICByeCAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgZW1pdF9zaWduYWxzOiBmYWxzZSwgfVxuICAgICAgdGV4dCAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAndGV4dCcsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgdGV4dC5uZXdfdG9rZW4geyBuYW1lOiAnbmFtZScsIGZpdDogLy8vICg/PGluaXRpYWw+IFxccHtVcHBlcmNhc2VfTGV0dGVyfSApIFxccHtMb3dlcmNhc2VfTGV0dGVyfSsgLy8vdiwgbWVyZ2U6ICdhc3NpZ24nLCAgICB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHNvdXJjZSA9IFwiQXJjQm9DeURlZW5cIlxuICAgICAgICAjIGcucmVzZXRfbG5yKCk7IGVjaG8gYWJicmx4bSBseG0gZm9yIGx4bSBmcm9tIGcuc2NhbiBzb3VyY2VcbiAgICAgICAgIyBpbmZvICfOqWlseHRfMzM3JywgcnByIHNvdXJjZTsgZy5yZXNldF9sbnIoKTsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlXG4gICAgICAgIGluZm8gJ86paWx4dF8zMzgnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBsZXhlbWVzID0gZy5zY2FuIHNvdXJjZVxuICAgICAgICBAZXEgKCDOqWlseHRfMzM5ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICd0ZXh0Lm5hbWUnLCBoaXQ6ICdBcmNCb0N5RGVlbicsIHBvczogJzE6MDoxMScsIGRhdGE6IHsgaW5pdGlhbDogJ0QnIH0sIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzM0MCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRva2VuX21lcmdpbmdfd2l0aF9kZWZhdWx0X2FuZF9zaW5nbGVfbWF0Y2g6IC0+XG4gICAgICB7IEdyYW1tYXJcbiAgICAgICAgcnggICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgZyAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBuYW1lOiAnZycsIGVtaXRfc2lnbmFsczogZmFsc2UsIH1cbiAgICAgIHRleHQgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ3RleHQnLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHRleHQubmV3X3Rva2VuIHsgbmFtZTogJ25hbWUnLCBmaXQ6IC8vLyAoPzxpbml0aWFsPiBcXHB7VXBwZXJjYXNlX0xldHRlcn0gKSBcXHB7TG93ZXJjYXNlX0xldHRlcn0rIC8vL3YsIG1lcmdlOiB0cnVlLCAgICB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHNvdXJjZSA9IFwiQXJjXCJcbiAgICAgICAgIyBnLnJlc2V0X2xucigpOyBlY2hvIGFiYnJseG0gbHhtIGZvciBseG0gZnJvbSBnLnNjYW4gc291cmNlXG4gICAgICAgICMgaW5mbyAnzqlpbHh0XzM0MScsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IHRhYnVsYXRlX2xleGVtZXMgZy5zY2FuIHNvdXJjZVxuICAgICAgICBpbmZvICfOqWlseHRfMzQyJywgcnByIHNvdXJjZTsgZy5yZXNldF9sbnIoKTsgbGV4ZW1lcyA9IGcuc2NhbiBzb3VyY2VcbiAgICAgICAgQGVxICggzqlpbHh0XzM0MyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAndGV4dC5uYW1lJywgaGl0OiAnQXJjJywgcG9zOiAnMTowOjMnLCBkYXRhOiB7IGluaXRpYWw6IFsgJ0EnLCBdIH0sIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzM0NCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRva2VuX21lcmdpbmdfd2l0aF9tZXJnZV9mdW5jdGlvbjogLT5cbiAgICAgIHsgR3JhbW1hclxuICAgICAgICBpbnRlcm5hbHNcbiAgICAgICAgcnggICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgZyAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBuYW1lOiAnZycsIGVtaXRfc2lnbmFsczogZmFsc2UsIH1cbiAgICAgIHRleHQgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ3RleHQnLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIG1lcmdlICAgICA9ICh7IG1lcmdlZCwgbGV4ZW1lcywgfSkgLT5cbiAgICAgICAgbWVyZ2VkLmFzc2lnbiB7IGluaXRpYWw6ICggbHhtLmRhdGEuaW5pdGlhbCBmb3IgbHhtIGluIGxleGVtZXMgKSwgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgdGV4dC5uZXdfdG9rZW4geyBuYW1lOiAnbmFtZScsIGZpdDogLy8vICg/PGluaXRpYWw+IFxccHtVcHBlcmNhc2VfTGV0dGVyfSApIFxccHtMb3dlcmNhc2VfTGV0dGVyfSsgLy8vdiwgbWVyZ2UsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgc291cmNlID0gXCJBcmNCb0N5RGVlblwiXG4gICAgICAgICMgZy5yZXNldF9sbnIoKTsgZWNobyBhYmJybHhtIGx4bSBmb3IgbHhtIGZyb20gZy5zY2FuIHNvdXJjZVxuICAgICAgICAjIGluZm8gJ86paWx4dF8zNDUnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyB0YWJ1bGF0ZV9sZXhlbWVzIGcuc2NhbiBzb3VyY2VcbiAgICAgICAgaW5mbyAnzqlpbHh0XzM0NicsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlXG4gICAgICAgIEBlcSAoIM6paWx4dF8zNDcgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQubmFtZScsIGhpdDogJ0FyY0JvQ3lEZWVuJywgcG9zOiAnMTowOjExJywgZGF0YTogeyBpbml0aWFsOiBbICdBJywgJ0InLCAnQycsICdEJywgXSwgfSB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zNDggPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCBudWxsXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0b2tlbl9tZXJnaW5nX3dpdGhfbWVyZ2VfbGlzdDogLT5cbiAgICAgIHsgR3JhbW1hclxuICAgICAgICBpbnRlcm5hbHNcbiAgICAgICAgcnggICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgZyAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBuYW1lOiAnZycsIGVtaXRfc2lnbmFsczogZmFsc2UsIH1cbiAgICAgIHRleHQgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ3RleHQnLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZpdCA9IC8vLyAoPzxwYXJ0cz4gKD88aW5pdGlhbHM+IFxccHtVcHBlcmNhc2VfTGV0dGVyfSApIFxccHtMb3dlcmNhc2VfTGV0dGVyfSsgKSAvLy92XG4gICAgICB0ZXh0Lm5ld190b2tlbiB7IG5hbWU6ICduYW1lJywgZml0LCBtZXJnZTogJ2xpc3QnLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHNvdXJjZSA9IFwiQXJjQm9DeURlZW5cIlxuICAgICAgICAjIGcucmVzZXRfbG5yKCk7IGVjaG8gYWJicmx4bSBseG0gZm9yIGx4bSBmcm9tIGcuc2NhbiBzb3VyY2VcbiAgICAgICAgIyBpbmZvICfOqWlseHRfMzQ5JywgcnByIHNvdXJjZTsgZy5yZXNldF9sbnIoKTsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlXG4gICAgICAgIGluZm8gJ86paWx4dF8zNTAnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBsZXhlbWVzID0gZy5zY2FuIHNvdXJjZVxuICAgICAgICBAZXEgKCDOqWlseHRfMzUxID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICd0ZXh0Lm5hbWUnLCBoaXQ6ICdBcmNCb0N5RGVlbicsIHBvczogJzE6MDoxMScsIGRhdGE6IHsgcGFydHM6IFsgJ0FyYycsICdCbycsICdDeScsICdEZWVuJyBdLCBpbml0aWFsczogWyAnQScsICdCJywgJ0MnLCAnRCcgXSB9IH1cbiAgICAgICAgQGVxICggzqlpbHh0XzM1MiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIyB0b2tlbl9tZXJnaW5nX3dpdGhfbWVyZ2Vfam9pbjogLT5cbiAgICAjICAgeyBHcmFtbWFyXG4gICAgIyAgICAgaW50ZXJuYWxzXG4gICAgIyAgICAgcnggICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAjICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgIyAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgbmFtZTogJ2cnLCBlbWl0X3NpZ25hbHM6IGZhbHNlLCB9XG4gICAgIyAgIHRleHQgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ3RleHQnLCB9XG4gICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgICBmaXQgPSAvLy8gKD88cGFydHM+ICg/PGluaXRpYWxzPiBcXHB7VXBwZXJjYXNlX0xldHRlcn0gKSBcXHB7TG93ZXJjYXNlX0xldHRlcn0rICkgLy8vdlxuICAgICMgICB0ZXh0Lm5ld190b2tlbiB7IG5hbWU6ICduYW1lJywgZml0LCBtZXJnZTogJ2pvaW4nLCB9XG4gICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgICBkbyA9PlxuICAgICMgICAgIHNvdXJjZSA9IFwiQXJjQm9DeURlZW5cIlxuICAgICMgICAgICMgZy5yZXNldF9sbnIoKTsgZWNobyBhYmJybHhtIGx4bSBmb3IgbHhtIGZyb20gZy5zY2FuIHNvdXJjZVxuICAgICMgICAgICMgaW5mbyAnzqlpbHh0XzM1MycsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IHRhYnVsYXRlX2xleGVtZXMgZy5zY2FuIHNvdXJjZVxuICAgICMgICAgIGluZm8gJ86paWx4dF8zNTQnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBsZXhlbWVzID0gZy5zY2FuIHNvdXJjZVxuICAgICMgICAgIEBlcSAoIM6paWx4dF8zNTUgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQubmFtZScsIGhpdDogJ0FyY0JvQ3lEZWVuJywgcG9zOiAnMTowOjExJywgZGF0YTogeyBwYXJ0czogWyAnQXJjQm9DeURlZW4nIF0sIGluaXRpYWxzOiBbICdBQkNEJyBdIH0gfVxuICAgICMgICAgIEBlcSAoIM6paWx4dF8zNTYgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCBudWxsXG4gICAgIyAgICAgcmV0dXJuIG51bGxcbiAgICAjICAgcmV0dXJuIG51bGxcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGRhdGFfY2FwdHVyZTpcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGF0YV9wcm9wZXJ0eTogLT5cbiAgICAgIHsgR3JhbW1hciB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgIGcgICAgID0gbmV3IEdyYW1tYXIoKVxuICAgICAgZ25kICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnLCB9XG4gICAgICBuYW1lICA9IGduZC5uZXdfdG9rZW4geyBuYW1lOiAnbmFtZScsIGZpdDogLy8vXG4gICAgICAgICg/PGluaXRpYWw+IFxccHtVcHBlcmNhc2VfTGV0dGVyfSApICg/PHRhaWw+IFxccHtMb3dlcmNhc2VfTGV0dGVyfSogKSAvLy8sIH1cbiAgICAgIGxleGVtZSA9IGcuc2Nhbl9maXJzdCAnQnJvYmRpZ25hYydcbiAgICAgIEBlcSAoIM6paWx4dF8zNTcgPSAtPiBsZXhlbWUuZ3JvdXBzICAgICAgICAgICAgICApLCB1bmRlZmluZWRcbiAgICAgIEBlcSAoIM6paWx4dF8zNTggPSAtPiBsZXhlbWUuZGF0YT8gICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWlseHRfMzU5ID0gLT4gbGV4ZW1lLmhhc19kYXRhICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbHh0XzM2MCA9IC0+IGxleGVtZS5kYXRhLmNvbnN0cnVjdG9yICAgICksIHVuZGVmaW5lZFxuICAgICAgQGVxICggzqlpbHh0XzM2MSA9IC0+IGxleGVtZS5kYXRhLmluaXRpYWwgICAgICAgICksICdCJ1xuICAgICAgQGVxICggzqlpbHh0XzM2MiA9IC0+IGxleGVtZS5kYXRhLnRhaWwgICAgICAgICAgICksICdyb2JkaWduYWMnXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXNldF9kYXRhOiAtPlxuICAgICAgeyBHcmFtbWFyIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBnICAgICAgID0gbmV3IEdyYW1tYXIoKVxuICAgICAgICBnX2RhdGEgID0gZy5kYXRhXG4gICAgICAgIEBlcSAoIM6paWx4dF8zNjMgPSAtPiB0eXBlX29mIGcucmVzZXRfZGF0YSAgICksICdmdW5jdGlvbidcbiAgICAgICAgQGVxICggzqlpbHh0XzM2NCA9IC0+IHR5cGVfb2YgZy5hc3NpZ24gICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgICBAZXEgKCDOqWlseHRfMzY1ID0gLT4gZy5kYXRhICAgICAgICAgICAgICAgICApLCB7fVxuICAgICAgICBAZXEgKCDOqWlseHRfMzY2ID0gLT4gZy5kYXRhIGlzIGdfZGF0YSAgICAgICApLCB0cnVlXG4gICAgICAgIGcuYXNzaWduIHsga2V5OiAndmFsdWUnLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zNjcgPSAtPiBnLmRhdGEgICAgICAgICAgICAgICAgICksIHsga2V5OiAndmFsdWUnLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF8zNjggPSAtPiBnLmRhdGEgaXMgZ19kYXRhICAgICAgICksIHRydWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZyAgICAgICA9IG5ldyBHcmFtbWFyKClcbiAgICAgICAgZ19kYXRhICA9IGcuZGF0YVxuICAgICAgICBnLmFzc2lnbiB7IGtleTogJ3ZhbHVlJywgfVxuICAgICAgICBAdGhyb3dzICggzqlpbHh0XzM2OSA9IC0+IGcucmVzZXRfZGF0YSBmYWxzZSApLCAvZG9lcyBub3QgYWNjZXB0IGFyZ3VtZW50cy9cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGF0YV90ZW1wbGF0aW5nOiAtPlxuICAgICAgeyBHcmFtbWFyIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB0ZW1wbGF0ZSAgPSB7IG9uZTogMSwgbGlzdDogW10sIHNldDogbmV3IFNldCgpLCB9XG4gICAgICAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgZGF0YTogdGVtcGxhdGUsIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzM3MCA9IC0+IGcuZGF0YSAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRlbXBsYXRlXG4gICAgICAgIEBlcSAoIM6paWx4dF8zNzEgPSAtPiBnLmRhdGEgICAgICAgaXMgdGVtcGxhdGUgICAgICAgICApLCBmYWxzZVxuICAgICAgICBAZXEgKCDOqWlseHRfMzcyID0gLT4gZy5kYXRhLmxpc3QgIGlzIHRlbXBsYXRlLmxpc3QgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgKCDOqWlseHRfMzczID0gLT4gZy5kYXRhLnNldCAgIGlzIHRlbXBsYXRlLnNldCAgICAgKSwgdHJ1ZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB0ZW1wbGF0ZSAgPSB7IG9uZTogMSwgbGlzdDogKCAtPiBbXSApLCBzZXQ6ICggLT4gbmV3IFNldCgpICksIH1cbiAgICAgICAgbWF0Y2hlciAgID0geyBvbmU6IDEsIGxpc3Q6IFtdLCBzZXQ6IG5ldyBTZXQoKSwgfVxuICAgICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IGRhdGE6IHRlbXBsYXRlLCB9XG4gICAgICAgICMjIyBndXlfdGVzdCBkb2Vzbid0IGN1cnJlbnRseSByZWNvZ25pemUgbmVzdGVkIG1hcHMsIHNldHMgc28gd2UncmUgZG9pbmcgaXQgdGhlIGxvbmcgd2F5ICMjI1xuICAgICAgICAjIEBlcSAoIM6paWx4dF8zNzQgPSAtPiBnLmRhdGEgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBtYXRjaGVyXG4gICAgICAgIEBlcSAoIM6paWx4dF8zNzUgPSAtPiBnLmRhdGEgICAgICAgaXMgdGVtcGxhdGUgICAgICAgICApLCBmYWxzZVxuICAgICAgICBAZXEgKCDOqWlseHRfMzc2ID0gLT4gZy5kYXRhLmxpc3QgIGlzIHRlbXBsYXRlLmxpc3QgICAgKSwgZmFsc2VcbiAgICAgICAgQGVxICggzqlpbHh0XzM3NyA9IC0+IGcuZGF0YS5zZXQgICBpcyB0ZW1wbGF0ZS5zZXQgICAgICksIGZhbHNlXG4gICAgICAgIEBlcSAoIM6paWx4dF8zNzggPSAtPiB0eXBlX29mIGcuZGF0YS5saXN0ICAgICAgICAgICAgICApLCAnbGlzdCdcbiAgICAgICAgQGVxICggzqlpbHh0XzM3OSA9IC0+IHR5cGVfb2YgZy5kYXRhLnNldCAgICAgICAgICAgICAgICksICdzZXQnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHRlbXBsYXRlICA9IHsgY291bnQ6IDEsIGxpc3Q6ICggLT4gW10gKSwgfVxuICAgICAgICBtYXRjaGVyICAgPSB7IGNvdW50OiAxLCBsaXN0OiAoICAgIFtdICksIH1cbiAgICAgICAgZyAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBkYXRhOiB0ZW1wbGF0ZSwgfVxuICAgICAgICAjIyMgZ3V5X3Rlc3QgZG9lc24ndCBjdXJyZW50bHkgcmVjb2duaXplIG5lc3RlZCBtYXBzLCBzZXRzIHNvIHdlJ3JlIGRvaW5nIGl0IHRoZSBsb25nIHdheSAjIyNcbiAgICAgICAgIyBAZXEgKCDOqWlseHRfMzgwID0gLT4gZy5kYXRhICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbWF0Y2hlclxuICAgICAgICBAZXEgKCDOqWlseHRfMzgxID0gLT4gZy5kYXRhLmNvdW50ICAgICAgICAgICAgICAgICAgICAgICAgICksIG1hdGNoZXIuY291bnRcbiAgICAgICAgQGVxICggzqlpbHh0XzM4MiA9IC0+IGcuZGF0YS5saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICApLCBtYXRjaGVyLmxpc3RcbiAgICAgICAgQGVxICggzqlpbHh0XzM4MyA9IC0+IGcuY2ZnLmRhdGEuY291bnQgaXMgdGVtcGxhdGUuY291bnQgICApLCB0cnVlXG4gICAgICAgIEBlcSAoIM6paWx4dF8zODQgPSAtPiBnLmNmZy5kYXRhLmxpc3QgIGlzIGcuY2ZnLmRhdGEubGlzdCAgKSwgZmFsc2VcbiAgICAgICAgQGVxICggzqlpbHh0XzM4NSA9IC0+IHN0ZC5saXN0LmlzYSBnLmNmZy5kYXRhLmxpc3QgICAgICAgICApLCB0cnVlXG4gICAgICAgIGcuZGF0YS5jb3VudCsrXG4gICAgICAgIGcuZGF0YS5saXN0LnB1c2ggJ3ZhbHVlJ1xuICAgICAgICBAZXEgKCDOqWlseHRfMzg2ID0gLT4gZy5kYXRhLmNvdW50ICAgICAgICAgICAgICAgICAgICAgICAgICksIDJcbiAgICAgICAgQGVxICggzqlpbHh0XzM4NyA9IC0+IGcuZGF0YS5saXN0ICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbICd2YWx1ZScsIF1cbiAgICAgICAgZy5yZXNldF9kYXRhKClcbiAgICAgICAgQGVxICggzqlpbHh0XzM4OCA9IC0+IGcuZGF0YS5jb3VudCAgICAgICAgICAgICAgICAgICAgICAgICApLCBtYXRjaGVyLmNvdW50XG4gICAgICAgIEBlcSAoIM6paWx4dF8zODkgPSAtPiBnLmRhdGEubGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbWF0Y2hlci5saXN0XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHRlbXBsYXRlICA9IHsgY291bnQ6IDEsIH1cbiAgICAgICAgZyAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBkYXRhOiB0ZW1wbGF0ZSwgfVxuICAgICAgICAjIyMgZ3V5X3Rlc3QgZG9lc24ndCBjdXJyZW50bHkgcmVjb2duaXplIG5lc3RlZCBtYXBzLCBzZXRzIHNvIHdlJ3JlIGRvaW5nIGl0IHRoZSBsb25nIHdheSAjIyNcbiAgICAgICAgIyBAZXEgKCDOqWlseHRfMzkwID0gLT4gZy5kYXRhICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbWF0Y2hlclxuICAgICAgICBAZXEgKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIM6paWx4dF8zOTEgPSAtPiBnLmRhdGEuY291bnQgKSwgMVxuICAgICAgICBnLmRhdGEuY291bnQrKzsgICAgICAgICAgICAgICAgIEBlcSAoIM6paWx4dF8zOTIgPSAtPiBnLmRhdGEuY291bnQgKSwgMlxuICAgICAgICBnLnJlc2V0X2RhdGEoKTsgICAgICAgICAgICAgICAgIEBlcSAoIM6paWx4dF8zOTMgPSAtPiBnLmRhdGEuY291bnQgKSwgMVxuICAgICAgICBnLmRhdGEuY291bnQrKzsgZy5yZXNldF9kYXRhKCk7IEBlcSAoIM6paWx4dF8zOTQgPSAtPiBnLmRhdGEuY291bnQgKSwgMVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBncmFtbWFyX2NmZ19yZXNldF9sbnI6IC0+XG4gICAgICB7IEdyYW1tYXIgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIEBlcSAoIM6paWx4dF8zOTUgPSAtPiAoIG5ldyBHcmFtbWFyKCkgKS5jZmcucmVzZXRfbG5yICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgcmVzZXRfbG5yOiBmYWxzZSwgfVxuICAgICAgICBnbmQgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnLCB9XG4gICAgICAgIHRleHQgICAgICA9IGduZC5uZXdfdG9rZW4geyBuYW1lOiAndGV4dCcsIGZpdDogLy4rLywgfVxuICAgICAgICBAZXEgKCDOqWlseHRfMzk2ID0gLT4gZy5zdGF0ZS5sbnIgICksIDFcbiAgICAgICAgbGV4ZW1lID0gZy5zY2FuX2ZpcnN0ICdoZWxvJ1xuICAgICAgICBAZXEgKCDOqWlseHRfMzk3ID0gLT4gbGV4ZW1lLmxuciAgICksIDFcbiAgICAgICAgQGVxICggzqlpbHh0XzM5OCA9IC0+IGcuc3RhdGUubG5yICApLCAyXG4gICAgICAgIGxleGVtZSA9IGcuc2Nhbl9maXJzdCAnaG93J1xuICAgICAgICBAZXEgKCDOqWlseHRfMzk5ID0gLT4gbGV4ZW1lLmxuciAgICksIDJcbiAgICAgICAgQGVxICggzqlpbHh0XzQwMCA9IC0+IGcuc3RhdGUubG5yICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgcmVzZXRfbG5yOiB0cnVlLCB9XG4gICAgICAgIGduZCAgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2duZCcsIH1cbiAgICAgICAgdGV4dCAgICAgID0gZ25kLm5ld190b2tlbiB7IG5hbWU6ICd0ZXh0JywgZml0OiAvLisvLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF80MDEgPSAtPiBnLnN0YXRlLmxuciAgKSwgMVxuICAgICAgICBsZXhlbWUgPSBnLnNjYW5fZmlyc3QgJ2hlbG8nXG4gICAgICAgIEBlcSAoIM6paWx4dF80MDIgPSAtPiBsZXhlbWUubG5yICAgKSwgMVxuICAgICAgICBAZXEgKCDOqWlseHRfNDAzID0gLT4gZy5zdGF0ZS5sbnIgICksIDFcbiAgICAgICAgbGV4ZW1lID0gZy5zY2FuX2ZpcnN0ICdob3cnXG4gICAgICAgIEBlcSAoIM6paWx4dF80MDQgPSAtPiBsZXhlbWUubG5yICAgKSwgMVxuICAgICAgICBAZXEgKCDOqWlseHRfNDA1ID0gLT4gZy5zdGF0ZS5sbnIgICksIDFcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZ3JhbW1hcl9jZmdfcmVzZXRfZGF0YTogLT5cbiAgICAgIHsgR3JhbW1hciB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgQGVxICggzqlpbHh0XzQwNiA9IC0+ICggbmV3IEdyYW1tYXIoKSApLmNmZy5yZXNldF9kYXRhICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgZGF0YTogeyBjb3VudDogMSwgaGl0czogKCAtPiBbXSApLCB9LCByZXNldF9kYXRhOiBmYWxzZSwgfVxuICAgICAgICBnbmQgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnLCB9XG4gICAgICAgIHRleHQgICAgICA9IGduZC5uZXdfdG9rZW4geyBuYW1lOiAndGV4dCcsIGZpdDogLy4rLywgfVxuICAgICAgICBoaXRzICAgICAgPSBnLmRhdGEuaGl0c1xuICAgICAgICBAZXEgKCDOqWlseHRfNDA3ID0gLT4gZy5kYXRhLmNvdW50ICAgICAgICAgKSwgMVxuICAgICAgICBnLmRhdGEuY291bnQrK1xuICAgICAgICBsZXhlbWUgPSBnLnNjYW5fZmlyc3QgJ2hlbG8nXG4gICAgICAgIGcuZGF0YS5oaXRzLnB1c2ggbGV4ZW1lLmhpdFxuICAgICAgICBAZXEgKCDOqWlseHRfNDA4ID0gLT4gZy5kYXRhLmNvdW50ICAgICAgICAgKSwgMlxuICAgICAgICBAZXEgKCDOqWlseHRfNDA5ID0gLT4gZy5kYXRhLmhpdHMgICAgICAgICAgKSwgWyAnaGVsbycsIF1cbiAgICAgICAgZy5kYXRhLmNvdW50KytcbiAgICAgICAgbGV4ZW1lID0gZy5zY2FuX2ZpcnN0ICdob3cnXG4gICAgICAgIGcuZGF0YS5oaXRzLnB1c2ggbGV4ZW1lLmhpdFxuICAgICAgICBAZXEgKCDOqWlseHRfNDEwID0gLT4gZy5kYXRhLmNvdW50ICAgICAgICAgKSwgM1xuICAgICAgICBAZXEgKCDOqWlseHRfNDExID0gLT4gZy5kYXRhLmhpdHMgICAgICAgICAgKSwgWyAnaGVsbycsICdob3cnLCBdXG4gICAgICAgIEBlcSAoIM6paWx4dF80MTIgPSAtPiBnLmRhdGEuaGl0cyBpcyBoaXRzICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgZGF0YTogeyBjb3VudDogMSwgaGl0czogKCAtPiBbXSApLCB9LCByZXNldF9kYXRhOiB0cnVlLCB9XG4gICAgICAgIGduZCAgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2duZCcsIH1cbiAgICAgICAgdGV4dCAgICAgID0gZ25kLm5ld190b2tlbiB7IG5hbWU6ICd0ZXh0JywgZml0OiAvLisvLCB9XG4gICAgICAgIGhpdHMgICAgICA9IGcuZGF0YS5oaXRzXG4gICAgICAgIEBlcSAoIM6paWx4dF80MTMgPSAtPiBnLmRhdGEuY291bnQgICAgICAgICApLCAxXG4gICAgICAgIGcuZGF0YS5jb3VudCsrXG4gICAgICAgIGxleGVtZSA9IGcuc2Nhbl9maXJzdCAnaGVsbydcbiAgICAgICAgZy5kYXRhLmhpdHMucHVzaCBsZXhlbWUuaGl0XG4gICAgICAgIEBlcSAoIM6paWx4dF80MTQgPSAtPiBnLmRhdGEuY291bnQgICAgICAgICApLCAxXG4gICAgICAgIEBlcSAoIM6paWx4dF80MTUgPSAtPiBnLmRhdGEuaGl0cyAgICAgICAgICApLCBbICdoZWxvJywgXVxuICAgICAgICBnLmRhdGEuY291bnQrK1xuICAgICAgICBsZXhlbWUgPSBnLnNjYW5fZmlyc3QgJ2hvdydcbiAgICAgICAgZy5kYXRhLmhpdHMucHVzaCBsZXhlbWUuaGl0XG4gICAgICAgIEBlcSAoIM6paWx4dF80MTYgPSAtPiBnLmRhdGEuY291bnQgICAgICAgICApLCAxXG4gICAgICAgIEBlcSAoIM6paWx4dF80MTcgPSAtPiBnLmRhdGEuaGl0cyAgICAgICAgICApLCBbICdob3cnLCBdXG4gICAgICAgIEBlcSAoIM6paWx4dF80MTggPSAtPiBnLmRhdGEuaGl0cyBpcyBoaXRzICApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBncmFtbWFyX2NmZ19yZXNldF9lcnJvcnM6IC0+XG4gICAgICB7IEdyYW1tYXIgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIEBlcSAoIM6paWx4dF80MTkgPSAtPiAoIG5ldyBHcmFtbWFyKCkgKS5jZmcucmVzZXRfZXJyb3JzICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgZGF0YTogeyBjb3VudDogMSwgaGl0czogKCAtPiBbXSApLCB9LCByZXNldF9lcnJvcnM6IGZhbHNlLCB9XG4gICAgICAgIGduZCAgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2duZCcsIH1cbiAgICAgICAgdGV4dCAgICAgID0gZ25kLm5ld190b2tlbiB7IG5hbWU6ICd0ZXh0JywgZml0OiAvWzAtOV0rLywgfVxuICAgICAgICBoaXRzICAgICAgPSBnLmRhdGEuaGl0c1xuICAgICAgICBsZXhlbWUgPSBnLnNjYW5fZmlyc3QgJ2hlbG8nXG4gICAgICAgIEBlcSAoIM6paWx4dF80MjAgPSAtPiBnLnN0YXRlLmVycm9ycy5sZW5ndGggICAgKSwgMVxuICAgICAgICBAZXEgKCDOqWlseHRfNDIxID0gLT4gZy5oYXNfZXJyb3JzICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgbGV4ZW1lID0gZy5zY2FuX2ZpcnN0ICdob3cnXG4gICAgICAgIEBlcSAoIM6paWx4dF80MjIgPSAtPiBnLnN0YXRlLmVycm9ycy5sZW5ndGggICAgKSwgMlxuICAgICAgICBAZXEgKCDOqWlseHRfNDIzID0gLT4gZy5oYXNfZXJyb3JzICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgbGV4ZW1lID0gZy5zY2FuX2ZpcnN0ICc3NTMnXG4gICAgICAgIEBlcSAoIM6paWx4dF80MjQgPSAtPiBnLnN0YXRlLmVycm9ycy5sZW5ndGggICAgKSwgMlxuICAgICAgICBAZXEgKCDOqWlseHRfNDI1ID0gLT4gZy5oYXNfZXJyb3JzICAgICAgICAgICAgICksIHRydWVcbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGRvID0+XG4gICAgICAjICAgZyAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBkYXRhOiB7IGNvdW50OiAxLCBoaXRzOiAoIC0+IFtdICksIH0sIHJlc2V0X2Vycm9yczogdHJ1ZSwgfVxuICAgICAgIyAgIGduZCAgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2duZCcsIH1cbiAgICAgICMgICB0ZXh0ICAgICAgPSBnbmQubmV3X3Rva2VuIHsgbmFtZTogJ3RleHQnLCBmaXQ6IC9bMC05XSsvLCB9XG4gICAgICAjICAgaGl0cyAgICAgID0gZy5kYXRhLmhpdHNcbiAgICAgICMgICBsZXhlbWUgPSBnLnNjYW5fZmlyc3QgJ2hlbG8nXG4gICAgICAjICAgQGVxICggzqlpbHh0XzQyNiA9IC0+IGcuZGF0YS5oaXRzICAgICAgICAgICksIFsgJ2hlbG8nLCBdXG4gICAgICAjICAgbGV4ZW1lID0gZy5zY2FuX2ZpcnN0ICdob3cnXG4gICAgICAjICAgQGVxICggzqlpbHh0XzQyNyA9IC0+IGcuZGF0YS5oaXRzICAgICAgICAgICksIFsgJ2hvdycsIF1cbiAgICAgICMgICBAZXEgKCDOqWlseHRfNDI4ID0gLT4gZy5kYXRhLmhpdHMgaXMgaGl0cyAgKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAjIHJlc2V0OiAtPlxuICAgICMgICB7IEdyYW1tYXIgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgICBkbyA9PlxuICAgICMgICAgIHRlbXBsYXRlICA9IHsgb25lOiAxLCBsaXN0OiBbXSwgc2V0OiBuZXcgU2V0KCksIH1cbiAgICAjICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IGRhdGE6IHRlbXBsYXRlLCB9XG4gICAgIyAgICAgQGVxICggzqlpbHh0XzQyOSA9IC0+IGcuZGF0YSAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRlbXBsYXRlXG4gICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgICByZXR1cm4gbnVsbFxuXG4gICAgZGF0YV9jYXN0aW5nOiAtPlxuICAgIGRhdGFfYWJzb3JwdGlvbjogLT5cblxuXG4gICMgKiAqKmBb4oCUXWAqKiBgR3JhbW1hcjo6cmVzZXQ6ICh7IGxucjogMSwgZGF0YTogbnVsbCwgfSkgLT5gXG4gICMgKiAqKmBbK11gKiogYHJlc2V0X2xucjogKCBsbnIgPSAxICkgLT5gXG4gICMgKiAqKmBb4oCUXWAqKiBgcmVzZXRfZGF0YTogKCBkYXRhID0gbnVsbCApIC0+YFxuICAjICogKipgW+KAlF1gKiogYGdyYW1tYXJfY2ZnID0geyByZXNldF9vbl9zY2FuOiB7IGxucjogMSwgZGF0YTogbnVsbCB9LCB9YCAoYWxzbyBgdHJ1ZWAsIGBmYWxzZWApXG4gICMgKiAqKmBb4oCUXWAqKiBgZ3JhbW1hcl9jZmcgPSB7IGFic29yYl9kYXRhOiBmYWxzZSwgfWAgKGFsc28gYHRydWVgKVxuXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBzaWduYWxzOlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjZmdfc2V0dGluZ3M6IC0+XG4gICAgICB7IEdyYW1tYXIgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICBAZXEgKCDOqWlseHRfNDMwID0gLT4gKCBuZXcgR3JhbW1hciB7IGVtaXRfc2lnbmFsczogZmFsc2UsICAgICAgICAgfSApLmNmZy5lbWl0X3NpZ25hbHMgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6paWx4dF80MzEgPSAtPiAoIG5ldyBHcmFtbWFyIHsgZW1pdF9zaWduYWxzOiB0cnVlLCAgICAgICAgICB9ICkuY2ZnLmVtaXRfc2lnbmFscyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWlseHRfNDMyID0gLT4gKCBuZXcgR3JhbW1hciB7fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLmNmZy5lbWl0X3NpZ25hbHMgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbHh0XzQzMyA9IC0+ICggbmV3IEdyYW1tYXIoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5jZmcuZW1pdF9zaWduYWxzICksIHRydWVcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGxleGVtZV9wcm9wczogLT5cbiAgICAgIHsgR3JhbW1hclxuICAgICAgICByeCAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgZW1pdF9zaWduYWxzOiB0cnVlLCBsb29wX2Vycm9yczogJ2VtaXQnLCB9XG4gICAgICAgIGxldmVsX29uZSA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2xldmVsX29uZScsICB9XG4gICAgICAgIGxldmVsX3R3byA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2xldmVsX3R3bycsICB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgbGV2ZWxfb25lLm5ld190b2tlbiB7IG5hbWU6ICd0b19sZXZlbF90d28nLCBmaXQ6ICAvKD89KS8sIGp1bXA6ICdsZXZlbF90d28nLCB9XG4gICAgICAgIGxldmVsX3R3by5uZXdfdG9rZW4geyBuYW1lOiAndG9fbGV2ZWxfb25lJywgZml0OiAgL3wvLCAgICBqdW1wOiAnbGV2ZWxfb25lJywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGV4dHJhY3RfcHJvcHMgPSAoIGxleGVtZSApIC0+XG4gICAgICAgICAgcmV0dXJuIG51bGwgdW5sZXNzIGxleGVtZT9cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnFuYW1lOiAgICAgbGV4ZW1lLmZxbmFtZVxuICAgICAgICAgICAgaXNfc3lzdGVtOiAgbGV4ZW1lLmlzX3N5c3RlbVxuICAgICAgICAgICAgaXNfZXJyb3I6ICAgbGV4ZW1lLmlzX2Vycm9yXG4gICAgICAgICAgICBpc19zaWduYWw6ICBsZXhlbWUuaXNfc2lnbmFsXG4gICAgICAgICAgICBpc191c2VyOiAgICBsZXhlbWUuaXNfdXNlciAgICB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc291cmNlID0gXCJkb2Vzbid0IG1hdHRlclwiXG4gICAgICAgICMgaW5mbyAnzqlpbHh0XzQzNCcsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IHRhYnVsYXRlX2xleGVtZXMgZy5zY2FuIHNvdXJjZVxuICAgICAgICAjIGluZm8gJ86paWx4dF80MzUnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBlY2hvIGV4dHJhY3RfcHJvcHMgbGV4ZW1lIGZvciBsZXhlbWUgZnJvbSBnLnNjYW4gc291cmNlXG4gICAgICAgIGluZm8gJ86paWx4dF80MzYnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBsZXhlbWVzID0gZy5zY2FuIHNvdXJjZVxuICAgICAgICBAZXEgKCDOqWlseHRfNDM3ID0gLT4gZXh0cmFjdF9wcm9wcyB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLnN0YXJ0JywgICAgICAgICAgaXNfc3lzdGVtOiB0cnVlLCAgaXNfZXJyb3I6IGZhbHNlLCBpc19zaWduYWw6IHRydWUsICBpc191c2VyOiBmYWxzZSwgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNDM4ID0gLT4gZXh0cmFjdF9wcm9wcyB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgICAgICAgICAgaXNfc3lzdGVtOiB0cnVlLCAgaXNfZXJyb3I6IGZhbHNlLCBpc19zaWduYWw6IHRydWUsICBpc191c2VyOiBmYWxzZSwgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNDM5ID0gLT4gZXh0cmFjdF9wcm9wcyB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdsZXZlbF9vbmUudG9fbGV2ZWxfdHdvJywgaXNfc3lzdGVtOiBmYWxzZSwgaXNfZXJyb3I6IGZhbHNlLCBpc19zaWduYWw6IGZhbHNlLCBpc191c2VyOiB0cnVlLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF80NDAgPSAtPiBleHRyYWN0X3Byb3BzIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuanVtcCcsICAgICAgICAgICBpc19zeXN0ZW06IHRydWUsICBpc19lcnJvcjogZmFsc2UsIGlzX3NpZ25hbDogdHJ1ZSwgIGlzX3VzZXI6IGZhbHNlLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF80NDEgPSAtPiBleHRyYWN0X3Byb3BzIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2xldmVsX3R3by50b19sZXZlbF9vbmUnLCBpc19zeXN0ZW06IGZhbHNlLCBpc19lcnJvcjogZmFsc2UsIGlzX3NpZ25hbDogZmFsc2UsIGlzX3VzZXI6IHRydWUsIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzQ0MiA9IC0+IGV4dHJhY3RfcHJvcHMgdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJGVycm9yLmxvb3AnLCAgICAgICAgICAgIGlzX3N5c3RlbTogdHJ1ZSwgIGlzX2Vycm9yOiB0cnVlLCAgaXNfc2lnbmFsOiBmYWxzZSwgaXNfdXNlcjogZmFsc2UsIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzQ0MyA9IC0+IGV4dHJhY3RfcHJvcHMgdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICAgICAgICAgIGlzX3N5c3RlbTogdHJ1ZSwgIGlzX2Vycm9yOiBmYWxzZSwgaXNfc2lnbmFsOiB0cnVlLCAgaXNfdXNlcjogZmFsc2UsIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzQ0NCA9IC0+IGV4dHJhY3RfcHJvcHMgdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJGVycm9yLmVhcmx5c3RvcCcsICAgICAgIGlzX3N5c3RlbTogdHJ1ZSwgIGlzX2Vycm9yOiB0cnVlLCAgaXNfc2lnbmFsOiBmYWxzZSwgaXNfdXNlcjogZmFsc2UsIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzQ0NSA9IC0+IGV4dHJhY3RfcHJvcHMgdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5zdG9wJywgICAgICAgICAgIGlzX3N5c3RlbTogdHJ1ZSwgIGlzX2Vycm9yOiBmYWxzZSwgaXNfc2lnbmFsOiB0cnVlLCAgaXNfdXNlcjogZmFsc2UsIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzQ0NiA9IC0+IGV4dHJhY3RfcHJvcHMgdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbWVyZ2VfanVtcF9zaWduYWxzOiAtPlxuICAgICAgeyBHcmFtbWFyXG4gICAgICAgIHJ4ICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMjIyBmb3JlIGp1bXAgY2FycnksIGJhY2sganVtcCBzdGlja3kgIyMjXG4gICAgICBkbyA9PlxuICAgICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgZW1pdF9zaWduYWxzOiB0cnVlLCB9XG4gICAgICAgIGduZCAgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2duZCcsICAgICAgfVxuICAgICAgICBudW1iZXIgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdudW1iZXInLCAgIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBnbmQubmV3X3Rva2VuICAgICB7IG5hbWU6ICdsZXR0ZXJzJywgICAgICAgICAgZml0OiAgL1thLXpBLVpdKy8sICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgZ25kLm5ld190b2tlbiAgICAgeyBuYW1lOiAnYmVmb3JlX2RpZ2l0cycsICAgIGZpdDogIC8oPz1bMC05XSkvLCAganVtcDogJ251bWJlciEnLCAgICB9XG4gICAgICAgIGduZC5uZXdfdG9rZW4gICAgIHsgbmFtZTogJ3dzJywgICAgICAgICAgICAgICBmaXQ6ICAvXFxzKy8sICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBudW1iZXIubmV3X3Rva2VuICB7IG5hbWU6ICdpbnRlZ2VyJywgICAgICAgICAgZml0OiAgL1swLTldKy8sICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgbnVtYmVyLm5ld190b2tlbiAgeyBuYW1lOiAndW5pdCcsICAgICAgICAgICAgIGZpdDogIC9bYS16QS1aXSsvLCAgICAganVtcDogJy4uJywgICAgICB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc291cmNlID0gXCI5OWtnMjNtbVwiXG4gICAgICAgIGluZm8gJ86paWx4dF80NDcnLCBycHIgc291cmNlOyB0YWJ1bGF0ZV9sZXhlbWVzIGcuc2NhbiBzb3VyY2VcbiAgICAgICAgIyBpbmZvICfOqWlseHRfNDQ4JywgcnByIHNvdXJjZTsgZy5yZXNldF9sbnIoKTsgZWNobyBhYmJybHhtIGxleGVtZSBmb3IgbGV4ZW1lIGZyb20gZy5zY2FuIHNvdXJjZVxuICAgICAgICBpbmZvICfOqWlseHRfNDQ5JywgcnByIHNvdXJjZTsgZy5yZXNldF9sbnIoKTsgbGV4ZW1lcyA9IGcuc2NhbiBzb3VyY2VcbiAgICAgICAgQGVxICggzqlpbHh0XzQ1MCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5zdGFydCcsICAgICAgICBoaXQ6ICcnLCAgIHBvczogJzE6MDowJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF80NTEgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuanVtcCcsICAgICAgICAgaGl0OiAnJywgICBwb3M6ICcxOjA6MCcsIGRhdGE6IHsgdGFyZ2V0OiAnbnVtYmVyJyB9IH1cbiAgICAgICAgQGVxICggzqlpbHh0XzQ1MiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnbnVtYmVyLmJlZm9yZV9kaWdpdHMnLCBoaXQ6ICcnLCAgIHBvczogJzE6MDowJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF80NTMgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ251bWJlci5pbnRlZ2VyJywgICAgICAgaGl0OiAnOTknLCBwb3M6ICcxOjA6MicgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNDU0ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdudW1iZXIudW5pdCcsICAgICAgICAgIGhpdDogJ2tnJywgcG9zOiAnMToyOjQnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzQ1NSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICAgICAgICBoaXQ6ICcnLCAgIHBvczogJzE6NDo0JywgZGF0YTogeyB0YXJnZXQ6ICdudW1iZXInIH0gfVxuICAgICAgICBAZXEgKCDOqWlseHRfNDU2ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdudW1iZXIuYmVmb3JlX2RpZ2l0cycsIGhpdDogJycsICAgcG9zOiAnMTo0OjQnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzQ1NyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnbnVtYmVyLmludGVnZXInLCAgICAgICBoaXQ6ICcyMycsIHBvczogJzE6NDo2JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF80NTggPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ251bWJlci51bml0JywgICAgICAgICAgaGl0OiAnbW0nLCBwb3M6ICcxOjY6OCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNDU5ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgICAgICAgIGhpdDogJycsICAgcG9zOiAnMTo4OjgnLCBkYXRhOiB7IHRhcmdldDogbnVsbCB9IH1cbiAgICAgICAgQGVxICggzqlpbHh0XzQ2MCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5zdG9wJywgICAgICAgICBoaXQ6ICcnLCAgIHBvczogJzE6ODo4JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF80NjEgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCBudWxsXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBpbmZpbml0ZV9sb29wczpcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgemVyb19tYXRjaGVzX3dpdGhfanVtcHNfYXNfZXhjZXB0aW9uczogLT5cbiAgICAgIHsgR3JhbW1hclxuICAgICAgICByeCAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgZW1pdF9zaWduYWxzOiB0cnVlLCBsb29wX2Vycm9yczogJ3Rocm93JywgfVxuICAgICAgICBsZXZlbF9vbmUgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdsZXZlbF9vbmUnLCAgfVxuICAgICAgICBsZXZlbF90d28gPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdsZXZlbF90d28nLCAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGxldmVsX29uZS5uZXdfdG9rZW4geyBuYW1lOiAndG9fbGV2ZWxfdHdvJywgZml0OiAgLyg/PSkvLCBqdW1wOiAnbGV2ZWxfdHdvJywgfVxuICAgICAgICBsZXZlbF90d28ubmV3X3Rva2VuIHsgbmFtZTogJ3RvX2xldmVsX29uZScsIGZpdDogIC98LywgICAganVtcDogJ2xldmVsX29uZScsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzb3VyY2UgPSBcImRvZXNuJ3QgbWF0dGVyXCJcbiAgICAgICAgIyBpbmZvICfOqWlseHRfNDYyJywgcnByIHNvdXJjZTsgZy5yZXNldF9sbnIoKTsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlXG4gICAgICAgICMgaW5mbyAnzqlpbHh0XzQ2MycsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGVjaG8gYWJicmx4bSBsZXhlbWUgZm9yIGxleGVtZSBmcm9tIGcuc2NhbiBzb3VyY2VcbiAgICAgICAgaW5mbyAnzqlpbHh0XzQ2NCcsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlXG4gICAgICAgIEBlcSAoIM6paWx4dF80NjUgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuc3RhcnQnLCAgICAgICAgICBoaXQ6ICcnLCBwb3M6ICcxOjA6MCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNDY2ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgICAgICAgICAgaGl0OiAnJywgcG9zOiAnMTowOjAnLCBkYXRhOiB7IHRhcmdldDogJ2xldmVsX29uZScgfSB9XG4gICAgICAgIEBlcSAoIM6paWx4dF80NjcgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2xldmVsX29uZS50b19sZXZlbF90d28nLCBoaXQ6ICcnLCBwb3M6ICcxOjA6MCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNDY4ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgICAgICAgICAgaGl0OiAnJywgcG9zOiAnMTowOjAnLCBkYXRhOiB7IHRhcmdldDogJ2xldmVsX3R3bycgfSB9XG4gICAgICAgIEBlcSAoIM6paWx4dF80NjkgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2xldmVsX3R3by50b19sZXZlbF9vbmUnLCBoaXQ6ICcnLCBwb3M6ICcxOjA6MCcgfVxuICAgICAgICBAdGhyb3dzICggzqlpbHh0XzQ3MCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIC9lbmNvdW50ZXJlZCBsb29wL1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB6ZXJvX21hdGNoZXNfd2l0aF9qdW1wc19hc19lcnJvcl9zaWduYWxzOiAtPlxuICAgICAgeyBHcmFtbWFyXG4gICAgICAgIHJ4ICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgbmFtZTogJ2cnLCBlbWl0X3NpZ25hbHM6IHRydWUsIGxvb3BfZXJyb3JzOiAnZW1pdCcsIH1cbiAgICAgICAgbGV2ZWxfb25lID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnbGV2ZWxfb25lJywgIH1cbiAgICAgICAgbGV2ZWxfdHdvID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnbGV2ZWxfdHdvJywgIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBsZXZlbF9vbmUubmV3X3Rva2VuIHsgbmFtZTogJ3RvX2xldmVsX3R3bycsIGZpdDogIC8oPz0pLywganVtcDogJ2xldmVsX3R3bycsIH1cbiAgICAgICAgbGV2ZWxfdHdvLm5ld190b2tlbiB7IG5hbWU6ICd0b19sZXZlbF9vbmUnLCBmaXQ6ICAvfC8sICAgIGp1bXA6ICdsZXZlbF9vbmUnLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc291cmNlID0gXCJkb2Vzbid0IG1hdHRlclwiXG4gICAgICAgICMgaW5mbyAnzqlpbHh0XzQ3MScsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IHRhYnVsYXRlX2xleGVtZXMgZy5zY2FuIHNvdXJjZVxuICAgICAgICAjIGluZm8gJ86paWx4dF80NzInLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBlY2hvIGFiYnJseG0gbGV4ZW1lIGZvciBsZXhlbWUgZnJvbSBnLnNjYW4gc291cmNlXG4gICAgICAgIGluZm8gJ86paWx4dF80NzMnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBsZXhlbWVzID0gZy5zY2FuIHNvdXJjZVxuICAgICAgICBAZXEgKCDOqWlseHRfNDc0ID0gLT4gZy5oYXNfZXJyb3JzICksIGZhbHNlXG4gICAgICAgIEBlcSAoIM6paWx4dF80NzUgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuc3RhcnQnLCAgICAgICAgICBoaXQ6ICcnLCAgICAgICAgICAgICAgIHBvczogJzE6MDowJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF80NzYgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuanVtcCcsICAgICAgICAgICBoaXQ6ICcnLCAgICAgICAgICAgICAgIHBvczogJzE6MDowJywgZGF0YTogeyB0YXJnZXQ6ICdsZXZlbF9vbmUnIH0gfVxuICAgICAgICBAZXEgKCDOqWlseHRfNDc3ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdsZXZlbF9vbmUudG9fbGV2ZWxfdHdvJywgaGl0OiAnJywgICAgICAgICAgICAgICBwb3M6ICcxOjA6MCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNDc4ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgICAgICAgICAgaGl0OiAnJywgICAgICAgICAgICAgICBwb3M6ICcxOjA6MCcsIGRhdGE6IHsgdGFyZ2V0OiAnbGV2ZWxfdHdvJyB9IH1cbiAgICAgICAgQGVxICggzqlpbHh0XzQ3OSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnbGV2ZWxfdHdvLnRvX2xldmVsX29uZScsIGhpdDogJycsICAgICAgICAgICAgICAgcG9zOiAnMTowOjAnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzQ4MCA9IC0+IGcuaGFzX2Vycm9ycyApLCBmYWxzZVxuICAgICAgICBAZXEgKCDOqWlseHRfNDgxID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckZXJyb3IubG9vcCcsICAgICAgICAgICAgaGl0OiAnJywgICAgICAgICAgICAgICBwb3M6ICcxOjA6MCcsIGRhdGE6IHsgbWVzc2FnZTogXCJlbmNvdW50ZXJlZCBsb29wIGF0IHBvc2l0aW9uICswIChpbmRpY2F0ZWQgYnkgJ+KaoCc6ICfimqBkb2VzblxcXFwndCBtYXR0ZXInKVwiIH0gfVxuICAgICAgICBAZXEgKCDOqWlseHRfNDgyID0gLT4gZy5oYXNfZXJyb3JzICksIHRydWVcbiAgICAgICAgQGVxICggzqlpbHh0XzQ4MyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICAgICAgICAgIGhpdDogJycsICAgICAgICAgICAgICAgcG9zOiAnMTowOjAnLCBkYXRhOiB7IHRhcmdldDogbnVsbCB9IH1cbiAgICAgICAgQGVxICggzqlpbHh0XzQ4NCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJGVycm9yLmVhcmx5c3RvcCcsICAgICAgIGhpdDogXCJkb2Vzbid0IG1hdHRlclwiLCBwb3M6ICcxOjA6MTQnLCBkYXRhOiB7IG1lc3NhZ2U6ICdleHBlY3RlZCBzdG9wIGF0IDE0LCBnb3QgKzAnIH0gfVxuICAgICAgICBAZXEgKCDOqWlseHRfNDg1ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLnN0b3AnLCAgICAgICAgICAgaGl0OiAnJywgICAgICAgICAgICAgICBwb3M6ICcxOjA6MCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNDg2ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgICBAZXEgKCDOqWlseHRfNDg3ID0gLT4gZy5oYXNfZXJyb3JzICksIHRydWVcbiAgICAgICAgbGV4ZW1lcyA9IGcuc2NhbiBzb3VyY2VcbiAgICAgICAgYWJicmx4bSBsZXhlbWVzLm5leHQoKS52YWx1ZVxuICAgICAgICBAZXEgKCDOqWlseHRfNDg4ID0gLT4gZy5oYXNfZXJyb3JzICksIHRydWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaGFzX2Vycm9yczogLT5cbiAgICAgIHsgR3JhbW1hclxuICAgICAgICByeCAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgcmVzZXRfZXJyb3JzOiB0cnVlLCBlbWl0X3NpZ25hbHM6IHRydWUsIGxvb3BfZXJyb3JzOiAnZW1pdCcsIH1cbiAgICAgIGduZCAgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2duZCcsIH1cbiAgICAgIEBlcSAoIM6paWx4dF80ODkgPSAtPiBbIGcuc3RhdGUuZXJyb3JzLmxlbmd0aCwgZy5oYXNfZXJyb3JzLCBdICksIFsgMCwgZmFsc2UgXVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBnLnN0YXRlLmVycm9ycy5wdXNoIG51bGxcbiAgICAgIGcuc3RhdGUuZXJyb3JzLnB1c2ggbnVsbFxuICAgICAgQGVxICggzqlpbHh0XzQ5MCA9IC0+IFsgZy5zdGF0ZS5lcnJvcnMubGVuZ3RoLCBnLmhhc19lcnJvcnMsIF0gKSwgWyAyLCB0cnVlIF1cbiAgICAgIGxleGVtZXMgPSBnLnNjYW4gJ2doaSdcbiAgICAgIEBlcSAoIM6paWx4dF80OTEgPSAtPiBbIGcuc3RhdGUuZXJyb3JzLmxlbmd0aCwgZy5oYXNfZXJyb3JzLCBdICksIFsgMiwgdHJ1ZSBdXG4gICAgICBAZXEgKCDOqWlseHRfNDkyID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLnN0YXJ0JywgICAgaGl0OiAnJywgICAgcG9zOiAnMTowOjAnIH1cbiAgICAgIEBlcSAoIM6paWx4dF80OTMgPSAtPiBbIGcuc3RhdGUuZXJyb3JzLmxlbmd0aCwgZy5oYXNfZXJyb3JzLCBdICksIFsgMCwgZmFsc2UgXVxuICAgICAgQGVxICggzqlpbHh0XzQ5NCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICAgIGhpdDogJycsICAgIHBvczogJzE6MDowJywgZGF0YTogeyB0YXJnZXQ6IG51bGwgfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNDk1ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckZXJyb3IuZWFybHlzdG9wJywgaGl0OiAnZ2hpJywgcG9zOiAnMTowOjMnLCBkYXRhOiB7IG1lc3NhZ2U6ICdleHBlY3RlZCBzdG9wIGF0IDMsIGdvdCArMCcgfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNDk2ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLnN0b3AnLCAgICAgaGl0OiAnJywgICAgcG9zOiAnMTowOjAnIH1cbiAgICAgIEBlcSAoIM6paWx4dF80OTcgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCBudWxsXG4gICAgICBAZXEgKCDOqWlseHRfNDk4ID0gLT4gWyBnLnN0YXRlLmVycm9ycy5sZW5ndGgsIGcuaGFzX2Vycm9ycywgXSApLCBbIDEsIHRydWUgXVxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY2FuX3Rocm93X2Vhcmx5c3RvcF9lcnJvcnM6IC0+XG4gICAgICB7IEdyYW1tYXJcbiAgICAgICAgcnggICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZyAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBuYW1lOiAnZycsIHJlc2V0X2Vycm9yczogdHJ1ZSwgZW1pdF9zaWduYWxzOiB0cnVlLCBsb29wX2Vycm9yczogJ2VtaXQnLCBlYXJseXN0b3BfZXJyb3JzOiAndGhyb3cnLCB9XG4gICAgICBnbmQgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnLCB9XG4gICAgICBAZXEgKCDOqWlseHRfNDk5ID0gLT4gWyBnLnN0YXRlLmVycm9ycy5sZW5ndGgsIGcuaGFzX2Vycm9ycywgXSApLCBbIDAsIGZhbHNlIF1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZy5zdGF0ZS5lcnJvcnMucHVzaCBudWxsXG4gICAgICBnLnN0YXRlLmVycm9ycy5wdXNoIG51bGxcbiAgICAgIEBlcSAoIM6paWx4dF81MDAgPSAtPiBbIGcuc3RhdGUuZXJyb3JzLmxlbmd0aCwgZy5oYXNfZXJyb3JzLCBdICksIFsgMiwgdHJ1ZSBdXG4gICAgICBsZXhlbWVzID0gZy5zY2FuICdnaGknXG4gICAgICBAZXEgKCDOqWlseHRfNTAxID0gLT4gWyBnLnN0YXRlLmVycm9ycy5sZW5ndGgsIGcuaGFzX2Vycm9ycywgXSApLCBbIDIsIHRydWUgXVxuICAgICAgQGVxICggzqlpbHh0XzUwMiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5zdGFydCcsICAgIGhpdDogJycsICAgIHBvczogJzE6MDowJyB9XG4gICAgICBAZXEgKCDOqWlseHRfNTAzID0gLT4gWyBnLnN0YXRlLmVycm9ycy5sZW5ndGgsIGcuaGFzX2Vycm9ycywgXSApLCBbIDAsIGZhbHNlIF1cbiAgICAgIEB0aHJvd3MgKCDOqWlseHRfNTA0ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgL2V4cGVjdGVkIHN0b3AgYXQgMy9cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG9rX3doZW5fbGV2ZWxzX2JhY2tfdG9fYmFjazogLT5cbiAgICAgIHsgR3JhbW1hclxuICAgICAgICByeCAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgZW1pdF9zaWduYWxzOiB0cnVlLCB9XG4gICAgICAgIHRleHQgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAndGV4dCcsIH1cbiAgICAgICAgdGFnICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICd0YWcnLCAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHRleHQubmV3X3Rva2VuIHsgbmFtZTogJ3ByZXRhZycsICAgIGZpdDogIC8oPz08KS8sICAgICAganVtcDogJ3RhZycsICB9XG4gICAgICAgIHRleHQubmV3X3Rva2VuIHsgbmFtZTogJ3RleHQnLCAgICAgIGZpdDogIC8uKy8sICAgICAgICAganVtcDogbnVsbCwgICB9XG4gICAgICAgIHRhZy5uZXdfdG9rZW4gIHsgbmFtZTogJ3RhZycsICAgICAgIGZpdDogIC88W14+XSo+Kz8vLCAganVtcDogJ3RleHQnLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgIyBzb3VyY2UgPSBcIjx0YWctYT48dGFnLWI+PHRhZy1jPjx0YWctZD5cIlxuICAgICAgICAjIHNvdXJjZSA9IFwiPHRhZy1hPjx0YWctYj48dGFnLWM+XCJcbiAgICAgICAgc291cmNlID0gXCI8dGFnLWE+PHRhZy1iPlwiXG4gICAgICAgICMgc291cmNlID0gXCI8dGFnLWE+XCJcbiAgICAgICAgIyBpbmZvICfOqWlseHRfNTA1JywgcnByIHNvdXJjZTsgZy5yZXNldF9sbnIoKTsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlXG4gICAgICAgICMgaW5mbyAnzqlpbHh0XzUwNicsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGVjaG8gYWJicmx4bSBsZXhlbWUgZm9yIGxleGVtZSBmcm9tIGcuc2NhbiBzb3VyY2VcbiAgICAgICAgaW5mbyAnzqlpbHh0XzUwNycsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlXG4gICAgICAgIEBlcSAoIM6paWx4dF81MDggPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuc3RhcnQnLCBoaXQ6ICcnLCAgICAgICAgcG9zOiAnMTowOjAnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzUwOSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgIGhpdDogJycsICAgICAgICBwb3M6ICcxOjA6MCcsIGRhdGE6IHsgdGFyZ2V0OiAndGV4dCcgfSB9XG4gICAgICAgIEBlcSAoIM6paWx4dF81MTAgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RleHQucHJldGFnJywgICBoaXQ6ICcnLCAgICAgICAgcG9zOiAnMTowOjAnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzUxMSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgIGhpdDogJycsICAgICAgICBwb3M6ICcxOjA6MCcsIGRhdGE6IHsgdGFyZ2V0OiAndGFnJyB9IH1cbiAgICAgICAgQGVxICggzqlpbHh0XzUxMiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAndGFnLnRhZycsICAgICAgIGhpdDogJzx0YWctYT4nLCBwb3M6ICcxOjA6NycgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNTEzID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgaGl0OiAnJywgICAgICAgIHBvczogJzE6Nzo3JywgZGF0YTogeyB0YXJnZXQ6ICd0ZXh0JyB9IH1cbiAgICAgICAgQGVxICggzqlpbHh0XzUxNCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAndGV4dC5wcmV0YWcnLCAgIGhpdDogJycsICAgICAgICBwb3M6ICcxOjc6NycgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNTE1ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgaGl0OiAnJywgICAgICAgIHBvczogJzE6Nzo3JywgZGF0YTogeyB0YXJnZXQ6ICd0YWcnIH0gfVxuICAgICAgICBAZXEgKCDOqWlseHRfNTE2ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICd0YWcudGFnJywgICAgICAgaGl0OiAnPHRhZy1iPicsIHBvczogJzE6NzoxNCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNTE3ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgaGl0OiAnJywgICAgICAgIHBvczogJzE6MTQ6MTQnLCBkYXRhOiB7IHRhcmdldDogbnVsbCB9IH1cbiAgICAgICAgQGVxICggzqlpbHh0XzUxOCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5zdG9wJywgIGhpdDogJycsICAgICAgICBwb3M6ICcxOjE0OjE0JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF81MTkgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCBudWxsXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBnaG9zdF90b2tlbnM6XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG9rX3doZW5fbGV2ZWxzX2JhY2tfdG9fYmFjazogLT5cbiAgICAgIHsgR3JhbW1hclxuICAgICAgICByeCAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgZW1pdF9zaWduYWxzOiB0cnVlLCB9XG4gICAgICAgIHRleHQgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAndGV4dCcsIH1cbiAgICAgICAgdGFnICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICd0YWcnLCAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHRleHQubmV3X3Rva2VuIHsgbmFtZTogJ3ByZXRhZycsICAgIGZpdDogIC8oPz08KS8sICAgICAganVtcDogJ3RhZycsICBlbWl0OiBmYWxzZSwgfVxuICAgICAgICB0ZXh0Lm5ld190b2tlbiB7IG5hbWU6ICd0ZXh0JywgICAgICBmaXQ6ICAvW148XSsvLCAgICAgIGp1bXA6IG51bGwsICAgfVxuICAgICAgICB0YWcubmV3X3Rva2VuICB7IG5hbWU6ICd0YWcnLCAgICAgICBmaXQ6ICAvPFtePl0qPis/LywgIGp1bXA6ICcuLicsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAjIHNvdXJjZSA9IFwiPHRhZy1hPjx0YWctYj48dGFnLWM+PHRhZy1kPlwiXG4gICAgICAgICMgc291cmNlID0gXCI8dGFnLWE+PHRhZy1iPjx0YWctYz5cIlxuICAgICAgICAjIHNvdXJjZSA9IFwiPHRhZy1hPmM8dGFnLWI+XCJcbiAgICAgICAgIyBzb3VyY2UgPSBcIjx0YWctYT5cIlxuICAgICAgICAjIHNvdXJjZSA9IFwidGV4dDE8dGFnLWE+dGV4dDI8dGFnLWI+dGV4dDNcIlxuICAgICAgICBzb3VyY2UgPSBcIjx0YWctYT48dGFnLWI+XCJcbiAgICAgICAgaW5mbyAnzqlpbHh0XzUyMCcsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IHRhYnVsYXRlX2xleGVtZXMgZy5zY2FuIHNvdXJjZVxuICAgICAgICAjIGluZm8gJ86paWx4dF81MjEnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBlY2hvIGFiYnJseG0gbGV4ZW1lIGZvciBsZXhlbWUgZnJvbSBnLnNjYW4gc291cmNlXG4gICAgICAgIGluZm8gJ86paWx4dF81MjInLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBsZXhlbWVzID0gZy5zY2FuIHNvdXJjZVxuICAgICAgICBAZXEgKCDOqWlseHRfNTIzID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLnN0YXJ0JywgaGl0OiAnJywgICAgICAgIHBvczogJzE6MDowJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF81MjQgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuanVtcCcsICBoaXQ6ICcnLCAgICAgICAgcG9zOiAnMTowOjAnLCBkYXRhOiB7IHRhcmdldDogJ3RhZycgfSB9XG4gICAgICAgIEBlcSAoIM6paWx4dF81MjUgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3RhZy50YWcnLCAgICAgICBoaXQ6ICc8dGFnLWE+JywgcG9zOiAnMTowOjcnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzUyNiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgIGhpdDogJycsICAgICAgICBwb3M6ICcxOjc6NycsIGRhdGE6IHsgdGFyZ2V0OiAndGFnJyB9IH1cbiAgICAgICAgQGVxICggzqlpbHh0XzUyNyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAndGFnLnRhZycsICAgICAgIGhpdDogJzx0YWctYj4nLCBwb3M6ICcxOjc6MTQnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzUyOCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgIGhpdDogJycsICAgICAgICBwb3M6ICcxOjE0OjE0JywgZGF0YTogeyB0YXJnZXQ6IG51bGwgfSB9XG4gICAgICAgIEBlcSAoIM6paWx4dF81MjkgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuc3RvcCcsICBoaXQ6ICcnLCAgICAgICAgcG9zOiAnMToxNDoxNCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNTMwID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdG9rZW5fZGF0YTpcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY2FuX3VzZV90b2tlbl9kYXRhXzE6IC0+XG4gICAgICB7IEdyYW1tYXJcbiAgICAgICAgcnhcbiAgICAgICAgaW50ZXJuYWxzIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBjYXN0ID0gKHsgaGl0LCBzdGFydCwgc291cmNlLCBuZXdfbGV4ZW1lLCBsZXhlbWUsIH0pIC0+XG4gICAgICAgIHVubGVzcyBoaXQgaXMgJ2MnXG4gICAgICAgICAgeWllbGQgbGV4ZW1lXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgeWllbGQgbmV3X2xleGVtZSAnZXJyb3Iubm9saWtlZGlzJywgc3RhcnQsIHNvdXJjZSwgeyBsZXR0ZXI6IGhpdCwgaXNfdXBwZXI6IGxleGVtZS5kYXRhLmlzX3VwcGVyLCB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgbmFtZTogJ2cnLCBlbWl0X3NpZ25hbHM6IGZhbHNlLCB9XG4gICAgICBnbmQgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnLCB9XG4gICAgICBlcnJvciAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdlcnJvcicsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgbmFtZTEgPSBnbmQubmV3X3Rva2VuIHsgbmFtZTogJ25hbWUxJywgICAgICAgICAgIGZpdDogcnhcIig/PGluaXRpYWw+W0EtWl0pXCIsIG1lcmdlOiB0cnVlLCAgICAgICBkYXRhOiB7IGlzX3VwcGVyOiB0cnVlLCB9LCB9XG4gICAgICBuYW1lMiA9IGduZC5uZXdfdG9rZW4geyBuYW1lOiAnbmFtZTInLCAgICAgICAgICAgZml0OiByeFwiKD88bG93ZXI+W2Etel0pXCIsICAgbWVyZ2U6IHRydWUsIGNhc3QsIGRhdGE6IHsgaXNfdXBwZXI6IGZhbHNlLCB9LCB9XG4gICAgICBlcnJvci5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnbm9saWtlZGlzJywgICAgICAgZml0OiByeFwiLlwiLCAgICAgICAgICAgICAgICAgbWVyZ2U6IHRydWUsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbHh0XzUzMSA9IC0+IG5hbWUxLmRhdGEgKSwgeyBpc191cHBlcjogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlpbHh0XzUzMiA9IC0+IG5hbWUyLmRhdGEgKSwgeyBpc191cHBlcjogZmFsc2UsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc291cmNlID0gXCJBY2NlcHRyZWplY3RcIlxuICAgICAgIyBpbmZvICfOqWlseHRfNTMzJywgcnByIHNvdXJjZTsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlXG4gICAgICAjIGluZm8gJ86paWx4dF81MzQnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBlY2hvIGFiYnJseG0gbGV4ZW1lIGZvciBsZXhlbWUgZnJvbSBnLnNjYW4gc291cmNlXG4gICAgICBpbmZvICfOqWlseHRfNTM1JywgcnByIHNvdXJjZTsgZy5yZXNldF9sbnIoKTsgbGV4ZW1lcyA9IGcuc2NhbiBzb3VyY2VcbiAgICAgIEBlcSAoIM6paWx4dF81MzYgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5uYW1lMScsICAgICAgIGhpdDogJ0EnLCBwb3M6ICcxOjA6MScsIGRhdGE6IHsgaW5pdGlhbDogWyAnQScgXSwgaXNfdXBwZXI6IFsgdHJ1ZSwgXSwgfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNTM3ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdlcnJvci5ub2xpa2VkaXMnLCBoaXQ6ICdjYycsIHBvczogJzE6MTozJywgZGF0YTogeyBsZXR0ZXI6IFsgJ2MnLCAnYycgXSwgaXNfdXBwZXI6IFsgZmFsc2UsIGZhbHNlLCBdIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzUzOCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLm5hbWUyJywgICAgICAgaGl0OiAnZXB0cmVqZScsIHBvczogJzE6MzoxMCcsIGRhdGE6IHsgbG93ZXI6IFsgJ2UnLCAncCcsICd0JywgJ3InLCAnZScsICdqJywgJ2UnIF0sIGlzX3VwcGVyOiBbIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBdLCB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF81MzkgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2Vycm9yLm5vbGlrZWRpcycsIGhpdDogJ2MnLCBwb3M6ICcxOjEwOjExJywgZGF0YTogeyBsZXR0ZXI6IFsgJ2MnIF0sIGlzX3VwcGVyOiBbIGZhbHNlLCBdLCB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF81NDAgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5uYW1lMicsICAgICAgIGhpdDogJ3QnLCBwb3M6ICcxOjExOjEyJywgZGF0YTogeyBsb3dlcjogWyAndCcgXSwgaXNfdXBwZXI6IFsgZmFsc2UsIF0sIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzU0MSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY2FuX3VzZV90b2tlbl9kYXRhXzI6IC0+XG4gICAgICB7IEdyYW1tYXJcbiAgICAgICAgcnhcbiAgICAgICAgaW50ZXJuYWxzIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBjYXN0ID0gKHsgaGl0LCBzdGFydCwgc291cmNlLCBuZXdfbGV4ZW1lLCBsZXhlbWUsIH0pIC0+XG4gICAgICAgIHVubGVzcyBoaXQgaXMgJ2MnXG4gICAgICAgICAgeWllbGQgbGV4ZW1lXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgeWllbGQgbmV3X2xleGVtZSAnZXJyb3Iubm9saWtlZGlzJywgc3RhcnQsIHNvdXJjZSwgeyBsZXR0ZXI6IGhpdCwgaXNfdXBwZXI6IGxleGVtZS5kYXRhLmlzX3VwcGVyLCB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgbmFtZTogJ2cnLCBlbWl0X3NpZ25hbHM6IGZhbHNlLCB9XG4gICAgICBnbmQgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnLCB9XG4gICAgICBlcnJvciAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdlcnJvcicsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgbmFtZTEgPSBnbmQubmV3X3Rva2VuIHsgbmFtZTogJ25hbWUxJywgICAgICAgICAgIGZpdDogcnhcIig/PGluaXRpYWw+W0EtWl0pXCIsIG1lcmdlOiBmYWxzZSwgICAgICAgZGF0YTogeyBpc191cHBlcjogdHJ1ZSwgfSwgfVxuICAgICAgbmFtZTIgPSBnbmQubmV3X3Rva2VuIHsgbmFtZTogJ25hbWUyJywgICAgICAgICAgIGZpdDogcnhcIig/PGxvd2VyPlthLXpdKVwiLCAgIG1lcmdlOiBmYWxzZSwgY2FzdCwgZGF0YTogeyBpc191cHBlcjogZmFsc2UsIH0sIH1cbiAgICAgIGVycm9yLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdub2xpa2VkaXMnLCAgICAgICBmaXQ6IHJ4XCIuXCIsICAgICAgICAgICAgICAgICBtZXJnZTogZmFsc2UsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlpbHh0XzU0MiA9IC0+IG5hbWUxLmRhdGEgKSwgeyBpc191cHBlcjogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlpbHh0XzU0MyA9IC0+IG5hbWUyLmRhdGEgKSwgeyBpc191cHBlcjogZmFsc2UsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc291cmNlID0gXCJBY2NlcHRyZWplY3RcIlxuICAgICAgIyBpbmZvICfOqWlseHRfNTQ0JywgcnByIHNvdXJjZTsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlXG4gICAgICAjIGluZm8gJ86paWx4dF81NDUnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBlY2hvIGFiYnJseG0gbGV4ZW1lIGZvciBsZXhlbWUgZnJvbSBnLnNjYW4gc291cmNlXG4gICAgICBpbmZvICfOqWlseHRfNTQ2JywgcnByIHNvdXJjZTsgZy5yZXNldF9sbnIoKTsgbGV4ZW1lcyA9IGcuc2NhbiBzb3VyY2VcbiAgICAgIEBlcSAoIM6paWx4dF81NDcgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5uYW1lMScsIGhpdDogJ0EnLCBwb3M6ICcxOjA6MScsIGRhdGE6IHsgaXNfdXBwZXI6IHRydWUsIGluaXRpYWw6ICdBJyB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF81NDggPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2Vycm9yLm5vbGlrZWRpcycsIGhpdDogJ2MnLCBwb3M6ICcxOjE6MicsIGRhdGE6IHsgbGV0dGVyOiAnYycsIGlzX3VwcGVyOiBmYWxzZSB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF81NDkgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2Vycm9yLm5vbGlrZWRpcycsIGhpdDogJ2MnLCBwb3M6ICcxOjI6MycsIGRhdGE6IHsgbGV0dGVyOiAnYycsIGlzX3VwcGVyOiBmYWxzZSB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF81NTAgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5uYW1lMicsIGhpdDogJ2UnLCBwb3M6ICcxOjM6NCcsIGRhdGE6IHsgaXNfdXBwZXI6IGZhbHNlLCBsb3dlcjogJ2UnIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzU1MSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLm5hbWUyJywgaGl0OiAncCcsIHBvczogJzE6NDo1JywgZGF0YTogeyBpc191cHBlcjogZmFsc2UsIGxvd2VyOiAncCcgfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNTUyID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQubmFtZTInLCBoaXQ6ICd0JywgcG9zOiAnMTo1OjYnLCBkYXRhOiB7IGlzX3VwcGVyOiBmYWxzZSwgbG93ZXI6ICd0JyB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF81NTMgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5uYW1lMicsIGhpdDogJ3InLCBwb3M6ICcxOjY6NycsIGRhdGE6IHsgaXNfdXBwZXI6IGZhbHNlLCBsb3dlcjogJ3InIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzU1NCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLm5hbWUyJywgaGl0OiAnZScsIHBvczogJzE6Nzo4JywgZGF0YTogeyBpc191cHBlcjogZmFsc2UsIGxvd2VyOiAnZScgfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNTU1ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQubmFtZTInLCBoaXQ6ICdqJywgcG9zOiAnMTo4OjknLCBkYXRhOiB7IGlzX3VwcGVyOiBmYWxzZSwgbG93ZXI6ICdqJyB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF81NTYgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5uYW1lMicsIGhpdDogJ2UnLCBwb3M6ICcxOjk6MTAnLCBkYXRhOiB7IGlzX3VwcGVyOiBmYWxzZSwgbG93ZXI6ICdlJyB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF81NTcgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2Vycm9yLm5vbGlrZWRpcycsIGhpdDogJ2MnLCBwb3M6ICcxOjEwOjExJywgZGF0YTogeyBsZXR0ZXI6ICdjJywgaXNfdXBwZXI6IGZhbHNlIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzU1OCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLm5hbWUyJywgaGl0OiAndCcsIHBvczogJzE6MTE6MTInLCBkYXRhOiB7IGlzX3VwcGVyOiBmYWxzZSwgbG93ZXI6ICd0JyB9IH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY2FuX3VzZV90b2tlbl9kYXRhXzM6IC0+XG4gICAgICB7IEdyYW1tYXJcbiAgICAgICAgcnhcbiAgICAgICAgaW50ZXJuYWxzIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgZW1pdF9zaWduYWxzOiBmYWxzZSwgfVxuICAgICAgZ25kICAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZ25kJywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBuYW1lMSA9IGduZC5uZXdfdG9rZW4geyBuYW1lOiAnbmFtZTEnLCBmaXQ6ICdBJywgZGF0YTogeyBpc191cHBlcjogdHJ1ZSwgfSwgfVxuICAgICAgbmFtZTIgPSBnbmQubmV3X3Rva2VuIHsgbmFtZTogJ25hbWUyJywgZml0OiAnYicsIGRhdGE6IHsgaXNfdXBwZXI6IGZhbHNlLCB9LCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNvdXJjZSA9IFwiQWJBYlwiXG4gICAgICAjIGluZm8gJ86paWx4dF81NTknLCBycHIgc291cmNlOyB0YWJ1bGF0ZV9sZXhlbWVzIGcuc2NhbiBzb3VyY2VcbiAgICAgICMgaW5mbyAnzqlpbHh0XzU2MCcsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGVjaG8gYWJicmx4bSBsZXhlbWUgZm9yIGxleGVtZSBmcm9tIGcuc2NhbiBzb3VyY2VcbiAgICAgIGluZm8gJ86paWx4dF81NjEnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBsZXhlbWVzID0gZy5zY2FuIHNvdXJjZVxuICAgICAgQGVxICggzqlpbHh0XzU2MiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLm5hbWUxJywgaGl0OiAnQScsIHBvczogJzE6MDoxJywgZGF0YTogeyBpc191cHBlcjogdHJ1ZSB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF81NjIgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5uYW1lMicsIGhpdDogJ2InLCBwb3M6ICcxOjE6MicsIGRhdGE6IHsgaXNfdXBwZXI6IGZhbHNlIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzU2MiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLm5hbWUxJywgaGl0OiAnQScsIHBvczogJzE6MjozJywgZGF0YTogeyBpc191cHBlcjogdHJ1ZSB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF81NjIgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5uYW1lMicsIGhpdDogJ2InLCBwb3M6ICcxOjM6NCcsIGRhdGE6IHsgaXNfdXBwZXI6IGZhbHNlIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzU3MyA9IC0+IGxleGVtZXMubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdXNlcl9lcnJvcnM6XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHVzZXJfZXJyb3JfZGVjbGFyZWRfb25fdG9rZW46IC0+XG4gICAgICB7IEdyYW1tYXJcbiAgICAgICAgcnhcbiAgICAgICAgaW50ZXJuYWxzIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBjYXN0ID0gKHsgaGl0LCBzdGFydCwgc291cmNlLCBuZXdfbGV4ZW1lLCBsZXhlbWUsIH0pIC0+XG4gICAgICAgIHVubGVzcyBoaXQgaXMgJ2MnXG4gICAgICAgICAgeWllbGQgbGV4ZW1lXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgeWllbGQgbmV3X2xleGVtZSAnZXJyb3Iubm9saWtlZGlzJywgc3RhcnQsIHNvdXJjZSwgeyBsZXR0ZXI6IGhpdCwgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgZW1pdF9zaWduYWxzOiB0cnVlLCB9XG4gICAgICBnbmQgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnLCB9XG4gICAgICBlcnJvciAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdlcnJvcicsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgbmFtZTEgPSBnbmQubmV3X3Rva2VuIHsgbmFtZTogJ25hbWUxJywgICAgICAgICAgIGZpdDogcnhcIig/PGluaXRpYWw+W0EtWl0pXCIsIG1lcmdlOiB0cnVlLCB9XG4gICAgICBuYW1lMiA9IGduZC5uZXdfdG9rZW4geyBuYW1lOiAnbmFtZTInLCAgICAgICAgICAgZml0OiByeFwiKD88bG93ZXI+W2Etel0pXCIsICAgbWVyZ2U6IHRydWUsIGNhc3QsIH1cbiAgICAgIGVycm9yLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdub2xpa2VkaXMnLCAgICAgICBmaXQ6IHJ4XCIuXCIsICAgICAgICAgICAgICAgICBtZXJnZTogdHJ1ZSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWlseHRfNTc0ID0gLT4gZy5jYXN0ICAgICAgICAgICAgICAgKSwgbnVsbFxuICAgICAgQGVxICggzqlpbHh0XzU3NSA9IC0+IGcuY2FzdF9tZXRob2QgICAgICAgICksIG51bGxcbiAgICAgIEBlcSAoIM6paWx4dF81NzYgPSAtPiBnbmQuY2FzdCAgICAgICAgICAgICApLCBudWxsXG4gICAgICBAZXEgKCDOqWlseHRfNTc3ID0gLT4gZ25kLmNhc3RfbWV0aG9kICAgICAgKSwgbnVsbFxuICAgICAgQGVxICggzqlpbHh0XzU3OCA9IC0+IGVycm9yLmNhc3QgICAgICAgICAgICksIG51bGxcbiAgICAgIEBlcSAoIM6paWx4dF81NzkgPSAtPiBlcnJvci5jYXN0X21ldGhvZCAgICApLCBudWxsXG4gICAgICBAZXEgKCDOqWlseHRfNTgwID0gLT4gbmFtZTIuY2FzdCBpcyBjYXN0ICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbHh0XzU4MSA9IC0+IG5hbWUyLmNhc3RfbWV0aG9kICAgICksICd3YWxrJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzb3VyY2UgPSBcIkFjY2VwdHJlamVjdFwiXG4gICAgICAjIGluZm8gJ86paWx4dF81ODInLCBycHIgc291cmNlOyB0YWJ1bGF0ZV9sZXhlbWVzIGcuc2NhbiBzb3VyY2VcbiAgICAgICMgaW5mbyAnzqlpbHh0XzU4MycsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGVjaG8gYWJicmx4bSBsZXhlbWUgZm9yIGxleGVtZSBmcm9tIGcuc2NhbiBzb3VyY2VcbiAgICAgIGluZm8gJ86paWx4dF81ODQnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBsZXhlbWVzID0gZy5zY2FuIHNvdXJjZVxuICAgICAgQGVxICggzqlpbHh0XzU4NSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5zdGFydCcsICAgaGl0OiAnJywgcG9zOiAnMTowOjAnIH1cbiAgICAgIEBlcSAoIM6paWx4dF81ODYgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuanVtcCcsICAgIGhpdDogJycsIHBvczogJzE6MDowJywgZGF0YTogeyB0YXJnZXQ6ICdnbmQnIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzU4NyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLm5hbWUxJywgICAgICAgaGl0OiAnQScsIHBvczogJzE6MDoxJywgZGF0YTogeyBpbml0aWFsOiBbICdBJyBdIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzU4OCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICAgaGl0OiAnJywgcG9zOiAnMToxOjEnLCBkYXRhOiB7IHRhcmdldDogJ2Vycm9yJyB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF81ODkgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2Vycm9yLm5vbGlrZWRpcycsIGhpdDogJ2NjJywgcG9zOiAnMToxOjMnLCBkYXRhOiB7IGxldHRlcjogWyAnYycsICdjJyBdIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzU5MCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICAgaGl0OiAnJywgcG9zOiAnMTozOjMnLCBkYXRhOiB7IHRhcmdldDogJ2duZCcgfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNTkxID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQubmFtZTInLCAgICAgICBoaXQ6ICdlcHRyZWplJywgcG9zOiAnMTozOjEwJywgZGF0YTogeyBsb3dlcjogWyAnZScsICdwJywgJ3QnLCAncicsICdlJywgJ2onLCAnZScgXSB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF81OTIgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuanVtcCcsICAgIGhpdDogJycsIHBvczogJzE6MTA6MTAnLCBkYXRhOiB7IHRhcmdldDogJ2Vycm9yJyB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF81OTMgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2Vycm9yLm5vbGlrZWRpcycsIGhpdDogJ2MnLCBwb3M6ICcxOjEwOjExJywgZGF0YTogeyBsZXR0ZXI6IFsgJ2MnIF0gfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNTk0ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgICBoaXQ6ICcnLCBwb3M6ICcxOjExOjExJywgZGF0YTogeyB0YXJnZXQ6ICdnbmQnIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzU5NSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLm5hbWUyJywgICAgICAgaGl0OiAndCcsIHBvczogJzE6MTE6MTInLCBkYXRhOiB7IGxvd2VyOiBbICd0JyBdIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzU5NiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICAgaGl0OiAnJywgcG9zOiAnMToxMjoxMicsIGRhdGE6IHsgdGFyZ2V0OiBudWxsIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzU5NyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5zdG9wJywgICAgaGl0OiAnJywgcG9zOiAnMToxMjoxMicgfVxuICAgICAgQGVxICggzqlpbHh0XzU5OCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdXNlcl9lcnJvcl9kZWNsYXJlZF9vbl9sZXZlbDogLT5cbiAgICAgIHsgR3JhbW1hclxuICAgICAgICByeFxuICAgICAgICBpbnRlcm5hbHMgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIGNhc3QgPSAoeyBoaXQsIHN0YXJ0LCBzb3VyY2UsIG5ld19sZXhlbWUsIGxleGVtZSwgfSkgLT5cbiAgICAgICAgdW5sZXNzIGhpdCBpcyAnYydcbiAgICAgICAgICB5aWVsZCBsZXhlbWVcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB5aWVsZCBuZXdfbGV4ZW1lICdlcnJvci5ub2xpa2VkaXMnLCBzdGFydCwgc291cmNlLCB7IGxldHRlcjogaGl0LCB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgbmFtZTogJ2cnLCBlbWl0X3NpZ25hbHM6IHRydWUsIH1cbiAgICAgIGduZCAgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2duZCcsIGNhc3QsIH1cbiAgICAgIGVycm9yICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2Vycm9yJywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBuYW1lMSA9IGduZC5uZXdfdG9rZW4geyBuYW1lOiAnbmFtZTEnLCAgICAgICAgICAgZml0OiByeFwiKD88aW5pdGlhbD5bQS1aXSlcIiwgbWVyZ2U6IHRydWUsIH1cbiAgICAgIG5hbWUyID0gZ25kLm5ld190b2tlbiB7IG5hbWU6ICduYW1lMicsICAgICAgICAgICBmaXQ6IHJ4XCIoPzxsb3dlcj5bYS16XSlcIiwgICBtZXJnZTogdHJ1ZSwgfVxuICAgICAgZXJyb3IubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ25vbGlrZWRpcycsICAgICAgIGZpdDogcnhcIi5cIiwgICAgICAgICAgICAgICAgIG1lcmdlOiB0cnVlLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6paWx4dF81OTkgPSAtPiBnLmNhc3QgICAgICAgICAgICAgICApLCBudWxsXG4gICAgICBAZXEgKCDOqWlseHRfNjAwID0gLT4gZy5jYXN0X21ldGhvZCAgICAgICAgKSwgbnVsbFxuICAgICAgQGVxICggzqlpbHh0XzYwMSA9IC0+IGduZC5jYXN0IGlzIGNhc3QgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6paWx4dF82MDIgPSAtPiBnbmQuY2FzdF9tZXRob2QgICAgICApLCAnd2FsaydcbiAgICAgIEBlcSAoIM6paWx4dF82MDMgPSAtPiBlcnJvci5jYXN0ICAgICAgICAgICApLCBudWxsXG4gICAgICBAZXEgKCDOqWlseHRfNjA0ID0gLT4gZXJyb3IuY2FzdF9tZXRob2QgICAgKSwgbnVsbFxuICAgICAgQGVxICggzqlpbHh0XzYwNSA9IC0+IG5hbWUyLmNhc3QgICAgICAgICAgICksIG51bGxcbiAgICAgIEBlcSAoIM6paWx4dF82MDYgPSAtPiBuYW1lMi5jYXN0X21ldGhvZCAgICApLCBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNvdXJjZSA9IFwiQWNjZXB0cmVqZWN0XCJcbiAgICAgICMgaW5mbyAnzqlpbHh0XzYwNycsIHJwciBzb3VyY2U7IHRhYnVsYXRlX2xleGVtZXMgZy5zY2FuIHNvdXJjZVxuICAgICAgIyBpbmZvICfOqWlseHRfNjA4JywgcnByIHNvdXJjZTsgZy5yZXNldF9sbnIoKTsgZWNobyBhYmJybHhtIGxleGVtZSBmb3IgbGV4ZW1lIGZyb20gZy5zY2FuIHNvdXJjZVxuICAgICAgaW5mbyAnzqlpbHh0XzYwOScsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlXG4gICAgICBAZXEgKCDOqWlseHRfNjEwID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLnN0YXJ0JywgICBoaXQ6ICcnLCBwb3M6ICcxOjA6MCcgfVxuICAgICAgQGVxICggzqlpbHh0XzYxMSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICAgaGl0OiAnJywgcG9zOiAnMTowOjAnLCBkYXRhOiB7IHRhcmdldDogJ2duZCcgfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNjEyID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQubmFtZTEnLCAgICAgICBoaXQ6ICdBJywgcG9zOiAnMTowOjEnLCBkYXRhOiB7IGluaXRpYWw6IFsgJ0EnIF0gfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNjEzID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgICBoaXQ6ICcnLCBwb3M6ICcxOjE6MScsIGRhdGE6IHsgdGFyZ2V0OiAnZXJyb3InIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzYxNCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZXJyb3Iubm9saWtlZGlzJywgaGl0OiAnY2MnLCBwb3M6ICcxOjE6MycsIGRhdGE6IHsgbGV0dGVyOiBbICdjJywgJ2MnIF0gfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNjE1ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgICBoaXQ6ICcnLCBwb3M6ICcxOjM6MycsIGRhdGE6IHsgdGFyZ2V0OiAnZ25kJyB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF82MTYgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5uYW1lMicsICAgICAgIGhpdDogJ2VwdHJlamUnLCBwb3M6ICcxOjM6MTAnLCBkYXRhOiB7IGxvd2VyOiBbICdlJywgJ3AnLCAndCcsICdyJywgJ2UnLCAnaicsICdlJyBdIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzYxNyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICAgaGl0OiAnJywgcG9zOiAnMToxMDoxMCcsIGRhdGE6IHsgdGFyZ2V0OiAnZXJyb3InIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzYxOCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZXJyb3Iubm9saWtlZGlzJywgaGl0OiAnYycsIHBvczogJzE6MTA6MTEnLCBkYXRhOiB7IGxldHRlcjogWyAnYycgXSB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF82MTkgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuanVtcCcsICAgIGhpdDogJycsIHBvczogJzE6MTE6MTEnLCBkYXRhOiB7IHRhcmdldDogJ2duZCcgfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNjIwID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQubmFtZTInLCAgICAgICBoaXQ6ICd0JywgcG9zOiAnMToxMToxMicsIGRhdGE6IHsgbG93ZXI6IFsgJ3QnIF0gfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNjIxID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgICBoaXQ6ICcnLCBwb3M6ICcxOjEyOjEyJywgZGF0YTogeyB0YXJnZXQ6IG51bGwgfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNjIyID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLnN0b3AnLCAgICBoaXQ6ICcnLCBwb3M6ICcxOjEyOjEyJyB9XG4gICAgICBAZXEgKCDOqWlseHRfNjIzID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB1c2VyX2Vycm9yX2RlY2xhcmVkX29uX2dyYW1tYXI6IC0+XG4gICAgICB7IEdyYW1tYXJcbiAgICAgICAgcnhcbiAgICAgICAgaW50ZXJuYWxzIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBjYXN0ID0gKHsgaGl0LCBzdGFydCwgc291cmNlLCBuZXdfbGV4ZW1lLCBsZXhlbWUsIH0pIC0+XG4gICAgICAgIHVubGVzcyBoaXQgaXMgJ2MnXG4gICAgICAgICAgeWllbGQgbGV4ZW1lXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgeWllbGQgbmV3X2xleGVtZSAnZXJyb3Iubm9saWtlZGlzJywgc3RhcnQsIHNvdXJjZSwgeyBsZXR0ZXI6IGhpdCwgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgZW1pdF9zaWduYWxzOiB0cnVlLCBjYXN0LCB9XG4gICAgICBnbmQgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnLCB9XG4gICAgICBlcnJvciAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdlcnJvcicsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgbmFtZTEgPSBnbmQubmV3X3Rva2VuIHsgbmFtZTogJ25hbWUxJywgICAgICAgICAgIGZpdDogcnhcIig/PGluaXRpYWw+W0EtWl0pXCIsIG1lcmdlOiB0cnVlLCB9XG4gICAgICBuYW1lMiA9IGduZC5uZXdfdG9rZW4geyBuYW1lOiAnbmFtZTInLCAgICAgICAgICAgZml0OiByeFwiKD88bG93ZXI+W2Etel0pXCIsICAgbWVyZ2U6IHRydWUsIH1cbiAgICAgIGVycm9yLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdub2xpa2VkaXMnLCAgICAgICBmaXQ6IHJ4XCIuXCIsICAgICAgICAgICAgICAgICBtZXJnZTogdHJ1ZSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWlseHRfNjI0ID0gLT4gZy5jYXN0IGlzIGNhc3QgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlpbHh0XzYyNSA9IC0+IGcuY2FzdF9tZXRob2QgICAgICAgICksICd3YWxrJ1xuICAgICAgQGVxICggzqlpbHh0XzYyNiA9IC0+IGduZC5jYXN0ICAgICAgICAgICAgICksIG51bGxcbiAgICAgIEBlcSAoIM6paWx4dF82MjcgPSAtPiBnbmQuY2FzdF9tZXRob2QgICAgICApLCBudWxsXG4gICAgICBAZXEgKCDOqWlseHRfNjI4ID0gLT4gZXJyb3IuY2FzdCAgICAgICAgICAgKSwgbnVsbFxuICAgICAgQGVxICggzqlpbHh0XzYyOSA9IC0+IGVycm9yLmNhc3RfbWV0aG9kICAgICksIG51bGxcbiAgICAgIEBlcSAoIM6paWx4dF82MzAgPSAtPiBuYW1lMi5jYXN0ICAgICAgICAgICApLCBudWxsXG4gICAgICBAZXEgKCDOqWlseHRfNjMxID0gLT4gbmFtZTIuY2FzdF9tZXRob2QgICAgKSwgbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzb3VyY2UgPSBcIkFjY2VwdHJlamVjdFwiXG4gICAgICAjIGluZm8gJ86paWx4dF82MzInLCBycHIgc291cmNlOyB0YWJ1bGF0ZV9sZXhlbWVzIGcuc2NhbiBzb3VyY2VcbiAgICAgICMgaW5mbyAnzqlpbHh0XzYzMycsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGVjaG8gYWJicmx4bSBsZXhlbWUgZm9yIGxleGVtZSBmcm9tIGcuc2NhbiBzb3VyY2VcbiAgICAgIGluZm8gJ86paWx4dF82MzQnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBsZXhlbWVzID0gZy5zY2FuIHNvdXJjZVxuICAgICAgQGVxICggzqlpbHh0XzYzNSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5zdGFydCcsICAgaGl0OiAnJywgcG9zOiAnMTowOjAnIH1cbiAgICAgIEBlcSAoIM6paWx4dF82MzYgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuanVtcCcsICAgIGhpdDogJycsIHBvczogJzE6MDowJywgZGF0YTogeyB0YXJnZXQ6ICdnbmQnIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzYzNyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLm5hbWUxJywgICAgICAgaGl0OiAnQScsIHBvczogJzE6MDoxJywgZGF0YTogeyBpbml0aWFsOiBbICdBJyBdIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzYzOCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICAgaGl0OiAnJywgcG9zOiAnMToxOjEnLCBkYXRhOiB7IHRhcmdldDogJ2Vycm9yJyB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF82MzkgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2Vycm9yLm5vbGlrZWRpcycsIGhpdDogJ2NjJywgcG9zOiAnMToxOjMnLCBkYXRhOiB7IGxldHRlcjogWyAnYycsICdjJyBdIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzY0MCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICAgaGl0OiAnJywgcG9zOiAnMTozOjMnLCBkYXRhOiB7IHRhcmdldDogJ2duZCcgfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNjQxID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQubmFtZTInLCAgICAgICBoaXQ6ICdlcHRyZWplJywgcG9zOiAnMTozOjEwJywgZGF0YTogeyBsb3dlcjogWyAnZScsICdwJywgJ3QnLCAncicsICdlJywgJ2onLCAnZScgXSB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF82NDIgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuanVtcCcsICAgIGhpdDogJycsIHBvczogJzE6MTA6MTAnLCBkYXRhOiB7IHRhcmdldDogJ2Vycm9yJyB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF82NDMgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2Vycm9yLm5vbGlrZWRpcycsIGhpdDogJ2MnLCBwb3M6ICcxOjEwOjExJywgZGF0YTogeyBsZXR0ZXI6IFsgJ2MnIF0gfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNjQ0ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgICBoaXQ6ICcnLCBwb3M6ICcxOjExOjExJywgZGF0YTogeyB0YXJnZXQ6ICdnbmQnIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzY0NSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLm5hbWUyJywgICAgICAgaGl0OiAndCcsIHBvczogJzE6MTE6MTInLCBkYXRhOiB7IGxvd2VyOiBbICd0JyBdIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzY0NiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICAgaGl0OiAnJywgcG9zOiAnMToxMjoxMicsIGRhdGE6IHsgdGFyZ2V0OiBudWxsIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzY0NyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5zdG9wJywgICAgaGl0OiAnJywgcG9zOiAnMToxMjoxMicgfVxuICAgICAgQGVxICggzqlpbHh0XzY0OCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGRlbW86XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRlbW9fbnJfMTogLT5cbiAgICAgIHsgR3JhbW1hclxuICAgICAgICByeCAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgfVxuICAgICAgZ25kICAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZ25kJywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ25hbWUnLCAgICAgICAgICAgZml0OiByeFwiKD88aW5pdGlhbD5bQS1aXSlbYS16XSpcIiwgfVxuICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdudW1iZXInLCAgICAgICAgIGZpdDogcnhcIlswLTldK1wiLCAgICAgICAgICAgICAgICAgIH1cbiAgICAgIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAncGFyZW5fc3RhcnQnLCAgICBmaXQ6IHJ4XCJcXChcIiwgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdwYXJlbl9zdG9wJywgICAgIGZpdDogcnhcIlxcKVwiLCAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ290aGVyJywgICAgICAgICAgZml0OiByeFwiW0EtWmEtejAtOV0rXCIsICAgICAgICAgICAgfVxuICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICd3cycsICAgICAgICAgICAgIGZpdDogcnhcIlxccytcIiwgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNvdXJjZSA9IFwiQWxpY2UgaW4gQ2Fpcm8gMTkxMiAoYXBwcm94aW1hdGVseSlcIlxuICAgICAgIyBpbmZvICfOqWlseHRfNjQ5JywgcnByIHNvdXJjZTsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlXG4gICAgICBpbmZvICfOqWlseHRfNjUwJywgcnByIHNvdXJjZTsgZy5yZXNldF9sbnIoKTsgbGV4ZW1lcyA9IGcuc2NhbiBzb3VyY2VcbiAgICAgIEBlcSAoIM6paWx4dF82NTEgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuc3RhcnQnLCAgIGhpdDogJycsICAgICAgICAgICAgICBwb3M6ICcxOjA6MCcgfVxuICAgICAgQGVxICggzqlpbHh0XzY1MiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICAgaGl0OiAnJywgICAgICAgICAgICAgIHBvczogJzE6MDowJywgZGF0YTogeyB0YXJnZXQ6ICdnbmQnIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzY1MyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLm5hbWUnLCAgICAgICAgaGl0OiAnQWxpY2UnLCAgICAgICAgIHBvczogJzE6MDo1JywgZGF0YTogeyBpbml0aWFsOiAnQScsIH0sIH1cbiAgICAgIEBlcSAoIM6paWx4dF82NTQgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC53cycsICAgICAgICAgIGhpdDogJyAnLCAgICAgICAgICAgICBwb3M6ICcxOjU6NicgfVxuICAgICAgQGVxICggzqlpbHh0XzY1NSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLm90aGVyJywgICAgICAgaGl0OiAnaW4nLCAgICAgICAgICAgIHBvczogJzE6Njo4JyB9XG4gICAgICBAZXEgKCDOqWlseHRfNjU2ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQud3MnLCAgICAgICAgICBoaXQ6ICcgJywgICAgICAgICAgICAgcG9zOiAnMTo4OjknIH1cbiAgICAgIEBlcSAoIM6paWx4dF82NTcgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5uYW1lJywgICAgICAgIGhpdDogJ0NhaXJvJywgICAgICAgICBwb3M6ICcxOjk6MTQnLCBkYXRhOiB7IGluaXRpYWw6ICdDJywgfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNjU4ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQud3MnLCAgICAgICAgICBoaXQ6ICcgJywgICAgICAgICAgICAgcG9zOiAnMToxNDoxNScgfVxuICAgICAgQGVxICggzqlpbHh0XzY1OSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLm51bWJlcicsICAgICAgaGl0OiAnMTkxMicsICAgICAgICAgIHBvczogJzE6MTU6MTknIH1cbiAgICAgIEBlcSAoIM6paWx4dF82NjAgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC53cycsICAgICAgICAgIGhpdDogJyAnLCAgICAgICAgICAgICBwb3M6ICcxOjE5OjIwJyB9XG4gICAgICBAZXEgKCDOqWlseHRfNjYxID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQucGFyZW5fc3RhcnQnLCBoaXQ6ICcoJywgICAgICAgICAgICAgcG9zOiAnMToyMDoyMScgfVxuICAgICAgQGVxICggzqlpbHh0XzY2MiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLm90aGVyJywgICAgICAgaGl0OiAnYXBwcm94aW1hdGVseScsIHBvczogJzE6MjE6MzQnIH1cbiAgICAgIEBlcSAoIM6paWx4dF82NjMgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5wYXJlbl9zdG9wJywgIGhpdDogJyknLCAgICAgICAgICAgICBwb3M6ICcxOjM0OjM1JyB9XG4gICAgICBAZXEgKCDOqWlseHRfNjY0ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgICBoaXQ6ICcnLCAgICAgICAgICAgICAgcG9zOiAnMTozNTozNScsIGRhdGE6IHsgdGFyZ2V0OiBudWxsIH0gfVxuICAgICAgQGVxICggzqlpbHh0X0FDQ0VQVF82NjUgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuc3RvcCcsICAgIGhpdDogJycsICAgICAgICAgICAgICBwb3M6ICcxOjM1OjM1JywgfVxuICAgICAgQGVxICggzqlpbHh0XzY2NiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGVtb19ucl8yOiAtPlxuICAgICAgeyBHcmFtbWFyXG4gICAgICAgIHJ4ICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgbmFtZTogJ2ZhdWx0eScsIH1cbiAgICAgIGduZCAgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2duZCcsIH1cbiAgICAgIHN0cmluZzExICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ3N0cmluZzExJywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ25hbWUnLCAgICAgICAgICAgZml0OiByeFwiKD88aW5pdGlhbD5bQS1aXSlbYS16XSpcIiwgfVxuICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdudW1iZXInLCAgICAgICAgIGZpdDogcnhcIlswLTldK1wiLCAgICAgICAgICAgICAgICAgIH1cbiAgICAgIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnc3RyaW5nMTFfc3RhcnQnLCBmaXQ6IHJ4XCIoPyE8XFxcXCknXCIsICAgICAgICAgICAgICAgIGp1bXA6ICdzdHJpbmcxMScsIH1cbiAgICAgIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAncGFyZW5fc3RhcnQnLCAgICBmaXQ6IHJ4XCJcXChcIiwgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdwYXJlbl9zdG9wJywgICAgIGZpdDogcnhcIlxcKVwiLCAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ290aGVyJywgICAgICAgICAgZml0OiByeFwiW0EtWmEtejAtOV0rXCIsICAgICAgICAgICAgfVxuICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICd3cycsICAgICAgICAgICAgIGZpdDogcnhcIlxccytcIiwgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgc3RyaW5nMTEubmV3X3Rva2VuICB7IG5hbWU6ICdzdHJpbmcxMV9zdG9wJywgIGZpdDogcnhcIig/ITxcXFxcKSdcIiwgICAgICAgICAgICAgICAganVtcDogJy4uIScsIH1cbiAgICAgIHN0cmluZzExLm5ld190b2tlbiAgeyBuYW1lOiAndGV4dCcsICAgICAgICAgICBmaXQ6IHJ4XCJbXiddK1wiLCAgICAgICAgICAgICAgICAgICB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNvdXJjZSA9IFwiQWxpY2UgaW4gQ2Fpcm8gMTkxMiAnYXBwcm94aW1hdGVseSdcIlxuICAgICAgIyBpbmZvICfOqWlseHRfNjY3JywgcnByIHNvdXJjZTsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlXG4gICAgICBpbmZvICfOqWlseHRfNjY4JywgcnByIHNvdXJjZTsgZy5yZXNldF9sbnIoKTsgbGV4ZW1lcyA9IGcuc2NhbiBzb3VyY2VcbiAgICAgIEBlcSAoIM6paWx4dF82NjkgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuc3RhcnQnLCAgICAgIGhpdDogJycsICAgICAgIHBvczogJzE6MDowJyB9XG4gICAgICBAZXEgKCDOqWlseHRfNjcwID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgICAgICBoaXQ6ICcnLCAgICAgICBwb3M6ICcxOjA6MCcsIGRhdGE6IHsgdGFyZ2V0OiAnZ25kJyB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF82NzEgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5uYW1lJywgICAgICAgICAgIGhpdDogJ0FsaWNlJywgIHBvczogJzE6MDo1JywgZGF0YTogeyBpbml0aWFsOiAnQScsIH0sIH1cbiAgICAgIEBlcSAoIM6paWx4dF82NzIgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC53cycsICAgICAgICAgICAgIGhpdDogJyAnLCAgICAgIHBvczogJzE6NTo2JyB9XG4gICAgICBAZXEgKCDOqWlseHRfNjczID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQub3RoZXInLCAgICAgICAgICBoaXQ6ICdpbicsICAgICBwb3M6ICcxOjY6OCcgfVxuICAgICAgQGVxICggzqlpbHh0XzY3NCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLndzJywgICAgICAgICAgICAgaGl0OiAnICcsICAgICAgcG9zOiAnMTo4OjknIH1cbiAgICAgIEBlcSAoIM6paWx4dF82NzUgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5uYW1lJywgICAgICAgICAgIGhpdDogJ0NhaXJvJywgIHBvczogJzE6OToxNCcsIGRhdGE6IHsgaW5pdGlhbDogJ0MnLCB9LCB9XG4gICAgICBAZXEgKCDOqWlseHRfNjc2ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQud3MnLCAgICAgICAgICAgICBoaXQ6ICcgJywgICAgICBwb3M6ICcxOjE0OjE1JyB9XG4gICAgICBAZXEgKCDOqWlseHRfNjc3ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQubnVtYmVyJywgICAgICAgICBoaXQ6ICcxOTEyJywgICBwb3M6ICcxOjE1OjE5JyB9XG4gICAgICBAZXEgKCDOqWlseHRfNjc4ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQud3MnLCAgICAgICAgICAgICBoaXQ6ICcgJywgICAgICBwb3M6ICcxOjE5OjIwJyB9XG4gICAgICBAZXEgKCDOqWlseHRfNjc5ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQuc3RyaW5nMTFfc3RhcnQnLCBoaXQ6IFwiJ1wiLCAgICAgIHBvczogJzE6MjA6MjEnIH1cbiAgICAgIEBlcSAoIM6paWx4dF82ODAgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuanVtcCcsICAgICAgIGhpdDogJycsICAgICAgIHBvczogJzE6MjE6MjEnLCBkYXRhOiB7IHRhcmdldDogJ3N0cmluZzExJyB9IH1cbiAgICAgIEBlcSAoIM6paWx4dF82ODEgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3N0cmluZzExLnRleHQnLCAgICAgIGhpdDogJ2FwcHJveGltYXRlbHknLCBwb3M6ICcxOjIxOjM0JyB9XG4gICAgICBAZXEgKCDOqWlseHRfNjgyID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgICAgICBoaXQ6ICcnLCAgICAgICBwb3M6ICcxOjM0OjM0JywgZGF0YTogeyB0YXJnZXQ6IG51bGwgfSB9XG4gICAgICBAZXEgKCDOqWlseHRfNjgzID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckZXJyb3IuZWFybHlzdG9wJywgICBoaXQ6IFwiJ1wiLCAgICAgIHBvczogJzE6MzQ6MzUnLCBkYXRhOiB7IG1lc3NhZ2U6ICdleHBlY3RlZCBzdG9wIGF0IDM1LCBnb3QgMzQnIH0gfVxuICAgICAgQGVxICggzqlpbHh0XzY4NCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5zdG9wJywgICAgICAgaGl0OiAnJywgICAgICAgcG9zOiAnMTozNDozNCcsIH1cbiAgICAgIEBlcSAoIM6paWx4dF82ODUgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCBudWxsXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vX25yXzM6IC0+XG4gICAgICB7IEdyYW1tYXJcbiAgICAgICAgcnggICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgZyAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBuYW1lOiAnZmF1bHR5JywgZW1pdF9zaWduYWxzOiBmYWxzZSwgfVxuICAgICAgZ25kICAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZ25kJywgfVxuICAgICAgbnVtYmVyICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnbnVtYmVyJywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ3RleHQnLCAgICAgICAgICAgZml0OiByeC5pXCJcXFxcWzAtOV18W2Etelxcc10rXCIsICAgICAgICAgICAgICAgICAgfVxuICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdudW1iZXJfc3RhcnQnLCAgIGZpdDogcnhcIig/PSg/ITxcXFxcKVswLTldKVwiLCAgICBqdW1wOiAnbnVtYmVyJywgfVxuICAgICAgbnVtYmVyLm5ld190b2tlbiAgICB7IG5hbWU6ICdudW1iZXInLCAgICAgICAgIGZpdDogcnhcIlswLTldK1wiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgc291cmNlID0gXCJSXFxcXDJEXFxcXDIgb24gQ2hhcm9uIDNcIlxuICAgICAgICAjIGluZm8gJ86paWx4dF82ODYnLCBycHIgc291cmNlOyB0YWJ1bGF0ZV9sZXhlbWVzIGcuc2NhbiBzb3VyY2VcbiAgICAgICAgaW5mbyAnzqlpbHh0XzY4NycsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlXG4gICAgICAgIEBlcSAoIM6paWx4dF82ODggPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC50ZXh0JywgICAgICAgICBoaXQ6ICdSJywgICAgICAgICAgIHBvczogJzE6MDoxJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF82ODkgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC50ZXh0JywgICAgICAgICBoaXQ6ICdcXFxcMicsICAgICAgICAgcG9zOiAnMToxOjMnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzY5MCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLnRleHQnLCAgICAgICAgIGhpdDogJ0QnLCAgICAgICAgICAgcG9zOiAnMTozOjQnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzY5MSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLnRleHQnLCAgICAgICAgIGhpdDogJ1xcXFwyJywgICAgICAgICBwb3M6ICcxOjQ6NicgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNjkyID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQudGV4dCcsICAgICAgICAgaGl0OiAnIG9uIENoYXJvbiAnLCBwb3M6ICcxOjY6MTcnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzY5MyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLm51bWJlcl9zdGFydCcsIGhpdDogJycsICAgICAgICAgICAgcG9zOiAnMToxNzoxNycgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNjk0ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdudW1iZXIubnVtYmVyJywgICAgaGl0OiAnMycsICAgICAgICAgICBwb3M6ICcxOjE3OjE4JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF82OTUgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCBudWxsXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHNvdXJjZSA9IFwiUlxcXFwyRFxcXFwyIG9uIENoYXJvbiAzISFcIlxuICAgICAgICAjIGVjaG8gYWJicmx4bSBseG0gZm9yIGx4bSBmcm9tIGcuc2NhbiBzb3VyY2VcbiAgICAgICAgIyBpbmZvICfOqWlseHRfNjk2JywgcnByIHNvdXJjZTsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlXG4gICAgICAgIGluZm8gJ86paWx4dF82OTcnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBsZXhlbWVzID0gZy5zY2FuIHNvdXJjZVxuICAgICAgICBAZXEgKCDOqWlseHRfNjk4ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQudGV4dCcsICAgICAgICAgaGl0OiAnUicsICAgICAgICAgICBwb3M6ICcxOjA6MScgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNjk5ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQudGV4dCcsICAgICAgICAgaGl0OiAnXFxcXDInLCAgICAgICAgIHBvczogJzE6MTozJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF83MDAgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC50ZXh0JywgICAgICAgICBoaXQ6ICdEJywgICAgICAgICAgIHBvczogJzE6Mzo0JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF83MDEgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC50ZXh0JywgICAgICAgICBoaXQ6ICdcXFxcMicsICAgICAgICAgcG9zOiAnMTo0OjYnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzcwMiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLnRleHQnLCAgICAgICAgIGhpdDogJyBvbiBDaGFyb24gJywgcG9zOiAnMTo2OjE3JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF83MDMgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC5udW1iZXJfc3RhcnQnLCBoaXQ6ICcnLCAgICAgICAgICAgIHBvczogJzE6MTc6MTcnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzcwNCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnbnVtYmVyLm51bWJlcicsICAgIGhpdDogJzMnLCAgICAgICAgICAgcG9zOiAnMToxNzoxOCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzA1ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckZXJyb3IuZWFybHlzdG9wJywgaGl0OiAnISEnLCAgICAgICAgICBwb3M6ICcxOjE4OjIwJywgZGF0YTogeyBtZXNzYWdlOiAnZXhwZWN0ZWQgc3RvcCBhdCAyMCwgZ290IDE4JyB9IH1cbiAgICAgICAgQGVxICggzqlpbHh0XzcwNiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIHJldHVybiBudWxsXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjZmdfc2V0dGluZ3M6XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGdyYW1tYXI6IC0+XG4gICAgICB7IEdyYW1tYXJcbiAgICAgICAgcnggICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGcgPSBuZXcgR3JhbW1hcigpXG4gICAgICAgIEBlcSAoIM6paWx4dF83MDcgPSAtPiBnLmNmZy5uYW1lICAgICAgICAgICApLCAnZydcbiAgICAgICAgQGVxICggzqlpbHh0XzcwOCA9IC0+IGcuY2ZnLnN0cmF0ZWd5ICAgICAgICksICdmaXJzdCdcbiAgICAgICAgQGVxICggzqlpbHh0XzcwOSA9IC0+IGcuY2ZnLmVtaXRfc2lnbmFscyAgICksIHRydWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGcgPSBuZXcgR3JhbW1hciB7IGVtaXRfc2lnbmFsczogZmFsc2UsIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzcxMCA9IC0+IGcuY2ZnLm5hbWUgICAgICAgICAgICksICdnJ1xuICAgICAgICBAZXEgKCDOqWlseHRfNzExID0gLT4gZy5jZmcuc3RyYXRlZ3kgICAgICAgKSwgJ2ZpcnN0J1xuICAgICAgICBAZXEgKCDOqWlseHRfNzEyID0gLT4gZy5jZmcuZW1pdF9zaWduYWxzICAgKSwgZmFsc2VcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBsaW5raW5nOlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBzdHJpbmdfbGl0ZXJhbF93aXRoX2xpbmVfYnJlYWtzX3N0YWNjYXRvOiAtPlxuICAgICAgeyBHcmFtbWFyXG4gICAgICAgIHJ4ICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIGcgICAgICAgICA9IG5ldyBHcmFtbWFyIHsgZW1pdF9zaWduYWxzOiBmYWxzZSwgfVxuICAgICAgZ25kICAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZ25kJywgfVxuICAgICAgc3RyaW5nICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnc3RyaW5nJywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ2RxMScsICAgICAgICAgICAgZml0OiAvKD88IVxcXFwpXCIvLCAgICAgICAgICBqdW1wOiAnc3RyaW5nIScgICAgICAgIH1cbiAgICAgIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAndGV4dCcsICAgICAgICAgICBmaXQ6IC8oXFxcXFwifFteXCJdKSsvLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgIHN0cmluZy5uZXdfdG9rZW4gICAgeyBuYW1lOiAnc3RyaW5nJywgICAgICAgICBmaXQ6IC8oXFxcXFwifFteXCJdKSsvLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgIHN0cmluZy5uZXdfdG9rZW4gICAgeyBuYW1lOiAnZHExJywgICAgICAgICAgICBmaXQ6IC8oPzwhXFxcXClcIi8sICAgICAgICAgIGp1bXA6ICcuLicgICAgICAgICAgICAgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBnLnJlc2V0KClcbiAgICAgICAgc291cmNlID0gJ3RoZSB3b3JkIFwiYmxhY2sgYmlyZFwiIGlzIHRoZSB3b3JkXFxuJ1xuICAgICAgICAjIGluZm8gJ86paWx4dF83MTMnLCBycHIgc291cmNlOyB0YWJ1bGF0ZV9sZXhlbWVzIGcuc2NhbiBzb3VyY2VcbiAgICAgICAgIyBpbmZvICfOqWlseHRfNzE0JywgcnByIHNvdXJjZTsgZy5yZXNldF9sbnIoKTsgZWNobyBhYmJybHhtIGxleGVtZSBmb3IgbGV4ZW1lIGZyb20gZy5zY2FuIHNvdXJjZVxuICAgICAgICBpbmZvICfOqWlseHRfNzE1JywgcnByIHNvdXJjZTsgZy5yZXNldF9sbnIoKTsgbGV4ZW1lcyA9IGcuc2NhbiBzb3VyY2VcbiAgICAgICAgQGVxICggzqlpbHh0XzcxNiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLnRleHQnLCAgICAgIGhpdDogJ3RoZSB3b3JkICcsIHBvczogJzE6MDo5JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF83MTcgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3N0cmluZy5kcTEnLCAgICBoaXQ6ICdcIicsIHBvczogJzE6OToxMCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzE4ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdzdHJpbmcuc3RyaW5nJywgaGl0OiAnYmxhY2sgYmlyZCcsIHBvczogJzE6MTA6MjAnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzcxOSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnc3RyaW5nLmRxMScsICAgIGhpdDogJ1wiJywgcG9zOiAnMToyMDoyMScgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzIwID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQudGV4dCcsICAgICAgaGl0OiAnIGlzIHRoZSB3b3JkXFxuJywgcG9zOiAnMToyMTozNCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzIxID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBnLnJlc2V0KClcbiAgICAgICAgc291cmNlID0gJ3RoZSB3b3JkIFwiYmxhY2tcXG5iaXJkXCIgaXMgdGhlIHdvcmRcXG4nXG4gICAgICAgICMgaW5mbyAnzqlpbHh0XzcyMicsIHJwciBzb3VyY2U7IHRhYnVsYXRlX2xleGVtZXMgZy5zY2FuIHNvdXJjZVxuICAgICAgICAjIGluZm8gJ86paWx4dF83MjMnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBlY2hvIGFiYnJseG0gbGV4ZW1lIGZvciBsZXhlbWUgZnJvbSBnLnNjYW4gc291cmNlXG4gICAgICAgIGluZm8gJ86paWx4dF83MjQnLCBycHIgc291cmNlOyBnLnJlc2V0X2xucigpOyBsZXhlbWVzID0gZy5zY2FuIHNvdXJjZVxuICAgICAgICBAZXEgKCDOqWlseHRfNzI1ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQudGV4dCcsICAgICAgaGl0OiAndGhlIHdvcmQgJywgcG9zOiAnMTowOjknIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzcyNiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnc3RyaW5nLmRxMScsICAgIGhpdDogJ1wiJywgcG9zOiAnMTo5OjEwJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF83MjcgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3N0cmluZy5zdHJpbmcnLCBoaXQ6ICdibGFja1xcbmJpcmQnLCBwb3M6ICcxOjEwOjIwJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF83MjggPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3N0cmluZy5kcTEnLCAgICBoaXQ6ICdcIicsIHBvczogJzE6MjA6MjEnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzcyOSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLnRleHQnLCAgICAgIGhpdDogJyBpcyB0aGUgd29yZFxcbicsIHBvczogJzE6MjE6MzQnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzczMCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgIyMjIE5PVEUgd2UgaGVyZSBhY2NlcHQgYSAnd3JvbmcnIHNvbHV0aW9uIGIvYyB0aGUgZ3JhbW1hciBkZWNsYXJhdGlvbiBkaWQgbm90IHNwZWNpZnkgYSBjb250aW51b3VzXG4gICAgICAgIC8gbGVnYXRvIHNjYW4gd2hpY2ggbWVhbnMgdGhhdCB0aGUgc2Vjb25kIGxpbmUgaXMgY29ycmVjdGx5IGFuYWx5emVkIGFzIHN0YXJ0aW5nIG9uIHRoZSBgdGV4dGAgbGV2ZWxcbiAgICAgICAgYW5kIGVuZGluZyB3aXRoIGFuIHVuZmluaXNoZWQgc3RyaW5nIGxpdGVyYWw7ICMjI1xuICAgICAgICBnLnJlc2V0KClcbiAgICAgICAgc291cmNlMSA9ICd0aGUgd29yZCBcImJsYWNrXFxuJ1xuICAgICAgICBzb3VyY2UyID0gJ2JpcmRcIiBpcyB0aGUgd29yZFxcbidcbiAgICAgICAgIyBpbmZvICfOqWlseHRfNzMxJywgcnByIHNvdXJjZTE7IHRhYnVsYXRlX2xleGVtZXMgZy5zY2FuIHNvdXJjZTFcbiAgICAgICAgIyBpbmZvICfOqWlseHRfNzMyJywgcnByIHNvdXJjZTE7IGcucmVzZXRfbG5yKCk7IGVjaG8gYWJicmx4bSBsZXhlbWUgZm9yIGxleGVtZSBmcm9tIGcuc2NhbiBzb3VyY2UxXG4gICAgICAgIGluZm8gJ86paWx4dF83MzMnLCBycHIgc291cmNlMTsgZy5yZXNldF9sbnIoKTsgbGV4ZW1lcyA9IGcuc2NhbiBzb3VyY2UxXG4gICAgICAgIEBlcSAoIM6paWx4dF83MzQgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC50ZXh0JywgaGl0OiAndGhlIHdvcmQgJywgcG9zOiAnMTowOjknIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzczNSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnc3RyaW5nLmRxMScsIGhpdDogJ1wiJywgcG9zOiAnMTo5OjEwJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF83MzYgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3N0cmluZy5zdHJpbmcnLCBoaXQ6ICdibGFja1xcbicsIHBvczogJzE6MTA6MTYnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzczNyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICAgIyBpbmZvICfOqWlseHRfNzM4JywgcnByIHNvdXJjZTI7IHRhYnVsYXRlX2xleGVtZXMgZy5zY2FuIHNvdXJjZTJcbiAgICAgICAgIyBpbmZvICfOqWlseHRfNzM5JywgcnByIHNvdXJjZTI7IGcucmVzZXRfbG5yKCk7IGVjaG8gYWJicmx4bSBsZXhlbWUgZm9yIGxleGVtZSBmcm9tIGcuc2NhbiBzb3VyY2UyXG4gICAgICAgIGluZm8gJ86paWx4dF83NDAnLCBycHIgc291cmNlMjsgZy5yZXNldF9sbnIoKTsgbGV4ZW1lcyA9IGcuc2NhbiBzb3VyY2UyXG4gICAgICAgIEBlcSAoIM6paWx4dF83NDEgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC50ZXh0JywgICAgICBoaXQ6ICdiaXJkJywgcG9zOiAnMTowOjQnIH1cbiAgICAgICAgQGVxICggzqlpbHh0Xzc0MiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnc3RyaW5nLmRxMScsICAgIGhpdDogJ1wiJywgcG9zOiAnMTo0OjUnIH1cbiAgICAgICAgQGVxICggzqlpbHh0Xzc0MyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnc3RyaW5nLnN0cmluZycsIGhpdDogJyBpcyB0aGUgd29yZFxcbicsIHBvczogJzE6NToxOCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzQ0ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBzdHJpbmdfbGl0ZXJhbF93aXRoX2xpbmtlZF9zY2FubmluZzogLT5cbiAgICAgIHsgR3JhbW1hclxuICAgICAgICByeCAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IGVtaXRfc2lnbmFsczogZmFsc2UsIGxpbmtpbmc6IHRydWUsIH1cbiAgICAgIGduZCAgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2duZCcsIH1cbiAgICAgIHN0cmluZyAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ3N0cmluZycsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdkcTEnLCAgICAgICAgICAgIGZpdDogLyg/PCFcXFxcKVwiLywgICAgICAgICAganVtcDogJ3N0cmluZyEnIH1cbiAgICAgIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAndGV4dCcsICAgICAgICAgICBmaXQ6IC8oXFxcXFwifFteXCJdKSsvLCAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgc3RyaW5nLm5ld190b2tlbiAgICB7IG5hbWU6ICdsaXRlcmFsJywgICAgICAgIGZpdDogLyhcXFxcXCJ8W15cIl0pKy8sICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICBzdHJpbmcubmV3X3Rva2VuICAgIHsgbmFtZTogJ2RxMScsICAgICAgICAgICAgZml0OiAvKD88IVxcXFwpXCIvLCAgICAgICAgICBqdW1wOiAnLi4nICAgICAgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWlseHRfNzQ1ID0gLT4gZy5jZmcucmVzZXRfc3RhY2sgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWlseHRfNzQ2ID0gLT4gZy5jZmcubGlua2luZyAgICAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZy5yZXNldCgpXG4gICAgICAgIHNvdXJjZSA9ICd0aGUgd29yZCBcImJsYWNrIGJpcmRcIiBpcyB0aGUgd29yZFxcbidcbiAgICAgICAgIyBpbmZvICfOqWlseHRfNzQ3JywgcnByIHNvdXJjZTsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlXG4gICAgICAgICMgaW5mbyAnzqlpbHh0Xzc0OCcsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGVjaG8gYWJicmx4bSBsZXhlbWUgZm9yIGxleGVtZSBmcm9tIGcuc2NhbiBzb3VyY2VcbiAgICAgICAgaW5mbyAnzqlpbHh0Xzc0OScsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlXG4gICAgICAgIEBlcSAoIM6paWx4dF83NTAgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC50ZXh0JywgICAgICAgaGl0OiAndGhlIHdvcmQgJywgICAgICBwb3M6ICcxOjA6OScgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzUxID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdzdHJpbmcuZHExJywgICAgIGhpdDogJ1wiJywgICAgICAgICAgICAgIHBvczogJzE6OToxMCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzUyID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdzdHJpbmcubGl0ZXJhbCcsIGhpdDogJ2JsYWNrIGJpcmQnLCAgICAgcG9zOiAnMToxMDoyMCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzUzID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdzdHJpbmcuZHExJywgICAgIGhpdDogJ1wiJywgICAgICAgICAgICAgIHBvczogJzE6MjA6MjEnIH1cbiAgICAgICAgQGVxICggzqlpbHh0Xzc1NCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLnRleHQnLCAgICAgICBoaXQ6ICcgaXMgdGhlIHdvcmRcXG4nLCBwb3M6ICcxOjIxOjM0JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF83NTUgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCBudWxsXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGcucmVzZXQoKVxuICAgICAgICBzb3VyY2UgPSAndGhlIHdvcmQgXCJibGFja1xcbmJpcmRcIiBpcyB0aGUgd29yZFxcbidcbiAgICAgICAgIyBpbmZvICfOqWlseHRfNzU2JywgcnByIHNvdXJjZTsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlXG4gICAgICAgICMgaW5mbyAnzqlpbHh0Xzc1NycsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGVjaG8gYWJicmx4bSBsZXhlbWUgZm9yIGxleGVtZSBmcm9tIGcuc2NhbiBzb3VyY2VcbiAgICAgICAgaW5mbyAnzqlpbHh0Xzc1OCcsIHJwciBzb3VyY2U7IGcucmVzZXRfbG5yKCk7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlXG4gICAgICAgIEBlcSAoIM6paWx4dF83NTkgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC50ZXh0JywgICAgICAgaGl0OiAndGhlIHdvcmQgJywgICAgICBwb3M6ICcxOjA6OScgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzYwID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdzdHJpbmcuZHExJywgICAgIGhpdDogJ1wiJywgICAgICAgICAgICAgIHBvczogJzE6OToxMCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzYxID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdzdHJpbmcubGl0ZXJhbCcsIGhpdDogJ2JsYWNrXFxuYmlyZCcsICAgIHBvczogJzE6MTA6MjAnIH1cbiAgICAgICAgQGVxICggzqlpbHh0Xzc2MiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnc3RyaW5nLmRxMScsICAgICBoaXQ6ICdcIicsICAgICAgICAgICAgICBwb3M6ICcxOjIwOjIxJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF83NjMgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC50ZXh0JywgICAgICAgaGl0OiAnIGlzIHRoZSB3b3JkXFxuJywgcG9zOiAnMToyMTozNCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzY0ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBnLnJlc2V0KClcbiAgICAgICAgc291cmNlMSA9ICd0aGUgd29yZCBcImJsYWNrXFxuJ1xuICAgICAgICBzb3VyY2UyID0gJ2JpcmRcIiBpcyB0aGUgd29yZFxcbidcbiAgICAgICAgc291cmNlMyA9ICdvciBzbyBJIGhlYXJkXFxuJ1xuICAgICAgICAjIGluZm8gJ86paWx4dF83NjUnLCBycHIgc291cmNlMTsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlMVxuICAgICAgICAjIGluZm8gJ86paWx4dF83NjYnLCBycHIgc291cmNlMjsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlMlxuICAgICAgICAjIGluZm8gJ86paWx4dF83NjcnLCBycHIgc291cmNlMzsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlM1xuICAgICAgICAjIGluZm8gJ86paWx4dF83NjgnLCBycHIgc291cmNlMTsgZWNobyBhYmJybHhtIGxleGVtZSBmb3IgbGV4ZW1lIGZyb20gZy5zY2FuIHNvdXJjZTFcbiAgICAgICAgIyBpbmZvICfOqWlseHRfNzY5JywgcnByIHNvdXJjZTI7IGVjaG8gYWJicmx4bSBsZXhlbWUgZm9yIGxleGVtZSBmcm9tIGcuc2NhbiBzb3VyY2UyXG4gICAgICAgICMgaW5mbyAnzqlpbHh0Xzc3MCcsIHJwciBzb3VyY2UzOyBlY2hvIGFiYnJseG0gbGV4ZW1lIGZvciBsZXhlbWUgZnJvbSBnLnNjYW4gc291cmNlM1xuICAgICAgICBnLnJlc2V0KClcbiAgICAgICAgaW5mbyAnzqlpbHh0Xzc3MScsIHJwciBzb3VyY2UxOyBsZXhlbWVzID0gZy5zY2FuIHNvdXJjZTFcbiAgICAgICAgQGVxICggzqlpbHh0Xzc3MiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLnRleHQnLCAgICAgICBoaXQ6ICd0aGUgd29yZCAnLCAgICAgICBwb3M6ICcxOjA6OScgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzczID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdzdHJpbmcuZHExJywgICAgIGhpdDogJ1wiJywgICAgICAgICAgICAgICBwb3M6ICcxOjk6MTAnIH1cbiAgICAgICAgQGVxICggzqlpbHh0Xzc3NCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnc3RyaW5nLmxpdGVyYWwnLCBoaXQ6ICdibGFja1xcbicsICAgICAgICAgcG9zOiAnMToxMDoxNicgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzc1ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgICBpbmZvICfOqWlseHRfNzc2JywgcnByIHNvdXJjZTI7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlMlxuICAgICAgICBAZXEgKCDOqWlseHRfNzc3ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdzdHJpbmcubGl0ZXJhbCcsIGhpdDogJ2JpcmQnLCAgICAgICAgICAgIHBvczogJzI6MDo0JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF83NzggPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3N0cmluZy5kcTEnLCAgICAgaGl0OiAnXCInLCAgICAgICAgICAgICAgIHBvczogJzI6NDo1JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF83NzkgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC50ZXh0JywgICAgICAgaGl0OiAnIGlzIHRoZSB3b3JkXFxuJywgIHBvczogJzI6NToxOCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzgwID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgICBpbmZvICfOqWlseHRfNzgxJywgcnByIHNvdXJjZTM7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlM1xuICAgICAgICBAZXEgKCDOqWlseHRfNzgyID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQudGV4dCcsICAgICAgIGhpdDogJ29yIHNvIEkgaGVhcmRcXG4nLCBwb3M6ICczOjA6MTQnIH1cbiAgICAgICAgQGVxICggzqlpbHh0Xzc4MyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbGlua2VkX3NjYW5uaW5nX3dpdGhfc2lnbmFsczogLT5cbiAgICAgIHsgR3JhbW1hclxuICAgICAgICByeCAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IGVtaXRfc2lnbmFsczogdHJ1ZSwgbGlua2luZzogdHJ1ZSwgfVxuICAgICAgZ25kICAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZ25kJywgfVxuICAgICAgc3RyaW5nICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnc3RyaW5nJywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ2RxMScsICAgICAgICAgICAgZml0OiAvKD88IVxcXFwpXCIvLCAgICAgICAgICBqdW1wOiAnc3RyaW5nIScgfVxuICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICd0ZXh0JywgICAgICAgICAgIGZpdDogLyhcXFxcXCJ8W15cIl0pKy8sICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICBzdHJpbmcubmV3X3Rva2VuICAgIHsgbmFtZTogJ2xpdGVyYWwnLCAgICAgICAgZml0OiAvKFxcXFxcInxbXlwiXSkrLywgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgIHN0cmluZy5uZXdfdG9rZW4gICAgeyBuYW1lOiAnZHExJywgICAgICAgICAgICBmaXQ6IC8oPzwhXFxcXClcIi8sICAgICAgICAgIGp1bXA6ICcuLicgICAgICB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNvdXJjZTEgPSAndGhlIHdvcmQgXCJibGFja1xcbidcbiAgICAgIHNvdXJjZTIgPSAnYmlyZFwiIGlzIHRoZSB3b3JkXFxuJ1xuICAgICAgc291cmNlMyA9ICdvciBzbyBJIGhlYXJkXFxuJ1xuICAgICAgIyBkbyA9PlxuICAgICAgIyAgIGcucmVzZXQoKVxuICAgICAgIyAgIGluZm8gJ86paWx4dF83ODQnLCBycHIgc291cmNlMTsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlMVxuICAgICAgIyAgIGluZm8gJ86paWx4dF83ODUnLCBycHIgc291cmNlMjsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlMlxuICAgICAgIyAgIGluZm8gJ86paWx4dF83ODYnLCBycHIgc291cmNlMzsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlM1xuICAgICAgIyAgIGluZm8gJ86paWx4dF83ODcnLCBycHIgbnVsbDsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gbnVsbFxuICAgICAgIyAgIHJldHVybiBudWxsXG4gICAgICAjIGRvID0+XG4gICAgICAjICAgZy5yZXNldCgpXG4gICAgICAjICAgaW5mbyAnzqlpbHh0Xzc4OCcsIHJwciBzb3VyY2UxOyBlY2hvIGFiYnJseG0gbGV4ZW1lIGZvciBsZXhlbWUgZnJvbSBnLnNjYW4gc291cmNlMVxuICAgICAgIyAgIGluZm8gJ86paWx4dF83ODknLCBycHIgc291cmNlMjsgZWNobyBhYmJybHhtIGxleGVtZSBmb3IgbGV4ZW1lIGZyb20gZy5zY2FuIHNvdXJjZTJcbiAgICAgICMgICBpbmZvICfOqWlseHRfNzkwJywgcnByIHNvdXJjZTM7IGVjaG8gYWJicmx4bSBsZXhlbWUgZm9yIGxleGVtZSBmcm9tIGcuc2NhbiBzb3VyY2UzXG4gICAgICAjICAgaW5mbyAnzqlpbHh0Xzc5MScsIHJwciBudWxsOyBlY2hvIGFiYnJseG0gbGV4ZW1lIGZvciBsZXhlbWUgZnJvbSBnLnNjYW4gbnVsbFxuICAgICAgIyAgIHJldHVybiBudWxsXG4gICAgICBkbyA9PlxuICAgICAgICBnLnJlc2V0KClcbiAgICAgICAgaW5mbyAnzqlpbHh0Xzc5MicsIHJwciBzb3VyY2UxOyBsZXhlbWVzID0gZy5zY2FuIHNvdXJjZTFcbiAgICAgICAgQGVxICggzqlpbHh0Xzc5MyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5zdGFydCcsICBoaXQ6ICcnLCAgICAgICAgICAgICAgICBwb3M6ICcxOjA6MCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzk0ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgIGhpdDogJycsICAgICAgICAgICAgICAgIHBvczogJzE6MDowJywgZGF0YTogeyB0YXJnZXQ6ICdnbmQnIH0gfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzk1ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQudGV4dCcsICAgICAgIGhpdDogJ3RoZSB3b3JkICcsICAgICAgIHBvczogJzE6MDo5JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF83OTYgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuanVtcCcsICAgaGl0OiAnJywgICAgICAgICAgICAgICAgcG9zOiAnMTo5OjknLCBkYXRhOiB7IHRhcmdldDogJ3N0cmluZycgfSB9XG4gICAgICAgIEBlcSAoIM6paWx4dF83OTcgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3N0cmluZy5kcTEnLCAgICAgaGl0OiAnXCInLCAgICAgICAgICAgICAgIHBvczogJzE6OToxMCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfNzk4ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdzdHJpbmcubGl0ZXJhbCcsIGhpdDogJ2JsYWNrXFxuJywgICAgICAgICBwb3M6ICcxOjEwOjE2JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF83OTkgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwucGF1c2UnLCAgaGl0OiAnJywgICAgICAgICAgICAgICAgcG9zOiAnMToxNjoxNicgfVxuICAgICAgICBAZXEgKCDOqWlseHRfODAwID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgICBpbmZvICfOqWlseHRfODAxJywgcnByIHNvdXJjZTI7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlMlxuICAgICAgICBAZXEgKCDOqWlseHRfODAyID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLnJlc3VtZScsIGhpdDogJycsICAgICAgICAgICAgICAgIHBvczogJzI6MDowJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF84MDMgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3N0cmluZy5saXRlcmFsJywgaGl0OiAnYmlyZCcsICAgICAgICAgICAgcG9zOiAnMjowOjQnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzgwNCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnc3RyaW5nLmRxMScsICAgICBoaXQ6ICdcIicsICAgICAgICAgICAgICAgcG9zOiAnMjo0OjUnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzgwNSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICBoaXQ6ICcnLCAgICAgICAgICAgICAgICBwb3M6ICcyOjU6NScsIGRhdGE6IHsgdGFyZ2V0OiAnZ25kJyB9IH1cbiAgICAgICAgQGVxICggzqlpbHh0XzgwNiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLnRleHQnLCAgICAgICBoaXQ6ICcgaXMgdGhlIHdvcmRcXG4nLCAgcG9zOiAnMjo1OjE4JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF84MDcgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwucGF1c2UnLCAgaGl0OiAnJywgICAgICAgICAgICAgICAgcG9zOiAnMjoxODoxOCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfODA4ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgICBpbmZvICfOqWlseHRfODA5JywgcnByIHNvdXJjZTM7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlM1xuICAgICAgICBAZXEgKCDOqWlseHRfODEwID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLnJlc3VtZScsIGhpdDogJycsICAgICAgICAgICAgICAgIHBvczogJzM6MDowJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF84MTEgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC50ZXh0JywgICAgICAgaGl0OiAnb3Igc28gSSBoZWFyZFxcbicsIHBvczogJzM6MDoxNCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfODEyID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLnBhdXNlJywgIGhpdDogJycsICAgICAgICAgICAgICAgIHBvczogJzM6MTQ6MTQnIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzgxMyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICAgaW5mbyAnzqlpbHh0XzgxNCcsIHJwciBudWxsOyBsZXhlbWVzID0gZy5zY2FuIG51bGxcbiAgICAgICAgQGVxICggzqlpbHh0XzgxNSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICBoaXQ6ICcnLCAgICAgICAgICAgICAgICBwb3M6ICc0OjA6MCcsIGRhdGE6IHsgdGFyZ2V0OiBudWxsIH0gfVxuICAgICAgICBAZXEgKCDOqWlseHRfODE2ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLnN0b3AnLCAgIGhpdDogJycsICAgICAgICAgICAgICAgIHBvczogJzQ6MDowJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF84MTcgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGdyYW1tYXJfY2ZnX3N1cHBseV9lb2w6IC0+XG4gICAgICB7IEdyYW1tYXJcbiAgICAgICAgcnggICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZyA9IG5ldyBHcmFtbWFyKClcbiAgICAgICAgQGVxICggzqlpbHh0XzgxOCA9IC0+IGcuY2ZnLnN1cHBseV9lb2wgKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZyA9IG5ldyBHcmFtbWFyIHsgc3VwcGx5X2VvbDogZmFsc2UsIH1cbiAgICAgICAgQGVxICggzqlpbHh0XzgxOSA9IC0+IGcuY2ZnLnN1cHBseV9lb2wgKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZyA9IG5ldyBHcmFtbWFyIHsgc3VwcGx5X2VvbDogdHJ1ZSwgfVxuICAgICAgICBAZXEgKCDOqWlseHRfODIwID0gLT4gZy5jZmcuc3VwcGx5X2VvbCApLCAnXFxuJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBnID0gbmV3IEdyYW1tYXIgeyBzdXBwbHlfZW9sOiAnXFxuJywgfVxuICAgICAgICBAZXEgKCDOqWlseHRfODIxID0gLT4gZy5jZmcuc3VwcGx5X2VvbCApLCAnXFxuJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBnID0gbmV3IEdyYW1tYXIgeyBzdXBwbHlfZW9sOiAnKEVPTCknLCB9XG4gICAgICAgIEBlcSAoIM6paWx4dF84MjIgPSAtPiBnLmNmZy5zdXBwbHlfZW9sICksICcoRU9MKSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbGlua2VkX3NjYW5uaW5nX3dpdGhfc3VwcGx5X2VvbDogLT5cbiAgICAgIHsgR3JhbW1hclxuICAgICAgICByeCAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IGVtaXRfc2lnbmFsczogdHJ1ZSwgbGlua2luZzogdHJ1ZSwgc3VwcGx5X2VvbDogdHJ1ZSwgfVxuICAgICAgZ25kICAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZ25kJywgfVxuICAgICAgc3RyaW5nICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnc3RyaW5nJywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ2RxMScsICAgICAgICAgICAgZml0OiAvKD88IVxcXFwpXCIvLCAgICAgICAgICBqdW1wOiAnc3RyaW5nIScgfVxuICAgICAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICd0ZXh0JywgICAgICAgICAgIGZpdDogLyhcXFxcXCJ8W15cIl0pKy8sICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICBzdHJpbmcubmV3X3Rva2VuICAgIHsgbmFtZTogJ2xpdGVyYWwnLCAgICAgICAgZml0OiAvKFxcXFxcInxbXlwiXSkrLywgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgIHN0cmluZy5uZXdfdG9rZW4gICAgeyBuYW1lOiAnZHExJywgICAgICAgICAgICBmaXQ6IC8oPzwhXFxcXClcIi8sICAgICAgICAgIGp1bXA6ICcuLicgICAgICB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNvdXJjZTEgPSAndGhlIHdvcmQgXCJibGFjaydcbiAgICAgIHNvdXJjZTIgPSAnYmlyZFwiIGlzIHRoZSB3b3JkJ1xuICAgICAgc291cmNlMyA9ICdvciBzbyBJIGhlYXJkJ1xuICAgICAgIyBkbyA9PlxuICAgICAgIyAgIGcucmVzZXQoKVxuICAgICAgIyAgIGluZm8gJ86paWx4dF84MjMnLCBycHIgc291cmNlMTsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlMVxuICAgICAgIyAgIGluZm8gJ86paWx4dF84MjQnLCBycHIgc291cmNlMjsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlMlxuICAgICAgIyAgIGluZm8gJ86paWx4dF84MjUnLCBycHIgc291cmNlMzsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gc291cmNlM1xuICAgICAgIyAgIGluZm8gJ86paWx4dF84MjYnLCBycHIgbnVsbDsgdGFidWxhdGVfbGV4ZW1lcyBnLnNjYW4gbnVsbFxuICAgICAgIyAgIHJldHVybiBudWxsXG4gICAgICAjIGRvID0+XG4gICAgICAjICAgZy5yZXNldCgpXG4gICAgICAjICAgaW5mbyAnzqlpbHh0XzgyNycsIHJwciBzb3VyY2UxOyBlY2hvIGFiYnJseG0gbGV4ZW1lIGZvciBsZXhlbWUgZnJvbSBnLnNjYW4gc291cmNlMVxuICAgICAgIyAgIGluZm8gJ86paWx4dF84MjgnLCBycHIgc291cmNlMjsgZWNobyBhYmJybHhtIGxleGVtZSBmb3IgbGV4ZW1lIGZyb20gZy5zY2FuIHNvdXJjZTJcbiAgICAgICMgICBpbmZvICfOqWlseHRfODI5JywgcnByIHNvdXJjZTM7IGVjaG8gYWJicmx4bSBsZXhlbWUgZm9yIGxleGVtZSBmcm9tIGcuc2NhbiBzb3VyY2UzXG4gICAgICAjICAgaW5mbyAnzqlpbHh0XzgzMCcsIHJwciBudWxsOyBlY2hvIGFiYnJseG0gbGV4ZW1lIGZvciBsZXhlbWUgZnJvbSBnLnNjYW4gbnVsbFxuICAgICAgIyAgIHJldHVybiBudWxsXG4gICAgICBkbyA9PlxuICAgICAgICBnLnJlc2V0KClcbiAgICAgICAgaW5mbyAnzqlpbHh0XzgzMScsIHJwciBzb3VyY2UxOyBsZXhlbWVzID0gZy5zY2FuIHNvdXJjZTFcbiAgICAgICAgQGVxICggzqlpbHh0XzgzMiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5zdGFydCcsICBoaXQ6ICcnLCAgICAgICAgICAgICAgICBwb3M6ICcxOjA6MCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfODMzID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLmp1bXAnLCAgIGhpdDogJycsICAgICAgICAgICAgICAgIHBvczogJzE6MDowJywgZGF0YTogeyB0YXJnZXQ6ICdnbmQnIH0gfVxuICAgICAgICBAZXEgKCDOqWlseHRfODM0ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdnbmQudGV4dCcsICAgICAgIGhpdDogJ3RoZSB3b3JkICcsICAgICAgIHBvczogJzE6MDo5JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF84MzUgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwuanVtcCcsICAgaGl0OiAnJywgICAgICAgICAgICAgICAgcG9zOiAnMTo5OjknLCBkYXRhOiB7IHRhcmdldDogJ3N0cmluZycgfSB9XG4gICAgICAgIEBlcSAoIM6paWx4dF84MzYgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3N0cmluZy5kcTEnLCAgICAgaGl0OiAnXCInLCAgICAgICAgICAgICAgIHBvczogJzE6OToxMCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfODM3ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICdzdHJpbmcubGl0ZXJhbCcsIGhpdDogJ2JsYWNrXFxuJywgICAgICAgICBwb3M6ICcxOjEwOjE2JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF84MzggPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwucGF1c2UnLCAgaGl0OiAnJywgICAgICAgICAgICAgICAgcG9zOiAnMToxNjoxNicgfVxuICAgICAgICBAZXEgKCDOqWlseHRfODM5ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgICBpbmZvICfOqWlseHRfODQwJywgcnByIHNvdXJjZTI7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlMlxuICAgICAgICBAZXEgKCDOqWlseHRfODQxID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLnJlc3VtZScsIGhpdDogJycsICAgICAgICAgICAgICAgIHBvczogJzI6MDowJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF84NDIgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ3N0cmluZy5saXRlcmFsJywgaGl0OiAnYmlyZCcsICAgICAgICAgICAgcG9zOiAnMjowOjQnIH1cbiAgICAgICAgQGVxICggzqlpbHh0Xzg0MyA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnc3RyaW5nLmRxMScsICAgICBoaXQ6ICdcIicsICAgICAgICAgICAgICAgcG9zOiAnMjo0OjUnIH1cbiAgICAgICAgQGVxICggzqlpbHh0Xzg0NCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICBoaXQ6ICcnLCAgICAgICAgICAgICAgICBwb3M6ICcyOjU6NScsIGRhdGE6IHsgdGFyZ2V0OiAnZ25kJyB9IH1cbiAgICAgICAgQGVxICggzqlpbHh0Xzg0NSA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnZ25kLnRleHQnLCAgICAgICBoaXQ6ICcgaXMgdGhlIHdvcmRcXG4nLCAgcG9zOiAnMjo1OjE4JyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF84NDYgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJyRzaWduYWwucGF1c2UnLCAgaGl0OiAnJywgICAgICAgICAgICAgICAgcG9zOiAnMjoxODoxOCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfODQ3ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgICBpbmZvICfOqWlseHRfODQ4JywgcnByIHNvdXJjZTM7IGxleGVtZXMgPSBnLnNjYW4gc291cmNlM1xuICAgICAgICBAZXEgKCDOqWlseHRfODQ5ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLnJlc3VtZScsIGhpdDogJycsICAgICAgICAgICAgICAgIHBvczogJzM6MDowJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF84NTAgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCB7IGZxbmFtZTogJ2duZC50ZXh0JywgICAgICAgaGl0OiAnb3Igc28gSSBoZWFyZFxcbicsIHBvczogJzM6MDoxNCcgfVxuICAgICAgICBAZXEgKCDOqWlseHRfODUxID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLnBhdXNlJywgIGhpdDogJycsICAgICAgICAgICAgICAgIHBvczogJzM6MTQ6MTQnIH1cbiAgICAgICAgQGVxICggzqlpbHh0Xzg1MiA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICAgaW5mbyAnzqlpbHh0Xzg1MycsIHJwciBudWxsOyBsZXhlbWVzID0gZy5zY2FuIG51bGxcbiAgICAgICAgQGVxICggzqlpbHh0Xzg1NCA9IC0+IGFiYnJseG0gdGFidWxhdGVfbGV4ZW1lIGxleGVtZXMubmV4dCgpLnZhbHVlICksIHsgZnFuYW1lOiAnJHNpZ25hbC5qdW1wJywgICBoaXQ6ICcnLCAgICAgICAgICAgICAgICBwb3M6ICc0OjA6MCcsIGRhdGE6IHsgdGFyZ2V0OiBudWxsIH0gfVxuICAgICAgICBAZXEgKCDOqWlseHRfODU1ID0gLT4gYWJicmx4bSB0YWJ1bGF0ZV9sZXhlbWUgbGV4ZW1lcy5uZXh0KCkudmFsdWUgKSwgeyBmcW5hbWU6ICckc2lnbmFsLnN0b3AnLCAgIGhpdDogJycsICAgICAgICAgICAgICAgIHBvczogJzQ6MDowJyB9XG4gICAgICAgIEBlcSAoIM6paWx4dF84NTYgPSAtPiBhYmJybHhtIHRhYnVsYXRlX2xleGVtZSBsZXhlbWVzLm5leHQoKS52YWx1ZSApLCBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAjIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEBpbnRlcmxleF90YXNrc1xuICAjICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBsaW5raW5nOiBAaW50ZXJsZXhfdGFza3MubGlua2luZywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZmxleGlibGVfbmV3X3Rva2VuX3N5bnRheDogQGludGVybGV4X3Rhc2tzLmJhc2ljcy5mbGV4aWJsZV9uZXdfdG9rZW5fc3ludGF4LCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdG9rZW5fZGF0YTogQGludGVybGV4X3Rhc2tzLnRva2VuX2RhdGEsIH1cbiJdfQ==
