


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
  whisper }               = GUY.trm.get_loggers 'demo-execa'
{ rpr
  inspect
  echo
  reverse
  bold
  log     }               = GUY.trm
#...........................................................................................................
CLK                       = require '@clack/prompts'
PATH                      = require 'node:path'
mark                      = ( ref ) -> urge reverse bold " #{ref} "


# #===========================================================================================================
# class Clack

#   #---------------------------------------------------------------------------------------------------------
#   intro_outro: ->
#     CLK.intro "create-my-app"
#     value = await CLK.text { message: "press CTRL+C to continue", }
#     if CLK.isCancel value
#       CLK.cancel "Operation cancelled."
#       # process.exit 0
#     CLK.outro "You're all set!"
#     return null

#   #---------------------------------------------------------------------------------------------------------
#   text: ->
#     cfg =
#       message:      "What is your name?"
#       placeholder:  "Not sure"
#       initialValue: "Jim"
#       validate:     ( value ) ->
#         # debug 'Ω___1', rpr value
#         return "Value is required!" if value.length is 0
#         return null
#     name = await CLK.text cfg
#     info "Ω___2 your name is #{rpr name}"
#     return null

#   #---------------------------------------------------------------------------------------------------------
#   select: ->
#     await do =>
#       cfg =
#         message:    "Pick a project type."
#         options: [
#           { value: 'ts',      label: 'TypeScript' },
#           { value: 'js',      label: 'JavaScript' },
#           { value: 'coffee',  label: 'CoffeeScript', hint: 'yes!' }, ]
#       project_type = await CLK.select cfg
#       info "Ω___3 project type: #{rpr project_type}"
#       return null
#     await do =>
#       spinner = CLK.spinner()
#       spinner.start "asking questions"
#       cfg =
#         message:    "Select additional tools."
#         options: [
#           { value: 'eslint', label: 'ESLint', hint: 'recommended' },
#           { value: 'prettier', label: 'Prettier' },
#           { value: 'gh-action', label: 'GitHub Action' }, ]
#         required: false
#       tools = await CLK.multiselect cfg
#       info "Ω___4 tools: #{rpr tools}"
#       spinner.stop "thanks!"
#       return null
#     return null
# # clack = new Clack()

###

Errors entail failures


###

#===========================================================================================================
### TAINT Later to be extended so we pass in parameters, not messages ###
class Dialog_error              extends Error
class Interactive_dialog_error  extends Dialog_error
class Programmatic_dialog_error extends Dialog_error
class Internal_error            extends Programmatic_dialog_error
class Overrun_error             extends Programmatic_dialog_error


#===========================================================================================================
### TAINT Later to be extended so we pass in parameters, not messages ###
class Dialog_failure
  constructor: ( @message ) -> undefined

class Misstep_failure   extends Dialog_failure
class Underrun_failure  extends Dialog_failure
class Overrun_failure   extends Dialog_failure
class Internal_failure  extends Dialog_failure


#===========================================================================================================
class Interactive_dialog

  #---------------------------------------------------------------------------------------------------------
  ctrlc: ( value ) ->
    # debug 'Ω___5', rpr value
    if CLK.isCancel value
      CLK.cancel "Operation cancelled."
      @process_exit 0
    return value

  #---------------------------------------------------------------------------------------------------------
  intro:    ( cfg ) -> @ctrlc await CLK.intro cfg
  outro:    ( cfg ) -> @ctrlc await CLK.outro cfg
  confirm:  ( cfg ) -> @ctrlc await CLK.confirm cfg
  finish:           -> null

  #---------------------------------------------------------------------------------------------------------
  process_exit: ( code = 0 ) -> process.exit code


#===========================================================================================================
class Programmatic_dialog

  #---------------------------------------------------------------------------------------------------------
  constructor: ( steps ) ->
    @_exp_steps = steps
    @_pc        = -1
    @_act_steps = []
    #.......................................................................................................
    GUY.props.def @, '_failures',
      enumerable:   false
      configurable: false
      get:          -> ( d for d in @_act_steps when d instanceof Dialog_failure )
    #.......................................................................................................
    return undefined

  #---------------------------------------------------------------------------------------------------------
  _next: ->
    @_pc++
    unless ( R = @_exp_steps[ @_pc ] ? null )?
      message = "emergency halt, running too long: act #{@_act_steps.length + 1} exp #{@_exp_steps.length}"
      @_fail new Overrun_failure message
      throw new Overrun_error message
    return R

  #---------------------------------------------------------------------------------------------------------
  _fail: ( failure ) ->
    @_act_steps.push  failure
    @_failures.push   failure
    return null

  #---------------------------------------------------------------------------------------------------------
  _step: ( act_key ) ->
    [ exp_key, value, ] = @_next()
    if act_key is exp_key
      @_act_steps.push act_key
    else
      @_act_steps.push new Misstep_failure "step##{@_pc}: act #{rpr act_key}, exp #{rpr exp_key}"
    return value

  #---------------------------------------------------------------------------------------------------------
  _is_finished: -> @_act_steps.length is @_exp_steps.length
  _is_underrun: -> @_act_steps.length < @_exp_steps.length
  _is_overrun:  -> @_act_steps.length > @_exp_steps.length

  #---------------------------------------------------------------------------------------------------------
  finish: ( P... ) ->
    #### `dlg.finish()` should be called after the simulated dialog has ben run to issue an  ####
    return true if @_is_finished() or @_is_overrun()
    # unless @_is_underrun()
    #   message = "should have recognized overrun"
    #   @_fail new Internal_failure message
    #   throw new Internal_error message
    @_fail new Underrun_failure "finished too early: act #{@_act_steps.length} exp #{@_exp_steps.length}"
    return false

  #---------------------------------------------------------------------------------------------------------
  intro:    ( P... ) -> @_step 'intro'
  outro:    ( P... ) -> @_step 'outro'
  confirm:  ( P... ) -> @_step 'confirm'

  #---------------------------------------------------------------------------------------------------------
  process_exit: ( code ) ->
    # not really exiting the process
    return code


#===========================================================================================================
sample_dialog = ( dlg = null ) ->
  dlg  ?= new Interactive_dialog()
  R     = {}
  #.........................................................................................................
  dlg.intro "create-my-app"
  loop
    if await dlg.confirm { message: "do you want to loop?", }
      continue
    break
  dlg.outro "You're all set!"
  #.........................................................................................................
  return R

#===========================================================================================================
demo_run_interactive = ->
  await sample_dialog() # or `sample_dialog new Interactive_dialog()`
  return null

#-----------------------------------------------------------------------------------------------------------
demo_run_programmatic = ->
  steps = [
    [ 'intro', ]
    [ 'confirm',  false, ]
    # [ 'confirm',  true, ]
    [ 'outro', ]
    [ 'outro', ]
    ]
  dlg = new Programmatic_dialog steps
  try
    await sample_dialog dlg
  catch error
    throw error unless error instanceof Programmatic_dialog_error
    warn 'Ω___7', reverse bold error.message
  dlg.finish()
  warn 'Ω___9', dlg._failures
  help 'Ω__10', dlg._act_steps
  return null


#===========================================================================================================
if module is require.main then await do =>
  # await demo_run_interactive()
  await demo_run_programmatic()
  return null

