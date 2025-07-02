

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
  white
  red
  gold
  blue
  bold
  reverse
  log     }               = GUY.trm
{ f }                     = require '../../../apps/effstring'

#-----------------------------------------------------------------------------------------------------------
demo_1 = ->
  ILX                 = require '../../../apps/interlex'
  { Grammar
    Level
    Token
    Lexeme
    rx
    internals       } = ILX
  SLR                 = internals.slevithan_regex
  jsid_re             = SLR.regex""" [ $ _ \p{ID_Start} ] [ $ _ \u200C \u200D \p{ID_Continue} ]* """
  tilde_jsid_re       = SLR.regex""" ~ #{jsid_re} """
  #.........................................................................................................
  cs          = new Grammar { emit_signals: true, supply_eol: true, }
  gnd         = cs.new_level { name: 'gnd', }
  quote11_lit = cs.new_level { name: 'quote11_lit', }
  rol_comment = cs.new_level { name: 'rol_comment', }
  error       = cs.new_level { name: 'error', }
  #.........................................................................................................
  indentation_re    = /// (?<= \n ) \x20+ ///
  indentation_cast  = ({ hit, start, source, data, new_lexeme, lexeme, }) ->
    if ( hit.length %% 2 ) is 0
      data.length = hit.length
      data.depth  = hit.length / 2
      yield lexeme
    else
      yield new_lexeme 'error.odd_indentation', start, source, { length: hit.length, }
      # yield lexeme
    return null
  #.........................................................................................................
  other_re    = /./
  other_cast  = ({ hit, start, source, new_lexeme, lexeme, }) ->
    yield new_lexeme 'error.illegal', start, source #, { length: hit.length, }
      # yield lexeme
    return null
  #.........................................................................................................
  gnd.new_token 'if',                 'if'
  gnd.new_token 'then',               'then'
  gnd.new_token 'else',               'else'
  gnd.new_token 'x_tildeidentifier',  tilde_jsid_re
  gnd.new_token 'identifier',         jsid_re
  gnd.new_token 'slimarrow',          '->'
  gnd.new_token 'fatarrow',           '=>'
  gnd.new_token 'x_slimarrow',        '<->'
  gnd.new_token 'x_fatarrow',         '<=>'
  gnd.new_token 'at',                 '@'
  gnd.new_token 'nl',                 '\n'
  gnd.new_token 'equals',             '='
  gnd.new_token 'minus',              '-'
  gnd.new_token 'plus',               '+'
  gnd.new_token 'power',              '**'
  gnd.new_token 'times',              '*'
  gnd.new_token 'comma',              ','
  gnd.new_token 'semicolon',          ';'
  gnd.new_token 'hash',               '#', { jump: 'rol_comment!', }
  gnd.new_token 'openparen',          '('
  gnd.new_token 'closeparen',         ')'
  gnd.new_token 'openbracket',        '['
  gnd.new_token 'closebracket',       ']'
  gnd.new_token 'opencurly',          '{'
  gnd.new_token 'closecurly',         '}'
  gnd.new_token 'x_return',           '<-'
  gnd.new_token 'indentation',        indentation_re, { cast: indentation_cast, }
  gnd.new_token 'quote13',            "'''"
  gnd.new_token 'quote11',            "'", { jump: 'quote11_lit!', }
  gnd.new_token 'quote23',            '"""'
  gnd.new_token 'quote21',            '"'
  gnd.new_token 'digits',             /// [ 0-9 ] ///, { merge: true, }
  gnd.new_token 'dot',                '.'
  gnd.new_token 'ws',                 /// (?<! \n ) \s+ ///
  gnd.new_token 'other',              other_re, { cast: other_cast, merge: true, }
  # gnd.new_token 'other',              /// [^ \x00-\/ :-\@ ] ///, { merge: true, }
  # gnd.new_token 'other',              /// . ///, { error: true, merge: true, }
  #.........................................................................................................
  quote11_lit.new_token 'quote11',  "'", { jump: '..', }
  quote11_lit.new_token 'literal',  /// [^ ' ]+ ///
  #.........................................................................................................
  rol_comment.new_token 'literal',  /// [^ \n ]+ ///
  rol_comment.new_token 'nl',       '\n', { jump: '..!', }
  #.........................................................................................................
  error.new_token       'illegal',          other_re, { merge: true, }
  error.new_token       'odd_indentation',  indentation_re
  #.........................................................................................................
  source = "f = ( arc, bo ) -> '(' + arc + ', ' + bo + ')'; g = => # comment"
  source = "f = ->\n  @some_method humm # comment\n  @other_method()"
  source = "f = ->\n  @some_method humm, '\n' # comment\n   @other_method()"
  source = "d.f = ( arc, bo ) ->\n  <- arc * bo\ncube = ( x ) <=> x ** 3.00"
  source = "x = 45 ~mul 31; ??? z = 0 if x ~equals y; id = 'x-96'"
  #.........................................................................................................
  for token from cs.scan source
    continue if token.fqname is 'gnd.ws'
    data  = if data? and ( Object.keys token.data ).length > 0 then rpr { token.data..., } else ''
    hit   = if token.hit is '' then '' else reverse bold ( rpr token.hit ).replace /^['"](.*)['"]$/gsv, '$1'
    if token.is_error
      warn 'Ω___1', f"#{white token.fqname}:<40c; | #{red reverse bold hit}:<70c; | #{blue data}"
    else
      help 'Ω___2', f"#{white token.fqname}:<40c; | #{gold hit}:<70c; | #{blue data}"
  return null





#===========================================================================================================
if module is require.main then await do =>
  demo_1()
  # re      = /// (?<= a ) b ///y
  # source  = '01b3ab6'
  # for idx in [ 0 .. 7 ]
  #   re.lastIndex = idx; debug 'Ω___3', idx, ( rpr source[ idx ... ] ), source.match re
