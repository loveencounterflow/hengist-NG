

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
  reverse
  log     }               = GUY.trm
WGUY                      = require '../../../apps/webguy'
types                     = new ( require 'intertype' ).Intertype()
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG

#===========================================================================================================
run_dlg1 = ( dlg ) ->
  dlg.intro "create-my-app"
  #.........................................................................................................
  loop
    if value = await dlg.confirm { ref: 'q1', message: "do you want to loop?", }
      debug 'Ω___5', rpr value
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
    spinner = dlg.get_spinner()
    spinner.start "asking questions"
    cfg =
      ref:        null # intentionally left out
      message:    "Select additional tools."
      options: [
        { value: 'eslint', label: 'ESLint', hint: 'recommended' },
        { value: 'prettier', label: 'Prettier' },
        { value: 'gh-action', label: 'GitHub Action' }, ]
      required: false
    tools = await dlg.multiselect cfg
    spinner.stop "thanks!"
    return null
  #.........................................................................................................
  dlg.outro "You're all set!"
  #.........................................................................................................
  return dlg.results

#===========================================================================================================
demo_run_dlg1_interactive = ->
  { Interactive_dialog, } = require '../../../apps/diatribe'
  await run_dlg1 new Interactive_dialog()
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
    warn 'Ω___8', reverse bold error.message
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
  interface: ->
    DIATRIBE     = require '../../../apps/diatribe'
    @eq ( Ωit___2 = -> true ), true
    #.......................................................................................................
    return null

#===========================================================================================================
if module is require.main then await do =>
  ( new Test { throw_on_error: false, } ).test @diatribe_tasks
  # await demo_run_dlg1_interactive()
  await demo_run_dlg1_programmatic()
