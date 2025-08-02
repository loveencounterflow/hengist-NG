
'use strict'

#===========================================================================================================
GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'rambling'
{ rpr
  inspect
  echo
  white
  green
  blue
  gold
  grey
  red
  bold
  reverse
  log     }               = GUY.trm
{ f }                     = require '../../../apps/effstring'
# write                     = ( p ) -> process.stdout.write p
{ nfa }                   = require '../../../apps/normalize-function-arguments'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'

ramble = =>
  # echo "\x1b[6nxyz"
  # echo "abc\x1b[6nxyz"
  # echo "abcdef\x1b[6nxyz"
  # echo "abcdef𓂋\x1b[6nxyz"
  # echo "abcdef两\x1b[6nxyz"
  # echo "abcdef𬺱\x1b[6nxyz"
  # echo "abcdef𒁾\x1b[6nxyz"
  # f = ( ctx ) -> debug 'Ωbbsfm___1', ctx.arguments
  # g = ( P... ) -> debug 'Ωbbsfm___2', f { arguments, }
  # g 5, 'd'
  # CP = require 'node:child_process'
  # cfg =
  #   encoding: 'utf-8'
  #   stdin:    'inherit'
  #   stdout:   'inherit'
  #   stderr:   'inherit'
  # # debug 'Ωbbsfm___3', CP.execSync "ls", cfg
  # # debug 'Ωbbsfm___4', CP.exec """echo -en "xxxxxxxxx\x1b[6n" ; read\n""", cfg
  # # { stdin, stdout, stderr, } =
  # echo '—————————————————————————————————————————————'
  # cp = CP.exec """echo -en 'xxxxxxxxx\x1b[6n'""", cfg
  # # cp = CP.exec """echo -en 'xxxxxxxxx\x1b[6n' ; read""", cfg
  # # cp = CP.exec '''echo '' ; echo -en 'x两\\x1b[6n' ; tmux display-message -p '两: #{cursor_x}' >> /tmp/output''', cfg
  # cp.stdin.resume()
  # cp.stdin.setEncoding  'utf-8' # 0
  # cp.stdout.setEncoding 'utf-8' # 1
  # cp.stderr.setEncoding 'utf-8' # 2
  # # debug 'Ωbbsfm___5', rpr cp.stdin.read()
  # # debug 'Ωbbsfm___6', rpr cp.stdout.read()
  # # debug 'Ωbbsfm___7', rpr cp.stderr.read()
  # # debug 'Ωbbsfm___8', rpr cp.read()
  # cp.stdin.on  'data', ( data ) -> help 'Ωbbsfm___9', rpr data # 0
  # cp.stdout.on 'data', ( data ) -> urge 'Ωbbsfm__10', rpr data # 1
  # cp.stderr.on 'data', ( data ) -> warn 'Ωbbsfm__11', rpr data # 2
  # echo '—————————————————————————————————————————————'
  # cp = CP.spawn 'echo', [ '-en', 'xxxxxxxxx\x1b[6n', ], cfg
  # # cp = CP.spawn 'ls', [ '-AlF', ], cfg
  # cp.stdin.setEncoding  'utf-8'
  # cp.stdout.setEncoding 'utf-8'
  # cp.stderr.setEncoding 'utf-8'
  # # debug 'Ωbbsfm__12', rpr cp.stdin.read()
  # # debug 'Ωbbsfm__13', rpr cp.stdout.read()
  # # debug 'Ωbbsfm__14', rpr cp.stderr.read()
  # # debug 'Ωbbsfm__15', rpr cp.read()
  # cp.stdin.on  'data', ( data ) -> help 'Ωbbsfm__16', rpr data # 0
  # cp.stdout.on 'data', ( data ) -> urge 'Ωbbsfm__17', rpr data # 1
  # cp.stderr.on 'data', ( data ) -> warn 'Ωbbsfm__18', rpr data # 2

  # illegal_codepoints: [ # see https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Special_code_points
  #   [   0x0000,   0x0000, ] # zero
  #   [   0x0001,   0x001f, ] # lower controls
  #   [   0x007f,   0x009f, ] # higher controls
  #   [   0xd800,   0xdfff, ] # surrogates
  #   [   0xfdd0,   0xfdef, ]
  #   [   0xfffe,   0xffff, ]
  #   [  0x1fffe,  0x1ffff, ]
  #   [  0x2fffe,  0x2ffff, ]
  #   [  0x3fffe,  0x3ffff, ]
  #   [  0x4fffe,  0x4ffff, ]
  #   [  0x5fffe,  0x5ffff, ]
  #   [  0x6fffe,  0x6ffff, ]
  #   [  0x7fffe,  0x7ffff, ]
  #   [  0x8fffe,  0x8ffff, ]
  #   [  0x9fffe,  0x9ffff, ]
  #   [  0xafffe,  0xaffff, ]
  #   [  0xbfffe,  0xbffff, ]
  #   [  0xcfffe,  0xcffff, ]
  #   [  0xdfffe,  0xdffff, ]
  #   [  0xefffe,  0xeffff, ]
  #   [  0xffffe,  0xfffff, ]
  #   [ 0x10fffe, 0x10ffff, ] ]

  illegal_codepoint_patterns =
    unassigned: ///^\p{Cn}$///v # Control
    control:    ///^\p{C}$///v # Control
    # surrogate:  ///^\p{C}$///v # Surrogate
    letter:     ///^\p{L}$///v
    space:      ///^\p{Zs}$///v
    separator:  ///^\p{Z}$///v
    mark:       ///^\p{M}$///v

  ucc_patterns =
    Cc: { code: 'Cc', pattern: ///^\p{Cc}$///v, name: "Other, Control",               }
    Cf: { code: 'Cf', pattern: ///^\p{Cf}$///v, name: "Other, Format",                }
    Cn: { code: 'Cn', pattern: ///^\p{Cn}$///v, name: "Other, Not Assigned",          }
    Co: { code: 'Co', pattern: ///^\p{Co}$///v, name: "Other, Private Use",           }
    Cs: { code: 'Cs', pattern: ///^\p{Cs}$///v, name: "Other, Surrogate",             }
    LC: { code: 'LC', pattern: ///^\p{LC}$///v, name: "Letter, Cased",                }
    Ll: { code: 'Ll', pattern: ///^\p{Ll}$///v, name: "Letter, Lowercase",            }
    Lm: { code: 'Lm', pattern: ///^\p{Lm}$///v, name: "Letter, Modifier",             }
    Lo: { code: 'Lo', pattern: ///^\p{Lo}$///v, name: "Letter, Other",                }
    Lt: { code: 'Lt', pattern: ///^\p{Lt}$///v, name: "Letter, Titlecase",            }
    Lu: { code: 'Lu', pattern: ///^\p{Lu}$///v, name: "Letter, Uppercase",            }
    Mc: { code: 'Mc', pattern: ///^\p{Mc}$///v, name: "Mark, Spacing Combining",      }
    Me: { code: 'Me', pattern: ///^\p{Me}$///v, name: "Mark, Enclosing",              }
    Mn: { code: 'Mn', pattern: ///^\p{Mn}$///v, name: "Mark, Nonspacing",             }
    Nd: { code: 'Nd', pattern: ///^\p{Nd}$///v, name: "Number, Decimal Digit",        }
    Nl: { code: 'Nl', pattern: ///^\p{Nl}$///v, name: "Number, Letter",               }
    No: { code: 'No', pattern: ///^\p{No}$///v, name: "Number, Other",                }
    Pc: { code: 'Pc', pattern: ///^\p{Pc}$///v, name: "Punctuation, Connector",       }
    Pd: { code: 'Pd', pattern: ///^\p{Pd}$///v, name: "Punctuation, Dash",            }
    Pe: { code: 'Pe', pattern: ///^\p{Pe}$///v, name: "Punctuation, Close",           }
    Pf: { code: 'Pf', pattern: ///^\p{Pf}$///v, name: "Punctuation, Final quote",     }
    Pi: { code: 'Pi', pattern: ///^\p{Pi}$///v, name: "Punctuation, Initial quote",   }
    Po: { code: 'Po', pattern: ///^\p{Po}$///v, name: "Punctuation, Other",           }
    Ps: { code: 'Ps', pattern: ///^\p{Ps}$///v, name: "Punctuation, Open",            }
    Sc: { code: 'Sc', pattern: ///^\p{Sc}$///v, name: "Symbol, Currency",             }
    Sk: { code: 'Sk', pattern: ///^\p{Sk}$///v, name: "Symbol, Modifier",             }
    Sm: { code: 'Sm', pattern: ///^\p{Sm}$///v, name: "Symbol, Math",                 }
    So: { code: 'So', pattern: ///^\p{So}$///v, name: "Symbol, Other",                }
    Zl: { code: 'Zl', pattern: ///^\p{Zl}$///v, name: "Separator, Line",              }
    Zp: { code: 'Zp', pattern: ///^\p{Zp}$///v, name: "Separator, Paragraph",         }
    Zs: { code: 'Zs', pattern: ///^\p{Zs}$///v, name: "Separator, Space",             }

  ucc_descriptor_from_chr = ( chr ) ->
    for _, dsc of ucc_patterns
      return dsc if dsc.pattern.test chr
    throw new Error "Ωbbsfm__19 unable to determine Unicode category code"

  get_rough_unicode_category = ( chr ) ->
    for name, pattern of illegal_codepoint_patterns
      return name if pattern.test chr
    return 'other'

  # echo """#!/usr/bin/env bash"""
  # echo """set -euo pipefail"""
  # echo """echo -ne '' > /tmp/output"""

  f = ->
  #   for range in ranges
  #     for cid in range
  #       cid_hex = "U+#{( cid.toString 16 ).padStart 4, '0'}"
  #       chr     = String.fromCodePoint cid
  #       ucc     = get_rough_unicode_category chr
  #       debug 'Ωbbsfm__20', cid_hex, ( rpr chr ), ucc
  #       switch ucc
  #         when 'control', 'separator'
  #           echo """echo "#{cid_hex}: 0" >> /tmp/output"""
  #         when 'space', 'mark'
  #           # echo """echo ; echo -ne "x#{chr}\\x1b[6n" ; IFS=';' read -sdR -p $'\\E[6n' ROW COL ; echo "#{cid_hex}: $COL" >> /tmp/output"""
  #           echo """echo '' ; echo -en 'xx#{chr}\\x1b[6n' ; tmux display-message -p '#{cid_hex}: \#{cursor_x}' >> /tmp/output"""
  #         else
  #           # echo """echo ; echo -ne "x#{chr}\\x1b[6n" ; IFS=';' read -sdR -p $'\\E[6n' ROW COL ; echo "#{chr}: $COL" >> /tmp/output"""
  #           echo """echo '' ; echo -en 'xx#{chr}\\x1b[6n' ; tmux display-message -p '#{chr}: \#{cursor_x}' >> /tmp/output"""
  #   return null
  # debug 'Ωbbsfm__21', ( glyph = '🙋🏽' ), Array.from glyph
  # debug 'Ωbbsfm__22', ( glyph = 'x쒇' ), Array.from glyph
  # debug 'Ωbbsfm__23', ( glyph = 'x별' ), Array.from glyph
  # debug 'Ωbbsfm__24', ( glyph = 'xㅂ ㅕ ㄹ' ), Array.from glyph
  # debug 'Ωbbsfm__25', ( glyph = 'xㅂㅕㄹ' ), Array.from glyph
  # debug 'Ωbbsfm__26', ( glyph = 'x벼ᄅ' ), Array.from glyph
  # debug 'Ωbbsfm__27', ( glyph = 'xᄇ\u{200D}ᅧ\u{200D}ᆯ' ), Array.from glyph
  # debug 'Ωbbsfm__28', ( glyph = 'xﾲￊﾩ' ), Array.from glyph

  # echo """echo 'xx' | wc --max-line-length"""                   # 2
  # echo """echo 'x🙋🏽' | wc --max-line-length"""                  # 5
  # echo """echo 'x쒇' | wc --max-line-length"""                   # 3
  # echo """echo 'x별' | wc --max-line-length"""                   # 3
  # echo """echo 'xㅂ ㅕ ㄹ' | wc --max-line-length"""               # 9
  # echo """echo 'xㅂㅕㄹ' | wc --max-line-length"""                 # 7
  # echo """echo 'x벼ᄅ' | wc --max-line-length"""                 # 5
  # echo """echo 'xᄇ\u{200D}ᅧ\u{200D}ᆯ' | wc --max-line-length""" # 3
  # echo """echo 'xﾲￊﾩ' | wc --max-line-length"""                 # 4
  # echo """echo 'xa︠b︡' | wc --max-line-length"""                # 3
  # echo """echo 'xâ' | wc --max-line-length"""                  # 2

  CP = require 'node:child_process'
  texts = [
    'xxx'  # 2
    'x🙋🏽x'  # 5
    'x쒇x'  # 3
    'x별x'  # 3
    'xㅂ ㅕ ㄹx'   # 9
    'xㅂㅕㄹx'  # 7
    'xﾲￊﾩx'  # 4
    'x별Lx'  # 4
    'xa︠b︡x'  # 3
    'xa︠b︡x'  # 3
    'xâx'  # 2
    'x𓃵x'
    'x﷽x'
    ]
  get_wc_max_line_length = ( text ) ->
    ### thx to https://unix.stackexchange.com/a/258551/280204 ###
    width1_txt  = CP.execSync """echo #{rpr text} | wc --max-line-length""", { encoding: 'utf-8', }
    return parseInt width1_txt, 10
  # for text in texts
  #   echo 'Ωbbsfm__29', ( rpr text ), ( get_wc_max_line_length text ) - 2

  ranges = [
    # [ 0x00_0000 .. 0x10_ffff ]
    [ 0x00_0000 .. 0x00_ffff ]
    # [ 0x00_0000 .. 0x00_00ff ]
    # [ 0x000000 .. 0x000200 ]
    # [ 0x00ff00 .. 0x0100ff ]
    # [ 0x013000 .. 0x0130ff ]
    ]

  demo_wc_max_line_length = ->
    for range in ranges
      for cid in range
        cid_hex = "U+#{( cid.toString 16 ).padStart 4, '0'}"
        chr     = String.fromCodePoint cid
        ucc     = get_rough_unicode_category chr
        # debug 'Ωbbsfm__30', cid_hex, ( rpr chr ), ucc
        echo cid_hex, ( get_wc_max_line_length "x#{chr}x" ) - 2
        # switch ucc
        #   when 'control', 'separator'
        #     echo """echo "#{cid_hex}: 0" >> /tmp/output"""
        #   when 'space', 'mark'
        #     # echo """echo ; echo -ne "x#{chr}\\x1b[6n" ; IFS=';' read -sdR -p $'\\E[6n' ROW COL ; echo "#{cid_hex}: $COL" >> /tmp/output"""
        #     echo """echo '' ; echo -en 'xx#{chr}\\x1b[6n' ; tmux display-message -p '#{cid_hex}: \#{cursor_x}' >> /tmp/output"""
        #   else
        #     # echo """echo ; echo -ne "x#{chr}\\x1b[6n" ; IFS=';' read -sdR -p $'\\E[6n' ROW COL ; echo "#{chr}: $COL" >> /tmp/output"""
        #     echo """echo '' ; echo -en 'xx#{chr}\\x1b[6n' ; tmux display-message -p '#{chr}: \#{cursor_x}' >> /tmp/output"""
    return null
  CP = require 'node:child_process'
  use_open_process_to_execute_shell_commands = ->
    cp = CP.spawn "bash", [], { encoding: 'utf-8', }
    cp.stdin.setEncoding  'utf-8'
    cp.stdout.setEncoding 'utf-8'
    cp.stderr.setEncoding 'utf-8'
    cp.stdin.on  'data', ( data ) -> help 'Ωbbsfm__31', rpr data # 0
    # cp.stdout.on 'data', ( data ) -> urge 'Ωbbsfm__32', rpr data # 1
    cp.stdout.on 'data', ( data ) -> echo data # 1
    cp.stderr.on 'data', ( data ) -> warn 'Ωbbsfm__33',     data # 2
    # cp.stdin.write """echo -ne 'text' | tee >(wc --max-line-length) >(echo -ne)\n"""
    # cp.stdin.write """echo -ne 'ᄑ<1171><11b6>' | tee >(wc --max-line-length) >(echo -ne)\n"""
    text = '쒇'; cp.stdin.write """length="$(echo #{rpr text} | wc --max-line-length)" ; echo "#{text} $length"\n"""
    for range in ranges
      for cid in range
        cid_hex = "U+#{( cid.toString 16 ).padStart 6, '0'}"
        chr     = String.fromCodePoint cid
        ucc     = get_rough_unicode_category chr
        text    = "#{cid_hex}x#{chr}x"
        switch ucc
          when 'control', 'separator'
            null
            # echo """echo "#{cid_hex}: 0" >> /tmp/output"""
          when 'letter', 'space', 'mark', 'other'
            echo text
    return null
    # cp.stdin.write """\n"""
    # cp.end()
  # use_open_process_to_execute_shell_commands()
  # demo_wc_max_line_length()
  write_unicode_chrs = ->
    for range in ranges
      for cid in range
        cid_hex = "U#{( cid.toString 16 ).padStart 6, '0'}"
        chr     = String.fromCodePoint cid
        ucc     = get_rough_unicode_category chr
        text    = "#{cid_hex}|x#{chr}x"
        switch ucc
          when 'control', 'separator'
            null
          when 'letter', 'space', 'mark', 'other'
            echo text
    return null
  # write_unicode_chrs()
  for cid in [ 0x00 .. 0x30 ]
    cid_hex = "0x#{( cid.toString 16 ).padStart 4, '0'}"
    debug 'Ωbbsfm__34', ( "#{cid}".padStart 6, ' ' ), ( cid_hex ), ( cid & 0b1111_0000 ) >> 4, ( ( cid & 0b000_1111 ) << 1 )
  bitfield = new Uint32Array [ 1, 0xffff_ffff, 3, 4, 5, ]
  debug 'Ωbbsfm__35', ( bitfield[ 0 ].toString 2 ).padStart 32, '.'
  debug 'Ωbbsfm__35', ( bitfield[ 1 ].toString 2 ).padStart 32, '.'
  bitfield[ 1 ] += 0x1
  debug 'Ωbbsfm__35', ( bitfield[ 1 ].toString 2 ).padStart 32, '.'
  debug 'Ωbbsfm__35', ( bitfield[ 2 ].toString 2 ).padStart 32, '.'
  debug 'Ωbbsfm__35', ( bitfield[ 3 ].toString 2 ).padStart 32, '.'
  debug 'Ωbbsfm__35', ( bitfield[ 4 ].toString 2 ).padStart 32, '.'
  return null

#===========================================================================================================
if module is require.main then await do =>
  await ramble()
  return null
