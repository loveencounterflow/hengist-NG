

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
{ Dbric,
  Dbric_std,
  IDN,
  LIT,
  SQL,
  VEC,
  from_bool,
  as_bool,
  internals,
  True,
  False,
  unquote_name,         } = require '../../../apps/bricabrac-sfmodules/lib/dbric'

#===========================================================================================================
_toggle = 0
toggle = ( P... ) ->
  _toggle = ( _toggle + 1 ) % 2
  return ( if _toggle is 0 then blue else gold ) P...

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
    #.......................................................................................................
    @eq     ( Ωbbdbr___3 = -> internals.type_of unquote_name      ), 'function'
    @eq     ( Ωbbdbr___4 = -> unquote_name 'x'                    ), 'x'
    @eq     ( Ωbbdbr___5 = -> unquote_name '"x"'                  ), 'x'
    @eq     ( Ωbbdbr___6 = -> unquote_name 'abc'                  ), 'abc'
    @eq     ( Ωbbdbr___7 = -> unquote_name '"abc"'                ), 'abc'
    @eq     ( Ωbbdbr___8 = -> unquote_name '"ab""c"'              ), 'ab"c'
    @throws ( Ωbbdbr___9 = -> unquote_name ''                     ), /expected a non-empty text, got an empty text/
    @throws ( Ωbbdbr__10 = -> unquote_name '"'                    ), /expected a quoted non-empty text, got a quote/
    @eq     ( Ωbbdbr__11 = -> unquote_name '""'                   ), '' ### NOTE SQLite does accept a quoted empty string as name ###
    @throws ( Ωbbdbr__12 = -> unquote_name false                  ), /expected a text, got a boolean/
    #.......................................................................................................
    @eq     ( Ωbbdbr__13 = -> IDN 'abc'                           ), '"abc"'
    @eq     ( Ωbbdbr__14 = -> IDN 'A"bc"'                         ), '"A""bc"""'
    @eq     ( Ωbbdbr__15 = -> LIT 'abc'                           ), "'abc'"
    @eq     ( Ωbbdbr__16 = -> LIT "A'bc'"                         ), "'A''bc'''"
    @throws ( Ωbbdbr__17 = -> VEC 'abc'                           ), /expected a list/
    @eq     ( Ωbbdbr__18 = -> VEC [ 'abc' ]                       ), """( 'abc' )"""
    @eq     ( Ωbbdbr__19 = -> VEC [ 'abc', 1, true, false, ]      ), """( 'abc', 1, 1, 0 )"""
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  dbric_std: ->
    { temp,                     } = SFMODULES.unstable.require_temp()
    #.......................................................................................................
    temp.with_directory { keep: false, }, ({ path: folder_path, }) =>
      # folder_path = '/tmp/bricbrac-test' # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      db_path = PATH.join folder_path, 'bricabrac.sqlite'
      remove db_path
      # help 'Ωbbdbr__20', { db_path, }
      #.....................................................................................................
      do =>
        db = new Dbric db_path, { rebuild: true, }
        @eq   ( Ωbbdbr__21 = -> db instanceof Dbric         ), true
        @eq   ( Ωbbdbr__22 = -> db._get_db_objects()        ), {}
        return null
    #.......................................................................................................
    temp.with_directory { keep: false, }, ({ path: folder_path, }) =>
      # folder_path = '/tmp/bricbrac-test' # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      db_path = PATH.join folder_path, 'bricabrac.sqlite'
      remove db_path
      # help 'Ωbbdbr__23', { db_path, }
      #.....................................................................................................
      do =>
        db = new Dbric_std db_path, { rebuild: true, }
        @eq   ( Ωbbdbr__24 = -> db instanceof Dbric               ), true
        @eq   ( Ωbbdbr__25 = -> db instanceof Dbric_std           ), true
        objects = new Set ( "#{o.type}:#{o.name}" for _, o of db._get_db_objects() )
        @eq   ( Ωbbdbr__26 = -> objects.has 'view:std_tables'     ), true
        @eq   ( Ωbbdbr__27 = -> objects.has 'view:std_views'      ), true
        @eq   ( Ωbbdbr__28 = -> objects.has 'view:std_relations'  ), true
        return null
      #.....................................................................................................
      do =>
        db = new Dbric_std db_path, { rebuild: false, }
        @eq   ( Ωbbdbr__29 = -> db instanceof Dbric               ), true
        @eq   ( Ωbbdbr__30 = -> db instanceof Dbric_std           ), true
        objects = new Set ( "#{o.type}:#{o.name}" for _, o of db._get_db_objects() )
        @eq   ( Ωbbdbr__31 = -> objects.has 'view:std_tables'     ), true
        @eq   ( Ωbbdbr__32 = -> objects.has 'view:std_views'      ), true
        @eq   ( Ωbbdbr__33 = -> objects.has 'view:std_relations'  ), true
        return null
      #.....................................................................................................
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  dbric_std_generate_series: ->
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
      db = new Db ':memory:', { rebuild: true, }
      @eq ( Ωbbdbr__34 = -> [ ( row.value for row from db.walk SQL"select * from std_generate_series( 1, 10, 2 );")...,  ] ), [ 1, 3, 5, 7, 9 ]
      @eq ( Ωbbdbr__35 = -> [ ( row.value for row from db.walk SQL"select * from std_generate_series( 1, 10, 0 );")...,  ] ), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
      @eq ( Ωbbdbr__36 = -> [ ( row.value for row from db.walk SQL"select * from std_generate_series( 1, 1, 0 );")...,   ] ), [ 1 ]
      @eq ( Ωbbdbr__37 = -> [ ( row.value for row from db.walk SQL"select * from std_generate_series( 1, 0, 0 );")...,   ] ), []
      return null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  statement_inheritance: ->
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
      @overwrite: false
      @functions:
        fn_b:
          value: -> return 1
    #.......................................................................................................
    class C_duplicate_statement extends B
      @overwrite: false
      @statements:
        select_b: SQL"select fn_b() as one, 2 as two;"
    #.......................................................................................................
    class C_duplicate_table extends B
      @overwrite: false
      @build: [
        SQL"create table table_b ( d text );"
        SQL"create view view_b as select * from table_b;"
        ]
    # #.....................................................................................................
    # b = new B()
    # debug 'Ωbbdbr__38', b
    # debug 'Ωbbdbr__39', 'functions: ', get_function_names b
    # debug 'Ωbbdbr__40', 'functions: ', ( get_function_names b ).has 'fn_a'
    # debug 'Ωbbdbr__41', 'functions: ', ( get_function_names b ).has 'fn_b'
    # debug 'Ωbbdbr__42', 'functions: ', ( get_function_names b ).has 'regexp'
    # debug 'Ωbbdbr__43', 'tables:    ', get_table_names b
    # debug 'Ωbbdbr__44', 'views:     ', get_view_names b
    # debug 'Ωbbdbr__45', 'triggers:  ', get_trigger_names b
    # debug 'Ωbbdbr__46', 'statements:', ( k for k of b.statements )
    # return null
    #.......................................................................................................
    do =>
      dba = new Dbric_std ':memory:', { rebuild: true, }
      # dba = new A()
      # dba = new B()
      dba.db.function 'zzz_test', { deterministic: true, varargs: false, directOnly: false, }, -> "ZZZ_TEST"
      #.....................................................................................................
      function_names  = get_function_names dba
      table_names     = get_table_names dba
      view_names      = get_view_names dba
      trigger_names   = get_trigger_names dba
      #.....................................................................................................
      @eq ( Ωbbdbr__47 = -> dba.statements.std_get_schema     instanceof  statement_class ), true
      @eq ( Ωbbdbr__48 = -> dba.statements.std_get_tables     instanceof  statement_class ), true
      @eq ( Ωbbdbr__49 = -> dba.statements.std_get_views      instanceof  statement_class ), true
      @eq ( Ωbbdbr__50 = -> dba.statements.std_get_relations  instanceof  statement_class ), true
      @eq ( Ωbbdbr__51 = -> dba.statements.select_a           instanceof  statement_class ), false
      @eq ( Ωbbdbr__52 = -> dba.statements.select_b           instanceof  statement_class ), false
      #.....................................................................................................
      @eq ( Ωbbdbr__53 = -> function_names.has 'zzz_test'                                 ), true
      @eq ( Ωbbdbr__54 = -> function_names.has 'regexp'                                   ), true
      @eq ( Ωbbdbr__55 = -> function_names.has 'fn_a'                                     ), false
      @eq ( Ωbbdbr__56 = -> function_names.has 'fn_b'                                     ), false
      #.....................................................................................................
      @eq ( Ωbbdbr__57 = -> table_names.has 'table_a'                                     ), false
      @eq ( Ωbbdbr__58 = -> table_names.has 'table_b'                                     ), false
      @eq ( Ωbbdbr__59 = -> view_names.has 'std_tables'                                   ), true
      @eq ( Ωbbdbr__60 = -> view_names.has 'std_views'                                    ), true
      @eq ( Ωbbdbr__61 = -> view_names.has 'std_relations'                                ), true
      @eq ( Ωbbdbr__62 = -> view_names.has 'view_a'                                       ), false
      @eq ( Ωbbdbr__63 = -> view_names.has 'view_b'                                       ), false
      ;null
    #.......................................................................................................
    do =>
      dba = new A { rebuild: true, }
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
      @eq ( Ωbbdbr__68 = -> dba.statements.select_a           instanceof  statement_class ), true
      @eq ( Ωbbdbr__69 = -> dba.statements.select_b           instanceof  statement_class ), false
      #.....................................................................................................
      @eq ( Ωbbdbr__70 = -> function_names.has 'zzz_test'                                 ), true
      @eq ( Ωbbdbr__71 = -> function_names.has 'regexp'                                   ), true
      @eq ( Ωbbdbr__72 = -> function_names.has 'fn_a'                                     ), true
      @eq ( Ωbbdbr__73 = -> function_names.has 'fn_b'                                     ), false
      #.....................................................................................................
      @eq ( Ωbbdbr__74 = -> table_names.has 'table_a'                                     ), true
      @eq ( Ωbbdbr__75 = -> table_names.has 'table_b'                                     ), false
      @eq ( Ωbbdbr__76 = -> view_names.has 'std_tables'                                   ), true
      @eq ( Ωbbdbr__77 = -> view_names.has 'std_views'                                    ), true
      @eq ( Ωbbdbr__78 = -> view_names.has 'std_relations'                                ), true
      @eq ( Ωbbdbr__79 = -> view_names.has 'view_a'                                       ), true
      @eq ( Ωbbdbr__80 = -> view_names.has 'view_b'                                       ), false
      ;null
    #.......................................................................................................
    do =>
      dba = new B { rebuild: true, }
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
      @eq ( Ωbbdbr__86 = -> dba.statements.select_b           instanceof  statement_class ), true
      #.....................................................................................................
      @eq ( Ωbbdbr__87 = -> function_names.has 'zzz_test'                                 ), true
      @eq ( Ωbbdbr__88 = -> function_names.has 'regexp'                                   ), true
      @eq ( Ωbbdbr__89 = -> function_names.has 'fn_a'                                     ), true
      @eq ( Ωbbdbr__90 = -> function_names.has 'fn_b'                                     ), true
      #.....................................................................................................
      @eq ( Ωbbdbr__91 = -> table_names.has 'table_a'                                     ), true
      @eq ( Ωbbdbr__92 = -> table_names.has 'table_b'                                     ), true
      @eq ( Ωbbdbr__93 = -> view_names.has 'std_tables'                                   ), true
      @eq ( Ωbbdbr__94 = -> view_names.has 'std_views'                                    ), true
      @eq ( Ωbbdbr__95 = -> view_names.has 'std_relations'                                ), true
      @eq ( Ωbbdbr__96 = -> view_names.has 'view_a'                                       ), true
      @eq ( Ωbbdbr__97 = -> view_names.has 'view_b'                                       ), true
      ;null
    #.......................................................................................................
    do =>
      @throws ( Ωbbdbr__98 = -> new C_duplicate_function  { rebuild: true, } ), /a UDF or built-in function named 'fn_b' has already been declared/
      @throws ( Ωbbdbr__99 = -> new C_duplicate_statement { rebuild: true, } ), /statement 'select_b' is already declared/
      @throws ( Ωbbdbr_100 = -> new C_duplicate_table     { rebuild: true, } ), /table table_b already exists/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  sample_db: ->
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
      store     = Dbric_store.rebuild db_path
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
      @eq ( Ωbbdbr_101 = -> cast_row rows.next().value  ), { facet_key: 'false', facet_value: false, _v: 'false' }
      @eq ( Ωbbdbr_102 = -> cast_row rows.next().value  ), { facet_key: 'one', facet_value: 1, _v: 1 }
      @eq ( Ωbbdbr_103 = -> cast_row rows.next().value  ), { facet_key: 'three', facet_value: 'iii', _v: '"iii"' }
      @eq ( Ωbbdbr_104 = -> cast_row rows.next().value  ), { facet_key: 'true', facet_value: true, _v: 'true' }
      @eq ( Ωbbdbr_105 = -> cast_row rows.next().value  ), { facet_key: 'two', facet_value: 2, _v: 2 }
      @eq ( Ωbbdbr_106 = -> rows.next().done            ), true
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  sample_db_with_bsql: ->
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
      store     = Dbric_store.rebuild ':memory:'
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
      @eq ( Ωbbdbr_107 = -> cast_row rows.next().value ), { facet_key: 'false', facet_value: false, _v: 'false' }
      @eq ( Ωbbdbr_108 = -> cast_row rows.next().value ), { facet_key: 'one', facet_value: 1, _v: 1 }
      @eq ( Ωbbdbr_109 = -> cast_row rows.next().value ), { facet_key: 'three', facet_value: 'iii', _v: '"iii"' }
      @eq ( Ωbbdbr_110 = -> cast_row rows.next().value ), { facet_key: 'true', facet_value: true, _v: 'true' }
      @eq ( Ωbbdbr_111 = -> cast_row rows.next().value ), { facet_key: 'two', facet_value: 2, _v: 2 }
      @eq ( Ωbbdbr_112 = -> cast_row rows.next().value ), undefined
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  udf_functions_with_nsql: ->
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
      @functions:
        square:
          deterministic:  true
          varargs:        false
          value:           ( n ) -> n ** 2
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      squares   = Dbric_squares.rebuild db_path
      for n in [ 0 ... 10 ]
        squares.statements.insert_number.run { n, }
      #.....................................................................................................
      # echo 'Ωbbdbr_113', row for row from squares.statements.select_from_squares.iterate()
      rows = squares.statements.select_from_squares.iterate()
      @eq ( Ωbbdbr_114 = -> rows.next().value ), { n: 0, square: 0 }
      @eq ( Ωbbdbr_115 = -> rows.next().value ), { n: 1, square: 1 }
      @eq ( Ωbbdbr_116 = -> rows.next().value ), { n: 2, square: 4 }
      @eq ( Ωbbdbr_117 = -> rows.next().value ), { n: 3, square: 9 }
      @eq ( Ωbbdbr_118 = -> rows.next().value ), { n: 4, square: 16 }
      @eq ( Ωbbdbr_119 = -> rows.next().value ), { n: 5, square: 25 }
      @eq ( Ωbbdbr_120 = -> rows.next().value ), { n: 6, square: 36 }
      @eq ( Ωbbdbr_121 = -> rows.next().value ), { n: 7, square: 49 }
      @eq ( Ωbbdbr_122 = -> rows.next().value ), { n: 8, square: 64 }
      @eq ( Ωbbdbr_123 = -> rows.next().value ), { n: 9, square: 81 }
      @eq ( Ωbbdbr_124 = -> rows.next().done  ), true
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  udf_aggregates_with_nsql: ->
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
      @functions:
        square:
          deterministic:  true
          varargs:        false
          value:           ( n ) -> n ** 2
      @aggregate_functions:
        product:
          start:          -> 1 ### NOTE can use `null` for bSQL, but nSQL needs `1` ###
          step:           product = ( total, element ) ->
            # debug 'Ωbbdbr_125', { total, element, }
            return ( total ? 1 ) * element
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac-udf_aggregates_with_nsql.sqlite'
      squares   = Dbric_squares.rebuild db_path
      for n in [ 0 ... 10 ]
        squares.statements.insert_number.run { n, }
      #.....................................................................................................
      # echo 'Ωbbdbr_126', row for row from squares.statements.select_from_squares.iterate { start: 1, stop: 5, }
      rows = squares.statements.select_from_squares.iterate { start: 1, stop: 5, }
      @eq ( Ωbbdbr_127 = -> rows.next().value ), { n: 1, square: 1, p_n: 120, p_square: 14400 }
      @eq ( Ωbbdbr_128 = -> rows.next().done  ), true
      #.....................................................................................................
      # echo 'Ωbbdbr_129', row for row from squares.statements.select_from_squares.iterate()
      @throws ( Ωbbdbr_130 = -> squares.statements.select_from_squares.iterate() ), /missing named parameters/i
      # @eq ( Ωbbdbr_131 = -> rows.next().value ), { n: null, square: null, p_n: 1, p_square: 1 }
      # @eq ( Ωbbdbr_132 = -> rows.next().value ), null
      #.....................................................................................................
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  udf_functions_with_bsql: ->
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
      @functions:
        square:
          deterministic:  true
          varargs:        false
          value:           ( n ) -> n ** 2
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      squares   = Dbric_squares.rebuild db_path
      for n in [ 0 ... 10 ]
        squares.statements.insert_number.run { n, }
      #.....................................................................................................
      # echo row for row from squares.statements.select_from_squares.iterate()
      rows = squares.statements.select_from_squares.iterate()
      @eq ( Ωbbdbr_133 = -> rows.next().value ), { n: 0, square: 0 }
      @eq ( Ωbbdbr_134 = -> rows.next().value ), { n: 1, square: 1 }
      @eq ( Ωbbdbr_135 = -> rows.next().value ), { n: 2, square: 4 }
      @eq ( Ωbbdbr_136 = -> rows.next().value ), { n: 3, square: 9 }
      @eq ( Ωbbdbr_137 = -> rows.next().value ), { n: 4, square: 16 }
      @eq ( Ωbbdbr_138 = -> rows.next().value ), { n: 5, square: 25 }
      @eq ( Ωbbdbr_139 = -> rows.next().value ), { n: 6, square: 36 }
      @eq ( Ωbbdbr_140 = -> rows.next().value ), { n: 7, square: 49 }
      @eq ( Ωbbdbr_141 = -> rows.next().value ), { n: 8, square: 64 }
      @eq ( Ωbbdbr_142 = -> rows.next().value ), { n: 9, square: 81 }
      @eq ( Ωbbdbr_143 = -> rows.next().value ), undefined
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  udf_aggregates_with_bsql: ->
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
      @functions:
        square:
          deterministic:  true
          varargs:        false
          value:           square = ( n ) -> n ** 2
      @aggregate_functions:
        product:
          start:          -> null
          step:           product = ( total, element ) ->
            # debug 'Ωbbdbr_144', { total, element, }
            return ( total ? 1 ) * element
    #=======================================================================================================
    do =>
      squares   = Dbric_squares.rebuild()
      for n in [ 0 ... 10 ]
        squares.statements.insert_number.run { n, }
      #.....................................................................................................
      # echo 'Ωbbdbr_145', row for row from squares.statements.select_from_squares.iterate { start: 2, stop: 3, }
      rows = squares.statements.select_from_squares.iterate { start: 2, stop: 3, }
      @eq ( Ωbbdbr_146 = -> rows.next().value ), { n: 2, square: 4, p_n: 6, p_square: 36 }
      @eq ( Ωbbdbr_147 = -> rows.next().value ), undefined
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  udf_table_function_with_bsql: ->
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
      @table_functions:
        re_matches:
          columns:      [ 'match', 'capture', ]
          parameters:   [ 'text', 'pattern', ]
          rows: ( text, pattern ) ->
            regex = new RegExp pattern, 'g'
            for match from text.matchAll regex
              yield [ match[ 0 ], match[ 1 ], ]
            return null
    #=======================================================================================================
    do =>
      phrases   = Dbric_phrases.rebuild()
      for phrase in [ 'eleven', 'five', 'nine', 'one', 'one point five', 'seven', 'three point one' ]
        phrases.statements.insert_phrase.run { phrase, }
      #.....................................................................................................
      # echo 'Ωbbdbr_148', row for row from phrases.statements.select_from_phrases.iterate { matcher: '^.*([aeiou].e).*$', }
      # echo()
      #.....................................................................................................
      # echo 'Ωbbdbr_149', row for row from phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
      rows = phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
      @eq ( Ωbbdbr_150 = -> rows.next().value ), { phrase: 'eleven', match: 'le', capture: 'le' }
      @eq ( Ωbbdbr_151 = -> rows.next().value ), { phrase: 'eleven', match: 've', capture: 've' }
      @eq ( Ωbbdbr_152 = -> rows.next().value ), { phrase: 'five', match: 'fi', capture: 'fi' }
      @eq ( Ωbbdbr_153 = -> rows.next().value ), { phrase: 'nine', match: 'ni', capture: 'ni' }
      @eq ( Ωbbdbr_154 = -> rows.next().value ), { phrase: 'one', match: 'o', capture: 'o' }
      @eq ( Ωbbdbr_155 = -> rows.next().value ), { phrase: 'one point five', match: 'o', capture: 'o' }
      @eq ( Ωbbdbr_156 = -> rows.next().value ), { phrase: 'one point five', match: 'poi', capture: 'poi' }
      @eq ( Ωbbdbr_157 = -> rows.next().value ), { phrase: 'one point five', match: 'fi', capture: 'fi' }
      @eq ( Ωbbdbr_158 = -> rows.next().value ), { phrase: 'seven', match: 'se', capture: 'se' }
      @eq ( Ωbbdbr_159 = -> rows.next().value ), { phrase: 'seven', match: 've', capture: 've' }
      @eq ( Ωbbdbr_160 = -> rows.next().value ), { phrase: 'three point one', match: 'poi', capture: 'poi' }
      @eq ( Ωbbdbr_161 = -> rows.next().value ), { phrase: 'three point one', match: ' o', capture: ' o' }
      @eq ( Ωbbdbr_162 = -> rows.next().value ), undefined
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  file_mirror_as_table_function: ->
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
      @table_functions:
        file_lines:
          columns:      [ 'line_nr', 'line', ]
          parameters:   [ 'path', ]
          rows: ( path ) ->
            for { lnr: line_nr, line, eol, } from GUY.fs.walk_lines_with_positions path
              yield { line_nr, line, }
            return null
    #=======================================================================================================
    do =>
      phrases   = Dbric_phrases.rebuild()
      @eq ( Ωbbdbr_163 = -> ( phrases.prepare SQL"""pragma foreign_keys""" ).get() ), { foreign_keys: 1,      }
      @eq ( Ωbbdbr_164 = -> ( phrases.prepare SQL"""pragma journal_mode""" ).get() ), { journal_mode: 'memory',  }
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
      # echo 'Ωbbdbr_165', row for row from phrases.statements.select_from_datasources.iterate()
      # echo()
      # #...................................................................................................
      # echo 'Ωbbdbr_166', row for row from phrases.statements.select_from_mirror.iterate()
      # echo()
      #.....................................................................................................
      rows = phrases.statements.select_from_mirror.get()
      for { dskey, line_nr, line, } in phrases
        keywords = line.split /(?:\p{Z}+)|((?:\p{L}+)|(?:\p{N}+)|(?:\p{S}+))/v
        # debug 'Ωbbdbr_167', line_nr, rpr keywords
        for keyword in keywords
          continue unless keyword?
          continue if keyword is ''
          phrases.statements.insert_keyword.run { dskey, line_nr, keyword, }
      # #...................................................................................................
      # echo 'Ωbbdbr_168', row for row from phrases.statements.select_from_keywords.iterate()
      # echo()
      #.....................................................................................................
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  file_mirror_with_integrated_inserts: ->
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
      @table_functions:
        split_words:
          columns:        [ 'keyword', ]
          parameters:     [ 'line', ]
          rows: ( line ) ->
            keywords = line.split /(?:\p{Z}+)|((?:\p{L}+)|(?:\p{N}+)|(?:\p{S}+))/v
            # debug 'Ωbbdbr_169', line_nr, rpr keywords
            for keyword in keywords
              continue unless keyword?
              continue if keyword is ''
              yield { keyword, }
            ;null
        #...................................................................................................
        file_lines:
          columns:      [ 'line_nr', 'line', ]
          parameters:   [ 'path', ]
          rows: ( path ) ->
            for { lnr: line_nr, line, eol, } from GUY.fs.walk_lines_with_positions path
              yield { line_nr, line, }
            ;null
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      phrases   = Dbric_phrases.rebuild db_path
      # debug 'Ωbbdbr_170', phrases.teardown()
      # debug 'Ωbbdbr_171', phrases.rebuild()
      @eq ( Ωbbdbr_172 = -> ( phrases.prepare SQL"""pragma foreign_keys""" ).get() ), { foreign_keys: 1,      }
      @eq ( Ωbbdbr_173 = -> ( phrases.prepare SQL"""pragma journal_mode""" ).get() ), { journal_mode: 'wal',  }
      #.....................................................................................................
      do =>
        dskey = 'humdum'
        path  = PATH.resolve __dirname, '../../../assets/bricabrac/humpty-dumpty.md'
        phrases.statements.insert_datasource.run { dskey, path }
      #.....................................................................................................
      phrases.statements.populate_keywords.run()
      #.....................................................................................................
      # echo 'Ωbbdbr_174', row for row from phrases.statements.locations_from_keyword.iterate { keyword: 'thought', }
      # echo()
      rows = phrases.statements.locations_from_keyword.iterate { keyword: 'thought', }
      @eq ( Ωbbdbr_175 = -> rows.next().value ), { dskey: 'humdum', line_nr: 15, keyword: 'thought' }
      @eq ( Ωbbdbr_176 = -> rows.next().value ), { dskey: 'humdum', line_nr: 34, keyword: 'thought' }
      @eq ( Ωbbdbr_177 = -> rows.next().value ), undefined
      #.....................................................................................................
      # echo 'Ωbbdbr_178', row for row from phrases.statements.locations_from_keyword.iterate { keyword: 'she', }
      # echo()
      rows = phrases.statements.locations_from_keyword.iterate { keyword: 'she', }
      @eq ( Ωbbdbr_179 = -> rows.next().value ), { dskey: 'humdum', line_nr: 2, keyword: 'she' }
      @eq ( Ωbbdbr_180 = -> rows.next().value ), { dskey: 'humdum', line_nr: 3, keyword: 'she' }
      @eq ( Ωbbdbr_181 = -> rows.next().value ), { dskey: 'humdum', line_nr: 4, keyword: 'she' }
      @eq ( Ωbbdbr_182 = -> rows.next().value ), { dskey: 'humdum', line_nr: 5, keyword: 'she' }
      @eq ( Ωbbdbr_183 = -> rows.next().value ), { dskey: 'humdum', line_nr: 15, keyword: 'she' }
      @eq ( Ωbbdbr_184 = -> rows.next().value ), { dskey: 'humdum', line_nr: 17, keyword: 'she' }
      @eq ( Ωbbdbr_185 = -> rows.next().value ), { dskey: 'humdum', line_nr: 18, keyword: 'she' }
      @eq ( Ωbbdbr_186 = -> rows.next().value ), { dskey: 'humdum', line_nr: 26, keyword: 'she' }
      @eq ( Ωbbdbr_187 = -> rows.next().value ), { dskey: 'humdum', line_nr: 34, keyword: 'she' }
      @eq ( Ωbbdbr_188 = -> rows.next().value ), { dskey: 'humdum', line_nr: 36, keyword: 'she' }
      @eq ( Ωbbdbr_189 = -> rows.next().value ), undefined
      #.....................................................................................................
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  dbric_std_variables_and_sequences: ->
    { lets,
      freeze,                   } = SFMODULES.require_letsfreezethat_infra().simple
    cfg_do_show_variables         = false
    #=======================================================================================================
    db = Dbric_std.rebuild ':memory:'
    #=======================================================================================================
    @throws ( Ωbbdbr_190 = -> db.std_with_variables -> db.std_with_variables -> null  ), /illegal to nest `std_with_variables\(\)` contexts/
    @throws ( Ωbbdbr_191 = -> db.std_set_variable 'myname', 'myvalue'                 ), /illegal to set variable/
    # @throws ( Ωbbdbr_192 = -> db.std_get_variable 'myname'                            ), /illegal to get variable/
    @throws ( Ωbbdbr_193 = -> db.std_get_variable 'myname'                            ), /unknown variable/
    #=======================================================================================================
    variables = (db._show_variables cfg_do_show_variables )
    #.......................................................................................................
    db.std_with_variables =>
      @throws ( Ωbbdbr_194 = -> db.std_get_variable 'myname' ), /unknown variable/
      @eq ( Ωbbdbr_195 = -> (db._show_variables cfg_do_show_variables ) ), { 'seq:global:rowid': { sv: 0, sd: 1, cv: 0, cd: 1, tv: undefined, gv: 0 } }
      ### TAINT use API ###
      db.state.std_variables = lets db.state.std_variables, ( d ) ->
        d[ 'seq:app:counter' ] = { name: 'seq:app:counter', value: 7, delta: +3, }
      @eq ( Ωbbdbr_196 = -> (db._show_variables cfg_do_show_variables ) ), { 'seq:app:counter': { sv: undefined, sd: undefined, cv: 7, cd: 3, tv: undefined, gv: 7 }, 'seq:global:rowid': { sv: 0, sd: 1, cv: 0, cd: 1, tv: undefined, gv: 0 } }
      @eq ( Ωbbdbr_197 = -> db.std_get_next_in_sequence 'seq:app:counter' ), 10
      @eq ( Ωbbdbr_198 = -> db.std_get_next_in_sequence 'seq:app:counter' ), 13
      db.std_set_variable 'fuzz', 11.5
      db.std_set_variable 'name', 'Bob'
      @eq ( Ωbbdbr_199 = -> db.std_get_variable 'fuzz' ), 11.5
      @eq ( Ωbbdbr_200 = -> db.std_get_variable 'name' ), 'Bob'
      @eq ( Ωbbdbr_201 = -> (db._show_variables cfg_do_show_variables ) ), { fuzz: { sv: undefined, sd: undefined, cv: 11.5, cd: null, tv: undefined, gv: 11.5, }, name: { sv: undefined, sd: undefined, cv: 'Bob', cd: null, tv: undefined, gv: 'Bob' }, 'seq:app:counter': { sv: undefined, sd: undefined, cv: 13, cd: 3, tv: undefined, gv: 13 }, 'seq:global:rowid': { sv: 0, sd: 1, cv: 0, cd: 1, tv: undefined, gv: 0 } }
      ;null
    #.......................................................................................................
    db.std_with_variables { name: 'Alice', job: 'engineer', }, =>
      @eq ( Ωbbdbr_202 = -> db.std_get_variable 'name' ), 'Alice'
      # debug 'Ωbbdbr_203', { name, job, }
      @eq ( Ωbbdbr_204 = -> (db._show_variables cfg_do_show_variables ) ), { fuzz: { sv: 11.5, sd: null, cv: 11.5, cd: null, tv: undefined, gv: 11.5 }, job: { sv: undefined, sd: undefined, cv: undefined, cd: undefined, tv: 'engineer', gv: 'engineer' }, name: { sv: '"Bob"', sd: null, cv: 'Bob', cd: null, tv: 'Alice', gv: 'Alice' }, 'seq:app:counter': { sv: 13, sd: 3, cv: 13, cd: 3, tv: undefined, gv: 13 }, 'seq:global:rowid': { sv: 0, sd: 1, cv: 0, cd: 1, tv: undefined, gv: 0 } }
      ;null
    #.......................................................................................................
    @eq ( Ωbbdbr_205 = -> (db._show_variables cfg_do_show_variables ) ), { fuzz: { sv: 11.5, sd: null, cv: 11.5, cd: null, tv: undefined, gv: 11.5 }, name: { sv: '"Bob"', sd: null, cv: 'Bob', cd: null, tv: undefined, gv: 'Bob' }, 'seq:app:counter': { sv: 13, sd: 3, cv: 13, cd: 3, tv: undefined, gv: 13 }, 'seq:global:rowid': { sv: 0, sd: 1, cv: 0, cd: 1, tv: undefined, gv: 0 } }
    db.std_with_variables =>
      @eq ( Ωbbdbr_206 = -> (db._show_variables cfg_do_show_variables ) ), { fuzz: { sv: 11.5, sd: null, cv: 11.5, cd: null, tv: undefined, gv: 11.5 }, name: { sv: '"Bob"', sd: null, cv: 'Bob', cd: null, tv: undefined, gv: 'Bob' }, 'seq:app:counter': { sv: 13, sd: 3, cv: 13, cd: 3, tv: undefined, gv: 13 }, 'seq:global:rowid': { sv: 0, sd: 1, cv: 0, cd: 1, tv: undefined, gv: 0 } }
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
        constraint "Ωconstraint_207" check ( length( letter ) = 1 )
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
      # info 'Ωbbdbr_208', row for row from db.walk SQL"select * from letters;"
      rows = db.walk SQL"select * from letters order by letter;"
      @eq ( Ωbbdbr_209 = -> rows.next().value ), { rowid: 't:letters:R=1', letter: 'a', }
      @eq ( Ωbbdbr_210 = -> rows.next().value ), { rowid: 't:letters:R=2', letter: 'z', }
      @eq ( Ωbbdbr_211 = -> rows.next().done ), true
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
      # info 'Ωbbdbr_212', row for row from db.walk SQL"select * from numbers;"
      rows = db.walk SQL"select * from numbers order by rowid;"
      @eq ( Ωbbdbr_213 = -> rows.next().value ), { rowid: 't:numbers:R=1', number: 'uno', }
      @eq ( Ωbbdbr_214 = -> rows.next().value ), { rowid: 't:numbers:R=2', number: 'due', }
      @eq ( Ωbbdbr_215 = -> rows.next().done ), true
      ;null
    #.......................................................................................................
    do =>
      ### NOTE Model that shows how to build a parametrized view: ###
      #.......................................................................................................
      ### repeat earlier test to ensure we know what's there: ###
      rows = db.walk SQL"select * from letters order by letter;"
      @eq ( Ωbbdbr_216 = -> rows.next().value ), { rowid: 't:letters:R=1', letter: 'a', }
      @eq ( Ωbbdbr_217 = -> rows.next().value ), { rowid: 't:letters:R=2', letter: 'z', }
      @eq ( Ωbbdbr_218 = -> rows.next().done ), true
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
        @eq ( Ωbbdbr_219 = -> result                      ), 'g,h,i,j,k,l,m'
        @eq ( Ωbbdbr_220 = -> variables.first_letter?.gv  ), 'g'
        @eq ( Ωbbdbr_221 = -> variables.last_letter?.gv   ), 'm'
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
        constraint "Ωconstraint_222" check ( rowid regexp 't:wrd:R=\\d+' ) );"""
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
    @eq ( Ωbbdbr_223 = -> variables[ 'seq:prfx_words_rowid' ]?.gv  ), 700
    # echo 'Ωbbdbr_224', row for row from db.walk SQL"select * from prfx_words order by de;"
    rows = db.walk SQL"select * from prfx_words order by de;"
    @eq ( Ωbbdbr_225 = -> rows.next().value ), { rowid: 't:wrd:R=600', en: 'call', de: 'Anruf' }
    @eq ( Ωbbdbr_226 = -> rows.next().value ), { rowid: 't:wrd:R=700', en: 'book', de: 'Buch' }
    @eq ( Ωbbdbr_227 = -> rows.next().value ), { rowid: 't:wrd:R=200', en: 'dog', de: 'Hund' }
    @eq ( Ωbbdbr_228 = -> rows.next().value ), { rowid: 't:wrd:R=300', en: 'cat', de: 'Katze' }
    @eq ( Ωbbdbr_229 = -> rows.next().value ), { rowid: 't:wrd:R=400', en: 'word', de: 'Wort' }
    @eq ( Ωbbdbr_230 = -> rows.next().value ), { rowid: 't:wrd:R=500', en: 'call', de: 'rufen' }
    @eq ( Ωbbdbr_231 = -> rows.next().done ), true
    ;null

  #---------------------------------------------------------------------------------------------------------
  dbric_strict_mode: ->
    { lets,
      freeze,                   } = SFMODULES.require_letsfreezethat_infra().simple
    #.......................................................................................................
    do =>
      db = Dbric.rebuild ':memory:'
      ( db.prepare SQL"pragma strict       = on;"    ).run()
      db.execute SQL"create table t ( f integer );"
      db.execute SQL"insert into t values ( 1234 );"
      db.execute SQL"insert into t values ( 12.34 );"
      db.execute SQL"insert into t values ( 'wat' );"
      # debug 'Ωbbdbr_232', ( row.f for row from db.walk SQL"select f from t;" )
      ;null
    #.......................................................................................................
    do =>
      db = Dbric.rebuild ':memory:'
      ( db.prepare SQL"pragma strict       = on;"    ).run()
      @throws ( Ωbbdbr_233 = -> db.execute SQL"create table t ( f integer, j json ) strict;" ), /unknown datatype for t\.j/
      db.execute SQL"create table t ( f integer, j blob ) strict;"
      db.execute SQL"insert into t ( f ) values ( 1234 );"
      @eq ( Ωbbdbr_234 = -> ( db.get_first SQL"select typeof( 12    ) as type;" ).type ), 'integer'
      @eq ( Ωbbdbr_235 = -> ( db.get_first SQL"select typeof( 12.34 ) as type;" ).type ), 'real'
      @eq ( Ωbbdbr_236 = -> ( db.get_first SQL"select typeof( 'wat' ) as type;" ).type ), 'text'
      @throws ( Ωbbdbr_237 = -> db.execute SQL"insert into t ( f ) values ( 12.34 );" ), /cannot store REAL value in INTEGER column/
      @throws ( Ωbbdbr_238 = -> db.execute SQL"insert into t ( f ) values ( 'wat' );" ), /cannot store TEXT value in INTEGER column/
      # debug 'Ωbbdbr_239', ( row.f for row from db.walk SQL"select f from t;" )
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  dbric_dynamic_build_properties: ->
    #.......................................................................................................
    do =>
      class Db_1 extends Dbric_std
        @prefix: 'wrd'
        @build: [
          -> SQL"""create table #{IDN "#{@cfg.prefix}_words"} ( t text );"""
          -> SQL"""insert into #{IDN "#{@cfg.prefix}_words"} ( t ) values ( '水 (みず)' );"""
          -> SQL"""insert into #{IDN "#{@cfg.prefix}_words"} ( t ) values ( '食べ物 (たべもの)' );"""
          ]
        @statements:
          select_words: -> SQL"""select * from #{IDN "#{@cfg.prefix}_words"}"""
      db = Db_1.rebuild()
      relation_names = new Set ( row.name for row from db.walk SQL"select * from std_relations;" )
      debug 'Ωbbdbr_240', relation_names
      debug 'Ωbbdbr_241', db.constructor.prefix
      debug 'Ωbbdbr_242', db.cfg
      @eq ( Ωbbdbr_243 = -> relation_names.has 'wrd_words'      ), true
      rows = db.walk SQL"""select * from #{IDN "#{Db_1.prefix}_words"};"""
      @eq ( Ωbbdbr_244 = -> rows.next().value.t                 ), '水 (みず)'
      @eq ( Ωbbdbr_245 = -> rows.next().value.t                 ), '食べ物 (たべもの)'
      @eq ( Ωbbdbr_246 = -> rows.next().done                    ), true
      rows = db.walk db.statements.select_words
      @eq ( Ωbbdbr_247 = -> rows.next().value.t                 ), '水 (みず)'
      @eq ( Ωbbdbr_248 = -> rows.next().value.t                 ), '食べ物 (たべもの)'
      @eq ( Ωbbdbr_249 = -> rows.next().done                    ), true
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  dbric_plugins_acquisition: ->
    { type_of,                  } = ( require '../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics' ).require_type_of()
    { get_all_in_prototype_chain,
      get_prototype_chain,      } = require '../../../apps/bricabrac-sfmodules/lib/prototype-tools'
    #-------------------------------------------------------------------------------------------------------
    nbr_number_plugin =
      name:   'nbr_number_plugin' ### NOTE informative, not enforced ###
      prefix: 'nbr'               ### NOTE informative, not enforced ###
      exports:
        build: [
          SQL"create table nbr_numbers ( number integer );"
          ]
        statements:
          nbr_insert_number:          SQL"insert into nbr_numbers values ( $number );"
          nbr_select_numbers:         SQL"select * from nbr_numbers order by number;"
          nbr_select_square_numbers:  SQL"select nbr_square( number ) from nbr_numbers order by number;"
        functions:
          nbr_square:
            value: ( number ) -> @nbr_get_square number
        methods:
          nbr_get_square: ( number ) -> number ** 2
    #-------------------------------------------------------------------------------------------------------
    other_plugin =
      prefix: 'other'
      exports:
        statements:
          other_select_wat: SQL"select 1 as wat;"
    #-------------------------------------------------------------------------------------------------------
    text_plugin =
      name:   'text-plugin'
      prefix: 'txt'
      exports:
        functions:
          txt_upper:
            value:  ( text ) -> text.toUpperCase()
        statements:
          txt_select_one: SQL"select 1 as one;"
    #=======================================================================================================
    class Db_1 extends Dbric_std
      @prefix:  'db1'
      @plugins: [
        other_plugin
        'prototypes'
        nbr_number_plugin
        'me'
        text_plugin
        ]
      @exports: {}
      @build: [
        SQL"create table x ( id integer );"
        ]
      @statements:
        db1_select_x: SQL"select * from x;"
      @functions:
        db1_cube:
          value: ( x ) -> x ** 3
    #=======================================================================================================
    db = Db_1.rebuild()
    #=======================================================================================================
    result  = []
    for { type, contributor, } in db._get_acquisition_chain()
      result.push "[#{type}]#{contributor.name ? '(anonymous)'}"
    #.......................................................................................................
    @eq ( Ωbbdbr_250 = -> result ), [
      '[plugin](anonymous)'
      '[prototype]Dbric_std_base'
      '[prototype]Dbric_std_variables'
      '[prototype]Dbric_std'
      '[plugin]nbr_number_plugin'
      '[prototype]Db_1'
      '[plugin]text-plugin' ]
    for { type, contributor, } in db._get_acquisition_chain()
      if type is 'plugin'
        info 'Ωbbdbr_251', "[#{type}]#{contributor.name ? '(anonymous)'}", Object.keys contributor.exports
      else
        ( if ( contributor is db.constructor ) then help else urge ) 'Ωbbdbr_252', "[#{type}]#{contributor.name ? '(anonymous)'}"
    #=======================================================================================================
    contributions = db._collect_contributor_properties()
    @eq ( Ωbbdbr_253 = -> ( Object.keys contributions ).sort() ), [
      'aggregate_functions'
      'build'
      'functions'
      'methods'
      'statements'
      'table_functions'
      'virtual_tables'
      'window_functions' ]
    debug 'Ωbbdbr_254', toggle 'build:               ', Object.keys contributions.build
    debug 'Ωbbdbr_255', toggle 'aggregate_functions: ', Object.keys contributions.aggregate_functions
    debug 'Ωbbdbr_256', toggle 'functions:           ', Object.keys contributions.functions
    debug 'Ωbbdbr_257', toggle 'methods:             ', Object.keys contributions.methods
    debug 'Ωbbdbr_258', toggle 'statements:          ', Object.keys contributions.statements
    debug 'Ωbbdbr_259', toggle 'table_functions:     ', Object.keys contributions.table_functions
    debug 'Ωbbdbr_260', toggle 'virtual_tables:      ', Object.keys contributions.virtual_tables
    debug 'Ωbbdbr_261', toggle 'window_functions:    ', Object.keys contributions.window_functions
    #-------------------------------------------------------------------------------------------------------
    @eq ( Ωbbdbr_262 = -> Object.keys contributions.functions ), [
      'regexp'
      'std_is_uc_normal'
      'std_normalize_text'
      'std_normalize_json_object'
      'std_get_next_in_sequence'
      'std_get_variable'
      'nbr_square'
      'db1_cube'
      'txt_upper' ]
    #-------------------------------------------------------------------------------------------------------
    @eq ( Ωbbdbr_263 = -> Object.keys contributions.statements ), [
      'other_select_wat'
      'std_get_schema'
      'std_get_tables'
      'std_get_views'
      'std_get_relations'
      'std_get_functions'
      'std_set_variable'
      'std_get_variables'
      'nbr_insert_number'
      'nbr_select_numbers'
      'nbr_select_square_numbers'
      'db1_select_x'
      'txt_select_one' ]
    #=======================================================================================================
    function_names  = new Set ( r.name for r from db.walk SQL"select name from std_functions;" )
    table_names     = new Set ( r.name for r from db.walk SQL"select name from std_tables;" )
    @eq ( Ωbbdbr_264 = -> Reflect.has db.statements,  'std_get_views'       ), true
    @eq ( Ωbbdbr_265 = -> Reflect.has db.statements,  'nbr_insert_number'   ), true
    @eq ( Ωbbdbr_266 = -> type_of db.nbr_get_square                         ), 'function'
    @eq ( Ωbbdbr_267 = -> db.nbr_get_square 10                              ), 100
    @eq ( Ωbbdbr_268 = -> function_names.has 'nbr_square'                   ), true
    @eq ( Ωbbdbr_269 = -> db.get_first SQL"select nbr_square( 11 ) as s;"   ), { s: 121, }
    @eq ( Ωbbdbr_270 = -> table_names.has 'nbr_numbers'                     ), true
    @eq ( Ωbbdbr_271 = -> table_names.has 'x'                               ), true
    #.......................................................................................................
    ;null

#===========================================================================================================
demo_using_methods_holder_to_enable_ersatz_super = ->
  #---------------------------------------------------------------------------------------------------------
  class A
    f: ( message ) -> help 'Ωbbdbr_320', rpr message
  #---------------------------------------------------------------------------------------------------------
  class B extends A
    _super: ( name, P... ) -> super[ name ] P...
  #---------------------------------------------------------------------------------------------------------
  ### NOTE akin to the `methods` property of plugin objects ###
  methods = {
    f: ( message ) -> @_super 'f', message; return 8
    }
  #---------------------------------------------------------------------------------------------------------
  ### NOTE we form a synthetic class to act as a 'holder' for our methods: ###
  class Methods_holder extends B
  instance = new Methods_holder()
  instance.f = methods.f
  #---------------------------------------------------------------------------------------------------------
  ### NOTE using the Ersatz Super: ###
  result = instance.f "my message" # prints `my message`
  info 'Ωbbdbr_321', { result, } # prints `{ result: 8, }`
  #---------------------------------------------------------------------------------------------------------
  ;null

#===========================================================================================================
if module is require.main then await do =>
  do_coverage = true
  do_coverage = false
  if do_coverage
    { Coverage_analyzer,          } = require '../../../apps/bricabrac-sfmodules/lib/coverage-analyzer'
    ca = new Coverage_analyzer()
    ca.wrap_class Dbric_std
  { wrap_methods_of_prototypes, } = require '../../../apps/bricabrac-sfmodules/lib/prototype-tools'
  # wrap_methods_of_prototypes Dbric_std, ({ fqname, callme, P, }) ->
  #   debug 'Ωbbdbr_322', fqname #, P
  #   return callme()
  # db = new Dbric_std ':memory:', { rebuild: true, }
  #---------------------------------------------------------------------------------------------------------
  guytest_cfg = { throw_on_error: false,  show_passes: true, report_checks: true, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
  ( new Test guytest_cfg ).test { dbric_hoard_plugin_model: tests.dbric_hoard_plugin_model, }
  # ( new Test guytest_cfg ).test { dbric_dynamic_build_properties: tests.dbric_dynamic_build_properties, }
  #---------------------------------------------------------------------------------------------------------
  if do_coverage
    warn 'Ωbbdbr_323', "not covered:", reverse name for name in ca.unused_names if ca.unused_names.length > 0
    # help 'Ωbbdbr_324', ca.used_names
    # urge 'Ωbbdbr_325', count, names for count, names of ca.names_by_counts
  #=========================================================================================================
  ;null
