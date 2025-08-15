

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
      internals,  } = SFMODULES.unstable.require_get_random()
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
      for value, idx in matchers
        debug 'Ωbrbr___1', { idx, value, } unless 0 < value <= 1
      @eq ( Ωbrbr___2 = -> matchers.every ( t ) -> 0 < t <= 1 ), true
      @eq ( Ωbrbr___3 = -> seen.size ), max_count
      return null
    #.......................................................................................................
    do =>
      get_random = new Get_random { seed: settings.my_seed_1, }
      for idx in [ 0 ... max_count ]
        probes.push t = get_random.float()
      @eq ( Ωbrbr___4 = -> probes ), matchers
      return null
    #.......................................................................................................
    do =>
      get_random = new Get_random { seed: settings.my_seed_2, }
      count = 0
      for idx in [ 0 ... max_count ]
        count++ if ( t = get_random.float() ) in matchers
      @eq ( Ωbrbr___5 = -> count ), 0
      return null
    #.......................................................................................................
    do =>
      get_random    = new Get_random()
      count = 0
      for idx in [ 0 ... max_count ]
        count++ if ( t = get_random.float() ) in matchers
      @eq ( Ωbrbr___6 = -> count < 10 ), true
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
        # debug 'Ωbrbr___7', t
        bucket = Math.floor t / 10
        buckets[ bucket ]++
        @eq ( Ωbrbr___8 = -> min <= t <= max ), true
      for _, count of buckets
        @eq ( Ωbrbr___9 = -> 50 <= count <= 150 ), true
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_integer: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
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
        # debug 'Ωbrbr__10', t
        bucket = Math.floor t / 10
        buckets[ bucket ]++
        @eq ( Ωbrbr__11 = -> min <= t <= max ), true
      for _, count of buckets
        @eq ( Ωbrbr__12 = -> 50 <= count <= 150 ), true
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_chr: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    max_count       = 1e4
    #.......................................................................................................
    do =>
      get_random  = new Get_random { seed: settings.my_seed_1, }
      for idx in [ 0 ... max_count ]
        t = get_random.chr()
        # debug 'Ωbrbr__13', rpr t
      return null
    #.......................................................................................................
    do =>
      get_random  = new Get_random { seed: settings.my_seed_1, }
      result = ( get_random.chr { min: 'A', max: 'Z', } for _ in [ 1 .. 40 ] ).join ''
      @eq ( Ωbrbr__14 = -> result ), 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF'
      return null
    #.......................................................................................................
    do =>
      on_stats    = ( stats ) ->
        # debug 'Ωbrbr__15', stats
      get_random  = new Get_random { seed: settings.my_seed_2, on_stats, }
      result      = ( get_random.chr { min: 'A', max: 'Z', } for _ in [ 1 .. 40 ] ).join ''
      @eq ( Ωbrbr__16 = -> result is 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF' ), false
      @eq ( Ωbrbr__17 = -> /^[A-Z]{40}$/.test result ), true
      return null
    #.......................................................................................................
    do =>
      on_stats    = ( stats ) ->
        # debug 'Ωbrbr__18', stats
      get_random  = new Get_random { seed: settings.my_seed_2, on_stats, }
      result      = ( get_random.chr { max: 0xff, filter: /[aeiouyAEIOUY]/, } for _ in [ 1 .. 40 ] ).join ''
      # debug 'Ωbrbr__19', rpr result
      @eq ( Ωbrbr__20 = -> /^[aeiouyAEIOUY]{40}$/.test result ), true
      @eq ( Ωbrbr__21 = -> result ), 'yyUyIuuUaaIuUaUIIyOIoAYEOiOYIuiOuaiAUUeE'
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_chr_producer: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    #.......................................................................................................
    do =>
      rounds      = 0
      on_stats    = ( stats ) -> rounds += stats.rounds if stats.name is 'chr'
      get_random  = new Get_random { seed: settings.my_seed_2, on_stats, }
      chr         = get_random.chr_producer { max: 0xff, filter: /[aeiouyAEIOUY]/, }
      result      = ( chr() for _ in [ 1 .. 40 ] ).join ''
      # debug 'Ωbrbr__22', rounds, ( rpr result )
      @eq ( Ωbrbr__23 = -> /^[aeiouyAEIOUY]{40}$/.test result ), true
      @eq ( Ωbrbr__24 = -> result ), 'yyUyIuuUaaIuUaUIIyOIoAYEOiOYIuiOuaiAUUeE'
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_text: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    max_count       = 1e4
    #.......................................................................................................
    do =>
      on_stats    = ( stats ) ->
        # info 'Ωbrbr__25', stats
      get_random  = new Get_random { seed: settings.my_seed_1, on_stats, }
      result      = get_random.text { min: 'A', max: 'Z', length: 40, }
      @eq ( Ωbrbr__26 = -> result ), 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF'
      return null
    #.......................................................................................................
    do =>
      count_attempts  = ( n ) -> rounds[ n ] = ( rounds[ n ] ?= 0 ) + 1
      rounds        = {}
      on_stats        = ( stats ) ->
        # help 'Ωbrbr__27', stats
        return null unless stats.name is 'chr'
        count_attempts stats.rounds
        return null
      valid_re    = /// ^ [ \u0020-\u007e \u00a0-\u00ac \u00ae-\u00ff ]{ 150 } $ ///v
      get_random  = new Get_random { seed: null, on_stats, }
      for _ in [ 1 .. 1 ]
      # for _ in [ 1 .. 10 ]
        result = get_random.text { min: 0x00, max: 0xff, length: 150, }
        @eq ( Ωbrbr__28 = -> valid_re.test result ), true
      # debug 'Ωbrbr__29', rounds
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_set_of_chrs: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    max_count       = 1e4
    #.......................................................................................................
    do =>
      rounds         = 0
      on_stats        = ( stats ) ->
        rounds += stats.rounds
        # urge 'Ωbrbr__30', stats if stats.name is 'set_of_chrs'
        return null
      valid_re    = /// ^ [ \u0020-\u007e \u00a0-\u00ac \u00ae-\u00ff ]{ 50 } $ ///v
      get_random  = new Get_random { seed: null, on_stats, }
      for _ in [ 1 .. 20 ]
        result      = get_random.set_of_chrs { min: 0x00, max: 0xff, size: 50, }
        result_rpr  = [ result..., ].join ''
        @eq ( Ωbrbr__31 = -> valid_re.test result_rpr ), true
        # debug 'Ωbrbr__32', rounds
        rounds = 0
      return null
    #.......................................................................................................
    do =>
      rounds         = 0
      on_stats        = ( stats ) ->
        rounds += stats.rounds
        # urge 'Ωbrbr__33', stats if stats.name is 'set_of_chrs'
        return null
      valid_re    = /// ^ [ 0-9 ]{ 10 } $ ///v
      get_random  = new Get_random { seed: null, on_stats, }
      for _ in [ 1 .. 20 ]
        result      = get_random.set_of_chrs { min: '0', max: '9', size: 10, }
        result_rpr  = [ result..., ].join ''
        @eq ( Ωbrbr__34 = -> result.size              ), 10
        @eq ( Ωbrbr__35 = -> valid_re.test result_rpr ), true
        # debug 'Ωbrbr__36', rounds, rpr result
        rounds = 0
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_set_of_texts: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    max_count       = 1e4
    #.......................................................................................................
    do =>
      rounds         = 0
      on_stats        = ( stats ) ->
        rounds += stats.rounds
        return null
      valid_re    = /// ^ [ 0-9 ]{ 3 } $ ///v
      get_random  = new Get_random { seed: null, on_stats, }
      for _ in [ 1 .. 1 ]
        result      = get_random.set_of_texts { min: '0', max: '9', length: 3, size: 10, }
        @eq ( Ωbrbr__37 = -> result.size              ), 10
        for random_text from result
          @eq ( Ωbrbr__38 = -> valid_re.test random_text ), true
        # debug 'Ωbrbr__39', rounds, rpr result
        rounds = 0
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_text_of_variable_length: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    matchers        = [ 'εΧΚ', 'ονήφ', 'ΒΙ', 'ΟΠΟςΛ', 'η', 'ψψΩο', 'κΝε', 'Κμίκ', 'υΙ', 'ΟΛ', ]
    #.......................................................................................................
    do =>
      result_rounds   = null
      on_stats        = ( stats ) =>
        # info 'Ωbrbr__40', stats
        result_rounds = stats.rounds
        @eq ( Ωbrbr__41 = -> result_rounds >= 0 ), true
      get_random  = new Get_random { seed: settings.my_seed_1, on_stats, }
      for idx in [ 0 .. 9 ]
        result      = get_random.text { min: 'Α', max: 'ω', min_length: 1, max_length: 5, }
        # debug 'Ωbrbr__42', rpr result
        @eq ( Ωbrbr__43 = -> result ), matchers[ idx ]
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_text_of_variable_length_with_filter: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    result_matchers = [ 'Ακθ', 'ΑΣ', 'ΑΜ', 'ΑίΥΔ', 'ΑήδΛ', 'ΑήςδΠ', 'ΑξΡΤΘ', 'ΑΤΚΞ', 'ΑγιΔε', 'Αή', ]
    round_matchers  = [ 34, 15, 189, 121, 75, 47, 87, 43, 119, 200, ]
    #.......................................................................................................
    do =>
      result_rounds  = null
      on_stats        = ( stats ) =>
        return null unless stats.name is 'text'
        # info 'Ωbrbr__44', idx, stats
        result_rounds = stats.rounds
        @eq ( Ωbrbr__45 = ->  result_rounds ), round_matchers[ idx ]
      get_random  = new Get_random { seed: settings.my_seed_1, on_stats, }
      for idx in [ 0 .. 9 ]
        result      = get_random.text { min: 'Α', max: 'ω', min_length: 1, max_length: 5, filter: /^Α/v, }
        # debug 'Ωbrbr__46', rpr result
        @eq ( Ωbrbr__47 = -> /^Α[Α-ω]{0,4}$/v.test result ), true
        @eq ( Ωbrbr__48 = -> result ), result_matchers[ idx ]
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_text_producer: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    result_matchers = [ 'Ακθ', 'ΑΣ', 'ΑΜ', 'ΑίΥΔ', 'ΑήδΛ', 'ΑήςδΠ', 'ΑξΡΤΘ', 'ΑΤΚΞ', 'ΑγιΔε', 'Αή', ]
    round_matchers  = [ 34, 15, 189, 121, 75, 47, 87, 43, 119, 200, ]
    #.......................................................................................................
    do =>
      result_rounds  = null
      on_stats        = ( stats ) =>
        return null unless stats.name is 'text'
        # info 'Ωbrbr__49', idx, stats
        result_rounds = stats.rounds
        @eq ( Ωbrbr__50 = ->  result_rounds ), round_matchers[ idx ]
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      get_random_text = get_random.text_producer { min: 'Α', max: 'ω', min_length: 1, max_length: 5, filter: /^Α/v, }
      for idx in [ 0 .. 9 ]
        result      = get_random_text()
        # debug 'Ωbrbr__51', rpr result
        @eq ( Ωbrbr__52 = -> /^Α[Α-ω]{0,4}$/v.test result ), true
        @eq ( Ωbrbr__53 = -> result ), result_matchers[ idx ]
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_float_producer: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    result_matchers = [ 16.084712848532945, 16.42560794018209, 14.009152099024504, 18.174642121884972, 12.86115032620728, 10.208302834071219, 18.753091448452324, 12.430183209944516, 12.627715056296438, 12.425259067676961, ]
    # round_matchers  = [ 34, 15, 189, 121, 75, 47, 87, 43, 119, 200, ]
    #.......................................................................................................
    do =>
      result_rounds  = null
      on_stats        = ( stats ) =>
        return null unless stats.name is 'text'
        # info 'Ωbrbr__54', idx, stats
        result_rounds = stats.rounds
        @eq ( Ωbrbr__55 = ->  result_rounds ), round_matchers[ idx ]
      get_random        = new Get_random { seed: settings.my_seed_1, on_stats, }
      filter            = ( n ) -> ( Math.floor n ) %% 2 is 0
      get_random_float  = get_random.float_producer { min: 10, max: 20, filter, }
      for idx in [ 0 .. 9 ]
        result      = get_random_float()
        # debug 'Ωbrbr__56', rpr result
        @eq ( Ωbrbr__57 = -> result ), result_matchers[ idx ]
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_integer_producer: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    result_matchers = [ 16, 16, 14, 12, 18, 18, 20, 10, 12, 12, ]
    rounds_matcher  = [ 0, 0, 0, 0, 1, 0, 1, 1, 2, 1 ]
    #.......................................................................................................
    do =>
      my_on_stats         = ( stats ) =>
        # debug 'Ωbrbr__58', stats
        rounds.push stats.rounds if stats.name is 'integer'
      rounds             = []
      get_random          = new Get_random { seed: settings.my_seed_1, on_stats: my_on_stats, }
      filter              = ( n ) -> ( Math.floor n ) %% 2 is 0
      get_random_integer  = get_random.integer_producer { min: 10, max: 20, filter, }
      # debug 'Ωbrbr__59', get_random.cfg
      for idx in [ 0 .. 9 ]
        result = get_random_integer()
        # debug 'Ωbrbr__60', rpr result
        @eq ( Ωbrbr__61 = -> result ), result_matchers[ idx ]
      @eq ( Ωbrbr__62 = -> rounds ), rounds_matcher
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_set_of_texts_of_variable_length: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    # matchers        = [ 'εΧΚ', 'ονήφ', 'ΒΙ', 'ΟΠΟςΛ', 'η', 'ψψΩο', 'κΝε', 'Κμίκ', 'υΙ', 'ΟΛ', ]
    #.......................................................................................................
    do =>
      result_rounds  = null
      on_stats        = ( stats ) =>
        info 'Ωbrbr__63', stats if stats.name is 'set_of_texts'
        result_rounds = stats.rounds if stats.name is 'set_of_texts'
        @eq ( Ωbrbr__64 = -> result_rounds >= 0 ), true
      get_random  = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers    = [
        new Set [ '⾉⽕⼢⾗⾮⾩', '⿋⼽⼄⼠⾺⼴', '⼴⾼⼦', '⾏⾚', '⿓⽛⾱⽳⾝⼭⾈⾜⼣⾥', ]
        new Set [ '⾝⼥⿇⼞⼭⼵', '⽐⼸⽺', '⼔⿓⼌⾣⾅⾲⽁⼍', '⽲⼩⼑⿌', '⼩⾶⼕⽓⽐', ]
        new Set [ '⼢⿀⾳⿕⼔⿀⼗⾉⽔', '⾇⾚⼠⼘⼼⾐', '⼏⿉⾜⼦⾜⼆⽞', '⽍⽠⾿⼔⼗⿎', '⾇⽤⿃⾅⽋⾎', ]
        new Set [ '⼘⼂⾛⾖⼨⾛⾜', '⽉⼛⿉⼘⿒⽂⼫⽗⾜', '⼔⿋⿄', '⼟⼅⼎⾂⼮⽵⾾⾼⽔', '⾨⽩⾐⼊⼂⽆', ]
        new Set [ '⽿⽩⽊', '⼽⾖⾜⾶⾩⾮', '⾶⼮⾃', '⽿⽸⾽⼡⽻⾊⼶', '⽆⼠⽴⼿⼼⼿⽫⾈', ]
        new Set [ '⽣', '⾱⽻⽀⽛⾽⾲⼦⾶⼹', '⼕⽗⼌⼖⽽⽦⽎', '⽚⾌⼾⾌⼧⼛⼹', '⾂⼣⿁', ]
        new Set [ '⾘⽲⾟⽤⼘', '⾁⾧⽜⼕⾰⾐⼩', '⼱⾑⿃⿒⼽⼙', '⿏⾰⾓⼐⼈', '⽘⽗⽽⼘⿀', ]
        new Set [ '⽳⼱⼤⾾⽷⾠⼿⾕', '⼛⼂⿃⼶⼭⼫', '⼫⾀⾄⿋⼏⼾', '⽁⼽⼹⾯⿃⽮⾳⽑⽩⽓', '⼯⽎⾱⽫⽩⾳', ]
        new Set [ '⼷⾕⼈⼶⽩⽿⾡⼃⾜', '⾱⿇⾞⾴⽝', '⾵', '⽻⿔⽀⿎⾑⽌⼤⽘', '⿊⼭⼳⿒⼐⽥⽙⾲⽟', ]
        new Set [ '⽣⽪', '⽙⼟⽰⾗', '⽰', '⼴⿑⾁⽺', '⾐⽌⾠⾭⽘', ]
        ]
      for idx in [ 0 .. 9 ]
        result = get_random.set_of_texts { min: '⼀', max: '⿕', size: 5, min_length: 1, max_length: 10, }
        @eq ( Ωbrbr__65 = -> result ), matchers[ idx ]
        # debug 'Ωbrbr__66', result
      return null
    #.......................................................................................................
    do =>
      #.....................................................................................................
      result_rounds  = null
      on_stats        = ( stats ) =>
        # debug 'Ωbrbr_161', stats
        return null unless stats.name is 'walk_unique'
        result_rounds = stats.rounds
        # debug 'Ωbrbr_161', result_rounds
        @eq ( Ωbrbr__67 = -> result_rounds ), matchers[ idx ].result_rounds
      #.....................................................................................................
      get_random  = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers    = [
        { result_rounds:  4, result_rpr: '5641793082', }
        { result_rounds: 63, result_rpr: '2816794530', }
        { result_rounds: 11, result_rpr: '4538196072', }
        { result_rounds: 20, result_rpr: '7831924056', }
        { result_rounds: 76, result_rpr: '0325467819', }
        { result_rounds:  7, result_rpr: '3149760582', }
        { result_rounds: 20, result_rpr: '2857361094', }
        { result_rounds: 31, result_rpr: '4523786091', }
        { result_rounds: 13, result_rpr: '4813560297', }
        { result_rounds: 19, result_rpr: '7491065823', }
        ]
      for idx in [ 0 .. 9 ]
        result      = get_random.set_of_texts { min: '0', max: '9', size: 10, length: 1, on_stats, }
        # debug 'Ωbrbr__68', rpr result
        result_rpr  = [ result..., ].join ''
        @eq ( Ωbrbr__69 = -> result_rpr     ), matchers[ idx ].result_rpr
        # @eq ( Ωbrbr__70 = -> result_rounds ), matchers[ idx ].result_rounds
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  exhaustion: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    #.......................................................................................................
    do =>
      result_rounds  = null
      on_stats        = ( stats ) =>
        # info 'Ωbrbr__71', stats if stats.name is 'walk'
        # result_rounds = stats.rounds if stats.name is 'walk'
        # @eq ( Ωbrbr__72 = -> result_rounds >= 0 ), true
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      #.....................................................................................................
      cfg =
        min:            'A'
        max:            'Z'
        length:         3
        filter:         /^[a-z]{3}$/
        on_exhaustion: 'error'
      @throws ( Ωbrbr__73 = -> get_random.text cfg ), /exhausted/
      return null
    #.......................................................................................................
    do =>
      result_rounds  = null
      on_stats        = ( stats ) =>
        # info 'Ωbrbr__74', stats if stats.name is 'walk'
        # result_rounds = stats.rounds if stats.name is 'walk'
        # @eq ( Ωbrbr__75 = -> result_rounds >= 0 ), true
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      #.....................................................................................................
      cfg =
        min:            'A'
        max:            'Z'
        length:         3
        filter:         /^[a-z]{3}$/
        on_exhaustion: -> null
      @eq ( Ωbrbr__76 = -> get_random.text cfg ), null
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  walk: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    #.......................................................................................................
    do =>
      idx             = -1
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      on_stats        = ( stats ) =>
        # info 'Ωbrbr__77', idx, stats # if stats.name is 'walk'
        if stats.name is 'walk'
          @eq ( Ωbrbr__78 = -> stats.rounds ), matcher.rounds
        return null
      #.....................................................................................................
      result    =
        values:   []
      matcher   =
        values:   [ 'ĂčÀ', 'tĢŅ', 'ľæű', 'Hpŗ', 'Śz^', 'ĖħŻ', 'żÉŉ', 'íĬČ', 'ĩuķ', 'ìīx', 'Ūm|' ]
        rounds:   0
      #.....................................................................................................
      producer  = -> get_random.text { min: 'A', max: 0x017f, length: 3, on_stats, }
      for value from get_random.walk { producer, n: 11, on_stats, }
        idx++
        # debug 'Ωbrbr__79', idx, rpr value
        result.values.push value
        @eq ( Ωbrbr__80 = -> value ), matcher.values[ idx ]
      @eq ( Ωbrbr__81 = -> idx                    ), 10
      @eq ( Ωbrbr__82 = -> result.values.length   ), 11
      return null
    # #.......................................................................................................
    # do =>
    #   get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
    #   result_rounds  = null
    #   on_stats        = ( stats ) =>
    #     info 'Ωbrbr__83', stats if stats.name is 'walk'
    #     result_rounds = stats.rounds if stats.name is 'walk'
    #     @eq ( Ωbrbr__84 = -> result_rounds >= 0 ), true
    #   #.....................................................................................................
    #   producer  = -> get_random.text { min: '0', max: '9', length: 1, }
    #   count     = 0
    #   seen      = new Set()
    #   for x from get_random.walk { producer, seen, n: 5, }
    #     count++
    #     debug 'Ωbrbr__85', count, rpr x
    #   return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  walk_unique: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers        = [ 15, 16, 14, 11, 17, 19, 13, 10, 18, 12, ]
      on_stats        = ( stats ) =>
        # info 'Ωbrbr__86', stats
        @eq ( Ωbrbr__87 = -> stats.rounds ), 4 if stats.name is 'walk_unique'
      #.....................................................................................................
      producer  = -> get_random.integer { min: 10, max: 19, on_stats, }
      idx       = -1
      for value from get_random.walk_unique { producer, n: 10, on_stats, }
        idx++
        # debug 'Ωbrbr__88', idx, rpr value
        @eq ( Ωbrbr__89 = -> value ), matchers[ idx ]
      return null
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      on_stats        = ( stats ) =>
        @eq ( Ωbrbr__90 = -> stats.rounds ), 4 if stats.name is 'walk_unique'
      #.....................................................................................................
      producer  = -> get_random.integer { min: 10, max: 19, on_stats, }
      @throws ( Ωbrbr__91 = -> value for value from get_random.walk_unique { producer, n: 11, on_stats, } ), /exhausted/
      return null
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers        = [ 15, 16, 14, 11, 17, 19, 13, 10, 18, 12, ]
      on_stats        = ( stats ) =>
        # info 'Ωbrbr__92', stats
        @eq ( Ωbrbr__93 = -> stats.rounds ), get_random.cfg.max_rounds + 1 if stats.name is 'walk_unique'
      #.....................................................................................................
      producer  = -> get_random.integer { min: 10, max: 19, on_stats, }
      idx       = -1
      for value from get_random.walk_unique { producer, n: 20, on_stats, on_exhaustion: 'stop', }
        idx++
        # debug 'Ωbrbr__94', idx, rpr value
        @eq ( Ωbrbr__95 = -> value ), matchers[ idx ]
      return null
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers        = '¨¯yD¾ÖÑõ`%AãV[åH5¶ÂüýÙÅO®ÃEÍÄGñ?XItZ-Ë¬Úd.kK2öJÞ6wsïéÜÿ9°x§ÁB_·À0ò&qè8÷ì«nµ²"½Ým<óeM{Qí@PçÐ+j¥ß^©æC¡±Óib,c\\³7£r~aê¿Ç:ÎSzùØº(|T¼¦ª/úu¢ÛY¤É#ðþø¸oFU1}p$W Õô4ÌäÈë>Ïv×LR]fg\'î´¹ûÒâÊ)»hÔ!;à*NáÆ=3l'
      results         = []
      on_stats        = ( stats ) =>
        # info 'Ωbrbr__96', stats
        @eq ( Ωbrbr__97 = -> stats.rounds ), get_random.cfg.max_rounds + 1 if stats.name is 'walk_unique'
      #.....................................................................................................
      producer  = -> get_random.chr { min: 0x20, max: 0xff, on_stats, }
      idx       = -1
      for value from get_random.walk_unique { producer, n: 200, on_stats, on_exhaustion: 'stop', }
        idx++
        # debug 'Ωbrbr__98', idx, rpr value
        @eq ( Ωbrbr__99 = -> value ), matchers[ idx ]
        results.push value
      # debug 'Ωbrbr_100', rpr results.join ''
      return null
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers        = '»hÔ!;à*NáÆ=3l'
      results         = []
      on_stats        = ( stats ) =>
        # info 'Ωbrbr_101', stats
        @eq ( Ωbrbr_102 = -> stats.rounds ), get_random.cfg.max_rounds + 1 if stats.name is 'walk_unique'
      #.....................................................................................................
      seen      = new Set '¨¯yD¾ÖÑõ`%AãV[åH5¶ÂüýÙÅO®ÃEÍÄGñ?XItZ-Ë¬Úd.kK2öJÞ6wsïéÜÿ9°x§ÁB_·À0ò&qè8÷ì«nµ²"½Ým<óeM{Qí@PçÐ+j¥ß^©æC¡±Óib,c\\³7£r~aê¿Ç:ÎSzùØº(|T¼¦ª/úu¢ÛY¤É#ðþø¸oFU1}p$W Õô4ÌäÈë>Ïv×LR]fg\'î´¹ûÒâÊ)'
      producer  = -> get_random.chr { min: 0x20, max: 0xff, on_stats, }
      idx       = -1
      for value from get_random.walk_unique { producer, n: 200, seen, on_stats, on_exhaustion: 'stop', }
        idx++
        # debug 'Ωbrbr_103', idx, rpr value
        @eq ( Ωbrbr_104 = -> value ), matchers[ idx ]
        results.push value
      # debug 'Ωbrbr_105', rpr results.join ''
      return null
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers        = 'pqkesunyhbewgcrszlvofqset'
      results         = []
      on_stats        = ( stats ) =>
        # info 'Ωbrbr_106', stats
        @eq ( Ωbrbr_107 = -> stats.rounds ), 7 if stats.name is 'walk_unique'
      #.....................................................................................................
      seen      = new Set()
      purview   = 5 ### NOTE maximum size of 'window' where unqiueness is guaranteed; `seen` will not grow beyond this ###
      producer  = -> get_random.chr { min: 'a', max: 'z', on_stats, }
      idx       = -1
      for value from get_random.walk_unique { producer, n: 25, seen, purview, on_stats, on_exhaustion: 'stop', }
        idx++
        # debug 'Ωbrbr_108', idx, rpr value
        @eq ( Ωbrbr_109 = -> value ), matchers[ idx ]
        results.push value
      @eq ( Ωbrbr_110 = -> [ seen..., ].join '' ), 'ofqset'
      @eq ( Ωbrbr_111 = -> seen.size ), purview + 1
      # debug 'Ωbrbr_112', rpr results.join ''
      return null
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers        = '4325614325614325614325614'
      results         = []
      on_stats        = ( stats ) =>
        # info 'Ωbrbr_113', stats
        @eq ( Ωbrbr_114 = -> stats.rounds ), 64 if stats.name is 'walk_unique'
      #.....................................................................................................
      seen      = new Set()
      purview   = 5 ### NOTE maximum size of 'window' where unqiueness is guaranteed; `seen` will not grow beyond this ###
      producer  = -> get_random.chr { min: '1', max: '6', on_stats, }
      idx       = -1
      for value from get_random.walk_unique { producer, n: 25, seen, purview, on_stats, on_exhaustion: 'stop', }
        idx++
        # debug 'Ωbrbr_115', idx, rpr value
        @eq ( Ωbrbr_116 = -> value ), matchers[ idx ]
        results.push value
      @eq ( Ωbrbr_117 = -> [ seen..., ].join '' ), '325614'
      @eq ( Ωbrbr_118 = -> seen.size ), purview + 1
      # debug 'Ωbrbr_119', rpr results.join ''
      return null
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers        = '532647132657432165472365172436512736541236541'
      results         = []
      on_stats        = ( stats ) =>
        # info 'Ωbrbr_120', stats
        @eq ( Ωbrbr_121 = -> stats.rounds ), 129 if stats.name is 'walk_unique'
      #.....................................................................................................
      seen      = new Set()
      purview   = 5 ### NOTE maximum size of 'window' where unqiueness is guaranteed; `seen` will not grow beyond this ###
      producer  = -> get_random.chr { min: '1', max: '7', on_stats, }
      idx       = -1
      for value from get_random.walk_unique { producer, n: 45, seen, purview, on_stats, on_exhaustion: 'stop', }
        idx++
        # debug 'Ωbrbr_122', idx, rpr value
        @eq ( Ωbrbr_123 = -> value ), matchers[ idx ]
        results.push value
      @eq ( Ωbrbr_124 = -> [ seen..., ].join '' ), '236541'
      @eq ( Ωbrbr_125 = -> seen.size ), purview + 1
      # debug 'Ωbrbr_126', rpr results.join ''
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  stats: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    #.......................................................................................................
    do =>
      sentinel      = Symbol 'sentinel'
      on_exhaustion = -> sentinel
      stats = new internals.Stats { name: 'something', on_exhaustion, }
      @eq     ( Ωbrbr_127 = -> stats.name           ), 'something'
      @eq     ( Ωbrbr_128 = -> stats.max_rounds     ), internals.max_rounds
      @eq     ( Ωbrbr_129 = -> stats.rounds         ), 0
      @throws ( Ωbrbr_130 = -> stats.rounds++       ), /Cannot set property/
      @eq     ( Ωbrbr_131 = -> stats.retry()        ), internals.go_on
      @eq     ( Ωbrbr_132 = -> stats.rounds         ), 1
      stats._rounds = internals.max_rounds - 1
      # debug 'Ωbrbr_133', stats
      # debug 'Ωbrbr_134', stats.rounds
      # debug 'Ωbrbr_135', internals.max_rounds
      # debug 'Ωbrbr_136', stats.max_rounds
      @eq ( Ωbrbr_137 = -> stats.retry() ), internals.go_on
      @eq ( Ωbrbr_138 = -> stats.retry() ), sentinel
      @eq ( Ωbrbr_139 = -> stats.retry() ), sentinel
      return null
    #.......................................................................................................
    do =>
      on_exhaustion = undefined
      stats = new internals.Stats { name: 'something', on_exhaustion, }
      stats._rounds = internals.max_rounds - 1
      @eq     ( Ωbrbr_140 = -> stats.retry() ), internals.go_on
      @throws ( Ωbrbr_141 = -> stats.retry() ), /exhausted/
      @throws ( Ωbrbr_142 = -> stats.retry() ), /exhausted/
      return null
    #.......................................................................................................
    do =>
      on_exhaustion = null
      stats = new internals.Stats { name: 'something', on_exhaustion, }
      stats._rounds = internals.max_rounds - 1
      @eq     ( Ωbrbr_143 = -> stats.retry() ), internals.go_on
      @throws ( Ωbrbr_144 = -> stats.retry() ), /exhausted/
      @throws ( Ωbrbr_145 = -> stats.retry() ), /exhausted/
      return null
    #.......................................................................................................
    do =>
      on_exhaustion = 'error'
      stats = new internals.Stats { name: 'something', on_exhaustion, }
      stats._rounds = internals.max_rounds - 1
      @eq     ( Ωbrbr_146 = -> stats.retry() ), internals.go_on
      @throws ( Ωbrbr_147 = -> stats.retry() ), /exhausted/
      @throws ( Ωbrbr_148 = -> stats.retry() ), /exhausted/
      return null
    #.......................................................................................................
    do =>
      sentinel      = Symbol 'sentinel'
      stats_result  = null
      on_exhaustion = -> sentinel
      on_stats      = -> sentinel
      max_rounds   = 3
      stats = new internals.Stats { name: 'something', on_exhaustion, on_stats, max_rounds, }
      @eq     ( Ωbrbr_149 = -> stats.rounds ), 0
      @eq     ( Ωbrbr_150 = -> stats.retry() ), internals.go_on
      @eq     ( Ωbrbr_151 = -> stats.rounds ), 1
      @eq     ( Ωbrbr_152 = -> stats.retry() ), internals.go_on
      @eq     ( Ωbrbr_153 = -> stats.rounds ), 2
      @eq     ( Ωbrbr_154 = -> stats.retry() ), internals.go_on
      @eq     ( Ωbrbr_155 = -> stats.rounds ), 3
      @eq     ( Ωbrbr_156 = -> stats.retry() ), sentinel
      @eq     ( Ωbrbr_157 = -> stats.finish 'value' ), 'value'
      @throws ( Ωbrbr_158 = -> stats.finish 'value' ), /finished/
      @throws ( Ωbrbr_159 = -> stats.retry() ), /finished/
      @throws ( Ωbrbr_160 = -> stats.retry() ), /finished/
      return null
    #.......................................................................................................
    return null

#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
  ( new Test guytest_cfg ).test { get_random_set_of_texts_of_variable_length: tests.get_random_set_of_texts_of_variable_length, }
  demo_clean = ->
    ( new Test guytest_cfg ).test { get_random_integer_producer: tests.get_random_integer_producer, }
    a = {}
    b = { o: 6, }
    c = { o: undefined, }
    clean = ( x ) -> Object.fromEntries ( [ k, v, ] for k, v of x when v? )
    debug 'Ωbrbr_161', d = { a..., ( clean b )..., ( clean c )..., }
  #.........................................................................................................
  return null
