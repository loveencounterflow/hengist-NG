

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
  whisper }               = GUY.trm.get_loggers 'bricabrac-intermission'
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




#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  basic_runs: ->
    { Run,
      Scatter,                  } = SFMODULES.require_intermission()
    #.......................................................................................................
    @eq ( Ωimt___1 = -> new Run()                   ), { lo: 0, hi: 0, }
    @eq ( Ωimt___2 = -> new Run().scatter           ), null
    @eq ( Ωimt___3 = -> new Run 7                   ), { lo: 7, hi: 7, }
    @eq ( Ωimt___4 = -> new Run 7, 7                ), { lo: 7, hi: 7, }
    @eq ( Ωimt___5 = -> new Run 7, 12               ), { lo: 7, hi: 12, }
    @eq ( Ωimt___6 = -> new Run { lo: 7, }          ), { lo: 7, hi: 7, }
    @eq ( Ωimt___7 = -> new Run { hi: 7, }          ), { lo: 7, hi: 7, }
    @eq ( Ωimt___8 = -> new Run { lo: 7, hi: 7, }   ), { lo: 7, hi: 7, }
    @eq ( Ωimt___9 = -> new Run { lo: 7, hi: 21, }  ), { lo: 7, hi: 21, }
    # # @throws ( Ωbbdbr__10 = -> esql.unquote_name false             ), /expected a text, got a boolean/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  basic_scatters: ->
    { Run,
      Scatter,                  } = SFMODULES.require_intermission()
    #.......................................................................................................
    do =>
      s = new Scatter { data: { a: 1, } }
      @eq ( Ωimt__11 = -> s ), { data: { a: 1, }, runs: [], }
      #.....................................................................................................
      s.add { lo: 1, hi: 1, };          @eq ( Ωimt__12 = -> s.runs.length     ), 1
      s.add 1;                          @eq ( Ωimt__13 = -> s.runs.length     ), 2
      s.add new Run { lo: 1, hi: 1, };  @eq ( Ωimt__14 = -> s.runs.length     ), 3
      #.....................................................................................................
      @eq ( Ωimt__15 = -> s.data            ), { a: 1, }
      @eq ( Ωimt__16 = -> s.runs[ 0 ]       ), { lo: 1, hi: 1, }
      @eq ( Ωimt__17 = -> s.runs[ 1 ]       ), { lo: 1, hi: 1, }
      @eq ( Ωimt__18 = -> s.runs[ 2 ]       ), { lo: 1, hi: 1, }
      ;null
    #.......................................................................................................
    do =>
      s = new Scatter { data: { a: 2, }, sort: true, }
      s.add { lo: 1, hi: 1, };          @eq ( Ωimt__19 = -> s.runs.length     ), 1
      s.add 1;                          @eq ( Ωimt__20 = -> s.runs.length     ), 2
      s.add new Run { lo: 1, hi: 1, };  @eq ( Ωimt__21 = -> s.runs.length     ), 3
      #.....................................................................................................
      @eq ( Ωimt__22 = -> s.data            ), { a: 2, }
      @eq ( Ωimt__23 = -> s.runs[ 0 ]       ), { lo: 1, hi: 1, }
      @eq ( Ωimt__24 = -> s.runs[ 1 ]       ), { lo: 1, hi: 1, }
      @eq ( Ωimt__25 = -> s.runs[ 2 ]       ), { lo: 1, hi: 1, }
      ;null
    #.......................................................................................................
    do =>
      s = new Scatter { data: { a: 3, }, normalize: true, }
      s.add { lo: 1, hi: 1, };          @eq ( Ωimt__26 = -> s.runs.length     ), 1
      s.add 1;                          @eq ( Ωimt__27 = -> s.runs.length     ), 1
      s.add new Run { lo: 1, hi: 1, };  @eq ( Ωimt__28 = -> s.runs.length     ), 1
      #.....................................................................................................
      @eq ( Ωimt__29 = -> s.data            ), { a: 3, }
      @eq ( Ωimt__30 = -> s.runs[ 0 ]       ), { lo: 1, hi: 1, }
      ;null
    #.......................................................................................................
    do =>
      s = new Scatter { data: { a: 4, }, normalize: true, }
      s.add 103;  @eq ( Ωimt__31 = -> s.runs.length     ), 1
      s.add 100;  @eq ( Ωimt__32 = -> s.runs.length     ), 2
      s.add 101;  @eq ( Ωimt__33 = -> s.runs.length     ), 2
      #.....................................................................................................
      debug 'Ωimt__34', run for run in s.runs
      @eq ( Ωimt__35 = -> s.data            ), { a: 4, }
      @eq ( Ωimt__36 = -> s.runs[ 0 ]       ), { lo: 100, hi: 101, }
      @eq ( Ωimt__37 = -> s.runs[ 1 ]       ), { lo: 103, hi: 103, }
      ;null
    #.......................................................................................................
    do =>
      s = new Scatter { normalize: true, }
      s.add 103, 109;   @eq ( Ωimt__38 = -> s.runs.length     ), 1
      s.add 111, 115;   @eq ( Ωimt__39 = -> s.runs.length     ), 2
      s.add 110;        @eq ( Ωimt__40 = -> s.runs.length     ), 1
      #.....................................................................................................
      @eq ( Ωimt__41 = -> s.runs[ 0 ]       ), { lo: 103, hi: 115, }
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  containment: ->
    { Run,
      Scatter,                  } = SFMODULES.require_intermission()
    #.......................................................................................................
    do =>
      s = new Scatter()
      s.add 25, 30
      s.add 32, 40
      @eq ( Ωimt__42 = -> s.has 21       ), false
      @eq ( Ωimt__43 = -> s.has 22       ), false
      @eq ( Ωimt__44 = -> s.has 23       ), false
      @eq ( Ωimt__45 = -> s.has 24       ), false
      @eq ( Ωimt__46 = -> s.has 25       ), true
      @eq ( Ωimt__47 = -> s.has 26       ), true
      @eq ( Ωimt__48 = -> s.has 27       ), true
      @eq ( Ωimt__49 = -> s.has 28       ), true
      @eq ( Ωimt__50 = -> s.has 29       ), true
      @eq ( Ωimt__51 = -> s.has 30       ), true
      @eq ( Ωimt__52 = -> s.has 31       ), false
      @eq ( Ωimt__53 = -> s.has 32       ), true
      @eq ( Ωimt__54 = -> s.has 33       ), true
      @eq ( Ωimt__55 = -> s.has 34       ), true
      @eq ( Ωimt__56 = -> s.has 35       ), true
      @eq ( Ωimt__57 = -> s.has 36       ), true
      @eq ( Ωimt__58 = -> s.has 37       ), true
      @eq ( Ωimt__59 = -> s.has 38       ), true
      @eq ( Ωimt__60 = -> s.has 39       ), true
      @eq ( Ωimt__61 = -> s.has 40       ), true
      @eq ( Ωimt__62 = -> s.has 41       ), false
      @eq ( Ωimt__63 = -> s.has 42       ), false
      @eq ( Ωimt__64 = -> s.has 43       ), false
      ;null
    #.......................................................................................................
    return null

  # #---------------------------------------------------------------------------------------------------------
  # gapped_scatters: ->
  #   { Run,
  #     Scatter,                  } = SFMODULES.require_intermission()
  #   #.......................................................................................................
  #   do =>
  #     s = new Scatter()
  #     s.subtract i for i in [ 0 .. 99 ] when ( i %% 2 ) is 0
  #     s.add 25, 30
  #     s.add 32, 40
  #     @eq ( Ωimt__65 = -> s.has 21       ), false
  #     @eq ( Ωimt__66 = -> s.has 22       ), false
  #     @eq ( Ωimt__67 = -> s.has 23       ), false
  #     @eq ( Ωimt__68 = -> s.has 24       ), false
  #     @eq ( Ωimt__69 = -> s.has 25       ), true
  #     @eq ( Ωimt__70 = -> s.has 26       ), true
  #     @eq ( Ωimt__71 = -> s.has 27       ), true
  #     @eq ( Ωimt__72 = -> s.has 28       ), true
  #     @eq ( Ωimt__73 = -> s.has 29       ), true
  #     @eq ( Ωimt__74 = -> s.has 30       ), true
  #     @eq ( Ωimt__75 = -> s.has 31       ), false
  #     @eq ( Ωimt__76 = -> s.has 32       ), true
  #     @eq ( Ωimt__77 = -> s.has 33       ), true
  #     @eq ( Ωimt__78 = -> s.has 34       ), true
  #     @eq ( Ωimt__79 = -> s.has 35       ), true
  #     @eq ( Ωimt__80 = -> s.has 36       ), true
  #     @eq ( Ωimt__81 = -> s.has 37       ), true
  #     @eq ( Ωimt__82 = -> s.has 38       ), true
  #     @eq ( Ωimt__83 = -> s.has 39       ), true
  #     @eq ( Ωimt__84 = -> s.has 40       ), true
  #     @eq ( Ωimt__85 = -> s.has 41       ), false
  #     @eq ( Ωimt__86 = -> s.has 42       ), false
  #     @eq ( Ωimt__87 = -> s.has 43       ), false
  #     ;null
  #   #.......................................................................................................
  #   return null

f = ->
#-----------------------------------------------------------------------------------------------------------
sum_of_data = ( a, b ) =>
  data = [ a.data ? [], b.data ? [], ].flat()
  # debug 'Ωimt__88', { a, b, }
  # debug 'Ωimt__89', { a..., data, }
  { a..., data, }
create_reducer = ( fn ) -> ( ranges ) => ranges.reduce( fn );

#===========================================================================================================
demo_intervals_fn = ->
  # debug 'Ωimt__90', ( k for k of IFN ).sort()
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
    urge 'Ωimt__91', idx + 1, rng for rng, idx in merged
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
    urge 'Ωimt__92', idx + 1, rng for rng, idx in merged.ranges
    urge()
    ;null
  #.........................................................................................................
  a = { start: 40, end: 49, }; b = { start: 50, end: 59, }; help 'Ωimt__93', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start: 40, end: 50, }; b = { start: 50, end: 59, }; help 'Ωimt__94', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start: 40, end: 51, }; b = { start: 50, end: 59, }; help 'Ωimt__95', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start: 40, end: 52, }; b = { start: 50, end: 59, }; help 'Ωimt__96', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start:  5, end: 10, }; b = { start: 0, end: 4 }; help 'Ωimt__97', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start:  5, end: 10, }; b = { start: 7, end: 8 }; help 'Ωimt__98', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  try
    a = { start:  5, end: 10, }; b = [ { start: 0, end: 4 }, { start: 7, end: 8 }, ]; help 'Ωimt__99', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  catch e then warn 'Ωimt_100', e.message
  info()
  info 'Ωimt_101', IFN.simplify []
  info 'Ωimt_102', IFN.simplify [ { start: 4, end: 20, }, ]
  info 'Ωimt_103', IFN.simplify [ { start: 4, end: 18, }, { start: 19, end: 22, }, ]
  info 'Ωimt_104', IFN.simplify [ { start: 4, end: 19, }, { start: 19, end: 22, }, ]
  info 'Ωimt_105', IFN.simplify [ { start: 4, end: 20, }, { start: 19, end: 22, }, ]
  info 'Ωimt_106', IFN.simplify [ { start: 4, end: 21, }, { start: 19, end: 22, }, ]
  info 'Ωimt_107', IFN.simplify [ { start: 3, end:  9, }, { start:  9, end: 13, }, ]
  info 'Ωimt_108', IFN.simplify [ { start: 3, end:  9, }, { start:  9, end: 13, }, { start: 11, end: 14, }, ] # [{ start: 3, end: 14 }]
  info 'Ωimt_109', IFN.simplify [ { start: 3, end:  9, }, { start: 10, end: 13, }, { start: 11, end: 14, }, ]
  info()
  info 'Ωimt_110', ( ( new Rangeset() ).add()                                                                        ).simplify()
  info 'Ωimt_111', ( ( new Rangeset() ).add { start: 4, end: 20, }                                                   ).simplify()
  info 'Ωimt_112', ( ( new Rangeset() ).add { start: 4, end: 18, }, { start: 19, end: 22, }                          ).simplify()
  info 'Ωimt_113', ( ( new Rangeset() ).add { start: 4, end: 19, }, { start: 19, end: 22, }                          ).simplify()
  info 'Ωimt_114', ( ( new Rangeset() ).add { start: 4, end: 20, }, { start: 19, end: 22, }                          ).simplify()
  info 'Ωimt_115', ( ( new Rangeset() ).add { start: 4, end: 21, }, { start: 19, end: 22, }                          ).simplify()
  info 'Ωimt_116', ( ( new Rangeset() ).add { start: 3, end:  9, }, { start:  9, end: 13, }                          ).simplify()
  info 'Ωimt_117', ( ( new Rangeset() ).add { start: 3, end:  9, }, { start:  9, end: 13, }, { start: 11, end: 14, } ).simplify() # [{ start: 3, end: 14 }]
  info 'Ωimt_118', ( ( new Rangeset() ).add { start: 3, end:  9, }, { start: 10, end: 13, }, { start: 11, end: 14, } ).simplify()
  info()
  info 'Ωimt_119', ( ( new Rangeset() ).add()                                                                        ).simplify()
  info 'Ωimt_120', ( ( new Rangeset() ).add { lo: 4, hi: 19, }                                                       ).simplify()
  info 'Ωimt_121', ( ( new Rangeset() ).add { lo: 4, hi: 17, }, { lo: 19, hi: 21, }                                  ).simplify()
  info 'Ωimt_122', ( ( new Rangeset() ).add { lo: 4, hi: 18, }, { lo: 19, hi: 21, }                                  ).simplify()
  info 'Ωimt_123', ( ( new Rangeset() ).add { lo: 4, hi: 19, }, { lo: 19, hi: 21, }                                  ).simplify()
  info 'Ωimt_124', ( ( new Rangeset() ).add { lo: 4, hi: 20, }, { lo: 19, hi: 21, }                                  ).simplify()
  info 'Ωimt_125', ( ( new Rangeset() ).add { lo: 3, hi:  8, }, { lo:  9, hi: 12, }                                  ).simplify()
  info 'Ωimt_126', ( ( new Rangeset() ).add { lo: 3, hi:  8, }, { lo:  9, hi: 12, }, { lo: 11, hi: 13, }             ).simplify() # [{ lo: 3, hi: 13 }]
  info 'Ωimt_127', ( ( new Rangeset() ).add { lo: 3, hi:  8, }, { lo: 10, hi: 12, }, { lo: 11, hi: 13, }             ).simplify()
  rng_2 = [
    { start:  3, end: 10, data: 2, }
    { start:  9, end: 13, data: 3, }
    { start: 11, end: 14, data: 5, }
    ]
  merge_data_2 = ( a, b ) ->
    # debug 'Ωimt_128', { a, b, } #, { a..., b..., }
    return { a..., data: a.data * b.data, }
  merged = IFN.merge ( create_reducer merge_data_2 ), rng_2 # [{ start: 3, end: 14 }]
  info 'Ωimt_129', rng for rng in merged
  # urge 'Ωimt_130', rng for rng in merged_ft
  # urge()
  ;null


#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: true, report_checks: true, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { dbric_std_generate_series: tests.dbric_std_generate_series, }



