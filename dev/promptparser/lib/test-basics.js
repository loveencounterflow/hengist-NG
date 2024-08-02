(async function() {
  'use strict';
  var FS, GTNG, GUY, H, PATH, Test, WGUY, alert, cfg, debug, echo, help, info, inspect, isa, log, plain, praise, prepare_task, promptparser_tasks, reverse, rpr, type_of, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('promptparser/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  WGUY = require('../../../apps/webguy');

  // TMP_types                 = new ( require 'intertype-203.0.0' ).Intertype()
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  PATH = require('node:path');

  FS = require('node:fs');

  // test_mode                 = 'throw_failures'
  // test_mode                 = 'throw_errors'
  // test_mode                 = 'failsafe'
  ({isa, type_of} = require('intertype'));

  //===========================================================================================================
  cfg = (function() {
    var assets_folder_path, db_file_path, db_folder_path, promptparser_folder_path, short_prompts_file_path;
    db_folder_path = PATH.resolve(__dirname, '/dev/shm');
    db_file_path = PATH.join(db_folder_path, 'prompts-and-generations.bd6ef2fc-3d7c-4e3e-9e41-76712e65cede.sqlite');
    assets_folder_path = PATH.resolve(__dirname, '../../../assets');
    promptparser_folder_path = PATH.join(assets_folder_path, 'promptparser');
    short_prompts_file_path = PATH.join(promptparser_folder_path, 'short-prompts.md');
    return {assets_folder_path, promptparser_folder_path, short_prompts_file_path, db_folder_path, db_file_path};
  })();

  //===========================================================================================================
  /* TAINT consider to make test preparation a feature of `guy-test` */
  prepare_task = function() {
    whisper(GUY.trm.plum("Ω___1 prepare_task / try to remove DB file:", H.try_to_remove_file(cfg.db_file_path)));
    return null;
  };

  //===========================================================================================================
  /* TAINT relocate these methods to `guy-test` */
  H = {
    //---------------------------------------------------------------------------------------------------------
    _get_stats: function(path) {
      var R, error;
      try {
        (R = FS.statSync(path));
      } catch (error1) {
        error = error1;
        if (error.code === 'ENOENT') {
          return null;
        }
        throw error;
      }
      return R;
    },
    //---------------------------------------------------------------------------------------------------------
    file_exists: function(path) {
      var stats;
      if ((stats = this._get_stats(path)) == null) {
        return false;
      }
      return stats.isFile();
    },
    //---------------------------------------------------------------------------------------------------------
    folder_exists: function(path) {
      var stats;
      if ((stats = this._get_stats(path)) == null) {
        return false;
      }
      return stats.isDirectory();
    },
    //---------------------------------------------------------------------------------------------------------
    try_to_remove_file: function(path) {
      var error;
      try {
        FS.unlinkSync(path);
      } catch (error1) {
        error = error1;
        if (error.code === 'ENOENT') {
          return 0;
        }
        throw error;
      }
      return 1;
    }
  };

  // #---------------------------------------------------------------------------------------------------------
  // @resolve_path = ( path ) -> PATH.resolve PATH.join __dirname, '../../../', path

  // #---------------------------------------------------------------------------------------------------------
  // @copy_over = ( from_path, to_path ) ->
  //   @try_to_remove_file to_path unless to_path in [ ':memory:', '', ]
  //   await FSP.copyFile from_path, to_path
  //   return null

  //===========================================================================================================
  promptparser_tasks = {
    //---------------------------------------------------------------------------------------------------------
    fundamentals: {
      //-------------------------------------------------------------------------------------------------------
      can_find_source_locations_and_files: function() {
        var assets_folder, db_folder, promptparser_folder, prompts_file;
        prepare_task();
        this.eq((assets_folder = function() {
          return H.folder_exists(cfg.assets_folder_path);
        }), true);
        this.eq((promptparser_folder = function() {
          return H.folder_exists(cfg.promptparser_folder_path);
        }), true);
        this.eq((prompts_file = function() {
          return H.file_exists(cfg.short_prompts_file_path);
        }), true);
        this.eq((db_folder = function() {
          return H.folder_exists(cfg.db_folder_path);
        }), true);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      cannot_use_wrong_path_1: function() {
        var Prompt_file_reader, use_wrong_paths, Ω___2;
        prepare_task();
        ({Prompt_file_reader} = require('../../../apps/promptparser'));
        use_wrong_paths = function() {
          var db;
          db = new Prompt_file_reader('/foo/prompts-and-generations.sqlite', '/bar/short-prompts.md');
          return null;
        };
        this.throws((Ω___2 = function() {
          return use_wrong_paths();
        }), /Cannot open database because the directory does not exist/);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      cannot_use_wrong_path_2: function() {
        var Prompt_file_reader, use_wrong_paths, Ω___3;
        prepare_task();
        ({Prompt_file_reader} = require('../../../apps/promptparser'));
        use_wrong_paths = function() {
          var db;
          db = new Prompt_file_reader('/foo/prompts-and-generations.sqlite', '/bar/short-prompts.md');
          return null;
        };
        this.throws((Ω___3 = function() {
          return use_wrong_paths();
        }), /Cannot open database because the directory does not exist/);
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      can_omit_prompt_file_path: function() {
        var Prompt_file_reader, db, Ω___4, Ω___5, Ω___6, Ω___7, Ω___8, Ω___9;
        prepare_task();
        ({Prompt_file_reader} = require('../../../apps/promptparser'));
        db = new Prompt_file_reader(cfg.db_file_path, null);
        this.eq((Ω___4 = function() {
          return db instanceof Prompt_file_reader;
        }), true);
        this.eq((Ω___5 = function() {
          return isa.object(db.cfg);
        }), true);
        this.eq((Ω___6 = function() {
          return db.cfg.db_path;
        }), cfg.db_file_path);
        this.eq((Ω___7 = function() {
          return db.cfg.datasource_path;
        }), null);
        this.eq((Ω___8 = function() {
          return db.cfg.has_db_path;
        }), true);
        this.eq((Ω___9 = function() {
          return db.cfg.has_datasource_path;
        }), false);
        return null;
      }
    },
    //---------------------------------------------------------------------------------------------------------
    äää: {
      //-------------------------------------------------------------------------------------------------------
      ööö: function() {
        var Prompt_file_reader, db;
        prepare_task();
        ({Prompt_file_reader} = require('../../../apps/promptparser'));
        db = new Prompt_file_reader(cfg.db_file_path, cfg.short_prompts_file_path);
        debug('Ω__10', type_of(db));
        debug('Ω__11', db.cfg);
        return null;
      }
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var t;
      t = new Test({
        throw_on_error: true
      });
      t = new Test({
        throw_on_error: false
      });
      return t.test({promptparser_tasks});
    })();
  }

}).call(this);

//# sourceMappingURL=test-basics.js.map