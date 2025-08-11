

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
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  get_random_float: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_random_tools()
    matchers        = []
    probes          = []
    max_count       = 1e4
    seen            = new Set()
    my_seed_1       = 2873462134
    my_seed_2       = my_seed_1 + 1
    #.......................................................................................................
    do =>
      get_random = new Get_random { seed: my_seed_1, }
      for idx in [ 0 ... max_count ]
        matchers.push t = get_random.float()
        seen.add t
      @eq ( Ωbrbr___1 = -> matchers.every ( t ) -> 0 <= t <= 1 ), true
      @eq ( Ωbrbr___2 = -> seen.size ), max_count
      return null
    #.......................................................................................................
    do =>
      get_random = new Get_random { seed: my_seed_1, }
      for idx in [ 0 ... max_count ]
        probes.push t = get_random.float()
      @eq ( Ωbrbr___3 = -> probes ), matchers
      return null
    #.......................................................................................................
    do =>
      get_random = new Get_random { seed: my_seed_2, }
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
      get_random  = new Get_random { seed: my_seed_1, }
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
      # for _, count of buckets
      #   @eq ( Ωbrbr___9 = -> min <= t <= max ), true
      # debug 'Ωbrbr__10', buckets
      # debug 'Ωbrbr__11', counts = ( v for k, v of buckets )
      # debug 'Ωbrbr__12', counts.length
      return null
    #.......................................................................................................
    do =>
      get_random  = new Get_random { seed: my_seed_1, }
      min         = 100
      max         = 999
      buckets     = {}
      for bucket in [ min ... max ]
        buckets[ Math.floor bucket / 10 ] = 0
      for idx in [ 0 ... max_count ]
        t = get_random.integer { min, max, }
        # debug 'Ωbrbr__13', t
        bucket = Math.floor t / 10
        buckets[ bucket ]++
        @eq ( Ωbrbr__14 = -> min <= t <= max ), true
      for _, count of buckets
        @eq ( Ωbrbr__15 = -> 50 <= count <= 150 ), true
      # debug 'Ωbrbr__16', buckets
      # debug 'Ωbrbr__17', counts = ( v for k, v of buckets )
      # debug 'Ωbrbr__18', counts.length
      return null
    #.......................................................................................................
    do =>
      get_random  = new Get_random { seed: my_seed_1, }
      for idx in [ 0 ... max_count ]
        t = get_random.chr()
        # debug 'Ωbrbr__19', rpr t
      return null
    #.......................................................................................................
    do =>
      get_random  = new Get_random { seed: my_seed_1, }
      result = ( get_random.chr { min: 'A', max: 'Z', } for _ in [ 1 .. 40 ] ).join ''
      @eq ( Ωbrbr__20 = -> result ), 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF'
      return null
    #.......................................................................................................
    do =>
      on_stats    = ( stats ) -> debug 'Ωbrbr__21', stats
      get_random  = new Get_random { seed: my_seed_2, on_stats, }
      result      = ( get_random.chr { min: 'A', max: 'Z', } for _ in [ 1 .. 40 ] ).join ''
      @eq ( Ωbrbr__22 = -> result is 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF' ), false
      @eq ( Ωbrbr__23 = -> /^[A-Z]{40}$/.test result ), true
      return null
    #.......................................................................................................
    do =>
      on_stats    = ( stats ) -> info 'Ωbrbr__24', stats
      get_random  = new Get_random { seed: my_seed_1, on_stats, }
      result      = get_random.text { min: 'A', max: 'Z', length: 40, }
      @eq ( Ωbrbr__25 = -> result ), 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF'
      return null
    #.......................................................................................................
    do =>
      count_attempts  = ( n ) -> attempts[ n ] = ( attempts[ n ] ?= 0 ) + 1
      attempts        = {}
      on_stats        = ( stats ) ->
        help 'Ωbrbr__26', stats
        return null unless stats.name is 'chr'
        count_attempts stats.stats.attempts
        return null
      valid_re    = /// ^ [ \u0020-\u007e \u00a0-\u00ac \u00ae-\u00ff ]{ 150 } $ ///v
      get_random  = new Get_random { seed: null, on_stats, }
      for _ in [ 1 .. 10 ]
        result = get_random.text { min: 0x00, max: 0xff, length: 150, }
        @eq ( Ωbrbr__28 = -> valid_re.test result ), true
      debug 'Ωbrbr__27', attempts
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
