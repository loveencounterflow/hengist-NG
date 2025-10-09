
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
  whisper }               = GUY.trm.get_loggers 'bricabrac-sfmodules/test-basics'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'
{ createAsPipes,        } = require 'aspipes'

demo = ->
#===========================================================================================================
  { pipe,
    asPipe,
    take, } = createAsPipes()
  debug 'Ωap___1', pipe
  ```
  const upper = asPipe((s) => s.toUpperCase());
  const ex = asPipe((s, mark = '!') => s + mark);
  const greeting = pipe('hello');
  greeting
    | upper
    | ex('!!!');
  ```
  info 'Ωap___2', greeting
  info 'Ωap___3', await greeting.run()
  return null

#===========================================================================================================
if module is require.main then await do =>
  await demo()
