


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
  whisper }               = GUY.trm.get_loggers 'demo-unicode-support'
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

#===========================================================================================================
if module is require.main then await do =>
  # await demo_execa()
  # debug 'Ωdxa__10', '0o' + ( 0o100664 & 0x1ff ).toString 8
  # debug 'Ωdxa__10', '0o' + ( 0o100664 & 0x1ff & 0x0100 ).toString 8



