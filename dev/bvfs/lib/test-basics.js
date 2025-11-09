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
      var Dbric, PATH, SFMODULES, SQL, _validate_shell_arguments, db_path, decode_octal, e, execaSync, internals, is_mounted, match_all_fs_mounts, mount_path, ref_path, shell, shell_cfg, type_of, Ωbbbt__42, Ωbbbt__43, Ωbbbt__44, Ωbvfs__39, Ωbvfs__40, Ωbvfs__41;
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
        lines: true,
        only_stdout: true
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
      decode_octal = function(text) {
        return text.replace(/(?<!\\)\\([0-7]{3})/gv, function($0, $1) {
          return String.fromCodePoint(parseInt($1, 8));
        });
      };
      //.......................................................................................................
      shell = function(cfg, cmd, ...parameters) {
        var R;
        ({cfg, cmd, parameters} = _validate_shell_arguments(cfg, cmd, ...parameters));
        // debug 'Ωbbbt__36', cfg
        R = execaSync(cmd, parameters, cfg);
        if (cfg.only_stdout) {
          // debug 'Ωbbbt__37', R
          // if cfg.decode_octal
          //   if cfg.lines then R.stdout = ( decode_octal line for line in R.stdout )
          //   else              R.stdout = decode_octal R.stdout
          return R.stdout;
        }
        return R;
      };
      //.......................................................................................................
      match_all_fs_mounts = function(cfg) {
        var R, device, i, len, line, lines, path, type;
        R = [];
        lines = shell({
          only_stdout: true
        }, 'cat', '/etc/mtab');
        for (i = 0, len = lines.length; i < len; i++) {
          line = lines[i];
          [device, path, type] = line.split(/\x20/);
          if ((cfg.device != null) && (device !== cfg.device)) {
            continue;
          }
          path = decode_octal(path);
          if ((cfg.path != null) && (path !== cfg.path)) {
            continue;
          }
          if ((cfg.type != null) && (type !== cfg.type)) {
            continue;
          }
          R.push({device, path, type});
        }
        return R;
      };
      //.......................................................................................................
      is_mounted = function(cfg) {
        var mounts;
        switch ((mounts = match_all_fs_mounts(cfg)).length) {
          case 0:
            return false;
          case 1:
            return true;
        }
        throw new Error(`Ωbvfs__38 expected 0 or 1 match, got ${mounts.length}: ${rpr(mounts)}`);
      };
      //.......................................................................................................
      this.throws((Ωbvfs__39 = function() {
        return _validate_shell_arguments(null);
      }), /expected a pod or a text, got a/);
      this.throws((Ωbvfs__40 = function() {
        return _validate_shell_arguments([]);
      }), /expected a pod or a text, got a/);
      this.throws((Ωbvfs__41 = function() {
        return _validate_shell_arguments({});
      }), /expected a text, got a/);
      this.eq((Ωbbbt__42 = function() {
        return _validate_shell_arguments('ls');
      }), {
        cfg: {
          cwd: ref_path,
          lines: true
        },
        cmd: 'ls',
        parameters: []
      });
      this.eq((Ωbbbt__43 = function() {
        return _validate_shell_arguments('ls', '-AlF');
      }), {
        cfg: {
          cwd: ref_path,
          lines: true
        },
        cmd: 'ls',
        parameters: ['-AlF']
      });
      this.eq((Ωbbbt__44 = function() {
        return _validate_shell_arguments('ls', '-AlF', '.');
      }), {
        cfg: {
          cwd: ref_path,
          lines: true
        },
        cmd: 'ls',
        parameters: ['-AlF', '.']
      });
      //.......................................................................................................
      debug('Ωbbbt__45', shell('ls'));
      debug('Ωbbbt__46', shell('grep', '-Pi', 'sqlitefs', '/etc/mtab'));
      try {
        help('Ωbbbt__47', shell('grep', '-Pi', 'sqlitefs', '/etc/mtab'));
      } catch (error) {
        e = error;
        warn('Ωbbbt__48', reverse(e.message));
      }
      try {
        help('Ωbbbt__49', shell('grep', '-Pi', 'sqlitefsYYYY', '/etc/mtab'));
      } catch (error) {
        e = error;
        warn('Ωbbbt__50', reverse(e.message));
      }
      try {
        help('Ωbbbt__51', shell('grep', '-Pi', 'sqlitefsYYYY', '/etc/mtabYYYY'));
      } catch (error) {
        e = error;
        warn('Ωbbbt__52', reverse(e.message));
      }
      //.......................................................................................................
      info('Ωbbbt__53', match_all_fs_mounts({
        device: 'sqlitefs'
      }));
      info('Ωbbbt__54', match_all_fs_mounts({
        device: 'sqlitefs',
        type: 'sqlfs'
      }));
      info('Ωbbbt__55', match_all_fs_mounts({
        device: 'sqlitefs',
        type: 'fuse'
      }));
      //.......................................................................................................
      info('Ωbbbt__56', is_mounted({
        device: 'sqlitefs'
      }));
      info('Ωbbbt__57', is_mounted({
        device: 'sqlitefs',
        type: 'sqlfs'
      }));
      info('Ωbbbt__58', is_mounted({
        device: 'sqlitefs',
        type: 'fuse'
      }));
      try {
        info('Ωbbbt__59', is_mounted({}));
      } catch (error) {
        e = error;
        warn('Ωbbbt__60', reverse(e.message));
      }
      //.......................................................................................................
      /*
      Output when mount point name is 'm o u n t':
        [ 'sqlitefs /home/flow/jzr/bvfs/m\\040o\\040u\\040n\\040t fuse rw,nosuid,nodev,relatime,user_id=1000,group_id=1000,default_permissions,allow_other 0 0' ]
      Output when mount point name is '𫝀':
        [ 'sqlitefs /home/flow/jzr/bvfs/𫝀 fuse rw,nosuid,nodev,relatime,user_id=1000,group_id=1000,default_permissions,allow_other 0 0' ]
      */
      // sqlitefs /home/flow/jzr/bvfs/mount fuse rw,nosuid,nodev,relatime,user_id=1000,group_id=1000,default_permissions,allow_other 0 0
      // grep: /etc/mtabYYYY: No such file or directory
      //  $$$    /// 2 х  bvfs @ 1.0.0 pkg  at 11:15:36
      //.......................................................................................................
      // trash bvfs.db && bin/sqlite-fs mount -- ./bvfs.db & disown && sqlite3 bvfs.db ".dump" > bvfs.dump.sql
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
// urge 'Ωbvfs__61'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBSUUsQ0FBQTs7SUFBQSxNQUFBLEVBQVEsUUFBQSxDQUFBLENBQUE7QUFDVixVQUFBLGVBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxtQkFBQSxFQUFBO01BQUksU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixT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VjtRQUFzQixJQUFBLEVBQU07TUFBNUIsQ0FBWCxDQUFsQjtBQUNBO1FBQUksSUFBQSxDQUFLLFdBQUwsRUFBa0IsVUFBQSxDQUFXLENBQUEsQ0FBWCxDQUFsQixFQUFKO09BQW9DLGFBQUE7UUFBTTtRQUFPLElBQUEsQ0FBSyxXQUFMLEVBQWtCLE9BQUEsQ0FBUSxDQUFDLENBQUMsT0FBVixDQUFsQixFQUFiO09BakZ4Qzs7Ozs7Ozs7Ozs7Ozs7YUErRks7SUFoR087RUF4SVYsRUEvQkY7OztFQTRRQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBa0MsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNsQyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdELEVBRGhCOzthQUdFLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxRQUFBLEVBQVUsSUFBQyxDQUFBLEtBQUssQ0FBQztNQUFuQixDQUE5QjtJQUpnQyxDQUFBLElBQWxDOzs7RUE1UUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtc2Ztb2R1bGVzL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGFza3MgPVxuXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBiYXNpY3M6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgSmV0c3RyZWFtLFxuICAgICAgQXN5bmNfamV0c3RyZWFtLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06ICAgNTA5LCBzcHJtOiAnZHJ3eHJ3eHIteCcsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAxNjgzMiwgc3BybTogJ2Ryd3gtLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogICA0NDgsIHNwcm06ICdkcnd4LS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06IDE2NzA0LCBzcHJtOiAnZHIteC0tLS0tLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAgIDUwOSwgc3BybTogJ2Ryd3hyd3hyLXgnLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogICA1MDksIHNwcm06ICdkcnd4cnd4ci14JywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMjA0LCBzcHJtOiAnLnJ3LXJ3LXItLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzE1Miwgc3BybTogJy5ydy0tLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMyMDQsIHNwcm06ICdkcnd4LS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06ICAgNDQ4LCBzcHJtOiAnLnJ3LXJ3LXItLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzIwNCwgc3BybTogJy5ydy1ydy1yLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMxNTIsIHNwcm06ICcucnctLS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMTUyLCBzcHJtOiAnLnJ3LS0tLS0tLScsIH1cbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3IgeyB0eXBlLCBucHJtLCBzcHJtLCB9IGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgb3BybSA9ICcwbycgKyAoIG5wcm0udG9TdHJpbmcgIDggKS5wYWRTdGFydCAgOCwgJzAnXG4gICAgICAgIHhwcm0gPSAnMHgnICsgKCBucHJtLnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgIDgsICcwJ1xuICAgICAgICBicHJtID0gJ19fJyArICggbnBybS50b1N0cmluZyAgMiApLnBhZFN0YXJ0IDE2LCAnMCdcbiAgICAgICAgZGVidWcgJ86pYnZmc19fXzEnLCBmXCIje25wcm19Oj4xMGM7ICN7b3BybX06PjEwYzsgI3t4cHJtfTo+MTBjOyAje2Jwcm19Oj4yMGM7ICN7c3BybX06PjEwYzsgXCJcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZmlsZV9wZXJtaXNzaW9uc19sb2dpYzogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIFVQICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICd1bml4LXBlcm1pc3Npb25zJ1xuICAgIEZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgIGRlYnVnICfOqWJiYnRfX18yJywgKCBrIGZvciBrIG9mIFVQIClcbiAgICBkZWJ1ZyAnzqliYmJ0X19fMycsIFVQLmNvbnZlcnQub2JqZWN0ICggRlMuc3RhdFN5bmMgJy9ldGMvcGFzc3dkJyApLm1vZGVcbiAgICBkZWJ1ZyAnzqliYmJ0X19fNCcsIGZcIiN7VVAuY29udmVydC5udW1iZXIgJ2Etdyd9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYmJidF9fXzUnLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICdhK3cnfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJiYnRfX182JywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAndSt3J306PiMwM287XCJcbiAgICBkZWJ1ZyAnzqliYmJ0X19fNycsIGZcIiN7VVAuY29udmVydC5udW1iZXIgJ3Urcid9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYmJidF9fXzgnLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICd1LXcsZy13LG8tdyd9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYmJidF9fXzknLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICd1K3csZyt3LG8rdyd9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYmJidF9fMTAnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAndSt3LGcrdyxvK3cnfTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xMScsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvNzc1fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xMicsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvNjY0fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xMycsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvNTU1fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xNCcsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvNDQ0fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xNSdcbiAgICBoZWxwICfOqWJiYnRfXzE2JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wMDA3NzV9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJiYnRfXzE3JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wNDA1NTV9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJiYnRfXzE4JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8xMDA0NDR9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJiYnRfXzE5J1xuICAgIGhlbHAgJ86pYmJidF9fMjAnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzAwMDc3NSAmIDB4ZmUwMCB8IDB4MDFmZCB9Oj4yMGM7XCIgIyMjIDBvNzc1IGRyd3hyd3hyLXggZm9sZGVyIG9wZW4gIyMjXG4gICAgaGVscCAnzqliYmJ0X18yMScsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDQwNTU1ICYgMHhmZTAwIHwgMHgwMWZkIH06PjIwYztcIiAjIyMgMG83NzUgZHJ3eHJ3eHIteCBmb2xkZXIgb3BlbiAjIyNcbiAgICBoZWxwICfOqWJiYnRfXzIyJywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8xMDA0NDQgJiAweGZlMDAgfCAweDAxYjQgfTo+MjBjO1wiICMjIyAwbzY2NCAucnctcnctci0tIGZpbGUgb3BlbiAjIyNcbiAgICBoZWxwICfOqWJiYnRfXzIzJ1xuICAgIGhlbHAgJ86pYmJidF9fMjQnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzAwMDc3NSAmIDB4ZmUwMCB8IDB4MDE2ZCB9Oj4yMGM7XCIgIyMjIDBvNTU1IGRyLXhyLXhyLXggZm9sZGVyIGNsb3NlZCAjIyNcbiAgICBoZWxwICfOqWJiYnRfXzI1JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wNDA1NTUgJiAweGZlMDAgfCAweDAxNmQgfTo+MjBjO1wiICMjIyAwbzU1NSBkci14ci14ci14IGZvbGRlciBjbG9zZWQgIyMjXG4gICAgaGVscCAnzqliYmJ0X18yNicsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMTAwNDQ0ICYgMHhmZTAwIHwgMHgwMTI0IH06PjIwYztcIiAjIyMgMG80NDQgLnItLXItLXItLSBmaWxlIGNsb3NlZCAjIyNcbiAgICAjIEBlcSAoIM6pYmJidF9fMjcgPSAtPiBmYWxzZSApLCBmYWxzZVxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhY2Nlc3NfZnNfd2l0aF9kYjogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgeyBleGVjYVN5bmMsICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICdleGVjYSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIFNxbGl0ZWZzX2RiIGV4dGVuZHMgRGJyaWNcbiAgICAgICMgQGJ1aWxkOiBbXG4gICAgICAjICAgU1FMXCJcIlwiXG4gICAgICAjICAgICBjcmVhdGUgdGFibGUgbm9uY29uZm9ybV9vbmUgKCBhIHRleHQgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICMgICBTUUxcIlwiXCJcbiAgICAgICMgICAgIC0tIHRoaXMgY29tbWVudCBzaG91bGRuJ3QgYmUgaGVyZVxuICAgICAgIyAgICAgY3JlYXRlIHZpZXcgbm9uY29uZm9ybV90d28gYXMgc2VsZWN0ICogZnJvbSBub25jb25mb3JtX29uZTtcIlwiXCJcbiAgICAgICMgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBnZXRfZnNfb2JqZWN0czogU1FMXCJcIlwiXG4gICAgICAgICAgc2VsZWN0ICogZnJvbSBiYl9saXN0O1wiXCJcIlxuICAgICAgd2Fsa19mc19vYmplY3RzOiAtPiB5aWVsZCBmcm9tIEBzdGF0ZW1lbnRzLmdldF9mc19vYmplY3RzLml0ZXJhdGUoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmVmX3BhdGggICAgPSBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4vYXBwcy9idmZzJ1xuICAgIGRiX3BhdGggICAgID0gUEFUSC5qb2luIHJlZl9wYXRoLCAnYnZmcy5kYidcbiAgICBtb3VudF9wYXRoICA9IFBBVEguam9pbiByZWZfcGF0aCwgJ21vdW50J1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgc2hlbGxfY2ZnICAgPSB7IGN3ZDogcmVmX3BhdGgsIGxpbmVzOiB0cnVlLCB9XG4gICAgc2hlbGwgICAgICAgPSAoIGNtZCwgUC4uLiApIC0+ICggZXhlY2FTeW5jIGNtZCwgUCwgc2hlbGxfY2ZnICkuc3Rkb3V0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkYiAgICAgICAgICA9IFNxbGl0ZWZzX2RiLm9wZW4gZGJfcGF0aFxuICAgIGRlYnVnICfOqWJ2ZnNfXzI4JywgZGIuc3RhdGVtZW50c1xuICAgIHBhdGhzICAgICAgID0gW11cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3IgbGluZSBpbiBzaGVsbCAnc2hvdy1sYXlvdXQnLCBtb3VudF9wYXRoXG4gICAgICAgIGVjaG8gbGluZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBtb2RlID0gJ2Nsb3NlJ1xuICAgICMgbW9kZSA9ICdvcGVuJ1xuICAgIG1vZGUgPSAnbm90aGluZydcbiAgICBzd2l0Y2ggbW9kZVxuICAgICAgd2hlbiAnb3BlbicgdGhlbiBkbyA9PlxuICAgICAgICBkZWJ1ZyAnzqlidmZzX18yOScsIGRiLmV4ZWN1dGUgU1FMXCJcIlwiXG4gICAgICAgIHVwZGF0ZSBtZXRhZGF0YSBzZXQgbW9kZSA9IHMub3Blbl9tb2RlXG4gICAgICAgICAgZnJvbSBtZXRhZGF0YSAgICAgICAgICAgYXMgbVxuICAgICAgICAgIGpvaW4gYmJfc3RhbmRhcmRfbW9kZXMgIGFzIHMgb24gKCBtLmlkID0gcy5maWxlX2lkICk7XCJcIlwiXG4gICAgICAgIDtudWxsXG4gICAgICB3aGVuICdjbG9zZScgdGhlbiBkbyA9PlxuICAgICAgICBkZWJ1ZyAnzqlidmZzX18zMCcsIGRiLmV4ZWN1dGUgU1FMXCJcIlwiXG4gICAgICAgIHVwZGF0ZSBtZXRhZGF0YSBzZXQgbW9kZSA9IHMuY2xvc2VkX21vZGVcbiAgICAgICAgICBmcm9tIG1ldGFkYXRhICAgICAgICAgICBhcyBtXG4gICAgICAgICAgam9pbiBiYl9zdGFuZGFyZF9tb2RlcyAgYXMgcyBvbiAoIG0uaWQgPSBzLmZpbGVfaWQgKTtcIlwiXCJcbiAgICAgICAgO251bGxcbiAgICAgIHdoZW4gJ25vdGhpbmcnIHRoZW4gbnVsbFxuICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IgXCJ1bmtub3duIG1vZGU6ICN7cnByIG1vZGV9XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBkIGZyb20gZGIud2Fsa19mc19vYmplY3RzKClcbiAgICAgIGZ1bGxfcGF0aCA9IFBBVEguam9pbiBtb3VudF9wYXRoLCBkLnBhdGhcbiAgICAgIHBhdGhzLnB1c2ggZnVsbF9wYXRoXG4gICAgICB1cmdlICfOqWJ2ZnNfXzMxJywgZC5tb2RlX28sIGQucGF0aCAjIHsgZC4uLiwgZnVsbF9wYXRoLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZm9yIGxpbmUgaW4gc2hlbGwgJ3Nob3ctbGF5b3V0JywgbW91bnRfcGF0aFxuICAgICAgICBlY2hvIGxpbmVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzY3JpcHRzXzogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgeyBleGVjYVN5bmMsICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICdleGVjYSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJlZl9wYXRoICAgID0gUEFUSC5yZXNvbHZlIF9fZGlybmFtZSwgJy4uLy4uLy4uL2FwcHMvYnZmcydcbiAgICBkYl9wYXRoICAgICA9IFBBVEguam9pbiByZWZfcGF0aCwgJ2J2ZnMuZGInXG4gICAgbW91bnRfcGF0aCAgPSBQQVRILmpvaW4gcmVmX3BhdGgsICdtb3VudCdcbiAgICBzaGVsbF9jZmcgICA9IHsgY3dkOiByZWZfcGF0aCwgbGluZXM6IHRydWUsIG9ubHlfc3Rkb3V0OiB0cnVlLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBfdmFsaWRhdGVfc2hlbGxfYXJndW1lbnRzID0gKCBjZmcsIGNtZCwgcGFyYW1ldGVycy4uLiApIC0+XG4gICAgICAjIHdoaXNwZXIgJ86pYmJidF9fMzInLCB7IGNmZywgY21kLCBwYXJhbWV0ZXJzLCB9XG4gICAgICBzd2l0Y2ggdHlwZSA9IHR5cGVfb2YgY2ZnXG4gICAgICAgIHdoZW4gJ3RleHQnXG4gICAgICAgICAgaWYgY21kIGlzIHVuZGVmaW5lZCB0aGVuICBbIGNmZywgY21kLCBwYXJhbWV0ZXJzLi4uLCBdID0gWyB7fSwgY2ZnLCAgICAgICBwYXJhbWV0ZXJzLi4uLCBdXG4gICAgICAgICAgZWxzZSAgICAgICAgICAgICAgICAgICAgICBbIGNmZywgY21kLCBwYXJhbWV0ZXJzLi4uLCBdID0gWyB7fSwgY2ZnLCBjbWQsICBwYXJhbWV0ZXJzLi4uLCBdXG4gICAgICAgIHdoZW4gJ3BvZCcgIHRoZW4gbnVsbFxuICAgICAgICBlbHNlIHRocm93IG5ldyBFcnJvciBcIs6pYnZmc19fMzMgZXhwZWN0ZWQgYSBwb2Qgb3IgYSB0ZXh0LCBnb3QgYSAje3R5cGV9XCJcbiAgICAgIHVubGVzcyAoIHR5cGUgPSB0eXBlX29mIGNtZCApIGlzICd0ZXh0J1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqWJ2ZnNfXzM0IGV4cGVjdGVkIGEgdGV4dCwgZ290IGEgI3t0eXBlfVwiXG4gICAgICBjZmcgPSB7IHNoZWxsX2NmZy4uLiwgY2ZnLi4uLCB9XG4gICAgICAjIGluZm8gJ86pYmJidF9fMzUnLCB7IGNmZywgY21kLCBwYXJhbWV0ZXJzLCB9XG4gICAgICByZXR1cm4geyBjZmcsIGNtZCwgcGFyYW1ldGVycywgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGVjb2RlX29jdGFsID0gKCB0ZXh0ICkgLT4gdGV4dC5yZXBsYWNlIC8oPzwhXFxcXClcXFxcKFswLTddezN9KS9ndiwgKCAkMCwgJDEgKSAtPlxuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50IHBhcnNlSW50ICQxLCA4XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzaGVsbCA9ICggY2ZnLCBjbWQsIHBhcmFtZXRlcnMuLi4gKSAtPlxuICAgICAgeyBjZmcsIGNtZCwgcGFyYW1ldGVycywgfSA9IF92YWxpZGF0ZV9zaGVsbF9hcmd1bWVudHMgY2ZnLCBjbWQsIHBhcmFtZXRlcnMuLi5cbiAgICAgICMgZGVidWcgJ86pYmJidF9fMzYnLCBjZmdcbiAgICAgIFIgICAgICAgICA9IGV4ZWNhU3luYyBjbWQsIHBhcmFtZXRlcnMsIGNmZ1xuICAgICAgIyBkZWJ1ZyAnzqliYmJ0X18zNycsIFJcbiAgICAgICMgaWYgY2ZnLmRlY29kZV9vY3RhbFxuICAgICAgIyAgIGlmIGNmZy5saW5lcyB0aGVuIFIuc3Rkb3V0ID0gKCBkZWNvZGVfb2N0YWwgbGluZSBmb3IgbGluZSBpbiBSLnN0ZG91dCApXG4gICAgICAjICAgZWxzZSAgICAgICAgICAgICAgUi5zdGRvdXQgPSBkZWNvZGVfb2N0YWwgUi5zdGRvdXRcbiAgICAgIHJldHVybiBSLnN0ZG91dCBpZiBjZmcub25seV9zdGRvdXRcbiAgICAgIHJldHVybiBSXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBtYXRjaF9hbGxfZnNfbW91bnRzID0gKCBjZmcgKSAtPlxuICAgICAgUiAgICAgPSBbXVxuICAgICAgbGluZXMgPSBzaGVsbCB7IG9ubHlfc3Rkb3V0OiB0cnVlLCB9LCAnY2F0JywgJy9ldGMvbXRhYidcbiAgICAgIGZvciBsaW5lIGluIGxpbmVzXG4gICAgICAgIFsgZGV2aWNlLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdHlwZSwgICBdID0gbGluZS5zcGxpdCAvXFx4MjAvXG4gICAgICAgIGNvbnRpbnVlIGlmIGNmZy5kZXZpY2U/IGFuZCAoIGRldmljZSBpc250IGNmZy5kZXZpY2UgKVxuICAgICAgICBwYXRoICAgICAgICA9IGRlY29kZV9vY3RhbCBwYXRoXG4gICAgICAgIGNvbnRpbnVlIGlmIGNmZy5wYXRoPyAgIGFuZCAoIHBhdGggICBpc250IGNmZy5wYXRoICAgKVxuICAgICAgICBjb250aW51ZSBpZiBjZmcudHlwZT8gICBhbmQgKCB0eXBlICAgaXNudCBjZmcudHlwZSAgIClcbiAgICAgICAgUi5wdXNoIHsgZGV2aWNlLCBwYXRoLCB0eXBlLCB9XG4gICAgICByZXR1cm4gUlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaXNfbW91bnRlZCA9ICggY2ZnICkgLT5cbiAgICAgIHN3aXRjaCAoIG1vdW50cyA9IG1hdGNoX2FsbF9mc19tb3VudHMgY2ZnICkubGVuZ3RoXG4gICAgICAgIHdoZW4gMCB0aGVuIHJldHVybiBmYWxzZVxuICAgICAgICB3aGVuIDEgdGhlbiByZXR1cm4gdHJ1ZVxuICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlidmZzX18zOCBleHBlY3RlZCAwIG9yIDEgbWF0Y2gsIGdvdCAje21vdW50cy5sZW5ndGh9OiAje3JwciBtb3VudHN9XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEB0aHJvd3MgKCDOqWJ2ZnNfXzM5ID0gLT4gX3ZhbGlkYXRlX3NoZWxsX2FyZ3VtZW50cyBudWxsICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgcG9kIG9yIGEgdGV4dCwgZ290IGEvXG4gICAgQHRocm93cyAoIM6pYnZmc19fNDAgPSAtPiBfdmFsaWRhdGVfc2hlbGxfYXJndW1lbnRzIFtdICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBwb2Qgb3IgYSB0ZXh0LCBnb3QgYS9cbiAgICBAdGhyb3dzICggzqlidmZzX180MSA9IC0+IF92YWxpZGF0ZV9zaGVsbF9hcmd1bWVudHMge30gICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHRleHQsIGdvdCBhL1xuICAgIEBlcSAgICAgKCDOqWJiYnRfXzQyID0gLT4gX3ZhbGlkYXRlX3NoZWxsX2FyZ3VtZW50cyAnbHMnICAgICAgICAgICAgICAgKSwgeyBjZmc6IHsgY3dkOiByZWZfcGF0aCwgbGluZXM6IHRydWUsIH0sIGNtZDogJ2xzJywgcGFyYW1ldGVyczogW10gfVxuICAgIEBlcSAgICAgKCDOqWJiYnRfXzQzID0gLT4gX3ZhbGlkYXRlX3NoZWxsX2FyZ3VtZW50cyAnbHMnLCAnLUFsRicgICAgICAgKSwgeyBjZmc6IHsgY3dkOiByZWZfcGF0aCwgbGluZXM6IHRydWUsIH0sIGNtZDogJ2xzJywgcGFyYW1ldGVyczogWyAnLUFsRicsIF0gfVxuICAgIEBlcSAgICAgKCDOqWJiYnRfXzQ0ID0gLT4gX3ZhbGlkYXRlX3NoZWxsX2FyZ3VtZW50cyAnbHMnLCAnLUFsRicsICcuJyAgKSwgeyBjZmc6IHsgY3dkOiByZWZfcGF0aCwgbGluZXM6IHRydWUsIH0sIGNtZDogJ2xzJywgcGFyYW1ldGVyczogWyAnLUFsRicsICcuJywgXSB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkZWJ1ZyAnzqliYmJ0X180NScsIHNoZWxsICdscydcbiAgICBkZWJ1ZyAnzqliYmJ0X180NicsIHNoZWxsICdncmVwJywgJy1QaScsICdzcWxpdGVmcycsICcvZXRjL210YWInXG4gICAgdHJ5IGhlbHAgJ86pYmJidF9fNDcnLCBzaGVsbCAnZ3JlcCcsICctUGknLCAnc3FsaXRlZnMnLCAnL2V0Yy9tdGFiJyAgICAgICAgIGNhdGNoIGUgdGhlbiB3YXJuICfOqWJiYnRfXzQ4JywgcmV2ZXJzZSBlLm1lc3NhZ2VcbiAgICB0cnkgaGVscCAnzqliYmJ0X180OScsIHNoZWxsICdncmVwJywgJy1QaScsICdzcWxpdGVmc1lZWVknLCAnL2V0Yy9tdGFiJyAgICAgY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYmJidF9fNTAnLCByZXZlcnNlIGUubWVzc2FnZVxuICAgIHRyeSBoZWxwICfOqWJiYnRfXzUxJywgc2hlbGwgJ2dyZXAnLCAnLVBpJywgJ3NxbGl0ZWZzWVlZWScsICcvZXRjL210YWJZWVlZJyBjYXRjaCBlIHRoZW4gd2FybiAnzqliYmJ0X181MicsIHJldmVyc2UgZS5tZXNzYWdlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBpbmZvICfOqWJiYnRfXzUzJywgbWF0Y2hfYWxsX2ZzX21vdW50cyB7IGRldmljZTogJ3NxbGl0ZWZzJywgfVxuICAgIGluZm8gJ86pYmJidF9fNTQnLCBtYXRjaF9hbGxfZnNfbW91bnRzIHsgZGV2aWNlOiAnc3FsaXRlZnMnLCB0eXBlOiAnc3FsZnMnLCB9XG4gICAgaW5mbyAnzqliYmJ0X181NScsIG1hdGNoX2FsbF9mc19tb3VudHMgeyBkZXZpY2U6ICdzcWxpdGVmcycsIHR5cGU6ICdmdXNlJywgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaW5mbyAnzqliYmJ0X181NicsIGlzX21vdW50ZWQgeyBkZXZpY2U6ICdzcWxpdGVmcycsIH1cbiAgICBpbmZvICfOqWJiYnRfXzU3JywgaXNfbW91bnRlZCB7IGRldmljZTogJ3NxbGl0ZWZzJywgdHlwZTogJ3NxbGZzJywgfVxuICAgIGluZm8gJ86pYmJidF9fNTgnLCBpc19tb3VudGVkIHsgZGV2aWNlOiAnc3FsaXRlZnMnLCB0eXBlOiAnZnVzZScsIH1cbiAgICB0cnkgaW5mbyAnzqliYmJ0X181OScsIGlzX21vdW50ZWQge30gY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYmJidF9fNjAnLCByZXZlcnNlIGUubWVzc2FnZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyMjXG4gICAgT3V0cHV0IHdoZW4gbW91bnQgcG9pbnQgbmFtZSBpcyAnbSBvIHUgbiB0JzpcbiAgICAgIFsgJ3NxbGl0ZWZzIC9ob21lL2Zsb3cvanpyL2J2ZnMvbVxcXFwwNDBvXFxcXDA0MHVcXFxcMDQwblxcXFwwNDB0IGZ1c2Ugcncsbm9zdWlkLG5vZGV2LHJlbGF0aW1lLHVzZXJfaWQ9MTAwMCxncm91cF9pZD0xMDAwLGRlZmF1bHRfcGVybWlzc2lvbnMsYWxsb3dfb3RoZXIgMCAwJyBdXG4gICAgT3V0cHV0IHdoZW4gbW91bnQgcG9pbnQgbmFtZSBpcyAn8KudgCc6XG4gICAgICBbICdzcWxpdGVmcyAvaG9tZS9mbG93L2p6ci9idmZzL/CrnYAgZnVzZSBydyxub3N1aWQsbm9kZXYscmVsYXRpbWUsdXNlcl9pZD0xMDAwLGdyb3VwX2lkPTEwMDAsZGVmYXVsdF9wZXJtaXNzaW9ucyxhbGxvd19vdGhlciAwIDAnIF1cbiAgICAjIyNcbiAgICAjIHNxbGl0ZWZzIC9ob21lL2Zsb3cvanpyL2J2ZnMvbW91bnQgZnVzZSBydyxub3N1aWQsbm9kZXYscmVsYXRpbWUsdXNlcl9pZD0xMDAwLGdyb3VwX2lkPTEwMDAsZGVmYXVsdF9wZXJtaXNzaW9ucyxhbGxvd19vdGhlciAwIDBcbiAgICAjIGdyZXA6IC9ldGMvbXRhYllZWVk6IE5vIHN1Y2ggZmlsZSBvciBkaXJlY3RvcnlcbiAgICAjICAkJCQgICAgLy8vIDIg0YUgIGJ2ZnMgQCAxLjAuMCBwa2cgIGF0IDExOjE1OjM2XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIHRyYXNoIGJ2ZnMuZGIgJiYgYmluL3NxbGl0ZS1mcyBtb3VudCAtLSAuL2J2ZnMuZGIgJiBkaXNvd24gJiYgc3FsaXRlMyBidmZzLmRiIFwiLmR1bXBcIiA+IGJ2ZnMuZHVtcC5zcWxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgYWNjZXNzX2ZzX3dpdGhfZGI6IEB0YXNrcy5hY2Nlc3NfZnNfd2l0aF9kYiwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHNjcmlwdHNfOiBAdGFza3Muc2NyaXB0c18sIH1cblxuICAjIHAgPSAwYjAwMDAwMDBfMDEwXzAxMF8wMDA7IHVyZ2UgZlwiI3twfTo+IzA4bzsgI3twfTo+IzA2eDtcIlxuICAjIHAgPSAwYjExMTExMTFfMTAxXzEwMV8xMTE7IHVyZ2UgZlwiI3twfTo+IzA4bzsgI3twfTo+IzA2eDtcIlxuICAjIHAgPSAwYjExMTExMTExMTExMTExMTExMTExMTExMDAwMDAwMDAwOyB1cmdlIGZcIiN7cH06PiMwOG87ICN7cH06PiMwNng7XCJcbiAgIyBwID0gMG83Nzc7IHVyZ2UgZlwiI3twfTo+IzA4bzsgI3twfTo+IzA2eDsgI3twfTo+IzAxNmI7XCJcbiAgIyBwID0gMG83NzU7IHVyZ2UgZlwiI3twfTo+IzA4bzsgI3twfTo+IzA2eDsgI3twfTo+IzAxNmI7XCJcbiAgIyBwID0gMG82NjQ7IHVyZ2UgZlwiI3twfTo+IzA4bzsgI3twfTo+IzA2eDsgI3twfTo+IzAxNmI7XCJcbiAgIyB1cmdlICfOqWJ2ZnNfXzYxJ1xuICAjIHAgPSAwbzc3NzsgdXJnZSBmXCIje3B9Oj4jMDhvOyAje3B9Oj4jMDZ4OyAje3B9Oj4jMDE2YjtcIlxuICAjIHAgPSAwbzU1NTsgdXJnZSBmXCIje3B9Oj4jMDhvOyAje3B9Oj4jMDZ4OyAje3B9Oj4jMDE2YjtcIlxuICAjIHAgPSAwbzQ0NDsgdXJnZSBmXCIje3B9Oj4jMDhvOyAje3B9Oj4jMDZ4OyAje3B9Oj4jMDE2YjtcIlxuXG5cblxuIyMjXG7ilIIgICAgICAyMSDilIIgICAgICAgICAxIOKUgiBmb2xkZXIg4pSCICAgNTA5IOKUgiBkcnd4cnd4ci14IOKUgiA/cndzcndzci10ICAgIOKUgiAuVHJhc2gtMTAwMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvLlRyYXNoLTEwMDBcbuKUgiAgICAgIDI5IOKUgiAgICAgICAgMjEg4pSCIGZvbGRlciDilIIgMTY4MzIg4pSCIGRyd3gtLS0tLS0g4pSCIGRyd3MtLS0tLVQgICAg4pSCIGV4cHVuZ2VkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC8uVHJhc2gtMTAwMC9leHB1bmdlZFxu4pSCICAgICAgMjQg4pSCICAgICAgICAyMSDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgZmlsZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgLy5UcmFzaC0xMDAwL2ZpbGVzXG7ilIIgICAgICAyMiDilIIgICAgICAgIDIxIOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiBkcnd4LS0tLS0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiBpbmZvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvLlRyYXNoLTEwMDAvaW5mb1xu4pSCICAgICAgIDIg4pSCICAgICAgICAgMSDilIIgZm9sZGVyIOKUgiAxNjcwNCDilIIgZHIteC0tLS0tLSDilIIgZHJ3cy0tLS0tVCAgICDilIIgb3JpZ2luICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpblxu4pSCICAgICAgMTcg4pSCICAgICAgICAgMiDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgZmlsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9maWxlXG7ilIIgICAgICAyNiDilIIgICAgICAgIDE3IOKUgiBmb2xkZXIg4pSCICAgNTA5IOKUgiBkcnd4cnd4ci14IOKUgiA/cndzcndzci10ICAgIOKUgiBqenIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2ZpbGUvanpyXG7ilIIgICAgICAyNyDilIIgICAgICAgIDI2IOKUgiBmb2xkZXIg4pSCICAgNTA5IOKUgiBkcnd4cnd4ci14IOKUgiA/cndzcndzci10ICAgIOKUgiBicmljYWJyYWMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2ZpbGUvanpyL2JyaWNhYnJhY1xu4pSCICAgICAgMjgg4pSCICAgICAgICAyNyDilIIgZmlsZSAgIOKUgiAzMzIwNCDilIIgLnJ3LXJ3LXItLSDilIIgLnJ3eHJ3U3ItVCAgICDilIIgUkVBRE1FLm1kICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9maWxlL2p6ci9icmljYWJyYWMvUkVBRE1FLm1kXG7ilIIgICAgICAxOCDilIIgICAgICAgIDE3IOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiBkcnd4LS0tLS0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiBwYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2ZpbGUvcGF0aFxu4pSCICAgICAgMTkg4pSCICAgICAgICAxOCDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgdG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9maWxlL3BhdGgvdG9cbuKUgiAgICAgIDIwIOKUgiAgICAgICAgMTkg4pSCIGZpbGUgICDilIIgMzMxNTIg4pSCIC5ydy0tLS0tLS0g4pSCIC4tdy0tLS0tLVQgICAg4pSCIGluZGV4LmpzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vZmlsZS9wYXRoL3RvL2luZGV4LmpzXG7ilIIgICAgICAxNiDilIIgICAgICAgICAyIOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiBkcnd4LS0tLS0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiBodHRwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2h0dHBcbuKUgiAgICAgICAzIOKUgiAgICAgICAgIDIg4pSCIGZvbGRlciDilIIgICA0NDgg4pSCIGRyd3gtLS0tLS0g4pSCID9yd3MtLS0tLVQgICAg4pSCIGh0dHBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cHNcbuKUgiAgICAgICA3IOKUgiAgICAgICAgIDMg4pSCIGZvbGRlciDilIIgICA0NDgg4pSCIGRyd3gtLS0tLS0g4pSCID9yd3MtLS0tLVQgICAg4pSCIHJhdy5naXRodWJ1c2VyY29udGVudC5jb20gICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cHMvcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbVxu4pSCICAgICAgIDgg4pSCICAgICAgICAgNyDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgbG92ZWVuY291bnRlcmZsb3cgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9odHRwcy9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93XG7ilIIgICAgICAgOSDilIIgICAgICAgICA4IOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiBkcnd4LS0tLS0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiBicmljYWJyYWMtc2Ztb2R1bGVzICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2h0dHBzL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlc1xu4pSCICAgICAgMTAg4pSCICAgICAgICAgOSDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgMjk4MGUyODk4NWZlN2I5Njc3MmE3MjEzYTJjZDlhZTNmMjYzMTc3YSDilIIgL29yaWdpbi9odHRwcy9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93L2JyaWNhYnJhYy1zZm1vZHVsZXMvMjk4MGUyODk4NWZcbuKUgiAgICAgIDI1IOKUgiAgICAgICAgMTAg4pSCIGZpbGUgICDilIIgMzMyMDQg4pSCIGRyd3gtLS0tLS0g4pSCIC5yd3hyd1NyLVQgICAg4pSCIFJFQURNRS5tZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cHMvcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzLzI5ODBlMjg5ODVmXG7ilIIgICAgICAxMSDilIIgICAgICAgIDEwIOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiAucnctcnctci0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiBsaWIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2h0dHBzL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlcy8yOTgwZTI4OTg1Zlxu4pSCICAgICAgMTIg4pSCICAgICAgICAxMSDilIIgZmlsZSAgIOKUgiAzMzIwNCDilIIgLnJ3LXJ3LXItLSDilIIgLnJ3eHJ3U3ItVCAgICDilIIgamV0c3RyZWFtLmJyaWNzLmpzICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9odHRwcy9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93L2JyaWNhYnJhYy1zZm1vZHVsZXMvMjk4MGUyODk4NWZcbuKUgiAgICAgIDEzIOKUgiAgICAgICAgMTAg4pSCIGZvbGRlciDilIIgICA0NDgg4pSCIGRyd3gtLS0tLS0g4pSCID9yd3MtLS0tLVQgICAg4pSCIHNyYyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cHMvcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzLzI5ODBlMjg5ODVmXG7ilIIgICAgICAxNCDilIIgICAgICAgIDEzIOKUgiBmaWxlICAg4pSCIDMzMTUyIOKUgiAucnctLS0tLS0tIOKUgiAuLXctLS0tLS1UICAgIOKUgiBqZXRzdHJlYW0uYnJpY3MuY29mZmVlICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2h0dHBzL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlcy8yOTgwZTI4OTg1Zlxu4pSCICAgICAgIDQg4pSCICAgICAgICAgMyDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgdW5wa2cuY29tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9odHRwcy91bnBrZy5jb21cbuKUgiAgICAgICA1IOKUgiAgICAgICAgIDQg4pSCIGZvbGRlciDilIIgICA0NDgg4pSCIGRyd3gtLS0tLS0g4pSCID9yd3MtLS0tLVQgICAg4pSCIGFuc2lfdXAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cHMvdW5wa2cuY29tL2Fuc2lfdXBcbuKUgiAgICAgICA2IOKUgiAgICAgICAgIDUg4pSCIGZpbGUgICDilIIgMzMxNTIg4pSCIC5ydy0tLS0tLS0g4pSCIC4tdy0tLS0tLVQgICAg4pSCIGFuc2lfdXAuanMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cHMvdW5wa2cuY29tL2Fuc2lfdXAvYW5zaV91cC5qc1xuXG5cbmRyd3hyd3hyLXggICAgIC0gZmxvdyAyMDI1LTExLTAxIDIwOjA4IOKUnOKUgOKUgCAuVHJhc2gtMTAwMFxuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMjA6MDgg4pSCICAg4pSc4pSA4pSAIGV4cHVuZ2VkXG5kcnd4LS0tLS0tICAgICAtIGZsb3cgMjAyNS0xMS0wMSAyMDowOCDilIIgICDilJzilIDilIAgZmlsZXNcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDIwOjA4IOKUgiAgIOKUlOKUgOKUgCBpbmZvXG5kci14LS0tLS0tICAgICAtIGZsb3cgMjAyNS0xMS0wMSAxMDowMiDilJTilIDilIAgb3JpZ2luXG5kcnd4LS0tLS0tICAgICAtIGZsb3cgMjAyNS0xMS0wMSAyMDowNyAgICAg4pSc4pSA4pSAIGZpbGVcbmRyd3hyd3hyLXggICAgIC0gZmxvdyAyMDI1LTExLTAxIDIwOjA3ICAgICDilIIgICDilJzilIDilIAganpyXG5kcnd4cnd4ci14ICAgICAtIGZsb3cgMjAyNS0xMS0wMSAyMDowOCAgICAg4pSCICAg4pSCICAg4pSU4pSA4pSAIGJyaWNhYnJhY1xuLnJ3LXJ3LXItLSAxMzA3OSBmbG93IDIwMjUtMTEtMDEgMjE6MTYgICAgIOKUgiAgIOKUgiAgICAgICDilJTilIDilIAgUkVBRE1FLm1kXG5kcnd4LS0tLS0tICAgICAtIGZsb3cgMjAyNS0xMS0wMSAxMDowMiAgICAg4pSCICAg4pSU4pSA4pSAIHBhdGhcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICDilIIgICAgICAg4pSU4pSA4pSAIHRvXG4ucnctLS0tLS0tICAgICAwIGZsb3cgMjAyNS0xMS0wMSAxMDowMiAgICAg4pSCICAgICAgICAgICDilJTilIDilIAgaW5kZXguanNcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICDilJzilIDilIAgaHR0cFxuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgIOKUlOKUgOKUgCBodHRwc1xuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgICAgICDilJzilIDilIAgcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbVxuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgICAgICDilIIgICDilJTilIDilIAgbG92ZWVuY291bnRlcmZsb3dcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICAgICAg4pSCICAgICAgIOKUlOKUgOKUgCBicmljYWJyYWMtc2Ztb2R1bGVzXG5kcnd4LS0tLS0tICAgICAtIGZsb3cgMjAyNS0xMS0wMSAyMDowNiAgICAgICAgIOKUgiAgICAgICAgICAg4pSU4pSA4pSAIDI5ODBlMjg5ODVmZTdiOTY3NzJhNzIxM2EyY2Q5YWUzZjI2MzE3N2FcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICAgICAg4pSCICAgICAgICAgICAgICAg4pSc4pSA4pSAIGxpYlxuLnJ3LXJ3LXItLSA1ODM5MCBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgICAgICDilIIgICAgICAgICAgICAgICDilIIgICDilJTilIDilIAgamV0c3RyZWFtLmJyaWNzLmpzXG4ucnctcnctci0tIDIxNjQzIGZsb3cgMjAyNS0xMS0wMSAyMDowNiAgICAgICAgIOKUgiAgICAgICAgICAgICAgIOKUnOKUgOKUgCBSRUFETUUubWRcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICAgICAg4pSCICAgICAgICAgICAgICAg4pSU4pSA4pSAIHNyY1xuLnJ3LS0tLS0tLSAxNTc3NiBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgICAgICDilIIgICAgICAgICAgICAgICAgICAg4pSU4pSA4pSAIGpldHN0cmVhbS5icmljcy5jb2ZmZWVcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICAgICAg4pSU4pSA4pSAIHVucGtnLmNvbVxuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgICAgICAgICAg4pSU4pSA4pSAIGFuc2lfdXBcbi5ydy0tLS0tLS0gMjI2NTYgZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICAgICAgICAgICAgICDilJTilIDilIAgYW5zaV91cC5qc1xuXG5cblxuIyMjIl19
