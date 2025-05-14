

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
  { partial, regex, } = require 'regex'
  help 'Ω___1', regex'helo\sworld'
  help 'Ω___2', regex'(a)(?>b)(c)d'
  help 'Ω___3', regex'(abc)+(?:def)*'
  help 'Ω___4', regex"""(abc)+#{'[*+]'}"""
  # help 'Ω___5', regex"""(abc)+#{/helo*/i}"""
  help 'Ω___6', regex"""^(?>\w+\s?)+$"""
  #.........................................................................................................
  time = ( f ) ->
    t0 = Date.now()
    whisper '—'.repeat 108
    f()
    whisper '.'.repeat 108
    t1 = Date.now()
    dt = ( t1 - t0 ) / 1000
    info "time: #{dt}s"
    whisper '—'.repeat 108
  #.........................................................................................................
  do =>
    probes = [
      # "A target string that takes a long time or can even hang your browser!"
      # "A target string that takes a long time or can even hang your browser"
      "shorter string 123 123 123 123 123!"
      "shorter string 123 123 123 123 123"
      ]
    time =>
      spaced_words_re = regex"""^(?>\w+\s?)+$"""
      for probe in probes
        help 'Ω___7', probe.match spaced_words_re
      return null
    time =>
      spaced_words_re = regex"""^(?>(?>\w)\w*\s?)+$"""
      for probe in probes
        help 'Ω___8', probe.match spaced_words_re
      return null
    time =>
      spaced_words_re = regex"""^(\w+\s?)+$"""
      for probe in probes
        help 'Ω___9', probe.match spaced_words_re
      return null
  #.........................................................................................................
  time =>
    patterns = [
      /^a(bc|b)c$/u
      regex"""^a(bc|b)c$"""
      regex"""^a(?>bc|b)c$"""
      regex"""^a(?>b|bc)c$"""
      # regex"""^ab++c"""
      ]
    help 'Ω__10', patterns
    probes = [ 'abc', 'abcc', ]
    for pattern in patterns
      for probe in probes
        help 'Ω__11', probe, pattern, probe.match pattern
    return null
  #.........................................................................................................
  do =>
    info 'Ω__12', /^([abc]{0})x$/.test 'x'
    info 'Ω__13', /^([abc]{0})x$/.test 'a'
    info 'Ω__14', /^([abc]{0})x$/.test 'ax'
    info 'Ω__15', /^(?<suffix>[abc]){0}x\k<suffix>$/.test 'x'
    info 'Ω__16', /^(?<suffix>[abc]){0}x\k<suffix>$/.test 'xa'
    info 'Ω__17', /^(?<suffix>[abc]){0}x\k<suffix>$/.test 'bxb'
    info 'Ω__18', ( regex"""^
      (?<suffix> [abc] ){0}
      x \g<suffix>
      $""").test 'xa'
    info 'Ω__19', ( regex"""^
      (?<suffix> [abc] ){0}
      x \g<suffix> \g<suffix> \g<suffix>
      $""").test 'xacb'
    info 'Ω__20', ( regex"""^
      (?<suffix> (?<thesuffix> [abc] ) ){0}
      x \g<suffix> \g<suffix> \g<suffix>
      $""" )
    info 'Ω__21', 'xbca'.match ( regex"""^
      (?<suffix> (?<thesuffix> [abc] ) ){0}
      x \g<suffix> \g<suffix> \g<suffix>
      $""" )
    return null
  #.........................................................................................................
  do =>
    ip_address_re = regex"""
      \b
      (?<b1> \g<byte> ) \.
      (?<b2> \g<byte> ) \.
      (?<b3> \g<byte> ) \.
      (?<b4> \g<byte> )
      \b

      # The {0} quantifier allows defining a subpattern without matching it
      (?<byte> 2[0-4]\d | 25[0-5] | 1\d\d | [1-9]?\d ){0}
      """
    match = '123.45.21.4'.match ip_address_re
    urge 'Ω__22', { match.groups..., }
    return null
  #.........................................................................................................
  urge 'Ω__23', regex"(?<outer>a#{regex"(?<inner>bc)"}z)"
  urge 'Ω__24', regex"(?<outer>a#{partial"(?<inner>bc)"}z)"
  urge 'Ω__25', regex"\\"
  urge 'Ω__26', regex"\\\\"
  urge 'Ω__27', regex"(?<#{'outer'}>a#{partial"(?<#{'inner'}>bc)"}z)"
  urge 'Ω__28', regex"^(?:(?!\b(the|an?)\b).)+"
  return null


#-----------------------------------------------------------------------------------------------------------
demo_lexer_1 = ->
  { partial, regex, } = require 'regex'
  #.........................................................................................................
  urge 'Ω__29', a = ( regex 'y' )"(?<name>[a-z]+)"
  urge 'Ω__30', b = ( regex 'y' )"#{a}\s+in\s+(?<place>[a-z]+)"
  if ( match = "alice in cairo".match b )?
    info 'Ω__31', { match.groups..., }
  return null

#-----------------------------------------------------------------------------------------------------------
demo_lexer_2 = ->
  { partial, regex, } = require 'regex'
  { f } = require '../../../apps/effstring'
  rx    = regex 'y'
  patterns = {
    name:             { re: rx"(?<initial>[A-Z])[a-z]*", }
    number:           { re: rx"[0-9]+",                  }
    sq_string_start:  { re: rx"(?!<\\)'",                }
    paren_start:      { re: rx"\(",                      }
    paren_stop:       { re: rx"\)",                      }
    other:            { re: rx"[A-Za-z0-9]+",            }
    ws:               { re: rx"\s+",                     }
    }
  urge 'Ω__32', patterns
  #.........................................................................................................
  tokenize = ( text ) ->
    stop      = 0
    info 'Ω__33', rpr text
    loop
      for name, { re, } of patterns
        # debug 'Ω__34', f"#{name}:>20c;: #{re}"
        hit           = null
        re.lastIndex  = stop
        if ( match = text.match re )?
          break
      break unless match?
      hit       = match[ 0 ]
      start     = stop
      stop     += hit.length
      help 'Ω__35', f"#{start}:>3.0f;:#{stop}:<3.0f; #{name}:>20c;: #{rpr hit}:<30c; #{rpr { ( match.groups ? {} )..., }}"
    return null
  #.........................................................................................................
  texts = [
    "Alice in Cairo 1912 (approximately)"
    "Alice in Cairo 1912 'approximately'"
    ]
  #.........................................................................................................
  for text in texts
    tokenize text
  #.........................................................................................................
  return null

#-----------------------------------------------------------------------------------------------------------
demo_lexer_2 = ->
  { partial, regex, } = require 'regex'
  { f } = require '../../../apps/effstring'
  rx    = regex 'y'
  #===========================================================================================================
  class Token

    #---------------------------------------------------------------------------------------------------------
    constructor: ( name, cfg ) ->
      @name = name
      @re   = cfg.re
      @jump = cfg.jump ? null
      return undefined

    #---------------------------------------------------------------------------------------------------------
    match_at: ( start, text ) ->
      @re.lastIndex = start
      return null unless ( match = text.match @re )?
      return new Lexeme @, match


  #===========================================================================================================
  class Lexeme

    #---------------------------------------------------------------------------------------------------------
    constructor: ( token, match ) ->
      @name   = token.name
      @hit    = match[ 0 ]
      @start  = match.index
      @stop   = @start + @hit.length
      @groups = match.groups ? null
      return undefined


  #===========================================================================================================
  level = [
    new Token 'name',            { re: rx"(?<initial>[A-Z])[a-z]*", }
    new Token 'number',          { re: rx"[0-9]+",                  }
    new Token 'sq_string_start', { re: rx"(?!<\\)'",                jump: '[string', }
    new Token 'paren_start',     { re: rx"\(",                      }
    new Token 'paren_stop',      { re: rx"\)",                      }
    new Token 'other',           { re: rx"[A-Za-z0-9]+",            }
    new Token 'ws',              { re: rx"\s+",                     }
    ]
  #.........................................................................................................
  debug 'Ω__36', level
  tokenize = ( text ) ->
    start   = 0
    info 'Ω__37', rpr text
    loop
      lexeme  = null
      for token in level
        if ( lexeme = token.match_at start, text )?
          break
      break unless lexeme?
      { name
        stop
        hit
        groups  } = lexeme
      groups_rpr  = if groups? then ( rpr { groups..., } ) else ''
      help 'Ω__38', f"#{start}:>3.0f;:#{stop}:<3.0f; #{name}:>20c;: #{rpr hit}:<30c; #{groups_rpr}"
      start     = stop
    return null
  #.........................................................................................................
  texts = [
    "Alice in Cairo 1912 (approximately)"
    "Alice in Cairo 1912 'approximately'"
    ]
  #.........................................................................................................
  for text in texts
    tokenize text
  #.........................................................................................................
  return null


#===========================================================================================================
if module is require.main then await do =>
  # demo_1()
  demo_lexer_2()
