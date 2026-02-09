


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
  whisper }               = GUY.trm.get_loggers 'bricabrac-dbric-hoard'
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
SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
FS                        = require 'node:fs'
PATH                      = require 'node:path'
#===========================================================================================================
{ Dbric,
  Dbric_std,
  IDN,
  LIT,
  SQL,
  VEC,
  from_bool,
  as_bool,
  True,
  False,
  unquote_name,         } = require '../../../apps/bricabrac-sfmodules/lib/dbric'
{ Hoard,
  Scatter,
  Run,
  summarize_data,
  internals,            } = require '../../../apps/bricabrac-sfmodules/lib/intermission'
{ lets,                 } = internals


#===========================================================================================================
hoard_plugin =
  name:     'hoard'
  prefix:   'hrd'
  exports:
    #---------------------------------------------------------------------------------------------------
    build: ->
      #.................................................................................................
      ### TAINT stopgap solution ###
      cfg =
        runs_rowid_regexp:        '.+'
        first_point:              0x00_0000
        last_point:               0x10_ffff
      #.................................................................................................
      R = []
      #-------------------------------------------------------------------------------------------------
      R.push SQL"""
        create table hrd_hoard_scatters (
            rowid     text    unique  not null,
            is_hit    boolean         not null default false,
            data      json            not null default 'null'
            );"""

      #-------------------------------------------------------------------------------------------------
      R.push SQL"""
        create table hrd_hoard_runs (
            rowid     text    unique  not null,
            lo        integer         not null,
            hi        integer         not null,
            scatter   text            not null,
          -- primary key ( rowid ),
          foreign key ( scatter ) references hrd_hoard_scatters ( rowid ),
          constraint "Ωconstraint___1" check ( rowid regexp #{LIT cfg.runs_rowid_regexp } ),
          constraint "Ωconstraint___2" check ( lo between #{LIT cfg.first_point} and #{LIT cfg.last_point} ),
          constraint "Ωconstraint___3" check ( hi between #{LIT cfg.first_point} and #{LIT cfg.last_point} ),
          constraint "Ωconstraint___4" check ( lo <= hi )
          -- constraint "Ωconstraint___5" check ( rowid regexp '^.*$' )
          );"""
      #-------------------------------------------------------------------------------------------------------
      return R
    statements:
      hrd_yyy: SQL"select 1 as n;"
      hrd_insert_scatter: SQL"""insert into hrd_hoard_scatters ( rowid, is_hit, data )
        values ( $rowid, $is_hit, $data );"""
      hrd_insert_run: SQL"""insert into hrd_hoard_runs ( rowid, lo, hi, scatter )
        values ( $rowid, $lo, $hi, $scatter );"""

#=======================================================================================================
class Hoard_user extends Dbric_std
  @prefix:  'jzr'
  @plugins: [
    # 'prototypes'
    hoard_plugin
    # 'me'
    ]

#=======================================================================================================
class Hoard_extras extends Hoard

  #-----------------------------------------------------------------------------------------------------
  constructor: ( db ) ->
    super()
    @db = db
    @restore()
    ;undefined

  #-----------------------------------------------------------------------------------------------------
  restore: ->
    scatters = {}
    for row from @db.walk SQL"select * from hrd_hoard_scatters order by rowid;"
      ### TAINT use `Scatter._from_db_row()` ###
      scatter                       = new Scatter @, ( JSON.parse row.data ), { rowid: row.rowid, is_normalized: true, }
      scatters[ scatter.rowid ]     = scatter
      @scatters.push scatter
    for row from @db.walk SQL"select * from hrd_hoard_runs order by rowid;"
      ### TAINT use `Run._from_db_row()` ###
      run                           = new Run { lo: row.lo, hi: row.hi, }
      run.rowid                     = row.rowid
      @state.run_rowid              = Math.max @state.run_rowid, Number run.rowid.replace /^.*=/, ''
      run.scatter                   = row.scatter
      scatters[ run.scatter ].runs  = lets scatters[ run.scatter ].runs, ( runs ) -> runs.push run
    ;null

  #-----------------------------------------------------------------------------------------------------
  save: ->
    for scatter in @scatters
      scatter.normalize()
      is_hit      = from_bool true
      data        = JSON.stringify scatter.data
      @db.statements.hrd_insert_scatter.run { scatter..., is_hit, data, }
      for run in scatter.runs
        @db.statements.hrd_insert_run.run { run..., }
    ;null


#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  dbric_hoard_plugin_model: ->
    #.......................................................................................................
    u = new Hoard_user { rebuild: true, }
    # debug 'Ωdbrh___6', row.name for row from u.walk u.statements.std_get_relations
    names = new Set ( row.name for row from u.walk u.statements.std_get_relations )
    @eq ( Ωdbrh___7 = -> names.has 'hrd_hoard_runs'      ), true
    @eq ( Ωdbrh___8 = -> names.has 'hrd_hoard_scatters'  ), true
    @eq ( Ωdbrh___9 = -> names.has 'std_functions'       ), true
    @eq ( Ωdbrh__10 = -> names.has 'std_relations'       ), true
    @eq ( Ωdbrh__11 = -> names.has 'std_tables'          ), true
    @eq ( Ωdbrh__12 = -> names.has 'std_variables'       ), true
    @eq ( Ωdbrh__13 = -> names.has 'std_views'           ), true
    @eq ( Ωdbrh__14 = -> u.get_all u.statements.hrd_yyy ), [ { n: 1, }, ]
    #.......................................................................................................
    do =>
      h_1 = new Hoard_extras u
      ascii = h_1.add_scatter { is_ascii_alphanum: true, }
      @eq ( Ωdbrh__15 = -> ascii.rowid ), 't:hrd:scatters,R=1'
      ascii.add_run 'a', 'z'
      ascii.add_run 'A', 'Z'
      ascii.add_run '0', '9'
      ascii.normalize()
      echo run for run from runs = ( -> yield from ascii.runs )()
      @eq ( Ωdbrh__16 = -> h_1.state.run_rowid             ), 3
      #.....................................................................................................
      runs = ( -> yield from ascii.runs )()
      @eq ( Ωdbrh__17 = -> ascii.rowid                     ), 't:hrd:scatters,R=1'
      @eq ( Ωdbrh__18 = -> runs.next().value               ), { lo: 48, hi: 57, rowid: 't:hrd:runs,R=1', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωdbrh__19 = -> runs.next().value               ), { lo: 65, hi: 90, rowid: 't:hrd:runs,R=2', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωdbrh__20 = -> runs.next().value               ), { lo: 97, hi: 122, rowid: 't:hrd:runs,R=3', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωdbrh__21 = -> runs.next().done                ), true
      @eq ( Ωdbrh__22 = -> h_1.summarize_data_for_point '&'  ), null
      @eq ( Ωdbrh__23 = -> h_1.summarize_data_for_point 'a'  ), { is_ascii_alphanum: [ true ] }
      #.....................................................................................................
      h_1.save()
      #.....................................................................................................
      echo row for row from rows = u.walk SQL"select * from hrd_hoard_scatters order by rowid;"
      rows = u.walk SQL"select * from hrd_hoard_scatters order by rowid;"
      @eq ( Ωdbrh__24 = -> rows.next().value ), { rowid: 't:hrd:scatters,R=1', is_hit: 1, data: '{"is_ascii_alphanum":true}' }
      @eq ( Ωdbrh__25 = -> rows.next().done  ), true
      #.....................................................................................................
      echo row for row from rows = u.walk SQL"select * from hrd_hoard_runs order by rowid;"
      rows = u.walk SQL"select * from hrd_hoard_runs order by rowid;"
      @eq ( Ωdbrh__26 = -> rows.next().value ), { rowid: 't:hrd:runs,R=1', lo: 48, hi: 57, scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωdbrh__27 = -> rows.next().value ), { rowid: 't:hrd:runs,R=2', lo: 65, hi: 90, scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωdbrh__28 = -> rows.next().value ), { rowid: 't:hrd:runs,R=3', lo: 97, hi: 122, scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωdbrh__29 = -> rows.next().done  ), true
      ;null
    #.......................................................................................................
    do =>
      h_2 = new Hoard_extras u
      ascii = ( h_2.scatters.at -1 ) ? {}
      @eq ( Ωdbrh__30 = -> ascii.rowid ), 't:hrd:scatters,R=1'
      @eq ( Ωdbrh__31 = -> h_2.state.run_rowid               ), 3
      echo run for run from runs = ( -> yield from ascii.runs ? [] )()
      #.....................................................................................................
      runs = ( -> yield from ascii.runs ? [] )()
      @eq ( Ωdbrh__32 = -> ascii.rowid                       ), 't:hrd:scatters,R=1'
      @eq ( Ωdbrh__33 = -> runs.next().value                 ), { lo: 48, hi: 57, rowid: 't:hrd:runs,R=1', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωdbrh__34 = -> runs.next().value                 ), { lo: 65, hi: 90, rowid: 't:hrd:runs,R=2', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωdbrh__35 = -> runs.next().value                 ), { lo: 97, hi: 122, rowid: 't:hrd:runs,R=3', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωdbrh__36 = -> runs.next().done                  ), true
      @eq ( Ωdbrh__37 = -> h_2.summarize_data_for_point '&'  ), null
      @eq ( Ωdbrh__38 = -> h_2.summarize_data_for_point 'a'  ), { is_ascii_alphanum: [ true ] }
      #.....................................................................................................
      ;null
    #.......................................................................................................
    ;null


#===========================================================================================================
if module is require.main then await do =>
  do_coverage = true
  do_coverage = false
  if do_coverage
    { Coverage_analyzer,          } = require '../../../apps/bricabrac-sfmodules/lib/coverage-analyzer'
    ca = new Coverage_analyzer()
    ca.wrap_class Dbric_std
  #---------------------------------------------------------------------------------------------------------
  guytest_cfg = { throw_on_error: false,  show_passes: true, report_checks: true, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { dbric_hoard_plugin_model: tests.dbric_hoard_plugin_model, }
  # ( new Test guytest_cfg ).test { dbric_dynamic_build_properties: tests.dbric_dynamic_build_properties, }
  #---------------------------------------------------------------------------------------------------------
  if do_coverage
    warn 'Ωdbrh__40', "not covered:", reverse name for name in ca.unused_names if ca.unused_names.length > 0
    # help 'Ωdbrh__41', ca.used_names
    # urge 'Ωdbrh__42', count, names for count, names of ca.names_by_counts
  #=========================================================================================================
  ;null


