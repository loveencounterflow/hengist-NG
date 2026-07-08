

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
  whisper }               = GUY.trm.get_loggers 'bricabrac-dbric'
{ rpr
  inspect
  echo
  white
  green
  blue
  gold
  grey
  red
  bold
  reverse
  log     }               = GUY.trm
{ f }                     = require '../../../apps/effstring'
# write                     = ( p ) -> process.stdout.write p
{ nfa }                   = require '../../../apps/normalize-function-arguments'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
FS                        = require 'node:fs'
PATH                      = require 'node:path'


# #===========================================================================================================
# remove = ( path ) ->
#   try
#     FS.unlinkSync path
#     help 'Ωflrt___1', "removed #{rpr path}"
#   catch error
#     throw error unless error.code is 'ENOENT'
#     urge 'Ωflrt___2', "no such FS object: #{rpr path}"
#   return null




#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  basics: ->
    class Counting_map extends Map
      constructor: ( iterable, delta = 0 ) ->
        super()
        @delta  = delta
        @set key for key from iterable
        ;undefined
      get:        ( key ) -> ( super key ) ? 0
      get_count:  ( key ) -> ( @get key ) + @delta
      set:        ( key ) -> super key, ( @get key ) + 1
    text    = """
    programmierung
    ⿱⻗⿰界界
    abcabcabc
    aaabbbccc
    ⿵冂⿱(⿰三三三三)(⿰丅丅丅丅)
    """
    text              = text.replace /[\(\)⿱⿰⿵]/gv, ''
    words             = text.split /\s+/gv
    pattern_1         = /// (.) (?=.*\1) ///gv
    n                 = 2
    pattern_n         = new RegExp """(?=(.{#{n}})(?=.*\\1))""", 'gv'
    find_repetitions  = ( word ) -> [ ( word.matchAll pattern_n )..., ].map ( m ) => m[ 1 ]
    for word in words
      matches = word.match pattern_1
      debug 'Ωcrmmd___3', ( rpr word, ), matches, new Counting_map matches, 1
      debug 'Ωcrmmd___4', ( rpr word, ), find_repetitions word
    #console.log(matches); // ["r", "o", "g", "r", "a", "m", "i"]
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  nr2: ->
    class Counting_map extends Map
      constructor: ( iterable, delta = 0 ) ->
        super()
        @delta  = delta
        @set key for key from iterable
        ;undefined
      get:        ( key ) -> ( super key ) ? 0
      get_count:  ( key ) -> ( @get key ) + @delta
      set:        ( key ) -> super key, ( @get key ) + 1
    text    = """
    programmierung
    ⿱⻗⿰界界
    xxaaaabbbbccccxx
    xxabcabcabcabcxx
    x0abcabcabcabcx0
    器:口口口口犬
    器:口口犬口口
    ⿵冂⿱(⿰三三三三)(⿰丅丅丅丅)
    dfpqrstdf
    dfpqdstdf
    """
    # 口犬口犬口
    # 器:㗊犬
    # 器:哭吅
    # 㗊:吕吕
    # 㗊:吅吅
    # 吕:口口
    # 吅:口口
    text              = text.replace /[\(\)⿱⿰⿵]/gv, ''
    words             = text.split /\s+/gv
    pattern_1         = /// (.) (?=.*\1) ///gv
    # n                 = 2
    # pattern_n         = new RegExp """(?=(.{#{n}})(?=.*\\1))""", 'gv'
    # find_repetitions  = ( word ) -> [ ( word.matchAll pattern_n )..., ].map ( m ) => m[ 1 ]
    #-------------------------------------------------------------------------------------------------------
    is_repetitive = ( t ) ->
      tt    = t + t
      tt_1  = tt.replace /^.(.*?).$/v, '$1'
      return ( tt_1.indexOf t ) > -1
    #-------------------------------------------------------------------------------------------------------
    find_reduplication_candidates = ( word ) ->
      R             = new Map()
      chrs          = Array.from word
      return R if chrs.length is 1
      max_length    = chrs.length // 2
      extra_counts  = ( n for n in [ 1 .. max_length ] by +1 )
      repeated_chrs = new Set word.match pattern_1
      # debug 'Ωcrmmd___5', { extra_counts, }
      #.....................................................................................................
      for chr, idx_1 in chrs
        continue unless repeated_chrs.has chr
        R.set chr, idx_1 unless R.has chr
        for extra_count in extra_counts
          idx_2 = idx_1 + extra_count
          break if idx_2 >= chrs.length
        # continue unless matches chr
          candidate = chrs[ idx_1 .. idx_2 ].join ''
          continue if R.has candidate
          continue if is_repetitive candidate
          R.set candidate, idx_1
      #.....................................................................................................
      return R
    #-------------------------------------------------------------------------------------------------------
    find_all_repetitions = ( word ) ->
      R           = new Map()
      candidates  = find_reduplication_candidates word
      info 'Ωcrmmd___7', rpr word
      # help 'Ωcrmmd___8', candidates
      #.....................................................................................................
      for [ candidate, idx_0, ] from candidates
        indexes = new Set [ idx_0, ]
        # urge 'Ωcrmmd___9', idx_0, reverse ( rpr candidate )
        idx_1 = idx_0 + 1
        loop
          break if idx_1 > word.length ### TAINT: what about chrs beyond 0xffff? ###
          idx_2 = word.indexOf candidate, idx_1
          break if idx_2 < 0
          idx_1 += 1
          continue if indexes.has idx_2
          # debug 'Ωcrmmd__10', idx_2, ( rpr candidate ), [ indexes..., ], idx_2
          ### NOTE: filter out overlapping matches like 'aba' in 'ababa' ###
          last_idx = [ indexes..., ].at -1 ### TAINT should not have to use this cludge ###
          continue if last_idx + candidate.length > idx_2 ### TAINT: what about chrs beyond 0xffff? ###
          indexes.add idx_2
        R.set candidate, [ indexes..., ] if indexes.size > 1
      #.....................................................................................................
      return R
    #=======================================================================================================
    for word in words
      repetitions = find_all_repetitions word
      count       = 0
      for [ repetition, indexes, ] from repetitions
        count++
        chr_count   = repetition.length
        idx_count   = indexes.length
        area        = chr_count * idx_count
        urge 'Ωcrmmd__11', count, ':', chr_count, idx_count, area, ( rpr word ), ( rpr repetition ), indexes
    #console.log(matches); // ["r", "o", "g", "r", "a", "m", "i"]
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  nr3: ->
    is_repetitive = ( t ) ->
      tt    = t + t
      tt_1  = tt.replace /^.(.*?).$/v, '$1'
      debug 'Ωcrmmd__12', rpr t
      # debug 'Ωcrmmd__13', rpr tt
      # debug 'Ωcrmmd__14', rpr tt_1
      return ( tt_1.indexOf t ) > -1
    info 'Ωcrmmd__15', is_repetitive 'abc'
    info 'Ωcrmmd__16', is_repetitive 'a'
    info 'Ωcrmmd__17', is_repetitive 'aa'
    info 'Ωcrmmd__18', is_repetitive 'aaa'
    info 'Ωcrmmd__19', is_repetitive 'aaac'
    info 'Ωcrmmd__20', is_repetitive 'abca'
    info 'Ωcrmmd__21', is_repetitive 'abcabc'
    ;null


#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: true, report_checks: true, }
  ( new Test guytest_cfg ).test { nr2: tests.nr2, }
  # ( new Test guytest_cfg ).test { nr3: tests.nr3, }
  # # ( new Test guytest_cfg ).test { sample_db_with_bsql: tests.sample_db_with_bsql, }
  # ( new Test guytest_cfg ).test { udf_functions_with_nsql: tests.udf_functions_with_nsql, }
  # ( new Test guytest_cfg ).test { udf_functions_with_bsql: tests.udf_functions_with_bsql, }
  # ( new Test guytest_cfg ).test { udf_aggregates_with_bsql: tests.udf_aggregates_with_bsql, }
  # ( new Test guytest_cfg ).test { udf_aggregates_with_nsql: tests.udf_aggregates_with_nsql, }
  # ( new Test guytest_cfg ).test { udf_table_function_with_bsql: tests.udf_table_function_with_bsql, }
  # ( new Test guytest_cfg ).test { file_mirror_as_table_function: tests.file_mirror_as_table_function, }

  # echo 'a\u2028b\nz'
