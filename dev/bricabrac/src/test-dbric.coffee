
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
  dbric_std: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    { temp,                     } = SFMODULES.unstable.require_temp()
    # debug 'Ωbbdbr___3', SFMODULES.unstable.require_temp_internal_tmp()
    temp.with_directory { keep: false, }, ({ path: folder_path, }) =>
      folder_path = '/tmp/bricbrac-test' # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      db_path = PATH.join folder_path, 'bricabrac.sqlite'
      remove db_path
      help 'Ωbbdbr___4', { db_path, }
      #.....................................................................................................
      do =>
        db = new Dbric db_path
        @eq   ( Ωbbdbr___5 = -> db.is_ready ), false
        return null
      #.....................................................................................................
      do =>
        db = Dbric.open db_path
        @eq   ( Ωbbdbr___6 = -> db instanceof Dbric         ), true
        @eq   ( Ωbbdbr___7 = -> db._get_db_objects()        ), {}
        @eq   ( Ωbbdbr___8 = -> db.is_ready                 ), true
        @eq   ( Ωbbdbr___9 = -> db.build()                  ), 0
      # #.....................................................................................................
      # do =>
      #   debug 'Ωbbdbr__10', db = new Dbric db_path
      #   debug 'Ωbbdbr__11', db._get_db_objects()
      #   debug 'Ωbbdbr__12', db.is_ready
      #   debug 'Ωbbdbr__13', db.build()
      #   db.teardown()
      #   return null
      # #.....................................................................................................
      # do =>
      #   debug 'Ωbbdbr__14', db = new Dbric db_path
      #   debug 'Ωbbdbr__15', db._get_db_objects()
      #   debug 'Ωbbdbr__16', db.is_ready
      #   @eq   ( Ωbbdbr__17 = -> db.is_ready ), false
      #   debug 'Ωbbdbr__18', db.build()
      #   db.teardown()
      #   return null
      #.....................................................................................................
      return null
    # do =>
    #   debug 'Ωbbdbr__19', db = Dbric.open db_path
    #   return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_dbric: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    debug 'Ωbbdbr__20', new Dbric '/dev/shm/bricabrac.sqlite'
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
      debug 'Ωbbdbr__21', new Dbric_store '/dev/shm/bricabrac.sqlite'
      dbs = Dbric_store.open '/dev/shm/bricabrac.sqlite'
      dbs.statements.store_create_tables.run()
      for row from dbs.statements.get_schema.iterate()
        help 'Ωbbdbr__22', row
      dbs.statements.store_insert_facet.run { facet_key: 'one',   facet_value: ( JSON.stringify 1       ), }
      dbs.statements.store_insert_facet.run { facet_key: 'two',   facet_value: ( JSON.stringify 2       ), }
      dbs.statements.store_insert_facet.run { facet_key: 'three', facet_value: ( JSON.stringify 3       ), }
      dbs.statements.store_insert_facet.run { facet_key: 'three', facet_value: ( JSON.stringify 'iii'   ), }
      dbs.statements.store_insert_facet.run { facet_key: 'true',  facet_value: ( JSON.stringify true    ), }
      dbs.statements.store_insert_facet.run { facet_key: 'false', facet_value: ( JSON.stringify false   ), }
      for row from dbs.statements.store_get_facets.iterate()
        row = { row..., { facet_value: ( JSON.parse row.facet_value ), _v: row.facet_value, }..., }
        help 'Ωbbdbr__23', row
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { tests, }
  ( new Test guytest_cfg ).test { dbric_std: tests.dbric_std, }
