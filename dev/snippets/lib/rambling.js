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

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JhbWJsaW5nLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFVBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FB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QTtNQUN0QyxNQUFNLE1BQUEsQ0FBQTtBQUNOLGFBQU87SUFGK0IsQ0FBQSxJQUF4Qzs7QUExVEEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAncmFtYmxpbmcnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxucmFtYmxlID0gPT5cbiAgIyBlY2hvIFwiXFx4MWJbNm54eXpcIlxuICAjIGVjaG8gXCJhYmNcXHgxYls2bnh5elwiXG4gICMgZWNobyBcImFiY2RlZlxceDFiWzZueHl6XCJcbiAgIyBlY2hvIFwiYWJjZGVm8JOCi1xceDFiWzZueHl6XCJcbiAgIyBlY2hvIFwiYWJjZGVm5LikXFx4MWJbNm54eXpcIlxuICAjIGVjaG8gXCJhYmNkZWbwrLqxXFx4MWJbNm54eXpcIlxuICAjIGVjaG8gXCJhYmNkZWbwkoG+XFx4MWJbNm54eXpcIlxuICAjIGYgPSAoIGN0eCApIC0+IGRlYnVnICfOqWJic2ZtX19fMScsIGN0eC5hcmd1bWVudHNcbiAgIyBnID0gKCBQLi4uICkgLT4gZGVidWcgJ86pYmJzZm1fX18yJywgZiB7IGFyZ3VtZW50cywgfVxuICAjIGcgNSwgJ2QnXG4gICMgQ1AgPSByZXF1aXJlICdub2RlOmNoaWxkX3Byb2Nlc3MnXG4gICMgY2ZnID1cbiAgIyAgIGVuY29kaW5nOiAndXRmLTgnXG4gICMgICBzdGRpbjogICAgJ2luaGVyaXQnXG4gICMgICBzdGRvdXQ6ICAgJ2luaGVyaXQnXG4gICMgICBzdGRlcnI6ICAgJ2luaGVyaXQnXG4gICMgIyBkZWJ1ZyAnzqliYnNmbV9fXzMnLCBDUC5leGVjU3luYyBcImxzXCIsIGNmZ1xuICAjICMgZGVidWcgJ86pYmJzZm1fX180JywgQ1AuZXhlYyBcIlwiXCJlY2hvIC1lbiBcInh4eHh4eHh4eFxceDFiWzZuXCIgOyByZWFkXFxuXCJcIlwiLCBjZmdcbiAgIyAjIHsgc3RkaW4sIHN0ZG91dCwgc3RkZXJyLCB9ID1cbiAgIyBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICMgY3AgPSBDUC5leGVjIFwiXCJcImVjaG8gLWVuICd4eHh4eHh4eHhcXHgxYls2bidcIlwiXCIsIGNmZ1xuICAjICMgY3AgPSBDUC5leGVjIFwiXCJcImVjaG8gLWVuICd4eHh4eHh4eHhcXHgxYls2bicgOyByZWFkXCJcIlwiLCBjZmdcbiAgIyAjIGNwID0gQ1AuZXhlYyAnJydlY2hvICcnIDsgZWNobyAtZW4gJ3jkuKRcXFxceDFiWzZuJyA7IHRtdXggZGlzcGxheS1tZXNzYWdlIC1wICfkuKQ6ICN7Y3Vyc29yX3h9JyA+PiAvdG1wL291dHB1dCcnJywgY2ZnXG4gICMgY3Auc3RkaW4ucmVzdW1lKClcbiAgIyBjcC5zdGRpbi5zZXRFbmNvZGluZyAgJ3V0Zi04JyAjIDBcbiAgIyBjcC5zdGRvdXQuc2V0RW5jb2RpbmcgJ3V0Zi04JyAjIDFcbiAgIyBjcC5zdGRlcnIuc2V0RW5jb2RpbmcgJ3V0Zi04JyAjIDJcbiAgIyAjIGRlYnVnICfOqWJic2ZtX19fNScsIHJwciBjcC5zdGRpbi5yZWFkKClcbiAgIyAjIGRlYnVnICfOqWJic2ZtX19fNicsIHJwciBjcC5zdGRvdXQucmVhZCgpXG4gICMgIyBkZWJ1ZyAnzqliYnNmbV9fXzcnLCBycHIgY3Auc3RkZXJyLnJlYWQoKVxuICAjICMgZGVidWcgJ86pYmJzZm1fX184JywgcnByIGNwLnJlYWQoKVxuICAjIGNwLnN0ZGluLm9uICAnZGF0YScsICggZGF0YSApIC0+IGhlbHAgJ86pYmJzZm1fX185JywgcnByIGRhdGEgIyAwXG4gICMgY3Auc3Rkb3V0Lm9uICdkYXRhJywgKCBkYXRhICkgLT4gdXJnZSAnzqliYnNmbV9fMTAnLCBycHIgZGF0YSAjIDFcbiAgIyBjcC5zdGRlcnIub24gJ2RhdGEnLCAoIGRhdGEgKSAtPiB3YXJuICfOqWJic2ZtX18xMScsIHJwciBkYXRhICMgMlxuICAjIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgIyBjcCA9IENQLnNwYXduICdlY2hvJywgWyAnLWVuJywgJ3h4eHh4eHh4eFxceDFiWzZuJywgXSwgY2ZnXG4gICMgIyBjcCA9IENQLnNwYXduICdscycsIFsgJy1BbEYnLCBdLCBjZmdcbiAgIyBjcC5zdGRpbi5zZXRFbmNvZGluZyAgJ3V0Zi04J1xuICAjIGNwLnN0ZG91dC5zZXRFbmNvZGluZyAndXRmLTgnXG4gICMgY3Auc3RkZXJyLnNldEVuY29kaW5nICd1dGYtOCdcbiAgIyAjIGRlYnVnICfOqWJic2ZtX18xMicsIHJwciBjcC5zdGRpbi5yZWFkKClcbiAgIyAjIGRlYnVnICfOqWJic2ZtX18xMycsIHJwciBjcC5zdGRvdXQucmVhZCgpXG4gICMgIyBkZWJ1ZyAnzqliYnNmbV9fMTQnLCBycHIgY3Auc3RkZXJyLnJlYWQoKVxuICAjICMgZGVidWcgJ86pYmJzZm1fXzE1JywgcnByIGNwLnJlYWQoKVxuICAjIGNwLnN0ZGluLm9uICAnZGF0YScsICggZGF0YSApIC0+IGhlbHAgJ86pYmJzZm1fXzE2JywgcnByIGRhdGEgIyAwXG4gICMgY3Auc3Rkb3V0Lm9uICdkYXRhJywgKCBkYXRhICkgLT4gdXJnZSAnzqliYnNmbV9fMTcnLCBycHIgZGF0YSAjIDFcbiAgIyBjcC5zdGRlcnIub24gJ2RhdGEnLCAoIGRhdGEgKSAtPiB3YXJuICfOqWJic2ZtX18xOCcsIHJwciBkYXRhICMgMlxuXG4gICMgaWxsZWdhbF9jb2RlcG9pbnRzOiBbICMgc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaXZlcnNhbF9DaGFyYWN0ZXJfU2V0X2NoYXJhY3RlcnMjU3BlY2lhbF9jb2RlX3BvaW50c1xuICAjICAgWyAgIDB4MDAwMCwgICAweDAwMDAsIF0gIyB6ZXJvXG4gICMgICBbICAgMHgwMDAxLCAgIDB4MDAxZiwgXSAjIGxvd2VyIGNvbnRyb2xzXG4gICMgICBbICAgMHgwMDdmLCAgIDB4MDA5ZiwgXSAjIGhpZ2hlciBjb250cm9sc1xuICAjICAgWyAgIDB4ZDgwMCwgICAweGRmZmYsIF0gIyBzdXJyb2dhdGVzXG4gICMgICBbICAgMHhmZGQwLCAgIDB4ZmRlZiwgXVxuICAjICAgWyAgIDB4ZmZmZSwgICAweGZmZmYsIF1cbiAgIyAgIFsgIDB4MWZmZmUsICAweDFmZmZmLCBdXG4gICMgICBbICAweDJmZmZlLCAgMHgyZmZmZiwgXVxuICAjICAgWyAgMHgzZmZmZSwgIDB4M2ZmZmYsIF1cbiAgIyAgIFsgIDB4NGZmZmUsICAweDRmZmZmLCBdXG4gICMgICBbICAweDVmZmZlLCAgMHg1ZmZmZiwgXVxuICAjICAgWyAgMHg2ZmZmZSwgIDB4NmZmZmYsIF1cbiAgIyAgIFsgIDB4N2ZmZmUsICAweDdmZmZmLCBdXG4gICMgICBbICAweDhmZmZlLCAgMHg4ZmZmZiwgXVxuICAjICAgWyAgMHg5ZmZmZSwgIDB4OWZmZmYsIF1cbiAgIyAgIFsgIDB4YWZmZmUsICAweGFmZmZmLCBdXG4gICMgICBbICAweGJmZmZlLCAgMHhiZmZmZiwgXVxuICAjICAgWyAgMHhjZmZmZSwgIDB4Y2ZmZmYsIF1cbiAgIyAgIFsgIDB4ZGZmZmUsICAweGRmZmZmLCBdXG4gICMgICBbICAweGVmZmZlLCAgMHhlZmZmZiwgXVxuICAjICAgWyAgMHhmZmZmZSwgIDB4ZmZmZmYsIF1cbiAgIyAgIFsgMHgxMGZmZmUsIDB4MTBmZmZmLCBdIF1cblxuICBpbGxlZ2FsX2NvZGVwb2ludF9wYXR0ZXJucyA9XG4gICAgdW5hc3NpZ25lZDogLy8vXlxccHtDbn0kLy8vdiAjIENvbnRyb2xcbiAgICBjb250cm9sOiAgICAvLy9eXFxwe0N9JC8vL3YgIyBDb250cm9sXG4gICAgIyBzdXJyb2dhdGU6ICAvLy9eXFxwe0N9JC8vL3YgIyBTdXJyb2dhdGVcbiAgICBsZXR0ZXI6ICAgICAvLy9eXFxwe0x9JC8vL3ZcbiAgICBzcGFjZTogICAgICAvLy9eXFxwe1pzfSQvLy92XG4gICAgc2VwYXJhdG9yOiAgLy8vXlxccHtafSQvLy92XG4gICAgbWFyazogICAgICAgLy8vXlxccHtNfSQvLy92XG5cbiAgdWNjX3BhdHRlcm5zID1cbiAgICBDYzogeyBjb2RlOiAnQ2MnLCBwYXR0ZXJuOiAvLy9eXFxwe0NjfSQvLy92LCBuYW1lOiBcIk90aGVyLCBDb250cm9sXCIsICAgICAgICAgICAgICAgfVxuICAgIENmOiB7IGNvZGU6ICdDZicsIHBhdHRlcm46IC8vL15cXHB7Q2Z9JC8vL3YsIG5hbWU6IFwiT3RoZXIsIEZvcm1hdFwiLCAgICAgICAgICAgICAgICB9XG4gICAgQ246IHsgY29kZTogJ0NuJywgcGF0dGVybjogLy8vXlxccHtDbn0kLy8vdiwgbmFtZTogXCJPdGhlciwgTm90IEFzc2lnbmVkXCIsICAgICAgICAgIH1cbiAgICBDbzogeyBjb2RlOiAnQ28nLCBwYXR0ZXJuOiAvLy9eXFxwe0NvfSQvLy92LCBuYW1lOiBcIk90aGVyLCBQcml2YXRlIFVzZVwiLCAgICAgICAgICAgfVxuICAgIENzOiB7IGNvZGU6ICdDcycsIHBhdHRlcm46IC8vL15cXHB7Q3N9JC8vL3YsIG5hbWU6IFwiT3RoZXIsIFN1cnJvZ2F0ZVwiLCAgICAgICAgICAgICB9XG4gICAgTEM6IHsgY29kZTogJ0xDJywgcGF0dGVybjogLy8vXlxccHtMQ30kLy8vdiwgbmFtZTogXCJMZXR0ZXIsIENhc2VkXCIsICAgICAgICAgICAgICAgIH1cbiAgICBMbDogeyBjb2RlOiAnTGwnLCBwYXR0ZXJuOiAvLy9eXFxwe0xsfSQvLy92LCBuYW1lOiBcIkxldHRlciwgTG93ZXJjYXNlXCIsICAgICAgICAgICAgfVxuICAgIExtOiB7IGNvZGU6ICdMbScsIHBhdHRlcm46IC8vL15cXHB7TG19JC8vL3YsIG5hbWU6IFwiTGV0dGVyLCBNb2RpZmllclwiLCAgICAgICAgICAgICB9XG4gICAgTG86IHsgY29kZTogJ0xvJywgcGF0dGVybjogLy8vXlxccHtMb30kLy8vdiwgbmFtZTogXCJMZXR0ZXIsIE90aGVyXCIsICAgICAgICAgICAgICAgIH1cbiAgICBMdDogeyBjb2RlOiAnTHQnLCBwYXR0ZXJuOiAvLy9eXFxwe0x0fSQvLy92LCBuYW1lOiBcIkxldHRlciwgVGl0bGVjYXNlXCIsICAgICAgICAgICAgfVxuICAgIEx1OiB7IGNvZGU6ICdMdScsIHBhdHRlcm46IC8vL15cXHB7THV9JC8vL3YsIG5hbWU6IFwiTGV0dGVyLCBVcHBlcmNhc2VcIiwgICAgICAgICAgICB9XG4gICAgTWM6IHsgY29kZTogJ01jJywgcGF0dGVybjogLy8vXlxccHtNY30kLy8vdiwgbmFtZTogXCJNYXJrLCBTcGFjaW5nIENvbWJpbmluZ1wiLCAgICAgIH1cbiAgICBNZTogeyBjb2RlOiAnTWUnLCBwYXR0ZXJuOiAvLy9eXFxwe01lfSQvLy92LCBuYW1lOiBcIk1hcmssIEVuY2xvc2luZ1wiLCAgICAgICAgICAgICAgfVxuICAgIE1uOiB7IGNvZGU6ICdNbicsIHBhdHRlcm46IC8vL15cXHB7TW59JC8vL3YsIG5hbWU6IFwiTWFyaywgTm9uc3BhY2luZ1wiLCAgICAgICAgICAgICB9XG4gICAgTmQ6IHsgY29kZTogJ05kJywgcGF0dGVybjogLy8vXlxccHtOZH0kLy8vdiwgbmFtZTogXCJOdW1iZXIsIERlY2ltYWwgRGlnaXRcIiwgICAgICAgIH1cbiAgICBObDogeyBjb2RlOiAnTmwnLCBwYXR0ZXJuOiAvLy9eXFxwe05sfSQvLy92LCBuYW1lOiBcIk51bWJlciwgTGV0dGVyXCIsICAgICAgICAgICAgICAgfVxuICAgIE5vOiB7IGNvZGU6ICdObycsIHBhdHRlcm46IC8vL15cXHB7Tm99JC8vL3YsIG5hbWU6IFwiTnVtYmVyLCBPdGhlclwiLCAgICAgICAgICAgICAgICB9XG4gICAgUGM6IHsgY29kZTogJ1BjJywgcGF0dGVybjogLy8vXlxccHtQY30kLy8vdiwgbmFtZTogXCJQdW5jdHVhdGlvbiwgQ29ubmVjdG9yXCIsICAgICAgIH1cbiAgICBQZDogeyBjb2RlOiAnUGQnLCBwYXR0ZXJuOiAvLy9eXFxwe1BkfSQvLy92LCBuYW1lOiBcIlB1bmN0dWF0aW9uLCBEYXNoXCIsICAgICAgICAgICAgfVxuICAgIFBlOiB7IGNvZGU6ICdQZScsIHBhdHRlcm46IC8vL15cXHB7UGV9JC8vL3YsIG5hbWU6IFwiUHVuY3R1YXRpb24sIENsb3NlXCIsICAgICAgICAgICB9XG4gICAgUGY6IHsgY29kZTogJ1BmJywgcGF0dGVybjogLy8vXlxccHtQZn0kLy8vdiwgbmFtZTogXCJQdW5jdHVhdGlvbiwgRmluYWwgcXVvdGVcIiwgICAgIH1cbiAgICBQaTogeyBjb2RlOiAnUGknLCBwYXR0ZXJuOiAvLy9eXFxwe1BpfSQvLy92LCBuYW1lOiBcIlB1bmN0dWF0aW9uLCBJbml0aWFsIHF1b3RlXCIsICAgfVxuICAgIFBvOiB7IGNvZGU6ICdQbycsIHBhdHRlcm46IC8vL15cXHB7UG99JC8vL3YsIG5hbWU6IFwiUHVuY3R1YXRpb24sIE90aGVyXCIsICAgICAgICAgICB9XG4gICAgUHM6IHsgY29kZTogJ1BzJywgcGF0dGVybjogLy8vXlxccHtQc30kLy8vdiwgbmFtZTogXCJQdW5jdHVhdGlvbiwgT3BlblwiLCAgICAgICAgICAgIH1cbiAgICBTYzogeyBjb2RlOiAnU2MnLCBwYXR0ZXJuOiAvLy9eXFxwe1NjfSQvLy92LCBuYW1lOiBcIlN5bWJvbCwgQ3VycmVuY3lcIiwgICAgICAgICAgICAgfVxuICAgIFNrOiB7IGNvZGU6ICdTaycsIHBhdHRlcm46IC8vL15cXHB7U2t9JC8vL3YsIG5hbWU6IFwiU3ltYm9sLCBNb2RpZmllclwiLCAgICAgICAgICAgICB9XG4gICAgU206IHsgY29kZTogJ1NtJywgcGF0dGVybjogLy8vXlxccHtTbX0kLy8vdiwgbmFtZTogXCJTeW1ib2wsIE1hdGhcIiwgICAgICAgICAgICAgICAgIH1cbiAgICBTbzogeyBjb2RlOiAnU28nLCBwYXR0ZXJuOiAvLy9eXFxwe1NvfSQvLy92LCBuYW1lOiBcIlN5bWJvbCwgT3RoZXJcIiwgICAgICAgICAgICAgICAgfVxuICAgIFpsOiB7IGNvZGU6ICdabCcsIHBhdHRlcm46IC8vL15cXHB7Wmx9JC8vL3YsIG5hbWU6IFwiU2VwYXJhdG9yLCBMaW5lXCIsICAgICAgICAgICAgICB9XG4gICAgWnA6IHsgY29kZTogJ1pwJywgcGF0dGVybjogLy8vXlxccHtacH0kLy8vdiwgbmFtZTogXCJTZXBhcmF0b3IsIFBhcmFncmFwaFwiLCAgICAgICAgIH1cbiAgICBaczogeyBjb2RlOiAnWnMnLCBwYXR0ZXJuOiAvLy9eXFxwe1pzfSQvLy92LCBuYW1lOiBcIlNlcGFyYXRvciwgU3BhY2VcIiwgICAgICAgICAgICAgfVxuXG4gIHVjY19kZXNjcmlwdG9yX2Zyb21fY2hyID0gKCBjaHIgKSAtPlxuICAgIGZvciBfLCBkc2Mgb2YgdWNjX3BhdHRlcm5zXG4gICAgICByZXR1cm4gZHNjIGlmIGRzYy5wYXR0ZXJuLnRlc3QgY2hyXG4gICAgdGhyb3cgbmV3IEVycm9yIFwizqliYnNmbV9fMTkgdW5hYmxlIHRvIGRldGVybWluZSBVbmljb2RlIGNhdGVnb3J5IGNvZGVcIlxuXG4gIGdldF9yb3VnaF91bmljb2RlX2NhdGVnb3J5ID0gKCBjaHIgKSAtPlxuICAgIGZvciBuYW1lLCBwYXR0ZXJuIG9mIGlsbGVnYWxfY29kZXBvaW50X3BhdHRlcm5zXG4gICAgICByZXR1cm4gbmFtZSBpZiBwYXR0ZXJuLnRlc3QgY2hyXG4gICAgcmV0dXJuICdvdGhlcidcblxuICAjIGVjaG8gXCJcIlwiIyEvdXNyL2Jpbi9lbnYgYmFzaFwiXCJcIlxuICAjIGVjaG8gXCJcIlwic2V0IC1ldW8gcGlwZWZhaWxcIlwiXCJcbiAgIyBlY2hvIFwiXCJcImVjaG8gLW5lICcnID4gL3RtcC9vdXRwdXRcIlwiXCJcblxuICBmID0gLT5cbiAgIyAgIGZvciByYW5nZSBpbiByYW5nZXNcbiAgIyAgICAgZm9yIGNpZCBpbiByYW5nZVxuICAjICAgICAgIGNpZF9oZXggPSBcIlUrI3soIGNpZC50b1N0cmluZyAxNiApLnBhZFN0YXJ0IDQsICcwJ31cIlxuICAjICAgICAgIGNociAgICAgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWRcbiAgIyAgICAgICB1Y2MgICAgID0gZ2V0X3JvdWdoX3VuaWNvZGVfY2F0ZWdvcnkgY2hyXG4gICMgICAgICAgZGVidWcgJ86pYmJzZm1fXzIwJywgY2lkX2hleCwgKCBycHIgY2hyICksIHVjY1xuICAjICAgICAgIHN3aXRjaCB1Y2NcbiAgIyAgICAgICAgIHdoZW4gJ2NvbnRyb2wnLCAnc2VwYXJhdG9yJ1xuICAjICAgICAgICAgICBlY2hvIFwiXCJcImVjaG8gXCIje2NpZF9oZXh9OiAwXCIgPj4gL3RtcC9vdXRwdXRcIlwiXCJcbiAgIyAgICAgICAgIHdoZW4gJ3NwYWNlJywgJ21hcmsnXG4gICMgICAgICAgICAgICMgZWNobyBcIlwiXCJlY2hvIDsgZWNobyAtbmUgXCJ4I3tjaHJ9XFxcXHgxYls2blwiIDsgSUZTPSc7JyByZWFkIC1zZFIgLXAgJCdcXFxcRVs2bicgUk9XIENPTCA7IGVjaG8gXCIje2NpZF9oZXh9OiAkQ09MXCIgPj4gL3RtcC9vdXRwdXRcIlwiXCJcbiAgIyAgICAgICAgICAgZWNobyBcIlwiXCJlY2hvICcnIDsgZWNobyAtZW4gJ3h4I3tjaHJ9XFxcXHgxYls2bicgOyB0bXV4IGRpc3BsYXktbWVzc2FnZSAtcCAnI3tjaWRfaGV4fTogXFwje2N1cnNvcl94fScgPj4gL3RtcC9vdXRwdXRcIlwiXCJcbiAgIyAgICAgICAgIGVsc2VcbiAgIyAgICAgICAgICAgIyBlY2hvIFwiXCJcImVjaG8gOyBlY2hvIC1uZSBcIngje2Nocn1cXFxceDFiWzZuXCIgOyBJRlM9JzsnIHJlYWQgLXNkUiAtcCAkJ1xcXFxFWzZuJyBST1cgQ09MIDsgZWNobyBcIiN7Y2hyfTogJENPTFwiID4+IC90bXAvb3V0cHV0XCJcIlwiXG4gICMgICAgICAgICAgIGVjaG8gXCJcIlwiZWNobyAnJyA7IGVjaG8gLWVuICd4eCN7Y2hyfVxcXFx4MWJbNm4nIDsgdG11eCBkaXNwbGF5LW1lc3NhZ2UgLXAgJyN7Y2hyfTogXFwje2N1cnNvcl94fScgPj4gL3RtcC9vdXRwdXRcIlwiXCJcbiAgIyAgIHJldHVybiBudWxsXG4gICMgZGVidWcgJ86pYmJzZm1fXzIxJywgKCBnbHlwaCA9ICfwn5mL8J+PvScgKSwgQXJyYXkuZnJvbSBnbHlwaFxuICAjIGRlYnVnICfOqWJic2ZtX18yMicsICggZ2x5cGggPSAneOyShycgKSwgQXJyYXkuZnJvbSBnbHlwaFxuICAjIGRlYnVnICfOqWJic2ZtX18yMycsICggZ2x5cGggPSAneOuzhCcgKSwgQXJyYXkuZnJvbSBnbHlwaFxuICAjIGRlYnVnICfOqWJic2ZtX18yNCcsICggZ2x5cGggPSAneOOFgiDjhZUg44S5JyApLCBBcnJheS5mcm9tIGdseXBoXG4gICMgZGVidWcgJ86pYmJzZm1fXzI1JywgKCBnbHlwaCA9ICd444WC44WV44S5JyApLCBBcnJheS5mcm9tIGdseXBoXG4gICMgZGVidWcgJ86pYmJzZm1fXzI2JywgKCBnbHlwaCA9ICd44YSH4YWn4YSFJyApLCBBcnJheS5mcm9tIGdseXBoXG4gICMgZGVidWcgJ86pYmJzZm1fXzI3JywgKCBnbHlwaCA9ICd44YSHXFx1ezIwMER94YWnXFx1ezIwMER94YavJyApLCBBcnJheS5mcm9tIGdseXBoXG4gICMgZGVidWcgJ86pYmJzZm1fXzI4JywgKCBnbHlwaCA9ICd4776y77+K776pJyApLCBBcnJheS5mcm9tIGdseXBoXG5cbiAgIyBlY2hvIFwiXCJcImVjaG8gJ3h4JyB8IHdjIC0tbWF4LWxpbmUtbGVuZ3RoXCJcIlwiICAgICAgICAgICAgICAgICAgICMgMlxuICAjIGVjaG8gXCJcIlwiZWNobyAnePCfmYvwn4+9JyB8IHdjIC0tbWF4LWxpbmUtbGVuZ3RoXCJcIlwiICAgICAgICAgICAgICAgICAgIyA1XG4gICMgZWNobyBcIlwiXCJlY2hvICd47JKHJyB8IHdjIC0tbWF4LWxpbmUtbGVuZ3RoXCJcIlwiICAgICAgICAgICAgICAgICAgICMgM1xuICAjIGVjaG8gXCJcIlwiZWNobyAneOuzhCcgfCB3YyAtLW1heC1saW5lLWxlbmd0aFwiXCJcIiAgICAgICAgICAgICAgICAgICAjIDNcbiAgIyBlY2hvIFwiXCJcImVjaG8gJ3jjhYIg44WVIOOEuScgfCB3YyAtLW1heC1saW5lLWxlbmd0aFwiXCJcIiAgICAgICAgICAgICAgICMgOVxuICAjIGVjaG8gXCJcIlwiZWNobyAneOOFguOFleOEuScgfCB3YyAtLW1heC1saW5lLWxlbmd0aFwiXCJcIiAgICAgICAgICAgICAgICAgIyA3XG4gICMgZWNobyBcIlwiXCJlY2hvICd44YSH4YWn4YSFJyB8IHdjIC0tbWF4LWxpbmUtbGVuZ3RoXCJcIlwiICAgICAgICAgICAgICAgICAjIDVcbiAgIyBlY2hvIFwiXCJcImVjaG8gJ3jhhIdcXHV7MjAwRH3hhadcXHV7MjAwRH3hhq8nIHwgd2MgLS1tYXgtbGluZS1sZW5ndGhcIlwiXCIgIyAzXG4gICMgZWNobyBcIlwiXCJlY2hvICd4776y77+K776pJyB8IHdjIC0tbWF4LWxpbmUtbGVuZ3RoXCJcIlwiICAgICAgICAgICAgICAgICAjIDRcbiAgIyBlY2hvIFwiXCJcImVjaG8gJ3hh77igYu+4oScgfCB3YyAtLW1heC1saW5lLWxlbmd0aFwiXCJcIiAgICAgICAgICAgICAgICAjIDNcbiAgIyBlY2hvIFwiXCJcImVjaG8gJ3hhzIInIHwgd2MgLS1tYXgtbGluZS1sZW5ndGhcIlwiXCIgICAgICAgICAgICAgICAgICAjIDJcblxuICBDUCA9IHJlcXVpcmUgJ25vZGU6Y2hpbGRfcHJvY2VzcydcbiAgdGV4dHMgPSBbXG4gICAgJ3h4eCcgICMgMlxuICAgICd48J+Zi/Cfj714JyAgIyA1XG4gICAgJ3jskod4JyAgIyAzXG4gICAgJ3jrs4R4JyAgIyAzXG4gICAgJ3jjhYIg44WVIOOEuXgnICAgIyA5XG4gICAgJ3jjhYLjhZXjhLl4JyAgIyA3XG4gICAgJ3jvvrLvv4rvvql4JyAgIyA0XG4gICAgJ3jrs4RMeCcgICMgNFxuICAgICd4Ye+4oGLvuKF4JyAgIyAzXG4gICAgJ3hh77igYu+4oXgnICAjIDNcbiAgICAneGHMgngnICAjIDJcbiAgICAnePCTg7V4J1xuICAgICd477e9eCdcbiAgICBdXG4gIGdldF93Y19tYXhfbGluZV9sZW5ndGggPSAoIHRleHQgKSAtPlxuICAgICMjIyB0aHggdG8gaHR0cHM6Ly91bml4LnN0YWNrZXhjaGFuZ2UuY29tL2EvMjU4NTUxLzI4MDIwNCAjIyNcbiAgICB3aWR0aDFfdHh0ICA9IENQLmV4ZWNTeW5jIFwiXCJcImVjaG8gI3tycHIgdGV4dH0gfCB3YyAtLW1heC1saW5lLWxlbmd0aFwiXCJcIiwgeyBlbmNvZGluZzogJ3V0Zi04JywgfVxuICAgIHJldHVybiBwYXJzZUludCB3aWR0aDFfdHh0LCAxMFxuICAjIGZvciB0ZXh0IGluIHRleHRzXG4gICMgICBlY2hvICfOqWJic2ZtX18yOScsICggcnByIHRleHQgKSwgKCBnZXRfd2NfbWF4X2xpbmVfbGVuZ3RoIHRleHQgKSAtIDJcblxuICByYW5nZXMgPSBbXG4gICAgIyBbIDB4MDBfMDAwMCAuLiAweDEwX2ZmZmYgXVxuICAgIFsgMHgwMF8wMDAwIC4uIDB4MDBfZmZmZiBdXG4gICAgIyBbIDB4MDBfMDAwMCAuLiAweDAwXzAwZmYgXVxuICAgICMgWyAweDAwMDAwMCAuLiAweDAwMDIwMCBdXG4gICAgIyBbIDB4MDBmZjAwIC4uIDB4MDEwMGZmIF1cbiAgICAjIFsgMHgwMTMwMDAgLi4gMHgwMTMwZmYgXVxuICAgIF1cblxuICBkZW1vX3djX21heF9saW5lX2xlbmd0aCA9IC0+XG4gICAgZm9yIHJhbmdlIGluIHJhbmdlc1xuICAgICAgZm9yIGNpZCBpbiByYW5nZVxuICAgICAgICBjaWRfaGV4ID0gXCJVKyN7KCBjaWQudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA0LCAnMCd9XCJcbiAgICAgICAgY2hyICAgICA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZFxuICAgICAgICB1Y2MgICAgID0gZ2V0X3JvdWdoX3VuaWNvZGVfY2F0ZWdvcnkgY2hyXG4gICAgICAgICMgZGVidWcgJ86pYmJzZm1fXzMwJywgY2lkX2hleCwgKCBycHIgY2hyICksIHVjY1xuICAgICAgICBlY2hvIGNpZF9oZXgsICggZ2V0X3djX21heF9saW5lX2xlbmd0aCBcIngje2Nocn14XCIgKSAtIDJcbiAgICAgICAgIyBzd2l0Y2ggdWNjXG4gICAgICAgICMgICB3aGVuICdjb250cm9sJywgJ3NlcGFyYXRvcidcbiAgICAgICAgIyAgICAgZWNobyBcIlwiXCJlY2hvIFwiI3tjaWRfaGV4fTogMFwiID4+IC90bXAvb3V0cHV0XCJcIlwiXG4gICAgICAgICMgICB3aGVuICdzcGFjZScsICdtYXJrJ1xuICAgICAgICAjICAgICAjIGVjaG8gXCJcIlwiZWNobyA7IGVjaG8gLW5lIFwieCN7Y2hyfVxcXFx4MWJbNm5cIiA7IElGUz0nOycgcmVhZCAtc2RSIC1wICQnXFxcXEVbNm4nIFJPVyBDT0wgOyBlY2hvIFwiI3tjaWRfaGV4fTogJENPTFwiID4+IC90bXAvb3V0cHV0XCJcIlwiXG4gICAgICAgICMgICAgIGVjaG8gXCJcIlwiZWNobyAnJyA7IGVjaG8gLWVuICd4eCN7Y2hyfVxcXFx4MWJbNm4nIDsgdG11eCBkaXNwbGF5LW1lc3NhZ2UgLXAgJyN7Y2lkX2hleH06IFxcI3tjdXJzb3JfeH0nID4+IC90bXAvb3V0cHV0XCJcIlwiXG4gICAgICAgICMgICBlbHNlXG4gICAgICAgICMgICAgICMgZWNobyBcIlwiXCJlY2hvIDsgZWNobyAtbmUgXCJ4I3tjaHJ9XFxcXHgxYls2blwiIDsgSUZTPSc7JyByZWFkIC1zZFIgLXAgJCdcXFxcRVs2bicgUk9XIENPTCA7IGVjaG8gXCIje2Nocn06ICRDT0xcIiA+PiAvdG1wL291dHB1dFwiXCJcIlxuICAgICAgICAjICAgICBlY2hvIFwiXCJcImVjaG8gJycgOyBlY2hvIC1lbiAneHgje2Nocn1cXFxceDFiWzZuJyA7IHRtdXggZGlzcGxheS1tZXNzYWdlIC1wICcje2Nocn06IFxcI3tjdXJzb3JfeH0nID4+IC90bXAvb3V0cHV0XCJcIlwiXG4gICAgcmV0dXJuIG51bGxcbiAgQ1AgPSByZXF1aXJlICdub2RlOmNoaWxkX3Byb2Nlc3MnXG4gIHVzZV9vcGVuX3Byb2Nlc3NfdG9fZXhlY3V0ZV9zaGVsbF9jb21tYW5kcyA9IC0+XG4gICAgY3AgPSBDUC5zcGF3biBcImJhc2hcIiwgW10sIHsgZW5jb2Rpbmc6ICd1dGYtOCcsIH1cbiAgICBjcC5zdGRpbi5zZXRFbmNvZGluZyAgJ3V0Zi04J1xuICAgIGNwLnN0ZG91dC5zZXRFbmNvZGluZyAndXRmLTgnXG4gICAgY3Auc3RkZXJyLnNldEVuY29kaW5nICd1dGYtOCdcbiAgICBjcC5zdGRpbi5vbiAgJ2RhdGEnLCAoIGRhdGEgKSAtPiBoZWxwICfOqWJic2ZtX18zMScsIHJwciBkYXRhICMgMFxuICAgICMgY3Auc3Rkb3V0Lm9uICdkYXRhJywgKCBkYXRhICkgLT4gdXJnZSAnzqliYnNmbV9fMzInLCBycHIgZGF0YSAjIDFcbiAgICBjcC5zdGRvdXQub24gJ2RhdGEnLCAoIGRhdGEgKSAtPiBlY2hvIGRhdGEgIyAxXG4gICAgY3Auc3RkZXJyLm9uICdkYXRhJywgKCBkYXRhICkgLT4gd2FybiAnzqliYnNmbV9fMzMnLCAgICAgZGF0YSAjIDJcbiAgICAjIGNwLnN0ZGluLndyaXRlIFwiXCJcImVjaG8gLW5lICd0ZXh0JyB8IHRlZSA+KHdjIC0tbWF4LWxpbmUtbGVuZ3RoKSA+KGVjaG8gLW5lKVxcblwiXCJcIlxuICAgICMgY3Auc3RkaW4ud3JpdGUgXCJcIlwiZWNobyAtbmUgJ+GEkTwxMTcxPjwxMWI2PicgfCB0ZWUgPih3YyAtLW1heC1saW5lLWxlbmd0aCkgPihlY2hvIC1uZSlcXG5cIlwiXCJcbiAgICB0ZXh0ID0gJ+yShyc7IGNwLnN0ZGluLndyaXRlIFwiXCJcImxlbmd0aD1cIiQoZWNobyAje3JwciB0ZXh0fSB8IHdjIC0tbWF4LWxpbmUtbGVuZ3RoKVwiIDsgZWNobyBcIiN7dGV4dH0gJGxlbmd0aFwiXFxuXCJcIlwiXG4gICAgZm9yIHJhbmdlIGluIHJhbmdlc1xuICAgICAgZm9yIGNpZCBpbiByYW5nZVxuICAgICAgICBjaWRfaGV4ID0gXCJVKyN7KCBjaWQudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA2LCAnMCd9XCJcbiAgICAgICAgY2hyICAgICA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZFxuICAgICAgICB1Y2MgICAgID0gZ2V0X3JvdWdoX3VuaWNvZGVfY2F0ZWdvcnkgY2hyXG4gICAgICAgIHRleHQgICAgPSBcIiN7Y2lkX2hleH14I3tjaHJ9eFwiXG4gICAgICAgIHN3aXRjaCB1Y2NcbiAgICAgICAgICB3aGVuICdjb250cm9sJywgJ3NlcGFyYXRvcidcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICMgZWNobyBcIlwiXCJlY2hvIFwiI3tjaWRfaGV4fTogMFwiID4+IC90bXAvb3V0cHV0XCJcIlwiXG4gICAgICAgICAgd2hlbiAnbGV0dGVyJywgJ3NwYWNlJywgJ21hcmsnLCAnb3RoZXInXG4gICAgICAgICAgICBlY2hvIHRleHRcbiAgICByZXR1cm4gbnVsbFxuICAgICMgY3Auc3RkaW4ud3JpdGUgXCJcIlwiXFxuXCJcIlwiXG4gICAgIyBjcC5lbmQoKVxuICAjIHVzZV9vcGVuX3Byb2Nlc3NfdG9fZXhlY3V0ZV9zaGVsbF9jb21tYW5kcygpXG4gICMgZGVtb193Y19tYXhfbGluZV9sZW5ndGgoKVxuICB3cml0ZV91bmljb2RlX2NocnMgPSAtPlxuICAgIGZvciByYW5nZSBpbiByYW5nZXNcbiAgICAgIGZvciBjaWQgaW4gcmFuZ2VcbiAgICAgICAgY2lkX2hleCA9IFwiVSN7KCBjaWQudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA2LCAnMCd9XCJcbiAgICAgICAgY2hyICAgICA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZFxuICAgICAgICB1Y2MgICAgID0gZ2V0X3JvdWdoX3VuaWNvZGVfY2F0ZWdvcnkgY2hyXG4gICAgICAgIHRleHQgICAgPSBcIiN7Y2lkX2hleH18eCN7Y2hyfXhcIlxuICAgICAgICBzd2l0Y2ggdWNjXG4gICAgICAgICAgd2hlbiAnY29udHJvbCcsICdzZXBhcmF0b3InXG4gICAgICAgICAgICBudWxsXG4gICAgICAgICAgd2hlbiAnbGV0dGVyJywgJ3NwYWNlJywgJ21hcmsnLCAnb3RoZXInXG4gICAgICAgICAgICBlY2hvIHRleHRcbiAgICByZXR1cm4gbnVsbFxuICAjIHdyaXRlX3VuaWNvZGVfY2hycygpXG4gIGZvciBjaWQgaW4gWyAweDAwIC4uIDB4MzAgXVxuICAgIGNpZF9oZXggPSBcIjB4I3soIGNpZC50b1N0cmluZyAxNiApLnBhZFN0YXJ0IDQsICcwJ31cIlxuICAgIGRlYnVnICfOqWJic2ZtX18zNCcsICggXCIje2NpZH1cIi5wYWRTdGFydCA2LCAnICcgKSwgKCBjaWRfaGV4ICksICggY2lkICYgMGIxMTExXzAwMDAgKSA+PiA0LCAoICggY2lkICYgMGIwMDBfMTExMSApIDw8IDEgKVxuICBiaXRmaWVsZCA9IG5ldyBVaW50MzJBcnJheSBbIDEsIDB4ZmZmZl9mZmZmLCAzLCA0LCA1LCBdXG4gIGRlYnVnICfOqWJic2ZtX18zNScsICggYml0ZmllbGRbIDAgXS50b1N0cmluZyAyICkucGFkU3RhcnQgMzIsICcuJ1xuICBkZWJ1ZyAnzqliYnNmbV9fMzYnLCAoIGJpdGZpZWxkWyAxIF0udG9TdHJpbmcgMiApLnBhZFN0YXJ0IDMyLCAnLidcbiAgYml0ZmllbGRbIDEgXSArPSAweDFcbiAgZGVidWcgJ86pYmJzZm1fXzM3JywgKCBiaXRmaWVsZFsgMSBdLnRvU3RyaW5nIDIgKS5wYWRTdGFydCAzMiwgJy4nXG4gIGRlYnVnICfOqWJic2ZtX18zOCcsICggYml0ZmllbGRbIDIgXS50b1N0cmluZyAyICkucGFkU3RhcnQgMzIsICcuJ1xuICBkZWJ1ZyAnzqliYnNmbV9fMzknLCAoIGJpdGZpZWxkWyAzIF0udG9TdHJpbmcgMiApLnBhZFN0YXJ0IDMyLCAnLidcbiAgZGVidWcgJ86pYmJzZm1fXzQwJywgKCBiaXRmaWVsZFsgNCBdLnRvU3RyaW5nIDIgKS5wYWRTdGFydCAzMiwgJy4nXG4gIGZpbmRDYWNoZURpcmVjdG9yeSA9ICggcmVxdWlyZSAnZmluZC1jYWNoZS1kaXJlY3RvcnknICkuZGVmYXVsdFxuICBkZWJ1ZyAnzqliYnNmbV9fNDEnLCBmaW5kQ2FjaGVEaXJlY3RvcnkgeyBuYW1lOiAnZWZmc3RyaW5nJywgY3JlYXRlOiB0cnVlLCB9XG4gIGVudlBhdGhzID0gKCByZXF1aXJlICdlbnYtcGF0aHMnICkuZGVmYXVsdFxuICBkZWJ1ZyAnzqliYnNmbV9fNDInLCBrLCB2IGZvciBrLCB2IG9mIGVudlBhdGhzICdlZmZzdHJpbmcnXG5cbiMgZmluZENhY2hlRGlyZWN0b3J5KHtuYW1lOiAndW5pY29ybnMnfSk7XG4jIC8vPT4gJy91c2VyL3BhdGgvbm9kZS1tb2R1bGVzLy5jYWNoZS91bmljb3JucydcbiAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgYXdhaXQgcmFtYmxlKClcbiAgcmV0dXJuIG51bGxcbiJdfQ==
//# sourceURL=../src/rambling.coffee