


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


#===========================================================================================================
class Clack

  #---------------------------------------------------------------------------------------------------------
  intro_outro: ->
    CLK.intro "create-my-app"
    value = await CLK.text { message: "press CTRL+C to continue", }
    if CLK.isCancel value
      CLK.cancel "Operation cancelled."
      # process.exit 0
    CLK.outro "You're all set!"
    return null

  #---------------------------------------------------------------------------------------------------------
  text: ->
    cfg =
      message:      "What is your name?"
      placeholder:  "Not sure"
      initialValue: "Jim"
      validate:     ( value ) ->
        # debug 'Ω___1', rpr value
        return "Value is required!" if value.length is 0
        return null
    name = await CLK.text cfg
    info "Ω___2 your name is #{rpr name}"
    return null

  #---------------------------------------------------------------------------------------------------------
  select: ->
    await do =>
      cfg =
        message:    "Pick a project type."
        options: [
          { value: 'ts',      label: 'TypeScript' },
          { value: 'js',      label: 'JavaScript' },
          { value: 'coffee',  label: 'CoffeeScript', hint: 'yes!' }, ]
      project_type = await CLK.select cfg
      info "Ω___3 project type: #{rpr project_type}"
      return null
    await do =>
      spinner = CLK.spinner()
      spinner.start "asking questions"
      cfg =
        message:    "Select additional tools."
        options: [
          { value: 'eslint', label: 'ESLint', hint: 'recommended' },
          { value: 'prettier', label: 'Prettier' },
          { value: 'gh-action', label: 'GitHub Action' }, ]
        required: false
      tools = await CLK.multiselect cfg
      info "Ω___4 tools: #{rpr tools}"
      spinner.stop "thanks!"
      return null
    return null
# clack = new Clack()

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

  #---------------------------------------------------------------------------------------------------------
  process_exit: ( code = 0 ) -> process.exit code


#===========================================================================================================
class Programmatic_dialog_error extends Error

#===========================================================================================================
class Programmatic_dialog

  #---------------------------------------------------------------------------------------------------------
  constructor: ( steps ) ->
    @exp_steps  = steps
    @pc         = -1
    @act_steps  = []
    @errors     = []
    return undefined

  #---------------------------------------------------------------------------------------------------------
  _next: ->
    @pc++
    unless ( R = @exp_steps[ @pc ] ? null )?
      throw new Programmatic_dialog_error "running out of steps: #{rpr @}"
    return R

  #---------------------------------------------------------------------------------------------------------
  _error: ( message ) ->
    error = { isa: 'error', message, }
    @act_steps.push error
    @errors.push    error
    return null

  #---------------------------------------------------------------------------------------------------------
  _step: ( act_key ) ->
    [ exp_key, value, ] = @_next()
    if act_key is exp_key
      @act_steps.push act_key
    else
      @_error "error @ #{@pc}: act #{rpr act_key}, exp #{rpr exp_key}"
    return value

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
    [ 'intro',    true, ]
    [ 'confirm',  true, ]
    # [ 'confirm',  false, ]
    [ 'outro',    true, ] ]
  dlg = new Programmatic_dialog steps
  try
    await sample_dialog dlg
  catch error
    throw error unless error instanceof Programmatic_dialog_error
    warn 'Ω__14', reverse bold error.message
  warn 'Ω__15', dlg.errors if dlg.errors.length > 0
  help 'Ω__16', dlg.act_steps
  return null


#===========================================================================================================
if module is require.main then await do =>
  # await demo_run_interactive()
  await demo_run_programmatic()
  return null

