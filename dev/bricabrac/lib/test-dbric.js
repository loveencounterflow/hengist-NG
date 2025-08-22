(async function() {
  'use strict';
  var FS, GTNG, GUY, PATH, SFMODULES, Test, alert, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, remove, reverse, rpr, tests, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-dbric'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  FS = require('node:fs');

  PATH = require('node:path');

  //===========================================================================================================
  remove = function(path) {
    var error;
    try {
      FS.unlinkSync(path);
      help('Ωbbdbr___1', `removed ${rpr(path)}`);
    } catch (error1) {
      error = error1;
      if (error.code !== 'ENOENT') {
        throw error;
      }
      urge('Ωbbdbr___2', `no such FS object: ${rpr(path)}`);
    }
    return null;
  };

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    dbric_esql: function() {
      var esql, internals, Ωbbdbr__10, Ωbbdbr___3, Ωbbdbr___4, Ωbbdbr___5, Ωbbdbr___6, Ωbbdbr___7, Ωbbdbr___8, Ωbbdbr___9;
      ({esql, internals} = SFMODULES.unstable.require_dbric());
      //.......................................................................................................
      this.eq((Ωbbdbr___3 = function() {
        return internals.type_of(esql.unquote_name);
      }), 'function');
      this.eq((Ωbbdbr___4 = function() {
        return esql.unquote_name('abc');
      }), 'abc');
      this.eq((Ωbbdbr___5 = function() {
        return esql.unquote_name('"abc"');
      }), 'abc');
      this.eq((Ωbbdbr___6 = function() {
        return esql.unquote_name('"ab""c"');
      }), 'ab"c');
      this.throws((Ωbbdbr___7 = function() {
        return esql.unquote_name('');
      }), /expected a name/);
      this.throws((Ωbbdbr___8 = function() {
        return esql.unquote_name('"');
      }), /expected a name/);
      this.throws((Ωbbdbr___9 = function() {
        return esql.unquote_name('""');
      }), /expected a name/);
      this.throws((Ωbbdbr__10 = function() {
        return esql.unquote_name(false);
      }), /expected a text, got a boolean/);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    reject_nonconformant_build_statements: function() {
      var Dbric, Dbric_nonconform, SQL, internals, temp;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      ({temp} = SFMODULES.unstable.require_temp());
      Dbric_nonconform = (function() {
        //.......................................................................................................
        class Dbric_nonconform extends Dbric {};

        Dbric_nonconform.build = [
          SQL`create table nonconform_one ( a text primary key );`,
          SQL`-- this comment shouldn't be here
create view nonconform_two as select * from nonconform_one;`
        ];

        return Dbric_nonconform;

      }).call(this);
      //.......................................................................................................
      temp.with_directory({
        keep: false
      }, ({
          path: folder_path
        }) => {
        var db_path;
        db_path = PATH.join(folder_path, 'bricabrac.sqlite');
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__11, Ωbbdbr__12;
          db = new Dbric_nonconform(db_path);
          this.throws((Ωbbdbr__11 = function() {
            return db.is_ready;
          }), /1 out of 2 build statement\(s\) could not be parsed/);
          this.eq((Ωbbdbr__12 = function() {
            var ref;
            return (ref = db._get_objects_in_build_statements()) != null ? ref.error_count : void 0;
          }), 1);
          return null;
        })();
        (() => {          //.....................................................................................................
          var Ωbbdbr__11;
          this.throws((Ωbbdbr__11 = function() {
            return Dbric_nonconform.open(db_path);
          }), /1 out of 2 build statement\(s\) could not be parsed/);
          return null;
        })();
        //.....................................................................................................
        return null;
      });
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    dbric_std: function() {
      var Dbric, Dbric_std, SQL, internals, temp;
      ({Dbric, Dbric_std, SQL, internals} = SFMODULES.unstable.require_dbric());
      ({temp} = SFMODULES.unstable.require_temp());
      //.......................................................................................................
      temp.with_directory({
        keep: false
      }, ({
          path: folder_path
        }) => {
        var db_path;
        folder_path = '/tmp/bricbrac-test'; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        db_path = PATH.join(folder_path, 'bricabrac.sqlite');
        remove(db_path);
        help('Ωbbdbr__13', {db_path});
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__14;
          db = new Dbric(db_path);
          this.eq((Ωbbdbr__14 = function() {
            return db.is_ready;
          }), true);
          return null;
        })();
        return (() => {          //.....................................................................................................
          var db, Ωbbdbr__15, Ωbbdbr__16, Ωbbdbr__17, Ωbbdbr__18;
          db = Dbric.open(db_path);
          this.eq((Ωbbdbr__15 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__16 = function() {
            return db._get_db_objects();
          }), {});
          this.eq((Ωbbdbr__17 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__18 = function() {
            return db.build();
          }), 0);
          return null;
        })();
      });
      //.......................................................................................................
      temp.with_directory({
        keep: false
      }, ({
          path: folder_path
        }) => {
        var db_path;
        folder_path = '/tmp/bricbrac-test'; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        db_path = PATH.join(folder_path, 'bricabrac.sqlite');
        remove(db_path);
        help('Ωbbdbr__19', {db_path});
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__20, Ωbbdbr__21, Ωbbdbr__22, Ωbbdbr__23;
          db = new Dbric(db_path);
          this.eq((Ωbbdbr__20 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__21 = function() {
            return db.cfg.prefix;
          }), '(NOPREFIX)');
          this.eq((Ωbbdbr__22 = function() {
            return db.prefix;
          }), '');
          this.eq((Ωbbdbr__23 = function() {
            return db.full_prefix;
          }), '');
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__24, Ωbbdbr__25, Ωbbdbr__26, Ωbbdbr__27;
          db = new Dbric_std(db_path);
          this.eq((Ωbbdbr__24 = function() {
            return db.is_ready;
          }), false);
          this.eq((Ωbbdbr__25 = function() {
            return db.cfg.prefix;
          }), 'std');
          this.eq((Ωbbdbr__26 = function() {
            return db.prefix;
          }), 'std');
          this.eq((Ωbbdbr__27 = function() {
            return db.full_prefix;
          }), 'std_');
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__28, Ωbbdbr__29, Ωbbdbr__30, Ωbbdbr__31, Ωbbdbr__32;
          db = Dbric_std.open(db_path);
          this.eq((Ωbbdbr__28 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__29 = function() {
            return db instanceof Dbric_std;
          }), true);
          this.eq((Ωbbdbr__30 = function() {
            return db._get_db_objects();
          }), {
            std_tables: {
              name: 'std_tables',
              type: 'view'
            },
            std_views: {
              name: 'std_views',
              type: 'view'
            },
            std_relations: {
              name: 'std_relations',
              type: 'view'
            }
          });
          this.eq((Ωbbdbr__31 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__32 = function() {
            return db.build();
          }), 0);
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__33, Ωbbdbr__34, Ωbbdbr__35, Ωbbdbr__36, Ωbbdbr__37;
          db = Dbric_std.open(db_path);
          this.eq((Ωbbdbr__33 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__34 = function() {
            return db instanceof Dbric_std;
          }), true);
          this.eq((Ωbbdbr__35 = function() {
            return db._get_db_objects();
          }), {
            std_tables: {
              name: 'std_tables',
              type: 'view'
            },
            std_views: {
              name: 'std_views',
              type: 'view'
            },
            std_relations: {
              name: 'std_relations',
              type: 'view'
            }
          });
          this.eq((Ωbbdbr__36 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__37 = function() {
            return db.build();
          }), 0);
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__38;
          db = Dbric_std.open(db_path);
          (db.prepare(SQL`drop view std_tables;`)).run();
          this.eq((Ωbbdbr__38 = function() {
            return db.is_ready;
          }), false);
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__39, Ωbbdbr__40, Ωbbdbr__41, Ωbbdbr__42, Ωbbdbr__43;
          db = Dbric_std.open(db_path);
          this.eq((Ωbbdbr__39 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__40 = function() {
            return db instanceof Dbric_std;
          }), true);
          this.eq((Ωbbdbr__41 = function() {
            return db._get_db_objects();
          }), {
            std_tables: {
              name: 'std_tables',
              type: 'view'
            },
            std_views: {
              name: 'std_views',
              type: 'view'
            },
            std_relations: {
              name: 'std_relations',
              type: 'view'
            }
          });
          this.eq((Ωbbdbr__42 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__43 = function() {
            return db.build();
          }), 0);
          return null;
        })();
        //.....................................................................................................
        return null;
      });
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_dbric: function() {
      var Dbric, Dbric_store, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      debug('Ωbbdbr__44', new Dbric('/dev/shm/bricabrac.sqlite'));
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
        debug('Ωbbdbr__45', new Dbric_store('/dev/shm/bricabrac.sqlite'));
        dbs = Dbric_store.open('/dev/shm/bricabrac.sqlite');
        dbs.statements.store_create_tables.run();
        for (row of dbs.statements.get_schema.iterate()) {
          help('Ωbbdbr__46', row);
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
          results.push(help('Ωbbdbr__47', row));
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
      (new Test(guytest_cfg)).test({
        dbric_esql: tests.dbric_esql
      });
      (new Test(guytest_cfg)).test({
        dbric_std: tests.dbric_std
      });
      return (new Test(guytest_cfg)).test({
        reject_nonconformant_build_statements: tests.reject_nonconformant_build_statements
      });
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEVBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFB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QUFBLGdEQUFBO1VBQ0UsR0FBQSxHQUFNLENBQUUsR0FBQSxHQUFGLEVBQVUsR0FBQTtjQUFFLFdBQUEsRUFBZSxJQUFJLENBQUMsS0FBTCxDQUFXLEdBQUcsQ0FBQyxXQUFmLENBQWpCO2NBQStDLEVBQUEsRUFBSSxHQUFHLENBQUM7WUFBdkQsQ0FBVjt1QkFDTixJQUFBLENBQUssWUFBTCxFQUFtQixHQUFuQjtRQUZGLENBQUE7O01BWkMsQ0FBQSxJQTFCUDs7QUEwQ0ksYUFBTztJQTNDTTtFQWhKZixFQWxERjs7O0VBa1BBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQSxXQUFBOzs7TUFFRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0QsRUFIaEI7O01BS0UsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLFVBQUEsRUFBWSxLQUFLLENBQUM7TUFBcEIsQ0FBOUI7TUFDQSxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCO1FBQUUsU0FBQSxFQUFXLEtBQUssQ0FBQztNQUFuQixDQUE5QjthQUNBLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxxQ0FBQSxFQUF1QyxLQUFLLENBQUM7TUFBL0MsQ0FBOUI7SUFSc0MsQ0FBQSxJQUF4Qzs7QUFsUEEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtZGJyaWMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcbkZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnJlbW92ZSA9ICggcGF0aCApIC0+XG4gIHRyeVxuICAgIEZTLnVubGlua1N5bmMgcGF0aFxuICAgIGhlbHAgJ86pYmJkYnJfX18xJywgXCJyZW1vdmVkICN7cnByIHBhdGh9XCJcbiAgY2F0Y2ggZXJyb3JcbiAgICB0aHJvdyBlcnJvciB1bmxlc3MgZXJyb3IuY29kZSBpcyAnRU5PRU5UJ1xuICAgIHVyZ2UgJ86pYmJkYnJfX18yJywgXCJubyBzdWNoIEZTIG9iamVjdDogI3tycHIgcGF0aH1cIlxuICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfZXNxbDogLT5cbiAgICB7IGVzcWwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqliYmRicl9fXzMgPSAtPiBpbnRlcm5hbHMudHlwZV9vZiBlc3FsLnVucXVvdGVfbmFtZSApLCAnZnVuY3Rpb24nXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX180ID0gLT4gZXNxbC51bnF1b3RlX25hbWUgJ2FiYycgICAgICAgICAgICAgKSwgJ2FiYydcbiAgICBAZXEgICAgICggzqliYmRicl9fXzUgPSAtPiBlc3FsLnVucXVvdGVfbmFtZSAnXCJhYmNcIicgICAgICAgICAgICksICdhYmMnXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX182ID0gLT4gZXNxbC51bnF1b3RlX25hbWUgJ1wiYWJcIlwiY1wiJyAgICAgICAgICksICdhYlwiYydcbiAgICBAdGhyb3dzICggzqliYmRicl9fXzcgPSAtPiBlc3FsLnVucXVvdGVfbmFtZSAnJyAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBuYW1lL1xuICAgIEB0aHJvd3MgKCDOqWJiZGJyX19fOCA9IC0+IGVzcWwudW5xdW90ZV9uYW1lICdcIicgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBuYW1lL1xuICAgIEB0aHJvd3MgKCDOqWJiZGJyX19fOSA9IC0+IGVzcWwudW5xdW90ZV9uYW1lICdcIlwiJyAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgbmFtZS9cbiAgICBAdGhyb3dzICggzqliYmRicl9fMTAgPSAtPiBlc3FsLnVucXVvdGVfbmFtZSBmYWxzZSAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0LCBnb3QgYSBib29sZWFuL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlamVjdF9ub25jb25mb3JtYW50X2J1aWxkX3N0YXRlbWVudHM6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICB7IHRlbXAsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3RlbXAoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgRGJyaWNfbm9uY29uZm9ybSBleHRlbmRzIERicmljXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiXG4gICAgICAgICAgY3JlYXRlIHRhYmxlIG5vbmNvbmZvcm1fb25lICggYSB0ZXh0IHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcIlxuICAgICAgICAgIC0tIHRoaXMgY29tbWVudCBzaG91bGRuJ3QgYmUgaGVyZVxuICAgICAgICAgIGNyZWF0ZSB2aWV3IG5vbmNvbmZvcm1fdHdvIGFzIHNlbGVjdCAqIGZyb20gbm9uY29uZm9ybV9vbmU7XCJcIlwiXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRlbXAud2l0aF9kaXJlY3RvcnkgeyBrZWVwOiBmYWxzZSwgfSwgKHsgcGF0aDogZm9sZGVyX3BhdGgsIH0pID0+XG4gICAgICBkYl9wYXRoID0gUEFUSC5qb2luIGZvbGRlcl9wYXRoLCAnYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBuZXcgRGJyaWNfbm9uY29uZm9ybSBkYl9wYXRoXG4gICAgICAgIEB0aHJvd3MgKCDOqWJiZGJyX18xMSA9IC0+IGRiLmlzX3JlYWR5ICksIC8xIG91dCBvZiAyIGJ1aWxkIHN0YXRlbWVudFxcKHNcXCkgY291bGQgbm90IGJlIHBhcnNlZC9cbiAgICAgICAgQGVxICAgICAoIM6pYmJkYnJfXzEyID0gLT4gZGIuX2dldF9vYmplY3RzX2luX2J1aWxkX3N0YXRlbWVudHMoKT8uZXJyb3JfY291bnQgKSwgMVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBAdGhyb3dzICggzqliYmRicl9fMTEgPSAtPiBEYnJpY19ub25jb25mb3JtLm9wZW4gZGJfcGF0aCApLCAvMSBvdXQgb2YgMiBidWlsZCBzdGF0ZW1lbnRcXChzXFwpIGNvdWxkIG5vdCBiZSBwYXJzZWQvXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfc3RkOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBEYnJpY19zdGQsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgeyB0ZW1wLCAgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90ZW1wKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRlbXAud2l0aF9kaXJlY3RvcnkgeyBrZWVwOiBmYWxzZSwgfSwgKHsgcGF0aDogZm9sZGVyX3BhdGgsIH0pID0+XG4gICAgICBmb2xkZXJfcGF0aCA9ICcvdG1wL2JyaWNicmFjLXRlc3QnICMgISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG4gICAgICBkYl9wYXRoID0gUEFUSC5qb2luIGZvbGRlcl9wYXRoLCAnYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHJlbW92ZSBkYl9wYXRoXG4gICAgICBoZWxwICfOqWJiZGJyX18xMycsIHsgZGJfcGF0aCwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IG5ldyBEYnJpYyBkYl9wYXRoXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMTQgPSAtPiBkYi5pc19yZWFkeSApLCB0cnVlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gRGJyaWMub3BlbiBkYl9wYXRoXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMTUgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzE2ID0gLT4gZGIuX2dldF9kYl9vYmplY3RzKCkgICAgICAgICksIHt9XG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMTcgPSAtPiBkYi5pc19yZWFkeSAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzE4ID0gLT4gZGIuYnVpbGQoKSAgICAgICAgICAgICAgICAgICksIDBcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRlbXAud2l0aF9kaXJlY3RvcnkgeyBrZWVwOiBmYWxzZSwgfSwgKHsgcGF0aDogZm9sZGVyX3BhdGgsIH0pID0+XG4gICAgICBmb2xkZXJfcGF0aCA9ICcvdG1wL2JyaWNicmFjLXRlc3QnICMgISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG4gICAgICBkYl9wYXRoID0gUEFUSC5qb2luIGZvbGRlcl9wYXRoLCAnYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHJlbW92ZSBkYl9wYXRoXG4gICAgICBoZWxwICfOqWJiZGJyX18xOScsIHsgZGJfcGF0aCwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IG5ldyBEYnJpYyBkYl9wYXRoXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjAgPSAtPiBkYi5pc19yZWFkeSAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjEgPSAtPiBkYi5jZmcucHJlZml4ICAgICApLCAnKE5PUFJFRklYKSdcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yMiA9IC0+IGRiLnByZWZpeCAgICAgICAgICksICcnXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjMgPSAtPiBkYi5mdWxsX3ByZWZpeCAgICApLCAnJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IG5ldyBEYnJpY19zdGQgZGJfcGF0aFxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI0ID0gLT4gZGIuaXNfcmVhZHkgICAgICAgKSwgZmFsc2VcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yNSA9IC0+IGRiLmNmZy5wcmVmaXggICAgICksICdzdGQnXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjYgPSAtPiBkYi5wcmVmaXggICAgICAgICApLCAnc3RkJ1xuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI3ID0gLT4gZGIuZnVsbF9wcmVmaXggICAgKSwgJ3N0ZF8nXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gRGJyaWNfc3RkLm9wZW4gZGJfcGF0aFxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI4ID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpYyAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yOSA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWNfc3RkICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzAgPSAtPiBkYi5fZ2V0X2RiX29iamVjdHMoKSAgICAgICAgKSwge1xuICAgICAgICAgIHN0ZF90YWJsZXM6ICAgICB7IG5hbWU6ICdzdGRfdGFibGVzJywgICAgIHR5cGU6ICd2aWV3JyB9LFxuICAgICAgICAgIHN0ZF92aWV3czogICAgICB7IG5hbWU6ICdzdGRfdmlld3MnLCAgICAgIHR5cGU6ICd2aWV3JyB9LFxuICAgICAgICAgIHN0ZF9yZWxhdGlvbnM6ICB7IG5hbWU6ICdzdGRfcmVsYXRpb25zJywgIHR5cGU6ICd2aWV3JyB9IH1cbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zMSA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzIgPSAtPiBkYi5idWlsZCgpICAgICAgICAgICAgICAgICAgKSwgMFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IERicmljX3N0ZC5vcGVuIGRiX3BhdGhcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zMyA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzQgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljX3N0ZCAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzM1ID0gLT4gZGIuX2dldF9kYl9vYmplY3RzKCkgICAgICAgICksIHtcbiAgICAgICAgICBzdGRfdGFibGVzOiAgICAgeyBuYW1lOiAnc3RkX3RhYmxlcycsICAgICB0eXBlOiAndmlldycgfSxcbiAgICAgICAgICBzdGRfdmlld3M6ICAgICAgeyBuYW1lOiAnc3RkX3ZpZXdzJywgICAgICB0eXBlOiAndmlldycgfSxcbiAgICAgICAgICBzdGRfcmVsYXRpb25zOiAgeyBuYW1lOiAnc3RkX3JlbGF0aW9ucycsICB0eXBlOiAndmlldycgfSB9XG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzYgPSAtPiBkYi5pc19yZWFkeSAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzM3ID0gLT4gZGIuYnVpbGQoKSAgICAgICAgICAgICAgICAgICksIDBcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBEYnJpY19zdGQub3BlbiBkYl9wYXRoXG4gICAgICAgICggZGIucHJlcGFyZSBTUUxcImRyb3AgdmlldyBzdGRfdGFibGVzO1wiICkucnVuKClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zOCA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IERicmljX3N0ZC5vcGVuIGRiX3BhdGhcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zOSA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNDAgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljX3N0ZCAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzQxID0gLT4gZGIuX2dldF9kYl9vYmplY3RzKCkgICAgICAgICksIHtcbiAgICAgICAgICBzdGRfdGFibGVzOiAgICAgeyBuYW1lOiAnc3RkX3RhYmxlcycsICAgICB0eXBlOiAndmlldycgfSxcbiAgICAgICAgICBzdGRfdmlld3M6ICAgICAgeyBuYW1lOiAnc3RkX3ZpZXdzJywgICAgICB0eXBlOiAndmlldycgfSxcbiAgICAgICAgICBzdGRfcmVsYXRpb25zOiAgeyBuYW1lOiAnc3RkX3JlbGF0aW9ucycsICB0eXBlOiAndmlldycgfSB9XG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNDIgPSAtPiBkYi5pc19yZWFkeSAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzQzID0gLT4gZGIuYnVpbGQoKSAgICAgICAgICAgICAgICAgICksIDBcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2RicmljOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgZGVidWcgJ86pYmJkYnJfXzQ0JywgbmV3IERicmljICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3RvcmUgZXh0ZW5kcyBEYnJpY1xuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgICMgc3RvcmVfY3JlYXRlX3RhYmxlczogU1FMXCJcIlwiXG4gICAgICAgICMgICBcIlwiXCJcbiAgICAgICAgc3RvcmVfcHJvY3VyZTogU1FMXCJcIlwiXG4gICAgICAgICAgY3JlYXRlIHRhYmxlIHN0b3JlX2ZhY2V0cyAoXG4gICAgICAgICAgICBmYWNldF9rZXkgICAgICAgICAgICAgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgICBmYWNldF92YWx1ZSAgICAgICAgICAganNvbiApO1wiXCJcIlxuICAgICAgICBzdG9yZV9pbnNlcnRfZmFjZXQ6IFNRTFwiXCJcIlxuICAgICAgICAgIGluc2VydCBpbnRvIHN0b3JlX2ZhY2V0cyAoIGZhY2V0X2tleSwgZmFjZXRfdmFsdWUgKSB2YWx1ZXMgKCAkZmFjZXRfa2V5LCAkZmFjZXRfdmFsdWUgKVxuICAgICAgICAgICAgb24gY29uZmxpY3QgKCBmYWNldF9rZXkgKSBkbyB1cGRhdGUgc2V0IGZhY2V0X3ZhbHVlID0gZXhjbHVkZWQuZmFjZXRfdmFsdWU7XCJcIlwiXG4gICAgICAgIHN0b3JlX2dldF9mYWNldHM6IFNRTFwiXCJcIlxuICAgICAgICAgIHNlbGVjdCAqIGZyb20gc3RvcmVfZmFjZXRzIG9yZGVyIGJ5IGZhY2V0X2tleTtcIlwiXCJcblxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaXNfcmVhZHk6IC0+XG4gICAgICAgIGRib3MgPSBAX2dldF9kYl9vYmplY3RzKClcbiAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBkYm9zLnN0b3JlX2ZhY2V0cz8udHlwZSBpcyAndGFibGUnXG4gICAgICAgIHJldHVybiB0cnVlXG5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkZWJ1ZyAnzqliYmRicl9fNDUnLCBuZXcgRGJyaWNfc3RvcmUgJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBkYnMgPSBEYnJpY19zdG9yZS5vcGVuICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgZGJzLnN0YXRlbWVudHMuc3RvcmVfY3JlYXRlX3RhYmxlcy5ydW4oKVxuICAgICAgZm9yIHJvdyBmcm9tIGRicy5zdGF0ZW1lbnRzLmdldF9zY2hlbWEuaXRlcmF0ZSgpXG4gICAgICAgIGhlbHAgJ86pYmJkYnJfXzQ2Jywgcm93XG4gICAgICBkYnMuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAnb25lJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAxICAgICAgICksIH1cbiAgICAgIGRicy5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0d28nLCAgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDIgICAgICAgKSwgfVxuICAgICAgZGJzLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMyAgICAgICApLCB9XG4gICAgICBkYnMuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAnaWlpJyAgICksIH1cbiAgICAgIGRicy5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0cnVlJywgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IHRydWUgICAgKSwgfVxuICAgICAgZGJzLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ2ZhbHNlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgZmFsc2UgICApLCB9XG4gICAgICBmb3Igcm93IGZyb20gZGJzLnN0YXRlbWVudHMuc3RvcmVfZ2V0X2ZhY2V0cy5pdGVyYXRlKClcbiAgICAgICAgcm93ID0geyByb3cuLi4sIHsgZmFjZXRfdmFsdWU6ICggSlNPTi5wYXJzZSByb3cuZmFjZXRfdmFsdWUgKSwgX3Y6IHJvdy5mYWNldF92YWx1ZSwgfS4uLiwgfVxuICAgICAgICBoZWxwICfOqWJiZGJyX180NycsIHJvd1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb19pbmZpbml0ZV9wcm94eSgpXG4gICMgZGVtb19jb2xvcmZ1bF9wcm94eSgpXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2VzcWw6IHRlc3RzLmRicmljX2VzcWwsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkYnJpY19zdGQ6IHRlc3RzLmRicmljX3N0ZCwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlamVjdF9ub25jb25mb3JtYW50X2J1aWxkX3N0YXRlbWVudHM6IHRlc3RzLnJlamVjdF9ub25jb25mb3JtYW50X2J1aWxkX3N0YXRlbWVudHMsIH1cblxuXG4iXX0=
//# sourceURL=../src/test-dbric.coffee