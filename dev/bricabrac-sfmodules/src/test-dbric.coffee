

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
      db_path = PATH.join folder_path, 'bricabrac.sqlite'
      #.....................................................................................................
      do =>
        db = new Dbric_nonconform db_path
        @throws ( Ωbbdbr__11 = -> db.is_ready ), /1 out of 2 build statement\(s\) could not be parsed/
        @eq     ( Ωbbdbr__12 = -> db._get_objects_in_build_statements()?.error_count ), 1
        return null
      #.....................................................................................................
      do =>
        @throws ( Ωbbdbr__13 = -> Dbric_nonconform.open db_path ), /1 out of 2 build statement\(s\) could not be parsed/
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
    #.......................................................................................................
    temp.with_directory { keep: false, }, ({ path: folder_path, }) =>
      # folder_path = '/tmp/bricbrac-test' # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      db_path = PATH.join folder_path, 'bricabrac.sqlite'
      remove db_path
      help 'Ωbbdbr__14', { db_path, }
      #.....................................................................................................
      do =>
        db = new Dbric db_path
        @eq   ( Ωbbdbr__15 = -> db.is_ready ), true
        return null
      #.....................................................................................................
      do =>
        db = Dbric.open db_path
        @eq   ( Ωbbdbr__16 = -> db instanceof Dbric         ), true
        @eq   ( Ωbbdbr__17 = -> db._get_db_objects()        ), {}
        @eq   ( Ωbbdbr__18 = -> db.is_ready                 ), true
        @eq   ( Ωbbdbr__19 = -> db.build()                  ), 0
        return null
    #.......................................................................................................
    temp.with_directory { keep: false, }, ({ path: folder_path, }) =>
      # folder_path = '/tmp/bricbrac-test' # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      db_path = PATH.join folder_path, 'bricabrac.sqlite'
      remove db_path
      help 'Ωbbdbr__20', { db_path, }
      #.....................................................................................................
      do =>
        db = new Dbric db_path
        @eq   ( Ωbbdbr__21 = -> db.is_ready       ), true
        @eq   ( Ωbbdbr__22 = -> db.cfg.prefix     ), '(NOPREFIX)'
        @eq   ( Ωbbdbr__23 = -> db.prefix         ), ''
        @eq   ( Ωbbdbr__24 = -> db.full_prefix    ), ''
        return null
      #.....................................................................................................
      do =>
        db = new Dbric_std db_path
        @eq   ( Ωbbdbr__25 = -> db.is_ready       ), false
        @eq   ( Ωbbdbr__26 = -> db.cfg.prefix     ), 'std'
        @eq   ( Ωbbdbr__27 = -> db.prefix         ), 'std'
        @eq   ( Ωbbdbr__28 = -> db.full_prefix    ), 'std_'
        return null
      #.....................................................................................................
      do =>
        db = Dbric_std.open db_path
        @eq   ( Ωbbdbr__29 = -> db instanceof Dbric         ), true
        @eq   ( Ωbbdbr__30 = -> db instanceof Dbric_std     ), true
        @eq   ( Ωbbdbr__31 = -> db._get_db_objects()        ), {
          std_tables:     { name: 'std_tables',     type: 'view' },
          std_views:      { name: 'std_views',      type: 'view' },
          std_relations:  { name: 'std_relations',  type: 'view' } }
        @eq   ( Ωbbdbr__32 = -> db.is_ready                 ), true
        @eq   ( Ωbbdbr__33 = -> db.build()                  ), 0
        return null
      #.....................................................................................................
      do =>
        db = Dbric_std.open db_path
        @eq   ( Ωbbdbr__34 = -> db instanceof Dbric         ), true
        @eq   ( Ωbbdbr__35 = -> db instanceof Dbric_std     ), true
        @eq   ( Ωbbdbr__36 = -> db._get_db_objects()        ), {
          std_tables:     { name: 'std_tables',     type: 'view' },
          std_views:      { name: 'std_views',      type: 'view' },
          std_relations:  { name: 'std_relations',  type: 'view' } }
        @eq   ( Ωbbdbr__37 = -> db.is_ready                 ), true
        @eq   ( Ωbbdbr__38 = -> db.build()                  ), 0
        return null
      #.....................................................................................................
      do =>
        db = Dbric_std.open db_path
        ( db.prepare SQL"drop view std_tables;" ).run()
        @eq   ( Ωbbdbr__39 = -> db.is_ready                 ), false
        return null
      #.....................................................................................................
      do =>
        db = Dbric_std.open db_path
        @eq   ( Ωbbdbr__40 = -> db instanceof Dbric         ), true
        @eq   ( Ωbbdbr__41 = -> db instanceof Dbric_std     ), true
        @eq   ( Ωbbdbr__42 = -> db._get_db_objects()        ), {
          std_tables:     { name: 'std_tables',     type: 'view' },
          std_views:      { name: 'std_views',      type: 'view' },
          std_relations:  { name: 'std_relations',  type: 'view' } }
        @eq   ( Ωbbdbr__43 = -> db.is_ready                 ), true
        @eq   ( Ωbbdbr__44 = -> db.build()                  ), 0
        return null
      #.....................................................................................................
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  disallow_overwriting_properties_with_functions: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    # debug 'Ωbbdbr__45', new Dbric '/dev/shm/bricabrac.sqlite'
    do =>
      db        = ( new Dbric ':memory:' )
      db_proto  = Object.getPrototypeOf db
      debug 'Ωbbdbr__46', Object.getOwnPropertyDescriptor db_proto, 'is_ready'
      debug 'Ωbbdbr__47', Object.getOwnPropertyDescriptor db_proto, '_get_is_ready'
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
      @throws ( Ωbbdbr__48 = -> new Dbric_nonconform() ), /not allowed to override property 'is_ready'; use '_get_is_ready instead/
      ;null
    #-------------------------------------------------------------------------------------------------------
    do =>
      class Dbric_nonconform extends Dbric_Z
        prefix: ->
      @throws ( Ωbbdbr__49 = -> new Dbric_nonconform() ), /not allowed to override property 'prefix'; use '_get_prefix instead/
      ;null
    #-------------------------------------------------------------------------------------------------------
    do =>
      class Dbric_nonconform extends Dbric_Z
        full_prefix: ->
      @throws ( Ωbbdbr__50 = -> new Dbric_nonconform() ), /not allowed to override property 'full_prefix'; use '_get_full_prefix instead/
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  sample_db: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    # debug 'Ωbbdbr__51', new Dbric '/dev/shm/bricabrac.sqlite'
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
      store     = Dbric_store.open db_path
      # store.statements.store_create_tables.run()
      # for row from store.statements.get_schema.iterate()
      #   help 'Ωbbdbr__52', row
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
      @eq ( Ωbbdbr__53 = -> cast_row rows.next().value ), { facet_key: 'false', facet_value: false, _v: 'false' }
      @eq ( Ωbbdbr__54 = -> cast_row rows.next().value ), { facet_key: 'one', facet_value: 1, _v: 1 }
      @eq ( Ωbbdbr__55 = -> cast_row rows.next().value ), { facet_key: 'three', facet_value: 'iii', _v: '"iii"' }
      @eq ( Ωbbdbr__56 = -> cast_row rows.next().value ), { facet_key: 'true', facet_value: true, _v: 'true' }
      @eq ( Ωbbdbr__57 = -> cast_row rows.next().value ), { facet_key: 'two', facet_value: 2, _v: 2 }
      @eq ( Ωbbdbr__58 = -> cast_row rows.next().value ), null ### NOTE different from better-sqlite3 below ###
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
      store     = Dbric_store.open db_path
      debug 'Ωbbdbr__59', store
      @eq ( Ωbbdbr__60 = -> store.db instanceof Bsql3     ), true
      @eq ( Ωbbdbr__61 = -> store.db instanceof _Bsql3    ), true
      # store.statements.store_create_tables.run()
      # for row from store.statements.get_schema.iterate()
      #   help 'Ωbbdbr__62', row
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
      @eq ( Ωbbdbr__63 = -> cast_row rows.next().value ), { facet_key: 'false', facet_value: false, _v: 'false' }
      @eq ( Ωbbdbr__64 = -> cast_row rows.next().value ), { facet_key: 'one', facet_value: 1, _v: 1 }
      @eq ( Ωbbdbr__65 = -> cast_row rows.next().value ), { facet_key: 'three', facet_value: 'iii', _v: '"iii"' }
      @eq ( Ωbbdbr__66 = -> cast_row rows.next().value ), { facet_key: 'true', facet_value: true, _v: 'true' }
      @eq ( Ωbbdbr__67 = -> cast_row rows.next().value ), { facet_key: 'two', facet_value: 2, _v: 2 }
      @eq ( Ωbbdbr__68 = -> cast_row rows.next().value ), undefined
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
          call:           ( n ) -> n ** 2
        ;null
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      squares   = Dbric_squares.open db_path
      @eq ( Ωbbdbr__69 = -> squares.db instanceof Bsql3     ), false
      for n in [ 0 ... 10 ]
        squares.statements.insert_number.run { n, }
      #.....................................................................................................
      # echo row for row from squares.statements.select_from_squares.iterate()
      rows = squares.statements.select_from_squares.iterate()
      @eq ( Ωbbdbr__70 = -> rows.next().value ), { n: 0, square: 0 }
      @eq ( Ωbbdbr__71 = -> rows.next().value ), { n: 1, square: 1 }
      @eq ( Ωbbdbr__72 = -> rows.next().value ), { n: 2, square: 4 }
      @eq ( Ωbbdbr__73 = -> rows.next().value ), { n: 3, square: 9 }
      @eq ( Ωbbdbr__74 = -> rows.next().value ), { n: 4, square: 16 }
      @eq ( Ωbbdbr__75 = -> rows.next().value ), { n: 5, square: 25 }
      @eq ( Ωbbdbr__76 = -> rows.next().value ), { n: 6, square: 36 }
      @eq ( Ωbbdbr__77 = -> rows.next().value ), { n: 7, square: 49 }
      @eq ( Ωbbdbr__78 = -> rows.next().value ), { n: 8, square: 64 }
      @eq ( Ωbbdbr__79 = -> rows.next().value ), { n: 9, square: 81 }
      @eq ( Ωbbdbr__80 = -> rows.next().value ), null
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
          call:           ( n ) -> n ** 2
        @create_aggregate_function
          name:           'product'
          start:          -> 1 ### NOTE can use `null` for bSQL, but nSQL needs `1` ###
          step:           product = ( total, element ) ->
            debug 'Ωbbdbr__81', { total, element, }
            return ( total ? 1 ) * element
        ;null
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      squares   = Dbric_squares.open db_path
      @eq ( Ωbbdbr__82 = -> squares.db instanceof Bsql3     ), false
      for n in [ 0 ... 10 ]
        squares.statements.insert_number.run { n, }
      #.....................................................................................................
      echo row for row from squares.statements.select_from_squares.iterate { start: 1, stop: 5, }
      rows = squares.statements.select_from_squares.iterate { start: 1, stop: 5, }
      @eq ( Ωbbdbr__83 = -> rows.next().value ), { n: 1, square: 1, p_n: 120, p_square: 14400 }
      @eq ( Ωbbdbr__84 = -> rows.next().value ), null
      #.....................................................................................................
      echo row for row from squares.statements.select_from_squares.iterate()
      rows = squares.statements.select_from_squares.iterate()
      @eq ( Ωbbdbr__85 = -> rows.next().value ), { n: null, square: null, p_n: 1, p_square: 1 }
      @eq ( Ωbbdbr__86 = -> rows.next().value ), null
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
          call:           ( n ) -> n ** 2
        ;null
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      squares   = Dbric_squares.open db_path
      @eq ( Ωbbdbr__87 = -> squares.db instanceof Bsql3     ), true
      for n in [ 0 ... 10 ]
        squares.statements.insert_number.run { n, }
      #.....................................................................................................
      # echo row for row from squares.statements.select_from_squares.iterate()
      rows = squares.statements.select_from_squares.iterate()
      @eq ( Ωbbdbr__88 = -> rows.next().value ), { n: 0, square: 0 }
      @eq ( Ωbbdbr__89 = -> rows.next().value ), { n: 1, square: 1 }
      @eq ( Ωbbdbr__90 = -> rows.next().value ), { n: 2, square: 4 }
      @eq ( Ωbbdbr__91 = -> rows.next().value ), { n: 3, square: 9 }
      @eq ( Ωbbdbr__92 = -> rows.next().value ), { n: 4, square: 16 }
      @eq ( Ωbbdbr__93 = -> rows.next().value ), { n: 5, square: 25 }
      @eq ( Ωbbdbr__94 = -> rows.next().value ), { n: 6, square: 36 }
      @eq ( Ωbbdbr__95 = -> rows.next().value ), { n: 7, square: 49 }
      @eq ( Ωbbdbr__96 = -> rows.next().value ), { n: 8, square: 64 }
      @eq ( Ωbbdbr__97 = -> rows.next().value ), { n: 9, square: 81 }
      @eq ( Ωbbdbr__98 = -> rows.next().value ), undefined
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
          call:           square = ( n ) -> n ** 2
        @create_aggregate_function
          name:           'product'
          start:          -> null
          step:           product = ( total, element ) ->
            debug 'Ωbbdbr__99', { total, element, }
            return ( total ? 1 ) * element
        ;null
    #=======================================================================================================
    do =>
      db_path   = '/dev/shm/bricabrac.sqlite'
      squares   = Dbric_squares.open db_path
      @eq ( Ωbbdbr_100 = -> squares.db instanceof Bsql3     ), true
      for n in [ 0 ... 10 ]
        squares.statements.insert_number.run { n, }
      #.....................................................................................................
      echo row for row from squares.statements.select_from_squares.iterate { start: 2, stop: 3, }
      rows = squares.statements.select_from_squares.iterate { start: 2, stop: 3, }
      @eq ( Ωbbdbr_101 = -> rows.next().value ), { n: 2, square: 4, p_n: 6, p_square: 36 }
      @eq ( Ωbbdbr_102 = -> rows.next().value ), undefined
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
      phrases   = Dbric_phrases.open db_path
      @eq ( Ωbbdbr_103 = -> phrases.db instanceof Bsql3     ), true
      for phrase in [ 'eleven', 'five', 'nine', 'one', 'one point five', 'seven', 'three point one' ]
        phrases.statements.insert_phrase.run { phrase, }
      #.....................................................................................................
      # echo row for row from phrases.statements.select_from_phrases.iterate { matcher: '^.*([aeiou].e).*$', }
      # echo()
      #.....................................................................................................
      # echo row for row from phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
      rows = phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
      @eq ( Ωbbdbr_104 = -> rows.next().value ), { phrase: 'eleven', match: 'le', capture: 'le' }
      @eq ( Ωbbdbr_105 = -> rows.next().value ), { phrase: 'eleven', match: 've', capture: 've' }
      @eq ( Ωbbdbr_106 = -> rows.next().value ), { phrase: 'five', match: 'fi', capture: 'fi' }
      @eq ( Ωbbdbr_107 = -> rows.next().value ), { phrase: 'nine', match: 'ni', capture: 'ni' }
      @eq ( Ωbbdbr_108 = -> rows.next().value ), { phrase: 'one', match: 'o', capture: 'o' }
      @eq ( Ωbbdbr_109 = -> rows.next().value ), { phrase: 'one point five', match: 'o', capture: 'o' }
      @eq ( Ωbbdbr_110 = -> rows.next().value ), { phrase: 'one point five', match: 'poi', capture: 'poi' }
      @eq ( Ωbbdbr_111 = -> rows.next().value ), { phrase: 'one point five', match: 'fi', capture: 'fi' }
      @eq ( Ωbbdbr_112 = -> rows.next().value ), { phrase: 'seven', match: 'se', capture: 'se' }
      @eq ( Ωbbdbr_113 = -> rows.next().value ), { phrase: 'seven', match: 've', capture: 've' }
      @eq ( Ωbbdbr_114 = -> rows.next().value ), { phrase: 'three point one', match: 'poi', capture: 'poi' }
      @eq ( Ωbbdbr_115 = -> rows.next().value ), { phrase: 'three point one', match: ' o', capture: ' o' }
      @eq ( Ωbbdbr_116 = -> rows.next().value ), undefined
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
      phrases   = Dbric_phrases.open db_path
      @eq ( Ωbbdbr_117 = -> ( phrases.prepare SQL"""pragma foreign_keys""" ).get() ), { foreign_keys: 1,      }
      @eq ( Ωbbdbr_118 = -> ( phrases.prepare SQL"""pragma journal_mode""" ).get() ), { journal_mode: 'wal',  }
      @eq ( Ωbbdbr_119 = -> phrases.db instanceof Bsql3     ), true
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
        # debug 'Ωbbdbr_120', line_nr, rpr keywords
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
            # debug 'Ωbbdbr_121', line_nr, rpr keywords
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
      phrases   = Dbric_phrases.open db_path
      debug 'Ωbbdbr_122', phrases.teardown()
      debug 'Ωbbdbr_123', phrases.rebuild()
      @eq ( Ωbbdbr_124 = -> ( phrases.prepare SQL"""pragma foreign_keys""" ).get() ), { foreign_keys: 1,      }
      @eq ( Ωbbdbr_125 = -> ( phrases.prepare SQL"""pragma journal_mode""" ).get() ), { journal_mode: 'wal',  }
      @eq ( Ωbbdbr_126 = -> phrases.db instanceof Bsql3     ), true
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
      debug 'Ωbbdbr_127', phrases.statements.populate_keywords.run()
      #.....................................................................................................
      echo row for row from phrases.statements.select_from_keywords.iterate()
      echo()
      #.....................................................................................................
      ;null
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: true, report_checks: true, }
  # ( new Test guytest_cfg ).test { tests, }
  # # ( new Test guytest_cfg ).test { sample_db_with_bsql: tests.sample_db_with_bsql, }
  # ( new Test guytest_cfg ).test { udf_functions_with_nsql: tests.udf_functions_with_nsql, }
  # ( new Test guytest_cfg ).test { udf_functions_with_bsql: tests.udf_functions_with_bsql, }
  # ( new Test guytest_cfg ).test { udf_aggregates_with_bsql: tests.udf_aggregates_with_bsql, }
  # ( new Test guytest_cfg ).test { udf_aggregates_with_nsql: tests.udf_aggregates_with_nsql, }
  # ( new Test guytest_cfg ).test { udf_table_function_with_bsql: tests.udf_table_function_with_bsql, }
  # ( new Test guytest_cfg ).test { file_mirror_as_table_function: tests.file_mirror_as_table_function, }
  ( new Test guytest_cfg ).test { file_mirror_with_integrated_inserts: tests.file_mirror_with_integrated_inserts, }
