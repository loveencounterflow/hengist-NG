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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tc2xldml0aGFuLXJlZ2V4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsWUFBQSxFQUFBLFlBQUEsRUFBQSxZQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTs7RUFFQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHVCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFaQTs7O0VBbUJBLE1BQUEsR0FBUyxRQUFBLENBQUEsQ0FBQTtBQUNULFFBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQTtJQUFFLENBQUEsQ0FBRSxPQUFGLEVBQVcsS0FBWCxDQUFBLEdBQXNCLE9BQUEsQ0FBUSxPQUFSLENBQXRCO0lBQ0EsSUFBQSxDQUFLLE9BQUwsRUFBYyxLQUFLLENBQUEsV0FBQSxDQUFuQjtJQUNBLElBQUEsQ0FBSyxPQUFMLEVBQWMsS0FBSyxDQUFBLFlBQUEsQ0FBbkI7SUFDQSxJQUFBLENBQUssT0FBTCxFQUFjLEtBQUssQ0FBQSxjQUFBLENBQW5CO0lBQ0EsSUFBQSxDQUFLLE9BQUwsRUFBYyxLQUFLLENBQUEsTUFBQSxDQUFB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QSxJQUF4Qzs7QUE3WEEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaW50ZXJ0eXBlL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZGVtb18xID0gLT5cbiAgeyBwYXJ0aWFsLCByZWdleCwgfSA9IHJlcXVpcmUgJ3JlZ2V4J1xuICBoZWxwICfOqV9fXzEnLCByZWdleCdoZWxvXFxzd29ybGQnXG4gIGhlbHAgJ86pX19fMicsIHJlZ2V4JyhhKSg/PmIpKGMpZCdcbiAgaGVscCAnzqlfX18zJywgcmVnZXgnKGFiYykrKD86ZGVmKSonXG4gIGhlbHAgJ86pX19fNCcsIHJlZ2V4XCJcIlwiKGFiYykrI3snWyorXSd9XCJcIlwiXG4gICMgaGVscCAnzqlfX181JywgcmVnZXhcIlwiXCIoYWJjKSsjey9oZWxvKi9pfVwiXCJcIlxuICBoZWxwICfOqV9fXzYnLCByZWdleFwiXCJcIl4oPz5cXHcrXFxzPykrJFwiXCJcIlxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHRpbWUgPSAoIGYgKSAtPlxuICAgIHQwID0gRGF0ZS5ub3coKVxuICAgIHdoaXNwZXIgJ+KAlCcucmVwZWF0IDEwOFxuICAgIGYoKVxuICAgIHdoaXNwZXIgJy4nLnJlcGVhdCAxMDhcbiAgICB0MSA9IERhdGUubm93KClcbiAgICBkdCA9ICggdDEgLSB0MCApIC8gMTAwMFxuICAgIGluZm8gXCJ0aW1lOiAje2R0fXNcIlxuICAgIHdoaXNwZXIgJ+KAlCcucmVwZWF0IDEwOFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGRvID0+XG4gICAgcHJvYmVzID0gW1xuICAgICAgIyBcIkEgdGFyZ2V0IHN0cmluZyB0aGF0IHRha2VzIGEgbG9uZyB0aW1lIG9yIGNhbiBldmVuIGhhbmcgeW91ciBicm93c2VyIVwiXG4gICAgICAjIFwiQSB0YXJnZXQgc3RyaW5nIHRoYXQgdGFrZXMgYSBsb25nIHRpbWUgb3IgY2FuIGV2ZW4gaGFuZyB5b3VyIGJyb3dzZXJcIlxuICAgICAgXCJzaG9ydGVyIHN0cmluZyAxMjMgMTIzIDEyMyAxMjMgMTIzIVwiXG4gICAgICBcInNob3J0ZXIgc3RyaW5nIDEyMyAxMjMgMTIzIDEyMyAxMjNcIlxuICAgICAgXVxuICAgIHRpbWUgPT5cbiAgICAgIHNwYWNlZF93b3Jkc19yZSA9IHJlZ2V4XCJcIlwiXig/PlxcdytcXHM/KSskXCJcIlwiXG4gICAgICBmb3IgcHJvYmUgaW4gcHJvYmVzXG4gICAgICAgIGhlbHAgJ86pX19fNycsIHByb2JlLm1hdGNoIHNwYWNlZF93b3Jkc19yZVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB0aW1lID0+XG4gICAgICBzcGFjZWRfd29yZHNfcmUgPSByZWdleFwiXCJcIl4oPz4oPz5cXHcpXFx3Klxccz8pKyRcIlwiXCJcbiAgICAgIGZvciBwcm9iZSBpbiBwcm9iZXNcbiAgICAgICAgaGVscCAnzqlfX184JywgcHJvYmUubWF0Y2ggc3BhY2VkX3dvcmRzX3JlXG4gICAgICByZXR1cm4gbnVsbFxuICAgIHRpbWUgPT5cbiAgICAgIHNwYWNlZF93b3Jkc19yZSA9IHJlZ2V4XCJcIlwiXihcXHcrXFxzPykrJFwiXCJcIlxuICAgICAgZm9yIHByb2JlIGluIHByb2Jlc1xuICAgICAgICBoZWxwICfOqV9fXzknLCBwcm9iZS5tYXRjaCBzcGFjZWRfd29yZHNfcmVcbiAgICAgIHJldHVybiBudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgdGltZSA9PlxuICAgIHBhdHRlcm5zID0gW1xuICAgICAgL15hKGJjfGIpYyQvdVxuICAgICAgcmVnZXhcIlwiXCJeYShiY3xiKWMkXCJcIlwiXG4gICAgICByZWdleFwiXCJcIl5hKD8+YmN8YiljJFwiXCJcIlxuICAgICAgcmVnZXhcIlwiXCJeYSg/PmJ8YmMpYyRcIlwiXCJcbiAgICAgICMgcmVnZXhcIlwiXCJeYWIrK2NcIlwiXCJcbiAgICAgIF1cbiAgICBoZWxwICfOqV9fMTAnLCBwYXR0ZXJuc1xuICAgIHByb2JlcyA9IFsgJ2FiYycsICdhYmNjJywgXVxuICAgIGZvciBwYXR0ZXJuIGluIHBhdHRlcm5zXG4gICAgICBmb3IgcHJvYmUgaW4gcHJvYmVzXG4gICAgICAgIGhlbHAgJ86pX18xMScsIHByb2JlLCBwYXR0ZXJuLCBwcm9iZS5tYXRjaCBwYXR0ZXJuXG4gICAgcmV0dXJuIG51bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBkbyA9PlxuICAgIGluZm8gJ86pX18xMicsIC9eKFthYmNdezB9KXgkLy50ZXN0ICd4J1xuICAgIGluZm8gJ86pX18xMycsIC9eKFthYmNdezB9KXgkLy50ZXN0ICdhJ1xuICAgIGluZm8gJ86pX18xNCcsIC9eKFthYmNdezB9KXgkLy50ZXN0ICdheCdcbiAgICBpbmZvICfOqV9fMTUnLCAvXig/PHN1ZmZpeD5bYWJjXSl7MH14XFxrPHN1ZmZpeD4kLy50ZXN0ICd4J1xuICAgIGluZm8gJ86pX18xNicsIC9eKD88c3VmZml4PlthYmNdKXswfXhcXGs8c3VmZml4PiQvLnRlc3QgJ3hhJ1xuICAgIGluZm8gJ86pX18xNycsIC9eKD88c3VmZml4PlthYmNdKXswfXhcXGs8c3VmZml4PiQvLnRlc3QgJ2J4YidcbiAgICBpbmZvICfOqV9fMTgnLCAoIHJlZ2V4XCJcIlwiXlxuICAgICAgKD88c3VmZml4PiBbYWJjXSApezB9XG4gICAgICB4IFxcZzxzdWZmaXg+XG4gICAgICAkXCJcIlwiKS50ZXN0ICd4YSdcbiAgICBpbmZvICfOqV9fMTknLCAoIHJlZ2V4XCJcIlwiXlxuICAgICAgKD88c3VmZml4PiBbYWJjXSApezB9XG4gICAgICB4IFxcZzxzdWZmaXg+IFxcZzxzdWZmaXg+IFxcZzxzdWZmaXg+XG4gICAgICAkXCJcIlwiKS50ZXN0ICd4YWNiJ1xuICAgIGluZm8gJ86pX18yMCcsICggcmVnZXhcIlwiXCJeXG4gICAgICAoPzxzdWZmaXg+ICg/PHRoZXN1ZmZpeD4gW2FiY10gKSApezB9XG4gICAgICB4IFxcZzxzdWZmaXg+IFxcZzxzdWZmaXg+IFxcZzxzdWZmaXg+XG4gICAgICAkXCJcIlwiIClcbiAgICBpbmZvICfOqV9fMjEnLCAneGJjYScubWF0Y2ggKCByZWdleFwiXCJcIl5cbiAgICAgICg/PHN1ZmZpeD4gKD88dGhlc3VmZml4PiBbYWJjXSApICl7MH1cbiAgICAgIHggXFxnPHN1ZmZpeD4gXFxnPHN1ZmZpeD4gXFxnPHN1ZmZpeD5cbiAgICAgICRcIlwiXCIgKVxuICAgIHJldHVybiBudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZG8gPT5cbiAgICBpcF9hZGRyZXNzX3JlID0gcmVnZXhcIlwiXCJcbiAgICAgIFxcYlxuICAgICAgKD88YjE+IFxcZzxieXRlPiApIFxcLlxuICAgICAgKD88YjI+IFxcZzxieXRlPiApIFxcLlxuICAgICAgKD88YjM+IFxcZzxieXRlPiApIFxcLlxuICAgICAgKD88YjQ+IFxcZzxieXRlPiApXG4gICAgICBcXGJcblxuICAgICAgIyBUaGUgezB9IHF1YW50aWZpZXIgYWxsb3dzIGRlZmluaW5nIGEgc3VicGF0dGVybiB3aXRob3V0IG1hdGNoaW5nIGl0XG4gICAgICAoPzxieXRlPiAyWzAtNF1cXGQgfCAyNVswLTVdIHwgMVxcZFxcZCB8IFsxLTldP1xcZCApezB9XG4gICAgICBcIlwiXCJcbiAgICBtYXRjaCA9ICcxMjMuNDUuMjEuNCcubWF0Y2ggaXBfYWRkcmVzc19yZVxuICAgIHVyZ2UgJ86pX18yMicsIHsgbWF0Y2guZ3JvdXBzLi4uLCB9XG4gICAgcmV0dXJuIG51bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICB1cmdlICfOqV9fMjMnLCByZWdleFwiKD88b3V0ZXI+YSN7cmVnZXhcIig/PGlubmVyPmJjKVwifXopXCJcbiAgdXJnZSAnzqlfXzI0JywgcmVnZXhcIig/PG91dGVyPmEje3BhcnRpYWxcIig/PGlubmVyPmJjKVwifXopXCJcbiAgdXJnZSAnzqlfXzI1JywgcmVnZXhcIlxcXFxcIlxuICB1cmdlICfOqV9fMjYnLCByZWdleFwiXFxcXFxcXFxcIlxuICB1cmdlICfOqV9fMjcnLCByZWdleFwiKD88I3snb3V0ZXInfT5hI3twYXJ0aWFsXCIoPzwjeydpbm5lcid9PmJjKVwifXopXCJcbiAgdXJnZSAnzqlfXzI4JywgcmVnZXhcIl4oPzooPyFcXGIodGhlfGFuPylcXGIpLikrXCJcbiAgcmV0dXJuIG51bGxcblxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmRlbW9fbGV4ZXJfMSA9IC0+XG4gIHsgcGFydGlhbCwgcmVnZXgsIH0gPSByZXF1aXJlICdyZWdleCdcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICB1cmdlICfOqV9fMjknLCBhID0gKCByZWdleCAneScgKVwiKD88bmFtZT5bYS16XSspXCJcbiAgdXJnZSAnzqlfXzMwJywgYiA9ICggcmVnZXggJ3knIClcIiN7YX1cXHMraW5cXHMrKD88cGxhY2U+W2Etel0rKVwiXG4gIGlmICggbWF0Y2ggPSBcImFsaWNlIGluIGNhaXJvXCIubWF0Y2ggYiApP1xuICAgIGluZm8gJ86pX18zMScsIHsgbWF0Y2guZ3JvdXBzLi4uLCB9XG4gIHJldHVybiBudWxsXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZGVtb19sZXhlcl8yID0gLT5cbiAgeyBwYXJ0aWFsLCByZWdleCwgfSA9IHJlcXVpcmUgJ3JlZ2V4J1xuICB7IGYgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuICByeCAgICA9IHJlZ2V4ICd5J1xuICBwYXR0ZXJucyA9IHtcbiAgICBuYW1lOiAgICAgICAgICAgICB7IHJlOiByeFwiKD88aW5pdGlhbD5bQS1aXSlbYS16XSpcIiwgfVxuICAgIG51bWJlcjogICAgICAgICAgIHsgcmU6IHJ4XCJbMC05XStcIiwgICAgICAgICAgICAgICAgICB9XG4gICAgc3Ffc3RyaW5nX3N0YXJ0OiAgeyByZTogcnhcIig/ITxcXFxcKSdcIiwgICAgICAgICAgICAgICAgfVxuICAgIHBhcmVuX3N0YXJ0OiAgICAgIHsgcmU6IHJ4XCJcXChcIiwgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIHBhcmVuX3N0b3A6ICAgICAgIHsgcmU6IHJ4XCJcXClcIiwgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIG90aGVyOiAgICAgICAgICAgIHsgcmU6IHJ4XCJbQS1aYS16MC05XStcIiwgICAgICAgICAgICB9XG4gICAgd3M6ICAgICAgICAgICAgICAgeyByZTogcnhcIlxccytcIiwgICAgICAgICAgICAgICAgICAgICB9XG4gICAgfVxuICB1cmdlICfOqV9fMzInLCBwYXR0ZXJuc1xuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHRva2VuaXplID0gKCB0ZXh0ICkgLT5cbiAgICBzdG9wICAgICAgPSAwXG4gICAgaW5mbyAnzqlfXzMzJywgcnByIHRleHRcbiAgICBsb29wXG4gICAgICBmb3IgbmFtZSwgeyByZSwgfSBvZiBwYXR0ZXJuc1xuICAgICAgICAjIGRlYnVnICfOqV9fMzQnLCBmXCIje25hbWV9Oj4yMGM7OiAje3JlfVwiXG4gICAgICAgIGhpdCAgICAgICAgICAgPSBudWxsXG4gICAgICAgIHJlLmxhc3RJbmRleCAgPSBzdG9wXG4gICAgICAgIGlmICggbWF0Y2ggPSB0ZXh0Lm1hdGNoIHJlICk/XG4gICAgICAgICAgYnJlYWtcbiAgICAgIGJyZWFrIHVubGVzcyBtYXRjaD9cbiAgICAgIGhpdCAgICAgICA9IG1hdGNoWyAwIF1cbiAgICAgIHN0YXJ0ICAgICA9IHN0b3BcbiAgICAgIHN0b3AgICAgICs9IGhpdC5sZW5ndGhcbiAgICAgIGhlbHAgJ86pX18zNScsIGZcIiN7c3RhcnR9Oj4zLjBmOzoje3N0b3B9OjwzLjBmOyAje25hbWV9Oj4yMGM7OiAje3JwciBoaXR9OjwzMGM7ICN7cnByIHsgKCBtYXRjaC5ncm91cHMgPyB7fSApLi4uLCB9fVwiXG4gICAgcmV0dXJuIG51bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICB0ZXh0cyA9IFtcbiAgICBcIkFsaWNlIGluIENhaXJvIDE5MTIgKGFwcHJveGltYXRlbHkpXCJcbiAgICBcIkFsaWNlIGluIENhaXJvIDE5MTIgJ2FwcHJveGltYXRlbHknXCJcbiAgICBdXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZm9yIHRleHQgaW4gdGV4dHNcbiAgICB0b2tlbml6ZSB0ZXh0XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcmV0dXJuIG51bGxcblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5kZW1vX2xleGVyXzMgPSAtPlxuICB7IHBhcnRpYWwsIHJlZ2V4LCB9ID0gcmVxdWlyZSAncmVnZXgnXG4gIHsgZiB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4gIGhpZGUgID0gKCBvd25lciwgbmFtZSwgdmFsdWUgKSAtPiBPYmplY3QuZGVmaW5lUHJvcGVydHkgb3duZXIsIG5hbWUsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlLCB3cml0YWJsZTogdHJ1ZSwgfVxuICByeCAgICA9IHJlZ2V4ICd5J1xuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAganVtcF9saXRlcmFsX3JlID0gcmVnZXhcIlwiXCJcbiAgICBeKFxuICAgIFxcWyAoPzxleGNsdXNpdmVfanVtcD4gW14gXFxeIC4gXFxzIFxcWyBcXF0gXSsgKSAgICAgfFxuICAgICAgICg/PGluY2x1c2l2ZV9qdW1wPiBbXiBcXF4gLiBcXHMgXFxbIFxcXSBdKyApIFxcWyAgfFxuICAgIFxcXSAoPzxleGNsdXNpdmVfYmFjaz4gWyAgICAgLiAgICAgICAgICBdICApICAgICB8XG4gICAgICAgKD88aW5jbHVzaXZlX2JhY2s+IFsgICAgIC4gICAgICAgICAgXSAgKSBcXF1cbiAgICApJCBcIlwiXCJcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY2xhc3MgVG9rZW5cblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdHJ1Y3RvcjogKCBjZmcgKSAtPlxuICAgICAgZGVidWcgJ86pX18zNicsIFwibmV3IFRva2VuXCIsIGNmZy5uYW1lLCBjZmcubGV2ZWwsIGNmZy5sZXZlbC5ncmFtbWFyXG4gICAgICBAbmFtZSA9IGNmZy5uYW1lXG4gICAgICBoaWRlIEAsICdsZXZlbCcsICAgICAgICBjZmcubGV2ZWxcbiAgICAgIGhpZGUgQCwgJ2dyYW1tYXInLCAgICAgIGNmZy5sZXZlbC5ncmFtbWFyXG4gICAgICBoaWRlIEAsICdtYXRjaGVyJywgICAgICBjZmcubWF0Y2hlclxuICAgICAgaGlkZSBALCAnanVtcCcsICAgICAgICAgQHBhcnNlX2p1bXAgY2ZnLmp1bXAgID8gbnVsbFxuICAgICAgaGlkZSBALCAnanVtcF9saXRlcmFsJywgY2ZnLmp1bXAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG1hdGNoX2F0OiAoIHN0YXJ0LCB0ZXh0ICkgLT5cbiAgICAgIEBtYXRjaGVyLmxhc3RJbmRleCA9IHN0YXJ0XG4gICAgICByZXR1cm4gbnVsbCB1bmxlc3MgKCBtYXRjaCA9IHRleHQubWF0Y2ggQG1hdGNoZXIgKT9cbiAgICAgIHJldHVybiBuZXcgTGV4ZW1lIEAsIG1hdGNoXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcGFyc2VfanVtcDogKCBqdW1wX2xpdGVyYWwgKSAtPlxuICAgICAgcmV0dXJuIG51bGwgdW5sZXNzIGp1bXBfbGl0ZXJhbD9cbiAgICAgICMjIyBUQUlOVCB1c2UgY2xlYXJ0eXBlICMjI1xuICAgICAgdW5sZXNzICggbWF0Y2ggPSBqdW1wX2xpdGVyYWwubWF0Y2gganVtcF9saXRlcmFsX3JlICk/XG4gICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pX18zNyBleHBlY3RlZCBhIHdlbGwtZm9ybWVkIGp1bXAgbGl0ZXJhbCwgZ290ICN7cnByIGp1bXBfbGl0ZXJhbH1cIlxuICAgICAgZm9yIGtleSwgbGV2ZWxfbmFtZSBvZiBtYXRjaC5ncm91cHNcbiAgICAgICAgY29udGludWUgdW5sZXNzIGxldmVsX25hbWU/XG4gICAgICAgIFsgYWZmaW5pdHksIGFjdGlvbiwgXSA9IGtleS5zcGxpdCAnXydcbiAgICAgICAgYnJlYWtcbiAgICAgIGlmIGxldmVsX25hbWUgaXMgJy4nXG4gICAgICAgIGxldmVsID0gbGV2ZWxfbmFtZVxuICAgICAgZWxzZSB1bmxlc3MgKCBsZXZlbCA9IEBncmFtbWFyLmxldmVsc1sgbGV2ZWxfbmFtZSBdICk/XG4gICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pX18zOCBleHBlY3RlZCBuYW1lIG9mIGEga25vd24gbGV2ZWwsIGdvdCAje3JwciBsZXZlbF9uYW1lfVwiXG4gICAgICByZXR1cm4geyBhZmZpbml0eSwgYWN0aW9uLCBsZXZlbCwgfVxuXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNsYXNzIExleGVtZVxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0cnVjdG9yOiAoIHRva2VuLCBtYXRjaCApIC0+XG4gICAgICAjIGRlYnVnICfOqV9fMzknLCB0b2tlblxuICAgICAgIyBkZWJ1ZyAnzqlfXzQwJywgdG9rZW4uanVtcCwgdG9rZW4uZ3JhbW1hci5sZXZlbHNbIHRva2VuLmp1bXAubGV2ZWwgXSBpZiB0b2tlbi5qdW1wP1xuICAgICAgQG5hbWUgICAgICAgICA9IHRva2VuLm5hbWVcbiAgICAgIEBmcW5hbWUgICAgICAgPSBcIiN7dG9rZW4ubGV2ZWwubmFtZX0uI3t0b2tlbi5uYW1lfVwiXG4gICAgICBAbGV2ZWwgICAgICAgID0gdG9rZW4ubGV2ZWxcbiAgICAgIEBoaXQgICAgICAgICAgPSBtYXRjaFsgMCBdXG4gICAgICBAc3RhcnQgICAgICAgID0gbWF0Y2guaW5kZXhcbiAgICAgIEBzdG9wICAgICAgICAgPSBAc3RhcnQgKyBAaGl0Lmxlbmd0aFxuICAgICAgQGdyb3VwcyAgICAgICA9IG1hdGNoLmdyb3VwcyA/IG51bGxcbiAgICAgIEBqdW1wICAgICAgICAgPSB0b2tlbi5qdW1wXG4gICAgICBAanVtcF9saXRlcmFsID0gdG9rZW4uanVtcF9saXRlcmFsXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG5cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY2xhc3MgTGV2ZWxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdHJ1Y3RvcjogKCBjZmcgKSAtPlxuICAgICAgY2ZnICAgID89IHt9XG4gICAgICBAbmFtZSAgID0gY2ZnLm5hbWUgPyAnZ25kJ1xuICAgICAgaGlkZSBALCAnZ3JhbW1hcicsICBjZmcuZ3JhbW1hclxuICAgICAgaGlkZSBALCAndG9rZW5zJywgICBbICggY2ZnLnRva2VucyA/IFtdICkuLi4sIF1cbiAgICAgIHJldHVybiB1bmRlZmluZWRcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBbU3ltYm9sLml0ZXJhdG9yXTogLT4geWllbGQgdCBmb3IgdCBpbiBAdG9rZW5zXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbmV3X3Rva2VuOiAoIGNmZyApIC0+XG4gICAgICBpZiBjZmcubGV2ZWw/IGFuZCBjZmcubGV2ZWwgaXNudCBAXG4gICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pX180MSBpbmNvbnNpc3RlbnQgbGV2ZWxcIlxuICAgICAgQHRva2Vucy5wdXNoIHRva2VuID0gbmV3IFRva2VuIHsgY2ZnLi4uLCBsZXZlbDogQCwgfVxuICAgICAgcmV0dXJuIHRva2VuXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNsYXNzIEdyYW1tYXJcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdHJ1Y3RvcjogKCBjZmcgKSAtPlxuICAgICAgY2ZnICAgICAgICAgICAgICA/PSB7fVxuICAgICAgQG5hbWUgICAgICAgICAgICAgPSBjZmcubmFtZSA/ICdnJ1xuICAgICAgQHN0YXJ0X25hbWUgICAgICAgPSBudWxsXG4gICAgICBoaWRlIEAsICdzdGFydCcsICAgIG51bGxcbiAgICAgIGhpZGUgQCwgJ2xldmVscycsICAgeyAoIGNmZy5sZXZlbHMgPyB7fSApLi4uLCB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbmV3X2xldmVsOiAoIGNmZyApIC0+XG4gICAgICBpZiBAbGV2ZWxzWyBjZmcubmFtZSBdP1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fNDIgbGV2ZWwgI3tycHIgbGV2ZWwubmFtZX0gZWxyZWFkeSBleGlzdHNcIlxuICAgICAgbGV2ZWwgICAgICAgICAgICAgICAgICAgPSBuZXcgTGV2ZWwgeyBjZmcuLi4sIGdyYW1tYXI6IEAsIH1cbiAgICAgIEBsZXZlbHNbIGxldmVsLm5hbWUgXSAgID0gbGV2ZWxcbiAgICAgIEBzdGFydCAgICAgICAgICAgICAgICAgPz0gbGV2ZWxcbiAgICAgIEBzdGFydF9uYW1lICAgICAgICAgICAgPz0gbGV2ZWwubmFtZVxuICAgICAgcmV0dXJuIGxldmVsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdG9rZW5pemU6ICggc291cmNlICkgLT5cbiAgICAgIHN0YXJ0ICAgPSAwXG4gICAgICBpbmZvICfOqV9fNDMnLCBycHIgc291cmNlXG4gICAgICBsZXZlbCAgID0gQHN0YXJ0XG4gICAgICBsb29wXG4gICAgICAgIGxleGVtZSAgPSBudWxsXG4gICAgICAgIGZvciB0b2tlbiBmcm9tIGduZFxuICAgICAgICAgIGJyZWFrIGlmICggbGV4ZW1lID0gdG9rZW4ubWF0Y2hfYXQgc3RhcnQsIHNvdXJjZSApP1xuICAgICAgICBicmVhayB1bmxlc3MgbGV4ZW1lP1xuICAgICAgICB7IG5hbWVcbiAgICAgICAgICBmcW5hbWVcbiAgICAgICAgICBzdG9wXG4gICAgICAgICAgaGl0XG4gICAgICAgICAganVtcFxuICAgICAgICAgIGp1bXBfbGl0ZXJhbFxuICAgICAgICAgIGdyb3VwcyAgfSA9IGxleGVtZVxuICAgICAgICBncm91cHNfcnByICA9IGlmIGdyb3Vwcz8gIHRoZW4gKCBycHIgeyBncm91cHMuLi4sIH0gKSBlbHNlICcnXG4gICAgICAgIGp1bXBfcnByICAgID0ganVtcF9saXRlcmFsID8gJydcbiAgICAgICAgaGVscCAnzqlfXzQ0JywgZlwiI3tzdGFydH06PjMuMGY7OiN7c3RvcH06PDMuMGY7ICN7ZnFuYW1lfTo8MjBjOyAje3JwciBoaXR9OjwzMGM7ICN7anVtcF9ycHJ9OjwxNWM7ICN7Z3JvdXBzX3Jwcn1cIlxuICAgICAgICBzdGFydCAgICAgPSBzdG9wXG4gICAgICByZXR1cm4gbnVsbFxuXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICMjI1xuICBgVG9rZW5gIGRlZmluZXMgYG1hdGNoZXJgLCBjYW4ganVtcCBpbnRvIGEgbGV2ZWwgb3IgYmFja1xuICBgTGV2ZWxgIGhhcyBvbmUgb3IgbW9yZSBgVG9rZW5gc1xuICBgR3JhbW1hcmAgaGFzIG9uZSBvciBtb3JlIGBMZXZlbGBzXG4gIGBMZXhlbWVgIHByb2R1Y2VkIGJ5IGEgYFRva2VuYCBpbnN0YW5jZSB3aGVuIG1hdGNoZXIgbWF0Y2hlcyBzb3VyY2VcblxuICAjIyNcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHNob3dfanVtcCA9ICgganVtcF9saXRlcmFsICkgLT5cbiAgICBpZiAoIG1hdGNoID0ganVtcF9saXRlcmFsLm1hdGNoIGp1bXBfbGl0ZXJhbF9yZSAgKT9cbiAgICAgIGZvciBrZXksIHZhbHVlIG9mIG1hdGNoLmdyb3Vwc1xuICAgICAgICBjb250aW51ZSB1bmxlc3MgdmFsdWU/XG4gICAgICAgIHVyZ2UgJ86pX180NScsICggcnByIGp1bXBfbGl0ZXJhbCApLCAoIEdVWS50cm0uZ3JleSBrZXkgKSwgKCBycHIgdmFsdWUgKVxuICAgIGVsc2VcbiAgICAgIHVyZ2UgJ86pX180NicsICggcnByIGp1bXBfbGl0ZXJhbCApLCBudWxsXG4gICAgcmV0dXJuIG51bGxcbiAgc2hvd19qdW1wICdhYmMnXG4gIHNob3dfanVtcCAnW2FiY1snXG4gIHNob3dfanVtcCAnW2FiYydcbiAgc2hvd19qdW1wICdhYmNbJ1xuICBzaG93X2p1bXAgJ1tzdHJpbmcxMSdcbiAgc2hvd19qdW1wICdzdHJpbmcxMVsnXG4gIHNob3dfanVtcCAnYWJjXSdcbiAgc2hvd19qdW1wICddYWJjJ1xuICBzaG93X2p1bXAgJy5dJ1xuICBzaG93X2p1bXAgJ10uJ1xuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZyAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBuYW1lOiAnZycsIH1cbiAgZ25kICAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZ25kJywgfVxuICBzdHJpbmcxMSAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdzdHJpbmcxMScsIH1cbiAgc3RyaW5nMTIgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnc3RyaW5nMTInLCB9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICduYW1lJywgICAgICAgICAgIG1hdGNoZXI6IHJ4XCIoPzxpbml0aWFsPltBLVpdKVthLXpdKlwiLCB9XG4gIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnbnVtYmVyJywgICAgICAgICBtYXRjaGVyOiByeFwiWzAtOV0rXCIsICAgICAgICAgICAgICAgICAgfVxuICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ3N0cmluZzExX3N0YXJ0JywgbWF0Y2hlcjogcnhcIig/ITxcXFxcKSdcIiwgICAgICAgICAgICAgICAganVtcDogJ3N0cmluZzExWycsIH1cbiAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdzdHJpbmcxMl9zdGFydCcsIG1hdGNoZXI6IHJ4Jyg/ITxcXFxcKVwiJywgICAgICAgICAgICAgICAganVtcDogJ3N0cmluZzEyWycsIH1cbiAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdwYXJlbl9zdGFydCcsICAgIG1hdGNoZXI6IHJ4XCJcXChcIiwgICAgICAgICAgICAgICAgICAgICAgfVxuICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ3BhcmVuX3N0b3AnLCAgICAgbWF0Y2hlcjogcnhcIlxcKVwiLCAgICAgICAgICAgICAgICAgICAgICB9XG4gIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnb3RoZXInLCAgICAgICAgICBtYXRjaGVyOiByeFwiW0EtWmEtejAtOV0rXCIsICAgICAgICAgICAgfVxuICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ3dzJywgICAgICAgICAgICAgbWF0Y2hlcjogcnhcIlxccytcIiwgICAgICAgICAgICAgICAgICAgICB9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgc3RyaW5nMTEubmV3X3Rva2VuICB7IG5hbWU6ICdzdHJpbmcxMV9zdG9wJywgIG1hdGNoZXI6IHJ4XCInXCIsICAgICAgICAgICAgICAgICAgICAgICBqdW1wOiAnXS4nLCB9XG4gIHN0cmluZzExLm5ld190b2tlbiAgeyBuYW1lOiAndGV4dCcsICAgICAgICAgICBtYXRjaGVyOiByeFwiW14nXSpcIiwgICAgICAgICAgICAgICAgICAgfVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGRlYnVnICfOqV9fNDcnLCBnXG4gIGRlYnVnICfOqV9fNDgnLCBnLmxldmVsc1xuICBkZWJ1ZyAnzqlfXzQ5JywgZy5sZXZlbHMuZ25kXG4gIGRlYnVnICfOqV9fNTAnLCBnLmxldmVscy5nbmQudG9rZW5zXG4gIGRlYnVnICfOqV9fNTEnLCBnbmRcbiAgZGVidWcgJ86pX181MicsIHRva2VuIGZvciB0b2tlbiBmcm9tIGduZFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHRleHRzID0gW1xuICAgIFwiQWxpY2UgaW4gQ2Fpcm8gMTkxMiAoYXBwcm94aW1hdGVseSlcIlxuICAgIFwiQWxpY2UgaW4gQ2Fpcm8gMTkxMiAnYXBwcm94aW1hdGVseSdcIlxuICAgIF1cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBmb3IgdGV4dCBpbiB0ZXh0c1xuICAgIGcudG9rZW5pemUgdGV4dFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBkZW1vXzEoKVxuICBkZW1vX2xleGVyXzMoKVxuIl19
//# sourceURL=../src/demo-slevithan-regex.coffee