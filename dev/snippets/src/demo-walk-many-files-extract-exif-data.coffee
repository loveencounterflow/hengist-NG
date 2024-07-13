

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


#-----------------------------------------------------------------------------------------------------------
set_path = ->
  process.chdir path if ( path = process.argv[ 2 ] ? null )?
  R = process.cwd()
  info "Ω___1 CWD: #{R}"
  return R

#-----------------------------------------------------------------------------------------------------------
demo_fast_glob = ->
  FG        = require 'fast-glob'
  patterns  = [ '**/*.png', '**/*.jpg', ]
  cfg       = { dot: true }
  set_path()
  #.........................................................................................................
  await do =>
    console.time 'fast-glob-async'
    entries = await FG.glob patterns, cfg
    console.timeEnd 'fast-glob-async'
    debug 'Ω___2', "found #{entries.length} matching files"
    return null
  #.........................................................................................................
  do =>
    console.time 'fast-glob-sync'
    entries = FG.globSync patterns, cfg
    console.timeEnd 'fast-glob-sync'
    debug 'Ω___3', "found #{entries.length} matching files"
    return null
  #.........................................................................................................
  return null

#-----------------------------------------------------------------------------------------------------------
demo_node_glob = ->
  { glob
    globSync  } = require 'glob'
  patterns      = [ '**/*.png', '**/*.jpg', ]
  cfg           = { dot: true }
  set_path()
  #.........................................................................................................
  await do =>
    console.time 'node-glob-async'
    entries = await glob patterns, cfg
    console.timeEnd 'node-glob-async'
    debug 'Ω___4', "found #{entries.length} matching files"
    return null
  #.........................................................................................................
  do =>
    console.time 'node-glob-sync'
    entries = globSync patterns, cfg
    console.timeEnd 'node-glob-sync'
    debug 'Ω___5', "found #{entries.length} matching files"
    return null
  #.........................................................................................................
  return null

#-----------------------------------------------------------------------------------------------------------
demo_exifr = ->
  PATH          = require 'node:path'
  { glob
    globSync  } = require 'glob'
  EXIFR         = require 'exifr'
  patterns      = [ '**/*.png', '**/*.jpg', ]
  cfg           = { dot: true }
  base_path     = set_path()
  count         = 0
  #.........................................................................................................
  do =>
    console.time 'demo_exifr'
    for rel_path in ( rel_paths = globSync patterns, cfg )
      count++; whisper count if ( count %% 1000 ) is 0
      abs_path  = PATH.resolve base_path, rel_path
      exif      = await EXIFR.parse abs_path
      if exif?
        debug 'Ω___6', abs_path
        info 'Ω___7', exif
    console.timeEnd 'demo_exifr'
    debug 'Ω___8', "found #{rel_paths.length} matching files"
    return null
  #.........................................................................................................
  return null

#-----------------------------------------------------------------------------------------------------------
demo_exiftool_vendored = ->
  PATH          = require 'node:path'
  { glob
    globSync  } = require 'glob'
  { exiftool }         = require 'exiftool-vendored'
  patterns      = [ '**/*.png', '**/*.jpg', ]
  cfg           = { dot: true }
  base_path     = set_path()
  count         = 0
  #.........................................................................................................
  do =>
    console.time 'demo_exiftool_vendored'
    for rel_path in ( rel_paths = globSync patterns, cfg )
      count++; whisper count if ( count %% 1000 ) is 0
      abs_path  = PATH.resolve base_path, rel_path
      exif      = await exiftool.read abs_path
      if ( data = exif?.UserComment ? null )?
        data = JSON.parse data
        # debug 'Ω___9', abs_path
        # debug 'Ω__10', Object.keys data
        # info 'Ω__11', data.prompt
        # info 'Ω__12', data.creation_date
        # info 'Ω__13', new Date data.creation_date
    console.timeEnd 'demo_exiftool_vendored'
    debug 'Ω__14', "found #{rel_paths.length} matching files"
    return null
  #.........................................................................................................
  return null

#-----------------------------------------------------------------------------------------------------------
demo_exifreader = ->
  PATH          = require 'node:path'
  { glob
    globSync  } = require 'glob'
  ExifReader    = require 'exifreader'
  patterns      = [ '**/*.png', '**/*.jpg', ]
  cfg           = { dot: true }
  base_path     = set_path()
  count         = 0
  #.........................................................................................................
  do =>
    console.time 'demo_exifreader'
    for rel_path in ( rel_paths = globSync patterns, cfg )
      count++; whisper count if ( count %% 1000 ) is 0
      abs_path  = PATH.resolve base_path, rel_path
      exif      = await ExifReader.load abs_path, { async: true, includeUnknown: true, }
      if ( data = exif?.UserComment ? null )?
        data = JSON.parse ( Buffer.from data.value ).toString 'utf-8'
        # debug 'Ω__15', abs_path
        # debug 'Ω__16', Object.keys data
        # info 'Ω__17', data.prompt
        # info 'Ω__18', data.creation_date
        # info 'Ω__19', new Date data.creation_date
    console.timeEnd 'demo_exifreader'
    debug 'Ω__20', "found #{rel_paths.length} matching files"
    return null
  #.........................................................................................................
  return null


#===========================================================================================================
if module is require.main then await do =>
  # await demo_fast_glob()
  # await demo_node_glob()
  # await demo_exifr()
  # await demo_exiftool_vendored()
  await demo_exifreader()