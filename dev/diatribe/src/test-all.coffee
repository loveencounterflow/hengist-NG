

'use strict'

GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'diatrieb/test-all'
{ rpr
  inspect
  echo
  bold
  reverse
  log     }               = GUY.trm
WGUY                      = require '../../../apps/webguy'
types                     = new ( require 'intertype' ).Intertype()
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG

#===========================================================================================================
run_dlg1 = ( dlg = null ) ->
  dlg ?= new ( require '../../../apps/diatribe' ).Interactive_dialog()
  dlg.intro "create-my-app"
  #.........................................................................................................
  loop
    if value = await dlg.confirm { ref: 'q1', message: "do you want to loop?", }
      continue
    break
  await dlg.text { ref: 'q2', message: "please enter text", }
  #.........................................................................................................
  await do =>
    cfg =
      ref:        'q3'
      message:    "Pick a project type."
      options: [
        { value: 'ts',      label: 'TypeScript' },
        { value: 'js',      label: 'JavaScript' },
        { value: 'coffee',  label: 'CoffeeScript', hint: 'yes!' }, ]
    project_type = await dlg.select cfg
    return null
  #.........................................................................................................
  await do =>
    # spinner = dlg.get_spinner()
    # spinner.start "asking questions"
    cfg =
      ref:        null # intentionally left out
      message:    "Select additional tools."
      options: [
        { value: 'eslint',    label: 'ESLint', hint: 'recommended' },
        { value: 'prettier',  label: 'Prettier' },
        { value: 'gh-action', label: 'GitHub Action' }, ]
      required: false
    tools = await dlg.multiselect cfg
    # spinner.stop "thanks!"
    return null
  #.........................................................................................................
  dlg.outro "You're all set!"
  #.........................................................................................................
  return dlg.results

#===========================================================================================================
demo_run_dlg1_interactive = ->
  settings = await run_dlg1()
  info 'Ω___1', settings
  return null

#-----------------------------------------------------------------------------------------------------------
demo_run_dlg1_programmatic = ->
  { Programmatic_dialog, errors, } = require '../../../apps/diatribe'
  steps =
    q1:         [ 'confirm',      false,            ]
    q2:         [ 'text',         "helo",           ]
    q3:         [ 'select',       'coffee',         ]
    $q4:        [ 'multiselect',  [ 'prettier', ],  ]
    whatever:   [ 'select',       'js',         ]
  dlg = new Programmatic_dialog steps
  try
    await run_dlg1 dlg
  catch error
    throw error unless error instanceof errors.Dialog_error
    warn 'Ω___2', reverse bold error.message
  dlg.finish()
  for ref, step of dlg._act_steps
    if step instanceof errors.Dialog_failure then warn ref, step
    else                                          help ref, step
  info dlg.results
  return null



############################################################################################################
#
#===========================================================================================================
@diatribe_tasks =

  #---------------------------------------------------------------------------------------------------------
  with_underrun_failure: ->
    #.......................................................................................................
    { Programmatic_dialog, errors, } = require '../../../apps/diatribe'
    steps =
      q1:         [ 'confirm',      false,            ]
      q2:         [ 'text',         "helo",           ]
      q3:         [ 'select',       'coffee',         ]
      $q4:        [ 'multiselect',  [ 'prettier', ],  ]
      whatever:   [ 'select',       'js',         ]
    dlg = new Programmatic_dialog steps
    try
      await run_dlg1 dlg
    catch error
      throw error unless error instanceof errors.Dialog_error
      warn 'Ω___3', reverse bold error.message
    dlg.finish()
    #.......................................................................................................
    @eq ( Ωit___6 = -> dlg._act_steps                                             ), { q1: 'confirm', q2: 'text', q3: 'select', '$q4': 'multiselect', '$finish': { message: 'finished too early: act 4 exp 5' } }
    @eq ( Ωit___7 = -> dlg._act_steps.$finish instanceof errors.Underrun_failure  ), true
    @eq ( Ωit___8 = -> dlg.results                                                ), { q1: false, q2: 'helo', q3: 'coffee', '$q4': [ 'prettier' ] }
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  with_overrun_failure: ->
    #.......................................................................................................
    { Programmatic_dialog, errors, } = require '../../../apps/diatribe'
    steps =
      q1:         [ 'confirm',      false,            ]
      q2:         [ 'text',         "helo",           ]
      q3:         [ 'select',       'coffee',         ]
      # $q4:        [ 'multiselect',  [ 'prettier', ],  ]
      # whatever:   [ 'select',       'js',         ]
    dlg = new Programmatic_dialog steps
    try
      await run_dlg1 dlg
    catch error
      throw error unless error instanceof errors.Dialog_error
      warn 'Ω___9', reverse bold error.message
    dlg.finish()
    #.......................................................................................................
    @eq ( Ωit__10 = -> dlg._act_steps                                             ), { q1: 'confirm', q2: 'text', q3: 'select', '$q4': { message: 'emergency halt, running too long: act 4 exp 3' } }
    @eq ( Ωit__11 = -> dlg._act_steps.$q4 instanceof errors.Overrun_failure       ), true
    @eq ( Ωit__12 = -> dlg.results                                                ), { q1: false, q2: 'helo', q3: 'coffee', }
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  without_failure: ->
    #.......................................................................................................
    { Programmatic_dialog, errors, } = require '../../../apps/diatribe'
    steps =
      q1:         [ 'confirm',      false,            ]
      q2:         [ 'text',         "helo",           ]
      q3:         [ 'select',       'coffee',         ]
      $q4:        [ 'multiselect',  [ 'prettier', ],  ]
      # whatever:   [ 'select',       'js',         ]
    dlg = new Programmatic_dialog steps
    try
      await run_dlg1 dlg
    catch error
      throw error unless error instanceof errors.Dialog_error
      warn 'Ω__13', reverse bold error.message
    dlg.finish()
    #.......................................................................................................
    @eq ( Ωit__14 = -> dlg._act_steps                                             ), { q1: 'confirm', q2: 'text', q3: 'select', '$q4': 'multiselect' }
    @eq ( Ωit__15 = -> dlg.results                                                ), { q1: false, q2: 'helo', q3: 'coffee', '$q4': [ 'prettier' ] }
    #.......................................................................................................
    return null

#===========================================================================================================
if module is require.main then await do =>
  await ( new Test { throw_on_error: false, } ).async_test @diatribe_tasks
  # await demo_run_dlg1_interactive()
  # await demo_run_dlg1_programmatic()
