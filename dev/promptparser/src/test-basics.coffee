

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


#===========================================================================================================
cfg = do ->
  db_folder_path            = PATH.resolve  __dirname,                '/dev/shm'
  db_file_path              = PATH.join     db_folder_path,           'prompts-and-generations.bd6ef2fc-3d7c-4e3e-9e41-76712e65cede.sqlite'
  assets_folder_path        = PATH.resolve  __dirname,                '../../../assets'
  promptparser_folder_path  = PATH.join     assets_folder_path,       'promptparser'
  short_prompts_file_path   = PATH.join     promptparser_folder_path, 'short-prompts.md'
  { assets_folder_path, promptparser_folder_path, short_prompts_file_path, db_folder_path, db_file_path, }


#===========================================================================================================
### TAINT consider to make test preparation a feature of `guy-test` ###
prepare_task = ->
  whisper GUY.trm.plum "Ω___1 prepare_task / try to remove DB file:", H.try_to_remove_file cfg.db_file_path
  return null

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

  #---------------------------------------------------------------------------------------------------------
  fundamentals:

    #-------------------------------------------------------------------------------------------------------
    can_find_source_locations_and_files: ->
      prepare_task()
      @eq ( assets_folder       = -> H.folder_exists  cfg.assets_folder_path        ), true
      @eq ( promptparser_folder = -> H.folder_exists  cfg.promptparser_folder_path  ), true
      @eq ( prompts_file        = -> H.file_exists    cfg.short_prompts_file_path   ), true
      @eq ( db_folder           = -> H.folder_exists  cfg.db_folder_path            ), true
      return null


    #-------------------------------------------------------------------------------------------------------
    cannot_use_wrong_path_1: ->
      prepare_task()
      { Prompt_file_reader } = require '../../../apps/promptparser'
      use_wrong_paths = ->
        db = new Prompt_file_reader '/foo/prompts-and-generations.sqlite', '/bar/short-prompts.md'
        return null
      @throws ( Ω___2 = -> use_wrong_paths() ), /Cannot open database because the directory does not exist/
      return null

    #-------------------------------------------------------------------------------------------------------
    cannot_use_wrong_path_2: ->
      prepare_task()
      { Prompt_file_reader } = require '../../../apps/promptparser'
      use_wrong_paths = ->
        db = new Prompt_file_reader '/foo/prompts-and-generations.sqlite', '/bar/short-prompts.md'
        return null
      @throws ( Ω___3 = -> use_wrong_paths() ), /Cannot open database because the directory does not exist/
      return null

    #-------------------------------------------------------------------------------------------------------
    can_omit_prompt_file_path: ->
      prepare_task()
      { Prompt_file_reader } = require '../../../apps/promptparser'
      db = new Prompt_file_reader cfg.db_file_path, null
      @eq ( Ω___4 = -> db instanceof Prompt_file_reader ), true
      @eq ( Ω___5 = -> isa.object db.cfg                ), true
      @eq ( Ω___6 = -> db.cfg.db_path                   ), cfg.db_file_path
      @eq ( Ω___7 = -> db.cfg.datasource_path           ), null
      @eq ( Ω___8 = -> db.cfg.has_db_path               ), true
      @eq ( Ω___9 = -> db.cfg.has_datasource_path       ), false
      return null

  #---------------------------------------------------------------------------------------------------------
  äää:

    #-------------------------------------------------------------------------------------------------------
    ööö: ->
      prepare_task()
      { Prompt_file_reader } = require '../../../apps/promptparser'
      db = new Prompt_file_reader cfg.db_file_path, cfg.short_prompts_file_path
      debug 'Ω__10', type_of db
      debug 'Ω__11', db.cfg
      return null


#===========================================================================================================
if module is require.main then await do =>
  t = new Test { throw_on_error: true, }
  t = new Test { throw_on_error: false, }
  t.test { promptparser_tasks, }

