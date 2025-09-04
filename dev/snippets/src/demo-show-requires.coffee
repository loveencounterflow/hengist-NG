


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
  whisper }               = GUY.trm.get_loggers 'demo-show-requires'
{ rpr
  inspect
  echo
  red
  bold
  reverse
  log     }               = GUY.trm
{ f }                     = require '../../../apps/effstring'
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'



#=========================================================================================================
### NOTE Future Single-File Module ###
show_requires = ( module_path ) ->
  PATH                            = require 'node:path'
  FS                              = require 'node:fs'
  glob                            = require 'glob'
  { walk_lines_with_positions,  } = SFMODULES.unstable.require_fast_linereader()
  folder_path                     = PATH.dirname require.resolve module_path
  pattern                         = PATH.join folder_path, '../src/*.coffee'
  paths                           = glob.sync PATH.join pattern
  has_local                       = false
  local_requires                  = []
  for path in paths
    for { lnr, line, } from walk_lines_with_positions path
      continue unless ( match = line.match /require\s+'(?<module_spec>.*)'\s*$/v )?
      { module_spec, }  = match.groups
      is_local          = /^(\.\.\/|\/)/v.test module_spec
      has_local       or= is_local
      message           = f"#{path}:<70c; #{lnr}:>3.0f; #{rpr module_spec}"
      # color             = if is_local then GUY.trm.gold else GUY.trm.grey
      # info 'Ωhllt_168', color message
      local_requires.push message if is_local
  if has_local
    exit_handler = ->
      process.exitCode = 111
      warn()
      warn red reverse bold "Ωhllt_169 there are local requires:"
      for message in local_requires
        warn 'Ωhllt_170', GUY.trm.gold message
    process.once 'uncaughtException',   exit_handler
    process.once 'unhandledRejection',  exit_handler
    process.once 'exit',                exit_handler
  return null

#-----------------------------------------------------------------------------------------------------------
capture_requires = ->
  { get_callsite,
    get_callsite_path,        } = SFMODULES.unstable.require_get_callsite()
  { get_app_details,
    require_from_app_folder,
    get_bricabrac_cfg,        } = SFMODULES.unstable.require_get_app_details()
  js_handler = require.extensions[ '.js' ]
  #.........................................................................................................
  seen = new Set()
  require.extensions[ '.js' ] = ( P... ) ->
    urge 'Ωhllt_171', P[ 0 ].id
    for delta in [ 1 .. 20 ]
      break unless ( callsite = get_callsite { delta, } )?
      continue if callsite.scriptName.startsWith 'node:'
      app_details   = get_app_details { delta, }
      name_version  = "#{app_details.name}@#{app_details.version}"
      identifier    = "#{callsite.scriptName} -- #{name_version}"
      continue if seen.has identifier
      seen.add identifier
      info 'Ωhllt_179', delta, identifier
    return js_handler P...
  #.........................................................................................................
  for key in Object.keys require.cache
    continue unless ( key.indexOf 'hollerith' ) > -1
    # debug 'Ωhllt_108', key
    delete require.cache[ key ]

Object.assign module.exports, { show_requires, capture_requires, }