(async function() {
  'use strict';
  var GUY, alert, debug, demo_1, demo_character_classes, demo_lexer_1, demo_lexer_2, demo_lexer_3, echo, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-slevithan-regex'));

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
  demo_character_classes = function() {
    var f, letters1, letters2, match, partial, pattern, probe, regex, rx;
    ({partial, regex} = require('regex'));
    ({f} = require('../../../apps/effstring'));
    rx = regex('y');
    //.........................................................................................................
    letters1 = 'ABCDEFG*[]';
    letters2 = 'abcdefg';
    pattern = rx`^
(?<sk>[${letters1}${letters2}]*?)
.. $`;
    info('Ω__53', pattern);
    probe = 'ab]*cdefg';
    //.........................................................................................................
    if ((match = probe.match(pattern)) == null) {
      warn(reverse(`no match for ${rpr(probe)}`));
    } else {
      help('Ω__54', {...match.groups});
    }
    //.........................................................................................................
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // demo_1()
      // demo_lexer_3()
      return demo_character_classes();
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tc2xldml0aGFuLXJlZ2V4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsc0JBQUEsRUFBQSxZQUFBLEVBQUEsWUFBQSxFQUFBLFlBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0Isc0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFtQkEsTUFBQSxHQUFTLFFBQUEsQ0FBQSxDQUFBO0FBQ1QsUUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBO0lBQUUsQ0FBQSxDQUFFLE9BQUYsRUFBVyxLQUFYLENBQUEsR0FBc0IsT0FBQSxDQUFRLE9BQVIsQ0FBdEI7SUFDQSxJQUFBLENBQUssT0FBTCxFQUFjLEtBQUssQ0FBQSxXQUFBLENBQW5CO0lBQ0EsSUFBQSxDQUFLLE9BQUwsRUFBYyxLQUFLLENBQUEsWUFBQSxDQUFuQjtJQUNBLElBQUEsQ0FBSyxPQUFMLEVBQWMsS0FBSyxDQUFBLGNBQUEsQ0FBbkI7SUFDQSxJQUFBLENBQUssT0FBTCxFQUFjLEtBQUssQ0FB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LEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUE7SUFBRSxDQUFBLENBQUUsT0FBRixFQUFXLEtBQVgsQ0FBQSxHQUFzQixPQUFBLENBQVEsT0FBUixDQUF0QjtJQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBUSxPQUFBLENBQVEseUJBQVIsQ0FBUjtJQUNBLEVBQUEsR0FBUSxLQUFBLENBQU0sR0FBTixFQUZWOztJQUlFLFFBQUEsR0FBVztJQUNYLFFBQUEsR0FBVztJQUNYLE9BQUEsR0FBVSxFQUFFLENBQUE7T0FBQSxDQUFBLENBRUQsUUFGQyxDQUFBLENBQUEsQ0FFVSxRQUZWLENBQUE7SUFBQTtJQUlaLElBQUEsQ0FBSyxPQUFMLEVBQWMsT0FBZDtJQUNBLEtBQUEsR0FBUSxZQVhWOztJQWFFLElBQU8sc0NBQVA7TUFDRSxJQUFBLENBQUssT0FBQSxDQUFRLENBQUEsYUFBQSxDQUFBLENBQWdCLEdBQUEsQ0FBSSxLQUFKLENBQWhCLENBQUEsQ0FBUixDQUFMLEVBREY7S0FBQSxNQUFBO01BR0UsSUFBQSxDQUFLLE9BQUwsRUFBYyxDQUFFLEdBQUEsS0FBSyxDQUFDLE1BQVIsQ0FBZCxFQUhGO0tBYkY7O0FBa0JFLFdBQU87RUFuQmdCLEVBNVh6Qjs7O0VBbVpBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7O2FBR3RDLHNCQUFBLENBQUE7SUFIc0MsQ0FBQSxJQUF4Qzs7QUFuWkEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnZGVtby1zbGV2aXRoYW4tcmVnZXgnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5kZW1vXzEgPSAtPlxuICB7IHBhcnRpYWwsIHJlZ2V4LCB9ID0gcmVxdWlyZSAncmVnZXgnXG4gIGhlbHAgJ86pX19fMScsIHJlZ2V4J2hlbG9cXHN3b3JsZCdcbiAgaGVscCAnzqlfX18yJywgcmVnZXgnKGEpKD8+YikoYylkJ1xuICBoZWxwICfOqV9fXzMnLCByZWdleCcoYWJjKSsoPzpkZWYpKidcbiAgaGVscCAnzqlfX180JywgcmVnZXhcIlwiXCIoYWJjKSsjeydbKitdJ31cIlwiXCJcbiAgIyBoZWxwICfOqV9fXzUnLCByZWdleFwiXCJcIihhYmMpKyN7L2hlbG8qL2l9XCJcIlwiXG4gIGhlbHAgJ86pX19fNicsIHJlZ2V4XCJcIlwiXig/PlxcdytcXHM/KSskXCJcIlwiXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgdGltZSA9ICggZiApIC0+XG4gICAgdDAgPSBEYXRlLm5vdygpXG4gICAgd2hpc3BlciAn4oCUJy5yZXBlYXQgMTA4XG4gICAgZigpXG4gICAgd2hpc3BlciAnLicucmVwZWF0IDEwOFxuICAgIHQxID0gRGF0ZS5ub3coKVxuICAgIGR0ID0gKCB0MSAtIHQwICkgLyAxMDAwXG4gICAgaW5mbyBcInRpbWU6ICN7ZHR9c1wiXG4gICAgd2hpc3BlciAn4oCUJy5yZXBlYXQgMTA4XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZG8gPT5cbiAgICBwcm9iZXMgPSBbXG4gICAgICAjIFwiQSB0YXJnZXQgc3RyaW5nIHRoYXQgdGFrZXMgYSBsb25nIHRpbWUgb3IgY2FuIGV2ZW4gaGFuZyB5b3VyIGJyb3dzZXIhXCJcbiAgICAgICMgXCJBIHRhcmdldCBzdHJpbmcgdGhhdCB0YWtlcyBhIGxvbmcgdGltZSBvciBjYW4gZXZlbiBoYW5nIHlvdXIgYnJvd3NlclwiXG4gICAgICBcInNob3J0ZXIgc3RyaW5nIDEyMyAxMjMgMTIzIDEyMyAxMjMhXCJcbiAgICAgIFwic2hvcnRlciBzdHJpbmcgMTIzIDEyMyAxMjMgMTIzIDEyM1wiXG4gICAgICBdXG4gICAgdGltZSA9PlxuICAgICAgc3BhY2VkX3dvcmRzX3JlID0gcmVnZXhcIlwiXCJeKD8+XFx3K1xccz8pKyRcIlwiXCJcbiAgICAgIGZvciBwcm9iZSBpbiBwcm9iZXNcbiAgICAgICAgaGVscCAnzqlfX183JywgcHJvYmUubWF0Y2ggc3BhY2VkX3dvcmRzX3JlXG4gICAgICByZXR1cm4gbnVsbFxuICAgIHRpbWUgPT5cbiAgICAgIHNwYWNlZF93b3Jkc19yZSA9IHJlZ2V4XCJcIlwiXig/Pig/PlxcdylcXHcqXFxzPykrJFwiXCJcIlxuICAgICAgZm9yIHByb2JlIGluIHByb2Jlc1xuICAgICAgICBoZWxwICfOqV9fXzgnLCBwcm9iZS5tYXRjaCBzcGFjZWRfd29yZHNfcmVcbiAgICAgIHJldHVybiBudWxsXG4gICAgdGltZSA9PlxuICAgICAgc3BhY2VkX3dvcmRzX3JlID0gcmVnZXhcIlwiXCJeKFxcdytcXHM/KSskXCJcIlwiXG4gICAgICBmb3IgcHJvYmUgaW4gcHJvYmVzXG4gICAgICAgIGhlbHAgJ86pX19fOScsIHByb2JlLm1hdGNoIHNwYWNlZF93b3Jkc19yZVxuICAgICAgcmV0dXJuIG51bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICB0aW1lID0+XG4gICAgcGF0dGVybnMgPSBbXG4gICAgICAvXmEoYmN8YiljJC91XG4gICAgICByZWdleFwiXCJcIl5hKGJjfGIpYyRcIlwiXCJcbiAgICAgIHJlZ2V4XCJcIlwiXmEoPz5iY3xiKWMkXCJcIlwiXG4gICAgICByZWdleFwiXCJcIl5hKD8+YnxiYyljJFwiXCJcIlxuICAgICAgIyByZWdleFwiXCJcIl5hYisrY1wiXCJcIlxuICAgICAgXVxuICAgIGhlbHAgJ86pX18xMCcsIHBhdHRlcm5zXG4gICAgcHJvYmVzID0gWyAnYWJjJywgJ2FiY2MnLCBdXG4gICAgZm9yIHBhdHRlcm4gaW4gcGF0dGVybnNcbiAgICAgIGZvciBwcm9iZSBpbiBwcm9iZXNcbiAgICAgICAgaGVscCAnzqlfXzExJywgcHJvYmUsIHBhdHRlcm4sIHByb2JlLm1hdGNoIHBhdHRlcm5cbiAgICByZXR1cm4gbnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGRvID0+XG4gICAgaW5mbyAnzqlfXzEyJywgL14oW2FiY117MH0peCQvLnRlc3QgJ3gnXG4gICAgaW5mbyAnzqlfXzEzJywgL14oW2FiY117MH0peCQvLnRlc3QgJ2EnXG4gICAgaW5mbyAnzqlfXzE0JywgL14oW2FiY117MH0peCQvLnRlc3QgJ2F4J1xuICAgIGluZm8gJ86pX18xNScsIC9eKD88c3VmZml4PlthYmNdKXswfXhcXGs8c3VmZml4PiQvLnRlc3QgJ3gnXG4gICAgaW5mbyAnzqlfXzE2JywgL14oPzxzdWZmaXg+W2FiY10pezB9eFxcazxzdWZmaXg+JC8udGVzdCAneGEnXG4gICAgaW5mbyAnzqlfXzE3JywgL14oPzxzdWZmaXg+W2FiY10pezB9eFxcazxzdWZmaXg+JC8udGVzdCAnYnhiJ1xuICAgIGluZm8gJ86pX18xOCcsICggcmVnZXhcIlwiXCJeXG4gICAgICAoPzxzdWZmaXg+IFthYmNdICl7MH1cbiAgICAgIHggXFxnPHN1ZmZpeD5cbiAgICAgICRcIlwiXCIpLnRlc3QgJ3hhJ1xuICAgIGluZm8gJ86pX18xOScsICggcmVnZXhcIlwiXCJeXG4gICAgICAoPzxzdWZmaXg+IFthYmNdICl7MH1cbiAgICAgIHggXFxnPHN1ZmZpeD4gXFxnPHN1ZmZpeD4gXFxnPHN1ZmZpeD5cbiAgICAgICRcIlwiXCIpLnRlc3QgJ3hhY2InXG4gICAgaW5mbyAnzqlfXzIwJywgKCByZWdleFwiXCJcIl5cbiAgICAgICg/PHN1ZmZpeD4gKD88dGhlc3VmZml4PiBbYWJjXSApICl7MH1cbiAgICAgIHggXFxnPHN1ZmZpeD4gXFxnPHN1ZmZpeD4gXFxnPHN1ZmZpeD5cbiAgICAgICRcIlwiXCIgKVxuICAgIGluZm8gJ86pX18yMScsICd4YmNhJy5tYXRjaCAoIHJlZ2V4XCJcIlwiXlxuICAgICAgKD88c3VmZml4PiAoPzx0aGVzdWZmaXg+IFthYmNdICkgKXswfVxuICAgICAgeCBcXGc8c3VmZml4PiBcXGc8c3VmZml4PiBcXGc8c3VmZml4PlxuICAgICAgJFwiXCJcIiApXG4gICAgcmV0dXJuIG51bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBkbyA9PlxuICAgIGlwX2FkZHJlc3NfcmUgPSByZWdleFwiXCJcIlxuICAgICAgXFxiXG4gICAgICAoPzxiMT4gXFxnPGJ5dGU+ICkgXFwuXG4gICAgICAoPzxiMj4gXFxnPGJ5dGU+ICkgXFwuXG4gICAgICAoPzxiMz4gXFxnPGJ5dGU+ICkgXFwuXG4gICAgICAoPzxiND4gXFxnPGJ5dGU+IClcbiAgICAgIFxcYlxuXG4gICAgICAjIFRoZSB7MH0gcXVhbnRpZmllciBhbGxvd3MgZGVmaW5pbmcgYSBzdWJwYXR0ZXJuIHdpdGhvdXQgbWF0Y2hpbmcgaXRcbiAgICAgICg/PGJ5dGU+IDJbMC00XVxcZCB8IDI1WzAtNV0gfCAxXFxkXFxkIHwgWzEtOV0/XFxkICl7MH1cbiAgICAgIFwiXCJcIlxuICAgIG1hdGNoID0gJzEyMy40NS4yMS40Jy5tYXRjaCBpcF9hZGRyZXNzX3JlXG4gICAgdXJnZSAnzqlfXzIyJywgeyBtYXRjaC5ncm91cHMuLi4sIH1cbiAgICByZXR1cm4gbnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHVyZ2UgJ86pX18yMycsIHJlZ2V4XCIoPzxvdXRlcj5hI3tyZWdleFwiKD88aW5uZXI+YmMpXCJ9eilcIlxuICB1cmdlICfOqV9fMjQnLCByZWdleFwiKD88b3V0ZXI+YSN7cGFydGlhbFwiKD88aW5uZXI+YmMpXCJ9eilcIlxuICB1cmdlICfOqV9fMjUnLCByZWdleFwiXFxcXFwiXG4gIHVyZ2UgJ86pX18yNicsIHJlZ2V4XCJcXFxcXFxcXFwiXG4gIHVyZ2UgJ86pX18yNycsIHJlZ2V4XCIoPzwjeydvdXRlcid9PmEje3BhcnRpYWxcIig/PCN7J2lubmVyJ30+YmMpXCJ9eilcIlxuICB1cmdlICfOqV9fMjgnLCByZWdleFwiXig/Oig/IVxcYih0aGV8YW4/KVxcYikuKStcIlxuICByZXR1cm4gbnVsbFxuXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZGVtb19sZXhlcl8xID0gLT5cbiAgeyBwYXJ0aWFsLCByZWdleCwgfSA9IHJlcXVpcmUgJ3JlZ2V4J1xuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHVyZ2UgJ86pX18yOScsIGEgPSAoIHJlZ2V4ICd5JyApXCIoPzxuYW1lPlthLXpdKylcIlxuICB1cmdlICfOqV9fMzAnLCBiID0gKCByZWdleCAneScgKVwiI3thfVxccytpblxccysoPzxwbGFjZT5bYS16XSspXCJcbiAgaWYgKCBtYXRjaCA9IFwiYWxpY2UgaW4gY2Fpcm9cIi5tYXRjaCBiICk/XG4gICAgaW5mbyAnzqlfXzMxJywgeyBtYXRjaC5ncm91cHMuLi4sIH1cbiAgcmV0dXJuIG51bGxcblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5kZW1vX2xleGVyXzIgPSAtPlxuICB7IHBhcnRpYWwsIHJlZ2V4LCB9ID0gcmVxdWlyZSAncmVnZXgnXG4gIHsgZiB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4gIHJ4ICAgID0gcmVnZXggJ3knXG4gIHBhdHRlcm5zID0ge1xuICAgIG5hbWU6ICAgICAgICAgICAgIHsgcmU6IHJ4XCIoPzxpbml0aWFsPltBLVpdKVthLXpdKlwiLCB9XG4gICAgbnVtYmVyOiAgICAgICAgICAgeyByZTogcnhcIlswLTldK1wiLCAgICAgICAgICAgICAgICAgIH1cbiAgICBzcV9zdHJpbmdfc3RhcnQ6ICB7IHJlOiByeFwiKD8hPFxcXFwpJ1wiLCAgICAgICAgICAgICAgICB9XG4gICAgcGFyZW5fc3RhcnQ6ICAgICAgeyByZTogcnhcIlxcKFwiLCAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgcGFyZW5fc3RvcDogICAgICAgeyByZTogcnhcIlxcKVwiLCAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgb3RoZXI6ICAgICAgICAgICAgeyByZTogcnhcIltBLVphLXowLTldK1wiLCAgICAgICAgICAgIH1cbiAgICB3czogICAgICAgICAgICAgICB7IHJlOiByeFwiXFxzK1wiLCAgICAgICAgICAgICAgICAgICAgIH1cbiAgICB9XG4gIHVyZ2UgJ86pX18zMicsIHBhdHRlcm5zXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgdG9rZW5pemUgPSAoIHRleHQgKSAtPlxuICAgIHN0b3AgICAgICA9IDBcbiAgICBpbmZvICfOqV9fMzMnLCBycHIgdGV4dFxuICAgIGxvb3BcbiAgICAgIGZvciBuYW1lLCB7IHJlLCB9IG9mIHBhdHRlcm5zXG4gICAgICAgICMgZGVidWcgJ86pX18zNCcsIGZcIiN7bmFtZX06PjIwYzs6ICN7cmV9XCJcbiAgICAgICAgaGl0ICAgICAgICAgICA9IG51bGxcbiAgICAgICAgcmUubGFzdEluZGV4ICA9IHN0b3BcbiAgICAgICAgaWYgKCBtYXRjaCA9IHRleHQubWF0Y2ggcmUgKT9cbiAgICAgICAgICBicmVha1xuICAgICAgYnJlYWsgdW5sZXNzIG1hdGNoP1xuICAgICAgaGl0ICAgICAgID0gbWF0Y2hbIDAgXVxuICAgICAgc3RhcnQgICAgID0gc3RvcFxuICAgICAgc3RvcCAgICAgKz0gaGl0Lmxlbmd0aFxuICAgICAgaGVscCAnzqlfXzM1JywgZlwiI3tzdGFydH06PjMuMGY7OiN7c3RvcH06PDMuMGY7ICN7bmFtZX06PjIwYzs6ICN7cnByIGhpdH06PDMwYzsgI3tycHIgeyAoIG1hdGNoLmdyb3VwcyA/IHt9ICkuLi4sIH19XCJcbiAgICByZXR1cm4gbnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHRleHRzID0gW1xuICAgIFwiQWxpY2UgaW4gQ2Fpcm8gMTkxMiAoYXBwcm94aW1hdGVseSlcIlxuICAgIFwiQWxpY2UgaW4gQ2Fpcm8gMTkxMiAnYXBwcm94aW1hdGVseSdcIlxuICAgIF1cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBmb3IgdGV4dCBpbiB0ZXh0c1xuICAgIHRva2VuaXplIHRleHRcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICByZXR1cm4gbnVsbFxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmRlbW9fbGV4ZXJfMyA9IC0+XG4gIHsgcGFydGlhbCwgcmVnZXgsIH0gPSByZXF1aXJlICdyZWdleCdcbiAgeyBmIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiAgaGlkZSAgPSAoIG93bmVyLCBuYW1lLCB2YWx1ZSApIC0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBvd25lciwgbmFtZSwgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWUsIHdyaXRhYmxlOiB0cnVlLCB9XG4gIHJ4ICAgID0gcmVnZXggJ3knXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBqdW1wX2xpdGVyYWxfcmUgPSByZWdleFwiXCJcIlxuICAgIF4oXG4gICAgXFxbICg/PGV4Y2x1c2l2ZV9qdW1wPiBbXiBcXF4gLiBcXHMgXFxbIFxcXSBdKyApICAgICB8XG4gICAgICAgKD88aW5jbHVzaXZlX2p1bXA+IFteIFxcXiAuIFxccyBcXFsgXFxdIF0rICkgXFxbICB8XG4gICAgXFxdICg/PGV4Y2x1c2l2ZV9iYWNrPiBbICAgICAuICAgICAgICAgIF0gICkgICAgIHxcbiAgICAgICAoPzxpbmNsdXNpdmVfYmFjaz4gWyAgICAgLiAgICAgICAgICBdICApIFxcXVxuICAgICkkIFwiXCJcIlxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjbGFzcyBUb2tlblxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0cnVjdG9yOiAoIGNmZyApIC0+XG4gICAgICBkZWJ1ZyAnzqlfXzM2JywgXCJuZXcgVG9rZW5cIiwgY2ZnLm5hbWUsIGNmZy5sZXZlbCwgY2ZnLmxldmVsLmdyYW1tYXJcbiAgICAgIEBuYW1lID0gY2ZnLm5hbWVcbiAgICAgIGhpZGUgQCwgJ2xldmVsJywgICAgICAgIGNmZy5sZXZlbFxuICAgICAgaGlkZSBALCAnZ3JhbW1hcicsICAgICAgY2ZnLmxldmVsLmdyYW1tYXJcbiAgICAgIGhpZGUgQCwgJ21hdGNoZXInLCAgICAgIGNmZy5tYXRjaGVyXG4gICAgICBoaWRlIEAsICdqdW1wJywgICAgICAgICBAcGFyc2VfanVtcCBjZmcuanVtcCAgPyBudWxsXG4gICAgICBoaWRlIEAsICdqdW1wX2xpdGVyYWwnLCBjZmcuanVtcCAgICAgICAgICAgICAgPyBudWxsXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbWF0Y2hfYXQ6ICggc3RhcnQsIHRleHQgKSAtPlxuICAgICAgQG1hdGNoZXIubGFzdEluZGV4ID0gc3RhcnRcbiAgICAgIHJldHVybiBudWxsIHVubGVzcyAoIG1hdGNoID0gdGV4dC5tYXRjaCBAbWF0Y2hlciApP1xuICAgICAgcmV0dXJuIG5ldyBMZXhlbWUgQCwgbWF0Y2hcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwYXJzZV9qdW1wOiAoIGp1bXBfbGl0ZXJhbCApIC0+XG4gICAgICByZXR1cm4gbnVsbCB1bmxlc3MganVtcF9saXRlcmFsP1xuICAgICAgIyMjIFRBSU5UIHVzZSBjbGVhcnR5cGUgIyMjXG4gICAgICB1bmxlc3MgKCBtYXRjaCA9IGp1bXBfbGl0ZXJhbC5tYXRjaCBqdW1wX2xpdGVyYWxfcmUgKT9cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlfXzM3IGV4cGVjdGVkIGEgd2VsbC1mb3JtZWQganVtcCBsaXRlcmFsLCBnb3QgI3tycHIganVtcF9saXRlcmFsfVwiXG4gICAgICBmb3Iga2V5LCBsZXZlbF9uYW1lIG9mIG1hdGNoLmdyb3Vwc1xuICAgICAgICBjb250aW51ZSB1bmxlc3MgbGV2ZWxfbmFtZT9cbiAgICAgICAgWyBhZmZpbml0eSwgYWN0aW9uLCBdID0ga2V5LnNwbGl0ICdfJ1xuICAgICAgICBicmVha1xuICAgICAgaWYgbGV2ZWxfbmFtZSBpcyAnLidcbiAgICAgICAgbGV2ZWwgPSBsZXZlbF9uYW1lXG4gICAgICBlbHNlIHVubGVzcyAoIGxldmVsID0gQGdyYW1tYXIubGV2ZWxzWyBsZXZlbF9uYW1lIF0gKT9cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlfXzM4IGV4cGVjdGVkIG5hbWUgb2YgYSBrbm93biBsZXZlbCwgZ290ICN7cnByIGxldmVsX25hbWV9XCJcbiAgICAgIHJldHVybiB7IGFmZmluaXR5LCBhY3Rpb24sIGxldmVsLCB9XG5cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY2xhc3MgTGV4ZW1lXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29uc3RydWN0b3I6ICggdG9rZW4sIG1hdGNoICkgLT5cbiAgICAgICMgZGVidWcgJ86pX18zOScsIHRva2VuXG4gICAgICAjIGRlYnVnICfOqV9fNDAnLCB0b2tlbi5qdW1wLCB0b2tlbi5ncmFtbWFyLmxldmVsc1sgdG9rZW4uanVtcC5sZXZlbCBdIGlmIHRva2VuLmp1bXA/XG4gICAgICBAbmFtZSAgICAgICAgID0gdG9rZW4ubmFtZVxuICAgICAgQGZxbmFtZSAgICAgICA9IFwiI3t0b2tlbi5sZXZlbC5uYW1lfS4je3Rva2VuLm5hbWV9XCJcbiAgICAgIEBsZXZlbCAgICAgICAgPSB0b2tlbi5sZXZlbFxuICAgICAgQGhpdCAgICAgICAgICA9IG1hdGNoWyAwIF1cbiAgICAgIEBzdGFydCAgICAgICAgPSBtYXRjaC5pbmRleFxuICAgICAgQHN0b3AgICAgICAgICA9IEBzdGFydCArIEBoaXQubGVuZ3RoXG4gICAgICBAZ3JvdXBzICAgICAgID0gbWF0Y2guZ3JvdXBzID8gbnVsbFxuICAgICAgQGp1bXAgICAgICAgICA9IHRva2VuLmp1bXBcbiAgICAgIEBqdW1wX2xpdGVyYWwgPSB0b2tlbi5qdW1wX2xpdGVyYWxcbiAgICAgIHJldHVybiB1bmRlZmluZWRcblxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjbGFzcyBMZXZlbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0cnVjdG9yOiAoIGNmZyApIC0+XG4gICAgICBjZmcgICAgPz0ge31cbiAgICAgIEBuYW1lICAgPSBjZmcubmFtZSA/ICdnbmQnXG4gICAgICBoaWRlIEAsICdncmFtbWFyJywgIGNmZy5ncmFtbWFyXG4gICAgICBoaWRlIEAsICd0b2tlbnMnLCAgIFsgKCBjZmcudG9rZW5zID8gW10gKS4uLiwgXVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFtTeW1ib2wuaXRlcmF0b3JdOiAtPiB5aWVsZCB0IGZvciB0IGluIEB0b2tlbnNcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBuZXdfdG9rZW46ICggY2ZnICkgLT5cbiAgICAgIGlmIGNmZy5sZXZlbD8gYW5kIGNmZy5sZXZlbCBpc250IEBcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlfXzQxIGluY29uc2lzdGVudCBsZXZlbFwiXG4gICAgICBAdG9rZW5zLnB1c2ggdG9rZW4gPSBuZXcgVG9rZW4geyBjZmcuLi4sIGxldmVsOiBALCB9XG4gICAgICByZXR1cm4gdG9rZW5cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY2xhc3MgR3JhbW1hclxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0cnVjdG9yOiAoIGNmZyApIC0+XG4gICAgICBjZmcgICAgICAgICAgICAgID89IHt9XG4gICAgICBAbmFtZSAgICAgICAgICAgICA9IGNmZy5uYW1lID8gJ2cnXG4gICAgICBAc3RhcnRfbmFtZSAgICAgICA9IG51bGxcbiAgICAgIGhpZGUgQCwgJ3N0YXJ0JywgICAgbnVsbFxuICAgICAgaGlkZSBALCAnbGV2ZWxzJywgICB7ICggY2ZnLmxldmVscyA/IHt9ICkuLi4sIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWRcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBuZXdfbGV2ZWw6ICggY2ZnICkgLT5cbiAgICAgIGlmIEBsZXZlbHNbIGNmZy5uYW1lIF0/XG4gICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pX180MiBsZXZlbCAje3JwciBsZXZlbC5uYW1lfSBlbHJlYWR5IGV4aXN0c1wiXG4gICAgICBsZXZlbCAgICAgICAgICAgICAgICAgICA9IG5ldyBMZXZlbCB7IGNmZy4uLiwgZ3JhbW1hcjogQCwgfVxuICAgICAgQGxldmVsc1sgbGV2ZWwubmFtZSBdICAgPSBsZXZlbFxuICAgICAgQHN0YXJ0ICAgICAgICAgICAgICAgICA/PSBsZXZlbFxuICAgICAgQHN0YXJ0X25hbWUgICAgICAgICAgICA/PSBsZXZlbC5uYW1lXG4gICAgICByZXR1cm4gbGV2ZWxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0b2tlbml6ZTogKCBzb3VyY2UgKSAtPlxuICAgICAgc3RhcnQgICA9IDBcbiAgICAgIGluZm8gJ86pX180MycsIHJwciBzb3VyY2VcbiAgICAgIGxldmVsICAgPSBAc3RhcnRcbiAgICAgIGxvb3BcbiAgICAgICAgbGV4ZW1lICA9IG51bGxcbiAgICAgICAgZm9yIHRva2VuIGZyb20gZ25kXG4gICAgICAgICAgYnJlYWsgaWYgKCBsZXhlbWUgPSB0b2tlbi5tYXRjaF9hdCBzdGFydCwgc291cmNlICk/XG4gICAgICAgIGJyZWFrIHVubGVzcyBsZXhlbWU/XG4gICAgICAgIHsgbmFtZVxuICAgICAgICAgIGZxbmFtZVxuICAgICAgICAgIHN0b3BcbiAgICAgICAgICBoaXRcbiAgICAgICAgICBqdW1wXG4gICAgICAgICAganVtcF9saXRlcmFsXG4gICAgICAgICAgZ3JvdXBzICB9ID0gbGV4ZW1lXG4gICAgICAgIGdyb3Vwc19ycHIgID0gaWYgZ3JvdXBzPyAgdGhlbiAoIHJwciB7IGdyb3Vwcy4uLiwgfSApIGVsc2UgJydcbiAgICAgICAganVtcF9ycHIgICAgPSBqdW1wX2xpdGVyYWwgPyAnJ1xuICAgICAgICBoZWxwICfOqV9fNDQnLCBmXCIje3N0YXJ0fTo+My4wZjs6I3tzdG9wfTo8My4wZjsgI3tmcW5hbWV9OjwyMGM7ICN7cnByIGhpdH06PDMwYzsgI3tqdW1wX3Jwcn06PDE1YzsgI3tncm91cHNfcnByfVwiXG4gICAgICAgIHN0YXJ0ICAgICA9IHN0b3BcbiAgICAgIHJldHVybiBudWxsXG5cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIyMjXG4gIGBUb2tlbmAgZGVmaW5lcyBgbWF0Y2hlcmAsIGNhbiBqdW1wIGludG8gYSBsZXZlbCBvciBiYWNrXG4gIGBMZXZlbGAgaGFzIG9uZSBvciBtb3JlIGBUb2tlbmBzXG4gIGBHcmFtbWFyYCBoYXMgb25lIG9yIG1vcmUgYExldmVsYHNcbiAgYExleGVtZWAgcHJvZHVjZWQgYnkgYSBgVG9rZW5gIGluc3RhbmNlIHdoZW4gbWF0Y2hlciBtYXRjaGVzIHNvdXJjZVxuXG4gICMjI1xuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc2hvd19qdW1wID0gKCBqdW1wX2xpdGVyYWwgKSAtPlxuICAgIGlmICggbWF0Y2ggPSBqdW1wX2xpdGVyYWwubWF0Y2gganVtcF9saXRlcmFsX3JlICApP1xuICAgICAgZm9yIGtleSwgdmFsdWUgb2YgbWF0Y2guZ3JvdXBzXG4gICAgICAgIGNvbnRpbnVlIHVubGVzcyB2YWx1ZT9cbiAgICAgICAgdXJnZSAnzqlfXzQ1JywgKCBycHIganVtcF9saXRlcmFsICksICggR1VZLnRybS5ncmV5IGtleSApLCAoIHJwciB2YWx1ZSApXG4gICAgZWxzZVxuICAgICAgdXJnZSAnzqlfXzQ2JywgKCBycHIganVtcF9saXRlcmFsICksIG51bGxcbiAgICByZXR1cm4gbnVsbFxuICBzaG93X2p1bXAgJ2FiYydcbiAgc2hvd19qdW1wICdbYWJjWydcbiAgc2hvd19qdW1wICdbYWJjJ1xuICBzaG93X2p1bXAgJ2FiY1snXG4gIHNob3dfanVtcCAnW3N0cmluZzExJ1xuICBzaG93X2p1bXAgJ3N0cmluZzExWydcbiAgc2hvd19qdW1wICdhYmNdJ1xuICBzaG93X2p1bXAgJ11hYmMnXG4gIHNob3dfanVtcCAnLl0nXG4gIHNob3dfanVtcCAnXS4nXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBnICAgICAgICAgPSBuZXcgR3JhbW1hciB7IG5hbWU6ICdnJywgfVxuICBnbmQgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdnbmQnLCB9XG4gIHN0cmluZzExICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ3N0cmluZzExJywgfVxuICBzdHJpbmcxMiAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdzdHJpbmcxMicsIH1cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ25hbWUnLCAgICAgICAgICAgbWF0Y2hlcjogcnhcIig/PGluaXRpYWw+W0EtWl0pW2Etel0qXCIsIH1cbiAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdudW1iZXInLCAgICAgICAgIG1hdGNoZXI6IHJ4XCJbMC05XStcIiwgICAgICAgICAgICAgICAgICB9XG4gIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnc3RyaW5nMTFfc3RhcnQnLCBtYXRjaGVyOiByeFwiKD8hPFxcXFwpJ1wiLCAgICAgICAgICAgICAgICBqdW1wOiAnc3RyaW5nMTFbJywgfVxuICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ3N0cmluZzEyX3N0YXJ0JywgbWF0Y2hlcjogcngnKD8hPFxcXFwpXCInLCAgICAgICAgICAgICAgICBqdW1wOiAnc3RyaW5nMTJbJywgfVxuICBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ3BhcmVuX3N0YXJ0JywgICAgbWF0Y2hlcjogcnhcIlxcKFwiLCAgICAgICAgICAgICAgICAgICAgICB9XG4gIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAncGFyZW5fc3RvcCcsICAgICBtYXRjaGVyOiByeFwiXFwpXCIsICAgICAgICAgICAgICAgICAgICAgIH1cbiAgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdvdGhlcicsICAgICAgICAgIG1hdGNoZXI6IHJ4XCJbQS1aYS16MC05XStcIiwgICAgICAgICAgICB9XG4gIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnd3MnLCAgICAgICAgICAgICBtYXRjaGVyOiByeFwiXFxzK1wiLCAgICAgICAgICAgICAgICAgICAgIH1cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBzdHJpbmcxMS5uZXdfdG9rZW4gIHsgbmFtZTogJ3N0cmluZzExX3N0b3AnLCAgbWF0Y2hlcjogcnhcIidcIiwgICAgICAgICAgICAgICAgICAgICAgIGp1bXA6ICddLicsIH1cbiAgc3RyaW5nMTEubmV3X3Rva2VuICB7IG5hbWU6ICd0ZXh0JywgICAgICAgICAgIG1hdGNoZXI6IHJ4XCJbXiddKlwiLCAgICAgICAgICAgICAgICAgICB9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZGVidWcgJ86pX180NycsIGdcbiAgZGVidWcgJ86pX180OCcsIGcubGV2ZWxzXG4gIGRlYnVnICfOqV9fNDknLCBnLmxldmVscy5nbmRcbiAgZGVidWcgJ86pX181MCcsIGcubGV2ZWxzLmduZC50b2tlbnNcbiAgZGVidWcgJ86pX181MScsIGduZFxuICBkZWJ1ZyAnzqlfXzUyJywgdG9rZW4gZm9yIHRva2VuIGZyb20gZ25kXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgdGV4dHMgPSBbXG4gICAgXCJBbGljZSBpbiBDYWlybyAxOTEyIChhcHByb3hpbWF0ZWx5KVwiXG4gICAgXCJBbGljZSBpbiBDYWlybyAxOTEyICdhcHByb3hpbWF0ZWx5J1wiXG4gICAgXVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGZvciB0ZXh0IGluIHRleHRzXG4gICAgZy50b2tlbml6ZSB0ZXh0XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX2NoYXJhY3Rlcl9jbGFzc2VzID0gLT5cbiAgeyBwYXJ0aWFsLCByZWdleCwgfSA9IHJlcXVpcmUgJ3JlZ2V4J1xuICB7IGYgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuICByeCAgICA9IHJlZ2V4ICd5J1xuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGxldHRlcnMxID0gJ0FCQ0RFRkcqW10nXG4gIGxldHRlcnMyID0gJ2FiY2RlZmcnXG4gIHBhdHRlcm4gPSByeFwiXCJcIlxuICAgIF5cbiAgICAoPzxzaz5bI3tsZXR0ZXJzMX0je2xldHRlcnMyfV0qPylcbiAgICAuLiAkXCJcIlwiXG4gIGluZm8gJ86pX181MycsIHBhdHRlcm5cbiAgcHJvYmUgPSAnYWJdKmNkZWZnJ1xuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHVubGVzcyAoIG1hdGNoID0gcHJvYmUubWF0Y2ggcGF0dGVybiApP1xuICAgIHdhcm4gcmV2ZXJzZSBcIm5vIG1hdGNoIGZvciAje3JwciBwcm9iZX1cIlxuICBlbHNlXG4gICAgaGVscCAnzqlfXzU0JywgeyBtYXRjaC5ncm91cHMuLi4sIH1cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb18xKClcbiAgIyBkZW1vX2xleGVyXzMoKVxuICBkZW1vX2NoYXJhY3Rlcl9jbGFzc2VzKClcbiJdfQ==
