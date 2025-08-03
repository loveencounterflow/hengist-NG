
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
SQLITE                    = require 'node:sqlite'
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
class Node_sqlite

  #---------------------------------------------------------------------------------------------------------
  @statements: {}

  #---------------------------------------------------------------------------------------------------------
  constructor: ( db_path ) ->
    @db                 = new SQLITE.DatabaseSync db_path
    clasz               = @constructor
    ### NOTE we can't just prepare all the stetments as they depend on DB objects existing or not existing,
    as the case may be. Hence we prepare statements on-demand and cache them here as needed: ###
    @statements         = {}
    #.......................................................................................................
    ### TAINT move to proper attribute of proper class ###
    cfg = { deterministic: true, varargs: false, }
    @db.function 'width_from_text', cfg, ( text ) ->
      ### TAINT preliminary implementation ###
      return ( Array.from text ).length
    @db.function 'length_from_text', cfg, ( text ) ->
      return ( Array.from text ).length
    #.......................................................................................................
    for name, sql of clasz.statements
      switch true
        when name.startsWith 'create_table_'
          null
        when name.startsWith 'insert_'
          null
        else
          throw new Error "Ωnql___1 unable to parse statement name #{rpr name}"
    #   @[ name ] = @prepare sql
    return undefined

  #---------------------------------------------------------------------------------------------------------
  execute: ( sql ) -> @db.exec sql

  #---------------------------------------------------------------------------------------------------------
  prepare: ( sql ) -> @db.prepare sql


#===========================================================================================================
class Segment_width_db extends Node_sqlite

  #---------------------------------------------------------------------------------------------------------
  @statements:
    #.......................................................................................................
    create_table_segments: SQL"""
      drop table if exists segments;
      create table segments (
          segment_text      text    not null primary key,
          segment_width     integer not null generated always as ( width_from_text(  segment_text ) ) stored,
          segment_length    integer not null generated always as ( length_from_text( segment_text ) ) stored,
        constraint segment_width_eqgt_zero  check ( segment_width  >= 0 ),
        constraint segment_length_eqgt_zero check ( segment_length >= 0 ) );"""
    # #.......................................................................................................
    # insert_segment: SQL"""
    #   insert into segments  ( segment_text,   segment_width,  segment_length  )
    #                 values  ( $segment_text,  $segment_width, $segment_length )
    #     on conflict ( segment_text ) do update
    #                 set     (                 segment_width,  segment_length  ) =
    #                         ( excluded.segment_width, excluded.segment_length );"""
    #.......................................................................................................
    insert_segment: SQL"""
      insert into segments  ( segment_text  )
                    values  ( $segment_text )
        on conflict ( segment_text ) do nothing;"""

#===========================================================================================================
demo = =>
  debug 'Ωnql___2', k, v for k, v of env_paths
  tmp_path  = env_paths.temp
  db_path   = PATH.join tmp_path, 'chr-widths.sqlite'
  debug 'Ωnql___3', mkdirp.sync tmp_path
  debug 'Ωnql___4', db = new Segment_width_db db_path
  #.........................................................................................................
  db.execute SQL"""drop table if exists segments;"""
  db.execute db.constructor.statements.create_table_segments
  insert_segment = db.prepare db.constructor.statements.insert_segment
  #.........................................................................................................
  all_segments = db.prepare SQL"""select * from segments order by segment_text;"""
  #.........................................................................................................
  db.execute SQL"""begin transaction;"""
  for cid in [ 0x00_000c .. 0x00_0050 ]
    chr     = String.fromCodePoint cid
    cid_hex = "U+#{( cid.toString 16 ).padStart 4, '0'}"
    chr     = String.fromCodePoint cid
    ucc     = get_rough_unicode_category chr
    # debug 'Ωbbsfm___5', cid_hex, ( rpr chr ), ucc
    segment_text    = chr
    segment_width   = null
    segment_length  = null
    switch ucc
      when 'control'
        segment_width   = 0
        segment_length  = 0
      when 'separator'
        segment_width   = 0
        segment_length  = 0
      else
        segment_width   = 1 ### TAINT run wc --max-line-length ###
        segment_length  = 1
    insert_segment.run { segment_text, }
  insert_segment.run { segment_text: "a somewhat longer text", }
  db.execute SQL"""commit;"""
  for { segment_text, segment_width, segment_length, } from all_segments.iterate()
    info 'Ωnql___6', ( rpr segment_text ), segment_width, segment_length
  #.........................................................................................................
  # some_segments = db.prepare SQL"""select * from segments where segment_text in ( $texts );"""
  # debug 'Ωnql___7', some_segments.run { texts: [ 'a', 'b', ], }
  some_segments = db.prepare SQL"""select * from segments where segment_text in (
    select value from json_each(?) );"""
  # some_segments.setReturnArrays true
  for { segment_text, segment_width, segment_length, }, idx in some_segments.all ( JSON.stringify [ 'a', 'b', ] )
    urge 'Ωnql___8', idx, ( rpr segment_text ), segment_width, segment_length
  #.........................................................................................................
  some_segments_with_widths = db.prepare SQL"""
    select
      $text as my_text,
      width_from_text( $text ) as width;"""
  debug 'Ωnql___9', some_segments_with_widths.all { text: '765', }
  #.........................................................................................................
  return null

#===========================================================================================================
if module is require.main then await do =>
  await demo()
  return null
