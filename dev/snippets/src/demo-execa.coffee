


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
  whisper }               = GUY.trm.get_loggers 'demo-execa'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
#...........................................................................................................
PATH                      = require 'node:path'
# # { $: zx, cd: zx_cd }      = require 'zx'

#===========================================================================================================
demo_execa = ->
  { parseCommandString
    execa
    execaSync
    $ }                     = require 'execa'
  # debug 'Ω___1', d for d from await execa"trash nosuchfile"
  ref_path    = PATH.resolve __dirname, '../../../apps/bricabrac-filemirror'
  count       = 0
  # for await line from ( execa { cwd: '/home/flow/jzr/bing-image-creator-downloader', } )"cat /usr/share/dict/ngerman"
  debug 'Ωdxa___2', ( k for k of execa )
  # debug 'Ωdxa___3', GUY.props.keys execa, { symbols: true, builtins: true, hidden: true, }
  #.........................................................................................................
  await do ->
    help 'Ωdxa___4'
    for await line from ( execa { cwd: ref_path, } )"ls ."
      count++; break if count > 10000
      help 'Ωdxa___5', rpr line
    ;null
  #.........................................................................................................
  help 'Ωdxa___6'
  file_path   = 'README.md'
  #.........................................................................................................
  do ->
    { stdout, } = ( $.sync { cwd: ref_path, shell: true, lines: true, } )"stat -c '%a %A %n' #{file_path}"
    info 'Ωdxa___7', rpr stdout
    ;null
  #.........................................................................................................
  do ->
    cfg         = [ '-c', '%a %A %n', file_path, ]
    { stdout, } = ( $.sync { cwd: ref_path, shell: false, lines: true, } )"stat #{cfg}"
    info 'Ωdxa___8', rpr stdout
    ;null
  #.........................................................................................................
  do ->
    { stdout, } = $.sync 'stat', [ '-c', '%a %A %n', file_path, ], { cwd: ref_path, lines: true, }
    info 'Ωdxa___9', rpr stdout
    ;null
  #.........................................................................................................
  # await execa({detached: true})`npm run start`;
  #.........................................................................................................
  ;null



#===========================================================================================================
if module is require.main then await do =>
  # await demo_execa()

  debug 'Ωdxa__10', '0o' + ( 0o100664 & 0x1ff ).toString 8
  debug 'Ωdxa__10', '0o' + ( 0o100664 & 0x1ff & 0x0100 ).toString 8
