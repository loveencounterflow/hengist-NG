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
          return g.start instanceof Level;
        }), true);
        this.eq((Ωilxt__29 = function() {
          return g.start;
        }), gnd);
        this.eq((Ωilxt__30 = function() {
          return g.start_name;
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
      }
    },
    //=========================================================================================================
    demo: {
      //-------------------------------------------------------------------------------------------------------
      demo: function() {
        var Grammar, ILX, g, gnd, lexeme, ref, rx, show_lexeme, source, sources, string11, string12, token;
        ILX = require('../../../apps/interlex');
        ({Grammar, rx} = ILX);
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
        // debug 'Ωilxt__64', [ string11, string12, ]
        // console.debug 'Ωilxt__65', [ string11, string12, ]
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
        debug('Ωilxt__66', g);
        debug('Ωilxt__67', g.levels);
        debug('Ωilxt__68', g.levels.gnd);
        debug('Ωilxt__69', g.levels.gnd.tokens);
        debug('Ωilxt__70', gnd);
        for (token of gnd) {
          debug('Ωilxt__71', token);
        }
        //.........................................................................................................
        show_lexeme = function(lexeme) {
          var fqname, groups, groups_rpr, hit, jump, jump_rpr, jump_spec, name, start, stop;
          ({name, fqname, start, stop, hit, jump, jump_spec, groups} = lexeme);
          groups_rpr = groups != null ? rpr({...groups}) : '';
          jump_rpr = jump_spec != null ? jump_spec : '';
          return urge('Ωilxt__72', f`${start}:>3.0f;:${stop}:<3.0f; ${fqname}:<20c; ${rpr(hit)}:<30c; ${jump_rpr}:<15c; ${groups_rpr}`);
        };
        //.........................................................................................................
        sources = ["Alice in Cairo 1912 (approximately)", "Alice in Cairo 1912 'approximately'"];
//.........................................................................................................
        for (source of sources) {
          info('Ωilxt__73', rpr(source));
          ref = g.walk_tokens(source);
          for (lexeme of ref) {
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
      return (new Test({
        throw_on_error: true
      })).test(this.interlex_tasks);
    })();
  }

  // demo()
// demo_jsidentifier()

}).call(this);

//# sourceMappingURL=test-basics.js.map