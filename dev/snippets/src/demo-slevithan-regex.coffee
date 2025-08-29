

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
  whisper }               = GUY.trm.get_loggers 'demo-slevithan-regex'
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
demo_lexer_3 = ->
  { partial, regex, } = require 'regex'
  { f } = require '../../../apps/effstring'
  hide  = ( owner, name, value ) -> Object.defineProperty owner, name, { enumerable: false, value, writable: true, }
  rx    = regex 'y'
  #===========================================================================================================
  jump_literal_re = regex"""
    ^(
    \[ (?<exclusive_jump> [^ \^ . \s \[ \] ]+ )     |
       (?<inclusive_jump> [^ \^ . \s \[ \] ]+ ) \[  |
    \] (?<exclusive_back> [     .          ]  )     |
       (?<inclusive_back> [     .          ]  ) \]
    )$ """

  #===========================================================================================================
  class Token

    #---------------------------------------------------------------------------------------------------------
    constructor: ( cfg ) ->
      debug 'Ω__36', "new Token", cfg.name, cfg.level, cfg.level.grammar
      @name = cfg.name
      hide @, 'level',        cfg.level
      hide @, 'grammar',      cfg.level.grammar
      hide @, 'matcher',      cfg.matcher
      hide @, 'jump',         @parse_jump cfg.jump  ? null
      hide @, 'jump_literal', cfg.jump              ? null
      return undefined

    #---------------------------------------------------------------------------------------------------------
    match_at: ( start, text ) ->
      @matcher.lastIndex = start
      return null unless ( match = text.match @matcher )?
      return new Lexeme @, match

    #---------------------------------------------------------------------------------------------------------
    parse_jump: ( jump_literal ) ->
      return null unless jump_literal?
      ### TAINT use cleartype ###
      unless ( match = jump_literal.match jump_literal_re )?
        throw new Error "Ω__37 expected a well-formed jump literal, got #{rpr jump_literal}"
      for key, level_name of match.groups
        continue unless level_name?
        [ affinity, action, ] = key.split '_'
        break
      if level_name is '.'
        level = level_name
      else unless ( level = @grammar.levels[ level_name ] )?
        throw new Error "Ω__38 expected name of a known level, got #{rpr level_name}"
      return { affinity, action, level, }


  #===========================================================================================================
  class Lexeme

    #---------------------------------------------------------------------------------------------------------
    constructor: ( token, match ) ->
      # debug 'Ω__39', token
      # debug 'Ω__40', token.jump, token.grammar.levels[ token.jump.level ] if token.jump?
      @name         = token.name
      @fqname       = "#{token.level.name}.#{token.name}"
      @level        = token.level
      @hit          = match[ 0 ]
      @start        = match.index
      @stop         = @start + @hit.length
      @groups       = match.groups ? null
      @jump         = token.jump
      @jump_literal = token.jump_literal
      return undefined


  #===========================================================================================================
  class Level

    #---------------------------------------------------------------------------------------------------------
    constructor: ( cfg ) ->
      cfg    ?= {}
      @name   = cfg.name ? 'gnd'
      hide @, 'grammar',  cfg.grammar
      hide @, 'tokens',   [ ( cfg.tokens ? [] )..., ]
      return undefined

    #---------------------------------------------------------------------------------------------------------
    [Symbol.iterator]: -> yield t for t in @tokens

    #---------------------------------------------------------------------------------------------------------
    new_token: ( cfg ) ->
      if cfg.level? and cfg.level isnt @
        throw new Error "Ω__41 inconsistent level"
      @tokens.push token = new Token { cfg..., level: @, }
      return token

  #===========================================================================================================
  class Grammar

    #---------------------------------------------------------------------------------------------------------
    constructor: ( cfg ) ->
      cfg              ?= {}
      @name             = cfg.name ? 'g'
      @start_name       = null
      hide @, 'start',    null
      hide @, 'levels',   { ( cfg.levels ? {} )..., }
      return undefined

    #---------------------------------------------------------------------------------------------------------
    new_level: ( cfg ) ->
      if @levels[ cfg.name ]?
        throw new Error "Ω__42 level #{rpr level.name} elready exists"
      level                   = new Level { cfg..., grammar: @, }
      @levels[ level.name ]   = level
      @start                 ?= level
      @start_name            ?= level.name
      return level

    #---------------------------------------------------------------------------------------------------------
    tokenize: ( source ) ->
      start   = 0
      info 'Ω__43', rpr source
      level   = @start
      loop
        lexeme  = null
        for token from gnd
          break if ( lexeme = token.match_at start, source )?
        break unless lexeme?
        { name
          fqname
          stop
          hit
          jump
          jump_literal
          groups  } = lexeme
        groups_rpr  = if groups?  then ( rpr { groups..., } ) else ''
        jump_rpr    = jump_literal ? ''
        help 'Ω__44', f"#{start}:>3.0f;:#{stop}:<3.0f; #{fqname}:<20c; #{rpr hit}:<30c; #{jump_rpr}:<15c; #{groups_rpr}"
        start     = stop
      return null


  #===========================================================================================================
  ###
  `Token` defines `matcher`, can jump into a level or back
  `Level` has one or more `Token`s
  `Grammar` has one or more `Level`s
  `Lexeme` produced by a `Token` instance when matcher matches source

  ###
  #===========================================================================================================
  show_jump = ( jump_literal ) ->
    if ( match = jump_literal.match jump_literal_re  )?
      for key, value of match.groups
        continue unless value?
        urge 'Ω__45', ( rpr jump_literal ), ( GUY.trm.grey key ), ( rpr value )
    else
      urge 'Ω__46', ( rpr jump_literal ), null
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
  debug 'Ω__47', g
  debug 'Ω__48', g.levels
  debug 'Ω__49', g.levels.gnd
  debug 'Ω__50', g.levels.gnd.tokens
  debug 'Ω__51', gnd
  debug 'Ω__52', token for token from gnd
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
demo_character_classes = ->
  { partial, regex, } = require 'regex'
  { f } = require '../../../apps/effstring'
  rx    = regex 'y'
  #.........................................................................................................
  letters1 = 'ABCDEFG*[]'
  letters2 = 'abcdefg'
  pattern = rx"""
    ^
    (?<sk>[#{letters1}#{letters2}]*?)
    .. $"""
  info 'Ω__53', pattern
  probe = 'ab]*cdefg'
  #.........................................................................................................
  unless ( match = probe.match pattern )?
    warn reverse "no match for #{rpr probe}"
  else
    help 'Ω__54', { match.groups..., }
  #.........................................................................................................
  return null


#===========================================================================================================
if module is require.main then await do =>
  # demo_1()
  # demo_lexer_3()
  demo_character_classes()
