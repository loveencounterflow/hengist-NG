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
    }
  };

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsZ0RBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxTQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLFlBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLGlCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBekJBOzs7RUEyQkEsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsNENBQVIsQ0FBNUI7O0VBQ0EsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsbUNBQVI7O0VBQzVCLEVBQUEsR0FBNEIsT0FBQSxDQUFRLFNBQVI7O0VBQzVCLElBQUEsR0FBNEIsT0FBQSxDQUFRLFdBQVIsRUFoQzVCOzs7RUFrQ0EsQ0FBQSxDQUFFLEtBQUYsRUFDRSxTQURGLEVBRUUsR0FGRixFQUdFLEdBSEYsRUFJRSxHQUpGLEVBS0UsR0FMRixFQU1FLFNBTkYsRUFPRSxPQVBGLEVBUUUsU0FSRixFQVNFLElBVEYsRUFVRSxLQVZGLEVBV0UsWUFYRixDQUFBLEdBVzRCLE9BQUEsQ0FBUSw2Q0FBUixDQVg1QixFQWxDQTs7O0VBZ0RBLE9BQUEsR0FBVTs7RUFDVixNQUFBLEdBQVMsUUFBQSxDQUFBLEdBQUUsQ0FBRixDQUFBO0lBQ1AsT0FBQSxHQUFVLENBQUUsT0FBQSxHQUFVLENBQVosQ0FBQSxHQUFrQjtBQUM1QixXQUFPLENBQUssT0FBQSxLQUFXLENBQWQsR0FBcUIsSUFBckIsR0FBK0IsSUFBakMsQ0FBQSxDQUF3QyxHQUFBLENBQXhDO0VBRkEsRUFqRFQ7OztFQXNEQSxNQUFBLEdBQVMsUUFBQSxDQUFFLElBQUYsQ0FBQTtBQUNULFFBQUE7QUFBRTtNQUNFLEVBQUUsQ0FBQyxVQUFILENBQWMsSUFBZDtNQUNBLElBQUEsQ0FBSyxZQUFMLEVBQW1CLENBQUEsUUFBQSxDQUFBLENBQVcsR0FBQSxDQUFJLElBQUosQ0FBWCxDQUFBLENBQW5CLEVBRkY7S0FHQSxjQUFBO01BQU07TUFDSixJQUFtQixLQUFLLENBQUMsSUFBTixLQUFjLFFBQWpDO1FBQUEsTUFBTSxNQUFOO09BREY7S0FIRjs7QUFNRSxXQUFPO0VBUEEsRUF0RFQ7OztFQWlFQSxJQUFDLENBQUEsS0FBRCxHQUFTLEtBQUEsR0FHUCxDQUFBOztJQUFBLFVBQUEsRUFBWSxRQUFBLENBQUEsQ0FBQTtBQUNkLFVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUE7O01BQ0ksSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFNBQVMsQ0FBQyxPQUFWLENBQWtCLFlBQWxCO01BQUgsQ0FBZixDQUFSLEVBQWlFLFVBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxHQUFiO01BQUgsQ0FBZixDQUFSLEVBQWlFLEdBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxLQUFiO01BQUgsQ0FBZixDQUFSLEVBQWlFLEdBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxLQUFiO01BQUgsQ0FBZixDQUFSLEVBQWlFLEtBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxPQUFiO01BQUgsQ0FBZixDQUFSLEVBQWlFLEtBQWpFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLFlBQUEsQ0FBYSxTQUFiO01BQUgs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QUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFB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TCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWYsQ0FBSixFQUEyQztVQUFFLENBQUEsRUFBRyxDQUFMO1VBQVEsTUFBQSxFQUFRO1FBQWhCLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQs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Q0FBUSxJQUFSLENBQW5DO1VBQUEsQ0FBQTtTQURGO09BbkJGOzs7O2FBd0JHO0lBekJxQyxDQUFBLElBQXhDOztBQS95Q0EiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtZGJyaWMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG57IERicmljLFxuICBEYnJpY19zdGQsXG4gIElETixcbiAgTElULFxuICBTUUwsXG4gIFZFQyxcbiAgZnJvbV9ib29sLFxuICBhc19ib29sLFxuICBpbnRlcm5hbHMsXG4gIFRydWUsXG4gIEZhbHNlLFxuICB1bnF1b3RlX25hbWUsICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvZGJyaWMnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuX3RvZ2dsZSA9IDBcbnRvZ2dsZSA9ICggUC4uLiApIC0+XG4gIF90b2dnbGUgPSAoIF90b2dnbGUgKyAxICkgJSAyXG4gIHJldHVybiAoIGlmIF90b2dnbGUgaXMgMCB0aGVuIGJsdWUgZWxzZSBnb2xkICkgUC4uLlxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnJlbW92ZSA9ICggcGF0aCApIC0+XG4gIHRyeVxuICAgIEZTLnVubGlua1N5bmMgcGF0aFxuICAgIGhlbHAgJ86pYmJkYnJfX18xJywgXCJyZW1vdmVkICN7cnByIHBhdGh9XCJcbiAgY2F0Y2ggZXJyb3JcbiAgICB0aHJvdyBlcnJvciB1bmxlc3MgZXJyb3IuY29kZSBpcyAnRU5PRU5UJ1xuICAgICMgdXJnZSAnzqliYmRicl9fXzInLCBcIm5vIHN1Y2ggRlMgb2JqZWN0OiAje3JwciBwYXRofVwiXG4gIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19lc3FsOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX18zID0gLT4gaW50ZXJuYWxzLnR5cGVfb2YgdW5xdW90ZV9uYW1lICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fNCA9IC0+IHVucXVvdGVfbmFtZSAneCcgICAgICAgICAgICAgICAgICAgICksICd4J1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fNSA9IC0+IHVucXVvdGVfbmFtZSAnXCJ4XCInICAgICAgICAgICAgICAgICAgKSwgJ3gnXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX182ID0gLT4gdW5xdW90ZV9uYW1lICdhYmMnICAgICAgICAgICAgICAgICAgKSwgJ2FiYydcbiAgICBAZXEgICAgICggzqliYmRicl9fXzcgPSAtPiB1bnF1b3RlX25hbWUgJ1wiYWJjXCInICAgICAgICAgICAgICAgICksICdhYmMnXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX184ID0gLT4gdW5xdW90ZV9uYW1lICdcImFiXCJcImNcIicgICAgICAgICAgICAgICksICdhYlwiYydcbiAgICBAdGhyb3dzICggzqliYmRicl9fXzkgPSAtPiB1bnF1b3RlX25hbWUgJycgICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBub24tZW1wdHkgdGV4dCwgZ290IGFuIGVtcHR5IHRleHQvXG4gICAgQHRocm93cyAoIM6pYmJkYnJfXzEwID0gLT4gdW5xdW90ZV9uYW1lICdcIicgICAgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHF1b3RlZCBub24tZW1wdHkgdGV4dCwgZ290IGEgcXVvdGUvXG4gICAgQGVxICAgICAoIM6pYmJkYnJfXzExID0gLT4gdW5xdW90ZV9uYW1lICdcIlwiJyAgICAgICAgICAgICAgICAgICApLCAnJyAjIyMgTk9URSBTUUxpdGUgZG9lcyBhY2NlcHQgYSBxdW90ZWQgZW1wdHkgc3RyaW5nIGFzIG5hbWUgIyMjXG4gICAgQHRocm93cyAoIM6pYmJkYnJfXzEyID0gLT4gdW5xdW90ZV9uYW1lIGZhbHNlICAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dCwgZ290IGEgYm9vbGVhbi9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xMyA9IC0+IElETiAnYWJjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdcImFiY1wiJ1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xNCA9IC0+IElETiAnQVwiYmNcIicgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ1wiQVwiXCJiY1wiXCJcIidcbiAgICBAZXEgICAgICggzqliYmRicl9fMTUgPSAtPiBMSVQgJ2FiYycgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBcIidhYmMnXCJcbiAgICBAZXEgICAgICggzqliYmRicl9fMTYgPSAtPiBMSVQgXCJBJ2JjJ1wiICAgICAgICAgICAgICAgICAgICAgICAgICksIFwiJ0EnJ2JjJycnXCJcbiAgICBAdGhyb3dzICggzqliYmRicl9fMTcgPSAtPiBWRUMgJ2FiYycgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBsaXN0L1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xOCA9IC0+IFZFQyBbICdhYmMnIF0gICAgICAgICAgICAgICAgICAgICAgICksIFwiXCJcIiggJ2FiYycgKVwiXCJcIlxuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xOSA9IC0+IFZFQyBbICdhYmMnLCAxLCB0cnVlLCBmYWxzZSwgXSAgICAgICksIFwiXCJcIiggJ2FiYycsIDEsIDEsIDAgKVwiXCJcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX3N0ZDogLT5cbiAgICB7IHRlbXAsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3RlbXAoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdGVtcC53aXRoX2RpcmVjdG9yeSB7IGtlZXA6IGZhbHNlLCB9LCAoeyBwYXRoOiBmb2xkZXJfcGF0aCwgfSkgPT5cbiAgICAgICMgZm9sZGVyX3BhdGggPSAnL3RtcC9icmljYnJhYy10ZXN0JyAjICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxuICAgICAgZGJfcGF0aCA9IFBBVEguam9pbiBmb2xkZXJfcGF0aCwgJ2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICByZW1vdmUgZGJfcGF0aFxuICAgICAgIyBoZWxwICfOqWJiZGJyX18yMCcsIHsgZGJfcGF0aCwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IG5ldyBEYnJpYyBkYl9wYXRoLCB7IHJlYnVpbGQ6IHRydWUsIH1cbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yMSA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjIgPSAtPiBkYi5fZ2V0X2RiX29iamVjdHMoKSAgICAgICAgKSwge31cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRlbXAud2l0aF9kaXJlY3RvcnkgeyBrZWVwOiBmYWxzZSwgfSwgKHsgcGF0aDogZm9sZGVyX3BhdGgsIH0pID0+XG4gICAgICAjIGZvbGRlcl9wYXRoID0gJy90bXAvYnJpY2JyYWMtdGVzdCcgIyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcbiAgICAgIGRiX3BhdGggPSBQQVRILmpvaW4gZm9sZGVyX3BhdGgsICdicmljYWJyYWMuc3FsaXRlJ1xuICAgICAgcmVtb3ZlIGRiX3BhdGhcbiAgICAgICMgaGVscCAnzqliYmRicl9fMjMnLCB7IGRiX3BhdGgsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBuZXcgRGJyaWNfc3RkIGRiX3BhdGgsIHsgcmVidWlsZDogdHJ1ZSwgfVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI0ID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpYyAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yNSA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWNfc3RkICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIG9iamVjdHMgPSBuZXcgU2V0ICggXCIje28udHlwZX06I3tvLm5hbWV9XCIgZm9yIF8sIG8gb2YgZGIuX2dldF9kYl9vYmplY3RzKCkgKVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI2ID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3RhYmxlcycgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yNyA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF92aWV3cycgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjggPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfcmVsYXRpb25zJyAgKSwgdHJ1ZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IG5ldyBEYnJpY19zdGQgZGJfcGF0aCwgeyByZWJ1aWxkOiBmYWxzZSwgfVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI5ID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpYyAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zMCA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWNfc3RkICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIG9iamVjdHMgPSBuZXcgU2V0ICggXCIje28udHlwZX06I3tvLm5hbWV9XCIgZm9yIF8sIG8gb2YgZGIuX2dldF9kYl9vYmplY3RzKCkgKVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzMxID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3RhYmxlcycgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zMiA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF92aWV3cycgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzMgPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfcmVsYXRpb25zJyAgKSwgdHJ1ZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX3N0ZF9nZW5lcmF0ZV9zZXJpZXM6IC0+XG4gICAgeyB0ZW1wLCAgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90ZW1wKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgc3FsaXRlPiBzZWxlY3QgKiBmcm9tIGdlbmVyYXRlX3NlcmllcyggMSwgMTAsIDAgKTtcbiAgICAjIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkFxuICAgICMg4pSCIHZhbHVlIOKUglxuICAgICMg4pSc4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSkXG4gICAgIyDilIIgMSAgICAg4pSCXG4gICAgIyDilIIgMiAgICAg4pSCXG4gICAgIyDilIIgMyAgICAg4pSCXG4gICAgIyDilIIgNCAgICAg4pSCXG4gICAgIyDilIIgNSAgICAg4pSCXG4gICAgIyDilIIgNiAgICAg4pSCXG4gICAgIyDilIIgNyAgICAg4pSCXG4gICAgIyDilIIgOCAgICAg4pSCXG4gICAgIyDilIIgOSAgICAg4pSCXG4gICAgIyDilIIgMTAgICAg4pSCXG4gICAgIyDilJTilIDilIDilIDilIDilIDilIDilIDilJhcbiAgICAjIHNxbGl0ZT4gc2VsZWN0ICogZnJvbSBnZW5lcmF0ZV9zZXJpZXMoIDEsIDEwLCAwICk7XG4gICAgIyDilIzilIDilIDilIDilIDilIDilIDilIDilJBcbiAgICAjIOKUgiB2YWx1ZSDilIJcbiAgICAjIOKUnOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUpFxuICAgICMg4pSCIDEgICAgIOKUglxuICAgICMg4pSCIDIgICAgIOKUglxuICAgICMg4pSCIDMgICAgIOKUglxuICAgICMg4pSCIDQgICAgIOKUglxuICAgICMg4pSCIDUgICAgIOKUglxuICAgICMg4pSCIDYgICAgIOKUglxuICAgICMg4pSCIDcgICAgIOKUglxuICAgICMg4pSCIDggICAgIOKUglxuICAgICMg4pSCIDkgICAgIOKUglxuICAgICMg4pSCIDEwICAgIOKUglxuICAgICMg4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYXG4gICAgIyBzcWxpdGU+IHNlbGVjdCAqIGZyb20gZ2VuZXJhdGVfc2VyaWVzKCAxLCAxLCAwICk7XG4gICAgIyDilIzilIDilIDilIDilIDilIDilIDilIDilJBcbiAgICAjIOKUgiB2YWx1ZSDilIJcbiAgICAjIOKUnOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUpFxuICAgICMg4pSCIDEgICAgIOKUglxuICAgICMg4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYXG4gICAgIyBzcWxpdGU+IHNlbGVjdCAqIGZyb20gZ2VuZXJhdGVfc2VyaWVzKCAxLCAwLCAwICk7XG4gICAgIyBzcWxpdGU+XG5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBEYiBleHRlbmRzIERicmljX3N0ZFxuICAgICAgZGIgPSBuZXcgRGIgJzptZW1vcnk6JywgeyByZWJ1aWxkOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyX18zNCA9IC0+IFsgKCByb3cudmFsdWUgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHN0ZF9nZW5lcmF0ZV9zZXJpZXMoIDEsIDEwLCAyICk7XCIpLi4uLCAgXSApLCBbIDEsIDMsIDUsIDcsIDkgXVxuICAgICAgQGVxICggzqliYmRicl9fMzUgPSAtPiBbICggcm93LnZhbHVlIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBzdGRfZ2VuZXJhdGVfc2VyaWVzKCAxLCAxMCwgMCApO1wiKS4uLiwgIF0gKSwgWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCBdXG4gICAgICBAZXEgKCDOqWJiZGJyX18zNiA9IC0+IFsgKCByb3cudmFsdWUgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHN0ZF9nZW5lcmF0ZV9zZXJpZXMoIDEsIDEsIDAgKTtcIikuLi4sICAgXSApLCBbIDEgXVxuICAgICAgQGVxICggzqliYmRicl9fMzcgPSAtPiBbICggcm93LnZhbHVlIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBzdGRfZ2VuZXJhdGVfc2VyaWVzKCAxLCAwLCAwICk7XCIpLi4uLCAgIF0gKSwgW11cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdGVtZW50X2luaGVyaXRhbmNlOiAtPlxuICAgICMgeyB0ZW1wLCAgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90ZW1wKClcbiAgICAjIHsgU3RhdGVtZW50U3luYywgICAgICAgICAgICB9ID0gcmVxdWlyZSAnbm9kZTpzcWxpdGUnXG4gICAgQnNxbDMgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbm9kZV9tb2R1bGVzL2JldHRlci1zcWxpdGUzJ1xuICAgIHN0YXRlbWVudF9jbGFzcyAgICAgICAgICAgICAgID0gKCAoIG5ldyBCc3FsMyAnOm1lbW9yeTonICkucHJlcGFyZSBTUUxcInNlbGVjdCAxIHdoZXJlIGZhbHNlO1wiICkuY29uc3RydWN0b3JcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGdldF9mdW5jdGlvbl9uYW1lcyA9ICggZGJhICkgLT4gbmV3IFNldCAoIG5hbWUgZm9yIHsgbmFtZSwgfSBmcm9tIFxcXG4gICAgICBkYmEud2FsayBTUUxcInNlbGVjdCBuYW1lIGZyb20gcHJhZ21hX2Z1bmN0aW9uX2xpc3QoKSBvcmRlciBieSBuYW1lO1wiIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGdldF90YWJsZV9uYW1lcyA9ICggZGJhICkgLT4gbmV3IFNldCAoIG5hbWUgZm9yIHsgbmFtZSwgfSBmcm9tIFxcXG4gICAgICBkYmEud2FsayBTUUxcIlwiXCJzZWxlY3QgbmFtZSBmcm9tIHNxbGl0ZV9zY2hlbWFcbiAgICAgIHdoZXJlIHR5cGUgaXMgJ3RhYmxlJyBvcmRlciBieSBuYW1lO1wiXCJcIiApXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBnZXRfdmlld19uYW1lcyA9ICggZGJhICkgLT4gbmV3IFNldCAoIG5hbWUgZm9yIHsgbmFtZSwgfSBmcm9tIFxcXG4gICAgICBkYmEud2FsayBTUUxcIlwiXCJzZWxlY3QgbmFtZSBmcm9tIHNxbGl0ZV9zY2hlbWFcbiAgICAgIHdoZXJlIHR5cGUgaXMgJ3ZpZXcnIG9yZGVyIGJ5IG5hbWU7XCJcIlwiIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGdldF90cmlnZ2VyX25hbWVzID0gKCBkYmEgKSAtPiBuZXcgU2V0ICggbmFtZSBmb3IgeyBuYW1lLCB9IGZyb20gXFxcbiAgICAgIGRiYS53YWxrIFNRTFwiXCJcInNlbGVjdCBuYW1lIGZyb20gc3FsaXRlX3NjaGVtYVxuICAgICAgd2hlcmUgdHlwZSBpcyAndHJpZ2dlcicgb3JkZXIgYnkgbmFtZTtcIlwiXCIgKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgQSBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQGZ1bmN0aW9uczpcbiAgICAgICAgZm5fYTpcbiAgICAgICAgICB2YWx1ZTogLT4gcmV0dXJuIDFcbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBzZWxlY3RfYTogU1FMXCJzZWxlY3QgZm5fYSgpIGFzIG9uZSwgMiBhcyB0d287XCJcbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcImNyZWF0ZSB0YWJsZSB0YWJsZV9hICggZCB0ZXh0ICk7XCJcbiAgICAgICAgU1FMXCJjcmVhdGUgdmlldyB2aWV3X2EgYXMgc2VsZWN0ICogZnJvbSB0YWJsZV9hO1wiXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEIgZXh0ZW5kcyBBXG4gICAgICBAZnVuY3Rpb25zOlxuICAgICAgICBmbl9iOlxuICAgICAgICAgIHZhbHVlOiAtPiByZXR1cm4gMVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIHNlbGVjdF9iOiBTUUxcInNlbGVjdCBmbl9iKCkgYXMgb25lLCAyIGFzIHR3bztcIlxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiY3JlYXRlIHRhYmxlIHRhYmxlX2IgKCBkIHRleHQgKTtcIlxuICAgICAgICBTUUxcImNyZWF0ZSB2aWV3IHZpZXdfYiBhcyBzZWxlY3QgKiBmcm9tIHRhYmxlX2I7XCJcbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgQ19kdXBsaWNhdGVfZnVuY3Rpb24gZXh0ZW5kcyBCXG4gICAgICBAb3ZlcndyaXRlOiBmYWxzZVxuICAgICAgQGZ1bmN0aW9uczpcbiAgICAgICAgZm5fYjpcbiAgICAgICAgICB2YWx1ZTogLT4gcmV0dXJuIDFcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIENfZHVwbGljYXRlX3N0YXRlbWVudCBleHRlbmRzIEJcbiAgICAgIEBvdmVyd3JpdGU6IGZhbHNlXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgc2VsZWN0X2I6IFNRTFwic2VsZWN0IGZuX2IoKSBhcyBvbmUsIDIgYXMgdHdvO1wiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBDX2R1cGxpY2F0ZV90YWJsZSBleHRlbmRzIEJcbiAgICAgIEBvdmVyd3JpdGU6IGZhbHNlXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJjcmVhdGUgdGFibGUgdGFibGVfYiAoIGQgdGV4dCApO1wiXG4gICAgICAgIFNRTFwiY3JlYXRlIHZpZXcgdmlld19iIGFzIHNlbGVjdCAqIGZyb20gdGFibGVfYjtcIlxuICAgICAgICBdXG4gICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGIgPSBuZXcgQigpXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fMzgnLCBiXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fMzknLCAnZnVuY3Rpb25zOiAnLCBnZXRfZnVuY3Rpb25fbmFtZXMgYlxuICAgICMgZGVidWcgJ86pYmJkYnJfXzQwJywgJ2Z1bmN0aW9uczogJywgKCBnZXRfZnVuY3Rpb25fbmFtZXMgYiApLmhhcyAnZm5fYSdcbiAgICAjIGRlYnVnICfOqWJiZGJyX180MScsICdmdW5jdGlvbnM6ICcsICggZ2V0X2Z1bmN0aW9uX25hbWVzIGIgKS5oYXMgJ2ZuX2InXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNDInLCAnZnVuY3Rpb25zOiAnLCAoIGdldF9mdW5jdGlvbl9uYW1lcyBiICkuaGFzICdyZWdleHAnXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNDMnLCAndGFibGVzOiAgICAnLCBnZXRfdGFibGVfbmFtZXMgYlxuICAgICMgZGVidWcgJ86pYmJkYnJfXzQ0JywgJ3ZpZXdzOiAgICAgJywgZ2V0X3ZpZXdfbmFtZXMgYlxuICAgICMgZGVidWcgJ86pYmJkYnJfXzQ1JywgJ3RyaWdnZXJzOiAgJywgZ2V0X3RyaWdnZXJfbmFtZXMgYlxuICAgICMgZGVidWcgJ86pYmJkYnJfXzQ2JywgJ3N0YXRlbWVudHM6JywgKCBrIGZvciBrIG9mIGIuc3RhdGVtZW50cyApXG4gICAgIyByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGRiYSA9IG5ldyBEYnJpY19zdGQgJzptZW1vcnk6JywgeyByZWJ1aWxkOiB0cnVlLCB9XG4gICAgICAjIGRiYSA9IG5ldyBBKClcbiAgICAgICMgZGJhID0gbmV3IEIoKVxuICAgICAgZGJhLmRiLmZ1bmN0aW9uICd6enpfdGVzdCcsIHsgZGV0ZXJtaW5pc3RpYzogdHJ1ZSwgdmFyYXJnczogZmFsc2UsIGRpcmVjdE9ubHk6IGZhbHNlLCB9LCAtPiBcIlpaWl9URVNUXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZnVuY3Rpb25fbmFtZXMgID0gZ2V0X2Z1bmN0aW9uX25hbWVzIGRiYVxuICAgICAgdGFibGVfbmFtZXMgICAgID0gZ2V0X3RhYmxlX25hbWVzIGRiYVxuICAgICAgdmlld19uYW1lcyAgICAgID0gZ2V0X3ZpZXdfbmFtZXMgZGJhXG4gICAgICB0cmlnZ2VyX25hbWVzICAgPSBnZXRfdHJpZ2dlcl9uYW1lcyBkYmFcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fNDcgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3NjaGVtYSAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzQ4ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF90YWJsZXMgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX180OSA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdmlld3MgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNTAgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3JlbGF0aW9ucyAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzUxID0gLT4gZGJhLnN0YXRlbWVudHMuc2VsZWN0X2EgICAgICAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmRicl9fNTIgPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYiAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzUzID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICd6enpfdGVzdCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX181NCA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAncmVnZXhwJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNTUgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX181NiA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnZm5fYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fNTcgPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX181OCA9IC0+IHRhYmxlX25hbWVzLmhhcyAndGFibGVfYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzU5ID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF90YWJsZXMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX182MCA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdmlld3MnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNjEgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3JlbGF0aW9ucycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzYyID0gLT4gdmlld19uYW1lcy5oYXMgJ3ZpZXdfYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmRicl9fNjMgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGRiYSA9IG5ldyBBIHsgcmVidWlsZDogdHJ1ZSwgfVxuICAgICAgZGJhLmRiLmZ1bmN0aW9uICd6enpfdGVzdCcsIHsgZGV0ZXJtaW5pc3RpYzogdHJ1ZSwgdmFyYXJnczogZmFsc2UsIGRpcmVjdE9ubHk6IGZhbHNlLCB9LCAtPiBcIlpaWl9URVNUXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZnVuY3Rpb25fbmFtZXMgID0gZ2V0X2Z1bmN0aW9uX25hbWVzIGRiYVxuICAgICAgdGFibGVfbmFtZXMgICAgID0gZ2V0X3RhYmxlX25hbWVzIGRiYVxuICAgICAgdmlld19uYW1lcyAgICAgID0gZ2V0X3ZpZXdfbmFtZXMgZGJhXG4gICAgICB0cmlnZ2VyX25hbWVzICAgPSBnZXRfdHJpZ2dlcl9uYW1lcyBkYmFcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fNjQgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3NjaGVtYSAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzY1ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF90YWJsZXMgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX182NiA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdmlld3MgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNjcgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3JlbGF0aW9ucyAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzY4ID0gLT4gZGJhLnN0YXRlbWVudHMuc2VsZWN0X2EgICAgICAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX182OSA9IC0+IGRiYS5zdGF0ZW1lbnRzLnNlbGVjdF9iICAgICAgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fNzAgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ3p6el90ZXN0JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzcxID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdyZWdleHAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX183MiA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnZm5fYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNzMgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzc0ID0gLT4gdGFibGVfbmFtZXMuaGFzICd0YWJsZV9hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX183NSA9IC0+IHRhYmxlX25hbWVzLmhhcyAndGFibGVfYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzc2ID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF90YWJsZXMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX183NyA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdmlld3MnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNzggPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3JlbGF0aW9ucycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzc5ID0gLT4gdmlld19uYW1lcy5oYXMgJ3ZpZXdfYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184MCA9IC0+IHZpZXdfbmFtZXMuaGFzICd2aWV3X2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZGJhID0gbmV3IEIgeyByZWJ1aWxkOiB0cnVlLCB9XG4gICAgICBkYmEuZGIuZnVuY3Rpb24gJ3p6el90ZXN0JywgeyBkZXRlcm1pbmlzdGljOiB0cnVlLCB2YXJhcmdzOiBmYWxzZSwgZGlyZWN0T25seTogZmFsc2UsIH0sIC0+IFwiWlpaX1RFU1RcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBmdW5jdGlvbl9uYW1lcyAgPSBnZXRfZnVuY3Rpb25fbmFtZXMgZGJhXG4gICAgICB0YWJsZV9uYW1lcyAgICAgPSBnZXRfdGFibGVfbmFtZXMgZGJhXG4gICAgICB2aWV3X25hbWVzICAgICAgPSBnZXRfdmlld19uYW1lcyBkYmFcbiAgICAgIHRyaWdnZXJfbmFtZXMgICA9IGdldF90cmlnZ2VyX25hbWVzIGRiYVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX184MSA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfc2NoZW1hICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODIgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3RhYmxlcyAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzgzID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF92aWV3cyAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184NCA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfcmVsYXRpb25zICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODUgPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYSAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg2ID0gLT4gZGJhLnN0YXRlbWVudHMuc2VsZWN0X2IgICAgICAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg3ID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICd6enpfdGVzdCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184OCA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAncmVnZXhwJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODkgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzkwID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdmbl9iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzkxID0gLT4gdGFibGVfbmFtZXMuaGFzICd0YWJsZV9hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX185MiA9IC0+IHRhYmxlX25hbWVzLmhhcyAndGFibGVfYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTMgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3RhYmxlcycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzk0ID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF92aWV3cycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX185NSA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfcmVsYXRpb25zJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTYgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzk3ID0gLT4gdmlld19uYW1lcy5oYXMgJ3ZpZXdfYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyX185OCA9IC0+IG5ldyBDX2R1cGxpY2F0ZV9mdW5jdGlvbiAgeyByZWJ1aWxkOiB0cnVlLCB9ICksIC9hIFVERiBvciBidWlsdC1pbiBmdW5jdGlvbiBuYW1lZCAnZm5fYicgaGFzIGFscmVhZHkgYmVlbiBkZWNsYXJlZC9cbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyX185OSA9IC0+IG5ldyBDX2R1cGxpY2F0ZV9zdGF0ZW1lbnQgeyByZWJ1aWxkOiB0cnVlLCB9ICksIC9zdGF0ZW1lbnQgJ3NlbGVjdF9iJyBpcyBhbHJlYWR5IGRlY2xhcmVkL1xuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMTAwID0gLT4gbmV3IENfZHVwbGljYXRlX3RhYmxlICAgICB7IHJlYnVpbGQ6IHRydWUsIH0gKSwgL3RhYmxlIHRhYmxlX2IgYWxyZWFkeSBleGlzdHMvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2FtcGxlX2RiOiAtPlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3RvcmUgZXh0ZW5kcyBEYnJpY1xuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBzdG9yZV9mYWNldHMgKFxuICAgICAgICAgIGZhY2V0X2tleSAgICAgICAgICAgICB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICBmYWNldF92YWx1ZSAgICAgICAgICAganNvbiApO1wiXCJcIlxuICAgICAgICBdXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgc3RvcmVfaW5zZXJ0X2ZhY2V0OiBTUUxcIlwiXCJcbiAgICAgICAgICBpbnNlcnQgaW50byBzdG9yZV9mYWNldHMgKCBmYWNldF9rZXksIGZhY2V0X3ZhbHVlICkgdmFsdWVzICggJGZhY2V0X2tleSwgJGZhY2V0X3ZhbHVlIClcbiAgICAgICAgICAgIG9uIGNvbmZsaWN0ICggZmFjZXRfa2V5ICkgZG8gdXBkYXRlIHNldCBmYWNldF92YWx1ZSA9IGV4Y2x1ZGVkLmZhY2V0X3ZhbHVlO1wiXCJcIlxuICAgICAgICBzdG9yZV9nZXRfZmFjZXRzOiBTUUxcIlwiXCJcbiAgICAgICAgICBzZWxlY3QgKiBmcm9tIHN0b3JlX2ZhY2V0cyBvcmRlciBieSBmYWNldF9rZXk7XCJcIlwiXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBzdG9yZSAgICAgPSBEYnJpY19zdG9yZS5yZWJ1aWxkIGRiX3BhdGhcbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ29uZScsICAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMSAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0d28nLCAgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDIgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAzICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgJ2lpaScgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0cnVlJywgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IHRydWUgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAnZmFsc2UnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSBmYWxzZSAgICksIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgY2FzdF9yb3cgPSAoIHJvdyApIC0+XG4gICAgICAgIHJldHVybiByb3cgdW5sZXNzIHJvdz9cbiAgICAgICAgcmV0dXJuIHsgcm93Li4uLCBmYWNldF92YWx1ZTogKCBKU09OLnBhcnNlIHJvdy5mYWNldF92YWx1ZSApLCBfdjogcm93LmZhY2V0X3ZhbHVlLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJvd3MgPSBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2dldF9mYWNldHMuaXRlcmF0ZSgpXG4gICAgICBAZXEgKCDOqWJiZGJyXzEwMSA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGZhY2V0X2tleTogJ2ZhbHNlJywgZmFjZXRfdmFsdWU6IGZhbHNlLCBfdjogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEwMiA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGZhY2V0X2tleTogJ29uZScsIGZhY2V0X3ZhbHVlOiAxLCBfdjogMSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEwMyA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICdpaWknLCBfdjogJ1wiaWlpXCInIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTA0ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgICksIHsgZmFjZXRfa2V5OiAndHJ1ZScsIGZhY2V0X3ZhbHVlOiB0cnVlLCBfdjogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTA1ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgICksIHsgZmFjZXRfa2V5OiAndHdvJywgZmFjZXRfdmFsdWU6IDIsIF92OiAyIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTA2ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICAgICAgICAgICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzYW1wbGVfZGJfd2l0aF9ic3FsOiAtPlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3RvcmUgZXh0ZW5kcyBEYnJpY1xuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBzdG9yZV9mYWNldHMgKFxuICAgICAgICAgIGZhY2V0X2tleSAgICAgICAgICAgICB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICBmYWNldF92YWx1ZSAgICAgICAgICAganNvbiApO1wiXCJcIlxuICAgICAgICBdXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgIyBzdG9yZV9jcmVhdGVfdGFibGVzOiBTUUxcIlwiXCJcbiAgICAgICAgIyAgIFwiXCJcIlxuICAgICAgICBzdG9yZV9pbnNlcnRfZmFjZXQ6IFNRTFwiXCJcIlxuICAgICAgICAgIGluc2VydCBpbnRvIHN0b3JlX2ZhY2V0cyAoIGZhY2V0X2tleSwgZmFjZXRfdmFsdWUgKSB2YWx1ZXMgKCAkZmFjZXRfa2V5LCAkZmFjZXRfdmFsdWUgKVxuICAgICAgICAgICAgb24gY29uZmxpY3QgKCBmYWNldF9rZXkgKSBkbyB1cGRhdGUgc2V0IGZhY2V0X3ZhbHVlID0gZXhjbHVkZWQuZmFjZXRfdmFsdWU7XCJcIlwiXG4gICAgICAgIHN0b3JlX2dldF9mYWNldHM6IFNRTFwiXCJcIlxuICAgICAgICAgIHNlbGVjdCAqIGZyb20gc3RvcmVfZmFjZXRzIG9yZGVyIGJ5IGZhY2V0X2tleTtcIlwiXCJcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBzdG9yZSAgICAgPSBEYnJpY19zdG9yZS5yZWJ1aWxkICc6bWVtb3J5OidcbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ29uZScsICAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMSAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0d28nLCAgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDIgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAzICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgJ2lpaScgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0cnVlJywgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IHRydWUgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAnZmFsc2UnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSBmYWxzZSAgICksIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgY2FzdF9yb3cgPSAoIHJvdyApIC0+XG4gICAgICAgIHJldHVybiByb3cgdW5sZXNzIHJvdz9cbiAgICAgICAgcmV0dXJuIHsgcm93Li4uLCBmYWNldF92YWx1ZTogKCBKU09OLnBhcnNlIHJvdy5mYWNldF92YWx1ZSApLCBfdjogcm93LmZhY2V0X3ZhbHVlLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJvd3MgPSBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2dldF9mYWNldHMuaXRlcmF0ZSgpXG4gICAgICBAZXEgKCDOqWJiZGJyXzEwNyA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAnZmFsc2UnLCBmYWNldF92YWx1ZTogZmFsc2UsIF92OiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTA4ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICdvbmUnLCBmYWNldF92YWx1ZTogMSwgX3Y6IDEgfVxuICAgICAgQGVxICggzqliYmRicl8xMDkgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICdpaWknLCBfdjogJ1wiaWlpXCInIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTEwID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICd0cnVlJywgZmFjZXRfdmFsdWU6IHRydWUsIF92OiAndHJ1ZScgfVxuICAgICAgQGVxICggzqliYmRicl8xMTEgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ3R3bycsIGZhY2V0X3ZhbHVlOiAyLCBfdjogMiB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzExMiA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVkZl9mdW5jdGlvbnNfd2l0aF9uc3FsOiAtPlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3F1YXJlcyBleHRlbmRzIERicmljXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgbnVtYmVycyAoXG4gICAgICAgICAgICBuIG51bWJlciB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHZpZXcgc3F1YXJlcyBhcyBzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUoIG4gKSBhcyBzcXVhcmVcbiAgICAgICAgICBmcm9tIG51bWJlcnNcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfbnVtYmVyOiBTUUxcIlwiXCJpbnNlcnQgaW50byBudW1iZXJzICggbiApIHZhbHVlcyAoICRuIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIG4gKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9zcXVhcmVzOiBTUUxcIlwiXCJzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICBmcm9tIHNxdWFyZXNcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAZnVuY3Rpb25zOlxuICAgICAgICBzcXVhcmU6XG4gICAgICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgICAgICB2YWx1ZTogICAgICAgICAgICggbiApIC0+IG4gKiogMlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3F1YXJlcyAgID0gRGJyaWNfc3F1YXJlcy5yZWJ1aWxkIGRiX3BhdGhcbiAgICAgIGZvciBuIGluIFsgMCAuLi4gMTAgXVxuICAgICAgICBzcXVhcmVzLnN0YXRlbWVudHMuaW5zZXJ0X251bWJlci5ydW4geyBuLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xMTMnLCByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUoKVxuICAgICAgcm93cyA9IHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUoKVxuICAgICAgQGVxICggzqliYmRicl8xMTQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDAsIHNxdWFyZTogMCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzExNSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMSwgc3F1YXJlOiAxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTE2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAyLCBzcXVhcmU6IDQgfVxuICAgICAgQGVxICggzqliYmRicl8xMTcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDMsIHNxdWFyZTogOSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzExOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNCwgc3F1YXJlOiAxNiB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzExOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNSwgc3F1YXJlOiAyNSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEyMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNiwgc3F1YXJlOiAzNiB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEyMSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNywgc3F1YXJlOiA0OSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEyMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogOCwgc3F1YXJlOiA2NCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEyMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogOSwgc3F1YXJlOiA4MSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEyNCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdWRmX2FnZ3JlZ2F0ZXNfd2l0aF9uc3FsOiAtPlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3F1YXJlcyBleHRlbmRzIERicmljXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgbnVtYmVycyAoXG4gICAgICAgICAgICBuIG51bWJlciB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHZpZXcgc3F1YXJlcyBhcyBzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUoIG4gKSBhcyBzcXVhcmVcbiAgICAgICAgICBmcm9tIG51bWJlcnNcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfbnVtYmVyOiBTUUxcIlwiXCJpbnNlcnQgaW50byBudW1iZXJzICggbiApIHZhbHVlcyAoICRuIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIG4gKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9udW1iZXJzOiBTUUxcIlwiXCJzZWxlY3QgbiBmcm9tIG51bWJlcnMgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fc3F1YXJlczogU1FMXCJcIlwic2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlLFxuICAgICAgICAgICAgcHJvZHVjdCggbiApICAgICAgYXMgcF9uLFxuICAgICAgICAgICAgcHJvZHVjdCggc3F1YXJlICkgYXMgcF9zcXVhcmVcbiAgICAgICAgICBmcm9tIHNxdWFyZXNcbiAgICAgICAgICB3aGVyZSBuIGJldHdlZW4gJHN0YXJ0IGFuZCAkc3RvcFxuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBmdW5jdGlvbnM6XG4gICAgICAgIHNxdWFyZTpcbiAgICAgICAgICBkZXRlcm1pbmlzdGljOiAgdHJ1ZVxuICAgICAgICAgIHZhcmFyZ3M6ICAgICAgICBmYWxzZVxuICAgICAgICAgIHZhbHVlOiAgICAgICAgICAgKCBuICkgLT4gbiAqKiAyXG4gICAgICBAYWdncmVnYXRlX2Z1bmN0aW9uczpcbiAgICAgICAgcHJvZHVjdDpcbiAgICAgICAgICBzdGFydDogICAgICAgICAgLT4gMSAjIyMgTk9URSBjYW4gdXNlIGBudWxsYCBmb3IgYlNRTCwgYnV0IG5TUUwgbmVlZHMgYDFgICMjI1xuICAgICAgICAgIHN0ZXA6ICAgICAgICAgICBwcm9kdWN0ID0gKCB0b3RhbCwgZWxlbWVudCApIC0+XG4gICAgICAgICAgICAjIGRlYnVnICfOqWJiZGJyXzEyNScsIHsgdG90YWwsIGVsZW1lbnQsIH1cbiAgICAgICAgICAgIHJldHVybiAoIHRvdGFsID8gMSApICogZWxlbWVudFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMtdWRmX2FnZ3JlZ2F0ZXNfd2l0aF9uc3FsLnNxbGl0ZSdcbiAgICAgIHNxdWFyZXMgICA9IERicmljX3NxdWFyZXMucmVidWlsZCBkYl9wYXRoXG4gICAgICBmb3IgbiBpbiBbIDAgLi4uIDEwIF1cbiAgICAgICAgc3F1YXJlcy5zdGF0ZW1lbnRzLmluc2VydF9udW1iZXIucnVuIHsgbiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTI2Jywgcm93IGZvciByb3cgZnJvbSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlIHsgc3RhcnQ6IDEsIHN0b3A6IDUsIH1cbiAgICAgIHJvd3MgPSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlIHsgc3RhcnQ6IDEsIHN0b3A6IDUsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTI3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAxLCBzcXVhcmU6IDEsIHBfbjogMTIwLCBwX3NxdWFyZTogMTQ0MDAgfVxuICAgICAgQGVxICggzqliYmRicl8xMjggPSAtPiByb3dzLm5leHQoKS5kb25lICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xMjknLCByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUoKVxuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMTMwID0gLT4gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpICksIC9taXNzaW5nIG5hbWVkIHBhcmFtZXRlcnMvaVxuICAgICAgIyBAZXEgKCDOqWJiZGJyXzEzMSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogbnVsbCwgc3F1YXJlOiBudWxsLCBwX246IDEsIHBfc3F1YXJlOiAxIH1cbiAgICAgICMgQGVxICggzqliYmRicl8xMzIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdWRmX2Z1bmN0aW9uc193aXRoX2JzcWw6IC0+XG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zcXVhcmVzIGV4dGVuZHMgRGJyaWNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBudW1iZXJzIChcbiAgICAgICAgICAgIG4gbnVtYmVyIHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1wiXCJcIlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdmlldyBzcXVhcmVzIGFzIHNlbGVjdFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHNxdWFyZSggbiApIGFzIHNxdWFyZVxuICAgICAgICAgIGZyb20gbnVtYmVyc1xuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAgIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIGluc2VydF9udW1iZXI6IFNRTFwiXCJcImluc2VydCBpbnRvIG51bWJlcnMgKCBuICkgdmFsdWVzICggJG4gKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggbiApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgIHNlbGVjdF9mcm9tX3NxdWFyZXM6IFNRTFwiXCJcInNlbGVjdFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHNxdWFyZVxuICAgICAgICAgIGZyb20gc3F1YXJlc1xuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBmdW5jdGlvbnM6XG4gICAgICAgIHNxdWFyZTpcbiAgICAgICAgICBkZXRlcm1pbmlzdGljOiAgdHJ1ZVxuICAgICAgICAgIHZhcmFyZ3M6ICAgICAgICBmYWxzZVxuICAgICAgICAgIHZhbHVlOiAgICAgICAgICAgKCBuICkgLT4gbiAqKiAyXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBzcXVhcmVzICAgPSBEYnJpY19zcXVhcmVzLnJlYnVpbGQgZGJfcGF0aFxuICAgICAgZm9yIG4gaW4gWyAwIC4uLiAxMCBdXG4gICAgICAgIHNxdWFyZXMuc3RhdGVtZW50cy5pbnNlcnRfbnVtYmVyLnJ1biB7IG4sIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICByb3dzID0gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSgpXG4gICAgICBAZXEgKCDOqWJiZGJyXzEzMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMCwgc3F1YXJlOiAwIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTM0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAxLCBzcXVhcmU6IDEgfVxuICAgICAgQGVxICggzqliYmRicl8xMzUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDIsIHNxdWFyZTogNCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEzNiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMywgc3F1YXJlOiA5IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTM3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA0LCBzcXVhcmU6IDE2IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTM4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA1LCBzcXVhcmU6IDI1IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTM5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA2LCBzcXVhcmU6IDM2IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA3LCBzcXVhcmU6IDQ5IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA4LCBzcXVhcmU6IDY0IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiA5LCBzcXVhcmU6IDgxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgdW5kZWZpbmVkXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVkZl9hZ2dyZWdhdGVzX3dpdGhfYnNxbDogLT5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3NxdWFyZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIG51bWJlcnMgKFxuICAgICAgICAgICAgbiBudW1iZXIgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IHNxdWFyZXMgYXMgc2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlKCBuICkgYXMgc3F1YXJlXG4gICAgICAgICAgZnJvbSBudW1iZXJzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgaW5zZXJ0X251bWJlcjogU1FMXCJcIlwiaW5zZXJ0IGludG8gbnVtYmVycyAoIG4gKSB2YWx1ZXMgKCAkbiApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBuICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fc3F1YXJlczogU1FMXCJcIlwic2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlLFxuICAgICAgICAgICAgcHJvZHVjdCggbiApICAgICAgYXMgcF9uLFxuICAgICAgICAgICAgcHJvZHVjdCggc3F1YXJlICkgYXMgcF9zcXVhcmVcbiAgICAgICAgICBmcm9tIHNxdWFyZXNcbiAgICAgICAgICB3aGVyZSBuIGJldHdlZW4gJHN0YXJ0IGFuZCAkc3RvcFxuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBmdW5jdGlvbnM6XG4gICAgICAgIHNxdWFyZTpcbiAgICAgICAgICBkZXRlcm1pbmlzdGljOiAgdHJ1ZVxuICAgICAgICAgIHZhcmFyZ3M6ICAgICAgICBmYWxzZVxuICAgICAgICAgIHZhbHVlOiAgICAgICAgICAgc3F1YXJlID0gKCBuICkgLT4gbiAqKiAyXG4gICAgICBAYWdncmVnYXRlX2Z1bmN0aW9uczpcbiAgICAgICAgcHJvZHVjdDpcbiAgICAgICAgICBzdGFydDogICAgICAgICAgLT4gbnVsbFxuICAgICAgICAgIHN0ZXA6ICAgICAgICAgICBwcm9kdWN0ID0gKCB0b3RhbCwgZWxlbWVudCApIC0+XG4gICAgICAgICAgICAjIGRlYnVnICfOqWJiZGJyXzE0NCcsIHsgdG90YWwsIGVsZW1lbnQsIH1cbiAgICAgICAgICAgIHJldHVybiAoIHRvdGFsID8gMSApICogZWxlbWVudFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIHNxdWFyZXMgICA9IERicmljX3NxdWFyZXMucmVidWlsZCgpXG4gICAgICBmb3IgbiBpbiBbIDAgLi4uIDEwIF1cbiAgICAgICAgc3F1YXJlcy5zdGF0ZW1lbnRzLmluc2VydF9udW1iZXIucnVuIHsgbiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTQ1Jywgcm93IGZvciByb3cgZnJvbSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlIHsgc3RhcnQ6IDIsIHN0b3A6IDMsIH1cbiAgICAgIHJvd3MgPSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlIHsgc3RhcnQ6IDIsIHN0b3A6IDMsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQ2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAyLCBzcXVhcmU6IDQsIHBfbjogNiwgcF9zcXVhcmU6IDM2IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTQ3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgdW5kZWZpbmVkXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVkZl90YWJsZV9mdW5jdGlvbl93aXRoX2JzcWw6IC0+XG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19waHJhc2VzIGV4dGVuZHMgRGJyaWNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBwaHJhc2VzIChcbiAgICAgICAgICAgIHBocmFzZSB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfcGhyYXNlOiBTUUxcIlwiXCJpbnNlcnQgaW50byBwaHJhc2VzICggcGhyYXNlICkgdmFsdWVzICggJHBocmFzZSApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBwaHJhc2UgKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9waHJhc2VzOiBTUUxcIlwiXCJcbiAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgZnJvbVxuICAgICAgICAgICAgICBwaHJhc2VzIGFzIHAsXG4gICAgICAgICAgICAgIHJlX21hdGNoZXMoIHAucGhyYXNlLCAkbWF0Y2hlciApIGFzIHJ4XG4gICAgICAgICAgICBvcmRlciBieSBwLnBocmFzZTtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHRhYmxlX2Z1bmN0aW9uczpcbiAgICAgICAgcmVfbWF0Y2hlczpcbiAgICAgICAgICBjb2x1bW5zOiAgICAgIFsgJ21hdGNoJywgJ2NhcHR1cmUnLCBdXG4gICAgICAgICAgcGFyYW1ldGVyczogICBbICd0ZXh0JywgJ3BhdHRlcm4nLCBdXG4gICAgICAgICAgcm93czogKCB0ZXh0LCBwYXR0ZXJuICkgLT5cbiAgICAgICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cCBwYXR0ZXJuLCAnZydcbiAgICAgICAgICAgIGZvciBtYXRjaCBmcm9tIHRleHQubWF0Y2hBbGwgcmVnZXhcbiAgICAgICAgICAgICAgeWllbGQgWyBtYXRjaFsgMCBdLCBtYXRjaFsgMSBdLCBdXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIHBocmFzZXMgICA9IERicmljX3BocmFzZXMucmVidWlsZCgpXG4gICAgICBmb3IgcGhyYXNlIGluIFsgJ2VsZXZlbicsICdmaXZlJywgJ25pbmUnLCAnb25lJywgJ29uZSBwb2ludCBmaXZlJywgJ3NldmVuJywgJ3RocmVlIHBvaW50IG9uZScgXVxuICAgICAgICBwaHJhc2VzLnN0YXRlbWVudHMuaW5zZXJ0X3BocmFzZS5ydW4geyBwaHJhc2UsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE0OCcsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3BocmFzZXMuaXRlcmF0ZSB7IG1hdGNoZXI6ICdeLiooW2FlaW91XS5lKS4qJCcsIH1cbiAgICAgICMgZWNobygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xNDknLCByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9waHJhc2VzLml0ZXJhdGUgeyBtYXRjaGVyOiAnKFteYWVpb3VdP1thZWlvdV0rKSg/PVttbnZdKScsIH1cbiAgICAgIHJvd3MgPSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fcGhyYXNlcy5pdGVyYXRlIHsgbWF0Y2hlcjogJyhbXmFlaW91XT9bYWVpb3VdKykoPz1bbW52XSknLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnZWxldmVuJywgbWF0Y2g6ICdsZScsIGNhcHR1cmU6ICdsZScgfVxuICAgICAgQGVxICggzqliYmRicl8xNTEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ2VsZXZlbicsIG1hdGNoOiAndmUnLCBjYXB0dXJlOiAndmUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTUyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdmaXZlJywgbWF0Y2g6ICdmaScsIGNhcHR1cmU6ICdmaScgfVxuICAgICAgQGVxICggzqliYmRicl8xNTMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ25pbmUnLCBtYXRjaDogJ25pJywgY2FwdHVyZTogJ25pJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnb25lJywgbWF0Y2g6ICdvJywgY2FwdHVyZTogJ28nIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdvbmUgcG9pbnQgZml2ZScsIG1hdGNoOiAnbycsIGNhcHR1cmU6ICdvJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnb25lIHBvaW50IGZpdmUnLCBtYXRjaDogJ3BvaScsIGNhcHR1cmU6ICdwb2knIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdvbmUgcG9pbnQgZml2ZScsIG1hdGNoOiAnZmknLCBjYXB0dXJlOiAnZmknIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdzZXZlbicsIG1hdGNoOiAnc2UnLCBjYXB0dXJlOiAnc2UnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTU5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdzZXZlbicsIG1hdGNoOiAndmUnLCBjYXB0dXJlOiAndmUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTYwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICd0aHJlZSBwb2ludCBvbmUnLCBtYXRjaDogJ3BvaScsIGNhcHR1cmU6ICdwb2knIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTYxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICd0aHJlZSBwb2ludCBvbmUnLCBtYXRjaDogJyBvJywgY2FwdHVyZTogJyBvJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE2MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmaWxlX21pcnJvcl9hc190YWJsZV9mdW5jdGlvbjogLT5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3BocmFzZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgZGF0YXNvdXJjZXMgKFxuICAgICAgICAgICAgZHNrZXkgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgICBwYXRoIHRleHQgbm90IG51bGwgKTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdmlldyBtaXJyb3IgYXMgc2VsZWN0XG4gICAgICAgICAgICAqXG4gICAgICAgICAgZnJvbVxuICAgICAgICAgICAgZGF0YXNvdXJjZXMgYXMgZHMsXG4gICAgICAgICAgICBmaWxlX2xpbmVzKCBkcy5wYXRoICkgYXMgZmxcbiAgICAgICAgICBvcmRlciBieSBkcy5kc2tleSwgZmwubGluZV9ucjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUga2V5d29yZHMgKFxuICAgICAgICAgICAgZHNrZXkgICB0ZXh0ICAgIG5vdCBudWxsLFxuICAgICAgICAgICAgbGluZV9uciBpbnRlZ2VyIG5vdCBudWxsLFxuICAgICAgICAgICAga2V5d29yZCB0ZXh0ICAgIG5vdCBudWxsLFxuICAgICAgICAgIGZvcmVpZ24ga2V5ICggZHNrZXkgKSByZWZlcmVuY2VzIGRhdGFzb3VyY2VzICggZHNrZXkgKSxcbiAgICAgICAgICBwcmltYXJ5IGtleSAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgKTtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfZGF0YXNvdXJjZTogU1FMXCJcIlwiaW5zZXJ0IGludG8gZGF0YXNvdXJjZXMgKCBkc2tleSwgcGF0aCApIHZhbHVlcyAoICRkc2tleSwgJHBhdGggKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggZHNrZXkgKSBkbyB1cGRhdGUgc2V0IHBhdGggPSAkcGF0aDtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpbnNlcnRfa2V5d29yZDogU1FMXCJcIlwiaW5zZXJ0IGludG8ga2V5d29yZHMgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApIHZhbHVlcyAoICRkc2tleSwgJGxpbmVfbnIsICRrZXl3b3JkIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9kYXRhc291cmNlczogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBkYXRhc291cmNlcyBvcmRlciBieSBkc2tleTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9rZXl3b3JkczogU1FMXCJcIlwic2VsZWN0ICogZnJvbSBrZXl3b3JkcyBvcmRlciBieSBrZXl3b3JkLCBkc2tleSwgbGluZV9ucjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9taXJyb3I6IFNRTFwiXCJcInNlbGVjdCAqIGZyb20gbWlycm9yIG9yZGVyIGJ5IGRza2V5O1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAdGFibGVfZnVuY3Rpb25zOlxuICAgICAgICBmaWxlX2xpbmVzOlxuICAgICAgICAgIGNvbHVtbnM6ICAgICAgWyAnbGluZV9ucicsICdsaW5lJywgXVxuICAgICAgICAgIHBhcmFtZXRlcnM6ICAgWyAncGF0aCcsIF1cbiAgICAgICAgICByb3dzOiAoIHBhdGggKSAtPlxuICAgICAgICAgICAgZm9yIHsgbG5yOiBsaW5lX25yLCBsaW5lLCBlb2wsIH0gZnJvbSBHVVkuZnMud2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoXG4gICAgICAgICAgICAgIHlpZWxkIHsgbGluZV9uciwgbGluZSwgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBwaHJhc2VzICAgPSBEYnJpY19waHJhc2VzLnJlYnVpbGQoKVxuICAgICAgQGVxICggzqliYmRicl8xNjMgPSAtPiAoIHBocmFzZXMucHJlcGFyZSBTUUxcIlwiXCJwcmFnbWEgZm9yZWlnbl9rZXlzXCJcIlwiICkuZ2V0KCkgKSwgeyBmb3JlaWduX2tleXM6IDEsICAgICAgfVxuICAgICAgQGVxICggzqliYmRicl8xNjQgPSAtPiAoIHBocmFzZXMucHJlcGFyZSBTUUxcIlwiXCJwcmFnbWEgam91cm5hbF9tb2RlXCJcIlwiICkuZ2V0KCkgKSwgeyBqb3VybmFsX21vZGU6ICdtZW1vcnknLCAgfVxuICAgICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGRvID0+XG4gICAgICAjICAgZHNrZXkgPSAncmVhZG1lJ1xuICAgICAgIyAgIHBhdGggID0gUEFUSC5yZXNvbHZlIF9fZGlybmFtZSwgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9SRUFETUUubWQnXG4gICAgICAjICAgcGhyYXNlcy5zdGF0ZW1lbnRzLmluc2VydF9kYXRhc291cmNlLnJ1biB7IGRza2V5LCBwYXRoIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZHNrZXkgPSAncGFja2FnZS1qc29uJ1xuICAgICAgICBwYXRoICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvcGFja2FnZS5qc29uJ1xuICAgICAgICBwaHJhc2VzLnN0YXRlbWVudHMuaW5zZXJ0X2RhdGFzb3VyY2UucnVuIHsgZHNrZXksIHBhdGggfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTY1Jywgcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fZGF0YXNvdXJjZXMuaXRlcmF0ZSgpXG4gICAgICAjIGVjaG8oKVxuICAgICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTY2Jywgcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fbWlycm9yLml0ZXJhdGUoKVxuICAgICAgIyBlY2hvKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcm93cyA9IHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9taXJyb3IuZ2V0KClcbiAgICAgIGZvciB7IGRza2V5LCBsaW5lX25yLCBsaW5lLCB9IGluIHBocmFzZXNcbiAgICAgICAga2V5d29yZHMgPSBsaW5lLnNwbGl0IC8oPzpcXHB7Wn0rKXwoKD86XFxwe0x9Kyl8KD86XFxwe059Kyl8KD86XFxwe1N9KykpL3ZcbiAgICAgICAgIyBkZWJ1ZyAnzqliYmRicl8xNjcnLCBsaW5lX25yLCBycHIga2V5d29yZHNcbiAgICAgICAgZm9yIGtleXdvcmQgaW4ga2V5d29yZHNcbiAgICAgICAgICBjb250aW51ZSB1bmxlc3Mga2V5d29yZD9cbiAgICAgICAgICBjb250aW51ZSBpZiBrZXl3b3JkIGlzICcnXG4gICAgICAgICAgcGhyYXNlcy5zdGF0ZW1lbnRzLmluc2VydF9rZXl3b3JkLnJ1biB7IGRza2V5LCBsaW5lX25yLCBrZXl3b3JkLCB9XG4gICAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xNjgnLCByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9rZXl3b3Jkcy5pdGVyYXRlKClcbiAgICAgICMgZWNobygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZmlsZV9taXJyb3Jfd2l0aF9pbnRlZ3JhdGVkX2luc2VydHM6IC0+XG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19waHJhc2VzIGV4dGVuZHMgRGJyaWNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIGRhdGFzb3VyY2VzIChcbiAgICAgICAgICAgIGRza2V5IHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgICAgcGF0aCB0ZXh0IG5vdCBudWxsICk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHZpZXcgbWlycm9yIGFzIHNlbGVjdFxuICAgICAgICAgICAgKlxuICAgICAgICAgIGZyb21cbiAgICAgICAgICAgIGRhdGFzb3VyY2VzIGFzIGRzLFxuICAgICAgICAgICAgZmlsZV9saW5lcyggZHMucGF0aCApIGFzIGZsXG4gICAgICAgICAgb3JkZXIgYnkgZHMuZHNrZXksIGZsLmxpbmVfbnI7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIGtleXdvcmRzIChcbiAgICAgICAgICAgIGRza2V5ICAgdGV4dCAgICBub3QgbnVsbCxcbiAgICAgICAgICAgIGxpbmVfbnIgaW50ZWdlciBub3QgbnVsbCxcbiAgICAgICAgICAgIGtleXdvcmQgdGV4dCAgICBub3QgbnVsbCxcbiAgICAgICAgICBmb3JlaWduIGtleSAoIGRza2V5ICkgcmVmZXJlbmNlcyBkYXRhc291cmNlcyAoIGRza2V5ICksXG4gICAgICAgICAgcHJpbWFyeSBrZXkgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApICk7XCJcIlwiXG4gICAgICAgIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgaW5zZXJ0X2RhdGFzb3VyY2U6IFNRTFwiXCJcImluc2VydCBpbnRvIGRhdGFzb3VyY2VzICggZHNrZXksIHBhdGggKSB2YWx1ZXMgKCAkZHNrZXksICRwYXRoIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIGRza2V5ICkgZG8gdXBkYXRlIHNldCBwYXRoID0gJHBhdGg7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgaW5zZXJ0X2tleXdvcmQ6IFNRTFwiXCJcImluc2VydCBpbnRvIGtleXdvcmRzICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKSB2YWx1ZXMgKCAkZHNrZXksICRsaW5lX25yLCAka2V5d29yZCApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc2VsZWN0X2Zyb21fZGF0YXNvdXJjZXM6IFNRTFwiXCJcInNlbGVjdCAqIGZyb20gZGF0YXNvdXJjZXMgb3JkZXIgYnkgZHNrZXk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc2VsZWN0X2Zyb21fa2V5d29yZHM6IFNRTFwiXCJcInNlbGVjdCAqIGZyb20ga2V5d29yZHMgb3JkZXIgYnkga2V5d29yZCwgZHNrZXksIGxpbmVfbnI7XCJcIlwiXG4gICAgICAgIGxvY2F0aW9uc19mcm9tX2tleXdvcmQ6IFNRTFwiXCJcInNlbGVjdCAqIGZyb20ga2V5d29yZHNcbiAgICAgICAgICB3aGVyZSBrZXl3b3JkID0gJGtleXdvcmRcbiAgICAgICAgICBvcmRlciBieSBrZXl3b3JkLCBkc2tleSwgbGluZV9ucjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzZWxlY3RfZnJvbV9taXJyb3I6IFNRTFwiXCJcInNlbGVjdCAqIGZyb20gbWlycm9yIG9yZGVyIGJ5IGRza2V5O1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHBvcHVsYXRlX2tleXdvcmRzOiBTUUxcIlwiXCJcbiAgICAgICAgICBpbnNlcnQgaW50byBrZXl3b3JkcyAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkIClcbiAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICBkcy5kc2tleSAgICBhcyBkc2tleSxcbiAgICAgICAgICAgICAgbWkubGluZV9uciAgYXMgbGluZV9ucixcbiAgICAgICAgICAgICAgc3cua2V5d29yZCAgYXMga2V5d29yZFxuICAgICAgICAgICAgZnJvbSBkYXRhc291cmNlcyAgICAgICAgYXMgZHNcbiAgICAgICAgICAgIGpvaW4gbWlycm9yICAgICAgICAgICAgIGFzIG1pIHVzaW5nICggZHNrZXkgKSxcbiAgICAgICAgICAgIHNwbGl0X3dvcmRzKCBtaS5saW5lICkgIGFzIHN3XG4gICAgICAgICAgICB3aGVyZSB0cnVlIC0tIHdoZXJlIGNsYXVzZSBqdXN0IGEgc3ludGFjdGljIGd1YXJkIGFzIHBlciBodHRwczovL3NxbGl0ZS5vcmcvbGFuZ191cHNlcnQuaHRtbFxuICAgICAgICAgICAgb24gY29uZmxpY3QgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHRhYmxlX2Z1bmN0aW9uczpcbiAgICAgICAgc3BsaXRfd29yZHM6XG4gICAgICAgICAgY29sdW1uczogICAgICAgIFsgJ2tleXdvcmQnLCBdXG4gICAgICAgICAgcGFyYW1ldGVyczogICAgIFsgJ2xpbmUnLCBdXG4gICAgICAgICAgcm93czogKCBsaW5lICkgLT5cbiAgICAgICAgICAgIGtleXdvcmRzID0gbGluZS5zcGxpdCAvKD86XFxwe1p9Kyl8KCg/OlxccHtMfSspfCg/OlxccHtOfSspfCg/OlxccHtTfSspKS92XG4gICAgICAgICAgICAjIGRlYnVnICfOqWJiZGJyXzE2OScsIGxpbmVfbnIsIHJwciBrZXl3b3Jkc1xuICAgICAgICAgICAgZm9yIGtleXdvcmQgaW4ga2V5d29yZHNcbiAgICAgICAgICAgICAgY29udGludWUgdW5sZXNzIGtleXdvcmQ/XG4gICAgICAgICAgICAgIGNvbnRpbnVlIGlmIGtleXdvcmQgaXMgJydcbiAgICAgICAgICAgICAgeWllbGQgeyBrZXl3b3JkLCB9XG4gICAgICAgICAgICA7bnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGZpbGVfbGluZXM6XG4gICAgICAgICAgY29sdW1uczogICAgICBbICdsaW5lX25yJywgJ2xpbmUnLCBdXG4gICAgICAgICAgcGFyYW1ldGVyczogICBbICdwYXRoJywgXVxuICAgICAgICAgIHJvd3M6ICggcGF0aCApIC0+XG4gICAgICAgICAgICBmb3IgeyBsbnI6IGxpbmVfbnIsIGxpbmUsIGVvbCwgfSBmcm9tIEdVWS5mcy53YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zIHBhdGhcbiAgICAgICAgICAgICAgeWllbGQgeyBsaW5lX25yLCBsaW5lLCB9XG4gICAgICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgcGhyYXNlcyAgID0gRGJyaWNfcGhyYXNlcy5yZWJ1aWxkIGRiX3BhdGhcbiAgICAgICMgZGVidWcgJ86pYmJkYnJfMTcwJywgcGhyYXNlcy50ZWFyZG93bigpXG4gICAgICAjIGRlYnVnICfOqWJiZGJyXzE3MScsIHBocmFzZXMucmVidWlsZCgpXG4gICAgICBAZXEgKCDOqWJiZGJyXzE3MiA9IC0+ICggcGhyYXNlcy5wcmVwYXJlIFNRTFwiXCJcInByYWdtYSBmb3JlaWduX2tleXNcIlwiXCIgKS5nZXQoKSApLCB7IGZvcmVpZ25fa2V5czogMSwgICAgICB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3MyA9IC0+ICggcGhyYXNlcy5wcmVwYXJlIFNRTFwiXCJcInByYWdtYSBqb3VybmFsX21vZGVcIlwiXCIgKS5nZXQoKSApLCB7IGpvdXJuYWxfbW9kZTogJ3dhbCcsICB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRza2V5ID0gJ2h1bWR1bSdcbiAgICAgICAgcGF0aCAgPSBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4vYXNzZXRzL2JyaWNhYnJhYy9odW1wdHktZHVtcHR5Lm1kJ1xuICAgICAgICBwaHJhc2VzLnN0YXRlbWVudHMuaW5zZXJ0X2RhdGFzb3VyY2UucnVuIHsgZHNrZXksIHBhdGggfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBwaHJhc2VzLnN0YXRlbWVudHMucG9wdWxhdGVfa2V5d29yZHMucnVuKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE3NCcsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLmxvY2F0aW9uc19mcm9tX2tleXdvcmQuaXRlcmF0ZSB7IGtleXdvcmQ6ICd0aG91Z2h0JywgfVxuICAgICAgIyBlY2hvKClcbiAgICAgIHJvd3MgPSBwaHJhc2VzLnN0YXRlbWVudHMubG9jYXRpb25zX2Zyb21fa2V5d29yZC5pdGVyYXRlIHsga2V5d29yZDogJ3Rob3VnaHQnLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAxNSwga2V5d29yZDogJ3Rob3VnaHQnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTc2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDM0LCBrZXl3b3JkOiAndGhvdWdodCcgfVxuICAgICAgQGVxICggzqliYmRicl8xNzcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB1bmRlZmluZWRcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE3OCcsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLmxvY2F0aW9uc19mcm9tX2tleXdvcmQuaXRlcmF0ZSB7IGtleXdvcmQ6ICdzaGUnLCB9XG4gICAgICAjIGVjaG8oKVxuICAgICAgcm93cyA9IHBocmFzZXMuc3RhdGVtZW50cy5sb2NhdGlvbnNfZnJvbV9rZXl3b3JkLml0ZXJhdGUgeyBrZXl3b3JkOiAnc2hlJywgfVxuICAgICAgQGVxICggzqliYmRicl8xNzkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMiwga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8xODAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMywga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8xODEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogNCwga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8xODIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogNSwga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8xODMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMTUsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTg0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDE3LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAxOCwga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8xODYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMjYsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTg3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDM0LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAzNiwga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8xODkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB1bmRlZmluZWRcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19zdGRfdmFyaWFibGVzX2FuZF9zZXF1ZW5jZXM6IC0+XG4gICAgeyBsZXRzLFxuICAgICAgZnJlZXplLCAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfbGV0c2ZyZWV6ZXRoYXRfaW5mcmEoKS5zaW1wbGVcbiAgICBjZmdfZG9fc2hvd192YXJpYWJsZXMgICAgICAgICA9IGZhbHNlXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkYiA9IERicmljX3N0ZC5yZWJ1aWxkICc6bWVtb3J5OidcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEB0aHJvd3MgKCDOqWJiZGJyXzE5MCA9IC0+IGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyAtPiBkYi5zdGRfd2l0aF92YXJpYWJsZXMgLT4gbnVsbCAgKSwgL2lsbGVnYWwgdG8gbmVzdCBgc3RkX3dpdGhfdmFyaWFibGVzXFwoXFwpYCBjb250ZXh0cy9cbiAgICBAdGhyb3dzICggzqliYmRicl8xOTEgPSAtPiBkYi5zdGRfc2V0X3ZhcmlhYmxlICdteW5hbWUnLCAnbXl2YWx1ZScgICAgICAgICAgICAgICAgICksIC9pbGxlZ2FsIHRvIHNldCB2YXJpYWJsZS9cbiAgICAjIEB0aHJvd3MgKCDOqWJiZGJyXzE5MiA9IC0+IGRiLnN0ZF9nZXRfdmFyaWFibGUgJ215bmFtZScgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL2lsbGVnYWwgdG8gZ2V0IHZhcmlhYmxlL1xuICAgIEB0aHJvd3MgKCDOqWJiZGJyXzE5MyA9IC0+IGRiLnN0ZF9nZXRfdmFyaWFibGUgJ215bmFtZScgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL3Vua25vd24gdmFyaWFibGUvXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB2YXJpYWJsZXMgPSAoZGIuX3Nob3dfdmFyaWFibGVzIGNmZ19kb19zaG93X3ZhcmlhYmxlcyApXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkYi5zdGRfd2l0aF92YXJpYWJsZXMgPT5cbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyXzE5NCA9IC0+IGRiLnN0ZF9nZXRfdmFyaWFibGUgJ215bmFtZScgKSwgL3Vua25vd24gdmFyaWFibGUvXG4gICAgICBAZXEgKCDOqWJiZGJyXzE5NSA9IC0+IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzICkgKSwgeyAnc2VxOmdsb2JhbDpyb3dpZCc6IHsgc3Y6IDAsIHNkOiAxLCBjdjogMCwgY2Q6IDEsIHR2OiB1bmRlZmluZWQsIGd2OiAwIH0gfVxuICAgICAgIyMjIFRBSU5UIHVzZSBBUEkgIyMjXG4gICAgICBkYi5zdGF0ZS5zdGRfdmFyaWFibGVzID0gbGV0cyBkYi5zdGF0ZS5zdGRfdmFyaWFibGVzLCAoIGQgKSAtPlxuICAgICAgICBkWyAnc2VxOmFwcDpjb3VudGVyJyBdID0geyBuYW1lOiAnc2VxOmFwcDpjb3VudGVyJywgdmFsdWU6IDcsIGRlbHRhOiArMywgfVxuICAgICAgQGVxICggzqliYmRicl8xOTYgPSAtPiAoZGIuX3Nob3dfdmFyaWFibGVzIGNmZ19kb19zaG93X3ZhcmlhYmxlcyApICksIHsgJ3NlcTphcHA6Y291bnRlcic6IHsgc3Y6IHVuZGVmaW5lZCwgc2Q6IHVuZGVmaW5lZCwgY3Y6IDcsIGNkOiAzLCB0djogdW5kZWZpbmVkLCBndjogNyB9LCAnc2VxOmdsb2JhbDpyb3dpZCc6IHsgc3Y6IDAsIHNkOiAxLCBjdjogMCwgY2Q6IDEsIHR2OiB1bmRlZmluZWQsIGd2OiAwIH0gfVxuICAgICAgQGVxICggzqliYmRicl8xOTcgPSAtPiBkYi5zdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UgJ3NlcTphcHA6Y291bnRlcicgKSwgMTBcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTk4ID0gLT4gZGIuc3RkX2dldF9uZXh0X2luX3NlcXVlbmNlICdzZXE6YXBwOmNvdW50ZXInICksIDEzXG4gICAgICBkYi5zdGRfc2V0X3ZhcmlhYmxlICdmdXp6JywgMTEuNVxuICAgICAgZGIuc3RkX3NldF92YXJpYWJsZSAnbmFtZScsICdCb2InXG4gICAgICBAZXEgKCDOqWJiZGJyXzE5OSA9IC0+IGRiLnN0ZF9nZXRfdmFyaWFibGUgJ2Z1enonICksIDExLjVcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjAwID0gLT4gZGIuc3RkX2dldF92YXJpYWJsZSAnbmFtZScgKSwgJ0JvYidcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjAxID0gLT4gKGRiLl9zaG93X3ZhcmlhYmxlcyBjZmdfZG9fc2hvd192YXJpYWJsZXMgKSApLCB7IGZ1eno6IHsgc3Y6IHVuZGVmaW5lZCwgc2Q6IHVuZGVmaW5lZCwgY3Y6IDExLjUsIGNkOiBudWxsLCB0djogdW5kZWZpbmVkLCBndjogMTEuNSwgfSwgbmFtZTogeyBzdjogdW5kZWZpbmVkLCBzZDogdW5kZWZpbmVkLCBjdjogJ0JvYicsIGNkOiBudWxsLCB0djogdW5kZWZpbmVkLCBndjogJ0JvYicgfSwgJ3NlcTphcHA6Y291bnRlcic6IHsgc3Y6IHVuZGVmaW5lZCwgc2Q6IHVuZGVmaW5lZCwgY3Y6IDEzLCBjZDogMywgdHY6IHVuZGVmaW5lZCwgZ3Y6IDEzIH0sICdzZXE6Z2xvYmFsOnJvd2lkJzogeyBzdjogMCwgc2Q6IDEsIGN2OiAwLCBjZDogMSwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDAgfSB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzIHsgbmFtZTogJ0FsaWNlJywgam9iOiAnZW5naW5lZXInLCB9LCA9PlxuICAgICAgQGVxICggzqliYmRicl8yMDIgPSAtPiBkYi5zdGRfZ2V0X3ZhcmlhYmxlICduYW1lJyApLCAnQWxpY2UnXG4gICAgICAjIGRlYnVnICfOqWJiZGJyXzIwMycsIHsgbmFtZSwgam9iLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIwNCA9IC0+IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzICkgKSwgeyBmdXp6OiB7IHN2OiAxMS41LCBzZDogbnVsbCwgY3Y6IDExLjUsIGNkOiBudWxsLCB0djogdW5kZWZpbmVkLCBndjogMTEuNSB9LCBqb2I6IHsgc3Y6IHVuZGVmaW5lZCwgc2Q6IHVuZGVmaW5lZCwgY3Y6IHVuZGVmaW5lZCwgY2Q6IHVuZGVmaW5lZCwgdHY6ICdlbmdpbmVlcicsIGd2OiAnZW5naW5lZXInIH0sIG5hbWU6IHsgc3Y6ICdcIkJvYlwiJywgc2Q6IG51bGwsIGN2OiAnQm9iJywgY2Q6IG51bGwsIHR2OiAnQWxpY2UnLCBndjogJ0FsaWNlJyB9LCAnc2VxOmFwcDpjb3VudGVyJzogeyBzdjogMTMsIHNkOiAzLCBjdjogMTMsIGNkOiAzLCB0djogdW5kZWZpbmVkLCBndjogMTMgfSwgJ3NlcTpnbG9iYWw6cm93aWQnOiB7IHN2OiAwLCBzZDogMSwgY3Y6IDAsIGNkOiAxLCB0djogdW5kZWZpbmVkLCBndjogMCB9IH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWJiZGJyXzIwNSA9IC0+IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzICkgKSwgeyBmdXp6OiB7IHN2OiAxMS41LCBzZDogbnVsbCwgY3Y6IDExLjUsIGNkOiBudWxsLCB0djogdW5kZWZpbmVkLCBndjogMTEuNSB9LCBuYW1lOiB7IHN2OiAnXCJCb2JcIicsIHNkOiBudWxsLCBjdjogJ0JvYicsIGNkOiBudWxsLCB0djogdW5kZWZpbmVkLCBndjogJ0JvYicgfSwgJ3NlcTphcHA6Y291bnRlcic6IHsgc3Y6IDEzLCBzZDogMywgY3Y6IDEzLCBjZDogMywgdHY6IHVuZGVmaW5lZCwgZ3Y6IDEzIH0sICdzZXE6Z2xvYmFsOnJvd2lkJzogeyBzdjogMCwgc2Q6IDEsIGN2OiAwLCBjZDogMSwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDAgfSB9XG4gICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzID0+XG4gICAgICBAZXEgKCDOqWJiZGJyXzIwNiA9IC0+IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzICkgKSwgeyBmdXp6OiB7IHN2OiAxMS41LCBzZDogbnVsbCwgY3Y6IDExLjUsIGNkOiBudWxsLCB0djogdW5kZWZpbmVkLCBndjogMTEuNSB9LCBuYW1lOiB7IHN2OiAnXCJCb2JcIicsIHNkOiBudWxsLCBjdjogJ0JvYicsIGNkOiBudWxsLCB0djogdW5kZWZpbmVkLCBndjogJ0JvYicgfSwgJ3NlcTphcHA6Y291bnRlcic6IHsgc3Y6IDEzLCBzZDogMywgY3Y6IDEzLCBjZDogMywgdHY6IHVuZGVmaW5lZCwgZ3Y6IDEzIH0sICdzZXE6Z2xvYmFsOnJvd2lkJzogeyBzdjogMCwgc2Q6IDEsIGN2OiAwLCBjZDogMSwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDAgfSB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzID0+XG4gICAgICAjIyMgTW9kZWwgdGhhdCBzaG93cyBob3cgdG8gaW5zZXJ0IHNlcXVlbnRpYWwgUm93SURzIHVzaW5nIGEgcHJpdmF0ZSB0YWJsZSwgYW4gYXNzb2NpYXRlZCBwdWJsaWNcbiAgICAgIHZpZXcsIGFuZCBhIGBpbnN0ZWFkIG9mIGluc2VydGAgdHJpZ2dlcjogIyMjXG4gICAgICBkYi5zdGRfc2V0X3ZhcmlhYmxlICdzZXE6bGV0dGVycycsIDAsIDFcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIF9sZXR0ZXJzIChcbiAgICAgICAgICByb3dpZCAgIHRleHQgICAgdW5pcXVlICBub3QgbnVsbCxcbiAgICAgICAgICBsZXR0ZXIgIHRleHQgICAgdW5pcXVlICBub3QgbnVsbCxcbiAgICAgICAgLS0gcHJpbWFyeSBrZXkgKCByb3dpZCApXG4gICAgICAgIGNvbnN0cmFpbnQgXCLOqWNvbnN0cmFpbnRfMjA3XCIgY2hlY2sgKCBsZW5ndGgoIGxldHRlciApID0gMSApXG4gICAgICAgICkgc3RyaWN0O1wiXCJcIlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJjcmVhdGUgdmlldyBsZXR0ZXJzIGFzIHNlbGVjdCAqIGZyb20gX2xldHRlcnM7XCJcIlwiXG4gICAgICBkYi5leGVjdXRlIFNRTFwiXCJcImNyZWF0ZSB0cmlnZ2VyIG9uX2JlZm9yZV9pbnNlcnRfbGV0dGVyc1xuICAgICAgICBpbnN0ZWFkIG9mIGluc2VydCBvbiBsZXR0ZXJzXG4gICAgICAgICAgZm9yIGVhY2ggcm93IGJlZ2luXG4gICAgICAgICAgICBpbnNlcnQgaW50byBfbGV0dGVycyAoIHJvd2lkLCBsZXR0ZXIgKSB2YWx1ZXNcbiAgICAgICAgICAgICAgLS0gKCAndDpsZXR0ZXJzOlI9JyB8fCBjYXN0KCBzdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UoICdzZXE6bGV0dGVycycgKSBhcyBpbnRlZ2VyICksIG5ldy5sZXR0ZXIgKTtcbiAgICAgICAgICAgICAgKCBwcmludGYoICd0OmxldHRlcnM6Uj0lZCcsIHN0ZF9nZXRfbmV4dF9pbl9zZXF1ZW5jZSggJ3NlcTpsZXR0ZXJzJyApICksIG5ldy5sZXR0ZXIgKTtcbiAgICAgICAgICAgIGVuZDtcbiAgICAgICAgO1wiXCJcIlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJpbnNlcnQgaW50byBsZXR0ZXJzICggbGV0dGVyICkgdmFsdWVzICggJ2EnICksICggJ3onICk7XCJcIlwiXG4gICAgICAjIGluZm8gJ86pYmJkYnJfMjA4Jywgcm93IGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBsZXR0ZXJzO1wiXG4gICAgICByb3dzID0gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gbGV0dGVycyBvcmRlciBieSBsZXR0ZXI7XCJcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjA5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6bGV0dGVyczpSPTEnLCBsZXR0ZXI6ICdhJywgfVxuICAgICAgQGVxICggzqliYmRicl8yMTAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpsZXR0ZXJzOlI9MicsIGxldHRlcjogJ3onLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIxMSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzID0+XG4gICAgICAjIyMgTk9URSBNb2RlbCB0aGF0IHNob3dzIGhvdyB0byBpbnNlcnQgcm93cyB3aXRoIHNlcXVlbnRpYWwgUm93SURzIHVzaW5nIGEgdGJhbGUgYW5kIGFuZCBgYWZ0ZXJcbiAgICAgIGluc2VydGAgdHJpZ2dlciB0aGF0IHVwZGF0ZXMgYHJvd2lkYDogIyMjXG4gICAgICBkYi5zdGRfc2V0X3ZhcmlhYmxlICdzZXE6bnVtYmVycycsIDAsIDFcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIG51bWJlcnMgKFxuICAgICAgICAgIHJvd2lkICAgdGV4dCAgICB1bmlxdWUgIG5vdCBudWxsIGRlZmF1bHQgJ25ld19yb3dpZCcsXG4gICAgICAgICAgbnVtYmVyICB0ZXh0ICAgIHVuaXF1ZSAgbm90IG51bGxcbiAgICAgICAgKSBzdHJpY3Q7XCJcIlwiXG4gICAgICBkYi5leGVjdXRlIFNRTFwiXCJcImNyZWF0ZSB0cmlnZ2VyIG9uX2FmdGVyX2luc2VydF9vbl9udW1iZXJzXG4gICAgICAgIGFmdGVyIGluc2VydCBvbiBudW1iZXJzIGZvciBlYWNoIHJvdyBiZWdpblxuICAgICAgICAgICAgdXBkYXRlIG51bWJlcnMgc2V0IHJvd2lkID0gcHJpbnRmKCAndDpudW1iZXJzOlI9JWQnLCBzdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UoICdzZXE6bnVtYmVycycgKSApXG4gICAgICAgICAgICAgIHdoZXJlIHJvd2lkID0gJ25ld19yb3dpZCc7XG4gICAgICAgICAgICBlbmQ7XG4gICAgICAgIDtcIlwiXCJcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJcIlwiaW5zZXJ0IGludG8gbnVtYmVycyAoIG51bWJlciApIHZhbHVlcyAoICd1bm8nICksICggJ2R1ZScgKTtcIlwiXCJcbiAgICAgICMgaW5mbyAnzqliYmRicl8yMTInLCByb3cgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIG51bWJlcnM7XCJcbiAgICAgIHJvd3MgPSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBudW1iZXJzIG9yZGVyIGJ5IHJvd2lkO1wiXG4gICAgICBAZXEgKCDOqWJiZGJyXzIxMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0Om51bWJlcnM6Uj0xJywgbnVtYmVyOiAndW5vJywgfVxuICAgICAgQGVxICggzqliYmRicl8yMTQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpudW1iZXJzOlI9MicsIG51bWJlcjogJ2R1ZScsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjE1ID0gLT4gcm93cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMjIyBOT1RFIE1vZGVsIHRoYXQgc2hvd3MgaG93IHRvIGJ1aWxkIGEgcGFyYW1ldHJpemVkIHZpZXc6ICMjI1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMjIyByZXBlYXQgZWFybGllciB0ZXN0IHRvIGVuc3VyZSB3ZSBrbm93IHdoYXQncyB0aGVyZTogIyMjXG4gICAgICByb3dzID0gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gbGV0dGVycyBvcmRlciBieSBsZXR0ZXI7XCJcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjE2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6bGV0dGVyczpSPTEnLCBsZXR0ZXI6ICdhJywgfVxuICAgICAgQGVxICggzqliYmRicl8yMTcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpsZXR0ZXJzOlI9MicsIGxldHRlcjogJ3onLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIxOCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGluc2VydF9sZXR0ZXIgPSBkYi5wcmVwYXJlIFNRTFwiXCJcImluc2VydCBpbnRvIGxldHRlcnMgKCBsZXR0ZXIgKSB2YWx1ZXMgKCAkbGV0dGVyICk7XCJcIlwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJjcmVhdGUgdmlldyBydW5fb2ZfbGV0dGVycyBhc1xuICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICpcbiAgICAgICAgICBmcm9tIGxldHRlcnNcbiAgICAgICAgICB3aGVyZSBsZXR0ZXIgYmV0d2VlbiBzdGRfZ2V0X3ZhcmlhYmxlKCAnZmlyc3RfbGV0dGVyJyApIGFuZCBzdGRfZ2V0X3ZhcmlhYmxlKCAnbGFzdF9sZXR0ZXInICk7XCJcIlwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzID0+XG4gICAgICAgIGZvciBjaWQgaW4gWyAoICdiJy5jb2RlUG9pbnRBdCAwICkgLi4gKCAneScuY29kZVBvaW50QXQgMCApIF1cbiAgICAgICAgICBsZXR0ZXIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWRcbiAgICAgICAgICBpbnNlcnRfbGV0dGVyLnJ1biB7IGxldHRlciwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyB7IGZpcnN0X2xldHRlcjogJ2cnLCBsYXN0X2xldHRlcjogJ20nIH0sID0+XG4gICAgICAgIHJlc3VsdCAgICA9ICggcm93LmxldHRlciBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gcnVuX29mX2xldHRlcnMgb3JkZXIgYnkgbGV0dGVyO1wiICkuam9pbiAnLCdcbiAgICAgICAgdmFyaWFibGVzID0gKGRiLl9zaG93X3ZhcmlhYmxlcyBjZmdfZG9fc2hvd192YXJpYWJsZXMgKVxuICAgICAgICBAZXEgKCDOqWJiZGJyXzIxOSA9IC0+IHJlc3VsdCAgICAgICAgICAgICAgICAgICAgICApLCAnZyxoLGksaixrLGwsbSdcbiAgICAgICAgQGVxICggzqliYmRicl8yMjAgPSAtPiB2YXJpYWJsZXMuZmlyc3RfbGV0dGVyPy5ndiAgKSwgJ2cnXG4gICAgICAgIEBlcSAoIM6pYmJkYnJfMjIxID0gLT4gdmFyaWFibGVzLmxhc3RfbGV0dGVyPy5ndiAgICksICdtJ1xuICAgICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMjIyBOT1RFIE1vZGVsIHRoYXQgc2hvd3MgaG93IHRvIHVzZSBhIHNlcXVlbmNlIHRvIHByb2R1Y2UgUm93SURzOlxuXG4gICAgICAqIGAkdGFibGUucm93aWRgIGNvbHVtbiBpcyBkZWNsYXJlZCAqd2l0aG91dCogYGdlbmVyYXRlIGFsd2F5c2AgY2xhdXNlLFxuICAgICAgKiB0aHVzIGAkdGFibGUucm93aWRgIGNhbiBiZSB1c2VkIGFzIHByaW1hcnkga2V5O1xuICAgICAgKiBhZGRpdGlvbmFsbHksIG1heSBjb250YWluIGNoZWNrIGNsYXVzZSBmb3IgYCR0YWJsZS5yb3dpZGAuXG4gICAgICAqIEFuIGBpbnNlcnRgIHN0YXRlbWVudCBpcyBkZWZpbmVkIHRoYXQgY2FsbHMgYHN0ZF9nZXRfbmV4dF9pbl9zZXF1ZW5jZSgpYCB0byBvYnRhaW4gbmV4dCBSb3dJRDtcbiAgICAgICogaWYgREItd2lkZSB1bmlxdWUgUm93SURzIGFyZSBkZXNpcmFibGUsIHVzZSBgcHJpbnRmKClgIHRvIGVtYmVkIG51bWVyaWNhbCBSb3dJRCBpbiBzdHJpbmcuXG4gICAgICAqIFN1Z2dlc3RlZCB0byB1c2UgYSBzdWZmaXggYF92YCB0byBpZGVudGlmeSBzdGF0ZW1lbnQgYXMgdXNpbmcgdmFyaWFibGVzIGFuZCByZXF1aXJlcyB0byBiZSB1c2VkXG4gICAgICAgIGluc2lkZSBhIGBkYi5zdGRfd2l0aF92YXJpYWJsZXMoKWAgY29udGV4dCBoYW5kbGVyLlxuICAgICAgKiBJbnNlcnQgc3RhdGVtZW50IHRha2VzIGNhcmUgb2YgdGhlIGltcGxlbWVudGF0aW9uIGRldGFpbCBvZiBhc3NpZ25pbmcgdGhlIG5leHQgdW5pcXVlIFJvd0lEOyBzaW5jZVxuICAgICAgICBpdHMgdmFsdWUgaXMgcGVyc2lzdGVkIGluIHRoZSBEQiwgaW5zZXJ0cyBjYW4gYmUgZG9uZSBhY3Jvc3Mgc2V2ZXJhbCBzZXNzaW9ucyB3aXRob3V0IG5lZWRpbmcgYW55XG4gICAgICAgIGFkZGl0aW9uYWwgY29kZSBiZXNpZGVzIHRoZSBjb250ZXh0IGhhbmRsZXIuXG4gICAgICAjIyNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIyMgTk9URSBwYXJ0IG9mIGBEYnJpYy5idWlsZGAgbGlzdDogIyMjXG4gICAgICBkYi5leGVjdXRlIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBwcmZ4X3dvcmRzIChcbiAgICAgICAgICByb3dpZCAgICAgdGV4dCAgdW5pcXVlICBub3QgbnVsbCxcbiAgICAgICAgICBlbiAgICAgICAgdGV4dCAgICAgICAgICBub3QgbnVsbCxcbiAgICAgICAgICBkZSAgICAgICAgdGV4dCAgICAgICAgICBub3QgbnVsbCxcbiAgICAgICAgcHJpbWFyeSBrZXkgKCByb3dpZCApLFxuICAgICAgICBjb25zdHJhaW50IFwizqljb25zdHJhaW50XzIyMlwiIGNoZWNrICggcm93aWQgcmVnZXhwICd0OndyZDpSPVxcXFxkKycgKSApO1wiXCJcIlxuICAgICAgIyMjIE5PVEUgcGFydCBvZiBgRGJyaWMuc3RhdGVtZW50c2Agb2JqZWN0OiAjIyNcbiAgICAgIGluc2VydF93b3JkX3YgPSBkYi5wcmVwYXJlIFNRTFwiXCJcImluc2VydCBpbnRvIHByZnhfd29yZHMgKCByb3dpZCwgZW4sIGRlICkgdmFsdWVzIChcbiAgICAgICAgICBwcmludGYoICd0OndyZDpSPSVkJywgc3RkX2dldF9uZXh0X2luX3NlcXVlbmNlKCAnc2VxOnByZnhfd29yZHNfcm93aWQnICkgKSxcbiAgICAgICAgICAkZW4sXG4gICAgICAgICAgJGRlICk7XCJcIlwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyMjIE5PVEUgcGFydCBvZiByZWJ1aWxkKCkgKD8sIHN0aWxsIHVuY2xlYXIpOiAjIyNcbiAgICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyA9PlxuICAgICAgICBkYi5zdGRfc2V0X3ZhcmlhYmxlICdzZXE6cHJmeF93b3Jkc19yb3dpZCcsIDEwMCwgKzEwMFxuICAgICAgICA7bnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMjIyBOT1RFIGluIHRoZSBhcHAgcHJvcGVyOiAjIyNcbiAgICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyA9PlxuICAgICAgICBpbnNlcnRfd29yZF92LnJ1biB7IGVuOiAnZG9nJywgIGRlOiAnSHVuZCcsICAgfVxuICAgICAgICBpbnNlcnRfd29yZF92LnJ1biB7IGVuOiAnY2F0JywgIGRlOiAnS2F0emUnLCAgfVxuICAgICAgICBpbnNlcnRfd29yZF92LnJ1biB7IGVuOiAnd29yZCcsIGRlOiAnV29ydCcsICAgfVxuICAgICAgICBpbnNlcnRfd29yZF92LnJ1biB7IGVuOiAnY2FsbCcsIGRlOiAncnVmZW4nLCAgfVxuICAgICAgICBpbnNlcnRfd29yZF92LnJ1biB7IGVuOiAnY2FsbCcsIGRlOiAnQW5ydWYnLCAgfVxuICAgICAgICBpbnNlcnRfd29yZF92LnJ1biB7IGVuOiAnYm9vaycsIGRlOiAnQnVjaCcsICAgfVxuICAgICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdmFyaWFibGVzID0gKGRiLl9zaG93X3ZhcmlhYmxlcyBjZmdfZG9fc2hvd192YXJpYWJsZXMgKVxuICAgIEBlcSAoIM6pYmJkYnJfMjIzID0gLT4gdmFyaWFibGVzWyAnc2VxOnByZnhfd29yZHNfcm93aWQnIF0/Lmd2ICApLCA3MDBcbiAgICAjIGVjaG8gJ86pYmJkYnJfMjI0Jywgcm93IGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBwcmZ4X3dvcmRzIG9yZGVyIGJ5IGRlO1wiXG4gICAgcm93cyA9IGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHByZnhfd29yZHMgb3JkZXIgYnkgZGU7XCJcbiAgICBAZXEgKCDOqWJiZGJyXzIyNSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OndyZDpSPTYwMCcsIGVuOiAnY2FsbCcsIGRlOiAnQW5ydWYnIH1cbiAgICBAZXEgKCDOqWJiZGJyXzIyNiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OndyZDpSPTcwMCcsIGVuOiAnYm9vaycsIGRlOiAnQnVjaCcgfVxuICAgIEBlcSAoIM6pYmJkYnJfMjI3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6d3JkOlI9MjAwJywgZW46ICdkb2cnLCBkZTogJ0h1bmQnIH1cbiAgICBAZXEgKCDOqWJiZGJyXzIyOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OndyZDpSPTMwMCcsIGVuOiAnY2F0JywgZGU6ICdLYXR6ZScgfVxuICAgIEBlcSAoIM6pYmJkYnJfMjI5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6d3JkOlI9NDAwJywgZW46ICd3b3JkJywgZGU6ICdXb3J0JyB9XG4gICAgQGVxICggzqliYmRicl8yMzAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDp3cmQ6Uj01MDAnLCBlbjogJ2NhbGwnLCBkZTogJ3J1ZmVuJyB9XG4gICAgQGVxICggzqliYmRicl8yMzEgPSAtPiByb3dzLm5leHQoKS5kb25lICksIHRydWVcbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfc3RyaWN0X21vZGU6IC0+XG4gICAgeyBsZXRzLFxuICAgICAgZnJlZXplLCAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfbGV0c2ZyZWV6ZXRoYXRfaW5mcmEoKS5zaW1wbGVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBkYiA9IERicmljLnJlYnVpbGQgJzptZW1vcnk6J1xuICAgICAgKCBkYi5wcmVwYXJlIFNRTFwicHJhZ21hIHN0cmljdCAgICAgICA9IG9uO1wiICAgICkucnVuKClcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJjcmVhdGUgdGFibGUgdCAoIGYgaW50ZWdlciApO1wiXG4gICAgICBkYi5leGVjdXRlIFNRTFwiaW5zZXJ0IGludG8gdCB2YWx1ZXMgKCAxMjM0ICk7XCJcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJpbnNlcnQgaW50byB0IHZhbHVlcyAoIDEyLjM0ICk7XCJcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJpbnNlcnQgaW50byB0IHZhbHVlcyAoICd3YXQnICk7XCJcbiAgICAgICMgZGVidWcgJ86pYmJkYnJfMjMyJywgKCByb3cuZiBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCBmIGZyb20gdDtcIiApXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGRiID0gRGJyaWMucmVidWlsZCAnOm1lbW9yeTonXG4gICAgICAoIGRiLnByZXBhcmUgU1FMXCJwcmFnbWEgc3RyaWN0ICAgICAgID0gb247XCIgICAgKS5ydW4oKVxuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMjMzID0gLT4gZGIuZXhlY3V0ZSBTUUxcImNyZWF0ZSB0YWJsZSB0ICggZiBpbnRlZ2VyLCBqIGpzb24gKSBzdHJpY3Q7XCIgKSwgL3Vua25vd24gZGF0YXR5cGUgZm9yIHRcXC5qL1xuICAgICAgZGIuZXhlY3V0ZSBTUUxcImNyZWF0ZSB0YWJsZSB0ICggZiBpbnRlZ2VyLCBqIGJsb2IgKSBzdHJpY3Q7XCJcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJpbnNlcnQgaW50byB0ICggZiApIHZhbHVlcyAoIDEyMzQgKTtcIlxuICAgICAgQGVxICggzqliYmRicl8yMzQgPSAtPiAoIGRiLmdldF9maXJzdCBTUUxcInNlbGVjdCB0eXBlb2YoIDEyICAgICkgYXMgdHlwZTtcIiApLnR5cGUgKSwgJ2ludGVnZXInXG4gICAgICBAZXEgKCDOqWJiZGJyXzIzNSA9IC0+ICggZGIuZ2V0X2ZpcnN0IFNRTFwic2VsZWN0IHR5cGVvZiggMTIuMzQgKSBhcyB0eXBlO1wiICkudHlwZSApLCAncmVhbCdcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjM2ID0gLT4gKCBkYi5nZXRfZmlyc3QgU1FMXCJzZWxlY3QgdHlwZW9mKCAnd2F0JyApIGFzIHR5cGU7XCIgKS50eXBlICksICd0ZXh0J1xuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMjM3ID0gLT4gZGIuZXhlY3V0ZSBTUUxcImluc2VydCBpbnRvIHQgKCBmICkgdmFsdWVzICggMTIuMzQgKTtcIiApLCAvY2Fubm90IHN0b3JlIFJFQUwgdmFsdWUgaW4gSU5URUdFUiBjb2x1bW4vXG4gICAgICBAdGhyb3dzICggzqliYmRicl8yMzggPSAtPiBkYi5leGVjdXRlIFNRTFwiaW5zZXJ0IGludG8gdCAoIGYgKSB2YWx1ZXMgKCAnd2F0JyApO1wiICksIC9jYW5ub3Qgc3RvcmUgVEVYVCB2YWx1ZSBpbiBJTlRFR0VSIGNvbHVtbi9cbiAgICAgICMgZGVidWcgJ86pYmJkYnJfMjM5JywgKCByb3cuZiBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCBmIGZyb20gdDtcIiApXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2R5bmFtaWNfYnVpbGRfcHJvcGVydGllczogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBEYl8xIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICAgIEBwcmVmaXg6ICd3cmQnXG4gICAgICAgIEBidWlsZDogW1xuICAgICAgICAgIC0+IFNRTFwiXCJcImNyZWF0ZSB0YWJsZSAje0lETiBcIiN7QGNmZy5wcmVmaXh9X3dvcmRzXCJ9ICggdCB0ZXh0ICk7XCJcIlwiXG4gICAgICAgICAgLT4gU1FMXCJcIlwiaW5zZXJ0IGludG8gI3tJRE4gXCIje0BjZmcucHJlZml4fV93b3Jkc1wifSAoIHQgKSB2YWx1ZXMgKCAn5rC0ICjjgb/jgZopJyApO1wiXCJcIlxuICAgICAgICAgIC0+IFNRTFwiXCJcImluc2VydCBpbnRvICN7SUROIFwiI3tAY2ZnLnByZWZpeH1fd29yZHNcIn0gKCB0ICkgdmFsdWVzICggJ+mjn+OBueeJqSAo44Gf44G544KC44GuKScgKTtcIlwiXCJcbiAgICAgICAgICBdXG4gICAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICAgIHNlbGVjdF93b3JkczogLT4gU1FMXCJcIlwic2VsZWN0ICogZnJvbSAje0lETiBcIiN7QGNmZy5wcmVmaXh9X3dvcmRzXCJ9XCJcIlwiXG4gICAgICBkYiA9IERiXzEucmVidWlsZCgpXG4gICAgICByZWxhdGlvbl9uYW1lcyA9IG5ldyBTZXQgKCByb3cubmFtZSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gc3RkX3JlbGF0aW9ucztcIiApXG4gICAgICBkZWJ1ZyAnzqliYmRicl8yNDAnLCByZWxhdGlvbl9uYW1lc1xuICAgICAgZGVidWcgJ86pYmJkYnJfMjQxJywgZGIuY29uc3RydWN0b3IucHJlZml4XG4gICAgICBkZWJ1ZyAnzqliYmRicl8yNDInLCBkYi5jZmdcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjQzID0gLT4gcmVsYXRpb25fbmFtZXMuaGFzICd3cmRfd29yZHMnICAgICAgKSwgdHJ1ZVxuICAgICAgcm93cyA9IGRiLndhbGsgU1FMXCJcIlwic2VsZWN0ICogZnJvbSAje0lETiBcIiN7RGJfMS5wcmVmaXh9X3dvcmRzXCJ9O1wiXCJcIlxuICAgICAgQGVxICggzqliYmRicl8yNDQgPSAtPiByb3dzLm5leHQoKS52YWx1ZS50ICAgICAgICAgICAgICAgICApLCAn5rC0ICjjgb/jgZopJ1xuICAgICAgQGVxICggzqliYmRicl8yNDUgPSAtPiByb3dzLm5leHQoKS52YWx1ZS50ICAgICAgICAgICAgICAgICApLCAn6aOf44G554mpICjjgZ/jgbnjgoLjga4pJ1xuICAgICAgQGVxICggzqliYmRicl8yNDYgPSAtPiByb3dzLm5leHQoKS5kb25lICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICByb3dzID0gZGIud2FsayBkYi5zdGF0ZW1lbnRzLnNlbGVjdF93b3Jkc1xuICAgICAgQGVxICggzqliYmRicl8yNDcgPSAtPiByb3dzLm5leHQoKS52YWx1ZS50ICAgICAgICAgICAgICAgICApLCAn5rC0ICjjgb/jgZopJ1xuICAgICAgQGVxICggzqliYmRicl8yNDggPSAtPiByb3dzLm5leHQoKS52YWx1ZS50ICAgICAgICAgICAgICAgICApLCAn6aOf44G554mpICjjgZ/jgbnjgoLjga4pJ1xuICAgICAgQGVxICggzqliYmRicl8yNDkgPSAtPiByb3dzLm5leHQoKS5kb25lICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX3BsdWdpbnNfYWNxdWlzaXRpb246IC0+XG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgIH0gPSAoIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvdW5zdGFibGUtcnByLXR5cGVfb2YtYnJpY3MnICkucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGdldF9hbGxfaW5fcHJvdG90eXBlX2NoYWluLFxuICAgICAgZ2V0X3Byb3RvdHlwZV9jaGFpbiwgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9wcm90b3R5cGUtdG9vbHMnXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBuYnJfbnVtYmVyX3BsdWdpbiA9XG4gICAgICBuYW1lOiAgICduYnJfbnVtYmVyX3BsdWdpbicgIyMjIE5PVEUgaW5mb3JtYXRpdmUsIG5vdCBlbmZvcmNlZCAjIyNcbiAgICAgIHByZWZpeDogJ25icicgICAgICAgICAgICAgICAjIyMgTk9URSBpbmZvcm1hdGl2ZSwgbm90IGVuZm9yY2VkICMjI1xuICAgICAgZXhwb3J0czpcbiAgICAgICAgYnVpbGQ6IFtcbiAgICAgICAgICBTUUxcImNyZWF0ZSB0YWJsZSBuYnJfbnVtYmVycyAoIG51bWJlciBpbnRlZ2VyICk7XCJcbiAgICAgICAgICBdXG4gICAgICAgIHN0YXRlbWVudHM6XG4gICAgICAgICAgbmJyX2luc2VydF9udW1iZXI6ICAgICAgICAgIFNRTFwiaW5zZXJ0IGludG8gbmJyX251bWJlcnMgdmFsdWVzICggJG51bWJlciApO1wiXG4gICAgICAgICAgbmJyX3NlbGVjdF9udW1iZXJzOiAgICAgICAgIFNRTFwic2VsZWN0ICogZnJvbSBuYnJfbnVtYmVycyBvcmRlciBieSBudW1iZXI7XCJcbiAgICAgICAgICBuYnJfc2VsZWN0X3NxdWFyZV9udW1iZXJzOiAgU1FMXCJzZWxlY3QgbmJyX3NxdWFyZSggbnVtYmVyICkgZnJvbSBuYnJfbnVtYmVycyBvcmRlciBieSBudW1iZXI7XCJcbiAgICAgICAgZnVuY3Rpb25zOlxuICAgICAgICAgIG5icl9zcXVhcmU6XG4gICAgICAgICAgICB2YWx1ZTogKCBudW1iZXIgKSAtPiBAbmJyX2dldF9zcXVhcmUgbnVtYmVyXG4gICAgICAgIG1ldGhvZHM6XG4gICAgICAgICAgbmJyX2dldF9zcXVhcmU6ICggbnVtYmVyICkgLT4gbnVtYmVyICoqIDJcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG90aGVyX3BsdWdpbiA9XG4gICAgICBwcmVmaXg6ICdvdGhlcidcbiAgICAgIGV4cG9ydHM6XG4gICAgICAgIHN0YXRlbWVudHM6XG4gICAgICAgICAgb3RoZXJfc2VsZWN0X3dhdDogU1FMXCJzZWxlY3QgMSBhcyB3YXQ7XCJcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRleHRfcGx1Z2luID1cbiAgICAgIG5hbWU6ICAgJ3RleHQtcGx1Z2luJ1xuICAgICAgcHJlZml4OiAndHh0J1xuICAgICAgZXhwb3J0czpcbiAgICAgICAgZnVuY3Rpb25zOlxuICAgICAgICAgIHR4dF91cHBlcjpcbiAgICAgICAgICAgIHZhbHVlOiAgKCB0ZXh0ICkgLT4gdGV4dC50b1VwcGVyQ2FzZSgpXG4gICAgICAgIHN0YXRlbWVudHM6XG4gICAgICAgICAgdHh0X3NlbGVjdF9vbmU6IFNRTFwic2VsZWN0IDEgYXMgb25lO1wiXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYl8xIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAcHJlZml4OiAgJ2RiMSdcbiAgICAgIEBwbHVnaW5zOiBbXG4gICAgICAgIG90aGVyX3BsdWdpblxuICAgICAgICAncHJvdG90eXBlcydcbiAgICAgICAgbmJyX251bWJlcl9wbHVnaW5cbiAgICAgICAgJ21lJ1xuICAgICAgICB0ZXh0X3BsdWdpblxuICAgICAgICBdXG4gICAgICBAZXhwb3J0czoge31cbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcImNyZWF0ZSB0YWJsZSB4ICggaWQgaW50ZWdlciApO1wiXG4gICAgICAgIF1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBkYjFfc2VsZWN0X3g6IFNRTFwic2VsZWN0ICogZnJvbSB4O1wiXG4gICAgICBAZnVuY3Rpb25zOlxuICAgICAgICBkYjFfY3ViZTpcbiAgICAgICAgICB2YWx1ZTogKCB4ICkgLT4geCAqKiAzXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkYiA9IERiXzEucmVidWlsZCgpXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICByZXN1bHQgID0gW11cbiAgICBmb3IgeyB0eXBlLCBjb250cmlidXRvciwgfSBpbiBkYi5fZ2V0X2FjcXVpc2l0aW9uX2NoYWluKClcbiAgICAgIHJlc3VsdC5wdXNoIFwiWyN7dHlwZX1dI3tjb250cmlidXRvci5uYW1lID8gJyhhbm9ueW1vdXMpJ31cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqliYmRicl8yNTAgPSAtPiByZXN1bHQgKSwgW1xuICAgICAgJ1twbHVnaW5dKGFub255bW91cyknXG4gICAgICAnW3Byb3RvdHlwZV1EYnJpY19zdGRfYmFzZSdcbiAgICAgICdbcHJvdG90eXBlXURicmljX3N0ZF92YXJpYWJsZXMnXG4gICAgICAnW3Byb3RvdHlwZV1EYnJpY19zdGQnXG4gICAgICAnW3BsdWdpbl1uYnJfbnVtYmVyX3BsdWdpbidcbiAgICAgICdbcHJvdG90eXBlXURiXzEnXG4gICAgICAnW3BsdWdpbl10ZXh0LXBsdWdpbicgXVxuICAgIGZvciB7IHR5cGUsIGNvbnRyaWJ1dG9yLCB9IGluIGRiLl9nZXRfYWNxdWlzaXRpb25fY2hhaW4oKVxuICAgICAgaWYgdHlwZSBpcyAncGx1Z2luJ1xuICAgICAgICBpbmZvICfOqWJiZGJyXzI1MScsIFwiWyN7dHlwZX1dI3tjb250cmlidXRvci5uYW1lID8gJyhhbm9ueW1vdXMpJ31cIiwgT2JqZWN0LmtleXMgY29udHJpYnV0b3IuZXhwb3J0c1xuICAgICAgZWxzZVxuICAgICAgICAoIGlmICggY29udHJpYnV0b3IgaXMgZGIuY29uc3RydWN0b3IgKSB0aGVuIGhlbHAgZWxzZSB1cmdlICkgJ86pYmJkYnJfMjUyJywgXCJbI3t0eXBlfV0je2NvbnRyaWJ1dG9yLm5hbWUgPyAnKGFub255bW91cyknfVwiXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjb250cmlidXRpb25zID0gZGIuX2NvbGxlY3RfY29udHJpYnV0b3JfcHJvcGVydGllcygpXG4gICAgQGVxICggzqliYmRicl8yNTMgPSAtPiAoIE9iamVjdC5rZXlzIGNvbnRyaWJ1dGlvbnMgKS5zb3J0KCkgKSwgW1xuICAgICAgJ2FnZ3JlZ2F0ZV9mdW5jdGlvbnMnXG4gICAgICAnYnVpbGQnXG4gICAgICAnZnVuY3Rpb25zJ1xuICAgICAgJ21ldGhvZHMnXG4gICAgICAnc3RhdGVtZW50cydcbiAgICAgICd0YWJsZV9mdW5jdGlvbnMnXG4gICAgICAndmlydHVhbF90YWJsZXMnXG4gICAgICAnd2luZG93X2Z1bmN0aW9ucycgXVxuICAgIGRlYnVnICfOqWJiZGJyXzI1NCcsIHRvZ2dsZSAnYnVpbGQ6ICAgICAgICAgICAgICAgJywgT2JqZWN0LmtleXMgY29udHJpYnV0aW9ucy5idWlsZFxuICAgIGRlYnVnICfOqWJiZGJyXzI1NScsIHRvZ2dsZSAnYWdncmVnYXRlX2Z1bmN0aW9uczogJywgT2JqZWN0LmtleXMgY29udHJpYnV0aW9ucy5hZ2dyZWdhdGVfZnVuY3Rpb25zXG4gICAgZGVidWcgJ86pYmJkYnJfMjU2JywgdG9nZ2xlICdmdW5jdGlvbnM6ICAgICAgICAgICAnLCBPYmplY3Qua2V5cyBjb250cmlidXRpb25zLmZ1bmN0aW9uc1xuICAgIGRlYnVnICfOqWJiZGJyXzI1NycsIHRvZ2dsZSAnbWV0aG9kczogICAgICAgICAgICAgJywgT2JqZWN0LmtleXMgY29udHJpYnV0aW9ucy5tZXRob2RzXG4gICAgZGVidWcgJ86pYmJkYnJfMjU4JywgdG9nZ2xlICdzdGF0ZW1lbnRzOiAgICAgICAgICAnLCBPYmplY3Qua2V5cyBjb250cmlidXRpb25zLnN0YXRlbWVudHNcbiAgICBkZWJ1ZyAnzqliYmRicl8yNTknLCB0b2dnbGUgJ3RhYmxlX2Z1bmN0aW9uczogICAgICcsIE9iamVjdC5rZXlzIGNvbnRyaWJ1dGlvbnMudGFibGVfZnVuY3Rpb25zXG4gICAgZGVidWcgJ86pYmJkYnJfMjYwJywgdG9nZ2xlICd2aXJ0dWFsX3RhYmxlczogICAgICAnLCBPYmplY3Qua2V5cyBjb250cmlidXRpb25zLnZpcnR1YWxfdGFibGVzXG4gICAgZGVidWcgJ86pYmJkYnJfMjYxJywgdG9nZ2xlICd3aW5kb3dfZnVuY3Rpb25zOiAgICAnLCBPYmplY3Qua2V5cyBjb250cmlidXRpb25zLndpbmRvd19mdW5jdGlvbnNcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEBlcSAoIM6pYmJkYnJfMjYyID0gLT4gT2JqZWN0LmtleXMgY29udHJpYnV0aW9ucy5mdW5jdGlvbnMgKSwgW1xuICAgICAgJ3JlZ2V4cCdcbiAgICAgICdzdGRfaXNfdWNfbm9ybWFsJ1xuICAgICAgJ3N0ZF9ub3JtYWxpemVfdGV4dCdcbiAgICAgICdzdGRfbm9ybWFsaXplX2pzb25fb2JqZWN0J1xuICAgICAgJ3N0ZF9nZXRfbmV4dF9pbl9zZXF1ZW5jZSdcbiAgICAgICdzdGRfZ2V0X3ZhcmlhYmxlJ1xuICAgICAgJ25icl9zcXVhcmUnXG4gICAgICAnZGIxX2N1YmUnXG4gICAgICAndHh0X3VwcGVyJyBdXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBAZXEgKCDOqWJiZGJyXzI2MyA9IC0+IE9iamVjdC5rZXlzIGNvbnRyaWJ1dGlvbnMuc3RhdGVtZW50cyApLCBbXG4gICAgICAnb3RoZXJfc2VsZWN0X3dhdCdcbiAgICAgICdzdGRfZ2V0X3NjaGVtYSdcbiAgICAgICdzdGRfZ2V0X3RhYmxlcydcbiAgICAgICdzdGRfZ2V0X3ZpZXdzJ1xuICAgICAgJ3N0ZF9nZXRfcmVsYXRpb25zJ1xuICAgICAgJ3N0ZF9nZXRfZnVuY3Rpb25zJ1xuICAgICAgJ3N0ZF9zZXRfdmFyaWFibGUnXG4gICAgICAnc3RkX2dldF92YXJpYWJsZXMnXG4gICAgICAnbmJyX2luc2VydF9udW1iZXInXG4gICAgICAnbmJyX3NlbGVjdF9udW1iZXJzJ1xuICAgICAgJ25icl9zZWxlY3Rfc3F1YXJlX251bWJlcnMnXG4gICAgICAnZGIxX3NlbGVjdF94J1xuICAgICAgJ3R4dF9zZWxlY3Rfb25lJyBdXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBmdW5jdGlvbl9uYW1lcyAgPSBuZXcgU2V0ICggci5uYW1lIGZvciByIGZyb20gZGIud2FsayBTUUxcInNlbGVjdCBuYW1lIGZyb20gc3RkX2Z1bmN0aW9ucztcIiApXG4gICAgdGFibGVfbmFtZXMgICAgID0gbmV3IFNldCAoIHIubmFtZSBmb3IgciBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgbmFtZSBmcm9tIHN0ZF90YWJsZXM7XCIgKVxuICAgIEBlcSAoIM6pYmJkYnJfMjY0ID0gLT4gUmVmbGVjdC5oYXMgZGIuc3RhdGVtZW50cywgICdzdGRfZ2V0X3ZpZXdzJyAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqliYmRicl8yNjUgPSAtPiBSZWZsZWN0LmhhcyBkYi5zdGF0ZW1lbnRzLCAgJ25icl9pbnNlcnRfbnVtYmVyJyAgICksIHRydWVcbiAgICBAZXEgKCDOqWJiZGJyXzI2NiA9IC0+IHR5cGVfb2YgZGIubmJyX2dldF9zcXVhcmUgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgIEBlcSAoIM6pYmJkYnJfMjY3ID0gLT4gZGIubmJyX2dldF9zcXVhcmUgMTAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAxMDBcbiAgICBAZXEgKCDOqWJiZGJyXzI2OCA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnbmJyX3NxdWFyZScgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pYmJkYnJfMjY5ID0gLT4gZGIuZ2V0X2ZpcnN0IFNRTFwic2VsZWN0IG5icl9zcXVhcmUoIDExICkgYXMgcztcIiAgICksIHsgczogMTIxLCB9XG4gICAgQGVxICggzqliYmRicl8yNzAgPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ25icl9udW1iZXJzJyAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWJiZGJyXzI3MSA9IC0+IHRhYmxlX25hbWVzLmhhcyAneCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX3VzaW5nX21ldGhvZHNfaG9sZGVyX3RvX2VuYWJsZV9lcnNhdHpfc3VwZXIgPSAtPlxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsYXNzIEFcbiAgICBmOiAoIG1lc3NhZ2UgKSAtPiBoZWxwICfOqWJiZGJyXzMyMCcsIHJwciBtZXNzYWdlXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2xhc3MgQiBleHRlbmRzIEFcbiAgICBfc3VwZXI6ICggbmFtZSwgUC4uLiApIC0+IHN1cGVyWyBuYW1lIF0gUC4uLlxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMjIyBOT1RFIGFraW4gdG8gdGhlIGBtZXRob2RzYCBwcm9wZXJ0eSBvZiBwbHVnaW4gb2JqZWN0cyAjIyNcbiAgbWV0aG9kcyA9IHtcbiAgICBmOiAoIG1lc3NhZ2UgKSAtPiBAX3N1cGVyICdmJywgbWVzc2FnZTsgcmV0dXJuIDhcbiAgICB9XG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyMjIE5PVEUgd2UgZm9ybSBhIHN5bnRoZXRpYyBjbGFzcyB0byBhY3QgYXMgYSAnaG9sZGVyJyBmb3Igb3VyIG1ldGhvZHM6ICMjI1xuICBjbGFzcyBNZXRob2RzX2hvbGRlciBleHRlbmRzIEJcbiAgaW5zdGFuY2UgPSBuZXcgTWV0aG9kc19ob2xkZXIoKVxuICBpbnN0YW5jZS5mID0gbWV0aG9kcy5mXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyMjIE5PVEUgdXNpbmcgdGhlIEVyc2F0eiBTdXBlcjogIyMjXG4gIHJlc3VsdCA9IGluc3RhbmNlLmYgXCJteSBtZXNzYWdlXCIgIyBwcmludHMgYG15IG1lc3NhZ2VgXG4gIGluZm8gJ86pYmJkYnJfMzIxJywgeyByZXN1bHQsIH0gIyBwcmludHMgYHsgcmVzdWx0OiA4LCB9YFxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIDtudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGRvX2NvdmVyYWdlID0gdHJ1ZVxuICBkb19jb3ZlcmFnZSA9IGZhbHNlXG4gIGlmIGRvX2NvdmVyYWdlXG4gICAgeyBDb3ZlcmFnZV9hbmFseXplciwgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvY292ZXJhZ2UtYW5hbHl6ZXInXG4gICAgY2EgPSBuZXcgQ292ZXJhZ2VfYW5hbHl6ZXIoKVxuICAgIGNhLndyYXBfY2xhc3MgRGJyaWNfc3RkXG4gIHsgd3JhcF9tZXRob2RzX29mX3Byb3RvdHlwZXMsIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL3Byb3RvdHlwZS10b29scydcbiAgIyB3cmFwX21ldGhvZHNfb2ZfcHJvdG90eXBlcyBEYnJpY19zdGQsICh7IGZxbmFtZSwgY2FsbG1lLCBQLCB9KSAtPlxuICAjICAgZGVidWcgJ86pYmJkYnJfMzIyJywgZnFuYW1lICMsIFBcbiAgIyAgIHJldHVybiBjYWxsbWUoKVxuICAjIGRiID0gbmV3IERicmljX3N0ZCAnOm1lbW9yeTonLCB7IHJlYnVpbGQ6IHRydWUsIH1cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2hvYXJkX3BsdWdpbl9tb2RlbDogdGVzdHMuZGJyaWNfaG9hcmRfcGx1Z2luX21vZGVsLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkYnJpY19keW5hbWljX2J1aWxkX3Byb3BlcnRpZXM6IHRlc3RzLmRicmljX2R5bmFtaWNfYnVpbGRfcHJvcGVydGllcywgfVxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIGRvX2NvdmVyYWdlXG4gICAgd2FybiAnzqliYmRicl8zMjMnLCBcIm5vdCBjb3ZlcmVkOlwiLCByZXZlcnNlIG5hbWUgZm9yIG5hbWUgaW4gY2EudW51c2VkX25hbWVzIGlmIGNhLnVudXNlZF9uYW1lcy5sZW5ndGggPiAwXG4gICAgIyBoZWxwICfOqWJiZGJyXzMyNCcsIGNhLnVzZWRfbmFtZXNcbiAgICAjIHVyZ2UgJ86pYmJkYnJfMzI1JywgY291bnQsIG5hbWVzIGZvciBjb3VudCwgbmFtZXMgb2YgY2EubmFtZXNfYnlfY291bnRzXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgO251bGxcbiJdfQ==
