


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
CLK                       = require '@clack/prompts'

#===========================================================================================================
select = ->
  await do =>
    cfg =
      message:    "Pick a project type."
      options: [
        { value: 'ts',      label: 'TypeScript' },
        { value: 'js',      label: 'JavaScript' },
        { value: 'coffee',  label: 'CoffeeScript', hint: 'yes!' }, ]
    project_type = await CLK.select cfg
    info "Ω___1 project type: #{rpr project_type}"
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
    info "Ω___2 tools: #{rpr tools}"
    spinner.stop "thanks!"
    return null
  return null

#===========================================================================================================
console.log 'Ω___3', "start"
console.log 'Ω___4', await CLK.confirm { message: "Do you want pizza?", }
# console.log 'Ω___5', await CLK.confirm { message: "Do you want coffee?", }
# console.log 'Ω___6', await CLK.text { message: "Do you want pizza?", placeholder: 'placeholder', initialValue: 'init', }
# console.log 'Ω___7', await select()
console.log 'Ω___8', "stop"
