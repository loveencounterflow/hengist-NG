
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
  whisper }               = GUY.trm.get_loggers 'promptparser/prompt-db'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
FS                        = require 'node:fs'
PATH                      = require 'node:path'

filenames = [
  'isa-nosuch'
  'isa-circular-symlink'
  'isa-file'
  'isa-file-symlink'
  'isa-folder'
  'isa-folder-symlink'
  'isa-nowhere-symlink' ]

types_and_methods = [
  { type: 'file',       method_name: 'isFile',            }
  { type: 'folder',     method_name: 'isDirectory',       }
  { type: 'block',      method_name: 'isBlockDevice',     }
  { type: 'character',  method_name: 'isCharacterDevice', }
  { type: 'fifo',       method_name: 'isFIFO',            }
  { type: 'socket',     method_name: 'isSocket',          }
]

#-----------------------------------------------------------------------------------------------------------
get_file_descriptor = ( path ) ->
  #.........................................................................................................
  [ lstat, link, ] = do =>
    try lstat = FS.lstatSync path catch error
      return [ null, false,  ] if error.code is 'ENOENT'
      throw error
    return [ lstat, lstat.isSymbolicLink(), ]
  #.........................................................................................................
  return null unless lstat?
  info 'Ω___1', ( PATH.basename path ), lstat?, link
  #.........................................................................................................
  if link then [ stat, is_loop, ] = do =>
    try stat = FS.statSync path catch error
      return [ null,  true,   ] if error.code is 'ELOOP'
      return [ null,  false,  ] if error.code is 'ENOENT'
      throw error
    return [ stat, false, ]
  debug 'Ω___2', ( ( PATH.basename path ).padEnd 20 ), { lstat: lstat?, stat: stat?, link, is_loop}
  stat = lstat if is_loop or ( not link )
  return null if ( not stat? ) and ( not is_loop )
  type = do =>
    for { type, method_name, } in types_and_methods
      return type if stat[ method_name ]()
    return null
  #.........................................................................................................
  return { type, link, is_loop: false, }

for filename in filenames
  help()
  path    = PATH.resolve __dirname, PATH.join '../probes', filename
  dsc     = get_file_descriptor path
  help 'Ω___4', ( filename.padEnd 20 ), dsc








