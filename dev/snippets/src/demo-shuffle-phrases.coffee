


'use strict'

#===========================================================================================================
GUY                       = require 'guy'
{ rpr
  inspect
  echo
  reverse }               = GUY.trm
{ info
  warn
  urge
  debug }                 = GUY.trm.get_loggers 'demo-shuffle-phrases'
types                     = new ( require '../../../apps/intertype' ).Intertype()


#-----------------------------------------------------------------------------------------------------------
shuffle_phrases = ({ text, shuffler, }) ->
  types.validate.nonempty.text text
  types.validate.function shuffler ?= GUY.rnd.shuffle.bind GUY.rnd
  text                  = text.trim()
  phrases               = ( phrase[ 0 ] for phrase from text.matchAll /[^.;]+(?:[.;]|$)/g )
  last_idx              = phrases.length - 1
  phrases[ last_idx ]  += ';' unless /[.;]$/.test phrases[ last_idx ]
  for idx in [ 0 .. last_idx ]
    phrases[ idx ] = ( if phrases[ idx ].startsWith ' ' then '' else ' ' ) + phrases[ idx ]
  R                     = ( ( shuffler phrases ).join '' ).trim()
  R                     = R.replace /[\s.;]$/, ''
  return R

#-----------------------------------------------------------------------------------------------------------
factorial = ( n ) -> if n <= 1 then 1 else ( factorial n - 1 ) * n


#===========================================================================================================
if module is require.main then await do =>
  # debug 'Ω___1', factorial i for i in [ 0 ... 100 ]
  text    = process.argv[ 2 ]
  paragon = shuffle_phrases { text, shuffler: ( ( x ) -> x ), }
  echo GUY.trm.grey paragon
  known   = new Set()
  for _ in [ 1 .. 10 ]
    echo()
    candidate = shuffle_phrases { text, }
    if candidate is paragon
      warn 'Ω___1', "same"
      continue
    if known.has candidate
      warn 'Ω___1', "repetition"
      continue
    known.add candidate
    echo candidate
  return null


