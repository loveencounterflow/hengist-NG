
###


## Applications

* **RegEx Builder** (example from [Rejigs blog post](https://medium.com/@omarzawahry/rejigs-making-regular-expressions-human-readable-1fad37cb3eae))

```java
var emailRegex =
    Rejigs.Create()
          .AtStart()
          .OneOrMore(r => r.AnyLetterOrDigit().Or().AnyOf("._%+-"))
          .Text("@")
          .OneOrMore(r => r.AnyLetterOrDigit().Or().AnyOf(".-"))
          .Text(".")
          .AnyLetterOrDigit().AtLeast(2)
          .AtEnd()
          .Build();
```

* **HTML/XML Builer**
* **SQL Builder**
* **CLI Coloring**
* syntax for a **Type Checker**

###

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
  whisper }               = GUY.trm.get_loggers 'bricabrac-single-file-modules'
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
        @throws ( Ωbbdbr__11 = -> db.is_ready ), /one or more build statements could not be parsed/
        @eq     ( Ωbbdbr__12 = -> db._get_objects_in_build_statements()?.error_count ), 1
        return null
      #.....................................................................................................
      do =>
        @throws ( Ωbbdbr__11 = -> Dbric_nonconform.open db_path ), /one or more build statements could not be parsed/
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
      folder_path = '/tmp/bricbrac-test' # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
        db = Dbric.open db_path
        @eq   ( Ωbbdbr__15 = -> db instanceof Dbric         ), true
        @eq   ( Ωbbdbr__16 = -> db._get_db_objects()        ), {}
        @eq   ( Ωbbdbr__17 = -> db.is_ready                 ), true
        @eq   ( Ωbbdbr__18 = -> db.build()                  ), 0
        return null
    #.......................................................................................................
    temp.with_directory { keep: false, }, ({ path: folder_path, }) =>
      folder_path = '/tmp/bricbrac-test' # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      db_path = PATH.join folder_path, 'bricabrac.sqlite'
      remove db_path
      help 'Ωbbdbr__19', { db_path, }
      #.....................................................................................................
      do =>
        db = new Dbric db_path
        @eq   ( Ωbbdbr__20 = -> db.is_ready       ), true
        @eq   ( Ωbbdbr__21 = -> db.cfg.prefix     ), '(NOPREFIX)'
        @eq   ( Ωbbdbr__22 = -> db.prefix         ), ''
        @eq   ( Ωbbdbr__23 = -> db.full_prefix    ), ''
        return null
      #.....................................................................................................
      do =>
        db = new Dbric_std db_path
        @eq   ( Ωbbdbr__24 = -> db.is_ready       ), false
        @eq   ( Ωbbdbr__25 = -> db.cfg.prefix     ), 'std'
        @eq   ( Ωbbdbr__26 = -> db.prefix         ), 'std'
        @eq   ( Ωbbdbr__27 = -> db.full_prefix    ), 'std_'
        return null
      #.....................................................................................................
      do =>
        db = Dbric_std.open db_path
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
        db = Dbric_std.open db_path
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
        db = Dbric_std.open db_path
        ( db.prepare SQL"drop view std_tables;" ).run()
        @eq   ( Ωbbdbr__38 = -> db.is_ready                 ), false
        return null
      #.....................................................................................................
      do =>
        db = Dbric_std.open db_path
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
  require_dbric: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    debug 'Ωbbdbr__44', new Dbric '/dev/shm/bricabrac.sqlite'
    #=======================================================================================================
    class Dbric_store extends Dbric
      @statements:
        # store_create_tables: SQL"""
        #   """
        store_procure: SQL"""
          create table store_facets (
            facet_key             text unique not null primary key,
            facet_value           json );"""
        store_insert_facet: SQL"""
          insert into store_facets ( facet_key, facet_value ) values ( $facet_key, $facet_value )
            on conflict ( facet_key ) do update set facet_value = excluded.facet_value;"""
        store_get_facets: SQL"""
          select * from store_facets order by facet_key;"""

      #---------------------------------------------------------------------------------------------------
      is_ready: ->
        dbos = @_get_db_objects()
        return false unless dbos.store_facets?.type is 'table'
        return true

    #=======================================================================================================
    do =>
      debug 'Ωbbdbr__45', new Dbric_store '/dev/shm/bricabrac.sqlite'
      dbs = Dbric_store.open '/dev/shm/bricabrac.sqlite'
      dbs.statements.store_create_tables.run()
      for row from dbs.statements.get_schema.iterate()
        help 'Ωbbdbr__46', row
      dbs.statements.store_insert_facet.run { facet_key: 'one',   facet_value: ( JSON.stringify 1       ), }
      dbs.statements.store_insert_facet.run { facet_key: 'two',   facet_value: ( JSON.stringify 2       ), }
      dbs.statements.store_insert_facet.run { facet_key: 'three', facet_value: ( JSON.stringify 3       ), }
      dbs.statements.store_insert_facet.run { facet_key: 'three', facet_value: ( JSON.stringify 'iii'   ), }
      dbs.statements.store_insert_facet.run { facet_key: 'true',  facet_value: ( JSON.stringify true    ), }
      dbs.statements.store_insert_facet.run { facet_key: 'false', facet_value: ( JSON.stringify false   ), }
      for row from dbs.statements.store_get_facets.iterate()
        row = { row..., { facet_value: ( JSON.parse row.facet_value ), _v: row.facet_value, }..., }
        help 'Ωbbdbr__47', row
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { tests, }
  ( new Test guytest_cfg ).test { dbric_esql: tests.dbric_esql, }
  ( new Test guytest_cfg ).test { dbric_std: tests.dbric_std, }
  ( new Test guytest_cfg ).test { reject_nonconformant_build_statements: tests.reject_nonconformant_build_statements, }


