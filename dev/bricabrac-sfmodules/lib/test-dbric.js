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
        db_path = ':memory:';
        (() => {          //.....................................................................................................
          var Ωbbdbr__11;
          this.throws((Ωbbdbr__11 = function() {
            var db;
            return db = new Dbric_nonconform(db_path);
          }), /1 out of 2 build statement\(s\) could not be parsed/);
          return null;
        })();
        (() => {          //.....................................................................................................
          var Ωbbdbr__12;
          this.throws((Ωbbdbr__12 = function() {
            return new Dbric_nonconform(db_path);
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
      var Bsql3, Dbric, Dbric_std, SQL, internals, temp;
      ({Dbric, Dbric_std, SQL, internals} = SFMODULES.unstable.require_dbric());
      ({temp} = SFMODULES.unstable.require_temp());
      Bsql3 = require('better-sqlite3');
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
          db = new Dbric(db_path);
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
        // folder_path = '/tmp/bricbrac-test' # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
            return db.prefix_re;
          }), /|/);
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__24, Ωbbdbr__25, Ωbbdbr__26, Ωbbdbr__27;
          db = new Dbric_std(db_path, {
            db_class: Bsql3
          });
          this.eq((Ωbbdbr__24 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__25 = function() {
            return db.cfg.prefix;
          }), 'std');
          this.eq((Ωbbdbr__26 = function() {
            return db.prefix;
          }), 'std');
          this.eq((Ωbbdbr__27 = function() {
            return db.prefix_re;
          }), /^_?\x73td_.*$/);
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__28, Ωbbdbr__29, Ωbbdbr__30, Ωbbdbr__31, Ωbbdbr__32;
          db = new Dbric_std(db_path, {
            db_class: Bsql3
          });
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
          db = new Dbric_std(db_path, {
            db_class: Bsql3
          });
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
          db = new Dbric_std(db_path, {
            db_class: Bsql3
          });
          (db.prepare(SQL`drop view std_tables;`)).run();
          this.eq((Ωbbdbr__38 = function() {
            return db.is_ready;
          }), false);
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__39, Ωbbdbr__40, Ωbbdbr__41, Ωbbdbr__42, Ωbbdbr__43;
          db = new Dbric_std(db_path, {
            db_class: Bsql3
          });
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
    dbric_std_generate_series: function() {
      var Bsql3, Dbric, Dbric_std, SQL, internals, temp;
      Bsql3 = require('better-sqlite3');
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
        var Db, db, Ωbbdbr__44, Ωbbdbr__45, Ωbbdbr__46, Ωbbdbr__47;
        Db = (function() {
          class Db extends Dbric_std {};

          Db.db_class = Bsql3;

          return Db;

        }).call(this);
        db = new Db(':memory:');
        this.eq((Ωbbdbr__44 = function() {
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
        this.eq((Ωbbdbr__45 = function() {
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
        this.eq((Ωbbdbr__46 = function() {
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
        this.eq((Ωbbdbr__47 = function() {
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
      Bsql3 = require('better-sqlite3');
      statement_class = ((new Bsql3(':memory:')).prepare(SQL`select 1 where false;`)).constructor;
      //.......................................................................................................
      get_function_names = function(dba) {
        var name;
        return new Set((function() {
          var results, x;
          results = [];
          for (x of dba.walk(SQL`select name from pragma_function_list() order by name;`)) {
            ({name} = x);
            results.push(name);
          }
          return results;
        })());
      };
      //.......................................................................................................
      get_table_names = function(dba) {
        var name;
        return new Set((function() {
          var results, x;
          results = [];
          for (x of dba.walk(SQL`select name from sqlite_schema
where type is 'table' order by name;`)) {
            ({name} = x);
            results.push(name);
          }
          return results;
        })());
      };
      //.......................................................................................................
      get_view_names = function(dba) {
        var name;
        return new Set((function() {
          var results, x;
          results = [];
          for (x of dba.walk(SQL`select name from sqlite_schema
where type is 'view' order by name;`)) {
            ({name} = x);
            results.push(name);
          }
          return results;
        })());
      };
      //.......................................................................................................
      get_trigger_names = function(dba) {
        var name;
        return new Set((function() {
          var results, x;
          results = [];
          for (x of dba.walk(SQL`select name from sqlite_schema
where type is 'trigger' order by name;`)) {
            ({name} = x);
            results.push(name);
          }
          return results;
        })());
      };
      A = (function() {
        //.......................................................................................................
        class A extends Dbric_std {};

        A.db_class = Bsql3;

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
      (() => {        // #.......................................................................................................
        // b = new B()
        // debug 'Ωbbdbr__48', b
        // debug 'Ωbbdbr__49', 'functions: ', get_function_names b
        // debug 'Ωbbdbr__50', 'functions: ', ( get_function_names b ).has 'fn_a'
        // debug 'Ωbbdbr__51', 'functions: ', ( get_function_names b ).has 'fn_b'
        // debug 'Ωbbdbr__52', 'functions: ', ( get_function_names b ).has 'regexp'
        // debug 'Ωbbdbr__53', 'tables:    ', get_table_names b
        // debug 'Ωbbdbr__54', 'views:     ', get_view_names b
        // debug 'Ωbbdbr__55', 'triggers:  ', get_trigger_names b
        // debug 'Ωbbdbr__56', 'statements:', ( k for k of b.statements )
        // return null
        //.......................................................................................................
        var dba, function_names, table_names, trigger_names, view_names, Ωbbdbr__57, Ωbbdbr__58, Ωbbdbr__59, Ωbbdbr__60, Ωbbdbr__61, Ωbbdbr__62, Ωbbdbr__63, Ωbbdbr__64, Ωbbdbr__65, Ωbbdbr__66, Ωbbdbr__67, Ωbbdbr__68, Ωbbdbr__69, Ωbbdbr__70, Ωbbdbr__71, Ωbbdbr__72, Ωbbdbr__73;
        dba = new Dbric_std(':memory:', {
          db_class: Bsql3
        });
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
        this.eq((Ωbbdbr__57 = function() {
          return dba.statements.std_get_schema instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__58 = function() {
          return dba.statements.std_get_tables instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__59 = function() {
          return dba.statements.std_get_views instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__60 = function() {
          return dba.statements.std_get_relations instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__61 = function() {
          return dba.statements.select_a instanceof statement_class;
        }), false);
        this.eq((Ωbbdbr__62 = function() {
          return dba.statements.select_b instanceof statement_class;
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__63 = function() {
          return function_names.has('zzz_test');
        }), true);
        this.eq((Ωbbdbr__64 = function() {
          return function_names.has('regexp');
        }), true);
        this.eq((Ωbbdbr__65 = function() {
          return function_names.has('fn_a');
        }), false);
        this.eq((Ωbbdbr__66 = function() {
          return function_names.has('fn_b');
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__67 = function() {
          return table_names.has('table_a');
        }), false);
        this.eq((Ωbbdbr__68 = function() {
          return table_names.has('table_b');
        }), false);
        this.eq((Ωbbdbr__69 = function() {
          return view_names.has('std_tables');
        }), true);
        this.eq((Ωbbdbr__70 = function() {
          return view_names.has('std_views');
        }), true);
        this.eq((Ωbbdbr__71 = function() {
          return view_names.has('std_relations');
        }), true);
        this.eq((Ωbbdbr__72 = function() {
          return view_names.has('view_a');
        }), false);
        this.eq((Ωbbdbr__73 = function() {
          return view_names.has('view_b');
        }), false);
        return null;
      })();
      (() => {        //.......................................................................................................
        var dba, function_names, table_names, trigger_names, view_names, Ωbbdbr__74, Ωbbdbr__75, Ωbbdbr__76, Ωbbdbr__77, Ωbbdbr__78, Ωbbdbr__79, Ωbbdbr__80, Ωbbdbr__81, Ωbbdbr__82, Ωbbdbr__83, Ωbbdbr__84, Ωbbdbr__85, Ωbbdbr__86, Ωbbdbr__87, Ωbbdbr__88, Ωbbdbr__89, Ωbbdbr__90;
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
        this.eq((Ωbbdbr__74 = function() {
          return dba.statements.std_get_schema instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__75 = function() {
          return dba.statements.std_get_tables instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__76 = function() {
          return dba.statements.std_get_views instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__77 = function() {
          return dba.statements.std_get_relations instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__78 = function() {
          return dba.statements.select_a instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__79 = function() {
          return dba.statements.select_b instanceof statement_class;
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__80 = function() {
          return function_names.has('zzz_test');
        }), true);
        this.eq((Ωbbdbr__81 = function() {
          return function_names.has('regexp');
        }), true);
        this.eq((Ωbbdbr__82 = function() {
          return function_names.has('fn_a');
        }), true);
        this.eq((Ωbbdbr__83 = function() {
          return function_names.has('fn_b');
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__84 = function() {
          return table_names.has('table_a');
        }), true);
        this.eq((Ωbbdbr__85 = function() {
          return table_names.has('table_b');
        }), false);
        this.eq((Ωbbdbr__86 = function() {
          return view_names.has('std_tables');
        }), true);
        this.eq((Ωbbdbr__87 = function() {
          return view_names.has('std_views');
        }), true);
        this.eq((Ωbbdbr__88 = function() {
          return view_names.has('std_relations');
        }), true);
        this.eq((Ωbbdbr__89 = function() {
          return view_names.has('view_a');
        }), true);
        this.eq((Ωbbdbr__90 = function() {
          return view_names.has('view_b');
        }), false);
        return null;
      })();
      (() => {        //.......................................................................................................
        var dba, function_names, table_names, trigger_names, view_names, Ωbbdbr_100, Ωbbdbr_101, Ωbbdbr_102, Ωbbdbr_103, Ωbbdbr_104, Ωbbdbr_105, Ωbbdbr_106, Ωbbdbr_107, Ωbbdbr__91, Ωbbdbr__92, Ωbbdbr__93, Ωbbdbr__94, Ωbbdbr__95, Ωbbdbr__96, Ωbbdbr__97, Ωbbdbr__98, Ωbbdbr__99;
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
        this.eq((Ωbbdbr__91 = function() {
          return dba.statements.std_get_schema instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__92 = function() {
          return dba.statements.std_get_tables instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__93 = function() {
          return dba.statements.std_get_views instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__94 = function() {
          return dba.statements.std_get_relations instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__95 = function() {
          return dba.statements.select_a instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__96 = function() {
          return dba.statements.select_b instanceof statement_class;
        }), true);
        //.....................................................................................................
        this.eq((Ωbbdbr__97 = function() {
          return function_names.has('zzz_test');
        }), true);
        this.eq((Ωbbdbr__98 = function() {
          return function_names.has('regexp');
        }), true);
        this.eq((Ωbbdbr__99 = function() {
          return function_names.has('fn_a');
        }), true);
        this.eq((Ωbbdbr_100 = function() {
          return function_names.has('fn_b');
        }), true);
        //.....................................................................................................
        this.eq((Ωbbdbr_101 = function() {
          return table_names.has('table_a');
        }), true);
        this.eq((Ωbbdbr_102 = function() {
          return table_names.has('table_b');
        }), true);
        this.eq((Ωbbdbr_103 = function() {
          return view_names.has('std_tables');
        }), true);
        this.eq((Ωbbdbr_104 = function() {
          return view_names.has('std_views');
        }), true);
        this.eq((Ωbbdbr_105 = function() {
          return view_names.has('std_relations');
        }), true);
        this.eq((Ωbbdbr_106 = function() {
          return view_names.has('view_a');
        }), true);
        this.eq((Ωbbdbr_107 = function() {
          return view_names.has('view_b');
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var Ωbbdbr_108, Ωbbdbr_109, Ωbbdbr_110;
        this.throws((Ωbbdbr_108 = function() {
          return new C_duplicate_function();
        }), /a UDF or built-in function named 'fn_b' has already been declared/);
        this.throws((Ωbbdbr_109 = function() {
          return new C_duplicate_statement();
        }), /statement 'select_b' is already declared/);
        return this.throws((Ωbbdbr_110 = function() {
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
      (() => {        // debug 'Ωbbdbr_111', new Dbric '/dev/shm/bricabrac.sqlite'
        var db, db_proto;
        db = new Dbric(':memory:');
        db_proto = Object.getPrototypeOf(db);
        debug('Ωbbdbr_112', Object.getOwnPropertyDescriptor(db_proto, 'is_ready'));
        debug('Ωbbdbr_113', Object.getOwnPropertyDescriptor(db_proto, '_get_is_ready'));
        return null;
      })();
      //-------------------------------------------------------------------------------------------------------
      /* use derived classes to assert that property descriptors are searched for in the prototype chain: */
      Dbric_A = class Dbric_A extends Dbric {};
      Dbric_B = class Dbric_B extends Dbric_A {};
      Dbric_C = class Dbric_C extends Dbric_B {};
      Dbric_Z = class Dbric_Z extends Dbric_C {};
      (() => {        //-------------------------------------------------------------------------------------------------------
        var Dbric_nonconform, Ωbbdbr_114;
        Dbric_nonconform = class Dbric_nonconform extends Dbric_Z {
          is_ready() {}

        };
        this.throws((Ωbbdbr_114 = function() {
          return new Dbric_nonconform();
        }), /not allowed to override property 'is_ready'; use '_get_is_ready instead/);
        return null;
      })();
      (() => {        //-------------------------------------------------------------------------------------------------------
        var Dbric_nonconform, Ωbbdbr_115;
        Dbric_nonconform = class Dbric_nonconform extends Dbric_Z {
          prefix() {}

        };
        this.throws((Ωbbdbr_115 = function() {
          return new Dbric_nonconform();
        }), /not allowed to override property 'prefix'; use '_get_prefix instead/);
        return null;
      })();
      (() => {        //-------------------------------------------------------------------------------------------------------
        var Dbric_nonconform, Ωbbdbr_116;
        Dbric_nonconform = class Dbric_nonconform extends Dbric_Z {
          prefix_re() {}

        };
        this.throws((Ωbbdbr_116 = function() {
          return new Dbric_nonconform();
        }), /not allowed to override property 'prefix_re'; use '_get_prefix_re instead/);
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
        // debug 'Ωbbdbr_117', new Dbric '/dev/shm/bricabrac.sqlite'
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
        var cast_row, db_path, rows, store, Ωbbdbr_119, Ωbbdbr_120, Ωbbdbr_121, Ωbbdbr_122, Ωbbdbr_123, Ωbbdbr_124;
        db_path = '/dev/shm/bricabrac.sqlite';
        store = new Dbric_store(db_path);
        // store.statements.store_create_tables.run()
        // for row from store.statements.get_schema.iterate()
        //   help 'Ωbbdbr_118', row
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
        this.eq((Ωbbdbr_119 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'false',
          facet_value: false,
          _v: 'false'
        });
        this.eq((Ωbbdbr_120 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'one',
          facet_value: 1,
          _v: 1
        });
        this.eq((Ωbbdbr_121 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'three',
          facet_value: 'iii',
          _v: '"iii"'
        });
        this.eq((Ωbbdbr_122 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'true',
          facet_value: true,
          _v: 'true'
        });
        this.eq((Ωbbdbr_123 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'two',
          facet_value: 2,
          _v: 2
        });
        return this.eq((Ωbbdbr_124 = function() {
          return cast_row(rows.next().value);
        }), null);
      })();
//.......................................................................................................
/* NOTE different from better-sqlite3 below */      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    sample_db_with_bsql: function() {
      var Bsql3, Dbric, Dbric_store, SQL, _Bsql3, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      _Bsql3 = require('better-sqlite3');
      //=======================================================================================================
      Bsql3 = class Bsql3 extends _Bsql3 {};
      Dbric_store = (function() {
        //=======================================================================================================
        class Dbric_store extends Dbric {};

        Dbric_store.db_class = Bsql3;

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
        var cast_row, db_path, rows, store, Ωbbdbr_126, Ωbbdbr_127, Ωbbdbr_129, Ωbbdbr_130, Ωbbdbr_131, Ωbbdbr_132, Ωbbdbr_133, Ωbbdbr_134;
        db_path = '/dev/shm/bricabrac.sqlite';
        store = new Dbric_store(db_path);
        debug('Ωbbdbr_125', store);
        this.eq((Ωbbdbr_126 = function() {
          return store.db instanceof Bsql3;
        }), true);
        this.eq((Ωbbdbr_127 = function() {
          return store.db instanceof _Bsql3;
        }), true);
        // store.statements.store_create_tables.run()
        // for row from store.statements.get_schema.iterate()
        //   help 'Ωbbdbr_128', row
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
        this.eq((Ωbbdbr_129 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'false',
          facet_value: false,
          _v: 'false'
        });
        this.eq((Ωbbdbr_130 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'one',
          facet_value: 1,
          _v: 1
        });
        this.eq((Ωbbdbr_131 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'three',
          facet_value: 'iii',
          _v: '"iii"'
        });
        this.eq((Ωbbdbr_132 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'true',
          facet_value: true,
          _v: 'true'
        });
        this.eq((Ωbbdbr_133 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'two',
          facet_value: 2,
          _v: 2
        });
        return this.eq((Ωbbdbr_134 = function() {
          return cast_row(rows.next().value);
        }), void 0);
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    udf_functions_with_nsql: function() {
      var Bsql3, Dbric, Dbric_squares, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Bsql3 = require('better-sqlite3');
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
        var db_path, i, n, rows, squares, Ωbbdbr_135, Ωbbdbr_136, Ωbbdbr_137, Ωbbdbr_138, Ωbbdbr_139, Ωbbdbr_140, Ωbbdbr_141, Ωbbdbr_142, Ωbbdbr_143, Ωbbdbr_144, Ωbbdbr_145, Ωbbdbr_146;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = new Dbric_squares(db_path);
        this.eq((Ωbbdbr_135 = function() {
          return squares.db instanceof Bsql3;
        }), false);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo row for row from squares.statements.select_from_squares.iterate()
        rows = squares.statements.select_from_squares.iterate();
        this.eq((Ωbbdbr_136 = function() {
          return rows.next().value;
        }), {
          n: 0,
          square: 0
        });
        this.eq((Ωbbdbr_137 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1
        });
        this.eq((Ωbbdbr_138 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4
        });
        this.eq((Ωbbdbr_139 = function() {
          return rows.next().value;
        }), {
          n: 3,
          square: 9
        });
        this.eq((Ωbbdbr_140 = function() {
          return rows.next().value;
        }), {
          n: 4,
          square: 16
        });
        this.eq((Ωbbdbr_141 = function() {
          return rows.next().value;
        }), {
          n: 5,
          square: 25
        });
        this.eq((Ωbbdbr_142 = function() {
          return rows.next().value;
        }), {
          n: 6,
          square: 36
        });
        this.eq((Ωbbdbr_143 = function() {
          return rows.next().value;
        }), {
          n: 7,
          square: 49
        });
        this.eq((Ωbbdbr_144 = function() {
          return rows.next().value;
        }), {
          n: 8,
          square: 64
        });
        this.eq((Ωbbdbr_145 = function() {
          return rows.next().value;
        }), {
          n: 9,
          square: 81
        });
        this.eq((Ωbbdbr_146 = function() {
          return rows.next().value;
        }), null);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    udf_aggregates_with_nsql: function() {
      var Bsql3, Dbric, Dbric_squares, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Bsql3 = require('better-sqlite3');
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
                debug('Ωbbdbr_147', {total, element});
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
        var db_path, i, n, row, rows, squares, Ωbbdbr_148, Ωbbdbr_149, Ωbbdbr_150, Ωbbdbr_151, Ωbbdbr_152;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = new Dbric_squares(db_path);
        this.eq((Ωbbdbr_148 = function() {
          return squares.db instanceof Bsql3;
        }), false);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        for (row of squares.statements.select_from_squares.iterate({
          start: 1,
          stop: 5
        })) {
          //.....................................................................................................
          echo(row);
        }
        rows = squares.statements.select_from_squares.iterate({
          start: 1,
          stop: 5
        });
        this.eq((Ωbbdbr_149 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1,
          p_n: 120,
          p_square: 14400
        });
        this.eq((Ωbbdbr_150 = function() {
          return rows.next().value;
        }), null);
        for (row of squares.statements.select_from_squares.iterate()) {
          //.....................................................................................................
          echo(row);
        }
        rows = squares.statements.select_from_squares.iterate();
        this.eq((Ωbbdbr_151 = function() {
          return rows.next().value;
        }), {
          n: null,
          square: null,
          p_n: 1,
          p_square: 1
        });
        this.eq((Ωbbdbr_152 = function() {
          return rows.next().value;
        }), null);
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    udf_functions_with_bsql: function() {
      var Bsql3, Dbric, Dbric_squares, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Bsql3 = require('better-sqlite3');
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

        Dbric_squares.db_class = Bsql3;

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
        var db_path, i, n, rows, squares, Ωbbdbr_153, Ωbbdbr_154, Ωbbdbr_155, Ωbbdbr_156, Ωbbdbr_157, Ωbbdbr_158, Ωbbdbr_159, Ωbbdbr_160, Ωbbdbr_161, Ωbbdbr_162, Ωbbdbr_163, Ωbbdbr_164;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = new Dbric_squares(db_path);
        this.eq((Ωbbdbr_153 = function() {
          return squares.db instanceof Bsql3;
        }), true);
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
      var Bsql3, Dbric, Dbric_squares, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Bsql3 = require('better-sqlite3');
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
                debug('Ωbbdbr_165', {total, element});
                return (total != null ? total : 1) * element;
              }
            });
            return null;
          }

        };

        Dbric_squares.db_class = Bsql3;

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
        var db_path, i, n, row, rows, squares, Ωbbdbr_166, Ωbbdbr_167, Ωbbdbr_168;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = new Dbric_squares(db_path);
        this.eq((Ωbbdbr_166 = function() {
          return squares.db instanceof Bsql3;
        }), true);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        for (row of squares.statements.select_from_squares.iterate({
          start: 2,
          stop: 3
        })) {
          //.....................................................................................................
          echo(row);
        }
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
      var Bsql3, Dbric, Dbric_phrases, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Bsql3 = require('better-sqlite3');
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

        Dbric_phrases.db_class = Bsql3;

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
        var db_path, i, len, phrase, phrases, ref, rows, Ωbbdbr_169, Ωbbdbr_170, Ωbbdbr_171, Ωbbdbr_172, Ωbbdbr_173, Ωbbdbr_174, Ωbbdbr_175, Ωbbdbr_176, Ωbbdbr_177, Ωbbdbr_178, Ωbbdbr_179, Ωbbdbr_180, Ωbbdbr_181, Ωbbdbr_182;
        db_path = '/dev/shm/bricabrac.sqlite';
        phrases = new Dbric_phrases(db_path);
        this.eq((Ωbbdbr_169 = function() {
          return phrases.db instanceof Bsql3;
        }), true);
        ref = ['eleven', 'five', 'nine', 'one', 'one point five', 'seven', 'three point one'];
        for (i = 0, len = ref.length; i < len; i++) {
          phrase = ref[i];
          phrases.statements.insert_phrase.run({phrase});
        }
        //.....................................................................................................
        // echo row for row from phrases.statements.select_from_phrases.iterate { matcher: '^.*([aeiou].e).*$', }
        // echo()
        //.....................................................................................................
        // echo row for row from phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
        rows = phrases.statements.select_from_phrases.iterate({
          matcher: '([^aeiou]?[aeiou]+)(?=[mnv])'
        });
        this.eq((Ωbbdbr_170 = function() {
          return rows.next().value;
        }), {
          phrase: 'eleven',
          match: 'le',
          capture: 'le'
        });
        this.eq((Ωbbdbr_171 = function() {
          return rows.next().value;
        }), {
          phrase: 'eleven',
          match: 've',
          capture: 've'
        });
        this.eq((Ωbbdbr_172 = function() {
          return rows.next().value;
        }), {
          phrase: 'five',
          match: 'fi',
          capture: 'fi'
        });
        this.eq((Ωbbdbr_173 = function() {
          return rows.next().value;
        }), {
          phrase: 'nine',
          match: 'ni',
          capture: 'ni'
        });
        this.eq((Ωbbdbr_174 = function() {
          return rows.next().value;
        }), {
          phrase: 'one',
          match: 'o',
          capture: 'o'
        });
        this.eq((Ωbbdbr_175 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'o',
          capture: 'o'
        });
        this.eq((Ωbbdbr_176 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'poi',
          capture: 'poi'
        });
        this.eq((Ωbbdbr_177 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'fi',
          capture: 'fi'
        });
        this.eq((Ωbbdbr_178 = function() {
          return rows.next().value;
        }), {
          phrase: 'seven',
          match: 'se',
          capture: 'se'
        });
        this.eq((Ωbbdbr_179 = function() {
          return rows.next().value;
        }), {
          phrase: 'seven',
          match: 've',
          capture: 've'
        });
        this.eq((Ωbbdbr_180 = function() {
          return rows.next().value;
        }), {
          phrase: 'three point one',
          match: 'poi',
          capture: 'poi'
        });
        this.eq((Ωbbdbr_181 = function() {
          return rows.next().value;
        }), {
          phrase: 'three point one',
          match: ' o',
          capture: ' o'
        });
        this.eq((Ωbbdbr_182 = function() {
          return rows.next().value;
        }), void 0);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    file_mirror_as_table_function: function() {
      var Bsql3, Dbric, Dbric_phrases, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Bsql3 = require('better-sqlite3');
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
                var eol, line, line_nr, x;
                for (x of GUY.fs.walk_lines_with_positions(path)) {
                  ({
                    lnr: line_nr,
                    line,
                    eol
                  } = x);
                  yield ({line_nr, line});
                }
                return null;
              }
            });
            return null;
          }

        };

        Dbric_phrases.db_class = Bsql3;

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
        var db_path, dskey, i, keyword, keywords, len, line, line_nr, phrases, x, Ωbbdbr_183, Ωbbdbr_184, Ωbbdbr_185;
        db_path = '/dev/shm/bricabrac.sqlite';
        phrases = new Dbric_phrases(db_path);
        this.eq((Ωbbdbr_183 = function() {
          return (phrases.prepare(SQL`pragma foreign_keys`)).get();
        }), {
          foreign_keys: 1
        });
        this.eq((Ωbbdbr_184 = function() {
          return (phrases.prepare(SQL`pragma journal_mode`)).get();
        }), {
          journal_mode: 'wal'
        });
        this.eq((Ωbbdbr_185 = function() {
          return phrases.db instanceof Bsql3;
        }), true);
        (() => {          // #.....................................................................................................
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
// echo row for row from phrases.statements.select_from_datasources.iterate()
// echo()
// #.....................................................................................................
// echo row for row from phrases.statements.select_from_mirror.iterate()
// echo()
//.....................................................................................................
        for (x of phrases.statements.select_from_mirror.iterate()) {
          ({dskey, line_nr, line} = x);
          keywords = line.split(/(?:\p{Z}+)|((?:\p{L}+)|(?:\p{N}+)|(?:\p{S}+))/v);
// debug 'Ωbbdbr_186', line_nr, rpr keywords
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
        // #.....................................................................................................
        // echo row for row from phrases.statements.select_from_keywords.iterate()
        // echo()
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    file_mirror_with_integrated_inserts: function() {
      var Bsql3, Dbric, Dbric_phrases, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      Bsql3 = require('better-sqlite3');
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
// debug 'Ωbbdbr_187', line_nr, rpr keywords
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
                var eol, line, line_nr, x;
                for (x of GUY.fs.walk_lines_with_positions(path)) {
                  ({
                    lnr: line_nr,
                    line,
                    eol
                  } = x);
                  yield ({line_nr, line});
                }
                return null;
              }
            });
            //...................................................................................................
            return null;
          }

        };

        Dbric_phrases.db_class = Bsql3;

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
        var db_path, phrases, row, rows, Ωbbdbr_190, Ωbbdbr_191, Ωbbdbr_192, Ωbbdbr_194, Ωbbdbr_195, Ωbbdbr_196, Ωbbdbr_197, Ωbbdbr_198, Ωbbdbr_199, Ωbbdbr_200, Ωbbdbr_201, Ωbbdbr_202, Ωbbdbr_203, Ωbbdbr_204, Ωbbdbr_205, Ωbbdbr_206, Ωbbdbr_207;
        db_path = '/dev/shm/bricabrac.sqlite';
        phrases = new Dbric_phrases(db_path);
        debug('Ωbbdbr_188', phrases.teardown());
        debug('Ωbbdbr_189', phrases.rebuild());
        this.eq((Ωbbdbr_190 = function() {
          return (phrases.prepare(SQL`pragma foreign_keys`)).get();
        }), {
          foreign_keys: 1
        });
        this.eq((Ωbbdbr_191 = function() {
          return (phrases.prepare(SQL`pragma journal_mode`)).get();
        }), {
          journal_mode: 'wal'
        });
        this.eq((Ωbbdbr_192 = function() {
          return phrases.db instanceof Bsql3;
        }), true);
        (() => {          //.....................................................................................................
          var dskey, path;
          dskey = 'humdum';
          path = PATH.resolve(__dirname, '../../../assets/bricabrac/humpty-dumpty.md');
          return phrases.statements.insert_datasource.run({dskey, path});
        })();
        //.....................................................................................................
        debug('Ωbbdbr_193', phrases.statements.populate_keywords.run());
        for (row of phrases.statements.locations_from_keyword.iterate({
          keyword: 'thought'
        })) {
          //.....................................................................................................
          echo(row);
        }
        echo();
        rows = phrases.statements.locations_from_keyword.iterate({
          keyword: 'thought'
        });
        this.eq((Ωbbdbr_194 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 15,
          keyword: 'thought'
        });
        this.eq((Ωbbdbr_195 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 34,
          keyword: 'thought'
        });
        this.eq((Ωbbdbr_196 = function() {
          return rows.next().value;
        }), void 0);
        for (row of phrases.statements.locations_from_keyword.iterate({
          keyword: 'she'
        })) {
          //.....................................................................................................
          echo(row);
        }
        echo();
        rows = phrases.statements.locations_from_keyword.iterate({
          keyword: 'she'
        });
        this.eq((Ωbbdbr_197 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 2,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_198 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 3,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_199 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 4,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_200 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 5,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_201 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 15,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_202 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 17,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_203 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 18,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_204 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 26,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_205 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 34,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_206 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 36,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_207 = function() {
          return rows.next().value;
        }), void 0);
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    // #---------------------------------------------------------------------------------------------------------
    // yyy: ->
    //   { Dbric,
    //     Dbric_std,
    //     SQL,
    //     internals,                } = SFMODULES.unstable.require_dbric()
    //   { temp,                     } = SFMODULES.unstable.require_temp()
    //   Bsql3                         = require 'better-sqlite3'
    //   #.......................................................................................................
    //   class My_db extends Dbric_std
    //     @db_class: Bsql3
    //   dba = new My_db()
    //   dba.execute SQL"create table t ( d text );"
    //   for row from dba.walk SQL"select * from std_relations;"
    //     debug 'Ωbbdbr_208', row.name
    //   # for row from dba.walk SQL".dump"
    //   #   debug 'Ωbbdbr_209', row
    //   # debug 'Ωbbdbr_210', dba.db.serialize()
    //   # debug 'Ωbbdbr_211', dba.db.serialize().toString()
    //   debug 'Ωbbdbr_212', dba.execute SQL"select 1; select 2;"
    //   # error 'incomplete input':
    //   debug 'Ωbbdbr_213', dba.execute SQL"""CREATE TRIGGER jzr_mirror_triples_register
    //         instead of insert on std_relations
    //         for each row begin
    //           select trigger_on_before_insert( 'jzr_mirror_triples_base', new.rowid, new.ref, new.s, new.v, new.o );"""
    //   #.......................................................................................................
    //   return null

    //---------------------------------------------------------------------------------------------------------
    dbric_rng: function() {
      var Bsql3, Dbric_rng, False, SQL, True, Unicode_ranges, cid_of, first_unicode_cid, internals, jr, last_unicode_cid;
      ({Dbric_rng, True, False, SQL, internals} = SFMODULES.unstable.require_dbric());
      Bsql3 = require('better-sqlite3');
      jr = JSON.stringify;
      cid_of = function(chr) {
        return chr.codePointAt(0);
      };
      first_unicode_cid = 0x00_0000;
      last_unicode_cid = 0x10_ffff;
      Unicode_ranges = (function() {
        //=======================================================================================================
        class Unicode_ranges extends Dbric_rng {};

        Unicode_ranges.db_class = Bsql3;

        //-----------------------------------------------------------------------------------------------------
        Unicode_ranges.functions = {
          rng_validate_lo: {
            overwrite: true,
            value: function(lo) {
              if (!this.super.functions.rng_validate_lo.value(lo)) {
                return False;
              }
              if (!((first_unicode_cid <= lo && lo <= last_unicode_cid))) {
                return False;
              }
              return True;
            }
          },
          rng_validate_hi: {
            overwrite: true,
            value: function(hi) {
              if (!this.super.functions.rng_validate_hi.value(hi)) {
                return False;
              }
              if (!((first_unicode_cid <= hi && hi <= last_unicode_cid))) {
                return False;
              }
              return True;
            }
          }
        };

        //-----------------------------------------------------------------------------------------------------
        Unicode_ranges.build = [SQL`alter table rng_ranges add column is_ascii  boolean  generate always as ( data->>'is_ascii'  ) virtual;`, SQL`alter table rng_ranges add column ugc       text     generate always as ( data->>'ugc'       ) virtual;`, SQL`create index rng_ranges_is_ascii_idx  on rng_ranges ( is_ascii );`, SQL`create index rng_ranges_ugc_idx       on rng_ranges ( ugc      );`];

        return Unicode_ranges;

      }).call(this);
      (() => {        //=======================================================================================================
        var db, row, rows, Ωbbdbr_214, Ωbbdbr_215, Ωbbdbr_216, Ωbbdbr_217, Ωbbdbr_218, Ωbbdbr_219, Ωbbdbr_220, Ωbbdbr_221;
        db = new Unicode_ranges(':memory:');
        db.rng_add_range({
          lo: 0,
          hi: 127,
          data: {
            is_ascii: true
          }
        });
        db.rng_add_range({
          lo: 0x00bc,
          hi: 0x00bc,
          data: {
            uname: 'VULGAR FRACTION ONE QUARTER',
            ugc: 'No',
            is_ascii: false
          }
        });
        db.rng_add_range({
          lo: cid_of('A'),
          hi: cid_of('Z'),
          data: {
            ugc: 'Lu'
          }
        });
        db.rng_add_range({
          lo: cid_of('a'),
          hi: cid_of('z'),
          data: {
            ugc: 'Ll'
          }
        });
        this.throws((Ωbbdbr_214 = function() {
          return db.rng_add_range({
            lo: 10,
            hi: 8
          });
        }), /Ωrng_validate_lohi/);
        this.throws((Ωbbdbr_215 = function() {
          return db.rng_add_range({
            lo: -10,
            hi: 8
          });
        }), /Ωrng_validate_lo/);
        this.throws((Ωbbdbr_216 = function() {
          return db.rng_add_range({
            lo: 10,
            hi: 0x20_0000
          });
        }), /Ωrng_validate_hi/);
        for (row of rows = db.walk(db.statements.rng_all_ranges)) {
          //.....................................................................................................
          echo(row);
        }
        rows = db.walk(db.statements.rng_all_ranges);
        this.eq((Ωbbdbr_217 = function() {
          return rows.next().value;
        }), {
          lo: 0,
          hi: 127,
          data: '{"is_ascii":true}',
          is_ascii: 1,
          ugc: null
        });
        this.eq((Ωbbdbr_218 = function() {
          return rows.next().value;
        }), {
          lo: 65,
          hi: 90,
          data: '{"ugc":"Lu"}',
          is_ascii: null,
          ugc: 'Lu'
        });
        this.eq((Ωbbdbr_219 = function() {
          return rows.next().value;
        }), {
          lo: 97,
          hi: 122,
          data: '{"ugc":"Ll"}',
          is_ascii: null,
          ugc: 'Ll'
        });
        this.eq((Ωbbdbr_220 = function() {
          return rows.next().value;
        }), {
          lo: 188,
          hi: 188,
          data: '{"is_ascii":false,"ugc":"No","uname":"VULGAR FRACTION ONE QUARTER"}',
          is_ascii: 0,
          ugc: 'No'
        });
        this.eq((Ωbbdbr_221 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      (() => {        //=======================================================================================================
        var db, row, rows;
        db = new Unicode_ranges(':memory:');
        //.....................................................................................................
        db.rng_add_range({
          lo: 0,
          hi: 127,
          data: {
            ugc: 'Cc'
          }
        });
        db.rng_add_range({
          lo: cid_of('F'),
          data: {
            ugc: 'Lu'
          }
        });
        for (row of rows = db.walk(db.statements.rng_all_ranges)) {
          // db.rng_add_range { lo: ( cid_of 'G' ), data: { is_ascii: true, data: { ugc: 'Cc', } }, }
          echo(row);
        }
        // rows = db.walk db.statements.rng_all_ranges
        // @eq ( Ωbbdbr_222 = -> rows.next().value ), { lo:  0, hi:  69, data: '{"ugc":"Cc"}', is_ascii: null, ugc: 'Cc', }
        // @eq ( Ωbbdbr_223 = -> rows.next().value ), { lo: 70, hi:  70, data: '{"ugc":"Lu"}', is_ascii: null, ugc: 'Lu', }
        // @eq ( Ωbbdbr_224 = -> rows.next().value ), { lo: 71, hi: 127, data: '{"ugc":"Cc"}', is_ascii: null, ugc: 'Cc', }
        // @eq ( Ωbbdbr_225 = -> rows.next().done ), true
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
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: false,
        show_passes: true,
        report_checks: true
      };
      // ( new Test guytest_cfg ).test { tests, }
      // ( new Test guytest_cfg ).test { dbric_std_generate_series: tests.dbric_std_generate_series, }
      return (new Test(guytest_cfg)).test({
        dbric_rng: tests.dbric_rng
      });
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEVBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFB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QSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtR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LEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENB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O1FBQUUsU0FBQSxFQUFXLEtBQUssQ0FBQztNQUFuQixDQUE5QjtJQVJzQyxDQUFBLElBQXhDOztBQXJzQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtZGJyaWMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxucmVtb3ZlID0gKCBwYXRoICkgLT5cbiAgdHJ5XG4gICAgRlMudW5saW5rU3luYyBwYXRoXG4gICAgaGVscCAnzqliYmRicl9fXzEnLCBcInJlbW92ZWQgI3tycHIgcGF0aH1cIlxuICBjYXRjaCBlcnJvclxuICAgIHRocm93IGVycm9yIHVubGVzcyBlcnJvci5jb2RlIGlzICdFTk9FTlQnXG4gICAgdXJnZSAnzqliYmRicl9fXzInLCBcIm5vIHN1Y2ggRlMgb2JqZWN0OiAje3JwciBwYXRofVwiXG4gIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19lc3FsOiAtPlxuICAgIHsgZXNxbCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fMyA9IC0+IGludGVybmFscy50eXBlX29mIGVzcWwudW5xdW90ZV9uYW1lICksICdmdW5jdGlvbidcbiAgICBAZXEgICAgICggzqliYmRicl9fXzQgPSAtPiBlc3FsLnVucXVvdGVfbmFtZSAnYWJjJyAgICAgICAgICAgICApLCAnYWJjJ1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fNSA9IC0+IGVzcWwudW5xdW90ZV9uYW1lICdcImFiY1wiJyAgICAgICAgICAgKSwgJ2FiYydcbiAgICBAZXEgICAgICggzqliYmRicl9fXzYgPSAtPiBlc3FsLnVucXVvdGVfbmFtZSAnXCJhYlwiXCJjXCInICAgICAgICAgKSwgJ2FiXCJjJ1xuICAgIEB0aHJvd3MgKCDOqWJiZGJyX19fNyA9IC0+IGVzcWwudW5xdW90ZV9uYW1lICcnICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIG5hbWUvXG4gICAgQHRocm93cyAoIM6pYmJkYnJfX184ID0gLT4gZXNxbC51bnF1b3RlX25hbWUgJ1wiJyAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIG5hbWUvXG4gICAgQHRocm93cyAoIM6pYmJkYnJfX185ID0gLT4gZXNxbC51bnF1b3RlX25hbWUgJ1wiXCInICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBuYW1lL1xuICAgIEB0aHJvd3MgKCDOqWJiZGJyX18xMCA9IC0+IGVzcWwudW5xdW90ZV9uYW1lIGZhbHNlICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHRleHQsIGdvdCBhIGJvb2xlYW4vXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVqZWN0X25vbmNvbmZvcm1hbnRfYnVpbGRfc3RhdGVtZW50czogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIHsgdGVtcCwgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdGVtcCgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBEYnJpY19ub25jb25mb3JtIGV4dGVuZHMgRGJyaWNcbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJcbiAgICAgICAgICBjcmVhdGUgdGFibGUgbm9uY29uZm9ybV9vbmUgKCBhIHRleHQgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICAgU1FMXCJcIlwiXG4gICAgICAgICAgLS0gdGhpcyBjb21tZW50IHNob3VsZG4ndCBiZSBoZXJlXG4gICAgICAgICAgY3JlYXRlIHZpZXcgbm9uY29uZm9ybV90d28gYXMgc2VsZWN0ICogZnJvbSBub25jb25mb3JtX29uZTtcIlwiXCJcbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdGVtcC53aXRoX2RpcmVjdG9yeSB7IGtlZXA6IGZhbHNlLCB9LCAoeyBwYXRoOiBmb2xkZXJfcGF0aCwgfSkgPT5cbiAgICAgIGRiX3BhdGggPSAnOm1lbW9yeTonXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIEB0aHJvd3MgKCDOqWJiZGJyX18xMSA9IC0+IGRiID0gbmV3IERicmljX25vbmNvbmZvcm0gZGJfcGF0aCApLCAvMSBvdXQgb2YgMiBidWlsZCBzdGF0ZW1lbnRcXChzXFwpIGNvdWxkIG5vdCBiZSBwYXJzZWQvXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIEB0aHJvd3MgKCDOqWJiZGJyX18xMiA9IC0+IG5ldyBEYnJpY19ub25jb25mb3JtIGRiX3BhdGggKSwgLzEgb3V0IG9mIDIgYnVpbGQgc3RhdGVtZW50XFwoc1xcKSBjb3VsZCBub3QgYmUgcGFyc2VkL1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX3N0ZDogLT5cbiAgICB7IERicmljLFxuICAgICAgRGJyaWNfc3RkLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIHsgdGVtcCwgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdGVtcCgpXG4gICAgQnNxbDMgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdiZXR0ZXItc3FsaXRlMydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRlbXAud2l0aF9kaXJlY3RvcnkgeyBrZWVwOiBmYWxzZSwgfSwgKHsgcGF0aDogZm9sZGVyX3BhdGgsIH0pID0+XG4gICAgICAjIGZvbGRlcl9wYXRoID0gJy90bXAvYnJpY2JyYWMtdGVzdCcgIyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcbiAgICAgIGRiX3BhdGggPSBQQVRILmpvaW4gZm9sZGVyX3BhdGgsICdicmljYWJyYWMuc3FsaXRlJ1xuICAgICAgcmVtb3ZlIGRiX3BhdGhcbiAgICAgIGhlbHAgJ86pYmJkYnJfXzEzJywgeyBkYl9wYXRoLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gbmV3IERicmljIGRiX3BhdGhcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18xNCA9IC0+IGRiLmlzX3JlYWR5ICksIHRydWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSAoIG5ldyBEYnJpYyBkYl9wYXRoIClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18xNSA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMTYgPSAtPiBkYi5fZ2V0X2RiX29iamVjdHMoKSAgICAgICAgKSwge31cbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18xNyA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMTggPSAtPiBkYi5idWlsZCgpICAgICAgICAgICAgICAgICAgKSwgMFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdGVtcC53aXRoX2RpcmVjdG9yeSB7IGtlZXA6IGZhbHNlLCB9LCAoeyBwYXRoOiBmb2xkZXJfcGF0aCwgfSkgPT5cbiAgICAgICMgZm9sZGVyX3BhdGggPSAnL3RtcC9icmljYnJhYy10ZXN0JyAjICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxuICAgICAgZGJfcGF0aCA9IFBBVEguam9pbiBmb2xkZXJfcGF0aCwgJ2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICByZW1vdmUgZGJfcGF0aFxuICAgICAgaGVscCAnzqliYmRicl9fMTknLCB7IGRiX3BhdGgsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBuZXcgRGJyaWMgZGJfcGF0aFxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzIwID0gLT4gZGIuaXNfcmVhZHkgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzIxID0gLT4gZGIuY2ZnLnByZWZpeCAgICAgKSwgJyhOT1BSRUZJWCknXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjIgPSAtPiBkYi5wcmVmaXggICAgICAgICApLCAnJ1xuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzIzID0gLT4gZGIucHJlZml4X3JlICAgICAgKSwgL3wvXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gbmV3IERicmljX3N0ZCBkYl9wYXRoLCB7IGRiX2NsYXNzOiBCc3FsMywgfVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI0ID0gLT4gZGIuaXNfcmVhZHkgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI1ID0gLT4gZGIuY2ZnLnByZWZpeCAgICAgKSwgJ3N0ZCdcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yNiA9IC0+IGRiLnByZWZpeCAgICAgICAgICksICdzdGQnXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjcgPSAtPiBkYi5wcmVmaXhfcmUgICAgICApLCAvXl8/XFx4NzN0ZF8uKiQvXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gKCBuZXcgRGJyaWNfc3RkIGRiX3BhdGgsIHsgZGJfY2xhc3M6IEJzcWwzLCB9IClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yOCA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjkgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljX3N0ZCAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzMwID0gLT4gZGIuX2dldF9kYl9vYmplY3RzKCkgICAgICAgICksIHtcbiAgICAgICAgICBzdGRfdGFibGVzOiAgICAgeyBuYW1lOiAnc3RkX3RhYmxlcycsICAgICB0eXBlOiAndmlldycgfSxcbiAgICAgICAgICBzdGRfdmlld3M6ICAgICAgeyBuYW1lOiAnc3RkX3ZpZXdzJywgICAgICB0eXBlOiAndmlldycgfSxcbiAgICAgICAgICBzdGRfcmVsYXRpb25zOiAgeyBuYW1lOiAnc3RkX3JlbGF0aW9ucycsICB0eXBlOiAndmlldycgfSB9XG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzEgPSAtPiBkYi5pc19yZWFkeSAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzMyID0gLT4gZGIuYnVpbGQoKSAgICAgICAgICAgICAgICAgICksIDBcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSAoIG5ldyBEYnJpY19zdGQgZGJfcGF0aCwgeyBkYl9jbGFzczogQnNxbDMsIH0gKVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzMzID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpYyAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zNCA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWNfc3RkICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzUgPSAtPiBkYi5fZ2V0X2RiX29iamVjdHMoKSAgICAgICAgKSwge1xuICAgICAgICAgIHN0ZF90YWJsZXM6ICAgICB7IG5hbWU6ICdzdGRfdGFibGVzJywgICAgIHR5cGU6ICd2aWV3JyB9LFxuICAgICAgICAgIHN0ZF92aWV3czogICAgICB7IG5hbWU6ICdzdGRfdmlld3MnLCAgICAgIHR5cGU6ICd2aWV3JyB9LFxuICAgICAgICAgIHN0ZF9yZWxhdGlvbnM6ICB7IG5hbWU6ICdzdGRfcmVsYXRpb25zJywgIHR5cGU6ICd2aWV3JyB9IH1cbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zNiA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzcgPSAtPiBkYi5idWlsZCgpICAgICAgICAgICAgICAgICAgKSwgMFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9ICggbmV3IERicmljX3N0ZCBkYl9wYXRoLCB7IGRiX2NsYXNzOiBCc3FsMywgfSApXG4gICAgICAgICggZGIucHJlcGFyZSBTUUxcImRyb3AgdmlldyBzdGRfdGFibGVzO1wiICkucnVuKClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zOCA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9ICggbmV3IERicmljX3N0ZCBkYl9wYXRoLCB7IGRiX2NsYXNzOiBCc3FsMywgfSApXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzkgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzQwID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpY19zdGQgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180MSA9IC0+IGRiLl9nZXRfZGJfb2JqZWN0cygpICAgICAgICApLCB7XG4gICAgICAgICAgc3RkX3RhYmxlczogICAgIHsgbmFtZTogJ3N0ZF90YWJsZXMnLCAgICAgdHlwZTogJ3ZpZXcnIH0sXG4gICAgICAgICAgc3RkX3ZpZXdzOiAgICAgIHsgbmFtZTogJ3N0ZF92aWV3cycsICAgICAgdHlwZTogJ3ZpZXcnIH0sXG4gICAgICAgICAgc3RkX3JlbGF0aW9uczogIHsgbmFtZTogJ3N0ZF9yZWxhdGlvbnMnLCAgdHlwZTogJ3ZpZXcnIH0gfVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzQyID0gLT4gZGIuaXNfcmVhZHkgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180MyA9IC0+IGRiLmJ1aWxkKCkgICAgICAgICAgICAgICAgICApLCAwXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfc3RkX2dlbmVyYXRlX3NlcmllczogLT5cbiAgICBCc3FsMyAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2JldHRlci1zcWxpdGUzJ1xuICAgIHsgRGJyaWMsXG4gICAgICBEYnJpY19zdGQsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgeyB0ZW1wLCAgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90ZW1wKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgc3FsaXRlPiBzZWxlY3QgKiBmcm9tIGdlbmVyYXRlX3NlcmllcyggMSwgMTAsIDAgKTtcbiAgICAjIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkFxuICAgICMg4pSCIHZhbHVlIOKUglxuICAgICMg4pSc4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSkXG4gICAgIyDilIIgMSAgICAg4pSCXG4gICAgIyDilIIgMiAgICAg4pSCXG4gICAgIyDilIIgMyAgICAg4pSCXG4gICAgIyDilIIgNCAgICAg4pSCXG4gICAgIyDilIIgNSAgICAg4pSCXG4gICAgIyDilIIgNiAgICAg4pSCXG4gICAgIyDilIIgNyAgICAg4pSCXG4gICAgIyDilIIgOCAgICAg4pSCXG4gICAgIyDilIIgOSAgICAg4pSCXG4gICAgIyDilIIgMTAgICAg4pSCXG4gICAgIyDilJTilIDilIDilIDilIDilIDilIDilIDilJhcbiAgICAjIHNxbGl0ZT4gc2VsZWN0ICogZnJvbSBnZW5lcmF0ZV9zZXJpZXMoIDEsIDEwLCAwICk7XG4gICAgIyDilIzilIDilIDilIDilIDilIDilIDilIDilJBcbiAgICAjIOKUgiB2YWx1ZSDilIJcbiAgICAjIOKUnOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUpFxuICAgICMg4pSCIDEgICAgIOKUglxuICAgICMg4pSCIDIgICAgIOKUglxuICAgICMg4pSCIDMgICAgIOKUglxuICAgICMg4pSCIDQgICAgIOKUglxuICAgICMg4pSCIDUgICAgIOKUglxuICAgICMg4pSCIDYgICAgIOKUglxuICAgICMg4pSCIDcgICAgIOKUglxuICAgICMg4pSCIDggICAgIOKUglxuICAgICMg4pSCIDkgICAgIOKUglxuICAgICMg4pSCIDEwICAgIOKUglxuICAgICMg4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYXG4gICAgIyBzcWxpdGU+IHNlbGVjdCAqIGZyb20gZ2VuZXJhdGVfc2VyaWVzKCAxLCAxLCAwICk7XG4gICAgIyDilIzilIDilIDilIDilIDilIDilIDilIDilJBcbiAgICAjIOKUgiB2YWx1ZSDilIJcbiAgICAjIOKUnOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUpFxuICAgICMg4pSCIDEgICAgIOKUglxuICAgICMg4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYXG4gICAgIyBzcWxpdGU+IHNlbGVjdCAqIGZyb20gZ2VuZXJhdGVfc2VyaWVzKCAxLCAwLCAwICk7XG4gICAgIyBzcWxpdGU+XG5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBEYiBleHRlbmRzIERicmljX3N0ZFxuICAgICAgICBAZGJfY2xhc3M6IEJzcWwzXG4gICAgICBkYiA9IG5ldyBEYiAnOm1lbW9yeTonXG4gICAgICBAZXEgKCDOqWJiZGJyX180NCA9IC0+IFsgKCByb3cudmFsdWUgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHN0ZF9nZW5lcmF0ZV9zZXJpZXMoIDEsIDEwLCAyICk7XCIpLi4uLCAgXSApLCBbIDEsIDMsIDUsIDcsIDkgXVxuICAgICAgQGVxICggzqliYmRicl9fNDUgPSAtPiBbICggcm93LnZhbHVlIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBzdGRfZ2VuZXJhdGVfc2VyaWVzKCAxLCAxMCwgMCApO1wiKS4uLiwgIF0gKSwgWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCBdXG4gICAgICBAZXEgKCDOqWJiZGJyX180NiA9IC0+IFsgKCByb3cudmFsdWUgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHN0ZF9nZW5lcmF0ZV9zZXJpZXMoIDEsIDEsIDAgKTtcIikuLi4sICAgXSApLCBbIDEgXVxuICAgICAgQGVxICggzqliYmRicl9fNDcgPSAtPiBbICggcm93LnZhbHVlIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBzdGRfZ2VuZXJhdGVfc2VyaWVzKCAxLCAwLCAwICk7XCIpLi4uLCAgIF0gKSwgW11cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdGVtZW50X2luaGVyaXRhbmNlOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBEYnJpY19zdGQsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgIyB7IHRlbXAsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3RlbXAoKVxuICAgICMgeyBTdGF0ZW1lbnRTeW5jLCAgICAgICAgICAgIH0gPSByZXF1aXJlICdub2RlOnNxbGl0ZSdcbiAgICBCc3FsMyAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2JldHRlci1zcWxpdGUzJ1xuICAgIHN0YXRlbWVudF9jbGFzcyAgICAgICAgICAgICAgID0gKCAoIG5ldyBCc3FsMyAnOm1lbW9yeTonICkucHJlcGFyZSBTUUxcInNlbGVjdCAxIHdoZXJlIGZhbHNlO1wiICkuY29uc3RydWN0b3JcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGdldF9mdW5jdGlvbl9uYW1lcyA9ICggZGJhICkgLT4gbmV3IFNldCAoIG5hbWUgZm9yIHsgbmFtZSwgfSBmcm9tIFxcXG4gICAgICBkYmEud2FsayBTUUxcInNlbGVjdCBuYW1lIGZyb20gcHJhZ21hX2Z1bmN0aW9uX2xpc3QoKSBvcmRlciBieSBuYW1lO1wiIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGdldF90YWJsZV9uYW1lcyA9ICggZGJhICkgLT4gbmV3IFNldCAoIG5hbWUgZm9yIHsgbmFtZSwgfSBmcm9tIFxcXG4gICAgICBkYmEud2FsayBTUUxcIlwiXCJzZWxlY3QgbmFtZSBmcm9tIHNxbGl0ZV9zY2hlbWFcbiAgICAgIHdoZXJlIHR5cGUgaXMgJ3RhYmxlJyBvcmRlciBieSBuYW1lO1wiXCJcIiApXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBnZXRfdmlld19uYW1lcyA9ICggZGJhICkgLT4gbmV3IFNldCAoIG5hbWUgZm9yIHsgbmFtZSwgfSBmcm9tIFxcXG4gICAgICBkYmEud2FsayBTUUxcIlwiXCJzZWxlY3QgbmFtZSBmcm9tIHNxbGl0ZV9zY2hlbWFcbiAgICAgIHdoZXJlIHR5cGUgaXMgJ3ZpZXcnIG9yZGVyIGJ5IG5hbWU7XCJcIlwiIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGdldF90cmlnZ2VyX25hbWVzID0gKCBkYmEgKSAtPiBuZXcgU2V0ICggbmFtZSBmb3IgeyBuYW1lLCB9IGZyb20gXFxcbiAgICAgIGRiYS53YWxrIFNRTFwiXCJcInNlbGVjdCBuYW1lIGZyb20gc3FsaXRlX3NjaGVtYVxuICAgICAgd2hlcmUgdHlwZSBpcyAndHJpZ2dlcicgb3JkZXIgYnkgbmFtZTtcIlwiXCIgKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgQSBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQGRiX2NsYXNzOiBCc3FsM1xuICAgICAgQGZ1bmN0aW9uczpcbiAgICAgICAgZm5fYTpcbiAgICAgICAgICB2YWx1ZTogLT4gcmV0dXJuIDFcbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBzZWxlY3RfYTogU1FMXCJzZWxlY3QgZm5fYSgpIGFzIG9uZSwgMiBhcyB0d287XCJcbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcImNyZWF0ZSB0YWJsZSB0YWJsZV9hICggZCB0ZXh0ICk7XCJcbiAgICAgICAgU1FMXCJjcmVhdGUgdmlldyB2aWV3X2EgYXMgc2VsZWN0ICogZnJvbSB0YWJsZV9hO1wiXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEIgZXh0ZW5kcyBBXG4gICAgICBAZnVuY3Rpb25zOlxuICAgICAgICBmbl9iOlxuICAgICAgICAgIHZhbHVlOiAtPiByZXR1cm4gMVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIHNlbGVjdF9iOiBTUUxcInNlbGVjdCBmbl9iKCkgYXMgb25lLCAyIGFzIHR3bztcIlxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiY3JlYXRlIHRhYmxlIHRhYmxlX2IgKCBkIHRleHQgKTtcIlxuICAgICAgICBTUUxcImNyZWF0ZSB2aWV3IHZpZXdfYiBhcyBzZWxlY3QgKiBmcm9tIHRhYmxlX2I7XCJcbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgQ19kdXBsaWNhdGVfZnVuY3Rpb24gZXh0ZW5kcyBCXG4gICAgICBAZnVuY3Rpb25zOlxuICAgICAgICBmbl9iOlxuICAgICAgICAgIHZhbHVlOiAtPiByZXR1cm4gMVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgQ19kdXBsaWNhdGVfc3RhdGVtZW50IGV4dGVuZHMgQlxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIHNlbGVjdF9iOiBTUUxcInNlbGVjdCBmbl9iKCkgYXMgb25lLCAyIGFzIHR3bztcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgQ19kdXBsaWNhdGVfdGFibGUgZXh0ZW5kcyBCXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJjcmVhdGUgdGFibGUgdGFibGVfYiAoIGQgdGV4dCApO1wiXG4gICAgICAgIFNRTFwiY3JlYXRlIHZpZXcgdmlld19iIGFzIHNlbGVjdCAqIGZyb20gdGFibGVfYjtcIlxuICAgICAgICBdXG4gICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgYiA9IG5ldyBCKClcbiAgICAjIGRlYnVnICfOqWJiZGJyX180OCcsIGJcbiAgICAjIGRlYnVnICfOqWJiZGJyX180OScsICdmdW5jdGlvbnM6ICcsIGdldF9mdW5jdGlvbl9uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNTAnLCAnZnVuY3Rpb25zOiAnLCAoIGdldF9mdW5jdGlvbl9uYW1lcyBiICkuaGFzICdmbl9hJ1xuICAgICMgZGVidWcgJ86pYmJkYnJfXzUxJywgJ2Z1bmN0aW9uczogJywgKCBnZXRfZnVuY3Rpb25fbmFtZXMgYiApLmhhcyAnZm5fYidcbiAgICAjIGRlYnVnICfOqWJiZGJyX181MicsICdmdW5jdGlvbnM6ICcsICggZ2V0X2Z1bmN0aW9uX25hbWVzIGIgKS5oYXMgJ3JlZ2V4cCdcbiAgICAjIGRlYnVnICfOqWJiZGJyX181MycsICd0YWJsZXM6ICAgICcsIGdldF90YWJsZV9uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNTQnLCAndmlld3M6ICAgICAnLCBnZXRfdmlld19uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNTUnLCAndHJpZ2dlcnM6ICAnLCBnZXRfdHJpZ2dlcl9uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNTYnLCAnc3RhdGVtZW50czonLCAoIGsgZm9yIGsgb2YgYi5zdGF0ZW1lbnRzIClcbiAgICAjIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZGJhID0gbmV3IERicmljX3N0ZCAnOm1lbW9yeTonLCB7IGRiX2NsYXNzOiBCc3FsMywgfVxuICAgICAgIyBkYmEgPSBuZXcgQSgpXG4gICAgICAjIGRiYSA9IG5ldyBCKClcbiAgICAgIGRiYS5kYi5mdW5jdGlvbiAnenp6X3Rlc3QnLCB7IGRldGVybWluaXN0aWM6IHRydWUsIHZhcmFyZ3M6IGZhbHNlLCBkaXJlY3RPbmx5OiBmYWxzZSwgfSwgLT4gXCJaWlpfVEVTVFwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZ1bmN0aW9uX25hbWVzICA9IGdldF9mdW5jdGlvbl9uYW1lcyBkYmFcbiAgICAgIHRhYmxlX25hbWVzICAgICA9IGdldF90YWJsZV9uYW1lcyBkYmFcbiAgICAgIHZpZXdfbmFtZXMgICAgICA9IGdldF92aWV3X25hbWVzIGRiYVxuICAgICAgdHJpZ2dlcl9uYW1lcyAgID0gZ2V0X3RyaWdnZXJfbmFtZXMgZGJhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzU3ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9zY2hlbWEgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX181OCA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdGFibGVzICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNTkgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3ZpZXdzICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzYwID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9yZWxhdGlvbnMgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX182MSA9IC0+IGRiYS5zdGF0ZW1lbnRzLnNlbGVjdF9hICAgICAgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzYyID0gLT4gZGJhLnN0YXRlbWVudHMuc2VsZWN0X2IgICAgICAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX182MyA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnenp6X3Rlc3QnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNjQgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ3JlZ2V4cCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzY1ID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdmbl9hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmRicl9fNjYgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzY3ID0gLT4gdGFibGVfbmFtZXMuaGFzICd0YWJsZV9hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmRicl9fNjggPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX182OSA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdGFibGVzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNzAgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3ZpZXdzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzcxID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF9yZWxhdGlvbnMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX183MiA9IC0+IHZpZXdfbmFtZXMuaGFzICd2aWV3X2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzczID0gLT4gdmlld19uYW1lcy5oYXMgJ3ZpZXdfYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBkYmEgPSBuZXcgQSgpXG4gICAgICBkYmEuZGIuZnVuY3Rpb24gJ3p6el90ZXN0JywgeyBkZXRlcm1pbmlzdGljOiB0cnVlLCB2YXJhcmdzOiBmYWxzZSwgZGlyZWN0T25seTogZmFsc2UsIH0sIC0+IFwiWlpaX1RFU1RcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBmdW5jdGlvbl9uYW1lcyAgPSBnZXRfZnVuY3Rpb25fbmFtZXMgZGJhXG4gICAgICB0YWJsZV9uYW1lcyAgICAgPSBnZXRfdGFibGVfbmFtZXMgZGJhXG4gICAgICB2aWV3X25hbWVzICAgICAgPSBnZXRfdmlld19uYW1lcyBkYmFcbiAgICAgIHRyaWdnZXJfbmFtZXMgICA9IGdldF90cmlnZ2VyX25hbWVzIGRiYVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX183NCA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfc2NoZW1hICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNzUgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3RhYmxlcyAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzc2ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF92aWV3cyAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX183NyA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfcmVsYXRpb25zICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNzggPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYSAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzc5ID0gLT4gZGJhLnN0YXRlbWVudHMuc2VsZWN0X2IgICAgICAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX184MCA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnenp6X3Rlc3QnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODEgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ3JlZ2V4cCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzgyID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdmbl9hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184MyA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnZm5fYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fODQgPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg1ID0gLT4gdGFibGVfbmFtZXMuaGFzICd0YWJsZV9iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmRicl9fODYgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3RhYmxlcycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg3ID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF92aWV3cycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184OCA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfcmVsYXRpb25zJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODkgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzkwID0gLT4gdmlld19uYW1lcy5oYXMgJ3ZpZXdfYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBkYmEgPSBuZXcgQigpXG4gICAgICBkYmEuZGIuZnVuY3Rpb24gJ3p6el90ZXN0JywgeyBkZXRlcm1pbmlzdGljOiB0cnVlLCB2YXJhcmdzOiBmYWxzZSwgZGlyZWN0T25seTogZmFsc2UsIH0sIC0+IFwiWlpaX1RFU1RcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBmdW5jdGlvbl9uYW1lcyAgPSBnZXRfZnVuY3Rpb25fbmFtZXMgZGJhXG4gICAgICB0YWJsZV9uYW1lcyAgICAgPSBnZXRfdGFibGVfbmFtZXMgZGJhXG4gICAgICB2aWV3X25hbWVzICAgICAgPSBnZXRfdmlld19uYW1lcyBkYmFcbiAgICAgIHRyaWdnZXJfbmFtZXMgICA9IGdldF90cmlnZ2VyX25hbWVzIGRiYVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX185MSA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfc2NoZW1hICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTIgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3RhYmxlcyAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzkzID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF92aWV3cyAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX185NCA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfcmVsYXRpb25zICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTUgPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYSAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzk2ID0gLT4gZGJhLnN0YXRlbWVudHMuc2VsZWN0X2IgICAgICAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzk3ID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICd6enpfdGVzdCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX185OCA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAncmVnZXhwJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTkgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTAwID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdmbl9iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTAxID0gLT4gdGFibGVfbmFtZXMuaGFzICd0YWJsZV9hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzEwMiA9IC0+IHRhYmxlX25hbWVzLmhhcyAndGFibGVfYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMDMgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3RhYmxlcycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTA0ID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF92aWV3cycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzEwNSA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfcmVsYXRpb25zJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMDYgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTA3ID0gLT4gdmlld19uYW1lcy5oYXMgJ3ZpZXdfYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyXzEwOCA9IC0+IG5ldyBDX2R1cGxpY2F0ZV9mdW5jdGlvbigpICAgICksIC9hIFVERiBvciBidWlsdC1pbiBmdW5jdGlvbiBuYW1lZCAnZm5fYicgaGFzIGFscmVhZHkgYmVlbiBkZWNsYXJlZC9cbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyXzEwOSA9IC0+IG5ldyBDX2R1cGxpY2F0ZV9zdGF0ZW1lbnQoKSAgICksIC9zdGF0ZW1lbnQgJ3NlbGVjdF9iJyBpcyBhbHJlYWR5IGRlY2xhcmVkL1xuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMTEwID0gLT4gbmV3IENfZHVwbGljYXRlX3RhYmxlKCkgICAgICAgKSwgL3RhYmxlIHRhYmxlX2IgYWxyZWFkeSBleGlzdHMvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGlzYWxsb3dfb3ZlcndyaXRpbmdfcHJvcGVydGllc193aXRoX2Z1bmN0aW9uczogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgICMgZGVidWcgJ86pYmJkYnJfMTExJywgbmV3IERicmljICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgIGRvID0+XG4gICAgICBkYiAgICAgICAgPSAoIG5ldyBEYnJpYyAnOm1lbW9yeTonIClcbiAgICAgIGRiX3Byb3RvICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiBkYlxuICAgICAgZGVidWcgJ86pYmJkYnJfMTEyJywgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciBkYl9wcm90bywgJ2lzX3JlYWR5J1xuICAgICAgZGVidWcgJ86pYmJkYnJfMTEzJywgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciBkYl9wcm90bywgJ19nZXRfaXNfcmVhZHknXG4gICAgICA7bnVsbFxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIyMjIHVzZSBkZXJpdmVkIGNsYXNzZXMgdG8gYXNzZXJ0IHRoYXQgcHJvcGVydHkgZGVzY3JpcHRvcnMgYXJlIHNlYXJjaGVkIGZvciBpbiB0aGUgcHJvdG90eXBlIGNoYWluOiAjIyNcbiAgICBjbGFzcyBEYnJpY19BIGV4dGVuZHMgRGJyaWNcbiAgICBjbGFzcyBEYnJpY19CIGV4dGVuZHMgRGJyaWNfQVxuICAgIGNsYXNzIERicmljX0MgZXh0ZW5kcyBEYnJpY19CXG4gICAgY2xhc3MgRGJyaWNfWiBleHRlbmRzIERicmljX0NcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRvID0+XG4gICAgICBjbGFzcyBEYnJpY19ub25jb25mb3JtIGV4dGVuZHMgRGJyaWNfWlxuICAgICAgICBpc19yZWFkeTogLT5cbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyXzExNCA9IC0+IG5ldyBEYnJpY19ub25jb25mb3JtKCkgKSwgL25vdCBhbGxvd2VkIHRvIG92ZXJyaWRlIHByb3BlcnR5ICdpc19yZWFkeSc7IHVzZSAnX2dldF9pc19yZWFkeSBpbnN0ZWFkL1xuICAgICAgO251bGxcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRvID0+XG4gICAgICBjbGFzcyBEYnJpY19ub25jb25mb3JtIGV4dGVuZHMgRGJyaWNfWlxuICAgICAgICBwcmVmaXg6IC0+XG4gICAgICBAdGhyb3dzICggzqliYmRicl8xMTUgPSAtPiBuZXcgRGJyaWNfbm9uY29uZm9ybSgpICksIC9ub3QgYWxsb3dlZCB0byBvdmVycmlkZSBwcm9wZXJ0eSAncHJlZml4JzsgdXNlICdfZ2V0X3ByZWZpeCBpbnN0ZWFkL1xuICAgICAgO251bGxcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRvID0+XG4gICAgICBjbGFzcyBEYnJpY19ub25jb25mb3JtIGV4dGVuZHMgRGJyaWNfWlxuICAgICAgICBwcmVmaXhfcmU6IC0+XG4gICAgICBAdGhyb3dzICggzqliYmRicl8xMTYgPSAtPiBuZXcgRGJyaWNfbm9uY29uZm9ybSgpICksIC9ub3QgYWxsb3dlZCB0byBvdmVycmlkZSBwcm9wZXJ0eSAncHJlZml4X3JlJzsgdXNlICdfZ2V0X3ByZWZpeF9yZSBpbnN0ZWFkL1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzYW1wbGVfZGI6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICAjIGRlYnVnICfOqWJiZGJyXzExNycsIG5ldyBEYnJpYyAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3N0b3JlIGV4dGVuZHMgRGJyaWNcbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgc3RvcmVfZmFjZXRzIChcbiAgICAgICAgICBmYWNldF9rZXkgICAgICAgICAgICAgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgZmFjZXRfdmFsdWUgICAgICAgICAgIGpzb24gKTtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgICMgc3RvcmVfY3JlYXRlX3RhYmxlczogU1FMXCJcIlwiXG4gICAgICAgICMgICBcIlwiXCJcbiAgICAgICAgc3RvcmVfaW5zZXJ0X2ZhY2V0OiBTUUxcIlwiXCJcbiAgICAgICAgICBpbnNlcnQgaW50byBzdG9yZV9mYWNldHMgKCBmYWNldF9rZXksIGZhY2V0X3ZhbHVlICkgdmFsdWVzICggJGZhY2V0X2tleSwgJGZhY2V0X3ZhbHVlIClcbiAgICAgICAgICAgIG9uIGNvbmZsaWN0ICggZmFjZXRfa2V5ICkgZG8gdXBkYXRlIHNldCBmYWNldF92YWx1ZSA9IGV4Y2x1ZGVkLmZhY2V0X3ZhbHVlO1wiXCJcIlxuICAgICAgICBzdG9yZV9nZXRfZmFjZXRzOiBTUUxcIlwiXCJcbiAgICAgICAgICBzZWxlY3QgKiBmcm9tIHN0b3JlX2ZhY2V0cyBvcmRlciBieSBmYWNldF9rZXk7XCJcIlwiXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBzdG9yZSAgICAgPSBuZXcgRGJyaWNfc3RvcmUgZGJfcGF0aFxuICAgICAgIyBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2NyZWF0ZV90YWJsZXMucnVuKClcbiAgICAgICMgZm9yIHJvdyBmcm9tIHN0b3JlLnN0YXRlbWVudHMuZ2V0X3NjaGVtYS5pdGVyYXRlKClcbiAgICAgICMgICBoZWxwICfOqWJiZGJyXzExOCcsIHJvd1xuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAnb25lJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAxICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3R3bycsICAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMiAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDMgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAnaWlpJyAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RydWUnLCAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgdHJ1ZSAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICdmYWxzZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IGZhbHNlICAgKSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjYXN0X3JvdyA9ICggcm93ICkgLT5cbiAgICAgICAgcmV0dXJuIHJvdyB1bmxlc3Mgcm93P1xuICAgICAgICByZXR1cm4geyByb3cuLi4sIGZhY2V0X3ZhbHVlOiAoIEpTT04ucGFyc2Ugcm93LmZhY2V0X3ZhbHVlICksIF92OiByb3cuZmFjZXRfdmFsdWUsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcm93cyA9IHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfZ2V0X2ZhY2V0cy5pdGVyYXRlKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTE5ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICdmYWxzZScsIGZhY2V0X3ZhbHVlOiBmYWxzZSwgX3Y6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqliYmRicl8xMjAgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ29uZScsIGZhY2V0X3ZhbHVlOiAxLCBfdjogMSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEyMSA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogJ2lpaScsIF92OiAnXCJpaWlcIicgfVxuICAgICAgQGVxICggzqliYmRicl8xMjIgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ3RydWUnLCBmYWNldF92YWx1ZTogdHJ1ZSwgX3Y6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEyMyA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAndHdvJywgZmFjZXRfdmFsdWU6IDIsIF92OiAyIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTI0ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgbnVsbCAjIyMgTk9URSBkaWZmZXJlbnQgZnJvbSBiZXR0ZXItc3FsaXRlMyBiZWxvdyAjIyNcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzYW1wbGVfZGJfd2l0aF9ic3FsOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgX0JzcWwzICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdiZXR0ZXItc3FsaXRlMydcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIEJzcWwzIGV4dGVuZHMgX0JzcWwzXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zdG9yZSBleHRlbmRzIERicmljXG4gICAgICBAZGJfY2xhc3M6IEJzcWwzXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIHN0b3JlX2ZhY2V0cyAoXG4gICAgICAgICAgZmFjZXRfa2V5ICAgICAgICAgICAgIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgIGZhY2V0X3ZhbHVlICAgICAgICAgICBqc29uICk7XCJcIlwiXG4gICAgICAgIF1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICAjIHN0b3JlX2NyZWF0ZV90YWJsZXM6IFNRTFwiXCJcIlxuICAgICAgICAjICAgXCJcIlwiXG4gICAgICAgIHN0b3JlX2luc2VydF9mYWNldDogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8gc3RvcmVfZmFjZXRzICggZmFjZXRfa2V5LCBmYWNldF92YWx1ZSApIHZhbHVlcyAoICRmYWNldF9rZXksICRmYWNldF92YWx1ZSApXG4gICAgICAgICAgICBvbiBjb25mbGljdCAoIGZhY2V0X2tleSApIGRvIHVwZGF0ZSBzZXQgZmFjZXRfdmFsdWUgPSBleGNsdWRlZC5mYWNldF92YWx1ZTtcIlwiXCJcbiAgICAgICAgc3RvcmVfZ2V0X2ZhY2V0czogU1FMXCJcIlwiXG4gICAgICAgICAgc2VsZWN0ICogZnJvbSBzdG9yZV9mYWNldHMgb3JkZXIgYnkgZmFjZXRfa2V5O1wiXCJcIlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3RvcmUgICAgID0gbmV3IERicmljX3N0b3JlIGRiX3BhdGhcbiAgICAgIGRlYnVnICfOqWJiZGJyXzEyNScsIHN0b3JlXG4gICAgICBAZXEgKCDOqWJiZGJyXzEyNiA9IC0+IHN0b3JlLmRiIGluc3RhbmNlb2YgQnNxbDMgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTI3ID0gLT4gc3RvcmUuZGIgaW5zdGFuY2VvZiBfQnNxbDMgICAgKSwgdHJ1ZVxuICAgICAgIyBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2NyZWF0ZV90YWJsZXMucnVuKClcbiAgICAgICMgZm9yIHJvdyBmcm9tIHN0b3JlLnN0YXRlbWVudHMuZ2V0X3NjaGVtYS5pdGVyYXRlKClcbiAgICAgICMgICBoZWxwICfOqWJiZGJyXzEyOCcsIHJvd1xuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAnb25lJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAxICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3R3bycsICAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMiAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDMgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAnaWlpJyAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RydWUnLCAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgdHJ1ZSAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICdmYWxzZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IGZhbHNlICAgKSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjYXN0X3JvdyA9ICggcm93ICkgLT5cbiAgICAgICAgcmV0dXJuIHJvdyB1bmxlc3Mgcm93P1xuICAgICAgICByZXR1cm4geyByb3cuLi4sIGZhY2V0X3ZhbHVlOiAoIEpTT04ucGFyc2Ugcm93LmZhY2V0X3ZhbHVlICksIF92OiByb3cuZmFjZXRfdmFsdWUsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcm93cyA9IHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfZ2V0X2ZhY2V0cy5pdGVyYXRlKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTI5ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICdmYWxzZScsIGZhY2V0X3ZhbHVlOiBmYWxzZSwgX3Y6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqliYmRicl8xMzAgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ29uZScsIGZhY2V0X3ZhbHVlOiAxLCBfdjogMSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEzMSA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogJ2lpaScsIF92OiAnXCJpaWlcIicgfVxuICAgICAgQGVxICggzqliYmRicl8xMzIgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ3RydWUnLCBmYWNldF92YWx1ZTogdHJ1ZSwgX3Y6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEzMyA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAndHdvJywgZmFjZXRfdmFsdWU6IDIsIF92OiAyIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTM0ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgdW5kZWZpbmVkXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdWRmX2Z1bmN0aW9uc193aXRoX25zcWw6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICBCc3FsMyAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2JldHRlci1zcWxpdGUzJ1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3F1YXJlcyBleHRlbmRzIERicmljXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgbnVtYmVycyAoXG4gICAgICAgICAgICBuIG51bWJlciB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHZpZXcgc3F1YXJlcyBhcyBzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUoIG4gKSBhcyBzcXVhcmVcbiAgICAgICAgICBmcm9tIG51bWJlcnNcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfbnVtYmVyOiBTUUxcIlwiXCJpbnNlcnQgaW50byBudW1iZXJzICggbiApIHZhbHVlcyAoICRuIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIG4gKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9zcXVhcmVzOiBTUUxcIlwiXCJzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICBmcm9tIHNxdWFyZXNcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpbml0aWFsaXplOiAtPlxuICAgICAgICBzdXBlcigpXG4gICAgICAgIEBjcmVhdGVfZnVuY3Rpb25cbiAgICAgICAgICBuYW1lOiAgICAgICAgICAgJ3NxdWFyZSdcbiAgICAgICAgICBkZXRlcm1pbmlzdGljOiAgdHJ1ZVxuICAgICAgICAgIHZhcmFyZ3M6ICAgICAgICBmYWxzZVxuICAgICAgICAgIHZhbHVlOiAgICAgICAgICAgKCBuICkgLT4gbiAqKiAyXG4gICAgICAgIDtudWxsXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBzcXVhcmVzICAgPSBuZXcgRGJyaWNfc3F1YXJlcyBkYl9wYXRoXG4gICAgICBAZXEgKCDOqWJiZGJyXzEzNSA9IC0+IHNxdWFyZXMuZGIgaW5zdGFuY2VvZiBCc3FsMyAgICAgKSwgZmFsc2VcbiAgICAgIGZvciBuIGluIFsgMCAuLi4gMTAgXVxuICAgICAgICBzcXVhcmVzLnN0YXRlbWVudHMuaW5zZXJ0X251bWJlci5ydW4geyBuLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUoKVxuICAgICAgcm93cyA9IHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUoKVxuICAgICAgQGVxICggzqliYmRicl8xMzYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDAsIHNxdWFyZTogMCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEzNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMSwgc3F1YXJlOiAxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTM4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAyLCBzcXVhcmU6IDQgfVxuICAgICAgQGVxICggzqliYmRicl8xMzkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDMsIHNxdWFyZTogOSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNCwgc3F1YXJlOiAxNiB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNSwgc3F1YXJlOiAyNSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNiwgc3F1YXJlOiAzNiB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNywgc3F1YXJlOiA0OSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogOCwgc3F1YXJlOiA2NCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogOSwgc3F1YXJlOiA4MSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdWRmX2FnZ3JlZ2F0ZXNfd2l0aF9uc3FsOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgQnNxbDMgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdiZXR0ZXItc3FsaXRlMydcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3NxdWFyZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIG51bWJlcnMgKFxuICAgICAgICAgICAgbiBudW1iZXIgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IHNxdWFyZXMgYXMgc2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlKCBuICkgYXMgc3F1YXJlXG4gICAgICAgICAgZnJvbSBudW1iZXJzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgaW5zZXJ0X251bWJlcjogU1FMXCJcIlwiaW5zZXJ0IGludG8gbnVtYmVycyAoIG4gKSB2YWx1ZXMgKCAkbiApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBuICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fbnVtYmVyczogU1FMXCJcIlwic2VsZWN0IG4gZnJvbSBudW1iZXJzIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAgIHNlbGVjdF9mcm9tX3NxdWFyZXM6IFNRTFwiXCJcInNlbGVjdFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHNxdWFyZSxcbiAgICAgICAgICAgIHByb2R1Y3QoIG4gKSAgICAgIGFzIHBfbixcbiAgICAgICAgICAgIHByb2R1Y3QoIHNxdWFyZSApIGFzIHBfc3F1YXJlXG4gICAgICAgICAgZnJvbSBzcXVhcmVzXG4gICAgICAgICAgd2hlcmUgbiBiZXR3ZWVuICRzdGFydCBhbmQgJHN0b3BcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpbml0aWFsaXplOiAtPlxuICAgICAgICBzdXBlcigpXG4gICAgICAgIEBjcmVhdGVfZnVuY3Rpb25cbiAgICAgICAgICBuYW1lOiAgICAgICAgICAgJ3NxdWFyZSdcbiAgICAgICAgICBkZXRlcm1pbmlzdGljOiAgdHJ1ZVxuICAgICAgICAgIHZhcmFyZ3M6ICAgICAgICBmYWxzZVxuICAgICAgICAgIHZhbHVlOiAgICAgICAgICAgKCBuICkgLT4gbiAqKiAyXG4gICAgICAgIEBjcmVhdGVfYWdncmVnYXRlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAgICdwcm9kdWN0J1xuICAgICAgICAgIHN0YXJ0OiAgICAgICAgICAtPiAxICMjIyBOT1RFIGNhbiB1c2UgYG51bGxgIGZvciBiU1FMLCBidXQgblNRTCBuZWVkcyBgMWAgIyMjXG4gICAgICAgICAgc3RlcDogICAgICAgICAgIHByb2R1Y3QgPSAoIHRvdGFsLCBlbGVtZW50ICkgLT5cbiAgICAgICAgICAgIGRlYnVnICfOqWJiZGJyXzE0NycsIHsgdG90YWwsIGVsZW1lbnQsIH1cbiAgICAgICAgICAgIHJldHVybiAoIHRvdGFsID8gMSApICogZWxlbWVudFxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3F1YXJlcyAgID0gbmV3IERicmljX3NxdWFyZXMgZGJfcGF0aFxuICAgICAgQGVxICggzqliYmRicl8xNDggPSAtPiBzcXVhcmVzLmRiIGluc3RhbmNlb2YgQnNxbDMgICAgICksIGZhbHNlXG4gICAgICBmb3IgbiBpbiBbIDAgLi4uIDEwIF1cbiAgICAgICAgc3F1YXJlcy5zdGF0ZW1lbnRzLmluc2VydF9udW1iZXIucnVuIHsgbiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBlY2hvIHJvdyBmb3Igcm93IGZyb20gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSB7IHN0YXJ0OiAxLCBzdG9wOiA1LCB9XG4gICAgICByb3dzID0gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSB7IHN0YXJ0OiAxLCBzdG9wOiA1LCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMSwgc3F1YXJlOiAxLCBwX246IDEyMCwgcF9zcXVhcmU6IDE0NDAwIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTUwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBlY2hvIHJvdyBmb3Igcm93IGZyb20gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICByb3dzID0gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICBAZXEgKCDOqWJiZGJyXzE1MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogbnVsbCwgc3F1YXJlOiBudWxsLCBwX246IDEsIHBfc3F1YXJlOiAxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTUyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVkZl9mdW5jdGlvbnNfd2l0aF9ic3FsOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgQnNxbDMgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdiZXR0ZXItc3FsaXRlMydcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3NxdWFyZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgQGRiX2NsYXNzOiBCc3FsM1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIG51bWJlcnMgKFxuICAgICAgICAgICAgbiBudW1iZXIgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IHNxdWFyZXMgYXMgc2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlKCBuICkgYXMgc3F1YXJlXG4gICAgICAgICAgZnJvbSBudW1iZXJzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgaW5zZXJ0X251bWJlcjogU1FMXCJcIlwiaW5zZXJ0IGludG8gbnVtYmVycyAoIG4gKSB2YWx1ZXMgKCAkbiApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBuICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fc3F1YXJlczogU1FMXCJcIlwic2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgZnJvbSBzcXVhcmVzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAY3JlYXRlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAgICdzcXVhcmUnXG4gICAgICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgICAgICB2YWx1ZTogICAgICAgICAgICggbiApIC0+IG4gKiogMlxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3F1YXJlcyAgID0gbmV3IERicmljX3NxdWFyZXMgZGJfcGF0aFxuICAgICAgQGVxICggzqliYmRicl8xNTMgPSAtPiBzcXVhcmVzLmRiIGluc3RhbmNlb2YgQnNxbDMgICAgICksIHRydWVcbiAgICAgIGZvciBuIGluIFsgMCAuLi4gMTAgXVxuICAgICAgICBzcXVhcmVzLnN0YXRlbWVudHMuaW5zZXJ0X251bWJlci5ydW4geyBuLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUoKVxuICAgICAgcm93cyA9IHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUoKVxuICAgICAgQGVxICggzqliYmRicl8xNTQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDAsIHNxdWFyZTogMCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMSwgc3F1YXJlOiAxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAyLCBzcXVhcmU6IDQgfVxuICAgICAgQGVxICggzqliYmRicl8xNTcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDMsIHNxdWFyZTogOSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNCwgc3F1YXJlOiAxNiB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNSwgc3F1YXJlOiAyNSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE2MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNiwgc3F1YXJlOiAzNiB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE2MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNywgc3F1YXJlOiA0OSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE2MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogOCwgc3F1YXJlOiA2NCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE2MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogOSwgc3F1YXJlOiA4MSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE2NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfYWdncmVnYXRlc193aXRoX2JzcWw6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICBCc3FsMyAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2JldHRlci1zcWxpdGUzJ1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3F1YXJlcyBleHRlbmRzIERicmljXG4gICAgICBAZGJfY2xhc3M6IEJzcWwzXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgbnVtYmVycyAoXG4gICAgICAgICAgICBuIG51bWJlciB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHZpZXcgc3F1YXJlcyBhcyBzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUoIG4gKSBhcyBzcXVhcmVcbiAgICAgICAgICBmcm9tIG51bWJlcnNcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfbnVtYmVyOiBTUUxcIlwiXCJpbnNlcnQgaW50byBudW1iZXJzICggbiApIHZhbHVlcyAoICRuIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIG4gKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9zcXVhcmVzOiBTUUxcIlwiXCJzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUsXG4gICAgICAgICAgICBwcm9kdWN0KCBuICkgICAgICBhcyBwX24sXG4gICAgICAgICAgICBwcm9kdWN0KCBzcXVhcmUgKSBhcyBwX3NxdWFyZVxuICAgICAgICAgIGZyb20gc3F1YXJlc1xuICAgICAgICAgIHdoZXJlIG4gYmV0d2VlbiAkc3RhcnQgYW5kICRzdG9wXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAY3JlYXRlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAgICdzcXVhcmUnXG4gICAgICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgICAgICB2YWx1ZTogICAgICAgICAgIHNxdWFyZSA9ICggbiApIC0+IG4gKiogMlxuICAgICAgICBAY3JlYXRlX2FnZ3JlZ2F0ZV9mdW5jdGlvblxuICAgICAgICAgIG5hbWU6ICAgICAgICAgICAncHJvZHVjdCdcbiAgICAgICAgICBzdGFydDogICAgICAgICAgLT4gbnVsbFxuICAgICAgICAgIHN0ZXA6ICAgICAgICAgICBwcm9kdWN0ID0gKCB0b3RhbCwgZWxlbWVudCApIC0+XG4gICAgICAgICAgICBkZWJ1ZyAnzqliYmRicl8xNjUnLCB7IHRvdGFsLCBlbGVtZW50LCB9XG4gICAgICAgICAgICByZXR1cm4gKCB0b3RhbCA/IDEgKSAqIGVsZW1lbnRcbiAgICAgICAgO251bGxcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHNxdWFyZXMgICA9IG5ldyBEYnJpY19zcXVhcmVzIGRiX3BhdGhcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTY2ID0gLT4gc3F1YXJlcy5kYiBpbnN0YW5jZW9mIEJzcWwzICAgICApLCB0cnVlXG4gICAgICBmb3IgbiBpbiBbIDAgLi4uIDEwIF1cbiAgICAgICAgc3F1YXJlcy5zdGF0ZW1lbnRzLmluc2VydF9udW1iZXIucnVuIHsgbiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBlY2hvIHJvdyBmb3Igcm93IGZyb20gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSB7IHN0YXJ0OiAyLCBzdG9wOiAzLCB9XG4gICAgICByb3dzID0gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSB7IHN0YXJ0OiAyLCBzdG9wOiAzLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE2NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMiwgc3F1YXJlOiA0LCBwX246IDYsIHBfc3F1YXJlOiAzNiB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE2OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfdGFibGVfZnVuY3Rpb25fd2l0aF9ic3FsOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgQnNxbDMgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdiZXR0ZXItc3FsaXRlMydcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3BocmFzZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgQGRiX2NsYXNzOiBCc3FsM1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIHBocmFzZXMgKFxuICAgICAgICAgICAgcGhyYXNlIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIGluc2VydF9waHJhc2U6IFNRTFwiXCJcImluc2VydCBpbnRvIHBocmFzZXMgKCBwaHJhc2UgKSB2YWx1ZXMgKCAkcGhyYXNlIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIHBocmFzZSApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgIHNlbGVjdF9mcm9tX3BocmFzZXM6IFNRTFwiXCJcIlxuICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICAqXG4gICAgICAgICAgICBmcm9tXG4gICAgICAgICAgICAgIHBocmFzZXMgYXMgcCxcbiAgICAgICAgICAgICAgcmVfbWF0Y2hlcyggcC5waHJhc2UsICRtYXRjaGVyICkgYXMgcnhcbiAgICAgICAgICAgIG9yZGVyIGJ5IHAucGhyYXNlO1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpbml0aWFsaXplOiAtPlxuICAgICAgICBzdXBlcigpXG4gICAgICAgIEBjcmVhdGVfdGFibGVfZnVuY3Rpb25cbiAgICAgICAgICBuYW1lOiAgICAgICAgICdyZV9tYXRjaGVzJ1xuICAgICAgICAgIGNvbHVtbnM6ICAgICAgWyAnbWF0Y2gnLCAnY2FwdHVyZScsIF1cbiAgICAgICAgICBwYXJhbWV0ZXJzOiAgIFsgJ3RleHQnLCAncGF0dGVybicsIF1cbiAgICAgICAgICByb3dzOiAoIHRleHQsIHBhdHRlcm4gKSAtPlxuICAgICAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwIHBhdHRlcm4sICdnJ1xuICAgICAgICAgICAgZm9yIG1hdGNoIGZyb20gdGV4dC5tYXRjaEFsbCByZWdleFxuICAgICAgICAgICAgICB5aWVsZCBbIG1hdGNoWyAwIF0sIG1hdGNoWyAxIF0sIF1cbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIDtudWxsXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBwaHJhc2VzICAgPSBuZXcgRGJyaWNfcGhyYXNlcyBkYl9wYXRoXG4gICAgICBAZXEgKCDOqWJiZGJyXzE2OSA9IC0+IHBocmFzZXMuZGIgaW5zdGFuY2VvZiBCc3FsMyAgICAgKSwgdHJ1ZVxuICAgICAgZm9yIHBocmFzZSBpbiBbICdlbGV2ZW4nLCAnZml2ZScsICduaW5lJywgJ29uZScsICdvbmUgcG9pbnQgZml2ZScsICdzZXZlbicsICd0aHJlZSBwb2ludCBvbmUnIF1cbiAgICAgICAgcGhyYXNlcy5zdGF0ZW1lbnRzLmluc2VydF9waHJhc2UucnVuIHsgcGhyYXNlLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9waHJhc2VzLml0ZXJhdGUgeyBtYXRjaGVyOiAnXi4qKFthZWlvdV0uZSkuKiQnLCB9XG4gICAgICAjIGVjaG8oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fcGhyYXNlcy5pdGVyYXRlIHsgbWF0Y2hlcjogJyhbXmFlaW91XT9bYWVpb3VdKykoPz1bbW52XSknLCB9XG4gICAgICByb3dzID0gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3BocmFzZXMuaXRlcmF0ZSB7IG1hdGNoZXI6ICcoW15hZWlvdV0/W2FlaW91XSspKD89W21udl0pJywgfVxuICAgICAgQGVxICggzqliYmRicl8xNzAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ2VsZXZlbicsIG1hdGNoOiAnbGUnLCBjYXB0dXJlOiAnbGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTcxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdlbGV2ZW4nLCBtYXRjaDogJ3ZlJywgY2FwdHVyZTogJ3ZlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnZml2ZScsIG1hdGNoOiAnZmknLCBjYXB0dXJlOiAnZmknIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTczID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICduaW5lJywgbWF0Y2g6ICduaScsIGNhcHR1cmU6ICduaScgfVxuICAgICAgQGVxICggzqliYmRicl8xNzQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ29uZScsIG1hdGNoOiAnbycsIGNhcHR1cmU6ICdvJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnb25lIHBvaW50IGZpdmUnLCBtYXRjaDogJ28nLCBjYXB0dXJlOiAnbycgfVxuICAgICAgQGVxICggzqliYmRicl8xNzYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ29uZSBwb2ludCBmaXZlJywgbWF0Y2g6ICdwb2knLCBjYXB0dXJlOiAncG9pJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnb25lIHBvaW50IGZpdmUnLCBtYXRjaDogJ2ZpJywgY2FwdHVyZTogJ2ZpJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnc2V2ZW4nLCBtYXRjaDogJ3NlJywgY2FwdHVyZTogJ3NlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnc2V2ZW4nLCBtYXRjaDogJ3ZlJywgY2FwdHVyZTogJ3ZlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAndGhyZWUgcG9pbnQgb25lJywgbWF0Y2g6ICdwb2knLCBjYXB0dXJlOiAncG9pJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAndGhyZWUgcG9pbnQgb25lJywgbWF0Y2g6ICcgbycsIGNhcHR1cmU6ICcgbycgfVxuICAgICAgQGVxICggzqliYmRicl8xODIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB1bmRlZmluZWRcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZmlsZV9taXJyb3JfYXNfdGFibGVfZnVuY3Rpb246IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICBCc3FsMyAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2JldHRlci1zcWxpdGUzJ1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfcGhyYXNlcyBleHRlbmRzIERicmljXG4gICAgICBAZGJfY2xhc3M6IEJzcWwzXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBkYXRhc291cmNlcyAoXG4gICAgICAgICAgICBkc2tleSB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICAgIHBhdGggdGV4dCBub3QgbnVsbCApO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IG1pcnJvciBhcyBzZWxlY3RcbiAgICAgICAgICAgICpcbiAgICAgICAgICBmcm9tXG4gICAgICAgICAgICBkYXRhc291cmNlcyBhcyBkcyxcbiAgICAgICAgICAgIGZpbGVfbGluZXMoIGRzLnBhdGggKSBhcyBmbFxuICAgICAgICAgIG9yZGVyIGJ5IGRzLmRza2V5LCBmbC5saW5lX25yO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBrZXl3b3JkcyAoXG4gICAgICAgICAgICBkc2tleSAgIHRleHQgICAgbm90IG51bGwsXG4gICAgICAgICAgICBsaW5lX25yIGludGVnZXIgbm90IG51bGwsXG4gICAgICAgICAgICBrZXl3b3JkIHRleHQgICAgbm90IG51bGwsXG4gICAgICAgICAgZm9yZWlnbiBrZXkgKCBkc2tleSApIHJlZmVyZW5jZXMgZGF0YXNvdXJjZXMgKCBkc2tleSApLFxuICAgICAgICAgIHByaW1hcnkga2V5ICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKSApO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGluc2VydF9kYXRhc291cmNlOiBTUUxcIlwiXCJpbnNlcnQgaW50byBkYXRhc291cmNlcyAoIGRza2V5LCBwYXRoICkgdmFsdWVzICggJGRza2V5LCAkcGF0aCApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBkc2tleSApIGRvIHVwZGF0ZSBzZXQgcGF0aCA9ICRwYXRoO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGluc2VydF9rZXl3b3JkOiBTUUxcIlwiXCJpbnNlcnQgaW50byBrZXl3b3JkcyAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgdmFsdWVzICggJGRza2V5LCAkbGluZV9uciwgJGtleXdvcmQgKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNlbGVjdF9mcm9tX2RhdGFzb3VyY2VzOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIGRhdGFzb3VyY2VzIG9yZGVyIGJ5IGRza2V5O1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNlbGVjdF9mcm9tX2tleXdvcmRzOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIGtleXdvcmRzIG9yZGVyIGJ5IGtleXdvcmQsIGRza2V5LCBsaW5lX25yO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNlbGVjdF9mcm9tX21pcnJvcjogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBtaXJyb3Igb3JkZXIgYnkgZHNrZXk7XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGluaXRpYWxpemU6IC0+XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgQGNyZWF0ZV90YWJsZV9mdW5jdGlvblxuICAgICAgICAgIG5hbWU6ICAgICAgICAgJ2ZpbGVfbGluZXMnXG4gICAgICAgICAgY29sdW1uczogICAgICBbICdsaW5lX25yJywgJ2xpbmUnLCBdXG4gICAgICAgICAgcGFyYW1ldGVyczogICBbICdwYXRoJywgXVxuICAgICAgICAgIHJvd3M6ICggcGF0aCApIC0+XG4gICAgICAgICAgICBmb3IgeyBsbnI6IGxpbmVfbnIsIGxpbmUsIGVvbCwgfSBmcm9tIEdVWS5mcy53YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zIHBhdGhcbiAgICAgICAgICAgICAgeWllbGQgeyBsaW5lX25yLCBsaW5lLCB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgcGhyYXNlcyAgID0gbmV3IERicmljX3BocmFzZXMgZGJfcGF0aFxuICAgICAgQGVxICggzqliYmRicl8xODMgPSAtPiAoIHBocmFzZXMucHJlcGFyZSBTUUxcIlwiXCJwcmFnbWEgZm9yZWlnbl9rZXlzXCJcIlwiICkuZ2V0KCkgKSwgeyBmb3JlaWduX2tleXM6IDEsICAgICAgfVxuICAgICAgQGVxICggzqliYmRicl8xODQgPSAtPiAoIHBocmFzZXMucHJlcGFyZSBTUUxcIlwiXCJwcmFnbWEgam91cm5hbF9tb2RlXCJcIlwiICkuZ2V0KCkgKSwgeyBqb3VybmFsX21vZGU6ICd3YWwnLCAgfVxuICAgICAgQGVxICggzqliYmRicl8xODUgPSAtPiBwaHJhc2VzLmRiIGluc3RhbmNlb2YgQnNxbDMgICAgICksIHRydWVcbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGRvID0+XG4gICAgICAjICAgZHNrZXkgPSAncmVhZG1lJ1xuICAgICAgIyAgIHBhdGggID0gUEFUSC5yZXNvbHZlIF9fZGlybmFtZSwgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9SRUFETUUubWQnXG4gICAgICAjICAgcGhyYXNlcy5zdGF0ZW1lbnRzLmluc2VydF9kYXRhc291cmNlLnJ1biB7IGRza2V5LCBwYXRoIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZHNrZXkgPSAncGFja2FnZS1qc29uJ1xuICAgICAgICBwYXRoICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvcGFja2FnZS5qc29uJ1xuICAgICAgICBwaHJhc2VzLnN0YXRlbWVudHMuaW5zZXJ0X2RhdGFzb3VyY2UucnVuIHsgZHNrZXksIHBhdGggfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fZGF0YXNvdXJjZXMuaXRlcmF0ZSgpXG4gICAgICAjIGVjaG8oKVxuICAgICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9taXJyb3IuaXRlcmF0ZSgpXG4gICAgICAjIGVjaG8oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBmb3IgeyBkc2tleSwgbGluZV9uciwgbGluZSwgfSBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9taXJyb3IuaXRlcmF0ZSgpXG4gICAgICAgIGtleXdvcmRzID0gbGluZS5zcGxpdCAvKD86XFxwe1p9Kyl8KCg/OlxccHtMfSspfCg/OlxccHtOfSspfCg/OlxccHtTfSspKS92XG4gICAgICAgICMgZGVidWcgJ86pYmJkYnJfMTg2JywgbGluZV9uciwgcnByIGtleXdvcmRzXG4gICAgICAgIGZvciBrZXl3b3JkIGluIGtleXdvcmRzXG4gICAgICAgICAgY29udGludWUgdW5sZXNzIGtleXdvcmQ/XG4gICAgICAgICAgY29udGludWUgaWYga2V5d29yZCBpcyAnJ1xuICAgICAgICAgIHBocmFzZXMudy5zdGF0ZW1lbnRzLmluc2VydF9rZXl3b3JkLnJ1biB7IGRza2V5LCBsaW5lX25yLCBrZXl3b3JkLCB9XG4gICAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX2tleXdvcmRzLml0ZXJhdGUoKVxuICAgICAgIyBlY2hvKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmaWxlX21pcnJvcl93aXRoX2ludGVncmF0ZWRfaW5zZXJ0czogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIEJzcWwzICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYmV0dGVyLXNxbGl0ZTMnXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19waHJhc2VzIGV4dGVuZHMgRGJyaWNcbiAgICAgIEBkYl9jbGFzczogQnNxbDNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIGRhdGFzb3VyY2VzIChcbiAgICAgICAgICAgIGRza2V5IHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgICAgcGF0aCB0ZXh0IG5vdCBudWxsICk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHZpZXcgbWlycm9yIGFzIHNlbGVjdFxuICAgICAgICAgICAgKlxuICAgICAgICAgIGZyb21cbiAgICAgICAgICAgIGRhdGFzb3VyY2VzIGFzIGRzLFxuICAgICAgICAgICAgZmlsZV9saW5lcyggZHMucGF0aCApIGFzIGZsXG4gICAgICAgICAgb3JkZXIgYnkgZHMuZHNrZXksIGZsLmxpbmVfbnI7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIGtleXdvcmRzIChcbiAgICAgICAgICAgIGRza2V5ICAgdGV4dCAgICBub3QgbnVsbCxcbiAgICAgICAgICAgIGxpbmVfbnIgaW50ZWdlciBub3QgbnVsbCxcbiAgICAgICAgICAgIGtleXdvcmQgdGV4dCAgICBub3QgbnVsbCxcbiAgICAgICAgICBmb3JlaWduIGtleSAoIGRza2V5ICkgcmVmZXJlbmNlcyBkYXRhc291cmNlcyAoIGRza2V5ICksXG4gICAgICAgICAgcHJpbWFyeSBrZXkgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApICk7XCJcIlwiXG4gICAgICAgIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgaW5zZXJ0X2RhdGFzb3VyY2U6IFNRTFwiXCJcImluc2VydCBpbnRvIGRhdGFzb3VyY2VzICggZHNrZXksIHBhdGggKSB2YWx1ZXMgKCAkZHNrZXksICRwYXRoIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIGRza2V5ICkgZG8gdXBkYXRlIHNldCBwYXRoID0gJHBhdGg7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgaW5zZXJ0X2tleXdvcmQ6IFNRTFwiXCJcImluc2VydCBpbnRvIGtleXdvcmRzICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKSB2YWx1ZXMgKCAkZHNrZXksICRsaW5lX25yLCAka2V5d29yZCApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc2VsZWN0X2Zyb21fZGF0YXNvdXJjZXM6IFNRTFwiXCJcInNlbGVjdCAqIGZyb20gZGF0YXNvdXJjZXMgb3JkZXIgYnkgZHNrZXk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc2VsZWN0X2Zyb21fa2V5d29yZHM6IFNRTFwiXCJcInNlbGVjdCAqIGZyb20ga2V5d29yZHMgb3JkZXIgYnkga2V5d29yZCwgZHNrZXksIGxpbmVfbnI7XCJcIlwiXG4gICAgICAgIGxvY2F0aW9uc19mcm9tX2tleXdvcmQ6IFNRTFwiXCJcInNlbGVjdCAqIGZyb20ga2V5d29yZHNcbiAgICAgICAgICB3aGVyZSBrZXl3b3JkID0gJGtleXdvcmRcbiAgICAgICAgICBvcmRlciBieSBrZXl3b3JkLCBkc2tleSwgbGluZV9ucjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9taXJyb3I6IFNRTFwiXCJcInNlbGVjdCAqIGZyb20gbWlycm9yIG9yZGVyIGJ5IGRza2V5O1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHBvcHVsYXRlX2tleXdvcmRzOiBTUUxcIlwiXCJcbiAgICAgICAgICBpbnNlcnQgaW50byBrZXl3b3JkcyAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkIClcbiAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICBkcy5kc2tleSAgICBhcyBkc2tleSxcbiAgICAgICAgICAgICAgbWkubGluZV9uciAgYXMgbGluZV9ucixcbiAgICAgICAgICAgICAgc3cua2V5d29yZCAgYXMga2V5d29yZFxuICAgICAgICAgICAgZnJvbSBkYXRhc291cmNlcyAgICAgICAgYXMgZHNcbiAgICAgICAgICAgIGpvaW4gbWlycm9yICAgICAgICAgICAgIGFzIG1pIHVzaW5nICggZHNrZXkgKSxcbiAgICAgICAgICAgIHNwbGl0X3dvcmRzKCBtaS5saW5lICkgIGFzIHN3XG4gICAgICAgICAgICB3aGVyZSB0cnVlIC0tIHdoZXJlIGNsYXVzZSBqdXN0IGEgc3ludGFjdGljIGd1YXJkIGFzIHBlciBodHRwczovL3NxbGl0ZS5vcmcvbGFuZ191cHNlcnQuaHRtbFxuICAgICAgICAgICAgb24gY29uZmxpY3QgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBjcmVhdGVfdGFibGVfZnVuY3Rpb25cbiAgICAgICAgICBuYW1lOiAgICAgICAgICAgJ3NwbGl0X3dvcmRzJ1xuICAgICAgICAgIGNvbHVtbnM6ICAgICAgICBbICdrZXl3b3JkJywgXVxuICAgICAgICAgIHBhcmFtZXRlcnM6ICAgICBbICdsaW5lJywgXVxuICAgICAgICAgIHJvd3M6ICggbGluZSApIC0+XG4gICAgICAgICAgICBrZXl3b3JkcyA9IGxpbmUuc3BsaXQgLyg/OlxccHtafSspfCgoPzpcXHB7TH0rKXwoPzpcXHB7Tn0rKXwoPzpcXHB7U30rKSkvdlxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqliYmRicl8xODcnLCBsaW5lX25yLCBycHIga2V5d29yZHNcbiAgICAgICAgICAgIGZvciBrZXl3b3JkIGluIGtleXdvcmRzXG4gICAgICAgICAgICAgIGNvbnRpbnVlIHVubGVzcyBrZXl3b3JkP1xuICAgICAgICAgICAgICBjb250aW51ZSBpZiBrZXl3b3JkIGlzICcnXG4gICAgICAgICAgICAgIHlpZWxkIHsga2V5d29yZCwgfVxuICAgICAgICAgICAgO251bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAY3JlYXRlX3RhYmxlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAnZmlsZV9saW5lcydcbiAgICAgICAgICBjb2x1bW5zOiAgICAgIFsgJ2xpbmVfbnInLCAnbGluZScsIF1cbiAgICAgICAgICBwYXJhbWV0ZXJzOiAgIFsgJ3BhdGgnLCBdXG4gICAgICAgICAgcm93czogKCBwYXRoICkgLT5cbiAgICAgICAgICAgIGZvciB7IGxucjogbGluZV9uciwgbGluZSwgZW9sLCB9IGZyb20gR1VZLmZzLndhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgcGF0aFxuICAgICAgICAgICAgICB5aWVsZCB7IGxpbmVfbnIsIGxpbmUsIH1cbiAgICAgICAgICAgIDtudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgO251bGxcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHBocmFzZXMgICA9IG5ldyBEYnJpY19waHJhc2VzIGRiX3BhdGhcbiAgICAgIGRlYnVnICfOqWJiZGJyXzE4OCcsIHBocmFzZXMudGVhcmRvd24oKVxuICAgICAgZGVidWcgJ86pYmJkYnJfMTg5JywgcGhyYXNlcy5yZWJ1aWxkKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTkwID0gLT4gKCBwaHJhc2VzLnByZXBhcmUgU1FMXCJcIlwicHJhZ21hIGZvcmVpZ25fa2V5c1wiXCJcIiApLmdldCgpICksIHsgZm9yZWlnbl9rZXlzOiAxLCAgICAgIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTkxID0gLT4gKCBwaHJhc2VzLnByZXBhcmUgU1FMXCJcIlwicHJhZ21hIGpvdXJuYWxfbW9kZVwiXCJcIiApLmdldCgpICksIHsgam91cm5hbF9tb2RlOiAnd2FsJywgIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTkyID0gLT4gcGhyYXNlcy5kYiBpbnN0YW5jZW9mIEJzcWwzICAgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRza2V5ID0gJ2h1bWR1bSdcbiAgICAgICAgcGF0aCAgPSBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4vYXNzZXRzL2JyaWNhYnJhYy9odW1wdHktZHVtcHR5Lm1kJ1xuICAgICAgICBwaHJhc2VzLnN0YXRlbWVudHMuaW5zZXJ0X2RhdGFzb3VyY2UucnVuIHsgZHNrZXksIHBhdGggfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkZWJ1ZyAnzqliYmRicl8xOTMnLCBwaHJhc2VzLnN0YXRlbWVudHMucG9wdWxhdGVfa2V5d29yZHMucnVuKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZWNobyByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5sb2NhdGlvbnNfZnJvbV9rZXl3b3JkLml0ZXJhdGUgeyBrZXl3b3JkOiAndGhvdWdodCcsIH1cbiAgICAgIGVjaG8oKVxuICAgICAgcm93cyA9IHBocmFzZXMuc3RhdGVtZW50cy5sb2NhdGlvbnNfZnJvbV9rZXl3b3JkLml0ZXJhdGUgeyBrZXl3b3JkOiAndGhvdWdodCcsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTk0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDE1LCBrZXl3b3JkOiAndGhvdWdodCcgfVxuICAgICAgQGVxICggzqliYmRicl8xOTUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMzQsIGtleXdvcmQ6ICd0aG91Z2h0JyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE5NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBlY2hvIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLmxvY2F0aW9uc19mcm9tX2tleXdvcmQuaXRlcmF0ZSB7IGtleXdvcmQ6ICdzaGUnLCB9XG4gICAgICBlY2hvKClcbiAgICAgIHJvd3MgPSBwaHJhc2VzLnN0YXRlbWVudHMubG9jYXRpb25zX2Zyb21fa2V5d29yZC5pdGVyYXRlIHsga2V5d29yZDogJ3NoZScsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTk3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDIsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTk4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDMsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTk5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDQsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjAwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDUsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjAxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDE1LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIwMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAxNywga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8yMDMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMTgsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjA0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDI2LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIwNSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAzNCwga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8yMDYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMzYsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjA3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgdW5kZWZpbmVkXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIHl5eTogLT5cbiAgIyAgIHsgRGJyaWMsXG4gICMgICAgIERicmljX3N0ZCxcbiAgIyAgICAgU1FMLFxuICAjICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICMgICB7IHRlbXAsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3RlbXAoKVxuICAjICAgQnNxbDMgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdiZXR0ZXItc3FsaXRlMydcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBjbGFzcyBNeV9kYiBleHRlbmRzIERicmljX3N0ZFxuICAjICAgICBAZGJfY2xhc3M6IEJzcWwzXG4gICMgICBkYmEgPSBuZXcgTXlfZGIoKVxuICAjICAgZGJhLmV4ZWN1dGUgU1FMXCJjcmVhdGUgdGFibGUgdCAoIGQgdGV4dCApO1wiXG4gICMgICBmb3Igcm93IGZyb20gZGJhLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHN0ZF9yZWxhdGlvbnM7XCJcbiAgIyAgICAgZGVidWcgJ86pYmJkYnJfMjA4Jywgcm93Lm5hbWVcbiAgIyAgICMgZm9yIHJvdyBmcm9tIGRiYS53YWxrIFNRTFwiLmR1bXBcIlxuICAjICAgIyAgIGRlYnVnICfOqWJiZGJyXzIwOScsIHJvd1xuICAjICAgIyBkZWJ1ZyAnzqliYmRicl8yMTAnLCBkYmEuZGIuc2VyaWFsaXplKClcbiAgIyAgICMgZGVidWcgJ86pYmJkYnJfMjExJywgZGJhLmRiLnNlcmlhbGl6ZSgpLnRvU3RyaW5nKClcbiAgIyAgIGRlYnVnICfOqWJiZGJyXzIxMicsIGRiYS5leGVjdXRlIFNRTFwic2VsZWN0IDE7IHNlbGVjdCAyO1wiXG4gICMgICAjIGVycm9yICdpbmNvbXBsZXRlIGlucHV0JzpcbiAgIyAgIGRlYnVnICfOqWJiZGJyXzIxMycsIGRiYS5leGVjdXRlIFNRTFwiXCJcIkNSRUFURSBUUklHR0VSIGp6cl9taXJyb3JfdHJpcGxlc19yZWdpc3RlclxuICAjICAgICAgICAgaW5zdGVhZCBvZiBpbnNlcnQgb24gc3RkX3JlbGF0aW9uc1xuICAjICAgICAgICAgZm9yIGVhY2ggcm93IGJlZ2luXG4gICMgICAgICAgICAgIHNlbGVjdCB0cmlnZ2VyX29uX2JlZm9yZV9pbnNlcnQoICdqenJfbWlycm9yX3RyaXBsZXNfYmFzZScsIG5ldy5yb3dpZCwgbmV3LnJlZiwgbmV3LnMsIG5ldy52LCBuZXcubyApO1wiXCJcIlxuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgIHJldHVybiBudWxsXG5cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX3JuZzogLT5cbiAgICB7IERicmljX3JuZyxcblxuICAgICAgVHJ1ZSxcbiAgICAgIEZhbHNlLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIEJzcWwzICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYmV0dGVyLXNxbGl0ZTMnXG4gICAganIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBKU09OLnN0cmluZ2lmeVxuICAgIGNpZF9vZiAgICAgICAgICAgICAgICAgICAgICAgID0gKCBjaHIgKSAtPiBjaHIuY29kZVBvaW50QXQgMFxuICAgIGZpcnN0X3VuaWNvZGVfY2lkICAgICAgICAgICAgID0gMHgwMF8wMDAwXG4gICAgbGFzdF91bmljb2RlX2NpZCAgICAgICAgICAgICAgPSAweDEwX2ZmZmZcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIFVuaWNvZGVfcmFuZ2VzIGV4dGVuZHMgRGJyaWNfcm5nXG4gICAgICBAZGJfY2xhc3M6IEJzcWwzXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBmdW5jdGlvbnM6XG4gICAgICAgIHJuZ192YWxpZGF0ZV9sbzpcbiAgICAgICAgICBvdmVyd3JpdGU6ICAgICAgdHJ1ZVxuICAgICAgICAgIHZhbHVlOiAoIGxvICkgLT5cbiAgICAgICAgICAgIHJldHVybiBGYWxzZSB1bmxlc3MgQHN1cGVyLmZ1bmN0aW9ucy5ybmdfdmFsaWRhdGVfbG8udmFsdWUgbG9cbiAgICAgICAgICAgIHJldHVybiBGYWxzZSB1bmxlc3MgZmlyc3RfdW5pY29kZV9jaWQgPD0gbG8gPD0gbGFzdF91bmljb2RlX2NpZFxuICAgICAgICAgICAgcmV0dXJuIFRydWVcbiAgICAgICAgcm5nX3ZhbGlkYXRlX2hpOlxuICAgICAgICAgIG92ZXJ3cml0ZTogICAgICB0cnVlXG4gICAgICAgICAgdmFsdWU6ICggaGkgKSAtPlxuICAgICAgICAgICAgcmV0dXJuIEZhbHNlIHVubGVzcyBAc3VwZXIuZnVuY3Rpb25zLnJuZ192YWxpZGF0ZV9oaS52YWx1ZSBoaVxuICAgICAgICAgICAgcmV0dXJuIEZhbHNlIHVubGVzcyBmaXJzdF91bmljb2RlX2NpZCA8PSBoaSA8PSBsYXN0X3VuaWNvZGVfY2lkXG4gICAgICAgICAgICByZXR1cm4gVHJ1ZVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiYWx0ZXIgdGFibGUgcm5nX3JhbmdlcyBhZGQgY29sdW1uIGlzX2FzY2lpICBib29sZWFuICBnZW5lcmF0ZSBhbHdheXMgYXMgKCBkYXRhLT4+J2lzX2FzY2lpJyAgKSB2aXJ0dWFsO1wiXCJcIlxuICAgICAgICBTUUxcIlwiXCJhbHRlciB0YWJsZSBybmdfcmFuZ2VzIGFkZCBjb2x1bW4gdWdjICAgICAgIHRleHQgICAgIGdlbmVyYXRlIGFsd2F5cyBhcyAoIGRhdGEtPj4ndWdjJyAgICAgICApIHZpcnR1YWw7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSBpbmRleCBybmdfcmFuZ2VzX2lzX2FzY2lpX2lkeCAgb24gcm5nX3JhbmdlcyAoIGlzX2FzY2lpICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSBpbmRleCBybmdfcmFuZ2VzX3VnY19pZHggICAgICAgb24gcm5nX3JhbmdlcyAoIHVnYyAgICAgICk7XCJcIlwiXG4gICAgICAgIF1cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYiA9IG5ldyBVbmljb2RlX3JhbmdlcyAnOm1lbW9yeTonXG4gICAgICBkYi5ybmdfYWRkX3JhbmdlIHsgbG86IDAsIGhpOiAxMjcsIGRhdGE6IHsgaXNfYXNjaWk6IHRydWUsIH0sIH1cbiAgICAgIGRiLnJuZ19hZGRfcmFuZ2UgeyBsbzogMHgwMGJjLCBoaTogMHgwMGJjLCBkYXRhOiB7IHVuYW1lOiAnVlVMR0FSIEZSQUNUSU9OIE9ORSBRVUFSVEVSJywgdWdjOiAnTm8nLCBpc19hc2NpaTogZmFsc2UsIH0sIH1cbiAgICAgIGRiLnJuZ19hZGRfcmFuZ2UgeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAnWicgKSwgZGF0YTogeyB1Z2M6ICdMdScsIH0sIH1cbiAgICAgIGRiLnJuZ19hZGRfcmFuZ2UgeyBsbzogKCBjaWRfb2YgJ2EnICksIGhpOiAoIGNpZF9vZiAneicgKSwgZGF0YTogeyB1Z2M6ICdMbCcsIH0sIH1cbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyXzIxNCA9IC0+IGRiLnJuZ19hZGRfcmFuZ2UgeyBsbzogIDEwLCBoaTogICAgICAgICA4LCB9ICksIC/OqXJuZ192YWxpZGF0ZV9sb2hpL1xuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMjE1ID0gLT4gZGIucm5nX2FkZF9yYW5nZSB7IGxvOiAtMTAsIGhpOiAgICAgICAgIDgsIH0gKSwgL86pcm5nX3ZhbGlkYXRlX2xvL1xuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMjE2ID0gLT4gZGIucm5nX2FkZF9yYW5nZSB7IGxvOiAgMTAsIGhpOiAweDIwXzAwMDAsIH0gKSwgL86pcm5nX3ZhbGlkYXRlX2hpL1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBlY2hvIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGRiLndhbGsgZGIuc3RhdGVtZW50cy5ybmdfYWxsX3Jhbmdlc1xuICAgICAgcm93cyA9IGRiLndhbGsgZGIuc3RhdGVtZW50cy5ybmdfYWxsX3Jhbmdlc1xuICAgICAgQGVxICggzqliYmRicl8yMTcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGxvOiAwLCBoaTogMTI3LCBkYXRhOiAne1wiaXNfYXNjaWlcIjp0cnVlfScsIGlzX2FzY2lpOiAxLCB1Z2M6IG51bGwgfVxuICAgICAgQGVxICggzqliYmRicl8yMTggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGxvOiA2NSwgaGk6IDkwLCBkYXRhOiAne1widWdjXCI6XCJMdVwifScsIGlzX2FzY2lpOiBudWxsLCB1Z2M6ICdMdScgfVxuICAgICAgQGVxICggzqliYmRicl8yMTkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGxvOiA5NywgaGk6IDEyMiwgZGF0YTogJ3tcInVnY1wiOlwiTGxcIn0nLCBpc19hc2NpaTogbnVsbCwgdWdjOiAnTGwnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjIwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBsbzogMTg4LCBoaTogMTg4LCBkYXRhOiAne1wiaXNfYXNjaWlcIjpmYWxzZSxcInVnY1wiOlwiTm9cIixcInVuYW1lXCI6XCJWVUxHQVIgRlJBQ1RJT04gT05FIFFVQVJURVJcIn0nLCBpc19hc2NpaTogMCwgdWdjOiAnTm8nIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjIxID0gLT4gcm93cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiID0gbmV3IFVuaWNvZGVfcmFuZ2VzICc6bWVtb3J5OidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGIucm5nX2FkZF9yYW5nZSB7IGxvOiAwLCBoaTogMTI3LCBkYXRhOiB7IHVnYzogJ0NjJywgfSwgfVxuICAgICAgZGIucm5nX2FkZF9yYW5nZSB7IGxvOiAoIGNpZF9vZiAnRicgKSwgZGF0YTogeyB1Z2M6ICdMdScsIH0sIH1cbiAgICAgICMgZGIucm5nX2FkZF9yYW5nZSB7IGxvOiAoIGNpZF9vZiAnRycgKSwgZGF0YTogeyBpc19hc2NpaTogdHJ1ZSwgZGF0YTogeyB1Z2M6ICdDYycsIH0gfSwgfVxuICAgICAgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBkYi53YWxrIGRiLnN0YXRlbWVudHMucm5nX2FsbF9yYW5nZXNcbiAgICAgICMgcm93cyA9IGRiLndhbGsgZGIuc3RhdGVtZW50cy5ybmdfYWxsX3Jhbmdlc1xuICAgICAgIyBAZXEgKCDOqWJiZGJyXzIyMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbG86ICAwLCBoaTogIDY5LCBkYXRhOiAne1widWdjXCI6XCJDY1wifScsIGlzX2FzY2lpOiBudWxsLCB1Z2M6ICdDYycsIH1cbiAgICAgICMgQGVxICggzqliYmRicl8yMjMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGxvOiA3MCwgaGk6ICA3MCwgZGF0YTogJ3tcInVnY1wiOlwiTHVcIn0nLCBpc19hc2NpaTogbnVsbCwgdWdjOiAnTHUnLCB9XG4gICAgICAjIEBlcSAoIM6pYmJkYnJfMjI0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBsbzogNzEsIGhpOiAxMjcsIGRhdGE6ICd7XCJ1Z2NcIjpcIkNjXCJ9JywgaXNfYXNjaWk6IG51bGwsIHVnYzogJ0NjJywgfVxuICAgICAgIyBAZXEgKCDOqWJiZGJyXzIyNSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkYnJpY19zdGRfZ2VuZXJhdGVfc2VyaWVzOiB0ZXN0cy5kYnJpY19zdGRfZ2VuZXJhdGVfc2VyaWVzLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGJyaWNfcm5nOiB0ZXN0cy5kYnJpY19ybmcsIH1cbiJdfQ==
