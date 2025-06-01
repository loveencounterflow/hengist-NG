(async function() {
  'use strict';
  var GTNG, GUY, Test, abbrlxm, alert, condense_lexemes, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, tabulate_lexeme, tabulate_lexemes, urge, warn, whisper;

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
      var ref, ref1, results;
      results = [];
      for (lexeme of lexemes) {
        results.push(`${(ref = lexeme != null ? lexeme.fqname : void 0) != null ? ref : null}${rpr((ref1 = lexeme != null ? lexeme.hit : void 0) != null ? ref1 : null)}`);
      }
      return results;
    })()).join('|');
  };

  //-----------------------------------------------------------------------------------------------------------
  // abbrlxm = ( lxm ) -> {
  //   level:  lxm?.level?.name ? null,
  //   fqname: lxm?.fqname      ? null,
  //   hit:    lxm?.hit         ? null,
  //   pos:    ( if lxm? then "#{lxm.start}:#{lxm.stop}" else null ), }

  //-----------------------------------------------------------------------------------------------------------
  abbrlxm = function(lxm) {
    var R;
    if (lxm == null) {
      return null;
    }
    R = {
      fqname: lxm.fqname,
      hit: lxm.hit,
      pos: `${lxm.lnr}:${lxm.start}:${lxm.stop}`
    };
    if (lxm.has_data) {
      R.data = {...lxm.data};
    }
    return R;
  };

  //-----------------------------------------------------------------------------------------------------------
  tabulate_lexemes = function(lexemes) {
    var lexeme;
    for (lexeme of lexemes) {
      tabulate_lexeme(lexeme);
    }
    return lexemes;
  };

  //-----------------------------------------------------------------------------------------------------------
  tabulate_lexeme = function(lexeme) {
    var I, alxm, data_rpr, hit_rpr;
    if (lexeme == null) {
      urge('Ωilxt___1', lexeme);
    } else {
      alxm = abbrlxm(lexeme);
      hit_rpr = lexeme.hit === '' ? '' : rpr(lexeme.hit);
      data_rpr = lexeme.has_data ? rpr({...lexeme.data}) : '';
      I = GUY.trm.lime('▏');
      // g         = GUY.trm.gold
      urge('Ωilxt___2', f` ${I} ${lexeme.level.name}:<15c; ${I} ${lexeme.name}:<15c; ${I} ${hit_rpr}:<10c; ${I} ${alxm.pos}:<10c; ${I} ${data_rpr}:<50c; ${I}`);
    }
    return lexeme;
  };

  //###########################################################################################################

  //===========================================================================================================
  this.interlex_tasks = {
    //=========================================================================================================
    internals: {
      //-------------------------------------------------------------------------------------------------------
      jsid_re: function() {
        var internals, jsid_anchored_re, jsid_re, slevithan_regex, Ωilxt___3, Ωilxt___4, Ωilxt___5, Ωilxt___6, Ωilxt___7, Ωilxt___8, Ωilxt___9;
        // { partial, regex, }       = require '../../../apps/interlex/node_modules/regex'
        // _jsid_re = regex""" ^ [ $ _ \p{ID_Start} ] [ $ _ \u200C \u200D \p{ID_Continue} ]* $ """
        ({internals} = require('../../../apps/interlex'));
        ({slevithan_regex, jsid_re} = internals);
        jsid_anchored_re = slevithan_regex.regex`^${jsid_re}$`;
        this.eq((Ωilxt___3 = function() {
          return jsid_anchored_re.flags;
        }), 'v');
        this.eq((Ωilxt___4 = function() {
          return ('_abc3'.match(jsid_anchored_re)) != null;
        }), true);
        this.eq((Ωilxt___5 = function() {
          return ('_abc$'.match(jsid_anchored_re)) != null;
        }), true);
        this.eq((Ωilxt___6 = function() {
          return ('$abc'.match(jsid_anchored_re)) != null;
        }), true);
        this.eq((Ωilxt___7 = function() {
          return ('abc'.match(jsid_anchored_re)) != null;
        }), true);
        this.eq((Ωilxt___8 = function() {
          return ('3_abc'.match(jsid_anchored_re)) != null;
        }), false);
        this.eq((Ωilxt___9 = function() {
          return ('&%'.match(jsid_anchored_re)) != null;
        }), false);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      sort_lexemes_by_length_dec: function() {
        var internals, Ωilxt__10, Ωilxt__11, Ωilxt__12, Ωilxt__13, Ωilxt__14, Ωilxt__15, Ωilxt__16, Ωilxt__17, Ωilxt__18;
        ({internals} = require('../../../apps/interlex'));
        //.....................................................................................................
        this.eq((Ωilxt__10 = function() {
          return internals.sort_lexemes_by_length_dec([]);
        }), []);
        this.eq((Ωilxt__11 = function() {
          return internals.sort_lexemes_by_length_dec(['1']);
        }), ['1']);
        this.eq((Ωilxt__12 = function() {
          return internals.sort_lexemes_by_length_dec(['1', 'i']);
        }), ['1', 'i']);
        this.eq((Ωilxt__13 = function() {
          return internals.sort_lexemes_by_length_dec(['1', '123', '1', '1234']);
        }), ['1234', '123', '1', '1']);
        this.eq((Ωilxt__14 = function() {
          return internals.sort_lexemes_by_length_dec(['abcd', '1234', '1', '123', 'i']);
        }), ['abcd', '1234', '123', '1', 'i']);
        this.eq((Ωilxt__15 = function() {
          return internals.sort_lexemes_by_length_dec(['1234', 'abcd', '1', '123', 'i']);
        }), ['1234', 'abcd', '123', '1', 'i']);
        this.eq((Ωilxt__16 = function() {
          return internals.sort_lexemes_by_length_dec(['1234', '1', 'abcd', '123', 'i']);
        }), ['1234', 'abcd', '123', '1', 'i']);
        this.eq((Ωilxt__17 = function() {
          return internals.sort_lexemes_by_length_dec(['1234', '1', '123', 'abcd', 'i']);
        }), ['1234', 'abcd', '123', '1', 'i']);
        this.eq((Ωilxt__18 = function() {
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
        var internals, new_regex_tag, rx, Ωilxt__19, Ωilxt__20, Ωilxt__21, Ωilxt__22, Ωilxt__23, Ωilxt__24, Ωilxt__25, Ωilxt__26, Ωilxt__27, Ωilxt__28, Ωilxt__29, Ωilxt__30, Ωilxt__31, Ωilxt__32, Ωilxt__33, Ωilxt__34, Ωilxt__35, Ωilxt__36, Ωilxt__37, Ωilxt__38, Ωilxt__39, Ωilxt__40, Ωilxt__41, Ωilxt__42, Ωilxt__43, Ωilxt__44, Ωilxt__45, Ωilxt__46, Ωilxt__47, Ωilxt__48, Ωilxt__49, Ωilxt__50, Ωilxt__51, Ωilxt__52, Ωilxt__53, Ωilxt__54, Ωilxt__55, Ωilxt__56, Ωilxt__57, Ωilxt__58, Ωilxt__59, Ωilxt__60, Ωilxt__61, Ωilxt__62, Ωilxt__63, Ωilxt__64, Ωilxt__65;
        ({rx, new_regex_tag, internals} = require('../../../apps/interlex'));
        //=====================================================================================================
        this.throws((Ωilxt__19 = function() {
          return internals.normalize_regex_flags();
        }), /Cannot destructure property 'flags'/);
        this.throws((Ωilxt__20 = function() {
          return internals.normalize_regex_flags(void 0);
        }), /Cannot destructure property 'flags'/);
        this.throws((Ωilxt__21 = function() {
          return internals.normalize_regex_flags(null);
        }), /Cannot destructure property 'flags'/);
        this.eq((Ωilxt__22 = function() {
          return internals.normalize_regex_flags({
            flags: '',
            mode: 'slr'
          });
        }), 'dy');
        this.eq((Ωilxt__23 = function() {
          return internals.normalize_regex_flags({
            flags: 'd',
            mode: 'slr'
          });
        }), 'dy');
        this.eq((Ωilxt__24 = function() {
          return internals.normalize_regex_flags({
            flags: 'y',
            mode: 'slr'
          });
        }), 'dy');
        this.eq((Ωilxt__25 = function() {
          return internals.normalize_regex_flags({
            flags: 'dy',
            mode: 'slr'
          });
        }), 'dy');
        this.eq((Ωilxt__26 = function() {
          return internals.normalize_regex_flags({
            flags: 'yd',
            mode: 'slr'
          });
        }), 'dy');
        //.....................................................................................................
        this.eq((Ωilxt__27 = function() {
          return internals.normalize_regex_flags({
            flags: 'i',
            mode: 'slr'
          });
        }), 'diy');
        this.eq((Ωilxt__28 = function() {
          return internals.normalize_regex_flags({
            flags: 'g',
            mode: 'slr'
          });
        }), 'dgy');
        this.eq((Ωilxt__29 = function() {
          return internals.normalize_regex_flags({
            flags: 'm',
            mode: 'slr'
          });
        }), 'dmy');
        this.eq((Ωilxt__30 = function() {
          return internals.normalize_regex_flags({
            flags: 's',
            mode: 'slr'
          });
        }), 'dsy');
        this.eq((Ωilxt__31 = function() {
          return internals.normalize_regex_flags({
            flags: 'dgimsuvy',
            mode: 'slr'
          });
        }), 'dgimsy');
        //.....................................................................................................
        this.throws((Ωilxt__32 = function() {
          return internals.normalize_regex_flags({
            flags: 'a',
            mode: 'slr'
          });
        }), /illegal or duplicate flags/);
        this.throws((Ωilxt__33 = function() {
          return internals.normalize_regex_flags({
            flags: 'yy',
            mode: 'slr'
          });
        }), /illegal or duplicate flags/);
        //-----------------------------------------------------------------------------------------------------
        this.eq((Ωilxt__34 = function() {
          return internals.normalize_regex(/./);
        }), /./dvy);
        this.eq((Ωilxt__35 = function() {
          return internals.normalize_regex(/./d);
        }), /./dvy);
        this.eq((Ωilxt__36 = function() {
          return internals.normalize_regex(/./y);
        }), /./dvy);
        this.eq((Ωilxt__37 = function() {
          return internals.normalize_regex(/./dy);
        }), /./dvy);
        this.eq((Ωilxt__38 = function() {
          return internals.normalize_regex(/./yd);
        }), /./dvy);
        //.....................................................................................................
        this.eq((Ωilxt__39 = function() {
          return internals.normalize_regex(/./i);
        }), /./divy);
        this.eq((Ωilxt__40 = function() {
          return internals.normalize_regex(/./g);
        }), /./dgvy);
        this.eq((Ωilxt__41 = function() {
          return internals.normalize_regex(/./m);
        }), /./dmvy);
        this.eq((Ωilxt__42 = function() {
          return internals.normalize_regex(/./s);
        }), /./dsvy);
        this.eq((Ωilxt__43 = function() {
          return internals.normalize_regex(/./dgimsvy);
        }), /./dgimsvy);
        this.eq((Ωilxt__44 = function() {
          return internals.normalize_regex(/./dgimsuy);
        }), /./dgimsvy);
        //.....................................................................................................
        this.throws((Ωilxt__45 = function() {
          return internals.normalize_regex();
        }), /expected a regex, got/);
        this.throws((Ωilxt__46 = function() {
          return internals.normalize_regex('helo');
        }), /expected a regex, got/);
        //-----------------------------------------------------------------------------------------------------
        this.eq((Ωilxt__47 = function() {
          return (new_regex_tag(''))`.`;
        }), /./dvy);
        this.eq((Ωilxt__48 = function() {
          return (new_regex_tag('d'))`.`;
        }), /./dvy);
        this.eq((Ωilxt__49 = function() {
          return (new_regex_tag('y'))`.`;
        }), /./dvy);
        this.eq((Ωilxt__50 = function() {
          return (new_regex_tag('dy'))`.`;
        }), /./dvy);
        this.eq((Ωilxt__51 = function() {
          return (new_regex_tag('yd'))`.`;
        }), /./dvy);
        this.eq((Ωilxt__52 = function() {
          return (new_regex_tag('d')).d`.`;
        }), /./dvy);
        this.eq((Ωilxt__53 = function() {
          return (new_regex_tag('y')).y`.`;
        }), /./dvy);
        this.eq((Ωilxt__54 = function() {
          return (new_regex_tag('dy')).dy`.`;
        }), /./dvy);
        this.eq((Ωilxt__55 = function() {
          return (new_regex_tag('yd')).yd`.`;
        }), /./dvy);
        this.eq((Ωilxt__56 = function() {
          return (new_regex_tag('')).d`.`;
        }), /./dvy);
        this.eq((Ωilxt__57 = function() {
          return (new_regex_tag('')).y`.`;
        }), /./dvy);
        this.eq((Ωilxt__58 = function() {
          return (new_regex_tag('')).dy`.`;
        }), /./dvy);
        this.eq((Ωilxt__59 = function() {
          return (new_regex_tag('')).yd`.`;
        }), /./dvy);
        //.....................................................................................................
        this.eq((Ωilxt__60 = function() {
          return (new_regex_tag('')).i`.`;
        }), /./divy);
        this.eq((Ωilxt__61 = function() {
          return (new_regex_tag('')).g`.`;
        }), /./dgvy);
        this.eq((Ωilxt__62 = function() {
          return (new_regex_tag('')).m`.`;
        }), /./dmvy);
        this.eq((Ωilxt__63 = function() {
          return (new_regex_tag('')).s`.`;
        }), /./dsvy);
        this.eq((Ωilxt__64 = function() {
          return (new_regex_tag('')).dgimsvy`.`;
        }), /./dgimsvy);
        this.eq((Ωilxt__65 = function() {
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
        var Grammar, ILX, Level, Lexeme, Token, g, gnd, internals, number_lx, number_tk, number_tk_matcher, rx, Ωilxt_100, Ωilxt_101, Ωilxt_102, Ωilxt_103, Ωilxt__66, Ωilxt__67, Ωilxt__68, Ωilxt__69, Ωilxt__70, Ωilxt__71, Ωilxt__72, Ωilxt__73, Ωilxt__74, Ωilxt__75, Ωilxt__76, Ωilxt__77, Ωilxt__78, Ωilxt__79, Ωilxt__80, Ωilxt__81, Ωilxt__82, Ωilxt__83, Ωilxt__84, Ωilxt__85, Ωilxt__86, Ωilxt__87, Ωilxt__88, Ωilxt__89, Ωilxt__90, Ωilxt__91, Ωilxt__92, Ωilxt__93, Ωilxt__94, Ωilxt__95, Ωilxt__96, Ωilxt__97, Ωilxt__98, Ωilxt__99;
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
        this.eq((Ωilxt__66 = function() {
          return g.start_level instanceof Level;
        }), true);
        this.eq((Ωilxt__67 = function() {
          return g.start_level;
        }), gnd);
        this.eq((Ωilxt__68 = function() {
          return g.start_level_name;
        }), 'gnd');
        this.eq((Ωilxt__69 = function() {
          return g.name;
        }), 'g');
        this.eq((Ωilxt__70 = function() {
          return g.levels instanceof Object;
        }), true);
        this.eq((Ωilxt__71 = function() {
          return g.levels.gnd;
        }), gnd);
        //.....................................................................................................
        this.eq((Ωilxt__72 = function() {
          return gnd instanceof Level;
        }), true);
        this.eq((Ωilxt__73 = function() {
          return gnd.name;
        }), 'gnd');
        this.eq((Ωilxt__74 = function() {
          return gnd.grammar;
        }), g);
        this.eq((Ωilxt__75 = function() {
          return gnd.tokens instanceof Array;
        }), true);
        this.eq((Ωilxt__76 = function() {
          return gnd.tokens.length;
        }), 1);
        this.eq((Ωilxt__77 = function() {
          return gnd.tokens[0];
        }), number_tk);
        //.....................................................................................................
        this.eq((Ωilxt__78 = function() {
          return number_tk instanceof Token;
        }), true);
        this.eq((Ωilxt__79 = function() {
          return number_tk.name;
        }), 'number');
        this.eq((Ωilxt__80 = function() {
          return number_tk.level;
        }), gnd);
        this.eq((Ωilxt__81 = function() {
          return number_tk.grammar;
        }), g);
        this.eq((Ωilxt__82 = function() {
          return number_tk.matcher;
        }), /[0-9]+/dvy);
        this.eq((Ωilxt__83 = function() {
          return number_tk.matcher.hasIndices;
        }), true);
        this.eq((Ωilxt__84 = function() {
          return number_tk.matcher.sticky;
        }), true);
        this.eq((Ωilxt__85 = function() {
          return number_tk.matcher.unicodeSets;
        }), true);
        this.eq((Ωilxt__86 = function() {
          return number_tk.jump;
        }), null);
        //.....................................................................................................
        this.eq((Ωilxt__87 = function() {
          return (number_lx = number_tk.match_at(0, '398ä')) != null;
        }), true);
        this.eq((Ωilxt__88 = function() {
          return number_lx instanceof Lexeme;
        }), true);
        this.eq((Ωilxt__89 = function() {
          return number_lx.name;
        }), 'number');
        this.eq((Ωilxt__90 = function() {
          return number_lx.fqname;
        }), 'gnd.number');
        this.eq((Ωilxt__91 = function() {
          return number_lx.level;
        }), gnd);
        this.eq((Ωilxt__92 = function() {
          return number_lx.hit;
        }), '398');
        this.eq((Ωilxt__93 = function() {
          return number_lx.start;
        }), 0);
        this.eq((Ωilxt__94 = function() {
          return number_lx.stop;
        }), 3);
        //.....................................................................................................
        this.eq((Ωilxt__95 = function() {
          return (number_lx = number_tk.match_at(7, 'abcdefgh00102xyz')) != null;
        }), false);
        this.eq((Ωilxt__96 = function() {
          return (number_lx = number_tk.match_at(8, 'abcdefgh00102xyz')) != null;
        }), true);
        this.eq((Ωilxt__97 = function() {
          return number_lx instanceof Lexeme;
        }), true);
        this.eq((Ωilxt__98 = function() {
          return number_lx.name;
        }), 'number');
        this.eq((Ωilxt__99 = function() {
          return number_lx.fqname;
        }), 'gnd.number');
        this.eq((Ωilxt_100 = function() {
          return number_lx.level;
        }), gnd);
        this.eq((Ωilxt_101 = function() {
          return number_lx.hit;
        }), '00102');
        this.eq((Ωilxt_102 = function() {
          return number_lx.start;
        }), 8);
        this.eq((Ωilxt_103 = function() {
          return number_lx.stop;
        }), 13);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      new_regex_tag: function() {
        var internals, new_regex_tag, regex, rx, Ωilxt_104, Ωilxt_105, Ωilxt_106, Ωilxt_107, Ωilxt_108, Ωilxt_109, Ωilxt_110, Ωilxt_111, Ωilxt_112, Ωilxt_113, Ωilxt_114;
        ({rx, regex, internals, new_regex_tag} = require('../../../apps/interlex'));
        //.....................................................................................................
        this.eq((Ωilxt_104 = function() {
          return typeof new_regex_tag('dy');
        }), 'function');
        this.eq((Ωilxt_105 = function() {
          return typeof (new_regex_tag('dy')).si;
        }), 'function');
        this.eq((Ωilxt_106 = function() {
          return ((new_regex_tag('dyis'))`[a-z]`) instanceof RegExp;
        }), true);
        //.....................................................................................................
        this.eq((Ωilxt_107 = function() {
          return (new_regex_tag('dyis'))`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_108 = function() {
          return (new_regex_tag('dy')).si`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_109 = function() {
          return (new_regex_tag('dys')).si`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_110 = function() {
          return (new_regex_tag('dys')).i`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_111 = function() {
          return (new_regex_tag('dysi'))`[a-z]`;
        }), /[a-z]/disvy);
        this.eq((Ωilxt_112 = function() {
          return (new_regex_tag('v')).si`[a-z]`;
        }), /[a-z]/disvy);
        //.....................................................................................................
        this.throws((Ωilxt_113 = function() {
          return (new_regex_tag('dy')).ab`[a-z]`;
        }), /illegal or duplicate flags/);
        this.throws((Ωilxt_114 = function() {
          return (new_regex_tag('dyab'))`[a-z]`;
        }), /illegal or duplicate flags/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      normalize_regex: function() {
        var internals, normalize_regex, Ωilxt_115, Ωilxt_116, Ωilxt_117, Ωilxt_118, Ωilxt_119, Ωilxt_120, Ωilxt_121;
        ({internals} = require('../../../apps/interlex'));
        ({normalize_regex} = internals);
        this.eq((Ωilxt_115 = function() {
          return typeof normalize_regex;
        }), 'function');
        this.eq((Ωilxt_116 = function() {
          return normalize_regex(/[a-z]/ig);
        }), /[a-z]/dgivy);
        this.eq((Ωilxt_117 = function() {
          return normalize_regex(/[a-z]/i);
        }), /[a-z]/divy);
        this.eq((Ωilxt_118 = function() {
          return normalize_regex(/[a-z]/u);
        }), /[a-z]/dvy);
        this.eq((Ωilxt_119 = function() {
          return normalize_regex(/[a-z]/gv);
        }), /[a-z]/dgvy);
        this.eq((Ωilxt_120 = function() {
          return normalize_regex(/[a-z]/gu);
        }), /[a-z]/dgvy);
        this.eq((Ωilxt_121 = function() {
          return normalize_regex(/[a-z]/v);
        }), /[a-z]/dvy);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      rx_flags: function() {
        var rx, Ωilxt_122, Ωilxt_123, Ωilxt_125, Ωilxt_126;
        ({rx} = require('../../../apps/interlex'));
        this.eq((Ωilxt_122 = function() {
          return (rx`x`).flags;
        }), 'dvy');
        this.eq((Ωilxt_123 = function() {
          return (rx.si`x`).flags;
        }), 'disvy');
        // @eq ( Ωilxt_124 = -> ( rx.sidvy"x"  ).flags ), 'disvy'
        this.eq((Ωilxt_125 = function() {
          return (rx.y`x`).flags;
        }), 'dvy');
        this.eq((Ωilxt_126 = function() {
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
          var g, lexemes, matcher, probe, probes_and_matchers, x, Ωilxt_127, Ωilxt_130;
          g = new_grammar({
            emit_signals: false
          });
          this.eq((Ωilxt_127 = function() {
            return g.state.lnr;
          }), 1);
          probes_and_matchers = [["1st line", 1], ["2nd line", 2], ["3rd line", 3], ["4th line (and EOF)", 4]];
//...................................................................................................
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            info('Ωilxt_128', rpr(probe));
            lexemes = g.scan_to_list(probe);
            // urge 'Ωilxt_129', lexemes
            this.eq((Ωilxt_130 = function() {
              return lexemes[0].lnr;
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexeme, matcher, probe, probes_and_matchers, x, Ωilxt_131, Ωilxt_132, Ωilxt_134;
          g = new_grammar({
            emit_signals: false
          });
          this.eq((Ωilxt_131 = function() {
            return g.state.lnr;
          }), 1);
          g.reset_lnr(10);
          this.eq((Ωilxt_132 = function() {
            return g.state.lnr;
          }), 10);
          probes_and_matchers = [["1st line", 10], ["2nd line", 11], ["3rd line", 12], ["4th line (and EOF)", 13]];
//...................................................................................................
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            info('Ωilxt_133', rpr(probe));
            lexeme = (g.scan_to_list(probe))[0];
            this.eq((Ωilxt_134 = function() {
              return lexeme.lnr;
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
          var lexemes, matcher, probe, x, Ωilxt_135, Ωilxt_136, Ωilxt_137;
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            g.reset_lnr();
            lexemes = g.scan_to_list(probe);
            this.eq((Ωilxt_135 = function() {
              return condense_lexemes(lexemes);
            }), matcher.condensed);
            this.eq((Ωilxt_136 = function() {
              return lexemes.length;
            }), matcher.length);
            g.reset_lnr();
            this.eq((Ωilxt_137 = function() {
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
            name: 'g',
            emit_signals: false
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
            name: 'g',
            emit_signals: false
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
            name: 'g',
            emit_signals: false
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
          var first, g, i, len, matcher, position, probes_and_matchers, source, Ωilxt_138;
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
            this.eq((Ωilxt_138 = function() {
              return condense_lexemes(first.match_first_at(position, source));
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'first', longest tokens first */
          var first, g, i, len, matcher, position, probes_and_matchers, source, Ωilxt_139;
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
            this.eq((Ωilxt_139 = function() {
              return condense_lexemes(first.match_first_at(position, source));
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'longest', shortest tokens first */
          var first, g, i, len, matcher, position, probes_and_matchers, source, Ωilxt_140;
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
            this.eq((Ωilxt_140 = function() {
              return condense_lexemes(first.match_longest_at(position, source));
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'longest', longest tokens first */
          var first, g, i, len, matcher, position, probes_and_matchers, source, Ωilxt_141;
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
            this.eq((Ωilxt_141 = function() {
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
              var first, g, j, k, len, len1, matcher, position, source, token_cfg, token_cfgs, Ωilxt_142;
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
                this.eq((Ωilxt_142 = function() {
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
              var first, g, j, k, len, len1, matcher, source, token_cfg, token_cfgs, Ωilxt_143, Ωilxt_144, Ωilxt_145;
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
              this.eq((Ωilxt_143 = function() {
                return g.cfg.strategy;
              }), 'longest');
              this.eq((Ωilxt_144 = function() {
                return first.strategy;
              }), 'longest');
              for (k = 0, len1 = probes_and_matchers.length; k < len1; k++) {
                [source, matcher] = probes_and_matchers[k];
                this.eq((Ωilxt_145 = function() {
                  return condense_lexemes(g.scan_to_list(source));
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
          var first, g, i, len, matcher, probes_and_matchers, source, Ωilxt_146, Ωilxt_147, Ωilxt_148;
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
          this.eq((Ωilxt_146 = function() {
            return g.cfg.strategy;
          }), 'first');
          this.eq((Ωilxt_147 = function() {
            return first.strategy;
          }), 'first');
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [source, matcher] = probes_and_matchers[i];
            this.eq((Ωilxt_148 = function() {
              return condense_lexemes(g.scan_to_list(source));
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          /* strategy 'first', long tokens first */
          var first, g, i, len, matcher, probes_and_matchers, source, Ωilxt_149, Ωilxt_150, Ωilxt_151;
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
          this.eq((Ωilxt_149 = function() {
            return g.cfg.strategy;
          }), 'first');
          this.eq((Ωilxt_150 = function() {
            return first.strategy;
          }), 'first');
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [source, matcher] = probes_and_matchers[i];
            this.eq((Ωilxt_151 = function() {
              return condense_lexemes(g.scan_to_list(source));
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
          var g, gnd, Ωilxt_152;
          g = new Grammar({
            strategy: 'first',
            emit_signals: false
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
          return this.throws((Ωilxt_152 = function() {
            return g.scan_to_list("ab");
          }), /encountered zero-length match/);
        })();
        (() => {          //.....................................................................................................
          var g, gnd, Ωilxt_153;
          g = new Grammar({
            strategy: 'longest',
            emit_signals: false
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
          return this.throws((Ωilxt_153 = function() {
            return g.scan_to_list("ab");
          }), /encountered zero-length match/);
        })();
        (() => {          //.....................................................................................................
          /* We accept the empty match here since while it does get produced as an intermediate value to find
                 the longest match, it does not get passed on as a resulting lexeme. */
          var g, gnd, Ωilxt_154;
          g = new Grammar({
            strategy: 'longest',
            emit_signals: false
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
          return this.eq((Ωilxt_154 = function() {
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
          var first, g, Ωilxt_155, Ωilxt_156;
          g = new Grammar();
          first = g.new_level({
            name: 'first'
          });
          this.throws((Ωilxt_155 = function() {
            return first.new_token({
              name: 'digit',
              matcher: /[0-9]/,
              jump: 'first'
            });
          }), /cannot jump to same level/);
          this.throws((Ωilxt_156 = function() {
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
        var Token, Ωilxt_157, Ωilxt_158, Ωilxt_159, Ωilxt_160, Ωilxt_161, Ωilxt_162, Ωilxt_163, Ωilxt_164, Ωilxt_165, Ωilxt_166, Ωilxt_167, Ωilxt_168, Ωilxt_169, Ωilxt_170, Ωilxt_171, Ωilxt_172, Ωilxt_173, Ωilxt_174, Ωilxt_175, Ωilxt_176, Ωilxt_177, Ωilxt_178, Ωilxt_179;
        ({Token} = require('../../../apps/interlex'));
        //.....................................................................................................
        this.eq((Ωilxt_157 = function() {
          return Token._parse_jump();
        }), null);
        this.eq((Ωilxt_158 = function() {
          return Token._parse_jump('..');
        }), {
          spec: '..',
          carry: false,
          action: 'back',
          target: '..'
        });
        this.eq((Ωilxt_159 = function() {
          return Token._parse_jump('mylevel');
        }), {
          spec: 'mylevel',
          carry: false,
          action: 'fore',
          target: 'mylevel'
        });
        this.eq((Ωilxt_160 = function() {
          return Token._parse_jump('..!');
        }), {
          spec: '..!',
          carry: true,
          action: 'back',
          target: '..'
        });
        this.eq((Ωilxt_161 = function() {
          return Token._parse_jump('mylevel!');
        }), {
          spec: 'mylevel!',
          carry: true,
          action: 'fore',
          target: 'mylevel'
        });
        this.eq((Ωilxt_162 = function() {
          return Token._parse_jump('mylevel!', {
            name: 'otherlevel'
          });
        }), {
          spec: 'mylevel!',
          carry: true,
          action: 'fore',
          target: 'mylevel'
        });
        this.throws((Ωilxt_163 = function() {
          return Token._parse_jump('..]');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_164 = function() {
          return Token._parse_jump(']..');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_165 = function() {
          return Token._parse_jump('[mylevel');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_166 = function() {
          return Token._parse_jump('mylevel[');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_167 = function() {
          return Token._parse_jump('mylevel[', {
            name: 'otherlevel'
          });
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_168 = function() {
          return Token._parse_jump('[mylevel[');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_169 = function() {
          return Token._parse_jump('[mylevel]');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_170 = function() {
          return Token._parse_jump(']mylevel');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_171 = function() {
          return Token._parse_jump('[..');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_172 = function() {
          return Token._parse_jump('[..]');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_173 = function() {
          return Token._parse_jump('..[');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_174 = function() {
          return Token._parse_jump('[...');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_175 = function() {
          return Token._parse_jump('...');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_176 = function() {
          return Token._parse_jump('%');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_177 = function() {
          return Token._parse_jump('my-name');
        }), /encountered illegal jump spec/);
        this.throws((Ωilxt_178 = function() {
          return Token._parse_jump('mylevel', {
            name: 'mylevel'
          });
        }), /cannot jump to same level/);
        this.throws((Ωilxt_179 = function() {
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
          var first, g, lexeme, number, Ωilxt_180, Ωilxt_181, Ωilxt_182, Ωilxt_183, Ωilxt_184, Ωilxt_185, Ωilxt_186, Ωilxt_187, Ωilxt_188, Ωilxt_189;
          g = new Grammar({
            emit_signals: false
          });
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
          [lexeme] = g.scan_to_list('5');
          this.eq((Ωilxt_180 = function() {
            return lexeme instanceof Lexeme;
          }), true);
          this.eq((Ωilxt_181 = function() {
            return lexeme.token instanceof Token;
          }), true);
          this.eq((Ωilxt_182 = function() {
            return lexeme.name;
          }), 'digit');
          this.eq((Ωilxt_183 = function() {
            return lexeme.level.name;
          }), 'first');
          this.eq((Ωilxt_184 = function() {
            return lexeme.fqname;
          }), 'first.digit');
          lexeme.set_level(number);
          this.eq((Ωilxt_185 = function() {
            return lexeme instanceof Lexeme;
          }), true);
          this.eq((Ωilxt_186 = function() {
            return lexeme.token instanceof Token;
          }), true);
          this.eq((Ωilxt_187 = function() {
            return lexeme.name;
          }), 'digit');
          this.eq((Ωilxt_188 = function() {
            return lexeme.level.name;
          }), 'number');
          return this.eq((Ωilxt_189 = function() {
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
          var dqstring, first, g, lexemes, Ωilxt_190, Ωilxt_191, Ωilxt_192, Ωilxt_193, Ωilxt_194, Ωilxt_195, Ωilxt_196, Ωilxt_197, Ωilxt_198, Ωilxt_199;
          g = new Grammar(g_cfg);
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
          this.eq((Ωilxt_190 = function() {
            return first.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_191 = function() {
            return first.tokens[1].jump;
          }), {
            spec: 'dqstring!',
            carry: true,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_192 = function() {
            return dqstring.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_193 = function() {
            return dqstring.tokens[1].jump;
          }), {
            spec: '..',
            carry: false,
            action: 'back',
            target: '..'
          });
          //...................................................................................................
          lexemes = g.scan('Bob said "wow".');
          this.eq((Ωilxt_194 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: 'Bob said ',
            pos: '1:0:9'
          });
          this.eq((Ωilxt_195 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.dq',
            hit: '"',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_196 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.other',
            hit: 'wow',
            pos: '1:10:13'
          });
          this.eq((Ωilxt_197 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'dqstring.dq',
            hit: '"',
            pos: '1:13:14'
          });
          this.eq((Ωilxt_198 = function() {
            return abbrlxm(lexemes.next().value);
          }), {
            fqname: 'first.other',
            hit: '.',
            pos: '1:14:15'
          });
          this.eq((Ωilxt_199 = function() {
            return lexemes.next().done;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          /* forejump sticks, backjump carries */
          var dqstring, first, g, lexemes, Ωilxt_200, Ωilxt_201, Ωilxt_202, Ωilxt_203, Ωilxt_204, Ωilxt_205, Ωilxt_206, Ωilxt_207, Ωilxt_208, Ωilxt_209;
          g = new Grammar(g_cfg);
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
          this.eq((Ωilxt_200 = function() {
            return first.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_201 = function() {
            return first.tokens[1].jump;
          }), {
            spec: 'dqstring',
            carry: false,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_202 = function() {
            return dqstring.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_203 = function() {
            return dqstring.tokens[1].jump;
          }), {
            spec: '..!',
            carry: true,
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
            fqname: 'first.dq',
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
            fqname: 'first.dq',
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
          /* forejump carries, backjump carries */
          var dqstring, first, g, lexemes, Ωilxt_210, Ωilxt_211, Ωilxt_212, Ωilxt_213, Ωilxt_214, Ωilxt_215, Ωilxt_216, Ωilxt_217, Ωilxt_218, Ωilxt_219;
          g = new Grammar(g_cfg);
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
          this.eq((Ωilxt_210 = function() {
            return first.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_211 = function() {
            return first.tokens[1].jump;
          }), {
            spec: 'dqstring!',
            carry: true,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_212 = function() {
            return dqstring.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_213 = function() {
            return dqstring.tokens[1].jump;
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
            fqname: 'dqstring.dq',
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
          /* forejump sticks, backjump sticks */
          var dqstring, first, g, lexemes, Ωilxt_220, Ωilxt_221, Ωilxt_222, Ωilxt_223, Ωilxt_224, Ωilxt_225, Ωilxt_226, Ωilxt_227, Ωilxt_228, Ωilxt_229;
          g = new Grammar(g_cfg);
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
          this.eq((Ωilxt_220 = function() {
            return first.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_221 = function() {
            return first.tokens[1].jump;
          }), {
            spec: 'dqstring',
            carry: false,
            action: 'fore',
            target: 'dqstring'
          });
          this.eq((Ωilxt_222 = function() {
            return dqstring.tokens[1].name;
          }), 'dq');
          this.eq((Ωilxt_223 = function() {
            return dqstring.tokens[1].jump;
          }), {
            spec: '..',
            carry: false,
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
            fqname: 'first.dq',
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
            fqname: 'dqstring.dq',
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
          var lexemes, matcher, probe, x, Ωilxt_230, Ωilxt_231, Ωilxt_232;
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            g.reset_lnr();
            lexemes = g.scan_to_list(probe);
            this.eq((Ωilxt_230 = function() {
              return condense_lexemes(lexemes);
            }), matcher.condensed);
            this.eq((Ωilxt_231 = function() {
              return lexemes.length;
            }), matcher.length);
            g.reset_lnr();
            this.eq((Ωilxt_232 = function() {
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
          info('Ωilxt_233', source);
          g.reset_lnr(1);
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
          var g, gnd, lexemes, number, source, Ωilxt_235, Ωilxt_236, Ωilxt_237, Ωilxt_238, Ωilxt_239, Ωilxt_240, Ωilxt_241;
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
            matcher: /[a-zA-Z]+/
          });
          gnd.new_token({
            name: 'before_digits',
            matcher: /(?=[0-9])/,
            jump: 'number'
          });
          gnd.new_token({
            name: 'ws',
            matcher: /\s+/
          });
          //...................................................................................................
          number.new_token({
            name: 'integer',
            matcher: /[0-9]+/
          });
          number.new_token({
            name: 'unit',
            matcher: /[a-zA-Z]+/,
            jump: '..'
          });
          //...................................................................................................
          source = "99kg23mm";
          info('Ωilxt_234', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_235 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.before_digits',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_236 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '99',
            pos: '1:0:2'
          });
          this.eq((Ωilxt_237 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'kg',
            pos: '1:2:4'
          });
          this.eq((Ωilxt_238 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.before_digits',
            hit: '',
            pos: '1:4:4'
          });
          this.eq((Ωilxt_239 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '23',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_240 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'mm',
            pos: '1:6:8'
          });
          return this.eq((Ωilxt_241 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
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
        var stack, Ωilxt_242, Ωilxt_243, Ωilxt_244, Ωilxt_245, Ωilxt_246;
        stack = new Levelstack();
        this.eq((Ωilxt_242 = function() {
          return stack.is_empty;
        }), true);
        stack.push({
          name: '1'
        });
        this.eq((Ωilxt_243 = function() {
          return stack.length;
        }), 1);
        this.eq((Ωilxt_244 = function() {
          return stack.peek();
        }), {
          name: '1'
        });
        this.eq((Ωilxt_245 = function() {
          return stack.pop();
        }), {
          name: '1'
        });
        return this.eq((Ωilxt_246 = function() {
          return stack.length;
        }), 0);
      })();
      (() => {
        var stack, Ωilxt_247, Ωilxt_248, Ωilxt_249, Ωilxt_250;
        stack = new Levelstack({
          name: '1'
        });
        this.eq((Ωilxt_247 = function() {
          return stack.length;
        }), 1);
        this.eq((Ωilxt_248 = function() {
          return stack.peek();
        }), {
          name: '1'
        });
        this.eq((Ωilxt_249 = function() {
          return stack.pop();
        }), {
          name: '1'
        });
        return this.eq((Ωilxt_250 = function() {
          return stack.length;
        }), 0);
      })();
      (() => {
        var stack, Ωilxt_251, Ωilxt_252, Ωilxt_253, Ωilxt_254, Ωilxt_255, Ωilxt_256, Ωilxt_257;
        stack = new Levelstack({
          name: '1'
        }, {
          name: '2'
        });
        this.eq((Ωilxt_251 = function() {
          return stack.length;
        }), 2);
        this.eq((Ωilxt_252 = function() {
          return stack.peek();
        }), {
          name: '2'
        });
        this.eq((Ωilxt_253 = function() {
          return stack.popnpeek();
        }), {
          name: '1'
        });
        this.eq((Ωilxt_254 = function() {
          return stack.length;
        }), 1);
        this.eq((Ωilxt_255 = function() {
          return stack.peek();
        }), {
          name: '1'
        });
        this.eq((Ωilxt_256 = function() {
          return stack.pop();
        }), {
          name: '1'
        });
        return this.eq((Ωilxt_257 = function() {
          return stack.length;
        }), 0);
      })();
      (() => {
        var stack, Ωilxt_258, Ωilxt_259, Ωilxt_260, Ωilxt_261, Ωilxt_262, Ωilxt_263, Ωilxt_264, Ωilxt_265, Ωilxt_266;
        stack = new Levelstack({
          name: '1'
        }, {
          name: '2'
        });
        this.eq((Ωilxt_258 = function() {
          return stack.length;
        }), 2);
        this.eq((Ωilxt_259 = function() {
          return stack.peek_name();
        }), '2');
        this.eq((Ωilxt_260 = function() {
          return stack.popnpeek_name();
        }), '1');
        this.eq((Ωilxt_261 = function() {
          return stack.length;
        }), 1);
        this.eq((Ωilxt_262 = function() {
          return stack.is_empty;
        }), false);
        this.eq((Ωilxt_263 = function() {
          return stack.peek_name();
        }), '1');
        this.eq((Ωilxt_264 = function() {
          return stack.pop_name();
        }), '1');
        this.eq((Ωilxt_265 = function() {
          return stack.length;
        }), 0);
        return this.eq((Ωilxt_266 = function() {
          return stack.is_empty;
        }), true);
      })();
      (() => {
        var stack, Ωilxt_267, Ωilxt_268, Ωilxt_269, Ωilxt_270, Ωilxt_271, Ωilxt_272, Ωilxt_273, Ωilxt_274, Ωilxt_275, Ωilxt_276, Ωilxt_277, Ωilxt_278;
        stack = new Levelstack({
          name: '1'
        }, {
          name: '2'
        });
        this.eq((Ωilxt_267 = function() {
          return stack.pop();
        }), {
          name: '2'
        });
        this.eq((Ωilxt_268 = function() {
          return stack.is_empty;
        }), false);
        this.eq((Ωilxt_269 = function() {
          return stack.pop();
        }), {
          name: '1'
        });
        this.eq((Ωilxt_270 = function() {
          return stack.is_empty;
        }), true);
        this.throws((Ωilxt_271 = function() {
          return stack.pop();
        }), /stack is empty/);
        this.throws((Ωilxt_272 = function() {
          return stack.popnpeek();
        }), /stack is empty/);
        this.throws((Ωilxt_273 = function() {
          return stack.pop_name();
        }), /stack is empty/);
        this.throws((Ωilxt_274 = function() {
          return stack.popnpeek_name();
        }), /stack is empty/);
        this.eq((Ωilxt_275 = function() {
          return stack.pop('fallback');
        }), 'fallback');
        this.eq((Ωilxt_276 = function() {
          return stack.popnpeek('fallback');
        }), 'fallback');
        this.eq((Ωilxt_277 = function() {
          return stack.pop_name('fallback');
        }), 'fallback');
        return this.eq((Ωilxt_278 = function() {
          return stack.popnpeek_name('fallback');
        }), 'fallback');
      })();
      return null;
    },
    //=========================================================================================================
    signals: {
      //-------------------------------------------------------------------------------------------------------
      cfg_settings: function() {
        var Grammar, Ωilxt_279, Ωilxt_280, Ωilxt_281, Ωilxt_282;
        ({Grammar} = require('../../../apps/interlex'));
        this.eq((Ωilxt_279 = function() {
          return (new Grammar({
            emit_signals: false
          })).cfg.emit_signals;
        }), false);
        this.eq((Ωilxt_280 = function() {
          return (new Grammar({
            emit_signals: true
          })).cfg.emit_signals;
        }), true);
        this.eq((Ωilxt_281 = function() {
          return (new Grammar({})).cfg.emit_signals;
        }), true);
        this.eq((Ωilxt_282 = function() {
          return (new Grammar()).cfg.emit_signals;
        }), true);
        // @throws ( Ωilxt_ACCEPTFORNOW_283 = -> ( new Grammar { emit_signals: null,      } ).cfg.emit_signals ), /——————————————————————/
        // @throws ( Ωilxt_ACCEPTFORNOW_284 = -> ( new Grammar { emit_signals: undefined, } ).cfg.emit_signals ), /——————————————————————/
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      detailed_jump_signals: function() {
        var Grammar, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        (() => {          //-----------------------------------------------------------------------------------------------------
          /* fore jump sticky, back jump sticky */
          var g, gnd, lexemes, number, source, Ωilxt_285, Ωilxt_288, Ωilxt_289, Ωilxt_290, Ωilxt_291, Ωilxt_292, Ωilxt_293, Ωilxt_294, Ωilxt_295, Ωilxt_296, Ωilxt_297, Ωilxt_298, Ωilxt_299, Ωilxt_300, Ωilxt_301, Ωilxt_302;
          g = new Grammar({
            name: 'g',
            emit_signals: true,
            simplify_jumps: false
          });
          this.eq((Ωilxt_285 = function() {
            return g.cfg.simplify_jumps;
          }), false);
          gnd = g.new_level({
            name: 'gnd'
          });
          number = g.new_level({
            name: 'number'
          });
          //...................................................................................................
          gnd.new_token({
            name: 'letters',
            matcher: /[a-zA-Z]+/
          });
          gnd.new_token({
            name: 'before_digits',
            matcher: /(?=[0-9])/,
            jump: 'number'
          });
          gnd.new_token({
            name: 'ws',
            matcher: /\s+/
          });
          //...................................................................................................
          number.new_token({
            name: 'integer',
            matcher: /[0-9]+/
          });
          number.new_token({
            name: 'unit',
            matcher: /[a-zA-Z]+/,
            jump: '..'
          });
          //...................................................................................................
          source = "99kg23mm";
          // info 'Ωilxt_286', source; tabulate_lexemes g.scan source
          info('Ωilxt_287', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_288 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_289 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              from_level: null,
              to_level: 'gnd'
            }
          });
          this.eq((Ωilxt_290 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.before_digits',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_291 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              from_level: 'gnd',
              to_level: 'number'
            }
          });
          this.eq((Ωilxt_292 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '99',
            pos: '1:0:2'
          });
          this.eq((Ωilxt_293 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'kg',
            pos: '1:2:4'
          });
          this.eq((Ωilxt_294 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:4:4',
            data: {
              from_level: 'number',
              to_level: 'gnd'
            }
          });
          this.eq((Ωilxt_295 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.before_digits',
            hit: '',
            pos: '1:4:4'
          });
          this.eq((Ωilxt_296 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:4:4',
            data: {
              from_level: 'gnd',
              to_level: 'number'
            }
          });
          this.eq((Ωilxt_297 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '23',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_298 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'mm',
            pos: '1:6:8'
          });
          this.eq((Ωilxt_299 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:8:8',
            data: {
              from_level: 'number',
              to_level: 'gnd'
            }
          });
          this.eq((Ωilxt_300 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:8:8',
            data: {
              from_level: 'gnd',
              to_level: null
            }
          });
          this.eq((Ωilxt_301 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:8:8'
          });
          this.eq((Ωilxt_302 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          /* fore jump carry, back jump sticky */
          var g, gnd, lexemes, number, source, Ωilxt_303, Ωilxt_306, Ωilxt_307, Ωilxt_308, Ωilxt_309, Ωilxt_310, Ωilxt_311, Ωilxt_312, Ωilxt_313, Ωilxt_314, Ωilxt_315, Ωilxt_316, Ωilxt_317, Ωilxt_318, Ωilxt_319, Ωilxt_320;
          g = new Grammar({
            name: 'g',
            emit_signals: true,
            simplify_jumps: false
          });
          this.eq((Ωilxt_303 = function() {
            return g.cfg.simplify_jumps;
          }), false);
          gnd = g.new_level({
            name: 'gnd'
          });
          number = g.new_level({
            name: 'number'
          });
          //...................................................................................................
          gnd.new_token({
            name: 'letters',
            matcher: /[a-zA-Z]+/
          });
          gnd.new_token({
            name: 'before_digits',
            matcher: /(?=[0-9])/,
            jump: 'number!'
          });
          gnd.new_token({
            name: 'ws',
            matcher: /\s+/
          });
          //...................................................................................................
          number.new_token({
            name: 'integer',
            matcher: /[0-9]+/
          });
          number.new_token({
            name: 'unit',
            matcher: /[a-zA-Z]+/,
            jump: '..'
          });
          //...................................................................................................
          source = "99kg23mm";
          // info 'Ωilxt_304', source; tabulate_lexemes g.scan source
          info('Ωilxt_305', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_306 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_307 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              from_level: null,
              to_level: 'gnd'
            }
          });
          this.eq((Ωilxt_308 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              from_level: 'gnd',
              to_level: 'number'
            }
          });
          this.eq((Ωilxt_309 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.before_digits',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_310 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '99',
            pos: '1:0:2'
          });
          this.eq((Ωilxt_311 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'kg',
            pos: '1:2:4'
          });
          this.eq((Ωilxt_312 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:4:4',
            data: {
              from_level: 'number',
              to_level: 'gnd'
            }
          });
          this.eq((Ωilxt_313 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:4:4',
            data: {
              from_level: 'gnd',
              to_level: 'number'
            }
          });
          this.eq((Ωilxt_314 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.before_digits',
            hit: '',
            pos: '1:4:4'
          });
          this.eq((Ωilxt_315 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '23',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_316 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'mm',
            pos: '1:6:8'
          });
          this.eq((Ωilxt_317 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:8:8',
            data: {
              from_level: 'number',
              to_level: 'gnd'
            }
          });
          this.eq((Ωilxt_318 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:8:8',
            data: {
              from_level: 'gnd',
              to_level: null
            }
          });
          this.eq((Ωilxt_319 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:8:8'
          });
          this.eq((Ωilxt_320 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          /* fore jump carry, back jump carry */
          var g, gnd, lexemes, number, source, Ωilxt_321, Ωilxt_324, Ωilxt_325, Ωilxt_326, Ωilxt_327, Ωilxt_328, Ωilxt_329, Ωilxt_330, Ωilxt_331, Ωilxt_332, Ωilxt_333, Ωilxt_334, Ωilxt_335, Ωilxt_336, Ωilxt_337, Ωilxt_338;
          g = new Grammar({
            name: 'g',
            emit_signals: true,
            simplify_jumps: false
          });
          this.eq((Ωilxt_321 = function() {
            return g.cfg.simplify_jumps;
          }), false);
          gnd = g.new_level({
            name: 'gnd'
          });
          number = g.new_level({
            name: 'number'
          });
          //...................................................................................................
          gnd.new_token({
            name: 'letters',
            matcher: /[a-zA-Z]+/
          });
          gnd.new_token({
            name: 'before_digits',
            matcher: /(?=[0-9])/,
            jump: 'number!'
          });
          gnd.new_token({
            name: 'ws',
            matcher: /\s+/
          });
          //...................................................................................................
          number.new_token({
            name: 'integer',
            matcher: /[0-9]+/
          });
          number.new_token({
            name: 'unit',
            matcher: /[a-zA-Z]+/,
            jump: '..!'
          });
          //...................................................................................................
          source = "99kg23mm";
          // info 'Ωilxt_322', source; tabulate_lexemes g.scan source
          info('Ωilxt_323', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_324 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_325 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              from_level: null,
              to_level: 'gnd'
            }
          });
          this.eq((Ωilxt_326 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              from_level: 'gnd',
              to_level: 'number'
            }
          });
          this.eq((Ωilxt_327 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.before_digits',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_328 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '99',
            pos: '1:0:2'
          });
          this.eq((Ωilxt_329 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:2:2',
            data: {
              from_level: 'number',
              to_level: 'gnd'
            }
          });
          this.eq((Ωilxt_330 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.unit',
            hit: 'kg',
            pos: '1:2:4'
          });
          this.eq((Ωilxt_331 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:4:4',
            data: {
              from_level: 'gnd',
              to_level: 'number'
            }
          });
          this.eq((Ωilxt_332 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.before_digits',
            hit: '',
            pos: '1:4:4'
          });
          this.eq((Ωilxt_333 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '23',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_334 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:6:6',
            data: {
              from_level: 'number',
              to_level: 'gnd'
            }
          });
          this.eq((Ωilxt_335 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.unit',
            hit: 'mm',
            pos: '1:6:8'
          });
          this.eq((Ωilxt_336 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:8:8',
            data: {
              from_level: 'gnd',
              to_level: null
            }
          });
          this.eq((Ωilxt_337 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:8:8'
          });
          this.eq((Ωilxt_338 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          /* fore jump sticky, back jump carry */
          var g, gnd, lexemes, number, source, Ωilxt_339, Ωilxt_342, Ωilxt_343, Ωilxt_344, Ωilxt_345, Ωilxt_346, Ωilxt_347, Ωilxt_348, Ωilxt_349, Ωilxt_350, Ωilxt_351, Ωilxt_352, Ωilxt_353, Ωilxt_354, Ωilxt_355, Ωilxt_356;
          g = new Grammar({
            name: 'g',
            emit_signals: true,
            simplify_jumps: false
          });
          this.eq((Ωilxt_339 = function() {
            return g.cfg.simplify_jumps;
          }), false);
          gnd = g.new_level({
            name: 'gnd'
          });
          number = g.new_level({
            name: 'number'
          });
          //...................................................................................................
          gnd.new_token({
            name: 'letters',
            matcher: /[a-zA-Z]+/
          });
          gnd.new_token({
            name: 'before_digits',
            matcher: /(?=[0-9])/,
            jump: 'number'
          });
          gnd.new_token({
            name: 'ws',
            matcher: /\s+/
          });
          //...................................................................................................
          number.new_token({
            name: 'integer',
            matcher: /[0-9]+/
          });
          number.new_token({
            name: 'unit',
            matcher: /[a-zA-Z]+/,
            jump: '..!'
          });
          //...................................................................................................
          source = "99kg23mm";
          // info 'Ωilxt_340', source; tabulate_lexemes g.scan source
          info('Ωilxt_341', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_342 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_343 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              from_level: null,
              to_level: 'gnd'
            }
          });
          this.eq((Ωilxt_344 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.before_digits',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_345 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              from_level: 'gnd',
              to_level: 'number'
            }
          });
          this.eq((Ωilxt_346 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '99',
            pos: '1:0:2'
          });
          this.eq((Ωilxt_347 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:2:2',
            data: {
              from_level: 'number',
              to_level: 'gnd'
            }
          });
          this.eq((Ωilxt_348 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.unit',
            hit: 'kg',
            pos: '1:2:4'
          });
          this.eq((Ωilxt_349 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.before_digits',
            hit: '',
            pos: '1:4:4'
          });
          this.eq((Ωilxt_350 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:4:4',
            data: {
              from_level: 'gnd',
              to_level: 'number'
            }
          });
          this.eq((Ωilxt_351 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '23',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_352 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:6:6',
            data: {
              from_level: 'number',
              to_level: 'gnd'
            }
          });
          this.eq((Ωilxt_353 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.unit',
            hit: 'mm',
            pos: '1:6:8'
          });
          this.eq((Ωilxt_354 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:8:8',
            data: {
              from_level: 'gnd',
              to_level: null
            }
          });
          this.eq((Ωilxt_355 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:8:8'
          });
          this.eq((Ωilxt_356 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        //...................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      simplified_jump_signals: function() {
        var Grammar, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          /* fore jump carry, back jump sticky */
          var g, gnd, lexemes, number, source, Ωilxt_357, Ωilxt_360, Ωilxt_361, Ωilxt_362, Ωilxt_363, Ωilxt_364, Ωilxt_365, Ωilxt_366, Ωilxt_367, Ωilxt_368, Ωilxt_369, Ωilxt_370, Ωilxt_371;
          g = new Grammar({
            name: 'g',
            emit_signals: true
          });
          this.eq((Ωilxt_357 = function() {
            return g.cfg.simplify_jumps;
          }), true);
          gnd = g.new_level({
            name: 'gnd'
          });
          number = g.new_level({
            name: 'number'
          });
          //...................................................................................................
          gnd.new_token({
            name: 'letters',
            matcher: /[a-zA-Z]+/
          });
          gnd.new_token({
            name: 'before_digits',
            matcher: /(?=[0-9])/,
            jump: 'number!'
          });
          gnd.new_token({
            name: 'ws',
            matcher: /\s+/
          });
          //...................................................................................................
          number.new_token({
            name: 'integer',
            matcher: /[0-9]+/
          });
          number.new_token({
            name: 'unit',
            matcher: /[a-zA-Z]+/,
            jump: '..'
          });
          //...................................................................................................
          source = "99kg23mm";
          // info 'Ωilxt_358', source; tabulate_lexemes g.scan source
          info('Ωilxt_359', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_360 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_361 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              from_level: null,
              to_level: 'number'
            }
          });
          this.eq((Ωilxt_362 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.before_digits',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_363 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '99',
            pos: '1:0:2'
          });
          this.eq((Ωilxt_364 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'kg',
            pos: '1:2:4'
          });
          this.eq((Ωilxt_365 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:4:4',
            data: {
              from_level: 'number',
              to_level: 'number'
            }
          });
          this.eq((Ωilxt_366 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.before_digits',
            hit: '',
            pos: '1:4:4'
          });
          this.eq((Ωilxt_367 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.integer',
            hit: '23',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_368 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.unit',
            hit: 'mm',
            pos: '1:6:8'
          });
          this.eq((Ωilxt_369 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:8:8',
            data: {
              from_level: 'number',
              to_level: null
            }
          });
          this.eq((Ωilxt_370 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:8:8'
          });
          this.eq((Ωilxt_371 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        //...................................................................................................
        return null;
      }
    },
    //=========================================================================================================
    demo: {
      //-------------------------------------------------------------------------------------------------------
      demo_nr_1: function() {
        var Grammar, g, gnd, lexemes, rx, source, Ωilxt_374, Ωilxt_375, Ωilxt_376, Ωilxt_377, Ωilxt_378, Ωilxt_379, Ωilxt_380, Ωilxt_381, Ωilxt_382, Ωilxt_383, Ωilxt_384, Ωilxt_385, Ωilxt_386, Ωilxt_387, Ωilxt_389, Ωilxt_ACCEPT_388;
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
          matcher: rx`(?<initial>[A-Z])[a-z]*`
        });
        gnd.new_token({
          name: 'number',
          matcher: rx`[0-9]+`
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
        //.....................................................................................................
        source = "Alice in Cairo 1912 (approximately)";
        info('Ωilxt_372', source);
        tabulate_lexemes(g.scan(source));
        info('Ωilxt_373', source);
        g.reset_lnr(1);
        lexemes = g.scan(source);
        this.eq((Ωilxt_374 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_375 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:0:0',
          data: {
            from_level: null,
            to_level: 'gnd'
          }
        });
        this.eq((Ωilxt_376 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name',
          hit: 'Alice',
          pos: '1:0:5'
        });
        this.eq((Ωilxt_377 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:5:6'
        });
        this.eq((Ωilxt_378 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.other',
          hit: 'in',
          pos: '1:6:8'
        });
        this.eq((Ωilxt_379 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:8:9'
        });
        this.eq((Ωilxt_380 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name',
          hit: 'Cairo',
          pos: '1:9:14'
        });
        this.eq((Ωilxt_381 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:14:15'
        });
        this.eq((Ωilxt_382 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.number',
          hit: '1912',
          pos: '1:15:19'
        });
        this.eq((Ωilxt_383 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:19:20'
        });
        this.eq((Ωilxt_384 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.paren_start',
          hit: '(',
          pos: '1:20:21'
        });
        this.eq((Ωilxt_385 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.other',
          hit: 'approximately',
          pos: '1:21:34'
        });
        this.eq((Ωilxt_386 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.paren_stop',
          hit: ')',
          pos: '1:34:35'
        });
        this.eq((Ωilxt_387 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:35:35',
          data: {
            from_level: 'gnd',
            to_level: null
          }
        });
        this.eq((Ωilxt_ACCEPT_388 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.stop',
          hit: '',
          pos: '1:35:35'
        });
        this.eq((Ωilxt_389 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), null);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      demo_nr_2: function() {
        var Grammar, g, gnd, lexemes, rx, source, string11, Ωilxt_392, Ωilxt_393, Ωilxt_394, Ωilxt_395, Ωilxt_396, Ωilxt_397, Ωilxt_398, Ωilxt_399, Ωilxt_400, Ωilxt_401, Ωilxt_402, Ωilxt_403, Ωilxt_404, Ωilxt_405, Ωilxt_406, Ωilxt_407, Ωilxt_427;
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
        //.....................................................................................................
        // string11.new_token  { name: 'string11_stop',  matcher: rx"(?!<\\)'",                jump: '..!', }
        string11.new_token({
          name: 'text',
          matcher: rx`[^']+`
        });
        //.....................................................................................................
        source = "Alice in Cairo 1912 'approximately'";
        info('Ωilxt_390', source);
        tabulate_lexemes(g.scan(source));
        info('Ωilxt_391', source);
        g.reset_lnr(1);
        lexemes = g.scan(source);
        this.eq((Ωilxt_392 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.start',
          hit: '',
          pos: '1:0:0'
        });
        this.eq((Ωilxt_393 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:0:0',
          data: {
            from_level: null,
            to_level: 'gnd'
          }
        });
        this.eq((Ωilxt_394 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name',
          hit: 'Alice',
          pos: '1:0:5'
        });
        this.eq((Ωilxt_395 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:5:6'
        });
        this.eq((Ωilxt_396 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.other',
          hit: 'in',
          pos: '1:6:8'
        });
        this.eq((Ωilxt_397 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:8:9'
        });
        this.eq((Ωilxt_398 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.name',
          hit: 'Cairo',
          pos: '1:9:14'
        });
        this.eq((Ωilxt_399 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:14:15'
        });
        this.eq((Ωilxt_400 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.number',
          hit: '1912',
          pos: '1:15:19'
        });
        this.eq((Ωilxt_401 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.ws',
          hit: ' ',
          pos: '1:19:20'
        });
        this.eq((Ωilxt_402 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'gnd.string11_start',
          hit: "'",
          pos: '1:20:21'
        });
        this.eq((Ωilxt_403 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:21:21',
          data: {
            from_level: 'gnd',
            to_level: 'string11'
          }
        });
        this.eq((Ωilxt_404 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: 'string11.text',
          hit: 'approximately',
          pos: '1:21:34'
        });
        this.eq((Ωilxt_405 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.jump',
          hit: '',
          pos: '1:34:34',
          data: {
            from_level: 'string11',
            to_level: null
          }
        });
        this.eq((Ωilxt_427 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.error',
          hit: "'",
          pos: '1:34:35',
          data: {
            kind: 'earlystop',
            message: 'expected stop at 35, got 34'
          }
        });
        this.eq((Ωilxt_406 = function() {
          return abbrlxm(tabulate_lexeme(lexemes.next().value));
        }), {
          fqname: '$signal.stop',
          hit: '',
          pos: '1:34:34'
        });
        this.eq((Ωilxt_407 = function() {
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
          matcher: rx.i`\\[0-9]|[a-z\s]+`
        });
        gnd.new_token({
          name: 'number_start',
          matcher: rx`(?=(?!<\\)[0-9])`,
          jump: 'number'
        });
        number.new_token({
          name: 'number',
          matcher: rx`[0-9]+`
        });
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_410, Ωilxt_411, Ωilxt_412, Ωilxt_413, Ωilxt_414, Ωilxt_415, Ωilxt_416, Ωilxt_417;
          source = "R\\2D\\2 on Charon 3";
          // info 'Ωilxt_408', source; tabulate_lexemes g.scan source
          info('Ωilxt_409', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_410 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'R',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_411 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: '\\2',
            pos: '1:1:3'
          });
          this.eq((Ωilxt_412 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'D',
            pos: '1:3:4'
          });
          this.eq((Ωilxt_413 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: '\\2',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_414 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' on Charon ',
            pos: '1:6:17'
          });
          this.eq((Ωilxt_415 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.number_start',
            hit: '',
            pos: '1:17:17'
          });
          this.eq((Ωilxt_416 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.number',
            hit: '3',
            pos: '1:17:18'
          });
          this.eq((Ωilxt_417 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var lexemes, source, Ωilxt_420, Ωilxt_421, Ωilxt_422, Ωilxt_423, Ωilxt_424, Ωilxt_425, Ωilxt_426, Ωilxt_427, Ωilxt_428;
          source = "R\\2D\\2 on Charon 3!!";
          // echo abbrlxm lxm for lxm from g.scan source
          // info 'Ωilxt_418', source; tabulate_lexemes g.scan source
          info('Ωilxt_419', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_420 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'R',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_421 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: '\\2',
            pos: '1:1:3'
          });
          this.eq((Ωilxt_422 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: 'D',
            pos: '1:3:4'
          });
          this.eq((Ωilxt_423 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: '\\2',
            pos: '1:4:6'
          });
          this.eq((Ωilxt_424 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.text',
            hit: ' on Charon ',
            pos: '1:6:17'
          });
          this.eq((Ωilxt_425 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'gnd.number_start',
            hit: '',
            pos: '1:17:17'
          });
          this.eq((Ωilxt_426 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'number.number',
            hit: '3',
            pos: '1:17:18'
          });
          this.eq((Ωilxt_427 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.error',
            hit: '!!',
            pos: '1:18:20',
            data: {
              kind: 'earlystop',
              message: 'expected stop at 20, got 18'
            }
          });
          this.eq((Ωilxt_428 = function() {
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
          var g, Ωilxt_429, Ωilxt_430, Ωilxt_431, Ωilxt_432;
          g = new Grammar();
          this.eq((Ωilxt_429 = function() {
            return g.cfg.name;
          }), 'g');
          this.eq((Ωilxt_430 = function() {
            return g.cfg.strategy;
          }), 'first');
          this.eq((Ωilxt_431 = function() {
            return g.cfg.emit_signals;
          }), true);
          this.eq((Ωilxt_432 = function() {
            return g.cfg.simplify_jumps;
          }), true);
          return null;
        })();
        (() => {          //.........................................................................................................
          var g, Ωilxt_433, Ωilxt_434, Ωilxt_435, Ωilxt_436;
          g = new Grammar({
            emit_signals: false
          });
          this.eq((Ωilxt_433 = function() {
            return g.cfg.name;
          }), 'g');
          this.eq((Ωilxt_434 = function() {
            return g.cfg.strategy;
          }), 'first');
          this.eq((Ωilxt_435 = function() {
            return g.cfg.emit_signals;
          }), false);
          this.eq((Ωilxt_436 = function() {
            return g.cfg.simplify_jumps;
          }), false);
          return null;
        })();
        //.........................................................................................................
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
      // guytest_cfg = { throw_on_error: false, show_passes: true, report_checks: true, }
      return (new Test(guytest_cfg)).test(this.interlex_tasks);
    })();
  }

  // ( new Test guytest_cfg ).test { demo: @interlex_tasks.demo, }
// ( new Test guytest_cfg ).test { cfg_settings: @interlex_tasks.cfg_settings, }
// ( new Test guytest_cfg ).test { numbering: @interlex_tasks.basics.numbering, }
// ( new Test guytest_cfg ).test { stack: @interlex_tasks.stack, }

}).call(this);

//# sourceMappingURL=test-basics.js.map