(async function() {
  'use strict';
  var Dbric, Dbric_std, FS, False, GTNG, GUY, IDN, LIT, PATH, SFMODULES, SQL, Test, True, VEC, _toggle, alert, blue, bold, debug, demo_using_methods_holder_to_enable_ersatz_super, echo, f, gold, green, grey, help, info, inspect, internals, log, nfa, plain, praise, red, remove, reverse, rpr, tests, toggle, unquote_name, urge, warn, whisper, white;

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
      var Hoard_user, hoard_plugin, hrd, names, row, Ωbbdbr_279, Ωbbdbr_280, Ωbbdbr_281, Ωbbdbr_282, Ωbbdbr_283, Ωbbdbr_284, Ωbbdbr_285;
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
              runs_rowid_regexp: '0x00_0000',
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
  constraint "Ωconstraint_273" check ( rowid regexp ${LIT(cfg.runs_rowid_regexp)} ),
  constraint "Ωconstraint_274" check ( lo between ${LIT(cfg.first_point)} and ${LIT(cfg.last_point)} ),
  constraint "Ωconstraint_275" check ( hi between ${LIT(cfg.first_point)} and ${LIT(cfg.last_point)} ),
  constraint "Ωconstraint_276" check ( lo <= hi )
  -- constraint "Ωconstraint_277" check ( rowid regexp '^.*$' )
  );`);
            //-------------------------------------------------------------------------------------------------------
            return R;
          },
          statements: {
            hrd_yyy: SQL`select 1 as n;`
          }
        }
      };
      Hoard_user = (function() {
        //.......................................................................................................
        class Hoard_user extends Dbric_std {};

        Hoard_user.prefix = 'jzr';

        Hoard_user.plugins = ['prototypes', hoard_plugin, 'me'];

        return Hoard_user;

      }).call(this);
      //.......................................................................................................
      hrd = new Hoard_user({
        rebuild: true
      });
      // debug 'Ωbbdbr_278', row.name for row from hrd.walk hrd.statements.std_get_relations
      names = new Set((function() {
        var results;
        results = [];
        for (row of hrd.walk(hrd.statements.std_get_relations)) {
          results.push(row.name);
        }
        return results;
      })());
      this.eq((Ωbbdbr_279 = function() {
        return names.has('hrd_hoard_runs');
      }), true);
      this.eq((Ωbbdbr_280 = function() {
        return names.has('hrd_hoard_scatters');
      }), true);
      this.eq((Ωbbdbr_281 = function() {
        return names.has('std_functions');
      }), true);
      this.eq((Ωbbdbr_282 = function() {
        return names.has('std_relations');
      }), true);
      this.eq((Ωbbdbr_283 = function() {
        return names.has('std_tables');
      }), true);
      this.eq((Ωbbdbr_284 = function() {
        return names.has('std_variables');
      }), true);
      this.eq((Ωbbdbr_285 = function() {
        return names.has('std_views');
      }), true);
      // @eq ( Ωbbdbr_286 = -> hrd.get_all hrd.statements.hrd_yyy ), [ { n: 1, }, ]
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
        return help('Ωbbdbr_287', rpr(message));
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
    info('Ωbbdbr_288', {result}); // prints `{ result: 8, }`
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
      //   debug 'Ωbbdbr_289', fqname #, P
      //   return callme()
      // db = new Dbric_std ':memory:', { rebuild: true, }
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
            warn('Ωbbdbr_290', "not covered:", reverse(name));
          }
        }
      }
      // help 'Ωbbdbr_291', ca.used_names
      // urge 'Ωbbdbr_292', count, names for count, names of ca.names_by_counts
      //=========================================================================================================
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxnREFBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxZQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQzs7RUFZQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQXpCQTs7O0VBMkJBLENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLDRDQUFSLENBQTVCOztFQUNBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLG1DQUFSOztFQUM1QixFQUFBLEdBQTRCLE9BQUEsQ0FBUSxTQUFSOztFQUM1QixJQUFBLEdBQTRCLE9BQUEsQ0FBUSxXQUFSLEVBaEM1Qjs7O0VBa0NBLENBQUEsQ0FBRSxLQUFGLEVBQ0UsU0FERixFQUVFLEdBRkYsRUFHRSxHQUhGLEVBSUUsR0FKRixFQUtFLEdBTEYsRUFNRSxTQU5GLEVBT0UsSUFQRixFQVFFLEtBUkYsRUFTRSxZQVRGLENBQUEsR0FTNEIsT0FBQSxDQUFRLDZDQUFSLENBVDVCLEVBbENBOzs7RUE4Q0EsT0FBQSxHQUFVOztFQUNWLE1BQUEsR0FBUyxRQUFBLENBQUEsR0FBRSxDQUFGLENBQUE7SUFDUCxPQUFBLEdBQVUsQ0FBRSxPQUFBLEdBQVUsQ0FBWixDQUFBLEdBQWtCO0FBQzVCLFdBQU8sQ0FBSyxPQUFBLEtBQVcsQ0FBZCxHQUFxQixJQUFyQixHQUErQixJQUFqQyxDQUFBLENBQXdDLEdBQUEsQ0FBeEM7RUFGQSxFQS9DVDs7O0VBb0RBLE1BQUEsR0FBUyxRQUFBLENBQUUsSUFBRixDQUFBO0FBQ1QsUUFBQTtBQUFFO01BQ0UsRUFBRSxDQUFDLFVBQUgsQ0FBYyxJQUFkO01BQ0EsSUFBQSxDQUFLLFlBQUwsRUFBbUIsQ0FBQSxRQUFBLENBQUEsQ0FBVyxHQUFBLENBQUksSUFBSixDQUFYLENBQUEsQ0FBbkIsRUFGRjtLQUdBLGNBQUE7TUFBTTtNQUNKLElBQW1CLEtBQUssQ0FBQyxJQUFOLEtBQWMsUUFBakM7UUFBQSxNQUFNLE1BQU47T0FERjtLQUhGOztBQU1FLFdBQU87RUFQQSxFQXBEVDs7O0VBK0RBLElBQUMsQ0FBQSxLQUFELEdBQVMsS0FBQSxHQUdQLENBQUE7O0lBQUEsVUFBQSxFQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQ2QsVUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQTs7TUFDSSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsU0FBUyxDQUFDLE9BQVYsQ0FBa0IsWUFBbEI7TUFBSCxDQUFmLENBQVIsRUFBaUUsVUFBakU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsWUFBQSxDQUFhLEdBQWI7TUFBSCxDQUFmLENBQVIsRUFBaUUsR0FBakU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsWUFBQSxDQUFhLEtBQWI7TUFBSCxDQUFmLENBQVIsRUFBaUUsR0FBakU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsWUFBQSxDQUFhLEtBQWI7TUFBSCxDQUFmLENBQVIsRUFBaUUsS0FBakU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsWUFBQSxDQUFhLE9BQWI7TUFBSCxDQUFmLENBQVIsRUFBaUUsS0FBakU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsWUFBQSxDQUFhLFNBQWI7TUFBSCxDQUFmLENBQVIsRUFBaUUsTUFBakU7TUFDQSxJQUFDLENBQUEsTUFB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Q0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENB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QUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFH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LFdBQUg7UUFDRSxJQUErRSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQWhCLEdBQXlCLENBQXhHO0FBQUE7VUFBQSxLQUFBLHFDQUFBOztZQUFBLElBQUEsQ0FBSyxZQUFMLEVBQW1CLGNBQW5CLEVBQW1DLE9BQUEsQ0FBUSxJQUFSLENBQW5DO1VBQUEsQ0FBQTtTQURGO09BbkJGOzs7O2FBd0JHO0lBekJxQyxDQUFBLElBQXhDOztBQWgzQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtZGJyaWMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG57IERicmljLFxuICBEYnJpY19zdGQsXG4gIElETixcbiAgTElULFxuICBTUUwsXG4gIFZFQyxcbiAgaW50ZXJuYWxzLFxuICBUcnVlLFxuICBGYWxzZSxcbiAgdW5xdW90ZV9uYW1lLCAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2RicmljJ1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbl90b2dnbGUgPSAwXG50b2dnbGUgPSAoIFAuLi4gKSAtPlxuICBfdG9nZ2xlID0gKCBfdG9nZ2xlICsgMSApICUgMlxuICByZXR1cm4gKCBpZiBfdG9nZ2xlIGlzIDAgdGhlbiBibHVlIGVsc2UgZ29sZCApIFAuLi5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5yZW1vdmUgPSAoIHBhdGggKSAtPlxuICB0cnlcbiAgICBGUy51bmxpbmtTeW5jIHBhdGhcbiAgICBoZWxwICfOqWJiZGJyX19fMScsIFwicmVtb3ZlZCAje3JwciBwYXRofVwiXG4gIGNhdGNoIGVycm9yXG4gICAgdGhyb3cgZXJyb3IgdW5sZXNzIGVycm9yLmNvZGUgaXMgJ0VOT0VOVCdcbiAgICAjIHVyZ2UgJ86pYmJkYnJfX18yJywgXCJubyBzdWNoIEZTIG9iamVjdDogI3tycHIgcGF0aH1cIlxuICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfZXNxbDogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fMyA9IC0+IGludGVybmFscy50eXBlX29mIHVucXVvdGVfbmFtZSAgICAgICksICdmdW5jdGlvbidcbiAgICBAZXEgICAgICggzqliYmRicl9fXzQgPSAtPiB1bnF1b3RlX25hbWUgJ3gnICAgICAgICAgICAgICAgICAgICApLCAneCdcbiAgICBAZXEgICAgICggzqliYmRicl9fXzUgPSAtPiB1bnF1b3RlX25hbWUgJ1wieFwiJyAgICAgICAgICAgICAgICAgICksICd4J1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fNiA9IC0+IHVucXVvdGVfbmFtZSAnYWJjJyAgICAgICAgICAgICAgICAgICksICdhYmMnXG4gICAgQGVxICAgICAoIM6pYmJkYnJfX183ID0gLT4gdW5xdW90ZV9uYW1lICdcImFiY1wiJyAgICAgICAgICAgICAgICApLCAnYWJjJ1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fOCA9IC0+IHVucXVvdGVfbmFtZSAnXCJhYlwiXCJjXCInICAgICAgICAgICAgICApLCAnYWJcImMnXG4gICAgQHRocm93cyAoIM6pYmJkYnJfX185ID0gLT4gdW5xdW90ZV9uYW1lICcnICAgICAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgbm9uLWVtcHR5IHRleHQsIGdvdCBhbiBlbXB0eSB0ZXh0L1xuICAgIEB0aHJvd3MgKCDOqWJiZGJyX18xMCA9IC0+IHVucXVvdGVfbmFtZSAnXCInICAgICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBxdW90ZWQgbm9uLWVtcHR5IHRleHQsIGdvdCBhIHF1b3RlL1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX18xMSA9IC0+IHVucXVvdGVfbmFtZSAnXCJcIicgICAgICAgICAgICAgICAgICAgKSwgJycgIyMjIE5PVEUgU1FMaXRlIGRvZXMgYWNjZXB0IGEgcXVvdGVkIGVtcHR5IHN0cmluZyBhcyBuYW1lICMjI1xuICAgIEB0aHJvd3MgKCDOqWJiZGJyX18xMiA9IC0+IHVucXVvdGVfbmFtZSBmYWxzZSAgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHRleHQsIGdvdCBhIGJvb2xlYW4vXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgICAgICggzqliYmRicl9fMTMgPSAtPiBJRE4gJ2FiYycgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnXCJhYmNcIidcbiAgICBAZXEgICAgICggzqliYmRicl9fMTQgPSAtPiBJRE4gJ0FcImJjXCInICAgICAgICAgICAgICAgICAgICAgICAgICksICdcIkFcIlwiYmNcIlwiXCInXG4gICAgQGVxICAgICAoIM6pYmJkYnJfXzE1ID0gLT4gTElUICdhYmMnICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgXCInYWJjJ1wiXG4gICAgQGVxICAgICAoIM6pYmJkYnJfXzE2ID0gLT4gTElUIFwiQSdiYydcIiAgICAgICAgICAgICAgICAgICAgICAgICApLCBcIidBJydiYycnJ1wiXG4gICAgQHRocm93cyAoIM6pYmJkYnJfXzE3ID0gLT4gVkVDICdhYmMnICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgbGlzdC9cbiAgICBAZXEgICAgICggzqliYmRicl9fMTggPSAtPiBWRUMgWyAnYWJjJyBdICAgICAgICAgICAgICAgICAgICAgICApLCBcIlwiXCIoICdhYmMnIClcIlwiXCJcbiAgICBAZXEgICAgICggzqliYmRicl9fMTkgPSAtPiBWRUMgWyAnYWJjJywgMSwgdHJ1ZSwgZmFsc2UsIF0gICAgICApLCBcIlwiXCIoICdhYmMnLCAxLCAxLCAwIClcIlwiXCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19zdGQ6IC0+XG4gICAgeyB0ZW1wLCAgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90ZW1wKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRlbXAud2l0aF9kaXJlY3RvcnkgeyBrZWVwOiBmYWxzZSwgfSwgKHsgcGF0aDogZm9sZGVyX3BhdGgsIH0pID0+XG4gICAgICAjIGZvbGRlcl9wYXRoID0gJy90bXAvYnJpY2JyYWMtdGVzdCcgIyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcbiAgICAgIGRiX3BhdGggPSBQQVRILmpvaW4gZm9sZGVyX3BhdGgsICdicmljYWJyYWMuc3FsaXRlJ1xuICAgICAgcmVtb3ZlIGRiX3BhdGhcbiAgICAgICMgaGVscCAnzqliYmRicl9fMjAnLCB7IGRiX3BhdGgsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBuZXcgRGJyaWMgZGJfcGF0aCwgeyByZWJ1aWxkOiB0cnVlLCB9XG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjEgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzIyID0gLT4gZGIuX2dldF9kYl9vYmplY3RzKCkgICAgICAgICksIHt9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB0ZW1wLndpdGhfZGlyZWN0b3J5IHsga2VlcDogZmFsc2UsIH0sICh7IHBhdGg6IGZvbGRlcl9wYXRoLCB9KSA9PlxuICAgICAgIyBmb2xkZXJfcGF0aCA9ICcvdG1wL2JyaWNicmFjLXRlc3QnICMgISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG4gICAgICBkYl9wYXRoID0gUEFUSC5qb2luIGZvbGRlcl9wYXRoLCAnYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHJlbW92ZSBkYl9wYXRoXG4gICAgICAjIGhlbHAgJ86pYmJkYnJfXzIzJywgeyBkYl9wYXRoLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gbmV3IERicmljX3N0ZCBkYl9wYXRoLCB7IHJlYnVpbGQ6IHRydWUsIH1cbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yNCA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjUgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljX3N0ZCAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBvYmplY3RzID0gbmV3IFNldCAoIFwiI3tvLnR5cGV9OiN7by5uYW1lfVwiIGZvciBfLCBvIG9mIGRiLl9nZXRfZGJfb2JqZWN0cygpIClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yNiA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF90YWJsZXMnICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjcgPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfdmlld3MnICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI4ID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3JlbGF0aW9ucycgICksIHRydWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBuZXcgRGJyaWNfc3RkIGRiX3BhdGgsIHsgcmVidWlsZDogZmFsc2UsIH1cbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yOSA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzAgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljX3N0ZCAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBvYmplY3RzID0gbmV3IFNldCAoIFwiI3tvLnR5cGV9OiN7by5uYW1lfVwiIGZvciBfLCBvIG9mIGRiLl9nZXRfZGJfb2JqZWN0cygpIClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zMSA9IC0+IG9iamVjdHMuaGFzICd2aWV3OnN0ZF90YWJsZXMnICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzIgPSAtPiBvYmplY3RzLmhhcyAndmlldzpzdGRfdmlld3MnICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzMzID0gLT4gb2JqZWN0cy5oYXMgJ3ZpZXc6c3RkX3JlbGF0aW9ucycgICksIHRydWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19zdGRfZ2VuZXJhdGVfc2VyaWVzOiAtPlxuICAgIHsgdGVtcCwgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdGVtcCgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIHNxbGl0ZT4gc2VsZWN0ICogZnJvbSBnZW5lcmF0ZV9zZXJpZXMoIDEsIDEwLCAwICk7XG4gICAgIyDilIzilIDilIDilIDilIDilIDilIDilIDilJBcbiAgICAjIOKUgiB2YWx1ZSDilIJcbiAgICAjIOKUnOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUpFxuICAgICMg4pSCIDEgICAgIOKUglxuICAgICMg4pSCIDIgICAgIOKUglxuICAgICMg4pSCIDMgICAgIOKUglxuICAgICMg4pSCIDQgICAgIOKUglxuICAgICMg4pSCIDUgICAgIOKUglxuICAgICMg4pSCIDYgICAgIOKUglxuICAgICMg4pSCIDcgICAgIOKUglxuICAgICMg4pSCIDggICAgIOKUglxuICAgICMg4pSCIDkgICAgIOKUglxuICAgICMg4pSCIDEwICAgIOKUglxuICAgICMg4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYXG4gICAgIyBzcWxpdGU+IHNlbGVjdCAqIGZyb20gZ2VuZXJhdGVfc2VyaWVzKCAxLCAxMCwgMCApO1xuICAgICMg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXG4gICAgIyDilIIgdmFsdWUg4pSCXG4gICAgIyDilJzilIDilIDilIDilIDilIDilIDilIDilKRcbiAgICAjIOKUgiAxICAgICDilIJcbiAgICAjIOKUgiAyICAgICDilIJcbiAgICAjIOKUgiAzICAgICDilIJcbiAgICAjIOKUgiA0ICAgICDilIJcbiAgICAjIOKUgiA1ICAgICDilIJcbiAgICAjIOKUgiA2ICAgICDilIJcbiAgICAjIOKUgiA3ICAgICDilIJcbiAgICAjIOKUgiA4ICAgICDilIJcbiAgICAjIOKUgiA5ICAgICDilIJcbiAgICAjIOKUgiAxMCAgICDilIJcbiAgICAjIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmFxuICAgICMgc3FsaXRlPiBzZWxlY3QgKiBmcm9tIGdlbmVyYXRlX3NlcmllcyggMSwgMSwgMCApO1xuICAgICMg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXG4gICAgIyDilIIgdmFsdWUg4pSCXG4gICAgIyDilJzilIDilIDilIDilIDilIDilIDilIDilKRcbiAgICAjIOKUgiAxICAgICDilIJcbiAgICAjIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmFxuICAgICMgc3FsaXRlPiBzZWxlY3QgKiBmcm9tIGdlbmVyYXRlX3NlcmllcyggMSwgMCwgMCApO1xuICAgICMgc3FsaXRlPlxuXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgRGIgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIGRiID0gbmV3IERiICc6bWVtb3J5OicsIHsgcmVidWlsZDogdHJ1ZSwgfVxuICAgICAgQGVxICggzqliYmRicl9fMzQgPSAtPiBbICggcm93LnZhbHVlIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBzdGRfZ2VuZXJhdGVfc2VyaWVzKCAxLCAxMCwgMiApO1wiKS4uLiwgIF0gKSwgWyAxLCAzLCA1LCA3LCA5IF1cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzM1ID0gLT4gWyAoIHJvdy52YWx1ZSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gc3RkX2dlbmVyYXRlX3NlcmllcyggMSwgMTAsIDAgKTtcIikuLi4sICBdICksIFsgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAgXVxuICAgICAgQGVxICggzqliYmRicl9fMzYgPSAtPiBbICggcm93LnZhbHVlIGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBzdGRfZ2VuZXJhdGVfc2VyaWVzKCAxLCAxLCAwICk7XCIpLi4uLCAgIF0gKSwgWyAxIF1cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzM3ID0gLT4gWyAoIHJvdy52YWx1ZSBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gc3RkX2dlbmVyYXRlX3NlcmllcyggMSwgMCwgMCApO1wiKS4uLiwgICBdICksIFtdXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0YXRlbWVudF9pbmhlcml0YW5jZTogLT5cbiAgICAjIHsgdGVtcCwgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdGVtcCgpXG4gICAgIyB7IFN0YXRlbWVudFN5bmMsICAgICAgICAgICAgfSA9IHJlcXVpcmUgJ25vZGU6c3FsaXRlJ1xuICAgIEJzcWwzICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL25vZGVfbW9kdWxlcy9iZXR0ZXItc3FsaXRlMydcbiAgICBzdGF0ZW1lbnRfY2xhc3MgICAgICAgICAgICAgICA9ICggKCBuZXcgQnNxbDMgJzptZW1vcnk6JyApLnByZXBhcmUgU1FMXCJzZWxlY3QgMSB3aGVyZSBmYWxzZTtcIiApLmNvbnN0cnVjdG9yXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBnZXRfZnVuY3Rpb25fbmFtZXMgPSAoIGRiYSApIC0+IG5ldyBTZXQgKCBuYW1lIGZvciB7IG5hbWUsIH0gZnJvbSBcXFxuICAgICAgZGJhLndhbGsgU1FMXCJzZWxlY3QgbmFtZSBmcm9tIHByYWdtYV9mdW5jdGlvbl9saXN0KCkgb3JkZXIgYnkgbmFtZTtcIiApXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBnZXRfdGFibGVfbmFtZXMgPSAoIGRiYSApIC0+IG5ldyBTZXQgKCBuYW1lIGZvciB7IG5hbWUsIH0gZnJvbSBcXFxuICAgICAgZGJhLndhbGsgU1FMXCJcIlwic2VsZWN0IG5hbWUgZnJvbSBzcWxpdGVfc2NoZW1hXG4gICAgICB3aGVyZSB0eXBlIGlzICd0YWJsZScgb3JkZXIgYnkgbmFtZTtcIlwiXCIgKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZ2V0X3ZpZXdfbmFtZXMgPSAoIGRiYSApIC0+IG5ldyBTZXQgKCBuYW1lIGZvciB7IG5hbWUsIH0gZnJvbSBcXFxuICAgICAgZGJhLndhbGsgU1FMXCJcIlwic2VsZWN0IG5hbWUgZnJvbSBzcWxpdGVfc2NoZW1hXG4gICAgICB3aGVyZSB0eXBlIGlzICd2aWV3JyBvcmRlciBieSBuYW1lO1wiXCJcIiApXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBnZXRfdHJpZ2dlcl9uYW1lcyA9ICggZGJhICkgLT4gbmV3IFNldCAoIG5hbWUgZm9yIHsgbmFtZSwgfSBmcm9tIFxcXG4gICAgICBkYmEud2FsayBTUUxcIlwiXCJzZWxlY3QgbmFtZSBmcm9tIHNxbGl0ZV9zY2hlbWFcbiAgICAgIHdoZXJlIHR5cGUgaXMgJ3RyaWdnZXInIG9yZGVyIGJ5IG5hbWU7XCJcIlwiIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEEgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIEBmdW5jdGlvbnM6XG4gICAgICAgIGZuX2E6XG4gICAgICAgICAgdmFsdWU6IC0+IHJldHVybiAxXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgc2VsZWN0X2E6IFNRTFwic2VsZWN0IGZuX2EoKSBhcyBvbmUsIDIgYXMgdHdvO1wiXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJjcmVhdGUgdGFibGUgdGFibGVfYSAoIGQgdGV4dCApO1wiXG4gICAgICAgIFNRTFwiY3JlYXRlIHZpZXcgdmlld19hIGFzIHNlbGVjdCAqIGZyb20gdGFibGVfYTtcIlxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBCIGV4dGVuZHMgQVxuICAgICAgQGZ1bmN0aW9uczpcbiAgICAgICAgZm5fYjpcbiAgICAgICAgICB2YWx1ZTogLT4gcmV0dXJuIDFcbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBzZWxlY3RfYjogU1FMXCJzZWxlY3QgZm5fYigpIGFzIG9uZSwgMiBhcyB0d287XCJcbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcImNyZWF0ZSB0YWJsZSB0YWJsZV9iICggZCB0ZXh0ICk7XCJcbiAgICAgICAgU1FMXCJjcmVhdGUgdmlldyB2aWV3X2IgYXMgc2VsZWN0ICogZnJvbSB0YWJsZV9iO1wiXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIENfZHVwbGljYXRlX2Z1bmN0aW9uIGV4dGVuZHMgQlxuICAgICAgQG92ZXJ3cml0ZTogZmFsc2VcbiAgICAgIEBmdW5jdGlvbnM6XG4gICAgICAgIGZuX2I6XG4gICAgICAgICAgdmFsdWU6IC0+IHJldHVybiAxXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBDX2R1cGxpY2F0ZV9zdGF0ZW1lbnQgZXh0ZW5kcyBCXG4gICAgICBAb3ZlcndyaXRlOiBmYWxzZVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIHNlbGVjdF9iOiBTUUxcInNlbGVjdCBmbl9iKCkgYXMgb25lLCAyIGFzIHR3bztcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgQ19kdXBsaWNhdGVfdGFibGUgZXh0ZW5kcyBCXG4gICAgICBAb3ZlcndyaXRlOiBmYWxzZVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiY3JlYXRlIHRhYmxlIHRhYmxlX2IgKCBkIHRleHQgKTtcIlxuICAgICAgICBTUUxcImNyZWF0ZSB2aWV3IHZpZXdfYiBhcyBzZWxlY3QgKiBmcm9tIHRhYmxlX2I7XCJcbiAgICAgICAgXVxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBiID0gbmV3IEIoKVxuICAgICMgZGVidWcgJ86pYmJkYnJfXzM4JywgYlxuICAgICMgZGVidWcgJ86pYmJkYnJfXzM5JywgJ2Z1bmN0aW9uczogJywgZ2V0X2Z1bmN0aW9uX25hbWVzIGJcbiAgICAjIGRlYnVnICfOqWJiZGJyX180MCcsICdmdW5jdGlvbnM6ICcsICggZ2V0X2Z1bmN0aW9uX25hbWVzIGIgKS5oYXMgJ2ZuX2EnXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNDEnLCAnZnVuY3Rpb25zOiAnLCAoIGdldF9mdW5jdGlvbl9uYW1lcyBiICkuaGFzICdmbl9iJ1xuICAgICMgZGVidWcgJ86pYmJkYnJfXzQyJywgJ2Z1bmN0aW9uczogJywgKCBnZXRfZnVuY3Rpb25fbmFtZXMgYiApLmhhcyAncmVnZXhwJ1xuICAgICMgZGVidWcgJ86pYmJkYnJfXzQzJywgJ3RhYmxlczogICAgJywgZ2V0X3RhYmxlX25hbWVzIGJcbiAgICAjIGRlYnVnICfOqWJiZGJyX180NCcsICd2aWV3czogICAgICcsIGdldF92aWV3X25hbWVzIGJcbiAgICAjIGRlYnVnICfOqWJiZGJyX180NScsICd0cmlnZ2VyczogICcsIGdldF90cmlnZ2VyX25hbWVzIGJcbiAgICAjIGRlYnVnICfOqWJiZGJyX180NicsICdzdGF0ZW1lbnRzOicsICggayBmb3IgayBvZiBiLnN0YXRlbWVudHMgKVxuICAgICMgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBkYmEgPSBuZXcgRGJyaWNfc3RkICc6bWVtb3J5OicsIHsgcmVidWlsZDogdHJ1ZSwgfVxuICAgICAgIyBkYmEgPSBuZXcgQSgpXG4gICAgICAjIGRiYSA9IG5ldyBCKClcbiAgICAgIGRiYS5kYi5mdW5jdGlvbiAnenp6X3Rlc3QnLCB7IGRldGVybWluaXN0aWM6IHRydWUsIHZhcmFyZ3M6IGZhbHNlLCBkaXJlY3RPbmx5OiBmYWxzZSwgfSwgLT4gXCJaWlpfVEVTVFwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZ1bmN0aW9uX25hbWVzICA9IGdldF9mdW5jdGlvbl9uYW1lcyBkYmFcbiAgICAgIHRhYmxlX25hbWVzICAgICA9IGdldF90YWJsZV9uYW1lcyBkYmFcbiAgICAgIHZpZXdfbmFtZXMgICAgICA9IGdldF92aWV3X25hbWVzIGRiYVxuICAgICAgdHJpZ2dlcl9uYW1lcyAgID0gZ2V0X3RyaWdnZXJfbmFtZXMgZGJhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzQ3ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9zY2hlbWEgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX180OCA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdGFibGVzICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNDkgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3ZpZXdzICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzUwID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9yZWxhdGlvbnMgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX181MSA9IC0+IGRiYS5zdGF0ZW1lbnRzLnNlbGVjdF9hICAgICAgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzUyID0gLT4gZGJhLnN0YXRlbWVudHMuc2VsZWN0X2IgICAgICAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX181MyA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnenp6X3Rlc3QnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNTQgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ3JlZ2V4cCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzU1ID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdmbl9hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmRicl9fNTYgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzU3ID0gLT4gdGFibGVfbmFtZXMuaGFzICd0YWJsZV9hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYmRicl9fNTggPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX181OSA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdGFibGVzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNjAgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3ZpZXdzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzYxID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF9yZWxhdGlvbnMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX182MiA9IC0+IHZpZXdfbmFtZXMuaGFzICd2aWV3X2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzYzID0gLT4gdmlld19uYW1lcy5oYXMgJ3ZpZXdfYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBkYmEgPSBuZXcgQSB7IHJlYnVpbGQ6IHRydWUsIH1cbiAgICAgIGRiYS5kYi5mdW5jdGlvbiAnenp6X3Rlc3QnLCB7IGRldGVybWluaXN0aWM6IHRydWUsIHZhcmFyZ3M6IGZhbHNlLCBkaXJlY3RPbmx5OiBmYWxzZSwgfSwgLT4gXCJaWlpfVEVTVFwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZ1bmN0aW9uX25hbWVzICA9IGdldF9mdW5jdGlvbl9uYW1lcyBkYmFcbiAgICAgIHRhYmxlX25hbWVzICAgICA9IGdldF90YWJsZV9uYW1lcyBkYmFcbiAgICAgIHZpZXdfbmFtZXMgICAgICA9IGdldF92aWV3X25hbWVzIGRiYVxuICAgICAgdHJpZ2dlcl9uYW1lcyAgID0gZ2V0X3RyaWdnZXJfbmFtZXMgZGJhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzY0ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9zY2hlbWEgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX182NSA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdGFibGVzICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNjYgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3ZpZXdzICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzY3ID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF9yZWxhdGlvbnMgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX182OCA9IC0+IGRiYS5zdGF0ZW1lbnRzLnNlbGVjdF9hICAgICAgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNjkgPSAtPiBkYmEuc3RhdGVtZW50cy5zZWxlY3RfYiAgICAgICAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzcwID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICd6enpfdGVzdCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX183MSA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAncmVnZXhwJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNzIgPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ2ZuX2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzczID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdmbl9iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX183NCA9IC0+IHRhYmxlX25hbWVzLmhhcyAndGFibGVfYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNzUgPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJiZGJyX183NiA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdGFibGVzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fNzcgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3ZpZXdzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzc4ID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF9yZWxhdGlvbnMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX183OSA9IC0+IHZpZXdfbmFtZXMuaGFzICd2aWV3X2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODAgPSAtPiB2aWV3X25hbWVzLmhhcyAndmlld19iJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGRiYSA9IG5ldyBCIHsgcmVidWlsZDogdHJ1ZSwgfVxuICAgICAgZGJhLmRiLmZ1bmN0aW9uICd6enpfdGVzdCcsIHsgZGV0ZXJtaW5pc3RpYzogdHJ1ZSwgdmFyYXJnczogZmFsc2UsIGRpcmVjdE9ubHk6IGZhbHNlLCB9LCAtPiBcIlpaWl9URVNUXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZnVuY3Rpb25fbmFtZXMgID0gZ2V0X2Z1bmN0aW9uX25hbWVzIGRiYVxuICAgICAgdGFibGVfbmFtZXMgICAgID0gZ2V0X3RhYmxlX25hbWVzIGRiYVxuICAgICAgdmlld19uYW1lcyAgICAgID0gZ2V0X3ZpZXdfbmFtZXMgZGJhXG4gICAgICB0cmlnZ2VyX25hbWVzICAgPSBnZXRfdHJpZ2dlcl9uYW1lcyBkYmFcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmRicl9fODEgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3NjaGVtYSAgICAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzgyID0gLT4gZGJhLnN0YXRlbWVudHMuc3RkX2dldF90YWJsZXMgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184MyA9IC0+IGRiYS5zdGF0ZW1lbnRzLnN0ZF9nZXRfdmlld3MgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODQgPSAtPiBkYmEuc3RhdGVtZW50cy5zdGRfZ2V0X3JlbGF0aW9ucyAgaW5zdGFuY2VvZiAgc3RhdGVtZW50X2NsYXNzICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg1ID0gLT4gZGJhLnN0YXRlbWVudHMuc2VsZWN0X2EgICAgICAgICAgIGluc3RhbmNlb2YgIHN0YXRlbWVudF9jbGFzcyApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX184NiA9IC0+IGRiYS5zdGF0ZW1lbnRzLnNlbGVjdF9iICAgICAgICAgICBpbnN0YW5jZW9mICBzdGF0ZW1lbnRfY2xhc3MgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX184NyA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnenp6X3Rlc3QnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fODggPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ3JlZ2V4cCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg5ID0gLT4gZnVuY3Rpb25fbmFtZXMuaGFzICdmbl9hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX185MCA9IC0+IGZ1bmN0aW9uX25hbWVzLmhhcyAnZm5fYicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJiZGJyX185MSA9IC0+IHRhYmxlX25hbWVzLmhhcyAndGFibGVfYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTIgPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3RhYmxlX2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzkzID0gLT4gdmlld19uYW1lcy5oYXMgJ3N0ZF90YWJsZXMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX185NCA9IC0+IHZpZXdfbmFtZXMuaGFzICdzdGRfdmlld3MnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmRicl9fOTUgPSAtPiB2aWV3X25hbWVzLmhhcyAnc3RkX3JlbGF0aW9ucycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzk2ID0gLT4gdmlld19uYW1lcy5oYXMgJ3ZpZXdfYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX185NyA9IC0+IHZpZXdfbmFtZXMuaGFzICd2aWV3X2InICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBAdGhyb3dzICggzqliYmRicl9fOTggPSAtPiBuZXcgQ19kdXBsaWNhdGVfZnVuY3Rpb24gIHsgcmVidWlsZDogdHJ1ZSwgfSApLCAvYSBVREYgb3IgYnVpbHQtaW4gZnVuY3Rpb24gbmFtZWQgJ2ZuX2InIGhhcyBhbHJlYWR5IGJlZW4gZGVjbGFyZWQvXG4gICAgICBAdGhyb3dzICggzqliYmRicl9fOTkgPSAtPiBuZXcgQ19kdXBsaWNhdGVfc3RhdGVtZW50IHsgcmVidWlsZDogdHJ1ZSwgfSApLCAvc3RhdGVtZW50ICdzZWxlY3RfYicgaXMgYWxyZWFkeSBkZWNsYXJlZC9cbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyXzEwMCA9IC0+IG5ldyBDX2R1cGxpY2F0ZV90YWJsZSAgICAgeyByZWJ1aWxkOiB0cnVlLCB9ICksIC90YWJsZSB0YWJsZV9iIGFscmVhZHkgZXhpc3RzL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNhbXBsZV9kYjogLT5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3N0b3JlIGV4dGVuZHMgRGJyaWNcbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgc3RvcmVfZmFjZXRzIChcbiAgICAgICAgICBmYWNldF9rZXkgICAgICAgICAgICAgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgZmFjZXRfdmFsdWUgICAgICAgICAgIGpzb24gKTtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIHN0b3JlX2luc2VydF9mYWNldDogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8gc3RvcmVfZmFjZXRzICggZmFjZXRfa2V5LCBmYWNldF92YWx1ZSApIHZhbHVlcyAoICRmYWNldF9rZXksICRmYWNldF92YWx1ZSApXG4gICAgICAgICAgICBvbiBjb25mbGljdCAoIGZhY2V0X2tleSApIGRvIHVwZGF0ZSBzZXQgZmFjZXRfdmFsdWUgPSBleGNsdWRlZC5mYWNldF92YWx1ZTtcIlwiXCJcbiAgICAgICAgc3RvcmVfZ2V0X2ZhY2V0czogU1FMXCJcIlwiXG4gICAgICAgICAgc2VsZWN0ICogZnJvbSBzdG9yZV9mYWNldHMgb3JkZXIgYnkgZmFjZXRfa2V5O1wiXCJcIlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3RvcmUgICAgID0gRGJyaWNfc3RvcmUucmVidWlsZCBkYl9wYXRoXG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICdvbmUnLCAgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDEgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndHdvJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAyICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMyAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5ICdpaWknICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndHJ1ZScsICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSB0cnVlICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ2ZhbHNlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgZmFsc2UgICApLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGNhc3Rfcm93ID0gKCByb3cgKSAtPlxuICAgICAgICByZXR1cm4gcm93IHVubGVzcyByb3c/XG4gICAgICAgIHJldHVybiB7IHJvdy4uLiwgZmFjZXRfdmFsdWU6ICggSlNPTi5wYXJzZSByb3cuZmFjZXRfdmFsdWUgKSwgX3Y6IHJvdy5mYWNldF92YWx1ZSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByb3dzID0gc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9nZXRfZmFjZXRzLml0ZXJhdGUoKVxuICAgICAgQGVxICggzqliYmRicl8xMDEgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBmYWNldF9rZXk6ICdmYWxzZScsIGZhY2V0X3ZhbHVlOiBmYWxzZSwgX3Y6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqliYmRicl8xMDIgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBmYWNldF9rZXk6ICdvbmUnLCBmYWNldF92YWx1ZTogMSwgX3Y6IDEgfVxuICAgICAgQGVxICggzqliYmRicl8xMDMgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAnaWlpJywgX3Y6ICdcImlpaVwiJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEwNCA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGZhY2V0X2tleTogJ3RydWUnLCBmYWNldF92YWx1ZTogdHJ1ZSwgX3Y6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEwNSA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGZhY2V0X2tleTogJ3R3bycsIGZhY2V0X3ZhbHVlOiAyLCBfdjogMiB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEwNiA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICAgICAgICAgICApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2FtcGxlX2RiX3dpdGhfYnNxbDogLT5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3N0b3JlIGV4dGVuZHMgRGJyaWNcbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgc3RvcmVfZmFjZXRzIChcbiAgICAgICAgICBmYWNldF9rZXkgICAgICAgICAgICAgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgZmFjZXRfdmFsdWUgICAgICAgICAgIGpzb24gKTtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgICMgc3RvcmVfY3JlYXRlX3RhYmxlczogU1FMXCJcIlwiXG4gICAgICAgICMgICBcIlwiXCJcbiAgICAgICAgc3RvcmVfaW5zZXJ0X2ZhY2V0OiBTUUxcIlwiXCJcbiAgICAgICAgICBpbnNlcnQgaW50byBzdG9yZV9mYWNldHMgKCBmYWNldF9rZXksIGZhY2V0X3ZhbHVlICkgdmFsdWVzICggJGZhY2V0X2tleSwgJGZhY2V0X3ZhbHVlIClcbiAgICAgICAgICAgIG9uIGNvbmZsaWN0ICggZmFjZXRfa2V5ICkgZG8gdXBkYXRlIHNldCBmYWNldF92YWx1ZSA9IGV4Y2x1ZGVkLmZhY2V0X3ZhbHVlO1wiXCJcIlxuICAgICAgICBzdG9yZV9nZXRfZmFjZXRzOiBTUUxcIlwiXCJcbiAgICAgICAgICBzZWxlY3QgKiBmcm9tIHN0b3JlX2ZhY2V0cyBvcmRlciBieSBmYWNldF9rZXk7XCJcIlwiXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgc3RvcmUgICAgID0gRGJyaWNfc3RvcmUucmVidWlsZCAnOm1lbW9yeTonXG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICdvbmUnLCAgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDEgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndHdvJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAyICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMyAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5ICdpaWknICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndHJ1ZScsICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSB0cnVlICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ2ZhbHNlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgZmFsc2UgICApLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGNhc3Rfcm93ID0gKCByb3cgKSAtPlxuICAgICAgICByZXR1cm4gcm93IHVubGVzcyByb3c/XG4gICAgICAgIHJldHVybiB7IHJvdy4uLiwgZmFjZXRfdmFsdWU6ICggSlNPTi5wYXJzZSByb3cuZmFjZXRfdmFsdWUgKSwgX3Y6IHJvdy5mYWNldF92YWx1ZSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByb3dzID0gc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9nZXRfZmFjZXRzLml0ZXJhdGUoKVxuICAgICAgQGVxICggzqliYmRicl8xMDcgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ2ZhbHNlJywgZmFjZXRfdmFsdWU6IGZhbHNlLCBfdjogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEwOCA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAnb25lJywgZmFjZXRfdmFsdWU6IDEsIF92OiAxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTA5ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAnaWlpJywgX3Y6ICdcImlpaVwiJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzExMCA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAndHJ1ZScsIGZhY2V0X3ZhbHVlOiB0cnVlLCBfdjogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTExID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICd0d28nLCBmYWNldF92YWx1ZTogMiwgX3Y6IDIgfVxuICAgICAgQGVxICggzqliYmRicl8xMTIgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB1bmRlZmluZWRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfZnVuY3Rpb25zX3dpdGhfbnNxbDogLT5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3NxdWFyZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIG51bWJlcnMgKFxuICAgICAgICAgICAgbiBudW1iZXIgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IHNxdWFyZXMgYXMgc2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlKCBuICkgYXMgc3F1YXJlXG4gICAgICAgICAgZnJvbSBudW1iZXJzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgaW5zZXJ0X251bWJlcjogU1FMXCJcIlwiaW5zZXJ0IGludG8gbnVtYmVycyAoIG4gKSB2YWx1ZXMgKCAkbiApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBuICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fc3F1YXJlczogU1FMXCJcIlwic2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgZnJvbSBzcXVhcmVzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGZ1bmN0aW9uczpcbiAgICAgICAgc3F1YXJlOlxuICAgICAgICAgIGRldGVybWluaXN0aWM6ICB0cnVlXG4gICAgICAgICAgdmFyYXJnczogICAgICAgIGZhbHNlXG4gICAgICAgICAgdmFsdWU6ICAgICAgICAgICAoIG4gKSAtPiBuICoqIDJcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHNxdWFyZXMgICA9IERicmljX3NxdWFyZXMucmVidWlsZCBkYl9wYXRoXG4gICAgICBmb3IgbiBpbiBbIDAgLi4uIDEwIF1cbiAgICAgICAgc3F1YXJlcy5zdGF0ZW1lbnRzLmluc2VydF9udW1iZXIucnVuIHsgbiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTEzJywgcm93IGZvciByb3cgZnJvbSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlKClcbiAgICAgIHJvd3MgPSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTE0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAwLCBzcXVhcmU6IDAgfVxuICAgICAgQGVxICggzqliYmRicl8xMTUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDEsIHNxdWFyZTogMSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzExNiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMiwgc3F1YXJlOiA0IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTE3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAzLCBzcXVhcmU6IDkgfVxuICAgICAgQGVxICggzqliYmRicl8xMTggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDQsIHNxdWFyZTogMTYgfVxuICAgICAgQGVxICggzqliYmRicl8xMTkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDUsIHNxdWFyZTogMjUgfVxuICAgICAgQGVxICggzqliYmRicl8xMjAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDYsIHNxdWFyZTogMzYgfVxuICAgICAgQGVxICggzqliYmRicl8xMjEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDcsIHNxdWFyZTogNDkgfVxuICAgICAgQGVxICggzqliYmRicl8xMjIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDgsIHNxdWFyZTogNjQgfVxuICAgICAgQGVxICggzqliYmRicl8xMjMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDksIHNxdWFyZTogODEgfVxuICAgICAgQGVxICggzqliYmRicl8xMjQgPSAtPiByb3dzLm5leHQoKS5kb25lICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVkZl9hZ2dyZWdhdGVzX3dpdGhfbnNxbDogLT5cbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3NxdWFyZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIG51bWJlcnMgKFxuICAgICAgICAgICAgbiBudW1iZXIgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IHNxdWFyZXMgYXMgc2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlKCBuICkgYXMgc3F1YXJlXG4gICAgICAgICAgZnJvbSBudW1iZXJzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgaW5zZXJ0X251bWJlcjogU1FMXCJcIlwiaW5zZXJ0IGludG8gbnVtYmVycyAoIG4gKSB2YWx1ZXMgKCAkbiApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBuICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fbnVtYmVyczogU1FMXCJcIlwic2VsZWN0IG4gZnJvbSBudW1iZXJzIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAgIHNlbGVjdF9mcm9tX3NxdWFyZXM6IFNRTFwiXCJcInNlbGVjdFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHNxdWFyZSxcbiAgICAgICAgICAgIHByb2R1Y3QoIG4gKSAgICAgIGFzIHBfbixcbiAgICAgICAgICAgIHByb2R1Y3QoIHNxdWFyZSApIGFzIHBfc3F1YXJlXG4gICAgICAgICAgZnJvbSBzcXVhcmVzXG4gICAgICAgICAgd2hlcmUgbiBiZXR3ZWVuICRzdGFydCBhbmQgJHN0b3BcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAZnVuY3Rpb25zOlxuICAgICAgICBzcXVhcmU6XG4gICAgICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgICAgICB2YWx1ZTogICAgICAgICAgICggbiApIC0+IG4gKiogMlxuICAgICAgQGFnZ3JlZ2F0ZV9mdW5jdGlvbnM6XG4gICAgICAgIHByb2R1Y3Q6XG4gICAgICAgICAgc3RhcnQ6ICAgICAgICAgIC0+IDEgIyMjIE5PVEUgY2FuIHVzZSBgbnVsbGAgZm9yIGJTUUwsIGJ1dCBuU1FMIG5lZWRzIGAxYCAjIyNcbiAgICAgICAgICBzdGVwOiAgICAgICAgICAgcHJvZHVjdCA9ICggdG90YWwsIGVsZW1lbnQgKSAtPlxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqliYmRicl8xMjUnLCB7IHRvdGFsLCBlbGVtZW50LCB9XG4gICAgICAgICAgICByZXR1cm4gKCB0b3RhbCA/IDEgKSAqIGVsZW1lbnRcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLXVkZl9hZ2dyZWdhdGVzX3dpdGhfbnNxbC5zcWxpdGUnXG4gICAgICBzcXVhcmVzICAgPSBEYnJpY19zcXVhcmVzLnJlYnVpbGQgZGJfcGF0aFxuICAgICAgZm9yIG4gaW4gWyAwIC4uLiAxMCBdXG4gICAgICAgIHNxdWFyZXMuc3RhdGVtZW50cy5pbnNlcnRfbnVtYmVyLnJ1biB7IG4sIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzEyNicsIHJvdyBmb3Igcm93IGZyb20gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSB7IHN0YXJ0OiAxLCBzdG9wOiA1LCB9XG4gICAgICByb3dzID0gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSB7IHN0YXJ0OiAxLCBzdG9wOiA1LCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEyNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMSwgc3F1YXJlOiAxLCBwX246IDEyMCwgcF9zcXVhcmU6IDE0NDAwIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTI4ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTI5Jywgcm93IGZvciByb3cgZnJvbSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlKClcbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyXzEzMCA9IC0+IHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUoKSApLCAvbWlzc2luZyBuYW1lZCBwYXJhbWV0ZXJzL2lcbiAgICAgICMgQGVxICggzqliYmRicl8xMzEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IG51bGwsIHNxdWFyZTogbnVsbCwgcF9uOiAxLCBwX3NxdWFyZTogMSB9XG4gICAgICAjIEBlcSAoIM6pYmJkYnJfMTMyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVkZl9mdW5jdGlvbnNfd2l0aF9ic3FsOiAtPlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3F1YXJlcyBleHRlbmRzIERicmljXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgbnVtYmVycyAoXG4gICAgICAgICAgICBuIG51bWJlciB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHZpZXcgc3F1YXJlcyBhcyBzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUoIG4gKSBhcyBzcXVhcmVcbiAgICAgICAgICBmcm9tIG51bWJlcnNcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfbnVtYmVyOiBTUUxcIlwiXCJpbnNlcnQgaW50byBudW1iZXJzICggbiApIHZhbHVlcyAoICRuIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIG4gKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9zcXVhcmVzOiBTUUxcIlwiXCJzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICBmcm9tIHNxdWFyZXNcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAZnVuY3Rpb25zOlxuICAgICAgICBzcXVhcmU6XG4gICAgICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgICAgICB2YWx1ZTogICAgICAgICAgICggbiApIC0+IG4gKiogMlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3F1YXJlcyAgID0gRGJyaWNfc3F1YXJlcy5yZWJ1aWxkIGRiX3BhdGhcbiAgICAgIGZvciBuIGluIFsgMCAuLi4gMTAgXVxuICAgICAgICBzcXVhcmVzLnN0YXRlbWVudHMuaW5zZXJ0X251bWJlci5ydW4geyBuLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUoKVxuICAgICAgcm93cyA9IHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUoKVxuICAgICAgQGVxICggzqliYmRicl8xMzMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDAsIHNxdWFyZTogMCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEzNCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMSwgc3F1YXJlOiAxIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTM1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAyLCBzcXVhcmU6IDQgfVxuICAgICAgQGVxICggzqliYmRicl8xMzYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDMsIHNxdWFyZTogOSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEzNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNCwgc3F1YXJlOiAxNiB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEzOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNSwgc3F1YXJlOiAyNSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEzOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNiwgc3F1YXJlOiAzNiB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogNywgc3F1YXJlOiA0OSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogOCwgc3F1YXJlOiA2NCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogOSwgc3F1YXJlOiA4MSB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfYWdncmVnYXRlc193aXRoX2JzcWw6IC0+XG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zcXVhcmVzIGV4dGVuZHMgRGJyaWNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBudW1iZXJzIChcbiAgICAgICAgICAgIG4gbnVtYmVyIHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1wiXCJcIlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdmlldyBzcXVhcmVzIGFzIHNlbGVjdFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHNxdWFyZSggbiApIGFzIHNxdWFyZVxuICAgICAgICAgIGZyb20gbnVtYmVyc1xuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAgIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIGluc2VydF9udW1iZXI6IFNRTFwiXCJcImluc2VydCBpbnRvIG51bWJlcnMgKCBuICkgdmFsdWVzICggJG4gKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggbiApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgIHNlbGVjdF9mcm9tX3NxdWFyZXM6IFNRTFwiXCJcInNlbGVjdFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHNxdWFyZSxcbiAgICAgICAgICAgIHByb2R1Y3QoIG4gKSAgICAgIGFzIHBfbixcbiAgICAgICAgICAgIHByb2R1Y3QoIHNxdWFyZSApIGFzIHBfc3F1YXJlXG4gICAgICAgICAgZnJvbSBzcXVhcmVzXG4gICAgICAgICAgd2hlcmUgbiBiZXR3ZWVuICRzdGFydCBhbmQgJHN0b3BcbiAgICAgICAgICBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAZnVuY3Rpb25zOlxuICAgICAgICBzcXVhcmU6XG4gICAgICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgICAgICB2YWx1ZTogICAgICAgICAgIHNxdWFyZSA9ICggbiApIC0+IG4gKiogMlxuICAgICAgQGFnZ3JlZ2F0ZV9mdW5jdGlvbnM6XG4gICAgICAgIHByb2R1Y3Q6XG4gICAgICAgICAgc3RhcnQ6ICAgICAgICAgIC0+IG51bGxcbiAgICAgICAgICBzdGVwOiAgICAgICAgICAgcHJvZHVjdCA9ICggdG90YWwsIGVsZW1lbnQgKSAtPlxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqliYmRicl8xNDQnLCB7IHRvdGFsLCBlbGVtZW50LCB9XG4gICAgICAgICAgICByZXR1cm4gKCB0b3RhbCA/IDEgKSAqIGVsZW1lbnRcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBzcXVhcmVzICAgPSBEYnJpY19zcXVhcmVzLnJlYnVpbGQoKVxuICAgICAgZm9yIG4gaW4gWyAwIC4uLiAxMCBdXG4gICAgICAgIHNxdWFyZXMuc3RhdGVtZW50cy5pbnNlcnRfbnVtYmVyLnJ1biB7IG4sIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE0NScsIHJvdyBmb3Igcm93IGZyb20gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSB7IHN0YXJ0OiAyLCBzdG9wOiAzLCB9XG4gICAgICByb3dzID0gc3F1YXJlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3NxdWFyZXMuaXRlcmF0ZSB7IHN0YXJ0OiAyLCBzdG9wOiAzLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMiwgc3F1YXJlOiA0LCBwX246IDYsIHBfc3F1YXJlOiAzNiB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE0NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfdGFibGVfZnVuY3Rpb25fd2l0aF9ic3FsOiAtPlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfcGhyYXNlcyBleHRlbmRzIERicmljXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdGFibGUgcGhyYXNlcyAoXG4gICAgICAgICAgICBwaHJhc2UgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgaW5zZXJ0X3BocmFzZTogU1FMXCJcIlwiaW5zZXJ0IGludG8gcGhyYXNlcyAoIHBocmFzZSApIHZhbHVlcyAoICRwaHJhc2UgKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggcGhyYXNlICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fcGhyYXNlczogU1FMXCJcIlwiXG4gICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgICpcbiAgICAgICAgICAgIGZyb21cbiAgICAgICAgICAgICAgcGhyYXNlcyBhcyBwLFxuICAgICAgICAgICAgICByZV9tYXRjaGVzKCBwLnBocmFzZSwgJG1hdGNoZXIgKSBhcyByeFxuICAgICAgICAgICAgb3JkZXIgYnkgcC5waHJhc2U7XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEB0YWJsZV9mdW5jdGlvbnM6XG4gICAgICAgIHJlX21hdGNoZXM6XG4gICAgICAgICAgY29sdW1uczogICAgICBbICdtYXRjaCcsICdjYXB0dXJlJywgXVxuICAgICAgICAgIHBhcmFtZXRlcnM6ICAgWyAndGV4dCcsICdwYXR0ZXJuJywgXVxuICAgICAgICAgIHJvd3M6ICggdGV4dCwgcGF0dGVybiApIC0+XG4gICAgICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAgcGF0dGVybiwgJ2cnXG4gICAgICAgICAgICBmb3IgbWF0Y2ggZnJvbSB0ZXh0Lm1hdGNoQWxsIHJlZ2V4XG4gICAgICAgICAgICAgIHlpZWxkIFsgbWF0Y2hbIDAgXSwgbWF0Y2hbIDEgXSwgXVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBwaHJhc2VzICAgPSBEYnJpY19waHJhc2VzLnJlYnVpbGQoKVxuICAgICAgZm9yIHBocmFzZSBpbiBbICdlbGV2ZW4nLCAnZml2ZScsICduaW5lJywgJ29uZScsICdvbmUgcG9pbnQgZml2ZScsICdzZXZlbicsICd0aHJlZSBwb2ludCBvbmUnIF1cbiAgICAgICAgcGhyYXNlcy5zdGF0ZW1lbnRzLmluc2VydF9waHJhc2UucnVuIHsgcGhyYXNlLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xNDgnLCByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9waHJhc2VzLml0ZXJhdGUgeyBtYXRjaGVyOiAnXi4qKFthZWlvdV0uZSkuKiQnLCB9XG4gICAgICAjIGVjaG8oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTQ5Jywgcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fcGhyYXNlcy5pdGVyYXRlIHsgbWF0Y2hlcjogJyhbXmFlaW91XT9bYWVpb3VdKykoPz1bbW52XSknLCB9XG4gICAgICByb3dzID0gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3BocmFzZXMuaXRlcmF0ZSB7IG1hdGNoZXI6ICcoW15hZWlvdV0/W2FlaW91XSspKD89W21udl0pJywgfVxuICAgICAgQGVxICggzqliYmRicl8xNTAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ2VsZXZlbicsIG1hdGNoOiAnbGUnLCBjYXB0dXJlOiAnbGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTUxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdlbGV2ZW4nLCBtYXRjaDogJ3ZlJywgY2FwdHVyZTogJ3ZlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnZml2ZScsIG1hdGNoOiAnZmknLCBjYXB0dXJlOiAnZmknIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTUzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICduaW5lJywgbWF0Y2g6ICduaScsIGNhcHR1cmU6ICduaScgfVxuICAgICAgQGVxICggzqliYmRicl8xNTQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ29uZScsIG1hdGNoOiAnbycsIGNhcHR1cmU6ICdvJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnb25lIHBvaW50IGZpdmUnLCBtYXRjaDogJ28nLCBjYXB0dXJlOiAnbycgfVxuICAgICAgQGVxICggzqliYmRicl8xNTYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ29uZSBwb2ludCBmaXZlJywgbWF0Y2g6ICdwb2knLCBjYXB0dXJlOiAncG9pJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnb25lIHBvaW50IGZpdmUnLCBtYXRjaDogJ2ZpJywgY2FwdHVyZTogJ2ZpJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnc2V2ZW4nLCBtYXRjaDogJ3NlJywgY2FwdHVyZTogJ3NlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE1OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnc2V2ZW4nLCBtYXRjaDogJ3ZlJywgY2FwdHVyZTogJ3ZlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE2MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAndGhyZWUgcG9pbnQgb25lJywgbWF0Y2g6ICdwb2knLCBjYXB0dXJlOiAncG9pJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE2MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAndGhyZWUgcG9pbnQgb25lJywgbWF0Y2g6ICcgbycsIGNhcHR1cmU6ICcgbycgfVxuICAgICAgQGVxICggzqliYmRicl8xNjIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB1bmRlZmluZWRcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZmlsZV9taXJyb3JfYXNfdGFibGVfZnVuY3Rpb246IC0+XG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19waHJhc2VzIGV4dGVuZHMgRGJyaWNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIGRhdGFzb3VyY2VzIChcbiAgICAgICAgICAgIGRza2V5IHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgICAgcGF0aCB0ZXh0IG5vdCBudWxsICk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHZpZXcgbWlycm9yIGFzIHNlbGVjdFxuICAgICAgICAgICAgKlxuICAgICAgICAgIGZyb21cbiAgICAgICAgICAgIGRhdGFzb3VyY2VzIGFzIGRzLFxuICAgICAgICAgICAgZmlsZV9saW5lcyggZHMucGF0aCApIGFzIGZsXG4gICAgICAgICAgb3JkZXIgYnkgZHMuZHNrZXksIGZsLmxpbmVfbnI7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIGtleXdvcmRzIChcbiAgICAgICAgICAgIGRza2V5ICAgdGV4dCAgICBub3QgbnVsbCxcbiAgICAgICAgICAgIGxpbmVfbnIgaW50ZWdlciBub3QgbnVsbCxcbiAgICAgICAgICAgIGtleXdvcmQgdGV4dCAgICBub3QgbnVsbCxcbiAgICAgICAgICBmb3JlaWduIGtleSAoIGRza2V5ICkgcmVmZXJlbmNlcyBkYXRhc291cmNlcyAoIGRza2V5ICksXG4gICAgICAgICAgcHJpbWFyeSBrZXkgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApICk7XCJcIlwiXG4gICAgICAgIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgaW5zZXJ0X2RhdGFzb3VyY2U6IFNRTFwiXCJcImluc2VydCBpbnRvIGRhdGFzb3VyY2VzICggZHNrZXksIHBhdGggKSB2YWx1ZXMgKCAkZHNrZXksICRwYXRoIClcbiAgICAgICAgICBvbiBjb25mbGljdCAoIGRza2V5ICkgZG8gdXBkYXRlIHNldCBwYXRoID0gJHBhdGg7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgaW5zZXJ0X2tleXdvcmQ6IFNRTFwiXCJcImluc2VydCBpbnRvIGtleXdvcmRzICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKSB2YWx1ZXMgKCAkZHNrZXksICRsaW5lX25yLCAka2V5d29yZCApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc2VsZWN0X2Zyb21fZGF0YXNvdXJjZXM6IFNRTFwiXCJcInNlbGVjdCAqIGZyb20gZGF0YXNvdXJjZXMgb3JkZXIgYnkgZHNrZXk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc2VsZWN0X2Zyb21fa2V5d29yZHM6IFNRTFwiXCJcInNlbGVjdCAqIGZyb20ga2V5d29yZHMgb3JkZXIgYnkga2V5d29yZCwgZHNrZXksIGxpbmVfbnI7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc2VsZWN0X2Zyb21fbWlycm9yOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIG1pcnJvciBvcmRlciBieSBkc2tleTtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHRhYmxlX2Z1bmN0aW9uczpcbiAgICAgICAgZmlsZV9saW5lczpcbiAgICAgICAgICBjb2x1bW5zOiAgICAgIFsgJ2xpbmVfbnInLCAnbGluZScsIF1cbiAgICAgICAgICBwYXJhbWV0ZXJzOiAgIFsgJ3BhdGgnLCBdXG4gICAgICAgICAgcm93czogKCBwYXRoICkgLT5cbiAgICAgICAgICAgIGZvciB7IGxucjogbGluZV9uciwgbGluZSwgZW9sLCB9IGZyb20gR1VZLmZzLndhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgcGF0aFxuICAgICAgICAgICAgICB5aWVsZCB7IGxpbmVfbnIsIGxpbmUsIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgcGhyYXNlcyAgID0gRGJyaWNfcGhyYXNlcy5yZWJ1aWxkKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTYzID0gLT4gKCBwaHJhc2VzLnByZXBhcmUgU1FMXCJcIlwicHJhZ21hIGZvcmVpZ25fa2V5c1wiXCJcIiApLmdldCgpICksIHsgZm9yZWlnbl9rZXlzOiAxLCAgICAgIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTY0ID0gLT4gKCBwaHJhc2VzLnByZXBhcmUgU1FMXCJcIlwicHJhZ21hIGpvdXJuYWxfbW9kZVwiXCJcIiApLmdldCgpICksIHsgam91cm5hbF9tb2RlOiAnbWVtb3J5JywgIH1cbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBkbyA9PlxuICAgICAgIyAgIGRza2V5ID0gJ3JlYWRtZSdcbiAgICAgICMgICBwYXRoICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvUkVBRE1FLm1kJ1xuICAgICAgIyAgIHBocmFzZXMuc3RhdGVtZW50cy5pbnNlcnRfZGF0YXNvdXJjZS5ydW4geyBkc2tleSwgcGF0aCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRza2V5ID0gJ3BhY2thZ2UtanNvbidcbiAgICAgICAgcGF0aCAgPSBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL3BhY2thZ2UuanNvbidcbiAgICAgICAgcGhyYXNlcy5zdGF0ZW1lbnRzLmluc2VydF9kYXRhc291cmNlLnJ1biB7IGRza2V5LCBwYXRoIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE2NScsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX2RhdGFzb3VyY2VzLml0ZXJhdGUoKVxuICAgICAgIyBlY2hvKClcbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvICfOqWJiZGJyXzE2NicsIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX21pcnJvci5pdGVyYXRlKClcbiAgICAgICMgZWNobygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJvd3MgPSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fbWlycm9yLmdldCgpXG4gICAgICBmb3IgeyBkc2tleSwgbGluZV9uciwgbGluZSwgfSBpbiBwaHJhc2VzXG4gICAgICAgIGtleXdvcmRzID0gbGluZS5zcGxpdCAvKD86XFxwe1p9Kyl8KCg/OlxccHtMfSspfCg/OlxccHtOfSspfCg/OlxccHtTfSspKS92XG4gICAgICAgICMgZGVidWcgJ86pYmJkYnJfMTY3JywgbGluZV9uciwgcnByIGtleXdvcmRzXG4gICAgICAgIGZvciBrZXl3b3JkIGluIGtleXdvcmRzXG4gICAgICAgICAgY29udGludWUgdW5sZXNzIGtleXdvcmQ/XG4gICAgICAgICAgY29udGludWUgaWYga2V5d29yZCBpcyAnJ1xuICAgICAgICAgIHBocmFzZXMuc3RhdGVtZW50cy5pbnNlcnRfa2V5d29yZC5ydW4geyBkc2tleSwgbGluZV9uciwga2V5d29yZCwgfVxuICAgICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gJ86pYmJkYnJfMTY4Jywgcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fa2V5d29yZHMuaXRlcmF0ZSgpXG4gICAgICAjIGVjaG8oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZpbGVfbWlycm9yX3dpdGhfaW50ZWdyYXRlZF9pbnNlcnRzOiAtPlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfcGhyYXNlcyBleHRlbmRzIERicmljXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBidWlsZDogW1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBkYXRhc291cmNlcyAoXG4gICAgICAgICAgICBkc2tleSB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICAgIHBhdGggdGV4dCBub3QgbnVsbCApO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IG1pcnJvciBhcyBzZWxlY3RcbiAgICAgICAgICAgICpcbiAgICAgICAgICBmcm9tXG4gICAgICAgICAgICBkYXRhc291cmNlcyBhcyBkcyxcbiAgICAgICAgICAgIGZpbGVfbGluZXMoIGRzLnBhdGggKSBhcyBmbFxuICAgICAgICAgIG9yZGVyIGJ5IGRzLmRza2V5LCBmbC5saW5lX25yO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBrZXl3b3JkcyAoXG4gICAgICAgICAgICBkc2tleSAgIHRleHQgICAgbm90IG51bGwsXG4gICAgICAgICAgICBsaW5lX25yIGludGVnZXIgbm90IG51bGwsXG4gICAgICAgICAgICBrZXl3b3JkIHRleHQgICAgbm90IG51bGwsXG4gICAgICAgICAgZm9yZWlnbiBrZXkgKCBkc2tleSApIHJlZmVyZW5jZXMgZGF0YXNvdXJjZXMgKCBkc2tleSApLFxuICAgICAgICAgIHByaW1hcnkga2V5ICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKSApO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGluc2VydF9kYXRhc291cmNlOiBTUUxcIlwiXCJpbnNlcnQgaW50byBkYXRhc291cmNlcyAoIGRza2V5LCBwYXRoICkgdmFsdWVzICggJGRza2V5LCAkcGF0aCApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBkc2tleSApIGRvIHVwZGF0ZSBzZXQgcGF0aCA9ICRwYXRoO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGluc2VydF9rZXl3b3JkOiBTUUxcIlwiXCJpbnNlcnQgaW50byBrZXl3b3JkcyAoIGRza2V5LCBsaW5lX25yLCBrZXl3b3JkICkgdmFsdWVzICggJGRza2V5LCAkbGluZV9uciwgJGtleXdvcmQgKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNlbGVjdF9mcm9tX2RhdGFzb3VyY2VzOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIGRhdGFzb3VyY2VzIG9yZGVyIGJ5IGRza2V5O1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNlbGVjdF9mcm9tX2tleXdvcmRzOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIGtleXdvcmRzIG9yZGVyIGJ5IGtleXdvcmQsIGRza2V5LCBsaW5lX25yO1wiXCJcIlxuICAgICAgICBsb2NhdGlvbnNfZnJvbV9rZXl3b3JkOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIGtleXdvcmRzXG4gICAgICAgICAgd2hlcmUga2V5d29yZCA9ICRrZXl3b3JkXG4gICAgICAgICAgb3JkZXIgYnkga2V5d29yZCwgZHNrZXksIGxpbmVfbnI7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc2VsZWN0X2Zyb21fbWlycm9yOiBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIG1pcnJvciBvcmRlciBieSBkc2tleTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBwb3B1bGF0ZV9rZXl3b3JkczogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8ga2V5d29yZHMgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApXG4gICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgZHMuZHNrZXkgICAgYXMgZHNrZXksXG4gICAgICAgICAgICAgIG1pLmxpbmVfbnIgIGFzIGxpbmVfbnIsXG4gICAgICAgICAgICAgIHN3LmtleXdvcmQgIGFzIGtleXdvcmRcbiAgICAgICAgICAgIGZyb20gZGF0YXNvdXJjZXMgICAgICAgIGFzIGRzXG4gICAgICAgICAgICBqb2luIG1pcnJvciAgICAgICAgICAgICBhcyBtaSB1c2luZyAoIGRza2V5ICksXG4gICAgICAgICAgICBzcGxpdF93b3JkcyggbWkubGluZSApICBhcyBzd1xuICAgICAgICAgICAgd2hlcmUgdHJ1ZSAtLSB3aGVyZSBjbGF1c2UganVzdCBhIHN5bnRhY3RpYyBndWFyZCBhcyBwZXIgaHR0cHM6Ly9zcWxpdGUub3JnL2xhbmdfdXBzZXJ0Lmh0bWxcbiAgICAgICAgICAgIG9uIGNvbmZsaWN0IGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEB0YWJsZV9mdW5jdGlvbnM6XG4gICAgICAgIHNwbGl0X3dvcmRzOlxuICAgICAgICAgIGNvbHVtbnM6ICAgICAgICBbICdrZXl3b3JkJywgXVxuICAgICAgICAgIHBhcmFtZXRlcnM6ICAgICBbICdsaW5lJywgXVxuICAgICAgICAgIHJvd3M6ICggbGluZSApIC0+XG4gICAgICAgICAgICBrZXl3b3JkcyA9IGxpbmUuc3BsaXQgLyg/OlxccHtafSspfCgoPzpcXHB7TH0rKXwoPzpcXHB7Tn0rKXwoPzpcXHB7U30rKSkvdlxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqliYmRicl8xNjknLCBsaW5lX25yLCBycHIga2V5d29yZHNcbiAgICAgICAgICAgIGZvciBrZXl3b3JkIGluIGtleXdvcmRzXG4gICAgICAgICAgICAgIGNvbnRpbnVlIHVubGVzcyBrZXl3b3JkP1xuICAgICAgICAgICAgICBjb250aW51ZSBpZiBrZXl3b3JkIGlzICcnXG4gICAgICAgICAgICAgIHlpZWxkIHsga2V5d29yZCwgfVxuICAgICAgICAgICAgO251bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBmaWxlX2xpbmVzOlxuICAgICAgICAgIGNvbHVtbnM6ICAgICAgWyAnbGluZV9ucicsICdsaW5lJywgXVxuICAgICAgICAgIHBhcmFtZXRlcnM6ICAgWyAncGF0aCcsIF1cbiAgICAgICAgICByb3dzOiAoIHBhdGggKSAtPlxuICAgICAgICAgICAgZm9yIHsgbG5yOiBsaW5lX25yLCBsaW5lLCBlb2wsIH0gZnJvbSBHVVkuZnMud2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucyBwYXRoXG4gICAgICAgICAgICAgIHlpZWxkIHsgbGluZV9uciwgbGluZSwgfVxuICAgICAgICAgICAgO251bGxcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHBocmFzZXMgICA9IERicmljX3BocmFzZXMucmVidWlsZCBkYl9wYXRoXG4gICAgICAjIGRlYnVnICfOqWJiZGJyXzE3MCcsIHBocmFzZXMudGVhcmRvd24oKVxuICAgICAgIyBkZWJ1ZyAnzqliYmRicl8xNzEnLCBwaHJhc2VzLnJlYnVpbGQoKVxuICAgICAgQGVxICggzqliYmRicl8xNzIgPSAtPiAoIHBocmFzZXMucHJlcGFyZSBTUUxcIlwiXCJwcmFnbWEgZm9yZWlnbl9rZXlzXCJcIlwiICkuZ2V0KCkgKSwgeyBmb3JlaWduX2tleXM6IDEsICAgICAgfVxuICAgICAgQGVxICggzqliYmRicl8xNzMgPSAtPiAoIHBocmFzZXMucHJlcGFyZSBTUUxcIlwiXCJwcmFnbWEgam91cm5hbF9tb2RlXCJcIlwiICkuZ2V0KCkgKSwgeyBqb3VybmFsX21vZGU6ICd3YWwnLCAgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkc2tleSA9ICdodW1kdW0nXG4gICAgICAgIHBhdGggID0gUEFUSC5yZXNvbHZlIF9fZGlybmFtZSwgJy4uLy4uLy4uL2Fzc2V0cy9icmljYWJyYWMvaHVtcHR5LWR1bXB0eS5tZCdcbiAgICAgICAgcGhyYXNlcy5zdGF0ZW1lbnRzLmluc2VydF9kYXRhc291cmNlLnJ1biB7IGRza2V5LCBwYXRoIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcGhyYXNlcy5zdGF0ZW1lbnRzLnBvcHVsYXRlX2tleXdvcmRzLnJ1bigpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xNzQnLCByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5sb2NhdGlvbnNfZnJvbV9rZXl3b3JkLml0ZXJhdGUgeyBrZXl3b3JkOiAndGhvdWdodCcsIH1cbiAgICAgICMgZWNobygpXG4gICAgICByb3dzID0gcGhyYXNlcy5zdGF0ZW1lbnRzLmxvY2F0aW9uc19mcm9tX2tleXdvcmQuaXRlcmF0ZSB7IGtleXdvcmQ6ICd0aG91Z2h0JywgfVxuICAgICAgQGVxICggzqliYmRicl8xNzUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMTUsIGtleXdvcmQ6ICd0aG91Z2h0JyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE3NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAzNCwga2V5d29yZDogJ3Rob3VnaHQnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTc3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgdW5kZWZpbmVkXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyAnzqliYmRicl8xNzgnLCByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5sb2NhdGlvbnNfZnJvbV9rZXl3b3JkLml0ZXJhdGUgeyBrZXl3b3JkOiAnc2hlJywgfVxuICAgICAgIyBlY2hvKClcbiAgICAgIHJvd3MgPSBwaHJhc2VzLnN0YXRlbWVudHMubG9jYXRpb25zX2Zyb21fa2V5d29yZC5pdGVyYXRlIHsga2V5d29yZDogJ3NoZScsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTc5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDIsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTgwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDMsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTgxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDQsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTgyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDUsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTgzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDE1LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAxNywga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8xODUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMTgsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTg2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBkc2tleTogJ2h1bWR1bScsIGxpbmVfbnI6IDI2LCBrZXl3b3JkOiAnc2hlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzE4NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZHNrZXk6ICdodW1kdW0nLCBsaW5lX25yOiAzNCwga2V5d29yZDogJ3NoZScgfVxuICAgICAgQGVxICggzqliYmRicl8xODggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IGRza2V5OiAnaHVtZHVtJywgbGluZV9ucjogMzYsIGtleXdvcmQ6ICdzaGUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTg5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgdW5kZWZpbmVkXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfc3RkX3ZhcmlhYmxlc19hbmRfc2VxdWVuY2VzOiAtPlxuICAgIHsgbGV0cyxcbiAgICAgIGZyZWV6ZSwgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2xldHNmcmVlemV0aGF0X2luZnJhKCkuc2ltcGxlXG4gICAgY2ZnX2RvX3Nob3dfdmFyaWFibGVzICAgICAgICAgPSBmYWxzZVxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZGIgPSBEYnJpY19zdGQucmVidWlsZCAnOm1lbW9yeTonXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBAdGhyb3dzICggzqliYmRicl8xOTAgPSAtPiBkYi5zdGRfd2l0aF92YXJpYWJsZXMgLT4gZGIuc3RkX3dpdGhfdmFyaWFibGVzIC0+IG51bGwgICksIC9pbGxlZ2FsIHRvIG5lc3QgYHN0ZF93aXRoX3ZhcmlhYmxlc1xcKFxcKWAgY29udGV4dHMvXG4gICAgQHRocm93cyAoIM6pYmJkYnJfMTkxID0gLT4gZGIuc3RkX3NldF92YXJpYWJsZSAnbXluYW1lJywgJ215dmFsdWUnICAgICAgICAgICAgICAgICApLCAvaWxsZWdhbCB0byBzZXQgdmFyaWFibGUvXG4gICAgIyBAdGhyb3dzICggzqliYmRicl8xOTIgPSAtPiBkYi5zdGRfZ2V0X3ZhcmlhYmxlICdteW5hbWUnICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9pbGxlZ2FsIHRvIGdldCB2YXJpYWJsZS9cbiAgICBAdGhyb3dzICggzqliYmRicl8xOTMgPSAtPiBkYi5zdGRfZ2V0X3ZhcmlhYmxlICdteW5hbWUnICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC91bmtub3duIHZhcmlhYmxlL1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgdmFyaWFibGVzID0gKGRiLl9zaG93X3ZhcmlhYmxlcyBjZmdfZG9fc2hvd192YXJpYWJsZXMgKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGIuc3RkX3dpdGhfdmFyaWFibGVzID0+XG4gICAgICBAdGhyb3dzICggzqliYmRicl8xOTQgPSAtPiBkYi5zdGRfZ2V0X3ZhcmlhYmxlICdteW5hbWUnICksIC91bmtub3duIHZhcmlhYmxlL1xuICAgICAgQGVxICggzqliYmRicl8xOTUgPSAtPiAoZGIuX3Nob3dfdmFyaWFibGVzIGNmZ19kb19zaG93X3ZhcmlhYmxlcyApICksIHsgJ3NlcTpnbG9iYWw6cm93aWQnOiB7IHN2OiAwLCBzZDogMSwgY3Y6IDAsIGNkOiAxLCB0djogdW5kZWZpbmVkLCBndjogMCB9IH1cbiAgICAgICMjIyBUQUlOVCB1c2UgQVBJICMjI1xuICAgICAgZGIuc3RhdGUuc3RkX3ZhcmlhYmxlcyA9IGxldHMgZGIuc3RhdGUuc3RkX3ZhcmlhYmxlcywgKCBkICkgLT5cbiAgICAgICAgZFsgJ3NlcTphcHA6Y291bnRlcicgXSA9IHsgbmFtZTogJ3NlcTphcHA6Y291bnRlcicsIHZhbHVlOiA3LCBkZWx0YTogKzMsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTk2ID0gLT4gKGRiLl9zaG93X3ZhcmlhYmxlcyBjZmdfZG9fc2hvd192YXJpYWJsZXMgKSApLCB7ICdzZXE6YXBwOmNvdW50ZXInOiB7IHN2OiB1bmRlZmluZWQsIHNkOiB1bmRlZmluZWQsIGN2OiA3LCBjZDogMywgdHY6IHVuZGVmaW5lZCwgZ3Y6IDcgfSwgJ3NlcTpnbG9iYWw6cm93aWQnOiB7IHN2OiAwLCBzZDogMSwgY3Y6IDAsIGNkOiAxLCB0djogdW5kZWZpbmVkLCBndjogMCB9IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTk3ID0gLT4gZGIuc3RkX2dldF9uZXh0X2luX3NlcXVlbmNlICdzZXE6YXBwOmNvdW50ZXInICksIDEwXG4gICAgICBAZXEgKCDOqWJiZGJyXzE5OCA9IC0+IGRiLnN0ZF9nZXRfbmV4dF9pbl9zZXF1ZW5jZSAnc2VxOmFwcDpjb3VudGVyJyApLCAxM1xuICAgICAgZGIuc3RkX3NldF92YXJpYWJsZSAnZnV6eicsIDExLjVcbiAgICAgIGRiLnN0ZF9zZXRfdmFyaWFibGUgJ25hbWUnLCAnQm9iJ1xuICAgICAgQGVxICggzqliYmRicl8xOTkgPSAtPiBkYi5zdGRfZ2V0X3ZhcmlhYmxlICdmdXp6JyApLCAxMS41XG4gICAgICBAZXEgKCDOqWJiZGJyXzIwMCA9IC0+IGRiLnN0ZF9nZXRfdmFyaWFibGUgJ25hbWUnICksICdCb2InXG4gICAgICBAZXEgKCDOqWJiZGJyXzIwMSA9IC0+IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzICkgKSwgeyBmdXp6OiB7IHN2OiB1bmRlZmluZWQsIHNkOiB1bmRlZmluZWQsIGN2OiAxMS41LCBjZDogbnVsbCwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDExLjUsIH0sIG5hbWU6IHsgc3Y6IHVuZGVmaW5lZCwgc2Q6IHVuZGVmaW5lZCwgY3Y6ICdCb2InLCBjZDogbnVsbCwgdHY6IHVuZGVmaW5lZCwgZ3Y6ICdCb2InIH0sICdzZXE6YXBwOmNvdW50ZXInOiB7IHN2OiB1bmRlZmluZWQsIHNkOiB1bmRlZmluZWQsIGN2OiAxMywgY2Q6IDMsIHR2OiB1bmRlZmluZWQsIGd2OiAxMyB9LCAnc2VxOmdsb2JhbDpyb3dpZCc6IHsgc3Y6IDAsIHNkOiAxLCBjdjogMCwgY2Q6IDEsIHR2OiB1bmRlZmluZWQsIGd2OiAwIH0gfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyB7IG5hbWU6ICdBbGljZScsIGpvYjogJ2VuZ2luZWVyJywgfSwgPT5cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjAyID0gLT4gZGIuc3RkX2dldF92YXJpYWJsZSAnbmFtZScgKSwgJ0FsaWNlJ1xuICAgICAgIyBkZWJ1ZyAnzqliYmRicl8yMDMnLCB7IG5hbWUsIGpvYiwgfVxuICAgICAgQGVxICggzqliYmRicl8yMDQgPSAtPiAoZGIuX3Nob3dfdmFyaWFibGVzIGNmZ19kb19zaG93X3ZhcmlhYmxlcyApICksIHsgZnV6ejogeyBzdjogMTEuNSwgc2Q6IG51bGwsIGN2OiAxMS41LCBjZDogbnVsbCwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDExLjUgfSwgam9iOiB7IHN2OiB1bmRlZmluZWQsIHNkOiB1bmRlZmluZWQsIGN2OiB1bmRlZmluZWQsIGNkOiB1bmRlZmluZWQsIHR2OiAnZW5naW5lZXInLCBndjogJ2VuZ2luZWVyJyB9LCBuYW1lOiB7IHN2OiAnXCJCb2JcIicsIHNkOiBudWxsLCBjdjogJ0JvYicsIGNkOiBudWxsLCB0djogJ0FsaWNlJywgZ3Y6ICdBbGljZScgfSwgJ3NlcTphcHA6Y291bnRlcic6IHsgc3Y6IDEzLCBzZDogMywgY3Y6IDEzLCBjZDogMywgdHY6IHVuZGVmaW5lZCwgZ3Y6IDEzIH0sICdzZXE6Z2xvYmFsOnJvd2lkJzogeyBzdjogMCwgc2Q6IDEsIGN2OiAwLCBjZDogMSwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDAgfSB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqliYmRicl8yMDUgPSAtPiAoZGIuX3Nob3dfdmFyaWFibGVzIGNmZ19kb19zaG93X3ZhcmlhYmxlcyApICksIHsgZnV6ejogeyBzdjogMTEuNSwgc2Q6IG51bGwsIGN2OiAxMS41LCBjZDogbnVsbCwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDExLjUgfSwgbmFtZTogeyBzdjogJ1wiQm9iXCInLCBzZDogbnVsbCwgY3Y6ICdCb2InLCBjZDogbnVsbCwgdHY6IHVuZGVmaW5lZCwgZ3Y6ICdCb2InIH0sICdzZXE6YXBwOmNvdW50ZXInOiB7IHN2OiAxMywgc2Q6IDMsIGN2OiAxMywgY2Q6IDMsIHR2OiB1bmRlZmluZWQsIGd2OiAxMyB9LCAnc2VxOmdsb2JhbDpyb3dpZCc6IHsgc3Y6IDAsIHNkOiAxLCBjdjogMCwgY2Q6IDEsIHR2OiB1bmRlZmluZWQsIGd2OiAwIH0gfVxuICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyA9PlxuICAgICAgQGVxICggzqliYmRicl8yMDYgPSAtPiAoZGIuX3Nob3dfdmFyaWFibGVzIGNmZ19kb19zaG93X3ZhcmlhYmxlcyApICksIHsgZnV6ejogeyBzdjogMTEuNSwgc2Q6IG51bGwsIGN2OiAxMS41LCBjZDogbnVsbCwgdHY6IHVuZGVmaW5lZCwgZ3Y6IDExLjUgfSwgbmFtZTogeyBzdjogJ1wiQm9iXCInLCBzZDogbnVsbCwgY3Y6ICdCb2InLCBjZDogbnVsbCwgdHY6IHVuZGVmaW5lZCwgZ3Y6ICdCb2InIH0sICdzZXE6YXBwOmNvdW50ZXInOiB7IHN2OiAxMywgc2Q6IDMsIGN2OiAxMywgY2Q6IDMsIHR2OiB1bmRlZmluZWQsIGd2OiAxMyB9LCAnc2VxOmdsb2JhbDpyb3dpZCc6IHsgc3Y6IDAsIHNkOiAxLCBjdjogMCwgY2Q6IDEsIHR2OiB1bmRlZmluZWQsIGd2OiAwIH0gfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyA9PlxuICAgICAgIyMjIE1vZGVsIHRoYXQgc2hvd3MgaG93IHRvIGluc2VydCBzZXF1ZW50aWFsIFJvd0lEcyB1c2luZyBhIHByaXZhdGUgdGFibGUsIGFuIGFzc29jaWF0ZWQgcHVibGljXG4gICAgICB2aWV3LCBhbmQgYSBgaW5zdGVhZCBvZiBpbnNlcnRgIHRyaWdnZXI6ICMjI1xuICAgICAgZGIuc3RkX3NldF92YXJpYWJsZSAnc2VxOmxldHRlcnMnLCAwLCAxXG4gICAgICBkYi5leGVjdXRlIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBfbGV0dGVycyAoXG4gICAgICAgICAgcm93aWQgICB0ZXh0ICAgIHVuaXF1ZSAgbm90IG51bGwsXG4gICAgICAgICAgbGV0dGVyICB0ZXh0ICAgIHVuaXF1ZSAgbm90IG51bGwsXG4gICAgICAgIC0tIHByaW1hcnkga2V5ICggcm93aWQgKVxuICAgICAgICBjb25zdHJhaW50IFwizqljb25zdHJhaW50XzIwN1wiIGNoZWNrICggbGVuZ3RoKCBsZXR0ZXIgKSA9IDEgKVxuICAgICAgICApIHN0cmljdDtcIlwiXCJcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJcIlwiY3JlYXRlIHZpZXcgbGV0dGVycyBhcyBzZWxlY3QgKiBmcm9tIF9sZXR0ZXJzO1wiXCJcIlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJjcmVhdGUgdHJpZ2dlciBvbl9iZWZvcmVfaW5zZXJ0X2xldHRlcnNcbiAgICAgICAgaW5zdGVhZCBvZiBpbnNlcnQgb24gbGV0dGVyc1xuICAgICAgICAgIGZvciBlYWNoIHJvdyBiZWdpblxuICAgICAgICAgICAgaW5zZXJ0IGludG8gX2xldHRlcnMgKCByb3dpZCwgbGV0dGVyICkgdmFsdWVzXG4gICAgICAgICAgICAgIC0tICggJ3Q6bGV0dGVyczpSPScgfHwgY2FzdCggc3RkX2dldF9uZXh0X2luX3NlcXVlbmNlKCAnc2VxOmxldHRlcnMnICkgYXMgaW50ZWdlciApLCBuZXcubGV0dGVyICk7XG4gICAgICAgICAgICAgICggcHJpbnRmKCAndDpsZXR0ZXJzOlI9JWQnLCBzdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UoICdzZXE6bGV0dGVycycgKSApLCBuZXcubGV0dGVyICk7XG4gICAgICAgICAgICBlbmQ7XG4gICAgICAgIDtcIlwiXCJcbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJcIlwiaW5zZXJ0IGludG8gbGV0dGVycyAoIGxldHRlciApIHZhbHVlcyAoICdhJyApLCAoICd6JyApO1wiXCJcIlxuICAgICAgIyBpbmZvICfOqWJiZGJyXzIwOCcsIHJvdyBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gbGV0dGVycztcIlxuICAgICAgcm93cyA9IGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGxldHRlcnMgb3JkZXIgYnkgbGV0dGVyO1wiXG4gICAgICBAZXEgKCDOqWJiZGJyXzIwOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmxldHRlcnM6Uj0xJywgbGV0dGVyOiAnYScsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjEwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6bGV0dGVyczpSPTInLCBsZXR0ZXI6ICd6JywgfVxuICAgICAgQGVxICggzqliYmRicl8yMTEgPSAtPiByb3dzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyA9PlxuICAgICAgIyMjIE5PVEUgTW9kZWwgdGhhdCBzaG93cyBob3cgdG8gaW5zZXJ0IHJvd3Mgd2l0aCBzZXF1ZW50aWFsIFJvd0lEcyB1c2luZyBhIHRiYWxlIGFuZCBhbmQgYGFmdGVyXG4gICAgICBpbnNlcnRgIHRyaWdnZXIgdGhhdCB1cGRhdGVzIGByb3dpZGA6ICMjI1xuICAgICAgZGIuc3RkX3NldF92YXJpYWJsZSAnc2VxOm51bWJlcnMnLCAwLCAxXG4gICAgICBkYi5leGVjdXRlIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBudW1iZXJzIChcbiAgICAgICAgICByb3dpZCAgIHRleHQgICAgdW5pcXVlICBub3QgbnVsbCBkZWZhdWx0ICduZXdfcm93aWQnLFxuICAgICAgICAgIG51bWJlciAgdGV4dCAgICB1bmlxdWUgIG5vdCBudWxsXG4gICAgICAgICkgc3RyaWN0O1wiXCJcIlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJjcmVhdGUgdHJpZ2dlciBvbl9hZnRlcl9pbnNlcnRfb25fbnVtYmVyc1xuICAgICAgICBhZnRlciBpbnNlcnQgb24gbnVtYmVycyBmb3IgZWFjaCByb3cgYmVnaW5cbiAgICAgICAgICAgIHVwZGF0ZSBudW1iZXJzIHNldCByb3dpZCA9IHByaW50ZiggJ3Q6bnVtYmVyczpSPSVkJywgc3RkX2dldF9uZXh0X2luX3NlcXVlbmNlKCAnc2VxOm51bWJlcnMnICkgKVxuICAgICAgICAgICAgICB3aGVyZSByb3dpZCA9ICduZXdfcm93aWQnO1xuICAgICAgICAgICAgZW5kO1xuICAgICAgICA7XCJcIlwiXG4gICAgICBkYi5leGVjdXRlIFNRTFwiXCJcImluc2VydCBpbnRvIG51bWJlcnMgKCBudW1iZXIgKSB2YWx1ZXMgKCAndW5vJyApLCAoICdkdWUnICk7XCJcIlwiXG4gICAgICAjIGluZm8gJ86pYmJkYnJfMjEyJywgcm93IGZvciByb3cgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBudW1iZXJzO1wiXG4gICAgICByb3dzID0gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gbnVtYmVycyBvcmRlciBieSByb3dpZDtcIlxuICAgICAgQGVxICggzqliYmRicl8yMTMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpudW1iZXJzOlI9MScsIG51bWJlcjogJ3VubycsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjE0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6bnVtYmVyczpSPTInLCBudW1iZXI6ICdkdWUnLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzIxNSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjIyMgTk9URSBNb2RlbCB0aGF0IHNob3dzIGhvdyB0byBidWlsZCBhIHBhcmFtZXRyaXplZCB2aWV3OiAjIyNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIyMgcmVwZWF0IGVhcmxpZXIgdGVzdCB0byBlbnN1cmUgd2Uga25vdyB3aGF0J3MgdGhlcmU6ICMjI1xuICAgICAgcm93cyA9IGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGxldHRlcnMgb3JkZXIgYnkgbGV0dGVyO1wiXG4gICAgICBAZXEgKCDOqWJiZGJyXzIxNiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmxldHRlcnM6Uj0xJywgbGV0dGVyOiAnYScsIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMjE3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6bGV0dGVyczpSPTInLCBsZXR0ZXI6ICd6JywgfVxuICAgICAgQGVxICggzqliYmRicl8yMTggPSAtPiByb3dzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBpbnNlcnRfbGV0dGVyID0gZGIucHJlcGFyZSBTUUxcIlwiXCJpbnNlcnQgaW50byBsZXR0ZXJzICggbGV0dGVyICkgdmFsdWVzICggJGxldHRlciApO1wiXCJcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJcIlwiY3JlYXRlIHZpZXcgcnVuX29mX2xldHRlcnMgYXNcbiAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAqXG4gICAgICAgICAgZnJvbSBsZXR0ZXJzXG4gICAgICAgICAgd2hlcmUgbGV0dGVyIGJldHdlZW4gc3RkX2dldF92YXJpYWJsZSggJ2ZpcnN0X2xldHRlcicgKSBhbmQgc3RkX2dldF92YXJpYWJsZSggJ2xhc3RfbGV0dGVyJyApO1wiXCJcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRiLnN0ZF93aXRoX3ZhcmlhYmxlcyA9PlxuICAgICAgICBmb3IgY2lkIGluIFsgKCAnYicuY29kZVBvaW50QXQgMCApIC4uICggJ3knLmNvZGVQb2ludEF0IDAgKSBdXG4gICAgICAgICAgbGV0dGVyID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkXG4gICAgICAgICAgaW5zZXJ0X2xldHRlci5ydW4geyBsZXR0ZXIsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkYi5zdGRfd2l0aF92YXJpYWJsZXMgeyBmaXJzdF9sZXR0ZXI6ICdnJywgbGFzdF9sZXR0ZXI6ICdtJyB9LCA9PlxuICAgICAgICByZXN1bHQgICAgPSAoIHJvdy5sZXR0ZXIgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHJ1bl9vZl9sZXR0ZXJzIG9yZGVyIGJ5IGxldHRlcjtcIiApLmpvaW4gJywnXG4gICAgICAgIHZhcmlhYmxlcyA9IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzIClcbiAgICAgICAgQGVxICggzqliYmRicl8yMTkgPSAtPiByZXN1bHQgICAgICAgICAgICAgICAgICAgICAgKSwgJ2csaCxpLGosayxsLG0nXG4gICAgICAgIEBlcSAoIM6pYmJkYnJfMjIwID0gLT4gdmFyaWFibGVzLmZpcnN0X2xldHRlcj8uZ3YgICksICdnJ1xuICAgICAgICBAZXEgKCDOqWJiZGJyXzIyMSA9IC0+IHZhcmlhYmxlcy5sYXN0X2xldHRlcj8uZ3YgICApLCAnbSdcbiAgICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjIyMgTk9URSBNb2RlbCB0aGF0IHNob3dzIGhvdyB0byB1c2UgYSBzZXF1ZW5jZSB0byBwcm9kdWNlIFJvd0lEczpcblxuICAgICAgKiBgJHRhYmxlLnJvd2lkYCBjb2x1bW4gaXMgZGVjbGFyZWQgKndpdGhvdXQqIGBnZW5lcmF0ZSBhbHdheXNgIGNsYXVzZSxcbiAgICAgICogdGh1cyBgJHRhYmxlLnJvd2lkYCBjYW4gYmUgdXNlZCBhcyBwcmltYXJ5IGtleTtcbiAgICAgICogYWRkaXRpb25hbGx5LCBtYXkgY29udGFpbiBjaGVjayBjbGF1c2UgZm9yIGAkdGFibGUucm93aWRgLlxuICAgICAgKiBBbiBgaW5zZXJ0YCBzdGF0ZW1lbnQgaXMgZGVmaW5lZCB0aGF0IGNhbGxzIGBzdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UoKWAgdG8gb2J0YWluIG5leHQgUm93SUQ7XG4gICAgICAqIGlmIERCLXdpZGUgdW5pcXVlIFJvd0lEcyBhcmUgZGVzaXJhYmxlLCB1c2UgYHByaW50ZigpYCB0byBlbWJlZCBudW1lcmljYWwgUm93SUQgaW4gc3RyaW5nLlxuICAgICAgKiBTdWdnZXN0ZWQgdG8gdXNlIGEgc3VmZml4IGBfdmAgdG8gaWRlbnRpZnkgc3RhdGVtZW50IGFzIHVzaW5nIHZhcmlhYmxlcyBhbmQgcmVxdWlyZXMgdG8gYmUgdXNlZFxuICAgICAgICBpbnNpZGUgYSBgZGIuc3RkX3dpdGhfdmFyaWFibGVzKClgIGNvbnRleHQgaGFuZGxlci5cbiAgICAgICogSW5zZXJ0IHN0YXRlbWVudCB0YWtlcyBjYXJlIG9mIHRoZSBpbXBsZW1lbnRhdGlvbiBkZXRhaWwgb2YgYXNzaWduaW5nIHRoZSBuZXh0IHVuaXF1ZSBSb3dJRDsgc2luY2VcbiAgICAgICAgaXRzIHZhbHVlIGlzIHBlcnNpc3RlZCBpbiB0aGUgREIsIGluc2VydHMgY2FuIGJlIGRvbmUgYWNyb3NzIHNldmVyYWwgc2Vzc2lvbnMgd2l0aG91dCBuZWVkaW5nIGFueVxuICAgICAgICBhZGRpdGlvbmFsIGNvZGUgYmVzaWRlcyB0aGUgY29udGV4dCBoYW5kbGVyLlxuICAgICAgIyMjXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyMjIE5PVEUgcGFydCBvZiBgRGJyaWMuYnVpbGRgIGxpc3Q6ICMjI1xuICAgICAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJjcmVhdGUgdGFibGUgcHJmeF93b3JkcyAoXG4gICAgICAgICAgcm93aWQgICAgIHRleHQgIHVuaXF1ZSAgbm90IG51bGwsXG4gICAgICAgICAgZW4gICAgICAgIHRleHQgICAgICAgICAgbm90IG51bGwsXG4gICAgICAgICAgZGUgICAgICAgIHRleHQgICAgICAgICAgbm90IG51bGwsXG4gICAgICAgIHByaW1hcnkga2V5ICggcm93aWQgKSxcbiAgICAgICAgY29uc3RyYWludCBcIs6pY29uc3RyYWludF8yMjJcIiBjaGVjayAoIHJvd2lkIHJlZ2V4cCAndDp3cmQ6Uj1cXFxcZCsnICkgKTtcIlwiXCJcbiAgICAgICMjIyBOT1RFIHBhcnQgb2YgYERicmljLnN0YXRlbWVudHNgIG9iamVjdDogIyMjXG4gICAgICBpbnNlcnRfd29yZF92ID0gZGIucHJlcGFyZSBTUUxcIlwiXCJpbnNlcnQgaW50byBwcmZ4X3dvcmRzICggcm93aWQsIGVuLCBkZSApIHZhbHVlcyAoXG4gICAgICAgICAgcHJpbnRmKCAndDp3cmQ6Uj0lZCcsIHN0ZF9nZXRfbmV4dF9pbl9zZXF1ZW5jZSggJ3NlcTpwcmZ4X3dvcmRzX3Jvd2lkJyApICksXG4gICAgICAgICAgJGVuLFxuICAgICAgICAgICRkZSApO1wiXCJcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMjIyBOT1RFIHBhcnQgb2YgcmVidWlsZCgpICg/LCBzdGlsbCB1bmNsZWFyKTogIyMjXG4gICAgICBkYi5zdGRfd2l0aF92YXJpYWJsZXMgPT5cbiAgICAgICAgZGIuc3RkX3NldF92YXJpYWJsZSAnc2VxOnByZnhfd29yZHNfcm93aWQnLCAxMDAsICsxMDBcbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIyMgTk9URSBpbiB0aGUgYXBwIHByb3BlcjogIyMjXG4gICAgICBkYi5zdGRfd2l0aF92YXJpYWJsZXMgPT5cbiAgICAgICAgaW5zZXJ0X3dvcmRfdi5ydW4geyBlbjogJ2RvZycsICBkZTogJ0h1bmQnLCAgIH1cbiAgICAgICAgaW5zZXJ0X3dvcmRfdi5ydW4geyBlbjogJ2NhdCcsICBkZTogJ0thdHplJywgIH1cbiAgICAgICAgaW5zZXJ0X3dvcmRfdi5ydW4geyBlbjogJ3dvcmQnLCBkZTogJ1dvcnQnLCAgIH1cbiAgICAgICAgaW5zZXJ0X3dvcmRfdi5ydW4geyBlbjogJ2NhbGwnLCBkZTogJ3J1ZmVuJywgIH1cbiAgICAgICAgaW5zZXJ0X3dvcmRfdi5ydW4geyBlbjogJ2NhbGwnLCBkZTogJ0FucnVmJywgIH1cbiAgICAgICAgaW5zZXJ0X3dvcmRfdi5ydW4geyBlbjogJ2Jvb2snLCBkZTogJ0J1Y2gnLCAgIH1cbiAgICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHZhcmlhYmxlcyA9IChkYi5fc2hvd192YXJpYWJsZXMgY2ZnX2RvX3Nob3dfdmFyaWFibGVzIClcbiAgICBAZXEgKCDOqWJiZGJyXzIyMyA9IC0+IHZhcmlhYmxlc1sgJ3NlcTpwcmZ4X3dvcmRzX3Jvd2lkJyBdPy5ndiAgKSwgNzAwXG4gICAgIyBlY2hvICfOqWJiZGJyXzIyNCcsIHJvdyBmb3Igcm93IGZyb20gZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gcHJmeF93b3JkcyBvcmRlciBieSBkZTtcIlxuICAgIHJvd3MgPSBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBwcmZ4X3dvcmRzIG9yZGVyIGJ5IGRlO1wiXG4gICAgQGVxICggzqliYmRicl8yMjUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDp3cmQ6Uj02MDAnLCBlbjogJ2NhbGwnLCBkZTogJ0FucnVmJyB9XG4gICAgQGVxICggzqliYmRicl8yMjYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDp3cmQ6Uj03MDAnLCBlbjogJ2Jvb2snLCBkZTogJ0J1Y2gnIH1cbiAgICBAZXEgKCDOqWJiZGJyXzIyNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OndyZDpSPTIwMCcsIGVuOiAnZG9nJywgZGU6ICdIdW5kJyB9XG4gICAgQGVxICggzqliYmRicl8yMjggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDp3cmQ6Uj0zMDAnLCBlbjogJ2NhdCcsIGRlOiAnS2F0emUnIH1cbiAgICBAZXEgKCDOqWJiZGJyXzIyOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OndyZDpSPTQwMCcsIGVuOiAnd29yZCcsIGRlOiAnV29ydCcgfVxuICAgIEBlcSAoIM6pYmJkYnJfMjMwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6d3JkOlI9NTAwJywgZW46ICdjYWxsJywgZGU6ICdydWZlbicgfVxuICAgIEBlcSAoIM6pYmJkYnJfMjMxID0gLT4gcm93cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX3N0cmljdF9tb2RlOiAtPlxuICAgIHsgbGV0cyxcbiAgICAgIGZyZWV6ZSwgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2xldHNmcmVlemV0aGF0X2luZnJhKCkuc2ltcGxlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZGIgPSBEYnJpYy5yZWJ1aWxkICc6bWVtb3J5OidcbiAgICAgICggZGIucHJlcGFyZSBTUUxcInByYWdtYSBzdHJpY3QgICAgICAgPSBvbjtcIiAgICApLnJ1bigpXG4gICAgICBkYi5leGVjdXRlIFNRTFwiY3JlYXRlIHRhYmxlIHQgKCBmIGludGVnZXIgKTtcIlxuICAgICAgZGIuZXhlY3V0ZSBTUUxcImluc2VydCBpbnRvIHQgdmFsdWVzICggMTIzNCApO1wiXG4gICAgICBkYi5leGVjdXRlIFNRTFwiaW5zZXJ0IGludG8gdCB2YWx1ZXMgKCAxMi4zNCApO1wiXG4gICAgICBkYi5leGVjdXRlIFNRTFwiaW5zZXJ0IGludG8gdCB2YWx1ZXMgKCAnd2F0JyApO1wiXG4gICAgICAjIGRlYnVnICfOqWJiZGJyXzIzMicsICggcm93LmYgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgZiBmcm9tIHQ7XCIgKVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBkYiA9IERicmljLnJlYnVpbGQgJzptZW1vcnk6J1xuICAgICAgKCBkYi5wcmVwYXJlIFNRTFwicHJhZ21hIHN0cmljdCAgICAgICA9IG9uO1wiICAgICkucnVuKClcbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyXzIzMyA9IC0+IGRiLmV4ZWN1dGUgU1FMXCJjcmVhdGUgdGFibGUgdCAoIGYgaW50ZWdlciwgaiBqc29uICkgc3RyaWN0O1wiICksIC91bmtub3duIGRhdGF0eXBlIGZvciB0XFwuai9cbiAgICAgIGRiLmV4ZWN1dGUgU1FMXCJjcmVhdGUgdGFibGUgdCAoIGYgaW50ZWdlciwgaiBibG9iICkgc3RyaWN0O1wiXG4gICAgICBkYi5leGVjdXRlIFNRTFwiaW5zZXJ0IGludG8gdCAoIGYgKSB2YWx1ZXMgKCAxMjM0ICk7XCJcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjM0ID0gLT4gKCBkYi5nZXRfZmlyc3QgU1FMXCJzZWxlY3QgdHlwZW9mKCAxMiAgICApIGFzIHR5cGU7XCIgKS50eXBlICksICdpbnRlZ2VyJ1xuICAgICAgQGVxICggzqliYmRicl8yMzUgPSAtPiAoIGRiLmdldF9maXJzdCBTUUxcInNlbGVjdCB0eXBlb2YoIDEyLjM0ICkgYXMgdHlwZTtcIiApLnR5cGUgKSwgJ3JlYWwnXG4gICAgICBAZXEgKCDOqWJiZGJyXzIzNiA9IC0+ICggZGIuZ2V0X2ZpcnN0IFNRTFwic2VsZWN0IHR5cGVvZiggJ3dhdCcgKSBhcyB0eXBlO1wiICkudHlwZSApLCAndGV4dCdcbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyXzIzNyA9IC0+IGRiLmV4ZWN1dGUgU1FMXCJpbnNlcnQgaW50byB0ICggZiApIHZhbHVlcyAoIDEyLjM0ICk7XCIgKSwgL2Nhbm5vdCBzdG9yZSBSRUFMIHZhbHVlIGluIElOVEVHRVIgY29sdW1uL1xuICAgICAgQHRocm93cyAoIM6pYmJkYnJfMjM4ID0gLT4gZGIuZXhlY3V0ZSBTUUxcImluc2VydCBpbnRvIHQgKCBmICkgdmFsdWVzICggJ3dhdCcgKTtcIiApLCAvY2Fubm90IHN0b3JlIFRFWFQgdmFsdWUgaW4gSU5URUdFUiBjb2x1bW4vXG4gICAgICAjIGRlYnVnICfOqWJiZGJyXzIzOScsICggcm93LmYgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgZiBmcm9tIHQ7XCIgKVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19keW5hbWljX2J1aWxkX3Byb3BlcnRpZXM6IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgRGJfMSBleHRlbmRzIERicmljX3N0ZFxuICAgICAgICBAcHJlZml4OiAnd3JkJ1xuICAgICAgICBAYnVpbGQ6IFtcbiAgICAgICAgICAtPiBTUUxcIlwiXCJjcmVhdGUgdGFibGUgI3tJRE4gXCIje0BjZmcucHJlZml4fV93b3Jkc1wifSAoIHQgdGV4dCApO1wiXCJcIlxuICAgICAgICAgIC0+IFNRTFwiXCJcImluc2VydCBpbnRvICN7SUROIFwiI3tAY2ZnLnByZWZpeH1fd29yZHNcIn0gKCB0ICkgdmFsdWVzICggJ+awtCAo44G/44GaKScgKTtcIlwiXCJcbiAgICAgICAgICAtPiBTUUxcIlwiXCJpbnNlcnQgaW50byAje0lETiBcIiN7QGNmZy5wcmVmaXh9X3dvcmRzXCJ9ICggdCApIHZhbHVlcyAoICfpo5/jgbnniakgKOOBn+OBueOCguOBriknICk7XCJcIlwiXG4gICAgICAgICAgXVxuICAgICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgICBzZWxlY3Rfd29yZHM6IC0+IFNRTFwiXCJcInNlbGVjdCAqIGZyb20gI3tJRE4gXCIje0BjZmcucHJlZml4fV93b3Jkc1wifVwiXCJcIlxuICAgICAgZGIgPSBEYl8xLnJlYnVpbGQoKVxuICAgICAgcmVsYXRpb25fbmFtZXMgPSBuZXcgU2V0ICggcm93Lm5hbWUgZm9yIHJvdyBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHN0ZF9yZWxhdGlvbnM7XCIgKVxuICAgICAgZGVidWcgJ86pYmJkYnJfMjQwJywgcmVsYXRpb25fbmFtZXNcbiAgICAgIGRlYnVnICfOqWJiZGJyXzI0MScsIGRiLmNvbnN0cnVjdG9yLnByZWZpeFxuICAgICAgZGVidWcgJ86pYmJkYnJfMjQyJywgZGIuY2ZnXG4gICAgICBAZXEgKCDOqWJiZGJyXzI0MyA9IC0+IHJlbGF0aW9uX25hbWVzLmhhcyAnd3JkX3dvcmRzJyAgICAgICksIHRydWVcbiAgICAgIHJvd3MgPSBkYi53YWxrIFNRTFwiXCJcInNlbGVjdCAqIGZyb20gI3tJRE4gXCIje0RiXzEucHJlZml4fV93b3Jkc1wifTtcIlwiXCJcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjQ0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUudCAgICAgICAgICAgICAgICAgKSwgJ+awtCAo44G/44GaKSdcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjQ1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUudCAgICAgICAgICAgICAgICAgKSwgJ+mjn+OBueeJqSAo44Gf44G544KC44GuKSdcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjQ2ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgcm93cyA9IGRiLndhbGsgZGIuc3RhdGVtZW50cy5zZWxlY3Rfd29yZHNcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjQ3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUudCAgICAgICAgICAgICAgICAgKSwgJ+awtCAo44G/44GaKSdcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjQ4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUudCAgICAgICAgICAgICAgICAgKSwgJ+mjn+OBueeJqSAo44Gf44G544KC44GuKSdcbiAgICAgIEBlcSAoIM6pYmJkYnJfMjQ5ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19wbHVnaW5zX2FjcXVpc2l0aW9uOiAtPlxuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICB9ID0gKCByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL3Vuc3RhYmxlLXJwci10eXBlX29mLWJyaWNzJyApLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBnZXRfYWxsX2luX3Byb3RvdHlwZV9jaGFpbixcbiAgICAgIGdldF9wcm90b3R5cGVfY2hhaW4sICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvcHJvdG90eXBlLXRvb2xzJ1xuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbmJyX251bWJlcl9wbHVnaW4gPVxuICAgICAgbmFtZTogICAnbmJyX251bWJlcl9wbHVnaW4nICMjIyBOT1RFIGluZm9ybWF0aXZlLCBub3QgZW5mb3JjZWQgIyMjXG4gICAgICBwcmVmaXg6ICduYnInICAgICAgICAgICAgICAgIyMjIE5PVEUgaW5mb3JtYXRpdmUsIG5vdCBlbmZvcmNlZCAjIyNcbiAgICAgIGV4cG9ydHM6XG4gICAgICAgIGJ1aWxkOiBbXG4gICAgICAgICAgU1FMXCJjcmVhdGUgdGFibGUgbmJyX251bWJlcnMgKCBudW1iZXIgaW50ZWdlciApO1wiXG4gICAgICAgICAgXVxuICAgICAgICBzdGF0ZW1lbnRzOlxuICAgICAgICAgIG5icl9pbnNlcnRfbnVtYmVyOiAgICAgICAgICBTUUxcImluc2VydCBpbnRvIG5icl9udW1iZXJzIHZhbHVlcyAoICRudW1iZXIgKTtcIlxuICAgICAgICAgIG5icl9zZWxlY3RfbnVtYmVyczogICAgICAgICBTUUxcInNlbGVjdCAqIGZyb20gbmJyX251bWJlcnMgb3JkZXIgYnkgbnVtYmVyO1wiXG4gICAgICAgICAgbmJyX3NlbGVjdF9zcXVhcmVfbnVtYmVyczogIFNRTFwic2VsZWN0IG5icl9zcXVhcmUoIG51bWJlciApIGZyb20gbmJyX251bWJlcnMgb3JkZXIgYnkgbnVtYmVyO1wiXG4gICAgICAgIGZ1bmN0aW9uczpcbiAgICAgICAgICBuYnJfc3F1YXJlOlxuICAgICAgICAgICAgdmFsdWU6ICggbnVtYmVyICkgLT4gQG5icl9nZXRfc3F1YXJlIG51bWJlclxuICAgICAgICBtZXRob2RzOlxuICAgICAgICAgIG5icl9nZXRfc3F1YXJlOiAoIG51bWJlciApIC0+IG51bWJlciAqKiAyXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBvdGhlcl9wbHVnaW4gPVxuICAgICAgcHJlZml4OiAnb3RoZXInXG4gICAgICBleHBvcnRzOlxuICAgICAgICBzdGF0ZW1lbnRzOlxuICAgICAgICAgIG90aGVyX3NlbGVjdF93YXQ6IFNRTFwic2VsZWN0IDEgYXMgd2F0O1wiXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0ZXh0X3BsdWdpbiA9XG4gICAgICBuYW1lOiAgICd0ZXh0LXBsdWdpbidcbiAgICAgIHByZWZpeDogJ3R4dCdcbiAgICAgIGV4cG9ydHM6XG4gICAgICAgIGZ1bmN0aW9uczpcbiAgICAgICAgICB0eHRfdXBwZXI6XG4gICAgICAgICAgICB2YWx1ZTogICggdGV4dCApIC0+IHRleHQudG9VcHBlckNhc2UoKVxuICAgICAgICBzdGF0ZW1lbnRzOlxuICAgICAgICAgIHR4dF9zZWxlY3Rfb25lOiBTUUxcInNlbGVjdCAxIGFzIG9uZTtcIlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJfMSBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQHByZWZpeDogICdkYjEnXG4gICAgICBAcGx1Z2luczogW1xuICAgICAgICBvdGhlcl9wbHVnaW5cbiAgICAgICAgJ3Byb3RvdHlwZXMnXG4gICAgICAgIG5icl9udW1iZXJfcGx1Z2luXG4gICAgICAgICdtZSdcbiAgICAgICAgdGV4dF9wbHVnaW5cbiAgICAgICAgXVxuICAgICAgQGV4cG9ydHM6IHt9XG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJjcmVhdGUgdGFibGUgeCAoIGlkIGludGVnZXIgKTtcIlxuICAgICAgICBdXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgZGIxX3NlbGVjdF94OiBTUUxcInNlbGVjdCAqIGZyb20geDtcIlxuICAgICAgQGZ1bmN0aW9uczpcbiAgICAgICAgZGIxX2N1YmU6XG4gICAgICAgICAgdmFsdWU6ICggeCApIC0+IHggKiogM1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZGIgPSBEYl8xLnJlYnVpbGQoKVxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgcmVzdWx0ICA9IFtdXG4gICAgZm9yIHsgdHlwZSwgY29udHJpYnV0b3IsIH0gaW4gZGIuX2dldF9hY3F1aXNpdGlvbl9jaGFpbigpXG4gICAgICByZXN1bHQucHVzaCBcIlsje3R5cGV9XSN7Y29udHJpYnV0b3IubmFtZSA/ICcoYW5vbnltb3VzKSd9XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pYmJkYnJfMjUwID0gLT4gcmVzdWx0ICksIFtcbiAgICAgICdbcGx1Z2luXShhbm9ueW1vdXMpJ1xuICAgICAgJ1twcm90b3R5cGVdRGJyaWNfc3RkX2Jhc2UnXG4gICAgICAnW3Byb3RvdHlwZV1EYnJpY19zdGRfdmFyaWFibGVzJ1xuICAgICAgJ1twcm90b3R5cGVdRGJyaWNfc3RkJ1xuICAgICAgJ1twbHVnaW5dbmJyX251bWJlcl9wbHVnaW4nXG4gICAgICAnW3Byb3RvdHlwZV1EYl8xJ1xuICAgICAgJ1twbHVnaW5ddGV4dC1wbHVnaW4nIF1cbiAgICBmb3IgeyB0eXBlLCBjb250cmlidXRvciwgfSBpbiBkYi5fZ2V0X2FjcXVpc2l0aW9uX2NoYWluKClcbiAgICAgIGlmIHR5cGUgaXMgJ3BsdWdpbidcbiAgICAgICAgaW5mbyAnzqliYmRicl8yNTEnLCBcIlsje3R5cGV9XSN7Y29udHJpYnV0b3IubmFtZSA/ICcoYW5vbnltb3VzKSd9XCIsIE9iamVjdC5rZXlzIGNvbnRyaWJ1dG9yLmV4cG9ydHNcbiAgICAgIGVsc2VcbiAgICAgICAgKCBpZiAoIGNvbnRyaWJ1dG9yIGlzIGRiLmNvbnN0cnVjdG9yICkgdGhlbiBoZWxwIGVsc2UgdXJnZSApICfOqWJiZGJyXzI1MicsIFwiWyN7dHlwZX1dI3tjb250cmlidXRvci5uYW1lID8gJyhhbm9ueW1vdXMpJ31cIlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY29udHJpYnV0aW9ucyA9IGRiLl9jb2xsZWN0X2NvbnRyaWJ1dG9yX3Byb3BlcnRpZXMoKVxuICAgIEBlcSAoIM6pYmJkYnJfMjUzID0gLT4gKCBPYmplY3Qua2V5cyBjb250cmlidXRpb25zICkuc29ydCgpICksIFtcbiAgICAgICdhZ2dyZWdhdGVfZnVuY3Rpb25zJ1xuICAgICAgJ2J1aWxkJ1xuICAgICAgJ2Z1bmN0aW9ucydcbiAgICAgICdtZXRob2RzJ1xuICAgICAgJ3N0YXRlbWVudHMnXG4gICAgICAndGFibGVfZnVuY3Rpb25zJ1xuICAgICAgJ3ZpcnR1YWxfdGFibGVzJ1xuICAgICAgJ3dpbmRvd19mdW5jdGlvbnMnIF1cbiAgICBkZWJ1ZyAnzqliYmRicl8yNTQnLCB0b2dnbGUgJ2J1aWxkOiAgICAgICAgICAgICAgICcsIE9iamVjdC5rZXlzIGNvbnRyaWJ1dGlvbnMuYnVpbGRcbiAgICBkZWJ1ZyAnzqliYmRicl8yNTUnLCB0b2dnbGUgJ2FnZ3JlZ2F0ZV9mdW5jdGlvbnM6ICcsIE9iamVjdC5rZXlzIGNvbnRyaWJ1dGlvbnMuYWdncmVnYXRlX2Z1bmN0aW9uc1xuICAgIGRlYnVnICfOqWJiZGJyXzI1NicsIHRvZ2dsZSAnZnVuY3Rpb25zOiAgICAgICAgICAgJywgT2JqZWN0LmtleXMgY29udHJpYnV0aW9ucy5mdW5jdGlvbnNcbiAgICBkZWJ1ZyAnzqliYmRicl8yNTcnLCB0b2dnbGUgJ21ldGhvZHM6ICAgICAgICAgICAgICcsIE9iamVjdC5rZXlzIGNvbnRyaWJ1dGlvbnMubWV0aG9kc1xuICAgIGRlYnVnICfOqWJiZGJyXzI1OCcsIHRvZ2dsZSAnc3RhdGVtZW50czogICAgICAgICAgJywgT2JqZWN0LmtleXMgY29udHJpYnV0aW9ucy5zdGF0ZW1lbnRzXG4gICAgZGVidWcgJ86pYmJkYnJfMjU5JywgdG9nZ2xlICd0YWJsZV9mdW5jdGlvbnM6ICAgICAnLCBPYmplY3Qua2V5cyBjb250cmlidXRpb25zLnRhYmxlX2Z1bmN0aW9uc1xuICAgIGRlYnVnICfOqWJiZGJyXzI2MCcsIHRvZ2dsZSAndmlydHVhbF90YWJsZXM6ICAgICAgJywgT2JqZWN0LmtleXMgY29udHJpYnV0aW9ucy52aXJ0dWFsX3RhYmxlc1xuICAgIGRlYnVnICfOqWJiZGJyXzI2MScsIHRvZ2dsZSAnd2luZG93X2Z1bmN0aW9uczogICAgJywgT2JqZWN0LmtleXMgY29udHJpYnV0aW9ucy53aW5kb3dfZnVuY3Rpb25zXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBAZXEgKCDOqWJiZGJyXzI2MiA9IC0+IE9iamVjdC5rZXlzIGNvbnRyaWJ1dGlvbnMuZnVuY3Rpb25zICksIFtcbiAgICAgICdyZWdleHAnXG4gICAgICAnc3RkX2lzX3VjX25vcm1hbCdcbiAgICAgICdzdGRfbm9ybWFsaXplX3RleHQnXG4gICAgICAnc3RkX25vcm1hbGl6ZV9qc29uX29iamVjdCdcbiAgICAgICdzdGRfZ2V0X25leHRfaW5fc2VxdWVuY2UnXG4gICAgICAnc3RkX2dldF92YXJpYWJsZSdcbiAgICAgICduYnJfc3F1YXJlJ1xuICAgICAgJ2RiMV9jdWJlJ1xuICAgICAgJ3R4dF91cHBlcicgXVxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQGVxICggzqliYmRicl8yNjMgPSAtPiBPYmplY3Qua2V5cyBjb250cmlidXRpb25zLnN0YXRlbWVudHMgKSwgW1xuICAgICAgJ290aGVyX3NlbGVjdF93YXQnXG4gICAgICAnc3RkX2dldF9zY2hlbWEnXG4gICAgICAnc3RkX2dldF90YWJsZXMnXG4gICAgICAnc3RkX2dldF92aWV3cydcbiAgICAgICdzdGRfZ2V0X3JlbGF0aW9ucydcbiAgICAgICdzdGRfZ2V0X2Z1bmN0aW9ucydcbiAgICAgICdzdGRfc2V0X3ZhcmlhYmxlJ1xuICAgICAgJ3N0ZF9nZXRfdmFyaWFibGVzJ1xuICAgICAgJ25icl9pbnNlcnRfbnVtYmVyJ1xuICAgICAgJ25icl9zZWxlY3RfbnVtYmVycydcbiAgICAgICduYnJfc2VsZWN0X3NxdWFyZV9udW1iZXJzJ1xuICAgICAgJ2RiMV9zZWxlY3RfeCdcbiAgICAgICd0eHRfc2VsZWN0X29uZScgXVxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZnVuY3Rpb25fbmFtZXMgID0gbmV3IFNldCAoIHIubmFtZSBmb3IgciBmcm9tIGRiLndhbGsgU1FMXCJzZWxlY3QgbmFtZSBmcm9tIHN0ZF9mdW5jdGlvbnM7XCIgKVxuICAgIHRhYmxlX25hbWVzICAgICA9IG5ldyBTZXQgKCByLm5hbWUgZm9yIHIgZnJvbSBkYi53YWxrIFNRTFwic2VsZWN0IG5hbWUgZnJvbSBzdGRfdGFibGVzO1wiIClcbiAgICBAZXEgKCDOqWJiZGJyXzI2NCA9IC0+IFJlZmxlY3QuaGFzIGRiLnN0YXRlbWVudHMsICAnc3RkX2dldF92aWV3cycgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pYmJkYnJfMjY1ID0gLT4gUmVmbGVjdC5oYXMgZGIuc3RhdGVtZW50cywgICduYnJfaW5zZXJ0X251bWJlcicgICApLCB0cnVlXG4gICAgQGVxICggzqliYmRicl8yNjYgPSAtPiB0eXBlX29mIGRiLm5icl9nZXRfc3F1YXJlICAgICAgICAgICAgICAgICAgICAgICAgICksICdmdW5jdGlvbidcbiAgICBAZXEgKCDOqWJiZGJyXzI2NyA9IC0+IGRiLm5icl9nZXRfc3F1YXJlIDEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMTAwXG4gICAgQGVxICggzqliYmRicl8yNjggPSAtPiBmdW5jdGlvbl9uYW1lcy5oYXMgJ25icl9zcXVhcmUnICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWJiZGJyXzI2OSA9IC0+IGRiLmdldF9maXJzdCBTUUxcInNlbGVjdCBuYnJfc3F1YXJlKCAxMSApIGFzIHM7XCIgICApLCB7IHM6IDEyMSwgfVxuICAgIEBlcSAoIM6pYmJkYnJfMjcwID0gLT4gdGFibGVfbmFtZXMuaGFzICduYnJfbnVtYmVycycgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqliYmRicl8yNzEgPSAtPiB0YWJsZV9uYW1lcy5oYXMgJ3gnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19ob2FyZF9wbHVnaW5fbW9kZWw6IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBob2FyZF9wbHVnaW4gPVxuICAgICAgbmFtZTogICAgICdob2FyZCdcbiAgICAgIHByZWZpeDogICAnaHJkJ1xuICAgICAgZXhwb3J0czpcbiAgICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBidWlsZDogLT5cbiAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgICMjIyBUQUlOVCBzdG9wZ2FwIHNvbHV0aW9uICMjI1xuICAgICAgICAgIGNmZyA9XG4gICAgICAgICAgICBydW5zX3Jvd2lkX3JlZ2V4cDogICAgICAgICcweDAwXzAwMDAnXG4gICAgICAgICAgICBmaXJzdF9wb2ludDogICAgICAgICAgICAgIDB4MDBfMDAwMFxuICAgICAgICAgICAgbGFzdF9wb2ludDogICAgICAgICAgICAgICAweDEwX2ZmZmZcbiAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgIFIgPSBbXVxuICAgICAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgUi5wdXNoIFNRTFwiXCJcIlxuICAgICAgICAgICAgY3JlYXRlIHRhYmxlIGhyZF9ob2FyZF9zY2F0dGVycyAoXG4gICAgICAgICAgICAgICAgcm93aWQgICAgIHRleHQgICAgdW5pcXVlICBub3QgbnVsbCxcbiAgICAgICAgICAgICAgICBpc19oaXQgICAgYm9vbGVhbiAgICAgICAgIG5vdCBudWxsIGRlZmF1bHQgZmFsc2UsXG4gICAgICAgICAgICAgICAgZGF0YSAgICAgIGpzb24gICAgICAgICAgICBub3QgbnVsbCBkZWZhdWx0ICdudWxsJ1xuICAgICAgICAgICAgICAgICk7XCJcIlwiXG5cbiAgICAgICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgIFIucHVzaCBTUUxcIlwiXCJcbiAgICAgICAgICAgIGNyZWF0ZSB0YWJsZSBocmRfaG9hcmRfcnVucyAoXG4gICAgICAgICAgICAgICAgcm93aWQgICAgIHRleHQgICAgdW5pcXVlICBub3QgbnVsbCxcbiAgICAgICAgICAgICAgICBsbyAgICAgICAgaW50ZWdlciAgICAgICAgIG5vdCBudWxsLFxuICAgICAgICAgICAgICAgIGhpICAgICAgICBpbnRlZ2VyICAgICAgICAgbm90IG51bGwsXG4gICAgICAgICAgICAgICAgc2NhdHRlciAgIHRleHQgICAgICAgICAgICBub3QgbnVsbCxcbiAgICAgICAgICAgICAgLS0gcHJpbWFyeSBrZXkgKCByb3dpZCApLFxuICAgICAgICAgICAgICBmb3JlaWduIGtleSAoIHNjYXR0ZXIgKSByZWZlcmVuY2VzIGhyZF9ob2FyZF9zY2F0dGVycyAoIHJvd2lkICksXG4gICAgICAgICAgICAgIGNvbnN0cmFpbnQgXCLOqWNvbnN0cmFpbnRfMjczXCIgY2hlY2sgKCByb3dpZCByZWdleHAgI3tMSVQgY2ZnLnJ1bnNfcm93aWRfcmVnZXhwIH0gKSxcbiAgICAgICAgICAgICAgY29uc3RyYWludCBcIs6pY29uc3RyYWludF8yNzRcIiBjaGVjayAoIGxvIGJldHdlZW4gI3tMSVQgY2ZnLmZpcnN0X3BvaW50fSBhbmQgI3tMSVQgY2ZnLmxhc3RfcG9pbnR9ICksXG4gICAgICAgICAgICAgIGNvbnN0cmFpbnQgXCLOqWNvbnN0cmFpbnRfMjc1XCIgY2hlY2sgKCBoaSBiZXR3ZWVuICN7TElUIGNmZy5maXJzdF9wb2ludH0gYW5kICN7TElUIGNmZy5sYXN0X3BvaW50fSApLFxuICAgICAgICAgICAgICBjb25zdHJhaW50IFwizqljb25zdHJhaW50XzI3NlwiIGNoZWNrICggbG8gPD0gaGkgKVxuICAgICAgICAgICAgICAtLSBjb25zdHJhaW50IFwizqljb25zdHJhaW50XzI3N1wiIGNoZWNrICggcm93aWQgcmVnZXhwICdeLiokJyApXG4gICAgICAgICAgICAgICk7XCJcIlwiXG4gICAgICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICByZXR1cm4gUlxuICAgICAgICBzdGF0ZW1lbnRzOlxuICAgICAgICAgIGhyZF95eXk6IFNRTFwic2VsZWN0IDEgYXMgbjtcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmRfdXNlciBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQHByZWZpeDogICdqenInXG4gICAgICBAcGx1Z2luczogW1xuICAgICAgICAncHJvdG90eXBlcydcbiAgICAgICAgaG9hcmRfcGx1Z2luXG4gICAgICAgICdtZSdcbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaHJkID0gbmV3IEhvYXJkX3VzZXIgeyByZWJ1aWxkOiB0cnVlLCB9XG4gICAgIyBkZWJ1ZyAnzqliYmRicl8yNzgnLCByb3cubmFtZSBmb3Igcm93IGZyb20gaHJkLndhbGsgaHJkLnN0YXRlbWVudHMuc3RkX2dldF9yZWxhdGlvbnNcbiAgICBuYW1lcyA9IG5ldyBTZXQgKCByb3cubmFtZSBmb3Igcm93IGZyb20gaHJkLndhbGsgaHJkLnN0YXRlbWVudHMuc3RkX2dldF9yZWxhdGlvbnMgKVxuICAgIEBlcSAoIM6pYmJkYnJfMjc5ID0gLT4gbmFtZXMuaGFzICdocmRfaG9hcmRfcnVucycgICAgICApLCB0cnVlXG4gICAgQGVxICggzqliYmRicl8yODAgPSAtPiBuYW1lcy5oYXMgJ2hyZF9ob2FyZF9zY2F0dGVycycgICksIHRydWVcbiAgICBAZXEgKCDOqWJiZGJyXzI4MSA9IC0+IG5hbWVzLmhhcyAnc3RkX2Z1bmN0aW9ucycgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pYmJkYnJfMjgyID0gLT4gbmFtZXMuaGFzICdzdGRfcmVsYXRpb25zJyAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqliYmRicl8yODMgPSAtPiBuYW1lcy5oYXMgJ3N0ZF90YWJsZXMnICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWJiZGJyXzI4NCA9IC0+IG5hbWVzLmhhcyAnc3RkX3ZhcmlhYmxlcycgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pYmJkYnJfMjg1ID0gLT4gbmFtZXMuaGFzICdzdGRfdmlld3MnICAgICAgICAgICApLCB0cnVlXG4gICAgIyBAZXEgKCDOqWJiZGJyXzI4NiA9IC0+IGhyZC5nZXRfYWxsIGhyZC5zdGF0ZW1lbnRzLmhyZF95eXkgKSwgWyB7IG46IDEsIH0sIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb191c2luZ19tZXRob2RzX2hvbGRlcl90b19lbmFibGVfZXJzYXR6X3N1cGVyID0gLT5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjbGFzcyBBXG4gICAgZjogKCBtZXNzYWdlICkgLT4gaGVscCAnzqliYmRicl8yODcnLCBycHIgbWVzc2FnZVxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsYXNzIEIgZXh0ZW5kcyBBXG4gICAgX3N1cGVyOiAoIG5hbWUsIFAuLi4gKSAtPiBzdXBlclsgbmFtZSBdIFAuLi5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIyMgTk9URSBha2luIHRvIHRoZSBgbWV0aG9kc2AgcHJvcGVydHkgb2YgcGx1Z2luIG9iamVjdHMgIyMjXG4gIG1ldGhvZHMgPSB7XG4gICAgZjogKCBtZXNzYWdlICkgLT4gQF9zdXBlciAnZicsIG1lc3NhZ2U7IHJldHVybiA4XG4gICAgfVxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMjIyBOT1RFIHdlIGZvcm0gYSBzeW50aGV0aWMgY2xhc3MgdG8gYWN0IGFzIGEgJ2hvbGRlcicgZm9yIG91ciBtZXRob2RzOiAjIyNcbiAgY2xhc3MgTWV0aG9kc19ob2xkZXIgZXh0ZW5kcyBCXG4gIGluc3RhbmNlID0gbmV3IE1ldGhvZHNfaG9sZGVyKClcbiAgaW5zdGFuY2UuZiA9IG1ldGhvZHMuZlxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMjIyBOT1RFIHVzaW5nIHRoZSBFcnNhdHogU3VwZXI6ICMjI1xuICByZXN1bHQgPSBpbnN0YW5jZS5mIFwibXkgbWVzc2FnZVwiICMgcHJpbnRzIGBteSBtZXNzYWdlYFxuICBpbmZvICfOqWJiZGJyXzI4OCcsIHsgcmVzdWx0LCB9ICMgcHJpbnRzIGB7IHJlc3VsdDogOCwgfWBcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICA7bnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBkb19jb3ZlcmFnZSA9IHRydWVcbiAgZG9fY292ZXJhZ2UgPSBmYWxzZVxuICBpZiBkb19jb3ZlcmFnZVxuICAgIHsgQ292ZXJhZ2VfYW5hbHl6ZXIsICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2NvdmVyYWdlLWFuYWx5emVyJ1xuICAgIGNhID0gbmV3IENvdmVyYWdlX2FuYWx5emVyKClcbiAgICBjYS53cmFwX2NsYXNzIERicmljX3N0ZFxuICB7IHdyYXBfbWV0aG9kc19vZl9wcm90b3R5cGVzLCB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9wcm90b3R5cGUtdG9vbHMnXG4gICMgd3JhcF9tZXRob2RzX29mX3Byb3RvdHlwZXMgRGJyaWNfc3RkLCAoeyBmcW5hbWUsIGNhbGxtZSwgUCwgfSkgLT5cbiAgIyAgIGRlYnVnICfOqWJiZGJyXzI4OScsIGZxbmFtZSAjLCBQXG4gICMgICByZXR1cm4gY2FsbG1lKClcbiAgIyBkYiA9IG5ldyBEYnJpY19zdGQgJzptZW1vcnk6JywgeyByZWJ1aWxkOiB0cnVlLCB9XG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkYnJpY19ob2FyZF9wbHVnaW5fbW9kZWw6IHRlc3RzLmRicmljX2hvYXJkX3BsdWdpbl9tb2RlbCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGJyaWNfZHluYW1pY19idWlsZF9wcm9wZXJ0aWVzOiB0ZXN0cy5kYnJpY19keW5hbWljX2J1aWxkX3Byb3BlcnRpZXMsIH1cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpZiBkb19jb3ZlcmFnZVxuICAgIHdhcm4gJ86pYmJkYnJfMjkwJywgXCJub3QgY292ZXJlZDpcIiwgcmV2ZXJzZSBuYW1lIGZvciBuYW1lIGluIGNhLnVudXNlZF9uYW1lcyBpZiBjYS51bnVzZWRfbmFtZXMubGVuZ3RoID4gMFxuICAgICMgaGVscCAnzqliYmRicl8yOTEnLCBjYS51c2VkX25hbWVzXG4gICAgIyB1cmdlICfOqWJiZGJyXzI5MicsIGNvdW50LCBuYW1lcyBmb3IgY291bnQsIG5hbWVzIG9mIGNhLm5hbWVzX2J5X2NvdW50c1xuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIDtudWxsIl19
