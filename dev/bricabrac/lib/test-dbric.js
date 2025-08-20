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
      var Dbric, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      (() => {
        var db;
        debug('Ωbbdbr___1', db = new Dbric('/dev/shm/bricabrac.sqlite'));
        debug('Ωbbdbr___2', db._get_db_objects());
        debug('Ωbbdbr___3', db.is_ready);
        debug('Ωbbdbr___4', db._procure_db_objects());
        return null;
      })();
      // do =>
      //   debug 'Ωbbdbr___5', db = Dbric.open '/dev/shm/bricabrac.sqlite'
      //   return null
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_dbric: function() {
      var Dbric, Dbric_store, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      debug('Ωbbdbr___6', new Dbric('/dev/shm/bricabrac.sqlite'));
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
        debug('Ωbbdbr___7', new Dbric_store('/dev/shm/bricabrac.sqlite'));
        dbs = Dbric_store.open('/dev/shm/bricabrac.sqlite');
        dbs.statements.store_create_tables.run();
        for (row of dbs.statements.get_schema.iterate()) {
          help('Ωbbdbr___8', row);
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
          results.push(help('Ωbbdbr___9', row));
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
      // ( new Test guytest_cfg ).test { dbric_std: tests.dbric_std, }
      return tests.dbric_std();
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCRztFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBRUg7QUFGRyxNQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUtILEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsK0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUEzQkc7OztFQTZCSCxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFB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dGVudCI6WyJcbiMjI1xuXG5cbiMjIEFwcGxpY2F0aW9uc1xuXG4qICoqUmVnRXggQnVpbGRlcioqIChleGFtcGxlIGZyb20gW1JlamlncyBibG9nIHBvc3RdKGh0dHBzOi8vbWVkaXVtLmNvbS9Ab21hcnphd2FocnkvcmVqaWdzLW1ha2luZy1yZWd1bGFyLWV4cHJlc3Npb25zLWh1bWFuLXJlYWRhYmxlLTFmYWQzN2NiM2VhZSkpXG5cbmBgYGphdmFcbnZhciBlbWFpbFJlZ2V4ID1cbiAgICBSZWppZ3MuQ3JlYXRlKClcbiAgICAgICAgICAuQXRTdGFydCgpXG4gICAgICAgICAgLk9uZU9yTW9yZShyID0+IHIuQW55TGV0dGVyT3JEaWdpdCgpLk9yKCkuQW55T2YoXCIuXyUrLVwiKSlcbiAgICAgICAgICAuVGV4dChcIkBcIilcbiAgICAgICAgICAuT25lT3JNb3JlKHIgPT4gci5BbnlMZXR0ZXJPckRpZ2l0KCkuT3IoKS5BbnlPZihcIi4tXCIpKVxuICAgICAgICAgIC5UZXh0KFwiLlwiKVxuICAgICAgICAgIC5BbnlMZXR0ZXJPckRpZ2l0KCkuQXRMZWFzdCgyKVxuICAgICAgICAgIC5BdEVuZCgpXG4gICAgICAgICAgLkJ1aWxkKCk7XG5gYGBcblxuKiAqKkhUTUwvWE1MIEJ1aWxlcioqXG4qICoqU1FMIEJ1aWxkZXIqKlxuKiAqKkNMSSBDb2xvcmluZyoqXG4qIHN5bnRheCBmb3IgYSAqKlR5cGUgQ2hlY2tlcioqXG5cbiMjI1xuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG5cblxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19zdGQ6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICBkbyA9PlxuICAgICAgZGVidWcgJ86pYmJkYnJfX18xJywgZGIgPSBuZXcgRGJyaWMgJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBkZWJ1ZyAnzqliYmRicl9fXzInLCBkYi5fZ2V0X2RiX29iamVjdHMoKVxuICAgICAgZGVidWcgJ86pYmJkYnJfX18zJywgZGIuaXNfcmVhZHlcbiAgICAgIGRlYnVnICfOqWJiZGJyX19fNCcsIGRiLl9wcm9jdXJlX2RiX29iamVjdHMoKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjIGRvID0+XG4gICAgIyAgIGRlYnVnICfOqWJiZGJyX19fNScsIGRiID0gRGJyaWMub3BlbiAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAjICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2RicmljOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgZGVidWcgJ86pYmJkYnJfX182JywgbmV3IERicmljICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3RvcmUgZXh0ZW5kcyBEYnJpY1xuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgICMgc3RvcmVfY3JlYXRlX3RhYmxlczogU1FMXCJcIlwiXG4gICAgICAgICMgICBcIlwiXCJcbiAgICAgICAgc3RvcmVfcHJvY3VyZTogU1FMXCJcIlwiXG4gICAgICAgICAgY3JlYXRlIHRhYmxlIHN0b3JlX2ZhY2V0cyAoXG4gICAgICAgICAgICBmYWNldF9rZXkgICAgICAgICAgICAgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgICBmYWNldF92YWx1ZSAgICAgICAgICAganNvbiApO1wiXCJcIlxuICAgICAgICBzdG9yZV9pbnNlcnRfZmFjZXQ6IFNRTFwiXCJcIlxuICAgICAgICAgIGluc2VydCBpbnRvIHN0b3JlX2ZhY2V0cyAoIGZhY2V0X2tleSwgZmFjZXRfdmFsdWUgKSB2YWx1ZXMgKCAkZmFjZXRfa2V5LCAkZmFjZXRfdmFsdWUgKVxuICAgICAgICAgICAgb24gY29uZmxpY3QgKCBmYWNldF9rZXkgKSBkbyB1cGRhdGUgc2V0IGZhY2V0X3ZhbHVlID0gZXhjbHVkZWQuZmFjZXRfdmFsdWU7XCJcIlwiXG4gICAgICAgIHN0b3JlX2dldF9mYWNldHM6IFNRTFwiXCJcIlxuICAgICAgICAgIHNlbGVjdCAqIGZyb20gc3RvcmVfZmFjZXRzIG9yZGVyIGJ5IGZhY2V0X2tleTtcIlwiXCJcblxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaXNfcmVhZHk6IC0+XG4gICAgICAgIGRib3MgPSBAX2dldF9kYl9vYmplY3RzKClcbiAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBkYm9zLnN0b3JlX2ZhY2V0cz8udHlwZSBpcyAndGFibGUnXG4gICAgICAgIHJldHVybiB0cnVlXG5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkZWJ1ZyAnzqliYmRicl9fXzcnLCBuZXcgRGJyaWNfc3RvcmUgJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBkYnMgPSBEYnJpY19zdG9yZS5vcGVuICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgZGJzLnN0YXRlbWVudHMuc3RvcmVfY3JlYXRlX3RhYmxlcy5ydW4oKVxuICAgICAgZm9yIHJvdyBmcm9tIGRicy5zdGF0ZW1lbnRzLmdldF9zY2hlbWEuaXRlcmF0ZSgpXG4gICAgICAgIGhlbHAgJ86pYmJkYnJfX184Jywgcm93XG4gICAgICBkYnMuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAnb25lJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAxICAgICAgICksIH1cbiAgICAgIGRicy5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0d28nLCAgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDIgICAgICAgKSwgfVxuICAgICAgZGJzLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMyAgICAgICApLCB9XG4gICAgICBkYnMuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAnaWlpJyAgICksIH1cbiAgICAgIGRicy5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0cnVlJywgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IHRydWUgICAgKSwgfVxuICAgICAgZGJzLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ2ZhbHNlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgZmFsc2UgICApLCB9XG4gICAgICBmb3Igcm93IGZyb20gZGJzLnN0YXRlbWVudHMuc3RvcmVfZ2V0X2ZhY2V0cy5pdGVyYXRlKClcbiAgICAgICAgcm93ID0geyByb3cuLi4sIHsgZmFjZXRfdmFsdWU6ICggSlNPTi5wYXJzZSByb3cuZmFjZXRfdmFsdWUgKSwgX3Y6IHJvdy5mYWNldF92YWx1ZSwgfS4uLiwgfVxuICAgICAgICBoZWxwICfOqWJiZGJyX19fOScsIHJvd1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb19pbmZpbml0ZV9wcm94eSgpXG4gICMgZGVtb19jb2xvcmZ1bF9wcm94eSgpXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGJyaWNfc3RkOiB0ZXN0cy5kYnJpY19zdGQsIH1cbiAgdGVzdHMuZGJyaWNfc3RkKCkiXX0=
//# sourceURL=../src/test-dbric.coffee