

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
  whisper }               = GUY.trm.get_loggers 'diatribe/test-all'
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
  dlg.finish()
  #.........................................................................................................
  return dlg

#===========================================================================================================
demo_run_dlg1_interactive = ->
  settings = await run_dlg1()
  info 'Ω___1', settings
  return null

#-----------------------------------------------------------------------------------------------------------
demo_run_dlg1_programmatic = ->
  { Programmatic_dialog, errors, } = require '../../../apps/diatribe'
  exp_steps =
    q1:         { modal: 'confirm',      answer: false,            }
    q2:         { modal: 'text',         answer: "helo",           }
    q3:         { modal: 'select',       answer: 'coffee',         }
    $q4:        { modal: 'multiselect',  answer: [ 'prettier', ],  }
    whatever:   { modal: 'select',       answer: 'js',             }
  dlg = new Programmatic_dialog exp_steps
  try
    await run_dlg1 dlg
  catch error
    throw error unless error instanceof errors.Dialog_error
    warn 'Ω___2', reverse bold error.message
  for ref, step of dlg.act_steps
    if step instanceof errors.Dialog_failure then warn 'Ω___3', ref, step
    else                                          help 'Ω___4', ref, step
  info dlg.results
  return null


#-----------------------------------------------------------------------------------------------------------
demo_from_docs = ->
  { Interactive_dialog
    Programmatic_dialog } = require '../../../apps/diatribe'
  run_my_dialog = ( dlg = null ) ->
    # Provide default implementation if none given:
    dlg        ?= new Interactive_dialog()
    #.........................................................................................................
    # Start running user interaction:
    want_pizza  = await dlg.confirm { ref: 'want_pizza', message: "Do you want pizza?", }
    #.........................................................................................................
    # Depending on answer, decide what to do:
    if want_pizza
      console.log "You want pizza. Good!"
      #.......................................................................................................
      # If so inclined, we could perform some actions here that only take place when the answer was `Yes`; in
      # this example, we only ask a conditional follow-up question for the toppings.
      #.......................................................................................................
      want_pineapple  = await dlg.confirm { ref: 'want_pineapple', message: "Do you want pinapple?", }
    else
      console.log "Maybe next time."
    #.........................................................................................................
    # It is mandatory to call `dlg.finish()` to signal completion:
    dlg.finish()
    #.........................................................................................................
    # Return what is most useful to you:
    return dlg
  #---------------------------------------------------------------------------------------------------------
  # urge 'Ω___5', await run_my_dialog()
  await do =>
    whisper 'Ω___6', '————————————————————————————————————————'
    exp_steps = [
      { ref: 'want_pizza', modal: 'confirm', answer: false, } ]
    info 'Ω___7', "exp_step", step for step in exp_steps
    dlg = await run_my_dialog new Programmatic_dialog exp_steps
    help 'Ω___8', "act_steps", dlg.act_steps
    help 'Ω___9', "act_step", step for step in dlg.act_steps
    return null
  #.........................................................................................................
  await do =>
    whisper 'Ω__10', '————————————————————————————————————————'
    try
      exp_steps = [
        { ref: 'want_pizza', modal: 'confirm', answer: true, } ]
      info 'Ω__11', "exp_step", step for step in exp_steps
      dlg = await run_my_dialog new Programmatic_dialog exp_steps
    catch error
      warn 'Ω__12', error.message
    return null
  #.........................................................................................................
  await do =>
    whisper 'Ω__13', '————————————————————————————————————————'
    exp_steps = [
      { ref: 'want_pizza',      modal: 'confirm', answer: true, }
      { ref: 'want_pineapple',  modal: 'confirm', answer: false, } ]
    info 'Ω__14', "exp_step", step for step in exp_steps
    dlg = await run_my_dialog new Programmatic_dialog exp_steps
    help 'Ω__15', "act_steps", dlg.act_steps
    help 'Ω__16', "act_step", step for step in dlg.act_steps
    return null
  #.........................................................................................................
  await do =>
    whisper 'Ω__17', '————————————————————————————————————————'
    exp_steps = [
      { ref: 'want_pizza',      modal: 'confirm', answer: false, }
      { ref: 'want_pineapple',  modal: 'confirm', answer: false, } ]
    info 'Ω__18', "exp_step", step for step in exp_steps
    dlg = await run_my_dialog new Programmatic_dialog exp_steps
    help 'Ω__19', "act_step", step for step in dlg.act_steps
    return null
  #.........................................................................................................
  return null




############################################################################################################
#
#===========================================================================================================
@diatribe_tasks =

  #---------------------------------------------------------------------------------------------------------
  with_underrun_failure: ->
    #.......................................................................................................
    { Programmatic_dialog, errors, } = require '../../../apps/diatribe'
    exp_steps = [
      { ref: 'q1',        modal: 'confirm',      answer: false,            }
      { ref: 'q2',        modal: 'text',         answer: "helo",           }
      { ref: 'q3',        modal: 'select',       answer: 'coffee',         }
      { ref: '$q4',       modal: 'multiselect',  answer: [ 'prettier', ],  }
      { ref: 'whatever',  modal: 'select',       answer: 'js',             } ]
    act_steps = [
      { ref: 'q1',  modal: 'confirm',     answer: false },
      { ref: 'q2',  modal: 'text',        answer: 'helo' },
      { ref: 'q3',  modal: 'select',      answer: 'coffee' },
      { ref: '$q4', modal: 'multiselect', answer: [ 'prettier' ] },
      { message: 'finished too early: act 4 exp 5' } ] ### Underrun_failure ###
    #.......................................................................................................
    dlg = new Programmatic_dialog exp_steps
    try
      await run_dlg1 dlg
    catch error
      throw error unless error instanceof errors.Dialog_error
      warn 'Ω__20', reverse bold error.message
    #.......................................................................................................
    @eq ( Ω__21 = -> dlg.act_steps                                             ), act_steps
    @eq ( Ω__22 = -> dlg.act_steps[ 4 ] instanceof errors.Underrun_failure  ), true
    @eq ( Ω__23 = -> dlg.results                                                ), { q1: false, q2: 'helo', q3: 'coffee', '$q4': [ 'prettier' ] }
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  with_overrun_failure: ->
    #.......................................................................................................
    { Programmatic_dialog, errors, } = require '../../../apps/diatribe'
    exp_steps = [
      { ref: 'q1',  modal: 'confirm', answer: false,    }
      { ref: 'q2',  modal: 'text',    answer: "helo",   }
      { ref: 'q3',  modal: 'select',  answer: 'coffee', } ]
    act_steps = [
      { ref: 'q1', modal: 'confirm', answer: false },
      { ref: 'q2', modal: 'text', answer: 'helo' },
      { ref: 'q3', modal: 'select', answer: 'coffee' },
      { message: 'emergency halt, running too long: act 4 exp 3' } ] ### Overrun_failure ###
    #.......................................................................................................
    dlg = new Programmatic_dialog exp_steps
    try
      await run_dlg1 dlg
    catch error
      throw error unless error instanceof errors.Dialog_error
      warn 'Ω__24', reverse bold error.message
    #.......................................................................................................
    @eq ( Ω__25 = -> dlg.act_steps                                             ), act_steps
    @eq ( Ω__26 = -> dlg.act_steps[ 3 ] instanceof errors.Overrun_failure       ), true
    @eq ( Ω__27 = -> dlg.results                                                ), { q1: false, q2: 'helo', q3: 'coffee', }
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  without_failure: ->
    { Programmatic_dialog, errors, } = require '../../../apps/diatribe'
    #.......................................................................................................
    run_dlg = ( dlg, act_steps, results ) =>
      try await run_dlg1 dlg catch error
        throw error unless error instanceof errors.Dialog_error
        warn 'Ω__28', reverse bold error.message
      info 'Ω__29', "act_steps:  ", dlg.act_steps
      urge 'Ω__30', "results:     ", dlg.results
      @eq ( Ω__31 = -> dlg.act_steps ), act_steps
      @eq ( Ω__32 = -> dlg.results    ), results
      return dlg
    #.......................................................................................................
    await do =>
      exp_steps = [
        { ref: 'q1',      modal: 'confirm',     answer: false,            }
        { ref: 'q2',      modal: 'text',        answer: "helo",           }
        { ref: 'q3',      modal: 'select',      answer: 'coffee',         }
        { ref: '$q4',     modal: 'multiselect', answer: [ 'prettier', ],  } ]
      act_steps = exp_steps
      dlg = await run_dlg                                                   \
        ( new Programmatic_dialog exp_steps ),                                  \
        act_steps,  \
        { q1: false, q2: 'helo', q3: 'coffee', '$q4': [ 'prettier' ] }
      return null
    #.......................................................................................................
    await do =>
      exp_steps = [
        { ref: 'q1',      modal: 'confirm',      answer: false,           }
        { ref: 'q2',      modal: 'text',         answer: "helo",          }
        { ref: 'q_wrong', modal: 'select',       answer: 'coffee',        }
        { ref: '$q4',     modal: 'multiselect',  answer: [ 'prettier', ], }
        ]
      act_steps = [
        { ref: 'q1', modal: 'confirm', answer: false },
        { ref: 'q2', modal: 'text', answer: 'helo' },
        { message: "step#2: act 'q3', exp 'q_wrong'" }, ### Misstep_failure ###
        { ref: '$q4', modal: 'multiselect', answer: [ 'prettier' ] } ]
      dlg = await run_dlg                                                   \
        ( new Programmatic_dialog exp_steps ),                                  \
        act_steps,  \
        { q1: false, q2: 'helo', q3: 'coffee', '$q4': [ 'prettier' ] }
      @eq ( Ω__33 = -> dlg.act_steps[ 2 ] instanceof errors.Misstep_failure ), true
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  recognize_wrong_step: ->
    #.......................................................................................................
    { Programmatic_dialog, errors, } = require '../../../apps/diatribe'
    exp_steps = [
      { ref: 'q1',    modal: 'confirm',      answer: false,            }
      { ref: 'q2',    modal: 'text',         answer: "helo",           }
      { ref: 'wrong', modal: 'select',       answer: 'coffee',         }
      { ref: '$q4',   modal: 'multiselect',  answer: [ 'prettier', ],  }
      ]
    act_steps = [
      { ref: 'q1', modal: 'confirm', answer: false },
      { ref: 'q2', modal: 'text', answer: 'helo' },
      { message: "step#2: act 'q3', exp 'wrong'" }, ### Misstep_failure ###
      { ref: '$q4', modal: 'multiselect', answer: [ 'prettier' ] } ]
    #.......................................................................................................
    dlg = new Programmatic_dialog exp_steps
    await run_dlg1 dlg
    #.......................................................................................................
    @eq ( Ω__34 = -> dlg.act_steps ), act_steps
    @eq ( Ω__35 = -> dlg.act_steps[ 2 ] instanceof errors.Misstep_failure ), true
    @eq ( Ω__36 = -> dlg.results    ), { q1: false, q2: 'helo', q3: 'coffee', '$q4': [ 'prettier' ] }
    #.......................................................................................................
    return null

#===========================================================================================================
if module is require.main then await do =>
  await ( new Test { throw_on_error: true, } ).async_test {
    # with_underrun_failure:  @diatribe_tasks.with_underrun_failure
    # with_overrun_failure:   @diatribe_tasks.with_overrun_failure
    without_failure:        @diatribe_tasks.without_failure
    }
  # await demo_run_dlg1_interactive()
  whisper 'Ω__37', '————————————————————————————————————————'
  await ( new Test { throw_on_error: true, } ).async_test @diatribe_tasks
  whisper 'Ω__38', '————————————————————————————————————————'
  # await demo_run_dlg1_programmatic()
  await demo_from_docs()
  return null