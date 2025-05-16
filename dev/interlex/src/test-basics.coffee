
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
demo = ->
  ILX         = require '../../../apps/interlex'
  { Grammar
    rx      } = ILX
  #===========================================================================================================
  show_jump = ( jump_literal ) ->
    if ( match = jump_literal.match ILX._jump_literal_re  )?
      for key, value of match.groups
        continue unless value?
        info 'Ω__10', ( rpr jump_literal ), ( GUY.trm.grey key ), ( rpr value )
    else
      info 'Ω__11', ( rpr jump_literal ), null
    return null
  show_jump 'abc'
  show_jump '[abc['
  show_jump '[abc'
  show_jump 'abc['
  show_jump '[string11'
  show_jump 'string11['
  show_jump 'abc]'
  show_jump ']abc'
  show_jump '.]'
  show_jump '].'
  #===========================================================================================================
  g         = new Grammar { name: 'g', }
  gnd       = g.new_level { name: 'gnd', }
  string11  = g.new_level { name: 'string11', }
  string12  = g.new_level { name: 'string12', }
  #.........................................................................................................
  gnd.new_token       { name: 'name',           matcher: rx"(?<initial>[A-Z])[a-z]*", }
  gnd.new_token       { name: 'number',         matcher: rx"[0-9]+",                  }
  gnd.new_token       { name: 'string11_start', matcher: rx"(?!<\\)'",                jump: 'string11[', }
  gnd.new_token       { name: 'string12_start', matcher: rx'(?!<\\)"',                jump: 'string12[', }
  gnd.new_token       { name: 'paren_start',    matcher: rx"\(",                      }
  gnd.new_token       { name: 'paren_stop',     matcher: rx"\)",                      }
  gnd.new_token       { name: 'other',          matcher: rx"[A-Za-z0-9]+",            }
  gnd.new_token       { name: 'ws',             matcher: rx"\s+",                     }
  #.........................................................................................................
  string11.new_token  { name: 'string11_stop',  matcher: rx"'",                       jump: '].', }
  string11.new_token  { name: 'text',           matcher: rx"[^']*",                   }
  #.........................................................................................................
  debug 'Ω__12', g
  debug 'Ω__13', g.levels
  debug 'Ω__14', g.levels.gnd
  debug 'Ω__15', g.levels.gnd.tokens
  debug 'Ω__16', gnd
  debug 'Ω__17', token for token from gnd
  #.........................................................................................................
  texts = [
    "Alice in Cairo 1912 (approximately)"
    "Alice in Cairo 1912 'approximately'"
    ]
  #.........................................................................................................
  for text in texts
    g.tokenize text
  #.........................................................................................................
  return null


#===========================================================================================================
if module is require.main then await do =>
  demo()
