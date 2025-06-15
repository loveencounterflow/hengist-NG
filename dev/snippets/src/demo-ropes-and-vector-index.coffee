

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
  whisper }               = GUY.trm.get_loggers 'intertype/test-basics'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm

#-----------------------------------------------------------------------------------------------------------
demo_1 = ->
  # debug 'Ω___1', k for k of require 'rope-sequence'
  # debug 'Ω___2', { RopeSequence, } = require 'rope-sequence'
  RopeSequence = require 'rope-sequence'
  # debug 'Ω___3', rope = new RopeSequence()
  debug 'Ω___4', rope = RopeSequence.empty
  debug 'Ω___5', RopeSequence.empty
  debug 'Ω___6', RopeSequence.from 'abc'
  debug 'Ω___7', rope.length
  debug 'Ω___8', rope = rope.append RopeSequence.from 'abc'
  debug 'Ω___9', rope = rope.append RopeSequence.from 'def'
  debug 'Ω__10', rope = rope.append RopeSequence.from 'ghi'
  debug 'Ω__11', rope = rope.append RopeSequence.from 'jkl'
  debug 'Ω__12', rope = rope.append 'jkl'
  debug 'Ω__13', rope = rope.append 7
  debug 'Ω__14', rope.length
  debug 'Ω__15', rope.get 0
  debug 'Ω__16', rope.get 1
  debug 'Ω__17', rope.flatten()
  debug 'Ω__18', rope.forEach ( ( element, idx ) -> help 'Ω__19', idx, rpr element ), 0, rope.length
  return null





#===========================================================================================================
if module is require.main then await do =>
  demo_1()
