
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
  'isa-nowhere-symlink'
  'isa-circular-symlink'
  'isa-file-symlink'
  'isa-folder-symlink'
  'isa-file'
  'isa-folder'
  ]

types_and_methods = [
  { type: 'file',       method_name: 'isFile',            }
  { type: 'folder',     method_name: 'isDirectory',       }
  { type: 'block',      method_name: 'isBlockDevice',     }
  { type: 'character',  method_name: 'isCharacterDevice', }
  { type: 'fifo',       method_name: 'isFIFO',            }
  { type: 'socket',     method_name: 'isSocket',          }
]

#-----------------------------------------------------------------------------------------------------------
_get_short_file_descriptor = ( path ) ->
  type    = null
  link    = false
  is_loop = false
  #.........................................................................................................
  [ lstat, link, ] = do =>
    try lstat = FS.lstatSync path catch error
      return [ null, false,  ] if error.code is 'ENOENT'
      throw error
    return [ lstat, lstat.isSymbolicLink(), ]
  #.........................................................................................................
  return { type, link, is_loop, } unless lstat?
  #.........................................................................................................
  if link then [ stat, is_loop, ] = do =>
    try stat = FS.statSync path catch error
      return [ null,  true,   ] if error.code is 'ELOOP'
      return [ null,  false,  ] if error.code is 'ENOENT'
      throw error
    return [ stat, false, ]
  is_loop  ?= false
  stat      = lstat if is_loop or ( not link )
  return { type: 'link', link, is_loop, } if ( not stat? ) and ( not is_loop )
  type = do =>
    for { type, method_name, } in types_and_methods
      return type if stat[ method_name ]()
    return null
  #.........................................................................................................
  type ?= 'link'
  return { type, link, is_loop, }

#-----------------------------------------------------------------------------------------------------------
get_short_file_descriptor = ( P... ) ->
  _get_short_file_descriptor P...

#-----------------------------------------------------------------------------------------------------------
get_long_file_descriptor = ( P... ) ->
  throw new Error "not implemented"
  { dsc, stats } = _get_short_file_descriptor P...
# dev: 2114n,
# ino: 48064969n,
# mode: 33188n,
# nlink: 1n,
# uid: 85n,
# gid: 100n,
# rdev: 0n,
# size: 527n,
# blksize: 4096n,
# blocks: 8n,
# atimeMs: 1318289051000n,
# mtimeMs: 1318289051000n,
# ctimeMs: 1318289051000n,
# birthtimeMs: 1318289051000n,
# atimeNs: 1318289051000000000n,
# mtimeNs: 1318289051000000000n,
# ctimeNs: 1318289051000000000n,
# birthtimeNs: 1318289051000000000n,
# atime: Mon, 10 Oct 2011 23:24:11 GMT,
# mtime: Mon, 10 Oct 2011 23:24:11 GMT,
# ctime: Mon, 10 Oct 2011 23:24:11 GMT,
# birthtime: Mon, 10 Oct 2011 23:24:11 GMT

for filename in filenames
  # help()
  path    = PATH.resolve __dirname, PATH.join '../probes', filename
  dsc     = get_short_file_descriptor path
  help 'Ω___4', ( filename.padEnd 20 ), dsc








