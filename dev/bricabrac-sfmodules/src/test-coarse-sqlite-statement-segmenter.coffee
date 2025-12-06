

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
  whisper }               = GUY.trm.get_loggers 'bricabrac-sqlite-segmenter'
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
# { f }                     = require '../../../apps/effstring'
# # write                     = ( p ) -> process.stdout.write p
# { nfa }                   = require '../../../apps/normalize-function-arguments'
{ Test,                 } = require '../../../apps/guy-test-NG'
SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
# FS                        = require 'node:fs'
# PATH                      = require 'node:path'

#===========================================================================================================
get_various_sources = ->
  SQL   = String.raw
  R     = {}
  #.........................................................................................................
  R.long_source_nl = SQL"""

    create table "names" ( /* Nr 1 */
      name text unique not null,
      "no-comment[" /* bcomment! */ text not null default 'no;comment', -- lcomment brother
      [uuugh....] integer );

    -- ---X---X---
    -- Alas, a valid statement (although probably not one that can appear in regular dump file) ###
    /* Nr 2 */ delete from end where end = 'x' returning end;

    -- ---X---X---
    /* Nr 3 */ begin immediate transaction;

    -- ---X---X---
    CREATE TRIGGER jzr_mirror_triples_register  /* Nr 4 */
    before insert on jzr_mirror_triples_base
    for each row begin
      select trigger_on_before_insert( 'jzr_mirror_triples_base', new.rowid, new.ref, new.s, new.v, new.o );
      end /*comment */ -- newline!
      /* Nr 5 */ ;
    """
  #.........................................................................................................
  R[ "source_#{idx + 1}" ]  = source for source, idx in R.long_source_nl.split /-- ---X.*/gm
  get_plain_sources         = -> ( source for key, source of R when /^source_\d+/.test key )
  # get_sources_no_lcomments  = -> ( ( source.replace /(?<=\s)--.*$/g, '' ) for source in get_plain_sources() )
  get_sources_no_lcomments  = -> ( ( source.replace /--.*$/gm, '' ) for source in get_plain_sources() )
  # debug 'Ωtcs___1', '\n' + source for source in get_plain_sources()
  # debug 'Ωtcs___2', '\n' + source for source in get_sources_no_lcomments()
  # R.long_source_nl          = ( get_plain_sources() ).join '\n'
  R.long_source_one_line    = ( ( get_sources_no_lcomments() ).join '' ).replace /\n/g, ''
  return R

#-----------------------------------------------------------------------------------------------------------
get_realistic_sources = ->
  SQL   = String.raw
  R     = {}
  R.realistic_source_1 = SQL"""
    -- ---X---X---
    select 24 as a;

    -- ---X---X---
    create table t (
        rowid text unique not null primary key );

    -- ---X---X---
    CREATE TRIGGER some_trigger  /* Nr 4 */
    before insert on t
    for each row begin
      select trigger_on_before_insert( 't', new.rowid );
      end /*comment */ -- newline!
      /* Nr 5 */ ;

    -- ---X---X---
    insert into t ( rowid ) values ( 'first' );
    -- ---X---X---
    insert into t ( rowid ) values ( 'second' );
    -- ---X---X---
    insert into t ( rowid ) values ( 'third' );
    """
  return R


#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  statement_walker: ->
    { type_of,                    } = SFMODULES.unstable.require_type_of()
    { Statement_walker,
      Statement_applicator,
      internals,                  } = SFMODULES.require_coarse_sqlite_statement_segmenter()
    jr                              = JSON.stringify
    sources                         = get_various_sources()
    #.......................................................................................................
    do =>
      #.....................................................................................................
      walker        = new Statement_walker()
      @throws ( Ωtcs___3 = -> walker.scan undefined     ), /expected a text/
      @throws ( Ωtcs___4 = -> walker.scan null          ), /expected a text/
      @throws ( Ωtcs___5 = -> walker.scan Symbol '??'   ), /expected a text/
      ;null
    #.......................................................................................................
    do =>
      walker        = new Statement_walker()
      @eq ( Ωtcs___6 = -> type_of walker.scan     ), 'function'
      @eq ( Ωtcs___7 = -> type_of walker.scan 'x' ), 'generator'
      #.....................................................................................................
      # 'Ωtcs___8', jr segment for segment from walker.scan sources.source_1
      # 'Ωtcs___9', jr segment for segment from walker.scan sources.long_source_nl
      # 'Ωtcs__10', jr segment for segment from walker.scan sources.long_source_one_line
      #.....................................................................................................
      ;null
    #.......................................................................................................
    do =>
      walker    = new Statement_walker()
      segments  = walker.scan sources.source_1
      segment   = segments.next().value
      echo jr segment
      @eq ( Ωtcs__11 = -> /// \b Nr \s+ 1     \b ///.test segment ), true
      @eq ( Ωtcs__12 = -> /// \b Nr \s+ [^1]+ \b ///.test segment ), false
      @eq ( Ωtcs__13 = -> segments.next().done ), true
      ;null
    #.......................................................................................................
    do =>
      walker    = new Statement_walker()
      segments  = walker.scan sources.long_source_nl
      #.....................................................................................................
      segment   = segments.next().value
      echo jr segment
      @eq ( Ωtcs__14 = -> /// \b Nr \s+ 1     \b ///.test segment ), true
      #.....................................................................................................
      segment   = segments.next().value
      echo jr segment
      @eq ( Ωtcs__15 = -> /// \b Nr \s+ 2     \b ///.test segment ), true
      #.....................................................................................................
      segment   = segments.next().value
      echo jr segment
      @eq ( Ωtcs__16 = -> /// \b Nr \s+ 3     \b ///.test segment ), true
      #.....................................................................................................
      segment   = segments.next().value
      echo jr segment
      @eq ( Ωtcs__17 = -> /// \b Nr \s+ 4     \b ///.test segment ), true
      #.....................................................................................................
      segment   = segments.next().value
      echo jr segment
      @eq ( Ωtcs__18 = -> /// \b Nr \s+ 5     \b ///.test segment ), true
      #.....................................................................................................
      @eq ( Ωtcs__19 = -> segments.next().done ), true
      ;null
    #.......................................................................................................
    do =>
      walker    = new Statement_walker()
      segments  = walker.scan sources.long_source_one_line
      #.....................................................................................................
      segment   = segments.next().value
      echo jr segment
      @eq ( Ωtcs__20 = -> /// \b Nr \s+ 1     \b ///.test segment ), true
      #.....................................................................................................
      segment   = segments.next().value
      echo jr segment
      @eq ( Ωtcs__21 = -> /// \b Nr \s+ 2     \b ///.test segment ), true
      #.....................................................................................................
      segment   = segments.next().value
      echo jr segment
      @eq ( Ωtcs__22 = -> /// \b Nr \s+ 3     \b ///.test segment ), true
      #.....................................................................................................
      segment   = segments.next().value
      echo jr segment
      @eq ( Ωtcs__23 = -> /// \b Nr \s+ 4     \b ///.test segment ), true
      #.....................................................................................................
      segment   = segments.next().value
      echo jr segment
      @eq ( Ωtcs__24 = -> /// \b Nr \s+ 5     \b ///.test segment ), true
      #.....................................................................................................
      @eq ( Ωtcs__25 = -> segments.next().done ), true
      ;null
    # #.....................................................................................................
    # for token from walker.scan_tokens sources.long_source_one_line
    #   info 'Ωtcs__26', ( rpr token.fqname ), ( rpr token .hit ) unless ( token.fqname is 'top.ws' ) or ( token.is_system )
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  statement_applicator: ->
    { type_of,                    } = SFMODULES.unstable.require_type_of()
    { Statement_walker,
      Statement_applicator,
      internals,                  } = SFMODULES.require_coarse_sqlite_statement_segmenter()
    { Dbric,
      Dbric_std,
      SQL,                        } = SFMODULES.unstable.require_dbric()
    jr                              = JSON.stringify
    sources                         = get_various_sources()
    #.......................................................................................................
    do =>
      #.....................................................................................................
      call_results  = []
      db          = new Dbric ':memory:'
      db.create_function
        name: 'trigger_on_before_insert'
        call: ( table_name, rowid ) -> call_results.push { table_name, rowid, }
      applicator  = new Statement_applicator { db, }
      sources     = get_realistic_sources()
      show        = ( x ) -> echo jr x; x
      #.....................................................................................................
      statements = applicator.scan sources.realistic_source_1
      statement  = show statements.next().value; @eq ( Ωtcs__27 = -> statement ), "-- ---X---X---\nselect 24 as a;"
      statement  = show statements.next().value; @eq ( Ωtcs__28 = -> statement ), "\n\n-- ---X---X---\ncreate table t (\n    rowid text unique not null primary key );"
      statement  = show statements.next().value; @eq ( Ωtcs__29 = -> statement ), "\n\n-- ---X---X---\nCREATE TRIGGER some_trigger  /* Nr 4 */\nbefore insert on t\nfor each row begin\n  select trigger_on_before_insert( 't', new.rowid );\n  end /*comment */ -- newline!\n  /* Nr 5 */ ;"
      statement  = show statements.next().value; @eq ( Ωtcs__30 = -> statement ), "\n\n-- ---X---X---\ninsert into t ( rowid ) values ( 'first' );"
      statement  = show statements.next().value; @eq ( Ωtcs__31 = -> statement ), "\n-- ---X---X---\ninsert into t ( rowid ) values ( 'second' );"
      statement  = show statements.next().value; @eq ( Ωtcs__32 = -> statement ), "\n-- ---X---X---\ninsert into t ( rowid ) values ( 'third' );"
      @eq ( Ωtcs__33 = -> statements.next().done ), true
      ( statement for statement from statements ) ### NOTE ensure that statements are applied in case the above is incomplete ###
      #.....................................................................................................
      statement = SQL"select * from t order by rowid;"
      echo jr row for row from db.walk statement
      rows = db.walk statement
      @eq ( Ωtcs__34 = -> rows.next().value ), { rowid: 'first', }
      @eq ( Ωtcs__35 = -> rows.next().value ), { rowid: 'second', }
      @eq ( Ωtcs__36 = -> rows.next().value ), { rowid: 'third', }
      @eq ( Ωtcs__37 = -> rows.next().done ), true
      #.....................................................................................................
      statement = SQL"select name, sql from sqlite_schema where type in ( 'table', 'view' ) order by name, type;"
      echo jr row for row from db.walk statement
      rows = db.walk statement
      @eq ( Ωtcs__38 = -> rows.next().value ), {"name":"t","sql":"CREATE TABLE t (\n    rowid text unique not null primary key )"}
      @eq ( Ωtcs__53 = -> rows.next().done ), true
      ;null
    #.......................................................................................................
    return null




#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: true,   show_passes: true, report_checks: true, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { statement_inheritance: tests.statement_inheritance, }
