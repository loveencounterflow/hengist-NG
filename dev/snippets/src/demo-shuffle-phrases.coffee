


'use strict'

#===========================================================================================================
GUY                       = require 'guy'
{ rpr
  inspect
  echo
  reverse }               = GUY.trm
{ info
  urge
  debug }                 = GUY.trm.get_loggers 'demo-shuffle-phrases'
types                     = new ( require '../../../apps/intertype' ).Intertype()


#-----------------------------------------------------------------------------------------------------------
shuffle_phrases = ( text ) ->
  types.validate.nonempty.text text
  text                  = text.trim()
  phrases               = ( phrase[ 0 ] for phrase from text.matchAll /[^.;]+(?:[.;]|$)/g )
  last_idx              = phrases.length - 1
  phrases[ last_idx ]  += ';' unless /[.;]$/.test phrases[ last_idx ]
  for idx in [ 0 .. last_idx ]
    phrases[ idx ] = ( if phrases[ idx ].startsWith ' ' then '' else ' ' ) + phrases[ idx ]
  R                     = ( ( GUY.rnd.shuffle phrases ).join '' ).trim()
  R                     = R.replace /[\s.;]$/, ''
  return R


#===========================================================================================================
if module is require.main then await do =>
  for _ in [ 1 .. 5 ]
    echo()
    echo '[]', shuffle_phrases process.argv[ 2 ]
  return null


