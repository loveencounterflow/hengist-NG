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
        // for await d from walk_sh_mount_matches()
        //   urge 'Ωbbbt__69', d
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBSUUsQ0FBQTs7SUFBQSxNQUFBLEVBQVEsUUFBQSxDQUFBLENBQUE7QUFDVixVQUFBLGVBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxtQkFBQSxFQUFBO01BQUksU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixT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QixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdELEVBRGhCOzs7YUFJRSxDQUFBLE1BQU0sQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxVQUF6QixDQUFvQztRQUFFLFdBQUEsRUFBYSxJQUFDLENBQUEsS0FBSyxDQUFDO01BQXRCLENBQXBDLENBQU47SUFMc0MsQ0FBQSxJQUF4Qzs7QUExWkEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1zZm1vZHVsZXMvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0YXNrcyA9XG5cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJhc2ljczogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBKZXRzdHJlYW0sXG4gICAgICBBc3luY19qZXRzdHJlYW0sXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogICA1MDksIHNwcm06ICdkcnd4cnd4ci14JywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06IDE2ODMyLCBzcHJtOiAnZHJ3eC0tLS0tLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAgIDQ0OCwgc3BybTogJ2Ryd3gtLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogMTY3MDQsIHNwcm06ICdkci14LS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06ICAgNTA5LCBzcHJtOiAnZHJ3eHJ3eHIteCcsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAgIDUwOSwgc3BybTogJ2Ryd3hyd3hyLXgnLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMyMDQsIHNwcm06ICcucnctcnctci0tJywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMTUyLCBzcHJtOiAnLnJ3LS0tLS0tLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzIwNCwgc3BybTogJ2Ryd3gtLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogICA0NDgsIHNwcm06ICcucnctcnctci0tJywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMjA0LCBzcHJtOiAnLnJ3LXJ3LXItLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzE1Miwgc3BybTogJy5ydy0tLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMxNTIsIHNwcm06ICcucnctLS0tLS0tJywgfVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZvciB7IHR5cGUsIG5wcm0sIHNwcm0sIH0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICBvcHJtID0gJzBvJyArICggbnBybS50b1N0cmluZyAgOCApLnBhZFN0YXJ0ICA4LCAnMCdcbiAgICAgICAgeHBybSA9ICcweCcgKyAoIG5wcm0udG9TdHJpbmcgMTYgKS5wYWRTdGFydCAgOCwgJzAnXG4gICAgICAgIGJwcm0gPSAnX18nICsgKCBucHJtLnRvU3RyaW5nICAyICkucGFkU3RhcnQgMTYsICcwJ1xuICAgICAgICBkZWJ1ZyAnzqlidmZzX19fMScsIGZcIiN7bnBybX06PjEwYzsgI3tvcHJtfTo+MTBjOyAje3hwcm19Oj4xMGM7ICN7YnBybX06PjIwYzsgI3tzcHJtfTo+MTBjOyBcIlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmaWxlX3Blcm1pc3Npb25zX2xvZ2ljOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgVVAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ3VuaXgtcGVybWlzc2lvbnMnXG4gICAgRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4gICAgZGVidWcgJ86pYmJidF9fXzInLCAoIGsgZm9yIGsgb2YgVVAgKVxuICAgIGRlYnVnICfOqWJiYnRfX18zJywgVVAuY29udmVydC5vYmplY3QgKCBGUy5zdGF0U3luYyAnL2V0Yy9wYXNzd2QnICkubW9kZVxuICAgIGRlYnVnICfOqWJiYnRfX180JywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAnYS13J306PiMwM287XCJcbiAgICBkZWJ1ZyAnzqliYmJ0X19fNScsIGZcIiN7VVAuY29udmVydC5udW1iZXIgJ2Erdyd9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYmJidF9fXzYnLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICd1K3cnfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJiYnRfX183JywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAndStyJ306PiMwM287XCJcbiAgICBkZWJ1ZyAnzqliYmJ0X19fOCcsIGZcIiN7VVAuY29udmVydC5udW1iZXIgJ3UtdyxnLXcsby13J306PiMwM287XCJcbiAgICBkZWJ1ZyAnzqliYmJ0X19fOScsIGZcIiN7VVAuY29udmVydC5udW1iZXIgJ3UrdyxnK3csbyt3J306PiMwM287XCJcbiAgICBkZWJ1ZyAnzqliYmJ0X18xMCcsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljICd1K3csZyt3LG8rdyd9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJiYnRfXzExJywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG83NzV9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJiYnRfXzEyJywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG82NjR9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJiYnRfXzEzJywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG81NTV9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJiYnRfXzE0JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG80NDR9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJiYnRfXzE1J1xuICAgIGhlbHAgJ86pYmJidF9fMTYnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzAwMDc3NX06PjIwYztcIlxuICAgIGhlbHAgJ86pYmJidF9fMTcnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzA0MDU1NX06PjIwYztcIlxuICAgIGhlbHAgJ86pYmJidF9fMTgnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzEwMDQ0NH06PjIwYztcIlxuICAgIGhlbHAgJ86pYmJidF9fMTknXG4gICAgaGVscCAnzqliYmJ0X18yMCcsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDAwNzc1ICYgMHhmZTAwIHwgMHgwMWZkIH06PjIwYztcIiAjIyMgMG83NzUgZHJ3eHJ3eHIteCBmb2xkZXIgb3BlbiAjIyNcbiAgICBoZWxwICfOqWJiYnRfXzIxJywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wNDA1NTUgJiAweGZlMDAgfCAweDAxZmQgfTo+MjBjO1wiICMjIyAwbzc3NSBkcnd4cnd4ci14IGZvbGRlciBvcGVuICMjI1xuICAgIGhlbHAgJ86pYmJidF9fMjInLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzEwMDQ0NCAmIDB4ZmUwMCB8IDB4MDFiNCB9Oj4yMGM7XCIgIyMjIDBvNjY0IC5ydy1ydy1yLS0gZmlsZSBvcGVuICMjI1xuICAgIGhlbHAgJ86pYmJidF9fMjMnXG4gICAgaGVscCAnzqliYmJ0X18yNCcsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDAwNzc1ICYgMHhmZTAwIHwgMHgwMTZkIH06PjIwYztcIiAjIyMgMG81NTUgZHIteHIteHIteCBmb2xkZXIgY2xvc2VkICMjI1xuICAgIGhlbHAgJ86pYmJidF9fMjUnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzA0MDU1NSAmIDB4ZmUwMCB8IDB4MDE2ZCB9Oj4yMGM7XCIgIyMjIDBvNTU1IGRyLXhyLXhyLXggZm9sZGVyIGNsb3NlZCAjIyNcbiAgICBoZWxwICfOqWJiYnRfXzI2JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8xMDA0NDQgJiAweGZlMDAgfCAweDAxMjQgfTo+MjBjO1wiICMjIyAwbzQ0NCAuci0tci0tci0tIGZpbGUgY2xvc2VkICMjI1xuICAgICMgQGVxICggzqliYmJ0X18yNyA9IC0+IGZhbHNlICksIGZhbHNlXG4gICAgIyMjXG4gICAgaGVscCAnzqlidmZzdG9fXzI4JywgXCJkcnd4cnd4ci14XCIsICggMG83NzUudG9TdHJpbmcgOCApLCAoICcweCcgKyAoIDBvNzc1LnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgNCwgJzAnIClcbiAgICBoZWxwICfOqWJ2ZnN0b19fMjknLCBcIi5ydy1ydy1yLS1cIiwgKCAwbzY2NC50b1N0cmluZyA4ICksICggJzB4JyArICggMG82NjQudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA0LCAnMCcgKVxuICAgIGhlbHAgJ86pYnZmc3RvX18zMCcsIFwiZHIteHIteHIteFwiLCAoIDBvNTU1LnRvU3RyaW5nIDggKSwgKCAnMHgnICsgKCAwbzU1NS50b1N0cmluZyAxNiApLnBhZFN0YXJ0IDQsICcwJyApXG4gICAgaGVscCAnzqlidmZzdG9fXzMxJywgXCIuci0tci0tci0tXCIsICggMG80NDQudG9TdHJpbmcgOCApLCAoICcweCcgKyAoIDBvNDQ0LnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgNCwgJzAnIClcbiAgICBoZWxwICfOqWJ2ZnN0b19fMzInLCBcIj8/LT8/LT8/LT9cIiwgKCAwYjEwMV8xMDFfMTAxLnRvU3RyaW5nIDggKSwgKCAnMHgnICsgKCAwYjEwMV8xMDFfMTAxLnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgNCwgJzAnIClcbiAgICBoZWxwICfOqWJ2ZnN0b19fMzMnLCBcIj8/dz8/dz8/LT9cIiwgKCAwYjAxMF8wMTBfMDAwLnRvU3RyaW5nIDggKSwgKCAnMHgnICsgKCAwYjAxMF8wMTBfMDAwLnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgNCwgJzAnIClcbiAgICAjIyNcbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWNjZXNzX2ZzX3dpdGhfZGI6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgIHsgZXhlY2FTeW5jLCAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnZXhlY2EnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBTcWxpdGVmc19kYiBleHRlbmRzIERicmljXG4gICAgICAjIEBidWlsZDogW1xuICAgICAgIyAgIFNRTFwiXCJcIlxuICAgICAgIyAgICAgY3JlYXRlIHRhYmxlIG5vbmNvbmZvcm1fb25lICggYSB0ZXh0IHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAjICAgU1FMXCJcIlwiXG4gICAgICAjICAgICAtLSB0aGlzIGNvbW1lbnQgc2hvdWxkbid0IGJlIGhlcmVcbiAgICAgICMgICAgIGNyZWF0ZSB2aWV3IG5vbmNvbmZvcm1fdHdvIGFzIHNlbGVjdCAqIGZyb20gbm9uY29uZm9ybV9vbmU7XCJcIlwiXG4gICAgICAjICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgZ2V0X2ZzX29iamVjdHM6IFNRTFwiXCJcIlxuICAgICAgICAgIHNlbGVjdCAqIGZyb20gYmJfbGlzdDtcIlwiXCJcbiAgICAgIHdhbGtfZnNfb2JqZWN0czogLT4geWllbGQgZnJvbSBAc3RhdGVtZW50cy5nZXRfZnNfb2JqZWN0cy5pdGVyYXRlKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJlZl9wYXRoICAgID0gUEFUSC5yZXNvbHZlIF9fZGlybmFtZSwgJy4uLy4uLy4uL2FwcHMvYnZmcydcbiAgICBkYl9wYXRoICAgICA9IFBBVEguam9pbiByZWZfcGF0aCwgJ2J2ZnMuZGInXG4gICAgbW91bnRfcGF0aCAgPSBQQVRILmpvaW4gcmVmX3BhdGgsICdtb3VudCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNoZWxsX2NmZyAgID0geyBjd2Q6IHJlZl9wYXRoLCBsaW5lczogdHJ1ZSwgfVxuICAgIHNoZWxsICAgICAgID0gKCBjbWQsIFAuLi4gKSAtPiAoIGV4ZWNhU3luYyBjbWQsIFAsIHNoZWxsX2NmZyApLnN0ZG91dFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGIgICAgICAgICAgPSBTcWxpdGVmc19kYi5vcGVuIGRiX3BhdGhcbiAgICBkZWJ1ZyAnzqlidmZzX18zNCcsIGRiLnN0YXRlbWVudHNcbiAgICBwYXRocyAgICAgICA9IFtdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZm9yIGxpbmUgaW4gc2hlbGwgJ3Nob3ctbGF5b3V0JywgbW91bnRfcGF0aFxuICAgICAgICBlY2hvIGxpbmVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgbW9kZSA9ICdjbG9zZSdcbiAgICAjIG1vZGUgPSAnb3BlbidcbiAgICBtb2RlID0gJ25vdGhpbmcnXG4gICAgc3dpdGNoIG1vZGVcbiAgICAgIHdoZW4gJ29wZW4nIHRoZW4gZG8gPT5cbiAgICAgICAgZGVidWcgJ86pYnZmc19fMzUnLCBkYi5leGVjdXRlIFNRTFwiXCJcIlxuICAgICAgICB1cGRhdGUgbWV0YWRhdGEgc2V0IG1vZGUgPSBzLm9wZW5fbW9kZVxuICAgICAgICAgIGZyb20gbWV0YWRhdGEgICAgICAgICAgIGFzIG1cbiAgICAgICAgICBqb2luIGJiX3N0YW5kYXJkX21vZGVzICBhcyBzIG9uICggbS5pZCA9IHMuZmlsZV9pZCApO1wiXCJcIlxuICAgICAgICA7bnVsbFxuICAgICAgd2hlbiAnY2xvc2UnIHRoZW4gZG8gPT5cbiAgICAgICAgZGVidWcgJ86pYnZmc19fMzYnLCBkYi5leGVjdXRlIFNRTFwiXCJcIlxuICAgICAgICB1cGRhdGUgbWV0YWRhdGEgc2V0IG1vZGUgPSBzLmNsb3NlZF9tb2RlXG4gICAgICAgICAgZnJvbSBtZXRhZGF0YSAgICAgICAgICAgYXMgbVxuICAgICAgICAgIGpvaW4gYmJfc3RhbmRhcmRfbW9kZXMgIGFzIHMgb24gKCBtLmlkID0gcy5maWxlX2lkICk7XCJcIlwiXG4gICAgICAgIDtudWxsXG4gICAgICB3aGVuICdub3RoaW5nJyB0aGVuIG51bGxcbiAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yIFwidW5rbm93biBtb2RlOiAje3JwciBtb2RlfVwiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgZCBmcm9tIGRiLndhbGtfZnNfb2JqZWN0cygpXG4gICAgICBmdWxsX3BhdGggPSBQQVRILmpvaW4gbW91bnRfcGF0aCwgZC5wYXRoXG4gICAgICBwYXRocy5wdXNoIGZ1bGxfcGF0aFxuICAgICAgdXJnZSAnzqlidmZzX18zNycsIGQubW9kZV9vLCBkLnBhdGggIyB7IGQuLi4sIGZ1bGxfcGF0aCwgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZvciBsaW5lIGluIHNoZWxsICdzaG93LWxheW91dCcsIG1vdW50X3BhdGhcbiAgICAgICAgZWNobyBsaW5lXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2NyaXB0c19ZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVk6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgIHsgZXhlY2FTeW5jLCAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnZXhlY2EnXG4gICAgeyBTaGVsbCwgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2J2ZnMnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZWZfcGF0aCAgICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hcHBzL2J2ZnMnXG4gICAgZGJfcGF0aCAgICAgPSBQQVRILmpvaW4gcmVmX3BhdGgsICdidmZzLmRiJ1xuICAgIG1vdW50X3BhdGggID0gUEFUSC5qb2luIHJlZl9wYXRoLCAnbW91bnQnXG4gICAgc2hlbGxfY2ZnICAgPSB7IGN3ZDogcmVmX3BhdGgsIGxpbmVzOiB0cnVlLCBvbmx5X3N0ZG91dDogdHJ1ZSwgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgbWF0Y2hfYWxsX2ZzX21vdW50cyA9ICggY2ZnICkgLT5cbiAgICAgIFIgICAgID0gW11cbiAgICAgIGxpbmVzID0gc2hlbGwgeyBvbmx5X3N0ZG91dDogdHJ1ZSwgfSwgJ2NhdCcsICcvZXRjL210YWInXG4gICAgICBmb3IgbGluZSBpbiBsaW5lc1xuICAgICAgICBbIGRldmljZSxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHR5cGUsICAgXSA9IGxpbmUuc3BsaXQgL1xceDIwL1xuICAgICAgICBjb250aW51ZSBpZiBjZmcuZGV2aWNlPyBhbmQgKCBkZXZpY2UgaXNudCBjZmcuZGV2aWNlIClcbiAgICAgICAgcGF0aCAgICAgICAgPSBkZWNvZGVfb2N0YWwgcGF0aFxuICAgICAgICBjb250aW51ZSBpZiBjZmcucGF0aD8gICBhbmQgKCBwYXRoICAgaXNudCBjZmcucGF0aCAgIClcbiAgICAgICAgY29udGludWUgaWYgY2ZnLnR5cGU/ICAgYW5kICggdHlwZSAgIGlzbnQgY2ZnLnR5cGUgICApXG4gICAgICAgIFIucHVzaCB7IGRldmljZSwgcGF0aCwgdHlwZSwgfVxuICAgICAgcmV0dXJuIFJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGlzX21vdW50ZWQgPSAoIGNmZyApIC0+XG4gICAgICBzd2l0Y2ggKCBtb3VudHMgPSBtYXRjaF9hbGxfZnNfbW91bnRzIGNmZyApLmxlbmd0aFxuICAgICAgICB3aGVuIDAgdGhlbiByZXR1cm4gZmFsc2VcbiAgICAgICAgd2hlbiAxIHRoZW4gcmV0dXJuIHRydWVcbiAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pYnZmc19fMzggZXhwZWN0ZWQgMCBvciAxIG1hdGNoLCBnb3QgI3ttb3VudHMubGVuZ3RofTogI3tycHIgbW91bnRzfVwiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgc2ggPSBuZXcgU2hlbGwoKVxuICAgICAgQHRocm93cyAoIM6pYnZmc19fMzkgPSAtPiBzaC5fdmFsaWRhdGVfY2FsbF9hcmd1bWVudHMgbnVsbCAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHBvZCBvciBhIHRleHQsIGdvdCBhL1xuICAgICAgQHRocm93cyAoIM6pYnZmc19fNDAgPSAtPiBzaC5fdmFsaWRhdGVfY2FsbF9hcmd1bWVudHMgW10gICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHBvZCBvciBhIHRleHQsIGdvdCBhL1xuICAgICAgQHRocm93cyAoIM6pYnZmc19fNDEgPSAtPiBzaC5fdmFsaWRhdGVfY2FsbF9hcmd1bWVudHMge30gICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIHRleHQsIGdvdCBhL1xuICAgICAgQGVxICAgICAoIM6pYmJidF9fNDIgPSAtPiBzaC5fdmFsaWRhdGVfY2FsbF9hcmd1bWVudHMgJ2xzJyAgICAgICAgICAgICAgICksIHsgY2ZnOiB7IGN3ZDogcmVmX3BhdGgsIGxpbmVzOiB0cnVlLCB9LCBjbWQ6ICdscycsIHBhcmFtZXRlcnM6IFtdIH1cbiAgICAgIEBlcSAgICAgKCDOqWJiYnRfXzQzID0gLT4gc2guX3ZhbGlkYXRlX2NhbGxfYXJndW1lbnRzICdscycsICctQWxGJyAgICAgICApLCB7IGNmZzogeyBjd2Q6IHJlZl9wYXRoLCBsaW5lczogdHJ1ZSwgfSwgY21kOiAnbHMnLCBwYXJhbWV0ZXJzOiBbICctQWxGJywgXSB9XG4gICAgICBAZXEgICAgICggzqliYmJ0X180NCA9IC0+IHNoLl92YWxpZGF0ZV9jYWxsX2FyZ3VtZW50cyAnbHMnLCAnLUFsRicsICcuJyAgKSwgeyBjZmc6IHsgY3dkOiByZWZfcGF0aCwgbGluZXM6IHRydWUsIH0sIGNtZDogJ2xzJywgcGFyYW1ldGVyczogWyAnLUFsRicsICcuJywgXSB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHNoID0gbmV3IFNoZWxsIHNoZWxsX2NmZ1xuICAgICAgZGVidWcgJ86pYmJidF9fNDUnLCBzaC5jYWxsICdscydcbiAgICAgIGRlYnVnICfOqWJiYnRfXzQ2Jywgc2guY2FsbCAnZ3JlcCcsICctUGknLCAnc3FsaXRlZnMnLCAnL2V0Yy9tdGFiJ1xuICAgICAgdHJ5IGhlbHAgJ86pYmJidF9fNDcnLCBzaC5jYWxsICdncmVwJywgJy1QaScsICdzcWxpdGVmcycsICcvZXRjL210YWInICAgICAgICAgY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYmJidF9fNDgnLCByZXZlcnNlIGUubWVzc2FnZVxuICAgICAgdHJ5IGhlbHAgJ86pYmJidF9fNDknLCBzaC5jYWxsICdncmVwJywgJy1QaScsICdzcWxpdGVmc1lZWVknLCAnL2V0Yy9tdGFiJyAgICAgY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYmJidF9fNTAnLCByZXZlcnNlIGUubWVzc2FnZVxuICAgICAgdHJ5IGhlbHAgJ86pYmJidF9fNTEnLCBzaC5jYWxsICdncmVwJywgJy1QaScsICdzcWxpdGVmc1lZWVknLCAnL2V0Yy9tdGFiWVlZWScgY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYmJidF9fNTInLCByZXZlcnNlIGUubWVzc2FnZVxuICAgICAgO251bGxcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgc2ggPSBuZXcgU2hlbGwgc2hlbGxfY2ZnXG4gICAgICBpbmZvICfOqWJiYnRfXzUzJywgbWF0Y2hfYWxsX2ZzX21vdW50cyB7IGRldmljZTogJ3NxbGl0ZWZzJywgfVxuICAgICAgaW5mbyAnzqliYmJ0X181NCcsIG1hdGNoX2FsbF9mc19tb3VudHMgeyBkZXZpY2U6ICdzcWxpdGVmcycsIHR5cGU6ICdzcWxmcycsIH1cbiAgICAgIGluZm8gJ86pYmJidF9fNTUnLCBtYXRjaF9hbGxfZnNfbW91bnRzIHsgZGV2aWNlOiAnc3FsaXRlZnMnLCB0eXBlOiAnZnVzZScsIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgc2ggPSBuZXcgU2hlbGwgc2hlbGxfY2ZnXG4gICAgICBpbmZvICfOqWJiYnRfXzU2JywgaXNfbW91bnRlZCB7IGRldmljZTogJ3NxbGl0ZWZzJywgfVxuICAgICAgaW5mbyAnzqliYmJ0X181NycsIGlzX21vdW50ZWQgeyBkZXZpY2U6ICdzcWxpdGVmcycsIHR5cGU6ICdzcWxmcycsIH1cbiAgICAgIGluZm8gJ86pYmJidF9fNTgnLCBpc19tb3VudGVkIHsgZGV2aWNlOiAnc3FsaXRlZnMnLCB0eXBlOiAnZnVzZScsIH1cbiAgICAgIHRyeSBpbmZvICfOqWJiYnRfXzU5JywgaXNfbW91bnRlZCB7fSBjYXRjaCBlIHRoZW4gd2FybiAnzqliYmJ0X182MCcsIHJldmVyc2UgZS5tZXNzYWdlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyMjXG4gICAgT3V0cHV0IHdoZW4gbW91bnQgcG9pbnQgbmFtZSBpcyAnbSBvIHUgbiB0JzpcbiAgICAgIFsgJ3NxbGl0ZWZzIC9ob21lL2Zsb3cvanpyL2J2ZnMvbVxcXFwwNDBvXFxcXDA0MHVcXFxcMDQwblxcXFwwNDB0IGZ1c2Ugcncsbm9zdWlkLG5vZGV2LHJlbGF0aW1lLHVzZXJfaWQ9MTAwMCxncm91cF9pZD0xMDAwLGRlZmF1bHRfcGVybWlzc2lvbnMsYWxsb3dfb3RoZXIgMCAwJyBdXG4gICAgT3V0cHV0IHdoZW4gbW91bnQgcG9pbnQgbmFtZSBpcyAn8KudgCc6XG4gICAgICBbICdzcWxpdGVmcyAvaG9tZS9mbG93L2p6ci9idmZzL/CrnYAgZnVzZSBydyxub3N1aWQsbm9kZXYscmVsYXRpbWUsdXNlcl9pZD0xMDAwLGdyb3VwX2lkPTEwMDAsZGVmYXVsdF9wZXJtaXNzaW9ucyxhbGxvd19vdGhlciAwIDAnIF1cbiAgICAjIyNcbiAgICAjIHNxbGl0ZWZzIC9ob21lL2Zsb3cvanpyL2J2ZnMvbW91bnQgZnVzZSBydyxub3N1aWQsbm9kZXYscmVsYXRpbWUsdXNlcl9pZD0xMDAwLGdyb3VwX2lkPTEwMDAsZGVmYXVsdF9wZXJtaXNzaW9ucyxhbGxvd19vdGhlciAwIDBcbiAgICAjIGdyZXA6IC9ldGMvbXRhYllZWVk6IE5vIHN1Y2ggZmlsZSBvciBkaXJlY3RvcnlcbiAgICAjICAkJCQgICAgLy8vIDIg0YUgIGJ2ZnMgQCAxLjAuMCBwa2cgIGF0IDExOjE1OjM2XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIHRyYXNoIGJ2ZnMuZGIgJiYgYmluL3NxbGl0ZS1mcyBtb3VudCAtLSAuL2J2ZnMuZGIgJiBkaXNvd24gJiYgc3FsaXRlMyBidmZzLmRiIFwiLmR1bXBcIiA+IGJ2ZnMuZHVtcC5zcWxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhc3luY19zaGVsbDogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgeyAkLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICdleGVjYSdcbiAgICB7IFNoZWxsLCAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnZmcydcbiAgICB7IEFzeW5jX2pldHN0cmVhbSxcbiAgICAgIEpldHN0cmVhbSxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgeyBsZXRzLFxuICAgICAgZnJlZXplLCAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9sZXRzZnJlZXpldGhhdCdcbiAgICBjcmVhdGVfZ2xvYl9tYXRjaGVyICAgICAgICAgICA9IHJlcXVpcmUgJ3BpY29tYXRjaCdcbiAgICB7IHJlZ2V4LCAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJ3JlZ2V4J1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkZWNvZGVfb2N0YWwgPSAoIHRleHQgKSAtPiB0ZXh0LnJlcGxhY2UgLyg/PCFcXFxcKVxcXFwoWzAtN117M30pL2d2LCAoICQwLCAkMSApIC0+XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQgcGFyc2VJbnQgJDEsIDhcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgYXdhaXQgJCh7dmVyYm9zZTogJ2Z1bGwnfSlcImNhdCBwYWNrYWdlLmpzb25cIlxuICAgIGF3YWl0ICQoe3ZlcmJvc2U6ICdmdWxsJ30pXCJjYXQgLmdpdGlnbm9yZVwiXG4gICAgUiA9IGF3YWl0ICQoIHsgbGluZXM6IHRydWUsIHZlcmJvc2U6ICdmdWxsJywgfSApXCJjYXQgLmdpdGlnbm9yZVwiLnBpcGVcInNvcnRcIlxuICAgIGRlYnVnICfOqWJiYnRfXzYxJywgUi5zdGRvdXRcbiAgICBSID0gYXdhaXQgXFxcbiAgICAgICQoICAgICAgeyBsaW5lczogdHJ1ZSwgdmVyYm9zZTogJ2Z1bGwnLCB9IClcImNhdCAuZ2l0aWdub3JlXCIgXFxcbiAgICAgIC5waXBlKCAgeyBsaW5lczogdHJ1ZSwgdmVyYm9zZTogJ2Z1bGwnLCB9IClcInNvcnRcIlxuICAgIGRlYnVnICfOqWJiYnRfXzYyJywgKCBycHIgUi5zdGRvdXQgKVsgLi4gMTA4IF0gKyAnLi4uJ1xuICAgIFIgPSBhd2FpdCAkKCB7IGxpbmVzOiB0cnVlLCB2ZXJib3NlOiAnZnVsbCcsIH0gKVwiY2F0IC5naXRpZ25vcmVcIi5waXBlXCJzb3J0XCIucGlwZVwiaGVhZCAtbjJcIlxuICAgIGRlYnVnICfOqWJiYnRfXzYzJywgKCBycHIgUi5zdGRvdXQgKVsgLi4gMTA4IF0gKyAnLi4uJ1xuICAgIFIgPSBhd2FpdCAkKCB7IGxpbmVzOiB0cnVlLCB2ZXJib3NlOiAnZnVsbCcsIH0gKVwibW91bnRcIlxuICAgIGRlYnVnICfOqWJiYnRfXzY0JywgKCBycHIgUi5zdGRvdXQgKVsgLi4gMTA4IF0gKyAnLi4uJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgYXdhaXQgZG8gPT5cbiAgICAgICMgZmFsbGJhY2sgID0gU3ltYm9sICdmYWxsYmFjaydcbiAgICAgICMjIyBUQUlOVCB0aGUgb3V0cHV0IG9mIGBtb3VudGAgaXMgbm90IGVzY2FwZWQgYW5kIG5vdCBxdW90ZWQsIHNvIHRoZXJlJ3MgbG90cyBvZiBvcHBvcnR1bml0aWVzXG4gICAgICBmb3IgcGF0aHMgYW5kIGRldmljZSBuYW1lcyB3aXRoIHNwYWNlcyBvciBwYXJlbnMgdG8gY2F1c2UgdGhlIG1hdGNoIHRvIGZhaWw7IGNvbnNpZGVyIHRvIHVzZVxuICAgICAgYGNhdCAvZXRjL210YWJgIGluc3RlYWQgd2hpY2ggdXNlcyBvY3RhbCBlc2NhcGVzIGZvciBmaWxlbmFtZXMgd2l0aCBzcGFjZXMuICMjI1xuICAgICAgcGF0dGVybiAgID0gLy8vXG4gICAgICAgIF5cbiAgICAgICAgICAgICAgICAgICAgICAgICg/PGRldmljZT4gICBbXlxceDIwXSsgKVxuICAgICAgICBcXHgyMCBvbiAgIFxceDIwICAoPzxwYXRoPiAgICAgLis/ICAgICAgKVxuICAgICAgICBcXHgyMCB0eXBlIFxceDIwICAoPzx0eXBlPiAgICAgW15cXHgyMF0rIClcbiAgICAgICAgXFx4MjAgXFwoICAgICAgICAgKD88b3B0aW9ucz4gIFteXFx4MjBdKyApIFxcKVxuICAgICAgICAkIC8vL3ZcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2hfbW91bnRfamV0ID0gbmV3IEpldHN0cmVhbSB7IGVtcHR5X2NhbGw6IG51bGwsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2hfbW91bnRfamV0LnB1c2ggKCBOTiApIC0+XG4gICAgICAgICMgeyBzdGRvdXQsIH0gPSBhd2FpdCAkKCB7IGxpbmVzOiB0cnVlLCB2ZXJib3NlOiAnbm9uZScsIH0gKVwibW91bnRcIlxuICAgICAgICB5aWVsZCBmcm9tIEdVWS5mcy53YWxrX2xpbmVzICcvZXRjL210YWInXG4gICAgICAgICMgICBkZWJ1ZyAnzqliYmJ0X182NScsXG4gICAgICAgICMgICAgbGluZS5zcGxpdCAnXFx4MjAnXG4gICAgICAgICMgZm9yIGxpbmUgaW4gc3Rkb3V0XG4gICAgICAgICMgICB5aWVsZCBsaW5lXG4gICAgICAgIDtudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNoX21vdW50X2pldC5wdXNoICggbGluZSApIC0+XG4gICAgICAgIHJldHVybiBudWxsIGlmIGxpbmUgaXMgJydcbiAgICAgICAgWyBkZXZpY2VcbiAgICAgICAgICBwYXRoXG4gICAgICAgICAgdHlwZVxuICAgICAgICAgIG9wdGlvbnMgXSA9IGxpbmUuc3BsaXQgJ1xceDIwJ1xuICAgICAgICBpZiBbIGRldmljZSwgcGF0aCwgdHlwZSwgb3B0aW9ucywgXS5zb21lICggZSApIC0+ICggbm90IGU/ICkgb3IgKCBlIGlzICcnIClcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqWJ2ZnNfXzY2IHVuYWJsZSB0byBwYXJzZSBsaW5lICN7cnByIGxpbmV9XCJcbiAgICAgICAgeWllbGQgZnJlZXplIHsgZGV2aWNlLCBwYXRoLCB0eXBlLCBvcHRpb25zLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNoX21vdW50X2pldC5wdXNoICggZCApIC0+XG4gICAgICAgIHlpZWxkIGxldHMgZCwgKCBkICkgLT5cbiAgICAgICAgICBkLm9wdGlvbnMgPSBkLm9wdGlvbnMuc3BsaXQgJywnXG4gICAgICAgICAgZC5wYXRoICAgID0gZGVjb2RlX29jdGFsIGQucGF0aFxuICAgICAgICA7bnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjcmVhdGVfcmVnZXhfbWF0Y2hlciA9ICggcGF0dGVybiApIC0+XG4gICAgICAgIHJldHVybiAoIC0+IHRydWUgKSB1bmxlc3MgcGF0dGVybj9cbiAgICAgICAgc3dpdGNoIHR5cGUgPSB0eXBlX29mIHBhdHRlcm5cbiAgICAgICAgICB3aGVuICdyZWdleCdcbiAgICAgICAgICAgIHJlID0gcGF0dGVyblxuICAgICAgICAgIHdoZW4gJ3RleHQnXG4gICAgICAgICAgICByZSA9IHJlZ2V4XCIje3BhdHRlcm59XCJcbiAgICAgICAgICBlbHNlIHRocm93IG5ldyBFcnJvciBcIs6pYnZmc19fMzggZXhwZWN0ZWQgYSByZWdleCBvciBhIHRleHQsIGdvdCBhICN7dHlwZX1cIlxuICAgICAgICByZXR1cm4gKCB4ICkgLT4gcmUubGFzdEluZGV4ID0gMDsgcmUudGVzdCB4XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHdhbGtfc2hfbW91bnRfbWF0Y2hlcyA9ICh7IGRldmljZSA9IG51bGwsIHBhdGggPSBudWxsLCBnbG9iID0gbnVsbCwgdHlwZSA9IG51bGwsIH09e30pIC0+XG4gICAgICAgIGlmIGdsb2I/XG4gICAgICAgICAgaWYgcGF0aD9cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pYnZmc19fNjcgZXhwZWN0ZWQgZWl0aGVyIGdsb2Igb3IgcGF0aCwgZ290IGJvdGhcIlxuICAgICAgICAgIG1hdGNoX2dsb2IgID0gY3JlYXRlX2dsb2JfbWF0Y2hlciBnbG9iXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtYXRjaF9nbG9iICA9IC0+IHRydWVcbiAgICAgICAgbWF0Y2hfZGV2aWNlICA9IGNyZWF0ZV9yZWdleF9tYXRjaGVyIGRldmljZVxuICAgICAgICBtYXRjaF9wYXRoICAgID0gY3JlYXRlX3JlZ2V4X21hdGNoZXIgcGF0aFxuICAgICAgICBtYXRjaF90eXBlICAgID0gY3JlYXRlX3JlZ2V4X21hdGNoZXIgdHlwZVxuICAgICAgICAjIyMgVEFJTlQgYWxsb3cgcmVnZXhlcyAjIyNcbiAgICAgICAgZm9yIGQgZnJvbSBzaF9tb3VudF9qZXQud2FsaygpXG4gICAgICAgICAgY29udGludWUgdW5sZXNzIG1hdGNoX2RldmljZSAgZC5kZXZpY2VcbiAgICAgICAgICBjb250aW51ZSB1bmxlc3MgbWF0Y2hfZ2xvYiAgICBkLnBhdGhcbiAgICAgICAgICBjb250aW51ZSB1bmxlc3MgbWF0Y2hfcGF0aCAgICBkLnBhdGhcbiAgICAgICAgICBjb250aW51ZSB1bmxlc3MgbWF0Y2hfdHlwZSAgICBkLnR5cGVcbiAgICAgICAgICB5aWVsZCBkXG4gICAgICAgIDtudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGhhc19tb3VudCA9ICggUC4uLiApIC0+XG4gICAgICAgIG1vdW50cyA9IFsgKCB3YWxrX3NoX21vdW50X21hdGNoZXMgUC4uLiApLi4uLCBdXG4gICAgICAgIHJldHVybiBzd2l0Y2ggY291bnQgPSBtb3VudHMubGVuZ3RoXG4gICAgICAgICAgd2hlbiAwIHRoZW4gZmFsc2VcbiAgICAgICAgICB3aGVuIDEgdGhlbiB0cnVlXG4gICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pYnZmc19fNjggZXhwZWN0ZWQgemVybyBvciBvbmUgcmVzdWx0cywgZ290ICN7Y291bnR9XCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBmb3IgYXdhaXQgZCBmcm9tIHdhbGtfc2hfbW91bnRfbWF0Y2hlcyB7IGRldmljZTogJ3NxbGl0ZWZzJywgfVxuICAgICAgIyBmb3IgYXdhaXQgZCBmcm9tIHdhbGtfc2hfbW91bnRfbWF0Y2hlcygpXG4gICAgICAjICAgdXJnZSAnzqliYmJ0X182OScsIGRcbiAgICAgIHJlc3VsdCA9IFsgKCBkIGZvciBhd2FpdCBkIGZyb20gd2Fsa19zaF9tb3VudF9tYXRjaGVzIHsgZGV2aWNlOiAndG1wZnMnLCB9ICkuLi4sIF1cbiAgICAgIEBlcSAoIM6pYnZmc19fNzAgPSAtPiByZXN1bHQubGVuZ3RoID4gMSApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGVycm9yID0gbnVsbFxuICAgICAgdHJ5IGF3YWl0IGhhc19tb3VudCB7IGRldmljZTogJ3RtcGZzJywgfSBjYXRjaCBlcnJvclxuICAgICAgICBAZXEgKCDOqWJ2ZnNfXzcxID0gLT4gL2V4cGVjdGVkIHplcm8gb3Igb25lIHJlc3VsdHMsIGdvdCBcXGQrLy50ZXN0IGVycm9yLm1lc3NhZ2UgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlidmZzX183MiA9IC0+IGVycm9yIGlzIG51bGwgKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqliYmJ0X183MyA9IC0+IGhhc19tb3VudCB7IHBhdGg6ICcvZGV2L3NobScsICAgICAgIH0gKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYmJ0X183NCA9IC0+IGhhc19tb3VudCB7IHBhdGg6IC9eXFwvZGV2XFwvc2htJC92LCAgfSApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiYnRfXzc1ID0gLT4gaGFzX21vdW50IHsgZ2xvYjogJy8qL3NobScsICAgICAgICAgfSApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJiYnRfXzc2ID0gLT4gaGFzX21vdW50IHsgcGF0aDogJy9uby9zdWNoL3BhdGgnLCAgfSApLCBmYWxzZVxuICAgICAgIyMjXG4gICAgICBpbiAvZXRjL210YWI6XG4gICAgICAoMSkgL2hvbWUvZmxvdy9qenIvYnZmcy9tb3VcXDEzNG50IGluc3RlYWQgb2YgL2hvbWUvZmxvdy9qenIvYnZmcy9tb3VcXDAxMnRcbiAgICAgICgyKSAvaG9tZS9mbG93L2p6ci9idmZzL21vdVxcMTM0dHQgaW5zdGVhZCBvZiAvaG9tZS9mbG93L2p6ci9idmZzL21vdVxcMDExdFxuICAgICAgKDMpIC9ob21lL2Zsb3cvanpyL2J2ZnMvbW91XFwxMzR4MDF0IGluc3RlYWQgb2YgL2hvbWUvZmxvdy9qenIvYnZmcy9tb3VcXDAwMXRcbiAgICAgICg0KSAvaG9tZS9mbG93L2p6ci9idmZzL21vdVxcMTM0eDdmdCBpbnN0ZWFkIG9mIC9ob21lL2Zsb3cvanpyL2J2ZnMvbW91XFwxNzd0XG4gICAgICAoNSkgL2hvbWUvZmxvdy9qenIvYnZmcy9tb3VcXDEzNHUyMDI5dCBsaXRlcmFsbHkgJy9ob21lL2Zsb3cvanpyL2J2ZnMvbW91XFx1MjAyOXQnIHdpdGggdGhlIGJhY2tzbGFzaCBlc2NhcGVkXG4gICAgICB3aGVyZSAnXFwxMzQnIGlzIDB4NWMgYFxcXFxgIChiYWNrc2xhc2gpXG5cbiAgICAgIGBtb3VudGAgY29tbWFuZCBvdXRwdXQ6XG4gICAgICAoNCkgL2hvbWUvZmxvdy9qenIvYnZmcy9tb3VcXHg3ZnRcbiAgICAgICg1KSAvaG9tZS9mbG93L2p6ci9idmZzL21vdVxcdTIwMjl0XG5cbiAgICAgIGBtb3VudGAgJ2hlbHBmdWxseScgcmVzb2x2ZXMgdGhlIHRvcC1sZXZlbCBlc2NhcGluZyAoaS5lLiB0aGUgb2N0YWwgZXNjYXBlcykgYnV0IGxlYXZlcyB0aGUgc3ltYm9saWNcbiAgICAgIGBcXG5gLCBgXFx0YCwgYFxceC4uYCwgYFxcdS4uLi5gIGluIHBsYWNlOyB1bmZvcnR1bmF0ZWx5LCB0aGlzIHJlc3VsdHMgaW4gZmlsZW5hbWVzIHdoZXJlIHRoZSBtb3N0XG4gICAgICBub3RvcmlvdXMgb2ZmZW5kZXLigJRBU0NJSSBzcGFjZeKAlGlzIGxlZnQgdW5lc2NhcGVkLCB3aXRoIG5vIHF1b3RlcyBhcm91bmQgdGhlIHBhdGggYW5kIG5vIHdheSB0byBzYWZlbHlcbiAgICAgIHJlY29uc3RydWN0IHRoZSBwYXRoIGV4Y2VwdCBtYXRjaGluZyBvbiBob3cgaXQgcHJvYmFibHkgZW5kcyAod2l0aCBhIGB0eXBlIC4uLmAgYW5kIGEgcGFyZW50aGVzaXplZFxuICAgICAgbGlzdCBvZiBvcHRpb25zIHRoYXQgaG9wZWZ1bGx5IGRvbid0IHVzZSBhbnkgc3BlY2lhbCBjaGFyYWN0ZXJzKS5cblxuICAgICAgIyMjXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBhY2Nlc3NfZnNfd2l0aF9kYjogQHRhc2tzLmFjY2Vzc19mc193aXRoX2RiLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBzY3JpcHRzX1lZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWTogQHRhc2tzLnNjcmlwdHNfWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZLCB9XG4gIGF3YWl0ICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS5hc3luY190ZXN0IHsgYXN5bmNfc2hlbGw6IEB0YXNrcy5hc3luY19zaGVsbCwgfVxuXG4iXX0=
