
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
  whisper }               = GUY.trm.get_loggers 'demo-build-unicode-ranges'
{ rpr
  inspect
  echo
  white
  green
  lime
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
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'
mkdirp                    = require 'mkdirp'
env_paths                 = ( require 'env-paths' ).default 'demo-node-sqlite'
SQLITE                    = require 'node:sqlite'
PATH                      = require 'node:path'
{ SQL }                   = require '../../../apps/dbay'
{ default: \
  on_process_exit,      } = require 'exit-hook'
FS                        = require 'node:fs'
{ hide,
  set_getter,           } = SFMODULES.require_managed_property_tools()
{ timeit,               } = SFMODULES.unstable.require_benchmarking()


#===========================================================================================================
rpr_cid = ( cid ) ->
  return rpr cid unless Number.isFinite cid
  return '0x' + ( ( cid.toString 16 ).padStart 4, '0' ).toLowerCase()

#===========================================================================================================
codepoint_patterns =
  unassigned: ///^\p{Cn}$///v # Control
  control:    ///^\p{C}$///v # Control
  letter:     ///^\p{L}$///v
  space:      ///^\p{Zs}$///v
  separator:  ///^\p{Z}$///v
  mark:       ///^\p{M}$///v
  # surrogate:  ///^\p{C}$///v # Surrogate

#-----------------------------------------------------------------------------------------------------------
get_rough_unicode_category = ( chr ) ->
  for name, pattern of codepoint_patterns
    return name if pattern.test chr
  return 'other'

#===========================================================================================================
class Unicode_range

  #---------------------------------------------------------------------------------------------------------
  constructor: ({ is_member = true, lo = 0x0000, hi = null, }) ->
    @is_member  = is_member
    @lo         =       lo
    @hi         = hi ?  lo
    return undefined

  #---------------------------------------------------------------------------------------------------------
  increment_hi: -> @hi++
  decrement_lo: -> @lo--

  #---------------------------------------------------------------------------------------------------------
  has: ( cid ) -> @lo <= cid <= @hi

  #---------------------------------------------------------------------------------------------------------
  set_getter @::, Symbol.toStringTag, -> "[ U+#{rpr_cid @lo} .. U+#{rpr_cid @hi} ]"
  toString:                           -> "[ U+#{rpr_cid @lo} .. U+#{rpr_cid @hi} ]"

#===========================================================================================================
class Unicode_ranges

  #---------------------------------------------------------------------------------------------------------
  constructor: ->
    @ranges = []
    return undefined

  #---------------------------------------------------------------------------------------------------------
  [Symbol.iterator]: -> yield from @ranges

  #---------------------------------------------------------------------------------------------------------
  set_getter @::, 'current_range', -> ( @ranges.at -1 ) ? null
  set_getter @::, 'is_empty',      -> @ranges.length is 0

  #---------------------------------------------------------------------------------------------------------
  set_getter @::, 'next_cid', ->
    throw new Error "Ω___1 unable to get next CID when collection is empty" if @is_empty
    return @current_range.hi + 1

  #---------------------------------------------------------------------------------------------------------
  test_codepoint: ( cid ) -> not codepoint_patterns.unassigned.test ( chr = String.fromCodePoint cid )

  #---------------------------------------------------------------------------------------------------------
  add_range: ( range ) -> throw new Error "Ω___2 not implemented"

  #---------------------------------------------------------------------------------------------------------
  has: ( cid ) ->
    for range in @ranges
      return true if range.has cid
    return false

  #---------------------------------------------------------------------------------------------------------
  add_consecutive_codepoint: ( cid ) ->
    ### TAINT validate ###
    is_member = @test_codepoint cid
    if @is_empty
      @ranges.push ( new Unicode_range { is_member, lo: cid, } )
    # debug 'Ω___3', ( rpr_cid cid ), ( rpr_cid @next_cid )
    # return null if @has cid
    # debug 'Ω___4', ( rpr_cid @next_cid ), ( rpr_cid cid ), ( @has cid )
    # debug 'Ω___5', "#{range}" for range in @ranges
    # unless cid is @next_cid
    #   throw new Error "Ω___6 expected #{rpr_cid @next_cid}, got #{rpr_cid cid}"
    if is_member is @current_range.is_member
      @current_range.hi = cid
    else
      @ranges.push new Unicode_range { is_member, lo: cid, }
    return null

#===========================================================================================================
demo_build_unicode_ranges = =>
  lo  = 0x0000
  # hi  = 0x0380
  # lo  = 0x0390
  # hi  = 0x03ff
  # hi  = 0x10ffff
  hi  = 0x00ff
  # hi  = 0xffff
  #.........................................................................................................
  # crt_start           = lo
  # crt_range           = null
  # prv_is_unassigned   = false
  # assigned_ranges     = []
  # unassigned_ranges   = []
  #.........................................................................................................
  chr_re = ///^(?:\p{L}|\p{Zs}|\p{Z}|\p{M}|\p{N}|\p{P}|\p{S})$///v
  class My_unicode_ranges extends Unicode_ranges
    #---------------------------------------------------------------------------------------------------------
    test_codepoint: ( cid ) -> chr_re.test ( chr = String.fromCodePoint cid )
  #.........................................................................................................
  # ranges              = new Unicode_ranges()
  ranges              = new My_unicode_ranges()
  #.........................................................................................................
  timeit collect_ranges = ->
    for cid in [ lo .. hi ] by +1
      # debug 'Ω___7', ( rpr_cid cid ), new Unicode_range { lo: cid, }
      ranges.add_consecutive_codepoint cid
    return null
  #.........................................................................................................
  for range from ranges.ranges[ 0 .. 20 ]
    info 'Ω___8', ( if range.is_member then gold else blue ) range
  debug 'Ω___8', f"collected #{ranges.ranges.length}:>20,.0f; ranges for #{hi - lo + 1}:>20,.0f; codepoints"
  #.........................................................................................................
  return null

#===========================================================================================================
if module is require.main then await do =>
  await demo_build_unicode_ranges()
  return null
