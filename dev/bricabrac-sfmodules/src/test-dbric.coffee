

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
  whisper }               = GUY.trm.get_loggers 'bricabrac-dbric'
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
remove = ( path ) ->
  try
    FS.unlinkSync path
    help 'Ωbbdbr___1', "removed #{rpr path}"
  catch error
    throw error unless error.code is 'ENOENT'
    urge 'Ωbbdbr___2', "no such FS object: #{rpr path}"
  return null


#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  dbric_esql: ->
    { esql,
      internals,                } = SFMODULES.unstable.require_dbric()
    #.......................................................................................................
    @eq     ( Ωbbdbr___3 = -> internals.type_of esql.unquote_name ), 'function'
    @eq     ( Ωbbdbr___4 = -> esql.unquote_name 'abc'             ), 'abc'
    @eq     ( Ωbbdbr___5 = -> esql.unquote_name '"abc"'           ), 'abc'
    @eq     ( Ωbbdbr___6 = -> esql.unquote_name '"ab""c"'         ), 'ab"c'
    @throws ( Ωbbdbr___7 = -> esql.unquote_name ''                ), /expected a name/
    @throws ( Ωbbdbr___8 = -> esql.unquote_name '"'               ), /expected a name/
    @throws ( Ωbbdbr___9 = -> esql.unquote_name '""'              ), /expected a name/
    @throws ( Ωbbdbr__10 = -> esql.unquote_name false             ), /expected a text, got a boolean/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  reject_nonconformant_build_statements: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    { temp,                     } = SFMODULES.unstable.require_temp()
    #.......................................................................................................
    class Dbric_nonconform extends Dbric
      @build: [
        SQL"""
          create table nonconform_one ( a text primary key );"""
        SQL"""
          -- this comment shouldn't be here
          create view nonconform_two as select * from nonconform_one;"""
        ]
    #.......................................................................................................
    temp.with_directory { keep: false, }, ({ path: folder_path, }) =>
      db_path = ':memory:'
      #.....................................................................................................
      do =>
        @throws ( Ωbbdbr__11 = -> db = new Dbric_nonconform db_path ), /1 out of 2 build statement\(s\) could not be parsed/
        return null
      #.....................................................................................................
      do =>
        @throws ( Ωbbdbr__12 = -> new Dbric_nonconform db_path ), /1 out of 2 build statement\(s\) could not be parsed/
        return null
      #.....................................................................................................
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  dbric_std: ->
    { Dbric,
      Dbric_std,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    { temp,                     } = SFMODULES.unstable.require_temp()
    Bsql3                         = require 'better-sqlite3'
    #.......................................................................................................
    temp.with_directory { keep: false, }, ({ path: folder_path, }) =>
      # folder_path = '/tmp/bricbrac-test' # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      db_path = PATH.join folder_path, 'bricabrac.sqlite'
      remove db_path
      help 'Ωbbdbr__13', { db_path, }
      #.....................................................................................................
      do =>
        db = new Dbric db_path
        @eq   ( Ωbbdbr__14 = -> db.is_ready ), true
        return null
      #.....................................................................................................
      do =>
        db = ( new Dbric db_path )
        @eq   ( Ωbbdbr__15 = -> db instanceof Dbric         ), true
        @eq   ( Ωbbdbr__16 = -> db._get_db_objects()        ), {}
        @eq   ( Ωbbdbr__17 = -> db.is_ready                 ), true
        @eq   ( Ωbbdbr__18 = -> db.build()                  ), 0
        return null
    #.......................................................................................................
    temp.with_directory { keep: false, }, ({ path: folder_path, }) =>
      # folder_path = '/tmp/bricbrac-test' # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      db_path = PATH.join folder_path, 'bricabrac.sqlite'
      remove db_path
      help 'Ωbbdbr__19', { db_path, }
      #.....................................................................................................
      do =>
        db = new Dbric db_path
        @eq   ( Ωbbdbr__20 = -> db.is_ready       ), true
        @eq   ( Ωbbdbr__21 = -> db.cfg.prefix     ), '(NOPREFIX)'
        @eq   ( Ωbbdbr__22 = -> db.prefix         ), ''
        @eq   ( Ωbbdbr__23 = -> db.prefix_re      ), /|/
        return null
      #.....................................................................................................
      do =>
        db = new Dbric_std db_path, { db_class: Bsql3, }
        @eq   ( Ωbbdbr__24 = -> db.is_ready       ), true
        @eq   ( Ωbbdbr__25 = -> db.cfg.prefix     ), 'std'
        @eq   ( Ωbbdbr__26 = -> db.prefix         ), 'std'
        @eq   ( Ωbbdbr__27 = -> db.prefix_re      ), /^_?\x73td_.*$/
        return null
      #.....................................................................................................
      do =>
        db = ( new Dbric_std db_path, { db_class: Bsql3, } )
        @eq   ( Ωbbdbr__28 = -> db instanceof Dbric         ), true
        @eq   ( Ωbbdbr__29 = -> db instanceof Dbric_std     ), true
        @eq   ( Ωbbdbr__30 = -> db._get_db_objects()        ), {
          std_tables:     { name: 'std_tables',     type: 'view' },
          std_views:      { name: 'std_views',      type: 'view' },
          std_relations:  { name: 'std_relations',  type: 'view' } }
        @eq   ( Ωbbdbr__31 = -> db.is_ready                 ), true
        @eq   ( Ωbbdbr__32 = -> db.build()                  ), 0
        return null
      #.....................................................................................................
      do =>
        db = ( new Dbric_std db_path, { db_class: Bsql3, } )
        @eq   ( Ωbbdbr__33 = -> db instanceof Dbric         ), true
        @eq   ( Ωbbdbr__34 = -> db instanceof Dbric_std     ), true
        @eq   ( Ωbbdbr__35 = -> db._get_db_objects()        ), {
          std_tables:     { name: 'std_tables',     type: 'view' },
          std_views:      { name: 'std_views',      type: 'view' },
          std_relations:  { name: 'std_relations',  type: 'view' } }
        @eq   ( Ωbbdbr__36 = -> db.is_ready                 ), true
        @eq   ( Ωbbdbr__37 = -> db.build()                  ), 0
        return null
      #.....................................................................................................
      do =>
        db = ( new Dbric_std db_path, { db_class: Bsql3, } )
        ( db.prepare SQL"drop view std_tables;" ).run()
        @eq   ( Ωbbdbr__38 = -> db.is_ready                 ), false
        return null
      #.....................................................................................................
      do =>
        db = ( new Dbric_std db_path, { db_class: Bsql3, } )
        @eq   ( Ωbbdbr__39 = -> db instanceof Dbric         ), true
        @eq   ( Ωbbdbr__40 = -> db instanceof Dbric_std     ), true
        @eq   ( Ωbbdbr__41 = -> db._get_db_objects()        ), {
          std_tables:     { name: 'std_tables',     type: 'view' },
          std_views:      { name: 'std_views',      type: 'view' },
          std_relations:  { name: 'std_relations',  type: 'view' } }
        @eq   ( Ωbbdbr__42 = -> db.is_ready                 ), true
        @eq   ( Ωbbdbr__43 = -> db.build()                  ), 0
        return null
      #.....................................................................................................
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  dbric_std_generate_series: ->
    Bsql3                         = require 'better-sqlite3'
    { Dbric,
      Dbric_std,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    { temp,                     } = SFMODULES.unstable.require_temp()
    #.......................................................................................................
    # sqlite> select * from generate_series( 1, 10, 0 );
    # ┌───────┐
    # │ value │
    # ├───────┤
    # │ 1     │
    # │ 2     │
    # │ 3     │
    # │ 4     │
    # │ 5     │
    # │ 6     │
    # │ 7     │
    # │ 8     │
    # │ 9     │
    # │ 10    │
    # └───────┘
    # sqlite> select * from generate_series( 1, 10, 0 );
    # ┌───────┐
    # │ value │
    # ├───────┤
    # │ 1     │
    # │ 2     │
    # │ 3     │
    # │ 4     │
    # │ 5     │
    # │ 6     │
    # │ 7     │
    # │ 8     │
    # │ 9     │
    # │ 10    │
    # └───────┘
    # sqlite> select * from generate_series( 1, 1, 0 );
    # ┌───────┐
    # │ value │
    # ├───────┤
    # │ 1     │
    # └───────┘
    # sqlite> select * from generate_series( 1, 0, 0 );
    # sqlite>

    #.......................................................................................................
    do =>
      class Db extends Dbric_std
        @db_class: Bsql3
      db = new Db ':memory:'
      @eq ( Ωbbdbr__44 = -> [ ( row.value for row from db.walk SQL"select * from std_generate_series( 1, 10, 2 );")...,  ] ), [ 1, 3, 5, 7, 9 ]
      @eq ( Ωbbdbr__45 = -> [ ( row.value for row from db.walk SQL"select * from std_generate_series( 1, 10, 0 );")...,  ] ), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
      @eq ( Ωbbdbr__46 = -> [ ( row.value for row from db.walk SQL"select * from std_generate_series( 1, 1, 0 );")...,   ] ), [ 1 ]
      @eq ( Ωbbdbr__47 = -> [ ( row.value for row from db.walk SQL"select * from std_generate_series( 1, 0, 0 );")...,   ] ), []
      return null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  statement_inheritance: ->
    { Dbric,
      Dbric_std,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    # { temp,                     } = SFMODULES.unstable.require_temp()
    # { StatementSync,            } = require 'node:sqlite'
    Bsql3                         = require 'better-sqlite3'
    statement_class               = ( ( new Bsql3 ':memory:' ).prepare SQL"select 1 where false;" ).constructor
    #.......................................................................................................
    get_function_names = ( dba ) -> new Set ( name for { name, } from \
      dba.walk SQL"select name from pragma_function_list() order by name;" )
    #.......................................................................................................
    get_table_names = ( dba ) -> new Set ( name for { name, } from \
      dba.walk SQL"""select name from sqlite_schema
      where type is 'table' order by name;""" )
    #.......................................................................................................
    get_view_names = ( dba ) -> new Set ( name for { name, } from \
      dba.walk SQL"""select name from sqlite_schema
      where type is 'view' order by name;""" )
    #.......................................................................................................
    get_trigger_names = ( dba ) -> new Set ( name for { name, } from \
      dba.walk SQL"""select name from sqlite_schema
      where type is 'trigger' order by name;""" )
    #.......................................................................................................
    class A extends Dbric_std
      @db_class: Bsql3
      @functions:
        fn_a:
          value: -> return 1
      @statements:
        select_a: SQL"select fn_a() as one, 2 as two;"
      @build: [
        SQL"create table table_a ( d text );"
        SQL"create view view_a as select * from table_a;"
        ]
    #.......................................................................................................
    class B extends A
      @functions:
        fn_b:
          value: -> return 1
      @statements:
        select_b: SQL"select fn_b() as one, 2 as two;"
      @build: [
        SQL"create table table_b ( d text );"
        SQL"create view view_b as select * from table_b;"
        ]
    #.......................................................................................................
    class C_duplicate_function extends B
      @functions:
        fn_b:
          value: -> return 1
    #.......................................................................................................
    class C_duplicate_statement extends B
      @statements:
        select_b: SQL"select fn_b() as one, 2 as two;"
    #.......................................................................................................
    class C_duplicate_table extends B
      @build: [
        SQL"create table table_b ( d text );"
        SQL"create view view_b as select * from table_b;"
        ]
    # #.......................................................................................................
    # b = new B()
    # debug 'Ωbbdbr__48', b
    # debug 'Ωbbdbr__49', 'functions: ', get_function_names b
    # debug 'Ωbbdbr__50', 'functions: ', ( get_function_names b ).has 'fn_a'
    # debug 'Ωbbdbr__51', 'functions: ', ( get_function_names b ).has 'fn_b'
    # debug 'Ωbbdbr__52', 'functions: ', ( get_function_names b ).has 'regexp'
    # debug 'Ωbbdbr__53', 'tables:    ', get_table_names b
    # debug 'Ωbbdbr__54', 'views:     ', get_view_names b
    # debug 'Ωbbdbr__55', 'triggers:  ', get_trigger_names b
    # debug 'Ωbbdbr__56', 'statements:', ( k for k of b.statements )
    # return null
    #.......................................................................................................
    do =>
      dba = new Dbric_std ':memory:', { db_class: Bsql3, }
      # dba = new A()
      # dba = new B()
      dba.db.function 'zzz_test', { deterministic: true, varargs: false, directOnly: false, }, -> "ZZZ_TEST"
      #.....................................................................................................
      function_names  = get_function_names dba
      table_names     = get_table_names dba
      view_names      = get_view_names dba
      trigger_names   = get_trigger_names dba
      #.....................................................................................................
      @eq ( Ωbbdbr__57 = -> dba.statements.std_get_schema     instanceof  statement_class ), true
      @eq ( Ωbbdbr__58 = -> dba.statements.std_get_tables     instanceof  statement_class ), true
      @eq ( Ωbbdbr__59 = -> dba.statements.std_get_views      instanceof  statement_class ), true
      @eq ( Ωbbdbr__60 = -> dba.statements.std_get_relations  instanceof  statement_class ), true
      @eq ( Ωbbdbr__61 = -> dba.statements.select_a           instanceof  statement_class ), false
      @eq ( Ωbbdbr__62 = -> dba.statements.select_b           instanceof  statement_class ), false
      #.....................................................................................................
      @eq ( Ωbbdbr__63 = -> function_names.has 'zzz_test'                                 ), true
      @eq ( Ωbbdbr__64 = -> function_names.has 'regexp'                                   ), true
      @eq ( Ωbbdbr__65 = -> function_names.has 'fn_a'                                     ), false
      @eq ( Ωbbdbr__66 = -> function_names.has 'fn_b'                                     ), false
      #.....................................................................................................
      @eq ( Ωbbdbr__67 = -> table_names.has 'table_a'                                     ), false
      @eq ( Ωbbdbr__68 = -> table_names.has 'table_b'                                     ), false
      @eq ( Ωbbdbr__69 = -> view_names.has 'std_tables'                                   ), true
      @eq ( Ωbbdbr__70 = -> view_names.has 'std_views'                                    ), true
      @eq ( Ωbbdbr__71 = -> view_names.has 'std_relations'                                ), true
      @eq ( Ωbbdbr__72 = -> view_names.has 'view_a'                                       ), false
      @eq ( Ωbbdbr__73 = -> view_names.has 'view_b'                                       ), false
      ;null
    #.......................................................................................................
    do =>
      dba = new A()
      dba.db.function 'zzz_test', { deterministic: true, varargs: false, directOnly: false, }, -> "ZZZ_TEST"
      #.....................................................................................................
      function_names  = get_function_names dba
      table_names     = get_table_names dba
      view_names      = get_view_names dba
      trigger_names   = get_trigger_names dba
      #.....................................................................................................
      @eq ( Ωbbdbr__74 = -> dba.statements.std_get_schema     instanceof  statement_class ), true
      @eq ( Ωbbdbr__75 = -> dba.statements.std_get_tables     instanceof  statement_class ), true
      @eq ( Ωbbdbr__76 = -> dba.statements.std_get_views      instanceof  statement_class ), true
      @eq ( Ωbbdbr__77 = -> dba.statements.std_get_relations  instanceof  statement_class ), true
      @eq ( Ωbbdbr__78 = -> dba.statements.select_a           instanceof  statement_class ), true
      @eq ( Ωbbdbr__79 = -> dba.statements.select_b           instanceof  statement_class ), false
      #.....................................................................................................
      @eq ( Ωbbdbr__80 = -> function_names.has 'zzz_test'                                 ), true
      @eq ( Ωbbdbr__81 = -> function_names.has 'regexp'                                   ), true
      @eq ( Ωbbdbr__82 = -> function_names.has 'fn_a'                                     ), true
      @eq ( Ωbbdbr__83 = -> function_names.has 'fn_b'                                     ), false
      #.....................................................................................................
      @eq ( Ωbbdbr__84 = -> table_names.has 'table_a'                                     ), true
      @eq ( Ωbbdbr__85 = -> table_names.has 'table_b'                                     ), false
      @eq ( Ωbbdbr__86 = -> view_names.has 'std_tables'                                   ), true
      @eq ( Ωbbdbr__87 = -> view_names.has 'std_views'                                    ), true
      @eq ( Ωbbdbr__88 = -> view_names.has 'std_relations'                                ), true
      @eq ( Ωbbdbr__89 = -> view_names.has 'view_a'                                       ), true
      @eq ( Ωbbdbr__90 = -> view_names.has 'view_b'                                       ), false
      ;null
    #.......................................................................................................
    do =>
      dba = new B()
      dba.db.function 'zzz_test', { deterministic: true, varargs: false, directOnly: false, }, -> "ZZZ_TEST"
      #.....................................................................................................
      function_names  = get_function_names dba
      table_names     = get_table_names dba
      view_names      = get_view_names dba
      trigger_names   = get_trigger_names dba
      #.....................................................................................................
      @eq ( Ωbbdbr__91 = -> dba.statements.std_get_schema     instanceof  statement_class ), true
      @eq ( Ωbbdbr__92 = -> dba.statements.std_get_tables     instanceof  statement_class ), true
      @eq ( Ωbbdbr__93 = -> dba.statements.std_get_views      instanceof  statement_class ), true
      @eq ( Ωbbdbr__94 = -> dba.statements.std_get_relations  instanceof  statement_class ), true
      @eq ( Ωbbdbr__95 = -> dba.statements.select_a           instanceof  statement_class ), true
      @eq ( Ωbbdbr__96 = -> dba.statements.select_b           instanceof  statement_class ), true
      #.....................................................................................................
      @eq ( Ωbbdbr__97 = -> function_names.has 'zzz_test'                                 ), true
      @eq ( Ωbbdbr__98 = -> function_names.has 'regexp'                                   ), true
      @eq ( Ωbbdbr__99 = -> function_names.has 'fn_a'                                     ), true
      @eq ( Ωbbdbr_100 = -> function_names.has 'fn_b'                                     ), true
      #.....................................................................................................
      @eq ( Ωbbdbr_101 = -> table_names.has 'table_a'                                     ), true
      @eq ( Ωbbdbr_102 = -> table_names.has 'table_b'                                     ), true
      @eq ( Ωbbdbr_103 = -> view_names.has 'std_tables'                                   ), true
      @eq ( Ωbbdbr_104 = -> view_names.has 'std_views'                                    ), true
      @eq ( Ωbbdbr_105 = -> view_names.has 'std_relations'                                ), true
      @eq ( Ωbbdbr_106 = -> view_names.has 'view_a'                                       ), true
      @eq ( Ωbbdbr_107 = -> view_names.has 'view_b'                                       ), true
      ;null
    #.......................................................................................................
    do =>
      @throws ( Ωbbdbr_108 = -> new C_duplicate_function()    ), /a UDF or built-in function named 'fn_b' has already been declared/
      @throws ( Ωbbdbr_109 = -> new C_duplicate_statement()   ), /statement 'select_b' is already declared/
      @throws ( Ωbbdbr_110 = -> new C_duplicate_table()       ), /table table_b already exists/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  disallow_overwriting_properties_with_functions: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    # debug 'Ωbbdbr_111', new Dbric '/dev/shm/bricabrac.sqlite'
    do =>
      db        = ( new Dbric ':memory:' )
      db_proto  = Object.getPrototypeOf db
      debug 'Ωbbdbr_112', Object.getOwnPropertyDescriptor db_proto, 'is_ready'
      debug 'Ωbbdbr_113', Object.getOwnPropertyDescriptor db_proto, '_get_is_ready'
      ;null
    #-------------------------------------------------------------------------------------------------------
    ### use derived classes to assert that property descriptors are searched for in the prototype chain: ###
    class Dbric_A extends Dbric
    class Dbric_B extends Dbric_A
    class Dbric_C extends Dbric_B
    class Dbric_Z extends Dbric_C
    #-------------------------------------------------------------------------------------------------------
    do =>
      class Dbric_nonconform extends Dbric_Z
        is_ready: ->
      @throws ( Ωbbdbr_114 = -> new Dbric_nonconform() ), /not allowed to override property 'is_ready'; use '_get_is_ready instead/
      ;null
    #-------------------------------------------------------------------------------------------------------
    do =>
      class Dbric_nonconform extends Dbric_Z
        prefix: ->
      @throws ( Ωbbdbr_115 = -> new Dbric_nonconform() ), /not allowed to override property 'prefix'; use '_get_prefix instead/
      ;null
    #-------------------------------------------------------------------------------------------------------
    do =>
      class Dbric_nonconform extends Dbric_Z
        prefix_re: ->
      @throws ( Ωbbdbr_116 = -> new Dbric_nonconform() ), /not allowed to override property 'prefix_re'; use '_get_prefix_re instead/
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  sample_db: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    # debug 'Ωbbdbr_117', new Dbric '/dev/shm/bricabrac.sqlite'
    #=======================================================================================================
    class Dbric_store extends Dbric
      @build: [
        SQL"""create table store_facets (
          facet_key             text unique not null primary key,
          facet_value           json );"""
        ]
      @statements:
        # store_create_tables: SQL"""
        #   """
        store_insert_facet: SQL"""
          insert into store_facets ( facet_key, facet_value ) values ( $facet_key, $facet_value )
            on conflict ( facet_key ) do update set facet_value = excluded.facet_value;"""
        store_get_facets: SQL"""
          select * from store_facets order by facet_key;"""
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      store     = new Dbric_store db_path
      # store.statements.store_create_tables.run()
      # for row from store.statements.get_schema.iterate()
      #   help 'Ωbbdbr_118', row
      store.statements.store_insert_facet.run { facet_key: 'one',   facet_value: ( JSON.stringify 1       ), }
      store.statements.store_insert_facet.run { facet_key: 'two',   facet_value: ( JSON.stringify 2       ), }
      store.statements.store_insert_facet.run { facet_key: 'three', facet_value: ( JSON.stringify 3       ), }
      store.statements.store_insert_facet.run { facet_key: 'three', facet_value: ( JSON.stringify 'iii'   ), }
      store.statements.store_insert_facet.run { facet_key: 'true',  facet_value: ( JSON.stringify true    ), }
      store.statements.store_insert_facet.run { facet_key: 'false', facet_value: ( JSON.stringify false   ), }
      #.....................................................................................................
      cast_row = ( row ) ->
        return row unless row?
        return { row..., facet_value: ( JSON.parse row.facet_value ), _v: row.facet_value, }
      #.....................................................................................................
      rows = store.statements.store_get_facets.iterate()
      @eq ( Ωbbdbr_119 = -> cast_row rows.next().value ), { facet_key: 'false', facet_value: false, _v: 'false' }
      @eq ( Ωbbdbr_120 = -> cast_row rows.next().value ), { facet_key: 'one', facet_value: 1, _v: 1 }
      @eq ( Ωbbdbr_121 = -> cast_row rows.next().value ), { facet_key: 'three', facet_value: 'iii', _v: '"iii"' }
      @eq ( Ωbbdbr_122 = -> cast_row rows.next().value ), { facet_key: 'true', facet_value: true, _v: 'true' }
      @eq ( Ωbbdbr_123 = -> cast_row rows.next().value ), { facet_key: 'two', facet_value: 2, _v: 2 }
      @eq ( Ωbbdbr_124 = -> cast_row rows.next().value ), null ### NOTE different from better-sqlite3 below ###
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  sample_db_with_bsql: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    _Bsql3                        = require 'better-sqlite3'
    #=======================================================================================================
    class Bsql3 extends _Bsql3
    #=======================================================================================================
    class Dbric_store extends Dbric
      @db_class: Bsql3
      @build: [
        SQL"""create table store_facets (
          facet_key             text unique not null primary key,
          facet_value           json );"""
        ]
      @statements:
        # store_create_tables: SQL"""
        #   """
        store_insert_facet: SQL"""
          insert into store_facets ( facet_key, facet_value ) values ( $facet_key, $facet_value )
            on conflict ( facet_key ) do update set facet_value = excluded.facet_value;"""
        store_get_facets: SQL"""
          select * from store_facets order by facet_key;"""
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      store     = new Dbric_store db_path
      debug 'Ωbbdbr_125', store
      @eq ( Ωbbdbr_126 = -> store.db instanceof Bsql3     ), true
      @eq ( Ωbbdbr_127 = -> store.db instanceof _Bsql3    ), true
      # store.statements.store_create_tables.run()
      # for row from store.statements.get_schema.iterate()
      #   help 'Ωbbdbr_128', row
      store.statements.store_insert_facet.run { facet_key: 'one',   facet_value: ( JSON.stringify 1       ), }
      store.statements.store_insert_facet.run { facet_key: 'two',   facet_value: ( JSON.stringify 2       ), }
      store.statements.store_insert_facet.run { facet_key: 'three', facet_value: ( JSON.stringify 3       ), }
      store.statements.store_insert_facet.run { facet_key: 'three', facet_value: ( JSON.stringify 'iii'   ), }
      store.statements.store_insert_facet.run { facet_key: 'true',  facet_value: ( JSON.stringify true    ), }
      store.statements.store_insert_facet.run { facet_key: 'false', facet_value: ( JSON.stringify false   ), }
      #.....................................................................................................
      cast_row = ( row ) ->
        return row unless row?
        return { row..., facet_value: ( JSON.parse row.facet_value ), _v: row.facet_value, }
      #.....................................................................................................
      rows = store.statements.store_get_facets.iterate()
      @eq ( Ωbbdbr_129 = -> cast_row rows.next().value ), { facet_key: 'false', facet_value: false, _v: 'false' }
      @eq ( Ωbbdbr_130 = -> cast_row rows.next().value ), { facet_key: 'one', facet_value: 1, _v: 1 }
      @eq ( Ωbbdbr_131 = -> cast_row rows.next().value ), { facet_key: 'three', facet_value: 'iii', _v: '"iii"' }
      @eq ( Ωbbdbr_132 = -> cast_row rows.next().value ), { facet_key: 'true', facet_value: true, _v: 'true' }
      @eq ( Ωbbdbr_133 = -> cast_row rows.next().value ), { facet_key: 'two', facet_value: 2, _v: 2 }
      @eq ( Ωbbdbr_134 = -> cast_row rows.next().value ), undefined
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  udf_functions_with_nsql: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    Bsql3                         = require 'better-sqlite3'
    #=======================================================================================================
    class Dbric_squares extends Dbric
      #-----------------------------------------------------------------------------------------------------
      @build: [
        SQL"""create table numbers (
            n number unique not null primary key );"""
        SQL"""create view squares as select
            n,
            square( n ) as square
          from numbers
          order by n;"""
        ]
      #-----------------------------------------------------------------------------------------------------
      @statements:
        insert_number: SQL"""insert into numbers ( n ) values ( $n )
          on conflict ( n ) do nothing;"""
        select_from_squares: SQL"""select
            n,
            square
          from squares
          order by n;"""
      #-----------------------------------------------------------------------------------------------------
      initialize: ->
        super()
        @create_function
          name:           'square'
          deterministic:  true
          varargs:        false
          value:           ( n ) -> n ** 2
        ;null
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      squares   = new Dbric_squares db_path
      @eq ( Ωbbdbr_135 = -> squares.db instanceof Bsql3     ), false
      for n in [ 0 ... 10 ]
        squares.statements.insert_number.run { n, }
      #.....................................................................................................
      # echo row for row from squares.statements.select_from_squares.iterate()
      rows = squares.statements.select_from_squares.iterate()
      @eq ( Ωbbdbr_136 = -> rows.next().value ), { n: 0, square: 0 }
      @eq ( Ωbbdbr_137 = -> rows.next().value ), { n: 1, square: 1 }
      @eq ( Ωbbdbr_138 = -> rows.next().value ), { n: 2, square: 4 }
      @eq ( Ωbbdbr_139 = -> rows.next().value ), { n: 3, square: 9 }
      @eq ( Ωbbdbr_140 = -> rows.next().value ), { n: 4, square: 16 }
      @eq ( Ωbbdbr_141 = -> rows.next().value ), { n: 5, square: 25 }
      @eq ( Ωbbdbr_142 = -> rows.next().value ), { n: 6, square: 36 }
      @eq ( Ωbbdbr_143 = -> rows.next().value ), { n: 7, square: 49 }
      @eq ( Ωbbdbr_144 = -> rows.next().value ), { n: 8, square: 64 }
      @eq ( Ωbbdbr_145 = -> rows.next().value ), { n: 9, square: 81 }
      @eq ( Ωbbdbr_146 = -> rows.next().value ), null
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  udf_aggregates_with_nsql: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    Bsql3                         = require 'better-sqlite3'
    #=======================================================================================================
    class Dbric_squares extends Dbric
      #-----------------------------------------------------------------------------------------------------
      @build: [
        SQL"""create table numbers (
            n number unique not null primary key );"""
        SQL"""create view squares as select
            n,
            square( n ) as square
          from numbers
          order by n;"""
        ]
      #-----------------------------------------------------------------------------------------------------
      @statements:
        insert_number: SQL"""insert into numbers ( n ) values ( $n )
          on conflict ( n ) do nothing;"""
        select_from_numbers: SQL"""select n from numbers order by n;"""
        select_from_squares: SQL"""select
            n,
            square,
            product( n )      as p_n,
            product( square ) as p_square
          from squares
          where n between $start and $stop
          order by n;"""
      #-----------------------------------------------------------------------------------------------------
      initialize: ->
        super()
        @create_function
          name:           'square'
          deterministic:  true
          varargs:        false
          value:           ( n ) -> n ** 2
        @create_aggregate_function
          name:           'product'
          start:          -> 1 ### NOTE can use `null` for bSQL, but nSQL needs `1` ###
          step:           product = ( total, element ) ->
            debug 'Ωbbdbr_147', { total, element, }
            return ( total ? 1 ) * element
        ;null
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      squares   = new Dbric_squares db_path
      @eq ( Ωbbdbr_148 = -> squares.db instanceof Bsql3     ), false
      for n in [ 0 ... 10 ]
        squares.statements.insert_number.run { n, }
      #.....................................................................................................
      echo row for row from squares.statements.select_from_squares.iterate { start: 1, stop: 5, }
      rows = squares.statements.select_from_squares.iterate { start: 1, stop: 5, }
      @eq ( Ωbbdbr_149 = -> rows.next().value ), { n: 1, square: 1, p_n: 120, p_square: 14400 }
      @eq ( Ωbbdbr_150 = -> rows.next().value ), null
      #.....................................................................................................
      echo row for row from squares.statements.select_from_squares.iterate()
      rows = squares.statements.select_from_squares.iterate()
      @eq ( Ωbbdbr_151 = -> rows.next().value ), { n: null, square: null, p_n: 1, p_square: 1 }
      @eq ( Ωbbdbr_152 = -> rows.next().value ), null
      #.....................................................................................................
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  udf_functions_with_bsql: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    Bsql3                         = require 'better-sqlite3'
    #=======================================================================================================
    class Dbric_squares extends Dbric
      @db_class: Bsql3
      #-----------------------------------------------------------------------------------------------------
      @build: [
        SQL"""create table numbers (
            n number unique not null primary key );"""
        SQL"""create view squares as select
            n,
            square( n ) as square
          from numbers
          order by n;"""
        ]
      #-----------------------------------------------------------------------------------------------------
      @statements:
        insert_number: SQL"""insert into numbers ( n ) values ( $n )
          on conflict ( n ) do nothing;"""
        select_from_squares: SQL"""select
            n,
            square
          from squares
          order by n;"""
      #-----------------------------------------------------------------------------------------------------
      initialize: ->
        super()
        @create_function
          name:           'square'
          deterministic:  true
          varargs:        false
          value:           ( n ) -> n ** 2
        ;null
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      squares   = new Dbric_squares db_path
      @eq ( Ωbbdbr_153 = -> squares.db instanceof Bsql3     ), true
      for n in [ 0 ... 10 ]
        squares.statements.insert_number.run { n, }
      #.....................................................................................................
      # echo row for row from squares.statements.select_from_squares.iterate()
      rows = squares.statements.select_from_squares.iterate()
      @eq ( Ωbbdbr_154 = -> rows.next().value ), { n: 0, square: 0 }
      @eq ( Ωbbdbr_155 = -> rows.next().value ), { n: 1, square: 1 }
      @eq ( Ωbbdbr_156 = -> rows.next().value ), { n: 2, square: 4 }
      @eq ( Ωbbdbr_157 = -> rows.next().value ), { n: 3, square: 9 }
      @eq ( Ωbbdbr_158 = -> rows.next().value ), { n: 4, square: 16 }
      @eq ( Ωbbdbr_159 = -> rows.next().value ), { n: 5, square: 25 }
      @eq ( Ωbbdbr_160 = -> rows.next().value ), { n: 6, square: 36 }
      @eq ( Ωbbdbr_161 = -> rows.next().value ), { n: 7, square: 49 }
      @eq ( Ωbbdbr_162 = -> rows.next().value ), { n: 8, square: 64 }
      @eq ( Ωbbdbr_163 = -> rows.next().value ), { n: 9, square: 81 }
      @eq ( Ωbbdbr_164 = -> rows.next().value ), undefined
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  udf_aggregates_with_bsql: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    Bsql3                         = require 'better-sqlite3'
    #=======================================================================================================
    class Dbric_squares extends Dbric
      @db_class: Bsql3
      #-----------------------------------------------------------------------------------------------------
      @build: [
        SQL"""create table numbers (
            n number unique not null primary key );"""
        SQL"""create view squares as select
            n,
            square( n ) as square
          from numbers
          order by n;"""
        ]
      #-----------------------------------------------------------------------------------------------------
      @statements:
        insert_number: SQL"""insert into numbers ( n ) values ( $n )
          on conflict ( n ) do nothing;"""
        select_from_squares: SQL"""select
            n,
            square,
            product( n )      as p_n,
            product( square ) as p_square
          from squares
          where n between $start and $stop
          order by n;"""
      #-----------------------------------------------------------------------------------------------------
      initialize: ->
        super()
        @create_function
          name:           'square'
          deterministic:  true
          varargs:        false
          value:           square = ( n ) -> n ** 2
        @create_aggregate_function
          name:           'product'
          start:          -> null
          step:           product = ( total, element ) ->
            debug 'Ωbbdbr_165', { total, element, }
            return ( total ? 1 ) * element
        ;null
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      squares   = new Dbric_squares db_path
      @eq ( Ωbbdbr_166 = -> squares.db instanceof Bsql3     ), true
      for n in [ 0 ... 10 ]
        squares.statements.insert_number.run { n, }
      #.....................................................................................................
      echo row for row from squares.statements.select_from_squares.iterate { start: 2, stop: 3, }
      rows = squares.statements.select_from_squares.iterate { start: 2, stop: 3, }
      @eq ( Ωbbdbr_167 = -> rows.next().value ), { n: 2, square: 4, p_n: 6, p_square: 36 }
      @eq ( Ωbbdbr_168 = -> rows.next().value ), undefined
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  udf_table_function_with_bsql: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    Bsql3                         = require 'better-sqlite3'
    #=======================================================================================================
    class Dbric_phrases extends Dbric
      @db_class: Bsql3
      #-----------------------------------------------------------------------------------------------------
      @build: [
        SQL"""create table phrases (
            phrase text unique not null primary key );"""
        ]
      #-----------------------------------------------------------------------------------------------------
      @statements:
        insert_phrase: SQL"""insert into phrases ( phrase ) values ( $phrase )
          on conflict ( phrase ) do nothing;"""
        select_from_phrases: SQL"""
          select
              *
            from
              phrases as p,
              re_matches( p.phrase, $matcher ) as rx
            order by p.phrase;"""
      #-----------------------------------------------------------------------------------------------------
      initialize: ->
        super()
        @create_table_function
          name:         're_matches'
          columns:      [ 'match', 'capture', ]
          parameters:   [ 'text', 'pattern', ]
          rows: ( text, pattern ) ->
            regex = new RegExp pattern, 'g'
            for match from text.matchAll regex
              yield [ match[ 0 ], match[ 1 ], ]
            return null
        ;null
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      phrases   = new Dbric_phrases db_path
      @eq ( Ωbbdbr_169 = -> phrases.db instanceof Bsql3     ), true
      for phrase in [ 'eleven', 'five', 'nine', 'one', 'one point five', 'seven', 'three point one' ]
        phrases.statements.insert_phrase.run { phrase, }
      #.....................................................................................................
      # echo row for row from phrases.statements.select_from_phrases.iterate { matcher: '^.*([aeiou].e).*$', }
      # echo()
      #.....................................................................................................
      # echo row for row from phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
      rows = phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
      @eq ( Ωbbdbr_170 = -> rows.next().value ), { phrase: 'eleven', match: 'le', capture: 'le' }
      @eq ( Ωbbdbr_171 = -> rows.next().value ), { phrase: 'eleven', match: 've', capture: 've' }
      @eq ( Ωbbdbr_172 = -> rows.next().value ), { phrase: 'five', match: 'fi', capture: 'fi' }
      @eq ( Ωbbdbr_173 = -> rows.next().value ), { phrase: 'nine', match: 'ni', capture: 'ni' }
      @eq ( Ωbbdbr_174 = -> rows.next().value ), { phrase: 'one', match: 'o', capture: 'o' }
      @eq ( Ωbbdbr_175 = -> rows.next().value ), { phrase: 'one point five', match: 'o', capture: 'o' }
      @eq ( Ωbbdbr_176 = -> rows.next().value ), { phrase: 'one point five', match: 'poi', capture: 'poi' }
      @eq ( Ωbbdbr_177 = -> rows.next().value ), { phrase: 'one point five', match: 'fi', capture: 'fi' }
      @eq ( Ωbbdbr_178 = -> rows.next().value ), { phrase: 'seven', match: 'se', capture: 'se' }
      @eq ( Ωbbdbr_179 = -> rows.next().value ), { phrase: 'seven', match: 've', capture: 've' }
      @eq ( Ωbbdbr_180 = -> rows.next().value ), { phrase: 'three point one', match: 'poi', capture: 'poi' }
      @eq ( Ωbbdbr_181 = -> rows.next().value ), { phrase: 'three point one', match: ' o', capture: ' o' }
      @eq ( Ωbbdbr_182 = -> rows.next().value ), undefined
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  file_mirror_as_table_function: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    Bsql3                         = require 'better-sqlite3'
    #=======================================================================================================
    class Dbric_phrases extends Dbric
      @db_class: Bsql3
      #-----------------------------------------------------------------------------------------------------
      @build: [
        #...................................................................................................
        SQL"""create table datasources (
            dskey text unique not null primary key,
            path text not null );"""
        #...................................................................................................
        SQL"""create view mirror as select
            *
          from
            datasources as ds,
            file_lines( ds.path ) as fl
          order by ds.dskey, fl.line_nr;"""
        #...................................................................................................
        SQL"""create table keywords (
            dskey   text    not null,
            line_nr integer not null,
            keyword text    not null,
          foreign key ( dskey ) references datasources ( dskey ),
          primary key ( dskey, line_nr, keyword ) );"""
        ]
      #-----------------------------------------------------------------------------------------------------
      @statements:
        #...................................................................................................
        insert_datasource: SQL"""insert into datasources ( dskey, path ) values ( $dskey, $path )
          on conflict ( dskey ) do update set path = $path;"""
        #...................................................................................................
        insert_keyword: SQL"""insert into keywords ( dskey, line_nr, keyword ) values ( $dskey, $line_nr, $keyword )
          on conflict ( dskey, line_nr, keyword ) do nothing;"""
        #...................................................................................................
        select_from_datasources: SQL"""select * from datasources order by dskey;"""
        #...................................................................................................
        select_from_keywords: SQL"""select * from keywords order by keyword, dskey, line_nr;"""
        #...................................................................................................
        select_from_mirror: SQL"""select * from mirror order by dskey;"""
      #-----------------------------------------------------------------------------------------------------
      initialize: ->
        super()
        @create_table_function
          name:         'file_lines'
          columns:      [ 'line_nr', 'line', ]
          parameters:   [ 'path', ]
          rows: ( path ) ->
            for { lnr: line_nr, line, eol, } from GUY.fs.walk_lines_with_positions path
              yield { line_nr, line, }
            return null
        ;null
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      phrases   = new Dbric_phrases db_path
      @eq ( Ωbbdbr_183 = -> ( phrases.prepare SQL"""pragma foreign_keys""" ).get() ), { foreign_keys: 1,      }
      @eq ( Ωbbdbr_184 = -> ( phrases.prepare SQL"""pragma journal_mode""" ).get() ), { journal_mode: 'wal',  }
      @eq ( Ωbbdbr_185 = -> phrases.db instanceof Bsql3     ), true
      # #.....................................................................................................
      # do =>
      #   dskey = 'readme'
      #   path  = PATH.resolve __dirname, '../../../apps/bricabrac-sfmodules/README.md'
      #   phrases.statements.insert_datasource.run { dskey, path }
      #.....................................................................................................
      do =>
        dskey = 'package-json'
        path  = PATH.resolve __dirname, '../../../apps/bricabrac-sfmodules/package.json'
        phrases.statements.insert_datasource.run { dskey, path }
      #.....................................................................................................
      # echo row for row from phrases.statements.select_from_datasources.iterate()
      # echo()
      # #.....................................................................................................
      # echo row for row from phrases.statements.select_from_mirror.iterate()
      # echo()
      #.....................................................................................................
      for { dskey, line_nr, line, } from phrases.statements.select_from_mirror.iterate()
        keywords = line.split /(?:\p{Z}+)|((?:\p{L}+)|(?:\p{N}+)|(?:\p{S}+))/v
        # debug 'Ωbbdbr_186', line_nr, rpr keywords
        for keyword in keywords
          continue unless keyword?
          continue if keyword is ''
          phrases.w.statements.insert_keyword.run { dskey, line_nr, keyword, }
      # #.....................................................................................................
      # echo row for row from phrases.statements.select_from_keywords.iterate()
      # echo()
      #.....................................................................................................
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  file_mirror_with_integrated_inserts: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    Bsql3                         = require 'better-sqlite3'
    #=======================================================================================================
    class Dbric_phrases extends Dbric
      @db_class: Bsql3
      #-----------------------------------------------------------------------------------------------------
      @build: [
        #...................................................................................................
        SQL"""create table datasources (
            dskey text unique not null primary key,
            path text not null );"""
        #...................................................................................................
        SQL"""create view mirror as select
            *
          from
            datasources as ds,
            file_lines( ds.path ) as fl
          order by ds.dskey, fl.line_nr;"""
        #...................................................................................................
        SQL"""create table keywords (
            dskey   text    not null,
            line_nr integer not null,
            keyword text    not null,
          foreign key ( dskey ) references datasources ( dskey ),
          primary key ( dskey, line_nr, keyword ) );"""
        ]
      #-----------------------------------------------------------------------------------------------------
      @statements:
        #...................................................................................................
        insert_datasource: SQL"""insert into datasources ( dskey, path ) values ( $dskey, $path )
          on conflict ( dskey ) do update set path = $path;"""
        #...................................................................................................
        insert_keyword: SQL"""insert into keywords ( dskey, line_nr, keyword ) values ( $dskey, $line_nr, $keyword )
          on conflict ( dskey, line_nr, keyword ) do nothing;"""
        #...................................................................................................
        select_from_datasources: SQL"""select * from datasources order by dskey;"""
        #...................................................................................................
        select_from_keywords: SQL"""select * from keywords order by keyword, dskey, line_nr;"""
        locations_from_keyword: SQL"""select * from keywords
          where keyword = $keyword
          order by keyword, dskey, line_nr;"""
        #...................................................................................................
        select_from_mirror: SQL"""select * from mirror order by dskey;"""
        #...................................................................................................
        populate_keywords: SQL"""
          insert into keywords ( dskey, line_nr, keyword )
            select
              ds.dskey    as dskey,
              mi.line_nr  as line_nr,
              sw.keyword  as keyword
            from datasources        as ds
            join mirror             as mi using ( dskey ),
            split_words( mi.line )  as sw
            where true -- where clause just a syntactic guard as per https://sqlite.org/lang_upsert.html
            on conflict do nothing;"""
      #-----------------------------------------------------------------------------------------------------
      initialize: ->
        super()
        #...................................................................................................
        @create_table_function
          name:           'split_words'
          columns:        [ 'keyword', ]
          parameters:     [ 'line', ]
          rows: ( line ) ->
            keywords = line.split /(?:\p{Z}+)|((?:\p{L}+)|(?:\p{N}+)|(?:\p{S}+))/v
            # debug 'Ωbbdbr_187', line_nr, rpr keywords
            for keyword in keywords
              continue unless keyword?
              continue if keyword is ''
              yield { keyword, }
            ;null
        #...................................................................................................
        @create_table_function
          name:         'file_lines'
          columns:      [ 'line_nr', 'line', ]
          parameters:   [ 'path', ]
          rows: ( path ) ->
            for { lnr: line_nr, line, eol, } from GUY.fs.walk_lines_with_positions path
              yield { line_nr, line, }
            ;null
        #...................................................................................................
        ;null
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      phrases   = new Dbric_phrases db_path
      debug 'Ωbbdbr_188', phrases.teardown()
      debug 'Ωbbdbr_189', phrases.rebuild()
      @eq ( Ωbbdbr_190 = -> ( phrases.prepare SQL"""pragma foreign_keys""" ).get() ), { foreign_keys: 1,      }
      @eq ( Ωbbdbr_191 = -> ( phrases.prepare SQL"""pragma journal_mode""" ).get() ), { journal_mode: 'wal',  }
      @eq ( Ωbbdbr_192 = -> phrases.db instanceof Bsql3     ), true
      #.....................................................................................................
      do =>
        dskey = 'humdum'
        path  = PATH.resolve __dirname, '../../../assets/bricabrac/humpty-dumpty.md'
        phrases.statements.insert_datasource.run { dskey, path }
      #.....................................................................................................
      debug 'Ωbbdbr_193', phrases.statements.populate_keywords.run()
      #.....................................................................................................
      echo row for row from phrases.statements.locations_from_keyword.iterate { keyword: 'thought', }
      echo()
      rows = phrases.statements.locations_from_keyword.iterate { keyword: 'thought', }
      @eq ( Ωbbdbr_194 = -> rows.next().value ), { dskey: 'humdum', line_nr: 15, keyword: 'thought' }
      @eq ( Ωbbdbr_195 = -> rows.next().value ), { dskey: 'humdum', line_nr: 34, keyword: 'thought' }
      @eq ( Ωbbdbr_196 = -> rows.next().value ), undefined
      #.....................................................................................................
      echo row for row from phrases.statements.locations_from_keyword.iterate { keyword: 'she', }
      echo()
      rows = phrases.statements.locations_from_keyword.iterate { keyword: 'she', }
      @eq ( Ωbbdbr_197 = -> rows.next().value ), { dskey: 'humdum', line_nr: 2, keyword: 'she' }
      @eq ( Ωbbdbr_198 = -> rows.next().value ), { dskey: 'humdum', line_nr: 3, keyword: 'she' }
      @eq ( Ωbbdbr_199 = -> rows.next().value ), { dskey: 'humdum', line_nr: 4, keyword: 'she' }
      @eq ( Ωbbdbr_200 = -> rows.next().value ), { dskey: 'humdum', line_nr: 5, keyword: 'she' }
      @eq ( Ωbbdbr_201 = -> rows.next().value ), { dskey: 'humdum', line_nr: 15, keyword: 'she' }
      @eq ( Ωbbdbr_202 = -> rows.next().value ), { dskey: 'humdum', line_nr: 17, keyword: 'she' }
      @eq ( Ωbbdbr_203 = -> rows.next().value ), { dskey: 'humdum', line_nr: 18, keyword: 'she' }
      @eq ( Ωbbdbr_204 = -> rows.next().value ), { dskey: 'humdum', line_nr: 26, keyword: 'she' }
      @eq ( Ωbbdbr_205 = -> rows.next().value ), { dskey: 'humdum', line_nr: 34, keyword: 'she' }
      @eq ( Ωbbdbr_206 = -> rows.next().value ), { dskey: 'humdum', line_nr: 36, keyword: 'she' }
      @eq ( Ωbbdbr_207 = -> rows.next().value ), undefined
      #.....................................................................................................
      ;null
    #.......................................................................................................
    return null

  # #---------------------------------------------------------------------------------------------------------
  # yyy: ->
  #   { Dbric,
  #     Dbric_std,
  #     SQL,
  #     internals,                } = SFMODULES.unstable.require_dbric()
  #   { temp,                     } = SFMODULES.unstable.require_temp()
  #   Bsql3                         = require 'better-sqlite3'
  #   #.......................................................................................................
  #   class My_db extends Dbric_std
  #     @db_class: Bsql3
  #   dba = new My_db()
  #   dba.execute SQL"create table t ( d text );"
  #   for row from dba.walk SQL"select * from std_relations;"
  #     debug 'Ωbbdbr_208', row.name
  #   # for row from dba.walk SQL".dump"
  #   #   debug 'Ωbbdbr_209', row
  #   # debug 'Ωbbdbr_210', dba.db.serialize()
  #   # debug 'Ωbbdbr_211', dba.db.serialize().toString()
  #   debug 'Ωbbdbr_212', dba.execute SQL"select 1; select 2;"
  #   # error 'incomplete input':
  #   debug 'Ωbbdbr_213', dba.execute SQL"""CREATE TRIGGER jzr_mirror_triples_register
  #         instead of insert on std_relations
  #         for each row begin
  #           select trigger_on_before_insert( 'jzr_mirror_triples_base', new.rowid, new.ref, new.s, new.v, new.o );"""
  #   #.......................................................................................................
  #   return null


  #---------------------------------------------------------------------------------------------------------
  dbric_rng: ->
    { Dbric_rng,

      True,
      False,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    Bsql3                         = require 'better-sqlite3'
    jr                            = JSON.stringify
    cid_of                        = ( chr ) -> chr.codePointAt 0
    first_unicode_cid             = 0x00_0000
    last_unicode_cid              = 0x10_ffff
    #=======================================================================================================
    class Unicode_ranges extends Dbric_rng
      @db_class: Bsql3
      #-----------------------------------------------------------------------------------------------------
      @functions:
        rng_validate_lo:
          overwrite:      true
          value: ( lo ) ->
            return False unless @super.functions.rng_validate_lo.value lo
            return False unless first_unicode_cid <= lo <= last_unicode_cid
            return True
        rng_validate_hi:
          overwrite:      true
          value: ( hi ) ->
            return False unless @super.functions.rng_validate_hi.value hi
            return False unless first_unicode_cid <= hi <= last_unicode_cid
            return True
      #-----------------------------------------------------------------------------------------------------
      @build: [
        SQL"""alter table rng_ranges add column is_ascii  boolean  generate always as ( data->>'is_ascii'  ) virtual;"""
        SQL"""alter table rng_ranges add column ugc       text     generate always as ( data->>'ugc'       ) virtual;"""
        SQL"""create index rng_ranges_is_ascii_idx  on rng_ranges ( is_ascii );"""
        SQL"""create index rng_ranges_ugc_idx       on rng_ranges ( ugc      );"""
        ]
    #=======================================================================================================
    do =>
      db = new Unicode_ranges ':memory:'
      db.rng_add_range { lo: 0, hi: 127, data: { is_ascii: true, }, }
      db.rng_add_range { lo: 0x00bc, hi: 0x00bc, data: { uname: 'VULGAR FRACTION ONE QUARTER', ugc: 'No', is_ascii: false, }, }
      db.rng_add_range { lo: ( cid_of 'A' ), hi: ( cid_of 'Z' ), data: { ugc: 'Lu', }, }
      db.rng_add_range { lo: ( cid_of 'a' ), hi: ( cid_of 'z' ), data: { ugc: 'Ll', }, }
      @throws ( Ωbbdbr_214 = -> db.rng_add_range { lo:  10, hi:         8, } ), /Ωrng_validate_lohi/
      @throws ( Ωbbdbr_215 = -> db.rng_add_range { lo: -10, hi:         8, } ), /Ωrng_validate_lo/
      @throws ( Ωbbdbr_216 = -> db.rng_add_range { lo:  10, hi: 0x20_0000, } ), /Ωrng_validate_hi/
      #.....................................................................................................
      echo row for row from rows = db.walk db.statements.rng_all_ranges
      rows = db.walk db.statements.rng_all_ranges
      @eq ( Ωbbdbr_217 = -> rows.next().value ), { lo: 0, hi: 127, data: '{"is_ascii":true}', is_ascii: 1, ugc: null }
      @eq ( Ωbbdbr_218 = -> rows.next().value ), { lo: 65, hi: 90, data: '{"ugc":"Lu"}', is_ascii: null, ugc: 'Lu' }
      @eq ( Ωbbdbr_219 = -> rows.next().value ), { lo: 97, hi: 122, data: '{"ugc":"Ll"}', is_ascii: null, ugc: 'Ll' }
      @eq ( Ωbbdbr_220 = -> rows.next().value ), { lo: 188, hi: 188, data: '{"is_ascii":false,"ugc":"No","uname":"VULGAR FRACTION ONE QUARTER"}', is_ascii: 0, ugc: 'No' }
      @eq ( Ωbbdbr_221 = -> rows.next().done ), true
      ;null
    #=======================================================================================================
    do =>
      db = new Unicode_ranges ':memory:'
      #.....................................................................................................
      db.rng_add_range { lo: 0, hi: 127, data: { ugc: 'Cc', }, }
      db.rng_add_range { lo: ( cid_of 'F' ), data: { ugc: 'Lu', }, }
      # db.rng_add_range { lo: ( cid_of 'G' ), data: { is_ascii: true, data: { ugc: 'Cc', } }, }
      echo row for row from rows = db.walk db.statements.rng_all_ranges
      # rows = db.walk db.statements.rng_all_ranges
      # @eq ( Ωbbdbr_222 = -> rows.next().value ), { lo:  0, hi:  69, data: '{"ugc":"Cc"}', is_ascii: null, ugc: 'Cc', }
      # @eq ( Ωbbdbr_223 = -> rows.next().value ), { lo: 70, hi:  70, data: '{"ugc":"Lu"}', is_ascii: null, ugc: 'Lu', }
      # @eq ( Ωbbdbr_224 = -> rows.next().value ), { lo: 71, hi: 127, data: '{"ugc":"Cc"}', is_ascii: null, ugc: 'Cc', }
      # @eq ( Ωbbdbr_225 = -> rows.next().done ), true
      #.....................................................................................................
      ;null
    #.......................................................................................................
    ;null


#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: true, report_checks: true, }
  # ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { dbric_std_generate_series: tests.dbric_std_generate_series, }
  ( new Test guytest_cfg ).test { dbric_rng: tests.dbric_rng, }
