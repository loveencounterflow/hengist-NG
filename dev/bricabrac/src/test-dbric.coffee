
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





#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  dbric_std: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    do =>
      debug 'Ωbbdbr___1', db = new Dbric '/dev/shm/bricabrac.sqlite'
      debug 'Ωbbdbr___2', db._get_db_objects()
      debug 'Ωbbdbr___3', db.is_ready
      debug 'Ωbbdbr___4', db._procure_db_objects()
      return null
    # do =>
    #   debug 'Ωbbdbr___5', db = Dbric.open '/dev/shm/bricabrac.sqlite'
    #   return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_dbric: ->
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    debug 'Ωbbdbr___6', new Dbric '/dev/shm/bricabrac.sqlite'
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
      debug 'Ωbbdbr___7', new Dbric_store '/dev/shm/bricabrac.sqlite'
      dbs = Dbric_store.open '/dev/shm/bricabrac.sqlite'
      dbs.statements.store_create_tables.run()
      for row from dbs.statements.get_schema.iterate()
        help 'Ωbbdbr___8', row
      dbs.statements.store_insert_facet.run { facet_key: 'one',   facet_value: ( JSON.stringify 1       ), }
      dbs.statements.store_insert_facet.run { facet_key: 'two',   facet_value: ( JSON.stringify 2       ), }
      dbs.statements.store_insert_facet.run { facet_key: 'three', facet_value: ( JSON.stringify 3       ), }
      dbs.statements.store_insert_facet.run { facet_key: 'three', facet_value: ( JSON.stringify 'iii'   ), }
      dbs.statements.store_insert_facet.run { facet_key: 'true',  facet_value: ( JSON.stringify true    ), }
      dbs.statements.store_insert_facet.run { facet_key: 'false', facet_value: ( JSON.stringify false   ), }
      for row from dbs.statements.store_get_facets.iterate()
        row = { row..., { facet_value: ( JSON.parse row.facet_value ), _v: row.facet_value, }..., }
        help 'Ωbbdbr___9', row
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { dbric_std: tests.dbric_std, }
  tests.dbric_std()