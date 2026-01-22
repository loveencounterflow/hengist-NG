

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
  whisper }               = GUY.trm.get_loggers 'bricabrac-dbric'
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

SDK                      = require '@lix-js/sdk'
{ plugin: json,        } = require "@lix-js/plugin-json";
{ openLix,
  InMemorySQLite,
  TextEncoder,
  selectWorkingDiff,
  InMemoryEnvironment, } = SDK

debug 'Ωlixvcs___1', openLix
debug 'Ωlixvcs___2', k for k in ( Object.keys require '@lix-js/sdk' ).sort()
urge 'Ωlixvcs___3', k for k in ( Object.keys require '@lix-js/plugin-json' ).sort()
debug 'Ωlixvcs___4', InMemorySQLite
debug 'Ωlixvcs___5', openLix.InMemorySQLite

demo = ->
  cfg =
    # environment: new openLix.InMemorySQLite()
    environment:    new InMemoryEnvironment()
    # providePlugins: [ json, ]
  lix   = await openLix cfg
  # data  = new TextEncoder().encode JSON.stringify { theme: "light" }
  # await lix.db.insertInto("file").values({ path: "/hello.txt", data, }).execute();
  diff  = selectWorkingDiff { lix }
  ;null



#===========================================================================================================
if module is require.main then await do =>
  await demo()
  ;null
