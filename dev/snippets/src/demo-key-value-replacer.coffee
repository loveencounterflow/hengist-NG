


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



#===========================================================================================================
expand = ( strings, key, seen = new Set() ) ->
  if seen.has key
    throw new Error "Ωkvr___1 cyclic reference detected for #{key}"
  seen.add key
  value = strings[ key ] ? "WAT"
  for k, v of strings
    value = value.replaceAll k, -> expand strings, k, seen
  return value

#===========================================================================================================
expand_strings = ( strings ) ->
  ### Expand all string values by recursively replacing keys with their mapped values ###
  R         = {}
  R[ key ]  = expand strings, key for key of strings
  return R

#===========================================================================================================
demo = ->
  strings =
    '${greet}':   "Hello ${who}"
    '${who}':     "dear ${target}"
    '${target}':  "world"
  strings_error =
    '${greet}':   "Hello ${who}"
    '${who}':     "dear ${target}"
    '${target}':  "world ${greet}"
  do =>
    expanded = expand_strings strings
    info 'Ωkvr___2', strings
    help 'Ωkvr___3', expanded
    help 'Ωkvr___4', expanded is strings
    return null
  # =>
  # { greet: "Hello dear world"
  #   who:   "dear world"
  #   target:"world" }
  do ( strings = strings_error ) =>
    error = null
    try expanded = expand_strings strings
    catch error then warn 'Ωkvr___6', error.message
    warn 'Ωkvr___7', "expected error, none was thrown" unless error?
    info 'Ωkvr___8', strings
    help 'Ωkvr___9', expanded
    return null
  return null

#===========================================================================================================
if module is require.main then await do =>
  demo()
  return null

