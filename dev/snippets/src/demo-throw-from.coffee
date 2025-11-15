


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
PATH                      = require 'node:path'
# # { $: zx, cd: zx_cd }      = require 'zx'




#===========================================================================================================
if module is require.main then await do =>
  # await demo_execa()

  throw_from = ( error_1, message ) ->
    error_2 = new Error message
    error_2.cause = error_1
    throw error_2

  class Division_by_zero  extends Error
  class App_error         extends Error

  #---------------------------------------------------------------------------------------------------------
  div = ( a, b ) ->
    throw new Division_by_zero "Ωbbdbr__49 b cannot be zero" if b is 0
    return a / b

  #---------------------------------------------------------------------------------------------------------
  calculate = ( a, b ) ->
    return 2 * div a, b

  #=========================================================================================================
  app_1 = ( n ) ->
    try
      k = calculate 100, n
    catch error
      throw new App_error "Ωbbdbr__50 something went wrong"
    return { n, k, }

  #=========================================================================================================
  app_3 = ( n ) ->
    try
      k = calculate 100, n
    catch cause
      throw new App_error "Ωbbdbr__51 something went wrong", { cause, }
    return { n, k, }

  # debug 'Ωbbdbr__52', app_3 7
  # debug 'Ωbbdbr__53', app_3
  cause = new Error "Ωbbdbr__54"
  try throw new Error "Ωbbdbr__55", { cause, } catch error
    info 'Ωbbdbr__56', error.stack
    urge 'Ωbbdbr__57', error.cause.stack
    # d = {}
    # urge 'Ωbbdbr__58', Error.captureStackTrace d
    # urge 'Ωbbdbr__59', d.stack

    ### NOTE setting `sourceMap` not needed when NodeJS is run with `--enable-source-maps` ###
  { getCallSites } = require 'node:util'
  for call_site in getCallSites { sourceMap: true, }
    { functionName: fn_name,
      scriptName:   path,
      lineNumber:   line_nr,
      columnNumber: column_nr,  } = call_site
    fn_name = '[anonymous]' if fn_name is ''
    urge 'Ωbbdbr__60', "#{green path}:#{blue line_nr}:#{red column_nr}:#{gold fn_name}()"

