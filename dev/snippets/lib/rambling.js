(async function() {
  'use strict';
  var GTNG, GUY, SFMODULES, Test, alert, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, ramble, red, reverse, rpr, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('rambling'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  ramble = () => {
    var CP, bitfield, cid, cid_hex, demo_wc_max_line_length, envPaths, findCacheDirectory, get_rough_unicode_category, get_wc_max_line_length, i, illegal_codepoint_patterns, k, ranges, ref, texts, ucc_descriptor_from_chr, ucc_patterns, use_open_process_to_execute_shell_commands, v, write_unicode_chrs;
    // echo "\x1b[6nxyz"
    // echo "abc\x1b[6nxyz"
    // echo "abcdef\x1b[6nxyz"
    // echo "abcdef𓂋\x1b[6nxyz"
    // echo "abcdef两\x1b[6nxyz"
    // echo "abcdef𬺱\x1b[6nxyz"
    // echo "abcdef𒁾\x1b[6nxyz"
    // f = ( ctx ) -> debug 'Ωbbsfm___1', ctx.arguments
    // g = ( P... ) -> debug 'Ωbbsfm___2', f { arguments, }
    // g 5, 'd'
    // CP = require 'node:child_process'
    // cfg =
    //   encoding: 'utf-8'
    //   stdin:    'inherit'
    //   stdout:   'inherit'
    //   stderr:   'inherit'
    // # debug 'Ωbbsfm___3', CP.execSync "ls", cfg
    // # debug 'Ωbbsfm___4', CP.exec """echo -en "xxxxxxxxx\x1b[6n" ; read\n""", cfg
    // # { stdin, stdout, stderr, } =
    // echo '—————————————————————————————————————————————'
    // cp = CP.exec """echo -en 'xxxxxxxxx\x1b[6n'""", cfg
    // # cp = CP.exec """echo -en 'xxxxxxxxx\x1b[6n' ; read""", cfg
    // # cp = CP.exec '''echo '' ; echo -en 'x两\\x1b[6n' ; tmux display-message -p '两: #{cursor_x}' >> /tmp/output''', cfg
    // cp.stdin.resume()
    // cp.stdin.setEncoding  'utf-8' # 0
    // cp.stdout.setEncoding 'utf-8' # 1
    // cp.stderr.setEncoding 'utf-8' # 2
    // # debug 'Ωbbsfm___5', rpr cp.stdin.read()
    // # debug 'Ωbbsfm___6', rpr cp.stdout.read()
    // # debug 'Ωbbsfm___7', rpr cp.stderr.read()
    // # debug 'Ωbbsfm___8', rpr cp.read()
    // cp.stdin.on  'data', ( data ) -> help 'Ωbbsfm___9', rpr data # 0
    // cp.stdout.on 'data', ( data ) -> urge 'Ωbbsfm__10', rpr data # 1
    // cp.stderr.on 'data', ( data ) -> warn 'Ωbbsfm__11', rpr data # 2
    // echo '—————————————————————————————————————————————'
    // cp = CP.spawn 'echo', [ '-en', 'xxxxxxxxx\x1b[6n', ], cfg
    // # cp = CP.spawn 'ls', [ '-AlF', ], cfg
    // cp.stdin.setEncoding  'utf-8'
    // cp.stdout.setEncoding 'utf-8'
    // cp.stderr.setEncoding 'utf-8'
    // # debug 'Ωbbsfm__12', rpr cp.stdin.read()
    // # debug 'Ωbbsfm__13', rpr cp.stdout.read()
    // # debug 'Ωbbsfm__14', rpr cp.stderr.read()
    // # debug 'Ωbbsfm__15', rpr cp.read()
    // cp.stdin.on  'data', ( data ) -> help 'Ωbbsfm__16', rpr data # 0
    // cp.stdout.on 'data', ( data ) -> urge 'Ωbbsfm__17', rpr data # 1
    // cp.stderr.on 'data', ( data ) -> warn 'Ωbbsfm__18', rpr data # 2

    // illegal_codepoints: [ # see https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Special_code_points
    //   [   0x0000,   0x0000, ] # zero
    //   [   0x0001,   0x001f, ] # lower controls
    //   [   0x007f,   0x009f, ] # higher controls
    //   [   0xd800,   0xdfff, ] # surrogates
    //   [   0xfdd0,   0xfdef, ]
    //   [   0xfffe,   0xffff, ]
    //   [  0x1fffe,  0x1ffff, ]
    //   [  0x2fffe,  0x2ffff, ]
    //   [  0x3fffe,  0x3ffff, ]
    //   [  0x4fffe,  0x4ffff, ]
    //   [  0x5fffe,  0x5ffff, ]
    //   [  0x6fffe,  0x6ffff, ]
    //   [  0x7fffe,  0x7ffff, ]
    //   [  0x8fffe,  0x8ffff, ]
    //   [  0x9fffe,  0x9ffff, ]
    //   [  0xafffe,  0xaffff, ]
    //   [  0xbfffe,  0xbffff, ]
    //   [  0xcfffe,  0xcffff, ]
    //   [  0xdfffe,  0xdffff, ]
    //   [  0xefffe,  0xeffff, ]
    //   [  0xffffe,  0xfffff, ]
    //   [ 0x10fffe, 0x10ffff, ] ]
    illegal_codepoint_patterns = {
      unassigned: /^\p{Cn}$/v, // Control
      control: /^\p{C}$/v, // Control
      // surrogate:  ///^\p{C}$///v # Surrogate
      letter: /^\p{L}$/v,
      space: /^\p{Zs}$/v,
      separator: /^\p{Z}$/v,
      mark: /^\p{M}$/v
    };
    ucc_patterns = {
      Cc: {
        code: 'Cc',
        pattern: /^\p{Cc}$/v,
        name: "Other, Control"
      },
      Cf: {
        code: 'Cf',
        pattern: /^\p{Cf}$/v,
        name: "Other, Format"
      },
      Cn: {
        code: 'Cn',
        pattern: /^\p{Cn}$/v,
        name: "Other, Not Assigned"
      },
      Co: {
        code: 'Co',
        pattern: /^\p{Co}$/v,
        name: "Other, Private Use"
      },
      Cs: {
        code: 'Cs',
        pattern: /^\p{Cs}$/v,
        name: "Other, Surrogate"
      },
      LC: {
        code: 'LC',
        pattern: /^\p{LC}$/v,
        name: "Letter, Cased"
      },
      Ll: {
        code: 'Ll',
        pattern: /^\p{Ll}$/v,
        name: "Letter, Lowercase"
      },
      Lm: {
        code: 'Lm',
        pattern: /^\p{Lm}$/v,
        name: "Letter, Modifier"
      },
      Lo: {
        code: 'Lo',
        pattern: /^\p{Lo}$/v,
        name: "Letter, Other"
      },
      Lt: {
        code: 'Lt',
        pattern: /^\p{Lt}$/v,
        name: "Letter, Titlecase"
      },
      Lu: {
        code: 'Lu',
        pattern: /^\p{Lu}$/v,
        name: "Letter, Uppercase"
      },
      Mc: {
        code: 'Mc',
        pattern: /^\p{Mc}$/v,
        name: "Mark, Spacing Combining"
      },
      Me: {
        code: 'Me',
        pattern: /^\p{Me}$/v,
        name: "Mark, Enclosing"
      },
      Mn: {
        code: 'Mn',
        pattern: /^\p{Mn}$/v,
        name: "Mark, Nonspacing"
      },
      Nd: {
        code: 'Nd',
        pattern: /^\p{Nd}$/v,
        name: "Number, Decimal Digit"
      },
      Nl: {
        code: 'Nl',
        pattern: /^\p{Nl}$/v,
        name: "Number, Letter"
      },
      No: {
        code: 'No',
        pattern: /^\p{No}$/v,
        name: "Number, Other"
      },
      Pc: {
        code: 'Pc',
        pattern: /^\p{Pc}$/v,
        name: "Punctuation, Connector"
      },
      Pd: {
        code: 'Pd',
        pattern: /^\p{Pd}$/v,
        name: "Punctuation, Dash"
      },
      Pe: {
        code: 'Pe',
        pattern: /^\p{Pe}$/v,
        name: "Punctuation, Close"
      },
      Pf: {
        code: 'Pf',
        pattern: /^\p{Pf}$/v,
        name: "Punctuation, Final quote"
      },
      Pi: {
        code: 'Pi',
        pattern: /^\p{Pi}$/v,
        name: "Punctuation, Initial quote"
      },
      Po: {
        code: 'Po',
        pattern: /^\p{Po}$/v,
        name: "Punctuation, Other"
      },
      Ps: {
        code: 'Ps',
        pattern: /^\p{Ps}$/v,
        name: "Punctuation, Open"
      },
      Sc: {
        code: 'Sc',
        pattern: /^\p{Sc}$/v,
        name: "Symbol, Currency"
      },
      Sk: {
        code: 'Sk',
        pattern: /^\p{Sk}$/v,
        name: "Symbol, Modifier"
      },
      Sm: {
        code: 'Sm',
        pattern: /^\p{Sm}$/v,
        name: "Symbol, Math"
      },
      So: {
        code: 'So',
        pattern: /^\p{So}$/v,
        name: "Symbol, Other"
      },
      Zl: {
        code: 'Zl',
        pattern: /^\p{Zl}$/v,
        name: "Separator, Line"
      },
      Zp: {
        code: 'Zp',
        pattern: /^\p{Zp}$/v,
        name: "Separator, Paragraph"
      },
      Zs: {
        code: 'Zs',
        pattern: /^\p{Zs}$/v,
        name: "Separator, Space"
      }
    };
    ucc_descriptor_from_chr = function(chr) {
      var _, dsc;
      for (_ in ucc_patterns) {
        dsc = ucc_patterns[_];
        if (dsc.pattern.test(chr)) {
          return dsc;
        }
      }
      throw new Error("Ωbbsfm__19 unable to determine Unicode category code");
    };
    get_rough_unicode_category = function(chr) {
      var name, pattern;
      for (name in illegal_codepoint_patterns) {
        pattern = illegal_codepoint_patterns[name];
        if (pattern.test(chr)) {
          return name;
        }
      }
      return 'other';
    };
    // echo """#!/usr/bin/env bash"""
    // echo """set -euo pipefail"""
    // echo """echo -ne '' > /tmp/output"""
    f = function() {};
    //   for range in ranges
    //     for cid in range
    //       cid_hex = "U+#{( cid.toString 16 ).padStart 4, '0'}"
    //       chr     = String.fromCodePoint cid
    //       ucc     = get_rough_unicode_category chr
    //       debug 'Ωbbsfm__20', cid_hex, ( rpr chr ), ucc
    //       switch ucc
    //         when 'control', 'separator'
    //           echo """echo "#{cid_hex}: 0" >> /tmp/output"""
    //         when 'space', 'mark'
    //           # echo """echo ; echo -ne "x#{chr}\\x1b[6n" ; IFS=';' read -sdR -p $'\\E[6n' ROW COL ; echo "#{cid_hex}: $COL" >> /tmp/output"""
    //           echo """echo '' ; echo -en 'xx#{chr}\\x1b[6n' ; tmux display-message -p '#{cid_hex}: \#{cursor_x}' >> /tmp/output"""
    //         else
    //           # echo """echo ; echo -ne "x#{chr}\\x1b[6n" ; IFS=';' read -sdR -p $'\\E[6n' ROW COL ; echo "#{chr}: $COL" >> /tmp/output"""
    //           echo """echo '' ; echo -en 'xx#{chr}\\x1b[6n' ; tmux display-message -p '#{chr}: \#{cursor_x}' >> /tmp/output"""
    //   return null
    // debug 'Ωbbsfm__21', ( glyph = '🙋🏽' ), Array.from glyph
    // debug 'Ωbbsfm__22', ( glyph = 'x쒇' ), Array.from glyph
    // debug 'Ωbbsfm__23', ( glyph = 'x별' ), Array.from glyph
    // debug 'Ωbbsfm__24', ( glyph = 'xㅂ ㅕ ㄹ' ), Array.from glyph
    // debug 'Ωbbsfm__25', ( glyph = 'xㅂㅕㄹ' ), Array.from glyph
    // debug 'Ωbbsfm__26', ( glyph = 'x벼ᄅ' ), Array.from glyph
    // debug 'Ωbbsfm__27', ( glyph = 'xᄇ\u{200D}ᅧ\u{200D}ᆯ' ), Array.from glyph
    // debug 'Ωbbsfm__28', ( glyph = 'xﾲￊﾩ' ), Array.from glyph

    // echo """echo 'xx' | wc --max-line-length"""                   # 2
    // echo """echo 'x🙋🏽' | wc --max-line-length"""                  # 5
    // echo """echo 'x쒇' | wc --max-line-length"""                   # 3
    // echo """echo 'x별' | wc --max-line-length"""                   # 3
    // echo """echo 'xㅂ ㅕ ㄹ' | wc --max-line-length"""               # 9
    // echo """echo 'xㅂㅕㄹ' | wc --max-line-length"""                 # 7
    // echo """echo 'x벼ᄅ' | wc --max-line-length"""                 # 5
    // echo """echo 'xᄇ\u{200D}ᅧ\u{200D}ᆯ' | wc --max-line-length""" # 3
    // echo """echo 'xﾲￊﾩ' | wc --max-line-length"""                 # 4
    // echo """echo 'xa︠b︡' | wc --max-line-length"""                # 3
    // echo """echo 'xâ' | wc --max-line-length"""                  # 2
    CP = require('node:child_process');
    texts = [
      'xxx', // 2
      'x🙋🏽x', // 5
      'x쒇x', // 3
      'x별x', // 3
      'xㅂ ㅕ ㄹx', // 9
      'xㅂㅕㄹx', // 7
      'xﾲￊﾩx', // 4
      'x별Lx', // 4
      'xa︠b︡x', // 3
      'xa︠b︡x', // 3
      'xâx', // 2
      'x𓃵x',
      'x﷽x'
    ];
    get_wc_max_line_length = function(text) {
      /* thx to https://unix.stackexchange.com/a/258551/280204 */
      var width1_txt;
      width1_txt = CP.execSync(`echo ${rpr(text)} | wc --max-line-length`, {
        encoding: 'utf-8'
      });
      return parseInt(width1_txt, 10);
    };
    // for text in texts
    //   echo 'Ωbbsfm__29', ( rpr text ), ( get_wc_max_line_length text ) - 2
    ranges = [
      (function() {
        var results = [];
        for (var i = 0x00_0000; i <= 65535; i++){ results.push(i); }
        return results;
      }).apply(this)
    ];
    // [ 0x00_0000 .. 0x00_00ff ]
    // [ 0x000000 .. 0x000200 ]
    // [ 0x00ff00 .. 0x0100ff ]
    // [ 0x013000 .. 0x0130ff ]
    demo_wc_max_line_length = function() {
      var chr, cid, cid_hex, i, j, len, len1, range, ucc;
      for (i = 0, len = ranges.length; i < len; i++) {
        range = ranges[i];
        for (j = 0, len1 = range.length; j < len1; j++) {
          cid = range[j];
          cid_hex = `U+${(cid.toString(16)).padStart(4, '0')}`;
          chr = String.fromCodePoint(cid);
          ucc = get_rough_unicode_category(chr);
          // debug 'Ωbbsfm__30', cid_hex, ( rpr chr ), ucc
          echo(cid_hex, (get_wc_max_line_length(`x${chr}x`)) - 2);
        }
      }
      // switch ucc
      //   when 'control', 'separator'
      //     echo """echo "#{cid_hex}: 0" >> /tmp/output"""
      //   when 'space', 'mark'
      //     # echo """echo ; echo -ne "x#{chr}\\x1b[6n" ; IFS=';' read -sdR -p $'\\E[6n' ROW COL ; echo "#{cid_hex}: $COL" >> /tmp/output"""
      //     echo """echo '' ; echo -en 'xx#{chr}\\x1b[6n' ; tmux display-message -p '#{cid_hex}: \#{cursor_x}' >> /tmp/output"""
      //   else
      //     # echo """echo ; echo -ne "x#{chr}\\x1b[6n" ; IFS=';' read -sdR -p $'\\E[6n' ROW COL ; echo "#{chr}: $COL" >> /tmp/output"""
      //     echo """echo '' ; echo -en 'xx#{chr}\\x1b[6n' ; tmux display-message -p '#{chr}: \#{cursor_x}' >> /tmp/output"""
      return null;
    };
    CP = require('node:child_process');
    use_open_process_to_execute_shell_commands = function() {
      var chr, cid, cid_hex, cp, i, j, len, len1, range, text, ucc;
      cp = CP.spawn("bash", [], {
        encoding: 'utf-8'
      });
      cp.stdin.setEncoding('utf-8');
      cp.stdout.setEncoding('utf-8');
      cp.stderr.setEncoding('utf-8');
      cp.stdin.on('data', function(data) {
        return help('Ωbbsfm__31', rpr(data)); // 0
      });
      // cp.stdout.on 'data', ( data ) -> urge 'Ωbbsfm__32', rpr data # 1
      cp.stdout.on('data', function(data) {
        return echo(data); // 1
      });
      cp.stderr.on('data', function(data) {
        return warn('Ωbbsfm__33', data); // 2
      });
      // cp.stdin.write """echo -ne 'text' | tee >(wc --max-line-length) >(echo -ne)\n"""
      // cp.stdin.write """echo -ne 'ᄑ<1171><11b6>' | tee >(wc --max-line-length) >(echo -ne)\n"""
      text = '쒇';
      cp.stdin.write(`length="$(echo ${rpr(text)} | wc --max-line-length)" ; echo "${text} $length"\n`);
      for (i = 0, len = ranges.length; i < len; i++) {
        range = ranges[i];
        for (j = 0, len1 = range.length; j < len1; j++) {
          cid = range[j];
          cid_hex = `U+${(cid.toString(16)).padStart(6, '0')}`;
          chr = String.fromCodePoint(cid);
          ucc = get_rough_unicode_category(chr);
          text = `${cid_hex}x${chr}x`;
          switch (ucc) {
            case 'control':
            case 'separator':
              null;
              break;
            // echo """echo "#{cid_hex}: 0" >> /tmp/output"""
            case 'letter':
            case 'space':
            case 'mark':
            case 'other':
              echo(text);
          }
        }
      }
      return null;
    };
    // cp.stdin.write """\n"""
    // cp.end()
    // use_open_process_to_execute_shell_commands()
    // demo_wc_max_line_length()
    write_unicode_chrs = function() {
      var chr, cid, cid_hex, i, j, len, len1, range, text, ucc;
      for (i = 0, len = ranges.length; i < len; i++) {
        range = ranges[i];
        for (j = 0, len1 = range.length; j < len1; j++) {
          cid = range[j];
          cid_hex = `U${(cid.toString(16)).padStart(6, '0')}`;
          chr = String.fromCodePoint(cid);
          ucc = get_rough_unicode_category(chr);
          text = `${cid_hex}|x${chr}x`;
          switch (ucc) {
            case 'control':
            case 'separator':
              null;
              break;
            case 'letter':
            case 'space':
            case 'mark':
            case 'other':
              echo(text);
          }
        }
      }
      return null;
    };
// write_unicode_chrs()
    for (cid = i = 0x00; i <= 48; cid = ++i) {
      cid_hex = `0x${(cid.toString(16)).padStart(4, '0')}`;
      debug('Ωbbsfm__34', `${cid}`.padStart(6, ' '), cid_hex, (cid & 0b1111_0000) >> 4, (cid & 0b000_1111) << 1);
    }
    bitfield = new Uint32Array([1, 0xffff_ffff, 3, 4, 5]);
    debug('Ωbbsfm__35', (bitfield[0].toString(2)).padStart(32, '.'));
    debug('Ωbbsfm__36', (bitfield[1].toString(2)).padStart(32, '.'));
    bitfield[1] += 0x1;
    debug('Ωbbsfm__37', (bitfield[1].toString(2)).padStart(32, '.'));
    debug('Ωbbsfm__38', (bitfield[2].toString(2)).padStart(32, '.'));
    debug('Ωbbsfm__39', (bitfield[3].toString(2)).padStart(32, '.'));
    debug('Ωbbsfm__40', (bitfield[4].toString(2)).padStart(32, '.'));
    findCacheDirectory = (require('find-cache-directory')).default;
    debug('Ωbbsfm__41', findCacheDirectory({
      name: 'effstring',
      create: true
    }));
    envPaths = (require('env-paths')).default;
    ref = envPaths('effstring');
    for (k in ref) {
      v = ref[k];
      debug('Ωbbsfm__42', k, v);
    }
    // findCacheDirectory({name: 'unicorns'});
    // //=> '/user/path/node-modules/.cache/unicorns'
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      await ramble();
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JhbWJsaW5nLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFVBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FB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QTtNQUN0QyxNQUFNLE1BQUEsQ0FBQTtBQUNOLGFBQU87SUFGK0IsQ0FBQSxJQUF4Qzs7QUExVEEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAncmFtYmxpbmcnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuXG5yYW1ibGUgPSA9PlxuICAjIGVjaG8gXCJcXHgxYls2bnh5elwiXG4gICMgZWNobyBcImFiY1xceDFiWzZueHl6XCJcbiAgIyBlY2hvIFwiYWJjZGVmXFx4MWJbNm54eXpcIlxuICAjIGVjaG8gXCJhYmNkZWbwk4KLXFx4MWJbNm54eXpcIlxuICAjIGVjaG8gXCJhYmNkZWbkuKRcXHgxYls2bnh5elwiXG4gICMgZWNobyBcImFiY2RlZvCsurFcXHgxYls2bnh5elwiXG4gICMgZWNobyBcImFiY2RlZvCSgb5cXHgxYls2bnh5elwiXG4gICMgZiA9ICggY3R4ICkgLT4gZGVidWcgJ86pYmJzZm1fX18xJywgY3R4LmFyZ3VtZW50c1xuICAjIGcgPSAoIFAuLi4gKSAtPiBkZWJ1ZyAnzqliYnNmbV9fXzInLCBmIHsgYXJndW1lbnRzLCB9XG4gICMgZyA1LCAnZCdcbiAgIyBDUCA9IHJlcXVpcmUgJ25vZGU6Y2hpbGRfcHJvY2VzcydcbiAgIyBjZmcgPVxuICAjICAgZW5jb2Rpbmc6ICd1dGYtOCdcbiAgIyAgIHN0ZGluOiAgICAnaW5oZXJpdCdcbiAgIyAgIHN0ZG91dDogICAnaW5oZXJpdCdcbiAgIyAgIHN0ZGVycjogICAnaW5oZXJpdCdcbiAgIyAjIGRlYnVnICfOqWJic2ZtX19fMycsIENQLmV4ZWNTeW5jIFwibHNcIiwgY2ZnXG4gICMgIyBkZWJ1ZyAnzqliYnNmbV9fXzQnLCBDUC5leGVjIFwiXCJcImVjaG8gLWVuIFwieHh4eHh4eHh4XFx4MWJbNm5cIiA7IHJlYWRcXG5cIlwiXCIsIGNmZ1xuICAjICMgeyBzdGRpbiwgc3Rkb3V0LCBzdGRlcnIsIH0gPVxuICAjIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgIyBjcCA9IENQLmV4ZWMgXCJcIlwiZWNobyAtZW4gJ3h4eHh4eHh4eFxceDFiWzZuJ1wiXCJcIiwgY2ZnXG4gICMgIyBjcCA9IENQLmV4ZWMgXCJcIlwiZWNobyAtZW4gJ3h4eHh4eHh4eFxceDFiWzZuJyA7IHJlYWRcIlwiXCIsIGNmZ1xuICAjICMgY3AgPSBDUC5leGVjICcnJ2VjaG8gJycgOyBlY2hvIC1lbiAneOS4pFxcXFx4MWJbNm4nIDsgdG11eCBkaXNwbGF5LW1lc3NhZ2UgLXAgJ+S4pDogI3tjdXJzb3JfeH0nID4+IC90bXAvb3V0cHV0JycnLCBjZmdcbiAgIyBjcC5zdGRpbi5yZXN1bWUoKVxuICAjIGNwLnN0ZGluLnNldEVuY29kaW5nICAndXRmLTgnICMgMFxuICAjIGNwLnN0ZG91dC5zZXRFbmNvZGluZyAndXRmLTgnICMgMVxuICAjIGNwLnN0ZGVyci5zZXRFbmNvZGluZyAndXRmLTgnICMgMlxuICAjICMgZGVidWcgJ86pYmJzZm1fX181JywgcnByIGNwLnN0ZGluLnJlYWQoKVxuICAjICMgZGVidWcgJ86pYmJzZm1fX182JywgcnByIGNwLnN0ZG91dC5yZWFkKClcbiAgIyAjIGRlYnVnICfOqWJic2ZtX19fNycsIHJwciBjcC5zdGRlcnIucmVhZCgpXG4gICMgIyBkZWJ1ZyAnzqliYnNmbV9fXzgnLCBycHIgY3AucmVhZCgpXG4gICMgY3Auc3RkaW4ub24gICdkYXRhJywgKCBkYXRhICkgLT4gaGVscCAnzqliYnNmbV9fXzknLCBycHIgZGF0YSAjIDBcbiAgIyBjcC5zdGRvdXQub24gJ2RhdGEnLCAoIGRhdGEgKSAtPiB1cmdlICfOqWJic2ZtX18xMCcsIHJwciBkYXRhICMgMVxuICAjIGNwLnN0ZGVyci5vbiAnZGF0YScsICggZGF0YSApIC0+IHdhcm4gJ86pYmJzZm1fXzExJywgcnByIGRhdGEgIyAyXG4gICMgZWNobyAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICAjIGNwID0gQ1Auc3Bhd24gJ2VjaG8nLCBbICctZW4nLCAneHh4eHh4eHh4XFx4MWJbNm4nLCBdLCBjZmdcbiAgIyAjIGNwID0gQ1Auc3Bhd24gJ2xzJywgWyAnLUFsRicsIF0sIGNmZ1xuICAjIGNwLnN0ZGluLnNldEVuY29kaW5nICAndXRmLTgnXG4gICMgY3Auc3Rkb3V0LnNldEVuY29kaW5nICd1dGYtOCdcbiAgIyBjcC5zdGRlcnIuc2V0RW5jb2RpbmcgJ3V0Zi04J1xuICAjICMgZGVidWcgJ86pYmJzZm1fXzEyJywgcnByIGNwLnN0ZGluLnJlYWQoKVxuICAjICMgZGVidWcgJ86pYmJzZm1fXzEzJywgcnByIGNwLnN0ZG91dC5yZWFkKClcbiAgIyAjIGRlYnVnICfOqWJic2ZtX18xNCcsIHJwciBjcC5zdGRlcnIucmVhZCgpXG4gICMgIyBkZWJ1ZyAnzqliYnNmbV9fMTUnLCBycHIgY3AucmVhZCgpXG4gICMgY3Auc3RkaW4ub24gICdkYXRhJywgKCBkYXRhICkgLT4gaGVscCAnzqliYnNmbV9fMTYnLCBycHIgZGF0YSAjIDBcbiAgIyBjcC5zdGRvdXQub24gJ2RhdGEnLCAoIGRhdGEgKSAtPiB1cmdlICfOqWJic2ZtX18xNycsIHJwciBkYXRhICMgMVxuICAjIGNwLnN0ZGVyci5vbiAnZGF0YScsICggZGF0YSApIC0+IHdhcm4gJ86pYmJzZm1fXzE4JywgcnByIGRhdGEgIyAyXG5cbiAgIyBpbGxlZ2FsX2NvZGVwb2ludHM6IFsgIyBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pdmVyc2FsX0NoYXJhY3Rlcl9TZXRfY2hhcmFjdGVycyNTcGVjaWFsX2NvZGVfcG9pbnRzXG4gICMgICBbICAgMHgwMDAwLCAgIDB4MDAwMCwgXSAjIHplcm9cbiAgIyAgIFsgICAweDAwMDEsICAgMHgwMDFmLCBdICMgbG93ZXIgY29udHJvbHNcbiAgIyAgIFsgICAweDAwN2YsICAgMHgwMDlmLCBdICMgaGlnaGVyIGNvbnRyb2xzXG4gICMgICBbICAgMHhkODAwLCAgIDB4ZGZmZiwgXSAjIHN1cnJvZ2F0ZXNcbiAgIyAgIFsgICAweGZkZDAsICAgMHhmZGVmLCBdXG4gICMgICBbICAgMHhmZmZlLCAgIDB4ZmZmZiwgXVxuICAjICAgWyAgMHgxZmZmZSwgIDB4MWZmZmYsIF1cbiAgIyAgIFsgIDB4MmZmZmUsICAweDJmZmZmLCBdXG4gICMgICBbICAweDNmZmZlLCAgMHgzZmZmZiwgXVxuICAjICAgWyAgMHg0ZmZmZSwgIDB4NGZmZmYsIF1cbiAgIyAgIFsgIDB4NWZmZmUsICAweDVmZmZmLCBdXG4gICMgICBbICAweDZmZmZlLCAgMHg2ZmZmZiwgXVxuICAjICAgWyAgMHg3ZmZmZSwgIDB4N2ZmZmYsIF1cbiAgIyAgIFsgIDB4OGZmZmUsICAweDhmZmZmLCBdXG4gICMgICBbICAweDlmZmZlLCAgMHg5ZmZmZiwgXVxuICAjICAgWyAgMHhhZmZmZSwgIDB4YWZmZmYsIF1cbiAgIyAgIFsgIDB4YmZmZmUsICAweGJmZmZmLCBdXG4gICMgICBbICAweGNmZmZlLCAgMHhjZmZmZiwgXVxuICAjICAgWyAgMHhkZmZmZSwgIDB4ZGZmZmYsIF1cbiAgIyAgIFsgIDB4ZWZmZmUsICAweGVmZmZmLCBdXG4gICMgICBbICAweGZmZmZlLCAgMHhmZmZmZiwgXVxuICAjICAgWyAweDEwZmZmZSwgMHgxMGZmZmYsIF0gXVxuXG4gIGlsbGVnYWxfY29kZXBvaW50X3BhdHRlcm5zID1cbiAgICB1bmFzc2lnbmVkOiAvLy9eXFxwe0NufSQvLy92ICMgQ29udHJvbFxuICAgIGNvbnRyb2w6ICAgIC8vL15cXHB7Q30kLy8vdiAjIENvbnRyb2xcbiAgICAjIHN1cnJvZ2F0ZTogIC8vL15cXHB7Q30kLy8vdiAjIFN1cnJvZ2F0ZVxuICAgIGxldHRlcjogICAgIC8vL15cXHB7TH0kLy8vdlxuICAgIHNwYWNlOiAgICAgIC8vL15cXHB7WnN9JC8vL3ZcbiAgICBzZXBhcmF0b3I6ICAvLy9eXFxwe1p9JC8vL3ZcbiAgICBtYXJrOiAgICAgICAvLy9eXFxwe019JC8vL3ZcblxuICB1Y2NfcGF0dGVybnMgPVxuICAgIENjOiB7IGNvZGU6ICdDYycsIHBhdHRlcm46IC8vL15cXHB7Q2N9JC8vL3YsIG5hbWU6IFwiT3RoZXIsIENvbnRyb2xcIiwgICAgICAgICAgICAgICB9XG4gICAgQ2Y6IHsgY29kZTogJ0NmJywgcGF0dGVybjogLy8vXlxccHtDZn0kLy8vdiwgbmFtZTogXCJPdGhlciwgRm9ybWF0XCIsICAgICAgICAgICAgICAgIH1cbiAgICBDbjogeyBjb2RlOiAnQ24nLCBwYXR0ZXJuOiAvLy9eXFxwe0NufSQvLy92LCBuYW1lOiBcIk90aGVyLCBOb3QgQXNzaWduZWRcIiwgICAgICAgICAgfVxuICAgIENvOiB7IGNvZGU6ICdDbycsIHBhdHRlcm46IC8vL15cXHB7Q299JC8vL3YsIG5hbWU6IFwiT3RoZXIsIFByaXZhdGUgVXNlXCIsICAgICAgICAgICB9XG4gICAgQ3M6IHsgY29kZTogJ0NzJywgcGF0dGVybjogLy8vXlxccHtDc30kLy8vdiwgbmFtZTogXCJPdGhlciwgU3Vycm9nYXRlXCIsICAgICAgICAgICAgIH1cbiAgICBMQzogeyBjb2RlOiAnTEMnLCBwYXR0ZXJuOiAvLy9eXFxwe0xDfSQvLy92LCBuYW1lOiBcIkxldHRlciwgQ2FzZWRcIiwgICAgICAgICAgICAgICAgfVxuICAgIExsOiB7IGNvZGU6ICdMbCcsIHBhdHRlcm46IC8vL15cXHB7TGx9JC8vL3YsIG5hbWU6IFwiTGV0dGVyLCBMb3dlcmNhc2VcIiwgICAgICAgICAgICB9XG4gICAgTG06IHsgY29kZTogJ0xtJywgcGF0dGVybjogLy8vXlxccHtMbX0kLy8vdiwgbmFtZTogXCJMZXR0ZXIsIE1vZGlmaWVyXCIsICAgICAgICAgICAgIH1cbiAgICBMbzogeyBjb2RlOiAnTG8nLCBwYXR0ZXJuOiAvLy9eXFxwe0xvfSQvLy92LCBuYW1lOiBcIkxldHRlciwgT3RoZXJcIiwgICAgICAgICAgICAgICAgfVxuICAgIEx0OiB7IGNvZGU6ICdMdCcsIHBhdHRlcm46IC8vL15cXHB7THR9JC8vL3YsIG5hbWU6IFwiTGV0dGVyLCBUaXRsZWNhc2VcIiwgICAgICAgICAgICB9XG4gICAgTHU6IHsgY29kZTogJ0x1JywgcGF0dGVybjogLy8vXlxccHtMdX0kLy8vdiwgbmFtZTogXCJMZXR0ZXIsIFVwcGVyY2FzZVwiLCAgICAgICAgICAgIH1cbiAgICBNYzogeyBjb2RlOiAnTWMnLCBwYXR0ZXJuOiAvLy9eXFxwe01jfSQvLy92LCBuYW1lOiBcIk1hcmssIFNwYWNpbmcgQ29tYmluaW5nXCIsICAgICAgfVxuICAgIE1lOiB7IGNvZGU6ICdNZScsIHBhdHRlcm46IC8vL15cXHB7TWV9JC8vL3YsIG5hbWU6IFwiTWFyaywgRW5jbG9zaW5nXCIsICAgICAgICAgICAgICB9XG4gICAgTW46IHsgY29kZTogJ01uJywgcGF0dGVybjogLy8vXlxccHtNbn0kLy8vdiwgbmFtZTogXCJNYXJrLCBOb25zcGFjaW5nXCIsICAgICAgICAgICAgIH1cbiAgICBOZDogeyBjb2RlOiAnTmQnLCBwYXR0ZXJuOiAvLy9eXFxwe05kfSQvLy92LCBuYW1lOiBcIk51bWJlciwgRGVjaW1hbCBEaWdpdFwiLCAgICAgICAgfVxuICAgIE5sOiB7IGNvZGU6ICdObCcsIHBhdHRlcm46IC8vL15cXHB7Tmx9JC8vL3YsIG5hbWU6IFwiTnVtYmVyLCBMZXR0ZXJcIiwgICAgICAgICAgICAgICB9XG4gICAgTm86IHsgY29kZTogJ05vJywgcGF0dGVybjogLy8vXlxccHtOb30kLy8vdiwgbmFtZTogXCJOdW1iZXIsIE90aGVyXCIsICAgICAgICAgICAgICAgIH1cbiAgICBQYzogeyBjb2RlOiAnUGMnLCBwYXR0ZXJuOiAvLy9eXFxwe1BjfSQvLy92LCBuYW1lOiBcIlB1bmN0dWF0aW9uLCBDb25uZWN0b3JcIiwgICAgICAgfVxuICAgIFBkOiB7IGNvZGU6ICdQZCcsIHBhdHRlcm46IC8vL15cXHB7UGR9JC8vL3YsIG5hbWU6IFwiUHVuY3R1YXRpb24sIERhc2hcIiwgICAgICAgICAgICB9XG4gICAgUGU6IHsgY29kZTogJ1BlJywgcGF0dGVybjogLy8vXlxccHtQZX0kLy8vdiwgbmFtZTogXCJQdW5jdHVhdGlvbiwgQ2xvc2VcIiwgICAgICAgICAgIH1cbiAgICBQZjogeyBjb2RlOiAnUGYnLCBwYXR0ZXJuOiAvLy9eXFxwe1BmfSQvLy92LCBuYW1lOiBcIlB1bmN0dWF0aW9uLCBGaW5hbCBxdW90ZVwiLCAgICAgfVxuICAgIFBpOiB7IGNvZGU6ICdQaScsIHBhdHRlcm46IC8vL15cXHB7UGl9JC8vL3YsIG5hbWU6IFwiUHVuY3R1YXRpb24sIEluaXRpYWwgcXVvdGVcIiwgICB9XG4gICAgUG86IHsgY29kZTogJ1BvJywgcGF0dGVybjogLy8vXlxccHtQb30kLy8vdiwgbmFtZTogXCJQdW5jdHVhdGlvbiwgT3RoZXJcIiwgICAgICAgICAgIH1cbiAgICBQczogeyBjb2RlOiAnUHMnLCBwYXR0ZXJuOiAvLy9eXFxwe1BzfSQvLy92LCBuYW1lOiBcIlB1bmN0dWF0aW9uLCBPcGVuXCIsICAgICAgICAgICAgfVxuICAgIFNjOiB7IGNvZGU6ICdTYycsIHBhdHRlcm46IC8vL15cXHB7U2N9JC8vL3YsIG5hbWU6IFwiU3ltYm9sLCBDdXJyZW5jeVwiLCAgICAgICAgICAgICB9XG4gICAgU2s6IHsgY29kZTogJ1NrJywgcGF0dGVybjogLy8vXlxccHtTa30kLy8vdiwgbmFtZTogXCJTeW1ib2wsIE1vZGlmaWVyXCIsICAgICAgICAgICAgIH1cbiAgICBTbTogeyBjb2RlOiAnU20nLCBwYXR0ZXJuOiAvLy9eXFxwe1NtfSQvLy92LCBuYW1lOiBcIlN5bWJvbCwgTWF0aFwiLCAgICAgICAgICAgICAgICAgfVxuICAgIFNvOiB7IGNvZGU6ICdTbycsIHBhdHRlcm46IC8vL15cXHB7U299JC8vL3YsIG5hbWU6IFwiU3ltYm9sLCBPdGhlclwiLCAgICAgICAgICAgICAgICB9XG4gICAgWmw6IHsgY29kZTogJ1psJywgcGF0dGVybjogLy8vXlxccHtabH0kLy8vdiwgbmFtZTogXCJTZXBhcmF0b3IsIExpbmVcIiwgICAgICAgICAgICAgIH1cbiAgICBacDogeyBjb2RlOiAnWnAnLCBwYXR0ZXJuOiAvLy9eXFxwe1pwfSQvLy92LCBuYW1lOiBcIlNlcGFyYXRvciwgUGFyYWdyYXBoXCIsICAgICAgICAgfVxuICAgIFpzOiB7IGNvZGU6ICdacycsIHBhdHRlcm46IC8vL15cXHB7WnN9JC8vL3YsIG5hbWU6IFwiU2VwYXJhdG9yLCBTcGFjZVwiLCAgICAgICAgICAgICB9XG5cbiAgdWNjX2Rlc2NyaXB0b3JfZnJvbV9jaHIgPSAoIGNociApIC0+XG4gICAgZm9yIF8sIGRzYyBvZiB1Y2NfcGF0dGVybnNcbiAgICAgIHJldHVybiBkc2MgaWYgZHNjLnBhdHRlcm4udGVzdCBjaHJcbiAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqWJic2ZtX18xOSB1bmFibGUgdG8gZGV0ZXJtaW5lIFVuaWNvZGUgY2F0ZWdvcnkgY29kZVwiXG5cbiAgZ2V0X3JvdWdoX3VuaWNvZGVfY2F0ZWdvcnkgPSAoIGNociApIC0+XG4gICAgZm9yIG5hbWUsIHBhdHRlcm4gb2YgaWxsZWdhbF9jb2RlcG9pbnRfcGF0dGVybnNcbiAgICAgIHJldHVybiBuYW1lIGlmIHBhdHRlcm4udGVzdCBjaHJcbiAgICByZXR1cm4gJ290aGVyJ1xuXG4gICMgZWNobyBcIlwiXCIjIS91c3IvYmluL2VudiBiYXNoXCJcIlwiXG4gICMgZWNobyBcIlwiXCJzZXQgLWV1byBwaXBlZmFpbFwiXCJcIlxuICAjIGVjaG8gXCJcIlwiZWNobyAtbmUgJycgPiAvdG1wL291dHB1dFwiXCJcIlxuXG4gIGYgPSAtPlxuICAjICAgZm9yIHJhbmdlIGluIHJhbmdlc1xuICAjICAgICBmb3IgY2lkIGluIHJhbmdlXG4gICMgICAgICAgY2lkX2hleCA9IFwiVSsjeyggY2lkLnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgNCwgJzAnfVwiXG4gICMgICAgICAgY2hyICAgICA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZFxuICAjICAgICAgIHVjYyAgICAgPSBnZXRfcm91Z2hfdW5pY29kZV9jYXRlZ29yeSBjaHJcbiAgIyAgICAgICBkZWJ1ZyAnzqliYnNmbV9fMjAnLCBjaWRfaGV4LCAoIHJwciBjaHIgKSwgdWNjXG4gICMgICAgICAgc3dpdGNoIHVjY1xuICAjICAgICAgICAgd2hlbiAnY29udHJvbCcsICdzZXBhcmF0b3InXG4gICMgICAgICAgICAgIGVjaG8gXCJcIlwiZWNobyBcIiN7Y2lkX2hleH06IDBcIiA+PiAvdG1wL291dHB1dFwiXCJcIlxuICAjICAgICAgICAgd2hlbiAnc3BhY2UnLCAnbWFyaydcbiAgIyAgICAgICAgICAgIyBlY2hvIFwiXCJcImVjaG8gOyBlY2hvIC1uZSBcIngje2Nocn1cXFxceDFiWzZuXCIgOyBJRlM9JzsnIHJlYWQgLXNkUiAtcCAkJ1xcXFxFWzZuJyBST1cgQ09MIDsgZWNobyBcIiN7Y2lkX2hleH06ICRDT0xcIiA+PiAvdG1wL291dHB1dFwiXCJcIlxuICAjICAgICAgICAgICBlY2hvIFwiXCJcImVjaG8gJycgOyBlY2hvIC1lbiAneHgje2Nocn1cXFxceDFiWzZuJyA7IHRtdXggZGlzcGxheS1tZXNzYWdlIC1wICcje2NpZF9oZXh9OiBcXCN7Y3Vyc29yX3h9JyA+PiAvdG1wL291dHB1dFwiXCJcIlxuICAjICAgICAgICAgZWxzZVxuICAjICAgICAgICAgICAjIGVjaG8gXCJcIlwiZWNobyA7IGVjaG8gLW5lIFwieCN7Y2hyfVxcXFx4MWJbNm5cIiA7IElGUz0nOycgcmVhZCAtc2RSIC1wICQnXFxcXEVbNm4nIFJPVyBDT0wgOyBlY2hvIFwiI3tjaHJ9OiAkQ09MXCIgPj4gL3RtcC9vdXRwdXRcIlwiXCJcbiAgIyAgICAgICAgICAgZWNobyBcIlwiXCJlY2hvICcnIDsgZWNobyAtZW4gJ3h4I3tjaHJ9XFxcXHgxYls2bicgOyB0bXV4IGRpc3BsYXktbWVzc2FnZSAtcCAnI3tjaHJ9OiBcXCN7Y3Vyc29yX3h9JyA+PiAvdG1wL291dHB1dFwiXCJcIlxuICAjICAgcmV0dXJuIG51bGxcbiAgIyBkZWJ1ZyAnzqliYnNmbV9fMjEnLCAoIGdseXBoID0gJ/CfmYvwn4+9JyApLCBBcnJheS5mcm9tIGdseXBoXG4gICMgZGVidWcgJ86pYmJzZm1fXzIyJywgKCBnbHlwaCA9ICd47JKHJyApLCBBcnJheS5mcm9tIGdseXBoXG4gICMgZGVidWcgJ86pYmJzZm1fXzIzJywgKCBnbHlwaCA9ICd467OEJyApLCBBcnJheS5mcm9tIGdseXBoXG4gICMgZGVidWcgJ86pYmJzZm1fXzI0JywgKCBnbHlwaCA9ICd444WCIOOFlSDjhLknICksIEFycmF5LmZyb20gZ2x5cGhcbiAgIyBkZWJ1ZyAnzqliYnNmbV9fMjUnLCAoIGdseXBoID0gJ3jjhYLjhZXjhLknICksIEFycmF5LmZyb20gZ2x5cGhcbiAgIyBkZWJ1ZyAnzqliYnNmbV9fMjYnLCAoIGdseXBoID0gJ3jhhIfhhafhhIUnICksIEFycmF5LmZyb20gZ2x5cGhcbiAgIyBkZWJ1ZyAnzqliYnNmbV9fMjcnLCAoIGdseXBoID0gJ3jhhIdcXHV7MjAwRH3hhadcXHV7MjAwRH3hhq8nICksIEFycmF5LmZyb20gZ2x5cGhcbiAgIyBkZWJ1ZyAnzqliYnNmbV9fMjgnLCAoIGdseXBoID0gJ3jvvrLvv4rvvqknICksIEFycmF5LmZyb20gZ2x5cGhcblxuICAjIGVjaG8gXCJcIlwiZWNobyAneHgnIHwgd2MgLS1tYXgtbGluZS1sZW5ndGhcIlwiXCIgICAgICAgICAgICAgICAgICAgIyAyXG4gICMgZWNobyBcIlwiXCJlY2hvICd48J+Zi/Cfj70nIHwgd2MgLS1tYXgtbGluZS1sZW5ndGhcIlwiXCIgICAgICAgICAgICAgICAgICAjIDVcbiAgIyBlY2hvIFwiXCJcImVjaG8gJ3jskocnIHwgd2MgLS1tYXgtbGluZS1sZW5ndGhcIlwiXCIgICAgICAgICAgICAgICAgICAgIyAzXG4gICMgZWNobyBcIlwiXCJlY2hvICd467OEJyB8IHdjIC0tbWF4LWxpbmUtbGVuZ3RoXCJcIlwiICAgICAgICAgICAgICAgICAgICMgM1xuICAjIGVjaG8gXCJcIlwiZWNobyAneOOFgiDjhZUg44S5JyB8IHdjIC0tbWF4LWxpbmUtbGVuZ3RoXCJcIlwiICAgICAgICAgICAgICAgIyA5XG4gICMgZWNobyBcIlwiXCJlY2hvICd444WC44WV44S5JyB8IHdjIC0tbWF4LWxpbmUtbGVuZ3RoXCJcIlwiICAgICAgICAgICAgICAgICAjIDdcbiAgIyBlY2hvIFwiXCJcImVjaG8gJ3jhhIfhhafhhIUnIHwgd2MgLS1tYXgtbGluZS1sZW5ndGhcIlwiXCIgICAgICAgICAgICAgICAgICMgNVxuICAjIGVjaG8gXCJcIlwiZWNobyAneOGEh1xcdXsyMDBEfeGFp1xcdXsyMDBEfeGGrycgfCB3YyAtLW1heC1saW5lLWxlbmd0aFwiXCJcIiAjIDNcbiAgIyBlY2hvIFwiXCJcImVjaG8gJ3jvvrLvv4rvvqknIHwgd2MgLS1tYXgtbGluZS1sZW5ndGhcIlwiXCIgICAgICAgICAgICAgICAgICMgNFxuICAjIGVjaG8gXCJcIlwiZWNobyAneGHvuKBi77ihJyB8IHdjIC0tbWF4LWxpbmUtbGVuZ3RoXCJcIlwiICAgICAgICAgICAgICAgICMgM1xuICAjIGVjaG8gXCJcIlwiZWNobyAneGHMgicgfCB3YyAtLW1heC1saW5lLWxlbmd0aFwiXCJcIiAgICAgICAgICAgICAgICAgICMgMlxuXG4gIENQID0gcmVxdWlyZSAnbm9kZTpjaGlsZF9wcm9jZXNzJ1xuICB0ZXh0cyA9IFtcbiAgICAneHh4JyAgIyAyXG4gICAgJ3jwn5mL8J+PvXgnICAjIDVcbiAgICAneOySh3gnICAjIDNcbiAgICAneOuzhHgnICAjIDNcbiAgICAneOOFgiDjhZUg44S5eCcgICAjIDlcbiAgICAneOOFguOFleOEuXgnICAjIDdcbiAgICAneO++su+/iu++qXgnICAjIDRcbiAgICAneOuzhEx4JyAgIyA0XG4gICAgJ3hh77igYu+4oXgnICAjIDNcbiAgICAneGHvuKBi77iheCcgICMgM1xuICAgICd4YcyCeCcgICMgMlxuICAgICd48JODtXgnXG4gICAgJ3jvt714J1xuICAgIF1cbiAgZ2V0X3djX21heF9saW5lX2xlbmd0aCA9ICggdGV4dCApIC0+XG4gICAgIyMjIHRoeCB0byBodHRwczovL3VuaXguc3RhY2tleGNoYW5nZS5jb20vYS8yNTg1NTEvMjgwMjA0ICMjI1xuICAgIHdpZHRoMV90eHQgID0gQ1AuZXhlY1N5bmMgXCJcIlwiZWNobyAje3JwciB0ZXh0fSB8IHdjIC0tbWF4LWxpbmUtbGVuZ3RoXCJcIlwiLCB7IGVuY29kaW5nOiAndXRmLTgnLCB9XG4gICAgcmV0dXJuIHBhcnNlSW50IHdpZHRoMV90eHQsIDEwXG4gICMgZm9yIHRleHQgaW4gdGV4dHNcbiAgIyAgIGVjaG8gJ86pYmJzZm1fXzI5JywgKCBycHIgdGV4dCApLCAoIGdldF93Y19tYXhfbGluZV9sZW5ndGggdGV4dCApIC0gMlxuXG4gIHJhbmdlcyA9IFtcbiAgICAjIFsgMHgwMF8wMDAwIC4uIDB4MTBfZmZmZiBdXG4gICAgWyAweDAwXzAwMDAgLi4gMHgwMF9mZmZmIF1cbiAgICAjIFsgMHgwMF8wMDAwIC4uIDB4MDBfMDBmZiBdXG4gICAgIyBbIDB4MDAwMDAwIC4uIDB4MDAwMjAwIF1cbiAgICAjIFsgMHgwMGZmMDAgLi4gMHgwMTAwZmYgXVxuICAgICMgWyAweDAxMzAwMCAuLiAweDAxMzBmZiBdXG4gICAgXVxuXG4gIGRlbW9fd2NfbWF4X2xpbmVfbGVuZ3RoID0gLT5cbiAgICBmb3IgcmFuZ2UgaW4gcmFuZ2VzXG4gICAgICBmb3IgY2lkIGluIHJhbmdlXG4gICAgICAgIGNpZF9oZXggPSBcIlUrI3soIGNpZC50b1N0cmluZyAxNiApLnBhZFN0YXJ0IDQsICcwJ31cIlxuICAgICAgICBjaHIgICAgID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkXG4gICAgICAgIHVjYyAgICAgPSBnZXRfcm91Z2hfdW5pY29kZV9jYXRlZ29yeSBjaHJcbiAgICAgICAgIyBkZWJ1ZyAnzqliYnNmbV9fMzAnLCBjaWRfaGV4LCAoIHJwciBjaHIgKSwgdWNjXG4gICAgICAgIGVjaG8gY2lkX2hleCwgKCBnZXRfd2NfbWF4X2xpbmVfbGVuZ3RoIFwieCN7Y2hyfXhcIiApIC0gMlxuICAgICAgICAjIHN3aXRjaCB1Y2NcbiAgICAgICAgIyAgIHdoZW4gJ2NvbnRyb2wnLCAnc2VwYXJhdG9yJ1xuICAgICAgICAjICAgICBlY2hvIFwiXCJcImVjaG8gXCIje2NpZF9oZXh9OiAwXCIgPj4gL3RtcC9vdXRwdXRcIlwiXCJcbiAgICAgICAgIyAgIHdoZW4gJ3NwYWNlJywgJ21hcmsnXG4gICAgICAgICMgICAgICMgZWNobyBcIlwiXCJlY2hvIDsgZWNobyAtbmUgXCJ4I3tjaHJ9XFxcXHgxYls2blwiIDsgSUZTPSc7JyByZWFkIC1zZFIgLXAgJCdcXFxcRVs2bicgUk9XIENPTCA7IGVjaG8gXCIje2NpZF9oZXh9OiAkQ09MXCIgPj4gL3RtcC9vdXRwdXRcIlwiXCJcbiAgICAgICAgIyAgICAgZWNobyBcIlwiXCJlY2hvICcnIDsgZWNobyAtZW4gJ3h4I3tjaHJ9XFxcXHgxYls2bicgOyB0bXV4IGRpc3BsYXktbWVzc2FnZSAtcCAnI3tjaWRfaGV4fTogXFwje2N1cnNvcl94fScgPj4gL3RtcC9vdXRwdXRcIlwiXCJcbiAgICAgICAgIyAgIGVsc2VcbiAgICAgICAgIyAgICAgIyBlY2hvIFwiXCJcImVjaG8gOyBlY2hvIC1uZSBcIngje2Nocn1cXFxceDFiWzZuXCIgOyBJRlM9JzsnIHJlYWQgLXNkUiAtcCAkJ1xcXFxFWzZuJyBST1cgQ09MIDsgZWNobyBcIiN7Y2hyfTogJENPTFwiID4+IC90bXAvb3V0cHV0XCJcIlwiXG4gICAgICAgICMgICAgIGVjaG8gXCJcIlwiZWNobyAnJyA7IGVjaG8gLWVuICd4eCN7Y2hyfVxcXFx4MWJbNm4nIDsgdG11eCBkaXNwbGF5LW1lc3NhZ2UgLXAgJyN7Y2hyfTogXFwje2N1cnNvcl94fScgPj4gL3RtcC9vdXRwdXRcIlwiXCJcbiAgICByZXR1cm4gbnVsbFxuICBDUCA9IHJlcXVpcmUgJ25vZGU6Y2hpbGRfcHJvY2VzcydcbiAgdXNlX29wZW5fcHJvY2Vzc190b19leGVjdXRlX3NoZWxsX2NvbW1hbmRzID0gLT5cbiAgICBjcCA9IENQLnNwYXduIFwiYmFzaFwiLCBbXSwgeyBlbmNvZGluZzogJ3V0Zi04JywgfVxuICAgIGNwLnN0ZGluLnNldEVuY29kaW5nICAndXRmLTgnXG4gICAgY3Auc3Rkb3V0LnNldEVuY29kaW5nICd1dGYtOCdcbiAgICBjcC5zdGRlcnIuc2V0RW5jb2RpbmcgJ3V0Zi04J1xuICAgIGNwLnN0ZGluLm9uICAnZGF0YScsICggZGF0YSApIC0+IGhlbHAgJ86pYmJzZm1fXzMxJywgcnByIGRhdGEgIyAwXG4gICAgIyBjcC5zdGRvdXQub24gJ2RhdGEnLCAoIGRhdGEgKSAtPiB1cmdlICfOqWJic2ZtX18zMicsIHJwciBkYXRhICMgMVxuICAgIGNwLnN0ZG91dC5vbiAnZGF0YScsICggZGF0YSApIC0+IGVjaG8gZGF0YSAjIDFcbiAgICBjcC5zdGRlcnIub24gJ2RhdGEnLCAoIGRhdGEgKSAtPiB3YXJuICfOqWJic2ZtX18zMycsICAgICBkYXRhICMgMlxuICAgICMgY3Auc3RkaW4ud3JpdGUgXCJcIlwiZWNobyAtbmUgJ3RleHQnIHwgdGVlID4od2MgLS1tYXgtbGluZS1sZW5ndGgpID4oZWNobyAtbmUpXFxuXCJcIlwiXG4gICAgIyBjcC5zdGRpbi53cml0ZSBcIlwiXCJlY2hvIC1uZSAn4YSRPDExNzE+PDExYjY+JyB8IHRlZSA+KHdjIC0tbWF4LWxpbmUtbGVuZ3RoKSA+KGVjaG8gLW5lKVxcblwiXCJcIlxuICAgIHRleHQgPSAn7JKHJzsgY3Auc3RkaW4ud3JpdGUgXCJcIlwibGVuZ3RoPVwiJChlY2hvICN7cnByIHRleHR9IHwgd2MgLS1tYXgtbGluZS1sZW5ndGgpXCIgOyBlY2hvIFwiI3t0ZXh0fSAkbGVuZ3RoXCJcXG5cIlwiXCJcbiAgICBmb3IgcmFuZ2UgaW4gcmFuZ2VzXG4gICAgICBmb3IgY2lkIGluIHJhbmdlXG4gICAgICAgIGNpZF9oZXggPSBcIlUrI3soIGNpZC50b1N0cmluZyAxNiApLnBhZFN0YXJ0IDYsICcwJ31cIlxuICAgICAgICBjaHIgICAgID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkXG4gICAgICAgIHVjYyAgICAgPSBnZXRfcm91Z2hfdW5pY29kZV9jYXRlZ29yeSBjaHJcbiAgICAgICAgdGV4dCAgICA9IFwiI3tjaWRfaGV4fXgje2Nocn14XCJcbiAgICAgICAgc3dpdGNoIHVjY1xuICAgICAgICAgIHdoZW4gJ2NvbnRyb2wnLCAnc2VwYXJhdG9yJ1xuICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgIyBlY2hvIFwiXCJcImVjaG8gXCIje2NpZF9oZXh9OiAwXCIgPj4gL3RtcC9vdXRwdXRcIlwiXCJcbiAgICAgICAgICB3aGVuICdsZXR0ZXInLCAnc3BhY2UnLCAnbWFyaycsICdvdGhlcidcbiAgICAgICAgICAgIGVjaG8gdGV4dFxuICAgIHJldHVybiBudWxsXG4gICAgIyBjcC5zdGRpbi53cml0ZSBcIlwiXCJcXG5cIlwiXCJcbiAgICAjIGNwLmVuZCgpXG4gICMgdXNlX29wZW5fcHJvY2Vzc190b19leGVjdXRlX3NoZWxsX2NvbW1hbmRzKClcbiAgIyBkZW1vX3djX21heF9saW5lX2xlbmd0aCgpXG4gIHdyaXRlX3VuaWNvZGVfY2hycyA9IC0+XG4gICAgZm9yIHJhbmdlIGluIHJhbmdlc1xuICAgICAgZm9yIGNpZCBpbiByYW5nZVxuICAgICAgICBjaWRfaGV4ID0gXCJVI3soIGNpZC50b1N0cmluZyAxNiApLnBhZFN0YXJ0IDYsICcwJ31cIlxuICAgICAgICBjaHIgICAgID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkXG4gICAgICAgIHVjYyAgICAgPSBnZXRfcm91Z2hfdW5pY29kZV9jYXRlZ29yeSBjaHJcbiAgICAgICAgdGV4dCAgICA9IFwiI3tjaWRfaGV4fXx4I3tjaHJ9eFwiXG4gICAgICAgIHN3aXRjaCB1Y2NcbiAgICAgICAgICB3aGVuICdjb250cm9sJywgJ3NlcGFyYXRvcidcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICB3aGVuICdsZXR0ZXInLCAnc3BhY2UnLCAnbWFyaycsICdvdGhlcidcbiAgICAgICAgICAgIGVjaG8gdGV4dFxuICAgIHJldHVybiBudWxsXG4gICMgd3JpdGVfdW5pY29kZV9jaHJzKClcbiAgZm9yIGNpZCBpbiBbIDB4MDAgLi4gMHgzMCBdXG4gICAgY2lkX2hleCA9IFwiMHgjeyggY2lkLnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgNCwgJzAnfVwiXG4gICAgZGVidWcgJ86pYmJzZm1fXzM0JywgKCBcIiN7Y2lkfVwiLnBhZFN0YXJ0IDYsICcgJyApLCAoIGNpZF9oZXggKSwgKCBjaWQgJiAwYjExMTFfMDAwMCApID4+IDQsICggKCBjaWQgJiAwYjAwMF8xMTExICkgPDwgMSApXG4gIGJpdGZpZWxkID0gbmV3IFVpbnQzMkFycmF5IFsgMSwgMHhmZmZmX2ZmZmYsIDMsIDQsIDUsIF1cbiAgZGVidWcgJ86pYmJzZm1fXzM1JywgKCBiaXRmaWVsZFsgMCBdLnRvU3RyaW5nIDIgKS5wYWRTdGFydCAzMiwgJy4nXG4gIGRlYnVnICfOqWJic2ZtX18zNicsICggYml0ZmllbGRbIDEgXS50b1N0cmluZyAyICkucGFkU3RhcnQgMzIsICcuJ1xuICBiaXRmaWVsZFsgMSBdICs9IDB4MVxuICBkZWJ1ZyAnzqliYnNmbV9fMzcnLCAoIGJpdGZpZWxkWyAxIF0udG9TdHJpbmcgMiApLnBhZFN0YXJ0IDMyLCAnLidcbiAgZGVidWcgJ86pYmJzZm1fXzM4JywgKCBiaXRmaWVsZFsgMiBdLnRvU3RyaW5nIDIgKS5wYWRTdGFydCAzMiwgJy4nXG4gIGRlYnVnICfOqWJic2ZtX18zOScsICggYml0ZmllbGRbIDMgXS50b1N0cmluZyAyICkucGFkU3RhcnQgMzIsICcuJ1xuICBkZWJ1ZyAnzqliYnNmbV9fNDAnLCAoIGJpdGZpZWxkWyA0IF0udG9TdHJpbmcgMiApLnBhZFN0YXJ0IDMyLCAnLidcbiAgZmluZENhY2hlRGlyZWN0b3J5ID0gKCByZXF1aXJlICdmaW5kLWNhY2hlLWRpcmVjdG9yeScgKS5kZWZhdWx0XG4gIGRlYnVnICfOqWJic2ZtX180MScsIGZpbmRDYWNoZURpcmVjdG9yeSB7IG5hbWU6ICdlZmZzdHJpbmcnLCBjcmVhdGU6IHRydWUsIH1cbiAgZW52UGF0aHMgPSAoIHJlcXVpcmUgJ2Vudi1wYXRocycgKS5kZWZhdWx0XG4gIGRlYnVnICfOqWJic2ZtX180MicsIGssIHYgZm9yIGssIHYgb2YgZW52UGF0aHMgJ2VmZnN0cmluZydcblxuIyBmaW5kQ2FjaGVEaXJlY3Rvcnkoe25hbWU6ICd1bmljb3Jucyd9KTtcbiMgLy89PiAnL3VzZXIvcGF0aC9ub2RlLW1vZHVsZXMvLmNhY2hlL3VuaWNvcm5zJ1xuICByZXR1cm4gbnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBhd2FpdCByYW1ibGUoKVxuICByZXR1cm4gbnVsbFxuIl19
