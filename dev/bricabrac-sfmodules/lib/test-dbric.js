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
    disallow_overwriting_properties_with_functions: function() {
      var Dbric, Dbric_A, Dbric_B, Dbric_C, Dbric_Z, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      (() => {        // debug 'Ωbbdbr__45', new Dbric '/dev/shm/bricabrac.sqlite'
        var db, db_proto;
        db = new Dbric(':memory:');
        db_proto = Object.getPrototypeOf(db);
        debug('Ωbbdbr__46', Object.getOwnPropertyDescriptor(db_proto, 'is_ready'));
        debug('Ωbbdbr__47', Object.getOwnPropertyDescriptor(db_proto, '_get_is_ready'));
        return null;
      })();
      //-------------------------------------------------------------------------------------------------------
      /* use derived classes to assert that property descriptors are searched for in the prototype chain: */
      Dbric_A = class Dbric_A extends Dbric {};
      Dbric_B = class Dbric_B extends Dbric_A {};
      Dbric_C = class Dbric_C extends Dbric_B {};
      Dbric_Z = class Dbric_Z extends Dbric_C {};
      (() => {        //-------------------------------------------------------------------------------------------------------
        var Dbric_nonconform, Ωbbdbr__48;
        Dbric_nonconform = class Dbric_nonconform extends Dbric_Z {
          is_ready() {}

        };
        this.throws((Ωbbdbr__48 = function() {
          return new Dbric_nonconform();
        }), /not allowed to override property 'is_ready'; use '_get_is_ready instead/);
        return null;
      })();
      (() => {        //-------------------------------------------------------------------------------------------------------
        var Dbric_nonconform, Ωbbdbr__49;
        Dbric_nonconform = class Dbric_nonconform extends Dbric_Z {
          prefix() {}

        };
        this.throws((Ωbbdbr__49 = function() {
          return new Dbric_nonconform();
        }), /not allowed to override property 'prefix'; use '_get_prefix instead/);
        return null;
      })();
      (() => {        //-------------------------------------------------------------------------------------------------------
        var Dbric_nonconform, Ωbbdbr__50;
        Dbric_nonconform = class Dbric_nonconform extends Dbric_Z {
          full_prefix() {}

        };
        this.throws((Ωbbdbr__50 = function() {
          return new Dbric_nonconform();
        }), /not allowed to override property 'full_prefix'; use '_get_full_prefix instead/);
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
        // debug 'Ωbbdbr__51', new Dbric '/dev/shm/bricabrac.sqlite'
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
        var cast_row, db_path, rows, store, Ωbbdbr__53, Ωbbdbr__54, Ωbbdbr__55, Ωbbdbr__56, Ωbbdbr__57, Ωbbdbr__58;
        db_path = '/dev/shm/bricabrac.sqlite';
        store = Dbric_store.open(db_path);
        // store.statements.store_create_tables.run()
        // for row from store.statements.get_schema.iterate()
        //   help 'Ωbbdbr__52', row
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
        this.eq((Ωbbdbr__53 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'false',
          facet_value: false,
          _v: 'false'
        });
        this.eq((Ωbbdbr__54 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'one',
          facet_value: 1,
          _v: 1
        });
        this.eq((Ωbbdbr__55 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'three',
          facet_value: 'iii',
          _v: '"iii"'
        });
        this.eq((Ωbbdbr__56 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'true',
          facet_value: true,
          _v: 'true'
        });
        this.eq((Ωbbdbr__57 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'two',
          facet_value: 2,
          _v: 2
        });
        return this.eq((Ωbbdbr__58 = function() {
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
        var cast_row, db_path, rows, store, Ωbbdbr__60, Ωbbdbr__61, Ωbbdbr__63, Ωbbdbr__64, Ωbbdbr__65, Ωbbdbr__66, Ωbbdbr__67, Ωbbdbr__68;
        db_path = '/dev/shm/bricabrac.sqlite';
        store = Dbric_store.open(db_path);
        debug('Ωbbdbr__59', store);
        this.eq((Ωbbdbr__60 = function() {
          return store.db instanceof Bsql3;
        }), true);
        this.eq((Ωbbdbr__61 = function() {
          return store.db instanceof _Bsql3;
        }), true);
        // store.statements.store_create_tables.run()
        // for row from store.statements.get_schema.iterate()
        //   help 'Ωbbdbr__62', row
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
        this.eq((Ωbbdbr__63 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'false',
          facet_value: false,
          _v: 'false'
        });
        this.eq((Ωbbdbr__64 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'one',
          facet_value: 1,
          _v: 1
        });
        this.eq((Ωbbdbr__65 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'three',
          facet_value: 'iii',
          _v: '"iii"'
        });
        this.eq((Ωbbdbr__66 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'true',
          facet_value: true,
          _v: 'true'
        });
        this.eq((Ωbbdbr__67 = function() {
          return cast_row(rows.next().value);
        }), {
          facet_key: 'two',
          facet_value: 2,
          _v: 2
        });
        return this.eq((Ωbbdbr__68 = function() {
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
              call: function(n) {
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
        var db_path, i, n, rows, squares, Ωbbdbr__69, Ωbbdbr__70, Ωbbdbr__71, Ωbbdbr__72, Ωbbdbr__73, Ωbbdbr__74, Ωbbdbr__75, Ωbbdbr__76, Ωbbdbr__77, Ωbbdbr__78, Ωbbdbr__79, Ωbbdbr__80;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = Dbric_squares.open(db_path);
        this.eq((Ωbbdbr__69 = function() {
          return squares.db instanceof Bsql3;
        }), false);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo row for row from squares.statements.select_from_squares.iterate()
        rows = squares.statements.select_from_squares.iterate();
        this.eq((Ωbbdbr__70 = function() {
          return rows.next().value;
        }), {
          n: 0,
          square: 0
        });
        this.eq((Ωbbdbr__71 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1
        });
        this.eq((Ωbbdbr__72 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4
        });
        this.eq((Ωbbdbr__73 = function() {
          return rows.next().value;
        }), {
          n: 3,
          square: 9
        });
        this.eq((Ωbbdbr__74 = function() {
          return rows.next().value;
        }), {
          n: 4,
          square: 16
        });
        this.eq((Ωbbdbr__75 = function() {
          return rows.next().value;
        }), {
          n: 5,
          square: 25
        });
        this.eq((Ωbbdbr__76 = function() {
          return rows.next().value;
        }), {
          n: 6,
          square: 36
        });
        this.eq((Ωbbdbr__77 = function() {
          return rows.next().value;
        }), {
          n: 7,
          square: 49
        });
        this.eq((Ωbbdbr__78 = function() {
          return rows.next().value;
        }), {
          n: 8,
          square: 64
        });
        this.eq((Ωbbdbr__79 = function() {
          return rows.next().value;
        }), {
          n: 9,
          square: 81
        });
        this.eq((Ωbbdbr__80 = function() {
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
              call: function(n) {
                return n ** 2;
              }
            });
            this.create_aggregate_function({
              name: 'product',
              start: function() {
                return 1/* NOTE can use `null` for bSQL, but nSQL needs `1` */;
              },
              step: product = function(total, element) {
                debug('Ωbbdbr__81', {total, element});
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
        var db_path, i, n, row, rows, squares, Ωbbdbr__82, Ωbbdbr__83, Ωbbdbr__84, Ωbbdbr__85, Ωbbdbr__86;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = Dbric_squares.open(db_path);
        this.eq((Ωbbdbr__82 = function() {
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
        this.eq((Ωbbdbr__83 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1,
          p_n: 120,
          p_square: 14400
        });
        this.eq((Ωbbdbr__84 = function() {
          return rows.next().value;
        }), null);
        for (row of squares.statements.select_from_squares.iterate()) {
          //.....................................................................................................
          echo(row);
        }
        rows = squares.statements.select_from_squares.iterate();
        this.eq((Ωbbdbr__85 = function() {
          return rows.next().value;
        }), {
          n: null,
          square: null,
          p_n: 1,
          p_square: 1
        });
        this.eq((Ωbbdbr__86 = function() {
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
              call: function(n) {
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
        var db_path, i, n, rows, squares, Ωbbdbr__87, Ωbbdbr__88, Ωbbdbr__89, Ωbbdbr__90, Ωbbdbr__91, Ωbbdbr__92, Ωbbdbr__93, Ωbbdbr__94, Ωbbdbr__95, Ωbbdbr__96, Ωbbdbr__97, Ωbbdbr__98;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = Dbric_squares.open(db_path);
        this.eq((Ωbbdbr__87 = function() {
          return squares.db instanceof Bsql3;
        }), true);
        for (n = i = 0; i < 10; n = ++i) {
          squares.statements.insert_number.run({n});
        }
        //.....................................................................................................
        // echo row for row from squares.statements.select_from_squares.iterate()
        rows = squares.statements.select_from_squares.iterate();
        this.eq((Ωbbdbr__88 = function() {
          return rows.next().value;
        }), {
          n: 0,
          square: 0
        });
        this.eq((Ωbbdbr__89 = function() {
          return rows.next().value;
        }), {
          n: 1,
          square: 1
        });
        this.eq((Ωbbdbr__90 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4
        });
        this.eq((Ωbbdbr__91 = function() {
          return rows.next().value;
        }), {
          n: 3,
          square: 9
        });
        this.eq((Ωbbdbr__92 = function() {
          return rows.next().value;
        }), {
          n: 4,
          square: 16
        });
        this.eq((Ωbbdbr__93 = function() {
          return rows.next().value;
        }), {
          n: 5,
          square: 25
        });
        this.eq((Ωbbdbr__94 = function() {
          return rows.next().value;
        }), {
          n: 6,
          square: 36
        });
        this.eq((Ωbbdbr__95 = function() {
          return rows.next().value;
        }), {
          n: 7,
          square: 49
        });
        this.eq((Ωbbdbr__96 = function() {
          return rows.next().value;
        }), {
          n: 8,
          square: 64
        });
        this.eq((Ωbbdbr__97 = function() {
          return rows.next().value;
        }), {
          n: 9,
          square: 81
        });
        this.eq((Ωbbdbr__98 = function() {
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
              call: square = function(n) {
                return n ** 2;
              }
            });
            this.create_aggregate_function({
              name: 'product',
              start: function() {
                return null;
              },
              step: product = function(total, element) {
                debug('Ωbbdbr__99', {total, element});
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
        var db_path, i, n, row, rows, squares, Ωbbdbr_100, Ωbbdbr_101, Ωbbdbr_102;
        db_path = '/dev/shm/bricabrac.sqlite';
        squares = Dbric_squares.open(db_path);
        this.eq((Ωbbdbr_100 = function() {
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
        this.eq((Ωbbdbr_101 = function() {
          return rows.next().value;
        }), {
          n: 2,
          square: 4,
          p_n: 6,
          p_square: 36
        });
        this.eq((Ωbbdbr_102 = function() {
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
        var db_path, i, len, phrase, phrases, ref, rows, Ωbbdbr_103, Ωbbdbr_104, Ωbbdbr_105, Ωbbdbr_106, Ωbbdbr_107, Ωbbdbr_108, Ωbbdbr_109, Ωbbdbr_110, Ωbbdbr_111, Ωbbdbr_112, Ωbbdbr_113, Ωbbdbr_114, Ωbbdbr_115, Ωbbdbr_116;
        db_path = '/dev/shm/bricabrac.sqlite';
        phrases = Dbric_phrases.open(db_path);
        this.eq((Ωbbdbr_103 = function() {
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
        this.eq((Ωbbdbr_104 = function() {
          return rows.next().value;
        }), {
          phrase: 'eleven',
          match: 'le',
          capture: 'le'
        });
        this.eq((Ωbbdbr_105 = function() {
          return rows.next().value;
        }), {
          phrase: 'eleven',
          match: 've',
          capture: 've'
        });
        this.eq((Ωbbdbr_106 = function() {
          return rows.next().value;
        }), {
          phrase: 'five',
          match: 'fi',
          capture: 'fi'
        });
        this.eq((Ωbbdbr_107 = function() {
          return rows.next().value;
        }), {
          phrase: 'nine',
          match: 'ni',
          capture: 'ni'
        });
        this.eq((Ωbbdbr_108 = function() {
          return rows.next().value;
        }), {
          phrase: 'one',
          match: 'o',
          capture: 'o'
        });
        this.eq((Ωbbdbr_109 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'o',
          capture: 'o'
        });
        this.eq((Ωbbdbr_110 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'poi',
          capture: 'poi'
        });
        this.eq((Ωbbdbr_111 = function() {
          return rows.next().value;
        }), {
          phrase: 'one point five',
          match: 'fi',
          capture: 'fi'
        });
        this.eq((Ωbbdbr_112 = function() {
          return rows.next().value;
        }), {
          phrase: 'seven',
          match: 'se',
          capture: 'se'
        });
        this.eq((Ωbbdbr_113 = function() {
          return rows.next().value;
        }), {
          phrase: 'seven',
          match: 've',
          capture: 've'
        });
        this.eq((Ωbbdbr_114 = function() {
          return rows.next().value;
        }), {
          phrase: 'three point one',
          match: 'poi',
          capture: 'poi'
        });
        this.eq((Ωbbdbr_115 = function() {
          return rows.next().value;
        }), {
          phrase: 'three point one',
          match: ' o',
          capture: ' o'
        });
        this.eq((Ωbbdbr_116 = function() {
          return rows.next().value;
        }), void 0);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    file_reader_as_table_function: function() {
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
          SQL`create table datasources (
dskey text unique not null primary key,
path text not null );`,
          SQL`create view mirror as select
  *
from
  datasources as ds,
  file_lines( ds.path ) as fl
order by ds.dskey, fl.line_nr;`,
          SQL`create table keywords (
  dskey   text    unique not null,
  line_nr integer not null,
  keyword text    not null,
foreign key ( dskey ) references datasources ( dskey ),
primary key ( dskey, line_nr, keyword ) );`
        ];

        //-----------------------------------------------------------------------------------------------------
        Dbric_phrases.statements = {
          insert_datasource: SQL`insert into datasources ( dskey, path ) values ( $dskey, $path )
on conflict ( dskey ) do update set path = $path;`,
          insert_keyword: SQL`insert into keywords ( dskey, line_nr, keyword ) values ( $dskey, $line_nr, $keyword )
on conflict ( dskey, line_nr, keyword ) do nothing;`,
          select_from_datasources: SQL`select * from datasources order by dskey;`,
          select_from_mirror: SQL`select * from mirror order by dskey;`
        };

        return Dbric_phrases;

      }).call(this);
      (() => {        //=======================================================================================================
        var db_path, dskey, line, line_nr, phrases, row, word, x, Ωbbdbr_117;
        db_path = '/dev/shm/bricabrac.sqlite';
        phrases = Dbric_phrases.open(db_path);
        this.eq((Ωbbdbr_117 = function() {
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
        for (row of phrases.statements.select_from_datasources.iterate()) {
          //.....................................................................................................
          echo(row);
        }
        echo();
        for (row of phrases.statements.select_from_mirror.iterate()) {
          //.....................................................................................................
          echo(row);
        }
        echo();
//.....................................................................................................
        for (x of phrases.statements.select_from_mirror.iterate()) {
          ({dskey, line_nr, line} = x);
          debug('Ωbbdbr_118', line_nr, rpr((function() {
            var i, len, ref, results;
            ref = line.split(/[-\x20:.;\/]+/);
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              word = ref[i];
              if (word !== '') {
                results.push(word);
              }
            }
            return results;
          })()));
          phrases.statements.insert_keyword.run({});
        }
        // echo row for row from phrases.statements.select_from_phrases.iterate { matcher: '^.*([aeiou].e).*$', }
        // echo()
        //.....................................................................................................
        // echo row for row from phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
        // rows = phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
        // @eq ( Ωbbdbr_119 = -> rows.next().value ), { phrase: 'eleven', match: 'le', capture: 'le' }
        // @eq ( Ωbbdbr_120 = -> rows.next().value ), { phrase: 'eleven', match: 've', capture: 've' }
        // @eq ( Ωbbdbr_121 = -> rows.next().value ), { phrase: 'five', match: 'fi', capture: 'fi' }
        // @eq ( Ωbbdbr_122 = -> rows.next().value ), { phrase: 'nine', match: 'ni', capture: 'ni' }
        // @eq ( Ωbbdbr_123 = -> rows.next().value ), { phrase: 'one', match: 'o', capture: 'o' }
        // @eq ( Ωbbdbr_124 = -> rows.next().value ), { phrase: 'one point five', match: 'o', capture: 'o' }
        // @eq ( Ωbbdbr_125 = -> rows.next().value ), { phrase: 'one point five', match: 'poi', capture: 'poi' }
        // @eq ( Ωbbdbr_126 = -> rows.next().value ), { phrase: 'one point five', match: 'fi', capture: 'fi' }
        // @eq ( Ωbbdbr_127 = -> rows.next().value ), { phrase: 'seven', match: 'se', capture: 'se' }
        // @eq ( Ωbbdbr_128 = -> rows.next().value ), { phrase: 'seven', match: 've', capture: 've' }
        // @eq ( Ωbbdbr_129 = -> rows.next().value ), { phrase: 'three point one', match: 'poi', capture: 'poi' }
        // @eq ( Ωbbdbr_130 = -> rows.next().value ), { phrase: 'three point one', match: ' o', capture: ' o' }
        // @eq ( Ωbbdbr_131 = -> rows.next().value ), undefined
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
        show_passes: true,
        report_checks: true
      };
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      (new Test(guytest_cfg)).test({tests});
      // # ( new Test guytest_cfg ).test { sample_db_with_bsql: tests.sample_db_with_bsql, }
      // ( new Test guytest_cfg ).test { udf_functions_with_nsql: tests.udf_functions_with_nsql, }
      // ( new Test guytest_cfg ).test { udf_functions_with_bsql: tests.udf_functions_with_bsql, }
      // ( new Test guytest_cfg ).test { udf_aggregates_with_bsql: tests.udf_aggregates_with_bsql, }
      // ( new Test guytest_cfg ).test { udf_aggregates_with_nsql: tests.udf_aggregates_with_nsql, }
      // ( new Test guytest_cfg ).test { udf_table_function_with_bsql: tests.udf_table_function_with_bsql, }
      return (new Test(guytest_cfg)).test({
        file_reader_as_table_function: tests.file_reader_as_table_function
      });
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEVBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFB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QUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZixDQUFKLEVBQTJDO1VBQUUsQ0FBQSxFQUFHLENBQUw7VUFBUSxNQUFBLEVBQVE7UUFBaEIsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFB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QUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFmLENBQUosRUFBMkM7VUFBRSxDQUFBLEVBQUcsQ0FBTDtVQUFRLE1BQUEsRUFBUTtRQUFoQixDQUEz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QUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLENBQUUsS0FBRixDQUE5QixFQUpGOzs7Ozs7O2FBV0UsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLDZCQUFBLEVBQStCLEtBQUssQ0FBQztNQUF2QyxDQUE5QjtJQVpzQyxDQUFBLElBQXhDOztBQWx2QkEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtZGJyaWMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxucmVtb3ZlID0gKCBwYXRoICkgLT5cbiAgdHJ5XG4gICAgRlMudW5saW5rU3luYyBwYXRoXG4gICAgaGVscCAnzqliYmRicl9fXzEnLCBcInJlbW92ZWQgI3tycHIgcGF0aH1cIlxuICBjYXRjaCBlcnJvclxuICAgIHRocm93IGVycm9yIHVubGVzcyBlcnJvci5jb2RlIGlzICdFTk9FTlQnXG4gICAgdXJnZSAnzqliYmRicl9fXzInLCBcIm5vIHN1Y2ggRlMgb2JqZWN0OiAje3JwciBwYXRofVwiXG4gIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19lc3FsOiAtPlxuICAgIHsgZXNxbCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fMyA9IC0+IGludGVybmFscy50eXBlX29mIGVzcWwudW5xdW90ZV9uYW1lICksICdmdW5jdGlvbidcbiAgICBAZXEgICAgICggzqliYmRicl9fXzQgPSAtPiBlc3FsLnVucXVvdGVfbmFtZSAnYWJjJyAgICAgICAgICAgICApLCAnYWJjJ1xuICAgIEBlcSAgICAgKCDOqWJiZGJyX19fNSA9IC0+IGVzcWwudW5xdW90ZV9uYW1lICdcImFiY1wiJyAgICAgICAgICAgKSwgJ2FiYydcbiAgICBAZXEgICAgICggzqliYmRicl9fXzYgPSAtPiBlc3FsLnVucXVvdGVfbmFtZSAnXCJhYlwiXCJjXCInICAgICAgICAgKSwgJ2FiXCJjJ1xuICAgIEB0aHJvd3MgKCDOqWJiZGJyX19fNyA9IC0+IGVzcWwudW5xdW90ZV9uYW1lICcnICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIG5hbWUvXG4gICAgQHRocm93cyAoIM6pYmJkYnJfX184ID0gLT4gZXNxbC51bnF1b3RlX25hbWUgJ1wiJyAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIG5hbWUvXG4gICAgQHRocm93cyAoIM6pYmJkYnJfX185ID0gLT4gZXNxbC51bnF1b3RlX25hbWUgJ1wiXCInICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBuYW1lL1xuICAgIEB0aHJvd3MgKCDOqWJiZGJyX18xMCA9IC0+IGVzcWwudW5xdW90ZV9uYW1lIGZhbHNlICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHRleHQsIGdvdCBhIGJvb2xlYW4vXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVqZWN0X25vbmNvbmZvcm1hbnRfYnVpbGRfc3RhdGVtZW50czogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIHsgdGVtcCwgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdGVtcCgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBEYnJpY19ub25jb25mb3JtIGV4dGVuZHMgRGJyaWNcbiAgICAgIEBidWlsZDogW1xuICAgICAgICBTUUxcIlwiXCJcbiAgICAgICAgICBjcmVhdGUgdGFibGUgbm9uY29uZm9ybV9vbmUgKCBhIHRleHQgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICAgU1FMXCJcIlwiXG4gICAgICAgICAgLS0gdGhpcyBjb21tZW50IHNob3VsZG4ndCBiZSBoZXJlXG4gICAgICAgICAgY3JlYXRlIHZpZXcgbm9uY29uZm9ybV90d28gYXMgc2VsZWN0ICogZnJvbSBub25jb25mb3JtX29uZTtcIlwiXCJcbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdGVtcC53aXRoX2RpcmVjdG9yeSB7IGtlZXA6IGZhbHNlLCB9LCAoeyBwYXRoOiBmb2xkZXJfcGF0aCwgfSkgPT5cbiAgICAgIGRiX3BhdGggPSBQQVRILmpvaW4gZm9sZGVyX3BhdGgsICdicmljYWJyYWMuc3FsaXRlJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IG5ldyBEYnJpY19ub25jb25mb3JtIGRiX3BhdGhcbiAgICAgICAgQHRocm93cyAoIM6pYmJkYnJfXzExID0gLT4gZGIuaXNfcmVhZHkgKSwgLzEgb3V0IG9mIDIgYnVpbGQgc3RhdGVtZW50XFwoc1xcKSBjb3VsZCBub3QgYmUgcGFyc2VkL1xuICAgICAgICBAZXEgICAgICggzqliYmRicl9fMTIgPSAtPiBkYi5fZ2V0X29iamVjdHNfaW5fYnVpbGRfc3RhdGVtZW50cygpPy5lcnJvcl9jb3VudCApLCAxXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIEB0aHJvd3MgKCDOqWJiZGJyX18xMyA9IC0+IERicmljX25vbmNvbmZvcm0ub3BlbiBkYl9wYXRoICksIC8xIG91dCBvZiAyIGJ1aWxkIHN0YXRlbWVudFxcKHNcXCkgY291bGQgbm90IGJlIHBhcnNlZC9cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19zdGQ6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIERicmljX3N0ZCxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICB7IHRlbXAsICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3RlbXAoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdGVtcC53aXRoX2RpcmVjdG9yeSB7IGtlZXA6IGZhbHNlLCB9LCAoeyBwYXRoOiBmb2xkZXJfcGF0aCwgfSkgPT5cbiAgICAgICMgZm9sZGVyX3BhdGggPSAnL3RtcC9icmljYnJhYy10ZXN0JyAjICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxuICAgICAgZGJfcGF0aCA9IFBBVEguam9pbiBmb2xkZXJfcGF0aCwgJ2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICByZW1vdmUgZGJfcGF0aFxuICAgICAgaGVscCAnzqliYmRicl9fMTQnLCB7IGRiX3BhdGgsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBuZXcgRGJyaWMgZGJfcGF0aFxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzE1ID0gLT4gZGIuaXNfcmVhZHkgKSwgdHJ1ZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IERicmljLm9wZW4gZGJfcGF0aFxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzE2ID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpYyAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18xNyA9IC0+IGRiLl9nZXRfZGJfb2JqZWN0cygpICAgICAgICApLCB7fVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzE4ID0gLT4gZGIuaXNfcmVhZHkgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18xOSA9IC0+IGRiLmJ1aWxkKCkgICAgICAgICAgICAgICAgICApLCAwXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB0ZW1wLndpdGhfZGlyZWN0b3J5IHsga2VlcDogZmFsc2UsIH0sICh7IHBhdGg6IGZvbGRlcl9wYXRoLCB9KSA9PlxuICAgICAgIyBmb2xkZXJfcGF0aCA9ICcvdG1wL2JyaWNicmFjLXRlc3QnICMgISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG4gICAgICBkYl9wYXRoID0gUEFUSC5qb2luIGZvbGRlcl9wYXRoLCAnYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHJlbW92ZSBkYl9wYXRoXG4gICAgICBoZWxwICfOqWJiZGJyX18yMCcsIHsgZGJfcGF0aCwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IG5ldyBEYnJpYyBkYl9wYXRoXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjEgPSAtPiBkYi5pc19yZWFkeSAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjIgPSAtPiBkYi5jZmcucHJlZml4ICAgICApLCAnKE5PUFJFRklYKSdcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yMyA9IC0+IGRiLnByZWZpeCAgICAgICAgICksICcnXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjQgPSAtPiBkYi5mdWxsX3ByZWZpeCAgICApLCAnJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IG5ldyBEYnJpY19zdGQgZGJfcGF0aFxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI1ID0gLT4gZGIuaXNfcmVhZHkgICAgICAgKSwgZmFsc2VcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18yNiA9IC0+IGRiLmNmZy5wcmVmaXggICAgICksICdzdGQnXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMjcgPSAtPiBkYi5wcmVmaXggICAgICAgICApLCAnc3RkJ1xuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI4ID0gLT4gZGIuZnVsbF9wcmVmaXggICAgKSwgJ3N0ZF8nXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRiID0gRGJyaWNfc3RkLm9wZW4gZGJfcGF0aFxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzI5ID0gLT4gZGIgaW5zdGFuY2VvZiBEYnJpYyAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zMCA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWNfc3RkICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzEgPSAtPiBkYi5fZ2V0X2RiX29iamVjdHMoKSAgICAgICAgKSwge1xuICAgICAgICAgIHN0ZF90YWJsZXM6ICAgICB7IG5hbWU6ICdzdGRfdGFibGVzJywgICAgIHR5cGU6ICd2aWV3JyB9LFxuICAgICAgICAgIHN0ZF92aWV3czogICAgICB7IG5hbWU6ICdzdGRfdmlld3MnLCAgICAgIHR5cGU6ICd2aWV3JyB9LFxuICAgICAgICAgIHN0ZF9yZWxhdGlvbnM6ICB7IG5hbWU6ICdzdGRfcmVsYXRpb25zJywgIHR5cGU6ICd2aWV3JyB9IH1cbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zMiA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzMgPSAtPiBkYi5idWlsZCgpICAgICAgICAgICAgICAgICAgKSwgMFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IERicmljX3N0ZC5vcGVuIGRiX3BhdGhcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zNCA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzUgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljX3N0ZCAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzM2ID0gLT4gZGIuX2dldF9kYl9vYmplY3RzKCkgICAgICAgICksIHtcbiAgICAgICAgICBzdGRfdGFibGVzOiAgICAgeyBuYW1lOiAnc3RkX3RhYmxlcycsICAgICB0eXBlOiAndmlldycgfSxcbiAgICAgICAgICBzdGRfdmlld3M6ICAgICAgeyBuYW1lOiAnc3RkX3ZpZXdzJywgICAgICB0eXBlOiAndmlldycgfSxcbiAgICAgICAgICBzdGRfcmVsYXRpb25zOiAgeyBuYW1lOiAnc3RkX3JlbGF0aW9ucycsICB0eXBlOiAndmlldycgfSB9XG4gICAgICAgIEBlcSAgICggzqliYmRicl9fMzcgPSAtPiBkYi5pc19yZWFkeSAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzM4ID0gLT4gZGIuYnVpbGQoKSAgICAgICAgICAgICAgICAgICksIDBcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGIgPSBEYnJpY19zdGQub3BlbiBkYl9wYXRoXG4gICAgICAgICggZGIucHJlcGFyZSBTUUxcImRyb3AgdmlldyBzdGRfdGFibGVzO1wiICkucnVuKClcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX18zOSA9IC0+IGRiLmlzX3JlYWR5ICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYiA9IERicmljX3N0ZC5vcGVuIGRiX3BhdGhcbiAgICAgICAgQGVxICAgKCDOqWJiZGJyX180MCA9IC0+IGRiIGluc3RhbmNlb2YgRGJyaWMgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNDEgPSAtPiBkYiBpbnN0YW5jZW9mIERicmljX3N0ZCAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzQyID0gLT4gZGIuX2dldF9kYl9vYmplY3RzKCkgICAgICAgICksIHtcbiAgICAgICAgICBzdGRfdGFibGVzOiAgICAgeyBuYW1lOiAnc3RkX3RhYmxlcycsICAgICB0eXBlOiAndmlldycgfSxcbiAgICAgICAgICBzdGRfdmlld3M6ICAgICAgeyBuYW1lOiAnc3RkX3ZpZXdzJywgICAgICB0eXBlOiAndmlldycgfSxcbiAgICAgICAgICBzdGRfcmVsYXRpb25zOiAgeyBuYW1lOiAnc3RkX3JlbGF0aW9ucycsICB0eXBlOiAndmlldycgfSB9XG4gICAgICAgIEBlcSAgICggzqliYmRicl9fNDMgPSAtPiBkYi5pc19yZWFkeSAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAoIM6pYmJkYnJfXzQ0ID0gLT4gZGIuYnVpbGQoKSAgICAgICAgICAgICAgICAgICksIDBcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkaXNhbGxvd19vdmVyd3JpdGluZ19wcm9wZXJ0aWVzX3dpdGhfZnVuY3Rpb25zOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgIyBkZWJ1ZyAnzqliYmRicl9fNDUnLCBuZXcgRGJyaWMgJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgZG8gPT5cbiAgICAgIGRiICAgICAgICA9ICggbmV3IERicmljICc6bWVtb3J5OicgKVxuICAgICAgZGJfcHJvdG8gID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIGRiXG4gICAgICBkZWJ1ZyAnzqliYmRicl9fNDYnLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIGRiX3Byb3RvLCAnaXNfcmVhZHknXG4gICAgICBkZWJ1ZyAnzqliYmRicl9fNDcnLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIGRiX3Byb3RvLCAnX2dldF9pc19yZWFkeSdcbiAgICAgIDtudWxsXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAjIyMgdXNlIGRlcml2ZWQgY2xhc3NlcyB0byBhc3NlcnQgdGhhdCBwcm9wZXJ0eSBkZXNjcmlwdG9ycyBhcmUgc2VhcmNoZWQgZm9yIGluIHRoZSBwcm90b3R5cGUgY2hhaW46ICMjI1xuICAgIGNsYXNzIERicmljX0EgZXh0ZW5kcyBEYnJpY1xuICAgIGNsYXNzIERicmljX0IgZXh0ZW5kcyBEYnJpY19BXG4gICAgY2xhc3MgRGJyaWNfQyBleHRlbmRzIERicmljX0JcbiAgICBjbGFzcyBEYnJpY19aIGV4dGVuZHMgRGJyaWNfQ1xuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIERicmljX25vbmNvbmZvcm0gZXh0ZW5kcyBEYnJpY19aXG4gICAgICAgIGlzX3JlYWR5OiAtPlxuICAgICAgQHRocm93cyAoIM6pYmJkYnJfXzQ4ID0gLT4gbmV3IERicmljX25vbmNvbmZvcm0oKSApLCAvbm90IGFsbG93ZWQgdG8gb3ZlcnJpZGUgcHJvcGVydHkgJ2lzX3JlYWR5JzsgdXNlICdfZ2V0X2lzX3JlYWR5IGluc3RlYWQvXG4gICAgICA7bnVsbFxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIERicmljX25vbmNvbmZvcm0gZXh0ZW5kcyBEYnJpY19aXG4gICAgICAgIHByZWZpeDogLT5cbiAgICAgIEB0aHJvd3MgKCDOqWJiZGJyX180OSA9IC0+IG5ldyBEYnJpY19ub25jb25mb3JtKCkgKSwgL25vdCBhbGxvd2VkIHRvIG92ZXJyaWRlIHByb3BlcnR5ICdwcmVmaXgnOyB1c2UgJ19nZXRfcHJlZml4IGluc3RlYWQvXG4gICAgICA7bnVsbFxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIERicmljX25vbmNvbmZvcm0gZXh0ZW5kcyBEYnJpY19aXG4gICAgICAgIGZ1bGxfcHJlZml4OiAtPlxuICAgICAgQHRocm93cyAoIM6pYmJkYnJfXzUwID0gLT4gbmV3IERicmljX25vbmNvbmZvcm0oKSApLCAvbm90IGFsbG93ZWQgdG8gb3ZlcnJpZGUgcHJvcGVydHkgJ2Z1bGxfcHJlZml4JzsgdXNlICdfZ2V0X2Z1bGxfcHJlZml4IGluc3RlYWQvXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNhbXBsZV9kYjogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgICMgZGVidWcgJ86pYmJkYnJfXzUxJywgbmV3IERicmljICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgRGJyaWNfc3RvcmUgZXh0ZW5kcyBEYnJpY1xuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBzdG9yZV9mYWNldHMgKFxuICAgICAgICAgIGZhY2V0X2tleSAgICAgICAgICAgICB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICBmYWNldF92YWx1ZSAgICAgICAgICAganNvbiApO1wiXCJcIlxuICAgICAgICBdXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgIyBzdG9yZV9jcmVhdGVfdGFibGVzOiBTUUxcIlwiXCJcbiAgICAgICAgIyAgIFwiXCJcIlxuICAgICAgICBzdG9yZV9pbnNlcnRfZmFjZXQ6IFNRTFwiXCJcIlxuICAgICAgICAgIGluc2VydCBpbnRvIHN0b3JlX2ZhY2V0cyAoIGZhY2V0X2tleSwgZmFjZXRfdmFsdWUgKSB2YWx1ZXMgKCAkZmFjZXRfa2V5LCAkZmFjZXRfdmFsdWUgKVxuICAgICAgICAgICAgb24gY29uZmxpY3QgKCBmYWNldF9rZXkgKSBkbyB1cGRhdGUgc2V0IGZhY2V0X3ZhbHVlID0gZXhjbHVkZWQuZmFjZXRfdmFsdWU7XCJcIlwiXG4gICAgICAgIHN0b3JlX2dldF9mYWNldHM6IFNRTFwiXCJcIlxuICAgICAgICAgIHNlbGVjdCAqIGZyb20gc3RvcmVfZmFjZXRzIG9yZGVyIGJ5IGZhY2V0X2tleTtcIlwiXCJcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHN0b3JlICAgICA9IERicmljX3N0b3JlLm9wZW4gZGJfcGF0aFxuICAgICAgIyBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2NyZWF0ZV90YWJsZXMucnVuKClcbiAgICAgICMgZm9yIHJvdyBmcm9tIHN0b3JlLnN0YXRlbWVudHMuZ2V0X3NjaGVtYS5pdGVyYXRlKClcbiAgICAgICMgICBoZWxwICfOqWJiZGJyX181MicsIHJvd1xuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAnb25lJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAxICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3R3bycsICAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMiAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDMgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAnaWlpJyAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RydWUnLCAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgdHJ1ZSAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICdmYWxzZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IGZhbHNlICAgKSwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjYXN0X3JvdyA9ICggcm93ICkgLT5cbiAgICAgICAgcmV0dXJuIHJvdyB1bmxlc3Mgcm93P1xuICAgICAgICByZXR1cm4geyByb3cuLi4sIGZhY2V0X3ZhbHVlOiAoIEpTT04ucGFyc2Ugcm93LmZhY2V0X3ZhbHVlICksIF92OiByb3cuZmFjZXRfdmFsdWUsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcm93cyA9IHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfZ2V0X2ZhY2V0cy5pdGVyYXRlKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzUzID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICdmYWxzZScsIGZhY2V0X3ZhbHVlOiBmYWxzZSwgX3Y6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqliYmRicl9fNTQgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ29uZScsIGZhY2V0X3ZhbHVlOiAxLCBfdjogMSB9XG4gICAgICBAZXEgKCDOqWJiZGJyX181NSA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogJ2lpaScsIF92OiAnXCJpaWlcIicgfVxuICAgICAgQGVxICggzqliYmRicl9fNTYgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ3RydWUnLCBmYWNldF92YWx1ZTogdHJ1ZSwgX3Y6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyX181NyA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAndHdvJywgZmFjZXRfdmFsdWU6IDIsIF92OiAyIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzU4ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgbnVsbCAjIyMgTk9URSBkaWZmZXJlbnQgZnJvbSBiZXR0ZXItc3FsaXRlMyBiZWxvdyAjIyNcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzYW1wbGVfZGJfd2l0aF9ic3FsOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgX0JzcWwzICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdiZXR0ZXItc3FsaXRlMydcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIEJzcWwzIGV4dGVuZHMgX0JzcWwzXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zdG9yZSBleHRlbmRzIERicmljXG4gICAgICBAZGJfY2xhc3M6IEJzcWwzXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIHN0b3JlX2ZhY2V0cyAoXG4gICAgICAgICAgZmFjZXRfa2V5ICAgICAgICAgICAgIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgIGZhY2V0X3ZhbHVlICAgICAgICAgICBqc29uICk7XCJcIlwiXG4gICAgICAgIF1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICAjIHN0b3JlX2NyZWF0ZV90YWJsZXM6IFNRTFwiXCJcIlxuICAgICAgICAjICAgXCJcIlwiXG4gICAgICAgIHN0b3JlX2luc2VydF9mYWNldDogU1FMXCJcIlwiXG4gICAgICAgICAgaW5zZXJ0IGludG8gc3RvcmVfZmFjZXRzICggZmFjZXRfa2V5LCBmYWNldF92YWx1ZSApIHZhbHVlcyAoICRmYWNldF9rZXksICRmYWNldF92YWx1ZSApXG4gICAgICAgICAgICBvbiBjb25mbGljdCAoIGZhY2V0X2tleSApIGRvIHVwZGF0ZSBzZXQgZmFjZXRfdmFsdWUgPSBleGNsdWRlZC5mYWNldF92YWx1ZTtcIlwiXCJcbiAgICAgICAgc3RvcmVfZ2V0X2ZhY2V0czogU1FMXCJcIlwiXG4gICAgICAgICAgc2VsZWN0ICogZnJvbSBzdG9yZV9mYWNldHMgb3JkZXIgYnkgZmFjZXRfa2V5O1wiXCJcIlxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3RvcmUgICAgID0gRGJyaWNfc3RvcmUub3BlbiBkYl9wYXRoXG4gICAgICBkZWJ1ZyAnzqliYmRicl9fNTknLCBzdG9yZVxuICAgICAgQGVxICggzqliYmRicl9fNjAgPSAtPiBzdG9yZS5kYiBpbnN0YW5jZW9mIEJzcWwzICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiZGJyX182MSA9IC0+IHN0b3JlLmRiIGluc3RhbmNlb2YgX0JzcWwzICAgICksIHRydWVcbiAgICAgICMgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9jcmVhdGVfdGFibGVzLnJ1bigpXG4gICAgICAjIGZvciByb3cgZnJvbSBzdG9yZS5zdGF0ZW1lbnRzLmdldF9zY2hlbWEuaXRlcmF0ZSgpXG4gICAgICAjICAgaGVscCAnzqliYmRicl9fNjInLCByb3dcbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ29uZScsICAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMSAgICAgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0d28nLCAgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDIgICAgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndGhyZWUnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAzICAgICAgICksIH1cbiAgICAgIHN0b3JlLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgJ2lpaScgICApLCB9XG4gICAgICBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0cnVlJywgIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IHRydWUgICAgKSwgfVxuICAgICAgc3RvcmUuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAnZmFsc2UnLCBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSBmYWxzZSAgICksIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgY2FzdF9yb3cgPSAoIHJvdyApIC0+XG4gICAgICAgIHJldHVybiByb3cgdW5sZXNzIHJvdz9cbiAgICAgICAgcmV0dXJuIHsgcm93Li4uLCBmYWNldF92YWx1ZTogKCBKU09OLnBhcnNlIHJvdy5mYWNldF92YWx1ZSApLCBfdjogcm93LmZhY2V0X3ZhbHVlLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJvd3MgPSBzdG9yZS5zdGF0ZW1lbnRzLnN0b3JlX2dldF9mYWNldHMuaXRlcmF0ZSgpXG4gICAgICBAZXEgKCDOqWJiZGJyX182MyA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHsgZmFjZXRfa2V5OiAnZmFsc2UnLCBmYWNldF92YWx1ZTogZmFsc2UsIF92OiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzY0ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICdvbmUnLCBmYWNldF92YWx1ZTogMSwgX3Y6IDEgfVxuICAgICAgQGVxICggzqliYmRicl9fNjUgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICdpaWknLCBfdjogJ1wiaWlpXCInIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzY2ID0gLT4gY2FzdF9yb3cgcm93cy5uZXh0KCkudmFsdWUgKSwgeyBmYWNldF9rZXk6ICd0cnVlJywgZmFjZXRfdmFsdWU6IHRydWUsIF92OiAndHJ1ZScgfVxuICAgICAgQGVxICggzqliYmRicl9fNjcgPSAtPiBjYXN0X3JvdyByb3dzLm5leHQoKS52YWx1ZSApLCB7IGZhY2V0X2tleTogJ3R3bycsIGZhY2V0X3ZhbHVlOiAyLCBfdjogMiB9XG4gICAgICBAZXEgKCDOqWJiZGJyX182OCA9IC0+IGNhc3Rfcm93IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVkZl9mdW5jdGlvbnNfd2l0aF9uc3FsOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgQnNxbDMgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdiZXR0ZXItc3FsaXRlMydcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3NxdWFyZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIG51bWJlcnMgKFxuICAgICAgICAgICAgbiBudW1iZXIgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IHNxdWFyZXMgYXMgc2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlKCBuICkgYXMgc3F1YXJlXG4gICAgICAgICAgZnJvbSBudW1iZXJzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgaW5zZXJ0X251bWJlcjogU1FMXCJcIlwiaW5zZXJ0IGludG8gbnVtYmVycyAoIG4gKSB2YWx1ZXMgKCAkbiApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBuICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fc3F1YXJlczogU1FMXCJcIlwic2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgZnJvbSBzcXVhcmVzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAY3JlYXRlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAgICdzcXVhcmUnXG4gICAgICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgICAgICBjYWxsOiAgICAgICAgICAgKCBuICkgLT4gbiAqKiAyXG4gICAgICAgIDtudWxsXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBzcXVhcmVzICAgPSBEYnJpY19zcXVhcmVzLm9wZW4gZGJfcGF0aFxuICAgICAgQGVxICggzqliYmRicl9fNjkgPSAtPiBzcXVhcmVzLmRiIGluc3RhbmNlb2YgQnNxbDMgICAgICksIGZhbHNlXG4gICAgICBmb3IgbiBpbiBbIDAgLi4uIDEwIF1cbiAgICAgICAgc3F1YXJlcy5zdGF0ZW1lbnRzLmluc2VydF9udW1iZXIucnVuIHsgbiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlKClcbiAgICAgIHJvd3MgPSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzcwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAwLCBzcXVhcmU6IDAgfVxuICAgICAgQGVxICggzqliYmRicl9fNzEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDEsIHNxdWFyZTogMSB9XG4gICAgICBAZXEgKCDOqWJiZGJyX183MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMiwgc3F1YXJlOiA0IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzczID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAzLCBzcXVhcmU6IDkgfVxuICAgICAgQGVxICggzqliYmRicl9fNzQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDQsIHNxdWFyZTogMTYgfVxuICAgICAgQGVxICggzqliYmRicl9fNzUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDUsIHNxdWFyZTogMjUgfVxuICAgICAgQGVxICggzqliYmRicl9fNzYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDYsIHNxdWFyZTogMzYgfVxuICAgICAgQGVxICggzqliYmRicl9fNzcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDcsIHNxdWFyZTogNDkgfVxuICAgICAgQGVxICggzqliYmRicl9fNzggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDgsIHNxdWFyZTogNjQgfVxuICAgICAgQGVxICggzqliYmRicl9fNzkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDksIHNxdWFyZTogODEgfVxuICAgICAgQGVxICggzqliYmRicl9fODAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCBudWxsXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVkZl9hZ2dyZWdhdGVzX3dpdGhfbnNxbDogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIEJzcWwzICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYmV0dGVyLXNxbGl0ZTMnXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zcXVhcmVzIGV4dGVuZHMgRGJyaWNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBudW1iZXJzIChcbiAgICAgICAgICAgIG4gbnVtYmVyIHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1wiXCJcIlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdmlldyBzcXVhcmVzIGFzIHNlbGVjdFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHNxdWFyZSggbiApIGFzIHNxdWFyZVxuICAgICAgICAgIGZyb20gbnVtYmVyc1xuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAgIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIGluc2VydF9udW1iZXI6IFNRTFwiXCJcImluc2VydCBpbnRvIG51bWJlcnMgKCBuICkgdmFsdWVzICggJG4gKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggbiApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgIHNlbGVjdF9mcm9tX251bWJlcnM6IFNRTFwiXCJcInNlbGVjdCBuIGZyb20gbnVtYmVycyBvcmRlciBieSBuO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9zcXVhcmVzOiBTUUxcIlwiXCJzZWxlY3RcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBzcXVhcmUsXG4gICAgICAgICAgICBwcm9kdWN0KCBuICkgICAgICBhcyBwX24sXG4gICAgICAgICAgICBwcm9kdWN0KCBzcXVhcmUgKSBhcyBwX3NxdWFyZVxuICAgICAgICAgIGZyb20gc3F1YXJlc1xuICAgICAgICAgIHdoZXJlIG4gYmV0d2VlbiAkc3RhcnQgYW5kICRzdG9wXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAY3JlYXRlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAgICdzcXVhcmUnXG4gICAgICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgICAgICBjYWxsOiAgICAgICAgICAgKCBuICkgLT4gbiAqKiAyXG4gICAgICAgIEBjcmVhdGVfYWdncmVnYXRlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAgICdwcm9kdWN0J1xuICAgICAgICAgIHN0YXJ0OiAgICAgICAgICAtPiAxICMjIyBOT1RFIGNhbiB1c2UgYG51bGxgIGZvciBiU1FMLCBidXQgblNRTCBuZWVkcyBgMWAgIyMjXG4gICAgICAgICAgc3RlcDogICAgICAgICAgIHByb2R1Y3QgPSAoIHRvdGFsLCBlbGVtZW50ICkgLT5cbiAgICAgICAgICAgIGRlYnVnICfOqWJiZGJyX184MScsIHsgdG90YWwsIGVsZW1lbnQsIH1cbiAgICAgICAgICAgIHJldHVybiAoIHRvdGFsID8gMSApICogZWxlbWVudFxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3F1YXJlcyAgID0gRGJyaWNfc3F1YXJlcy5vcGVuIGRiX3BhdGhcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzgyID0gLT4gc3F1YXJlcy5kYiBpbnN0YW5jZW9mIEJzcWwzICAgICApLCBmYWxzZVxuICAgICAgZm9yIG4gaW4gWyAwIC4uLiAxMCBdXG4gICAgICAgIHNxdWFyZXMuc3RhdGVtZW50cy5pbnNlcnRfbnVtYmVyLnJ1biB7IG4sIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZWNobyByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMSwgc3RvcDogNSwgfVxuICAgICAgcm93cyA9IHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMSwgc3RvcDogNSwgfVxuICAgICAgQGVxICggzqliYmRicl9fODMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDEsIHNxdWFyZTogMSwgcF9uOiAxMjAsIHBfc3F1YXJlOiAxNDQwMCB9XG4gICAgICBAZXEgKCDOqWJiZGJyX184NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZWNobyByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUoKVxuICAgICAgcm93cyA9IHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUoKVxuICAgICAgQGVxICggzqliYmRicl9fODUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IG51bGwsIHNxdWFyZTogbnVsbCwgcF9uOiAxLCBwX3NxdWFyZTogMSB9XG4gICAgICBAZXEgKCDOqWJiZGJyX184NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1ZGZfZnVuY3Rpb25zX3dpdGhfYnNxbDogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIEJzcWwzICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYmV0dGVyLXNxbGl0ZTMnXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19zcXVhcmVzIGV4dGVuZHMgRGJyaWNcbiAgICAgIEBkYl9jbGFzczogQnNxbDNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBudW1iZXJzIChcbiAgICAgICAgICAgIG4gbnVtYmVyIHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1wiXCJcIlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdmlldyBzcXVhcmVzIGFzIHNlbGVjdFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHNxdWFyZSggbiApIGFzIHNxdWFyZVxuICAgICAgICAgIGZyb20gbnVtYmVyc1xuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAgIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIGluc2VydF9udW1iZXI6IFNRTFwiXCJcImluc2VydCBpbnRvIG51bWJlcnMgKCBuICkgdmFsdWVzICggJG4gKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggbiApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgIHNlbGVjdF9mcm9tX3NxdWFyZXM6IFNRTFwiXCJcInNlbGVjdFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHNxdWFyZVxuICAgICAgICAgIGZyb20gc3F1YXJlc1xuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGluaXRpYWxpemU6IC0+XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgQGNyZWF0ZV9mdW5jdGlvblxuICAgICAgICAgIG5hbWU6ICAgICAgICAgICAnc3F1YXJlJ1xuICAgICAgICAgIGRldGVybWluaXN0aWM6ICB0cnVlXG4gICAgICAgICAgdmFyYXJnczogICAgICAgIGZhbHNlXG4gICAgICAgICAgY2FsbDogICAgICAgICAgICggbiApIC0+IG4gKiogMlxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgc3F1YXJlcyAgID0gRGJyaWNfc3F1YXJlcy5vcGVuIGRiX3BhdGhcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg3ID0gLT4gc3F1YXJlcy5kYiBpbnN0YW5jZW9mIEJzcWwzICAgICApLCB0cnVlXG4gICAgICBmb3IgbiBpbiBbIDAgLi4uIDEwIF1cbiAgICAgICAgc3F1YXJlcy5zdGF0ZW1lbnRzLmluc2VydF9udW1iZXIucnVuIHsgbiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlKClcbiAgICAgIHJvd3MgPSBzcXVhcmVzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fc3F1YXJlcy5pdGVyYXRlKClcbiAgICAgIEBlcSAoIM6pYmJkYnJfXzg4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAwLCBzcXVhcmU6IDAgfVxuICAgICAgQGVxICggzqliYmRicl9fODkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDEsIHNxdWFyZTogMSB9XG4gICAgICBAZXEgKCDOqWJiZGJyX185MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgbjogMiwgc3F1YXJlOiA0IH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfXzkxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBuOiAzLCBzcXVhcmU6IDkgfVxuICAgICAgQGVxICggzqliYmRicl9fOTIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDQsIHNxdWFyZTogMTYgfVxuICAgICAgQGVxICggzqliYmRicl9fOTMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDUsIHNxdWFyZTogMjUgfVxuICAgICAgQGVxICggzqliYmRicl9fOTQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDYsIHNxdWFyZTogMzYgfVxuICAgICAgQGVxICggzqliYmRicl9fOTUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDcsIHNxdWFyZTogNDkgfVxuICAgICAgQGVxICggzqliYmRicl9fOTYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDgsIHNxdWFyZTogNjQgfVxuICAgICAgQGVxICggzqliYmRicl9fOTcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDksIHNxdWFyZTogODEgfVxuICAgICAgQGVxICggzqliYmRicl9fOTggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB1bmRlZmluZWRcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdWRmX2FnZ3JlZ2F0ZXNfd2l0aF9ic3FsOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgQnNxbDMgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdiZXR0ZXItc3FsaXRlMydcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3NxdWFyZXMgZXh0ZW5kcyBEYnJpY1xuICAgICAgQGRiX2NsYXNzOiBCc3FsM1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAYnVpbGQ6IFtcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIG51bWJlcnMgKFxuICAgICAgICAgICAgbiBudW1iZXIgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB2aWV3IHNxdWFyZXMgYXMgc2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlKCBuICkgYXMgc3F1YXJlXG4gICAgICAgICAgZnJvbSBudW1iZXJzXG4gICAgICAgICAgb3JkZXIgYnkgbjtcIlwiXCJcbiAgICAgICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgaW5zZXJ0X251bWJlcjogU1FMXCJcIlwiaW5zZXJ0IGludG8gbnVtYmVycyAoIG4gKSB2YWx1ZXMgKCAkbiApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBuICkgZG8gbm90aGluZztcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fc3F1YXJlczogU1FMXCJcIlwic2VsZWN0XG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgc3F1YXJlLFxuICAgICAgICAgICAgcHJvZHVjdCggbiApICAgICAgYXMgcF9uLFxuICAgICAgICAgICAgcHJvZHVjdCggc3F1YXJlICkgYXMgcF9zcXVhcmVcbiAgICAgICAgICBmcm9tIHNxdWFyZXNcbiAgICAgICAgICB3aGVyZSBuIGJldHdlZW4gJHN0YXJ0IGFuZCAkc3RvcFxuICAgICAgICAgIG9yZGVyIGJ5IG47XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGluaXRpYWxpemU6IC0+XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgQGNyZWF0ZV9mdW5jdGlvblxuICAgICAgICAgIG5hbWU6ICAgICAgICAgICAnc3F1YXJlJ1xuICAgICAgICAgIGRldGVybWluaXN0aWM6ICB0cnVlXG4gICAgICAgICAgdmFyYXJnczogICAgICAgIGZhbHNlXG4gICAgICAgICAgY2FsbDogICAgICAgICAgIHNxdWFyZSA9ICggbiApIC0+IG4gKiogMlxuICAgICAgICBAY3JlYXRlX2FnZ3JlZ2F0ZV9mdW5jdGlvblxuICAgICAgICAgIG5hbWU6ICAgICAgICAgICAncHJvZHVjdCdcbiAgICAgICAgICBzdGFydDogICAgICAgICAgLT4gbnVsbFxuICAgICAgICAgIHN0ZXA6ICAgICAgICAgICBwcm9kdWN0ID0gKCB0b3RhbCwgZWxlbWVudCApIC0+XG4gICAgICAgICAgICBkZWJ1ZyAnzqliYmRicl9fOTknLCB7IHRvdGFsLCBlbGVtZW50LCB9XG4gICAgICAgICAgICByZXR1cm4gKCB0b3RhbCA/IDEgKSAqIGVsZW1lbnRcbiAgICAgICAgO251bGxcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGRvID0+XG4gICAgICBkYl9wYXRoICAgPSAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIHNxdWFyZXMgICA9IERicmljX3NxdWFyZXMub3BlbiBkYl9wYXRoXG4gICAgICBAZXEgKCDOqWJiZGJyXzEwMCA9IC0+IHNxdWFyZXMuZGIgaW5zdGFuY2VvZiBCc3FsMyAgICAgKSwgdHJ1ZVxuICAgICAgZm9yIG4gaW4gWyAwIC4uLiAxMCBdXG4gICAgICAgIHNxdWFyZXMuc3RhdGVtZW50cy5pbnNlcnRfbnVtYmVyLnJ1biB7IG4sIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZWNobyByb3cgZm9yIHJvdyBmcm9tIHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMiwgc3RvcDogMywgfVxuICAgICAgcm93cyA9IHNxdWFyZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9zcXVhcmVzLml0ZXJhdGUgeyBzdGFydDogMiwgc3RvcDogMywgfVxuICAgICAgQGVxICggzqliYmRicl8xMDEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IG46IDIsIHNxdWFyZTogNCwgcF9uOiA2LCBwX3NxdWFyZTogMzYgfVxuICAgICAgQGVxICggzqliYmRicl8xMDIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB1bmRlZmluZWRcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdWRmX3RhYmxlX2Z1bmN0aW9uX3dpdGhfYnNxbDogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIEJzcWwzICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYmV0dGVyLXNxbGl0ZTMnXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19waHJhc2VzIGV4dGVuZHMgRGJyaWNcbiAgICAgIEBkYl9jbGFzczogQnNxbDNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBwaHJhc2VzIChcbiAgICAgICAgICAgIHBocmFzZSB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfcGhyYXNlOiBTUUxcIlwiXCJpbnNlcnQgaW50byBwaHJhc2VzICggcGhyYXNlICkgdmFsdWVzICggJHBocmFzZSApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBwaHJhc2UgKSBkbyBub3RoaW5nO1wiXCJcIlxuICAgICAgICBzZWxlY3RfZnJvbV9waHJhc2VzOiBTUUxcIlwiXCJcbiAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgZnJvbVxuICAgICAgICAgICAgICBwaHJhc2VzIGFzIHAsXG4gICAgICAgICAgICAgIHJlX21hdGNoZXMoIHAucGhyYXNlLCAkbWF0Y2hlciApIGFzIHJ4XG4gICAgICAgICAgICBvcmRlciBieSBwLnBocmFzZTtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAY3JlYXRlX3RhYmxlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAncmVfbWF0Y2hlcydcbiAgICAgICAgICBjb2x1bW5zOiAgICAgIFsgJ21hdGNoJywgJ2NhcHR1cmUnLCBdXG4gICAgICAgICAgcGFyYW1ldGVyczogICBbICd0ZXh0JywgJ3BhdHRlcm4nLCBdXG4gICAgICAgICAgcm93czogKCB0ZXh0LCBwYXR0ZXJuICkgLT5cbiAgICAgICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cCBwYXR0ZXJuLCAnZydcbiAgICAgICAgICAgIGZvciBtYXRjaCBmcm9tIHRleHQubWF0Y2hBbGwgcmVnZXhcbiAgICAgICAgICAgICAgeWllbGQgWyBtYXRjaFsgMCBdLCBtYXRjaFsgMSBdLCBdXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICA7bnVsbFxuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZG8gPT5cbiAgICAgIGRiX3BhdGggICA9ICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgcGhyYXNlcyAgID0gRGJyaWNfcGhyYXNlcy5vcGVuIGRiX3BhdGhcbiAgICAgIEBlcSAoIM6pYmJkYnJfMTAzID0gLT4gcGhyYXNlcy5kYiBpbnN0YW5jZW9mIEJzcWwzICAgICApLCB0cnVlXG4gICAgICBmb3IgcGhyYXNlIGluIFsgJ2VsZXZlbicsICdmaXZlJywgJ25pbmUnLCAnb25lJywgJ29uZSBwb2ludCBmaXZlJywgJ3NldmVuJywgJ3RocmVlIHBvaW50IG9uZScgXVxuICAgICAgICBwaHJhc2VzLnN0YXRlbWVudHMuaW5zZXJ0X3BocmFzZS5ydW4geyBwaHJhc2UsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX3BocmFzZXMuaXRlcmF0ZSB7IG1hdGNoZXI6ICdeLiooW2FlaW91XS5lKS4qJCcsIH1cbiAgICAgICMgZWNobygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9waHJhc2VzLml0ZXJhdGUgeyBtYXRjaGVyOiAnKFteYWVpb3VdP1thZWlvdV0rKSg/PVttbnZdKScsIH1cbiAgICAgIHJvd3MgPSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fcGhyYXNlcy5pdGVyYXRlIHsgbWF0Y2hlcjogJyhbXmFlaW91XT9bYWVpb3VdKykoPz1bbW52XSknLCB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEwNCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnZWxldmVuJywgbWF0Y2g6ICdsZScsIGNhcHR1cmU6ICdsZScgfVxuICAgICAgQGVxICggzqliYmRicl8xMDUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ2VsZXZlbicsIG1hdGNoOiAndmUnLCBjYXB0dXJlOiAndmUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTA2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdmaXZlJywgbWF0Y2g6ICdmaScsIGNhcHR1cmU6ICdmaScgfVxuICAgICAgQGVxICggzqliYmRicl8xMDcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ25pbmUnLCBtYXRjaDogJ25pJywgY2FwdHVyZTogJ25pJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzEwOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnb25lJywgbWF0Y2g6ICdvJywgY2FwdHVyZTogJ28nIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTA5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdvbmUgcG9pbnQgZml2ZScsIG1hdGNoOiAnbycsIGNhcHR1cmU6ICdvJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzExMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnb25lIHBvaW50IGZpdmUnLCBtYXRjaDogJ3BvaScsIGNhcHR1cmU6ICdwb2knIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTExID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdvbmUgcG9pbnQgZml2ZScsIG1hdGNoOiAnZmknLCBjYXB0dXJlOiAnZmknIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTEyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdzZXZlbicsIG1hdGNoOiAnc2UnLCBjYXB0dXJlOiAnc2UnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTEzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdzZXZlbicsIG1hdGNoOiAndmUnLCBjYXB0dXJlOiAndmUnIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTE0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICd0aHJlZSBwb2ludCBvbmUnLCBtYXRjaDogJ3BvaScsIGNhcHR1cmU6ICdwb2knIH1cbiAgICAgIEBlcSAoIM6pYmJkYnJfMTE1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICd0aHJlZSBwb2ludCBvbmUnLCBtYXRjaDogJyBvJywgY2FwdHVyZTogJyBvJyB9XG4gICAgICBAZXEgKCDOqWJiZGJyXzExNiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHVuZGVmaW5lZFxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmaWxlX3JlYWRlcl9hc190YWJsZV9mdW5jdGlvbjogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIEJzcWwzICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYmV0dGVyLXNxbGl0ZTMnXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBEYnJpY19waHJhc2VzIGV4dGVuZHMgRGJyaWNcbiAgICAgIEBkYl9jbGFzczogQnNxbDNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQGJ1aWxkOiBbXG4gICAgICAgIFNRTFwiXCJcImNyZWF0ZSB0YWJsZSBkYXRhc291cmNlcyAoXG4gICAgICAgICAgICBkc2tleSB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICAgIHBhdGggdGV4dCBub3QgbnVsbCApO1wiXCJcIlxuICAgICAgICBTUUxcIlwiXCJjcmVhdGUgdmlldyBtaXJyb3IgYXMgc2VsZWN0XG4gICAgICAgICAgICAqXG4gICAgICAgICAgZnJvbVxuICAgICAgICAgICAgZGF0YXNvdXJjZXMgYXMgZHMsXG4gICAgICAgICAgICBmaWxlX2xpbmVzKCBkcy5wYXRoICkgYXMgZmxcbiAgICAgICAgICBvcmRlciBieSBkcy5kc2tleSwgZmwubGluZV9ucjtcIlwiXCJcbiAgICAgICAgU1FMXCJcIlwiY3JlYXRlIHRhYmxlIGtleXdvcmRzIChcbiAgICAgICAgICAgIGRza2V5ICAgdGV4dCAgICB1bmlxdWUgbm90IG51bGwsXG4gICAgICAgICAgICBsaW5lX25yIGludGVnZXIgbm90IG51bGwsXG4gICAgICAgICAgICBrZXl3b3JkIHRleHQgICAgbm90IG51bGwsXG4gICAgICAgICAgZm9yZWlnbiBrZXkgKCBkc2tleSApIHJlZmVyZW5jZXMgZGF0YXNvdXJjZXMgKCBkc2tleSApLFxuICAgICAgICAgIHByaW1hcnkga2V5ICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKSApO1wiXCJcIlxuICAgICAgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBpbnNlcnRfZGF0YXNvdXJjZTogU1FMXCJcIlwiaW5zZXJ0IGludG8gZGF0YXNvdXJjZXMgKCBkc2tleSwgcGF0aCApIHZhbHVlcyAoICRkc2tleSwgJHBhdGggKVxuICAgICAgICAgIG9uIGNvbmZsaWN0ICggZHNrZXkgKSBkbyB1cGRhdGUgc2V0IHBhdGggPSAkcGF0aDtcIlwiXCJcbiAgICAgICAgaW5zZXJ0X2tleXdvcmQ6IFNRTFwiXCJcImluc2VydCBpbnRvIGtleXdvcmRzICggZHNrZXksIGxpbmVfbnIsIGtleXdvcmQgKSB2YWx1ZXMgKCAkZHNrZXksICRsaW5lX25yLCAka2V5d29yZCApXG4gICAgICAgICAgb24gY29uZmxpY3QgKCBkc2tleSwgbGluZV9uciwga2V5d29yZCApIGRvIG5vdGhpbmc7XCJcIlwiXG4gICAgICAgIHNlbGVjdF9mcm9tX2RhdGFzb3VyY2VzOiAgU1FMXCJcIlwic2VsZWN0ICogZnJvbSBkYXRhc291cmNlcyBvcmRlciBieSBkc2tleTtcIlwiXCJcbiAgICAgICAgc2VsZWN0X2Zyb21fbWlycm9yOiAgICAgICBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIG1pcnJvciBvcmRlciBieSBkc2tleTtcIlwiXCJcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBAY3JlYXRlX3RhYmxlX2Z1bmN0aW9uXG4gICAgICAgICAgbmFtZTogICAgICAgICAnZmlsZV9saW5lcydcbiAgICAgICAgICBjb2x1bW5zOiAgICAgIFsgJ2xpbmVfbnInLCAnbGluZScsIF1cbiAgICAgICAgICBwYXJhbWV0ZXJzOiAgIFsgJ3BhdGgnLCBdXG4gICAgICAgICAgcm93czogKCBwYXRoICkgLT5cbiAgICAgICAgICAgIGZvciB7IGxucjogbGluZV9uciwgbGluZSwgZW9sLCB9IGZyb20gR1VZLmZzLndhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgcGF0aFxuICAgICAgICAgICAgICB5aWVsZCB7IGxpbmVfbnIsIGxpbmUsIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIDtudWxsXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGJfcGF0aCAgID0gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBwaHJhc2VzICAgPSBEYnJpY19waHJhc2VzLm9wZW4gZGJfcGF0aFxuICAgICAgQGVxICggzqliYmRicl8xMTcgPSAtPiBwaHJhc2VzLmRiIGluc3RhbmNlb2YgQnNxbDMgICAgICksIHRydWVcbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGRvID0+XG4gICAgICAjICAgZHNrZXkgPSAncmVhZG1lJ1xuICAgICAgIyAgIHBhdGggID0gUEFUSC5yZXNvbHZlIF9fZGlybmFtZSwgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9SRUFETUUubWQnXG4gICAgICAjICAgcGhyYXNlcy5zdGF0ZW1lbnRzLmluc2VydF9kYXRhc291cmNlLnJ1biB7IGRza2V5LCBwYXRoIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZHNrZXkgPSAncGFja2FnZS1qc29uJ1xuICAgICAgICBwYXRoICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvcGFja2FnZS5qc29uJ1xuICAgICAgICBwaHJhc2VzLnN0YXRlbWVudHMuaW5zZXJ0X2RhdGFzb3VyY2UucnVuIHsgZHNrZXksIHBhdGggfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBlY2hvIHJvdyBmb3Igcm93IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX2RhdGFzb3VyY2VzLml0ZXJhdGUoKVxuICAgICAgZWNobygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGVjaG8gcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fbWlycm9yLml0ZXJhdGUoKVxuICAgICAgZWNobygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZvciB7IGRza2V5LCBsaW5lX25yLCBsaW5lLCB9IGZyb20gcGhyYXNlcy5zdGF0ZW1lbnRzLnNlbGVjdF9mcm9tX21pcnJvci5pdGVyYXRlKClcbiAgICAgICAgZGVidWcgJ86pYmJkYnJfMTE4JywgbGluZV9uciwgcnByICggd29yZCBmb3Igd29yZCBpbiBsaW5lLnNwbGl0IC9bLVxceDIwOi47XFwvXSsvIHdoZW4gd29yZCBpc250ICcnIClcbiAgICAgICAgcGhyYXNlcy5zdGF0ZW1lbnRzLmluc2VydF9rZXl3b3JkLnJ1biB7IH1cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHBocmFzZXMuc3RhdGVtZW50cy5zZWxlY3RfZnJvbV9waHJhc2VzLml0ZXJhdGUgeyBtYXRjaGVyOiAnXi4qKFthZWlvdV0uZSkuKiQnLCB9XG4gICAgICAjIGVjaG8oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fcGhyYXNlcy5pdGVyYXRlIHsgbWF0Y2hlcjogJyhbXmFlaW91XT9bYWVpb3VdKykoPz1bbW52XSknLCB9XG4gICAgICAjIHJvd3MgPSBwaHJhc2VzLnN0YXRlbWVudHMuc2VsZWN0X2Zyb21fcGhyYXNlcy5pdGVyYXRlIHsgbWF0Y2hlcjogJyhbXmFlaW91XT9bYWVpb3VdKykoPz1bbW52XSknLCB9XG4gICAgICAjIEBlcSAoIM6pYmJkYnJfMTE5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdlbGV2ZW4nLCBtYXRjaDogJ2xlJywgY2FwdHVyZTogJ2xlJyB9XG4gICAgICAjIEBlcSAoIM6pYmJkYnJfMTIwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdlbGV2ZW4nLCBtYXRjaDogJ3ZlJywgY2FwdHVyZTogJ3ZlJyB9XG4gICAgICAjIEBlcSAoIM6pYmJkYnJfMTIxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdmaXZlJywgbWF0Y2g6ICdmaScsIGNhcHR1cmU6ICdmaScgfVxuICAgICAgIyBAZXEgKCDOqWJiZGJyXzEyMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnbmluZScsIG1hdGNoOiAnbmknLCBjYXB0dXJlOiAnbmknIH1cbiAgICAgICMgQGVxICggzqliYmRicl8xMjMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ29uZScsIG1hdGNoOiAnbycsIGNhcHR1cmU6ICdvJyB9XG4gICAgICAjIEBlcSAoIM6pYmJkYnJfMTI0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdvbmUgcG9pbnQgZml2ZScsIG1hdGNoOiAnbycsIGNhcHR1cmU6ICdvJyB9XG4gICAgICAjIEBlcSAoIM6pYmJkYnJfMTI1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdvbmUgcG9pbnQgZml2ZScsIG1hdGNoOiAncG9pJywgY2FwdHVyZTogJ3BvaScgfVxuICAgICAgIyBAZXEgKCDOqWJiZGJyXzEyNiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAnb25lIHBvaW50IGZpdmUnLCBtYXRjaDogJ2ZpJywgY2FwdHVyZTogJ2ZpJyB9XG4gICAgICAjIEBlcSAoIM6pYmJkYnJfMTI3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICdzZXZlbicsIG1hdGNoOiAnc2UnLCBjYXB0dXJlOiAnc2UnIH1cbiAgICAgICMgQGVxICggzqliYmRicl8xMjggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHBocmFzZTogJ3NldmVuJywgbWF0Y2g6ICd2ZScsIGNhcHR1cmU6ICd2ZScgfVxuICAgICAgIyBAZXEgKCDOqWJiZGJyXzEyOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcGhyYXNlOiAndGhyZWUgcG9pbnQgb25lJywgbWF0Y2g6ICdwb2knLCBjYXB0dXJlOiAncG9pJyB9XG4gICAgICAjIEBlcSAoIM6pYmJkYnJfMTMwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyBwaHJhc2U6ICd0aHJlZSBwb2ludCBvbmUnLCBtYXRjaDogJyBvJywgY2FwdHVyZTogJyBvJyB9XG4gICAgICAjIEBlcSAoIM6pYmJkYnJfMTMxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgdW5kZWZpbmVkXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb19pbmZpbml0ZV9wcm94eSgpXG4gICMgZGVtb19jb2xvcmZ1bF9wcm94eSgpXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogdHJ1ZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4gICMgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHNhbXBsZV9kYl93aXRoX2JzcWw6IHRlc3RzLnNhbXBsZV9kYl93aXRoX2JzcWwsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHVkZl9mdW5jdGlvbnNfd2l0aF9uc3FsOiB0ZXN0cy51ZGZfZnVuY3Rpb25zX3dpdGhfbnNxbCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdWRmX2Z1bmN0aW9uc193aXRoX2JzcWw6IHRlc3RzLnVkZl9mdW5jdGlvbnNfd2l0aF9ic3FsLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB1ZGZfYWdncmVnYXRlc193aXRoX2JzcWw6IHRlc3RzLnVkZl9hZ2dyZWdhdGVzX3dpdGhfYnNxbCwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdWRmX2FnZ3JlZ2F0ZXNfd2l0aF9uc3FsOiB0ZXN0cy51ZGZfYWdncmVnYXRlc193aXRoX25zcWwsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHVkZl90YWJsZV9mdW5jdGlvbl93aXRoX2JzcWw6IHRlc3RzLnVkZl90YWJsZV9mdW5jdGlvbl93aXRoX2JzcWwsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBmaWxlX3JlYWRlcl9hc190YWJsZV9mdW5jdGlvbjogdGVzdHMuZmlsZV9yZWFkZXJfYXNfdGFibGVfZnVuY3Rpb24sIH1cbiJdfQ==
