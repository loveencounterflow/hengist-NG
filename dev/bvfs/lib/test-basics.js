(async function() {
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
/*
help 'Ωbvfsto__28', "drwxrwxr-x", ( 0o775.toString 8 ), ( '0x' + ( 0o775.toString 16 ).padStart 4, '0' )
help 'Ωbvfsto__29', ".rw-rw-r--", ( 0o664.toString 8 ), ( '0x' + ( 0o664.toString 16 ).padStart 4, '0' )
help 'Ωbvfsto__30', "dr-xr-xr-x", ( 0o555.toString 8 ), ( '0x' + ( 0o555.toString 16 ).padStart 4, '0' )
help 'Ωbvfsto__31', ".r--r--r--", ( 0o444.toString 8 ), ( '0x' + ( 0o444.toString 16 ).padStart 4, '0' )
help 'Ωbvfsto__32', "??-??-??-?", ( 0b101_101_101.toString 8 ), ( '0x' + ( 0b101_101_101.toString 16 ).padStart 4, '0' )
help 'Ωbvfsto__33', "??w??w??-?", ( 0b010_010_000.toString 8 ), ( '0x' + ( 0b010_010_000.toString 16 ).padStart 4, '0' )
*/
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
      debug('Ωbvfs__34', db.statements);
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
            debug('Ωbvfs__35', db.execute(SQL`update metadata set mode = s.open_mode
  from metadata           as m
  join bb_standard_modes  as s on ( m.id = s.file_id );`));
            return null;
          })();
          break;
        case 'close':
          (() => {
            debug('Ωbvfs__36', db.execute(SQL`update metadata set mode = s.closed_mode
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
        urge('Ωbvfs__37', d.mode_o, d.path); // { d..., full_path, }
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
      var Dbric, PATH, SFMODULES, SQL, Shell, db_path, execaSync, internals, is_mounted, match_all_fs_mounts, mount_path, ref_path, shell_cfg, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      PATH = require('node:path');
      ({execaSync} = require('execa'));
      ({Shell} = require('../../../apps/bvfs'));
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
      (() => {        //.......................................................................................................
        var sh, Ωbbbt__42, Ωbbbt__43, Ωbbbt__44, Ωbvfs__39, Ωbvfs__40, Ωbvfs__41;
        sh = new Shell();
        this.throws((Ωbvfs__39 = function() {
          return sh._validate_call_arguments(null);
        }), /expected a pod or a text, got a/);
        this.throws((Ωbvfs__40 = function() {
          return sh._validate_call_arguments([]);
        }), /expected a pod or a text, got a/);
        this.throws((Ωbvfs__41 = function() {
          return sh._validate_call_arguments({});
        }), /expected a text, got a/);
        this.eq((Ωbbbt__42 = function() {
          return sh._validate_call_arguments('ls');
        }), {
          cfg: {
            cwd: ref_path,
            lines: true
          },
          cmd: 'ls',
          parameters: []
        });
        this.eq((Ωbbbt__43 = function() {
          return sh._validate_call_arguments('ls', '-AlF');
        }), {
          cfg: {
            cwd: ref_path,
            lines: true
          },
          cmd: 'ls',
          parameters: ['-AlF']
        });
        this.eq((Ωbbbt__44 = function() {
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
        debug('Ωbbbt__45', sh.call('ls'));
        debug('Ωbbbt__46', sh.call('grep', '-Pi', 'sqlitefs', '/etc/mtab'));
        try {
          help('Ωbbbt__47', sh.call('grep', '-Pi', 'sqlitefs', '/etc/mtab'));
        } catch (error1) {
          e = error1;
          warn('Ωbbbt__48', reverse(e.message));
        }
        try {
          help('Ωbbbt__49', sh.call('grep', '-Pi', 'sqlitefsYYYY', '/etc/mtab'));
        } catch (error1) {
          e = error1;
          warn('Ωbbbt__50', reverse(e.message));
        }
        try {
          help('Ωbbbt__51', sh.call('grep', '-Pi', 'sqlitefsYYYY', '/etc/mtabYYYY'));
        } catch (error1) {
          e = error1;
          warn('Ωbbbt__52', reverse(e.message));
        }
        null;
        return null;
      })();
      (() => {        //.......................................................................................................
        var sh;
        sh = new Shell(shell_cfg);
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
        return null;
      })();
      (() => {        //.......................................................................................................
        var e, sh;
        sh = new Shell(shell_cfg);
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
        } catch (error1) {
          e = error1;
          warn('Ωbbbt__60', reverse(e.message));
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
      var $, Async_jetstream, Dbric, Jetstream, PATH, R, SFMODULES, SQL, Shell, create_glob_matcher, decode_octal, freeze, internals, lets, regex, type_of;
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
      debug('Ωbbbt__61', R.stdout);
      R = (await $({
        lines: true,
        verbose: 'full'
      })`cat .gitignore`.pipe({
        lines: true,
        verbose: 'full'
      })`sort`);
      debug('Ωbbbt__62', (rpr(R.stdout)).slice(0, 109) + '...');
      R = (await $({
        lines: true,
        verbose: 'full'
      })`cat .gitignore`.pipe`sort`.pipe`head -n2`);
      debug('Ωbbbt__63', (rpr(R.stdout)).slice(0, 109) + '...');
      R = (await $({
        lines: true,
        verbose: 'full'
      })`mount`);
      debug('Ωbbbt__64', (rpr(R.stdout)).slice(0, 109) + '...');
      await (async() => {        //.......................................................................................................
        var create_regex_matcher, d, error, has_mount, pattern, result, sh_mount_jet, walk_sh_mount_matches, Ωbbbt__73, Ωbbbt__74, Ωbbbt__75, Ωbbbt__76, Ωbvfs__70, Ωbvfs__71, Ωbvfs__72;
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
          //   debug 'Ωbbbt__65',
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
            throw new Error(`Ωbvfs__66 unable to parse line ${rpr(line)}`);
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
              throw new Error(`Ωbvfs__38 expected a regex or a text, got a ${type}`);
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
              throw new Error("Ωbvfs__67 expected either glob or path, got both");
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
          throw new Error(`Ωbvfs__68 expected zero or one results, got ${count}`);
        };
//.....................................................................................................
// for await d from walk_sh_mount_matches { device: 'sqlitefs', }
        for await (d of walk_sh_mount_matches()) {
          urge('Ωbbbt__69', d);
        }
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
        this.eq((Ωbvfs__70 = function() {
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
          this.eq((Ωbvfs__71 = function() {
            return /expected zero or one results, got \d+/.test(error.message);
          }), true);
        }
        this.eq((Ωbvfs__72 = function() {
          return error === null;
        }), false);
        //.....................................................................................................
        this.eq((Ωbbbt__73 = function() {
          return has_mount({
            path: '/dev/shm'
          });
        }), true);
        this.eq((Ωbbbt__74 = function() {
          return has_mount({
            path: /^\/dev\/shm$/v
          });
        }), true);
        this.eq((Ωbbbt__75 = function() {
          return has_mount({
            glob: '/*/shm'
          });
        }), true);
        return this.eq((Ωbbbt__76 = function() {
          return has_mount({
            path: '/no/such/path'
          });
        }), false);
      })();
      //.......................................................................................................
      return null;
    }
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
      // ( new Test guytest_cfg ).test { access_fs_with_db: @tasks.access_fs_with_db, }
      // ( new Test guytest_cfg ).test { scripts_YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY: @tasks.scripts_YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY, }
      return (await (new Test(guytest_cfg)).async_test({
        async_shell: this.tasks.async_shell
      }));
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBSUUsQ0FBQTs7SUFBQSxNQUFBLEVBQVEsUUFBQSxDQUFBLENBQUE7QUFDVixVQUFBLGVBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxtQkFBQSxFQUFBO01BQUksU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixT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ZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0QsRUFEaEI7OzthQUlFLENBQUEsTUFBTSxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLFVBQXpCLENBQW9DO1FBQUUsV0FBQSxFQUFhLElBQUMsQ0FBQSxLQUFLLENBQUM7TUFBdEIsQ0FBcEMsQ0FBTjtJQUxzQyxDQUFBLElBQXhDOztBQXRZQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLXNmbW9kdWxlcy90ZXN0LWJhc2ljcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRhc2tzID1cblxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmFzaWNzOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IEpldHN0cmVhbSxcbiAgICAgIEFzeW5jX2pldHN0cmVhbSxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAgIDUwOSwgc3BybTogJ2Ryd3hyd3hyLXgnLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogMTY4MzIsIHNwcm06ICdkcnd4LS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06ICAgNDQ4LCBzcHJtOiAnZHJ3eC0tLS0tLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAxNjcwNCwgc3BybTogJ2RyLXgtLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogICA1MDksIHNwcm06ICdkcnd4cnd4ci14JywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06ICAgNTA5LCBzcHJtOiAnZHJ3eHJ3eHIteCcsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzIwNCwgc3BybTogJy5ydy1ydy1yLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMxNTIsIHNwcm06ICcucnctLS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMjA0LCBzcHJtOiAnZHJ3eC0tLS0tLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAgIDQ0OCwgc3BybTogJy5ydy1ydy1yLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMyMDQsIHNwcm06ICcucnctcnctci0tJywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMTUyLCBzcHJtOiAnLnJ3LS0tLS0tLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzE1Miwgc3BybTogJy5ydy0tLS0tLS0nLCB9XG4gICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZm9yIHsgdHlwZSwgbnBybSwgc3BybSwgfSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgIG9wcm0gPSAnMG8nICsgKCBucHJtLnRvU3RyaW5nICA4ICkucGFkU3RhcnQgIDgsICcwJ1xuICAgICAgICB4cHJtID0gJzB4JyArICggbnBybS50b1N0cmluZyAxNiApLnBhZFN0YXJ0ICA4LCAnMCdcbiAgICAgICAgYnBybSA9ICdfXycgKyAoIG5wcm0udG9TdHJpbmcgIDIgKS5wYWRTdGFydCAxNiwgJzAnXG4gICAgICAgIGRlYnVnICfOqWJ2ZnNfX18xJywgZlwiI3tucHJtfTo+MTBjOyAje29wcm19Oj4xMGM7ICN7eHBybX06PjEwYzsgI3ticHJtfTo+MjBjOyAje3Nwcm19Oj4xMGM7IFwiXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZpbGVfcGVybWlzc2lvbnNfbG9naWM6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICBVUCAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAndW5peC1wZXJtaXNzaW9ucydcbiAgICBGUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICBkZWJ1ZyAnzqliYmJ0X19fMicsICggayBmb3IgayBvZiBVUCApXG4gICAgZGVidWcgJ86pYmJidF9fXzMnLCBVUC5jb252ZXJ0Lm9iamVjdCAoIEZTLnN0YXRTeW5jICcvZXRjL3Bhc3N3ZCcgKS5tb2RlXG4gICAgZGVidWcgJ86pYmJidF9fXzQnLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICdhLXcnfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJiYnRfX181JywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAnYSt3J306PiMwM287XCJcbiAgICBkZWJ1ZyAnzqliYmJ0X19fNicsIGZcIiN7VVAuY29udmVydC5udW1iZXIgJ3Urdyd9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYmJidF9fXzcnLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICd1K3InfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJiYnRfX184JywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAndS13LGctdyxvLXcnfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJiYnRfX185JywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAndSt3LGcrdyxvK3cnfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJiYnRfXzEwJywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgJ3UrdyxnK3csbyt3J306PjIwYztcIlxuICAgIGhlbHAgJ86pYmJidF9fMTEnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzc3NX06PjIwYztcIlxuICAgIGhlbHAgJ86pYmJidF9fMTInLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzY2NH06PjIwYztcIlxuICAgIGhlbHAgJ86pYmJidF9fMTMnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzU1NX06PjIwYztcIlxuICAgIGhlbHAgJ86pYmJidF9fMTQnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzQ0NH06PjIwYztcIlxuICAgIGhlbHAgJ86pYmJidF9fMTUnXG4gICAgaGVscCAnzqliYmJ0X18xNicsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDAwNzc1fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xNycsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDQwNTU1fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xOCcsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMTAwNDQ0fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xOSdcbiAgICBoZWxwICfOqWJiYnRfXzIwJywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wMDA3NzUgJiAweGZlMDAgfCAweDAxZmQgfTo+MjBjO1wiICMjIyAwbzc3NSBkcnd4cnd4ci14IGZvbGRlciBvcGVuICMjI1xuICAgIGhlbHAgJ86pYmJidF9fMjEnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzA0MDU1NSAmIDB4ZmUwMCB8IDB4MDFmZCB9Oj4yMGM7XCIgIyMjIDBvNzc1IGRyd3hyd3hyLXggZm9sZGVyIG9wZW4gIyMjXG4gICAgaGVscCAnzqliYmJ0X18yMicsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMTAwNDQ0ICYgMHhmZTAwIHwgMHgwMWI0IH06PjIwYztcIiAjIyMgMG82NjQgLnJ3LXJ3LXItLSBmaWxlIG9wZW4gIyMjXG4gICAgaGVscCAnzqliYmJ0X18yMydcbiAgICBoZWxwICfOqWJiYnRfXzI0JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wMDA3NzUgJiAweGZlMDAgfCAweDAxNmQgfTo+MjBjO1wiICMjIyAwbzU1NSBkci14ci14ci14IGZvbGRlciBjbG9zZWQgIyMjXG4gICAgaGVscCAnzqliYmJ0X18yNScsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDQwNTU1ICYgMHhmZTAwIHwgMHgwMTZkIH06PjIwYztcIiAjIyMgMG81NTUgZHIteHIteHIteCBmb2xkZXIgY2xvc2VkICMjI1xuICAgIGhlbHAgJ86pYmJidF9fMjYnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzEwMDQ0NCAmIDB4ZmUwMCB8IDB4MDEyNCB9Oj4yMGM7XCIgIyMjIDBvNDQ0IC5yLS1yLS1yLS0gZmlsZSBjbG9zZWQgIyMjXG4gICAgIyBAZXEgKCDOqWJiYnRfXzI3ID0gLT4gZmFsc2UgKSwgZmFsc2VcbiAgICAjIyNcbiAgICBoZWxwICfOqWJ2ZnN0b19fMjgnLCBcImRyd3hyd3hyLXhcIiwgKCAwbzc3NS50b1N0cmluZyA4ICksICggJzB4JyArICggMG83NzUudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA0LCAnMCcgKVxuICAgIGhlbHAgJ86pYnZmc3RvX18yOScsIFwiLnJ3LXJ3LXItLVwiLCAoIDBvNjY0LnRvU3RyaW5nIDggKSwgKCAnMHgnICsgKCAwbzY2NC50b1N0cmluZyAxNiApLnBhZFN0YXJ0IDQsICcwJyApXG4gICAgaGVscCAnzqlidmZzdG9fXzMwJywgXCJkci14ci14ci14XCIsICggMG81NTUudG9TdHJpbmcgOCApLCAoICcweCcgKyAoIDBvNTU1LnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgNCwgJzAnIClcbiAgICBoZWxwICfOqWJ2ZnN0b19fMzEnLCBcIi5yLS1yLS1yLS1cIiwgKCAwbzQ0NC50b1N0cmluZyA4ICksICggJzB4JyArICggMG80NDQudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA0LCAnMCcgKVxuICAgIGhlbHAgJ86pYnZmc3RvX18zMicsIFwiPz8tPz8tPz8tP1wiLCAoIDBiMTAxXzEwMV8xMDEudG9TdHJpbmcgOCApLCAoICcweCcgKyAoIDBiMTAxXzEwMV8xMDEudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA0LCAnMCcgKVxuICAgIGhlbHAgJ86pYnZmc3RvX18zMycsIFwiPz93Pz93Pz8tP1wiLCAoIDBiMDEwXzAxMF8wMDAudG9TdHJpbmcgOCApLCAoICcweCcgKyAoIDBiMDEwXzAxMF8wMDAudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA0LCAnMCcgKVxuICAgICMjI1xuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhY2Nlc3NfZnNfd2l0aF9kYjogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgeyBleGVjYVN5bmMsICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICdleGVjYSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIFNxbGl0ZWZzX2RiIGV4dGVuZHMgRGJyaWNcbiAgICAgICMgQGJ1aWxkOiBbXG4gICAgICAjICAgU1FMXCJcIlwiXG4gICAgICAjICAgICBjcmVhdGUgdGFibGUgbm9uY29uZm9ybV9vbmUgKCBhIHRleHQgcHJpbWFyeSBrZXkgKTtcIlwiXCJcbiAgICAgICMgICBTUUxcIlwiXCJcbiAgICAgICMgICAgIC0tIHRoaXMgY29tbWVudCBzaG91bGRuJ3QgYmUgaGVyZVxuICAgICAgIyAgICAgY3JlYXRlIHZpZXcgbm9uY29uZm9ybV90d28gYXMgc2VsZWN0ICogZnJvbSBub25jb25mb3JtX29uZTtcIlwiXCJcbiAgICAgICMgICBdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICBnZXRfZnNfb2JqZWN0czogU1FMXCJcIlwiXG4gICAgICAgICAgc2VsZWN0ICogZnJvbSBiYl9saXN0O1wiXCJcIlxuICAgICAgd2Fsa19mc19vYmplY3RzOiAtPiB5aWVsZCBmcm9tIEBzdGF0ZW1lbnRzLmdldF9mc19vYmplY3RzLml0ZXJhdGUoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmVmX3BhdGggICAgPSBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4vYXBwcy9idmZzJ1xuICAgIGRiX3BhdGggICAgID0gUEFUSC5qb2luIHJlZl9wYXRoLCAnYnZmcy5kYidcbiAgICBtb3VudF9wYXRoICA9IFBBVEguam9pbiByZWZfcGF0aCwgJ21vdW50J1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgc2hlbGxfY2ZnICAgPSB7IGN3ZDogcmVmX3BhdGgsIGxpbmVzOiB0cnVlLCB9XG4gICAgc2hlbGwgICAgICAgPSAoIGNtZCwgUC4uLiApIC0+ICggZXhlY2FTeW5jIGNtZCwgUCwgc2hlbGxfY2ZnICkuc3Rkb3V0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkYiAgICAgICAgICA9IFNxbGl0ZWZzX2RiLm9wZW4gZGJfcGF0aFxuICAgIGRlYnVnICfOqWJ2ZnNfXzM0JywgZGIuc3RhdGVtZW50c1xuICAgIHBhdGhzICAgICAgID0gW11cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3IgbGluZSBpbiBzaGVsbCAnc2hvdy1sYXlvdXQnLCBtb3VudF9wYXRoXG4gICAgICAgIGVjaG8gbGluZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBtb2RlID0gJ2Nsb3NlJ1xuICAgICMgbW9kZSA9ICdvcGVuJ1xuICAgIG1vZGUgPSAnbm90aGluZydcbiAgICBzd2l0Y2ggbW9kZVxuICAgICAgd2hlbiAnb3BlbicgdGhlbiBkbyA9PlxuICAgICAgICBkZWJ1ZyAnzqlidmZzX18zNScsIGRiLmV4ZWN1dGUgU1FMXCJcIlwiXG4gICAgICAgIHVwZGF0ZSBtZXRhZGF0YSBzZXQgbW9kZSA9IHMub3Blbl9tb2RlXG4gICAgICAgICAgZnJvbSBtZXRhZGF0YSAgICAgICAgICAgYXMgbVxuICAgICAgICAgIGpvaW4gYmJfc3RhbmRhcmRfbW9kZXMgIGFzIHMgb24gKCBtLmlkID0gcy5maWxlX2lkICk7XCJcIlwiXG4gICAgICAgIDtudWxsXG4gICAgICB3aGVuICdjbG9zZScgdGhlbiBkbyA9PlxuICAgICAgICBkZWJ1ZyAnzqlidmZzX18zNicsIGRiLmV4ZWN1dGUgU1FMXCJcIlwiXG4gICAgICAgIHVwZGF0ZSBtZXRhZGF0YSBzZXQgbW9kZSA9IHMuY2xvc2VkX21vZGVcbiAgICAgICAgICBmcm9tIG1ldGFkYXRhICAgICAgICAgICBhcyBtXG4gICAgICAgICAgam9pbiBiYl9zdGFuZGFyZF9tb2RlcyAgYXMgcyBvbiAoIG0uaWQgPSBzLmZpbGVfaWQgKTtcIlwiXCJcbiAgICAgICAgO251bGxcbiAgICAgIHdoZW4gJ25vdGhpbmcnIHRoZW4gbnVsbFxuICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IgXCJ1bmtub3duIG1vZGU6ICN7cnByIG1vZGV9XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBkIGZyb20gZGIud2Fsa19mc19vYmplY3RzKClcbiAgICAgIGZ1bGxfcGF0aCA9IFBBVEguam9pbiBtb3VudF9wYXRoLCBkLnBhdGhcbiAgICAgIHBhdGhzLnB1c2ggZnVsbF9wYXRoXG4gICAgICB1cmdlICfOqWJ2ZnNfXzM3JywgZC5tb2RlX28sIGQucGF0aCAjIHsgZC4uLiwgZnVsbF9wYXRoLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZm9yIGxpbmUgaW4gc2hlbGwgJ3Nob3ctbGF5b3V0JywgbW91bnRfcGF0aFxuICAgICAgICBlY2hvIGxpbmVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzY3JpcHRzX1lZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWTogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgeyBleGVjYVN5bmMsICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICdleGVjYSdcbiAgICB7IFNoZWxsLCAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnZmcydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJlZl9wYXRoICAgID0gUEFUSC5yZXNvbHZlIF9fZGlybmFtZSwgJy4uLy4uLy4uL2FwcHMvYnZmcydcbiAgICBkYl9wYXRoICAgICA9IFBBVEguam9pbiByZWZfcGF0aCwgJ2J2ZnMuZGInXG4gICAgbW91bnRfcGF0aCAgPSBQQVRILmpvaW4gcmVmX3BhdGgsICdtb3VudCdcbiAgICBzaGVsbF9jZmcgICA9IHsgY3dkOiByZWZfcGF0aCwgbGluZXM6IHRydWUsIG9ubHlfc3Rkb3V0OiB0cnVlLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBtYXRjaF9hbGxfZnNfbW91bnRzID0gKCBjZmcgKSAtPlxuICAgICAgUiAgICAgPSBbXVxuICAgICAgbGluZXMgPSBzaGVsbCB7IG9ubHlfc3Rkb3V0OiB0cnVlLCB9LCAnY2F0JywgJy9ldGMvbXRhYidcbiAgICAgIGZvciBsaW5lIGluIGxpbmVzXG4gICAgICAgIFsgZGV2aWNlLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdHlwZSwgICBdID0gbGluZS5zcGxpdCAvXFx4MjAvXG4gICAgICAgIGNvbnRpbnVlIGlmIGNmZy5kZXZpY2U/IGFuZCAoIGRldmljZSBpc250IGNmZy5kZXZpY2UgKVxuICAgICAgICBwYXRoICAgICAgICA9IGRlY29kZV9vY3RhbCBwYXRoXG4gICAgICAgIGNvbnRpbnVlIGlmIGNmZy5wYXRoPyAgIGFuZCAoIHBhdGggICBpc250IGNmZy5wYXRoICAgKVxuICAgICAgICBjb250aW51ZSBpZiBjZmcudHlwZT8gICBhbmQgKCB0eXBlICAgaXNudCBjZmcudHlwZSAgIClcbiAgICAgICAgUi5wdXNoIHsgZGV2aWNlLCBwYXRoLCB0eXBlLCB9XG4gICAgICByZXR1cm4gUlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaXNfbW91bnRlZCA9ICggY2ZnICkgLT5cbiAgICAgIHN3aXRjaCAoIG1vdW50cyA9IG1hdGNoX2FsbF9mc19tb3VudHMgY2ZnICkubGVuZ3RoXG4gICAgICAgIHdoZW4gMCB0aGVuIHJldHVybiBmYWxzZVxuICAgICAgICB3aGVuIDEgdGhlbiByZXR1cm4gdHJ1ZVxuICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlidmZzX18zOCBleHBlY3RlZCAwIG9yIDEgbWF0Y2gsIGdvdCAje21vdW50cy5sZW5ndGh9OiAje3JwciBtb3VudHN9XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzaCA9IG5ldyBTaGVsbCgpXG4gICAgICBAdGhyb3dzICggzqlidmZzX18zOSA9IC0+IHNoLl92YWxpZGF0ZV9jYWxsX2FyZ3VtZW50cyBudWxsICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgcG9kIG9yIGEgdGV4dCwgZ290IGEvXG4gICAgICBAdGhyb3dzICggzqlidmZzX180MCA9IC0+IHNoLl92YWxpZGF0ZV9jYWxsX2FyZ3VtZW50cyBbXSAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgcG9kIG9yIGEgdGV4dCwgZ290IGEvXG4gICAgICBAdGhyb3dzICggzqlidmZzX180MSA9IC0+IHNoLl92YWxpZGF0ZV9jYWxsX2FyZ3VtZW50cyB7fSAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dCwgZ290IGEvXG4gICAgICBAZXEgICAgICggzqliYmJ0X180MiA9IC0+IHNoLl92YWxpZGF0ZV9jYWxsX2FyZ3VtZW50cyAnbHMnICAgICAgICAgICAgICAgKSwgeyBjZmc6IHsgY3dkOiByZWZfcGF0aCwgbGluZXM6IHRydWUsIH0sIGNtZDogJ2xzJywgcGFyYW1ldGVyczogW10gfVxuICAgICAgQGVxICAgICAoIM6pYmJidF9fNDMgPSAtPiBzaC5fdmFsaWRhdGVfY2FsbF9hcmd1bWVudHMgJ2xzJywgJy1BbEYnICAgICAgICksIHsgY2ZnOiB7IGN3ZDogcmVmX3BhdGgsIGxpbmVzOiB0cnVlLCB9LCBjbWQ6ICdscycsIHBhcmFtZXRlcnM6IFsgJy1BbEYnLCBdIH1cbiAgICAgIEBlcSAgICAgKCDOqWJiYnRfXzQ0ID0gLT4gc2guX3ZhbGlkYXRlX2NhbGxfYXJndW1lbnRzICdscycsICctQWxGJywgJy4nICApLCB7IGNmZzogeyBjd2Q6IHJlZl9wYXRoLCBsaW5lczogdHJ1ZSwgfSwgY21kOiAnbHMnLCBwYXJhbWV0ZXJzOiBbICctQWxGJywgJy4nLCBdIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgc2ggPSBuZXcgU2hlbGwgc2hlbGxfY2ZnXG4gICAgICBkZWJ1ZyAnzqliYmJ0X180NScsIHNoLmNhbGwgJ2xzJ1xuICAgICAgZGVidWcgJ86pYmJidF9fNDYnLCBzaC5jYWxsICdncmVwJywgJy1QaScsICdzcWxpdGVmcycsICcvZXRjL210YWInXG4gICAgICB0cnkgaGVscCAnzqliYmJ0X180NycsIHNoLmNhbGwgJ2dyZXAnLCAnLVBpJywgJ3NxbGl0ZWZzJywgJy9ldGMvbXRhYicgICAgICAgICBjYXRjaCBlIHRoZW4gd2FybiAnzqliYmJ0X180OCcsIHJldmVyc2UgZS5tZXNzYWdlXG4gICAgICB0cnkgaGVscCAnzqliYmJ0X180OScsIHNoLmNhbGwgJ2dyZXAnLCAnLVBpJywgJ3NxbGl0ZWZzWVlZWScsICcvZXRjL210YWInICAgICBjYXRjaCBlIHRoZW4gd2FybiAnzqliYmJ0X181MCcsIHJldmVyc2UgZS5tZXNzYWdlXG4gICAgICB0cnkgaGVscCAnzqliYmJ0X181MScsIHNoLmNhbGwgJ2dyZXAnLCAnLVBpJywgJ3NxbGl0ZWZzWVlZWScsICcvZXRjL210YWJZWVlZJyBjYXRjaCBlIHRoZW4gd2FybiAnzqliYmJ0X181MicsIHJldmVyc2UgZS5tZXNzYWdlXG4gICAgICA7bnVsbFxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzaCA9IG5ldyBTaGVsbCBzaGVsbF9jZmdcbiAgICAgIGluZm8gJ86pYmJidF9fNTMnLCBtYXRjaF9hbGxfZnNfbW91bnRzIHsgZGV2aWNlOiAnc3FsaXRlZnMnLCB9XG4gICAgICBpbmZvICfOqWJiYnRfXzU0JywgbWF0Y2hfYWxsX2ZzX21vdW50cyB7IGRldmljZTogJ3NxbGl0ZWZzJywgdHlwZTogJ3NxbGZzJywgfVxuICAgICAgaW5mbyAnzqliYmJ0X181NScsIG1hdGNoX2FsbF9mc19tb3VudHMgeyBkZXZpY2U6ICdzcWxpdGVmcycsIHR5cGU6ICdmdXNlJywgfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzaCA9IG5ldyBTaGVsbCBzaGVsbF9jZmdcbiAgICAgIGluZm8gJ86pYmJidF9fNTYnLCBpc19tb3VudGVkIHsgZGV2aWNlOiAnc3FsaXRlZnMnLCB9XG4gICAgICBpbmZvICfOqWJiYnRfXzU3JywgaXNfbW91bnRlZCB7IGRldmljZTogJ3NxbGl0ZWZzJywgdHlwZTogJ3NxbGZzJywgfVxuICAgICAgaW5mbyAnzqliYmJ0X181OCcsIGlzX21vdW50ZWQgeyBkZXZpY2U6ICdzcWxpdGVmcycsIHR5cGU6ICdmdXNlJywgfVxuICAgICAgdHJ5IGluZm8gJ86pYmJidF9fNTknLCBpc19tb3VudGVkIHt9IGNhdGNoIGUgdGhlbiB3YXJuICfOqWJiYnRfXzYwJywgcmV2ZXJzZSBlLm1lc3NhZ2VcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIyNcbiAgICBPdXRwdXQgd2hlbiBtb3VudCBwb2ludCBuYW1lIGlzICdtIG8gdSBuIHQnOlxuICAgICAgWyAnc3FsaXRlZnMgL2hvbWUvZmxvdy9qenIvYnZmcy9tXFxcXDA0MG9cXFxcMDQwdVxcXFwwNDBuXFxcXDA0MHQgZnVzZSBydyxub3N1aWQsbm9kZXYscmVsYXRpbWUsdXNlcl9pZD0xMDAwLGdyb3VwX2lkPTEwMDAsZGVmYXVsdF9wZXJtaXNzaW9ucyxhbGxvd19vdGhlciAwIDAnIF1cbiAgICBPdXRwdXQgd2hlbiBtb3VudCBwb2ludCBuYW1lIGlzICfwq52AJzpcbiAgICAgIFsgJ3NxbGl0ZWZzIC9ob21lL2Zsb3cvanpyL2J2ZnMv8KudgCBmdXNlIHJ3LG5vc3VpZCxub2RldixyZWxhdGltZSx1c2VyX2lkPTEwMDAsZ3JvdXBfaWQ9MTAwMCxkZWZhdWx0X3Blcm1pc3Npb25zLGFsbG93X290aGVyIDAgMCcgXVxuICAgICMjI1xuICAgICMgc3FsaXRlZnMgL2hvbWUvZmxvdy9qenIvYnZmcy9tb3VudCBmdXNlIHJ3LG5vc3VpZCxub2RldixyZWxhdGltZSx1c2VyX2lkPTEwMDAsZ3JvdXBfaWQ9MTAwMCxkZWZhdWx0X3Blcm1pc3Npb25zLGFsbG93X290aGVyIDAgMFxuICAgICMgZ3JlcDogL2V0Yy9tdGFiWVlZWTogTm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeVxuICAgICMgICQkJCAgICAvLy8gMiDRhSAgYnZmcyBAIDEuMC4wIHBrZyAgYXQgMTE6MTU6MzZcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgdHJhc2ggYnZmcy5kYiAmJiBiaW4vc3FsaXRlLWZzIG1vdW50IC0tIC4vYnZmcy5kYiAmIGRpc293biAmJiBzcWxpdGUzIGJ2ZnMuZGIgXCIuZHVtcFwiID4gYnZmcy5kdW1wLnNxbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFzeW5jX3NoZWxsOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICB7ICQsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJ2V4ZWNhJ1xuICAgIHsgU2hlbGwsICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9idmZzJ1xuICAgIHsgQXN5bmNfamV0c3RyZWFtLFxuICAgICAgSmV0c3RyZWFtLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICB7IGxldHMsXG4gICAgICBmcmVlemUsICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2xldHNmcmVlemV0aGF0J1xuICAgIGNyZWF0ZV9nbG9iX21hdGNoZXIgICAgICAgICAgID0gcmVxdWlyZSAncGljb21hdGNoJ1xuICAgIHsgcmVnZXgsICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAncmVnZXgnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRlY29kZV9vY3RhbCA9ICggdGV4dCApIC0+IHRleHQucmVwbGFjZSAvKD88IVxcXFwpXFxcXChbMC03XXszfSkvZ3YsICggJDAsICQxICkgLT5cbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludCBwYXJzZUludCAkMSwgOFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBhd2FpdCAkKHt2ZXJib3NlOiAnZnVsbCd9KVwiY2F0IHBhY2thZ2UuanNvblwiXG4gICAgYXdhaXQgJCh7dmVyYm9zZTogJ2Z1bGwnfSlcImNhdCAuZ2l0aWdub3JlXCJcbiAgICBSID0gYXdhaXQgJCggeyBsaW5lczogdHJ1ZSwgdmVyYm9zZTogJ2Z1bGwnLCB9IClcImNhdCAuZ2l0aWdub3JlXCIucGlwZVwic29ydFwiXG4gICAgZGVidWcgJ86pYmJidF9fNjEnLCBSLnN0ZG91dFxuICAgIFIgPSBhd2FpdCBcXFxuICAgICAgJCggICAgICB7IGxpbmVzOiB0cnVlLCB2ZXJib3NlOiAnZnVsbCcsIH0gKVwiY2F0IC5naXRpZ25vcmVcIiBcXFxuICAgICAgLnBpcGUoICB7IGxpbmVzOiB0cnVlLCB2ZXJib3NlOiAnZnVsbCcsIH0gKVwic29ydFwiXG4gICAgZGVidWcgJ86pYmJidF9fNjInLCAoIHJwciBSLnN0ZG91dCApWyAuLiAxMDggXSArICcuLi4nXG4gICAgUiA9IGF3YWl0ICQoIHsgbGluZXM6IHRydWUsIHZlcmJvc2U6ICdmdWxsJywgfSApXCJjYXQgLmdpdGlnbm9yZVwiLnBpcGVcInNvcnRcIi5waXBlXCJoZWFkIC1uMlwiXG4gICAgZGVidWcgJ86pYmJidF9fNjMnLCAoIHJwciBSLnN0ZG91dCApWyAuLiAxMDggXSArICcuLi4nXG4gICAgUiA9IGF3YWl0ICQoIHsgbGluZXM6IHRydWUsIHZlcmJvc2U6ICdmdWxsJywgfSApXCJtb3VudFwiXG4gICAgZGVidWcgJ86pYmJidF9fNjQnLCAoIHJwciBSLnN0ZG91dCApWyAuLiAxMDggXSArICcuLi4nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBhd2FpdCBkbyA9PlxuICAgICAgIyBmYWxsYmFjayAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgICAgIyMjIFRBSU5UIHRoZSBvdXRwdXQgb2YgYG1vdW50YCBpcyBub3QgZXNjYXBlZCBhbmQgbm90IHF1b3RlZCwgc28gdGhlcmUncyBsb3RzIG9mIG9wcG9ydHVuaXRpZXNcbiAgICAgIGZvciBwYXRocyBhbmQgZGV2aWNlIG5hbWVzIHdpdGggc3BhY2VzIG9yIHBhcmVucyB0byBjYXVzZSB0aGUgbWF0Y2ggdG8gZmFpbDsgY29uc2lkZXIgdG8gdXNlXG4gICAgICBgY2F0IC9ldGMvbXRhYmAgaW5zdGVhZCB3aGljaCB1c2VzIG9jdGFsIGVzY2FwZXMgZm9yIGZpbGVuYW1lcyB3aXRoIHNwYWNlcy4gIyMjXG4gICAgICBwYXR0ZXJuICAgPSAvLy9cbiAgICAgICAgXlxuICAgICAgICAgICAgICAgICAgICAgICAgKD88ZGV2aWNlPiAgIFteXFx4MjBdKyApXG4gICAgICAgIFxceDIwIG9uICAgXFx4MjAgICg/PHBhdGg+ICAgICAuKz8gICAgICApXG4gICAgICAgIFxceDIwIHR5cGUgXFx4MjAgICg/PHR5cGU+ICAgICBbXlxceDIwXSsgKVxuICAgICAgICBcXHgyMCBcXCggICAgICAgICAoPzxvcHRpb25zPiAgW15cXHgyMF0rICkgXFwpXG4gICAgICAgICQgLy8vdlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzaF9tb3VudF9qZXQgPSBuZXcgSmV0c3RyZWFtIHsgZW1wdHlfY2FsbDogbnVsbCwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzaF9tb3VudF9qZXQucHVzaCAoIE5OICkgLT5cbiAgICAgICAgIyB7IHN0ZG91dCwgfSA9IGF3YWl0ICQoIHsgbGluZXM6IHRydWUsIHZlcmJvc2U6ICdub25lJywgfSApXCJtb3VudFwiXG4gICAgICAgIHlpZWxkIGZyb20gR1VZLmZzLndhbGtfbGluZXMgJy9ldGMvbXRhYidcbiAgICAgICAgIyAgIGRlYnVnICfOqWJiYnRfXzY1JyxcbiAgICAgICAgIyAgICBsaW5lLnNwbGl0ICdcXHgyMCdcbiAgICAgICAgIyBmb3IgbGluZSBpbiBzdGRvdXRcbiAgICAgICAgIyAgIHlpZWxkIGxpbmVcbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2hfbW91bnRfamV0LnB1c2ggKCBsaW5lICkgLT5cbiAgICAgICAgcmV0dXJuIG51bGwgaWYgbGluZSBpcyAnJ1xuICAgICAgICBbIGRldmljZVxuICAgICAgICAgIHBhdGhcbiAgICAgICAgICB0eXBlXG4gICAgICAgICAgb3B0aW9ucyBdID0gbGluZS5zcGxpdCAnXFx4MjAnXG4gICAgICAgIGlmIFsgZGV2aWNlLCBwYXRoLCB0eXBlLCBvcHRpb25zLCBdLnNvbWUgKCBlICkgLT4gKCBub3QgZT8gKSBvciAoIGUgaXMgJycgKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pYnZmc19fNjYgdW5hYmxlIHRvIHBhcnNlIGxpbmUgI3tycHIgbGluZX1cIlxuICAgICAgICB5aWVsZCBmcmVlemUgeyBkZXZpY2UsIHBhdGgsIHR5cGUsIG9wdGlvbnMsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2hfbW91bnRfamV0LnB1c2ggKCBkICkgLT5cbiAgICAgICAgeWllbGQgbGV0cyBkLCAoIGQgKSAtPlxuICAgICAgICAgIGQub3B0aW9ucyA9IGQub3B0aW9ucy5zcGxpdCAnLCdcbiAgICAgICAgICBkLnBhdGggICAgPSBkZWNvZGVfb2N0YWwgZC5wYXRoXG4gICAgICAgIDtudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGNyZWF0ZV9yZWdleF9tYXRjaGVyID0gKCBwYXR0ZXJuICkgLT5cbiAgICAgICAgcmV0dXJuICggLT4gdHJ1ZSApIHVubGVzcyBwYXR0ZXJuP1xuICAgICAgICBzd2l0Y2ggdHlwZSA9IHR5cGVfb2YgcGF0dGVyblxuICAgICAgICAgIHdoZW4gJ3JlZ2V4J1xuICAgICAgICAgICAgcmUgPSBwYXR0ZXJuXG4gICAgICAgICAgd2hlbiAndGV4dCdcbiAgICAgICAgICAgIHJlID0gcmVnZXhcIiN7cGF0dGVybn1cIlxuICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yIFwizqlidmZzX18zOCBleHBlY3RlZCBhIHJlZ2V4IG9yIGEgdGV4dCwgZ290IGEgI3t0eXBlfVwiXG4gICAgICAgIHJldHVybiAoIHggKSAtPiByZS5sYXN0SW5kZXggPSAwOyByZS50ZXN0IHhcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgd2Fsa19zaF9tb3VudF9tYXRjaGVzID0gKHsgZGV2aWNlID0gbnVsbCwgcGF0aCA9IG51bGwsIGdsb2IgPSBudWxsLCB0eXBlID0gbnVsbCwgfT17fSkgLT5cbiAgICAgICAgaWYgZ2xvYj9cbiAgICAgICAgICBpZiBwYXRoP1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlidmZzX182NyBleHBlY3RlZCBlaXRoZXIgZ2xvYiBvciBwYXRoLCBnb3QgYm90aFwiXG4gICAgICAgICAgbWF0Y2hfZ2xvYiAgPSBjcmVhdGVfZ2xvYl9tYXRjaGVyIGdsb2JcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG1hdGNoX2dsb2IgID0gLT4gdHJ1ZVxuICAgICAgICBtYXRjaF9kZXZpY2UgID0gY3JlYXRlX3JlZ2V4X21hdGNoZXIgZGV2aWNlXG4gICAgICAgIG1hdGNoX3BhdGggICAgPSBjcmVhdGVfcmVnZXhfbWF0Y2hlciBwYXRoXG4gICAgICAgIG1hdGNoX3R5cGUgICAgPSBjcmVhdGVfcmVnZXhfbWF0Y2hlciB0eXBlXG4gICAgICAgICMjIyBUQUlOVCBhbGxvdyByZWdleGVzICMjI1xuICAgICAgICBmb3IgZCBmcm9tIHNoX21vdW50X2pldC53YWxrKClcbiAgICAgICAgICBjb250aW51ZSB1bmxlc3MgbWF0Y2hfZGV2aWNlICBkLmRldmljZVxuICAgICAgICAgIGNvbnRpbnVlIHVubGVzcyBtYXRjaF9nbG9iICAgIGQucGF0aFxuICAgICAgICAgIGNvbnRpbnVlIHVubGVzcyBtYXRjaF9wYXRoICAgIGQucGF0aFxuICAgICAgICAgIGNvbnRpbnVlIHVubGVzcyBtYXRjaF90eXBlICAgIGQudHlwZVxuICAgICAgICAgIHlpZWxkIGRcbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaGFzX21vdW50ID0gKCBQLi4uICkgLT5cbiAgICAgICAgbW91bnRzID0gWyAoIHdhbGtfc2hfbW91bnRfbWF0Y2hlcyBQLi4uICkuLi4sIF1cbiAgICAgICAgcmV0dXJuIHN3aXRjaCBjb3VudCA9IG1vdW50cy5sZW5ndGhcbiAgICAgICAgICB3aGVuIDAgdGhlbiBmYWxzZVxuICAgICAgICAgIHdoZW4gMSB0aGVuIHRydWVcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlidmZzX182OCBleHBlY3RlZCB6ZXJvIG9yIG9uZSByZXN1bHRzLCBnb3QgI3tjb3VudH1cIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGZvciBhd2FpdCBkIGZyb20gd2Fsa19zaF9tb3VudF9tYXRjaGVzIHsgZGV2aWNlOiAnc3FsaXRlZnMnLCB9XG4gICAgICBmb3IgYXdhaXQgZCBmcm9tIHdhbGtfc2hfbW91bnRfbWF0Y2hlcygpXG4gICAgICAgIHVyZ2UgJ86pYmJidF9fNjknLCBkXG4gICAgICByZXN1bHQgPSBbICggZCBmb3IgYXdhaXQgZCBmcm9tIHdhbGtfc2hfbW91bnRfbWF0Y2hlcyB7IGRldmljZTogJ3RtcGZzJywgfSApLi4uLCBdXG4gICAgICBAZXEgKCDOqWJ2ZnNfXzcwID0gLT4gcmVzdWx0Lmxlbmd0aCA+IDEgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBlcnJvciA9IG51bGxcbiAgICAgIHRyeSBhd2FpdCBoYXNfbW91bnQgeyBkZXZpY2U6ICd0bXBmcycsIH0gY2F0Y2ggZXJyb3JcbiAgICAgICAgQGVxICggzqlidmZzX183MSA9IC0+IC9leHBlY3RlZCB6ZXJvIG9yIG9uZSByZXN1bHRzLCBnb3QgXFxkKy8udGVzdCBlcnJvci5tZXNzYWdlICksIHRydWVcbiAgICAgIEBlcSAoIM6pYnZmc19fNzIgPSAtPiBlcnJvciBpcyBudWxsICksIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pYmJidF9fNzMgPSAtPiBoYXNfbW91bnQgeyBwYXRoOiAnL2Rldi9zaG0nLCAgICAgICB9ICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJidF9fNzQgPSAtPiBoYXNfbW91bnQgeyBwYXRoOiAvXlxcL2RldlxcL3NobSQvdiwgIH0gKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmJ0X183NSA9IC0+IGhhc19tb3VudCB7IGdsb2I6ICcvKi9zaG0nLCAgICAgICAgIH0gKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmJ0X183NiA9IC0+IGhhc19tb3VudCB7IHBhdGg6ICcvbm8vc3VjaC9wYXRoJywgIH0gKSwgZmFsc2VcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGFjY2Vzc19mc193aXRoX2RiOiBAdGFza3MuYWNjZXNzX2ZzX3dpdGhfZGIsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHNjcmlwdHNfWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZOiBAdGFza3Muc2NyaXB0c19ZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVksIH1cbiAgYXdhaXQgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLmFzeW5jX3Rlc3QgeyBhc3luY19zaGVsbDogQHRhc2tzLmFzeW5jX3NoZWxsLCB9XG5cbiJdfQ==
