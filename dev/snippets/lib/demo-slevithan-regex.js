(async function() {
  'use strict';
  var GUY, alert, debug, demo_1, demo_lexer_1, demo_lexer_2, demo_lexer_3, echo, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  //-----------------------------------------------------------------------------------------------------------
  demo_1 = function() {
    var partial, regex, time;
    ({partial, regex} = require('regex'));
    help('Ω___1', regex`helo\sworld`);
    help('Ω___2', regex`(a)(?>b)(c)d`);
    help('Ω___3', regex`(abc)+(?:def)*`);
    help('Ω___4', regex`(abc)+${'[*+]'}`);
    // help 'Ω___5', regex"""(abc)+#{/helo*/i}"""
    help('Ω___6', regex`^(?>\w+\s?)+$`);
    //.........................................................................................................
    time = function(f) {
      var dt, t0, t1;
      t0 = Date.now();
      whisper('—'.repeat(108));
      f();
      whisper('.'.repeat(108));
      t1 = Date.now();
      dt = (t1 - t0) / 1000;
      info(`time: ${dt}s`);
      return whisper('—'.repeat(108));
    };
    (() => {      //.........................................................................................................
      var probes;
      // "A target string that takes a long time or can even hang your browser!"
      // "A target string that takes a long time or can even hang your browser"
      probes = ["shorter string 123 123 123 123 123!", "shorter string 123 123 123 123 123"];
      time(() => {
        var i, len, probe, spaced_words_re;
        spaced_words_re = regex`^(?>\w+\s?)+$`;
        for (i = 0, len = probes.length; i < len; i++) {
          probe = probes[i];
          help('Ω___7', probe.match(spaced_words_re));
        }
        return null;
      });
      time(() => {
        var i, len, probe, spaced_words_re;
        spaced_words_re = regex`^(?>(?>\w)\w*\s?)+$`;
        for (i = 0, len = probes.length; i < len; i++) {
          probe = probes[i];
          help('Ω___8', probe.match(spaced_words_re));
        }
        return null;
      });
      return time(() => {
        var i, len, probe, spaced_words_re;
        spaced_words_re = regex`^(\w+\s?)+$`;
        for (i = 0, len = probes.length; i < len; i++) {
          probe = probes[i];
          help('Ω___9', probe.match(spaced_words_re));
        }
        return null;
      });
    })();
    //.........................................................................................................
    time(() => {
      var i, j, len, len1, pattern, patterns, probe, probes;
      patterns = [/^a(bc|b)c$/u, regex`^a(bc|b)c$`, regex`^a(?>bc|b)c$`, regex`^a(?>b|bc)c$`];
      // regex"""^ab++c"""
      help('Ω__10', patterns);
      probes = ['abc', 'abcc'];
      for (i = 0, len = patterns.length; i < len; i++) {
        pattern = patterns[i];
        for (j = 0, len1 = probes.length; j < len1; j++) {
          probe = probes[j];
          help('Ω__11', probe, pattern, probe.match(pattern));
        }
      }
      return null;
    });
    (() => {      //.........................................................................................................
      info('Ω__12', /^([abc]{0})x$/.test('x'));
      info('Ω__13', /^([abc]{0})x$/.test('a'));
      info('Ω__14', /^([abc]{0})x$/.test('ax'));
      info('Ω__15', /^(?<suffix>[abc]){0}x\k<suffix>$/.test('x'));
      info('Ω__16', /^(?<suffix>[abc]){0}x\k<suffix>$/.test('xa'));
      info('Ω__17', /^(?<suffix>[abc]){0}x\k<suffix>$/.test('bxb'));
      info('Ω__18', (regex`^
(?<suffix> [abc] ){0}
x \g<suffix>
$`).test('xa'));
      info('Ω__19', (regex`^
(?<suffix> [abc] ){0}
x \g<suffix> \g<suffix> \g<suffix>
$`).test('xacb'));
      info('Ω__20', regex`^
(?<suffix> (?<thesuffix> [abc] ) ){0}
x \g<suffix> \g<suffix> \g<suffix>
$`);
      info('Ω__21', 'xbca'.match(regex`^
(?<suffix> (?<thesuffix> [abc] ) ){0}
x \g<suffix> \g<suffix> \g<suffix>
$`));
      return null;
    })();
    (() => {      //.........................................................................................................
      var ip_address_re, match;
      ip_address_re = regex`\b
(?<b1> \g<byte> ) \.
(?<b2> \g<byte> ) \.
(?<b3> \g<byte> ) \.
(?<b4> \g<byte> )
\b

# The {0} quantifier allows defining a subpattern without matching it
(?<byte> 2[0-4]\d | 25[0-5] | 1\d\d | [1-9]?\d ){0}`;
      match = '123.45.21.4'.match(ip_address_re);
      urge('Ω__22', {...match.groups});
      return null;
    })();
    //.........................................................................................................
    urge('Ω__23', regex`(?<outer>a${regex`(?<inner>bc)`}z)`);
    urge('Ω__24', regex`(?<outer>a${partial`(?<inner>bc)`}z)`);
    urge('Ω__25', regex`\\`);
    urge('Ω__26', regex`\\\\`);
    urge('Ω__27', regex`(?<${'outer'}>a${partial`(?<${'inner'}>bc)`}z)`);
    urge('Ω__28', regex`^(?:(?!\b(the|an?)\b).)+`);
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_lexer_1 = function() {
    var a, b, match, partial, regex;
    ({partial, regex} = require('regex'));
    //.........................................................................................................
    urge('Ω__29', a = (regex('y'))`(?<name>[a-z]+)`);
    urge('Ω__30', b = (regex('y'))`${a}\s+in\s+(?<place>[a-z]+)`);
    if ((match = "alice in cairo".match(b)) != null) {
      info('Ω__31', {...match.groups});
    }
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_lexer_2 = function() {
    var f, i, len, partial, patterns, regex, rx, text, texts, tokenize;
    ({partial, regex} = require('regex'));
    ({f} = require('../../../apps/effstring'));
    rx = regex('y');
    patterns = {
      name: {
        re: rx`(?<initial>[A-Z])[a-z]*`
      },
      number: {
        re: rx`[0-9]+`
      },
      sq_string_start: {
        re: rx`(?!<\\)'`
      },
      paren_start: {
        re: rx`\(`
      },
      paren_stop: {
        re: rx`\)`
      },
      other: {
        re: rx`[A-Za-z0-9]+`
      },
      ws: {
        re: rx`\s+`
      }
    };
    urge('Ω__32', patterns);
    //.........................................................................................................
    tokenize = function(text) {
      var hit, match, name, re, ref, start, stop;
      stop = 0;
      info('Ω__33', rpr(text));
      while (true) {
        for (name in patterns) {
          ({re} = patterns[name]);
          // debug 'Ω__34', f"#{name}:>20c;: #{re}"
          hit = null;
          re.lastIndex = stop;
          if ((match = text.match(re)) != null) {
            break;
          }
        }
        if (match == null) {
          break;
        }
        hit = match[0];
        start = stop;
        stop += hit.length;
        help('Ω__35', f`${start}:>3.0f;:${stop}:<3.0f; ${name}:>20c;: ${rpr(hit)}:<30c; ${rpr({...((ref = match.groups) != null ? ref : {})})}`);
      }
      return null;
    };
    //.........................................................................................................
    texts = ["Alice in Cairo 1912 (approximately)", "Alice in Cairo 1912 'approximately'"];
//.........................................................................................................
    for (i = 0, len = texts.length; i < len; i++) {
      text = texts[i];
      tokenize(text);
    }
    //.........................................................................................................
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_lexer_3 = function() {
    var Grammar, Level, Lexeme, Token, f, g, gnd, hide, i, jump_literal_re, len, partial, regex, rx, show_jump, string11, string12, text, texts, token;
    ({partial, regex} = require('regex'));
    ({f} = require('../../../apps/effstring'));
    hide = function(owner, name, value) {
      return Object.defineProperty(owner, name, {
        enumerable: false,
        value,
        writable: true
      });
    };
    rx = regex('y');
    //===========================================================================================================
    jump_literal_re = regex`^(
\[ (?<exclusive_jump> [^ \^ . \s \[ \] ]+ )     |
   (?<inclusive_jump> [^ \^ . \s \[ \] ]+ ) \[  |
\] (?<exclusive_back> [     .          ]  )     |
   (?<inclusive_back> [     .          ]  ) \]
)$ `;
    //===========================================================================================================
    Token = class Token {
      //---------------------------------------------------------------------------------------------------------
      constructor(cfg) {
        var ref, ref1;
        debug('Ω__36', "new Token", cfg.name, cfg.level, cfg.level.grammar);
        this.name = cfg.name;
        hide(this, 'level', cfg.level);
        hide(this, 'grammar', cfg.level.grammar);
        hide(this, 'matcher', cfg.matcher);
        hide(this, 'jump', this.parse_jump((ref = cfg.jump) != null ? ref : null));
        hide(this, 'jump_literal', (ref1 = cfg.jump) != null ? ref1 : null);
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      match_at(start, text) {
        var match;
        this.matcher.lastIndex = start;
        if ((match = text.match(this.matcher)) == null) {
          return null;
        }
        return new Lexeme(this, match);
      }

      //---------------------------------------------------------------------------------------------------------
      parse_jump(jump_literal) {
        var action, affinity, key, level, level_name, match, ref;
        if (jump_literal == null) {
          return null;
        }
        /* TAINT use cleartype */
        if ((match = jump_literal.match(jump_literal_re)) == null) {
          throw new Error(`Ω__37 expected a well-formed jump literal, got ${rpr(jump_literal)}`);
        }
        ref = match.groups;
        for (key in ref) {
          level_name = ref[key];
          if (level_name == null) {
            continue;
          }
          [affinity, action] = key.split('_');
          break;
        }
        if (level_name === '.') {
          level = level_name;
        } else if ((level = this.grammar.levels[level_name]) == null) {
          throw new Error(`Ω__38 expected name of a known level, got ${rpr(level_name)}`);
        }
        return {affinity, action, level};
      }

    };
    //===========================================================================================================
    Lexeme = class Lexeme {
      //---------------------------------------------------------------------------------------------------------
      constructor(token, match) {
        var ref;
        // debug 'Ω__39', token
        // debug 'Ω__40', token.jump, token.grammar.levels[ token.jump.level ] if token.jump?
        this.name = token.name;
        this.fqname = `${token.level.name}.${token.name}`;
        this.level = token.level;
        this.hit = match[0];
        this.start = match.index;
        this.stop = this.start + this.hit.length;
        this.groups = (ref = match.groups) != null ? ref : null;
        this.jump = token.jump;
        this.jump_literal = token.jump_literal;
        return void 0;
      }

    };
    //===========================================================================================================
    Level = class Level {
      //---------------------------------------------------------------------------------------------------------
      constructor(cfg) {
        var ref, ref1;
        if (cfg == null) {
          cfg = {};
        }
        this.name = (ref = cfg.name) != null ? ref : 'gnd';
        hide(this, 'grammar', cfg.grammar);
        hide(this, 'tokens', [...((ref1 = cfg.tokens) != null ? ref1 : [])]);
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      * [Symbol.iterator]() {
        var i, len, ref, results, t;
        ref = this.tokens;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          t = ref[i];
          results.push((yield t));
        }
        return results;
      }

      //---------------------------------------------------------------------------------------------------------
      new_token(cfg) {
        var token;
        if ((cfg.level != null) && cfg.level !== this) {
          throw new Error("Ω__41 inconsistent level");
        }
        this.tokens.push(token = new Token({
          ...cfg,
          level: this
        }));
        return token;
      }

    };
    //===========================================================================================================
    Grammar = class Grammar {
      //---------------------------------------------------------------------------------------------------------
      constructor(cfg) {
        var ref, ref1;
        if (cfg == null) {
          cfg = {};
        }
        this.name = (ref = cfg.name) != null ? ref : 'g';
        this.start_name = null;
        hide(this, 'start', null);
        hide(this, 'levels', {...((ref1 = cfg.levels) != null ? ref1 : {})});
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      new_level(cfg) {
        var level;
        if (this.levels[cfg.name] != null) {
          throw new Error(`Ω__42 level ${rpr(level.name)} elready exists`);
        }
        level = new Level({
          ...cfg,
          grammar: this
        });
        this.levels[level.name] = level;
        if (this.start == null) {
          this.start = level;
        }
        if (this.start_name == null) {
          this.start_name = level.name;
        }
        return level;
      }

      //---------------------------------------------------------------------------------------------------------
      tokenize(source) {
        var fqname, groups, groups_rpr, hit, jump, jump_literal, jump_rpr, level, lexeme, name, start, stop, token;
        start = 0;
        info('Ω__43', rpr(source));
        level = this.start;
        while (true) {
          lexeme = null;
          for (token of gnd) {
            if ((lexeme = token.match_at(start, source)) != null) {
              break;
            }
          }
          if (lexeme == null) {
            break;
          }
          ({name, fqname, stop, hit, jump, jump_literal, groups} = lexeme);
          groups_rpr = groups != null ? rpr({...groups}) : '';
          jump_rpr = jump_literal != null ? jump_literal : '';
          help('Ω__44', f`${start}:>3.0f;:${stop}:<3.0f; ${fqname}:<20c; ${rpr(hit)}:<30c; ${jump_rpr}:<15c; ${groups_rpr}`);
          start = stop;
        }
        return null;
      }

    };
    //===========================================================================================================
    /*
    `Token` defines `matcher`, can jump into a level or back
    `Level` has one or more `Token`s
    `Grammar` has one or more `Level`s
    `Lexeme` produced by a `Token` instance when matcher matches source

    */
    //===========================================================================================================
    show_jump = function(jump_literal) {
      var key, match, ref, value;
      if ((match = jump_literal.match(jump_literal_re)) != null) {
        ref = match.groups;
        for (key in ref) {
          value = ref[key];
          if (value == null) {
            continue;
          }
          urge('Ω__45', rpr(jump_literal), GUY.trm.grey(key), rpr(value));
        }
      } else {
        urge('Ω__46', rpr(jump_literal), null);
      }
      return null;
    };
    show_jump('abc');
    show_jump('[abc[');
    show_jump('[abc');
    show_jump('abc[');
    show_jump('[string11');
    show_jump('string11[');
    show_jump('abc]');
    show_jump(']abc');
    show_jump('.]');
    show_jump('].');
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
      jump: 'string11['
    });
    gnd.new_token({
      name: 'string12_start',
      matcher: rx`(?!<\\)"`,
      jump: 'string12['
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
      matcher: rx`'`,
      jump: '].'
    });
    string11.new_token({
      name: 'text',
      matcher: rx`[^']*`
    });
    //.........................................................................................................
    debug('Ω__47', g);
    debug('Ω__48', g.levels);
    debug('Ω__49', g.levels.gnd);
    debug('Ω__50', g.levels.gnd.tokens);
    debug('Ω__51', gnd);
    for (token of gnd) {
      debug('Ω__52', token);
    }
    //.........................................................................................................
    texts = ["Alice in Cairo 1912 (approximately)", "Alice in Cairo 1912 'approximately'"];
//.........................................................................................................
    for (i = 0, len = texts.length; i < len; i++) {
      text = texts[i];
      g.tokenize(text);
    }
    //.........................................................................................................
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // demo_1()
      return demo_lexer_3();
    })();
  }

}).call(this);

//# sourceMappingURL=demo-slevithan-regex.js.map