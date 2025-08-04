
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

#-----------------------------------------------------------------------------------------------------------
get_rough_unicode_category = ( chr ) ->
  for name, pattern of illegal_codepoint_patterns
    return name if pattern.test chr
  return 'other'


#===========================================================================================================
CP = require 'node:child_process'

#-----------------------------------------------------------------------------------------------------------
get_command_line_result = ( command, input ) ->
  return ( CP.execSync command, { encoding: 'utf-8', input, } ).replace /\n$/s, ''

#-----------------------------------------------------------------------------------------------------------
get_wc_max_line_length = ( text ) ->
  ### thx to https://unix.stackexchange.com/a/258551/280204 ###
  return parseInt ( get_command_line_result 'wc --max-line-length', text ), 10


#===========================================================================================================
class Node_sqlite

  #---------------------------------------------------------------------------------------------------------
  @functions: {}
  @statements: {}

  #---------------------------------------------------------------------------------------------------------
  constructor: ( db_path ) ->
    @db                 = new SQLITE.DatabaseSync db_path
    clasz               = @constructor
    ### NOTE we can't just prepare all the stetments as they depend on DB objects existing or not existing,
    as the case may be. Hence we prepare statements on-demand and cache them here as needed: ###
    @statements         = {}
    #.......................................................................................................
    fn_cfg_template = { deterministic: true, varargs: false, }
    for name, fn_cfg of clasz.functions
      if ( typeof fn_cfg ) is 'function'
        [ call, fn_cfg, ] = [ fn_cfg, {}, ]
      else
        { call, } = fn_cfg
      fn_cfg  = { fn_cfg_template..., fn_cfg, }
      call    = call.bind @
      @db.function name, fn_cfg, call
    # #.......................................................................................................
    # for name, sql of clasz.statements
    #   switch true
    #     when name.startsWith 'create_table_'
    #       null
    #     when name.startsWith 'insert_'
    #       null
    #     else
    #       throw new Error "Ωnql___1 unable to parse statement name #{rpr name}"
    # #   @[ name ] = @prepare sql
    return undefined

  #---------------------------------------------------------------------------------------------------------
  execute: ( sql ) -> @db.exec sql

  #---------------------------------------------------------------------------------------------------------
  prepare: ( sql ) -> @db.prepare sql


#===========================================================================================================
class Segment_width_db extends Node_sqlite

  #---------------------------------------------------------------------------------------------------------
  @functions:
    #.......................................................................................................
    width_from_text:
      deterministic:  true
      varargs:        false
      call:           ( text ) -> get_wc_max_line_length text
    #.......................................................................................................
    length_from_text:
      deterministic:  true
      varargs:        false
      call:           ( text ) -> text.length

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
        on conflict ( segment_text ) do nothing
        returning *;"""
    #.......................................................................................................
    select_row_from_segments: SQL"""
      select * from segments where segment_text = $segment_text limit 1;"""

  #---------------------------------------------------------------------------------------------------------
  constructor: ( db_path ) ->
    super db_path
    clasz   = @constructor
    @cache  = new Map()
    ### TAINT should be done automatically ###
    @statements =
      insert_segment:           @prepare clasz.statements.insert_segment
      select_row_from_segments: @prepare clasz.statements.select_row_from_segments
    return undefined

  #---------------------------------------------------------------------------------------------------------
  get_many_segment_metrics: ( segment_texts... ) ->
    ### TAINT consider bundling requests into single one using JSON array ###
    segment_texts = segment_texts.flat Infinity
    R = Object.create null
    for segment_text in segment_texts
      if ( row = @cache.get segment_text )?
        null
      else if ( row = @statements.select_row_from_segments.get { segment_text, } )?
        @cache.set segment_text, row
      else
        row = @statements.insert_segment.get { segment_text, }
        @cache.set segment_text, row
      R[ segment_text ] = row
    return R

  #---------------------------------------------------------------------------------------------------------
  get_single_segment_metrics: ( segment_text ) -> return R for _, R of @get_many_segment_metrics segment_text


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
  session = db.db.createSession()
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
    info 'Ωnql___6', insert_segment.all { segment_text, }
  db.execute SQL"""commit;"""
  info 'Ωnql___7', insert_segment.all { segment_text: "a somewhat longer text", }
  info 'Ωnql___8', insert_segment.all { segment_text: "a text", }
  info 'Ωnql___9', insert_segment.all { segment_text: "A", }
  info 'Ωnql__10', insert_segment.all { segment_text: "9", }
  urge 'Ωnql__11', insert_segment.all { segment_text: "\n", }
  urge 'Ωnql__12', insert_segment.all { segment_text: "", }
  urge 'Ωnql__13', insert_segment.all { segment_text: "$(ls)", }
  count_segments = db.prepare SQL"select count(*) from segments;"
  info 'Ωnql__14', count_segments.get()
  # for { segment_text, segment_width, segment_length, } from all_segments.iterate()
  #   info 'Ωnql__15', ( rpr segment_text ), segment_width, segment_length
  #.........................................................................................................
  # some_segments = db.prepare SQL"""select * from segments where segment_text in ( $texts );"""
  # debug 'Ωnql__16', some_segments.run { texts: [ 'a', 'b', ], }
  # some_segments = db.prepare SQL"""select * from segments where segment_text in (
  #   select value from json_each(?) );"""
  # some_segments.setReturnArrays true
  # for { segment_text, segment_width, segment_length, }, idx in some_segments.all ( JSON.stringify [ 'a', 'b', ] )
  #   urge 'Ωnql__17', idx, ( rpr segment_text ), segment_width, segment_length
  #.........................................................................................................
  info 'Ωnql__18', db.cache.size
  info 'Ωnql__19', db.get_many_segment_metrics 'A', 'a somewhat longer text', 'Z'
  info 'Ωnql__20', db.cache.size
  info 'Ωnql__21', db.get_single_segment_metrics 'a new text'
  info 'Ωnql__22', db.cache.size
  info 'Ωnql__23', count_segments.get()
  # info 'Ωnql__24', db.cache
  # #.........................................................................................................
  # some_segments_with_widths = db.prepare SQL"""
  #   select
  #     $text as my_text,
  #     width_from_text( $text ) as width;"""
  # debug 'Ωnql__25', some_segments_with_widths.all { text: '765', }
  #.........................................................................................................
  # debug 'Ωnql__26', rpr ( Buffer.from session.patchset() ).toString 'utf-8'
  debug 'Ωnql__27', session.patchset()
  debug 'Ωnql__28', ( require 'node:fs' ).writeFileSync '/tmp/changeset.bin', session.patchset()
  #.........................................................................................................
  return null

#===========================================================================================================
if module is require.main then await do =>
  await demo()
  { asyncExitHook,
    default: on_exit,
    gracefulExit, } = require 'exit-hook'
  debug 'Ωnql__29', { asyncExitHook, on_exit, gracefulExit}
  return null
