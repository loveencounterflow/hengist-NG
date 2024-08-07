

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
FS                        = require 'node:fs'
CRYPTO                    = require 'node:crypto'
{ DBay }                  = require '../../../apps/dbay'
{ SQL  }                  = DBay
nosuchprompt              = ""

#-----------------------------------------------------------------------------------------------------------
id_from_text = ( text, length = 8 ) ->
  hash = CRYPTO.createHash 'sha1'
  hash.update text
  return ( hash.digest 'hex' )[ ... length ]

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
  PATH            = require 'node:path'
  { glob
    globSync  }   = require 'glob'
  ExifReader      = require 'exifreader'
  patterns        = [ '**/*.png', '**/*.jpg', ]
  cfg             = { dot: true }
  base_path       = set_path()
  count           = 0
  DB              = prepare_db()
  #.........................................................................................................
  exif_from_path  = do =>
    my_buffer = new Buffer.alloc 2 * 1024
    return ( path ) ->
      fd          = FS.openSync path
      FS.readSync fd, my_buffer
      exif        = ExifReader.load my_buffer
      if ( data = exif?.UserComment ? null )?
        R = JSON.parse ( Buffer.from data.value ).toString 'utf-8'
      else
        R = { prompt: nosuchprompt, date: null, }
      #.....................................................................................................
      R.prompt_id = id_from_text R.prompt
      return R
  #.........................................................................................................
  do =>
    DB.db ->
      console.time 'demo_exifreader'
      counts    =
        skipped:  0
        added:    0
        deleted:  0
      rel_paths = globSync patterns, cfg
      info 'Ω__17', "found #{rel_paths.length} matching files"
      for rel_path in rel_paths
        count++; whisper count if ( count %% 1000 ) is 0
        break if count > 10000 ### !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ###
        abs_path  = PATH.resolve base_path, rel_path
        path_id   = id_from_text abs_path
        #...................................................................................................
        if DB.known_path_ids.has path_id
          # help "Ω__18 skipping path ID #{rpr path_id}"
          counts.skipped++
          ### NOTE we know that in the present run we will not again have to test against the current
          `path_id`, so we also know we can safely delete it from the pool of known IDs (thereby making it
          smaller and potentially a tad faster); after having gone through all `path_ids` in the file
          system, we will then effectively have turned `DB.known_path_ids` into `extraneous_path_ids`, i.e.
          those that could be deleted from the DB if deemed necessary. ###
          DB.known_path_ids.delete path_id
        else
          # warn "Ω__19 inserting path ID #{rpr path_id}"
          counts.added++
          #.................................................................................................
          exif = exif_from_path abs_path
          ### TAINT use prepared statement ###
          DB.db SQL"""
            insert into prompts ( id, prompt ) values ( ?, ? )
              on conflict ( id ) do nothing;""", [
            exif.prompt_id, exif.prompt, ]
          ### TAINT use prepared statement ###
          DB.db SQL"""insert into files ( id, prompt_id, path ) values ( ?, ?, ? );""", [
            path_id, exif.prompt_id, abs_path, ]
      #.....................................................................................................
      info "Ω__21 changes to DB at #{DB.path}: #{rpr counts}"
      #.....................................................................................................
      return null
    console.timeEnd 'demo_exifreader'
    return null
  #.........................................................................................................
  return null

#-----------------------------------------------------------------------------------------------------------
prepare_db = ->
  path                = '/dev/shm/files-and-prompts.sqlite'
  db                  = new DBay { path, }
  #.........................................................................................................
  get_must_initialize = ( db ) ->
    tables    = db.first_values SQL"select name from sqlite_schema where type = 'table' order by name;"
    tables    = [ tables..., ]
    R         = false
    R       or= 'files'    not in tables
    R       or= 'prompts'  not in tables
    return R
  #.........................................................................................................
  initialize_db = ( db ) ->
    db ->
      db SQL"drop table if exists files;"
      db SQL"drop table if exists prompts;"
      db SQL"""
        create table files (
            id        text not null primary key,
            prompt_id text not null,
            path      text not null,
          foreign key ( prompt_id ) references prompts ( id ) );"""
      db SQL"""
        create table prompts (
          id      text not null primary key,
          prompt  text not null );"""
      db SQL"""insert into prompts ( id, prompt ) values ( ?, ? );""", [
        ( id_from_text nosuchprompt ), nosuchprompt, ]
      return null
    return null
  #.........................................................................................................
  if get_must_initialize db
    warn "Ω__22 initializing DB at #{path}"
    initialize_db db
  else
    help "Ω__23 re-using DB at #{path}"
  #.........................................................................................................
  ### TAINT can we use an API call to get a set? ###
  known_path_ids = do =>
    R = new Set()
    R.add id for id from db.first_values SQL"select * from files;"
    return R
  #.........................................................................................................
  return { path, db, known_path_ids, }


#===========================================================================================================
if module is require.main then await do =>
  # await demo_fast_glob()
  # await demo_node_glob()
  # await demo_exifr()
  # await demo_exiftool_vendored()
  await demo_exifreader()
  # demo_dbay_with_exifdata()
