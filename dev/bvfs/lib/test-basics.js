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
      var Bsql3, Bvfs, Dbric, SFMODULES, SQL, arena_path, assets_path, db_path, internals, mount_path, ref_path, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      ({ref_path, db_path, mount_path, assets_path, arena_path} = get_paths());
      Bsql3 = require('better-sqlite3');
      Bvfs = (function() {
        //=======================================================================================================
        class Bvfs extends Dbric {};

        Bvfs.db_class = Bsql3;

        return Bvfs;

      }).call(this);
      (() => {        //.......................................................................................................
        var bvfs, eol, file_id, line, line_nr, path, read_lines, read_metadata, size, y, z;
        return null;
        //.....................................................................................................
        // meanings.txt L 11761
        bvfs = Bvfs.open(db_path);
        read_metadata = SQL`select file_id, path, name, size from bv_paths where type in ( 'file' );`;
        read_lines = SQL`select line_nr, line, eol from bv_lines where file_id = $file_id order by line_nr;`;
        for (y of bvfs.walk(read_metadata)) {
          ({file_id, path, size} = y);
          if (path !== 'README.md') {
            continue;
          }
// continue unless path is 'meanings.txt'
          for (z of bvfs.walk(read_lines, {file_id})) {
            ({line_nr, line, eol} = z);
            process.stdout.write(line + eol);
          }
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        /* TAINT compare line counts with those obtained with `walk_lines_with_positions()` */
        var bvfs, byte_count, eol, file_id, line, line_count, line_nr, path, read_lines, read_metadata, size, y, z, Ωbvfs___5;
        bvfs = Bvfs.open(db_path);
        read_metadata = SQL`select file_id, path, name, size from bv_paths where type in ( 'file' );`;
        read_lines = SQL`select line_nr, line, eol from bv_lines where file_id = $file_id order by line_nr;`;
        for (y of bvfs.walk(read_metadata)) {
          ({file_id, path, size} = y);
          // continue unless path is 'README.md'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsNENBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSxXQUFSOztFQUM1QixDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSxPQUFSLENBQTVCLEVBdEJBOzs7RUF5QkEsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQ1osUUFBQSxVQUFBLEVBQUEsV0FBQSxFQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUEsVUFBQSxFQUFBO0lBQUUsWUFBQSxHQUFnQixJQUFJLENBQUMsT0FBTCxDQUFhLFNBQWIsRUFBd0IsVUFBeEI7SUFDaEIsUUFBQSxHQUFnQixJQUFJLENBQUMsSUFBTCxDQUFVLFlBQVYsRUFBd0IsV0FBeEI7SUFDaEIsT0FBQSxHQUFnQixJQUFJLENBQUMsSUFBTCxDQUFVLFFBQVYsRUFBb0IsU0FBcEI7SUFDaEIsVUFBQSxHQUFnQixJQUFJLENBQUMsSUFBTCxDQUFVLFFBQVYsRUFBb0IsT0FBcEI7SUFDaEIsV0FBQSxHQUFnQixJQUFJLENBQUMsSUFBTCxDQUFVLFlBQVYsRUFBd0IsYUFBeEI7SUFDaEIsVUFBQSxHQUFnQixJQUFJLENBQUMsSUFBTCxDQUFVLFlBQVYsRUFBd0IsWUFBeEI7QUFDaEIsV0FBTyxDQUFFLFFBQUYsRUFBWSxPQUFaLEVBQXFCLFVBQXJCLEVBQWlDLFdBQWpDLEVBQThDLFVBQTlDO0VBUEcsRUF6Qlo7Ozs7O0VBc0NBLElBQUMsQ0FBQSxLQUFELEdBR0UsQ0FBQTs7SUFBQSxLQUFBLEVBQU8sUUFBQSxDQUFBLENBQUE7QUFDVCxVQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsRUFBQSxXQUFBLEVBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxVQUFBLEVBQUEsUUFBQSxFQUFBO01BQUksU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsUUFBUSxDQUFDLGVBQW5CLENBQUEsQ0FBOUI7TUFDQSxDQUFBLENBQUUsS0FBRixFQUNFLEdBREYsRUFFRSxTQUZGLENBQUEsR0FFOEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFuQixDQUFBLENBRjlCO01BR0EsQ0FBQSxDQUFFLFFBQUYsRUFDRSxPQURGLEVBRUUsVUFGRixFQUdFLFdBSEYsRUFJRSxVQUpGLENBQUEsR0FJOEIsU0FBQSxDQUFBLENBSjlCO01BTUcsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxVQUFBLEVBQUEsYUFBQSxFQUFBLENBQUEsRUFBQTtRQUFNLElBQUEsR0FBZ0IsS0FBSyxDQUFDLElBQU4sQ0FBVyxPQUFYO1FBQ2hCLGFBQUEsR0FBZ0IsR0FBRyxDQUFBLHdFQUFBO1FBQ25CLFVBQUEsR0FBZ0IsR0FBRyxDQUFBLHlFQUFBO1FBQ25CLEtBQUEsNkJBQUE7V0FBSSxDQUFFLE9BQUYsRUFBVyxJQUFYO1VBQ0YsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBRSxPQUFGLEVBQVcsSUFBWCxDQUFsQjtVQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7WUFBRyxJQUFLLE9BQUEsS0FBVyxDQUFoQjtxQkFBMkIsSUFBQSxLQUFRLElBQW5DO2FBQUEsTUFBQTtxQkFBZ0QsSUFBSSxDQUFFLENBQUYsQ0FBSixLQUFlLElBQS9EOztVQUFILENBQWQsQ0FBSixFQUE2RixJQUE3RjtRQUZGO2VBR0M7TUFQQSxDQUFBLElBWFA7O2FBb0JLO0lBckJJLENBQVA7O0lBd0JBLFNBQUEsRUFBVyxRQUFBLENBQUEsQ0FBQTtBQUNiLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsU0FBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEVBQUEsV0FBQSxFQUFBLE9BQUEsRUFBQSxTQUFBLEVBQUEsVUFBQSxFQUFBLFFBQUEsRUFBQTtNQUFJLFNBQUEsR0FBOEIsT0FBQSxDQUFRLG1DQUFSO01BQzlCLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBOEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQTlCO01BQ0EsQ0FBQSxDQUFFLEtBQUYsRUFDRSxHQURGLEVBRUUsU0FGRixDQUFBLEdBRThCLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBbkIsQ0FBQSxDQUY5QjtNQUdBLENBQUEsQ0FBRSxRQUFGLEVBQ0UsT0FERixFQUVFLFVBRkYsRUFHRSxXQUhGLEVBSUUsVUFKRixDQUFBLEdBSThCLFNBQUEsQ0FBQSxDQUo5QjtNQUtBLEtBQUEsR0FBOEIsT0FBQSxDQUFRLGdCQUFSO01BRXhCOztRQUFOLE1BQUEsS0FBQSxRQUFtQixNQUFuQixDQUFBOztRQUNFLElBQUMsQ0FBQSxRQUFELEdBQVc7Ozs7O01BRVYsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxVQUFBLEVBQUEsYUFBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUE7QUFBTSxlQUFPLEtBQWI7OztRQUdNLElBQUEsR0FBZ0IsSUFBSSxDQUFDLElBQUwsQ0FBVSxPQUFWO1FBQ2hCLGFBQUEsR0FBZ0IsR0FBRyxDQUFBLHdFQUFBO1FBQ25CLFVBQUEsR0FBZ0IsR0FBRyxDQUFBLGtGQUFBO1FBQ25CLEtBQUEsNkJBQUE7V0FBSSxDQUFFLE9BQUYsRUFBVyxJQUFYLEVBQWlCLElBQWpCO1VBQ0YsSUFBZ0IsSUFBQSxLQUFRLFdBQXhCO0FBQUEscUJBQUE7V0FBUjs7VUFFUSxLQUFBLHFDQUFBO2FBQUksQ0FBRSxPQUFGLEVBQVcsSUFBWCxFQUFpQixHQUFqQjtZQUNGLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBZixDQUF1QixJQUFBLEdBQU8sR0FBOUI7VUFERjtRQUhGO2VBS0M7TUFaQSxDQUFBO01BZUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBOztBQUNQLFlBQUEsSUFBQSxFQUFBLFVBQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxVQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxVQUFBLEVBQUEsYUFBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBO1FBQU0sSUFBQSxHQUFnQixJQUFJLENBQUMsSUFBTCxDQUFVLE9BQVY7UUFDaEIsYUFBQSxHQUFnQixHQUFHLENBQUEsd0VBQUE7UUFDbkIsVUFBQSxHQUFnQixHQUFHLENBQUEsa0ZBQUE7UUFDbkIsS0FBQSw2QkFBQTtXQUFJLENBQUUsT0FBRixFQUFXLElBQVgsRUFBaUIsSUFBakIsT0FDVjs7VUFDUSxVQUFBLEdBQWM7VUFDZCxVQUFBLEdBQWM7VUFDZCxLQUFBLHFDQUFBO2FBQUksQ0FBRSxPQUFGLEVBQVcsSUFBWCxFQUFpQixHQUFqQjtZQUNGLElBQTZDLFVBQUEsR0FBYSxFQUExRDtjQUFBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUUsSUFBRixFQUFRLE9BQVIsRUFBaUIsSUFBakIsQ0FBbEIsRUFBQTs7WUFDQSxVQUFBO1lBQ0EsVUFBQSxJQUFjLE1BQU0sQ0FBQyxVQUFQLENBQW9CLElBQUEsR0FBTyxHQUEzQixFQUFrQyxPQUFsQztVQUhoQjtVQUlBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUUsSUFBRixFQUFRLElBQVIsRUFBYyxVQUFkLENBQWxCO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBRztVQUFILENBQWQsQ0FBSixFQUFtQyxJQUFuQztRQVRGO2VBVUM7TUFkQSxDQUFBLElBOUJQOzthQThDSztJQS9DUTtFQXhCWCxFQXpDRjs7Ozs7RUFzSEEsSUFBQyxDQUFBLFNBQUQsR0FHRSxDQUFBOztJQUFBLE1BQUEsRUFBUSxRQUFBLENBQUEsQ0FBQTtBQUNWLFVBQUEsU0FBQSxFQUFBLG1CQUFBLEVBQUE7TUFBSSxTQUFBLEdBQThCLE9BQUEsQ0FBUSxtQ0FBUjtNQUM5QixDQUFBLENBQUUsT0FBRixDQUFBLEdBQThCLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBbkIsQ0FBQSxDQUE5QixFQURKOzs7OztNQU1JLG1CQUFBLEdBQXNCO1FBQ3BCO1VBQUUsSUFBQSxFQUFNLFFBQVI7VUFBbUIsSUFBQSxFQUFRLEdBQTNCO1VBQWdDLElBQUEsRUFBTTtRQUF0QyxDQURvQjtRQUVwQjtVQUFFLElBQUEsRUFBTSxRQUFSO1VBQW1CLElBQUEsRUFBTSxLQUF6QjtVQUFnQyxJQUFBLEVBQU07UUFBdEMsQ0FGb0I7UUFHcEI7VUFBRSxJQUFBLEVBQU0sUUFBUjtVQUFtQixJQUFBLEVBQVEsR0FBM0I7VUFBZ0MsSUFBQSxFQUFNO1FBQXRDLENBSG9CO1FBSXBCO1VBQUUsSUFBQSxFQUFNLFFBQVI7VUFBbUIsSUFBQSxFQUFNLEtBQXpCO1VBQWdDLElBQUEsRUFBTTtRQUF0QyxDQUpvQjtRQUtwQjtVQUFFLElBQUEsRUFBTSxRQUFSO1VBQW1CLElBQUEsRUFBUSxHQUEzQjtVQUFnQyxJQUFBLEVBQU07UUFBdEMsQ0FMb0I7UUFNcEI7VUFBRSxJQUFBLEVBQU0sUUFBUjtVQUFtQixJQUFBLEVBQVEsR0FBM0I7VUFBZ0MsSUFBQSxFQUFNO1FBQXRDLENBTm9CO1FBT3BCO1VBQUUsSUFBQSxFQUFNLE1BQVI7VUFBbUIsSUFBQSxFQUFNLEtBQXpCO1VBQWdDLElBQUEsRUFBTTtRQUF0QyxDQVBvQjtRQVFwQjtVQUFFLElBQUEsRUFBTSxNQUFSO1VBQW1CLElBQUEsRUFBTSxLQUF6QjtVQUFnQyxJQUFBLEVBQU07UUFBdEMsQ0FSb0I7UUFTcEI7VUFBRSxJQUFBLEVBQU0sTUFBUjtVQUFtQixJQUFBLEVBQU0sS0FBekI7VUFBZ0MsSUFBQSxFQUFNO1FBQXRDLENBVG9CO1FBVXBCO1VBQUUsSUFBQSxFQUFNLFFBQVI7VUFBbUIsSUFBQSxFQUFRLEdBQTNCO1VBQWdDLElBQUEsRUFBTTtRQUF0QyxDQVZvQjtRQVdwQjtVQUFFLElBQUEsRUFBTSxNQUFSO1VBQW1CLElBQUEsRUFBTSxLQUF6QjtVQUFnQyxJQUFBLEVBQU07UUFBdEMsQ0FYb0I7UUFZcEI7VUFBRSxJQUFBLEVBQU0sTUFBUjtVQUFtQixJQUFBLEVBQU0sS0FBekI7VUFBZ0MsSUFBQSxFQUFNO1FBQXRDLENBWm9CO1FBYXBCO1VBQUUsSUFBQSxFQUFNLE1BQVI7VUFBbUIsSUFBQSxFQUFNLEtBQXpCO1VBQWdDLElBQUEsRUFBTTtRQUF0QyxDQWJvQjs7TUFnQm5CLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBO1FBQU0sS0FBQSxxREFBQTtXQUFJLENBQUUsSUFBRixFQUFRLElBQVIsRUFBYyxJQUFkO1VBQ0YsSUFBQSxHQUFPLElBQUEsR0FBTyxDQUFFLElBQUksQ0FBQyxRQUFMLENBQWUsQ0FBZixDQUFGLENBQW9CLENBQUMsUUFBckIsQ0FBK0IsQ0FBL0IsRUFBa0MsR0FBbEM7VUFDZCxJQUFBLEdBQU8sSUFBQSxHQUFPLENBQUUsSUFBSSxDQUFDLFFBQUwsQ0FBYyxFQUFkLENBQUYsQ0FBb0IsQ0FBQyxRQUFyQixDQUErQixDQUEvQixFQUFrQyxHQUFsQztVQUNkLElBQUEsR0FBTyxJQUFBLEdBQU8sQ0FBRSxJQUFJLENBQUMsUUFBTCxDQUFlLENBQWYsQ0FBRixDQUFvQixDQUFDLFFBQXJCLENBQThCLEVBQTlCLEVBQWtDLEdBQWxDO1VBQ2QsS0FBQSxDQUFNLFdBQU4sRUFBbUIsQ0FBQyxDQUFBLENBQUEsQ0FBRyxJQUFILENBQUEsT0FBQSxDQUFBLENBQWlCLElBQWpCLENBQUEsT0FBQSxDQUFBLENBQStCLElBQS9CLENBQUEsT0FBQSxDQUFBLENBQTZDLElBQTdDLENBQUEsT0FBQSxDQUFBLENBQTJELElBQTNELENBQUEsT0FBQSxDQUFwQjtRQUpGO2VBS0M7TUFOQSxDQUFBLElBdEJQOzthQThCSztJQS9CSyxDQUFSOztJQWtDQSxzQkFBQSxFQUF3QixRQUFBLENBQUEsQ0FBQTtBQUMxQixVQUFBLEVBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBO01BQUksU0FBQSxHQUE0QixPQUFBLENBQVEsbUNBQVI7TUFDNUIsRUFBQSxHQUE0QixPQUFBLENBQVEsa0JBQVI7TUFDNUIsRUFBQSxHQUE0QixPQUFBLENBQVEsU0FBUjtNQUM1QixLQUFBLENBQU0sV0FBTjs7QUFBcUI7UUFBQSxLQUFBLE9BQUE7dUJBQUE7UUFBQSxDQUFBOztVQUFyQjtNQUNBLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBWCxDQUFrQixDQUFFLEVBQUUsQ0FBQyxRQUFILENBQVksYUFBWixDQUFGLENBQTZCLENBQUMsSUFBaEQsQ0FBbkI7TUFDQSxLQUFBLENBQU0sV0FBTixFQUFtQixDQUFDLENBQUEsQ0FBQSxDQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBWCxDQUFrQixLQUFsQixDQUFILENBQUEsT0FBQSxDQUFwQjtNQUNBLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLENBQUMsQ0FBQSxDQUFBLENBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFYLENBQWtCLEtBQWxCLENBQUgsQ0FBQSxPQUFBLENBQXBCO01BQ0EsS0FBQSxDQUFNLFdBQU4sRUFBbUIsQ0FBQyxDQUFBLENBQUEsQ0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQVgsQ0FBa0IsS0FBbEIsQ0FBSCxDQUFBLE9BQUEsQ0FBcEI7TUFDQSxLQUFBLENBQU0sV0FBTixFQUFtQixDQUFDLENBQUEsQ0FBQSxDQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBWCxDQUFrQixLQUFsQixDQUFILENBQUEsT0FBQSxDQUFwQjtNQUNBLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLENBQUMsQ0FBQSxDQUFBLENBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFYLENBQWtCLGFBQWxCLENBQUgsQ0FBQSxPQUFBLENBQXBCO01BQ0EsS0FBQSxDQUFNLFdBQU4sRUFBbUIsQ0FBQyxDQUFBLENBQUEsQ0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQVgsQ0FBa0IsYUFBbEIsQ0FBSCxDQUFBLE9BQUEsQ0FBcEI7TUFDQSxLQUFBLENBQU0sV0FBTixFQUFtQixDQUFDLEdBQUEsQ0FBQSxDQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBWCxDQUFvQixhQUFwQixDQUFMLENBQUEsTUFBQSxDQUFwQjtNQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsR0FBQSxDQUFBLENBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFYLENBQW9CLEtBQXBCLENBQUwsQ0FBQSxNQUFBLENBQW5CO01BQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxHQUFBLENBQUEsQ0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVgsQ0FBb0IsS0FBcEIsQ0FBTCxDQUFBLE1BQUEsQ0FBbkI7TUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLEdBQUEsQ0FBQSxDQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBWCxDQUFvQixLQUFwQixDQUFMLENBQUEsTUFBQSxDQUFuQjtNQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsR0FBQSxDQUFBLENBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFYLENBQW9CLEtBQXBCLENBQUwsQ0FBQSxNQUFBLENBQW5CO01BQ0EsSUFBQSxDQUFLLFdBQUw7TUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLEdBQUEsQ0FBQSxDQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBWCxDQUFvQixRQUFwQixDQUFMLENBQUEsTUFBQSxDQUFuQjtNQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsR0FBQSxDQUFBLENBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFYLENBQW9CLFFBQXBCLENBQUwsQ0FBQSxNQUFBLENBQW5CO01BQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxHQUFBLENBQUEsQ0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVgsQ0FBb0IsUUFBcEIsQ0FBTCxDQUFBLE1BQUEsQ0FBbkI7TUFDQSxJQUFBLENBQUssV0FBTDtNQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsR0FBQSxDQUFBLENBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFYLENBQW9CLFFBQUEsR0FBVyxNQUFYLEdBQW9CLE1BQXhDLENBQUwsQ0FBQSxNQUFBLENBQW5CO0FBQWdGLDhDQUNoRixJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLEdBQUEsQ0FBQSxDQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBWCxDQUFvQixRQUFBLEdBQVcsTUFBWCxHQUFvQixNQUF4QyxDQUFMLENBQUEsTUFBQSxDQUFuQjtBQUFnRiw4Q0FDaEYsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxHQUFBLENBQUEsQ0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVgsQ0FBb0IsUUFBQSxHQUFXLE1BQVgsR0FBb0IsTUFBeEMsQ0FBTCxDQUFBLE1BQUEsQ0FBbkI7QUFBZ0YsNENBQ2hGLElBQUEsQ0FBSyxXQUFMO01BQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxHQUFBLENBQUEsQ0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVgsQ0FBb0IsUUFBQSxHQUFXLE1BQVgsR0FBb0IsTUFBeEMsQ0FBTCxDQUFBLE1BQUEsQ0FBbkI7QUFBZ0YsZ0RBQ2hGLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsR0FBQSxDQUFBLENBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFYLENBQW9CLFFBQUEsR0FBVyxNQUFYLEdBQW9CLE1BQXhDLENBQUwsQ0FBQSxNQUFBLENBQW5CO0FBQWdGLGdEQUNoRixJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLEdBQUEsQ0FBQSxDQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBWCxDQUFvQixRQUFBLEdBQVcsTUFBWCxHQUFvQixNQUF4QyxDQUFMLENBQUEsTUFBQSxDQUFuQixFQTNCSjs7Ozs7Ozs7OztBQTJCb0YsK0NBVS9FO0lBdENxQixDQWxDeEI7O0lBMkVBLGlCQUFBLEVBQW1CLFFBQUEsQ0FBQSxDQUFBO0FBQ3JCLFVBQUEsS0FBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsV0FBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxVQUFBLEVBQUEsS0FBQSxFQUFBLFFBQUEsRUFBQSxLQUFBLEVBQUEsU0FBQSxFQUFBO01BQUksU0FBQSxHQUFnQyxPQUFBLENBQVEsbUNBQVI7TUFDaEMsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUFnQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQW5CLENBQUEsQ0FBaEM7TUFDQSxDQUFBLENBQUUsS0FBRixFQUNFLEdBREYsRUFFRSxTQUZGLENBQUEsR0FFZ0MsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFuQixDQUFBLENBRmhDO01BR0EsSUFBQSxHQUFnQyxPQUFBLENBQVEsV0FBUjtNQUNoQyxDQUFBLENBQUUsU0FBRixDQUFBLEdBQWdDLE9BQUEsQ0FBUSxPQUFSLENBQWhDO01BRU07O1FBQU4sTUFBQSxZQUFBLFFBQTBCLE1BQTFCO1VBWW1CLEVBQWpCLGVBQWlCLENBQUEsQ0FBQTttQkFBRyxDQUFBLE9BQVcsSUFBQyxDQUFBLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBM0IsQ0FBQSxDQUFYO1VBQUg7O1FBWm5COzs7Ozs7Ozs7O1FBU0UsV0FBQyxDQUFBLFVBQUQsR0FDRTtVQUFBLGNBQUEsRUFBZ0IsR0FBRyxDQUFBLHNCQUFBO1FBQW5COzs7O29CQWxCUjs7TUFzQkksQ0FBQSxDQUFFLFFBQUYsRUFDRSxPQURGLEVBRUUsVUFGRixDQUFBLEdBRWtCLFNBQUEsQ0FBQSxDQUZsQixFQXRCSjs7TUEwQkksU0FBQSxHQUFjO1FBQUUsR0FBQSxFQUFLLFFBQVA7UUFBaUIsS0FBQSxFQUFPO01BQXhCO01BQ2QsS0FBQSxHQUFjLFFBQUEsQ0FBRSxHQUFGLEVBQUEsR0FBTyxDQUFQLENBQUE7ZUFBaUIsQ0FBRSxTQUFBLENBQVUsR0FBVixFQUFlLENBQWYsRUFBa0IsU0FBbEIsQ0FBRixDQUErQixDQUFDO01BQWpELEVBM0JsQjs7TUE2QkksRUFBQSxHQUFjLFdBQVcsQ0FBQyxJQUFaLENBQWlCLE9BQWpCO01BQ2QsS0FBQSxDQUFNLFdBQU4sRUFBbUIsRUFBRSxDQUFDLFVBQXRCO01BQ0EsS0FBQSxHQUFjO01BRVgsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUE7QUFBTTtBQUFBO1FBQUEsS0FBQSxxQ0FBQTs7dUJBQ0UsSUFBQSxDQUFLLElBQUw7UUFERixDQUFBOztNQURDLENBQUEsSUFqQ1A7Ozs7TUF1Q0ksSUFBQSxHQUFPO0FBQ1AsY0FBTyxJQUFQO0FBQUEsYUFDTyxNQURQO1VBQ3NCLENBQUEsQ0FBQSxDQUFBLEdBQUE7WUFDbEIsS0FBQSxDQUFNLFdBQU4sRUFBbUIsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUE7O3VEQUFBLENBQWQsQ0FBbkI7bUJBSUM7VUFMaUIsQ0FBQTtBQUFmO0FBRFAsYUFPTyxPQVBQO1VBT3VCLENBQUEsQ0FBQSxDQUFBLEdBQUE7WUFDbkIsS0FBQSxDQUFNLFdBQU4sRUFBbUIsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUE7O3VEQUFBLENBQWQsQ0FBbkI7bUJBSUM7VUFMa0IsQ0FBQTtBQUFoQjtBQVBQLGFBYU8sU0FiUDtVQWFzQjtBQUFmO0FBYlA7VUFjTyxNQUFNLElBQUksS0FBSixDQUFVLENBQUEsY0FBQSxDQUFBLENBQWlCLEdBQUEsQ0FBSSxJQUFKLENBQWpCLENBQUEsQ0FBVjtBQWRiLE9BeENKOztNQXdESSxLQUFBLHlCQUFBO1FBQ0UsU0FBQSxHQUFZLElBQUksQ0FBQyxJQUFMLENBQVUsVUFBVixFQUFzQixDQUFDLENBQUMsSUFBeEI7UUFDWixLQUFLLENBQUMsSUFBTixDQUFXLFNBQVg7UUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUMsTUFBcEIsRUFBNEIsQ0FBQyxDQUFDLElBQTlCLEVBSEY7TUFBQTtNQUtHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBO0FBQU07QUFBQTtRQUFBLEtBQUEscUNBQUE7O3VCQUNFLElBQUEsQ0FBSyxJQUFMO1FBREYsQ0FBQTs7TUFEQyxDQUFBLElBN0RQOzthQWlFSztJQWxFZ0IsQ0EzRW5COztJQWdKQSxrREFBQSxFQUFvRCxRQUFBLENBQUEsQ0FBQTtBQUN0RCxVQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxVQUFBLEVBQUEsbUJBQUEsRUFBQSxVQUFBLEVBQUEsUUFBQSxFQUFBLFNBQUEsRUFBQTtNQUFJLFNBQUEsR0FBZ0MsT0FBQSxDQUFRLG1DQUFSO01BQ2hDLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBZ0MsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQWhDO01BQ0EsQ0FBQSxDQUFFLEtBQUYsRUFDRSxHQURGLEVBRUUsU0FGRixDQUFBLEdBRWdDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBbkIsQ0FBQSxDQUZoQztNQUdBLElBQUEsR0FBZ0MsT0FBQSxDQUFRLFdBQVI7TUFDaEMsQ0FBQSxDQUFFLFNBQUYsQ0FBQSxHQUFnQyxPQUFBLENBQVEsT0FBUixDQUFoQztNQUNBLENBQUEsQ0FBRSxLQUFGLENBQUEsR0FBZ0MsT0FBQSxDQUFRLG9CQUFSLENBQWhDLEVBUEo7O01BU0ksQ0FBQSxDQUFFLFFBQUYsRUFDRSxPQURGLEVBRUUsVUFGRixDQUFBLEdBRWtCLFNBQUEsQ0FBQSxDQUZsQjtNQUdBLFNBQUEsR0FBYztRQUFFLEdBQUEsRUFBSyxRQUFQO1FBQWlCLEtBQUEsRUFBTyxJQUF4QjtRQUE4QixXQUFBLEVBQWE7TUFBM0MsRUFabEI7O01BY0ksbUJBQUEsR0FBc0IsUUFBQSxDQUFFLEdBQUYsQ0FBQTtBQUMxQixZQUFBLENBQUEsRUFBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtRQUFNLENBQUEsR0FBUTtRQUNSLEtBQUEsR0FBUSxLQUFBLENBQU07VUFBRSxXQUFBLEVBQWE7UUFBZixDQUFOLEVBQThCLEtBQTlCLEVBQXFDLFdBQXJDO1FBQ1IsS0FBQSx1Q0FBQTs7VUFDRSxDQUFFLE1BQUYsRUFDRSxJQURGLEVBRUUsSUFGRixDQUFBLEdBRWMsSUFBSSxDQUFDLEtBQUwsQ0FBVyxNQUFYO1VBQ2QsSUFBWSxvQkFBQSxJQUFnQixDQUFFLE1BQUEsS0FBWSxHQUFHLENBQUMsTUFBbEIsQ0FBNUI7QUFBQSxxQkFBQTs7VUFDQSxJQUFBLEdBQWMsWUFBQSxDQUFhLElBQWI7VUFDZCxJQUFZLGtCQUFBLElBQWdCLENBQUUsSUFBQSxLQUFZLEdBQUcsQ0FBQyxJQUFsQixDQUE1QjtBQUFBLHFCQUFBOztVQUNBLElBQVksa0JBQUEsSUFBZ0IsQ0FBRSxJQUFBLEtBQVksR0FBRyxDQUFDLElBQWxCLENBQTVCO0FBQUEscUJBQUE7O1VBQ0EsQ0FBQyxDQUFDLElBQUYsQ0FBTyxDQUFFLE1BQUYsRUFBVSxJQUFWLEVBQWdCLElBQWhCLENBQVA7UUFSRjtBQVNBLGVBQU87TUFaYSxFQWQxQjs7TUE0QkksVUFBQSxHQUFhLFFBQUEsQ0FBRSxHQUFGLENBQUE7QUFDakIsWUFBQTtBQUFNLGdCQUFPLENBQUUsTUFBQSxHQUFTLG1CQUFBLENBQW9CLEdBQXBCLENBQVgsQ0FBb0MsQ0FBQyxNQUE1QztBQUFBLGVBQ08sQ0FEUDtBQUNjLG1CQUFPO0FBRHJCLGVBRU8sQ0FGUDtBQUVjLG1CQUFPO0FBRnJCO1FBR0EsTUFBTSxJQUFJLEtBQUosQ0FBVSxDQUFBLHFDQUFBLENBQUEsQ0FBd0MsTUFBTSxDQUFDLE1BQS9DLENBQUEsRUFBQSxDQUFBLENBQTBELEdBQUEsQ0FBSSxNQUFKLENBQTFELENBQUEsQ0FBVjtNQUpLO01BTVYsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxFQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtRQUFNLEVBQUEsR0FBSyxJQUFJLEtBQUosQ0FBQTtRQUNMLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsRUFBRSxDQUFDLHdCQUFILENBQTRCLElBQTVCO1FBQUgsQ0FBZCxDQUFSLEVBQTJFLGlDQUEzRTtRQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsRUFBRSxDQUFDLHdCQUFILENBQTRCLEVBQTVCO1FBQUgsQ0FBZCxDQUFSLEVBQTJFLGlDQUEzRTtRQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsRUFBRSxDQUFDLHdCQUFILENBQTRCLENBQUEsQ0FBNUI7UUFBSCxDQUFkLENBQVIsRUFBMkUsd0JBQTNFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFFLENBQUMsd0JBQUgsQ0FBNEIsSUFBNUI7UUFBSCxDQUFkLENBQVIsRUFBMkU7VUFBRSxHQUFBLEVBQUs7WUFBRSxHQUFBLEVBQUssUUFBUDtZQUFpQixLQUFBLEVBQU87VUFBeEIsQ0FBUDtVQUF3QyxHQUFBLEVBQUssSUFBN0M7VUFBbUQsVUFBQSxFQUFZO1FBQS9ELENBQTNFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFFLENBQUMsd0JBQUgsQ0FBNEIsSUFBNUIsRUFBa0MsTUFBbEM7UUFBSCxDQUFkLENBQVIsRUFBMkU7VUFBRSxHQUFBLEVBQUs7WUFBRSxHQUFBLEVBQUssUUFBUDtZQUFpQixLQUFBLEVBQU87VUFBeEIsQ0FBUDtVQUF3QyxHQUFBLEVBQUssSUFBN0M7VUFBbUQsVUFBQSxFQUFZLENBQUUsTUFBRjtRQUEvRCxDQUEzRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsRUFBRSxDQUFDLHdCQUFILENBQTRCLElBQTVCLEVBQWtDLE1BQWxDLEVBQTBDLEdBQTFDO1FBQUgsQ0FBZCxDQUFSLEVBQTJFO1VBQUUsR0FBQSxFQUFLO1lBQUUsR0FBQSxFQUFLLFFBQVA7WUFBaUIsS0FBQSxFQUFPO1VBQXhCLENBQVA7VUFBd0MsR0FBQSxFQUFLLElBQTdDO1VBQW1ELFVBQUEsRUFBWSxDQUFFLE1BQUYsRUFBVSxHQUFWO1FBQS9ELENBQTNFO2VBQ0M7TUFSQSxDQUFBO01BVUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxDQUFBLEVBQUE7UUFBTSxFQUFBLEdBQUssSUFBSSxLQUFKLENBQVUsU0FBVjtRQUNMLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLEVBQUUsQ0FBQyxJQUFILENBQVEsSUFBUixDQUFuQjtRQUNBLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLEVBQUUsQ0FBQyxJQUFILENBQVEsTUFBUixFQUFnQixLQUFoQixFQUF1QixVQUF2QixFQUFtQyxXQUFuQyxDQUFuQjtBQUNBO1VBQUksSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBRSxDQUFDLElBQUgsQ0FBUSxNQUFSLEVBQWdCLEtBQWhCLEVBQXVCLFVBQXZCLEVBQW1DLFdBQW5DLENBQWxCLEVBQUo7U0FBNkUsY0FBQTtVQUFNO1VBQU8sSUFBQSxDQUFLLFdBQUwsRUFBa0IsT0FBQSxDQUFRLENBQUMsQ0FBQyxPQUFWLENBQWxCLEVBQWI7O0FBQzdFO1VBQUksSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBRSxDQUFDLElBQUgsQ0FBUSxNQUFSLEVBQWdCLEtBQWhCLEVBQXVCLGNBQXZCLEVBQXVDLFdBQXZDLENBQWxCLEVBQUo7U0FBNkUsY0FBQTtVQUFNO1VBQU8sSUFBQSxDQUFLLFdBQUwsRUFBa0IsT0FBQSxDQUFRLENBQUMsQ0FBQyxPQUFWLENBQWxCLEVBQWI7O0FBQzdFO1VBQUksSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBRSxDQUFDLElBQUgsQ0FBUSxNQUFSLEVBQWdCLEtBQWhCLEVBQXVCLGNBQXZCLEVBQXVDLGVBQXZDLENBQWxCLEVBQUo7U0FBNkUsY0FBQTtVQUFNO1VBQU8sSUFBQSxDQUFLLFdBQUwsRUFBa0IsT0FBQSxDQUFRLENBQUMsQ0FBQyxPQUFWLENBQWxCLEVBQWI7O1FBQzVFO2VBQ0E7TUFSQSxDQUFBO01BVUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQTtRQUFNLEVBQUEsR0FBSyxJQUFJLEtBQUosQ0FBVSxTQUFWO1FBQ0wsSUFBQSxDQUFLLFdBQUwsRUFBa0IsbUJBQUEsQ0FBb0I7VUFBRSxNQUFBLEVBQVE7UUFBVixDQUFwQixDQUFsQjtRQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLG1CQUFBLENBQW9CO1VBQUUsTUFBQSxFQUFRLFVBQVY7VUFBc0IsSUFBQSxFQUFNO1FBQTVCLENBQXBCLENBQWxCO1FBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsbUJBQUEsQ0FBb0I7VUFBRSxNQUFBLEVBQVEsVUFBVjtVQUFzQixJQUFBLEVBQU07UUFBNUIsQ0FBcEIsQ0FBbEI7ZUFDQztNQUxBLENBQUE7TUFPQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLENBQUEsRUFBQTtRQUFNLEVBQUEsR0FBSyxJQUFJLEtBQUosQ0FBVSxTQUFWO1FBQ0wsSUFBQSxDQUFLLFdBQUwsRUFBa0IsVUFBQSxDQUFXO1VBQUUsTUFBQSxFQUFRO1FBQVYsQ0FBWCxDQUFsQjtRQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLFVBQUEsQ0FBVztVQUFFLE1BQUEsRUFBUSxVQUFWO1VBQXNCLElBQUEsRUFBTTtRQUE1QixDQUFYLENBQWxCO1FBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsVUFBQSxDQUFXO1VBQUUsTUFBQSxFQUFRLFVBQVY7VUFBc0IsSUFBQSxFQUFNO1FBQTVCLENBQVgsQ0FBbEI7QUFDQTtVQUFJLElBQUEsQ0FBSyxXQUFMLEVBQWtCLFVBQUEsQ0FBVyxDQUFBLENBQVgsQ0FBbEIsRUFBSjtTQUFvQyxjQUFBO1VBQU07VUFBTyxJQUFBLENBQUssV0FBTCxFQUFrQixPQUFBLENBQVEsQ0FBQyxDQUFDLE9BQVYsQ0FBbEIsRUFBYjs7ZUFDbkM7TUFOQSxDQUFBLElBN0RQOzs7Ozs7Ozs7Ozs7OzthQWlGSztJQWxGaUQsQ0FoSnBEOztJQXFPQSxXQUFBLEVBQWEsTUFBQSxRQUFBLENBQUEsQ0FBQTtBQUNmLFVBQUEsZUFBQSxFQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLG1CQUFBLEVBQUEsWUFBQSxFQUFBLE1BQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQTtNQUFJLFNBQUEsR0FBZ0MsT0FBQSxDQUFRLG1DQUFSO01BQ2hDLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBZ0MsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQWhDO01BQ0EsQ0FBQSxDQUFFLEtBQUYsRUFDRSxHQURGLEVBRUUsU0FGRixDQUFBLEdBRWdDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBbkIsQ0FBQSxDQUZoQztNQUdBLElBQUEsR0FBZ0MsT0FBQSxDQUFRLFdBQVI7TUFDaEMsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUFnQyxPQUFBLENBQVEsT0FBUixDQUFoQztNQUNBLENBQUEsQ0FBRSxLQUFGLENBQUEsR0FBZ0MsT0FBQSxDQUFRLG9CQUFSLENBQWhDO01BQ0EsQ0FBQSxDQUFFLGVBQUYsRUFDRSxTQURGLEVBRUUsU0FGRixDQUFBLEdBRWdDLFNBQVMsQ0FBQyxpQkFBVixDQUFBLENBRmhDO01BR0EsQ0FBQSxDQUFFLElBQUYsRUFDRSxNQURGLENBQUEsR0FDZ0MsT0FBQSxDQUFRLDhCQUFSLENBRGhDO01BRUEsbUJBQUEsR0FBZ0MsT0FBQSxDQUFRLFdBQVI7TUFDaEMsQ0FBQSxDQUFFLEtBQUYsQ0FBQSxHQUFnQyxPQUFBLENBQVEsT0FBUixDQUFoQyxFQWRKOztNQWdCSSxZQUFBLEdBQWUsUUFBQSxDQUFFLElBQUYsQ0FBQTtlQUFZLElBQUksQ0FBQyxPQUFMLENBQWEsdUJBQWIsRUFBc0MsUUFBQSxDQUFFLEVBQUYsRUFBTSxFQUFOLENBQUE7QUFDL0QsaUJBQU8sTUFBTSxDQUFDLGFBQVAsQ0FBcUIsUUFBQSxDQUFTLEVBQVQsRUFBYSxDQUFiLENBQXJCO1FBRHdELENBQXRDO01BQVosRUFoQm5COztNQW1CSSxNQUFNLENBQUEsQ0FBRTtRQUFDLE9BQUEsRUFBUztNQUFWLENBQUYsQ0FBb0IsQ0FBQSxnQkFBQTtNQUMxQixNQUFNLENBQUEsQ0FBRTtRQUFDLE9BQUEsRUFBUztNQUFWLENBQUYsQ0FBb0IsQ0FBQSxjQUFBO01BQzFCLENBQUEsR0FBSSxDQUFBLE1BQU0sQ0FBQSxDQUFHO1FBQUUsS0FBQSxFQUFPLElBQVQ7UUFBZSxPQUFBLEVBQVM7TUFBeEIsQ0FBSCxDQUFzQyxDQUFBLGNBQUEsQ0FBZ0IsQ0FBQyxJQUFJLENBQUEsSUFBQSxDQUFqRTtNQUNKLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLENBQUMsQ0FBQyxNQUFyQjtNQUNBLENBQUEsR0FBSSxDQUFBLE1BQ0YsQ0FBQSxDQUFRO1FBQUUsS0FBQSxFQUFPLElBQVQ7UUFBZSxPQUFBLEVBQVM7TUFBeEIsQ0FBUixDQUEyQyxDQUFBLGNBQUEsQ0FDM0MsQ0FBQyxJQURELENBQ1E7UUFBRSxLQUFBLEVBQU8sSUFBVDtRQUFlLE9BQUEsRUFBUztNQUF4QixDQURSLENBQzJDLENBQUEsSUFBQSxDQUZ6QztNQUdKLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLENBQUUsR0FBQSxDQUFJLENBQUMsQ0FBQyxNQUFOLENBQUYsQ0FBZ0IsY0FBaEIsR0FBNkIsS0FBaEQ7TUFDQSxDQUFBLEdBQUksQ0FBQSxNQUFNLENBQUEsQ0FBRztRQUFFLEtBQUEsRUFBTyxJQUFUO1FBQWUsT0FBQSxFQUFTO01BQXhCLENBQUgsQ0FBc0MsQ0FBQSxjQUFBLENBQWdCLENBQUMsSUFBSSxDQUFBLElBQUEsQ0FBTSxDQUFDLElBQUksQ0FBQSxRQUFBLENBQTVFO01BQ0osS0FBQSxDQUFNLFdBQU4sRUFBbUIsQ0FBRSxHQUFBLENBQUksQ0FBQyxDQUFDLE1BQU4sQ0FBRixDQUFnQixjQUFoQixHQUE2QixLQUFoRDtNQUNBLENBQUEsR0FBSSxDQUFBLE1BQU0sQ0FBQSxDQUFHO1FBQUUsS0FBQSxFQUFPLElBQVQ7UUFBZSxPQUFBLEVBQVM7TUFBeEIsQ0FBSCxDQUFzQyxDQUFBLEtBQUEsQ0FBNUM7TUFDSixLQUFBLENBQU0sV0FBTixFQUFtQixDQUFFLEdBQUEsQ0FBSSxDQUFDLENBQUMsTUFBTixDQUFGLENBQWdCLGNBQWhCLEdBQTZCLEtBQWhEO01BRUEsTUFBUyxDQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNiLFlBQUEsb0JBQUEsRUFBQSxDQUFBLEVBQUEsS0FBQSxFQUFBLFNBQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLFlBQUEsRUFBQSxxQkFBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUE7Ozs7O1FBSU0sT0FBQSxHQUFZLHdHQUpsQjs7UUFZTSxZQUFBLEdBQWUsSUFBSSxTQUFKLENBQWM7VUFBRSxVQUFBLEVBQVk7UUFBZCxDQUFkLEVBWnJCOztRQWNNLFlBQVksQ0FBQyxJQUFiLENBQWtCLFNBQUEsQ0FBRSxFQUFGLENBQUE7VUFFaEIsT0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVAsQ0FBa0IsV0FBbEIsRUFEbkI7Ozs7O2lCQU1TO1FBUGUsQ0FBbEIsRUFkTjs7UUF1Qk0sWUFBWSxDQUFDLElBQWIsQ0FBa0IsU0FBQSxDQUFFLElBQUYsQ0FBQTtBQUN4QixjQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO1VBQVEsSUFBZSxJQUFBLEtBQVEsRUFBdkI7QUFBQSxtQkFBTyxLQUFQOztVQUNBLENBQUUsTUFBRixFQUNFLElBREYsRUFFRSxJQUZGLEVBR0UsT0FIRixDQUFBLEdBR2MsSUFBSSxDQUFDLEtBQUwsQ0FBVyxNQUFYO1VBQ2QsSUFBRyxDQUFFLE1BQUYsRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLE9BQXRCLENBQWdDLENBQUMsSUFBakMsQ0FBc0MsUUFBQSxDQUFFLENBQUYsQ0FBQTttQkFBUyxDQUFNLFNBQU4sQ0FBQSxJQUFjLENBQUUsQ0FBQSxLQUFLLEVBQVA7VUFBdkIsQ0FBdEMsQ0FBSDtZQUNFLE1BQU0sSUFBSSxLQUFKLENBQVUsQ0FBQSwrQkFBQSxDQUFBLENBQWtDLEdBQUEsQ0FBSSxJQUFKLENBQWxDLENBQUEsQ0FBVixFQURSOztpQkFFQSxDQUFBLE1BQU0sTUFBQSxDQUFPLENBQUUsTUFBRixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsT0FBdEIsQ0FBUCxDQUFOO1FBUmdCLENBQWxCLEVBdkJOOztRQWlDTSxZQUFZLENBQUMsSUFBYixDQUFrQixTQUFBLENBQUUsQ0FBRixDQUFBO1VBQ2hCLE1BQU0sSUFBQSxDQUFLLENBQUwsRUFBUSxRQUFBLENBQUUsQ0FBRixDQUFBO1lBQ1osQ0FBQyxDQUFDLE9BQUYsR0FBWSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQVYsQ0FBZ0IsR0FBaEI7bUJBQ1osQ0FBQyxDQUFDLElBQUYsR0FBWSxZQUFBLENBQWEsQ0FBQyxDQUFDLElBQWY7VUFGQSxDQUFSO2lCQUdMO1FBSmUsQ0FBbEIsRUFqQ047O1FBdUNNLG9CQUFBLEdBQXVCLFFBQUEsQ0FBRSxPQUFGLENBQUE7QUFDN0IsY0FBQSxFQUFBLEVBQUE7VUFBUSxJQUEwQixlQUExQjtBQUFBLG1CQUFPLENBQUUsUUFBQSxDQUFBLENBQUE7cUJBQUc7WUFBSCxDQUFGLEVBQVA7O0FBQ0Esa0JBQU8sSUFBQSxHQUFPLE9BQUEsQ0FBUSxPQUFSLENBQWQ7QUFBQSxpQkFDTyxPQURQO2NBRUksRUFBQSxHQUFLO0FBREY7QUFEUCxpQkFHTyxNQUhQO2NBSUksRUFBQSxHQUFLLEtBQUssQ0FBQSxDQUFBLENBQUcsT0FBSCxDQUFBO0FBRFA7QUFIUDtjQUtPLE1BQU0sSUFBSSxLQUFKLENBQVUsQ0FBQSw0Q0FBQSxDQUFBLENBQStDLElBQS9DLENBQUEsQ0FBVjtBQUxiO0FBTUEsaUJBQU8sUUFBQSxDQUFFLENBQUYsQ0FBQTtZQUFTLEVBQUUsQ0FBQyxTQUFILEdBQWU7bUJBQUcsRUFBRSxDQUFDLElBQUgsQ0FBUSxDQUFSO1VBQTNCO1FBUmMsRUF2QzdCOztRQWlETSxxQkFBQSxHQUF3QixTQUFBLENBQUMsQ0FBRSxNQUFBLEdBQVMsSUFBWCxFQUFpQixJQUFBLEdBQU8sSUFBeEIsRUFBOEIsSUFBQSxHQUFPLElBQXJDLEVBQTJDLElBQUEsR0FBTyxJQUFsRCxJQUEwRCxDQUFBLENBQTNELENBQUE7QUFDOUIsY0FBQSxDQUFBLEVBQUEsWUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7VUFBUSxJQUFHLFlBQUg7WUFDRSxJQUFHLFlBQUg7Y0FDRSxNQUFNLElBQUksS0FBSixDQUFVLGtEQUFWLEVBRFI7O1lBRUEsVUFBQSxHQUFjLG1CQUFBLENBQW9CLElBQXBCLEVBSGhCO1dBQUEsTUFBQTtZQUtFLFVBQUEsR0FBYyxRQUFBLENBQUEsQ0FBQTtxQkFBRztZQUFILEVBTGhCOztVQU1BLFlBQUEsR0FBZ0Isb0JBQUEsQ0FBcUIsTUFBckI7VUFDaEIsVUFBQSxHQUFnQixvQkFBQSxDQUFxQixJQUFyQjtVQUNoQixVQUFBLEdBQWdCLG9CQUFBLENBQXFCLElBQXJCLEVBUnhCOztVQVVRLEtBQUEsd0JBQUE7WUFDRSxLQUFnQixZQUFBLENBQWMsQ0FBQyxDQUFDLE1BQWhCLENBQWhCO0FBQUEsdUJBQUE7O1lBQ0EsS0FBZ0IsVUFBQSxDQUFjLENBQUMsQ0FBQyxJQUFoQixDQUFoQjtBQUFBLHVCQUFBOztZQUNBLEtBQWdCLFVBQUEsQ0FBYyxDQUFDLENBQUMsSUFBaEIsQ0FBaEI7QUFBQSx1QkFBQTs7WUFDQSxLQUFnQixVQUFBLENBQWMsQ0FBQyxDQUFDLElBQWhCLENBQWhCO0FBQUEsdUJBQUE7O1lBQ0EsTUFBTTtVQUxSO2lCQU1DO1FBakJxQixFQWpEOUI7O1FBb0VNLFNBQUEsR0FBWSxRQUFBLENBQUEsR0FBRSxDQUFGLENBQUE7QUFDbEIsY0FBQSxLQUFBLEVBQUE7VUFBUSxNQUFBLEdBQVMsQ0FBRSxHQUFBLENBQUUscUJBQUEsQ0FBc0IsR0FBQSxDQUF0QixDQUFGLENBQUY7QUFDRixrQkFBTyxLQUFBLEdBQVEsTUFBTSxDQUFDLE1BQXRCO0FBQUEsaUJBQ0EsQ0FEQTtxQkFDTztBQURQLGlCQUVBLENBRkE7cUJBRU87QUFGUDtVQUdQLE1BQU0sSUFBSSxLQUFKLENBQVUsQ0FBQSw0Q0FBQSxDQUFBLENBQStDLEtBQS9DLENBQUEsQ0FBVjtRQUxJLEVBcEVsQjs7Ozs7UUE4RU0sTUFBQSxHQUFTO1VBQUUsR0FBQSxDQUFFOztBQUFBO1lBQUE7O2VBQUE7MkJBQUE7WUFBQSxDQUFBOztjQUFBLENBQUYsQ0FBRjs7UUFDVCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQU0sQ0FBQyxNQUFQLEdBQWdCO1FBQW5CLENBQWQsQ0FBSixFQUEwQyxJQUExQyxFQS9FTjs7UUFpRk0sS0FBQSxHQUFRO0FBQ1I7VUFBSSxNQUFNLFNBQUEsQ0FBVTtZQUFFLE1BQUEsRUFBUTtVQUFWLENBQVYsRUFBVjtTQUF5QyxjQUFBO1VBQU07VUFDN0MsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBRyx1Q0FBdUMsQ0FBQyxJQUF4QyxDQUE2QyxLQUFLLENBQUMsT0FBbkQ7VUFBSCxDQUFkLENBQUosRUFBbUYsSUFBbkYsRUFEdUM7O1FBRXpDLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsS0FBQSxLQUFTO1FBQVosQ0FBZCxDQUFKLEVBQXNDLEtBQXRDLEVBcEZOOztRQXNGTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQUEsQ0FBVTtZQUFFLElBQUEsRUFBTTtVQUFSLENBQVY7UUFBSCxDQUFkLENBQUosRUFBOEQsSUFBOUQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQUEsQ0FBVTtZQUFFLElBQUEsRUFBTTtVQUFSLENBQVY7UUFBSCxDQUFkLENBQUosRUFBOEQsSUFBOUQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQUEsQ0FBVTtZQUFFLElBQUEsRUFBTTtVQUFSLENBQVY7UUFBSCxDQUFkLENBQUosRUFBOEQsSUFBOUQ7ZUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQUEsQ0FBVTtZQUFFLElBQUEsRUFBTTtVQUFSLENBQVY7UUFBSCxDQUFkLENBQUosRUFBOEQsS0FBOUQ7TUExRk8sQ0FBQSxJQWhDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQWdKSztJQWpKVTtFQXJPYixFQXpIRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzZ0JBLDRDQUFBLEdBQStDLE1BQUEsUUFBQSxDQUFBLENBQUE7QUFDL0MsUUFBQSxVQUFBLEVBQUEsV0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsVUFBQSxFQUFBO0lBQUUsQ0FBQSxDQUFFLFFBQUYsRUFDRSxPQURGLEVBRUUsV0FGRixFQUdFLFVBSEYsRUFJRSxVQUpGLENBQUEsR0FJa0IsU0FBQSxDQUFBLENBSmxCLEVBQUY7Ozs7SUFRRSxDQUFBLENBQUUsTUFBRixDQUFBLEdBQWMsT0FBQSxDQUFRLFFBQVIsQ0FBZCxFQVJGOztJQVVFLE1BQU0sTUFBQSxDQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsVUFBVixFQUFzQixNQUF0QixDQUFQO0lBQ04sTUFBTSxNQUFBLENBQU8sSUFBSSxDQUFDLElBQUwsQ0FBVSxVQUFWLEVBQXNCLEtBQXRCLENBQVA7SUFDTixNQUFNLE1BQUEsQ0FBTyxJQUFJLENBQUMsSUFBTCxDQUFVLFVBQVYsRUFBc0IsUUFBdEIsQ0FBUDtJQUNOLE1BQU0sTUFBQSxDQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsVUFBVixFQUFzQixPQUF0QixDQUFQO0lBQ04sTUFBTSxNQUFBLENBQU8sSUFBSSxDQUFDLElBQUwsQ0FBVSxVQUFWLEVBQXNCLE9BQXRCLENBQVA7SUFDTixNQUFNLE1BQUEsQ0FBTyxJQUFJLENBQUMsSUFBTCxDQUFVLFVBQVYsRUFBc0IsT0FBdEIsQ0FBUDtJQUNOLE1BQU0sTUFBQSxDQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsVUFBVixFQUFzQixRQUF0QixDQUFQO0lBQ04sTUFBTSxNQUFBLENBQU8sSUFBSSxDQUFDLElBQUwsQ0FBVSxVQUFWLEVBQXNCLE9BQXRCLENBQVA7SUFDTixNQUFNLE1BQUEsQ0FBTyxJQUFJLENBQUMsSUFBTCxDQUFVLFVBQVYsRUFBc0IsWUFBdEIsQ0FBUDtJQUNOLE1BQU0sTUFBQSxDQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsVUFBVixFQUFzQixZQUF0QixDQUFQO0lBQ04sTUFBTSxNQUFBLENBQU8sSUFBSSxDQUFDLElBQUwsQ0FBVSxVQUFWLEVBQXNCLE9BQXRCLENBQVA7SUFDTixNQUFNLE1BQUEsQ0FBTyxJQUFJLENBQUMsSUFBTCxDQUFVLFVBQVYsRUFBc0IsT0FBdEIsQ0FBUDtJQUNOLE1BQU0sTUFBQSxDQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsVUFBVixFQUFzQixPQUF0QixDQUFQO0lBQ04sTUFBTSxNQUFBLENBQU8sSUFBSSxDQUFDLElBQUwsQ0FBVSxVQUFWLEVBQXNCLE9BQXRCLENBQVA7SUFDTixNQUFNLE1BQUEsQ0FBTyxJQUFJLENBQUMsSUFBTCxDQUFVLFVBQVYsRUFBc0IsT0FBdEIsQ0FBUDtJQUNOLE1BQU0sTUFBQSxDQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsVUFBVixFQUFzQixRQUF0QixDQUFQO0lBQ04sTUFBTSxNQUFBLENBQU8sSUFBSSxDQUFDLElBQUwsQ0FBVSxVQUFWLEVBQXNCLFNBQXRCLENBQVA7SUFDTixNQUFNLE1BQUEsQ0FBTyxJQUFJLENBQUMsSUFBTCxDQUFVLFVBQVYsRUFBc0IsUUFBdEIsQ0FBUCxFQTNCUjs7Ozs7Ozs7Ozs7O1dBd0NHO0VBekM0QyxFQXRnQi9DOzs7RUFrakJBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsS0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsSUFBdkM7UUFBNkMsYUFBQSxFQUFlO01BQTVEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO2FBQ2QsQ0FBQSxNQUFNLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsVUFBekIsQ0FBb0MsSUFBQyxDQUFBLEtBQXJDLENBQU47SUFIc0MsQ0FBQSxJQUF4Qzs7O0VBbGpCQTs7Ozs7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1zZm1vZHVsZXMvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QsICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmLCAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbnsgJCwgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICdleGVjYSdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5nZXRfcGF0aHMgPSAtPlxuICBoZW5naXN0X3BhdGggID0gUEFUSC5yZXNvbHZlIF9fZGlybmFtZSwgJy4uLy4uLy4uJ1xuICByZWZfcGF0aCAgICAgID0gUEFUSC5qb2luIGhlbmdpc3RfcGF0aCwgJ2FwcHMvYnZmcydcbiAgZGJfcGF0aCAgICAgICA9IFBBVEguam9pbiByZWZfcGF0aCwgJ2J2ZnMuZGInXG4gIG1vdW50X3BhdGggICAgPSBQQVRILmpvaW4gcmVmX3BhdGgsICdtb3VudCdcbiAgYXNzZXRzX3BhdGggICA9IFBBVEguam9pbiBoZW5naXN0X3BhdGgsICdhc3NldHMvYnZmcydcbiAgYXJlbmFfcGF0aCAgICA9IFBBVEguam9pbiBoZW5naXN0X3BhdGgsICdhcmVuYS9idmZzJ1xuICByZXR1cm4geyByZWZfcGF0aCwgZGJfcGF0aCwgbW91bnRfcGF0aCwgYXNzZXRzX3BhdGgsIGFyZW5hX3BhdGgsIH1cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRhc2tzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHBhdGhzOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICB7IHJlZl9wYXRoLFxuICAgICAgZGJfcGF0aCxcbiAgICAgIG1vdW50X3BhdGgsXG4gICAgICBhc3NldHNfcGF0aCxcbiAgICAgIGFyZW5hX3BhdGgsICAgICAgICAgICAgIH0gPSBnZXRfcGF0aHMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGJ2ZnMgICAgICAgICAgPSBEYnJpYy5vcGVuIGRiX3BhdGhcbiAgICAgIHJlYWRfbWV0YWRhdGEgPSBTUUxcIlwiXCJzZWxlY3QgZmlsZV9pZCwgcGF0aCwgbmFtZSwgc2l6ZSBmcm9tIGJ2X3BhdGhzIHdoZXJlIHR5cGUgaW4gKCAnZmlsZScgKTtcIlwiXCJcbiAgICAgIHJlYWRfbGluZXMgICAgPSBTUUxcIlwiXCJzZWxlY3QgbGluZSwgZW9sIGZyb20gYnZfbGluZXMgd2hlcmUgZmlsZV9pZCA9ICRmaWxlX2lkIG9yZGVyIGJ5IGxpbmVfbnI7XCJcIlwiO1xuICAgICAgZm9yIHsgZmlsZV9pZCwgcGF0aCwgfSBmcm9tIGJ2ZnMud2FsayByZWFkX21ldGFkYXRhXG4gICAgICAgIGhlbHAgJ86pYnZmc19fXzEnLCB7IGZpbGVfaWQsIHBhdGgsIH1cbiAgICAgICAgQGVxICggzqlidmZzX19fMiA9IC0+IGlmICggZmlsZV9pZCBpcyAxICkgdGhlbiAoIHBhdGggaXMgJy4nICkgZWxzZSAoIHBhdGhbIDAgXSBpc250ICcvJyApICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZmlsZXNpemVzOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICB7IHJlZl9wYXRoLFxuICAgICAgZGJfcGF0aCxcbiAgICAgIG1vdW50X3BhdGgsXG4gICAgICBhc3NldHNfcGF0aCxcbiAgICAgIGFyZW5hX3BhdGgsICAgICAgICAgICAgIH0gPSBnZXRfcGF0aHMoKVxuICAgIEJzcWwzICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2JldHRlci1zcWxpdGUzJ1xuICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xhc3MgQnZmcyBleHRlbmRzIERicmljXG4gICAgICBAZGJfY2xhc3M6IEJzcWwzXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBtZWFuaW5ncy50eHQgTCAxMTc2MVxuICAgICAgYnZmcyAgICAgICAgICA9IEJ2ZnMub3BlbiBkYl9wYXRoXG4gICAgICByZWFkX21ldGFkYXRhID0gU1FMXCJcIlwic2VsZWN0IGZpbGVfaWQsIHBhdGgsIG5hbWUsIHNpemUgZnJvbSBidl9wYXRocyB3aGVyZSB0eXBlIGluICggJ2ZpbGUnICk7XCJcIlwiXG4gICAgICByZWFkX2xpbmVzICAgID0gU1FMXCJcIlwic2VsZWN0IGxpbmVfbnIsIGxpbmUsIGVvbCBmcm9tIGJ2X2xpbmVzIHdoZXJlIGZpbGVfaWQgPSAkZmlsZV9pZCBvcmRlciBieSBsaW5lX25yO1wiXCJcIjtcbiAgICAgIGZvciB7IGZpbGVfaWQsIHBhdGgsIHNpemUsIH0gZnJvbSBidmZzLndhbGsgcmVhZF9tZXRhZGF0YVxuICAgICAgICBjb250aW51ZSB1bmxlc3MgcGF0aCBpcyAnUkVBRE1FLm1kJ1xuICAgICAgICAjIGNvbnRpbnVlIHVubGVzcyBwYXRoIGlzICdtZWFuaW5ncy50eHQnXG4gICAgICAgIGZvciB7IGxpbmVfbnIsIGxpbmUsIGVvbCwgfSBmcm9tIGJ2ZnMud2FsayByZWFkX2xpbmVzLCB7IGZpbGVfaWQsIH1cbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSAoIGxpbmUgKyBlb2wgKVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMjIyBUQUlOVCBjb21wYXJlIGxpbmUgY291bnRzIHdpdGggdGhvc2Ugb2J0YWluZWQgd2l0aCBgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucygpYCAjIyNcbiAgICBkbyA9PlxuICAgICAgYnZmcyAgICAgICAgICA9IEJ2ZnMub3BlbiBkYl9wYXRoXG4gICAgICByZWFkX21ldGFkYXRhID0gU1FMXCJcIlwic2VsZWN0IGZpbGVfaWQsIHBhdGgsIG5hbWUsIHNpemUgZnJvbSBidl9wYXRocyB3aGVyZSB0eXBlIGluICggJ2ZpbGUnICk7XCJcIlwiXG4gICAgICByZWFkX2xpbmVzICAgID0gU1FMXCJcIlwic2VsZWN0IGxpbmVfbnIsIGxpbmUsIGVvbCBmcm9tIGJ2X2xpbmVzIHdoZXJlIGZpbGVfaWQgPSAkZmlsZV9pZCBvcmRlciBieSBsaW5lX25yO1wiXCJcIjtcbiAgICAgIGZvciB7IGZpbGVfaWQsIHBhdGgsIHNpemUsIH0gZnJvbSBidmZzLndhbGsgcmVhZF9tZXRhZGF0YVxuICAgICAgICAjIGNvbnRpbnVlIHVubGVzcyBwYXRoIGlzICdSRUFETUUubWQnXG4gICAgICAgIGxpbmVfY291bnQgID0gMFxuICAgICAgICBieXRlX2NvdW50ICA9IDBcbiAgICAgICAgZm9yIHsgbGluZV9uciwgbGluZSwgZW9sLCB9IGZyb20gYnZmcy53YWxrIHJlYWRfbGluZXMsIHsgZmlsZV9pZCwgfVxuICAgICAgICAgIGluZm8gJ86pYnZmc19fXzMnLCB7IHBhdGgsIGxpbmVfbnIsIGxpbmUgfSBpZiBsaW5lX2NvdW50IDwgMTBcbiAgICAgICAgICBsaW5lX2NvdW50KytcbiAgICAgICAgICBieXRlX2NvdW50ICs9IEJ1ZmZlci5ieXRlTGVuZ3RoICggbGluZSArIGVvbCApLCAndXRmLTgnXG4gICAgICAgIGhlbHAgJ86pYnZmc19fXzQnLCB7IHBhdGgsIHNpemUsIGJ5dGVfY291bnQsIH1cbiAgICAgICAgQGVxICggzqlidmZzX19fNSA9IC0+IGJ5dGVfY291bnQgKSwgc2l6ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBwb3N0cG9uZWQgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNzOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjIHsgSmV0c3RyZWFtLFxuICAgICMgICBBc3luY19qZXRzdHJlYW0sXG4gICAgIyAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAgIDUwOSwgc3BybTogJ2Ryd3hyd3hyLXgnLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogMTY4MzIsIHNwcm06ICdkcnd4LS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06ICAgNDQ4LCBzcHJtOiAnZHJ3eC0tLS0tLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAxNjcwNCwgc3BybTogJ2RyLXgtLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogICA1MDksIHNwcm06ICdkcnd4cnd4ci14JywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06ICAgNTA5LCBzcHJtOiAnZHJ3eHJ3eHIteCcsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzIwNCwgc3BybTogJy5ydy1ydy1yLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMxNTIsIHNwcm06ICcucnctLS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMjA0LCBzcHJtOiAnZHJ3eC0tLS0tLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAgIDQ0OCwgc3BybTogJy5ydy1ydy1yLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMyMDQsIHNwcm06ICcucnctcnctci0tJywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMTUyLCBzcHJtOiAnLnJ3LS0tLS0tLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzE1Miwgc3BybTogJy5ydy0tLS0tLS0nLCB9XG4gICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZm9yIHsgdHlwZSwgbnBybSwgc3BybSwgfSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgIG9wcm0gPSAnMG8nICsgKCBucHJtLnRvU3RyaW5nICA4ICkucGFkU3RhcnQgIDgsICcwJ1xuICAgICAgICB4cHJtID0gJzB4JyArICggbnBybS50b1N0cmluZyAxNiApLnBhZFN0YXJ0ICA4LCAnMCdcbiAgICAgICAgYnBybSA9ICdfXycgKyAoIG5wcm0udG9TdHJpbmcgIDIgKS5wYWRTdGFydCAxNiwgJzAnXG4gICAgICAgIGRlYnVnICfOqWJ2ZnNfX182JywgZlwiI3tucHJtfTo+MTBjOyAje29wcm19Oj4xMGM7ICN7eHBybX06PjEwYzsgI3ticHJtfTo+MjBjOyAje3Nwcm19Oj4xMGM7IFwiXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZpbGVfcGVybWlzc2lvbnNfbG9naWM6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICBVUCAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAndW5peC1wZXJtaXNzaW9ucydcbiAgICBGUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICBkZWJ1ZyAnzqlidmZzX19fNycsICggayBmb3IgayBvZiBVUCApXG4gICAgZGVidWcgJ86pYnZmc19fXzgnLCBVUC5jb252ZXJ0Lm9iamVjdCAoIEZTLnN0YXRTeW5jICcvZXRjL3Bhc3N3ZCcgKS5tb2RlXG4gICAgZGVidWcgJ86pYnZmc19fXzknLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICdhLXcnfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJ2ZnNfXzEwJywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAnYSt3J306PiMwM287XCJcbiAgICBkZWJ1ZyAnzqlidmZzX18xMScsIGZcIiN7VVAuY29udmVydC5udW1iZXIgJ3Urdyd9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYnZmc19fMTInLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICd1K3InfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJ2ZnNfXzEzJywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAndS13LGctdyxvLXcnfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJ2ZnNfXzE0JywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAndSt3LGcrdyxvK3cnfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJ2ZnNfXzE1JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgJ3UrdyxnK3csbyt3J306PjIwYztcIlxuICAgIGhlbHAgJ86pYnZmc19fMTYnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzc3NX06PjIwYztcIlxuICAgIGhlbHAgJ86pYnZmc19fMTcnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzY2NH06PjIwYztcIlxuICAgIGhlbHAgJ86pYnZmc19fMTgnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzU1NX06PjIwYztcIlxuICAgIGhlbHAgJ86pYnZmc19fMTknLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzQ0NH06PjIwYztcIlxuICAgIGhlbHAgJ86pYnZmc19fMjAnXG4gICAgaGVscCAnzqlidmZzX18yMScsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDAwNzc1fTo+MjBjO1wiXG4gICAgaGVscCAnzqlidmZzX18yMicsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDQwNTU1fTo+MjBjO1wiXG4gICAgaGVscCAnzqlidmZzX18yMycsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMTAwNDQ0fTo+MjBjO1wiXG4gICAgaGVscCAnzqlidmZzX18yNCdcbiAgICBoZWxwICfOqWJ2ZnNfXzI1JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wMDA3NzUgJiAweGZlMDAgfCAweDAxZmQgfTo+MjBjO1wiICMjIyAwbzc3NSBkcnd4cnd4ci14IGZvbGRlciBvcGVuICMjI1xuICAgIGhlbHAgJ86pYnZmc19fMjYnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzA0MDU1NSAmIDB4ZmUwMCB8IDB4MDFmZCB9Oj4yMGM7XCIgIyMjIDBvNzc1IGRyd3hyd3hyLXggZm9sZGVyIG9wZW4gIyMjXG4gICAgaGVscCAnzqlidmZzX18yNycsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMTAwNDQ0ICYgMHhmZTAwIHwgMHgwMWI0IH06PjIwYztcIiAjIyMgMG82NjQgLnJ3LXJ3LXItLSBmaWxlIG9wZW4gIyMjXG4gICAgaGVscCAnzqlidmZzX18yOCdcbiAgICBoZWxwICfOqWJ2ZnNfXzI5JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wMDA3NzUgJiAweGZlMDAgfCAweDAxNmQgfTo+MjBjO1wiICMjIyAwbzU1NSBkci14ci14ci14IGZvbGRlciBjbG9zZWQgIyMjXG4gICAgaGVscCAnzqlidmZzX18zMCcsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDQwNTU1ICYgMHhmZTAwIHwgMHgwMTZkIH06PjIwYztcIiAjIyMgMG81NTUgZHIteHIteHIteCBmb2xkZXIgY2xvc2VkICMjI1xuICAgIGhlbHAgJ86pYnZmc19fMzEnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzEwMDQ0NCAmIDB4ZmUwMCB8IDB4MDEyNCB9Oj4yMGM7XCIgIyMjIDBvNDQ0IC5yLS1yLS1yLS0gZmlsZSBjbG9zZWQgIyMjXG4gICAgIyBAZXEgKCDOqWJ2ZnNfXzMyID0gLT4gZmFsc2UgKSwgZmFsc2VcbiAgICAjIyNcbiAgICBoZWxwICfOqWJ2ZnN0b19fMzMnLCBcImRyd3hyd3hyLXhcIiwgKCAwbzc3NS50b1N0cmluZyA4ICksICggJzB4JyArICggMG83NzUudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA0LCAnMCcgKVxuICAgIGhlbHAgJ86pYnZmc3RvX18zNCcsIFwiLnJ3LXJ3LXItLVwiLCAoIDBvNjY0LnRvU3RyaW5nIDggKSwgKCAnMHgnICsgKCAwbzY2NC50b1N0cmluZyAxNiApLnBhZFN0YXJ0IDQsICcwJyApXG4gICAgaGVscCAnzqlidmZzdG9fXzM1JywgXCJkci14ci14ci14XCIsICggMG81NTUudG9TdHJpbmcgOCApLCAoICcweCcgKyAoIDBvNTU1LnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgNCwgJzAnIClcbiAgICBoZWxwICfOqWJ2ZnN0b19fMzYnLCBcIi5yLS1yLS1yLS1cIiwgKCAwbzQ0NC50b1N0cmluZyA4ICksICggJzB4JyArICggMG80NDQudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA0LCAnMCcgKVxuICAgIGhlbHAgJ86pYnZmc3RvX18zNycsIFwiPz8tPz8tPz8tP1wiLCAoIDBiMTAxXzEwMV8xMDEudG9TdHJpbmcgOCApLCAoICcweCcgKyAoIDBiMTAxXzEwMV8xMDEudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA0LCAnMCcgKVxuICAgIGhlbHAgJ86pYnZmc3RvX18zOCcsIFwiPz93Pz93Pz8tP1wiLCAoIDBiMDEwXzAxMF8wMDAudG9TdHJpbmcgOCApLCAoICcweCcgKyAoIDBiMDEwXzAxMF8wMDAudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA0LCAnMCcgKVxuICAgICMjI1xuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhY2Nlc3NfZnNfd2l0aF9kYjogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgeyBleGVjYVN5bmMsICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICdleGVjYSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIFNxbGl0ZWZzX2RiIGV4dGVuZHMgRGJyaWNcbiAgICAgICMgQGJ1aWxkOiBbXG4gICAgICAjICAgU1FMXCJcIlwiXG4gICAgICAjICAgICBjcmVhdGUgdGFibGUgbm9uY29uZm9ybV9vbmUgKCBhIHRleHQgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICMgICBTUUxcIlwiXCJcbiAgICAgICMgICAgIC0tIHRoaXMgY29tbWVudCBzaG91bGRuJ3QgYmUgaGVyZVxuICAgICAgIyAgICAgY3JlYXRlIHZpZXcgbm9uY29uZm9ybV90d28gYXMgc2VsZWN0ICogZnJvbSBub25jb25mb3JtX29uZTtcIlwiXCJcbiAgICAgICMgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBnZXRfZnNfb2JqZWN0czogU1FMXCJcIlwiXG4gICAgICAgICAgc2VsZWN0ICogZnJvbSBiYl9saXN0O1wiXCJcIlxuICAgICAgd2Fsa19mc19vYmplY3RzOiAtPiB5aWVsZCBmcm9tIEBzdGF0ZW1lbnRzLmdldF9mc19vYmplY3RzLml0ZXJhdGUoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgeyByZWZfcGF0aCxcbiAgICAgIGRiX3BhdGgsXG4gICAgICBtb3VudF9wYXRoLCB9ID0gZ2V0X3BhdGhzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNoZWxsX2NmZyAgID0geyBjd2Q6IHJlZl9wYXRoLCBsaW5lczogdHJ1ZSwgfVxuICAgIHNoZWxsICAgICAgID0gKCBjbWQsIFAuLi4gKSAtPiAoIGV4ZWNhU3luYyBjbWQsIFAsIHNoZWxsX2NmZyApLnN0ZG91dFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGIgICAgICAgICAgPSBTcWxpdGVmc19kYi5vcGVuIGRiX3BhdGhcbiAgICBkZWJ1ZyAnzqlidmZzX18zOScsIGRiLnN0YXRlbWVudHNcbiAgICBwYXRocyAgICAgICA9IFtdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZm9yIGxpbmUgaW4gc2hlbGwgJ3Nob3ctbGF5b3V0JywgbW91bnRfcGF0aFxuICAgICAgICBlY2hvIGxpbmVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgbW9kZSA9ICdjbG9zZSdcbiAgICAjIG1vZGUgPSAnb3BlbidcbiAgICBtb2RlID0gJ25vdGhpbmcnXG4gICAgc3dpdGNoIG1vZGVcbiAgICAgIHdoZW4gJ29wZW4nIHRoZW4gZG8gPT5cbiAgICAgICAgZGVidWcgJ86pYnZmc19fNDAnLCBkYi5leGVjdXRlIFNRTFwiXCJcIlxuICAgICAgICB1cGRhdGUgbWV0YWRhdGEgc2V0IG1vZGUgPSBzLm9wZW5fbW9kZVxuICAgICAgICAgIGZyb20gbWV0YWRhdGEgICAgICAgICAgIGFzIG1cbiAgICAgICAgICBqb2luIGJiX3N0YW5kYXJkX21vZGVzICBhcyBzIG9uICggbS5pZCA9IHMuZmlsZV9pZCApO1wiXCJcIlxuICAgICAgICA7bnVsbFxuICAgICAgd2hlbiAnY2xvc2UnIHRoZW4gZG8gPT5cbiAgICAgICAgZGVidWcgJ86pYnZmc19fNDEnLCBkYi5leGVjdXRlIFNRTFwiXCJcIlxuICAgICAgICB1cGRhdGUgbWV0YWRhdGEgc2V0IG1vZGUgPSBzLmNsb3NlZF9tb2RlXG4gICAgICAgICAgZnJvbSBtZXRhZGF0YSAgICAgICAgICAgYXMgbVxuICAgICAgICAgIGpvaW4gYmJfc3RhbmRhcmRfbW9kZXMgIGFzIHMgb24gKCBtLmlkID0gcy5maWxlX2lkICk7XCJcIlwiXG4gICAgICAgIDtudWxsXG4gICAgICB3aGVuICdub3RoaW5nJyB0aGVuIG51bGxcbiAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yIFwidW5rbm93biBtb2RlOiAje3JwciBtb2RlfVwiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgZCBmcm9tIGRiLndhbGtfZnNfb2JqZWN0cygpXG4gICAgICBmdWxsX3BhdGggPSBQQVRILmpvaW4gbW91bnRfcGF0aCwgZC5wYXRoXG4gICAgICBwYXRocy5wdXNoIGZ1bGxfcGF0aFxuICAgICAgdXJnZSAnzqlidmZzX180MicsIGQubW9kZV9vLCBkLnBhdGggIyB7IGQuLi4sIGZ1bGxfcGF0aCwgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZvciBsaW5lIGluIHNoZWxsICdzaG93LWxheW91dCcsIG1vdW50X3BhdGhcbiAgICAgICAgZWNobyBsaW5lXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2NyaXB0c19ZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVk6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgIHsgZXhlY2FTeW5jLCAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnZXhlY2EnXG4gICAgeyBTaGVsbCwgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2J2ZnMnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB7IHJlZl9wYXRoLFxuICAgICAgZGJfcGF0aCxcbiAgICAgIG1vdW50X3BhdGgsIH0gPSBnZXRfcGF0aHMoKVxuICAgIHNoZWxsX2NmZyAgID0geyBjd2Q6IHJlZl9wYXRoLCBsaW5lczogdHJ1ZSwgb25seV9zdGRvdXQ6IHRydWUsIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIG1hdGNoX2FsbF9mc19tb3VudHMgPSAoIGNmZyApIC0+XG4gICAgICBSICAgICA9IFtdXG4gICAgICBsaW5lcyA9IHNoZWxsIHsgb25seV9zdGRvdXQ6IHRydWUsIH0sICdjYXQnLCAnL2V0Yy9tdGFiJ1xuICAgICAgZm9yIGxpbmUgaW4gbGluZXNcbiAgICAgICAgWyBkZXZpY2UsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB0eXBlLCAgIF0gPSBsaW5lLnNwbGl0IC9cXHgyMC9cbiAgICAgICAgY29udGludWUgaWYgY2ZnLmRldmljZT8gYW5kICggZGV2aWNlIGlzbnQgY2ZnLmRldmljZSApXG4gICAgICAgIHBhdGggICAgICAgID0gZGVjb2RlX29jdGFsIHBhdGhcbiAgICAgICAgY29udGludWUgaWYgY2ZnLnBhdGg/ICAgYW5kICggcGF0aCAgIGlzbnQgY2ZnLnBhdGggICApXG4gICAgICAgIGNvbnRpbnVlIGlmIGNmZy50eXBlPyAgIGFuZCAoIHR5cGUgICBpc250IGNmZy50eXBlICAgKVxuICAgICAgICBSLnB1c2ggeyBkZXZpY2UsIHBhdGgsIHR5cGUsIH1cbiAgICAgIHJldHVybiBSXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBpc19tb3VudGVkID0gKCBjZmcgKSAtPlxuICAgICAgc3dpdGNoICggbW91bnRzID0gbWF0Y2hfYWxsX2ZzX21vdW50cyBjZmcgKS5sZW5ndGhcbiAgICAgICAgd2hlbiAwIHRoZW4gcmV0dXJuIGZhbHNlXG4gICAgICAgIHdoZW4gMSB0aGVuIHJldHVybiB0cnVlXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqWJ2ZnNfXzQzIGV4cGVjdGVkIDAgb3IgMSBtYXRjaCwgZ290ICN7bW91bnRzLmxlbmd0aH06ICN7cnByIG1vdW50c31cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHNoID0gbmV3IFNoZWxsKClcbiAgICAgIEB0aHJvd3MgKCDOqWJ2ZnNfXzQ0ID0gLT4gc2guX3ZhbGlkYXRlX2NhbGxfYXJndW1lbnRzIG51bGwgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBwb2Qgb3IgYSB0ZXh0LCBnb3QgYS9cbiAgICAgIEB0aHJvd3MgKCDOqWJ2ZnNfXzQ1ID0gLT4gc2guX3ZhbGlkYXRlX2NhbGxfYXJndW1lbnRzIFtdICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBwb2Qgb3IgYSB0ZXh0LCBnb3QgYS9cbiAgICAgIEB0aHJvd3MgKCDOqWJ2ZnNfXzQ2ID0gLT4gc2guX3ZhbGlkYXRlX2NhbGxfYXJndW1lbnRzIHt9ICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0LCBnb3QgYS9cbiAgICAgIEBlcSAgICAgKCDOqWJ2ZnNfXzQ3ID0gLT4gc2guX3ZhbGlkYXRlX2NhbGxfYXJndW1lbnRzICdscycgICAgICAgICAgICAgICApLCB7IGNmZzogeyBjd2Q6IHJlZl9wYXRoLCBsaW5lczogdHJ1ZSwgfSwgY21kOiAnbHMnLCBwYXJhbWV0ZXJzOiBbXSB9XG4gICAgICBAZXEgICAgICggzqlidmZzX180OCA9IC0+IHNoLl92YWxpZGF0ZV9jYWxsX2FyZ3VtZW50cyAnbHMnLCAnLUFsRicgICAgICAgKSwgeyBjZmc6IHsgY3dkOiByZWZfcGF0aCwgbGluZXM6IHRydWUsIH0sIGNtZDogJ2xzJywgcGFyYW1ldGVyczogWyAnLUFsRicsIF0gfVxuICAgICAgQGVxICAgICAoIM6pYnZmc19fNDkgPSAtPiBzaC5fdmFsaWRhdGVfY2FsbF9hcmd1bWVudHMgJ2xzJywgJy1BbEYnLCAnLicgICksIHsgY2ZnOiB7IGN3ZDogcmVmX3BhdGgsIGxpbmVzOiB0cnVlLCB9LCBjbWQ6ICdscycsIHBhcmFtZXRlcnM6IFsgJy1BbEYnLCAnLicsIF0gfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzaCA9IG5ldyBTaGVsbCBzaGVsbF9jZmdcbiAgICAgIGRlYnVnICfOqWJ2ZnNfXzUwJywgc2guY2FsbCAnbHMnXG4gICAgICBkZWJ1ZyAnzqlidmZzX181MScsIHNoLmNhbGwgJ2dyZXAnLCAnLVBpJywgJ3NxbGl0ZWZzJywgJy9ldGMvbXRhYidcbiAgICAgIHRyeSBoZWxwICfOqWJ2ZnNfXzUyJywgc2guY2FsbCAnZ3JlcCcsICctUGknLCAnc3FsaXRlZnMnLCAnL2V0Yy9tdGFiJyAgICAgICAgIGNhdGNoIGUgdGhlbiB3YXJuICfOqWJ2ZnNfXzUzJywgcmV2ZXJzZSBlLm1lc3NhZ2VcbiAgICAgIHRyeSBoZWxwICfOqWJ2ZnNfXzU0Jywgc2guY2FsbCAnZ3JlcCcsICctUGknLCAnc3FsaXRlZnNZWVlZJywgJy9ldGMvbXRhYicgICAgIGNhdGNoIGUgdGhlbiB3YXJuICfOqWJ2ZnNfXzU1JywgcmV2ZXJzZSBlLm1lc3NhZ2VcbiAgICAgIHRyeSBoZWxwICfOqWJ2ZnNfXzU2Jywgc2guY2FsbCAnZ3JlcCcsICctUGknLCAnc3FsaXRlZnNZWVlZJywgJy9ldGMvbXRhYllZWVknIGNhdGNoIGUgdGhlbiB3YXJuICfOqWJ2ZnNfXzU3JywgcmV2ZXJzZSBlLm1lc3NhZ2VcbiAgICAgIDtudWxsXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHNoID0gbmV3IFNoZWxsIHNoZWxsX2NmZ1xuICAgICAgaW5mbyAnzqlidmZzX181OCcsIG1hdGNoX2FsbF9mc19tb3VudHMgeyBkZXZpY2U6ICdzcWxpdGVmcycsIH1cbiAgICAgIGluZm8gJ86pYnZmc19fNTknLCBtYXRjaF9hbGxfZnNfbW91bnRzIHsgZGV2aWNlOiAnc3FsaXRlZnMnLCB0eXBlOiAnc3FsZnMnLCB9XG4gICAgICBpbmZvICfOqWJ2ZnNfXzYwJywgbWF0Y2hfYWxsX2ZzX21vdW50cyB7IGRldmljZTogJ3NxbGl0ZWZzJywgdHlwZTogJ2Z1c2UnLCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHNoID0gbmV3IFNoZWxsIHNoZWxsX2NmZ1xuICAgICAgaW5mbyAnzqlidmZzX182MScsIGlzX21vdW50ZWQgeyBkZXZpY2U6ICdzcWxpdGVmcycsIH1cbiAgICAgIGluZm8gJ86pYnZmc19fNjInLCBpc19tb3VudGVkIHsgZGV2aWNlOiAnc3FsaXRlZnMnLCB0eXBlOiAnc3FsZnMnLCB9XG4gICAgICBpbmZvICfOqWJ2ZnNfXzYzJywgaXNfbW91bnRlZCB7IGRldmljZTogJ3NxbGl0ZWZzJywgdHlwZTogJ2Z1c2UnLCB9XG4gICAgICB0cnkgaW5mbyAnzqlidmZzX182NCcsIGlzX21vdW50ZWQge30gY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYnZmc19fNjUnLCByZXZlcnNlIGUubWVzc2FnZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMjI1xuICAgIE91dHB1dCB3aGVuIG1vdW50IHBvaW50IG5hbWUgaXMgJ20gbyB1IG4gdCc6XG4gICAgICBbICdzcWxpdGVmcyAvaG9tZS9mbG93L2p6ci9idmZzL21cXFxcMDQwb1xcXFwwNDB1XFxcXDA0MG5cXFxcMDQwdCBmdXNlIHJ3LG5vc3VpZCxub2RldixyZWxhdGltZSx1c2VyX2lkPTEwMDAsZ3JvdXBfaWQ9MTAwMCxkZWZhdWx0X3Blcm1pc3Npb25zLGFsbG93X290aGVyIDAgMCcgXVxuICAgIE91dHB1dCB3aGVuIG1vdW50IHBvaW50IG5hbWUgaXMgJ/CrnYAnOlxuICAgICAgWyAnc3FsaXRlZnMgL2hvbWUvZmxvdy9qenIvYnZmcy/wq52AIGZ1c2Ugcncsbm9zdWlkLG5vZGV2LHJlbGF0aW1lLHVzZXJfaWQ9MTAwMCxncm91cF9pZD0xMDAwLGRlZmF1bHRfcGVybWlzc2lvbnMsYWxsb3dfb3RoZXIgMCAwJyBdXG4gICAgIyMjXG4gICAgIyBzcWxpdGVmcyAvaG9tZS9mbG93L2p6ci9idmZzL21vdW50IGZ1c2Ugcncsbm9zdWlkLG5vZGV2LHJlbGF0aW1lLHVzZXJfaWQ9MTAwMCxncm91cF9pZD0xMDAwLGRlZmF1bHRfcGVybWlzc2lvbnMsYWxsb3dfb3RoZXIgMCAwXG4gICAgIyBncmVwOiAvZXRjL210YWJZWVlZOiBObyBzdWNoIGZpbGUgb3IgZGlyZWN0b3J5XG4gICAgIyAgJCQkICAgIC8vLyAyINGFICBidmZzIEAgMS4wLjAgcGtnICBhdCAxMToxNTozNlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyB0cmFzaCBidmZzLmRiICYmIGJpbi9zcWxpdGUtZnMgbW91bnQgLS0gLi9idmZzLmRiICYgZGlzb3duICYmIHNxbGl0ZTMgYnZmcy5kYiBcIi5kdW1wXCIgPiBidmZzLmR1bXAuc3FsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmNfc2hlbGw6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgIHsgJCwgICAgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnZXhlY2EnXG4gICAgeyBTaGVsbCwgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2J2ZnMnXG4gICAgeyBBc3luY19qZXRzdHJlYW0sXG4gICAgICBKZXRzdHJlYW0sXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgIHsgbGV0cyxcbiAgICAgIGZyZWV6ZSwgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbGV0c2ZyZWV6ZXRoYXQnXG4gICAgY3JlYXRlX2dsb2JfbWF0Y2hlciAgICAgICAgICAgPSByZXF1aXJlICdwaWNvbWF0Y2gnXG4gICAgeyByZWdleCwgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICdyZWdleCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGVjb2RlX29jdGFsID0gKCB0ZXh0ICkgLT4gdGV4dC5yZXBsYWNlIC8oPzwhXFxcXClcXFxcKFswLTddezN9KS9ndiwgKCAkMCwgJDEgKSAtPlxuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50IHBhcnNlSW50ICQxLCA4XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGF3YWl0ICQoe3ZlcmJvc2U6ICdmdWxsJ30pXCJjYXQgcGFja2FnZS5qc29uXCJcbiAgICBhd2FpdCAkKHt2ZXJib3NlOiAnZnVsbCd9KVwiY2F0IC5naXRpZ25vcmVcIlxuICAgIFIgPSBhd2FpdCAkKCB7IGxpbmVzOiB0cnVlLCB2ZXJib3NlOiAnZnVsbCcsIH0gKVwiY2F0IC5naXRpZ25vcmVcIi5waXBlXCJzb3J0XCJcbiAgICBkZWJ1ZyAnzqlidmZzX182NicsIFIuc3Rkb3V0XG4gICAgUiA9IGF3YWl0IFxcXG4gICAgICAkKCAgICAgIHsgbGluZXM6IHRydWUsIHZlcmJvc2U6ICdmdWxsJywgfSApXCJjYXQgLmdpdGlnbm9yZVwiIFxcXG4gICAgICAucGlwZSggIHsgbGluZXM6IHRydWUsIHZlcmJvc2U6ICdmdWxsJywgfSApXCJzb3J0XCJcbiAgICBkZWJ1ZyAnzqlidmZzX182NycsICggcnByIFIuc3Rkb3V0IClbIC4uIDEwOCBdICsgJy4uLidcbiAgICBSID0gYXdhaXQgJCggeyBsaW5lczogdHJ1ZSwgdmVyYm9zZTogJ2Z1bGwnLCB9IClcImNhdCAuZ2l0aWdub3JlXCIucGlwZVwic29ydFwiLnBpcGVcImhlYWQgLW4yXCJcbiAgICBkZWJ1ZyAnzqlidmZzX182OCcsICggcnByIFIuc3Rkb3V0IClbIC4uIDEwOCBdICsgJy4uLidcbiAgICBSID0gYXdhaXQgJCggeyBsaW5lczogdHJ1ZSwgdmVyYm9zZTogJ2Z1bGwnLCB9IClcIm1vdW50XCJcbiAgICBkZWJ1ZyAnzqlidmZzX182OScsICggcnByIFIuc3Rkb3V0IClbIC4uIDEwOCBdICsgJy4uLidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGF3YWl0IGRvID0+XG4gICAgICAjIGZhbGxiYWNrICA9IFN5bWJvbCAnZmFsbGJhY2snXG4gICAgICAjIyMgVEFJTlQgdGhlIG91dHB1dCBvZiBgbW91bnRgIGlzIG5vdCBlc2NhcGVkIGFuZCBub3QgcXVvdGVkLCBzbyB0aGVyZSdzIGxvdHMgb2Ygb3Bwb3J0dW5pdGllc1xuICAgICAgZm9yIHBhdGhzIGFuZCBkZXZpY2UgbmFtZXMgd2l0aCBzcGFjZXMgb3IgcGFyZW5zIHRvIGNhdXNlIHRoZSBtYXRjaCB0byBmYWlsOyBjb25zaWRlciB0byB1c2VcbiAgICAgIGBjYXQgL2V0Yy9tdGFiYCBpbnN0ZWFkIHdoaWNoIHVzZXMgb2N0YWwgZXNjYXBlcyBmb3IgZmlsZW5hbWVzIHdpdGggc3BhY2VzLiAjIyNcbiAgICAgIHBhdHRlcm4gICA9IC8vL1xuICAgICAgICBeXG4gICAgICAgICAgICAgICAgICAgICAgICAoPzxkZXZpY2U+ICAgW15cXHgyMF0rIClcbiAgICAgICAgXFx4MjAgb24gICBcXHgyMCAgKD88cGF0aD4gICAgIC4rPyAgICAgIClcbiAgICAgICAgXFx4MjAgdHlwZSBcXHgyMCAgKD88dHlwZT4gICAgIFteXFx4MjBdKyApXG4gICAgICAgIFxceDIwIFxcKCAgICAgICAgICg/PG9wdGlvbnM+ICBbXlxceDIwXSsgKSBcXClcbiAgICAgICAgJCAvLy92XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNoX21vdW50X2pldCA9IG5ldyBKZXRzdHJlYW0geyBlbXB0eV9jYWxsOiBudWxsLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNoX21vdW50X2pldC5wdXNoICggTk4gKSAtPlxuICAgICAgICAjIHsgc3Rkb3V0LCB9ID0gYXdhaXQgJCggeyBsaW5lczogdHJ1ZSwgdmVyYm9zZTogJ25vbmUnLCB9IClcIm1vdW50XCJcbiAgICAgICAgeWllbGQgZnJvbSBHVVkuZnMud2Fsa19saW5lcyAnL2V0Yy9tdGFiJ1xuICAgICAgICAjICAgZGVidWcgJ86pYnZmc19fNzAnLFxuICAgICAgICAjICAgIGxpbmUuc3BsaXQgJ1xceDIwJ1xuICAgICAgICAjIGZvciBsaW5lIGluIHN0ZG91dFxuICAgICAgICAjICAgeWllbGQgbGluZVxuICAgICAgICA7bnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzaF9tb3VudF9qZXQucHVzaCAoIGxpbmUgKSAtPlxuICAgICAgICByZXR1cm4gbnVsbCBpZiBsaW5lIGlzICcnXG4gICAgICAgIFsgZGV2aWNlXG4gICAgICAgICAgcGF0aFxuICAgICAgICAgIHR5cGVcbiAgICAgICAgICBvcHRpb25zIF0gPSBsaW5lLnNwbGl0ICdcXHgyMCdcbiAgICAgICAgaWYgWyBkZXZpY2UsIHBhdGgsIHR5cGUsIG9wdGlvbnMsIF0uc29tZSAoIGUgKSAtPiAoIG5vdCBlPyApIG9yICggZSBpcyAnJyApXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlidmZzX183MSB1bmFibGUgdG8gcGFyc2UgbGluZSAje3JwciBsaW5lfVwiXG4gICAgICAgIHlpZWxkIGZyZWV6ZSB7IGRldmljZSwgcGF0aCwgdHlwZSwgb3B0aW9ucywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzaF9tb3VudF9qZXQucHVzaCAoIGQgKSAtPlxuICAgICAgICB5aWVsZCBsZXRzIGQsICggZCApIC0+XG4gICAgICAgICAgZC5vcHRpb25zID0gZC5vcHRpb25zLnNwbGl0ICcsJ1xuICAgICAgICAgIGQucGF0aCAgICA9IGRlY29kZV9vY3RhbCBkLnBhdGhcbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgY3JlYXRlX3JlZ2V4X21hdGNoZXIgPSAoIHBhdHRlcm4gKSAtPlxuICAgICAgICByZXR1cm4gKCAtPiB0cnVlICkgdW5sZXNzIHBhdHRlcm4/XG4gICAgICAgIHN3aXRjaCB0eXBlID0gdHlwZV9vZiBwYXR0ZXJuXG4gICAgICAgICAgd2hlbiAncmVnZXgnXG4gICAgICAgICAgICByZSA9IHBhdHRlcm5cbiAgICAgICAgICB3aGVuICd0ZXh0J1xuICAgICAgICAgICAgcmUgPSByZWdleFwiI3twYXR0ZXJufVwiXG4gICAgICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IgXCLOqWJ2ZnNfXzcyIGV4cGVjdGVkIGEgcmVnZXggb3IgYSB0ZXh0LCBnb3QgYSAje3R5cGV9XCJcbiAgICAgICAgcmV0dXJuICggeCApIC0+IHJlLmxhc3RJbmRleCA9IDA7IHJlLnRlc3QgeFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICB3YWxrX3NoX21vdW50X21hdGNoZXMgPSAoeyBkZXZpY2UgPSBudWxsLCBwYXRoID0gbnVsbCwgZ2xvYiA9IG51bGwsIHR5cGUgPSBudWxsLCB9PXt9KSAtPlxuICAgICAgICBpZiBnbG9iP1xuICAgICAgICAgIGlmIHBhdGg/XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqWJ2ZnNfXzczIGV4cGVjdGVkIGVpdGhlciBnbG9iIG9yIHBhdGgsIGdvdCBib3RoXCJcbiAgICAgICAgICBtYXRjaF9nbG9iICA9IGNyZWF0ZV9nbG9iX21hdGNoZXIgZ2xvYlxuICAgICAgICBlbHNlXG4gICAgICAgICAgbWF0Y2hfZ2xvYiAgPSAtPiB0cnVlXG4gICAgICAgIG1hdGNoX2RldmljZSAgPSBjcmVhdGVfcmVnZXhfbWF0Y2hlciBkZXZpY2VcbiAgICAgICAgbWF0Y2hfcGF0aCAgICA9IGNyZWF0ZV9yZWdleF9tYXRjaGVyIHBhdGhcbiAgICAgICAgbWF0Y2hfdHlwZSAgICA9IGNyZWF0ZV9yZWdleF9tYXRjaGVyIHR5cGVcbiAgICAgICAgIyMjIFRBSU5UIGFsbG93IHJlZ2V4ZXMgIyMjXG4gICAgICAgIGZvciBkIGZyb20gc2hfbW91bnRfamV0LndhbGsoKVxuICAgICAgICAgIGNvbnRpbnVlIHVubGVzcyBtYXRjaF9kZXZpY2UgIGQuZGV2aWNlXG4gICAgICAgICAgY29udGludWUgdW5sZXNzIG1hdGNoX2dsb2IgICAgZC5wYXRoXG4gICAgICAgICAgY29udGludWUgdW5sZXNzIG1hdGNoX3BhdGggICAgZC5wYXRoXG4gICAgICAgICAgY29udGludWUgdW5sZXNzIG1hdGNoX3R5cGUgICAgZC50eXBlXG4gICAgICAgICAgeWllbGQgZFxuICAgICAgICA7bnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoYXNfbW91bnQgPSAoIFAuLi4gKSAtPlxuICAgICAgICBtb3VudHMgPSBbICggd2Fsa19zaF9tb3VudF9tYXRjaGVzIFAuLi4gKS4uLiwgXVxuICAgICAgICByZXR1cm4gc3dpdGNoIGNvdW50ID0gbW91bnRzLmxlbmd0aFxuICAgICAgICAgIHdoZW4gMCB0aGVuIGZhbHNlXG4gICAgICAgICAgd2hlbiAxIHRoZW4gdHJ1ZVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqWJ2ZnNfXzc0IGV4cGVjdGVkIHplcm8gb3Igb25lIHJlc3VsdHMsIGdvdCAje2NvdW50fVwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZm9yIGF3YWl0IGQgZnJvbSB3YWxrX3NoX21vdW50X21hdGNoZXMgeyBkZXZpY2U6ICdzcWxpdGVmcycsIH1cbiAgICAgICMgZm9yIGF3YWl0IGQgZnJvbSB3YWxrX3NoX21vdW50X21hdGNoZXMoKVxuICAgICAgIyAgIHVyZ2UgJ86pYnZmc19fNzUnLCBkXG4gICAgICByZXN1bHQgPSBbICggZCBmb3IgYXdhaXQgZCBmcm9tIHdhbGtfc2hfbW91bnRfbWF0Y2hlcyB7IGRldmljZTogJ3RtcGZzJywgfSApLi4uLCBdXG4gICAgICBAZXEgKCDOqWJ2ZnNfXzc2ID0gLT4gcmVzdWx0Lmxlbmd0aCA+IDEgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBlcnJvciA9IG51bGxcbiAgICAgIHRyeSBhd2FpdCBoYXNfbW91bnQgeyBkZXZpY2U6ICd0bXBmcycsIH0gY2F0Y2ggZXJyb3JcbiAgICAgICAgQGVxICggzqlidmZzX183NyA9IC0+IC9leHBlY3RlZCB6ZXJvIG9yIG9uZSByZXN1bHRzLCBnb3QgXFxkKy8udGVzdCBlcnJvci5tZXNzYWdlICksIHRydWVcbiAgICAgIEBlcSAoIM6pYnZmc19fNzggPSAtPiBlcnJvciBpcyBudWxsICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYnZmc19fNzkgPSAtPiBoYXNfbW91bnQgeyBwYXRoOiAnL2Rldi9zaG0nLCAgICAgICB9ICksIHRydWVcbiAgICAgIEBlcSAoIM6pYnZmc19fODAgPSAtPiBoYXNfbW91bnQgeyBwYXRoOiAvXlxcL2RldlxcL3NobSQvdiwgIH0gKSwgdHJ1ZVxuICAgICAgQGVxICggzqlidmZzX184MSA9IC0+IGhhc19tb3VudCB7IGdsb2I6ICcvKi9zaG0nLCAgICAgICAgIH0gKSwgdHJ1ZVxuICAgICAgQGVxICggzqlidmZzX184MiA9IC0+IGhhc19tb3VudCB7IHBhdGg6ICcvbm8vc3VjaC9wYXRoJywgIH0gKSwgZmFsc2VcbiAgICAgICMjI1xuICAgICAgaW4gL2V0Yy9tdGFiOlxuICAgICAgKDEpIC9ob21lL2Zsb3cvanpyL2J2ZnMvbW91XFwxMzRudCBpbnN0ZWFkIG9mIC9ob21lL2Zsb3cvanpyL2J2ZnMvbW91XFwwMTJ0XG4gICAgICAoMikgL2hvbWUvZmxvdy9qenIvYnZmcy9tb3VcXDEzNHR0IGluc3RlYWQgb2YgL2hvbWUvZmxvdy9qenIvYnZmcy9tb3VcXDAxMXRcbiAgICAgICgzKSAvaG9tZS9mbG93L2p6ci9idmZzL21vdVxcMTM0eDAxdCBpbnN0ZWFkIG9mIC9ob21lL2Zsb3cvanpyL2J2ZnMvbW91XFwwMDF0XG4gICAgICAoNCkgL2hvbWUvZmxvdy9qenIvYnZmcy9tb3VcXDEzNHg3ZnQgaW5zdGVhZCBvZiAvaG9tZS9mbG93L2p6ci9idmZzL21vdVxcMTc3dFxuICAgICAgKDUpIC9ob21lL2Zsb3cvanpyL2J2ZnMvbW91XFwxMzR1MjAyOXQgbGl0ZXJhbGx5ICcvaG9tZS9mbG93L2p6ci9idmZzL21vdVxcdTIwMjl0JyB3aXRoIHRoZSBiYWNrc2xhc2ggZXNjYXBlZFxuICAgICAgd2hlcmUgJ1xcMTM0JyBpcyAweDVjIGBcXFxcYCAoYmFja3NsYXNoKVxuXG4gICAgICBgbW91bnRgIGNvbW1hbmQgb3V0cHV0OlxuICAgICAgKDQpIC9ob21lL2Zsb3cvanpyL2J2ZnMvbW91XFx4N2Z0XG4gICAgICAoNSkgL2hvbWUvZmxvdy9qenIvYnZmcy9tb3VcXHUyMDI5dFxuXG4gICAgICBgbW91bnRgICdoZWxwZnVsbHknIHJlc29sdmVzIHRoZSB0b3AtbGV2ZWwgZXNjYXBpbmcgKGkuZS4gdGhlIG9jdGFsIGVzY2FwZXMpIGJ1dCBsZWF2ZXMgdGhlIHN5bWJvbGljXG4gICAgICBgXFxuYCwgYFxcdGAsIGBcXHguLmAsIGBcXHUuLi4uYCBpbiBwbGFjZTsgdW5mb3J0dW5hdGVseSwgdGhpcyByZXN1bHRzIGluIGZpbGVuYW1lcyB3aGVyZSB0aGUgbW9zdFxuICAgICAgbm90b3Jpb3VzIG9mZmVuZGVy4oCUQVNDSUkgc3BhY2XigJRpcyBsZWZ0IHVuZXNjYXBlZCwgd2l0aCBubyBxdW90ZXMgYXJvdW5kIHRoZSBwYXRoIGFuZCBubyB3YXkgdG8gc2FmZWx5XG4gICAgICByZWNvbnN0cnVjdCB0aGUgcGF0aCBleGNlcHQgbWF0Y2hpbmcgb24gaG93IGl0IHByb2JhYmx5IGVuZHMgKHdpdGggYSBgdHlwZSAuLi5gIGFuZCBhIHBhcmVudGhlc2l6ZWRcbiAgICAgIGxpc3Qgb2Ygb3B0aW9ucyB0aGF0IGhvcGVmdWxseSBkb24ndCB1c2UgYW55IHNwZWNpYWwgY2hhcmFjdGVycykuXG5cbiAgICAgICMjI1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuIyAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiMgZW5zdXJlX2VtcHR5X2RpciA9ICggcGF0aCApIC0+XG4jICAgdHJ5IGF3YWl0IHJlc3VsdCA9ICQoIHsgcmVqZWN0OiBmYWxzZSwgfSApXCJ0cmFzaCAje3BhdGh9XCIgY2F0Y2ggZXJyb3JcbiMgICAgIGRlYnVnICfOqWJ2ZnNfXzgzJywgcnByIGVycm9yLmV4aXRDb2RlXG4jICAgICBkZWJ1ZyAnzqlidmZzX184NCcsIHJwciBlcnJvci5uYW1lXG4jICAgICBkZWJ1ZyAnzqlidmZzX184NScsIHJwciBlcnJvci5jb2RlXG4jICAgICBkZWJ1ZyAnzqlidmZzX184NicsIHJwciBlcnJvci5tZXNzYWdlXG4jICAgICBkZWJ1ZyAnzqlidmZzX184NycsIHJwciBlcnJvci5vcmlnaW5hbE1lc3NhZ2VcbiMgICAgIGRlYnVnICfOqWJ2ZnNfXzg4JywgcnByIGVycm9yLmNhdXNlXG4jICAgICBwcm9jZXNzLmV4aXQgMTExXG4jICAgICB0aHJvdyBlcnJvclxuIyAgIGluZm8gJ86pYnZmc19fODknLCBycHIgcmVzdWx0XG4jICAgaW5mbyAnzqlidmZzX185MCcsIHJwciByZXN1bHQ/LmV4aXRDb2RlXG4jICAgaW5mbyAnzqlidmZzX185MScsIHJwciByZXN1bHQ/Lm5hbWVcbiMgICBpbmZvICfOqWJ2ZnNfXzkyJywgcnByIHJlc3VsdD8uY29kZVxuIyAgIGluZm8gJ86pYnZmc19fOTMnLCBycHIgcmVzdWx0Py5tZXNzYWdlXG4jICAgaW5mbyAnzqlidmZzX185NCcsIHJwciByZXN1bHQ/Lm9yaWdpbmFsTWVzc2FnZVxuIyAgIGluZm8gJ86pYnZmc19fOTUnLCBycHIgcmVzdWx0Py5jYXVzZVxuIyAgIDtudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19jcmVhdGVfbW91bnRfZm9sZGVyc193aXRoX3N0cmFuZ2VfbmFtZXMgPSAtPlxuICB7IHJlZl9wYXRoLFxuICAgIGRiX3BhdGgsXG4gICAgYXNzZXRzX3BhdGgsXG4gICAgYXJlbmFfcGF0aCxcbiAgICBtb3VudF9wYXRoLCB9ID0gZ2V0X3BhdGhzKClcbiAgIyBkZWJ1ZyAnzqlidmZzX185NicsIHsgYXNzZXRzX3BhdGgsIH1cbiAgIyBkZWJ1ZyAnzqlidmZzX185NycsIHsgYXJlbmFfcGF0aCwgfVxuICAjIGF3YWl0IGVuc3VyZV9lbXB0eV9kaXIgYXJlbmFfcGF0aFxuICB7IG1rZGlycCwgfSA9IHJlcXVpcmUgJ21rZGlycCdcbiAgIyBkZWJ1ZyAnzqlidmZzX185OCcsIG1rZGlycFxuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICd0ZXN0J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICfDpMO2w7wnXG4gIGF3YWl0IG1rZGlycCBQQVRILmpvaW4gYXJlbmFfcGF0aCwgJ21vdVxcbnQnXG4gIGF3YWl0IG1rZGlycCBQQVRILmpvaW4gYXJlbmFfcGF0aCwgJ21vdSB0J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICdtb3UqdCdcbiAgYXdhaXQgbWtkaXJwIFBBVEguam9pbiBhcmVuYV9wYXRoLCAnbW91P3QnXG4gIGF3YWl0IG1rZGlycCBQQVRILmpvaW4gYXJlbmFfcGF0aCwgJ21vdfCsurF0J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICdtb3XjgIB0J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICdtb3XigKh0J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICdtb3XigKl0J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICdtb3XigKp0J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICdtb3XigKt0J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICdtb3XigKx0J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICdtb3XigK10J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICdtb3XigK50J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICdhXFx4MDF6J1xuICBhd2FpdCBta2RpcnAgUEFUSC5qb2luIGFyZW5hX3BhdGgsICdhXFxcXHgwMXonXG4gIGF3YWl0IG1rZGlycCBQQVRILmpvaW4gYXJlbmFfcGF0aCwgJ21vdVxcdHQnXG4jIGRyd3hyd3hyLXggICAgIC0gZmxvdyAyMDI1LTExLTEyIDEwOjA1IC0tIC0gLSAgICBtb3UqbnRcbiMgZHJ3eHJ3eHIteCAgICAgLSBmbG93IDIwMjUtMTEtMTIgMTA6MDUgLS0gLSAtICAgIG1vdT9udFxuIyBkcnd4cnd4cnd4ICAgICAtIHJvb3QgMjAyNS0xMS0wOCAxNjowMiAtLSAtIC0gICAgbW91XFwwMTJ0XG4jIGRyd3hyd3hyLXggICAgIC0gZmxvdyAyMDI1LTExLTEyIDEwOjA1IC0tIC0gLSAgICBtb3VcXG50XG4jIGRyd3hyd3hyLXggICAgIC0gZmxvdyAyMDI1LTExLTEyIDEwOjE0IC0tIC0gLSAgICBtb3VcXHR0XG4jIGRyd3hyd3hyLXggICAgIC0gZmxvdyAyMDI1LTExLTEyIDEwOjI2IC0tIC0gLSAgICBtb3VcXHUyMDI5dFxuIyBkcnd4cnd4ci14ICAgICAtIGZsb3cgMjAyNS0xMS0xMiAxMDoxNSAtLSAtIC0gICAgbW91XFx4MDF0XG4jIGRyd3hyd3hyLXggICAgIC0gZmxvdyAyMDI1LTExLTEyIDEwOjIxIC0tIC0gLSAgICBtb3VcXHg3ZnRcbiMgZHJ3eHJ3eHIteCAgICAgLSBmbG93IDIwMjUtMTEtMTIgMTA6MjMgLS0gLSAtICAgIG1vdVxceDgwdFxuIyBkcnd4cnd4ci14ICAgICAtIGZsb3cgMjAyNS0xMS0wNyAwOToyNSAtSSAtIC0gICAgbW91bnRcbiMgZHJ3eHJ3eHIteCAgICAgLSBmbG93IDIwMjUtMTEtMDkgMTE6NTAgLS0gLSAtICAgICdtb3UgdCdcblxuICA7bnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgYXdhaXQgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLmFzeW5jX3Rlc3QgQHRhc2tzXG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBhY2Nlc3NfZnNfd2l0aF9kYjogQHRhc2tzLmFjY2Vzc19mc193aXRoX2RiLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBzY3JpcHRzX1lZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWTogQHRhc2tzLnNjcmlwdHNfWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZLCB9XG4gICMgYXdhaXQgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLmFzeW5jX3Rlc3QgeyBhc3luY19zaGVsbDogQHRhc2tzLmFzeW5jX3NoZWxsLCB9XG4gICMgYXdhaXQgZGVtb19jcmVhdGVfbW91bnRfZm9sZGVyc193aXRoX3N0cmFuZ2VfbmFtZXMoKVxuXG4gICMgJ2FscGhhfGJldGF8Z2FtbWF8ZGVsdGF8fHpldGF8J1xuXG5cbiJdfQ==
