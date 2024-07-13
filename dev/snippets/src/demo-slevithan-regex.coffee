

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

#===========================================================================================================
if module is require.main then await do =>
  demo_1()
