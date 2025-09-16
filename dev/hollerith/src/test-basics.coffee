
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
  lime
  gold
  red
  blue
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'


#===========================================================================================================
helpers =

  #---------------------------------------------------------------------------------------------------------
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
      @eq     ( Ωanybt___2 = -> type_of hollerith_10mvp.encode_integer    ), 'undefined'
      @eq     ( Ωanybt___3 = -> type_of hollerith_10mvp.encode_idx        ), 'function'
      @eq     ( Ωanybt___4 = -> type_of hollerith_10mvp.encode_vdx        ), 'function'
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  padding: ->
    { Hollerith,
      hollerith_10,
      hollerith_10mvp,
      hollerith_128,
      internals               } = require '../../../apps/hollerith'
    # { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    #.......................................................................................................
    do =>
      @eq     ( Ωanybt___5 = -> equals ( hollerith_10mvp.encode 123 ), ( hollerith_10mvp.encode_idx 123       ) ), true
      @eq     ( Ωanybt___6 = -> equals ( hollerith_10mvp.encode 123 ), ( hollerith_10mvp.encode_vdx [ 123, ]  ) ), false
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_leading_novas_re: ->
    { internals: { types, }   } = require '../../../apps/hollerith'
    { get_leading_novas_re,   } = types.internals
    # debug 'Ωhllt___7', '987'.replace /// ^ (?: 9 )*? (?= . $ ) ///gv, ''
    #.......................................................................................................
    do =>
      @eq     ( Ωanybt___8 = -> get_leading_novas_re '9' ), /// ^ (?: 9  )* (?= .+ $ ) ///gv
      @eq     ( Ωanybt___9 = -> get_leading_novas_re '*' ), /// ^ (?: \* )* (?= .+ $ ) ///gv
      return null
    #.......................................................................................................
    do =>
      _leading_novas_re = get_leading_novas_re '9'
      @eq     ( Ωanybt__10 = -> '9999'.replace _leading_novas_re, '' ), '9'
      @eq     ( Ωanybt__11 = ->  '999'.replace _leading_novas_re, '' ), '9'
      @eq     ( Ωanybt__12 = ->   '99'.replace _leading_novas_re, '' ), '9'
      @eq     ( Ωanybt__13 = ->    '9'.replace _leading_novas_re, '' ), '9'
      @eq     ( Ωanybt__14 = -> '9989'.replace _leading_novas_re, '' ), '89'
      @eq     ( Ωanybt__15 = ->  '989'.replace _leading_novas_re, '' ), '89'
      @eq     ( Ωanybt__16 = ->   '89'.replace _leading_novas_re, '' ), '89'
      @eq     ( Ωanybt__17 = -> '9992'.replace _leading_novas_re, '' ), '2'
      @eq     ( Ωanybt__18 = ->  '992'.replace _leading_novas_re, '' ), '2'
      @eq     ( Ωanybt__19 = ->   '92'.replace _leading_novas_re, '' ), '2'
      @eq     ( Ωanybt__20 = ->    '7'.replace _leading_novas_re, '' ), '7'
      @eq     ( Ωanybt__21 = ->     ''.replace _leading_novas_re, '' ), ''
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
    @eq     ( Ωanybt__22 = -> hollerith_10mvp.encode_idx -999   ), 'K000'
    @eq     ( Ωanybt__23 = -> hollerith_10mvp.encode_idx  -99   ), 'L00'
    @eq     ( Ωanybt__24 = -> hollerith_10mvp.encode_idx  -90   ), 'L09'
    @eq     ( Ωanybt__25 = -> hollerith_10mvp.encode_idx  -11   ), 'L88'
    @eq     ( Ωanybt__26 = -> hollerith_10mvp.encode_idx  -10   ), 'L89'
    @eq     ( Ωanybt__27 = -> hollerith_10mvp.encode_idx   -9   ), 'M0'
    @eq     ( Ωanybt__28 = -> hollerith_10mvp.encode_idx   -8   ), 'M1'
    @eq     ( Ωanybt__29 = -> hollerith_10mvp.encode_idx   -7   ), 'M2'
    @eq     ( Ωanybt__30 = -> hollerith_10mvp.encode_idx   -6   ), 'M3'
    @eq     ( Ωanybt__31 = -> hollerith_10mvp.encode_idx   -5   ), 'M4'
    @eq     ( Ωanybt__32 = -> hollerith_10mvp.encode_idx   -4   ), 'M5'
    @eq     ( Ωanybt__33 = -> hollerith_10mvp.encode_idx   -3   ), 'M6'
    @eq     ( Ωanybt__34 = -> hollerith_10mvp.encode_idx   -2   ), 'M7'
    @eq     ( Ωanybt__35 = -> hollerith_10mvp.encode_idx   -1   ), 'M8'
    @eq     ( Ωanybt__36 = -> hollerith_10mvp.encode_idx    0   ), 'N'
    @eq     ( Ωanybt__37 = -> hollerith_10mvp.encode_idx    1   ), 'O1'
    @eq     ( Ωanybt__38 = -> hollerith_10mvp.encode_idx   +9   ), 'O9'
    @eq     ( Ωanybt__39 = -> hollerith_10mvp.encode_idx  +10   ), 'P10'
    @eq     ( Ωanybt__40 = -> hollerith_10mvp.encode_idx  +20   ), 'P20'
    @eq     ( Ωanybt__41 = -> hollerith_10mvp.encode_idx  +90   ), 'P90'
    @eq     ( Ωanybt__42 = -> hollerith_10mvp.encode_idx  123   ), 'Q123'
    @eq     ( Ωanybt__43 = -> hollerith_10mvp.encode_idx +900   ), 'Q900'
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
    @eq     ( Ωanybt__44 = -> hollerith_10mvp.encode_idx -999   ), hollerith_10mvp.encode -999
    @eq     ( Ωanybt__45 = -> hollerith_10mvp.encode_idx  -99   ), hollerith_10mvp.encode  -99
    @eq     ( Ωanybt__46 = -> hollerith_10mvp.encode_idx  -90   ), hollerith_10mvp.encode  -90
    @eq     ( Ωanybt__47 = -> hollerith_10mvp.encode_idx  -11   ), hollerith_10mvp.encode  -11
    @eq     ( Ωanybt__48 = -> hollerith_10mvp.encode_idx  -10   ), hollerith_10mvp.encode  -10
    @eq     ( Ωanybt__49 = -> hollerith_10mvp.encode_idx   -9   ), hollerith_10mvp.encode   -9
    @eq     ( Ωanybt__50 = -> hollerith_10mvp.encode_idx   -8   ), hollerith_10mvp.encode   -8
    @eq     ( Ωanybt__51 = -> hollerith_10mvp.encode_idx   -7   ), hollerith_10mvp.encode   -7
    @eq     ( Ωanybt__52 = -> hollerith_10mvp.encode_idx   -6   ), hollerith_10mvp.encode   -6
    @eq     ( Ωanybt__53 = -> hollerith_10mvp.encode_idx   -5   ), hollerith_10mvp.encode   -5
    @eq     ( Ωanybt__54 = -> hollerith_10mvp.encode_idx   -4   ), hollerith_10mvp.encode   -4
    @eq     ( Ωanybt__55 = -> hollerith_10mvp.encode_idx   -3   ), hollerith_10mvp.encode   -3
    @eq     ( Ωanybt__56 = -> hollerith_10mvp.encode_idx   -2   ), hollerith_10mvp.encode   -2
    @eq     ( Ωanybt__57 = -> hollerith_10mvp.encode_idx   -1   ), hollerith_10mvp.encode   -1
    @eq     ( Ωanybt__58 = -> hollerith_10mvp.encode_idx    0   ), hollerith_10mvp.encode    0
    @eq     ( Ωanybt__59 = -> hollerith_10mvp.encode_idx    1   ), hollerith_10mvp.encode    1
    @eq     ( Ωanybt__60 = -> hollerith_10mvp.encode_idx   +9   ), hollerith_10mvp.encode   +9
    @eq     ( Ωanybt__61 = -> hollerith_10mvp.encode_idx  +10   ), hollerith_10mvp.encode  +10
    @eq     ( Ωanybt__62 = -> hollerith_10mvp.encode_idx  +20   ), hollerith_10mvp.encode  +20
    @eq     ( Ωanybt__63 = -> hollerith_10mvp.encode_idx  +90   ), hollerith_10mvp.encode  +90
    @eq     ( Ωanybt__64 = -> hollerith_10mvp.encode_idx  123   ), hollerith_10mvp.encode  123
    @eq     ( Ωanybt__65 = -> hollerith_10mvp.encode_idx +900   ), hollerith_10mvp.encode +900
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
    @eq     ( Ωanybt__66 = -> ( hollerith_10mvp.encode_idx -999 ).padEnd 25, 'N' ), hollerith_10mvp.encode [ -999, ]
    @eq     ( Ωanybt__67 = -> ( hollerith_10mvp.encode_idx  -99 ).padEnd 25, 'N' ), hollerith_10mvp.encode [  -99, ]
    @eq     ( Ωanybt__68 = -> ( hollerith_10mvp.encode_idx  -90 ).padEnd 25, 'N' ), hollerith_10mvp.encode [  -90, ]
    @eq     ( Ωanybt__69 = -> ( hollerith_10mvp.encode_idx  -11 ).padEnd 25, 'N' ), hollerith_10mvp.encode [  -11, ]
    @eq     ( Ωanybt__70 = -> ( hollerith_10mvp.encode_idx  -10 ).padEnd 25, 'N' ), hollerith_10mvp.encode [  -10, ]
    @eq     ( Ωanybt__71 = -> ( hollerith_10mvp.encode_idx   -9 ).padEnd 25, 'N' ), hollerith_10mvp.encode [   -9, ]
    @eq     ( Ωanybt__72 = -> ( hollerith_10mvp.encode_idx   -8 ).padEnd 25, 'N' ), hollerith_10mvp.encode [   -8, ]
    @eq     ( Ωanybt__73 = -> ( hollerith_10mvp.encode_idx   -7 ).padEnd 25, 'N' ), hollerith_10mvp.encode [   -7, ]
    @eq     ( Ωanybt__74 = -> ( hollerith_10mvp.encode_idx   -6 ).padEnd 25, 'N' ), hollerith_10mvp.encode [   -6, ]
    @eq     ( Ωanybt__75 = -> ( hollerith_10mvp.encode_idx   -5 ).padEnd 25, 'N' ), hollerith_10mvp.encode [   -5, ]
    @eq     ( Ωanybt__76 = -> ( hollerith_10mvp.encode_idx   -4 ).padEnd 25, 'N' ), hollerith_10mvp.encode [   -4, ]
    @eq     ( Ωanybt__77 = -> ( hollerith_10mvp.encode_idx   -3 ).padEnd 25, 'N' ), hollerith_10mvp.encode [   -3, ]
    @eq     ( Ωanybt__78 = -> ( hollerith_10mvp.encode_idx   -2 ).padEnd 25, 'N' ), hollerith_10mvp.encode [   -2, ]
    @eq     ( Ωanybt__79 = -> ( hollerith_10mvp.encode_idx   -1 ).padEnd 25, 'N' ), hollerith_10mvp.encode [   -1, ]
    @eq     ( Ωanybt__80 = -> ( hollerith_10mvp.encode_idx    0 ).padEnd 25, 'N' ), hollerith_10mvp.encode [    0, ]
    @eq     ( Ωanybt__81 = -> ( hollerith_10mvp.encode_idx    1 ).padEnd 25, 'N' ), hollerith_10mvp.encode [    1, ]
    @eq     ( Ωanybt__82 = -> ( hollerith_10mvp.encode_idx   +9 ).padEnd 25, 'N' ), hollerith_10mvp.encode [   +9, ]
    @eq     ( Ωanybt__83 = -> ( hollerith_10mvp.encode_idx  +10 ).padEnd 25, 'N' ), hollerith_10mvp.encode [  +10, ]
    @eq     ( Ωanybt__84 = -> ( hollerith_10mvp.encode_idx  +20 ).padEnd 25, 'N' ), hollerith_10mvp.encode [  +20, ]
    @eq     ( Ωanybt__85 = -> ( hollerith_10mvp.encode_idx  +90 ).padEnd 25, 'N' ), hollerith_10mvp.encode [  +90, ]
    @eq     ( Ωanybt__86 = -> ( hollerith_10mvp.encode_idx  123 ).padEnd 25, 'N' ), hollerith_10mvp.encode [  123, ]
    @eq     ( Ωanybt__87 = -> ( hollerith_10mvp.encode_idx +900 ).padEnd 25, 'N' ), hollerith_10mvp.encode [ +900, ]
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
        sk            = sk.padEnd padding, hollerith_10mvp.cfg._zpuns[ 0 ] if padding?
        probes[ idx ] = { sk, probe, idx, }
      probes.sort ( a, b ) ->
        return -1 if a.sk < b.sk
        return +1 if a.sk > b.sk
        return null
      for entry, idx in probes
        # debug 'Ωhllt__88', entry
        @eq ( Ωhllt__89 = -> entry.idx ), idx
      return null
    #.......................................................................................................
    sorted_singles null
    sorted_singles 10
    return null

  #---------------------------------------------------------------------------------------------------------
  h10mvp_sorting_2: ->
    { Hollerith,
      hollerith_10mvp,
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
      psk   = usk.padEnd 10, hollerith_10mvp.cfg._zpuns[ 0 ]
      usk   = usk.padEnd 10, ' '
      ulines.push "#{usk} #{rpr vdx} #{idx}"
      plines.push "#{psk} #{rpr vdx} #{idx}"
    #.......................................................................................................
    for _ in [ 1 .. 10 ]
      ulines = shuffle ulines
      ulines.sort()
      real_indexes = []
      for uline in ulines
        # help 'Ωhllt__90', uline
        real_indexes.push Number uline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωhllt__91 = -> equals expected_indexes, real_indexes ), true
    #.......................................................................................................
    for _ in [ 1 .. 10 ]
      plines = shuffle plines
      plines.sort()
      real_indexes = []
      for pline in plines
        # help 'Ωhllt__92', pline
        real_indexes.push Number pline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωhllt__93 = -> equals expected_indexes, real_indexes ), true
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  hollerith_10mvp2_big_shuffle: ->
    { Hollerith,
      hollerith_10mvp2,
      test,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    codec                       = hollerith_10mvp2
    rnd_vdx_cfg                 =
      seed:         null
      min_length:   1
      max_length:   codec.cfg.dimension - 1
      min_idx:      Math.max codec.cfg._min_integer, -2000
      max_idx:      Math.min codec.cfg._max_integer, +2000
    # debug 'Ωhllt__94', rnd_vdx_cfg
    # debug 'Ωhllt__95', codec.cfg._sortkey_width
    get_random_vdx              = test.internals.get_random_vdx_producer rnd_vdx_cfg
    probe_sub_count             = 3
    shuffle                     = GUY.rnd.get_shuffle 57, 88
    encode                      = ( vdx ) -> ( codec.encode vdx ).padEnd codec.cfg._sortkey_width, codec.cfg._cipher
    probes_sortkey              = []
    #.......................................................................................................
    for first_idx in [ rnd_vdx_cfg.min_idx .. rnd_vdx_cfg.max_idx ]
      for _ in [ 1 .. probe_sub_count ]
        vdx = [ first_idx, get_random_vdx()..., ]
        sk  = encode vdx
        probes_sortkey.push { vdx, sk, }
    #.......................................................................................................
    probes_sortkey    = shuffle probes_sortkey
    probes_vdx        = probes_sortkey[ .. ]
    #.......................................................................................................
    sort_by_vdx       = ( a, b ) ->
      a = a.vdx
      b = b.vdx
      for idx in [ 0 ... ( Math.max a.length, b.length ) ]
        da = a[ idx ] ? 0
        db = b[ idx ] ? 0
        continue if da is db
        return -1 if da < db
        return +1
      return null
    #.......................................................................................................
    sort_by_sortkey   = ( a, b ) ->
      a = a.sk
      b = b.sk
      return  0 if a is b
      return -1 if a < b
      return +1
    #.......................................................................................................
    probes_vdx.sort     sort_by_vdx
    probes_sortkey.sort sort_by_sortkey
    for probe_vdx, idx in probes_vdx
      probe_sortkey = probes_sortkey[ idx ]
      # whisper 'Ωhllt__96', ( gold probe_sortkey.sk ), ( red probe_vdx.vdx ), ( lime probe_sortkey.vdx )
      @eq ( Ωhllt__97 = -> probe_sortkey.vdx ), probe_vdx.vdx
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  hollerith_128_big_shuffle: ->
    { Hollerith,
      hollerith_128,
      hollerith_10mvp2,
      test,
      internals               } = require '../../../apps/hollerith'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { isDeepStrictEqual: equals, } = require 'node:util'
    codec                       = hollerith_128
    # codec                       = hollerith_10mvp2
    rnd_vdx_cfg                 =
      seed:         null
      min_length:   1
      max_length:   codec.cfg.dimension - 1
      min_idx:      Math.max codec.cfg._min_integer, -2000
      max_idx:      Math.min codec.cfg._max_integer, +2000
    # debug 'Ωhllt__98', rnd_vdx_cfg
    # debug 'Ωhllt__99', codec.cfg._sortkey_width
    get_random_vdx              = test.internals.get_random_vdx_producer rnd_vdx_cfg
    probe_sub_count             = 3
    shuffle                     = GUY.rnd.get_shuffle 57, 88
    encode                      = ( vdx ) -> ( codec.encode vdx ).padEnd codec.cfg._sortkey_width, codec.cfg._cipher
    probes_sortkey              = []
    # debug 'Ωhllt_100', rnd_vdx_cfg; process.exit 111
    #.......................................................................................................
    walk_first_idxs             = ->
      yield idx for idx in [ codec.cfg._min_integer      .. codec.cfg._min_integer + 10 ]
      yield idx for idx in [ rnd_vdx_cfg.min_idx         .. rnd_vdx_cfg.max_idx         ]
      yield idx for idx in [ codec.cfg._max_integer - 10 .. codec.cfg._max_integer      ]
      return null
    #.......................................................................................................
    for first_idx from walk_first_idxs()
    # for first_idx in [ -100 .. +100 ]
      # debug 'Ωhllt_101', { first_idx, }
      for _ in [ 1 .. probe_sub_count ]
        vdx = [ first_idx, get_random_vdx()..., ]
        sk  = encode vdx
        probes_sortkey.push { vdx, sk, }
    #.......................................................................................................
    probes_sortkey    = shuffle probes_sortkey
    probes_vdx        = probes_sortkey[ .. ]
    #.......................................................................................................
    sort_by_vdx       = ( a, b ) ->
      a = a.vdx
      b = b.vdx
      for idx in [ 0 ... ( Math.max a.length, b.length ) ]
        da = a[ idx ] ? 0
        db = b[ idx ] ? 0
        continue if da is db
        return -1 if da < db
        return +1
      return null
    #.......................................................................................................
    sort_by_sortkey   = ( a, b ) ->
      a = a.sk
      b = b.sk
      return  0 if a is b
      return -1 if a < b
      return +1
    #.......................................................................................................
    probes_vdx.sort     sort_by_vdx
    probes_sortkey.sort sort_by_sortkey
    for probe_vdx, idx in probes_vdx
      probe_sortkey = probes_sortkey[ idx ]
      # whisper 'Ωhllt_102', ( gold probe_sortkey.sk ), ( red probe_vdx.vdx ), ( lime probe_sortkey.vdx )
      @eq ( Ωhllt_103 = -> probe_sortkey.vdx ), probe_vdx.vdx
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
      [ [ -999,           ], 'Í¿;ãããããããããããã',  ]
      [ [  -99,           ], 'Î?ããããããããããããã',  ]
      [ [  -90,           ], 'ÎHããããããããããããã',  ]
      [ [  -80,           ], 'ÎRããããããããããããã',  ]
      [ [  -21,           ], 'Î±ããããããããããããã',  ]
      [ [  -20,           ], 'Ïãããããããããããããã',  ]
      [ [  -11,           ], 'Øãããããããããããããã',  ]
      [ [  -10,           ], 'Ùãããããããããããããã',  ]
      [ [   -9,           ], 'Úãããããããããããããã',  ]
      [ [   -8,           ], 'Ûãããããããããããããã',  ]
      [ [   -7,           ], 'Üãããããããããããããã',  ]
      [ [   -6,           ], 'Ýãããããããããããããã',  ]
      [ [   -5,           ], 'Þãããããããããããããã',  ]
      [ [   -4,           ], 'ßãããããããããããããã',  ]
      [ [   -3,           ], 'àãããããããããããããã',  ]
      [ [   -2,           ], 'áãããããããããããããã',  ]
      [ [   -1,           ], 'âãããããããããããããã',  ]
      [ [   +0,  -20,     ], 'ãÏããããããããããããã',  ]
      [ [   +0,           ], 'ããããããããããããããã',  ]
      [ [   +0,  +20,     ], 'ã÷ããããããããããããã',  ]
      [ [   +9,           ], 'ìãããããããããããããã',  ]
      [ [  +10,   -3,     ], 'íàããããããããããããã',  ]
      [ [  +10,   -2,     ], 'íáããããããããããããã',  ]
      [ [  +10,   -1,     ], 'íâããããããããããããã',  ]
      [ [  +10,           ], 'íãããããããããããããã',  ]
      [ [  +10,   +0,     ], 'íãããããããããããããã',  ]
      [ [  +10,   +1,     ], 'íäããããããããããããã',  ]
      [ [  +10,  +10, -1, ], 'ííâãããããããããããã',  ]
      [ [  +10,  +10,     ], 'ííããããããããããããã',  ]
      [ [  +10,  +20,     ], 'í÷ããããããããããããã',  ]
      [ [  +20,           ], '÷ãããããããããããããã',  ]
      [ [  +20,  +10,     ], '÷íããããããããããããã',  ]
      [ [  +90,           ], 'ø~ããããããããããããã',  ]
      [ [ +900,           ], 'ù*&ãããããããããããã',  ]
      ]
    unpadded_lines    = []
    padded_lines      = []
    expected_indexes  = ( idx for idx in [ 0 ... probes.length ] )
    shuffle           = GUY.rnd.get_shuffle 57, 88
    codec             = hollerith_128_16383
    # debug 'Ωhllt_104', codec.cfg.digits_per_idx
    # debug 'Ωhllt_105', codec.cfg.zero_pad_length
    @eq ( Ωhllt_106 = -> codec.cfg._base                                    ), 128
    @eq ( Ωhllt_107 = -> codec.cfg._max_integer                             ), +16383
    @eq ( Ωhllt_108 = -> codec.cfg._min_integer                             ), -16383
    @eq ( Ωhllt_109 = -> codec.cfg._pmag_list[ 2 ]                           ), 'ù'
    @eq ( Ωhllt_110 = -> codec.cfg._nmag_list[ 2 ]                           ), 'Í'
    @eq ( Ωhllt_111 = -> codec.encode codec.cfg._max_integer                ), 'ùÆÆ'
    @eq ( Ωhllt_112 = -> codec.encode codec.cfg._min_integer                ), 'Í!!'
    @eq ( Ωhllt_113 = -> codec.decode 'Í!!'                                 ), [ -16383 ]
    @throws ( Ωhllt_114 = -> codec.decode 'Ç!!!!!!!!'                       ), /not a valid sortkey/
    #.......................................................................................................
    for [ vdx, sk_matcher, ], idx in probes
      usk   = codec.encode vdx
      @eq ( Ωhllt_115 = -> usk ), sk_matcher
      # echo rpr usk
      psk   = usk.padEnd 10, codec.cfg._cipher
      usk   = usk.padEnd 10, ' '
      unpadded_lines.push "#{usk} #{rpr vdx} #{idx}"
      padded_lines.push "#{psk} #{rpr vdx} #{idx}"
    #.......................................................................................................
    @eq ( Ωhllt_116 = -> codec.cfg.digits_per_idx                            ), 2
    @eq ( Ωhllt_117 = -> codec.cfg._max_zpun                                  ), 20
    @eq ( Ωhllt_118 = -> codec.cfg._naught                                    ), '!'
    @eq ( Ωhllt_119 = -> codec.cfg._nova                                      ), 'Æ'
    @eq ( Ωhllt_120 = -> codec.cfg._cipher                                    ), 'ã'
    @eq ( Ωhllt_121 = -> codec.cfg._nmag                                      ), ' ÎÍ'
    @eq ( Ωhllt_122 = -> codec.cfg._pmag                                      ), ' øù'
    @eq ( Ωhllt_123 = -> codec.cfg._pmag_list[ codec.cfg.digits_per_idx ]    ), 'ù'
    @eq ( Ωhllt_124 = -> codec.encode -16383                                  ), 'Í!!'
    @eq ( Ωhllt_125 = -> codec.encode -16382                                  ), 'Í!#'
    @eq ( Ωhllt_126 = -> codec.encode -129                                    ), 'ÍÅÅ'
    @eq ( Ωhllt_127 = -> codec.encode -128                                    ), 'ÍÅÆ'
    @eq ( Ωhllt_128 = -> codec.encode -127                                    ), 'Î!'
    @eq ( Ωhllt_129 = -> codec.encode -80                                     ), 'ÎR'
    @eq ( Ωhllt_130 = -> codec.encode -21                                     ), 'Î±'
    @eq ( Ωhllt_131 = -> codec.encode -21                                     ), 'Î±'
    @eq ( Ωhllt_132 = -> codec.encode -20                                     ), 'Ï'
    @eq ( Ωhllt_133 = -> codec.encode -1                                      ), 'â'
    @eq ( Ωhllt_134 = -> codec.encode +0                                      ), 'ã'
    @eq ( Ωhllt_135 = -> codec.encode +1                                      ), 'ä'
    @eq ( Ωhllt_136 = -> codec.encode +20                                     ), '÷'
    @eq ( Ωhllt_137 = -> codec.encode +21                                     ), 'ø8'
    @eq ( Ωhllt_138 = -> codec.encode +127                                    ), 'øÆ'
    @eq ( Ωhllt_139 = -> codec.encode +128                                    ), 'ù#!'
    @eq ( Ωhllt_140 = -> codec.encode +129                                    ), 'ù##'
    @eq ( Ωhllt_141 = -> codec.encode +16382                                  ), 'ùÆÅ'
    @eq ( Ωhllt_142 = -> codec.encode +16383                                  ), 'ùÆÆ'
    #.......................................................................................................
    @eq ( Ωhllt_143 = -> codec.decode 'Í!!'                                   ), [ -16383 ]
    @eq ( Ωhllt_144 = -> codec.decode 'Í!#'                                   ), [ -16382 ]
    @eq ( Ωhllt_145 = -> codec.decode 'ÍÅÅ'                                   ), [ -129 ]
    @eq ( Ωhllt_146 = -> codec.decode 'ÍÅÆ'                                   ), [ -128 ]
    @eq ( Ωhllt_147 = -> codec.decode 'Î!'                                    ), [ -127 ]
    @eq ( Ωhllt_148 = -> codec.decode 'Î±'                                    ), [ -21 ]
    @eq ( Ωhllt_149 = -> codec.decode 'Ï'                                     ), [ -20 ]
    @eq ( Ωhllt_150 = -> codec.decode 'â'                                     ), [ -1 ]
    @eq ( Ωhllt_151 = -> codec.decode 'ã'                                     ), [ 0 ]
    @eq ( Ωhllt_152 = -> codec.decode 'ä'                                     ), [ 1 ]
    @eq ( Ωhllt_153 = -> codec.decode '÷'                                     ), [ 20 ]
    @eq ( Ωhllt_154 = -> codec.decode 'ø8'                                    ), [ 21 ]
    @eq ( Ωhllt_155 = -> codec.decode 'øÆ'                                    ), [ 127 ]
    @eq ( Ωhllt_156 = -> codec.decode 'ù#!'                                   ), [ 128 ]
    @eq ( Ωhllt_157 = -> codec.decode 'ù##'                                   ), [ 129 ]
    @eq ( Ωhllt_158 = -> codec.decode 'ùÆÅ'                                   ), [ 16382 ]
    @eq ( Ωhllt_159 = -> codec.decode 'ùÆÆ'                                   ), [ 16383 ]
    #.......................................................................................................
    for _ in [ 1 .. 10 ]
      unpadded_lines = shuffle unpadded_lines
      unpadded_lines.sort()
      real_indexes = []
      for uline in unpadded_lines
        # help 'Ωhllt_160', uline
        real_indexes.push Number uline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωhllt_161 = -> equals expected_indexes, real_indexes ), true
    #.......................................................................................................
    for _ in [ 1 .. 10 ]
      padded_lines = shuffle padded_lines
      padded_lines.sort()
      real_indexes = []
      for pline, idx in padded_lines
        # help 'Ωhllt_162', rpr pline if _ is 1
        real_indexes.push Number pline.replace /^.*?\s([0-9]+)$/, '$1'
      @eq ( Ωhllt_163 = -> equals expected_indexes, real_indexes ), true
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
 #      'Ç!ÆÆÆÆÆ¿;ãããããããããããããããããããããããããããããããããããã'
      [ 'Ç!ÆÆÆÆÆ¿;ãããããããããããããããããããããããããããããããããããã', [ -999,         ], 'nnum:Í,¿;[-999]|padding:ããããããã',                 ]
      [ 'Ç!ÆÆÆÆÆÆ?ãããããããããããããããããããããããããããããããããããã', [ -99,          ], 'nnum:Î,?[-99]|padding:ãããããããã',                  ]
      [ 'Ç!ÆÆÆÆÆÆHãããããããããããããããããããããããããããããããããããã', [ -90,          ], 'nnum:Î,H[-90]|padding:ãããããããã',                  ]
      [ 'Øãããããããããããããããããããããããããããããããããããããããããããã', [ -11,          ], 'nun:Ø[-11]|padding:ããããããããã',                    ]
      [ 'Ùãããããããããããããããããããããããããããããããããããããããããããã', [ -10,          ], 'nun:Ù[-10]|padding:ããããããããã',                    ]
      [ 'Úãããããããããããããããããããããããããããããããããããããããããããã', [ -9,           ], 'nun:Ú[-9]|padding:ããããããããã',                     ]
      [ 'Ûãããããããããããããããããããããããããããããããããããããããããããã', [ -8,           ], 'nun:Û[-8]|padding:ããããããããã',                     ]
      [ 'Üãããããããããããããããããããããããããããããããããããããããããããã', [ -7,           ], 'nun:Ü[-7]|padding:ããããããããã',                     ]
      [ 'Ýãããããããããããããããããããããããããããããããããããããããããããã', [ -6,           ], 'nun:Ý[-6]|padding:ããããããããã',                     ]
      [ 'Þãããããããããããããããããããããããããããããããããããããããããããã', [ -5,           ], 'nun:Þ[-5]|padding:ããããããããã',                     ]
      [ 'ßãããããããããããããããããããããããããããããããããããããããããããã', [ -4,           ], 'nun:ß[-4]|padding:ããããããããã',                     ]
      [ 'àãããããããããããããããããããããããããããããããããããããããããããã', [ -3,           ], 'nun:à[-3]|padding:ããããããããã',                     ]
      [ 'áãããããããããããããããããããããããããããããããããããããããããããã', [ -2,           ], 'nun:á[-2]|padding:ããããããããã',                     ]
      [ 'âãããããããããããããããããããããããããããããããããããããããããããã', [ -1,           ], 'nun:â[-1]|padding:ããããããããã',                     ]
      [ 'ãÏããããããããããããããããããããããããããããããããããããããããããã', [ 0, -20,       ], 'zero:ã[0]|nun:Ï[-20]|padding:ãããããããã',           ]
      [ 'ããããããããããããããããããããããããããããããããããããããããããããã', [ 0,            ], 'padding:ãããããããããã[0]',                           ]
      [ 'ã÷ããããããããããããããããããããããããããããããããããããããããããã', [ 0, 20,        ], 'zero:ã[0]|pun:÷[20]|padding:ãããããããã',            ]
      [ 'ìãããããããããããããããããããããããããããããããããããããããããããã', [ 9,            ], 'pun:ì[9]|padding:ããããããããã',                      ]
      [ 'íàããããããããããããããããããããããããããããããããããããããããããã', [ 10, -3,       ], 'pun:í[10]|nun:à[-3]|padding:ãããããããã',            ]
      [ 'íáããããããããããããããããããããããããããããããããããããããããããã', [ 10, -2,       ], 'pun:í[10]|nun:á[-2]|padding:ãããããããã',            ]
      [ 'íâããããããããããããããããããããããããããããããããããããããããããã', [ 10, -1,       ], 'pun:í[10]|nun:â[-1]|padding:ãããããããã',            ]
      [ 'íãããããããããããããããããããããããããããããããããããããããããããã', [ 10,           ], 'pun:í[10]|padding:ããããããããã',                     ]
      [ 'íäããããããããããããããããããããããããããããããããããããããããããã', [ 10, 1,        ], 'pun:í[10]|pun:ä[1]|padding:ãããããããã',             ]
      [ 'ííâãããããããããããããããããããããããããããããããããããããããããã', [ 10, 10, -1,   ], 'pun:í[10]|pun:í[10]|nun:â[-1]|padding:ããããããã',   ]
      [ 'ííããããããããããããããããããããããããããããããããããããããããããã', [ 10, 10,       ], 'pun:í[10]|pun:í[10]|padding:ãããããããã',            ]
      [ 'í÷ããããããããããããããããããããããããããããããããããããããããããã', [ 10, 20,       ], 'pun:í[10]|pun:÷[20]|padding:ãããããããã',            ]
      [ '÷ãããããããããããããããããããããããããããããããããããããããããããã', [ 20,           ], 'pun:÷[20]|padding:ããããããããã',                     ]
      [ '÷íããããããããããããããããããããããããããããããããããããããããããã', [ 20, 10,       ], 'pun:÷[20]|pun:í[10]|padding:ãããããããã',            ]
      [ 'ø~ããããããããããããããããããããããããããããããããããããããããããã', [ 90,           ], 'pnum:ø,~[90]|padding:ãããããããã',                   ]
      [ 'ù*&ãããããããããããããããããããããããããããããããããããããããããã', [ 900,          ], 'pnum:ù,*&[900]|padding:ããããããã',                  ]
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
      # info 'Ωhllt_164', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
    #   @eq ( Ωhllt_165 = ->  unit_result                     ),  unit_matcher
      @eq ( Ωhllt_166 = -> index_result                     ), index_matcher
      @eq ( Ωhllt_167 = -> sortkey ), codec.encode index_matcher
      # debug 'Ωhllt_168', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg._zpuns[ 0 ]
      @eq ( Ωhllt_169 = -> codec.decode sortkey  ), index_matcher
      # echo [ sortkey, index_result, unit_result, ]
    #.......................................................................................................
    # @eq     ( Ωhllt_170 = -> codec.parse '5'          ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    # @eq     ( Ωhllt_171 = -> codec.parse 'äöü'        ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    # @eq     ( Ωhllt_172 = -> codec.parse 'Y900äöü'    ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    # @throws ( Ωhllt_173 = -> codec.decode '5'         ), /not a valid sortkey: unable to parse '5'/
    # @throws ( Ωhllt_174 = -> codec.decode 'äöü'       ), /not a valid sortkey: unable to parse 'äöü'/
    # @throws ( Ωhllt_175 = -> codec.decode 'äöü'       ), /not a valid sortkey: unable to parse 'ü' in 'Y900äöü'/
    # @throws ( Ωhllt_176 = -> codec.decode 'Y900äöü'   ), /not a valid sortkey: unable to parse 'Y900' in 'Y900äöü'/
    #.......................................................................................................
    # debug 'Ωhllt_177', rpr codec.encode -90 #    [ 'Í¿;ããããããã', [ -999,         ], 'nnum:Í,¿;[-999]|padding:ããããããã',                 ]
    # debug 'Ωhllt_178', rpr codec.decode 'Ç!ÆÆÆÆÆÆH' #    [ 'Í¿;ããããããã', [ -999,         ], 'nnum:Í,¿;[-999]|padding:ããããããã',                 ]
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
      [ 'A000NNNNNNNN', [ -999        ], 'nnum:A,000[-999]|padding:NNNNNNNN',                     ]
      [ 'B00NNNNNNNNN', [ -99         ], 'nnum:B,00[-99]|padding:NNNNNNNNN',                      ]
      [ 'B09NNNNNNNNN', [ -90         ], 'nnum:B,09[-90]|padding:NNNNNNNNN',                      ]
      [ 'B88NNNNNNNNN', [ -11         ], 'nnum:B,88[-11]|padding:NNNNNNNNN',                      ]
      [ 'B89NNNNNNNNN', [ -10         ], 'nnum:B,89[-10]|padding:NNNNNNNNN',                      ]
      [ 'ENNNNNNNNNNN', [ -9          ], 'nun:E[-9]|padding:NNNNNNNNNNN',                         ]
      [ 'FNNNNNNNNNNN', [ -8          ], 'nun:F[-8]|padding:NNNNNNNNNNN',                         ]
      [ 'GNNNNNNNNNNN', [ -7          ], 'nun:G[-7]|padding:NNNNNNNNNNN',                         ]
      [ 'HNNNNNNNNNNN', [ -6          ], 'nun:H[-6]|padding:NNNNNNNNNNN',                         ]
      [ 'INNNNNNNNNNN', [ -5          ], 'nun:I[-5]|padding:NNNNNNNNNNN',                         ]
      [ 'JNNNNNNNNNNN', [ -4          ], 'nun:J[-4]|padding:NNNNNNNNNNN',                         ]
      [ 'KNNNNNNNNNNN', [ -3          ], 'nun:K[-3]|padding:NNNNNNNNNNN',                         ]
      [ 'LNNNNNNNNNNN', [ -2          ], 'nun:L[-2]|padding:NNNNNNNNNNN',                         ]
      [ 'MNNNNNNNNNNN', [ -1          ], 'nun:M[-1]|padding:NNNNNNNNNNN',                         ]
      [ 'NB79NNNNNNNN', [ 0, -20      ], 'zero:N[0]|nnum:B,79[-20]|padding:NNNNNNNN',             ]
      [ 'NNNNNNNNNNNN', [ 0           ], 'padding:NNNNNNNNNNNN[0]',                               ]
      [ 'NY20NNNNNNNN', [ 0, 20       ], 'zero:N[0]|pnum:Y,20[20]|padding:NNNNNNNN',              ]
      [ 'WNNNNNNNNNNN', [ 9           ], 'pun:W[9]|padding:NNNNNNNNNNN',                          ]
      [ 'Y10KNNNNNNNN', [ 10, -3      ], 'pnum:Y,10[10]|nun:K[-3]|padding:NNNNNNNN',              ]
      [ 'Y10LNNNNNNNN', [ 10, -2      ], 'pnum:Y,10[10]|nun:L[-2]|padding:NNNNNNNN',              ]
      [ 'Y10MNNNNNNNN', [ 10, -1      ], 'pnum:Y,10[10]|nun:M[-1]|padding:NNNNNNNN',              ]
      [ 'Y10NNNNNNNNN', [ 10          ], 'pnum:Y,10[10]|padding:NNNNNNNNN',                       ]
      [ 'Y10ONNNNNNNN', [ 10, 1       ], 'pnum:Y,10[10]|pun:O[1]|padding:NNNNNNNN',               ]
      [ 'Y10Y10MNNNNN', [ 10, 10, -1  ], 'pnum:Y,10[10]|pnum:Y,10[10]|nun:M[-1]|padding:NNNNN',   ]
      [ 'Y10Y10NNNNNN', [ 10, 10      ], 'pnum:Y,10[10]|pnum:Y,10[10]|padding:NNNNNN',            ]
      [ 'Y10Y20NNNNNN', [ 10, 20      ], 'pnum:Y,10[10]|pnum:Y,20[20]|padding:NNNNNN',            ]
      [ 'Y20NNNNNNNNN', [ 20          ], 'pnum:Y,20[20]|padding:NNNNNNNNN',                       ]
      [ 'Y20Y10NNNNNN', [ 20, 10      ], 'pnum:Y,20[20]|pnum:Y,10[10]|padding:NNNNNN',            ]
      [ 'Y90NNNNNNNNN', [ 90          ], 'pnum:Y,90[90]|padding:NNNNNNNNN',                       ]
      [ 'Z900NNNNNNNN', [ 900         ], 'pnum:Z,900[900]|padding:NNNNNNNN',                      ]
      [ 'NNNNNNNNNNNN', [ 0           ], 'padding:NNNNNNNNNNNN[0]',                               ]
      [ 'NNNNNNNNNNNN', [ 0           ], 'padding:NNNNNNNNNNNN[0]',                               ]
      [ 'NNNNNNNNNNNN', [ 0           ], 'padding:NNNNNNNNNNNN[0]',                               ]
      [ 'Y10NNNNNNNNN', [ 10          ], 'pnum:Y,10[10]|padding:NNNNNNNNN',                       ]
      [ 'KNNNNNNNNNNN', [ -3          ], 'nun:K[-3]|padding:NNNNNNNNNNN',                         ]
      # 'KNNNNNNNNNNN'
      ]
    #.......................................................................................................
    codec           = hollerith_10mvp2
    sortkey_padder  = codec.cfg._zpuns_list[ 0 ]
    #.......................................................................................................
    for [ sortkey, index_matcher, unit_matcher, ] in probes_and_matchers
      unit_result     = []
      index_result    = []
      for unit in codec.parse sortkey
        unit_result.push  helpers.rpr_unit unit
        index_result.push unit.index if unit.index?
      unit_result   = unit_result.join '|'
      # info 'Ωhllt_179', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
      @eq ( Ωhllt_180 = -> unit_result                      ), unit_matcher
      @eq ( Ωhllt_181 = -> index_result                     ), index_matcher
      @eq ( Ωhllt_182 = -> codec.decode sortkey             ), index_matcher
      @eq ( Ωhllt_183 = -> sortkey                          ), codec.encode index_matcher
      # echo [ sortkey, index_result, unit_result, ]
    #.......................................................................................................
    @eq     ( Ωhllt_184 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
    @eq     ( Ωhllt_185 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    @eq     ( Ωhllt_186 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
    @throws ( Ωhllt_187 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
    @throws ( Ωhllt_188 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
    @throws ( Ωhllt_189 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
    #.......................................................................................................
    return null

  # #---------------------------------------------------------------------------------------------------------
  # h128b_decode: ->
  #   { Hollerith,
  #     hollerith_128,
  #     hollerith_10mvp,
  #     internals               } = require '../../../apps/hollerith'
  #   { type_of,                } = SFMODULES.unstable.require_type_of()
  #   { isDeepStrictEqual: equals, } = require 'node:util'
  #   #.......................................................................................................
  #   # codec = hollerith_128
  #   codec = hollerith_10mvp
  #   debug 'Ωhllt_190', rpr codec.encode -1
  #   debug 'Ωhllt_191', rpr codec.encode -2
  #   n =   -100; urge 'Ωhllt_192', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
  #   n =    -21; urge 'Ωhllt_193', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
  #   n =    -20; urge 'Ωhllt_194', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
  #   n =    -19; urge 'Ωhllt_195', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
  #   n =     -1; urge 'Ωhllt_196', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
  #   n =      0; urge 'Ωhllt_197', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
  #   n =      1; urge 'Ωhllt_198', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
  #   n =      2; urge 'Ωhllt_199', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
  #   n =      3; urge 'Ωhllt_200', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
  #   n =     10; urge 'Ωhllt_201', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
  #   n =    126; urge 'Ωhllt_202', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
  #   n =    127; urge 'Ωhllt_203', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
  #   n =    128; urge 'Ωhllt_204', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
  #   n =    129; urge 'Ωhllt_205', f"#{ rpr [ n, ] }:>10c; #{rpr sk = codec.encode n}:<5c; #{ rpr codec.decode sk}:>10c;"
  #   # for [ sortkey, index_matcher, unit_matcher, ] in probes_and_matchers
  #   #   unit_result     = []
  #   #   index_result    = []
  #   #   for unit in codec.parse sortkey
  #   #     unit_result.push  helpers.rpr_unit unit
  #   #     index_result.push unit.index if unit.index?
  #   #   unit_result   = unit_result.join '|'
  #   #   info 'Ωhllt_206', f"#{( rpr unit_result ) + ','}:<60c; #{rpr index_result}"
  #   # #   @eq ( Ωhllt_207 = ->  unit_result                     ),  unit_matcher
  #   #   @eq ( Ωhllt_208 = -> index_result                     ), index_matcher
  #   #   @eq ( Ωhllt_209 = -> sortkey ), ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg._zpuns[ 0 ]
  #   #   debug 'Ωhllt_210', rpr ( codec.encode index_matcher ).padEnd sortkey.length, codec.cfg._zpuns[ 0 ]
  #   #   @eq ( Ωhllt_211 = -> codec.decode sortkey  ), index_matcher
  #   #   # echo [ sortkey, index_result, unit_result, ]
  #   # #.......................................................................................................
  #   # @eq     ( Ωhllt_212 = -> codec.parse '5'         ), [ { name: 'other', letters: '5', mantissa: null, index: null } ]
  #   # @eq     ( Ωhllt_213 = -> codec.parse 'äöü'       ), [ { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
  #   # @eq     ( Ωhllt_214 = -> codec.parse 'Y900äöü'   ), [ { name: 'pnum', letters: 'Y', mantissa: '900', index: 900 }, { name: 'other', letters: 'äöü', mantissa: null, index: null } ]
  #   # @throws ( Ωhllt_215 = -> codec.decode '5'        ), /not a valid sortkey: unable to parse '5'/
  #   # @throws ( Ωhllt_216 = -> codec.decode 'äöü'      ), /not a valid sortkey: unable to parse 'äöü'/
  #   # @throws ( Ωhllt_217 = -> codec.decode 'Y900äöü'  ), /not a valid sortkey: unable to parse 'äöü' in 'Y900äöü'/
  #   #.......................................................................................................
  #   return null


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
      @eq ( Ωhllt_218 = -> T[CFG].blank                                     ), '\x20'
      @eq ( Ωhllt_219 = -> T[CFG].blank_splitter                            ), /(?:\x20)+/gv
      @eq ( Ωhllt_220 = -> T[CFG].blank_splitter.unicodeSets                ), true
      @eq ( Ωhllt_221 = -> T[CFG].blank_splitter.global                     ), true
      @eq ( Ωhllt_222 = -> 'a   g  z  '.replace T[CFG].blank_splitter, 'ü'  ), 'aügüzü'
      return null
    #.......................................................................................................
    do =>
      T = new Hollerith_typespace { blank: '#', }
      @eq ( Ωhllt_223 = -> T[CFG].blank                                     ), '#'
      @eq ( Ωhllt_224 = -> T[CFG].blank_splitter                            ), /(?:\x23)+/gv
      @eq ( Ωhllt_225 = -> T[CFG].blank_splitter.unicodeSets                ), true
      @eq ( Ωhllt_226 = -> T[CFG].blank_splitter.global                     ), true
      @eq ( Ωhllt_227 = -> 'a###g##z##'.replace T[CFG].blank_splitter, 'ü'  ), 'aügüzü'
      @eq ( Ωhllt_228 = -> T.magnifiers.isa 'ABC XYZ'                       ), false
      @eq ( Ωhllt_229 = -> T.magnifiers.isa 'ABC#XYZ'                       ), true
      @eq ( Ωhllt_230 = -> T.blank.isa ' '                                  ), false
      @eq ( Ωhllt_231 = -> T.blank.isa '#'                                  ), true
      @eq ( Ωhllt_232 = -> T.blank.isa T[CFG].blank                         ), true
      return null
    #.......................................................................................................
    T = new Hollerith_typespace()
    @eq ( Ωhllt_233 = -> T.nonempty_text.isa 4            ), false
    @eq ( Ωhllt_234 = -> T.nonempty_text.isa false        ), false
    @eq ( Ωhllt_235 = -> T.nonempty_text.isa ''           ), false
    @eq ( Ωhllt_236 = -> T.nonempty_text.isa 'yes'        ), true
    #.......................................................................................................
    @eq ( Ωhllt_237 = -> T.incremental_text.isa 'yes'     ), false
    @eq ( Ωhllt_238 = -> T.decremental_text.isa 'yes'     ), false
    @eq ( Ωhllt_239 = -> T.incremental_text.data          ), { chrs: [ 'y', 'e', 's' ], fail: { x: 'yes', idx: 1, prv_chr: 'y', chr: 'e' } }
    @eq ( Ωhllt_240 = -> T.incremental_text.isa 'abcdefz' ), true
    @eq ( Ωhllt_241 = -> T.decremental_text.isa 'abcdefz' ), false
    @eq ( Ωhllt_242 = -> T.incremental_text.data          ), { chrs: [ 'a', 'b', 'c', 'd', 'e', 'f', 'z', ], }
    @eq ( Ωhllt_243 = -> T.decremental_text.data          ), { chrs: [ 'a', 'b', 'c', 'd', 'e', 'f', 'z' ], fail: { x: 'abcdefz', idx: 1, prv_chr: 'a', chr: 'b' } }
    @eq ( Ωhllt_244 = -> T.incremental_text.isa 'abc0'    ), false
    @eq ( Ωhllt_245 = -> T.incremental_text.data          ), { chrs: [ 'a', 'b', 'c', '0', ], fail: { x: 'abc0', idx: 3, prv_chr: 'c', chr: '0' } }
    @eq ( Ωhllt_246 = -> T.decremental_text.isa 'cba'     ), true
    @eq ( Ωhllt_247 = -> T.decremental_text.data          ), { chrs: [ 'c', 'b', 'a', ], }
    #.......................................................................................................
    @eq ( Ωhllt_248 = -> T.magnifiers.isa ''                                  ), false
    @eq ( Ωhllt_249 = -> T.magnifiers.data                                    ), { message: "expected a magnifier, got an empty text", }
    @eq ( Ωhllt_250 = -> T.magnifiers.isa 'ABC XYZ'                           ), true
    @eq ( Ωhllt_251 = -> pick T.magnifiers.data, \
                       [ 'nmag_chrs_reversed', '_pmag_list', '_nmag', '_pmag', ] ), { nmag_chrs_reversed: [ 'A', 'B', 'C' ], _pmag_list: [ ' ', 'X', 'Y', 'Z' ], _nmag: ' CBA', _pmag: ' XYZ' }
    @eq ( Ωhllt_252 = -> Object.isFrozen T.magnifiers.data.nmag_chrs_reversed ), true
    @eq ( Ωhllt_253 = -> Object.isFrozen T.magnifiers.data._pmag_list          ), true
    @eq ( Ωhllt_254 = -> T.magnifiers.isa 'ABC\nXYZ'                          ), false
    @eq ( Ωhllt_255 = -> T.magnifiers.isa 'ABC\tXYZ'                          ), false
    @eq ( Ωhllt_256 = -> T.magnifiers.isa 'ABC             XYZ'               ), true
    @eq ( Ωhllt_257 = -> T.magnifiers.isa 'ABC DX YZ'                         ), false
    @eq ( Ωhllt_258 = -> T.magnifiers.isa 'ABD CXYZ'                          ), false
    #.......................................................................................................
    @eq ( Ωhllt_259 = -> T.uniliterals.isa null                               ), false
    @eq ( Ωhllt_260 = -> T.uniliterals.isa ''                                 ), false
    @eq ( Ωhllt_261 = -> T.uniliterals.isa 'VBA'                              ), false
    @eq ( Ωhllt_262 = -> T.uniliterals.isa 'EFGHIJKLM NOPQRSTUVW'             ), false
    @eq ( Ωhllt_263 = -> T.uniliterals.isa 'EFGHIJKLM N OPQRSTUVW'            ), true
    @eq ( Ωhllt_264 = -> T.uniliterals.data                                   ), { _nuns: 'EFGHIJKLM', _zpuns: 'NOPQRSTUVW', _nuns_list: [ 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' ], _zpuns_list: [ 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W' ] }
    @eq ( Ωhllt_265 = -> T.uniliterals.isa 'N'                                ), true
    @eq ( Ωhllt_266 = -> T.uniliterals.data                                   ), { _nuns: '', _zpuns: 'N', _nuns_list: [], _zpuns_list: [ 'N' ] }
    #.......................................................................................................
    @throws ( Ωhllt_267 = -> T.digitset.validate null                         ), /not a valid digitset/
    @throws ( Ωhllt_268 = -> T.digitset.validate ''                           ), /not a valid digitset/
    @throws ( Ωhllt_269 = -> T.digitset.validate 'a'                          ), /not a valid digitset/
    @eq     ( Ωhllt_270 = -> T.digitset.validate 'ab'                         ), 'ab'
    #.......................................................................................................
    @throws ( Ωhllt_271 = ->   new Hollerith_typespace { blank: null }                        ), /not a valid blank/
    @throws ( Ωhllt_272 = ->   new Hollerith_typespace { blank: ''   }                        ), /not a valid blank/
    @throws ( Ωhllt_273 = ->   new Hollerith_typespace { blank: '--' }                        ), /not a valid blank/
    @throws ( Ωhllt_274 = -> ( new Hollerith_typespace { blank: null } ).blank.validate null  ), /not a valid blank/
    @throws ( Ωhllt_275 = -> ( new Hollerith_typespace { blank: ''   } ).blank.validate ''    ), /not a valid blank/
    @throws ( Ωhllt_276 = -> ( new Hollerith_typespace { blank: '--' } ).blank.validate '--'  ), /not a valid blank/
    @eq     ( Ωhllt_277 = -> ( new Hollerith_typespace { blank: '-'  } ).blank.validate '-'   ), '-'
    @eq     ( Ωhllt_278 = -> ( new Hollerith_typespace { blank: ' '  } ).blank.validate ' '   ), ' '
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
    @eq ( Ωhllt_279 = -> ( Number.MAX_SAFE_INTEGER - 1 ) == -( Number.MIN_SAFE_INTEGER + 1 ) ), true
    #.......................................................................................................
    do =>
      # T = new Hollerith_typespace()
      @throws ( Ωhllt_280 = -> Hollerith.validate_and_compile_cfg {}                  ), /not a valid digitset/
      @throws ( Ωhllt_281 = -> Hollerith.validate_and_compile_cfg { digitset: ''    } ), /not a valid digitset/
      @throws ( Ωhllt_282 = -> Hollerith.validate_and_compile_cfg { digitset: 'a'   } ), /not a valid digitset/
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
      digitset:     '0123456789'              # digits; length of `digitset` is the `_base`
      magnifiers:   'ABC XYZ'                 #
      uniliterals:  'FGHIJKLM N OPQRSTUV'     # negative uniliterals, blank, zero uniliteral, blank, positive uniliterals
      dimension:    3                         # number of indices supported
    #.......................................................................................................
    do =>
      { cfg, } = Hollerith.validate_and_compile_cfg cfg_10
      @eq ( Ωhllt_283 = -> cfg.blank                                              ), ' '
      @eq ( Ωhllt_284 = -> cfg.digitset                                           ), '0123456789'
      @eq ( Ωhllt_285 = -> cfg._digits_list                                       ), Array.from '0123456789'
      @eq ( Ωhllt_286 = -> cfg._nova                                              ), ( Array.from cfg.digitset ).at -1
      @eq ( Ωhllt_287 = -> cfg._leading_novas_re                                  ), /// ^ (?: 9 )* (?= .+ $ ) ///gv
      @eq ( Ωhllt_288 = -> is_frozen cfg._digits_list                             ), true
      @eq ( Ωhllt_289 = -> cfg._base                                              ), 10
      @eq ( Ωhllt_290 = -> cfg.magnifiers                                         ), 'ABC XYZ'
      @eq ( Ωhllt_291 = -> cfg._nmag                                               ), ' CBA'
      @eq ( Ωhllt_292 = -> cfg._pmag                                               ), ' XYZ'
      @eq ( Ωhllt_293 = -> cfg._nmag_list                                         ), Array.from ' CBA'
      @eq ( Ωhllt_294 = -> cfg._pmag_list                                         ), Array.from ' XYZ'
      @eq ( Ωhllt_295 = -> cfg.uniliterals                                        ), 'FGHIJKLM N OPQRSTUV'
      @eq ( Ωhllt_296 = -> cfg._nuns                                              ), 'FGHIJKLM'
      @eq ( Ωhllt_297 = -> cfg._zpuns                                             ), 'NOPQRSTUV'
      @eq ( Ωhllt_298 = -> cfg._max_zpun                                           ), 8
      @eq ( Ωhllt_299 = -> cfg._min_nun                                           ), -8
      @eq ( Ωhllt_300 = -> cfg._nuns_list                                         ), [ 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' ],
      @eq ( Ωhllt_301 = -> cfg._zpuns_list                                        ), [ 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', ]
      @eq ( Ωhllt_302 = -> cfg.dimension                                          ), 3
      @eq ( Ωhllt_303 = -> +( ( cfg._base ** ( cfg._pmag_list.length - 1 )  ) - 1 ) ), +999
      @eq ( Ωhllt_304 = -> -( ( cfg._base ** ( cfg._nmag_list.length - 1 )  ) - 1 ) ), -999
      @eq ( Ωhllt_305 = -> cfg._max_integer                                       ), +999
      @eq ( Ωhllt_306 = -> cfg._min_integer                                       ), -999
      @eq ( Ωhllt_307 = -> cfg.digits_per_idx                                         ), 3
      @eq ( Ωhllt_308 = -> cfg._alphabet                                          ), '0123456789ABCFGHIJKLMNOPQRSTUVXYZ'
      #.....................................................................................................
      h = new Hollerith cfg_10
      @eq ( Ωhllt_309 = -> h.cfg ), cfg
      # @eq ( Ωhllt_310 = -> h.encode  -998 ), null
      @eq ( Ωhllt_311 = -> h.encode   -12 ), 'B87'
      @eq ( Ωhllt_312 = -> h.encode   -11 ), 'B88'
      @eq ( Ωhllt_313 = -> h.encode   -10 ), 'B89'
      @eq ( Ωhllt_314 = -> h.encode    -9 ), 'C0'
      @eq ( Ωhllt_315 = -> h.encode    -8 ), 'F'
      @eq ( Ωhllt_316 = -> h.encode    -2 ), 'L'
      @eq ( Ωhllt_317 = -> h.encode    -1 ), 'M'
      @eq ( Ωhllt_318 = -> h.encode     0 ), 'N'
      @eq ( Ωhllt_319 = -> h.encode    +1 ), 'O'
      @eq ( Ωhllt_320 = -> h.encode    +2 ), 'P'
      @eq ( Ωhllt_321 = -> h.encode    +8 ), 'V'
      @eq ( Ωhllt_322 = -> h.encode    +9 ), 'X9'
      @eq ( Ωhllt_323 = -> h.encode   +10 ), 'Y10'
      @eq ( Ωhllt_324 = -> h.encode   +11 ), 'Y11'
      @eq ( Ωhllt_325 = -> h.encode   +12 ), 'Y12'
      @eq ( Ωhllt_326 = -> h.encode  +998 ), 'Z998'
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
      digitset:     '0123456789'              # digits; length of `digitset` is the `_base`
      magnifiers:   'ABC XYZ'                 #
      uniliterals:  'N'                       # only has zero uniliteral
      dimension:    3                         # number of indices supported
    #.......................................................................................................
    do =>
      { cfg, } = Hollerith.validate_and_compile_cfg cfg_10_no_uniliterals
      @eq ( Ωhllt_327 = -> cfg.blank                                                  ), ' '
      @eq ( Ωhllt_328 = -> cfg.digitset                                               ), '0123456789'
      @eq ( Ωhllt_329 = -> cfg._digits_list                                           ), Array.from '0123456789'
      @eq ( Ωhllt_330 = -> cfg._nova                                                  ), ( Array.from cfg.digitset ).at -1
      @eq ( Ωhllt_331 = -> cfg._leading_novas_re                                      ), /// ^ (?: 9 )* (?= .+ $ ) ///gv
      @eq ( Ωhllt_332 = -> is_frozen cfg._digits_list                                 ), true
      @eq ( Ωhllt_333 = -> cfg._base                                                  ), 10
      @eq ( Ωhllt_334 = -> cfg.magnifiers                                             ), 'ABC XYZ'
      @eq ( Ωhllt_335 = -> cfg._nmag                                                  ), ' CBA'
      @eq ( Ωhllt_336 = -> cfg._pmag                                                  ), ' XYZ'
      @eq ( Ωhllt_337 = -> cfg._nmag_list                                             ), Array.from ' CBA'
      @eq ( Ωhllt_338 = -> cfg._pmag_list                                             ), Array.from ' XYZ'
      @eq ( Ωhllt_339 = -> cfg.uniliterals                                            ), 'N'
      @eq ( Ωhllt_340 = -> cfg._nuns                                                  ), null
      @eq ( Ωhllt_341 = -> cfg._zpuns                                                 ), 'N'
      @eq ( Ωhllt_342 = -> cfg._nuns_list                                             ), []
      @eq ( Ωhllt_343 = -> cfg._zpuns_list                                            ), [ 'N', ]
      @eq ( Ωhllt_344 = -> cfg.dimension                                              ), 3
      @eq ( Ωhllt_345 = -> +( ( cfg._base ** ( cfg._pmag_list.length - 1 )  ) - 1 )   ), +999
      @eq ( Ωhllt_346 = -> -( ( cfg._base ** ( cfg._nmag_list.length - 1 )  ) - 1 )   ), -999
      @eq ( Ωhllt_347 = -> cfg._max_integer                                           ), +999
      @eq ( Ωhllt_348 = -> cfg._min_integer                                           ), -999
      @eq ( Ωhllt_349 = -> cfg.digits_per_idx                                         ), 3
      @eq ( Ωhllt_350 = -> cfg._alphabet                                              ), '0123456789ABCNXYZ'
      #.....................................................................................................
      h = new Hollerith cfg_10_no_uniliterals
      @eq ( Ωhllt_351 = -> h.cfg                                                      ), cfg
      @eq ( Ωhllt_352 = -> h.encode [ 0, ]                                            ), 'NNNNNNNNNNNN'
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
      digitset:     '!#$%&()*+,-./0123456789:;<=>?@AB' + \
                    'CDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc' + \
                    'defghijklmnopqrstuvwxyz{|}~¡¢£¤¥' + \
                    '¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ'
      magnifiers:   'ÇÈÉÊËÌÍÎ øùúûüýþÿ'
      uniliterals:  'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ ã äåæçèéêëìíîïðñòóôõö÷'
      dimension:    5
    #.......................................................................................................
    do =>
      { cfg, } = Hollerith.validate_and_compile_cfg cfg_128
      @eq ( Ωhllt_353 = -> cfg.blank                                              ), ' '
      @eq ( Ωhllt_354 = -> cfg.digitset                                           ), '!#$%&()*+,-./0123456789:;<=>?@AB' + \
                                                                                     'CDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc' + \
                                                                                     'defghijklmnopqrstuvwxyz{|}~¡¢£¤¥' + \
                                                                                     '¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ'
      @eq ( Ωhllt_355 = -> cfg._digits_list                                       ), Array.from cfg.digitset
      @eq ( Ωhllt_356 = -> cfg._nova                                              ), ( Array.from cfg.digitset ).at -1
      @eq ( Ωhllt_357 = -> cfg._leading_novas_re                                  ), /// ^ (?: Æ )* (?= .+ $ ) ///gv
      @eq ( Ωhllt_358 = -> cfg.magnifiers                                         ), 'ÇÈÉÊËÌÍÎ øùúûüýþÿ'
      @eq ( Ωhllt_359 = -> cfg._nmag                                               ), ' ÎÍÌËÊÉÈÇ'
      @eq ( Ωhllt_360 = -> cfg._pmag                                               ), ' øùúûüýþÿ'
      @eq ( Ωhllt_361 = -> cfg._nmag_list                                          ), Array.from ' ÎÍÌËÊÉÈÇ'
      @eq ( Ωhllt_362 = -> cfg._pmag_list                                          ), Array.from ' øùúûüýþÿ'
      @eq ( Ωhllt_363 = -> cfg.uniliterals                                        ), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ ã äåæçèéêëìíîïðñòóôõö÷'
      @eq ( Ωhllt_364 = -> cfg._nuns                                               ), 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ'
      @eq ( Ωhllt_365 = -> cfg._zpuns                                              ), 'ãäåæçèéêëìíîïðñòóôõö÷'
      @eq ( Ωhllt_366 = -> cfg._nuns_list                                           ), Array.from 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ'
      @eq ( Ωhllt_367 = -> cfg._zpuns_list                                          ), Array.from 'ãäåæçèéêëìíîïðñòóôõö÷'
      @eq ( Ωhllt_368 = -> cfg._min_integer                                       ), -( ( 128 ** 7 ) - 1 )
      @eq ( Ωhllt_369 = -> cfg._max_integer                                       ), +( ( 128 ** 7 ) - 1 )
      # @eq ( Ωhllt_370 = -> cfg.digits_per_idx                                         ), 3
      # @eq ( Ωhllt_371 = -> cfg._alphabet                                          ), '0123456789ABCEFGHIJKLMNOPQRSTUVWXYZ'
      #.....................................................................................................
      @eq ( Ωhllt_372 = -> is_frozen cfg._digits_list                             ), true
      @eq ( Ωhllt_373 = -> cfg._base                                               ), 128
      @eq ( Ωhllt_374 = -> cfg.dimension                                          ), 5
      #.....................................................................................................
      h = new Hollerith cfg_128
      @eq ( Ωhllt_375 = -> h.cfg ), cfg
      # @eq ( Ωhllt_376 = -> h.encode [ 0, ] ), null
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  validate_and_compile_cfg_10_cardinals: ->
    { internals,
      hollerith_10_cardinal,
      Hollerith,                  } = require '../../../apps/hollerith'
    { constants_10_cardinal,      } = internals
    { Hollerith_typespace,
      CFG,                        } = require '../../../apps/hollerith/lib/types'
    # { type_of,                    } = SFMODULES.unstable.require_type_of()
    # { isDeepStrictEqual: equals,  } = require 'node:util'
    { isFrozen: is_frozen,        } = Object
    #.......................................................................................................
    do =>
      { cfg, } = Hollerith.validate_and_compile_cfg constants_10_cardinal
      @eq     ( Ωhllt_377 = -> cfg.blank                                          ), ' '
      @eq     ( Ωhllt_378 = -> cfg.cardinals_only                                 ), true
      @eq     ( Ωhllt_379 = -> cfg._nmag                                          ), null
      @eq     ( Ωhllt_380 = -> cfg._nuns                                          ), null
      @eq     ( Ωhllt_381 = -> cfg._min_integer                                   ), 0
      @eq     ( Ωhllt_382 = -> cfg._max_integer                                   ), +999
      @eq     ( Ωhllt_383 = -> cfg.digits_per_idx                                 ), 3
      #.....................................................................................................
      h = new Hollerith constants_10_cardinal
      @eq     ( Ωhllt_384 = -> h.cfg                                              ), cfg
      @eq     ( Ωhllt_385 = -> h.encode [   0, ]                                  ), 'NNNNNNNNNNNN'
      @eq     ( Ωhllt_386 = -> h.encode [ 999, ]                                  ), 'Z999NNNNNNNN'
      @eq     ( Ωhllt_387 = -> h.encode     0                                     ), 'N'
      @eq     ( Ωhllt_388 = -> h.encode   999                                     ), 'Z999'
      # @throws ( Ωhllt_389 = -> h.encode [  -1, ]                                  ), /unable to encode negative idx -1 with cardinals-only codec/
      @throws ( Ωhllt_390 = -> h.encode [  -1, ]                                  ), /not a valid idx/
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  can_set_max_idx_digits: ->
    { internals,
      Hollerith,                  } = require '../../../apps/hollerith'
    { Hollerith_typespace,
      CFG,                        } = require '../../../apps/hollerith/lib/types'
    # { type_of,                    } = SFMODULES.unstable.require_type_of()
    # { isDeepStrictEqual: equals,  } = require 'node:util'
    { isFrozen: is_frozen,        } = Object
    #=======================================================================================================
    do =>
      user_cfg =
        uniliterals:        'EFGHIJKLM N OPQRSTUVW'
        digitset:           '0123456789'
        magnifiers:         'ABC XYZ'
      { cfg, } = Hollerith.validate_and_compile_cfg user_cfg
      @eq ( Ωhllt_391 = -> cfg._min_integer               ), -999
      @eq ( Ωhllt_392 = -> cfg._max_integer               ), +999
      @eq ( Ωhllt_393 = -> cfg.digits_per_idx             ), 3
      #.....................................................................................................
      h = new Hollerith user_cfg
      @eq ( Ωhllt_394 = -> h.cfg                          ), cfg
      @eq ( Ωhllt_395 = -> h.encode [ 0, ]                ), 'NNNNNNNNNNNNNNNNNNNN'
      return null
    #.......................................................................................................
    do =>
      user_cfg =
        uniliterals:        'EFGHIJKLM N OPQRSTUVW'
        digitset:           '0123456789'
        magnifiers:         'ABC XYZ'
        _max_integer:       999
      { cfg, } = Hollerith.validate_and_compile_cfg user_cfg
      @eq ( Ωhllt_396 = -> cfg._min_integer               ), -999
      @eq ( Ωhllt_397 = -> cfg._max_integer               ), +999
      @eq ( Ωhllt_398 = -> cfg.digits_per_idx             ), 3
      #.....................................................................................................
      h = new Hollerith user_cfg
      @eq ( Ωhllt_399 = -> h.cfg                          ), cfg
      @eq ( Ωhllt_400 = -> h.encode [ 0, ]                ), 'NNNNNNNNNNNNNNNNNNNN'
      return null
    #.......................................................................................................
    do =>
      user_cfg =
        uniliterals:        'EFGHIJKLM N OPQRSTUVW'
        digitset:           '0123456789'
        magnifiers:         'ABC XYZ'
        digits_per_idx:    3
      { cfg, } = Hollerith.validate_and_compile_cfg user_cfg
      @eq ( Ωhllt_401 = -> cfg._min_integer               ), -999
      @eq ( Ωhllt_402 = -> cfg._max_integer               ), +999
      @eq ( Ωhllt_403 = -> cfg.digits_per_idx             ), 3
      #.....................................................................................................
      h = new Hollerith user_cfg
      @eq ( Ωhllt_404 = -> h.cfg                          ), cfg
      @eq ( Ωhllt_405 = -> h.encode [ 0, ]                ), 'NNNNNNNNNNNNNNNNNNNN'
      return null
    #=======================================================================================================
    do =>
      user_cfg =
        uniliterals:        'EFGHIJKLM N OPQRSTUVW'
        digitset:           '0123456789'
        magnifiers:         '?@ABC XYZ^_'
      { cfg, } = Hollerith.validate_and_compile_cfg user_cfg
      @eq ( Ωhllt_406 = -> cfg._min_integer               ), -99_999
      @eq ( Ωhllt_407 = -> cfg._max_integer               ), +99_999
      @eq ( Ωhllt_408 = -> cfg.digits_per_idx             ), 5
      #.....................................................................................................
      h = new Hollerith user_cfg
      @eq ( Ωhllt_409 = -> h.cfg                          ), cfg
      @eq ( Ωhllt_410 = -> h.encode [ 0, ]                ), 'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN'
      return null
    #.......................................................................................................
    do =>
      user_cfg =
        uniliterals:        'EFGHIJKLM N OPQRSTUVW'
        digitset:           '0123456789'
        magnifiers:         '?@ABC XYZ^_'
        _max_integer:       999
      { cfg, } = Hollerith.validate_and_compile_cfg user_cfg
      @eq ( Ωhllt_411 = -> cfg._min_integer               ), -99_999
      @eq ( Ωhllt_412 = -> cfg._max_integer               ), +99_999
      @eq ( Ωhllt_413 = -> cfg.digits_per_idx             ), 5
      #.....................................................................................................
      h = new Hollerith user_cfg
      @eq ( Ωhllt_414 = -> h.cfg                          ), cfg
      @eq ( Ωhllt_415 = -> h.encode [ 0, ]                ), 'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN'
      return null
    #.......................................................................................................
    do =>
      user_cfg =
        uniliterals:        'EFGHIJKLM N OPQRSTUVW'
        digitset:           '0123456789'
        magnifiers:         '?@ABC XYZ^_'
        digits_per_idx:     3
      { cfg, } = Hollerith.validate_and_compile_cfg user_cfg
      @eq ( Ωhllt_416 = -> cfg._min_integer               ), -999
      @eq ( Ωhllt_417 = -> cfg._max_integer               ), +999
      @eq ( Ωhllt_418 = -> cfg.digits_per_idx             ), 3
      #.....................................................................................................
      h = new Hollerith user_cfg
      @eq ( Ωhllt_419 = -> h.cfg                          ), cfg
      @eq ( Ωhllt_420 = -> h.encode [ 0, ]                ), 'NNNNNNNNNNNNNNNNNNNN'
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  can_use_placeholder: ->
    { internals,
      Hollerith,
      test,                       } = require '../../../apps/hollerith'
    { Test_hollerith,             } = test
    #=======================================================================================================
    do =>
      user_cfg =
        uniliterals:        'A BCDEFGHIJKLMNOPQ'
        digitset:           '0123456789'
        magnifiers:         'RSTUVWXYZ'
        cardinals_only:     true
      { cfg, } = Hollerith.validate_and_compile_cfg user_cfg
      @eq ( Ωhllt_421 = -> cfg._min_integer               ), 0
      @eq ( Ωhllt_422 = -> cfg._max_integer               ), +999999999
      @eq ( Ωhllt_423 = -> cfg.digits_per_idx             ), 9
      #.....................................................................................................
      codec = new Hollerith user_cfg
      @eq ( Ωhllt_424 = -> codec.cfg                      ), cfg
      @eq ( Ωhllt_425 = -> codec.encode [ 0, ]            ), 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
      #.....................................................................................................
      t = new Test_hollerith codec
      @eq ( Ωhllt_426 = -> t.test_sorting().success       ), true
      #.....................................................................................................
      return null
    #.......................................................................................................
    do =>
      return @eq ( -> true ), "Ωhllt_427 postponed"
      user_cfg =
        placeholder:        '_'
        uniliterals:        'A BCDEFGHIJKLMNOPQ'
        digitset:           '0123456789'
        magnifiers:         '_STUVWXYZ'
        cardinals_only:     true
      { cfg, } = Hollerith.validate_and_compile_cfg user_cfg
      @eq ( Ωhllt_428 = -> cfg.placeholder                ), '_'
      @eq ( Ωhllt_429 = -> cfg._placeholders_re           ), /(?:_)*/gv
      @eq ( Ωhllt_430 = -> cfg._min_integer               ), 0
      @eq ( Ωhllt_431 = -> cfg._max_integer               ), +999999999
      @eq ( Ωhllt_432 = -> cfg.digits_per_idx             ), 9
      #.....................................................................................................
      codec = new Hollerith user_cfg
      @eq ( Ωhllt_433 = -> codec.cfg                      ), cfg
      @eq ( Ωhllt_434 = -> codec.encode [ 0, ]            ), 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
      #.....................................................................................................
      t = new Test_hollerith codec
      @eq ( Ωhllt_435 = -> t.test_sorting().success       ), true
      #.....................................................................................................
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  test_test_hollerith: ->
    { internals,
      Hollerith,
      test,                       } = require '../../../apps/hollerith'
    { Test_hollerith,             } = test
    { type_of,                    } = SFMODULES.unstable.require_type_of()
    #=======================================================================================================
    @throws ( Ωhllt_436 = -> new Test_hollerith '???'                               ), /not a valid hollerith/
    #.......................................................................................................
    for name, cfg of internals
      continue unless name.startsWith 'constants_'
      codec       = new Hollerith cfg
      t           = new Test_hollerith codec
      test_result = t.test_sorting()
      @eq ( Ωhllt_437 = -> type_of t.test_sorting                                 ), 'function'
      @eq ( Ωhllt_438 = -> type_of test_result                                    ), 'pod'
      @eq ( Ωhllt_439 = -> test_result.success                                    ), true
      @eq ( Ωhllt_440 = -> type_of test_result.probe_count                        ), 'float'
      @eq ( Ωhllt_441 = -> type_of test_result.hit_count                          ), 'float'
      @eq ( Ωhllt_442 = -> type_of test_result.miss_count                         ), 'float'
      for _ in [ 0 ... test_result.hit_count ]
        @eq ( Ωhllt_443 = -> true ), true
      for _ in [ 0 ... test_result.miss_count ]
        @eq ( Ωhllt_444 = -> true ), false
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  types: ->
    { Hollerith_typespace,
      create_max_integer,
      CFG,                        } = require '../../../apps/hollerith/lib/types'
    #.......................................................................................................
    do =>
      T = new Hollerith_typespace()
      @eq     ( Ωhllt_445 = -> T._base.isa -1                                                        ), false
      @eq     ( Ωhllt_446 = -> T._base.isa  0                                                        ), false
      @eq     ( Ωhllt_447 = -> T._base.isa +1                                                        ), false
      @eq     ( Ωhllt_448 = -> T._base.isa +2                                                        ), true
      @eq     ( Ωhllt_449 = -> T._max_integer.isa null                                            ), false
      @eq     ( Ωhllt_450 = -> T._max_integer.isa 9,          10                                  ), true
      @eq     ( Ωhllt_451 = -> T._max_integer.isa 99,         10                                  ), true
      @eq     ( Ωhllt_452 = -> T._max_integer.isa 99999999,   10                                  ), true
      @eq     ( Ωhllt_453 = -> T._max_integer.isa -10,        10                                  ), false
      @eq     ( Ωhllt_454 = -> /not a positive safe integer/.test T._max_integer.data.message     ), true
      @eq     ( Ωhllt_455 = -> T._max_integer.isa 0xffff,     16                                  ), true
      @eq     ( Ωhllt_456 = -> T._max_integer.isa 0x7fffffff, 16                                  ), false
      @throws ( Ωhllt_457 = -> T._max_integer.validate 5, 10                                      ), /\(_max_integer\) not a valid _max_integer: 5 – x not a positive all-niners/
      return null
    #.......................................................................................................
    do =>
      T = new Hollerith_typespace()
      R = { _base: 16, digits_per_idx: 4, }
      @eq     ( Ωhllt_458 = -> T._max_integer.isa ( R._base ** R.digits_per_idx ) - 1, R._base ), true
      return null
    #.......................................................................................................
    do =>
      T = new Hollerith_typespace()
      @eq     ( Ωhllt_459 = -> T._max_integer.isa ( 128 ** 1 ) - 1, 128             ), true
      @eq     ( Ωhllt_460 = -> T._max_integer.isa ( 128 ** 2 ) - 1, 128             ), true
      @eq     ( Ωhllt_461 = -> T._max_integer.isa ( 128 ** 3 ) - 1, 128             ), true
      @eq     ( Ωhllt_462 = -> T._max_integer.isa ( 128 ** 4 ) - 1, 128             ), true
      @eq     ( Ωhllt_463 = -> T._max_integer.isa ( 128 ** 5 ) - 1, 128             ), true
      @eq     ( Ωhllt_464 = -> T._max_integer.isa ( 128 ** 6 ) - 1, 128             ), true
      @eq     ( Ωhllt_465 = -> T._max_integer.isa ( 128 ** 7 ) - 1, 128             ), true
      @eq     ( Ωhllt_466 = -> T._max_integer.isa ( 128 ** 8 ) - 1, 128             ), false
      @eq     ( Ωhllt_467 = -> T.create_max_integer { _base: 10, digits_per_idx: 2, } ), 99
      return null
    #.......................................................................................................
    return null

#===========================================================================================================
demo_max_integer = ->
  log_to_base               = ( n, base ) -> ( Math.log n ) / ( Math.log base )
  get_required_digits       = ( n, base ) -> Math.ceil log_to_base n, base
  get_max_niner_digit_count = ( n, base ) -> ( get_required_digits n, base ) - 1
  get_max_integer           = ( n, base ) -> ( base ** get_max_niner_digit_count n, base ) - 1
  info 'Ωhllt_468', Number.MAX_SAFE_INTEGER.toString 16
  info 'Ωhllt_469', Number.MAX_SAFE_INTEGER.toString 32
  whisper '—————————————————————————————————'
  info 'Ωhllt_470', ( 32 ** 4 - 1 ).toString 32
  info 'Ωhllt_471', ( 32 ** 4 - 1 ).toString 32
  whisper '—————————————————————————————————'
  info 'Ωhllt_472', get_required_digits 32,       32
  info 'Ωhllt_473', get_required_digits 32 ** 6,  32
  info 'Ωhllt_474', get_required_digits 1e6,      10
  info 'Ωhllt_475', get_required_digits 20,       10
  whisper '—————————————————————————————————'
  info 'Ωhllt_476', max_digits_base_10    = get_max_niner_digit_count Number.MAX_SAFE_INTEGER, 10
  info 'Ωhllt_477', max_digits_base_16    = get_max_niner_digit_count Number.MAX_SAFE_INTEGER, 16
  info 'Ωhllt_478', max_digits_base_32    = get_max_niner_digit_count Number.MAX_SAFE_INTEGER, 32
  info 'Ωhllt_479', max_digits_base_36    = get_max_niner_digit_count Number.MAX_SAFE_INTEGER, 36
  info 'Ωhllt_480', max_digits_1base_28   = get_max_niner_digit_count Number.MAX_SAFE_INTEGER, 128
  # for base in [ 2 .. 128 ]
  #   info 'Ωhllt_481', { base, }, ( Math.ceil log_to_base Number.MAX_SAFE_INTEGER, base ) - 1
  whisper '—————————————————————————————————'
  info 'Ωhllt_482', '9'.repeat max_digits_base_10
  info 'Ωhllt_483', 'f'.repeat max_digits_base_16
  info 'Ωhllt_484', 'v'.repeat max_digits_base_32
  whisper '—————————————————————————————————'
  info 'Ωhllt_485', ( ( base = 10 ) ** max_digits_base_10 ) - 1
  info 'Ωhllt_486', ( ( base = 16 ) ** max_digits_base_16 ) - 1
  info 'Ωhllt_487', ( ( base = 32 ) ** max_digits_base_32 ) - 1
  info 'Ωhllt_488', ( ( base = 36 ) ** max_digits_base_36 ) - 1
  whisper '—————————————————————————————————'
  info 'Ωhllt_489', get_max_integer Number.MAX_SAFE_INTEGER, 10
  info 'Ωhllt_490', get_max_integer Number.MAX_SAFE_INTEGER, 16
  info 'Ωhllt_491', get_max_integer Number.MAX_SAFE_INTEGER, 32
  info 'Ωhllt_492', get_max_integer Number.MAX_SAFE_INTEGER, 36
  info 'Ωhllt_493', get_max_integer Number.MAX_SAFE_INTEGER, 128
  whisper '—————————————————————————————————'
  info 'Ωhllt_494', ( parseInt ( '9'.repeat max_digits_base_10 ), 10 )
  info 'Ωhllt_495', ( parseInt ( 'f'.repeat max_digits_base_16 ), 16 )
  info 'Ωhllt_496', ( parseInt ( 'v'.repeat max_digits_base_32 ), 32 )
  info 'Ωhllt_497', ( parseInt ( 'z'.repeat max_digits_base_36 ), 36 )
  info 'Ωhllt_498', ( parseInt ( '9'.repeat max_digits_base_10 ), 10 ) <= Number.MAX_SAFE_INTEGER
  info 'Ωhllt_499', ( parseInt ( 'f'.repeat max_digits_base_16 ), 16 ) <= Number.MAX_SAFE_INTEGER
  info 'Ωhllt_500', ( parseInt ( 'v'.repeat max_digits_base_32 ), 32 ) <= Number.MAX_SAFE_INTEGER
  info 'Ωhllt_501', ( parseInt ( 'z'.repeat max_digits_base_36 ), 36 ) <= Number.MAX_SAFE_INTEGER
  whisper '—————————————————————————————————'
  info 'Ωhllt_502', +999 + -999
  info 'Ωhllt_503', +999 + -1
  info 'Ωhllt_504', -( -999 - 1 ) + -999
  info 'Ωhllt_505', -( -999 - 1 ) + -998
  info 'Ωhllt_506', -( -999 - 1 ) + -997
  info 'Ωhllt_507', -( -999 - 1 ) + -3
  info 'Ωhllt_508', -( -999 - 1 ) + -2
  info 'Ωhllt_509', -( -999 - 1 ) + -1
  info 'Ωhllt_510', "#{ -( -999 - 1 ) + -3 }".replace /// ^ 9*? (?= . $ ) ///gv, ''
  info 'Ωhllt_511', "#{ -( -999 - 1 ) + -2 }".replace /// ^ 9*? (?= . $ ) ///gv, ''
  info 'Ωhllt_512', "#{ -( -999 - 1 ) + -1 }".replace /// ^ 9*? (?= . $ ) ///gv, ''
  return null


#===========================================================================================================
if module is require.main then await do =>
  { show_requires, } = require '../../snippets/lib/demo-show-requires.js'
  show_requires '../../../apps/hollerith'
  #---------------------------------------------------------------------------------------------------------
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @hollerith
  # ( new Test guytest_cfg ).test { can_use_placeholder: @hollerith.can_use_placeholder, }
  # ( new Test guytest_cfg ).test { test_test_hollerith: @hollerith.test_test_hollerith, }
  # ( new Test guytest_cfg ).test { validate_and_compile_cfg_10_cardinals: @hollerith.validate_and_compile_cfg_10_cardinals, }
  # ( new Test guytest_cfg ).test { hollerith_10mvp2_big_shuffle: @hollerith.hollerith_10mvp2_big_shuffle, }
  # ( new Test guytest_cfg ).test { hollerith_128_big_shuffle: @hollerith.hollerith_128_big_shuffle, }
  # ( new Test guytest_cfg ).test { can_set_max_idx_digits: @hollerith.can_set_max_idx_digits, }

  # ( new Test guytest_cfg ).test { types: @hollerith.types, }
  # ( new Test guytest_cfg ).test { h10mvp2_sorting_2: @hollerith.h10mvp2_sorting_2, }
  # ( new Test guytest_cfg ).test { validate_and_compile_cfg_10: @hollerith.validate_and_compile_cfg_10, }
  # ( new Test guytest_cfg ).test { h10mvp2_decode_units: @hollerith.h10mvp2_decode_units, }
  # ( new Test guytest_cfg ).test { get_leading_novas_re: @hollerith.get_leading_novas_re, }
  # ( new Test guytest_cfg ).test { validate_and_compile_cfg: @hollerith.validate_and_compile_cfg, }
  # demo_max_integer()


