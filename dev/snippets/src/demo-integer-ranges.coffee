


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
    constructor: ({ data }={}) ->
      ### TAINT should freeze data ###
      @data   = data
      @ranges = []
      ;undefined
    #-------------------------------------------------------------------------------------------------------
    add: ( ranges... ) ->
      for element in ranges
        #...................................................................................................
        switch true
          when ( Reflect.has element, 'lo' ) and ( Reflect.has element, 'hi' )
            range = new Range element
          when ( Reflect.has element, 'start' ) and ( Reflect.has element, 'end' )
            range = Range.from_startend element
          else
            throw new Error "Ωdir___7 expected an object with lo/hi or start/end properties"
        #...................................................................................................
        if ( Reflect.has element, 'data' ) and ( data = element.data )?
          @data = { @data..., data..., }    ### TAINT should freeze data ###
        #...................................................................................................
        range.rangeset = @                ### TAINT check that rangeset is not yet set ###
        @ranges.push range                ### TAINT find appropriate index to preserve ordering ###
      #.....................................................................................................
      return @
    #-------------------------------------------------------------------------------------------------------
    merge: ( merge_fn ) ->
      startends = IFN.merge merge_fn, ( range.as_startend() for range in @ranges )
      data      = if startends.length > 0 then startends[ 0 ].data else @data
      R         = new Rangeset data
      R.add startend for startend in startends
      return R
    #-------------------------------------------------------------------------------------------------------
    simplify: ->
      startends = IFN.simplify ( range.as_startend() for range in @ranges )
      R         = new Rangeset @data
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
    # debug 'Ωdir___8', { a, b, }
    # debug 'Ωdir___9', { a..., data, }
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
    urge()
    urge 'Ωdir__10', idx + 1, rng for rng, idx in merged
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
    urge()
    urge 'Ωdir__11', idx + 1, rng for rng, idx in merged.ranges
    urge()
    ;null
  #.........................................................................................................
  a = { start: 40, end: 49, }; b = { start: 50, end: 59, }; help 'Ωdir__12', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start: 40, end: 50, }; b = { start: 50, end: 59, }; help 'Ωdir__13', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start: 40, end: 51, }; b = { start: 50, end: 59, }; help 'Ωdir__14', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start: 40, end: 52, }; b = { start: 50, end: 59, }; help 'Ωdir__15', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start:  5, end: 10, }; b = { start: 0, end: 4 }; help 'Ωdir__16', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start:  5, end: 10, }; b = { start: 7, end: 8 }; help 'Ωdir__17', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  try
    a = { start:  5, end: 10, }; b = [ { start: 0, end: 4 }, { start: 7, end: 8 }, ]; help 'Ωdir__18', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  catch e then warn 'Ωdir__19', e.message
  info()
  info 'Ωdir__20', IFN.simplify []
  info 'Ωdir__21', IFN.simplify [ { start: 4, end: 20, }, ]
  info 'Ωdir__22', IFN.simplify [ { start: 4, end: 18, }, { start: 19, end: 22, }, ]
  info 'Ωdir__23', IFN.simplify [ { start: 4, end: 19, }, { start: 19, end: 22, }, ]
  info 'Ωdir__24', IFN.simplify [ { start: 4, end: 20, }, { start: 19, end: 22, }, ]
  info 'Ωdir__25', IFN.simplify [ { start: 4, end: 21, }, { start: 19, end: 22, }, ]
  info 'Ωdir__26', IFN.simplify [ { start: 3, end:  9, }, { start:  9, end: 13, }, ]
  info 'Ωdir__27', IFN.simplify [ { start: 3, end:  9, }, { start:  9, end: 13, }, { start: 11, end: 14, }, ] # [{ start: 3, end: 14 }]
  info 'Ωdir__28', IFN.simplify [ { start: 3, end:  9, }, { start: 10, end: 13, }, { start: 11, end: 14, }, ]
  info()
  info 'Ωdir__29', ( ( new Rangeset() ).add()                                                                        ).simplify()
  info 'Ωdir__30', ( ( new Rangeset() ).add { start: 4, end: 20, }                                                   ).simplify()
  info 'Ωdir__31', ( ( new Rangeset() ).add { start: 4, end: 18, }, { start: 19, end: 22, }                          ).simplify()
  info 'Ωdir__32', ( ( new Rangeset() ).add { start: 4, end: 19, }, { start: 19, end: 22, }                          ).simplify()
  info 'Ωdir__33', ( ( new Rangeset() ).add { start: 4, end: 20, }, { start: 19, end: 22, }                          ).simplify()
  info 'Ωdir__34', ( ( new Rangeset() ).add { start: 4, end: 21, }, { start: 19, end: 22, }                          ).simplify()
  info 'Ωdir__35', ( ( new Rangeset() ).add { start: 3, end:  9, }, { start:  9, end: 13, }                          ).simplify()
  info 'Ωdir__36', ( ( new Rangeset() ).add { start: 3, end:  9, }, { start:  9, end: 13, }, { start: 11, end: 14, } ).simplify() # [{ start: 3, end: 14 }]
  info 'Ωdir__37', ( ( new Rangeset() ).add { start: 3, end:  9, }, { start: 10, end: 13, }, { start: 11, end: 14, } ).simplify()
  info()
  info 'Ωdir__38', ( ( new Rangeset() ).add()                                                                        ).simplify()
  info 'Ωdir__39', ( ( new Rangeset() ).add { lo: 4, hi: 19, }                                                       ).simplify()
  info 'Ωdir__40', ( ( new Rangeset() ).add { lo: 4, hi: 17, }, { lo: 19, hi: 21, }                                  ).simplify()
  info 'Ωdir__41', ( ( new Rangeset() ).add { lo: 4, hi: 18, }, { lo: 19, hi: 21, }                                  ).simplify()
  info 'Ωdir__42', ( ( new Rangeset() ).add { lo: 4, hi: 19, }, { lo: 19, hi: 21, }                                  ).simplify()
  info 'Ωdir__43', ( ( new Rangeset() ).add { lo: 4, hi: 20, }, { lo: 19, hi: 21, }                                  ).simplify()
  info 'Ωdir__44', ( ( new Rangeset() ).add { lo: 3, hi:  8, }, { lo:  9, hi: 12, }                                  ).simplify()
  info 'Ωdir__45', ( ( new Rangeset() ).add { lo: 3, hi:  8, }, { lo:  9, hi: 12, }, { lo: 11, hi: 13, }             ).simplify() # [{ lo: 3, hi: 13 }]
  info 'Ωdir__46', ( ( new Rangeset() ).add { lo: 3, hi:  8, }, { lo: 10, hi: 12, }, { lo: 11, hi: 13, }             ).simplify()
  rng_2 = [
    { start:  3, end: 10, data: 2, }
    { start:  9, end: 13, data: 3, }
    { start: 11, end: 14, data: 5, }
    ]
  merge_data_2 = ( a, b ) ->
    # debug 'Ωdir__47', { a, b, } #, { a..., b..., }
    return { a..., data: a.data * b.data, }
  merged = IFN.merge ( create_reducer merge_data_2 ), rng_2 # [{ start: 3, end: 14 }]
  info 'Ωdir__48', rng for rng in merged
  # urge 'Ωdir__49', rng for rng in merged_ft
  # urge()
  ;null

#===========================================================================================================
if module is require.main then do =>
  # demo_dicontinouous_range()
  demo_intervals_fn()
  # debug 'Ωdir__50', '0o' + ( 0o100664 & 0x1ff ).toString 8
  # debug 'Ωdir__51', '0o' + ( 0o100664 & 0x1ff & 0x0100 ).toString 8



