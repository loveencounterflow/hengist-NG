(async function() {
  'use strict';
  var GUY, alert, debug, demo_1, demo_lexer_1, echo, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

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
    var partial, regex;
    ({partial, regex} = require('regex'));
    (() => {      //.........................................................................................................
      var a, b, match;
      urge('Ω__29', a = (regex('y'))`(?<name>[a-z]+)`);
      urge('Ω__30', b = (regex('y'))`${a}\s+in\s+(?<place>[a-z]+)`);
      if ((match = "alice in cairo".match(b)) != null) {
        info('Ω__31', {...match.groups});
      }
      return null;
    })();
    (() => {      //.........................................................................................................
      var f, hit, match, name, patterns, re, ref, rey, start, stop, text;
      ({f} = require('../../../apps/effstring'));
      rey = regex('y');
      patterns = {
        name: {
          re: rey`(?<initial>[A-Z])[a-z]*`
        },
        number: {
          re: rey`[0-9]+`
        },
        paren_start: {
          re: rey`\(`
        },
        paren_stop: {
          re: rey`\)`
        },
        other: {
          re: rey`[A-Za-z0-9]+`
        },
        ws: {
          re: rey`\s+`
        }
      };
      urge('Ω__32', patterns);
      text = "Alice in Cairo 1912 (approximately)";
      stop = 0;
      while (true) {
        for (name in patterns) {
          ({re} = patterns[name]);
          // debug 'Ω__33', f"#{name}:>20c;: #{re}"
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
    })();
    //.........................................................................................................
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // demo_1()
      return demo_lexer_1();
    })();
  }

}).call(this);

//# sourceMappingURL=demo-slevithan-regex.js.map