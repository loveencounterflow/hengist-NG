
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
  whisper }               = GUY.trm.get_loggers 'demo-node-sqlite'
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
{ f }                     = require '../../../apps/effstring'
# write                     = ( p ) -> process.stdout.write p
{ nfa }                   = require '../../../apps/normalize-function-arguments'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'
mkdirp                    = require 'mkdirp'
env_paths                 = ( require 'env-paths' ).default 'demo-node-sqlite'
S                         = require 'node:sqlite'
PATH                      = require 'node:path'
{ SQL }                   = require '../../../apps/dbay'


#===========================================================================================================
illegal_codepoint_patterns =
  unassigned: ///^\p{Cn}$///v # Control
  control:    ///^\p{C}$///v # Control
  letter:     ///^\p{L}$///v
  space:      ///^\p{Zs}$///v
  separator:  ///^\p{Z}$///v
  mark:       ///^\p{M}$///v
  # surrogate:  ///^\p{C}$///v # Surrogate

get_rough_unicode_category = ( chr ) ->
  for name, pattern of illegal_codepoint_patterns
    return name if pattern.test chr
  return 'other'


#===========================================================================================================
demo = =>
  debug 'Ωnql___1', k, v for k, v of env_paths
  tmp_path  = env_paths.temp
  db_path   = PATH.join tmp_path, 'chr-widths.sqlite'
  debug 'Ωnql___2', mkdirp.sync tmp_path
  debug 'Ωnql___3', db = new S.DatabaseSync db_path
  #.........................................................................................................
  db.exec SQL"""drop table if exists widths;"""
  #.........................................................................................................
  db.exec SQL"""
    create table widths (
      width_text      text    not null primary key,
      width_cells     integer not null );"""
  #.........................................................................................................
  insert_width = db.prepare SQL"""insert
    into widths ( width_text, width_cells )
    values ( $width_text, $width_cells )
    on conflict ( width_text ) do update set width_cells = excluded.width_cells;"""
  #.........................................................................................................
  db.exec SQL"""begin transaction;"""
  for cid in [ 0x00_0000 .. 0x00_00ff ]
    chr     = String.fromCodePoint cid
    cid_hex = "U+#{( cid.toString 16 ).padStart 4, '0'}"
    chr     = String.fromCodePoint cid
    ucc     = get_rough_unicode_category chr
    # debug 'Ωbbsfm___4', cid_hex, ( rpr chr ), ucc
    width_text  = chr
    width_cells = null
    switch ucc
      when 'control'      then  width_cells = 0
      when 'separator'    then  width_cells = 0
      when 'space'        then  width_cells = 1
      when 'unassigned'   then  width_cells = 1
      when 'mark'         then  width_cells = 1
      else                      width_cells = 1
    insert_width.run { width_text, width_cells, }
  db.exec SQL"""commit;"""
  for { width_text, width_cells, } from ( db.prepare SQL"select * from widths order by width_text;" ).iterate()
    info 'Ωnql___5', ( rpr width_text ), width_cells
  # db.exec SQL"""create index if not exists width_cells_index on widths ( );"""
  return null

#===========================================================================================================
if module is require.main then await do =>
  await demo()
  return null
