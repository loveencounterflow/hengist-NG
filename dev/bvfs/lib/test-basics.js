(function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-sfmodules/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  //###########################################################################################################

  //===========================================================================================================
  this.tasks = {
    //---------------------------------------------------------------------------------------------------------
    basics: function() {
      var Async_jetstream, Jetstream, SFMODULES, internals, probes_and_matchers, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, Async_jetstream, internals} = SFMODULES.require_jetstream());
      //.......................................................................................................
      probes_and_matchers = [
        {
          type: 'folder',
          nprm: 509,
          sprm: 'drwxrwxr-x'
        },
        {
          type: 'folder',
          nprm: 16832,
          sprm: 'drwx------'
        },
        {
          type: 'folder',
          nprm: 448,
          sprm: 'drwx------'
        },
        {
          type: 'folder',
          nprm: 16704,
          sprm: 'dr-x------'
        },
        {
          type: 'folder',
          nprm: 509,
          sprm: 'drwxrwxr-x'
        },
        {
          type: 'folder',
          nprm: 509,
          sprm: 'drwxrwxr-x'
        },
        {
          type: 'file',
          nprm: 33204,
          sprm: '.rw-rw-r--'
        },
        {
          type: 'file',
          nprm: 33152,
          sprm: '.rw-------'
        },
        {
          type: 'file',
          nprm: 33204,
          sprm: 'drwx------'
        },
        {
          type: 'folder',
          nprm: 448,
          sprm: '.rw-rw-r--'
        },
        {
          type: 'file',
          nprm: 33204,
          sprm: '.rw-rw-r--'
        },
        {
          type: 'file',
          nprm: 33152,
          sprm: '.rw-------'
        },
        {
          type: 'file',
          nprm: 33152,
          sprm: '.rw-------'
        }
      ];
      (() => {        //.......................................................................................................
        var bprm, i, len, nprm, oprm, sprm, type, xprm;
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          ({type, nprm, sprm} = probes_and_matchers[i]);
          oprm = '0o' + (nprm.toString(8)).padStart(8, '0');
          xprm = '0x' + (nprm.toString(16)).padStart(8, '0');
          bprm = '__' + (nprm.toString(2)).padStart(16, '0');
          debug('Ωbvfs___1', f`${nprm}:>10c; ${oprm}:>10c; ${xprm}:>10c; ${bprm}:>20c; ${sprm}:>10c; `);
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    file_permissions_logic: function() {
      var FS, SFMODULES, UP, k;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      UP = require('unix-permissions');
      FS = require('node:fs');
      debug('Ωbbbt___2', (function() {
        var results;
        results = [];
        for (k in UP) {
          results.push(k);
        }
        return results;
      })());
      debug('Ωbbbt___3', UP.convert.object((FS.statSync('/etc/passwd')).mode));
      debug('Ωbbbt___4', f`${UP.convert.number('a-w')}:>#03o;`);
      debug('Ωbbbt___5', f`${UP.convert.number('a+w')}:>#03o;`);
      debug('Ωbbbt___6', f`${UP.convert.number('u+w')}:>#03o;`);
      debug('Ωbbbt___7', f`${UP.convert.number('u+r')}:>#03o;`);
      debug('Ωbbbt___8', f`${UP.convert.number('u-w,g-w,o-w')}:>#03o;`);
      debug('Ωbbbt___9', f`${UP.convert.number('u+w,g+w,o+w')}:>#03o;`);
      debug('Ωbbbt__10', f`  ${UP.convert.symbolic('u+w,g+w,o+w')}:>20c;`);
      help('Ωbbbt__11', f`  ${UP.convert.symbolic(0o775)}:>20c;`);
      help('Ωbbbt__12', f`  ${UP.convert.symbolic(0o664)}:>20c;`);
      help('Ωbbbt__13', f`  ${UP.convert.symbolic(0o555)}:>20c;`);
      help('Ωbbbt__14', f`  ${UP.convert.symbolic(0o444)}:>20c;`);
      help('Ωbbbt__15');
      help('Ωbbbt__16', f`  ${UP.convert.symbolic(0o000775)}:>20c;`);
      help('Ωbbbt__17', f`  ${UP.convert.symbolic(0o040555)}:>20c;`);
      help('Ωbbbt__18', f`  ${UP.convert.symbolic(0o100444)}:>20c;`);
      help('Ωbbbt__19');
      help('Ωbbbt__20', f`  ${UP.convert.symbolic(0o000775 & 0xfe00 | 0x01fd)}:>20c;`);
      /* 0o775 drwxrwxr-x folder open */      help('Ωbbbt__21', f`  ${UP.convert.symbolic(0o040555 & 0xfe00 | 0x01fd)}:>20c;`);
      /* 0o775 drwxrwxr-x folder open */      help('Ωbbbt__22', f`  ${UP.convert.symbolic(0o100444 & 0xfe00 | 0x01b4)}:>20c;`);
      /* 0o664 .rw-rw-r-- file open */      help('Ωbbbt__23');
      help('Ωbbbt__24', f`  ${UP.convert.symbolic(0o000775 & 0xfe00 | 0x016d)}:>20c;`);
      /* 0o555 dr-xr-xr-x folder closed */      help('Ωbbbt__25', f`  ${UP.convert.symbolic(0o040555 & 0xfe00 | 0x016d)}:>20c;`);
      /* 0o555 dr-xr-xr-x folder closed */      help('Ωbbbt__26', f`  ${UP.convert.symbolic(0o100444 & 0xfe00 | 0x0124)}:>20c;`);
// @eq ( Ωbbbt__27 = -> false ), false
/* 0o444 .r--r--r-- file closed */      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    access_fs_with_db: function() {
      var Dbric, PATH, SFMODULES, SQL, Sqlitefs_db, d, db, db_path, execaSync, full_path, internals, mode, mount_path, paths, ref_path, shell, shell_cfg, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      PATH = require('node:path');
      ({execaSync} = require('execa'));
      Sqlitefs_db = (function() {
        //.......................................................................................................
        class Sqlitefs_db extends Dbric {
          * walk_fs_objects() {
            return (yield* this.statements.get_fs_objects.iterate());
          }

        };

        // @build: [
        //   SQL"""
        //     create table nonconform_one ( a text primary key );"""
        //   SQL"""
        //     -- this comment shouldn't be here
        //     create view nonconform_two as select * from nonconform_one;"""
        //   ]
        //-----------------------------------------------------------------------------------------------------
        Sqlitefs_db.statements = {
          get_fs_objects: SQL`select * from bb_list;`
        };

        return Sqlitefs_db;

      }).call(this);
      //.......................................................................................................
      ref_path = PATH.resolve(__dirname, '../../../apps/bvfs');
      db_path = PATH.join(ref_path, 'bvfs.db');
      mount_path = PATH.join(ref_path, 'mount');
      //.......................................................................................................
      shell_cfg = {
        cwd: ref_path,
        lines: true
      };
      shell = function(cmd, ...P) {
        return (execaSync(cmd, P, shell_cfg)).stdout;
      };
      //.......................................................................................................
      db = Sqlitefs_db.open(db_path);
      debug('Ωbvfs__28', db.statements);
      paths = [];
      (() => {        //.......................................................................................................
        var i, len, line, ref, results;
        ref = shell('show-layout', mount_path);
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          line = ref[i];
          results.push(echo(line));
        }
        return results;
      })();
      //.......................................................................................................
      // mode = 'close'
      // mode = 'open'
      mode = 'nothing';
      switch (mode) {
        case 'open':
          (() => {
            debug('Ωbvfs__29', db.execute(SQL`update metadata set mode = s.open_mode
  from metadata           as m
  join bb_standard_modes  as s on ( m.id = s.file_id );`));
            return null;
          })();
          break;
        case 'close':
          (() => {
            debug('Ωbvfs__30', db.execute(SQL`update metadata set mode = s.closed_mode
  from metadata           as m
  join bb_standard_modes  as s on ( m.id = s.file_id );`));
            return null;
          })();
          break;
        case 'nothing':
          null;
          break;
        default:
          throw new Error(`unknown mode: ${rpr(mode)}`);
      }
//.......................................................................................................
      for (d of db.walk_fs_objects()) {
        full_path = PATH.join(mount_path, d.path);
        paths.push(full_path);
        urge('Ωbvfs__31', d.mode_o, d.path); // { d..., full_path, }
      }
      (() => {        //.......................................................................................................
        var i, len, line, ref, results;
        ref = shell('show-layout', mount_path);
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          line = ref[i];
          results.push(echo(line));
        }
        return results;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    scripts_: function() {
      var Dbric, PATH, SFMODULES, SQL, _validate_shell_arguments, db_path, execaSync, internals, mount_path, ref_path, shell, shell_cfg, type_of, Ωbbbt__39, Ωbbbt__40, Ωbbbt__41, Ωbvfs__36, Ωbvfs__37, Ωbvfs__38;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      PATH = require('node:path');
      ({execaSync} = require('execa'));
      //.......................................................................................................
      ref_path = PATH.resolve(__dirname, '../../../apps/bvfs');
      db_path = PATH.join(ref_path, 'bvfs.db');
      mount_path = PATH.join(ref_path, 'mount');
      shell_cfg = {
        cwd: ref_path,
        lines: true
      };
      //.......................................................................................................
      _validate_shell_arguments = function(cfg, cmd, ...parameters) {
        var type;
        // whisper 'Ωbbbt__32', { cfg, cmd, parameters, }
        switch (type = type_of(cfg)) {
          case 'text':
            if (cmd === void 0) {
              [cfg, cmd, ...parameters] = [{}, cfg, ...parameters];
            } else {
              [cfg, cmd, ...parameters] = [{}, cfg, cmd, ...parameters];
            }
            break;
          case 'pod':
            null;
            break;
          default:
            throw new Error(`Ωbvfs__33 expected a pod or a text, got a ${type}`);
        }
        if ((type = type_of(cmd)) !== 'text') {
          throw new Error(`Ωbvfs__34 expected a text, got a ${type}`);
        }
        cfg = {...shell_cfg, ...cfg};
        // info 'Ωbbbt__35', { cfg, cmd, parameters, }
        return {cfg, cmd, parameters};
      };
      //.......................................................................................................
      shell = function(cfg, cmd, ...parameters) {
        ({cfg, cmd, parameters} = _validate_shell_arguments(cfg, cmd, ...parameters));
        return (execaSync(cmd, parameters, cfg)).stdout;
      };
      //.......................................................................................................
      // trash bvfs.db && bin/sqlite-fs mount -- ./bvfs.db & disown && sqlite3 bvfs.db ".dump" > bvfs.dump.sql
      //.......................................................................................................
      this.throws((Ωbvfs__36 = function() {
        return _validate_shell_arguments(null);
      }), /expected a pod or a text, got a/);
      this.throws((Ωbvfs__37 = function() {
        return _validate_shell_arguments([]);
      }), /expected a pod or a text, got a/);
      this.throws((Ωbvfs__38 = function() {
        return _validate_shell_arguments({});
      }), /expected a text, got a/);
      this.eq((Ωbbbt__39 = function() {
        return _validate_shell_arguments('ls');
      }), {
        cfg: {
          cwd: ref_path,
          lines: true
        },
        cmd: 'ls',
        parameters: []
      });
      this.eq((Ωbbbt__40 = function() {
        return _validate_shell_arguments('ls', '-AlF');
      }), {
        cfg: {
          cwd: ref_path,
          lines: true
        },
        cmd: 'ls',
        parameters: ['-AlF']
      });
      this.eq((Ωbbbt__41 = function() {
        return _validate_shell_arguments('ls', '-AlF', '.');
      }), {
        cfg: {
          cwd: ref_path,
          lines: true
        },
        cmd: 'ls',
        parameters: ['-AlF', '.']
      });
      debug('Ωbbbt__42', shell('ls'));
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    (() => {
      var guytest_cfg;
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
      // ( new Test guytest_cfg ).test { access_fs_with_db: @tasks.access_fs_with_db, }
      return (new Test(guytest_cfg)).test({
        scripts_: this.tasks.scripts_
      });
    })();
  }

  // p = 0b0000000_010_010_000; urge f"#{p}:>#08o; #{p}:>#06x;"
// p = 0b1111111_101_101_111; urge f"#{p}:>#08o; #{p}:>#06x;"
// p = 0b11111111111111111111111000000000; urge f"#{p}:>#08o; #{p}:>#06x;"
// p = 0o777; urge f"#{p}:>#08o; #{p}:>#06x; #{p}:>#016b;"
// p = 0o775; urge f"#{p}:>#08o; #{p}:>#06x; #{p}:>#016b;"
// p = 0o664; urge f"#{p}:>#08o; #{p}:>#06x; #{p}:>#016b;"
// urge 'Ωbvfs__43'
// p = 0o777; urge f"#{p}:>#08o; #{p}:>#06x; #{p}:>#016b;"
// p = 0o555; urge f"#{p}:>#08o; #{p}:>#06x; #{p}:>#016b;"
// p = 0o444; urge f"#{p}:>#08o; #{p}:>#06x; #{p}:>#016b;"
/*
│      21 │         1 │ folder │   509 │ drwxrwxr-x │ ?rwsrwsr-t    │ .Trash-1000                              │ /.Trash-1000
│      29 │        21 │ folder │ 16832 │ drwx------ │ drws-----T    │ expunged                                 │ /.Trash-1000/expunged
│      24 │        21 │ folder │   448 │ drwx------ │ ?rws-----T    │ files                                    │ /.Trash-1000/files
│      22 │        21 │ folder │   448 │ drwx------ │ ?rws-----T    │ info                                     │ /.Trash-1000/info
│       2 │         1 │ folder │ 16704 │ dr-x------ │ drws-----T    │ origin                                   │ /origin
│      17 │         2 │ folder │   448 │ drwx------ │ ?rws-----T    │ file                                     │ /origin/file
│      26 │        17 │ folder │   509 │ drwxrwxr-x │ ?rwsrwsr-t    │ jzr                                      │ /origin/file/jzr
│      27 │        26 │ folder │   509 │ drwxrwxr-x │ ?rwsrwsr-t    │ bricabrac                                │ /origin/file/jzr/bricabrac
│      28 │        27 │ file   │ 33204 │ .rw-rw-r-- │ .rwxrwSr-T    │ README.md                                │ /origin/file/jzr/bricabrac/README.md
│      18 │        17 │ folder │   448 │ drwx------ │ ?rws-----T    │ path                                     │ /origin/file/path
│      19 │        18 │ folder │   448 │ drwx------ │ ?rws-----T    │ to                                       │ /origin/file/path/to
│      20 │        19 │ file   │ 33152 │ .rw------- │ .-w------T    │ index.js                                 │ /origin/file/path/to/index.js
│      16 │         2 │ folder │   448 │ drwx------ │ ?rws-----T    │ http                                     │ /origin/http
│       3 │         2 │ folder │   448 │ drwx------ │ ?rws-----T    │ https                                    │ /origin/https
│       7 │         3 │ folder │   448 │ drwx------ │ ?rws-----T    │ raw.githubusercontent.com                │ /origin/https/raw.githubusercontent.com
│       8 │         7 │ folder │   448 │ drwx------ │ ?rws-----T    │ loveencounterflow                        │ /origin/https/raw.githubusercontent.com/loveencounterflow
│       9 │         8 │ folder │   448 │ drwx------ │ ?rws-----T    │ bricabrac-sfmodules                      │ /origin/https/raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules
│      10 │         9 │ folder │   448 │ drwx------ │ ?rws-----T    │ 2980e28985fe7b96772a7213a2cd9ae3f263177a │ /origin/https/raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/2980e28985f
│      25 │        10 │ file   │ 33204 │ drwx------ │ .rwxrwSr-T    │ README.md                                │ /origin/https/raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/2980e28985f
│      11 │        10 │ folder │   448 │ .rw-rw-r-- │ ?rws-----T    │ lib                                      │ /origin/https/raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/2980e28985f
│      12 │        11 │ file   │ 33204 │ .rw-rw-r-- │ .rwxrwSr-T    │ jetstream.brics.js                       │ /origin/https/raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/2980e28985f
│      13 │        10 │ folder │   448 │ drwx------ │ ?rws-----T    │ src                                      │ /origin/https/raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/2980e28985f
│      14 │        13 │ file   │ 33152 │ .rw------- │ .-w------T    │ jetstream.brics.coffee                   │ /origin/https/raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/2980e28985f
│       4 │         3 │ folder │   448 │ drwx------ │ ?rws-----T    │ unpkg.com                                │ /origin/https/unpkg.com
│       5 │         4 │ folder │   448 │ drwx------ │ ?rws-----T    │ ansi_up                                  │ /origin/https/unpkg.com/ansi_up
│       6 │         5 │ file   │ 33152 │ .rw------- │ .-w------T    │ ansi_up.js                               │ /origin/https/unpkg.com/ansi_up/ansi_up.js

drwxrwxr-x     - flow 2025-11-01 20:08 ├── .Trash-1000
drwx------     - flow 2025-11-01 20:08 │   ├── expunged
drwx------     - flow 2025-11-01 20:08 │   ├── files
drwx------     - flow 2025-11-01 20:08 │   └── info
dr-x------     - flow 2025-11-01 10:02 └── origin
drwx------     - flow 2025-11-01 20:07     ├── file
drwxrwxr-x     - flow 2025-11-01 20:07     │   ├── jzr
drwxrwxr-x     - flow 2025-11-01 20:08     │   │   └── bricabrac
.rw-rw-r-- 13079 flow 2025-11-01 21:16     │   │       └── README.md
drwx------     - flow 2025-11-01 10:02     │   └── path
drwx------     - flow 2025-11-01 10:02     │       └── to
.rw-------     0 flow 2025-11-01 10:02     │           └── index.js
drwx------     - flow 2025-11-01 10:02     ├── http
drwx------     - flow 2025-11-01 10:02     └── https
drwx------     - flow 2025-11-01 10:02         ├── raw.githubusercontent.com
drwx------     - flow 2025-11-01 10:02         │   └── loveencounterflow
drwx------     - flow 2025-11-01 10:02         │       └── bricabrac-sfmodules
drwx------     - flow 2025-11-01 20:06         │           └── 2980e28985fe7b96772a7213a2cd9ae3f263177a
drwx------     - flow 2025-11-01 10:02         │               ├── lib
.rw-rw-r-- 58390 flow 2025-11-01 10:02         │               │   └── jetstream.brics.js
.rw-rw-r-- 21643 flow 2025-11-01 20:06         │               ├── README.md
drwx------     - flow 2025-11-01 10:02         │               └── src
.rw------- 15776 flow 2025-11-01 10:02         │                   └── jetstream.brics.coffee
drwx------     - flow 2025-11-01 10:02         └── unpkg.com
drwx------     - flow 2025-11-01 10:02             └── ansi_up
.rw------- 22656 flow 2025-11-01 10:02                 └── ansi_up.js

*/

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBSUUsQ0FBQTs7SUFBQSxNQUFBLEVBQVEsUUFBQSxDQUFBLENBQUE7QUFDVixVQUFBLGVBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxtQkFBQSxFQUFBO01BQUksU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixT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ICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtc2Ztb2R1bGVzL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGFza3MgPVxuXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBiYXNpY3M6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgSmV0c3RyZWFtLFxuICAgICAgQXN5bmNfamV0c3RyZWFtLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06ICAgNTA5LCBzcHJtOiAnZHJ3eHJ3eHIteCcsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAxNjgzMiwgc3BybTogJ2Ryd3gtLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogICA0NDgsIHNwcm06ICdkcnd4LS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06IDE2NzA0LCBzcHJtOiAnZHIteC0tLS0tLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAgIDUwOSwgc3BybTogJ2Ryd3hyd3hyLXgnLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogICA1MDksIHNwcm06ICdkcnd4cnd4ci14JywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMjA0LCBzcHJtOiAnLnJ3LXJ3LXItLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzE1Miwgc3BybTogJy5ydy0tLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMyMDQsIHNwcm06ICdkcnd4LS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06ICAgNDQ4LCBzcHJtOiAnLnJ3LXJ3LXItLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzIwNCwgc3BybTogJy5ydy1ydy1yLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMxNTIsIHNwcm06ICcucnctLS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMTUyLCBzcHJtOiAnLnJ3LS0tLS0tLScsIH1cbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3IgeyB0eXBlLCBucHJtLCBzcHJtLCB9IGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgb3BybSA9ICcwbycgKyAoIG5wcm0udG9TdHJpbmcgIDggKS5wYWRTdGFydCAgOCwgJzAnXG4gICAgICAgIHhwcm0gPSAnMHgnICsgKCBucHJtLnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgIDgsICcwJ1xuICAgICAgICBicHJtID0gJ19fJyArICggbnBybS50b1N0cmluZyAgMiApLnBhZFN0YXJ0IDE2LCAnMCdcbiAgICAgICAgZGVidWcgJ86pYnZmc19fXzEnLCBmXCIje25wcm19Oj4xMGM7ICN7b3BybX06PjEwYzsgI3t4cHJtfTo+MTBjOyAje2Jwcm19Oj4yMGM7ICN7c3BybX06PjEwYzsgXCJcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZmlsZV9wZXJtaXNzaW9uc19sb2dpYzogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIFVQICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICd1bml4LXBlcm1pc3Npb25zJ1xuICAgIEZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgIGRlYnVnICfOqWJiYnRfX18yJywgKCBrIGZvciBrIG9mIFVQIClcbiAgICBkZWJ1ZyAnzqliYmJ0X19fMycsIFVQLmNvbnZlcnQub2JqZWN0ICggRlMuc3RhdFN5bmMgJy9ldGMvcGFzc3dkJyApLm1vZGVcbiAgICBkZWJ1ZyAnzqliYmJ0X19fNCcsIGZcIiN7VVAuY29udmVydC5udW1iZXIgJ2Etdyd9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYmJidF9fXzUnLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICdhK3cnfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJiYnRfX182JywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAndSt3J306PiMwM287XCJcbiAgICBkZWJ1ZyAnzqliYmJ0X19fNycsIGZcIiN7VVAuY29udmVydC5udW1iZXIgJ3Urcid9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYmJidF9fXzgnLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICd1LXcsZy13LG8tdyd9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYmJidF9fXzknLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICd1K3csZyt3LG8rdyd9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYmJidF9fMTAnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAndSt3LGcrdyxvK3cnfTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xMScsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvNzc1fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xMicsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvNjY0fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xMycsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvNTU1fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xNCcsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvNDQ0fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xNSdcbiAgICBoZWxwICfOqWJiYnRfXzE2JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wMDA3NzV9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJiYnRfXzE3JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wNDA1NTV9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJiYnRfXzE4JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8xMDA0NDR9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJiYnRfXzE5J1xuICAgIGhlbHAgJ86pYmJidF9fMjAnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzAwMDc3NSAmIDB4ZmUwMCB8IDB4MDFmZCB9Oj4yMGM7XCIgIyMjIDBvNzc1IGRyd3hyd3hyLXggZm9sZGVyIG9wZW4gIyMjXG4gICAgaGVscCAnzqliYmJ0X18yMScsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDQwNTU1ICYgMHhmZTAwIHwgMHgwMWZkIH06PjIwYztcIiAjIyMgMG83NzUgZHJ3eHJ3eHIteCBmb2xkZXIgb3BlbiAjIyNcbiAgICBoZWxwICfOqWJiYnRfXzIyJywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8xMDA0NDQgJiAweGZlMDAgfCAweDAxYjQgfTo+MjBjO1wiICMjIyAwbzY2NCAucnctcnctci0tIGZpbGUgb3BlbiAjIyNcbiAgICBoZWxwICfOqWJiYnRfXzIzJ1xuICAgIGhlbHAgJ86pYmJidF9fMjQnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzAwMDc3NSAmIDB4ZmUwMCB8IDB4MDE2ZCB9Oj4yMGM7XCIgIyMjIDBvNTU1IGRyLXhyLXhyLXggZm9sZGVyIGNsb3NlZCAjIyNcbiAgICBoZWxwICfOqWJiYnRfXzI1JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wNDA1NTUgJiAweGZlMDAgfCAweDAxNmQgfTo+MjBjO1wiICMjIyAwbzU1NSBkci14ci14ci14IGZvbGRlciBjbG9zZWQgIyMjXG4gICAgaGVscCAnzqliYmJ0X18yNicsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMTAwNDQ0ICYgMHhmZTAwIHwgMHgwMTI0IH06PjIwYztcIiAjIyMgMG80NDQgLnItLXItLXItLSBmaWxlIGNsb3NlZCAjIyNcbiAgICAjIEBlcSAoIM6pYmJidF9fMjcgPSAtPiBmYWxzZSApLCBmYWxzZVxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhY2Nlc3NfZnNfd2l0aF9kYjogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgeyBleGVjYVN5bmMsICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICdleGVjYSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIFNxbGl0ZWZzX2RiIGV4dGVuZHMgRGJyaWNcbiAgICAgICMgQGJ1aWxkOiBbXG4gICAgICAjICAgU1FMXCJcIlwiXG4gICAgICAjICAgICBjcmVhdGUgdGFibGUgbm9uY29uZm9ybV9vbmUgKCBhIHRleHQgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICMgICBTUUxcIlwiXCJcbiAgICAgICMgICAgIC0tIHRoaXMgY29tbWVudCBzaG91bGRuJ3QgYmUgaGVyZVxuICAgICAgIyAgICAgY3JlYXRlIHZpZXcgbm9uY29uZm9ybV90d28gYXMgc2VsZWN0ICogZnJvbSBub25jb25mb3JtX29uZTtcIlwiXCJcbiAgICAgICMgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBnZXRfZnNfb2JqZWN0czogU1FMXCJcIlwiXG4gICAgICAgICAgc2VsZWN0ICogZnJvbSBiYl9saXN0O1wiXCJcIlxuICAgICAgd2Fsa19mc19vYmplY3RzOiAtPiB5aWVsZCBmcm9tIEBzdGF0ZW1lbnRzLmdldF9mc19vYmplY3RzLml0ZXJhdGUoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmVmX3BhdGggICAgPSBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4vYXBwcy9idmZzJ1xuICAgIGRiX3BhdGggICAgID0gUEFUSC5qb2luIHJlZl9wYXRoLCAnYnZmcy5kYidcbiAgICBtb3VudF9wYXRoICA9IFBBVEguam9pbiByZWZfcGF0aCwgJ21vdW50J1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgc2hlbGxfY2ZnICAgPSB7IGN3ZDogcmVmX3BhdGgsIGxpbmVzOiB0cnVlLCB9XG4gICAgc2hlbGwgICAgICAgPSAoIGNtZCwgUC4uLiApIC0+ICggZXhlY2FTeW5jIGNtZCwgUCwgc2hlbGxfY2ZnICkuc3Rkb3V0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkYiAgICAgICAgICA9IFNxbGl0ZWZzX2RiLm9wZW4gZGJfcGF0aFxuICAgIGRlYnVnICfOqWJ2ZnNfXzI4JywgZGIuc3RhdGVtZW50c1xuICAgIHBhdGhzICAgICAgID0gW11cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3IgbGluZSBpbiBzaGVsbCAnc2hvdy1sYXlvdXQnLCBtb3VudF9wYXRoXG4gICAgICAgIGVjaG8gbGluZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBtb2RlID0gJ2Nsb3NlJ1xuICAgICMgbW9kZSA9ICdvcGVuJ1xuICAgIG1vZGUgPSAnbm90aGluZydcbiAgICBzd2l0Y2ggbW9kZVxuICAgICAgd2hlbiAnb3BlbicgdGhlbiBkbyA9PlxuICAgICAgICBkZWJ1ZyAnzqlidmZzX18yOScsIGRiLmV4ZWN1dGUgU1FMXCJcIlwiXG4gICAgICAgIHVwZGF0ZSBtZXRhZGF0YSBzZXQgbW9kZSA9IHMub3Blbl9tb2RlXG4gICAgICAgICAgZnJvbSBtZXRhZGF0YSAgICAgICAgICAgYXMgbVxuICAgICAgICAgIGpvaW4gYmJfc3RhbmRhcmRfbW9kZXMgIGFzIHMgb24gKCBtLmlkID0gcy5maWxlX2lkICk7XCJcIlwiXG4gICAgICAgIDtudWxsXG4gICAgICB3aGVuICdjbG9zZScgdGhlbiBkbyA9PlxuICAgICAgICBkZWJ1ZyAnzqlidmZzX18zMCcsIGRiLmV4ZWN1dGUgU1FMXCJcIlwiXG4gICAgICAgIHVwZGF0ZSBtZXRhZGF0YSBzZXQgbW9kZSA9IHMuY2xvc2VkX21vZGVcbiAgICAgICAgICBmcm9tIG1ldGFkYXRhICAgICAgICAgICBhcyBtXG4gICAgICAgICAgam9pbiBiYl9zdGFuZGFyZF9tb2RlcyAgYXMgcyBvbiAoIG0uaWQgPSBzLmZpbGVfaWQgKTtcIlwiXCJcbiAgICAgICAgO251bGxcbiAgICAgIHdoZW4gJ25vdGhpbmcnIHRoZW4gbnVsbFxuICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IgXCJ1bmtub3duIG1vZGU6ICN7cnByIG1vZGV9XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBkIGZyb20gZGIud2Fsa19mc19vYmplY3RzKClcbiAgICAgIGZ1bGxfcGF0aCA9IFBBVEguam9pbiBtb3VudF9wYXRoLCBkLnBhdGhcbiAgICAgIHBhdGhzLnB1c2ggZnVsbF9wYXRoXG4gICAgICB1cmdlICfOqWJ2ZnNfXzMxJywgZC5tb2RlX28sIGQucGF0aCAjIHsgZC4uLiwgZnVsbF9wYXRoLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZm9yIGxpbmUgaW4gc2hlbGwgJ3Nob3ctbGF5b3V0JywgbW91bnRfcGF0aFxuICAgICAgICBlY2hvIGxpbmVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzY3JpcHRzXzogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgeyBleGVjYVN5bmMsICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICdleGVjYSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJlZl9wYXRoICAgID0gUEFUSC5yZXNvbHZlIF9fZGlybmFtZSwgJy4uLy4uLy4uL2FwcHMvYnZmcydcbiAgICBkYl9wYXRoICAgICA9IFBBVEguam9pbiByZWZfcGF0aCwgJ2J2ZnMuZGInXG4gICAgbW91bnRfcGF0aCAgPSBQQVRILmpvaW4gcmVmX3BhdGgsICdtb3VudCdcbiAgICBzaGVsbF9jZmcgICA9IHsgY3dkOiByZWZfcGF0aCwgbGluZXM6IHRydWUsIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIF92YWxpZGF0ZV9zaGVsbF9hcmd1bWVudHMgPSAoIGNmZywgY21kLCBwYXJhbWV0ZXJzLi4uICkgLT5cbiAgICAgICMgd2hpc3BlciAnzqliYmJ0X18zMicsIHsgY2ZnLCBjbWQsIHBhcmFtZXRlcnMsIH1cbiAgICAgIHN3aXRjaCB0eXBlID0gdHlwZV9vZiBjZmdcbiAgICAgICAgd2hlbiAndGV4dCdcbiAgICAgICAgICBpZiBjbWQgaXMgdW5kZWZpbmVkIHRoZW4gIFsgY2ZnLCBjbWQsIHBhcmFtZXRlcnMuLi4sIF0gPSBbIHt9LCBjZmcsICAgICAgIHBhcmFtZXRlcnMuLi4sIF1cbiAgICAgICAgICBlbHNlICAgICAgICAgICAgICAgICAgICAgIFsgY2ZnLCBjbWQsIHBhcmFtZXRlcnMuLi4sIF0gPSBbIHt9LCBjZmcsIGNtZCwgIHBhcmFtZXRlcnMuLi4sIF1cbiAgICAgICAgd2hlbiAncG9kJyAgdGhlbiBudWxsXG4gICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yIFwizqlidmZzX18zMyBleHBlY3RlZCBhIHBvZCBvciBhIHRleHQsIGdvdCBhICN7dHlwZX1cIlxuICAgICAgdW5sZXNzICggdHlwZSA9IHR5cGVfb2YgY21kICkgaXMgJ3RleHQnXG4gICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pYnZmc19fMzQgZXhwZWN0ZWQgYSB0ZXh0LCBnb3QgYSAje3R5cGV9XCJcbiAgICAgIGNmZyA9IHsgc2hlbGxfY2ZnLi4uLCBjZmcuLi4sIH1cbiAgICAgICMgaW5mbyAnzqliYmJ0X18zNScsIHsgY2ZnLCBjbWQsIHBhcmFtZXRlcnMsIH1cbiAgICAgIHJldHVybiB7IGNmZywgY21kLCBwYXJhbWV0ZXJzLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzaGVsbCA9ICggY2ZnLCBjbWQsIHBhcmFtZXRlcnMuLi4gKSAtPlxuICAgICAgeyBjZmcsIGNtZCwgcGFyYW1ldGVycywgfSA9IF92YWxpZGF0ZV9zaGVsbF9hcmd1bWVudHMgY2ZnLCBjbWQsIHBhcmFtZXRlcnMuLi5cbiAgICAgIHJldHVybiAoIGV4ZWNhU3luYyBjbWQsIHBhcmFtZXRlcnMsIGNmZyApLnN0ZG91dFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyB0cmFzaCBidmZzLmRiICYmIGJpbi9zcWxpdGUtZnMgbW91bnQgLS0gLi9idmZzLmRiICYgZGlzb3duICYmIHNxbGl0ZTMgYnZmcy5kYiBcIi5kdW1wXCIgPiBidmZzLmR1bXAuc3FsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAdGhyb3dzICggzqlidmZzX18zNiA9IC0+IF92YWxpZGF0ZV9zaGVsbF9hcmd1bWVudHMgbnVsbCAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHBvZCBvciBhIHRleHQsIGdvdCBhL1xuICAgIEB0aHJvd3MgKCDOqWJ2ZnNfXzM3ID0gLT4gX3ZhbGlkYXRlX3NoZWxsX2FyZ3VtZW50cyBbXSAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgcG9kIG9yIGEgdGV4dCwgZ290IGEvXG4gICAgQHRocm93cyAoIM6pYnZmc19fMzggPSAtPiBfdmFsaWRhdGVfc2hlbGxfYXJndW1lbnRzIHt9ICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0LCBnb3QgYS9cbiAgICBAZXEgICAgICggzqliYmJ0X18zOSA9IC0+IF92YWxpZGF0ZV9zaGVsbF9hcmd1bWVudHMgJ2xzJyAgICAgICAgICAgICAgICksIHsgY2ZnOiB7IGN3ZDogcmVmX3BhdGgsIGxpbmVzOiB0cnVlLCB9LCBjbWQ6ICdscycsIHBhcmFtZXRlcnM6IFtdIH1cbiAgICBAZXEgICAgICggzqliYmJ0X180MCA9IC0+IF92YWxpZGF0ZV9zaGVsbF9hcmd1bWVudHMgJ2xzJywgJy1BbEYnICAgICAgICksIHsgY2ZnOiB7IGN3ZDogcmVmX3BhdGgsIGxpbmVzOiB0cnVlLCB9LCBjbWQ6ICdscycsIHBhcmFtZXRlcnM6IFsgJy1BbEYnLCBdIH1cbiAgICBAZXEgICAgICggzqliYmJ0X180MSA9IC0+IF92YWxpZGF0ZV9zaGVsbF9hcmd1bWVudHMgJ2xzJywgJy1BbEYnLCAnLicgICksIHsgY2ZnOiB7IGN3ZDogcmVmX3BhdGgsIGxpbmVzOiB0cnVlLCB9LCBjbWQ6ICdscycsIHBhcmFtZXRlcnM6IFsgJy1BbEYnLCAnLicsIF0gfVxuICAgIGRlYnVnICfOqWJiYnRfXzQyJywgc2hlbGwgJ2xzJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBhY2Nlc3NfZnNfd2l0aF9kYjogQHRhc2tzLmFjY2Vzc19mc193aXRoX2RiLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgc2NyaXB0c186IEB0YXNrcy5zY3JpcHRzXywgfVxuXG4gICMgcCA9IDBiMDAwMDAwMF8wMTBfMDEwXzAwMDsgdXJnZSBmXCIje3B9Oj4jMDhvOyAje3B9Oj4jMDZ4O1wiXG4gICMgcCA9IDBiMTExMTExMV8xMDFfMTAxXzExMTsgdXJnZSBmXCIje3B9Oj4jMDhvOyAje3B9Oj4jMDZ4O1wiXG4gICMgcCA9IDBiMTExMTExMTExMTExMTExMTExMTExMTEwMDAwMDAwMDA7IHVyZ2UgZlwiI3twfTo+IzA4bzsgI3twfTo+IzA2eDtcIlxuICAjIHAgPSAwbzc3NzsgdXJnZSBmXCIje3B9Oj4jMDhvOyAje3B9Oj4jMDZ4OyAje3B9Oj4jMDE2YjtcIlxuICAjIHAgPSAwbzc3NTsgdXJnZSBmXCIje3B9Oj4jMDhvOyAje3B9Oj4jMDZ4OyAje3B9Oj4jMDE2YjtcIlxuICAjIHAgPSAwbzY2NDsgdXJnZSBmXCIje3B9Oj4jMDhvOyAje3B9Oj4jMDZ4OyAje3B9Oj4jMDE2YjtcIlxuICAjIHVyZ2UgJ86pYnZmc19fNDMnXG4gICMgcCA9IDBvNzc3OyB1cmdlIGZcIiN7cH06PiMwOG87ICN7cH06PiMwNng7ICN7cH06PiMwMTZiO1wiXG4gICMgcCA9IDBvNTU1OyB1cmdlIGZcIiN7cH06PiMwOG87ICN7cH06PiMwNng7ICN7cH06PiMwMTZiO1wiXG4gICMgcCA9IDBvNDQ0OyB1cmdlIGZcIiN7cH06PiMwOG87ICN7cH06PiMwNng7ICN7cH06PiMwMTZiO1wiXG5cblxuXG4jIyNcbuKUgiAgICAgIDIxIOKUgiAgICAgICAgIDEg4pSCIGZvbGRlciDilIIgICA1MDkg4pSCIGRyd3hyd3hyLXgg4pSCID9yd3Nyd3NyLXQgICAg4pSCIC5UcmFzaC0xMDAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC8uVHJhc2gtMTAwMFxu4pSCICAgICAgMjkg4pSCICAgICAgICAyMSDilIIgZm9sZGVyIOKUgiAxNjgzMiDilIIgZHJ3eC0tLS0tLSDilIIgZHJ3cy0tLS0tVCAgICDilIIgZXhwdW5nZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgLy5UcmFzaC0xMDAwL2V4cHVuZ2VkXG7ilIIgICAgICAyNCDilIIgICAgICAgIDIxIOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiBkcnd4LS0tLS0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiBmaWxlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvLlRyYXNoLTEwMDAvZmlsZXNcbuKUgiAgICAgIDIyIOKUgiAgICAgICAgMjEg4pSCIGZvbGRlciDilIIgICA0NDgg4pSCIGRyd3gtLS0tLS0g4pSCID9yd3MtLS0tLVQgICAg4pSCIGluZm8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC8uVHJhc2gtMTAwMC9pbmZvXG7ilIIgICAgICAgMiDilIIgICAgICAgICAxIOKUgiBmb2xkZXIg4pSCIDE2NzA0IOKUgiBkci14LS0tLS0tIOKUgiBkcndzLS0tLS1UICAgIOKUgiBvcmlnaW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luXG7ilIIgICAgICAxNyDilIIgICAgICAgICAyIOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiBkcnd4LS0tLS0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiBmaWxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2ZpbGVcbuKUgiAgICAgIDI2IOKUgiAgICAgICAgMTcg4pSCIGZvbGRlciDilIIgICA1MDkg4pSCIGRyd3hyd3hyLXgg4pSCID9yd3Nyd3NyLXQgICAg4pSCIGp6ciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vZmlsZS9qenJcbuKUgiAgICAgIDI3IOKUgiAgICAgICAgMjYg4pSCIGZvbGRlciDilIIgICA1MDkg4pSCIGRyd3hyd3hyLXgg4pSCID9yd3Nyd3NyLXQgICAg4pSCIGJyaWNhYnJhYyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vZmlsZS9qenIvYnJpY2FicmFjXG7ilIIgICAgICAyOCDilIIgICAgICAgIDI3IOKUgiBmaWxlICAg4pSCIDMzMjA0IOKUgiAucnctcnctci0tIOKUgiAucnd4cndTci1UICAgIOKUgiBSRUFETUUubWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2ZpbGUvanpyL2JyaWNhYnJhYy9SRUFETUUubWRcbuKUgiAgICAgIDE4IOKUgiAgICAgICAgMTcg4pSCIGZvbGRlciDilIIgICA0NDgg4pSCIGRyd3gtLS0tLS0g4pSCID9yd3MtLS0tLVQgICAg4pSCIHBhdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vZmlsZS9wYXRoXG7ilIIgICAgICAxOSDilIIgICAgICAgIDE4IOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiBkcnd4LS0tLS0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiB0byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2ZpbGUvcGF0aC90b1xu4pSCICAgICAgMjAg4pSCICAgICAgICAxOSDilIIgZmlsZSAgIOKUgiAzMzE1MiDilIIgLnJ3LS0tLS0tLSDilIIgLi13LS0tLS0tVCAgICDilIIgaW5kZXguanMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9maWxlL3BhdGgvdG8vaW5kZXguanNcbuKUgiAgICAgIDE2IOKUgiAgICAgICAgIDIg4pSCIGZvbGRlciDilIIgICA0NDgg4pSCIGRyd3gtLS0tLS0g4pSCID9yd3MtLS0tLVQgICAg4pSCIGh0dHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cFxu4pSCICAgICAgIDMg4pSCICAgICAgICAgMiDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgaHR0cHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9odHRwc1xu4pSCICAgICAgIDcg4pSCICAgICAgICAgMyDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9odHRwcy9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tXG7ilIIgICAgICAgOCDilIIgICAgICAgICA3IOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiBkcnd4LS0tLS0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiBsb3ZlZW5jb3VudGVyZmxvdyAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2h0dHBzL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3dcbuKUgiAgICAgICA5IOKUgiAgICAgICAgIDgg4pSCIGZvbGRlciDilIIgICA0NDgg4pSCIGRyd3gtLS0tLS0g4pSCID9yd3MtLS0tLVQgICAg4pSCIGJyaWNhYnJhYy1zZm1vZHVsZXMgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cHMvcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzXG7ilIIgICAgICAxMCDilIIgICAgICAgICA5IOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiBkcnd4LS0tLS0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiAyOTgwZTI4OTg1ZmU3Yjk2NzcyYTcyMTNhMmNkOWFlM2YyNjMxNzdhIOKUgiAvb3JpZ2luL2h0dHBzL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlcy8yOTgwZTI4OTg1Zlxu4pSCICAgICAgMjUg4pSCICAgICAgICAxMCDilIIgZmlsZSAgIOKUgiAzMzIwNCDilIIgZHJ3eC0tLS0tLSDilIIgLnJ3eHJ3U3ItVCAgICDilIIgUkVBRE1FLm1kICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9odHRwcy9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93L2JyaWNhYnJhYy1zZm1vZHVsZXMvMjk4MGUyODk4NWZcbuKUgiAgICAgIDExIOKUgiAgICAgICAgMTAg4pSCIGZvbGRlciDilIIgICA0NDgg4pSCIC5ydy1ydy1yLS0g4pSCID9yd3MtLS0tLVQgICAg4pSCIGxpYiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cHMvcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzLzI5ODBlMjg5ODVmXG7ilIIgICAgICAxMiDilIIgICAgICAgIDExIOKUgiBmaWxlICAg4pSCIDMzMjA0IOKUgiAucnctcnctci0tIOKUgiAucnd4cndTci1UICAgIOKUgiBqZXRzdHJlYW0uYnJpY3MuanMgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2h0dHBzL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlcy8yOTgwZTI4OTg1Zlxu4pSCICAgICAgMTMg4pSCICAgICAgICAxMCDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgc3JjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9odHRwcy9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93L2JyaWNhYnJhYy1zZm1vZHVsZXMvMjk4MGUyODk4NWZcbuKUgiAgICAgIDE0IOKUgiAgICAgICAgMTMg4pSCIGZpbGUgICDilIIgMzMxNTIg4pSCIC5ydy0tLS0tLS0g4pSCIC4tdy0tLS0tLVQgICAg4pSCIGpldHN0cmVhbS5icmljcy5jb2ZmZWUgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cHMvcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzLzI5ODBlMjg5ODVmXG7ilIIgICAgICAgNCDilIIgICAgICAgICAzIOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiBkcnd4LS0tLS0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiB1bnBrZy5jb20gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2h0dHBzL3VucGtnLmNvbVxu4pSCICAgICAgIDUg4pSCICAgICAgICAgNCDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgYW5zaV91cCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9odHRwcy91bnBrZy5jb20vYW5zaV91cFxu4pSCICAgICAgIDYg4pSCICAgICAgICAgNSDilIIgZmlsZSAgIOKUgiAzMzE1MiDilIIgLnJ3LS0tLS0tLSDilIIgLi13LS0tLS0tVCAgICDilIIgYW5zaV91cC5qcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9odHRwcy91bnBrZy5jb20vYW5zaV91cC9hbnNpX3VwLmpzXG5cblxuZHJ3eHJ3eHIteCAgICAgLSBmbG93IDIwMjUtMTEtMDEgMjA6MDgg4pSc4pSA4pSAIC5UcmFzaC0xMDAwXG5kcnd4LS0tLS0tICAgICAtIGZsb3cgMjAyNS0xMS0wMSAyMDowOCDilIIgICDilJzilIDilIAgZXhwdW5nZWRcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDIwOjA4IOKUgiAgIOKUnOKUgOKUgCBmaWxlc1xuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMjA6MDgg4pSCICAg4pSU4pSA4pSAIGluZm9cbmRyLXgtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDEwOjAyIOKUlOKUgOKUgCBvcmlnaW5cbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDIwOjA3ICAgICDilJzilIDilIAgZmlsZVxuZHJ3eHJ3eHIteCAgICAgLSBmbG93IDIwMjUtMTEtMDEgMjA6MDcgICAgIOKUgiAgIOKUnOKUgOKUgCBqenJcbmRyd3hyd3hyLXggICAgIC0gZmxvdyAyMDI1LTExLTAxIDIwOjA4ICAgICDilIIgICDilIIgICDilJTilIDilIAgYnJpY2FicmFjXG4ucnctcnctci0tIDEzMDc5IGZsb3cgMjAyNS0xMS0wMSAyMToxNiAgICAg4pSCICAg4pSCICAgICAgIOKUlOKUgOKUgCBSRUFETUUubWRcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICDilIIgICDilJTilIDilIAgcGF0aFxuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgIOKUgiAgICAgICDilJTilIDilIAgdG9cbi5ydy0tLS0tLS0gICAgIDAgZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICDilIIgICAgICAgICAgIOKUlOKUgOKUgCBpbmRleC5qc1xuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgIOKUnOKUgOKUgCBodHRwXG5kcnd4LS0tLS0tICAgICAtIGZsb3cgMjAyNS0xMS0wMSAxMDowMiAgICAg4pSU4pSA4pSAIGh0dHBzXG5kcnd4LS0tLS0tICAgICAtIGZsb3cgMjAyNS0xMS0wMSAxMDowMiAgICAgICAgIOKUnOKUgOKUgCByYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tXG5kcnd4LS0tLS0tICAgICAtIGZsb3cgMjAyNS0xMS0wMSAxMDowMiAgICAgICAgIOKUgiAgIOKUlOKUgOKUgCBsb3ZlZW5jb3VudGVyZmxvd1xuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgICAgICDilIIgICAgICAg4pSU4pSA4pSAIGJyaWNhYnJhYy1zZm1vZHVsZXNcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDIwOjA2ICAgICAgICAg4pSCICAgICAgICAgICDilJTilIDilIAgMjk4MGUyODk4NWZlN2I5Njc3MmE3MjEzYTJjZDlhZTNmMjYzMTc3YVxuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgICAgICDilIIgICAgICAgICAgICAgICDilJzilIDilIAgbGliXG4ucnctcnctci0tIDU4MzkwIGZsb3cgMjAyNS0xMS0wMSAxMDowMiAgICAgICAgIOKUgiAgICAgICAgICAgICAgIOKUgiAgIOKUlOKUgOKUgCBqZXRzdHJlYW0uYnJpY3MuanNcbi5ydy1ydy1yLS0gMjE2NDMgZmxvdyAyMDI1LTExLTAxIDIwOjA2ICAgICAgICAg4pSCICAgICAgICAgICAgICAg4pSc4pSA4pSAIFJFQURNRS5tZFxuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgICAgICDilIIgICAgICAgICAgICAgICDilJTilIDilIAgc3JjXG4ucnctLS0tLS0tIDE1Nzc2IGZsb3cgMjAyNS0xMS0wMSAxMDowMiAgICAgICAgIOKUgiAgICAgICAgICAgICAgICAgICDilJTilIDilIAgamV0c3RyZWFtLmJyaWNzLmNvZmZlZVxuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgICAgICDilJTilIDilIAgdW5wa2cuY29tXG5kcnd4LS0tLS0tICAgICAtIGZsb3cgMjAyNS0xMS0wMSAxMDowMiAgICAgICAgICAgICDilJTilIDilIAgYW5zaV91cFxuLnJ3LS0tLS0tLSAyMjY1NiBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgICAgICAgICAgICAgIOKUlOKUgOKUgCBhbnNpX3VwLmpzXG5cblxuXG4jIyMiXX0=
