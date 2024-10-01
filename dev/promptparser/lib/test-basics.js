(async function() {
  'use strict';
  var FS, GTNG, GUY, H, PATH, Test, WGUY, alert, debug, echo, get_journal_walker_cfg, help, info, inspect, isa, log, plain, praise, prepare_task, promptparser_tasks, reverse, rpr, simplify_tokens, type_of, urge, warn, whisper;

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

  // #===========================================================================================================
  // cfg = do ->
  //   db_folder_path            = PATH.resolve  __dirname,                '/dev/shm'
  //   db_file_path              = PATH.join     db_folder_path,           'prompts-and-generations.bd6ef2fc-3d7c-4e3e-9e41-76712e65cede.sqlite'
  //   assets_folder_path        = PATH.resolve  __dirname,                '../../../assets'
  //   promptparser_folder_path  = PATH.join     assets_folder_path,       'promptparser'
  //   short_prompts_file_path   = PATH.join     promptparser_folder_path, 'short-prompts.md'
  //   { assets_folder_path, promptparser_folder_path, short_prompts_file_path, db_folder_path, db_file_path, }

  //===========================================================================================================
  /* TAINT consider to make test preparation a feature of `guy-test` */
  prepare_task = function(cfg = null) {
    if (cfg == null) {
      cfg = get_journal_walker_cfg();
    }
    whisper(GUY.trm.plum("Ω___1 prepare_task / try to remove DB file:", H.try_to_remove_file(cfg.flags.db)));
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  get_journal_walker_cfg = function() {
    var cmd, flags;
    cmd = 'build';
    flags = {
      match: /(?:)/,
      trash_db: true,
      // sample:     0.05,
      // sample:     0.1,
      sample: 1,
      // max_count:  20,
      max_count: 2e308,
      prompts: '../../jzr/to-be-merged-from-Atlas/prompts-consolidated.md',
      images: '../../Downloads/b-from-downloader',
      seed: 1,
      pre_match: /^\[.*?\].*?\S+/,
      db: '/dev/shm/promptparser.sqlite'
    };
    return {cmd, flags};
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
  simplify_tokens = function(tokens) {
    var d;
    return ((function() {
      var results;
      results = [];
      for (d of tokens) {
        results.push(`${d.$key}:${d.value}`);
      }
      return results;
    })()).join(',');
  };

  //===========================================================================================================
  promptparser_tasks = {
    // #---------------------------------------------------------------------------------------------------------
    // fundamentals:

    // #-------------------------------------------------------------------------------------------------------
    // can_find_source_locations_and_files: ->
    //   prepare_task()
    //   @eq ( assets_folder       = -> H.folder_exists  cfg.assets_folder_path        ), true
    //   @eq ( promptparser_folder = -> H.folder_exists  cfg.promptparser_folder_path  ), true
    //   @eq ( prompts_file        = -> H.file_exists    cfg.short_prompts_file_path   ), true
    //   @eq ( db_folder           = -> H.folder_exists  cfg.db_folder_path            ), true
    //   return null

    // #-------------------------------------------------------------------------------------------------------
    // cannot_use_wrong_path: ->
    //   # prepare_task()
    //   { _Journal_walker_for_testing } = require '../../../apps/promptparser/lib/_used-for-testing'
    //   use_wrong_paths = ->
    //     cfg               = get_journal_walker_cfg()
    //     cfg.flags.db      = '/non-existing/path/db'
    //     cfg.flags.prompts = '/non-existing/path/prompts'
    //     jw                = new _Journal_walker_for_testing cfg
    //     return null
    //   @throws ( Ω___2 = -> use_wrong_paths() ), /Cannot open database because the directory does not exist/
    //   return null

    // #-------------------------------------------------------------------------------------------------------
    // can_omit_prompt_file_path: ->
    //   prepare_task()
    //   { Prompt_file_reader } = require '../../../apps/promptparser'
    //   db = new Prompt_file_reader cfg.db_file_path, null
    //   @eq ( Ω___3 = -> db instanceof Prompt_file_reader ), true
    //   @eq ( Ω___4 = -> isa.object db.cfg                ), true
    //   @eq ( Ω___5 = -> db.cfg.db_path                   ), cfg.db_file_path
    //   @eq ( Ω___6 = -> db.cfg.datasource_path           ), null
    //   @eq ( Ω___7 = -> db.cfg.has_db_path               ), true
    //   @eq ( Ω___8 = -> db.cfg.has_datasource_path       ), false
    //   return null

    //---------------------------------------------------------------------------------------------------------
    lexing_and_parsing_nxn_expressions: {
      //-------------------------------------------------------------------------------------------------------
      recognize_multiplication: function() {
        var _Journal_walker_for_testing, jw;
        prepare_task();
        //.....................................................................................................
        ({_Journal_walker_for_testing} = require('../../../apps/promptparser/lib/_used-for-testing'));
        jw = new _Journal_walker_for_testing(get_journal_walker_cfg());
        (() => {          // debug 'Ω___9', jw.prompt_parser._lexer.registry.marks.lexemes.marksright.pattern
          // debug 'Ω__10', jw.prompt_parser._lexer.registry.marks.lexemes.promptnr.pattern
          // debug 'Ω__11', jw.prompt_parser._lexer.registry.marks.lexemes.multiplication.pattern
          // return
          //.....................................................................................................
          var d, probe, ref, results, Ω__12;
          probe = '[s12w4 w]';
          this.eq((Ω__12 = function() {
            return simplify_tokens(jw.parse_all_tokens(probe));
          }), 'marks:marksleft:[,marks:format:s,marks:generation:1,marks:generation:2,marks:format:w,marks:generation:4,marks:ws: ,marks:comment:w,marks:marksright:]');
          urge('Ω__13', '>>>', rpr(simplify_tokens(jw.parse_all_tokens(probe))));
          urge('Ω__14', GUY.trm.reverse(rpr(probe)));
          ref = jw.parse_all_tokens(probe);
          results = [];
          for (d of ref) {
            results.push(info('Ω__15', d.$key.padEnd(20), rpr(d.value)));
          }
          return results;
        })();
        (() => {          //.....................................................................................................
          var d, probe, ref, results, Ω__16;
          probe = '[A+ p#1234 comment]';
          this.eq((Ω__16 = function() {
            return simplify_tokens(jw.parse_all_tokens(probe));
          }), 'marks:marksleft:[,marks:grade:A+,marks:ws: ,marks:promptnr:p#1234,marks:ws: ,marks:comment:comment,marks:marksright:]');
          urge('Ω__17', '>>>', rpr(simplify_tokens(jw.parse_all_tokens(probe))));
          urge('Ω__18', GUY.trm.reverse(rpr(probe)));
          ref = jw.parse_all_tokens(probe);
          results = [];
          for (d of ref) {
            results.push(info('Ω__19', d.$key.padEnd(20), rpr(d.value)));
          }
          return results;
        })();
        (() => {          //.....................................................................................................
          var d, probe, ref, results, Ω__20;
          probe = '[A+ p#1234, p#1234 comment]';
          this.eq((Ω__20 = function() {
            return simplify_tokens(jw.parse_all_tokens(probe));
          }), 'marks:marksleft:[,marks:grade:A+,marks:ws: ,marks:promptnr:p#1234,marks:commaws:, ,marks:promptnr:p#1234,marks:ws: ,marks:comment:comment,marks:marksright:]');
          urge('Ω__21', '>>>', rpr(simplify_tokens(jw.parse_all_tokens(probe))));
          urge('Ω__22', GUY.trm.reverse(rpr(probe)));
          ref = jw.parse_all_tokens(probe);
          results = [];
          for (d of ref) {
            results.push(info('Ω__23', d.$key.padEnd(20), rpr(d.value)));
          }
          return results;
        })();
        (() => {          //.....................................................................................................
          var d, probe, ref, results, Ω__24;
          probe = '[A+ p#1234,p#1234 comment]';
          this.eq((Ω__24 = function() {
            return simplify_tokens(jw.parse_all_tokens(probe));
          }), 'marks:marksleft:[,marks:grade:A+,marks:ws: ,marks:promptnr:p#1234,marks:commaws:,,marks:promptnr:p#1234,marks:ws: ,marks:comment:comment,marks:marksright:]');
          urge('Ω__25', '>>>', rpr(simplify_tokens(jw.parse_all_tokens(probe))));
          urge('Ω__26', GUY.trm.reverse(rpr(probe)));
          ref = jw.parse_all_tokens(probe);
          results = [];
          for (d of ref) {
            results.push(info('Ω__27', d.$key.padEnd(20), rpr(d.value)));
          }
          return results;
        })();
        (() => {          //.....................................................................................................
          var d, probe, ref, results, Ω__28;
          probe = '[A+ p#1234 p#1234 comment]';
          this.eq((Ω__28 = function() {
            return simplify_tokens(jw.parse_all_tokens(probe));
          }), 'marks:marksleft:[,marks:grade:A+,marks:ws: ,marks:promptnr:p#1234,marks:ws: ,marks:promptnr:p#1234,marks:ws: ,marks:comment:comment,marks:marksright:]');
          urge('Ω__29', '>>>', rpr(simplify_tokens(jw.parse_all_tokens(probe))));
          urge('Ω__30', GUY.trm.reverse(rpr(probe)));
          ref = jw.parse_all_tokens(probe);
          results = [];
          for (d of ref) {
            results.push(info('Ω__31', d.$key.padEnd(20), rpr(d.value)));
          }
          return results;
        })();
        (() => {          //.....................................................................................................
          var d, probe, ref, results, Ω__32;
          probe = '[1x3]';
          this.eq((Ω__32 = function() {
            return simplify_tokens(jw.parse_all_tokens(probe));
          }), 'marks:marksleft:[,marks:multiplication:1x3,marks:marksright:]');
          urge('Ω__33', '>>>', rpr(simplify_tokens(jw.parse_all_tokens(probe))));
          urge('Ω__34', GUY.trm.reverse(rpr(probe)));
          ref = jw.parse_all_tokens(probe);
          results = [];
          for (d of ref) {
            results.push(info('Ω__35', d.$key.padEnd(20), rpr(d.value)));
          }
          return results;
        })();
        (() => {          //.....................................................................................................
          var d, probe, ref, results, Ω__36;
          probe = '[1x3,]';
          this.eq((Ω__36 = function() {
            return simplify_tokens(jw.parse_all_tokens(probe));
          }), 'marks:marksleft:[,marks:multiplication:1x3,marks:commaws:,,marks:marksright:]');
          urge('Ω__37', '>>>', rpr(simplify_tokens(jw.parse_all_tokens(probe))));
          urge('Ω__38', GUY.trm.reverse(rpr(probe)));
          ref = jw.parse_all_tokens(probe);
          results = [];
          for (d of ref) {
            results.push(info('Ω__39', d.$key.padEnd(20), rpr(d.value)));
          }
          return results;
        })();
        (() => {          //.....................................................................................................
          var d, probe, ref, results, Ω__40;
          probe = '[ 1x3]';
          this.eq((Ω__40 = function() {
            return simplify_tokens(jw.parse_all_tokens(probe));
          }), 'marks:marksleft:[,marks:ws: ,marks:multiplication:1x3,marks:marksright:]');
          urge('Ω__41', '>>>', rpr(simplify_tokens(jw.parse_all_tokens(probe))));
          urge('Ω__42', GUY.trm.reverse(rpr(probe)));
          ref = jw.parse_all_tokens(probe);
          results = [];
          for (d of ref) {
            results.push(info('Ω__43', d.$key.padEnd(20), rpr(d.value)));
          }
          return results;
        })();
        (() => {          //.....................................................................................................
          var d, probe, ref, results, Ω__44;
          probe = '[ 1x3,]';
          this.eq((Ω__44 = function() {
            return simplify_tokens(jw.parse_all_tokens(probe));
          }), 'marks:marksleft:[,marks:ws: ,marks:multiplication:1x3,marks:commaws:,,marks:marksright:]');
          urge('Ω__45', '>>>', rpr(simplify_tokens(jw.parse_all_tokens(probe))));
          urge('Ω__46', GUY.trm.reverse(rpr(probe)));
          ref = jw.parse_all_tokens(probe);
          results = [];
          for (d of ref) {
            results.push(info('Ω__47', d.$key.padEnd(20), rpr(d.value)));
          }
          return results;
        })();
        (() => {          //.....................................................................................................
          var d, probe, ref, results, Ω__48;
          probe = '[ 1x3, ]';
          this.eq((Ω__48 = function() {
            return simplify_tokens(jw.parse_all_tokens(probe));
          }), 'marks:marksleft:[,marks:ws: ,marks:multiplication:1x3,marks:commaws:, ,marks:marksright:]');
          urge('Ω__49', '>>>', rpr(simplify_tokens(jw.parse_all_tokens(probe))));
          urge('Ω__50', GUY.trm.reverse(rpr(probe)));
          ref = jw.parse_all_tokens(probe);
          results = [];
          for (d of ref) {
            results.push(info('Ω__51', d.$key.padEnd(20), rpr(d.value)));
          }
          return results;
        })();
        (() => {          //.....................................................................................................
          var d, probe, ref, results, Ω__52;
          probe = '[ 1x3, what]';
          this.eq((Ω__52 = function() {
            return simplify_tokens(jw.parse_all_tokens(probe));
          }), 'marks:marksleft:[,marks:ws: ,marks:multiplication:1x3,marks:commaws:, ,marks:comment:what,marks:marksright:]');
          urge('Ω__53', '>>>', rpr(simplify_tokens(jw.parse_all_tokens(probe))));
          urge('Ω__54', GUY.trm.reverse(rpr(probe)));
          ref = jw.parse_all_tokens(probe);
          results = [];
          for (d of ref) {
            results.push(info('Ω__55', d.$key.padEnd(20), rpr(d.value)));
          }
          return results;
        })();
        (() => {          //.....................................................................................................
          var d, probe, ref, results, Ω__56;
          probe = '[5x2, 6x4]';
          this.eq((Ω__56 = function() {
            return simplify_tokens(jw.parse_all_tokens(probe));
          }), 'marks:marksleft:[,marks:multiplication:5x2,marks:commaws:, ,marks:multiplication:6x4,marks:marksright:]');
          urge('Ω__57', '>>>', rpr(simplify_tokens(jw.parse_all_tokens(probe))));
          urge('Ω__58', GUY.trm.reverse(rpr(probe)));
          ref = jw.parse_all_tokens(probe);
          results = [];
          for (d of ref) {
            results.push(info('Ω__59', d.$key.padEnd(20), rpr(d.value)));
          }
          return results;
        })();
        (() => {          //.....................................................................................................
          var d, probe, ref, results, Ω__60;
          probe = '[A+ 5x2, 6x4]';
          this.eq((Ω__60 = function() {
            return simplify_tokens(jw.parse_all_tokens(probe));
          }), 'marks:marksleft:[,marks:grade:A+,marks:ws: ,marks:multiplication:5x2,marks:commaws:, ,marks:multiplication:6x4,marks:marksright:]');
          urge('Ω__61', '>>>', rpr(simplify_tokens(jw.parse_all_tokens(probe))));
          urge('Ω__62', GUY.trm.reverse(rpr(probe)));
          ref = jw.parse_all_tokens(probe);
          results = [];
          for (d of ref) {
            results.push(info('Ω__63', d.$key.padEnd(20), rpr(d.value)));
          }
          return results;
        })();
        //.....................................................................................................
        return null;
      }
    },
    //---------------------------------------------------------------------------------------------------------
    single_prompt_parsing: {
      //-------------------------------------------------------------------------------------------------------
      interface: function() {
        var _Journal_walker_for_testing, jw, Ω__64, Ω__65, Ω__66, Ω__67, Ω__68, Ω__69, Ω__70, Ω__71;
        prepare_task();
        //.....................................................................................................
        ({_Journal_walker_for_testing} = require('../../../apps/promptparser/lib/_used-for-testing'));
        jw = new _Journal_walker_for_testing(get_journal_walker_cfg());
        //.....................................................................................................
        this.eq((Ω__64 = function() {
          return jw.types.type_of(jw.parse_first_tokens);
        }), 'function');
        this.eq((Ω__65 = function() {
          return jw.types.type_of(jw.parse_all_tokens);
        }), 'function');
        this.eq((Ω__66 = function() {
          return jw.types.type_of(jw.parse_first_records);
        }), 'function');
        this.eq((Ω__67 = function() {
          return jw.types.type_of(jw.parse_all_records);
        }), 'function');
        this.eq((Ω__68 = function() {
          return jw.types.type_of(jw.parse_first_tokens('[s432] helo'));
        }), 'list');
        this.eq((Ω__69 = function() {
          return jw.types.type_of(jw.parse_all_tokens('[s432] helo'));
        }), 'list');
        this.eq((Ω__70 = function() {
          return jw.types.type_of(jw.parse_first_records('[s432] helo'));
        }), 'list');
        this.eq((Ω__71 = function() {
          return jw.types.type_of(jw.parse_all_records('[s432] helo'));
        }), 'list');
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      parse_all_records: function() {
        var _Journal_walker_for_testing, jw, matcher, record, result, Ω__72;
        prepare_task();
        ({_Journal_walker_for_testing} = require('../../../apps/promptparser/lib/_used-for-testing'));
        jw = new _Journal_walker_for_testing(get_journal_walker_cfg());
        //.....................................................................................................
        result = jw.parse_all_records('[s432] helo\n[1] world\n\n');
        matcher = [
          {
            '$key': 'record',
            prompt_id: 'c6efaf27673db4f7',
            table: 'jnl_prompts',
            fields: {
              prompt_id: 'c6efaf27673db4f7',
              lnr: 1,
              comment: null,
              rejected: false
            }
          },
          {
            '$key': 'record',
            prompt_id: 'c6efaf27673db4f7',
            table: 'all_prompts',
            fields: {
              prompt_id: 'c6efaf27673db4f7',
              prompt: 'helo'
            }
          },
          {
            '$key': 'record',
            prompt_id: 'c6efaf27673db4f7',
            table: 'jnl_generations',
            fields: {
              prompt_id: 'c6efaf27673db4f7',
              nr: 1,
              count: 4
            }
          },
          {
            '$key': 'record',
            prompt_id: 'c6efaf27673db4f7',
            table: 'jnl_generations',
            fields: {
              prompt_id: 'c6efaf27673db4f7',
              nr: 2,
              count: 3
            }
          },
          {
            '$key': 'record',
            prompt_id: 'c6efaf27673db4f7',
            table: 'jnl_generations',
            fields: {
              prompt_id: 'c6efaf27673db4f7',
              nr: 3,
              count: 2
            }
          },
          {
            '$key': 'record',
            prompt_id: '7c211433f0207159',
            table: 'jnl_prompts',
            fields: {
              prompt_id: '7c211433f0207159',
              lnr: 2,
              comment: null,
              rejected: false
            }
          },
          {
            '$key': 'record',
            prompt_id: '7c211433f0207159',
            table: 'all_prompts',
            fields: {
              prompt_id: '7c211433f0207159',
              prompt: 'world'
            }
          },
          {
            '$key': 'record',
            prompt_id: '7c211433f0207159',
            table: 'jnl_generations',
            fields: {
              prompt_id: '7c211433f0207159',
              nr: 1,
              count: 1
            }
          },
          {
            '$key': 'record',
            prompt_id: 'da39a3ee5e6b4b0d',
            table: 'jnl_prompts',
            fields: {
              prompt_id: 'da39a3ee5e6b4b0d',
              lnr: 2,
              comment: null,
              rejected: false
            }
          },
          {
            '$key': 'record',
            prompt_id: 'da39a3ee5e6b4b0d',
            table: 'all_prompts',
            fields: {
              prompt_id: 'da39a3ee5e6b4b0d',
              prompt: ''
            }
          },
          {
            '$key': 'record',
            prompt_id: 'da39a3ee5e6b4b0d',
            table: 'jnl_prompts',
            fields: {
              prompt_id: 'da39a3ee5e6b4b0d',
              lnr: 2,
              comment: null,
              rejected: false
            }
          }
        ];
        this.eq((Ω__72 = function() {
          return result;
        }), matcher);
        //.....................................................................................................
        whisper('Ω__73', '————————————————————————————————————————');
        for (record of result) {
          whisper('Ω__74', record);
        }
        whisper('Ω__75', '————————————————————————————————————————');
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      parse_first_records: function() {
        var _Journal_walker_for_testing, jw, matcher, record, result, Ω__77;
        prepare_task();
        ({_Journal_walker_for_testing} = require('../../../apps/promptparser/lib/_used-for-testing'));
        jw = new _Journal_walker_for_testing(get_journal_walker_cfg());
        //.....................................................................................................
        result = jw.parse_first_records('[s432] helo\n[1] world\n\n');
        urge('Ω__76', result);
        matcher = [
          {
            '$key': 'record',
            prompt_id: 'c6efaf27673db4f7',
            table: 'jnl_prompts',
            fields: {
              prompt_id: 'c6efaf27673db4f7',
              lnr: 1,
              comment: null,
              rejected: false
            }
          },
          {
            '$key': 'record',
            prompt_id: 'c6efaf27673db4f7',
            table: 'all_prompts',
            fields: {
              prompt_id: 'c6efaf27673db4f7',
              prompt: 'helo'
            }
          },
          {
            '$key': 'record',
            prompt_id: 'c6efaf27673db4f7',
            table: 'jnl_generations',
            fields: {
              prompt_id: 'c6efaf27673db4f7',
              nr: 1,
              count: 4
            }
          },
          {
            '$key': 'record',
            prompt_id: 'c6efaf27673db4f7',
            table: 'jnl_generations',
            fields: {
              prompt_id: 'c6efaf27673db4f7',
              nr: 2,
              count: 3
            }
          },
          {
            '$key': 'record',
            prompt_id: 'c6efaf27673db4f7',
            table: 'jnl_generations',
            fields: {
              prompt_id: 'c6efaf27673db4f7',
              nr: 3,
              count: 2
            }
          }
        ];
        this.eq((Ω__77 = function() {
          return result;
        }), matcher);
        //.....................................................................................................
        whisper('Ω__78', '————————————————————————————————————————');
        for (record of result) {
          whisper('Ω__79', record);
        }
        whisper('Ω__80', '————————————————————————————————————————');
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      parse_all_tokens: function() {
        var _Journal_walker_for_testing, jw, matcher, result, token, Ω__81;
        prepare_task();
        ({_Journal_walker_for_testing} = require('../../../apps/promptparser/lib/_used-for-testing'));
        jw = new _Journal_walker_for_testing(get_journal_walker_cfg());
        //.....................................................................................................
        result = jw.parse_all_tokens('\n[s432] helo\n[1] world\n\n');
        matcher = [
          {
            '$key': 'marks:marksleft',
            jump: 'marks',
            value: '[',
            lnr1: 2,
            x1: 0,
            lnr2: 2,
            x2: 1,
            data: null,
            source: '[s432] helo'
          },
          {
            '$key': 'marks:format',
            jump: null,
            value: 's',
            lnr1: 2,
            x1: 1,
            lnr2: 2,
            x2: 2,
            data: null,
            source: '[s432] helo'
          },
          {
            '$key': 'marks:generation',
            jump: null,
            value: '4',
            lnr1: 2,
            x1: 2,
            lnr2: 2,
            x2: 3,
            data: null,
            source: '[s432] helo'
          },
          {
            '$key': 'marks:generation',
            jump: null,
            value: '3',
            lnr1: 2,
            x1: 3,
            lnr2: 2,
            x2: 4,
            data: null,
            source: '[s432] helo'
          },
          {
            '$key': 'marks:generation',
            jump: null,
            value: '2',
            lnr1: 2,
            x1: 4,
            lnr2: 2,
            x2: 5,
            data: null,
            source: '[s432] helo'
          },
          {
            '$key': 'marks:marksright',
            jump: 'plain',
            value: ']',
            lnr1: 2,
            x1: 5,
            lnr2: 2,
            x2: 6,
            data: null,
            source: '[s432] helo'
          },
          {
            '$key': 'plain:prompt',
            jump: null,
            value: ' helo',
            lnr1: 2,
            x1: 6,
            lnr2: 2,
            x2: 11,
            data: null,
            source: '[s432] helo'
          },
          {
            '$key': 'marks:marksleft',
            jump: 'marks',
            value: '[',
            lnr1: 3,
            x1: 0,
            lnr2: 3,
            x2: 1,
            data: null,
            source: '[1] world'
          },
          {
            '$key': 'marks:generation',
            jump: null,
            value: '1',
            lnr1: 3,
            x1: 1,
            lnr2: 3,
            x2: 2,
            data: null,
            source: '[1] world'
          },
          {
            '$key': 'marks:marksright',
            jump: 'plain',
            value: ']',
            lnr1: 3,
            x1: 2,
            lnr2: 3,
            x2: 3,
            data: null,
            source: '[1] world'
          },
          {
            '$key': 'plain:prompt',
            jump: null,
            value: ' world',
            lnr1: 3,
            x1: 3,
            lnr2: 3,
            x2: 9,
            data: null,
            source: '[1] world'
          }
        ];
        this.eq((Ω__81 = function() {
          return result;
        }), matcher);
        //.....................................................................................................
        whisper('Ω__82', '————————————————————————————————————————');
        for (token of result) {
          whisper('Ω__83', token);
        }
        whisper('Ω__84', '————————————————————————————————————————');
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      parse_first_tokens: function() {
        var _Journal_walker_for_testing, jw, result, token, Ω__86, Ω__87, Ω__88, Ω__89, Ω__90, Ω__91, Ω__92;
        prepare_task();
        ({_Journal_walker_for_testing} = require('../../../apps/promptparser/lib/_used-for-testing'));
        jw = new _Journal_walker_for_testing(get_journal_walker_cfg());
        //.....................................................................................................
        result = jw.parse_first_tokens('\n[s432] helo\n[1] world\n\n');
        urge('Ω__85', result);
        this.eq((Ω__86 = function() {
          return result[0];
        }), {
          '$key': 'marks:marksleft',
          jump: 'marks',
          value: '[',
          lnr1: 2,
          x1: 0,
          lnr2: 2,
          x2: 1,
          data: null,
          source: '[s432] helo'
        });
        this.eq((Ω__87 = function() {
          return result[1];
        }), {
          '$key': 'marks:format',
          jump: null,
          value: 's',
          lnr1: 2,
          x1: 1,
          lnr2: 2,
          x2: 2,
          data: null,
          source: '[s432] helo'
        });
        this.eq((Ω__88 = function() {
          return result[2];
        }), {
          '$key': 'marks:generation',
          jump: null,
          value: '4',
          lnr1: 2,
          x1: 2,
          lnr2: 2,
          x2: 3,
          data: null,
          source: '[s432] helo'
        });
        this.eq((Ω__89 = function() {
          return result[3];
        }), {
          '$key': 'marks:generation',
          jump: null,
          value: '3',
          lnr1: 2,
          x1: 3,
          lnr2: 2,
          x2: 4,
          data: null,
          source: '[s432] helo'
        });
        this.eq((Ω__90 = function() {
          return result[4];
        }), {
          '$key': 'marks:generation',
          jump: null,
          value: '2',
          lnr1: 2,
          x1: 4,
          lnr2: 2,
          x2: 5,
          data: null,
          source: '[s432] helo'
        });
        this.eq((Ω__91 = function() {
          return result[5];
        }), {
          '$key': 'marks:marksright',
          jump: 'plain',
          value: ']',
          lnr1: 2,
          x1: 5,
          lnr2: 2,
          x2: 6,
          data: null,
          source: '[s432] helo'
        });
        this.eq((Ω__92 = function() {
          return result[6];
        }), {
          '$key': 'plain:prompt',
          jump: null,
          value: ' helo',
          lnr1: 2,
          x1: 6,
          lnr2: 2,
          x2: 11,
          data: null,
          source: '[s432] helo'
        });
        //.....................................................................................................
        whisper('Ω__93', '————————————————————————————————————————');
        for (token of result) {
          whisper('Ω__94', token);
        }
        whisper('Ω__95', '————————————————————————————————————————');
        //.....................................................................................................
        return null;
      }
    }
  };

  // #---------------------------------------------------------------------------------------------------------
  // single_prompt_insertion:

  //   #-------------------------------------------------------------------------------------------------------
  //   interface: ->
  //     prepare_task()
  //     { _Journal_walker_for_testing } = require '../../../apps/promptparser/lib/_used-for-testing'
  //     jw = new _Journal_walker_for_testing get_journal_walker_cfg()
  //     @eq ( Ω__96 = -> jw.types.type_of jw.insert                             ), 'function'
  //     # @eq ( Ω__97 = -> db.types.type_of db.insert_first_records                ), 'function'
  //     # @eq ( Ω__98 = -> db.types.type_of db.insert_all_records                  ), 'function'
  //     # @eq ( Ω__99 = -> db.types.type_of db.insert_first_records  '[s432] helo' ), 'list'
  //     # @eq ( Ω_100 = -> db.types.type_of db.insert_all_records    '[s432] helo' ), 'list'
  //     return null

  //   #-------------------------------------------------------------------------------------------------------
  //   insert_one_by_one: ->
  //     prepare_task()
  //     { _Journal_walker_for_testing } = require '../../../apps/promptparser/lib/_used-for-testing'
  //     jw = new _Journal_walker_for_testing get_journal_walker_cfg()
  //     #.....................................................................................................
  //     records = jw.parse_all_records '[s432] helo\n[1] world\n\n'
  //     for record in records
  //       @eq ( Ω_101 = -> jw.insert record ), 1
  //     return null

  //   #-------------------------------------------------------------------------------------------------------
  //   insert_many: ->
  //     prepare_task()
  //     { _Journal_walker_for_testing } = require '../../../apps/promptparser/lib/_used-for-testing'
  //     jw = new _Journal_walker_for_testing get_journal_walker_cfg()
  //     #.....................................................................................................
  //     records = jw.parse_all_records '[s432] helo\n[1] world\n\n'
  //     @eq ( Ω_102 = -> jw.insert records ), 8
  //     return null

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
      // t.test { promptparser_tasks, }
      return t.test({
        lexing_and_parsing_nxn_expressions: promptparser_tasks.lexing_and_parsing_nxn_expressions
      });
    })();
  }

  // t.test { t: promptparser_tasks.single_prompt_parsing.parse_all_records, }

}).call(this);

//# sourceMappingURL=test-basics.js.map