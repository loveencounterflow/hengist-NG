(async function() {
  /*

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

   */
  'use strict';
  var GTNG, GUY, SFMODULES, Test, alert, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, tests, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-single-file-modules'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    dbric_std: function() {
      var Dbric, FS, PATH, SQL, internals, temp;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      ({temp} = SFMODULES.unstable.require_temp());
      FS = require('node:fs');
      PATH = require('node:path');
      // debug 'Ωbbdbr___1', SFMODULES.unstable.require_temp_internal_tmp()
      temp.with_directory({
        keep: true
      }, function({
          path: folder_path
        }) {
        var db_path;
        db_path = PATH.join(folder_path, 'bricabrac.sqlite');
        help('Ωbbdbr___2', {db_path});
        (() => {          //.....................................................................................................
          var db;
          debug('Ωbbdbr___3', db = Dbric.open(db_path));
          debug('Ωbbdbr___4', db._get_db_objects());
          debug('Ωbbdbr___5', db.is_ready);
          return debug('Ωbbdbr___6', db.build());
        })();
        (() => {          //.....................................................................................................
          var db;
          debug('Ωbbdbr___7', db = new Dbric('/dev/shm/bricabrac.sqlite'));
          debug('Ωbbdbr___8', db._get_db_objects());
          debug('Ωbbdbr___9', db.is_ready);
          debug('Ωbbdbr__10', db.build());
          db.teardown();
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__14;
          debug('Ωbbdbr__11', db = new Dbric('/dev/shm/bricabrac.sqlite'));
          debug('Ωbbdbr__12', db._get_db_objects());
          debug('Ωbbdbr__13', db.is_ready);
          this.eq((Ωbbdbr__14 = function() {
            return db.is_ready;
          }), false);
          debug('Ωbbdbr__15', db.build());
          db.teardown();
          return null;
        })();
        //.....................................................................................................
        return null;
      });
      // do =>
      //   debug 'Ωbbdbr__16', db = Dbric.open '/dev/shm/bricabrac.sqlite'
      //   return null
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_dbric: function() {
      var Dbric, Dbric_store, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      debug('Ωbbdbr__17', new Dbric('/dev/shm/bricabrac.sqlite'));
      Dbric_store = (function() {
        //=======================================================================================================
        class Dbric_store extends Dbric {
          //---------------------------------------------------------------------------------------------------
          is_ready() {
            var dbos, ref;
            dbos = this._get_db_objects();
            if (((ref = dbos.store_facets) != null ? ref.type : void 0) !== 'table') {
              return false;
            }
            return true;
          }

        };

        Dbric_store.statements = {
          // store_create_tables: SQL"""
          //   """
          store_procure: SQL`create table store_facets (
  facet_key             text unique not null primary key,
  facet_value           json );`,
          store_insert_facet: SQL`insert into store_facets ( facet_key, facet_value ) values ( $facet_key, $facet_value )
  on conflict ( facet_key ) do update set facet_value = excluded.facet_value;`,
          store_get_facets: SQL`select * from store_facets order by facet_key;`
        };

        return Dbric_store;

      }).call(this);
      (() => {        //=======================================================================================================
        var dbs, results, row;
        debug('Ωbbdbr__18', new Dbric_store('/dev/shm/bricabrac.sqlite'));
        dbs = Dbric_store.open('/dev/shm/bricabrac.sqlite');
        dbs.statements.store_create_tables.run();
        for (row of dbs.statements.get_schema.iterate()) {
          help('Ωbbdbr__19', row);
        }
        dbs.statements.store_insert_facet.run({
          facet_key: 'one',
          facet_value: JSON.stringify(1)
        });
        dbs.statements.store_insert_facet.run({
          facet_key: 'two',
          facet_value: JSON.stringify(2)
        });
        dbs.statements.store_insert_facet.run({
          facet_key: 'three',
          facet_value: JSON.stringify(3)
        });
        dbs.statements.store_insert_facet.run({
          facet_key: 'three',
          facet_value: JSON.stringify('iii')
        });
        dbs.statements.store_insert_facet.run({
          facet_key: 'true',
          facet_value: JSON.stringify(true)
        });
        dbs.statements.store_insert_facet.run({
          facet_key: 'false',
          facet_value: JSON.stringify(false)
        });
        results = [];
        for (row of dbs.statements.store_get_facets.iterate()) {
          row = {...row, ...{
              facet_value: JSON.parse(row.facet_value),
              _v: row.facet_value
            }};
          results.push(help('Ωbbdbr__20', row));
        }
        return results;
      })();
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      // demo_infinite_proxy()
      // demo_colorful_proxy()
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      // ( new Test guytest_cfg ).test { tests, }
      return (new Test(guytest_cfg)).test({
        dbric_std: tests.dbric_std
      });
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCRztFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBRUg7QUFGRyxNQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUtILEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsK0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUEzQkc7OztFQTZCSCxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFB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QixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdELEVBSGhCOzthQUtFLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxTQUFBLEVBQVcsS0FBSyxDQUFDO01BQW5CLENBQTlCO0lBTnNDLENBQUEsSUFBeEM7O0FBcklHIiwic291cmNlc0NvbnRlbnQiOlsiXG4jIyNcblxuXG4jIyBBcHBsaWNhdGlvbnNcblxuKiAqKlJlZ0V4IEJ1aWxkZXIqKiAoZXhhbXBsZSBmcm9tIFtSZWppZ3MgYmxvZyBwb3N0XShodHRwczovL21lZGl1bS5jb20vQG9tYXJ6YXdhaHJ5L3Jlamlncy1tYWtpbmctcmVndWxhci1leHByZXNzaW9ucy1odW1hbi1yZWFkYWJsZS0xZmFkMzdjYjNlYWUpKVxuXG5gYGBqYXZhXG52YXIgZW1haWxSZWdleCA9XG4gICAgUmVqaWdzLkNyZWF0ZSgpXG4gICAgICAgICAgLkF0U3RhcnQoKVxuICAgICAgICAgIC5PbmVPck1vcmUociA9PiByLkFueUxldHRlck9yRGlnaXQoKS5PcigpLkFueU9mKFwiLl8lKy1cIikpXG4gICAgICAgICAgLlRleHQoXCJAXCIpXG4gICAgICAgICAgLk9uZU9yTW9yZShyID0+IHIuQW55TGV0dGVyT3JEaWdpdCgpLk9yKCkuQW55T2YoXCIuLVwiKSlcbiAgICAgICAgICAuVGV4dChcIi5cIilcbiAgICAgICAgICAuQW55TGV0dGVyT3JEaWdpdCgpLkF0TGVhc3QoMilcbiAgICAgICAgICAuQXRFbmQoKVxuICAgICAgICAgIC5CdWlsZCgpO1xuYGBgXG5cbiogKipIVE1ML1hNTCBCdWlsZXIqKlxuKiAqKlNRTCBCdWlsZGVyKipcbiogKipDTEkgQ29sb3JpbmcqKlxuKiBzeW50YXggZm9yIGEgKipUeXBlIENoZWNrZXIqKlxuXG4jIyNcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xuXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfc3RkOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgeyB0ZW1wLCAgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90ZW1wKClcbiAgICBGUyAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fXzEnLCBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90ZW1wX2ludGVybmFsX3RtcCgpXG4gICAgdGVtcC53aXRoX2RpcmVjdG9yeSB7IGtlZXA6IHRydWUsIH0sICh7IHBhdGg6IGZvbGRlcl9wYXRoLCB9KSAtPlxuICAgICAgZGJfcGF0aCA9IFBBVEguam9pbiBmb2xkZXJfcGF0aCwgJ2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBoZWxwICfOqWJiZGJyX19fMicsIHsgZGJfcGF0aCwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkZWJ1ZyAnzqliYmRicl9fXzMnLCBkYiA9IERicmljLm9wZW4gZGJfcGF0aFxuICAgICAgICBkZWJ1ZyAnzqliYmRicl9fXzQnLCBkYi5fZ2V0X2RiX29iamVjdHMoKVxuICAgICAgICBkZWJ1ZyAnzqliYmRicl9fXzUnLCBkYi5pc19yZWFkeVxuICAgICAgICBkZWJ1ZyAnzqliYmRicl9fXzYnLCBkYi5idWlsZCgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRlYnVnICfOqWJiZGJyX19fNycsIGRiID0gbmV3IERicmljICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgICBkZWJ1ZyAnzqliYmRicl9fXzgnLCBkYi5fZ2V0X2RiX29iamVjdHMoKVxuICAgICAgICBkZWJ1ZyAnzqliYmRicl9fXzknLCBkYi5pc19yZWFkeVxuICAgICAgICBkZWJ1ZyAnzqliYmRicl9fMTAnLCBkYi5idWlsZCgpXG4gICAgICAgIGRiLnRlYXJkb3duKClcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGVidWcgJ86pYmJkYnJfXzExJywgZGIgPSBuZXcgRGJyaWMgJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICAgIGRlYnVnICfOqWJiZGJyX18xMicsIGRiLl9nZXRfZGJfb2JqZWN0cygpXG4gICAgICAgIGRlYnVnICfOqWJiZGJyX18xMycsIGRiLmlzX3JlYWR5XG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMTQgPSAtPiBkYi5pc19yZWFkeSApLCBmYWxzZVxuICAgICAgICBkZWJ1ZyAnzqliYmRicl9fMTUnLCBkYi5idWlsZCgpXG4gICAgICAgIGRiLnRlYXJkb3duKClcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjIGRvID0+XG4gICAgIyAgIGRlYnVnICfOqWJiZGJyX18xNicsIGRiID0gRGJyaWMub3BlbiAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAjICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2RicmljOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgZGVidWcgJ86pYmJkYnJfXzE3JywgbmV3IERicmljICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3RvcmUgZXh0ZW5kcyBEYnJpY1xuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgICMgc3RvcmVfY3JlYXRlX3RhYmxlczogU1FMXCJcIlwiXG4gICAgICAgICMgICBcIlwiXCJcbiAgICAgICAgc3RvcmVfcHJvY3VyZTogU1FMXCJcIlwiXG4gICAgICAgICAgY3JlYXRlIHRhYmxlIHN0b3JlX2ZhY2V0cyAoXG4gICAgICAgICAgICBmYWNldF9rZXkgICAgICAgICAgICAgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgICBmYWNldF92YWx1ZSAgICAgICAgICAganNvbiApO1wiXCJcIlxuICAgICAgICBzdG9yZV9pbnNlcnRfZmFjZXQ6IFNRTFwiXCJcIlxuICAgICAgICAgIGluc2VydCBpbnRvIHN0b3JlX2ZhY2V0cyAoIGZhY2V0X2tleSwgZmFjZXRfdmFsdWUgKSB2YWx1ZXMgKCAkZmFjZXRfa2V5LCAkZmFjZXRfdmFsdWUgKVxuICAgICAgICAgICAgb24gY29uZmxpY3QgKCBmYWNldF9rZXkgKSBkbyB1cGRhdGUgc2V0IGZhY2V0X3ZhbHVlID0gZXhjbHVkZWQuZmFjZXRfdmFsdWU7XCJcIlwiXG4gICAgICAgIHN0b3JlX2dldF9mYWNldHM6IFNRTFwiXCJcIlxuICAgICAgICAgIHNlbGVjdCAqIGZyb20gc3RvcmVfZmFjZXRzIG9yZGVyIGJ5IGZhY2V0X2tleTtcIlwiXCJcblxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaXNfcmVhZHk6IC0+XG4gICAgICAgIGRib3MgPSBAX2dldF9kYl9vYmplY3RzKClcbiAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBkYm9zLnN0b3JlX2ZhY2V0cz8udHlwZSBpcyAndGFibGUnXG4gICAgICAgIHJldHVybiB0cnVlXG5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkZWJ1ZyAnzqliYmRicl9fMTgnLCBuZXcgRGJyaWNfc3RvcmUgJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBkYnMgPSBEYnJpY19zdG9yZS5vcGVuICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgZGJzLnN0YXRlbWVudHMuc3RvcmVfY3JlYXRlX3RhYmxlcy5ydW4oKVxuICAgICAgZm9yIHJvdyBmcm9tIGRicy5zdGF0ZW1lbnRzLmdldF9zY2hlbWEuaXRlcmF0ZSgpXG4gICAgICAgIGhlbHAgJ86pYmJkYnJfXzE5Jywgcm93XG4gICAgICBkYnMuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAnb25lJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAxICAgICAgICksIH1cbiAgICAgIGRicy5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0d28nLCAgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDIgICAgICAgKSwgfVxuICAgICAgZGJzLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMyAgICAgICApLCB9XG4gICAgICBkYnMuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAnaWlpJyAgICksIH1cbiAgICAgIGRicy5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0cnVlJywgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IHRydWUgICAgKSwgfVxuICAgICAgZGJzLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ2ZhbHNlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgZmFsc2UgICApLCB9XG4gICAgICBmb3Igcm93IGZyb20gZGJzLnN0YXRlbWVudHMuc3RvcmVfZ2V0X2ZhY2V0cy5pdGVyYXRlKClcbiAgICAgICAgcm93ID0geyByb3cuLi4sIHsgZmFjZXRfdmFsdWU6ICggSlNPTi5wYXJzZSByb3cuZmFjZXRfdmFsdWUgKSwgX3Y6IHJvdy5mYWNldF92YWx1ZSwgfS4uLiwgfVxuICAgICAgICBoZWxwICfOqWJiZGJyX18yMCcsIHJvd1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb19pbmZpbml0ZV9wcm94eSgpXG4gICMgZGVtb19jb2xvcmZ1bF9wcm94eSgpXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX3N0ZDogdGVzdHMuZGJyaWNfc3RkLCB9XG4iXX0=
//# sourceURL=../src/test-dbric.coffee