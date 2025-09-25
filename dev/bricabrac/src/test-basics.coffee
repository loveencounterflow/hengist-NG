

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
GTNG                      = require 'guy-test'
{ Test                  } = GTNG
SFMODULES                 = require '../../../apps/bricabrac-sfmodules'



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
        # debug 'Ωbrbr__67', stats
        return null unless stats.name is 'walk_unique'
        result_rounds = stats.rounds
        # debug 'Ωbrbr__68', result_rounds
        @eq ( Ωbrbr__69 = -> result_rounds ), matchers[ idx ].result_rounds
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
        # debug 'Ωbrbr__70', rpr result
        result_rpr  = [ result..., ].join ''
        @eq ( Ωbrbr__71 = -> result_rpr     ), matchers[ idx ].result_rpr
        # @eq ( Ωbrbr__72 = -> result_rounds ), matchers[ idx ].result_rounds
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
        # info 'Ωbrbr__73', stats if stats.name is 'walk'
        # result_rounds = stats.rounds if stats.name is 'walk'
        # @eq ( Ωbrbr__74 = -> result_rounds >= 0 ), true
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      #.....................................................................................................
      cfg =
        min:            'A'
        max:            'Z'
        length:         3
        filter:         /^[a-z]{3}$/
        on_exhaustion: 'error'
      @throws ( Ωbrbr__75 = -> get_random.text cfg ), /exhausted/
      return null
    #.......................................................................................................
    do =>
      result_rounds  = null
      on_stats        = ( stats ) =>
        # info 'Ωbrbr__76', stats if stats.name is 'walk'
        # result_rounds = stats.rounds if stats.name is 'walk'
        # @eq ( Ωbrbr__77 = -> result_rounds >= 0 ), true
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      #.....................................................................................................
      cfg =
        min:            'A'
        max:            'Z'
        length:         3
        filter:         /^[a-z]{3}$/
        on_exhaustion: -> null
      @eq ( Ωbrbr__78 = -> get_random.text cfg ), null
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
        # info 'Ωbrbr__79', idx, stats # if stats.name is 'walk'
        if stats.name is 'walk'
          @eq ( Ωbrbr__80 = -> stats.rounds ), matcher.rounds
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
        # debug 'Ωbrbr__81', idx, rpr value
        result.values.push value
        @eq ( Ωbrbr__82 = -> value ), matcher.values[ idx ]
      @eq ( Ωbrbr__83 = -> idx                    ), 10
      @eq ( Ωbrbr__84 = -> result.values.length   ), 11
      return null
    # #.......................................................................................................
    # do =>
    #   get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
    #   result_rounds  = null
    #   on_stats        = ( stats ) =>
    #     info 'Ωbrbr__85', stats if stats.name is 'walk'
    #     result_rounds = stats.rounds if stats.name is 'walk'
    #     @eq ( Ωbrbr__86 = -> result_rounds >= 0 ), true
    #   #.....................................................................................................
    #   producer  = -> get_random.text { min: '0', max: '9', length: 1, }
    #   count     = 0
    #   seen      = new Set()
    #   for x from get_random.walk { producer, seen, n: 5, }
    #     count++
    #     debug 'Ωbrbr__87', count, rpr x
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
        # info 'Ωbrbr__88', stats
        @eq ( Ωbrbr__89 = -> stats.rounds ), 4 if stats.name is 'walk_unique'
      #.....................................................................................................
      producer  = -> get_random.integer { min: 10, max: 19, on_stats, }
      idx       = -1
      for value from get_random.walk_unique { producer, n: 10, on_stats, }
        idx++
        # debug 'Ωbrbr__90', idx, rpr value
        @eq ( Ωbrbr__91 = -> value ), matchers[ idx ]
      return null
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      on_stats        = ( stats ) =>
        @eq ( Ωbrbr__92 = -> stats.rounds ), 4 if stats.name is 'walk_unique'
      #.....................................................................................................
      producer  = -> get_random.integer { min: 10, max: 19, on_stats, }
      @throws ( Ωbrbr__93 = -> value for value from get_random.walk_unique { producer, n: 11, on_stats, } ), /exhausted/
      return null
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers        = [ 15, 16, 14, 11, 17, 19, 13, 10, 18, 12, ]
      on_stats        = ( stats ) =>
        # info 'Ωbrbr__94', stats
        @eq ( Ωbrbr__95 = -> stats.rounds ), get_random.cfg.max_rounds + 1 if stats.name is 'walk_unique'
      #.....................................................................................................
      producer  = -> get_random.integer { min: 10, max: 19, on_stats, }
      idx       = -1
      for value from get_random.walk_unique { producer, n: 20, on_stats, on_exhaustion: 'stop', }
        idx++
        # debug 'Ωbrbr__96', idx, rpr value
        @eq ( Ωbrbr__97 = -> value ), matchers[ idx ]
      return null
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers        = '¨¯yD¾ÖÑõ`%AãV[åH5¶ÂüýÙÅO®ÃEÍÄGñ?XItZ-Ë¬Úd.kK2öJÞ6wsïéÜÿ9°x§ÁB_·À0ò&qè8÷ì«nµ²"½Ým<óeM{Qí@PçÐ+j¥ß^©æC¡±Óib,c\\³7£r~aê¿Ç:ÎSzùØº(|T¼¦ª/úu¢ÛY¤É#ðþø¸oFU1}p$W Õô4ÌäÈë>Ïv×LR]fg\'î´¹ûÒâÊ)»hÔ!;à*NáÆ=3l'
      results         = []
      max_rounds      = 1_000
      on_stats        = ( stats ) =>
        # info 'Ωbrbr__98', stats
        @eq ( Ωbrbr__99 = -> stats.rounds ), max_rounds + 1 if stats.name is 'walk_unique'
      #.....................................................................................................
      producer  = -> get_random.chr { min: 0x20, max: 0xff, on_stats, }
      idx       = -1
      for value from get_random.walk_unique { producer, n: 200, on_stats, on_exhaustion: 'stop', max_rounds, }
        idx++
        # debug 'Ωbrbr_100', idx, rpr value
        @eq ( Ωbrbr_101 = -> value ), matchers[ idx ]
        results.push value
      # debug 'Ωbrbr_102', rpr results.join ''
      return null
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers        = '»hÔ!;à*NáÆ=3l'
      results         = []
      max_rounds      = 1_000
      on_stats        = ( stats ) =>
        # info 'Ωbrbr_103', stats
        @eq ( Ωbrbr_104 = -> stats.rounds ), max_rounds + 1 if stats.name is 'walk_unique'
      #.....................................................................................................
      seen      = new Set '¨¯yD¾ÖÑõ`%AãV[åH5¶ÂüýÙÅO®ÃEÍÄGñ?XItZ-Ë¬Úd.kK2öJÞ6wsïéÜÿ9°x§ÁB_·À0ò&qè8÷ì«nµ²"½Ým<óeM{Qí@PçÐ+j¥ß^©æC¡±Óib,c\\³7£r~aê¿Ç:ÎSzùØº(|T¼¦ª/úu¢ÛY¤É#ðþø¸oFU1}p$W Õô4ÌäÈë>Ïv×LR]fg\'î´¹ûÒâÊ)'
      producer  = -> get_random.chr { min: 0x20, max: 0xff, on_stats, }
      idx       = -1
      for value from get_random.walk_unique { producer, n: 200, seen, on_stats, on_exhaustion: 'stop', max_rounds, }
        idx++
        # debug 'Ωbrbr_105', idx, rpr value
        @eq ( Ωbrbr_106 = -> value ), matchers[ idx ]
        results.push value
      # debug 'Ωbrbr_107', rpr results.join ''
      return null
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers        = 'pqkesunyhbewgcrszlvofqset'
      results         = []
      on_stats        = ( stats ) =>
        # info 'Ωbrbr_108', stats
        @eq ( Ωbrbr_109 = -> stats.rounds ), 7 if stats.name is 'walk_unique'
      #.....................................................................................................
      seen      = new Set()
      purview   = 5 ### NOTE maximum size of 'window' where unqiueness is guaranteed; `seen` will not grow beyond this ###
      producer  = -> get_random.chr { min: 'a', max: 'z', on_stats, }
      idx       = -1
      for value from get_random.walk_unique { producer, n: 25, seen, purview, on_stats, on_exhaustion: 'stop', }
        idx++
        # debug 'Ωbrbr_110', idx, rpr value
        @eq ( Ωbrbr_111 = -> value ), matchers[ idx ]
        results.push value
      @eq ( Ωbrbr_112 = -> [ seen..., ].join '' ), 'ofqset'
      @eq ( Ωbrbr_113 = -> seen.size ), purview + 1
      # debug 'Ωbrbr_114', rpr results.join ''
      return null
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers        = '4325614325614325614325614'
      results         = []
      on_stats        = ( stats ) =>
        # info 'Ωbrbr_115', stats
        @eq ( Ωbrbr_116 = -> stats.rounds ), 64 if stats.name is 'walk_unique'
      #.....................................................................................................
      seen      = new Set()
      purview   = 5 ### NOTE maximum size of 'window' where unqiueness is guaranteed; `seen` will not grow beyond this ###
      producer  = -> get_random.chr { min: '1', max: '6', on_stats, }
      idx       = -1
      for value from get_random.walk_unique { producer, n: 25, seen, purview, on_stats, on_exhaustion: 'stop', }
        idx++
        # debug 'Ωbrbr_117', idx, rpr value
        @eq ( Ωbrbr_118 = -> value ), matchers[ idx ]
        results.push value
      @eq ( Ωbrbr_119 = -> [ seen..., ].join '' ), '325614'
      @eq ( Ωbrbr_120 = -> seen.size ), purview + 1
      # debug 'Ωbrbr_121', rpr results.join ''
      return null
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers        = '532647132657432165472365172436512736541236541'
      results         = []
      on_stats        = ( stats ) =>
        # info 'Ωbrbr_122', stats
        @eq ( Ωbrbr_123 = -> stats.rounds ), 129 if stats.name is 'walk_unique'
      #.....................................................................................................
      seen      = new Set()
      purview   = 5 ### NOTE maximum size of 'window' where unqiueness is guaranteed; `seen` will not grow beyond this ###
      producer  = -> get_random.chr { min: '1', max: '7', on_stats, }
      idx       = -1
      for value from get_random.walk_unique { producer, n: 45, seen, purview, on_stats, on_exhaustion: 'stop', }
        idx++
        # debug 'Ωbrbr_124', idx, rpr value
        @eq ( Ωbrbr_125 = -> value ), matchers[ idx ]
        results.push value
      @eq ( Ωbrbr_126 = -> [ seen..., ].join '' ), '236541'
      @eq ( Ωbrbr_127 = -> seen.size ), purview + 1
      # debug 'Ωbrbr_128', rpr results.join ''
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
      @eq     ( Ωbrbr_129 = -> stats.name           ), 'something'
      @eq     ( Ωbrbr_130 = -> stats.max_rounds     ), internals.max_rounds
      @eq     ( Ωbrbr_131 = -> stats.rounds         ), 0
      @throws ( Ωbrbr_132 = -> stats.rounds++       ), /Cannot set property/
      @eq     ( Ωbrbr_133 = -> stats.retry()        ), internals.go_on
      @eq     ( Ωbrbr_134 = -> stats.rounds         ), 1
      stats._rounds = internals.max_rounds - 1
      # debug 'Ωbrbr_135', stats
      # debug 'Ωbrbr_136', stats.rounds
      # debug 'Ωbrbr_137', internals.max_rounds
      # debug 'Ωbrbr_138', stats.max_rounds
      @eq ( Ωbrbr_139 = -> stats.retry() ), internals.go_on
      @eq ( Ωbrbr_140 = -> stats.retry() ), sentinel
      @eq ( Ωbrbr_141 = -> stats.retry() ), sentinel
      return null
    #.......................................................................................................
    do =>
      on_exhaustion = undefined
      stats = new internals.Stats { name: 'something', on_exhaustion, }
      stats._rounds = internals.max_rounds - 1
      @eq     ( Ωbrbr_142 = -> stats.retry() ), internals.go_on
      @throws ( Ωbrbr_143 = -> stats.retry() ), /exhausted/
      @throws ( Ωbrbr_144 = -> stats.retry() ), /exhausted/
      return null
    #.......................................................................................................
    do =>
      on_exhaustion = null
      stats = new internals.Stats { name: 'something', on_exhaustion, }
      stats._rounds = internals.max_rounds - 1
      @eq     ( Ωbrbr_145 = -> stats.retry() ), internals.go_on
      @throws ( Ωbrbr_146 = -> stats.retry() ), /exhausted/
      @throws ( Ωbrbr_147 = -> stats.retry() ), /exhausted/
      return null
    #.......................................................................................................
    do =>
      on_exhaustion = 'error'
      stats = new internals.Stats { name: 'something', on_exhaustion, }
      stats._rounds = internals.max_rounds - 1
      @eq     ( Ωbrbr_148 = -> stats.retry() ), internals.go_on
      @throws ( Ωbrbr_149 = -> stats.retry() ), /exhausted/
      @throws ( Ωbrbr_150 = -> stats.retry() ), /exhausted/
      return null
    #.......................................................................................................
    do =>
      sentinel      = Symbol 'sentinel'
      stats_result  = null
      on_exhaustion = -> sentinel
      on_stats      = -> sentinel
      max_rounds   = 3
      stats = new internals.Stats { name: 'something', on_exhaustion, on_stats, max_rounds, }
      @eq     ( Ωbrbr_151 = -> stats.rounds ), 0
      @eq     ( Ωbrbr_152 = -> stats.retry() ), internals.go_on
      @eq     ( Ωbrbr_153 = -> stats.rounds ), 1
      @eq     ( Ωbrbr_154 = -> stats.retry() ), internals.go_on
      @eq     ( Ωbrbr_155 = -> stats.rounds ), 2
      @eq     ( Ωbrbr_156 = -> stats.retry() ), internals.go_on
      @eq     ( Ωbrbr_157 = -> stats.rounds ), 3
      @eq     ( Ωbrbr_158 = -> stats.retry() ), sentinel
      @eq     ( Ωbrbr_159 = -> stats.finish 'value' ), 'value'
      @throws ( Ωbrbr_160 = -> stats.finish 'value' ), /finished/
      @throws ( Ωbrbr_161 = -> stats.retry() ), /finished/
      @throws ( Ωbrbr_162 = -> stats.retry() ), /finished/
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_format_stack_parse_line: ->
    { Format_stack,               } = SFMODULES.unstable.require_format_stack()
    { type_of,                    } = SFMODULES.unstable.require_type_of()
    #.......................................................................................................
    probes_and_matchers = [
      [ """at <anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:290:11)""",              { callee: '<anonymous>',                               path: '/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee', folder_path: '/path/to/hengist-NG/dev/bricabrac/src/',  file_name: 'test-dbric.coffee',        line_nr: 290,  column_nr: 11, type: 'main',       }, ]
      [ """at Object.<anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:245:41)""",       { callee: 'Object.<anonymous>',                        path: '/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee', folder_path: '/path/to/hengist-NG/dev/bricabrac/src/',  file_name: 'test-dbric.coffee',        line_nr: 245,  column_nr: 41, type: 'main',       }, ]
      [ """at Object.<anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:3:1)""",          { callee: 'Object.<anonymous>',                        path: '/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee', folder_path: '/path/to/hengist-NG/dev/bricabrac/src/',  file_name: 'test-dbric.coffee',        line_nr: 3,    column_nr: 1,  type: 'main',       }, ]
      [ """at do_something (../whatever/src/test-dbric.coffee:3:1)""",                                      { callee: 'do_something',                              path: '../whatever/src/test-dbric.coffee',                       folder_path: '../whatever/src/',                        file_name: 'test-dbric.coffee',        line_nr: 3,    column_nr: 1,  type: 'external',   }, ]
      [ """at do_something (node_modules/test-dbric.coffee:3:1)""",                                         { callee: 'do_something',                              path: 'node_modules/test-dbric.coffee',                          folder_path: 'node_modules/',                           file_name: 'test-dbric.coffee',        line_nr: 3,    column_nr: 1,  type: 'dependency', }, ]
      [ """at Module._compile (node:internal/modules/cjs/loader:1738:14)""",                                { callee: 'Module._compile',                           path: 'node:internal/modules/cjs/loader',                        folder_path: 'node:internal/modules/cjs/',              file_name: 'loader',                   line_nr: 1738, column_nr: 14, type: 'internal',   }, ]
      [ """at Object..js (node:internal/modules/cjs/loader:1871:10)""",                                     { callee: 'Object..js',                                path: 'node:internal/modules/cjs/loader',                        folder_path: 'node:internal/modules/cjs/',              file_name: 'loader',                   line_nr: 1871, column_nr: 10, type: 'internal',   }, ]
      [ """at Module.load (node:internal/modules/cjs/loader:1470:32)""",                                    { callee: 'Module.load',                               path: 'node:internal/modules/cjs/loader',                        folder_path: 'node:internal/modules/cjs/',              file_name: 'loader',                   line_nr: 1470, column_nr: 32, type: 'internal',   }, ]
      [ """at Module._load (node:internal/modules/cjs/loader:1290:12)""",                                   { callee: 'Module._load',                              path: 'node:internal/modules/cjs/loader',                        folder_path: 'node:internal/modules/cjs/',              file_name: 'loader',                   line_nr: 1290, column_nr: 12, type: 'internal',   }, ]
      [ """at TracingChannel.traceSync (node:diagnostics_channel:322:14)""",                                { callee: 'TracingChannel.traceSync',                  path: 'node:diagnostics_channel',                                folder_path: '',                                        file_name: 'node:diagnostics_channel', line_nr: 322,  column_nr: 14, type: 'internal',   }, ]
      [ """at wrapModuleLoad (node:internal/modules/cjs/loader:238:24)""",                                  { callee: 'wrapModuleLoad',                            path: 'node:internal/modules/cjs/loader',                        folder_path: 'node:internal/modules/cjs/',              file_name: 'loader',                   line_nr: 238,  column_nr: 24, type: 'internal',   }, ]
      [ """at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)""",          { callee: 'Module.executeUserEntryPoint [as runMain]', path: 'node:internal/modules/run_main',                          folder_path: 'node:internal/modules/',                  file_name: 'run_main',                 line_nr: 154,  column_nr: 5,  type: 'internal',   }, ]
      [ """at node:internal/main/run_main_module:33:47""",                                                  { callee: '[anonymous]',                               path: 'node:internal/main/run_main_module',                      folder_path: 'node:internal/main/',                     file_name: 'run_main_module',          line_nr: 33,   column_nr: 47, type: 'internal',   }, ]
      [ """some other format""",                                                                            { callee: '', path: '', folder_path: 'some other format', file_name: '', line_nr: '', column_nr: '', type: 'unparsable' }, ]
      ]
    #.......................................................................................................
    format_stack = new Format_stack { relative: false, }
    @eq ( Ωbrbr_163 = -> type_of format_stack.parse_line ), 'function'
    for [ probe, matcher, ] in probes_and_matchers
      @eq ( Ωbrbr_164 = -> format_stack.parse_line probe ), matcher
    #.......................................................................................................
    @throws ( Ωbrbr_165 = -> format_stack.parse_line 673              ), /expected a text, got a float/
    @throws ( Ωbrbr_166 = -> format_stack.parse_line false            ), /expected a text, got a boolean/
    @throws ( Ωbrbr_167 = -> format_stack.parse_line Symbol 'abc'     ), /expected a text, got a symbol/
    @throws ( Ωbrbr_168 = -> format_stack.parse_line "line 1\nline 2" ), /expected a single line, got a text with line breaks/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_format_stack_parse_line_relative: ->
    { format_stack,               } = SFMODULES.unstable.require_format_stack()
    { type_of,                    } = SFMODULES.unstable.require_type_of()
    #.......................................................................................................
    probes_and_matchers = [
      [ """at <anonymous> (#{process.cwd()}/dev/bricabrac/src/test-dbric.coffee:290:11)""",                 { callee: '<anonymous>',                               path: 'dev/bricabrac/src/test-dbric.coffee',                     folder_path: 'dev/bricabrac/src/',  file_name: 'test-dbric.coffee',        line_nr: 290,  column_nr: 11, type: 'main',       }, ]
      [ """at Object.<anonymous> (#{process.cwd()}/dev/bricabrac/src/test-dbric.coffee:245:41)""",          { callee: 'Object.<anonymous>',                        path: 'dev/bricabrac/src/test-dbric.coffee',                     folder_path: 'dev/bricabrac/src/',  file_name: 'test-dbric.coffee',        line_nr: 245,  column_nr: 41, type: 'main',       }, ]
      [ """at Object.<anonymous> (#{process.cwd()}/dev/bricabrac/src/test-dbric.coffee:3:1)""",             { callee: 'Object.<anonymous>',                        path: 'dev/bricabrac/src/test-dbric.coffee',                     folder_path: 'dev/bricabrac/src/',  file_name: 'test-dbric.coffee',        line_nr: 3,    column_nr: 1,  type: 'main',       }, ]
      [ """at do_something (../whatever/src/test-dbric.coffee:3:1)""",                                      { callee: 'do_something',                              path: '../whatever/src/test-dbric.coffee',                       folder_path: '../whatever/src/',                        file_name: 'test-dbric.coffee',        line_nr: 3,    column_nr: 1,  type: 'external',   }, ]
      [ """at do_something (node_modules/test-dbric.coffee:3:1)""",                                       { callee: 'do_something',                              path: 'node_modules/test-dbric.coffee',                        folder_path: 'node_modules/',                         file_name: 'test-dbric.coffee',        line_nr: 3,    column_nr: 1,  type: 'dependency', }, ]
      [ """at Module._compile (node:internal/modules/cjs/loader:1738:14)""",                                { callee: 'Module._compile',                           path: 'node:internal/modules/cjs/loader',                        folder_path: 'node:internal/modules/cjs/',              file_name: 'loader',                   line_nr: 1738, column_nr: 14, type: 'internal',   }, ]
      [ """at Object..js (node:internal/modules/cjs/loader:1871:10)""",                                     { callee: 'Object..js',                                path: 'node:internal/modules/cjs/loader',                        folder_path: 'node:internal/modules/cjs/',              file_name: 'loader',                   line_nr: 1871, column_nr: 10, type: 'internal',   }, ]
      [ """at Module.load (node:internal/modules/cjs/loader:1470:32)""",                                    { callee: 'Module.load',                               path: 'node:internal/modules/cjs/loader',                        folder_path: 'node:internal/modules/cjs/',              file_name: 'loader',                   line_nr: 1470, column_nr: 32, type: 'internal',   }, ]
      [ """at Module._load (node:internal/modules/cjs/loader:1290:12)""",                                   { callee: 'Module._load',                              path: 'node:internal/modules/cjs/loader',                        folder_path: 'node:internal/modules/cjs/',              file_name: 'loader',                   line_nr: 1290, column_nr: 12, type: 'internal',   }, ]
      [ """at TracingChannel.traceSync (node:diagnostics_channel:322:14)""",                                { callee: 'TracingChannel.traceSync',                  path: 'node:diagnostics_channel',                                folder_path: '',                                        file_name: 'node:diagnostics_channel', line_nr: 322,  column_nr: 14, type: 'internal',   }, ]
      [ """at wrapModuleLoad (node:internal/modules/cjs/loader:238:24)""",                                  { callee: 'wrapModuleLoad',                            path: 'node:internal/modules/cjs/loader',                        folder_path: 'node:internal/modules/cjs/',              file_name: 'loader',                   line_nr: 238,  column_nr: 24, type: 'internal',   }, ]
      [ """at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)""",          { callee: 'Module.executeUserEntryPoint [as runMain]', path: 'node:internal/modules/run_main',                          folder_path: 'node:internal/modules/',                  file_name: 'run_main',                 line_nr: 154,  column_nr: 5,  type: 'internal',   }, ]
      [ """at node:internal/main/run_main_module:33:47""",                                                  { callee: '[anonymous]',                               path: 'node:internal/main/run_main_module',                      folder_path: 'node:internal/main/',                     file_name: 'run_main_module',          line_nr: 33,   column_nr: 47, type: 'internal',   }, ]
      [ """some other format""",                                                                            { callee: '', path: '', folder_path: 'some other format', file_name: '', line_nr: '', column_nr: '', type: 'unparsable' }, ]
      ]
    #.......................................................................................................
    try
      cwd = process.cwd()
      @eq ( Ωbrbr_169 = -> type_of format_stack.parse_line ), 'function'
      for [ probe, matcher, ] in probes_and_matchers
        @eq ( Ωbrbr_170 = -> format_stack.parse_line probe ), matcher
    finally
      process.chdir cwd
    #.......................................................................................................
    @throws ( Ωbrbr_171 = -> format_stack.parse_line 673              ), /expected a text, got a float/
    @throws ( Ωbrbr_172 = -> format_stack.parse_line false            ), /expected a text, got a boolean/
    @throws ( Ωbrbr_173 = -> format_stack.parse_line Symbol 'abc'     ), /expected a text, got a symbol/
    @throws ( Ωbrbr_174 = -> format_stack.parse_line "line 1\nline 2" ), /expected a single line, got a text with line breaks/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_format_stack_format_line: ->
    { Format_stack,               } = SFMODULES.unstable.require_format_stack()
    { strip_ansi,                 } = SFMODULES.require_strip_ansi()
    { type_of,                    } = SFMODULES.unstable.require_type_of()
    #.......................................................................................................
    probes_and_matchers = [
      [ """at <anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:290:11)""",        '—— /path/to/hengist-NG/dev/bricabrac/src/——test-dbric.coffee —— (290——:11) ——             —— # <anonymous>() ——                                 ——', ]
      [ """at Object.<anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:245:41)""", '—— /path/to/hengist-NG/dev/bricabrac/src/——test-dbric.coffee —— (245——:41) ——             —— # Object.<anonymous>() ——                          ——', ]
      [ """at Object.<anonymous> (/path/to/hengist-NG/dev/bricabrac/src/test-dbric.coffee:3:1)""",    '—— /path/to/hengist-NG/dev/bricabrac/src/——test-dbric.coffee —— (3——:1) ——                —— # Object.<anonymous>() ——                          ——', ]
      [ """at do_something (../whatever/src/test-dbric.coffee:3:1)""",                                '—— ../whatever/src/——test-dbric.coffee —— (3——:1) ——                                      —— # do_something() ——                                ——', ]
      [ """at do_something (../node_modules/whatever/src/test-dbric.coffee:3:1)""",                   '—— ../node_modules/whatever/src/——test-dbric.coffee —— (3——:1) ——                         —— # do_something() ——                                ——', ]
      [ """at do_something (node_modules/test-dbric.coffee:3:1)""",                                   '—— node_modules/——test-dbric.coffee —— (3——:1) ——                                         —— # do_something() ——                                ——', ]
      [ """at Module._compile (node:internal/modules/cjs/loader:1738:14)""",                          '—— node:internal/modules/cjs/——loader —— (1738——:14) ——                                   —— # Module._compile() ——                             ——', ]
      [ """at Object..js (node:internal/modules/cjs/loader:1871:10)""",                               '—— node:internal/modules/cjs/——loader —— (1871——:10) ——                                   —— # Object..js() ——                                  ——', ]
      [ """at Module.load (node:internal/modules/cjs/loader:1470:32)""",                              '—— node:internal/modules/cjs/——loader —— (1470——:32) ——                                   —— # Module.load() ——                                 ——', ]
      [ """at Module._load (node:internal/modules/cjs/loader:1290:12)""",                             '—— node:internal/modules/cjs/——loader —— (1290——:12) ——                                   —— # Module._load() ——                                ——', ]
      [ """at TracingChannel.traceSync (node:diagnostics_channel:322:14)""",                          '—— ——node:diagnostics_channel —— (322——:14) ——                                            —— # TracingChannel.traceSync() ——                    ——', ]
      [ """at wrapModuleLoad (node:internal/modules/cjs/loader:238:24)""",                            '—— node:internal/modules/cjs/——loader —— (238——:24) ——                                    —— # wrapModuleLoad() ——                              ——', ]
      [ """at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)""",    '—— node:internal/modules/——run_main —— (154——:5) ——                                       —— # Module.executeUserEntryPoint [as runMain]() ——   ——', ]
      [ """at node:internal/main/run_main_module:33:47""",                                            '—— node:internal/main/——run_main_module —— (33——:47) ——                                   —— # [anonymous]() ——                                 ——', ]
      [ """some other format""",                                                                      '—— some other format—— —— (——:) ——                                                        —— # () ——                                            ——', ]
      ]
    #.......................................................................................................
    do =>
      format_stack = new Format_stack { relative: false, padding: { path: 80, callee: 50, }, context: false, }
      @eq ( Ωbrbr_175 = -> type_of format_stack.cfg         ), 'pod'
      @eq ( Ωbrbr_176 = -> type_of format_stack.format_line ), 'function'
      for [ probe, matcher, ] in probes_and_matchers
        @eq ( Ωbrbr_177 = -> strip_ansi ( format_stack.format_line probe ), '——' ), matcher
        # echo format_stack.format_line probe
        # debug 'Ωbrbr_178', do Ωbrbr_179 = -> rpr strip_ansi ( format_stack.format_line probe ), '——'
      return null
    #.......................................................................................................
    do =>
      format_stack = new Format_stack { relative: true, }
      try not_a_variable catch error
        echo()
        for line in error.stack.split '\n'
          echo format_stack.format_line line
      return null
    #.......................................................................................................
    do =>
      format_stack = new Format_stack { relative: true, }
      @throws ( Ωbrbr_180 = -> format_stack.format_line 673              ), /expected a text, got a float/
      @throws ( Ωbrbr_181 = -> format_stack.format_line false            ), /expected a text, got a boolean/
      @throws ( Ωbrbr_182 = -> format_stack.format_line Symbol 'abc'     ), /expected a text, got a symbol/
      @throws ( Ωbrbr_183 = -> format_stack.format_line "line 1\nline 2" ), /expected a single line, got a text with line breaks/
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_format_stack_format_stack: ->
    { format_stack,               } = SFMODULES.unstable.require_format_stack()
    { strip_ansi,                 } = SFMODULES.require_strip_ansi()
    { type_of,                    } = SFMODULES.unstable.require_type_of()
    PATH                            = require 'node:path'
    separate                        = -> echo '\n\n\n———————————————————————————————————————————————————————————————————————————\n\n\n'
    #.......................................................................................................
    do =>
      try
        cwd         = process.cwd()
        reference   = PATH.resolve __dirname, '../../../'
        process.chdir reference
        class Custom_error extends Error
        fn_1        = -> throw new Custom_error "oops"
        fn_2        = -> fn_1()
        fn_3        = -> fn_2()
        fn_4        = -> fn_3()
        fn_5        = -> fn_4()
        fn_5()
      catch error
        separate()
        echo format_stack error
      finally
        process.chdir cwd
      return null
    #.......................................................................................................
    do =>
      try
        cwd         = process.cwd()
        reference   = PATH.resolve __dirname, '../../../'
        process.chdir reference
        # type    = error?.code ? error?.constructor?.name ? error?.name ? 'EXCEPTION'
        class E_1 extends Error
        class E_2 extends Error
        class E_3 extends Error
        fn_1 = ->                             throw new E_1 "Ωbrbr_184"
        fn_2 = -> try fn_1() catch cause then throw new E_2 "Ωbrbr_185", { cause, }
        fn_3 = -> try fn_2() catch cause then throw new E_3 "Ωbrbr_186", { cause, }
        debug 'Ωbrbr_187'
        fn_3()
      catch error
        separate()
        debug 'Ωbrbr_188'
        echo format_stack error
      finally
        process.chdir cwd
      # throw error
      return null
    # #.......................................................................................................
    # do =>
    #   format_stack = new Format_stack { relative: true, }
    #   try not_a_variable catch error
    #     echo()
    #     for line in error.stack.split '\n'
    #       echo format_stack.format_line line
    #   return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_anybase: ->
    { is_positive_integer_power_of,
      encode,
      decode,
      encode_bigint,
      decode_bigint,              } = SFMODULES.unstable.require_anybase()
    { type_of,                    } = SFMODULES.unstable.require_type_of()
    { Get_random,                 } = SFMODULES.unstable.require_get_random()
    repeat_count                    = 1000
    #.......................................................................................................
    do =>
      @eq ( Ωbrbr_189 = -> type_of encode                   ), 'function'
      @eq ( Ωbrbr_190 = -> type_of decode                   ), 'function'
      @eq ( Ωbrbr_191 = -> type_of encode_bigint            ), 'function'
      @eq ( Ωbrbr_192 = -> type_of decode_bigint            ), 'function'
      return null
    #.......................................................................................................
    do =>
      on_stats    = null
      get_random  = new Get_random { seed: 798723, on_stats, }
      #.....................................................................................................
      producer    = -> get_random.integer { min: 0, max: Number.MAX_SAFE_INTEGER, on_stats, }
      #.....................................................................................................
      for probe from get_random.walk { producer, n: repeat_count, on_stats, }
        matcher = "#{probe}"
        @eq ( Ωbrbr_193 = -> encode         probe, '0123456789' ), matcher
        @eq ( Ωbrbr_194 = -> encode_bigint  probe, '0123456789' ), matcher
      return null
    #.......................................................................................................
    do =>
      on_stats      = null
      get_random    = new Get_random { seed: 798723, on_stats, }
      big_alphabet  = '0123456789abcdefghijklmnopqrstuvwxyz'
      #.....................................................................................................
      producer      = ->
        n         = get_random.integer { min: 0, max: Number.MAX_SAFE_INTEGER, }
        base      = get_random.integer { min: 2, max: 36, }
        alphabet  = big_alphabet[ ... base ]
        matcher   = n.toString base
        return { n, base, alphabet, matcher, }
      #.....................................................................................................
      for { n, base, alphabet, matcher, } from get_random.walk { producer, n: repeat_count, on_stats, }
        @eq ( Ωbrbr_195 = -> encode               n, alphabet ), matcher
        @eq ( Ωbrbr_196 = -> decode         matcher, alphabet ), n
        @eq ( Ωbrbr_197 = -> encode_bigint        n, alphabet ), matcher
        @eq ( Ωbrbr_198 = -> decode_bigint  matcher, alphabet ), BigInt n
      return null
    #.......................................................................................................
    do =>
      @eq ( Ωbrbr_199 = -> encode_bigint  100, '0123456789'         ), '100'
      @eq ( Ωbrbr_200 = -> encode         100, '0123456789'         ), '100'
      @eq ( Ωbrbr_201 = -> encode           7, '.█'                 ), '███'
      @eq ( Ωbrbr_202 = -> encode           8, '.█'                 ), '█...'
      @eq ( Ωbrbr_203 = -> encode         100, '.█'                 ),  '██..█..'
      return null
    #.......................................................................................................
    do =>
      a10 = '0123456789'
      a16 = '0123456789abcdef'
      n   = 1234567890;                info 'Ωbrbr_204', f"#{ rpr encode n, a10 }:>30c; #{ rpr n.toString 10 }:>30c; #{ rpr encode n, a16 }:>30c; #{ rpr n.toString 16 }:>30c;"
      n   = 123456789012345;           info 'Ωbrbr_205', f"#{ rpr encode n, a10 }:>30c; #{ rpr n.toString 10 }:>30c; #{ rpr encode n, a16 }:>30c; #{ rpr n.toString 16 }:>30c;"
      n   = 12345678901234567890;      info 'Ωbrbr_206', f"#{ rpr encode n, a10 }:>30c; #{ rpr n.toString 10 }:>30c; #{ rpr encode n, a16 }:>30c; #{ rpr n.toString 16 }:>30c;"
      n   = 1234567890123456789012345; info 'Ωbrbr_207', f"#{ rpr encode n, a10 }:>30c; #{ rpr n.toString 10 }:>30c; #{ rpr encode n, a16 }:>30c; #{ rpr n.toString 16 }:>30c;"
      return null
    #.......................................................................................................
    do =>
      @eq     ( Ωbrbr_208 = -> is_positive_integer_power_of 10, 10                                ), true
      @eq     ( Ωbrbr_209 = -> is_positive_integer_power_of 100, 10                               ), true
      @eq     ( Ωbrbr_210 = -> is_positive_integer_power_of 1000000000000000, 10                  ), true
      @eq     ( Ωbrbr_211 = -> is_positive_integer_power_of 1000000000000001, 10                  ), false
      @eq     ( Ωbrbr_212 = -> is_positive_integer_power_of 16 ** 3, 16                           ), true
      @eq     ( Ωbrbr_213 = -> is_positive_integer_power_of 4503599627370496, 2                   ), true
      @eq     ( Ωbrbr_214 = -> is_positive_integer_power_of Number.MAX_SAFE_INTEGER, 2            ), false
      @throws ( Ωbrbr_215 = -> is_positive_integer_power_of 10000000000000000000000000000001, 10  ), /expected a \(safe\) integer, got 1e\+31/
      @throws ( Ωbrbr_216 = -> is_positive_integer_power_of 10, -10                               ), /expected an integer greater than 1, got -10/
      @throws ( Ωbrbr_217 = -> is_positive_integer_power_of -10, 10                               ), /expected a positive integer, got -10/
      @throws ( Ωbrbr_218 = -> is_positive_integer_power_of 10, 1                                 ), /expected an integer greater than 1, got 1/
      @throws ( Ωbrbr_219 = -> is_positive_integer_power_of -1, 10                                ), /expected a positive integer, got -1/
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_clean_assign: ->
    { clean,
      clean_all,
      clean_assign, } = SFMODULES.unstable.require_clean_assign()
    { type_of,                    } = SFMODULES.unstable.require_type_of()
    { freeze,                     } = Object
    #.......................................................................................................
    do =>
      d1      = freeze { a: 1, b: 9, z: 'Z', }
      @throws ( Ωbrbr_220 = -> clean d1 ), /unable to clean frozen object/
      return null
    #.......................................................................................................
    do =>
      d1      = { a: 1, b: 9, z: 'Z', }
      @eq ( Ωbrbr_221 = -> ( clean d1 ) is d1                   ), true
      @eq ( Ωbrbr_222 = -> clean d1                             ), { a: 1, b: 9, z: 'Z', }
      return null
    #.......................................................................................................
    do =>
      d2      = { foo: true,      gnu: undefined, lol: null, bar: false, }
      @eq ( Ωbrbr_223 = -> clean d2                             ), { foo: true, lol: null, bar: false, }
      return null
    #.......................................................................................................
    do =>
      d2      = { foo: true,      gnu: undefined, lol: null, bar: false, }
      @eq ( Ωbrbr_224 = -> Object.keys clean d2                 ), [ 'foo', 'lol', 'bar', ]
      return null
    #.......................................................................................................
    do =>
      d1      = { a: 1, b: 9, z: 'Z', }
      d2      = { foo: true,      gnu: undefined, lol: null, bar: false, }
      @eq ( Ωbrbr_225 = -> clean_all d1, d2                     ), [ { a: 1, b: 9, z: 'Z', }, { foo: true, lol: null, bar: false, }, ]
      return null
    #.......................................................................................................
    do =>
      d1      = freeze { a: 1, b: 9, z: 'Z', }
      d2      = freeze { foo: true,      gnu: undefined, lol: null, bar: false, }
      target  = {}
      @eq ( Ωbrbr_226 = -> clean_assign target, d1, d2                  ), { a: 1, b: 9, z: 'Z', foo: true, lol: null, bar: false, }
      @eq ( Ωbrbr_227 = -> ( clean_assign target, d1, d2 ) is target    ), true
      return null
    #.......................................................................................................
    do =>
      d1      = { a: 1, b: 9, z: 'Z', }
      d2      = { foo: true,      gnu: undefined, lol: null, bar: false, }
      e1      = freeze [ d1, d2, ]
      target  = {}
      @eq ( Ωbrbr_228 = -> clean_assign e1...                           ), { a: 1, b: 9, z: 'Z', foo: true, lol: null, bar: false, }
      @eq ( Ωbrbr_229 = -> ( clean_assign target, e1... ) is target     ), true
    #.......................................................................................................
    do =>
      d1      = freeze { a: 1, b: 9, z: 'Z', }
      d2      = freeze { foo: true,      gnu: undefined, lol: null, bar: false, }
      @eq ( Ωbrbr_230 = -> Object.keys clean_assign {}, d1, d2      ), [ 'a', 'b', 'z', 'foo', 'lol', 'bar', ]
      return null
    #.......................................................................................................
    do =>
      d2      =        { foo: true,      gnu: undefined, lol: null, bar: false, }
      d3      = freeze { foo: 333,       gnu: undefined, lol: null, bar: undefined, }
      d4      = freeze { foo: undefined, gnu: undefined, lol: null, bar: 444, }
      @eq ( Ωbrbr_231 = -> clean_assign d2, d3, d4              ), { foo: 333, lol: null, bar: 444, }
      return null
    #.......................................................................................................
    do =>
      d2      = freeze { foo: true,      gnu: undefined, lol: null, bar: false, }
      d3      = freeze { foo: 333,       gnu: undefined, lol: null, bar: undefined, }
      d4      = freeze { foo: undefined, gnu: undefined, lol: null, bar: 444, }
      target  = {}
      @eq ( Ωbrbr_232 = -> Object.keys clean_assign target, d2, d3, d4  ), [ 'foo', 'lol', 'bar', ]
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  require_remap: ->
    { remap, omit,                } = SFMODULES.unstable.require_remap()
    { freeze,                     } = Object
    { isDeepStrictEqual: equals,  } = require 'node:util'
    #.......................................................................................................
    do =>
      d1      = { a1: 'A1', b1: 'b1', c1: 'C1', }
      mapping = freeze { a1: 'A2',           c1: 'C2', }
      result  = remap d1, mapping
      @eq ( Ωbrbr_233 = -> result             ), { A2: 'A1', b1: 'b1', C2: 'C1', }
      @eq ( Ωbrbr_234 = -> result             ), d1
      @eq ( Ωbrbr_235 = -> Object.keys result ), [ 'A2', 'b1', 'C2', ]
      return null
    #.......................................................................................................
    do =>
      d1      = { address: 'Perth', name: 'Bob', job: 'employee', dob: 41, }
      mapping = freeze { address: 'city', job: omit, dob: 'age', }
      result  = remap d1, mapping
      debug 'Ωbrbr_236', result
      @eq ( Ωbrbr_237 = -> equals result, { city: 'Perth', name: 'Bob', age: 41, }  ), true
      @eq ( Ωbrbr_238 = -> result                                                   ), d1
      @eq ( Ωbrbr_239 = -> Object.keys result                                       ), [ 'city', 'name', 'age', ]
      return null
    #.......................................................................................................
    do =>
      d1      = { address: 'Perth', name: 'Bob', job: 'employee', age: 25, }
      mapping = freeze { address: 'city', job: omit, age: ( v ) -> { dob: 2025 - v, }, }
      result  = remap d1, mapping
      debug 'Ωbrbr_240', result
      @eq ( Ωbrbr_241 = -> result             ), { city: 'Perth', name: 'Bob', dob: 2000, }
      @eq ( Ωbrbr_242 = -> result             ), d1
      @eq ( Ωbrbr_243 = -> Object.keys result ), [ 'city', 'name', 'dob', ]
      return null
    #.......................................................................................................
    do =>
      d1      = { address: 'Perth', name: 'Bob', job: 'employee', weight: '98kg', }
      weight  = ( v ) -> { weight_u: ( v.replace /^[0-9.]+/g, '' ), weight_q: ( Number v.replace /[^0-9.]+$/g, '' ) }
      mapping = freeze { address: 'city', job: omit, weight, }
      result  = remap d1, mapping
      debug 'Ωbrbr_244', result
      @eq ( Ωbrbr_245 = -> result             ), { city: 'Perth', name: 'Bob', weight_u: 'kg', weight_q: 98, }
      @eq ( Ωbrbr_246 = -> result             ), d1
      @eq ( Ωbrbr_247 = -> Object.keys result ), [ 'city', 'name', 'weight_u', 'weight_q', ]
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_vdx: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    #.......................................................................................................
    do =>
      on_stats        = ( stats ) =>
        # info 'Ωbrbr_248', idx, stats # if stats.name is 'walk'
        if stats.name is 'walk'
          @eq ( Ωbrbr_249 = -> stats.rounds ), matcher.rounds
        return null
      # get_random      = new Get_random { seed: 838472384, on_stats, }
      get_random      = new Get_random { seed: null, on_stats, }
      get_rnd_length  = get_random.integer_producer { min:    1, max:     5, }
      get_rnd_idx     = get_random.integer_producer { min: -999, max:  +999, }
      get_rnd_vdx     = -> ( get_rnd_idx() for _ in [ 0 .. get_rnd_length() ] )
      for n in [ 0 .. 50 ]
        debug 'Ωbrbr_250', get_rnd_vdx()
      # #.....................................................................................................
      # result    =
      #   values:   []
      # matcher   =
      #   values:   [ 'ĂčÀ', 'tĢŅ', 'ľæű', 'Hpŗ', 'Śz^', 'ĖħŻ', 'żÉŉ', 'íĬČ', 'ĩuķ', 'ìīx', 'Ūm|' ]
      #   rounds:   0
      # #.....................................................................................................
      # producer  = -> get_random.text { min: 'A', max: 0x017f, length: 3, on_stats, }
      # for value from get_random.walk { producer, n: 11, on_stats, }
      #   idx++
      #   # debug 'Ωbrbr_251', idx, rpr value
      #   result.values.push value
      #   @eq ( Ωbrbr_252 = -> value ), matcher.values[ idx ]
      # @eq ( Ωbrbr_253 = -> idx                    ), 10
      # @eq ( Ωbrbr_254 = -> result.values.length   ), 11
      # return null
    # #.......................................................................................................
    # do =>
    #   get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
    #   result_rounds  = null
    #   on_stats        = ( stats ) =>
    #     info 'Ωbrbr_255', stats if stats.name is 'walk'
    #     result_rounds = stats.rounds if stats.name is 'walk'
    #     @eq ( Ωbrbr_256 = -> result_rounds >= 0 ), true
    #   #.....................................................................................................
    #   producer  = -> get_random.text { min: '0', max: '9', length: 1, }
    #   count     = 0
    #   seen      = new Set()
    #   for x from get_random.walk { producer, seen, n: 5, }
    #     count++
    #     debug 'Ωbrbr_257', count, rpr x
    #   return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_shuffle: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_get_random()
    #.......................................................................................................
    seed        = 876
    factor      = 1
    # factor      = 0.01
    get_random  = new Get_random { seed, }
    get_list    = -> Array.from 'abcdefghijk'
    @eq ( Ωbrbr_258 = -> ( get_random.shuffle get_list(), factor ).join '' ), 'ajckdbigfeh'
    @eq ( Ωbrbr_259 = -> ( get_random.shuffle get_list(), factor ).join '' ), 'adgiecfhbjk'
    @eq ( Ωbrbr_260 = -> ( get_random.shuffle get_list(), factor ).join '' ), 'hcijgedbfak'
    @eq ( Ωbrbr_261 = -> ( get_random.shuffle get_list(), factor ).join '' ), 'icfakgbhjde'
    #.......................................................................................................
    return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { require_anybase: tests.require_anybase, }
  # ( new Test guytest_cfg ).test { get_random_vdx: tests.get_random_vdx, }
  ( new Test guytest_cfg ).test { get_random_shuffle: tests.get_random_shuffle, }
  #.........................................................................................................
  return null
