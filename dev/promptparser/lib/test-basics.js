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
    single_prompt_parsing: {
      //-------------------------------------------------------------------------------------------------------
      interface: function() {
        var Prompt_file_reader, db, Ω__10, Ω__11, Ω__12, Ω__13, Ω__14, Ω__15, Ω__16, Ω__17;
        prepare_task();
        ({Prompt_file_reader} = require('../../../apps/promptparser'));
        db = new Prompt_file_reader(cfg.db_file_path, cfg.short_prompts_file_path);
        this.eq((Ω__10 = function() {
          return db.types.type_of(db.parse_first_tokens);
        }), 'function');
        this.eq((Ω__11 = function() {
          return db.types.type_of(db.parse_all_tokens);
        }), 'function');
        this.eq((Ω__12 = function() {
          return db.types.type_of(db.parse_first_records);
        }), 'function');
        this.eq((Ω__13 = function() {
          return db.types.type_of(db.parse_all_records);
        }), 'function');
        this.eq((Ω__14 = function() {
          return db.types.type_of(db.parse_first_tokens('[s432] helo'));
        }), 'list');
        this.eq((Ω__15 = function() {
          return db.types.type_of(db.parse_all_tokens('[s432] helo'));
        }), 'list');
        this.eq((Ω__16 = function() {
          return db.types.type_of(db.parse_first_records('[s432] helo'));
        }), 'list');
        this.eq((Ω__17 = function() {
          return db.types.type_of(db.parse_all_records('[s432] helo'));
        }), 'list');
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      parse_all_records: function() {
        var Prompt_file_reader, db, matcher, result, Ω__18;
        prepare_task();
        ({Prompt_file_reader} = require('../../../apps/promptparser'));
        db = new Prompt_file_reader(cfg.db_file_path, cfg.short_prompts_file_path);
        //.....................................................................................................
        result = db.parse_all_records('[s432] helo\n[1] world\n\n');
        matcher = [
          [
            {
              '$key': 'record',
              table: 'prompts',
              fields: {
                id: 'c6efaf27673db4f7',
                lnr: 1,
                prompt: 'helo',
                comment: null,
                rejected: false
              }
            },
            {
              '$key': 'record',
              table: 'generations',
              fields: {
                prompt_id: 'c6efaf27673db4f7',
                nr: 1,
                count: 4
              }
            },
            {
              '$key': 'record',
              table: 'generations',
              fields: {
                prompt_id: 'c6efaf27673db4f7',
                nr: 2,
                count: 3
              }
            },
            {
              '$key': 'record',
              table: 'generations',
              fields: {
                prompt_id: 'c6efaf27673db4f7',
                nr: 3,
                count: 2
              }
            }
          ],
          [
            {
              '$key': 'record',
              table: 'prompts',
              fields: {
                id: '7c211433f0207159',
                lnr: 2,
                prompt: 'world',
                comment: null,
                rejected: false
              }
            },
            {
              '$key': 'record',
              table: 'generations',
              fields: {
                prompt_id: '7c211433f0207159',
                nr: 1,
                count: 1
              }
            }
          ],
          [
            {
              '$key': 'record',
              table: 'prompts',
              fields: {
                id: 'da39a3ee5e6b4b0d',
                lnr: 2,
                prompt: '',
                comment: null,
                rejected: false
              }
            }
          ],
          [
            {
              '$key': 'record',
              table: 'prompts',
              fields: {
                id: 'da39a3ee5e6b4b0d',
                lnr: 2,
                prompt: '',
                comment: null,
                rejected: false
              }
            }
          ]
        ];
        this.eq((Ω__18 = function() {
          return result;
        }), matcher);
        (() => {          //.....................................................................................................
          var record, records;
          for (records of result) {
            whisper('Ω__19', '————————————————————————————————————————');
            for (record of records) {
              whisper('Ω__20', record);
            }
          }
          return whisper('Ω__21', '————————————————————————————————————————');
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      parse_first_records: function() {
        var Prompt_file_reader, db, matcher, result, Ω__23;
        prepare_task();
        ({Prompt_file_reader} = require('../../../apps/promptparser'));
        db = new Prompt_file_reader(cfg.db_file_path, cfg.short_prompts_file_path);
        //.....................................................................................................
        result = db.parse_first_records('[s432] helo\n[1] world\n\n');
        urge('Ω__22', result);
        matcher = [
          {
            '$key': 'record',
            table: 'prompts',
            fields: {
              id: 'c6efaf27673db4f7',
              lnr: 1,
              prompt: 'helo',
              comment: null,
              rejected: false
            }
          },
          {
            '$key': 'record',
            table: 'generations',
            fields: {
              prompt_id: 'c6efaf27673db4f7',
              nr: 1,
              count: 4
            }
          },
          {
            '$key': 'record',
            table: 'generations',
            fields: {
              prompt_id: 'c6efaf27673db4f7',
              nr: 2,
              count: 3
            }
          },
          {
            '$key': 'record',
            table: 'generations',
            fields: {
              prompt_id: 'c6efaf27673db4f7',
              nr: 3,
              count: 2
            }
          }
        ];
        this.eq((Ω__23 = function() {
          return result;
        }), matcher);
        (() => {          //.....................................................................................................
          var record;
          for (record of result) {
            whisper('Ω__24', record);
          }
          return whisper('Ω__25', '————————————————————————————————————————');
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      parse_all_tokens: function() {
        var Prompt_file_reader, db, matcher, result, Ω__26;
        prepare_task();
        ({Prompt_file_reader} = require('../../../apps/promptparser'));
        db = new Prompt_file_reader(cfg.db_file_path, cfg.short_prompts_file_path);
        //.....................................................................................................
        result = db.parse_all_tokens('[s432] helo\n[1] world\n\n');
        matcher = [
          [
            {
              '$key': 'marks:marksleft',
              jump: 'marks',
              value: '[',
              lnr1: 1,
              x1: 0,
              lnr2: 1,
              x2: 1,
              data: null,
              source: '[s432] helo'
            },
            {
              '$key': 'marks:format',
              jump: null,
              value: 's',
              lnr1: 1,
              x1: 1,
              lnr2: 1,
              x2: 2,
              data: null,
              source: '[s432] helo'
            },
            {
              '$key': 'marks:generation',
              jump: null,
              value: '4',
              lnr1: 1,
              x1: 2,
              lnr2: 1,
              x2: 3,
              data: null,
              source: '[s432] helo'
            },
            {
              '$key': 'marks:generation',
              jump: null,
              value: '3',
              lnr1: 1,
              x1: 3,
              lnr2: 1,
              x2: 4,
              data: null,
              source: '[s432] helo'
            },
            {
              '$key': 'marks:generation',
              jump: null,
              value: '2',
              lnr1: 1,
              x1: 4,
              lnr2: 1,
              x2: 5,
              data: null,
              source: '[s432] helo'
            },
            {
              '$key': 'marks:marksright',
              jump: 'plain',
              value: ']',
              lnr1: 1,
              x1: 5,
              lnr2: 1,
              x2: 6,
              data: null,
              source: '[s432] helo'
            },
            {
              '$key': 'plain:prompt',
              jump: null,
              value: ' helo',
              lnr1: 1,
              x1: 6,
              lnr2: 1,
              x2: 11,
              data: null,
              source: '[s432] helo'
            }
          ],
          [
            {
              '$key': 'marks:marksleft',
              jump: 'marks',
              value: '[',
              lnr1: 2,
              x1: 0,
              lnr2: 2,
              x2: 1,
              data: null,
              source: '[1] world'
            },
            {
              '$key': 'marks:generation',
              jump: null,
              value: '1',
              lnr1: 2,
              x1: 1,
              lnr2: 2,
              x2: 2,
              data: null,
              source: '[1] world'
            },
            {
              '$key': 'marks:marksright',
              jump: 'plain',
              value: ']',
              lnr1: 2,
              x1: 2,
              lnr2: 2,
              x2: 3,
              data: null,
              source: '[1] world'
            },
            {
              '$key': 'plain:prompt',
              jump: null,
              value: ' world',
              lnr1: 2,
              x1: 3,
              lnr2: 2,
              x2: 9,
              data: null,
              source: '[1] world' 
            }
          ],
          [],
          []
        ];
        this.eq((Ω__26 = function() {
          return result;
        }), matcher);
        (() => {          //.....................................................................................................
          var record, records;
          for (records of result) {
            whisper('Ω__27', '————————————————————————————————————————');
            for (record of records) {
              whisper('Ω__28', record);
            }
          }
          return whisper('Ω__29', '————————————————————————————————————————');
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      parse_first_tokens: function() {
        var Prompt_file_reader, db, matcher, result, Ω__31;
        prepare_task();
        ({Prompt_file_reader} = require('../../../apps/promptparser'));
        db = new Prompt_file_reader(cfg.db_file_path, cfg.short_prompts_file_path);
        //.....................................................................................................
        result = db.parse_first_tokens('[s432] helo\n[1] world\n\n');
        urge('Ω__30', result);
        matcher = [
          {
            '$key': 'marks:marksleft',
            jump: 'marks',
            value: '[',
            lnr1: 1,
            x1: 0,
            lnr2: 1,
            x2: 1,
            data: null,
            source: '[s432] helo'
          },
          {
            '$key': 'marks:format',
            jump: null,
            value: 's',
            lnr1: 1,
            x1: 1,
            lnr2: 1,
            x2: 2,
            data: null,
            source: '[s432] helo'
          },
          {
            '$key': 'marks:generation',
            jump: null,
            value: '4',
            lnr1: 1,
            x1: 2,
            lnr2: 1,
            x2: 3,
            data: null,
            source: '[s432] helo'
          },
          {
            '$key': 'marks:generation',
            jump: null,
            value: '3',
            lnr1: 1,
            x1: 3,
            lnr2: 1,
            x2: 4,
            data: null,
            source: '[s432] helo'
          },
          {
            '$key': 'marks:generation',
            jump: null,
            value: '2',
            lnr1: 1,
            x1: 4,
            lnr2: 1,
            x2: 5,
            data: null,
            source: '[s432] helo'
          },
          {
            '$key': 'marks:marksright',
            jump: 'plain',
            value: ']',
            lnr1: 1,
            x1: 5,
            lnr2: 1,
            x2: 6,
            data: null,
            source: '[s432] helo'
          },
          {
            '$key': 'plain:prompt',
            jump: null,
            value: ' helo',
            lnr1: 1,
            x1: 6,
            lnr2: 1,
            x2: 11,
            data: null,
            source: '[s432] helo'
          }
        ];
        this.eq((Ω__31 = function() {
          return result;
        }), matcher);
        (() => {          //.....................................................................................................
          var record;
          for (record of result) {
            whisper('Ω__32', record);
          }
          return whisper('Ω__33', '————————————————————————————————————————');
        })();
        //.....................................................................................................
        return null;
      }
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var t;
      t = new Test({
        throw_on_error: false
      });
      t = new Test({
        throw_on_error: true
      });
      return t.test({promptparser_tasks});
    })();
  }

}).call(this);

//# sourceMappingURL=test-basics.js.map