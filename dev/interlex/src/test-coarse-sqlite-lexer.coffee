
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
  whisper }               = GUY.trm.get_loggers 'interlex/test-basics'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'
SQL                       = String.raw
{ condense_lexemes
  abbrlxm
  tabulate_lexemes
  tabulate_lexeme       } = require './helpers'
# { internals: ct_internals
#   isa
#   std
#   type_of               } = require '../../../apps/cleartype'


############################################################################################################
#
#===========================================================================================================
@interlex_tasks =

  #=========================================================================================================
  levels:

    #-------------------------------------------------------------------------------------------------------
    demo: ->
      { Grammar } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g         = new Grammar()
        first     = g.new_level { name: 'first', }
        string    = g.new_level { name: 'string', }
        dqname    = g.new_level { name: 'dqname', }
        brktname  = g.new_level { name: 'brktname', }
        #...................................................................................................
        first.new_token       'left_paren',     {  fit: '(', }
        first.new_token       'right_paren',    {  fit: ')', }
        first.new_token       'semicolon',      {  fit: ';', }
        first.new_token       'single_quote',   {  fit: "'", jump: 'string!', }
        first.new_token       'left_bracket',   {  fit: "[", jump: 'brktname!', }
        first.new_token       'double_quote',   {  fit: '"', jump: 'dqname!', }
        first.new_token       'ws',             {  fit: /\s+/, }
        first.new_token       'word',           {  fit: /[^\s"'\[;]+/, }
        #...................................................................................................
        string.new_token      'text',           {  fit: /[^']+/, }
        string.new_token      'single_quote',   {  fit: "'", jump: '..', }
        #...................................................................................................
        brktname.new_token    'name',           {  fit: /[^\]]+/, }
        brktname.new_token    'right_bracket',  {  fit: ']', jump: '..', }
        #...................................................................................................
        dqname.new_token      'name',           {  fit: /[^"]+/, }
        dqname.new_token      'double_quote',   {  fit: '"', jump: '..', }
        #...................................................................................................
        source = SQL"""create table "names" (
            name text unique not null,
            "comment[" text not null default 'no;comment',
            [uuugh....] integer );"""
        for line in source.split '/n'
          for token from g.scan line
            continue if token.is_signal
            continue if token.fqname is 'first.ws'
            tabulate_lexeme token
        return null
      #.....................................................................................................
      return null

      #   #...................................................................................................
      #   first     = g.new_level { name: 'first', }
      #   first.new_token     { name: 'other',      fit: /[^"]+/,                             }
      #   first.new_token     { name: 'dq',         fit: /"/,             jump: 'dqstring!',  }
      #   #...................................................................................................
      #   dqstring  = g.new_level { name: 'dqstring', }
      #   dqstring.new_token  { name: 'other',      fit: /[^"]+/,                             }
      #   dqstring.new_token  { name: 'dq',         fit: /"/,             jump: '..'          }
      # text.new_token    { name: 'text',         fit: /// \\ \p{Decimal_Number} | \p{Letter} ///v,                 }
      # text.new_token    { name: 'ws',           fit: /// \p{White_Space}                    ///v,                 }
      # text.new_token    { name: 'number_start', fit: /// (?= (?!< \\ ) \p{Decimal_Number} ) ///v, jump: 'number', }
      # number.new_token  { name: 'digit',        fit: /// \p{Decimal_Number} | \. | e        ///v,                 }
      # number.new_token  { name: 'number_stop',  fit: /// (?= \P{Decimal_Number} )           ///v, jump: '..',     }
      # #.....................................................................................................
      # text.new_token { name: 'name', fit: /// (?<initial> \p{Uppercase_Letter} ) \p{Lowercase_Letter}+ ///v, merge: true,    }
      # #.....................................................................................................


      # #.....................................................................................................
      # gnd.new_token       { name: 'name',           fit: rx"(?<initial>[A-Z])[a-z]*", }
      # gnd.new_token       { name: 'number',         fit: rx"[0-9]+",                  }
      # gnd.new_token       { name: 'paren_start',    fit: rx"\(",                      }
      # gnd.new_token       { name: 'paren_stop',     fit: rx"\)",                      }
      # gnd.new_token       { name: 'other',          fit: rx"[A-Za-z0-9]+",            }
      # gnd.new_token       { name: 'ws',             fit: rx"\s+",                     }



#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false, show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true, show_passes: false, report_checks: false, }
  # guytest_cfg = { throw_on_error: false, show_passes: true, report_checks: true, }
  ( new Test guytest_cfg ).test @interlex_tasks
