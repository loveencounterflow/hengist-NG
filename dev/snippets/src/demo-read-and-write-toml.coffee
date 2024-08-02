




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
demo_1 = ->
  TOML = require '@iarna/toml'
  obj = TOML.parse """
    [abc]
    foo = 123
    bar = [1,2,3]"""
   # obj = {abc: {foo: 123, bar: [1,2,3]}}
  debug 'Ω__3', TOML.stringify obj
  return null

#===========================================================================================================
if module is require.main then await do =>
  demo_1()
