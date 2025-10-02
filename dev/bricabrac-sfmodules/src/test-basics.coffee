
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
  whisper }               = GUY.trm.get_loggers 'bricabrac-sfmodules/test-basics'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'



############################################################################################################
#
#===========================================================================================================
@tasks =

    #-------------------------------------------------------------------------------------------------------
    require_expand_recursive_keys: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { expand_recursive_keys,  } = SFMODULES.require_expand_recursive_keys()
      #.....................................................................................................
      @eq ( Ωkvr___1 = -> type_of expand_recursive_keys ), 'function'
      do =>
        strings =
          '${greet}':   "Hello ${who}"
          '${who}':     "dear ${target}"
          '${target}':  "world"
        matcher =
          '${greet}':   "Hello dear world"
          '${who}':     "dear world"
          '${target}':  "world"
        strings_copy  = { strings..., }
        expanded      = expand_recursive_keys strings
        @eq     ( Ωkvr___2 = -> strings             ), strings_copy
        @eq     ( Ωkvr___3 = -> expanded            ), matcher
        @eq     ( Ωkvr___4 = -> expanded is strings ), false
        return null
      #.....................................................................................................
      do =>
        strings =
          '${greet}':   "Hello ${who}"
          '${who}':     "dear ${target}"
          '${target}':  "world ${greet}"
        strings_copy  = { strings..., }
        @throws ( Ωkvr___5 = -> expand_recursive_keys strings ), /cyclic reference detected for \$\{greet\}/
        @eq     ( Ωkvr___6 = -> strings                       ), strings_copy
        return null
      path = require 'node:path'
      replacement = '/D/'
      debug 'Ωkvr___7', "abcd/efdklm/dgoo/d/yy".replaceAll 'd', ( match, index, original ) ->
        chunk = original[ index - 1 .. index + match.length ]
        # debug 'Ωkvr___8', { match, index, original }, rpr chunk
        # marker = '.L'[ +replacement.startsWith '/' ] + '.R'[ +replacement.endsWith '/' ] + '.L'[ +chunk.startsWith '/' ] + '.R'[ +chunk.endsWith '/' ]
        marker = './'[ +( ( replacement.startsWith '/' ) and ( chunks.startsWith '/' ) ) ] + '_' + './'[ +( ( replacement.endsWith '/' ) and ( chunks.endsWith '/' ) ) ] + '.R'[ +replacement.endsWith '/' ] + '.L'[ +chunk.startsWith '/' ] + '.R'[ +chunk.endsWith '/' ]
        debug 'Ωkvr___7', { chunk, replacement, marker, }
        return switch marker
          when '....' then replacement
          when '..L.' then replacement
          when '..LR' then replacement
          when '...R' then replacement
          when 'L...' then replacement
          when 'L.L.' then replacement
          when 'L.LR' then replacement
          when 'L..R' then replacement
          when 'LR..' then replacement
          when 'LRL.' then replacement
          when 'LRLR' then replacement.replace /^\/(.*)\/$/, '$1'
          when 'LR.R' then replacement.replace /\/$/, ''
          when '.R..' then replacement
          when '.RL.' then replacement
          when '.RLR' then replacement.replace /\/$/, ''
          when '.R.R' then replacement.replace /\/$/, ''
          else throw new Error "Ωkvr___7 internal error"
      #.....................................................................................................
      return null




#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @tasks
  # ( new Test guytest_cfg ).test @tasks.builtins
