(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, demo, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('interlex/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  //===========================================================================================================
  demo = function() {
    var Grammar, ILX, g, gnd, i, len, rx, show_jump, string11, string12, text, texts, token;
    ILX = require('../../../apps/interlex');
    ({Grammar, rx} = ILX);
    //===========================================================================================================
    show_jump = function(jump_literal) {
      var key, match, ref, value;
      if ((match = jump_literal.match(ILX._jump_literal_re)) != null) {
        ref = match.groups;
        for (key in ref) {
          value = ref[key];
          if (value == null) {
            continue;
          }
          info('Ω__10', rpr(jump_literal), GUY.trm.grey(key), rpr(value));
        }
      } else {
        info('Ω__11', rpr(jump_literal), null);
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
    debug('Ω__12', g);
    debug('Ω__13', g.levels);
    debug('Ω__14', g.levels.gnd);
    debug('Ω__15', g.levels.gnd.tokens);
    debug('Ω__16', gnd);
    for (token of gnd) {
      debug('Ω__17', token);
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
      return demo();
    })();
  }

}).call(this);

//# sourceMappingURL=test-basics.js.map