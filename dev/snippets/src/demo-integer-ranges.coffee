


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
  whisper }               = GUY.trm.get_loggers 'demo-unicode-support'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
#...........................................................................................................
SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
{ nameit,               } = SFMODULES.require_nameit()
{ type_of,              } = SFMODULES.unstable.require_type_of()
{ hide,
  set_getter,           } = SFMODULES.require_managed_property_tools()


#===========================================================================================================
demo_dicontinouous_range = ->
  Range = require 'discontinuous-range'
  # rng = new Range 5
  rng = new Range 1, 5
  rng.add 6
  debug 'Ωdir___1', rng
  rng.add 8
  rng.add 9
  rng.add 11
  rng.add 12
  debug 'Ωdir___2', rng
  debug 'Ωdir___3', rng.toString()
  debug 'Ωdir___4', rng.length
  for idx in [ 0 ... rng.length ]
    urge 'Ωdir___5', rng.index idx
  ;null

#===========================================================================================================
demo_intervals_fn = ->
  IFN = require '../../../../intervals-fn'
  # debug 'Ωdir___6', ( k for k of IFN ).sort()
  #.........................................................................................................
  class Rangeset
    constructor: ( data ) ->
      @data   = data
      @ranges = []
      ;undefined
    #-------------------------------------------------------------------------------------------------------
    add: ( range ) ->
      unless range instanceof Range
        range = if range.end? then ( Range.from_startend range ) else new Range range
      ### TAINT check that rangeset is not yet set ###
      range.rangeset = @
      ### TAINT find appropriate index to preserve ordering ###
      @ranges.push range
    #-------------------------------------------------------------------------------------------------------
    merge: ( merge_fn ) ->
      startends = IFN.merge merge_fn, ( range.as_startend() for range in @ranges )
      data      = if startends.length > 0 then startends[ 0 ].data else @data
      R         = new Rangeset data
      R.add startend for startend in startends
      return R
  #.........................................................................................................
  class Range
    constructor: ({ lo, hi, rangeset = null }) ->
      @lo               = lo
      @hi               = hi
      hide @, 'rangeset', rangeset
    as_startend:                -> { start: @lo, end: @hi + 1, data: @data, }
    @from_startend:( startend ) -> new @ { lo: startend.start, hi: startend.end - 1, data: startend.data, }
    set_getter @, 'data', -> @rangeset.data
  #.........................................................................................................
  sum_of_data = ( a, b ) =>
    data = [ a.data ? [], b.data ? [], ].flat()
    # debug 'Ωdir___7', { a, b, }
    # debug 'Ωdir___8', { a..., data, }
    { a..., data, }
  create_reducer = ( fn ) -> ( ranges ) => ranges.reduce( fn );
  #=========================================================================================================
  do =>
    rng_1       = [
      { start: 1, end:  10, data:   5, }
      { start: 4, end:   7, data:  10, }
      { start: 4, end:  12, data:  12, }
      { start: 0, end: 100, data: 102, }
      { start: 0, end: 100, data: 101, }
      ]
    merged      = IFN.merge ( create_reducer sum_of_data ), rng_1
    #.........................................................................................................
    ```
    //     t.is(res.length, 3);
    //     t.true(res[0].from === 0 && res[0].to === 4 && res[0].data === 5);
    //     t.true(res[1].from === 4 && res[1].to === 7 && res[1].data === 15);
    //     t.true(res[2].from === 7 && res[2].to === 10 && res[2].data === 5);
    ```
    urge()
    urge 'Ωdir___9', idx + 1, rng for rng, idx in merged
    urge()
    ;null
  #=========================================================================================================
  do =>
    rng_1       = new Rangeset 1
    rng_1.add { lo: 1, hi:   9, }
    rng_1.add { lo: 4, hi:   6, }
    rng_1.add { lo: 4, hi:  11, }
    rng_1.add { lo: 0, hi:  99, }
    rng_1.add { lo: 0, hi:  99, }
    merged      = rng_1.merge ( create_reducer sum_of_data )
    #.........................................................................................................
    ```
    //     t.is(res.length, 3);
    //     t.true(res[0].from === 0 && res[0].to === 4 && res[0].data === 5);
    //     t.true(res[1].from === 4 && res[1].to === 7 && res[1].data === 15);
    //     t.true(res[2].from === 7 && res[2].to === 10 && res[2].data === 5);
    ```
    urge()
    urge 'Ωdir__10', idx + 1, rng for rng, idx in merged.ranges
    urge()
    ;null
  #.........................................................................................................
  a = { start: 40, end: 49, }; b = { start: 50, end: 59, }; help 'Ωdir__11', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start: 40, end: 50, }; b = { start: 50, end: 59, }; help 'Ωdir__12', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start: 40, end: 51, }; b = { start: 50, end: 59, }; help 'Ωdir__13', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start: 40, end: 52, }; b = { start: 50, end: 59, }; help 'Ωdir__14', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start:  5, end: 10, }; b = { start: 0, end: 4 }; help 'Ωdir__15', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start:  5, end: 10, }; b = { start: 7, end: 8 }; help 'Ωdir__16', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  try
    a = { start:  5, end: 10, }; b = [ { start: 0, end: 4 }, { start: 7, end: 8 }, ]; help 'Ωdir__17', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  catch e then warn 'Ωdir__18', e.message
  urge()
  info 'Ωdir__19', IFN.simplify [ { start: 4, end: 20, }, ]
  info 'Ωdir__20', IFN.simplify [ { start: 4, end: 18, }, { start: 19, end: 22, }, ]
  info 'Ωdir__21', IFN.simplify [ { start: 4, end: 19, }, { start: 19, end: 22, }, ]
  info 'Ωdir__22', IFN.simplify [ { start: 4, end: 20, }, { start: 19, end: 22, }, ]
  info 'Ωdir__23', IFN.simplify [ { start: 4, end: 21, }, { start: 19, end: 22, }, ]
  info 'Ωdir__24', IFN.simplify [ { start: 3, end:  9, }, { start:  9, end: 13, }, ]
  info 'Ωdir__25', IFN.simplify [ { start: 3, end:  9, }, { start:  9, end: 13, }, { start: 11, end: 14, }, ] # [{ start: 3, end: 14 }]
  info 'Ωdir__26', IFN.simplify [ { start: 3, end:  9, }, { start: 10, end: 13, }, { start: 11, end: 14, }, ]
  rng_2 = [
    { start:  3, end: 10, data: 2, }
    { start:  9, end: 13, data: 3, }
    { start: 11, end: 14, data: 5, }
    ]
  merge_data_2 = ( a, b ) ->
    # debug 'Ωdir__27', { a, b, } #, { a..., b..., }
    return { a..., data: a.data * b.data, }
  merged = IFN.merge ( create_reducer merge_data_2 ), rng_2 # [{ start: 3, end: 14 }]
  info 'Ωdir__28', rng for rng in merged
  # urge 'Ωdir__29', rng for rng in merged_ft
  # urge()
  ;null

#===========================================================================================================
if module is require.main then do =>
  # demo_dicontinouous_range()
  demo_intervals_fn()
  # debug 'Ωdir__30', '0o' + ( 0o100664 & 0x1ff ).toString 8
  # debug 'Ωdir__31', '0o' + ( 0o100664 & 0x1ff & 0x0100 ).toString 8



