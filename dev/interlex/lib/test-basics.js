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
      simple_1: function() {
        var Grammar, ILX, Level, Lexeme, Token, g, gnd, number_lx, number_tk, number_tk_matcher, rx, Ωilxt__28, Ωilxt__29, Ωilxt__30, Ωilxt__31, Ωilxt__32, Ωilxt__33, Ωilxt__34, Ωilxt__35, Ωilxt__36, Ωilxt__37, Ωilxt__38, Ωilxt__39, Ωilxt__40, Ωilxt__41, Ωilxt__42, Ωilxt__43, Ωilxt__44, Ωilxt__45, Ωilxt__46, Ωilxt__47, Ωilxt__48, Ωilxt__49, Ωilxt__50, Ωilxt__51, Ωilxt__52, Ωilxt__53, Ωilxt__54, Ωilxt__55, Ωilxt__56, Ωilxt__57, Ωilxt__58, Ωilxt__59, Ωilxt__60, Ωilxt__61, Ωilxt__62, Ωilxt__63;
        ILX = require('../../../apps/interlex');
        ({Grammar, Level, Token, Lexeme, rx} = ILX);
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
        this.eq((Ωilxt__28 = function() {
          return g.start_level instanceof Level;
        }), true);
        this.eq((Ωilxt__29 = function() {
          return g.start_level;
        }), gnd);
        this.eq((Ωilxt__30 = function() {
          return g.start_level_name;
        }), 'gnd');
        this.eq((Ωilxt__31 = function() {
          return g.name;
        }), 'g');
        this.eq((Ωilxt__32 = function() {
          return g.levels instanceof Object;
        }), true);
        this.eq((Ωilxt__33 = function() {
          return g.levels.gnd;
        }), gnd);
        //.....................................................................................................
        this.eq((Ωilxt__34 = function() {
          return gnd instanceof Level;
        }), true);
        this.eq((Ωilxt__35 = function() {
          return gnd.name;
        }), 'gnd');
        this.eq((Ωilxt__36 = function() {
          return gnd.grammar;
        }), g);
        this.eq((Ωilxt__37 = function() {
          return gnd.tokens instanceof Array;
        }), true);
        this.eq((Ωilxt__38 = function() {
          return gnd.tokens.length;
        }), 1);
        this.eq((Ωilxt__39 = function() {
          return gnd.tokens[0];
        }), number_tk);
        //.....................................................................................................
        this.eq((Ωilxt__40 = function() {
          return number_tk instanceof Token;
        }), true);
        this.eq((Ωilxt__41 = function() {
          return number_tk.name;
        }), 'number');
        this.eq((Ωilxt__42 = function() {
          return number_tk.level;
        }), gnd);
        this.eq((Ωilxt__43 = function() {
          return number_tk.grammar;
        }), g);
        this.eq((Ωilxt__44 = function() {
          return number_tk.matcher === number_tk_matcher;
        }), true);
        this.eq((Ωilxt__45 = function() {
          return number_tk.jump;
        }), null);
        this.eq((Ωilxt__46 = function() {
          return number_tk.jump_spec;
        }), null);
        //.....................................................................................................
        this.eq((Ωilxt__47 = function() {
          return (number_lx = number_tk.match_at(0, '398')) != null;
        }), true);
        this.eq((Ωilxt__48 = function() {
          return number_lx instanceof Lexeme;
        }), true);
        this.eq((Ωilxt__49 = function() {
          return number_lx.name;
        }), 'number');
        this.eq((Ωilxt__50 = function() {
          return number_lx.fqname;
        }), 'gnd.number');
        this.eq((Ωilxt__51 = function() {
          return number_lx.level;
        }), gnd);
        this.eq((Ωilxt__52 = function() {
          return number_lx.hit;
        }), '398');
        this.eq((Ωilxt__53 = function() {
          return number_lx.start;
        }), 0);
        this.eq((Ωilxt__54 = function() {
          return number_lx.stop;
        }), 3);
        //.....................................................................................................
        this.eq((Ωilxt__55 = function() {
          return (number_lx = number_tk.match_at(7, 'abcdefgh00102xyz')) != null;
        }), false);
        this.eq((Ωilxt__56 = function() {
          return (number_lx = number_tk.match_at(8, 'abcdefgh00102xyz')) != null;
        }), true);
        this.eq((Ωilxt__57 = function() {
          return number_lx instanceof Lexeme;
        }), true);
        this.eq((Ωilxt__58 = function() {
          return number_lx.name;
        }), 'number');
        this.eq((Ωilxt__59 = function() {
          return number_lx.fqname;
        }), 'gnd.number');
        this.eq((Ωilxt__60 = function() {
          return number_lx.level;
        }), gnd);
        this.eq((Ωilxt__61 = function() {
          return number_lx.hit;
        }), '00102');
        this.eq((Ωilxt__62 = function() {
          return number_lx.start;
        }), 8);
        this.eq((Ωilxt__63 = function() {
          return number_lx.stop;
        }), 13);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      new_regex_tag_preview: function() {
        (() => {          // { Grammar
          //   rx      } = require '../../../apps/interlex'
          //.....................................................................................................
          var new_regex_tag, regex, rx, Ωilxt__68;
          ({rx, regex, new_regex_tag} = require('../../../apps/interlex'));
          debug('Ωilxt__64', rx = new_regex_tag('dy'));
          debug('Ωilxt__65', (new_regex_tag('dy'))`[a-z]`);
          debug('Ωilxt__66', (new_regex_tag('dy')).si);
          debug('Ωilxt__67', (new_regex_tag('dy')).si`[a-z]`);
          return this.throws((Ωilxt__68 = function() {
            return (new_regex_tag('dy')).ab`[a-z]`;
          }), /invalid flags/);
        })();
        // rx"x"
        // ( rx 's' )
        // debug ( rx 's' )"x#{/a/i}"
        // debug ( rx 's' )"x#{/a/i}"
        // # debug /\p{ghfghfgh}/v
        // debug ( rx 's' )"s) x#{/a/i}"
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      copy_regex: function() {
        var _copy_regex, Ωilxt__69, Ωilxt__70, Ωilxt__71, Ωilxt__72, Ωilxt__73, Ωilxt__74, Ωilxt__75, Ωilxt__76, Ωilxt__77, Ωilxt__78, Ωilxt__79;
        ({_copy_regex} = require('../../../apps/interlex'));
        this.eq((Ωilxt__69 = function() {
          return typeof _copy_regex;
        }), 'function');
        this.eq((Ωilxt__70 = function() {
          return (_copy_regex(/[a-z]/i, 'I')) instanceof RegExp;
        }), true);
        this.eq((Ωilxt__71 = function() {
          return (_copy_regex(/[a-z]/i, 'I')).source;
        }), '[a-z]');
        this.eq((Ωilxt__72 = function() {
          return (_copy_regex(/[a-z]/i, 'I')).flags;
        }), '');
        this.eq((Ωilxt__73 = function() {
          return (_copy_regex(/[a-z]/i, 'Ig')).flags;
        }), 'g');
        this.eq((Ωilxt__74 = function() {
          return (_copy_regex(/[a-z]/i, 'IgV')).flags;
        }), 'g');
        this.eq((Ωilxt__75 = function() {
          return (_copy_regex(/[a-z]/i, 'gv')).flags;
        }), 'giv');
        this.eq((Ωilxt__76 = function() {
          return (_copy_regex(/[a-z]/i, 'gu')).flags;
        }), 'giu');
        this.eq((Ωilxt__77 = function() {
          return (_copy_regex(/[a-z]/igvys, 'SYVGI')).flags;
        }), '');
        this.throws((Ωilxt__78 = function() {
          return _copy_regex(/[a-z]/i, 'guv');
        }), /Invalid flags supplied to RegExp constructor/);
        this.throws((Ωilxt__79 = function() {
          return _copy_regex(/[a-z]/u, 'v');
        }), /Invalid flags supplied to RegExp constructor/);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      rx_flags: function() {
        var new_regex_tag, rx, Ωilxt__80, Ωilxt__81, Ωilxt__83, Ωilxt__84;
        ({rx, new_regex_tag} = require('../../../apps/interlex'));
        this.eq((Ωilxt__80 = function() {
          return (rx`x`).flags;
        }), 'dvy');
        this.eq((Ωilxt__81 = function() {
          return (rx.si`x`).flags;
        }), 'disvy');
        // @eq ( Ωilxt__82 = -> ( rx.sidvy"x"  ).flags ), 'disvy'
        this.eq((Ωilxt__83 = function() {
          return (rx.y`x`).flags;
        }), 'dvy');
        this.eq((Ωilxt__84 = function() {
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
          var g, lexemes, matcher, probe, probes_and_matchers, x, Ωilxt__85, Ωilxt__86, Ωilxt__87, Ωilxt__88, Ωilxt__91;
          g = new_grammar();
          this.eq((Ωilxt__85 = function() {
            return g.cfg.counter_name;
          }), 'line_nr');
          this.eq((Ωilxt__86 = function() {
            return g.cfg.counter_step;
          }), +1);
          this.eq((Ωilxt__87 = function() {
            return g.cfg.counter_value;
          }), 1);
          this.eq((Ωilxt__88 = function() {
            return g.state.count;
          }), 1);
          probes_and_matchers = [["1st line", 1], ["2nd line", 2], ["3rd line", 3], ["4th line (and EOF)", 4]];
//...................................................................................................
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            info('Ωilxt__89', rpr(probe));
            lexemes = g.get_lexemes(probe);
            urge('Ωilxt__90', lexemes);
            this.eq((Ωilxt__91 = function() {
              return lexemes[0].line_nr;
            }), matcher);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, matcher, probe, probes_and_matchers, x, Ωilxt_101, Ωilxt__92, Ωilxt__93, Ωilxt__94, Ωilxt__95;
          g = new_grammar({
            counter_name: 'test_id',
            counter_step: -1,
            counter_value: 10
          });
          this.eq((Ωilxt__92 = function() {
            return g.cfg.counter_name;
          }), 'test_id');
          this.eq((Ωilxt__93 = function() {
            return g.cfg.counter_step;
          }), -1);
          this.eq((Ωilxt__94 = function() {
            return g.cfg.counter_value;
          }), 10);
          this.eq((Ωilxt__95 = function() {
            return g.state.count;
          }), 10);
          probes_and_matchers = [["1st line", 10], ["2nd line", 9], ["3rd line", 8], ["4th line (and EOF)", 7]];
//...................................................................................................
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            info('Ωilxt__96', rpr(probe));
            lexemes = g.get_lexemes(probe);
            // urge 'Ωilxt__97', lexemes
            urge('Ωilxt__98', g);
            urge('Ωilxt__99', g.cfg);
            urge('Ωilxt_100', g.state);
            this.eq((Ωilxt_101 = function() {
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
        var Grammar, condense_lexemes, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //-----------------------------------------------------------------------------------------------------
        condense_lexemes = function(lexemes) {};
        (() => {          //-----------------------------------------------------------------------------------------------------
          var g, gnd, lexemes, matcher, probe, probes_and_matchers, x;
          g = new Grammar({
            name: 'g'
          });
          gnd = g.new_level({
            name: 'gnd'
          });
          //...................................................................................................
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
          //...................................................................................................
          probes_and_matchers = [["1st line", 1], ["2nd line", 2], ["3rd line", 3], ["4th line (and EOF)", 4]];
//...................................................................................................
          for (x of probes_and_matchers) {
            [probe, matcher] = x;
            info('Ωilxt_102', rpr(probe));
            lexemes = g.get_lexemes(probe);
            urge('Ωilxt_103', lexemes);
          }
          // @eq ( Ωilxt_104 = -> tokens[ 0 ].line_nr ), matcher
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
        // debug 'Ωilxt_105', [ string11, string12, ]
        // console.debug 'Ωilxt_106', [ string11, string12, ]
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
        debug('Ωilxt_107', g);
        debug('Ωilxt_108', g.levels);
        debug('Ωilxt_109', g.levels.gnd);
        debug('Ωilxt_110', g.levels.gnd.tokens);
        debug('Ωilxt_111', gnd);
        for (token of gnd) {
          debug('Ωilxt_112', token);
        }
        //.........................................................................................................
        show_lexeme = function(lexeme) {
          var fqname, groups, groups_rpr, hit, jump, jump_rpr, jump_spec, name, start, stop;
          ({name, fqname, start, stop, hit, jump, jump_spec, groups} = lexeme);
          groups_rpr = groups != null ? rpr({...groups}) : '';
          jump_rpr = jump_spec != null ? jump_spec : '';
          return urge('Ωilxt_113', f`${start}:>3.0f;:${stop}:<3.0f; ${fqname}:<20c; ${rpr(hit)}:<30c; ${jump_rpr}:<15c; ${groups_rpr}`);
        };
        //.........................................................................................................
        sources = ["Alice in Cairo 1912 (approximately)", "Alice in Cairo 1912 'approximately'"];
//.........................................................................................................
        for (source of sources) {
          info('Ωilxt_114', rpr(source));
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
      (new Test({
        throw_on_error: true
      })).test({
        can_use_plain_regexes: this.interlex_tasks.basics.can_use_plain_regexes
      });
      (() => {})();      // ( new Test { throw_on_error: true, } ).test { demo: @interlex_tasks.demo.demo, }
      // demo()
      // demo_jsidentifier()
      return f = function() {
        var match;
        help('Ωilxt_115', Array.from('a🈯z'));
        help('Ωilxt_116', 'a🈯z'.split(/(.)/u));
        help('Ωilxt_117', 'a🈯z'.split(/(.)/v));
        help('Ωilxt_118', 'a🈯z'.split(/(.)/d));
        help('Ωilxt_119', match = 'a🈯z'.match(/^(?<head>[a-z]+)(?<other>[^a-z]+)(?<tail>[a-z]+)/d));
        help('Ωilxt_120', {...match.groups});
        return help('Ωilxt_121', {...match.indices.groups});
      };
    })();
  }

  // help 'Ωilxt_122', rx"."
// help 'Ωilxt_123', rx/./

}).call(this);

//# sourceMappingURL=test-basics.js.map