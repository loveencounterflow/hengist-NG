
'use strict'


############################################################################################################
GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'guy-test/test-all'
{ rpr
  inspect
  echo
  log     }               = GUY.trm
#...........................................................................................................
PATH                      = require 'path'
FS                        = require 'fs'
my_filename               = PATH.basename __filename
#...........................................................................................................
GTNG                      = require '../../../apps/guy-test-NG'
{ _TMP_test
  Test                  } = GTNG


############################################################################################################
tasks = {}
do ->
  paths = FS.readdirSync __dirname
  for path in paths
    filename = PATH.basename path
    continue if path.endsWith '.js.map'
    continue if filename is my_filename
    continue unless filename.startsWith 'test-'
    path              = PATH.join __dirname, path
    module            = require path
    debug 'Ω___1', module
    debug 'Ω___2', ( k for k of module )
    tasks[ filename ] = module
  cfg = { throw_on_error: false, }
  await ( ( new Test cfg ).async_test { tasks, } )


