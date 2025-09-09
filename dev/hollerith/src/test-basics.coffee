
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
  whisper }               = GUY.trm.get_loggers 'hollerith'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'


#===========================================================================================================
helpers =
  rpr_unit: ( unit ) ->
    { name,
      letters,
      mantissa,
      index,    } = unit
    R  = "#{name}:#{letters}"
    R += ",#{mantissa}"  if mantissa?
    R += "[#{index}]"    if index?
    return R


#===========================================================================================================
@hollerith =

  #=========================================================================================================
  interface: ->
    { Hollerith,
      hollerith_10,
      hollerith_10mvp,
      hollerith_128,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    do =>
      @eq     ( Ωanybt___1 = -> type_of hollerith_10mvp.encode            ), 'function'
      @eq     ( Ωanybt___2 = -> type_of hollerith_10mvp.encode_integer    ), 'function'
      return null

  #---------------------------------------------------------------------------------------------------------
  get_niners_re: ->
    { internals: { types, }   } = require '../../../apps/hollerith'
    { get_niners_re,          } = types.internals
    # debug 'Ωhllt___3', '987'.replace /// ^ (?: 9 )*? (?= . $ ) ///gv, ''
    #.......................................................................................................
    do =>
      @eq     ( Ωanybt___4 = -> get_niners_re '9' ), /// ^ (?: 9  )* (?= .+ $ ) ///gv
      @eq     ( Ωanybt___5 = -> get_niners_re '*' ), /// ^ (?: \* )* (?= .+ $ ) ///gv
      return null
    #.......................................................................................................
    do =>
      leading_niners_re = get_niners_re '9'
      @eq     ( Ωanybt___6 = -> '9999'.replace leading_niners_re, '' ), '9'
      @eq     ( Ωanybt___7 = ->  '999'.replace leading_niners_re, '' ), '9'
      @eq     ( Ωanybt___8 = ->   '99'.replace leading_niners_re, '' ), '9'
      @eq     ( Ωanybt___9 = ->    '9'.replace leading_niners_re, '' ), '9'
      @eq     ( Ωanybt__10 = -> '9989'.replace leading_niners_re, '' ), '89'
      @eq     ( Ωanybt__11 = ->  '989'.replace leading_niners_re, '' ), '89'
      @eq     ( Ωanybt__12 = ->   '89'.replace leading_niners_re, '' ), '89'
      @eq     ( Ωanybt__13 = -> '9992'.replace leading_niners_re, '' ), '2'
      @eq     ( Ωanybt__14 = ->  '992'.replace leading_niners_re, '' ), '2'
      @eq     ( Ωanybt__15 = ->   '92'.replace leading_niners_re, '' ), '2'
      @eq     ( Ωanybt__16 = ->    '7'.replace leading_niners_re, '' ), '7'
      @eq     ( Ωanybt__17 = ->     ''.replace leading_niners_re, '' ), ''
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  h10mvp_1: ->
    { Hollerith,
      hollerith_10,
      hollerith_10mvp,
      hollerith_128,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    @eq     ( Ωanybt__18 = -> hollerith_10mvp.encode_integer -999   ), 'K000'
    @eq     ( Ωanybt__19 = -> hollerith_10mvp.encode_integer  -99   ), 'L00'
    @eq     ( Ωanybt__20 = -> hollerith_10mvp.encode_integer  -90   ), 'L09'
    @eq     ( Ωanybt__21 = -> hollerith_10mvp.encode_integer  -11   ), 'L88'
    @eq     ( Ωanybt__22 = -> hollerith_10mvp.encode_integer  -10   ), 'L89'
    @eq     ( Ωanybt__23 = -> hollerith_10mvp.encode_integer   -9   ), 'M0'
    @eq     ( Ωanybt__24 = -> hollerith_10mvp.encode_integer   -8   ), 'M1'
    @eq     ( Ωanybt__25 = -> hollerith_10mvp.encode_integer   -7   ), 'M2'
    @eq     ( Ωanybt__26 = -> hollerith_10mvp.encode_integer   -6   ), 'M3'
    @eq     ( Ωanybt__27 = -> hollerith_10mvp.encode_integer   -5   ), 'M4'
    @eq     ( Ωanybt__28 = -> hollerith_10mvp.encode_integer   -4   ), 'M5'
    @eq     ( Ωanybt__29 = -> hollerith_10mvp.encode_integer   -3   ), 'M6'
    @eq     ( Ωanybt__30 = -> hollerith_10mvp.encode_integer   -2   ), 'M7'
    @eq     ( Ωanybt__31 = -> hollerith_10mvp.encode_integer   -1   ), 'M8'
    @eq     ( Ωanybt__32 = -> hollerith_10mvp.encode_integer    0   ), 'N'
    @eq     ( Ωanybt__33 = -> hollerith_10mvp.encode_integer    1   ), 'O1'
    @eq     ( Ωanybt__34 = -> hollerith_10mvp.encode_integer   +9   ), 'O9'
    @eq     ( Ωanybt__35 = -> hollerith_10mvp.encode_integer  +10   ), 'P10'
    @eq     ( Ωanybt__36 = -> hollerith_10mvp.encode_integer  +20   ), 'P20'
    @eq     ( Ωanybt__37 = -> hollerith_10mvp.encode_integer  +90   ), 'P90'
    @eq     ( Ωanybt__38 = -> hollerith_10mvp.encode_integer  123   ), 'Q123'
    @eq     ( Ωanybt__39 = -> hollerith_10mvp.encode_integer +900   ), 'Q900'
    return null

  #---------------------------------------------------------------------------------------------------------
  h10mvp_2: ->
    { Hollerith,
      hollerith_10,
      hollerith_10mvp,
      hollerith_128,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    @eq     ( Ωanybt__40 = -> hollerith_10mvp.encode_integer -999   ), hollerith_10mvp.encode -999
    @eq     ( Ωanybt__41 = -> hollerith_10mvp.encode_integer  -99   ), hollerith_10mvp.encode  -99
    @eq     ( Ωanybt__42 = -> hollerith_10mvp.encode_integer  -90   ), hollerith_10mvp.encode  -90
    @eq     ( Ωanybt__43 = -> hollerith_10mvp.encode_integer  -11   ), hollerith_10mvp.encode  -11
    @eq     ( Ωanybt__44 = -> hollerith_10mvp.encode_integer  -10   ), hollerith_10mvp.encode  -10
    @eq     ( Ωanybt__45 = -> hollerith_10mvp.encode_integer   -9   ), hollerith_10mvp.encode   -9
    @eq     ( Ωanybt__46 = -> hollerith_10mvp.encode_integer   -8   ), hollerith_10mvp.encode   -8
    @eq     ( Ωanybt__47 = -> hollerith_10mvp.encode_integer   -7   ), hollerith_10mvp.encode   -7
    @eq     ( Ωanybt__48 = -> hollerith_10mvp.encode_integer   -6   ), hollerith_10mvp.encode   -6
    @eq     ( Ωanybt__49 = -> hollerith_10mvp.encode_integer   -5   ), hollerith_10mvp.encode   -5
    @eq     ( Ωanybt__50 = -> hollerith_10mvp.encode_integer   -4   ), hollerith_10mvp.encode   -4
    @eq     ( Ωanybt__51 = -> hollerith_10mvp.encode_integer   -3   ), hollerith_10mvp.encode   -3
    @eq     ( Ωanybt__52 = -> hollerith_10mvp.encode_integer   -2   ), hollerith_10mvp.encode   -2
    @eq     ( Ωanybt__53 = -> hollerith_10mvp.encode_integer   -1   ), hollerith_10mvp.encode   -1
    @eq     ( Ωanybt__54 = -> hollerith_10mvp.encode_integer    0   ), hollerith_10mvp.encode    0
    @eq     ( Ωanybt__55 = -> hollerith_10mvp.encode_integer    1   ), hollerith_10mvp.encode    1
    @eq     ( Ωanybt__56 = -> hollerith_10mvp.encode_integer   +9   ), hollerith_10mvp.encode   +9
    @eq     ( Ωanybt__57 = -> hollerith_10mvp.encode_integer  +10   ), hollerith_10mvp.encode  +10
    @eq     ( Ωanybt__58 = -> hollerith_10mvp.encode_integer  +20   ), hollerith_10mvp.encode  +20
    @eq     ( Ωanybt__59 = -> hollerith_10mvp.encode_integer  +90   ), hollerith_10mvp.encode  +90
    @eq     ( Ωanybt__60 = -> hollerith_10mvp.encode_integer  123   ), hollerith_10mvp.encode  123
    @eq     ( Ωanybt__61 = -> hollerith_10mvp.encode_integer +900   ), hollerith_10mvp.encode +900
    return null

  #---------------------------------------------------------------------------------------------------------
  h10mvp_3: ->
    { Hollerith,
      hollerith_10,
      hollerith_10mvp,
      hollerith_128,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    @eq     ( Ωanybt__62 = -> hollerith_10mvp.encode_integer -999   ), hollerith_10mvp.encode [ -999, ]
    @eq     ( Ωanybt__63 = -> hollerith_10mvp.encode_integer  -99   ), hollerith_10mvp.encode [  -99, ]
    @eq     ( Ωanybt__64 = -> hollerith_10mvp.encode_integer  -90   ), hollerith_10mvp.encode [  -90, ]
    @eq     ( Ωanybt__65 = -> hollerith_10mvp.encode_integer  -11   ), hollerith_10mvp.encode [  -11, ]
    @eq     ( Ωanybt__66 = -> hollerith_10mvp.encode_integer  -10   ), hollerith_10mvp.encode [  -10, ]
    @eq     ( Ωanybt__67 = -> hollerith_10mvp.encode_integer   -9   ), hollerith_10mvp.encode [   -9, ]
    @eq     ( Ωanybt__68 = -> hollerith_10mvp.encode_integer   -8   ), hollerith_10mvp.encode [   -8, ]
    @eq     ( Ωanybt__69 = -> hollerith_10mvp.encode_integer   -7   ), hollerith_10mvp.encode [   -7, ]
    @eq     ( Ωanybt__70 = -> hollerith_10mvp.encode_integer   -6   ), hollerith_10mvp.encode [   -6, ]
    @eq     ( Ωanybt__71 = -> hollerith_10mvp.encode_integer   -5   ), hollerith_10mvp.encode [   -5, ]
    @eq     ( Ωanybt__72 = -> hollerith_10mvp.encode_integer   -4   ), hollerith_10mvp.encode [   -4, ]
    @eq     ( Ωanybt__73 = -> hollerith_10mvp.encode_integer   -3   ), hollerith_10mvp.encode [   -3, ]
    @eq     ( Ωanybt__74 = -> hollerith_10mvp.encode_integer   -2   ), hollerith_10mvp.encode [   -2, ]
    @eq     ( Ωanybt__75 = -> hollerith_10mvp.encode_integer   -1   ), hollerith_10mvp.encode [   -1, ]
    @eq     ( Ωanybt__76 = -> hollerith_10mvp.encode_integer    0   ), hollerith_10mvp.encode [    0, ]
    @eq     ( Ωanybt__77 = -> hollerith_10mvp.encode_integer    1   ), hollerith_10mvp.encode [    1, ]
    @eq     ( Ωanybt__78 = -> hollerith_10mvp.encode_integer   +9   ), hollerith_10mvp.encode [   +9, ]
    @eq     ( Ωanybt__79 = -> hollerith_10mvp.encode_integer  +10   ), hollerith_10mvp.encode [  +10, ]
    @eq     ( Ωanybt__80 = -> hollerith_10mvp.encode_integer  +20   ), hollerith_10mvp.encode [  +20, ]
    @eq     ( Ωanybt__81 = -> hollerith_10mvp.encode_integer  +90   ), hollerith_10mvp.encode [  +90, ]
    @eq     ( Ωanybt__82 = -> hollerith_10mvp.encode_integer  123   ), hollerith_10mvp.encode [  123, ]
    @eq     ( Ωanybt__83 = -> hollerith_10mvp.encode_integer +900   ), hollerith_10mvp.encode [ +900, ]
    return null

  #---------------------------------------------------------------------------------------------------------
  h10mvp_sorting_1: ->
    { Hollerith,
      hollerith_10,
      hollerith_10mvp,
      hollerith_128,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    sorted_singles = ( padding = null ) =>
      probes = [
        [ -999, ]
        [  -99, ]
        [  -90, ]
        [  -11, ]
        [  -10, ]
        [   -9, ]
        [   -8, ]
        [   -7, ]
        [   -6, ]
        [   -5, ]
        [   -4, ]
        [   -3, ]
        [   -2, ]
        [   -1, ]
        [    0, ]
        [    1, ]
        [   +9, ]
        [  +10, ]
        [  +20, ]
        [  +90, ]
        [  123, ]
        [ +900, ]
        ]
      for probe, idx in probes
        sk            = hollerith_10mvp.encode probe
        sk            = sk.padEnd padding, hollerith_10mvp.cfg.zpuns[ 0 ] if padding?
        probes[ idx ] = { sk, probe, idx, }
      probes.sort ( a, b ) ->
        return -1 if a.sk < b.sk
        return +1 if a.sk > b.sk
        return null
      for entry, idx in probes
        # debug 'Ωhllt__84', entry
        @eq ( Ωhllt__85 = -> entry.idx ), idx
      return null
    #.......................................................................................................
    sorted_singles null
    sorted_singles 10
    return null

  #---------------------------------------------------------------------------------------------------------
  h10mvp_sorting_2: ->
    { Hollerith,
      hollerith_10,
      hollerith_10mvp,
      hollerith_128,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    probes = [
      [ [ -999,           ], 'K000',      ]
      [ [  -99,           ], 'L00',       ]
      [ [  -90,           ], 'L09',       ]
      [ [  -11,           ], 'L88',       ]
      [ [  -10,           ], 'L89',       ]
      [ [   -9,           ], 'M0',        ]
      [ [   -8,           ], 'M1',        ]
      [ [   -7,           ], 'M2',        ]
      [ [   -6,           ], 'M3',        ]
      [ [   -5,           ], 'M4',        ]
      [ [   -4,           ], 'M5',        ]
      [ [   -3,           ], 'M6',        ]
      [ [   -2,           ], 'M7',        ]
      [ [   -1,           ], 'M8',        ]
      [ [   +0,  -20,     ], 'NL20',      ]
      [ [   +0,           ], 'N',         ]
      [ [   +0,  +20,     ], 'NP20',      ]
      [ [   +9,           ], 'O9',        ]
      [ [  +10,   -3,     ], 'P10M6',     ]
      [ [  +10,   -2,     ], 'P10M7',     ]
      [ [  +10,   -1,     ], 'P10M8',     ]
      [ [  +10,           ], 'P10',       ]
      [ [  +10,   +0,     ], 'P10N',      ]
      [ [  +10,   +1,     ], 'P10O1',     ]
      [ [  +10,  +10, -1, ], 'P10P10M8',  ]
      [ [  +10,  +10,     ], 'P10P10',    ]
      [ [  +10,  +20,     ], 'P10P20',    ]
      [ [  +20,           ], 'P20',       ]
      [ [  +20,  +10,     ], 'P20P10',    ]
      [ [  +90,           ], 'P90',       ]
      [ [ +900,           ], 'Q900',      ]
      ]
    ulines            = []
    plines            = []
    expected_indexes  = ( idx for idx in [ 0 ... probes.length ] )
    shuffle           = GUY.rnd.get_shuffle 57, 88
    for [ vdx, sk_matcher, ], idx in probes
      usk   = hollerith_10mvp.encode vdx
      psk   = usk.padEnd 10, hollerith_10mvp.cfg.zpuns[ 0 ]
      usk   = usk.padEnd 10, ' '
      ulines.push "#{usk} #{rpr vdx} #{idx}"
      plines.push "#{psk} #{rpr vdx} #{idx}"
    #.......................................................................................................
    for _ in [ 1 .. 10 ]
      ulines = shuffle ulines
      ulines.sort()
      real_indexes = []
      for uline in ulines
        # help 'Ωhllt__86', uline
        real_indexes.push Number uline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωhllt__87 = -> equals expected_indexes, real_indexes ), false
    #.......................................................................................................
    for _ in [ 1 .. 10 ]
      plines = shuffle plines
      plines.sort()
      real_indexes = []
      for pline in plines
        # help 'Ωhllt__88', pline
        real_indexes.push Number pline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωhllt__89 = -> equals expected_indexes, real_indexes ), true
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  h10mvp2_sorting_2: ->
    { Hollerith,
      hollerith_10mvp2,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    probes = [
      [ [ -999,           ], 'A000',        ]
      [ [  -99,           ], 'B00',         ]
      [ [  -90,           ], 'B09',         ]
      [ [  -11,           ], 'B88',         ]
      [ [  -10,           ], 'B89',         ]
      [ [   -9,           ], 'E',           ]
      [ [   -8,           ], 'F',           ]
      [ [   -7,           ], 'G',           ]
      [ [   -6,           ], 'H',           ]
      [ [   -5,           ], 'I',           ]
      [ [   -4,           ], 'J',           ]
      [ [   -3,           ], 'K',           ]
      [ [   -2,           ], 'L',           ]
      [ [   -1,           ], 'M',           ]
      [ [   +0,  -20,     ], 'NB79',        ]
      [ [   +0,           ], 'N',           ]
      [ [   +0,  +20,     ], 'NY20',        ]
      [ [   +9,           ], 'W',           ]
      [ [  +10,   -3,     ], 'Y10K',        ]
      [ [  +10,   -2,     ], 'Y10L',        ]
      [ [  +10,   -1,     ], 'Y10M',        ]
      [ [  +10,           ], 'Y10',         ]
      [ [  +10,   +0,     ], 'Y10N',        ]
      [ [  +10,   +1,     ], 'Y10O',        ]
      [ [  +10,  +10, -1, ], 'Y10Y10M',     ]
      [ [  +10,  +10,     ], 'Y10Y10',      ]
      [ [  +10,  +20,     ], 'Y10Y20',      ]
      [ [  +20,           ], 'Y20',         ]
      [ [  +20,  +10,     ], 'Y20Y10',      ]
      [ [  +90,           ], 'Y90',         ]
      [ [ +900,           ], 'Z900',        ]
      [ [ +999,           ], 'Z999',        ]
      ]
    ulines            = []
    plines            = []
    expected_indexes  = ( idx for idx in [ 0 ... probes.length ] )
    shuffle           = GUY.rnd.get_shuffle 57, 88
    for [ vdx, sk_matcher, ], idx in probes
      usk   = hollerith_10mvp2.encode vdx
      @eq ( Ωhllt__90 = -> usk ), sk_matcher
      psk   = usk.padEnd 10, hollerith_10mvp2.cfg.zpuns[ 0 ]
      usk   = usk.padEnd 10, ' '
      ulines.push "#{usk} #{rpr vdx} #{idx}"
      plines.push "#{psk} #{rpr vdx} #{idx}"
    #.......................................................................................................
    for _ in [ 1 .. 10 ]
      ulines = shuffle ulines
      ulines.sort()
      real_indexes = []
      for uline in ulines
        # help 'Ωhllt__91', uline
        real_indexes.push Number uline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωhllt__92 = -> equals expected_indexes, real_indexes ), false
    #.......................................................................................................
    for _ in [ 1 .. 10 ]
      plines = shuffle plines
      plines.sort()
      real_indexes = []
      for pline in plines
        # help 'Ωhllt__93', pline
        real_indexes.push Number pline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωhllt__94 = -> equals expected_indexes, real_indexes ), true
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  h128_16383_sorting_2: ->
    { Hollerith,
      hollerith_128_16383,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    probes = [
      [ [ -999,           ], 'Í¿;',     ]
      [ [  -99,           ], 'Î?',      ]
      [ [  -90,           ], 'ÎH',      ]
      [ [  -80,           ], 'ÎS',      ]
      [ [  -21,           ], 'Ï',       ]
      [ [  -20,           ], 'Ï',       ]
      [ [  -11,           ], 'Ø',       ]
      [ [  -10,           ], 'Ù',       ]
      [ [   -9,           ], 'Ú',       ]
      [ [   -8,           ], 'Û',       ]
      [ [   -7,           ], 'Ü',       ]
      [ [   -6,           ], 'Ý',       ]
      [ [   -5,           ], 'Þ',       ]
      [ [   -4,           ], 'ß',       ]
      [ [   -3,           ], 'à',       ]
      [ [   -2,           ], 'á',       ]
      [ [   -1,           ], 'â',       ]
      [ [   +0,  -20,     ], 'ãÏ',      ]
      [ [   +0,           ], 'ã',       ]
      [ [   +0,  +20,     ], 'ã÷',      ]
      [ [   +9,           ], 'ì',       ]
      [ [  +10,   -3,     ], 'íà',      ]
      [ [  +10,   -2,     ], 'íá',      ]
      [ [  +10,   -1,     ], 'íâ',      ]
      [ [  +10,           ], 'í',       ]
      [ [  +10,   +0,     ], 'íã',      ]
      [ [  +10,   +1,     ], 'íä',      ]
      [ [  +10,  +10, -1, ], 'ííâ',     ]
      [ [  +10,  +10,     ], 'íí',      ]
      [ [  +10,  +20,     ], 'í÷',      ]
      [ [  +20,           ], '÷',       ]
      [ [  +20,  +10,     ], '÷í',      ]
      [ [  +90,           ], 'ø~',      ]
      [ [ +900,           ], 'ù*&',     ]
      ]
    ulines            = []
    plines            = []
    expected_indexes  = ( idx for idx in [ 0 ... probes.length ] )
    shuffle           = GUY.rnd.get_shuffle 57, 88
    for [ vdx, sk_matcher, ], idx in probes
      usk   = hollerith_128_16383.encode vdx
      @eq ( Ωhllt__95 = -> usk ), sk_matcher
      # echo rpr usk
      psk   = usk.padEnd 10, hollerith_128_16383.cfg.zpuns[ 0 ]
      usk   = usk.padEnd 10, ' '
      ulines.push "#{usk} #{rpr vdx} #{idx}"
      plines.push "#{psk} #{rpr vdx} #{idx}"
    # #.......................................................................................................
    # for _ in [ 1 .. 10 ]
    #   ulines = shuffle ulines
    #   ulines.sort()
    #   real_indexes = []
    #   for uline in ulines
    #     # help 'Ωhllt__96', uline
    #     real_indexes.push Number uline.replace /^.*?\s([0-9]+)$/, '$1'
    #   @eq ( Ωhllt__97 = -> equals expected_indexes, real_indexes ), false
    # #.......................................................................................................
    # for _ in [ 1 .. 10 ]
    #   plines = shuffle plines
    #   plines.sort()
    #   real_indexes = []
    #   for pline, idx in plines
    #     help 'Ωhllt__98', rpr pline if _ is 1
    #     real_indexes.push Number pline.replace /^.*?\s([0-9]+)$/, '$1'
    #   @eq ( Ωhllt__99 = -> equals expected_indexes, real_indexes ), true
    # #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  h128_decode: ->
    { Hollerith,
      hollerith_128,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    probes_and_matchers = [
      [ 'Í¿;ããããããã', [ -999,         ], 'nnum:Í,¿;[-999]|padding:ããããããã',                 ]
      [ 'Î?ãããããããã', [ -99,          ], 'nnum:Î,?[-99]|padding:ãããããããã',                  ]
      [ 'ÎHãããããããã', [ -90,          ], 'nnum:Î,H[-90]|padding:ãããããããã',                  ]
      [ 'Øããããããããã', [ -11,          ], 'nun:Ø[-11]|padding:ããããããããã',                    ]
      [ 'Ùããããããããã', [ -10,          ], 'nun:Ù[-10]|padding:ããããããããã',                    ]
      [ 'Úããããããããã', [ -9,           ], 'nun:Ú[-9]|padding:ããããããããã',                     ]
      [ 'Ûããããããããã', [ -8,           ], 'nun:Û[-8]|padding:ããããããããã',                     ]
      [ 'Üããããããããã', [ -7,           ], 'nun:Ü[-7]|padding:ããããããããã',                     ]
      [ 'Ýããããããããã', [ -6,           ], 'nun:Ý[-6]|padding:ããããããããã',                     ]
      [ 'Þããããããããã', [ -5,           ], 'nun:Þ[-5]|padding:ããããããããã',                     ]
      [ 'ßããããããããã', [ -4,           ], 'nun:ß[-4]|padding:ããããããããã',                     ]
      [ 'àããããããããã', [ -3,           ], 'nun:à[-3]|padding:ããããããããã',                     ]
      [ 'áããããããããã', [ -2,           ], 'nun:á[-2]|padding:ããããããããã',                     ]
      [ 'âããããããããã', [ -1,           ], 'nun:â[-1]|padding:ããããããããã',                     ]
      [ 'ãÏãããããããã', [ 0, -20,       ], 'zero:ã[0]|nun:Ï[-20]|padding:ãããããããã',           ]
      [ 'ãããããããããã', [ 0,            ], 'padding:ãããããããããã[0]',                           ]
      [ 'ã÷ãããããããã', [ 0, 20,        ], 'zero:ã[0]|pun:÷[20]|padding:ãããããããã',            ]
      [ 'ìããããããããã', [ 9,            ], 'pun:ì[9]|padding:ããããããããã',                      ]
      [ 'íàãããããããã', [ 10, -3,       ], 'pun:í[10]|nun:à[-3]|padding:ãããããããã',            ]
      [ 'íáãããããããã', [ 10, -2,       ], 'pun:í[10]|nun:á[-2]|padding:ãããããããã',            ]
      [ 'íâãããããããã', [ 10, -1,       ], 'pun:í[10]|nun:â[-1]|padding:ãããããããã',            ]
      [ 'íããããããããã', [ 10,           ], 'pun:í[10]|padding:ããããããããã',                     ]
      [ 'íäãããããããã', [ 10, 1,        ], 'pun:í[10]|pun:ä[1]|padding:ãããããããã',             ]
      [ 'ííâããããããã', [ 10, 10, -1,   ], 'pun:í[10]|pun:í[10]|nun:â[-1]|padding:ããããããã',   ]
      [ 'ííãããããããã', [ 10, 10,       ], 'pun:í[10]|pun:í[10]|padding:ãããããããã',            ]
      [ 'í÷ãããããããã', [ 10, 20,       ], 'pun:í[10]|pun:÷[20]|padding:ãããããããã',            ]
      [ '÷ããããããããã', [ 20,           ], 'pun:÷[20]|padding:ããããããããã',                     ]
      [ '÷íãããããããã', [ 20, 10,       ], 'pun:÷[20]|pun:í[10]|padding:ãããããããã',            ]
      [ 'ø~ãããããããã', [ 90,           ], 'pnum:ø,~[90]|padding:ãããããããã',                   ]
      [ 'ù*&ããããããã', [ 900,          ], 'pnum:ù,*&[900]|padding:ããããããã',                  ]
      ]
    #.......................................................................................................
    codec = hollerith_128
    for [ sortkey, index_matcher, unit_matcher, ] in probes_and_matchers
      unit_result     = []
      index_result    = []
      for unit in codec.parse sortkey
        unit_result.push  helpers.rpr_unit unit
        index_result.push unit.index if unit.index?
      unit_result   = unit_result.join '|'
      info 'Ωhllt_100', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
    #   @eq ( Ωhllt_101 = ->  unit_result                     ),  unit_matcher
      @eq ( Ωhllt_102 = -> index_result                     ), index_matcher
      @eq ( Ωhllt_103 = -> sortkey ), ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
      debug 'Ωhllt_104', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
    #   @eq ( Ωhllt_105 = -> codec.decode sortkey  ), index_matcher
    #   # echo [ sortkey, index_result, unit_result, ]
    # #.......................................................................................................
    # @eq     ( Ωhllt_106 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    # @eq     ( Ωhllt_107 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    # @eq     ( Ωhllt_108 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    # @throws ( Ωhllt_109 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
    # @throws ( Ωhllt_110 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
    # @throws ( Ωhllt_111 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  h10mvp2_decode_units: ->
    ### NOTE also see corresponding test in `hengist-NG/dev/interlex/src/test-hollerith.coffee` ###
    { type_of,                } = SFMODULES.unstable.require_type_of()
    #.......................................................................................................
    { Hollerith,
      hollerith_10mvp2,
      internals               } = require '../../../apps/hollerith'
    # { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    probes_and_matchers = [
      [ 'A000NNNNNN', [ -999        ], 'nnum:A,000[-999]|padding:NNNNNN',                     ]
      [ 'B00NNNNNNN', [ -99         ], 'nnum:B,00[-99]|padding:NNNNNNN',                      ]
      [ 'B09NNNNNNN', [ -90         ], 'nnum:B,09[-90]|padding:NNNNNNN',                      ]
      [ 'B88NNNNNNN', [ -11         ], 'nnum:B,88[-11]|padding:NNNNNNN',                      ]
      [ 'B89NNNNNNN', [ -10         ], 'nnum:B,89[-10]|padding:NNNNNNN',                      ]
      [ 'ENNNNNNNNN', [ -9          ], 'nun:E[-9]|padding:NNNNNNNNN',                         ]
      [ 'FNNNNNNNNN', [ -8          ], 'nun:F[-8]|padding:NNNNNNNNN',                         ]
      [ 'GNNNNNNNNN', [ -7          ], 'nun:G[-7]|padding:NNNNNNNNN',                         ]
      [ 'HNNNNNNNNN', [ -6          ], 'nun:H[-6]|padding:NNNNNNNNN',                         ]
      [ 'INNNNNNNNN', [ -5          ], 'nun:I[-5]|padding:NNNNNNNNN',                         ]
      [ 'JNNNNNNNNN', [ -4          ], 'nun:J[-4]|padding:NNNNNNNNN',                         ]
      [ 'KNNNNNNNNN', [ -3          ], 'nun:K[-3]|padding:NNNNNNNNN',                         ]
      [ 'LNNNNNNNNN', [ -2          ], 'nun:L[-2]|padding:NNNNNNNNN',                         ]
      [ 'MNNNNNNNNN', [ -1          ], 'nun:M[-1]|padding:NNNNNNNNN',                         ]
      [ 'NB79NNNNNN', [ 0, -20      ], 'zero:N[0]|nnum:B,79[-20]|padding:NNNNNN',             ]
      [ 'NNNNNNNNNN', [ 0           ], 'padding:NNNNNNNNNN[0]',                               ]
      [ 'NY20NNNNNN', [ 0, 20       ], 'zero:N[0]|pnum:Y,20[20]|padding:NNNNNN',              ]
      [ 'WNNNNNNNNN', [ 9           ], 'pun:W[9]|padding:NNNNNNNNN',                          ]
      [ 'Y10KNNNNNN', [ 10, -3      ], 'pnum:Y,10[10]|nun:K[-3]|padding:NNNNNN',              ]
      [ 'Y10LNNNNNN', [ 10, -2      ], 'pnum:Y,10[10]|nun:L[-2]|padding:NNNNNN',              ]
      [ 'Y10MNNNNNN', [ 10, -1      ], 'pnum:Y,10[10]|nun:M[-1]|padding:NNNNNN',              ]
      [ 'Y10NNNNNNN', [ 10          ], 'pnum:Y,10[10]|padding:NNNNNNN',                       ]
      [ 'Y10ONNNNNN', [ 10, 1       ], 'pnum:Y,10[10]|pun:O[1]|padding:NNNNNN',               ]
      [ 'Y10Y10MNNN', [ 10, 10, -1  ], 'pnum:Y,10[10]|pnum:Y,10[10]|nun:M[-1]|padding:NNN',   ]
      [ 'Y10Y10NNNN', [ 10, 10      ], 'pnum:Y,10[10]|pnum:Y,10[10]|padding:NNNN',            ]
      [ 'Y10Y20NNNN', [ 10, 20      ], 'pnum:Y,10[10]|pnum:Y,20[20]|padding:NNNN',            ]
      [ 'Y20NNNNNNN', [ 20          ], 'pnum:Y,20[20]|padding:NNNNNNN',                       ]
      [ 'Y20Y10NNNN', [ 20, 10      ], 'pnum:Y,20[20]|pnum:Y,10[10]|padding:NNNN',            ]
      [ 'Y90NNNNNNN', [ 90          ], 'pnum:Y,90[90]|padding:NNNNNNN',                       ]
      [ 'Z900NNNNNN', [ 900         ], 'pnum:Z,900[900]|padding:NNNNNN',                      ]
      [ 'NNNNNNNNN',  [ 0           ], 'padding:NNNNNNNNN[0]',                                ]
      [ 'NN',         [ 0           ], 'padding:NN[0]',                                       ]
      [ 'N',          [ 0           ], 'padding:N[0]',                                        ]
      [ 'Y10',        [ 10          ], 'pnum:Y,10[10]',                                       ]
      [ 'K',          [ -3          ], 'nun:K[-3]',                                           ]
      ]
    #.......................................................................................................
    codec           = hollerith_10mvp2
    sortkey_padder  = codec.cfg.zpun_chrs[ 0 ]
    #.......................................................................................................
    for [ sortkey, index_matcher, unit_matcher, ] in probes_and_matchers
      unit_result     = []
      index_result    = []
      for unit in codec.parse sortkey
        unit_result.push  helpers.rpr_unit unit
        index_result.push unit.index if unit.index?
      unit_result   = unit_result.join '|'
      info 'Ωhllt_112', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
      @eq ( Ωhllt_113 = -> unit_result                      ), unit_matcher
      @eq ( Ωhllt_114 = -> index_result                     ), index_matcher
      @eq ( Ωhllt_115 = -> codec.decode sortkey             ), index_matcher
      @eq ( Ωhllt_116 = -> sortkey                          ), ( codec.encode index_matcher ).padEnd sortkey.length, sortkey_padder
      # echo [ sortkey, index_result, unit_result, ]
    #.......................................................................................................
    @eq     ( Ωhllt_117 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    @eq     ( Ωhllt_118 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    @eq     ( Ωhllt_119 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    @throws ( Ωhllt_120 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
    @throws ( Ωhllt_121 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
    @throws ( Ωhllt_122 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  h128b_decode: ->
    { Hollerith,
      hollerith_128,
      hollerith_10mvp,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    # codec = hollerith_128
    codec = hollerith_10mvp
    debug 'Ωhllt_123', rpr codec.encode -1
    debug 'Ωhllt_124', rpr codec.encode -2
    n =   -100; urge 'Ωhllt_125', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    -21; urge 'Ωhllt_126', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    -20; urge 'Ωhllt_127', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    -19; urge 'Ωhllt_128', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =     -1; urge 'Ωhllt_129', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =      0; urge 'Ωhllt_130', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =      1; urge 'Ωhllt_131', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =      2; urge 'Ωhllt_132', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =      3; urge 'Ωhllt_133', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =     10; urge 'Ωhllt_134', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    126; urge 'Ωhllt_135', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    127; urge 'Ωhllt_136', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    128; urge 'Ωhllt_137', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    129; urge 'Ωhllt_138', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    # for [ sortkey, index_matcher, unit_matcher, ] in probes_and_matchers
    #   unit_result     = []
    #   index_result    = []
    #   for unit in codec.parse sortkey
    #     unit_result.push  helpers.rpr_unit unit
    #     index_result.push unit.index if unit.index?
    #   unit_result   = unit_result.join '|'
    #   info 'Ωhllt_139', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
    # #   @eq ( Ωhllt_140 = ->  unit_result                     ),  unit_matcher
    #   @eq ( Ωhllt_141 = -> index_result                     ), index_matcher
    #   @eq ( Ωhllt_142 = -> sortkey ), ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
    #   debug 'Ωhllt_143', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
    #   @eq ( Ωhllt_144 = -> codec.decode sortkey  ), index_matcher
    #   # echo [ sortkey, index_result, unit_result, ]
    # #.......................................................................................................
    # @eq     ( Ωhllt_145 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    # @eq     ( Ωhllt_146 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    # @eq     ( Ωhllt_147 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    # @throws ( Ωhllt_148 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
    # @throws ( Ωhllt_149 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
    # @throws ( Ωhllt_150 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
    #.......................................................................................................
    return null


  #---------------------------------------------------------------------------------------------------------
  types: ->
    { internals,
      Hollerith_typespace,
      CFG,                        } = require '../../../apps/hollerith/lib/types'
    { type_of,                    } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals,  } = require 'node:util'
    { pick,                       } = SFMODULES.unstable.require_pick()
    #.......................................................................................................
    do =>
      T = new Hollerith_typespace()
      @eq ( Ωhllt_151 = -> T[CFG].blank                                     ), '\x20'
      @eq ( Ωhllt_152 = -> T[CFG].blank_splitter                            ), /(?:\x20)+/gv
      @eq ( Ωhllt_153 = -> T[CFG].blank_splitter.unicodeSets                ), true
      @eq ( Ωhllt_154 = -> T[CFG].blank_splitter.global                     ), true
      @eq ( Ωhllt_155 = -> 'a   g  z  '.replace T[CFG].blank_splitter, 'ü'  ), 'aügüzü'
      return null
    #.......................................................................................................
    do =>
      T = new Hollerith_typespace { blank: '#', }
      @eq ( Ωhllt_156 = -> T[CFG].blank                                     ), '#'
      @eq ( Ωhllt_157 = -> T[CFG].blank_splitter                            ), /(?:\x23)+/gv
      @eq ( Ωhllt_158 = -> T[CFG].blank_splitter.unicodeSets                ), true
      @eq ( Ωhllt_159 = -> T[CFG].blank_splitter.global                     ), true
      @eq ( Ωhllt_160 = -> 'a###g##z##'.replace T[CFG].blank_splitter, 'ü'  ), 'aügüzü'
      @eq ( Ωhllt_161 = -> T.magnifiers.isa 'ABC XYZ'                       ), false
      @eq ( Ωhllt_162 = -> T.magnifiers.isa 'ABC#XYZ'                       ), true
      @eq ( Ωhllt_163 = -> T.blank.isa ' '                                  ), false
      @eq ( Ωhllt_164 = -> T.blank.isa '#'                                  ), true
      @eq ( Ωhllt_165 = -> T.blank.isa T[CFG].blank                         ), true
      return null
    #.......................................................................................................
    T = new Hollerith_typespace()
    @eq ( Ωhllt_166 = -> T.nonempty_text.isa 4            ), false
    @eq ( Ωhllt_167 = -> T.nonempty_text.isa false        ), false
    @eq ( Ωhllt_168 = -> T.nonempty_text.isa ''           ), false
    @eq ( Ωhllt_169 = -> T.nonempty_text.isa 'yes'        ), true
    #.......................................................................................................
    @eq ( Ωhllt_170 = -> T.incremental_text.isa 'yes'     ), false
    @eq ( Ωhllt_171 = -> T.decremental_text.isa 'yes'     ), false
    @eq ( Ωhllt_172 = -> T.incremental_text.data          ), { chrs: [ 'y', 'e', 's' ], fail: { x: 'yes', idx: 1, prv_chr: 'y', chr: 'e' } }
    @eq ( Ωhllt_173 = -> T.incremental_text.isa 'abcdefz' ), true
    @eq ( Ωhllt_174 = -> T.decremental_text.isa 'abcdefz' ), false
    @eq ( Ωhllt_175 = -> T.incremental_text.data          ), { chrs: [ 'a', 'b', 'c', 'd', 'e', 'f', 'z', ], }
    @eq ( Ωhllt_176 = -> T.decremental_text.data          ), { chrs: [ 'a', 'b', 'c', 'd', 'e', 'f', 'z' ], fail: { x: 'abcdefz', idx: 1, prv_chr: 'a', chr: 'b' } }
    @eq ( Ωhllt_177 = -> T.incremental_text.isa 'abc0'    ), false
    @eq ( Ωhllt_178 = -> T.incremental_text.data          ), { chrs: [ 'a', 'b', 'c', '0', ], fail: { x: 'abc0', idx: 3, prv_chr: 'c', chr: '0' } }
    @eq ( Ωhllt_179 = -> T.decremental_text.isa 'cba'     ), true
    @eq ( Ωhllt_180 = -> T.decremental_text.data          ), { chrs: [ 'c', 'b', 'a', ], }
    #.......................................................................................................
    @eq ( Ωhllt_181 = -> T.magnifiers.isa ''                                  ), false
    @eq ( Ωhllt_182 = -> T.magnifiers.data                                    ), { message: "expected a magnifier, got an empty text", }
    @eq ( Ωhllt_183 = -> T.magnifiers.isa 'ABC XYZ'                           ), true
    @eq ( Ωhllt_184 = -> pick T.magnifiers.data, \
                       [ 'nmag_chrs_reversed', 'pmag_chrs', 'nmag', 'pmag', ] ), { nmag_chrs_reversed: [ 'A', 'B', 'C' ], pmag_chrs: [ ' ', 'X', 'Y', 'Z' ], nmag: ' CBA', pmag: ' XYZ' }
    @eq ( Ωhllt_185 = -> Object.isFrozen T.magnifiers.data.nmag_chrs_reversed ), true
    @eq ( Ωhllt_186 = -> Object.isFrozen T.magnifiers.data.pmag_chrs          ), true
    @eq ( Ωhllt_187 = -> T.magnifiers.isa 'ABC\nXYZ'                          ), false
    @eq ( Ωhllt_188 = -> T.magnifiers.isa 'ABC\tXYZ'                          ), false
    @eq ( Ωhllt_189 = -> T.magnifiers.isa 'ABC             XYZ'               ), true
    @eq ( Ωhllt_190 = -> T.magnifiers.isa 'ABC DX YZ'                         ), false
    @eq ( Ωhllt_191 = -> T.magnifiers.isa 'ABD CXYZ'                          ), false
    #.......................................................................................................
    @eq ( Ωhllt_192 = -> T.uniliterals.isa null                               ), false
    @eq ( Ωhllt_193 = -> T.uniliterals.isa ''                                 ), false
    @eq ( Ωhllt_194 = -> T.uniliterals.isa 'VBA'                              ), false
    @eq ( Ωhllt_195 = -> T.uniliterals.isa 'EFGHIJKLM NOPQRSTUVW'             ), false
    @eq ( Ωhllt_196 = -> T.uniliterals.isa 'EFGHIJKLM N OPQRSTUVW'            ), true
    @eq ( Ωhllt_197 = -> T.uniliterals.data                                   ), { nuns: 'EFGHIJKLM', zpuns: 'NOPQRSTUVW', nun_chrs: [ 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' ], zpun_chrs: [ 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W' ] }
    @eq ( Ωhllt_198 = -> T.uniliterals.isa 'N'                                ), true
    @eq ( Ωhllt_199 = -> T.uniliterals.data                                   ), { nuns: '', zpuns: 'N', nun_chrs: [], zpun_chrs: [ 'N' ] }
    #.......................................................................................................
    @throws ( Ωhllt_200 = -> T.alphabet.validate null                         ), /not a valid alphabet/
    @throws ( Ωhllt_201 = -> T.alphabet.validate ''                           ), /not a valid alphabet/
    @throws ( Ωhllt_202 = -> T.alphabet.validate 'a'                          ), /not a valid alphabet/
    @eq     ( Ωhllt_203 = -> T.alphabet.validate 'ab'                         ), 'ab'
    #.......................................................................................................
    @throws ( Ωhllt_204 = ->   new Hollerith_typespace { blank: null }                        ), /not a valid blank/
    @throws ( Ωhllt_205 = ->   new Hollerith_typespace { blank: ''   }                        ), /not a valid blank/
    @throws ( Ωhllt_206 = ->   new Hollerith_typespace { blank: '--' }                        ), /not a valid blank/
    @throws ( Ωhllt_207 = -> ( new Hollerith_typespace { blank: null } ).blank.validate null  ), /not a valid blank/
    @throws ( Ωhllt_208 = -> ( new Hollerith_typespace { blank: ''   } ).blank.validate ''    ), /not a valid blank/
    @throws ( Ωhllt_209 = -> ( new Hollerith_typespace { blank: '--' } ).blank.validate '--'  ), /not a valid blank/
    @eq     ( Ωhllt_210 = -> ( new Hollerith_typespace { blank: '-'  } ).blank.validate '-'   ), '-'
    @eq     ( Ωhllt_211 = -> ( new Hollerith_typespace { blank: ' '  } ).blank.validate ' '   ), ' '
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  validate_and_compile_cfg_general: ->
    { internals,
      Hollerith,                  } = require '../../../apps/hollerith'
    { Hollerith_typespace,
      CFG,                        } = require '../../../apps/hollerith/lib/types'
    # { type_of,                    } = SFMODULES.unstable.require_type_of()
    # { isDeepStrictEqual: equals,  } = require 'node:util'
    { isFrozen: is_frozen,        } = Object
    #.......................................................................................................
    ### testing a general assumption so we don't mess up: ###
    @eq ( Ωhllt_212 = -> ( Number.MAX_SAFE_INTEGER - 1 ) == -( Number.MIN_SAFE_INTEGER + 1 ) ), true
    #.......................................................................................................
    do =>
      # T = new Hollerith_typespace()
      @throws ( Ωhllt_213 = -> Hollerith.validate_and_compile_cfg {}                  ), /not a valid alphabet/
      @throws ( Ωhllt_214 = -> Hollerith.validate_and_compile_cfg { alphabet: ''    } ), /not a valid alphabet/
      @throws ( Ωhllt_215 = -> Hollerith.validate_and_compile_cfg { alphabet: 'a'   } ), /not a valid alphabet/
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  validate_and_compile_cfg_10: ->
    { internals,
      Hollerith,                  } = require '../../../apps/hollerith'
    { Hollerith_typespace,
      CFG,                        } = require '../../../apps/hollerith/lib/types'
    # { type_of,                    } = SFMODULES.unstable.require_type_of()
    # { isDeepStrictEqual: equals,  } = require 'node:util'
    { isFrozen: is_frozen,        } = Object
    #.......................................................................................................
    cfg_10 =
      blank:        ' '                       # separator used in `magnifiers` and `uniliterals`
      alphabet:     '0123456789'              # digits; length of `alphabet` is the `base`
      magnifiers:   'ABC XYZ'                 #
      uniliterals:  'FGHIJKLM N OPQRSTUV'     # negative uniliterals, blank, zero uniliteral, blank, positive uniliterals
      dimension:    3                         # number of indices supported
    #.......................................................................................................
    do =>
      cfg = Hollerith.validate_and_compile_cfg cfg_10
      @eq ( Ωhllt_216 = -> cfg.blank                                              ), ' '
      @eq ( Ωhllt_217 = -> cfg.alphabet                                           ), '0123456789'
      @eq ( Ωhllt_218 = -> cfg.alphabet_chrs                                      ), Array.from '0123456789'
      @eq ( Ωhllt_219 = -> cfg.niner                                              ), ( Array.from cfg.alphabet ).at -1
      @eq ( Ωhllt_220 = -> cfg.leading_niners_re                                  ), /// ^ (?: 9 )* (?= .+ $ ) ///gv
      @eq ( Ωhllt_221 = -> is_frozen cfg.alphabet_chrs                            ), true
      @eq ( Ωhllt_222 = -> cfg.base                                               ), 10
      @eq ( Ωhllt_223 = -> cfg.magnifiers                                         ), 'ABC XYZ'
      @eq ( Ωhllt_224 = -> cfg.nmag                                               ), ' CBA'
      @eq ( Ωhllt_225 = -> cfg.pmag                                               ), ' XYZ'
      @eq ( Ωhllt_226 = -> cfg.nmag_chrs                                          ), Array.from ' CBA'
      @eq ( Ωhllt_227 = -> cfg.pmag_chrs                                          ), Array.from ' XYZ'
      @eq ( Ωhllt_228 = -> cfg.uniliterals                                        ), 'FGHIJKLM N OPQRSTUV'
      @eq ( Ωhllt_229 = -> cfg.nuns                                               ), 'FGHIJKLM'
      @eq ( Ωhllt_230 = -> cfg.zpuns                                              ), 'NOPQRSTUV'
      @eq ( Ωhllt_231 = -> cfg.zpun_max                                           ), 8
      @eq ( Ωhllt_232 = -> cfg.nun_min                                            ), -8
      @eq ( Ωhllt_233 = -> cfg.nun_chrs                                           ), [ 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' ],
      @eq ( Ωhllt_234 = -> cfg.zpun_chrs                                          ), [ 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', ]
      @eq ( Ωhllt_235 = -> cfg.dimension                                          ), 3
      @eq ( Ωhllt_236 = -> +( ( cfg.base ** ( cfg.pmag_chrs.length - 1 )  ) - 1 ) ), +999
      @eq ( Ωhllt_237 = -> -( ( cfg.base ** ( cfg.nmag_chrs.length - 1 )  ) - 1 ) ), -999
      @eq ( Ωhllt_238 = -> cfg._max_integer                                       ), +999
      @eq ( Ωhllt_239 = -> cfg._min_integer                                       ), -999
      @eq ( Ωhllt_240 = -> cfg.max_digits                                         ), 3
      @eq ( Ωhllt_241 = -> cfg.TMP_alphabet                                       ), '0123456789ABCFGHIJKLMNOPQRSTUVXYZ'
      #.....................................................................................................
      h = new Hollerith cfg_10
      @eq ( Ωhllt_242 = -> h.cfg ), cfg
      # @eq ( Ωhllt_243 = -> h.encode  -998 ), null
      @eq ( Ωhllt_244 = -> h.encode   -12 ), 'B87'
      @eq ( Ωhllt_245 = -> h.encode   -11 ), 'B88'
      @eq ( Ωhllt_246 = -> h.encode   -10 ), 'B89'
      @eq ( Ωhllt_247 = -> h.encode    -9 ), 'C0'
      @eq ( Ωhllt_248 = -> h.encode    -8 ), 'F'
      @eq ( Ωhllt_249 = -> h.encode    -2 ), 'L'
      @eq ( Ωhllt_250 = -> h.encode    -1 ), 'M'
      @eq ( Ωhllt_251 = -> h.encode     0 ), 'N'
      @eq ( Ωhllt_252 = -> h.encode    +1 ), 'O'
      @eq ( Ωhllt_253 = -> h.encode    +2 ), 'P'
      @eq ( Ωhllt_254 = -> h.encode    +8 ), 'V'
      @eq ( Ωhllt_255 = -> h.encode    +9 ), 'X9'
      @eq ( Ωhllt_256 = -> h.encode   +10 ), 'Y10'
      @eq ( Ωhllt_257 = -> h.encode   +11 ), 'Y11'
      @eq ( Ωhllt_258 = -> h.encode   +12 ), 'Y12'
      @eq ( Ωhllt_259 = -> h.encode  +998 ), 'Z998'
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  validate_and_compile_cfg_10_no_unilterals: ->
    { internals,
      Hollerith,                  } = require '../../../apps/hollerith'
    { Hollerith_typespace,
      CFG,                        } = require '../../../apps/hollerith/lib/types'
    # { type_of,                    } = SFMODULES.unstable.require_type_of()
    # { isDeepStrictEqual: equals,  } = require 'node:util'
    { isFrozen: is_frozen,        } = Object
    #.......................................................................................................
    cfg_10_no_uniliterals =
      blank:        ' '                       # separator used in `magnifiers` and `uniliterals`
      alphabet:     '0123456789'              # digits; length of `alphabet` is the `base`
      magnifiers:   'ABC XYZ'                 #
      uniliterals:  'N'                       # only has zero uniliteral
      dimension:    3                         # number of indices supported
    #.......................................................................................................
    do =>
      cfg = Hollerith.validate_and_compile_cfg cfg_10_no_uniliterals
      @eq ( Ωhllt_260 = -> cfg.blank                                              ), ' '
      @eq ( Ωhllt_261 = -> cfg.alphabet                                           ), '0123456789'
      @eq ( Ωhllt_262 = -> cfg.alphabet_chrs                                      ), Array.from '0123456789'
      @eq ( Ωhllt_263 = -> cfg.niner                                              ), ( Array.from cfg.alphabet ).at -1
      @eq ( Ωhllt_264 = -> cfg.leading_niners_re                                  ), /// ^ (?: 9 )* (?= .+ $ ) ///gv
      @eq ( Ωhllt_265 = -> is_frozen cfg.alphabet_chrs                            ), true
      @eq ( Ωhllt_266 = -> cfg.base                                               ), 10
      @eq ( Ωhllt_267 = -> cfg.magnifiers                                         ), 'ABC XYZ'
      @eq ( Ωhllt_268 = -> cfg.nmag                                               ), ' CBA'
      @eq ( Ωhllt_269 = -> cfg.pmag                                               ), ' XYZ'
      @eq ( Ωhllt_270 = -> cfg.nmag_chrs                                          ), Array.from ' CBA'
      @eq ( Ωhllt_271 = -> cfg.pmag_chrs                                          ), Array.from ' XYZ'
      @eq ( Ωhllt_272 = -> cfg.uniliterals                                        ), 'N'
      @eq ( Ωhllt_273 = -> cfg.nuns                                               ), ''
      @eq ( Ωhllt_274 = -> cfg.zpuns                                              ), 'N'
      @eq ( Ωhllt_275 = -> cfg.nun_chrs                                           ), []
      @eq ( Ωhllt_276 = -> cfg.zpun_chrs                                          ), [ 'N', ]
      @eq ( Ωhllt_277 = -> cfg.dimension                                          ), 3
      @eq ( Ωhllt_278 = -> +( ( cfg.base ** ( cfg.pmag_chrs.length - 1 )  ) - 1 ) ), +999
      @eq ( Ωhllt_279 = -> -( ( cfg.base ** ( cfg.nmag_chrs.length - 1 )  ) - 1 ) ), -999
      @eq ( Ωhllt_280 = -> cfg._max_integer                                       ), +999
      @eq ( Ωhllt_281 = -> cfg._min_integer                                       ), -999
      @eq ( Ωhllt_282 = -> cfg.max_digits                                         ), 3
      @eq ( Ωhllt_283 = -> cfg.TMP_alphabet                                       ), '0123456789ABCNXYZ'
      #.....................................................................................................
      h = new Hollerith cfg_10_no_uniliterals
      @eq ( Ωhllt_284 = -> h.cfg ), cfg
      @eq ( Ωhllt_285 = -> h.encode [ 0, ] ), 'N'
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  validate_and_compile_cfg_128: ->
    { internals,
      Hollerith,                  } = require '../../../apps/hollerith'
    { Hollerith_typespace,
      CFG,                        } = require '../../../apps/hollerith/lib/types'
    # { type_of,                    } = SFMODULES.unstable.require_type_of()
    # { isDeepStrictEqual: equals,  } = require 'node:util'
    { isFrozen: is_frozen,        } = Object
    #.......................................................................................................
    cfg_128 =
      ###                     1         2         3       ###
      ###            12345678901234567890123456789012     ###
      alphabet:     '!#$%&()*+,-./0123456789:;<=>?@AB' + \
                    'CDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc' + \
                    'defghijklmnopqrstuvwxyz{|}~¡¢£¤¥' + \
                    '¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ'
      magnifiers:   'ÇÈÉÊËÌÍÎ øùúûüýþÿ'
      uniliterals:  'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ ã äåæçèéêëìíîïðñòóôõö÷'
      dimension:    5
    #.......................................................................................................
    do =>
      cfg = Hollerith.validate_and_compile_cfg cfg_128
      @eq ( Ωhllt_286 = -> cfg.blank                                              ), ' '
      @eq ( Ωhllt_287 = -> cfg.alphabet                                           ), '!#$%&()*+,-./0123456789:;<=>?@AB' + \
                                                                                     'CDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc' + \
                                                                                     'defghijklmnopqrstuvwxyz{|}~¡¢£¤¥' + \
                                                                                     '¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ'
      @eq ( Ωhllt_288 = -> cfg.alphabet_chrs                                      ), Array.from cfg.alphabet
      @eq ( Ωhllt_289 = -> cfg.niner                                              ), ( Array.from cfg.alphabet ).at -1
      @eq ( Ωhllt_290 = -> cfg.leading_niners_re                                  ), /// ^ (?: Æ )* (?= .+ $ ) ///gv
      @eq ( Ωhllt_291 = -> cfg.magnifiers                                         ), 'ÇÈÉÊËÌÍÎ øùúûüýþÿ'
      @eq ( Ωhllt_292 = -> cfg.nmag                                               ), ' ÎÍÌËÊÉÈÇ'
      @eq ( Ωhllt_293 = -> cfg.pmag                                               ), ' øùúûüýþÿ'
      @eq ( Ωhllt_294 = -> cfg.nmag_chrs                                          ), Array.from ' ÎÍÌËÊÉÈÇ'
      @eq ( Ωhllt_295 = -> cfg.pmag_chrs                                          ), Array.from ' øùúûüýþÿ'
      @eq ( Ωhllt_296 = -> cfg.uniliterals                                        ), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ ã äåæçèéêëìíîïðñòóôõö÷'
      @eq ( Ωhllt_297 = -> cfg.nuns                                               ), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ'
      @eq ( Ωhllt_298 = -> cfg.zpuns                                              ), 'ãäåæçèéêëìíîïðñòóôõö÷'
      @eq ( Ωhllt_299 = -> cfg.nun_chrs                                           ), Array.from 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ'
      @eq ( Ωhllt_300 = -> cfg.zpun_chrs                                          ), Array.from 'ãäåæçèéêëìíîïðñòóôõö÷'
      @eq ( Ωhllt_301 = -> cfg._min_integer                                       ), -( ( 128 ** 7 ) - 1 )
      @eq ( Ωhllt_302 = -> cfg._max_integer                                       ), +( ( 128 ** 7 ) - 1 )
      # @eq ( Ωhllt_303 = -> cfg.max_digits                                         ), 3
      # @eq ( Ωhllt_304 = -> cfg.TMP_alphabet                                       ), '0123456789ABCEFGHIJKLMNOPQRSTUVWXYZ'
      #.....................................................................................................
      @eq ( Ωhllt_305 = -> is_frozen cfg.alphabet_chrs                            ), true
      @eq ( Ωhllt_306 = -> cfg.base                                               ), 128
      @eq ( Ωhllt_307 = -> cfg.dimension                                          ), 5
      #.....................................................................................................
      h = new Hollerith cfg_128
      @eq ( Ωhllt_308 = -> h.cfg ), cfg
      # @eq ( Ωhllt_309 = -> h.encode [ 0, ] ), null
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  types: ->
    { Hollerith_typespace,
      create_max_integer_$x_for_$base,
      CFG,                        } = require '../../../apps/hollerith/lib/types'
    #.......................................................................................................
    do =>
      T = new Hollerith_typespace()
      @eq     ( Ωhllt_310 = -> T.base.isa -1                                                        ), false
      @eq     ( Ωhllt_311 = -> T.base.isa  0                                                        ), false
      @eq     ( Ωhllt_312 = -> T.base.isa +1                                                        ), false
      @eq     ( Ωhllt_313 = -> T.base.isa +2                                                        ), true
      @throws ( Ωhllt_314 = -> T._max_integer_$x_for_$base.isa null                                    ), /Cannot destructure/
      @eq     ( Ωhllt_315 = -> T._max_integer_$x_for_$base.isa { x: 9,          base: 10, }         ), true
      @eq     ( Ωhllt_316 = -> T._max_integer_$x_for_$base.isa { x: 99,         base: 10, }         ), true
      @eq     ( Ωhllt_317 = -> T._max_integer_$x_for_$base.isa { x: 99999999,   base: 10, }         ), true
      @eq     ( Ωhllt_318 = -> T._max_integer_$x_for_$base.isa { x: -10,        base: 10, }         ), false
      @eq     ( Ωhllt_319 = -> /not a positive safe integer/.test T._max_integer_$x_for_$base.data.message  ), true
      @eq     ( Ωhllt_320 = -> T._max_integer_$x_for_$base.isa { x: 0xffff,     base: 16, }         ), true
      @eq     ( Ωhllt_321 = -> T._max_integer_$x_for_$base.isa { x: 0x7fffffff, base: 16, }         ), false
      @throws ( Ωhllt_322 = -> T._max_integer_$x_for_$base.validate [ 5, 10, ]                      ), /not a valid _max_integer_\$x_for_\$base: 5,10/
      return null
    #.......................................................................................................
    do =>
      T = new Hollerith_typespace()
      R = { base: 16, max_digits: 4, }
      @eq     ( Ωhllt_323 = -> T._max_integer_$x_for_$base.isa { x: ( R.base ** R.max_digits ) - 1, base: R.base, } ), true
      return null
    #.......................................................................................................
    do =>
      T = new Hollerith_typespace()
      @eq     ( Ωhllt_324 = -> T._max_integer_$x_for_$base.isa { x: ( 128 ** 1 ) - 1, base: 128, } ), true
      @eq     ( Ωhllt_325 = -> T._max_integer_$x_for_$base.isa { x: ( 128 ** 2 ) - 1, base: 128, } ), true
      @eq     ( Ωhllt_326 = -> T._max_integer_$x_for_$base.isa { x: ( 128 ** 3 ) - 1, base: 128, } ), true
      @eq     ( Ωhllt_327 = -> T._max_integer_$x_for_$base.isa { x: ( 128 ** 4 ) - 1, base: 128, } ), true
      @eq     ( Ωhllt_328 = -> T._max_integer_$x_for_$base.isa { x: ( 128 ** 5 ) - 1, base: 128, } ), true
      @eq     ( Ωhllt_329 = -> T._max_integer_$x_for_$base.isa { x: ( 128 ** 6 ) - 1, base: 128, } ), true
      @eq     ( Ωhllt_330 = -> T._max_integer_$x_for_$base.isa { x: ( 128 ** 7 ) - 1, base: 128, } ), true
      @eq     ( Ωhllt_331 = -> T._max_integer_$x_for_$base.isa { x: ( 128 ** 8 ) - 1, base: 128, } ), false
      @eq     ( Ωhllt_332 = -> T.create_max_integer_$x_for_$base { base: 10, digits: 2, }  ), 99
      return null
    #.......................................................................................................
    return null

#===========================================================================================================
demo_max_integer = ->
  log_to_base               = ( n, base ) -> ( Math.log n ) / ( Math.log base )
  get_required_digits       = ( n, base ) -> Math.ceil log_to_base n, base
  get_max_niner_digit_count = ( n, base ) -> ( get_required_digits n, base ) - 1
  get_max_integer           = ( n, base ) -> ( base ** get_max_niner_digit_count n, base ) - 1
  info 'Ωhllt_333', Number.MAX_SAFE_INTEGER.toString 16
  info 'Ωhllt_334', Number.MAX_SAFE_INTEGER.toString 32
  whisper '—————————————————————————————————'
  info 'Ωhllt_335', ( 32 ** 4 - 1 ).toString 32
  info 'Ωhllt_336', ( 32 ** 4 - 1 ).toString 32
  whisper '—————————————————————————————————'
  info 'Ωhllt_337', get_required_digits 32,       32
  info 'Ωhllt_338', get_required_digits 32 ** 6,  32
  info 'Ωhllt_339', get_required_digits 1e6,      10
  info 'Ωhllt_340', get_required_digits 20,       10
  whisper '—————————————————————————————————'
  info 'Ωhllt_341', max_digits_base_10    = get_max_niner_digit_count Number.MAX_SAFE_INTEGER, 10
  info 'Ωhllt_342', max_digits_base_16    = get_max_niner_digit_count Number.MAX_SAFE_INTEGER, 16
  info 'Ωhllt_343', max_digits_base_32    = get_max_niner_digit_count Number.MAX_SAFE_INTEGER, 32
  info 'Ωhllt_344', max_digits_base_36    = get_max_niner_digit_count Number.MAX_SAFE_INTEGER, 36
  info 'Ωhllt_345', max_digits_1base_28   = get_max_niner_digit_count Number.MAX_SAFE_INTEGER, 128
  # for base in [ 2 .. 128 ]
  #   info 'Ωhllt_346', { base, }, ( Math.ceil log_to_base Number.MAX_SAFE_INTEGER, base ) - 1
  whisper '—————————————————————————————————'
  info 'Ωhllt_347', '9'.repeat max_digits_base_10
  info 'Ωhllt_348', 'f'.repeat max_digits_base_16
  info 'Ωhllt_349', 'v'.repeat max_digits_base_32
  whisper '—————————————————————————————————'
  info 'Ωhllt_350', ( ( base = 10 ) ** max_digits_base_10 ) - 1
  info 'Ωhllt_351', ( ( base = 16 ) ** max_digits_base_16 ) - 1
  info 'Ωhllt_352', ( ( base = 32 ) ** max_digits_base_32 ) - 1
  info 'Ωhllt_353', ( ( base = 36 ) ** max_digits_base_36 ) - 1
  whisper '—————————————————————————————————'
  info 'Ωhllt_354', get_max_integer Number.MAX_SAFE_INTEGER, 10
  info 'Ωhllt_355', get_max_integer Number.MAX_SAFE_INTEGER, 16
  info 'Ωhllt_356', get_max_integer Number.MAX_SAFE_INTEGER, 32
  info 'Ωhllt_357', get_max_integer Number.MAX_SAFE_INTEGER, 36
  info 'Ωhllt_358', get_max_integer Number.MAX_SAFE_INTEGER, 128
  whisper '—————————————————————————————————'
  info 'Ωhllt_359', ( parseInt ( '9'.repeat max_digits_base_10 ), 10 )
  info 'Ωhllt_360', ( parseInt ( 'f'.repeat max_digits_base_16 ), 16 )
  info 'Ωhllt_361', ( parseInt ( 'v'.repeat max_digits_base_32 ), 32 )
  info 'Ωhllt_362', ( parseInt ( 'z'.repeat max_digits_base_36 ), 36 )
  info 'Ωhllt_363', ( parseInt ( '9'.repeat max_digits_base_10 ), 10 ) <= Number.MAX_SAFE_INTEGER
  info 'Ωhllt_364', ( parseInt ( 'f'.repeat max_digits_base_16 ), 16 ) <= Number.MAX_SAFE_INTEGER
  info 'Ωhllt_365', ( parseInt ( 'v'.repeat max_digits_base_32 ), 32 ) <= Number.MAX_SAFE_INTEGER
  info 'Ωhllt_366', ( parseInt ( 'z'.repeat max_digits_base_36 ), 36 ) <= Number.MAX_SAFE_INTEGER
  whisper '—————————————————————————————————'
  info 'Ωhllt_367', +999 + -999
  info 'Ωhllt_368', +999 + -1
  info 'Ωhllt_369', -( -999 - 1 ) + -999
  info 'Ωhllt_370', -( -999 - 1 ) + -998
  info 'Ωhllt_371', -( -999 - 1 ) + -997
  info 'Ωhllt_372', -( -999 - 1 ) + -3
  info 'Ωhllt_373', -( -999 - 1 ) + -2
  info 'Ωhllt_374', -( -999 - 1 ) + -1
  info 'Ωhllt_375', "#{ -( -999 - 1 ) + -3 }".replace /// ^ 9*? (?= . $ ) ///gv, ''
  info 'Ωhllt_376', "#{ -( -999 - 1 ) + -2 }".replace /// ^ 9*? (?= . $ ) ///gv, ''
  info 'Ωhllt_377', "#{ -( -999 - 1 ) + -1 }".replace /// ^ 9*? (?= . $ ) ///gv, ''
  return null


#===========================================================================================================
if module is require.main then await do =>
  { show_requires, } = require '../../snippets/lib/demo-show-requires.js'
  show_requires '../../../apps/hollerith'
  #---------------------------------------------------------------------------------------------------------
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @hollerith
  # ( new Test guytest_cfg ).test { types: @hollerith.types, }
  # ( new Test guytest_cfg ).test { h10mvp2_sorting_2: @hollerith.h10mvp2_sorting_2, }
  ( new Test guytest_cfg ).test { h128_16383_sorting_2: @hollerith.h128_16383_sorting_2, }
  # ( new Test guytest_cfg ).test { validate_and_compile_cfg_10: @hollerith.validate_and_compile_cfg_10, }
  # ( new Test guytest_cfg ).test { h10mvp2_decode_units: @hollerith.h10mvp2_decode_units, }
  # ( new Test guytest_cfg ).test { get_niners_re: @hollerith.get_niners_re, }
  # ( new Test guytest_cfg ).test { validate_and_compile_cfg: @hollerith.validate_and_compile_cfg, }
  # demo_max_integer()


