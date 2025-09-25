
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
  whisper }               = GUY.trm.get_loggers 'demo-proxy'
{ rpr
  inspect
  echo
  white
  green
  blue
  gold
  grey
  red
  bold
  reverse
  log     }               = GUY.trm
{ f }                     = require '../../../apps/effstring'
# write                     = ( p ) -> process.stdout.write p
{ nfa }                   = require '../../../apps/normalize-function-arguments'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
SFMODULES                 = require '../../../apps/bricabrac-sfmodules'


#===========================================================================================================
require_html_class = ->

  #---------------------------------------------------------------------------------------------------------
  class Html

    #-------------------------------------------------------------------------------------------------------
    constructor: ( name, atrs, content ) ->
      @name     = name
      @atrs     = atrs    ? new Map()
      @content  = content ? []
      return undefined

    #-------------------------------------------------------------------------------------------------------
    toString: ->
      R = []
      R.push "<#{@name}"
      R.push " ATRs"
      R.push ">"
      R.push e for e in @content
      R.push "</#{@name}>"
      return R.join ''

  #.........................................................................................................
  return { Html, }


#===========================================================================================================
tests =

  #---------------------------------------------------------------------------------------------------------
  test_infiniproxy: ->
    { Html,                           } = require_html_class()
    { walk_parts,
      is_tagfun_call,                 } = SFMODULES.require_tagfun_tools()
    { create_infiniproxy,
      get_proxy,                      } = SFMODULES.require_infiniproxy()
    { escape_html_text,               } = SFMODULES.require_escape_html_text()
    # { append,                         } = SFMODULES.require_list_tools()
    as_text                             = ( x ) -> "#{x}"
    #.......................................................................................................
    handler = ( P... ) ->
      [ name, atrs..., ] = @stack
      # debug 'Ωdsh___1', [ @stack..., ]
      debug 'Ωdsh___2', { name, atrs, }
      content = [ ( walk_parts P... )..., ]
      # for part from walk_parts P...
      #   debug 'Ωdsh___3', part
      return new Html name, null, content
    #.......................................................................................................
    handler.on_click = ( P... ) ->
      # info 'Ωdsh___4', @
      # info 'Ωdsh___5', H
      return sub_proxy
    H         = create_infiniproxy handler
    sub_proxy = H[ get_proxy ]
    #.......................................................................................................
    urge 'Ωdsh___9',          new Html 'div'
    urge 'Ωdsh__10',          new Html 'div', null, "content"
    urge 'Ωdsh__11', as_text  new Html 'div'
    urge 'Ωdsh__12', as_text  new Html 'div', null, "content"
    # urge 'Ωdsh__13',          H.div._cssclass"<content>"
    # urge 'Ωdsh__14', as_text  H.div._cssclass"<content>"
    # urge 'Ωdsh__15',          H.div.red.outline.on_click'doit()'
    urge 'Ωdsh__16',          H.div.red"<content>"
    urge 'Ωdsh__17',          H.div.red.outline.on_click'doit()'.extra"<content>"
    echo '——————————————————————————————————————————————————————————————————————————————'
    # urge 'Ωdsh__18',          GUY.trm.truth H.div is H.div.on_click
    urge 'Ωdsh__19',          H.div.on_click'doit()'
    # urge 'Ωdsh__20',          GUY.trm.truth H.div is H.div.on_click'doit()'
    # urge 'Ωdsh__21',          H.div.on_click'doit()'._cssclass # "<content>"
    urge 'Ωdsh__22',          H.div.on_click'doit()'._cssclass"<content>"
    #.......................................................................................................
    return null


#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }


