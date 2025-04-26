

'use strict'

GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'intertype/test-basics'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm


#===========================================================================================================
demo_d3_format = ->
  D3F = require 'd3-format'
  do =>
    help 'Ω___1', f = D3F.format '.>+$20,.3f'
    help 'Ω___2', rpr f 1234.5678
    help 'Ω___3', rpr f '1234.5678'
    help 'Ω___4', f = D3F.format '—>+$20,.3c'
    help 'Ω___5', rpr f 1234.5678
    help 'Ω___6', rpr f '1234.5678'
    help 'Ω___7', rpr f 'helo'
    help 'Ω___8', rpr f '一千二百'
    help 'Ω___9', rpr f '一千二百三十四点五六七八'
    help 'Ω__10', '\;'.length is 1
  #---------------------------------------------------------------------------------------------------------
  ### TAINT does not treat backslash-escaped characters correctly ###
  format_re = ///
    ^:
    (?<fmt>.+?(?<!\\));
    (?<tail>.*)
    $
    ///
  #---------------------------------------------------------------------------------------------------------
  f = ( parts, expressions... ) ->
    R = parts[ 0 ]
    for value, idx in expressions
      part    = parts[ idx + 1 ]
      #.....................................................................................................
      if part.startsWith ':'
        unless ( match = part.match format_re )?
          throw new Error "Ω__14 illegal format expression #{rpr raw}"
        { fmt, tail, } = match.groups
        fmt = fmt.replace /\\;/g, ';'
        R  += ( ( D3F.format fmt ) value ) + tail
      #.....................................................................................................
      else
        literal = if ( typeof value is 'string' ) then value else rpr value
        R      += literal + part
    return R
  urge 'Ω__17', rpr f"AAA#{1234.5678}:\\;>+20,.3f;D\t\\;DD#{98.76}:+7.2f;ZZZ"
  urge 'Ω__17', rpr f"AAA#{1234.5678}: >+20,.3f;D\t\\;DD#{98.76}:+7.2f;ZZZ"


  # { format, new_formatter, } = require_myfstring()
  # urge 'Ω__18', format ':*<+20,.5g', '11456.15454'
  # urge 'Ω__19', format ':*<+20,.5g', 11456.15454
  # # urge 'Ω__20', format ':*=+20,.5g', 11456.15454

  # f152f = new_formatter ': > 15,.2f'
  # help 'Ω__21', f152f 1
  # help 'Ω__22', f152f 12
  # help 'Ω__23', f152f 123
  # help 'Ω__24', f152f 1234
  # help 'Ω__25', f152f -11456.15454
  # help 'Ω__26', f152f 53443.32455
  # help 'Ω__27', f152f 885673.367553
  # f15s = new_formatter ': > 15s'
  # help 'Ω__28', f15s 'helo'
  return null

#===========================================================================================================
if module is require.main then do =>
  demo_d3_format()
  # urge 'Ω__29', rpr String.raw { raw: [ '123\t\u4e01', ], }, '123\t\u4e01'
  # urge 'Ω__30', rpr String.raw { raw: [ '123\\t\\u4e01', ], }, '123\\t\\u4e01'
  # urge 'Ω__30', rpr '"123\\t\\u4e01\x01\377"'
  # urge 'Ω__30', rpr JSON.parse '"123\\t\\u4e01\x01\377"'

  # empty = ''
  # x = 'what'
  # urge 'Ω__31', SQL"abc"
  # urge 'Ω__32', SQL"abc#{}xyz"
  # urge 'Ω__33', SQL"abc#{empty}xyz"
  # urge 'Ω__34', SQL"abc#{x}:; xyz"
  # urge 'Ω__35', SQL"\;#{x}:; xyz"
