(async function() {
  'use strict';
  var Dbric, Dbric_std, FS, False, GTNG, GUY, IDN, LIT, PATH, SFMODULES, SQL, Test, True, VEC, alert, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, internals, log, nfa, plain, praise, red, remove, reverse, rpr, tests, unquote_name, urge, warn, whisper, white;

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
  ({Dbric, Dbric_std, IDN, LIT, SQL, VEC, internals, True, False, unquote_name} = require('../../../apps/bricabrac-sfmodules/lib/dbric'));

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
      var Ωbbdbr__10, Ωbbdbr__11, Ωbbdbr__12, Ωbbdbr__13, Ωbbdbr__14, Ωbbdbr__15, Ωbbdbr__16, Ωbbdbr__17, Ωbbdbr__18, Ωbbdbr__19, Ωbbdbr___3, Ωbbdbr___4, Ωbbdbr___5, Ωbbdbr___6, Ωbbdbr___7, Ωbbdbr___8, Ωbbdbr___9;
      //.......................................................................................................
      this.eq((Ωbbdbr___3 = function() {
        return internals.type_of(unquote_name);
      }), 'function');
      this.eq((Ωbbdbr___4 = function() {
        return unquote_name('x');
      }), 'x');
      this.eq((Ωbbdbr___5 = function() {
        return unquote_name('"x"');
      }), 'x');
      this.eq((Ωbbdbr___6 = function() {
        return unquote_name('abc');
      }), 'abc');
      this.eq((Ωbbdbr___7 = function() {
        return unquote_name('"abc"');
      }), 'abc');
      this.eq((Ωbbdbr___8 = function() {
        return unquote_name('"ab""c"');
      }), 'ab"c');
      this.throws((Ωbbdbr___9 = function() {
        return unquote_name('');
      }), /expected a non-empty text, got an empty text/);
      this.throws((Ωbbdbr__10 = function() {
        return unquote_name('"');
      }), /expected a quoted non-empty text, got a quote/);
      this.eq((Ωbbdbr__11 = function() {
        return unquote_name('""');
      }), '');
      this./* NOTE SQLite does accept a quoted empty string as name */throws((Ωbbdbr__12 = function() {
        return unquote_name(false);
      }), /expected a text, got a boolean/);
      //.......................................................................................................
      this.eq((Ωbbdbr__13 = function() {
        return IDN('abc');
      }), '"abc"');
      this.eq((Ωbbdbr__14 = function() {
        return IDN('A"bc"');
      }), '"A""bc"""');
      this.eq((Ωbbdbr__15 = function() {
        return LIT('abc');
      }), "'abc'");
      this.eq((Ωbbdbr__16 = function() {
        return LIT("A'bc'");
      }), "'A''bc'''");
      this.throws((Ωbbdbr__17 = function() {
        return VEC('abc');
      }), /expected a list/);
      this.eq((Ωbbdbr__18 = function() {
        return VEC(['abc']);
      }), `( 'abc' )`);
      this.eq((Ωbbdbr__19 = function() {
        return VEC(['abc', 1, true, false]);
      }), `( 'abc', 1, 1, 0 )`);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    dbric_std: function() {
      var temp;
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
        (() => {          // help 'Ωbbdbr__20', { db_path, }
          //.....................................................................................................
          var db, Ωbbdbr__21;
          db = new Dbric(db_path);
          this.eq((Ωbbdbr__21 = function() {
            return db.is_ready;
          }), true);
          return null;
        })();
        return (() => {          //.....................................................................................................
          var db, Ωbbdbr__22, Ωbbdbr__23, Ωbbdbr__24, Ωbbdbr__25;
          db = new Dbric(db_path);
          this.eq((Ωbbdbr__22 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__23 = function() {
            return db._get_db_objects();
          }), {});
          this.eq((Ωbbdbr__24 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__25 = function() {
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
        (() => {          // help 'Ωbbdbr__26', { db_path, }
          //.....................................................................................................
          var db, Ωbbdbr__27;
          db = new Dbric(db_path);
          this.eq((Ωbbdbr__27 = function() {
            return db.is_ready;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__28;
          db = new Dbric_std(db_path);
          this.eq((Ωbbdbr__28 = function() {
            return db.is_ready;
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          var _, db, o, objects, Ωbbdbr__29, Ωbbdbr__30, Ωbbdbr__31, Ωbbdbr__32, Ωbbdbr__33, Ωbbdbr__34, Ωbbdbr__35;
          db = new Dbric_std(db_path);
          this.eq((Ωbbdbr__29 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__30 = function() {
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
          this.eq((Ωbbdbr__31 = function() {
            return objects.has('view:std_tables');
          }), true);
          this.eq((Ωbbdbr__32 = function() {
            return objects.has('view:std_views');
          }), true);
          this.eq((Ωbbdbr__33 = function() {
            return objects.has('view:std_relations');
          }), true);
          this.eq((Ωbbdbr__34 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__35 = function() {
            return db.build();
          }), 0);
          return null;
        })();
        (() => {          //.....................................................................................................
          var _, db, o, objects, Ωbbdbr__36, Ωbbdbr__37, Ωbbdbr__38, Ωbbdbr__39, Ωbbdbr__40, Ωbbdbr__41, Ωbbdbr__42;
          db = new Dbric_std(db_path);
          this.eq((Ωbbdbr__36 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__37 = function() {
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
          this.eq((Ωbbdbr__38 = function() {
            return objects.has('view:std_tables');
          }), true);
          this.eq((Ωbbdbr__39 = function() {
            return objects.has('view:std_views');
          }), true);
          this.eq((Ωbbdbr__40 = function() {
            return objects.has('view:std_relations');
          }), true);
          this.eq((Ωbbdbr__41 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__42 = function() {
            return db.build();
          }), 0);
          return null;
        })();
        (() => {          //.....................................................................................................
          var _, db, o, objects, Ωbbdbr__43, Ωbbdbr__44, Ωbbdbr__45;
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
          this.eq((Ωbbdbr__43 = function() {
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
          this.eq((Ωbbdbr__44 = function() {
            return objects.has('view:std_tables');
          }), false);
          this.eq((Ωbbdbr__45 = function() {
            return db.is_ready;
          }), false);
          return null;
        })();
        (() => {          //.....................................................................................................
          var _, db, o, objects, Ωbbdbr__46, Ωbbdbr__47, Ωbbdbr__48, Ωbbdbr__49, Ωbbdbr__50, Ωbbdbr__51, Ωbbdbr__52;
          db = new Dbric_std(db_path);
          this.eq((Ωbbdbr__46 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__47 = function() {
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
          this.eq((Ωbbdbr__48 = function() {
            return objects.has('view:std_tables');
          }), true);
          this.eq((Ωbbdbr__49 = function() {
            return objects.has('view:std_views');
          }), true);
          this.eq((Ωbbdbr__50 = function() {
            return objects.has('view:std_relations');
          }), true);
          this.eq((Ωbbdbr__51 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__52 = function() {
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
      var temp;
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
        var Db, db, Ωbbdbr__53, Ωbbdbr__54, Ωbbdbr__55, Ωbbdbr__56;
        Db = class Db extends Dbric_std {};
        db = new Db(':memory:');
        this.eq((Ωbbdbr__53 = function() {
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
        this.eq((Ωbbdbr__54 = function() {
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
        this.eq((Ωbbdbr__55 = function() {
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
        this.eq((Ωbbdbr__56 = function() {
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
      var A, B, Bsql3, C_duplicate_function, C_duplicate_statement, C_duplicate_table, get_function_names, get_table_names, get_trigger_names, get_view_names, statement_class;
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
        // debug 'Ωbbdbr__57', b
        // debug 'Ωbbdbr__58', 'functions: ', get_function_names b
        // debug 'Ωbbdbr__59', 'functions: ', ( get_function_names b ).has 'fn_a'
        // debug 'Ωbbdbr__60', 'functions: ', ( get_function_names b ).has 'fn_b'
        // debug 'Ωbbdbr__61', 'functions: ', ( get_function_names b ).has 'regexp'
        // debug 'Ωbbdbr__62', 'tables:    ', get_table_names b
        // debug 'Ωbbdbr__63', 'views:     ', get_view_names b
        // debug 'Ωbbdbr__64', 'triggers:  ', get_trigger_names b
        // debug 'Ωbbdbr__65', 'statements:', ( k for k of b.statements )
        // return null
        //.......................................................................................................
        var dba, function_names, table_names, trigger_names, view_names, Ωbbdbr__66, Ωbbdbr__67, Ωbbdbr__68, Ωbbdbr__69, Ωbbdbr__70, Ωbbdbr__71, Ωbbdbr__72, Ωbbdbr__73, Ωbbdbr__74, Ωbbdbr__75, Ωbbdbr__76, Ωbbdbr__77, Ωbbdbr__78, Ωbbdbr__79, Ωbbdbr__80, Ωbbdbr__81, Ωbbdbr__82;
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
        this.eq((Ωbbdbr__66 = function() {
          return dba.statements.std_get_schema instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__67 = function() {
          return dba.statements.std_get_tables instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__68 = function() {
          return dba.statements.std_get_views instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__69 = function() {
          return dba.statements.std_get_relations instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__70 = function() {
          return dba.statements.select_a instanceof statement_class;
        }), false);
        this.eq((Ωbbdbr__71 = function() {
          return dba.statements.select_b instanceof statement_class;
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__72 = function() {
          return function_names.has('zzz_test');
        }), true);
        this.eq((Ωbbdbr__73 = function() {
          return function_names.has('regexp');
        }), true);
        this.eq((Ωbbdbr__74 = function() {
          return function_names.has('fn_a');
        }), false);
        this.eq((Ωbbdbr__75 = function() {
          return function_names.has('fn_b');
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__76 = function() {
          return table_names.has('table_a');
        }), false);
        this.eq((Ωbbdbr__77 = function() {
          return table_names.has('table_b');
        }), false);
        this.eq((Ωbbdbr__78 = function() {
          return view_names.has('std_tables');
        }), true);
        this.eq((Ωbbdbr__79 = function() {
          return view_names.has('std_views');
        }), true);
        this.eq((Ωbbdbr__80 = function() {
          return view_names.has('std_relations');
        }), true);
        this.eq((Ωbbdbr__81 = function() {
          return view_names.has('view_a');
        }), false);
        this.eq((Ωbbdbr__82 = function() {
          return view_names.has('view_b');
        }), false);
        return null;
      })();
      (() => {        //.......................................................................................................
        var dba, function_names, table_names, trigger_names, view_names, Ωbbdbr__83, Ωbbdbr__84, Ωbbdbr__85, Ωbbdbr__86, Ωbbdbr__87, Ωbbdbr__88, Ωbbdbr__89, Ωbbdbr__90, Ωbbdbr__91, Ωbbdbr__92, Ωbbdbr__93, Ωbbdbr__94, Ωbbdbr__95, Ωbbdbr__96, Ωbbdbr__97, Ωbbdbr__98, Ωbbdbr__99;
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
        this.eq((Ωbbdbr__83 = function() {
          return dba.statements.std_get_schema instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__84 = function() {
          return dba.statements.std_get_tables instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__85 = function() {
          return dba.statements.std_get_views instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__86 = function() {
          return dba.statements.std_get_relations instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__87 = function() {
          return dba.statements.select_a instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__88 = function() {
          return dba.statements.select_b instanceof statement_class;
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__89 = function() {
          return function_names.has('zzz_test');
        }), true);
        this.eq((Ωbbdbr__90 = function() {
          return function_names.has('regexp');
        }), true);
        this.eq((Ωbbdbr__91 = function() {
          return function_names.has('fn_a');
        }), true);
        this.eq((Ωbbdbr__92 = function() {
          return function_names.has('fn_b');
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__93 = function() {
          return table_names.has('table_a');
        }), true);
        this.eq((Ωbbdbr__94 = function() {
          return table_names.has('table_b');
        }), false);
        this.eq((Ωbbdbr__95 = function() {
          return view_names.has('std_tables');
        }), true);
        this.eq((Ωbbdbr__96 = function() {
          return view_names.has('std_views');
        }), true);
        this.eq((Ωbbdbr__97 = function() {
          return view_names.has('std_relations');
        }), true);
        this.eq((Ωbbdbr__98 = function() {
          return view_names.has('view_a');
        }), true);
        this.eq((Ωbbdbr__99 = function() {
          return view_names.has('view_b');
        }), false);
        return null;
      })();
      (() => {        //.......................................................................................................
        var dba, function_names, table_names, trigger_names, view_names, Ωbbdbr_100, Ωbbdbr_101, Ωbbdbr_102, Ωbbdbr_103, Ωbbdbr_104, Ωbbdbr_105, Ωbbdbr_106, Ωbbdbr_107, Ωbbdbr_108, Ωbbdbr_109, Ωbbdbr_110, Ωbbdbr_111, Ωbbdbr_112, Ωbbdbr_113, Ωbbdbr_114, Ωbbdbr_115, Ωbbdbr_116;
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
        this.eq((Ωbbdbr_100 = function() {
          return dba.statements.std_get_schema instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr_101 = function() {
          return dba.statements.std_get_tables instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr_102 = function() {
          return dba.statements.std_get_views instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr_103 = function() {
          return dba.statements.std_get_relations instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr_104 = function() {
          return dba.statements.select_a instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr_105 = function() {
          return dba.statements.select_b instanceof statement_class;
        }), true);
        //.....................................................................................................
        this.eq((Ωbbdbr_106 = function() {
          return function_names.has('zzz_test');
        }), true);
        this.eq((Ωbbdbr_107 = function() {
          return function_names.has('regexp');
        }), true);
        this.eq((Ωbbdbr_108 = function() {
          return function_names.has('fn_a');
        }), true);
        this.eq((Ωbbdbr_109 = function() {
          return function_names.has('fn_b');
        }), true);
        //.....................................................................................................
        this.eq((Ωbbdbr_110 = function() {
          return table_names.has('table_a');
        }), true);
        this.eq((Ωbbdbr_111 = function() {
          return table_names.has('table_b');
        }), true);
        this.eq((Ωbbdbr_112 = function() {
          return view_names.has('std_tables');
        }), true);
        this.eq((Ωbbdbr_113 = function() {
          return view_names.has('std_views');
        }), true);
        this.eq((Ωbbdbr_114 = function() {
          return view_names.has('std_relations');
        }), true);
        this.eq((Ωbbdbr_115 = function() {
          return view_names.has('view_a');
        }), true);
        this.eq((Ωbbdbr_116 = function() {
          return view_names.has('view_b');
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var Ωbbdbr_117, Ωbbdbr_118, Ωbbdbr_119;
        this.throws((Ωbbdbr_117 = function() {
          return new C_duplicate_function();
        }), /a UDF or built-in function named 'fn_b' has already been declared/);
        this.throws((Ωbbdbr_118 = function() {
          return new C_duplicate_statement();
        }), /statement 'select_b' is already declared/);
        return this.throws((Ωbbdbr_119 = function() {
          return new C_duplicate_table();
        }), /table table_b already exists/);
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    disallow_overwriting_properties_with_functions: function() {
      var Dbric_A, Dbric_B, Dbric_C, Dbric_Z;
      (() => {        // debug 'Ωbbdbr_120', new Dbric '/dev/shm/bricabrac.sqlite'
        var db, db_proto;
        db = new Dbric(':memory:');
        db_proto = Object.getPrototypeOf(db);
        // debug 'Ωbbdbr_121', Object.getOwnPropertyDescriptor db_proto, 'is_ready'
        // debug 'Ωbbdbr_122', Object.getOwnPropertyDescriptor db_proto, '_get_is_ready'
        return null;
      })();
      //-------------------------------------------------------------------------------------------------------
      /* use derived classes to assert that property descriptors are searched for in the prototype chain: */
      Dbric_A = class Dbric_A extends Dbric {};
      Dbric_B = class Dbric_B extends Dbric_A {};
      Dbric_C = class Dbric_C extends Dbric_B {};
      Dbric_Z = class Dbric_Z extends Dbric_C {};
      (() => {        //-------------------------------------------------------------------------------------------------------
        var Dbric_nonconform, Ωbbdbr_123;
        Dbric_nonconform = class Dbric_nonconform extends Dbric_Z {
          is_ready() {}

        };
        this.throws((Ωbbdbr_123 = function() {
          return new Dbric_nonconform();
        }), /not allowed to override property 'is_ready'; use '_get_is_ready instead/);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    sample_db: function() {
      var Dbric_store;
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
        var cast_row, db_path, rows, store, Ωbbdbr_124, Ωbbdbr_125, Ωbbdbr_126, Ωbbdbr_127, Ωbbdbr_128, Ωbbdbr_129;
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
        this.eq((Ωbbdbr_124 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'false',
          facet_value: false,
          _v: 'false'
        });
        this.eq((Ωbbdbr_125 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'one',
          facet_value: 1,
          _v: 1
        });
        this.eq((Ωbbdbr_126 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'three',
          facet_value: 'iii',
          _v: '"iii"'
        });
        this.eq((Ωbbdbr_127 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'true',
          facet_value: true,
          _v: 'true'
        });
        this.eq((Ωbbdbr_128 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'two',
          facet_value: 2,
          _v: 2
        });
        return this.eq((Ωbbdbr_129 = function() {
          return rows.next().done;
        }), true);
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    sample_db_with_bsql: function() {
      var Dbric_store;
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
        var cast_row, db_path, rows, store, Ωbbdbr_130, Ωbbdbr_131, Ωbbdbr_132, Ωbbdbr_133, Ωbbdbr_134, Ωbbdbr_135;
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
        this.eq((Ωbbdbr_130 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'false',
          facet_value: false,
          _v: 'false'
        });
        this.eq((Ωbbdbr_131 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'one',
          facet_value: 1,
          _v: 1
        });
        this.eq((Ωbbdbr_132 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'three',
          facet_value: 'iii',
          _v: '"iii"'
        });
        this.eq((Ωbbdbr_133 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'true',
          facet_value: true,
          _v: 'true'
        });
        this.eq((Ωbbdbr_134 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'two',
          facet_value: 2,
          _v: 2
        });
        return this.eq((Ωbbdbr_135 = function() {
          return cast_row(rows.next().value);
        }), void 0);
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    udf_functions_with_nsql: function() {
      var Dbric_squares;
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
        var db_path, i, n, rows, squares, Ωbbdbr_137, Ωbbdbr_138, Ωbbdbr_139, Ωbbdbr_140, Ωbbdbr_141, Ωbbdbr_142, Ωbbdbr_143, Ωbbdbr_144, Ωbbdbr_145, Ωbbdbr_146, Ωbbdbr_147;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = new Dbric_squares(db_path);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_136', row for row from squares.statements.select_from_squares.iterate()
        rows = squares.statements.select_from_squares.iterate();
        this.eq((Ωbbdbr_137 = function() {
          return rows.next().value;
        }), {
          n: 0,
          square: 0
        });
        this.eq((Ωbbdbr_138 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1
        });
        this.eq((Ωbbdbr_139 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4
        });
        this.eq((Ωbbdbr_140 = function() {
          return rows.next().value;
        }), {
          n: 3,
          square: 9
        });
        this.eq((Ωbbdbr_141 = function() {
          return rows.next().value;
        }), {
          n: 4,
          square: 16
        });
        this.eq((Ωbbdbr_142 = function() {
          return rows.next().value;
        }), {
          n: 5,
          square: 25
        });
        this.eq((Ωbbdbr_143 = function() {
          return rows.next().value;
        }), {
          n: 6,
          square: 36
        });
        this.eq((Ωbbdbr_144 = function() {
          return rows.next().value;
        }), {
          n: 7,
          square: 49
        });
        this.eq((Ωbbdbr_145 = function() {
          return rows.next().value;
        }), {
          n: 8,
          square: 64
        });
        this.eq((Ωbbdbr_146 = function() {
          return rows.next().value;
        }), {
          n: 9,
          square: 81
        });
        this.eq((Ωbbdbr_147 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    udf_aggregates_with_nsql: function() {
      var Dbric_squares;
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
                // debug 'Ωbbdbr_148', { total, element, }
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
        var db_path, i, n, rows, squares, Ωbbdbr_150, Ωbbdbr_151, Ωbbdbr_153;
        db_path = '/dev/shm/bricabrac-udf_aggregates_with_nsql.sqlite';
        squares = new Dbric_squares(db_path);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_149', row for row from squares.statements.select_from_squares.iterate { start: 1, stop: 5, }
        rows = squares.statements.select_from_squares.iterate({
          start: 1,
          stop: 5
        });
        this.eq((Ωbbdbr_150 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1,
          p_n: 120,
          p_square: 14400
        });
        this.eq((Ωbbdbr_151 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        // echo 'Ωbbdbr_152', row for row from squares.statements.select_from_squares.iterate()
        this.throws((Ωbbdbr_153 = function() {
          return squares.statements.select_from_squares.iterate();
        }), /missing named parameters/i);
        // @eq ( Ωbbdbr_154 = -> rows.next().value ), { n: null, square: null, p_n: 1, p_square: 1 }
        // @eq ( Ωbbdbr_155 = -> rows.next().value ), null
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    udf_functions_with_bsql: function() {
      var Dbric_squares;
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
        var db_path, i, n, rows, squares, Ωbbdbr_156, Ωbbdbr_157, Ωbbdbr_158, Ωbbdbr_159, Ωbbdbr_160, Ωbbdbr_161, Ωbbdbr_162, Ωbbdbr_163, Ωbbdbr_164, Ωbbdbr_165, Ωbbdbr_166;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = new Dbric_squares(db_path);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo row for row from squares.statements.select_from_squares.iterate()
        rows = squares.statements.select_from_squares.iterate();
        this.eq((Ωbbdbr_156 = function() {
          return rows.next().value;
        }), {
          n: 0,
          square: 0
        });
        this.eq((Ωbbdbr_157 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1
        });
        this.eq((Ωbbdbr_158 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4
        });
        this.eq((Ωbbdbr_159 = function() {
          return rows.next().value;
        }), {
          n: 3,
          square: 9
        });
        this.eq((Ωbbdbr_160 = function() {
          return rows.next().value;
        }), {
          n: 4,
          square: 16
        });
        this.eq((Ωbbdbr_161 = function() {
          return rows.next().value;
        }), {
          n: 5,
          square: 25
        });
        this.eq((Ωbbdbr_162 = function() {
          return rows.next().value;
        }), {
          n: 6,
          square: 36
        });
        this.eq((Ωbbdbr_163 = function() {
          return rows.next().value;
        }), {
          n: 7,
          square: 49
        });
        this.eq((Ωbbdbr_164 = function() {
          return rows.next().value;
        }), {
          n: 8,
          square: 64
        });
        this.eq((Ωbbdbr_165 = function() {
          return rows.next().value;
        }), {
          n: 9,
          square: 81
        });
        this.eq((Ωbbdbr_166 = function() {
          return rows.next().value;
        }), void 0);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    udf_aggregates_with_bsql: function() {
      var Dbric_squares;
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
                // debug 'Ωbbdbr_167', { total, element, }
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
        var db_path, i, n, rows, squares, Ωbbdbr_169, Ωbbdbr_170;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = new Dbric_squares(db_path);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_168', row for row from squares.statements.select_from_squares.iterate { start: 2, stop: 3, }
        rows = squares.statements.select_from_squares.iterate({
          start: 2,
          stop: 3
        });
        this.eq((Ωbbdbr_169 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4,
          p_n: 6,
          p_square: 36
        });
        this.eq((Ωbbdbr_170 = function() {
          return rows.next().value;
        }), void 0);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    udf_table_function_with_bsql: function() {
      var Dbric_phrases;
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
        var db_path, i, len, phrase, phrases, ref, rows, Ωbbdbr_173, Ωbbdbr_174, Ωbbdbr_175, Ωbbdbr_176, Ωbbdbr_177, Ωbbdbr_178, Ωbbdbr_179, Ωbbdbr_180, Ωbbdbr_181, Ωbbdbr_182, Ωbbdbr_183, Ωbbdbr_184, Ωbbdbr_185;
        db_path = '/dev/shm/bricabrac.sqlite';
        phrases = new Dbric_phrases(db_path);
        ref = ['eleven', 'five', 'nine', 'one', 'one point five', 'seven', 'three point one'];
        for (i = 0, len = ref.length; i < len; i++) {
          phrase = ref[i];
          phrases.statements.insert_phrase.run({phrase});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_171', row for row from phrases.statements.select_from_phrases.iterate { matcher: '^.*([aeiou].e).*$', }
        // echo()
        //.....................................................................................................
        // echo 'Ωbbdbr_172', row for row from phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
        rows = phrases.statements.select_from_phrases.iterate({
          matcher: '([^aeiou]?[aeiou]+)(?=[mnv])'
        });
        this.eq((Ωbbdbr_173 = function() {
          return rows.next().value;
        }), {
          phrase: 'eleven',
          match: 'le',
          capture: 'le'
        });
        this.eq((Ωbbdbr_174 = function() {
          return rows.next().value;
        }), {
          phrase: 'eleven',
          match: 've',
          capture: 've'
        });
        this.eq((Ωbbdbr_175 = function() {
          return rows.next().value;
        }), {
          phrase: 'five',
          match: 'fi',
          capture: 'fi'
        });
        this.eq((Ωbbdbr_176 = function() {
          return rows.next().value;
        }), {
          phrase: 'nine',
          match: 'ni',
          capture: 'ni'
        });
        this.eq((Ωbbdbr_177 = function() {
          return rows.next().value;
        }), {
          phrase: 'one',
          match: 'o',
          capture: 'o'
        });
        this.eq((Ωbbdbr_178 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'o',
          capture: 'o'
        });
        this.eq((Ωbbdbr_179 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'poi',
          capture: 'poi'
        });
        this.eq((Ωbbdbr_180 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'fi',
          capture: 'fi'
        });
        this.eq((Ωbbdbr_181 = function() {
          return rows.next().value;
        }), {
          phrase: 'seven',
          match: 'se',
          capture: 'se'
        });
        this.eq((Ωbbdbr_182 = function() {
          return rows.next().value;
        }), {
          phrase: 'seven',
          match: 've',
          capture: 've'
        });
        this.eq((Ωbbdbr_183 = function() {
          return rows.next().value;
        }), {
          phrase: 'three point one',
          match: 'poi',
          capture: 'poi'
        });
        this.eq((Ωbbdbr_184 = function() {
          return rows.next().value;
        }), {
          phrase: 'three point one',
          match: ' o',
          capture: ' o'
        });
        this.eq((Ωbbdbr_185 = function() {
          return rows.next().value;
        }), void 0);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    file_mirror_as_table_function: function() {
      var Dbric_phrases;
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
        var db_path, dskey, i, keyword, keywords, len, line, line_nr, phrases, y, Ωbbdbr_186, Ωbbdbr_187;
        db_path = '/dev/shm/bricabrac.sqlite';
        phrases = new Dbric_phrases(db_path);
        this.eq((Ωbbdbr_186 = function() {
          return (phrases.prepare(SQL`pragma foreign_keys`)).get();
        }), {
          foreign_keys: 1
        });
        this.eq((Ωbbdbr_187 = function() {
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
// echo 'Ωbbdbr_188', row for row from phrases.statements.select_from_datasources.iterate()
// echo()
// #...................................................................................................
// echo 'Ωbbdbr_189', row for row from phrases.statements.select_from_mirror.iterate()
// echo()
//.....................................................................................................
        for (y of phrases.statements.select_from_mirror.iterate()) {
          ({dskey, line_nr, line} = y);
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
            phrases.w.statements.insert_keyword.run({dskey, line_nr, keyword});
          }
        }
        // #...................................................................................................
        // echo 'Ωbbdbr_191', row for row from phrases.statements.select_from_keywords.iterate()
        // echo()
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    file_mirror_with_integrated_inserts: function() {
      var Dbric_phrases;
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
// debug 'Ωbbdbr_192', line_nr, rpr keywords
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
        var db_path, phrases, rows, Ωbbdbr_195, Ωbbdbr_196, Ωbbdbr_198, Ωbbdbr_199, Ωbbdbr_200, Ωbbdbr_202, Ωbbdbr_203, Ωbbdbr_204, Ωbbdbr_205, Ωbbdbr_206, Ωbbdbr_207, Ωbbdbr_208, Ωbbdbr_209, Ωbbdbr_210, Ωbbdbr_211, Ωbbdbr_212;
        db_path = '/dev/shm/bricabrac.sqlite';
        phrases = new Dbric_phrases(db_path);
        // debug 'Ωbbdbr_193', phrases.teardown()
        // debug 'Ωbbdbr_194', phrases.rebuild()
        this.eq((Ωbbdbr_195 = function() {
          return (phrases.prepare(SQL`pragma foreign_keys`)).get();
        }), {
          foreign_keys: 1
        });
        this.eq((Ωbbdbr_196 = function() {
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
        // echo 'Ωbbdbr_197', row for row from phrases.statements.locations_from_keyword.iterate { keyword: 'thought', }
        // echo()
        rows = phrases.statements.locations_from_keyword.iterate({
          keyword: 'thought'
        });
        this.eq((Ωbbdbr_198 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 15,
          keyword: 'thought'
        });
        this.eq((Ωbbdbr_199 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 34,
          keyword: 'thought'
        });
        this.eq((Ωbbdbr_200 = function() {
          return rows.next().value;
        }), void 0);
        //.....................................................................................................
        // echo 'Ωbbdbr_201', row for row from phrases.statements.locations_from_keyword.iterate { keyword: 'she', }
        // echo()
        rows = phrases.statements.locations_from_keyword.iterate({
          keyword: 'she'
        });
        this.eq((Ωbbdbr_202 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 2,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_203 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 3,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_204 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 4,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_205 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 5,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_206 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 15,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_207 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 17,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_208 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 18,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_209 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 26,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_210 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 34,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_211 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 36,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_212 = function() {
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
      var cfg_do_show_variables, db, freeze, lets, rows, variables, Ωbbdbr_213, Ωbbdbr_214, Ωbbdbr_216, Ωbbdbr_228, Ωbbdbr_246, Ωbbdbr_248, Ωbbdbr_249, Ωbbdbr_250, Ωbbdbr_251, Ωbbdbr_252, Ωbbdbr_253, Ωbbdbr_254;
      ({lets, freeze} = SFMODULES.require_letsfreezethat_infra().simple);
      cfg_do_show_variables = false;
      //=======================================================================================================
      db = new Dbric_std(':memory:');
      //=======================================================================================================
      this.throws((Ωbbdbr_213 = function() {
        return db.std_with_variables(function() {
          return db.std_with_variables(function() {
            return null;
          });
        });
      }), /illegal to nest `std_with_variables\(\)` contexts/);
      this.throws((Ωbbdbr_214 = function() {
        return db.std_set_variable('myname', 'myvalue');
      }), /illegal to set variable/);
      // @throws ( Ωbbdbr_215 = -> db.std_get_variable 'myname'                            ), /illegal to get variable/
      this.throws((Ωbbdbr_216 = function() {
        return db.std_get_variable('myname');
      }), /unknown variable/);
      //=======================================================================================================
      variables = db._show_variables(cfg_do_show_variables);
      //.......................................................................................................
      db.std_with_variables(() => {
        var Ωbbdbr_217, Ωbbdbr_218, Ωbbdbr_219, Ωbbdbr_220, Ωbbdbr_221, Ωbbdbr_222, Ωbbdbr_223, Ωbbdbr_224;
        this.throws((Ωbbdbr_217 = function() {
          return db.std_get_variable('myname');
        }), /unknown variable/);
        this.eq((Ωbbdbr_218 = function() {
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
        this.eq((Ωbbdbr_219 = function() {
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
        this.eq((Ωbbdbr_220 = function() {
          return db.std_get_next_in_sequence('seq:app:counter');
        }), 10);
        this.eq((Ωbbdbr_221 = function() {
          return db.std_get_next_in_sequence('seq:app:counter');
        }), 13);
        db.std_set_variable('fuzz', 11.5);
        db.std_set_variable('name', 'Bob');
        this.eq((Ωbbdbr_222 = function() {
          return db.std_get_variable('fuzz');
        }), 11.5);
        this.eq((Ωbbdbr_223 = function() {
          return db.std_get_variable('name');
        }), 'Bob');
        this.eq((Ωbbdbr_224 = function() {
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
        var Ωbbdbr_225, Ωbbdbr_227;
        this.eq((Ωbbdbr_225 = function() {
          return db.std_get_variable('name');
        }), 'Alice');
        // debug 'Ωbbdbr_226', { name, job, }
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
      this.eq((Ωbbdbr_228 = function() {
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
        var Ωbbdbr_229;
        this.eq((Ωbbdbr_229 = function() {
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
        var rows, Ωbbdbr_232, Ωbbdbr_233, Ωbbdbr_234;
        /* Model that shows how to insert sequential RowIDs using a private table, an associated public
             view, and a `instead of insert` trigger: */
        db.std_set_variable('seq:letters', 0, 1);
        db.execute(SQL`create table _letters (
  rowid   text    unique  not null,
  letter  text    unique  not null,
-- primary key ( rowid )
constraint "Ωconstraint_230" check ( length( letter ) = 1 )
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
        // info 'Ωbbdbr_231', row for row from db.walk SQL"select * from letters;"
        rows = db.walk(SQL`select * from letters order by letter;`);
        this.eq((Ωbbdbr_232 = function() {
          return rows.next().value;
        }), {
          rowid: 't:letters:R=1',
          letter: 'a'
        });
        this.eq((Ωbbdbr_233 = function() {
          return rows.next().value;
        }), {
          rowid: 't:letters:R=2',
          letter: 'z'
        });
        this.eq((Ωbbdbr_234 = function() {
          return rows.next().done;
        }), true);
        return null;
      });
      null;
      //.......................................................................................................
      db.std_with_variables(() => {
        var rows, Ωbbdbr_236, Ωbbdbr_237, Ωbbdbr_238;
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
        // info 'Ωbbdbr_235', row for row from db.walk SQL"select * from numbers;"
        rows = db.walk(SQL`select * from numbers order by rowid;`);
        this.eq((Ωbbdbr_236 = function() {
          return rows.next().value;
        }), {
          rowid: 't:numbers:R=1',
          number: 'uno'
        });
        this.eq((Ωbbdbr_237 = function() {
          return rows.next().value;
        }), {
          rowid: 't:numbers:R=2',
          number: 'due'
        });
        this.eq((Ωbbdbr_238 = function() {
          return rows.next().done;
        }), true);
        return null;
      });
      (() => {        //.......................................................................................................
        var insert_letter, rows, Ωbbdbr_239, Ωbbdbr_240, Ωbbdbr_241;
        /* NOTE Model that shows how to build a parametrized view: */
        //.......................................................................................................
        /* repeat earlier test to ensure we know what's there: */
        rows = db.walk(SQL`select * from letters order by letter;`);
        this.eq((Ωbbdbr_239 = function() {
          return rows.next().value;
        }), {
          rowid: 't:letters:R=1',
          letter: 'a'
        });
        this.eq((Ωbbdbr_240 = function() {
          return rows.next().value;
        }), {
          rowid: 't:letters:R=2',
          letter: 'z'
        });
        this.eq((Ωbbdbr_241 = function() {
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
          var result, row, Ωbbdbr_242, Ωbbdbr_243, Ωbbdbr_244;
          result = ((function() {
            var results;
            results = [];
            for (row of db.walk(SQL`select * from run_of_letters order by letter;`)) {
              results.push(row.letter);
            }
            return results;
          })()).join(',');
          variables = db._show_variables(cfg_do_show_variables);
          this.eq((Ωbbdbr_242 = function() {
            return result;
          }), 'g,h,i,j,k,l,m');
          this.eq((Ωbbdbr_243 = function() {
            var ref;
            return (ref = variables.first_letter) != null ? ref.gv : void 0;
          }), 'g');
          this.eq((Ωbbdbr_244 = function() {
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
constraint "Ωconstraint_245" check ( rowid regexp 't:wrd:R=\\d+' ) );`);
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
      this.eq((Ωbbdbr_246 = function() {
        var ref;
        return (ref = variables['seq:prfx_words_rowid']) != null ? ref.gv : void 0;
      }), 700);
      // echo 'Ωbbdbr_247', row for row from db.walk SQL"select * from prfx_words order by de;"
      rows = db.walk(SQL`select * from prfx_words order by de;`);
      this.eq((Ωbbdbr_248 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=600',
        en: 'call',
        de: 'Anruf'
      });
      this.eq((Ωbbdbr_249 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=700',
        en: 'book',
        de: 'Buch'
      });
      this.eq((Ωbbdbr_250 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=200',
        en: 'dog',
        de: 'Hund'
      });
      this.eq((Ωbbdbr_251 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=300',
        en: 'cat',
        de: 'Katze'
      });
      this.eq((Ωbbdbr_252 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=400',
        en: 'word',
        de: 'Wort'
      });
      this.eq((Ωbbdbr_253 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=500',
        en: 'call',
        de: 'rufen'
      });
      this.eq((Ωbbdbr_254 = function() {
        return rows.next().done;
      }), true);
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    dbric_strict_mode: function() {
      var freeze, lets;
      ({lets, freeze} = SFMODULES.require_letsfreezethat_infra().simple);
      (() => {        //.......................................................................................................
        var db;
        db = new Dbric(':memory:');
        (db.prepare(SQL`pragma strict       = on;`)).run();
        db.execute(SQL`create table t ( f integer );`);
        db.execute(SQL`insert into t values ( 1234 );`);
        db.execute(SQL`insert into t values ( 12.34 );`);
        db.execute(SQL`insert into t values ( 'wat' );`);
        // debug 'Ωbbdbr_255', ( row.f for row from db.walk SQL"select f from t;" )
        return null;
      })();
      (() => {        //.......................................................................................................
        var db, Ωbbdbr_256, Ωbbdbr_257, Ωbbdbr_258, Ωbbdbr_259, Ωbbdbr_260, Ωbbdbr_261;
        db = new Dbric(':memory:');
        (db.prepare(SQL`pragma strict       = on;`)).run();
        this.throws((Ωbbdbr_256 = function() {
          return db.execute(SQL`create table t ( f integer, j json ) strict;`);
        }), /unknown datatype for t\.j/);
        db.execute(SQL`create table t ( f integer, j blob ) strict;`);
        db.execute(SQL`insert into t ( f ) values ( 1234 );`);
        this.eq((Ωbbdbr_257 = function() {
          return (db.get_first(SQL`select typeof( 12    ) as type;`)).type;
        }), 'integer');
        this.eq((Ωbbdbr_258 = function() {
          return (db.get_first(SQL`select typeof( 12.34 ) as type;`)).type;
        }), 'real');
        this.eq((Ωbbdbr_259 = function() {
          return (db.get_first(SQL`select typeof( 'wat' ) as type;`)).type;
        }), 'text');
        this.throws((Ωbbdbr_260 = function() {
          return db.execute(SQL`insert into t ( f ) values ( 12.34 );`);
        }), /cannot store REAL value in INTEGER column/);
        this.throws((Ωbbdbr_261 = function() {
          return db.execute(SQL`insert into t ( f ) values ( 'wat' );`);
        }), /cannot store TEXT value in INTEGER column/);
        // debug 'Ωbbdbr_262', ( row.f for row from db.walk SQL"select f from t;" )
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    _dbric_dynamic_build_properties: function() {
      (() => {        //.......................................................................................................
        var Db_1, db, prefix, relation_names, row, rows, Ωbbdbr_263, Ωbbdbr_264, Ωbbdbr_265, Ωbbdbr_266;
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
        this.eq((Ωbbdbr_263 = function() {
          return relation_names.has('wrd_words');
        }), true);
        rows = db.walk(SQL`select * from ${IDN(`${prefix}_words`)};`);
        this.eq((Ωbbdbr_264 = function() {
          return rows.next().value.t;
        }), '水 (みず)');
        this.eq((Ωbbdbr_265 = function() {
          return rows.next().value.t;
        }), '食べ物 (たべもの)');
        this.eq((Ωbbdbr_266 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var Db_1, db, prefix, relation_names, row, rows, Ωbbdbr_267, Ωbbdbr_269, Ωbbdbr_270, Ωbbdbr_271;
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
        this.eq((Ωbbdbr_267 = function() {
          return relation_names.has('wrd_words');
        }), true);
        // info 'Ωbbdbr_268', row for row from db.walk db.statements.select_words
        rows = db.walk(db.statements.select_words);
        this.eq((Ωbbdbr_269 = function() {
          return rows.next().value.t;
        }), '水 (みず)');
        this.eq((Ωbbdbr_270 = function() {
          return rows.next().value.t;
        }), '食べ物 (たべもの)');
        this.eq((Ωbbdbr_271 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    _dbric_integrate_plugin: function() {
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
              // help 'Ωbbdbr_272', prototype.constructor.name, prototype.std_with_variables
              // help 'Ωbbdbr_273', prototype.constructor.name, prototype.statements
              help('Ωbbdbr_274', prototype.constructor.name, prototype.exportable_method_1);
            } else {
              // info 'Ωbbdbr_275', prototype.constructor.name, keys
              null;
            }
          }
          // whisper 'Ωbbdbr_276', prototype.constructor.name, keys
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
          debug('Ωbbdbr_277', prototype);
          debug('Ωbbdbr_278', ' ', prototype.exportable_method_1);
          debug('Ωbbdbr_279', ' ', prototype.exportable_method_2);
          debug('Ωbbdbr_280', ' ', (ref1 = (ref2 = prototype.build) != null ? ref2.length : void 0) != null ? ref1 : '');
        }
        //.....................................................................................................
        debug();
        ref3 = get_prototype_chain(Db_1.prototype);
        for (j = 0, len1 = ref3.length; j < len1; j++) {
          prototype = ref3[j];
          if (prototype === Dbric || prototype === Dbric.prototype) {
            break;
          }
          debug('Ωbbdbr_281', prototype);
          debug('Ωbbdbr_282', ' ', prototype.exportable_method_1);
          debug('Ωbbdbr_283', ' ', prototype.exportable_method_2);
          debug('Ωbbdbr_284', ' ', (ref4 = (ref5 = prototype.build) != null ? ref5.length : void 0) != null ? ref4 : '');
        }
        //.....................................................................................................
        debug('Ωbbdbr_285', '-----------------------------------------');
        ref6 = get_prototype_chain(Db_2);
        for (k = 0, len2 = ref6.length; k < len2; k++) {
          prototype = ref6[k];
          if (prototype === Dbric || prototype === Dbric.prototype) {
            break;
          }
          debug('Ωbbdbr_286', prototype);
          debug('Ωbbdbr_287', ' ', prototype.exportable_method_1);
          debug('Ωbbdbr_288', ' ', prototype.exportable_method_2);
          debug('Ωbbdbr_289', ' ', (ref7 = (ref8 = prototype.build) != null ? ref8.length : void 0) != null ? ref7 : '');
        }
        //.....................................................................................................
        debug();
        ref9 = get_prototype_chain(Db_2.prototype);
        for (l = 0, len3 = ref9.length; l < len3; l++) {
          prototype = ref9[l];
          if (prototype === Dbric || prototype === Dbric.prototype) {
            break;
          }
          debug('Ωbbdbr_290', prototype);
          debug('Ωbbdbr_291', ' ', prototype.exportable_method_1);
          debug('Ωbbdbr_292', ' ', prototype.exportable_method_2);
          debug('Ωbbdbr_293', ' ', (ref10 = (ref11 = prototype.build) != null ? ref11.length : void 0) != null ? ref10 : '');
        }
        // debug 'Ωbbdbr_294'
        // debug 'Ωbbdbr_295', prototype for prototype in get_prototype_chain db
        // #.....................................................................................................
        // urge reverse 'Ωbbdbr_296'; get_all_effective_descriptors_in_prototype_chain Dbric_std
        // # urge reverse 'Ωbbdbr_297'; get_all_effective_descriptors_in_prototype_chain Dbric_std::
        // urge reverse 'Ωbbdbr_298'; get_all_effective_descriptors_in_prototype_chain new Dbric_std
        // urge ( reverse 'Ωbbdbr_299' ), gold "build:                ", Dbric_std.build
        // urge ( reverse 'Ωbbdbr_300' ), gold "statements:           ", Dbric_std.statements
        // urge ( reverse 'Ωbbdbr_301' ), gold "functions:            ", Dbric_std.functions
        // urge ( reverse 'Ωbbdbr_302' ), gold "aggregate_functions:  ", Dbric_std.aggregate_functions
        // urge ( reverse 'Ωbbdbr_303' ), gold "window_functions:     ", Dbric_std.window_functions
        // urge ( reverse 'Ωbbdbr_304' ), gold "table_functions:      ", Dbric_std.table_functions
        // urge ( reverse 'Ωbbdbr_305' ), gold "virtual_tables:       ", Dbric_std.virtual_tables
        // urge ( reverse 'Ωbbdbr_306' ), gold "exports:              ", Dbric_std.exports
        // # db.integrate_plugin Dbric_std
        // # relation_names = new Set ( row.name for row from db.walk SQL"select * from std_relations;" )
        // # debug 'Ωbbdbr_307', relation_names
        // # @eq ( Ωbbdbr_308 = -> relation_names.has 'wrd_words'      ), true
        // # rows = db.walk SQL"""select * from wrd_words;"""
        // # @eq ( Ωbbdbr_309 = -> rows.next().value.t                 ), '水 (みず)'
        // # @eq ( Ωbbdbr_310 = -> rows.next().value.t                 ), '食べ物 (たべもの)'
        // # @eq ( Ωbbdbr_311 = -> rows.next().done                    ), true
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    _dbric_plugins_acquisition: function() {
      var get_all_in_prototype_chain, get_prototype_chain, nbr_number_plugin, type_of;
      ({type_of} = (require('../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics')).require_type_of());
      ({get_all_in_prototype_chain, get_prototype_chain} = (require('../../../apps/bricabrac-sfmodules/lib/unstable-object-tools-brics')).require_get_prototype_chain());
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
        var Db_1, db, i, len, ref, type, value;
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
        // db = new Db_1()
        db = new Dbric_std();
        ref = db._get_acquisition_chain();
        //.....................................................................................................
        for (i = 0, len = ref.length; i < len; i++) {
          ({type, value} = ref[i]);
          switch (type) {
            case 'plugin':
              info('Ωbbdbr_312', type, Object.keys(value.exports));
              break;
            case 'prototype':
              switch (true) {
                case value === db.constructor:
                  help('Ωbbdbr_313', type, rpr(value.name));
                  break;
                default:
                  // when value in base_prototypes
                  //   whisper 'Ωbbdbr_314', type, "(object)"
                  urge('Ωbbdbr_315', type, rpr(value.name, value));
              }
              break;
            default:
              throw new Error(`Ωbbdbr_316 internal error: unknown type ${rpr(type)}`);
          }
        }
        // debug 'Ωbbdbr_317', { type, value, }
        //.....................................................................................................
        // if record_coverage
        //   { used, unused, } = tracker.report()
        //   help 'Ωbbdbr_318', "used:   ", name for name in used
        //   warn 'Ωbbdbr_319', "unused: ", name for name in unused
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
      var catalog, count, counts, enumerate_prototypes_and_methods, get_names_by_counts, get_unused_names, get_used_names, guytest_cfg, handler, name, names, ref, wrap_methods_of_prototypes;
      ({enumerate_prototypes_and_methods, wrap_methods_of_prototypes} = require('../../../apps/bricabrac-sfmodules/lib/instrumentation-coverage-observer'));
      //.........................................................................................................
      catalog = enumerate_prototypes_and_methods(Dbric_std);
      counts = Object.fromEntries((function() {
        var results;
        results = [];
        for (name in catalog) {
          results.push([name, 0]);
        }
        return results;
      })());
      get_unused_names = function(counts) {
        var count, results;
        results = [];
        for (name in counts) {
          count = counts[name];
          if (count === 0) {
            results.push(name);
          }
        }
        return results;
      };
      get_used_names = function(counts) {
        var count, results;
        results = [];
        for (name in counts) {
          count = counts[name];
          if (count !== 0) {
            results.push(name);
          }
        }
        return results;
      };
      get_names_by_counts = function(counts) {
        var R, count;
        R = {};
        for (name in counts) {
          count = counts[name];
          (R[count] != null ? R[count] : R[count] = []).push(name);
        }
        return R;
      };
      handler = function({name}) {
        // info 'Ωbbdbr_320', name
        counts[name]++;
        return null;
      };
      debug('Ωbbdbr_321', Dbric.prototype.prepare);
      debug('Ωbbdbr_322', Dbric_std.prototype.prepare);
      wrap_methods_of_prototypes(Dbric_std, handler);
      debug('Ωbbdbr_323', Dbric.prototype.prepare);
      debug('Ωbbdbr_324', Dbric_std.prototype.prepare);
      //---------------------------------------------------------------------------------------------------------
      guytest_cfg = {
        throw_on_error: false,
        show_passes: true,
        report_checks: true
      };
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
      (new Test(guytest_cfg)).test({tests});
      // ( new Test guytest_cfg ).test { dbric_integrate_plugin: tests._dbric_integrate_plugin, }
      // ( new Test guytest_cfg ).test { dbric_plugins_acquisition: tests._dbric_plugins_acquisition, }
      // ( new Test guytest_cfg ).test { dbric_esql: tests.dbric_esql, }
      //---------------------------------------------------------------------------------------------------------
      warn('Ωbbdbr_325', get_unused_names(counts));
      help('Ωbbdbr_326', get_used_names(counts));
      ref = get_names_by_counts(counts);
      for (count in ref) {
        names = ref[count];
        urge('Ωbbdbr_327', count, names);
      }
      // db._get_acquisition_chain()
      // warn 'Ωbbdbr_328', get_unused_names     counts
      // help 'Ωbbdbr_329', get_used_names       counts
      // urge 'Ωbbdbr_330', count, names for count, names of get_names_by_counts  counts

      //=========================================================================================================
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLFlBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLGlCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEs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QyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztV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SSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMs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QSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsQ0FBRSxLQUFGLENBQTlCLEVBekJGOzs7OztNQThCRSxJQUFBLENBQUssWUFBTCxFQUFtQixnQkFBQSxDQUFxQixNQUFyQixDQUFuQjtNQUNBLElBQUEsQ0FBSyxZQUFMLEVBQW1CLGNBQUEsQ0FBcUIsTUFBckIsQ0FBbkI7QUFDQTtNQUFBLEtBQUEsWUFBQTs7UUFBQSxJQUFBLENBQUssWUFBTCxFQUFtQixLQUFuQixFQUEwQixLQUExQjtNQUFBLENBaENGOzs7Ozs7O2FBdUNHO0lBeENxQyxDQUFBLElBQXhDOztBQXA0Q0EiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtZGJyaWMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG57IERicmljLFxuICBEYnJpY19zdGQsXG4gIElETixcbiAgTElULFxuICBTUUwsXG4gIFZFQyxcbiAgaW50ZXJuYWxzLFxuICBUcnVlLFxuICBGYWxzZSxcbiAgdW5xdW90ZV9uYW1lLCAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2RicmljJ1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnJlbW92ZSA9ICggcGF0aCApIC0+XG4gIHRyeVxuICAgIEZTLnVubGlua1N5bmMgcGF0aFxuICAgIGhlbHAgJ86pYmJkYnJfX18xJywgXCJyZW1vdmVkICN7cnByIHBhdGh9XCJcbiAgY2F0Y2ggZXJyb3JcbiAgICB0aHJvdyBlcnJvciB1bmxlc3MgZXJyb3IuY29kZSBpcyAnRU5PRU5UJ1xuICAgICMgdXJnZSAnzqliYmRicl9fXzInLCBcIm5vIHN1Y2ggRlMgb2JqZWN0OiAje3JwciBwYXRofVwiXG4gIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19lc3FsOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX18zID0gLT4gaW50ZXJuYWxzLnR5cGVfb2YgdW5xdW90ZV9uYW1lICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fNCA9IC0+IHVucXVvdGVfbmFtZSAneCcgICAgICAgICAgICAgICAgICAgICksICd4J1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fNSA9IC0+IHVucXVvdGVfbmFtZSAnXCJ4XCInICAgICAgICAgICAgICAgICAgKSwgJ3gnXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX182ID0gLT4gdW5xdW90ZV9uYW1lICdhYmMnICAgICAgICAgICAgICAgICAgKSwgJ2FiYydcbiAgICBAZXEgICAgICggzqliYmRicl9fXzcgPSAtPiB1bnF1b3RlX25hbWUgJ1wiYWJjXCInICAgICAgICAgICAgICAgICksICdhYmMnXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX184ID0gLT4gdW5xdW90ZV9uYW1lICdcImFiXCJcImNcIicgICAgICAgICAgICAgICksICdhYlwiYydcbiAgICBAdGhyb3dzICggzqliYmRicl9fXzkgPSAtPiB1bnF1b3RlX25hbWUgJycgICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBub24tZW1wdHkgdGV4dCwgZ290IGFuIGVtcHR5IHRleHQvXG4gICAgQHRocm93cyAoIM6pYmJkYnJfXzEwID0gLT4gdW5xdW90ZV9uYW1lICdcIicgICAgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHF1b3RlZCBub24tZW1wdHkgdGV4dCwgZ290IGEgcXVvdGUvXG4gICAgQGVxICAgICAoIM6pYmJkYnJfXzExID0gLT4gdW5xdW90ZV9uYW1lICdcIlwiJyAgICAgICAgICAgICAgICAgICApLCAnJyAjIyMgTk9URSBTUUxpdGUgZG9lcyBhY2NlcHQgYSBxdW90ZWQgZW1wdHkgc3RyaW5nIGFzIG5hbWUgIyMjXG4gICAgQHRocm93cyAoIM6pYmJkYnJfXzEyID0gLT4gdW5xdW90ZV9uYW1lIGZhbHNlICAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dCwgZ290IGEgYm9vbGVhbi9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xMyA9IC0+IElETiAnYWJjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdcImFiY1wiJ1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xNCA9IC0+IElETiAnQVwiYmNcIicgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ1wiQVwiXCJiY1wiXCJcIidcbiAgICBAZXEgICAgICggzqliYmRicl9fMTUgPSAtPiBMSVQgJ2FiYycgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBcIidhYmMnXCJcbiAgICBAZXEgICAgICggzqliYmRicl9fMTYgPSAtPiBMSVQgXCJBJ2JjJ1wiICAgICAgICAgICAgICAgICAgICAgICAgICksIFwiJ0EnJ2JjJycnXCJcbiAgICBAdGhyb3dzICggzqliYmRicl9fMTcgPSAtPiBWRUMgJ2FiYycgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBsaXN0L1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xOCA9IC0+IFZFQyBbICdhYmMnIF0gICAgICAgICAgICAgICAgICAgICAgICksIFwiXCJcIiggJ2FiYycgKVwiXCJcIlxuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xOSA9IC0+IFZFQyBbICdhYmMnLCAxLCB0cnVlLCBmYWxzZSwgXSAgICAgICksIFwiXCJcIiggJ2FiYycsIDEsIDEsIDAgKVwiXCJcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX3N0ZDogLT5cbiAgICB7IHRlbXAsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3RlbXAoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdGVtcC53aXRoX2RpcmVjdG9yeSB7IGtlZXA6IGZhbHNlLCB9LCAoeyBwYXRoOiBmb2xkZXJfcGF0aCwgfSkgPT5cbiAgICAgICMgZm9sZGVyX3BhdGggPSAnL3RtcC9icmljYnJhYy10ZXN0JyAjICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxuICAgICAgZGJfcGF0aCA9IFBBVEguam9pbiBmb2xkZXJfcGF0aCwgJ2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICByZW1vdmUgZGJfcGF0aFxuICAgICAgIyBoZWxwICfOqWJiZGJyX18yMCcsIHsgZGJfcGF0aCwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IG5ldyBEYnJpYyBkYl9wYXRoXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjEgPSAtPiBkYi5pc19yZWFkeSApLCB0cnVlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gKCBuZXcgRGJyaWMgZGJfcGF0aCApXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjIgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzIzID0gLT4gZGIuX2dldF9kYl9vYmplY3RzKCkgICAgICAgICksIHt9XG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjQgPSAtPiBkYi5pc19yZWFkeSAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI1ID0gLT4gZGIuYnVpbGQoKSAgICAgICAgICAgICAgICAgICksIDBcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRlbXAud2l0aF9kaXJlY3RvcnkgeyBrZWVwOiBmYWxzZSwgfSwgKHsgcGF0aDogZm9sZGVyX3BhdGgsIH0pID0+XG4gICAgICAjIGZvbGRlcl9wYXRoID0gJy90bXAvYnJpY2JyYWMtdGVzdCcgIyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcbiAgICAgIGRiX3BhdGggPSBQQVRILmpvaW4gZm9sZGVyX3BhdGgsICdicmljYWJyYWMuc3FsaXRlJ1xuICAgICAgcmVtb3ZlIGRiX3BhdGhcbiAgICAgICMgaGVscCAnzqliYmRicl9fMjYnLCB7IGRiX3BhdGgsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBuZXcgRGJyaWMgZGJfcGF0aFxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI3ID0gLT4gZGIuaXNfcmVhZHkgICAgICAgKSwgdHJ1ZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IG5ldyBEYnJpY19zdGQgZGJfcGF0aFxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI4ID0gLT4gZGIuaXNfcmVhZHkgICAgICAgKSwgdHJ1ZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9ICggbmV3IERicmljX3N0ZCBkYl9wYXRoIClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yOSA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzAgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljX3N0ZCAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBvYmplY3RzID0gbmV3IFNldCAoIFwiI3tvLnR5cGV9OiN7by5uYW1lfVwiIGZvciBfLCBvIG9mIGRiLl9nZXRfZGJfb2JqZWN0cygpIClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zMSA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF90YWJsZXMnICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzIgPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfdmlld3MnICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzMzID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3JlbGF0aW9ucycgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zNCA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzUgPSAtPiBkYi5idWlsZCgpICAgICAgICAgICAgICAgICAgICAgICAgKSwgMFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9ICggbmV3IERicmljX3N0ZCBkYl9wYXRoIClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zNiA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzcgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljX3N0ZCAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBvYmplY3RzID0gbmV3IFNldCAoIFwiI3tvLnR5cGV9OiN7by5uYW1lfVwiIGZvciBfLCBvIG9mIGRiLl9nZXRfZGJfb2JqZWN0cygpIClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zOCA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF90YWJsZXMnICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzkgPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfdmlld3MnICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzQwID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3JlbGF0aW9ucycgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180MSA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNDIgPSAtPiBkYi5idWlsZCgpICAgICAgICAgICAgICAgICAgICAgICAgKSwgMFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9ICggbmV3IERicmljX3N0ZCBkYl9wYXRoIClcbiAgICAgICAgb2JqZWN0cyA9IG5ldyBTZXQgKCBcIiN7by50eXBlfToje28ubmFtZX1cIiBmb3IgXywgbyBvZiBkYi5fZ2V0X2RiX29iamVjdHMoKSApXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNDMgPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfdGFibGVzJyAgICAgKSwgdHJ1ZVxuICAgICAgICAoIGRiLnByZXBhcmUgU1FMXCJkcm9wIHZpZXcgc3RkX3RhYmxlcztcIiApLnJ1bigpXG4gICAgICAgIG9iamVjdHMgPSBuZXcgU2V0ICggXCIje28udHlwZX06I3tvLm5hbWV9XCIgZm9yIF8sIG8gb2YgZGIuX2dldF9kYl9vYmplY3RzKCkgKVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzQ0ID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3RhYmxlcycgICAgICksIGZhbHNlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNDUgPSAtPiBkYi5pc19yZWFkeSAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSAoIG5ldyBEYnJpY19zdGQgZGJfcGF0aCApXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNDYgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzQ3ID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpY19zdGQgICAgICAgICAgICksIHRydWVcbiAgICAgICAgb2JqZWN0cyA9IG5ldyBTZXQgKCBcIiN7by50eXBlfToje28ubmFtZX1cIiBmb3IgXywgbyBvZiBkYi5fZ2V0X2RiX29iamVjdHMoKSApXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNDggPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfdGFibGVzJyAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzQ5ID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3ZpZXdzJyAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX181MCA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF9yZWxhdGlvbnMnICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNTEgPSAtPiBkYi5pc19yZWFkeSAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzUyID0gLT4gZGIuYnVpbGQoKSAgICAgICAgICAgICAgICAgICAgICAgICksIDBcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19zdGRfZ2VuZXJhdGVfc2VyaWVzOiAtPlxuICAgIHsgdGVtcCwgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdGVtcCgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIHNxbGl0ZT4gc2VsZWN0ICogZnJvbSBnZW5lcmF0ZV9zZXJpZXMoIDEsIDEwLCAwICk7XG4gICAgIyDilIzilIDilIDilIDilIDilIDilIDilIDilJBcbiAgICAjIOKUgiB2YWx1ZSDilIJcbiAgICAjIOKUnOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUpFxuICAgICMg4pSCIDEgICAgIOKUglxuICAgICMg4pSCIDIgICAgIOKUglxuICAgICMg4pSCIDMgICAgIOKUglxuICAgICMg4pSCIDQgICAgIOKUglxuICAgICMg4pSCIDUgICAgIOKUglxuICAgICMg4pSCIDYgICAgIOKUglxuICAgICMg4pSCIDcgICAgIOKUglxuICAgICMg4pSCIDggICAgIOKUglxuICAgICMg4pSCIDkgICAgIOKUglxuICAgICMg4pSCIDEwICAgIOKUglxuICAgICMg4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYXG4gICAgIyBzcWxpdGU+IHNlbGVjdCAqIGZyb20gZ2VuZXJhdGVfc2VyaWVzKCAxLCAxMCwgMCApO1xuICAgICMg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXG4gICAgIyDilIIgdmFsdWUg4pSCXG4gICAgIyDilJzilIDilIDilIDilIDilIDilIDilIDilKRcbiAgICAjIOKUgiAxICAgICDilIJcbiAgICAjIOKUgiAyICAgICDilIJcbiAgICAjIOKUgiAzICAgICDilIJcbiAgICAjIOKUgiA0ICAgICDilIJcbiAgICAjIOKUgiA1ICAgICDilIJcbiAgICAjIOKUgiA2ICAgICDilIJcbiAgICAjIOKUgiA3ICAgICDilIJcbiAgICAjIOKUgiA4ICAgICDilIJcbiAgICAjIOKUgiA5ICAgICDilIJcbiAgICAjIOKUgiAxMCAgICDilIJcbiAgICAjIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmFxuICAgICMgc3FsaXRlPiBzZWxlY3QgKiBmcm9tIGdlbmVyYXRlX3NlcmllcyggMSwgMSwgMCApO1xuICAgICMg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXG4gICAgIyDilIIgdmFsdWUg4pSCXG4gICAgIyDilJzilIDilIDilIDilIDilIDilIDilIDilKRcbiAgICAjIOKUgiAxICAgICDilIJcbiAgICAjIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmFxuICAgICMgc3FsaXRlPiBzZWxlY3QgKiBmcm9tIGdlbmVyYXRlX3NlcmllcyggMSwgMCwgMCApO1xuICAgICMgc3FsaXRlPlxuXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgRGIgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIGRiID0gbmV3IERiICc6bWVtb3J5OidcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzUzID0gLT4gWyAoIHJvdy52YWx1ZSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gc3RkX2dlbmVyYXRlX3NlcmllcyggMSwgMTAsIDIgKTtcIikuLi4sICBdICksIFsgMSwgMywgNSwgNywgOSBdXG4gICAgICBAZXEgKCDOqWJiZGJyX181NCA9IC0+IFsgKCByb3cudmFsdWUgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHN0ZF9nZW5lcmF0ZV9zZXJpZXMoIDEsIDEwLCAwICk7XCIpLi4uLCAgXSApLCBbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwIF1cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzU1ID0gLT4gWyAoIHJvdy52YWx1ZSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gc3RkX2dlbmVyYXRlX3NlcmllcyggMSwgMSwgMCApO1wiKS4uLiwgICBdICksIFsgMSBdXG4gICAgICBAZXEgKCDOqWJiZGJyX181NiA9IC0+IFsgKCByb3cudmFsdWUgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHN0ZF9nZW5lcmF0ZV9zZXJpZXMoIDEsIDAsIDAgKTtcIikuLi4sICAgXSApLCBbXVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdGF0ZW1lbnRfaW5oZXJpdGFuY2U6IC0+XG4gICAgIyB7IHRlbXAsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3RlbXAoKVxuICAgICMgeyBTdGF0ZW1lbnRTeW5jLCAgICAgICAgICAgIH0gPSByZXF1aXJlICdub2RlOnNxbGl0ZSdcbiAgICBCc3FsMyAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9ub2RlX21vZHVsZXMvYmV0dGVyLXNxbGl0ZTMnXG4gICAgc3RhdGVtZW50X2NsYXNzICAgICAgICAgICAgICAgPSAoICggbmV3IEJzcWwzICc6bWVtb3J5OicgKS5wcmVwYXJlIFNRTFwic2VsZWN0IDEgd2hlcmUgZmFsc2U7XCIgKS5jb25zdHJ1Y3RvclxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZ2V0X2Z1bmN0aW9uX25hbWVzID0gKCBkYmEgKSAtPiBuZXcgU2V0ICggbmFtZSBmb3IgeyBuYW1lLCB9IGZyb20gXFxcbiAgICAgIGRiYS53YWxrIFNRTFwic2VsZWN0IG5hbWUgZnJvbSBwcmFnbWFfZnVuY3Rpb25fbGlzdCgpIG9yZGVyIGJ5IG5hbWU7XCIgKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZ2V0X3RhYmxlX25hbWVzID0gKCBkYmEgKSAtPiBuZXcgU2V0ICggbmFtZSBmb3IgeyBuYW1lLCB9IGZyb20gXFxcbiAgICAgIGRiYS53YWxrIFNRTFwiXCJcInNlbGVjdCBuYW1lIGZyb20gc3FsaXRlX3NjaGVtYVxuICAgICAgd2hlcmUgdHlwZSBpcyAndGFibGUnIG9yZGVyIGJ5IG5hbWU7XCJcIlwiIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGdldF92aWV3X25hbWVzID0gKCBkYmEgKSAtPiBuZXcgU2V0ICggbmFtZSBmb3IgeyBuYW1lLCB9IGZyb20gXFxcbiAgICAgIGRiYS53YWxrIFNRTFwiXCJcInNlbGVjdCBuYW1lIGZyb20gc3FsaXRlX3NjaGVtYVxuICAgICAgd2hlcmUgdHlwZSBpcyAndmlldycgb3JkZXIgYnkgbmFtZTtcIlwiXCIgKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZ2V0X3RyaWdnZXJfbmFtZXMgPSAoIGRiYSApIC0+IG5ldyBTZXQgKCBuYW1lIGZvciB7IG5hbWUsIH0gZnJvbSBcXFxuICAgICAgZGJhLndhbGsgU1FMXCJcIlwic2VsZWN0IG5hbWUgZnJvbSBzcWxpdGVfc2NoZW1hXG4gICAgICB3aGVyZSB0eXBlIGlzICd0cmlnZ2VyJyBvcmRlciBieSBuYW1lO1wiXCJcIiApXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBBIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAZnVuY3Rpb25zOlxuICAgICAgICBmbl9hOlxuICAgICAgICAgIHZhbHVlOiAtPiByZXR1cm4gMVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIHNlbGVjdF9hOiBTUUxcInNlbGVjdCBmbl9hKCkgYXMgb25lLCAyIGFzIHR3bztcIlxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiY3JlYXRlIHRhYmxlIHRhYmxlX2EgKCBkIHRleHQgKTtcIlxuICAgICAgICBTUUxcImNyZWF0ZSB2aWV3IHZpZXdfYSBhcyBzZWxlY3QgKiBmcm9tIHRhYmxlX2E7XCJcbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgQiBleHRlbmRzIEFcbiAgICAgIEBmdW5jdGlvbnM6XG4gICAgICAgIGZuX2I6XG4gICAgICAgICAgdmFsdWU6IC0+IHJldHVybiAxXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgc2VsZWN0X2I6IFNRTFwic2VsZWN0IGZuX2IoKSBhcyBvbmUsIDIgYXMgdHdvO1wiXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJjcmVhdGUgdGFibGUgdGFibGVfYiAoIGQgdGV4dCApO1wiXG4gICAgICAgIFNRTFwiY3JlYXRlIHZpZXcgdmlld19iIGFzIHNlbGVjdCAqIGZyb20gdGFibGVfYjtcIlxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBDX2R1cGxpY2F0ZV9mdW5jdGlvbiBleHRlbmRzIEJcbiAgICAgIEBmdW5jdGlvbnM6XG4gICAgICAgIGZuX2I6XG4gICAgICAgICAgdmFsdWU6IC0+IHJldHVybiAxXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBDX2R1cGxpY2F0ZV9zdGF0ZW1lbnQgZXh0ZW5kcyBCXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgc2VsZWN0X2I6IFNRTFwic2VsZWN0IGZuX2IoKSBhcyBvbmUsIDIgYXMgdHdvO1wiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBDX2R1cGxpY2F0ZV90YWJsZSBleHRlbmRzIEJcbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcImNyZWF0ZSB0YWJsZSB0YWJsZV9iICggZCB0ZXh0ICk7XCJcbiAgICAgICAgU1FMXCJjcmVhdGUgdmlldyB2aWV3X2IgYXMgc2VsZWN0ICogZnJvbSB0YWJsZV9iO1wiXG4gICAgICAgIF1cbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgYiA9IG5ldyBCKClcbiAgICAjIGRlYnVnICfOqWJiZGJyX181NycsIGJcbiAgICAjIGRlYnVnICfOqWJiZGJyX181OCcsICdmdW5jdGlvbnM6ICcsIGdldF9mdW5jdGlvbl9uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNTknLCAnZnVuY3Rpb25zOiAnLCAoIGdldF9mdW5jdGlvbl9uYW1lcyBiICkuaGFzICdmbl9hJ1xuICAgICMgZGVidWcgJ86pYmJkYnJfXzYwJywgJ2Z1bmN0aW9uczogJywgKCBnZXRfZnVuY3Rpb25fbmFtZXMgYiApLmhhcyAnZm5fYidcbiAgICAjIGRlYnVnICfOqWJiZGJyX182MScsICdmdW5jdGlvbnM6ICcsICggZ2V0X2Z1bmN0aW9uX25hbWVzIGIgKS5oYXMgJ3JlZ2V4cCdcbiAgICAjIGRlYnVnICfOqWJiZGJyX182MicsICd0YWJsZXM6ICAgICcsIGdldF90YWJsZV9uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNjMnLCAndmlld3M6ICAgICAnLCBnZXRfdmlld19uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNjQnLCAndHJpZ2dlcnM6ICAnLCBnZXRfdHJpZ2dlcl9uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNjUnLCAnc3RhdGVtZW50czonLCAoIGsgZm9yIGsgb2YgYi5zdGF0ZW1lbnRzIClcbiAgICAjIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZGJhID0gbmV3IERicmljX3N0ZCAnOm1lbW9yeTonXG4gICAgICAjIGRiYSA9IG5ldyBBKClcbiAgICAgICMgZGJhID0gbmV3IEIoKVxuICAgICAgZGJhLmRiLmZ1bmN0aW9uICd6enpfdGVzdCcsIHsgZGV0ZXJtaW5pc3RpYzogdHJ1ZSwgdmFyYXJnczogZmFsc2UsIGRpcmVjdE9ubHk6IGZhbHNlLCB9LCAtPiBcIlpaWl9URVNUXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZnVuY3Rpb25fbmFtZXMgID0gZ2V0X2Z1bmN0aW9uX25hbWVzIGRiYVxuICAgICAgdGFibGVfbmFtZXMgICAgID0gZ2V0X3RhYmxlX25hbWVzIGRiYVxuICAgICAgdmlld19uYW1lcyAgICAgID0gZ2V0X3ZpZXdfbmFtZXMgZGJhXG4gICAgICB0cmlnZ2VyX25hbWVzICAgPSBnZXRfdHJpZ2dlcl9uYW1lcyBkYmFcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fNjYgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3NjaGVtYSAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzY3ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF90YWJsZXMgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX182OCA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdmlld3MgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNjkgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3JlbGF0aW9ucyAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzcwID0gLT4gZGJhLnN0YXRlbWVudHMuc2VsZWN0X2EgICAgICAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmRicl9fNzEgPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYiAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzcyID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICd6enpfdGVzdCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX183MyA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAncmVnZXhwJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNzQgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX183NSA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnZm5fYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fNzYgPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX183NyA9IC0+IHRhYmxlX25hbWVzLmhhcyAndGFibGVfYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzc4ID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF90YWJsZXMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX183OSA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdmlld3MnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODAgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3JlbGF0aW9ucycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzgxID0gLT4gdmlld19uYW1lcy5oYXMgJ3ZpZXdfYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmRicl9fODIgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGRiYSA9IG5ldyBBKClcbiAgICAgIGRiYS5kYi5mdW5jdGlvbiAnenp6X3Rlc3QnLCB7IGRldGVybWluaXN0aWM6IHRydWUsIHZhcmFyZ3M6IGZhbHNlLCBkaXJlY3RPbmx5OiBmYWxzZSwgfSwgLT4gXCJaWlpfVEVTVFwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZ1bmN0aW9uX25hbWVzICA9IGdldF9mdW5jdGlvbl9uYW1lcyBkYmFcbiAgICAgIHRhYmxlX25hbWVzICAgICA9IGdldF90YWJsZV9uYW1lcyBkYmFcbiAgICAgIHZpZXdfbmFtZXMgICAgICA9IGdldF92aWV3X25hbWVzIGRiYVxuICAgICAgdHJpZ2dlcl9uYW1lcyAgID0gZ2V0X3RyaWdnZXJfbmFtZXMgZGJhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzgzID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9zY2hlbWEgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184NCA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdGFibGVzICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODUgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3ZpZXdzICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg2ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9yZWxhdGlvbnMgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184NyA9IC0+IGRiYS5zdGF0ZW1lbnRzLnNlbGVjdF9hICAgICAgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODggPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYiAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg5ID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICd6enpfdGVzdCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX185MCA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAncmVnZXhwJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTEgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzkyID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdmbl9iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX185MyA9IC0+IHRhYmxlX25hbWVzLmhhcyAndGFibGVfYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTQgPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX185NSA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdGFibGVzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTYgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3ZpZXdzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzk3ID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF9yZWxhdGlvbnMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX185OCA9IC0+IHZpZXdfbmFtZXMuaGFzICd2aWV3X2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTkgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGRiYSA9IG5ldyBCKClcbiAgICAgIGRiYS5kYi5mdW5jdGlvbiAnenp6X3Rlc3QnLCB7IGRldGVybWluaXN0aWM6IHRydWUsIHZhcmFyZ3M6IGZhbHNlLCBkaXJlY3RPbmx5OiBmYWxzZSwgfSwgLT4gXCJaWlpfVEVTVFwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZ1bmN0aW9uX25hbWVzICA9IGdldF9mdW5jdGlvbl9uYW1lcyBkYmFcbiAgICAgIHRhYmxlX25hbWVzICAgICA9IGdldF90YWJsZV9uYW1lcyBkYmFcbiAgICAgIHZpZXdfbmFtZXMgICAgICA9IGdldF92aWV3X25hbWVzIGRiYVxuICAgICAgdHJpZ2dlcl9uYW1lcyAgID0gZ2V0X3RyaWdnZXJfbmFtZXMgZGJhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTAwID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9zY2hlbWEgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzEwMSA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdGFibGVzICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMDIgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3ZpZXdzICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTAzID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9yZWxhdGlvbnMgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzEwNCA9IC0+IGRiYS5zdGF0ZW1lbnRzLnNlbGVjdF9hICAgICAgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMDUgPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYiAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl8xMDYgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ3p6el90ZXN0JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTA3ID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdyZWdleHAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzEwOCA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnZm5fYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMDkgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl8xMTAgPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTExID0gLT4gdGFibGVfbmFtZXMuaGFzICd0YWJsZV9iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzExMiA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdGFibGVzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMTMgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3ZpZXdzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTE0ID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF9yZWxhdGlvbnMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzExNSA9IC0+IHZpZXdfbmFtZXMuaGFzICd2aWV3X2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMTYgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMTE3ID0gLT4gbmV3IENfZHVwbGljYXRlX2Z1bmN0aW9uKCkgICAgKSwgL2EgVURGIG9yIGJ1aWx0LWluIGZ1bmN0aW9uIG5hbWVkICdmbl9iJyBoYXMgYWxyZWFkeSBiZWVuIGRlY2xhcmVkL1xuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMTE4ID0gLT4gbmV3IENfZHVwbGljYXRlX3N0YXRlbWVudCgpICAgKSwgL3N0YXRlbWVudCAnc2VsZWN0X2InIGlzIGFscmVhZHkgZGVjbGFyZWQvXG4gICAgICBAdGhyb3dzICggzqliYmRicl8xMTkgPSAtPiBuZXcgQ19kdXBsaWNhdGVfdGFibGUoKSAgICAgICApLCAvdGFibGUgdGFibGVfYiBhbHJlYWR5IGV4aXN0cy9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkaXNhbGxvd19vdmVyd3JpdGluZ19wcm9wZXJ0aWVzX3dpdGhfZnVuY3Rpb25zOiAtPlxuICAgICMgZGVidWcgJ86pYmJkYnJfMTIwJywgbmV3IERicmljICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgIGRvID0+XG4gICAgICBkYiAgICAgICAgPSAoIG5ldyBEYnJpYyAnOm1lbW9yeTonIClcbiAgICAgIGRiX3Byb3RvICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiBkYlxuICAgICAgIyBkZWJ1ZyAnzqliYmRicl8xMjEnLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIGRiX3Byb3RvLCAnaXNfcmVhZHknXG4gICAgICAjIGRlYnVnICfOqWJiZGJyXzEyMicsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgZGJfcHJvdG8sICdfZ2V0X2lzX3JlYWR5J1xuICAgICAgO251bGxcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICMjIyB1c2UgZGVyaXZlZCBjbGFzc2VzIHRvIGFzc2VydCB0aGF0IHByb3BlcnR5IGRlc2NyaXB0b3JzIGFyZSBzZWFyY2hlZCBmb3IgaW4gdGhlIHByb3RvdHlwZSBjaGFpbjogIyMjXG4gICAgY2xhc3MgRGJyaWNfQSBleHRlbmRzIERicmljXG4gICAgY2xhc3MgRGJyaWNfQiBleHRlbmRzIERicmljX0FcbiAgICBjbGFzcyBEYnJpY19DIGV4dGVuZHMgRGJyaWNfQlxuICAgIGNsYXNzIERicmljX1ogZXh0ZW5kcyBEYnJpY19DXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgRGJyaWNfbm9uY29uZm9ybSBleHRlbmRzIERicmljX1pcbiAgICAgICAgaXNfcmVhZHk6IC0+XG4gICAgICBAdGhyb3dzICggzqliYmRicl8xMjMgPSAtPiBuZXcgRGJyaWNfbm9uY29uZm9ybSgpICksIC9ub3QgYWxsb3dlZCB0byBvdmVycmlkZSBwcm9wZXJ0eSAnaXNfcmVhZHknOyB1c2UgJ19nZXRfaXNfcmVhZHkgaW5zdGVhZC9cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2FtcGxlX2RiOiAtPlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3RvcmUgZXh0ZW5kcyBEYnJpY1xuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBzdG9yZV9mYWNldHMgKFxuICAgICAgICAgIGZhY2V0X2tleSAgICAgICAgICAgICB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICBmYWNldF92YWx1ZSAgICAgICAgICAganNvbiApO1wiXCJcIlxuICAgICAgICBdXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgc3RvcmVfaW5zZXJ0X2ZhY2V0OiBTUUxcIlwiXCJcbiAgICAgICAgICBpbnNlcnQgaW50byBzdG9yZV9mYWNldHMgKCBmYWNldF9rZXksIGZhY2V0X3ZhbHVlICkgdmFsdWVzICggJGZhY2V0X2tleSwgJGZhY2V0X3ZhbHVlIClcbiAgICAgICAgICAgIG9uIGNvbmZsaWN0ICggZmFjZXRfa2V5ICkgZG8gdXBkYXRlIHNldCBmYWNldF92YWx1ZSA9IGV4Y2x1ZGVkLmZhY2V0X3ZhbHVlO1wiXCJcIlxuICAgICAgICBzdG9yZV9nZXRfZmFjZXRzOiBTUUxcIlwiXCJcbiAgICAgICAgICBzZWxlY3QgKiBmcm9tIHN0b3JlX2ZhY2V0cyBvcmRlciBieSBmYWNldF9rZXk7XCJcIlwiXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBzdG9yZSAgICAgPSBuZXcgRGJyaWNfc3RvcmUgZGJfcGF0aFxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAnb25lJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAxICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3R3bycsICAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMiAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDMgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAnaWlpJyAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RydWUnLCAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgdHJ1ZSAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICdmYWxzZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IGZhbHNlICAgKSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjYXN0X3JvdyA9ICggcm93ICkgLT5cbiAgICAgICAgcmV0dXJuIHJvdyB1bmxlc3Mgcm93P1xuICAgICAgICByZXR1cm4geyByb3cuLi4sIGZhY2V0X3ZhbHVlOiAoIEpTT04ucGFyc2Ugcm93LmZhY2V0X3ZhbHVlICksIF92OiByb3cuZmFjZXRfdmFsdWUsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcm93cyA9IHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfZ2V0X2ZhY2V0cy5pdGVyYXRlKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTI0ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgICksIHsgZmFjZXRfa2V5OiAnZmFsc2UnLCBmYWNldF92YWx1ZTogZmFsc2UsIF92OiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTI1ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgICksIHsgZmFjZXRfa2V5OiAnb25lJywgZmFjZXRfdmFsdWU6IDEsIF92OiAxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTI2ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgICksIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogJ2lpaScsIF92OiAnXCJpaWlcIicgfVxuICAgICAgQGVxICggzqliYmRicl8xMjcgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBmYWNldF9rZXk6ICd0cnVlJywgZmFjZXRfdmFsdWU6IHRydWUsIF92OiAndHJ1ZScgfVxuICAgICAgQGVxICggzqliYmRicl8xMjggPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBmYWNldF9rZXk6ICd0d28nLCBmYWNldF92YWx1ZTogMiwgX3Y6IDIgfVxuICAgICAgQGVxICggzqliYmRicl8xMjkgPSAtPiByb3dzLm5leHQoKS5kb25lICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNhbXBsZV9kYl93aXRoX2JzcWw6IC0+XG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zdG9yZSBleHRlbmRzIERicmljXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIHN0b3JlX2ZhY2V0cyAoXG4gICAgICAgICAgZmFjZXRfa2V5ICAgICAgICAgICAgIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgIGZhY2V0X3ZhbHVlICAgICAgICAgICBqc29uICk7XCJcIlwiXG4gICAgICAgIF1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICAjIHN0b3JlX2NyZWF0ZV90YWJsZXM6IFNRTFwiXCJcIlxuICAgICAgICAjICAgXCJcIlwiXG4gICAgICAgIHN0b3JlX2luc2VydF9mYWNldDogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8gc3RvcmVfZmFjZXRzICggZmFjZXRfa2V5LCBmYWNldF92YWx1ZSApIHZhbHVlcyAoICRmYWNldF9rZXksICRmYWNldF92YWx1ZSApXG4gICAgICAgICAgICBvbiBjb25mbGljdCAoIGZhY2V0X2tleSApIGRvIHVwZGF0ZSBzZXQgZmFjZXRfdmFsdWUgPSBleGNsdWRlZC5mYWNldF92YWx1ZTtcIlwiXCJcbiAgICAgICAgc3RvcmVfZ2V0X2ZhY2V0czogU1FMXCJcIlwiXG4gICAgICAgICAgc2VsZWN0ICogZnJvbSBzdG9yZV9mYWNldHMgb3JkZXIgYnkgZmFjZXRfa2V5O1wiXCJcIlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICc6bWVtb3J5OidcbiAgICAgIHN0b3JlICAgICA9IG5ldyBEYnJpY19zdG9yZSBkYl9wYXRoXG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICdvbmUnLCAgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDEgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndHdvJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAyICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMyAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5ICdpaWknICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndHJ1ZScsICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSB0cnVlICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ2ZhbHNlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgZmFsc2UgICApLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGNhc3Rfcm93ID0gKCByb3cgKSAtPlxuICAgICAgICByZXR1cm4gcm93IHVubGVzcyByb3c/XG4gICAgICAgIHJldHVybiB7IHJvdy4uLiwgZmFjZXRfdmFsdWU6ICggSlNPTi5wYXJzZSByb3cuZmFjZXRfdmFsdWUgKSwgX3Y6IHJvdy5mYWNldF92YWx1ZSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByb3dzID0gc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9nZXRfZmFjZXRzLml0ZXJhdGUoKVxuICAgICAgQGVxICggzqliYmRicl8xMzAgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ2ZhbHNlJywgZmFjZXRfdmFsdWU6IGZhbHNlLCBfdjogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEzMSA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAnb25lJywgZmFjZXRfdmFsdWU6IDEsIF92OiAxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTMyID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAnaWlpJywgX3Y6ICdcImlpaVwiJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEzMyA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAndHJ1ZScsIGZhY2V0X3ZhbHVlOiB0cnVlLCBfdjogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTM0ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICd0d28nLCBmYWNldF92YWx1ZTogMiwgX3Y6IDIgfVxuICAgICAgQGVxICggzqliYmRicl8xMzUgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB1bmRlZmluZWRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfZnVuY3Rpb25zX3dpdGhfbnNxbDogLT5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3NxdWFyZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIG51bWJlcnMgKFxuICAgICAgICAgICAgbiBudW1iZXIgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IHNxdWFyZXMgYXMgc2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlKCBuICkgYXMgc3F1YXJlXG4gICAgICAgICAgZnJvbSBudW1iZXJzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgaW5zZXJ0X251bWJlcjogU1FMXCJcIlwiaW5zZXJ0IGludG8gbnVtYmVycyAoIG4gKSB2YWx1ZXMgKCAkbiApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBuICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fc3F1YXJlczogU1FMXCJcIlwic2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgZnJvbSBzcXVhcmVzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAY3JlYXRlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAgICdzcXVhcmUnXG4gICAgICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgICAgICB2YWx1ZTogICAgICAgICAgICggbiApIC0+IG4gKiogMlxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3F1YXJlcyAgID0gbmV3IERicmljX3NxdWFyZXMgZGJfcGF0aFxuICAgICAgZm9yIG4gaW4gWyAwIC4uLiAxMCBdXG4gICAgICAgIHNxdWFyZXMuc3RhdGVtZW50cy5pbnNlcnRfbnVtYmVyLnJ1biB7IG4sIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzEzNicsIHJvdyBmb3Igcm93IGZyb20gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICByb3dzID0gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICBAZXEgKCDOqWJiZGJyXzEzNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMCwgc3F1YXJlOiAwIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTM4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAxLCBzcXVhcmU6IDEgfVxuICAgICAgQGVxICggzqliYmRicl8xMzkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDIsIHNxdWFyZTogNCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMywgc3F1YXJlOiA5IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA0LCBzcXVhcmU6IDE2IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA1LCBzcXVhcmU6IDI1IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA2LCBzcXVhcmU6IDM2IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQ0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA3LCBzcXVhcmU6IDQ5IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQ1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA4LCBzcXVhcmU6IDY0IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQ2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA5LCBzcXVhcmU6IDgxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQ3ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfYWdncmVnYXRlc193aXRoX25zcWw6IC0+XG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zcXVhcmVzIGV4dGVuZHMgRGJyaWNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBudW1iZXJzIChcbiAgICAgICAgICAgIG4gbnVtYmVyIHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1wiXCJcIlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdmlldyBzcXVhcmVzIGFzIHNlbGVjdFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHNxdWFyZSggbiApIGFzIHNxdWFyZVxuICAgICAgICAgIGZyb20gbnVtYmVyc1xuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAgIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIGluc2VydF9udW1iZXI6IFNRTFwiXCJcImluc2VydCBpbnRvIG51bWJlcnMgKCBuICkgdmFsdWVzICggJG4gKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggbiApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgIHNlbGVjdF9mcm9tX251bWJlcnM6IFNRTFwiXCJcInNlbGVjdCBuIGZyb20gbnVtYmVycyBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9zcXVhcmVzOiBTUUxcIlwiXCJzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUsXG4gICAgICAgICAgICBwcm9kdWN0KCBuICkgICAgICBhcyBwX24sXG4gICAgICAgICAgICBwcm9kdWN0KCBzcXVhcmUgKSBhcyBwX3NxdWFyZVxuICAgICAgICAgIGZyb20gc3F1YXJlc1xuICAgICAgICAgIHdoZXJlIG4gYmV0d2VlbiAkc3RhcnQgYW5kICRzdG9wXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAY3JlYXRlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAgICdzcXVhcmUnXG4gICAgICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgICAgICB2YWx1ZTogICAgICAgICAgICggbiApIC0+IG4gKiogMlxuICAgICAgICBAY3JlYXRlX2FnZ3JlZ2F0ZV9mdW5jdGlvblxuICAgICAgICAgIG5hbWU6ICAgICAgICAgICAncHJvZHVjdCdcbiAgICAgICAgICBzdGFydDogICAgICAgICAgLT4gMSAjIyMgTk9URSBjYW4gdXNlIGBudWxsYCBmb3IgYlNRTCwgYnV0IG5TUUwgbmVlZHMgYDFgICMjI1xuICAgICAgICAgIHN0ZXA6ICAgICAgICAgICBwcm9kdWN0ID0gKCB0b3RhbCwgZWxlbWVudCApIC0+XG4gICAgICAgICAgICAjIGRlYnVnICfOqWJiZGJyXzE0OCcsIHsgdG90YWwsIGVsZW1lbnQsIH1cbiAgICAgICAgICAgIHJldHVybiAoIHRvdGFsID8gMSApICogZWxlbWVudFxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMtdWRmX2FnZ3JlZ2F0ZXNfd2l0aF9uc3FsLnNxbGl0ZSdcbiAgICAgIHNxdWFyZXMgICA9IG5ldyBEYnJpY19zcXVhcmVzIGRiX3BhdGhcbiAgICAgIGZvciBuIGluIFsgMCAuLi4gMTAgXVxuICAgICAgICBzcXVhcmVzLnN0YXRlbWVudHMuaW5zZXJ0X251bWJlci5ydW4geyBuLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xNDknLCByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMSwgc3RvcDogNSwgfVxuICAgICAgcm93cyA9IHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMSwgc3RvcDogNSwgfVxuICAgICAgQGVxICggzqliYmRicl8xNTAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDEsIHNxdWFyZTogMSwgcF9uOiAxMjAsIHBfc3F1YXJlOiAxNDQwMCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1MSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE1MicsIHJvdyBmb3Igcm93IGZyb20gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICBAdGhyb3dzICggzqliYmRicl8xNTMgPSAtPiBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlKCkgKSwgL21pc3NpbmcgbmFtZWQgcGFyYW1ldGVycy9pXG4gICAgICAjIEBlcSAoIM6pYmJkYnJfMTU0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiBudWxsLCBzcXVhcmU6IG51bGwsIHBfbjogMSwgcF9zcXVhcmU6IDEgfVxuICAgICAgIyBAZXEgKCDOqWJiZGJyXzE1NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfZnVuY3Rpb25zX3dpdGhfYnNxbDogLT5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3NxdWFyZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIG51bWJlcnMgKFxuICAgICAgICAgICAgbiBudW1iZXIgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IHNxdWFyZXMgYXMgc2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlKCBuICkgYXMgc3F1YXJlXG4gICAgICAgICAgZnJvbSBudW1iZXJzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgaW5zZXJ0X251bWJlcjogU1FMXCJcIlwiaW5zZXJ0IGludG8gbnVtYmVycyAoIG4gKSB2YWx1ZXMgKCAkbiApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBuICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fc3F1YXJlczogU1FMXCJcIlwic2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgZnJvbSBzcXVhcmVzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAY3JlYXRlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAgICdzcXVhcmUnXG4gICAgICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgICAgICB2YWx1ZTogICAgICAgICAgICggbiApIC0+IG4gKiogMlxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3F1YXJlcyAgID0gbmV3IERicmljX3NxdWFyZXMgZGJfcGF0aFxuICAgICAgZm9yIG4gaW4gWyAwIC4uLiAxMCBdXG4gICAgICAgIHNxdWFyZXMuc3RhdGVtZW50cy5pbnNlcnRfbnVtYmVyLnJ1biB7IG4sIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICByb3dzID0gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICBAZXEgKCDOqWJiZGJyXzE1NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMCwgc3F1YXJlOiAwIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAxLCBzcXVhcmU6IDEgfVxuICAgICAgQGVxICggzqliYmRicl8xNTggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDIsIHNxdWFyZTogNCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMywgc3F1YXJlOiA5IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTYwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA0LCBzcXVhcmU6IDE2IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTYxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA1LCBzcXVhcmU6IDI1IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTYyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA2LCBzcXVhcmU6IDM2IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTYzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA3LCBzcXVhcmU6IDQ5IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTY0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA4LCBzcXVhcmU6IDY0IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTY1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA5LCBzcXVhcmU6IDgxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTY2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgdW5kZWZpbmVkXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVkZl9hZ2dyZWdhdGVzX3dpdGhfYnNxbDogLT5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3NxdWFyZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIG51bWJlcnMgKFxuICAgICAgICAgICAgbiBudW1iZXIgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IHNxdWFyZXMgYXMgc2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlKCBuICkgYXMgc3F1YXJlXG4gICAgICAgICAgZnJvbSBudW1iZXJzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgaW5zZXJ0X251bWJlcjogU1FMXCJcIlwiaW5zZXJ0IGludG8gbnVtYmVycyAoIG4gKSB2YWx1ZXMgKCAkbiApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBuICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fc3F1YXJlczogU1FMXCJcIlwic2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlLFxuICAgICAgICAgICAgcHJvZHVjdCggbiApICAgICAgYXMgcF9uLFxuICAgICAgICAgICAgcHJvZHVjdCggc3F1YXJlICkgYXMgcF9zcXVhcmVcbiAgICAgICAgICBmcm9tIHNxdWFyZXNcbiAgICAgICAgICB3aGVyZSBuIGJldHdlZW4gJHN0YXJ0IGFuZCAkc3RvcFxuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGluaXRpYWxpemU6IC0+XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgQGNyZWF0ZV9mdW5jdGlvblxuICAgICAgICAgIG5hbWU6ICAgICAgICAgICAnc3F1YXJlJ1xuICAgICAgICAgIGRldGVybWluaXN0aWM6ICB0cnVlXG4gICAgICAgICAgdmFyYXJnczogICAgICAgIGZhbHNlXG4gICAgICAgICAgdmFsdWU6ICAgICAgICAgICBzcXVhcmUgPSAoIG4gKSAtPiBuICoqIDJcbiAgICAgICAgQGNyZWF0ZV9hZ2dyZWdhdGVfZnVuY3Rpb25cbiAgICAgICAgICBuYW1lOiAgICAgICAgICAgJ3Byb2R1Y3QnXG4gICAgICAgICAgc3RhcnQ6ICAgICAgICAgIC0+IG51bGxcbiAgICAgICAgICBzdGVwOiAgICAgICAgICAgcHJvZHVjdCA9ICggdG90YWwsIGVsZW1lbnQgKSAtPlxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqliYmRicl8xNjcnLCB7IHRvdGFsLCBlbGVtZW50LCB9XG4gICAgICAgICAgICByZXR1cm4gKCB0b3RhbCA/IDEgKSAqIGVsZW1lbnRcbiAgICAgICAgO251bGxcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHNxdWFyZXMgICA9IG5ldyBEYnJpY19zcXVhcmVzIGRiX3BhdGhcbiAgICAgIGZvciBuIGluIFsgMCAuLi4gMTAgXVxuICAgICAgICBzcXVhcmVzLnN0YXRlbWVudHMuaW5zZXJ0X251bWJlci5ydW4geyBuLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xNjgnLCByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMiwgc3RvcDogMywgfVxuICAgICAgcm93cyA9IHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMiwgc3RvcDogMywgfVxuICAgICAgQGVxICggzqliYmRicl8xNjkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDIsIHNxdWFyZTogNCwgcF9uOiA2LCBwX3NxdWFyZTogMzYgfVxuICAgICAgQGVxICggzqliYmRicl8xNzAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB1bmRlZmluZWRcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdWRmX3RhYmxlX2Z1bmN0aW9uX3dpdGhfYnNxbDogLT5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3BocmFzZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIHBocmFzZXMgKFxuICAgICAgICAgICAgcGhyYXNlIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIGluc2VydF9waHJhc2U6IFNRTFwiXCJcImluc2VydCBpbnRvIHBocmFzZXMgKCBwaHJhc2UgKSB2YWx1ZXMgKCAkcGhyYXNlIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIHBocmFzZSApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgIHNlbGVjdF9mcm9tX3BocmFzZXM6IFNRTFwiXCJcIlxuICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICAqXG4gICAgICAgICAgICBmcm9tXG4gICAgICAgICAgICAgIHBocmFzZXMgYXMgcCxcbiAgICAgICAgICAgICAgcmVfbWF0Y2hlcyggcC5waHJhc2UsICRtYXRjaGVyICkgYXMgcnhcbiAgICAgICAgICAgIG9yZGVyIGJ5IHAucGhyYXNlO1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpbml0aWFsaXplOiAtPlxuICAgICAgICBzdXBlcigpXG4gICAgICAgIEBjcmVhdGVfdGFibGVfZnVuY3Rpb25cbiAgICAgICAgICBuYW1lOiAgICAgICAgICdyZV9tYXRjaGVzJ1xuICAgICAgICAgIGNvbHVtbnM6ICAgICAgWyAnbWF0Y2gnLCAnY2FwdHVyZScsIF1cbiAgICAgICAgICBwYXJhbWV0ZXJzOiAgIFsgJ3RleHQnLCAncGF0dGVybicsIF1cbiAgICAgICAgICByb3dzOiAoIHRleHQsIHBhdHRlcm4gKSAtPlxuICAgICAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwIHBhdHRlcm4sICdnJ1xuICAgICAgICAgICAgZm9yIG1hdGNoIGZyb20gdGV4dC5tYXRjaEFsbCByZWdleFxuICAgICAgICAgICAgICB5aWVsZCBbIG1hdGNoWyAwIF0sIG1hdGNoWyAxIF0sIF1cbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIDtudWxsXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBwaHJhc2VzICAgPSBuZXcgRGJyaWNfcGhyYXNlcyBkYl9wYXRoXG4gICAgICBmb3IgcGhyYXNlIGluIFsgJ2VsZXZlbicsICdmaXZlJywgJ25pbmUnLCAnb25lJywgJ29uZSBwb2ludCBmaXZlJywgJ3NldmVuJywgJ3RocmVlIHBvaW50IG9uZScgXVxuICAgICAgICBwaHJhc2VzLnN0YXRlbWVudHMuaW5zZXJ0X3BocmFzZS5ydW4geyBwaHJhc2UsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE3MScsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3BocmFzZXMuaXRlcmF0ZSB7IG1hdGNoZXI6ICdeLiooW2FlaW91XS5lKS4qJCcsIH1cbiAgICAgICMgZWNobygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xNzInLCByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9waHJhc2VzLml0ZXJhdGUgeyBtYXRjaGVyOiAnKFteYWVpb3VdP1thZWlvdV0rKSg/PVttbnZdKScsIH1cbiAgICAgIHJvd3MgPSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fcGhyYXNlcy5pdGVyYXRlIHsgbWF0Y2hlcjogJyhbXmFlaW91XT9bYWVpb3VdKykoPz1bbW52XSknLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnZWxldmVuJywgbWF0Y2g6ICdsZScsIGNhcHR1cmU6ICdsZScgfVxuICAgICAgQGVxICggzqliYmRicl8xNzQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ2VsZXZlbicsIG1hdGNoOiAndmUnLCBjYXB0dXJlOiAndmUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTc1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdmaXZlJywgbWF0Y2g6ICdmaScsIGNhcHR1cmU6ICdmaScgfVxuICAgICAgQGVxICggzqliYmRicl8xNzYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ25pbmUnLCBtYXRjaDogJ25pJywgY2FwdHVyZTogJ25pJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnb25lJywgbWF0Y2g6ICdvJywgY2FwdHVyZTogJ28nIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTc4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdvbmUgcG9pbnQgZml2ZScsIG1hdGNoOiAnbycsIGNhcHR1cmU6ICdvJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnb25lIHBvaW50IGZpdmUnLCBtYXRjaDogJ3BvaScsIGNhcHR1cmU6ICdwb2knIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTgwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdvbmUgcG9pbnQgZml2ZScsIG1hdGNoOiAnZmknLCBjYXB0dXJlOiAnZmknIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTgxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdzZXZlbicsIG1hdGNoOiAnc2UnLCBjYXB0dXJlOiAnc2UnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTgyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdzZXZlbicsIG1hdGNoOiAndmUnLCBjYXB0dXJlOiAndmUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTgzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICd0aHJlZSBwb2ludCBvbmUnLCBtYXRjaDogJ3BvaScsIGNhcHR1cmU6ICdwb2knIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTg0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICd0aHJlZSBwb2ludCBvbmUnLCBtYXRjaDogJyBvJywgY2FwdHVyZTogJyBvJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmaWxlX21pcnJvcl9hc190YWJsZV9mdW5jdGlvbjogLT5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3BocmFzZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgZGF0YXNvdXJjZXMgKFxuICAgICAgICAgICAgZHNrZXkgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgICBwYXRoIHRleHQgbm90IG51bGwgKTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdmlldyBtaXJyb3IgYXMgc2VsZWN0XG4gICAgICAgICAgICAqXG4gICAgICAgICAgZnJvbVxuICAgICAgICAgICAgZGF0YXNvdXJjZXMgYXMgZHMsXG4gICAgICAgICAgICBmaWxlX2xpbmVzKCBkcy5wYXRoICkgYXMgZmxcbiAgICAgICAgICBvcmRlciBieSBkcy5kc2tleSwgZmwubGluZV9ucjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUga2V5d29yZHMgKFxuICAgICAgICAgICAgZHNrZXkgICB0ZXh0ICAgIG5vdCBudWxsLFxuICAgICAgICAgICAgbGluZV9uciBpbnRlZ2VyIG5vdCBudWxsLFxuICAgICAgICAgICAga2V5d29yZCB0ZXh0ICAgIG5vdCBudWxsLFxuICAgICAgICAgIGZvcmVpZ24ga2V5ICggZHNrZXkgKSByZWZlcmVuY2VzIGRhdGFzb3VyY2VzICggZHNrZXkgKSxcbiAgICAgICAgICBwcmltYXJ5IGtleSAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgKTtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfZGF0YXNvdXJjZTogU1FMXCJcIlwiaW5zZXJ0IGludG8gZGF0YXNvdXJjZXMgKCBkc2tleSwgcGF0aCApIHZhbHVlcyAoICRkc2tleSwgJHBhdGggKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggZHNrZXkgKSBkbyB1cGRhdGUgc2V0IHBhdGggPSAkcGF0aDtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfa2V5d29yZDogU1FMXCJcIlwiaW5zZXJ0IGludG8ga2V5d29yZHMgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApIHZhbHVlcyAoICRkc2tleSwgJGxpbmVfbnIsICRrZXl3b3JkIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9kYXRhc291cmNlczogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBkYXRhc291cmNlcyBvcmRlciBieSBkc2tleTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9rZXl3b3JkczogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBrZXl3b3JkcyBvcmRlciBieSBrZXl3b3JkLCBkc2tleSwgbGluZV9ucjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9taXJyb3I6IFNRTFwiXCJcInNlbGVjdCAqIGZyb20gbWlycm9yIG9yZGVyIGJ5IGRza2V5O1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpbml0aWFsaXplOiAtPlxuICAgICAgICBzdXBlcigpXG4gICAgICAgIEBjcmVhdGVfdGFibGVfZnVuY3Rpb25cbiAgICAgICAgICBuYW1lOiAgICAgICAgICdmaWxlX2xpbmVzJ1xuICAgICAgICAgIGNvbHVtbnM6ICAgICAgWyAnbGluZV9ucicsICdsaW5lJywgXVxuICAgICAgICAgIHBhcmFtZXRlcnM6ICAgWyAncGF0aCcsIF1cbiAgICAgICAgICByb3dzOiAoIHBhdGggKSAtPlxuICAgICAgICAgICAgZm9yIHsgbG5yOiBsaW5lX25yLCBsaW5lLCBlb2wsIH0gZnJvbSBHVVkuZnMud2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoXG4gICAgICAgICAgICAgIHlpZWxkIHsgbGluZV9uciwgbGluZSwgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgO251bGxcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHBocmFzZXMgICA9IG5ldyBEYnJpY19waHJhc2VzIGRiX3BhdGhcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTg2ID0gLT4gKCBwaHJhc2VzLnByZXBhcmUgU1FMXCJcIlwicHJhZ21hIGZvcmVpZ25fa2V5c1wiXCJcIiApLmdldCgpICksIHsgZm9yZWlnbl9rZXlzOiAxLCAgICAgIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTg3ID0gLT4gKCBwaHJhc2VzLnByZXBhcmUgU1FMXCJcIlwicHJhZ21hIGpvdXJuYWxfbW9kZVwiXCJcIiApLmdldCgpICksIHsgam91cm5hbF9tb2RlOiAnd2FsJywgIH1cbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBkbyA9PlxuICAgICAgIyAgIGRza2V5ID0gJ3JlYWRtZSdcbiAgICAgICMgICBwYXRoICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvUkVBRE1FLm1kJ1xuICAgICAgIyAgIHBocmFzZXMuc3RhdGVtZW50cy5pbnNlcnRfZGF0YXNvdXJjZS5ydW4geyBkc2tleSwgcGF0aCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRza2V5ID0gJ3BhY2thZ2UtanNvbidcbiAgICAgICAgcGF0aCAgPSBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL3BhY2thZ2UuanNvbidcbiAgICAgICAgcGhyYXNlcy5zdGF0ZW1lbnRzLmluc2VydF9kYXRhc291cmNlLnJ1biB7IGRza2V5LCBwYXRoIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE4OCcsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX2RhdGFzb3VyY2VzLml0ZXJhdGUoKVxuICAgICAgIyBlY2hvKClcbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE4OScsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX21pcnJvci5pdGVyYXRlKClcbiAgICAgICMgZWNobygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZvciB7IGRza2V5LCBsaW5lX25yLCBsaW5lLCB9IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX21pcnJvci5pdGVyYXRlKClcbiAgICAgICAga2V5d29yZHMgPSBsaW5lLnNwbGl0IC8oPzpcXHB7Wn0rKXwoKD86XFxwe0x9Kyl8KD86XFxwe059Kyl8KD86XFxwe1N9KykpL3ZcbiAgICAgICAgIyBkZWJ1ZyAnzqliYmRicl8xOTAnLCBsaW5lX25yLCBycHIga2V5d29yZHNcbiAgICAgICAgZm9yIGtleXdvcmQgaW4ga2V5d29yZHNcbiAgICAgICAgICBjb250aW51ZSB1bmxlc3Mga2V5d29yZD9cbiAgICAgICAgICBjb250aW51ZSBpZiBrZXl3b3JkIGlzICcnXG4gICAgICAgICAgcGhyYXNlcy53LnN0YXRlbWVudHMuaW5zZXJ0X2tleXdvcmQucnVuIHsgZHNrZXksIGxpbmVfbnIsIGtleXdvcmQsIH1cbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE5MScsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX2tleXdvcmRzLml0ZXJhdGUoKVxuICAgICAgIyBlY2hvKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmaWxlX21pcnJvcl93aXRoX2ludGVncmF0ZWRfaW5zZXJ0czogLT5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3BocmFzZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgZGF0YXNvdXJjZXMgKFxuICAgICAgICAgICAgZHNrZXkgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgICBwYXRoIHRleHQgbm90IG51bGwgKTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdmlldyBtaXJyb3IgYXMgc2VsZWN0XG4gICAgICAgICAgICAqXG4gICAgICAgICAgZnJvbVxuICAgICAgICAgICAgZGF0YXNvdXJjZXMgYXMgZHMsXG4gICAgICAgICAgICBmaWxlX2xpbmVzKCBkcy5wYXRoICkgYXMgZmxcbiAgICAgICAgICBvcmRlciBieSBkcy5kc2tleSwgZmwubGluZV9ucjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUga2V5d29yZHMgKFxuICAgICAgICAgICAgZHNrZXkgICB0ZXh0ICAgIG5vdCBudWxsLFxuICAgICAgICAgICAgbGluZV9uciBpbnRlZ2VyIG5vdCBudWxsLFxuICAgICAgICAgICAga2V5d29yZCB0ZXh0ICAgIG5vdCBudWxsLFxuICAgICAgICAgIGZvcmVpZ24ga2V5ICggZHNrZXkgKSByZWZlcmVuY2VzIGRhdGFzb3VyY2VzICggZHNrZXkgKSxcbiAgICAgICAgICBwcmltYXJ5IGtleSAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgKTtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfZGF0YXNvdXJjZTogU1FMXCJcIlwiaW5zZXJ0IGludG8gZGF0YXNvdXJjZXMgKCBkc2tleSwgcGF0aCApIHZhbHVlcyAoICRkc2tleSwgJHBhdGggKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggZHNrZXkgKSBkbyB1cGRhdGUgc2V0IHBhdGggPSAkcGF0aDtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfa2V5d29yZDogU1FMXCJcIlwiaW5zZXJ0IGludG8ga2V5d29yZHMgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApIHZhbHVlcyAoICRkc2tleSwgJGxpbmVfbnIsICRrZXl3b3JkIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9kYXRhc291cmNlczogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBkYXRhc291cmNlcyBvcmRlciBieSBkc2tleTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9rZXl3b3JkczogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBrZXl3b3JkcyBvcmRlciBieSBrZXl3b3JkLCBkc2tleSwgbGluZV9ucjtcIlwiXCJcbiAgICAgICAgbG9jYXRpb25zX2Zyb21fa2V5d29yZDogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBrZXl3b3Jkc1xuICAgICAgICAgIHdoZXJlIGtleXdvcmQgPSAka2V5d29yZFxuICAgICAgICAgIG9yZGVyIGJ5IGtleXdvcmQsIGRza2V5LCBsaW5lX25yO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNlbGVjdF9mcm9tX21pcnJvcjogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBtaXJyb3Igb3JkZXIgYnkgZHNrZXk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcG9wdWxhdGVfa2V5d29yZHM6IFNRTFwiXCJcIlxuICAgICAgICAgIGluc2VydCBpbnRvIGtleXdvcmRzICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKVxuICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgIGRzLmRza2V5ICAgIGFzIGRza2V5LFxuICAgICAgICAgICAgICBtaS5saW5lX25yICBhcyBsaW5lX25yLFxuICAgICAgICAgICAgICBzdy5rZXl3b3JkICBhcyBrZXl3b3JkXG4gICAgICAgICAgICBmcm9tIGRhdGFzb3VyY2VzICAgICAgICBhcyBkc1xuICAgICAgICAgICAgam9pbiBtaXJyb3IgICAgICAgICAgICAgYXMgbWkgdXNpbmcgKCBkc2tleSApLFxuICAgICAgICAgICAgc3BsaXRfd29yZHMoIG1pLmxpbmUgKSAgYXMgc3dcbiAgICAgICAgICAgIHdoZXJlIHRydWUgLS0gd2hlcmUgY2xhdXNlIGp1c3QgYSBzeW50YWN0aWMgZ3VhcmQgYXMgcGVyIGh0dHBzOi8vc3FsaXRlLm9yZy9sYW5nX3Vwc2VydC5odG1sXG4gICAgICAgICAgICBvbiBjb25mbGljdCBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpbml0aWFsaXplOiAtPlxuICAgICAgICBzdXBlcigpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGNyZWF0ZV90YWJsZV9mdW5jdGlvblxuICAgICAgICAgIG5hbWU6ICAgICAgICAgICAnc3BsaXRfd29yZHMnXG4gICAgICAgICAgY29sdW1uczogICAgICAgIFsgJ2tleXdvcmQnLCBdXG4gICAgICAgICAgcGFyYW1ldGVyczogICAgIFsgJ2xpbmUnLCBdXG4gICAgICAgICAgcm93czogKCBsaW5lICkgLT5cbiAgICAgICAgICAgIGtleXdvcmRzID0gbGluZS5zcGxpdCAvKD86XFxwe1p9Kyl8KCg/OlxccHtMfSspfCg/OlxccHtOfSspfCg/OlxccHtTfSspKS92XG4gICAgICAgICAgICAjIGRlYnVnICfOqWJiZGJyXzE5MicsIGxpbmVfbnIsIHJwciBrZXl3b3Jkc1xuICAgICAgICAgICAgZm9yIGtleXdvcmQgaW4ga2V5d29yZHNcbiAgICAgICAgICAgICAgY29udGludWUgdW5sZXNzIGtleXdvcmQ/XG4gICAgICAgICAgICAgIGNvbnRpbnVlIGlmIGtleXdvcmQgaXMgJydcbiAgICAgICAgICAgICAgeWllbGQgeyBrZXl3b3JkLCB9XG4gICAgICAgICAgICA7bnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBjcmVhdGVfdGFibGVfZnVuY3Rpb25cbiAgICAgICAgICBuYW1lOiAgICAgICAgICdmaWxlX2xpbmVzJ1xuICAgICAgICAgIGNvbHVtbnM6ICAgICAgWyAnbGluZV9ucicsICdsaW5lJywgXVxuICAgICAgICAgIHBhcmFtZXRlcnM6ICAgWyAncGF0aCcsIF1cbiAgICAgICAgICByb3dzOiAoIHBhdGggKSAtPlxuICAgICAgICAgICAgZm9yIHsgbG5yOiBsaW5lX25yLCBsaW5lLCBlb2wsIH0gZnJvbSBHVVkuZnMud2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoXG4gICAgICAgICAgICAgIHlpZWxkIHsgbGluZV9uciwgbGluZSwgfVxuICAgICAgICAgICAgO251bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgcGhyYXNlcyAgID0gbmV3IERicmljX3BocmFzZXMgZGJfcGF0aFxuICAgICAgIyBkZWJ1ZyAnzqliYmRicl8xOTMnLCBwaHJhc2VzLnRlYXJkb3duKClcbiAgICAgICMgZGVidWcgJ86pYmJkYnJfMTk0JywgcGhyYXNlcy5yZWJ1aWxkKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTk1ID0gLT4gKCBwaHJhc2VzLnByZXBhcmUgU1FMXCJcIlwicHJhZ21hIGZvcmVpZ25fa2V5c1wiXCJcIiApLmdldCgpICksIHsgZm9yZWlnbl9rZXlzOiAxLCAgICAgIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTk2ID0gLT4gKCBwaHJhc2VzLnByZXBhcmUgU1FMXCJcIlwicHJhZ21hIGpvdXJuYWxfbW9kZVwiXCJcIiApLmdldCgpICksIHsgam91cm5hbF9tb2RlOiAnd2FsJywgIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZHNrZXkgPSAnaHVtZHVtJ1xuICAgICAgICBwYXRoICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hc3NldHMvYnJpY2FicmFjL2h1bXB0eS1kdW1wdHkubWQnXG4gICAgICAgIHBocmFzZXMuc3RhdGVtZW50cy5pbnNlcnRfZGF0YXNvdXJjZS5ydW4geyBkc2tleSwgcGF0aCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHBocmFzZXMuc3RhdGVtZW50cy5wb3B1bGF0ZV9rZXl3b3Jkcy5ydW4oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTk3Jywgcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMubG9jYXRpb25zX2Zyb21fa2V5d29yZC5pdGVyYXRlIHsga2V5d29yZDogJ3Rob3VnaHQnLCB9XG4gICAgICAjIGVjaG8oKVxuICAgICAgcm93cyA9IHBocmFzZXMuc3RhdGVtZW50cy5sb2NhdGlvbnNfZnJvbV9rZXl3b3JkLml0ZXJhdGUgeyBrZXl3b3JkOiAndGhvdWdodCcsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTk4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDE1LCBrZXl3b3JkOiAndGhvdWdodCcgfVxuICAgICAgQGVxICggzqliYmRicl8xOTkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMzQsIGtleXdvcmQ6ICd0aG91Z2h0JyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIwMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMjAxJywgcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMubG9jYXRpb25zX2Zyb21fa2V5d29yZC5pdGVyYXRlIHsga2V5d29yZDogJ3NoZScsIH1cbiAgICAgICMgZWNobygpXG4gICAgICByb3dzID0gcGhyYXNlcy5zdGF0ZW1lbnRzLmxvY2F0aW9uc19mcm9tX2tleXdvcmQuaXRlcmF0ZSB7IGtleXdvcmQ6ICdzaGUnLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIwMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAyLCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIwMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAzLCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIwNCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiA0LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIwNSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiA1LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIwNiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAxNSwga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8yMDcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMTcsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjA4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDE4LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIwOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAyNiwga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8yMTAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMzQsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjExID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDM2LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIxMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX3N0ZF92YXJpYWJsZXNfYW5kX3NlcXVlbmNlczogLT5cbiAgICB7IGxldHMsXG4gICAgICBmcmVlemUsICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9sZXRzZnJlZXpldGhhdF9pbmZyYSgpLnNpbXBsZVxuICAgIGNmZ19kb19zaG93X3ZhcmlhYmxlcyAgICAgICAgID0gZmFsc2VcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRiID0gbmV3IERicmljX3N0ZCAnOm1lbW9yeTonXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBAdGhyb3dzICggzqliYmRicl8yMTMgPSAtPiBkYi5zdGRfd2l0aF92YXJpYWJsZXMgLT4gZGIuc3RkX3dpdGhfdmFyaWFibGVzIC0+IG51bGwgICksIC9pbGxlZ2FsIHRvIG5lc3QgYHN0ZF93aXRoX3ZhcmlhYmxlc1xcKFxcKWAgY29udGV4dHMvXG4gICAgQHRocm93cyAoIM6pYmJkYnJfMjE0ID0gLT4gZGIuc3RkX3NldF92YXJpYWJsZSAnbXluYW1lJywgJ215dmFsdWUnICAgICAgICAgICAgICAgICApLCAvaWxsZWdhbCB0byBzZXQgdmFyaWFibGUvXG4gICAgIyBAdGhyb3dzICggzqliYmRicl8yMTUgPSAtPiBkYi5zdGRfZ2V0X3ZhcmlhYmxlICdteW5hbWUnICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9pbGxlZ2FsIHRvIGdldCB2YXJpYWJsZS9cbiAgICBAdGhyb3dzICggzqliYmRicl8yMTYgPSAtPiBkYi5zdGRfZ2V0X3ZhcmlhYmxlICdteW5hbWUnICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC91bmtub3duIHZhcmlhYmxlL1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgdmFyaWFibGVzID0gKGRiLl9zaG93X3ZhcmlhYmxlcyBjZmdfZG9fc2hvd192YXJpYWJsZXMgKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzID0+XG4gICAgICBAdGhyb3dzICggzqliYmRicl8yMTcgPSAtPiBkYi5zdGRfZ2V0X3ZhcmlhYmxlICdteW5hbWUnICksIC91bmtub3duIHZhcmlhYmxlL1xuICAgICAgQGVxICggzqliYmRicl8yMTggPSAtPiAoZGIuX3Nob3dfdmFyaWFibGVzIGNmZ19kb19zaG93X3ZhcmlhYmxlcyApICksIHsgJ3NlcTpnbG9iYWw6cm93aWQnOiB7IHN2OiAwLCBzZDogMSwgY3Y6IDAsIGNkOiAxLCB0djogdW5kZWZpbmVkLCBndjogMCB9IH1cbiAgICAgICMjIyBUQUlOVCB1c2UgQVBJICMjI1xuICAgICAgZGIuc3RhdGUuc3RkX3ZhcmlhYmxlcyA9IGxldHMgZGIuc3RhdGUuc3RkX3ZhcmlhYmxlcywgKCBkICkgLT5cbiAgICAgICAgZFsgJ3NlcTphcHA6Y291bnRlcicgXSA9IHsgbmFtZTogJ3NlcTphcHA6Y291bnRlcicsIHZhbHVlOiA3LCBkZWx0YTogKzMsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjE5ID0gLT4gKGRiLl9zaG93X3ZhcmlhYmxlcyBjZmdfZG9fc2hvd192YXJpYWJsZXMgKSApLCB7ICdzZXE6YXBwOmNvdW50ZXInOiB7IHN2OiB1bmRlZmluZWQsIHNkOiB1bmRlZmluZWQsIGN2OiA3LCBjZDogMywgdHY6IHVuZGVmaW5lZCwgZ3Y6IDcgfSwgJ3NlcTpnbG9iYWw6cm93aWQnOiB7IHN2OiAwLCBzZDogMSwgY3Y6IDAsIGNkOiAxLCB0djogdW5kZWZpbmVkLCBndjogMCB9IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjIwID0gLT4gZGIuc3RkX2dldF9uZXh0X2luX3NlcXVlbmNlICdzZXE6YXBwOmNvdW50ZXInICksIDEwXG4gICAgICBAZXEgKCDOqWJiZGJyXzIyMSA9IC0+IGRiLnN0ZF9nZXRfbmV4dF9pbl9zZXF1ZW5jZSAnc2VxOmFwcDpjb3VudGVyJyApLCAxM1xuICAgICAgZGIuc3RkX3NldF92YXJpYWJsZSAnZnV6eicsIDExLjVcbiAgICAgIGRiLnN0ZF9zZXRfdmFyaWFibGUgJ25hbWUnLCAnQm9iJ1xuICAgICAgQGVxICggzqliYmRicl8yMjIgPSAtPiBkYi5zdGRfZ2V0X3ZhcmlhYmxlICdmdXp6JyApLCAxMS41XG4gICAgICBAZXEgKCDOqWJiZGJyXzIyMyA9IC0+IGRiLnN0ZF9nZXRfdmFyaWFibGUgJ25hbWUnICksICdCb2InXG4gICAgICBAZXEgKCDOqWJiZGJyXzIyNCA9IC0+IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzICkgKSwgeyBmdXp6OiB7IHN2OiB1bmRlZmluZWQsIHNkOiB1bmRlZmluZWQsIGN2OiAxMS41LCBjZDogbnVsbCwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDExLjUsIH0sIG5hbWU6IHsgc3Y6IHVuZGVmaW5lZCwgc2Q6IHVuZGVmaW5lZCwgY3Y6ICdCb2InLCBjZDogbnVsbCwgdHY6IHVuZGVmaW5lZCwgZ3Y6ICdCb2InIH0sICdzZXE6YXBwOmNvdW50ZXInOiB7IHN2OiB1bmRlZmluZWQsIHNkOiB1bmRlZmluZWQsIGN2OiAxMywgY2Q6IDMsIHR2OiB1bmRlZmluZWQsIGd2OiAxMyB9LCAnc2VxOmdsb2JhbDpyb3dpZCc6IHsgc3Y6IDAsIHNkOiAxLCBjdjogMCwgY2Q6IDEsIHR2OiB1bmRlZmluZWQsIGd2OiAwIH0gfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyB7IG5hbWU6ICdBbGljZScsIGpvYjogJ2VuZ2luZWVyJywgfSwgPT5cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjI1ID0gLT4gZGIuc3RkX2dldF92YXJpYWJsZSAnbmFtZScgKSwgJ0FsaWNlJ1xuICAgICAgIyBkZWJ1ZyAnzqliYmRicl8yMjYnLCB7IG5hbWUsIGpvYiwgfVxuICAgICAgQGVxICggzqliYmRicl8yMjcgPSAtPiAoZGIuX3Nob3dfdmFyaWFibGVzIGNmZ19kb19zaG93X3ZhcmlhYmxlcyApICksIHsgZnV6ejogeyBzdjogMTEuNSwgc2Q6IG51bGwsIGN2OiAxMS41LCBjZDogbnVsbCwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDExLjUgfSwgam9iOiB7IHN2OiB1bmRlZmluZWQsIHNkOiB1bmRlZmluZWQsIGN2OiB1bmRlZmluZWQsIGNkOiB1bmRlZmluZWQsIHR2OiAnZW5naW5lZXInLCBndjogJ2VuZ2luZWVyJyB9LCBuYW1lOiB7IHN2OiAnXCJCb2JcIicsIHNkOiBudWxsLCBjdjogJ0JvYicsIGNkOiBudWxsLCB0djogJ0FsaWNlJywgZ3Y6ICdBbGljZScgfSwgJ3NlcTphcHA6Y291bnRlcic6IHsgc3Y6IDEzLCBzZDogMywgY3Y6IDEzLCBjZDogMywgdHY6IHVuZGVmaW5lZCwgZ3Y6IDEzIH0sICdzZXE6Z2xvYmFsOnJvd2lkJzogeyBzdjogMCwgc2Q6IDEsIGN2OiAwLCBjZDogMSwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDAgfSB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqliYmRicl8yMjggPSAtPiAoZGIuX3Nob3dfdmFyaWFibGVzIGNmZ19kb19zaG93X3ZhcmlhYmxlcyApICksIHsgZnV6ejogeyBzdjogMTEuNSwgc2Q6IG51bGwsIGN2OiAxMS41LCBjZDogbnVsbCwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDExLjUgfSwgbmFtZTogeyBzdjogJ1wiQm9iXCInLCBzZDogbnVsbCwgY3Y6ICdCb2InLCBjZDogbnVsbCwgdHY6IHVuZGVmaW5lZCwgZ3Y6ICdCb2InIH0sICdzZXE6YXBwOmNvdW50ZXInOiB7IHN2OiAxMywgc2Q6IDMsIGN2OiAxMywgY2Q6IDMsIHR2OiB1bmRlZmluZWQsIGd2OiAxMyB9LCAnc2VxOmdsb2JhbDpyb3dpZCc6IHsgc3Y6IDAsIHNkOiAxLCBjdjogMCwgY2Q6IDEsIHR2OiB1bmRlZmluZWQsIGd2OiAwIH0gfVxuICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyA9PlxuICAgICAgQGVxICggzqliYmRicl8yMjkgPSAtPiAoZGIuX3Nob3dfdmFyaWFibGVzIGNmZ19kb19zaG93X3ZhcmlhYmxlcyApICksIHsgZnV6ejogeyBzdjogMTEuNSwgc2Q6IG51bGwsIGN2OiAxMS41LCBjZDogbnVsbCwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDExLjUgfSwgbmFtZTogeyBzdjogJ1wiQm9iXCInLCBzZDogbnVsbCwgY3Y6ICdCb2InLCBjZDogbnVsbCwgdHY6IHVuZGVmaW5lZCwgZ3Y6ICdCb2InIH0sICdzZXE6YXBwOmNvdW50ZXInOiB7IHN2OiAxMywgc2Q6IDMsIGN2OiAxMywgY2Q6IDMsIHR2OiB1bmRlZmluZWQsIGd2OiAxMyB9LCAnc2VxOmdsb2JhbDpyb3dpZCc6IHsgc3Y6IDAsIHNkOiAxLCBjdjogMCwgY2Q6IDEsIHR2OiB1bmRlZmluZWQsIGd2OiAwIH0gfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyA9PlxuICAgICAgIyMjIE1vZGVsIHRoYXQgc2hvd3MgaG93IHRvIGluc2VydCBzZXF1ZW50aWFsIFJvd0lEcyB1c2luZyBhIHByaXZhdGUgdGFibGUsIGFuIGFzc29jaWF0ZWQgcHVibGljXG4gICAgICB2aWV3LCBhbmQgYSBgaW5zdGVhZCBvZiBpbnNlcnRgIHRyaWdnZXI6ICMjI1xuICAgICAgZGIuc3RkX3NldF92YXJpYWJsZSAnc2VxOmxldHRlcnMnLCAwLCAxXG4gICAgICBkYi5leGVjdXRlIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBfbGV0dGVycyAoXG4gICAgICAgICAgcm93aWQgICB0ZXh0ICAgIHVuaXF1ZSAgbm90IG51bGwsXG4gICAgICAgICAgbGV0dGVyICB0ZXh0ICAgIHVuaXF1ZSAgbm90IG51bGwsXG4gICAgICAgIC0tIHByaW1hcnkga2V5ICggcm93aWQgKVxuICAgICAgICBjb25zdHJhaW50IFwizqljb25zdHJhaW50XzIzMFwiIGNoZWNrICggbGVuZ3RoKCBsZXR0ZXIgKSA9IDEgKVxuICAgICAgICApIHN0cmljdDtcIlwiXCJcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJcIlwiY3JlYXRlIHZpZXcgbGV0dGVycyBhcyBzZWxlY3QgKiBmcm9tIF9sZXR0ZXJzO1wiXCJcIlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJjcmVhdGUgdHJpZ2dlciBvbl9iZWZvcmVfaW5zZXJ0X2xldHRlcnNcbiAgICAgICAgaW5zdGVhZCBvZiBpbnNlcnQgb24gbGV0dGVyc1xuICAgICAgICAgIGZvciBlYWNoIHJvdyBiZWdpblxuICAgICAgICAgICAgaW5zZXJ0IGludG8gX2xldHRlcnMgKCByb3dpZCwgbGV0dGVyICkgdmFsdWVzXG4gICAgICAgICAgICAgIC0tICggJ3Q6bGV0dGVyczpSPScgfHwgY2FzdCggc3RkX2dldF9uZXh0X2luX3NlcXVlbmNlKCAnc2VxOmxldHRlcnMnICkgYXMgaW50ZWdlciApLCBuZXcubGV0dGVyICk7XG4gICAgICAgICAgICAgICggcHJpbnRmKCAndDpsZXR0ZXJzOlI9JWQnLCBzdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UoICdzZXE6bGV0dGVycycgKSApLCBuZXcubGV0dGVyICk7XG4gICAgICAgICAgICBlbmQ7XG4gICAgICAgIDtcIlwiXCJcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJcIlwiaW5zZXJ0IGludG8gbGV0dGVycyAoIGxldHRlciApIHZhbHVlcyAoICdhJyApLCAoICd6JyApO1wiXCJcIlxuICAgICAgIyBpbmZvICfOqWJiZGJyXzIzMScsIHJvdyBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gbGV0dGVycztcIlxuICAgICAgcm93cyA9IGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGxldHRlcnMgb3JkZXIgYnkgbGV0dGVyO1wiXG4gICAgICBAZXEgKCDOqWJiZGJyXzIzMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmxldHRlcnM6Uj0xJywgbGV0dGVyOiAnYScsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjMzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6bGV0dGVyczpSPTInLCBsZXR0ZXI6ICd6JywgfVxuICAgICAgQGVxICggzqliYmRicl8yMzQgPSAtPiByb3dzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyA9PlxuICAgICAgIyMjIE5PVEUgTW9kZWwgdGhhdCBzaG93cyBob3cgdG8gaW5zZXJ0IHJvd3Mgd2l0aCBzZXF1ZW50aWFsIFJvd0lEcyB1c2luZyBhIHRiYWxlIGFuZCBhbmQgYGFmdGVyXG4gICAgICBpbnNlcnRgIHRyaWdnZXIgdGhhdCB1cGRhdGVzIGByb3dpZGA6ICMjI1xuICAgICAgZGIuc3RkX3NldF92YXJpYWJsZSAnc2VxOm51bWJlcnMnLCAwLCAxXG4gICAgICBkYi5leGVjdXRlIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBudW1iZXJzIChcbiAgICAgICAgICByb3dpZCAgIHRleHQgICAgdW5pcXVlICBub3QgbnVsbCBkZWZhdWx0ICduZXdfcm93aWQnLFxuICAgICAgICAgIG51bWJlciAgdGV4dCAgICB1bmlxdWUgIG5vdCBudWxsXG4gICAgICAgICkgc3RyaWN0O1wiXCJcIlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJjcmVhdGUgdHJpZ2dlciBvbl9hZnRlcl9pbnNlcnRfb25fbnVtYmVyc1xuICAgICAgICBhZnRlciBpbnNlcnQgb24gbnVtYmVycyBmb3IgZWFjaCByb3cgYmVnaW5cbiAgICAgICAgICAgIHVwZGF0ZSBudW1iZXJzIHNldCByb3dpZCA9IHByaW50ZiggJ3Q6bnVtYmVyczpSPSVkJywgc3RkX2dldF9uZXh0X2luX3NlcXVlbmNlKCAnc2VxOm51bWJlcnMnICkgKVxuICAgICAgICAgICAgICB3aGVyZSByb3dpZCA9ICduZXdfcm93aWQnO1xuICAgICAgICAgICAgZW5kO1xuICAgICAgICA7XCJcIlwiXG4gICAgICBkYi5leGVjdXRlIFNRTFwiXCJcImluc2VydCBpbnRvIG51bWJlcnMgKCBudW1iZXIgKSB2YWx1ZXMgKCAndW5vJyApLCAoICdkdWUnICk7XCJcIlwiXG4gICAgICAjIGluZm8gJ86pYmJkYnJfMjM1Jywgcm93IGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBudW1iZXJzO1wiXG4gICAgICByb3dzID0gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gbnVtYmVycyBvcmRlciBieSByb3dpZDtcIlxuICAgICAgQGVxICggzqliYmRicl8yMzYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpudW1iZXJzOlI9MScsIG51bWJlcjogJ3VubycsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjM3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6bnVtYmVyczpSPTInLCBudW1iZXI6ICdkdWUnLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIzOCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjIyMgTk9URSBNb2RlbCB0aGF0IHNob3dzIGhvdyB0byBidWlsZCBhIHBhcmFtZXRyaXplZCB2aWV3OiAjIyNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIyMgcmVwZWF0IGVhcmxpZXIgdGVzdCB0byBlbnN1cmUgd2Uga25vdyB3aGF0J3MgdGhlcmU6ICMjI1xuICAgICAgcm93cyA9IGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGxldHRlcnMgb3JkZXIgYnkgbGV0dGVyO1wiXG4gICAgICBAZXEgKCDOqWJiZGJyXzIzOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmxldHRlcnM6Uj0xJywgbGV0dGVyOiAnYScsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjQwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6bGV0dGVyczpSPTInLCBsZXR0ZXI6ICd6JywgfVxuICAgICAgQGVxICggzqliYmRicl8yNDEgPSAtPiByb3dzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBpbnNlcnRfbGV0dGVyID0gZGIucHJlcGFyZSBTUUxcIlwiXCJpbnNlcnQgaW50byBsZXR0ZXJzICggbGV0dGVyICkgdmFsdWVzICggJGxldHRlciApO1wiXCJcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJcIlwiY3JlYXRlIHZpZXcgcnVuX29mX2xldHRlcnMgYXNcbiAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAqXG4gICAgICAgICAgZnJvbSBsZXR0ZXJzXG4gICAgICAgICAgd2hlcmUgbGV0dGVyIGJldHdlZW4gc3RkX2dldF92YXJpYWJsZSggJ2ZpcnN0X2xldHRlcicgKSBhbmQgc3RkX2dldF92YXJpYWJsZSggJ2xhc3RfbGV0dGVyJyApO1wiXCJcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyA9PlxuICAgICAgICBmb3IgY2lkIGluIFsgKCAnYicuY29kZVBvaW50QXQgMCApIC4uICggJ3knLmNvZGVQb2ludEF0IDAgKSBdXG4gICAgICAgICAgbGV0dGVyID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkXG4gICAgICAgICAgaW5zZXJ0X2xldHRlci5ydW4geyBsZXR0ZXIsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkYi5zdGRfd2l0aF92YXJpYWJsZXMgeyBmaXJzdF9sZXR0ZXI6ICdnJywgbGFzdF9sZXR0ZXI6ICdtJyB9LCA9PlxuICAgICAgICByZXN1bHQgICAgPSAoIHJvdy5sZXR0ZXIgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHJ1bl9vZl9sZXR0ZXJzIG9yZGVyIGJ5IGxldHRlcjtcIiApLmpvaW4gJywnXG4gICAgICAgIHZhcmlhYmxlcyA9IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzIClcbiAgICAgICAgQGVxICggzqliYmRicl8yNDIgPSAtPiByZXN1bHQgICAgICAgICAgICAgICAgICAgICAgKSwgJ2csaCxpLGosayxsLG0nXG4gICAgICAgIEBlcSAoIM6pYmJkYnJfMjQzID0gLT4gdmFyaWFibGVzLmZpcnN0X2xldHRlcj8uZ3YgICksICdnJ1xuICAgICAgICBAZXEgKCDOqWJiZGJyXzI0NCA9IC0+IHZhcmlhYmxlcy5sYXN0X2xldHRlcj8uZ3YgICApLCAnbSdcbiAgICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjIyMgTk9URSBNb2RlbCB0aGF0IHNob3dzIGhvdyB0byB1c2UgYSBzZXF1ZW5jZSB0byBwcm9kdWNlIFJvd0lEczpcblxuICAgICAgKiBgJHRhYmxlLnJvd2lkYCBjb2x1bW4gaXMgZGVjbGFyZWQgKndpdGhvdXQqIGBnZW5lcmF0ZSBhbHdheXNgIGNsYXVzZSxcbiAgICAgICogdGh1cyBgJHRhYmxlLnJvd2lkYCBjYW4gYmUgdXNlZCBhcyBwcmltYXJ5IGtleTtcbiAgICAgICogYWRkaXRpb25hbGx5LCBtYXkgY29udGFpbiBjaGVjayBjbGF1c2UgZm9yIGAkdGFibGUucm93aWRgLlxuICAgICAgKiBBbiBgaW5zZXJ0YCBzdGF0ZW1lbnQgaXMgZGVmaW5lZCB0aGF0IGNhbGxzIGBzdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UoKWAgdG8gb2J0YWluIG5leHQgUm93SUQ7XG4gICAgICAqIGlmIERCLXdpZGUgdW5pcXVlIFJvd0lEcyBhcmUgZGVzaXJhYmxlLCB1c2UgYHByaW50ZigpYCB0byBlbWJlZCBudW1lcmljYWwgUm93SUQgaW4gc3RyaW5nLlxuICAgICAgKiBTdWdnZXN0ZWQgdG8gdXNlIGEgc3VmZml4IGBfdmAgdG8gaWRlbnRpZnkgc3RhdGVtZW50IGFzIHVzaW5nIHZhcmlhYmxlcyBhbmQgcmVxdWlyZXMgdG8gYmUgdXNlZFxuICAgICAgICBpbnNpZGUgYSBgZGIuc3RkX3dpdGhfdmFyaWFibGVzKClgIGNvbnRleHQgaGFuZGxlci5cbiAgICAgICogSW5zZXJ0IHN0YXRlbWVudCB0YWtlcyBjYXJlIG9mIHRoZSBpbXBsZW1lbnRhdGlvbiBkZXRhaWwgb2YgYXNzaWduaW5nIHRoZSBuZXh0IHVuaXF1ZSBSb3dJRDsgc2luY2VcbiAgICAgICAgaXRzIHZhbHVlIGlzIHBlcnNpc3RlZCBpbiB0aGUgREIsIGluc2VydHMgY2FuIGJlIGRvbmUgYWNyb3NzIHNldmVyYWwgc2Vzc2lvbnMgd2l0aG91dCBuZWVkaW5nIGFueVxuICAgICAgICBhZGRpdGlvbmFsIGNvZGUgYmVzaWRlcyB0aGUgY29udGV4dCBoYW5kbGVyLlxuICAgICAgIyMjXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyMjIE5PVEUgcGFydCBvZiBgRGJyaWMuYnVpbGRgIGxpc3Q6ICMjI1xuICAgICAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJjcmVhdGUgdGFibGUgcHJmeF93b3JkcyAoXG4gICAgICAgICAgcm93aWQgICAgIHRleHQgIHVuaXF1ZSAgbm90IG51bGwsXG4gICAgICAgICAgZW4gICAgICAgIHRleHQgICAgICAgICAgbm90IG51bGwsXG4gICAgICAgICAgZGUgICAgICAgIHRleHQgICAgICAgICAgbm90IG51bGwsXG4gICAgICAgIHByaW1hcnkga2V5ICggcm93aWQgKSxcbiAgICAgICAgY29uc3RyYWludCBcIs6pY29uc3RyYWludF8yNDVcIiBjaGVjayAoIHJvd2lkIHJlZ2V4cCAndDp3cmQ6Uj1cXFxcZCsnICkgKTtcIlwiXCJcbiAgICAgICMjIyBOT1RFIHBhcnQgb2YgYERicmljLnN0YXRlbWVudHNgIG9iamVjdDogIyMjXG4gICAgICBpbnNlcnRfd29yZF92ID0gZGIucHJlcGFyZSBTUUxcIlwiXCJpbnNlcnQgaW50byBwcmZ4X3dvcmRzICggcm93aWQsIGVuLCBkZSApIHZhbHVlcyAoXG4gICAgICAgICAgcHJpbnRmKCAndDp3cmQ6Uj0lZCcsIHN0ZF9nZXRfbmV4dF9pbl9zZXF1ZW5jZSggJ3NlcTpwcmZ4X3dvcmRzX3Jvd2lkJyApICksXG4gICAgICAgICAgJGVuLFxuICAgICAgICAgICRkZSApO1wiXCJcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMjIyBOT1RFIHBhcnQgb2YgcmVidWlsZCgpICg/LCBzdGlsbCB1bmNsZWFyKTogIyMjXG4gICAgICBkYi5zdGRfd2l0aF92YXJpYWJsZXMgPT5cbiAgICAgICAgZGIuc3RkX3NldF92YXJpYWJsZSAnc2VxOnByZnhfd29yZHNfcm93aWQnLCAxMDAsICsxMDBcbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIyMgTk9URSBpbiB0aGUgYXBwIHByb3BlcjogIyMjXG4gICAgICBkYi5zdGRfd2l0aF92YXJpYWJsZXMgPT5cbiAgICAgICAgaW5zZXJ0X3dvcmRfdi5ydW4geyBlbjogJ2RvZycsICBkZTogJ0h1bmQnLCAgIH1cbiAgICAgICAgaW5zZXJ0X3dvcmRfdi5ydW4geyBlbjogJ2NhdCcsICBkZTogJ0thdHplJywgIH1cbiAgICAgICAgaW5zZXJ0X3dvcmRfdi5ydW4geyBlbjogJ3dvcmQnLCBkZTogJ1dvcnQnLCAgIH1cbiAgICAgICAgaW5zZXJ0X3dvcmRfdi5ydW4geyBlbjogJ2NhbGwnLCBkZTogJ3J1ZmVuJywgIH1cbiAgICAgICAgaW5zZXJ0X3dvcmRfdi5ydW4geyBlbjogJ2NhbGwnLCBkZTogJ0FucnVmJywgIH1cbiAgICAgICAgaW5zZXJ0X3dvcmRfdi5ydW4geyBlbjogJ2Jvb2snLCBkZTogJ0J1Y2gnLCAgIH1cbiAgICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHZhcmlhYmxlcyA9IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzIClcbiAgICBAZXEgKCDOqWJiZGJyXzI0NiA9IC0+IHZhcmlhYmxlc1sgJ3NlcTpwcmZ4X3dvcmRzX3Jvd2lkJyBdPy5ndiAgKSwgNzAwXG4gICAgIyBlY2hvICfOqWJiZGJyXzI0NycsIHJvdyBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gcHJmeF93b3JkcyBvcmRlciBieSBkZTtcIlxuICAgIHJvd3MgPSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBwcmZ4X3dvcmRzIG9yZGVyIGJ5IGRlO1wiXG4gICAgQGVxICggzqliYmRicl8yNDggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDp3cmQ6Uj02MDAnLCBlbjogJ2NhbGwnLCBkZTogJ0FucnVmJyB9XG4gICAgQGVxICggzqliYmRicl8yNDkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDp3cmQ6Uj03MDAnLCBlbjogJ2Jvb2snLCBkZTogJ0J1Y2gnIH1cbiAgICBAZXEgKCDOqWJiZGJyXzI1MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OndyZDpSPTIwMCcsIGVuOiAnZG9nJywgZGU6ICdIdW5kJyB9XG4gICAgQGVxICggzqliYmRicl8yNTEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDp3cmQ6Uj0zMDAnLCBlbjogJ2NhdCcsIGRlOiAnS2F0emUnIH1cbiAgICBAZXEgKCDOqWJiZGJyXzI1MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OndyZDpSPTQwMCcsIGVuOiAnd29yZCcsIGRlOiAnV29ydCcgfVxuICAgIEBlcSAoIM6pYmJkYnJfMjUzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6d3JkOlI9NTAwJywgZW46ICdjYWxsJywgZGU6ICdydWZlbicgfVxuICAgIEBlcSAoIM6pYmJkYnJfMjU0ID0gLT4gcm93cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX3N0cmljdF9tb2RlOiAtPlxuICAgIHsgbGV0cyxcbiAgICAgIGZyZWV6ZSwgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2xldHNmcmVlemV0aGF0X2luZnJhKCkuc2ltcGxlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZGIgPSBuZXcgRGJyaWMgJzptZW1vcnk6J1xuICAgICAgKCBkYi5wcmVwYXJlIFNRTFwicHJhZ21hIHN0cmljdCAgICAgICA9IG9uO1wiICAgICkucnVuKClcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJjcmVhdGUgdGFibGUgdCAoIGYgaW50ZWdlciApO1wiXG4gICAgICBkYi5leGVjdXRlIFNRTFwiaW5zZXJ0IGludG8gdCB2YWx1ZXMgKCAxMjM0ICk7XCJcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJpbnNlcnQgaW50byB0IHZhbHVlcyAoIDEyLjM0ICk7XCJcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJpbnNlcnQgaW50byB0IHZhbHVlcyAoICd3YXQnICk7XCJcbiAgICAgICMgZGVidWcgJ86pYmJkYnJfMjU1JywgKCByb3cuZiBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCBmIGZyb20gdDtcIiApXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGRiID0gbmV3IERicmljICc6bWVtb3J5OidcbiAgICAgICggZGIucHJlcGFyZSBTUUxcInByYWdtYSBzdHJpY3QgICAgICAgPSBvbjtcIiAgICApLnJ1bigpXG4gICAgICBAdGhyb3dzICggzqliYmRicl8yNTYgPSAtPiBkYi5leGVjdXRlIFNRTFwiY3JlYXRlIHRhYmxlIHQgKCBmIGludGVnZXIsIGoganNvbiApIHN0cmljdDtcIiApLCAvdW5rbm93biBkYXRhdHlwZSBmb3IgdFxcLmovXG4gICAgICBkYi5leGVjdXRlIFNRTFwiY3JlYXRlIHRhYmxlIHQgKCBmIGludGVnZXIsIGogYmxvYiApIHN0cmljdDtcIlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcImluc2VydCBpbnRvIHQgKCBmICkgdmFsdWVzICggMTIzNCApO1wiXG4gICAgICBAZXEgKCDOqWJiZGJyXzI1NyA9IC0+ICggZGIuZ2V0X2ZpcnN0IFNRTFwic2VsZWN0IHR5cGVvZiggMTIgICAgKSBhcyB0eXBlO1wiICkudHlwZSApLCAnaW50ZWdlcidcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjU4ID0gLT4gKCBkYi5nZXRfZmlyc3QgU1FMXCJzZWxlY3QgdHlwZW9mKCAxMi4zNCApIGFzIHR5cGU7XCIgKS50eXBlICksICdyZWFsJ1xuICAgICAgQGVxICggzqliYmRicl8yNTkgPSAtPiAoIGRiLmdldF9maXJzdCBTUUxcInNlbGVjdCB0eXBlb2YoICd3YXQnICkgYXMgdHlwZTtcIiApLnR5cGUgKSwgJ3RleHQnXG4gICAgICBAdGhyb3dzICggzqliYmRicl8yNjAgPSAtPiBkYi5leGVjdXRlIFNRTFwiaW5zZXJ0IGludG8gdCAoIGYgKSB2YWx1ZXMgKCAxMi4zNCApO1wiICksIC9jYW5ub3Qgc3RvcmUgUkVBTCB2YWx1ZSBpbiBJTlRFR0VSIGNvbHVtbi9cbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyXzI2MSA9IC0+IGRiLmV4ZWN1dGUgU1FMXCJpbnNlcnQgaW50byB0ICggZiApIHZhbHVlcyAoICd3YXQnICk7XCIgKSwgL2Nhbm5vdCBzdG9yZSBURVhUIHZhbHVlIGluIElOVEVHRVIgY29sdW1uL1xuICAgICAgIyBkZWJ1ZyAnzqliYmRicl8yNjInLCAoIHJvdy5mIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0IGYgZnJvbSB0O1wiIClcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgX2RicmljX2R5bmFtaWNfYnVpbGRfcHJvcGVydGllczogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBwcmVmaXggPSAnd3JkJ1xuICAgICAgY2xhc3MgRGJfMSBleHRlbmRzIERicmljX3N0ZFxuICAgICAgICBAYnVpbGQ6IFtcbiAgICAgICAgICAtPiBTUUxcIlwiXCJjcmVhdGUgdGFibGUgI3tJRE4gXCIje3ByZWZpeH1fd29yZHNcIn0gKCB0IHRleHQgKTtcIlwiXCJcbiAgICAgICAgICAtPiBTUUxcIlwiXCJpbnNlcnQgaW50byAje0lETiBcIiN7cHJlZml4fV93b3Jkc1wifSAoIHQgKSB2YWx1ZXMgKCAn5rC0ICjjgb/jgZopJyApO1wiXCJcIlxuICAgICAgICAgIC0+IFNRTFwiXCJcImluc2VydCBpbnRvICN7SUROIFwiI3twcmVmaXh9X3dvcmRzXCJ9ICggdCApIHZhbHVlcyAoICfpo5/jgbnniakgKOOBn+OBueOCguOBriknICk7XCJcIlwiXG4gICAgICAgICAgXVxuICAgICAgZGIgPSBuZXcgRGJfMSgpXG4gICAgICByZWxhdGlvbl9uYW1lcyA9IG5ldyBTZXQgKCByb3cubmFtZSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gc3RkX3JlbGF0aW9ucztcIiApXG4gICAgICBAZXEgKCDOqWJiZGJyXzI2MyA9IC0+IHJlbGF0aW9uX25hbWVzLmhhcyAnd3JkX3dvcmRzJyAgICAgICksIHRydWVcbiAgICAgIHJvd3MgPSBkYi53YWxrIFNRTFwiXCJcInNlbGVjdCAqIGZyb20gI3tJRE4gXCIje3ByZWZpeH1fd29yZHNcIn07XCJcIlwiXG4gICAgICBAZXEgKCDOqWJiZGJyXzI2NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlLnQgICAgICAgICAgICAgICAgICksICfmsLQgKOOBv+OBmiknXG4gICAgICBAZXEgKCDOqWJiZGJyXzI2NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlLnQgICAgICAgICAgICAgICAgICksICfpo5/jgbnniakgKOOBn+OBueOCguOBriknXG4gICAgICBAZXEgKCDOqWJiZGJyXzI2NiA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcHJlZml4ID0gJ3dyZCdcbiAgICAgIGNsYXNzIERiXzEgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgICAgQGJ1aWxkOiBbXG4gICAgICAgICAgLT4gU1FMXCJcIlwiY3JlYXRlIHRhYmxlICN7SUROIFwiI3twcmVmaXh9X3dvcmRzXCJ9ICggdCB0ZXh0ICk7XCJcIlwiXG4gICAgICAgICAgLT4gU1FMXCJcIlwiaW5zZXJ0IGludG8gI3tJRE4gXCIje3ByZWZpeH1fd29yZHNcIn0gKCB0ICkgdmFsdWVzICggJ+awtCAo44G/44GaKScgKTtcIlwiXCJcbiAgICAgICAgICAtPiBTUUxcIlwiXCJpbnNlcnQgaW50byAje0lETiBcIiN7cHJlZml4fV93b3Jkc1wifSAoIHQgKSB2YWx1ZXMgKCAn6aOf44G554mpICjjgZ/jgbnjgoLjga4pJyApO1wiXCJcIlxuICAgICAgICAgIF1cbiAgICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgICAgc2VsZWN0X3dvcmRzOiAtPiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tICN7SUROIFwiI3twcmVmaXh9X3dvcmRzXCJ9IG9yZGVyIGJ5IHQ7XCJcIlwiXG4gICAgICBkYiA9IG5ldyBEYl8xKClcbiAgICAgIHJlbGF0aW9uX25hbWVzID0gbmV3IFNldCAoIHJvdy5uYW1lIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBzdGRfcmVsYXRpb25zO1wiIClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjY3ID0gLT4gcmVsYXRpb25fbmFtZXMuaGFzICd3cmRfd29yZHMnICAgICAgKSwgdHJ1ZVxuICAgICAgIyBpbmZvICfOqWJiZGJyXzI2OCcsIHJvdyBmb3Igcm93IGZyb20gZGIud2FsayBkYi5zdGF0ZW1lbnRzLnNlbGVjdF93b3Jkc1xuICAgICAgcm93cyA9IGRiLndhbGsgZGIuc3RhdGVtZW50cy5zZWxlY3Rfd29yZHNcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjY5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUudCAgICAgICAgICAgICAgICAgKSwgJ+awtCAo44G/44GaKSdcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjcwID0gLT4gcm93cy5uZXh0KCkudmFsdWUudCAgICAgICAgICAgICAgICAgKSwgJ+mjn+OBueeJqSAo44Gf44G544KC44GuKSdcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjcxID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBfZGJyaWNfaW50ZWdyYXRlX3BsdWdpbjogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBEYl8xIGV4dGVuZHMgRGJyaWNcbiAgICAgICAgZXhwb3J0YWJsZV9tZXRob2RfMTogLT5cbiAgICAgICAgQGJ1aWxkOiBbXG4gICAgICAgICAgLT4gU1FMXCJcIlwiY3JlYXRlIHRhYmxlIHdyZF93b3JkcyAoIHQgdGV4dCApO1wiXCJcIlxuICAgICAgICAgIC0+IFNRTFwiXCJcImluc2VydCBpbnRvIHdyZF93b3JkcyAoIHQgKSB2YWx1ZXMgKCAn5rC0ICjjgb/jgZopJyApO1wiXCJcIlxuICAgICAgICAgIC0+IFNRTFwiXCJcImluc2VydCBpbnRvIHdyZF93b3JkcyAoIHQgKSB2YWx1ZXMgKCAn6aOf44G554mpICjjgZ/jgbnjgoLjga4pJyApO1wiXCJcIlxuICAgICAgICAgIF1cbiAgICAgIGNsYXNzIERiXzIgZXh0ZW5kcyBEYl8xXG4gICAgICAgIGV4cG9ydGFibGVfbWV0aG9kXzI6IC0+XG4gICAgICAjIGRiID0gbmV3IERiXzEoKVxuICAgICAgeyBnZXRfcHJvdG90eXBlX2NoYWluLCB9ID0gKCByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL3Vuc3RhYmxlLW9iamVjdC10b29scy1icmljcycgKS5yZXF1aXJlX2dldF9wcm90b3R5cGVfY2hhaW4oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBnZXRfYWxsX2VmZmVjdGl2ZV9kZXNjcmlwdG9yc19pbl9wcm90b3R5cGVfY2hhaW4gPSAoIHggKSAtPlxuICAgICAgICBSID0gT2JqZWN0LmNyZWF0ZSBudWxsXG4gICAgICAgIHJldHVybiBSIHVubGVzcyB4P1xuICAgICAgICBmb3IgcHJvdG90eXBlIGluIGdldF9wcm90b3R5cGVfY2hhaW4geFxuICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyBwcm90b3R5cGVcbiAgICAgICAgICAjIGlmICggT2JqZWN0Lmhhc093biBwcm90b3R5cGUsICdzdGRfd2l0aF92YXJpYWJsZXMnICkgb3IgKCBPYmplY3QuaGFzT3duIHByb3RvdHlwZSwgJ3N0YXRlbWVudHMnICkgb3IgKCBPYmplY3QuaGFzT3duIHByb3RvdHlwZSwgJ2V4cG9ydGFibGVfbWV0aG9kXzEnIClcbiAgICAgICAgICBpZiAoIE9iamVjdC5oYXNPd24gcHJvdG90eXBlLCAnZXhwb3J0YWJsZV9tZXRob2RfMScgKVxuICAgICAgICAgICAgIyBoZWxwICfOqWJiZGJyXzI3MicsIHByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lLCBwcm90b3R5cGUuc3RkX3dpdGhfdmFyaWFibGVzXG4gICAgICAgICAgICAjIGhlbHAgJ86pYmJkYnJfMjczJywgcHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUsIHByb3RvdHlwZS5zdGF0ZW1lbnRzXG4gICAgICAgICAgICBoZWxwICfOqWJiZGJyXzI3NCcsIHByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lLCBwcm90b3R5cGUuZXhwb3J0YWJsZV9tZXRob2RfMVxuICAgICAgICAgICAgIyBpbmZvICfOqWJiZGJyXzI3NScsIHByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lLCBrZXlzXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgIyB3aGlzcGVyICfOqWJiZGJyXzI3NicsIHByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lLCBrZXlzXG4gICAgICAgIDtudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRlYnVnKClcbiAgICAgIGZvciBwcm90b3R5cGUgaW4gZ2V0X3Byb3RvdHlwZV9jaGFpbiBEYl8xXG4gICAgICAgIGJyZWFrIGlmIHByb3RvdHlwZSBpbiBbIERicmljLCBEYnJpYzo6LCBdXG4gICAgICAgIGRlYnVnICfOqWJiZGJyXzI3NycsIHByb3RvdHlwZVxuICAgICAgICBkZWJ1ZyAnzqliYmRicl8yNzgnLCAnICcsIHByb3RvdHlwZS5leHBvcnRhYmxlX21ldGhvZF8xXG4gICAgICAgIGRlYnVnICfOqWJiZGJyXzI3OScsICcgJywgcHJvdG90eXBlLmV4cG9ydGFibGVfbWV0aG9kXzJcbiAgICAgICAgZGVidWcgJ86pYmJkYnJfMjgwJywgJyAnLCBwcm90b3R5cGUuYnVpbGQ/Lmxlbmd0aCA/ICcnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRlYnVnKClcbiAgICAgIGZvciBwcm90b3R5cGUgaW4gZ2V0X3Byb3RvdHlwZV9jaGFpbiBEYl8xOjpcbiAgICAgICAgYnJlYWsgaWYgcHJvdG90eXBlIGluIFsgRGJyaWMsIERicmljOjosIF1cbiAgICAgICAgZGVidWcgJ86pYmJkYnJfMjgxJywgcHJvdG90eXBlXG4gICAgICAgIGRlYnVnICfOqWJiZGJyXzI4MicsICcgJywgcHJvdG90eXBlLmV4cG9ydGFibGVfbWV0aG9kXzFcbiAgICAgICAgZGVidWcgJ86pYmJkYnJfMjgzJywgJyAnLCBwcm90b3R5cGUuZXhwb3J0YWJsZV9tZXRob2RfMlxuICAgICAgICBkZWJ1ZyAnzqliYmRicl8yODQnLCAnICcsIHByb3RvdHlwZS5idWlsZD8ubGVuZ3RoID8gJydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGVidWcgJ86pYmJkYnJfMjg1JywgJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJ1xuICAgICAgZm9yIHByb3RvdHlwZSBpbiBnZXRfcHJvdG90eXBlX2NoYWluIERiXzJcbiAgICAgICAgYnJlYWsgaWYgcHJvdG90eXBlIGluIFsgRGJyaWMsIERicmljOjosIF1cbiAgICAgICAgZGVidWcgJ86pYmJkYnJfMjg2JywgcHJvdG90eXBlXG4gICAgICAgIGRlYnVnICfOqWJiZGJyXzI4NycsICcgJywgcHJvdG90eXBlLmV4cG9ydGFibGVfbWV0aG9kXzFcbiAgICAgICAgZGVidWcgJ86pYmJkYnJfMjg4JywgJyAnLCBwcm90b3R5cGUuZXhwb3J0YWJsZV9tZXRob2RfMlxuICAgICAgICBkZWJ1ZyAnzqliYmRicl8yODknLCAnICcsIHByb3RvdHlwZS5idWlsZD8ubGVuZ3RoID8gJydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGVidWcoKVxuICAgICAgZm9yIHByb3RvdHlwZSBpbiBnZXRfcHJvdG90eXBlX2NoYWluIERiXzI6OlxuICAgICAgICBicmVhayBpZiBwcm90b3R5cGUgaW4gWyBEYnJpYywgRGJyaWM6OiwgXVxuICAgICAgICBkZWJ1ZyAnzqliYmRicl8yOTAnLCBwcm90b3R5cGVcbiAgICAgICAgZGVidWcgJ86pYmJkYnJfMjkxJywgJyAnLCBwcm90b3R5cGUuZXhwb3J0YWJsZV9tZXRob2RfMVxuICAgICAgICBkZWJ1ZyAnzqliYmRicl8yOTInLCAnICcsIHByb3RvdHlwZS5leHBvcnRhYmxlX21ldGhvZF8yXG4gICAgICAgIGRlYnVnICfOqWJiZGJyXzI5MycsICcgJywgcHJvdG90eXBlLmJ1aWxkPy5sZW5ndGggPyAnJ1xuICAgICAgIyBkZWJ1ZyAnzqliYmRicl8yOTQnXG4gICAgICAjIGRlYnVnICfOqWJiZGJyXzI5NScsIHByb3RvdHlwZSBmb3IgcHJvdG90eXBlIGluIGdldF9wcm90b3R5cGVfY2hhaW4gZGJcbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIHVyZ2UgcmV2ZXJzZSAnzqliYmRicl8yOTYnOyBnZXRfYWxsX2VmZmVjdGl2ZV9kZXNjcmlwdG9yc19pbl9wcm90b3R5cGVfY2hhaW4gRGJyaWNfc3RkXG4gICAgICAjICMgdXJnZSByZXZlcnNlICfOqWJiZGJyXzI5Nyc7IGdldF9hbGxfZWZmZWN0aXZlX2Rlc2NyaXB0b3JzX2luX3Byb3RvdHlwZV9jaGFpbiBEYnJpY19zdGQ6OlxuICAgICAgIyB1cmdlIHJldmVyc2UgJ86pYmJkYnJfMjk4JzsgZ2V0X2FsbF9lZmZlY3RpdmVfZGVzY3JpcHRvcnNfaW5fcHJvdG90eXBlX2NoYWluIG5ldyBEYnJpY19zdGRcbiAgICAgICMgdXJnZSAoIHJldmVyc2UgJ86pYmJkYnJfMjk5JyApLCBnb2xkIFwiYnVpbGQ6ICAgICAgICAgICAgICAgIFwiLCBEYnJpY19zdGQuYnVpbGRcbiAgICAgICMgdXJnZSAoIHJldmVyc2UgJ86pYmJkYnJfMzAwJyApLCBnb2xkIFwic3RhdGVtZW50czogICAgICAgICAgIFwiLCBEYnJpY19zdGQuc3RhdGVtZW50c1xuICAgICAgIyB1cmdlICggcmV2ZXJzZSAnzqliYmRicl8zMDEnICksIGdvbGQgXCJmdW5jdGlvbnM6ICAgICAgICAgICAgXCIsIERicmljX3N0ZC5mdW5jdGlvbnNcbiAgICAgICMgdXJnZSAoIHJldmVyc2UgJ86pYmJkYnJfMzAyJyApLCBnb2xkIFwiYWdncmVnYXRlX2Z1bmN0aW9uczogIFwiLCBEYnJpY19zdGQuYWdncmVnYXRlX2Z1bmN0aW9uc1xuICAgICAgIyB1cmdlICggcmV2ZXJzZSAnzqliYmRicl8zMDMnICksIGdvbGQgXCJ3aW5kb3dfZnVuY3Rpb25zOiAgICAgXCIsIERicmljX3N0ZC53aW5kb3dfZnVuY3Rpb25zXG4gICAgICAjIHVyZ2UgKCByZXZlcnNlICfOqWJiZGJyXzMwNCcgKSwgZ29sZCBcInRhYmxlX2Z1bmN0aW9uczogICAgICBcIiwgRGJyaWNfc3RkLnRhYmxlX2Z1bmN0aW9uc1xuICAgICAgIyB1cmdlICggcmV2ZXJzZSAnzqliYmRicl8zMDUnICksIGdvbGQgXCJ2aXJ0dWFsX3RhYmxlczogICAgICAgXCIsIERicmljX3N0ZC52aXJ0dWFsX3RhYmxlc1xuICAgICAgIyB1cmdlICggcmV2ZXJzZSAnzqliYmRicl8zMDYnICksIGdvbGQgXCJleHBvcnRzOiAgICAgICAgICAgICAgXCIsIERicmljX3N0ZC5leHBvcnRzXG4gICAgICAjICMgZGIuaW50ZWdyYXRlX3BsdWdpbiBEYnJpY19zdGRcbiAgICAgICMgIyByZWxhdGlvbl9uYW1lcyA9IG5ldyBTZXQgKCByb3cubmFtZSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gc3RkX3JlbGF0aW9ucztcIiApXG4gICAgICAjICMgZGVidWcgJ86pYmJkYnJfMzA3JywgcmVsYXRpb25fbmFtZXNcbiAgICAgICMgIyBAZXEgKCDOqWJiZGJyXzMwOCA9IC0+IHJlbGF0aW9uX25hbWVzLmhhcyAnd3JkX3dvcmRzJyAgICAgICksIHRydWVcbiAgICAgICMgIyByb3dzID0gZGIud2FsayBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIHdyZF93b3JkcztcIlwiXCJcbiAgICAgICMgIyBAZXEgKCDOqWJiZGJyXzMwOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlLnQgICAgICAgICAgICAgICAgICksICfmsLQgKOOBv+OBmiknXG4gICAgICAjICMgQGVxICggzqliYmRicl8zMTAgPSAtPiByb3dzLm5leHQoKS52YWx1ZS50ICAgICAgICAgICAgICAgICApLCAn6aOf44G554mpICjjgZ/jgbnjgoLjga4pJ1xuICAgICAgIyAjIEBlcSAoIM6pYmJkYnJfMzExID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBfZGJyaWNfcGx1Z2luc19hY3F1aXNpdGlvbjogLT5cbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgfSA9ICggcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi91bnN0YWJsZS1ycHItdHlwZV9vZi1icmljcycgKS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgZ2V0X2FsbF9pbl9wcm90b3R5cGVfY2hhaW4sXG4gICAgICBnZXRfcHJvdG90eXBlX2NoYWluLCAgICAgIH0gPSAoIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvdW5zdGFibGUtb2JqZWN0LXRvb2xzLWJyaWNzJyApLnJlcXVpcmVfZ2V0X3Byb3RvdHlwZV9jaGFpbigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBuYnJfbnVtYmVyX3BsdWdpbiA9XG4gICAgICBleHBvcnRzOlxuICAgICAgICBwcmVmaXg6ICduYnInICMjIyBOT1RFIGluZm9ybWF0aXZlLCBub3QgZW5mb3JjZWQgIyMjXG4gICAgICAgIGJ1aWxkOiBbXG4gICAgICAgICAgU1FMXCJjcmVhdGUgdGFibGUgbmJyX251bWJlcnMgKCBudW1iZXIgaW50ZWdlciApO1wiXG4gICAgICAgICAgXVxuICAgICAgICBzdGF0ZW1lbnRzOlxuICAgICAgICAgIG5icl9pbnNlcnRfbnVtYmVyOiAgICAgICAgICBTUUxcImluc2VydCBpbnRvIG5icl9udW1iZXJzIHZhbHVlICggJG51bWJlciApO1wiXG4gICAgICAgICAgbmJyX3NlbGVjdF9udW1iZXJzOiAgICAgICAgIFNRTFwic2VsZWN0ICogZnJvbSBuYnJfbnVtYmVycyBvcmRlciBieSBudW1iZXI7XCJcbiAgICAgICAgICBuYnJfc2VsZWN0X3NxdWFyZV9udW1iZXJzOiAgU1FMXCJzZWxlY3QgbmJyX3NxdWFyZSggbnVtYmVyICkgZnJvbSBuYnJfbnVtYmVycyBvcmRlciBieSBudW1iZXI7XCJcbiAgICAgICAgZnVuY3Rpb25zOlxuICAgICAgICAgIG5icl9zcXVhcmU6XG4gICAgICAgICAgICB2YWx1ZTogKCBudW1iZXIgKSAtPiBudW1iZXIgKiogMlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgY2xhc3MgRGJfMSBleHRlbmRzIERicmljX3N0ZFxuICAgICAgICBAcGx1Z2luczogW1xuICAgICAgICAgICdwcm90b3R5cGVzJ1xuICAgICAgICAgIG5icl9udW1iZXJfcGx1Z2luXG4gICAgICAgICAgJ21lJ1xuICAgICAgICAgICMgRGJyaWNfc3RkXG4gICAgICAgICAgXVxuICAgICAgICBAZXhwb3J0czoge31cbiAgICAgICAgQGJ1aWxkOiBbXG4gICAgICAgICAgU1FMXCJjcmVhdGUgdGFibGUgeCAoIGlkIGludGVnZXIgKTtcIlxuICAgICAgICAgIF1cbiAgICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgIyBkYiA9IG5ldyBEYl8xKClcbiAgICAgIGRiID0gbmV3IERicmljX3N0ZCgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZvciB7IHR5cGUsIHZhbHVlLCB9IGluIGRiLl9nZXRfYWNxdWlzaXRpb25fY2hhaW4oKVxuICAgICAgICBzd2l0Y2ggdHlwZVxuICAgICAgICAgIHdoZW4gJ3BsdWdpbidcbiAgICAgICAgICAgIGluZm8gJ86pYmJkYnJfMzEyJywgdHlwZSwgT2JqZWN0LmtleXMgdmFsdWUuZXhwb3J0c1xuICAgICAgICAgIHdoZW4gJ3Byb3RvdHlwZSdcbiAgICAgICAgICAgIHN3aXRjaCB0cnVlXG4gICAgICAgICAgICAgIHdoZW4gdmFsdWUgaXMgZGIuY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICBoZWxwICfOqWJiZGJyXzMxMycsIHR5cGUsIHJwciB2YWx1ZS5uYW1lXG4gICAgICAgICAgICAgICMgd2hlbiB2YWx1ZSBpbiBiYXNlX3Byb3RvdHlwZXNcbiAgICAgICAgICAgICAgIyAgIHdoaXNwZXIgJ86pYmJkYnJfMzE0JywgdHlwZSwgXCIob2JqZWN0KVwiXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB1cmdlICfOqWJiZGJyXzMxNScsIHR5cGUsIHJwciB2YWx1ZS5uYW1lLCB2YWx1ZVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pYmJkYnJfMzE2IGludGVybmFsIGVycm9yOiB1bmtub3duIHR5cGUgI3tycHIgdHlwZX1cIlxuICAgICAgICAjIGRlYnVnICfOqWJiZGJyXzMxNycsIHsgdHlwZSwgdmFsdWUsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBpZiByZWNvcmRfY292ZXJhZ2VcbiAgICAgICMgICB7IHVzZWQsIHVudXNlZCwgfSA9IHRyYWNrZXIucmVwb3J0KClcbiAgICAgICMgICBoZWxwICfOqWJiZGJyXzMxOCcsIFwidXNlZDogICBcIiwgbmFtZSBmb3IgbmFtZSBpbiB1c2VkXG4gICAgICAjICAgd2FybiAnzqliYmRicl8zMTknLCBcInVudXNlZDogXCIsIG5hbWUgZm9yIG5hbWUgaW4gdW51c2VkXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIHsgZW51bWVyYXRlX3Byb3RvdHlwZXNfYW5kX21ldGhvZHMsXG4gICAgd3JhcF9tZXRob2RzX29mX3Byb3RvdHlwZXMsIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2luc3RydW1lbnRhdGlvbi1jb3ZlcmFnZS1vYnNlcnZlcidcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBjYXRhbG9nICAgICAgICAgICAgID0gZW51bWVyYXRlX3Byb3RvdHlwZXNfYW5kX21ldGhvZHMgRGJyaWNfc3RkXG4gIGNvdW50cyAgICAgICAgICAgICAgPSBPYmplY3QuZnJvbUVudHJpZXMgKCBbIG5hbWUsIDAsIF0gZm9yIG5hbWUgb2YgY2F0YWxvZyApXG4gIGdldF91bnVzZWRfbmFtZXMgICAgPSAoIGNvdW50cyApIC0+ICggbmFtZSBmb3IgbmFtZSwgY291bnQgb2YgY291bnRzIHdoZW4gY291bnQgaXMgICAgMCApXG4gIGdldF91c2VkX25hbWVzICAgICAgPSAoIGNvdW50cyApIC0+ICggbmFtZSBmb3IgbmFtZSwgY291bnQgb2YgY291bnRzIHdoZW4gY291bnQgaXNudCAgMCApXG4gIGdldF9uYW1lc19ieV9jb3VudHMgPSAoIGNvdW50cyApIC0+XG4gICAgUiA9IHt9XG4gICAgZm9yIG5hbWUsIGNvdW50IG9mIGNvdW50c1xuICAgICAgKCBSWyBjb3VudCBdID89IFtdICkucHVzaCBuYW1lXG4gICAgcmV0dXJuIFJcbiAgaGFuZGxlciA9ICh7IG5hbWUsIH0pIC0+XG4gICAgIyBpbmZvICfOqWJiZGJyXzMyMCcsIG5hbWVcbiAgICBjb3VudHNbIG5hbWUgXSsrXG4gICAgO251bGxcbiAgZGVidWcgJ86pYmJkYnJfMzIxJywgRGJyaWM6OnByZXBhcmVcbiAgZGVidWcgJ86pYmJkYnJfMzIyJywgRGJyaWNfc3RkOjpwcmVwYXJlXG4gIHdyYXBfbWV0aG9kc19vZl9wcm90b3R5cGVzIERicmljX3N0ZCwgaGFuZGxlclxuICBkZWJ1ZyAnzqliYmRicl8zMjMnLCBEYnJpYzo6cHJlcGFyZVxuICBkZWJ1ZyAnzqliYmRicl8zMjQnLCBEYnJpY19zdGQ6OnByZXBhcmVcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGJyaWNfaW50ZWdyYXRlX3BsdWdpbjogdGVzdHMuX2RicmljX2ludGVncmF0ZV9wbHVnaW4sIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX3BsdWdpbnNfYWNxdWlzaXRpb246IHRlc3RzLl9kYnJpY19wbHVnaW5zX2FjcXVpc2l0aW9uLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkYnJpY19lc3FsOiB0ZXN0cy5kYnJpY19lc3FsLCB9XG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgd2FybiAnzqliYmRicl8zMjUnLCBnZXRfdW51c2VkX25hbWVzICAgICBjb3VudHNcbiAgaGVscCAnzqliYmRicl8zMjYnLCBnZXRfdXNlZF9uYW1lcyAgICAgICBjb3VudHNcbiAgdXJnZSAnzqliYmRicl8zMjcnLCBjb3VudCwgbmFtZXMgZm9yIGNvdW50LCBuYW1lcyBvZiBnZXRfbmFtZXNfYnlfY291bnRzICBjb3VudHNcbiAgIyBkYi5fZ2V0X2FjcXVpc2l0aW9uX2NoYWluKClcbiAgIyB3YXJuICfOqWJiZGJyXzMyOCcsIGdldF91bnVzZWRfbmFtZXMgICAgIGNvdW50c1xuICAjIGhlbHAgJ86pYmJkYnJfMzI5JywgZ2V0X3VzZWRfbmFtZXMgICAgICAgY291bnRzXG4gICMgdXJnZSAnzqliYmRicl8zMzAnLCBjb3VudCwgbmFtZXMgZm9yIGNvdW50LCBuYW1lcyBvZiBnZXRfbmFtZXNfYnlfY291bnRzICBjb3VudHNcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIDtudWxsIl19
