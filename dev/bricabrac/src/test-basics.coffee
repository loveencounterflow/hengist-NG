

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
  whisper }               = GUY.trm.get_loggers 'bricabrac'
{ rpr
  inspect
  echo
  white
  blue
  gold
  grey
  red
  bold
  reverse
  log     }               = GUY.trm
{ f }                     = require '../../../apps/effstring'
write                     = ( p ) -> process.stdout.write p
C                         = require 'ansis'
{ nfa }                   = require '../../../apps/normalize-function-arguments'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'



#===========================================================================================================
settings =
    my_seed_1: 2873462134
    my_seed_2: 2873462134 + 1

#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  get_random_float: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_random_tools()
    matchers        = []
    probes          = []
    max_count       = 1e4
    seen            = new Set()
    #.......................................................................................................
    do =>
      get_random = new Get_random { seed: settings.my_seed_1, }
      for idx in [ 0 ... max_count ]
        matchers.push t = get_random.float()
        seen.add t
      @eq ( Ωbrbr___1 = -> matchers.every ( t ) -> 0 <= t <= 1 ), true
      @eq ( Ωbrbr___2 = -> seen.size ), max_count
      return null
    #.......................................................................................................
    do =>
      get_random = new Get_random { seed: settings.my_seed_1, }
      for idx in [ 0 ... max_count ]
        probes.push t = get_random.float()
      @eq ( Ωbrbr___3 = -> probes ), matchers
      return null
    #.......................................................................................................
    do =>
      get_random = new Get_random { seed: settings.my_seed_2, }
      count = 0
      for idx in [ 0 ... max_count ]
        count++ if ( t = get_random.float() ) in matchers
      @eq ( Ωbrbr___4 = -> count ), 0
      return null
    #.......................................................................................................
    do =>
      get_random    = new Get_random()
      count = 0
      for idx in [ 0 ... max_count ]
        count++ if ( t = get_random.float() ) in matchers
      @eq ( Ωbrbr___5 = -> count < 10 ), true
      return null
    #.......................................................................................................
    do =>
      get_random  = new Get_random { seed: settings.my_seed_1, }
      min         = 100
      max         = 999
      buckets     = {}
      for bucket in [ min ... max ]
        buckets[ Math.floor bucket / 10 ] = 0
      for idx in [ 0 ... max_count ]
        t = get_random.float { min, max, }
        # debug 'Ωbrbr___6', t
        bucket = Math.floor t / 10
        buckets[ bucket ]++
        @eq ( Ωbrbr___7 = -> min <= t <= max ), true
      for _, count of buckets
        @eq ( Ωbrbr___8 = -> 50 <= count <= 150 ), true
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_integer: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_random_tools()
    max_count       = 1e4
    #.......................................................................................................
    do =>
      get_random  = new Get_random { seed: settings.my_seed_1, }
      min         = 100
      max         = 999
      buckets     = {}
      for bucket in [ min ... max ]
        buckets[ Math.floor bucket / 10 ] = 0
      for idx in [ 0 ... max_count ]
        t = get_random.integer { min, max, }
        # debug 'Ωbrbr___9', t
        bucket = Math.floor t / 10
        buckets[ bucket ]++
        @eq ( Ωbrbr__10 = -> min <= t <= max ), true
      for _, count of buckets
        @eq ( Ωbrbr__11 = -> 50 <= count <= 150 ), true
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_chr: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_random_tools()
    max_count       = 1e4
    #.......................................................................................................
    do =>
      get_random  = new Get_random { seed: settings.my_seed_1, }
      for idx in [ 0 ... max_count ]
        t = get_random.chr()
        # debug 'Ωbrbr__12', rpr t
      return null
    #.......................................................................................................
    do =>
      get_random  = new Get_random { seed: settings.my_seed_1, }
      result = ( get_random.chr { min: 'A', max: 'Z', } for _ in [ 1 .. 40 ] ).join ''
      @eq ( Ωbrbr__13 = -> result ), 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF'
      return null
    #.......................................................................................................
    do =>
      on_stats    = ( stats ) ->
        # debug 'Ωbrbr__14', stats
      get_random  = new Get_random { seed: settings.my_seed_2, on_stats, }
      result      = ( get_random.chr { min: 'A', max: 'Z', } for _ in [ 1 .. 40 ] ).join ''
      @eq ( Ωbrbr__15 = -> result is 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF' ), false
      @eq ( Ωbrbr__16 = -> /^[A-Z]{40}$/.test result ), true
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_text: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_random_tools()
    max_count       = 1e4
    #.......................................................................................................
    do =>
      on_stats    = ( stats ) ->
        # info 'Ωbrbr__17', stats
      get_random  = new Get_random { seed: settings.my_seed_1, on_stats, }
      result      = get_random.text { min: 'A', max: 'Z', length: 40, }
      @eq ( Ωbrbr__18 = -> result ), 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF'
      return null
    #.......................................................................................................
    do =>
      count_attempts  = ( n ) -> retries[ n ] = ( retries[ n ] ?= 0 ) + 1
      retries        = {}
      on_stats        = ( stats ) ->
        # help 'Ωbrbr__19', stats
        return null unless stats.name is 'chr'
        count_attempts stats.stats.retries
        return null
      valid_re    = /// ^ [ \u0020-\u007e \u00a0-\u00ac \u00ae-\u00ff ]{ 150 } $ ///v
      get_random  = new Get_random { seed: null, on_stats, }
      for _ in [ 1 .. 1 ]
      # for _ in [ 1 .. 10 ]
        result = get_random.text { min: 0x00, max: 0xff, length: 150, }
        @eq ( Ωbrbr__20 = -> valid_re.test result ), true
      # debug 'Ωbrbr__21', retries
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_set_of_chrs: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_random_tools()
    max_count       = 1e4
    #.......................................................................................................
    do =>
      retries         = 0
      on_stats        = ( stats ) ->
        retries += stats.stats.retries
        # urge 'Ωbrbr__22', stats if stats.name is 'set_of_chrs'
        return null
      valid_re    = /// ^ [ \u0020-\u007e \u00a0-\u00ac \u00ae-\u00ff ]{ 50 } $ ///v
      get_random  = new Get_random { seed: null, on_stats, }
      for _ in [ 1 .. 20 ]
        result      = get_random.set_of_chrs { min: 0x00, max: 0xff, size: 50, }
        result_rpr  = [ result..., ].join ''
        @eq ( Ωbrbr__23 = -> valid_re.test result_rpr ), true
        # debug 'Ωbrbr__24', retries
        retries = 0
      return null
    #.......................................................................................................
    do =>
      retries         = 0
      on_stats        = ( stats ) ->
        retries += stats.stats.retries
        # urge 'Ωbrbr__25', stats if stats.name is 'set_of_chrs'
        return null
      valid_re    = /// ^ [ 0-9 ]{ 10 } $ ///v
      get_random  = new Get_random { seed: null, on_stats, }
      for _ in [ 1 .. 20 ]
        result      = get_random.set_of_chrs { min: '0', max: '9', size: 10, }
        result_rpr  = [ result..., ].join ''
        @eq ( Ωbrbr__26 = -> result.size              ), 10
        @eq ( Ωbrbr__27 = -> valid_re.test result_rpr ), true
        # debug 'Ωbrbr__28', retries, rpr result
        retries = 0
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_set_of_texts: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_random_tools()
    max_count       = 1e4
    #.......................................................................................................
    do =>
      retries         = 0
      on_stats        = ( stats ) ->
        retries += stats.stats.retries
        # urge 'Ωbrbr__29', stats if stats.name is 'set_of_chrs'
        return null
      valid_re    = /// ^ [ 0-9 ]{ 3 } $ ///v
      get_random  = new Get_random { seed: null, on_stats, }
      for _ in [ 1 .. 20 ]
        result      = get_random.set_of_texts { min: '0', max: '9', length: 3, size: 10, }
        @eq ( Ωbrbr__30 = -> result.size              ), 10
        for random_text from result
          @eq ( Ωbrbr__31 = -> valid_re.test random_text ), true
        # debug 'Ωbrbr__32', retries, rpr result
        retries = 0
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_text_of_variable_length: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_random_tools()
    matchers        = [ 'εΧΚ', 'ονήφ', 'ΒΙ', 'ΟΠΟςΛ', 'η', 'ψψΩο', 'κΝε', 'Κμίκ', 'υΙ', 'ΟΛ', ]
    #.......................................................................................................
    do =>
      on_stats    = ( stats ) ->
        # info 'Ωbrbr__33', stats
      get_random  = new Get_random { seed: settings.my_seed_1, on_stats, }
      for idx in [ 0 .. 9 ]
        result      = get_random.text { min: 'Α', max: 'ω', min_length: 1, max_length: 5, }
        debug 'Ωbrbr__35', rpr result
        @eq ( Ωbrbr__36 = -> result ), matchers[ idx ]
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_set_of_texts_of_variable_length: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_random_tools()
    # matchers        = [ 'εΧΚ', 'ονήφ', 'ΒΙ', 'ΟΠΟςΛ', 'η', 'ψψΩο', 'κΝε', 'Κμίκ', 'υΙ', 'ΟΛ', ]
    #.......................................................................................................
    do =>
      on_stats    = ( stats ) ->
        # info 'Ωbrbr__33', stats
      get_random  = new Get_random { seed: settings.my_seed_1, on_stats, }
      result      = get_random.set_of_texts { min: '⼀', max: '⿕', min_length: 1, max_length: 10, }
      debug 'Ωbrbr__35', result
      return null
    #.......................................................................................................
    return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
  #.........................................................................................................
  return null
