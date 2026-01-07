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
      var IDN, LIT, VEC, esql, internals, Ωbbdbr__10, Ωbbdbr__11, Ωbbdbr__12, Ωbbdbr__13, Ωbbdbr__14, Ωbbdbr__15, Ωbbdbr__16, Ωbbdbr__17, Ωbbdbr___3, Ωbbdbr___4, Ωbbdbr___5, Ωbbdbr___6, Ωbbdbr___7, Ωbbdbr___8, Ωbbdbr___9;
      ({esql, internals} = SFMODULES.unstable.require_dbric());
      ({LIT, IDN, VEC} = esql);
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
    // #---------------------------------------------------------------------------------------------------------
    // reject_nonconformant_build_statements: ->
    //   { Dbric,
    //     SQL,
    //     internals,                } = SFMODULES.unstable.require_dbric()
    //   { temp,                     } = SFMODULES.unstable.require_temp()
    //   #.......................................................................................................
    //   class Dbric_nonconform extends Dbric
    //     @build: [
    //       SQL"""
    //         create table nonconform_one ( a text primary key );"""
    //       SQL"""
    //         -- this comment shouldn't be here
    //         create view nonconform_two as select * from nonconform_one;"""
    //       ]
    //   #.......................................................................................................
    //   db = null
    //   @throws ( Ωbbdbr__18 = -> db = new Dbric_nonconform ':memory:' ), /1 out of 2 build statement\(s\) could not be parsed/
    //   debug 'Ωbbdbr__19', db._get_objects_in_build_statements()
    //   return null
    //   #.......................................................................................................
    //   return null

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
          var db, Ωbbdbr__27, Ωbbdbr__28, Ωbbdbr__29, Ωbbdbr__30;
          db = new Dbric(db_path);
          this.eq((Ωbbdbr__27 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__28 = function() {
            return db.cfg.prefix;
          }), '(NOPREFIX)');
          this.eq((Ωbbdbr__29 = function() {
            return db.prefix;
          }), '');
          this.eq((Ωbbdbr__30 = function() {
            return db.prefix_re;
          }), /|/);
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__31, Ωbbdbr__32, Ωbbdbr__33, Ωbbdbr__34;
          db = new Dbric_std(db_path, {
            db_class: Bsql3
          });
          this.eq((Ωbbdbr__31 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__32 = function() {
            return db.cfg.prefix;
          }), 'std');
          this.eq((Ωbbdbr__33 = function() {
            return db.prefix;
          }), 'std');
          this.eq((Ωbbdbr__34 = function() {
            return db.prefix_re;
          }), /^_?\x73td_.*$/);
          return null;
        })();
        (() => {          //.....................................................................................................
          var _, db, o, objects, Ωbbdbr__35, Ωbbdbr__36, Ωbbdbr__37, Ωbbdbr__38, Ωbbdbr__39, Ωbbdbr__40, Ωbbdbr__41;
          db = new Dbric_std(db_path, {
            db_class: Bsql3
          });
          this.eq((Ωbbdbr__35 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__36 = function() {
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
          this.eq((Ωbbdbr__37 = function() {
            return objects.has('view:std_tables');
          }), true);
          this.eq((Ωbbdbr__38 = function() {
            return objects.has('view:std_views');
          }), true);
          this.eq((Ωbbdbr__39 = function() {
            return objects.has('view:std_relations');
          }), true);
          this.eq((Ωbbdbr__40 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__41 = function() {
            return db.build();
          }), 0);
          return null;
        })();
        (() => {          //.....................................................................................................
          var _, db, o, objects, Ωbbdbr__42, Ωbbdbr__43, Ωbbdbr__44, Ωbbdbr__45, Ωbbdbr__46, Ωbbdbr__47, Ωbbdbr__48;
          db = new Dbric_std(db_path, {
            db_class: Bsql3
          });
          this.eq((Ωbbdbr__42 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__43 = function() {
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
          this.eq((Ωbbdbr__44 = function() {
            return objects.has('view:std_tables');
          }), true);
          this.eq((Ωbbdbr__45 = function() {
            return objects.has('view:std_views');
          }), true);
          this.eq((Ωbbdbr__46 = function() {
            return objects.has('view:std_relations');
          }), true);
          this.eq((Ωbbdbr__47 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__48 = function() {
            return db.build();
          }), 0);
          return null;
        })();
        (() => {          //.....................................................................................................
          var db, Ωbbdbr__49;
          db = new Dbric_std(db_path, {
            db_class: Bsql3
          });
          (db.prepare(SQL`drop view std_tables;`)).run();
          this.eq((Ωbbdbr__49 = function() {
            return db.is_ready;
          }), false);
          return null;
        })();
        (() => {          //.....................................................................................................
          var _, db, o, objects, Ωbbdbr__50, Ωbbdbr__51, Ωbbdbr__52, Ωbbdbr__53, Ωbbdbr__54, Ωbbdbr__55, Ωbbdbr__56;
          db = new Dbric_std(db_path, {
            db_class: Bsql3
          });
          this.eq((Ωbbdbr__50 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__51 = function() {
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
          this.eq((Ωbbdbr__52 = function() {
            return objects.has('view:std_tables');
          }), true);
          this.eq((Ωbbdbr__53 = function() {
            return objects.has('view:std_views');
          }), true);
          this.eq((Ωbbdbr__54 = function() {
            return objects.has('view:std_relations');
          }), true);
          this.eq((Ωbbdbr__55 = function() {
            return db.is_ready;
          }), true);
          this.eq((Ωbbdbr__56 = function() {
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
        var Db, db, Ωbbdbr__57, Ωbbdbr__58, Ωbbdbr__59, Ωbbdbr__60;
        Db = (function() {
          class Db extends Dbric_std {};

          Db.db_class = Bsql3;

          return Db;

        }).call(this);
        db = new Db(':memory:');
        this.eq((Ωbbdbr__57 = function() {
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
        this.eq((Ωbbdbr__58 = function() {
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
        this.eq((Ωbbdbr__59 = function() {
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
        this.eq((Ωbbdbr__60 = function() {
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
        // debug 'Ωbbdbr__61', b
        // debug 'Ωbbdbr__62', 'functions: ', get_function_names b
        // debug 'Ωbbdbr__63', 'functions: ', ( get_function_names b ).has 'fn_a'
        // debug 'Ωbbdbr__64', 'functions: ', ( get_function_names b ).has 'fn_b'
        // debug 'Ωbbdbr__65', 'functions: ', ( get_function_names b ).has 'regexp'
        // debug 'Ωbbdbr__66', 'tables:    ', get_table_names b
        // debug 'Ωbbdbr__67', 'views:     ', get_view_names b
        // debug 'Ωbbdbr__68', 'triggers:  ', get_trigger_names b
        // debug 'Ωbbdbr__69', 'statements:', ( k for k of b.statements )
        // return null
        //.......................................................................................................
        var dba, function_names, table_names, trigger_names, view_names, Ωbbdbr__70, Ωbbdbr__71, Ωbbdbr__72, Ωbbdbr__73, Ωbbdbr__74, Ωbbdbr__75, Ωbbdbr__76, Ωbbdbr__77, Ωbbdbr__78, Ωbbdbr__79, Ωbbdbr__80, Ωbbdbr__81, Ωbbdbr__82, Ωbbdbr__83, Ωbbdbr__84, Ωbbdbr__85, Ωbbdbr__86;
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
        this.eq((Ωbbdbr__70 = function() {
          return dba.statements.std_get_schema instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__71 = function() {
          return dba.statements.std_get_tables instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__72 = function() {
          return dba.statements.std_get_views instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__73 = function() {
          return dba.statements.std_get_relations instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__74 = function() {
          return dba.statements.select_a instanceof statement_class;
        }), false);
        this.eq((Ωbbdbr__75 = function() {
          return dba.statements.select_b instanceof statement_class;
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__76 = function() {
          return function_names.has('zzz_test');
        }), true);
        this.eq((Ωbbdbr__77 = function() {
          return function_names.has('regexp');
        }), true);
        this.eq((Ωbbdbr__78 = function() {
          return function_names.has('fn_a');
        }), false);
        this.eq((Ωbbdbr__79 = function() {
          return function_names.has('fn_b');
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__80 = function() {
          return table_names.has('table_a');
        }), false);
        this.eq((Ωbbdbr__81 = function() {
          return table_names.has('table_b');
        }), false);
        this.eq((Ωbbdbr__82 = function() {
          return view_names.has('std_tables');
        }), true);
        this.eq((Ωbbdbr__83 = function() {
          return view_names.has('std_views');
        }), true);
        this.eq((Ωbbdbr__84 = function() {
          return view_names.has('std_relations');
        }), true);
        this.eq((Ωbbdbr__85 = function() {
          return view_names.has('view_a');
        }), false);
        this.eq((Ωbbdbr__86 = function() {
          return view_names.has('view_b');
        }), false);
        return null;
      })();
      (() => {        //.......................................................................................................
        var dba, function_names, table_names, trigger_names, view_names, Ωbbdbr_100, Ωbbdbr_101, Ωbbdbr_102, Ωbbdbr_103, Ωbbdbr__87, Ωbbdbr__88, Ωbbdbr__89, Ωbbdbr__90, Ωbbdbr__91, Ωbbdbr__92, Ωbbdbr__93, Ωbbdbr__94, Ωbbdbr__95, Ωbbdbr__96, Ωbbdbr__97, Ωbbdbr__98, Ωbbdbr__99;
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
        this.eq((Ωbbdbr__87 = function() {
          return dba.statements.std_get_schema instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__88 = function() {
          return dba.statements.std_get_tables instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__89 = function() {
          return dba.statements.std_get_views instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__90 = function() {
          return dba.statements.std_get_relations instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__91 = function() {
          return dba.statements.select_a instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__92 = function() {
          return dba.statements.select_b instanceof statement_class;
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__93 = function() {
          return function_names.has('zzz_test');
        }), true);
        this.eq((Ωbbdbr__94 = function() {
          return function_names.has('regexp');
        }), true);
        this.eq((Ωbbdbr__95 = function() {
          return function_names.has('fn_a');
        }), true);
        this.eq((Ωbbdbr__96 = function() {
          return function_names.has('fn_b');
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__97 = function() {
          return table_names.has('table_a');
        }), true);
        this.eq((Ωbbdbr__98 = function() {
          return table_names.has('table_b');
        }), false);
        this.eq((Ωbbdbr__99 = function() {
          return view_names.has('std_tables');
        }), true);
        this.eq((Ωbbdbr_100 = function() {
          return view_names.has('std_views');
        }), true);
        this.eq((Ωbbdbr_101 = function() {
          return view_names.has('std_relations');
        }), true);
        this.eq((Ωbbdbr_102 = function() {
          return view_names.has('view_a');
        }), true);
        this.eq((Ωbbdbr_103 = function() {
          return view_names.has('view_b');
        }), false);
        return null;
      })();
      (() => {        //.......................................................................................................
        var dba, function_names, table_names, trigger_names, view_names, Ωbbdbr_104, Ωbbdbr_105, Ωbbdbr_106, Ωbbdbr_107, Ωbbdbr_108, Ωbbdbr_109, Ωbbdbr_110, Ωbbdbr_111, Ωbbdbr_112, Ωbbdbr_113, Ωbbdbr_114, Ωbbdbr_115, Ωbbdbr_116, Ωbbdbr_117, Ωbbdbr_118, Ωbbdbr_119, Ωbbdbr_120;
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
        this.eq((Ωbbdbr_104 = function() {
          return dba.statements.std_get_schema instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr_105 = function() {
          return dba.statements.std_get_tables instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr_106 = function() {
          return dba.statements.std_get_views instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr_107 = function() {
          return dba.statements.std_get_relations instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr_108 = function() {
          return dba.statements.select_a instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr_109 = function() {
          return dba.statements.select_b instanceof statement_class;
        }), true);
        //.....................................................................................................
        this.eq((Ωbbdbr_110 = function() {
          return function_names.has('zzz_test');
        }), true);
        this.eq((Ωbbdbr_111 = function() {
          return function_names.has('regexp');
        }), true);
        this.eq((Ωbbdbr_112 = function() {
          return function_names.has('fn_a');
        }), true);
        this.eq((Ωbbdbr_113 = function() {
          return function_names.has('fn_b');
        }), true);
        //.....................................................................................................
        this.eq((Ωbbdbr_114 = function() {
          return table_names.has('table_a');
        }), true);
        this.eq((Ωbbdbr_115 = function() {
          return table_names.has('table_b');
        }), true);
        this.eq((Ωbbdbr_116 = function() {
          return view_names.has('std_tables');
        }), true);
        this.eq((Ωbbdbr_117 = function() {
          return view_names.has('std_views');
        }), true);
        this.eq((Ωbbdbr_118 = function() {
          return view_names.has('std_relations');
        }), true);
        this.eq((Ωbbdbr_119 = function() {
          return view_names.has('view_a');
        }), true);
        this.eq((Ωbbdbr_120 = function() {
          return view_names.has('view_b');
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var Ωbbdbr_121, Ωbbdbr_122, Ωbbdbr_123;
        this.throws((Ωbbdbr_121 = function() {
          return new C_duplicate_function();
        }), /a UDF or built-in function named 'fn_b' has already been declared/);
        this.throws((Ωbbdbr_122 = function() {
          return new C_duplicate_statement();
        }), /statement 'select_b' is already declared/);
        return this.throws((Ωbbdbr_123 = function() {
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
      (() => {        // debug 'Ωbbdbr_124', new Dbric '/dev/shm/bricabrac.sqlite'
        var db, db_proto;
        db = new Dbric(':memory:');
        db_proto = Object.getPrototypeOf(db);
        // debug 'Ωbbdbr_125', Object.getOwnPropertyDescriptor db_proto, 'is_ready'
        // debug 'Ωbbdbr_126', Object.getOwnPropertyDescriptor db_proto, '_get_is_ready'
        return null;
      })();
      //-------------------------------------------------------------------------------------------------------
      /* use derived classes to assert that property descriptors are searched for in the prototype chain: */
      Dbric_A = class Dbric_A extends Dbric {};
      Dbric_B = class Dbric_B extends Dbric_A {};
      Dbric_C = class Dbric_C extends Dbric_B {};
      Dbric_Z = class Dbric_Z extends Dbric_C {};
      (() => {        //-------------------------------------------------------------------------------------------------------
        var Dbric_nonconform, Ωbbdbr_127;
        Dbric_nonconform = class Dbric_nonconform extends Dbric_Z {
          is_ready() {}

        };
        this.throws((Ωbbdbr_127 = function() {
          return new Dbric_nonconform();
        }), /not allowed to override property 'is_ready'; use '_get_is_ready instead/);
        return null;
      })();
      (() => {        //-------------------------------------------------------------------------------------------------------
        var Dbric_nonconform, Ωbbdbr_128;
        Dbric_nonconform = class Dbric_nonconform extends Dbric_Z {
          prefix() {}

        };
        this.throws((Ωbbdbr_128 = function() {
          return new Dbric_nonconform();
        }), /not allowed to override property 'prefix'; use '_get_prefix instead/);
        return null;
      })();
      (() => {        //-------------------------------------------------------------------------------------------------------
        var Dbric_nonconform, Ωbbdbr_129;
        Dbric_nonconform = class Dbric_nonconform extends Dbric_Z {
          prefix_re() {}

        };
        this.throws((Ωbbdbr_129 = function() {
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
        // debug 'Ωbbdbr_130', new Dbric '/dev/shm/bricabrac.sqlite'
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
        var cast_row, db_path, rows, store, Ωbbdbr_132, Ωbbdbr_133, Ωbbdbr_134, Ωbbdbr_135, Ωbbdbr_136, Ωbbdbr_137;
        db_path = '/dev/shm/bricabrac.sqlite';
        store = new Dbric_store(db_path);
        // store.statements.store_create_tables.run()
        // for row from store.statements.get_schema.iterate()
        //   help 'Ωbbdbr_131', row
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
        this.eq((Ωbbdbr_132 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'false',
          facet_value: false,
          _v: 'false'
        });
        this.eq((Ωbbdbr_133 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'one',
          facet_value: 1,
          _v: 1
        });
        this.eq((Ωbbdbr_134 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'three',
          facet_value: 'iii',
          _v: '"iii"'
        });
        this.eq((Ωbbdbr_135 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'true',
          facet_value: true,
          _v: 'true'
        });
        this.eq((Ωbbdbr_136 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'two',
          facet_value: 2,
          _v: 2
        });
        return this.eq((Ωbbdbr_137 = function() {
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
        var cast_row, db_path, rows, store, Ωbbdbr_139, Ωbbdbr_140, Ωbbdbr_142, Ωbbdbr_143, Ωbbdbr_144, Ωbbdbr_145, Ωbbdbr_146, Ωbbdbr_147;
        db_path = '/dev/shm/bricabrac.sqlite';
        store = new Dbric_store(db_path);
        // debug 'Ωbbdbr_138', store
        this.eq((Ωbbdbr_139 = function() {
          return store.db instanceof Bsql3;
        }), true);
        this.eq((Ωbbdbr_140 = function() {
          return store.db instanceof _Bsql3;
        }), true);
        // store.statements.store_create_tables.run()
        // for row from store.statements.get_schema.iterate()
        //   help 'Ωbbdbr_141', row
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
        this.eq((Ωbbdbr_142 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'false',
          facet_value: false,
          _v: 'false'
        });
        this.eq((Ωbbdbr_143 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'one',
          facet_value: 1,
          _v: 1
        });
        this.eq((Ωbbdbr_144 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'three',
          facet_value: 'iii',
          _v: '"iii"'
        });
        this.eq((Ωbbdbr_145 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'true',
          facet_value: true,
          _v: 'true'
        });
        this.eq((Ωbbdbr_146 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'two',
          facet_value: 2,
          _v: 2
        });
        return this.eq((Ωbbdbr_147 = function() {
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
        var db_path, i, n, rows, squares, Ωbbdbr_148, Ωbbdbr_150, Ωbbdbr_151, Ωbbdbr_152, Ωbbdbr_153, Ωbbdbr_154, Ωbbdbr_155, Ωbbdbr_156, Ωbbdbr_157, Ωbbdbr_158, Ωbbdbr_159, Ωbbdbr_160;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = new Dbric_squares(db_path);
        this.eq((Ωbbdbr_148 = function() {
          return squares.db instanceof Bsql3;
        }), false);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_149', row for row from squares.statements.select_from_squares.iterate()
        rows = squares.statements.select_from_squares.iterate();
        this.eq((Ωbbdbr_150 = function() {
          return rows.next().value;
        }), {
          n: 0,
          square: 0
        });
        this.eq((Ωbbdbr_151 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1
        });
        this.eq((Ωbbdbr_152 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4
        });
        this.eq((Ωbbdbr_153 = function() {
          return rows.next().value;
        }), {
          n: 3,
          square: 9
        });
        this.eq((Ωbbdbr_154 = function() {
          return rows.next().value;
        }), {
          n: 4,
          square: 16
        });
        this.eq((Ωbbdbr_155 = function() {
          return rows.next().value;
        }), {
          n: 5,
          square: 25
        });
        this.eq((Ωbbdbr_156 = function() {
          return rows.next().value;
        }), {
          n: 6,
          square: 36
        });
        this.eq((Ωbbdbr_157 = function() {
          return rows.next().value;
        }), {
          n: 7,
          square: 49
        });
        this.eq((Ωbbdbr_158 = function() {
          return rows.next().value;
        }), {
          n: 8,
          square: 64
        });
        this.eq((Ωbbdbr_159 = function() {
          return rows.next().value;
        }), {
          n: 9,
          square: 81
        });
        this.eq((Ωbbdbr_160 = function() {
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
                // debug 'Ωbbdbr_161', { total, element, }
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
        var db_path, i, n, rows, squares, Ωbbdbr_162, Ωbbdbr_164, Ωbbdbr_165, Ωbbdbr_167, Ωbbdbr_168;
        db_path = '/dev/shm/bricabrac-udf_aggregates_with_nsql.sqlite';
        squares = new Dbric_squares(db_path);
        this.eq((Ωbbdbr_162 = function() {
          return squares.db instanceof Bsql3;
        }), false);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_163', row for row from squares.statements.select_from_squares.iterate { start: 1, stop: 5, }
        rows = squares.statements.select_from_squares.iterate({
          start: 1,
          stop: 5
        });
        this.eq((Ωbbdbr_164 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1,
          p_n: 120,
          p_square: 14400
        });
        this.eq((Ωbbdbr_165 = function() {
          return rows.next().value;
        }), null);
        //.....................................................................................................
        // echo 'Ωbbdbr_166', row for row from squares.statements.select_from_squares.iterate()
        rows = squares.statements.select_from_squares.iterate();
        this.eq((Ωbbdbr_167 = function() {
          return rows.next().value;
        }), {
          n: null,
          square: null,
          p_n: 1,
          p_square: 1
        });
        this.eq((Ωbbdbr_168 = function() {
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
        var db_path, i, n, rows, squares, Ωbbdbr_169, Ωbbdbr_170, Ωbbdbr_171, Ωbbdbr_172, Ωbbdbr_173, Ωbbdbr_174, Ωbbdbr_175, Ωbbdbr_176, Ωbbdbr_177, Ωbbdbr_178, Ωbbdbr_179, Ωbbdbr_180;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = new Dbric_squares(db_path);
        this.eq((Ωbbdbr_169 = function() {
          return squares.db instanceof Bsql3;
        }), true);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo row for row from squares.statements.select_from_squares.iterate()
        rows = squares.statements.select_from_squares.iterate();
        this.eq((Ωbbdbr_170 = function() {
          return rows.next().value;
        }), {
          n: 0,
          square: 0
        });
        this.eq((Ωbbdbr_171 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1
        });
        this.eq((Ωbbdbr_172 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4
        });
        this.eq((Ωbbdbr_173 = function() {
          return rows.next().value;
        }), {
          n: 3,
          square: 9
        });
        this.eq((Ωbbdbr_174 = function() {
          return rows.next().value;
        }), {
          n: 4,
          square: 16
        });
        this.eq((Ωbbdbr_175 = function() {
          return rows.next().value;
        }), {
          n: 5,
          square: 25
        });
        this.eq((Ωbbdbr_176 = function() {
          return rows.next().value;
        }), {
          n: 6,
          square: 36
        });
        this.eq((Ωbbdbr_177 = function() {
          return rows.next().value;
        }), {
          n: 7,
          square: 49
        });
        this.eq((Ωbbdbr_178 = function() {
          return rows.next().value;
        }), {
          n: 8,
          square: 64
        });
        this.eq((Ωbbdbr_179 = function() {
          return rows.next().value;
        }), {
          n: 9,
          square: 81
        });
        this.eq((Ωbbdbr_180 = function() {
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
                // debug 'Ωbbdbr_181', { total, element, }
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
        var db_path, i, n, rows, squares, Ωbbdbr_182, Ωbbdbr_184, Ωbbdbr_185;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = new Dbric_squares(db_path);
        this.eq((Ωbbdbr_182 = function() {
          return squares.db instanceof Bsql3;
        }), true);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_183', row for row from squares.statements.select_from_squares.iterate { start: 2, stop: 3, }
        rows = squares.statements.select_from_squares.iterate({
          start: 2,
          stop: 3
        });
        this.eq((Ωbbdbr_184 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4,
          p_n: 6,
          p_square: 36
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
        var db_path, i, len, phrase, phrases, ref, rows, Ωbbdbr_186, Ωbbdbr_189, Ωbbdbr_190, Ωbbdbr_191, Ωbbdbr_192, Ωbbdbr_193, Ωbbdbr_194, Ωbbdbr_195, Ωbbdbr_196, Ωbbdbr_197, Ωbbdbr_198, Ωbbdbr_199, Ωbbdbr_200, Ωbbdbr_201;
        db_path = '/dev/shm/bricabrac.sqlite';
        phrases = new Dbric_phrases(db_path);
        this.eq((Ωbbdbr_186 = function() {
          return phrases.db instanceof Bsql3;
        }), true);
        ref = ['eleven', 'five', 'nine', 'one', 'one point five', 'seven', 'three point one'];
        for (i = 0, len = ref.length; i < len; i++) {
          phrase = ref[i];
          phrases.statements.insert_phrase.run({phrase});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_187', row for row from phrases.statements.select_from_phrases.iterate { matcher: '^.*([aeiou].e).*$', }
        // echo()
        //.....................................................................................................
        // echo 'Ωbbdbr_188', row for row from phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
        rows = phrases.statements.select_from_phrases.iterate({
          matcher: '([^aeiou]?[aeiou]+)(?=[mnv])'
        });
        this.eq((Ωbbdbr_189 = function() {
          return rows.next().value;
        }), {
          phrase: 'eleven',
          match: 'le',
          capture: 'le'
        });
        this.eq((Ωbbdbr_190 = function() {
          return rows.next().value;
        }), {
          phrase: 'eleven',
          match: 've',
          capture: 've'
        });
        this.eq((Ωbbdbr_191 = function() {
          return rows.next().value;
        }), {
          phrase: 'five',
          match: 'fi',
          capture: 'fi'
        });
        this.eq((Ωbbdbr_192 = function() {
          return rows.next().value;
        }), {
          phrase: 'nine',
          match: 'ni',
          capture: 'ni'
        });
        this.eq((Ωbbdbr_193 = function() {
          return rows.next().value;
        }), {
          phrase: 'one',
          match: 'o',
          capture: 'o'
        });
        this.eq((Ωbbdbr_194 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'o',
          capture: 'o'
        });
        this.eq((Ωbbdbr_195 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'poi',
          capture: 'poi'
        });
        this.eq((Ωbbdbr_196 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'fi',
          capture: 'fi'
        });
        this.eq((Ωbbdbr_197 = function() {
          return rows.next().value;
        }), {
          phrase: 'seven',
          match: 'se',
          capture: 'se'
        });
        this.eq((Ωbbdbr_198 = function() {
          return rows.next().value;
        }), {
          phrase: 'seven',
          match: 've',
          capture: 've'
        });
        this.eq((Ωbbdbr_199 = function() {
          return rows.next().value;
        }), {
          phrase: 'three point one',
          match: 'poi',
          capture: 'poi'
        });
        this.eq((Ωbbdbr_200 = function() {
          return rows.next().value;
        }), {
          phrase: 'three point one',
          match: ' o',
          capture: ' o'
        });
        this.eq((Ωbbdbr_201 = function() {
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
        var db_path, dskey, i, keyword, keywords, len, line, line_nr, phrases, x, Ωbbdbr_202, Ωbbdbr_203, Ωbbdbr_204;
        db_path = '/dev/shm/bricabrac.sqlite';
        phrases = new Dbric_phrases(db_path);
        this.eq((Ωbbdbr_202 = function() {
          return (phrases.prepare(SQL`pragma foreign_keys`)).get();
        }), {
          foreign_keys: 1
        });
        this.eq((Ωbbdbr_203 = function() {
          return (phrases.prepare(SQL`pragma journal_mode`)).get();
        }), {
          journal_mode: 'wal'
        });
        this.eq((Ωbbdbr_204 = function() {
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
// echo 'Ωbbdbr_205', row for row from phrases.statements.select_from_datasources.iterate()
// echo()
// #.....................................................................................................
// echo 'Ωbbdbr_206', row for row from phrases.statements.select_from_mirror.iterate()
// echo()
//.....................................................................................................
        for (x of phrases.statements.select_from_mirror.iterate()) {
          ({dskey, line_nr, line} = x);
          keywords = line.split(/(?:\p{Z}+)|((?:\p{L}+)|(?:\p{N}+)|(?:\p{S}+))/v);
// debug 'Ωbbdbr_207', line_nr, rpr keywords
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
        // echo 'Ωbbdbr_208', row for row from phrases.statements.select_from_keywords.iterate()
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
// debug 'Ωbbdbr_209', line_nr, rpr keywords
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
        var db_path, phrases, rows, Ωbbdbr_212, Ωbbdbr_213, Ωbbdbr_214, Ωbbdbr_216, Ωbbdbr_217, Ωbbdbr_218, Ωbbdbr_220, Ωbbdbr_221, Ωbbdbr_222, Ωbbdbr_223, Ωbbdbr_224, Ωbbdbr_225, Ωbbdbr_226, Ωbbdbr_227, Ωbbdbr_228, Ωbbdbr_229, Ωbbdbr_230;
        db_path = '/dev/shm/bricabrac.sqlite';
        phrases = new Dbric_phrases(db_path);
        // debug 'Ωbbdbr_210', phrases.teardown()
        // debug 'Ωbbdbr_211', phrases.rebuild()
        this.eq((Ωbbdbr_212 = function() {
          return (phrases.prepare(SQL`pragma foreign_keys`)).get();
        }), {
          foreign_keys: 1
        });
        this.eq((Ωbbdbr_213 = function() {
          return (phrases.prepare(SQL`pragma journal_mode`)).get();
        }), {
          journal_mode: 'wal'
        });
        this.eq((Ωbbdbr_214 = function() {
          return phrases.db instanceof Bsql3;
        }), true);
        (() => {          //.....................................................................................................
          var dskey, path;
          dskey = 'humdum';
          path = PATH.resolve(__dirname, '../../../assets/bricabrac/humpty-dumpty.md');
          return phrases.statements.insert_datasource.run({dskey, path});
        })();
        //.....................................................................................................
        phrases.statements.populate_keywords.run();
        //.....................................................................................................
        // echo 'Ωbbdbr_215', row for row from phrases.statements.locations_from_keyword.iterate { keyword: 'thought', }
        // echo()
        rows = phrases.statements.locations_from_keyword.iterate({
          keyword: 'thought'
        });
        this.eq((Ωbbdbr_216 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 15,
          keyword: 'thought'
        });
        this.eq((Ωbbdbr_217 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 34,
          keyword: 'thought'
        });
        this.eq((Ωbbdbr_218 = function() {
          return rows.next().value;
        }), void 0);
        //.....................................................................................................
        // echo 'Ωbbdbr_219', row for row from phrases.statements.locations_from_keyword.iterate { keyword: 'she', }
        // echo()
        rows = phrases.statements.locations_from_keyword.iterate({
          keyword: 'she'
        });
        this.eq((Ωbbdbr_220 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 2,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_221 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 3,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_222 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 4,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_223 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 5,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_224 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 15,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_225 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 17,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_226 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 18,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_227 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 26,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_228 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 34,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_229 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 36,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_230 = function() {
          return rows.next().value;
        }), void 0);
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    // #---------------------------------------------------------------------------------------------------------
    // dbric_std_variables_and_sequences: ->
    //   { Dbric_std,
    //     True,
    //     False,
    //     SQL,
    //     esql,
    //     internals,                } = SFMODULES.unstable.require_dbric()
    //   Bsql3                         = require 'better-sqlite3'
    //   jr                            = JSON.stringify
    //   #=======================================================================================================
    //   do =>
    //     db = new Dbric_std ':memory:', { db_class: Bsql3, }
    //     db.set_variable 'filename', __filename
    //     object_input  = { z: 'Z', is_good: true, a: 'a\u{0308}', }
    //     object_output = { a: '\u{00e4}', is_good: true, z: 'Z', }
    //     db.set_variable 'obj', object_input
    //     #.....................................................................................................
    //     @eq ( Ωbbdbr_231 = -> db.get_variable 'filename'                                          ), __filename
    //     @eq ( Ωbbdbr_232 = -> db.get_variable 'obj'                                               ), object_output
    //     @eq ( Ωbbdbr_233 = -> Object.keys db.get_variable 'obj'                                   ), Object.keys object_output
    //     @eq ( Ωbbdbr_234 = -> db.get_all SQL"""select * from std_sequences;"""                    ), [ { name: 'seq:global:rowid', value: 0, delta: 1 } ]
    //     #.....................................................................................................
    //     get_next_rowid    = SQL"""select    std_get_next_in_sequence( 'seq:global:rowid'  ) as rowid from std_sequences;"""
    //     get_current_rowid = SQL"""select std_get_current_in_sequence( 'seq:global:rowid'  ) as rowid from std_sequences;"""
    //     get_next_count    = SQL"""select    std_get_next_in_sequence( 'seq:app:count'     ) as count from std_sequences;"""
    //     get_current_count = SQL"""select std_get_current_in_sequence( 'seq:app:count'     ) as count from std_sequences;"""
    //     try db.execute SQL"begin immediate;" catch e then warn 'Ωbbdbr_235', e.message
    //     try db.w.execute SQL"begin immediate;" catch e then warn 'Ωbbdbr_236', e.message
    //     #.....................................................................................................
    //     @eq ( Ωbbdbr_237 = -> ( db.get_first get_next_rowid ).rowid                                   ), 1
    //     @eq ( Ωbbdbr_238 = -> ( db.get_first get_next_rowid ).rowid                                   ), 2
    //     @eq ( Ωbbdbr_239 = -> ( db.get_first get_next_rowid ).rowid                                   ), 3
    //     @eq ( Ωbbdbr_240 = -> ( db.get_first get_next_rowid ).rowid                                   ), 4
    //     #.....................................................................................................
    //     @eq ( Ωbbdbr_241 = -> ( db.get_first get_current_rowid ).rowid                                ), 4
    //     @eq ( Ωbbdbr_242 = -> ( db.get_first get_current_rowid ).rowid                                ), 4
    //     #.....................................................................................................
    //     @eq ( Ωbbdbr_243 = -> ( db.get_first get_next_rowid ).rowid                                   ), 5
    //     @eq ( Ωbbdbr_244 = -> ( db.get_first get_current_rowid ).rowid                                ), 5
    //     try db.w.execute SQL"commit;" catch e then warn 'Ωbbdbr_245', e.message
    //     try db.execute SQL"commit;" catch e then warn 'Ωbbdbr_246', e.message
    //     # #.....................................................................................................
    //     try db.execute SQL"begin immediate;" catch e then warn 'Ωbbdbr_247', e.message
    //     @eq ( Ωbbdbr_248 = -> db.std_create_sequence 'seq:app:count', { value: 100, delta: +2, }  ), null
    //     try db.execute SQL"commit;" catch e then warn 'Ωbbdbr_249', e.message
    //     # try db.w.execute SQL"commit;" catch e then warn 'Ωbbdbr_250', e.message
    //     @eq ( Ωbbdbr_251 = -> db.get_all SQL"select * from std_sequences order by name;"          ), [ { name: 'seq:app:count', value: 100, delta: 2 }, { name: 'seq:global:rowid', value: 5, delta: 1 } ]
    //     @eq ( Ωbbdbr_252 = -> db.w.get_all SQL"select * from std_sequences order by name;"          ), [ { name: 'seq:app:count', value: 100, delta: 2 }, { name: 'seq:global:rowid', value: 5, delta: 1 } ]
    //     # try db.execute SQL"commit;" catch e then warn 'Ωbbdbr_253', e.message
    //     # try db.w.execute SQL"commit;" catch e then warn 'Ωbbdbr_254', e.message
    //     # @eq ( Ωbbdbr_255 = -> db.w.get_all SQL"select * from std_sequences order by name;"          ), [ { name: 'seq:app:count', value: 100, delta: 2 }, { name: 'seq:global:rowid', value: 5, delta: 1 } ]
    //     # @eq ( Ωbbdbr_256 = -> ( db.get_first get_current_count ).count                                ), 100
    //     # @eq ( Ωbbdbr_257 = -> ( db.w.get_first get_current_count ).count                                ), 100
    //     # @eq ( Ωbbdbr_258 = -> db.std_get_next_in_sequence 'seq:app:count'                         ), 102
    //     # @eq ( Ωbbdbr_259 = -> db.std_get_next_in_sequence 'seq:app:count'                         ), 104
    //     # @eq ( Ωbbdbr_260 = -> db.std_get_next_in_sequence 'seq:app:count'                         ), 106
    //     ;null
    //   #.......................................................................................................
    //   ;null

    //---------------------------------------------------------------------------------------------------------
    dbric_std_variables_and_sequences_2: function() {
      var Bsql3, Dbric_seqs_and_vars, Dbric_std, False, SQL, True, db, esql, freeze, internals, lets, Ωbbdbr_273, Ωbbdbr_274, Ωbbdbr_275;
      ({Dbric_std, True, False, SQL, esql, internals} = SFMODULES.unstable.require_dbric());
      ({lets, freeze} = SFMODULES.require_letsfreezethat_infra().simple);
      Bsql3 = require('better-sqlite3');
      Dbric_seqs_and_vars = (function() {
        //=======================================================================================================
        class Dbric_seqs_and_vars extends Dbric_std {
          //-----------------------------------------------------------------------------------------------------
          _std_acquire_state(transients = {}) {
            whisper('Ωbbdbr_261', "_std_acquire_state");
            //...................................................................................................
            this.state.std_variables = lets(this.state.std_variables, (v) => {
              var delta, name, value, x;
              for (x of this.statements.get_variables.iterate()) {
                ({name, value, delta} = x);
                whisper('Ωbbdbr_262', {name, value, delta});
                value = JSON.parse(value);
                v[name] = {name, value, delta};
              }
              return null;
            });
            //...................................................................................................
            this.state.std_transients = lets(this.state.std_transients, function(t) {
              var name, value;
              for (name in transients) {
                value = transients[name];
                whisper('Ωbbdbr_263', {name, value});
                t[name] = {name, value};
              }
              return null;
            });
            //...................................................................................................
            return null;
          }

          //-----------------------------------------------------------------------------------------------------
          _std_persist_state() {
            var _, delta, name, ref, value;
            whisper('Ωbbdbr_264', "_std_persist_state");
            ref = this.state.std_variables;
            //...................................................................................................
            for (_ in ref) {
              ({name, value, delta} = ref[_]);
              /* TAINT clear cache in @state.std_variables ? */
              whisper('Ωbbdbr_265', {name, value, delta});
              if (delta == null) {
                delta = null;
              }
              value = JSON.stringify(value);
              this.statements.set_variable.run({name, value, delta});
            }
            //...................................................................................................
            this.state.std_transients = lets(this.state.std_transients, function(t) {
              for (name in t) {
                delete t[name];
              }
              return null;
            });
            //...................................................................................................
            return null;
          }

          //-----------------------------------------------------------------------------------------------------
          std_with_variables(transients, fn) {
            var R, arity;
            switch (arity = arguments.length) {
              case 1:
                [transients, fn] = [{}, transients];
                break;
              case 2:
                null;
                break;
              default:
                throw new Error(`Ωbbdbr_266 expected 1 or 2 arguments, got ${arity}`);
            }
            //...................................................................................................
            if (this.state.std_within_variables_context) {
              throw new Error("Ωbbdbr_267 illegal to nest `std_with_variables()` contexts");
            }
            this.state.std_within_variables_context = true;
            //...................................................................................................
            this._std_acquire_state(transients);
            try {
              R = fn();
            } finally {
              this.state.std_within_variables_context = false;
              this._std_persist_state();
            }
            return R;
          }

          //-----------------------------------------------------------------------------------------------------
          std_set_variable(name, value, delta) {
            if (!this.state.std_within_variables_context) {
              throw new Error("Ωbbdbr_268 illegal to set variable outside of `std_with_variables()` contexts");
            }
            if (Reflect.has(this.state.std_transients, name)) {
              this.state.std_transients = lets(this.state.std_transients, (t) => {
                return t[name] = {name, value};
              });
            } else {
              if (delta == null) {
                delta = null;
              }
              this.state.std_variables = lets(this.state.std_variables, (v) => {
                return v[name] = {name, value, delta};
              });
            }
            return null;
          }

          //-----------------------------------------------------------------------------------------------------
          std_get_variable(name) {
            if (!this.state.std_within_variables_context) {
              throw new Error("Ωbbdbr_269 illegal to get variable outside of `std_with_variables()` contexts");
            }
            if (Reflect.has(this.state.std_transients, name)) {
              return this.state.std_transients[name].value;
            }
            if (Reflect.has(this.state.std_variables, name)) {
              return this.state.std_variables[name].value;
            }
            throw new Error(`Ωbbdbr_270 unknown variable ${rpr(name)}`);
            return null;
          }

          //-----------------------------------------------------------------------------------------------------
          std_get_next_in_sequence(name) {
            var delta, entry;
            /* TAINT validate is called inside `std_with_variables()` context handler */
            if ((entry = this.state.std_variables[name]) == null) {
              throw new Error(`Ωbbdbr_271 unknown variable ${rpr(name)}`);
            }
            if ((delta = entry.delta) == null) {
              throw new Error(`Ωbbdbr_272 not a sequence name: ${rpr(name)}`);
            }
            entry.value += delta;
            return entry.value;
          }

          //-----------------------------------------------------------------------------------------------------
          _show_variables() {
            var all_names, c, cache_names, delta, g, i, len, name, ref, ref1, ref2, s, store, store_names, t, table, trans_names, value;
            store = Object.fromEntries((function() {
              var results, x;
              results = [];
              for (x of this.statements.get_variables.iterate()) {
                ({name, value, delta} = x);
                results.push([name, {value, delta}]);
              }
              return results;
            }).call(this));
            cache_names = new Set(Object.keys(this.state.std_variables));
            trans_names = new Set(Object.keys(this.state.std_transients));
            store_names = new Set(Object.keys(store));
            all_names = [...((cache_names.union(store_names)).union(trans_names))].sort();
            table = {};
            for (i = 0, len = all_names.length; i < len; i++) {
              name = all_names[i];
              s = (ref = store[name]) != null ? ref : {};
              c = (ref1 = this.state.std_variables[name]) != null ? ref1 : {};
              t = (ref2 = this.state.std_transients[name]) != null ? ref2 : {};
              if (this.state.std_within_variables_context) {
                g = this.std_get_variable(name);
              } else {
                g = this.std_with_variables(() => {
                  return this.std_get_variable(name);
                });
              }
              table[name] = {
                sv: s.value,
                sd: s.delta,
                cv: c.value,
                cd: c.delta,
                tv: t.value,
                gv: g.value
              };
            }
            console.table(table);
            return null;
          }

        };

        //-----------------------------------------------------------------------------------------------------
        Dbric_seqs_and_vars.statements = {
          set_variable: SQL`insert into std_variables ( name, value, delta ) values ( $name, $value, $delta ) on conflict ( name ) do update set value = $value, delta = $delta;`,
          get_variables: SQL`select name, value, delta from std_variables order by name;`
        };

        return Dbric_seqs_and_vars;

      }).call(this);
      //-------------------------------------------------------------------------------------------------------
      db = new Dbric_seqs_and_vars(':memory:', {
        db_class: Bsql3
      });
      //=======================================================================================================
      this.throws((Ωbbdbr_273 = function() {
        return db.std_with_variables(function() {
          return db.std_with_variables(function() {
            return null;
          });
        });
      }), /illegal to nest `std_with_variables\(\)` contexts/);
      this.throws((Ωbbdbr_274 = function() {
        return db.std_set_variable('myname', 'myvalue');
      }), /illegal to set variable/);
      this.throws((Ωbbdbr_275 = function() {
        return db.std_get_variable('myname');
      }), /illegal to get variable/);
      (() => {        //=======================================================================================================
        db._show_variables();
        //.....................................................................................................
        db.std_with_variables(() => {
          var Ωbbdbr_276, Ωbbdbr_279;
          this.throws((Ωbbdbr_276 = function() {
            return db.std_get_variable('myname');
          }), /unknown variable/);
          db._show_variables();
          /* TAINT use API */
          db.state.std_variables = lets(db.state.std_variables, function(d) {
            return d['seq:app:counter'] = {
              name: 'seq:app:counter',
              value: 7,
              delta: +3
            };
          });
          db._show_variables();
          info('Ωbbdbr_277', db.std_get_next_in_sequence('seq:app:counter'));
          info('Ωbbdbr_278', db.std_get_next_in_sequence('seq:app:counter'));
          db.std_set_variable('fuzz', 11.5);
          db.std_set_variable('name', 'Bob');
          this.eq((Ωbbdbr_279 = function() {
            return db.std_get_variable('name');
          }), 'Bob');
          db._show_variables();
          return null;
        });
        //.....................................................................................................
        db.std_with_variables({
          name: 'Alice',
          job: 'engineer'
        }, () => {
          var Ωbbdbr_280;
          this.eq((Ωbbdbr_280 = function() {
            return db.std_get_variable('name');
          }), 'Alice');
          // debug 'Ωbbdbr_281', { name, job, }
          db._show_variables();
          return null;
        });
        //.....................................................................................................
        db._show_variables();
        db.std_with_variables(function() {
          db._show_variables();
          return null;
        });
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
      return (new Test(guytest_cfg)).test({
        dbric_std_variables_and_sequences_2: tests.dbric_std_variables_and_sequences_2
      });
    })();
  }

  // ( new Test guytest_cfg ).test { dbric_std_variables_and_sequences: tests.dbric_std_variables_and_sequences, }
// ( new Test guytest_cfg ).test { dbric_rng: tests.dbric_rng, }
// ( new Test guytest_cfg ).test { dbric_esql: tests.dbric_esql, }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEVBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFB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VyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUs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LEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1B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RSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxJQUF2QztRQUE2QyxhQUFBLEVBQWU7TUFBNUQ7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLENBQUUsS0FBRixDQUE5QjthQUNBLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxtQ0FBQSxFQUFxQyxLQUFLLENBQUM7TUFBN0MsQ0FBOUI7SUFQc0MsQ0FBQSxJQUF4Qzs7O0VBbjBDQTs7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtZGJyaWMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxucmVtb3ZlID0gKCBwYXRoICkgLT5cbiAgdHJ5XG4gICAgRlMudW5saW5rU3luYyBwYXRoXG4gICAgaGVscCAnzqliYmRicl9fXzEnLCBcInJlbW92ZWQgI3tycHIgcGF0aH1cIlxuICBjYXRjaCBlcnJvclxuICAgIHRocm93IGVycm9yIHVubGVzcyBlcnJvci5jb2RlIGlzICdFTk9FTlQnXG4gICAgIyB1cmdlICfOqWJiZGJyX19fMicsIFwibm8gc3VjaCBGUyBvYmplY3Q6ICN7cnByIHBhdGh9XCJcbiAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2VzcWw6IC0+XG4gICAgeyBlc3FsLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIHsgTElULCBJRE4sIFZFQywgICAgICAgICAgICAgICAgICB9ID0gZXNxbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX18zID0gLT4gaW50ZXJuYWxzLnR5cGVfb2YgZXNxbC51bnF1b3RlX25hbWUgKSwgJ2Z1bmN0aW9uJ1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fNCA9IC0+IGVzcWwudW5xdW90ZV9uYW1lICdhYmMnICAgICAgICAgICAgICksICdhYmMnXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX181ID0gLT4gZXNxbC51bnF1b3RlX25hbWUgJ1wiYWJjXCInICAgICAgICAgICApLCAnYWJjJ1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fNiA9IC0+IGVzcWwudW5xdW90ZV9uYW1lICdcImFiXCJcImNcIicgICAgICAgICApLCAnYWJcImMnXG4gICAgQHRocm93cyAoIM6pYmJkYnJfX183ID0gLT4gZXNxbC51bnF1b3RlX25hbWUgJycgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgbmFtZS9cbiAgICBAdGhyb3dzICggzqliYmRicl9fXzggPSAtPiBlc3FsLnVucXVvdGVfbmFtZSAnXCInICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgbmFtZS9cbiAgICBAdGhyb3dzICggzqliYmRicl9fXzkgPSAtPiBlc3FsLnVucXVvdGVfbmFtZSAnXCJcIicgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIG5hbWUvXG4gICAgQHRocm93cyAoIM6pYmJkYnJfXzEwID0gLT4gZXNxbC51bnF1b3RlX25hbWUgZmFsc2UgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dCwgZ290IGEgYm9vbGVhbi9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xMSA9IC0+IElETiAnYWJjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdcImFiY1wiJ1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xMiA9IC0+IElETiAnQVwiYmNcIicgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ1wiQVwiXCJiY1wiXCJcIidcbiAgICBAZXEgICAgICggzqliYmRicl9fMTMgPSAtPiBMSVQgJ2FiYycgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBcIidhYmMnXCJcbiAgICBAZXEgICAgICggzqliYmRicl9fMTQgPSAtPiBMSVQgXCJBJ2JjJ1wiICAgICAgICAgICAgICAgICAgICAgICAgICksIFwiJ0EnJ2JjJycnXCJcbiAgICBAdGhyb3dzICggzqliYmRicl9fMTUgPSAtPiBWRUMgJ2FiYycgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBsaXN0L1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xNiA9IC0+IFZFQyBbICdhYmMnIF0gICAgICAgICAgICAgICAgICAgICAgICksIFwiXCJcIiggJ2FiYycgKVwiXCJcIlxuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xNyA9IC0+IFZFQyBbICdhYmMnLCAxLCB0cnVlLCBmYWxzZSwgXSAgICAgICksIFwiXCJcIiggJ2FiYycsIDEsIDEsIDAgKVwiXCJcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyByZWplY3Rfbm9uY29uZm9ybWFudF9idWlsZF9zdGF0ZW1lbnRzOiAtPlxuICAjICAgeyBEYnJpYyxcbiAgIyAgICAgU1FMLFxuICAjICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICMgICB7IHRlbXAsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3RlbXAoKVxuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgIGNsYXNzIERicmljX25vbmNvbmZvcm0gZXh0ZW5kcyBEYnJpY1xuICAjICAgICBAYnVpbGQ6IFtcbiAgIyAgICAgICBTUUxcIlwiXCJcbiAgIyAgICAgICAgIGNyZWF0ZSB0YWJsZSBub25jb25mb3JtX29uZSAoIGEgdGV4dCBwcmltYXJ5IGtleSApO1wiXCJcIlxuICAjICAgICAgIFNRTFwiXCJcIlxuICAjICAgICAgICAgLS0gdGhpcyBjb21tZW50IHNob3VsZG4ndCBiZSBoZXJlXG4gICMgICAgICAgICBjcmVhdGUgdmlldyBub25jb25mb3JtX3R3byBhcyBzZWxlY3QgKiBmcm9tIG5vbmNvbmZvcm1fb25lO1wiXCJcIlxuICAjICAgICAgIF1cbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBkYiA9IG51bGxcbiAgIyAgIEB0aHJvd3MgKCDOqWJiZGJyX18xOCA9IC0+IGRiID0gbmV3IERicmljX25vbmNvbmZvcm0gJzptZW1vcnk6JyApLCAvMSBvdXQgb2YgMiBidWlsZCBzdGF0ZW1lbnRcXChzXFwpIGNvdWxkIG5vdCBiZSBwYXJzZWQvXG4gICMgICBkZWJ1ZyAnzqliYmRicl9fMTknLCBkYi5fZ2V0X29iamVjdHNfaW5fYnVpbGRfc3RhdGVtZW50cygpXG4gICMgICByZXR1cm4gbnVsbFxuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19zdGQ6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIERicmljX3N0ZCxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICB7IHRlbXAsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3RlbXAoKVxuICAgIEJzcWwzICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYmV0dGVyLXNxbGl0ZTMnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB0ZW1wLndpdGhfZGlyZWN0b3J5IHsga2VlcDogZmFsc2UsIH0sICh7IHBhdGg6IGZvbGRlcl9wYXRoLCB9KSA9PlxuICAgICAgIyBmb2xkZXJfcGF0aCA9ICcvdG1wL2JyaWNicmFjLXRlc3QnICMgISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG4gICAgICBkYl9wYXRoID0gUEFUSC5qb2luIGZvbGRlcl9wYXRoLCAnYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHJlbW92ZSBkYl9wYXRoXG4gICAgICAjIGhlbHAgJ86pYmJkYnJfXzIwJywgeyBkYl9wYXRoLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gbmV3IERicmljIGRiX3BhdGhcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yMSA9IC0+IGRiLmlzX3JlYWR5ICksIHRydWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSAoIG5ldyBEYnJpYyBkYl9wYXRoIClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yMiA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjMgPSAtPiBkYi5fZ2V0X2RiX29iamVjdHMoKSAgICAgICAgKSwge31cbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yNCA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjUgPSAtPiBkYi5idWlsZCgpICAgICAgICAgICAgICAgICAgKSwgMFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdGVtcC53aXRoX2RpcmVjdG9yeSB7IGtlZXA6IGZhbHNlLCB9LCAoeyBwYXRoOiBmb2xkZXJfcGF0aCwgfSkgPT5cbiAgICAgICMgZm9sZGVyX3BhdGggPSAnL3RtcC9icmljYnJhYy10ZXN0JyAjICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxuICAgICAgZGJfcGF0aCA9IFBBVEguam9pbiBmb2xkZXJfcGF0aCwgJ2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICByZW1vdmUgZGJfcGF0aFxuICAgICAgIyBoZWxwICfOqWJiZGJyX18yNicsIHsgZGJfcGF0aCwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IG5ldyBEYnJpYyBkYl9wYXRoXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjcgPSAtPiBkYi5pc19yZWFkeSAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjggPSAtPiBkYi5jZmcucHJlZml4ICAgICApLCAnKE5PUFJFRklYKSdcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yOSA9IC0+IGRiLnByZWZpeCAgICAgICAgICksICcnXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzAgPSAtPiBkYi5wcmVmaXhfcmUgICAgICApLCAvfC9cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBuZXcgRGJyaWNfc3RkIGRiX3BhdGgsIHsgZGJfY2xhc3M6IEJzcWwzLCB9XG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzEgPSAtPiBkYi5pc19yZWFkeSAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzIgPSAtPiBkYi5jZmcucHJlZml4ICAgICApLCAnc3RkJ1xuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzMzID0gLT4gZGIucHJlZml4ICAgICAgICAgKSwgJ3N0ZCdcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zNCA9IC0+IGRiLnByZWZpeF9yZSAgICAgICksIC9eXz9cXHg3M3RkXy4qJC9cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSAoIG5ldyBEYnJpY19zdGQgZGJfcGF0aCwgeyBkYl9jbGFzczogQnNxbDMsIH0gKVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzM1ID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpYyAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zNiA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWNfc3RkICAgICApLCB0cnVlXG4gICAgICAgIG9iamVjdHMgPSBuZXcgU2V0ICggXCIje28udHlwZX06I3tvLm5hbWV9XCIgZm9yIF8sIG8gb2YgZGIuX2dldF9kYl9vYmplY3RzKCkgKVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzM3ID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3RhYmxlcycgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzM4ID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3ZpZXdzJyAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzM5ID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3JlbGF0aW9ucycgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzQwID0gLT4gZGIuaXNfcmVhZHkgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180MSA9IC0+IGRiLmJ1aWxkKCkgICAgICAgICAgICAgICAgICApLCAwXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gKCBuZXcgRGJyaWNfc3RkIGRiX3BhdGgsIHsgZGJfY2xhc3M6IEJzcWwzLCB9IClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180MiA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNDMgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljX3N0ZCAgICAgKSwgdHJ1ZVxuICAgICAgICBvYmplY3RzID0gbmV3IFNldCAoIFwiI3tvLnR5cGV9OiN7by5uYW1lfVwiIGZvciBfLCBvIG9mIGRiLl9nZXRfZGJfb2JqZWN0cygpIClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180NCA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF90YWJsZXMnICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180NSA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF92aWV3cycgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180NiA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF9yZWxhdGlvbnMnICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180NyA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNDggPSAtPiBkYi5idWlsZCgpICAgICAgICAgICAgICAgICAgKSwgMFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9ICggbmV3IERicmljX3N0ZCBkYl9wYXRoLCB7IGRiX2NsYXNzOiBCc3FsMywgfSApXG4gICAgICAgICggZGIucHJlcGFyZSBTUUxcImRyb3AgdmlldyBzdGRfdGFibGVzO1wiICkucnVuKClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180OSA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9ICggbmV3IERicmljX3N0ZCBkYl9wYXRoLCB7IGRiX2NsYXNzOiBCc3FsMywgfSApXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNTAgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzUxID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpY19zdGQgICAgICksIHRydWVcbiAgICAgICAgb2JqZWN0cyA9IG5ldyBTZXQgKCBcIiN7by50eXBlfToje28ubmFtZX1cIiBmb3IgXywgbyBvZiBkYi5fZ2V0X2RiX29iamVjdHMoKSApXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNTIgPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfdGFibGVzJyAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNTMgPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfdmlld3MnICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNTQgPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfcmVsYXRpb25zJyApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNTUgPSAtPiBkYi5pc19yZWFkeSAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzU2ID0gLT4gZGIuYnVpbGQoKSAgICAgICAgICAgICAgICAgICksIDBcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19zdGRfZ2VuZXJhdGVfc2VyaWVzOiAtPlxuICAgIEJzcWwzICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYmV0dGVyLXNxbGl0ZTMnXG4gICAgeyBEYnJpYyxcbiAgICAgIERicmljX3N0ZCxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICB7IHRlbXAsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3RlbXAoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBzcWxpdGU+IHNlbGVjdCAqIGZyb20gZ2VuZXJhdGVfc2VyaWVzKCAxLCAxMCwgMCApO1xuICAgICMg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXG4gICAgIyDilIIgdmFsdWUg4pSCXG4gICAgIyDilJzilIDilIDilIDilIDilIDilIDilIDilKRcbiAgICAjIOKUgiAxICAgICDilIJcbiAgICAjIOKUgiAyICAgICDilIJcbiAgICAjIOKUgiAzICAgICDilIJcbiAgICAjIOKUgiA0ICAgICDilIJcbiAgICAjIOKUgiA1ICAgICDilIJcbiAgICAjIOKUgiA2ICAgICDilIJcbiAgICAjIOKUgiA3ICAgICDilIJcbiAgICAjIOKUgiA4ICAgICDilIJcbiAgICAjIOKUgiA5ICAgICDilIJcbiAgICAjIOKUgiAxMCAgICDilIJcbiAgICAjIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmFxuICAgICMgc3FsaXRlPiBzZWxlY3QgKiBmcm9tIGdlbmVyYXRlX3NlcmllcyggMSwgMTAsIDAgKTtcbiAgICAjIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkFxuICAgICMg4pSCIHZhbHVlIOKUglxuICAgICMg4pSc4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSkXG4gICAgIyDilIIgMSAgICAg4pSCXG4gICAgIyDilIIgMiAgICAg4pSCXG4gICAgIyDilIIgMyAgICAg4pSCXG4gICAgIyDilIIgNCAgICAg4pSCXG4gICAgIyDilIIgNSAgICAg4pSCXG4gICAgIyDilIIgNiAgICAg4pSCXG4gICAgIyDilIIgNyAgICAg4pSCXG4gICAgIyDilIIgOCAgICAg4pSCXG4gICAgIyDilIIgOSAgICAg4pSCXG4gICAgIyDilIIgMTAgICAg4pSCXG4gICAgIyDilJTilIDilIDilIDilIDilIDilIDilIDilJhcbiAgICAjIHNxbGl0ZT4gc2VsZWN0ICogZnJvbSBnZW5lcmF0ZV9zZXJpZXMoIDEsIDEsIDAgKTtcbiAgICAjIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkFxuICAgICMg4pSCIHZhbHVlIOKUglxuICAgICMg4pSc4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSkXG4gICAgIyDilIIgMSAgICAg4pSCXG4gICAgIyDilJTilIDilIDilIDilIDilIDilIDilIDilJhcbiAgICAjIHNxbGl0ZT4gc2VsZWN0ICogZnJvbSBnZW5lcmF0ZV9zZXJpZXMoIDEsIDAsIDAgKTtcbiAgICAjIHNxbGl0ZT5cblxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIERiIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICAgIEBkYl9jbGFzczogQnNxbDNcbiAgICAgIGRiID0gbmV3IERiICc6bWVtb3J5OidcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzU3ID0gLT4gWyAoIHJvdy52YWx1ZSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gc3RkX2dlbmVyYXRlX3NlcmllcyggMSwgMTAsIDIgKTtcIikuLi4sICBdICksIFsgMSwgMywgNSwgNywgOSBdXG4gICAgICBAZXEgKCDOqWJiZGJyX181OCA9IC0+IFsgKCByb3cudmFsdWUgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHN0ZF9nZW5lcmF0ZV9zZXJpZXMoIDEsIDEwLCAwICk7XCIpLi4uLCAgXSApLCBbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwIF1cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzU5ID0gLT4gWyAoIHJvdy52YWx1ZSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gc3RkX2dlbmVyYXRlX3NlcmllcyggMSwgMSwgMCApO1wiKS4uLiwgICBdICksIFsgMSBdXG4gICAgICBAZXEgKCDOqWJiZGJyX182MCA9IC0+IFsgKCByb3cudmFsdWUgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHN0ZF9nZW5lcmF0ZV9zZXJpZXMoIDEsIDAsIDAgKTtcIikuLi4sICAgXSApLCBbXVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdGF0ZW1lbnRfaW5oZXJpdGFuY2U6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIERicmljX3N0ZCxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICAjIHsgdGVtcCwgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdGVtcCgpXG4gICAgIyB7IFN0YXRlbWVudFN5bmMsICAgICAgICAgICAgfSA9IHJlcXVpcmUgJ25vZGU6c3FsaXRlJ1xuICAgIEJzcWwzICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYmV0dGVyLXNxbGl0ZTMnXG4gICAgc3RhdGVtZW50X2NsYXNzICAgICAgICAgICAgICAgPSAoICggbmV3IEJzcWwzICc6bWVtb3J5OicgKS5wcmVwYXJlIFNRTFwic2VsZWN0IDEgd2hlcmUgZmFsc2U7XCIgKS5jb25zdHJ1Y3RvclxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZ2V0X2Z1bmN0aW9uX25hbWVzID0gKCBkYmEgKSAtPiBuZXcgU2V0ICggbmFtZSBmb3IgeyBuYW1lLCB9IGZyb20gXFxcbiAgICAgIGRiYS53YWxrIFNRTFwic2VsZWN0IG5hbWUgZnJvbSBwcmFnbWFfZnVuY3Rpb25fbGlzdCgpIG9yZGVyIGJ5IG5hbWU7XCIgKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZ2V0X3RhYmxlX25hbWVzID0gKCBkYmEgKSAtPiBuZXcgU2V0ICggbmFtZSBmb3IgeyBuYW1lLCB9IGZyb20gXFxcbiAgICAgIGRiYS53YWxrIFNRTFwiXCJcInNlbGVjdCBuYW1lIGZyb20gc3FsaXRlX3NjaGVtYVxuICAgICAgd2hlcmUgdHlwZSBpcyAndGFibGUnIG9yZGVyIGJ5IG5hbWU7XCJcIlwiIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGdldF92aWV3X25hbWVzID0gKCBkYmEgKSAtPiBuZXcgU2V0ICggbmFtZSBmb3IgeyBuYW1lLCB9IGZyb20gXFxcbiAgICAgIGRiYS53YWxrIFNRTFwiXCJcInNlbGVjdCBuYW1lIGZyb20gc3FsaXRlX3NjaGVtYVxuICAgICAgd2hlcmUgdHlwZSBpcyAndmlldycgb3JkZXIgYnkgbmFtZTtcIlwiXCIgKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZ2V0X3RyaWdnZXJfbmFtZXMgPSAoIGRiYSApIC0+IG5ldyBTZXQgKCBuYW1lIGZvciB7IG5hbWUsIH0gZnJvbSBcXFxuICAgICAgZGJhLndhbGsgU1FMXCJcIlwic2VsZWN0IG5hbWUgZnJvbSBzcWxpdGVfc2NoZW1hXG4gICAgICB3aGVyZSB0eXBlIGlzICd0cmlnZ2VyJyBvcmRlciBieSBuYW1lO1wiXCJcIiApXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBBIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAZGJfY2xhc3M6IEJzcWwzXG4gICAgICBAZnVuY3Rpb25zOlxuICAgICAgICBmbl9hOlxuICAgICAgICAgIHZhbHVlOiAtPiByZXR1cm4gMVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIHNlbGVjdF9hOiBTUUxcInNlbGVjdCBmbl9hKCkgYXMgb25lLCAyIGFzIHR3bztcIlxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiY3JlYXRlIHRhYmxlIHRhYmxlX2EgKCBkIHRleHQgKTtcIlxuICAgICAgICBTUUxcImNyZWF0ZSB2aWV3IHZpZXdfYSBhcyBzZWxlY3QgKiBmcm9tIHRhYmxlX2E7XCJcbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgQiBleHRlbmRzIEFcbiAgICAgIEBmdW5jdGlvbnM6XG4gICAgICAgIGZuX2I6XG4gICAgICAgICAgdmFsdWU6IC0+IHJldHVybiAxXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgc2VsZWN0X2I6IFNRTFwic2VsZWN0IGZuX2IoKSBhcyBvbmUsIDIgYXMgdHdvO1wiXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJjcmVhdGUgdGFibGUgdGFibGVfYiAoIGQgdGV4dCApO1wiXG4gICAgICAgIFNRTFwiY3JlYXRlIHZpZXcgdmlld19iIGFzIHNlbGVjdCAqIGZyb20gdGFibGVfYjtcIlxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBDX2R1cGxpY2F0ZV9mdW5jdGlvbiBleHRlbmRzIEJcbiAgICAgIEBmdW5jdGlvbnM6XG4gICAgICAgIGZuX2I6XG4gICAgICAgICAgdmFsdWU6IC0+IHJldHVybiAxXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBDX2R1cGxpY2F0ZV9zdGF0ZW1lbnQgZXh0ZW5kcyBCXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgc2VsZWN0X2I6IFNRTFwic2VsZWN0IGZuX2IoKSBhcyBvbmUsIDIgYXMgdHdvO1wiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBDX2R1cGxpY2F0ZV90YWJsZSBleHRlbmRzIEJcbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcImNyZWF0ZSB0YWJsZSB0YWJsZV9iICggZCB0ZXh0ICk7XCJcbiAgICAgICAgU1FMXCJjcmVhdGUgdmlldyB2aWV3X2IgYXMgc2VsZWN0ICogZnJvbSB0YWJsZV9iO1wiXG4gICAgICAgIF1cbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBiID0gbmV3IEIoKVxuICAgICMgZGVidWcgJ86pYmJkYnJfXzYxJywgYlxuICAgICMgZGVidWcgJ86pYmJkYnJfXzYyJywgJ2Z1bmN0aW9uczogJywgZ2V0X2Z1bmN0aW9uX25hbWVzIGJcbiAgICAjIGRlYnVnICfOqWJiZGJyX182MycsICdmdW5jdGlvbnM6ICcsICggZ2V0X2Z1bmN0aW9uX25hbWVzIGIgKS5oYXMgJ2ZuX2EnXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNjQnLCAnZnVuY3Rpb25zOiAnLCAoIGdldF9mdW5jdGlvbl9uYW1lcyBiICkuaGFzICdmbl9iJ1xuICAgICMgZGVidWcgJ86pYmJkYnJfXzY1JywgJ2Z1bmN0aW9uczogJywgKCBnZXRfZnVuY3Rpb25fbmFtZXMgYiApLmhhcyAncmVnZXhwJ1xuICAgICMgZGVidWcgJ86pYmJkYnJfXzY2JywgJ3RhYmxlczogICAgJywgZ2V0X3RhYmxlX25hbWVzIGJcbiAgICAjIGRlYnVnICfOqWJiZGJyX182NycsICd2aWV3czogICAgICcsIGdldF92aWV3X25hbWVzIGJcbiAgICAjIGRlYnVnICfOqWJiZGJyX182OCcsICd0cmlnZ2VyczogICcsIGdldF90cmlnZ2VyX25hbWVzIGJcbiAgICAjIGRlYnVnICfOqWJiZGJyX182OScsICdzdGF0ZW1lbnRzOicsICggayBmb3IgayBvZiBiLnN0YXRlbWVudHMgKVxuICAgICMgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBkYmEgPSBuZXcgRGJyaWNfc3RkICc6bWVtb3J5OicsIHsgZGJfY2xhc3M6IEJzcWwzLCB9XG4gICAgICAjIGRiYSA9IG5ldyBBKClcbiAgICAgICMgZGJhID0gbmV3IEIoKVxuICAgICAgZGJhLmRiLmZ1bmN0aW9uICd6enpfdGVzdCcsIHsgZGV0ZXJtaW5pc3RpYzogdHJ1ZSwgdmFyYXJnczogZmFsc2UsIGRpcmVjdE9ubHk6IGZhbHNlLCB9LCAtPiBcIlpaWl9URVNUXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZnVuY3Rpb25fbmFtZXMgID0gZ2V0X2Z1bmN0aW9uX25hbWVzIGRiYVxuICAgICAgdGFibGVfbmFtZXMgICAgID0gZ2V0X3RhYmxlX25hbWVzIGRiYVxuICAgICAgdmlld19uYW1lcyAgICAgID0gZ2V0X3ZpZXdfbmFtZXMgZGJhXG4gICAgICB0cmlnZ2VyX25hbWVzICAgPSBnZXRfdHJpZ2dlcl9uYW1lcyBkYmFcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fNzAgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3NjaGVtYSAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzcxID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF90YWJsZXMgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX183MiA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdmlld3MgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNzMgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3JlbGF0aW9ucyAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzc0ID0gLT4gZGJhLnN0YXRlbWVudHMuc2VsZWN0X2EgICAgICAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmRicl9fNzUgPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYiAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzc2ID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICd6enpfdGVzdCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX183NyA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAncmVnZXhwJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNzggPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX183OSA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnZm5fYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fODAgPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX184MSA9IC0+IHRhYmxlX25hbWVzLmhhcyAndGFibGVfYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzgyID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF90YWJsZXMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184MyA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdmlld3MnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODQgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3JlbGF0aW9ucycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg1ID0gLT4gdmlld19uYW1lcy5oYXMgJ3ZpZXdfYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmRicl9fODYgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGRiYSA9IG5ldyBBKClcbiAgICAgIGRiYS5kYi5mdW5jdGlvbiAnenp6X3Rlc3QnLCB7IGRldGVybWluaXN0aWM6IHRydWUsIHZhcmFyZ3M6IGZhbHNlLCBkaXJlY3RPbmx5OiBmYWxzZSwgfSwgLT4gXCJaWlpfVEVTVFwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZ1bmN0aW9uX25hbWVzICA9IGdldF9mdW5jdGlvbl9uYW1lcyBkYmFcbiAgICAgIHRhYmxlX25hbWVzICAgICA9IGdldF90YWJsZV9uYW1lcyBkYmFcbiAgICAgIHZpZXdfbmFtZXMgICAgICA9IGdldF92aWV3X25hbWVzIGRiYVxuICAgICAgdHJpZ2dlcl9uYW1lcyAgID0gZ2V0X3RyaWdnZXJfbmFtZXMgZGJhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg3ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9zY2hlbWEgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184OCA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdGFibGVzICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODkgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3ZpZXdzICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzkwID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9yZWxhdGlvbnMgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX185MSA9IC0+IGRiYS5zdGF0ZW1lbnRzLnNlbGVjdF9hICAgICAgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTIgPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYiAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzkzID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICd6enpfdGVzdCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX185NCA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAncmVnZXhwJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTUgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzk2ID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdmbl9iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX185NyA9IC0+IHRhYmxlX25hbWVzLmhhcyAndGFibGVfYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTggPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX185OSA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdGFibGVzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMDAgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3ZpZXdzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTAxID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF9yZWxhdGlvbnMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzEwMiA9IC0+IHZpZXdfbmFtZXMuaGFzICd2aWV3X2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMDMgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGRiYSA9IG5ldyBCKClcbiAgICAgIGRiYS5kYi5mdW5jdGlvbiAnenp6X3Rlc3QnLCB7IGRldGVybWluaXN0aWM6IHRydWUsIHZhcmFyZ3M6IGZhbHNlLCBkaXJlY3RPbmx5OiBmYWxzZSwgfSwgLT4gXCJaWlpfVEVTVFwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZ1bmN0aW9uX25hbWVzICA9IGdldF9mdW5jdGlvbl9uYW1lcyBkYmFcbiAgICAgIHRhYmxlX25hbWVzICAgICA9IGdldF90YWJsZV9uYW1lcyBkYmFcbiAgICAgIHZpZXdfbmFtZXMgICAgICA9IGdldF92aWV3X25hbWVzIGRiYVxuICAgICAgdHJpZ2dlcl9uYW1lcyAgID0gZ2V0X3RyaWdnZXJfbmFtZXMgZGJhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTA0ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9zY2hlbWEgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzEwNSA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdGFibGVzICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMDYgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3ZpZXdzICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTA3ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9yZWxhdGlvbnMgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzEwOCA9IC0+IGRiYS5zdGF0ZW1lbnRzLnNlbGVjdF9hICAgICAgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMDkgPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYiAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl8xMTAgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ3p6el90ZXN0JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTExID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdyZWdleHAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzExMiA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnZm5fYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMTMgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl8xMTQgPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTE1ID0gLT4gdGFibGVfbmFtZXMuaGFzICd0YWJsZV9iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzExNiA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdGFibGVzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMTcgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3ZpZXdzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTE4ID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF9yZWxhdGlvbnMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyXzExOSA9IC0+IHZpZXdfbmFtZXMuaGFzICd2aWV3X2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xMjAgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMTIxID0gLT4gbmV3IENfZHVwbGljYXRlX2Z1bmN0aW9uKCkgICAgKSwgL2EgVURGIG9yIGJ1aWx0LWluIGZ1bmN0aW9uIG5hbWVkICdmbl9iJyBoYXMgYWxyZWFkeSBiZWVuIGRlY2xhcmVkL1xuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMTIyID0gLT4gbmV3IENfZHVwbGljYXRlX3N0YXRlbWVudCgpICAgKSwgL3N0YXRlbWVudCAnc2VsZWN0X2InIGlzIGFscmVhZHkgZGVjbGFyZWQvXG4gICAgICBAdGhyb3dzICggzqliYmRicl8xMjMgPSAtPiBuZXcgQ19kdXBsaWNhdGVfdGFibGUoKSAgICAgICApLCAvdGFibGUgdGFibGVfYiBhbHJlYWR5IGV4aXN0cy9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkaXNhbGxvd19vdmVyd3JpdGluZ19wcm9wZXJ0aWVzX3dpdGhfZnVuY3Rpb25zOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgIyBkZWJ1ZyAnzqliYmRicl8xMjQnLCBuZXcgRGJyaWMgJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgZG8gPT5cbiAgICAgIGRiICAgICAgICA9ICggbmV3IERicmljICc6bWVtb3J5OicgKVxuICAgICAgZGJfcHJvdG8gID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIGRiXG4gICAgICAjIGRlYnVnICfOqWJiZGJyXzEyNScsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgZGJfcHJvdG8sICdpc19yZWFkeSdcbiAgICAgICMgZGVidWcgJ86pYmJkYnJfMTI2JywgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciBkYl9wcm90bywgJ19nZXRfaXNfcmVhZHknXG4gICAgICA7bnVsbFxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIyMjIHVzZSBkZXJpdmVkIGNsYXNzZXMgdG8gYXNzZXJ0IHRoYXQgcHJvcGVydHkgZGVzY3JpcHRvcnMgYXJlIHNlYXJjaGVkIGZvciBpbiB0aGUgcHJvdG90eXBlIGNoYWluOiAjIyNcbiAgICBjbGFzcyBEYnJpY19BIGV4dGVuZHMgRGJyaWNcbiAgICBjbGFzcyBEYnJpY19CIGV4dGVuZHMgRGJyaWNfQVxuICAgIGNsYXNzIERicmljX0MgZXh0ZW5kcyBEYnJpY19CXG4gICAgY2xhc3MgRGJyaWNfWiBleHRlbmRzIERicmljX0NcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRvID0+XG4gICAgICBjbGFzcyBEYnJpY19ub25jb25mb3JtIGV4dGVuZHMgRGJyaWNfWlxuICAgICAgICBpc19yZWFkeTogLT5cbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyXzEyNyA9IC0+IG5ldyBEYnJpY19ub25jb25mb3JtKCkgKSwgL25vdCBhbGxvd2VkIHRvIG92ZXJyaWRlIHByb3BlcnR5ICdpc19yZWFkeSc7IHVzZSAnX2dldF9pc19yZWFkeSBpbnN0ZWFkL1xuICAgICAgO251bGxcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRvID0+XG4gICAgICBjbGFzcyBEYnJpY19ub25jb25mb3JtIGV4dGVuZHMgRGJyaWNfWlxuICAgICAgICBwcmVmaXg6IC0+XG4gICAgICBAdGhyb3dzICggzqliYmRicl8xMjggPSAtPiBuZXcgRGJyaWNfbm9uY29uZm9ybSgpICksIC9ub3QgYWxsb3dlZCB0byBvdmVycmlkZSBwcm9wZXJ0eSAncHJlZml4JzsgdXNlICdfZ2V0X3ByZWZpeCBpbnN0ZWFkL1xuICAgICAgO251bGxcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRvID0+XG4gICAgICBjbGFzcyBEYnJpY19ub25jb25mb3JtIGV4dGVuZHMgRGJyaWNfWlxuICAgICAgICBwcmVmaXhfcmU6IC0+XG4gICAgICBAdGhyb3dzICggzqliYmRicl8xMjkgPSAtPiBuZXcgRGJyaWNfbm9uY29uZm9ybSgpICksIC9ub3QgYWxsb3dlZCB0byBvdmVycmlkZSBwcm9wZXJ0eSAncHJlZml4X3JlJzsgdXNlICdfZ2V0X3ByZWZpeF9yZSBpbnN0ZWFkL1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzYW1wbGVfZGI6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICAjIGRlYnVnICfOqWJiZGJyXzEzMCcsIG5ldyBEYnJpYyAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3N0b3JlIGV4dGVuZHMgRGJyaWNcbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgc3RvcmVfZmFjZXRzIChcbiAgICAgICAgICBmYWNldF9rZXkgICAgICAgICAgICAgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgZmFjZXRfdmFsdWUgICAgICAgICAgIGpzb24gKTtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgICMgc3RvcmVfY3JlYXRlX3RhYmxlczogU1FMXCJcIlwiXG4gICAgICAgICMgICBcIlwiXCJcbiAgICAgICAgc3RvcmVfaW5zZXJ0X2ZhY2V0OiBTUUxcIlwiXCJcbiAgICAgICAgICBpbnNlcnQgaW50byBzdG9yZV9mYWNldHMgKCBmYWNldF9rZXksIGZhY2V0X3ZhbHVlICkgdmFsdWVzICggJGZhY2V0X2tleSwgJGZhY2V0X3ZhbHVlIClcbiAgICAgICAgICAgIG9uIGNvbmZsaWN0ICggZmFjZXRfa2V5ICkgZG8gdXBkYXRlIHNldCBmYWNldF92YWx1ZSA9IGV4Y2x1ZGVkLmZhY2V0X3ZhbHVlO1wiXCJcIlxuICAgICAgICBzdG9yZV9nZXRfZmFjZXRzOiBTUUxcIlwiXCJcbiAgICAgICAgICBzZWxlY3QgKiBmcm9tIHN0b3JlX2ZhY2V0cyBvcmRlciBieSBmYWNldF9rZXk7XCJcIlwiXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBzdG9yZSAgICAgPSBuZXcgRGJyaWNfc3RvcmUgZGJfcGF0aFxuICAgICAgIyBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2NyZWF0ZV90YWJsZXMucnVuKClcbiAgICAgICMgZm9yIHJvdyBmcm9tIHN0b3JlLnN0YXRlbWVudHMuZ2V0X3NjaGVtYS5pdGVyYXRlKClcbiAgICAgICMgICBoZWxwICfOqWJiZGJyXzEzMScsIHJvd1xuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAnb25lJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAxICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3R3bycsICAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMiAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDMgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAnaWlpJyAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RydWUnLCAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgdHJ1ZSAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICdmYWxzZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IGZhbHNlICAgKSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjYXN0X3JvdyA9ICggcm93ICkgLT5cbiAgICAgICAgcmV0dXJuIHJvdyB1bmxlc3Mgcm93P1xuICAgICAgICByZXR1cm4geyByb3cuLi4sIGZhY2V0X3ZhbHVlOiAoIEpTT04ucGFyc2Ugcm93LmZhY2V0X3ZhbHVlICksIF92OiByb3cuZmFjZXRfdmFsdWUsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcm93cyA9IHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfZ2V0X2ZhY2V0cy5pdGVyYXRlKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTMyID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICdmYWxzZScsIGZhY2V0X3ZhbHVlOiBmYWxzZSwgX3Y6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqliYmRicl8xMzMgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ29uZScsIGZhY2V0X3ZhbHVlOiAxLCBfdjogMSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEzNCA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogJ2lpaScsIF92OiAnXCJpaWlcIicgfVxuICAgICAgQGVxICggzqliYmRicl8xMzUgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ3RydWUnLCBmYWNldF92YWx1ZTogdHJ1ZSwgX3Y6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEzNiA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAndHdvJywgZmFjZXRfdmFsdWU6IDIsIF92OiAyIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTM3ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgbnVsbCAjIyMgTk9URSBkaWZmZXJlbnQgZnJvbSBiZXR0ZXItc3FsaXRlMyBiZWxvdyAjIyNcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzYW1wbGVfZGJfd2l0aF9ic3FsOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgX0JzcWwzICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdiZXR0ZXItc3FsaXRlMydcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIEJzcWwzIGV4dGVuZHMgX0JzcWwzXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zdG9yZSBleHRlbmRzIERicmljXG4gICAgICBAZGJfY2xhc3M6IEJzcWwzXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIHN0b3JlX2ZhY2V0cyAoXG4gICAgICAgICAgZmFjZXRfa2V5ICAgICAgICAgICAgIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgIGZhY2V0X3ZhbHVlICAgICAgICAgICBqc29uICk7XCJcIlwiXG4gICAgICAgIF1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICAjIHN0b3JlX2NyZWF0ZV90YWJsZXM6IFNRTFwiXCJcIlxuICAgICAgICAjICAgXCJcIlwiXG4gICAgICAgIHN0b3JlX2luc2VydF9mYWNldDogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8gc3RvcmVfZmFjZXRzICggZmFjZXRfa2V5LCBmYWNldF92YWx1ZSApIHZhbHVlcyAoICRmYWNldF9rZXksICRmYWNldF92YWx1ZSApXG4gICAgICAgICAgICBvbiBjb25mbGljdCAoIGZhY2V0X2tleSApIGRvIHVwZGF0ZSBzZXQgZmFjZXRfdmFsdWUgPSBleGNsdWRlZC5mYWNldF92YWx1ZTtcIlwiXCJcbiAgICAgICAgc3RvcmVfZ2V0X2ZhY2V0czogU1FMXCJcIlwiXG4gICAgICAgICAgc2VsZWN0ICogZnJvbSBzdG9yZV9mYWNldHMgb3JkZXIgYnkgZmFjZXRfa2V5O1wiXCJcIlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3RvcmUgICAgID0gbmV3IERicmljX3N0b3JlIGRiX3BhdGhcbiAgICAgICMgZGVidWcgJ86pYmJkYnJfMTM4Jywgc3RvcmVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTM5ID0gLT4gc3RvcmUuZGIgaW5zdGFuY2VvZiBCc3FsMyAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8xNDAgPSAtPiBzdG9yZS5kYiBpbnN0YW5jZW9mIF9Cc3FsMyAgICApLCB0cnVlXG4gICAgICAjIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfY3JlYXRlX3RhYmxlcy5ydW4oKVxuICAgICAgIyBmb3Igcm93IGZyb20gc3RvcmUuc3RhdGVtZW50cy5nZXRfc2NoZW1hLml0ZXJhdGUoKVxuICAgICAgIyAgIGhlbHAgJ86pYmJkYnJfMTQxJywgcm93XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICdvbmUnLCAgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDEgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndHdvJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAyICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMyAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5ICdpaWknICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndHJ1ZScsICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSB0cnVlICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ2ZhbHNlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgZmFsc2UgICApLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGNhc3Rfcm93ID0gKCByb3cgKSAtPlxuICAgICAgICByZXR1cm4gcm93IHVubGVzcyByb3c/XG4gICAgICAgIHJldHVybiB7IHJvdy4uLiwgZmFjZXRfdmFsdWU6ICggSlNPTi5wYXJzZSByb3cuZmFjZXRfdmFsdWUgKSwgX3Y6IHJvdy5mYWNldF92YWx1ZSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByb3dzID0gc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9nZXRfZmFjZXRzLml0ZXJhdGUoKVxuICAgICAgQGVxICggzqliYmRicl8xNDIgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ2ZhbHNlJywgZmFjZXRfdmFsdWU6IGZhbHNlLCBfdjogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0MyA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAnb25lJywgZmFjZXRfdmFsdWU6IDEsIF92OiAxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQ0ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAnaWlpJywgX3Y6ICdcImlpaVwiJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0NSA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAndHJ1ZScsIGZhY2V0X3ZhbHVlOiB0cnVlLCBfdjogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQ2ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICd0d28nLCBmYWNldF92YWx1ZTogMiwgX3Y6IDIgfVxuICAgICAgQGVxICggzqliYmRicl8xNDcgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB1bmRlZmluZWRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfZnVuY3Rpb25zX3dpdGhfbnNxbDogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIEJzcWwzICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYmV0dGVyLXNxbGl0ZTMnXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zcXVhcmVzIGV4dGVuZHMgRGJyaWNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBudW1iZXJzIChcbiAgICAgICAgICAgIG4gbnVtYmVyIHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1wiXCJcIlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdmlldyBzcXVhcmVzIGFzIHNlbGVjdFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHNxdWFyZSggbiApIGFzIHNxdWFyZVxuICAgICAgICAgIGZyb20gbnVtYmVyc1xuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAgIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIGluc2VydF9udW1iZXI6IFNRTFwiXCJcImluc2VydCBpbnRvIG51bWJlcnMgKCBuICkgdmFsdWVzICggJG4gKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggbiApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgIHNlbGVjdF9mcm9tX3NxdWFyZXM6IFNRTFwiXCJcInNlbGVjdFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHNxdWFyZVxuICAgICAgICAgIGZyb20gc3F1YXJlc1xuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGluaXRpYWxpemU6IC0+XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgQGNyZWF0ZV9mdW5jdGlvblxuICAgICAgICAgIG5hbWU6ICAgICAgICAgICAnc3F1YXJlJ1xuICAgICAgICAgIGRldGVybWluaXN0aWM6ICB0cnVlXG4gICAgICAgICAgdmFyYXJnczogICAgICAgIGZhbHNlXG4gICAgICAgICAgdmFsdWU6ICAgICAgICAgICAoIG4gKSAtPiBuICoqIDJcbiAgICAgICAgO251bGxcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHNxdWFyZXMgICA9IG5ldyBEYnJpY19zcXVhcmVzIGRiX3BhdGhcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQ4ID0gLT4gc3F1YXJlcy5kYiBpbnN0YW5jZW9mIEJzcWwzICAgICApLCBmYWxzZVxuICAgICAgZm9yIG4gaW4gWyAwIC4uLiAxMCBdXG4gICAgICAgIHNxdWFyZXMuc3RhdGVtZW50cy5pbnNlcnRfbnVtYmVyLnJ1biB7IG4sIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE0OScsIHJvdyBmb3Igcm93IGZyb20gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICByb3dzID0gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICBAZXEgKCDOqWJiZGJyXzE1MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMCwgc3F1YXJlOiAwIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTUxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAxLCBzcXVhcmU6IDEgfVxuICAgICAgQGVxICggzqliYmRicl8xNTIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDIsIHNxdWFyZTogNCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMywgc3F1YXJlOiA5IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA0LCBzcXVhcmU6IDE2IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA1LCBzcXVhcmU6IDI1IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA2LCBzcXVhcmU6IDM2IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA3LCBzcXVhcmU6IDQ5IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA4LCBzcXVhcmU6IDY0IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA5LCBzcXVhcmU6IDgxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTYwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfYWdncmVnYXRlc193aXRoX25zcWw6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICBCc3FsMyAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2JldHRlci1zcWxpdGUzJ1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3F1YXJlcyBleHRlbmRzIERicmljXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgbnVtYmVycyAoXG4gICAgICAgICAgICBuIG51bWJlciB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHZpZXcgc3F1YXJlcyBhcyBzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUoIG4gKSBhcyBzcXVhcmVcbiAgICAgICAgICBmcm9tIG51bWJlcnNcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfbnVtYmVyOiBTUUxcIlwiXCJpbnNlcnQgaW50byBudW1iZXJzICggbiApIHZhbHVlcyAoICRuIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIG4gKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9udW1iZXJzOiBTUUxcIlwiXCJzZWxlY3QgbiBmcm9tIG51bWJlcnMgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fc3F1YXJlczogU1FMXCJcIlwic2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlLFxuICAgICAgICAgICAgcHJvZHVjdCggbiApICAgICAgYXMgcF9uLFxuICAgICAgICAgICAgcHJvZHVjdCggc3F1YXJlICkgYXMgcF9zcXVhcmVcbiAgICAgICAgICBmcm9tIHNxdWFyZXNcbiAgICAgICAgICB3aGVyZSBuIGJldHdlZW4gJHN0YXJ0IGFuZCAkc3RvcFxuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGluaXRpYWxpemU6IC0+XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgQGNyZWF0ZV9mdW5jdGlvblxuICAgICAgICAgIG5hbWU6ICAgICAgICAgICAnc3F1YXJlJ1xuICAgICAgICAgIGRldGVybWluaXN0aWM6ICB0cnVlXG4gICAgICAgICAgdmFyYXJnczogICAgICAgIGZhbHNlXG4gICAgICAgICAgdmFsdWU6ICAgICAgICAgICAoIG4gKSAtPiBuICoqIDJcbiAgICAgICAgQGNyZWF0ZV9hZ2dyZWdhdGVfZnVuY3Rpb25cbiAgICAgICAgICBuYW1lOiAgICAgICAgICAgJ3Byb2R1Y3QnXG4gICAgICAgICAgc3RhcnQ6ICAgICAgICAgIC0+IDEgIyMjIE5PVEUgY2FuIHVzZSBgbnVsbGAgZm9yIGJTUUwsIGJ1dCBuU1FMIG5lZWRzIGAxYCAjIyNcbiAgICAgICAgICBzdGVwOiAgICAgICAgICAgcHJvZHVjdCA9ICggdG90YWwsIGVsZW1lbnQgKSAtPlxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqliYmRicl8xNjEnLCB7IHRvdGFsLCBlbGVtZW50LCB9XG4gICAgICAgICAgICByZXR1cm4gKCB0b3RhbCA/IDEgKSAqIGVsZW1lbnRcbiAgICAgICAgO251bGxcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLXVkZl9hZ2dyZWdhdGVzX3dpdGhfbnNxbC5zcWxpdGUnXG4gICAgICBzcXVhcmVzICAgPSBuZXcgRGJyaWNfc3F1YXJlcyBkYl9wYXRoXG4gICAgICBAZXEgKCDOqWJiZGJyXzE2MiA9IC0+IHNxdWFyZXMuZGIgaW5zdGFuY2VvZiBCc3FsMyAgICAgKSwgZmFsc2VcbiAgICAgIGZvciBuIGluIFsgMCAuLi4gMTAgXVxuICAgICAgICBzcXVhcmVzLnN0YXRlbWVudHMuaW5zZXJ0X251bWJlci5ydW4geyBuLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xNjMnLCByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMSwgc3RvcDogNSwgfVxuICAgICAgcm93cyA9IHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMSwgc3RvcDogNSwgfVxuICAgICAgQGVxICggzqliYmRicl8xNjQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDEsIHNxdWFyZTogMSwgcF9uOiAxMjAsIHBfc3F1YXJlOiAxNDQwMCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE2NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE2NicsIHJvdyBmb3Igcm93IGZyb20gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICByb3dzID0gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICBAZXEgKCDOqWJiZGJyXzE2NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogbnVsbCwgc3F1YXJlOiBudWxsLCBwX246IDEsIHBfc3F1YXJlOiAxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTY4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVkZl9mdW5jdGlvbnNfd2l0aF9ic3FsOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgQnNxbDMgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdiZXR0ZXItc3FsaXRlMydcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3NxdWFyZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgQGRiX2NsYXNzOiBCc3FsM1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIG51bWJlcnMgKFxuICAgICAgICAgICAgbiBudW1iZXIgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IHNxdWFyZXMgYXMgc2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlKCBuICkgYXMgc3F1YXJlXG4gICAgICAgICAgZnJvbSBudW1iZXJzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgaW5zZXJ0X251bWJlcjogU1FMXCJcIlwiaW5zZXJ0IGludG8gbnVtYmVycyAoIG4gKSB2YWx1ZXMgKCAkbiApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBuICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fc3F1YXJlczogU1FMXCJcIlwic2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgZnJvbSBzcXVhcmVzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAY3JlYXRlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAgICdzcXVhcmUnXG4gICAgICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgICAgICB2YWx1ZTogICAgICAgICAgICggbiApIC0+IG4gKiogMlxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3F1YXJlcyAgID0gbmV3IERicmljX3NxdWFyZXMgZGJfcGF0aFxuICAgICAgQGVxICggzqliYmRicl8xNjkgPSAtPiBzcXVhcmVzLmRiIGluc3RhbmNlb2YgQnNxbDMgICAgICksIHRydWVcbiAgICAgIGZvciBuIGluIFsgMCAuLi4gMTAgXVxuICAgICAgICBzcXVhcmVzLnN0YXRlbWVudHMuaW5zZXJ0X251bWJlci5ydW4geyBuLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUoKVxuICAgICAgcm93cyA9IHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUoKVxuICAgICAgQGVxICggzqliYmRicl8xNzAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDAsIHNxdWFyZTogMCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMSwgc3F1YXJlOiAxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTcyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAyLCBzcXVhcmU6IDQgfVxuICAgICAgQGVxICggzqliYmRicl8xNzMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDMsIHNxdWFyZTogOSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNCwgc3F1YXJlOiAxNiB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNSwgc3F1YXJlOiAyNSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNiwgc3F1YXJlOiAzNiB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNywgc3F1YXJlOiA0OSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogOCwgc3F1YXJlOiA2NCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogOSwgc3F1YXJlOiA4MSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfYWdncmVnYXRlc193aXRoX2JzcWw6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICBCc3FsMyAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2JldHRlci1zcWxpdGUzJ1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3F1YXJlcyBleHRlbmRzIERicmljXG4gICAgICBAZGJfY2xhc3M6IEJzcWwzXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgbnVtYmVycyAoXG4gICAgICAgICAgICBuIG51bWJlciB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHZpZXcgc3F1YXJlcyBhcyBzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUoIG4gKSBhcyBzcXVhcmVcbiAgICAgICAgICBmcm9tIG51bWJlcnNcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfbnVtYmVyOiBTUUxcIlwiXCJpbnNlcnQgaW50byBudW1iZXJzICggbiApIHZhbHVlcyAoICRuIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIG4gKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9zcXVhcmVzOiBTUUxcIlwiXCJzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUsXG4gICAgICAgICAgICBwcm9kdWN0KCBuICkgICAgICBhcyBwX24sXG4gICAgICAgICAgICBwcm9kdWN0KCBzcXVhcmUgKSBhcyBwX3NxdWFyZVxuICAgICAgICAgIGZyb20gc3F1YXJlc1xuICAgICAgICAgIHdoZXJlIG4gYmV0d2VlbiAkc3RhcnQgYW5kICRzdG9wXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAY3JlYXRlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAgICdzcXVhcmUnXG4gICAgICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgICAgICB2YWx1ZTogICAgICAgICAgIHNxdWFyZSA9ICggbiApIC0+IG4gKiogMlxuICAgICAgICBAY3JlYXRlX2FnZ3JlZ2F0ZV9mdW5jdGlvblxuICAgICAgICAgIG5hbWU6ICAgICAgICAgICAncHJvZHVjdCdcbiAgICAgICAgICBzdGFydDogICAgICAgICAgLT4gbnVsbFxuICAgICAgICAgIHN0ZXA6ICAgICAgICAgICBwcm9kdWN0ID0gKCB0b3RhbCwgZWxlbWVudCApIC0+XG4gICAgICAgICAgICAjIGRlYnVnICfOqWJiZGJyXzE4MScsIHsgdG90YWwsIGVsZW1lbnQsIH1cbiAgICAgICAgICAgIHJldHVybiAoIHRvdGFsID8gMSApICogZWxlbWVudFxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3F1YXJlcyAgID0gbmV3IERicmljX3NxdWFyZXMgZGJfcGF0aFxuICAgICAgQGVxICggzqliYmRicl8xODIgPSAtPiBzcXVhcmVzLmRiIGluc3RhbmNlb2YgQnNxbDMgICAgICksIHRydWVcbiAgICAgIGZvciBuIGluIFsgMCAuLi4gMTAgXVxuICAgICAgICBzcXVhcmVzLnN0YXRlbWVudHMuaW5zZXJ0X251bWJlci5ydW4geyBuLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xODMnLCByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMiwgc3RvcDogMywgfVxuICAgICAgcm93cyA9IHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMiwgc3RvcDogMywgfVxuICAgICAgQGVxICggzqliYmRicl8xODQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDIsIHNxdWFyZTogNCwgcF9uOiA2LCBwX3NxdWFyZTogMzYgfVxuICAgICAgQGVxICggzqliYmRicl8xODUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB1bmRlZmluZWRcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdWRmX3RhYmxlX2Z1bmN0aW9uX3dpdGhfYnNxbDogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIEJzcWwzICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYmV0dGVyLXNxbGl0ZTMnXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19waHJhc2VzIGV4dGVuZHMgRGJyaWNcbiAgICAgIEBkYl9jbGFzczogQnNxbDNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBwaHJhc2VzIChcbiAgICAgICAgICAgIHBocmFzZSB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfcGhyYXNlOiBTUUxcIlwiXCJpbnNlcnQgaW50byBwaHJhc2VzICggcGhyYXNlICkgdmFsdWVzICggJHBocmFzZSApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBwaHJhc2UgKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9waHJhc2VzOiBTUUxcIlwiXCJcbiAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgZnJvbVxuICAgICAgICAgICAgICBwaHJhc2VzIGFzIHAsXG4gICAgICAgICAgICAgIHJlX21hdGNoZXMoIHAucGhyYXNlLCAkbWF0Y2hlciApIGFzIHJ4XG4gICAgICAgICAgICBvcmRlciBieSBwLnBocmFzZTtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAY3JlYXRlX3RhYmxlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAncmVfbWF0Y2hlcydcbiAgICAgICAgICBjb2x1bW5zOiAgICAgIFsgJ21hdGNoJywgJ2NhcHR1cmUnLCBdXG4gICAgICAgICAgcGFyYW1ldGVyczogICBbICd0ZXh0JywgJ3BhdHRlcm4nLCBdXG4gICAgICAgICAgcm93czogKCB0ZXh0LCBwYXR0ZXJuICkgLT5cbiAgICAgICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cCBwYXR0ZXJuLCAnZydcbiAgICAgICAgICAgIGZvciBtYXRjaCBmcm9tIHRleHQubWF0Y2hBbGwgcmVnZXhcbiAgICAgICAgICAgICAgeWllbGQgWyBtYXRjaFsgMCBdLCBtYXRjaFsgMSBdLCBdXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgcGhyYXNlcyAgID0gbmV3IERicmljX3BocmFzZXMgZGJfcGF0aFxuICAgICAgQGVxICggzqliYmRicl8xODYgPSAtPiBwaHJhc2VzLmRiIGluc3RhbmNlb2YgQnNxbDMgICAgICksIHRydWVcbiAgICAgIGZvciBwaHJhc2UgaW4gWyAnZWxldmVuJywgJ2ZpdmUnLCAnbmluZScsICdvbmUnLCAnb25lIHBvaW50IGZpdmUnLCAnc2V2ZW4nLCAndGhyZWUgcG9pbnQgb25lJyBdXG4gICAgICAgIHBocmFzZXMuc3RhdGVtZW50cy5pbnNlcnRfcGhyYXNlLnJ1biB7IHBocmFzZSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTg3Jywgcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fcGhyYXNlcy5pdGVyYXRlIHsgbWF0Y2hlcjogJ14uKihbYWVpb3VdLmUpLiokJywgfVxuICAgICAgIyBlY2hvKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE4OCcsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3BocmFzZXMuaXRlcmF0ZSB7IG1hdGNoZXI6ICcoW15hZWlvdV0/W2FlaW91XSspKD89W21udl0pJywgfVxuICAgICAgcm93cyA9IHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9waHJhc2VzLml0ZXJhdGUgeyBtYXRjaGVyOiAnKFteYWVpb3VdP1thZWlvdV0rKSg/PVttbnZdKScsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTg5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdlbGV2ZW4nLCBtYXRjaDogJ2xlJywgY2FwdHVyZTogJ2xlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE5MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnZWxldmVuJywgbWF0Y2g6ICd2ZScsIGNhcHR1cmU6ICd2ZScgfVxuICAgICAgQGVxICggzqliYmRicl8xOTEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ2ZpdmUnLCBtYXRjaDogJ2ZpJywgY2FwdHVyZTogJ2ZpJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE5MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnbmluZScsIG1hdGNoOiAnbmknLCBjYXB0dXJlOiAnbmknIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTkzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdvbmUnLCBtYXRjaDogJ28nLCBjYXB0dXJlOiAnbycgfVxuICAgICAgQGVxICggzqliYmRicl8xOTQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ29uZSBwb2ludCBmaXZlJywgbWF0Y2g6ICdvJywgY2FwdHVyZTogJ28nIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTk1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdvbmUgcG9pbnQgZml2ZScsIG1hdGNoOiAncG9pJywgY2FwdHVyZTogJ3BvaScgfVxuICAgICAgQGVxICggzqliYmRicl8xOTYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ29uZSBwb2ludCBmaXZlJywgbWF0Y2g6ICdmaScsIGNhcHR1cmU6ICdmaScgfVxuICAgICAgQGVxICggzqliYmRicl8xOTcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ3NldmVuJywgbWF0Y2g6ICdzZScsIGNhcHR1cmU6ICdzZScgfVxuICAgICAgQGVxICggzqliYmRicl8xOTggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ3NldmVuJywgbWF0Y2g6ICd2ZScsIGNhcHR1cmU6ICd2ZScgfVxuICAgICAgQGVxICggzqliYmRicl8xOTkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ3RocmVlIHBvaW50IG9uZScsIG1hdGNoOiAncG9pJywgY2FwdHVyZTogJ3BvaScgfVxuICAgICAgQGVxICggzqliYmRicl8yMDAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ3RocmVlIHBvaW50IG9uZScsIG1hdGNoOiAnIG8nLCBjYXB0dXJlOiAnIG8nIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjAxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgdW5kZWZpbmVkXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZpbGVfbWlycm9yX2FzX3RhYmxlX2Z1bmN0aW9uOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgQnNxbDMgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdiZXR0ZXItc3FsaXRlMydcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3BocmFzZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgQGRiX2NsYXNzOiBCc3FsM1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgZGF0YXNvdXJjZXMgKFxuICAgICAgICAgICAgZHNrZXkgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgICBwYXRoIHRleHQgbm90IG51bGwgKTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdmlldyBtaXJyb3IgYXMgc2VsZWN0XG4gICAgICAgICAgICAqXG4gICAgICAgICAgZnJvbVxuICAgICAgICAgICAgZGF0YXNvdXJjZXMgYXMgZHMsXG4gICAgICAgICAgICBmaWxlX2xpbmVzKCBkcy5wYXRoICkgYXMgZmxcbiAgICAgICAgICBvcmRlciBieSBkcy5kc2tleSwgZmwubGluZV9ucjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUga2V5d29yZHMgKFxuICAgICAgICAgICAgZHNrZXkgICB0ZXh0ICAgIG5vdCBudWxsLFxuICAgICAgICAgICAgbGluZV9uciBpbnRlZ2VyIG5vdCBudWxsLFxuICAgICAgICAgICAga2V5d29yZCB0ZXh0ICAgIG5vdCBudWxsLFxuICAgICAgICAgIGZvcmVpZ24ga2V5ICggZHNrZXkgKSByZWZlcmVuY2VzIGRhdGFzb3VyY2VzICggZHNrZXkgKSxcbiAgICAgICAgICBwcmltYXJ5IGtleSAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgKTtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfZGF0YXNvdXJjZTogU1FMXCJcIlwiaW5zZXJ0IGludG8gZGF0YXNvdXJjZXMgKCBkc2tleSwgcGF0aCApIHZhbHVlcyAoICRkc2tleSwgJHBhdGggKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggZHNrZXkgKSBkbyB1cGRhdGUgc2V0IHBhdGggPSAkcGF0aDtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfa2V5d29yZDogU1FMXCJcIlwiaW5zZXJ0IGludG8ga2V5d29yZHMgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApIHZhbHVlcyAoICRkc2tleSwgJGxpbmVfbnIsICRrZXl3b3JkIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9kYXRhc291cmNlczogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBkYXRhc291cmNlcyBvcmRlciBieSBkc2tleTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9rZXl3b3JkczogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBrZXl3b3JkcyBvcmRlciBieSBrZXl3b3JkLCBkc2tleSwgbGluZV9ucjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9taXJyb3I6IFNRTFwiXCJcInNlbGVjdCAqIGZyb20gbWlycm9yIG9yZGVyIGJ5IGRza2V5O1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpbml0aWFsaXplOiAtPlxuICAgICAgICBzdXBlcigpXG4gICAgICAgIEBjcmVhdGVfdGFibGVfZnVuY3Rpb25cbiAgICAgICAgICBuYW1lOiAgICAgICAgICdmaWxlX2xpbmVzJ1xuICAgICAgICAgIGNvbHVtbnM6ICAgICAgWyAnbGluZV9ucicsICdsaW5lJywgXVxuICAgICAgICAgIHBhcmFtZXRlcnM6ICAgWyAncGF0aCcsIF1cbiAgICAgICAgICByb3dzOiAoIHBhdGggKSAtPlxuICAgICAgICAgICAgZm9yIHsgbG5yOiBsaW5lX25yLCBsaW5lLCBlb2wsIH0gZnJvbSBHVVkuZnMud2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoXG4gICAgICAgICAgICAgIHlpZWxkIHsgbGluZV9uciwgbGluZSwgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgO251bGxcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHBocmFzZXMgICA9IG5ldyBEYnJpY19waHJhc2VzIGRiX3BhdGhcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjAyID0gLT4gKCBwaHJhc2VzLnByZXBhcmUgU1FMXCJcIlwicHJhZ21hIGZvcmVpZ25fa2V5c1wiXCJcIiApLmdldCgpICksIHsgZm9yZWlnbl9rZXlzOiAxLCAgICAgIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjAzID0gLT4gKCBwaHJhc2VzLnByZXBhcmUgU1FMXCJcIlwicHJhZ21hIGpvdXJuYWxfbW9kZVwiXCJcIiApLmdldCgpICksIHsgam91cm5hbF9tb2RlOiAnd2FsJywgIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjA0ID0gLT4gcGhyYXNlcy5kYiBpbnN0YW5jZW9mIEJzcWwzICAgICApLCB0cnVlXG4gICAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBkbyA9PlxuICAgICAgIyAgIGRza2V5ID0gJ3JlYWRtZSdcbiAgICAgICMgICBwYXRoICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvUkVBRE1FLm1kJ1xuICAgICAgIyAgIHBocmFzZXMuc3RhdGVtZW50cy5pbnNlcnRfZGF0YXNvdXJjZS5ydW4geyBkc2tleSwgcGF0aCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRza2V5ID0gJ3BhY2thZ2UtanNvbidcbiAgICAgICAgcGF0aCAgPSBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL3BhY2thZ2UuanNvbidcbiAgICAgICAgcGhyYXNlcy5zdGF0ZW1lbnRzLmluc2VydF9kYXRhc291cmNlLnJ1biB7IGRza2V5LCBwYXRoIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzIwNScsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX2RhdGFzb3VyY2VzLml0ZXJhdGUoKVxuICAgICAgIyBlY2hvKClcbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMjA2Jywgcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fbWlycm9yLml0ZXJhdGUoKVxuICAgICAgIyBlY2hvKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZm9yIHsgZHNrZXksIGxpbmVfbnIsIGxpbmUsIH0gZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fbWlycm9yLml0ZXJhdGUoKVxuICAgICAgICBrZXl3b3JkcyA9IGxpbmUuc3BsaXQgLyg/OlxccHtafSspfCgoPzpcXHB7TH0rKXwoPzpcXHB7Tn0rKXwoPzpcXHB7U30rKSkvdlxuICAgICAgICAjIGRlYnVnICfOqWJiZGJyXzIwNycsIGxpbmVfbnIsIHJwciBrZXl3b3Jkc1xuICAgICAgICBmb3Iga2V5d29yZCBpbiBrZXl3b3Jkc1xuICAgICAgICAgIGNvbnRpbnVlIHVubGVzcyBrZXl3b3JkP1xuICAgICAgICAgIGNvbnRpbnVlIGlmIGtleXdvcmQgaXMgJydcbiAgICAgICAgICBwaHJhc2VzLncuc3RhdGVtZW50cy5pbnNlcnRfa2V5d29yZC5ydW4geyBkc2tleSwgbGluZV9uciwga2V5d29yZCwgfVxuICAgICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8yMDgnLCByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9rZXl3b3Jkcy5pdGVyYXRlKClcbiAgICAgICMgZWNobygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZmlsZV9taXJyb3Jfd2l0aF9pbnRlZ3JhdGVkX2luc2VydHM6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICBCc3FsMyAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2JldHRlci1zcWxpdGUzJ1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfcGhyYXNlcyBleHRlbmRzIERicmljXG4gICAgICBAZGJfY2xhc3M6IEJzcWwzXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBkYXRhc291cmNlcyAoXG4gICAgICAgICAgICBkc2tleSB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICAgIHBhdGggdGV4dCBub3QgbnVsbCApO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IG1pcnJvciBhcyBzZWxlY3RcbiAgICAgICAgICAgICpcbiAgICAgICAgICBmcm9tXG4gICAgICAgICAgICBkYXRhc291cmNlcyBhcyBkcyxcbiAgICAgICAgICAgIGZpbGVfbGluZXMoIGRzLnBhdGggKSBhcyBmbFxuICAgICAgICAgIG9yZGVyIGJ5IGRzLmRza2V5LCBmbC5saW5lX25yO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBrZXl3b3JkcyAoXG4gICAgICAgICAgICBkc2tleSAgIHRleHQgICAgbm90IG51bGwsXG4gICAgICAgICAgICBsaW5lX25yIGludGVnZXIgbm90IG51bGwsXG4gICAgICAgICAgICBrZXl3b3JkIHRleHQgICAgbm90IG51bGwsXG4gICAgICAgICAgZm9yZWlnbiBrZXkgKCBkc2tleSApIHJlZmVyZW5jZXMgZGF0YXNvdXJjZXMgKCBkc2tleSApLFxuICAgICAgICAgIHByaW1hcnkga2V5ICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKSApO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGluc2VydF9kYXRhc291cmNlOiBTUUxcIlwiXCJpbnNlcnQgaW50byBkYXRhc291cmNlcyAoIGRza2V5LCBwYXRoICkgdmFsdWVzICggJGRza2V5LCAkcGF0aCApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBkc2tleSApIGRvIHVwZGF0ZSBzZXQgcGF0aCA9ICRwYXRoO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGluc2VydF9rZXl3b3JkOiBTUUxcIlwiXCJpbnNlcnQgaW50byBrZXl3b3JkcyAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgdmFsdWVzICggJGRza2V5LCAkbGluZV9uciwgJGtleXdvcmQgKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNlbGVjdF9mcm9tX2RhdGFzb3VyY2VzOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIGRhdGFzb3VyY2VzIG9yZGVyIGJ5IGRza2V5O1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNlbGVjdF9mcm9tX2tleXdvcmRzOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIGtleXdvcmRzIG9yZGVyIGJ5IGtleXdvcmQsIGRza2V5LCBsaW5lX25yO1wiXCJcIlxuICAgICAgICBsb2NhdGlvbnNfZnJvbV9rZXl3b3JkOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIGtleXdvcmRzXG4gICAgICAgICAgd2hlcmUga2V5d29yZCA9ICRrZXl3b3JkXG4gICAgICAgICAgb3JkZXIgYnkga2V5d29yZCwgZHNrZXksIGxpbmVfbnI7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc2VsZWN0X2Zyb21fbWlycm9yOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIG1pcnJvciBvcmRlciBieSBkc2tleTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBwb3B1bGF0ZV9rZXl3b3JkczogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8ga2V5d29yZHMgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApXG4gICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgZHMuZHNrZXkgICAgYXMgZHNrZXksXG4gICAgICAgICAgICAgIG1pLmxpbmVfbnIgIGFzIGxpbmVfbnIsXG4gICAgICAgICAgICAgIHN3LmtleXdvcmQgIGFzIGtleXdvcmRcbiAgICAgICAgICAgIGZyb20gZGF0YXNvdXJjZXMgICAgICAgIGFzIGRzXG4gICAgICAgICAgICBqb2luIG1pcnJvciAgICAgICAgICAgICBhcyBtaSB1c2luZyAoIGRza2V5ICksXG4gICAgICAgICAgICBzcGxpdF93b3JkcyggbWkubGluZSApICBhcyBzd1xuICAgICAgICAgICAgd2hlcmUgdHJ1ZSAtLSB3aGVyZSBjbGF1c2UganVzdCBhIHN5bnRhY3RpYyBndWFyZCBhcyBwZXIgaHR0cHM6Ly9zcWxpdGUub3JnL2xhbmdfdXBzZXJ0Lmh0bWxcbiAgICAgICAgICAgIG9uIGNvbmZsaWN0IGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGluaXRpYWxpemU6IC0+XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAY3JlYXRlX3RhYmxlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAgICdzcGxpdF93b3JkcydcbiAgICAgICAgICBjb2x1bW5zOiAgICAgICAgWyAna2V5d29yZCcsIF1cbiAgICAgICAgICBwYXJhbWV0ZXJzOiAgICAgWyAnbGluZScsIF1cbiAgICAgICAgICByb3dzOiAoIGxpbmUgKSAtPlxuICAgICAgICAgICAga2V5d29yZHMgPSBsaW5lLnNwbGl0IC8oPzpcXHB7Wn0rKXwoKD86XFxwe0x9Kyl8KD86XFxwe059Kyl8KD86XFxwe1N9KykpL3ZcbiAgICAgICAgICAgICMgZGVidWcgJ86pYmJkYnJfMjA5JywgbGluZV9uciwgcnByIGtleXdvcmRzXG4gICAgICAgICAgICBmb3Iga2V5d29yZCBpbiBrZXl3b3Jkc1xuICAgICAgICAgICAgICBjb250aW51ZSB1bmxlc3Mga2V5d29yZD9cbiAgICAgICAgICAgICAgY29udGludWUgaWYga2V5d29yZCBpcyAnJ1xuICAgICAgICAgICAgICB5aWVsZCB7IGtleXdvcmQsIH1cbiAgICAgICAgICAgIDtudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGNyZWF0ZV90YWJsZV9mdW5jdGlvblxuICAgICAgICAgIG5hbWU6ICAgICAgICAgJ2ZpbGVfbGluZXMnXG4gICAgICAgICAgY29sdW1uczogICAgICBbICdsaW5lX25yJywgJ2xpbmUnLCBdXG4gICAgICAgICAgcGFyYW1ldGVyczogICBbICdwYXRoJywgXVxuICAgICAgICAgIHJvd3M6ICggcGF0aCApIC0+XG4gICAgICAgICAgICBmb3IgeyBsbnI6IGxpbmVfbnIsIGxpbmUsIGVvbCwgfSBmcm9tIEdVWS5mcy53YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zIHBhdGhcbiAgICAgICAgICAgICAgeWllbGQgeyBsaW5lX25yLCBsaW5lLCB9XG4gICAgICAgICAgICA7bnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIDtudWxsXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBwaHJhc2VzICAgPSBuZXcgRGJyaWNfcGhyYXNlcyBkYl9wYXRoXG4gICAgICAjIGRlYnVnICfOqWJiZGJyXzIxMCcsIHBocmFzZXMudGVhcmRvd24oKVxuICAgICAgIyBkZWJ1ZyAnzqliYmRicl8yMTEnLCBwaHJhc2VzLnJlYnVpbGQoKVxuICAgICAgQGVxICggzqliYmRicl8yMTIgPSAtPiAoIHBocmFzZXMucHJlcGFyZSBTUUxcIlwiXCJwcmFnbWEgZm9yZWlnbl9rZXlzXCJcIlwiICkuZ2V0KCkgKSwgeyBmb3JlaWduX2tleXM6IDEsICAgICAgfVxuICAgICAgQGVxICggzqliYmRicl8yMTMgPSAtPiAoIHBocmFzZXMucHJlcGFyZSBTUUxcIlwiXCJwcmFnbWEgam91cm5hbF9tb2RlXCJcIlwiICkuZ2V0KCkgKSwgeyBqb3VybmFsX21vZGU6ICd3YWwnLCAgfVxuICAgICAgQGVxICggzqliYmRicl8yMTQgPSAtPiBwaHJhc2VzLmRiIGluc3RhbmNlb2YgQnNxbDMgICAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZHNrZXkgPSAnaHVtZHVtJ1xuICAgICAgICBwYXRoICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hc3NldHMvYnJpY2FicmFjL2h1bXB0eS1kdW1wdHkubWQnXG4gICAgICAgIHBocmFzZXMuc3RhdGVtZW50cy5pbnNlcnRfZGF0YXNvdXJjZS5ydW4geyBkc2tleSwgcGF0aCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHBocmFzZXMuc3RhdGVtZW50cy5wb3B1bGF0ZV9rZXl3b3Jkcy5ydW4oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMjE1Jywgcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMubG9jYXRpb25zX2Zyb21fa2V5d29yZC5pdGVyYXRlIHsga2V5d29yZDogJ3Rob3VnaHQnLCB9XG4gICAgICAjIGVjaG8oKVxuICAgICAgcm93cyA9IHBocmFzZXMuc3RhdGVtZW50cy5sb2NhdGlvbnNfZnJvbV9rZXl3b3JkLml0ZXJhdGUgeyBrZXl3b3JkOiAndGhvdWdodCcsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjE2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDE1LCBrZXl3b3JkOiAndGhvdWdodCcgfVxuICAgICAgQGVxICggzqliYmRicl8yMTcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMzQsIGtleXdvcmQ6ICd0aG91Z2h0JyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIxOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMjE5Jywgcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMubG9jYXRpb25zX2Zyb21fa2V5d29yZC5pdGVyYXRlIHsga2V5d29yZDogJ3NoZScsIH1cbiAgICAgICMgZWNobygpXG4gICAgICByb3dzID0gcGhyYXNlcy5zdGF0ZW1lbnRzLmxvY2F0aW9uc19mcm9tX2tleXdvcmQuaXRlcmF0ZSB7IGtleXdvcmQ6ICdzaGUnLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIyMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAyLCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIyMSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAzLCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIyMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiA0LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIyMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiA1LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIyNCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAxNSwga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8yMjUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMTcsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjI2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDE4LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIyNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAyNiwga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8yMjggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMzQsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjI5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDM2LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIzMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBkYnJpY19zdGRfdmFyaWFibGVzX2FuZF9zZXF1ZW5jZXM6IC0+XG4gICMgICB7IERicmljX3N0ZCxcbiAgIyAgICAgVHJ1ZSxcbiAgIyAgICAgRmFsc2UsXG4gICMgICAgIFNRTCxcbiAgIyAgICAgZXNxbCxcbiAgIyAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAjICAgQnNxbDMgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdiZXR0ZXItc3FsaXRlMydcbiAgIyAgIGpyICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gSlNPTi5zdHJpbmdpZnlcbiAgIyAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICMgICBkbyA9PlxuICAjICAgICBkYiA9IG5ldyBEYnJpY19zdGQgJzptZW1vcnk6JywgeyBkYl9jbGFzczogQnNxbDMsIH1cbiAgIyAgICAgZGIuc2V0X3ZhcmlhYmxlICdmaWxlbmFtZScsIF9fZmlsZW5hbWVcbiAgIyAgICAgb2JqZWN0X2lucHV0ICA9IHsgejogJ1onLCBpc19nb29kOiB0cnVlLCBhOiAnYVxcdXswMzA4fScsIH1cbiAgIyAgICAgb2JqZWN0X291dHB1dCA9IHsgYTogJ1xcdXswMGU0fScsIGlzX2dvb2Q6IHRydWUsIHo6ICdaJywgfVxuICAjICAgICBkYi5zZXRfdmFyaWFibGUgJ29iaicsIG9iamVjdF9pbnB1dFxuICAjICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgICAgQGVxICggzqliYmRicl8yMzEgPSAtPiBkYi5nZXRfdmFyaWFibGUgJ2ZpbGVuYW1lJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIF9fZmlsZW5hbWVcbiAgIyAgICAgQGVxICggzqliYmRicl8yMzIgPSAtPiBkYi5nZXRfdmFyaWFibGUgJ29iaicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIG9iamVjdF9vdXRwdXRcbiAgIyAgICAgQGVxICggzqliYmRicl8yMzMgPSAtPiBPYmplY3Qua2V5cyBkYi5nZXRfdmFyaWFibGUgJ29iaicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIE9iamVjdC5rZXlzIG9iamVjdF9vdXRwdXRcbiAgIyAgICAgQGVxICggzqliYmRicl8yMzQgPSAtPiBkYi5nZXRfYWxsIFNRTFwiXCJcInNlbGVjdCAqIGZyb20gc3RkX3NlcXVlbmNlcztcIlwiXCIgICAgICAgICAgICAgICAgICAgICksIFsgeyBuYW1lOiAnc2VxOmdsb2JhbDpyb3dpZCcsIHZhbHVlOiAwLCBkZWx0YTogMSB9IF1cbiAgIyAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAgIGdldF9uZXh0X3Jvd2lkICAgID0gU1FMXCJcIlwic2VsZWN0ICAgIHN0ZF9nZXRfbmV4dF9pbl9zZXF1ZW5jZSggJ3NlcTpnbG9iYWw6cm93aWQnICApIGFzIHJvd2lkIGZyb20gc3RkX3NlcXVlbmNlcztcIlwiXCJcbiAgIyAgICAgZ2V0X2N1cnJlbnRfcm93aWQgPSBTUUxcIlwiXCJzZWxlY3Qgc3RkX2dldF9jdXJyZW50X2luX3NlcXVlbmNlKCAnc2VxOmdsb2JhbDpyb3dpZCcgICkgYXMgcm93aWQgZnJvbSBzdGRfc2VxdWVuY2VzO1wiXCJcIlxuICAjICAgICBnZXRfbmV4dF9jb3VudCAgICA9IFNRTFwiXCJcInNlbGVjdCAgICBzdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UoICdzZXE6YXBwOmNvdW50JyAgICAgKSBhcyBjb3VudCBmcm9tIHN0ZF9zZXF1ZW5jZXM7XCJcIlwiXG4gICMgICAgIGdldF9jdXJyZW50X2NvdW50ID0gU1FMXCJcIlwic2VsZWN0IHN0ZF9nZXRfY3VycmVudF9pbl9zZXF1ZW5jZSggJ3NlcTphcHA6Y291bnQnICAgICApIGFzIGNvdW50IGZyb20gc3RkX3NlcXVlbmNlcztcIlwiXCJcbiAgIyAgICAgdHJ5IGRiLmV4ZWN1dGUgU1FMXCJiZWdpbiBpbW1lZGlhdGU7XCIgY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYmJkYnJfMjM1JywgZS5tZXNzYWdlXG4gICMgICAgIHRyeSBkYi53LmV4ZWN1dGUgU1FMXCJiZWdpbiBpbW1lZGlhdGU7XCIgY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYmJkYnJfMjM2JywgZS5tZXNzYWdlXG4gICMgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgICBAZXEgKCDOqWJiZGJyXzIzNyA9IC0+ICggZGIuZ2V0X2ZpcnN0IGdldF9uZXh0X3Jvd2lkICkucm93aWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDFcbiAgIyAgICAgQGVxICggzqliYmRicl8yMzggPSAtPiAoIGRiLmdldF9maXJzdCBnZXRfbmV4dF9yb3dpZCApLnJvd2lkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAyXG4gICMgICAgIEBlcSAoIM6pYmJkYnJfMjM5ID0gLT4gKCBkYi5nZXRfZmlyc3QgZ2V0X25leHRfcm93aWQgKS5yb3dpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgM1xuICAjICAgICBAZXEgKCDOqWJiZGJyXzI0MCA9IC0+ICggZGIuZ2V0X2ZpcnN0IGdldF9uZXh0X3Jvd2lkICkucm93aWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDRcbiAgIyAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAgIEBlcSAoIM6pYmJkYnJfMjQxID0gLT4gKCBkYi5nZXRfZmlyc3QgZ2V0X2N1cnJlbnRfcm93aWQgKS5yb3dpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgNFxuICAjICAgICBAZXEgKCDOqWJiZGJyXzI0MiA9IC0+ICggZGIuZ2V0X2ZpcnN0IGdldF9jdXJyZW50X3Jvd2lkICkucm93aWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDRcbiAgIyAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAgIEBlcSAoIM6pYmJkYnJfMjQzID0gLT4gKCBkYi5nZXRfZmlyc3QgZ2V0X25leHRfcm93aWQgKS5yb3dpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgNVxuICAjICAgICBAZXEgKCDOqWJiZGJyXzI0NCA9IC0+ICggZGIuZ2V0X2ZpcnN0IGdldF9jdXJyZW50X3Jvd2lkICkucm93aWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDVcbiAgIyAgICAgdHJ5IGRiLncuZXhlY3V0ZSBTUUxcImNvbW1pdDtcIiBjYXRjaCBlIHRoZW4gd2FybiAnzqliYmRicl8yNDUnLCBlLm1lc3NhZ2VcbiAgIyAgICAgdHJ5IGRiLmV4ZWN1dGUgU1FMXCJjb21taXQ7XCIgY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYmJkYnJfMjQ2JywgZS5tZXNzYWdlXG4gICMgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAgIHRyeSBkYi5leGVjdXRlIFNRTFwiYmVnaW4gaW1tZWRpYXRlO1wiIGNhdGNoIGUgdGhlbiB3YXJuICfOqWJiZGJyXzI0NycsIGUubWVzc2FnZVxuICAjICAgICBAZXEgKCDOqWJiZGJyXzI0OCA9IC0+IGRiLnN0ZF9jcmVhdGVfc2VxdWVuY2UgJ3NlcTphcHA6Y291bnQnLCB7IHZhbHVlOiAxMDAsIGRlbHRhOiArMiwgfSAgKSwgbnVsbFxuICAjICAgICB0cnkgZGIuZXhlY3V0ZSBTUUxcImNvbW1pdDtcIiBjYXRjaCBlIHRoZW4gd2FybiAnzqliYmRicl8yNDknLCBlLm1lc3NhZ2VcbiAgIyAgICAgIyB0cnkgZGIudy5leGVjdXRlIFNRTFwiY29tbWl0O1wiIGNhdGNoIGUgdGhlbiB3YXJuICfOqWJiZGJyXzI1MCcsIGUubWVzc2FnZVxuICAjICAgICBAZXEgKCDOqWJiZGJyXzI1MSA9IC0+IGRiLmdldF9hbGwgU1FMXCJzZWxlY3QgKiBmcm9tIHN0ZF9zZXF1ZW5jZXMgb3JkZXIgYnkgbmFtZTtcIiAgICAgICAgICApLCBbIHsgbmFtZTogJ3NlcTphcHA6Y291bnQnLCB2YWx1ZTogMTAwLCBkZWx0YTogMiB9LCB7IG5hbWU6ICdzZXE6Z2xvYmFsOnJvd2lkJywgdmFsdWU6IDUsIGRlbHRhOiAxIH0gXVxuICAjICAgICBAZXEgKCDOqWJiZGJyXzI1MiA9IC0+IGRiLncuZ2V0X2FsbCBTUUxcInNlbGVjdCAqIGZyb20gc3RkX3NlcXVlbmNlcyBvcmRlciBieSBuYW1lO1wiICAgICAgICAgICksIFsgeyBuYW1lOiAnc2VxOmFwcDpjb3VudCcsIHZhbHVlOiAxMDAsIGRlbHRhOiAyIH0sIHsgbmFtZTogJ3NlcTpnbG9iYWw6cm93aWQnLCB2YWx1ZTogNSwgZGVsdGE6IDEgfSBdXG4gICMgICAgICMgdHJ5IGRiLmV4ZWN1dGUgU1FMXCJjb21taXQ7XCIgY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYmJkYnJfMjUzJywgZS5tZXNzYWdlXG4gICMgICAgICMgdHJ5IGRiLncuZXhlY3V0ZSBTUUxcImNvbW1pdDtcIiBjYXRjaCBlIHRoZW4gd2FybiAnzqliYmRicl8yNTQnLCBlLm1lc3NhZ2VcbiAgIyAgICAgIyBAZXEgKCDOqWJiZGJyXzI1NSA9IC0+IGRiLncuZ2V0X2FsbCBTUUxcInNlbGVjdCAqIGZyb20gc3RkX3NlcXVlbmNlcyBvcmRlciBieSBuYW1lO1wiICAgICAgICAgICksIFsgeyBuYW1lOiAnc2VxOmFwcDpjb3VudCcsIHZhbHVlOiAxMDAsIGRlbHRhOiAyIH0sIHsgbmFtZTogJ3NlcTpnbG9iYWw6cm93aWQnLCB2YWx1ZTogNSwgZGVsdGE6IDEgfSBdXG4gICMgICAgICMgQGVxICggzqliYmRicl8yNTYgPSAtPiAoIGRiLmdldF9maXJzdCBnZXRfY3VycmVudF9jb3VudCApLmNvdW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAxMDBcbiAgIyAgICAgIyBAZXEgKCDOqWJiZGJyXzI1NyA9IC0+ICggZGIudy5nZXRfZmlyc3QgZ2V0X2N1cnJlbnRfY291bnQgKS5jb3VudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMTAwXG4gICMgICAgICMgQGVxICggzqliYmRicl8yNTggPSAtPiBkYi5zdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UgJ3NlcTphcHA6Y291bnQnICAgICAgICAgICAgICAgICAgICAgICAgICksIDEwMlxuICAjICAgICAjIEBlcSAoIM6pYmJkYnJfMjU5ID0gLT4gZGIuc3RkX2dldF9uZXh0X2luX3NlcXVlbmNlICdzZXE6YXBwOmNvdW50JyAgICAgICAgICAgICAgICAgICAgICAgICApLCAxMDRcbiAgIyAgICAgIyBAZXEgKCDOqWJiZGJyXzI2MCA9IC0+IGRiLnN0ZF9nZXRfbmV4dF9pbl9zZXF1ZW5jZSAnc2VxOmFwcDpjb3VudCcgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMTA2XG4gICMgICAgIDtudWxsXG4gICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX3N0ZF92YXJpYWJsZXNfYW5kX3NlcXVlbmNlc18yOiAtPlxuICAgIHsgRGJyaWNfc3RkLFxuICAgICAgVHJ1ZSxcbiAgICAgIEZhbHNlLFxuICAgICAgU1FMLFxuICAgICAgZXNxbCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICB7IGxldHMsXG4gICAgICBmcmVlemUsICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9sZXRzZnJlZXpldGhhdF9pbmZyYSgpLnNpbXBsZVxuICAgIEJzcWwzICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYmV0dGVyLXNxbGl0ZTMnXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zZXFzX2FuZF92YXJzIGV4dGVuZHMgRGJyaWNfc3RkXG5cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgX3N0ZF9hY3F1aXJlX3N0YXRlOiAoIHRyYW5zaWVudHMgPSB7fSApIC0+XG4gICAgICAgIHdoaXNwZXIgJ86pYmJkYnJfMjYxJywgXCJfc3RkX2FjcXVpcmVfc3RhdGVcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBzdGF0ZS5zdGRfdmFyaWFibGVzID0gbGV0cyBAc3RhdGUuc3RkX3ZhcmlhYmxlcywgKCB2ICkgPT5cbiAgICAgICAgICBmb3IgeyBuYW1lLCB2YWx1ZSwgZGVsdGEsIH0gZnJvbSBAc3RhdGVtZW50cy5nZXRfdmFyaWFibGVzLml0ZXJhdGUoKVxuICAgICAgICAgICAgd2hpc3BlciAnzqliYmRicl8yNjInLCB7IG5hbWUsIHZhbHVlLCBkZWx0YSwgfVxuICAgICAgICAgICAgdmFsdWUgICAgID0gSlNPTi5wYXJzZSB2YWx1ZVxuICAgICAgICAgICAgdlsgbmFtZSBdID0geyBuYW1lLCB2YWx1ZSwgZGVsdGEsIH1cbiAgICAgICAgICA7bnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBzdGF0ZS5zdGRfdHJhbnNpZW50cyA9IGxldHMgQHN0YXRlLnN0ZF90cmFuc2llbnRzLCAoIHQgKSAtPlxuICAgICAgICAgIGZvciBuYW1lLCB2YWx1ZSBvZiB0cmFuc2llbnRzXG4gICAgICAgICAgICB3aGlzcGVyICfOqWJiZGJyXzI2MycsIHsgbmFtZSwgdmFsdWUsIH1cbiAgICAgICAgICAgIHRbIG5hbWUgXSA9IHsgbmFtZSwgdmFsdWUsIH1cbiAgICAgICAgICA7bnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIDtudWxsXG5cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgX3N0ZF9wZXJzaXN0X3N0YXRlOiAtPlxuICAgICAgICB3aGlzcGVyICfOqWJiZGJyXzI2NCcsIFwiX3N0ZF9wZXJzaXN0X3N0YXRlXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBmb3IgXywgeyBuYW1lLCB2YWx1ZSwgZGVsdGEsIH0gb2YgQHN0YXRlLnN0ZF92YXJpYWJsZXNcbiAgICAgICAgICAjIyMgVEFJTlQgY2xlYXIgY2FjaGUgaW4gQHN0YXRlLnN0ZF92YXJpYWJsZXMgPyAjIyNcbiAgICAgICAgICB3aGlzcGVyICfOqWJiZGJyXzI2NScsIHsgbmFtZSwgdmFsdWUsIGRlbHRhLCB9XG4gICAgICAgICAgZGVsdGEgID89IG51bGxcbiAgICAgICAgICB2YWx1ZSAgID0gSlNPTi5zdHJpbmdpZnkgdmFsdWVcbiAgICAgICAgICBAc3RhdGVtZW50cy5zZXRfdmFyaWFibGUucnVuIHsgbmFtZSwgdmFsdWUsIGRlbHRhLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQHN0YXRlLnN0ZF90cmFuc2llbnRzID0gbGV0cyBAc3RhdGUuc3RkX3RyYW5zaWVudHMsICggdCApIC0+XG4gICAgICAgICAgZGVsZXRlIHRbIG5hbWUgXSBmb3IgbmFtZSBvZiB0XG4gICAgICAgICAgO251bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICA7bnVsbFxuXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHN0ZF93aXRoX3ZhcmlhYmxlczogKCB0cmFuc2llbnRzLCBmbiApIC0+XG4gICAgICAgIHN3aXRjaCBhcml0eSA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICAgICB3aGVuIDEgdGhlbiBbIHRyYW5zaWVudHMsIGZuLCBdID0gWyB7fSwgdHJhbnNpZW50cywgXVxuICAgICAgICAgIHdoZW4gMiB0aGVuIG51bGxcbiAgICAgICAgICBlbHNlIHRocm93IG5ldyBFcnJvciBcIs6pYmJkYnJfMjY2IGV4cGVjdGVkIDEgb3IgMiBhcmd1bWVudHMsIGdvdCAje2FyaXR5fVwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgaWYgQHN0YXRlLnN0ZF93aXRoaW5fdmFyaWFibGVzX2NvbnRleHRcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqWJiZGJyXzI2NyBpbGxlZ2FsIHRvIG5lc3QgYHN0ZF93aXRoX3ZhcmlhYmxlcygpYCBjb250ZXh0c1wiXG4gICAgICAgIEBzdGF0ZS5zdGRfd2l0aGluX3ZhcmlhYmxlc19jb250ZXh0ID0gdHJ1ZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBfc3RkX2FjcXVpcmVfc3RhdGUgdHJhbnNpZW50c1xuICAgICAgICB0cnlcbiAgICAgICAgICBSID0gZm4oKVxuICAgICAgICBmaW5hbGx5XG4gICAgICAgICAgQHN0YXRlLnN0ZF93aXRoaW5fdmFyaWFibGVzX2NvbnRleHQgPSBmYWxzZVxuICAgICAgICAgIEBfc3RkX3BlcnNpc3Rfc3RhdGUoKVxuICAgICAgICByZXR1cm4gUlxuXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHN0ZF9zZXRfdmFyaWFibGU6ICggbmFtZSwgdmFsdWUsIGRlbHRhICkgLT5cbiAgICAgICAgdW5sZXNzIEBzdGF0ZS5zdGRfd2l0aGluX3ZhcmlhYmxlc19jb250ZXh0XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqliYmRicl8yNjggaWxsZWdhbCB0byBzZXQgdmFyaWFibGUgb3V0c2lkZSBvZiBgc3RkX3dpdGhfdmFyaWFibGVzKClgIGNvbnRleHRzXCJcbiAgICAgICAgaWYgUmVmbGVjdC5oYXMgQHN0YXRlLnN0ZF90cmFuc2llbnRzLCBuYW1lXG4gICAgICAgICAgQHN0YXRlLnN0ZF90cmFuc2llbnRzID0gbGV0cyBAc3RhdGUuc3RkX3RyYW5zaWVudHMsICggdCApID0+IHRbIG5hbWUgXSA9IHsgbmFtZSwgdmFsdWUsIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgIGRlbHRhID89IG51bGxcbiAgICAgICAgICBAc3RhdGUuc3RkX3ZhcmlhYmxlcyA9IGxldHMgQHN0YXRlLnN0ZF92YXJpYWJsZXMsICAgKCB2ICkgPT4gdlsgbmFtZSBdID0geyBuYW1lLCB2YWx1ZSwgZGVsdGEsIH1cbiAgICAgICAgO251bGxcblxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBzdGRfZ2V0X3ZhcmlhYmxlOiAoIG5hbWUgKSAtPlxuICAgICAgICB1bmxlc3MgQHN0YXRlLnN0ZF93aXRoaW5fdmFyaWFibGVzX2NvbnRleHRcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqWJiZGJyXzI2OSBpbGxlZ2FsIHRvIGdldCB2YXJpYWJsZSBvdXRzaWRlIG9mIGBzdGRfd2l0aF92YXJpYWJsZXMoKWAgY29udGV4dHNcIlxuICAgICAgICBpZiBSZWZsZWN0LmhhcyBAc3RhdGUuc3RkX3RyYW5zaWVudHMsIG5hbWVcbiAgICAgICAgICByZXR1cm4gQHN0YXRlLnN0ZF90cmFuc2llbnRzWyBuYW1lIF0udmFsdWVcbiAgICAgICAgaWYgUmVmbGVjdC5oYXMgQHN0YXRlLnN0ZF92YXJpYWJsZXMsIG5hbWVcbiAgICAgICAgICByZXR1cm4gQHN0YXRlLnN0ZF92YXJpYWJsZXNbIG5hbWUgXS52YWx1ZVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqWJiZGJyXzI3MCB1bmtub3duIHZhcmlhYmxlICN7cnByIG5hbWV9XCJcbiAgICAgICAgO251bGxcblxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBzdGRfZ2V0X25leHRfaW5fc2VxdWVuY2U6ICggbmFtZSApIC0+XG4gICAgICAgICMjIyBUQUlOVCB2YWxpZGF0ZSBpcyBjYWxsZWQgaW5zaWRlIGBzdGRfd2l0aF92YXJpYWJsZXMoKWAgY29udGV4dCBoYW5kbGVyICMjI1xuICAgICAgICB1bmxlc3MgKCBlbnRyeSA9IEBzdGF0ZS5zdGRfdmFyaWFibGVzWyBuYW1lIF0gKT9cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqWJiZGJyXzI3MSB1bmtub3duIHZhcmlhYmxlICN7cnByIG5hbWV9XCJcbiAgICAgICAgdW5sZXNzICggZGVsdGEgPSBlbnRyeS5kZWx0YSApP1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pYmJkYnJfMjcyIG5vdCBhIHNlcXVlbmNlIG5hbWU6ICN7cnByIG5hbWV9XCJcbiAgICAgICAgZW50cnkudmFsdWUgKz0gZGVsdGFcbiAgICAgICAgcmV0dXJuIGVudHJ5LnZhbHVlXG5cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgX3Nob3dfdmFyaWFibGVzOiAtPlxuICAgICAgICBzdG9yZSAgICAgICA9IE9iamVjdC5mcm9tRW50cmllcyAoIFsgbmFtZSwgeyB2YWx1ZSwgZGVsdGEsIH0sIF0gZm9yIHsgbmFtZSwgdmFsdWUsIGRlbHRhLCB9IGZyb20gQHN0YXRlbWVudHMuZ2V0X3ZhcmlhYmxlcy5pdGVyYXRlKCkgKVxuICAgICAgICBjYWNoZV9uYW1lcyA9IG5ldyBTZXQgT2JqZWN0LmtleXMgQHN0YXRlLnN0ZF92YXJpYWJsZXNcbiAgICAgICAgdHJhbnNfbmFtZXMgPSBuZXcgU2V0IE9iamVjdC5rZXlzIEBzdGF0ZS5zdGRfdHJhbnNpZW50c1xuICAgICAgICBzdG9yZV9uYW1lcyA9IG5ldyBTZXQgT2JqZWN0LmtleXMgc3RvcmVcbiAgICAgICAgYWxsX25hbWVzICAgPSBbICggKCBjYWNoZV9uYW1lcy51bmlvbiBzdG9yZV9uYW1lcyApLnVuaW9uIHRyYW5zX25hbWVzICkuLi4sIF0uc29ydCgpXG4gICAgICAgIHRhYmxlID0ge31cbiAgICAgICAgZm9yIG5hbWUgaW4gYWxsX25hbWVzXG4gICAgICAgICAgcyAgID0gc3RvcmVbICAgICAgICAgICAgICAgICAgbmFtZSBdID8ge31cbiAgICAgICAgICBjICAgPSBAc3RhdGUuc3RkX3ZhcmlhYmxlc1sgICBuYW1lIF0gPyB7fVxuICAgICAgICAgIHQgICA9IEBzdGF0ZS5zdGRfdHJhbnNpZW50c1sgIG5hbWUgXSA/IHt9XG4gICAgICAgICAgaWYgQHN0YXRlLnN0ZF93aXRoaW5fdmFyaWFibGVzX2NvbnRleHRcbiAgICAgICAgICAgIGcgICA9IEBzdGRfZ2V0X3ZhcmlhYmxlIG5hbWVcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBnICAgPSBAc3RkX3dpdGhfdmFyaWFibGVzID0+IEBzdGRfZ2V0X3ZhcmlhYmxlIG5hbWVcbiAgICAgICAgICB0YWJsZVsgbmFtZSBdID0geyBzdjogcy52YWx1ZSwgc2Q6IHMuZGVsdGEsIGN2OiBjLnZhbHVlLCBjZDogYy5kZWx0YSwgdHY6IHQudmFsdWUsIGd2OiBnLnZhbHVlLCB9XG4gICAgICAgIGNvbnNvbGUudGFibGUgdGFibGVcbiAgICAgICAgO251bGxcblxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgc2V0X3ZhcmlhYmxlOiAgICAgU1FMXCJcbiAgICAgICAgICBpbnNlcnQgaW50byBzdGRfdmFyaWFibGVzICggbmFtZSwgdmFsdWUsIGRlbHRhICkgdmFsdWVzICggJG5hbWUsICR2YWx1ZSwgJGRlbHRhIClcbiAgICAgICAgICAgIG9uIGNvbmZsaWN0ICggbmFtZSApIGRvIHVwZGF0ZVxuICAgICAgICAgICAgICBzZXQgdmFsdWUgPSAkdmFsdWUsIGRlbHRhID0gJGRlbHRhO1wiXG4gICAgICAgIGdldF92YXJpYWJsZXM6ICAgIFNRTFwic2VsZWN0IG5hbWUsIHZhbHVlLCBkZWx0YSBmcm9tIHN0ZF92YXJpYWJsZXMgb3JkZXIgYnkgbmFtZTtcIlxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGIgICAgICAgICAgICAgID0gbmV3IERicmljX3NlcXNfYW5kX3ZhcnMgJzptZW1vcnk6JywgeyBkYl9jbGFzczogQnNxbDMsIH1cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEB0aHJvd3MgKCDOqWJiZGJyXzI3MyA9IC0+IGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyAtPiBkYi5zdGRfd2l0aF92YXJpYWJsZXMgLT4gbnVsbCAgKSwgL2lsbGVnYWwgdG8gbmVzdCBgc3RkX3dpdGhfdmFyaWFibGVzXFwoXFwpYCBjb250ZXh0cy9cbiAgICBAdGhyb3dzICggzqliYmRicl8yNzQgPSAtPiBkYi5zdGRfc2V0X3ZhcmlhYmxlICdteW5hbWUnLCAnbXl2YWx1ZScgICAgICAgICAgICAgICAgICksIC9pbGxlZ2FsIHRvIHNldCB2YXJpYWJsZS9cbiAgICBAdGhyb3dzICggzqliYmRicl8yNzUgPSAtPiBkYi5zdGRfZ2V0X3ZhcmlhYmxlICdteW5hbWUnICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9pbGxlZ2FsIHRvIGdldCB2YXJpYWJsZS9cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYi5fc2hvd192YXJpYWJsZXMoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkYi5zdGRfd2l0aF92YXJpYWJsZXMgPT5cbiAgICAgICAgQHRocm93cyAoIM6pYmJkYnJfMjc2ID0gLT4gZGIuc3RkX2dldF92YXJpYWJsZSAnbXluYW1lJyApLCAvdW5rbm93biB2YXJpYWJsZS9cbiAgICAgICAgZGIuX3Nob3dfdmFyaWFibGVzKClcbiAgICAgICAgIyMjIFRBSU5UIHVzZSBBUEkgIyMjXG4gICAgICAgIGRiLnN0YXRlLnN0ZF92YXJpYWJsZXMgPSBsZXRzIGRiLnN0YXRlLnN0ZF92YXJpYWJsZXMsICggZCApIC0+XG4gICAgICAgICAgZFsgJ3NlcTphcHA6Y291bnRlcicgXSA9IHsgbmFtZTogJ3NlcTphcHA6Y291bnRlcicsIHZhbHVlOiA3LCBkZWx0YTogKzMsIH1cbiAgICAgICAgZGIuX3Nob3dfdmFyaWFibGVzKClcbiAgICAgICAgaW5mbyAnzqliYmRicl8yNzcnLCBkYi5zdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UgJ3NlcTphcHA6Y291bnRlcidcbiAgICAgICAgaW5mbyAnzqliYmRicl8yNzgnLCBkYi5zdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UgJ3NlcTphcHA6Y291bnRlcidcbiAgICAgICAgZGIuc3RkX3NldF92YXJpYWJsZSAnZnV6eicsIDExLjVcbiAgICAgICAgZGIuc3RkX3NldF92YXJpYWJsZSAnbmFtZScsICdCb2InXG4gICAgICAgIEBlcSAoIM6pYmJkYnJfMjc5ID0gLT4gZGIuc3RkX2dldF92YXJpYWJsZSAnbmFtZScgKSwgJ0JvYidcbiAgICAgICAgZGIuX3Nob3dfdmFyaWFibGVzKClcbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzIHsgbmFtZTogJ0FsaWNlJywgam9iOiAnZW5naW5lZXInLCB9LCA9PlxuICAgICAgICBAZXEgKCDOqWJiZGJyXzI4MCA9IC0+IGRiLnN0ZF9nZXRfdmFyaWFibGUgJ25hbWUnICksICdBbGljZSdcbiAgICAgICAgIyBkZWJ1ZyAnzqliYmRicl8yODEnLCB7IG5hbWUsIGpvYiwgfVxuICAgICAgICBkYi5fc2hvd192YXJpYWJsZXMoKVxuICAgICAgICA7bnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkYi5fc2hvd192YXJpYWJsZXMoKVxuICAgICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzIC0+XG4gICAgICAgIGRiLl9zaG93X3ZhcmlhYmxlcygpXG4gICAgICAgIDtudWxsXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX3N0ZF92YXJpYWJsZXNfYW5kX3NlcXVlbmNlc18yOiB0ZXN0cy5kYnJpY19zdGRfdmFyaWFibGVzX2FuZF9zZXF1ZW5jZXNfMiwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGJyaWNfc3RkX3ZhcmlhYmxlc19hbmRfc2VxdWVuY2VzOiB0ZXN0cy5kYnJpY19zdGRfdmFyaWFibGVzX2FuZF9zZXF1ZW5jZXMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX3JuZzogdGVzdHMuZGJyaWNfcm5nLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkYnJpY19lc3FsOiB0ZXN0cy5kYnJpY19lc3FsLCB9XG4iXX0=
