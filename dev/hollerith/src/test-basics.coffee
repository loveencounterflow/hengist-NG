
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



############################################################################################################
#
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
        # debug 'Ωbsk__69', entry
        @eq ( Ωbsk__70 = -> entry.idx ), idx
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
        # help 'Ωbsk__72', uline
        real_indexes.push Number uline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωbsk__73 = -> equals expected_indexes, real_indexes ), false
    #.......................................................................................................
    for _ in [ 1 .. 10 ]
      plines = shuffle plines
      plines.sort()
      real_indexes = []
      for pline in plines
        # help 'Ωbsk__74', pline
        real_indexes.push Number pline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωbsk__75 = -> equals expected_indexes, real_indexes ), true
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @hollerith
