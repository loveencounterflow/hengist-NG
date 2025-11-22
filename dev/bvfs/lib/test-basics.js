(async function() {
  'use strict';
  var $, GTNG, GUY, PATH, Test, alert, debug, demo_create_mount_folders_with_strange_names, echo, f, get_paths, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-sfmodules/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  PATH = require('node:path');

  ({$} = require('execa'));

  //===========================================================================================================
  get_paths = function() {
    var arena_path, assets_path, db_path, hengist_path, mount_path, ref_path;
    hengist_path = PATH.resolve(__dirname, '../../..');
    ref_path = PATH.join(hengist_path, 'apps/bvfs');
    db_path = PATH.join(ref_path, 'bvfs.db');
    mount_path = PATH.join(ref_path, 'mount');
    assets_path = PATH.join(hengist_path, 'assets/bvfs');
    arena_path = PATH.join(hengist_path, 'arena/bvfs');
    return {ref_path, db_path, mount_path, assets_path, arena_path};
  };

  //###########################################################################################################

  //===========================================================================================================
  this.tasks = {
    //---------------------------------------------------------------------------------------------------------
    paths: function() {
      var Dbric, SFMODULES, SQL, arena_path, assets_path, db_path, internals, mount_path, ref_path, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      ({ref_path, db_path, mount_path, assets_path, arena_path} = get_paths());
      (() => {        //.......................................................................................................
        var bvfs, file_id, path, read_lines, read_metadata, y, Ωbvfs___2;
        bvfs = Dbric.open(db_path);
        read_metadata = SQL`select file_id, path, name, size from bv_paths where type in ( 'file' );`;
        read_lines = SQL`select line, eol from bv_lines where file_id = $file_id order by line_nr;`;
        for (y of bvfs.walk(read_metadata)) {
          ({file_id, path} = y);
          help('Ωbvfs___1', {file_id, path});
          this.eq((Ωbvfs___2 = function() {
            if (file_id === 1) {
              return path === '.';
            } else {
              return path[0] !== '/';
            }
          }), true);
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    filesizes: function() {
      var Bsql3, Bvfs, Dbric, SFMODULES, SQL, _Bsql3, arena_path, assets_path, db_path, internals, mount_path, ref_path, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      ({ref_path, db_path, mount_path, assets_path, arena_path} = get_paths());
      _Bsql3 = require('better-sqlite3');
      //=======================================================================================================
      Bsql3 = class Bsql3 extends _Bsql3 {};
      Bvfs = (function() {
        //=======================================================================================================
        class Bvfs extends Dbric {};

        Bvfs.db_class = Bsql3;

        return Bvfs;

      }).call(this);
      (() => {        //.......................................................................................................
        var bvfs, byte_count, eol, file_id, line, line_count, line_nr, path, read_lines, read_metadata, size, y, z, Ωbvfs___5;
        bvfs = Bvfs.open(db_path);
        read_metadata = SQL`select file_id, path, name, size from bv_paths where type in ( 'file' );`;
        read_lines = SQL`select line_nr, line, eol from bv_lines where file_id = $file_id order by line_nr;`;
        for (y of bvfs.walk(read_metadata)) {
          ({file_id, path, size} = y);
          line_count = 0;
          byte_count = 0;
          for (z of bvfs.walk(read_lines, {file_id})) {
            ({line_nr, line, eol} = z);
            if (line_count < 10) {
              info('Ωbvfs___3', {path, line_nr, line});
            }
            line_count++;
            byte_count += Buffer.byteLength(line + eol, 'utf-8');
          }
          help('Ωbvfs___4', {path, size, byte_count});
          this.eq((Ωbvfs___5 = function() {
            return byte_count;
          }), size);
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    }
  };

  //###########################################################################################################

  //===========================================================================================================
  this.postponed = {
    //---------------------------------------------------------------------------------------------------------
    basics: function() {
      var SFMODULES, probes_and_matchers, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      // { Jetstream,
      //   Async_jetstream,
      //   internals,              } = SFMODULES.require_jetstream()
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
          debug('Ωbvfs___6', f`${nprm}:>10c; ${oprm}:>10c; ${xprm}:>10c; ${bprm}:>20c; ${sprm}:>10c; `);
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
      debug('Ωbvfs___7', (function() {
        var results;
        results = [];
        for (k in UP) {
          results.push(k);
        }
        return results;
      })());
      debug('Ωbvfs___8', UP.convert.object((FS.statSync('/etc/passwd')).mode));
      debug('Ωbvfs___9', f`${UP.convert.number('a-w')}:>#03o;`);
      debug('Ωbvfs__10', f`${UP.convert.number('a+w')}:>#03o;`);
      debug('Ωbvfs__11', f`${UP.convert.number('u+w')}:>#03o;`);
      debug('Ωbvfs__12', f`${UP.convert.number('u+r')}:>#03o;`);
      debug('Ωbvfs__13', f`${UP.convert.number('u-w,g-w,o-w')}:>#03o;`);
      debug('Ωbvfs__14', f`${UP.convert.number('u+w,g+w,o+w')}:>#03o;`);
      debug('Ωbvfs__15', f`  ${UP.convert.symbolic('u+w,g+w,o+w')}:>20c;`);
      help('Ωbvfs__16', f`  ${UP.convert.symbolic(0o775)}:>20c;`);
      help('Ωbvfs__17', f`  ${UP.convert.symbolic(0o664)}:>20c;`);
      help('Ωbvfs__18', f`  ${UP.convert.symbolic(0o555)}:>20c;`);
      help('Ωbvfs__19', f`  ${UP.convert.symbolic(0o444)}:>20c;`);
      help('Ωbvfs__20');
      help('Ωbvfs__21', f`  ${UP.convert.symbolic(0o000775)}:>20c;`);
      help('Ωbvfs__22', f`  ${UP.convert.symbolic(0o040555)}:>20c;`);
      help('Ωbvfs__23', f`  ${UP.convert.symbolic(0o100444)}:>20c;`);
      help('Ωbvfs__24');
      help('Ωbvfs__25', f`  ${UP.convert.symbolic(0o000775 & 0xfe00 | 0x01fd)}:>20c;`);
      /* 0o775 drwxrwxr-x folder open */      help('Ωbvfs__26', f`  ${UP.convert.symbolic(0o040555 & 0xfe00 | 0x01fd)}:>20c;`);
      /* 0o775 drwxrwxr-x folder open */      help('Ωbvfs__27', f`  ${UP.convert.symbolic(0o100444 & 0xfe00 | 0x01b4)}:>20c;`);
      /* 0o664 .rw-rw-r-- file open */      help('Ωbvfs__28');
      help('Ωbvfs__29', f`  ${UP.convert.symbolic(0o000775 & 0xfe00 | 0x016d)}:>20c;`);
      /* 0o555 dr-xr-xr-x folder closed */      help('Ωbvfs__30', f`  ${UP.convert.symbolic(0o040555 & 0xfe00 | 0x016d)}:>20c;`);
      /* 0o555 dr-xr-xr-x folder closed */      help('Ωbvfs__31', f`  ${UP.convert.symbolic(0o100444 & 0xfe00 | 0x0124)}:>20c;`);
// @eq ( Ωbvfs__32 = -> false ), false
/*
help 'Ωbvfsto__33', "drwxrwxr-x", ( 0o775.toString 8 ), ( '0x' + ( 0o775.toString 16 ).padStart 4, '0' )
help 'Ωbvfsto__34', ".rw-rw-r--", ( 0o664.toString 8 ), ( '0x' + ( 0o664.toString 16 ).padStart 4, '0' )
help 'Ωbvfsto__35', "dr-xr-xr-x", ( 0o555.toString 8 ), ( '0x' + ( 0o555.toString 16 ).padStart 4, '0' )
help 'Ωbvfsto__36', ".r--r--r--", ( 0o444.toString 8 ), ( '0x' + ( 0o444.toString 16 ).padStart 4, '0' )
help 'Ωbvfsto__37', "??-??-??-?", ( 0b101_101_101.toString 8 ), ( '0x' + ( 0b101_101_101.toString 16 ).padStart 4, '0' )
help 'Ωbvfsto__38', "??w??w??-?", ( 0b010_010_000.toString 8 ), ( '0x' + ( 0b010_010_000.toString 16 ).padStart 4, '0' )
*/
/* 0o444 .r--r--r-- file closed */      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    access_fs_with_db: function() {
      var Dbric, SFMODULES, SQL, Sqlitefs_db, d, db, db_path, execaSync, full_path, internals, mode, mount_path, paths, ref_path, shell, shell_cfg, type_of;
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
      ({ref_path, db_path, mount_path} = get_paths());
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
      debug('Ωbvfs__39', db.statements);
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
            debug('Ωbvfs__40', db.execute(SQL`update metadata set mode = s.open_mode
  from metadata           as m
  join bb_standard_modes  as s on ( m.id = s.file_id );`));
            return null;
          })();
          break;
        case 'close':
          (() => {
            debug('Ωbvfs__41', db.execute(SQL`update metadata set mode = s.closed_mode
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
        urge('Ωbvfs__42', d.mode_o, d.path); // { d..., full_path, }
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
    scripts_YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY: function() {
      var Dbric, SFMODULES, SQL, Shell, db_path, execaSync, internals, is_mounted, match_all_fs_mounts, mount_path, ref_path, shell_cfg, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      PATH = require('node:path');
      ({execaSync} = require('execa'));
      ({Shell} = require('../../../apps/bvfs'));
      //.......................................................................................................
      ({ref_path, db_path, mount_path} = get_paths());
      shell_cfg = {
        cwd: ref_path,
        lines: true,
        only_stdout: true
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
        throw new Error(`Ωbvfs__43 expected 0 or 1 match, got ${mounts.length}: ${rpr(mounts)}`);
      };
      (() => {        //.......................................................................................................
        var sh, Ωbvfs__44, Ωbvfs__45, Ωbvfs__46, Ωbvfs__47, Ωbvfs__48, Ωbvfs__49;
        sh = new Shell();
        this.throws((Ωbvfs__44 = function() {
          return sh._validate_call_arguments(null);
        }), /expected a pod or a text, got a/);
        this.throws((Ωbvfs__45 = function() {
          return sh._validate_call_arguments([]);
        }), /expected a pod or a text, got a/);
        this.throws((Ωbvfs__46 = function() {
          return sh._validate_call_arguments({});
        }), /expected a text, got a/);
        this.eq((Ωbvfs__47 = function() {
          return sh._validate_call_arguments('ls');
        }), {
          cfg: {
            cwd: ref_path,
            lines: true
          },
          cmd: 'ls',
          parameters: []
        });
        this.eq((Ωbvfs__48 = function() {
          return sh._validate_call_arguments('ls', '-AlF');
        }), {
          cfg: {
            cwd: ref_path,
            lines: true
          },
          cmd: 'ls',
          parameters: ['-AlF']
        });
        this.eq((Ωbvfs__49 = function() {
          return sh._validate_call_arguments('ls', '-AlF', '.');
        }), {
          cfg: {
            cwd: ref_path,
            lines: true
          },
          cmd: 'ls',
          parameters: ['-AlF', '.']
        });
        return null;
      })();
      (() => {        //.......................................................................................................
        var e, sh;
        sh = new Shell(shell_cfg);
        debug('Ωbvfs__50', sh.call('ls'));
        debug('Ωbvfs__51', sh.call('grep', '-Pi', 'sqlitefs', '/etc/mtab'));
        try {
          help('Ωbvfs__52', sh.call('grep', '-Pi', 'sqlitefs', '/etc/mtab'));
        } catch (error1) {
          e = error1;
          warn('Ωbvfs__53', reverse(e.message));
        }
        try {
          help('Ωbvfs__54', sh.call('grep', '-Pi', 'sqlitefsYYYY', '/etc/mtab'));
        } catch (error1) {
          e = error1;
          warn('Ωbvfs__55', reverse(e.message));
        }
        try {
          help('Ωbvfs__56', sh.call('grep', '-Pi', 'sqlitefsYYYY', '/etc/mtabYYYY'));
        } catch (error1) {
          e = error1;
          warn('Ωbvfs__57', reverse(e.message));
        }
        null;
        return null;
      })();
      (() => {        //.......................................................................................................
        var sh;
        sh = new Shell(shell_cfg);
        info('Ωbvfs__58', match_all_fs_mounts({
          device: 'sqlitefs'
        }));
        info('Ωbvfs__59', match_all_fs_mounts({
          device: 'sqlitefs',
          type: 'sqlfs'
        }));
        info('Ωbvfs__60', match_all_fs_mounts({
          device: 'sqlitefs',
          type: 'fuse'
        }));
        return null;
      })();
      (() => {        //.......................................................................................................
        var e, sh;
        sh = new Shell(shell_cfg);
        info('Ωbvfs__61', is_mounted({
          device: 'sqlitefs'
        }));
        info('Ωbvfs__62', is_mounted({
          device: 'sqlitefs',
          type: 'sqlfs'
        }));
        info('Ωbvfs__63', is_mounted({
          device: 'sqlitefs',
          type: 'fuse'
        }));
        try {
          info('Ωbvfs__64', is_mounted({}));
        } catch (error1) {
          e = error1;
          warn('Ωbvfs__65', reverse(e.message));
        }
        return null;
      })();
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
    },
    //---------------------------------------------------------------------------------------------------------
    async_shell: async function() {
      var Async_jetstream, Dbric, Jetstream, R, SFMODULES, SQL, Shell, create_glob_matcher, decode_octal, freeze, internals, lets, regex, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      PATH = require('node:path');
      ({$} = require('execa'));
      ({Shell} = require('../../../apps/bvfs'));
      ({Async_jetstream, Jetstream, internals} = SFMODULES.require_jetstream());
      ({lets, freeze} = require('../../../apps/letsfreezethat'));
      create_glob_matcher = require('picomatch');
      ({regex} = require('regex'));
      //.........................................................................................................
      decode_octal = function(text) {
        return text.replace(/(?<!\\)\\([0-7]{3})/gv, function($0, $1) {
          return String.fromCodePoint(parseInt($1, 8));
        });
      };
      //.........................................................................................................
      await $({
        verbose: 'full'
      })`cat package.json`;
      await $({
        verbose: 'full'
      })`cat .gitignore`;
      R = (await $({
        lines: true,
        verbose: 'full'
      })`cat .gitignore`.pipe`sort`);
      debug('Ωbvfs__66', R.stdout);
      R = (await $({
        lines: true,
        verbose: 'full'
      })`cat .gitignore`.pipe({
        lines: true,
        verbose: 'full'
      })`sort`);
      debug('Ωbvfs__67', (rpr(R.stdout)).slice(0, 109) + '...');
      R = (await $({
        lines: true,
        verbose: 'full'
      })`cat .gitignore`.pipe`sort`.pipe`head -n2`);
      debug('Ωbvfs__68', (rpr(R.stdout)).slice(0, 109) + '...');
      R = (await $({
        lines: true,
        verbose: 'full'
      })`mount`);
      debug('Ωbvfs__69', (rpr(R.stdout)).slice(0, 109) + '...');
      await (async() => {        //.......................................................................................................
        var create_regex_matcher, d, error, has_mount, pattern, result, sh_mount_jet, walk_sh_mount_matches, Ωbvfs__76, Ωbvfs__77, Ωbvfs__78, Ωbvfs__79, Ωbvfs__80, Ωbvfs__81, Ωbvfs__82;
        // fallback  = Symbol 'fallback'
        /* TAINT the output of `mount` is not escaped and not quoted, so there's lots of opportunities
             for paths and device names with spaces or parens to cause the match to fail; consider to use
             `cat /etc/mtab` instead which uses octal escapes for filenames with spaces. */
        pattern = /^(?<device>[^\x20]+)\x20on\x20(?<path>.+?)\x20type\x20(?<type>[^\x20]+)\x20\((?<options>[^\x20]+)\)$/v;
        //.....................................................................................................
        sh_mount_jet = new Jetstream({
          empty_call: null
        });
        //.....................................................................................................
        sh_mount_jet.push(function*(NN) {
          yield* GUY.fs.walk_lines('/etc/mtab');
          //   debug 'Ωbvfs__70',
          //    line.split '\x20'
          // for line in stdout
          //   yield line
          return null;
        });
        //.....................................................................................................
        sh_mount_jet.push(function*(line) {
          var device, options, path, type;
          if (line === '') {
            return null;
          }
          [device, path, type, options] = line.split('\x20');
          if ([device, path, type, options].some(function(e) {
            return (e == null) || (e === '');
          })) {
            throw new Error(`Ωbvfs__71 unable to parse line ${rpr(line)}`);
          }
          return (yield freeze({device, path, type, options}));
        });
        //.....................................................................................................
        sh_mount_jet.push(function*(d) {
          yield lets(d, function(d) {
            d.options = d.options.split(',');
            return d.path = decode_octal(d.path);
          });
          return null;
        });
        //.....................................................................................................
        create_regex_matcher = function(pattern) {
          var re, type;
          if (pattern == null) {
            return (function() {
              return true;
            });
          }
          switch (type = type_of(pattern)) {
            case 'regex':
              re = pattern;
              break;
            case 'text':
              re = regex`${pattern}`;
              break;
            default:
              throw new Error(`Ωbvfs__72 expected a regex or a text, got a ${type}`);
          }
          return function(x) {
            re.lastIndex = 0;
            return re.test(x);
          };
        };
        //.....................................................................................................
        walk_sh_mount_matches = function*({device = null, path = null, glob = null, type = null} = {}) {
          var d, match_device, match_glob, match_path, match_type;
          if (glob != null) {
            if (path != null) {
              throw new Error("Ωbvfs__73 expected either glob or path, got both");
            }
            match_glob = create_glob_matcher(glob);
          } else {
            match_glob = function() {
              return true;
            };
          }
          match_device = create_regex_matcher(device);
          match_path = create_regex_matcher(path);
          match_type = create_regex_matcher(type);
/* TAINT allow regexes */
          for (d of sh_mount_jet.walk()) {
            if (!match_device(d.device)) {
              continue;
            }
            if (!match_glob(d.path)) {
              continue;
            }
            if (!match_path(d.path)) {
              continue;
            }
            if (!match_type(d.type)) {
              continue;
            }
            yield d;
          }
          return null;
        };
        //.....................................................................................................
        has_mount = function(...P) {
          var count, mounts;
          mounts = [...(walk_sh_mount_matches(...P))];
          switch (count = mounts.length) {
            case 0:
              return false;
            case 1:
              return true;
          }
          throw new Error(`Ωbvfs__74 expected zero or one results, got ${count}`);
        };
        //.....................................................................................................
        // for await d from walk_sh_mount_matches { device: 'sqlitefs', }
        // for await d from walk_sh_mount_matches()
        //   urge 'Ωbvfs__75', d
        result = [
          ...((await (async function() {
            var results;
            results = [];
            for await (d of walk_sh_mount_matches({
              device: 'tmpfs'
            })) {
              results.push(d);
            }
            return results;
          })()))
        ];
        this.eq((Ωbvfs__76 = function() {
          return result.length > 1;
        }), true);
        //.....................................................................................................
        error = null;
        try {
          await has_mount({
            device: 'tmpfs'
          });
        } catch (error1) {
          error = error1;
          this.eq((Ωbvfs__77 = function() {
            return /expected zero or one results, got \d+/.test(error.message);
          }), true);
        }
        this.eq((Ωbvfs__78 = function() {
          return error === null;
        }), false);
        //.....................................................................................................
        this.eq((Ωbvfs__79 = function() {
          return has_mount({
            path: '/dev/shm'
          });
        }), true);
        this.eq((Ωbvfs__80 = function() {
          return has_mount({
            path: /^\/dev\/shm$/v
          });
        }), true);
        this.eq((Ωbvfs__81 = function() {
          return has_mount({
            glob: '/*/shm'
          });
        }), true);
        return this.eq((Ωbvfs__82 = function() {
          return has_mount({
            path: '/no/such/path'
          });
        }), false);
      })();
      /*
      in /etc/mtab:
      (1) /home/flow/jzr/bvfs/mou\134nt instead of /home/flow/jzr/bvfs/mou\012t
      (2) /home/flow/jzr/bvfs/mou\134tt instead of /home/flow/jzr/bvfs/mou\011t
      (3) /home/flow/jzr/bvfs/mou\134x01t instead of /home/flow/jzr/bvfs/mou\001t
      (4) /home/flow/jzr/bvfs/mou\134x7ft instead of /home/flow/jzr/bvfs/mou\177t
      (5) /home/flow/jzr/bvfs/mou\134u2029t literally '/home/flow/jzr/bvfs/mou\u2029t' with the backslash escaped
      where '\134' is 0x5c `\\` (backslash)

      `mount` command output:
      (4) /home/flow/jzr/bvfs/mou\x7ft
      (5) /home/flow/jzr/bvfs/mou\u2029t

      `mount` 'helpfully' resolves the top-level escaping (i.e. the octal escapes) but leaves the symbolic
      `\n`, `\t`, `\x..`, `\u....` in place; unfortunately, this results in filenames where the most
      notorious offender—ASCII space—is left unescaped, with no quotes around the path and no way to safely
      reconstruct the path except matching on how it probably ends (with a `type ...` and a parenthesized
      list of options that hopefully don't use any special characters).

      */
      //.......................................................................................................
      return null;
    }
  };

  // #===========================================================================================================
  // ensure_empty_dir = ( path ) ->
  //   try await result = $( { reject: false, } )"trash #{path}" catch error
  //     debug 'Ωbvfs__83', rpr error.exitCode
  //     debug 'Ωbvfs__84', rpr error.name
  //     debug 'Ωbvfs__85', rpr error.code
  //     debug 'Ωbvfs__86', rpr error.message
  //     debug 'Ωbvfs__87', rpr error.originalMessage
  //     debug 'Ωbvfs__88', rpr error.cause
  //     process.exit 111
  //     throw error
  //   info 'Ωbvfs__89', rpr result
  //   info 'Ωbvfs__90', rpr result?.exitCode
  //   info 'Ωbvfs__91', rpr result?.name
  //   info 'Ωbvfs__92', rpr result?.code
  //   info 'Ωbvfs__93', rpr result?.message
  //   info 'Ωbvfs__94', rpr result?.originalMessage
  //   info 'Ωbvfs__95', rpr result?.cause
  //   ;null

  //===========================================================================================================
  demo_create_mount_folders_with_strange_names = async function() {
    var arena_path, assets_path, db_path, mkdirp, mount_path, ref_path;
    ({ref_path, db_path, assets_path, arena_path, mount_path} = get_paths());
    // debug 'Ωbvfs__96', { assets_path, }
    // debug 'Ωbvfs__97', { arena_path, }
    // await ensure_empty_dir arena_path
    ({mkdirp} = require('mkdirp'));
    // debug 'Ωbvfs__98', mkdirp
    await mkdirp(PATH.join(arena_path, 'test'));
    await mkdirp(PATH.join(arena_path, 'äöü'));
    await mkdirp(PATH.join(arena_path, 'mou\nt'));
    await mkdirp(PATH.join(arena_path, 'mou t'));
    await mkdirp(PATH.join(arena_path, 'mou*t'));
    await mkdirp(PATH.join(arena_path, 'mou?t'));
    await mkdirp(PATH.join(arena_path, 'mou𬺱t'));
    await mkdirp(PATH.join(arena_path, 'mou　t'));
    await mkdirp(PATH.join(arena_path, 'mou\u2028t'));
    await mkdirp(PATH.join(arena_path, 'mou\u2029t'));
    await mkdirp(PATH.join(arena_path, 'mou‪t'));
    await mkdirp(PATH.join(arena_path, 'mou‫t'));
    await mkdirp(PATH.join(arena_path, 'mou‬t'));
    await mkdirp(PATH.join(arena_path, 'mou‭t'));
    await mkdirp(PATH.join(arena_path, 'mou‮t'));
    await mkdirp(PATH.join(arena_path, 'a\x01z'));
    await mkdirp(PATH.join(arena_path, 'a\\x01z'));
    await mkdirp(PATH.join(arena_path, 'mou\tt'));
    // drwxrwxr-x     - flow 2025-11-12 10:05 -- - -    mou*nt
    // drwxrwxr-x     - flow 2025-11-12 10:05 -- - -    mou?nt
    // drwxrwxrwx     - root 2025-11-08 16:02 -- - -    mou\012t
    // drwxrwxr-x     - flow 2025-11-12 10:05 -- - -    mou\nt
    // drwxrwxr-x     - flow 2025-11-12 10:14 -- - -    mou\tt
    // drwxrwxr-x     - flow 2025-11-12 10:26 -- - -    mou\u2029t
    // drwxrwxr-x     - flow 2025-11-12 10:15 -- - -    mou\x01t
    // drwxrwxr-x     - flow 2025-11-12 10:21 -- - -    mou\x7ft
    // drwxrwxr-x     - flow 2025-11-12 10:23 -- - -    mou\x80t
    // drwxrwxr-x     - flow 2025-11-07 09:25 -I - -    mount
    // drwxrwxr-x     - flow 2025-11-09 11:50 -- - -    'mou t'
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      var guytest_cfg;
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
      return (await (new Test(guytest_cfg)).async_test(this.tasks));
    })();
  }

  // ( new Test guytest_cfg ).test { access_fs_with_db: @tasks.access_fs_with_db, }
// ( new Test guytest_cfg ).test { scripts_YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY: @tasks.scripts_YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY, }
// await ( new Test guytest_cfg ).async_test { async_shell: @tasks.async_shell, }
// await demo_create_mount_folders_with_strange_names()

  // 'alpha|beta|gamma|delta||zeta|'

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsNENBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSxXQUFSOztFQUM1QixDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSxPQUFSLENBQTVCLEVBdEJBOzs7RUF5QkEsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQ1osUUFBQSxVQUFBLEVBQUEsV0FBQSxFQUFBLE9B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QUFJLENBQUMsSUFBTCxDQUFVLFVBQVYsRUFBc0IsT0FBdEIsQ0FBUDtJQUNOLE1BQU0sTUFBQSxDQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsVUFBVixFQUFzQixRQUF0QixDQUFQO0lBQ04sTUFBTSxNQUFBLENBQU8sSUFBSSxDQUFDLElBQUwsQ0FBVSxVQUFWLEVBQXNCLFNBQXRCLENBQVA7SUFDTixNQUFNLE1BQUEsQ0FBTyxJQUFJLENBQUMsSUFBTCxDQUFVLFVBQVYsRUFBc0IsUUFBdEIsQ0FBUCxFQTNCUjs7Ozs7Ozs7Ozs7O1dBd0NHO0VBekM0QyxFQXhmL0M7OztFQW9pQkEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxJQUF2QztRQUE2QyxhQUFBLEVBQWU7TUFBNUQ7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7YUFDZCxDQUFBLE1BQU0sQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxVQUF6QixDQUFvQyxJQUFDLENBQUEsS0FBckMsQ0FBTjtJQUhzQyxDQUFBLElBQXhDOzs7RUFwaUJBOzs7Ozs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLXNmbW9kdWxlcy90ZXN0LWJhc2ljcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCwgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYsICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xueyAkLCAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJ2V4ZWNhJ1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmdldF9wYXRocyA9IC0+XG4gIGhlbmdpc3RfcGF0aCAgPSBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4nXG4gIHJlZl9wYXRoICAgICAgPSBQQVRILmpvaW4gaGVuZ2lzdF9wYXRoLCAnYXBwcy9idmZzJ1xuICBkYl9wYXRoICAgICAgID0gUEFUSC5qb2luIHJlZl9wYXRoLCAnYnZmcy5kYidcbiAgbW91bnRfcGF0aCAgICA9IFBBVEguam9pbiByZWZfcGF0aCwgJ21vdW50J1xuICBhc3NldHNfcGF0aCAgID0gUEFUSC5qb2luIGhlbmdpc3RfcGF0aCwgJ2Fzc2V0cy9idmZzJ1xuICBhcmVuYV9wYXRoICAgID0gUEFUSC5qb2luIGhlbmdpc3RfcGF0aCwgJ2FyZW5hL2J2ZnMnXG4gIHJldHVybiB7IHJlZl9wYXRoLCBkYl9wYXRoLCBtb3VudF9wYXRoLCBhc3NldHNfcGF0aCwgYXJlbmFfcGF0aCwgfVxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGFza3MgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcGF0aHM6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIHsgcmVmX3BhdGgsXG4gICAgICBkYl9wYXRoLFxuICAgICAgbW91bnRfcGF0aCxcbiAgICAgIGFzc2V0c19wYXRoLFxuICAgICAgYXJlbmFfcGF0aCwgICAgICAgICAgICAgfSA9IGdldF9wYXRocygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgYnZmcyAgICAgICAgICA9IERicmljLm9wZW4gZGJfcGF0aFxuICAgICAgcmVhZF9tZXRhZGF0YSA9IFNRTFwiXCJcInNlbGVjdCBmaWxlX2lkLCBwYXRoLCBuYW1lLCBzaXplIGZyb20gYnZfcGF0aHMgd2hlcmUgdHlwZSBpbiAoICdmaWxlJyApO1wiXCJcIlxuICAgICAgcmVhZF9saW5lcyAgICA9IFNRTFwiXCJcInNlbGVjdCBsaW5lLCBlb2wgZnJvbSBidl9saW5lcyB3aGVyZSBmaWxlX2lkID0gJGZpbGVfaWQgb3JkZXIgYnkgbGluZV9ucjtcIlwiXCI7XG4gICAgICBmb3IgeyBmaWxlX2lkLCBwYXRoLCB9IGZyb20gYnZmcy53YWxrIHJlYWRfbWV0YWRhdGFcbiAgICAgICAgaGVscCAnzqlidmZzX19fMScsIHsgZmlsZV9pZCwgcGF0aCwgfVxuICAgICAgICBAZXEgKCDOqWJ2ZnNfX18yID0gLT4gaWYgKCBmaWxlX2lkIGlzIDEgKSB0aGVuICggcGF0aCBpcyAnLicgKSBlbHNlICggcGF0aFsgMCBdIGlzbnQgJy8nICkgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmaWxlc2l6ZXM6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIHsgcmVmX3BhdGgsXG4gICAgICBkYl9wYXRoLFxuICAgICAgbW91bnRfcGF0aCxcbiAgICAgIGFzc2V0c19wYXRoLFxuICAgICAgYXJlbmFfcGF0aCwgICAgICAgICAgICAgfSA9IGdldF9wYXRocygpXG4gICAgX0JzcWwzICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYmV0dGVyLXNxbGl0ZTMnXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGFzcyBCc3FsMyBleHRlbmRzIF9Cc3FsM1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgQnZmcyBleHRlbmRzIERicmljXG4gICAgICBAZGJfY2xhc3M6IEJzcWwzXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgYnZmcyAgICAgICAgICA9IEJ2ZnMub3BlbiBkYl9wYXRoXG4gICAgICByZWFkX21ldGFkYXRhID0gU1FMXCJcIlwic2VsZWN0IGZpbGVfaWQsIHBhdGgsIG5hbWUsIHNpemUgZnJvbSBidl9wYXRocyB3aGVyZSB0eXBlIGluICggJ2ZpbGUnICk7XCJcIlwiXG4gICAgICByZWFkX2xpbmVzICAgID0gU1FMXCJcIlwic2VsZWN0IGxpbmVfbnIsIGxpbmUsIGVvbCBmcm9tIGJ2X2xpbmVzIHdoZXJlIGZpbGVfaWQgPSAkZmlsZV9pZCBvcmRlciBieSBsaW5lX25yO1wiXCJcIjtcbiAgICAgIGZvciB7IGZpbGVfaWQsIHBhdGgsIHNpemUsIH0gZnJvbSBidmZzLndhbGsgcmVhZF9tZXRhZGF0YVxuICAgICAgICBsaW5lX2NvdW50ICA9IDBcbiAgICAgICAgYnl0ZV9jb3VudCAgPSAwXG4gICAgICAgIGZvciB7IGxpbmVfbnIsIGxpbmUsIGVvbCwgfSBmcm9tIGJ2ZnMud2FsayByZWFkX2xpbmVzLCB7IGZpbGVfaWQsIH1cbiAgICAgICAgICBpbmZvICfOqWJ2ZnNfX18zJywgeyBwYXRoLCBsaW5lX25yLCBsaW5lIH0gaWYgbGluZV9jb3VudCA8IDEwXG4gICAgICAgICAgbGluZV9jb3VudCsrXG4gICAgICAgICAgYnl0ZV9jb3VudCArPSBCdWZmZXIuYnl0ZUxlbmd0aCAoIGxpbmUgKyBlb2wgKSwgJ3V0Zi04J1xuICAgICAgICBoZWxwICfOqWJ2ZnNfX180JywgeyBwYXRoLCBzaXplLCBieXRlX2NvdW50LCB9XG4gICAgICAgIEBlcSAoIM6pYnZmc19fXzUgPSAtPiBieXRlX2NvdW50ICksIHNpemVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AcG9zdHBvbmVkID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJhc2ljczogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIyB7IEpldHN0cmVhbSxcbiAgICAjICAgQXN5bmNfamV0c3RyZWFtLFxuICAgICMgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogICA1MDksIHNwcm06ICdkcnd4cnd4ci14JywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06IDE2ODMyLCBzcHJtOiAnZHJ3eC0tLS0tLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAgIDQ0OCwgc3BybTogJ2Ryd3gtLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogMTY3MDQsIHNwcm06ICdkci14LS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06ICAgNTA5LCBzcHJtOiAnZHJ3eHJ3eHIteCcsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAgIDUwOSwgc3BybTogJ2Ryd3hyd3hyLXgnLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMyMDQsIHNwcm06ICcucnctcnctci0tJywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMTUyLCBzcHJtOiAnLnJ3LS0tLS0tLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzIwNCwgc3BybTogJ2Ryd3gtLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogICA0NDgsIHNwcm06ICcucnctcnctci0tJywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMjA0LCBzcHJtOiAnLnJ3LXJ3LXItLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzE1Miwgc3BybTogJy5ydy0tLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMxNTIsIHNwcm06ICcucnctLS0tLS0tJywgfVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZvciB7IHR5cGUsIG5wcm0sIHNwcm0sIH0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICBvcHJtID0gJzBvJyArICggbnBybS50b1N0cmluZyAgOCApLnBhZFN0YXJ0ICA4LCAnMCdcbiAgICAgICAgeHBybSA9ICcweCcgKyAoIG5wcm0udG9TdHJpbmcgMTYgKS5wYWRTdGFydCAgOCwgJzAnXG4gICAgICAgIGJwcm0gPSAnX18nICsgKCBucHJtLnRvU3RyaW5nICAyICkucGFkU3RhcnQgMTYsICcwJ1xuICAgICAgICBkZWJ1ZyAnzqlidmZzX19fNicsIGZcIiN7bnBybX06PjEwYzsgI3tvcHJtfTo+MTBjOyAje3hwcm19Oj4xMGM7ICN7YnBybX06PjIwYzsgI3tzcHJtfTo+MTBjOyBcIlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmaWxlX3Blcm1pc3Npb25zX2xvZ2ljOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgVVAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ3VuaXgtcGVybWlzc2lvbnMnXG4gICAgRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4gICAgZGVidWcgJ86pYnZmc19fXzcnLCAoIGsgZm9yIGsgb2YgVVAgKVxuICAgIGRlYnVnICfOqWJ2ZnNfX184JywgVVAuY29udmVydC5vYmplY3QgKCBGUy5zdGF0U3luYyAnL2V0Yy9wYXNzd2QnICkubW9kZVxuICAgIGRlYnVnICfOqWJ2ZnNfX185JywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAnYS13J306PiMwM287XCJcbiAgICBkZWJ1ZyAnzqlidmZzX18xMCcsIGZcIiN7VVAuY29udmVydC5udW1iZXIgJ2Erdyd9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYnZmc19fMTEnLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICd1K3cnfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJ2ZnNfXzEyJywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAndStyJ306PiMwM287XCJcbiAgICBkZWJ1ZyAnzqlidmZzX18xMycsIGZcIiN7VVAuY29udmVydC5udW1iZXIgJ3UtdyxnLXcsby13J306PiMwM287XCJcbiAgICBkZWJ1ZyAnzqlidmZzX18xNCcsIGZcIiN7VVAuY29udmVydC5udW1iZXIgJ3UrdyxnK3csbyt3J306PiMwM287XCJcbiAgICBkZWJ1ZyAnzqlidmZzX18xNScsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljICd1K3csZyt3LG8rdyd9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJ2ZnNfXzE2JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG83NzV9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJ2ZnNfXzE3JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG82NjR9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJ2ZnNfXzE4JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG81NTV9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJ2ZnNfXzE5JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG80NDR9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJ2ZnNfXzIwJ1xuICAgIGhlbHAgJ86pYnZmc19fMjEnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzAwMDc3NX06PjIwYztcIlxuICAgIGhlbHAgJ86pYnZmc19fMjInLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzA0MDU1NX06PjIwYztcIlxuICAgIGhlbHAgJ86pYnZmc19fMjMnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzEwMDQ0NH06PjIwYztcIlxuICAgIGhlbHAgJ86pYnZmc19fMjQnXG4gICAgaGVscCAnzqlidmZzX18yNScsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDAwNzc1ICYgMHhmZTAwIHwgMHgwMWZkIH06PjIwYztcIiAjIyMgMG83NzUgZHJ3eHJ3eHIteCBmb2xkZXIgb3BlbiAjIyNcbiAgICBoZWxwICfOqWJ2ZnNfXzI2JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wNDA1NTUgJiAweGZlMDAgfCAweDAxZmQgfTo+MjBjO1wiICMjIyAwbzc3NSBkcnd4cnd4ci14IGZvbGRlciBvcGVuICMjI1xuICAgIGhlbHAgJ86pYnZmc19fMjcnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzEwMDQ0NCAmIDB4ZmUwMCB8IDB4MDFiNCB9Oj4yMGM7XCIgIyMjIDBvNjY0IC5ydy1ydy1yLS0gZmlsZSBvcGVuICMjI1xuICAgIGhlbHAgJ86pYnZmc19fMjgnXG4gICAgaGVscCAnzqlidmZzX18yOScsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDAwNzc1ICYgMHhmZTAwIHwgMHgwMTZkIH06PjIwYztcIiAjIyMgMG81NTUgZHIteHIteHIteCBmb2xkZXIgY2xvc2VkICMjI1xuICAgIGhlbHAgJ86pYnZmc19fMzAnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzA0MDU1NSAmIDB4ZmUwMCB8IDB4MDE2ZCB9Oj4yMGM7XCIgIyMjIDBvNTU1IGRyLXhyLXhyLXggZm9sZGVyIGNsb3NlZCAjIyNcbiAgICBoZWxwICfOqWJ2ZnNfXzMxJywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8xMDA0NDQgJiAweGZlMDAgfCAweDAxMjQgfTo+MjBjO1wiICMjIyAwbzQ0NCAuci0tci0tci0tIGZpbGUgY2xvc2VkICMjI1xuICAgICMgQGVxICggzqlidmZzX18zMiA9IC0+IGZhbHNlICksIGZhbHNlXG4gICAgIyMjXG4gICAgaGVscCAnzqlidmZzdG9fXzMzJywgXCJkcnd4cnd4ci14XCIsICggMG83NzUudG9TdHJpbmcgOCApLCAoICcweCcgKyAoIDBvNzc1LnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgNCwgJzAnIClcbiAgICBoZWxwICfOqWJ2ZnN0b19fMzQnLCBcIi5ydy1ydy1yLS1cIiwgKCAwbzY2NC50b1N0cmluZyA4ICksICggJzB4JyArICggMG82NjQudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA0LCAnMCcgKVxuICAgIGhlbHAgJ86pYnZmc3RvX18zNScsIFwiZHIteHIteHIteFwiLCAoIDBvNTU1LnRvU3RyaW5nIDggKSwgKCAnMHgnICsgKCAwbzU1NS50b1N0cmluZyAxNiApLnBhZFN0YXJ0IDQsICcwJyApXG4gICAgaGVscCAnzqlidmZzdG9fXzM2JywgXCIuci0tci0tci0tXCIsICggMG80NDQudG9TdHJpbmcgOCApLCAoICcweCcgKyAoIDBvNDQ0LnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgNCwgJzAnIClcbiAgICBoZWxwICfOqWJ2ZnN0b19fMzcnLCBcIj8/LT8/LT8/LT9cIiwgKCAwYjEwMV8xMDFfMTAxLnRvU3RyaW5nIDggKSwgKCAnMHgnICsgKCAwYjEwMV8xMDFfMTAxLnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgNCwgJzAnIClcbiAgICBoZWxwICfOqWJ2ZnN0b19fMzgnLCBcIj8/dz8/dz8/LT9cIiwgKCAwYjAxMF8wMTBfMDAwLnRvU3RyaW5nIDggKSwgKCAnMHgnICsgKCAwYjAxMF8wMTBfMDAwLnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgNCwgJzAnIClcbiAgICAjIyNcbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWNjZXNzX2ZzX3dpdGhfZGI6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgIHsgZXhlY2FTeW5jLCAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnZXhlY2EnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBTcWxpdGVmc19kYiBleHRlbmRzIERicmljXG4gICAgICAjIEBidWlsZDogW1xuICAgICAgIyAgIFNRTFwiXCJcIlxuICAgICAgIyAgICAgY3JlYXRlIHRhYmxlIG5vbmNvbmZvcm1fb25lICggYSB0ZXh0IHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAjICAgU1FMXCJcIlwiXG4gICAgICAjICAgICAtLSB0aGlzIGNvbW1lbnQgc2hvdWxkbid0IGJlIGhlcmVcbiAgICAgICMgICAgIGNyZWF0ZSB2aWV3IG5vbmNvbmZvcm1fdHdvIGFzIHNlbGVjdCAqIGZyb20gbm9uY29uZm9ybV9vbmU7XCJcIlwiXG4gICAgICAjICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgZ2V0X2ZzX29iamVjdHM6IFNRTFwiXCJcIlxuICAgICAgICAgIHNlbGVjdCAqIGZyb20gYmJfbGlzdDtcIlwiXCJcbiAgICAgIHdhbGtfZnNfb2JqZWN0czogLT4geWllbGQgZnJvbSBAc3RhdGVtZW50cy5nZXRfZnNfb2JqZWN0cy5pdGVyYXRlKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHsgcmVmX3BhdGgsXG4gICAgICBkYl9wYXRoLFxuICAgICAgbW91bnRfcGF0aCwgfSA9IGdldF9wYXRocygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzaGVsbF9jZmcgICA9IHsgY3dkOiByZWZfcGF0aCwgbGluZXM6IHRydWUsIH1cbiAgICBzaGVsbCAgICAgICA9ICggY21kLCBQLi4uICkgLT4gKCBleGVjYVN5bmMgY21kLCBQLCBzaGVsbF9jZmcgKS5zdGRvdXRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRiICAgICAgICAgID0gU3FsaXRlZnNfZGIub3BlbiBkYl9wYXRoXG4gICAgZGVidWcgJ86pYnZmc19fMzknLCBkYi5zdGF0ZW1lbnRzXG4gICAgcGF0aHMgICAgICAgPSBbXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZvciBsaW5lIGluIHNoZWxsICdzaG93LWxheW91dCcsIG1vdW50X3BhdGhcbiAgICAgICAgZWNobyBsaW5lXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIG1vZGUgPSAnY2xvc2UnXG4gICAgIyBtb2RlID0gJ29wZW4nXG4gICAgbW9kZSA9ICdub3RoaW5nJ1xuICAgIHN3aXRjaCBtb2RlXG4gICAgICB3aGVuICdvcGVuJyB0aGVuIGRvID0+XG4gICAgICAgIGRlYnVnICfOqWJ2ZnNfXzQwJywgZGIuZXhlY3V0ZSBTUUxcIlwiXCJcbiAgICAgICAgdXBkYXRlIG1ldGFkYXRhIHNldCBtb2RlID0gcy5vcGVuX21vZGVcbiAgICAgICAgICBmcm9tIG1ldGFkYXRhICAgICAgICAgICBhcyBtXG4gICAgICAgICAgam9pbiBiYl9zdGFuZGFyZF9tb2RlcyAgYXMgcyBvbiAoIG0uaWQgPSBzLmZpbGVfaWQgKTtcIlwiXCJcbiAgICAgICAgO251bGxcbiAgICAgIHdoZW4gJ2Nsb3NlJyB0aGVuIGRvID0+XG4gICAgICAgIGRlYnVnICfOqWJ2ZnNfXzQxJywgZGIuZXhlY3V0ZSBTUUxcIlwiXCJcbiAgICAgICAgdXBkYXRlIG1ldGFkYXRhIHNldCBtb2RlID0gcy5jbG9zZWRfbW9kZVxuICAgICAgICAgIGZyb20gbWV0YWRhdGEgICAgICAgICAgIGFzIG1cbiAgICAgICAgICBqb2luIGJiX3N0YW5kYXJkX21vZGVzICBhcyBzIG9uICggbS5pZCA9IHMuZmlsZV9pZCApO1wiXCJcIlxuICAgICAgICA7bnVsbFxuICAgICAgd2hlbiAnbm90aGluZycgdGhlbiBudWxsXG4gICAgICBlbHNlIHRocm93IG5ldyBFcnJvciBcInVua25vd24gbW9kZTogI3tycHIgbW9kZX1cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIGQgZnJvbSBkYi53YWxrX2ZzX29iamVjdHMoKVxuICAgICAgZnVsbF9wYXRoID0gUEFUSC5qb2luIG1vdW50X3BhdGgsIGQucGF0aFxuICAgICAgcGF0aHMucHVzaCBmdWxsX3BhdGhcbiAgICAgIHVyZ2UgJ86pYnZmc19fNDInLCBkLm1vZGVfbywgZC5wYXRoICMgeyBkLi4uLCBmdWxsX3BhdGgsIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3IgbGluZSBpbiBzaGVsbCAnc2hvdy1sYXlvdXQnLCBtb3VudF9wYXRoXG4gICAgICAgIGVjaG8gbGluZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNjcmlwdHNfWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICB7IGV4ZWNhU3luYywgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJ2V4ZWNhJ1xuICAgIHsgU2hlbGwsICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9idmZzJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgeyByZWZfcGF0aCxcbiAgICAgIGRiX3BhdGgsXG4gICAgICBtb3VudF9wYXRoLCB9ID0gZ2V0X3BhdGhzKClcbiAgICBzaGVsbF9jZmcgICA9IHsgY3dkOiByZWZfcGF0aCwgbGluZXM6IHRydWUsIG9ubHlfc3Rkb3V0OiB0cnVlLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBtYXRjaF9hbGxfZnNfbW91bnRzID0gKCBjZmcgKSAtPlxuICAgICAgUiAgICAgPSBbXVxuICAgICAgbGluZXMgPSBzaGVsbCB7IG9ubHlfc3Rkb3V0OiB0cnVlLCB9LCAnY2F0JywgJy9ldGMvbXRhYidcbiAgICAgIGZvciBsaW5lIGluIGxpbmVzXG4gICAgICAgIFsgZGV2aWNlLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdHlwZSwgICBdID0gbGluZS5zcGxpdCAvXFx4MjAvXG4gICAgICAgIGNvbnRpbnVlIGlmIGNmZy5kZXZpY2U/IGFuZCAoIGRldmljZSBpc250IGNmZy5kZXZpY2UgKVxuICAgICAgICBwYXRoICAgICAgICA9IGRlY29kZV9vY3RhbCBwYXRoXG4gICAgICAgIGNvbnRpbnVlIGlmIGNmZy5wYXRoPyAgIGFuZCAoIHBhdGggICBpc250IGNmZy5wYXRoICAgKVxuICAgICAgICBjb250aW51ZSBpZiBjZmcudHlwZT8gICBhbmQgKCB0eXBlICAgaXNudCBjZmcudHlwZSAgIClcbiAgICAgICAgUi5wdXNoIHsgZGV2aWNlLCBwYXRoLCB0eXBlLCB9XG4gICAgICByZXR1cm4gUlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaXNfbW91bnRlZCA9ICggY2ZnICkgLT5cbiAgICAgIHN3aXRjaCAoIG1vdW50cyA9IG1hdGNoX2FsbF9mc19tb3VudHMgY2ZnICkubGVuZ3RoXG4gICAgICAgIHdoZW4gMCB0aGVuIHJldHVybiBmYWxzZVxuICAgICAgICB3aGVuIDEgdGhlbiByZXR1cm4gdHJ1ZVxuICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlidmZzX180MyBleHBlY3RlZCAwIG9yIDEgbWF0Y2gsIGdvdCAje21vdW50cy5sZW5ndGh9OiAje3JwciBtb3VudHN9XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzaCA9IG5ldyBTaGVsbCgpXG4gICAgICBAdGhyb3dzICggzqlidmZzX180NCA9IC0+IHNoLl92YWxpZGF0ZV9jYWxsX2FyZ3VtZW50cyBudWxsICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgcG9kIG9yIGEgdGV4dCwgZ290IGEvXG4gICAgICBAdGhyb3dzICggzqlidmZzX180NSA9IC0+IHNoLl92YWxpZGF0ZV9jYWxsX2FyZ3VtZW50cyBbXSAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgcG9kIG9yIGEgdGV4dCwgZ290IGEvXG4gICAgICBAdGhyb3dzICggzqlidmZzX180NiA9IC0+IHNoLl92YWxpZGF0ZV9jYWxsX2FyZ3VtZW50cyB7fSAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dCwgZ290IGEvXG4gICAgICBAZXEgICAgICggzqlidmZzX180NyA9IC0+IHNoLl92YWxpZGF0ZV9jYWxsX2FyZ3VtZW50cyAnbHMnICAgICAgICAgICAgICAgKSwgeyBjZmc6IHsgY3dkOiByZWZfcGF0aCwgbGluZXM6IHRydWUsIH0sIGNtZDogJ2xzJywgcGFyYW1ldGVyczogW10gfVxuICAgICAgQGVxICAgICAoIM6pYnZmc19fNDggPSAtPiBzaC5fdmFsaWRhdGVfY2FsbF9hcmd1bWVudHMgJ2xzJywgJy1BbEYnICAgICAgICksIHsgY2ZnOiB7IGN3ZDogcmVmX3BhdGgsIGxpbmVzOiB0cnVlLCB9LCBjbWQ6ICdscycsIHBhcmFtZXRlcnM6IFsgJy1BbEYnLCBdIH1cbiAgICAgIEBlcSAgICAgKCDOqWJ2ZnNfXzQ5ID0gLT4gc2guX3ZhbGlkYXRlX2NhbGxfYXJndW1lbnRzICdscycsICctQWxGJywgJy4nICApLCB7IGNmZzogeyBjd2Q6IHJlZl9wYXRoLCBsaW5lczogdHJ1ZSwgfSwgY21kOiAnbHMnLCBwYXJhbWV0ZXJzOiBbICctQWxGJywgJy4nLCBdIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgc2ggPSBuZXcgU2hlbGwgc2hlbGxfY2ZnXG4gICAgICBkZWJ1ZyAnzqlidmZzX181MCcsIHNoLmNhbGwgJ2xzJ1xuICAgICAgZGVidWcgJ86pYnZmc19fNTEnLCBzaC5jYWxsICdncmVwJywgJy1QaScsICdzcWxpdGVmcycsICcvZXRjL210YWInXG4gICAgICB0cnkgaGVscCAnzqlidmZzX181MicsIHNoLmNhbGwgJ2dyZXAnLCAnLVBpJywgJ3NxbGl0ZWZzJywgJy9ldGMvbXRhYicgICAgICAgICBjYXRjaCBlIHRoZW4gd2FybiAnzqlidmZzX181MycsIHJldmVyc2UgZS5tZXNzYWdlXG4gICAgICB0cnkgaGVscCAnzqlidmZzX181NCcsIHNoLmNhbGwgJ2dyZXAnLCAnLVBpJywgJ3NxbGl0ZWZzWVlZWScsICcvZXRjL210YWInICAgICBjYXRjaCBlIHRoZW4gd2FybiAnzqlidmZzX181NScsIHJldmVyc2UgZS5tZXNzYWdlXG4gICAgICB0cnkgaGVscCAnzqlidmZzX181NicsIHNoLmNhbGwgJ2dyZXAnLCAnLVBpJywgJ3NxbGl0ZWZzWVlZWScsICcvZXRjL210YWJZWVlZJyBjYXRjaCBlIHRoZW4gd2FybiAnzqlidmZzX181NycsIHJldmVyc2UgZS5tZXNzYWdlXG4gICAgICA7bnVsbFxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzaCA9IG5ldyBTaGVsbCBzaGVsbF9jZmdcbiAgICAgIGluZm8gJ86pYnZmc19fNTgnLCBtYXRjaF9hbGxfZnNfbW91bnRzIHsgZGV2aWNlOiAnc3FsaXRlZnMnLCB9XG4gICAgICBpbmZvICfOqWJ2ZnNfXzU5JywgbWF0Y2hfYWxsX2ZzX21vdW50cyB7IGRldmljZTogJ3NxbGl0ZWZzJywgdHlwZTogJ3NxbGZzJywgfVxuICAgICAgaW5mbyAnzqlidmZzX182MCcsIG1hdGNoX2FsbF9mc19tb3VudHMgeyBkZXZpY2U6ICdzcWxpdGVmcycsIHR5cGU6ICdmdXNlJywgfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzaCA9IG5ldyBTaGVsbCBzaGVsbF9jZmdcbiAgICAgIGluZm8gJ86pYnZmc19fNjEnLCBpc19tb3VudGVkIHsgZGV2aWNlOiAnc3FsaXRlZnMnLCB9XG4gICAgICBpbmZvICfOqWJ2ZnNfXzYyJywgaXNfbW91bnRlZCB7IGRldmljZTogJ3NxbGl0ZWZzJywgdHlwZTogJ3NxbGZzJywgfVxuICAgICAgaW5mbyAnzqlidmZzX182MycsIGlzX21vdW50ZWQgeyBkZXZpY2U6ICdzcWxpdGVmcycsIHR5cGU6ICdmdXNlJywgfVxuICAgICAgdHJ5IGluZm8gJ86pYnZmc19fNjQnLCBpc19tb3VudGVkIHt9IGNhdGNoIGUgdGhlbiB3YXJuICfOqWJ2ZnNfXzY1JywgcmV2ZXJzZSBlLm1lc3NhZ2VcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIyNcbiAgICBPdXRwdXQgd2hlbiBtb3VudCBwb2ludCBuYW1lIGlzICdtIG8gdSBuIHQnOlxuICAgICAgWyAnc3FsaXRlZnMgL2hvbWUvZmxvdy9qenIvYnZmcy9tXFxcXDA0MG9cXFxcMDQwdVxcXFwwNDBuXFxcXDA0MHQgZnVzZSBydyxub3N1aWQsbm9kZXYscmVsYXRpbWUsdXNlcl9pZD0xMDAwLGdyb3VwX2lkPTEwMDAsZGVmYXVsdF9wZXJtaXNzaW9ucyxhbGxvd19vdGhlciAwIDAnIF1cbiAgICBPdXRwdXQgd2hlbiBtb3VudCBwb2ludCBuYW1lIGlzICfwq52AJzpcbiAgICAgIFsgJ3NxbGl0ZWZzIC9ob21lL2Zsb3cvanpyL2J2ZnMv8KudgCBmdXNlIHJ3LG5vc3VpZCxub2RldixyZWxhdGltZSx1c2VyX2lkPTEwMDAsZ3JvdXBfaWQ9MTAwMCxkZWZhdWx0X3Blcm1pc3Npb25zLGFsbG93X290aGVyIDAgMCcgXVxuICAgICMjI1xuICAgICMgc3FsaXRlZnMgL2hvbWUvZmxvdy9qenIvYnZmcy9tb3VudCBmdXNlIHJ3LG5vc3VpZCxub2RldixyZWxhdGltZSx1c2VyX2lkPTEwMDAsZ3JvdXBfaWQ9MTAwMCxkZWZhdWx0X3Blcm1pc3Npb25zLGFsbG93X290aGVyIDAgMFxuICAgICMgZ3JlcDogL2V0Yy9tdGFiWVlZWTogTm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeVxuICAgICMgICQkJCAgICAvLy8gMiDRhSAgYnZmcyBAIDEuMC4wIHBrZyAgYXQgMTE6MTU6MzZcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgdHJhc2ggYnZmcy5kYiAmJiBiaW4vc3FsaXRlLWZzIG1vdW50IC0tIC4vYnZmcy5kYiAmIGRpc293biAmJiBzcWxpdGUzIGJ2ZnMuZGIgXCIuZHVtcFwiID4gYnZmcy5kdW1wLnNxbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFzeW5jX3NoZWxsOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICB7ICQsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJ2V4ZWNhJ1xuICAgIHsgU2hlbGwsICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9idmZzJ1xuICAgIHsgQXN5bmNfamV0c3RyZWFtLFxuICAgICAgSmV0c3RyZWFtLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICB7IGxldHMsXG4gICAgICBmcmVlemUsICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2xldHNmcmVlemV0aGF0J1xuICAgIGNyZWF0ZV9nbG9iX21hdGNoZXIgICAgICAgICAgID0gcmVxdWlyZSAncGljb21hdGNoJ1xuICAgIHsgcmVnZXgsICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAncmVnZXgnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRlY29kZV9vY3RhbCA9ICggdGV4dCApIC0+IHRleHQucmVwbGFjZSAvKD88IVxcXFwpXFxcXChbMC03XXszfSkvZ3YsICggJDAsICQxICkgLT5cbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludCBwYXJzZUludCAkMSwgOFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBhd2FpdCAkKHt2ZXJib3NlOiAnZnVsbCd9KVwiY2F0IHBhY2thZ2UuanNvblwiXG4gICAgYXdhaXQgJCh7dmVyYm9zZTogJ2Z1bGwnfSlcImNhdCAuZ2l0aWdub3JlXCJcbiAgICBSID0gYXdhaXQgJCggeyBsaW5lczogdHJ1ZSwgdmVyYm9zZTogJ2Z1bGwnLCB9IClcImNhdCAuZ2l0aWdub3JlXCIucGlwZVwic29ydFwiXG4gICAgZGVidWcgJ86pYnZmc19fNjYnLCBSLnN0ZG91dFxuICAgIFIgPSBhd2FpdCBcXFxuICAgICAgJCggICAgICB7IGxpbmVzOiB0cnVlLCB2ZXJib3NlOiAnZnVsbCcsIH0gKVwiY2F0IC5naXRpZ25vcmVcIiBcXFxuICAgICAgLnBpcGUoICB7IGxpbmVzOiB0cnVlLCB2ZXJib3NlOiAnZnVsbCcsIH0gKVwic29ydFwiXG4gICAgZGVidWcgJ86pYnZmc19fNjcnLCAoIHJwciBSLnN0ZG91dCApWyAuLiAxMDggXSArICcuLi4nXG4gICAgUiA9IGF3YWl0ICQoIHsgbGluZXM6IHRydWUsIHZlcmJvc2U6ICdmdWxsJywgfSApXCJjYXQgLmdpdGlnbm9yZVwiLnBpcGVcInNvcnRcIi5waXBlXCJoZWFkIC1uMlwiXG4gICAgZGVidWcgJ86pYnZmc19fNjgnLCAoIHJwciBSLnN0ZG91dCApWyAuLiAxMDggXSArICcuLi4nXG4gICAgUiA9IGF3YWl0ICQoIHsgbGluZXM6IHRydWUsIHZlcmJvc2U6ICdmdWxsJywgfSApXCJtb3VudFwiXG4gICAgZGVidWcgJ86pYnZmc19fNjknLCAoIHJwciBSLnN0ZG91dCApWyAuLiAxMDggXSArICcuLi4nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBhd2FpdCBkbyA9PlxuICAgICAgIyBmYWxsYmFjayAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgICAgIyMjIFRBSU5UIHRoZSBvdXRwdXQgb2YgYG1vdW50YCBpcyBub3QgZXNjYXBlZCBhbmQgbm90IHF1b3RlZCwgc28gdGhlcmUncyBsb3RzIG9mIG9wcG9ydHVuaXRpZXNcbiAgICAgIGZvciBwYXRocyBhbmQgZGV2aWNlIG5hbWVzIHdpdGggc3BhY2VzIG9yIHBhcmVucyB0byBjYXVzZSB0aGUgbWF0Y2ggdG8gZmFpbDsgY29uc2lkZXIgdG8gdXNlXG4gICAgICBgY2F0IC9ldGMvbXRhYmAgaW5zdGVhZCB3aGljaCB1c2VzIG9jdGFsIGVzY2FwZXMgZm9yIGZpbGVuYW1lcyB3aXRoIHNwYWNlcy4gIyMjXG4gICAgICBwYXR0ZXJuICAgPSAvLy9cbiAgICAgICAgXlxuICAgICAgICAgICAgICAgICAgICAgICAgKD88ZGV2aWNlPiAgIFteXFx4MjBdKyApXG4gICAgICAgIFxceDIwIG9uICAgXFx4MjAgICg/PHBhdGg+ICAgICAuKz8gICAgICApXG4gICAgICAgIFxceDIwIHR5cGUgXFx4MjAgICg/PHR5cGU+ICAgICBbXlxceDIwXSsgKVxuICAgICAgICBcXHgyMCBcXCggICAgICAgICAoPzxvcHRpb25zPiAgW15cXHgyMF0rICkgXFwpXG4gICAgICAgICQgLy8vdlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzaF9tb3VudF9qZXQgPSBuZXcgSmV0c3RyZWFtIHsgZW1wdHlfY2FsbDogbnVsbCwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzaF9tb3VudF9qZXQucHVzaCAoIE5OICkgLT5cbiAgICAgICAgIyB7IHN0ZG91dCwgfSA9IGF3YWl0ICQoIHsgbGluZXM6IHRydWUsIHZlcmJvc2U6ICdub25lJywgfSApXCJtb3VudFwiXG4gICAgICAgIHlpZWxkIGZyb20gR1VZLmZzLndhbGtfbGluZXMgJy9ldGMvbXRhYidcbiAgICAgICAgIyAgIGRlYnVnICfOqWJ2ZnNfXzcwJyxcbiAgICAgICAgIyAgICBsaW5lLnNwbGl0ICdcXHgyMCdcbiAgICAgICAgIyBmb3IgbGluZSBpbiBzdGRvdXRcbiAgICAgICAgIyAgIHlpZWxkIGxpbmVcbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2hfbW91bnRfamV0LnB1c2ggKCBsaW5lICkgLT5cbiAgICAgICAgcmV0dXJuIG51bGwgaWYgbGluZSBpcyAnJ1xuICAgICAgICBbIGRldmljZVxuICAgICAgICAgIHBhdGhcbiAgICAgICAgICB0eXBlXG4gICAgICAgICAgb3B0aW9ucyBdID0gbGluZS5zcGxpdCAnXFx4MjAnXG4gICAgICAgIGlmIFsgZGV2aWNlLCBwYXRoLCB0eXBlLCBvcHRpb25zLCBdLnNvbWUgKCBlICkgLT4gKCBub3QgZT8gKSBvciAoIGUgaXMgJycgKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pYnZmc19fNzEgdW5hYmxlIHRvIHBhcnNlIGxpbmUgI3tycHIgbGluZX1cIlxuICAgICAgICB5aWVsZCBmcmVlemUgeyBkZXZpY2UsIHBhdGgsIHR5cGUsIG9wdGlvbnMsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2hfbW91bnRfamV0LnB1c2ggKCBkICkgLT5cbiAgICAgICAgeWllbGQgbGV0cyBkLCAoIGQgKSAtPlxuICAgICAgICAgIGQub3B0aW9ucyA9IGQub3B0aW9ucy5zcGxpdCAnLCdcbiAgICAgICAgICBkLnBhdGggICAgPSBkZWNvZGVfb2N0YWwgZC5wYXRoXG4gICAgICAgIDtudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGNyZWF0ZV9yZWdleF9tYXRjaGVyID0gKCBwYXR0ZXJuICkgLT5cbiAgICAgICAgcmV0dXJuICggLT4gdHJ1ZSApIHVubGVzcyBwYXR0ZXJuP1xuICAgICAgICBzd2l0Y2ggdHlwZSA9IHR5cGVfb2YgcGF0dGVyblxuICAgICAgICAgIHdoZW4gJ3JlZ2V4J1xuICAgICAgICAgICAgcmUgPSBwYXR0ZXJuXG4gICAgICAgICAgd2hlbiAndGV4dCdcbiAgICAgICAgICAgIHJlID0gcmVnZXhcIiN7cGF0dGVybn1cIlxuICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yIFwizqlidmZzX183MiBleHBlY3RlZCBhIHJlZ2V4IG9yIGEgdGV4dCwgZ290IGEgI3t0eXBlfVwiXG4gICAgICAgIHJldHVybiAoIHggKSAtPiByZS5sYXN0SW5kZXggPSAwOyByZS50ZXN0IHhcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgd2Fsa19zaF9tb3VudF9tYXRjaGVzID0gKHsgZGV2aWNlID0gbnVsbCwgcGF0aCA9IG51bGwsIGdsb2IgPSBudWxsLCB0eXBlID0gbnVsbCwgfT17fSkgLT5cbiAgICAgICAgaWYgZ2xvYj9cbiAgICAgICAgICBpZiBwYXRoP1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlidmZzX183MyBleHBlY3RlZCBlaXRoZXIgZ2xvYiBvciBwYXRoLCBnb3QgYm90aFwiXG4gICAgICAgICAgbWF0Y2hfZ2xvYiAgPSBjcmVhdGVfZ2xvYl9tYXRjaGVyIGdsb2JcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG1hdGNoX2dsb2IgID0gLT4gdHJ1ZVxuICAgICAgICBtYXRjaF9kZXZpY2UgID0gY3JlYXRlX3JlZ2V4X21hdGNoZXIgZGV2aWNlXG4gICAgICAgIG1hdGNoX3BhdGggICAgPSBjcmVhdGVfcmVnZXhfbWF0Y2hlciBwYXRoXG4gICAgICAgIG1hdGNoX3R5cGUgICAgPSBjcmVhdGVfcmVnZXhfbWF0Y2hlciB0eXBlXG4gICAgICAgICMjIyBUQUlOVCBhbGxvdyByZWdleGVzICMjI1xuICAgICAgICBmb3IgZCBmcm9tIHNoX21vdW50X2pldC53YWxrKClcbiAgICAgICAgICBjb250aW51ZSB1bmxlc3MgbWF0Y2hfZGV2aWNlICBkLmRldmljZVxuICAgICAgICAgIGNvbnRpbnVlIHVubGVzcyBtYXRjaF9nbG9iICAgIGQucGF0aFxuICAgICAgICAgIGNvbnRpbnVlIHVubGVzcyBtYXRjaF9wYXRoICAgIGQucGF0aFxuICAgICAgICAgIGNvbnRpbnVlIHVubGVzcyBtYXRjaF90eXBlICAgIGQudHlwZVxuICAgICAgICAgIHlpZWxkIGRcbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaGFzX21vdW50ID0gKCBQLi4uICkgLT5cbiAgICAgICAgbW91bnRzID0gWyAoIHdhbGtfc2hfbW91bnRfbWF0Y2hlcyBQLi4uICkuLi4sIF1cbiAgICAgICAgcmV0dXJuIHN3aXRjaCBjb3VudCA9IG1vdW50cy5sZW5ndGhcbiAgICAgICAgICB3aGVuIDAgdGhlbiBmYWxzZVxuICAgICAgICAgIHdoZW4gMSB0aGVuIHRydWVcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlidmZzX183NCBleHBlY3RlZCB6ZXJvIG9yIG9uZSByZXN1bHRzLCBnb3QgI3tjb3VudH1cIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGZvciBhd2FpdCBkIGZyb20gd2Fsa19zaF9tb3VudF9tYXRjaGVzIHsgZGV2aWNlOiAnc3FsaXRlZnMnLCB9XG4gICAgICAjIGZvciBhd2FpdCBkIGZyb20gd2Fsa19zaF9tb3VudF9tYXRjaGVzKClcbiAgICAgICMgICB1cmdlICfOqWJ2ZnNfXzc1JywgZFxuICAgICAgcmVzdWx0ID0gWyAoIGQgZm9yIGF3YWl0IGQgZnJvbSB3YWxrX3NoX21vdW50X21hdGNoZXMgeyBkZXZpY2U6ICd0bXBmcycsIH0gKS4uLiwgXVxuICAgICAgQGVxICggzqlidmZzX183NiA9IC0+IHJlc3VsdC5sZW5ndGggPiAxICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZXJyb3IgPSBudWxsXG4gICAgICB0cnkgYXdhaXQgaGFzX21vdW50IHsgZGV2aWNlOiAndG1wZnMnLCB9IGNhdGNoIGVycm9yXG4gICAgICAgIEBlcSAoIM6pYnZmc19fNzcgPSAtPiAvZXhwZWN0ZWQgemVybyBvciBvbmUgcmVzdWx0cywgZ290IFxcZCsvLnRlc3QgZXJyb3IubWVzc2FnZSApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJ2ZnNfXzc4ID0gLT4gZXJyb3IgaXMgbnVsbCApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWJ2ZnNfXzc5ID0gLT4gaGFzX21vdW50IHsgcGF0aDogJy9kZXYvc2htJywgICAgICAgfSApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJ2ZnNfXzgwID0gLT4gaGFzX21vdW50IHsgcGF0aDogL15cXC9kZXZcXC9zaG0kL3YsICB9ICksIHRydWVcbiAgICAgIEBlcSAoIM6pYnZmc19fODEgPSAtPiBoYXNfbW91bnQgeyBnbG9iOiAnLyovc2htJywgICAgICAgICB9ICksIHRydWVcbiAgICAgIEBlcSAoIM6pYnZmc19fODIgPSAtPiBoYXNfbW91bnQgeyBwYXRoOiAnL25vL3N1Y2gvcGF0aCcsICB9ICksIGZhbHNlXG4gICAgICAjIyNcbiAgICAgIGluIC9ldGMvbXRhYjpcbiAgICAgICgxKSAvaG9tZS9mbG93L2p6ci9idmZzL21vdVxcMTM0bnQgaW5zdGVhZCBvZiAvaG9tZS9mbG93L2p6ci9idmZzL21vdVxcMDEydFxuICAgICAgKDIpIC9ob21lL2Zsb3cvanpyL2J2ZnMvbW91XFwxMzR0dCBpbnN0ZWFkIG9mIC9ob21lL2Zsb3cvanpyL2J2ZnMvbW91XFwwMTF0XG4gICAgICAoMykgL2hvbWUvZmxvdy9qenIvYnZmcy9tb3VcXDEzNHgwMXQgaW5zdGVhZCBvZiAvaG9tZS9mbG93L2p6ci9idmZzL21vdVxcMDAxdFxuICAgICAgKDQpIC9ob21lL2Zsb3cvanpyL2J2ZnMvbW91XFwxMzR4N2Z0IGluc3RlYWQgb2YgL2hvbWUvZmxvdy9qenIvYnZmcy9tb3VcXDE3N3RcbiAgICAgICg1KSAvaG9tZS9mbG93L2p6ci9idmZzL21vdVxcMTM0dTIwMjl0IGxpdGVyYWxseSAnL2hvbWUvZmxvdy9qenIvYnZmcy9tb3VcXHUyMDI5dCcgd2l0aCB0aGUgYmFja3NsYXNoIGVzY2FwZWRcbiAgICAgIHdoZXJlICdcXDEzNCcgaXMgMHg1YyBgXFxcXGAgKGJhY2tzbGFzaClcblxuICAgICAgYG1vdW50YCBjb21tYW5kIG91dHB1dDpcbiAgICAgICg0KSAvaG9tZS9mbG93L2p6ci9idmZzL21vdVxceDdmdFxuICAgICAgKDUpIC9ob21lL2Zsb3cvanpyL2J2ZnMvbW91XFx1MjAyOXRcblxuICAgICAgYG1vdW50YCAnaGVscGZ1bGx5JyByZXNvbHZlcyB0aGUgdG9wLWxldmVsIGVzY2FwaW5nIChpLmUuIHRoZSBvY3RhbCBlc2NhcGVzKSBidXQgbGVhdmVzIHRoZSBzeW1ib2xpY1xuICAgICAgYFxcbmAsIGBcXHRgLCBgXFx4Li5gLCBgXFx1Li4uLmAgaW4gcGxhY2U7IHVuZm9ydHVuYXRlbHksIHRoaXMgcmVzdWx0cyBpbiBmaWxlbmFtZXMgd2hlcmUgdGhlIG1vc3RcbiAgICAgIG5vdG9yaW91cyBvZmZlbmRlcuKAlEFTQ0lJIHNwYWNl4oCUaXMgbGVmdCB1bmVzY2FwZWQsIHdpdGggbm8gcXVvdGVzIGFyb3VuZCB0aGUgcGF0aCBhbmQgbm8gd2F5IHRvIHNhZmVseVxuICAgICAgcmVjb25zdHJ1Y3QgdGhlIHBhdGggZXhjZXB0IG1hdGNoaW5nIG9uIGhvdyBpdCBwcm9iYWJseSBlbmRzICh3aXRoIGEgYHR5cGUgLi4uYCBhbmQgYSBwYXJlbnRoZXNpemVkXG4gICAgICBsaXN0IG9mIG9wdGlvbnMgdGhhdCBob3BlZnVsbHkgZG9uJ3QgdXNlIGFueSBzcGVjaWFsIGNoYXJhY3RlcnMpLlxuXG4gICAgICAjIyNcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiMgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4jIGVuc3VyZV9lbXB0eV9kaXIgPSAoIHBhdGggKSAtPlxuIyAgIHRyeSBhd2FpdCByZXN1bHQgPSAkKCB7IHJlamVjdDogZmFsc2UsIH0gKVwidHJhc2ggI3twYXRofVwiIGNhdGNoIGVycm9yXG4jICAgICBkZWJ1ZyAnzqlidmZzX184MycsIHJwciBlcnJvci5leGl0Q29kZVxuIyAgICAgZGVidWcgJ86pYnZmc19fODQnLCBycHIgZXJyb3IubmFtZVxuIyAgICAgZGVidWcgJ86pYnZmc19fODUnLCBycHIgZXJyb3IuY29kZVxuIyAgICAgZGVidWcgJ86pYnZmc19fODYnLCBycHIgZXJyb3IubWVzc2FnZVxuIyAgICAgZGVidWcgJ86pYnZmc19fODcnLCBycHIgZXJyb3Iub3JpZ2luYWxNZXNzYWdlXG4jICAgICBkZWJ1ZyAnzqlidmZzX184OCcsIHJwciBlcnJvci5jYXVzZVxuIyAgICAgcHJvY2Vzcy5leGl0IDExMVxuIyAgICAgdGhyb3cgZXJyb3JcbiMgICBpbmZvICfOqWJ2ZnNfXzg5JywgcnByIHJlc3VsdFxuIyAgIGluZm8gJ86pYnZmc19fOTAnLCBycHIgcmVzdWx0Py5leGl0Q29kZVxuIyAgIGluZm8gJ86pYnZmc19fOTEnLCBycHIgcmVzdWx0Py5uYW1lXG4jICAgaW5mbyAnzqlidmZzX185MicsIHJwciByZXN1bHQ/LmNvZGVcbiMgICBpbmZvICfOqWJ2ZnNfXzkzJywgcnByIHJlc3VsdD8ubWVzc2FnZVxuIyAgIGluZm8gJ86pYnZmc19fOTQnLCBycHIgcmVzdWx0Py5vcmlnaW5hbE1lc3NhZ2VcbiMgICBpbmZvICfOqWJ2ZnNfXzk1JywgcnByIHJlc3VsdD8uY2F1c2VcbiMgICA7bnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9fY3JlYXRlX21vdW50X2ZvbGRlcnNfd2l0aF9zdHJhbmdlX25hbWVzID0gLT5cbiAgeyByZWZfcGF0aCxcbiAgICBkYl9wYXRoLFxuICAgIGFzc2V0c19wYXRoLFxuICAgIGFyZW5hX3BhdGgsXG4gICAgbW91bnRfcGF0aCwgfSA9IGdldF9wYXRocygpXG4gICMgZGVidWcgJ86pYnZmc19fOTYnLCB7IGFzc2V0c19wYXRoLCB9XG4gICMgZGVidWcgJ86pYnZmc19fOTcnLCB7IGFyZW5hX3BhdGgsIH1cbiAgIyBhd2FpdCBlbnN1cmVfZW1wdHlfZGlyIGFyZW5hX3BhdGhcbiAgeyBta2RpcnAsIH0gPSByZXF1aXJlICdta2RpcnAnXG4gICMgZGVidWcgJ86pYnZmc19fOTgnLCBta2RpcnBcbiAgYXdhaXQgbWtkaXJwIFBBVEguam9pbiBhcmVuYV9wYXRoLCAndGVzdCdcbiAgYXdhaXQgbWtkaXJwIFBBVEguam9pbiBhcmVuYV9wYXRoLCAnw6TDtsO8J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICdtb3VcXG50J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICdtb3UgdCdcbiAgYXdhaXQgbWtkaXJwIFBBVEguam9pbiBhcmVuYV9wYXRoLCAnbW91KnQnXG4gIGF3YWl0IG1rZGlycCBQQVRILmpvaW4gYXJlbmFfcGF0aCwgJ21vdT90J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICdtb3XwrLqxdCdcbiAgYXdhaXQgbWtkaXJwIFBBVEguam9pbiBhcmVuYV9wYXRoLCAnbW9144CAdCdcbiAgYXdhaXQgbWtkaXJwIFBBVEguam9pbiBhcmVuYV9wYXRoLCAnbW914oCodCdcbiAgYXdhaXQgbWtkaXJwIFBBVEguam9pbiBhcmVuYV9wYXRoLCAnbW914oCpdCdcbiAgYXdhaXQgbWtkaXJwIFBBVEguam9pbiBhcmVuYV9wYXRoLCAnbW914oCqdCdcbiAgYXdhaXQgbWtkaXJwIFBBVEguam9pbiBhcmVuYV9wYXRoLCAnbW914oCrdCdcbiAgYXdhaXQgbWtkaXJwIFBBVEguam9pbiBhcmVuYV9wYXRoLCAnbW914oCsdCdcbiAgYXdhaXQgbWtkaXJwIFBBVEguam9pbiBhcmVuYV9wYXRoLCAnbW914oCtdCdcbiAgYXdhaXQgbWtkaXJwIFBBVEguam9pbiBhcmVuYV9wYXRoLCAnbW914oCudCdcbiAgYXdhaXQgbWtkaXJwIFBBVEguam9pbiBhcmVuYV9wYXRoLCAnYVxceDAxeidcbiAgYXdhaXQgbWtkaXJwIFBBVEguam9pbiBhcmVuYV9wYXRoLCAnYVxcXFx4MDF6J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICdtb3VcXHR0J1xuIyBkcnd4cnd4ci14ICAgICAtIGZsb3cgMjAyNS0xMS0xMiAxMDowNSAtLSAtIC0gICAgbW91Km50XG4jIGRyd3hyd3hyLXggICAgIC0gZmxvdyAyMDI1LTExLTEyIDEwOjA1IC0tIC0gLSAgICBtb3U/bnRcbiMgZHJ3eHJ3eHJ3eCAgICAgLSByb290IDIwMjUtMTEtMDggMTY6MDIgLS0gLSAtICAgIG1vdVxcMDEydFxuIyBkcnd4cnd4ci14ICAgICAtIGZsb3cgMjAyNS0xMS0xMiAxMDowNSAtLSAtIC0gICAgbW91XFxudFxuIyBkcnd4cnd4ci14ICAgICAtIGZsb3cgMjAyNS0xMS0xMiAxMDoxNCAtLSAtIC0gICAgbW91XFx0dFxuIyBkcnd4cnd4ci14ICAgICAtIGZsb3cgMjAyNS0xMS0xMiAxMDoyNiAtLSAtIC0gICAgbW91XFx1MjAyOXRcbiMgZHJ3eHJ3eHIteCAgICAgLSBmbG93IDIwMjUtMTEtMTIgMTA6MTUgLS0gLSAtICAgIG1vdVxceDAxdFxuIyBkcnd4cnd4ci14ICAgICAtIGZsb3cgMjAyNS0xMS0xMiAxMDoyMSAtLSAtIC0gICAgbW91XFx4N2Z0XG4jIGRyd3hyd3hyLXggICAgIC0gZmxvdyAyMDI1LTExLTEyIDEwOjIzIC0tIC0gLSAgICBtb3VcXHg4MHRcbiMgZHJ3eHJ3eHIteCAgICAgLSBmbG93IDIwMjUtMTEtMDcgMDk6MjUgLUkgLSAtICAgIG1vdW50XG4jIGRyd3hyd3hyLXggICAgIC0gZmxvdyAyMDI1LTExLTA5IDExOjUwIC0tIC0gLSAgICAnbW91IHQnXG5cbiAgO251bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGF3YWl0ICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS5hc3luY190ZXN0IEB0YXNrc1xuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgYWNjZXNzX2ZzX3dpdGhfZGI6IEB0YXNrcy5hY2Nlc3NfZnNfd2l0aF9kYiwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgc2NyaXB0c19ZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVk6IEB0YXNrcy5zY3JpcHRzX1lZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWSwgfVxuICAjIGF3YWl0ICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS5hc3luY190ZXN0IHsgYXN5bmNfc2hlbGw6IEB0YXNrcy5hc3luY19zaGVsbCwgfVxuICAjIGF3YWl0IGRlbW9fY3JlYXRlX21vdW50X2ZvbGRlcnNfd2l0aF9zdHJhbmdlX25hbWVzKClcblxuICAjICdhbHBoYXxiZXRhfGdhbW1hfGRlbHRhfHx6ZXRhfCdcblxuXG4iXX0=
