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
          var Ωbbdbr__13;
          this.throws((Ωbbdbr__13 = function() {
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
        // folder_path = '/tmp/bricbrac-test' # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        db_path = PATH.join(folder_path, 'bricabrac.sqlite');
        remove(db_path);
        help('Ωbbdbr__14', {db_path});
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__15;
          db = new Dbric(db_path);
          this.eq((Ωbbdbr__15 = function() {
            return db.is_ready;
          }), true);
          return null;
        })();
        return (() => {          //.....................................................................................................
          var db, Ωbbdbr__16, Ωbbdbr__17, Ωbbdbr__18, Ωbbdbr__19;
          db = Dbric.open(db_path);
          this.eq((Ωbbdbr__16 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__17 = function() {
            return db._get_db_objects();
          }), {});
          this.eq((Ωbbdbr__18 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__19 = function() {
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
        // folder_path = '/tmp/bricbrac-test' # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        db_path = PATH.join(folder_path, 'bricabrac.sqlite');
        remove(db_path);
        help('Ωbbdbr__20', {db_path});
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__21, Ωbbdbr__22, Ωbbdbr__23, Ωbbdbr__24;
          db = new Dbric(db_path);
          this.eq((Ωbbdbr__21 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__22 = function() {
            return db.cfg.prefix;
          }), '(NOPREFIX)');
          this.eq((Ωbbdbr__23 = function() {
            return db.prefix;
          }), '');
          this.eq((Ωbbdbr__24 = function() {
            return db.full_prefix;
          }), '');
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__25, Ωbbdbr__26, Ωbbdbr__27, Ωbbdbr__28;
          db = new Dbric_std(db_path);
          this.eq((Ωbbdbr__25 = function() {
            return db.is_ready;
          }), false);
          this.eq((Ωbbdbr__26 = function() {
            return db.cfg.prefix;
          }), 'std');
          this.eq((Ωbbdbr__27 = function() {
            return db.prefix;
          }), 'std');
          this.eq((Ωbbdbr__28 = function() {
            return db.full_prefix;
          }), 'std_');
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__29, Ωbbdbr__30, Ωbbdbr__31, Ωbbdbr__32, Ωbbdbr__33;
          db = Dbric_std.open(db_path);
          this.eq((Ωbbdbr__29 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__30 = function() {
            return db instanceof Dbric_std;
          }), true);
          this.eq((Ωbbdbr__31 = function() {
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
          this.eq((Ωbbdbr__32 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__33 = function() {
            return db.build();
          }), 0);
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__34, Ωbbdbr__35, Ωbbdbr__36, Ωbbdbr__37, Ωbbdbr__38;
          db = Dbric_std.open(db_path);
          this.eq((Ωbbdbr__34 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__35 = function() {
            return db instanceof Dbric_std;
          }), true);
          this.eq((Ωbbdbr__36 = function() {
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
          this.eq((Ωbbdbr__37 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__38 = function() {
            return db.build();
          }), 0);
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__39;
          db = Dbric_std.open(db_path);
          (db.prepare(SQL`drop view std_tables;`)).run();
          this.eq((Ωbbdbr__39 = function() {
            return db.is_ready;
          }), false);
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__40, Ωbbdbr__41, Ωbbdbr__42, Ωbbdbr__43, Ωbbdbr__44;
          db = Dbric_std.open(db_path);
          this.eq((Ωbbdbr__40 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__41 = function() {
            return db instanceof Dbric_std;
          }), true);
          this.eq((Ωbbdbr__42 = function() {
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
          this.eq((Ωbbdbr__43 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__44 = function() {
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
      debug('Ωbbdbr__45', new Dbric('/dev/shm/bricabrac.sqlite'));
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
        debug('Ωbbdbr__46', new Dbric_store('/dev/shm/bricabrac.sqlite'));
        dbs = Dbric_store.open('/dev/shm/bricabrac.sqlite');
        dbs.statements.store_create_tables.run();
        for (row of dbs.statements.get_schema.iterate()) {
          help('Ωbbdbr__47', row);
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
          results.push(help('Ωbbdbr__48', row));
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
      var App_error, Division_by_zero, app_1, app_3, calculate, call_site, cause, column_nr, div, error, fn_name, getCallSites, guytest_cfg, i, len, line_nr, path, ref, results, throw_from;
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
      // ( new Test guytest_cfg ).test { dbric_esql: tests.dbric_esql, }
      // ( new Test guytest_cfg ).test { dbric_std: tests.dbric_std, }
      // ( new Test guytest_cfg ).test { reject_nonconformant_build_statements: tests.reject_nonconformant_build_statements, }
      throw_from = function(error_1, message) {
        var error_2;
        error_2 = new Error(message);
        error_2.cause = error_1;
        throw error_2;
      };
      Division_by_zero = class Division_by_zero extends Error {};
      App_error = class App_error extends Error {};
      //---------------------------------------------------------------------------------------------------------
      div = function(a, b) {
        if (b === 0) {
          throw new Division_by_zero("Ωbbdbr__49 b cannot be zero");
        }
        return a / b;
      };
      //---------------------------------------------------------------------------------------------------------
      calculate = function(a, b) {
        return 2 * div(a, b);
      };
      //=========================================================================================================
      app_1 = function(n) {
        var error, k;
        try {
          k = calculate(100, n);
        } catch (error1) {
          error = error1;
          throw new App_error("Ωbbdbr__50 something went wrong");
        }
        return {n, k};
      };
      //=========================================================================================================
      app_3 = function(n) {
        var cause, k;
        try {
          k = calculate(100, n);
        } catch (error1) {
          cause = error1;
          throw new App_error("Ωbbdbr__51 something went wrong", {cause});
        }
        return {n, k};
      };
      // debug 'Ωbbdbr__52', app_3 7
      // debug 'Ωbbdbr__53', app_3
      cause = new Error("Ωbbdbr__54");
      try {
        throw new Error("Ωbbdbr__55", {cause});
      } catch (error1) {
        error = error1;
        info('Ωbbdbr__56', error.stack);
        urge('Ωbbdbr__57', error.cause.stack);
      }
      // d = {}
      // urge 'Ωbbdbr__58', Error.captureStackTrace d
      // urge 'Ωbbdbr__59', d.stack
      /* NOTE setting `sourceMap` not needed when NodeJS is run with `--enable-source-maps` */
      ({getCallSites} = require('node:util'));
      ref = getCallSites({
        sourceMap: true
      });
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        call_site = ref[i];
        ({
          functionName: fn_name,
          scriptName: path,
          lineNumber: line_nr,
          columnNumber: column_nr
        } = call_site);
        if (fn_name === '') {
          fn_name = '[anonymous]';
        }
        results.push(urge('Ωbbdbr__60', `${green(path)}:${blue(line_nr)}:${red(column_nr)}:${gold(fn_name)}()`));
      }
      return results;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEVBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFB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Q0FBUSxXQUFSLENBQW5CO0FBQ0E7OztBQUFBO01BQUEsS0FBQSxxQ0FBQTs7UUFDRSxDQUFBO1VBQUUsWUFBQSxFQUFjLE9BQWhCO1VBQ0UsVUFBQSxFQUFjLElBRGhCO1VBRUUsVUFBQSxFQUFjLE9BRmhCO1VBR0UsWUFBQSxFQUFjO1FBSGhCLENBQUEsR0FHZ0MsU0FIaEM7UUFJQSxJQUEyQixPQUFBLEtBQVcsRUFBdEM7VUFBQSxPQUFBLEdBQVUsY0FBVjs7cUJBQ0EsSUFBQSxDQUFLLFlBQUwsRUFBbUIsQ0FBQSxDQUFBLENBQUcsS0FBQSxDQUFNLElBQU4sQ0FBSCxDQUFBLENBQUEsQ0FBQSxDQUFpQixJQUFBLENBQUssT0FBTCxDQUFqQixDQUFBLENBQUEsQ0FBQSxDQUFpQyxHQUFBLENBQUksU0FBSixDQUFqQyxDQUFBLENBQUEsQ0FBQSxDQUFrRCxJQUFBLENBQUssT0FBTCxDQUFsRCxDQUFBLEVBQUEsQ0FBbkI7TUFORixDQUFBOztJQXZEc0MsQ0FBQSxJQUF4Qzs7QUFsUEEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtZGJyaWMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcbkZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnJlbW92ZSA9ICggcGF0aCApIC0+XG4gIHRyeVxuICAgIEZTLnVubGlua1N5bmMgcGF0aFxuICAgIGhlbHAgJ86pYmJkYnJfX18xJywgXCJyZW1vdmVkICN7cnByIHBhdGh9XCJcbiAgY2F0Y2ggZXJyb3JcbiAgICB0aHJvdyBlcnJvciB1bmxlc3MgZXJyb3IuY29kZSBpcyAnRU5PRU5UJ1xuICAgIHVyZ2UgJ86pYmJkYnJfX18yJywgXCJubyBzdWNoIEZTIG9iamVjdDogI3tycHIgcGF0aH1cIlxuICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfZXNxbDogLT5cbiAgICB7IGVzcWwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqliYmRicl9fXzMgPSAtPiBpbnRlcm5hbHMudHlwZV9vZiBlc3FsLnVucXVvdGVfbmFtZSApLCAnZnVuY3Rpb24nXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX180ID0gLT4gZXNxbC51bnF1b3RlX25hbWUgJ2FiYycgICAgICAgICAgICAgKSwgJ2FiYydcbiAgICBAZXEgICAgICggzqliYmRicl9fXzUgPSAtPiBlc3FsLnVucXVvdGVfbmFtZSAnXCJhYmNcIicgICAgICAgICAgICksICdhYmMnXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX182ID0gLT4gZXNxbC51bnF1b3RlX25hbWUgJ1wiYWJcIlwiY1wiJyAgICAgICAgICksICdhYlwiYydcbiAgICBAdGhyb3dzICggzqliYmRicl9fXzcgPSAtPiBlc3FsLnVucXVvdGVfbmFtZSAnJyAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBuYW1lL1xuICAgIEB0aHJvd3MgKCDOqWJiZGJyX19fOCA9IC0+IGVzcWwudW5xdW90ZV9uYW1lICdcIicgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBuYW1lL1xuICAgIEB0aHJvd3MgKCDOqWJiZGJyX19fOSA9IC0+IGVzcWwudW5xdW90ZV9uYW1lICdcIlwiJyAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgbmFtZS9cbiAgICBAdGhyb3dzICggzqliYmRicl9fMTAgPSAtPiBlc3FsLnVucXVvdGVfbmFtZSBmYWxzZSAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0LCBnb3QgYSBib29sZWFuL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlamVjdF9ub25jb25mb3JtYW50X2J1aWxkX3N0YXRlbWVudHM6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICB7IHRlbXAsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3RlbXAoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgRGJyaWNfbm9uY29uZm9ybSBleHRlbmRzIERicmljXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiXG4gICAgICAgICAgY3JlYXRlIHRhYmxlIG5vbmNvbmZvcm1fb25lICggYSB0ZXh0IHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcIlxuICAgICAgICAgIC0tIHRoaXMgY29tbWVudCBzaG91bGRuJ3QgYmUgaGVyZVxuICAgICAgICAgIGNyZWF0ZSB2aWV3IG5vbmNvbmZvcm1fdHdvIGFzIHNlbGVjdCAqIGZyb20gbm9uY29uZm9ybV9vbmU7XCJcIlwiXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRlbXAud2l0aF9kaXJlY3RvcnkgeyBrZWVwOiBmYWxzZSwgfSwgKHsgcGF0aDogZm9sZGVyX3BhdGgsIH0pID0+XG4gICAgICBkYl9wYXRoID0gUEFUSC5qb2luIGZvbGRlcl9wYXRoLCAnYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBuZXcgRGJyaWNfbm9uY29uZm9ybSBkYl9wYXRoXG4gICAgICAgIEB0aHJvd3MgKCDOqWJiZGJyX18xMSA9IC0+IGRiLmlzX3JlYWR5ICksIC8xIG91dCBvZiAyIGJ1aWxkIHN0YXRlbWVudFxcKHNcXCkgY291bGQgbm90IGJlIHBhcnNlZC9cbiAgICAgICAgQGVxICAgICAoIM6pYmJkYnJfXzEyID0gLT4gZGIuX2dldF9vYmplY3RzX2luX2J1aWxkX3N0YXRlbWVudHMoKT8uZXJyb3JfY291bnQgKSwgMVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBAdGhyb3dzICggzqliYmRicl9fMTMgPSAtPiBEYnJpY19ub25jb25mb3JtLm9wZW4gZGJfcGF0aCApLCAvMSBvdXQgb2YgMiBidWlsZCBzdGF0ZW1lbnRcXChzXFwpIGNvdWxkIG5vdCBiZSBwYXJzZWQvXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfc3RkOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBEYnJpY19zdGQsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgeyB0ZW1wLCAgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90ZW1wKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRlbXAud2l0aF9kaXJlY3RvcnkgeyBrZWVwOiBmYWxzZSwgfSwgKHsgcGF0aDogZm9sZGVyX3BhdGgsIH0pID0+XG4gICAgICAjIGZvbGRlcl9wYXRoID0gJy90bXAvYnJpY2JyYWMtdGVzdCcgIyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcbiAgICAgIGRiX3BhdGggPSBQQVRILmpvaW4gZm9sZGVyX3BhdGgsICdicmljYWJyYWMuc3FsaXRlJ1xuICAgICAgcmVtb3ZlIGRiX3BhdGhcbiAgICAgIGhlbHAgJ86pYmJkYnJfXzE0JywgeyBkYl9wYXRoLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gbmV3IERicmljIGRiX3BhdGhcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18xNSA9IC0+IGRiLmlzX3JlYWR5ICksIHRydWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBEYnJpYy5vcGVuIGRiX3BhdGhcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18xNiA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMTcgPSAtPiBkYi5fZ2V0X2RiX29iamVjdHMoKSAgICAgICAgKSwge31cbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18xOCA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMTkgPSAtPiBkYi5idWlsZCgpICAgICAgICAgICAgICAgICAgKSwgMFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdGVtcC53aXRoX2RpcmVjdG9yeSB7IGtlZXA6IGZhbHNlLCB9LCAoeyBwYXRoOiBmb2xkZXJfcGF0aCwgfSkgPT5cbiAgICAgICMgZm9sZGVyX3BhdGggPSAnL3RtcC9icmljYnJhYy10ZXN0JyAjICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxuICAgICAgZGJfcGF0aCA9IFBBVEguam9pbiBmb2xkZXJfcGF0aCwgJ2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICByZW1vdmUgZGJfcGF0aFxuICAgICAgaGVscCAnzqliYmRicl9fMjAnLCB7IGRiX3BhdGgsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBuZXcgRGJyaWMgZGJfcGF0aFxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzIxID0gLT4gZGIuaXNfcmVhZHkgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzIyID0gLT4gZGIuY2ZnLnByZWZpeCAgICAgKSwgJyhOT1BSRUZJWCknXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjMgPSAtPiBkYi5wcmVmaXggICAgICAgICApLCAnJ1xuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI0ID0gLT4gZGIuZnVsbF9wcmVmaXggICAgKSwgJydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBuZXcgRGJyaWNfc3RkIGRiX3BhdGhcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yNSA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICksIGZhbHNlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjYgPSAtPiBkYi5jZmcucHJlZml4ICAgICApLCAnc3RkJ1xuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI3ID0gLT4gZGIucHJlZml4ICAgICAgICAgKSwgJ3N0ZCdcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yOCA9IC0+IGRiLmZ1bGxfcHJlZml4ICAgICksICdzdGRfJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IERicmljX3N0ZC5vcGVuIGRiX3BhdGhcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yOSA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzAgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljX3N0ZCAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzMxID0gLT4gZGIuX2dldF9kYl9vYmplY3RzKCkgICAgICAgICksIHtcbiAgICAgICAgICBzdGRfdGFibGVzOiAgICAgeyBuYW1lOiAnc3RkX3RhYmxlcycsICAgICB0eXBlOiAndmlldycgfSxcbiAgICAgICAgICBzdGRfdmlld3M6ICAgICAgeyBuYW1lOiAnc3RkX3ZpZXdzJywgICAgICB0eXBlOiAndmlldycgfSxcbiAgICAgICAgICBzdGRfcmVsYXRpb25zOiAgeyBuYW1lOiAnc3RkX3JlbGF0aW9ucycsICB0eXBlOiAndmlldycgfSB9XG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzIgPSAtPiBkYi5pc19yZWFkeSAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzMzID0gLT4gZGIuYnVpbGQoKSAgICAgICAgICAgICAgICAgICksIDBcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBEYnJpY19zdGQub3BlbiBkYl9wYXRoXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzQgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzM1ID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpY19zdGQgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zNiA9IC0+IGRiLl9nZXRfZGJfb2JqZWN0cygpICAgICAgICApLCB7XG4gICAgICAgICAgc3RkX3RhYmxlczogICAgIHsgbmFtZTogJ3N0ZF90YWJsZXMnLCAgICAgdHlwZTogJ3ZpZXcnIH0sXG4gICAgICAgICAgc3RkX3ZpZXdzOiAgICAgIHsgbmFtZTogJ3N0ZF92aWV3cycsICAgICAgdHlwZTogJ3ZpZXcnIH0sXG4gICAgICAgICAgc3RkX3JlbGF0aW9uczogIHsgbmFtZTogJ3N0ZF9yZWxhdGlvbnMnLCAgdHlwZTogJ3ZpZXcnIH0gfVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzM3ID0gLT4gZGIuaXNfcmVhZHkgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zOCA9IC0+IGRiLmJ1aWxkKCkgICAgICAgICAgICAgICAgICApLCAwXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gRGJyaWNfc3RkLm9wZW4gZGJfcGF0aFxuICAgICAgICAoIGRiLnByZXBhcmUgU1FMXCJkcm9wIHZpZXcgc3RkX3RhYmxlcztcIiApLnJ1bigpXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzkgPSAtPiBkYi5pc19yZWFkeSAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBEYnJpY19zdGQub3BlbiBkYl9wYXRoXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNDAgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzQxID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpY19zdGQgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180MiA9IC0+IGRiLl9nZXRfZGJfb2JqZWN0cygpICAgICAgICApLCB7XG4gICAgICAgICAgc3RkX3RhYmxlczogICAgIHsgbmFtZTogJ3N0ZF90YWJsZXMnLCAgICAgdHlwZTogJ3ZpZXcnIH0sXG4gICAgICAgICAgc3RkX3ZpZXdzOiAgICAgIHsgbmFtZTogJ3N0ZF92aWV3cycsICAgICAgdHlwZTogJ3ZpZXcnIH0sXG4gICAgICAgICAgc3RkX3JlbGF0aW9uczogIHsgbmFtZTogJ3N0ZF9yZWxhdGlvbnMnLCAgdHlwZTogJ3ZpZXcnIH0gfVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzQzID0gLT4gZGIuaXNfcmVhZHkgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180NCA9IC0+IGRiLmJ1aWxkKCkgICAgICAgICAgICAgICAgICApLCAwXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVxdWlyZV9kYnJpYzogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIGRlYnVnICfOqWJiZGJyX180NScsIG5ldyBEYnJpYyAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3N0b3JlIGV4dGVuZHMgRGJyaWNcbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICAjIHN0b3JlX2NyZWF0ZV90YWJsZXM6IFNRTFwiXCJcIlxuICAgICAgICAjICAgXCJcIlwiXG4gICAgICAgIHN0b3JlX3Byb2N1cmU6IFNRTFwiXCJcIlxuICAgICAgICAgIGNyZWF0ZSB0YWJsZSBzdG9yZV9mYWNldHMgKFxuICAgICAgICAgICAgZmFjZXRfa2V5ICAgICAgICAgICAgIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgICAgZmFjZXRfdmFsdWUgICAgICAgICAgIGpzb24gKTtcIlwiXCJcbiAgICAgICAgc3RvcmVfaW5zZXJ0X2ZhY2V0OiBTUUxcIlwiXCJcbiAgICAgICAgICBpbnNlcnQgaW50byBzdG9yZV9mYWNldHMgKCBmYWNldF9rZXksIGZhY2V0X3ZhbHVlICkgdmFsdWVzICggJGZhY2V0X2tleSwgJGZhY2V0X3ZhbHVlIClcbiAgICAgICAgICAgIG9uIGNvbmZsaWN0ICggZmFjZXRfa2V5ICkgZG8gdXBkYXRlIHNldCBmYWNldF92YWx1ZSA9IGV4Y2x1ZGVkLmZhY2V0X3ZhbHVlO1wiXCJcIlxuICAgICAgICBzdG9yZV9nZXRfZmFjZXRzOiBTUUxcIlwiXCJcbiAgICAgICAgICBzZWxlY3QgKiBmcm9tIHN0b3JlX2ZhY2V0cyBvcmRlciBieSBmYWNldF9rZXk7XCJcIlwiXG5cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGlzX3JlYWR5OiAtPlxuICAgICAgICBkYm9zID0gQF9nZXRfZGJfb2JqZWN0cygpXG4gICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3MgZGJvcy5zdG9yZV9mYWNldHM/LnR5cGUgaXMgJ3RhYmxlJ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGVidWcgJ86pYmJkYnJfXzQ2JywgbmV3IERicmljX3N0b3JlICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgZGJzID0gRGJyaWNfc3RvcmUub3BlbiAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIGRicy5zdGF0ZW1lbnRzLnN0b3JlX2NyZWF0ZV90YWJsZXMucnVuKClcbiAgICAgIGZvciByb3cgZnJvbSBkYnMuc3RhdGVtZW50cy5nZXRfc2NoZW1hLml0ZXJhdGUoKVxuICAgICAgICBoZWxwICfOqWJiZGJyX180NycsIHJvd1xuICAgICAgZGJzLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ29uZScsICAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMSAgICAgICApLCB9XG4gICAgICBkYnMuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndHdvJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAyICAgICAgICksIH1cbiAgICAgIGRicy5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDMgICAgICAgKSwgfVxuICAgICAgZGJzLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgJ2lpaScgICApLCB9XG4gICAgICBkYnMuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndHJ1ZScsICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSB0cnVlICAgICksIH1cbiAgICAgIGRicy5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICdmYWxzZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IGZhbHNlICAgKSwgfVxuICAgICAgZm9yIHJvdyBmcm9tIGRicy5zdGF0ZW1lbnRzLnN0b3JlX2dldF9mYWNldHMuaXRlcmF0ZSgpXG4gICAgICAgIHJvdyA9IHsgcm93Li4uLCB7IGZhY2V0X3ZhbHVlOiAoIEpTT04ucGFyc2Ugcm93LmZhY2V0X3ZhbHVlICksIF92OiByb3cuZmFjZXRfdmFsdWUsIH0uLi4sIH1cbiAgICAgICAgaGVscCAnzqliYmRicl9fNDgnLCByb3dcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2VzcWw6IHRlc3RzLmRicmljX2VzcWwsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX3N0ZDogdGVzdHMuZGJyaWNfc3RkLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyByZWplY3Rfbm9uY29uZm9ybWFudF9idWlsZF9zdGF0ZW1lbnRzOiB0ZXN0cy5yZWplY3Rfbm9uY29uZm9ybWFudF9idWlsZF9zdGF0ZW1lbnRzLCB9XG5cbiAgdGhyb3dfZnJvbSA9ICggZXJyb3JfMSwgbWVzc2FnZSApIC0+XG4gICAgZXJyb3JfMiA9IG5ldyBFcnJvciBtZXNzYWdlXG4gICAgZXJyb3JfMi5jYXVzZSA9IGVycm9yXzFcbiAgICB0aHJvdyBlcnJvcl8yXG5cbiAgY2xhc3MgRGl2aXNpb25fYnlfemVybyAgZXh0ZW5kcyBFcnJvclxuICBjbGFzcyBBcHBfZXJyb3IgICAgICAgICBleHRlbmRzIEVycm9yXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkaXYgPSAoIGEsIGIgKSAtPlxuICAgIHRocm93IG5ldyBEaXZpc2lvbl9ieV96ZXJvIFwizqliYmRicl9fNDkgYiBjYW5ub3QgYmUgemVyb1wiIGlmIGIgaXMgMFxuICAgIHJldHVybiBhIC8gYlxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2FsY3VsYXRlID0gKCBhLCBiICkgLT5cbiAgICByZXR1cm4gMiAqIGRpdiBhLCBiXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBhcHBfMSA9ICggbiApIC0+XG4gICAgdHJ5XG4gICAgICBrID0gY2FsY3VsYXRlIDEwMCwgblxuICAgIGNhdGNoIGVycm9yXG4gICAgICB0aHJvdyBuZXcgQXBwX2Vycm9yIFwizqliYmRicl9fNTAgc29tZXRoaW5nIHdlbnQgd3JvbmdcIlxuICAgIHJldHVybiB7IG4sIGssIH1cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGFwcF8zID0gKCBuICkgLT5cbiAgICB0cnlcbiAgICAgIGsgPSBjYWxjdWxhdGUgMTAwLCBuXG4gICAgY2F0Y2ggY2F1c2VcbiAgICAgIHRocm93IG5ldyBBcHBfZXJyb3IgXCLOqWJiZGJyX181MSBzb21ldGhpbmcgd2VudCB3cm9uZ1wiLCB7IGNhdXNlLCB9XG4gICAgcmV0dXJuIHsgbiwgaywgfVxuXG4gICMgZGVidWcgJ86pYmJkYnJfXzUyJywgYXBwXzMgN1xuICAjIGRlYnVnICfOqWJiZGJyX181MycsIGFwcF8zXG4gIGNhdXNlID0gbmV3IEVycm9yIFwizqliYmRicl9fNTRcIlxuICB0cnkgdGhyb3cgbmV3IEVycm9yIFwizqliYmRicl9fNTVcIiwgeyBjYXVzZSwgfSBjYXRjaCBlcnJvclxuICAgIGluZm8gJ86pYmJkYnJfXzU2JywgZXJyb3Iuc3RhY2tcbiAgICB1cmdlICfOqWJiZGJyX181NycsIGVycm9yLmNhdXNlLnN0YWNrXG4gICAgIyBkID0ge31cbiAgICAjIHVyZ2UgJ86pYmJkYnJfXzU4JywgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgZFxuICAgICMgdXJnZSAnzqliYmRicl9fNTknLCBkLnN0YWNrXG5cbiAgICAjIyMgTk9URSBzZXR0aW5nIGBzb3VyY2VNYXBgIG5vdCBuZWVkZWQgd2hlbiBOb2RlSlMgaXMgcnVuIHdpdGggYC0tZW5hYmxlLXNvdXJjZS1tYXBzYCAjIyNcbiAgeyBnZXRDYWxsU2l0ZXMgfSA9IHJlcXVpcmUgJ25vZGU6dXRpbCdcbiAgZm9yIGNhbGxfc2l0ZSBpbiBnZXRDYWxsU2l0ZXMgeyBzb3VyY2VNYXA6IHRydWUsIH1cbiAgICB7IGZ1bmN0aW9uTmFtZTogZm5fbmFtZSxcbiAgICAgIHNjcmlwdE5hbWU6ICAgcGF0aCxcbiAgICAgIGxpbmVOdW1iZXI6ICAgbGluZV9ucixcbiAgICAgIGNvbHVtbk51bWJlcjogY29sdW1uX25yLCAgfSA9IGNhbGxfc2l0ZVxuICAgIGZuX25hbWUgPSAnW2Fub255bW91c10nIGlmIGZuX25hbWUgaXMgJydcbiAgICB1cmdlICfOqWJiZGJyX182MCcsIFwiI3tncmVlbiBwYXRofToje2JsdWUgbGluZV9ucn06I3tyZWQgY29sdW1uX25yfToje2dvbGQgZm5fbmFtZX0oKVwiXG5cbiJdfQ==
//# sourceURL=../src/test-dbric.coffee