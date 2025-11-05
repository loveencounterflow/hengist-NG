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
          debug('Ωlfp___5', f`${nprm}:>10c; ${oprm}:>10c; ${xprm}:>10c; ${bprm}:>20c; ${sprm}:>10c; `);
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
      debug('Ωbbbt___1', (function() {
        var results;
        results = [];
        for (k in UP) {
          results.push(k);
        }
        return results;
      })());
      debug('Ωbbbt___2', UP.convert.object((FS.statSync('/etc/passwd')).mode));
      debug('Ωbbbt___3', f`${UP.convert.number('a-w')}:>#03o;`);
      debug('Ωbbbt___4', f`${UP.convert.number('a+w')}:>#03o;`);
      debug('Ωbbbt___5', f`${UP.convert.number('u+w')}:>#03o;`);
      debug('Ωbbbt___6', f`${UP.convert.number('u+r')}:>#03o;`);
      debug('Ωbbbt___7', f`${UP.convert.number('u-w,g-w,o-w')}:>#03o;`);
      debug('Ωbbbt___8', f`${UP.convert.number('u+w,g+w,o+w')}:>#03o;`);
      debug('Ωbbbt___9', f`  ${UP.convert.symbolic('u+w,g+w,o+w')}:>20c;`);
      help('Ωbbbt__10', f`  ${UP.convert.symbolic(0o775)}:>20c;`);
      help('Ωbbbt__11', f`  ${UP.convert.symbolic(0o664)}:>20c;`);
      help('Ωbbbt__12', f`  ${UP.convert.symbolic(0o555)}:>20c;`);
      help('Ωbbbt__13', f`  ${UP.convert.symbolic(0o444)}:>20c;`);
      help('Ωbbbt__14');
      help('Ωbbbt__15', f`  ${UP.convert.symbolic(0o000775)}:>20c;`);
      help('Ωbbbt__16', f`  ${UP.convert.symbolic(0o040555)}:>20c;`);
      help('Ωbbbt__17', f`  ${UP.convert.symbolic(0o100444)}:>20c;`);
      help('Ωbbbt__18');
      help('Ωbbbt__19', f`  ${UP.convert.symbolic(0o000775 & 0xfe00 | 0x01fd)}:>20c;`);
      /* 0o775 drwxrwxr-x folder open */      help('Ωbbbt__20', f`  ${UP.convert.symbolic(0o040555 & 0xfe00 | 0x01fd)}:>20c;`);
      /* 0o775 drwxrwxr-x folder open */      help('Ωbbbt__21', f`  ${UP.convert.symbolic(0o100444 & 0xfe00 | 0x01b4)}:>20c;`);
      /* 0o664 .rw-rw-r-- file open */      help('Ωbbbt__22');
      help('Ωbbbt__23', f`  ${UP.convert.symbolic(0o000775 & 0xfe00 | 0x016d)}:>20c;`);
      /* 0o555 dr-xr-xr-x folder closed */      help('Ωbbbt__24', f`  ${UP.convert.symbolic(0o040555 & 0xfe00 | 0x016d)}:>20c;`);
      /* 0o555 dr-xr-xr-x folder closed */      help('Ωbbbt__25', f`  ${UP.convert.symbolic(0o100444 & 0xfe00 | 0x0124)}:>20c;`);
// @eq ( Ωbbbt__26 = -> false ), false
/* 0o444 .r--r--r-- file closed */      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    access_fs_with_db: function() {
      var Dbric, PATH, SFMODULES, SQL, Sqlitefs_db, d, db, db_path, execaSync, full_path, i, internals, j, l, len, len1, len2, line, mount_path, path, paths, ref, ref1, ref_path, shell, shell_cfg, type_of;
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
      ref_path = PATH.resolve(__dirname, '../../../apps/bricabrac-filemirror');
      db_path = PATH.join(ref_path, 'bricabracfs.sqlite');
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
      debug('Ωlfp___1', db.statements);
      paths = [];
      for (d of db.walk_fs_objects()) {
        full_path = PATH.join(mount_path, d.path);
        paths.push(full_path);
        urge('Ωlfp___2', d.mode_o, d.path); // { d..., full_path, }
      }
//.......................................................................................................
      for (i = 0, len = paths.length; i < len; i++) {
        path = paths[i];
        ref = shell('ls', '-AlF', path);
        // 'mount/origin/https'
        for (j = 0, len1 = ref.length; j < len1; j++) {
          line = ref[j];
          info('Ωlfp___4', rpr(line));
        }
      }
      ref1 = shell('show-layout', mount_path);
      for (l = 0, len2 = ref1.length; l < len2; l++) {
        line = ref1[l];
        echo(line);
      }
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
      return (new Test(guytest_cfg)).test({
        access_fs_with_db: this.tasks.access_fs_with_db
      });
    })();
  }

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtbGludXgtZmlsZS1wZXJtaXNzaW9ucy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTs7RUFFQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLGlDQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFaQTs7O0VBa0JBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBcEJBOzs7OztFQTJCQSxJQUFDLENBQUEsS0FBRCxHQUlFLENBQUE7O0lBQUEsTUFBQSxFQUFRLFFBQUEsQ0FBQSxDQUFBO0FBQ1YsVUFBQSxlQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsbUJBQUEsRUFBQTtNQUFJLFNBQUEsR0FBOEIsT0FBQSxDQUFRLG1DQUFSO01BQzlCLENBQUEsQ0FBRSxP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QUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7YUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCO1FBQUUsaUJBQUEsRUFBbUIsSUFBQyxDQUFBLEtBQUssQ0FBQztNQUE1QixDQUE5QjtJQUhnQyxDQUFBLElBQWxDOzs7RUFuSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1zZm1vZHVsZXMvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0YXNrcyA9XG5cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJhc2ljczogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBKZXRzdHJlYW0sXG4gICAgICBBc3luY19qZXRzdHJlYW0sXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogICA1MDksIHNwcm06ICdkcnd4cnd4ci14JywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06IDE2ODMyLCBzcHJtOiAnZHJ3eC0tLS0tLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAgIDQ0OCwgc3BybTogJ2Ryd3gtLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogMTY3MDQsIHNwcm06ICdkci14LS0tLS0tJywgfVxuICAgICAgeyB0eXBlOiAnZm9sZGVyJywgIG5wcm06ICAgNTA5LCBzcHJtOiAnZHJ3eHJ3eHIteCcsIH1cbiAgICAgIHsgdHlwZTogJ2ZvbGRlcicsICBucHJtOiAgIDUwOSwgc3BybTogJ2Ryd3hyd3hyLXgnLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMyMDQsIHNwcm06ICcucnctcnctci0tJywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMTUyLCBzcHJtOiAnLnJ3LS0tLS0tLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzIwNCwgc3BybTogJ2Ryd3gtLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmb2xkZXInLCAgbnBybTogICA0NDgsIHNwcm06ICcucnctcnctci0tJywgfVxuICAgICAgeyB0eXBlOiAnZmlsZScsICAgIG5wcm06IDMzMjA0LCBzcHJtOiAnLnJ3LXJ3LXItLScsIH1cbiAgICAgIHsgdHlwZTogJ2ZpbGUnLCAgICBucHJtOiAzMzE1Miwgc3BybTogJy5ydy0tLS0tLS0nLCB9XG4gICAgICB7IHR5cGU6ICdmaWxlJywgICAgbnBybTogMzMxNTIsIHNwcm06ICcucnctLS0tLS0tJywgfVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZvciB7IHR5cGUsIG5wcm0sIHNwcm0sIH0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICBvcHJtID0gJzBvJyArICggbnBybS50b1N0cmluZyAgOCApLnBhZFN0YXJ0ICA4LCAnMCdcbiAgICAgICAgeHBybSA9ICcweCcgKyAoIG5wcm0udG9TdHJpbmcgMTYgKS5wYWRTdGFydCAgOCwgJzAnXG4gICAgICAgIGJwcm0gPSAnX18nICsgKCBucHJtLnRvU3RyaW5nICAyICkucGFkU3RhcnQgMTYsICcwJ1xuICAgICAgICBkZWJ1ZyAnzqlsZnBfX181JywgZlwiI3tucHJtfTo+MTBjOyAje29wcm19Oj4xMGM7ICN7eHBybX06PjEwYzsgI3ticHJtfTo+MjBjOyAje3Nwcm19Oj4xMGM7IFwiXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZpbGVfcGVybWlzc2lvbnNfbG9naWM6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICBVUCAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAndW5peC1wZXJtaXNzaW9ucydcbiAgICBGUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICBkZWJ1ZyAnzqliYmJ0X19fMScsICggayBmb3IgayBvZiBVUCApXG4gICAgZGVidWcgJ86pYmJidF9fXzInLCBVUC5jb252ZXJ0Lm9iamVjdCAoIEZTLnN0YXRTeW5jICcvZXRjL3Bhc3N3ZCcgKS5tb2RlXG4gICAgZGVidWcgJ86pYmJidF9fXzMnLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICdhLXcnfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJiYnRfX180JywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAnYSt3J306PiMwM287XCJcbiAgICBkZWJ1ZyAnzqliYmJ0X19fNScsIGZcIiN7VVAuY29udmVydC5udW1iZXIgJ3Urdyd9Oj4jMDNvO1wiXG4gICAgZGVidWcgJ86pYmJidF9fXzYnLCBmXCIje1VQLmNvbnZlcnQubnVtYmVyICd1K3InfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJiYnRfX183JywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAndS13LGctdyxvLXcnfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJiYnRfX184JywgZlwiI3tVUC5jb252ZXJ0Lm51bWJlciAndSt3LGcrdyxvK3cnfTo+IzAzbztcIlxuICAgIGRlYnVnICfOqWJiYnRfX185JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgJ3UrdyxnK3csbyt3J306PjIwYztcIlxuICAgIGhlbHAgJ86pYmJidF9fMTAnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzc3NX06PjIwYztcIlxuICAgIGhlbHAgJ86pYmJidF9fMTEnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzY2NH06PjIwYztcIlxuICAgIGhlbHAgJ86pYmJidF9fMTInLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzU1NX06PjIwYztcIlxuICAgIGhlbHAgJ86pYmJidF9fMTMnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzQ0NH06PjIwYztcIlxuICAgIGhlbHAgJ86pYmJidF9fMTQnXG4gICAgaGVscCAnzqliYmJ0X18xNScsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDAwNzc1fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xNicsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDQwNTU1fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xNycsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMTAwNDQ0fTo+MjBjO1wiXG4gICAgaGVscCAnzqliYmJ0X18xOCdcbiAgICBoZWxwICfOqWJiYnRfXzE5JywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wMDA3NzUgJiAweGZlMDAgfCAweDAxZmQgfTo+MjBjO1wiICMjIyAwbzc3NSBkcnd4cnd4ci14IGZvbGRlciBvcGVuICMjI1xuICAgIGhlbHAgJ86pYmJidF9fMjAnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzA0MDU1NSAmIDB4ZmUwMCB8IDB4MDFmZCB9Oj4yMGM7XCIgIyMjIDBvNzc1IGRyd3hyd3hyLXggZm9sZGVyIG9wZW4gIyMjXG4gICAgaGVscCAnzqliYmJ0X18yMScsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMTAwNDQ0ICYgMHhmZTAwIHwgMHgwMWI0IH06PjIwYztcIiAjIyMgMG82NjQgLnJ3LXJ3LXItLSBmaWxlIG9wZW4gIyMjXG4gICAgaGVscCAnzqliYmJ0X18yMidcbiAgICBoZWxwICfOqWJiYnRfXzIzJywgZlwiICAje1VQLmNvbnZlcnQuc3ltYm9saWMgMG8wMDA3NzUgJiAweGZlMDAgfCAweDAxNmQgfTo+MjBjO1wiICMjIyAwbzU1NSBkci14ci14ci14IGZvbGRlciBjbG9zZWQgIyMjXG4gICAgaGVscCAnzqliYmJ0X18yNCcsIGZcIiAgI3tVUC5jb252ZXJ0LnN5bWJvbGljIDBvMDQwNTU1ICYgMHhmZTAwIHwgMHgwMTZkIH06PjIwYztcIiAjIyMgMG81NTUgZHIteHIteHIteCBmb2xkZXIgY2xvc2VkICMjI1xuICAgIGhlbHAgJ86pYmJidF9fMjUnLCBmXCIgICN7VVAuY29udmVydC5zeW1ib2xpYyAwbzEwMDQ0NCAmIDB4ZmUwMCB8IDB4MDEyNCB9Oj4yMGM7XCIgIyMjIDBvNDQ0IC5yLS1yLS1yLS0gZmlsZSBjbG9zZWQgIyMjXG4gICAgIyBAZXEgKCDOqWJiYnRfXzI2ID0gLT4gZmFsc2UgKSwgZmFsc2VcbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWNjZXNzX2ZzX3dpdGhfZGI6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgIHsgZXhlY2FTeW5jLCAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnZXhlY2EnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBTcWxpdGVmc19kYiBleHRlbmRzIERicmljXG4gICAgICAjIEBidWlsZDogW1xuICAgICAgIyAgIFNRTFwiXCJcIlxuICAgICAgIyAgICAgY3JlYXRlIHRhYmxlIG5vbmNvbmZvcm1fb25lICggYSB0ZXh0IHByaW1hcnkga2V5ICk7XCJcIlwiXG4gICAgICAjICAgU1FMXCJcIlwiXG4gICAgICAjICAgICAtLSB0aGlzIGNvbW1lbnQgc2hvdWxkbid0IGJlIGhlcmVcbiAgICAgICMgICAgIGNyZWF0ZSB2aWV3IG5vbmNvbmZvcm1fdHdvIGFzIHNlbGVjdCAqIGZyb20gbm9uY29uZm9ybV9vbmU7XCJcIlwiXG4gICAgICAjICAgXVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBAc3RhdGVtZW50czpcbiAgICAgICAgZ2V0X2ZzX29iamVjdHM6IFNRTFwiXCJcIlxuICAgICAgICAgIHNlbGVjdCAqIGZyb20gYmJfbGlzdDtcIlwiXCJcbiAgICAgIHdhbGtfZnNfb2JqZWN0czogLT4geWllbGQgZnJvbSBAc3RhdGVtZW50cy5nZXRfZnNfb2JqZWN0cy5pdGVyYXRlKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJlZl9wYXRoICAgID0gUEFUSC5yZXNvbHZlIF9fZGlybmFtZSwgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLWZpbGVtaXJyb3InXG4gICAgZGJfcGF0aCAgICAgPSBQQVRILmpvaW4gcmVmX3BhdGgsICdicmljYWJyYWNmcy5zcWxpdGUnXG4gICAgbW91bnRfcGF0aCAgPSBQQVRILmpvaW4gcmVmX3BhdGgsICdtb3VudCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNoZWxsX2NmZyAgID0geyBjd2Q6IHJlZl9wYXRoLCBsaW5lczogdHJ1ZSwgfVxuICAgIHNoZWxsICAgICAgID0gKCBjbWQsIFAuLi4gKSAtPiAoIGV4ZWNhU3luYyBjbWQsIFAsIHNoZWxsX2NmZyApLnN0ZG91dFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGIgICAgICAgICAgPSBTcWxpdGVmc19kYi5vcGVuIGRiX3BhdGhcbiAgICBkZWJ1ZyAnzqlsZnBfX18xJywgZGIuc3RhdGVtZW50c1xuICAgIHBhdGhzICAgICAgID0gW11cbiAgICBmb3IgZCBmcm9tIGRiLndhbGtfZnNfb2JqZWN0cygpXG4gICAgICBmdWxsX3BhdGggPSBQQVRILmpvaW4gbW91bnRfcGF0aCwgZC5wYXRoXG4gICAgICBwYXRocy5wdXNoIGZ1bGxfcGF0aFxuICAgICAgdXJnZSAnzqlsZnBfX18yJywgZC5tb2RlX28sIGQucGF0aCAjIHsgZC4uLiwgZnVsbF9wYXRoLCB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgcGF0aCBpbiBwYXRoc1xuICAgICAgZm9yIGxpbmUgaW4gc2hlbGwgJ2xzJywgJy1BbEYnLCBwYXRoICMgJ21vdW50L29yaWdpbi9odHRwcydcbiAgICAgICAgaW5mbyAnzqlsZnBfX180JywgcnByIGxpbmVcbiAgICBmb3IgbGluZSBpbiBzaGVsbCAnc2hvdy1sYXlvdXQnLCBtb3VudF9wYXRoXG4gICAgICBlY2hvIGxpbmVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGFjY2Vzc19mc193aXRoX2RiOiBAdGFza3MuYWNjZXNzX2ZzX3dpdGhfZGIsIH1cblxuIyMjXG7ilIIgICAgICAyMSDilIIgICAgICAgICAxIOKUgiBmb2xkZXIg4pSCICAgNTA5IOKUgiBkcnd4cnd4ci14IOKUgiA/cndzcndzci10ICAgIOKUgiAuVHJhc2gtMTAwMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvLlRyYXNoLTEwMDBcbuKUgiAgICAgIDI5IOKUgiAgICAgICAgMjEg4pSCIGZvbGRlciDilIIgMTY4MzIg4pSCIGRyd3gtLS0tLS0g4pSCIGRyd3MtLS0tLVQgICAg4pSCIGV4cHVuZ2VkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC8uVHJhc2gtMTAwMC9leHB1bmdlZFxu4pSCICAgICAgMjQg4pSCICAgICAgICAyMSDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgZmlsZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgLy5UcmFzaC0xMDAwL2ZpbGVzXG7ilIIgICAgICAyMiDilIIgICAgICAgIDIxIOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiBkcnd4LS0tLS0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiBpbmZvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvLlRyYXNoLTEwMDAvaW5mb1xu4pSCICAgICAgIDIg4pSCICAgICAgICAgMSDilIIgZm9sZGVyIOKUgiAxNjcwNCDilIIgZHIteC0tLS0tLSDilIIgZHJ3cy0tLS0tVCAgICDilIIgb3JpZ2luICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpblxu4pSCICAgICAgMTcg4pSCICAgICAgICAgMiDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgZmlsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9maWxlXG7ilIIgICAgICAyNiDilIIgICAgICAgIDE3IOKUgiBmb2xkZXIg4pSCICAgNTA5IOKUgiBkcnd4cnd4ci14IOKUgiA/cndzcndzci10ICAgIOKUgiBqenIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2ZpbGUvanpyXG7ilIIgICAgICAyNyDilIIgICAgICAgIDI2IOKUgiBmb2xkZXIg4pSCICAgNTA5IOKUgiBkcnd4cnd4ci14IOKUgiA/cndzcndzci10ICAgIOKUgiBicmljYWJyYWMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2ZpbGUvanpyL2JyaWNhYnJhY1xu4pSCICAgICAgMjgg4pSCICAgICAgICAyNyDilIIgZmlsZSAgIOKUgiAzMzIwNCDilIIgLnJ3LXJ3LXItLSDilIIgLnJ3eHJ3U3ItVCAgICDilIIgUkVBRE1FLm1kICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9maWxlL2p6ci9icmljYWJyYWMvUkVBRE1FLm1kXG7ilIIgICAgICAxOCDilIIgICAgICAgIDE3IOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiBkcnd4LS0tLS0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiBwYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2ZpbGUvcGF0aFxu4pSCICAgICAgMTkg4pSCICAgICAgICAxOCDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgdG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9maWxlL3BhdGgvdG9cbuKUgiAgICAgIDIwIOKUgiAgICAgICAgMTkg4pSCIGZpbGUgICDilIIgMzMxNTIg4pSCIC5ydy0tLS0tLS0g4pSCIC4tdy0tLS0tLVQgICAg4pSCIGluZGV4LmpzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vZmlsZS9wYXRoL3RvL2luZGV4LmpzXG7ilIIgICAgICAxNiDilIIgICAgICAgICAyIOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiBkcnd4LS0tLS0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiBodHRwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2h0dHBcbuKUgiAgICAgICAzIOKUgiAgICAgICAgIDIg4pSCIGZvbGRlciDilIIgICA0NDgg4pSCIGRyd3gtLS0tLS0g4pSCID9yd3MtLS0tLVQgICAg4pSCIGh0dHBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cHNcbuKUgiAgICAgICA3IOKUgiAgICAgICAgIDMg4pSCIGZvbGRlciDilIIgICA0NDgg4pSCIGRyd3gtLS0tLS0g4pSCID9yd3MtLS0tLVQgICAg4pSCIHJhdy5naXRodWJ1c2VyY29udGVudC5jb20gICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cHMvcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbVxu4pSCICAgICAgIDgg4pSCICAgICAgICAgNyDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgbG92ZWVuY291bnRlcmZsb3cgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9odHRwcy9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93XG7ilIIgICAgICAgOSDilIIgICAgICAgICA4IOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiBkcnd4LS0tLS0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiBicmljYWJyYWMtc2Ztb2R1bGVzICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2h0dHBzL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlc1xu4pSCICAgICAgMTAg4pSCICAgICAgICAgOSDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgMjk4MGUyODk4NWZlN2I5Njc3MmE3MjEzYTJjZDlhZTNmMjYzMTc3YSDilIIgL29yaWdpbi9odHRwcy9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93L2JyaWNhYnJhYy1zZm1vZHVsZXMvMjk4MGUyODk4NWZcbuKUgiAgICAgIDI1IOKUgiAgICAgICAgMTAg4pSCIGZpbGUgICDilIIgMzMyMDQg4pSCIGRyd3gtLS0tLS0g4pSCIC5yd3hyd1NyLVQgICAg4pSCIFJFQURNRS5tZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cHMvcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzLzI5ODBlMjg5ODVmXG7ilIIgICAgICAxMSDilIIgICAgICAgIDEwIOKUgiBmb2xkZXIg4pSCICAgNDQ4IOKUgiAucnctcnctci0tIOKUgiA/cndzLS0tLS1UICAgIOKUgiBsaWIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2h0dHBzL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlcy8yOTgwZTI4OTg1Zlxu4pSCICAgICAgMTIg4pSCICAgICAgICAxMSDilIIgZmlsZSAgIOKUgiAzMzIwNCDilIIgLnJ3LXJ3LXItLSDilIIgLnJ3eHJ3U3ItVCAgICDilIIgamV0c3RyZWFtLmJyaWNzLmpzICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9odHRwcy9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93L2JyaWNhYnJhYy1zZm1vZHVsZXMvMjk4MGUyODk4NWZcbuKUgiAgICAgIDEzIOKUgiAgICAgICAgMTAg4pSCIGZvbGRlciDilIIgICA0NDgg4pSCIGRyd3gtLS0tLS0g4pSCID9yd3MtLS0tLVQgICAg4pSCIHNyYyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cHMvcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzLzI5ODBlMjg5ODVmXG7ilIIgICAgICAxNCDilIIgICAgICAgIDEzIOKUgiBmaWxlICAg4pSCIDMzMTUyIOKUgiAucnctLS0tLS0tIOKUgiAuLXctLS0tLS1UICAgIOKUgiBqZXRzdHJlYW0uYnJpY3MuY29mZmVlICAgICAgICAgICAgICAgICAgIOKUgiAvb3JpZ2luL2h0dHBzL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlcy8yOTgwZTI4OTg1Zlxu4pSCICAgICAgIDQg4pSCICAgICAgICAgMyDilIIgZm9sZGVyIOKUgiAgIDQ0OCDilIIgZHJ3eC0tLS0tLSDilIIgP3J3cy0tLS0tVCAgICDilIIgdW5wa2cuY29tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgL29yaWdpbi9odHRwcy91bnBrZy5jb21cbuKUgiAgICAgICA1IOKUgiAgICAgICAgIDQg4pSCIGZvbGRlciDilIIgICA0NDgg4pSCIGRyd3gtLS0tLS0g4pSCID9yd3MtLS0tLVQgICAg4pSCIGFuc2lfdXAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cHMvdW5wa2cuY29tL2Fuc2lfdXBcbuKUgiAgICAgICA2IOKUgiAgICAgICAgIDUg4pSCIGZpbGUgICDilIIgMzMxNTIg4pSCIC5ydy0tLS0tLS0g4pSCIC4tdy0tLS0tLVQgICAg4pSCIGFuc2lfdXAuanMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIC9vcmlnaW4vaHR0cHMvdW5wa2cuY29tL2Fuc2lfdXAvYW5zaV91cC5qc1xuXG5cbmRyd3hyd3hyLXggICAgIC0gZmxvdyAyMDI1LTExLTAxIDIwOjA4IOKUnOKUgOKUgCAuVHJhc2gtMTAwMFxuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMjA6MDgg4pSCICAg4pSc4pSA4pSAIGV4cHVuZ2VkXG5kcnd4LS0tLS0tICAgICAtIGZsb3cgMjAyNS0xMS0wMSAyMDowOCDilIIgICDilJzilIDilIAgZmlsZXNcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDIwOjA4IOKUgiAgIOKUlOKUgOKUgCBpbmZvXG5kci14LS0tLS0tICAgICAtIGZsb3cgMjAyNS0xMS0wMSAxMDowMiDilJTilIDilIAgb3JpZ2luXG5kcnd4LS0tLS0tICAgICAtIGZsb3cgMjAyNS0xMS0wMSAyMDowNyAgICAg4pSc4pSA4pSAIGZpbGVcbmRyd3hyd3hyLXggICAgIC0gZmxvdyAyMDI1LTExLTAxIDIwOjA3ICAgICDilIIgICDilJzilIDilIAganpyXG5kcnd4cnd4ci14ICAgICAtIGZsb3cgMjAyNS0xMS0wMSAyMDowOCAgICAg4pSCICAg4pSCICAg4pSU4pSA4pSAIGJyaWNhYnJhY1xuLnJ3LXJ3LXItLSAxMzA3OSBmbG93IDIwMjUtMTEtMDEgMjE6MTYgICAgIOKUgiAgIOKUgiAgICAgICDilJTilIDilIAgUkVBRE1FLm1kXG5kcnd4LS0tLS0tICAgICAtIGZsb3cgMjAyNS0xMS0wMSAxMDowMiAgICAg4pSCICAg4pSU4pSA4pSAIHBhdGhcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICDilIIgICAgICAg4pSU4pSA4pSAIHRvXG4ucnctLS0tLS0tICAgICAwIGZsb3cgMjAyNS0xMS0wMSAxMDowMiAgICAg4pSCICAgICAgICAgICDilJTilIDilIAgaW5kZXguanNcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICDilJzilIDilIAgaHR0cFxuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgIOKUlOKUgOKUgCBodHRwc1xuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgICAgICDilJzilIDilIAgcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbVxuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgICAgICDilIIgICDilJTilIDilIAgbG92ZWVuY291bnRlcmZsb3dcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICAgICAg4pSCICAgICAgIOKUlOKUgOKUgCBicmljYWJyYWMtc2Ztb2R1bGVzXG5kcnd4LS0tLS0tICAgICAtIGZsb3cgMjAyNS0xMS0wMSAyMDowNiAgICAgICAgIOKUgiAgICAgICAgICAg4pSU4pSA4pSAIDI5ODBlMjg5ODVmZTdiOTY3NzJhNzIxM2EyY2Q5YWUzZjI2MzE3N2FcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICAgICAg4pSCICAgICAgICAgICAgICAg4pSc4pSA4pSAIGxpYlxuLnJ3LXJ3LXItLSA1ODM5MCBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgICAgICDilIIgICAgICAgICAgICAgICDilIIgICDilJTilIDilIAgamV0c3RyZWFtLmJyaWNzLmpzXG4ucnctcnctci0tIDIxNjQzIGZsb3cgMjAyNS0xMS0wMSAyMDowNiAgICAgICAgIOKUgiAgICAgICAgICAgICAgIOKUnOKUgOKUgCBSRUFETUUubWRcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICAgICAg4pSCICAgICAgICAgICAgICAg4pSU4pSA4pSAIHNyY1xuLnJ3LS0tLS0tLSAxNTc3NiBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgICAgICDilIIgICAgICAgICAgICAgICAgICAg4pSU4pSA4pSAIGpldHN0cmVhbS5icmljcy5jb2ZmZWVcbmRyd3gtLS0tLS0gICAgIC0gZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICAgICAg4pSU4pSA4pSAIHVucGtnLmNvbVxuZHJ3eC0tLS0tLSAgICAgLSBmbG93IDIwMjUtMTEtMDEgMTA6MDIgICAgICAgICAgICAg4pSU4pSA4pSAIGFuc2lfdXBcbi5ydy0tLS0tLS0gMjI2NTYgZmxvdyAyMDI1LTExLTAxIDEwOjAyICAgICAgICAgICAgICAgICDilJTilIDilIAgYW5zaV91cC5qc1xuXG5cblxuIyMjIl19
