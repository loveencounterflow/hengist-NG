

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
    do =>
      on_stats    = ( stats ) ->
        # debug 'Ωbrbr__17', stats
      get_random  = new Get_random { seed: settings.my_seed_2, on_stats, }
      result      = ( get_random.chr { max: 0xff, filter: /[aeiouyAEIOUY]/, } for _ in [ 1 .. 40 ] ).join ''
      debug 'Ωbrbr__18', rpr result
      @eq ( Ωbrbr__19 = -> /^[aeiouyAEIOUY]{40}$/.test result ), true
      @eq ( Ωbrbr__20 = -> result ), 'yyUyIuuUaaIuUaUIIyOIoAYEOiOYIuiOuaiAUUeE'
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_chr_producer: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_random_tools()
    #.......................................................................................................
    do =>
      retries     = 0
      on_stats    = ( stats ) -> retries += stats.stats.retries if stats.name is 'chr'
      get_random  = new Get_random { seed: settings.my_seed_2, on_stats, }
      chr         = get_random.chr_producer { max: 0xff, filter: /[aeiouyAEIOUY]/, }
      result      = ( chr() for _ in [ 1 .. 40 ] ).join ''
      debug 'Ωbrbr__21', retries, ( rpr result )
      @eq ( Ωbrbr__22 = -> /^[aeiouyAEIOUY]{40}$/.test result ), true
      @eq ( Ωbrbr__23 = -> result ), 'yyUyIuuUaaIuUaUIIyOIoAYEOiOYIuiOuaiAUUeE'
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
        # info 'Ωbrbr__24', stats
      get_random  = new Get_random { seed: settings.my_seed_1, on_stats, }
      result      = get_random.text { min: 'A', max: 'Z', length: 40, }
      @eq ( Ωbrbr__25 = -> result ), 'PQKESUUNYHBEWGHGWECRSZZLVOSFQSETNSEXDFGF'
      return null
    #.......................................................................................................
    do =>
      count_attempts  = ( n ) -> retries[ n ] = ( retries[ n ] ?= 0 ) + 1
      retries        = {}
      on_stats        = ( stats ) ->
        # help 'Ωbrbr__26', stats
        return null unless stats.name is 'chr'
        count_attempts stats.stats.retries
        return null
      valid_re    = /// ^ [ \u0020-\u007e \u00a0-\u00ac \u00ae-\u00ff ]{ 150 } $ ///v
      get_random  = new Get_random { seed: null, on_stats, }
      for _ in [ 1 .. 1 ]
      # for _ in [ 1 .. 10 ]
        result = get_random.text { min: 0x00, max: 0xff, length: 150, }
        @eq ( Ωbrbr__27 = -> valid_re.test result ), true
      # debug 'Ωbrbr__28', retries
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
        # urge 'Ωbrbr__29', stats if stats.name is 'set_of_chrs'
        return null
      valid_re    = /// ^ [ \u0020-\u007e \u00a0-\u00ac \u00ae-\u00ff ]{ 50 } $ ///v
      get_random  = new Get_random { seed: null, on_stats, }
      for _ in [ 1 .. 20 ]
        result      = get_random.set_of_chrs { min: 0x00, max: 0xff, size: 50, }
        result_rpr  = [ result..., ].join ''
        @eq ( Ωbrbr__30 = -> valid_re.test result_rpr ), true
        # debug 'Ωbrbr__31', retries
        retries = 0
      return null
    #.......................................................................................................
    do =>
      retries         = 0
      on_stats        = ( stats ) ->
        retries += stats.stats.retries
        # urge 'Ωbrbr__32', stats if stats.name is 'set_of_chrs'
        return null
      valid_re    = /// ^ [ 0-9 ]{ 10 } $ ///v
      get_random  = new Get_random { seed: null, on_stats, }
      for _ in [ 1 .. 20 ]
        result      = get_random.set_of_chrs { min: '0', max: '9', size: 10, }
        result_rpr  = [ result..., ].join ''
        @eq ( Ωbrbr__33 = -> result.size              ), 10
        @eq ( Ωbrbr__34 = -> valid_re.test result_rpr ), true
        # debug 'Ωbrbr__35', retries, rpr result
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
        # urge 'Ωbrbr__36', stats if stats.name is 'set_of_chrs'
        return null
      valid_re    = /// ^ [ 0-9 ]{ 3 } $ ///v
      get_random  = new Get_random { seed: null, on_stats, }
      for _ in [ 1 .. 1 ]
        result      = get_random.set_of_texts { min: '0', max: '9', length: 3, size: 10, }
        @eq ( Ωbrbr__37 = -> result.size              ), 10
        for random_text from result
          @eq ( Ωbrbr__38 = -> valid_re.test random_text ), true
        # debug 'Ωbrbr__39', retries, rpr result
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
      result_retries  = null
      on_stats        = ( stats ) =>
        # info 'Ωbrbr__40', stats
        result_retries = stats.stats.retries
        @eq ( Ωbrbr_result_retries__41 = -> result_retries >= 0 ), true
      get_random  = new Get_random { seed: settings.my_seed_1, on_stats, }
      for idx in [ 0 .. 9 ]
        result      = get_random.text { min: 'Α', max: 'ω', min_length: 1, max_length: 5, }
        debug 'Ωbrbr__42', rpr result
        @eq ( Ωbrbr__43 = -> result ), matchers[ idx ]
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_text_of_variable_length_with_filter: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_random_tools()
    result_matchers = [ 'Ακθ', 'ΑΣ', 'ΑΜ', 'ΑίΥΔ', 'ΑήδΛ', 'ΑήςδΠ', 'ΑξΡΤΘ', 'ΑΤΚΞ', 'ΑγιΔε', 'Αή', ]
    retry_matchers  = [ 34, 15, 189, 121, 75, 47, 87, 43, 119, 200, ]
    #.......................................................................................................
    do =>
      result_retries  = null
      on_stats        = ( stats ) =>
        return null unless stats.name is 'text'
        # info 'Ωbrbr__44', idx, stats
        result_retries = stats.stats.retries
        @eq ( Ωbrbr_result_retries__45 = ->  result_retries ), retry_matchers[ idx ]
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
      internals,  } = SFMODULES.unstable.require_random_tools()
    result_matchers = [ 'Ακθ', 'ΑΣ', 'ΑΜ', 'ΑίΥΔ', 'ΑήδΛ', 'ΑήςδΠ', 'ΑξΡΤΘ', 'ΑΤΚΞ', 'ΑγιΔε', 'Αή', ]
    retry_matchers  = [ 34, 15, 189, 121, 75, 47, 87, 43, 119, 200, ]
    #.......................................................................................................
    do =>
      result_retries  = null
      on_stats        = ( stats ) =>
        return null unless stats.name is 'text'
        # info 'Ωbrbr__49', idx, stats
        result_retries = stats.stats.retries
        @eq ( Ωbrbr_result_retries__50 = ->  result_retries ), retry_matchers[ idx ]
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
      internals,  } = SFMODULES.unstable.require_random_tools()
    result_matchers = [ 16.084712848532945, 16.42560794018209, 14.009152099024504, 18.174642121884972, 12.86115032620728, 10.208302834071219, 18.753091448452324, 12.430183209944516, 12.627715056296438, 12.425259067676961, ]
    # retry_matchers  = [ 34, 15, 189, 121, 75, 47, 87, 43, 119, 200, ]
    #.......................................................................................................
    do =>
      result_retries  = null
      on_stats        = ( stats ) =>
        return null unless stats.name is 'text'
        # info 'Ωbrbr__54', idx, stats
        result_retries = stats.stats.retries
        @eq ( Ωbrbr_result_retries__55 = ->  result_retries ), retry_matchers[ idx ]
      get_random        = new Get_random { seed: settings.my_seed_1, on_stats, }
      filter            = ( n ) -> ( Math.floor n ) %% 2 is 0
      get_random_float  = get_random.float_producer { min: 10, max: 20, filter, }
      for idx in [ 0 .. 9 ]
        result      = get_random_float()
        debug 'Ωbrbr__56', rpr result
        @eq ( Ωbrbr__57 = -> result ), result_matchers[ idx ]
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_random_integer_producer: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_random_tools()
    result_matchers = [ 16, 16, 14, 12, 18, 18, 20, 10, 12, 12, ]
    retries_matcher = [ 0, 0, 0, 0, 1, 0, 1, 1, 2, 1 ]
    #.......................................................................................................
    do =>
      on_stats            = ( stats ) =>
        retries.push stats.stats.retries if stats.name is 'integer'
      retries             = []
      get_random          = new Get_random { seed: settings.my_seed_1, on_stats, }
      filter              = ( n ) -> ( Math.floor n ) %% 2 is 0
      get_random_integer  = get_random.integer_producer { min: 10, max: 20, filter, }
      for idx in [ 0 .. 9 ]
        result = get_random_integer()
        debug 'Ωbrbr__58', rpr result
        @eq ( Ωbrbr__59 = -> result ), result_matchers[ idx ]
      @eq ( Ωbrbr__60 = -> retries ), retries_matcher
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
      result_retries  = null
      on_stats        = ( stats ) =>
        info 'Ωbrbr__61', stats if stats.name is 'set_of_texts'
        result_retries = stats.stats.retries if stats.name is 'set_of_texts'
        @eq ( Ωbrbr_result_retries__62 = -> result_retries >= 0 ), true
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
        @eq ( Ωbrbr__63 = -> result ), matchers[ idx ]
        # debug 'Ωbrbr__64', result
      return null
    #.......................................................................................................
    do =>
      #.....................................................................................................
      result_retries  = null
      on_stats        = ( stats ) =>
        result_retries = stats.stats.retries if stats.name is 'set_of_texts'
        @eq ( Ωbrbr_result_retries__65 = -> result_retries >= 0 ), true
      #.....................................................................................................
      get_random  = new Get_random { seed: settings.my_seed_1, on_stats, }
      matchers    = [
        { result_retries:  4, result_rpr: '5641793082', }
        { result_retries: 63, result_rpr: '2816794530', }
        { result_retries: 11, result_rpr: '4538196072', }
        { result_retries: 20, result_rpr: '7831924056', }
        { result_retries: 76, result_rpr: '0325467819', }
        { result_retries:  7, result_rpr: '3149760582', }
        { result_retries: 20, result_rpr: '2857361094', }
        { result_retries: 31, result_rpr: '4523786091', }
        { result_retries: 13, result_rpr: '4813560297', }
        { result_retries: 19, result_rpr: '7491065823', }
        ]
      for idx in [ 0 .. 9 ]
        result      = get_random.set_of_texts { min: '0', max: '9', size: 10, length: 1, }
        result_rpr  = [ result..., ].join ''
        @eq ( Ωbrbr__66 = -> result_rpr     ), matchers[ idx ].result_rpr
        # @eq ( Ωbrbr__67 = -> result_retries ), matchers[ idx ].result_retries
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  exhaustion: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_random_tools()
    #.......................................................................................................
    do =>
      result_retries  = null
      on_stats        = ( stats ) =>
        # info 'Ωbrbr__68', stats if stats.name is 'walk'
        # result_retries = stats.stats.retries if stats.name is 'walk'
        # @eq ( Ωbrbr_result_retries__69 = -> result_retries >= 0 ), true
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      #.....................................................................................................
      cfg =
        min:            'A'
        max:            'Z'
        length:         3
        filter:         /^[a-z]{3}$/
        on_exhaustion: 'error'
      @throws ( Ωbrbr__70 = -> get_random.text cfg ), /exhausted/
      return null
    #.......................................................................................................
    do =>
      result_retries  = null
      on_stats        = ( stats ) =>
        # info 'Ωbrbr__71', stats if stats.name is 'walk'
        # result_retries = stats.stats.retries if stats.name is 'walk'
        # @eq ( Ωbrbr_result_retries__72 = -> result_retries >= 0 ), true
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      #.....................................................................................................
      cfg =
        min:            'A'
        max:            'Z'
        length:         3
        filter:         /^[a-z]{3}$/
        on_exhaustion: -> null
      @eq ( Ωbrbr__73 = -> get_random.text cfg ), null
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  walk: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_random_tools()
    #.......................................................................................................
    do =>
      get_random      = new Get_random { seed: settings.my_seed_1, on_stats, }
      result_retries  = null
      on_stats        = ( stats ) =>
        info 'Ωbrbr__74', stats if stats.name is 'walk'
        result_retries = stats.stats.retries if stats.name is 'walk'
        @eq ( Ωbrbr_result_retries__75 = -> result_retries >= 0 ), true
      #.....................................................................................................
      producer = -> get_random.text { min: 'A', max: 0x017f, length: 3, }
      for x from get_random.walk { producer, n: 11, }
        debug 'Ωbrbr__76', rpr x
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  stats: ->
    { Get_random,
      internals,  } = SFMODULES.unstable.require_random_tools()
    #.......................................................................................................
    do =>
      sentinel      = Symbol 'sentinel'
      on_exhaustion = -> sentinel
      stats = new internals.Stats { name: 'something', on_exhaustion, }
      @eq     ( Ωbrbr__77 = -> stats.name           ), 'something'
      @eq     ( Ωbrbr__78 = -> stats.max_retries    ), internals.max_retries
      @eq     ( Ωbrbr__79 = -> stats.retries        ), 0
      @throws ( Ωbrbr__80 = -> stats.retries++      ), /Cannot set property/
      @eq     ( Ωbrbr__81 = -> stats.retry()        ), internals.go_on
      @eq     ( Ωbrbr__82 = -> stats.retries        ), 1
      stats._retries = internals.max_retries - 2
      # debug 'Ωbrbr__83', stats
      # debug 'Ωbrbr__84', stats.retries
      # debug 'Ωbrbr__85', internals.max_retries
      # debug 'Ωbrbr__86', stats.max_retries
      @eq ( Ωbrbr__87 = -> stats.retry() ), internals.go_on
      @eq ( Ωbrbr__88 = -> stats.retry() ), sentinel
      @eq ( Ωbrbr__89 = -> stats.retry() ), sentinel
      return null
    #.......................................................................................................
    do =>
      on_exhaustion = undefined
      stats = new internals.Stats { name: 'something', on_exhaustion, }
      stats._retries = internals.max_retries - 2
      @eq     ( Ωbrbr__90 = -> stats.retry() ), internals.go_on
      @throws ( Ωbrbr__91 = -> stats.retry() ), /exhausted/
      @throws ( Ωbrbr__92 = -> stats.retry() ), /exhausted/
      return null
    #.......................................................................................................
    do =>
      on_exhaustion = null
      stats = new internals.Stats { name: 'something', on_exhaustion, }
      stats._retries = internals.max_retries - 2
      @eq     ( Ωbrbr__93 = -> stats.retry() ), internals.go_on
      @throws ( Ωbrbr__94 = -> stats.retry() ), /exhausted/
      @throws ( Ωbrbr__95 = -> stats.retry() ), /exhausted/
      return null
    #.......................................................................................................
    do =>
      on_exhaustion = 'error'
      stats = new internals.Stats { name: 'something', on_exhaustion, }
      stats._retries = internals.max_retries - 2
      @eq     ( Ωbrbr__96 = -> stats.retry() ), internals.go_on
      @throws ( Ωbrbr__97 = -> stats.retry() ), /exhausted/
      @throws ( Ωbrbr__98 = -> stats.retry() ), /exhausted/
      return null
    #.......................................................................................................
    return null

#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { walk: tests.walk, }
  # ( new Test guytest_cfg ).test { exhaustion: tests.exhaustion, }
  ( new Test guytest_cfg ).test { stats: tests.stats, }
  # ( new Test guytest_cfg ).test { get_random_integer_producer: tests.get_random_integer_producer, }
  #.........................................................................................................
  return null
