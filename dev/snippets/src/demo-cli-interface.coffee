


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
  log     }               = GUY.trm
#...........................................................................................................
PR                        = require '@inquirer/prompts'
fileSelector              = ( require 'inquirer-file-selector' ).default
CLK                       = require '@clack/prompts'


#===========================================================================================================
class Inquirer

  #---------------------------------------------------------------------------------------------------------
  input: ->
    debug 'Ω___1', PR.input
    help 'Ω___2', rpr await PR.input { message: "say a number", }
    return null

  #---------------------------------------------------------------------------------------------------------
  checkbox: ->
    cfg =
      message:    "Select a package manager"
      loop:       true
      pageSize:   10
      required:   true
      # theme:
      choices: [
        # { value, name, description, short, checked, disabled, }
        { name: 'npm', value: 'npm' },
        { name: 'yarn', value: 'yarn', description: "use Yarn", },
        new PR.Separator(),
        { name: 'option 1', value: 'option 1', checked: true },
        { name: 'option 2', value: 'option 2' },
        { name: 'option 3', value: 'option 3' },
        { name: 'option 4', value: 'option 4' },
        { name: 'option 5', value: 'option 5' },
        { name: 'option 6', value: 'option 6' },
        { name: 'option 7', value: 'option 7' },
        { name: 'option 8', value: 'option 8' },
        { name: 'option 9', value: 'option 9' },
        { name: 'option 10', value: 'option 10' },
        new PR.Separator(),
        { name: 'pnpm', value: 'pnpm', disabled: true },
        { name: 'pnpm', value: 'pnpm', disabled: "(pnpm is not available)", },
        ]
    help 'Ω___3', rpr await PR.checkbox cfg
    return null

  #---------------------------------------------------------------------------------------------------------
  fileselector: ->
    # message
    # basePath
    # pageSize
    # filter
    # showExcluded
    # disabledLabel
    # allowCancel
    # cancelText
    # emptyText
    # theme
    # match
    # hideNonMatch
    debug 'Ω___4', rpr await fileSelector { message: 'Select a file:', pageSize: 20, allowCancel: true, }
    return null

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
        # debug 'Ω___5', rpr value
        return "Value is required!" if value.length is 0
        return null
    name = await CLK.text cfg
    info "Ω___6 your name is #{rpr name}"
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
      info "Ω___7 project type: #{rpr project_type}"
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
      info "Ω___8 tools: #{rpr tools}"
      spinner.stop "thanks!"
      return null
    return null


#===========================================================================================================
inquirer  = new Inquirer()
clack     = new Clack()

#===========================================================================================================
if module is require.main then await do =>
  # await inquirer.fileselector()
  # await clack.intro_outro()
  # await clack.text()
  await clack.select()
  return null

