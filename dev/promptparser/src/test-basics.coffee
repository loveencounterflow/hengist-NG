

'use strict'

#===========================================================================================================
GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'promptparser/test-basics'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
WGUY                      = require '../../../apps/webguy'
# TMP_types                 = new ( require 'intertype-203.0.0' ).Intertype()
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
PATH                      = require 'node:path'
FS                        = require 'node:fs'
# test_mode                 = 'throw_failures'
# test_mode                 = 'throw_errors'
# test_mode                 = 'failsafe'
{ isa
  type_of }               = require 'intertype'


# #===========================================================================================================
# cfg = do ->
#   db_folder_path            = PATH.resolve  __dirname,                '/dev/shm'
#   db_file_path              = PATH.join     db_folder_path,           'prompts-and-generations.bd6ef2fc-3d7c-4e3e-9e41-76712e65cede.sqlite'
#   assets_folder_path        = PATH.resolve  __dirname,                '../../../assets'
#   promptparser_folder_path  = PATH.join     assets_folder_path,       'promptparser'
#   short_prompts_file_path   = PATH.join     promptparser_folder_path, 'short-prompts.md'
#   { assets_folder_path, promptparser_folder_path, short_prompts_file_path, db_folder_path, db_file_path, }


#===========================================================================================================
### TAINT consider to make test preparation a feature of `guy-test` ###
prepare_task = ( cfg = null ) ->
  cfg ?= get_journal_walker_cfg()
  whisper GUY.trm.plum "Ω___1 prepare_task / try to remove DB file:", H.try_to_remove_file cfg.flags.db
  return null

#-----------------------------------------------------------------------------------------------------------
get_journal_walker_cfg = ->
  cmd             = 'build'
  flags           =
    match:      /(?:)/,
    trash_db:   true,
    # sample:     0.05,
    # sample:     0.1,
    sample:     1,
    # max_count:  20,
    max_count:  Infinity,
    prompts:    '../../jzr/to-be-merged-from-Atlas/prompts-consolidated.md'
    images:     '../../Downloads/b-from-downloader'
    seed:       1,
    pre_match:  /^\[.*?\].*?\S+/,
    db:         '/dev/shm/promptparser.sqlite'
  return { cmd, flags, }


#===========================================================================================================
### TAINT relocate these methods to `guy-test` ###
H =

  #---------------------------------------------------------------------------------------------------------
  _get_stats: ( path ) ->
    try ( R = FS.statSync path ) catch error
      return null if error.code is 'ENOENT'
      throw error
    return R

  #---------------------------------------------------------------------------------------------------------
  file_exists: ( path ) ->
    return false unless ( stats = @_get_stats path )?
    return stats.isFile()

  #---------------------------------------------------------------------------------------------------------
  folder_exists: ( path ) ->
    return false unless ( stats = @_get_stats path )?
    return stats.isDirectory()

  #---------------------------------------------------------------------------------------------------------
  try_to_remove_file: ( path ) ->
    try FS.unlinkSync path catch error
      return 0 if error.code is 'ENOENT'
      throw error
    return 1

  # #---------------------------------------------------------------------------------------------------------
  # @resolve_path = ( path ) -> PATH.resolve PATH.join __dirname, '../../../', path

  # #---------------------------------------------------------------------------------------------------------
  # @copy_over = ( from_path, to_path ) ->
  #   @try_to_remove_file to_path unless to_path in [ ':memory:', '', ]
  #   await FSP.copyFile from_path, to_path
  #   return null


#===========================================================================================================
promptparser_tasks =

  # #---------------------------------------------------------------------------------------------------------
  # fundamentals:

    # #-------------------------------------------------------------------------------------------------------
    # can_find_source_locations_and_files: ->
    #   prepare_task()
    #   @eq ( assets_folder       = -> H.folder_exists  cfg.assets_folder_path        ), true
    #   @eq ( promptparser_folder = -> H.folder_exists  cfg.promptparser_folder_path  ), true
    #   @eq ( prompts_file        = -> H.file_exists    cfg.short_prompts_file_path   ), true
    #   @eq ( db_folder           = -> H.folder_exists  cfg.db_folder_path            ), true
    #   return null


    # #-------------------------------------------------------------------------------------------------------
    # cannot_use_wrong_path: ->
    #   # prepare_task()
    #   { _Journal_walker_for_testing } = require '../../../apps/promptparser/lib/_used-for-testing'
    #   use_wrong_paths = ->
    #     cfg               = get_journal_walker_cfg()
    #     cfg.flags.db      = '/non-existing/path/db'
    #     cfg.flags.prompts = '/non-existing/path/prompts'
    #     jw                = new _Journal_walker_for_testing cfg
    #     return null
    #   @throws ( Ω___3 = -> use_wrong_paths() ), /Cannot open database because the directory does not exist/
    #   return null

    # #-------------------------------------------------------------------------------------------------------
    # can_omit_prompt_file_path: ->
    #   prepare_task()
    #   { Prompt_file_reader } = require '../../../apps/promptparser'
    #   db = new Prompt_file_reader cfg.db_file_path, null
    #   @eq ( Ω___4 = -> db instanceof Prompt_file_reader ), true
    #   @eq ( Ω___5 = -> isa.object db.cfg                ), true
    #   @eq ( Ω___6 = -> db.cfg.db_path                   ), cfg.db_file_path
    #   @eq ( Ω___7 = -> db.cfg.datasource_path           ), null
    #   @eq ( Ω___8 = -> db.cfg.has_db_path               ), true
    #   @eq ( Ω___9 = -> db.cfg.has_datasource_path       ), false
    #   return null

  #---------------------------------------------------------------------------------------------------------
  single_prompt_parsing:

    #-------------------------------------------------------------------------------------------------------
    interface: ->
      prepare_task()
      #.....................................................................................................
      { _Journal_walker_for_testing } = require '../../../apps/promptparser/lib/_used-for-testing'
      jw = new _Journal_walker_for_testing get_journal_walker_cfg()
      #.....................................................................................................
      @eq ( Ω__10 = -> jw.types.type_of jw.parse_first_tokens                 ), 'function'
      @eq ( Ω__11 = -> jw.types.type_of jw.parse_all_tokens                   ), 'function'
      @eq ( Ω__12 = -> jw.types.type_of jw.parse_first_records                ), 'function'
      @eq ( Ω__13 = -> jw.types.type_of jw.parse_all_records                  ), 'function'
      @eq ( Ω__14 = -> jw.types.type_of jw.parse_first_tokens   '[s432] helo' ), 'list'
      @eq ( Ω__15 = -> jw.types.type_of jw.parse_all_tokens     '[s432] helo' ), 'list'
      @eq ( Ω__16 = -> jw.types.type_of jw.parse_first_records  '[s432] helo' ), 'list'
      @eq ( Ω__17 = -> jw.types.type_of jw.parse_all_records    '[s432] helo' ), 'list'
      return null

    #-------------------------------------------------------------------------------------------------------
    parse_all_records: ->
      prepare_task()
      { _Journal_walker_for_testing } = require '../../../apps/promptparser/lib/_used-for-testing'
      jw = new _Journal_walker_for_testing get_journal_walker_cfg()
      #.....................................................................................................
      result  = jw.parse_all_records '[s432] helo\n[1] world\n\n'
      matcher = [
        { '$key': 'record', prompt_id: 'c6efaf27673db4f7', table: 'jnl_prompts', fields: { prompt_id: 'c6efaf27673db4f7', lnr: 1, comment: null, rejected: false } },
        { '$key': 'record', prompt_id: 'c6efaf27673db4f7', table: 'all_prompts', fields: { prompt_id: 'c6efaf27673db4f7', prompt: 'helo' } },
        { '$key': 'record', prompt_id: 'c6efaf27673db4f7', table: 'jnl_generations', fields: { prompt_id: 'c6efaf27673db4f7', nr: 1, count: 4 } },
        { '$key': 'record', prompt_id: 'c6efaf27673db4f7', table: 'jnl_generations', fields: { prompt_id: 'c6efaf27673db4f7', nr: 2, count: 3 } },
        { '$key': 'record', prompt_id: 'c6efaf27673db4f7', table: 'jnl_generations', fields: { prompt_id: 'c6efaf27673db4f7', nr: 3, count: 2 } },
        { '$key': 'record', prompt_id: '7c211433f0207159', table: 'jnl_prompts', fields: { prompt_id: '7c211433f0207159', lnr: 2, comment: null, rejected: false } },
        { '$key': 'record', prompt_id: '7c211433f0207159', table: 'all_prompts', fields: { prompt_id: '7c211433f0207159', prompt: 'world' } },
        { '$key': 'record', prompt_id: '7c211433f0207159', table: 'jnl_generations', fields: { prompt_id: '7c211433f0207159', nr: 1, count: 1 } },
        { '$key': 'record', prompt_id: 'da39a3ee5e6b4b0d', table: 'jnl_prompts', fields: { prompt_id: 'da39a3ee5e6b4b0d', lnr: 2, comment: null, rejected: false } },
        { '$key': 'record', prompt_id: 'da39a3ee5e6b4b0d', table: 'all_prompts', fields: { prompt_id: 'da39a3ee5e6b4b0d', prompt: '' } },
        { '$key': 'record', prompt_id: 'da39a3ee5e6b4b0d', table: 'jnl_prompts', fields: { prompt_id: 'da39a3ee5e6b4b0d', lnr: 2, comment: null, rejected: false } } ]
      @eq ( Ω__18 = -> result ), matcher
      #.....................................................................................................
      whisper 'Ω__19', '————————————————————————————————————————'
      whisper 'Ω__20', record for record from result
      whisper 'Ω__21', '————————————————————————————————————————'
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    parse_first_records: ->
      prepare_task()
      { _Journal_walker_for_testing } = require '../../../apps/promptparser/lib/_used-for-testing'
      jw = new _Journal_walker_for_testing get_journal_walker_cfg()
      #.....................................................................................................
      result  = jw.parse_first_records '[s432] helo\n[1] world\n\n'
      urge 'Ω__22', result
      matcher = [
        { '$key': 'record', prompt_id: 'c6efaf27673db4f7', table: 'jnl_prompts', fields: { prompt_id: 'c6efaf27673db4f7', lnr: 1, comment: null, rejected: false } },
        { '$key': 'record', prompt_id: 'c6efaf27673db4f7', table: 'all_prompts', fields: { prompt_id: 'c6efaf27673db4f7', prompt: 'helo' } },
        { '$key': 'record', prompt_id: 'c6efaf27673db4f7', table: 'jnl_generations', fields: { prompt_id: 'c6efaf27673db4f7', nr: 1, count: 4 } },
        { '$key': 'record', prompt_id: 'c6efaf27673db4f7', table: 'jnl_generations', fields: { prompt_id: 'c6efaf27673db4f7', nr: 2, count: 3 } },
        { '$key': 'record', prompt_id: 'c6efaf27673db4f7', table: 'jnl_generations', fields: { prompt_id: 'c6efaf27673db4f7', nr: 3, count: 2 } } ]
      @eq ( Ω__23 = -> result ), matcher
      #.....................................................................................................
      whisper 'Ω__24', '————————————————————————————————————————'
      whisper 'Ω__25', record for record from result
      whisper 'Ω__26', '————————————————————————————————————————'
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    parse_all_tokens: ->
      prepare_task()
      { _Journal_walker_for_testing } = require '../../../apps/promptparser/lib/_used-for-testing'
      jw = new _Journal_walker_for_testing get_journal_walker_cfg()
      #.....................................................................................................
      result  = jw.parse_all_tokens '\n[s432] helo\n[1] world\n\n'
      matcher = [
        { '$key': 'marks:marksleft',  jump: 'marks', value: '[',      lnr1: 2, x1: 0, lnr2: 2, x2: 1,  data: null, source: '[s432] helo' },
        { '$key': 'marks:format',     jump: null,    value: 's',      lnr1: 2, x1: 1, lnr2: 2, x2: 2,  data: null, source: '[s432] helo' },
        { '$key': 'marks:generation', jump: null,    value: '4',      lnr1: 2, x1: 2, lnr2: 2, x2: 3,  data: null, source: '[s432] helo' },
        { '$key': 'marks:generation', jump: null,    value: '3',      lnr1: 2, x1: 3, lnr2: 2, x2: 4,  data: null, source: '[s432] helo' },
        { '$key': 'marks:generation', jump: null,    value: '2',      lnr1: 2, x1: 4, lnr2: 2, x2: 5,  data: null, source: '[s432] helo' },
        { '$key': 'marks:marksright', jump: 'plain', value: ']',      lnr1: 2, x1: 5, lnr2: 2, x2: 6,  data: null, source: '[s432] helo' },
        { '$key': 'plain:prompt',     jump: null,    value: ' helo',  lnr1: 2, x1: 6, lnr2: 2, x2: 11, data: null, source: '[s432] helo' }
        { '$key': 'marks:marksleft',  jump: 'marks', value: '[',      lnr1: 3, x1: 0, lnr2: 3, x2: 1,  data: null, source: '[1] world' },
        { '$key': 'marks:generation', jump: null,    value: '1',      lnr1: 3, x1: 1, lnr2: 3, x2: 2,  data: null, source: '[1] world' },
        { '$key': 'marks:marksright', jump: 'plain', value: ']',      lnr1: 3, x1: 2, lnr2: 3, x2: 3,  data: null, source: '[1] world' },
        { '$key': 'plain:prompt',     jump: null,    value: ' world', lnr1: 3, x1: 3, lnr2: 3, x2: 9,  data: null, source: '[1] world' },
        ]
      @eq ( Ω__27 = -> result ), matcher
      #.....................................................................................................
      whisper 'Ω__28', '————————————————————————————————————————'
      whisper 'Ω__29', token for token from result
      whisper 'Ω__30', '————————————————————————————————————————'
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    parse_first_tokens: ->
      prepare_task()
      { _Journal_walker_for_testing } = require '../../../apps/promptparser/lib/_used-for-testing'
      jw = new _Journal_walker_for_testing get_journal_walker_cfg()
      #.....................................................................................................
      result  = jw.parse_first_tokens '\n[s432] helo\n[1] world\n\n'
      urge 'Ω__31', result
      @eq ( Ω__32 = -> result[ 0 ] ), { '$key': 'marks:marksleft',  jump: 'marks', value: '[',     lnr1: 2, x1: 0, lnr2: 2, x2: 1,  data: null, source: '[s432] helo' }
      @eq ( Ω__33 = -> result[ 1 ] ), { '$key': 'marks:format',     jump: null,    value: 's',     lnr1: 2, x1: 1, lnr2: 2, x2: 2,  data: null, source: '[s432] helo' }
      @eq ( Ω__34 = -> result[ 2 ] ), { '$key': 'marks:generation', jump: null,    value: '4',     lnr1: 2, x1: 2, lnr2: 2, x2: 3,  data: null, source: '[s432] helo' }
      @eq ( Ω__35 = -> result[ 3 ] ), { '$key': 'marks:generation', jump: null,    value: '3',     lnr1: 2, x1: 3, lnr2: 2, x2: 4,  data: null, source: '[s432] helo' }
      @eq ( Ω__36 = -> result[ 4 ] ), { '$key': 'marks:generation', jump: null,    value: '2',     lnr1: 2, x1: 4, lnr2: 2, x2: 5,  data: null, source: '[s432] helo' }
      @eq ( Ω__37 = -> result[ 5 ] ), { '$key': 'marks:marksright', jump: 'plain', value: ']',     lnr1: 2, x1: 5, lnr2: 2, x2: 6,  data: null, source: '[s432] helo' }
      @eq ( Ω__38 = -> result[ 6 ] ), { '$key': 'plain:prompt',     jump: null,    value: ' helo', lnr1: 2, x1: 6, lnr2: 2, x2: 11, data: null, source: '[s432] helo' }
      #.....................................................................................................
      whisper 'Ω__39', '————————————————————————————————————————'
      whisper 'Ω__40', token for token from result
      whisper 'Ω__41', '————————————————————————————————————————'
      #.....................................................................................................
      return null

  # #---------------------------------------------------------------------------------------------------------
  # single_prompt_insertion:

  #   #-------------------------------------------------------------------------------------------------------
  #   interface: ->
  #     prepare_task()
  #     { _Journal_walker_for_testing } = require '../../../apps/promptparser/lib/_used-for-testing'
  #     jw = new _Journal_walker_for_testing get_journal_walker_cfg()
  #     @eq ( Ω__42 = -> jw.types.type_of jw.insert                             ), 'function'
  #     # @eq ( Ω__43 = -> db.types.type_of db.insert_first_records                ), 'function'
  #     # @eq ( Ω__44 = -> db.types.type_of db.insert_all_records                  ), 'function'
  #     # @eq ( Ω__45 = -> db.types.type_of db.insert_first_records  '[s432] helo' ), 'list'
  #     # @eq ( Ω__46 = -> db.types.type_of db.insert_all_records    '[s432] helo' ), 'list'
  #     return null

  #   #-------------------------------------------------------------------------------------------------------
  #   insert_one_by_one: ->
  #     prepare_task()
  #     { _Journal_walker_for_testing } = require '../../../apps/promptparser/lib/_used-for-testing'
  #     jw = new _Journal_walker_for_testing get_journal_walker_cfg()
  #     #.....................................................................................................
  #     records = jw.parse_all_records '[s432] helo\n[1] world\n\n'
  #     for record in records
  #       @eq ( Ω__47 = -> jw.insert record ), 1
  #     return null

  #   #-------------------------------------------------------------------------------------------------------
  #   insert_many: ->
  #     prepare_task()
  #     { _Journal_walker_for_testing } = require '../../../apps/promptparser/lib/_used-for-testing'
  #     jw = new _Journal_walker_for_testing get_journal_walker_cfg()
  #     #.....................................................................................................
  #     records = jw.parse_all_records '[s432] helo\n[1] world\n\n'
  #     @eq ( Ω__48 = -> jw.insert records ), 8
  #     return null


#===========================================================================================================
if module is require.main then await do =>
  t = new Test { throw_on_error: false, }
  t = new Test { throw_on_error: true, }
  t.test { promptparser_tasks, }
  # t.test { t: promptparser_tasks.single_prompt_parsing.parse_all_records, }

