

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
    # urge 'Ωbbdbr___2', "no such FS object: #{rpr path}"
  return null


#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  dbric_esql: ->
    { LIT, IDN, VEC,
      unquote_name,
      internals,                      } = SFMODULES.unstable.require_dbric()
    #.......................................................................................................
    @eq     ( Ωbbdbr___3 = -> internals.type_of unquote_name      ), 'function'
    @eq     ( Ωbbdbr___4 = -> unquote_name 'abc'                  ), 'abc'
    @eq     ( Ωbbdbr___5 = -> unquote_name '"abc"'                ), 'abc'
    @eq     ( Ωbbdbr___6 = -> unquote_name '"ab""c"'              ), 'ab"c'
    @throws ( Ωbbdbr___7 = -> unquote_name ''                     ), /expected a name/
    @throws ( Ωbbdbr___8 = -> unquote_name '"'                    ), /expected a name/
    @throws ( Ωbbdbr___9 = -> unquote_name '""'                   ), /expected a name/
    @throws ( Ωbbdbr__10 = -> unquote_name false                  ), /expected a text, got a boolean/
    #.......................................................................................................
    @eq     ( Ωbbdbr__11 = -> IDN 'abc'                           ), '"abc"'
    @eq     ( Ωbbdbr__12 = -> IDN 'A"bc"'                         ), '"A""bc"""'
    @eq     ( Ωbbdbr__13 = -> LIT 'abc'                           ), "'abc'"
    @eq     ( Ωbbdbr__14 = -> LIT "A'bc'"                         ), "'A''bc'''"
    @throws ( Ωbbdbr__15 = -> VEC 'abc'                           ), /expected a list/
    @eq     ( Ωbbdbr__16 = -> VEC [ 'abc' ]                       ), """( 'abc' )"""
    @eq     ( Ωbbdbr__17 = -> VEC [ 'abc', 1, true, false, ]      ), """( 'abc', 1, 1, 0 )"""
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  dbric_std: ->
    { Dbric,
      Dbric_std,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    { temp,                     } = SFMODULES.unstable.require_temp()
    #.......................................................................................................
    temp.with_directory { keep: false, }, ({ path: folder_path, }) =>
      # folder_path = '/tmp/bricbrac-test' # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      db_path = PATH.join folder_path, 'bricabrac.sqlite'
      remove db_path
      # help 'Ωbbdbr__18', { db_path, }
      #.....................................................................................................
      do =>
        db = new Dbric db_path
        @eq   ( Ωbbdbr__19 = -> db.is_ready ), true
        return null
      #.....................................................................................................
      do =>
        db = ( new Dbric db_path )
        @eq   ( Ωbbdbr__20 = -> db instanceof Dbric         ), true
        @eq   ( Ωbbdbr__21 = -> db._get_db_objects()        ), {}
        @eq   ( Ωbbdbr__22 = -> db.is_ready                 ), true
        @eq   ( Ωbbdbr__23 = -> db.build()                  ), 0
        return null
    #.......................................................................................................
    temp.with_directory { keep: false, }, ({ path: folder_path, }) =>
      # folder_path = '/tmp/bricbrac-test' # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      db_path = PATH.join folder_path, 'bricabrac.sqlite'
      remove db_path
      # help 'Ωbbdbr__24', { db_path, }
      #.....................................................................................................
      do =>
        db = new Dbric db_path
        @eq   ( Ωbbdbr__25 = -> db.is_ready       ), true
        return null
      #.....................................................................................................
      do =>
        db = new Dbric_std db_path
        @eq   ( Ωbbdbr__26 = -> db.is_ready       ), true
        return null
      #.....................................................................................................
      do =>
        db = ( new Dbric_std db_path )
        @eq   ( Ωbbdbr__27 = -> db instanceof Dbric               ), true
        @eq   ( Ωbbdbr__28 = -> db instanceof Dbric_std           ), true
        objects = new Set ( "#{o.type}:#{o.name}" for _, o of db._get_db_objects() )
        @eq   ( Ωbbdbr__29 = -> objects.has 'view:std_tables'     ), true
        @eq   ( Ωbbdbr__30 = -> objects.has 'view:std_views'      ), true
        @eq   ( Ωbbdbr__31 = -> objects.has 'view:std_relations'  ), true
        @eq   ( Ωbbdbr__32 = -> db.is_ready                       ), true
        @eq   ( Ωbbdbr__33 = -> db.build()                        ), 0
        return null
      #.....................................................................................................
      do =>
        db = ( new Dbric_std db_path )
        @eq   ( Ωbbdbr__34 = -> db instanceof Dbric               ), true
        @eq   ( Ωbbdbr__35 = -> db instanceof Dbric_std           ), true
        objects = new Set ( "#{o.type}:#{o.name}" for _, o of db._get_db_objects() )
        @eq   ( Ωbbdbr__36 = -> objects.has 'view:std_tables'     ), true
        @eq   ( Ωbbdbr__37 = -> objects.has 'view:std_views'      ), true
        @eq   ( Ωbbdbr__38 = -> objects.has 'view:std_relations'  ), true
        @eq   ( Ωbbdbr__39 = -> db.is_ready                       ), true
        @eq   ( Ωbbdbr__40 = -> db.build()                        ), 0
        return null
      #.....................................................................................................
      do =>
        db = ( new Dbric_std db_path )
        objects = new Set ( "#{o.type}:#{o.name}" for _, o of db._get_db_objects() )
        @eq   ( Ωbbdbr__41 = -> objects.has 'view:std_tables'     ), true
        ( db.prepare SQL"drop view std_tables;" ).run()
        objects = new Set ( "#{o.type}:#{o.name}" for _, o of db._get_db_objects() )
        @eq   ( Ωbbdbr__42 = -> objects.has 'view:std_tables'     ), false
        @eq   ( Ωbbdbr__43 = -> db.is_ready                       ), false
        return null
      #.....................................................................................................
      do =>
        db = ( new Dbric_std db_path )
        @eq   ( Ωbbdbr__44 = -> db instanceof Dbric               ), true
        @eq   ( Ωbbdbr__45 = -> db instanceof Dbric_std           ), true
        objects = new Set ( "#{o.type}:#{o.name}" for _, o of db._get_db_objects() )
        @eq   ( Ωbbdbr__46 = -> objects.has 'view:std_tables'     ), true
        @eq   ( Ωbbdbr__47 = -> objects.has 'view:std_views'      ), true
        @eq   ( Ωbbdbr__48 = -> objects.has 'view:std_relations'  ), true
        @eq   ( Ωbbdbr__49 = -> db.is_ready                       ), true
        @eq   ( Ωbbdbr__50 = -> db.build()                        ), 0
        return null
      #.....................................................................................................
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  dbric_std_generate_series: ->
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
      db = new Db ':memory:'
      @eq ( Ωbbdbr__51 = -> [ ( row.value for row from db.walk SQL"select * from std_generate_series( 1, 10, 2 );")...,  ] ), [ 1, 3, 5, 7, 9 ]
      @eq ( Ωbbdbr__52 = -> [ ( row.value for row from db.walk SQL"select * from std_generate_series( 1, 10, 0 );")...,  ] ), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
      @eq ( Ωbbdbr__53 = -> [ ( row.value for row from db.walk SQL"select * from std_generate_series( 1, 1, 0 );")...,   ] ), [ 1 ]
      @eq ( Ωbbdbr__54 = -> [ ( row.value for row from db.walk SQL"select * from std_generate_series( 1, 0, 0 );")...,   ] ), []
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
    Bsql3                         = require '../../../apps/bricabrac-sfmodules/node_modules/better-sqlite3'
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
    # #.....................................................................................................
    # b = new B()
    # debug 'Ωbbdbr__55', b
    # debug 'Ωbbdbr__56', 'functions: ', get_function_names b
    # debug 'Ωbbdbr__57', 'functions: ', ( get_function_names b ).has 'fn_a'
    # debug 'Ωbbdbr__58', 'functions: ', ( get_function_names b ).has 'fn_b'
    # debug 'Ωbbdbr__59', 'functions: ', ( get_function_names b ).has 'regexp'
    # debug 'Ωbbdbr__60', 'tables:    ', get_table_names b
    # debug 'Ωbbdbr__61', 'views:     ', get_view_names b
    # debug 'Ωbbdbr__62', 'triggers:  ', get_trigger_names b
    # debug 'Ωbbdbr__63', 'statements:', ( k for k of b.statements )
    # return null
    #.......................................................................................................
    do =>
      dba = new Dbric_std ':memory:'
      # dba = new A()
      # dba = new B()
      dba.db.function 'zzz_test', { deterministic: true, varargs: false, directOnly: false, }, -> "ZZZ_TEST"
      #.....................................................................................................
      function_names  = get_function_names dba
      table_names     = get_table_names dba
      view_names      = get_view_names dba
      trigger_names   = get_trigger_names dba
      #.....................................................................................................
      @eq ( Ωbbdbr__64 = -> dba.statements.std_get_schema     instanceof  statement_class ), true
      @eq ( Ωbbdbr__65 = -> dba.statements.std_get_tables     instanceof  statement_class ), true
      @eq ( Ωbbdbr__66 = -> dba.statements.std_get_views      instanceof  statement_class ), true
      @eq ( Ωbbdbr__67 = -> dba.statements.std_get_relations  instanceof  statement_class ), true
      @eq ( Ωbbdbr__68 = -> dba.statements.select_a           instanceof  statement_class ), false
      @eq ( Ωbbdbr__69 = -> dba.statements.select_b           instanceof  statement_class ), false
      #.....................................................................................................
      @eq ( Ωbbdbr__70 = -> function_names.has 'zzz_test'                                 ), true
      @eq ( Ωbbdbr__71 = -> function_names.has 'regexp'                                   ), true
      @eq ( Ωbbdbr__72 = -> function_names.has 'fn_a'                                     ), false
      @eq ( Ωbbdbr__73 = -> function_names.has 'fn_b'                                     ), false
      #.....................................................................................................
      @eq ( Ωbbdbr__74 = -> table_names.has 'table_a'                                     ), false
      @eq ( Ωbbdbr__75 = -> table_names.has 'table_b'                                     ), false
      @eq ( Ωbbdbr__76 = -> view_names.has 'std_tables'                                   ), true
      @eq ( Ωbbdbr__77 = -> view_names.has 'std_views'                                    ), true
      @eq ( Ωbbdbr__78 = -> view_names.has 'std_relations'                                ), true
      @eq ( Ωbbdbr__79 = -> view_names.has 'view_a'                                       ), false
      @eq ( Ωbbdbr__80 = -> view_names.has 'view_b'                                       ), false
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
      @eq ( Ωbbdbr__81 = -> dba.statements.std_get_schema     instanceof  statement_class ), true
      @eq ( Ωbbdbr__82 = -> dba.statements.std_get_tables     instanceof  statement_class ), true
      @eq ( Ωbbdbr__83 = -> dba.statements.std_get_views      instanceof  statement_class ), true
      @eq ( Ωbbdbr__84 = -> dba.statements.std_get_relations  instanceof  statement_class ), true
      @eq ( Ωbbdbr__85 = -> dba.statements.select_a           instanceof  statement_class ), true
      @eq ( Ωbbdbr__86 = -> dba.statements.select_b           instanceof  statement_class ), false
      #.....................................................................................................
      @eq ( Ωbbdbr__87 = -> function_names.has 'zzz_test'                                 ), true
      @eq ( Ωbbdbr__88 = -> function_names.has 'regexp'                                   ), true
      @eq ( Ωbbdbr__89 = -> function_names.has 'fn_a'                                     ), true
      @eq ( Ωbbdbr__90 = -> function_names.has 'fn_b'                                     ), false
      #.....................................................................................................
      @eq ( Ωbbdbr__91 = -> table_names.has 'table_a'                                     ), true
      @eq ( Ωbbdbr__92 = -> table_names.has 'table_b'                                     ), false
      @eq ( Ωbbdbr__93 = -> view_names.has 'std_tables'                                   ), true
      @eq ( Ωbbdbr__94 = -> view_names.has 'std_views'                                    ), true
      @eq ( Ωbbdbr__95 = -> view_names.has 'std_relations'                                ), true
      @eq ( Ωbbdbr__96 = -> view_names.has 'view_a'                                       ), true
      @eq ( Ωbbdbr__97 = -> view_names.has 'view_b'                                       ), false
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
      @eq ( Ωbbdbr__98 = -> dba.statements.std_get_schema     instanceof  statement_class ), true
      @eq ( Ωbbdbr__99 = -> dba.statements.std_get_tables     instanceof  statement_class ), true
      @eq ( Ωbbdbr_100 = -> dba.statements.std_get_views      instanceof  statement_class ), true
      @eq ( Ωbbdbr_101 = -> dba.statements.std_get_relations  instanceof  statement_class ), true
      @eq ( Ωbbdbr_102 = -> dba.statements.select_a           instanceof  statement_class ), true
      @eq ( Ωbbdbr_103 = -> dba.statements.select_b           instanceof  statement_class ), true
      #.....................................................................................................
      @eq ( Ωbbdbr_104 = -> function_names.has 'zzz_test'                                 ), true
      @eq ( Ωbbdbr_105 = -> function_names.has 'regexp'                                   ), true
      @eq ( Ωbbdbr_106 = -> function_names.has 'fn_a'                                     ), true
      @eq ( Ωbbdbr_107 = -> function_names.has 'fn_b'                                     ), true
      #.....................................................................................................
      @eq ( Ωbbdbr_108 = -> table_names.has 'table_a'                                     ), true
      @eq ( Ωbbdbr_109 = -> table_names.has 'table_b'                                     ), true
      @eq ( Ωbbdbr_110 = -> view_names.has 'std_tables'                                   ), true
      @eq ( Ωbbdbr_111 = -> view_names.has 'std_views'                                    ), true
      @eq ( Ωbbdbr_112 = -> view_names.has 'std_relations'                                ), true
      @eq ( Ωbbdbr_113 = -> view_names.has 'view_a'                                       ), true
      @eq ( Ωbbdbr_114 = -> view_names.has 'view_b'                                       ), true
      ;null
    #.......................................................................................................
    do =>
      @throws ( Ωbbdbr_115 = -> new C_duplicate_function()    ), /a UDF or built-in function named 'fn_b' has already been declared/
      @throws ( Ωbbdbr_116 = -> new C_duplicate_statement()   ), /statement 'select_b' is already declared/
      @throws ( Ωbbdbr_117 = -> new C_duplicate_table()       ), /table table_b already exists/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  disallow_overwriting_properties_with_functions: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    # debug 'Ωbbdbr_118', new Dbric '/dev/shm/bricabrac.sqlite'
    do =>
      db        = ( new Dbric ':memory:' )
      db_proto  = Object.getPrototypeOf db
      # debug 'Ωbbdbr_119', Object.getOwnPropertyDescriptor db_proto, 'is_ready'
      # debug 'Ωbbdbr_120', Object.getOwnPropertyDescriptor db_proto, '_get_is_ready'
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
      @throws ( Ωbbdbr_121 = -> new Dbric_nonconform() ), /not allowed to override property 'is_ready'; use '_get_is_ready instead/
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  sample_db: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    #=======================================================================================================
    class Dbric_store extends Dbric
      @build: [
        SQL"""create table store_facets (
          facet_key             text unique not null primary key,
          facet_value           json );"""
        ]
      @statements:
        store_insert_facet: SQL"""
          insert into store_facets ( facet_key, facet_value ) values ( $facet_key, $facet_value )
            on conflict ( facet_key ) do update set facet_value = excluded.facet_value;"""
        store_get_facets: SQL"""
          select * from store_facets order by facet_key;"""
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      store     = new Dbric_store db_path
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
      @eq ( Ωbbdbr_122 = -> cast_row rows.next().value  ), { facet_key: 'false', facet_value: false, _v: 'false' }
      @eq ( Ωbbdbr_123 = -> cast_row rows.next().value  ), { facet_key: 'one', facet_value: 1, _v: 1 }
      @eq ( Ωbbdbr_124 = -> cast_row rows.next().value  ), { facet_key: 'three', facet_value: 'iii', _v: '"iii"' }
      @eq ( Ωbbdbr_125 = -> cast_row rows.next().value  ), { facet_key: 'true', facet_value: true, _v: 'true' }
      @eq ( Ωbbdbr_126 = -> cast_row rows.next().value  ), { facet_key: 'two', facet_value: 2, _v: 2 }
      @eq ( Ωbbdbr_127 = -> rows.next().done            ), true
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  sample_db_with_bsql: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
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
      db_path   = ':memory:'
      store     = new Dbric_store db_path
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
      @eq ( Ωbbdbr_128 = -> cast_row rows.next().value ), { facet_key: 'false', facet_value: false, _v: 'false' }
      @eq ( Ωbbdbr_129 = -> cast_row rows.next().value ), { facet_key: 'one', facet_value: 1, _v: 1 }
      @eq ( Ωbbdbr_130 = -> cast_row rows.next().value ), { facet_key: 'three', facet_value: 'iii', _v: '"iii"' }
      @eq ( Ωbbdbr_131 = -> cast_row rows.next().value ), { facet_key: 'true', facet_value: true, _v: 'true' }
      @eq ( Ωbbdbr_132 = -> cast_row rows.next().value ), { facet_key: 'two', facet_value: 2, _v: 2 }
      @eq ( Ωbbdbr_133 = -> cast_row rows.next().value ), undefined
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  udf_functions_with_nsql: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
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
      for n in [ 0 ... 10 ]
        squares.statements.insert_number.run { n, }
      #.....................................................................................................
      # echo 'Ωbbdbr_134', row for row from squares.statements.select_from_squares.iterate()
      rows = squares.statements.select_from_squares.iterate()
      @eq ( Ωbbdbr_135 = -> rows.next().value ), { n: 0, square: 0 }
      @eq ( Ωbbdbr_136 = -> rows.next().value ), { n: 1, square: 1 }
      @eq ( Ωbbdbr_137 = -> rows.next().value ), { n: 2, square: 4 }
      @eq ( Ωbbdbr_138 = -> rows.next().value ), { n: 3, square: 9 }
      @eq ( Ωbbdbr_139 = -> rows.next().value ), { n: 4, square: 16 }
      @eq ( Ωbbdbr_140 = -> rows.next().value ), { n: 5, square: 25 }
      @eq ( Ωbbdbr_141 = -> rows.next().value ), { n: 6, square: 36 }
      @eq ( Ωbbdbr_142 = -> rows.next().value ), { n: 7, square: 49 }
      @eq ( Ωbbdbr_143 = -> rows.next().value ), { n: 8, square: 64 }
      @eq ( Ωbbdbr_144 = -> rows.next().value ), { n: 9, square: 81 }
      @eq ( Ωbbdbr_145 = -> rows.next().done  ), true
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  udf_aggregates_with_nsql: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
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
            # debug 'Ωbbdbr_146', { total, element, }
            return ( total ? 1 ) * element
        ;null
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac-udf_aggregates_with_nsql.sqlite'
      squares   = new Dbric_squares db_path
      for n in [ 0 ... 10 ]
        squares.statements.insert_number.run { n, }
      #.....................................................................................................
      # echo 'Ωbbdbr_147', row for row from squares.statements.select_from_squares.iterate { start: 1, stop: 5, }
      rows = squares.statements.select_from_squares.iterate { start: 1, stop: 5, }
      @eq ( Ωbbdbr_148 = -> rows.next().value ), { n: 1, square: 1, p_n: 120, p_square: 14400 }
      @eq ( Ωbbdbr_149 = -> rows.next().done  ), true
      #.....................................................................................................
      # echo 'Ωbbdbr_150', row for row from squares.statements.select_from_squares.iterate()
      @throws ( Ωbbdbr_151 = -> squares.statements.select_from_squares.iterate() ), /missing named parameters/i
      # @eq ( Ωbbdbr_152 = -> rows.next().value ), { n: null, square: null, p_n: 1, p_square: 1 }
      # @eq ( Ωbbdbr_153 = -> rows.next().value ), null
      #.....................................................................................................
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  udf_functions_with_bsql: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
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
            # debug 'Ωbbdbr_165', { total, element, }
            return ( total ? 1 ) * element
        ;null
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      squares   = new Dbric_squares db_path
      for n in [ 0 ... 10 ]
        squares.statements.insert_number.run { n, }
      #.....................................................................................................
      # echo 'Ωbbdbr_166', row for row from squares.statements.select_from_squares.iterate { start: 2, stop: 3, }
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
    #=======================================================================================================
    class Dbric_phrases extends Dbric
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
      for phrase in [ 'eleven', 'five', 'nine', 'one', 'one point five', 'seven', 'three point one' ]
        phrases.statements.insert_phrase.run { phrase, }
      #.....................................................................................................
      # echo 'Ωbbdbr_169', row for row from phrases.statements.select_from_phrases.iterate { matcher: '^.*([aeiou].e).*$', }
      # echo()
      #.....................................................................................................
      # echo 'Ωbbdbr_170', row for row from phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
      rows = phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
      @eq ( Ωbbdbr_171 = -> rows.next().value ), { phrase: 'eleven', match: 'le', capture: 'le' }
      @eq ( Ωbbdbr_172 = -> rows.next().value ), { phrase: 'eleven', match: 've', capture: 've' }
      @eq ( Ωbbdbr_173 = -> rows.next().value ), { phrase: 'five', match: 'fi', capture: 'fi' }
      @eq ( Ωbbdbr_174 = -> rows.next().value ), { phrase: 'nine', match: 'ni', capture: 'ni' }
      @eq ( Ωbbdbr_175 = -> rows.next().value ), { phrase: 'one', match: 'o', capture: 'o' }
      @eq ( Ωbbdbr_176 = -> rows.next().value ), { phrase: 'one point five', match: 'o', capture: 'o' }
      @eq ( Ωbbdbr_177 = -> rows.next().value ), { phrase: 'one point five', match: 'poi', capture: 'poi' }
      @eq ( Ωbbdbr_178 = -> rows.next().value ), { phrase: 'one point five', match: 'fi', capture: 'fi' }
      @eq ( Ωbbdbr_179 = -> rows.next().value ), { phrase: 'seven', match: 'se', capture: 'se' }
      @eq ( Ωbbdbr_180 = -> rows.next().value ), { phrase: 'seven', match: 've', capture: 've' }
      @eq ( Ωbbdbr_181 = -> rows.next().value ), { phrase: 'three point one', match: 'poi', capture: 'poi' }
      @eq ( Ωbbdbr_182 = -> rows.next().value ), { phrase: 'three point one', match: ' o', capture: ' o' }
      @eq ( Ωbbdbr_183 = -> rows.next().value ), undefined
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  file_mirror_as_table_function: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    #=======================================================================================================
    class Dbric_phrases extends Dbric
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
      @eq ( Ωbbdbr_184 = -> ( phrases.prepare SQL"""pragma foreign_keys""" ).get() ), { foreign_keys: 1,      }
      @eq ( Ωbbdbr_185 = -> ( phrases.prepare SQL"""pragma journal_mode""" ).get() ), { journal_mode: 'wal',  }
      # #...................................................................................................
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
      # echo 'Ωbbdbr_186', row for row from phrases.statements.select_from_datasources.iterate()
      # echo()
      # #...................................................................................................
      # echo 'Ωbbdbr_187', row for row from phrases.statements.select_from_mirror.iterate()
      # echo()
      #.....................................................................................................
      for { dskey, line_nr, line, } from phrases.statements.select_from_mirror.iterate()
        keywords = line.split /(?:\p{Z}+)|((?:\p{L}+)|(?:\p{N}+)|(?:\p{S}+))/v
        # debug 'Ωbbdbr_188', line_nr, rpr keywords
        for keyword in keywords
          continue unless keyword?
          continue if keyword is ''
          phrases.w.statements.insert_keyword.run { dskey, line_nr, keyword, }
      # #...................................................................................................
      # echo 'Ωbbdbr_189', row for row from phrases.statements.select_from_keywords.iterate()
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
    #=======================================================================================================
    class Dbric_phrases extends Dbric
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
            # debug 'Ωbbdbr_190', line_nr, rpr keywords
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
      # debug 'Ωbbdbr_191', phrases.teardown()
      # debug 'Ωbbdbr_192', phrases.rebuild()
      @eq ( Ωbbdbr_193 = -> ( phrases.prepare SQL"""pragma foreign_keys""" ).get() ), { foreign_keys: 1,      }
      @eq ( Ωbbdbr_194 = -> ( phrases.prepare SQL"""pragma journal_mode""" ).get() ), { journal_mode: 'wal',  }
      #.....................................................................................................
      do =>
        dskey = 'humdum'
        path  = PATH.resolve __dirname, '../../../assets/bricabrac/humpty-dumpty.md'
        phrases.statements.insert_datasource.run { dskey, path }
      #.....................................................................................................
      phrases.statements.populate_keywords.run()
      #.....................................................................................................
      # echo 'Ωbbdbr_195', row for row from phrases.statements.locations_from_keyword.iterate { keyword: 'thought', }
      # echo()
      rows = phrases.statements.locations_from_keyword.iterate { keyword: 'thought', }
      @eq ( Ωbbdbr_196 = -> rows.next().value ), { dskey: 'humdum', line_nr: 15, keyword: 'thought' }
      @eq ( Ωbbdbr_197 = -> rows.next().value ), { dskey: 'humdum', line_nr: 34, keyword: 'thought' }
      @eq ( Ωbbdbr_198 = -> rows.next().value ), undefined
      #.....................................................................................................
      # echo 'Ωbbdbr_199', row for row from phrases.statements.locations_from_keyword.iterate { keyword: 'she', }
      # echo()
      rows = phrases.statements.locations_from_keyword.iterate { keyword: 'she', }
      @eq ( Ωbbdbr_200 = -> rows.next().value ), { dskey: 'humdum', line_nr: 2, keyword: 'she' }
      @eq ( Ωbbdbr_201 = -> rows.next().value ), { dskey: 'humdum', line_nr: 3, keyword: 'she' }
      @eq ( Ωbbdbr_202 = -> rows.next().value ), { dskey: 'humdum', line_nr: 4, keyword: 'she' }
      @eq ( Ωbbdbr_203 = -> rows.next().value ), { dskey: 'humdum', line_nr: 5, keyword: 'she' }
      @eq ( Ωbbdbr_204 = -> rows.next().value ), { dskey: 'humdum', line_nr: 15, keyword: 'she' }
      @eq ( Ωbbdbr_205 = -> rows.next().value ), { dskey: 'humdum', line_nr: 17, keyword: 'she' }
      @eq ( Ωbbdbr_206 = -> rows.next().value ), { dskey: 'humdum', line_nr: 18, keyword: 'she' }
      @eq ( Ωbbdbr_207 = -> rows.next().value ), { dskey: 'humdum', line_nr: 26, keyword: 'she' }
      @eq ( Ωbbdbr_208 = -> rows.next().value ), { dskey: 'humdum', line_nr: 34, keyword: 'she' }
      @eq ( Ωbbdbr_209 = -> rows.next().value ), { dskey: 'humdum', line_nr: 36, keyword: 'she' }
      @eq ( Ωbbdbr_210 = -> rows.next().value ), undefined
      #.....................................................................................................
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  dbric_std_variables_and_sequences: ->
    { Dbric_std,
      True,
      False,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    { lets,
      freeze,                   } = SFMODULES.require_letsfreezethat_infra().simple
    cfg_do_show_variables         = false
    #=======================================================================================================
    db = new Dbric_std ':memory:'
    #=======================================================================================================
    @throws ( Ωbbdbr_211 = -> db.std_with_variables -> db.std_with_variables -> null  ), /illegal to nest `std_with_variables\(\)` contexts/
    @throws ( Ωbbdbr_212 = -> db.std_set_variable 'myname', 'myvalue'                 ), /illegal to set variable/
    # @throws ( Ωbbdbr_213 = -> db.std_get_variable 'myname'                            ), /illegal to get variable/
    @throws ( Ωbbdbr_214 = -> db.std_get_variable 'myname'                            ), /unknown variable/
    #=======================================================================================================
    variables = (db._show_variables cfg_do_show_variables )
    #.......................................................................................................
    db.std_with_variables =>
      @throws ( Ωbbdbr_215 = -> db.std_get_variable 'myname' ), /unknown variable/
      @eq ( Ωbbdbr_216 = -> (db._show_variables cfg_do_show_variables ) ), { 'seq:global:rowid': { sv: 0, sd: 1, cv: 0, cd: 1, tv: undefined, gv: 0 } }
      ### TAINT use API ###
      db.state.std_variables = lets db.state.std_variables, ( d ) ->
        d[ 'seq:app:counter' ] = { name: 'seq:app:counter', value: 7, delta: +3, }
      @eq ( Ωbbdbr_217 = -> (db._show_variables cfg_do_show_variables ) ), { 'seq:app:counter': { sv: undefined, sd: undefined, cv: 7, cd: 3, tv: undefined, gv: 7 }, 'seq:global:rowid': { sv: 0, sd: 1, cv: 0, cd: 1, tv: undefined, gv: 0 } }
      @eq ( Ωbbdbr_218 = -> db.std_get_next_in_sequence 'seq:app:counter' ), 10
      @eq ( Ωbbdbr_219 = -> db.std_get_next_in_sequence 'seq:app:counter' ), 13
      db.std_set_variable 'fuzz', 11.5
      db.std_set_variable 'name', 'Bob'
      @eq ( Ωbbdbr_220 = -> db.std_get_variable 'fuzz' ), 11.5
      @eq ( Ωbbdbr_221 = -> db.std_get_variable 'name' ), 'Bob'
      @eq ( Ωbbdbr_222 = -> (db._show_variables cfg_do_show_variables ) ), { fuzz: { sv: undefined, sd: undefined, cv: 11.5, cd: null, tv: undefined, gv: 11.5, }, name: { sv: undefined, sd: undefined, cv: 'Bob', cd: null, tv: undefined, gv: 'Bob' }, 'seq:app:counter': { sv: undefined, sd: undefined, cv: 13, cd: 3, tv: undefined, gv: 13 }, 'seq:global:rowid': { sv: 0, sd: 1, cv: 0, cd: 1, tv: undefined, gv: 0 } }
      ;null
    #.......................................................................................................
    db.std_with_variables { name: 'Alice', job: 'engineer', }, =>
      @eq ( Ωbbdbr_223 = -> db.std_get_variable 'name' ), 'Alice'
      # debug 'Ωbbdbr_224', { name, job, }
      @eq ( Ωbbdbr_225 = -> (db._show_variables cfg_do_show_variables ) ), { fuzz: { sv: 11.5, sd: null, cv: 11.5, cd: null, tv: undefined, gv: 11.5 }, job: { sv: undefined, sd: undefined, cv: undefined, cd: undefined, tv: 'engineer', gv: 'engineer' }, name: { sv: '"Bob"', sd: null, cv: 'Bob', cd: null, tv: 'Alice', gv: 'Alice' }, 'seq:app:counter': { sv: 13, sd: 3, cv: 13, cd: 3, tv: undefined, gv: 13 }, 'seq:global:rowid': { sv: 0, sd: 1, cv: 0, cd: 1, tv: undefined, gv: 0 } }
      ;null
    #.......................................................................................................
    @eq ( Ωbbdbr_226 = -> (db._show_variables cfg_do_show_variables ) ), { fuzz: { sv: 11.5, sd: null, cv: 11.5, cd: null, tv: undefined, gv: 11.5 }, name: { sv: '"Bob"', sd: null, cv: 'Bob', cd: null, tv: undefined, gv: 'Bob' }, 'seq:app:counter': { sv: 13, sd: 3, cv: 13, cd: 3, tv: undefined, gv: 13 }, 'seq:global:rowid': { sv: 0, sd: 1, cv: 0, cd: 1, tv: undefined, gv: 0 } }
    db.std_with_variables =>
      @eq ( Ωbbdbr_227 = -> (db._show_variables cfg_do_show_variables ) ), { fuzz: { sv: 11.5, sd: null, cv: 11.5, cd: null, tv: undefined, gv: 11.5 }, name: { sv: '"Bob"', sd: null, cv: 'Bob', cd: null, tv: undefined, gv: 'Bob' }, 'seq:app:counter': { sv: 13, sd: 3, cv: 13, cd: 3, tv: undefined, gv: 13 }, 'seq:global:rowid': { sv: 0, sd: 1, cv: 0, cd: 1, tv: undefined, gv: 0 } }
      ;null
    #.......................................................................................................
    db.std_with_variables =>
      ### Model that shows how to insert sequential RowIDs using a private table, an associated public
      view, and a `instead of insert` trigger: ###
      db.std_set_variable 'seq:letters', 0, 1
      db.execute SQL"""create table _letters (
          rowid   text    unique  not null,
          letter  text    unique  not null,
        -- primary key ( rowid )
        constraint "Ωconstraint_228" check ( length( letter ) = 1 )
        ) strict;"""
      db.execute SQL"""create view letters as select * from _letters;"""
      db.execute SQL"""create trigger on_before_insert_letters
        instead of insert on letters
          for each row begin
            insert into _letters ( rowid, letter ) values
              -- ( 't:letters:R=' || cast( std_get_next_in_sequence( 'seq:letters' ) as integer ), new.letter );
              ( printf( 't:letters:R=%d', std_get_next_in_sequence( 'seq:letters' ) ), new.letter );
            end;
        ;"""
      db.execute SQL"""insert into letters ( letter ) values ( 'a' ), ( 'z' );"""
      # info 'Ωbbdbr_229', row for row from db.walk SQL"select * from letters;"
      rows = db.walk SQL"select * from letters order by letter;"
      @eq ( Ωbbdbr_230 = -> rows.next().value ), { rowid: 't:letters:R=1', letter: 'a', }
      @eq ( Ωbbdbr_231 = -> rows.next().value ), { rowid: 't:letters:R=2', letter: 'z', }
      @eq ( Ωbbdbr_232 = -> rows.next().done ), true
      ;null
    ;null
    #.......................................................................................................
    db.std_with_variables =>
      ### NOTE Model that shows how to insert rows with sequential RowIDs using a tbale and and `after
      insert` trigger that updates `rowid`: ###
      db.std_set_variable 'seq:numbers', 0, 1
      db.execute SQL"""create table numbers (
          rowid   text    unique  not null default 'new_rowid',
          number  text    unique  not null
        ) strict;"""
      db.execute SQL"""create trigger on_after_insert_on_numbers
        after insert on numbers for each row begin
            update numbers set rowid = printf( 't:numbers:R=%d', std_get_next_in_sequence( 'seq:numbers' ) )
              where rowid = 'new_rowid';
            end;
        ;"""
      db.execute SQL"""insert into numbers ( number ) values ( 'uno' ), ( 'due' );"""
      # info 'Ωbbdbr_233', row for row from db.walk SQL"select * from numbers;"
      rows = db.walk SQL"select * from numbers order by rowid;"
      @eq ( Ωbbdbr_234 = -> rows.next().value ), { rowid: 't:numbers:R=1', number: 'uno', }
      @eq ( Ωbbdbr_235 = -> rows.next().value ), { rowid: 't:numbers:R=2', number: 'due', }
      @eq ( Ωbbdbr_236 = -> rows.next().done ), true
      ;null
    #.......................................................................................................
    do =>
      ### NOTE Model that shows how to build a parametrized view: ###
      #.......................................................................................................
      ### repeat earlier test to ensure we know what's there: ###
      rows = db.walk SQL"select * from letters order by letter;"
      @eq ( Ωbbdbr_237 = -> rows.next().value ), { rowid: 't:letters:R=1', letter: 'a', }
      @eq ( Ωbbdbr_238 = -> rows.next().value ), { rowid: 't:letters:R=2', letter: 'z', }
      @eq ( Ωbbdbr_239 = -> rows.next().done ), true
      #.......................................................................................................
      insert_letter = db.prepare SQL"""insert into letters ( letter ) values ( $letter );"""
      #.......................................................................................................
      db.execute SQL"""create view run_of_letters as
        select
            *
          from letters
          where letter between std_get_variable( 'first_letter' ) and std_get_variable( 'last_letter' );"""
      #.......................................................................................................
      db.std_with_variables =>
        for cid in [ ( 'b'.codePointAt 0 ) .. ( 'y'.codePointAt 0 ) ]
          letter = String.fromCodePoint cid
          insert_letter.run { letter, }
      #.......................................................................................................
      db.std_with_variables { first_letter: 'g', last_letter: 'm' }, =>
        result    = ( row.letter for row from db.walk SQL"select * from run_of_letters order by letter;" ).join ','
        variables = (db._show_variables cfg_do_show_variables )
        @eq ( Ωbbdbr_240 = -> result                      ), 'g,h,i,j,k,l,m'
        @eq ( Ωbbdbr_241 = -> variables.first_letter?.gv  ), 'g'
        @eq ( Ωbbdbr_242 = -> variables.last_letter?.gv   ), 'm'
        ;null
    #.......................................................................................................
    do =>
      ### NOTE Model that shows how to use a sequence to produce RowIDs:

      * `$table.rowid` column is declared *without* `generate always` clause,
      * thus `$table.rowid` can be used as primary key;
      * additionally, may contain check clause for `$table.rowid`.
      * An `insert` statement is defined that calls `std_get_next_in_sequence()` to obtain next RowID;
      * if DB-wide unique RowIDs are desirable, use `printf()` to embed numerical RowID in string.
      * Suggested to use a suffix `_v` to identify statement as using variables and requires to be used
        inside a `db.std_with_variables()` context handler.
      * Insert statement takes care of the implementation detail of assigning the next unique RowID; since
        its value is persisted in the DB, inserts can be done across several sessions without needing any
        additional code besides the context handler.
      ###
      #.......................................................................................................
      ### NOTE part of `Dbric.build` list: ###
      db.execute SQL"""create table prfx_words (
          rowid     text  unique  not null,
          en        text          not null,
          de        text          not null,
        primary key ( rowid ),
        constraint "Ωconstraint_243" check ( rowid regexp 't:wrd:R=\\d+' ) );"""
      ### NOTE part of `Dbric.statements` object: ###
      insert_word_v = db.prepare SQL"""insert into prfx_words ( rowid, en, de ) values (
          printf( 't:wrd:R=%d', std_get_next_in_sequence( 'seq:prfx_words_rowid' ) ),
          $en,
          $de );"""
      #.......................................................................................................
      ### NOTE part of rebuild() (?, still unclear): ###
      db.std_with_variables =>
        db.std_set_variable 'seq:prfx_words_rowid', 100, +100
        ;null
      #.......................................................................................................
      ### NOTE in the app proper: ###
      db.std_with_variables =>
        insert_word_v.run { en: 'dog',  de: 'Hund',   }
        insert_word_v.run { en: 'cat',  de: 'Katze',  }
        insert_word_v.run { en: 'word', de: 'Wort',   }
        insert_word_v.run { en: 'call', de: 'rufen',  }
        insert_word_v.run { en: 'call', de: 'Anruf',  }
        insert_word_v.run { en: 'book', de: 'Buch',   }
        ;null
    #.......................................................................................................
    variables = (db._show_variables cfg_do_show_variables )
    @eq ( Ωbbdbr_244 = -> variables[ 'seq:prfx_words_rowid' ]?.gv  ), 700
    # echo 'Ωbbdbr_245', row for row from db.walk SQL"select * from prfx_words order by de;"
    rows = db.walk SQL"select * from prfx_words order by de;"
    @eq ( Ωbbdbr_246 = -> rows.next().value ), { rowid: 't:wrd:R=600', en: 'call', de: 'Anruf' }
    @eq ( Ωbbdbr_247 = -> rows.next().value ), { rowid: 't:wrd:R=700', en: 'book', de: 'Buch' }
    @eq ( Ωbbdbr_248 = -> rows.next().value ), { rowid: 't:wrd:R=200', en: 'dog', de: 'Hund' }
    @eq ( Ωbbdbr_249 = -> rows.next().value ), { rowid: 't:wrd:R=300', en: 'cat', de: 'Katze' }
    @eq ( Ωbbdbr_250 = -> rows.next().value ), { rowid: 't:wrd:R=400', en: 'word', de: 'Wort' }
    @eq ( Ωbbdbr_251 = -> rows.next().value ), { rowid: 't:wrd:R=500', en: 'call', de: 'rufen' }
    @eq ( Ωbbdbr_252 = -> rows.next().done ), true
    ;null

  #---------------------------------------------------------------------------------------------------------
  dbric_strict_mode: ->
    { Dbric,
      True,
      False,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    { lets,
      freeze,                   } = SFMODULES.require_letsfreezethat_infra().simple
    #.......................................................................................................
    do =>
      db = new Dbric ':memory:'
      ( db.prepare SQL"pragma strict       = on;"    ).run()
      db.execute SQL"create table t ( f integer );"
      db.execute SQL"insert into t values ( 1234 );"
      db.execute SQL"insert into t values ( 12.34 );"
      db.execute SQL"insert into t values ( 'wat' );"
      # debug 'Ωbbdbr_253', ( row.f for row from db.walk SQL"select f from t;" )
      ;null
    #.......................................................................................................
    do =>
      db = new Dbric ':memory:'
      ( db.prepare SQL"pragma strict       = on;"    ).run()
      @throws ( Ωbbdbr_254 = -> db.execute SQL"create table t ( f integer, j json ) strict;" ), /unknown datatype for t\.j/
      db.execute SQL"create table t ( f integer, j blob ) strict;"
      db.execute SQL"insert into t ( f ) values ( 1234 );"
      @eq ( Ωbbdbr_255 = -> ( db.get_first SQL"select typeof( 12    ) as type;" ).type ), 'integer'
      @eq ( Ωbbdbr_256 = -> ( db.get_first SQL"select typeof( 12.34 ) as type;" ).type ), 'real'
      @eq ( Ωbbdbr_257 = -> ( db.get_first SQL"select typeof( 'wat' ) as type;" ).type ), 'text'
      @throws ( Ωbbdbr_258 = -> db.execute SQL"insert into t ( f ) values ( 12.34 );" ), /cannot store REAL value in INTEGER column/
      @throws ( Ωbbdbr_259 = -> db.execute SQL"insert into t ( f ) values ( 'wat' );" ), /cannot store TEXT value in INTEGER column/
      # debug 'Ωbbdbr_260', ( row.f for row from db.walk SQL"select f from t;" )
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  _dbric_dynamic_build_properties: ->
    { Dbric,
      Dbric_std,
      True,
      False,
      IDN,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    #.......................................................................................................
    do =>
      prefix = 'wrd'
      class Db_1 extends Dbric_std
        @build: [
          -> SQL"""create table #{IDN "#{prefix}_words"} ( t text );"""
          -> SQL"""insert into #{IDN "#{prefix}_words"} ( t ) values ( '水 (みず)' );"""
          -> SQL"""insert into #{IDN "#{prefix}_words"} ( t ) values ( '食べ物 (たべもの)' );"""
          ]
      db = new Db_1()
      relation_names = new Set ( row.name for row from db.walk SQL"select * from std_relations;" )
      @eq ( Ωbbdbr_261 = -> relation_names.has 'wrd_words'      ), true
      rows = db.walk SQL"""select * from #{IDN "#{prefix}_words"};"""
      @eq ( Ωbbdbr_262 = -> rows.next().value.t                 ), '水 (みず)'
      @eq ( Ωbbdbr_263 = -> rows.next().value.t                 ), '食べ物 (たべもの)'
      @eq ( Ωbbdbr_264 = -> rows.next().done                    ), true
      ;null
    #.......................................................................................................
    do =>
      prefix = 'wrd'
      class Db_1 extends Dbric_std
        @build: [
          -> SQL"""create table #{IDN "#{prefix}_words"} ( t text );"""
          -> SQL"""insert into #{IDN "#{prefix}_words"} ( t ) values ( '水 (みず)' );"""
          -> SQL"""insert into #{IDN "#{prefix}_words"} ( t ) values ( '食べ物 (たべもの)' );"""
          ]
        @statements:
          select_words: -> SQL"""select * from #{IDN "#{prefix}_words"} order by t;"""
      db = new Db_1()
      relation_names = new Set ( row.name for row from db.walk SQL"select * from std_relations;" )
      @eq ( Ωbbdbr_265 = -> relation_names.has 'wrd_words'      ), true
      # info 'Ωbbdbr_266', row for row from db.walk db.statements.select_words
      rows = db.walk db.statements.select_words
      @eq ( Ωbbdbr_267 = -> rows.next().value.t                 ), '水 (みず)'
      @eq ( Ωbbdbr_268 = -> rows.next().value.t                 ), '食べ物 (たべもの)'
      @eq ( Ωbbdbr_269 = -> rows.next().done                    ), true
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  _dbric_integrate_plugin: ->
    { Dbric,
      Dbric_std,
      True,
      False,
      IDN,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    #.......................................................................................................
    do =>
      class Db_1 extends Dbric
        exportable_method_1: ->
        @build: [
          -> SQL"""create table wrd_words ( t text );"""
          -> SQL"""insert into wrd_words ( t ) values ( '水 (みず)' );"""
          -> SQL"""insert into wrd_words ( t ) values ( '食べ物 (たべもの)' );"""
          ]
      class Db_2 extends Db_1
        exportable_method_2: ->
      # db = new Db_1()
      { get_prototype_chain, } = ( require '../../../apps/bricabrac-sfmodules/lib/unstable-object-tools-brics' ).require_get_prototype_chain()
      #.....................................................................................................
      get_all_effective_descriptors_in_prototype_chain = ( x ) ->
        R = Object.create null
        return R unless x?
        for prototype in get_prototype_chain x
          keys = Object.keys Object.getOwnPropertyDescriptors prototype
          # if ( Object.hasOwn prototype, 'std_with_variables' ) or ( Object.hasOwn prototype, 'statements' ) or ( Object.hasOwn prototype, 'exportable_method_1' )
          if ( Object.hasOwn prototype, 'exportable_method_1' )
            # help 'Ωbbdbr_270', prototype.constructor.name, prototype.std_with_variables
            # help 'Ωbbdbr_271', prototype.constructor.name, prototype.statements
            help 'Ωbbdbr_272', prototype.constructor.name, prototype.exportable_method_1
            # info 'Ωbbdbr_273', prototype.constructor.name, keys
          else
            null
            # whisper 'Ωbbdbr_274', prototype.constructor.name, keys
        ;null
      #.....................................................................................................
      debug()
      for prototype in get_prototype_chain Db_1
        break if prototype in [ Dbric, Dbric::, ]
        debug 'Ωbbdbr_275', prototype
        debug 'Ωbbdbr_276', ' ', prototype.exportable_method_1
        debug 'Ωbbdbr_277', ' ', prototype.exportable_method_2
        debug 'Ωbbdbr_278', ' ', prototype.build?.length ? ''
      #.....................................................................................................
      debug()
      for prototype in get_prototype_chain Db_1::
        break if prototype in [ Dbric, Dbric::, ]
        debug 'Ωbbdbr_279', prototype
        debug 'Ωbbdbr_280', ' ', prototype.exportable_method_1
        debug 'Ωbbdbr_281', ' ', prototype.exportable_method_2
        debug 'Ωbbdbr_282', ' ', prototype.build?.length ? ''
      #.....................................................................................................
      debug 'Ωbbdbr_283', '-----------------------------------------'
      for prototype in get_prototype_chain Db_2
        break if prototype in [ Dbric, Dbric::, ]
        debug 'Ωbbdbr_284', prototype
        debug 'Ωbbdbr_285', ' ', prototype.exportable_method_1
        debug 'Ωbbdbr_286', ' ', prototype.exportable_method_2
        debug 'Ωbbdbr_287', ' ', prototype.build?.length ? ''
      #.....................................................................................................
      debug()
      for prototype in get_prototype_chain Db_2::
        break if prototype in [ Dbric, Dbric::, ]
        debug 'Ωbbdbr_288', prototype
        debug 'Ωbbdbr_289', ' ', prototype.exportable_method_1
        debug 'Ωbbdbr_290', ' ', prototype.exportable_method_2
        debug 'Ωbbdbr_291', ' ', prototype.build?.length ? ''
      # debug 'Ωbbdbr_292'
      # debug 'Ωbbdbr_293', prototype for prototype in get_prototype_chain db
      # #.....................................................................................................
      # urge reverse 'Ωbbdbr_294'; get_all_effective_descriptors_in_prototype_chain Dbric_std
      # # urge reverse 'Ωbbdbr_295'; get_all_effective_descriptors_in_prototype_chain Dbric_std::
      # urge reverse 'Ωbbdbr_296'; get_all_effective_descriptors_in_prototype_chain new Dbric_std
      # urge ( reverse 'Ωbbdbr_297' ), gold "build:                ", Dbric_std.build
      # urge ( reverse 'Ωbbdbr_298' ), gold "statements:           ", Dbric_std.statements
      # urge ( reverse 'Ωbbdbr_299' ), gold "functions:            ", Dbric_std.functions
      # urge ( reverse 'Ωbbdbr_300' ), gold "aggregate_functions:  ", Dbric_std.aggregate_functions
      # urge ( reverse 'Ωbbdbr_301' ), gold "window_functions:     ", Dbric_std.window_functions
      # urge ( reverse 'Ωbbdbr_302' ), gold "table_functions:      ", Dbric_std.table_functions
      # urge ( reverse 'Ωbbdbr_303' ), gold "virtual_tables:       ", Dbric_std.virtual_tables
      # urge ( reverse 'Ωbbdbr_304' ), gold "exports:              ", Dbric_std.exports
      # # db.integrate_plugin Dbric_std
      # # relation_names = new Set ( row.name for row from db.walk SQL"select * from std_relations;" )
      # # debug 'Ωbbdbr_305', relation_names
      # # @eq ( Ωbbdbr_306 = -> relation_names.has 'wrd_words'      ), true
      # # rows = db.walk SQL"""select * from wrd_words;"""
      # # @eq ( Ωbbdbr_307 = -> rows.next().value.t                 ), '水 (みず)'
      # # @eq ( Ωbbdbr_308 = -> rows.next().value.t                 ), '食べ物 (たべもの)'
      # # @eq ( Ωbbdbr_309 = -> rows.next().done                    ), true
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  _dbric_plugins_acquisition: ->
    { Dbric,
      Dbric_std,
      True,
      False,
      IDN,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    { type_of,                  } = ( require '../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics' ).require_type_of()
    { get_all_in_prototype_chain,
      get_prototype_chain,      } = ( require '../../../apps/bricabrac-sfmodules/lib/unstable-object-tools-brics' ).require_get_prototype_chain()
    #.......................................................................................................
    nbr_number_plugin =
      exports:
        prefix: 'nbr' ### NOTE informative, not enforced ###
        build: [
          SQL"create table nbr_numbers ( number integer );"
          ]
        statements:
          nbr_insert_number:          SQL"insert into nbr_numbers value ( $number );"
          nbr_select_numbers:         SQL"select * from nbr_numbers order by number;"
          nbr_select_square_numbers:  SQL"select nbr_square( number ) from nbr_numbers order by number;"
        functions:
          nbr_square:
            value: ( number ) -> number ** 2
    #.......................................................................................................
    do =>
      #=====================================================================================================
      class Db_1 extends Dbric_std
        @plugins: [
          'prototypes'
          nbr_number_plugin
          'me'
          # Dbric_std
          ]
        @exports: {}
      #=====================================================================================================
      db = new Db_1()
      for { type, value, } in db._get_acquisition_chain()
        switch type
          when 'plugin'
            info 'Ωbbdbr_311', type, Object.keys value.exports
          when 'prototype'
            switch true
              when value is db.constructor
                help 'Ωbbdbr_312', type, rpr value.name
              # when value in base_prototypes
              #   whisper 'Ωbbdbr_312', type, "(object)"
              else
                urge 'Ωbbdbr_313', type, rpr value.name, value
          else
            throw new Error "Ωbbdbr_314 internal error: unknown type #{rpr type}"
        # debug 'Ωbbdbr_315', { type, value, }
      ;null
    #.......................................................................................................
    ;null


#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: true, report_checks: true, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { dbric_integrate_plugin: tests._dbric_integrate_plugin, }
  ( new Test guytest_cfg ).test { dbric_plugins_acquisition: tests._dbric_plugins_acquisition, }



  #=========================================================================================================
  ;null