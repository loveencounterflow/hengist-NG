
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
    codec             = hollerith_128_16383
    debug 'Ωhllt__95', codec.cfg._max_digits_per_idx
    debug 'Ωhllt__96', codec.cfg.zero_pad_length
    @eq ( Ωhllt__97 = -> codec.cfg.base                                     ), 128
    @eq ( Ωhllt__98 = -> codec.cfg._max_integer                             ), +16383
    @eq ( Ωhllt__99 = -> codec.cfg._min_integer                             ), -16383
    @eq ( Ωhllt_100 = -> codec.cfg.pmag_chrs[ 2 ]                           ), 'ù'
    @eq ( Ωhllt_101 = -> codec.cfg.nmag_chrs[ 2 ]                           ), 'Í'
    @eq ( Ωhllt_102 = -> codec.cfg.pmag                                     ), ' øùúûüýþÿ'
    @eq ( Ωhllt_103 = -> codec.cfg.nmag                                     ), ' ÎÍÌËÊÉÈÇ'
    @eq ( Ωhllt_104 = -> codec.encode codec.cfg._max_integer  ), 'ùÆÆ'
    @eq ( Ωhllt_105 = -> codec.encode codec.cfg._min_integer  ), 'Í!!'
    @eq ( Ωhllt_106 = -> codec.decode 'Í!!'                                 ), null
    @eq ( Ωhllt_107 = -> codec.decode 'Ç!!!!!!!!'                           ), null
    for [ vdx, sk_matcher, ], idx in probes
      usk   = codec.encode vdx
      @eq ( Ωhllt_108 = -> usk ), sk_matcher
      # echo rpr usk
      psk   = usk.padEnd 10, codec.cfg.zpuns[ 0 ]
      usk   = usk.padEnd 10, ' '
      ulines.push "#{usk} #{rpr vdx} #{idx}"
      plines.push "#{psk} #{rpr vdx} #{idx}"
    #.......................................................................................................
    debug 'Ωhllt_109', '_max_digits_per_idx:    ', rpr codec.cfg._max_digits_per_idx
    debug 'Ωhllt_110', 'zpun_max:               ', rpr codec.cfg.zpun_max
    debug 'Ωhllt_111', 'niner:                  ', rpr codec.cfg.niner
    debug 'Ωhllt_112', 'pmag:                   ', rpr codec.cfg.pmag
    debug 'Ωhllt_113', 'max magnifier:          ', rpr codec.cfg.pmag_chrs[ codec.cfg._max_digits_per_idx ]
    debug 'Ωhllt_114', '-16383                  ', rpr codec.encode -16383
    debug 'Ωhllt_115', '-16382                  ', rpr codec.encode -16382
    debug 'Ωhllt_116', '-129                    ', rpr codec.encode -129
    debug 'Ωhllt_117', '-128                    ', rpr codec.encode -128
    debug 'Ωhllt_118', '-127                    ', rpr codec.encode -127
    debug 'Ωhllt_119', '-21                     ', rpr codec.encode -21
    debug 'Ωhllt_120', '-20                     ', rpr codec.encode -20
    debug 'Ωhllt_121', '-1                      ', rpr codec.encode -1
    debug 'Ωhllt_122', '+0                      ', rpr codec.encode +0
    debug 'Ωhllt_123', '+1                      ', rpr codec.encode +1
    debug 'Ωhllt_124', '+20                     ', rpr codec.encode +20
    debug 'Ωhllt_125', '+21                     ', rpr codec.encode +21
    debug 'Ωhllt_126', '+127                    ', rpr codec.encode +127
    debug 'Ωhllt_127', '+128                    ', rpr codec.encode +128
    debug 'Ωhllt_128', '+129                    ', rpr codec.encode +129
    debug 'Ωhllt_129', '+16382                  ', rpr codec.encode +16382
    debug 'Ωhllt_130', '+16383                  ', rpr codec.encode +16383
    info  'Ωhllt_131', -16383,                     rpr codec.decode 'Í!!'
    info  'Ωhllt_132', -16382,                     rpr codec.decode 'Í!#'
    info  'Ωhllt_133', -129,                       rpr codec.decode 'ÍÅÅ'
    info  'Ωhllt_134', -128,                       rpr codec.decode 'ÍÅÆ'
    info  'Ωhllt_135', -127,                       rpr codec.decode 'Î!'
    info  'Ωhllt_136', -21,                        rpr codec.decode 'Î±'
    info  'Ωhllt_137', -20,                        rpr codec.decode 'Ï'
    info  'Ωhllt_138', -1,                         rpr codec.decode 'â'
    info  'Ωhllt_139', +0,                         rpr codec.decode 'ã'
    info  'Ωhllt_140', +1,                         rpr codec.decode 'ä'
    info  'Ωhllt_141', +20,                        rpr codec.decode '÷'
    info  'Ωhllt_142', +21,                        rpr codec.decode 'ø8'
    info  'Ωhllt_143', +127,                       rpr codec.decode 'øÆ'
    info  'Ωhllt_144', +128,                       rpr codec.decode 'ù#!'
    info  'Ωhllt_145', +129,                       rpr codec.decode 'ù##'
    info  'Ωhllt_146', +16382,                     rpr codec.decode 'ùÆÅ'
    info  'Ωhllt_147', +16383,                     rpr codec.decode 'ùÆÆ'

    #.......................................................................................................
    # #.......................................................................................................
    # for _ in [ 1 .. 10 ]
    #   ulines = shuffle ulines
    #   ulines.sort()
    #   real_indexes = []
    #   for uline in ulines
    #     # help 'Ωhllt_148', uline
    #     real_indexes.push Number uline.replace /^.*?\s([0-9]+)$/, '$1'
    #   @eq ( Ωhllt_149 = -> equals expected_indexes, real_indexes ), false
    # #.......................................................................................................
    # for _ in [ 1 .. 10 ]
    #   plines = shuffle plines
    #   plines.sort()
    #   real_indexes = []
    #   for pline, idx in plines
    #     help 'Ωhllt_150', rpr pline if _ is 1
    #     real_indexes.push Number pline.replace /^.*?\s([0-9]+)$/, '$1'
    #   @eq ( Ωhllt_151 = -> equals expected_indexes, real_indexes ), true
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
      info 'Ωhllt_152', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
    #   @eq ( Ωhllt_153 = ->  unit_result                     ),  unit_matcher
      @eq ( Ωhllt_154 = -> index_result                     ), index_matcher
      @eq ( Ωhllt_155 = -> sortkey ), ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
      debug 'Ωhllt_156', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
    #   @eq ( Ωhllt_157 = -> codec.decode sortkey  ), index_matcher
    #   # echo [ sortkey, index_result, unit_result, ]
    # #.......................................................................................................
    # @eq     ( Ωhllt_158 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    # @eq     ( Ωhllt_159 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    # @eq     ( Ωhllt_160 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    # @throws ( Ωhllt_161 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
    # @throws ( Ωhllt_162 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
    # @throws ( Ωhllt_163 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
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
      info 'Ωhllt_164', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
      @eq ( Ωhllt_165 = -> unit_result                      ), unit_matcher
      @eq ( Ωhllt_166 = -> index_result                     ), index_matcher
      @eq ( Ωhllt_167 = -> codec.decode sortkey             ), index_matcher
      @eq ( Ωhllt_168 = -> sortkey                          ), ( codec.encode index_matcher ).padEnd sortkey.length, sortkey_padder
      # echo [ sortkey, index_result, unit_result, ]
    #.......................................................................................................
    @eq     ( Ωhllt_169 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    @eq     ( Ωhllt_170 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    @eq     ( Ωhllt_171 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    @throws ( Ωhllt_172 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
    @throws ( Ωhllt_173 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
    @throws ( Ωhllt_174 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
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
    debug 'Ωhllt_175', rpr codec.encode -1
    debug 'Ωhllt_176', rpr codec.encode -2
    n =   -100; urge 'Ωhllt_177', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    -21; urge 'Ωhllt_178', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    -20; urge 'Ωhllt_179', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    -19; urge 'Ωhllt_180', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =     -1; urge 'Ωhllt_181', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =      0; urge 'Ωhllt_182', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =      1; urge 'Ωhllt_183', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =      2; urge 'Ωhllt_184', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =      3; urge 'Ωhllt_185', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =     10; urge 'Ωhllt_186', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    126; urge 'Ωhllt_187', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    127; urge 'Ωhllt_188', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    128; urge 'Ωhllt_189', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    129; urge 'Ωhllt_190', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    # for [ sortkey, index_matcher, unit_matcher, ] in probes_and_matchers
    #   unit_result     = []
    #   index_result    = []
    #   for unit in codec.parse sortkey
    #     unit_result.push  helpers.rpr_unit unit
    #     index_result.push unit.index if unit.index?
    #   unit_result   = unit_result.join '|'
    #   info 'Ωhllt_191', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
    # #   @eq ( Ωhllt_192 = ->  unit_result                     ),  unit_matcher
    #   @eq ( Ωhllt_193 = -> index_result                     ), index_matcher
    #   @eq ( Ωhllt_194 = -> sortkey ), ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
    #   debug 'Ωhllt_195', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
    #   @eq ( Ωhllt_196 = -> codec.decode sortkey  ), index_matcher
    #   # echo [ sortkey, index_result, unit_result, ]
    # #.......................................................................................................
    # @eq     ( Ωhllt_197 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    # @eq     ( Ωhllt_198 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    # @eq     ( Ωhllt_199 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    # @throws ( Ωhllt_200 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
    # @throws ( Ωhllt_201 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
    # @throws ( Ωhllt_202 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
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
      @eq ( Ωhllt_203 = -> T[CFG].blank                                     ), '\x20'
      @eq ( Ωhllt_204 = -> T[CFG].blank_splitter                            ), /(?:\x20)+/gv
      @eq ( Ωhllt_205 = -> T[CFG].blank_splitter.unicodeSets                ), true
      @eq ( Ωhllt_206 = -> T[CFG].blank_splitter.global                     ), true
      @eq ( Ωhllt_207 = -> 'a   g  z  '.replace T[CFG].blank_splitter, 'ü'  ), 'aügüzü'
      return null
    #.......................................................................................................
    do =>
      T = new Hollerith_typespace { blank: '#', }
      @eq ( Ωhllt_208 = -> T[CFG].blank                                     ), '#'
      @eq ( Ωhllt_209 = -> T[CFG].blank_splitter                            ), /(?:\x23)+/gv
      @eq ( Ωhllt_210 = -> T[CFG].blank_splitter.unicodeSets                ), true
      @eq ( Ωhllt_211 = -> T[CFG].blank_splitter.global                     ), true
      @eq ( Ωhllt_212 = -> 'a###g##z##'.replace T[CFG].blank_splitter, 'ü'  ), 'aügüzü'
      @eq ( Ωhllt_213 = -> T.magnifiers.isa 'ABC XYZ'                       ), false
      @eq ( Ωhllt_214 = -> T.magnifiers.isa 'ABC#XYZ'                       ), true
      @eq ( Ωhllt_215 = -> T.blank.isa ' '                                  ), false
      @eq ( Ωhllt_216 = -> T.blank.isa '#'                                  ), true
      @eq ( Ωhllt_217 = -> T.blank.isa T[CFG].blank                         ), true
      return null
    #.......................................................................................................
    T = new Hollerith_typespace()
    @eq ( Ωhllt_218 = -> T.nonempty_text.isa 4            ), false
    @eq ( Ωhllt_219 = -> T.nonempty_text.isa false        ), false
    @eq ( Ωhllt_220 = -> T.nonempty_text.isa ''           ), false
    @eq ( Ωhllt_221 = -> T.nonempty_text.isa 'yes'        ), true
    #.......................................................................................................
    @eq ( Ωhllt_222 = -> T.incremental_text.isa 'yes'     ), false
    @eq ( Ωhllt_223 = -> T.decremental_text.isa 'yes'     ), false
    @eq ( Ωhllt_224 = -> T.incremental_text.data          ), { chrs: [ 'y', 'e', 's' ], fail: { x: 'yes', idx: 1, prv_chr: 'y', chr: 'e' } }
    @eq ( Ωhllt_225 = -> T.incremental_text.isa 'abcdefz' ), true
    @eq ( Ωhllt_226 = -> T.decremental_text.isa 'abcdefz' ), false
    @eq ( Ωhllt_227 = -> T.incremental_text.data          ), { chrs: [ 'a', 'b', 'c', 'd', 'e', 'f', 'z', ], }
    @eq ( Ωhllt_228 = -> T.decremental_text.data          ), { chrs: [ 'a', 'b', 'c', 'd', 'e', 'f', 'z' ], fail: { x: 'abcdefz', idx: 1, prv_chr: 'a', chr: 'b' } }
    @eq ( Ωhllt_229 = -> T.incremental_text.isa 'abc0'    ), false
    @eq ( Ωhllt_230 = -> T.incremental_text.data          ), { chrs: [ 'a', 'b', 'c', '0', ], fail: { x: 'abc0', idx: 3, prv_chr: 'c', chr: '0' } }
    @eq ( Ωhllt_231 = -> T.decremental_text.isa 'cba'     ), true
    @eq ( Ωhllt_232 = -> T.decremental_text.data          ), { chrs: [ 'c', 'b', 'a', ], }
    #.......................................................................................................
    @eq ( Ωhllt_233 = -> T.magnifiers.isa ''                                  ), false
    @eq ( Ωhllt_234 = -> T.magnifiers.data                                    ), { message: "expected a magnifier, got an empty text", }
    @eq ( Ωhllt_235 = -> T.magnifiers.isa 'ABC XYZ'                           ), true
    @eq ( Ωhllt_236 = -> pick T.magnifiers.data, \
                       [ 'nmag_chrs_reversed', 'pmag_chrs', 'nmag', 'pmag', ] ), { nmag_chrs_reversed: [ 'A', 'B', 'C' ], pmag_chrs: [ ' ', 'X', 'Y', 'Z' ], nmag: ' CBA', pmag: ' XYZ' }
    @eq ( Ωhllt_237 = -> Object.isFrozen T.magnifiers.data.nmag_chrs_reversed ), true
    @eq ( Ωhllt_238 = -> Object.isFrozen T.magnifiers.data.pmag_chrs          ), true
    @eq ( Ωhllt_239 = -> T.magnifiers.isa 'ABC\nXYZ'                          ), false
    @eq ( Ωhllt_240 = -> T.magnifiers.isa 'ABC\tXYZ'                          ), false
    @eq ( Ωhllt_241 = -> T.magnifiers.isa 'ABC             XYZ'               ), true
    @eq ( Ωhllt_242 = -> T.magnifiers.isa 'ABC DX YZ'                         ), false
    @eq ( Ωhllt_243 = -> T.magnifiers.isa 'ABD CXYZ'                          ), false
    #.......................................................................................................
    @eq ( Ωhllt_244 = -> T.uniliterals.isa null                               ), false
    @eq ( Ωhllt_245 = -> T.uniliterals.isa ''                                 ), false
    @eq ( Ωhllt_246 = -> T.uniliterals.isa 'VBA'                              ), false
    @eq ( Ωhllt_247 = -> T.uniliterals.isa 'EFGHIJKLM NOPQRSTUVW'             ), false
    @eq ( Ωhllt_248 = -> T.uniliterals.isa 'EFGHIJKLM N OPQRSTUVW'            ), true
    @eq ( Ωhllt_249 = -> T.uniliterals.data                                   ), { nuns: 'EFGHIJKLM', zpuns: 'NOPQRSTUVW', nun_chrs: [ 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' ], zpun_chrs: [ 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W' ] }
    @eq ( Ωhllt_250 = -> T.uniliterals.isa 'N'                                ), true
    @eq ( Ωhllt_251 = -> T.uniliterals.data                                   ), { nuns: '', zpuns: 'N', nun_chrs: [], zpun_chrs: [ 'N' ] }
    #.......................................................................................................
    @throws ( Ωhllt_252 = -> T.alphabet.validate null                         ), /not a valid alphabet/
    @throws ( Ωhllt_253 = -> T.alphabet.validate ''                           ), /not a valid alphabet/
    @throws ( Ωhllt_254 = -> T.alphabet.validate 'a'                          ), /not a valid alphabet/
    @eq     ( Ωhllt_255 = -> T.alphabet.validate 'ab'                         ), 'ab'
    #.......................................................................................................
    @throws ( Ωhllt_256 = ->   new Hollerith_typespace { blank: null }                        ), /not a valid blank/
    @throws ( Ωhllt_257 = ->   new Hollerith_typespace { blank: ''   }                        ), /not a valid blank/
    @throws ( Ωhllt_258 = ->   new Hollerith_typespace { blank: '--' }                        ), /not a valid blank/
    @throws ( Ωhllt_259 = -> ( new Hollerith_typespace { blank: null } ).blank.validate null  ), /not a valid blank/
    @throws ( Ωhllt_260 = -> ( new Hollerith_typespace { blank: ''   } ).blank.validate ''    ), /not a valid blank/
    @throws ( Ωhllt_261 = -> ( new Hollerith_typespace { blank: '--' } ).blank.validate '--'  ), /not a valid blank/
    @eq     ( Ωhllt_262 = -> ( new Hollerith_typespace { blank: '-'  } ).blank.validate '-'   ), '-'
    @eq     ( Ωhllt_263 = -> ( new Hollerith_typespace { blank: ' '  } ).blank.validate ' '   ), ' '
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
    @eq ( Ωhllt_264 = -> ( Number.MAX_SAFE_INTEGER - 1 ) == -( Number.MIN_SAFE_INTEGER + 1 ) ), true
    #.......................................................................................................
    do =>
      # T = new Hollerith_typespace()
      @throws ( Ωhllt_265 = -> Hollerith.validate_and_compile_cfg {}                  ), /not a valid alphabet/
      @throws ( Ωhllt_266 = -> Hollerith.validate_and_compile_cfg { alphabet: ''    } ), /not a valid alphabet/
      @throws ( Ωhllt_267 = -> Hollerith.validate_and_compile_cfg { alphabet: 'a'   } ), /not a valid alphabet/
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
      @eq ( Ωhllt_268 = -> cfg.blank                                              ), ' '
      @eq ( Ωhllt_269 = -> cfg.alphabet                                           ), '0123456789'
      @eq ( Ωhllt_270 = -> cfg.alphabet_chrs                                      ), Array.from '0123456789'
      @eq ( Ωhllt_271 = -> cfg.niner                                              ), ( Array.from cfg.alphabet ).at -1
      @eq ( Ωhllt_272 = -> cfg.leading_niners_re                                  ), /// ^ (?: 9 )* (?= .+ $ ) ///gv
      @eq ( Ωhllt_273 = -> is_frozen cfg.alphabet_chrs                            ), true
      @eq ( Ωhllt_274 = -> cfg.base                                               ), 10
      @eq ( Ωhllt_275 = -> cfg.magnifiers                                         ), 'ABC XYZ'
      @eq ( Ωhllt_276 = -> cfg.nmag                                               ), ' CBA'
      @eq ( Ωhllt_277 = -> cfg.pmag                                               ), ' XYZ'
      @eq ( Ωhllt_278 = -> cfg.nmag_chrs                                          ), Array.from ' CBA'
      @eq ( Ωhllt_279 = -> cfg.pmag_chrs                                          ), Array.from ' XYZ'
      @eq ( Ωhllt_280 = -> cfg.uniliterals                                        ), 'FGHIJKLM N OPQRSTUV'
      @eq ( Ωhllt_281 = -> cfg.nuns                                               ), 'FGHIJKLM'
      @eq ( Ωhllt_282 = -> cfg.zpuns                                              ), 'NOPQRSTUV'
      @eq ( Ωhllt_283 = -> cfg.zpun_max                                           ), 8
      @eq ( Ωhllt_284 = -> cfg.nun_min                                            ), -8
      @eq ( Ωhllt_285 = -> cfg.nun_chrs                                           ), [ 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' ],
      @eq ( Ωhllt_286 = -> cfg.zpun_chrs                                          ), [ 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', ]
      @eq ( Ωhllt_287 = -> cfg.dimension                                          ), 3
      @eq ( Ωhllt_288 = -> +( ( cfg.base ** ( cfg.pmag_chrs.length - 1 )  ) - 1 ) ), +999
      @eq ( Ωhllt_289 = -> -( ( cfg.base ** ( cfg.nmag_chrs.length - 1 )  ) - 1 ) ), -999
      @eq ( Ωhllt_290 = -> cfg._max_integer                                       ), +999
      @eq ( Ωhllt_291 = -> cfg._min_integer                                       ), -999
      @eq ( Ωhllt_292 = -> cfg._max_digits_per_idx                                         ), 3
      @eq ( Ωhllt_293 = -> cfg.TMP_alphabet                                       ), '0123456789ABCFGHIJKLMNOPQRSTUVXYZ'
      #.....................................................................................................
      h = new Hollerith cfg_10
      @eq ( Ωhllt_294 = -> h.cfg ), cfg
      # @eq ( Ωhllt_295 = -> h.encode  -998 ), null
      @eq ( Ωhllt_296 = -> h.encode   -12 ), 'B87'
      @eq ( Ωhllt_297 = -> h.encode   -11 ), 'B88'
      @eq ( Ωhllt_298 = -> h.encode   -10 ), 'B89'
      @eq ( Ωhllt_299 = -> h.encode    -9 ), 'C0'
      @eq ( Ωhllt_300 = -> h.encode    -8 ), 'F'
      @eq ( Ωhllt_301 = -> h.encode    -2 ), 'L'
      @eq ( Ωhllt_302 = -> h.encode    -1 ), 'M'
      @eq ( Ωhllt_303 = -> h.encode     0 ), 'N'
      @eq ( Ωhllt_304 = -> h.encode    +1 ), 'O'
      @eq ( Ωhllt_305 = -> h.encode    +2 ), 'P'
      @eq ( Ωhllt_306 = -> h.encode    +8 ), 'V'
      @eq ( Ωhllt_307 = -> h.encode    +9 ), 'X9'
      @eq ( Ωhllt_308 = -> h.encode   +10 ), 'Y10'
      @eq ( Ωhllt_309 = -> h.encode   +11 ), 'Y11'
      @eq ( Ωhllt_310 = -> h.encode   +12 ), 'Y12'
      @eq ( Ωhllt_311 = -> h.encode  +998 ), 'Z998'
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
      @eq ( Ωhllt_312 = -> cfg.blank                                              ), ' '
      @eq ( Ωhllt_313 = -> cfg.alphabet                                           ), '0123456789'
      @eq ( Ωhllt_314 = -> cfg.alphabet_chrs                                      ), Array.from '0123456789'
      @eq ( Ωhllt_315 = -> cfg.niner                                              ), ( Array.from cfg.alphabet ).at -1
      @eq ( Ωhllt_316 = -> cfg.leading_niners_re                                  ), /// ^ (?: 9 )* (?= .+ $ ) ///gv
      @eq ( Ωhllt_317 = -> is_frozen cfg.alphabet_chrs                            ), true
      @eq ( Ωhllt_318 = -> cfg.base                                               ), 10
      @eq ( Ωhllt_319 = -> cfg.magnifiers                                         ), 'ABC XYZ'
      @eq ( Ωhllt_320 = -> cfg.nmag                                               ), ' CBA'
      @eq ( Ωhllt_321 = -> cfg.pmag                                               ), ' XYZ'
      @eq ( Ωhllt_322 = -> cfg.nmag_chrs                                          ), Array.from ' CBA'
      @eq ( Ωhllt_323 = -> cfg.pmag_chrs                                          ), Array.from ' XYZ'
      @eq ( Ωhllt_324 = -> cfg.uniliterals                                        ), 'N'
      @eq ( Ωhllt_325 = -> cfg.nuns                                               ), ''
      @eq ( Ωhllt_326 = -> cfg.zpuns                                              ), 'N'
      @eq ( Ωhllt_327 = -> cfg.nun_chrs                                           ), []
      @eq ( Ωhllt_328 = -> cfg.zpun_chrs                                          ), [ 'N', ]
      @eq ( Ωhllt_329 = -> cfg.dimension                                          ), 3
      @eq ( Ωhllt_330 = -> +( ( cfg.base ** ( cfg.pmag_chrs.length - 1 )  ) - 1 ) ), +999
      @eq ( Ωhllt_331 = -> -( ( cfg.base ** ( cfg.nmag_chrs.length - 1 )  ) - 1 ) ), -999
      @eq ( Ωhllt_332 = -> cfg._max_integer                                       ), +999
      @eq ( Ωhllt_333 = -> cfg._min_integer                                       ), -999
      @eq ( Ωhllt_334 = -> cfg._max_digits_per_idx                                         ), 3
      @eq ( Ωhllt_335 = -> cfg.TMP_alphabet                                       ), '0123456789ABCNXYZ'
      #.....................................................................................................
      h = new Hollerith cfg_10_no_uniliterals
      @eq ( Ωhllt_336 = -> h.cfg ), cfg
      @eq ( Ωhllt_337 = -> h.encode [ 0, ] ), 'N'
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
      @eq ( Ωhllt_338 = -> cfg.blank                                              ), ' '
      @eq ( Ωhllt_339 = -> cfg.alphabet                                           ), '!#$%&()*+,-./0123456789:;<=>?@AB' + \
                                                                                     'CDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc' + \
                                                                                     'defghijklmnopqrstuvwxyz{|}~¡¢£¤¥' + \
                                                                                     '¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ'
      @eq ( Ωhllt_340 = -> cfg.alphabet_chrs                                      ), Array.from cfg.alphabet
      @eq ( Ωhllt_341 = -> cfg.niner                                              ), ( Array.from cfg.alphabet ).at -1
      @eq ( Ωhllt_342 = -> cfg.leading_niners_re                                  ), /// ^ (?: Æ )* (?= .+ $ ) ///gv
      @eq ( Ωhllt_343 = -> cfg.magnifiers                                         ), 'ÇÈÉÊËÌÍÎ øùúûüýþÿ'
      @eq ( Ωhllt_344 = -> cfg.nmag                                               ), ' ÎÍÌËÊÉÈÇ'
      @eq ( Ωhllt_345 = -> cfg.pmag                                               ), ' øùúûüýþÿ'
      @eq ( Ωhllt_346 = -> cfg.nmag_chrs                                          ), Array.from ' ÎÍÌËÊÉÈÇ'
      @eq ( Ωhllt_347 = -> cfg.pmag_chrs                                          ), Array.from ' øùúûüýþÿ'
      @eq ( Ωhllt_348 = -> cfg.uniliterals                                        ), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ ã äåæçèéêëìíîïðñòóôõö÷'
      @eq ( Ωhllt_349 = -> cfg.nuns                                               ), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ'
      @eq ( Ωhllt_350 = -> cfg.zpuns                                              ), 'ãäåæçèéêëìíîïðñòóôõö÷'
      @eq ( Ωhllt_351 = -> cfg.nun_chrs                                           ), Array.from 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ'
      @eq ( Ωhllt_352 = -> cfg.zpun_chrs                                          ), Array.from 'ãäåæçèéêëìíîïðñòóôõö÷'
      @eq ( Ωhllt_353 = -> cfg._min_integer                                       ), -( ( 128 ** 7 ) - 1 )
      @eq ( Ωhllt_354 = -> cfg._max_integer                                       ), +( ( 128 ** 7 ) - 1 )
      # @eq ( Ωhllt_355 = -> cfg._max_digits_per_idx                                         ), 3
      # @eq ( Ωhllt_356 = -> cfg.TMP_alphabet                                       ), '0123456789ABCEFGHIJKLMNOPQRSTUVWXYZ'
      #.....................................................................................................
      @eq ( Ωhllt_357 = -> is_frozen cfg.alphabet_chrs                            ), true
      @eq ( Ωhllt_358 = -> cfg.base                                               ), 128
      @eq ( Ωhllt_359 = -> cfg.dimension                                          ), 5
      #.....................................................................................................
      h = new Hollerith cfg_128
      @eq ( Ωhllt_360 = -> h.cfg ), cfg
      # @eq ( Ωhllt_361 = -> h.encode [ 0, ] ), null
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  types: ->
    { Hollerith_typespace,
      create_max_integer_$,
      CFG,                        } = require '../../../apps/hollerith/lib/types'
    #.......................................................................................................
    do =>
      T = new Hollerith_typespace()
      @eq     ( Ωhllt_362 = -> T.base.isa -1                                                        ), false
      @eq     ( Ωhllt_363 = -> T.base.isa  0                                                        ), false
      @eq     ( Ωhllt_364 = -> T.base.isa +1                                                        ), false
      @eq     ( Ωhllt_365 = -> T.base.isa +2                                                        ), true
      @eq     ( Ωhllt_366 = -> T._max_integer_$.isa null                                            ), false
      @eq     ( Ωhllt_367 = -> T._max_integer_$.isa 9,          10                                  ), true
      @eq     ( Ωhllt_368 = -> T._max_integer_$.isa 99,         10                                  ), true
      @eq     ( Ωhllt_369 = -> T._max_integer_$.isa 99999999,   10                                  ), true
      @eq     ( Ωhllt_370 = -> T._max_integer_$.isa -10,        10                                  ), false
      @eq     ( Ωhllt_371 = -> /not a positive safe integer/.test T._max_integer_$.data.message     ), true
      @eq     ( Ωhllt_372 = -> T._max_integer_$.isa 0xffff,     16                                  ), true
      @eq     ( Ωhllt_373 = -> T._max_integer_$.isa 0x7fffffff, 16                                  ), false
      @throws ( Ωhllt_374 = -> T._max_integer_$.validate 5, 10                                      ), /\(_max_integer_\$\) not a valid _max_integer_\$: 5 – x not a positive all-niners/
      return null
    #.......................................................................................................
    do =>
      T = new Hollerith_typespace()
      R = { base: 16, _max_digits_per_idx: 4, }
      @eq     ( Ωhllt_375 = -> T._max_integer_$.isa ( R.base ** R._max_digits_per_idx ) - 1, R.base ), true
      return null
    #.......................................................................................................
    do =>
      T = new Hollerith_typespace()
      @eq     ( Ωhllt_376 = -> T._max_integer_$.isa ( 128 ** 1 ) - 1, 128       ), true
      @eq     ( Ωhllt_377 = -> T._max_integer_$.isa ( 128 ** 2 ) - 1, 128       ), true
      @eq     ( Ωhllt_378 = -> T._max_integer_$.isa ( 128 ** 3 ) - 1, 128       ), true
      @eq     ( Ωhllt_379 = -> T._max_integer_$.isa ( 128 ** 4 ) - 1, 128       ), true
      @eq     ( Ωhllt_380 = -> T._max_integer_$.isa ( 128 ** 5 ) - 1, 128       ), true
      @eq     ( Ωhllt_381 = -> T._max_integer_$.isa ( 128 ** 6 ) - 1, 128       ), true
      @eq     ( Ωhllt_382 = -> T._max_integer_$.isa ( 128 ** 7 ) - 1, 128       ), true
      @eq     ( Ωhllt_383 = -> T._max_integer_$.isa ( 128 ** 8 ) - 1, 128       ), false
      @eq     ( Ωhllt_384 = -> T.create_max_integer_$ { base: 10, digits: 2, }  ), 99
      return null
    #.......................................................................................................
    return null

#===========================================================================================================
demo_max_integer = ->
  log_to_base               = ( n, base ) -> ( Math.log n ) / ( Math.log base )
  get_required_digits       = ( n, base ) -> Math.ceil log_to_base n, base
  get_max_niner_digit_count = ( n, base ) -> ( get_required_digits n, base ) - 1
  get_max_integer           = ( n, base ) -> ( base ** get_max_niner_digit_count n, base ) - 1
  info 'Ωhllt_385', Number.MAX_SAFE_INTEGER.toString 16
  info 'Ωhllt_386', Number.MAX_SAFE_INTEGER.toString 32
  whisper '—————————————————————————————————'
  info 'Ωhllt_387', ( 32 ** 4 - 1 ).toString 32
  info 'Ωhllt_388', ( 32 ** 4 - 1 ).toString 32
  whisper '—————————————————————————————————'
  info 'Ωhllt_389', get_required_digits 32,       32
  info 'Ωhllt_390', get_required_digits 32 ** 6,  32
  info 'Ωhllt_391', get_required_digits 1e6,      10
  info 'Ωhllt_392', get_required_digits 20,       10
  whisper '—————————————————————————————————'
  info 'Ωhllt_393', max_digits_base_10    = get_max_niner_digit_count Number.MAX_SAFE_INTEGER, 10
  info 'Ωhllt_394', max_digits_base_16    = get_max_niner_digit_count Number.MAX_SAFE_INTEGER, 16
  info 'Ωhllt_395', max_digits_base_32    = get_max_niner_digit_count Number.MAX_SAFE_INTEGER, 32
  info 'Ωhllt_396', max_digits_base_36    = get_max_niner_digit_count Number.MAX_SAFE_INTEGER, 36
  info 'Ωhllt_397', max_digits_1base_28   = get_max_niner_digit_count Number.MAX_SAFE_INTEGER, 128
  # for base in [ 2 .. 128 ]
  #   info 'Ωhllt_398', { base, }, ( Math.ceil log_to_base Number.MAX_SAFE_INTEGER, base ) - 1
  whisper '—————————————————————————————————'
  info 'Ωhllt_399', '9'.repeat max_digits_base_10
  info 'Ωhllt_400', 'f'.repeat max_digits_base_16
  info 'Ωhllt_401', 'v'.repeat max_digits_base_32
  whisper '—————————————————————————————————'
  info 'Ωhllt_402', ( ( base = 10 ) ** max_digits_base_10 ) - 1
  info 'Ωhllt_403', ( ( base = 16 ) ** max_digits_base_16 ) - 1
  info 'Ωhllt_404', ( ( base = 32 ) ** max_digits_base_32 ) - 1
  info 'Ωhllt_405', ( ( base = 36 ) ** max_digits_base_36 ) - 1
  whisper '—————————————————————————————————'
  info 'Ωhllt_406', get_max_integer Number.MAX_SAFE_INTEGER, 10
  info 'Ωhllt_407', get_max_integer Number.MAX_SAFE_INTEGER, 16
  info 'Ωhllt_408', get_max_integer Number.MAX_SAFE_INTEGER, 32
  info 'Ωhllt_409', get_max_integer Number.MAX_SAFE_INTEGER, 36
  info 'Ωhllt_410', get_max_integer Number.MAX_SAFE_INTEGER, 128
  whisper '—————————————————————————————————'
  info 'Ωhllt_411', ( parseInt ( '9'.repeat max_digits_base_10 ), 10 )
  info 'Ωhllt_412', ( parseInt ( 'f'.repeat max_digits_base_16 ), 16 )
  info 'Ωhllt_413', ( parseInt ( 'v'.repeat max_digits_base_32 ), 32 )
  info 'Ωhllt_414', ( parseInt ( 'z'.repeat max_digits_base_36 ), 36 )
  info 'Ωhllt_415', ( parseInt ( '9'.repeat max_digits_base_10 ), 10 ) <= Number.MAX_SAFE_INTEGER
  info 'Ωhllt_416', ( parseInt ( 'f'.repeat max_digits_base_16 ), 16 ) <= Number.MAX_SAFE_INTEGER
  info 'Ωhllt_417', ( parseInt ( 'v'.repeat max_digits_base_32 ), 32 ) <= Number.MAX_SAFE_INTEGER
  info 'Ωhllt_418', ( parseInt ( 'z'.repeat max_digits_base_36 ), 36 ) <= Number.MAX_SAFE_INTEGER
  whisper '—————————————————————————————————'
  info 'Ωhllt_419', +999 + -999
  info 'Ωhllt_420', +999 + -1
  info 'Ωhllt_421', -( -999 - 1 ) + -999
  info 'Ωhllt_422', -( -999 - 1 ) + -998
  info 'Ωhllt_423', -( -999 - 1 ) + -997
  info 'Ωhllt_424', -( -999 - 1 ) + -3
  info 'Ωhllt_425', -( -999 - 1 ) + -2
  info 'Ωhllt_426', -( -999 - 1 ) + -1
  info 'Ωhllt_427', "#{ -( -999 - 1 ) + -3 }".replace /// ^ 9*? (?= . $ ) ///gv, ''
  info 'Ωhllt_428', "#{ -( -999 - 1 ) + -2 }".replace /// ^ 9*? (?= . $ ) ///gv, ''
  info 'Ωhllt_429', "#{ -( -999 - 1 ) + -1 }".replace /// ^ 9*? (?= . $ ) ///gv, ''
  return null


#===========================================================================================================
if module is require.main then await do =>
  { show_requires, } = require '../../snippets/lib/demo-show-requires.js'
  show_requires '../../../apps/hollerith'
  #---------------------------------------------------------------------------------------------------------
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @hollerith
  ( new Test guytest_cfg ).test { h128_16383_sorting_2: @hollerith.h128_16383_sorting_2, }

  # ( new Test guytest_cfg ).test { types: @hollerith.types, }
  # ( new Test guytest_cfg ).test { h10mvp2_sorting_2: @hollerith.h10mvp2_sorting_2, }
  # ( new Test guytest_cfg ).test { validate_and_compile_cfg_10: @hollerith.validate_and_compile_cfg_10, }
  # ( new Test guytest_cfg ).test { h10mvp2_decode_units: @hollerith.h10mvp2_decode_units, }
  # ( new Test guytest_cfg ).test { get_niners_re: @hollerith.get_niners_re, }
  # ( new Test guytest_cfg ).test { validate_and_compile_cfg: @hollerith.validate_and_compile_cfg, }
  # demo_max_integer()


