

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
  bold
  log     }               = GUY.trm
{ hide }                  = GUY.props
{ props: {
    nameit } }            = require '../../../apps/webguy'
_                         = require 'lodash'
{ $isa }                  = require '../../../apps/intertype'


#===========================================================================================================
merge_with_lodash = ( me, others... ) -> _.merge me, others...

#===========================================================================================================
merge_v1 = ( me, others... ) ->
  merge_two me, others[ 0 ]

merge_two = ( me, other ) ->
  for key, descriptor of Object.getOwnPropertyDescriptors me
    debug 'Ω___3', key
  return me


#===========================================================================================================
if module is require.main then await do =>
  do =>
    me    = { 'a': [ { 'b': 2 }, { 'd': 4, e: [ 7, { x: 'X', } ], }, ], b: 'Bme', }
    other = { 'a': [ { 'c': 3 }, {         e: [ 5, { y: 'Y', } ], }, ], b: 'B',  }
    third = { 'a': [ 3,         { 'e': [ 6, ] }, ], b: 'B3rd',  }
    echo()
    help 'Ω___1', d = merge_with_lodash me, other
    echo()
    help 'Ω___2', merge_with_lodash d, third
    echo()
    debug 'Ω___3', merge_with_lodash {}
    debug 'Ω___4', merge_with_lodash 5
    return null
  return null

