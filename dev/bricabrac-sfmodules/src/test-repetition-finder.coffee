

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
{ type_of,              } = ( require '../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics' ).require_type_of()

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
require_find_repetitions = ->

  #---------------------------------------------------------------------------------------------------------
  repeated_chrs_re          = /// (.) (?=.*\1) ///gv
  is_shorter_than_two_chrs  = ( text ) -> /// ^ .? $ ///v.test text

  #---------------------------------------------------------------------------------------------------------
  is_purely_repetitive = ( text ) ->
    ### Given a string, return whether it is 'wholly' (or 'purely') repetitive, that is, entirely
    representable as the repetition of a shorter substring. The established way to test for this condition
    for a given string `t` is to determine whether `t` is a substring of the test string concatenated with
    itself, after dropping the first and the last characters from the reduplicated string (in Python
    notation) `t in ( t + t )[ 1 : -1 ]` (so e.g. `abcabc` is a substring of `bcabcabcab`). Our solution is
    a little longer to account for JS's UTF-16 encoding. Also, we stipulate that all strings shorter than 2
    characters are not purely repetitive (note that 'dropping first and last characters' cannot be applied
    to strings shorter than two characters anyway). ###
    return false if is_shorter_than_two_chrs text
    tt = ( text + text ).replace /// ^ . (.*?) .$ ///v, '$1' ### concat with self, drop first & last chr ###
    return ( tt.indexOf text ) > -1

  #---------------------------------------------------------------------------------------------------------
  find_reduplication_candidates = ( text ) ->
    ### Given a `text`, return a `Map` from (potentially recurrent) substrings along with the
    (UTF-16-string-based, not character-based) index of their *first* occurrance in `t`. This reasoning for
    the set of substring returned is as follows: out of all substrings `s` of a given text `t` we only have
    to consider substrings up to half the length of `t`, otherwise there's no space in `t` to accommodate
    two or more non-overlapping occurences of `s`. Second, in order for there to be a repetitive substring
    `s`, at least the first character of `s` must occur more than once in `t`. Given a list of repetitive
    characters of `t` with their indices, we can then build a list of all candidate substrings that are not
    'too long' or are purely repetitive themselves, where 'too long' means that a substring at a certain
    position in `t` must have after it least as many characters as it itself has in order to be viable. ###
    R             = new Map()
    return R if is_shorter_than_two_chrs text
    code_units    = text.length ### b/c of UTF-16 ###
    chrs          = Array.from text
    max_length    = chrs.length // 2
    extra_counts  = ( n for n in [ 1 ... max_length ] by +1 )
    repeated_chrs = new Set text.match repeated_chrs_re
    #.......................................................................................................
    for chr, idx_1 in chrs
      continue unless repeated_chrs.has chr
      R.set chr, idx_1 unless R.has chr
      for extra_count in extra_counts
        idx_2 = idx_1 + extra_count
        break if idx_2 >= chrs.length
      # continue unless matches chr
        candidate = chrs[ idx_1 .. idx_2 ].join ''
        continue if R.has candidate
        ### can abort as soon as candidate wouldn't fit into rest of text after its first occurrance: ###
        break if idx_1 + candidate.length * 2 > code_units
        ### can forego candidates that are purely repetitive themselves: ###
        continue if is_purely_repetitive candidate
        R.set candidate, idx_1
    #.......................................................................................................
    return R

  #---------------------------------------------------------------------------------------------------------
  find_all_repetitions = ( word ) ->
    R           = new Map()
    candidates  = find_reduplication_candidates word
    #.......................................................................................................
    for [ candidate, idx_0, ] from candidates
      indexes = new Set [ idx_0, ]
      idx_1 = idx_0 + 1
      loop
        break if idx_1 > word.length ### TAINT: what about chrs beyond 0xffff? ###
        #...................................................................................................
        idx_2 = word.indexOf candidate, idx_1
        break if idx_2 < 0
        #...................................................................................................
        idx_1 += 1
        continue if indexes.has idx_2
        #...................................................................................................
        ### NOTE: filter out overlapping matches like 'aba' in 'ababa' ###
        last_idx = [ indexes..., ].at -1 ### TAINT should not have to use this cludge ###
        continue if last_idx + candidate.length > idx_2 ### TAINT: what about chrs beyond 0xffff? ###
        indexes.add idx_2
      R.set candidate, [ indexes..., ] if indexes.size > 1
    #.......................................................................................................
    return R

  # #---------------------------------------------------------------------------------------------------------
  # as_text = ( repcs ) -> ( \
  #   "#{JSON.stringify sequence}:#{JSON.stringify indices}" for [ sequence, indices, ] from repcs ).join ','
  #---------------------------------------------------------------------------------------------------------
  as_text = ( repcs ) -> JSON.stringify Object.fromEntries repcs

  #=========================================================================================================
  return {
    is_purely_repetitive,
    find_all_repetitions,
    internals: {
      repeated_chrs_re,
      is_shorter_than_two_chrs,
      find_reduplication_candidates,
      as_text,
      }, }


#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  interface: ->
    FREP = require_find_repetitions()
    @eq ( Ωcrmmd___7 = -> type_of FREP.is_purely_repetitive                     ), 'function'
    @eq ( Ωcrmmd___8 = -> type_of FREP.internals.find_reduplication_candidates  ), 'function'
    @eq ( Ωcrmmd___9 = -> type_of FREP.find_all_repetitions                     ), 'function'
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  is_shorter_than_two_chrs: ->
    { internals, } = require_find_repetitions()
    #.......................................................................................................
    @eq ( Ωcrmmd__10 = -> internals.is_shorter_than_two_chrs ''           ), true
    @eq ( Ωcrmmd__11 = -> internals.is_shorter_than_two_chrs 'a'           ), true
    @eq ( Ωcrmmd__12 = -> internals.is_shorter_than_two_chrs 'aa'           ), false
    @eq ( Ωcrmmd__13 = -> internals.is_shorter_than_two_chrs 'aaa'           ), false
    @eq ( Ωcrmmd__14 = -> internals.is_shorter_than_two_chrs '𪜅'           ), true
    @eq ( Ωcrmmd__15 = -> internals.is_shorter_than_two_chrs '𪜅a'           ), false
    @eq ( Ωcrmmd__16 = -> internals.is_shorter_than_two_chrs '𪜅aa'           ), false
    @eq ( Ωcrmmd__17 = -> internals.is_shorter_than_two_chrs 'a𪜅'           ), false
    @eq ( Ωcrmmd__18 = -> internals.is_shorter_than_two_chrs 'aa𪜅'           ), false
    @eq ( Ωcrmmd__19 = -> internals.is_shorter_than_two_chrs '𪜅𪜅'           ), false
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  is_purely_repetitive: ->
    { is_purely_repetitive, } = require_find_repetitions()
    #.......................................................................................................
    @eq ( Ωcrmmd__20 = -> is_purely_repetitive ''           ), false
    @eq ( Ωcrmmd__21 = -> is_purely_repetitive 'a'          ), false
    @eq ( Ωcrmmd__22 = -> is_purely_repetitive 'abc'        ), false
    @eq ( Ωcrmmd__23 = -> is_purely_repetitive 'aaac'       ), false
    @eq ( Ωcrmmd__24 = -> is_purely_repetitive 'abca'       ), false
    @eq ( Ωcrmmd__25 = -> is_purely_repetitive 'aa'         ), true
    @eq ( Ωcrmmd__26 = -> is_purely_repetitive 'aaa'        ), true
    @eq ( Ωcrmmd__27 = -> is_purely_repetitive 'abcabc'     ), true
    @eq ( Ωcrmmd__28 = -> is_purely_repetitive '𪜀'        ), false
    @eq ( Ωcrmmd__29 = -> is_purely_repetitive '𪜀𪜀'       ), true
    @eq ( Ωcrmmd__30 = -> is_purely_repetitive 'a𪜀𪜀'      ), false
    @eq ( Ωcrmmd__31 = -> is_purely_repetitive 'a𪜀a𪜀'     ), true
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  find_reduplication_candidates: ->
    { internals,
      internals,              } = require_find_repetitions()
    #.......................................................................................................
    probes_and_matchers = [
      [ '', '{}' ]
      [ 'a', '{}' ]
      [ 'aa', '{"a":0}' ]
      [ 'abc', '{}' ]
      [ 'abca', '{"a":0,"ab":0}' ]
      [ 'abcab', '{"a":0,"ab":0,"b":1,"bc":1}' ]
      [ 'abcabc', '{"a":0,"ab":0,"abc":0,"b":1,"bc":1,"c":2,"ca":2}' ]
      [ '𪜅𪜅', '{"𪜅":0}' ]
      [ 'programmierung', '{"r":1,"ro":1,"rog":1,"rogr":1,"rogra":1,"rogram":1,"g":3,"gr":3,"gra":3,"gram":3,"gramm":3,"ra":4,"ram":4,"ramm":4,"rammi":4,"m":6,"mmi":6,"mmie":6,"mi":7,"mie":7,"ru":10}' ]
      [ 'xxaaaabbbbccccxx', '{"x":0,"xxa":0,"xxaa":0,"xxaaa":0,"xxaaaa":0,"xxaaaab":0,"xxaaaabb":0,"xa":1,"xaa":1,"xaaa":1,"xaaaa":1,"xaaaab":1,"xaaaabb":1,"a":2,"aaaab":2,"aaaabb":2,"aaaabbb":2,"aaab":3,"aaabb":3,"aaabbb":3,"aab":4,"aabb":4,"aabbb":4,"aabbbb":4,"ab":5,"abb":5,"abbb":5,"abbbb":5,"b":6,"bbbbc":6,"bbbc":7,"bbc":8,"bbcc":8,"bc":9,"bcc":9,"c":10}' ]
      [ 'xxabcabcabcabcxx', '{"x":0,"xxa":0,"xxab":0,"xxabc":0,"xxabca":0,"xxabcab":0,"xxabcabc":0,"xa":1,"xab":1,"xabc":1,"xabca":1,"xabcab":1,"xabcabc":1,"a":2,"ab":2,"abc":2,"abca":2,"abcab":2,"abcabca":2,"b":3,"bc":3,"bca":3,"bcab":3,"bcabc":3,"c":4,"ca":4,"cab":4,"cabc":4,"cabca":4}' ]
      [ 'x0abcabcabcabcx0', '{"0":1,"x":0,"x0":0,"x0a":0,"x0ab":0,"x0abc":0,"x0abca":0,"x0abcab":0,"x0abcabc":0,"0a":1,"0ab":1,"0abc":1,"0abca":1,"0abcab":1,"0abcabc":1,"a":2,"ab":2,"abc":2,"abca":2,"abcab":2,"abcabca":2,"b":3,"bc":3,"bca":3,"bcab":3,"bcabc":3,"c":4,"ca":4,"cab":4,"cabc":4,"cabca":4}' ]
      [ 'dfpqrstdf', '{"d":0,"df":0,"dfp":0,"dfpq":0,"f":1,"fp":1,"fpq":1,"fpqr":1}' ]
      [ 'dfpqdstdf', '{"d":0,"df":0,"dfp":0,"dfpq":0,"f":1,"fp":1,"fpq":1,"fpqd":1,"ds":4}' ]
      [ '冂三三三三丅丅丅丅', '{"三":1,"三三丅":3,"三丅":4,"丅":5}' ]
      [ '⻗界界', '{"界":1}' ]
      [ '口口口口犬', '{"口":0}' ]
      [ '𪜀𪜀𪜀𪜀犬', '{"𪜀":0,"𪜀犬":3}' ]
      [ '口口犬口口', '{"口":0,"口犬":1}' ]
      [ '口犬口犬口', '{"口":0,"口犬":0,"犬":1,"犬口":1}' ]
      [ '𪜀犬𪜀犬𪜀', '{"𪜀":0,"𪜀犬":0,"犬":1,"犬𪜀":1}' ]
      [ '㗊犬', '{}' ]
      [ '哭吅', '{}' ]
      [ '吕吕', '{"吕":0}' ]
      [ '吅吅', '{"吅":0}' ]
      [ '口口', '{"口":0}' ]
      [ '口口', '{"口":0}' ]
      ]
    #.......................................................................................................
    for [ probe, matcher, ] in probes_and_matchers
      result  = internals.find_reduplication_candidates probe
      result  = internals.as_text result
      # echo [ probe, result, ]
      @eq ( Ωcrmmd__32 = -> result ), matcher
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  find_all_repetitions: ->
    { find_all_repetitions,
      internals,              } = require_find_repetitions()
    #.......................................................................................................
    probes_and_matchers = [
      [ '', '{}' ]
      [ 'a', '{}' ]
      [ 'aa', '{"a":[0,1]}' ]
      [ '𪜅𪜅', '{"𪜅":[0,2]}' ]
      [ 'programmierung', '{"r":[1,4,10],"g":[3,13],"m":[6,7]}' ]
      [ 'xxaaaabbbbccccxx', '{"x":[0,1,14,15],"a":[2,3,4,5],"b":[6,7,8,9],"c":[10,11,12,13]}' ]
      [ 'xxabcabcabcabcxx', '{"x":[0,1,14,15],"a":[2,5,8,11],"ab":[2,5,8,11],"abc":[2,5,8,11],"abca":[2,8],"abcab":[2,8],"b":[3,6,9,12],"bc":[3,6,9,12],"bca":[3,6,9],"bcab":[3,9],"bcabc":[3,9],"c":[4,7,10,13],"ca":[4,7,10],"cab":[4,7,10],"cabc":[4,10]}' ]
      [ 'x0abcabcabcabcx0', '{"0":[1,15],"x":[0,14],"x0":[0,14],"a":[2,5,8,11],"ab":[2,5,8,11],"abc":[2,5,8,11],"abca":[2,8],"abcab":[2,8],"b":[3,6,9,12],"bc":[3,6,9,12],"bca":[3,6,9],"bcab":[3,9],"bcabc":[3,9],"c":[4,7,10,13],"ca":[4,7,10],"cab":[4,7,10],"cabc":[4,10]}' ]
      [ 'dfpqrstdf', '{"d":[0,7],"df":[0,7],"f":[1,8]}' ]
      [ 'dfpqdstdf', '{"d":[0,4,7],"df":[0,7],"f":[1,8]}' ]
      [ '冂三三三三丅丅丅丅', '{"三":[1,2,3,4],"丅":[5,6,7,8]}' ]
      [ '⻗界界', '{"界":[1,2]}' ]
      [ '口口口口犬', '{"口":[0,1,2,3]}' ]
      [ '𪜀𪜀𪜀𪜀犬', '{"𪜀":[0,2,4,6],"𪜀犬":[3,6]}' ]
      [ '口口犬口口', '{"口":[0,1,3,4]}' ]
      [ '口犬口犬口', '{"口":[0,2,4],"口犬":[0,2],"犬":[1,3],"犬口":[1,3]}' ]
      [ '𪜀犬𪜀犬𪜀', '{"𪜀":[0,3,6],"𪜀犬":[0,3],"犬":[1,2,5],"犬𪜀":[1,5]}' ]
      [ '㗊犬', '{}' ]
      [ '哭吅', '{}' ]
      [ '吕吕', '{"吕":[0,1]}' ]
      [ '吅吅', '{"吅":[0,1]}' ]
      [ '口口', '{"口":[0,1]}' ]
      [ '口口', '{"口":[0,1]}' ]
      [ 'abacadaefghxaryarzar', '{"a":[0,2,4,6,12,15,18],"ar":[12,15,18],"r":[13,16,19]}' ]
      ]
    #.......................................................................................................
    for [ probe, matcher, ] in probes_and_matchers
      result  = find_all_repetitions probe
      result  = internals.as_text result
      # echo [ probe, result, ]
      @eq ( Ωcrmmd__33 = -> result ), matcher
    #.......................................................................................................
    ;null

#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: true, report_checks: true, }
  ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { find_reduplication_candidates: tests.find_reduplication_candidates, }
  ;null
