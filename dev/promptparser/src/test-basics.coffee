

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
{ type_of }               = require 'intertype'


#===========================================================================================================
cfg = do ->
  db_folder_path            = PATH.resolve  __dirname,                '/dev/shm'
  db_file_path              = PATH.join     db_folder_path,           'prompts-and-generations.sqlite'
  assets_folder_path        = PATH.resolve  __dirname,                '../../../assets'
  promptparser_folder_path  = PATH.join     assets_folder_path,       'promptparser'
  prompts_file_path         = PATH.join     promptparser_folder_path, 'short-prompts.md'
  { assets_folder_path, promptparser_folder_path, prompts_file_path, db_folder_path, db_file_path, }


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
      @eq ( prompts_file        = -> H.file_exists    cfg.prompts_file_path         ), true
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
    cannot_omit_prompt_file_path: ->
      prepare_task()
      { Prompt_file_reader } = require '../../../apps/promptparser'
      omit_prompt_file_path = -> new Prompt_file_reader cfg.db_file_path, null
      @eq ( Ω___4 = -> omit_prompt_file_path() instanceof Prompt_file_reader ), true
      return null

  #---------------------------------------------------------------------------------------------------------
  äää:

    #-------------------------------------------------------------------------------------------------------
    ööö: ->
      prepare_task()
      { Prompt_file_reader } = require '../../../apps/promptparser'
      db = new Prompt_file_reader cfg.db_file_path, cfg.prompts_file_path
      debug 'Ω___5', type_of db
      return null


#===========================================================================================================
demo = ->
  { Prompt_file_reader } = require '../../../apps/promptparser'
  prompts = [
    "[s324w1 some remark] my prompt"
    "[A++v 212] other prompt"
    "[A++v 212 but no cigar] other prompt"
    "[B 2x3 p#3014] Altbau, Versuchsraum, Institut"
    "[WORDING p#4420]"
    "[UNSAFE p#38]"
    "[+++ + p#41]"
    "[meh p#53]"
    "[UU]"
    "[A+v U1UU]"
    "[A++v 22 but not following directions] \t foo bar   "
    "[A++v 22 but not following directions p#7765] \t foo bar.   "
    ""
    "[]"
    "just a prompt"
    "     just a prompt"
    "     [324] a prompt."
    ]
  parser = new Prompt_file_reader()
  whisper 'Ω___6', '————————————————————————'
  for prompt in prompts
    whisper 'Ω___7', '————————————————————————'
    for d in parser.parse prompt
      try
        switch true
          when d.$key is 'source' then  urge    'Ω___8', GUY.trm.reverse rpr d.$value
          when d.$stamped         then  whisper 'Ω___9', "#{d.$key.padEnd 20} #{rpr d.value}"
          else                          info    'Ω__10', "#{d.$key.padEnd 20} #{rpr d.value}"
      catch error
        warn 'Ω__11', error.message
        whisper 'Ω__12', d
  return null
  #.........................................................................................................
  # p = B.as_pipeline()
  # debug 'Ω__13', p.run_and_stop()
  # # T?.eq result, [ [ '*', 'a1', 'a2', 'a3', 'b1', '!b2!', 'b3' ] ]
  # process.exit 111

#===========================================================================================================
if module is require.main then await do =>
  # ( new Test { throw_on_error: true, } ).test { promptparser_tasks, }
  ( new Test { throw_on_error: false, } ).test { promptparser_tasks, }
  # demo()

