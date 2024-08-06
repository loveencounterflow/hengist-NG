




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
  TOML      = require '@iarna/toml'
  FS        = require 'node:fs'
  cfg_path  = '/home/flow/3rd-party-repos/Bing-Creator-Image-Downloader/config.toml'
  source    = FS.readFileSync cfg_path
  cfg       = TOML.parse source
   # cfg = {abc: {foo: 123, bar: [1,2,3]}}
  info 'Ω___1', cfg.collection.collections_to_include
  cfg.collection.collections_to_include = [ 'include me!!' ]
  debug 'Ω___2', TOML.stringify cfg
  return null

#===========================================================================================================
if module is require.main then await do =>
  demo_1()
