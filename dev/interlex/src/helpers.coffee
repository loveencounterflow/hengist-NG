
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

#===========================================================================================================
condense_lexemes = ( lexemes ) ->
  lexemes = [ lexemes, ] unless Array.isArray lexemes
  ( "#{lexeme?.fqname ? null}#{rpr lexeme?.hit ? null}" for lexeme from lexemes ).join '|'

#-----------------------------------------------------------------------------------------------------------
# abbrlxm = ( lxm ) -> {
#   level:  lxm?.level?.name ? null,
#   fqname: lxm?.fqname      ? null,
#   hit:    lxm?.hit         ? null,
#   pos:    ( if lxm? then "#{lxm.start}:#{lxm.stop}" else null ), }

#-----------------------------------------------------------------------------------------------------------
abbrlxm = ( lxm ) ->
  return null unless lxm?
  R =
    fqname: lxm.fqname
    hit:    lxm.hit
    pos:    "#{lxm.lnr}:#{lxm.start}:#{lxm.stop}"
  R.data = { lxm.data..., } if lxm.has_data
  delete R.data?.ref
  return R

#-----------------------------------------------------------------------------------------------------------
tabulate_lexemes = ( lexemes ) ->
  tabulate_lexeme lexeme for lexeme from lexemes
  return lexemes

#-----------------------------------------------------------------------------------------------------------
tabulate_lexeme = ( lexeme ) ->
  unless lexeme?
    urge 'Ωilxt___1', lexeme
  else
    alxm      = abbrlxm lexeme
    name_rpr  = lexeme.fqname + ( if lexeme.token.sticky then '🔻' else '' )
    hit_rpr   = if lexeme.hit is '' then '' else rpr lexeme.hit
    data_rpr  = if lexeme.has_data then rpr { lexeme.data..., } else ''
    I         = GUY.trm.lime '▏'
    # g         = GUY.trm.gold
    urge 'Ωilxt___2', f""" \
      #{I} #{ name_rpr          }:<25c; \
      #{I} #{ hit_rpr           }:<10c; \
      #{I} #{ alxm.pos          }:<10c; \
      #{I} #{ data_rpr          }:<50c; \
      #{I}"""
  return lexeme

#===========================================================================================================
module.exports = { condense_lexemes, abbrlxm, tabulate_lexemes, tabulate_lexeme, }

