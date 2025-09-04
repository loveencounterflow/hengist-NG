
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
  h10mvp_1: ->
    { Hollerith,
      hollerith_10,
      hollerith_10mvp,
      hollerith_128,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    @eq     ( Ωanybt___3 = -> hollerith_10mvp.encode_integer -999   ), 'K000'
    @eq     ( Ωanybt___4 = -> hollerith_10mvp.encode_integer  -99   ), 'L00'
    @eq     ( Ωanybt___5 = -> hollerith_10mvp.encode_integer  -90   ), 'L09'
    @eq     ( Ωanybt___6 = -> hollerith_10mvp.encode_integer  -11   ), 'L88'
    @eq     ( Ωanybt___7 = -> hollerith_10mvp.encode_integer  -10   ), 'L89'
    @eq     ( Ωanybt___8 = -> hollerith_10mvp.encode_integer   -9   ), 'M0'
    @eq     ( Ωanybt___9 = -> hollerith_10mvp.encode_integer   -8   ), 'M1'
    @eq     ( Ωanybt__10 = -> hollerith_10mvp.encode_integer   -7   ), 'M2'
    @eq     ( Ωanybt__11 = -> hollerith_10mvp.encode_integer   -6   ), 'M3'
    @eq     ( Ωanybt__12 = -> hollerith_10mvp.encode_integer   -5   ), 'M4'
    @eq     ( Ωanybt__13 = -> hollerith_10mvp.encode_integer   -4   ), 'M5'
    @eq     ( Ωanybt__14 = -> hollerith_10mvp.encode_integer   -3   ), 'M6'
    @eq     ( Ωanybt__15 = -> hollerith_10mvp.encode_integer   -2   ), 'M7'
    @eq     ( Ωanybt__16 = -> hollerith_10mvp.encode_integer   -1   ), 'M8'
    @eq     ( Ωanybt__17 = -> hollerith_10mvp.encode_integer    0   ), 'N'
    @eq     ( Ωanybt__18 = -> hollerith_10mvp.encode_integer    1   ), 'O1'
    @eq     ( Ωanybt__19 = -> hollerith_10mvp.encode_integer   +9   ), 'O9'
    @eq     ( Ωanybt__20 = -> hollerith_10mvp.encode_integer  +10   ), 'P10'
    @eq     ( Ωanybt__21 = -> hollerith_10mvp.encode_integer  +20   ), 'P20'
    @eq     ( Ωanybt__22 = -> hollerith_10mvp.encode_integer  +90   ), 'P90'
    @eq     ( Ωanybt__23 = -> hollerith_10mvp.encode_integer  123   ), 'Q123'
    @eq     ( Ωanybt__24 = -> hollerith_10mvp.encode_integer +900   ), 'Q900'
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
    @eq     ( Ωanybt__25 = -> hollerith_10mvp.encode_integer -999   ), hollerith_10mvp.encode -999
    @eq     ( Ωanybt__26 = -> hollerith_10mvp.encode_integer  -99   ), hollerith_10mvp.encode  -99
    @eq     ( Ωanybt__27 = -> hollerith_10mvp.encode_integer  -90   ), hollerith_10mvp.encode  -90
    @eq     ( Ωanybt__28 = -> hollerith_10mvp.encode_integer  -11   ), hollerith_10mvp.encode  -11
    @eq     ( Ωanybt__29 = -> hollerith_10mvp.encode_integer  -10   ), hollerith_10mvp.encode  -10
    @eq     ( Ωanybt__30 = -> hollerith_10mvp.encode_integer   -9   ), hollerith_10mvp.encode   -9
    @eq     ( Ωanybt__31 = -> hollerith_10mvp.encode_integer   -8   ), hollerith_10mvp.encode   -8
    @eq     ( Ωanybt__32 = -> hollerith_10mvp.encode_integer   -7   ), hollerith_10mvp.encode   -7
    @eq     ( Ωanybt__33 = -> hollerith_10mvp.encode_integer   -6   ), hollerith_10mvp.encode   -6
    @eq     ( Ωanybt__34 = -> hollerith_10mvp.encode_integer   -5   ), hollerith_10mvp.encode   -5
    @eq     ( Ωanybt__35 = -> hollerith_10mvp.encode_integer   -4   ), hollerith_10mvp.encode   -4
    @eq     ( Ωanybt__36 = -> hollerith_10mvp.encode_integer   -3   ), hollerith_10mvp.encode   -3
    @eq     ( Ωanybt__37 = -> hollerith_10mvp.encode_integer   -2   ), hollerith_10mvp.encode   -2
    @eq     ( Ωanybt__38 = -> hollerith_10mvp.encode_integer   -1   ), hollerith_10mvp.encode   -1
    @eq     ( Ωanybt__39 = -> hollerith_10mvp.encode_integer    0   ), hollerith_10mvp.encode    0
    @eq     ( Ωanybt__40 = -> hollerith_10mvp.encode_integer    1   ), hollerith_10mvp.encode    1
    @eq     ( Ωanybt__41 = -> hollerith_10mvp.encode_integer   +9   ), hollerith_10mvp.encode   +9
    @eq     ( Ωanybt__42 = -> hollerith_10mvp.encode_integer  +10   ), hollerith_10mvp.encode  +10
    @eq     ( Ωanybt__43 = -> hollerith_10mvp.encode_integer  +20   ), hollerith_10mvp.encode  +20
    @eq     ( Ωanybt__44 = -> hollerith_10mvp.encode_integer  +90   ), hollerith_10mvp.encode  +90
    @eq     ( Ωanybt__45 = -> hollerith_10mvp.encode_integer  123   ), hollerith_10mvp.encode  123
    @eq     ( Ωanybt__46 = -> hollerith_10mvp.encode_integer +900   ), hollerith_10mvp.encode +900
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
    @eq     ( Ωanybt__47 = -> hollerith_10mvp.encode_integer -999   ), hollerith_10mvp.encode [ -999, ]
    @eq     ( Ωanybt__48 = -> hollerith_10mvp.encode_integer  -99   ), hollerith_10mvp.encode [  -99, ]
    @eq     ( Ωanybt__49 = -> hollerith_10mvp.encode_integer  -90   ), hollerith_10mvp.encode [  -90, ]
    @eq     ( Ωanybt__50 = -> hollerith_10mvp.encode_integer  -11   ), hollerith_10mvp.encode [  -11, ]
    @eq     ( Ωanybt__51 = -> hollerith_10mvp.encode_integer  -10   ), hollerith_10mvp.encode [  -10, ]
    @eq     ( Ωanybt__52 = -> hollerith_10mvp.encode_integer   -9   ), hollerith_10mvp.encode [   -9, ]
    @eq     ( Ωanybt__53 = -> hollerith_10mvp.encode_integer   -8   ), hollerith_10mvp.encode [   -8, ]
    @eq     ( Ωanybt__54 = -> hollerith_10mvp.encode_integer   -7   ), hollerith_10mvp.encode [   -7, ]
    @eq     ( Ωanybt__55 = -> hollerith_10mvp.encode_integer   -6   ), hollerith_10mvp.encode [   -6, ]
    @eq     ( Ωanybt__56 = -> hollerith_10mvp.encode_integer   -5   ), hollerith_10mvp.encode [   -5, ]
    @eq     ( Ωanybt__57 = -> hollerith_10mvp.encode_integer   -4   ), hollerith_10mvp.encode [   -4, ]
    @eq     ( Ωanybt__58 = -> hollerith_10mvp.encode_integer   -3   ), hollerith_10mvp.encode [   -3, ]
    @eq     ( Ωanybt__59 = -> hollerith_10mvp.encode_integer   -2   ), hollerith_10mvp.encode [   -2, ]
    @eq     ( Ωanybt__60 = -> hollerith_10mvp.encode_integer   -1   ), hollerith_10mvp.encode [   -1, ]
    @eq     ( Ωanybt__61 = -> hollerith_10mvp.encode_integer    0   ), hollerith_10mvp.encode [    0, ]
    @eq     ( Ωanybt__62 = -> hollerith_10mvp.encode_integer    1   ), hollerith_10mvp.encode [    1, ]
    @eq     ( Ωanybt__63 = -> hollerith_10mvp.encode_integer   +9   ), hollerith_10mvp.encode [   +9, ]
    @eq     ( Ωanybt__64 = -> hollerith_10mvp.encode_integer  +10   ), hollerith_10mvp.encode [  +10, ]
    @eq     ( Ωanybt__65 = -> hollerith_10mvp.encode_integer  +20   ), hollerith_10mvp.encode [  +20, ]
    @eq     ( Ωanybt__66 = -> hollerith_10mvp.encode_integer  +90   ), hollerith_10mvp.encode [  +90, ]
    @eq     ( Ωanybt__67 = -> hollerith_10mvp.encode_integer  123   ), hollerith_10mvp.encode [  123, ]
    @eq     ( Ωanybt__68 = -> hollerith_10mvp.encode_integer +900   ), hollerith_10mvp.encode [ +900, ]
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
        # debug 'Ωhllt__69', entry
        @eq ( Ωhllt__70 = -> entry.idx ), idx
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
        # help 'Ωhllt__71', uline
        real_indexes.push Number uline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωhllt__72 = -> equals expected_indexes, real_indexes ), false
    #.......................................................................................................
    for _ in [ 1 .. 10 ]
      plines = shuffle plines
      plines.sort()
      real_indexes = []
      for pline in plines
        # help 'Ωhllt__73', pline
        real_indexes.push Number pline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωhllt__74 = -> equals expected_indexes, real_indexes ), true
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  h10mvp2_sorting_2: ->
    { Hollerith,
      hollerith_10,
      hollerith_10mvp2,
      hollerith_128,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    probes = [
      [ [ -999,           ], 'B000',        ]
      [ [  -99,           ], 'C00',         ]
      [ [  -90,           ], 'C09',         ]
      [ [  -11,           ], 'C88',         ]
      [ [  -10,           ], 'C89',         ]
      [ [   -9,           ], 'E',           ]
      [ [   -8,           ], 'F',           ]
      [ [   -7,           ], 'G',           ]
      [ [   -6,           ], 'H',           ]
      [ [   -5,           ], 'I',           ]
      [ [   -4,           ], 'J',           ]
      [ [   -3,           ], 'K',           ]
      [ [   -2,           ], 'L',           ]
      [ [   -1,           ], 'M',           ]
      [ [   +0,  -20,     ], 'NC79',        ]
      [ [   +0,           ], 'N',           ]
      [ [   +0,  +20,     ], 'NX20',        ]
      [ [   +9,           ], 'W',           ]
      [ [  +10,   -3,     ], 'X10K',        ]
      [ [  +10,   -2,     ], 'X10L',        ]
      [ [  +10,   -1,     ], 'X10M',        ]
      [ [  +10,           ], 'X10',         ]
      [ [  +10,   +0,     ], 'X10N',        ]
      [ [  +10,   +1,     ], 'X10O',        ]
      [ [  +10,  +10, -1, ], 'X10X10M',     ]
      [ [  +10,  +10,     ], 'X10X10',      ]
      [ [  +10,  +20,     ], 'X10X20',      ]
      [ [  +20,           ], 'X20',         ]
      [ [  +20,  +10,     ], 'X20X10',      ]
      [ [  +90,           ], 'X90',         ]
      [ [ +900,           ], 'Y900',        ]
      ]
    ulines            = []
    plines            = []
    expected_indexes  = ( idx for idx in [ 0 ... probes.length ] )
    shuffle           = GUY.rnd.get_shuffle 57, 88
    for [ vdx, sk_matcher, ], idx in probes
      usk   = hollerith_10mvp2.encode vdx
      @eq ( Ωhllt__75 = -> usk ), sk_matcher
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
        # help 'Ωhllt__76', uline
        real_indexes.push Number uline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωhllt__77 = -> equals expected_indexes, real_indexes ), false
    #.......................................................................................................
    for _ in [ 1 .. 10 ]
      plines = shuffle plines
      plines.sort()
      real_indexes = []
      for pline in plines
        # help 'Ωhllt__78', pline
        real_indexes.push Number pline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωhllt__79 = -> equals expected_indexes, real_indexes ), true
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  h10mvp2_sorting_2: ->
    { Hollerith,
      hollerith_128,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    probes = [
      [ [ -999,           ], 'Í¿;',     ]
      [ [  -99,           ], 'Î?',      ]
      [ [  -90,           ], 'ÎH',      ]
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
      usk   = hollerith_128.encode vdx
      @eq ( Ωhllt__80 = -> usk ), sk_matcher
      # echo rpr usk
      psk   = usk.padEnd 10, hollerith_128.cfg.zpuns[ 0 ]
      usk   = usk.padEnd 10, ' '
      ulines.push "#{usk} #{rpr vdx} #{idx}"
      plines.push "#{psk} #{rpr vdx} #{idx}"
    #.......................................................................................................
    for _ in [ 1 .. 10 ]
      ulines = shuffle ulines
      ulines.sort()
      real_indexes = []
      for uline in ulines
        # help 'Ωhllt__81', uline
        real_indexes.push Number uline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωhllt__82 = -> equals expected_indexes, real_indexes ), false
    #.......................................................................................................
    for _ in [ 1 .. 10 ]
      plines = shuffle plines
      plines.sort()
      real_indexes = []
      for pline, idx in plines
        help 'Ωhllt__83', rpr pline if _ is 1
        real_indexes.push Number pline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωhllt__84 = -> equals expected_indexes, real_indexes ), true
    #.......................................................................................................
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
      info 'Ωhllt__85', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
    #   @eq ( Ωhllt__86 = ->  unit_result                     ),  unit_matcher
      @eq ( Ωhllt__87 = -> index_result                     ), index_matcher
      @eq ( Ωhllt__88 = -> sortkey ), ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
      debug 'Ωhllt__89', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
    #   @eq ( Ωhllt__90 = -> codec.decode sortkey  ), index_matcher
    #   # echo [ sortkey, index_result, unit_result, ]
    # #.......................................................................................................
    # @eq     ( Ωhllt__91 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    # @eq     ( Ωhllt__92 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    # @eq     ( Ωhllt__93 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    # @throws ( Ωhllt__94 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
    # @throws ( Ωhllt__95 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
    # @throws ( Ωhllt__96 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
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
      [ 'B000NNNNNN', [ -999        ], 'nnum:B,000[-999]|padding:NNNNNN',                     ]
      [ 'C00NNNNNNN', [ -99         ], 'nnum:C,00[-99]|padding:NNNNNNN',                      ]
      [ 'C09NNNNNNN', [ -90         ], 'nnum:C,09[-90]|padding:NNNNNNN',                      ]
      [ 'C88NNNNNNN', [ -11         ], 'nnum:C,88[-11]|padding:NNNNNNN',                      ]
      [ 'C89NNNNNNN', [ -10         ], 'nnum:C,89[-10]|padding:NNNNNNN',                      ]
      [ 'ENNNNNNNNN', [ -9          ], 'nun:E[-9]|padding:NNNNNNNNN',                         ]
      [ 'FNNNNNNNNN', [ -8          ], 'nun:F[-8]|padding:NNNNNNNNN',                         ]
      [ 'GNNNNNNNNN', [ -7          ], 'nun:G[-7]|padding:NNNNNNNNN',                         ]
      [ 'HNNNNNNNNN', [ -6          ], 'nun:H[-6]|padding:NNNNNNNNN',                         ]
      [ 'INNNNNNNNN', [ -5          ], 'nun:I[-5]|padding:NNNNNNNNN',                         ]
      [ 'JNNNNNNNNN', [ -4          ], 'nun:J[-4]|padding:NNNNNNNNN',                         ]
      [ 'KNNNNNNNNN', [ -3          ], 'nun:K[-3]|padding:NNNNNNNNN',                         ]
      [ 'LNNNNNNNNN', [ -2          ], 'nun:L[-2]|padding:NNNNNNNNN',                         ]
      [ 'MNNNNNNNNN', [ -1          ], 'nun:M[-1]|padding:NNNNNNNNN',                         ]
      [ 'NC79NNNNNN', [ 0, -20      ], 'zero:N[0]|nnum:C,79[-20]|padding:NNNNNN',             ]
      [ 'NNNNNNNNNN', [ 0           ], 'padding:NNNNNNNNNN[0]',                               ]
      [ 'NX20NNNNNN', [ 0, 20       ], 'zero:N[0]|pnum:X,20[20]|padding:NNNNNN',              ]
      [ 'WNNNNNNNNN', [ 9           ], 'pun:W[9]|padding:NNNNNNNNN',                          ]
      [ 'X10KNNNNNN', [ 10, -3      ], 'pnum:X,10[10]|nun:K[-3]|padding:NNNNNN',              ]
      [ 'X10LNNNNNN', [ 10, -2      ], 'pnum:X,10[10]|nun:L[-2]|padding:NNNNNN',              ]
      [ 'X10MNNNNNN', [ 10, -1      ], 'pnum:X,10[10]|nun:M[-1]|padding:NNNNNN',              ]
      [ 'X10NNNNNNN', [ 10          ], 'pnum:X,10[10]|padding:NNNNNNN',                       ]
      [ 'X10ONNNNNN', [ 10, 1       ], 'pnum:X,10[10]|pun:O[1]|padding:NNNNNN',               ]
      [ 'X10X10MNNN', [ 10, 10, -1  ], 'pnum:X,10[10]|pnum:X,10[10]|nun:M[-1]|padding:NNN',   ]
      [ 'X10X10NNNN', [ 10, 10      ], 'pnum:X,10[10]|pnum:X,10[10]|padding:NNNN',            ]
      [ 'X10X20NNNN', [ 10, 20      ], 'pnum:X,10[10]|pnum:X,20[20]|padding:NNNN',            ]
      [ 'X20NNNNNNN', [ 20          ], 'pnum:X,20[20]|padding:NNNNNNN',                       ]
      [ 'X20X10NNNN', [ 20, 10      ], 'pnum:X,20[20]|pnum:X,10[10]|padding:NNNN',            ]
      [ 'X90NNNNNNN', [ 90          ], 'pnum:X,90[90]|padding:NNNNNNN',                       ]
      [ 'Y900NNNNNN', [ 900         ], 'pnum:Y,900[900]|padding:NNNNNN',                      ]
      [ 'NNNNNNNNN',  [ 0           ], 'padding:NNNNNNNNN[0]',                                ]
      [ 'NN',         [ 0           ], 'padding:NN[0]',                                       ]
      [ 'N',          [ 0           ], 'padding:N[0]',                                        ]
      [ 'X10',        [ 10          ], 'pnum:X,10[10]',                                       ]
      [ 'K',          [ -3          ], 'nun:K[-3]',                                           ]
      ]
    #.......................................................................................................
    codec = hollerith_10mvp2
    for [ sortkey, index_matcher, unit_matcher, ] in probes_and_matchers
      unit_result     = []
      index_result    = []
      for unit in codec.parse sortkey
        unit_result.push  helpers.rpr_unit unit
        index_result.push unit.index if unit.index?
      unit_result   = unit_result.join '|'
      info 'Ωhllt__97', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
      @eq ( Ωhllt__98 = ->  unit_result                     ),  unit_matcher
      @eq ( Ωhllt__99 = -> index_result                     ), index_matcher
      @eq ( Ωhllt_100 = -> codec.decode sortkey             ), index_matcher
      @eq ( Ωhllt_101 = -> sortkey                          ), ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
      # echo [ sortkey, index_result, unit_result, ]
    #.......................................................................................................
    @eq     ( Ωhllt_102 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    @eq     ( Ωhllt_103 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    @eq     ( Ωhllt_104 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    @throws ( Ωhllt_105 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
    @throws ( Ωhllt_106 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
    @throws ( Ωhllt_107 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  h128b_decode: ->
    { Hollerith,
      hollerith_128,
      hollerith_128b,
      hollerith_10mvp,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    # codec = hollerith_128
    # codec = hollerith_128b
    codec = hollerith_10mvp
    debug 'Ωhllt_108', rpr codec.encode -1
    debug 'Ωhllt_109', rpr codec.encode -2
    n =   -100; urge 'Ωhllt_110', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    -21; urge 'Ωhllt_111', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    -20; urge 'Ωhllt_112', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    -19; urge 'Ωhllt_113', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =     -1; urge 'Ωhllt_114', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =      0; urge 'Ωhllt_115', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =      1; urge 'Ωhllt_116', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =      2; urge 'Ωhllt_117', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =      3; urge 'Ωhllt_118', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =     10; urge 'Ωhllt_119', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    126; urge 'Ωhllt_120', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    127; urge 'Ωhllt_121', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    128; urge 'Ωhllt_122', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    n =    129; urge 'Ωhllt_123', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
    # for [ sortkey, index_matcher, unit_matcher, ] in probes_and_matchers
    #   unit_result     = []
    #   index_result    = []
    #   for unit in codec.parse sortkey
    #     unit_result.push  helpers.rpr_unit unit
    #     index_result.push unit.index if unit.index?
    #   unit_result   = unit_result.join '|'
    #   info 'Ωhllt_124', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
    # #   @eq ( Ωhllt_125 = ->  unit_result                     ),  unit_matcher
    #   @eq ( Ωhllt_126 = -> index_result                     ), index_matcher
    #   @eq ( Ωhllt_127 = -> sortkey ), ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
    #   debug 'Ωhllt_128', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg.zpuns[ 0 ]
    #   @eq ( Ωhllt_129 = -> codec.decode sortkey  ), index_matcher
    #   # echo [ sortkey, index_result, unit_result, ]
    # #.......................................................................................................
    # @eq     ( Ωhllt_130 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    # @eq     ( Ωhllt_131 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    # @eq     ( Ωhllt_132 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    # @throws ( Ωhllt_133 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
    # @throws ( Ωhllt_134 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
    # @throws ( Ωhllt_135 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
    #.......................................................................................................
    return null


  #---------------------------------------------------------------------------------------------------------
  types: ->
    { internals,
      Hollerith_typespace,
      CFG,                        } = require '../../../apps/hollerith/lib/types'
    { type_of,                    } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals,  } = require 'node:util'
    #.......................................................................................................
    do =>
      T = new Hollerith_typespace()
      @eq ( Ωhllt_136 = -> T[CFG].blank                     ), '\x20'
      return null
    #.......................................................................................................
    do =>
      T = new Hollerith_typespace { blank: '#', }
      @eq ( Ωhllt_137 = -> T[CFG].blank                     ), '#'
      @eq ( Ωhllt_138 = -> T.magnifiers.isa 'ABC DXYZ'      ), false
      @eq ( Ωhllt_139 = -> T.magnifiers.isa 'ABC#DXYZ'      ), true
      @eq ( Ωhllt_140 = -> T.blank.isa ' '                  ), false
      @eq ( Ωhllt_141 = -> T.blank.isa '#'                  ), true
      @eq ( Ωhllt_142 = -> T.blank.isa T[CFG].blank         ), true
      return null
    #.......................................................................................................
    T = new Hollerith_typespace()
    @eq ( Ωhllt_143 = -> T.nonempty_text.isa 4            ), false
    @eq ( Ωhllt_144 = -> T.nonempty_text.isa false        ), false
    @eq ( Ωhllt_145 = -> T.nonempty_text.isa ''           ), false
    @eq ( Ωhllt_146 = -> T.nonempty_text.isa 'yes'        ), true
    #.......................................................................................................
    @eq ( Ωhllt_147 = -> T.incremental_text.isa 'yes'     ), false
    @eq ( Ωhllt_148 = -> T.decremental_text.isa 'yes'     ), false
    @eq ( Ωhllt_149 = -> T.incremental_text.data          ), { chrs: [ 'y', 'e', 's' ], fail: { x: 'yes', idx: 1, prv_chr: 'y', chr: 'e' } }
    @eq ( Ωhllt_150 = -> T.incremental_text.isa 'abcdefz' ), true
    @eq ( Ωhllt_151 = -> T.decremental_text.isa 'abcdefz' ), false
    @eq ( Ωhllt_152 = -> T.incremental_text.data          ), { chrs: [ 'a', 'b', 'c', 'd', 'e', 'f', 'z', ], }
    @eq ( Ωhllt_153 = -> T.decremental_text.data          ), { chrs: [ 'a', 'b', 'c', 'd', 'e', 'f', 'z' ], fail: { x: 'abcdefz', idx: 1, prv_chr: 'a', chr: 'b' } }
    @eq ( Ωhllt_154 = -> T.incremental_text.isa 'abc0'    ), false
    @eq ( Ωhllt_155 = -> T.incremental_text.data          ), { chrs: [ 'a', 'b', 'c', '0', ], fail: { x: 'abc0', idx: 3, prv_chr: 'c', chr: '0' } }
    @eq ( Ωhllt_156 = -> T.decremental_text.isa 'cba'     ), true
    @eq ( Ωhllt_157 = -> T.decremental_text.data          ), { chrs: [ 'c', 'b', 'a', ], }
    #.......................................................................................................
    @eq ( Ωhllt_158 = -> T.magnifiers.isa ''                                  ), false
    @eq ( Ωhllt_159 = -> T.magnifiers.data                                    ), { message: "expected a magnifier, got an empty text", }
    @eq ( Ωhllt_160 = -> T.magnifiers.isa 'ABC XYZ'                           ), true
    @eq ( Ωhllt_161 = -> T.magnifiers.data                                    ), { nmag_chrs_reversed: [ 'A', 'B', 'C' ], pmag_chrs: [ 'X', 'Y', 'Z' ], nmag: ' CBA', pmag: ' XYZ' }
    @eq ( Ωhllt_162 = -> Object.isFrozen T.magnifiers.data.nmag_chrs_reversed ), true
    @eq ( Ωhllt_163 = -> Object.isFrozen T.magnifiers.data.pmag_chrs          ), true
    @eq ( Ωhllt_164 = -> T.magnifiers.isa 'ABC\nXYZ'                          ), false
    @eq ( Ωhllt_165 = -> T.magnifiers.isa 'ABC\tXYZ'                          ), false
    @eq ( Ωhllt_166 = -> T.magnifiers.isa 'ABC DXYZ'                          ), true
    @eq ( Ωhllt_167 = -> T.magnifiers.isa 'ABD CXYZ'                          ), false
    #.......................................................................................................
    return null

#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @hollerith
  # ( new Test guytest_cfg ).test { h128b_decode: @hollerith.h128b_decode, }
  # ( new Test guytest_cfg ).test { types_bounded_list: @hollerith.types_bounded_list, }
  # ( new Test guytest_cfg ).test { type_data_handling: @hollerith.type_data_handling, }
  ( new Test guytest_cfg ).test { types: @hollerith.types, }
  #.........................................................................................................
  # ( new Test guytest_cfg ).test { h10mvp2_sorting_2: @hollerith.h10mvp2_sorting_2, }
  # ( new Test guytest_cfg ).test { h128_decode: @hollerith.h128_decode, }
  # ( new Test guytest_cfg ).test { h10mvp2_decode_units: @hollerith.h10mvp2_decode_units, }
