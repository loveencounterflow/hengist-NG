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

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

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
    }
    // urge 'Ωbbdbr___2', "no such FS object: #{rpr path}"
    return null;
  };

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    dbric_esql: function() {
      var IDN, LIT, VEC, internals, unquote_name, Ωbbdbr__10, Ωbbdbr__11, Ωbbdbr__12, Ωbbdbr__13, Ωbbdbr__14, Ωbbdbr__15, Ωbbdbr__16, Ωbbdbr__17, Ωbbdbr___3, Ωbbdbr___4, Ωbbdbr___5, Ωbbdbr___6, Ωbbdbr___7, Ωbbdbr___8, Ωbbdbr___9;
      ({LIT, IDN, VEC, unquote_name, internals} = SFMODULES.unstable.require_dbric());
      //.......................................................................................................
      this.eq((Ωbbdbr___3 = function() {
        return internals.type_of(unquote_name);
      }), 'function');
      this.eq((Ωbbdbr___4 = function() {
        return unquote_name('x');
      }), 'x');
      this.eq((Ωbbdbr___4 = function() {
        return unquote_name('"x"');
      }), 'x');
      this.eq((Ωbbdbr___4 = function() {
        return unquote_name('abc');
      }), 'abc');
      this.eq((Ωbbdbr___5 = function() {
        return unquote_name('"abc"');
      }), 'abc');
      this.eq((Ωbbdbr___6 = function() {
        return unquote_name('"ab""c"');
      }), 'ab"c');
      this.throws((Ωbbdbr___7 = function() {
        return unquote_name('');
      }), /expected a non-empty text, got an empty text/);
      this.throws((Ωbbdbr___8 = function() {
        return unquote_name('"');
      }), /expected a quoted non-empty text, got a quote/);
      this.eq((Ωbbdbr___9 = function() {
        return unquote_name('""');
      }), '');
      this./* NOTE SQLite does accept a quoted empty string as name */throws((Ωbbdbr__10 = function() {
        return unquote_name(false);
      }), /expected a text, got a boolean/);
      //.......................................................................................................
      this.eq((Ωbbdbr__11 = function() {
        return IDN('abc');
      }), '"abc"');
      this.eq((Ωbbdbr__12 = function() {
        return IDN('A"bc"');
      }), '"A""bc"""');
      this.eq((Ωbbdbr__13 = function() {
        return LIT('abc');
      }), "'abc'");
      this.eq((Ωbbdbr__14 = function() {
        return LIT("A'bc'");
      }), "'A''bc'''");
      this.throws((Ωbbdbr__15 = function() {
        return VEC('abc');
      }), /expected a list/);
      this.eq((Ωbbdbr__16 = function() {
        return VEC(['abc']);
      }), `( 'abc' )`);
      this.eq((Ωbbdbr__17 = function() {
        return VEC(['abc', 1, true, false]);
      }), `( 'abc', 1, 1, 0 )`);
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
        (() => {          // help 'Ωbbdbr__18', { db_path, }
          //.....................................................................................................
          var db, Ωbbdbr__19;
          db = new Dbric(db_path);
          this.eq((Ωbbdbr__19 = function() {
            return db.is_ready;
          }), true);
          return null;
        })();
        return (() => {          //.....................................................................................................
          var db, Ωbbdbr__20, Ωbbdbr__21, Ωbbdbr__22, Ωbbdbr__23;
          db = new Dbric(db_path);
          this.eq((Ωbbdbr__20 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__21 = function() {
            return db._get_db_objects();
          }), {});
          this.eq((Ωbbdbr__22 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__23 = function() {
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
        (() => {          // help 'Ωbbdbr__24', { db_path, }
          //.....................................................................................................
          var db, Ωbbdbr__25;
          db = new Dbric(db_path);
          this.eq((Ωbbdbr__25 = function() {
            return db.is_ready;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__26;
          db = new Dbric_std(db_path);
          this.eq((Ωbbdbr__26 = function() {
            return db.is_ready;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          var _, db, o, objects, Ωbbdbr__27, Ωbbdbr__28, Ωbbdbr__29, Ωbbdbr__30, Ωbbdbr__31, Ωbbdbr__32, Ωbbdbr__33;
          db = new Dbric_std(db_path);
          this.eq((Ωbbdbr__27 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__28 = function() {
            return db instanceof Dbric_std;
          }), true);
          objects = new Set((function() {
            var ref, results;
            ref = db._get_db_objects();
            results = [];
            for (_ in ref) {
              o = ref[_];
              results.push(`${o.type}:${o.name}`);
            }
            return results;
          })());
          this.eq((Ωbbdbr__29 = function() {
            return objects.has('view:std_tables');
          }), true);
          this.eq((Ωbbdbr__30 = function() {
            return objects.has('view:std_views');
          }), true);
          this.eq((Ωbbdbr__31 = function() {
            return objects.has('view:std_relations');
          }), true);
          this.eq((Ωbbdbr__32 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__33 = function() {
            return db.build();
          }), 0);
          return null;
        })();
        (() => {          //.....................................................................................................
          var _, db, o, objects, Ωbbdbr__34, Ωbbdbr__35, Ωbbdbr__36, Ωbbdbr__37, Ωbbdbr__38, Ωbbdbr__39, Ωbbdbr__40;
          db = new Dbric_std(db_path);
          this.eq((Ωbbdbr__34 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__35 = function() {
            return db instanceof Dbric_std;
          }), true);
          objects = new Set((function() {
            var ref, results;
            ref = db._get_db_objects();
            results = [];
            for (_ in ref) {
              o = ref[_];
              results.push(`${o.type}:${o.name}`);
            }
            return results;
          })());
          this.eq((Ωbbdbr__36 = function() {
            return objects.has('view:std_tables');
          }), true);
          this.eq((Ωbbdbr__37 = function() {
            return objects.has('view:std_views');
          }), true);
          this.eq((Ωbbdbr__38 = function() {
            return objects.has('view:std_relations');
          }), true);
          this.eq((Ωbbdbr__39 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__40 = function() {
            return db.build();
          }), 0);
          return null;
        })();
        (() => {          //.....................................................................................................
          var _, db, o, objects, Ωbbdbr__41, Ωbbdbr__42, Ωbbdbr__43;
          db = new Dbric_std(db_path);
          objects = new Set((function() {
            var ref, results;
            ref = db._get_db_objects();
            results = [];
            for (_ in ref) {
              o = ref[_];
              results.push(`${o.type}:${o.name}`);
            }
            return results;
          })());
          this.eq((Ωbbdbr__41 = function() {
            return objects.has('view:std_tables');
          }), true);
          (db.prepare(SQL`drop view std_tables;`)).run();
          objects = new Set((function() {
            var ref, results;
            ref = db._get_db_objects();
            results = [];
            for (_ in ref) {
              o = ref[_];
              results.push(`${o.type}:${o.name}`);
            }
            return results;
          })());
          this.eq((Ωbbdbr__42 = function() {
            return objects.has('view:std_tables');
          }), false);
          this.eq((Ωbbdbr__43 = function() {
            return db.is_ready;
          }), false);
          return null;
        })();
        (() => {          //.....................................................................................................
          var _, db, o, objects, Ωbbdbr__44, Ωbbdbr__45, Ωbbdbr__46, Ωbbdbr__47, Ωbbdbr__48, Ωbbdbr__49, Ωbbdbr__50;
          db = new Dbric_std(db_path);
          this.eq((Ωbbdbr__44 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__45 = function() {
            return db instanceof Dbric_std;
          }), true);
          objects = new Set((function() {
            var ref, results;
            ref = db._get_db_objects();
            results = [];
            for (_ in ref) {
              o = ref[_];
              results.push(`${o.type}:${o.name}`);
            }
            return results;
          })());
          this.eq((Ωbbdbr__46 = function() {
            return objects.has('view:std_tables');
          }), true);
          this.eq((Ωbbdbr__47 = function() {
            return objects.has('view:std_views');
          }), true);
          this.eq((Ωbbdbr__48 = function() {
            return objects.has('view:std_relations');
          }), true);
          this.eq((Ωbbdbr__49 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__50 = function() {
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
    dbric_std_generate_series: function() {
      var Dbric, Dbric_std, SQL, internals, temp;
      ({Dbric, Dbric_std, SQL, internals} = SFMODULES.unstable.require_dbric());
      ({temp} = SFMODULES.unstable.require_temp());
      (() => {        //.......................................................................................................
        // sqlite> select * from generate_series( 1, 10, 0 );
        // ┌───────┐
        // │ value │
        // ├───────┤
        // │ 1     │
        // │ 2     │
        // │ 3     │
        // │ 4     │
        // │ 5     │
        // │ 6     │
        // │ 7     │
        // │ 8     │
        // │ 9     │
        // │ 10    │
        // └───────┘
        // sqlite> select * from generate_series( 1, 10, 0 );
        // ┌───────┐
        // │ value │
        // ├───────┤
        // │ 1     │
        // │ 2     │
        // │ 3     │
        // │ 4     │
        // │ 5     │
        // │ 6     │
        // │ 7     │
        // │ 8     │
        // │ 9     │
        // │ 10    │
        // └───────┘
        // sqlite> select * from generate_series( 1, 1, 0 );
        // ┌───────┐
        // │ value │
        // ├───────┤
        // │ 1     │
        // └───────┘
        // sqlite> select * from generate_series( 1, 0, 0 );
        // sqlite>

        //.......................................................................................................
        var Db, db, Ωbbdbr__51, Ωbbdbr__52, Ωbbdbr__53, Ωbbdbr__54;
        Db = class Db extends Dbric_std {};
        db = new Db(':memory:');
        this.eq((Ωbbdbr__51 = function() {
          var row;
          return [
            ...((function() {
              var results;
              results = [];
              for (row of db.walk(SQL`select * from std_generate_series( 1, 10, 2 );`)) {
                results.push(row.value);
              }
              return results;
            })())
          ];
        }), [1, 3, 5, 7, 9]);
        this.eq((Ωbbdbr__52 = function() {
          var row;
          return [
            ...((function() {
              var results;
              results = [];
              for (row of db.walk(SQL`select * from std_generate_series( 1, 10, 0 );`)) {
                results.push(row.value);
              }
              return results;
            })())
          ];
        }), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.eq((Ωbbdbr__53 = function() {
          var row;
          return [
            ...((function() {
              var results;
              results = [];
              for (row of db.walk(SQL`select * from std_generate_series( 1, 1, 0 );`)) {
                results.push(row.value);
              }
              return results;
            })())
          ];
        }), [1]);
        this.eq((Ωbbdbr__54 = function() {
          var row;
          return [
            ...((function() {
              var results;
              results = [];
              for (row of db.walk(SQL`select * from std_generate_series( 1, 0, 0 );`)) {
                results.push(row.value);
              }
              return results;
            })())
          ];
        }), []);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    statement_inheritance: function() {
      var A, B, Bsql3, C_duplicate_function, C_duplicate_statement, C_duplicate_table, Dbric, Dbric_std, SQL, get_function_names, get_table_names, get_trigger_names, get_view_names, internals, statement_class;
      ({Dbric, Dbric_std, SQL, internals} = SFMODULES.unstable.require_dbric());
      // { temp,                     } = SFMODULES.unstable.require_temp()
      // { StatementSync,            } = require 'node:sqlite'
      Bsql3 = require('../../../apps/bricabrac-sfmodules/node_modules/better-sqlite3');
      statement_class = ((new Bsql3(':memory:')).prepare(SQL`select 1 where false;`)).constructor;
      //.......................................................................................................
      get_function_names = function(dba) {
        var name;
        return new Set((function() {
          var results, y;
          results = [];
          for (y of dba.walk(SQL`select name from pragma_function_list() order by name;`)) {
            ({name} = y);
            results.push(name);
          }
          return results;
        })());
      };
      //.......................................................................................................
      get_table_names = function(dba) {
        var name;
        return new Set((function() {
          var results, y;
          results = [];
          for (y of dba.walk(SQL`select name from sqlite_schema
where type is 'table' order by name;`)) {
            ({name} = y);
            results.push(name);
          }
          return results;
        })());
      };
      //.......................................................................................................
      get_view_names = function(dba) {
        var name;
        return new Set((function() {
          var results, y;
          results = [];
          for (y of dba.walk(SQL`select name from sqlite_schema
where type is 'view' order by name;`)) {
            ({name} = y);
            results.push(name);
          }
          return results;
        })());
      };
      //.......................................................................................................
      get_trigger_names = function(dba) {
        var name;
        return new Set((function() {
          var results, y;
          results = [];
          for (y of dba.walk(SQL`select name from sqlite_schema
where type is 'trigger' order by name;`)) {
            ({name} = y);
            results.push(name);
          }
          return results;
        })());
      };
      A = (function() {
        //.......................................................................................................
        class A extends Dbric_std {};

        A.functions = {
          fn_a: {
            value: function() {
              return 1;
            }
          }
        };

        A.statements = {
          select_a: SQL`select fn_a() as one, 2 as two;`
        };

        A.build = [SQL`create table table_a ( d text );`, SQL`create view view_a as select * from table_a;`];

        return A;

      }).call(this);
      B = (function() {
        //.......................................................................................................
        class B extends A {};

        B.functions = {
          fn_b: {
            value: function() {
              return 1;
            }
          }
        };

        B.statements = {
          select_b: SQL`select fn_b() as one, 2 as two;`
        };

        B.build = [SQL`create table table_b ( d text );`, SQL`create view view_b as select * from table_b;`];

        return B;

      }).call(this);
      C_duplicate_function = (function() {
        //.......................................................................................................
        class C_duplicate_function extends B {};

        C_duplicate_function.functions = {
          fn_b: {
            value: function() {
              return 1;
            }
          }
        };

        return C_duplicate_function;

      }).call(this);
      C_duplicate_statement = (function() {
        //.......................................................................................................
        class C_duplicate_statement extends B {};

        C_duplicate_statement.statements = {
          select_b: SQL`select fn_b() as one, 2 as two;`
        };

        return C_duplicate_statement;

      }).call(this);
      C_duplicate_table = (function() {
        //.......................................................................................................
        class C_duplicate_table extends B {};

        C_duplicate_table.build = [SQL`create table table_b ( d text );`, SQL`create view view_b as select * from table_b;`];

        return C_duplicate_table;

      }).call(this);
      (() => {        // #.....................................................................................................
        // b = new B()
        // debug 'Ωbbdbr__55', b
        // debug 'Ωbbdbr__56', 'functions: ', get_function_names b
        // debug 'Ωbbdbr__57', 'functions: ', ( get_function_names b ).has 'fn_a'
        // debug 'Ωbbdbr__58', 'functions: ', ( get_function_names b ).has 'fn_b'
        // debug 'Ωbbdbr__59', 'functions: ', ( get_function_names b ).has 'regexp'
        // debug 'Ωbbdbr__60', 'tables:    ', get_table_names b
        // debug 'Ωbbdbr__61', 'views:     ', get_view_names b
        // debug 'Ωbbdbr__62', 'triggers:  ', get_trigger_names b
        // debug 'Ωbbdbr__63', 'statements:', ( k for k of b.statements )
        // return null
        //.......................................................................................................
        var dba, function_names, table_names, trigger_names, view_names, Ωbbdbr__64, Ωbbdbr__65, Ωbbdbr__66, Ωbbdbr__67, Ωbbdbr__68, Ωbbdbr__69, Ωbbdbr__70, Ωbbdbr__71, Ωbbdbr__72, Ωbbdbr__73, Ωbbdbr__74, Ωbbdbr__75, Ωbbdbr__76, Ωbbdbr__77, Ωbbdbr__78, Ωbbdbr__79, Ωbbdbr__80;
        dba = new Dbric_std(':memory:');
        // dba = new A()
        // dba = new B()
        dba.db.function('zzz_test', {
          deterministic: true,
          varargs: false,
          directOnly: false
        }, function() {
          return "ZZZ_TEST";
        });
        //.....................................................................................................
        function_names = get_function_names(dba);
        table_names = get_table_names(dba);
        view_names = get_view_names(dba);
        trigger_names = get_trigger_names(dba);
        //.....................................................................................................
        this.eq((Ωbbdbr__64 = function() {
          return dba.statements.std_get_schema instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__65 = function() {
          return dba.statements.std_get_tables instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__66 = function() {
          return dba.statements.std_get_views instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__67 = function() {
          return dba.statements.std_get_relations instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__68 = function() {
          return dba.statements.select_a instanceof statement_class;
        }), false);
        this.eq((Ωbbdbr__69 = function() {
          return dba.statements.select_b instanceof statement_class;
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__70 = function() {
          return function_names.has('zzz_test');
        }), true);
        this.eq((Ωbbdbr__71 = function() {
          return function_names.has('regexp');
        }), true);
        this.eq((Ωbbdbr__72 = function() {
          return function_names.has('fn_a');
        }), false);
        this.eq((Ωbbdbr__73 = function() {
          return function_names.has('fn_b');
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__74 = function() {
          return table_names.has('table_a');
        }), false);
        this.eq((Ωbbdbr__75 = function() {
          return table_names.has('table_b');
        }), false);
        this.eq((Ωbbdbr__76 = function() {
          return view_names.has('std_tables');
        }), true);
        this.eq((Ωbbdbr__77 = function() {
          return view_names.has('std_views');
        }), true);
        this.eq((Ωbbdbr__78 = function() {
          return view_names.has('std_relations');
        }), true);
        this.eq((Ωbbdbr__79 = function() {
          return view_names.has('view_a');
        }), false);
        this.eq((Ωbbdbr__80 = function() {
          return view_names.has('view_b');
        }), false);
        return null;
      })();
      (() => {        //.......................................................................................................
        var dba, function_names, table_names, trigger_names, view_names, Ωbbdbr__81, Ωbbdbr__82, Ωbbdbr__83, Ωbbdbr__84, Ωbbdbr__85, Ωbbdbr__86, Ωbbdbr__87, Ωbbdbr__88, Ωbbdbr__89, Ωbbdbr__90, Ωbbdbr__91, Ωbbdbr__92, Ωbbdbr__93, Ωbbdbr__94, Ωbbdbr__95, Ωbbdbr__96, Ωbbdbr__97;
        dba = new A();
        dba.db.function('zzz_test', {
          deterministic: true,
          varargs: false,
          directOnly: false
        }, function() {
          return "ZZZ_TEST";
        });
        //.....................................................................................................
        function_names = get_function_names(dba);
        table_names = get_table_names(dba);
        view_names = get_view_names(dba);
        trigger_names = get_trigger_names(dba);
        //.....................................................................................................
        this.eq((Ωbbdbr__81 = function() {
          return dba.statements.std_get_schema instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__82 = function() {
          return dba.statements.std_get_tables instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__83 = function() {
          return dba.statements.std_get_views instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__84 = function() {
          return dba.statements.std_get_relations instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__85 = function() {
          return dba.statements.select_a instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__86 = function() {
          return dba.statements.select_b instanceof statement_class;
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__87 = function() {
          return function_names.has('zzz_test');
        }), true);
        this.eq((Ωbbdbr__88 = function() {
          return function_names.has('regexp');
        }), true);
        this.eq((Ωbbdbr__89 = function() {
          return function_names.has('fn_a');
        }), true);
        this.eq((Ωbbdbr__90 = function() {
          return function_names.has('fn_b');
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__91 = function() {
          return table_names.has('table_a');
        }), true);
        this.eq((Ωbbdbr__92 = function() {
          return table_names.has('table_b');
        }), false);
        this.eq((Ωbbdbr__93 = function() {
          return view_names.has('std_tables');
        }), true);
        this.eq((Ωbbdbr__94 = function() {
          return view_names.has('std_views');
        }), true);
        this.eq((Ωbbdbr__95 = function() {
          return view_names.has('std_relations');
        }), true);
        this.eq((Ωbbdbr__96 = function() {
          return view_names.has('view_a');
        }), true);
        this.eq((Ωbbdbr__97 = function() {
          return view_names.has('view_b');
        }), false);
        return null;
      })();
      (() => {        //.......................................................................................................
        var dba, function_names, table_names, trigger_names, view_names, Ωbbdbr_100, Ωbbdbr_101, Ωbbdbr_102, Ωbbdbr_103, Ωbbdbr_104, Ωbbdbr_105, Ωbbdbr_106, Ωbbdbr_107, Ωbbdbr_108, Ωbbdbr_109, Ωbbdbr_110, Ωbbdbr_111, Ωbbdbr_112, Ωbbdbr_113, Ωbbdbr_114, Ωbbdbr__98, Ωbbdbr__99;
        dba = new B();
        dba.db.function('zzz_test', {
          deterministic: true,
          varargs: false,
          directOnly: false
        }, function() {
          return "ZZZ_TEST";
        });
        //.....................................................................................................
        function_names = get_function_names(dba);
        table_names = get_table_names(dba);
        view_names = get_view_names(dba);
        trigger_names = get_trigger_names(dba);
        //.....................................................................................................
        this.eq((Ωbbdbr__98 = function() {
          return dba.statements.std_get_schema instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__99 = function() {
          return dba.statements.std_get_tables instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr_100 = function() {
          return dba.statements.std_get_views instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr_101 = function() {
          return dba.statements.std_get_relations instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr_102 = function() {
          return dba.statements.select_a instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr_103 = function() {
          return dba.statements.select_b instanceof statement_class;
        }), true);
        //.....................................................................................................
        this.eq((Ωbbdbr_104 = function() {
          return function_names.has('zzz_test');
        }), true);
        this.eq((Ωbbdbr_105 = function() {
          return function_names.has('regexp');
        }), true);
        this.eq((Ωbbdbr_106 = function() {
          return function_names.has('fn_a');
        }), true);
        this.eq((Ωbbdbr_107 = function() {
          return function_names.has('fn_b');
        }), true);
        //.....................................................................................................
        this.eq((Ωbbdbr_108 = function() {
          return table_names.has('table_a');
        }), true);
        this.eq((Ωbbdbr_109 = function() {
          return table_names.has('table_b');
        }), true);
        this.eq((Ωbbdbr_110 = function() {
          return view_names.has('std_tables');
        }), true);
        this.eq((Ωbbdbr_111 = function() {
          return view_names.has('std_views');
        }), true);
        this.eq((Ωbbdbr_112 = function() {
          return view_names.has('std_relations');
        }), true);
        this.eq((Ωbbdbr_113 = function() {
          return view_names.has('view_a');
        }), true);
        this.eq((Ωbbdbr_114 = function() {
          return view_names.has('view_b');
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var Ωbbdbr_115, Ωbbdbr_116, Ωbbdbr_117;
        this.throws((Ωbbdbr_115 = function() {
          return new C_duplicate_function();
        }), /a UDF or built-in function named 'fn_b' has already been declared/);
        this.throws((Ωbbdbr_116 = function() {
          return new C_duplicate_statement();
        }), /statement 'select_b' is already declared/);
        return this.throws((Ωbbdbr_117 = function() {
          return new C_duplicate_table();
        }), /table table_b already exists/);
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    disallow_overwriting_properties_with_functions: function() {
      var Dbric, Dbric_A, Dbric_B, Dbric_C, Dbric_Z, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      (() => {        // debug 'Ωbbdbr_118', new Dbric '/dev/shm/bricabrac.sqlite'
        var db, db_proto;
        db = new Dbric(':memory:');
        db_proto = Object.getPrototypeOf(db);
        // debug 'Ωbbdbr_119', Object.getOwnPropertyDescriptor db_proto, 'is_ready'
        // debug 'Ωbbdbr_120', Object.getOwnPropertyDescriptor db_proto, '_get_is_ready'
        return null;
      })();
      //-------------------------------------------------------------------------------------------------------
      /* use derived classes to assert that property descriptors are searched for in the prototype chain: */
      Dbric_A = class Dbric_A extends Dbric {};
      Dbric_B = class Dbric_B extends Dbric_A {};
      Dbric_C = class Dbric_C extends Dbric_B {};
      Dbric_Z = class Dbric_Z extends Dbric_C {};
      (() => {        //-------------------------------------------------------------------------------------------------------
        var Dbric_nonconform, Ωbbdbr_121;
        Dbric_nonconform = class Dbric_nonconform extends Dbric_Z {
          is_ready() {}

        };
        this.throws((Ωbbdbr_121 = function() {
          return new Dbric_nonconform();
        }), /not allowed to override property 'is_ready'; use '_get_is_ready instead/);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    sample_db: function() {
      var Dbric, Dbric_store, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Dbric_store = (function() {
        //=======================================================================================================
        class Dbric_store extends Dbric {};

        Dbric_store.build = [
          SQL`create table store_facets (
facet_key             text unique not null primary key,
facet_value           json );`
        ];

        Dbric_store.statements = {
          store_insert_facet: SQL`insert into store_facets ( facet_key, facet_value ) values ( $facet_key, $facet_value )
  on conflict ( facet_key ) do update set facet_value = excluded.facet_value;`,
          store_get_facets: SQL`select * from store_facets order by facet_key;`
        };

        return Dbric_store;

      }).call(this);
      (() => {        //=======================================================================================================
        var cast_row, db_path, rows, store, Ωbbdbr_122, Ωbbdbr_123, Ωbbdbr_124, Ωbbdbr_125, Ωbbdbr_126, Ωbbdbr_127;
        db_path = '/dev/shm/bricabrac.sqlite';
        store = new Dbric_store(db_path);
        store.statements.store_insert_facet.run({
          facet_key: 'one',
          facet_value: JSON.stringify(1)
        });
        store.statements.store_insert_facet.run({
          facet_key: 'two',
          facet_value: JSON.stringify(2)
        });
        store.statements.store_insert_facet.run({
          facet_key: 'three',
          facet_value: JSON.stringify(3)
        });
        store.statements.store_insert_facet.run({
          facet_key: 'three',
          facet_value: JSON.stringify('iii')
        });
        store.statements.store_insert_facet.run({
          facet_key: 'true',
          facet_value: JSON.stringify(true)
        });
        store.statements.store_insert_facet.run({
          facet_key: 'false',
          facet_value: JSON.stringify(false)
        });
        //.....................................................................................................
        cast_row = function(row) {
          if (row == null) {
            return row;
          }
          return {
            ...row,
            facet_value: JSON.parse(row.facet_value),
            _v: row.facet_value
          };
        };
        //.....................................................................................................
        rows = store.statements.store_get_facets.iterate();
        this.eq((Ωbbdbr_122 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'false',
          facet_value: false,
          _v: 'false'
        });
        this.eq((Ωbbdbr_123 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'one',
          facet_value: 1,
          _v: 1
        });
        this.eq((Ωbbdbr_124 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'three',
          facet_value: 'iii',
          _v: '"iii"'
        });
        this.eq((Ωbbdbr_125 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'true',
          facet_value: true,
          _v: 'true'
        });
        this.eq((Ωbbdbr_126 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'two',
          facet_value: 2,
          _v: 2
        });
        return this.eq((Ωbbdbr_127 = function() {
          return rows.next().done;
        }), true);
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    sample_db_with_bsql: function() {
      var Dbric, Dbric_store, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Dbric_store = (function() {
        //=======================================================================================================
        class Dbric_store extends Dbric {};

        Dbric_store.build = [
          SQL`create table store_facets (
facet_key             text unique not null primary key,
facet_value           json );`
        ];

        Dbric_store.statements = {
          // store_create_tables: SQL"""
          //   """
          store_insert_facet: SQL`insert into store_facets ( facet_key, facet_value ) values ( $facet_key, $facet_value )
  on conflict ( facet_key ) do update set facet_value = excluded.facet_value;`,
          store_get_facets: SQL`select * from store_facets order by facet_key;`
        };

        return Dbric_store;

      }).call(this);
      (() => {        //=======================================================================================================
        var cast_row, db_path, rows, store, Ωbbdbr_128, Ωbbdbr_129, Ωbbdbr_130, Ωbbdbr_131, Ωbbdbr_132, Ωbbdbr_133;
        db_path = ':memory:';
        store = new Dbric_store(db_path);
        store.statements.store_insert_facet.run({
          facet_key: 'one',
          facet_value: JSON.stringify(1)
        });
        store.statements.store_insert_facet.run({
          facet_key: 'two',
          facet_value: JSON.stringify(2)
        });
        store.statements.store_insert_facet.run({
          facet_key: 'three',
          facet_value: JSON.stringify(3)
        });
        store.statements.store_insert_facet.run({
          facet_key: 'three',
          facet_value: JSON.stringify('iii')
        });
        store.statements.store_insert_facet.run({
          facet_key: 'true',
          facet_value: JSON.stringify(true)
        });
        store.statements.store_insert_facet.run({
          facet_key: 'false',
          facet_value: JSON.stringify(false)
        });
        //.....................................................................................................
        cast_row = function(row) {
          if (row == null) {
            return row;
          }
          return {
            ...row,
            facet_value: JSON.parse(row.facet_value),
            _v: row.facet_value
          };
        };
        //.....................................................................................................
        rows = store.statements.store_get_facets.iterate();
        this.eq((Ωbbdbr_128 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'false',
          facet_value: false,
          _v: 'false'
        });
        this.eq((Ωbbdbr_129 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'one',
          facet_value: 1,
          _v: 1
        });
        this.eq((Ωbbdbr_130 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'three',
          facet_value: 'iii',
          _v: '"iii"'
        });
        this.eq((Ωbbdbr_131 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'true',
          facet_value: true,
          _v: 'true'
        });
        this.eq((Ωbbdbr_132 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'two',
          facet_value: 2,
          _v: 2
        });
        return this.eq((Ωbbdbr_133 = function() {
          return cast_row(rows.next().value);
        }), void 0);
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    udf_functions_with_nsql: function() {
      var Dbric, Dbric_squares, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Dbric_squares = (function() {
        //=======================================================================================================
        class Dbric_squares extends Dbric {
          //-----------------------------------------------------------------------------------------------------
          initialize() {
            super.initialize();
            this.create_function({
              name: 'square',
              deterministic: true,
              varargs: false,
              value: function(n) {
                return n ** 2;
              }
            });
            return null;
          }

        };

        //-----------------------------------------------------------------------------------------------------
        Dbric_squares.build = [
          SQL`create table numbers (
n number unique not null primary key );`,
          SQL`create view squares as select
  n,
  square( n ) as square
from numbers
order by n;`
        ];

        //-----------------------------------------------------------------------------------------------------
        Dbric_squares.statements = {
          insert_number: SQL`insert into numbers ( n ) values ( $n )
on conflict ( n ) do nothing;`,
          select_from_squares: SQL`select
  n,
  square
from squares
order by n;`
        };

        return Dbric_squares;

      }).call(this);
      (() => {        //=======================================================================================================
        var db_path, i, n, rows, squares, Ωbbdbr_135, Ωbbdbr_136, Ωbbdbr_137, Ωbbdbr_138, Ωbbdbr_139, Ωbbdbr_140, Ωbbdbr_141, Ωbbdbr_142, Ωbbdbr_143, Ωbbdbr_144, Ωbbdbr_145;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = new Dbric_squares(db_path);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_134', row for row from squares.statements.select_from_squares.iterate()
        rows = squares.statements.select_from_squares.iterate();
        this.eq((Ωbbdbr_135 = function() {
          return rows.next().value;
        }), {
          n: 0,
          square: 0
        });
        this.eq((Ωbbdbr_136 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1
        });
        this.eq((Ωbbdbr_137 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4
        });
        this.eq((Ωbbdbr_138 = function() {
          return rows.next().value;
        }), {
          n: 3,
          square: 9
        });
        this.eq((Ωbbdbr_139 = function() {
          return rows.next().value;
        }), {
          n: 4,
          square: 16
        });
        this.eq((Ωbbdbr_140 = function() {
          return rows.next().value;
        }), {
          n: 5,
          square: 25
        });
        this.eq((Ωbbdbr_141 = function() {
          return rows.next().value;
        }), {
          n: 6,
          square: 36
        });
        this.eq((Ωbbdbr_142 = function() {
          return rows.next().value;
        }), {
          n: 7,
          square: 49
        });
        this.eq((Ωbbdbr_143 = function() {
          return rows.next().value;
        }), {
          n: 8,
          square: 64
        });
        this.eq((Ωbbdbr_144 = function() {
          return rows.next().value;
        }), {
          n: 9,
          square: 81
        });
        this.eq((Ωbbdbr_145 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    udf_aggregates_with_nsql: function() {
      var Dbric, Dbric_squares, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Dbric_squares = (function() {
        //=======================================================================================================
        class Dbric_squares extends Dbric {
          //-----------------------------------------------------------------------------------------------------
          initialize() {
            var product;
            super.initialize();
            this.create_function({
              name: 'square',
              deterministic: true,
              varargs: false,
              value: function(n) {
                return n ** 2;
              }
            });
            this.create_aggregate_function({
              name: 'product',
              start: function() {
                return 1/* NOTE can use `null` for bSQL, but nSQL needs `1` */;
              },
              step: product = function(total, element) {
                // debug 'Ωbbdbr_146', { total, element, }
                return (total != null ? total : 1) * element;
              }
            });
            return null;
          }

        };

        //-----------------------------------------------------------------------------------------------------
        Dbric_squares.build = [
          SQL`create table numbers (
n number unique not null primary key );`,
          SQL`create view squares as select
  n,
  square( n ) as square
from numbers
order by n;`
        ];

        //-----------------------------------------------------------------------------------------------------
        Dbric_squares.statements = {
          insert_number: SQL`insert into numbers ( n ) values ( $n )
on conflict ( n ) do nothing;`,
          select_from_numbers: SQL`select n from numbers order by n;`,
          select_from_squares: SQL`select
  n,
  square,
  product( n )      as p_n,
  product( square ) as p_square
from squares
where n between $start and $stop
order by n;`
        };

        return Dbric_squares;

      }).call(this);
      (() => {        //=======================================================================================================
        var db_path, i, n, rows, squares, Ωbbdbr_148, Ωbbdbr_149, Ωbbdbr_151;
        db_path = '/dev/shm/bricabrac-udf_aggregates_with_nsql.sqlite';
        squares = new Dbric_squares(db_path);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_147', row for row from squares.statements.select_from_squares.iterate { start: 1, stop: 5, }
        rows = squares.statements.select_from_squares.iterate({
          start: 1,
          stop: 5
        });
        this.eq((Ωbbdbr_148 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1,
          p_n: 120,
          p_square: 14400
        });
        this.eq((Ωbbdbr_149 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        // echo 'Ωbbdbr_150', row for row from squares.statements.select_from_squares.iterate()
        this.throws((Ωbbdbr_151 = function() {
          return squares.statements.select_from_squares.iterate();
        }), /missing named parameters/i);
        // @eq ( Ωbbdbr_152 = -> rows.next().value ), { n: null, square: null, p_n: 1, p_square: 1 }
        // @eq ( Ωbbdbr_153 = -> rows.next().value ), null
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    udf_functions_with_bsql: function() {
      var Dbric, Dbric_squares, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Dbric_squares = (function() {
        //=======================================================================================================
        class Dbric_squares extends Dbric {
          //-----------------------------------------------------------------------------------------------------
          initialize() {
            super.initialize();
            this.create_function({
              name: 'square',
              deterministic: true,
              varargs: false,
              value: function(n) {
                return n ** 2;
              }
            });
            return null;
          }

        };

        //-----------------------------------------------------------------------------------------------------
        Dbric_squares.build = [
          SQL`create table numbers (
n number unique not null primary key );`,
          SQL`create view squares as select
  n,
  square( n ) as square
from numbers
order by n;`
        ];

        //-----------------------------------------------------------------------------------------------------
        Dbric_squares.statements = {
          insert_number: SQL`insert into numbers ( n ) values ( $n )
on conflict ( n ) do nothing;`,
          select_from_squares: SQL`select
  n,
  square
from squares
order by n;`
        };

        return Dbric_squares;

      }).call(this);
      (() => {        //=======================================================================================================
        var db_path, i, n, rows, squares, Ωbbdbr_154, Ωbbdbr_155, Ωbbdbr_156, Ωbbdbr_157, Ωbbdbr_158, Ωbbdbr_159, Ωbbdbr_160, Ωbbdbr_161, Ωbbdbr_162, Ωbbdbr_163, Ωbbdbr_164;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = new Dbric_squares(db_path);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo row for row from squares.statements.select_from_squares.iterate()
        rows = squares.statements.select_from_squares.iterate();
        this.eq((Ωbbdbr_154 = function() {
          return rows.next().value;
        }), {
          n: 0,
          square: 0
        });
        this.eq((Ωbbdbr_155 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1
        });
        this.eq((Ωbbdbr_156 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4
        });
        this.eq((Ωbbdbr_157 = function() {
          return rows.next().value;
        }), {
          n: 3,
          square: 9
        });
        this.eq((Ωbbdbr_158 = function() {
          return rows.next().value;
        }), {
          n: 4,
          square: 16
        });
        this.eq((Ωbbdbr_159 = function() {
          return rows.next().value;
        }), {
          n: 5,
          square: 25
        });
        this.eq((Ωbbdbr_160 = function() {
          return rows.next().value;
        }), {
          n: 6,
          square: 36
        });
        this.eq((Ωbbdbr_161 = function() {
          return rows.next().value;
        }), {
          n: 7,
          square: 49
        });
        this.eq((Ωbbdbr_162 = function() {
          return rows.next().value;
        }), {
          n: 8,
          square: 64
        });
        this.eq((Ωbbdbr_163 = function() {
          return rows.next().value;
        }), {
          n: 9,
          square: 81
        });
        this.eq((Ωbbdbr_164 = function() {
          return rows.next().value;
        }), void 0);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    udf_aggregates_with_bsql: function() {
      var Dbric, Dbric_squares, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Dbric_squares = (function() {
        //=======================================================================================================
        class Dbric_squares extends Dbric {
          //-----------------------------------------------------------------------------------------------------
          initialize() {
            var product, square;
            super.initialize();
            this.create_function({
              name: 'square',
              deterministic: true,
              varargs: false,
              value: square = function(n) {
                return n ** 2;
              }
            });
            this.create_aggregate_function({
              name: 'product',
              start: function() {
                return null;
              },
              step: product = function(total, element) {
                // debug 'Ωbbdbr_165', { total, element, }
                return (total != null ? total : 1) * element;
              }
            });
            return null;
          }

        };

        //-----------------------------------------------------------------------------------------------------
        Dbric_squares.build = [
          SQL`create table numbers (
n number unique not null primary key );`,
          SQL`create view squares as select
  n,
  square( n ) as square
from numbers
order by n;`
        ];

        //-----------------------------------------------------------------------------------------------------
        Dbric_squares.statements = {
          insert_number: SQL`insert into numbers ( n ) values ( $n )
on conflict ( n ) do nothing;`,
          select_from_squares: SQL`select
  n,
  square,
  product( n )      as p_n,
  product( square ) as p_square
from squares
where n between $start and $stop
order by n;`
        };

        return Dbric_squares;

      }).call(this);
      (() => {        //=======================================================================================================
        var db_path, i, n, rows, squares, Ωbbdbr_167, Ωbbdbr_168;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = new Dbric_squares(db_path);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_166', row for row from squares.statements.select_from_squares.iterate { start: 2, stop: 3, }
        rows = squares.statements.select_from_squares.iterate({
          start: 2,
          stop: 3
        });
        this.eq((Ωbbdbr_167 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4,
          p_n: 6,
          p_square: 36
        });
        this.eq((Ωbbdbr_168 = function() {
          return rows.next().value;
        }), void 0);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    udf_table_function_with_bsql: function() {
      var Dbric, Dbric_phrases, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Dbric_phrases = (function() {
        //=======================================================================================================
        class Dbric_phrases extends Dbric {
          //-----------------------------------------------------------------------------------------------------
          initialize() {
            super.initialize();
            this.create_table_function({
              name: 're_matches',
              columns: ['match', 'capture'],
              parameters: ['text', 'pattern'],
              rows: function*(text, pattern) {
                var match, regex;
                regex = new RegExp(pattern, 'g');
                for (match of text.matchAll(regex)) {
                  yield [match[0], match[1]];
                }
                return null;
              }
            });
            return null;
          }

        };

        //-----------------------------------------------------------------------------------------------------
        Dbric_phrases.build = [
          SQL`create table phrases (
phrase text unique not null primary key );`
        ];

        //-----------------------------------------------------------------------------------------------------
        Dbric_phrases.statements = {
          insert_phrase: SQL`insert into phrases ( phrase ) values ( $phrase )
on conflict ( phrase ) do nothing;`,
          select_from_phrases: SQL`select
    *
  from
    phrases as p,
    re_matches( p.phrase, $matcher ) as rx
  order by p.phrase;`
        };

        return Dbric_phrases;

      }).call(this);
      (() => {        //=======================================================================================================
        var db_path, i, len, phrase, phrases, ref, rows, Ωbbdbr_171, Ωbbdbr_172, Ωbbdbr_173, Ωbbdbr_174, Ωbbdbr_175, Ωbbdbr_176, Ωbbdbr_177, Ωbbdbr_178, Ωbbdbr_179, Ωbbdbr_180, Ωbbdbr_181, Ωbbdbr_182, Ωbbdbr_183;
        db_path = '/dev/shm/bricabrac.sqlite';
        phrases = new Dbric_phrases(db_path);
        ref = ['eleven', 'five', 'nine', 'one', 'one point five', 'seven', 'three point one'];
        for (i = 0, len = ref.length; i < len; i++) {
          phrase = ref[i];
          phrases.statements.insert_phrase.run({phrase});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_169', row for row from phrases.statements.select_from_phrases.iterate { matcher: '^.*([aeiou].e).*$', }
        // echo()
        //.....................................................................................................
        // echo 'Ωbbdbr_170', row for row from phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
        rows = phrases.statements.select_from_phrases.iterate({
          matcher: '([^aeiou]?[aeiou]+)(?=[mnv])'
        });
        this.eq((Ωbbdbr_171 = function() {
          return rows.next().value;
        }), {
          phrase: 'eleven',
          match: 'le',
          capture: 'le'
        });
        this.eq((Ωbbdbr_172 = function() {
          return rows.next().value;
        }), {
          phrase: 'eleven',
          match: 've',
          capture: 've'
        });
        this.eq((Ωbbdbr_173 = function() {
          return rows.next().value;
        }), {
          phrase: 'five',
          match: 'fi',
          capture: 'fi'
        });
        this.eq((Ωbbdbr_174 = function() {
          return rows.next().value;
        }), {
          phrase: 'nine',
          match: 'ni',
          capture: 'ni'
        });
        this.eq((Ωbbdbr_175 = function() {
          return rows.next().value;
        }), {
          phrase: 'one',
          match: 'o',
          capture: 'o'
        });
        this.eq((Ωbbdbr_176 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'o',
          capture: 'o'
        });
        this.eq((Ωbbdbr_177 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'poi',
          capture: 'poi'
        });
        this.eq((Ωbbdbr_178 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'fi',
          capture: 'fi'
        });
        this.eq((Ωbbdbr_179 = function() {
          return rows.next().value;
        }), {
          phrase: 'seven',
          match: 'se',
          capture: 'se'
        });
        this.eq((Ωbbdbr_180 = function() {
          return rows.next().value;
        }), {
          phrase: 'seven',
          match: 've',
          capture: 've'
        });
        this.eq((Ωbbdbr_181 = function() {
          return rows.next().value;
        }), {
          phrase: 'three point one',
          match: 'poi',
          capture: 'poi'
        });
        this.eq((Ωbbdbr_182 = function() {
          return rows.next().value;
        }), {
          phrase: 'three point one',
          match: ' o',
          capture: ' o'
        });
        this.eq((Ωbbdbr_183 = function() {
          return rows.next().value;
        }), void 0);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    file_mirror_as_table_function: function() {
      var Dbric, Dbric_phrases, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Dbric_phrases = (function() {
        //=======================================================================================================
        class Dbric_phrases extends Dbric {
          //-----------------------------------------------------------------------------------------------------
          initialize() {
            super.initialize();
            this.create_table_function({
              name: 'file_lines',
              columns: ['line_nr', 'line'],
              parameters: ['path'],
              rows: function*(path) {
                var eol, line, line_nr, y;
                for (y of GUY.fs.walk_lines_with_positions(path)) {
                  ({
                    lnr: line_nr,
                    line,
                    eol
                  } = y);
                  yield ({line_nr, line});
                }
                return null;
              }
            });
            return null;
          }

        };

        //-----------------------------------------------------------------------------------------------------
        Dbric_phrases.build = [
          //...................................................................................................
          SQL`create table datasources (
dskey text unique not null primary key,
path text not null );`,
          //...................................................................................................
          SQL`create view mirror as select
  *
from
  datasources as ds,
  file_lines( ds.path ) as fl
order by ds.dskey, fl.line_nr;`,
          //...................................................................................................
          SQL`create table keywords (
  dskey   text    not null,
  line_nr integer not null,
  keyword text    not null,
foreign key ( dskey ) references datasources ( dskey ),
primary key ( dskey, line_nr, keyword ) );`
        ];

        //-----------------------------------------------------------------------------------------------------
        Dbric_phrases.statements = {
          //...................................................................................................
          insert_datasource: SQL`insert into datasources ( dskey, path ) values ( $dskey, $path )
on conflict ( dskey ) do update set path = $path;`,
          //...................................................................................................
          insert_keyword: SQL`insert into keywords ( dskey, line_nr, keyword ) values ( $dskey, $line_nr, $keyword )
on conflict ( dskey, line_nr, keyword ) do nothing;`,
          //...................................................................................................
          select_from_datasources: SQL`select * from datasources order by dskey;`,
          //...................................................................................................
          select_from_keywords: SQL`select * from keywords order by keyword, dskey, line_nr;`,
          //...................................................................................................
          select_from_mirror: SQL`select * from mirror order by dskey;`
        };

        return Dbric_phrases;

      }).call(this);
      (() => {        //=======================================================================================================
        var db_path, dskey, i, keyword, keywords, len, line, line_nr, phrases, y, Ωbbdbr_184, Ωbbdbr_185;
        db_path = '/dev/shm/bricabrac.sqlite';
        phrases = new Dbric_phrases(db_path);
        this.eq((Ωbbdbr_184 = function() {
          return (phrases.prepare(SQL`pragma foreign_keys`)).get();
        }), {
          foreign_keys: 1
        });
        this.eq((Ωbbdbr_185 = function() {
          return (phrases.prepare(SQL`pragma journal_mode`)).get();
        }), {
          journal_mode: 'wal'
        });
        (() => {          // #...................................................................................................
          // do =>
          //   dskey = 'readme'
          //   path  = PATH.resolve __dirname, '../../../apps/bricabrac-sfmodules/README.md'
          //   phrases.statements.insert_datasource.run { dskey, path }
          //.....................................................................................................
          var dskey, path;
          dskey = 'package-json';
          path = PATH.resolve(__dirname, '../../../apps/bricabrac-sfmodules/package.json');
          return phrases.statements.insert_datasource.run({dskey, path});
        })();
//.....................................................................................................
// echo 'Ωbbdbr_186', row for row from phrases.statements.select_from_datasources.iterate()
// echo()
// #...................................................................................................
// echo 'Ωbbdbr_187', row for row from phrases.statements.select_from_mirror.iterate()
// echo()
//.....................................................................................................
        for (y of phrases.statements.select_from_mirror.iterate()) {
          ({dskey, line_nr, line} = y);
          keywords = line.split(/(?:\p{Z}+)|((?:\p{L}+)|(?:\p{N}+)|(?:\p{S}+))/v);
// debug 'Ωbbdbr_188', line_nr, rpr keywords
          for (i = 0, len = keywords.length; i < len; i++) {
            keyword = keywords[i];
            if (keyword == null) {
              continue;
            }
            if (keyword === '') {
              continue;
            }
            phrases.w.statements.insert_keyword.run({dskey, line_nr, keyword});
          }
        }
        // #...................................................................................................
        // echo 'Ωbbdbr_189', row for row from phrases.statements.select_from_keywords.iterate()
        // echo()
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    file_mirror_with_integrated_inserts: function() {
      var Dbric, Dbric_phrases, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Dbric_phrases = (function() {
        //=======================================================================================================
        class Dbric_phrases extends Dbric {
          //-----------------------------------------------------------------------------------------------------
          initialize() {
            super.initialize();
            //...................................................................................................
            this.create_table_function({
              name: 'split_words',
              columns: ['keyword'],
              parameters: ['line'],
              rows: function*(line) {
                var i, keyword, keywords, len;
                keywords = line.split(/(?:\p{Z}+)|((?:\p{L}+)|(?:\p{N}+)|(?:\p{S}+))/v);
// debug 'Ωbbdbr_190', line_nr, rpr keywords
                for (i = 0, len = keywords.length; i < len; i++) {
                  keyword = keywords[i];
                  if (keyword == null) {
                    continue;
                  }
                  if (keyword === '') {
                    continue;
                  }
                  yield ({keyword});
                }
                return null;
              }
            });
            //...................................................................................................
            this.create_table_function({
              name: 'file_lines',
              columns: ['line_nr', 'line'],
              parameters: ['path'],
              rows: function*(path) {
                var eol, line, line_nr, y;
                for (y of GUY.fs.walk_lines_with_positions(path)) {
                  ({
                    lnr: line_nr,
                    line,
                    eol
                  } = y);
                  yield ({line_nr, line});
                }
                return null;
              }
            });
            //...................................................................................................
            return null;
          }

        };

        //-----------------------------------------------------------------------------------------------------
        Dbric_phrases.build = [
          //...................................................................................................
          SQL`create table datasources (
dskey text unique not null primary key,
path text not null );`,
          //...................................................................................................
          SQL`create view mirror as select
  *
from
  datasources as ds,
  file_lines( ds.path ) as fl
order by ds.dskey, fl.line_nr;`,
          //...................................................................................................
          SQL`create table keywords (
  dskey   text    not null,
  line_nr integer not null,
  keyword text    not null,
foreign key ( dskey ) references datasources ( dskey ),
primary key ( dskey, line_nr, keyword ) );`
        ];

        //-----------------------------------------------------------------------------------------------------
        Dbric_phrases.statements = {
          //...................................................................................................
          insert_datasource: SQL`insert into datasources ( dskey, path ) values ( $dskey, $path )
on conflict ( dskey ) do update set path = $path;`,
          //...................................................................................................
          insert_keyword: SQL`insert into keywords ( dskey, line_nr, keyword ) values ( $dskey, $line_nr, $keyword )
on conflict ( dskey, line_nr, keyword ) do nothing;`,
          //...................................................................................................
          select_from_datasources: SQL`select * from datasources order by dskey;`,
          //...................................................................................................
          select_from_keywords: SQL`select * from keywords order by keyword, dskey, line_nr;`,
          locations_from_keyword: SQL`select * from keywords
where keyword = $keyword
order by keyword, dskey, line_nr;`,
          //...................................................................................................
          select_from_mirror: SQL`select * from mirror order by dskey;`,
          //...................................................................................................
          populate_keywords: SQL`insert into keywords ( dskey, line_nr, keyword )
  select
    ds.dskey    as dskey,
    mi.line_nr  as line_nr,
    sw.keyword  as keyword
  from datasources        as ds
  join mirror             as mi using ( dskey ),
  split_words( mi.line )  as sw
  where true -- where clause just a syntactic guard as per https://sqlite.org/lang_upsert.html
  on conflict do nothing;`
        };

        return Dbric_phrases;

      }).call(this);
      (() => {        //=======================================================================================================
        var db_path, phrases, rows, Ωbbdbr_193, Ωbbdbr_194, Ωbbdbr_196, Ωbbdbr_197, Ωbbdbr_198, Ωbbdbr_200, Ωbbdbr_201, Ωbbdbr_202, Ωbbdbr_203, Ωbbdbr_204, Ωbbdbr_205, Ωbbdbr_206, Ωbbdbr_207, Ωbbdbr_208, Ωbbdbr_209, Ωbbdbr_210;
        db_path = '/dev/shm/bricabrac.sqlite';
        phrases = new Dbric_phrases(db_path);
        // debug 'Ωbbdbr_191', phrases.teardown()
        // debug 'Ωbbdbr_192', phrases.rebuild()
        this.eq((Ωbbdbr_193 = function() {
          return (phrases.prepare(SQL`pragma foreign_keys`)).get();
        }), {
          foreign_keys: 1
        });
        this.eq((Ωbbdbr_194 = function() {
          return (phrases.prepare(SQL`pragma journal_mode`)).get();
        }), {
          journal_mode: 'wal'
        });
        (() => {          //.....................................................................................................
          var dskey, path;
          dskey = 'humdum';
          path = PATH.resolve(__dirname, '../../../assets/bricabrac/humpty-dumpty.md');
          return phrases.statements.insert_datasource.run({dskey, path});
        })();
        //.....................................................................................................
        phrases.statements.populate_keywords.run();
        //.....................................................................................................
        // echo 'Ωbbdbr_195', row for row from phrases.statements.locations_from_keyword.iterate { keyword: 'thought', }
        // echo()
        rows = phrases.statements.locations_from_keyword.iterate({
          keyword: 'thought'
        });
        this.eq((Ωbbdbr_196 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 15,
          keyword: 'thought'
        });
        this.eq((Ωbbdbr_197 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 34,
          keyword: 'thought'
        });
        this.eq((Ωbbdbr_198 = function() {
          return rows.next().value;
        }), void 0);
        //.....................................................................................................
        // echo 'Ωbbdbr_199', row for row from phrases.statements.locations_from_keyword.iterate { keyword: 'she', }
        // echo()
        rows = phrases.statements.locations_from_keyword.iterate({
          keyword: 'she'
        });
        this.eq((Ωbbdbr_200 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 2,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_201 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 3,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_202 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 4,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_203 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 5,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_204 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 15,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_205 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 17,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_206 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 18,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_207 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 26,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_208 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 34,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_209 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 36,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_210 = function() {
          return rows.next().value;
        }), void 0);
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    dbric_std_variables_and_sequences: function() {
      var Dbric_std, False, SQL, True, cfg_do_show_variables, db, freeze, internals, lets, rows, variables, Ωbbdbr_211, Ωbbdbr_212, Ωbbdbr_214, Ωbbdbr_226, Ωbbdbr_244, Ωbbdbr_246, Ωbbdbr_247, Ωbbdbr_248, Ωbbdbr_249, Ωbbdbr_250, Ωbbdbr_251, Ωbbdbr_252;
      ({Dbric_std, True, False, SQL, internals} = SFMODULES.unstable.require_dbric());
      ({lets, freeze} = SFMODULES.require_letsfreezethat_infra().simple);
      cfg_do_show_variables = false;
      //=======================================================================================================
      db = new Dbric_std(':memory:');
      //=======================================================================================================
      this.throws((Ωbbdbr_211 = function() {
        return db.std_with_variables(function() {
          return db.std_with_variables(function() {
            return null;
          });
        });
      }), /illegal to nest `std_with_variables\(\)` contexts/);
      this.throws((Ωbbdbr_212 = function() {
        return db.std_set_variable('myname', 'myvalue');
      }), /illegal to set variable/);
      // @throws ( Ωbbdbr_213 = -> db.std_get_variable 'myname'                            ), /illegal to get variable/
      this.throws((Ωbbdbr_214 = function() {
        return db.std_get_variable('myname');
      }), /unknown variable/);
      //=======================================================================================================
      variables = db._show_variables(cfg_do_show_variables);
      //.......................................................................................................
      db.std_with_variables(() => {
        var Ωbbdbr_215, Ωbbdbr_216, Ωbbdbr_217, Ωbbdbr_218, Ωbbdbr_219, Ωbbdbr_220, Ωbbdbr_221, Ωbbdbr_222;
        this.throws((Ωbbdbr_215 = function() {
          return db.std_get_variable('myname');
        }), /unknown variable/);
        this.eq((Ωbbdbr_216 = function() {
          return db._show_variables(cfg_do_show_variables);
        }), {
          'seq:global:rowid': {
            sv: 0,
            sd: 1,
            cv: 0,
            cd: 1,
            tv: void 0,
            gv: 0
          }
        });
        /* TAINT use API */
        db.state.std_variables = lets(db.state.std_variables, function(d) {
          return d['seq:app:counter'] = {
            name: 'seq:app:counter',
            value: 7,
            delta: +3
          };
        });
        this.eq((Ωbbdbr_217 = function() {
          return db._show_variables(cfg_do_show_variables);
        }), {
          'seq:app:counter': {
            sv: void 0,
            sd: void 0,
            cv: 7,
            cd: 3,
            tv: void 0,
            gv: 7
          },
          'seq:global:rowid': {
            sv: 0,
            sd: 1,
            cv: 0,
            cd: 1,
            tv: void 0,
            gv: 0
          }
        });
        this.eq((Ωbbdbr_218 = function() {
          return db.std_get_next_in_sequence('seq:app:counter');
        }), 10);
        this.eq((Ωbbdbr_219 = function() {
          return db.std_get_next_in_sequence('seq:app:counter');
        }), 13);
        db.std_set_variable('fuzz', 11.5);
        db.std_set_variable('name', 'Bob');
        this.eq((Ωbbdbr_220 = function() {
          return db.std_get_variable('fuzz');
        }), 11.5);
        this.eq((Ωbbdbr_221 = function() {
          return db.std_get_variable('name');
        }), 'Bob');
        this.eq((Ωbbdbr_222 = function() {
          return db._show_variables(cfg_do_show_variables);
        }), {
          fuzz: {
            sv: void 0,
            sd: void 0,
            cv: 11.5,
            cd: null,
            tv: void 0,
            gv: 11.5
          },
          name: {
            sv: void 0,
            sd: void 0,
            cv: 'Bob',
            cd: null,
            tv: void 0,
            gv: 'Bob'
          },
          'seq:app:counter': {
            sv: void 0,
            sd: void 0,
            cv: 13,
            cd: 3,
            tv: void 0,
            gv: 13
          },
          'seq:global:rowid': {
            sv: 0,
            sd: 1,
            cv: 0,
            cd: 1,
            tv: void 0,
            gv: 0
          }
        });
        return null;
      });
      //.......................................................................................................
      db.std_with_variables({
        name: 'Alice',
        job: 'engineer'
      }, () => {
        var Ωbbdbr_223, Ωbbdbr_225;
        this.eq((Ωbbdbr_223 = function() {
          return db.std_get_variable('name');
        }), 'Alice');
        // debug 'Ωbbdbr_224', { name, job, }
        this.eq((Ωbbdbr_225 = function() {
          return db._show_variables(cfg_do_show_variables);
        }), {
          fuzz: {
            sv: 11.5,
            sd: null,
            cv: 11.5,
            cd: null,
            tv: void 0,
            gv: 11.5
          },
          job: {
            sv: void 0,
            sd: void 0,
            cv: void 0,
            cd: void 0,
            tv: 'engineer',
            gv: 'engineer'
          },
          name: {
            sv: '"Bob"',
            sd: null,
            cv: 'Bob',
            cd: null,
            tv: 'Alice',
            gv: 'Alice'
          },
          'seq:app:counter': {
            sv: 13,
            sd: 3,
            cv: 13,
            cd: 3,
            tv: void 0,
            gv: 13
          },
          'seq:global:rowid': {
            sv: 0,
            sd: 1,
            cv: 0,
            cd: 1,
            tv: void 0,
            gv: 0
          }
        });
        return null;
      });
      //.......................................................................................................
      this.eq((Ωbbdbr_226 = function() {
        return db._show_variables(cfg_do_show_variables);
      }), {
        fuzz: {
          sv: 11.5,
          sd: null,
          cv: 11.5,
          cd: null,
          tv: void 0,
          gv: 11.5
        },
        name: {
          sv: '"Bob"',
          sd: null,
          cv: 'Bob',
          cd: null,
          tv: void 0,
          gv: 'Bob'
        },
        'seq:app:counter': {
          sv: 13,
          sd: 3,
          cv: 13,
          cd: 3,
          tv: void 0,
          gv: 13
        },
        'seq:global:rowid': {
          sv: 0,
          sd: 1,
          cv: 0,
          cd: 1,
          tv: void 0,
          gv: 0
        }
      });
      db.std_with_variables(() => {
        var Ωbbdbr_227;
        this.eq((Ωbbdbr_227 = function() {
          return db._show_variables(cfg_do_show_variables);
        }), {
          fuzz: {
            sv: 11.5,
            sd: null,
            cv: 11.5,
            cd: null,
            tv: void 0,
            gv: 11.5
          },
          name: {
            sv: '"Bob"',
            sd: null,
            cv: 'Bob',
            cd: null,
            tv: void 0,
            gv: 'Bob'
          },
          'seq:app:counter': {
            sv: 13,
            sd: 3,
            cv: 13,
            cd: 3,
            tv: void 0,
            gv: 13
          },
          'seq:global:rowid': {
            sv: 0,
            sd: 1,
            cv: 0,
            cd: 1,
            tv: void 0,
            gv: 0
          }
        });
        return null;
      });
      //.......................................................................................................
      db.std_with_variables(() => {
        var rows, Ωbbdbr_230, Ωbbdbr_231, Ωbbdbr_232;
        /* Model that shows how to insert sequential RowIDs using a private table, an associated public
             view, and a `instead of insert` trigger: */
        db.std_set_variable('seq:letters', 0, 1);
        db.execute(SQL`create table _letters (
  rowid   text    unique  not null,
  letter  text    unique  not null,
-- primary key ( rowid )
constraint "Ωconstraint_228" check ( length( letter ) = 1 )
) strict;`);
        db.execute(SQL`create view letters as select * from _letters;`);
        db.execute(SQL`create trigger on_before_insert_letters
instead of insert on letters
  for each row begin
    insert into _letters ( rowid, letter ) values
      -- ( 't:letters:R=' || cast( std_get_next_in_sequence( 'seq:letters' ) as integer ), new.letter );
      ( printf( 't:letters:R=%d', std_get_next_in_sequence( 'seq:letters' ) ), new.letter );
    end;
;`);
        db.execute(SQL`insert into letters ( letter ) values ( 'a' ), ( 'z' );`);
        // info 'Ωbbdbr_229', row for row from db.walk SQL"select * from letters;"
        rows = db.walk(SQL`select * from letters order by letter;`);
        this.eq((Ωbbdbr_230 = function() {
          return rows.next().value;
        }), {
          rowid: 't:letters:R=1',
          letter: 'a'
        });
        this.eq((Ωbbdbr_231 = function() {
          return rows.next().value;
        }), {
          rowid: 't:letters:R=2',
          letter: 'z'
        });
        this.eq((Ωbbdbr_232 = function() {
          return rows.next().done;
        }), true);
        return null;
      });
      null;
      //.......................................................................................................
      db.std_with_variables(() => {
        var rows, Ωbbdbr_234, Ωbbdbr_235, Ωbbdbr_236;
        /* NOTE Model that shows how to insert rows with sequential RowIDs using a tbale and and `after
             insert` trigger that updates `rowid`: */
        db.std_set_variable('seq:numbers', 0, 1);
        db.execute(SQL`create table numbers (
  rowid   text    unique  not null default 'new_rowid',
  number  text    unique  not null
) strict;`);
        db.execute(SQL`create trigger on_after_insert_on_numbers
after insert on numbers for each row begin
    update numbers set rowid = printf( 't:numbers:R=%d', std_get_next_in_sequence( 'seq:numbers' ) )
      where rowid = 'new_rowid';
    end;
;`);
        db.execute(SQL`insert into numbers ( number ) values ( 'uno' ), ( 'due' );`);
        // info 'Ωbbdbr_233', row for row from db.walk SQL"select * from numbers;"
        rows = db.walk(SQL`select * from numbers order by rowid;`);
        this.eq((Ωbbdbr_234 = function() {
          return rows.next().value;
        }), {
          rowid: 't:numbers:R=1',
          number: 'uno'
        });
        this.eq((Ωbbdbr_235 = function() {
          return rows.next().value;
        }), {
          rowid: 't:numbers:R=2',
          number: 'due'
        });
        this.eq((Ωbbdbr_236 = function() {
          return rows.next().done;
        }), true);
        return null;
      });
      (() => {        //.......................................................................................................
        var insert_letter, rows, Ωbbdbr_237, Ωbbdbr_238, Ωbbdbr_239;
        /* NOTE Model that shows how to build a parametrized view: */
        //.......................................................................................................
        /* repeat earlier test to ensure we know what's there: */
        rows = db.walk(SQL`select * from letters order by letter;`);
        this.eq((Ωbbdbr_237 = function() {
          return rows.next().value;
        }), {
          rowid: 't:letters:R=1',
          letter: 'a'
        });
        this.eq((Ωbbdbr_238 = function() {
          return rows.next().value;
        }), {
          rowid: 't:letters:R=2',
          letter: 'z'
        });
        this.eq((Ωbbdbr_239 = function() {
          return rows.next().done;
        }), true);
        //.......................................................................................................
        insert_letter = db.prepare(SQL`insert into letters ( letter ) values ( $letter );`);
        //.......................................................................................................
        db.execute(SQL`create view run_of_letters as
select
    *
  from letters
  where letter between std_get_variable( 'first_letter' ) and std_get_variable( 'last_letter' );`);
        //.......................................................................................................
        db.std_with_variables(() => {
          var cid, i, letter, ref, ref1, results;
          results = [];
          for (cid = i = ref = 'b'.codePointAt(0), ref1 = 'y'.codePointAt(0); (ref <= ref1 ? i <= ref1 : i >= ref1); cid = ref <= ref1 ? ++i : --i) {
            letter = String.fromCodePoint(cid);
            results.push(insert_letter.run({letter}));
          }
          return results;
        });
        //.......................................................................................................
        return db.std_with_variables({
          first_letter: 'g',
          last_letter: 'm'
        }, () => {
          var result, row, Ωbbdbr_240, Ωbbdbr_241, Ωbbdbr_242;
          result = ((function() {
            var results;
            results = [];
            for (row of db.walk(SQL`select * from run_of_letters order by letter;`)) {
              results.push(row.letter);
            }
            return results;
          })()).join(',');
          variables = db._show_variables(cfg_do_show_variables);
          this.eq((Ωbbdbr_240 = function() {
            return result;
          }), 'g,h,i,j,k,l,m');
          this.eq((Ωbbdbr_241 = function() {
            var ref;
            return (ref = variables.first_letter) != null ? ref.gv : void 0;
          }), 'g');
          this.eq((Ωbbdbr_242 = function() {
            var ref;
            return (ref = variables.last_letter) != null ? ref.gv : void 0;
          }), 'm');
          return null;
        });
      })();
      (() => {        //.......................................................................................................
        /* NOTE part of `Dbric.statements` object: */
        var insert_word_v;
        /* NOTE Model that shows how to use a sequence to produce RowIDs:

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
         */
        //.......................................................................................................
        /* NOTE part of `Dbric.build` list: */
        db.execute(SQL`create table prfx_words (
  rowid     text  unique  not null,
  en        text          not null,
  de        text          not null,
primary key ( rowid ),
constraint "Ωconstraint_243" check ( rowid regexp 't:wrd:R=\\d+' ) );`);
        insert_word_v = db.prepare(SQL`insert into prfx_words ( rowid, en, de ) values (
printf( 't:wrd:R=%d', std_get_next_in_sequence( 'seq:prfx_words_rowid' ) ),
$en,
$de );`);
        //.......................................................................................................
        /* NOTE part of rebuild() (?, still unclear): */
        db.std_with_variables(() => {
          db.std_set_variable('seq:prfx_words_rowid', 100, +100);
          return null;
        });
        //.......................................................................................................
        /* NOTE in the app proper: */
        return db.std_with_variables(() => {
          insert_word_v.run({
            en: 'dog',
            de: 'Hund'
          });
          insert_word_v.run({
            en: 'cat',
            de: 'Katze'
          });
          insert_word_v.run({
            en: 'word',
            de: 'Wort'
          });
          insert_word_v.run({
            en: 'call',
            de: 'rufen'
          });
          insert_word_v.run({
            en: 'call',
            de: 'Anruf'
          });
          insert_word_v.run({
            en: 'book',
            de: 'Buch'
          });
          return null;
        });
      })();
      //.......................................................................................................
      variables = db._show_variables(cfg_do_show_variables);
      this.eq((Ωbbdbr_244 = function() {
        var ref;
        return (ref = variables['seq:prfx_words_rowid']) != null ? ref.gv : void 0;
      }), 700);
      // echo 'Ωbbdbr_245', row for row from db.walk SQL"select * from prfx_words order by de;"
      rows = db.walk(SQL`select * from prfx_words order by de;`);
      this.eq((Ωbbdbr_246 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=600',
        en: 'call',
        de: 'Anruf'
      });
      this.eq((Ωbbdbr_247 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=700',
        en: 'book',
        de: 'Buch'
      });
      this.eq((Ωbbdbr_248 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=200',
        en: 'dog',
        de: 'Hund'
      });
      this.eq((Ωbbdbr_249 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=300',
        en: 'cat',
        de: 'Katze'
      });
      this.eq((Ωbbdbr_250 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=400',
        en: 'word',
        de: 'Wort'
      });
      this.eq((Ωbbdbr_251 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=500',
        en: 'call',
        de: 'rufen'
      });
      this.eq((Ωbbdbr_252 = function() {
        return rows.next().done;
      }), true);
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    dbric_strict_mode: function() {
      var Dbric, False, SQL, True, freeze, internals, lets;
      ({Dbric, True, False, SQL, internals} = SFMODULES.unstable.require_dbric());
      ({lets, freeze} = SFMODULES.require_letsfreezethat_infra().simple);
      (() => {        //.......................................................................................................
        var db;
        db = new Dbric(':memory:');
        (db.prepare(SQL`pragma strict       = on;`)).run();
        db.execute(SQL`create table t ( f integer );`);
        db.execute(SQL`insert into t values ( 1234 );`);
        db.execute(SQL`insert into t values ( 12.34 );`);
        db.execute(SQL`insert into t values ( 'wat' );`);
        // debug 'Ωbbdbr_253', ( row.f for row from db.walk SQL"select f from t;" )
        return null;
      })();
      (() => {        //.......................................................................................................
        var db, Ωbbdbr_254, Ωbbdbr_255, Ωbbdbr_256, Ωbbdbr_257, Ωbbdbr_258, Ωbbdbr_259;
        db = new Dbric(':memory:');
        (db.prepare(SQL`pragma strict       = on;`)).run();
        this.throws((Ωbbdbr_254 = function() {
          return db.execute(SQL`create table t ( f integer, j json ) strict;`);
        }), /unknown datatype for t\.j/);
        db.execute(SQL`create table t ( f integer, j blob ) strict;`);
        db.execute(SQL`insert into t ( f ) values ( 1234 );`);
        this.eq((Ωbbdbr_255 = function() {
          return (db.get_first(SQL`select typeof( 12    ) as type;`)).type;
        }), 'integer');
        this.eq((Ωbbdbr_256 = function() {
          return (db.get_first(SQL`select typeof( 12.34 ) as type;`)).type;
        }), 'real');
        this.eq((Ωbbdbr_257 = function() {
          return (db.get_first(SQL`select typeof( 'wat' ) as type;`)).type;
        }), 'text');
        this.throws((Ωbbdbr_258 = function() {
          return db.execute(SQL`insert into t ( f ) values ( 12.34 );`);
        }), /cannot store REAL value in INTEGER column/);
        this.throws((Ωbbdbr_259 = function() {
          return db.execute(SQL`insert into t ( f ) values ( 'wat' );`);
        }), /cannot store TEXT value in INTEGER column/);
        // debug 'Ωbbdbr_260', ( row.f for row from db.walk SQL"select f from t;" )
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    _dbric_dynamic_build_properties: function() {
      var Dbric, Dbric_std, False, IDN, SQL, True, internals;
      ({Dbric, Dbric_std, True, False, IDN, SQL, internals} = SFMODULES.unstable.require_dbric());
      (() => {        //.......................................................................................................
        var Db_1, db, prefix, relation_names, row, rows, Ωbbdbr_261, Ωbbdbr_262, Ωbbdbr_263, Ωbbdbr_264;
        prefix = 'wrd';
        Db_1 = (function() {
          class Db_1 extends Dbric_std {};

          Db_1.build = [
            function() {
              return SQL`create table ${IDN(`${prefix}_words`)} ( t text );`;
            },
            function() {
              return SQL`insert into ${IDN(`${prefix}_words`)} ( t ) values ( '水 (みず)' );`;
            },
            function() {
              return SQL`insert into ${IDN(`${prefix}_words`)} ( t ) values ( '食べ物 (たべもの)' );`;
            }
          ];

          return Db_1;

        }).call(this);
        db = new Db_1();
        relation_names = new Set((function() {
          var results;
          results = [];
          for (row of db.walk(SQL`select * from std_relations;`)) {
            results.push(row.name);
          }
          return results;
        })());
        this.eq((Ωbbdbr_261 = function() {
          return relation_names.has('wrd_words');
        }), true);
        rows = db.walk(SQL`select * from ${IDN(`${prefix}_words`)};`);
        this.eq((Ωbbdbr_262 = function() {
          return rows.next().value.t;
        }), '水 (みず)');
        this.eq((Ωbbdbr_263 = function() {
          return rows.next().value.t;
        }), '食べ物 (たべもの)');
        this.eq((Ωbbdbr_264 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var Db_1, db, prefix, relation_names, row, rows, Ωbbdbr_265, Ωbbdbr_267, Ωbbdbr_268, Ωbbdbr_269;
        prefix = 'wrd';
        Db_1 = (function() {
          class Db_1 extends Dbric_std {};

          Db_1.build = [
            function() {
              return SQL`create table ${IDN(`${prefix}_words`)} ( t text );`;
            },
            function() {
              return SQL`insert into ${IDN(`${prefix}_words`)} ( t ) values ( '水 (みず)' );`;
            },
            function() {
              return SQL`insert into ${IDN(`${prefix}_words`)} ( t ) values ( '食べ物 (たべもの)' );`;
            }
          ];

          Db_1.statements = {
            select_words: function() {
              return SQL`select * from ${IDN(`${prefix}_words`)} order by t;`;
            }
          };

          return Db_1;

        }).call(this);
        db = new Db_1();
        relation_names = new Set((function() {
          var results;
          results = [];
          for (row of db.walk(SQL`select * from std_relations;`)) {
            results.push(row.name);
          }
          return results;
        })());
        this.eq((Ωbbdbr_265 = function() {
          return relation_names.has('wrd_words');
        }), true);
        // info 'Ωbbdbr_266', row for row from db.walk db.statements.select_words
        rows = db.walk(db.statements.select_words);
        this.eq((Ωbbdbr_267 = function() {
          return rows.next().value.t;
        }), '水 (みず)');
        this.eq((Ωbbdbr_268 = function() {
          return rows.next().value.t;
        }), '食べ物 (たべもの)');
        this.eq((Ωbbdbr_269 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    _dbric_integrate_plugin: function() {
      var Dbric, Dbric_std, False, IDN, SQL, True, internals;
      ({Dbric, Dbric_std, True, False, IDN, SQL, internals} = SFMODULES.unstable.require_dbric());
      (() => {        //.......................................................................................................
        var Db_1, Db_2, get_all_effective_descriptors_in_prototype_chain, get_prototype_chain, i, j, k, l, len, len1, len2, len3, prototype, ref, ref1, ref10, ref11, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9;
        Db_1 = (function() {
          class Db_1 extends Dbric {
            exportable_method_1() {}

          };

          Db_1.build = [
            function() {
              return SQL`create table wrd_words ( t text );`;
            },
            function() {
              return SQL`insert into wrd_words ( t ) values ( '水 (みず)' );`;
            },
            function() {
              return SQL`insert into wrd_words ( t ) values ( '食べ物 (たべもの)' );`;
            }
          ];

          return Db_1;

        }).call(this);
        Db_2 = class Db_2 extends Db_1 {
          exportable_method_2() {}

        };
        // db = new Db_1()
        ({get_prototype_chain} = (require('../../../apps/bricabrac-sfmodules/lib/unstable-object-tools-brics')).require_get_prototype_chain());
        //.....................................................................................................
        get_all_effective_descriptors_in_prototype_chain = function(x) {
          var R, i, keys, len, prototype, ref;
          R = Object.create(null);
          if (x == null) {
            return R;
          }
          ref = get_prototype_chain(x);
          for (i = 0, len = ref.length; i < len; i++) {
            prototype = ref[i];
            keys = Object.keys(Object.getOwnPropertyDescriptors(prototype));
            // if ( Object.hasOwn prototype, 'std_with_variables' ) or ( Object.hasOwn prototype, 'statements' ) or ( Object.hasOwn prototype, 'exportable_method_1' )
            if (Object.hasOwn(prototype, 'exportable_method_1')) {
              // help 'Ωbbdbr_270', prototype.constructor.name, prototype.std_with_variables
              // help 'Ωbbdbr_271', prototype.constructor.name, prototype.statements
              help('Ωbbdbr_272', prototype.constructor.name, prototype.exportable_method_1);
            } else {
              // info 'Ωbbdbr_273', prototype.constructor.name, keys
              null;
            }
          }
          // whisper 'Ωbbdbr_274', prototype.constructor.name, keys
          return null;
        };
        //.....................................................................................................
        debug();
        ref = get_prototype_chain(Db_1);
        for (i = 0, len = ref.length; i < len; i++) {
          prototype = ref[i];
          if (prototype === Dbric || prototype === Dbric.prototype) {
            break;
          }
          debug('Ωbbdbr_275', prototype);
          debug('Ωbbdbr_276', ' ', prototype.exportable_method_1);
          debug('Ωbbdbr_277', ' ', prototype.exportable_method_2);
          debug('Ωbbdbr_278', ' ', (ref1 = (ref2 = prototype.build) != null ? ref2.length : void 0) != null ? ref1 : '');
        }
        //.....................................................................................................
        debug();
        ref3 = get_prototype_chain(Db_1.prototype);
        for (j = 0, len1 = ref3.length; j < len1; j++) {
          prototype = ref3[j];
          if (prototype === Dbric || prototype === Dbric.prototype) {
            break;
          }
          debug('Ωbbdbr_279', prototype);
          debug('Ωbbdbr_280', ' ', prototype.exportable_method_1);
          debug('Ωbbdbr_281', ' ', prototype.exportable_method_2);
          debug('Ωbbdbr_282', ' ', (ref4 = (ref5 = prototype.build) != null ? ref5.length : void 0) != null ? ref4 : '');
        }
        //.....................................................................................................
        debug('Ωbbdbr_283', '-----------------------------------------');
        ref6 = get_prototype_chain(Db_2);
        for (k = 0, len2 = ref6.length; k < len2; k++) {
          prototype = ref6[k];
          if (prototype === Dbric || prototype === Dbric.prototype) {
            break;
          }
          debug('Ωbbdbr_284', prototype);
          debug('Ωbbdbr_285', ' ', prototype.exportable_method_1);
          debug('Ωbbdbr_286', ' ', prototype.exportable_method_2);
          debug('Ωbbdbr_287', ' ', (ref7 = (ref8 = prototype.build) != null ? ref8.length : void 0) != null ? ref7 : '');
        }
        //.....................................................................................................
        debug();
        ref9 = get_prototype_chain(Db_2.prototype);
        for (l = 0, len3 = ref9.length; l < len3; l++) {
          prototype = ref9[l];
          if (prototype === Dbric || prototype === Dbric.prototype) {
            break;
          }
          debug('Ωbbdbr_288', prototype);
          debug('Ωbbdbr_289', ' ', prototype.exportable_method_1);
          debug('Ωbbdbr_290', ' ', prototype.exportable_method_2);
          debug('Ωbbdbr_291', ' ', (ref10 = (ref11 = prototype.build) != null ? ref11.length : void 0) != null ? ref10 : '');
        }
        // debug 'Ωbbdbr_292'
        // debug 'Ωbbdbr_293', prototype for prototype in get_prototype_chain db
        // #.....................................................................................................
        // urge reverse 'Ωbbdbr_294'; get_all_effective_descriptors_in_prototype_chain Dbric_std
        // # urge reverse 'Ωbbdbr_295'; get_all_effective_descriptors_in_prototype_chain Dbric_std::
        // urge reverse 'Ωbbdbr_296'; get_all_effective_descriptors_in_prototype_chain new Dbric_std
        // urge ( reverse 'Ωbbdbr_297' ), gold "build:                ", Dbric_std.build
        // urge ( reverse 'Ωbbdbr_298' ), gold "statements:           ", Dbric_std.statements
        // urge ( reverse 'Ωbbdbr_299' ), gold "functions:            ", Dbric_std.functions
        // urge ( reverse 'Ωbbdbr_300' ), gold "aggregate_functions:  ", Dbric_std.aggregate_functions
        // urge ( reverse 'Ωbbdbr_301' ), gold "window_functions:     ", Dbric_std.window_functions
        // urge ( reverse 'Ωbbdbr_302' ), gold "table_functions:      ", Dbric_std.table_functions
        // urge ( reverse 'Ωbbdbr_303' ), gold "virtual_tables:       ", Dbric_std.virtual_tables
        // urge ( reverse 'Ωbbdbr_304' ), gold "exports:              ", Dbric_std.exports
        // # db.integrate_plugin Dbric_std
        // # relation_names = new Set ( row.name for row from db.walk SQL"select * from std_relations;" )
        // # debug 'Ωbbdbr_305', relation_names
        // # @eq ( Ωbbdbr_306 = -> relation_names.has 'wrd_words'      ), true
        // # rows = db.walk SQL"""select * from wrd_words;"""
        // # @eq ( Ωbbdbr_307 = -> rows.next().value.t                 ), '水 (みず)'
        // # @eq ( Ωbbdbr_308 = -> rows.next().value.t                 ), '食べ物 (たべもの)'
        // # @eq ( Ωbbdbr_309 = -> rows.next().done                    ), true
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    _dbric_plugins_acquisition: function() {
      var Dbric, Dbric_std, False, IDN, SQL, True, createMethodCoverage, get_all_in_prototype_chain, get_prototype_chain, internals, nbr_number_plugin, type_of;
      ({Dbric, Dbric_std, True, False, IDN, SQL, internals} = SFMODULES.unstable.require_dbric());
      ({type_of} = (require('../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics')).require_type_of());
      ({get_all_in_prototype_chain, get_prototype_chain} = (require('../../../apps/bricabrac-sfmodules/lib/unstable-object-tools-brics')).require_get_prototype_chain());
      //.......................................................................................................
      ({createMethodCoverage} = require('../../../apps/bricabrac-sfmodules/lib/instrumentation-coverage-observer'));
      //.......................................................................................................
      nbr_number_plugin = {
        exports: {
          prefix: 'nbr'/* NOTE informative, not enforced */,
          build: [SQL`create table nbr_numbers ( number integer );`],
          statements: {
            nbr_insert_number: SQL`insert into nbr_numbers value ( $number );`,
            nbr_select_numbers: SQL`select * from nbr_numbers order by number;`,
            nbr_select_square_numbers: SQL`select nbr_square( number ) from nbr_numbers order by number;`
          },
          functions: {
            nbr_square: {
              value: function(number) {
                return number ** 2;
              }
            }
          }
        }
      };
      (() => {        //.......................................................................................................
        var Db_1, db, i, j, k, len, len1, len2, name, record_coverage, ref, tracker, type, unused, used, value;
        Db_1 = (function() {
          //=====================================================================================================
          class Db_1 extends Dbric_std {};

          Db_1.plugins = ['prototypes', nbr_number_plugin, 'me'];

          // Dbric_std
          Db_1.exports = {};

          Db_1.build = [SQL`create table x ( id integer );`];

          return Db_1;

        }).call(this);
        //=====================================================================================================
        if (record_coverage = true) {
          tracker = createMethodCoverage();
          db = tracker.wrapObject(new Db_1(), "Example");
        } else {
          db = new Db_1();
        }
        ref = db._get_acquisition_chain();
        //.....................................................................................................
        for (i = 0, len = ref.length; i < len; i++) {
          ({type, value} = ref[i]);
          switch (type) {
            case 'plugin':
              info('Ωbbdbr_310', type, Object.keys(value.exports));
              break;
            case 'prototype':
              switch (true) {
                case value === db.constructor:
                  help('Ωbbdbr_311', type, rpr(value.name));
                  break;
                default:
                  // when value in base_prototypes
                  //   whisper 'Ωbbdbr_312', type, "(object)"
                  urge('Ωbbdbr_313', type, rpr(value.name, value));
              }
              break;
            default:
              throw new Error(`Ωbbdbr_314 internal error: unknown type ${rpr(type)}`);
          }
        }
        // debug 'Ωbbdbr_315', { type, value, }
        //.....................................................................................................
        if (record_coverage) {
          ({used, unused} = tracker.report().Example);
          for (j = 0, len1 = used.length; j < len1; j++) {
            name = used[j];
            help('Ωbbdbr_316', "used:   ", name);
          }
          for (k = 0, len2 = unused.length; k < len2; k++) {
            name = unused[k];
            warn('Ωbbdbr_317', "unused: ", name);
          }
        }
        //.....................................................................................................
        return null;
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
        show_passes: true,
        report_checks: true
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      // ( new Test guytest_cfg ).test { tests, }
      // ( new Test guytest_cfg ).test { dbric_integrate_plugin: tests._dbric_integrate_plugin, }
      (new Test(guytest_cfg)).test({
        dbric_plugins_acquisition: tests._dbric_plugins_acquisition
      });
      // ( new Test guytest_cfg ).test { dbric_esql: tests.dbric_esql, }

      //=========================================================================================================
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEVBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSxtQ0FBUjs7RUFDNUIsRUFBQSxHQUE0QixPQUFBLENBQVEsU0FBUjs7RUFDNUIsSUFBQSxHQUE0QixPQUFBLENBQVEsV0FBUixFQWhDNUI7OztFQW9DQSxNQUFBLEdBQVMsUUFBQSxDQUFFLElBQUYsQ0FBQTtBQUNULFFBQUE7QUFBRTtNQUNFLEVBQUUsQ0FBQyxVQUFILENBQWMsSUFBZDtNQUNBLElBQUEsQ0FBSyxZQUFMLEVBQW1CLENBQUEsUUFBQSxDQUFBLENBQVcsR0FBQSxDQUFJLElBQUosQ0FBWCxDQUFBLENBQW5CLEVBRkY7S0FHQSxjQUFBO01BQU07TUFDSixJQUFtQixLQUFLLENBQUMsSUFBTixLQUFjLFFBQWpDO1FBQUEsTUFBTSxNQUFOO09BREY7S0FIRjs7QUFNRSxXQUFPO0VBUEEsRUFwQ1Q7OztFQStDQSxJQUFDLENBQUEsS0FBRCxHQUFTLEtBQUEsR0FHUCxDQUFBOztJQUFBLFVBQUEsRUFBWSxRQUFBLENBQUEsQ0FBQTtBQUNkLFVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLFlBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixFQUNFLFlBREYsRUFFRSxTQUZGLENBQUEsR0FFc0MsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFuQixDQUFBLENBRnRDLEVBQUo7O01BSUksSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFNBQVMsQ0FBQyxPQUFWLENBQWtCLFlBQWxCO01BQUgsQ0FBZixDQUFSLEVBQWlFLFVBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxHQUFiO01BQUgsQ0FBZixDQUFSLEVBQWlFLEdBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxLQUFiO01BQUgsQ0FBZixDQUFSLEVBQWlFLEdBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxLQUFiO01BQUgsQ0FBZixDQUFSLEVBQWlFLEtBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxPQUFiO01BQUgsQ0FBZixDQUFSLEVBQWlFLEtBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxTQUFiO01BQUgsQ0FBZixDQUFSLEVBQWlFLE1BQWpFO01BQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxFQUFiO01BQUgsQ0FBZixDQUFSLEVBQWlFLDhDQUFqRTtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxZQUFBLENBQWEsR0FBYjtNQUFILENBQWYsQ0FBUixFQUFpRSwrQ0FBakU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsWUFBQSxDQUFhLElBQWI7TUFBSCxDQUFmLENBQVIsRUFBaUUsRUFBakU7TUFDQSxJQUFDLENBRG1FLDJEQUNuRSxNQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxZQUFBLENBQWEsS0FBYjtNQUFILENBQWYsQ0FBUixFQUFpRSxnQ0FBakUsRUFiSjs7TUFlSSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsR0FBQSxDQUFJLEtBQUo7TUFBSCxDQUFmLENBQVIsRUFBaUUsT0FBakU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsR0FBQSxDQUFJLE9BQUo7TUFBSCxDQUFmLENBQVIsRUFBaUUsV0FBakU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsR0FBQSxDQUFJLEtBQUo7TUFBSCxDQUFmLENBQVIsRUFBaUUsT0FBakU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsR0FBQSxDQUFJLE9BQUo7TUFBSCxDQUFmLENBQVIsRUFBaUUsV0FBakU7TUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsR0FBQSxDQUFJLEtBQUo7TUFBSCxDQUFmLENBQVIsRUFBaUUsaUJBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLEdBQUEsQ0FBSSxDQUFFLEtBQUYsQ0FBSjtNQUFILENBQWYsQ0FBUixFQUFpRSxDQUFBLFNBQUEsQ0FBakU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsR0FBQSxDQUFJLENBQUUsS0FBRixFQUFTLENBQVQsRUFBWSxJQUFaLEVBQWtCLEtBQWxCLENBQUo7TUFBSCxDQUFmLENBQVIsRUFBaUUsQ0FBQSxrQkFBQSxDQUFqRSxFQXJCSjs7QUF1QkksYUFBTztJQXhCRyxDQUFaOztJQTJCQSxTQUFBLEVBQVcsUUFBQSxDQUFBLENBQUE7QUFDYixVQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxLQUFGLEVBQ0UsU0FERixFQUVFLEdBRkYsRUFHRSxTQUhGLENBQUEsR0FHZ0MsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFuQixDQUFBLENBSGhDO01BSUEsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUFnQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQW5CLENBQUEsQ0FBaEMsRUFKSjs7TUFNSSxJQUFJLENBQUMsY0FBTCxDQUFvQjtRQUFFLElBQUEsRUFBTTtNQUFSLENBQXBCLEVBQXNDLENBQUM7VUFBRSxJQUFBLEVBQU07UUFBUixDQUFELENBQUEsR0FBQTtBQUMxQyxZQUFBLE9BQUE7O1FBQ00sT0FBQSxHQUFVLElBQUksQ0FBQyxJQUFMLENBQVUsV0FBVixFQUF1QixrQkFBdkI7UUFDVixNQUFBLENBQU8sT0FBUDtRQUdHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7QUFDVCxjQUFBLEVBQUEsRUFBQTtVQUFRLEVBQUEsR0FBSyxJQUFJLEtBQUosQ0FBVSxPQUFWO1VBQ0wsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxFQUFFLENBQUM7VUFBTixDQUFmLENBQU4sRUFBdUMsSUFBdkM7QUFDQSxpQkFBTztRQUhOLENBQUE7ZUFLQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxjQUFBLEVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtVQUFRLEVBQUEsR0FBTyxJQUFJLEtBQUosQ0FBVSxPQUFWO1VBQ1AsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxFQUFBLFlBQWM7VUFBakIsQ0FBZixDQUFOLEVBQXVELElBQXZEO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxFQUFFLENBQUMsZUFBSCxDQUFBO1VBQUgsQ0FBZixDQUFOLEVBQXVELENBQUEsQ0FBdkQ7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFNLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHLEVBQUUsQ0FBQztVQUFOLENBQWYsQ0FBTixFQUF1RCxJQUF2RDtVQUNBLElBQUMsQ0FBQSxFQUFELENBQU0sQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7bUJBQUcsRUFBRSxDQUFDLEtBQUgsQ0FBQTtVQUFILENBQWYsQ0FBTixFQUF1RCxDQUF2RDtBQUNBLGlCQUFPO1FBTk4sQ0FBQTtNQVhpQyxDQUF0QyxFQU5KOztNQXlCSSxJQUFJLENBQUMsY0FBTCxDQUFvQjtRQUFFLElBQUEsRUFBTTtNQUFSLENBQXBCLEVBQXNDLENBQUM7VUFBRSxJQUFBLEVBQU07UUFBUixDQUFELENBQUEsR0FBQTtBQUMxQyxZQUFBLE9BQUE7O1FBQ00sT0FBQSxHQUFVLElBQUksQ0FBQyxJQUFMLENBQVUsV0FBVixFQUF1QixrQkFBdkI7UUFDVixNQUFBLENBQU8sT0FBUDtRQUdHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7QUFDVCxjQUFBLEVBQUEsRUFBQTtVQUFRLEVBQUEsR0FBSyxJQUFJLEtBQUosQ0FBVSxPQUFWO1VBQ0wsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxFQUFFLENBQUM7VUFBTixDQUFmLENBQU4sRUFBNkMsSUFBN0M7QUFDQSxpQkFBTztRQUhOLENBQUE7UUFLQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxjQUFBLEVBQUEsRUFBQTtVQUFRLEVBQUEsR0FBSyxJQUFJLFNBQUosQ0FBYyxPQUFkO1VBQ0wsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxFQUFFLENBQUM7VUFBTixDQUFmLENBQU4sRUFBNkMsSUFBN0M7QUFDQSxpQkFBTztRQUhOLENBQUE7UUFLQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxjQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtVQUFRLEVBQUEsR0FBTyxJQUFJLFNBQUosQ0FBYyxPQUFkO1VBQ1AsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxFQUFBLFlBQWM7VUFBakIsQ0FBZixDQUFOLEVBQTZELElBQTdEO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxFQUFBLFlBQWM7VUFBakIsQ0FBZixDQUFOLEVBQTZELElBQTdEO1VBQ0EsT0FBQSxHQUFVLElBQUksR0FBSjs7QUFBVTtBQUFBO1lBQUEsS0FBQSxRQUFBOzsyQkFBQSxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUMsSUFBTCxDQUFBLENBQUEsQ0FBQSxDQUFhLENBQUMsQ0FBQyxJQUFmLENBQUE7WUFBQSxDQUFBOztjQUFWO1VBQ1YsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxPQUFPLENBQUMsR0FBUixDQUFZLGlCQUFaO1VBQUgsQ0FBZixDQUFOLEVBQTZELElBQTdEO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxPQUFPLENBQUMsR0FBUixDQUFZLGdCQUFaO1VBQUgsQ0FBZixDQUFOLEVBQTZELElBQTdEO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxPQUFPLENBQUMsR0FBUixDQUFZLG9CQUFaO1VBQUgsQ0FBZixDQUFOLEVBQTZELElBQTdEO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxFQUFFLENBQUM7VUFBTixDQUFmLENBQU4sRUFBNkQsSUFBN0Q7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFNLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHLEVBQUUsQ0FBQyxLQUFILENBQUE7VUFBSCxDQUFmLENBQU4sRUFBNkQsQ0FBN0Q7QUFDQSxpQkFBTztRQVZOLENBQUE7UUFZQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxjQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtVQUFRLEVBQUEsR0FBTyxJQUFJLFNBQUosQ0FBYyxPQUFkO1VBQ1AsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxFQUFBLFlBQWM7VUFBakIsQ0FBZixDQUFOLEVBQTZELElBQTdEO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxFQUFBLFlBQWM7VUFBakIsQ0FBZixDQUFOLEVBQTZELElBQTdEO1VBQ0EsT0FBQSxHQUFVLElBQUksR0FBSjs7QUFBVTtBQUFBO1lBQUEsS0FBQSxRQUFBOzsyQkFBQSxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUMsSUFBTCxDQUFBLENBQUEsQ0FBQSxDQUFhLENBQUMsQ0FBQyxJQUFmLENBQUE7WUFBQSxDQUFBOztjQUFWO1VBQ1YsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxPQUFPLENBQUMsR0FBUixDQUFZLGlCQUFaO1VBQUgsQ0FBZixDQUFOLEVBQTZELElBQTdEO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxPQUFPLENBQUMsR0FBUixDQUFZLGdCQUFaO1VBQUgsQ0FBZixDQUFOLEVBQTZELElBQTdEO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxPQUFPLENBQUMsR0FBUixDQUFZLG9CQUFaO1VBQUgsQ0FBZixDQUFOLEVBQTZELElBQTdEO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBTSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxFQUFFLENBQUM7VUFBTixDQUFmLENBQU4sRUFBNkQsSUFBN0Q7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFNLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHLEVBQUUsQ0FBQyxLQUFILENBQUE7VUFBSCxDQUFmLENBQU4sRUFBNkQsQ0FBN0Q7QUFDQSxpQkFBTztRQVZOLENBQUE7UUFZQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxjQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO1VBQVEsRUFBQSxHQUFPLElBQUksU0FBSixDQUFjLE9BQWQ7VUFDUCxPQUFBLEdBQVUsSUFBSSxHQUFKOztBQUFVO0FBQUE7WUFBQSxLQUFBLFFBQUE7OzJCQUFBLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBQyxJQUFMLENBQUEsQ0FBQSxDQUFBLENBQWEsQ0FBQyxDQUFDLElBQWYsQ0FBQTtZQUFBLENBQUE7O2NBQVY7VUFDVixJQUFDLENBQUEsRUFBRCxDQUFNLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHLE9BQU8sQ0FBQyxHQUFSLENBQVksaUJBQVo7VUFBSCxDQUFmLENBQU4sRUFBNkQsSUFBN0Q7VUFDQSxDQUFFLEVBQUUsQ0FBQyxPQUFILENBQVcsR0FBRyxDQUFBLHFCQUFBLENBQWQsQ0FBRixDQUF5QyxDQUFDLEdBQTFDLENBQUE7VUFDQSxPQUFBLEdBQVUsSUFBSSxHQUFKOztBQUFVO0FBQUE7WUFBQSxLQUFBLFFBQUE7OzJCQUFBLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBQyxJQUFMLENBQUEsQ0FBQSxDQUFBLENBQWEsQ0FBQyxDQUFDLElBQWYsQ0FBQTtZQUFBLENBQUE7O2NBQVY7VUFDVixJQUFDLENBQUEsRUFBRCxDQUFNLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHLE9BQU8sQ0FBQyxHQUFSLENBQVksaUJBQVo7VUFBSCxDQUFmLENBQU4sRUFBNkQsS0FBN0Q7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFNLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHLEVBQUUsQ0FBQztVQUFOLENBQWYsQ0FBTixFQUE2RCxLQUE3RDtBQUNBLGlCQUFPO1FBUk4sQ0FBQTtRQVVBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULGNBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBLEVBQUEsT0FBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO1VBQVEsRUFBQSxHQUFPLElBQUksU0FBSixDQUFjLE9BQWQ7VUFDUCxJQUFDLENBQUEsRUFBRCxDQUFNLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHLEVBQUEsWUFBYztVQUFqQixDQUFmLENBQU4sRUFBNkQsSUFBN0Q7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFNLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHLEVBQUEsWUFBYztVQUFqQixDQUFmLENBQU4sRUFBNkQsSUFBN0Q7VUFDQSxPQUFBLEdBQVUsSUFBSSxHQUFKOztBQUFVO0FBQUE7WUFBQSxLQUFBLFFBQUE7OzJCQUFBLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBQyxJQUFMLENBQUEsQ0FBQSxDQUFBLENBQWEsQ0FBQyxDQUFDLElBQWYsQ0FBQTtZQUFBLENBQUE7O2NBQVY7VUFDVixJQUFDLENBQUEsRUFBRCxDQUFNLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHLE9BQU8sQ0FBQyxHQUFSLENBQVksaUJBQVo7VUFBSCxDQUFmLENBQU4sRUFBNkQsSUFBN0Q7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFNLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHLE9BQU8sQ0FBQyxHQUFSLENBQVksZ0JBQVo7VUFBSCxDQUFmLENBQU4sRUFBNkQsSUFBN0Q7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFNLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHLE9BQU8sQ0FBQyxHQUFSLENBQVksb0JBQVo7VUFBSCxDQUFmLENBQU4sRUFBNkQsSUFBN0Q7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFNLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHLEVBQUUsQ0FBQztVQUFOLENBQWYsQ0FBTixFQUE2RCxJQUE3RDtVQUNBLElBQUMsQ0FBQSxFQUFELENBQU0sQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7bUJBQUcsRUFBRSxDQUFDLEtBQUgsQ0FBQTtVQUFILENBQWYsQ0FBTixFQUE2RCxDQUE3RDtBQUNBLGlCQUFPO1FBVk4sQ0FBQSxJQWpEVDs7QUE2RE0sZUFBTztNQTlENkIsQ0FBdEMsRUF6Qko7O0FBeUZJLGFBQU87SUExRkUsQ0EzQlg7O0lBd0hBLHlCQUFBLEVBQTJCLFFBQUEsQ0FBQSxDQUFBO0FBQzdCLFVBQUEsS0FBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLEtBQUYsRUFDRSxTQURGLEVBRUUsR0FGRixFQUdFLFNBSEYsQ0FBQSxHQUdnQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQW5CLENBQUEsQ0FIaEM7TUFJQSxDQUFBLENBQUUsSUFBRixDQUFBLEdBQWdDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBbkIsQ0FBQSxDQUFoQztNQTBDRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1AsWUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO1FBQVksS0FBTixNQUFBLEdBQUEsUUFBaUIsVUFBakIsQ0FBQTtRQUNBLEVBQUEsR0FBSyxJQUFJLEVBQUosQ0FBTyxVQUFQO1FBQ0wsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtBQUFFLGNBQUE7aUJBQUM7WUFBRSxHQUFBOztBQUFFO2NBQUEsS0FBQSxtRUFBQTs2QkFBQSxHQUFHLENBQUM7Y0FBSixDQUFBOztnQkFBRixDQUFGOztRQUFILENBQWYsQ0FBSixFQUF3SCxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLENBQXhIO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtBQUFFLGNBQUE7aUJBQUM7WUFBRSxHQUFBOztBQUFFO2NBQUEsS0FBQSxtRUFBQTs2QkFBQSxHQUFHLENBQUM7Y0FBSixDQUFBOztnQkFBRixDQUFGOztRQUFILENBQWYsQ0FBSixFQUF3SCxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLEVBQTdCLENBQXhIO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtBQUFFLGNBQUE7aUJBQUM7WUFBRSxHQUFBOztBQUFFO2NBQUEsS0FBQSxrRUFBQTs2QkFBQSxHQUFHLENBQUM7Y0FBSixDQUFBOztnQkFBRixDQUFGOztRQUFILENBQWYsQ0FBSixFQUF3SCxDQUFFLENBQUYsQ0FBeEg7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTtpQkFBQztZQUFFLEdBQUE7O0FBQUU7Y0FBQSxLQUFBLGtFQUFBOzZCQUFBLEdBQUcsQ0FBQztjQUFKLENBQUE7O2dCQUFGLENBQUY7O1FBQUgsQ0FBZixDQUFKLEVBQXdILEVBQXhIO0FBQ0EsZUFBTztNQVBOLENBQUEsSUE5Q1A7O2FBdURLO0lBeER3QixDQXhIM0I7O0lBbUxBLHFCQUFBLEVBQXVCLFFBQUEsQ0FBQSxDQUFBO0FBQ3pCLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxLQUFBLEVBQUEsb0JBQUEsRUFBQSxxQkFBQSxFQUFBLGlCQUFBLEVBQUEsS0FBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsa0JBQUEsRUFBQSxlQUFBLEVBQUEsaUJBQUEsRUFBQSxjQUFBLEVBQUEsU0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLEtBQUYsRUFDRSxTQURGLEVBRUUsR0FGRixFQUdFLFNBSEYsQ0FBQSxHQUdnQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQW5CLENBQUEsQ0FIaEMsRUFBSjs7O01BTUksS0FBQSxHQUFnQyxPQUFBLENBQVEsK0RBQVI7TUFDaEMsZUFBQSxHQUFnQyxDQUFFLENBQUUsSUFBSSxLQUFKLENBQVUsVUFBVixDQUFGLENBQXdCLENBQUMsT0FBekIsQ0FBaUMsR0FBRyxDQUFBLHFCQUFBLENBQXBDLENBQUYsQ0FBK0QsQ0FBQyxZQVBwRzs7TUFTSSxrQkFBQSxHQUFxQixRQUFBLENBQUUsR0FBRixDQUFBO0FBQVUsWUFBQTtlQUFDLElBQUksR0FBSjs7QUFBVTtVQUFBLEtBQUEsMEVBQUE7YUFBUyxDQUFFLElBQUY7eUJBQVQ7VUFBQSxDQUFBOztZQUFWO01BQVgsRUFUekI7O01BWUksZUFBQSxHQUFrQixRQUFBLENBQUUsR0FBRixDQUFBO0FBQVUsWUFBQTtlQUFDLElBQUksR0FBSjs7QUFBVTtVQUFBLEtBQUE7c0NBQUE7YUFBUyxDQUFFLElBQUY7eUJBQVQ7VUFBQSxDQUFBOztZQUFWO01BQVgsRUFadEI7O01BZ0JJLGNBQUEsR0FBaUIsUUFBQSxDQUFFLEdBQUYsQ0FBQTtBQUFVLFlBQUE7ZUFBQyxJQUFJLEdBQUo7O0FBQVU7VUFBQSxLQUFBO3FDQUFBO2FBQVMsQ0FBRSxJQUFGO3lCQUFUO1VBQUEsQ0FBQTs7WUFBVjtNQUFYLEVBaEJyQjs7TUFvQkksaUJBQUEsR0FBb0IsUUFBQSxDQUFFLEdBQUYsQ0FBQTtBQUFVLFlBQUE7ZUFBQyxJQUFJLEdBQUo7O0FBQVU7VUFBQSxLQUFBO3dDQUFBO2FBQVMsQ0FBRSxJQUFGO3lCQUFUO1VBQUEsQ0FBQTs7WUFBVjtNQUFYO01BSWQ7O1FBQU4sTUFBQSxFQUFBLFFBQWdCLFVBQWhCLENBQUE7O1FBQ0UsQ0FBQyxDQUFBLFNBQUQsR0FDRTtVQUFBLElBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxRQUFBLENBQUEsQ0FBQTtBQUFHLHFCQUFPO1lBQVY7VUFBUDtRQURGOztRQUVGLENBQUMsQ0FBQSxVQUFELEdBQ0U7VUFBQSxRQUFBLEVBQVUsR0FBRyxDQUFBLCtCQUFBO1FBQWI7O1FBQ0YsQ0FBQyxDQUFBLEtBQUQsR0FBUSxDQUNOLEdBQUcsQ0FBQSxnQ0FBQSxDQURHLEVBRU4sR0FBRyxDQUFBLDRDQUFBLENBRkc7Ozs7O01BS0o7O1FBQU4sTUFBQSxFQUFBLFFBQWdCLEVBQWhCLENBQUE7O1FBQ0UsQ0FBQyxDQUFBLFNBQUQsR0FDRTtVQUFBLElBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxRQUFBLENBQUEsQ0FBQTtBQUFHLHFCQUFPO1lBQVY7VUFBUDtRQURGOztRQUVGLENBQUMsQ0FBQSxVQUFELEdBQ0U7VUFBQSxRQUFBLEVBQVUsR0FBRyxDQUFBLCtCQUFBO1FBQWI7O1FBQ0YsQ0FBQyxDQUFBLEtBQUQsR0FBUSxDQUNOLEdBQUcsQ0FBQSxnQ0FBQSxDQURHLEVBRU4sR0FBRyxDQUFBLDRDQUFBLENBRkc7Ozs7O01BS0o7O1FBQU4sTUFBQSxxQkFBQSxRQUFtQyxFQUFuQyxDQUFBOztRQUNFLG9CQUFDLENBQUEsU0FBRCxHQUNFO1VBQUEsSUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFFBQUEsQ0FBQSxDQUFBO0FBQUcscUJBQU87WUFBVjtVQUFQO1FBREY7Ozs7O01BR0U7O1FBQU4sTUFBQSxzQkFBQSxRQUFvQyxFQUFwQyxDQUFBOztRQUNFLHFCQUFDLENBQUEsVUFBRCxHQUNFO1VBQUEsUUFBQSxFQUFVLEdBQUcsQ0FBQSwrQkFBQTtRQUFiOzs7OztNQUVFOztRQUFOLE1BQUEsa0JBQUEsUUFBZ0MsRUFBaEMsQ0FBQTs7UUFDRSxpQkFBQyxDQUFBLEtBQUQsR0FBUSxDQUNOLEdBQUcsQ0FBQSxnQ0FBQSxDQURHLEVBRU4sR0FBRyxDQUFBLDRDQUFBLENBRkc7Ozs7O01BaUJQLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7Ozs7Ozs7Ozs7OztBQUNQLFlBQUEsR0FBQSxFQUFBLGNBQUEsRUFBQSxXQUFBLEVBQUEsYUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7UUFBTSxHQUFBLEdBQU0sSUFBSSxTQUFKLENBQWMsVUFBZCxFQUFaOzs7UUFHTSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVAsQ0FBZ0IsVUFBaEIsRUFBNEI7VUFBRSxhQUFBLEVBQWUsSUFBakI7VUFBdUIsT0FBQSxFQUFTLEtBQWhDO1VBQXVDLFVBQUEsRUFBWTtRQUFuRCxDQUE1QixFQUF5RixRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFILENBQXpGLEVBSE47O1FBS00sY0FBQSxHQUFrQixrQkFBQSxDQUFtQixHQUFuQjtRQUNsQixXQUFBLEdBQWtCLGVBQUEsQ0FBZ0IsR0FBaEI7UUFDbEIsVUFBQSxHQUFrQixjQUFBLENBQWUsR0FBZjtRQUNsQixhQUFBLEdBQWtCLGlCQUFBLENBQWtCLEdBQWxCLEVBUnhCOztRQVVNLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxjQUFmLFlBQThDO1FBQWpELENBQWYsQ0FBSixFQUF1RixJQUF2RjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxjQUFmLFlBQThDO1FBQWpELENBQWYsQ0FBSixFQUF1RixJQUF2RjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxhQUFmLFlBQThDO1FBQWpELENBQWYsQ0FBSixFQUF1RixJQUF2RjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxpQkFBZixZQUE4QztRQUFqRCxDQUFmLENBQUosRUFBdUYsSUFBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBZixZQUE4QztRQUFqRCxDQUFmLENBQUosRUFBdUYsS0FBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBZixZQUE4QztRQUFqRCxDQUFmLENBQUosRUFBdUYsS0FBdkYsRUFmTjs7UUFpQk0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxjQUFjLENBQUMsR0FBZixDQUFtQixVQUFuQjtRQUFILENBQWYsQ0FBSixFQUF1RixJQUF2RjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsY0FBYyxDQUFDLEdBQWYsQ0FBbUIsUUFBbkI7UUFBSCxDQUFmLENBQUosRUFBdUYsSUFBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLGNBQWMsQ0FBQyxHQUFmLENBQW1CLE1BQW5CO1FBQUgsQ0FBZixDQUFKLEVBQXVGLEtBQXZGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxjQUFjLENBQUMsR0FBZixDQUFtQixNQUFuQjtRQUFILENBQWYsQ0FBSixFQUF1RixLQUF2RixFQXBCTjs7UUFzQk0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxXQUFXLENBQUMsR0FBWixDQUFnQixTQUFoQjtRQUFILENBQWYsQ0FBSixFQUF1RixLQUF2RjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsV0FBVyxDQUFDLEdBQVosQ0FBZ0IsU0FBaEI7UUFBSCxDQUFmLENBQUosRUFBdUYsS0FBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQVUsQ0FBQyxHQUFYLENBQWUsWUFBZjtRQUFILENBQWYsQ0FBSixFQUF1RixJQUF2RjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBVSxDQUFDLEdBQVgsQ0FBZSxXQUFmO1FBQUgsQ0FBZixDQUFKLEVBQXVGLElBQXZGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxVQUFVLENBQUMsR0FBWCxDQUFlLGVBQWY7UUFBSCxDQUFmLENBQUosRUFBdUYsSUFBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQVUsQ0FBQyxHQUFYLENBQWUsUUFBZjtRQUFILENBQWYsQ0FBSixFQUF1RixLQUF2RjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBVSxDQUFDLEdBQVgsQ0FBZSxRQUFmO1FBQUgsQ0FBZixDQUFKLEVBQXVGLEtBQXZGO2VBQ0M7TUE5QkEsQ0FBQTtNQWdDQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLEdBQUEsRUFBQSxjQUFBLEVBQUEsV0FBQSxFQUFBLGFBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO1FBQU0sR0FBQSxHQUFNLElBQUksQ0FBSixDQUFBO1FBQ04sR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFQLENBQWdCLFVBQWhCLEVBQTRCO1VBQUUsYUFBQSxFQUFlLElBQWpCO1VBQXVCLE9BQUEsRUFBUyxLQUFoQztVQUF1QyxVQUFBLEVBQVk7UUFBbkQsQ0FBNUIsRUFBeUYsUUFBQSxDQUFBLENBQUE7aUJBQUc7UUFBSCxDQUF6RixFQUROOztRQUdNLGNBQUEsR0FBa0Isa0JBQUEsQ0FBbUIsR0FBbkI7UUFDbEIsV0FBQSxHQUFrQixlQUFBLENBQWdCLEdBQWhCO1FBQ2xCLFVBQUEsR0FBa0IsY0FBQSxDQUFlLEdBQWY7UUFDbEIsYUFBQSxHQUFrQixpQkFBQSxDQUFrQixHQUFsQixFQU54Qjs7UUFRTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBZixZQUE4QztRQUFqRCxDQUFmLENBQUosRUFBdUYsSUFBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBZixZQUE4QztRQUFqRCxDQUFmLENBQUosRUFBdUYsSUFBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBZixZQUE4QztRQUFqRCxDQUFmLENBQUosRUFBdUYsSUFBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsaUJBQWYsWUFBOEM7UUFBakQsQ0FBZixDQUFKLEVBQXVGLElBQXZGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQWYsWUFBOEM7UUFBakQsQ0FBZixDQUFKLEVBQXVGLElBQXZGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQWYsWUFBOEM7UUFBakQsQ0FBZixDQUFKLEVBQXVGLEtBQXZGLEVBYk47O1FBZU0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxjQUFjLENBQUMsR0FBZixDQUFtQixVQUFuQjtRQUFILENBQWYsQ0FBSixFQUF1RixJQUF2RjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsY0FBYyxDQUFDLEdBQWYsQ0FBbUIsUUFBbkI7UUFBSCxDQUFmLENBQUosRUFBdUYsSUFBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLGNBQWMsQ0FBQyxHQUFmLENBQW1CLE1BQW5CO1FBQUgsQ0FBZixDQUFKLEVBQXVGLElBQXZGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxjQUFjLENBQUMsR0FBZixDQUFtQixNQUFuQjtRQUFILENBQWYsQ0FBSixFQUF1RixLQUF2RixFQWxCTjs7UUFvQk0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxXQUFXLENBQUMsR0FBWixDQUFnQixTQUFoQjtRQUFILENBQWYsQ0FBSixFQUF1RixJQUF2RjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsV0FBVyxDQUFDLEdBQVosQ0FBZ0IsU0FBaEI7UUFBSCxDQUFmLENBQUosRUFBdUYsS0FBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQVUsQ0FBQyxHQUFYLENBQWUsWUFBZjtRQUFILENBQWYsQ0FBSixFQUF1RixJQUF2RjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBVSxDQUFDLEdBQVgsQ0FBZSxXQUFmO1FBQUgsQ0FBZixDQUFKLEVBQXVGLElBQXZGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxVQUFVLENBQUMsR0FBWCxDQUFlLGVBQWY7UUFBSCxDQUFmLENBQUosRUFBdUYsSUFBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQVUsQ0FBQyxHQUFYLENBQWUsUUFBZjtRQUFILENBQWYsQ0FBSixFQUF1RixJQUF2RjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBVSxDQUFDLEdBQVgsQ0FBZSxRQUFmO1FBQUgsQ0FBZixDQUFKLEVBQXVGLEtBQXZGO2VBQ0M7TUE1QkEsQ0FBQTtNQThCQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLEdBQUEsRUFBQSxjQUFBLEVBQUEsV0FBQSxFQUFBLGFBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO1FBQU0sR0FBQSxHQUFNLElBQUksQ0FBSixDQUFBO1FBQ04sR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFQLENBQWdCLFVBQWhCLEVBQTRCO1VBQUUsYUFBQSxFQUFlLElBQWpCO1VBQXVCLE9BQUEsRUFBUyxLQUFoQztVQUF1QyxVQUFBLEVBQVk7UUFBbkQsQ0FBNUIsRUFBeUYsUUFBQSxDQUFBLENBQUE7aUJBQUc7UUFBSCxDQUF6RixFQUROOztRQUdNLGNBQUEsR0FBa0Isa0JBQUEsQ0FBbUIsR0FBbkI7UUFDbEIsV0FBQSxHQUFrQixlQUFBLENBQWdCLEdBQWhCO1FBQ2xCLFVBQUEsR0FBa0IsY0FBQSxDQUFlLEdBQWY7UUFDbEIsYUFBQSxHQUFrQixpQkFBQSxDQUFrQixHQUFsQixFQU54Qjs7UUFRTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBZixZQUE4QztRQUFqRCxDQUFmLENBQUosRUFBdUYsSUFBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBZixZQUE4QztRQUFqRCxDQUFmLENBQUosRUFBdUYsSUFBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBZixZQUE4QztRQUFqRCxDQUFmLENBQUosRUFBdUYsSUFBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsaUJBQWYsWUFBOEM7UUFBakQsQ0FBZixDQUFKLEVBQXVGLElBQXZGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQWYsWUFBOEM7UUFBakQsQ0FBZixDQUFKLEVBQXVGLElBQXZGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQWYsWUFBOEM7UUFBakQsQ0FBZixDQUFKLEVBQXVGLElBQXZGLEVBYk47O1FBZU0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxjQUFjLENBQUMsR0FBZixDQUFtQixVQUFuQjtRQUFILENBQWYsQ0FBSixFQUF1RixJQUF2RjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsY0FBYyxDQUFDLEdBQWYsQ0FBbUIsUUFBbkI7UUFBSCxDQUFmLENBQUosRUFBdUYsSUFBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLGNBQWMsQ0FBQyxHQUFmLENBQW1CLE1BQW5CO1FBQUgsQ0FBZixDQUFKLEVBQXVGLElBQXZGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxjQUFjLENBQUMsR0FBZixDQUFtQixNQUFuQjtRQUFILENBQWYsQ0FBSixFQUF1RixJQUF2RixFQWxCTjs7UUFvQk0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxXQUFXLENBQUMsR0FBWixDQUFnQixTQUFoQjtRQUFILENBQWYsQ0FBSixFQUF1RixJQUF2RjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsV0FBVyxDQUFDLEdBQVosQ0FBZ0IsU0FBaEI7UUFBSCxDQUFmLENBQUosRUFBdUYsSUFBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQVUsQ0FBQyxHQUFYLENBQWUsWUFBZjtRQUFILENBQWYsQ0FBSixFQUF1RixJQUF2RjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBVSxDQUFDLEdBQVgsQ0FBZSxXQUFmO1FBQUgsQ0FBZixDQUFKLEVBQXVGLElBQXZGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxVQUFVLENBQUMsR0FBWCxDQUFlLGVBQWY7UUFBSCxDQUFmLENBQUosRUFBdUYsSUFBdkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQVUsQ0FBQyxHQUFYLENBQWUsUUFBZjtRQUFILENBQWYsQ0FBSixFQUF1RixJQUF2RjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBVSxDQUFDLEdBQVgsQ0FBZSxRQUFmO1FBQUgsQ0FBZixDQUFKLEVBQXVGLElBQXZGO2VBQ0M7TUE1QkEsQ0FBQTtNQThCQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7UUFBTSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksb0JBQUosQ0FBQTtRQUFILENBQWYsQ0FBUixFQUEyRCxtRUFBM0Q7UUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUkscUJBQUosQ0FBQTtRQUFILENBQWYsQ0FBUixFQUEyRCwwQ0FBM0Q7ZUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksaUJBQUosQ0FBQTtRQUFILENBQWYsQ0FBUixFQUEyRCw4QkFBM0Q7TUFIQyxDQUFBLElBcktQOztBQTBLSSxhQUFPO0lBM0tjLENBbkx2Qjs7SUFpV0EsOENBQUEsRUFBZ0QsUUFBQSxDQUFBLENBQUE7QUFDbEQsVUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxLQUFGLEVBQ0UsR0FERixFQUVFLFNBRkYsQ0FBQSxHQUVnQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQW5CLENBQUEsQ0FGaEM7TUFJRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLEVBQUEsRUFBQTtRQUFNLEVBQUEsR0FBYyxJQUFJLEtBQUosQ0FBVSxVQUFWO1FBQ2QsUUFBQSxHQUFZLE1BQU0sQ0FBQyxjQUFQLENBQXNCLEVBQXRCLEVBRGxCOzs7ZUFJTztNQUxBLENBQUEsSUFKUDs7O01BWVUsVUFBTixNQUFBLFFBQUEsUUFBc0IsTUFBdEIsQ0FBQTtNQUNNLFVBQU4sTUFBQSxRQUFBLFFBQXNCLFFBQXRCLENBQUE7TUFDTSxVQUFOLE1BQUEsUUFBQSxRQUFzQixRQUF0QixDQUFBO01BQ00sVUFBTixNQUFBLFFBQUEsUUFBc0IsUUFBdEIsQ0FBQTtNQUVHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsZ0JBQUEsRUFBQTtRQUFZLG1CQUFOLE1BQUEsaUJBQUEsUUFBK0IsUUFBL0I7VUFDRSxRQUFVLENBQUEsQ0FBQSxFQUFBOztRQURaO1FBRUEsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLGdCQUFKLENBQUE7UUFBSCxDQUFmLENBQVIsRUFBb0QseUVBQXBEO2VBQ0M7TUFKQSxDQUFBLElBakJQOzthQXVCSztJQXhCNkMsQ0FqV2hEOztJQTRYQSxTQUFBLEVBQVcsUUFBQSxDQUFBLENBQUE7QUFDYixVQUFBLEtBQUEsRUFBQSxXQUFBLEVBQUEsR0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLEtBQUYsRUFDRSxHQURGLEVBRUUsU0FGRixDQUFBLEdBRWdDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBbkIsQ0FBQSxDQUZoQztNQUlNOztRQUFOLE1BQUEsWUFBQSxRQUEwQixNQUExQixDQUFBOztRQUNFLFdBQUMsQ0FBQSxLQUFELEdBQVE7VUFDTixHQUFHLENBQUE7OzZCQUFBLENBREc7OztRQUtSLFdBQUMsQ0FBQSxVQUFELEdBQ0U7VUFBQSxrQkFBQSxFQUFvQixHQUFHLENBQUE7NkVBQUEsQ0FBdkI7VUFHQSxnQkFBQSxFQUFrQixHQUFHLENBQUEsOENBQUE7UUFIckI7Ozs7O01BTUQsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFNLE9BQUEsR0FBWTtRQUNaLEtBQUEsR0FBWSxJQUFJLFdBQUosQ0FBZ0IsT0FBaEI7UUFDWixLQUFLLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQXBDLENBQXdDO1VBQUUsU0FBQSxFQUFXLEtBQWI7VUFBc0IsV0FBQSxFQUFlLElBQUksQ0FBQyxTQUFMLENBQWUsQ0FBZjtRQUFyQyxDQUF4QztRQUNBLEtBQUssQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBcEMsQ0FBd0M7VUFBRSxTQUFBLEVBQVcsS0FBYjtVQUFzQixXQUFBLEVBQWUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxDQUFmO1FBQXJDLENBQXhDO1FBQ0EsS0FBSyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFwQyxDQUF3QztVQUFFLFNBQUEsRUFBVyxPQUFiO1VBQXNCLFdBQUEsRUFBZSxJQUFJLENBQUMsU0FBTCxDQUFlLENBQWY7UUFBckMsQ0FBeEM7UUFDQSxLQUFLLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQXBDLENBQXdDO1VBQUUsU0FBQSxFQUFXLE9BQWI7VUFBc0IsV0FBQSxFQUFlLElBQUksQ0FBQyxTQUFMLENBQWUsS0FBZjtRQUFyQyxDQUF4QztRQUNBLEtBQUssQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBcEMsQ0FBd0M7VUFBRSxTQUFBLEVBQVcsTUFBYjtVQUFzQixXQUFBLEVBQWUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxJQUFmO1FBQXJDLENBQXhDO1FBQ0EsS0FBSyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFwQyxDQUF3QztVQUFFLFNBQUEsRUFBVyxPQUFiO1VBQXNCLFdBQUEsRUFBZSxJQUFJLENBQUMsU0FBTCxDQUFlLEtBQWY7UUFBckMsQ0FBeEMsRUFQTjs7UUFTTSxRQUFBLEdBQVcsUUFBQSxDQUFFLEdBQUYsQ0FBQTtVQUNULElBQWtCLFdBQWxCO0FBQUEsbUJBQU8sSUFBUDs7QUFDQSxpQkFBTztZQUFFLEdBQUEsR0FBRjtZQUFVLFdBQUEsRUFBZSxJQUFJLENBQUMsS0FBTCxDQUFXLEdBQUcsQ0FBQyxXQUFmLENBQXpCO1lBQXVELEVBQUEsRUFBSSxHQUFHLENBQUM7VUFBL0Q7UUFGRSxFQVRqQjs7UUFhTSxJQUFBLEdBQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFsQyxDQUFBO1FBQ1AsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxRQUFBLENBQVMsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUMsS0FBckI7UUFBSCxDQUFmLENBQUosRUFBcUQ7VUFBRSxTQUFBLEVBQVcsT0FBYjtVQUFzQixXQUFBLEVBQWEsS0FBbkM7VUFBMEMsRUFBQSxFQUFJO1FBQTlDLENBQXJEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxRQUFBLENBQVMsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUMsS0FBckI7UUFBSCxDQUFmLENBQUosRUFBcUQ7VUFBRSxTQUFBLEVBQVcsS0FBYjtVQUFvQixXQUFBLEVBQWEsQ0FBakM7VUFBb0MsRUFBQSxFQUFJO1FBQXhDLENBQXJEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxRQUFBLENBQVMsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUMsS0FBckI7UUFBSCxDQUFmLENBQUosRUFBcUQ7VUFBRSxTQUFBLEVBQVcsT0FBYjtVQUFzQixXQUFBLEVBQWEsS0FBbkM7VUFBMEMsRUFBQSxFQUFJO1FBQTlDLENBQXJEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxRQUFBLENBQVMsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUMsS0FBckI7UUFBSCxDQUFmLENBQUosRUFBcUQ7VUFBRSxTQUFBLEVBQVcsTUFBYjtVQUFxQixXQUFBLEVBQWEsSUFBbEM7VUFBd0MsRUFBQSxFQUFJO1FBQTVDLENBQXJEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxRQUFBLENBQVMsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUMsS0FBckI7UUFBSCxDQUFmLENBQUosRUFBcUQ7VUFBRSxTQUFBLEVBQVcsS0FBYjtVQUFvQixXQUFBLEVBQWEsQ0FBakM7VUFBb0MsRUFBQSxFQUFJO1FBQXhDLENBQXJEO2VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUFxRCxJQUFyRDtNQXBCQyxDQUFBLElBakJQOztBQXVDSSxhQUFPO0lBeENFLENBNVhYOztJQXVhQSxtQkFBQSxFQUFxQixRQUFBLENBQUEsQ0FBQTtBQUN2QixVQUFBLEtBQUEsRUFBQSxXQUFBLEVBQUEsR0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLEtBQUYsRUFDRSxHQURGLEVBRUUsU0FGRixDQUFBLEdBRWdDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBbkIsQ0FBQSxDQUZoQztNQUlNOztRQUFOLE1BQUEsWUFBQSxRQUEwQixNQUExQixDQUFBOztRQUNFLFdBQUMsQ0FBQSxLQUFELEdBQVE7VUFDTixHQUFHLENBQUE7OzZCQUFBLENBREc7OztRQUtSLFdBQUMsQ0FBQSxVQUFELEdBR0UsQ0FBQTs7O1VBQUEsa0JBQUEsRUFBb0IsR0FBRyxDQUFBOzZFQUFBLENBQXZCO1VBR0EsZ0JBQUEsRUFBa0IsR0FBRyxDQUFBLDhDQUFBO1FBSHJCOzs7OztNQU1ELENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsUUFBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7UUFBTSxPQUFBLEdBQVk7UUFDWixLQUFBLEdBQVksSUFBSSxXQUFKLENBQWdCLE9BQWhCO1FBQ1osS0FBSyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFwQyxDQUF3QztVQUFFLFNBQUEsRUFBVyxLQUFiO1VBQXNCLFdBQUEsRUFBZSxJQUFJLENBQUMsU0FBTCxDQUFlLENBQWY7UUFBckMsQ0FBeEM7UUFDQSxLQUFLLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQXBDLENBQXdDO1VBQUUsU0FBQSxFQUFXLEtBQWI7VUFBc0IsV0FBQSxFQUFlLElBQUksQ0FBQyxTQUFMLENBQWUsQ0FBZjtRQUFyQyxDQUF4QztRQUNBLEtBQUssQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBcEMsQ0FBd0M7VUFBRSxTQUFBLEVBQVcsT0FBYjtVQUFzQixXQUFBLEVBQWUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxDQUFmO1FBQXJDLENBQXhDO1FBQ0EsS0FBSyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFwQyxDQUF3QztVQUFFLFNBQUEsRUFBVyxPQUFiO1VBQXNCLFdBQUEsRUFBZSxJQUFJLENBQUMsU0FBTCxDQUFlLEtBQWY7UUFBckMsQ0FBeEM7UUFDQSxLQUFLLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQXBDLENBQXdDO1VBQUUsU0FBQSxFQUFXLE1BQWI7VUFBc0IsV0FBQSxFQUFlLElBQUksQ0FBQyxTQUFMLENBQWUsSUFBZjtRQUFyQyxDQUF4QztRQUNBLEtBQUssQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBcEMsQ0FBd0M7VUFBRSxTQUFBLEVBQVcsT0FBYjtVQUFzQixXQUFBLEVBQWUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxLQUFmO1FBQXJDLENBQXhDLEVBUE47O1FBU00sUUFBQSxHQUFXLFFBQUEsQ0FBRSxHQUFGLENBQUE7VUFDVCxJQUFrQixXQUFsQjtBQUFBLG1CQUFPLElBQVA7O0FBQ0EsaUJBQU87WUFBRSxHQUFBLEdBQUY7WUFBVSxXQUFBLEVBQWUsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFHLENBQUMsV0FBZixDQUF6QjtZQUF1RCxFQUFBLEVBQUksR0FBRyxDQUFDO1VBQS9EO1FBRkUsRUFUakI7O1FBYU0sSUFBQSxHQUFPLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBbEMsQ0FBQTtRQUNQLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsUUFBQSxDQUFTLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDLEtBQXJCO1FBQUgsQ0FBZixDQUFKLEVBQW9EO1VBQUUsU0FBQSxFQUFXLE9BQWI7VUFBc0IsV0FBQSxFQUFhLEtBQW5DO1VBQTBDLEVBQUEsRUFBSTtRQUE5QyxDQUFwRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsUUFBQSxDQUFTLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDLEtBQXJCO1FBQUgsQ0FBZixDQUFKLEVBQW9EO1VBQUUsU0FBQSxFQUFXLEtBQWI7VUFBb0IsV0FBQSxFQUFhLENBQWpDO1VBQW9DLEVBQUEsRUFBSTtRQUF4QyxDQUFwRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsUUFBQSxDQUFTLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDLEtBQXJCO1FBQUgsQ0FBZixDQUFKLEVBQW9EO1VBQUUsU0FBQSxFQUFXLE9BQWI7VUFBc0IsV0FBQSxFQUFhLEtBQW5DO1VBQTBDLEVBQUEsRUFBSTtRQUE5QyxDQUFwRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsUUFBQSxDQUFTLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDLEtBQXJCO1FBQUgsQ0FBZixDQUFKLEVBQW9EO1VBQUUsU0FBQSxFQUFXLE1BQWI7VUFBcUIsV0FBQSxFQUFhLElBQWxDO1VBQXdDLEVBQUEsRUFBSTtRQUE1QyxDQUFwRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsUUFBQSxDQUFTLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDLEtBQXJCO1FBQUgsQ0FBZixDQUFKLEVBQW9EO1VBQUUsU0FBQSxFQUFXLEtBQWI7VUFBb0IsV0FBQSxFQUFhLENBQWpDO1VBQW9DLEVBQUEsRUFBSTtRQUF4QyxDQUFwRDtlQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsUUFBQSxDQUFTLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDLEtBQXJCO1FBQUgsQ0FBZixDQUFKLEVBQW9ELE1BQXBEO01BcEJDLENBQUEsSUFuQlA7O0FBeUNJLGFBQU87SUExQ1ksQ0F2YXJCOztJQW9kQSx1QkFBQSxFQUF5QixRQUFBLENBQUEsQ0FBQTtBQUMzQixVQUFBLEtBQUEsRUFBQSxhQUFBLEVBQUEsR0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLEtBQUYsRUFDRSxHQURGLEVBRUUsU0FGRixDQUFBLEdBRWdDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBbkIsQ0FBQSxDQUZoQztNQUlNOztRQUFOLE1BQUEsY0FBQSxRQUE0QixNQUE1QixDQUFBOztVQXFCRSxVQUFZLENBQUEsQ0FBQTtpQkFBWixDQUFBLFVBQ0UsQ0FBQTtZQUNBLElBQUMsQ0FBQSxlQUFELENBQ0U7Y0FBQSxJQUFBLEVBQWdCLFFBQWhCO2NBQ0EsYUFBQSxFQUFnQixJQURoQjtjQUVBLE9BQUEsRUFBZ0IsS0FGaEI7Y0FHQSxLQUFBLEVBQWlCLFFBQUEsQ0FBRSxDQUFGLENBQUE7dUJBQVMsQ0FBQSxJQUFLO2NBQWQ7WUFIakIsQ0FERjttQkFLQztVQVBTOztRQXJCZDs7O1FBRUUsYUFBQyxDQUFBLEtBQUQsR0FBUTtVQUNOLEdBQUcsQ0FBQTt1Q0FBQSxDQURHO1VBR04sR0FBRyxDQUFBOzs7O1dBQUEsQ0FIRzs7OztRQVVSLGFBQUMsQ0FBQSxVQUFELEdBQ0U7VUFBQSxhQUFBLEVBQWUsR0FBRyxDQUFBOzZCQUFBLENBQWxCO1VBRUEsbUJBQUEsRUFBcUIsR0FBRyxDQUFBOzs7O1dBQUE7UUFGeEI7Ozs7O01BaUJELENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsT0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7UUFBTSxPQUFBLEdBQVk7UUFDWixPQUFBLEdBQVksSUFBSSxhQUFKLENBQWtCLE9BQWxCO1FBQ1osS0FBUywwQkFBVDtVQUNFLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQWpDLENBQXFDLENBQUUsQ0FBRixDQUFyQztRQURGLENBRk47OztRQU1NLElBQUEsR0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLE9BQXZDLENBQUE7UUFDUCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENB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MkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkMsTUFBM0M7ZUFDQztNQW5CQSxDQUFBLElBbENQOztBQXVESSxhQUFPO0lBeERnQixDQWpsQnpCOztJQTRvQkEsd0JBQUEsRUFBMEIsUUFBQSxDQUFBLENBQUE7QUFDNUIsVUFBQSxLQUFBLEVBQUEsYUFBQSxFQUFBLEdBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxLQUFGLEVBQ0UsR0FERixFQUVFLFNBRkYsQ0FBQSxHQUVnQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQW5CLENBQUEsQ0FGaEM7TUFJTTs7UUFBTixNQUFBLGNBQUEsUUFBNEIsTUFBNUIsQ0FBQTs7VUF3QkUsVUFBWSxDQUFBLENBQUE7QUFDbEIsZ0JBQUEsT0FBQSxFQUFBO2lCQURNLENBQUEsVUFDRSxDQUFBO1lBQ0EsSUFBQyxDQUFBLGVBQUQsQ0FDRTtjQUFBLElBQUEsRUFBZ0IsUUFBaEI7Y0FDQSxhQUFBLEVBQWdCLElBRGhCO2NBRUEsT0FBQSxFQUFnQixLQUZoQjtjQUdBLEtBQUEsRUFBaUIsTUFBQSxHQUFTLFFBQUEsQ0FBRSxDQUFGLENBQUE7dUJBQVMsQ0FBQSxJQUFLO2NBQWQ7WUFIMUIsQ0FERjtZQUtBLElBQUMsQ0FBQSx5QkFBRCxDQUNFO2NBQUEsSUFBQSxFQUFnQixTQUFoQjtjQUNBLEtBQUEsRUFBZ0IsUUFBQSxDQUFBLENBQUE7dUJBQUc7Y0FBSCxDQURoQjtjQUVBLElBQUEsRUFBZ0IsT0FBQSxHQUFVLFFBQUEsQ0FBRSxLQUFGLEVBQVMsT0FBVCxDQUFBLEVBQUE7O0FBRXhCLHVCQUFPLGlCQUFFLFFBQVEsQ0FBVixDQUFBLEdBQWdCO2NBRkM7WUFGMUIsQ0FERjttQkFNQztVQWJTOztRQXhCZDs7O1FBRUUsYUFBQyxDQUFBLEtBQUQsR0FBUTtVQUNOLEdBQUcsQ0FBQTt1Q0FBQSxDQURHO1VBR04sR0FBRyxDQUFBOzs7O1dBQUEsQ0FIRzs7OztRQVVSLGFBQUMsQ0FBQSxVQUFELEdBQ0U7VUFBQSxhQUFBLEVBQWUsR0FBRyxDQUFBOzZCQUFBLENBQWxCO1VBRUEsbUJBQUEsRUFBcUIsR0FBRyxDQUFBOzs7Ozs7O1dBQUE7UUFGeEI7Ozs7O01BMEJELENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsT0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUE7UUFBTSxPQUFBLEdBQVk7UUFDWixPQUFBLEdBQVksSUFBSSxhQUFKLENBQWtCLE9BQWxCO1FBQ1osS0FBUywwQkFBVDtVQUNFLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQWpDLENBQXFDLENBQUUsQ0FBRixDQUFyQztRQURGLENBRk47OztRQU1NLElBQUEsR0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLE9BQXZDLENBQStDO1VBQUUsS0FBQSxFQUFPLENBQVQ7VUFBWSxJQUFBLEVBQU07UUFBbEIsQ0FBL0M7UUFDUCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVEsQ0FBaEI7VUFBbUIsR0FBQSxFQUFLLENBQXhCO1VBQTJCLFFBQUEsRUFBVTtRQUFyQyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkMsTUFBM0M7ZUFDQztNQVZBLENBQUEsSUEzQ1A7O0FBdURJLGFBQU87SUF4RGlCLENBNW9CMUI7O0lBdXNCQSw0QkFBQSxFQUE4QixRQUFBLENBQUEsQ0FBQTtBQUNoQyxVQUFBLEtBQUEsRUFBQSxhQUFBLEVBQUEsR0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLEtBQUYsRUFDRSxHQURGLEVBRUUsU0FGRixDQUFBLEdBRWdDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBbkIsQ0FBQSxDQUZoQztNQUlNOztRQUFOLE1BQUEsY0FBQSxRQUE0QixNQUE1QixDQUFBOztVQWtCRSxVQUFZLENBQUEsQ0FBQTtpQkFBWixDQUFBLFVBQ0UsQ0FBQTtZQUNBLElBQUMsQ0FBQSxxQkFBRCxDQUNFO2NBQUEsSUFBQSxFQUFjLFlBQWQ7Y0FDQSxPQUFBLEVBQWMsQ0FBRSxPQUFGLEVBQVcsU0FBWCxDQURkO2NBRUEsVUFBQSxFQUFjLENBQUUsTUFBRixFQUFVLFNBQVYsQ0FGZDtjQUdBLElBQUEsRUFBTSxTQUFBLENBQUUsSUFBRixFQUFRLE9BQVIsQ0FBQTtBQUNoQixvQkFBQSxLQUFBLEVBQUE7Z0JBQVksS0FBQSxHQUFRLElBQUksTUFBSixDQUFXLE9BQVgsRUFBb0IsR0FBcEI7Z0JBQ1IsS0FBQSw2QkFBQTtrQkFDRSxNQUFNLENBQUUsS0FBSyxDQUFFLENBQUYsQ0FBUCxFQUFjLEtBQUssQ0FBRSxDQUFGLENBQW5CO2dCQURSO0FBRUEsdUJBQU87Y0FKSDtZQUhOLENBREY7bUJBU0M7VUFYUzs7UUFsQmQ7OztRQUVFLGFBQUMsQ0FBQSxLQUFELEdBQVE7VUFDTixHQUFHLENBQUE7MENBQUEsQ0FERzs7OztRQUtSLGFBQUMsQ0FBQSxVQUFELEdBQ0U7VUFBQSxhQUFBLEVBQWUsR0FBRyxDQUFBO2tDQUFBLENBQWxCO1VBRUEsbUJBQUEsRUFBcUIsR0FBRyxDQUFBOzs7OztvQkFBQTtRQUZ4Qjs7Ozs7TUF1QkQsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxPQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7UUFBTSxPQUFBLEdBQVk7UUFDWixPQUFBLEdBQVksSUFBSSxhQUFKLENBQWtCLE9BQWxCO0FBQ1o7UUFBQSxLQUFBLHFDQUFBOztVQUNFLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQWpDLENBQXFDLENBQUUsTUFBRixDQUFyQztRQURGLENBRk47Ozs7OztRQVNNLElBQUEsR0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLE9BQXZDLENBQStDO1VBQUUsT0FBQSxFQUFTO1FBQVgsQ0FBL0M7UUFDUCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsTUFBQSxFQUFRLFFBQVY7VUFBb0IsS0FBQSxFQUFPLElBQTNCO1VBQWlDLE9BQUEsRUFBUztRQUExQyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxNQUFBLEVBQVEsUUFBVjtVQUFvQixLQUFBLEVBQU8sSUFBM0I7VUFBaUMsT0FBQSxFQUFTO1FBQTFDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLE1BQUEsRUFBUSxNQUFWO1VBQWtCLEtBQUEsRUFBTyxJQUF6QjtVQUErQixPQUFBLEVBQVM7UUFBeEMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsTUFBQSxFQUFRLE1BQVY7VUFBa0IsS0FBQSxFQUFPLElBQXpCO1VBQStCLE9BQUEsRUFBUztRQUF4QyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxNQUFBLEVBQVEsS0FBVjtVQUFpQixLQUFBLEVBQU8sR0FBeEI7VUFBNkIsT0FBQSxFQUFTO1FBQXRDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLE1BQUEsRUFBUSxnQkFBVjtVQUE0QixLQUFBLEVBQU8sR0FBbkM7VUFBd0MsT0FBQSxFQUFTO1FBQWpELENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLE1BQUEsRUFBUSxnQkFBVjtVQUE0QixLQUFBLEVBQU8sS0FBbkM7VUFBMEMsT0FBQSxFQUFTO1FBQW5ELENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLE1BQUEsRUFBUSxnQkFBVjtVQUE0QixLQUFBLEVBQU8sSUFBbkM7VUFBeUMsT0FBQSxFQUFTO1FBQWxELENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLE1BQUEsRUFBUSxPQUFWO1VBQW1CLEtBQUEsRUFBTyxJQUExQjtVQUFnQyxPQUFBLEVBQVM7UUFBekMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsTUFBQSxFQUFRLE9BQVY7VUFBbUIsS0FBQSxFQUFPLElBQTFCO1VBQWdDLE9BQUEsRUFBUztRQUF6QyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxNQUFBLEVBQVEsaUJBQVY7VUFBNkIsS0FBQSxFQUFPLEtBQXBDO1VBQTJDLE9BQUEsRUFBUztRQUFwRCxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxNQUFBLEVBQVEsaUJBQVY7VUFBNkIsS0FBQSxFQUFPLElBQXBDO1VBQTBDLE9BQUEsRUFBUztRQUFuRCxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkMsTUFBM0M7ZUFDQztNQXhCQSxDQUFBLElBbkNQOztBQTZESSxhQUFPO0lBOURxQixDQXZzQjlCOztJQXd3QkEsNkJBQUEsRUFBK0IsUUFBQSxDQUFBLENBQUE7QUFDakMsVUFBQSxLQUFBLEVBQUEsYUFBQSxFQUFBLEdBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxLQUFGLEVBQ0UsR0FERixFQUVFLFNBRkYsQ0FBQSxHQUVnQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQW5CLENBQUEsQ0FGaEM7TUFJTTs7UUFBTixNQUFBLGNBQUEsUUFBNEIsTUFBNUIsQ0FBQTs7VUFxQ0UsVUFBWSxDQUFBLENBQUE7aUJBQVosQ0FBQSxVQUNFLENBQUE7WUFDQSxJQUFDLENBQUEscUJBQUQsQ0FDRTtjQUFBLElBQUEsRUFBYyxZQUFkO2NBQ0EsT0FBQSxFQUFjLENBQUUsU0FBRixFQUFhLE1BQWIsQ0FEZDtjQUVBLFVBQUEsRUFBYyxDQUFFLE1BQUYsQ0FGZDtjQUdBLElBQUEsRUFBTSxTQUFBLENBQUUsSUFBRixDQUFBO0FBQ2hCLG9CQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBO2dCQUFZLEtBQUEsMkNBQUE7bUJBQUk7b0JBQUUsR0FBQSxFQUFLLE9BQVA7b0JBQWdCLElBQWhCO29CQUFzQjtrQkFBdEI7a0JBQ0YsTUFBTSxDQUFBLENBQUUsT0FBRixFQUFXLElBQVgsQ0FBQTtnQkFEUjtBQUVBLHVCQUFPO2NBSEg7WUFITixDQURGO21CQVFDO1VBVlM7O1FBckNkOzs7UUFFRSxhQUFDLENBQUEsS0FBRCxHQUFROztVQUVOLEdBQUcsQ0FBQTs7cUJBQUEsQ0FGRzs7VUFNTixHQUFHLENBQUE7Ozs7OzhCQUFBLENBTkc7O1VBYU4sR0FBRyxDQUFBOzs7OzswQ0FBQSxDQWJHOzs7O1FBcUJSLGFBQUMsQ0FBQSxVQUFELEdBRUUsQ0FBQTs7VUFBQSxpQkFBQSxFQUFtQixHQUFHLENBQUE7aURBQUEsQ0FBdEI7O1VBR0EsY0FBQSxFQUFnQixHQUFHLENBQUE7bURBQUEsQ0FIbkI7O1VBTUEsdUJBQUEsRUFBeUIsR0FBRyxDQUFBLHlDQUFBLENBTjVCOztVQVFBLG9CQUFBLEVBQXNCLEdBQUcsQ0FBQSx3REFBQSxDQVJ6Qjs7VUFVQSxrQkFBQSxFQUFvQixHQUFHLENBQUEsb0NBQUE7UUFWdkI7Ozs7O01Bd0JELENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsT0FBQSxFQUFBLFFBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsQ0FBQSxFQUFBLFVBQUEsRUFBQTtRQUFNLE9BQUEsR0FBWTtRQUNaLE9BQUEsR0FBWSxJQUFJLGFBQUosQ0FBa0IsT0FBbEI7UUFDWixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUUsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsR0FBRyxDQUFBLG1CQUFBLENBQW5CLENBQUYsQ0FBZ0QsQ0FBQyxHQUFqRCxDQUFBO1FBQUgsQ0FBZixDQUFKLEVBQWdGO1VBQUUsWUFBQSxFQUFjO1FBQWhCLENBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFFLE9BQU8sQ0FBQyxPQUFSLENBQWdCLEdBQUcsQ0FBQSxtQkFBQSxDQUFuQixDQUFGLENBQWdELENBQUMsR0FBakQsQ0FBQTtRQUFILENBQWYsQ0FBSixFQUFnRjtVQUFFLFlBQUEsRUFBYztRQUFoQixDQUFoRjtRQU9HLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7Ozs7O0FBQ1QsY0FBQSxLQUFBLEVBQUE7VUFBUSxLQUFBLEdBQVE7VUFDUixJQUFBLEdBQVEsSUFBSSxDQUFDLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLGdEQUF4QjtpQkFDUixPQUFPLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEdBQXJDLENBQXlDLENBQUUsS0FBRixFQUFTLElBQVQsQ0FBekM7UUFIQyxDQUFBLElBVlQ7Ozs7Ozs7O1FBcUJNLEtBQUEsb0RBQUE7V0FBSSxDQUFFLEtBQUYsRUFBUyxPQUFULEVBQWtCLElBQWxCO1VBQ0YsUUFBQSxHQUFXLElBQUksQ0FBQyxLQUFMLENBQVcsZ0RBQVgsRUFBbkI7O1VBRVEsS0FBQSwwQ0FBQTs7WUFDRSxJQUFnQixlQUFoQjtBQUFBLHVCQUFBOztZQUNBLElBQVksT0FBQSxLQUFXLEVBQXZCO0FBQUEsdUJBQUE7O1lBQ0EsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQXBDLENBQXdDLENBQUUsS0FBRixFQUFTLE9BQVQsRUFBa0IsT0FBbEIsQ0FBeEM7VUFIRjtRQUhGLENBckJOOzs7OztlQWdDTztNQWpDQSxDQUFBLElBckRQOztBQXdGSSxhQUFPO0lBekZzQixDQXh3Qi9COztJQW8yQkEsbUNBQUEsRUFBcUMsUUFBQSxDQUFBLENBQUE7QUFDdkMsVUFBQSxLQUFBLEVBQUEsYUFBQSxFQUFBLEdBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxLQUFGLEVBQ0UsR0FERixFQUVFLFNBRkYsQ0FBQSxHQUVnQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQW5CLENBQUEsQ0FGaEM7TUFJTTs7UUFBTixNQUFBLGNBQUEsUUFBNEIsTUFBNUIsQ0FBQTs7VUFvREUsVUFBWSxDQUFBLENBQUE7aUJBQVosQ0FBQSxVQUNFLENBQUEsRUFBUjs7WUFFUSxJQUFDLENBQUEscUJBQUQsQ0FDRTtjQUFBLElBQUEsRUFBZ0IsYUFBaEI7Y0FDQSxPQUFBLEVBQWdCLENBQUUsU0FBRixDQURoQjtjQUVBLFVBQUEsRUFBZ0IsQ0FBRSxNQUFGLENBRmhCO2NBR0EsSUFBQSxFQUFNLFNBQUEsQ0FBRSxJQUFGLENBQUE7QUFDaEIsb0JBQUEsQ0FBQSxFQUFBLE9BQUEsRUFBQSxRQUFBLEVBQUE7Z0JBQVksUUFBQSxHQUFXLElBQUksQ0FBQyxLQUFMLENBQVcsZ0RBQVgsRUFBdkI7O2dCQUVZLEtBQUEsMENBQUE7O2tCQUNFLElBQWdCLGVBQWhCO0FBQUEsNkJBQUE7O2tCQUNBLElBQVksT0FBQSxLQUFXLEVBQXZCO0FBQUEsNkJBQUE7O2tCQUNBLE1BQU0sQ0FBQSxDQUFFLE9BQUYsQ0FBQTtnQkFIUjt1QkFJQztjQVBHO1lBSE4sQ0FERixFQUZSOztZQWVRLElBQUMsQ0FBQSxxQkFBRCxDQUNFO2NBQUEsSUFBQSxFQUFjLFlBQWQ7Y0FDQSxPQUFBLEVBQWMsQ0FBRSxTQUFGLEVBQWEsTUFBYixDQURkO2NBRUEsVUFBQSxFQUFjLENBQUUsTUFBRixDQUZkO2NBR0EsSUFBQSxFQUFNLFNBQUEsQ0FBRSxJQUFGLENBQUE7QUFDaEIsb0JBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7Z0JBQVksS0FBQSwyQ0FBQTttQkFBSTtvQkFBRSxHQUFBLEVBQUssT0FBUDtvQkFBZ0IsSUFBaEI7b0JBQXNCO2tCQUF0QjtrQkFDRixNQUFNLENBQUEsQ0FBRSxPQUFGLEVBQVcsSUFBWCxDQUFBO2dCQURSO3VCQUVDO2NBSEc7WUFITixDQURGLEVBZlI7O21CQXdCUztVQXpCUzs7UUFwRGQ7OztRQUVFLGFBQUMsQ0FBQSxLQUFELEdBQVE7O1VBRU4sR0FBRyxDQUFBOztxQkFBQSxDQUZHOztVQU1OLEdBQUcsQ0FBQTs7Ozs7OEJBQUEsQ0FORzs7VUFhTixHQUFHLENBQUE7Ozs7OzBDQUFBLENBYkc7Ozs7UUFxQlIsYUFBQyxDQUFBLFVBQUQsR0FFRSxDQUFBOztVQUFBLGlCQUFBLEVBQW1CLEdBQUcsQ0FBQTtpREFBQSxDQUF0Qjs7VUFHQSxjQUFBLEVBQWdCLEdBQUcsQ0FBQTttREFBQSxDQUhuQjs7VUFNQSx1QkFBQSxFQUF5QixHQUFHLENBQUEseUNBQUEsQ0FONUI7O1VBUUEsb0JBQUEsRUFBc0IsR0FBRyxDQUFBLHdEQUFBLENBUnpCO1VBU0Esc0JBQUEsRUFBd0IsR0FBRyxDQUFBOztpQ0FBQSxDQVQzQjs7VUFhQSxrQkFBQSxFQUFvQixHQUFHLENBQUEsb0NBQUEsQ0FidkI7O1VBZUEsaUJBQUEsRUFBbUIsR0FBRyxDQUFBOzs7Ozs7Ozs7eUJBQUE7UUFmdEI7Ozs7O01Bc0RELENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7UUFBTSxPQUFBLEdBQVk7UUFDWixPQUFBLEdBQVksSUFBSSxhQUFKLENBQWtCLE9BQWxCLEVBRGxCOzs7UUFJTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUUsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsR0FBRyxDQUFBLG1CQUFBLENBQW5CLENBQUYsQ0FBZ0QsQ0FBQyxHQUFqRCxDQUFBO1FBQUgsQ0FBZixDQUFKLEVBQWdGO1VBQUUsWUFBQSxFQUFjO1FBQWhCLENBQWhGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFFLE9BQU8sQ0FBQyxPQUFSLENBQWdCLEdBQUcsQ0FBQSxtQkFBQSxDQUFuQixDQUFGLENBQWdELENBQUMsR0FBakQsQ0FBQTtRQUFILENBQWYsQ0FBSixFQUFnRjtVQUFFLFlBQUEsRUFBYztRQUFoQixDQUFoRjtRQUVHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULGNBQUEsS0FBQSxFQUFBO1VBQVEsS0FBQSxHQUFRO1VBQ1IsSUFBQSxHQUFRLElBQUksQ0FBQyxPQUFMLENBQWEsU0FBYixFQUF3Qiw0Q0FBeEI7aUJBQ1IsT0FBTyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFyQyxDQUF5QyxDQUFFLEtBQUYsRUFBUyxJQUFULENBQXpDO1FBSEMsQ0FBQSxJQVBUOztRQVlNLE9BQU8sQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsR0FBckMsQ0FBQSxFQVpOOzs7O1FBZ0JNLElBQUEsR0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLE9BQTFDLENBQWtEO1VBQUUsT0FBQSxFQUFTO1FBQVgsQ0FBbEQ7UUFDUCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsS0FBQSxFQUFPLFFBQVQ7VUFBbUIsT0FBQSxFQUFTLEVBQTVCO1VBQWdDLE9BQUEsRUFBUztRQUF6QyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sUUFBVDtVQUFtQixPQUFBLEVBQVMsRUFBNUI7VUFBZ0MsT0FBQSxFQUFTO1FBQXpDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQyxNQUEzQyxFQW5CTjs7OztRQXVCTSxJQUFBLEdBQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUExQyxDQUFrRDtVQUFFLE9BQUEsRUFBUztRQUFYLENBQWxEO1FBQ1AsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLEtBQUEsRUFBTyxRQUFUO1VBQW1CLE9BQUEsRUFBUyxDQUE1QjtVQUErQixPQUFBLEVBQVM7UUFBeEMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsS0FBQSxFQUFPLFFBQVQ7VUFBbUIsT0FBQSxFQUFTLENBQTVCO1VBQStCLE9BQUEsRUFBUztRQUF4QyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sUUFBVDtVQUFtQixPQUFBLEVBQVMsQ0FBNUI7VUFBK0IsT0FBQSxFQUFTO1FBQXhDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLEtBQUEsRUFBTyxRQUFUO1VBQW1CLE9BQUEsRUFBUyxDQUE1QjtVQUErQixPQUFBLEVBQVM7UUFBeEMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsS0FBQSxFQUFPLFFBQVQ7VUFBbUIsT0FBQSxFQUFTLEVBQTVCO1VBQWdDLE9BQUEsRUFBUztRQUF6QyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sUUFBVDtVQUFtQixPQUFBLEVBQVMsRUFBNUI7VUFBZ0MsT0FBQSxFQUFTO1FBQXpDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLEtBQUEsRUFBTyxRQUFUO1VBQW1CLE9BQUEsRUFBUyxFQUE1QjtVQUFnQyxPQUFBLEVBQVM7UUFBekMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsS0FBQSxFQUFPLFFBQVQ7VUFBbUIsT0FBQSxFQUFTLEVBQTVCO1VBQWdDLE9BQUEsRUFBUztRQUF6QyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sUUFBVDtVQUFtQixPQUFBLEVBQVMsRUFBNUI7VUFBZ0MsT0FBQSxFQUFTO1FBQXpDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLEtBQUEsRUFBTyxRQUFUO1VBQW1CLE9BQUEsRUFBUyxFQUE1QjtVQUFnQyxPQUFBLEVBQVM7UUFBekMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDLE1BQTNDLEVBbENOOztlQW9DTztNQXJDQSxDQUFBLElBbkZQOztBQTBISSxhQUFPO0lBM0g0QixDQXAyQnJDOztJQWsrQkEsaUNBQUEsRUFBbUMsUUFBQSxDQUFBLENBQUE7QUFDckMsVUFBQSxTQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEscUJBQUEsRUFBQSxFQUFBLEVBQUEsTUFBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFNBQUYsRUFDRSxJQURGLEVBRUUsS0FGRixFQUdFLEdBSEYsRUFJRSxTQUpGLENBQUEsR0FJZ0MsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFuQixDQUFBLENBSmhDO01BS0EsQ0FBQSxDQUFFLElBQUYsRUFDRSxNQURGLENBQUEsR0FDZ0MsU0FBUyxDQUFDLDRCQUFWLENBQUEsQ0FBd0MsQ0FBQyxNQUR6RTtNQUVBLHFCQUFBLEdBQWdDLE1BUHBDOztNQVNJLEVBQUEsR0FBSyxJQUFJLFNBQUosQ0FBYyxVQUFkLEVBVFQ7O01BV0ksSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLEVBQUUsQ0FBQyxrQkFBSCxDQUFzQixRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFFLENBQUMsa0JBQUgsQ0FBc0IsUUFBQSxDQUFBLENBQUE7bUJBQUc7VUFBSCxDQUF0QjtRQUFILENBQXRCO01BQUgsQ0FBZixDQUFSLEVBQXFGLG1EQUFyRjtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxFQUFFLENBQUMsZ0JBQUgsQ0FBb0IsUUFBcEIsRUFBOEIsU0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBcUYseUJBQXJGLEVBWko7O01BY0ksSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixRQUFwQjtNQUFILENBQWYsQ0FBUixFQUFxRixrQkFBckYsRUFkSjs7TUFnQkksU0FBQSxHQUFhLEVBQUUsQ0FBQyxlQUFILENBQW1CLHFCQUFuQixFQWhCakI7O01Ba0JJLEVBQUUsQ0FBQyxrQkFBSCxDQUFzQixDQUFBLENBQUEsR0FBQTtBQUMxQixZQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFNLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsRUFBRSxDQUFDLGdCQUFILENBQW9CLFFBQXBCO1FBQUgsQ0FBZixDQUFSLEVBQTBELGtCQUExRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUksRUFBRSxDQUFDLGVBQUgsQ0FBbUIscUJBQW5CO1FBQUosQ0FBZixDQUFKLEVBQXFFO1VBQUUsa0JBQUEsRUFBb0I7WUFBRSxFQUFBLEVBQUksQ0FBTjtZQUFTLEVBQUEsRUFBSSxDQUFiO1lBQWdCLEVBQUEsRUFBSSxDQUFwQjtZQUF1QixFQUFBLEVBQUksQ0FBM0I7WUFBOEIsRUFBQSxFQUFJLE1BQWxDO1lBQTZDLEVBQUEsRUFBSTtVQUFqRDtRQUF0QixDQUFyRSxFQUROOztRQUdNLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBVCxHQUF5QixJQUFBLENBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFkLEVBQTZCLFFBQUEsQ0FBRSxDQUFGLENBQUE7aUJBQ3BELENBQUMsQ0FBRSxpQkFBRixDQUFELEdBQXlCO1lBQUUsSUFBQSxFQUFNLGlCQUFSO1lBQTJCLEtBQUEsRUFBTyxDQUFsQztZQUFxQyxLQUFBLEVBQU8sQ0FBQztVQUE3QztRQUQyQixDQUE3QjtRQUV6QixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFJLEVBQUUsQ0FBQyxlQUFILENBQW1CLHFCQUFuQjtRQUFKLENBQWYsQ0FBSixFQUFxRTtVQUFFLGlCQUFBLEVBQW1CO1lBQUUsRUFBQSxFQUFJLE1BQU47WUFBaUIsRUFBQSxFQUFJLE1BQXJCO1lBQWdDLEVBQUEsRUFBSSxDQUFwQztZQUF1QyxFQUFBLEVBQUksQ0FBM0M7WUFBOEMsRUFBQSxFQUFJLE1BQWxEO1lBQTZELEVBQUEsRUFBSTtVQUFqRSxDQUFyQjtVQUEyRixrQkFBQSxFQUFvQjtZQUFFLEVBQUEsRUFBSSxDQUFOO1lBQVMsRUFBQSxFQUFJLENBQWI7WUFBZ0IsRUFBQSxFQUFJLENBQXBCO1lBQXVCLEVBQUEsRUFBSSxDQUEzQjtZQUE4QixFQUFBLEVBQUksTUFBbEM7WUFBNkMsRUFBQSxFQUFJO1VBQWpEO1FBQS9HLENBQXJFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFFLENBQUMsd0JBQUgsQ0FBNEIsaUJBQTVCO1FBQUgsQ0FBZixDQUFKLEVBQXVFLEVBQXZFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFFLENBQUMsd0JBQUgsQ0FBNEIsaUJBQTVCO1FBQUgsQ0FBZixDQUFKLEVBQXVFLEVBQXZFO1FBQ0EsRUFBRSxDQUFDLGdCQUFILENBQW9CLE1BQXBCLEVBQTRCLElBQTVCO1FBQ0EsRUFBRSxDQUFDLGdCQUFILENBQW9CLE1BQXBCLEVBQTRCLEtBQTVCO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFFLENBQUMsZ0JBQUgsQ0FBb0IsTUFBcEI7UUFBSCxDQUFmLENBQUosRUFBb0QsSUFBcEQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixNQUFwQjtRQUFILENBQWYsQ0FBSixFQUFvRCxLQUFwRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUksRUFBRSxDQUFDLGVBQUgsQ0FBbUIscUJBQW5CO1FBQUosQ0FBZixDQUFKLEVBQXFFO1VBQUUsSUFBQSxFQUFNO1lBQUUsRUFBQSxFQUFJLE1BQU47WUFBaUIsRUFBQSxFQUFJLE1BQXJCO1lBQWdDLEVBQUEsRUFBSSxJQUFwQztZQUEwQyxFQUFBLEVBQUksSUFBOUM7WUFBb0QsRUFBQSxFQUFJLE1BQXhEO1lBQW1FLEVBQUEsRUFBSTtVQUF2RSxDQUFSO1VBQXdGLElBQUEsRUFBTTtZQUFFLEVBQUEsRUFBSSxNQUFOO1lBQWlCLEVBQUEsRUFBSSxNQUFyQjtZQUFnQyxFQUFBLEVBQUksS0FBcEM7WUFBMkMsRUFBQSxFQUFJLElBQS9DO1lBQXFELEVBQUEsRUFBSSxNQUF6RDtZQUFvRSxFQUFBLEVBQUk7VUFBeEUsQ0FBOUY7VUFBK0ssaUJBQUEsRUFBbUI7WUFBRSxFQUFBLEVBQUksTUFBTjtZQUFpQixFQUFBLEVBQUksTUFBckI7WUFBZ0MsRUFBQSxFQUFJLEVBQXBDO1lBQXdDLEVBQUEsRUFBSSxDQUE1QztZQUErQyxFQUFBLEVBQUksTUFBbkQ7WUFBOEQsRUFBQSxFQUFJO1VBQWxFLENBQWxNO1VBQTBRLGtCQUFBLEVBQW9CO1lBQUUsRUFBQSxFQUFJLENBQU47WUFBUyxFQUFBLEVBQUksQ0FBYjtZQUFnQixFQUFBLEVBQUksQ0FBcEI7WUFBdUIsRUFBQSxFQUFJLENBQTNCO1lBQThCLEVBQUEsRUFBSSxNQUFsQztZQUE2QyxFQUFBLEVBQUk7VUFBakQ7UUFBOVIsQ0FBckU7ZUFDQztNQWRtQixDQUF0QixFQWxCSjs7TUFrQ0ksRUFBRSxDQUFDLGtCQUFILENBQXNCO1FBQUUsSUFBQSxFQUFNLE9BQVI7UUFBaUIsR0FBQSxFQUFLO01BQXRCLENBQXRCLEVBQTJELENBQUEsQ0FBQSxHQUFBO0FBQy9ELFlBQUEsVUFBQSxFQUFBO1FBQU0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFFLENBQUMsZ0JBQUgsQ0FBb0IsTUFBcEI7UUFBSCxDQUFmLENBQUosRUFBb0QsT0FBcEQsRUFBTjs7UUFFTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFJLEVBQUUsQ0FBQyxlQUFILENBQW1CLHFCQUFuQjtRQUFKLENBQWYsQ0FBSixFQUFxRTtVQUFFLElBQUEsRUFBTTtZQUFFLEVBQUEsRUFBSSxJQUFOO1lBQVksRUFBQSxFQUFJLElBQWhCO1lBQXNCLEVBQUEsRUFBSSxJQUExQjtZQUFnQyxFQUFBLEVBQUksSUFBcEM7WUFBMEMsRUFBQSxFQUFJLE1BQTlDO1lBQXlELEVBQUEsRUFBSTtVQUE3RCxDQUFSO1VBQTZFLEdBQUEsRUFBSztZQUFFLEVBQUEsRUFBSSxNQUFOO1lBQWlCLEVBQUEsRUFBSSxNQUFyQjtZQUFnQyxFQUFBLEVBQUksTUFBcEM7WUFBK0MsRUFBQSxFQUFJLE1BQW5EO1lBQThELEVBQUEsRUFBSSxVQUFsRTtZQUE4RSxFQUFBLEVBQUk7VUFBbEYsQ0FBbEY7VUFBa0wsSUFBQSxFQUFNO1lBQUUsRUFBQSxFQUFJLE9BQU47WUFBZSxFQUFBLEVBQUksSUFBbkI7WUFBeUIsRUFBQSxFQUFJLEtBQTdCO1lBQW9DLEVBQUEsRUFBSSxJQUF4QztZQUE4QyxFQUFBLEVBQUksT0FBbEQ7WUFBMkQsRUFBQSxFQUFJO1VBQS9ELENBQXhMO1VBQWtRLGlCQUFBLEVBQW1CO1lBQUUsRUFBQSxFQUFJLEVBQU47WUFBVSxFQUFBLEVBQUksQ0FBZDtZQUFpQixFQUFBLEVBQUksRUFBckI7WUFBeUIsRUFBQSxFQUFJLENBQTdCO1lBQWdDLEVBQUEsRUFBSSxNQUFwQztZQUErQyxFQUFBLEVBQUk7VUFBbkQsQ0FBclI7VUFBOFUsa0JBQUEsRUFBb0I7WUFBRSxFQUFBLEVBQUksQ0FBTjtZQUFTLEVBQUEsRUFBSSxDQUFiO1lBQWdCLEVBQUEsRUFBSSxDQUFwQjtZQUF1QixFQUFBLEVBQUksQ0FBM0I7WUFBOEIsRUFBQSxFQUFJLE1BQWxDO1lBQTZDLEVBQUEsRUFBSTtVQUFqRDtRQUFsVyxDQUFyRTtlQUNDO01BSndELENBQTNELEVBbENKOztNQXdDSSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUksRUFBRSxDQUFDLGVBQUgsQ0FBbUIscUJBQW5CO01BQUosQ0FBZixDQUFKLEVBQXFFO1FBQUUsSUFBQSxFQUFNO1VBQUUsRUFBQSxFQUFJLElBQU47VUFBWSxFQUFBLEVBQUksSUFBaEI7VUFBc0IsRUFBQSxFQUFJLElBQTFCO1VBQWdDLEVBQUEsRUFBSSxJQUFwQztVQUEwQyxFQUFBLEVBQUksTUFBOUM7VUFBeUQsRUFBQSxFQUFJO1FBQTdELENBQVI7UUFBNkUsSUFBQSxFQUFNO1VBQUUsRUFBQSxFQUFJLE9BQU47VUFBZSxFQUFBLEVBQUksSUFBbkI7VUFBeUIsRUFBQSxFQUFJLEtBQTdCO1VBQW9DLEVBQUEsRUFBSSxJQUF4QztVQUE4QyxFQUFBLEVBQUksTUFBbEQ7VUFBNkQsRUFBQSxFQUFJO1FBQWpFLENBQW5GO1FBQTZKLGlCQUFBLEVBQW1CO1VBQUUsRUFBQSxFQUFJLEVBQU47VUFBVSxFQUFBLEVBQUksQ0FBZDtVQUFpQixFQUFBLEVBQUksRUFBckI7VUFBeUIsRUFBQSxFQUFJLENBQTdCO1VBQWdDLEVBQUEsRUFBSSxNQUFwQztVQUErQyxFQUFBLEVBQUk7UUFBbkQsQ0FBaEw7UUFBeU8sa0JBQUEsRUFBb0I7VUFBRSxFQUFBLEVBQUksQ0FBTjtVQUFTLEVBQUEsRUFBSSxDQUFiO1VBQWdCLEVBQUEsRUFBSSxDQUFwQjtVQUF1QixFQUFBLEVBQUksQ0FBM0I7VUFBOEIsRUFBQSxFQUFJLE1BQWxDO1VBQTZDLEVBQUEsRUFBSTtRQUFqRDtNQUE3UCxDQUFyRTtNQUNBLEVBQUUsQ0FBQyxrQkFBSCxDQUFzQixDQUFBLENBQUEsR0FBQTtBQUMxQixZQUFBO1FBQU0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBSSxFQUFFLENBQUMsZUFBSCxDQUFtQixxQkFBbkI7UUFBSixDQUFmLENBQUosRUFBcUU7VUFBRSxJQUFBLEVBQU07WUFBRSxFQUFBLEVBQUksSUFBTjtZQUFZLEVBQUEsRUFBSSxJQUFoQjtZQUFzQixFQUFBLEVBQUksSUFBMUI7WUFBZ0MsRUFBQSxFQUFJLElBQXBDO1lBQTBDLEVBQUEsRUFBSSxNQUE5QztZQUF5RCxFQUFBLEVBQUk7VUFBN0QsQ0FBUjtVQUE2RSxJQUFBLEVBQU07WUFBRSxFQUFBLEVBQUksT0FBTjtZQUFlLEVBQUEsRUFBSSxJQUFuQjtZQUF5QixFQUFBLEVBQUksS0FBN0I7WUFBb0MsRUFBQSxFQUFJLElBQXhDO1lBQThDLEVBQUEsRUFBSSxNQUFsRDtZQUE2RCxFQUFBLEVBQUk7VUFBakUsQ0FBbkY7VUFBNkosaUJBQUEsRUFBbUI7WUFBRSxFQUFBLEVBQUksRUFBTjtZQUFVLEVBQUEsRUFBSSxDQUFkO1lBQWlCLEVBQUEsRUFBSSxFQUFyQjtZQUF5QixFQUFBLEVBQUksQ0FBN0I7WUFBZ0MsRUFBQSxFQUFJLE1BQXBDO1lBQStDLEVBQUEsRUFBSTtVQUFuRCxDQUFoTDtVQUF5TyxrQkFBQSxFQUFvQjtZQUFFLEVBQUEsRUFBSSxDQUFOO1lBQVMsRUFBQSxFQUFJLENBQWI7WUFBZ0IsRUFBQSxFQUFJLENBQXBCO1lBQXVCLEVBQUEsRUFBSSxDQUEzQjtZQUE4QixFQUFBLEVBQUksTUFBbEM7WUFBNkMsRUFBQSxFQUFJO1VBQWpEO1FBQTdQLENBQXJFO2VBQ0M7TUFGbUIsQ0FBdEIsRUF6Q0o7O01BNkNJLEVBQUUsQ0FBQyxrQkFBSCxDQUFzQixDQUFBLENBQUEsR0FBQTtBQUMxQixZQUFBLElBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUE7OztRQUVNLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixhQUFwQixFQUFtQyxDQUFuQyxFQUFzQyxDQUF0QztRQUNBLEVBQUUsQ0FBQyxPQUFILENBQVcsR0FBRyxDQUFBOzs7OztTQUFBLENBQWQ7UUFNQSxFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQSw4Q0FBQSxDQUFkO1FBQ0EsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUE7Ozs7Ozs7Q0FBQSxDQUFkO1FBUUEsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUEsdURBQUEsQ0FBZCxFQWxCTjs7UUFvQk0sSUFBQSxHQUFPLEVBQUUsQ0FBQyxJQUFILENBQVEsR0FBRyxDQUFBLHNDQUFBLENBQVg7UUFDUCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsS0FBQSxFQUFPLGVBQVQ7VUFBMEIsTUFBQSxFQUFRO1FBQWxDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLEtBQUEsRUFBTyxlQUFUO1VBQTBCLE1BQUEsRUFBUTtRQUFsQyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMEMsSUFBMUM7ZUFDQztNQXpCbUIsQ0FBdEI7TUEwQkMsS0F2RUw7O01BeUVJLEVBQUUsQ0FBQyxrQkFBSCxDQUFzQixDQUFBLENBQUEsR0FBQTtBQUMxQixZQUFBLElBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUE7OztRQUVNLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixhQUFwQixFQUFtQyxDQUFuQyxFQUFzQyxDQUF0QztRQUNBLEVBQUUsQ0FBQyxPQUFILENBQVcsR0FBRyxDQUFBOzs7U0FBQSxDQUFkO1FBSUEsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUE7Ozs7O0NBQUEsQ0FBZDtRQU1BLEVBQUUsQ0FBQyxPQUFILENBQVcsR0FBRyxDQUFBLDJEQUFBLENBQWQsRUFiTjs7UUFlTSxJQUFBLEdBQU8sRUFBRSxDQUFDLElBQUgsQ0FBUSxHQUFHLENBQUEscUNBQUEsQ0FBWDtRQUNQLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sZUFBVDtVQUEwQixNQUFBLEVBQVE7UUFBbEMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsS0FBQSxFQUFPLGVBQVQ7VUFBMEIsTUFBQSxFQUFRO1FBQWxDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEwQyxJQUExQztlQUNDO01BcEJtQixDQUF0QjtNQXNCRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLGFBQUEsRUFBQSxJQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBOzs7O1FBR00sSUFBQSxHQUFPLEVBQUUsQ0FBQyxJQUFILENBQVEsR0FBRyxDQUFBLHNDQUFBLENBQVg7UUFDUCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsS0FBQSxFQUFPLGVBQVQ7VUFBMEIsTUFBQSxFQUFRO1FBQWxDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLEtBQUEsRUFBTyxlQUFUO1VBQTBCLE1BQUEsRUFBUTtRQUFsQyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMEMsSUFBMUMsRUFOTjs7UUFRTSxhQUFBLEdBQWdCLEVBQUUsQ0FBQyxPQUFILENBQVcsR0FBRyxDQUFBLGtEQUFBLENBQWQsRUFSdEI7O1FBVU0sRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUE7Ozs7Z0dBQUEsQ0FBZCxFQVZOOztRQWdCTSxFQUFFLENBQUMsa0JBQUgsQ0FBc0IsQ0FBQSxDQUFBLEdBQUE7QUFDNUIsY0FBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBO0FBQVE7VUFBQSxLQUFXLG1JQUFYO1lBQ0UsTUFBQSxHQUFTLE1BQU0sQ0FBQyxhQUFQLENBQXFCLEdBQXJCO3lCQUNULGFBQWEsQ0FBQyxHQUFkLENBQWtCLENBQUUsTUFBRixDQUFsQjtVQUZGLENBQUE7O1FBRG9CLENBQXRCLEVBaEJOOztlQXFCTSxFQUFFLENBQUMsa0JBQUgsQ0FBc0I7VUFBRSxZQUFBLEVBQWMsR0FBaEI7VUFBcUIsV0FBQSxFQUFhO1FBQWxDLENBQXRCLEVBQStELENBQUEsQ0FBQSxHQUFBO0FBQ3JFLGNBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO1VBQVEsTUFBQSxHQUFZOztBQUFFO1lBQUEsS0FBQSxrRUFBQTsyQkFBQSxHQUFHLENBQUM7WUFBSixDQUFBOztjQUFGLENBQXNGLENBQUMsSUFBdkYsQ0FBNEYsR0FBNUY7VUFDWixTQUFBLEdBQWEsRUFBRSxDQUFDLGVBQUgsQ0FBbUIscUJBQW5CO1VBQ2IsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRztVQUFILENBQWYsQ0FBSixFQUFxRCxlQUFyRDtVQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7QUFBRSxnQkFBQTsrREFBdUIsQ0FBRTtVQUEzQixDQUFmLENBQUosRUFBcUQsR0FBckQ7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO0FBQUUsZ0JBQUE7OERBQXNCLENBQUU7VUFBMUIsQ0FBZixDQUFKLEVBQXFELEdBQXJEO2lCQUNDO1FBTjRELENBQS9EO01BdEJDLENBQUE7TUE4QkEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBOztBQUNQLFlBQUEsYUFBQTs7Ozs7Ozs7Ozs7Ozs7OztRQWVNLEVBQUUsQ0FBQyxPQUFILENBQVcsR0FBRyxDQUFBOzs7OztxRUFBQSxDQUFkO1FBT0EsYUFBQSxHQUFnQixFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQTs7O01BQUEsQ0FBZCxFQXRCdEI7OztRQTRCTSxFQUFFLENBQUMsa0JBQUgsQ0FBc0IsQ0FBQSxDQUFBLEdBQUE7VUFDcEIsRUFBRSxDQUFDLGdCQUFILENBQW9CLHNCQUFwQixFQUE0QyxHQUE1QyxFQUFpRCxDQUFDLEdBQWxEO2lCQUNDO1FBRm1CLENBQXRCLEVBNUJOOzs7ZUFpQ00sRUFBRSxDQUFDLGtCQUFILENBQXNCLENBQUEsQ0FBQSxHQUFBO1VBQ3BCLGFBQWEsQ0FBQyxHQUFkLENBQWtCO1lBQUUsRUFBQSxFQUFJLEtBQU47WUFBYyxFQUFBLEVBQUk7VUFBbEIsQ0FBbEI7VUFDQSxhQUFhLENBQUMsR0FBZCxDQUFrQjtZQUFFLEVBQUEsRUFBSSxLQUFOO1lBQWMsRUFBQSxFQUFJO1VBQWxCLENBQWxCO1VBQ0EsYUFBYSxDQUFDLEdBQWQsQ0FBa0I7WUFBRSxFQUFBLEVBQUksTUFBTjtZQUFjLEVBQUEsRUFBSTtVQUFsQixDQUFsQjtVQUNBLGFBQWEsQ0FBQyxHQUFkLENBQWtCO1lBQUUsRUFBQSxFQUFJLE1BQU47WUFBYyxFQUFBLEVBQUk7VUFBbEIsQ0FBbEI7VUFDQSxhQUFhLENBQUMsR0FBZCxDQUFrQjtZQUFFLEVBQUEsRUFBSSxNQUFOO1lBQWMsRUFBQSxFQUFJO1VBQWxCLENBQWxCO1VBQ0EsYUFBYSxDQUFDLEdBQWQsQ0FBa0I7WUFBRSxFQUFBLEVBQUksTUFBTjtZQUFjLEVBQUEsRUFBSTtVQUFsQixDQUFsQjtpQkFDQztRQVBtQixDQUF0QjtNQWxDQyxDQUFBLElBN0hQOztNQXdLSSxTQUFBLEdBQWEsRUFBRSxDQUFDLGVBQUgsQ0FBbUIscUJBQW5CO01BQ2IsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtBQUFFLFlBQUE7c0VBQW9DLENBQUU7TUFBeEMsQ0FBZixDQUFKLEVBQWtFLEdBQWxFLEVBektKOztNQTJLSSxJQUFBLEdBQU8sRUFBRSxDQUFDLElBQUgsQ0FBUSxHQUFHLENBQUEscUNBQUEsQ0FBWDtNQUNQLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztNQUFmLENBQWYsQ0FBSixFQUEyQztRQUFFLEtBQUEsRUFBTyxhQUFUO1FBQXdCLEVBQUEsRUFBSSxNQUE1QjtRQUFvQyxFQUFBLEVBQUk7TUFBeEMsQ0FBM0M7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7TUFBZixDQUFmLENBQUosRUFBMkM7UUFBRSxLQUFBLEVBQU8sYUFBVDtRQUF3QixFQUFBLEVBQUksTUFBNUI7UUFBb0MsRUFBQSxFQUFJO01BQXhDLENBQTNDO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO01BQWYsQ0FBZixDQUFKLEVBQTJDO1FBQUUsS0FBQSxFQUFPLGFBQVQ7UUFBd0IsRUFBQSxFQUFJLEtBQTVCO1FBQW1DLEVBQUEsRUFBSTtNQUF2QyxDQUEzQztNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztNQUFmLENBQWYsQ0FBSixFQUEyQztRQUFFLEtBQUEsRUFBTyxhQUFUO1FBQXdCLEVBQUEsRUFBSSxLQUE1QjtRQUFtQyxFQUFBLEVBQUk7TUFBdkMsQ0FBM0M7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7TUFBZixDQUFmLENBQUosRUFBMkM7UUFBRSxLQUFBLEVBQU8sYUFBVDtRQUF3QixFQUFBLEVBQUksTUFBNUI7UUFBb0MsRUFBQSxFQUFJO01BQXhDLENBQTNDO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO01BQWYsQ0FBZixDQUFKLEVBQTJDO1FBQUUsS0FBQSxFQUFPLGFBQVQ7UUFBd0IsRUFBQSxFQUFJLE1BQTVCO1FBQW9DLEVBQUEsRUFBSTtNQUF4QyxDQUEzQztNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztNQUFmLENBQWYsQ0FBSixFQUEwQyxJQUExQzthQUNDO0lBcExnQyxDQWwrQm5DOztJQXlwQ0EsaUJBQUEsRUFBbUIsUUFBQSxDQUFBLENBQUE7QUFDckIsVUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBLFNBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxLQUFGLEVBQ0UsSUFERixFQUVFLEtBRkYsRUFHRSxHQUhGLEVBSUUsU0FKRixDQUFBLEdBSWdDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBbkIsQ0FBQSxDQUpoQztNQUtBLENBQUEsQ0FBRSxJQUFGLEVBQ0UsTUFERixDQUFBLEdBQ2dDLFNBQVMsQ0FBQyw0QkFBVixDQUFBLENBQXdDLENBQUMsTUFEekU7TUFHRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBO1FBQU0sRUFBQSxHQUFLLElBQUksS0FBSixDQUFVLFVBQVY7UUFDTCxDQUFFLEVBQUUsQ0FBQyxPQUFILENBQVcsR0FBRyxDQUFBLHlCQUFBLENBQWQsQ0FBRixDQUFnRCxDQUFDLEdBQWpELENBQUE7UUFDQSxFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQSw2QkFBQSxDQUFkO1FBQ0EsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUEsOEJBQUEsQ0FBZDtRQUNBLEVBQUUsQ0FBQyxPQUFILENBQVcsR0FBRyxDQUFBLCtCQUFBLENBQWQ7UUFDQSxFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQSwrQkFBQSxDQUFkLEVBTE47O2VBT087TUFSQSxDQUFBO01BVUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxFQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFNLEVBQUEsR0FBSyxJQUFJLEtBQUosQ0FBVSxVQUFWO1FBQ0wsQ0FBRSxFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQSx5QkFBQSxDQUFkLENBQUYsQ0FBZ0QsQ0FBQyxHQUFqRCxDQUFBO1FBQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQSw0Q0FBQSxDQUFkO1FBQUgsQ0FBZixDQUFSLEVBQTBGLDJCQUExRjtRQUNBLEVBQUUsQ0FBQyxPQUFILENBQVcsR0FBRyxDQUFBLDRDQUFBLENBQWQ7UUFDQSxFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQSxvQ0FBQSxDQUFkO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFFLEVBQUUsQ0FBQyxTQUFILENBQWEsR0FBRyxDQUFBLCtCQUFBLENBQWhCLENBQUYsQ0FBcUQsQ0FBQztRQUF6RCxDQUFmLENBQUosRUFBb0YsU0FBcEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUUsRUFBRSxDQUFDLFNBQUgsQ0FBYSxHQUFHLENBQUEsK0JBQUEsQ0FBaEIsQ0FBRixDQUFxRCxDQUFDO1FBQXpELENBQWYsQ0FBSixFQUFvRixNQUFwRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBRSxFQUFFLENBQUMsU0FBSCxDQUFhLEdBQUcsQ0FBQSwrQkFBQSxDQUFoQixDQUFGLENBQXFELENBQUM7UUFBekQsQ0FBZixDQUFKLEVBQW9GLE1BQXBGO1FBQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQSxxQ0FBQSxDQUFkO1FBQUgsQ0FBZixDQUFSLEVBQW1GLDJDQUFuRjtRQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUEscUNBQUEsQ0FBZDtRQUFILENBQWYsQ0FBUixFQUFtRiwyQ0FBbkYsRUFUTjs7ZUFXTztNQVpBLENBQUEsSUFsQlA7O2FBZ0NLO0lBakNnQixDQXpwQ25COztJQTZyQ0EsK0JBQUEsRUFBaUMsUUFBQSxDQUFBLENBQUE7QUFDbkMsVUFBQSxLQUFBLEVBQUEsU0FBQSxFQUFBLEtBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxLQUFGLEVBQ0UsU0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsR0FKRixFQUtFLEdBTEYsRUFNRSxTQU5GLENBQUEsR0FNZ0MsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFuQixDQUFBLENBTmhDO01BUUcsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxJQUFBLEVBQUEsRUFBQSxFQUFBLE1BQUEsRUFBQSxjQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFNLE1BQUEsR0FBUztRQUNIO1VBQU4sTUFBQSxLQUFBLFFBQW1CLFVBQW5CLENBQUE7O1VBQ0UsSUFBQyxDQUFBLEtBQUQsR0FBUTtZQUNOLFFBQUEsQ0FBQSxDQUFBO3FCQUFHLEdBQUcsQ0FBQSxhQUFBLENBQUEsQ0FBa0IsR0FBQSxDQUFJLENBQUEsQ0FBQSxDQUFHLE1BQUgsQ0FBQSxNQUFBLENBQUosQ0FBbEIsQ0FBQSxZQUFBO1lBQU4sQ0FETTtZQUVOLFFBQUEsQ0FBQSxDQUFBO3FCQUFHLEdBQUcsQ0FBQSxZQUFBLENBQUEsQ0FBaUIsR0FBQSxDQUFJLENBQUEsQ0FBQSxDQUFHLE1BQUgsQ0FBQSxNQUFBLENBQUosQ0FBakIsQ0FBQSwyQkFBQTtZQUFOLENBRk07WUFHTixRQUFBLENBQUEsQ0FBQTtxQkFBRyxHQUFHLENBQUEsWUFBQSxDQUFBLENBQWlCLEdBQUEsQ0FBSSxDQUFBLENBQUEsQ0FBRyxNQUFILENBQUEsTUFBQSxDQUFKLENBQWpCLENBQUEsK0JBQUE7WUFBTixDQUhNOzs7Ozs7UUFLVixFQUFBLEdBQUssSUFBSSxJQUFKLENBQUE7UUFDTCxjQUFBLEdBQWlCLElBQUksR0FBSjs7QUFBVTtVQUFBLEtBQUEsaURBQUE7eUJBQUEsR0FBRyxDQUFDO1VBQUosQ0FBQTs7WUFBVjtRQUNqQixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLGNBQWMsQ0FBQyxHQUFmLENBQW1CLFdBQW5CO1FBQUgsQ0FBZixDQUFKLEVBQTZELElBQTdEO1FBQ0EsSUFBQSxHQUFPLEVBQUUsQ0FBQyxJQUFILENBQVEsR0FBRyxDQUFBLGNBQUEsQ0FBQSxDQUFtQixHQUFBLENBQUksQ0FBQSxDQUFBLENBQUcsTUFBSCxDQUFBLE1BQUEsQ0FBSixDQUFuQixFQUFBLENBQVg7UUFDUCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDLEtBQUssQ0FBQztRQUFyQixDQUFmLENBQUosRUFBNkQsUUFBN0Q7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDLEtBQUssQ0FBQztRQUFyQixDQUFmLENBQUosRUFBNkQsWUFBN0Q7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTZELElBQTdEO2VBQ0M7TUFmQSxDQUFBO01BaUJBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsSUFBQSxFQUFBLEVBQUEsRUFBQSxNQUFBLEVBQUEsY0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7UUFBTSxNQUFBLEdBQVM7UUFDSDtVQUFOLE1BQUEsS0FBQSxRQUFtQixVQUFuQixDQUFBOztVQUNFLElBQUMsQ0FBQSxLQUFELEdBQVE7WUFDTixRQUFBLENBQUEsQ0FBQTtxQkFBRyxHQUFHLENBQUEsYUFBQSxDQUFBLENBQWtCLEdBQUEsQ0FBSSxDQUFBLENBQUEsQ0FBRyxNQUFILENBQUEsTUFBQSxDQUFKLENBQWxCLENBQUEsWUFBQTtZQUFOLENBRE07WUFFTixRQUFBLENBQUEsQ0FBQTtxQkFBRyxHQUFHLENBQUEsWUFBQSxDQUFBLENBQWlCLEdBQUEsQ0FBSSxDQUFBLENBQUEsQ0FBRyxNQUFILENBQUEsTUFBQSxDQUFKLENBQWpCLENBQUEsMkJBQUE7WUFBTixDQUZNO1lBR04sUUFBQSxDQUFBLENBQUE7cUJBQUcsR0FBRyxDQUFBLFlBQUEsQ0FBQSxDQUFpQixHQUFBLENBQUksQ0FBQSxDQUFBLENBQUcsTUFBSCxDQUFBLE1BQUEsQ0FBSixDQUFqQixDQUFBLCtCQUFBO1lBQU4sQ0FITTs7O1VBS1IsSUFBQyxDQUFBLFVBQUQsR0FDRTtZQUFBLFlBQUEsRUFBYyxRQUFBLENBQUEsQ0FBQTtxQkFBRyxHQUFHLENBQUEsY0FBQSxDQUFBLENBQW1CLEdBQUEsQ0FBSSxDQUFBLENBQUEsQ0FBRyxNQUFILENBQUEsTUFBQSxDQUFKLENBQW5CLENBQUEsWUFBQTtZQUFOO1VBQWQ7Ozs7O1FBQ0osRUFBQSxHQUFLLElBQUksSUFBSixDQUFBO1FBQ0wsY0FBQSxHQUFpQixJQUFJLEdBQUo7O0FBQVU7VUFBQSxLQUFBLGlEQUFBO3lCQUFBLEdBQUcsQ0FBQztVQUFKLENBQUE7O1lBQVY7UUFDakIsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxjQUFjLENBQUMsR0FBZixDQUFtQixXQUFuQjtRQUFILENBQWYsQ0FBSixFQUE2RCxJQUE3RCxFQVhOOztRQWFNLElBQUEsR0FBTyxFQUFFLENBQUMsSUFBSCxDQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBdEI7UUFDUCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDLEtBQUssQ0FBQztRQUFyQixDQUFmLENBQUosRUFBNkQsUUFBN0Q7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDLEtBQUssQ0FBQztRQUFyQixDQUFmLENBQUosRUFBNkQsWUFBN0Q7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTZELElBQTdEO2VBQ0M7TUFsQkEsQ0FBQSxJQXpCUDs7YUE2Q0s7SUE5QzhCLENBN3JDakM7O0lBOHVDQSx1QkFBQSxFQUF5QixRQUFBLENBQUEsQ0FBQTtBQUMzQixVQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLEtBQUYsRUFDRSxTQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxHQUpGLEVBS0UsR0FMRixFQU1FLFNBTkYsQ0FBQSxHQU1nQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQW5CLENBQUEsQ0FOaEM7TUFRRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsZ0RBQUEsRUFBQSxtQkFBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7UUFBWTtVQUFOLE1BQUEsS0FBQSxRQUFtQixNQUFuQjtZQUNFLG1CQUFxQixDQUFBLENBQUEsRUFBQTs7VUFEdkI7O1VBRUUsSUFBQyxDQUFBLEtBQUQsR0FBUTtZQUNOLFFBQUEsQ0FBQSxDQUFBO3FCQUFHLEdBQUcsQ0FBQSxrQ0FBQTtZQUFOLENBRE07WUFFTixRQUFBLENBQUEsQ0FBQTtxQkFBRyxHQUFHLENBQUEsZ0RBQUE7WUFBTixDQUZNO1lBR04sUUFBQSxDQUFBLENBQUE7cUJBQUcsR0FBRyxDQUFBLG9EQUFBO1lBQU4sQ0FITTs7Ozs7O1FBS0osT0FBTixNQUFBLEtBQUEsUUFBbUIsS0FBbkI7VUFDRSxtQkFBcUIsQ0FBQSxDQUFBLEVBQUE7O1FBRHZCLEVBUE47O1FBVU0sQ0FBQSxDQUFFLG1CQUFGLENBQUEsR0FBMkIsQ0FBRSxPQUFBLENBQVEsbUVBQVIsQ0FBRixDQUErRSxDQUFDLDJCQUFoRixDQUFBLENBQTNCLEVBVk47O1FBWU0sZ0RBQUEsR0FBbUQsUUFBQSxDQUFFLENBQUYsQ0FBQTtBQUN6RCxjQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUE7VUFBUSxDQUFBLEdBQUksTUFBTSxDQUFDLE1BQVAsQ0FBYyxJQUFkO1VBQ0osSUFBZ0IsU0FBaEI7QUFBQSxtQkFBTyxFQUFQOztBQUNBO1VBQUEsS0FBQSxxQ0FBQTs7WUFDRSxJQUFBLEdBQU8sTUFBTSxDQUFDLElBQVAsQ0FBWSxNQUFNLENBQUMseUJBQVAsQ0FBaUMsU0FBakMsQ0FBWixFQUFqQjs7WUFFVSxJQUFLLE1BQU0sQ0FBQyxNQUFQLENBQWMsU0FBZCxFQUF5QixxQkFBekIsQ0FBTDs7O2NBR0UsSUFBQSxDQUFLLFlBQUwsRUFBbUIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUF6QyxFQUErQyxTQUFTLENBQUMsbUJBQXpELEVBSEY7YUFBQSxNQUFBOztjQU1FLEtBTkY7O1VBSEYsQ0FGUjs7aUJBYVM7UUFkZ0QsRUFaekQ7O1FBNEJNLEtBQUEsQ0FBQTtBQUNBO1FBQUEsS0FBQSxxQ0FBQTs7VUFDRSxJQUFTLGNBQWUsU0FBZixjQUFzQixLQUFLLENBQUEsU0FBcEM7QUFBQSxrQkFBQTs7VUFDQSxLQUFBLENBQU0sWUFBTixFQUFvQixTQUFwQjtVQUNBLEtBQUEsQ0FBTSxZQUFOLEVBQW9CLEdBQXBCLEVBQXlCLFNBQVMsQ0FBQyxtQkFBbkM7VUFDQSxLQUFBLENBQU0sWUFBTixFQUFvQixHQUFwQixFQUF5QixTQUFTLENBQUMsbUJBQW5DO1VBQ0EsS0FBQSxDQUFNLFlBQU4sRUFBb0IsR0FBcEIsb0ZBQW1ELEVBQW5EO1FBTEYsQ0E3Qk47O1FBb0NNLEtBQUEsQ0FBQTtBQUNBO1FBQUEsS0FBQSx3Q0FBQTs7VUFDRSxJQUFTLGNBQWUsU0FBZixjQUFzQixLQUFLLENBQUEsU0FBcEM7QUFBQSxrQkFBQTs7VUFDQSxLQUFBLENBQU0sWUFBTixFQUFvQixTQUFwQjtVQUNBLEtBQUEsQ0FBTSxZQUFOLEVBQW9CLEdBQXBCLEVBQXlCLFNBQVMsQ0FBQyxtQkFBbkM7VUFDQSxLQUFBLENBQU0sWUFBTixFQUFvQixHQUFwQixFQUF5QixTQUFTLENBQUMsbUJBQW5DO1VBQ0EsS0FBQSxDQUFNLFlBQU4sRUFBb0IsR0FBcEIsb0ZBQW1ELEVBQW5EO1FBTEYsQ0FyQ047O1FBNENNLEtBQUEsQ0FBTSxZQUFOLEVBQW9CLDJDQUFwQjtBQUNBO1FBQUEsS0FBQSx3Q0FBQTs7VUFDRSxJQUFTLGNBQWUsU0FBZixjQUFzQixLQUFLLENBQUEsU0FBcEM7QUFBQSxrQkFBQTs7VUFDQSxLQUFBLENBQU0sWUFBTixFQUFvQixTQUFwQjtVQUNBLEtBQUEsQ0FBTSxZQUFOLEVBQW9CLEdBQXBCLEVBQXlCLFNBQVMsQ0FBQyxtQkFBbkM7VUFDQSxLQUFBLENBQU0sWUFBTixFQUFvQixHQUFwQixFQUF5QixTQUFTLENBQUMsbUJBQW5DO1VBQ0EsS0FBQSxDQUFNLFlBQU4sRUFBb0IsR0FBcEIsb0ZBQW1ELEVBQW5EO1FBTEYsQ0E3Q047O1FBb0RNLEtBQUEsQ0FBQTtBQUNBO1FBQUEsS0FBQSx3Q0FBQTs7VUFDRSxJQUFTLGNBQWUsU0FBZixjQUFzQixLQUFLLENBQUEsU0FBcEM7QUFBQSxrQkFBQTs7VUFDQSxLQUFBLENBQU0sWUFBTixFQUFvQixTQUFwQjtVQUNBLEtBQUEsQ0FBTSxZQUFOLEVBQW9CLEdBQXBCLEVBQXlCLFNBQVMsQ0FBQyxtQkFBbkM7VUFDQSxLQUFBLENBQU0sWUFBTixFQUFvQixHQUFwQixFQUF5QixTQUFTLENBQUMsbUJBQW5DO1VBQ0EsS0FBQSxDQUFNLFlBQU4sRUFBb0IsR0FBcEIsd0ZBQW1ELEVBQW5EO1FBTEYsQ0FyRE47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBaUZPO01BbEZBLENBQUEsSUFSUDs7YUE0Rks7SUE3RnNCLENBOXVDekI7O0lBODBDQSwwQkFBQSxFQUE0QixRQUFBLENBQUEsQ0FBQTtBQUM5QixVQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLG9CQUFBLEVBQUEsMEJBQUEsRUFBQSxtQkFBQSxFQUFBLFNBQUEsRUFBQSxpQkFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLEtBQUYsRUFDRSxTQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxHQUpGLEVBS0UsR0FMRixFQU1FLFNBTkYsQ0FBQSxHQU1nQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQW5CLENBQUEsQ0FOaEM7TUFPQSxDQUFBLENBQUUsT0FBRixDQUFBLEdBQWdDLENBQUUsT0FBQSxDQUFRLGtFQUFSLENBQUYsQ0FBOEUsQ0FBQyxlQUEvRSxDQUFBLENBQWhDO01BQ0EsQ0FBQSxDQUFFLDBCQUFGLEVBQ0UsbUJBREYsQ0FBQSxHQUNnQyxDQUFFLE9BQUEsQ0FBUSxtRUFBUixDQUFGLENBQStFLENBQUMsMkJBQWhGLENBQUEsQ0FEaEMsRUFSSjs7TUFXSSxDQUFBLENBQUUsb0JBQUYsQ0FBQSxHQUFnQyxPQUFBLENBQVEseUVBQVIsQ0FBaEMsRUFYSjs7TUFhSSxpQkFBQSxHQUNFO1FBQUEsT0FBQSxFQUNFO1VBQUEsTUFBQSxFQUFRLEtBQU0sb0NBQWQ7VUFDQSxLQUFBLEVBQU8sQ0FDTCxHQUFHLENBQUEsNENBQUEsQ0FERSxDQURQO1VBSUEsVUFBQSxFQUNFO1lBQUEsaUJBQUEsRUFBNEIsR0FBRyxDQUFBLDBDQUFBLENBQS9CO1lBQ0Esa0JBQUEsRUFBNEIsR0FBRyxDQUFBLDBDQUFBLENBRC9CO1lBRUEseUJBQUEsRUFBNEIsR0FBRyxDQUFBLDZEQUFBO1VBRi9CLENBTEY7VUFRQSxTQUFBLEVBQ0U7WUFBQSxVQUFBLEVBQ0U7Y0FBQSxLQUFBLEVBQU8sUUFBQSxDQUFFLE1BQUYsQ0FBQTt1QkFBYyxNQUFBLElBQVU7Y0FBeEI7WUFBUDtVQURGO1FBVEY7TUFERjtNQWFDLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsSUFBQSxFQUFBLEVBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsZUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUE7UUFDWTs7VUFBTixNQUFBLEtBQUEsUUFBbUIsVUFBbkIsQ0FBQTs7VUFDRSxJQUFDLENBQUEsT0FBRCxHQUFVLENBQ1IsWUFEUSxFQUVSLGlCQUZRLEVBR1IsSUFIUTs7O1VBTVYsSUFBQyxDQUFBLE9BQUQsR0FBVSxDQUFBOztVQUNWLElBQUMsQ0FBQSxLQUFELEdBQVEsQ0FDTixHQUFHLENBQUEsOEJBQUEsQ0FERzs7OztzQkFUaEI7O1FBYU0sSUFBRyxlQUFBLEdBQWtCLElBQXJCO1VBQ0UsT0FBQSxHQUFVLG9CQUFBLENBQUE7VUFDVixFQUFBLEdBQVUsT0FBTyxDQUFDLFVBQVIsQ0FBbUIsSUFBSSxJQUFKLENBQUEsQ0FBbkIsRUFBK0IsU0FBL0IsRUFGWjtTQUFBLE1BQUE7VUFJRSxFQUFBLEdBQUssSUFBSSxJQUFKLENBQUEsRUFKUDs7QUFNQTs7UUFBQSxLQUFBLHFDQUFBO1dBQUksQ0FBRSxJQUFGLEVBQVEsS0FBUjtBQUNGLGtCQUFPLElBQVA7QUFBQSxpQkFDTyxRQURQO2NBRUksSUFBQSxDQUFLLFlBQUwsRUFBbUIsSUFBbkIsRUFBeUIsTUFBTSxDQUFDLElBQVAsQ0FBWSxLQUFLLENBQUMsT0FBbEIsQ0FBekI7QUFERztBQURQLGlCQUdPLFdBSFA7QUFJSSxzQkFBTyxJQUFQO0FBQUEscUJBQ08sS0FBQSxLQUFTLEVBQUUsQ0FBQyxXQURuQjtrQkFFSSxJQUFBLENBQUssWUFBTCxFQUFtQixJQUFuQixFQUF5QixHQUFBLENBQUksS0FBSyxDQUFDLElBQVYsQ0FBekI7QUFERztBQURQOzs7a0JBTUksSUFBQSxDQUFLLFlBQUwsRUFBbUIsSUFBbkIsRUFBeUIsR0FBQSxDQUFJLEtBQUssQ0FBQyxJQUFWLEVBQWdCLEtBQWhCLENBQXpCO0FBTko7QUFERztBQUhQO2NBWUksTUFBTSxJQUFJLEtBQUosQ0FBVSxDQUFBLHdDQUFBLENBQUEsQ0FBMkMsR0FBQSxDQUFJLElBQUosQ0FBM0MsQ0FBQSxDQUFWO0FBWlY7UUFERixDQW5CTjs7O1FBbUNNLElBQUcsZUFBSDtVQUNFLENBQUEsQ0FBRSxJQUFGLEVBQVEsTUFBUixDQUFBLEdBQW9CLE9BQU8sQ0FBQyxNQUFSLENBQUEsQ0FBZ0IsQ0FBQyxPQUFyQztVQUNBLEtBQUEsd0NBQUE7O1lBQUEsSUFBQSxDQUFLLFlBQUwsRUFBbUIsVUFBbkIsRUFBK0IsSUFBL0I7VUFBQTtVQUNBLEtBQUEsMENBQUE7O1lBQUEsSUFBQSxDQUFLLFlBQUwsRUFBbUIsVUFBbkIsRUFBK0IsSUFBL0I7VUFBQSxDQUhGO1NBbkNOOztlQXdDTztNQXpDQSxDQUFBLElBM0JQOzthQXNFSztJQXZFeUI7RUE5MEM1QixFQWxERjs7O0VBMjhDQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUEsV0FBQTs7O01BRUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsSUFBdkM7UUFBNkMsYUFBQSxFQUFlO01BQTVEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdELEVBSmhCOzs7TUFPRSxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCO1FBQUUseUJBQUEsRUFBMkIsS0FBSyxDQUFDO01BQW5DLENBQTlCLEVBUEY7Ozs7YUFhRztJQWRxQyxDQUFBLElBQXhDOztBQTM4Q0EiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtZGJyaWMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxucmVtb3ZlID0gKCBwYXRoICkgLT5cbiAgdHJ5XG4gICAgRlMudW5saW5rU3luYyBwYXRoXG4gICAgaGVscCAnzqliYmRicl9fXzEnLCBcInJlbW92ZWQgI3tycHIgcGF0aH1cIlxuICBjYXRjaCBlcnJvclxuICAgIHRocm93IGVycm9yIHVubGVzcyBlcnJvci5jb2RlIGlzICdFTk9FTlQnXG4gICAgIyB1cmdlICfOqWJiZGJyX19fMicsIFwibm8gc3VjaCBGUyBvYmplY3Q6ICN7cnByIHBhdGh9XCJcbiAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2VzcWw6IC0+XG4gICAgeyBMSVQsIElETiwgVkVDLFxuICAgICAgdW5xdW90ZV9uYW1lLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX18zID0gLT4gaW50ZXJuYWxzLnR5cGVfb2YgdW5xdW90ZV9uYW1lICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fNCA9IC0+IHVucXVvdGVfbmFtZSAneCcgICAgICAgICAgICAgICAgICAgICksICd4J1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fNCA9IC0+IHVucXVvdGVfbmFtZSAnXCJ4XCInICAgICAgICAgICAgICAgICAgKSwgJ3gnXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX180ID0gLT4gdW5xdW90ZV9uYW1lICdhYmMnICAgICAgICAgICAgICAgICAgKSwgJ2FiYydcbiAgICBAZXEgICAgICggzqliYmRicl9fXzUgPSAtPiB1bnF1b3RlX25hbWUgJ1wiYWJjXCInICAgICAgICAgICAgICAgICksICdhYmMnXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX182ID0gLT4gdW5xdW90ZV9uYW1lICdcImFiXCJcImNcIicgICAgICAgICAgICAgICksICdhYlwiYydcbiAgICBAdGhyb3dzICggzqliYmRicl9fXzcgPSAtPiB1bnF1b3RlX25hbWUgJycgICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBub24tZW1wdHkgdGV4dCwgZ290IGFuIGVtcHR5IHRleHQvXG4gICAgQHRocm93cyAoIM6pYmJkYnJfX184ID0gLT4gdW5xdW90ZV9uYW1lICdcIicgICAgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHF1b3RlZCBub24tZW1wdHkgdGV4dCwgZ290IGEgcXVvdGUvXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX185ID0gLT4gdW5xdW90ZV9uYW1lICdcIlwiJyAgICAgICAgICAgICAgICAgICApLCAnJyAjIyMgTk9URSBTUUxpdGUgZG9lcyBhY2NlcHQgYSBxdW90ZWQgZW1wdHkgc3RyaW5nIGFzIG5hbWUgIyMjXG4gICAgQHRocm93cyAoIM6pYmJkYnJfXzEwID0gLT4gdW5xdW90ZV9uYW1lIGZhbHNlICAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dCwgZ290IGEgYm9vbGVhbi9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xMSA9IC0+IElETiAnYWJjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdcImFiY1wiJ1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xMiA9IC0+IElETiAnQVwiYmNcIicgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ1wiQVwiXCJiY1wiXCJcIidcbiAgICBAZXEgICAgICggzqliYmRicl9fMTMgPSAtPiBMSVQgJ2FiYycgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBcIidhYmMnXCJcbiAgICBAZXEgICAgICggzqliYmRicl9fMTQgPSAtPiBMSVQgXCJBJ2JjJ1wiICAgICAgICAgICAgICAgICAgICAgICAgICksIFwiJ0EnJ2JjJycnXCJcbiAgICBAdGhyb3dzICggzqliYmRicl9fMTUgPSAtPiBWRUMgJ2FiYycgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBsaXN0L1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xNiA9IC0+IFZFQyBbICdhYmMnIF0gICAgICAgICAgICAgICAgICAgICAgICksIFwiXCJcIiggJ2FiYycgKVwiXCJcIlxuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xNyA9IC0+IFZFQyBbICdhYmMnLCAxLCB0cnVlLCBmYWxzZSwgXSAgICAgICksIFwiXCJcIiggJ2FiYycsIDEsIDEsIDAgKVwiXCJcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX3N0ZDogLT5cbiAgICB7IERicmljLFxuICAgICAgRGJyaWNfc3RkLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIHsgdGVtcCwgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdGVtcCgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB0ZW1wLndpdGhfZGlyZWN0b3J5IHsga2VlcDogZmFsc2UsIH0sICh7IHBhdGg6IGZvbGRlcl9wYXRoLCB9KSA9PlxuICAgICAgIyBmb2xkZXJfcGF0aCA9ICcvdG1wL2JyaWNicmFjLXRlc3QnICMgISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG4gICAgICBkYl9wYXRoID0gUEFUSC5qb2luIGZvbGRlcl9wYXRoLCAnYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHJlbW92ZSBkYl9wYXRoXG4gICAgICAjIGhlbHAgJ86pYmJkYnJfXzE4JywgeyBkYl9wYXRoLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gbmV3IERicmljIGRiX3BhdGhcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18xOSA9IC0+IGRiLmlzX3JlYWR5ICksIHRydWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSAoIG5ldyBEYnJpYyBkYl9wYXRoIClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yMCA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjEgPSAtPiBkYi5fZ2V0X2RiX29iamVjdHMoKSAgICAgICAgKSwge31cbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yMiA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjMgPSAtPiBkYi5idWlsZCgpICAgICAgICAgICAgICAgICAgKSwgMFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdGVtcC53aXRoX2RpcmVjdG9yeSB7IGtlZXA6IGZhbHNlLCB9LCAoeyBwYXRoOiBmb2xkZXJfcGF0aCwgfSkgPT5cbiAgICAgICMgZm9sZGVyX3BhdGggPSAnL3RtcC9icmljYnJhYy10ZXN0JyAjICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxuICAgICAgZGJfcGF0aCA9IFBBVEguam9pbiBmb2xkZXJfcGF0aCwgJ2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICByZW1vdmUgZGJfcGF0aFxuICAgICAgIyBoZWxwICfOqWJiZGJyX18yNCcsIHsgZGJfcGF0aCwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IG5ldyBEYnJpYyBkYl9wYXRoXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjUgPSAtPiBkYi5pc19yZWFkeSAgICAgICApLCB0cnVlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gbmV3IERicmljX3N0ZCBkYl9wYXRoXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjYgPSAtPiBkYi5pc19yZWFkeSAgICAgICApLCB0cnVlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gKCBuZXcgRGJyaWNfc3RkIGRiX3BhdGggKVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI3ID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpYyAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yOCA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWNfc3RkICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIG9iamVjdHMgPSBuZXcgU2V0ICggXCIje28udHlwZX06I3tvLm5hbWV9XCIgZm9yIF8sIG8gb2YgZGIuX2dldF9kYl9vYmplY3RzKCkgKVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI5ID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3RhYmxlcycgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zMCA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF92aWV3cycgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzEgPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfcmVsYXRpb25zJyAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzMyID0gLT4gZGIuaXNfcmVhZHkgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zMyA9IC0+IGRiLmJ1aWxkKCkgICAgICAgICAgICAgICAgICAgICAgICApLCAwXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gKCBuZXcgRGJyaWNfc3RkIGRiX3BhdGggKVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzM0ID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpYyAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zNSA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWNfc3RkICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIG9iamVjdHMgPSBuZXcgU2V0ICggXCIje28udHlwZX06I3tvLm5hbWV9XCIgZm9yIF8sIG8gb2YgZGIuX2dldF9kYl9vYmplY3RzKCkgKVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzM2ID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3RhYmxlcycgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zNyA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF92aWV3cycgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzggPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfcmVsYXRpb25zJyAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzM5ID0gLT4gZGIuaXNfcmVhZHkgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180MCA9IC0+IGRiLmJ1aWxkKCkgICAgICAgICAgICAgICAgICAgICAgICApLCAwXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gKCBuZXcgRGJyaWNfc3RkIGRiX3BhdGggKVxuICAgICAgICBvYmplY3RzID0gbmV3IFNldCAoIFwiI3tvLnR5cGV9OiN7by5uYW1lfVwiIGZvciBfLCBvIG9mIGRiLl9nZXRfZGJfb2JqZWN0cygpIClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180MSA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF90YWJsZXMnICAgICApLCB0cnVlXG4gICAgICAgICggZGIucHJlcGFyZSBTUUxcImRyb3AgdmlldyBzdGRfdGFibGVzO1wiICkucnVuKClcbiAgICAgICAgb2JqZWN0cyA9IG5ldyBTZXQgKCBcIiN7by50eXBlfToje28ubmFtZX1cIiBmb3IgXywgbyBvZiBkYi5fZ2V0X2RiX29iamVjdHMoKSApXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNDIgPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfdGFibGVzJyAgICAgKSwgZmFsc2VcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180MyA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9ICggbmV3IERicmljX3N0ZCBkYl9wYXRoIClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180NCA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNDUgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljX3N0ZCAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBvYmplY3RzID0gbmV3IFNldCAoIFwiI3tvLnR5cGV9OiN7by5uYW1lfVwiIGZvciBfLCBvIG9mIGRiLl9nZXRfZGJfb2JqZWN0cygpIClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180NiA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF90YWJsZXMnICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNDcgPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfdmlld3MnICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzQ4ID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3JlbGF0aW9ucycgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180OSA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNTAgPSAtPiBkYi5idWlsZCgpICAgICAgICAgICAgICAgICAgICAgICAgKSwgMFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX3N0ZF9nZW5lcmF0ZV9zZXJpZXM6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIERicmljX3N0ZCxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICB7IHRlbXAsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3RlbXAoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBzcWxpdGU+IHNlbGVjdCAqIGZyb20gZ2VuZXJhdGVfc2VyaWVzKCAxLCAxMCwgMCApO1xuICAgICMg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXG4gICAgIyDilIIgdmFsdWUg4pSCXG4gICAgIyDilJzilIDilIDilIDilIDilIDilIDilIDilKRcbiAgICAjIOKUgiAxICAgICDilIJcbiAgICAjIOKUgiAyICAgICDilIJcbiAgICAjIOKUgiAzICAgICDilIJcbiAgICAjIOKUgiA0ICAgICDilIJcbiAgICAjIOKUgiA1ICAgICDilIJcbiAgICAjIOKUgiA2ICAgICDilIJcbiAgICAjIOKUgiA3ICAgICDilIJcbiAgICAjIOKUgiA4ICAgICDilIJcbiAgICAjIOKUgiA5ICAgICDilIJcbiAgICAjIOKUgiAxMCAgICDilIJcbiAgICAjIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmFxuICAgICMgc3FsaXRlPiBzZWxlY3QgKiBmcm9tIGdlbmVyYXRlX3NlcmllcyggMSwgMTAsIDAgKTtcbiAgICAjIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkFxuICAgICMg4pSCIHZhbHVlIOKUglxuICAgICMg4pSc4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSkXG4gICAgIyDilIIgMSAgICAg4pSCXG4gICAgIyDilIIgMiAgICAg4pSCXG4gICAgIyDilIIgMyAgICAg4pSCXG4gICAgIyDilIIgNCAgICAg4pSCXG4gICAgIyDilIIgNSAgICAg4pSCXG4gICAgIyDilIIgNiAgICAg4pSCXG4gICAgIyDilIIgNyAgICAg4pSCXG4gICAgIyDilIIgOCAgICAg4pSCXG4gICAgIyDilIIgOSAgICAg4pSCXG4gICAgIyDilIIgMTAgICAg4pSCXG4gICAgIyDilJTilIDilIDilIDilIDilIDilIDilIDilJhcbiAgICAjIHNxbGl0ZT4gc2VsZWN0ICogZnJvbSBnZW5lcmF0ZV9zZXJpZXMoIDEsIDEsIDAgKTtcbiAgICAjIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkFxuICAgICMg4pSCIHZhbHVlIOKUglxuICAgICMg4pSc4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSkXG4gICAgIyDilIIgMSAgICAg4pSCXG4gICAgIyDilJTilIDilIDilIDilIDilIDilIDilIDilJhcbiAgICAjIHNxbGl0ZT4gc2VsZWN0ICogZnJvbSBnZW5lcmF0ZV9zZXJpZXMoIDEsIDAsIDAgKTtcbiAgICAjIHNxbGl0ZT5cblxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIERiIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBkYiA9IG5ldyBEYiAnOm1lbW9yeTonXG4gICAgICBAZXEgKCDOqWJiZGJyX181MSA9IC0+IFsgKCByb3cudmFsdWUgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHN0ZF9nZW5lcmF0ZV9zZXJpZXMoIDEsIDEwLCAyICk7XCIpLi4uLCAgXSApLCBbIDEsIDMsIDUsIDcsIDkgXVxuICAgICAgQGVxICggzqliYmRicl9fNTIgPSAtPiBbICggcm93LnZhbHVlIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBzdGRfZ2VuZXJhdGVfc2VyaWVzKCAxLCAxMCwgMCApO1wiKS4uLiwgIF0gKSwgWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCBdXG4gICAgICBAZXEgKCDOqWJiZGJyX181MyA9IC0+IFsgKCByb3cudmFsdWUgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHN0ZF9nZW5lcmF0ZV9zZXJpZXMoIDEsIDEsIDAgKTtcIikuLi4sICAgXSApLCBbIDEgXVxuICAgICAgQGVxICggzqliYmRicl9fNTQgPSAtPiBbICggcm93LnZhbHVlIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBzdGRfZ2VuZXJhdGVfc2VyaWVzKCAxLCAwLCAwICk7XCIpLi4uLCAgIF0gKSwgW11cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdGVtZW50X2luaGVyaXRhbmNlOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBEYnJpY19zdGQsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgIyB7IHRlbXAsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3RlbXAoKVxuICAgICMgeyBTdGF0ZW1lbnRTeW5jLCAgICAgICAgICAgIH0gPSByZXF1aXJlICdub2RlOnNxbGl0ZSdcbiAgICBCc3FsMyAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9ub2RlX21vZHVsZXMvYmV0dGVyLXNxbGl0ZTMnXG4gICAgc3RhdGVtZW50X2NsYXNzICAgICAgICAgICAgICAgPSAoICggbmV3IEJzcWwzICc6bWVtb3J5OicgKS5wcmVwYXJlIFNRTFwic2VsZWN0IDEgd2hlcmUgZmFsc2U7XCIgKS5jb25zdHJ1Y3RvclxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZ2V0X2Z1bmN0aW9uX25hbWVzID0gKCBkYmEgKSAtPiBuZXcgU2V0ICggbmFtZSBmb3IgeyBuYW1lLCB9IGZyb20gXFxcbiAgICAgIGRiYS53YWxrIFNRTFwic2VsZWN0IG5hbWUgZnJvbSBwcmFnbWFfZnVuY3Rpb25fbGlzdCgpIG9yZGVyIGJ5IG5hbWU7XCIgKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZ2V0X3RhYmxlX25hbWVzID0gKCBkYmEgKSAtPiBuZXcgU2V0ICggbmFtZSBmb3IgeyBuYW1lLCB9IGZyb20gXFxcbiAgICAgIGRiYS53YWxrIFNRTFwiXCJcInNlbGVjdCBuYW1lIGZyb20gc3FsaXRlX3NjaGVtYVxuICAgICAgd2hlcmUgdHlwZSBpcyAndGFibGUnIG9yZGVyIGJ5IG5hbWU7XCJcIlwiIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGdldF92aWV3X25hbWVzID0gKCBkYmEgKSAtPiBuZXcgU2V0ICggbmFtZSBmb3IgeyBuYW1lLCB9IGZyb20gXFxcbiAgICAgIGRiYS53YWxrIFNRTFwiXCJcInNlbGVjdCBuYW1lIGZyb20gc3FsaXRlX3NjaGVtYVxuICAgICAgd2hlcmUgdHlwZSBpcyAndmlldycgb3JkZXIgYnkgbmFtZTtcIlwiXCIgKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZ2V0X3RyaWdnZXJfbmFtZXMgPSAoIGRiYSApIC0+IG5ldyBTZXQgKCBuYW1lIGZvciB7IG5hbWUsIH0gZnJvbSBcXFxuICAgICAgZGJhLndhbGsgU1FMXCJcIlwic2VsZWN0IG5hbWUgZnJvbSBzcWxpdGVfc2NoZW1hXG4gICAgICB3aGVyZSB0eXBlIGlzICd0cmlnZ2VyJyBvcmRlciBieSBuYW1lO1wiXCJcIiApXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBBIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAZnVuY3Rpb25zOlxuICAgICAgICBmbl9hOlxuICAgICAgICAgIHZhbHVlOiAtPiByZXR1cm4gMVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIHNlbGVjdF9hOiBTUUxcInNlbGVjdCBmbl9hKCkgYXMgb25lLCAyIGFzIHR3bztcIlxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiY3JlYXRlIHRhYmxlIHRhYmxlX2EgKCBkIHRleHQgKTtcIlxuICAgICAgICBTUUxcImNyZWF0ZSB2aWV3IHZpZXdfYSBhcyBzZWxlY3QgKiBmcm9tIHRhYmxlX2E7XCJcbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgQiBleHRlbmRzIEFcbiAgICAgIEBmdW5jdGlvbnM6XG4gICAgICAgIGZuX2I6XG4gICAgICAgICAgdmFsdWU6IC0+IHJldHVybiAxXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgc2VsZWN0X2I6IFNRTFwic2VsZWN0IGZuX2IoKSBhcyBvbmUsIDIgYXMgdHdvO1wiXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJjcmVhdGUgdGFibGUgdGFibGVfYiAoIGQgdGV4dCApO1wiXG4gICAgICAgIFNRTFwiY3JlYXRlIHZpZXcgdmlld19iIGFzIHNlbGVjdCAqIGZyb20gdGFibGVfYjtcIlxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBDX2R1cGxpY2F0ZV9mdW5jdGlvbiBleHRlbmRzIEJcbiAgICAgIEBmdW5jdGlvbnM6XG4gICAgICAgIGZuX2I6XG4gICAgICAgICAgdmFsdWU6IC0+IHJldHVybiAxXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBDX2R1cGxpY2F0ZV9zdGF0ZW1lbnQgZXh0ZW5kcyBCXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgc2VsZWN0X2I6IFNRTFwic2VsZWN0IGZuX2IoKSBhcyBvbmUsIDIgYXMgdHdvO1wiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBDX2R1cGxpY2F0ZV90YWJsZSBleHRlbmRzIEJcbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcImNyZWF0ZSB0YWJsZSB0YWJsZV9iICggZCB0ZXh0ICk7XCJcbiAgICAgICAgU1FMXCJjcmVhdGUgdmlldyB2aWV3X2IgYXMgc2VsZWN0ICogZnJvbSB0YWJsZV9iO1wiXG4gICAgICAgIF1cbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgYiA9IG5ldyBCKClcbiAgICAjIGRlYnVnICfOqWJiZGJyX181NScsIGJcbiAgICAjIGRlYnVnICfOqWJiZGJyX181NicsICdmdW5jdGlvbnM6ICcsIGdldF9mdW5jdGlvbl9uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNTcnLCAnZnVuY3Rpb25zOiAnLCAoIGdldF9mdW5jdGlvbl9uYW1lcyBiICkuaGFzICdmbl9hJ1xuICAgICMgZGVidWcgJ86pYmJkYnJfXzU4JywgJ2Z1bmN0aW9uczogJywgKCBnZXRfZnVuY3Rpb25fbmFtZXMgYiApLmhhcyAnZm5fYidcbiAgICAjIGRlYnVnICfOqWJiZGJyX181OScsICdmdW5jdGlvbnM6ICcsICggZ2V0X2Z1bmN0aW9uX25hbWVzIGIgKS5oYXMgJ3JlZ2V4cCdcbiAgICAjIGRlYnVnICfOqWJiZGJyX182MCcsICd0YWJsZXM6ICAgICcsIGdldF90YWJsZV9uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNjEnLCAndmlld3M6ICAgICAnLCBnZXRfdmlld19uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNjInLCAndHJpZ2dlcnM6ICAnLCBnZXRfdHJpZ2dlcl9uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNjMnLCAnc3RhdGVtZW50czonLCAoIGsgZm9yIGsgb2YgYi5zdGF0ZW1lbnRzIClcbiAgICAjIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZGJhID0gbmV3IERicmljX3N0ZCAnOm1lbW9yeTonXG4gICAgICAjIGRiYSA9IG5ldyBBKClcbiAgICAgICMgZGJhID0gbmV3IEIoKVxuICAgICAgZGJhLmRiLmZ1bmN0aW9uICd6enpfdGVzdCcsIHsgZGV0ZXJtaW5pc3RpYzogdHJ1ZSwgdmFyYXJnczogZmFsc2UsIGRpcmVjdE9ubHk6IGZhbHNlLCB9LCAtPiBcIlpaWl9URVNUXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZnVuY3Rpb25fbmFtZXMgID0gZ2V0X2Z1bmN0aW9uX25hbWVzIGRiYVxuICAgICAgdGFibGVfbmFtZXMgICAgID0gZ2V0X3RhYmxlX25hbWVzIGRiYVxuICAgICAgdmlld19uYW1lcyAgICAgID0gZ2V0X3ZpZXdfbmFtZXMgZGJhXG4gICAgICB0cmlnZ2VyX25hbWVzICAgPSBnZXRfdHJpZ2dlcl9uYW1lcyBkYmFcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fNjQgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3NjaGVtYSAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzY1ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF90YWJsZXMgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX182NiA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdmlld3MgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNjcgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3JlbGF0aW9ucyAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzY4ID0gLT4gZGJhLnN0YXRlbWVudHMuc2VsZWN0X2EgICAgICAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmRicl9fNjkgPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYiAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzcwID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICd6enpfdGVzdCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX183MSA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAncmVnZXhwJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNzIgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX183MyA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnZm5fYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fNzQgPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX183NSA9IC0+IHRhYmxlX25hbWVzLmhhcyAndGFibGVfYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzc2ID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF90YWJsZXMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX183NyA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdmlld3MnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNzggPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3JlbGF0aW9ucycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzc5ID0gLT4gdmlld19uYW1lcy5oYXMgJ3ZpZXdfYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmRicl9fODAgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGRiYSA9IG5ldyBBKClcbiAgICAgIGRiYS5kYi5mdW5jdGlvbiAnenp6X3Rlc3QnLCB7IGRldGVybWluaXN0aWM6IHRydWUsIHZhcmFyZ3M6IGZhbHNlLCBkaXJlY3RPbmx5OiBmYWxzZSwgfSwgLT4gXCJaWlpfVEVTVFwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZ1bmN0aW9uX25hbWVzICA9IGdldF9mdW5jdGlvbl9uYW1lcyBkYmFcbiAgICAgIHRhYmxlX25hbWVzICAgICA9IGdldF90YWJsZV9uYW1lcyBkYmFcbiAgICAgIHZpZXdfbmFtZXMgICAgICA9IGdldF92aWV3X25hbWVzIGRiYVxuICAgICAgdHJpZ2dlcl9uYW1lcyAgID0gZ2V0X3RyaWdnZXJfbmFtZXMgZGJhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzgxID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9zY2hlbWEgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184MiA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdGFibGVzICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODMgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3ZpZXdzICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg0ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9yZWxhdGlvbnMgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184NSA9IC0+IGRiYS5zdGF0ZW1lbnRzLnNlbGVjdF9hICAgICAgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODYgPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYiAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg3ID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICd6enpfdGVzdCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184OCA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAncmVnZXhwJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODkgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzkwID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdmbl9iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX185MSA9IC0+IHRhYmxlX25hbWVzLmhhcyAndGFibGVfYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTIgPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX185MyA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdGFibGVzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTQgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3ZpZXdzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzk1ID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF9yZWxhdGlvbnMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX185NiA9IC0+IHZpZXdfbmFtZXMuaGFzICd2aWV3X2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTcgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGRiYSA9IG5ldyBCKClcbiAgICAgIGRiYS5kYi5mdW5jdGlvbiAnenp6X3Rlc3QnLCB7IGRldGVybWluaXN0aWM6IHRydWUsIHZhcmFyZ3M6IGZhbHNlLCBkaXJlY3RPbmx5OiBmYWxzZSwgfSwgLT4gXCJaWlpfVEVTVFwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZ1bmN0aW9uX25hbWVzICA9IGdldF9mdW5jdGlvbl9uYW1lcyBkYmFcbiAgICAgIHRhYmxlX25hbWVzICAgICA9IGdldF90YWJsZV9uYW1lcyBkYmFcbiAgICAgIHZpZXdfbmFtZXMgICAgICA9IGdldF92aWV3X25hbWVzIGRiYVxuICAgICAgdHJpZ2dlcl9uYW1lcyAgID0gZ2V0X3RyaWdnZXJfbmFtZXMgZGJhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzk4ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9zY2hlbWEgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX185OSA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdGFibGVzICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMDAgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3ZpZXdzICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTAxID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9yZWxhdGlvbnMgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzEwMiA9IC0+IGRiYS5zdGF0ZW1lbnRzLnNlbGVjdF9hICAgICAgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMDMgPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYiAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl8xMDQgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ3p6el90ZXN0JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTA1ID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdyZWdleHAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzEwNiA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnZm5fYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMDcgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl8xMDggPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTA5ID0gLT4gdGFibGVfbmFtZXMuaGFzICd0YWJsZV9iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzExMCA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdGFibGVzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMTEgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3ZpZXdzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTEyID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF9yZWxhdGlvbnMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzExMyA9IC0+IHZpZXdfbmFtZXMuaGFzICd2aWV3X2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMTQgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMTE1ID0gLT4gbmV3IENfZHVwbGljYXRlX2Z1bmN0aW9uKCkgICAgKSwgL2EgVURGIG9yIGJ1aWx0LWluIGZ1bmN0aW9uIG5hbWVkICdmbl9iJyBoYXMgYWxyZWFkeSBiZWVuIGRlY2xhcmVkL1xuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMTE2ID0gLT4gbmV3IENfZHVwbGljYXRlX3N0YXRlbWVudCgpICAgKSwgL3N0YXRlbWVudCAnc2VsZWN0X2InIGlzIGFscmVhZHkgZGVjbGFyZWQvXG4gICAgICBAdGhyb3dzICggzqliYmRicl8xMTcgPSAtPiBuZXcgQ19kdXBsaWNhdGVfdGFibGUoKSAgICAgICApLCAvdGFibGUgdGFibGVfYiBhbHJlYWR5IGV4aXN0cy9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkaXNhbGxvd19vdmVyd3JpdGluZ19wcm9wZXJ0aWVzX3dpdGhfZnVuY3Rpb25zOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgIyBkZWJ1ZyAnzqliYmRicl8xMTgnLCBuZXcgRGJyaWMgJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgZG8gPT5cbiAgICAgIGRiICAgICAgICA9ICggbmV3IERicmljICc6bWVtb3J5OicgKVxuICAgICAgZGJfcHJvdG8gID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIGRiXG4gICAgICAjIGRlYnVnICfOqWJiZGJyXzExOScsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgZGJfcHJvdG8sICdpc19yZWFkeSdcbiAgICAgICMgZGVidWcgJ86pYmJkYnJfMTIwJywgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciBkYl9wcm90bywgJ19nZXRfaXNfcmVhZHknXG4gICAgICA7bnVsbFxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIyMjIHVzZSBkZXJpdmVkIGNsYXNzZXMgdG8gYXNzZXJ0IHRoYXQgcHJvcGVydHkgZGVzY3JpcHRvcnMgYXJlIHNlYXJjaGVkIGZvciBpbiB0aGUgcHJvdG90eXBlIGNoYWluOiAjIyNcbiAgICBjbGFzcyBEYnJpY19BIGV4dGVuZHMgRGJyaWNcbiAgICBjbGFzcyBEYnJpY19CIGV4dGVuZHMgRGJyaWNfQVxuICAgIGNsYXNzIERicmljX0MgZXh0ZW5kcyBEYnJpY19CXG4gICAgY2xhc3MgRGJyaWNfWiBleHRlbmRzIERicmljX0NcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRvID0+XG4gICAgICBjbGFzcyBEYnJpY19ub25jb25mb3JtIGV4dGVuZHMgRGJyaWNfWlxuICAgICAgICBpc19yZWFkeTogLT5cbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyXzEyMSA9IC0+IG5ldyBEYnJpY19ub25jb25mb3JtKCkgKSwgL25vdCBhbGxvd2VkIHRvIG92ZXJyaWRlIHByb3BlcnR5ICdpc19yZWFkeSc7IHVzZSAnX2dldF9pc19yZWFkeSBpbnN0ZWFkL1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzYW1wbGVfZGI6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3N0b3JlIGV4dGVuZHMgRGJyaWNcbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgc3RvcmVfZmFjZXRzIChcbiAgICAgICAgICBmYWNldF9rZXkgICAgICAgICAgICAgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgZmFjZXRfdmFsdWUgICAgICAgICAgIGpzb24gKTtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIHN0b3JlX2luc2VydF9mYWNldDogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8gc3RvcmVfZmFjZXRzICggZmFjZXRfa2V5LCBmYWNldF92YWx1ZSApIHZhbHVlcyAoICRmYWNldF9rZXksICRmYWNldF92YWx1ZSApXG4gICAgICAgICAgICBvbiBjb25mbGljdCAoIGZhY2V0X2tleSApIGRvIHVwZGF0ZSBzZXQgZmFjZXRfdmFsdWUgPSBleGNsdWRlZC5mYWNldF92YWx1ZTtcIlwiXCJcbiAgICAgICAgc3RvcmVfZ2V0X2ZhY2V0czogU1FMXCJcIlwiXG4gICAgICAgICAgc2VsZWN0ICogZnJvbSBzdG9yZV9mYWNldHMgb3JkZXIgYnkgZmFjZXRfa2V5O1wiXCJcIlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3RvcmUgICAgID0gbmV3IERicmljX3N0b3JlIGRiX3BhdGhcbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ29uZScsICAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMSAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0d28nLCAgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDIgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAzICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgJ2lpaScgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0cnVlJywgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IHRydWUgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAnZmFsc2UnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSBmYWxzZSAgICksIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgY2FzdF9yb3cgPSAoIHJvdyApIC0+XG4gICAgICAgIHJldHVybiByb3cgdW5sZXNzIHJvdz9cbiAgICAgICAgcmV0dXJuIHsgcm93Li4uLCBmYWNldF92YWx1ZTogKCBKU09OLnBhcnNlIHJvdy5mYWNldF92YWx1ZSApLCBfdjogcm93LmZhY2V0X3ZhbHVlLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJvd3MgPSBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2dldF9mYWNldHMuaXRlcmF0ZSgpXG4gICAgICBAZXEgKCDOqWJiZGJyXzEyMiA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGZhY2V0X2tleTogJ2ZhbHNlJywgZmFjZXRfdmFsdWU6IGZhbHNlLCBfdjogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEyMyA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGZhY2V0X2tleTogJ29uZScsIGZhY2V0X3ZhbHVlOiAxLCBfdjogMSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEyNCA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICdpaWknLCBfdjogJ1wiaWlpXCInIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTI1ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgICksIHsgZmFjZXRfa2V5OiAndHJ1ZScsIGZhY2V0X3ZhbHVlOiB0cnVlLCBfdjogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTI2ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgICksIHsgZmFjZXRfa2V5OiAndHdvJywgZmFjZXRfdmFsdWU6IDIsIF92OiAyIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTI3ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICAgICAgICAgICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzYW1wbGVfZGJfd2l0aF9ic3FsOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zdG9yZSBleHRlbmRzIERicmljXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIHN0b3JlX2ZhY2V0cyAoXG4gICAgICAgICAgZmFjZXRfa2V5ICAgICAgICAgICAgIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgIGZhY2V0X3ZhbHVlICAgICAgICAgICBqc29uICk7XCJcIlwiXG4gICAgICAgIF1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICAjIHN0b3JlX2NyZWF0ZV90YWJsZXM6IFNRTFwiXCJcIlxuICAgICAgICAjICAgXCJcIlwiXG4gICAgICAgIHN0b3JlX2luc2VydF9mYWNldDogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8gc3RvcmVfZmFjZXRzICggZmFjZXRfa2V5LCBmYWNldF92YWx1ZSApIHZhbHVlcyAoICRmYWNldF9rZXksICRmYWNldF92YWx1ZSApXG4gICAgICAgICAgICBvbiBjb25mbGljdCAoIGZhY2V0X2tleSApIGRvIHVwZGF0ZSBzZXQgZmFjZXRfdmFsdWUgPSBleGNsdWRlZC5mYWNldF92YWx1ZTtcIlwiXCJcbiAgICAgICAgc3RvcmVfZ2V0X2ZhY2V0czogU1FMXCJcIlwiXG4gICAgICAgICAgc2VsZWN0ICogZnJvbSBzdG9yZV9mYWNldHMgb3JkZXIgYnkgZmFjZXRfa2V5O1wiXCJcIlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICc6bWVtb3J5OidcbiAgICAgIHN0b3JlICAgICA9IG5ldyBEYnJpY19zdG9yZSBkYl9wYXRoXG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICdvbmUnLCAgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDEgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndHdvJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAyICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMyAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5ICdpaWknICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndHJ1ZScsICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSB0cnVlICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ2ZhbHNlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgZmFsc2UgICApLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGNhc3Rfcm93ID0gKCByb3cgKSAtPlxuICAgICAgICByZXR1cm4gcm93IHVubGVzcyByb3c/XG4gICAgICAgIHJldHVybiB7IHJvdy4uLiwgZmFjZXRfdmFsdWU6ICggSlNPTi5wYXJzZSByb3cuZmFjZXRfdmFsdWUgKSwgX3Y6IHJvdy5mYWNldF92YWx1ZSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByb3dzID0gc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9nZXRfZmFjZXRzLml0ZXJhdGUoKVxuICAgICAgQGVxICggzqliYmRicl8xMjggPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ2ZhbHNlJywgZmFjZXRfdmFsdWU6IGZhbHNlLCBfdjogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEyOSA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAnb25lJywgZmFjZXRfdmFsdWU6IDEsIF92OiAxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTMwID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAnaWlpJywgX3Y6ICdcImlpaVwiJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEzMSA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAndHJ1ZScsIGZhY2V0X3ZhbHVlOiB0cnVlLCBfdjogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTMyID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICd0d28nLCBmYWNldF92YWx1ZTogMiwgX3Y6IDIgfVxuICAgICAgQGVxICggzqliYmRicl8xMzMgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB1bmRlZmluZWRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfZnVuY3Rpb25zX3dpdGhfbnNxbDogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3F1YXJlcyBleHRlbmRzIERicmljXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgbnVtYmVycyAoXG4gICAgICAgICAgICBuIG51bWJlciB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHZpZXcgc3F1YXJlcyBhcyBzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUoIG4gKSBhcyBzcXVhcmVcbiAgICAgICAgICBmcm9tIG51bWJlcnNcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfbnVtYmVyOiBTUUxcIlwiXCJpbnNlcnQgaW50byBudW1iZXJzICggbiApIHZhbHVlcyAoICRuIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIG4gKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9zcXVhcmVzOiBTUUxcIlwiXCJzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICBmcm9tIHNxdWFyZXNcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpbml0aWFsaXplOiAtPlxuICAgICAgICBzdXBlcigpXG4gICAgICAgIEBjcmVhdGVfZnVuY3Rpb25cbiAgICAgICAgICBuYW1lOiAgICAgICAgICAgJ3NxdWFyZSdcbiAgICAgICAgICBkZXRlcm1pbmlzdGljOiAgdHJ1ZVxuICAgICAgICAgIHZhcmFyZ3M6ICAgICAgICBmYWxzZVxuICAgICAgICAgIHZhbHVlOiAgICAgICAgICAgKCBuICkgLT4gbiAqKiAyXG4gICAgICAgIDtudWxsXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBzcXVhcmVzICAgPSBuZXcgRGJyaWNfc3F1YXJlcyBkYl9wYXRoXG4gICAgICBmb3IgbiBpbiBbIDAgLi4uIDEwIF1cbiAgICAgICAgc3F1YXJlcy5zdGF0ZW1lbnRzLmluc2VydF9udW1iZXIucnVuIHsgbiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTM0Jywgcm93IGZvciByb3cgZnJvbSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlKClcbiAgICAgIHJvd3MgPSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTM1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAwLCBzcXVhcmU6IDAgfVxuICAgICAgQGVxICggzqliYmRicl8xMzYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDEsIHNxdWFyZTogMSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEzNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMiwgc3F1YXJlOiA0IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTM4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAzLCBzcXVhcmU6IDkgfVxuICAgICAgQGVxICggzqliYmRicl8xMzkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDQsIHNxdWFyZTogMTYgfVxuICAgICAgQGVxICggzqliYmRicl8xNDAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDUsIHNxdWFyZTogMjUgfVxuICAgICAgQGVxICggzqliYmRicl8xNDEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDYsIHNxdWFyZTogMzYgfVxuICAgICAgQGVxICggzqliYmRicl8xNDIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDcsIHNxdWFyZTogNDkgfVxuICAgICAgQGVxICggzqliYmRicl8xNDMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDgsIHNxdWFyZTogNjQgfVxuICAgICAgQGVxICggzqliYmRicl8xNDQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDksIHNxdWFyZTogODEgfVxuICAgICAgQGVxICggzqliYmRicl8xNDUgPSAtPiByb3dzLm5leHQoKS5kb25lICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVkZl9hZ2dyZWdhdGVzX3dpdGhfbnNxbDogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3F1YXJlcyBleHRlbmRzIERicmljXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgbnVtYmVycyAoXG4gICAgICAgICAgICBuIG51bWJlciB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHZpZXcgc3F1YXJlcyBhcyBzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUoIG4gKSBhcyBzcXVhcmVcbiAgICAgICAgICBmcm9tIG51bWJlcnNcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfbnVtYmVyOiBTUUxcIlwiXCJpbnNlcnQgaW50byBudW1iZXJzICggbiApIHZhbHVlcyAoICRuIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIG4gKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9udW1iZXJzOiBTUUxcIlwiXCJzZWxlY3QgbiBmcm9tIG51bWJlcnMgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fc3F1YXJlczogU1FMXCJcIlwic2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlLFxuICAgICAgICAgICAgcHJvZHVjdCggbiApICAgICAgYXMgcF9uLFxuICAgICAgICAgICAgcHJvZHVjdCggc3F1YXJlICkgYXMgcF9zcXVhcmVcbiAgICAgICAgICBmcm9tIHNxdWFyZXNcbiAgICAgICAgICB3aGVyZSBuIGJldHdlZW4gJHN0YXJ0IGFuZCAkc3RvcFxuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGluaXRpYWxpemU6IC0+XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgQGNyZWF0ZV9mdW5jdGlvblxuICAgICAgICAgIG5hbWU6ICAgICAgICAgICAnc3F1YXJlJ1xuICAgICAgICAgIGRldGVybWluaXN0aWM6ICB0cnVlXG4gICAgICAgICAgdmFyYXJnczogICAgICAgIGZhbHNlXG4gICAgICAgICAgdmFsdWU6ICAgICAgICAgICAoIG4gKSAtPiBuICoqIDJcbiAgICAgICAgQGNyZWF0ZV9hZ2dyZWdhdGVfZnVuY3Rpb25cbiAgICAgICAgICBuYW1lOiAgICAgICAgICAgJ3Byb2R1Y3QnXG4gICAgICAgICAgc3RhcnQ6ICAgICAgICAgIC0+IDEgIyMjIE5PVEUgY2FuIHVzZSBgbnVsbGAgZm9yIGJTUUwsIGJ1dCBuU1FMIG5lZWRzIGAxYCAjIyNcbiAgICAgICAgICBzdGVwOiAgICAgICAgICAgcHJvZHVjdCA9ICggdG90YWwsIGVsZW1lbnQgKSAtPlxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqliYmRicl8xNDYnLCB7IHRvdGFsLCBlbGVtZW50LCB9XG4gICAgICAgICAgICByZXR1cm4gKCB0b3RhbCA/IDEgKSAqIGVsZW1lbnRcbiAgICAgICAgO251bGxcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLXVkZl9hZ2dyZWdhdGVzX3dpdGhfbnNxbC5zcWxpdGUnXG4gICAgICBzcXVhcmVzICAgPSBuZXcgRGJyaWNfc3F1YXJlcyBkYl9wYXRoXG4gICAgICBmb3IgbiBpbiBbIDAgLi4uIDEwIF1cbiAgICAgICAgc3F1YXJlcy5zdGF0ZW1lbnRzLmluc2VydF9udW1iZXIucnVuIHsgbiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTQ3Jywgcm93IGZvciByb3cgZnJvbSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlIHsgc3RhcnQ6IDEsIHN0b3A6IDUsIH1cbiAgICAgIHJvd3MgPSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlIHsgc3RhcnQ6IDEsIHN0b3A6IDUsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQ4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAxLCBzcXVhcmU6IDEsIHBfbjogMTIwLCBwX3NxdWFyZTogMTQ0MDAgfVxuICAgICAgQGVxICggzqliYmRicl8xNDkgPSAtPiByb3dzLm5leHQoKS5kb25lICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xNTAnLCByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUoKVxuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMTUxID0gLT4gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpICksIC9taXNzaW5nIG5hbWVkIHBhcmFtZXRlcnMvaVxuICAgICAgIyBAZXEgKCDOqWJiZGJyXzE1MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogbnVsbCwgc3F1YXJlOiBudWxsLCBwX246IDEsIHBfc3F1YXJlOiAxIH1cbiAgICAgICMgQGVxICggzqliYmRicl8xNTMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdWRmX2Z1bmN0aW9uc193aXRoX2JzcWw6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3NxdWFyZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIG51bWJlcnMgKFxuICAgICAgICAgICAgbiBudW1iZXIgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IHNxdWFyZXMgYXMgc2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlKCBuICkgYXMgc3F1YXJlXG4gICAgICAgICAgZnJvbSBudW1iZXJzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgaW5zZXJ0X251bWJlcjogU1FMXCJcIlwiaW5zZXJ0IGludG8gbnVtYmVycyAoIG4gKSB2YWx1ZXMgKCAkbiApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBuICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fc3F1YXJlczogU1FMXCJcIlwic2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgZnJvbSBzcXVhcmVzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAY3JlYXRlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAgICdzcXVhcmUnXG4gICAgICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgICAgICB2YWx1ZTogICAgICAgICAgICggbiApIC0+IG4gKiogMlxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3F1YXJlcyAgID0gbmV3IERicmljX3NxdWFyZXMgZGJfcGF0aFxuICAgICAgZm9yIG4gaW4gWyAwIC4uLiAxMCBdXG4gICAgICAgIHNxdWFyZXMuc3RhdGVtZW50cy5pbnNlcnRfbnVtYmVyLnJ1biB7IG4sIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICByb3dzID0gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICBAZXEgKCDOqWJiZGJyXzE1NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMCwgc3F1YXJlOiAwIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAxLCBzcXVhcmU6IDEgfVxuICAgICAgQGVxICggzqliYmRicl8xNTYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDIsIHNxdWFyZTogNCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMywgc3F1YXJlOiA5IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA0LCBzcXVhcmU6IDE2IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA1LCBzcXVhcmU6IDI1IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTYwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA2LCBzcXVhcmU6IDM2IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTYxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA3LCBzcXVhcmU6IDQ5IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTYyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA4LCBzcXVhcmU6IDY0IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTYzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA5LCBzcXVhcmU6IDgxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTY0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgdW5kZWZpbmVkXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVkZl9hZ2dyZWdhdGVzX3dpdGhfYnNxbDogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3F1YXJlcyBleHRlbmRzIERicmljXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgbnVtYmVycyAoXG4gICAgICAgICAgICBuIG51bWJlciB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHZpZXcgc3F1YXJlcyBhcyBzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUoIG4gKSBhcyBzcXVhcmVcbiAgICAgICAgICBmcm9tIG51bWJlcnNcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfbnVtYmVyOiBTUUxcIlwiXCJpbnNlcnQgaW50byBudW1iZXJzICggbiApIHZhbHVlcyAoICRuIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIG4gKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9zcXVhcmVzOiBTUUxcIlwiXCJzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUsXG4gICAgICAgICAgICBwcm9kdWN0KCBuICkgICAgICBhcyBwX24sXG4gICAgICAgICAgICBwcm9kdWN0KCBzcXVhcmUgKSBhcyBwX3NxdWFyZVxuICAgICAgICAgIGZyb20gc3F1YXJlc1xuICAgICAgICAgIHdoZXJlIG4gYmV0d2VlbiAkc3RhcnQgYW5kICRzdG9wXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAY3JlYXRlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAgICdzcXVhcmUnXG4gICAgICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgICAgICB2YWx1ZTogICAgICAgICAgIHNxdWFyZSA9ICggbiApIC0+IG4gKiogMlxuICAgICAgICBAY3JlYXRlX2FnZ3JlZ2F0ZV9mdW5jdGlvblxuICAgICAgICAgIG5hbWU6ICAgICAgICAgICAncHJvZHVjdCdcbiAgICAgICAgICBzdGFydDogICAgICAgICAgLT4gbnVsbFxuICAgICAgICAgIHN0ZXA6ICAgICAgICAgICBwcm9kdWN0ID0gKCB0b3RhbCwgZWxlbWVudCApIC0+XG4gICAgICAgICAgICAjIGRlYnVnICfOqWJiZGJyXzE2NScsIHsgdG90YWwsIGVsZW1lbnQsIH1cbiAgICAgICAgICAgIHJldHVybiAoIHRvdGFsID8gMSApICogZWxlbWVudFxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3F1YXJlcyAgID0gbmV3IERicmljX3NxdWFyZXMgZGJfcGF0aFxuICAgICAgZm9yIG4gaW4gWyAwIC4uLiAxMCBdXG4gICAgICAgIHNxdWFyZXMuc3RhdGVtZW50cy5pbnNlcnRfbnVtYmVyLnJ1biB7IG4sIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE2NicsIHJvdyBmb3Igcm93IGZyb20gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSB7IHN0YXJ0OiAyLCBzdG9wOiAzLCB9XG4gICAgICByb3dzID0gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSB7IHN0YXJ0OiAyLCBzdG9wOiAzLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE2NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMiwgc3F1YXJlOiA0LCBwX246IDYsIHBfc3F1YXJlOiAzNiB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE2OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfdGFibGVfZnVuY3Rpb25fd2l0aF9ic3FsOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19waHJhc2VzIGV4dGVuZHMgRGJyaWNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBwaHJhc2VzIChcbiAgICAgICAgICAgIHBocmFzZSB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfcGhyYXNlOiBTUUxcIlwiXCJpbnNlcnQgaW50byBwaHJhc2VzICggcGhyYXNlICkgdmFsdWVzICggJHBocmFzZSApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBwaHJhc2UgKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9waHJhc2VzOiBTUUxcIlwiXCJcbiAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgZnJvbVxuICAgICAgICAgICAgICBwaHJhc2VzIGFzIHAsXG4gICAgICAgICAgICAgIHJlX21hdGNoZXMoIHAucGhyYXNlLCAkbWF0Y2hlciApIGFzIHJ4XG4gICAgICAgICAgICBvcmRlciBieSBwLnBocmFzZTtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAY3JlYXRlX3RhYmxlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAncmVfbWF0Y2hlcydcbiAgICAgICAgICBjb2x1bW5zOiAgICAgIFsgJ21hdGNoJywgJ2NhcHR1cmUnLCBdXG4gICAgICAgICAgcGFyYW1ldGVyczogICBbICd0ZXh0JywgJ3BhdHRlcm4nLCBdXG4gICAgICAgICAgcm93czogKCB0ZXh0LCBwYXR0ZXJuICkgLT5cbiAgICAgICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cCBwYXR0ZXJuLCAnZydcbiAgICAgICAgICAgIGZvciBtYXRjaCBmcm9tIHRleHQubWF0Y2hBbGwgcmVnZXhcbiAgICAgICAgICAgICAgeWllbGQgWyBtYXRjaFsgMCBdLCBtYXRjaFsgMSBdLCBdXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgcGhyYXNlcyAgID0gbmV3IERicmljX3BocmFzZXMgZGJfcGF0aFxuICAgICAgZm9yIHBocmFzZSBpbiBbICdlbGV2ZW4nLCAnZml2ZScsICduaW5lJywgJ29uZScsICdvbmUgcG9pbnQgZml2ZScsICdzZXZlbicsICd0aHJlZSBwb2ludCBvbmUnIF1cbiAgICAgICAgcGhyYXNlcy5zdGF0ZW1lbnRzLmluc2VydF9waHJhc2UucnVuIHsgcGhyYXNlLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xNjknLCByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9waHJhc2VzLml0ZXJhdGUgeyBtYXRjaGVyOiAnXi4qKFthZWlvdV0uZSkuKiQnLCB9XG4gICAgICAjIGVjaG8oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTcwJywgcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fcGhyYXNlcy5pdGVyYXRlIHsgbWF0Y2hlcjogJyhbXmFlaW91XT9bYWVpb3VdKykoPz1bbW52XSknLCB9XG4gICAgICByb3dzID0gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3BocmFzZXMuaXRlcmF0ZSB7IG1hdGNoZXI6ICcoW15hZWlvdV0/W2FlaW91XSspKD89W21udl0pJywgfVxuICAgICAgQGVxICggzqliYmRicl8xNzEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ2VsZXZlbicsIG1hdGNoOiAnbGUnLCBjYXB0dXJlOiAnbGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTcyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdlbGV2ZW4nLCBtYXRjaDogJ3ZlJywgY2FwdHVyZTogJ3ZlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnZml2ZScsIG1hdGNoOiAnZmknLCBjYXB0dXJlOiAnZmknIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTc0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICduaW5lJywgbWF0Y2g6ICduaScsIGNhcHR1cmU6ICduaScgfVxuICAgICAgQGVxICggzqliYmRicl8xNzUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ29uZScsIG1hdGNoOiAnbycsIGNhcHR1cmU6ICdvJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnb25lIHBvaW50IGZpdmUnLCBtYXRjaDogJ28nLCBjYXB0dXJlOiAnbycgfVxuICAgICAgQGVxICggzqliYmRicl8xNzcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ29uZSBwb2ludCBmaXZlJywgbWF0Y2g6ICdwb2knLCBjYXB0dXJlOiAncG9pJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnb25lIHBvaW50IGZpdmUnLCBtYXRjaDogJ2ZpJywgY2FwdHVyZTogJ2ZpJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnc2V2ZW4nLCBtYXRjaDogJ3NlJywgY2FwdHVyZTogJ3NlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnc2V2ZW4nLCBtYXRjaDogJ3ZlJywgY2FwdHVyZTogJ3ZlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAndGhyZWUgcG9pbnQgb25lJywgbWF0Y2g6ICdwb2knLCBjYXB0dXJlOiAncG9pJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAndGhyZWUgcG9pbnQgb25lJywgbWF0Y2g6ICcgbycsIGNhcHR1cmU6ICcgbycgfVxuICAgICAgQGVxICggzqliYmRicl8xODMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB1bmRlZmluZWRcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZmlsZV9taXJyb3JfYXNfdGFibGVfZnVuY3Rpb246IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3BocmFzZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgZGF0YXNvdXJjZXMgKFxuICAgICAgICAgICAgZHNrZXkgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgICBwYXRoIHRleHQgbm90IG51bGwgKTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdmlldyBtaXJyb3IgYXMgc2VsZWN0XG4gICAgICAgICAgICAqXG4gICAgICAgICAgZnJvbVxuICAgICAgICAgICAgZGF0YXNvdXJjZXMgYXMgZHMsXG4gICAgICAgICAgICBmaWxlX2xpbmVzKCBkcy5wYXRoICkgYXMgZmxcbiAgICAgICAgICBvcmRlciBieSBkcy5kc2tleSwgZmwubGluZV9ucjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUga2V5d29yZHMgKFxuICAgICAgICAgICAgZHNrZXkgICB0ZXh0ICAgIG5vdCBudWxsLFxuICAgICAgICAgICAgbGluZV9uciBpbnRlZ2VyIG5vdCBudWxsLFxuICAgICAgICAgICAga2V5d29yZCB0ZXh0ICAgIG5vdCBudWxsLFxuICAgICAgICAgIGZvcmVpZ24ga2V5ICggZHNrZXkgKSByZWZlcmVuY2VzIGRhdGFzb3VyY2VzICggZHNrZXkgKSxcbiAgICAgICAgICBwcmltYXJ5IGtleSAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgKTtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfZGF0YXNvdXJjZTogU1FMXCJcIlwiaW5zZXJ0IGludG8gZGF0YXNvdXJjZXMgKCBkc2tleSwgcGF0aCApIHZhbHVlcyAoICRkc2tleSwgJHBhdGggKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggZHNrZXkgKSBkbyB1cGRhdGUgc2V0IHBhdGggPSAkcGF0aDtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfa2V5d29yZDogU1FMXCJcIlwiaW5zZXJ0IGludG8ga2V5d29yZHMgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApIHZhbHVlcyAoICRkc2tleSwgJGxpbmVfbnIsICRrZXl3b3JkIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9kYXRhc291cmNlczogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBkYXRhc291cmNlcyBvcmRlciBieSBkc2tleTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9rZXl3b3JkczogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBrZXl3b3JkcyBvcmRlciBieSBrZXl3b3JkLCBkc2tleSwgbGluZV9ucjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9taXJyb3I6IFNRTFwiXCJcInNlbGVjdCAqIGZyb20gbWlycm9yIG9yZGVyIGJ5IGRza2V5O1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpbml0aWFsaXplOiAtPlxuICAgICAgICBzdXBlcigpXG4gICAgICAgIEBjcmVhdGVfdGFibGVfZnVuY3Rpb25cbiAgICAgICAgICBuYW1lOiAgICAgICAgICdmaWxlX2xpbmVzJ1xuICAgICAgICAgIGNvbHVtbnM6ICAgICAgWyAnbGluZV9ucicsICdsaW5lJywgXVxuICAgICAgICAgIHBhcmFtZXRlcnM6ICAgWyAncGF0aCcsIF1cbiAgICAgICAgICByb3dzOiAoIHBhdGggKSAtPlxuICAgICAgICAgICAgZm9yIHsgbG5yOiBsaW5lX25yLCBsaW5lLCBlb2wsIH0gZnJvbSBHVVkuZnMud2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoXG4gICAgICAgICAgICAgIHlpZWxkIHsgbGluZV9uciwgbGluZSwgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgO251bGxcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHBocmFzZXMgICA9IG5ldyBEYnJpY19waHJhc2VzIGRiX3BhdGhcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTg0ID0gLT4gKCBwaHJhc2VzLnByZXBhcmUgU1FMXCJcIlwicHJhZ21hIGZvcmVpZ25fa2V5c1wiXCJcIiApLmdldCgpICksIHsgZm9yZWlnbl9rZXlzOiAxLCAgICAgIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTg1ID0gLT4gKCBwaHJhc2VzLnByZXBhcmUgU1FMXCJcIlwicHJhZ21hIGpvdXJuYWxfbW9kZVwiXCJcIiApLmdldCgpICksIHsgam91cm5hbF9tb2RlOiAnd2FsJywgIH1cbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBkbyA9PlxuICAgICAgIyAgIGRza2V5ID0gJ3JlYWRtZSdcbiAgICAgICMgICBwYXRoICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvUkVBRE1FLm1kJ1xuICAgICAgIyAgIHBocmFzZXMuc3RhdGVtZW50cy5pbnNlcnRfZGF0YXNvdXJjZS5ydW4geyBkc2tleSwgcGF0aCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRza2V5ID0gJ3BhY2thZ2UtanNvbidcbiAgICAgICAgcGF0aCAgPSBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL3BhY2thZ2UuanNvbidcbiAgICAgICAgcGhyYXNlcy5zdGF0ZW1lbnRzLmluc2VydF9kYXRhc291cmNlLnJ1biB7IGRza2V5LCBwYXRoIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE4NicsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX2RhdGFzb3VyY2VzLml0ZXJhdGUoKVxuICAgICAgIyBlY2hvKClcbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE4NycsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX21pcnJvci5pdGVyYXRlKClcbiAgICAgICMgZWNobygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZvciB7IGRza2V5LCBsaW5lX25yLCBsaW5lLCB9IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX21pcnJvci5pdGVyYXRlKClcbiAgICAgICAga2V5d29yZHMgPSBsaW5lLnNwbGl0IC8oPzpcXHB7Wn0rKXwoKD86XFxwe0x9Kyl8KD86XFxwe059Kyl8KD86XFxwe1N9KykpL3ZcbiAgICAgICAgIyBkZWJ1ZyAnzqliYmRicl8xODgnLCBsaW5lX25yLCBycHIga2V5d29yZHNcbiAgICAgICAgZm9yIGtleXdvcmQgaW4ga2V5d29yZHNcbiAgICAgICAgICBjb250aW51ZSB1bmxlc3Mga2V5d29yZD9cbiAgICAgICAgICBjb250aW51ZSBpZiBrZXl3b3JkIGlzICcnXG4gICAgICAgICAgcGhyYXNlcy53LnN0YXRlbWVudHMuaW5zZXJ0X2tleXdvcmQucnVuIHsgZHNrZXksIGxpbmVfbnIsIGtleXdvcmQsIH1cbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE4OScsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX2tleXdvcmRzLml0ZXJhdGUoKVxuICAgICAgIyBlY2hvKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmaWxlX21pcnJvcl93aXRoX2ludGVncmF0ZWRfaW5zZXJ0czogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfcGhyYXNlcyBleHRlbmRzIERicmljXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBkYXRhc291cmNlcyAoXG4gICAgICAgICAgICBkc2tleSB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICAgIHBhdGggdGV4dCBub3QgbnVsbCApO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IG1pcnJvciBhcyBzZWxlY3RcbiAgICAgICAgICAgICpcbiAgICAgICAgICBmcm9tXG4gICAgICAgICAgICBkYXRhc291cmNlcyBhcyBkcyxcbiAgICAgICAgICAgIGZpbGVfbGluZXMoIGRzLnBhdGggKSBhcyBmbFxuICAgICAgICAgIG9yZGVyIGJ5IGRzLmRza2V5LCBmbC5saW5lX25yO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBrZXl3b3JkcyAoXG4gICAgICAgICAgICBkc2tleSAgIHRleHQgICAgbm90IG51bGwsXG4gICAgICAgICAgICBsaW5lX25yIGludGVnZXIgbm90IG51bGwsXG4gICAgICAgICAgICBrZXl3b3JkIHRleHQgICAgbm90IG51bGwsXG4gICAgICAgICAgZm9yZWlnbiBrZXkgKCBkc2tleSApIHJlZmVyZW5jZXMgZGF0YXNvdXJjZXMgKCBkc2tleSApLFxuICAgICAgICAgIHByaW1hcnkga2V5ICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKSApO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGluc2VydF9kYXRhc291cmNlOiBTUUxcIlwiXCJpbnNlcnQgaW50byBkYXRhc291cmNlcyAoIGRza2V5LCBwYXRoICkgdmFsdWVzICggJGRza2V5LCAkcGF0aCApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBkc2tleSApIGRvIHVwZGF0ZSBzZXQgcGF0aCA9ICRwYXRoO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGluc2VydF9rZXl3b3JkOiBTUUxcIlwiXCJpbnNlcnQgaW50byBrZXl3b3JkcyAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgdmFsdWVzICggJGRza2V5LCAkbGluZV9uciwgJGtleXdvcmQgKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNlbGVjdF9mcm9tX2RhdGFzb3VyY2VzOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIGRhdGFzb3VyY2VzIG9yZGVyIGJ5IGRza2V5O1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNlbGVjdF9mcm9tX2tleXdvcmRzOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIGtleXdvcmRzIG9yZGVyIGJ5IGtleXdvcmQsIGRza2V5LCBsaW5lX25yO1wiXCJcIlxuICAgICAgICBsb2NhdGlvbnNfZnJvbV9rZXl3b3JkOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIGtleXdvcmRzXG4gICAgICAgICAgd2hlcmUga2V5d29yZCA9ICRrZXl3b3JkXG4gICAgICAgICAgb3JkZXIgYnkga2V5d29yZCwgZHNrZXksIGxpbmVfbnI7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc2VsZWN0X2Zyb21fbWlycm9yOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIG1pcnJvciBvcmRlciBieSBkc2tleTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBwb3B1bGF0ZV9rZXl3b3JkczogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8ga2V5d29yZHMgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApXG4gICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgZHMuZHNrZXkgICAgYXMgZHNrZXksXG4gICAgICAgICAgICAgIG1pLmxpbmVfbnIgIGFzIGxpbmVfbnIsXG4gICAgICAgICAgICAgIHN3LmtleXdvcmQgIGFzIGtleXdvcmRcbiAgICAgICAgICAgIGZyb20gZGF0YXNvdXJjZXMgICAgICAgIGFzIGRzXG4gICAgICAgICAgICBqb2luIG1pcnJvciAgICAgICAgICAgICBhcyBtaSB1c2luZyAoIGRza2V5ICksXG4gICAgICAgICAgICBzcGxpdF93b3JkcyggbWkubGluZSApICBhcyBzd1xuICAgICAgICAgICAgd2hlcmUgdHJ1ZSAtLSB3aGVyZSBjbGF1c2UganVzdCBhIHN5bnRhY3RpYyBndWFyZCBhcyBwZXIgaHR0cHM6Ly9zcWxpdGUub3JnL2xhbmdfdXBzZXJ0Lmh0bWxcbiAgICAgICAgICAgIG9uIGNvbmZsaWN0IGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGluaXRpYWxpemU6IC0+XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAY3JlYXRlX3RhYmxlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAgICdzcGxpdF93b3JkcydcbiAgICAgICAgICBjb2x1bW5zOiAgICAgICAgWyAna2V5d29yZCcsIF1cbiAgICAgICAgICBwYXJhbWV0ZXJzOiAgICAgWyAnbGluZScsIF1cbiAgICAgICAgICByb3dzOiAoIGxpbmUgKSAtPlxuICAgICAgICAgICAga2V5d29yZHMgPSBsaW5lLnNwbGl0IC8oPzpcXHB7Wn0rKXwoKD86XFxwe0x9Kyl8KD86XFxwe059Kyl8KD86XFxwe1N9KykpL3ZcbiAgICAgICAgICAgICMgZGVidWcgJ86pYmJkYnJfMTkwJywgbGluZV9uciwgcnByIGtleXdvcmRzXG4gICAgICAgICAgICBmb3Iga2V5d29yZCBpbiBrZXl3b3Jkc1xuICAgICAgICAgICAgICBjb250aW51ZSB1bmxlc3Mga2V5d29yZD9cbiAgICAgICAgICAgICAgY29udGludWUgaWYga2V5d29yZCBpcyAnJ1xuICAgICAgICAgICAgICB5aWVsZCB7IGtleXdvcmQsIH1cbiAgICAgICAgICAgIDtudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGNyZWF0ZV90YWJsZV9mdW5jdGlvblxuICAgICAgICAgIG5hbWU6ICAgICAgICAgJ2ZpbGVfbGluZXMnXG4gICAgICAgICAgY29sdW1uczogICAgICBbICdsaW5lX25yJywgJ2xpbmUnLCBdXG4gICAgICAgICAgcGFyYW1ldGVyczogICBbICdwYXRoJywgXVxuICAgICAgICAgIHJvd3M6ICggcGF0aCApIC0+XG4gICAgICAgICAgICBmb3IgeyBsbnI6IGxpbmVfbnIsIGxpbmUsIGVvbCwgfSBmcm9tIEdVWS5mcy53YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zIHBhdGhcbiAgICAgICAgICAgICAgeWllbGQgeyBsaW5lX25yLCBsaW5lLCB9XG4gICAgICAgICAgICA7bnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIDtudWxsXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBwaHJhc2VzICAgPSBuZXcgRGJyaWNfcGhyYXNlcyBkYl9wYXRoXG4gICAgICAjIGRlYnVnICfOqWJiZGJyXzE5MScsIHBocmFzZXMudGVhcmRvd24oKVxuICAgICAgIyBkZWJ1ZyAnzqliYmRicl8xOTInLCBwaHJhc2VzLnJlYnVpbGQoKVxuICAgICAgQGVxICggzqliYmRicl8xOTMgPSAtPiAoIHBocmFzZXMucHJlcGFyZSBTUUxcIlwiXCJwcmFnbWEgZm9yZWlnbl9rZXlzXCJcIlwiICkuZ2V0KCkgKSwgeyBmb3JlaWduX2tleXM6IDEsICAgICAgfVxuICAgICAgQGVxICggzqliYmRicl8xOTQgPSAtPiAoIHBocmFzZXMucHJlcGFyZSBTUUxcIlwiXCJwcmFnbWEgam91cm5hbF9tb2RlXCJcIlwiICkuZ2V0KCkgKSwgeyBqb3VybmFsX21vZGU6ICd3YWwnLCAgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkc2tleSA9ICdodW1kdW0nXG4gICAgICAgIHBhdGggID0gUEFUSC5yZXNvbHZlIF9fZGlybmFtZSwgJy4uLy4uLy4uL2Fzc2V0cy9icmljYWJyYWMvaHVtcHR5LWR1bXB0eS5tZCdcbiAgICAgICAgcGhyYXNlcy5zdGF0ZW1lbnRzLmluc2VydF9kYXRhc291cmNlLnJ1biB7IGRza2V5LCBwYXRoIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcGhyYXNlcy5zdGF0ZW1lbnRzLnBvcHVsYXRlX2tleXdvcmRzLnJ1bigpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xOTUnLCByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5sb2NhdGlvbnNfZnJvbV9rZXl3b3JkLml0ZXJhdGUgeyBrZXl3b3JkOiAndGhvdWdodCcsIH1cbiAgICAgICMgZWNobygpXG4gICAgICByb3dzID0gcGhyYXNlcy5zdGF0ZW1lbnRzLmxvY2F0aW9uc19mcm9tX2tleXdvcmQuaXRlcmF0ZSB7IGtleXdvcmQ6ICd0aG91Z2h0JywgfVxuICAgICAgQGVxICggzqliYmRicl8xOTYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMTUsIGtleXdvcmQ6ICd0aG91Z2h0JyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE5NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAzNCwga2V5d29yZDogJ3Rob3VnaHQnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTk4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgdW5kZWZpbmVkXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xOTknLCByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5sb2NhdGlvbnNfZnJvbV9rZXl3b3JkLml0ZXJhdGUgeyBrZXl3b3JkOiAnc2hlJywgfVxuICAgICAgIyBlY2hvKClcbiAgICAgIHJvd3MgPSBwaHJhc2VzLnN0YXRlbWVudHMubG9jYXRpb25zX2Zyb21fa2V5d29yZC5pdGVyYXRlIHsga2V5d29yZDogJ3NoZScsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjAwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDIsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjAxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDMsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjAyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDQsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjAzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDUsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjA0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDE1LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIwNSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAxNywga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8yMDYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMTgsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjA3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDI2LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIwOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAzNCwga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8yMDkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMzYsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjEwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgdW5kZWZpbmVkXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfc3RkX3ZhcmlhYmxlc19hbmRfc2VxdWVuY2VzOiAtPlxuICAgIHsgRGJyaWNfc3RkLFxuICAgICAgVHJ1ZSxcbiAgICAgIEZhbHNlLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIHsgbGV0cyxcbiAgICAgIGZyZWV6ZSwgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2xldHNmcmVlemV0aGF0X2luZnJhKCkuc2ltcGxlXG4gICAgY2ZnX2RvX3Nob3dfdmFyaWFibGVzICAgICAgICAgPSBmYWxzZVxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZGIgPSBuZXcgRGJyaWNfc3RkICc6bWVtb3J5OidcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEB0aHJvd3MgKCDOqWJiZGJyXzIxMSA9IC0+IGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyAtPiBkYi5zdGRfd2l0aF92YXJpYWJsZXMgLT4gbnVsbCAgKSwgL2lsbGVnYWwgdG8gbmVzdCBgc3RkX3dpdGhfdmFyaWFibGVzXFwoXFwpYCBjb250ZXh0cy9cbiAgICBAdGhyb3dzICggzqliYmRicl8yMTIgPSAtPiBkYi5zdGRfc2V0X3ZhcmlhYmxlICdteW5hbWUnLCAnbXl2YWx1ZScgICAgICAgICAgICAgICAgICksIC9pbGxlZ2FsIHRvIHNldCB2YXJpYWJsZS9cbiAgICAjIEB0aHJvd3MgKCDOqWJiZGJyXzIxMyA9IC0+IGRiLnN0ZF9nZXRfdmFyaWFibGUgJ215bmFtZScgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL2lsbGVnYWwgdG8gZ2V0IHZhcmlhYmxlL1xuICAgIEB0aHJvd3MgKCDOqWJiZGJyXzIxNCA9IC0+IGRiLnN0ZF9nZXRfdmFyaWFibGUgJ215bmFtZScgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL3Vua25vd24gdmFyaWFibGUvXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB2YXJpYWJsZXMgPSAoZGIuX3Nob3dfdmFyaWFibGVzIGNmZ19kb19zaG93X3ZhcmlhYmxlcyApXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkYi5zdGRfd2l0aF92YXJpYWJsZXMgPT5cbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyXzIxNSA9IC0+IGRiLnN0ZF9nZXRfdmFyaWFibGUgJ215bmFtZScgKSwgL3Vua25vd24gdmFyaWFibGUvXG4gICAgICBAZXEgKCDOqWJiZGJyXzIxNiA9IC0+IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzICkgKSwgeyAnc2VxOmdsb2JhbDpyb3dpZCc6IHsgc3Y6IDAsIHNkOiAxLCBjdjogMCwgY2Q6IDEsIHR2OiB1bmRlZmluZWQsIGd2OiAwIH0gfVxuICAgICAgIyMjIFRBSU5UIHVzZSBBUEkgIyMjXG4gICAgICBkYi5zdGF0ZS5zdGRfdmFyaWFibGVzID0gbGV0cyBkYi5zdGF0ZS5zdGRfdmFyaWFibGVzLCAoIGQgKSAtPlxuICAgICAgICBkWyAnc2VxOmFwcDpjb3VudGVyJyBdID0geyBuYW1lOiAnc2VxOmFwcDpjb3VudGVyJywgdmFsdWU6IDcsIGRlbHRhOiArMywgfVxuICAgICAgQGVxICggzqliYmRicl8yMTcgPSAtPiAoZGIuX3Nob3dfdmFyaWFibGVzIGNmZ19kb19zaG93X3ZhcmlhYmxlcyApICksIHsgJ3NlcTphcHA6Y291bnRlcic6IHsgc3Y6IHVuZGVmaW5lZCwgc2Q6IHVuZGVmaW5lZCwgY3Y6IDcsIGNkOiAzLCB0djogdW5kZWZpbmVkLCBndjogNyB9LCAnc2VxOmdsb2JhbDpyb3dpZCc6IHsgc3Y6IDAsIHNkOiAxLCBjdjogMCwgY2Q6IDEsIHR2OiB1bmRlZmluZWQsIGd2OiAwIH0gfVxuICAgICAgQGVxICggzqliYmRicl8yMTggPSAtPiBkYi5zdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UgJ3NlcTphcHA6Y291bnRlcicgKSwgMTBcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjE5ID0gLT4gZGIuc3RkX2dldF9uZXh0X2luX3NlcXVlbmNlICdzZXE6YXBwOmNvdW50ZXInICksIDEzXG4gICAgICBkYi5zdGRfc2V0X3ZhcmlhYmxlICdmdXp6JywgMTEuNVxuICAgICAgZGIuc3RkX3NldF92YXJpYWJsZSAnbmFtZScsICdCb2InXG4gICAgICBAZXEgKCDOqWJiZGJyXzIyMCA9IC0+IGRiLnN0ZF9nZXRfdmFyaWFibGUgJ2Z1enonICksIDExLjVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjIxID0gLT4gZGIuc3RkX2dldF92YXJpYWJsZSAnbmFtZScgKSwgJ0JvYidcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjIyID0gLT4gKGRiLl9zaG93X3ZhcmlhYmxlcyBjZmdfZG9fc2hvd192YXJpYWJsZXMgKSApLCB7IGZ1eno6IHsgc3Y6IHVuZGVmaW5lZCwgc2Q6IHVuZGVmaW5lZCwgY3Y6IDExLjUsIGNkOiBudWxsLCB0djogdW5kZWZpbmVkLCBndjogMTEuNSwgfSwgbmFtZTogeyBzdjogdW5kZWZpbmVkLCBzZDogdW5kZWZpbmVkLCBjdjogJ0JvYicsIGNkOiBudWxsLCB0djogdW5kZWZpbmVkLCBndjogJ0JvYicgfSwgJ3NlcTphcHA6Y291bnRlcic6IHsgc3Y6IHVuZGVmaW5lZCwgc2Q6IHVuZGVmaW5lZCwgY3Y6IDEzLCBjZDogMywgdHY6IHVuZGVmaW5lZCwgZ3Y6IDEzIH0sICdzZXE6Z2xvYmFsOnJvd2lkJzogeyBzdjogMCwgc2Q6IDEsIGN2OiAwLCBjZDogMSwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDAgfSB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzIHsgbmFtZTogJ0FsaWNlJywgam9iOiAnZW5naW5lZXInLCB9LCA9PlxuICAgICAgQGVxICggzqliYmRicl8yMjMgPSAtPiBkYi5zdGRfZ2V0X3ZhcmlhYmxlICduYW1lJyApLCAnQWxpY2UnXG4gICAgICAjIGRlYnVnICfOqWJiZGJyXzIyNCcsIHsgbmFtZSwgam9iLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIyNSA9IC0+IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzICkgKSwgeyBmdXp6OiB7IHN2OiAxMS41LCBzZDogbnVsbCwgY3Y6IDExLjUsIGNkOiBudWxsLCB0djogdW5kZWZpbmVkLCBndjogMTEuNSB9LCBqb2I6IHsgc3Y6IHVuZGVmaW5lZCwgc2Q6IHVuZGVmaW5lZCwgY3Y6IHVuZGVmaW5lZCwgY2Q6IHVuZGVmaW5lZCwgdHY6ICdlbmdpbmVlcicsIGd2OiAnZW5naW5lZXInIH0sIG5hbWU6IHsgc3Y6ICdcIkJvYlwiJywgc2Q6IG51bGwsIGN2OiAnQm9iJywgY2Q6IG51bGwsIHR2OiAnQWxpY2UnLCBndjogJ0FsaWNlJyB9LCAnc2VxOmFwcDpjb3VudGVyJzogeyBzdjogMTMsIHNkOiAzLCBjdjogMTMsIGNkOiAzLCB0djogdW5kZWZpbmVkLCBndjogMTMgfSwgJ3NlcTpnbG9iYWw6cm93aWQnOiB7IHN2OiAwLCBzZDogMSwgY3Y6IDAsIGNkOiAxLCB0djogdW5kZWZpbmVkLCBndjogMCB9IH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWJiZGJyXzIyNiA9IC0+IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzICkgKSwgeyBmdXp6OiB7IHN2OiAxMS41LCBzZDogbnVsbCwgY3Y6IDExLjUsIGNkOiBudWxsLCB0djogdW5kZWZpbmVkLCBndjogMTEuNSB9LCBuYW1lOiB7IHN2OiAnXCJCb2JcIicsIHNkOiBudWxsLCBjdjogJ0JvYicsIGNkOiBudWxsLCB0djogdW5kZWZpbmVkLCBndjogJ0JvYicgfSwgJ3NlcTphcHA6Y291bnRlcic6IHsgc3Y6IDEzLCBzZDogMywgY3Y6IDEzLCBjZDogMywgdHY6IHVuZGVmaW5lZCwgZ3Y6IDEzIH0sICdzZXE6Z2xvYmFsOnJvd2lkJzogeyBzdjogMCwgc2Q6IDEsIGN2OiAwLCBjZDogMSwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDAgfSB9XG4gICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzID0+XG4gICAgICBAZXEgKCDOqWJiZGJyXzIyNyA9IC0+IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzICkgKSwgeyBmdXp6OiB7IHN2OiAxMS41LCBzZDogbnVsbCwgY3Y6IDExLjUsIGNkOiBudWxsLCB0djogdW5kZWZpbmVkLCBndjogMTEuNSB9LCBuYW1lOiB7IHN2OiAnXCJCb2JcIicsIHNkOiBudWxsLCBjdjogJ0JvYicsIGNkOiBudWxsLCB0djogdW5kZWZpbmVkLCBndjogJ0JvYicgfSwgJ3NlcTphcHA6Y291bnRlcic6IHsgc3Y6IDEzLCBzZDogMywgY3Y6IDEzLCBjZDogMywgdHY6IHVuZGVmaW5lZCwgZ3Y6IDEzIH0sICdzZXE6Z2xvYmFsOnJvd2lkJzogeyBzdjogMCwgc2Q6IDEsIGN2OiAwLCBjZDogMSwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDAgfSB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzID0+XG4gICAgICAjIyMgTW9kZWwgdGhhdCBzaG93cyBob3cgdG8gaW5zZXJ0IHNlcXVlbnRpYWwgUm93SURzIHVzaW5nIGEgcHJpdmF0ZSB0YWJsZSwgYW4gYXNzb2NpYXRlZCBwdWJsaWNcbiAgICAgIHZpZXcsIGFuZCBhIGBpbnN0ZWFkIG9mIGluc2VydGAgdHJpZ2dlcjogIyMjXG4gICAgICBkYi5zdGRfc2V0X3ZhcmlhYmxlICdzZXE6bGV0dGVycycsIDAsIDFcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIF9sZXR0ZXJzIChcbiAgICAgICAgICByb3dpZCAgIHRleHQgICAgdW5pcXVlICBub3QgbnVsbCxcbiAgICAgICAgICBsZXR0ZXIgIHRleHQgICAgdW5pcXVlICBub3QgbnVsbCxcbiAgICAgICAgLS0gcHJpbWFyeSBrZXkgKCByb3dpZCApXG4gICAgICAgIGNvbnN0cmFpbnQgXCLOqWNvbnN0cmFpbnRfMjI4XCIgY2hlY2sgKCBsZW5ndGgoIGxldHRlciApID0gMSApXG4gICAgICAgICkgc3RyaWN0O1wiXCJcIlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJjcmVhdGUgdmlldyBsZXR0ZXJzIGFzIHNlbGVjdCAqIGZyb20gX2xldHRlcnM7XCJcIlwiXG4gICAgICBkYi5leGVjdXRlIFNRTFwiXCJcImNyZWF0ZSB0cmlnZ2VyIG9uX2JlZm9yZV9pbnNlcnRfbGV0dGVyc1xuICAgICAgICBpbnN0ZWFkIG9mIGluc2VydCBvbiBsZXR0ZXJzXG4gICAgICAgICAgZm9yIGVhY2ggcm93IGJlZ2luXG4gICAgICAgICAgICBpbnNlcnQgaW50byBfbGV0dGVycyAoIHJvd2lkLCBsZXR0ZXIgKSB2YWx1ZXNcbiAgICAgICAgICAgICAgLS0gKCAndDpsZXR0ZXJzOlI9JyB8fCBjYXN0KCBzdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UoICdzZXE6bGV0dGVycycgKSBhcyBpbnRlZ2VyICksIG5ldy5sZXR0ZXIgKTtcbiAgICAgICAgICAgICAgKCBwcmludGYoICd0OmxldHRlcnM6Uj0lZCcsIHN0ZF9nZXRfbmV4dF9pbl9zZXF1ZW5jZSggJ3NlcTpsZXR0ZXJzJyApICksIG5ldy5sZXR0ZXIgKTtcbiAgICAgICAgICAgIGVuZDtcbiAgICAgICAgO1wiXCJcIlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJpbnNlcnQgaW50byBsZXR0ZXJzICggbGV0dGVyICkgdmFsdWVzICggJ2EnICksICggJ3onICk7XCJcIlwiXG4gICAgICAjIGluZm8gJ86pYmJkYnJfMjI5Jywgcm93IGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBsZXR0ZXJzO1wiXG4gICAgICByb3dzID0gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gbGV0dGVycyBvcmRlciBieSBsZXR0ZXI7XCJcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjMwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6bGV0dGVyczpSPTEnLCBsZXR0ZXI6ICdhJywgfVxuICAgICAgQGVxICggzqliYmRicl8yMzEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpsZXR0ZXJzOlI9MicsIGxldHRlcjogJ3onLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIzMiA9IC0+IHJvd3MubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzID0+XG4gICAgICAjIyMgTk9URSBNb2RlbCB0aGF0IHNob3dzIGhvdyB0byBpbnNlcnQgcm93cyB3aXRoIHNlcXVlbnRpYWwgUm93SURzIHVzaW5nIGEgdGJhbGUgYW5kIGFuZCBgYWZ0ZXJcbiAgICAgIGluc2VydGAgdHJpZ2dlciB0aGF0IHVwZGF0ZXMgYHJvd2lkYDogIyMjXG4gICAgICBkYi5zdGRfc2V0X3ZhcmlhYmxlICdzZXE6bnVtYmVycycsIDAsIDFcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIG51bWJlcnMgKFxuICAgICAgICAgIHJvd2lkICAgdGV4dCAgICB1bmlxdWUgIG5vdCBudWxsIGRlZmF1bHQgJ25ld19yb3dpZCcsXG4gICAgICAgICAgbnVtYmVyICB0ZXh0ICAgIHVuaXF1ZSAgbm90IG51bGxcbiAgICAgICAgKSBzdHJpY3Q7XCJcIlwiXG4gICAgICBkYi5leGVjdXRlIFNRTFwiXCJcImNyZWF0ZSB0cmlnZ2VyIG9uX2FmdGVyX2luc2VydF9vbl9udW1iZXJzXG4gICAgICAgIGFmdGVyIGluc2VydCBvbiBudW1iZXJzIGZvciBlYWNoIHJvdyBiZWdpblxuICAgICAgICAgICAgdXBkYXRlIG51bWJlcnMgc2V0IHJvd2lkID0gcHJpbnRmKCAndDpudW1iZXJzOlI9JWQnLCBzdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UoICdzZXE6bnVtYmVycycgKSApXG4gICAgICAgICAgICAgIHdoZXJlIHJvd2lkID0gJ25ld19yb3dpZCc7XG4gICAgICAgICAgICBlbmQ7XG4gICAgICAgIDtcIlwiXCJcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJcIlwiaW5zZXJ0IGludG8gbnVtYmVycyAoIG51bWJlciApIHZhbHVlcyAoICd1bm8nICksICggJ2R1ZScgKTtcIlwiXCJcbiAgICAgICMgaW5mbyAnzqliYmRicl8yMzMnLCByb3cgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIG51bWJlcnM7XCJcbiAgICAgIHJvd3MgPSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBudW1iZXJzIG9yZGVyIGJ5IHJvd2lkO1wiXG4gICAgICBAZXEgKCDOqWJiZGJyXzIzNCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0Om51bWJlcnM6Uj0xJywgbnVtYmVyOiAndW5vJywgfVxuICAgICAgQGVxICggzqliYmRicl8yMzUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpudW1iZXJzOlI9MicsIG51bWJlcjogJ2R1ZScsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjM2ID0gLT4gcm93cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMjIyBOT1RFIE1vZGVsIHRoYXQgc2hvd3MgaG93IHRvIGJ1aWxkIGEgcGFyYW1ldHJpemVkIHZpZXc6ICMjI1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMjIyByZXBlYXQgZWFybGllciB0ZXN0IHRvIGVuc3VyZSB3ZSBrbm93IHdoYXQncyB0aGVyZTogIyMjXG4gICAgICByb3dzID0gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gbGV0dGVycyBvcmRlciBieSBsZXR0ZXI7XCJcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjM3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6bGV0dGVyczpSPTEnLCBsZXR0ZXI6ICdhJywgfVxuICAgICAgQGVxICggzqliYmRicl8yMzggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpsZXR0ZXJzOlI9MicsIGxldHRlcjogJ3onLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIzOSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGluc2VydF9sZXR0ZXIgPSBkYi5wcmVwYXJlIFNRTFwiXCJcImluc2VydCBpbnRvIGxldHRlcnMgKCBsZXR0ZXIgKSB2YWx1ZXMgKCAkbGV0dGVyICk7XCJcIlwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJjcmVhdGUgdmlldyBydW5fb2ZfbGV0dGVycyBhc1xuICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICpcbiAgICAgICAgICBmcm9tIGxldHRlcnNcbiAgICAgICAgICB3aGVyZSBsZXR0ZXIgYmV0d2VlbiBzdGRfZ2V0X3ZhcmlhYmxlKCAnZmlyc3RfbGV0dGVyJyApIGFuZCBzdGRfZ2V0X3ZhcmlhYmxlKCAnbGFzdF9sZXR0ZXInICk7XCJcIlwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzID0+XG4gICAgICAgIGZvciBjaWQgaW4gWyAoICdiJy5jb2RlUG9pbnRBdCAwICkgLi4gKCAneScuY29kZVBvaW50QXQgMCApIF1cbiAgICAgICAgICBsZXR0ZXIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWRcbiAgICAgICAgICBpbnNlcnRfbGV0dGVyLnJ1biB7IGxldHRlciwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyB7IGZpcnN0X2xldHRlcjogJ2cnLCBsYXN0X2xldHRlcjogJ20nIH0sID0+XG4gICAgICAgIHJlc3VsdCAgICA9ICggcm93LmxldHRlciBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gcnVuX29mX2xldHRlcnMgb3JkZXIgYnkgbGV0dGVyO1wiICkuam9pbiAnLCdcbiAgICAgICAgdmFyaWFibGVzID0gKGRiLl9zaG93X3ZhcmlhYmxlcyBjZmdfZG9fc2hvd192YXJpYWJsZXMgKVxuICAgICAgICBAZXEgKCDOqWJiZGJyXzI0MCA9IC0+IHJlc3VsdCAgICAgICAgICAgICAgICAgICAgICApLCAnZyxoLGksaixrLGwsbSdcbiAgICAgICAgQGVxICggzqliYmRicl8yNDEgPSAtPiB2YXJpYWJsZXMuZmlyc3RfbGV0dGVyPy5ndiAgKSwgJ2cnXG4gICAgICAgIEBlcSAoIM6pYmJkYnJfMjQyID0gLT4gdmFyaWFibGVzLmxhc3RfbGV0dGVyPy5ndiAgICksICdtJ1xuICAgICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMjIyBOT1RFIE1vZGVsIHRoYXQgc2hvd3MgaG93IHRvIHVzZSBhIHNlcXVlbmNlIHRvIHByb2R1Y2UgUm93SURzOlxuXG4gICAgICAqIGAkdGFibGUucm93aWRgIGNvbHVtbiBpcyBkZWNsYXJlZCAqd2l0aG91dCogYGdlbmVyYXRlIGFsd2F5c2AgY2xhdXNlLFxuICAgICAgKiB0aHVzIGAkdGFibGUucm93aWRgIGNhbiBiZSB1c2VkIGFzIHByaW1hcnkga2V5O1xuICAgICAgKiBhZGRpdGlvbmFsbHksIG1heSBjb250YWluIGNoZWNrIGNsYXVzZSBmb3IgYCR0YWJsZS5yb3dpZGAuXG4gICAgICAqIEFuIGBpbnNlcnRgIHN0YXRlbWVudCBpcyBkZWZpbmVkIHRoYXQgY2FsbHMgYHN0ZF9nZXRfbmV4dF9pbl9zZXF1ZW5jZSgpYCB0byBvYnRhaW4gbmV4dCBSb3dJRDtcbiAgICAgICogaWYgREItd2lkZSB1bmlxdWUgUm93SURzIGFyZSBkZXNpcmFibGUsIHVzZSBgcHJpbnRmKClgIHRvIGVtYmVkIG51bWVyaWNhbCBSb3dJRCBpbiBzdHJpbmcuXG4gICAgICAqIFN1Z2dlc3RlZCB0byB1c2UgYSBzdWZmaXggYF92YCB0byBpZGVudGlmeSBzdGF0ZW1lbnQgYXMgdXNpbmcgdmFyaWFibGVzIGFuZCByZXF1aXJlcyB0byBiZSB1c2VkXG4gICAgICAgIGluc2lkZSBhIGBkYi5zdGRfd2l0aF92YXJpYWJsZXMoKWAgY29udGV4dCBoYW5kbGVyLlxuICAgICAgKiBJbnNlcnQgc3RhdGVtZW50IHRha2VzIGNhcmUgb2YgdGhlIGltcGxlbWVudGF0aW9uIGRldGFpbCBvZiBhc3NpZ25pbmcgdGhlIG5leHQgdW5pcXVlIFJvd0lEOyBzaW5jZVxuICAgICAgICBpdHMgdmFsdWUgaXMgcGVyc2lzdGVkIGluIHRoZSBEQiwgaW5zZXJ0cyBjYW4gYmUgZG9uZSBhY3Jvc3Mgc2V2ZXJhbCBzZXNzaW9ucyB3aXRob3V0IG5lZWRpbmcgYW55XG4gICAgICAgIGFkZGl0aW9uYWwgY29kZSBiZXNpZGVzIHRoZSBjb250ZXh0IGhhbmRsZXIuXG4gICAgICAjIyNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIyMgTk9URSBwYXJ0IG9mIGBEYnJpYy5idWlsZGAgbGlzdDogIyMjXG4gICAgICBkYi5leGVjdXRlIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBwcmZ4X3dvcmRzIChcbiAgICAgICAgICByb3dpZCAgICAgdGV4dCAgdW5pcXVlICBub3QgbnVsbCxcbiAgICAgICAgICBlbiAgICAgICAgdGV4dCAgICAgICAgICBub3QgbnVsbCxcbiAgICAgICAgICBkZSAgICAgICAgdGV4dCAgICAgICAgICBub3QgbnVsbCxcbiAgICAgICAgcHJpbWFyeSBrZXkgKCByb3dpZCApLFxuICAgICAgICBjb25zdHJhaW50IFwizqljb25zdHJhaW50XzI0M1wiIGNoZWNrICggcm93aWQgcmVnZXhwICd0OndyZDpSPVxcXFxkKycgKSApO1wiXCJcIlxuICAgICAgIyMjIE5PVEUgcGFydCBvZiBgRGJyaWMuc3RhdGVtZW50c2Agb2JqZWN0OiAjIyNcbiAgICAgIGluc2VydF93b3JkX3YgPSBkYi5wcmVwYXJlIFNRTFwiXCJcImluc2VydCBpbnRvIHByZnhfd29yZHMgKCByb3dpZCwgZW4sIGRlICkgdmFsdWVzIChcbiAgICAgICAgICBwcmludGYoICd0OndyZDpSPSVkJywgc3RkX2dldF9uZXh0X2luX3NlcXVlbmNlKCAnc2VxOnByZnhfd29yZHNfcm93aWQnICkgKSxcbiAgICAgICAgICAkZW4sXG4gICAgICAgICAgJGRlICk7XCJcIlwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyMjIE5PVEUgcGFydCBvZiByZWJ1aWxkKCkgKD8sIHN0aWxsIHVuY2xlYXIpOiAjIyNcbiAgICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyA9PlxuICAgICAgICBkYi5zdGRfc2V0X3ZhcmlhYmxlICdzZXE6cHJmeF93b3Jkc19yb3dpZCcsIDEwMCwgKzEwMFxuICAgICAgICA7bnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMjIyBOT1RFIGluIHRoZSBhcHAgcHJvcGVyOiAjIyNcbiAgICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyA9PlxuICAgICAgICBpbnNlcnRfd29yZF92LnJ1biB7IGVuOiAnZG9nJywgIGRlOiAnSHVuZCcsICAgfVxuICAgICAgICBpbnNlcnRfd29yZF92LnJ1biB7IGVuOiAnY2F0JywgIGRlOiAnS2F0emUnLCAgfVxuICAgICAgICBpbnNlcnRfd29yZF92LnJ1biB7IGVuOiAnd29yZCcsIGRlOiAnV29ydCcsICAgfVxuICAgICAgICBpbnNlcnRfd29yZF92LnJ1biB7IGVuOiAnY2FsbCcsIGRlOiAncnVmZW4nLCAgfVxuICAgICAgICBpbnNlcnRfd29yZF92LnJ1biB7IGVuOiAnY2FsbCcsIGRlOiAnQW5ydWYnLCAgfVxuICAgICAgICBpbnNlcnRfd29yZF92LnJ1biB7IGVuOiAnYm9vaycsIGRlOiAnQnVjaCcsICAgfVxuICAgICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdmFyaWFibGVzID0gKGRiLl9zaG93X3ZhcmlhYmxlcyBjZmdfZG9fc2hvd192YXJpYWJsZXMgKVxuICAgIEBlcSAoIM6pYmJkYnJfMjQ0ID0gLT4gdmFyaWFibGVzWyAnc2VxOnByZnhfd29yZHNfcm93aWQnIF0/Lmd2ICApLCA3MDBcbiAgICAjIGVjaG8gJ86pYmJkYnJfMjQ1Jywgcm93IGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBwcmZ4X3dvcmRzIG9yZGVyIGJ5IGRlO1wiXG4gICAgcm93cyA9IGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHByZnhfd29yZHMgb3JkZXIgYnkgZGU7XCJcbiAgICBAZXEgKCDOqWJiZGJyXzI0NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OndyZDpSPTYwMCcsIGVuOiAnY2FsbCcsIGRlOiAnQW5ydWYnIH1cbiAgICBAZXEgKCDOqWJiZGJyXzI0NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OndyZDpSPTcwMCcsIGVuOiAnYm9vaycsIGRlOiAnQnVjaCcgfVxuICAgIEBlcSAoIM6pYmJkYnJfMjQ4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6d3JkOlI9MjAwJywgZW46ICdkb2cnLCBkZTogJ0h1bmQnIH1cbiAgICBAZXEgKCDOqWJiZGJyXzI0OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OndyZDpSPTMwMCcsIGVuOiAnY2F0JywgZGU6ICdLYXR6ZScgfVxuICAgIEBlcSAoIM6pYmJkYnJfMjUwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6d3JkOlI9NDAwJywgZW46ICd3b3JkJywgZGU6ICdXb3J0JyB9XG4gICAgQGVxICggzqliYmRicl8yNTEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDp3cmQ6Uj01MDAnLCBlbjogJ2NhbGwnLCBkZTogJ3J1ZmVuJyB9XG4gICAgQGVxICggzqliYmRicl8yNTIgPSAtPiByb3dzLm5leHQoKS5kb25lICksIHRydWVcbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfc3RyaWN0X21vZGU6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFRydWUsXG4gICAgICBGYWxzZSxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICB7IGxldHMsXG4gICAgICBmcmVlemUsICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9sZXRzZnJlZXpldGhhdF9pbmZyYSgpLnNpbXBsZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGRiID0gbmV3IERicmljICc6bWVtb3J5OidcbiAgICAgICggZGIucHJlcGFyZSBTUUxcInByYWdtYSBzdHJpY3QgICAgICAgPSBvbjtcIiAgICApLnJ1bigpXG4gICAgICBkYi5leGVjdXRlIFNRTFwiY3JlYXRlIHRhYmxlIHQgKCBmIGludGVnZXIgKTtcIlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcImluc2VydCBpbnRvIHQgdmFsdWVzICggMTIzNCApO1wiXG4gICAgICBkYi5leGVjdXRlIFNRTFwiaW5zZXJ0IGludG8gdCB2YWx1ZXMgKCAxMi4zNCApO1wiXG4gICAgICBkYi5leGVjdXRlIFNRTFwiaW5zZXJ0IGludG8gdCB2YWx1ZXMgKCAnd2F0JyApO1wiXG4gICAgICAjIGRlYnVnICfOqWJiZGJyXzI1MycsICggcm93LmYgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgZiBmcm9tIHQ7XCIgKVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBkYiA9IG5ldyBEYnJpYyAnOm1lbW9yeTonXG4gICAgICAoIGRiLnByZXBhcmUgU1FMXCJwcmFnbWEgc3RyaWN0ICAgICAgID0gb247XCIgICAgKS5ydW4oKVxuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMjU0ID0gLT4gZGIuZXhlY3V0ZSBTUUxcImNyZWF0ZSB0YWJsZSB0ICggZiBpbnRlZ2VyLCBqIGpzb24gKSBzdHJpY3Q7XCIgKSwgL3Vua25vd24gZGF0YXR5cGUgZm9yIHRcXC5qL1xuICAgICAgZGIuZXhlY3V0ZSBTUUxcImNyZWF0ZSB0YWJsZSB0ICggZiBpbnRlZ2VyLCBqIGJsb2IgKSBzdHJpY3Q7XCJcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJpbnNlcnQgaW50byB0ICggZiApIHZhbHVlcyAoIDEyMzQgKTtcIlxuICAgICAgQGVxICggzqliYmRicl8yNTUgPSAtPiAoIGRiLmdldF9maXJzdCBTUUxcInNlbGVjdCB0eXBlb2YoIDEyICAgICkgYXMgdHlwZTtcIiApLnR5cGUgKSwgJ2ludGVnZXInXG4gICAgICBAZXEgKCDOqWJiZGJyXzI1NiA9IC0+ICggZGIuZ2V0X2ZpcnN0IFNRTFwic2VsZWN0IHR5cGVvZiggMTIuMzQgKSBhcyB0eXBlO1wiICkudHlwZSApLCAncmVhbCdcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjU3ID0gLT4gKCBkYi5nZXRfZmlyc3QgU1FMXCJzZWxlY3QgdHlwZW9mKCAnd2F0JyApIGFzIHR5cGU7XCIgKS50eXBlICksICd0ZXh0J1xuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMjU4ID0gLT4gZGIuZXhlY3V0ZSBTUUxcImluc2VydCBpbnRvIHQgKCBmICkgdmFsdWVzICggMTIuMzQgKTtcIiApLCAvY2Fubm90IHN0b3JlIFJFQUwgdmFsdWUgaW4gSU5URUdFUiBjb2x1bW4vXG4gICAgICBAdGhyb3dzICggzqliYmRicl8yNTkgPSAtPiBkYi5leGVjdXRlIFNRTFwiaW5zZXJ0IGludG8gdCAoIGYgKSB2YWx1ZXMgKCAnd2F0JyApO1wiICksIC9jYW5ub3Qgc3RvcmUgVEVYVCB2YWx1ZSBpbiBJTlRFR0VSIGNvbHVtbi9cbiAgICAgICMgZGVidWcgJ86pYmJkYnJfMjYwJywgKCByb3cuZiBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCBmIGZyb20gdDtcIiApXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIF9kYnJpY19keW5hbWljX2J1aWxkX3Byb3BlcnRpZXM6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIERicmljX3N0ZCxcbiAgICAgIFRydWUsXG4gICAgICBGYWxzZSxcbiAgICAgIElETixcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBwcmVmaXggPSAnd3JkJ1xuICAgICAgY2xhc3MgRGJfMSBleHRlbmRzIERicmljX3N0ZFxuICAgICAgICBAYnVpbGQ6IFtcbiAgICAgICAgICAtPiBTUUxcIlwiXCJjcmVhdGUgdGFibGUgI3tJRE4gXCIje3ByZWZpeH1fd29yZHNcIn0gKCB0IHRleHQgKTtcIlwiXCJcbiAgICAgICAgICAtPiBTUUxcIlwiXCJpbnNlcnQgaW50byAje0lETiBcIiN7cHJlZml4fV93b3Jkc1wifSAoIHQgKSB2YWx1ZXMgKCAn5rC0ICjjgb/jgZopJyApO1wiXCJcIlxuICAgICAgICAgIC0+IFNRTFwiXCJcImluc2VydCBpbnRvICN7SUROIFwiI3twcmVmaXh9X3dvcmRzXCJ9ICggdCApIHZhbHVlcyAoICfpo5/jgbnniakgKOOBn+OBueOCguOBriknICk7XCJcIlwiXG4gICAgICAgICAgXVxuICAgICAgZGIgPSBuZXcgRGJfMSgpXG4gICAgICByZWxhdGlvbl9uYW1lcyA9IG5ldyBTZXQgKCByb3cubmFtZSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gc3RkX3JlbGF0aW9ucztcIiApXG4gICAgICBAZXEgKCDOqWJiZGJyXzI2MSA9IC0+IHJlbGF0aW9uX25hbWVzLmhhcyAnd3JkX3dvcmRzJyAgICAgICksIHRydWVcbiAgICAgIHJvd3MgPSBkYi53YWxrIFNRTFwiXCJcInNlbGVjdCAqIGZyb20gI3tJRE4gXCIje3ByZWZpeH1fd29yZHNcIn07XCJcIlwiXG4gICAgICBAZXEgKCDOqWJiZGJyXzI2MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlLnQgICAgICAgICAgICAgICAgICksICfmsLQgKOOBv+OBmiknXG4gICAgICBAZXEgKCDOqWJiZGJyXzI2MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlLnQgICAgICAgICAgICAgICAgICksICfpo5/jgbnniakgKOOBn+OBueOCguOBriknXG4gICAgICBAZXEgKCDOqWJiZGJyXzI2NCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcHJlZml4ID0gJ3dyZCdcbiAgICAgIGNsYXNzIERiXzEgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgICAgQGJ1aWxkOiBbXG4gICAgICAgICAgLT4gU1FMXCJcIlwiY3JlYXRlIHRhYmxlICN7SUROIFwiI3twcmVmaXh9X3dvcmRzXCJ9ICggdCB0ZXh0ICk7XCJcIlwiXG4gICAgICAgICAgLT4gU1FMXCJcIlwiaW5zZXJ0IGludG8gI3tJRE4gXCIje3ByZWZpeH1fd29yZHNcIn0gKCB0ICkgdmFsdWVzICggJ+awtCAo44G/44GaKScgKTtcIlwiXCJcbiAgICAgICAgICAtPiBTUUxcIlwiXCJpbnNlcnQgaW50byAje0lETiBcIiN7cHJlZml4fV93b3Jkc1wifSAoIHQgKSB2YWx1ZXMgKCAn6aOf44G554mpICjjgZ/jgbnjgoLjga4pJyApO1wiXCJcIlxuICAgICAgICAgIF1cbiAgICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgICAgc2VsZWN0X3dvcmRzOiAtPiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tICN7SUROIFwiI3twcmVmaXh9X3dvcmRzXCJ9IG9yZGVyIGJ5IHQ7XCJcIlwiXG4gICAgICBkYiA9IG5ldyBEYl8xKClcbiAgICAgIHJlbGF0aW9uX25hbWVzID0gbmV3IFNldCAoIHJvdy5uYW1lIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBzdGRfcmVsYXRpb25zO1wiIClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjY1ID0gLT4gcmVsYXRpb25fbmFtZXMuaGFzICd3cmRfd29yZHMnICAgICAgKSwgdHJ1ZVxuICAgICAgIyBpbmZvICfOqWJiZGJyXzI2NicsIHJvdyBmb3Igcm93IGZyb20gZGIud2FsayBkYi5zdGF0ZW1lbnRzLnNlbGVjdF93b3Jkc1xuICAgICAgcm93cyA9IGRiLndhbGsgZGIuc3RhdGVtZW50cy5zZWxlY3Rfd29yZHNcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjY3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUudCAgICAgICAgICAgICAgICAgKSwgJ+awtCAo44G/44GaKSdcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjY4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUudCAgICAgICAgICAgICAgICAgKSwgJ+mjn+OBueeJqSAo44Gf44G544KC44GuKSdcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjY5ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBfZGJyaWNfaW50ZWdyYXRlX3BsdWdpbjogLT5cbiAgICB7IERicmljLFxuICAgICAgRGJyaWNfc3RkLFxuICAgICAgVHJ1ZSxcbiAgICAgIEZhbHNlLFxuICAgICAgSUROLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIERiXzEgZXh0ZW5kcyBEYnJpY1xuICAgICAgICBleHBvcnRhYmxlX21ldGhvZF8xOiAtPlxuICAgICAgICBAYnVpbGQ6IFtcbiAgICAgICAgICAtPiBTUUxcIlwiXCJjcmVhdGUgdGFibGUgd3JkX3dvcmRzICggdCB0ZXh0ICk7XCJcIlwiXG4gICAgICAgICAgLT4gU1FMXCJcIlwiaW5zZXJ0IGludG8gd3JkX3dvcmRzICggdCApIHZhbHVlcyAoICfmsLQgKOOBv+OBmiknICk7XCJcIlwiXG4gICAgICAgICAgLT4gU1FMXCJcIlwiaW5zZXJ0IGludG8gd3JkX3dvcmRzICggdCApIHZhbHVlcyAoICfpo5/jgbnniakgKOOBn+OBueOCguOBriknICk7XCJcIlwiXG4gICAgICAgICAgXVxuICAgICAgY2xhc3MgRGJfMiBleHRlbmRzIERiXzFcbiAgICAgICAgZXhwb3J0YWJsZV9tZXRob2RfMjogLT5cbiAgICAgICMgZGIgPSBuZXcgRGJfMSgpXG4gICAgICB7IGdldF9wcm90b3R5cGVfY2hhaW4sIH0gPSAoIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvdW5zdGFibGUtb2JqZWN0LXRvb2xzLWJyaWNzJyApLnJlcXVpcmVfZ2V0X3Byb3RvdHlwZV9jaGFpbigpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGdldF9hbGxfZWZmZWN0aXZlX2Rlc2NyaXB0b3JzX2luX3Byb3RvdHlwZV9jaGFpbiA9ICggeCApIC0+XG4gICAgICAgIFIgPSBPYmplY3QuY3JlYXRlIG51bGxcbiAgICAgICAgcmV0dXJuIFIgdW5sZXNzIHg/XG4gICAgICAgIGZvciBwcm90b3R5cGUgaW4gZ2V0X3Byb3RvdHlwZV9jaGFpbiB4XG4gICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHByb3RvdHlwZVxuICAgICAgICAgICMgaWYgKCBPYmplY3QuaGFzT3duIHByb3RvdHlwZSwgJ3N0ZF93aXRoX3ZhcmlhYmxlcycgKSBvciAoIE9iamVjdC5oYXNPd24gcHJvdG90eXBlLCAnc3RhdGVtZW50cycgKSBvciAoIE9iamVjdC5oYXNPd24gcHJvdG90eXBlLCAnZXhwb3J0YWJsZV9tZXRob2RfMScgKVxuICAgICAgICAgIGlmICggT2JqZWN0Lmhhc093biBwcm90b3R5cGUsICdleHBvcnRhYmxlX21ldGhvZF8xJyApXG4gICAgICAgICAgICAjIGhlbHAgJ86pYmJkYnJfMjcwJywgcHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUsIHByb3RvdHlwZS5zdGRfd2l0aF92YXJpYWJsZXNcbiAgICAgICAgICAgICMgaGVscCAnzqliYmRicl8yNzEnLCBwcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSwgcHJvdG90eXBlLnN0YXRlbWVudHNcbiAgICAgICAgICAgIGhlbHAgJ86pYmJkYnJfMjcyJywgcHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUsIHByb3RvdHlwZS5leHBvcnRhYmxlX21ldGhvZF8xXG4gICAgICAgICAgICAjIGluZm8gJ86pYmJkYnJfMjczJywgcHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUsIGtleXNcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAjIHdoaXNwZXIgJ86pYmJkYnJfMjc0JywgcHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUsIGtleXNcbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGVidWcoKVxuICAgICAgZm9yIHByb3RvdHlwZSBpbiBnZXRfcHJvdG90eXBlX2NoYWluIERiXzFcbiAgICAgICAgYnJlYWsgaWYgcHJvdG90eXBlIGluIFsgRGJyaWMsIERicmljOjosIF1cbiAgICAgICAgZGVidWcgJ86pYmJkYnJfMjc1JywgcHJvdG90eXBlXG4gICAgICAgIGRlYnVnICfOqWJiZGJyXzI3NicsICcgJywgcHJvdG90eXBlLmV4cG9ydGFibGVfbWV0aG9kXzFcbiAgICAgICAgZGVidWcgJ86pYmJkYnJfMjc3JywgJyAnLCBwcm90b3R5cGUuZXhwb3J0YWJsZV9tZXRob2RfMlxuICAgICAgICBkZWJ1ZyAnzqliYmRicl8yNzgnLCAnICcsIHByb3RvdHlwZS5idWlsZD8ubGVuZ3RoID8gJydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGVidWcoKVxuICAgICAgZm9yIHByb3RvdHlwZSBpbiBnZXRfcHJvdG90eXBlX2NoYWluIERiXzE6OlxuICAgICAgICBicmVhayBpZiBwcm90b3R5cGUgaW4gWyBEYnJpYywgRGJyaWM6OiwgXVxuICAgICAgICBkZWJ1ZyAnzqliYmRicl8yNzknLCBwcm90b3R5cGVcbiAgICAgICAgZGVidWcgJ86pYmJkYnJfMjgwJywgJyAnLCBwcm90b3R5cGUuZXhwb3J0YWJsZV9tZXRob2RfMVxuICAgICAgICBkZWJ1ZyAnzqliYmRicl8yODEnLCAnICcsIHByb3RvdHlwZS5leHBvcnRhYmxlX21ldGhvZF8yXG4gICAgICAgIGRlYnVnICfOqWJiZGJyXzI4MicsICcgJywgcHJvdG90eXBlLmJ1aWxkPy5sZW5ndGggPyAnJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkZWJ1ZyAnzqliYmRicl8yODMnLCAnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nXG4gICAgICBmb3IgcHJvdG90eXBlIGluIGdldF9wcm90b3R5cGVfY2hhaW4gRGJfMlxuICAgICAgICBicmVhayBpZiBwcm90b3R5cGUgaW4gWyBEYnJpYywgRGJyaWM6OiwgXVxuICAgICAgICBkZWJ1ZyAnzqliYmRicl8yODQnLCBwcm90b3R5cGVcbiAgICAgICAgZGVidWcgJ86pYmJkYnJfMjg1JywgJyAnLCBwcm90b3R5cGUuZXhwb3J0YWJsZV9tZXRob2RfMVxuICAgICAgICBkZWJ1ZyAnzqliYmRicl8yODYnLCAnICcsIHByb3RvdHlwZS5leHBvcnRhYmxlX21ldGhvZF8yXG4gICAgICAgIGRlYnVnICfOqWJiZGJyXzI4NycsICcgJywgcHJvdG90eXBlLmJ1aWxkPy5sZW5ndGggPyAnJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkZWJ1ZygpXG4gICAgICBmb3IgcHJvdG90eXBlIGluIGdldF9wcm90b3R5cGVfY2hhaW4gRGJfMjo6XG4gICAgICAgIGJyZWFrIGlmIHByb3RvdHlwZSBpbiBbIERicmljLCBEYnJpYzo6LCBdXG4gICAgICAgIGRlYnVnICfOqWJiZGJyXzI4OCcsIHByb3RvdHlwZVxuICAgICAgICBkZWJ1ZyAnzqliYmRicl8yODknLCAnICcsIHByb3RvdHlwZS5leHBvcnRhYmxlX21ldGhvZF8xXG4gICAgICAgIGRlYnVnICfOqWJiZGJyXzI5MCcsICcgJywgcHJvdG90eXBlLmV4cG9ydGFibGVfbWV0aG9kXzJcbiAgICAgICAgZGVidWcgJ86pYmJkYnJfMjkxJywgJyAnLCBwcm90b3R5cGUuYnVpbGQ/Lmxlbmd0aCA/ICcnXG4gICAgICAjIGRlYnVnICfOqWJiZGJyXzI5MidcbiAgICAgICMgZGVidWcgJ86pYmJkYnJfMjkzJywgcHJvdG90eXBlIGZvciBwcm90b3R5cGUgaW4gZ2V0X3Byb3RvdHlwZV9jaGFpbiBkYlxuICAgICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgdXJnZSByZXZlcnNlICfOqWJiZGJyXzI5NCc7IGdldF9hbGxfZWZmZWN0aXZlX2Rlc2NyaXB0b3JzX2luX3Byb3RvdHlwZV9jaGFpbiBEYnJpY19zdGRcbiAgICAgICMgIyB1cmdlIHJldmVyc2UgJ86pYmJkYnJfMjk1JzsgZ2V0X2FsbF9lZmZlY3RpdmVfZGVzY3JpcHRvcnNfaW5fcHJvdG90eXBlX2NoYWluIERicmljX3N0ZDo6XG4gICAgICAjIHVyZ2UgcmV2ZXJzZSAnzqliYmRicl8yOTYnOyBnZXRfYWxsX2VmZmVjdGl2ZV9kZXNjcmlwdG9yc19pbl9wcm90b3R5cGVfY2hhaW4gbmV3IERicmljX3N0ZFxuICAgICAgIyB1cmdlICggcmV2ZXJzZSAnzqliYmRicl8yOTcnICksIGdvbGQgXCJidWlsZDogICAgICAgICAgICAgICAgXCIsIERicmljX3N0ZC5idWlsZFxuICAgICAgIyB1cmdlICggcmV2ZXJzZSAnzqliYmRicl8yOTgnICksIGdvbGQgXCJzdGF0ZW1lbnRzOiAgICAgICAgICAgXCIsIERicmljX3N0ZC5zdGF0ZW1lbnRzXG4gICAgICAjIHVyZ2UgKCByZXZlcnNlICfOqWJiZGJyXzI5OScgKSwgZ29sZCBcImZ1bmN0aW9uczogICAgICAgICAgICBcIiwgRGJyaWNfc3RkLmZ1bmN0aW9uc1xuICAgICAgIyB1cmdlICggcmV2ZXJzZSAnzqliYmRicl8zMDAnICksIGdvbGQgXCJhZ2dyZWdhdGVfZnVuY3Rpb25zOiAgXCIsIERicmljX3N0ZC5hZ2dyZWdhdGVfZnVuY3Rpb25zXG4gICAgICAjIHVyZ2UgKCByZXZlcnNlICfOqWJiZGJyXzMwMScgKSwgZ29sZCBcIndpbmRvd19mdW5jdGlvbnM6ICAgICBcIiwgRGJyaWNfc3RkLndpbmRvd19mdW5jdGlvbnNcbiAgICAgICMgdXJnZSAoIHJldmVyc2UgJ86pYmJkYnJfMzAyJyApLCBnb2xkIFwidGFibGVfZnVuY3Rpb25zOiAgICAgIFwiLCBEYnJpY19zdGQudGFibGVfZnVuY3Rpb25zXG4gICAgICAjIHVyZ2UgKCByZXZlcnNlICfOqWJiZGJyXzMwMycgKSwgZ29sZCBcInZpcnR1YWxfdGFibGVzOiAgICAgICBcIiwgRGJyaWNfc3RkLnZpcnR1YWxfdGFibGVzXG4gICAgICAjIHVyZ2UgKCByZXZlcnNlICfOqWJiZGJyXzMwNCcgKSwgZ29sZCBcImV4cG9ydHM6ICAgICAgICAgICAgICBcIiwgRGJyaWNfc3RkLmV4cG9ydHNcbiAgICAgICMgIyBkYi5pbnRlZ3JhdGVfcGx1Z2luIERicmljX3N0ZFxuICAgICAgIyAjIHJlbGF0aW9uX25hbWVzID0gbmV3IFNldCAoIHJvdy5uYW1lIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBzdGRfcmVsYXRpb25zO1wiIClcbiAgICAgICMgIyBkZWJ1ZyAnzqliYmRicl8zMDUnLCByZWxhdGlvbl9uYW1lc1xuICAgICAgIyAjIEBlcSAoIM6pYmJkYnJfMzA2ID0gLT4gcmVsYXRpb25fbmFtZXMuaGFzICd3cmRfd29yZHMnICAgICAgKSwgdHJ1ZVxuICAgICAgIyAjIHJvd3MgPSBkYi53YWxrIFNRTFwiXCJcInNlbGVjdCAqIGZyb20gd3JkX3dvcmRzO1wiXCJcIlxuICAgICAgIyAjIEBlcSAoIM6pYmJkYnJfMzA3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUudCAgICAgICAgICAgICAgICAgKSwgJ+awtCAo44G/44GaKSdcbiAgICAgICMgIyBAZXEgKCDOqWJiZGJyXzMwOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlLnQgICAgICAgICAgICAgICAgICksICfpo5/jgbnniakgKOOBn+OBueOCguOBriknXG4gICAgICAjICMgQGVxICggzqliYmRicl8zMDkgPSAtPiByb3dzLm5leHQoKS5kb25lICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIF9kYnJpY19wbHVnaW5zX2FjcXVpc2l0aW9uOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBEYnJpY19zdGQsXG4gICAgICBUcnVlLFxuICAgICAgRmFsc2UsXG4gICAgICBJRE4sXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgIH0gPSAoIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvdW5zdGFibGUtcnByLXR5cGVfb2YtYnJpY3MnICkucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGdldF9hbGxfaW5fcHJvdG90eXBlX2NoYWluLFxuICAgICAgZ2V0X3Byb3RvdHlwZV9jaGFpbiwgICAgICB9ID0gKCByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL3Vuc3RhYmxlLW9iamVjdC10b29scy1icmljcycgKS5yZXF1aXJlX2dldF9wcm90b3R5cGVfY2hhaW4oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgeyBjcmVhdGVNZXRob2RDb3ZlcmFnZSwgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2luc3RydW1lbnRhdGlvbi1jb3ZlcmFnZS1vYnNlcnZlcidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIG5icl9udW1iZXJfcGx1Z2luID1cbiAgICAgIGV4cG9ydHM6XG4gICAgICAgIHByZWZpeDogJ25icicgIyMjIE5PVEUgaW5mb3JtYXRpdmUsIG5vdCBlbmZvcmNlZCAjIyNcbiAgICAgICAgYnVpbGQ6IFtcbiAgICAgICAgICBTUUxcImNyZWF0ZSB0YWJsZSBuYnJfbnVtYmVycyAoIG51bWJlciBpbnRlZ2VyICk7XCJcbiAgICAgICAgICBdXG4gICAgICAgIHN0YXRlbWVudHM6XG4gICAgICAgICAgbmJyX2luc2VydF9udW1iZXI6ICAgICAgICAgIFNRTFwiaW5zZXJ0IGludG8gbmJyX251bWJlcnMgdmFsdWUgKCAkbnVtYmVyICk7XCJcbiAgICAgICAgICBuYnJfc2VsZWN0X251bWJlcnM6ICAgICAgICAgU1FMXCJzZWxlY3QgKiBmcm9tIG5icl9udW1iZXJzIG9yZGVyIGJ5IG51bWJlcjtcIlxuICAgICAgICAgIG5icl9zZWxlY3Rfc3F1YXJlX251bWJlcnM6ICBTUUxcInNlbGVjdCBuYnJfc3F1YXJlKCBudW1iZXIgKSBmcm9tIG5icl9udW1iZXJzIG9yZGVyIGJ5IG51bWJlcjtcIlxuICAgICAgICBmdW5jdGlvbnM6XG4gICAgICAgICAgbmJyX3NxdWFyZTpcbiAgICAgICAgICAgIHZhbHVlOiAoIG51bWJlciApIC0+IG51bWJlciAqKiAyXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBjbGFzcyBEYl8xIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICAgIEBwbHVnaW5zOiBbXG4gICAgICAgICAgJ3Byb3RvdHlwZXMnXG4gICAgICAgICAgbmJyX251bWJlcl9wbHVnaW5cbiAgICAgICAgICAnbWUnXG4gICAgICAgICAgIyBEYnJpY19zdGRcbiAgICAgICAgICBdXG4gICAgICAgIEBleHBvcnRzOiB7fVxuICAgICAgICBAYnVpbGQ6IFtcbiAgICAgICAgICBTUUxcImNyZWF0ZSB0YWJsZSB4ICggaWQgaW50ZWdlciApO1wiXG4gICAgICAgICAgXVxuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBpZiByZWNvcmRfY292ZXJhZ2UgPSB0cnVlXG4gICAgICAgIHRyYWNrZXIgPSBjcmVhdGVNZXRob2RDb3ZlcmFnZSgpXG4gICAgICAgIGRiICAgICAgPSB0cmFja2VyLndyYXBPYmplY3QgbmV3IERiXzEoKSwgXCJFeGFtcGxlXCJcbiAgICAgIGVsc2VcbiAgICAgICAgZGIgPSBuZXcgRGJfMSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZvciB7IHR5cGUsIHZhbHVlLCB9IGluIGRiLl9nZXRfYWNxdWlzaXRpb25fY2hhaW4oKVxuICAgICAgICBzd2l0Y2ggdHlwZVxuICAgICAgICAgIHdoZW4gJ3BsdWdpbidcbiAgICAgICAgICAgIGluZm8gJ86pYmJkYnJfMzEwJywgdHlwZSwgT2JqZWN0LmtleXMgdmFsdWUuZXhwb3J0c1xuICAgICAgICAgIHdoZW4gJ3Byb3RvdHlwZSdcbiAgICAgICAgICAgIHN3aXRjaCB0cnVlXG4gICAgICAgICAgICAgIHdoZW4gdmFsdWUgaXMgZGIuY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICBoZWxwICfOqWJiZGJyXzMxMScsIHR5cGUsIHJwciB2YWx1ZS5uYW1lXG4gICAgICAgICAgICAgICMgd2hlbiB2YWx1ZSBpbiBiYXNlX3Byb3RvdHlwZXNcbiAgICAgICAgICAgICAgIyAgIHdoaXNwZXIgJ86pYmJkYnJfMzEyJywgdHlwZSwgXCIob2JqZWN0KVwiXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB1cmdlICfOqWJiZGJyXzMxMycsIHR5cGUsIHJwciB2YWx1ZS5uYW1lLCB2YWx1ZVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pYmJkYnJfMzE0IGludGVybmFsIGVycm9yOiB1bmtub3duIHR5cGUgI3tycHIgdHlwZX1cIlxuICAgICAgICAjIGRlYnVnICfOqWJiZGJyXzMxNScsIHsgdHlwZSwgdmFsdWUsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaWYgcmVjb3JkX2NvdmVyYWdlXG4gICAgICAgIHsgdXNlZCwgdW51c2VkLCB9ID0gdHJhY2tlci5yZXBvcnQoKS5FeGFtcGxlXG4gICAgICAgIGhlbHAgJ86pYmJkYnJfMzE2JywgXCJ1c2VkOiAgIFwiLCBuYW1lIGZvciBuYW1lIGluIHVzZWRcbiAgICAgICAgd2FybiAnzqliYmRicl8zMTcnLCBcInVudXNlZDogXCIsIG5hbWUgZm9yIG5hbWUgaW4gdW51c2VkXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb19pbmZpbml0ZV9wcm94eSgpXG4gICMgZGVtb19jb2xvcmZ1bF9wcm94eSgpXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogdHJ1ZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2ludGVncmF0ZV9wbHVnaW46IHRlc3RzLl9kYnJpY19pbnRlZ3JhdGVfcGx1Z2luLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGJyaWNfcGx1Z2luc19hY3F1aXNpdGlvbjogdGVzdHMuX2RicmljX3BsdWdpbnNfYWNxdWlzaXRpb24sIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2VzcWw6IHRlc3RzLmRicmljX2VzcWwsIH1cblxuXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICA7bnVsbCJdfQ==
