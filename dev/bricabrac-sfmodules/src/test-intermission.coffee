

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
    d = new Run();                  @eq ( Ωimt___1 = -> [ d, d.size, ] ), [ { lo: 0, hi: 0, },  1, ]
    d = new Run 7;                  @eq ( Ωimt___2 = -> [ d, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = new Run 7, 7;               @eq ( Ωimt___3 = -> [ d, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = new Run 7, 12;              @eq ( Ωimt___4 = -> [ d, d.size, ] ), [ { lo: 7, hi: 12, }, 6, ]
    d = new Run { lo: 7, };         @eq ( Ωimt___5 = -> [ d, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = new Run { hi: 7, };         @eq ( Ωimt___6 = -> [ d, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = new Run { lo: 7, hi: 7, };  @eq ( Ωimt___7 = -> [ d, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = new Run { lo: 7, hi: 21, }; @eq ( Ωimt___8 = -> [ d, d.size, ] ), [ { lo: 7, hi: 21, }, 15, ]
    #.......................................................................................................
    @eq ( Ωimt___9 = -> new Run().scatter ), null
    return null

  #---------------------------------------------------------------------------------------------------------
  basic_scatters: ->
    { Run,
      Scatter,                  } = SFMODULES.require_intermission()
    #.......................................................................................................
    do =>
      s = new Scatter { data: { a: 1, } }
      @eq ( Ωimt__10 = -> s ), { data: { a: 1, }, runs: [], }
      @eq ( Ωimt__11 = -> s.is_normalized   ), true
      #.....................................................................................................
      s.add { lo: 1, hi: 1, };          @eq ( Ωimt__12 = -> s.runs.length     ), 1
      s.add 1;                          @eq ( Ωimt__13 = -> s.runs.length     ), 2
      s.add new Run { lo: 1, hi: 1, };  @eq ( Ωimt__14 = -> s.runs.length     ), 3
      #.....................................................................................................
      @eq ( Ωimt__15 = -> s.is_normalized   ), false
      # @eq ( Ωimt__16 = -> s.is_sorted       ), false
      @eq ( Ωimt__17 = -> s.data            ), { a: 1, }
      @eq ( Ωimt__18 = -> s.runs[ 0 ]       ), { lo: 1, hi: 1, }
      @eq ( Ωimt__19 = -> s.runs[ 1 ]       ), { lo: 1, hi: 1, }
      @eq ( Ωimt__20 = -> s.runs[ 2 ]       ), { lo: 1, hi: 1, }
      ;null
    #.......................................................................................................
    do =>
      s = new Scatter { data: { a: 2, }, sort: true, }
      @eq ( Ωimt__21 = -> s.is_normalized   ), true
      # @eq ( Ωimt__22 = -> s.is_sorted       ), false
      s.add { lo: 1, hi: 1, };          @eq ( Ωimt__23 = -> s.runs.length     ), 1; @eq ( Ωimt__24 = -> s.is_normalized ), false
      s.add 1;                          @eq ( Ωimt__25 = -> s.runs.length     ), 2; @eq ( Ωimt__26 = -> s.is_normalized ), false
      s.add new Run { lo: 1, hi: 1, };  @eq ( Ωimt__27 = -> s.runs.length     ), 3; @eq ( Ωimt__28 = -> s.is_normalized ), false
      #.....................................................................................................
      @eq ( Ωimt__29 = -> s.data            ), { a: 2, }
      @eq ( Ωimt__30 = -> s.runs[ 0 ]       ), { lo: 1, hi: 1, }
      @eq ( Ωimt__31 = -> s.runs[ 1 ]       ), { lo: 1, hi: 1, }
      @eq ( Ωimt__32 = -> s.runs[ 2 ]       ), { lo: 1, hi: 1, }
      ;null
    #.......................................................................................................
    do =>
      s = new Scatter { data: { a: 3, }, normalize: true, }
      @eq ( Ωimt__33 = -> s.is_normalized ), true
      s.add { lo: 1, hi: 1, };          @eq ( Ωimt__34 = -> s.runs.length ), 1; @eq ( Ωimt__35 = -> s.is_normalized ), true
      s.add 1;                          @eq ( Ωimt__36 = -> s.runs.length ), 1; @eq ( Ωimt__37 = -> s.is_normalized ), true
      s.add new Run { lo: 1, hi: 1, };  @eq ( Ωimt__38 = -> s.runs.length ), 1; @eq ( Ωimt__39 = -> s.is_normalized ), true
      #.....................................................................................................
      @eq ( Ωimt__40 = -> s.data            ), { a: 3, }
      @eq ( Ωimt__41 = -> s.runs[ 0 ]       ), { lo: 1, hi: 1, }
      ;null
    #.......................................................................................................
    do =>
      s = new Scatter { data: { a: 4, }, normalize: true, }
      @eq ( Ωimt__42 = -> s.is_normalized ), true
      s.add 103;  @eq ( Ωimt__43 = -> s.runs.length ), 1; @eq ( Ωimt__44 = -> s.is_normalized ), true
      s.add 100;  @eq ( Ωimt__45 = -> s.runs.length ), 2; @eq ( Ωimt__46 = -> s.is_normalized ), true
      s.add 101;  @eq ( Ωimt__47 = -> s.runs.length ), 2; @eq ( Ωimt__48 = -> s.is_normalized ), true
      #.....................................................................................................
      debug 'Ωimt__49', run for run in s.runs
      @eq ( Ωimt__50 = -> s.data            ), { a: 4, }
      @eq ( Ωimt__51 = -> s.runs[ 0 ]       ), { lo: 100, hi: 101, }
      @eq ( Ωimt__52 = -> s.runs[ 1 ]       ), { lo: 103, hi: 103, }
      ;null
    #.......................................................................................................
    do =>
      s = new Scatter { normalize: true, }
      @eq ( Ωimt__53 = -> s.is_normalized ), true
      s.add 103, 109;   @eq ( Ωimt__54 = -> s.runs.length ), 1; @eq ( Ωimt__55 = -> s.is_normalized ), true
      s.add 111, 115;   @eq ( Ωimt__56 = -> s.runs.length ), 2; @eq ( Ωimt__57 = -> s.is_normalized ), true
      s.add 110;        @eq ( Ωimt__58 = -> s.runs.length ), 1; @eq ( Ωimt__59 = -> s.is_normalized ), true
      #.....................................................................................................
      @eq ( Ωimt__60 = -> s.runs[ 0 ]       ), { lo: 103, hi: 115, }
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
      @eq ( Ωimt__61 = -> s.has 21       ), false
      @eq ( Ωimt__62 = -> s.has 22       ), false
      @eq ( Ωimt__63 = -> s.has 23       ), false
      @eq ( Ωimt__64 = -> s.has 24       ), false
      @eq ( Ωimt__65 = -> s.has 25       ), true
      @eq ( Ωimt__66 = -> s.has 26       ), true
      @eq ( Ωimt__67 = -> s.has 27       ), true
      @eq ( Ωimt__68 = -> s.has 28       ), true
      @eq ( Ωimt__69 = -> s.has 29       ), true
      @eq ( Ωimt__70 = -> s.has 30       ), true
      @eq ( Ωimt__71 = -> s.has 31       ), false
      @eq ( Ωimt__72 = -> s.has 32       ), true
      @eq ( Ωimt__73 = -> s.has 33       ), true
      @eq ( Ωimt__74 = -> s.has 34       ), true
      @eq ( Ωimt__75 = -> s.has 35       ), true
      @eq ( Ωimt__76 = -> s.has 36       ), true
      @eq ( Ωimt__77 = -> s.has 37       ), true
      @eq ( Ωimt__78 = -> s.has 38       ), true
      @eq ( Ωimt__79 = -> s.has 39       ), true
      @eq ( Ωimt__80 = -> s.has 40       ), true
      @eq ( Ωimt__81 = -> s.has 41       ), false
      @eq ( Ωimt__82 = -> s.has 42       ), false
      @eq ( Ωimt__83 = -> s.has 43       ), false
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
  #     @eq ( Ωimt__84 = -> s.has 21       ), false
  #     @eq ( Ωimt__85 = -> s.has 22       ), false
  #     @eq ( Ωimt__86 = -> s.has 23       ), false
  #     @eq ( Ωimt__87 = -> s.has 24       ), false
  #     @eq ( Ωimt__88 = -> s.has 25       ), true
  #     @eq ( Ωimt__89 = -> s.has 26       ), true
  #     @eq ( Ωimt__90 = -> s.has 27       ), true
  #     @eq ( Ωimt__91 = -> s.has 28       ), true
  #     @eq ( Ωimt__92 = -> s.has 29       ), true
  #     @eq ( Ωimt__93 = -> s.has 30       ), true
  #     @eq ( Ωimt__94 = -> s.has 31       ), false
  #     @eq ( Ωimt__95 = -> s.has 32       ), true
  #     @eq ( Ωimt__96 = -> s.has 33       ), true
  #     @eq ( Ωimt__97 = -> s.has 34       ), true
  #     @eq ( Ωimt__98 = -> s.has 35       ), true
  #     @eq ( Ωimt__99 = -> s.has 36       ), true
  #     @eq ( Ωimt_100 = -> s.has 37       ), true
  #     @eq ( Ωimt_101 = -> s.has 38       ), true
  #     @eq ( Ωimt_102 = -> s.has 39       ), true
  #     @eq ( Ωimt_103 = -> s.has 40       ), true
  #     @eq ( Ωimt_104 = -> s.has 41       ), false
  #     @eq ( Ωimt_105 = -> s.has 42       ), false
  #     @eq ( Ωimt_106 = -> s.has 43       ), false
  #     ;null
  #   #.......................................................................................................
  #   return null

f = ->
#-----------------------------------------------------------------------------------------------------------
sum_of_data = ( a, b ) =>
  data = [ a.data ? [], b.data ? [], ].flat()
  # debug 'Ωimt_107', { a, b, }
  # debug 'Ωimt_108', { a..., data, }
  { a..., data, }
create_reducer = ( fn ) -> ( ranges ) => ranges.reduce( fn );

#===========================================================================================================
demo_intervals_fn = ->
  # debug 'Ωimt_109', ( k for k of IFN ).sort()
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
    urge 'Ωimt_110', idx + 1, rng for rng, idx in merged
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
    urge 'Ωimt_111', idx + 1, rng for rng, idx in merged.ranges
    urge()
    ;null
  #.........................................................................................................
  a = { start: 40, end: 49, }; b = { start: 50, end: 59, }; help 'Ωimt_112', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start: 40, end: 50, }; b = { start: 50, end: 59, }; help 'Ωimt_113', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start: 40, end: 51, }; b = { start: 50, end: 59, }; help 'Ωimt_114', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start: 40, end: 52, }; b = { start: 50, end: 59, }; help 'Ωimt_115', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start:  5, end: 10, }; b = { start: 0, end: 4 }; help 'Ωimt_116', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  a = { start:  5, end: 10, }; b = { start: 7, end: 8 }; help 'Ωimt_117', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  try
    a = { start:  5, end: 10, }; b = [ { start: 0, end: 4 }, { start: 7, end: 8 }, ]; help 'Ωimt_118', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
  catch e then warn 'Ωimt_119', e.message
  info()
  info 'Ωimt_120', IFN.simplify []
  info 'Ωimt_121', IFN.simplify [ { start: 4, end: 20, }, ]
  info 'Ωimt_122', IFN.simplify [ { start: 4, end: 18, }, { start: 19, end: 22, }, ]
  info 'Ωimt_123', IFN.simplify [ { start: 4, end: 19, }, { start: 19, end: 22, }, ]
  info 'Ωimt_124', IFN.simplify [ { start: 4, end: 20, }, { start: 19, end: 22, }, ]
  info 'Ωimt_125', IFN.simplify [ { start: 4, end: 21, }, { start: 19, end: 22, }, ]
  info 'Ωimt_126', IFN.simplify [ { start: 3, end:  9, }, { start:  9, end: 13, }, ]
  info 'Ωimt_127', IFN.simplify [ { start: 3, end:  9, }, { start:  9, end: 13, }, { start: 11, end: 14, }, ] # [{ start: 3, end: 14 }]
  info 'Ωimt_128', IFN.simplify [ { start: 3, end:  9, }, { start: 10, end: 13, }, { start: 11, end: 14, }, ]
  info()
  info 'Ωimt_129', ( ( new Rangeset() ).add()                                                                        ).simplify()
  info 'Ωimt_130', ( ( new Rangeset() ).add { start: 4, end: 20, }                                                   ).simplify()
  info 'Ωimt_131', ( ( new Rangeset() ).add { start: 4, end: 18, }, { start: 19, end: 22, }                          ).simplify()
  info 'Ωimt_132', ( ( new Rangeset() ).add { start: 4, end: 19, }, { start: 19, end: 22, }                          ).simplify()
  info 'Ωimt_133', ( ( new Rangeset() ).add { start: 4, end: 20, }, { start: 19, end: 22, }                          ).simplify()
  info 'Ωimt_134', ( ( new Rangeset() ).add { start: 4, end: 21, }, { start: 19, end: 22, }                          ).simplify()
  info 'Ωimt_135', ( ( new Rangeset() ).add { start: 3, end:  9, }, { start:  9, end: 13, }                          ).simplify()
  info 'Ωimt_136', ( ( new Rangeset() ).add { start: 3, end:  9, }, { start:  9, end: 13, }, { start: 11, end: 14, } ).simplify() # [{ start: 3, end: 14 }]
  info 'Ωimt_137', ( ( new Rangeset() ).add { start: 3, end:  9, }, { start: 10, end: 13, }, { start: 11, end: 14, } ).simplify()
  info()
  info 'Ωimt_138', ( ( new Rangeset() ).add()                                                                        ).simplify()
  info 'Ωimt_139', ( ( new Rangeset() ).add { lo: 4, hi: 19, }                                                       ).simplify()
  info 'Ωimt_140', ( ( new Rangeset() ).add { lo: 4, hi: 17, }, { lo: 19, hi: 21, }                                  ).simplify()
  info 'Ωimt_141', ( ( new Rangeset() ).add { lo: 4, hi: 18, }, { lo: 19, hi: 21, }                                  ).simplify()
  info 'Ωimt_142', ( ( new Rangeset() ).add { lo: 4, hi: 19, }, { lo: 19, hi: 21, }                                  ).simplify()
  info 'Ωimt_143', ( ( new Rangeset() ).add { lo: 4, hi: 20, }, { lo: 19, hi: 21, }                                  ).simplify()
  info 'Ωimt_144', ( ( new Rangeset() ).add { lo: 3, hi:  8, }, { lo:  9, hi: 12, }                                  ).simplify()
  info 'Ωimt_145', ( ( new Rangeset() ).add { lo: 3, hi:  8, }, { lo:  9, hi: 12, }, { lo: 11, hi: 13, }             ).simplify() # [{ lo: 3, hi: 13 }]
  info 'Ωimt_146', ( ( new Rangeset() ).add { lo: 3, hi:  8, }, { lo: 10, hi: 12, }, { lo: 11, hi: 13, }             ).simplify()
  rng_2 = [
    { start:  3, end: 10, data: 2, }
    { start:  9, end: 13, data: 3, }
    { start: 11, end: 14, data: 5, }
    ]
  merge_data_2 = ( a, b ) ->
    # debug 'Ωimt_147', { a, b, } #, { a..., b..., }
    return { a..., data: a.data * b.data, }
  merged = IFN.merge ( create_reducer merge_data_2 ), rng_2 # [{ start: 3, end: 14 }]
  info 'Ωimt_148', rng for rng in merged
  # urge 'Ωimt_149', rng for rng in merged_ft
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



