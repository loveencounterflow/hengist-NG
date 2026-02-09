(async function() {
  'use strict';
  var Dbric, Dbric_std, FS, False, GTNG, GUY, IDN, LIT, PATH, SFMODULES, SQL, Test, True, VEC, _toggle, alert, as_bool, blue, bold, debug, demo_using_methods_holder_to_enable_ersatz_super, echo, f, from_bool, gold, green, grey, help, info, inspect, internals, log, nfa, plain, praise, red, remove, reverse, rpr, tests, toggle, unquote_name, urge, warn, whisper, white;

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
  ({Dbric, Dbric_std, IDN, LIT, SQL, VEC, from_bool, as_bool, internals, True, False, unquote_name} = require('../../../apps/bricabrac-sfmodules/lib/dbric'));

  //===========================================================================================================
  _toggle = 0;

  toggle = function(...P) {
    _toggle = (_toggle + 1) % 2;
    return (_toggle === 0 ? blue : gold)(...P);
  };

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
        return (() => {          // help 'Ωbbdbr__20', { db_path, }
          //.....................................................................................................
          var db, Ωbbdbr__21, Ωbbdbr__22;
          db = new Dbric(db_path, {
            rebuild: true
          });
          this.eq((Ωbbdbr__21 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__22 = function() {
            return db._get_db_objects();
          }), {});
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
        (() => {          // help 'Ωbbdbr__23', { db_path, }
          //.....................................................................................................
          var _, db, o, objects, Ωbbdbr__24, Ωbbdbr__25, Ωbbdbr__26, Ωbbdbr__27, Ωbbdbr__28;
          db = new Dbric_std(db_path, {
            rebuild: true
          });
          this.eq((Ωbbdbr__24 = function() {
            return db instanceof Dbric;
          }), true);
          this.eq((Ωbbdbr__25 = function() {
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
          this.eq((Ωbbdbr__26 = function() {
            return objects.has('view:std_tables');
          }), true);
          this.eq((Ωbbdbr__27 = function() {
            return objects.has('view:std_views');
          }), true);
          this.eq((Ωbbdbr__28 = function() {
            return objects.has('view:std_relations');
          }), true);
          return null;
        })();
        (() => {          //.....................................................................................................
          var _, db, o, objects, Ωbbdbr__29, Ωbbdbr__30, Ωbbdbr__31, Ωbbdbr__32, Ωbbdbr__33;
          db = new Dbric_std(db_path, {
            rebuild: false
          });
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
        var Db, db, Ωbbdbr__34, Ωbbdbr__35, Ωbbdbr__36, Ωbbdbr__37;
        Db = class Db extends Dbric_std {};
        db = new Db(':memory:', {
          rebuild: true
        });
        this.eq((Ωbbdbr__34 = function() {
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
        this.eq((Ωbbdbr__35 = function() {
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
        this.eq((Ωbbdbr__36 = function() {
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
        this.eq((Ωbbdbr__37 = function() {
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

        C_duplicate_function.overwrite = false;

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

        C_duplicate_statement.overwrite = false;

        C_duplicate_statement.statements = {
          select_b: SQL`select fn_b() as one, 2 as two;`
        };

        return C_duplicate_statement;

      }).call(this);
      C_duplicate_table = (function() {
        //.......................................................................................................
        class C_duplicate_table extends B {};

        C_duplicate_table.overwrite = false;

        C_duplicate_table.build = [SQL`create table table_b ( d text );`, SQL`create view view_b as select * from table_b;`];

        return C_duplicate_table;

      }).call(this);
      (() => {        // #.....................................................................................................
        // b = new B()
        // debug 'Ωbbdbr__38', b
        // debug 'Ωbbdbr__39', 'functions: ', get_function_names b
        // debug 'Ωbbdbr__40', 'functions: ', ( get_function_names b ).has 'fn_a'
        // debug 'Ωbbdbr__41', 'functions: ', ( get_function_names b ).has 'fn_b'
        // debug 'Ωbbdbr__42', 'functions: ', ( get_function_names b ).has 'regexp'
        // debug 'Ωbbdbr__43', 'tables:    ', get_table_names b
        // debug 'Ωbbdbr__44', 'views:     ', get_view_names b
        // debug 'Ωbbdbr__45', 'triggers:  ', get_trigger_names b
        // debug 'Ωbbdbr__46', 'statements:', ( k for k of b.statements )
        // return null
        //.......................................................................................................
        var dba, function_names, table_names, trigger_names, view_names, Ωbbdbr__47, Ωbbdbr__48, Ωbbdbr__49, Ωbbdbr__50, Ωbbdbr__51, Ωbbdbr__52, Ωbbdbr__53, Ωbbdbr__54, Ωbbdbr__55, Ωbbdbr__56, Ωbbdbr__57, Ωbbdbr__58, Ωbbdbr__59, Ωbbdbr__60, Ωbbdbr__61, Ωbbdbr__62, Ωbbdbr__63;
        dba = new Dbric_std(':memory:', {
          rebuild: true
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
        this.eq((Ωbbdbr__47 = function() {
          return dba.statements.std_get_schema instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__48 = function() {
          return dba.statements.std_get_tables instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__49 = function() {
          return dba.statements.std_get_views instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__50 = function() {
          return dba.statements.std_get_relations instanceof statement_class;
        }), true);
        this.eq((Ωbbdbr__51 = function() {
          return dba.statements.select_a instanceof statement_class;
        }), false);
        this.eq((Ωbbdbr__52 = function() {
          return dba.statements.select_b instanceof statement_class;
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__53 = function() {
          return function_names.has('zzz_test');
        }), true);
        this.eq((Ωbbdbr__54 = function() {
          return function_names.has('regexp');
        }), true);
        this.eq((Ωbbdbr__55 = function() {
          return function_names.has('fn_a');
        }), false);
        this.eq((Ωbbdbr__56 = function() {
          return function_names.has('fn_b');
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__57 = function() {
          return table_names.has('table_a');
        }), false);
        this.eq((Ωbbdbr__58 = function() {
          return table_names.has('table_b');
        }), false);
        this.eq((Ωbbdbr__59 = function() {
          return view_names.has('std_tables');
        }), true);
        this.eq((Ωbbdbr__60 = function() {
          return view_names.has('std_views');
        }), true);
        this.eq((Ωbbdbr__61 = function() {
          return view_names.has('std_relations');
        }), true);
        this.eq((Ωbbdbr__62 = function() {
          return view_names.has('view_a');
        }), false);
        this.eq((Ωbbdbr__63 = function() {
          return view_names.has('view_b');
        }), false);
        return null;
      })();
      (() => {        //.......................................................................................................
        var dba, function_names, table_names, trigger_names, view_names, Ωbbdbr__64, Ωbbdbr__65, Ωbbdbr__66, Ωbbdbr__67, Ωbbdbr__68, Ωbbdbr__69, Ωbbdbr__70, Ωbbdbr__71, Ωbbdbr__72, Ωbbdbr__73, Ωbbdbr__74, Ωbbdbr__75, Ωbbdbr__76, Ωbbdbr__77, Ωbbdbr__78, Ωbbdbr__79, Ωbbdbr__80;
        dba = new A({
          rebuild: true
        });
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
        }), true);
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
        }), true);
        this.eq((Ωbbdbr__73 = function() {
          return function_names.has('fn_b');
        }), false);
        //.....................................................................................................
        this.eq((Ωbbdbr__74 = function() {
          return table_names.has('table_a');
        }), true);
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
        }), true);
        this.eq((Ωbbdbr__80 = function() {
          return view_names.has('view_b');
        }), false);
        return null;
      })();
      (() => {        //.......................................................................................................
        var dba, function_names, table_names, trigger_names, view_names, Ωbbdbr__81, Ωbbdbr__82, Ωbbdbr__83, Ωbbdbr__84, Ωbbdbr__85, Ωbbdbr__86, Ωbbdbr__87, Ωbbdbr__88, Ωbbdbr__89, Ωbbdbr__90, Ωbbdbr__91, Ωbbdbr__92, Ωbbdbr__93, Ωbbdbr__94, Ωbbdbr__95, Ωbbdbr__96, Ωbbdbr__97;
        dba = new B({
          rebuild: true
        });
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
        }), true);
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
        }), true);
        //.....................................................................................................
        this.eq((Ωbbdbr__91 = function() {
          return table_names.has('table_a');
        }), true);
        this.eq((Ωbbdbr__92 = function() {
          return table_names.has('table_b');
        }), true);
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
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var Ωbbdbr_100, Ωbbdbr__98, Ωbbdbr__99;
        this.throws((Ωbbdbr__98 = function() {
          return new C_duplicate_function({
            rebuild: true
          });
        }), /a UDF or built-in function named 'fn_b' has already been declared/);
        this.throws((Ωbbdbr__99 = function() {
          return new C_duplicate_statement({
            rebuild: true
          });
        }), /statement 'select_b' is already declared/);
        return this.throws((Ωbbdbr_100 = function() {
          return new C_duplicate_table({
            rebuild: true
          });
        }), /table table_b already exists/);
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
        var cast_row, db_path, rows, store, Ωbbdbr_101, Ωbbdbr_102, Ωbbdbr_103, Ωbbdbr_104, Ωbbdbr_105, Ωbbdbr_106;
        db_path = '/dev/shm/bricabrac.sqlite';
        store = Dbric_store.rebuild(db_path);
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
        this.eq((Ωbbdbr_101 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'false',
          facet_value: false,
          _v: 'false'
        });
        this.eq((Ωbbdbr_102 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'one',
          facet_value: 1,
          _v: 1
        });
        this.eq((Ωbbdbr_103 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'three',
          facet_value: 'iii',
          _v: '"iii"'
        });
        this.eq((Ωbbdbr_104 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'true',
          facet_value: true,
          _v: 'true'
        });
        this.eq((Ωbbdbr_105 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'two',
          facet_value: 2,
          _v: 2
        });
        return this.eq((Ωbbdbr_106 = function() {
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
        var cast_row, rows, store, Ωbbdbr_107, Ωbbdbr_108, Ωbbdbr_109, Ωbbdbr_110, Ωbbdbr_111, Ωbbdbr_112;
        store = Dbric_store.rebuild(':memory:');
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
        this.eq((Ωbbdbr_107 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'false',
          facet_value: false,
          _v: 'false'
        });
        this.eq((Ωbbdbr_108 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'one',
          facet_value: 1,
          _v: 1
        });
        this.eq((Ωbbdbr_109 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'three',
          facet_value: 'iii',
          _v: '"iii"'
        });
        this.eq((Ωbbdbr_110 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'true',
          facet_value: true,
          _v: 'true'
        });
        this.eq((Ωbbdbr_111 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'two',
          facet_value: 2,
          _v: 2
        });
        return this.eq((Ωbbdbr_112 = function() {
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
        class Dbric_squares extends Dbric {};

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

        //-----------------------------------------------------------------------------------------------------
        Dbric_squares.functions = {
          square: {
            deterministic: true,
            varargs: false,
            value: function(n) {
              return n ** 2;
            }
          }
        };

        return Dbric_squares;

      }).call(this);
      (() => {        //=======================================================================================================
        var db_path, i, n, rows, squares, Ωbbdbr_114, Ωbbdbr_115, Ωbbdbr_116, Ωbbdbr_117, Ωbbdbr_118, Ωbbdbr_119, Ωbbdbr_120, Ωbbdbr_121, Ωbbdbr_122, Ωbbdbr_123, Ωbbdbr_124;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = Dbric_squares.rebuild(db_path);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_113', row for row from squares.statements.select_from_squares.iterate()
        rows = squares.statements.select_from_squares.iterate();
        this.eq((Ωbbdbr_114 = function() {
          return rows.next().value;
        }), {
          n: 0,
          square: 0
        });
        this.eq((Ωbbdbr_115 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1
        });
        this.eq((Ωbbdbr_116 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4
        });
        this.eq((Ωbbdbr_117 = function() {
          return rows.next().value;
        }), {
          n: 3,
          square: 9
        });
        this.eq((Ωbbdbr_118 = function() {
          return rows.next().value;
        }), {
          n: 4,
          square: 16
        });
        this.eq((Ωbbdbr_119 = function() {
          return rows.next().value;
        }), {
          n: 5,
          square: 25
        });
        this.eq((Ωbbdbr_120 = function() {
          return rows.next().value;
        }), {
          n: 6,
          square: 36
        });
        this.eq((Ωbbdbr_121 = function() {
          return rows.next().value;
        }), {
          n: 7,
          square: 49
        });
        this.eq((Ωbbdbr_122 = function() {
          return rows.next().value;
        }), {
          n: 8,
          square: 64
        });
        this.eq((Ωbbdbr_123 = function() {
          return rows.next().value;
        }), {
          n: 9,
          square: 81
        });
        this.eq((Ωbbdbr_124 = function() {
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
        var product;

        //=======================================================================================================
        class Dbric_squares extends Dbric {};

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

        //-----------------------------------------------------------------------------------------------------
        Dbric_squares.functions = {
          square: {
            deterministic: true,
            varargs: false,
            value: function(n) {
              return n ** 2;
            }
          }
        };

        Dbric_squares.aggregate_functions = {
          product: {
            start: function() {
              return 1/* NOTE can use `null` for bSQL, but nSQL needs `1` */;
            },
            step: product = function(total, element) {
              // debug 'Ωbbdbr_125', { total, element, }
              return (total != null ? total : 1) * element;
            }
          }
        };

        return Dbric_squares;

      }).call(this);
      (() => {        //=======================================================================================================
        var db_path, i, n, rows, squares, Ωbbdbr_127, Ωbbdbr_128, Ωbbdbr_130;
        db_path = '/dev/shm/bricabrac-udf_aggregates_with_nsql.sqlite';
        squares = Dbric_squares.rebuild(db_path);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_126', row for row from squares.statements.select_from_squares.iterate { start: 1, stop: 5, }
        rows = squares.statements.select_from_squares.iterate({
          start: 1,
          stop: 5
        });
        this.eq((Ωbbdbr_127 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1,
          p_n: 120,
          p_square: 14400
        });
        this.eq((Ωbbdbr_128 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        // echo 'Ωbbdbr_129', row for row from squares.statements.select_from_squares.iterate()
        this.throws((Ωbbdbr_130 = function() {
          return squares.statements.select_from_squares.iterate();
        }), /missing named parameters/i);
        // @eq ( Ωbbdbr_131 = -> rows.next().value ), { n: null, square: null, p_n: 1, p_square: 1 }
        // @eq ( Ωbbdbr_132 = -> rows.next().value ), null
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
        class Dbric_squares extends Dbric {};

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

        //-----------------------------------------------------------------------------------------------------
        Dbric_squares.functions = {
          square: {
            deterministic: true,
            varargs: false,
            value: function(n) {
              return n ** 2;
            }
          }
        };

        return Dbric_squares;

      }).call(this);
      (() => {        //=======================================================================================================
        var db_path, i, n, rows, squares, Ωbbdbr_133, Ωbbdbr_134, Ωbbdbr_135, Ωbbdbr_136, Ωbbdbr_137, Ωbbdbr_138, Ωbbdbr_139, Ωbbdbr_140, Ωbbdbr_141, Ωbbdbr_142, Ωbbdbr_143;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = Dbric_squares.rebuild(db_path);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo row for row from squares.statements.select_from_squares.iterate()
        rows = squares.statements.select_from_squares.iterate();
        this.eq((Ωbbdbr_133 = function() {
          return rows.next().value;
        }), {
          n: 0,
          square: 0
        });
        this.eq((Ωbbdbr_134 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1
        });
        this.eq((Ωbbdbr_135 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4
        });
        this.eq((Ωbbdbr_136 = function() {
          return rows.next().value;
        }), {
          n: 3,
          square: 9
        });
        this.eq((Ωbbdbr_137 = function() {
          return rows.next().value;
        }), {
          n: 4,
          square: 16
        });
        this.eq((Ωbbdbr_138 = function() {
          return rows.next().value;
        }), {
          n: 5,
          square: 25
        });
        this.eq((Ωbbdbr_139 = function() {
          return rows.next().value;
        }), {
          n: 6,
          square: 36
        });
        this.eq((Ωbbdbr_140 = function() {
          return rows.next().value;
        }), {
          n: 7,
          square: 49
        });
        this.eq((Ωbbdbr_141 = function() {
          return rows.next().value;
        }), {
          n: 8,
          square: 64
        });
        this.eq((Ωbbdbr_142 = function() {
          return rows.next().value;
        }), {
          n: 9,
          square: 81
        });
        this.eq((Ωbbdbr_143 = function() {
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
        var product, square;

        //=======================================================================================================
        class Dbric_squares extends Dbric {};

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

        //-----------------------------------------------------------------------------------------------------
        Dbric_squares.functions = {
          square: {
            deterministic: true,
            varargs: false,
            value: square = function(n) {
              return n ** 2;
            }
          }
        };

        Dbric_squares.aggregate_functions = {
          product: {
            start: function() {
              return null;
            },
            step: product = function(total, element) {
              // debug 'Ωbbdbr_144', { total, element, }
              return (total != null ? total : 1) * element;
            }
          }
        };

        return Dbric_squares;

      }).call(this);
      (() => {        //=======================================================================================================
        var i, n, rows, squares, Ωbbdbr_146, Ωbbdbr_147;
        squares = Dbric_squares.rebuild();
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_145', row for row from squares.statements.select_from_squares.iterate { start: 2, stop: 3, }
        rows = squares.statements.select_from_squares.iterate({
          start: 2,
          stop: 3
        });
        this.eq((Ωbbdbr_146 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4,
          p_n: 6,
          p_square: 36
        });
        this.eq((Ωbbdbr_147 = function() {
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
        class Dbric_phrases extends Dbric {};

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

        //-----------------------------------------------------------------------------------------------------
        Dbric_phrases.table_functions = {
          re_matches: {
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
          }
        };

        return Dbric_phrases;

      }).call(this);
      (() => {        //=======================================================================================================
        var i, len, phrase, phrases, ref, rows, Ωbbdbr_150, Ωbbdbr_151, Ωbbdbr_152, Ωbbdbr_153, Ωbbdbr_154, Ωbbdbr_155, Ωbbdbr_156, Ωbbdbr_157, Ωbbdbr_158, Ωbbdbr_159, Ωbbdbr_160, Ωbbdbr_161, Ωbbdbr_162;
        phrases = Dbric_phrases.rebuild();
        ref = ['eleven', 'five', 'nine', 'one', 'one point five', 'seven', 'three point one'];
        for (i = 0, len = ref.length; i < len; i++) {
          phrase = ref[i];
          phrases.statements.insert_phrase.run({phrase});
        }
        //.....................................................................................................
        // echo 'Ωbbdbr_148', row for row from phrases.statements.select_from_phrases.iterate { matcher: '^.*([aeiou].e).*$', }
        // echo()
        //.....................................................................................................
        // echo 'Ωbbdbr_149', row for row from phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
        rows = phrases.statements.select_from_phrases.iterate({
          matcher: '([^aeiou]?[aeiou]+)(?=[mnv])'
        });
        this.eq((Ωbbdbr_150 = function() {
          return rows.next().value;
        }), {
          phrase: 'eleven',
          match: 'le',
          capture: 'le'
        });
        this.eq((Ωbbdbr_151 = function() {
          return rows.next().value;
        }), {
          phrase: 'eleven',
          match: 've',
          capture: 've'
        });
        this.eq((Ωbbdbr_152 = function() {
          return rows.next().value;
        }), {
          phrase: 'five',
          match: 'fi',
          capture: 'fi'
        });
        this.eq((Ωbbdbr_153 = function() {
          return rows.next().value;
        }), {
          phrase: 'nine',
          match: 'ni',
          capture: 'ni'
        });
        this.eq((Ωbbdbr_154 = function() {
          return rows.next().value;
        }), {
          phrase: 'one',
          match: 'o',
          capture: 'o'
        });
        this.eq((Ωbbdbr_155 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'o',
          capture: 'o'
        });
        this.eq((Ωbbdbr_156 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'poi',
          capture: 'poi'
        });
        this.eq((Ωbbdbr_157 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'fi',
          capture: 'fi'
        });
        this.eq((Ωbbdbr_158 = function() {
          return rows.next().value;
        }), {
          phrase: 'seven',
          match: 'se',
          capture: 'se'
        });
        this.eq((Ωbbdbr_159 = function() {
          return rows.next().value;
        }), {
          phrase: 'seven',
          match: 've',
          capture: 've'
        });
        this.eq((Ωbbdbr_160 = function() {
          return rows.next().value;
        }), {
          phrase: 'three point one',
          match: 'poi',
          capture: 'poi'
        });
        this.eq((Ωbbdbr_161 = function() {
          return rows.next().value;
        }), {
          phrase: 'three point one',
          match: ' o',
          capture: ' o'
        });
        this.eq((Ωbbdbr_162 = function() {
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
        class Dbric_phrases extends Dbric {};

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

        //-----------------------------------------------------------------------------------------------------
        Dbric_phrases.table_functions = {
          file_lines: {
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
          }
        };

        return Dbric_phrases;

      }).call(this);
      (() => {        //=======================================================================================================
        var dskey, i, j, keyword, keywords, len, len1, line, line_nr, phrases, rows, Ωbbdbr_163, Ωbbdbr_164;
        phrases = Dbric_phrases.rebuild();
        this.eq((Ωbbdbr_163 = function() {
          return (phrases.prepare(SQL`pragma foreign_keys`)).get();
        }), {
          foreign_keys: 1
        });
        this.eq((Ωbbdbr_164 = function() {
          return (phrases.prepare(SQL`pragma journal_mode`)).get();
        }), {
          journal_mode: 'memory'
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
        // echo 'Ωbbdbr_165', row for row from phrases.statements.select_from_datasources.iterate()
        // echo()
        // #...................................................................................................
        // echo 'Ωbbdbr_166', row for row from phrases.statements.select_from_mirror.iterate()
        // echo()
        //.....................................................................................................
        rows = phrases.statements.select_from_mirror.get();
        for (i = 0, len = phrases.length; i < len; i++) {
          ({dskey, line_nr, line} = phrases[i]);
          keywords = line.split(/(?:\p{Z}+)|((?:\p{L}+)|(?:\p{N}+)|(?:\p{S}+))/v);
// debug 'Ωbbdbr_167', line_nr, rpr keywords
          for (j = 0, len1 = keywords.length; j < len1; j++) {
            keyword = keywords[j];
            if (keyword == null) {
              continue;
            }
            if (keyword === '') {
              continue;
            }
            phrases.statements.insert_keyword.run({dskey, line_nr, keyword});
          }
        }
        // #...................................................................................................
        // echo 'Ωbbdbr_168', row for row from phrases.statements.select_from_keywords.iterate()
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
        class Dbric_phrases extends Dbric {};

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

        //-----------------------------------------------------------------------------------------------------
        Dbric_phrases.table_functions = {
          split_words: {
            columns: ['keyword'],
            parameters: ['line'],
            rows: function*(line) {
              var i, keyword, keywords, len;
              keywords = line.split(/(?:\p{Z}+)|((?:\p{L}+)|(?:\p{N}+)|(?:\p{S}+))/v);
// debug 'Ωbbdbr_169', line_nr, rpr keywords
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
          },
          //...................................................................................................
          file_lines: {
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
          }
        };

        return Dbric_phrases;

      }).call(this);
      (() => {        //=======================================================================================================
        var db_path, phrases, rows, Ωbbdbr_172, Ωbbdbr_173, Ωbbdbr_175, Ωbbdbr_176, Ωbbdbr_177, Ωbbdbr_179, Ωbbdbr_180, Ωbbdbr_181, Ωbbdbr_182, Ωbbdbr_183, Ωbbdbr_184, Ωbbdbr_185, Ωbbdbr_186, Ωbbdbr_187, Ωbbdbr_188, Ωbbdbr_189;
        db_path = '/dev/shm/bricabrac.sqlite';
        phrases = Dbric_phrases.rebuild(db_path);
        // debug 'Ωbbdbr_170', phrases.teardown()
        // debug 'Ωbbdbr_171', phrases.rebuild()
        this.eq((Ωbbdbr_172 = function() {
          return (phrases.prepare(SQL`pragma foreign_keys`)).get();
        }), {
          foreign_keys: 1
        });
        this.eq((Ωbbdbr_173 = function() {
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
        // echo 'Ωbbdbr_174', row for row from phrases.statements.locations_from_keyword.iterate { keyword: 'thought', }
        // echo()
        rows = phrases.statements.locations_from_keyword.iterate({
          keyword: 'thought'
        });
        this.eq((Ωbbdbr_175 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 15,
          keyword: 'thought'
        });
        this.eq((Ωbbdbr_176 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 34,
          keyword: 'thought'
        });
        this.eq((Ωbbdbr_177 = function() {
          return rows.next().value;
        }), void 0);
        //.....................................................................................................
        // echo 'Ωbbdbr_178', row for row from phrases.statements.locations_from_keyword.iterate { keyword: 'she', }
        // echo()
        rows = phrases.statements.locations_from_keyword.iterate({
          keyword: 'she'
        });
        this.eq((Ωbbdbr_179 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 2,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_180 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 3,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_181 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 4,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_182 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 5,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_183 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 15,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_184 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 17,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_185 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 18,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_186 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 26,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_187 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 34,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_188 = function() {
          return rows.next().value;
        }), {
          dskey: 'humdum',
          line_nr: 36,
          keyword: 'she'
        });
        this.eq((Ωbbdbr_189 = function() {
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
      var cfg_do_show_variables, db, freeze, lets, rows, variables, Ωbbdbr_190, Ωbbdbr_191, Ωbbdbr_193, Ωbbdbr_205, Ωbbdbr_223, Ωbbdbr_225, Ωbbdbr_226, Ωbbdbr_227, Ωbbdbr_228, Ωbbdbr_229, Ωbbdbr_230, Ωbbdbr_231;
      ({lets, freeze} = SFMODULES.require_letsfreezethat_infra().simple);
      cfg_do_show_variables = false;
      //=======================================================================================================
      db = Dbric_std.rebuild(':memory:');
      //=======================================================================================================
      this.throws((Ωbbdbr_190 = function() {
        return db.std_with_variables(function() {
          return db.std_with_variables(function() {
            return null;
          });
        });
      }), /illegal to nest `std_with_variables\(\)` contexts/);
      this.throws((Ωbbdbr_191 = function() {
        return db.std_set_variable('myname', 'myvalue');
      }), /illegal to set variable/);
      // @throws ( Ωbbdbr_192 = -> db.std_get_variable 'myname'                            ), /illegal to get variable/
      this.throws((Ωbbdbr_193 = function() {
        return db.std_get_variable('myname');
      }), /unknown variable/);
      //=======================================================================================================
      variables = db._show_variables(cfg_do_show_variables);
      //.......................................................................................................
      db.std_with_variables(() => {
        var Ωbbdbr_194, Ωbbdbr_195, Ωbbdbr_196, Ωbbdbr_197, Ωbbdbr_198, Ωbbdbr_199, Ωbbdbr_200, Ωbbdbr_201;
        this.throws((Ωbbdbr_194 = function() {
          return db.std_get_variable('myname');
        }), /unknown variable/);
        this.eq((Ωbbdbr_195 = function() {
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
        this.eq((Ωbbdbr_196 = function() {
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
        this.eq((Ωbbdbr_197 = function() {
          return db.std_get_next_in_sequence('seq:app:counter');
        }), 10);
        this.eq((Ωbbdbr_198 = function() {
          return db.std_get_next_in_sequence('seq:app:counter');
        }), 13);
        db.std_set_variable('fuzz', 11.5);
        db.std_set_variable('name', 'Bob');
        this.eq((Ωbbdbr_199 = function() {
          return db.std_get_variable('fuzz');
        }), 11.5);
        this.eq((Ωbbdbr_200 = function() {
          return db.std_get_variable('name');
        }), 'Bob');
        this.eq((Ωbbdbr_201 = function() {
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
        var Ωbbdbr_202, Ωbbdbr_204;
        this.eq((Ωbbdbr_202 = function() {
          return db.std_get_variable('name');
        }), 'Alice');
        // debug 'Ωbbdbr_203', { name, job, }
        this.eq((Ωbbdbr_204 = function() {
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
      this.eq((Ωbbdbr_205 = function() {
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
        var Ωbbdbr_206;
        this.eq((Ωbbdbr_206 = function() {
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
        var rows, Ωbbdbr_209, Ωbbdbr_210, Ωbbdbr_211;
        /* Model that shows how to insert sequential RowIDs using a private table, an associated public
             view, and a `instead of insert` trigger: */
        db.std_set_variable('seq:letters', 0, 1);
        db.execute(SQL`create table _letters (
  rowid   text    unique  not null,
  letter  text    unique  not null,
-- primary key ( rowid )
constraint "Ωconstraint_207" check ( length( letter ) = 1 )
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
        // info 'Ωbbdbr_208', row for row from db.walk SQL"select * from letters;"
        rows = db.walk(SQL`select * from letters order by letter;`);
        this.eq((Ωbbdbr_209 = function() {
          return rows.next().value;
        }), {
          rowid: 't:letters:R=1',
          letter: 'a'
        });
        this.eq((Ωbbdbr_210 = function() {
          return rows.next().value;
        }), {
          rowid: 't:letters:R=2',
          letter: 'z'
        });
        this.eq((Ωbbdbr_211 = function() {
          return rows.next().done;
        }), true);
        return null;
      });
      null;
      //.......................................................................................................
      db.std_with_variables(() => {
        var rows, Ωbbdbr_213, Ωbbdbr_214, Ωbbdbr_215;
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
        // info 'Ωbbdbr_212', row for row from db.walk SQL"select * from numbers;"
        rows = db.walk(SQL`select * from numbers order by rowid;`);
        this.eq((Ωbbdbr_213 = function() {
          return rows.next().value;
        }), {
          rowid: 't:numbers:R=1',
          number: 'uno'
        });
        this.eq((Ωbbdbr_214 = function() {
          return rows.next().value;
        }), {
          rowid: 't:numbers:R=2',
          number: 'due'
        });
        this.eq((Ωbbdbr_215 = function() {
          return rows.next().done;
        }), true);
        return null;
      });
      (() => {        //.......................................................................................................
        var insert_letter, rows, Ωbbdbr_216, Ωbbdbr_217, Ωbbdbr_218;
        /* NOTE Model that shows how to build a parametrized view: */
        //.......................................................................................................
        /* repeat earlier test to ensure we know what's there: */
        rows = db.walk(SQL`select * from letters order by letter;`);
        this.eq((Ωbbdbr_216 = function() {
          return rows.next().value;
        }), {
          rowid: 't:letters:R=1',
          letter: 'a'
        });
        this.eq((Ωbbdbr_217 = function() {
          return rows.next().value;
        }), {
          rowid: 't:letters:R=2',
          letter: 'z'
        });
        this.eq((Ωbbdbr_218 = function() {
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
          var result, row, Ωbbdbr_219, Ωbbdbr_220, Ωbbdbr_221;
          result = ((function() {
            var results;
            results = [];
            for (row of db.walk(SQL`select * from run_of_letters order by letter;`)) {
              results.push(row.letter);
            }
            return results;
          })()).join(',');
          variables = db._show_variables(cfg_do_show_variables);
          this.eq((Ωbbdbr_219 = function() {
            return result;
          }), 'g,h,i,j,k,l,m');
          this.eq((Ωbbdbr_220 = function() {
            var ref;
            return (ref = variables.first_letter) != null ? ref.gv : void 0;
          }), 'g');
          this.eq((Ωbbdbr_221 = function() {
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
constraint "Ωconstraint_222" check ( rowid regexp 't:wrd:R=\\d+' ) );`);
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
      this.eq((Ωbbdbr_223 = function() {
        var ref;
        return (ref = variables['seq:prfx_words_rowid']) != null ? ref.gv : void 0;
      }), 700);
      // echo 'Ωbbdbr_224', row for row from db.walk SQL"select * from prfx_words order by de;"
      rows = db.walk(SQL`select * from prfx_words order by de;`);
      this.eq((Ωbbdbr_225 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=600',
        en: 'call',
        de: 'Anruf'
      });
      this.eq((Ωbbdbr_226 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=700',
        en: 'book',
        de: 'Buch'
      });
      this.eq((Ωbbdbr_227 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=200',
        en: 'dog',
        de: 'Hund'
      });
      this.eq((Ωbbdbr_228 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=300',
        en: 'cat',
        de: 'Katze'
      });
      this.eq((Ωbbdbr_229 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=400',
        en: 'word',
        de: 'Wort'
      });
      this.eq((Ωbbdbr_230 = function() {
        return rows.next().value;
      }), {
        rowid: 't:wrd:R=500',
        en: 'call',
        de: 'rufen'
      });
      this.eq((Ωbbdbr_231 = function() {
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
        db = Dbric.rebuild(':memory:');
        (db.prepare(SQL`pragma strict       = on;`)).run();
        db.execute(SQL`create table t ( f integer );`);
        db.execute(SQL`insert into t values ( 1234 );`);
        db.execute(SQL`insert into t values ( 12.34 );`);
        db.execute(SQL`insert into t values ( 'wat' );`);
        // debug 'Ωbbdbr_232', ( row.f for row from db.walk SQL"select f from t;" )
        return null;
      })();
      (() => {        //.......................................................................................................
        var db, Ωbbdbr_233, Ωbbdbr_234, Ωbbdbr_235, Ωbbdbr_236, Ωbbdbr_237, Ωbbdbr_238;
        db = Dbric.rebuild(':memory:');
        (db.prepare(SQL`pragma strict       = on;`)).run();
        this.throws((Ωbbdbr_233 = function() {
          return db.execute(SQL`create table t ( f integer, j json ) strict;`);
        }), /unknown datatype for t\.j/);
        db.execute(SQL`create table t ( f integer, j blob ) strict;`);
        db.execute(SQL`insert into t ( f ) values ( 1234 );`);
        this.eq((Ωbbdbr_234 = function() {
          return (db.get_first(SQL`select typeof( 12    ) as type;`)).type;
        }), 'integer');
        this.eq((Ωbbdbr_235 = function() {
          return (db.get_first(SQL`select typeof( 12.34 ) as type;`)).type;
        }), 'real');
        this.eq((Ωbbdbr_236 = function() {
          return (db.get_first(SQL`select typeof( 'wat' ) as type;`)).type;
        }), 'text');
        this.throws((Ωbbdbr_237 = function() {
          return db.execute(SQL`insert into t ( f ) values ( 12.34 );`);
        }), /cannot store REAL value in INTEGER column/);
        this.throws((Ωbbdbr_238 = function() {
          return db.execute(SQL`insert into t ( f ) values ( 'wat' );`);
        }), /cannot store TEXT value in INTEGER column/);
        // debug 'Ωbbdbr_239', ( row.f for row from db.walk SQL"select f from t;" )
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    dbric_dynamic_build_properties: function() {
      (() => {        //.......................................................................................................
        var Db_1, db, relation_names, row, rows, Ωbbdbr_243, Ωbbdbr_244, Ωbbdbr_245, Ωbbdbr_246, Ωbbdbr_247, Ωbbdbr_248, Ωbbdbr_249;
        Db_1 = (function() {
          class Db_1 extends Dbric_std {};

          Db_1.prefix = 'wrd';

          Db_1.build = [
            function() {
              return SQL`create table ${IDN(`${this.cfg.prefix}_words`)} ( t text );`;
            },
            function() {
              return SQL`insert into ${IDN(`${this.cfg.prefix}_words`)} ( t ) values ( '水 (みず)' );`;
            },
            function() {
              return SQL`insert into ${IDN(`${this.cfg.prefix}_words`)} ( t ) values ( '食べ物 (たべもの)' );`;
            }
          ];

          Db_1.statements = {
            select_words: function() {
              return SQL`select * from ${IDN(`${this.cfg.prefix}_words`)}`;
            }
          };

          return Db_1;

        }).call(this);
        db = Db_1.rebuild();
        relation_names = new Set((function() {
          var results;
          results = [];
          for (row of db.walk(SQL`select * from std_relations;`)) {
            results.push(row.name);
          }
          return results;
        })());
        debug('Ωbbdbr_240', relation_names);
        debug('Ωbbdbr_241', db.constructor.prefix);
        debug('Ωbbdbr_242', db.cfg);
        this.eq((Ωbbdbr_243 = function() {
          return relation_names.has('wrd_words');
        }), true);
        rows = db.walk(SQL`select * from ${IDN(`${Db_1.prefix}_words`)};`);
        this.eq((Ωbbdbr_244 = function() {
          return rows.next().value.t;
        }), '水 (みず)');
        this.eq((Ωbbdbr_245 = function() {
          return rows.next().value.t;
        }), '食べ物 (たべもの)');
        this.eq((Ωbbdbr_246 = function() {
          return rows.next().done;
        }), true);
        rows = db.walk(db.statements.select_words);
        this.eq((Ωbbdbr_247 = function() {
          return rows.next().value.t;
        }), '水 (みず)');
        this.eq((Ωbbdbr_248 = function() {
          return rows.next().value.t;
        }), '食べ物 (たべもの)');
        this.eq((Ωbbdbr_249 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    dbric_plugins_acquisition: function() {
      var Db_1, contributions, contributor, db, function_names, get_all_in_prototype_chain, get_prototype_chain, i, j, len, len1, nbr_number_plugin, other_plugin, r, ref, ref1, ref2, ref3, ref4, result, table_names, text_plugin, type, type_of, Ωbbdbr_250, Ωbbdbr_253, Ωbbdbr_262, Ωbbdbr_263, Ωbbdbr_264, Ωbbdbr_265, Ωbbdbr_266, Ωbbdbr_267, Ωbbdbr_268, Ωbbdbr_269, Ωbbdbr_270, Ωbbdbr_271;
      ({type_of} = (require('../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics')).require_type_of());
      ({get_all_in_prototype_chain, get_prototype_chain} = require('../../../apps/bricabrac-sfmodules/lib/prototype-tools'));
      //-------------------------------------------------------------------------------------------------------
      nbr_number_plugin = {
        name: 'nbr_number_plugin'/* NOTE informative, not enforced */,
        prefix: 'nbr'/* NOTE informative, not enforced */,
        exports: {
          build: [SQL`create table nbr_numbers ( number integer );`],
          statements: {
            nbr_insert_number: SQL`insert into nbr_numbers values ( $number );`,
            nbr_select_numbers: SQL`select * from nbr_numbers order by number;`,
            nbr_select_square_numbers: SQL`select nbr_square( number ) from nbr_numbers order by number;`
          },
          functions: {
            nbr_square: {
              value: function(number) {
                return this.nbr_get_square(number);
              }
            }
          },
          methods: {
            nbr_get_square: function(number) {
              return number ** 2;
            }
          }
        }
      };
      //-------------------------------------------------------------------------------------------------------
      other_plugin = {
        prefix: 'other',
        exports: {
          statements: {
            other_select_wat: SQL`select 1 as wat;`
          }
        }
      };
      //-------------------------------------------------------------------------------------------------------
      text_plugin = {
        name: 'text-plugin',
        prefix: 'txt',
        exports: {
          functions: {
            txt_upper: {
              value: function(text) {
                return text.toUpperCase();
              }
            }
          },
          statements: {
            txt_select_one: SQL`select 1 as one;`
          }
        }
      };
      Db_1 = (function() {
        //=======================================================================================================
        class Db_1 extends Dbric_std {};

        Db_1.prefix = 'db1';

        Db_1.plugins = [other_plugin, 'prototypes', nbr_number_plugin, 'me', text_plugin];

        Db_1.exports = {};

        Db_1.build = [SQL`create table x ( id integer );`];

        Db_1.statements = {
          db1_select_x: SQL`select * from x;`
        };

        Db_1.functions = {
          db1_cube: {
            value: function(x) {
              return x ** 3;
            }
          }
        };

        return Db_1;

      }).call(this);
      //=======================================================================================================
      db = Db_1.rebuild();
      //=======================================================================================================
      result = [];
      ref = db._get_acquisition_chain();
      for (i = 0, len = ref.length; i < len; i++) {
        ({type, contributor} = ref[i]);
        result.push(`[${type}]${(ref1 = contributor.name) != null ? ref1 : '(anonymous)'}`);
      }
      //.......................................................................................................
      this.eq((Ωbbdbr_250 = function() {
        return result;
      }), ['[plugin](anonymous)', '[prototype]Dbric_std_base', '[prototype]Dbric_std_variables', '[prototype]Dbric_std', '[plugin]nbr_number_plugin', '[prototype]Db_1', '[plugin]text-plugin']);
      ref2 = db._get_acquisition_chain();
      for (j = 0, len1 = ref2.length; j < len1; j++) {
        ({type, contributor} = ref2[j]);
        if (type === 'plugin') {
          info('Ωbbdbr_251', `[${type}]${(ref3 = contributor.name) != null ? ref3 : '(anonymous)'}`, Object.keys(contributor.exports));
        } else {
          ((contributor === db.constructor) ? help : urge)('Ωbbdbr_252', `[${type}]${(ref4 = contributor.name) != null ? ref4 : '(anonymous)'}`);
        }
      }
      //=======================================================================================================
      contributions = db._collect_contributor_properties();
      this.eq((Ωbbdbr_253 = function() {
        return (Object.keys(contributions)).sort();
      }), ['aggregate_functions', 'build', 'functions', 'methods', 'statements', 'table_functions', 'virtual_tables', 'window_functions']);
      debug('Ωbbdbr_254', toggle('build:               ', Object.keys(contributions.build)));
      debug('Ωbbdbr_255', toggle('aggregate_functions: ', Object.keys(contributions.aggregate_functions)));
      debug('Ωbbdbr_256', toggle('functions:           ', Object.keys(contributions.functions)));
      debug('Ωbbdbr_257', toggle('methods:             ', Object.keys(contributions.methods)));
      debug('Ωbbdbr_258', toggle('statements:          ', Object.keys(contributions.statements)));
      debug('Ωbbdbr_259', toggle('table_functions:     ', Object.keys(contributions.table_functions)));
      debug('Ωbbdbr_260', toggle('virtual_tables:      ', Object.keys(contributions.virtual_tables)));
      debug('Ωbbdbr_261', toggle('window_functions:    ', Object.keys(contributions.window_functions)));
      //-------------------------------------------------------------------------------------------------------
      this.eq((Ωbbdbr_262 = function() {
        return Object.keys(contributions.functions);
      }), ['regexp', 'std_is_uc_normal', 'std_normalize_text', 'std_normalize_json_object', 'std_get_next_in_sequence', 'std_get_variable', 'nbr_square', 'db1_cube', 'txt_upper']);
      //-------------------------------------------------------------------------------------------------------
      this.eq((Ωbbdbr_263 = function() {
        return Object.keys(contributions.statements);
      }), ['other_select_wat', 'std_get_schema', 'std_get_tables', 'std_get_views', 'std_get_relations', 'std_get_functions', 'std_set_variable', 'std_get_variables', 'nbr_insert_number', 'nbr_select_numbers', 'nbr_select_square_numbers', 'db1_select_x', 'txt_select_one']);
      //=======================================================================================================
      function_names = new Set((function() {
        var results;
        results = [];
        for (r of db.walk(SQL`select name from std_functions;`)) {
          results.push(r.name);
        }
        return results;
      })());
      table_names = new Set((function() {
        var results;
        results = [];
        for (r of db.walk(SQL`select name from std_tables;`)) {
          results.push(r.name);
        }
        return results;
      })());
      this.eq((Ωbbdbr_264 = function() {
        return Reflect.has(db.statements, 'std_get_views');
      }), true);
      this.eq((Ωbbdbr_265 = function() {
        return Reflect.has(db.statements, 'nbr_insert_number');
      }), true);
      this.eq((Ωbbdbr_266 = function() {
        return type_of(db.nbr_get_square);
      }), 'function');
      this.eq((Ωbbdbr_267 = function() {
        return db.nbr_get_square(10);
      }), 100);
      this.eq((Ωbbdbr_268 = function() {
        return function_names.has('nbr_square');
      }), true);
      this.eq((Ωbbdbr_269 = function() {
        return db.get_first(SQL`select nbr_square( 11 ) as s;`);
      }), {
        s: 121
      });
      this.eq((Ωbbdbr_270 = function() {
        return table_names.has('nbr_numbers');
      }), true);
      this.eq((Ωbbdbr_271 = function() {
        return table_names.has('x');
      }), true);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    dbric_hoard_plugin_model: function() {
      var Hoard, Hoard_extras, Hoard_user, Run, Scatter, hoard_plugin, lets, names, row, summarize_data, u, Ωbbdbr_278, Ωbbdbr_279, Ωbbdbr_280, Ωbbdbr_281, Ωbbdbr_282, Ωbbdbr_283, Ωbbdbr_284, Ωbbdbr_285;
      ({Hoard, Scatter, Run, summarize_data, internals} = require('../../../apps/bricabrac-sfmodules/lib/intermission'));
      ({lets} = internals);
      //.......................................................................................................
      hoard_plugin = {
        name: 'hoard',
        prefix: 'hrd',
        exports: {
          //---------------------------------------------------------------------------------------------------
          build: function() {
            var R, cfg;
            //.................................................................................................
            /* TAINT stopgap solution */
            cfg = {
              runs_rowid_regexp: '.+',
              first_point: 0x00_0000,
              last_point: 0x10_ffff
            };
            //.................................................................................................
            R = [];
            //-------------------------------------------------------------------------------------------------
            R.push(SQL`create table hrd_hoard_scatters (
    rowid     text    unique  not null,
    is_hit    boolean         not null default false,
    data      json            not null default 'null'
    );`);
            //-------------------------------------------------------------------------------------------------
            R.push(SQL`create table hrd_hoard_runs (
    rowid     text    unique  not null,
    lo        integer         not null,
    hi        integer         not null,
    scatter   text            not null,
  -- primary key ( rowid ),
  foreign key ( scatter ) references hrd_hoard_scatters ( rowid ),
  constraint "Ωconstraint_272" check ( rowid regexp ${LIT(cfg.runs_rowid_regexp)} ),
  constraint "Ωconstraint_273" check ( lo between ${LIT(cfg.first_point)} and ${LIT(cfg.last_point)} ),
  constraint "Ωconstraint_274" check ( hi between ${LIT(cfg.first_point)} and ${LIT(cfg.last_point)} ),
  constraint "Ωconstraint_275" check ( lo <= hi )
  -- constraint "Ωconstraint_276" check ( rowid regexp '^.*$' )
  );`);
            //-------------------------------------------------------------------------------------------------------
            return R;
          },
          statements: {
            hrd_yyy: SQL`select 1 as n;`,
            hrd_insert_scatter: SQL`insert into hrd_hoard_scatters ( rowid, is_hit, data )
values ( $rowid, $is_hit, $data );`,
            hrd_insert_run: SQL`insert into hrd_hoard_runs ( rowid, lo, hi, scatter )
values ( $rowid, $lo, $hi, $scatter );`
          }
        }
      };
      Hoard_user = (function() {
        //=======================================================================================================
        class Hoard_user extends Dbric_std {};

        Hoard_user.prefix = 'jzr';

        // 'prototypes'
        Hoard_user.plugins = [hoard_plugin];

        return Hoard_user;

      }).call(this);
      //.......................................................................................................
      // 'me'
      u = new Hoard_user({
        rebuild: true
      });
      // debug 'Ωbbdbr_277', row.name for row from u.walk u.statements.std_get_relations
      names = new Set((function() {
        var results;
        results = [];
        for (row of u.walk(u.statements.std_get_relations)) {
          results.push(row.name);
        }
        return results;
      })());
      this.eq((Ωbbdbr_278 = function() {
        return names.has('hrd_hoard_runs');
      }), true);
      this.eq((Ωbbdbr_279 = function() {
        return names.has('hrd_hoard_scatters');
      }), true);
      this.eq((Ωbbdbr_280 = function() {
        return names.has('std_functions');
      }), true);
      this.eq((Ωbbdbr_281 = function() {
        return names.has('std_relations');
      }), true);
      this.eq((Ωbbdbr_282 = function() {
        return names.has('std_tables');
      }), true);
      this.eq((Ωbbdbr_283 = function() {
        return names.has('std_variables');
      }), true);
      this.eq((Ωbbdbr_284 = function() {
        return names.has('std_views');
      }), true);
      this.eq((Ωbbdbr_285 = function() {
        return u.get_all(u.statements.hrd_yyy);
      }), [
        {
          n: 1
        }
      ]);
      //.......................................................................................................
      Hoard_extras = class Hoard_extras extends Hoard {
        //-----------------------------------------------------------------------------------------------------
        constructor(db) {
          super();
          this.db = db;
          this.restore();
          void 0;
        }

        //-----------------------------------------------------------------------------------------------------
        restore() {
          /* TAINT use `Run._from_db_row()` */
          /* TAINT use `Scatter._from_db_row()` */
          var run, scatter, scatters;
          scatters = {};
          for (row of this.db.walk(SQL`select * from hrd_hoard_scatters order by rowid;`)) {
            scatter = new Scatter(this, JSON.parse(row.data), {
              rowid: row.rowid,
              is_normalized: true
            });
            scatters[scatter.rowid] = scatter;
            this.scatters.push(scatter);
          }
          for (row of this.db.walk(SQL`select * from hrd_hoard_runs order by rowid;`)) {
            run = new Run({
              lo: row.lo,
              hi: row.hi
            });
            run.rowid = row.rowid;
            this.state.run_rowid = Math.max(this.state.run_rowid, Number(run.rowid.replace(/^.*=/, '')));
            run.scatter = row.scatter;
            scatters[run.scatter].runs = lets(scatters[run.scatter].runs, function(runs) {
              return runs.push(run);
            });
          }
          return null;
        }

        //-----------------------------------------------------------------------------------------------------
        save() {
          var data, i, is_hit, j, len, len1, ref, ref1, run, scatter;
          ref = this.scatters;
          for (i = 0, len = ref.length; i < len; i++) {
            scatter = ref[i];
            scatter.normalize();
            is_hit = from_bool(true);
            data = JSON.stringify(scatter.data);
            this.db.statements.hrd_insert_scatter.run({...scatter, is_hit, data});
            ref1 = scatter.runs;
            for (j = 0, len1 = ref1.length; j < len1; j++) {
              run = ref1[j];
              this.db.statements.hrd_insert_run.run({...run});
            }
          }
          return null;
        }

      };
      (() => {        //.......................................................................................................
        var ascii, h_1, rows, run, runs, Ωbbdbr_286, Ωbbdbr_287, Ωbbdbr_288, Ωbbdbr_289, Ωbbdbr_290, Ωbbdbr_291, Ωbbdbr_292, Ωbbdbr_293, Ωbbdbr_294, Ωbbdbr_295, Ωbbdbr_296, Ωbbdbr_297, Ωbbdbr_298, Ωbbdbr_299, Ωbbdbr_300;
        h_1 = new Hoard_extras(u);
        ascii = h_1.add_scatter({
          is_ascii_alphanum: true
        });
        this.eq((Ωbbdbr_286 = function() {
          return ascii.rowid;
        }), 't:hrd:scatters,R=1');
        ascii.add_run('a', 'z');
        ascii.add_run('A', 'Z');
        ascii.add_run('0', '9');
        ascii.normalize();
        for (run of runs = (function*() {
          return (yield* ascii.runs);
        })()) {
          echo(run);
        }
        this.eq((Ωbbdbr_287 = function() {
          return h_1.state.run_rowid;
        }), 3);
        //.....................................................................................................
        runs = (function*() {
          return (yield* ascii.runs);
        })();
        this.eq((Ωbbdbr_288 = function() {
          return ascii.rowid;
        }), 't:hrd:scatters,R=1');
        this.eq((Ωbbdbr_289 = function() {
          return runs.next().value;
        }), {
          lo: 48,
          hi: 57,
          rowid: 't:hrd:runs,R=1',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωbbdbr_290 = function() {
          return runs.next().value;
        }), {
          lo: 65,
          hi: 90,
          rowid: 't:hrd:runs,R=2',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωbbdbr_291 = function() {
          return runs.next().value;
        }), {
          lo: 97,
          hi: 122,
          rowid: 't:hrd:runs,R=3',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωbbdbr_292 = function() {
          return runs.next().done;
        }), true);
        this.eq((Ωbbdbr_293 = function() {
          return h_1.summarize_data_for_point('&');
        }), null);
        this.eq((Ωbbdbr_294 = function() {
          return h_1.summarize_data_for_point('a');
        }), {
          is_ascii_alphanum: [true]
        });
        //.....................................................................................................
        h_1.save();
        for (row of rows = u.walk(SQL`select * from hrd_hoard_scatters order by rowid;`)) {
          //.....................................................................................................
          echo(row);
        }
        rows = u.walk(SQL`select * from hrd_hoard_scatters order by rowid;`);
        this.eq((Ωbbdbr_295 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:scatters,R=1',
          is_hit: 1,
          data: '{"is_ascii_alphanum":true}'
        });
        this.eq((Ωbbdbr_296 = function() {
          return rows.next().done;
        }), true);
        for (row of rows = u.walk(SQL`select * from hrd_hoard_runs order by rowid;`)) {
          //.....................................................................................................
          echo(row);
        }
        rows = u.walk(SQL`select * from hrd_hoard_runs order by rowid;`);
        this.eq((Ωbbdbr_297 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs,R=1',
          lo: 48,
          hi: 57,
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωbbdbr_298 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs,R=2',
          lo: 65,
          hi: 90,
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωbbdbr_299 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs,R=3',
          lo: 97,
          hi: 122,
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωbbdbr_300 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var ascii, h_2, ref, run, runs, Ωbbdbr_301, Ωbbdbr_302, Ωbbdbr_303, Ωbbdbr_304, Ωbbdbr_305, Ωbbdbr_306, Ωbbdbr_307, Ωbbdbr_308, Ωbbdbr_309;
        h_2 = new Hoard_extras(u);
        ascii = (ref = h_2.scatters.at(-1)) != null ? ref : {};
        this.eq((Ωbbdbr_301 = function() {
          return ascii.rowid;
        }), 't:hrd:scatters,R=1');
        this.eq((Ωbbdbr_302 = function() {
          return h_2.state.run_rowid;
        }), 3);
        for (run of runs = (function*() {
          var ref1;
          return (yield* ((ref1 = ascii.runs) != null ? ref1 : []));
        })()) {
          echo(run);
        }
        //.....................................................................................................
        runs = (function*() {
          var ref1;
          return (yield* ((ref1 = ascii.runs) != null ? ref1 : []));
        })();
        this.eq((Ωbbdbr_303 = function() {
          return ascii.rowid;
        }), 't:hrd:scatters,R=1');
        this.eq((Ωbbdbr_304 = function() {
          return runs.next().value;
        }), {
          lo: 48,
          hi: 57,
          rowid: 't:hrd:runs,R=1',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωbbdbr_305 = function() {
          return runs.next().value;
        }), {
          lo: 65,
          hi: 90,
          rowid: 't:hrd:runs,R=2',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωbbdbr_306 = function() {
          return runs.next().value;
        }), {
          lo: 97,
          hi: 122,
          rowid: 't:hrd:runs,R=3',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωbbdbr_307 = function() {
          return runs.next().done;
        }), true);
        this.eq((Ωbbdbr_308 = function() {
          return h_2.summarize_data_for_point('&');
        }), null);
        this.eq((Ωbbdbr_309 = function() {
          return h_2.summarize_data_for_point('a');
        }), {
          is_ascii_alphanum: [true]
        });
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    }
  };

  // #---------------------------------------------------------------------------------------------------------
  // _dbric_integration: ->
  //   { Hoard,
  //     summarize_data,           } = require '../../../apps/bricabrac-sfmodules/lib/intermission'
  //   { Dbric,
  //     as_bool,
  //     SQL,
  //     LIT,
  //     IDN,
  //     VEC,
  //     internals,                } = SFMODULES.unstable.require_dbric()
  //   prefix = 'prfx'
  //   debug 'Ωimt_310', Hoard
  //   #.......................................................................................................
  //   get_functions = ( db ) ->
  //     R = {}
  //     for { name, builtin, type, } from db.walk SQL"""select name, builtin, type from pragma_function_list() order by name;"""
  //       is_builtin = as_bool builtin
  //       R[ name ] = { name, is_builtin, type, }
  //     return R
  //   #.......................................................................................................
  //   get_function_names = ( db ) -> new Set ( key for key of get_functions db )
  //   #.......................................................................................................
  //   @eq ( Ωimt_311 = -> type_of Hoard.get_udfs                                    ), 'function'
  //   @eq ( Ωimt_312 = -> type_of Hoard.get_build_statements                        ), 'function'
  //   #.......................................................................................................
  //   @eq ( Ωimt_313 = -> type_of Hoard.get_udfs              { prefix, }           ), 'pod'
  //   @eq ( Ωimt_314 = -> type_of Hoard.get_build_statements  { prefix, }           ), 'list'
  //   #.......................................................................................................
  //   @eq ( Ωimt_315 = -> ( Object.keys Hoard.get_udfs        { prefix, } ).length  ), 3
  //   @eq ( Ωimt_316 = -> ( Hoard.get_build_statements        { prefix, } ).length  ), 3
  //   #.......................................................................................................
  //   {}
  //   udfs              = Hoard.get_udfs { prefix, }
  //   build_statements  = Hoard.get_build_statements { prefix, }
  //   db                = new Dbric ':memory:'
  //   #.......................................................................................................
  //   for name, definition of udfs
  //     info 'Ωimt_317', "create UDF #{definition.name}"
  //     db.create_function definition
  //   debug 'Ωimt_318',  name for name from get_function_names db when name.startsWith "#{prefix}_"
  //   #.......................................................................................................
  //   for statement, idx in build_statements
  //     statement = db.prepare statement
  //     info 'Ωimt_319', statement.run()
  //   #.......................................................................................................
  //   insert_data = db.prepare SQL"""insert into #{IDN "#{prefix}_hoard_scatters"} ( data ) values ( $data )"""
  //   insert_data.run { data: ( JSON.stringify { letter: 'A', arc: true, zeta: false, } ), }
  //   insert_data.run { data: ( JSON.stringify { zeta: false, letter: 'A', arc: true, } ), }
  //   insert_data.run { data: ( JSON.stringify { letter: 'B', arc: true, zeta: false, } ), }
  //   insert_data.run { data: ( JSON.stringify { letter: 'C', arc: true, zeta: false, } ), }
  //   echo { row..., } for row from db.walk SQL"""select * from #{IDN "#{prefix}_hoard_scatters"}"""
  //   echo { row..., } for row from db.walk SQL"""select #{IDN "#{prefix}_normalize_data"}( $data ) as ndata;""", { data: ( JSON.stringify { letter: 'A', arc: true, zeta: false, } ), }
  //   echo { row..., } for row from db.walk SQL"""select #{IDN "#{prefix}_normalize_data"}( $data ) as ndata;""", { data: ( JSON.stringify { zeta: false, letter: 'A', arc: true, } ), }
  //   echo { row..., } for row from db.walk SQL"""select #{IDN "#{prefix}_normalize_data"}( $data ) as ndata;""", { data: ( JSON.stringify { letter: 'B', arc: true, zeta: false, } ), }
  //   echo { row..., } for row from db.walk SQL"""select #{IDN "#{prefix}_normalize_data"}( $data ) as ndata;""", { data: ( JSON.stringify { letter: 'C', arc: true, zeta: false, } ), }
  //   #.......................................................................................................
  //   ;null

  //===========================================================================================================
  demo_using_methods_holder_to_enable_ersatz_super = function() {
    var A, B, Methods_holder, instance, methods, result;
    //---------------------------------------------------------------------------------------------------------
    A = class A {
      f(message) {
        return help('Ωbbdbr_320', rpr(message));
      }

    };
    //---------------------------------------------------------------------------------------------------------
    B = class B extends A {
      _super(name, ...P) {
        return super[name](...P);
      }

    };
    //---------------------------------------------------------------------------------------------------------
    /* NOTE akin to the `methods` property of plugin objects */
    methods = {
      f: function(message) {
        this._super('f', message);
        return 8;
      }
    };
    //---------------------------------------------------------------------------------------------------------
    /* NOTE we form a synthetic class to act as a 'holder' for our methods: */
    Methods_holder = class Methods_holder extends B {};
    instance = new Methods_holder();
    instance.f = methods.f;
    //---------------------------------------------------------------------------------------------------------
    /* NOTE using the Ersatz Super: */
    result = instance.f("my message"); // prints `my message`
    info('Ωbbdbr_321', {result}); // prints `{ result: 8, }`
    //---------------------------------------------------------------------------------------------------------
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var Coverage_analyzer, ca, do_coverage, guytest_cfg, i, len, name, ref, wrap_methods_of_prototypes;
      do_coverage = true;
      do_coverage = false;
      if (do_coverage) {
        ({Coverage_analyzer} = require('../../../apps/bricabrac-sfmodules/lib/coverage-analyzer'));
        ca = new Coverage_analyzer();
        ca.wrap_class(Dbric_std);
      }
      ({wrap_methods_of_prototypes} = require('../../../apps/bricabrac-sfmodules/lib/prototype-tools'));
      // wrap_methods_of_prototypes Dbric_std, ({ fqname, callme, P, }) ->
      //   debug 'Ωbbdbr_322', fqname #, P
      //   return callme()
      // db = new Dbric_std ':memory:', { rebuild: true, }
      //---------------------------------------------------------------------------------------------------------
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
      (new Test(guytest_cfg)).test({tests});
      (new Test(guytest_cfg)).test({
        dbric_hoard_plugin_model: tests.dbric_hoard_plugin_model
      });
      // ( new Test guytest_cfg ).test { dbric_dynamic_build_properties: tests.dbric_dynamic_build_properties, }
      //---------------------------------------------------------------------------------------------------------
      if (do_coverage) {
        if (ca.unused_names.length > 0) {
          ref = ca.unused_names;
          for (i = 0, len = ref.length; i < len; i++) {
            name = ref[i];
            warn('Ωbbdbr_323', "not covered:", reverse(name));
          }
        }
      }
      // help 'Ωbbdbr_324', ca.used_names
      // urge 'Ωbbdbr_325', count, names for count, names of ca.names_by_counts
      //=========================================================================================================
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsZ0RBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxTQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLFlBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLGlCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBekJBOzs7RUEyQkEsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsNENBQVIsQ0FBNUI7O0VBQ0EsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsbUNBQVI7O0VBQzVCLEVBQUEsR0FBNEIsT0FBQSxDQUFRLFNBQVI7O0VBQzVCLElBQUEsR0FBNEIsT0FBQSxDQUFRLFdBQVIsRUFoQzVCOzs7RUFrQ0EsQ0FBQSxDQUFFLEtBQUYsRUFDRSxTQURGLEVBRUUsR0FGRixFQUdFLEdBSEYsRUFJRSxHQUpGLEVBS0UsR0FMRixFQU1FLFNBTkYsRUFPRSxPQVBGLEVBUUUsU0FSRixFQVNFLElBVEYsRUFVRSxLQVZGLEVBV0UsWUFYRixDQUFBLEdBVzRCLE9BQUEsQ0FBUSw2Q0FBUixDQVg1QixFQWxDQTs7O0VBZ0RBLE9BQUEsR0FBVTs7RUFDVixNQUFBLEdBQVMsUUFBQSxDQUFBLEdBQUUsQ0FBRixDQUFBO0lBQ1AsT0FBQSxHQUFVLENBQUUsT0FBQSxHQUFVLENBQVosQ0FBQSxHQUFrQjtBQUM1QixXQUFPLENBQUssT0FBQSxLQUFXLENBQWQsR0FBcUIsSUFBckIsR0FBK0IsSUFBakMsQ0FBQSxDQUF3QyxHQUFBLENBQXhDO0VBRkEsRUFqRFQ7OztFQXNEQSxNQUFBLEdBQVMsUUFBQSxDQUFFLElBQUYsQ0FBQTtBQUNULFFBQUE7QUFBRTtNQUNFLEVBQUUsQ0FBQyxVQUFILENBQWMsSUFBZDtNQUNBLElBQUEsQ0FBSyxZQUFMLEVBQW1CLENBQUEsUUFBQSxDQUFBLENBQVcsR0FBQSxDQUFJLElBQUosQ0FBWCxDQUFBLENBQW5CLEVBRkY7S0FHQSxjQUFBO01BQU07TUFDSixJQUFtQixLQUFLLENBQUMsSUFBTixLQUFjLFFBQWpDO1FBQUEsTUFBTSxNQUFOO09BREY7S0FIRjs7QUFNRSxXQUFPO0VBUEEsRUF0RFQ7OztFQWlFQSxJQUFDLENBQUEsS0FBRCxHQUFTLEtBQUEsR0FHUCxDQUFBOztJQUFBLFVBQUEsRUFBWSxRQUFBLENBQUEsQ0FBQTtBQUNkLFVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUE7O01BQ0ksSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFNBQVMsQ0FBQyxPQUFWLENBQWtCLFlBQWxCO01BQUgsQ0FBZixDQUFSLEVBQWlFLFVBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxHQUFiO01BQUgsQ0FBZixDQUFSLEVBQWlFLEdBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxLQUFiO01BQUgsQ0FBZixDQUFSLEVBQWlFLEdBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxLQUFiO01BQUgsQ0FBZixDQUFSLEVBQWlFLEtBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxPQUFiO01BQUgsQ0FBZixDQUFSLEVBQWlFLEtBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxTQUFiO01BQUgs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QUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFB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TCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQyxNQUEzQztlQUNDO01BbkJBLENBQUEsSUE1QlA7O0FBaURJLGFBQU87SUFsRGdCLENBNWV6Qjs7SUFpaUJBLHdCQUFBLEVBQTBCLFFBQUEsQ0FBQSxDQUFBO0FBQzVCLFVBQUE7TUFDVTs7OztRQUFOLE1BQUEsY0FBQSxRQUE0QixNQUE1QixDQUFBOzs7UUFFRSxhQUFDLENBQUEsS0FBRCxHQUFRO1VBQ04sR0FBRyxDQUFBO3VDQUFBLENBREc7VUFHTixHQUFHLENBQUE7Ozs7V0FBQSxDQUhHOzs7O1FBVVIsYUFBQyxDQUFBLFVBQUQsR0FDRTtVQUFBLGFBQUEsRUFBZSxHQUFHLENBQUE7NkJBQUEsQ0FBbEI7VUFFQSxtQkFBQSxFQUFxQixHQUFHLENBQUE7Ozs7Ozs7V0FBQTtRQUZ4Qjs7O1FBV0YsYUFBQyxDQUFBLFNBQUQsR0FDRTtVQUFBLE1BQUEsRUFDRTtZQUFBLGFBQUEsRUFBZ0IsSUFBaEI7WUFDQSxPQUFBLEVBQWdCLEtBRGhCO1lBRUEsS0FBQSxFQUFpQixNQUFBLEdBQVMsUUFBQSxDQUFFLENBQUYsQ0FBQTtxQkFBUyxDQUFBLElBQUs7WUFBZDtVQUYxQjtRQURGOztRQUlGLGFBQUMsQ0FBQSxtQkFBRCxHQUNFO1VBQUEsT0FBQSxFQUNFO1lBQUEsS0FBQSxFQUFnQixRQUFBLENBQUEsQ0FBQTtxQkFBRztZQUFILENBQWhCO1lBQ0EsSUFBQSxFQUFnQixPQUFBLEdBQVUsUUFBQSxDQUFFLEtBQUYsRUFBUyxPQUFULENBQUEsRUFBQTs7QUFFeEIscUJBQU8saUJBQUUsUUFBUSxDQUFWLENBQUEsR0FBZ0I7WUFGQztVQUQxQjtRQURGOzs7OztNQU1ELENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLFVBQUEsRUFBQTtRQUFNLE9BQUEsR0FBWSxhQUFhLENBQUMsT0FBZCxDQUFBO1FBQ1osS0FBUywwQkFBVDtVQUNFLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQWpDLENBQXFDLENBQUUsQ0FBRixDQUFyQztRQURGLENBRE47OztRQUtNLElBQUEsR0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLE9BQXZDLENBQStDO1VBQUUsS0FBQSxFQUFPLENBQVQ7VUFBWSxJQUFBLEVBQU07UUFBbEIsQ0FBL0M7UUFDUCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVEsQ0FBaEI7VUFBbUIsR0FBQSxFQUFLLENBQXhCO1VBQTJCLFFBQUEsRUFBVTtRQUFyQyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkMsTUFBM0M7ZUFDQztNQVRBLENBQUEsSUFyQ1A7O0FBZ0RJLGFBQU87SUFqRGlCLENBamlCMUI7O0lBcWxCQSw0QkFBQSxFQUE4QixRQUFBLENBQUEsQ0FBQTtBQUNoQyxVQUFBO01BQ1U7O1FBQU4sTUFBQSxjQUFBLFFBQTRCLE1BQTVCLENBQUE7OztRQUVFLGFBQUMsQ0FBQSxLQUFELEdBQVE7VUFDTixHQUFHLENBQUE7MENBQUEsQ0FERzs7OztRQUtSLGFBQUMsQ0FBQSxVQUFELEdBQ0U7VUFBQSxhQUFBLEVBQWUsR0FBRyxDQUFBO2tDQUFBLENBQWxCO1VBRUEsbUJBQUEsRUFBcUIsR0FBRyxDQUFBOzs7OztvQkFBQTtRQUZ4Qjs7O1FBVUYsYUFBQyxDQUFBLGVBQUQsR0FDRTtVQUFBLFVBQUEsRUFDRTtZQUFBLE9BQUEsRUFBYyxDQUFFLE9BQUYsRUFBVyxTQUFYLENBQWQ7WUFDQSxVQUFBLEVBQWMsQ0FBRSxNQUFGLEVBQVUsU0FBVixDQURkO1lBRUEsSUFBQSxFQUFNLFNBQUEsQ0FBRSxJQUFGLEVBQVEsT0FBUixDQUFBO0FBQ2hCLGtCQUFBLEtBQUEsRUFBQTtjQUFZLEtBQUEsR0FBUSxJQUFJLE1BQUosQ0FBVyxPQUFYLEVBQW9CLEdBQXBCO2NBQ1IsS0FBQSw2QkFBQTtnQkFDRSxNQUFNLENBQUUsS0FBSyxDQUFFLENBQUYsQ0FBUCxFQUFjLEtBQUssQ0FBRSxDQUFGLENBQW5CO2NBRFI7QUFFQSxxQkFBTztZQUpIO1VBRk47UUFERjs7Ozs7TUFTRCxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO1FBQU0sT0FBQSxHQUFZLGFBQWEsQ0FBQyxPQUFkLENBQUE7QUFDWjtRQUFBLEtBQUEscUNBQUE7O1VBQ0UsT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBakMsQ0FBcUMsQ0FBRSxNQUFGLENBQXJDO1FBREYsQ0FETjs7Ozs7O1FBUU0sSUFBQSxHQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsT0FBdkMsQ0FBK0M7VUFBRSxPQUFBLEVBQVM7UUFBWCxDQUEvQztRQUNQLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxNQUFBLEVBQVEsUUFBVjtVQUFvQixLQUFBLEVBQU8sSUFBM0I7VUFBaUMsT0FBQSxFQUFTO1FBQTFDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLE1BQUEsRUFBUSxRQUFWO1VBQW9CLEtBQUEsRUFBTyxJQUEzQjtVQUFpQyxPQUFBLEVBQVM7UUFBMUMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsTUFBQSxFQUFRLE1BQVY7VUFBa0IsS0FBQSxFQUFPLElBQXpCO1VBQStCLE9BQUEsRUFBUztRQUF4QyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxNQUFBLEVBQVEsTUFBVjtVQUFrQixLQUFBLEVBQU8sSUFBekI7VUFBK0IsT0FBQSxFQUFTO1FBQXhDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLE1BQUEsRUFBUSxLQUFWO1VBQWlCLEtBQUEsRUFBTyxHQUF4QjtVQUE2QixPQUFBLEVBQVM7UUFBdEMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsTUFBQSxFQUFRLGdCQUFWO1VBQTRCLEtBQUEsRUFBTyxHQUFuQztVQUF3QyxPQUFBLEVBQVM7UUFBakQsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsTUFBQSxFQUFRLGdCQUFWO1VBQTRCLEtBQUEsRUFBTyxLQUFuQztVQUEwQyxPQUFBLEVBQVM7UUFBbkQsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsTUFBQSxFQUFRLGdCQUFWO1VBQTRCLEtBQUEsRUFBTyxJQUFuQztVQUF5QyxPQUFBLEVBQVM7UUFBbEQsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsTUFBQSxFQUFRLE9BQVY7VUFBbUIsS0FBQSxFQUFPLElBQTFCO1VBQWdDLE9BQUEsRUFBUztRQUF6QyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxNQUFBLEVBQVEsT0FBVjtVQUFtQixLQUFBLEVBQU8sSUFBMUI7VUFBZ0MsT0FBQSxFQUFTO1FBQXpDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLE1BQUEsRUFBUSxpQkFBVjtVQUE2QixLQUFBLEVBQU8sS0FBcEM7VUFBMkMsT0FBQSxFQUFTO1FBQXBELENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLE1BQUEsRUFBUSxpQkFBVjtVQUE2QixLQUFBLEVBQU8sSUFBcEM7VUFBMEMsT0FBQSxFQUFTO1FBQW5ELENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQyxNQUEzQztlQUNDO01BdkJBLENBQUEsSUE3QlA7O0FBc0RJLGFBQU87SUF2RHFCLENBcmxCOUI7O0lBK29CQSw2QkFBQSxFQUErQixRQUFBLENBQUEsQ0FBQTtBQUNqQyxVQUFBO01BQ1U7O1FBQU4sTUFBQSxjQUFBLFFBQTRCLE1BQTVCLENBQUE7OztRQUVFLGFBQUMsQ0FBQSxLQUFELEdBQVE7O1VBRU4sR0FBRyxDQUFBOztxQkFBQSxDQUZHOztVQU1OLEdBQUcsQ0FBQTs7Ozs7OEJBQUEsQ0FORzs7VUFhTixHQUFHLENBQUE7Ozs7OzBDQUFBLENBYkc7Ozs7UUFxQlIsYUFBQyxDQUFBLFVBQUQsR0FFRSxDQUFBOztVQUFBLGlCQUFBLEVBQW1CLEdBQUcsQ0FBQTtpREFBQSxDQUF0Qjs7VUFHQSxjQUFBLEVBQWdCLEdBQUcsQ0FBQTttREFBQSxDQUhuQjs7VUFNQSx1QkFBQSxFQUF5QixHQUFHLENBQUEseUNBQUEsQ0FONUI7O1VBUUEsb0JBQUEsRUFBc0IsR0FBRyxDQUFBLHdEQUFBLENBUnpCOztVQVVBLGtCQUFBLEVBQW9CLEdBQUcsQ0FBQSxvQ0FBQTtRQVZ2Qjs7O1FBWUYsYUFBQyxDQUFBLGVBQUQsR0FDRTtVQUFBLFVBQUEsRUFDRTtZQUFBLE9BQUEsRUFBYyxDQUFFLFNBQUYsRUFBYSxNQUFiLENBQWQ7WUFDQSxVQUFBLEVBQWMsQ0FBRSxNQUFGLENBRGQ7WUFFQSxJQUFBLEVBQU0sU0FBQSxDQUFFLElBQUYsQ0FBQTtBQUNoQixrQkFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtjQUFZLEtBQUEsMkNBQUE7aUJBQUk7a0JBQUUsR0FBQSxFQUFLLE9BQVA7a0JBQWdCLElBQWhCO2tCQUFzQjtnQkFBdEI7Z0JBQ0YsTUFBTSxDQUFBLENBQUUsT0FBRixFQUFXLElBQVgsQ0FBQTtjQURSO0FBRUEscUJBQU87WUFISDtVQUZOO1FBREY7Ozs7O01BUUQsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxPQUFBLEVBQUEsUUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFNLE9BQUEsR0FBWSxhQUFhLENBQUMsT0FBZCxDQUFBO1FBQ1osSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFFLE9BQU8sQ0FBQyxPQUFSLENBQWdCLEdBQUcsQ0FBQSxtQkFBQSxDQUFuQixDQUFGLENBQWdELENBQUMsR0FBakQsQ0FBQTtRQUFILENBQWYsQ0FBSixFQUFnRjtVQUFFLFlBQUEsRUFBYztRQUFoQixDQUFoRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBRSxPQUFPLENBQUMsT0FBUixDQUFnQixHQUFHLENBQUEsbUJBQUEsQ0FBbkIsQ0FBRixDQUFnRCxDQUFDLEdBQWpELENBQUE7UUFBSCxDQUFmLENBQUosRUFBZ0Y7VUFBRSxZQUFBLEVBQWM7UUFBaEIsQ0FBaEY7UUFPRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7Ozs7OztBQUNULGNBQUEsS0FBQSxFQUFBO1VBQVEsS0FBQSxHQUFRO1VBQ1IsSUFBQSxHQUFRLElBQUksQ0FBQyxPQUFMLENBQWEsU0FBYixFQUF3QixnREFBeEI7aUJBQ1IsT0FBTyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFyQyxDQUF5QyxDQUFFLEtBQUYsRUFBUyxJQUFULENBQXpDO1FBSEMsQ0FBQSxJQVRUOzs7Ozs7OztRQW9CTSxJQUFBLEdBQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUF0QyxDQUFBO1FBQ1AsS0FBQSx5Q0FBQTtXQUFJLENBQUUsS0FBRixFQUFTLE9BQVQsRUFBa0IsSUFBbEI7VUFDRixRQUFBLEdBQVcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxnREFBWCxFQUFuQjs7VUFFUSxLQUFBLDRDQUFBOztZQUNFLElBQWdCLGVBQWhCO0FBQUEsdUJBQUE7O1lBQ0EsSUFBWSxPQUFBLEtBQVcsRUFBdkI7QUFBQSx1QkFBQTs7WUFDQSxPQUFPLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFsQyxDQUFzQyxDQUFFLEtBQUYsRUFBUyxPQUFULEVBQWtCLE9BQWxCLENBQXRDO1VBSEY7UUFIRixDQXJCTjs7Ozs7ZUFnQ087TUFqQ0EsQ0FBQSxJQS9DUDs7QUFrRkksYUFBTztJQW5Gc0IsQ0Evb0IvQjs7SUFxdUJBLG1DQUFBLEVBQXFDLFFBQUEsQ0FBQSxDQUFBO0FBQ3ZDLFVBQUE7TUFDVTs7UUFBTixNQUFBLGNBQUEsUUFBNEIsTUFBNUIsQ0FBQTs7O1FBRUUsYUFBQyxDQUFBLEtBQUQsR0FBUTs7VUFFTixHQUFHLENBQUE7O3FCQUFBLENBRkc7O1VBTU4sR0FBRyxDQUFBOzs7Ozs4QkFBQSxDQU5HOztVQWFOLEdBQUcsQ0FBQTs7Ozs7MENBQUEsQ0FiRzs7OztRQXFCUixhQUFDLENBQUEsVUFBRCxHQUVFLENBQUE7O1VBQUEsaUJBQUEsRUFBbUIsR0FBRyxDQUFBO2lEQUFBLENBQXRCOztVQUdBLGNBQUEsRUFBZ0IsR0FBRyxDQUFBO21EQUFBLENBSG5COztVQU1BLHVCQUFBLEVBQXlCLEdBQUcsQ0FBQSx5Q0FBQSxDQU41Qjs7VUFRQSxvQkFBQSxFQUFzQixHQUFHLENBQUEsd0RBQUEsQ0FSekI7VUFTQSxzQkFBQSxFQUF3QixHQUFHLENBQUE7O2lDQUFBLENBVDNCOztVQWFBLGtCQUFBLEVBQW9CLEdBQUcsQ0FBQSxvQ0FBQSxDQWJ2Qjs7VUFlQSxpQkFBQSxFQUFtQixHQUFHLENBQUE7Ozs7Ozs7Ozt5QkFBQTtRQWZ0Qjs7O1FBMkJGLGFBQUMsQ0FBQSxlQUFELEdBQ0U7VUFBQSxXQUFBLEVBQ0U7WUFBQSxPQUFBLEVBQWdCLENBQUUsU0FBRixDQUFoQjtZQUNBLFVBQUEsRUFBZ0IsQ0FBRSxNQUFGLENBRGhCO1lBRUEsSUFBQSxFQUFNLFNBQUEsQ0FBRSxJQUFGLENBQUE7QUFDaEIsa0JBQUEsQ0FBQSxFQUFBLE9BQUEsRUFBQSxRQUFBLEVBQUE7Y0FBWSxRQUFBLEdBQVcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxnREFBWCxFQUF2Qjs7Y0FFWSxLQUFBLDBDQUFBOztnQkFDRSxJQUFnQixlQUFoQjtBQUFBLDJCQUFBOztnQkFDQSxJQUFZLE9BQUEsS0FBVyxFQUF2QjtBQUFBLDJCQUFBOztnQkFDQSxNQUFNLENBQUEsQ0FBRSxPQUFGLENBQUE7Y0FIUjtxQkFJQztZQVBHO1VBRk4sQ0FERjs7VUFZQSxVQUFBLEVBQ0U7WUFBQSxPQUFBLEVBQWMsQ0FBRSxTQUFGLEVBQWEsTUFBYixDQUFkO1lBQ0EsVUFBQSxFQUFjLENBQUUsTUFBRixDQURkO1lBRUEsSUFBQSxFQUFNLFNBQUEsQ0FBRSxJQUFGLENBQUE7QUFDaEIsa0JBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7Y0FBWSxLQUFBLDJDQUFBO2lCQUFJO2tCQUFFLEdBQUEsRUFBSyxPQUFQO2tCQUFnQixJQUFoQjtrQkFBc0I7Z0JBQXRCO2dCQUNGLE1BQU0sQ0FBQSxDQUFFLE9BQUYsRUFBVyxJQUFYLENBQUE7Y0FEUjtxQkFFQztZQUhHO1VBRk47UUFiRjs7Ozs7TUFvQkQsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxPQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFNLE9BQUEsR0FBWTtRQUNaLE9BQUEsR0FBWSxhQUFhLENBQUMsT0FBZCxDQUFzQixPQUF0QixFQURsQjs7O1FBSU0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFFLE9BQU8sQ0FBQyxPQUFSLENBQWdCLEdBQUcsQ0FBQSxtQkFBQSxDQUFuQixDQUFGLENBQWdELENBQUMsR0FBakQsQ0FBQTtRQUFILENBQWYsQ0FBSixFQUFnRjtVQUFFLFlBQUEsRUFBYztRQUFoQixDQUFoRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBRSxPQUFPLENBQUMsT0FBUixDQUFnQixHQUFHLENBQUEsbUJBQUEsQ0FBbkIsQ0FBRixDQUFnRCxDQUFDLEdBQWpELENBQUE7UUFBSCxDQUFmLENBQUosRUFBZ0Y7VUFBRSxZQUFBLEVBQWM7UUFBaEIsQ0FBaEY7UUFFRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxjQUFBLEtBQUEsRUFBQTtVQUFRLEtBQUEsR0FBUTtVQUNSLElBQUEsR0FBUSxJQUFJLENBQUMsT0FBTCxDQUFhLFNBQWIsRUFBd0IsNENBQXhCO2lCQUNSLE9BQU8sQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsR0FBckMsQ0FBeUMsQ0FBRSxLQUFGLEVBQVMsSUFBVCxDQUF6QztRQUhDLENBQUEsSUFQVDs7UUFZTSxPQUFPLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEdBQXJDLENBQUEsRUFaTjs7OztRQWdCTSxJQUFBLEdBQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUExQyxDQUFrRDtVQUFFLE9BQUEsRUFBUztRQUFYLENBQWxEO1FBQ1AsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLEtBQUEsRUFBTyxRQUFUO1VBQW1CLE9BQUEsRUFBUyxFQUE1QjtVQUFnQyxPQUFBLEVBQVM7UUFBekMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsS0FBQSxFQUFPLFFBQVQ7VUFBbUIsT0FBQSxFQUFTLEVBQTVCO1VBQWdDLE9BQUEsRUFBUztRQUF6QyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkMsTUFBM0MsRUFuQk47Ozs7UUF1Qk0sSUFBQSxHQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsT0FBMUMsQ0FBa0Q7VUFBRSxPQUFBLEVBQVM7UUFBWCxDQUFsRDtRQUNQLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sUUFBVDtVQUFtQixPQUFBLEVBQVMsQ0FBNUI7VUFBK0IsT0FBQSxFQUFTO1FBQXhDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLEtBQUEsRUFBTyxRQUFUO1VBQW1CLE9BQUEsRUFBUyxDQUE1QjtVQUErQixPQUFBLEVBQVM7UUFBeEMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsS0FBQSxFQUFPLFFBQVQ7VUFBbUIsT0FBQSxFQUFTLENBQTVCO1VBQStCLE9BQUEsRUFBUztRQUF4QyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sUUFBVDtVQUFtQixPQUFBLEVBQVMsQ0FBNUI7VUFBK0IsT0FBQSxFQUFTO1FBQXhDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLEtBQUEsRUFBTyxRQUFUO1VBQW1CLE9BQUEsRUFBUyxFQUE1QjtVQUFnQyxPQUFBLEVBQVM7UUFBekMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsS0FBQSxFQUFPLFFBQVQ7VUFBbUIsT0FBQSxFQUFTLEVBQTVCO1VBQWdDLE9BQUEsRUFBUztRQUF6QyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sUUFBVDtVQUFtQixPQUFBLEVBQVMsRUFBNUI7VUFBZ0MsT0FBQSxFQUFTO1FBQXpDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLEtBQUEsRUFBTyxRQUFUO1VBQW1CLE9BQUEsRUFBUyxFQUE1QjtVQUFnQyxPQUFBLEVBQVM7UUFBekMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsS0FBQSxFQUFPLFFBQVQ7VUFBbUIsT0FBQSxFQUFTLEVBQTVCO1VBQWdDLE9BQUEsRUFBUztRQUF6QyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sUUFBVDtVQUFtQixPQUFBLEVBQVMsRUFBNUI7VUFBZ0MsT0FBQSxFQUFTO1FBQXpDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQyxNQUEzQyxFQWxDTjs7ZUFvQ087TUFyQ0EsQ0FBQSxJQTFFUDs7QUFpSEksYUFBTztJQWxINEIsQ0FydUJyQzs7SUEwMUJBLGlDQUFBLEVBQW1DLFFBQUEsQ0FBQSxDQUFBO0FBQ3JDLFVBQUEscUJBQUEsRUFBQSxFQUFBLEVBQUEsTUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsSUFBRixFQUNFLE1BREYsQ0FBQSxHQUNnQyxTQUFTLENBQUMsNEJBQVYsQ0FBQSxDQUF3QyxDQUFDLE1BRHpFO01BRUEscUJBQUEsR0FBZ0MsTUFGcEM7O01BSUksRUFBQSxHQUFLLFNBQVMsQ0FBQyxPQUFWLENBQWtCLFVBQWxCLEVBSlQ7O01BTUksSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLEVBQUUsQ0FBQyxrQkFBSCxDQUFzQixRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFFLENBQUMsa0JBQUgsQ0FBc0IsUUFBQSxDQUFBLENBQUE7bUJBQUc7VUFBSCxDQUF0QjtRQUFILENBQXRCO01BQUgsQ0FBZixDQUFSLEVBQXFGLG1EQUFyRjtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxFQUFFLENBQUMsZ0JBQUgsQ0FBb0IsUUFBcEIsRUFBOEIsU0FBOUI7TUFBSCxDQUFmLENBQVIsRUFBcUYseUJBQXJGLEVBUEo7O01BU0ksSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixRQUFwQjtNQUFILENBQWYsQ0FBUixFQUFxRixrQkFBckYsRUFUSjs7TUFXSSxTQUFBLEdBQWEsRUFBRSxDQUFDLGVBQUgsQ0FBbUIscUJBQW5CLEVBWGpCOztNQWFJLEVBQUUsQ0FBQyxrQkFBSCxDQUFzQixDQUFBLENBQUEsR0FBQTtBQUMxQixZQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFNLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsRUFBRSxDQUFDLGdCQUFILENBQW9CLFFBQXBCO1FBQUgsQ0FBZixDQUFSLEVBQTBELGtCQUExRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUksRUFBRSxDQUFDLGVBQUgsQ0FBbUIscUJBQW5CO1FBQUosQ0FBZixDQUFKLEVBQXFFO1VBQUUsa0JBQUEsRUFBb0I7WUFBRSxFQUFBLEVBQUksQ0FBTjtZQUFTLEVBQUEsRUFBSSxDQUFiO1lBQWdCLEVBQUEsRUFBSSxDQUFwQjtZQUF1QixFQUFBLEVBQUksQ0FBM0I7WUFBOEIsRUFBQSxFQUFJLE1BQWxDO1lBQTZDLEVBQUEsRUFBSTtVQUFqRDtRQUF0QixDQUFyRSxFQUROOztRQUdNLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBVCxHQUF5QixJQUFBLENBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFkLEVBQTZCLFFBQUEsQ0FBRSxDQUFGLENBQUE7aUJBQ3BELENBQUMsQ0FBRSxpQkFBRixDQUFELEdBQXlCO1lBQUUsSUFBQSxFQUFNLGlCQUFSO1lBQTJCLEtBQUEsRUFBTyxDQUFsQztZQUFxQyxLQUFBLEVBQU8sQ0FBQztVQUE3QztRQUQyQixDQUE3QjtRQUV6QixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFJLEVBQUUsQ0FBQyxlQUFILENBQW1CLHFCQUFuQjtRQUFKLENBQWYsQ0FBSixFQUFxRTtVQUFFLGlCQUFBLEVBQW1CO1lBQUUsRUFBQSxFQUFJLE1BQU47WUFBaUIsRUFBQSxFQUFJLE1BQXJCO1lBQWdDLEVBQUEsRUFBSSxDQUFwQztZQUF1QyxFQUFBLEVBQUksQ0FBM0M7WUFBOEMsRUFBQSxFQUFJLE1BQWxEO1lBQTZELEVBQUEsRUFBSTtVQUFqRSxDQUFyQjtVQUEyRixrQkFBQSxFQUFvQjtZQUFFLEVBQUEsRUFBSSxDQUFOO1lBQVMsRUFBQSxFQUFJLENBQWI7WUFBZ0IsRUFBQSxFQUFJLENBQXBCO1lBQXVCLEVBQUEsRUFBSSxDQUEzQjtZQUE4QixFQUFBLEVBQUksTUFBbEM7WUFBNkMsRUFBQSxFQUFJO1VBQWpEO1FBQS9HLENBQXJFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFFLENBQUMsd0JBQUgsQ0FBNEIsaUJBQTVCO1FBQUgsQ0FBZixDQUFKLEVBQXVFLEVBQXZFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFFLENBQUMsd0JBQUgsQ0FBNEIsaUJBQTVCO1FBQUgsQ0FBZixDQUFKLEVBQXVFLEVBQXZFO1FBQ0EsRUFBRSxDQUFDLGdCQUFILENBQW9CLE1BQXBCLEVBQTRCLElBQTVCO1FBQ0EsRUFBRSxDQUFDLGdCQUFILENBQW9CLE1BQXBCLEVBQTRCLEtBQTVCO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFFLENBQUMsZ0JBQUgsQ0FBb0IsTUFBcEI7UUFBSCxDQUFmLENBQUosRUFBb0QsSUFBcEQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixNQUFwQjtRQUFILENBQWYsQ0FBSixFQUFvRCxLQUFwRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUksRUFBRSxDQUFDLGVBQUgsQ0FBbUIscUJBQW5CO1FBQUosQ0FBZixDQUFKLEVBQXFFO1VBQUUsSUFBQSxFQUFNO1lBQUUsRUFBQSxFQUFJLE1BQU47WUFBaUIsRUFBQSxFQUFJLE1BQXJCO1lBQWdDLEVBQUEsRUFBSSxJQUFwQztZQUEwQyxFQUFBLEVBQUksSUFBOUM7WUFBb0QsRUFBQSxFQUFJLE1BQXhEO1lBQW1FLEVBQUEsRUFBSTtVQUF2RSxDQUFSO1VBQXdGLElBQUEsRUFBTTtZQUFFLEVBQUEsRUFBSSxNQUFOO1lBQWlCLEVBQUEsRUFBSSxNQUFyQjtZQUFnQyxFQUFBLEVBQUksS0FBcEM7WUFBMkMsRUFBQSxFQUFJLElBQS9DO1lBQXFELEVBQUEsRUFBSSxNQUF6RDtZQUFvRSxFQUFBLEVBQUk7VUFBeEUsQ0FBOUY7VUFBK0ssaUJBQUEsRUFBbUI7WUFBRSxFQUFBLEVBQUksTUFBTjtZQUFpQixFQUFBLEVBQUksTUFBckI7WUFBZ0MsRUFBQSxFQUFJLEVBQXBDO1lBQXdDLEVBQUEsRUFBSSxDQUE1QztZQUErQyxFQUFBLEVBQUksTUFBbkQ7WUFBOEQsRUFBQSxFQUFJO1VBQWxFLENBQWxNO1VBQTBRLGtCQUFBLEVBQW9CO1lBQUUsRUFBQSxFQUFJLENBQU47WUFBUyxFQUFBLEVBQUksQ0FBYjtZQUFnQixFQUFBLEVBQUksQ0FBcEI7WUFBdUIsRUFBQSxFQUFJLENBQTNCO1lBQThCLEVBQUEsRUFBSSxNQUFsQztZQUE2QyxFQUFBLEVBQUk7VUFBakQ7UUFBOVIsQ0FBckU7ZUFDQztNQWRtQixDQUF0QixFQWJKOztNQTZCSSxFQUFFLENBQUMsa0JBQUgsQ0FBc0I7UUFBRSxJQUFBLEVBQU0sT0FBUjtRQUFpQixHQUFBLEVBQUs7TUFBdEIsQ0FBdEIsRUFBMkQsQ0FBQSxDQUFBLEdBQUE7QUFDL0QsWUFBQSxVQUFBLEVBQUE7UUFBTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixNQUFwQjtRQUFILENBQWYsQ0FBSixFQUFvRCxPQUFwRCxFQUFOOztRQUVNLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUksRUFBRSxDQUFDLGVBQUgsQ0FBbUIscUJBQW5CO1FBQUosQ0FBZixDQUFKLEVBQXFFO1VBQUUsSUFBQSxFQUFNO1lBQUUsRUFBQSxFQUFJLElBQU47WUFBWSxFQUFBLEVBQUksSUFBaEI7WUFBc0IsRUFBQSxFQUFJLElBQTFCO1lBQWdDLEVBQUEsRUFBSSxJQUFwQztZQUEwQyxFQUFBLEVBQUksTUFBOUM7WUFBeUQsRUFBQSxFQUFJO1VBQTdELENBQVI7VUFBNkUsR0FBQSxFQUFLO1lBQUUsRUFBQSxFQUFJLE1BQU47WUFBaUIsRUFBQSxFQUFJLE1BQXJCO1lBQWdDLEVBQUEsRUFBSSxNQUFwQztZQUErQyxFQUFBLEVBQUksTUFBbkQ7WUFBOEQsRUFBQSxFQUFJLFVBQWxFO1lBQThFLEVBQUEsRUFBSTtVQUFsRixDQUFsRjtVQUFrTCxJQUFBLEVBQU07WUFBRSxFQUFBLEVBQUksT0FBTjtZQUFlLEVBQUEsRUFBSSxJQUFuQjtZQUF5QixFQUFBLEVBQUksS0FBN0I7WUFBb0MsRUFBQSxFQUFJLElBQXhDO1lBQThDLEVBQUEsRUFBSSxPQUFsRDtZQUEyRCxFQUFBLEVBQUk7VUFBL0QsQ0FBeEw7VUFBa1EsaUJBQUEsRUFBbUI7WUFBRSxFQUFBLEVBQUksRUFBTjtZQUFVLEVBQUEsRUFBSSxDQUFkO1lBQWlCLEVBQUEsRUFBSSxFQUFyQjtZQUF5QixFQUFBLEVBQUksQ0FBN0I7WUFBZ0MsRUFBQSxFQUFJLE1BQXBDO1lBQStDLEVBQUEsRUFBSTtVQUFuRCxDQUFyUjtVQUE4VSxrQkFBQSxFQUFvQjtZQUFFLEVBQUEsRUFBSSxDQUFOO1lBQVMsRUFBQSxFQUFJLENBQWI7WUFBZ0IsRUFBQSxFQUFJLENBQXBCO1lBQXVCLEVBQUEsRUFBSSxDQUEzQjtZQUE4QixFQUFBLEVBQUksTUFBbEM7WUFBNkMsRUFBQSxFQUFJO1VBQWpEO1FBQWxXLENBQXJFO2VBQ0M7TUFKd0QsQ0FBM0QsRUE3Qko7O01BbUNJLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBSSxFQUFFLENBQUMsZUFBSCxDQUFtQixxQkFBbkI7TUFBSixDQUFmLENBQUosRUFBcUU7UUFBRSxJQUFBLEVBQU07VUFBRSxFQUFBLEVBQUksSUFBTjtVQUFZLEVBQUEsRUFBSSxJQUFoQjtVQUFzQixFQUFBLEVBQUksSUFBMUI7VUFBZ0MsRUFBQSxFQUFJLElBQXBDO1VBQTBDLEVBQUEsRUFBSSxNQUE5QztVQUF5RCxFQUFBLEVBQUk7UUFBN0QsQ0FBUjtRQUE2RSxJQUFBLEVBQU07VUFBRSxFQUFBLEVBQUksT0FBTjtVQUFlLEVBQUEsRUFBSSxJQUFuQjtVQUF5QixFQUFBLEVBQUksS0FBN0I7VUFBb0MsRUFBQSxFQUFJLElBQXhDO1VBQThDLEVBQUEsRUFBSSxNQUFsRDtVQUE2RCxFQUFBLEVBQUk7UUFBakUsQ0FBbkY7UUFBNkosaUJBQUEsRUFBbUI7VUFBRSxFQUFBLEVBQUksRUFBTjtVQUFVLEVBQUEsRUFBSSxDQUFkO1VBQWlCLEVBQUEsRUFBSSxFQUFyQjtVQUF5QixFQUFBLEVBQUksQ0FBN0I7VUFBZ0MsRUFBQSxFQUFJLE1BQXBDO1VBQStDLEVBQUEsRUFBSTtRQUFuRCxDQUFoTDtRQUF5TyxrQkFBQSxFQUFvQjtVQUFFLEVBQUEsRUFBSSxDQUFOO1VBQVMsRUFBQSxFQUFJLENBQWI7VUFBZ0IsRUFBQSxFQUFJLENBQXBCO1VBQXVCLEVBQUEsRUFBSSxDQUEzQjtVQUE4QixFQUFBLEVBQUksTUFBbEM7VUFBNkMsRUFBQSxFQUFJO1FBQWpEO01BQTdQLENBQXJFO01BQ0EsRUFBRSxDQUFDLGtCQUFILENBQXNCLENBQUEsQ0FBQSxHQUFBO0FBQzFCLFlBQUE7UUFBTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFJLEVBQUUsQ0FBQyxlQUFILENBQW1CLHFCQUFuQjtRQUFKLENBQWYsQ0FBSixFQUFxRTtVQUFFLElBQUEsRUFBTTtZQUFFLEVBQUEsRUFBSSxJQUFOO1lBQVksRUFBQSxFQUFJLElBQWhCO1lBQXNCLEVBQUEsRUFBSSxJQUExQjtZQUFnQyxFQUFBLEVBQUksSUFBcEM7WUFBMEMsRUFBQSxFQUFJLE1BQTlDO1lBQXlELEVBQUEsRUFBSTtVQUE3RCxDQUFSO1VBQTZFLElBQUEsRUFBTTtZQUFFLEVBQUEsRUFBSSxPQUFOO1lBQWUsRUFBQSxFQUFJLElBQW5CO1lBQXlCLEVBQUEsRUFBSSxLQUE3QjtZQUFvQyxFQUFBLEVBQUksSUFBeEM7WUFBOEMsRUFBQSxFQUFJLE1BQWxEO1lBQTZELEVBQUEsRUFBSTtVQUFqRSxDQUFuRjtVQUE2SixpQkFBQSxFQUFtQjtZQUFFLEVBQUEsRUFBSSxFQUFOO1lBQVUsRUFBQSxFQUFJLENBQWQ7WUFBaUIsRUFBQSxFQUFJLEVBQXJCO1lBQXlCLEVBQUEsRUFBSSxDQUE3QjtZQUFnQyxFQUFBLEVBQUksTUFBcEM7WUFBK0MsRUFBQSxFQUFJO1VBQW5ELENBQWhMO1VBQXlPLGtCQUFBLEVBQW9CO1lBQUUsRUFBQSxFQUFJLENBQU47WUFBUyxFQUFBLEVBQUksQ0FBYjtZQUFnQixFQUFBLEVBQUksQ0FBcEI7WUFBdUIsRUFBQSxFQUFJLENBQTNCO1lBQThCLEVBQUEsRUFBSSxNQUFsQztZQUE2QyxFQUFBLEVBQUk7VUFBakQ7UUFBN1AsQ0FBckU7ZUFDQztNQUZtQixDQUF0QixFQXBDSjs7TUF3Q0ksRUFBRSxDQUFDLGtCQUFILENBQXNCLENBQUEsQ0FBQSxHQUFBO0FBQzFCLFlBQUEsSUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQTs7O1FBRU0sRUFBRSxDQUFDLGdCQUFILENBQW9CLGFBQXBCLEVBQW1DLENBQW5DLEVBQXNDLENBQXRDO1FBQ0EsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUE7Ozs7O1NBQUEsQ0FBZDtRQU1BLEVBQUUsQ0FBQyxPQUFILENBQVcsR0FBRyxDQUFBLDhDQUFBLENBQWQ7UUFDQSxFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQTs7Ozs7OztDQUFBLENBQWQ7UUFRQSxFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQSx1REFBQSxDQUFkLEVBbEJOOztRQW9CTSxJQUFBLEdBQU8sRUFBRSxDQUFDLElBQUgsQ0FBUSxHQUFHLENBQUEsc0NBQUEsQ0FBWDtRQUNQLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sZUFBVDtVQUEwQixNQUFBLEVBQVE7UUFBbEMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsS0FBQSxFQUFPLGVBQVQ7VUFBMEIsTUFBQSxFQUFRO1FBQWxDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEwQyxJQUExQztlQUNDO01BekJtQixDQUF0QjtNQTBCQyxLQWxFTDs7TUFvRUksRUFBRSxDQUFDLGtCQUFILENBQXNCLENBQUEsQ0FBQSxHQUFBO0FBQzFCLFlBQUEsSUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQTs7O1FBRU0sRUFBRSxDQUFDLGdCQUFILENBQW9CLGFBQXBCLEVBQW1DLENBQW5DLEVBQXNDLENBQXRDO1FBQ0EsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUE7OztTQUFBLENBQWQ7UUFJQSxFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQTs7Ozs7Q0FBQSxDQUFkO1FBTUEsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUEsMkRBQUEsQ0FBZCxFQWJOOztRQWVNLElBQUEsR0FBTyxFQUFFLENBQUMsSUFBSCxDQUFRLEdBQUcsQ0FBQSxxQ0FBQSxDQUFYO1FBQ1AsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLEtBQUEsRUFBTyxlQUFUO1VBQTBCLE1BQUEsRUFBUTtRQUFsQyxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sZUFBVDtVQUEwQixNQUFBLEVBQVE7UUFBbEMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTBDLElBQTFDO2VBQ0M7TUFwQm1CLENBQXRCO01Bc0JHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsYUFBQSxFQUFBLElBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUE7Ozs7UUFHTSxJQUFBLEdBQU8sRUFBRSxDQUFDLElBQUgsQ0FBUSxHQUFHLENBQUEsc0NBQUEsQ0FBWDtRQUNQLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sZUFBVDtVQUEwQixNQUFBLEVBQVE7UUFBbEMsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsS0FBQSxFQUFPLGVBQVQ7VUFBMEIsTUFBQSxFQUFRO1FBQWxDLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEwQyxJQUExQyxFQU5OOztRQVFNLGFBQUEsR0FBZ0IsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUEsa0RBQUEsQ0FBZCxFQVJ0Qjs7UUFVTSxFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQTs7OztnR0FBQSxDQUFkLEVBVk47O1FBZ0JNLEVBQUUsQ0FBQyxrQkFBSCxDQUFzQixDQUFBLENBQUEsR0FBQTtBQUM1QixjQUFBLEdBQUEsRUFBQSxDQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUE7QUFBUTtVQUFBLEtBQVcsbUlBQVg7WUFDRSxNQUFBLEdBQVMsTUFBTSxDQUFDLGFBQVAsQ0FBcUIsR0FBckI7eUJBQ1QsYUFBYSxDQUFDLEdBQWQsQ0FBa0IsQ0FBRSxNQUFGLENBQWxCO1VBRkYsQ0FBQTs7UUFEb0IsQ0FBdEIsRUFoQk47O2VBcUJNLEVBQUUsQ0FBQyxrQkFBSCxDQUFzQjtVQUFFLFlBQUEsRUFBYyxHQUFoQjtVQUFxQixXQUFBLEVBQWE7UUFBbEMsQ0FBdEIsRUFBK0QsQ0FBQSxDQUFBLEdBQUE7QUFDckUsY0FBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7VUFBUSxNQUFBLEdBQVk7O0FBQUU7WUFBQSxLQUFBLGtFQUFBOzJCQUFBLEdBQUcsQ0FBQztZQUFKLENBQUE7O2NBQUYsQ0FBc0YsQ0FBQyxJQUF2RixDQUE0RixHQUE1RjtVQUNaLFNBQUEsR0FBYSxFQUFFLENBQUMsZUFBSCxDQUFtQixxQkFBbkI7VUFDYixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHO1VBQUgsQ0FBZixDQUFKLEVBQXFELGVBQXJEO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtBQUFFLGdCQUFBOytEQUF1QixDQUFFO1VBQTNCLENBQWYsQ0FBSixFQUFxRCxHQUFyRDtVQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7QUFBRSxnQkFBQTs4REFBc0IsQ0FBRTtVQUExQixDQUFmLENBQUosRUFBcUQsR0FBckQ7aUJBQ0M7UUFONEQsQ0FBL0Q7TUF0QkMsQ0FBQTtNQThCQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7O0FBQ1AsWUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7O1FBZU0sRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUE7Ozs7O3FFQUFBLENBQWQ7UUFPQSxhQUFBLEdBQWdCLEVBQUUsQ0FBQyxPQUFILENBQVcsR0FBRyxDQUFBOzs7TUFBQSxDQUFkLEVBdEJ0Qjs7O1FBNEJNLEVBQUUsQ0FBQyxrQkFBSCxDQUFzQixDQUFBLENBQUEsR0FBQTtVQUNwQixFQUFFLENBQUMsZ0JBQUgsQ0FBb0Isc0JBQXBCLEVBQTRDLEdBQTVDLEVBQWlELENBQUMsR0FBbEQ7aUJBQ0M7UUFGbUIsQ0FBdEIsRUE1Qk47OztlQWlDTSxFQUFFLENBQUMsa0JBQUgsQ0FBc0IsQ0FBQSxDQUFBLEdBQUE7VUFDcEIsYUFBYSxDQUFDLEdBQWQsQ0FBa0I7WUFBRSxFQUFBLEVBQUksS0FBTjtZQUFjLEVBQUEsRUFBSTtVQUFsQixDQUFsQjtVQUNBLGFBQWEsQ0FBQyxHQUFkLENBQWtCO1lBQUUsRUFBQSxFQUFJLEtBQU47WUFBYyxFQUFBLEVBQUk7VUFBbEIsQ0FBbEI7VUFDQSxhQUFhLENBQUMsR0FBZCxDQUFrQjtZQUFFLEVBQUEsRUFBSSxNQUFOO1lBQWMsRUFBQSxFQUFJO1VBQWxCLENBQWxCO1VBQ0EsYUFBYSxDQUFDLEdBQWQsQ0FBa0I7WUFBRSxFQUFBLEVBQUksTUFBTjtZQUFjLEVBQUEsRUFBSTtVQUFsQixDQUFsQjtVQUNBLGFBQWEsQ0FBQyxHQUFkLENBQWtCO1lBQUUsRUFBQSxFQUFJLE1BQU47WUFBYyxFQUFBLEVBQUk7VUFBbEIsQ0FBbEI7VUFDQSxhQUFhLENBQUMsR0FBZCxDQUFrQjtZQUFFLEVBQUEsRUFBSSxNQUFOO1lBQWMsRUFBQSxFQUFJO1VBQWxCLENBQWxCO2lCQUNDO1FBUG1CLENBQXRCO01BbENDLENBQUEsSUF4SFA7O01BbUtJLFNBQUEsR0FBYSxFQUFFLENBQUMsZUFBSCxDQUFtQixxQkFBbkI7TUFDYixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO0FBQUUsWUFBQTtzRUFBb0MsQ0FBRTtNQUF4QyxDQUFmLENBQUosRUFBa0UsR0FBbEUsRUFwS0o7O01Bc0tJLElBQUEsR0FBTyxFQUFFLENBQUMsSUFBSCxDQUFRLEdBQUcsQ0FBQSxxQ0FBQSxDQUFYO01BQ1AsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO01BQWYsQ0FBZixDQUFKLEVBQTJDO1FBQUUsS0FBQSxFQUFPLGFBQVQ7UUFBd0IsRUFBQSxFQUFJLE1BQTVCO1FBQW9DLEVBQUEsRUFBSTtNQUF4QyxDQUEzQztNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztNQUFmLENBQWYsQ0FBSixFQUEyQztRQUFFLEtBQUEsRUFBTyxhQUFUO1FBQXdCLEVBQUEsRUFBSSxNQUE1QjtRQUFvQyxFQUFBLEVBQUk7TUFBeEMsQ0FBM0M7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7TUFBZixDQUFmLENBQUosRUFBMkM7UUFBRSxLQUFBLEVBQU8sYUFBVDtRQUF3QixFQUFBLEVBQUksS0FBNUI7UUFBbUMsRUFBQSxFQUFJO01BQXZDLENBQTNDO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO01BQWYsQ0FBZixDQUFKLEVBQTJDO1FBQUUsS0FBQSxFQUFPLGFBQVQ7UUFBd0IsRUFBQSxFQUFJLEtBQTVCO1FBQW1DLEVBQUEsRUFBSTtNQUF2QyxDQUEzQztNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztNQUFmLENBQWYsQ0FBSixFQUEyQztRQUFFLEtBQUEsRUFBTyxhQUFUO1FBQXdCLEVBQUEsRUFBSSxNQUE1QjtRQUFvQyxFQUFBLEVBQUk7TUFBeEMsQ0FBM0M7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7TUFBZixDQUFmLENBQUosRUFBMkM7UUFBRSxLQUFBLEVBQU8sYUFBVDtRQUF3QixFQUFBLEVBQUksTUFBNUI7UUFBb0MsRUFBQSxFQUFJO01BQXhDLENBQTNDO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO01BQWYsQ0FBZixDQUFKLEVBQTBDLElBQTFDO2FBQ0M7SUEvS2dDLENBMTFCbkM7O0lBNGdDQSxpQkFBQSxFQUFtQixRQUFBLENBQUEsQ0FBQTtBQUNyQixVQUFBLE1BQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxJQUFGLEVBQ0UsTUFERixDQUFBLEdBQ2dDLFNBQVMsQ0FBQyw0QkFBVixDQUFBLENBQXdDLENBQUMsTUFEekU7TUFHRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBO1FBQU0sRUFBQSxHQUFLLEtBQUssQ0FBQyxPQUFOLENBQWMsVUFBZDtRQUNMLENBQUUsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUEseUJBQUEsQ0FBZCxDQUFGLENBQWdELENBQUMsR0FBakQsQ0FBQTtRQUNBLEVBQUUsQ0FBQyxPQUFILENBQVcsR0FBRyxDQUFBLDZCQUFBLENBQWQ7UUFDQSxFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQSw4QkFBQSxDQUFkO1FBQ0EsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUEsK0JBQUEsQ0FBZDtRQUNBLEVBQUUsQ0FBQyxPQUFILENBQVcsR0FBRyxDQUFBLCtCQUFBLENBQWQsRUFMTjs7ZUFPTztNQVJBLENBQUE7TUFVQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLEVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO1FBQU0sRUFBQSxHQUFLLEtBQUssQ0FBQyxPQUFOLENBQWMsVUFBZDtRQUNMLENBQUUsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUEseUJBQUEsQ0FBZCxDQUFGLENBQWdELENBQUMsR0FBakQsQ0FBQTtRQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUEsNENBQUEsQ0FBZDtRQUFILENBQWYsQ0FBUixFQUEwRiwyQkFBMUY7UUFDQSxFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQSw0Q0FBQSxDQUFkO1FBQ0EsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUEsb0NBQUEsQ0FBZDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBRSxFQUFFLENBQUMsU0FBSCxDQUFhLEdBQUcsQ0FBQSwrQkFBQSxDQUFoQixDQUFGLENBQXFELENBQUM7UUFBekQsQ0FBZixDQUFKLEVBQW9GLFNBQXBGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFFLEVBQUUsQ0FBQyxTQUFILENBQWEsR0FBRyxDQUFBLCtCQUFBLENBQWhCLENBQUYsQ0FBcUQsQ0FBQztRQUF6RCxDQUFmLENBQUosRUFBb0YsTUFBcEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUUsRUFBRSxDQUFDLFNBQUgsQ0FBYSxHQUFHLENBQUEsK0JBQUEsQ0FBaEIsQ0FBRixDQUFxRCxDQUFDO1FBQXpELENBQWYsQ0FBSixFQUFvRixNQUFwRjtRQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUEscUNBQUEsQ0FBZDtRQUFILENBQWYsQ0FBUixFQUFtRiwyQ0FBbkY7UUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUUsQ0FBQyxPQUFILENBQVcsR0FBRyxDQUFBLHFDQUFBLENBQWQ7UUFBSCxDQUFmLENBQVIsRUFBbUYsMkNBQW5GLEVBVE47O2VBV087TUFaQSxDQUFBLElBYlA7O2FBMkJLO0lBNUJnQixDQTVnQ25COztJQTJpQ0EsOEJBQUEsRUFBZ0MsUUFBQSxDQUFBLENBQUE7TUFFM0IsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxJQUFBLEVBQUEsRUFBQSxFQUFBLGNBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO1FBQVk7VUFBTixNQUFBLEtBQUEsUUFBbUIsVUFBbkIsQ0FBQTs7VUFDRSxJQUFDLENBQUEsTUFBRCxHQUFTOztVQUNULElBQUMsQ0FBQSxLQUFELEdBQVE7WUFDTixRQUFBLENBQUEsQ0FBQTtxQkFBRyxHQUFHLENBQUEsYUFBQSxDQUFBLENBQWtCLEdBQUEsQ0FBSSxDQUFBLENBQUEsQ0FBRyxJQUFDLENBQUEsR0FBRyxDQUFDLE1BQVIsQ0FBQSxNQUFBLENBQUosQ0FBbEIsQ0FBQSxZQUFBO1lBQU4sQ0FETTtZQUVOLFFBQUEsQ0FBQSxDQUFBO3FCQUFHLEdBQUcsQ0FBQSxZQUFBLENBQUEsQ0FBaUIsR0FBQSxDQUFJLENBQUEsQ0FBQSxDQUFHLElBQUMsQ0FBQSxHQUFHLENBQUMsTUFBUixDQUFBLE1BQUEsQ0FBSixDQUFqQixDQUFBLDJCQUFBO1lBQU4sQ0FGTTtZQUdOLFFBQUEsQ0FBQSxDQUFBO3FCQUFHLEdBQUcsQ0FBQSxZQUFBLENBQUEsQ0FBaUIsR0FBQSxDQUFJLENBQUEsQ0FBQSxDQUFHLElBQUMsQ0FBQSxHQUFHLENBQUMsTUFBUixDQUFBLE1BQUEsQ0FBSixDQUFqQixDQUFBLCtCQUFBO1lBQU4sQ0FITTs7O1VBS1IsSUFBQyxDQUFBLFVBQUQsR0FDRTtZQUFBLFlBQUEsRUFBYyxRQUFBLENBQUEsQ0FBQTtxQkFBRyxHQUFHLENBQUEsY0FBQSxDQUFBLENBQW1CLEdBQUEsQ0FBSSxDQUFBLENBQUEsQ0FBRyxJQUFDLENBQUEsR0FBRyxDQUFDLE1BQVIsQ0FBQSxNQUFBLENBQUosQ0FBbkIsQ0FBQTtZQUFOO1VBQWQ7Ozs7O1FBQ0osRUFBQSxHQUFLLElBQUksQ0FBQyxPQUFMLENBQUE7UUFDTCxjQUFBLEdBQWlCLElBQUksR0FBSjs7QUFBVTtVQUFBLEtBQUEsaURBQUE7eUJBQUEsR0FBRyxDQUFDO1VBQUosQ0FBQTs7WUFBVjtRQUNqQixLQUFBLENBQU0sWUFBTixFQUFvQixjQUFwQjtRQUNBLEtBQUEsQ0FBTSxZQUFOLEVBQW9CLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBbkM7UUFDQSxLQUFBLENBQU0sWUFBTixFQUFvQixFQUFFLENBQUMsR0FBdkI7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLGNBQWMsQ0FBQyxHQUFmLENBQW1CLFdBQW5CO1FBQUgsQ0FBZixDQUFKLEVBQTZELElBQTdEO1FBQ0EsSUFBQSxHQUFPLEVBQUUsQ0FBQyxJQUFILENBQVEsR0FBRyxDQUFBLGNBQUEsQ0FBQSxDQUFtQixHQUFBLENBQUksQ0FBQSxDQUFBLENBQUcsSUFBSSxDQUFDLE1BQVIsQ0FBQSxNQUFBLENBQUosQ0FBbkIsRUFBQSxDQUFYO1FBQ1AsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQyxLQUFLLENBQUM7UUFBckIsQ0FBZixDQUFKLEVBQTZELFFBQTdEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQyxLQUFLLENBQUM7UUFBckIsQ0FBZixDQUFKLEVBQTZELFlBQTdEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUE2RCxJQUE3RDtRQUNBLElBQUEsR0FBTyxFQUFFLENBQUMsSUFBSCxDQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBdEI7UUFDUCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDLEtBQUssQ0FBQztRQUFyQixDQUFmLENBQUosRUFBNkQsUUFBN0Q7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDLEtBQUssQ0FBQztRQUFyQixDQUFmLENBQUosRUFBNkQsWUFBN0Q7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTZELElBQTdEO2VBQ0M7TUF4QkEsQ0FBQSxJQURQOzthQTJCSztJQTVCNkIsQ0EzaUNoQzs7SUEwa0NBLHlCQUFBLEVBQTJCLFFBQUEsQ0FBQSxDQUFBO0FBQzdCLFVBQUEsSUFBQSxFQUFBLGFBQUEsRUFBQSxXQUFBLEVBQUEsRUFBQSxFQUFBLGNBQUEsRUFBQSwwQkFBQSxFQUFBLG1CQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLGlCQUFBLEVBQUEsWUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxXQUFBLEVBQUEsV0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBZ0MsQ0FBRSxPQUFBLENBQVEsa0VBQVIsQ0FBRixDQUE4RSxDQUFDLGVBQS9FLENBQUEsQ0FBaEM7TUFDQSxDQUFBLENBQUUsMEJBQUYsRUFDRSxtQkFERixDQUFBLEdBQ2dDLE9BQUEsQ0FBUSx1REFBUixDQURoQyxFQURKOztNQUlJLGlCQUFBLEdBQ0U7UUFBQSxJQUFBLEVBQVEsbUJBQW9CLG9DQUE1QjtRQUNBLE1BQUEsRUFBUSxLQUFvQixvQ0FENUI7UUFFQSxPQUFBLEVBQ0U7VUFBQSxLQUFBLEVBQU8sQ0FDTCxHQUFHLENBQUEsNENBQUEsQ0FERSxDQUFQO1VBR0EsVUFBQSxFQUNFO1lBQUEsaUJBQUEsRUFBNEIsR0FBRyxDQUFBLDJDQUFBLENBQS9CO1lBQ0Esa0JBQUEsRUFBNEIsR0FBRyxDQUFBLDBDQUFBLENBRC9CO1lBRUEseUJBQUEsRUFBNEIsR0FBRyxDQUFBLDZEQUFBO1VBRi9CLENBSkY7VUFPQSxTQUFBLEVBQ0U7WUFBQSxVQUFBLEVBQ0U7Y0FBQSxLQUFBLEVBQU8sUUFBQSxDQUFFLE1BQUYsQ0FBQTt1QkFBYyxJQUFDLENBQUEsY0FBRCxDQUFnQixNQUFoQjtjQUFkO1lBQVA7VUFERixDQVJGO1VBVUEsT0FBQSxFQUNFO1lBQUEsY0FBQSxFQUFnQixRQUFBLENBQUUsTUFBRixDQUFBO3FCQUFjLE1BQUEsSUFBVTtZQUF4QjtVQUFoQjtRQVhGO01BSEYsRUFMTjs7TUFxQkksWUFBQSxHQUNFO1FBQUEsTUFBQSxFQUFRLE9BQVI7UUFDQSxPQUFBLEVBQ0U7VUFBQSxVQUFBLEVBQ0U7WUFBQSxnQkFBQSxFQUFrQixHQUFHLENBQUEsZ0JBQUE7VUFBckI7UUFERjtNQUZGLEVBdEJOOztNQTJCSSxXQUFBLEdBQ0U7UUFBQSxJQUFBLEVBQVEsYUFBUjtRQUNBLE1BQUEsRUFBUSxLQURSO1FBRUEsT0FBQSxFQUNFO1VBQUEsU0FBQSxFQUNFO1lBQUEsU0FBQSxFQUNFO2NBQUEsS0FBQSxFQUFRLFFBQUEsQ0FBRSxJQUFGLENBQUE7dUJBQVksSUFBSSxDQUFDLFdBQUwsQ0FBQTtjQUFaO1lBQVI7VUFERixDQURGO1VBR0EsVUFBQSxFQUNFO1lBQUEsY0FBQSxFQUFnQixHQUFHLENBQUEsZ0JBQUE7VUFBbkI7UUFKRjtNQUhGO01BU0k7O1FBQU4sTUFBQSxLQUFBLFFBQW1CLFVBQW5CLENBQUE7O1FBQ0UsSUFBQyxDQUFBLE1BQUQsR0FBVTs7UUFDVixJQUFDLENBQUEsT0FBRCxHQUFVLENBQ1IsWUFEUSxFQUVSLFlBRlEsRUFHUixpQkFIUSxFQUlSLElBSlEsRUFLUixXQUxROztRQU9WLElBQUMsQ0FBQSxPQUFELEdBQVUsQ0FBQTs7UUFDVixJQUFDLENBQUEsS0FBRCxHQUFRLENBQ04sR0FBRyxDQUFBLDhCQUFBLENBREc7O1FBR1IsSUFBQyxDQUFBLFVBQUQsR0FDRTtVQUFBLFlBQUEsRUFBYyxHQUFHLENBQUEsZ0JBQUE7UUFBakI7O1FBQ0YsSUFBQyxDQUFBLFNBQUQsR0FDRTtVQUFBLFFBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxRQUFBLENBQUUsQ0FBRixDQUFBO3FCQUFTLENBQUEsSUFBSztZQUFkO1VBQVA7UUFERjs7OztvQkFyRFI7O01Bd0RJLEVBQUEsR0FBSyxJQUFJLENBQUMsT0FBTCxDQUFBLEVBeERUOztNQTBESSxNQUFBLEdBQVU7QUFDVjtNQUFBLEtBQUEscUNBQUE7U0FBSSxDQUFFLElBQUYsRUFBUSxXQUFSO1FBQ0YsTUFBTSxDQUFDLElBQVAsQ0FBWSxDQUFBLENBQUEsQ0FBQSxDQUFJLElBQUosQ0FBQSxDQUFBLENBQUEsNENBQStCLGFBQS9CLENBQUEsQ0FBWjtNQURGLENBM0RKOztNQThESSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUc7TUFBSCxDQUFmLENBQUosRUFBZ0MsQ0FDOUIscUJBRDhCLEVBRTlCLDJCQUY4QixFQUc5QixnQ0FIOEIsRUFJOUIsc0JBSjhCLEVBSzlCLDJCQUw4QixFQU05QixpQkFOOEIsRUFPOUIscUJBUDhCLENBQWhDO0FBUUE7TUFBQSxLQUFBLHdDQUFBO1NBQUksQ0FBRSxJQUFGLEVBQVEsV0FBUjtRQUNGLElBQUcsSUFBQSxLQUFRLFFBQVg7VUFDRSxJQUFBLENBQUssWUFBTCxFQUFtQixDQUFBLENBQUEsQ0FBQSxDQUFJLElBQUosQ0FBQSxDQUFBLENBQUEsNENBQStCLGFBQS9CLENBQUEsQ0FBbkIsRUFBbUUsTUFBTSxDQUFDLElBQVAsQ0FBWSxXQUFXLENBQUMsT0FBeEIsQ0FBbkUsRUFERjtTQUFBLE1BQUE7VUFHRSxDQUFLLENBQUUsV0FBQSxLQUFlLEVBQUUsQ0FBQyxXQUFwQixDQUFILEdBQTBDLElBQTFDLEdBQW9ELElBQXRELENBQUEsQ0FBNkQsWUFBN0QsRUFBMkUsQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFKLENBQUEsQ0FBQSxDQUFBLDRDQUErQixhQUEvQixDQUFBLENBQTNFLEVBSEY7O01BREYsQ0F0RUo7O01BNEVJLGFBQUEsR0FBZ0IsRUFBRSxDQUFDLCtCQUFILENBQUE7TUFDaEIsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUUsTUFBTSxDQUFDLElBQVAsQ0FBWSxhQUFaLENBQUYsQ0FBNkIsQ0FBQyxJQUE5QixDQUFBO01BQUgsQ0FBZixDQUFKLEVBQThELENBQzVELHFCQUQ0RCxFQUU1RCxPQUY0RCxFQUc1RCxXQUg0RCxFQUk1RCxTQUo0RCxFQUs1RCxZQUw0RCxFQU01RCxpQkFONEQsRUFPNUQsZ0JBUDRELEVBUTVELGtCQVI0RCxDQUE5RDtNQVNBLEtBQUEsQ0FBTSxZQUFOLEVBQW9CLE1BQUEsQ0FBTyx1QkFBUCxFQUFnQyxNQUFNLENBQUMsSUFBUCxDQUFZLGFBQWEsQ0FBQyxLQUExQixDQUFoQyxDQUFwQjtNQUNBLEtBQUEsQ0FBTSxZQUFOLEVBQW9CLE1BQUEsQ0FBTyx1QkFBUCxFQUFnQyxNQUFNLENBQUMsSUFBUCxDQUFZLGFBQWEsQ0FBQyxtQkFBMUIsQ0FBaEMsQ0FBcEI7TUFDQSxLQUFBLENBQU0sWUFBTixFQUFvQixNQUFBLENBQU8sdUJBQVAsRUFBZ0MsTUFBTSxDQUFDLElBQVAsQ0FBWSxhQUFhLENBQUMsU0FBMUIsQ0FBaEMsQ0FBcEI7TUFDQSxLQUFBLENBQU0sWUFBTixFQUFvQixNQUFBLENBQU8sdUJBQVAsRUFBZ0MsTUFBTSxDQUFDLElBQVAsQ0FBWSxhQUFhLENBQUMsT0FBMUIsQ0FBaEMsQ0FBcEI7TUFDQSxLQUFBLENBQU0sWUFBTixFQUFvQixNQUFBLENBQU8sdUJBQVAsRUFBZ0MsTUFBTSxDQUFDLElBQVAsQ0FBWSxhQUFhLENBQUMsVUFBMUIsQ0FBaEMsQ0FBcEI7TUFDQSxLQUFBLENBQU0sWUFBTixFQUFvQixNQUFBLENBQU8sdUJBQVAsRUFBZ0MsTUFBTSxDQUFDLElBQVAsQ0FBWSxhQUFhLENBQUMsZUFBMUIsQ0FBaEMsQ0FBcEI7TUFDQSxLQUFBLENBQU0sWUFBTixFQUFvQixNQUFBLENBQU8sdUJBQVAsRUFBZ0MsTUFBTSxDQUFDLElBQVAsQ0FBWSxhQUFhLENBQUMsY0FBMUIsQ0FBaEMsQ0FBcEI7TUFDQSxLQUFBLENBQU0sWUFBTixFQUFvQixNQUFBLENBQU8sdUJBQVAsRUFBZ0MsTUFBTSxDQUFDLElBQVAsQ0FBWSxhQUFhLENBQUMsZ0JBQTFCLENBQWhDLENBQXBCLEVBN0ZKOztNQStGSSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsTUFBTSxDQUFDLElBQVAsQ0FBWSxhQUFhLENBQUMsU0FBMUI7TUFBSCxDQUFmLENBQUosRUFBNkQsQ0FDM0QsUUFEMkQsRUFFM0Qsa0JBRjJELEVBRzNELG9CQUgyRCxFQUkzRCwyQkFKMkQsRUFLM0QsMEJBTDJELEVBTTNELGtCQU4yRCxFQU8zRCxZQVAyRCxFQVEzRCxVQVIyRCxFQVMzRCxXQVQyRCxDQUE3RCxFQS9GSjs7TUEwR0ksSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLE1BQU0sQ0FBQyxJQUFQLENBQVksYUFBYSxDQUFDLFVBQTFCO01BQUgsQ0FBZixDQUFKLEVBQThELENBQzVELGtCQUQ0RCxFQUU1RCxnQkFGNEQsRUFHNUQsZ0JBSDRELEVBSTVELGVBSjRELEVBSzVELG1CQUw0RCxFQU01RCxtQkFONEQsRUFPNUQsa0JBUDRELEVBUTVELG1CQVI0RCxFQVM1RCxtQkFUNEQsRUFVNUQsb0JBVjRELEVBVzVELDJCQVg0RCxFQVk1RCxjQVo0RCxFQWE1RCxnQkFiNEQsQ0FBOUQsRUExR0o7O01BeUhJLGNBQUEsR0FBa0IsSUFBSSxHQUFKOztBQUFVO1FBQUEsS0FBQSxrREFBQTt1QkFBQSxDQUFDLENBQUM7UUFBRixDQUFBOztVQUFWO01BQ2xCLFdBQUEsR0FBa0IsSUFBSSxHQUFKOztBQUFVO1FBQUEsS0FBQSwrQ0FBQTt1QkFBQSxDQUFDLENBQUM7UUFBRixDQUFBOztVQUFWO01BQ2xCLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxPQUFPLENBQUMsR0FBUixDQUFZLEVBQUUsQ0FBQyxVQUFmLEVBQTRCLGVBQTVCO01BQUgsQ0FBZixDQUFKLEVBQTJFLElBQTNFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLE9BQU8sQ0FBQyxHQUFSLENBQVksRUFBRSxDQUFDLFVBQWYsRUFBNEIsbUJBQTVCO01BQUgsQ0FBZixDQUFKLEVBQTJFLElBQTNFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLE9BQUEsQ0FBUSxFQUFFLENBQUMsY0FBWDtNQUFILENBQWYsQ0FBSixFQUEyRSxVQUEzRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxFQUFFLENBQUMsY0FBSCxDQUFrQixFQUFsQjtNQUFILENBQWYsQ0FBSixFQUEyRSxHQUEzRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxjQUFjLENBQUMsR0FBZixDQUFtQixZQUFuQjtNQUFILENBQWYsQ0FBSixFQUEyRSxJQUEzRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxFQUFFLENBQUMsU0FBSCxDQUFhLEdBQUcsQ0FBQSw2QkFBQSxDQUFoQjtNQUFILENBQWYsQ0FBSixFQUEyRTtRQUFFLENBQUEsRUFBRztNQUFMLENBQTNFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFdBQVcsQ0FBQyxHQUFaLENBQWdCLGFBQWhCO01BQUgsQ0FBZixDQUFKLEVBQTJFLElBQTNFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFdBQVcsQ0FBQyxHQUFaLENBQWdCLEdBQWhCO01BQUgsQ0FBZixDQUFKLEVBQTJFLElBQTNFLEVBbElKOzthQW9JSztJQXJJd0IsQ0Exa0MzQjs7SUFrdENBLHdCQUFBLEVBQTBCLFFBQUEsQ0FBQSxDQUFBO0FBQzVCLFVBQUEsS0FBQSxFQUFBLFlBQUEsRUFBQSxVQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxHQUFBLEVBQUEsY0FBQSxFQUFBLENBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsS0FBRixFQUNFLE9BREYsRUFFRSxHQUZGLEVBR0UsY0FIRixFQUlFLFNBSkYsQ0FBQSxHQUlzQixPQUFBLENBQVEsb0RBQVIsQ0FKdEI7TUFLQSxDQUFBLENBQUUsSUFBRixDQUFBLEdBQXNCLFNBQXRCLEVBTEo7O01BT0ksWUFBQSxHQUNFO1FBQUEsSUFBQSxFQUFVLE9BQVY7UUFDQSxNQUFBLEVBQVUsS0FEVjtRQUVBLE9BQUEsRUFFRSxDQUFBOztVQUFBLEtBQUEsRUFBTyxRQUFBLENBQUEsQ0FBQTtBQUNmLGdCQUFBLENBQUEsRUFBQSxHQUFBOzs7WUFFVSxHQUFBLEdBQ0U7Y0FBQSxpQkFBQSxFQUEwQixJQUExQjtjQUNBLFdBQUEsRUFBMEIsU0FEMUI7Y0FFQSxVQUFBLEVBQTBCO1lBRjFCLEVBSFo7O1lBT1UsQ0FBQSxHQUFJLEdBUGQ7O1lBU1UsQ0FBQyxDQUFDLElBQUYsQ0FBTyxHQUFHLENBQUE7Ozs7TUFBQSxDQUFWLEVBVFY7O1lBaUJVLENBQUMsQ0FBQyxJQUFGLENBQU8sR0FBRyxDQUFBOzs7Ozs7O29EQUFBLENBQUEsQ0FROEMsR0FBQSxDQUFJLEdBQUcsQ0FBQyxpQkFBUixDQVI5QyxDQUFBO2tEQUFBLENBQUEsQ0FTNEMsR0FBQSxDQUFJLEdBQUcsQ0FBQyxXQUFSLENBVDVDLENBQUEsS0FBQSxDQUFBLENBU3VFLEdBQUEsQ0FBSSxHQUFHLENBQUMsVUFBUixDQVR2RSxDQUFBO2tEQUFBLENBQUEsQ0FVNEMsR0FBQSxDQUFJLEdBQUcsQ0FBQyxXQUFSLENBVjVDLENBQUEsS0FBQSxDQUFBLENBVXVFLEdBQUEsQ0FBSSxHQUFHLENBQUMsVUFBUixDQVZ2RSxDQUFBOzs7SUFBQSxDQUFWLEVBakJWOztBQWdDVSxtQkFBTztVQWpDRixDQUFQO1VBa0NBLFVBQUEsRUFDRTtZQUFBLE9BQUEsRUFBUyxHQUFHLENBQUEsY0FBQSxDQUFaO1lBQ0Esa0JBQUEsRUFBb0IsR0FBRyxDQUFBO2tDQUFBLENBRHZCO1lBR0EsY0FBQSxFQUFnQixHQUFHLENBQUE7c0NBQUE7VUFIbkI7UUFuQ0Y7TUFKRjtNQThDSTs7UUFBTixNQUFBLFdBQUEsUUFBeUIsVUFBekIsQ0FBQTs7UUFDRSxVQUFDLENBQUEsTUFBRCxHQUFVOzs7UUFDVixVQUFDLENBQUEsT0FBRCxHQUFVLENBRVIsWUFGUTs7OztvQkF4RGhCOzs7TUE4REksQ0FBQSxHQUFJLElBQUksVUFBSixDQUFlO1FBQUUsT0FBQSxFQUFTO01BQVgsQ0FBZixFQTlEUjs7TUFnRUksS0FBQSxHQUFRLElBQUksR0FBSjs7QUFBVTtRQUFBLEtBQUEsNkNBQUE7dUJBQUEsR0FBRyxDQUFDO1FBQUosQ0FBQTs7VUFBVjtNQUNSLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsR0FBTixDQUFVLGdCQUFWO01BQUgsQ0FBZixDQUFKLEVBQXlELElBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxHQUFOLENBQVUsb0JBQVY7TUFBSCxDQUFmLENBQUosRUFBeUQsSUFBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLEdBQU4sQ0FBVSxlQUFWO01BQUgsQ0FBZixDQUFKLEVBQXlELElBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxHQUFOLENBQVUsZUFBVjtNQUFILENBQWYsQ0FBSixFQUF5RCxJQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsR0FBTixDQUFVLFlBQVY7TUFBSCxDQUFmLENBQUosRUFBeUQsSUFBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLEdBQU4sQ0FBVSxlQUFWO01BQUgsQ0FBZixDQUFKLEVBQXlELElBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxHQUFOLENBQVUsV0FBVjtNQUFILENBQWYsQ0FBSixFQUF5RCxJQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsT0FBRixDQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBdkI7TUFBSCxDQUFmLENBQUosRUFBd0Q7UUFBRTtVQUFFLENBQUEsRUFBRztRQUFMLENBQUY7T0FBeEQsRUF4RUo7O01BMEVVLGVBQU4sTUFBQSxhQUFBLFFBQTJCLE1BQTNCLENBQUE7O1FBR0UsV0FBYSxDQUFFLEVBQUYsQ0FBQTtlQUNYLENBQUE7VUFDQSxJQUFDLENBQUEsRUFBRCxHQUFNO1VBQ04sSUFBQyxDQUFBLE9BQUQsQ0FBQTtVQUNDO1FBSlUsQ0FEbkI7OztRQVFNLE9BQVMsQ0FBQSxDQUFBLEVBQUE7OztBQUNmLGNBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQTtVQUFRLFFBQUEsR0FBVyxDQUFBO1VBQ1gsS0FBQSwwRUFBQTtZQUVFLE9BQUEsR0FBZ0MsSUFBSSxPQUFKLENBQVksSUFBWixFQUFpQixJQUFJLENBQUMsS0FBTCxDQUFXLEdBQUcsQ0FBQyxJQUFmLENBQWpCLEVBQXdDO2NBQUUsS0FBQSxFQUFPLEdBQUcsQ0FBQyxLQUFiO2NBQW9CLGFBQUEsRUFBZTtZQUFuQyxDQUF4QztZQUNoQyxRQUFRLENBQUUsT0FBTyxDQUFDLEtBQVYsQ0FBUixHQUFnQztZQUNoQyxJQUFDLENBQUEsUUFBUSxDQUFDLElBQVYsQ0FBZSxPQUFmO1VBSkY7VUFLQSxLQUFBLHNFQUFBO1lBRUUsR0FBQSxHQUFnQyxJQUFJLEdBQUosQ0FBUTtjQUFFLEVBQUEsRUFBSSxHQUFHLENBQUMsRUFBVjtjQUFjLEVBQUEsRUFBSSxHQUFHLENBQUM7WUFBdEIsQ0FBUjtZQUNoQyxHQUFHLENBQUMsS0FBSixHQUFnQyxHQUFHLENBQUM7WUFDcEMsSUFBQyxDQUFBLEtBQUssQ0FBQyxTQUFQLEdBQWdDLElBQUksQ0FBQyxHQUFMLENBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxTQUFoQixFQUEyQixNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFWLENBQWtCLE1BQWxCLEVBQTBCLEVBQTFCLENBQVAsQ0FBM0I7WUFDaEMsR0FBRyxDQUFDLE9BQUosR0FBZ0MsR0FBRyxDQUFDO1lBQ3BDLFFBQVEsQ0FBRSxHQUFHLENBQUMsT0FBTixDQUFlLENBQUMsSUFBeEIsR0FBZ0MsSUFBQSxDQUFLLFFBQVEsQ0FBRSxHQUFHLENBQUMsT0FBTixDQUFlLENBQUMsSUFBN0IsRUFBbUMsUUFBQSxDQUFFLElBQUYsQ0FBQTtxQkFBWSxJQUFJLENBQUMsSUFBTCxDQUFVLEdBQVY7WUFBWixDQUFuQztVQU5sQztpQkFPQztRQWRNLENBUmY7OztRQXlCTSxJQUFNLENBQUEsQ0FBQTtBQUNaLGNBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUE7QUFBUTtVQUFBLEtBQUEscUNBQUE7O1lBQ0UsT0FBTyxDQUFDLFNBQVIsQ0FBQTtZQUNBLE1BQUEsR0FBYyxTQUFBLENBQVUsSUFBVjtZQUNkLElBQUEsR0FBYyxJQUFJLENBQUMsU0FBTCxDQUFlLE9BQU8sQ0FBQyxJQUF2QjtZQUNkLElBQUMsQ0FBQSxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQWxDLENBQXNDLENBQUUsR0FBQSxPQUFGLEVBQWMsTUFBZCxFQUFzQixJQUF0QixDQUF0QztBQUNBO1lBQUEsS0FBQSx3Q0FBQTs7Y0FDRSxJQUFDLENBQUEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBOUIsQ0FBa0MsQ0FBRSxHQUFBLEdBQUYsQ0FBbEM7WUFERjtVQUxGO2lCQU9DO1FBUkc7O01BM0JSO01Bc0NHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO1FBQU0sR0FBQSxHQUFNLElBQUksWUFBSixDQUFpQixDQUFqQjtRQUNOLEtBQUEsR0FBUSxHQUFHLENBQUMsV0FBSixDQUFnQjtVQUFFLGlCQUFBLEVBQW1CO1FBQXJCLENBQWhCO1FBQ1IsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUM7UUFBVCxDQUFmLENBQUosRUFBcUMsb0JBQXJDO1FBQ0EsS0FBSyxDQUFDLE9BQU4sQ0FBYyxHQUFkLEVBQW1CLEdBQW5CO1FBQ0EsS0FBSyxDQUFDLE9BQU4sQ0FBYyxHQUFkLEVBQW1CLEdBQW5CO1FBQ0EsS0FBSyxDQUFDLE9BQU4sQ0FBYyxHQUFkLEVBQW1CLEdBQW5CO1FBQ0EsS0FBSyxDQUFDLFNBQU4sQ0FBQTtRQUNBLEtBQUE7O1lBQUE7VUFBQSxJQUFBLENBQUssR0FBTDtRQUFBO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQWIsQ0FBZixDQUFKLEVBQXlELENBQXpELEVBUk47O1FBVU0sSUFBQSxHQUFPLENBQUUsU0FBQSxDQUFBLENBQUE7aUJBQUcsQ0FBQSxPQUFXLEtBQUssQ0FBQyxJQUFqQjtRQUFILENBQUYsQ0FBQSxDQUFBO1FBQ1AsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUM7UUFBVCxDQUFmLENBQUosRUFBeUQsb0JBQXpEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUF5RDtVQUFFLEVBQUEsRUFBSSxFQUFOO1VBQVUsRUFBQSxFQUFJLEVBQWQ7VUFBa0IsS0FBQSxFQUFPLGdCQUF6QjtVQUEyQyxPQUFBLEVBQVM7UUFBcEQsQ0FBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQXlEO1VBQUUsRUFBQSxFQUFJLEVBQU47VUFBVSxFQUFBLEVBQUksRUFBZDtVQUFrQixLQUFBLEVBQU8sZ0JBQXpCO1VBQTJDLE9BQUEsRUFBUztRQUFwRCxDQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBeUQ7VUFBRSxFQUFBLEVBQUksRUFBTjtVQUFVLEVBQUEsRUFBSSxHQUFkO1VBQW1CLEtBQUEsRUFBTyxnQkFBMUI7VUFBNEMsT0FBQSxFQUFTO1FBQXJELENBQXpEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUF5RCxJQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLHdCQUFKLENBQTZCLEdBQTdCO1FBQUgsQ0FBZixDQUFKLEVBQTJELElBQTNEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsd0JBQUosQ0FBNkIsR0FBN0I7UUFBSCxDQUFmLENBQUosRUFBMkQ7VUFBRSxpQkFBQSxFQUFtQixDQUFFLElBQUY7UUFBckIsQ0FBM0QsRUFqQk47O1FBbUJNLEdBQUcsQ0FBQyxJQUFKLENBQUE7UUFFQSxLQUFBLDJFQUFBLEdBQUE7O1VBQUEsSUFBQSxDQUFLLEdBQUw7UUFBQTtRQUNBLElBQUEsR0FBTyxDQUFDLENBQUMsSUFBRixDQUFPLEdBQUcsQ0FBQSxnREFBQSxDQUFWO1FBQ1AsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLEtBQUEsRUFBTyxvQkFBVDtVQUErQixNQUFBLEVBQVEsQ0FBdkM7VUFBMEMsSUFBQSxFQUFNO1FBQWhELENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQyxJQUEzQztRQUVBLEtBQUEsdUVBQUEsR0FBQTs7VUFBQSxJQUFBLENBQUssR0FBTDtRQUFBO1FBQ0EsSUFBQSxHQUFPLENBQUMsQ0FBQyxJQUFGLENBQU8sR0FBRyxDQUFBLDRDQUFBLENBQVY7UUFDUCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsS0FBQSxFQUFPLGdCQUFUO1VBQTJCLEVBQUEsRUFBSSxFQUEvQjtVQUFtQyxFQUFBLEVBQUksRUFBdkM7VUFBMkMsT0FBQSxFQUFTO1FBQXBELENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLEtBQUEsRUFBTyxnQkFBVDtVQUEyQixFQUFBLEVBQUksRUFBL0I7VUFBbUMsRUFBQSxFQUFJLEVBQXZDO1VBQTJDLE9BQUEsRUFBUztRQUFwRCxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sZ0JBQVQ7VUFBMkIsRUFBQSxFQUFJLEVBQS9CO1VBQW1DLEVBQUEsRUFBSSxHQUF2QztVQUE0QyxPQUFBLEVBQVM7UUFBckQsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDLElBQTNDO2VBQ0M7TUFqQ0EsQ0FBQTtNQW1DQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLEtBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFNLEdBQUEsR0FBTSxJQUFJLFlBQUosQ0FBaUIsQ0FBakI7UUFDTixLQUFBLCtDQUFpQyxDQUFBO1FBQ2pDLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsS0FBSyxDQUFDO1FBQVQsQ0FBZixDQUFKLEVBQXFDLG9CQUFyQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUFiLENBQWYsQ0FBSixFQUEyRCxDQUEzRDtRQUNBLEtBQUE7OztZQUFBO1VBQUEsSUFBQSxDQUFLLEdBQUw7UUFBQSxDQUpOOztRQU1NLElBQUEsR0FBTyxDQUFFLFNBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTtpQkFBQyxDQUFBLDZDQUF3QixHQUF4QjtRQUFILENBQUYsQ0FBQSxDQUFBO1FBQ1AsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUM7UUFBVCxDQUFmLENBQUosRUFBMkQsb0JBQTNEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyRDtVQUFFLEVBQUEsRUFBSSxFQUFOO1VBQVUsRUFBQSxFQUFJLEVBQWQ7VUFBa0IsS0FBQSxFQUFPLGdCQUF6QjtVQUEyQyxPQUFBLEVBQVM7UUFBcEQsQ0FBM0Q7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJEO1VBQUUsRUFBQSxFQUFJLEVBQU47VUFBVSxFQUFBLEVBQUksRUFBZDtVQUFrQixLQUFBLEVBQU8sZ0JBQXpCO1VBQTJDLE9BQUEsRUFBUztRQUFwRCxDQUEzRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkQ7VUFBRSxFQUFBLEVBQUksRUFBTjtVQUFVLEVBQUEsRUFBSSxHQUFkO1VBQW1CLEtBQUEsRUFBTyxnQkFBMUI7VUFBNEMsT0FBQSxFQUFTO1FBQXJELENBQTNEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyRCxJQUEzRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLHdCQUFKLENBQTZCLEdBQTdCO1FBQUgsQ0FBZixDQUFKLEVBQTJELElBQTNEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsd0JBQUosQ0FBNkIsR0FBN0I7UUFBSCxDQUFmLENBQUosRUFBMkQ7VUFBRSxpQkFBQSxFQUFtQixDQUFFLElBQUY7UUFBckIsQ0FBM0QsRUFiTjs7ZUFlTztNQWhCQSxDQUFBLElBbkpQOzthQXFLSztJQXRLdUI7RUFsdEMxQixFQXBFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEwL0NBLGdEQUFBLEdBQW1ELFFBQUEsQ0FBQSxDQUFBO0FBQ25ELFFBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxjQUFBLEVBQUEsUUFBQSxFQUFBLE9BQUEsRUFBQSxNQUFBOztJQUNRLElBQU4sTUFBQSxFQUFBO01BQ0UsQ0FBRyxDQUFFLE9BQUYsQ0FBQTtlQUFlLElBQUEsQ0FBSyxZQUFMLEVBQW1CLEdBQUEsQ0FBSSxPQUFKLENBQW5CO01BQWY7O0lBREwsRUFERjs7SUFJUSxJQUFOLE1BQUEsRUFBQSxRQUFnQixFQUFoQjtNQUNFLE1BQVEsQ0FBRSxJQUFGLEVBQUEsR0FBUSxDQUFSLENBQUE7b0JBQXlCLENBQUEsSUFBQSxDQUFQLENBQWMsR0FBQSxDQUFkO01BQWxCOztJQURWLEVBSkY7OztJQVFFLE9BQUEsR0FBVTtNQUNSLENBQUEsRUFBRyxRQUFBLENBQUUsT0FBRixDQUFBO1FBQWUsSUFBQyxDQUFBLE1BQUQsQ0FBUSxHQUFSLEVBQWEsT0FBYjtBQUFzQixlQUFPO01BQTVDO0lBREssRUFSWjs7O0lBYVEsaUJBQU4sTUFBQSxlQUFBLFFBQTZCLEVBQTdCLENBQUE7SUFDQSxRQUFBLEdBQVcsSUFBSSxjQUFKLENBQUE7SUFDWCxRQUFRLENBQUMsQ0FBVCxHQUFhLE9BQU8sQ0FBQyxFQWZ2Qjs7O0lBa0JFLE1BQUEsR0FBUyxRQUFRLENBQUMsQ0FBVCxDQUFXLFlBQVgsRUFsQlg7SUFtQkUsSUFBQSxDQUFLLFlBQUwsRUFBbUIsQ0FBRSxNQUFGLENBQW5CLEVBbkJGOztXQXFCRztFQXRCZ0QsRUExL0NuRDs7O0VBbWhEQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUEsaUJBQUEsRUFBQSxFQUFBLEVBQUEsV0FBQSxFQUFBLFdBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUE7TUFBRSxXQUFBLEdBQWM7TUFDZCxXQUFBLEdBQWM7TUFDZCxJQUFHLFdBQUg7UUFDRSxDQUFBLENBQUUsaUJBQUYsQ0FBQSxHQUFrQyxPQUFBLENBQVEseURBQVIsQ0FBbEM7UUFDQSxFQUFBLEdBQUssSUFBSSxpQkFBSixDQUFBO1FBQ0wsRUFBRSxDQUFDLFVBQUgsQ0FBYyxTQUFkLEVBSEY7O01BSUEsQ0FBQSxDQUFFLDBCQUFGLENBQUEsR0FBa0MsT0FBQSxDQUFRLHVEQUFSLENBQWxDLEVBTkY7Ozs7OztNQVlFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLElBQXZDO1FBQTZDLGFBQUEsRUFBZTtNQUE1RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsQ0FBRSxLQUFGLENBQTlCO01BQ0EsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLHdCQUFBLEVBQTBCLEtBQUssQ0FBQztNQUFsQyxDQUE5QixFQWhCRjs7O01BbUJFLElBQUcsV0FBSDtRQUNFLElBQStFLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBaEIsR0FBeUIsQ0FBeEc7QUFBQTtVQUFBLEtBQUEscUNBQUE7O1lBQUEsSUFBQSxDQUFLLFlBQUwsRUFBbUIsY0FBbkIsRUFBbUMsT0FBQSxDQUFRLElBQVIsQ0FBbkM7VUFBQSxDQUFBO1NBREY7T0FuQkY7Ozs7YUF3Qkc7SUF6QnFDLENBQUEsSUFBeEM7O0FBbmhEQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1kYnJpYydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5GUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnsgRGJyaWMsXG4gIERicmljX3N0ZCxcbiAgSUROLFxuICBMSVQsXG4gIFNRTCxcbiAgVkVDLFxuICBmcm9tX2Jvb2wsXG4gIGFzX2Jvb2wsXG4gIGludGVybmFscyxcbiAgVHJ1ZSxcbiAgRmFsc2UsXG4gIHVucXVvdGVfbmFtZSwgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9kYnJpYydcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5fdG9nZ2xlID0gMFxudG9nZ2xlID0gKCBQLi4uICkgLT5cbiAgX3RvZ2dsZSA9ICggX3RvZ2dsZSArIDEgKSAlIDJcbiAgcmV0dXJuICggaWYgX3RvZ2dsZSBpcyAwIHRoZW4gYmx1ZSBlbHNlIGdvbGQgKSBQLi4uXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxucmVtb3ZlID0gKCBwYXRoICkgLT5cbiAgdHJ5XG4gICAgRlMudW5saW5rU3luYyBwYXRoXG4gICAgaGVscCAnzqliYmRicl9fXzEnLCBcInJlbW92ZWQgI3tycHIgcGF0aH1cIlxuICBjYXRjaCBlcnJvclxuICAgIHRocm93IGVycm9yIHVubGVzcyBlcnJvci5jb2RlIGlzICdFTk9FTlQnXG4gICAgIyB1cmdlICfOqWJiZGJyX19fMicsIFwibm8gc3VjaCBGUyBvYmplY3Q6ICN7cnByIHBhdGh9XCJcbiAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2VzcWw6IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqliYmRicl9fXzMgPSAtPiBpbnRlcm5hbHMudHlwZV9vZiB1bnF1b3RlX25hbWUgICAgICApLCAnZnVuY3Rpb24nXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX180ID0gLT4gdW5xdW90ZV9uYW1lICd4JyAgICAgICAgICAgICAgICAgICAgKSwgJ3gnXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX181ID0gLT4gdW5xdW90ZV9uYW1lICdcInhcIicgICAgICAgICAgICAgICAgICApLCAneCdcbiAgICBAZXEgICAgICggzqliYmRicl9fXzYgPSAtPiB1bnF1b3RlX25hbWUgJ2FiYycgICAgICAgICAgICAgICAgICApLCAnYWJjJ1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fNyA9IC0+IHVucXVvdGVfbmFtZSAnXCJhYmNcIicgICAgICAgICAgICAgICAgKSwgJ2FiYydcbiAgICBAZXEgICAgICggzqliYmRicl9fXzggPSAtPiB1bnF1b3RlX25hbWUgJ1wiYWJcIlwiY1wiJyAgICAgICAgICAgICAgKSwgJ2FiXCJjJ1xuICAgIEB0aHJvd3MgKCDOqWJiZGJyX19fOSA9IC0+IHVucXVvdGVfbmFtZSAnJyAgICAgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIG5vbi1lbXB0eSB0ZXh0LCBnb3QgYW4gZW1wdHkgdGV4dC9cbiAgICBAdGhyb3dzICggzqliYmRicl9fMTAgPSAtPiB1bnF1b3RlX25hbWUgJ1wiJyAgICAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgcXVvdGVkIG5vbi1lbXB0eSB0ZXh0LCBnb3QgYSBxdW90ZS9cbiAgICBAZXEgICAgICggzqliYmRicl9fMTEgPSAtPiB1bnF1b3RlX25hbWUgJ1wiXCInICAgICAgICAgICAgICAgICAgICksICcnICMjIyBOT1RFIFNRTGl0ZSBkb2VzIGFjY2VwdCBhIHF1b3RlZCBlbXB0eSBzdHJpbmcgYXMgbmFtZSAjIyNcbiAgICBAdGhyb3dzICggzqliYmRicl9fMTIgPSAtPiB1bnF1b3RlX25hbWUgZmFsc2UgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0LCBnb3QgYSBib29sZWFuL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYmJkYnJfXzEzID0gLT4gSUROICdhYmMnICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ1wiYWJjXCInXG4gICAgQGVxICAgICAoIM6pYmJkYnJfXzE0ID0gLT4gSUROICdBXCJiY1wiJyAgICAgICAgICAgICAgICAgICAgICAgICApLCAnXCJBXCJcImJjXCJcIlwiJ1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xNSA9IC0+IExJVCAnYWJjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFwiJ2FiYydcIlxuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xNiA9IC0+IExJVCBcIkEnYmMnXCIgICAgICAgICAgICAgICAgICAgICAgICAgKSwgXCInQScnYmMnJydcIlxuICAgIEB0aHJvd3MgKCDOqWJiZGJyX18xNyA9IC0+IFZFQyAnYWJjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIGxpc3QvXG4gICAgQGVxICAgICAoIM6pYmJkYnJfXzE4ID0gLT4gVkVDIFsgJ2FiYycgXSAgICAgICAgICAgICAgICAgICAgICAgKSwgXCJcIlwiKCAnYWJjJyApXCJcIlwiXG4gICAgQGVxICAgICAoIM6pYmJkYnJfXzE5ID0gLT4gVkVDIFsgJ2FiYycsIDEsIHRydWUsIGZhbHNlLCBdICAgICAgKSwgXCJcIlwiKCAnYWJjJywgMSwgMSwgMCApXCJcIlwiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfc3RkOiAtPlxuICAgIHsgdGVtcCwgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdGVtcCgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB0ZW1wLndpdGhfZGlyZWN0b3J5IHsga2VlcDogZmFsc2UsIH0sICh7IHBhdGg6IGZvbGRlcl9wYXRoLCB9KSA9PlxuICAgICAgIyBmb2xkZXJfcGF0aCA9ICcvdG1wL2JyaWNicmFjLXRlc3QnICMgISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG4gICAgICBkYl9wYXRoID0gUEFUSC5qb2luIGZvbGRlcl9wYXRoLCAnYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHJlbW92ZSBkYl9wYXRoXG4gICAgICAjIGhlbHAgJ86pYmJkYnJfXzIwJywgeyBkYl9wYXRoLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gbmV3IERicmljIGRiX3BhdGgsIHsgcmVidWlsZDogdHJ1ZSwgfVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzIxID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpYyAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yMiA9IC0+IGRiLl9nZXRfZGJfb2JqZWN0cygpICAgICAgICApLCB7fVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdGVtcC53aXRoX2RpcmVjdG9yeSB7IGtlZXA6IGZhbHNlLCB9LCAoeyBwYXRoOiBmb2xkZXJfcGF0aCwgfSkgPT5cbiAgICAgICMgZm9sZGVyX3BhdGggPSAnL3RtcC9icmljYnJhYy10ZXN0JyAjICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxuICAgICAgZGJfcGF0aCA9IFBBVEguam9pbiBmb2xkZXJfcGF0aCwgJ2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICByZW1vdmUgZGJfcGF0aFxuICAgICAgIyBoZWxwICfOqWJiZGJyX18yMycsIHsgZGJfcGF0aCwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IG5ldyBEYnJpY19zdGQgZGJfcGF0aCwgeyByZWJ1aWxkOiB0cnVlLCB9XG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjQgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI1ID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpY19zdGQgICAgICAgICAgICksIHRydWVcbiAgICAgICAgb2JqZWN0cyA9IG5ldyBTZXQgKCBcIiN7by50eXBlfToje28ubmFtZX1cIiBmb3IgXywgbyBvZiBkYi5fZ2V0X2RiX29iamVjdHMoKSApXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjYgPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfdGFibGVzJyAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI3ID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3ZpZXdzJyAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yOCA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF9yZWxhdGlvbnMnICApLCB0cnVlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gbmV3IERicmljX3N0ZCBkYl9wYXRoLCB7IHJlYnVpbGQ6IGZhbHNlLCB9XG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjkgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzMwID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpY19zdGQgICAgICAgICAgICksIHRydWVcbiAgICAgICAgb2JqZWN0cyA9IG5ldyBTZXQgKCBcIiN7by50eXBlfToje28ubmFtZX1cIiBmb3IgXywgbyBvZiBkYi5fZ2V0X2RiX29iamVjdHMoKSApXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzEgPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfdGFibGVzJyAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzMyID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3ZpZXdzJyAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zMyA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF9yZWxhdGlvbnMnICApLCB0cnVlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfc3RkX2dlbmVyYXRlX3NlcmllczogLT5cbiAgICB7IHRlbXAsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3RlbXAoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBzcWxpdGU+IHNlbGVjdCAqIGZyb20gZ2VuZXJhdGVfc2VyaWVzKCAxLCAxMCwgMCApO1xuICAgICMg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXG4gICAgIyDilIIgdmFsdWUg4pSCXG4gICAgIyDilJzilIDilIDilIDilIDilIDilIDilIDilKRcbiAgICAjIOKUgiAxICAgICDilIJcbiAgICAjIOKUgiAyICAgICDilIJcbiAgICAjIOKUgiAzICAgICDilIJcbiAgICAjIOKUgiA0ICAgICDilIJcbiAgICAjIOKUgiA1ICAgICDilIJcbiAgICAjIOKUgiA2ICAgICDilIJcbiAgICAjIOKUgiA3ICAgICDilIJcbiAgICAjIOKUgiA4ICAgICDilIJcbiAgICAjIOKUgiA5ICAgICDilIJcbiAgICAjIOKUgiAxMCAgICDilIJcbiAgICAjIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmFxuICAgICMgc3FsaXRlPiBzZWxlY3QgKiBmcm9tIGdlbmVyYXRlX3NlcmllcyggMSwgMTAsIDAgKTtcbiAgICAjIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkFxuICAgICMg4pSCIHZhbHVlIOKUglxuICAgICMg4pSc4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSkXG4gICAgIyDilIIgMSAgICAg4pSCXG4gICAgIyDilIIgMiAgICAg4pSCXG4gICAgIyDilIIgMyAgICAg4pSCXG4gICAgIyDilIIgNCAgICAg4pSCXG4gICAgIyDilIIgNSAgICAg4pSCXG4gICAgIyDilIIgNiAgICAg4pSCXG4gICAgIyDilIIgNyAgICAg4pSCXG4gICAgIyDilIIgOCAgICAg4pSCXG4gICAgIyDilIIgOSAgICAg4pSCXG4gICAgIyDilIIgMTAgICAg4pSCXG4gICAgIyDilJTilIDilIDilIDilIDilIDilIDilIDilJhcbiAgICAjIHNxbGl0ZT4gc2VsZWN0ICogZnJvbSBnZW5lcmF0ZV9zZXJpZXMoIDEsIDEsIDAgKTtcbiAgICAjIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkFxuICAgICMg4pSCIHZhbHVlIOKUglxuICAgICMg4pSc4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSkXG4gICAgIyDilIIgMSAgICAg4pSCXG4gICAgIyDilJTilIDilIDilIDilIDilIDilIDilIDilJhcbiAgICAjIHNxbGl0ZT4gc2VsZWN0ICogZnJvbSBnZW5lcmF0ZV9zZXJpZXMoIDEsIDAsIDAgKTtcbiAgICAjIHNxbGl0ZT5cblxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIERiIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBkYiA9IG5ldyBEYiAnOm1lbW9yeTonLCB7IHJlYnVpbGQ6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzM0ID0gLT4gWyAoIHJvdy52YWx1ZSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gc3RkX2dlbmVyYXRlX3NlcmllcyggMSwgMTAsIDIgKTtcIikuLi4sICBdICksIFsgMSwgMywgNSwgNywgOSBdXG4gICAgICBAZXEgKCDOqWJiZGJyX18zNSA9IC0+IFsgKCByb3cudmFsdWUgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHN0ZF9nZW5lcmF0ZV9zZXJpZXMoIDEsIDEwLCAwICk7XCIpLi4uLCAgXSApLCBbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwIF1cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzM2ID0gLT4gWyAoIHJvdy52YWx1ZSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gc3RkX2dlbmVyYXRlX3NlcmllcyggMSwgMSwgMCApO1wiKS4uLiwgICBdICksIFsgMSBdXG4gICAgICBAZXEgKCDOqWJiZGJyX18zNyA9IC0+IFsgKCByb3cudmFsdWUgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHN0ZF9nZW5lcmF0ZV9zZXJpZXMoIDEsIDAsIDAgKTtcIikuLi4sICAgXSApLCBbXVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdGF0ZW1lbnRfaW5oZXJpdGFuY2U6IC0+XG4gICAgIyB7IHRlbXAsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3RlbXAoKVxuICAgICMgeyBTdGF0ZW1lbnRTeW5jLCAgICAgICAgICAgIH0gPSByZXF1aXJlICdub2RlOnNxbGl0ZSdcbiAgICBCc3FsMyAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9ub2RlX21vZHVsZXMvYmV0dGVyLXNxbGl0ZTMnXG4gICAgc3RhdGVtZW50X2NsYXNzICAgICAgICAgICAgICAgPSAoICggbmV3IEJzcWwzICc6bWVtb3J5OicgKS5wcmVwYXJlIFNRTFwic2VsZWN0IDEgd2hlcmUgZmFsc2U7XCIgKS5jb25zdHJ1Y3RvclxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZ2V0X2Z1bmN0aW9uX25hbWVzID0gKCBkYmEgKSAtPiBuZXcgU2V0ICggbmFtZSBmb3IgeyBuYW1lLCB9IGZyb20gXFxcbiAgICAgIGRiYS53YWxrIFNRTFwic2VsZWN0IG5hbWUgZnJvbSBwcmFnbWFfZnVuY3Rpb25fbGlzdCgpIG9yZGVyIGJ5IG5hbWU7XCIgKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZ2V0X3RhYmxlX25hbWVzID0gKCBkYmEgKSAtPiBuZXcgU2V0ICggbmFtZSBmb3IgeyBuYW1lLCB9IGZyb20gXFxcbiAgICAgIGRiYS53YWxrIFNRTFwiXCJcInNlbGVjdCBuYW1lIGZyb20gc3FsaXRlX3NjaGVtYVxuICAgICAgd2hlcmUgdHlwZSBpcyAndGFibGUnIG9yZGVyIGJ5IG5hbWU7XCJcIlwiIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGdldF92aWV3X25hbWVzID0gKCBkYmEgKSAtPiBuZXcgU2V0ICggbmFtZSBmb3IgeyBuYW1lLCB9IGZyb20gXFxcbiAgICAgIGRiYS53YWxrIFNRTFwiXCJcInNlbGVjdCBuYW1lIGZyb20gc3FsaXRlX3NjaGVtYVxuICAgICAgd2hlcmUgdHlwZSBpcyAndmlldycgb3JkZXIgYnkgbmFtZTtcIlwiXCIgKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZ2V0X3RyaWdnZXJfbmFtZXMgPSAoIGRiYSApIC0+IG5ldyBTZXQgKCBuYW1lIGZvciB7IG5hbWUsIH0gZnJvbSBcXFxuICAgICAgZGJhLndhbGsgU1FMXCJcIlwic2VsZWN0IG5hbWUgZnJvbSBzcWxpdGVfc2NoZW1hXG4gICAgICB3aGVyZSB0eXBlIGlzICd0cmlnZ2VyJyBvcmRlciBieSBuYW1lO1wiXCJcIiApXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBBIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAZnVuY3Rpb25zOlxuICAgICAgICBmbl9hOlxuICAgICAgICAgIHZhbHVlOiAtPiByZXR1cm4gMVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIHNlbGVjdF9hOiBTUUxcInNlbGVjdCBmbl9hKCkgYXMgb25lLCAyIGFzIHR3bztcIlxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiY3JlYXRlIHRhYmxlIHRhYmxlX2EgKCBkIHRleHQgKTtcIlxuICAgICAgICBTUUxcImNyZWF0ZSB2aWV3IHZpZXdfYSBhcyBzZWxlY3QgKiBmcm9tIHRhYmxlX2E7XCJcbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgQiBleHRlbmRzIEFcbiAgICAgIEBmdW5jdGlvbnM6XG4gICAgICAgIGZuX2I6XG4gICAgICAgICAgdmFsdWU6IC0+IHJldHVybiAxXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgc2VsZWN0X2I6IFNRTFwic2VsZWN0IGZuX2IoKSBhcyBvbmUsIDIgYXMgdHdvO1wiXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJjcmVhdGUgdGFibGUgdGFibGVfYiAoIGQgdGV4dCApO1wiXG4gICAgICAgIFNRTFwiY3JlYXRlIHZpZXcgdmlld19iIGFzIHNlbGVjdCAqIGZyb20gdGFibGVfYjtcIlxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBDX2R1cGxpY2F0ZV9mdW5jdGlvbiBleHRlbmRzIEJcbiAgICAgIEBvdmVyd3JpdGU6IGZhbHNlXG4gICAgICBAZnVuY3Rpb25zOlxuICAgICAgICBmbl9iOlxuICAgICAgICAgIHZhbHVlOiAtPiByZXR1cm4gMVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgQ19kdXBsaWNhdGVfc3RhdGVtZW50IGV4dGVuZHMgQlxuICAgICAgQG92ZXJ3cml0ZTogZmFsc2VcbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBzZWxlY3RfYjogU1FMXCJzZWxlY3QgZm5fYigpIGFzIG9uZSwgMiBhcyB0d287XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIENfZHVwbGljYXRlX3RhYmxlIGV4dGVuZHMgQlxuICAgICAgQG92ZXJ3cml0ZTogZmFsc2VcbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcImNyZWF0ZSB0YWJsZSB0YWJsZV9iICggZCB0ZXh0ICk7XCJcbiAgICAgICAgU1FMXCJjcmVhdGUgdmlldyB2aWV3X2IgYXMgc2VsZWN0ICogZnJvbSB0YWJsZV9iO1wiXG4gICAgICAgIF1cbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgYiA9IG5ldyBCKClcbiAgICAjIGRlYnVnICfOqWJiZGJyX18zOCcsIGJcbiAgICAjIGRlYnVnICfOqWJiZGJyX18zOScsICdmdW5jdGlvbnM6ICcsIGdldF9mdW5jdGlvbl9uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNDAnLCAnZnVuY3Rpb25zOiAnLCAoIGdldF9mdW5jdGlvbl9uYW1lcyBiICkuaGFzICdmbl9hJ1xuICAgICMgZGVidWcgJ86pYmJkYnJfXzQxJywgJ2Z1bmN0aW9uczogJywgKCBnZXRfZnVuY3Rpb25fbmFtZXMgYiApLmhhcyAnZm5fYidcbiAgICAjIGRlYnVnICfOqWJiZGJyX180MicsICdmdW5jdGlvbnM6ICcsICggZ2V0X2Z1bmN0aW9uX25hbWVzIGIgKS5oYXMgJ3JlZ2V4cCdcbiAgICAjIGRlYnVnICfOqWJiZGJyX180MycsICd0YWJsZXM6ICAgICcsIGdldF90YWJsZV9uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNDQnLCAndmlld3M6ICAgICAnLCBnZXRfdmlld19uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNDUnLCAndHJpZ2dlcnM6ICAnLCBnZXRfdHJpZ2dlcl9uYW1lcyBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNDYnLCAnc3RhdGVtZW50czonLCAoIGsgZm9yIGsgb2YgYi5zdGF0ZW1lbnRzIClcbiAgICAjIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZGJhID0gbmV3IERicmljX3N0ZCAnOm1lbW9yeTonLCB7IHJlYnVpbGQ6IHRydWUsIH1cbiAgICAgICMgZGJhID0gbmV3IEEoKVxuICAgICAgIyBkYmEgPSBuZXcgQigpXG4gICAgICBkYmEuZGIuZnVuY3Rpb24gJ3p6el90ZXN0JywgeyBkZXRlcm1pbmlzdGljOiB0cnVlLCB2YXJhcmdzOiBmYWxzZSwgZGlyZWN0T25seTogZmFsc2UsIH0sIC0+IFwiWlpaX1RFU1RcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBmdW5jdGlvbl9uYW1lcyAgPSBnZXRfZnVuY3Rpb25fbmFtZXMgZGJhXG4gICAgICB0YWJsZV9uYW1lcyAgICAgPSBnZXRfdGFibGVfbmFtZXMgZGJhXG4gICAgICB2aWV3X25hbWVzICAgICAgPSBnZXRfdmlld19uYW1lcyBkYmFcbiAgICAgIHRyaWdnZXJfbmFtZXMgICA9IGdldF90cmlnZ2VyX25hbWVzIGRiYVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX180NyA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfc2NoZW1hICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNDggPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3RhYmxlcyAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzQ5ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF92aWV3cyAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX181MCA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfcmVsYXRpb25zICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNTEgPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYSAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX181MiA9IC0+IGRiYS5zdGF0ZW1lbnRzLnNlbGVjdF9iICAgICAgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fNTMgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ3p6el90ZXN0JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzU0ID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdyZWdleHAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX181NSA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnZm5fYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzU2ID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdmbl9iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX181NyA9IC0+IHRhYmxlX25hbWVzLmhhcyAndGFibGVfYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzU4ID0gLT4gdGFibGVfbmFtZXMuaGFzICd0YWJsZV9iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmRicl9fNTkgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3RhYmxlcycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzYwID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF92aWV3cycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX182MSA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfcmVsYXRpb25zJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNjIgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX182MyA9IC0+IHZpZXdfbmFtZXMuaGFzICd2aWV3X2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZGJhID0gbmV3IEEgeyByZWJ1aWxkOiB0cnVlLCB9XG4gICAgICBkYmEuZGIuZnVuY3Rpb24gJ3p6el90ZXN0JywgeyBkZXRlcm1pbmlzdGljOiB0cnVlLCB2YXJhcmdzOiBmYWxzZSwgZGlyZWN0T25seTogZmFsc2UsIH0sIC0+IFwiWlpaX1RFU1RcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBmdW5jdGlvbl9uYW1lcyAgPSBnZXRfZnVuY3Rpb25fbmFtZXMgZGJhXG4gICAgICB0YWJsZV9uYW1lcyAgICAgPSBnZXRfdGFibGVfbmFtZXMgZGJhXG4gICAgICB2aWV3X25hbWVzICAgICAgPSBnZXRfdmlld19uYW1lcyBkYmFcbiAgICAgIHRyaWdnZXJfbmFtZXMgICA9IGdldF90cmlnZ2VyX25hbWVzIGRiYVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX182NCA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfc2NoZW1hICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNjUgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3RhYmxlcyAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzY2ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF92aWV3cyAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX182NyA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfcmVsYXRpb25zICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNjggPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYSAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzY5ID0gLT4gZGJhLnN0YXRlbWVudHMuc2VsZWN0X2IgICAgICAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX183MCA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnenp6X3Rlc3QnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNzEgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ3JlZ2V4cCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzcyID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdmbl9hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX183MyA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnZm5fYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fNzQgPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzc1ID0gLT4gdGFibGVfbmFtZXMuaGFzICd0YWJsZV9iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmRicl9fNzYgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3RhYmxlcycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzc3ID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF92aWV3cycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX183OCA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfcmVsYXRpb25zJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNzkgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzgwID0gLT4gdmlld19uYW1lcy5oYXMgJ3ZpZXdfYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBkYmEgPSBuZXcgQiB7IHJlYnVpbGQ6IHRydWUsIH1cbiAgICAgIGRiYS5kYi5mdW5jdGlvbiAnenp6X3Rlc3QnLCB7IGRldGVybWluaXN0aWM6IHRydWUsIHZhcmFyZ3M6IGZhbHNlLCBkaXJlY3RPbmx5OiBmYWxzZSwgfSwgLT4gXCJaWlpfVEVTVFwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZ1bmN0aW9uX25hbWVzICA9IGdldF9mdW5jdGlvbl9uYW1lcyBkYmFcbiAgICAgIHRhYmxlX25hbWVzICAgICA9IGdldF90YWJsZV9uYW1lcyBkYmFcbiAgICAgIHZpZXdfbmFtZXMgICAgICA9IGdldF92aWV3X25hbWVzIGRiYVxuICAgICAgdHJpZ2dlcl9uYW1lcyAgID0gZ2V0X3RyaWdnZXJfbmFtZXMgZGJhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzgxID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9zY2hlbWEgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184MiA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdGFibGVzICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODMgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3ZpZXdzICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg0ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9yZWxhdGlvbnMgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184NSA9IC0+IGRiYS5zdGF0ZW1lbnRzLnNlbGVjdF9hICAgICAgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODYgPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYiAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fODcgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ3p6el90ZXN0JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg4ID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdyZWdleHAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184OSA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnZm5fYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTAgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fOTEgPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzkyID0gLT4gdGFibGVfbmFtZXMuaGFzICd0YWJsZV9iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX185MyA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdGFibGVzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTQgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3ZpZXdzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzk1ID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF9yZWxhdGlvbnMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX185NiA9IC0+IHZpZXdfbmFtZXMuaGFzICd2aWV3X2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTcgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQHRocm93cyAoIM6pYmJkYnJfXzk4ID0gLT4gbmV3IENfZHVwbGljYXRlX2Z1bmN0aW9uICB7IHJlYnVpbGQ6IHRydWUsIH0gKSwgL2EgVURGIG9yIGJ1aWx0LWluIGZ1bmN0aW9uIG5hbWVkICdmbl9iJyBoYXMgYWxyZWFkeSBiZWVuIGRlY2xhcmVkL1xuICAgICAgQHRocm93cyAoIM6pYmJkYnJfXzk5ID0gLT4gbmV3IENfZHVwbGljYXRlX3N0YXRlbWVudCB7IHJlYnVpbGQ6IHRydWUsIH0gKSwgL3N0YXRlbWVudCAnc2VsZWN0X2InIGlzIGFscmVhZHkgZGVjbGFyZWQvXG4gICAgICBAdGhyb3dzICggzqliYmRicl8xMDAgPSAtPiBuZXcgQ19kdXBsaWNhdGVfdGFibGUgICAgIHsgcmVidWlsZDogdHJ1ZSwgfSApLCAvdGFibGUgdGFibGVfYiBhbHJlYWR5IGV4aXN0cy9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzYW1wbGVfZGI6IC0+XG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zdG9yZSBleHRlbmRzIERicmljXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIHN0b3JlX2ZhY2V0cyAoXG4gICAgICAgICAgZmFjZXRfa2V5ICAgICAgICAgICAgIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgIGZhY2V0X3ZhbHVlICAgICAgICAgICBqc29uICk7XCJcIlwiXG4gICAgICAgIF1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBzdG9yZV9pbnNlcnRfZmFjZXQ6IFNRTFwiXCJcIlxuICAgICAgICAgIGluc2VydCBpbnRvIHN0b3JlX2ZhY2V0cyAoIGZhY2V0X2tleSwgZmFjZXRfdmFsdWUgKSB2YWx1ZXMgKCAkZmFjZXRfa2V5LCAkZmFjZXRfdmFsdWUgKVxuICAgICAgICAgICAgb24gY29uZmxpY3QgKCBmYWNldF9rZXkgKSBkbyB1cGRhdGUgc2V0IGZhY2V0X3ZhbHVlID0gZXhjbHVkZWQuZmFjZXRfdmFsdWU7XCJcIlwiXG4gICAgICAgIHN0b3JlX2dldF9mYWNldHM6IFNRTFwiXCJcIlxuICAgICAgICAgIHNlbGVjdCAqIGZyb20gc3RvcmVfZmFjZXRzIG9yZGVyIGJ5IGZhY2V0X2tleTtcIlwiXCJcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHN0b3JlICAgICA9IERicmljX3N0b3JlLnJlYnVpbGQgZGJfcGF0aFxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAnb25lJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAxICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3R3bycsICAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMiAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDMgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAnaWlpJyAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RydWUnLCAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgdHJ1ZSAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICdmYWxzZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IGZhbHNlICAgKSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjYXN0X3JvdyA9ICggcm93ICkgLT5cbiAgICAgICAgcmV0dXJuIHJvdyB1bmxlc3Mgcm93P1xuICAgICAgICByZXR1cm4geyByb3cuLi4sIGZhY2V0X3ZhbHVlOiAoIEpTT04ucGFyc2Ugcm93LmZhY2V0X3ZhbHVlICksIF92OiByb3cuZmFjZXRfdmFsdWUsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcm93cyA9IHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfZ2V0X2ZhY2V0cy5pdGVyYXRlKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTAxID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgICksIHsgZmFjZXRfa2V5OiAnZmFsc2UnLCBmYWNldF92YWx1ZTogZmFsc2UsIF92OiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTAyID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgICksIHsgZmFjZXRfa2V5OiAnb25lJywgZmFjZXRfdmFsdWU6IDEsIF92OiAxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTAzID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgICksIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogJ2lpaScsIF92OiAnXCJpaWlcIicgfVxuICAgICAgQGVxICggzqliYmRicl8xMDQgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBmYWNldF9rZXk6ICd0cnVlJywgZmFjZXRfdmFsdWU6IHRydWUsIF92OiAndHJ1ZScgfVxuICAgICAgQGVxICggzqliYmRicl8xMDUgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBmYWNldF9rZXk6ICd0d28nLCBmYWNldF92YWx1ZTogMiwgX3Y6IDIgfVxuICAgICAgQGVxICggzqliYmRicl8xMDYgPSAtPiByb3dzLm5leHQoKS5kb25lICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNhbXBsZV9kYl93aXRoX2JzcWw6IC0+XG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zdG9yZSBleHRlbmRzIERicmljXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIHN0b3JlX2ZhY2V0cyAoXG4gICAgICAgICAgZmFjZXRfa2V5ICAgICAgICAgICAgIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgIGZhY2V0X3ZhbHVlICAgICAgICAgICBqc29uICk7XCJcIlwiXG4gICAgICAgIF1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICAjIHN0b3JlX2NyZWF0ZV90YWJsZXM6IFNRTFwiXCJcIlxuICAgICAgICAjICAgXCJcIlwiXG4gICAgICAgIHN0b3JlX2luc2VydF9mYWNldDogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8gc3RvcmVfZmFjZXRzICggZmFjZXRfa2V5LCBmYWNldF92YWx1ZSApIHZhbHVlcyAoICRmYWNldF9rZXksICRmYWNldF92YWx1ZSApXG4gICAgICAgICAgICBvbiBjb25mbGljdCAoIGZhY2V0X2tleSApIGRvIHVwZGF0ZSBzZXQgZmFjZXRfdmFsdWUgPSBleGNsdWRlZC5mYWNldF92YWx1ZTtcIlwiXCJcbiAgICAgICAgc3RvcmVfZ2V0X2ZhY2V0czogU1FMXCJcIlwiXG4gICAgICAgICAgc2VsZWN0ICogZnJvbSBzdG9yZV9mYWNldHMgb3JkZXIgYnkgZmFjZXRfa2V5O1wiXCJcIlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIHN0b3JlICAgICA9IERicmljX3N0b3JlLnJlYnVpbGQgJzptZW1vcnk6J1xuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAnb25lJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAxICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3R3bycsICAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMiAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDMgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAnaWlpJyAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RydWUnLCAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgdHJ1ZSAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICdmYWxzZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IGZhbHNlICAgKSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjYXN0X3JvdyA9ICggcm93ICkgLT5cbiAgICAgICAgcmV0dXJuIHJvdyB1bmxlc3Mgcm93P1xuICAgICAgICByZXR1cm4geyByb3cuLi4sIGZhY2V0X3ZhbHVlOiAoIEpTT04ucGFyc2Ugcm93LmZhY2V0X3ZhbHVlICksIF92OiByb3cuZmFjZXRfdmFsdWUsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcm93cyA9IHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfZ2V0X2ZhY2V0cy5pdGVyYXRlKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTA3ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICdmYWxzZScsIGZhY2V0X3ZhbHVlOiBmYWxzZSwgX3Y6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqliYmRicl8xMDggPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ29uZScsIGZhY2V0X3ZhbHVlOiAxLCBfdjogMSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEwOSA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogJ2lpaScsIF92OiAnXCJpaWlcIicgfVxuICAgICAgQGVxICggzqliYmRicl8xMTAgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ3RydWUnLCBmYWNldF92YWx1ZTogdHJ1ZSwgX3Y6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzExMSA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAndHdvJywgZmFjZXRfdmFsdWU6IDIsIF92OiAyIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTEyID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgdW5kZWZpbmVkXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdWRmX2Z1bmN0aW9uc193aXRoX25zcWw6IC0+XG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zcXVhcmVzIGV4dGVuZHMgRGJyaWNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBudW1iZXJzIChcbiAgICAgICAgICAgIG4gbnVtYmVyIHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1wiXCJcIlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdmlldyBzcXVhcmVzIGFzIHNlbGVjdFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHNxdWFyZSggbiApIGFzIHNxdWFyZVxuICAgICAgICAgIGZyb20gbnVtYmVyc1xuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAgIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIGluc2VydF9udW1iZXI6IFNRTFwiXCJcImluc2VydCBpbnRvIG51bWJlcnMgKCBuICkgdmFsdWVzICggJG4gKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggbiApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgIHNlbGVjdF9mcm9tX3NxdWFyZXM6IFNRTFwiXCJcInNlbGVjdFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHNxdWFyZVxuICAgICAgICAgIGZyb20gc3F1YXJlc1xuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBmdW5jdGlvbnM6XG4gICAgICAgIHNxdWFyZTpcbiAgICAgICAgICBkZXRlcm1pbmlzdGljOiAgdHJ1ZVxuICAgICAgICAgIHZhcmFyZ3M6ICAgICAgICBmYWxzZVxuICAgICAgICAgIHZhbHVlOiAgICAgICAgICAgKCBuICkgLT4gbiAqKiAyXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBzcXVhcmVzICAgPSBEYnJpY19zcXVhcmVzLnJlYnVpbGQgZGJfcGF0aFxuICAgICAgZm9yIG4gaW4gWyAwIC4uLiAxMCBdXG4gICAgICAgIHNxdWFyZXMuc3RhdGVtZW50cy5pbnNlcnRfbnVtYmVyLnJ1biB7IG4sIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzExMycsIHJvdyBmb3Igcm93IGZyb20gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICByb3dzID0gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICBAZXEgKCDOqWJiZGJyXzExNCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMCwgc3F1YXJlOiAwIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTE1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAxLCBzcXVhcmU6IDEgfVxuICAgICAgQGVxICggzqliYmRicl8xMTYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDIsIHNxdWFyZTogNCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzExNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMywgc3F1YXJlOiA5IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTE4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA0LCBzcXVhcmU6IDE2IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTE5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA1LCBzcXVhcmU6IDI1IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTIwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA2LCBzcXVhcmU6IDM2IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTIxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA3LCBzcXVhcmU6IDQ5IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTIyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA4LCBzcXVhcmU6IDY0IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTIzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA5LCBzcXVhcmU6IDgxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTI0ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfYWdncmVnYXRlc193aXRoX25zcWw6IC0+XG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zcXVhcmVzIGV4dGVuZHMgRGJyaWNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBudW1iZXJzIChcbiAgICAgICAgICAgIG4gbnVtYmVyIHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1wiXCJcIlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdmlldyBzcXVhcmVzIGFzIHNlbGVjdFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHNxdWFyZSggbiApIGFzIHNxdWFyZVxuICAgICAgICAgIGZyb20gbnVtYmVyc1xuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAgIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIGluc2VydF9udW1iZXI6IFNRTFwiXCJcImluc2VydCBpbnRvIG51bWJlcnMgKCBuICkgdmFsdWVzICggJG4gKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggbiApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgIHNlbGVjdF9mcm9tX251bWJlcnM6IFNRTFwiXCJcInNlbGVjdCBuIGZyb20gbnVtYmVycyBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9zcXVhcmVzOiBTUUxcIlwiXCJzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUsXG4gICAgICAgICAgICBwcm9kdWN0KCBuICkgICAgICBhcyBwX24sXG4gICAgICAgICAgICBwcm9kdWN0KCBzcXVhcmUgKSBhcyBwX3NxdWFyZVxuICAgICAgICAgIGZyb20gc3F1YXJlc1xuICAgICAgICAgIHdoZXJlIG4gYmV0d2VlbiAkc3RhcnQgYW5kICRzdG9wXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGZ1bmN0aW9uczpcbiAgICAgICAgc3F1YXJlOlxuICAgICAgICAgIGRldGVybWluaXN0aWM6ICB0cnVlXG4gICAgICAgICAgdmFyYXJnczogICAgICAgIGZhbHNlXG4gICAgICAgICAgdmFsdWU6ICAgICAgICAgICAoIG4gKSAtPiBuICoqIDJcbiAgICAgIEBhZ2dyZWdhdGVfZnVuY3Rpb25zOlxuICAgICAgICBwcm9kdWN0OlxuICAgICAgICAgIHN0YXJ0OiAgICAgICAgICAtPiAxICMjIyBOT1RFIGNhbiB1c2UgYG51bGxgIGZvciBiU1FMLCBidXQgblNRTCBuZWVkcyBgMWAgIyMjXG4gICAgICAgICAgc3RlcDogICAgICAgICAgIHByb2R1Y3QgPSAoIHRvdGFsLCBlbGVtZW50ICkgLT5cbiAgICAgICAgICAgICMgZGVidWcgJ86pYmJkYnJfMTI1JywgeyB0b3RhbCwgZWxlbWVudCwgfVxuICAgICAgICAgICAgcmV0dXJuICggdG90YWwgPyAxICkgKiBlbGVtZW50XG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy11ZGZfYWdncmVnYXRlc193aXRoX25zcWwuc3FsaXRlJ1xuICAgICAgc3F1YXJlcyAgID0gRGJyaWNfc3F1YXJlcy5yZWJ1aWxkIGRiX3BhdGhcbiAgICAgIGZvciBuIGluIFsgMCAuLi4gMTAgXVxuICAgICAgICBzcXVhcmVzLnN0YXRlbWVudHMuaW5zZXJ0X251bWJlci5ydW4geyBuLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xMjYnLCByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMSwgc3RvcDogNSwgfVxuICAgICAgcm93cyA9IHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMSwgc3RvcDogNSwgfVxuICAgICAgQGVxICggzqliYmRicl8xMjcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDEsIHNxdWFyZTogMSwgcF9uOiAxMjAsIHBfc3F1YXJlOiAxNDQwMCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEyOCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzEyOScsIHJvdyBmb3Igcm93IGZyb20gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICBAdGhyb3dzICggzqliYmRicl8xMzAgPSAtPiBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlKCkgKSwgL21pc3NpbmcgbmFtZWQgcGFyYW1ldGVycy9pXG4gICAgICAjIEBlcSAoIM6pYmJkYnJfMTMxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiBudWxsLCBzcXVhcmU6IG51bGwsIHBfbjogMSwgcF9zcXVhcmU6IDEgfVxuICAgICAgIyBAZXEgKCDOqWJiZGJyXzEzMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfZnVuY3Rpb25zX3dpdGhfYnNxbDogLT5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3NxdWFyZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIG51bWJlcnMgKFxuICAgICAgICAgICAgbiBudW1iZXIgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IHNxdWFyZXMgYXMgc2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlKCBuICkgYXMgc3F1YXJlXG4gICAgICAgICAgZnJvbSBudW1iZXJzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgaW5zZXJ0X251bWJlcjogU1FMXCJcIlwiaW5zZXJ0IGludG8gbnVtYmVycyAoIG4gKSB2YWx1ZXMgKCAkbiApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBuICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fc3F1YXJlczogU1FMXCJcIlwic2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgZnJvbSBzcXVhcmVzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGZ1bmN0aW9uczpcbiAgICAgICAgc3F1YXJlOlxuICAgICAgICAgIGRldGVybWluaXN0aWM6ICB0cnVlXG4gICAgICAgICAgdmFyYXJnczogICAgICAgIGZhbHNlXG4gICAgICAgICAgdmFsdWU6ICAgICAgICAgICAoIG4gKSAtPiBuICoqIDJcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHNxdWFyZXMgICA9IERicmljX3NxdWFyZXMucmVidWlsZCBkYl9wYXRoXG4gICAgICBmb3IgbiBpbiBbIDAgLi4uIDEwIF1cbiAgICAgICAgc3F1YXJlcy5zdGF0ZW1lbnRzLmluc2VydF9udW1iZXIucnVuIHsgbiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlKClcbiAgICAgIHJvd3MgPSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTMzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAwLCBzcXVhcmU6IDAgfVxuICAgICAgQGVxICggzqliYmRicl8xMzQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDEsIHNxdWFyZTogMSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEzNSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMiwgc3F1YXJlOiA0IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTM2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAzLCBzcXVhcmU6IDkgfVxuICAgICAgQGVxICggzqliYmRicl8xMzcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDQsIHNxdWFyZTogMTYgfVxuICAgICAgQGVxICggzqliYmRicl8xMzggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDUsIHNxdWFyZTogMjUgfVxuICAgICAgQGVxICggzqliYmRicl8xMzkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDYsIHNxdWFyZTogMzYgfVxuICAgICAgQGVxICggzqliYmRicl8xNDAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDcsIHNxdWFyZTogNDkgfVxuICAgICAgQGVxICggzqliYmRicl8xNDEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDgsIHNxdWFyZTogNjQgfVxuICAgICAgQGVxICggzqliYmRicl8xNDIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDksIHNxdWFyZTogODEgfVxuICAgICAgQGVxICggzqliYmRicl8xNDMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB1bmRlZmluZWRcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdWRmX2FnZ3JlZ2F0ZXNfd2l0aF9ic3FsOiAtPlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3F1YXJlcyBleHRlbmRzIERicmljXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgbnVtYmVycyAoXG4gICAgICAgICAgICBuIG51bWJlciB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHZpZXcgc3F1YXJlcyBhcyBzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUoIG4gKSBhcyBzcXVhcmVcbiAgICAgICAgICBmcm9tIG51bWJlcnNcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfbnVtYmVyOiBTUUxcIlwiXCJpbnNlcnQgaW50byBudW1iZXJzICggbiApIHZhbHVlcyAoICRuIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIG4gKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9zcXVhcmVzOiBTUUxcIlwiXCJzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUsXG4gICAgICAgICAgICBwcm9kdWN0KCBuICkgICAgICBhcyBwX24sXG4gICAgICAgICAgICBwcm9kdWN0KCBzcXVhcmUgKSBhcyBwX3NxdWFyZVxuICAgICAgICAgIGZyb20gc3F1YXJlc1xuICAgICAgICAgIHdoZXJlIG4gYmV0d2VlbiAkc3RhcnQgYW5kICRzdG9wXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGZ1bmN0aW9uczpcbiAgICAgICAgc3F1YXJlOlxuICAgICAgICAgIGRldGVybWluaXN0aWM6ICB0cnVlXG4gICAgICAgICAgdmFyYXJnczogICAgICAgIGZhbHNlXG4gICAgICAgICAgdmFsdWU6ICAgICAgICAgICBzcXVhcmUgPSAoIG4gKSAtPiBuICoqIDJcbiAgICAgIEBhZ2dyZWdhdGVfZnVuY3Rpb25zOlxuICAgICAgICBwcm9kdWN0OlxuICAgICAgICAgIHN0YXJ0OiAgICAgICAgICAtPiBudWxsXG4gICAgICAgICAgc3RlcDogICAgICAgICAgIHByb2R1Y3QgPSAoIHRvdGFsLCBlbGVtZW50ICkgLT5cbiAgICAgICAgICAgICMgZGVidWcgJ86pYmJkYnJfMTQ0JywgeyB0b3RhbCwgZWxlbWVudCwgfVxuICAgICAgICAgICAgcmV0dXJuICggdG90YWwgPyAxICkgKiBlbGVtZW50XG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgc3F1YXJlcyAgID0gRGJyaWNfc3F1YXJlcy5yZWJ1aWxkKClcbiAgICAgIGZvciBuIGluIFsgMCAuLi4gMTAgXVxuICAgICAgICBzcXVhcmVzLnN0YXRlbWVudHMuaW5zZXJ0X251bWJlci5ydW4geyBuLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xNDUnLCByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMiwgc3RvcDogMywgfVxuICAgICAgcm93cyA9IHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMiwgc3RvcDogMywgfVxuICAgICAgQGVxICggzqliYmRicl8xNDYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDIsIHNxdWFyZTogNCwgcF9uOiA2LCBwX3NxdWFyZTogMzYgfVxuICAgICAgQGVxICggzqliYmRicl8xNDcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB1bmRlZmluZWRcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdWRmX3RhYmxlX2Z1bmN0aW9uX3dpdGhfYnNxbDogLT5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3BocmFzZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIHBocmFzZXMgKFxuICAgICAgICAgICAgcGhyYXNlIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIGluc2VydF9waHJhc2U6IFNRTFwiXCJcImluc2VydCBpbnRvIHBocmFzZXMgKCBwaHJhc2UgKSB2YWx1ZXMgKCAkcGhyYXNlIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIHBocmFzZSApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgIHNlbGVjdF9mcm9tX3BocmFzZXM6IFNRTFwiXCJcIlxuICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICAqXG4gICAgICAgICAgICBmcm9tXG4gICAgICAgICAgICAgIHBocmFzZXMgYXMgcCxcbiAgICAgICAgICAgICAgcmVfbWF0Y2hlcyggcC5waHJhc2UsICRtYXRjaGVyICkgYXMgcnhcbiAgICAgICAgICAgIG9yZGVyIGJ5IHAucGhyYXNlO1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAdGFibGVfZnVuY3Rpb25zOlxuICAgICAgICByZV9tYXRjaGVzOlxuICAgICAgICAgIGNvbHVtbnM6ICAgICAgWyAnbWF0Y2gnLCAnY2FwdHVyZScsIF1cbiAgICAgICAgICBwYXJhbWV0ZXJzOiAgIFsgJ3RleHQnLCAncGF0dGVybicsIF1cbiAgICAgICAgICByb3dzOiAoIHRleHQsIHBhdHRlcm4gKSAtPlxuICAgICAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwIHBhdHRlcm4sICdnJ1xuICAgICAgICAgICAgZm9yIG1hdGNoIGZyb20gdGV4dC5tYXRjaEFsbCByZWdleFxuICAgICAgICAgICAgICB5aWVsZCBbIG1hdGNoWyAwIF0sIG1hdGNoWyAxIF0sIF1cbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgcGhyYXNlcyAgID0gRGJyaWNfcGhyYXNlcy5yZWJ1aWxkKClcbiAgICAgIGZvciBwaHJhc2UgaW4gWyAnZWxldmVuJywgJ2ZpdmUnLCAnbmluZScsICdvbmUnLCAnb25lIHBvaW50IGZpdmUnLCAnc2V2ZW4nLCAndGhyZWUgcG9pbnQgb25lJyBdXG4gICAgICAgIHBocmFzZXMuc3RhdGVtZW50cy5pbnNlcnRfcGhyYXNlLnJ1biB7IHBocmFzZSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTQ4Jywgcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fcGhyYXNlcy5pdGVyYXRlIHsgbWF0Y2hlcjogJ14uKihbYWVpb3VdLmUpLiokJywgfVxuICAgICAgIyBlY2hvKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE0OScsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3BocmFzZXMuaXRlcmF0ZSB7IG1hdGNoZXI6ICcoW15hZWlvdV0/W2FlaW91XSspKD89W21udl0pJywgfVxuICAgICAgcm93cyA9IHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9waHJhc2VzLml0ZXJhdGUgeyBtYXRjaGVyOiAnKFteYWVpb3VdP1thZWlvdV0rKSg/PVttbnZdKScsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTUwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdlbGV2ZW4nLCBtYXRjaDogJ2xlJywgY2FwdHVyZTogJ2xlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnZWxldmVuJywgbWF0Y2g6ICd2ZScsIGNhcHR1cmU6ICd2ZScgfVxuICAgICAgQGVxICggzqliYmRicl8xNTIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ2ZpdmUnLCBtYXRjaDogJ2ZpJywgY2FwdHVyZTogJ2ZpJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnbmluZScsIG1hdGNoOiAnbmknLCBjYXB0dXJlOiAnbmknIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdvbmUnLCBtYXRjaDogJ28nLCBjYXB0dXJlOiAnbycgfVxuICAgICAgQGVxICggzqliYmRicl8xNTUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ29uZSBwb2ludCBmaXZlJywgbWF0Y2g6ICdvJywgY2FwdHVyZTogJ28nIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdvbmUgcG9pbnQgZml2ZScsIG1hdGNoOiAncG9pJywgY2FwdHVyZTogJ3BvaScgfVxuICAgICAgQGVxICggzqliYmRicl8xNTcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ29uZSBwb2ludCBmaXZlJywgbWF0Y2g6ICdmaScsIGNhcHR1cmU6ICdmaScgfVxuICAgICAgQGVxICggzqliYmRicl8xNTggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ3NldmVuJywgbWF0Y2g6ICdzZScsIGNhcHR1cmU6ICdzZScgfVxuICAgICAgQGVxICggzqliYmRicl8xNTkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ3NldmVuJywgbWF0Y2g6ICd2ZScsIGNhcHR1cmU6ICd2ZScgfVxuICAgICAgQGVxICggzqliYmRicl8xNjAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ3RocmVlIHBvaW50IG9uZScsIG1hdGNoOiAncG9pJywgY2FwdHVyZTogJ3BvaScgfVxuICAgICAgQGVxICggzqliYmRicl8xNjEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ3RocmVlIHBvaW50IG9uZScsIG1hdGNoOiAnIG8nLCBjYXB0dXJlOiAnIG8nIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTYyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgdW5kZWZpbmVkXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZpbGVfbWlycm9yX2FzX3RhYmxlX2Z1bmN0aW9uOiAtPlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfcGhyYXNlcyBleHRlbmRzIERicmljXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBkYXRhc291cmNlcyAoXG4gICAgICAgICAgICBkc2tleSB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICAgIHBhdGggdGV4dCBub3QgbnVsbCApO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IG1pcnJvciBhcyBzZWxlY3RcbiAgICAgICAgICAgICpcbiAgICAgICAgICBmcm9tXG4gICAgICAgICAgICBkYXRhc291cmNlcyBhcyBkcyxcbiAgICAgICAgICAgIGZpbGVfbGluZXMoIGRzLnBhdGggKSBhcyBmbFxuICAgICAgICAgIG9yZGVyIGJ5IGRzLmRza2V5LCBmbC5saW5lX25yO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBrZXl3b3JkcyAoXG4gICAgICAgICAgICBkc2tleSAgIHRleHQgICAgbm90IG51bGwsXG4gICAgICAgICAgICBsaW5lX25yIGludGVnZXIgbm90IG51bGwsXG4gICAgICAgICAgICBrZXl3b3JkIHRleHQgICAgbm90IG51bGwsXG4gICAgICAgICAgZm9yZWlnbiBrZXkgKCBkc2tleSApIHJlZmVyZW5jZXMgZGF0YXNvdXJjZXMgKCBkc2tleSApLFxuICAgICAgICAgIHByaW1hcnkga2V5ICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKSApO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGluc2VydF9kYXRhc291cmNlOiBTUUxcIlwiXCJpbnNlcnQgaW50byBkYXRhc291cmNlcyAoIGRza2V5LCBwYXRoICkgdmFsdWVzICggJGRza2V5LCAkcGF0aCApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBkc2tleSApIGRvIHVwZGF0ZSBzZXQgcGF0aCA9ICRwYXRoO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGluc2VydF9rZXl3b3JkOiBTUUxcIlwiXCJpbnNlcnQgaW50byBrZXl3b3JkcyAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgdmFsdWVzICggJGRza2V5LCAkbGluZV9uciwgJGtleXdvcmQgKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNlbGVjdF9mcm9tX2RhdGFzb3VyY2VzOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIGRhdGFzb3VyY2VzIG9yZGVyIGJ5IGRza2V5O1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNlbGVjdF9mcm9tX2tleXdvcmRzOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIGtleXdvcmRzIG9yZGVyIGJ5IGtleXdvcmQsIGRza2V5LCBsaW5lX25yO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNlbGVjdF9mcm9tX21pcnJvcjogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBtaXJyb3Igb3JkZXIgYnkgZHNrZXk7XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEB0YWJsZV9mdW5jdGlvbnM6XG4gICAgICAgIGZpbGVfbGluZXM6XG4gICAgICAgICAgY29sdW1uczogICAgICBbICdsaW5lX25yJywgJ2xpbmUnLCBdXG4gICAgICAgICAgcGFyYW1ldGVyczogICBbICdwYXRoJywgXVxuICAgICAgICAgIHJvd3M6ICggcGF0aCApIC0+XG4gICAgICAgICAgICBmb3IgeyBsbnI6IGxpbmVfbnIsIGxpbmUsIGVvbCwgfSBmcm9tIEdVWS5mcy53YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zIHBhdGhcbiAgICAgICAgICAgICAgeWllbGQgeyBsaW5lX25yLCBsaW5lLCB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIHBocmFzZXMgICA9IERicmljX3BocmFzZXMucmVidWlsZCgpXG4gICAgICBAZXEgKCDOqWJiZGJyXzE2MyA9IC0+ICggcGhyYXNlcy5wcmVwYXJlIFNRTFwiXCJcInByYWdtYSBmb3JlaWduX2tleXNcIlwiXCIgKS5nZXQoKSApLCB7IGZvcmVpZ25fa2V5czogMSwgICAgICB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE2NCA9IC0+ICggcGhyYXNlcy5wcmVwYXJlIFNRTFwiXCJcInByYWdtYSBqb3VybmFsX21vZGVcIlwiXCIgKS5nZXQoKSApLCB7IGpvdXJuYWxfbW9kZTogJ21lbW9yeScsICB9XG4gICAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZG8gPT5cbiAgICAgICMgICBkc2tleSA9ICdyZWFkbWUnXG4gICAgICAjICAgcGF0aCAgPSBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL1JFQURNRS5tZCdcbiAgICAgICMgICBwaHJhc2VzLnN0YXRlbWVudHMuaW5zZXJ0X2RhdGFzb3VyY2UucnVuIHsgZHNrZXksIHBhdGggfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkc2tleSA9ICdwYWNrYWdlLWpzb24nXG4gICAgICAgIHBhdGggID0gUEFUSC5yZXNvbHZlIF9fZGlybmFtZSwgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9wYWNrYWdlLmpzb24nXG4gICAgICAgIHBocmFzZXMuc3RhdGVtZW50cy5pbnNlcnRfZGF0YXNvdXJjZS5ydW4geyBkc2tleSwgcGF0aCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xNjUnLCByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9kYXRhc291cmNlcy5pdGVyYXRlKClcbiAgICAgICMgZWNobygpXG4gICAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xNjYnLCByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9taXJyb3IuaXRlcmF0ZSgpXG4gICAgICAjIGVjaG8oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByb3dzID0gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX21pcnJvci5nZXQoKVxuICAgICAgZm9yIHsgZHNrZXksIGxpbmVfbnIsIGxpbmUsIH0gaW4gcGhyYXNlc1xuICAgICAgICBrZXl3b3JkcyA9IGxpbmUuc3BsaXQgLyg/OlxccHtafSspfCgoPzpcXHB7TH0rKXwoPzpcXHB7Tn0rKXwoPzpcXHB7U30rKSkvdlxuICAgICAgICAjIGRlYnVnICfOqWJiZGJyXzE2NycsIGxpbmVfbnIsIHJwciBrZXl3b3Jkc1xuICAgICAgICBmb3Iga2V5d29yZCBpbiBrZXl3b3Jkc1xuICAgICAgICAgIGNvbnRpbnVlIHVubGVzcyBrZXl3b3JkP1xuICAgICAgICAgIGNvbnRpbnVlIGlmIGtleXdvcmQgaXMgJydcbiAgICAgICAgICBwaHJhc2VzLnN0YXRlbWVudHMuaW5zZXJ0X2tleXdvcmQucnVuIHsgZHNrZXksIGxpbmVfbnIsIGtleXdvcmQsIH1cbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE2OCcsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX2tleXdvcmRzLml0ZXJhdGUoKVxuICAgICAgIyBlY2hvKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmaWxlX21pcnJvcl93aXRoX2ludGVncmF0ZWRfaW5zZXJ0czogLT5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3BocmFzZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgZGF0YXNvdXJjZXMgKFxuICAgICAgICAgICAgZHNrZXkgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgICBwYXRoIHRleHQgbm90IG51bGwgKTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdmlldyBtaXJyb3IgYXMgc2VsZWN0XG4gICAgICAgICAgICAqXG4gICAgICAgICAgZnJvbVxuICAgICAgICAgICAgZGF0YXNvdXJjZXMgYXMgZHMsXG4gICAgICAgICAgICBmaWxlX2xpbmVzKCBkcy5wYXRoICkgYXMgZmxcbiAgICAgICAgICBvcmRlciBieSBkcy5kc2tleSwgZmwubGluZV9ucjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUga2V5d29yZHMgKFxuICAgICAgICAgICAgZHNrZXkgICB0ZXh0ICAgIG5vdCBudWxsLFxuICAgICAgICAgICAgbGluZV9uciBpbnRlZ2VyIG5vdCBudWxsLFxuICAgICAgICAgICAga2V5d29yZCB0ZXh0ICAgIG5vdCBudWxsLFxuICAgICAgICAgIGZvcmVpZ24ga2V5ICggZHNrZXkgKSByZWZlcmVuY2VzIGRhdGFzb3VyY2VzICggZHNrZXkgKSxcbiAgICAgICAgICBwcmltYXJ5IGtleSAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgKTtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfZGF0YXNvdXJjZTogU1FMXCJcIlwiaW5zZXJ0IGludG8gZGF0YXNvdXJjZXMgKCBkc2tleSwgcGF0aCApIHZhbHVlcyAoICRkc2tleSwgJHBhdGggKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggZHNrZXkgKSBkbyB1cGRhdGUgc2V0IHBhdGggPSAkcGF0aDtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfa2V5d29yZDogU1FMXCJcIlwiaW5zZXJ0IGludG8ga2V5d29yZHMgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApIHZhbHVlcyAoICRkc2tleSwgJGxpbmVfbnIsICRrZXl3b3JkIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9kYXRhc291cmNlczogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBkYXRhc291cmNlcyBvcmRlciBieSBkc2tleTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9rZXl3b3JkczogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBrZXl3b3JkcyBvcmRlciBieSBrZXl3b3JkLCBkc2tleSwgbGluZV9ucjtcIlwiXCJcbiAgICAgICAgbG9jYXRpb25zX2Zyb21fa2V5d29yZDogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBrZXl3b3Jkc1xuICAgICAgICAgIHdoZXJlIGtleXdvcmQgPSAka2V5d29yZFxuICAgICAgICAgIG9yZGVyIGJ5IGtleXdvcmQsIGRza2V5LCBsaW5lX25yO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNlbGVjdF9mcm9tX21pcnJvcjogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBtaXJyb3Igb3JkZXIgYnkgZHNrZXk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcG9wdWxhdGVfa2V5d29yZHM6IFNRTFwiXCJcIlxuICAgICAgICAgIGluc2VydCBpbnRvIGtleXdvcmRzICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKVxuICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgIGRzLmRza2V5ICAgIGFzIGRza2V5LFxuICAgICAgICAgICAgICBtaS5saW5lX25yICBhcyBsaW5lX25yLFxuICAgICAgICAgICAgICBzdy5rZXl3b3JkICBhcyBrZXl3b3JkXG4gICAgICAgICAgICBmcm9tIGRhdGFzb3VyY2VzICAgICAgICBhcyBkc1xuICAgICAgICAgICAgam9pbiBtaXJyb3IgICAgICAgICAgICAgYXMgbWkgdXNpbmcgKCBkc2tleSApLFxuICAgICAgICAgICAgc3BsaXRfd29yZHMoIG1pLmxpbmUgKSAgYXMgc3dcbiAgICAgICAgICAgIHdoZXJlIHRydWUgLS0gd2hlcmUgY2xhdXNlIGp1c3QgYSBzeW50YWN0aWMgZ3VhcmQgYXMgcGVyIGh0dHBzOi8vc3FsaXRlLm9yZy9sYW5nX3Vwc2VydC5odG1sXG4gICAgICAgICAgICBvbiBjb25mbGljdCBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAdGFibGVfZnVuY3Rpb25zOlxuICAgICAgICBzcGxpdF93b3JkczpcbiAgICAgICAgICBjb2x1bW5zOiAgICAgICAgWyAna2V5d29yZCcsIF1cbiAgICAgICAgICBwYXJhbWV0ZXJzOiAgICAgWyAnbGluZScsIF1cbiAgICAgICAgICByb3dzOiAoIGxpbmUgKSAtPlxuICAgICAgICAgICAga2V5d29yZHMgPSBsaW5lLnNwbGl0IC8oPzpcXHB7Wn0rKXwoKD86XFxwe0x9Kyl8KD86XFxwe059Kyl8KD86XFxwe1N9KykpL3ZcbiAgICAgICAgICAgICMgZGVidWcgJ86pYmJkYnJfMTY5JywgbGluZV9uciwgcnByIGtleXdvcmRzXG4gICAgICAgICAgICBmb3Iga2V5d29yZCBpbiBrZXl3b3Jkc1xuICAgICAgICAgICAgICBjb250aW51ZSB1bmxlc3Mga2V5d29yZD9cbiAgICAgICAgICAgICAgY29udGludWUgaWYga2V5d29yZCBpcyAnJ1xuICAgICAgICAgICAgICB5aWVsZCB7IGtleXdvcmQsIH1cbiAgICAgICAgICAgIDtudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZmlsZV9saW5lczpcbiAgICAgICAgICBjb2x1bW5zOiAgICAgIFsgJ2xpbmVfbnInLCAnbGluZScsIF1cbiAgICAgICAgICBwYXJhbWV0ZXJzOiAgIFsgJ3BhdGgnLCBdXG4gICAgICAgICAgcm93czogKCBwYXRoICkgLT5cbiAgICAgICAgICAgIGZvciB7IGxucjogbGluZV9uciwgbGluZSwgZW9sLCB9IGZyb20gR1VZLmZzLndhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgcGF0aFxuICAgICAgICAgICAgICB5aWVsZCB7IGxpbmVfbnIsIGxpbmUsIH1cbiAgICAgICAgICAgIDtudWxsXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBwaHJhc2VzICAgPSBEYnJpY19waHJhc2VzLnJlYnVpbGQgZGJfcGF0aFxuICAgICAgIyBkZWJ1ZyAnzqliYmRicl8xNzAnLCBwaHJhc2VzLnRlYXJkb3duKClcbiAgICAgICMgZGVidWcgJ86pYmJkYnJfMTcxJywgcGhyYXNlcy5yZWJ1aWxkKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTcyID0gLT4gKCBwaHJhc2VzLnByZXBhcmUgU1FMXCJcIlwicHJhZ21hIGZvcmVpZ25fa2V5c1wiXCJcIiApLmdldCgpICksIHsgZm9yZWlnbl9rZXlzOiAxLCAgICAgIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTczID0gLT4gKCBwaHJhc2VzLnByZXBhcmUgU1FMXCJcIlwicHJhZ21hIGpvdXJuYWxfbW9kZVwiXCJcIiApLmdldCgpICksIHsgam91cm5hbF9tb2RlOiAnd2FsJywgIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZHNrZXkgPSAnaHVtZHVtJ1xuICAgICAgICBwYXRoICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hc3NldHMvYnJpY2FicmFjL2h1bXB0eS1kdW1wdHkubWQnXG4gICAgICAgIHBocmFzZXMuc3RhdGVtZW50cy5pbnNlcnRfZGF0YXNvdXJjZS5ydW4geyBkc2tleSwgcGF0aCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHBocmFzZXMuc3RhdGVtZW50cy5wb3B1bGF0ZV9rZXl3b3Jkcy5ydW4oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTc0Jywgcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMubG9jYXRpb25zX2Zyb21fa2V5d29yZC5pdGVyYXRlIHsga2V5d29yZDogJ3Rob3VnaHQnLCB9XG4gICAgICAjIGVjaG8oKVxuICAgICAgcm93cyA9IHBocmFzZXMuc3RhdGVtZW50cy5sb2NhdGlvbnNfZnJvbV9rZXl3b3JkLml0ZXJhdGUgeyBrZXl3b3JkOiAndGhvdWdodCcsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTc1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDE1LCBrZXl3b3JkOiAndGhvdWdodCcgfVxuICAgICAgQGVxICggzqliYmRicl8xNzYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMzQsIGtleXdvcmQ6ICd0aG91Z2h0JyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTc4Jywgcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMubG9jYXRpb25zX2Zyb21fa2V5d29yZC5pdGVyYXRlIHsga2V5d29yZDogJ3NoZScsIH1cbiAgICAgICMgZWNobygpXG4gICAgICByb3dzID0gcGhyYXNlcy5zdGF0ZW1lbnRzLmxvY2F0aW9uc19mcm9tX2tleXdvcmQuaXRlcmF0ZSB7IGtleXdvcmQ6ICdzaGUnLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAyLCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAzLCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiA0LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiA1LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAxNSwga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8xODQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMTcsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTg1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDE4LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAyNiwga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8xODcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMzQsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTg4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDM2LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX3N0ZF92YXJpYWJsZXNfYW5kX3NlcXVlbmNlczogLT5cbiAgICB7IGxldHMsXG4gICAgICBmcmVlemUsICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9sZXRzZnJlZXpldGhhdF9pbmZyYSgpLnNpbXBsZVxuICAgIGNmZ19kb19zaG93X3ZhcmlhYmxlcyAgICAgICAgID0gZmFsc2VcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRiID0gRGJyaWNfc3RkLnJlYnVpbGQgJzptZW1vcnk6J1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgQHRocm93cyAoIM6pYmJkYnJfMTkwID0gLT4gZGIuc3RkX3dpdGhfdmFyaWFibGVzIC0+IGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyAtPiBudWxsICApLCAvaWxsZWdhbCB0byBuZXN0IGBzdGRfd2l0aF92YXJpYWJsZXNcXChcXClgIGNvbnRleHRzL1xuICAgIEB0aHJvd3MgKCDOqWJiZGJyXzE5MSA9IC0+IGRiLnN0ZF9zZXRfdmFyaWFibGUgJ215bmFtZScsICdteXZhbHVlJyAgICAgICAgICAgICAgICAgKSwgL2lsbGVnYWwgdG8gc2V0IHZhcmlhYmxlL1xuICAgICMgQHRocm93cyAoIM6pYmJkYnJfMTkyID0gLT4gZGIuc3RkX2dldF92YXJpYWJsZSAnbXluYW1lJyAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvaWxsZWdhbCB0byBnZXQgdmFyaWFibGUvXG4gICAgQHRocm93cyAoIM6pYmJkYnJfMTkzID0gLT4gZGIuc3RkX2dldF92YXJpYWJsZSAnbXluYW1lJyAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvdW5rbm93biB2YXJpYWJsZS9cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHZhcmlhYmxlcyA9IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyA9PlxuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMTk0ID0gLT4gZGIuc3RkX2dldF92YXJpYWJsZSAnbXluYW1lJyApLCAvdW5rbm93biB2YXJpYWJsZS9cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTk1ID0gLT4gKGRiLl9zaG93X3ZhcmlhYmxlcyBjZmdfZG9fc2hvd192YXJpYWJsZXMgKSApLCB7ICdzZXE6Z2xvYmFsOnJvd2lkJzogeyBzdjogMCwgc2Q6IDEsIGN2OiAwLCBjZDogMSwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDAgfSB9XG4gICAgICAjIyMgVEFJTlQgdXNlIEFQSSAjIyNcbiAgICAgIGRiLnN0YXRlLnN0ZF92YXJpYWJsZXMgPSBsZXRzIGRiLnN0YXRlLnN0ZF92YXJpYWJsZXMsICggZCApIC0+XG4gICAgICAgIGRbICdzZXE6YXBwOmNvdW50ZXInIF0gPSB7IG5hbWU6ICdzZXE6YXBwOmNvdW50ZXInLCB2YWx1ZTogNywgZGVsdGE6ICszLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE5NiA9IC0+IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzICkgKSwgeyAnc2VxOmFwcDpjb3VudGVyJzogeyBzdjogdW5kZWZpbmVkLCBzZDogdW5kZWZpbmVkLCBjdjogNywgY2Q6IDMsIHR2OiB1bmRlZmluZWQsIGd2OiA3IH0sICdzZXE6Z2xvYmFsOnJvd2lkJzogeyBzdjogMCwgc2Q6IDEsIGN2OiAwLCBjZDogMSwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDAgfSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE5NyA9IC0+IGRiLnN0ZF9nZXRfbmV4dF9pbl9zZXF1ZW5jZSAnc2VxOmFwcDpjb3VudGVyJyApLCAxMFxuICAgICAgQGVxICggzqliYmRicl8xOTggPSAtPiBkYi5zdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UgJ3NlcTphcHA6Y291bnRlcicgKSwgMTNcbiAgICAgIGRiLnN0ZF9zZXRfdmFyaWFibGUgJ2Z1enonLCAxMS41XG4gICAgICBkYi5zdGRfc2V0X3ZhcmlhYmxlICduYW1lJywgJ0JvYidcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTk5ID0gLT4gZGIuc3RkX2dldF92YXJpYWJsZSAnZnV6eicgKSwgMTEuNVxuICAgICAgQGVxICggzqliYmRicl8yMDAgPSAtPiBkYi5zdGRfZ2V0X3ZhcmlhYmxlICduYW1lJyApLCAnQm9iJ1xuICAgICAgQGVxICggzqliYmRicl8yMDEgPSAtPiAoZGIuX3Nob3dfdmFyaWFibGVzIGNmZ19kb19zaG93X3ZhcmlhYmxlcyApICksIHsgZnV6ejogeyBzdjogdW5kZWZpbmVkLCBzZDogdW5kZWZpbmVkLCBjdjogMTEuNSwgY2Q6IG51bGwsIHR2OiB1bmRlZmluZWQsIGd2OiAxMS41LCB9LCBuYW1lOiB7IHN2OiB1bmRlZmluZWQsIHNkOiB1bmRlZmluZWQsIGN2OiAnQm9iJywgY2Q6IG51bGwsIHR2OiB1bmRlZmluZWQsIGd2OiAnQm9iJyB9LCAnc2VxOmFwcDpjb3VudGVyJzogeyBzdjogdW5kZWZpbmVkLCBzZDogdW5kZWZpbmVkLCBjdjogMTMsIGNkOiAzLCB0djogdW5kZWZpbmVkLCBndjogMTMgfSwgJ3NlcTpnbG9iYWw6cm93aWQnOiB7IHN2OiAwLCBzZDogMSwgY3Y6IDAsIGNkOiAxLCB0djogdW5kZWZpbmVkLCBndjogMCB9IH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkYi5zdGRfd2l0aF92YXJpYWJsZXMgeyBuYW1lOiAnQWxpY2UnLCBqb2I6ICdlbmdpbmVlcicsIH0sID0+XG4gICAgICBAZXEgKCDOqWJiZGJyXzIwMiA9IC0+IGRiLnN0ZF9nZXRfdmFyaWFibGUgJ25hbWUnICksICdBbGljZSdcbiAgICAgICMgZGVidWcgJ86pYmJkYnJfMjAzJywgeyBuYW1lLCBqb2IsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjA0ID0gLT4gKGRiLl9zaG93X3ZhcmlhYmxlcyBjZmdfZG9fc2hvd192YXJpYWJsZXMgKSApLCB7IGZ1eno6IHsgc3Y6IDExLjUsIHNkOiBudWxsLCBjdjogMTEuNSwgY2Q6IG51bGwsIHR2OiB1bmRlZmluZWQsIGd2OiAxMS41IH0sIGpvYjogeyBzdjogdW5kZWZpbmVkLCBzZDogdW5kZWZpbmVkLCBjdjogdW5kZWZpbmVkLCBjZDogdW5kZWZpbmVkLCB0djogJ2VuZ2luZWVyJywgZ3Y6ICdlbmdpbmVlcicgfSwgbmFtZTogeyBzdjogJ1wiQm9iXCInLCBzZDogbnVsbCwgY3Y6ICdCb2InLCBjZDogbnVsbCwgdHY6ICdBbGljZScsIGd2OiAnQWxpY2UnIH0sICdzZXE6YXBwOmNvdW50ZXInOiB7IHN2OiAxMywgc2Q6IDMsIGN2OiAxMywgY2Q6IDMsIHR2OiB1bmRlZmluZWQsIGd2OiAxMyB9LCAnc2VxOmdsb2JhbDpyb3dpZCc6IHsgc3Y6IDAsIHNkOiAxLCBjdjogMCwgY2Q6IDEsIHR2OiB1bmRlZmluZWQsIGd2OiAwIH0gfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pYmJkYnJfMjA1ID0gLT4gKGRiLl9zaG93X3ZhcmlhYmxlcyBjZmdfZG9fc2hvd192YXJpYWJsZXMgKSApLCB7IGZ1eno6IHsgc3Y6IDExLjUsIHNkOiBudWxsLCBjdjogMTEuNSwgY2Q6IG51bGwsIHR2OiB1bmRlZmluZWQsIGd2OiAxMS41IH0sIG5hbWU6IHsgc3Y6ICdcIkJvYlwiJywgc2Q6IG51bGwsIGN2OiAnQm9iJywgY2Q6IG51bGwsIHR2OiB1bmRlZmluZWQsIGd2OiAnQm9iJyB9LCAnc2VxOmFwcDpjb3VudGVyJzogeyBzdjogMTMsIHNkOiAzLCBjdjogMTMsIGNkOiAzLCB0djogdW5kZWZpbmVkLCBndjogMTMgfSwgJ3NlcTpnbG9iYWw6cm93aWQnOiB7IHN2OiAwLCBzZDogMSwgY3Y6IDAsIGNkOiAxLCB0djogdW5kZWZpbmVkLCBndjogMCB9IH1cbiAgICBkYi5zdGRfd2l0aF92YXJpYWJsZXMgPT5cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjA2ID0gLT4gKGRiLl9zaG93X3ZhcmlhYmxlcyBjZmdfZG9fc2hvd192YXJpYWJsZXMgKSApLCB7IGZ1eno6IHsgc3Y6IDExLjUsIHNkOiBudWxsLCBjdjogMTEuNSwgY2Q6IG51bGwsIHR2OiB1bmRlZmluZWQsIGd2OiAxMS41IH0sIG5hbWU6IHsgc3Y6ICdcIkJvYlwiJywgc2Q6IG51bGwsIGN2OiAnQm9iJywgY2Q6IG51bGwsIHR2OiB1bmRlZmluZWQsIGd2OiAnQm9iJyB9LCAnc2VxOmFwcDpjb3VudGVyJzogeyBzdjogMTMsIHNkOiAzLCBjdjogMTMsIGNkOiAzLCB0djogdW5kZWZpbmVkLCBndjogMTMgfSwgJ3NlcTpnbG9iYWw6cm93aWQnOiB7IHN2OiAwLCBzZDogMSwgY3Y6IDAsIGNkOiAxLCB0djogdW5kZWZpbmVkLCBndjogMCB9IH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkYi5zdGRfd2l0aF92YXJpYWJsZXMgPT5cbiAgICAgICMjIyBNb2RlbCB0aGF0IHNob3dzIGhvdyB0byBpbnNlcnQgc2VxdWVudGlhbCBSb3dJRHMgdXNpbmcgYSBwcml2YXRlIHRhYmxlLCBhbiBhc3NvY2lhdGVkIHB1YmxpY1xuICAgICAgdmlldywgYW5kIGEgYGluc3RlYWQgb2YgaW5zZXJ0YCB0cmlnZ2VyOiAjIyNcbiAgICAgIGRiLnN0ZF9zZXRfdmFyaWFibGUgJ3NlcTpsZXR0ZXJzJywgMCwgMVxuICAgICAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJjcmVhdGUgdGFibGUgX2xldHRlcnMgKFxuICAgICAgICAgIHJvd2lkICAgdGV4dCAgICB1bmlxdWUgIG5vdCBudWxsLFxuICAgICAgICAgIGxldHRlciAgdGV4dCAgICB1bmlxdWUgIG5vdCBudWxsLFxuICAgICAgICAtLSBwcmltYXJ5IGtleSAoIHJvd2lkIClcbiAgICAgICAgY29uc3RyYWludCBcIs6pY29uc3RyYWludF8yMDdcIiBjaGVjayAoIGxlbmd0aCggbGV0dGVyICkgPSAxIClcbiAgICAgICAgKSBzdHJpY3Q7XCJcIlwiXG4gICAgICBkYi5leGVjdXRlIFNRTFwiXCJcImNyZWF0ZSB2aWV3IGxldHRlcnMgYXMgc2VsZWN0ICogZnJvbSBfbGV0dGVycztcIlwiXCJcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJcIlwiY3JlYXRlIHRyaWdnZXIgb25fYmVmb3JlX2luc2VydF9sZXR0ZXJzXG4gICAgICAgIGluc3RlYWQgb2YgaW5zZXJ0IG9uIGxldHRlcnNcbiAgICAgICAgICBmb3IgZWFjaCByb3cgYmVnaW5cbiAgICAgICAgICAgIGluc2VydCBpbnRvIF9sZXR0ZXJzICggcm93aWQsIGxldHRlciApIHZhbHVlc1xuICAgICAgICAgICAgICAtLSAoICd0OmxldHRlcnM6Uj0nIHx8IGNhc3QoIHN0ZF9nZXRfbmV4dF9pbl9zZXF1ZW5jZSggJ3NlcTpsZXR0ZXJzJyApIGFzIGludGVnZXIgKSwgbmV3LmxldHRlciApO1xuICAgICAgICAgICAgICAoIHByaW50ZiggJ3Q6bGV0dGVyczpSPSVkJywgc3RkX2dldF9uZXh0X2luX3NlcXVlbmNlKCAnc2VxOmxldHRlcnMnICkgKSwgbmV3LmxldHRlciApO1xuICAgICAgICAgICAgZW5kO1xuICAgICAgICA7XCJcIlwiXG4gICAgICBkYi5leGVjdXRlIFNRTFwiXCJcImluc2VydCBpbnRvIGxldHRlcnMgKCBsZXR0ZXIgKSB2YWx1ZXMgKCAnYScgKSwgKCAneicgKTtcIlwiXCJcbiAgICAgICMgaW5mbyAnzqliYmRicl8yMDgnLCByb3cgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGxldHRlcnM7XCJcbiAgICAgIHJvd3MgPSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBsZXR0ZXJzIG9yZGVyIGJ5IGxldHRlcjtcIlxuICAgICAgQGVxICggzqliYmRicl8yMDkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpsZXR0ZXJzOlI9MScsIGxldHRlcjogJ2EnLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIxMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmxldHRlcnM6Uj0yJywgbGV0dGVyOiAneicsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjExID0gLT4gcm93cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkYi5zdGRfd2l0aF92YXJpYWJsZXMgPT5cbiAgICAgICMjIyBOT1RFIE1vZGVsIHRoYXQgc2hvd3MgaG93IHRvIGluc2VydCByb3dzIHdpdGggc2VxdWVudGlhbCBSb3dJRHMgdXNpbmcgYSB0YmFsZSBhbmQgYW5kIGBhZnRlclxuICAgICAgaW5zZXJ0YCB0cmlnZ2VyIHRoYXQgdXBkYXRlcyBgcm93aWRgOiAjIyNcbiAgICAgIGRiLnN0ZF9zZXRfdmFyaWFibGUgJ3NlcTpudW1iZXJzJywgMCwgMVxuICAgICAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJjcmVhdGUgdGFibGUgbnVtYmVycyAoXG4gICAgICAgICAgcm93aWQgICB0ZXh0ICAgIHVuaXF1ZSAgbm90IG51bGwgZGVmYXVsdCAnbmV3X3Jvd2lkJyxcbiAgICAgICAgICBudW1iZXIgIHRleHQgICAgdW5pcXVlICBub3QgbnVsbFxuICAgICAgICApIHN0cmljdDtcIlwiXCJcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJcIlwiY3JlYXRlIHRyaWdnZXIgb25fYWZ0ZXJfaW5zZXJ0X29uX251bWJlcnNcbiAgICAgICAgYWZ0ZXIgaW5zZXJ0IG9uIG51bWJlcnMgZm9yIGVhY2ggcm93IGJlZ2luXG4gICAgICAgICAgICB1cGRhdGUgbnVtYmVycyBzZXQgcm93aWQgPSBwcmludGYoICd0Om51bWJlcnM6Uj0lZCcsIHN0ZF9nZXRfbmV4dF9pbl9zZXF1ZW5jZSggJ3NlcTpudW1iZXJzJyApIClcbiAgICAgICAgICAgICAgd2hlcmUgcm93aWQgPSAnbmV3X3Jvd2lkJztcbiAgICAgICAgICAgIGVuZDtcbiAgICAgICAgO1wiXCJcIlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJpbnNlcnQgaW50byBudW1iZXJzICggbnVtYmVyICkgdmFsdWVzICggJ3VubycgKSwgKCAnZHVlJyApO1wiXCJcIlxuICAgICAgIyBpbmZvICfOqWJiZGJyXzIxMicsIHJvdyBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gbnVtYmVycztcIlxuICAgICAgcm93cyA9IGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIG51bWJlcnMgb3JkZXIgYnkgcm93aWQ7XCJcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjEzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6bnVtYmVyczpSPTEnLCBudW1iZXI6ICd1bm8nLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIxNCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0Om51bWJlcnM6Uj0yJywgbnVtYmVyOiAnZHVlJywgfVxuICAgICAgQGVxICggzqliYmRicl8yMTUgPSAtPiByb3dzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIyMjIE5PVEUgTW9kZWwgdGhhdCBzaG93cyBob3cgdG8gYnVpbGQgYSBwYXJhbWV0cml6ZWQgdmlldzogIyMjXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyMjIHJlcGVhdCBlYXJsaWVyIHRlc3QgdG8gZW5zdXJlIHdlIGtub3cgd2hhdCdzIHRoZXJlOiAjIyNcbiAgICAgIHJvd3MgPSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBsZXR0ZXJzIG9yZGVyIGJ5IGxldHRlcjtcIlxuICAgICAgQGVxICggzqliYmRicl8yMTYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpsZXR0ZXJzOlI9MScsIGxldHRlcjogJ2EnLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIxNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmxldHRlcnM6Uj0yJywgbGV0dGVyOiAneicsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjE4ID0gLT4gcm93cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaW5zZXJ0X2xldHRlciA9IGRiLnByZXBhcmUgU1FMXCJcIlwiaW5zZXJ0IGludG8gbGV0dGVycyAoIGxldHRlciApIHZhbHVlcyAoICRsZXR0ZXIgKTtcIlwiXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkYi5leGVjdXRlIFNRTFwiXCJcImNyZWF0ZSB2aWV3IHJ1bl9vZl9sZXR0ZXJzIGFzXG4gICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgKlxuICAgICAgICAgIGZyb20gbGV0dGVyc1xuICAgICAgICAgIHdoZXJlIGxldHRlciBiZXR3ZWVuIHN0ZF9nZXRfdmFyaWFibGUoICdmaXJzdF9sZXR0ZXInICkgYW5kIHN0ZF9nZXRfdmFyaWFibGUoICdsYXN0X2xldHRlcicgKTtcIlwiXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkYi5zdGRfd2l0aF92YXJpYWJsZXMgPT5cbiAgICAgICAgZm9yIGNpZCBpbiBbICggJ2InLmNvZGVQb2ludEF0IDAgKSAuLiAoICd5Jy5jb2RlUG9pbnRBdCAwICkgXVxuICAgICAgICAgIGxldHRlciA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZFxuICAgICAgICAgIGluc2VydF9sZXR0ZXIucnVuIHsgbGV0dGVyLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzIHsgZmlyc3RfbGV0dGVyOiAnZycsIGxhc3RfbGV0dGVyOiAnbScgfSwgPT5cbiAgICAgICAgcmVzdWx0ICAgID0gKCByb3cubGV0dGVyIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBydW5fb2ZfbGV0dGVycyBvcmRlciBieSBsZXR0ZXI7XCIgKS5qb2luICcsJ1xuICAgICAgICB2YXJpYWJsZXMgPSAoZGIuX3Nob3dfdmFyaWFibGVzIGNmZ19kb19zaG93X3ZhcmlhYmxlcyApXG4gICAgICAgIEBlcSAoIM6pYmJkYnJfMjE5ID0gLT4gcmVzdWx0ICAgICAgICAgICAgICAgICAgICAgICksICdnLGgsaSxqLGssbCxtJ1xuICAgICAgICBAZXEgKCDOqWJiZGJyXzIyMCA9IC0+IHZhcmlhYmxlcy5maXJzdF9sZXR0ZXI/Lmd2ICApLCAnZydcbiAgICAgICAgQGVxICggzqliYmRicl8yMjEgPSAtPiB2YXJpYWJsZXMubGFzdF9sZXR0ZXI/Lmd2ICAgKSwgJ20nXG4gICAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIyMjIE5PVEUgTW9kZWwgdGhhdCBzaG93cyBob3cgdG8gdXNlIGEgc2VxdWVuY2UgdG8gcHJvZHVjZSBSb3dJRHM6XG5cbiAgICAgICogYCR0YWJsZS5yb3dpZGAgY29sdW1uIGlzIGRlY2xhcmVkICp3aXRob3V0KiBgZ2VuZXJhdGUgYWx3YXlzYCBjbGF1c2UsXG4gICAgICAqIHRodXMgYCR0YWJsZS5yb3dpZGAgY2FuIGJlIHVzZWQgYXMgcHJpbWFyeSBrZXk7XG4gICAgICAqIGFkZGl0aW9uYWxseSwgbWF5IGNvbnRhaW4gY2hlY2sgY2xhdXNlIGZvciBgJHRhYmxlLnJvd2lkYC5cbiAgICAgICogQW4gYGluc2VydGAgc3RhdGVtZW50IGlzIGRlZmluZWQgdGhhdCBjYWxscyBgc3RkX2dldF9uZXh0X2luX3NlcXVlbmNlKClgIHRvIG9idGFpbiBuZXh0IFJvd0lEO1xuICAgICAgKiBpZiBEQi13aWRlIHVuaXF1ZSBSb3dJRHMgYXJlIGRlc2lyYWJsZSwgdXNlIGBwcmludGYoKWAgdG8gZW1iZWQgbnVtZXJpY2FsIFJvd0lEIGluIHN0cmluZy5cbiAgICAgICogU3VnZ2VzdGVkIHRvIHVzZSBhIHN1ZmZpeCBgX3ZgIHRvIGlkZW50aWZ5IHN0YXRlbWVudCBhcyB1c2luZyB2YXJpYWJsZXMgYW5kIHJlcXVpcmVzIHRvIGJlIHVzZWRcbiAgICAgICAgaW5zaWRlIGEgYGRiLnN0ZF93aXRoX3ZhcmlhYmxlcygpYCBjb250ZXh0IGhhbmRsZXIuXG4gICAgICAqIEluc2VydCBzdGF0ZW1lbnQgdGFrZXMgY2FyZSBvZiB0aGUgaW1wbGVtZW50YXRpb24gZGV0YWlsIG9mIGFzc2lnbmluZyB0aGUgbmV4dCB1bmlxdWUgUm93SUQ7IHNpbmNlXG4gICAgICAgIGl0cyB2YWx1ZSBpcyBwZXJzaXN0ZWQgaW4gdGhlIERCLCBpbnNlcnRzIGNhbiBiZSBkb25lIGFjcm9zcyBzZXZlcmFsIHNlc3Npb25zIHdpdGhvdXQgbmVlZGluZyBhbnlcbiAgICAgICAgYWRkaXRpb25hbCBjb2RlIGJlc2lkZXMgdGhlIGNvbnRleHQgaGFuZGxlci5cbiAgICAgICMjI1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMjIyBOT1RFIHBhcnQgb2YgYERicmljLmJ1aWxkYCBsaXN0OiAjIyNcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIHByZnhfd29yZHMgKFxuICAgICAgICAgIHJvd2lkICAgICB0ZXh0ICB1bmlxdWUgIG5vdCBudWxsLFxuICAgICAgICAgIGVuICAgICAgICB0ZXh0ICAgICAgICAgIG5vdCBudWxsLFxuICAgICAgICAgIGRlICAgICAgICB0ZXh0ICAgICAgICAgIG5vdCBudWxsLFxuICAgICAgICBwcmltYXJ5IGtleSAoIHJvd2lkICksXG4gICAgICAgIGNvbnN0cmFpbnQgXCLOqWNvbnN0cmFpbnRfMjIyXCIgY2hlY2sgKCByb3dpZCByZWdleHAgJ3Q6d3JkOlI9XFxcXGQrJyApICk7XCJcIlwiXG4gICAgICAjIyMgTk9URSBwYXJ0IG9mIGBEYnJpYy5zdGF0ZW1lbnRzYCBvYmplY3Q6ICMjI1xuICAgICAgaW5zZXJ0X3dvcmRfdiA9IGRiLnByZXBhcmUgU1FMXCJcIlwiaW5zZXJ0IGludG8gcHJmeF93b3JkcyAoIHJvd2lkLCBlbiwgZGUgKSB2YWx1ZXMgKFxuICAgICAgICAgIHByaW50ZiggJ3Q6d3JkOlI9JWQnLCBzdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UoICdzZXE6cHJmeF93b3Jkc19yb3dpZCcgKSApLFxuICAgICAgICAgICRlbixcbiAgICAgICAgICAkZGUgKTtcIlwiXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIyMgTk9URSBwYXJ0IG9mIHJlYnVpbGQoKSAoPywgc3RpbGwgdW5jbGVhcik6ICMjI1xuICAgICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzID0+XG4gICAgICAgIGRiLnN0ZF9zZXRfdmFyaWFibGUgJ3NlcTpwcmZ4X3dvcmRzX3Jvd2lkJywgMTAwLCArMTAwXG4gICAgICAgIDtudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyMjIE5PVEUgaW4gdGhlIGFwcCBwcm9wZXI6ICMjI1xuICAgICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzID0+XG4gICAgICAgIGluc2VydF93b3JkX3YucnVuIHsgZW46ICdkb2cnLCAgZGU6ICdIdW5kJywgICB9XG4gICAgICAgIGluc2VydF93b3JkX3YucnVuIHsgZW46ICdjYXQnLCAgZGU6ICdLYXR6ZScsICB9XG4gICAgICAgIGluc2VydF93b3JkX3YucnVuIHsgZW46ICd3b3JkJywgZGU6ICdXb3J0JywgICB9XG4gICAgICAgIGluc2VydF93b3JkX3YucnVuIHsgZW46ICdjYWxsJywgZGU6ICdydWZlbicsICB9XG4gICAgICAgIGluc2VydF93b3JkX3YucnVuIHsgZW46ICdjYWxsJywgZGU6ICdBbnJ1ZicsICB9XG4gICAgICAgIGluc2VydF93b3JkX3YucnVuIHsgZW46ICdib29rJywgZGU6ICdCdWNoJywgICB9XG4gICAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB2YXJpYWJsZXMgPSAoZGIuX3Nob3dfdmFyaWFibGVzIGNmZ19kb19zaG93X3ZhcmlhYmxlcyApXG4gICAgQGVxICggzqliYmRicl8yMjMgPSAtPiB2YXJpYWJsZXNbICdzZXE6cHJmeF93b3Jkc19yb3dpZCcgXT8uZ3YgICksIDcwMFxuICAgICMgZWNobyAnzqliYmRicl8yMjQnLCByb3cgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHByZnhfd29yZHMgb3JkZXIgYnkgZGU7XCJcbiAgICByb3dzID0gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gcHJmeF93b3JkcyBvcmRlciBieSBkZTtcIlxuICAgIEBlcSAoIM6pYmJkYnJfMjI1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6d3JkOlI9NjAwJywgZW46ICdjYWxsJywgZGU6ICdBbnJ1ZicgfVxuICAgIEBlcSAoIM6pYmJkYnJfMjI2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6d3JkOlI9NzAwJywgZW46ICdib29rJywgZGU6ICdCdWNoJyB9XG4gICAgQGVxICggzqliYmRicl8yMjcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDp3cmQ6Uj0yMDAnLCBlbjogJ2RvZycsIGRlOiAnSHVuZCcgfVxuICAgIEBlcSAoIM6pYmJkYnJfMjI4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6d3JkOlI9MzAwJywgZW46ICdjYXQnLCBkZTogJ0thdHplJyB9XG4gICAgQGVxICggzqliYmRicl8yMjkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDp3cmQ6Uj00MDAnLCBlbjogJ3dvcmQnLCBkZTogJ1dvcnQnIH1cbiAgICBAZXEgKCDOqWJiZGJyXzIzMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OndyZDpSPTUwMCcsIGVuOiAnY2FsbCcsIGRlOiAncnVmZW4nIH1cbiAgICBAZXEgKCDOqWJiZGJyXzIzMSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19zdHJpY3RfbW9kZTogLT5cbiAgICB7IGxldHMsXG4gICAgICBmcmVlemUsICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9sZXRzZnJlZXpldGhhdF9pbmZyYSgpLnNpbXBsZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGRiID0gRGJyaWMucmVidWlsZCAnOm1lbW9yeTonXG4gICAgICAoIGRiLnByZXBhcmUgU1FMXCJwcmFnbWEgc3RyaWN0ICAgICAgID0gb247XCIgICAgKS5ydW4oKVxuICAgICAgZGIuZXhlY3V0ZSBTUUxcImNyZWF0ZSB0YWJsZSB0ICggZiBpbnRlZ2VyICk7XCJcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJpbnNlcnQgaW50byB0IHZhbHVlcyAoIDEyMzQgKTtcIlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcImluc2VydCBpbnRvIHQgdmFsdWVzICggMTIuMzQgKTtcIlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcImluc2VydCBpbnRvIHQgdmFsdWVzICggJ3dhdCcgKTtcIlxuICAgICAgIyBkZWJ1ZyAnzqliYmRicl8yMzInLCAoIHJvdy5mIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0IGYgZnJvbSB0O1wiIClcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZGIgPSBEYnJpYy5yZWJ1aWxkICc6bWVtb3J5OidcbiAgICAgICggZGIucHJlcGFyZSBTUUxcInByYWdtYSBzdHJpY3QgICAgICAgPSBvbjtcIiAgICApLnJ1bigpXG4gICAgICBAdGhyb3dzICggzqliYmRicl8yMzMgPSAtPiBkYi5leGVjdXRlIFNRTFwiY3JlYXRlIHRhYmxlIHQgKCBmIGludGVnZXIsIGoganNvbiApIHN0cmljdDtcIiApLCAvdW5rbm93biBkYXRhdHlwZSBmb3IgdFxcLmovXG4gICAgICBkYi5leGVjdXRlIFNRTFwiY3JlYXRlIHRhYmxlIHQgKCBmIGludGVnZXIsIGogYmxvYiApIHN0cmljdDtcIlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcImluc2VydCBpbnRvIHQgKCBmICkgdmFsdWVzICggMTIzNCApO1wiXG4gICAgICBAZXEgKCDOqWJiZGJyXzIzNCA9IC0+ICggZGIuZ2V0X2ZpcnN0IFNRTFwic2VsZWN0IHR5cGVvZiggMTIgICAgKSBhcyB0eXBlO1wiICkudHlwZSApLCAnaW50ZWdlcidcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjM1ID0gLT4gKCBkYi5nZXRfZmlyc3QgU1FMXCJzZWxlY3QgdHlwZW9mKCAxMi4zNCApIGFzIHR5cGU7XCIgKS50eXBlICksICdyZWFsJ1xuICAgICAgQGVxICggzqliYmRicl8yMzYgPSAtPiAoIGRiLmdldF9maXJzdCBTUUxcInNlbGVjdCB0eXBlb2YoICd3YXQnICkgYXMgdHlwZTtcIiApLnR5cGUgKSwgJ3RleHQnXG4gICAgICBAdGhyb3dzICggzqliYmRicl8yMzcgPSAtPiBkYi5leGVjdXRlIFNRTFwiaW5zZXJ0IGludG8gdCAoIGYgKSB2YWx1ZXMgKCAxMi4zNCApO1wiICksIC9jYW5ub3Qgc3RvcmUgUkVBTCB2YWx1ZSBpbiBJTlRFR0VSIGNvbHVtbi9cbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyXzIzOCA9IC0+IGRiLmV4ZWN1dGUgU1FMXCJpbnNlcnQgaW50byB0ICggZiApIHZhbHVlcyAoICd3YXQnICk7XCIgKSwgL2Nhbm5vdCBzdG9yZSBURVhUIHZhbHVlIGluIElOVEVHRVIgY29sdW1uL1xuICAgICAgIyBkZWJ1ZyAnzqliYmRicl8yMzknLCAoIHJvdy5mIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0IGYgZnJvbSB0O1wiIClcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfZHluYW1pY19idWlsZF9wcm9wZXJ0aWVzOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIERiXzEgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgICAgQHByZWZpeDogJ3dyZCdcbiAgICAgICAgQGJ1aWxkOiBbXG4gICAgICAgICAgLT4gU1FMXCJcIlwiY3JlYXRlIHRhYmxlICN7SUROIFwiI3tAY2ZnLnByZWZpeH1fd29yZHNcIn0gKCB0IHRleHQgKTtcIlwiXCJcbiAgICAgICAgICAtPiBTUUxcIlwiXCJpbnNlcnQgaW50byAje0lETiBcIiN7QGNmZy5wcmVmaXh9X3dvcmRzXCJ9ICggdCApIHZhbHVlcyAoICfmsLQgKOOBv+OBmiknICk7XCJcIlwiXG4gICAgICAgICAgLT4gU1FMXCJcIlwiaW5zZXJ0IGludG8gI3tJRE4gXCIje0BjZmcucHJlZml4fV93b3Jkc1wifSAoIHQgKSB2YWx1ZXMgKCAn6aOf44G554mpICjjgZ/jgbnjgoLjga4pJyApO1wiXCJcIlxuICAgICAgICAgIF1cbiAgICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgICAgc2VsZWN0X3dvcmRzOiAtPiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tICN7SUROIFwiI3tAY2ZnLnByZWZpeH1fd29yZHNcIn1cIlwiXCJcbiAgICAgIGRiID0gRGJfMS5yZWJ1aWxkKClcbiAgICAgIHJlbGF0aW9uX25hbWVzID0gbmV3IFNldCAoIHJvdy5uYW1lIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBzdGRfcmVsYXRpb25zO1wiIClcbiAgICAgIGRlYnVnICfOqWJiZGJyXzI0MCcsIHJlbGF0aW9uX25hbWVzXG4gICAgICBkZWJ1ZyAnzqliYmRicl8yNDEnLCBkYi5jb25zdHJ1Y3Rvci5wcmVmaXhcbiAgICAgIGRlYnVnICfOqWJiZGJyXzI0MicsIGRiLmNmZ1xuICAgICAgQGVxICggzqliYmRicl8yNDMgPSAtPiByZWxhdGlvbl9uYW1lcy5oYXMgJ3dyZF93b3JkcycgICAgICApLCB0cnVlXG4gICAgICByb3dzID0gZGIud2FsayBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tICN7SUROIFwiI3tEYl8xLnByZWZpeH1fd29yZHNcIn07XCJcIlwiXG4gICAgICBAZXEgKCDOqWJiZGJyXzI0NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlLnQgICAgICAgICAgICAgICAgICksICfmsLQgKOOBv+OBmiknXG4gICAgICBAZXEgKCDOqWJiZGJyXzI0NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlLnQgICAgICAgICAgICAgICAgICksICfpo5/jgbnniakgKOOBn+OBueOCguOBriknXG4gICAgICBAZXEgKCDOqWJiZGJyXzI0NiA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIHJvd3MgPSBkYi53YWxrIGRiLnN0YXRlbWVudHMuc2VsZWN0X3dvcmRzXG4gICAgICBAZXEgKCDOqWJiZGJyXzI0NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlLnQgICAgICAgICAgICAgICAgICksICfmsLQgKOOBv+OBmiknXG4gICAgICBAZXEgKCDOqWJiZGJyXzI0OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlLnQgICAgICAgICAgICAgICAgICksICfpo5/jgbnniakgKOOBn+OBueOCguOBriknXG4gICAgICBAZXEgKCDOqWJiZGJyXzI0OSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfcGx1Z2luc19hY3F1aXNpdGlvbjogLT5cbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgfSA9ICggcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi91bnN0YWJsZS1ycHItdHlwZV9vZi1icmljcycgKS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgZ2V0X2FsbF9pbl9wcm90b3R5cGVfY2hhaW4sXG4gICAgICBnZXRfcHJvdG90eXBlX2NoYWluLCAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL3Byb3RvdHlwZS10b29scydcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG5icl9udW1iZXJfcGx1Z2luID1cbiAgICAgIG5hbWU6ICAgJ25icl9udW1iZXJfcGx1Z2luJyAjIyMgTk9URSBpbmZvcm1hdGl2ZSwgbm90IGVuZm9yY2VkICMjI1xuICAgICAgcHJlZml4OiAnbmJyJyAgICAgICAgICAgICAgICMjIyBOT1RFIGluZm9ybWF0aXZlLCBub3QgZW5mb3JjZWQgIyMjXG4gICAgICBleHBvcnRzOlxuICAgICAgICBidWlsZDogW1xuICAgICAgICAgIFNRTFwiY3JlYXRlIHRhYmxlIG5icl9udW1iZXJzICggbnVtYmVyIGludGVnZXIgKTtcIlxuICAgICAgICAgIF1cbiAgICAgICAgc3RhdGVtZW50czpcbiAgICAgICAgICBuYnJfaW5zZXJ0X251bWJlcjogICAgICAgICAgU1FMXCJpbnNlcnQgaW50byBuYnJfbnVtYmVycyB2YWx1ZXMgKCAkbnVtYmVyICk7XCJcbiAgICAgICAgICBuYnJfc2VsZWN0X251bWJlcnM6ICAgICAgICAgU1FMXCJzZWxlY3QgKiBmcm9tIG5icl9udW1iZXJzIG9yZGVyIGJ5IG51bWJlcjtcIlxuICAgICAgICAgIG5icl9zZWxlY3Rfc3F1YXJlX251bWJlcnM6ICBTUUxcInNlbGVjdCBuYnJfc3F1YXJlKCBudW1iZXIgKSBmcm9tIG5icl9udW1iZXJzIG9yZGVyIGJ5IG51bWJlcjtcIlxuICAgICAgICBmdW5jdGlvbnM6XG4gICAgICAgICAgbmJyX3NxdWFyZTpcbiAgICAgICAgICAgIHZhbHVlOiAoIG51bWJlciApIC0+IEBuYnJfZ2V0X3NxdWFyZSBudW1iZXJcbiAgICAgICAgbWV0aG9kczpcbiAgICAgICAgICBuYnJfZ2V0X3NxdWFyZTogKCBudW1iZXIgKSAtPiBudW1iZXIgKiogMlxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgb3RoZXJfcGx1Z2luID1cbiAgICAgIHByZWZpeDogJ290aGVyJ1xuICAgICAgZXhwb3J0czpcbiAgICAgICAgc3RhdGVtZW50czpcbiAgICAgICAgICBvdGhlcl9zZWxlY3Rfd2F0OiBTUUxcInNlbGVjdCAxIGFzIHdhdDtcIlxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGV4dF9wbHVnaW4gPVxuICAgICAgbmFtZTogICAndGV4dC1wbHVnaW4nXG4gICAgICBwcmVmaXg6ICd0eHQnXG4gICAgICBleHBvcnRzOlxuICAgICAgICBmdW5jdGlvbnM6XG4gICAgICAgICAgdHh0X3VwcGVyOlxuICAgICAgICAgICAgdmFsdWU6ICAoIHRleHQgKSAtPiB0ZXh0LnRvVXBwZXJDYXNlKClcbiAgICAgICAgc3RhdGVtZW50czpcbiAgICAgICAgICB0eHRfc2VsZWN0X29uZTogU1FMXCJzZWxlY3QgMSBhcyBvbmU7XCJcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERiXzEgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIEBwcmVmaXg6ICAnZGIxJ1xuICAgICAgQHBsdWdpbnM6IFtcbiAgICAgICAgb3RoZXJfcGx1Z2luXG4gICAgICAgICdwcm90b3R5cGVzJ1xuICAgICAgICBuYnJfbnVtYmVyX3BsdWdpblxuICAgICAgICAnbWUnXG4gICAgICAgIHRleHRfcGx1Z2luXG4gICAgICAgIF1cbiAgICAgIEBleHBvcnRzOiB7fVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiY3JlYXRlIHRhYmxlIHggKCBpZCBpbnRlZ2VyICk7XCJcbiAgICAgICAgXVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIGRiMV9zZWxlY3RfeDogU1FMXCJzZWxlY3QgKiBmcm9tIHg7XCJcbiAgICAgIEBmdW5jdGlvbnM6XG4gICAgICAgIGRiMV9jdWJlOlxuICAgICAgICAgIHZhbHVlOiAoIHggKSAtPiB4ICoqIDNcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRiID0gRGJfMS5yZWJ1aWxkKClcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHJlc3VsdCAgPSBbXVxuICAgIGZvciB7IHR5cGUsIGNvbnRyaWJ1dG9yLCB9IGluIGRiLl9nZXRfYWNxdWlzaXRpb25fY2hhaW4oKVxuICAgICAgcmVzdWx0LnB1c2ggXCJbI3t0eXBlfV0je2NvbnRyaWJ1dG9yLm5hbWUgPyAnKGFub255bW91cyknfVwiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWJiZGJyXzI1MCA9IC0+IHJlc3VsdCApLCBbXG4gICAgICAnW3BsdWdpbl0oYW5vbnltb3VzKSdcbiAgICAgICdbcHJvdG90eXBlXURicmljX3N0ZF9iYXNlJ1xuICAgICAgJ1twcm90b3R5cGVdRGJyaWNfc3RkX3ZhcmlhYmxlcydcbiAgICAgICdbcHJvdG90eXBlXURicmljX3N0ZCdcbiAgICAgICdbcGx1Z2luXW5icl9udW1iZXJfcGx1Z2luJ1xuICAgICAgJ1twcm90b3R5cGVdRGJfMSdcbiAgICAgICdbcGx1Z2luXXRleHQtcGx1Z2luJyBdXG4gICAgZm9yIHsgdHlwZSwgY29udHJpYnV0b3IsIH0gaW4gZGIuX2dldF9hY3F1aXNpdGlvbl9jaGFpbigpXG4gICAgICBpZiB0eXBlIGlzICdwbHVnaW4nXG4gICAgICAgIGluZm8gJ86pYmJkYnJfMjUxJywgXCJbI3t0eXBlfV0je2NvbnRyaWJ1dG9yLm5hbWUgPyAnKGFub255bW91cyknfVwiLCBPYmplY3Qua2V5cyBjb250cmlidXRvci5leHBvcnRzXG4gICAgICBlbHNlXG4gICAgICAgICggaWYgKCBjb250cmlidXRvciBpcyBkYi5jb25zdHJ1Y3RvciApIHRoZW4gaGVscCBlbHNlIHVyZ2UgKSAnzqliYmRicl8yNTInLCBcIlsje3R5cGV9XSN7Y29udHJpYnV0b3IubmFtZSA/ICcoYW5vbnltb3VzKSd9XCJcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNvbnRyaWJ1dGlvbnMgPSBkYi5fY29sbGVjdF9jb250cmlidXRvcl9wcm9wZXJ0aWVzKClcbiAgICBAZXEgKCDOqWJiZGJyXzI1MyA9IC0+ICggT2JqZWN0LmtleXMgY29udHJpYnV0aW9ucyApLnNvcnQoKSApLCBbXG4gICAgICAnYWdncmVnYXRlX2Z1bmN0aW9ucydcbiAgICAgICdidWlsZCdcbiAgICAgICdmdW5jdGlvbnMnXG4gICAgICAnbWV0aG9kcydcbiAgICAgICdzdGF0ZW1lbnRzJ1xuICAgICAgJ3RhYmxlX2Z1bmN0aW9ucydcbiAgICAgICd2aXJ0dWFsX3RhYmxlcydcbiAgICAgICd3aW5kb3dfZnVuY3Rpb25zJyBdXG4gICAgZGVidWcgJ86pYmJkYnJfMjU0JywgdG9nZ2xlICdidWlsZDogICAgICAgICAgICAgICAnLCBPYmplY3Qua2V5cyBjb250cmlidXRpb25zLmJ1aWxkXG4gICAgZGVidWcgJ86pYmJkYnJfMjU1JywgdG9nZ2xlICdhZ2dyZWdhdGVfZnVuY3Rpb25zOiAnLCBPYmplY3Qua2V5cyBjb250cmlidXRpb25zLmFnZ3JlZ2F0ZV9mdW5jdGlvbnNcbiAgICBkZWJ1ZyAnzqliYmRicl8yNTYnLCB0b2dnbGUgJ2Z1bmN0aW9uczogICAgICAgICAgICcsIE9iamVjdC5rZXlzIGNvbnRyaWJ1dGlvbnMuZnVuY3Rpb25zXG4gICAgZGVidWcgJ86pYmJkYnJfMjU3JywgdG9nZ2xlICdtZXRob2RzOiAgICAgICAgICAgICAnLCBPYmplY3Qua2V5cyBjb250cmlidXRpb25zLm1ldGhvZHNcbiAgICBkZWJ1ZyAnzqliYmRicl8yNTgnLCB0b2dnbGUgJ3N0YXRlbWVudHM6ICAgICAgICAgICcsIE9iamVjdC5rZXlzIGNvbnRyaWJ1dGlvbnMuc3RhdGVtZW50c1xuICAgIGRlYnVnICfOqWJiZGJyXzI1OScsIHRvZ2dsZSAndGFibGVfZnVuY3Rpb25zOiAgICAgJywgT2JqZWN0LmtleXMgY29udHJpYnV0aW9ucy50YWJsZV9mdW5jdGlvbnNcbiAgICBkZWJ1ZyAnzqliYmRicl8yNjAnLCB0b2dnbGUgJ3ZpcnR1YWxfdGFibGVzOiAgICAgICcsIE9iamVjdC5rZXlzIGNvbnRyaWJ1dGlvbnMudmlydHVhbF90YWJsZXNcbiAgICBkZWJ1ZyAnzqliYmRicl8yNjEnLCB0b2dnbGUgJ3dpbmRvd19mdW5jdGlvbnM6ICAgICcsIE9iamVjdC5rZXlzIGNvbnRyaWJ1dGlvbnMud2luZG93X2Z1bmN0aW9uc1xuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQGVxICggzqliYmRicl8yNjIgPSAtPiBPYmplY3Qua2V5cyBjb250cmlidXRpb25zLmZ1bmN0aW9ucyApLCBbXG4gICAgICAncmVnZXhwJ1xuICAgICAgJ3N0ZF9pc191Y19ub3JtYWwnXG4gICAgICAnc3RkX25vcm1hbGl6ZV90ZXh0J1xuICAgICAgJ3N0ZF9ub3JtYWxpemVfanNvbl9vYmplY3QnXG4gICAgICAnc3RkX2dldF9uZXh0X2luX3NlcXVlbmNlJ1xuICAgICAgJ3N0ZF9nZXRfdmFyaWFibGUnXG4gICAgICAnbmJyX3NxdWFyZSdcbiAgICAgICdkYjFfY3ViZSdcbiAgICAgICd0eHRfdXBwZXInIF1cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEBlcSAoIM6pYmJkYnJfMjYzID0gLT4gT2JqZWN0LmtleXMgY29udHJpYnV0aW9ucy5zdGF0ZW1lbnRzICksIFtcbiAgICAgICdvdGhlcl9zZWxlY3Rfd2F0J1xuICAgICAgJ3N0ZF9nZXRfc2NoZW1hJ1xuICAgICAgJ3N0ZF9nZXRfdGFibGVzJ1xuICAgICAgJ3N0ZF9nZXRfdmlld3MnXG4gICAgICAnc3RkX2dldF9yZWxhdGlvbnMnXG4gICAgICAnc3RkX2dldF9mdW5jdGlvbnMnXG4gICAgICAnc3RkX3NldF92YXJpYWJsZSdcbiAgICAgICdzdGRfZ2V0X3ZhcmlhYmxlcydcbiAgICAgICduYnJfaW5zZXJ0X251bWJlcidcbiAgICAgICduYnJfc2VsZWN0X251bWJlcnMnXG4gICAgICAnbmJyX3NlbGVjdF9zcXVhcmVfbnVtYmVycydcbiAgICAgICdkYjFfc2VsZWN0X3gnXG4gICAgICAndHh0X3NlbGVjdF9vbmUnIF1cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGZ1bmN0aW9uX25hbWVzICA9IG5ldyBTZXQgKCByLm5hbWUgZm9yIHIgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0IG5hbWUgZnJvbSBzdGRfZnVuY3Rpb25zO1wiIClcbiAgICB0YWJsZV9uYW1lcyAgICAgPSBuZXcgU2V0ICggci5uYW1lIGZvciByIGZyb20gZGIud2FsayBTUUxcInNlbGVjdCBuYW1lIGZyb20gc3RkX3RhYmxlcztcIiApXG4gICAgQGVxICggzqliYmRicl8yNjQgPSAtPiBSZWZsZWN0LmhhcyBkYi5zdGF0ZW1lbnRzLCAgJ3N0ZF9nZXRfdmlld3MnICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWJiZGJyXzI2NSA9IC0+IFJlZmxlY3QuaGFzIGRiLnN0YXRlbWVudHMsICAnbmJyX2luc2VydF9udW1iZXInICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pYmJkYnJfMjY2ID0gLT4gdHlwZV9vZiBkYi5uYnJfZ2V0X3NxdWFyZSAgICAgICAgICAgICAgICAgICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgQGVxICggzqliYmRicl8yNjcgPSAtPiBkYi5uYnJfZ2V0X3NxdWFyZSAxMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDEwMFxuICAgIEBlcSAoIM6pYmJkYnJfMjY4ID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICduYnJfc3F1YXJlJyAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqliYmRicl8yNjkgPSAtPiBkYi5nZXRfZmlyc3QgU1FMXCJzZWxlY3QgbmJyX3NxdWFyZSggMTEgKSBhcyBzO1wiICAgKSwgeyBzOiAxMjEsIH1cbiAgICBAZXEgKCDOqWJiZGJyXzI3MCA9IC0+IHRhYmxlX25hbWVzLmhhcyAnbmJyX251bWJlcnMnICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pYmJkYnJfMjcxID0gLT4gdGFibGVfbmFtZXMuaGFzICd4JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfaG9hcmRfcGx1Z2luX21vZGVsOiAtPlxuICAgIHsgSG9hcmQsXG4gICAgICBTY2F0dGVyLFxuICAgICAgUnVuLFxuICAgICAgc3VtbWFyaXplX2RhdGEsXG4gICAgICBpbnRlcm5hbHMsICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvaW50ZXJtaXNzaW9uJ1xuICAgIHsgbGV0cywgICAgICAgICAgIH0gPSBpbnRlcm5hbHNcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGhvYXJkX3BsdWdpbiA9XG4gICAgICBuYW1lOiAgICAgJ2hvYXJkJ1xuICAgICAgcHJlZml4OiAgICdocmQnXG4gICAgICBleHBvcnRzOlxuICAgICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGJ1aWxkOiAtPlxuICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgIyMjIFRBSU5UIHN0b3BnYXAgc29sdXRpb24gIyMjXG4gICAgICAgICAgY2ZnID1cbiAgICAgICAgICAgIHJ1bnNfcm93aWRfcmVnZXhwOiAgICAgICAgJy4rJ1xuICAgICAgICAgICAgZmlyc3RfcG9pbnQ6ICAgICAgICAgICAgICAweDAwXzAwMDBcbiAgICAgICAgICAgIGxhc3RfcG9pbnQ6ICAgICAgICAgICAgICAgMHgxMF9mZmZmXG4gICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICBSID0gW11cbiAgICAgICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgIFIucHVzaCBTUUxcIlwiXCJcbiAgICAgICAgICAgIGNyZWF0ZSB0YWJsZSBocmRfaG9hcmRfc2NhdHRlcnMgKFxuICAgICAgICAgICAgICAgIHJvd2lkICAgICB0ZXh0ICAgIHVuaXF1ZSAgbm90IG51bGwsXG4gICAgICAgICAgICAgICAgaXNfaGl0ICAgIGJvb2xlYW4gICAgICAgICBub3QgbnVsbCBkZWZhdWx0IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRhdGEgICAgICBqc29uICAgICAgICAgICAgbm90IG51bGwgZGVmYXVsdCAnbnVsbCdcbiAgICAgICAgICAgICAgICApO1wiXCJcIlxuXG4gICAgICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICBSLnB1c2ggU1FMXCJcIlwiXG4gICAgICAgICAgICBjcmVhdGUgdGFibGUgaHJkX2hvYXJkX3J1bnMgKFxuICAgICAgICAgICAgICAgIHJvd2lkICAgICB0ZXh0ICAgIHVuaXF1ZSAgbm90IG51bGwsXG4gICAgICAgICAgICAgICAgbG8gICAgICAgIGludGVnZXIgICAgICAgICBub3QgbnVsbCxcbiAgICAgICAgICAgICAgICBoaSAgICAgICAgaW50ZWdlciAgICAgICAgIG5vdCBudWxsLFxuICAgICAgICAgICAgICAgIHNjYXR0ZXIgICB0ZXh0ICAgICAgICAgICAgbm90IG51bGwsXG4gICAgICAgICAgICAgIC0tIHByaW1hcnkga2V5ICggcm93aWQgKSxcbiAgICAgICAgICAgICAgZm9yZWlnbiBrZXkgKCBzY2F0dGVyICkgcmVmZXJlbmNlcyBocmRfaG9hcmRfc2NhdHRlcnMgKCByb3dpZCApLFxuICAgICAgICAgICAgICBjb25zdHJhaW50IFwizqljb25zdHJhaW50XzI3MlwiIGNoZWNrICggcm93aWQgcmVnZXhwICN7TElUIGNmZy5ydW5zX3Jvd2lkX3JlZ2V4cCB9ICksXG4gICAgICAgICAgICAgIGNvbnN0cmFpbnQgXCLOqWNvbnN0cmFpbnRfMjczXCIgY2hlY2sgKCBsbyBiZXR3ZWVuICN7TElUIGNmZy5maXJzdF9wb2ludH0gYW5kICN7TElUIGNmZy5sYXN0X3BvaW50fSApLFxuICAgICAgICAgICAgICBjb25zdHJhaW50IFwizqljb25zdHJhaW50XzI3NFwiIGNoZWNrICggaGkgYmV0d2VlbiAje0xJVCBjZmcuZmlyc3RfcG9pbnR9IGFuZCAje0xJVCBjZmcubGFzdF9wb2ludH0gKSxcbiAgICAgICAgICAgICAgY29uc3RyYWludCBcIs6pY29uc3RyYWludF8yNzVcIiBjaGVjayAoIGxvIDw9IGhpIClcbiAgICAgICAgICAgICAgLS0gY29uc3RyYWludCBcIs6pY29uc3RyYWludF8yNzZcIiBjaGVjayAoIHJvd2lkIHJlZ2V4cCAnXi4qJCcgKVxuICAgICAgICAgICAgICApO1wiXCJcIlxuICAgICAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgcmV0dXJuIFJcbiAgICAgICAgc3RhdGVtZW50czpcbiAgICAgICAgICBocmRfeXl5OiBTUUxcInNlbGVjdCAxIGFzIG47XCJcbiAgICAgICAgICBocmRfaW5zZXJ0X3NjYXR0ZXI6IFNRTFwiXCJcImluc2VydCBpbnRvIGhyZF9ob2FyZF9zY2F0dGVycyAoIHJvd2lkLCBpc19oaXQsIGRhdGEgKVxuICAgICAgICAgICAgdmFsdWVzICggJHJvd2lkLCAkaXNfaGl0LCAkZGF0YSApO1wiXCJcIlxuICAgICAgICAgIGhyZF9pbnNlcnRfcnVuOiBTUUxcIlwiXCJpbnNlcnQgaW50byBocmRfaG9hcmRfcnVucyAoIHJvd2lkLCBsbywgaGksIHNjYXR0ZXIgKVxuICAgICAgICAgICAgdmFsdWVzICggJHJvd2lkLCAkbG8sICRoaSwgJHNjYXR0ZXIgKTtcIlwiXCJcblxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgSG9hcmRfdXNlciBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQHByZWZpeDogICdqenInXG4gICAgICBAcGx1Z2luczogW1xuICAgICAgICAjICdwcm90b3R5cGVzJ1xuICAgICAgICBob2FyZF9wbHVnaW5cbiAgICAgICAgIyAnbWUnXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHUgPSBuZXcgSG9hcmRfdXNlciB7IHJlYnVpbGQ6IHRydWUsIH1cbiAgICAjIGRlYnVnICfOqWJiZGJyXzI3NycsIHJvdy5uYW1lIGZvciByb3cgZnJvbSB1LndhbGsgdS5zdGF0ZW1lbnRzLnN0ZF9nZXRfcmVsYXRpb25zXG4gICAgbmFtZXMgPSBuZXcgU2V0ICggcm93Lm5hbWUgZm9yIHJvdyBmcm9tIHUud2FsayB1LnN0YXRlbWVudHMuc3RkX2dldF9yZWxhdGlvbnMgKVxuICAgIEBlcSAoIM6pYmJkYnJfMjc4ID0gLT4gbmFtZXMuaGFzICdocmRfaG9hcmRfcnVucycgICAgICApLCB0cnVlXG4gICAgQGVxICggzqliYmRicl8yNzkgPSAtPiBuYW1lcy5oYXMgJ2hyZF9ob2FyZF9zY2F0dGVycycgICksIHRydWVcbiAgICBAZXEgKCDOqWJiZGJyXzI4MCA9IC0+IG5hbWVzLmhhcyAnc3RkX2Z1bmN0aW9ucycgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pYmJkYnJfMjgxID0gLT4gbmFtZXMuaGFzICdzdGRfcmVsYXRpb25zJyAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqliYmRicl8yODIgPSAtPiBuYW1lcy5oYXMgJ3N0ZF90YWJsZXMnICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWJiZGJyXzI4MyA9IC0+IG5hbWVzLmhhcyAnc3RkX3ZhcmlhYmxlcycgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pYmJkYnJfMjg0ID0gLT4gbmFtZXMuaGFzICdzdGRfdmlld3MnICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqliYmRicl8yODUgPSAtPiB1LmdldF9hbGwgdS5zdGF0ZW1lbnRzLmhyZF95eXkgKSwgWyB7IG46IDEsIH0sIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEhvYXJkX2V4dHJhcyBleHRlbmRzIEhvYXJkXG5cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgY29uc3RydWN0b3I6ICggZGIgKSAtPlxuICAgICAgICBzdXBlcigpXG4gICAgICAgIEBkYiA9IGRiXG4gICAgICAgIEByZXN0b3JlKClcbiAgICAgICAgO3VuZGVmaW5lZFxuXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHJlc3RvcmU6IC0+XG4gICAgICAgIHNjYXR0ZXJzID0ge31cbiAgICAgICAgZm9yIHJvdyBmcm9tIEBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBocmRfaG9hcmRfc2NhdHRlcnMgb3JkZXIgYnkgcm93aWQ7XCJcbiAgICAgICAgICAjIyMgVEFJTlQgdXNlIGBTY2F0dGVyLl9mcm9tX2RiX3JvdygpYCAjIyNcbiAgICAgICAgICBzY2F0dGVyICAgICAgICAgICAgICAgICAgICAgICA9IG5ldyBTY2F0dGVyIEAsICggSlNPTi5wYXJzZSByb3cuZGF0YSApLCB7IHJvd2lkOiByb3cucm93aWQsIGlzX25vcm1hbGl6ZWQ6IHRydWUsIH1cbiAgICAgICAgICBzY2F0dGVyc1sgc2NhdHRlci5yb3dpZCBdICAgICA9IHNjYXR0ZXJcbiAgICAgICAgICBAc2NhdHRlcnMucHVzaCBzY2F0dGVyXG4gICAgICAgIGZvciByb3cgZnJvbSBAZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2hvYXJkX3J1bnMgb3JkZXIgYnkgcm93aWQ7XCJcbiAgICAgICAgICAjIyMgVEFJTlQgdXNlIGBSdW4uX2Zyb21fZGJfcm93KClgICMjI1xuICAgICAgICAgIHJ1biAgICAgICAgICAgICAgICAgICAgICAgICAgID0gbmV3IFJ1biB7IGxvOiByb3cubG8sIGhpOiByb3cuaGksIH1cbiAgICAgICAgICBydW4ucm93aWQgICAgICAgICAgICAgICAgICAgICA9IHJvdy5yb3dpZFxuICAgICAgICAgIEBzdGF0ZS5ydW5fcm93aWQgICAgICAgICAgICAgID0gTWF0aC5tYXggQHN0YXRlLnJ1bl9yb3dpZCwgTnVtYmVyIHJ1bi5yb3dpZC5yZXBsYWNlIC9eLio9LywgJydcbiAgICAgICAgICBydW4uc2NhdHRlciAgICAgICAgICAgICAgICAgICA9IHJvdy5zY2F0dGVyXG4gICAgICAgICAgc2NhdHRlcnNbIHJ1bi5zY2F0dGVyIF0ucnVucyAgPSBsZXRzIHNjYXR0ZXJzWyBydW4uc2NhdHRlciBdLnJ1bnMsICggcnVucyApIC0+IHJ1bnMucHVzaCBydW5cbiAgICAgICAgO251bGxcblxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBzYXZlOiAtPlxuICAgICAgICBmb3Igc2NhdHRlciBpbiBAc2NhdHRlcnNcbiAgICAgICAgICBzY2F0dGVyLm5vcm1hbGl6ZSgpXG4gICAgICAgICAgaXNfaGl0ICAgICAgPSBmcm9tX2Jvb2wgdHJ1ZVxuICAgICAgICAgIGRhdGEgICAgICAgID0gSlNPTi5zdHJpbmdpZnkgc2NhdHRlci5kYXRhXG4gICAgICAgICAgQGRiLnN0YXRlbWVudHMuaHJkX2luc2VydF9zY2F0dGVyLnJ1biB7IHNjYXR0ZXIuLi4sIGlzX2hpdCwgZGF0YSwgfVxuICAgICAgICAgIGZvciBydW4gaW4gc2NhdHRlci5ydW5zXG4gICAgICAgICAgICBAZGIuc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBydW4uLi4sIH1cbiAgICAgICAgO251bGxcblxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGhfMSA9IG5ldyBIb2FyZF9leHRyYXMgdVxuICAgICAgYXNjaWkgPSBoXzEuYWRkX3NjYXR0ZXIgeyBpc19hc2NpaV9hbHBoYW51bTogdHJ1ZSwgfVxuICAgICAgQGVxICggzqliYmRicl8yODYgPSAtPiBhc2NpaS5yb3dpZCApLCAndDpocmQ6c2NhdHRlcnMsUj0xJ1xuICAgICAgYXNjaWkuYWRkX3J1biAnYScsICd6J1xuICAgICAgYXNjaWkuYWRkX3J1biAnQScsICdaJ1xuICAgICAgYXNjaWkuYWRkX3J1biAnMCcsICc5J1xuICAgICAgYXNjaWkubm9ybWFsaXplKClcbiAgICAgIGVjaG8gcnVuIGZvciBydW4gZnJvbSBydW5zID0gKCAtPiB5aWVsZCBmcm9tIGFzY2lpLnJ1bnMgKSgpXG4gICAgICBAZXEgKCDOqWJiZGJyXzI4NyA9IC0+IGhfMS5zdGF0ZS5ydW5fcm93aWQgICAgICAgICAgICAgKSwgM1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBydW5zID0gKCAtPiB5aWVsZCBmcm9tIGFzY2lpLnJ1bnMgKSgpXG4gICAgICBAZXEgKCDOqWJiZGJyXzI4OCA9IC0+IGFzY2lpLnJvd2lkICAgICAgICAgICAgICAgICAgICAgKSwgJ3Q6aHJkOnNjYXR0ZXJzLFI9MSdcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjg5ID0gLT4gcnVucy5uZXh0KCkudmFsdWUgICAgICAgICAgICAgICApLCB7IGxvOiA0OCwgaGk6IDU3LCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0xJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqliYmRicl8yOTAgPSAtPiBydW5zLm5leHQoKS52YWx1ZSAgICAgICAgICAgICAgICksIHsgbG86IDY1LCBoaTogOTAsIHJvd2lkOiAndDpocmQ6cnVucyxSPTInLCBzY2F0dGVyOiAndDpocmQ6c2NhdHRlcnMsUj0xJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzI5MSA9IC0+IHJ1bnMubmV4dCgpLnZhbHVlICAgICAgICAgICAgICAgKSwgeyBsbzogOTcsIGhpOiAxMjIsIHJvd2lkOiAndDpocmQ6cnVucyxSPTMnLCBzY2F0dGVyOiAndDpocmQ6c2NhdHRlcnMsUj0xJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzI5MiA9IC0+IHJ1bnMubmV4dCgpLmRvbmUgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8yOTMgPSAtPiBoXzEuc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICcmJyAgKSwgbnVsbFxuICAgICAgQGVxICggzqliYmRicl8yOTQgPSAtPiBoXzEuc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICdhJyAgKSwgeyBpc19hc2NpaV9hbHBoYW51bTogWyB0cnVlIF0gfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoXzEuc2F2ZSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGVjaG8gcm93IGZvciByb3cgZnJvbSByb3dzID0gdS53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBocmRfaG9hcmRfc2NhdHRlcnMgb3JkZXIgYnkgcm93aWQ7XCJcbiAgICAgIHJvd3MgPSB1LndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ob2FyZF9zY2F0dGVycyBvcmRlciBieSByb3dpZDtcIlxuICAgICAgQGVxICggzqliYmRicl8yOTUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6c2NhdHRlcnMsUj0xJywgaXNfaGl0OiAxLCBkYXRhOiAne1wiaXNfYXNjaWlfYWxwaGFudW1cIjp0cnVlfScgfVxuICAgICAgQGVxICggzqliYmRicl8yOTYgPSAtPiByb3dzLm5leHQoKS5kb25lICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGVjaG8gcm93IGZvciByb3cgZnJvbSByb3dzID0gdS53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBocmRfaG9hcmRfcnVucyBvcmRlciBieSByb3dpZDtcIlxuICAgICAgcm93cyA9IHUud2FsayBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2hvYXJkX3J1bnMgb3JkZXIgYnkgcm93aWQ7XCJcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjk3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0xJywgbG86IDQ4LCBoaTogNTcsIHNjYXR0ZXI6ICd0OmhyZDpzY2F0dGVycyxSPTEnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjk4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0yJywgbG86IDY1LCBoaTogOTAsIHNjYXR0ZXI6ICd0OmhyZDpzY2F0dGVycyxSPTEnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjk5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0zJywgbG86IDk3LCBoaTogMTIyLCBzY2F0dGVyOiAndDpocmQ6c2NhdHRlcnMsUj0xJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzMwMCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaF8yID0gbmV3IEhvYXJkX2V4dHJhcyB1XG4gICAgICBhc2NpaSA9ICggaF8yLnNjYXR0ZXJzLmF0IC0xICkgPyB7fVxuICAgICAgQGVxICggzqliYmRicl8zMDEgPSAtPiBhc2NpaS5yb3dpZCApLCAndDpocmQ6c2NhdHRlcnMsUj0xJ1xuICAgICAgQGVxICggzqliYmRicl8zMDIgPSAtPiBoXzIuc3RhdGUucnVuX3Jvd2lkICAgICAgICAgICAgICAgKSwgM1xuICAgICAgZWNobyBydW4gZm9yIHJ1biBmcm9tIHJ1bnMgPSAoIC0+IHlpZWxkIGZyb20gYXNjaWkucnVucyA/IFtdICkoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBydW5zID0gKCAtPiB5aWVsZCBmcm9tIGFzY2lpLnJ1bnMgPyBbXSApKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMzAzID0gLT4gYXNjaWkucm93aWQgICAgICAgICAgICAgICAgICAgICAgICksICd0OmhyZDpzY2F0dGVycyxSPTEnXG4gICAgICBAZXEgKCDOqWJiZGJyXzMwNCA9IC0+IHJ1bnMubmV4dCgpLnZhbHVlICAgICAgICAgICAgICAgICApLCB7IGxvOiA0OCwgaGk6IDU3LCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0xJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqliYmRicl8zMDUgPSAtPiBydW5zLm5leHQoKS52YWx1ZSAgICAgICAgICAgICAgICAgKSwgeyBsbzogNjUsIGhpOiA5MCwgcm93aWQ6ICd0OmhyZDpydW5zLFI9MicsIHNjYXR0ZXI6ICd0OmhyZDpzY2F0dGVycyxSPTEnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMzA2ID0gLT4gcnVucy5uZXh0KCkudmFsdWUgICAgICAgICAgICAgICAgICksIHsgbG86IDk3LCBoaTogMTIyLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0zJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqliYmRicl8zMDcgPSAtPiBydW5zLm5leHQoKS5kb25lICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl8zMDggPSAtPiBoXzIuc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICcmJyAgKSwgbnVsbFxuICAgICAgQGVxICggzqliYmRicl8zMDkgPSAtPiBoXzIuc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICdhJyAgKSwgeyBpc19hc2NpaV9hbHBoYW51bTogWyB0cnVlIF0gfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBfZGJyaWNfaW50ZWdyYXRpb246IC0+XG4gICMgICB7IEhvYXJkLFxuICAjICAgICBzdW1tYXJpemVfZGF0YSwgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2ludGVybWlzc2lvbidcbiAgIyAgIHsgRGJyaWMsXG4gICMgICAgIGFzX2Jvb2wsXG4gICMgICAgIFNRTCxcbiAgIyAgICAgTElULFxuICAjICAgICBJRE4sXG4gICMgICAgIFZFQyxcbiAgIyAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAjICAgcHJlZml4ID0gJ3ByZngnXG4gICMgICBkZWJ1ZyAnzqlpbXRfMzEwJywgSG9hcmRcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBnZXRfZnVuY3Rpb25zID0gKCBkYiApIC0+XG4gICMgICAgIFIgPSB7fVxuICAjICAgICBmb3IgeyBuYW1lLCBidWlsdGluLCB0eXBlLCB9IGZyb20gZGIud2FsayBTUUxcIlwiXCJzZWxlY3QgbmFtZSwgYnVpbHRpbiwgdHlwZSBmcm9tIHByYWdtYV9mdW5jdGlvbl9saXN0KCkgb3JkZXIgYnkgbmFtZTtcIlwiXCJcbiAgIyAgICAgICBpc19idWlsdGluID0gYXNfYm9vbCBidWlsdGluXG4gICMgICAgICAgUlsgbmFtZSBdID0geyBuYW1lLCBpc19idWlsdGluLCB0eXBlLCB9XG4gICMgICAgIHJldHVybiBSXG4gICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgZ2V0X2Z1bmN0aW9uX25hbWVzID0gKCBkYiApIC0+IG5ldyBTZXQgKCBrZXkgZm9yIGtleSBvZiBnZXRfZnVuY3Rpb25zIGRiIClcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBAZXEgKCDOqWltdF8zMTEgPSAtPiB0eXBlX29mIEhvYXJkLmdldF91ZGZzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAjICAgQGVxICggzqlpbXRfMzEyID0gLT4gdHlwZV9vZiBIb2FyZC5nZXRfYnVpbGRfc3RhdGVtZW50cyAgICAgICAgICAgICAgICAgICAgICAgICksICdmdW5jdGlvbidcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBAZXEgKCDOqWltdF8zMTMgPSAtPiB0eXBlX29mIEhvYXJkLmdldF91ZGZzICAgICAgICAgICAgICB7IHByZWZpeCwgfSAgICAgICAgICAgKSwgJ3BvZCdcbiAgIyAgIEBlcSAoIM6paW10XzMxNCA9IC0+IHR5cGVfb2YgSG9hcmQuZ2V0X2J1aWxkX3N0YXRlbWVudHMgIHsgcHJlZml4LCB9ICAgICAgICAgICApLCAnbGlzdCdcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBAZXEgKCDOqWltdF8zMTUgPSAtPiAoIE9iamVjdC5rZXlzIEhvYXJkLmdldF91ZGZzICAgICAgICB7IHByZWZpeCwgfSApLmxlbmd0aCAgKSwgM1xuICAjICAgQGVxICggzqlpbXRfMzE2ID0gLT4gKCBIb2FyZC5nZXRfYnVpbGRfc3RhdGVtZW50cyAgICAgICAgeyBwcmVmaXgsIH0gKS5sZW5ndGggICksIDNcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICB7fVxuICAjICAgdWRmcyAgICAgICAgICAgICAgPSBIb2FyZC5nZXRfdWRmcyB7IHByZWZpeCwgfVxuICAjICAgYnVpbGRfc3RhdGVtZW50cyAgPSBIb2FyZC5nZXRfYnVpbGRfc3RhdGVtZW50cyB7IHByZWZpeCwgfVxuICAjICAgZGIgICAgICAgICAgICAgICAgPSBuZXcgRGJyaWMgJzptZW1vcnk6J1xuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgIGZvciBuYW1lLCBkZWZpbml0aW9uIG9mIHVkZnNcbiAgIyAgICAgaW5mbyAnzqlpbXRfMzE3JywgXCJjcmVhdGUgVURGICN7ZGVmaW5pdGlvbi5uYW1lfVwiXG4gICMgICAgIGRiLmNyZWF0ZV9mdW5jdGlvbiBkZWZpbml0aW9uXG4gICMgICBkZWJ1ZyAnzqlpbXRfMzE4JywgIG5hbWUgZm9yIG5hbWUgZnJvbSBnZXRfZnVuY3Rpb25fbmFtZXMgZGIgd2hlbiBuYW1lLnN0YXJ0c1dpdGggXCIje3ByZWZpeH1fXCJcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBmb3Igc3RhdGVtZW50LCBpZHggaW4gYnVpbGRfc3RhdGVtZW50c1xuICAjICAgICBzdGF0ZW1lbnQgPSBkYi5wcmVwYXJlIHN0YXRlbWVudFxuICAjICAgICBpbmZvICfOqWltdF8zMTknLCBzdGF0ZW1lbnQucnVuKClcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBpbnNlcnRfZGF0YSA9IGRiLnByZXBhcmUgU1FMXCJcIlwiaW5zZXJ0IGludG8gI3tJRE4gXCIje3ByZWZpeH1faG9hcmRfc2NhdHRlcnNcIn0gKCBkYXRhICkgdmFsdWVzICggJGRhdGEgKVwiXCJcIlxuICAjICAgaW5zZXJ0X2RhdGEucnVuIHsgZGF0YTogKCBKU09OLnN0cmluZ2lmeSB7IGxldHRlcjogJ0EnLCBhcmM6IHRydWUsIHpldGE6IGZhbHNlLCB9ICksIH1cbiAgIyAgIGluc2VydF9kYXRhLnJ1biB7IGRhdGE6ICggSlNPTi5zdHJpbmdpZnkgeyB6ZXRhOiBmYWxzZSwgbGV0dGVyOiAnQScsIGFyYzogdHJ1ZSwgfSApLCB9XG4gICMgICBpbnNlcnRfZGF0YS5ydW4geyBkYXRhOiAoIEpTT04uc3RyaW5naWZ5IHsgbGV0dGVyOiAnQicsIGFyYzogdHJ1ZSwgemV0YTogZmFsc2UsIH0gKSwgfVxuICAjICAgaW5zZXJ0X2RhdGEucnVuIHsgZGF0YTogKCBKU09OLnN0cmluZ2lmeSB7IGxldHRlcjogJ0MnLCBhcmM6IHRydWUsIHpldGE6IGZhbHNlLCB9ICksIH1cbiAgIyAgIGVjaG8geyByb3cuLi4sIH0gZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJcIlwic2VsZWN0ICogZnJvbSAje0lETiBcIiN7cHJlZml4fV9ob2FyZF9zY2F0dGVyc1wifVwiXCJcIlxuICAjICAgZWNobyB7IHJvdy4uLiwgfSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcIlwiXCJzZWxlY3QgI3tJRE4gXCIje3ByZWZpeH1fbm9ybWFsaXplX2RhdGFcIn0oICRkYXRhICkgYXMgbmRhdGE7XCJcIlwiLCB7IGRhdGE6ICggSlNPTi5zdHJpbmdpZnkgeyBsZXR0ZXI6ICdBJywgYXJjOiB0cnVlLCB6ZXRhOiBmYWxzZSwgfSApLCB9XG4gICMgICBlY2hvIHsgcm93Li4uLCB9IGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwiXCJcInNlbGVjdCAje0lETiBcIiN7cHJlZml4fV9ub3JtYWxpemVfZGF0YVwifSggJGRhdGEgKSBhcyBuZGF0YTtcIlwiXCIsIHsgZGF0YTogKCBKU09OLnN0cmluZ2lmeSB7IHpldGE6IGZhbHNlLCBsZXR0ZXI6ICdBJywgYXJjOiB0cnVlLCB9ICksIH1cbiAgIyAgIGVjaG8geyByb3cuLi4sIH0gZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJcIlwic2VsZWN0ICN7SUROIFwiI3twcmVmaXh9X25vcm1hbGl6ZV9kYXRhXCJ9KCAkZGF0YSApIGFzIG5kYXRhO1wiXCJcIiwgeyBkYXRhOiAoIEpTT04uc3RyaW5naWZ5IHsgbGV0dGVyOiAnQicsIGFyYzogdHJ1ZSwgemV0YTogZmFsc2UsIH0gKSwgfVxuICAjICAgZWNobyB7IHJvdy4uLiwgfSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcIlwiXCJzZWxlY3QgI3tJRE4gXCIje3ByZWZpeH1fbm9ybWFsaXplX2RhdGFcIn0oICRkYXRhICkgYXMgbmRhdGE7XCJcIlwiLCB7IGRhdGE6ICggSlNPTi5zdHJpbmdpZnkgeyBsZXR0ZXI6ICdDJywgYXJjOiB0cnVlLCB6ZXRhOiBmYWxzZSwgfSApLCB9XG4gICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgO251bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX3VzaW5nX21ldGhvZHNfaG9sZGVyX3RvX2VuYWJsZV9lcnNhdHpfc3VwZXIgPSAtPlxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsYXNzIEFcbiAgICBmOiAoIG1lc3NhZ2UgKSAtPiBoZWxwICfOqWJiZGJyXzMyMCcsIHJwciBtZXNzYWdlXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2xhc3MgQiBleHRlbmRzIEFcbiAgICBfc3VwZXI6ICggbmFtZSwgUC4uLiApIC0+IHN1cGVyWyBuYW1lIF0gUC4uLlxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMjIyBOT1RFIGFraW4gdG8gdGhlIGBtZXRob2RzYCBwcm9wZXJ0eSBvZiBwbHVnaW4gb2JqZWN0cyAjIyNcbiAgbWV0aG9kcyA9IHtcbiAgICBmOiAoIG1lc3NhZ2UgKSAtPiBAX3N1cGVyICdmJywgbWVzc2FnZTsgcmV0dXJuIDhcbiAgICB9XG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyMjIE5PVEUgd2UgZm9ybSBhIHN5bnRoZXRpYyBjbGFzcyB0byBhY3QgYXMgYSAnaG9sZGVyJyBmb3Igb3VyIG1ldGhvZHM6ICMjI1xuICBjbGFzcyBNZXRob2RzX2hvbGRlciBleHRlbmRzIEJcbiAgaW5zdGFuY2UgPSBuZXcgTWV0aG9kc19ob2xkZXIoKVxuICBpbnN0YW5jZS5mID0gbWV0aG9kcy5mXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyMjIE5PVEUgdXNpbmcgdGhlIEVyc2F0eiBTdXBlcjogIyMjXG4gIHJlc3VsdCA9IGluc3RhbmNlLmYgXCJteSBtZXNzYWdlXCIgIyBwcmludHMgYG15IG1lc3NhZ2VgXG4gIGluZm8gJ86pYmJkYnJfMzIxJywgeyByZXN1bHQsIH0gIyBwcmludHMgYHsgcmVzdWx0OiA4LCB9YFxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIDtudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGRvX2NvdmVyYWdlID0gdHJ1ZVxuICBkb19jb3ZlcmFnZSA9IGZhbHNlXG4gIGlmIGRvX2NvdmVyYWdlXG4gICAgeyBDb3ZlcmFnZV9hbmFseXplciwgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvY292ZXJhZ2UtYW5hbHl6ZXInXG4gICAgY2EgPSBuZXcgQ292ZXJhZ2VfYW5hbHl6ZXIoKVxuICAgIGNhLndyYXBfY2xhc3MgRGJyaWNfc3RkXG4gIHsgd3JhcF9tZXRob2RzX29mX3Byb3RvdHlwZXMsIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL3Byb3RvdHlwZS10b29scydcbiAgIyB3cmFwX21ldGhvZHNfb2ZfcHJvdG90eXBlcyBEYnJpY19zdGQsICh7IGZxbmFtZSwgY2FsbG1lLCBQLCB9KSAtPlxuICAjICAgZGVidWcgJ86pYmJkYnJfMzIyJywgZnFuYW1lICMsIFBcbiAgIyAgIHJldHVybiBjYWxsbWUoKVxuICAjIGRiID0gbmV3IERicmljX3N0ZCAnOm1lbW9yeTonLCB7IHJlYnVpbGQ6IHRydWUsIH1cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2hvYXJkX3BsdWdpbl9tb2RlbDogdGVzdHMuZGJyaWNfaG9hcmRfcGx1Z2luX21vZGVsLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkYnJpY19keW5hbWljX2J1aWxkX3Byb3BlcnRpZXM6IHRlc3RzLmRicmljX2R5bmFtaWNfYnVpbGRfcHJvcGVydGllcywgfVxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIGRvX2NvdmVyYWdlXG4gICAgd2FybiAnzqliYmRicl8zMjMnLCBcIm5vdCBjb3ZlcmVkOlwiLCByZXZlcnNlIG5hbWUgZm9yIG5hbWUgaW4gY2EudW51c2VkX25hbWVzIGlmIGNhLnVudXNlZF9uYW1lcy5sZW5ndGggPiAwXG4gICAgIyBoZWxwICfOqWJiZGJyXzMyNCcsIGNhLnVzZWRfbmFtZXNcbiAgICAjIHVyZ2UgJ86pYmJkYnJfMzI1JywgY291bnQsIG5hbWVzIGZvciBjb3VudCwgbmFtZXMgb2YgY2EubmFtZXNfYnlfY291bnRzXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgO251bGwiXX0=
