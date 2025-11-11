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
        } catch (error) {
          e = error;
          warn('Ωbbbt__48', reverse(e.message));
        }
        try {
          help('Ωbbbt__49', sh.call('grep', '-Pi', 'sqlitefsYYYY', '/etc/mtab'));
        } catch (error) {
          e = error;
          warn('Ωbbbt__50', reverse(e.message));
        }
        try {
          help('Ωbbbt__51', sh.call('grep', '-Pi', 'sqlitefsYYYY', '/etc/mtabYYYY'));
        } catch (error) {
          e = error;
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
        } catch (error) {
          e = error;
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
      var $, Dbric, Jetstream, PATH, R, SFMODULES, SQL, Shell, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      PATH = require('node:path');
      ({$} = require('execa'));
      ({Shell} = require('../../../apps/bvfs'));
      ({Jetstream, internals} = SFMODULES.require_jetstream());
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
        var d, pattern, results, sh_mount_jet, walk_sh_mount, walk_sh_mount_match;
        // fallback  = Symbol 'fallback'
        pattern = /^(?<device>[^\x20]+)\x20on\x20(?<path>[^\x20]+)\x20type\x20(?<type>[^\x20]+)\x20\((?<options>[^\x20]+)\)$/v;
        //.....................................................................................................
        sh_mount_jet = new Jetstream(); // { fallback, outlet: '*', }
        // #.....................................................................................................
        // sh_mount_jet.push '*', ( d ) -> help 'Ωbbbt__65', rpr d
        //.....................................................................................................
        sh_mount_jet.push(function*(d) {
          var match;
          if ((match = d.match(pattern)) == null) {
            return null;
          }
          // help 'Ωbbbt__66', match.groups
          return (yield {...match.groups});
        });
        //.....................................................................................................
        sh_mount_jet.push(function(d) {
          return d.options = d.options.split(',');
        });
        //.....................................................................................................
        walk_sh_mount = async function*() {
          var i, len, line, stdout;
          ({stdout} = (await $({
            lines: true,
            verbose: 'none'
          })`mount`));
          for (i = 0, len = stdout.length; i < len; i++) {
            line = stdout[i];
            yield sh_mount_jet.pick_first(line);
          }
/* TAINT use `fallback` to prevent error in case of no results */          return null;
        };
        //.....................................................................................................
        walk_sh_mount_match = async function*({device = null, path = null, type = null} = {}) {
          var d;
/* TAINT allow regexes */
          for await (d of walk_sh_mount()) {
            if ((device != null) && !(device === d.device)) {
              continue;
            }
            if ((path != null) && !(path === d.path)) {
              continue;
            }
            if ((type != null) && !(type === d.type)) {
              continue;
            }
            yield d;
          }
          return null;
        };
        for await (d of walk_sh_mount_match({
          device: 'sqlitefs'
        })) {
          //.....................................................................................................
          // debug 'Ωbbbt__68', d for await d from walk_sh_mount()
          debug('Ωbbbt__68', d);
        }
        results = [];
        for await (d of walk_sh_mount_match({
          device: 'tmpfs'
        })) {
          results.push(debug('Ωbbbt__68', d));
        }
        return results;
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
      // ( new Test guytest_cfg ).test { scripts_YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY: @tasks.scripts_YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY, }
      return (await (new Test(guytest_cfg)).async_test({
        async_shell: this.tasks.async_shell
      }));
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBSUUsQ0FBQTs7SUFBQSxNQUFBLEVBQVEsUUFBQSxDQUFBLENBQUE7QUFDVixVQUFBLGVBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxtQkFBQSxFQUFBO01BQUksU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixT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LEtBQUssQ0FBQztNQUF0QixDQUFwQyxDQUFOO0lBTHNDLENBQUEsSUFBeEM7O0FBMVVBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtc2Ztb2R1bGVzL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGFza3MgPVxuXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBiYXNpY3M6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgSmV0c3RyZWFtLFxuICAgICAgQXN5bmNfamV0c3RyZWFtLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06ICAgNTA5LCBzcHJtOiAnZHJ3eHJ3eHIteCcsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAxNjgzMiwgc3BybTogJ2Ryd3gtLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogICA0NDgsIHNwcm06ICdkcnd4LS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06IDE2NzA0LCBzcHJtOiAnZHIteC0tLS0tLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAgIDUwOSwgc3BybTogJ2Ryd3hyd3hyLXgnLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogICA1MDksIHNwcm06ICdkcnd4cnd4ci14JywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMjA0LCBzcHJtOiAnLnJ3LXJ3LXItLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzE1Miwgc3BybTogJy5ydy0tLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMyMDQsIHNwcm06ICdkcnd4LS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06ICAgNDQ4LCBzcHJtOiAnLnJ3LXJ3LXItLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzIwNCwgc3BybTogJy5ydy1ydy1yLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMxNTIsIHNwcm06ICcucnctLS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMTUyLCBzcHJtOiAnLnJ3LS0tLS0tLScsIH1cbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3IgeyB0eXBlLCBucHJtLCBzcHJtLCB9IGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgb3BybSA9ICcwbycgKyAoIG5wcm0udG9TdHJpbmcgIDggKS5wYWRTdGFydCAgOCwgJzAnXG4gICAgICAgIHhwcm0gPSAnMHgnICsgKCBucHJtLnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgIDgsICcwJ1xuICAgICAgICBicHJtID0gJ19fJyArICggbnBybS50b1N0cmluZyAgMiApLnBhZFN0YXJ0IDE2LCAnMCdcbiAgICAgICAgZGVidWcgJ86pYnZmc19fXzEnLCBmXCIje25wcm19Oj4xMGM7ICN7b3BybX06PjEwYzsgI3t4cHJtfTo+MTBjOyAje2Jwcm19Oj4yMGM7ICN7c3BybX06PjEwYzsgXCJcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZmlsZV9wZXJtaXNzaW9uc19sb2dpYzogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIFVQICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICd1bml4LXBlcm1pc3Npb25zJ1xuICAgIEZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgIGRlYnVnICfOqWJiYnRfX18yJywgKCBrIGZvciBrIG9mIFVQIClcbiAgICBkZWJ1ZyAnzqliYmJ0X19fMycsIFVQLmNvbnZlcnQub2JqZWN0ICggRlMuc3RhdFN5bmMgJy9ldGMvcGFzc3dkJyApLm1vZGVcbiAgICBkZWJ1ZyAnzqliYmJ0X19fNCcsIGZcIiN7VVAuY29udmVydC5udW1iZXIgJ2Etdyd9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYmJidF9fXzUnLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICdhK3cnfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJiYnRfX182JywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAndSt3J306PiMwM287XCJcbiAgICBkZWJ1ZyAnzqliYmJ0X19fNycsIGZcIiN7VVAuY29udmVydC5udW1iZXIgJ3Urcid9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYmJidF9fXzgnLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICd1LXcsZy13LG8tdyd9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYmJidF9fXzknLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICd1K3csZyt3LG8rdyd9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYmJidF9fMTAnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAndSt3LGcrdyxvK3cnfTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xMScsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvNzc1fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xMicsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvNjY0fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xMycsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvNTU1fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xNCcsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvNDQ0fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xNSdcbiAgICBoZWxwICfOqWJiYnRfXzE2JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wMDA3NzV9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJiYnRfXzE3JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wNDA1NTV9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJiYnRfXzE4JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8xMDA0NDR9Oj4yMGM7XCJcbiAgICBoZWxwICfOqWJiYnRfXzE5J1xuICAgIGhlbHAgJ86pYmJidF9fMjAnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzAwMDc3NSAmIDB4ZmUwMCB8IDB4MDFmZCB9Oj4yMGM7XCIgIyMjIDBvNzc1IGRyd3hyd3hyLXggZm9sZGVyIG9wZW4gIyMjXG4gICAgaGVscCAnzqliYmJ0X18yMScsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDQwNTU1ICYgMHhmZTAwIHwgMHgwMWZkIH06PjIwYztcIiAjIyMgMG83NzUgZHJ3eHJ3eHIteCBmb2xkZXIgb3BlbiAjIyNcbiAgICBoZWxwICfOqWJiYnRfXzIyJywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8xMDA0NDQgJiAweGZlMDAgfCAweDAxYjQgfTo+MjBjO1wiICMjIyAwbzY2NCAucnctcnctci0tIGZpbGUgb3BlbiAjIyNcbiAgICBoZWxwICfOqWJiYnRfXzIzJ1xuICAgIGhlbHAgJ86pYmJidF9fMjQnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzAwMDc3NSAmIDB4ZmUwMCB8IDB4MDE2ZCB9Oj4yMGM7XCIgIyMjIDBvNTU1IGRyLXhyLXhyLXggZm9sZGVyIGNsb3NlZCAjIyNcbiAgICBoZWxwICfOqWJiYnRfXzI1JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wNDA1NTUgJiAweGZlMDAgfCAweDAxNmQgfTo+MjBjO1wiICMjIyAwbzU1NSBkci14ci14ci14IGZvbGRlciBjbG9zZWQgIyMjXG4gICAgaGVscCAnzqliYmJ0X18yNicsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMTAwNDQ0ICYgMHhmZTAwIHwgMHgwMTI0IH06PjIwYztcIiAjIyMgMG80NDQgLnItLXItLXItLSBmaWxlIGNsb3NlZCAjIyNcbiAgICAjIEBlcSAoIM6pYmJidF9fMjcgPSAtPiBmYWxzZSApLCBmYWxzZVxuICAgICMjI1xuICAgIGhlbHAgJ86pYnZmc3RvX18yOCcsIFwiZHJ3eHJ3eHIteFwiLCAoIDBvNzc1LnRvU3RyaW5nIDggKSwgKCAnMHgnICsgKCAwbzc3NS50b1N0cmluZyAxNiApLnBhZFN0YXJ0IDQsICcwJyApXG4gICAgaGVscCAnzqlidmZzdG9fXzI5JywgXCIucnctcnctci0tXCIsICggMG82NjQudG9TdHJpbmcgOCApLCAoICcweCcgKyAoIDBvNjY0LnRvU3RyaW5nIDE2ICkucGFkU3RhcnQgNCwgJzAnIClcbiAgICBoZWxwICfOqWJ2ZnN0b19fMzAnLCBcImRyLXhyLXhyLXhcIiwgKCAwbzU1NS50b1N0cmluZyA4ICksICggJzB4JyArICggMG81NTUudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA0LCAnMCcgKVxuICAgIGhlbHAgJ86pYnZmc3RvX18zMScsIFwiLnItLXItLXItLVwiLCAoIDBvNDQ0LnRvU3RyaW5nIDggKSwgKCAnMHgnICsgKCAwbzQ0NC50b1N0cmluZyAxNiApLnBhZFN0YXJ0IDQsICcwJyApXG4gICAgaGVscCAnzqlidmZzdG9fXzMyJywgXCI/Py0/Py0/Py0/XCIsICggMGIxMDFfMTAxXzEwMS50b1N0cmluZyA4ICksICggJzB4JyArICggMGIxMDFfMTAxXzEwMS50b1N0cmluZyAxNiApLnBhZFN0YXJ0IDQsICcwJyApXG4gICAgaGVscCAnzqlidmZzdG9fXzMzJywgXCI/P3c/P3c/Py0/XCIsICggMGIwMTBfMDEwXzAwMC50b1N0cmluZyA4ICksICggJzB4JyArICggMGIwMTBfMDEwXzAwMC50b1N0cmluZyAxNiApLnBhZFN0YXJ0IDQsICcwJyApXG4gICAgIyMjXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFjY2Vzc19mc193aXRoX2RiOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICB7IGV4ZWNhU3luYywgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJ2V4ZWNhJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgU3FsaXRlZnNfZGIgZXh0ZW5kcyBEYnJpY1xuICAgICAgIyBAYnVpbGQ6IFtcbiAgICAgICMgICBTUUxcIlwiXCJcbiAgICAgICMgICAgIGNyZWF0ZSB0YWJsZSBub25jb25mb3JtX29uZSAoIGEgdGV4dCBwcmltYXJ5IGtleSApO1wiXCJcIlxuICAgICAgIyAgIFNRTFwiXCJcIlxuICAgICAgIyAgICAgLS0gdGhpcyBjb21tZW50IHNob3VsZG4ndCBiZSBoZXJlXG4gICAgICAjICAgICBjcmVhdGUgdmlldyBub25jb25mb3JtX3R3byBhcyBzZWxlY3QgKiBmcm9tIG5vbmNvbmZvcm1fb25lO1wiXCJcIlxuICAgICAgIyAgIF1cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgIGdldF9mc19vYmplY3RzOiBTUUxcIlwiXCJcbiAgICAgICAgICBzZWxlY3QgKiBmcm9tIGJiX2xpc3Q7XCJcIlwiXG4gICAgICB3YWxrX2ZzX29iamVjdHM6IC0+IHlpZWxkIGZyb20gQHN0YXRlbWVudHMuZ2V0X2ZzX29iamVjdHMuaXRlcmF0ZSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZWZfcGF0aCAgICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hcHBzL2J2ZnMnXG4gICAgZGJfcGF0aCAgICAgPSBQQVRILmpvaW4gcmVmX3BhdGgsICdidmZzLmRiJ1xuICAgIG1vdW50X3BhdGggID0gUEFUSC5qb2luIHJlZl9wYXRoLCAnbW91bnQnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBzaGVsbF9jZmcgICA9IHsgY3dkOiByZWZfcGF0aCwgbGluZXM6IHRydWUsIH1cbiAgICBzaGVsbCAgICAgICA9ICggY21kLCBQLi4uICkgLT4gKCBleGVjYVN5bmMgY21kLCBQLCBzaGVsbF9jZmcgKS5zdGRvdXRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRiICAgICAgICAgID0gU3FsaXRlZnNfZGIub3BlbiBkYl9wYXRoXG4gICAgZGVidWcgJ86pYnZmc19fMzQnLCBkYi5zdGF0ZW1lbnRzXG4gICAgcGF0aHMgICAgICAgPSBbXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZvciBsaW5lIGluIHNoZWxsICdzaG93LWxheW91dCcsIG1vdW50X3BhdGhcbiAgICAgICAgZWNobyBsaW5lXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIG1vZGUgPSAnY2xvc2UnXG4gICAgIyBtb2RlID0gJ29wZW4nXG4gICAgbW9kZSA9ICdub3RoaW5nJ1xuICAgIHN3aXRjaCBtb2RlXG4gICAgICB3aGVuICdvcGVuJyB0aGVuIGRvID0+XG4gICAgICAgIGRlYnVnICfOqWJ2ZnNfXzM1JywgZGIuZXhlY3V0ZSBTUUxcIlwiXCJcbiAgICAgICAgdXBkYXRlIG1ldGFkYXRhIHNldCBtb2RlID0gcy5vcGVuX21vZGVcbiAgICAgICAgICBmcm9tIG1ldGFkYXRhICAgICAgICAgICBhcyBtXG4gICAgICAgICAgam9pbiBiYl9zdGFuZGFyZF9tb2RlcyAgYXMgcyBvbiAoIG0uaWQgPSBzLmZpbGVfaWQgKTtcIlwiXCJcbiAgICAgICAgO251bGxcbiAgICAgIHdoZW4gJ2Nsb3NlJyB0aGVuIGRvID0+XG4gICAgICAgIGRlYnVnICfOqWJ2ZnNfXzM2JywgZGIuZXhlY3V0ZSBTUUxcIlwiXCJcbiAgICAgICAgdXBkYXRlIG1ldGFkYXRhIHNldCBtb2RlID0gcy5jbG9zZWRfbW9kZVxuICAgICAgICAgIGZyb20gbWV0YWRhdGEgICAgICAgICAgIGFzIG1cbiAgICAgICAgICBqb2luIGJiX3N0YW5kYXJkX21vZGVzICBhcyBzIG9uICggbS5pZCA9IHMuZmlsZV9pZCApO1wiXCJcIlxuICAgICAgICA7bnVsbFxuICAgICAgd2hlbiAnbm90aGluZycgdGhlbiBudWxsXG4gICAgICBlbHNlIHRocm93IG5ldyBFcnJvciBcInVua25vd24gbW9kZTogI3tycHIgbW9kZX1cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIGQgZnJvbSBkYi53YWxrX2ZzX29iamVjdHMoKVxuICAgICAgZnVsbF9wYXRoID0gUEFUSC5qb2luIG1vdW50X3BhdGgsIGQucGF0aFxuICAgICAgcGF0aHMucHVzaCBmdWxsX3BhdGhcbiAgICAgIHVyZ2UgJ86pYnZmc19fMzcnLCBkLm1vZGVfbywgZC5wYXRoICMgeyBkLi4uLCBmdWxsX3BhdGgsIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3IgbGluZSBpbiBzaGVsbCAnc2hvdy1sYXlvdXQnLCBtb3VudF9wYXRoXG4gICAgICAgIGVjaG8gbGluZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNjcmlwdHNfWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICB7IGV4ZWNhU3luYywgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJ2V4ZWNhJ1xuICAgIHsgU2hlbGwsICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9idmZzJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmVmX3BhdGggICAgPSBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4vYXBwcy9idmZzJ1xuICAgIGRiX3BhdGggICAgID0gUEFUSC5qb2luIHJlZl9wYXRoLCAnYnZmcy5kYidcbiAgICBtb3VudF9wYXRoICA9IFBBVEguam9pbiByZWZfcGF0aCwgJ21vdW50J1xuICAgIHNoZWxsX2NmZyAgID0geyBjd2Q6IHJlZl9wYXRoLCBsaW5lczogdHJ1ZSwgb25seV9zdGRvdXQ6IHRydWUsIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIG1hdGNoX2FsbF9mc19tb3VudHMgPSAoIGNmZyApIC0+XG4gICAgICBSICAgICA9IFtdXG4gICAgICBsaW5lcyA9IHNoZWxsIHsgb25seV9zdGRvdXQ6IHRydWUsIH0sICdjYXQnLCAnL2V0Yy9tdGFiJ1xuICAgICAgZm9yIGxpbmUgaW4gbGluZXNcbiAgICAgICAgWyBkZXZpY2UsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB0eXBlLCAgIF0gPSBsaW5lLnNwbGl0IC9cXHgyMC9cbiAgICAgICAgY29udGludWUgaWYgY2ZnLmRldmljZT8gYW5kICggZGV2aWNlIGlzbnQgY2ZnLmRldmljZSApXG4gICAgICAgIHBhdGggICAgICAgID0gZGVjb2RlX29jdGFsIHBhdGhcbiAgICAgICAgY29udGludWUgaWYgY2ZnLnBhdGg/ICAgYW5kICggcGF0aCAgIGlzbnQgY2ZnLnBhdGggICApXG4gICAgICAgIGNvbnRpbnVlIGlmIGNmZy50eXBlPyAgIGFuZCAoIHR5cGUgICBpc250IGNmZy50eXBlICAgKVxuICAgICAgICBSLnB1c2ggeyBkZXZpY2UsIHBhdGgsIHR5cGUsIH1cbiAgICAgIHJldHVybiBSXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBpc19tb3VudGVkID0gKCBjZmcgKSAtPlxuICAgICAgc3dpdGNoICggbW91bnRzID0gbWF0Y2hfYWxsX2ZzX21vdW50cyBjZmcgKS5sZW5ndGhcbiAgICAgICAgd2hlbiAwIHRoZW4gcmV0dXJuIGZhbHNlXG4gICAgICAgIHdoZW4gMSB0aGVuIHJldHVybiB0cnVlXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqWJ2ZnNfXzM4IGV4cGVjdGVkIDAgb3IgMSBtYXRjaCwgZ290ICN7bW91bnRzLmxlbmd0aH06ICN7cnByIG1vdW50c31cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHNoID0gbmV3IFNoZWxsKClcbiAgICAgIEB0aHJvd3MgKCDOqWJ2ZnNfXzM5ID0gLT4gc2guX3ZhbGlkYXRlX2NhbGxfYXJndW1lbnRzIG51bGwgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBwb2Qgb3IgYSB0ZXh0LCBnb3QgYS9cbiAgICAgIEB0aHJvd3MgKCDOqWJ2ZnNfXzQwID0gLT4gc2guX3ZhbGlkYXRlX2NhbGxfYXJndW1lbnRzIFtdICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBwb2Qgb3IgYSB0ZXh0LCBnb3QgYS9cbiAgICAgIEB0aHJvd3MgKCDOqWJ2ZnNfXzQxID0gLT4gc2guX3ZhbGlkYXRlX2NhbGxfYXJndW1lbnRzIHt9ICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0LCBnb3QgYS9cbiAgICAgIEBlcSAgICAgKCDOqWJiYnRfXzQyID0gLT4gc2guX3ZhbGlkYXRlX2NhbGxfYXJndW1lbnRzICdscycgICAgICAgICAgICAgICApLCB7IGNmZzogeyBjd2Q6IHJlZl9wYXRoLCBsaW5lczogdHJ1ZSwgfSwgY21kOiAnbHMnLCBwYXJhbWV0ZXJzOiBbXSB9XG4gICAgICBAZXEgICAgICggzqliYmJ0X180MyA9IC0+IHNoLl92YWxpZGF0ZV9jYWxsX2FyZ3VtZW50cyAnbHMnLCAnLUFsRicgICAgICAgKSwgeyBjZmc6IHsgY3dkOiByZWZfcGF0aCwgbGluZXM6IHRydWUsIH0sIGNtZDogJ2xzJywgcGFyYW1ldGVyczogWyAnLUFsRicsIF0gfVxuICAgICAgQGVxICAgICAoIM6pYmJidF9fNDQgPSAtPiBzaC5fdmFsaWRhdGVfY2FsbF9hcmd1bWVudHMgJ2xzJywgJy1BbEYnLCAnLicgICksIHsgY2ZnOiB7IGN3ZDogcmVmX3BhdGgsIGxpbmVzOiB0cnVlLCB9LCBjbWQ6ICdscycsIHBhcmFtZXRlcnM6IFsgJy1BbEYnLCAnLicsIF0gfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzaCA9IG5ldyBTaGVsbCBzaGVsbF9jZmdcbiAgICAgIGRlYnVnICfOqWJiYnRfXzQ1Jywgc2guY2FsbCAnbHMnXG4gICAgICBkZWJ1ZyAnzqliYmJ0X180NicsIHNoLmNhbGwgJ2dyZXAnLCAnLVBpJywgJ3NxbGl0ZWZzJywgJy9ldGMvbXRhYidcbiAgICAgIHRyeSBoZWxwICfOqWJiYnRfXzQ3Jywgc2guY2FsbCAnZ3JlcCcsICctUGknLCAnc3FsaXRlZnMnLCAnL2V0Yy9tdGFiJyAgICAgICAgIGNhdGNoIGUgdGhlbiB3YXJuICfOqWJiYnRfXzQ4JywgcmV2ZXJzZSBlLm1lc3NhZ2VcbiAgICAgIHRyeSBoZWxwICfOqWJiYnRfXzQ5Jywgc2guY2FsbCAnZ3JlcCcsICctUGknLCAnc3FsaXRlZnNZWVlZJywgJy9ldGMvbXRhYicgICAgIGNhdGNoIGUgdGhlbiB3YXJuICfOqWJiYnRfXzUwJywgcmV2ZXJzZSBlLm1lc3NhZ2VcbiAgICAgIHRyeSBoZWxwICfOqWJiYnRfXzUxJywgc2guY2FsbCAnZ3JlcCcsICctUGknLCAnc3FsaXRlZnNZWVlZJywgJy9ldGMvbXRhYllZWVknIGNhdGNoIGUgdGhlbiB3YXJuICfOqWJiYnRfXzUyJywgcmV2ZXJzZSBlLm1lc3NhZ2VcbiAgICAgIDtudWxsXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHNoID0gbmV3IFNoZWxsIHNoZWxsX2NmZ1xuICAgICAgaW5mbyAnzqliYmJ0X181MycsIG1hdGNoX2FsbF9mc19tb3VudHMgeyBkZXZpY2U6ICdzcWxpdGVmcycsIH1cbiAgICAgIGluZm8gJ86pYmJidF9fNTQnLCBtYXRjaF9hbGxfZnNfbW91bnRzIHsgZGV2aWNlOiAnc3FsaXRlZnMnLCB0eXBlOiAnc3FsZnMnLCB9XG4gICAgICBpbmZvICfOqWJiYnRfXzU1JywgbWF0Y2hfYWxsX2ZzX21vdW50cyB7IGRldmljZTogJ3NxbGl0ZWZzJywgdHlwZTogJ2Z1c2UnLCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHNoID0gbmV3IFNoZWxsIHNoZWxsX2NmZ1xuICAgICAgaW5mbyAnzqliYmJ0X181NicsIGlzX21vdW50ZWQgeyBkZXZpY2U6ICdzcWxpdGVmcycsIH1cbiAgICAgIGluZm8gJ86pYmJidF9fNTcnLCBpc19tb3VudGVkIHsgZGV2aWNlOiAnc3FsaXRlZnMnLCB0eXBlOiAnc3FsZnMnLCB9XG4gICAgICBpbmZvICfOqWJiYnRfXzU4JywgaXNfbW91bnRlZCB7IGRldmljZTogJ3NxbGl0ZWZzJywgdHlwZTogJ2Z1c2UnLCB9XG4gICAgICB0cnkgaW5mbyAnzqliYmJ0X181OScsIGlzX21vdW50ZWQge30gY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYmJidF9fNjAnLCByZXZlcnNlIGUubWVzc2FnZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMjI1xuICAgIE91dHB1dCB3aGVuIG1vdW50IHBvaW50IG5hbWUgaXMgJ20gbyB1IG4gdCc6XG4gICAgICBbICdzcWxpdGVmcyAvaG9tZS9mbG93L2p6ci9idmZzL21cXFxcMDQwb1xcXFwwNDB1XFxcXDA0MG5cXFxcMDQwdCBmdXNlIHJ3LG5vc3VpZCxub2RldixyZWxhdGltZSx1c2VyX2lkPTEwMDAsZ3JvdXBfaWQ9MTAwMCxkZWZhdWx0X3Blcm1pc3Npb25zLGFsbG93X290aGVyIDAgMCcgXVxuICAgIE91dHB1dCB3aGVuIG1vdW50IHBvaW50IG5hbWUgaXMgJ/CrnYAnOlxuICAgICAgWyAnc3FsaXRlZnMgL2hvbWUvZmxvdy9qenIvYnZmcy/wq52AIGZ1c2Ugcncsbm9zdWlkLG5vZGV2LHJlbGF0aW1lLHVzZXJfaWQ9MTAwMCxncm91cF9pZD0xMDAwLGRlZmF1bHRfcGVybWlzc2lvbnMsYWxsb3dfb3RoZXIgMCAwJyBdXG4gICAgIyMjXG4gICAgIyBzcWxpdGVmcyAvaG9tZS9mbG93L2p6ci9idmZzL21vdW50IGZ1c2Ugcncsbm9zdWlkLG5vZGV2LHJlbGF0aW1lLHVzZXJfaWQ9MTAwMCxncm91cF9pZD0xMDAwLGRlZmF1bHRfcGVybWlzc2lvbnMsYWxsb3dfb3RoZXIgMCAwXG4gICAgIyBncmVwOiAvZXRjL210YWJZWVlZOiBObyBzdWNoIGZpbGUgb3IgZGlyZWN0b3J5XG4gICAgIyAgJCQkICAgIC8vLyAyINGFICBidmZzIEAgMS4wLjAgcGtnICBhdCAxMToxNTozNlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyB0cmFzaCBidmZzLmRiICYmIGJpbi9zcWxpdGUtZnMgbW91bnQgLS0gLi9idmZzLmRiICYgZGlzb3duICYmIHNxbGl0ZTMgYnZmcy5kYiBcIi5kdW1wXCIgPiBidmZzLmR1bXAuc3FsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmNfc2hlbGw6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgIHsgJCwgICAgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnZXhlY2EnXG4gICAgeyBTaGVsbCwgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2J2ZnMnXG4gICAgeyBKZXRzdHJlYW0sXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBhd2FpdCAkKHt2ZXJib3NlOiAnZnVsbCd9KVwiY2F0IHBhY2thZ2UuanNvblwiXG4gICAgYXdhaXQgJCh7dmVyYm9zZTogJ2Z1bGwnfSlcImNhdCAuZ2l0aWdub3JlXCJcbiAgICBSID0gYXdhaXQgJCggeyBsaW5lczogdHJ1ZSwgdmVyYm9zZTogJ2Z1bGwnLCB9IClcImNhdCAuZ2l0aWdub3JlXCIucGlwZVwic29ydFwiXG4gICAgZGVidWcgJ86pYmJidF9fNjEnLCBSLnN0ZG91dFxuICAgIFIgPSBhd2FpdCBcXFxuICAgICAgJCggICAgICB7IGxpbmVzOiB0cnVlLCB2ZXJib3NlOiAnZnVsbCcsIH0gKVwiY2F0IC5naXRpZ25vcmVcIiBcXFxuICAgICAgLnBpcGUoICB7IGxpbmVzOiB0cnVlLCB2ZXJib3NlOiAnZnVsbCcsIH0gKVwic29ydFwiXG4gICAgZGVidWcgJ86pYmJidF9fNjInLCAoIHJwciBSLnN0ZG91dCApWyAuLiAxMDggXSArICcuLi4nXG4gICAgUiA9IGF3YWl0ICQoIHsgbGluZXM6IHRydWUsIHZlcmJvc2U6ICdmdWxsJywgfSApXCJjYXQgLmdpdGlnbm9yZVwiLnBpcGVcInNvcnRcIi5waXBlXCJoZWFkIC1uMlwiXG4gICAgZGVidWcgJ86pYmJidF9fNjMnLCAoIHJwciBSLnN0ZG91dCApWyAuLiAxMDggXSArICcuLi4nXG4gICAgUiA9IGF3YWl0ICQoIHsgbGluZXM6IHRydWUsIHZlcmJvc2U6ICdmdWxsJywgfSApXCJtb3VudFwiXG4gICAgZGVidWcgJ86pYmJidF9fNjQnLCAoIHJwciBSLnN0ZG91dCApWyAuLiAxMDggXSArICcuLi4nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBhd2FpdCBkbyA9PlxuICAgICAgIyBmYWxsYmFjayAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgICAgcGF0dGVybiAgID0gLy8vXG4gICAgICAgIF5cbiAgICAgICAgICAgICAgICAgICAgICAgICg/PGRldmljZT4gICBbXlxceDIwXSsgKVxuICAgICAgICBcXHgyMCBvbiAgIFxceDIwICAoPzxwYXRoPiAgICAgW15cXHgyMF0rIClcbiAgICAgICAgXFx4MjAgdHlwZSBcXHgyMCAgKD88dHlwZT4gICAgIFteXFx4MjBdKyApXG4gICAgICAgIFxceDIwIFxcKCAgICAgICAgICg/PG9wdGlvbnM+ICBbXlxceDIwXSsgKSBcXClcbiAgICAgICAgJCAvLy92XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNoX21vdW50X2pldCA9IG5ldyBKZXRzdHJlYW0oKSAjIHsgZmFsbGJhY2ssIG91dGxldDogJyonLCB9XG4gICAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBzaF9tb3VudF9qZXQucHVzaCAnKicsICggZCApIC0+IGhlbHAgJ86pYmJidF9fNjUnLCBycHIgZFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzaF9tb3VudF9qZXQucHVzaCAoIGQgKSAtPlxuICAgICAgICByZXR1cm4gbnVsbCB1bmxlc3MgKCBtYXRjaCA9IGQubWF0Y2ggcGF0dGVybiApP1xuICAgICAgICAjIGhlbHAgJ86pYmJidF9fNjYnLCBtYXRjaC5ncm91cHNcbiAgICAgICAgeWllbGQgeyBtYXRjaC5ncm91cHMuLi4sIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2hfbW91bnRfamV0LnB1c2ggKCBkICkgLT4gZC5vcHRpb25zID0gZC5vcHRpb25zLnNwbGl0ICcsJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICB3YWxrX3NoX21vdW50ID0gLT5cbiAgICAgICAgeyBzdGRvdXQsIH0gPSBhd2FpdCAkKCB7IGxpbmVzOiB0cnVlLCB2ZXJib3NlOiAnbm9uZScsIH0gKVwibW91bnRcIlxuICAgICAgICBmb3IgbGluZSBpbiBzdGRvdXRcbiAgICAgICAgICB5aWVsZCBzaF9tb3VudF9qZXQucGlja19maXJzdCBsaW5lICMjIyBUQUlOVCB1c2UgYGZhbGxiYWNrYCB0byBwcmV2ZW50IGVycm9yIGluIGNhc2Ugb2Ygbm8gcmVzdWx0cyAjIyNcbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgd2Fsa19zaF9tb3VudF9tYXRjaCA9ICh7IGRldmljZSA9IG51bGwsIHBhdGggPSBudWxsLCB0eXBlID0gbnVsbCwgfT17fSkgLT5cbiAgICAgICAgIyMjIFRBSU5UIGFsbG93IHJlZ2V4ZXMgIyMjXG4gICAgICAgIGZvciBhd2FpdCBkIGZyb20gd2Fsa19zaF9tb3VudCgpXG4gICAgICAgICAgY29udGludWUgaWYgKCBkZXZpY2U/ICkgYW5kIG5vdCAoIGRldmljZSBpcyBkLmRldmljZSApXG4gICAgICAgICAgY29udGludWUgaWYgKCBwYXRoPyAgICkgYW5kIG5vdCAoIHBhdGggaXMgZC5wYXRoICAgICApXG4gICAgICAgICAgY29udGludWUgaWYgKCB0eXBlPyAgICkgYW5kIG5vdCAoIHR5cGUgaXMgZC50eXBlICAgICApXG4gICAgICAgICAgeWllbGQgZFxuICAgICAgICA7bnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGRlYnVnICfOqWJiYnRfXzY4JywgZCBmb3IgYXdhaXQgZCBmcm9tIHdhbGtfc2hfbW91bnQoKVxuICAgICAgZGVidWcgJ86pYmJidF9fNjgnLCBkIGZvciBhd2FpdCBkIGZyb20gd2Fsa19zaF9tb3VudF9tYXRjaCB7IGRldmljZTogJ3NxbGl0ZWZzJywgfVxuICAgICAgZGVidWcgJ86pYmJidF9fNjgnLCBkIGZvciBhd2FpdCBkIGZyb20gd2Fsa19zaF9tb3VudF9tYXRjaCB7IGRldmljZTogJ3RtcGZzJywgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBhY2Nlc3NfZnNfd2l0aF9kYjogQHRhc2tzLmFjY2Vzc19mc193aXRoX2RiLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBzY3JpcHRzX1lZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWTogQHRhc2tzLnNjcmlwdHNfWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZLCB9XG4gIGF3YWl0ICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS5hc3luY190ZXN0IHsgYXN5bmNfc2hlbGw6IEB0YXNrcy5hc3luY19zaGVsbCwgfVxuXG4iXX0=
