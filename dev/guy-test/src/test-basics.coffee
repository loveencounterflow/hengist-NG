

#===========================================================================================================
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
  whisper }               = GUY.trm.get_loggers 'intertype/test-basics'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
{ after }                 = GUY.async
#-----------------------------------------------------------------------------------------------------------
GTNG                      = require '../../../apps/guy-test-NG'
{ _TMP_test
  Test                  } = GTNG
  # equals
  # pass
  # fail
  # test
  # eq
  # throws
  # async_test
  # async_eq
  # async_throws          } = GTNG
#-----------------------------------------------------------------------------------------------------------
types                     = require '../../../apps/intertype'
{ isa
  type_of
  validate              } = types


#===========================================================================================================
@TT =

  #=========================================================================================================
  Interface:

    #-------------------------------------------------------------------------------------------------------
    module_instance_and_assumptions_have_equals_method: ->
      @eq ( Ωmodule___1       = -> type_of GTNG.equals            ), 'function'
      @eq ( Ωinstance___2     = -> type_of ( new Test() ).equals  ), 'function'
      @eq ( Ωassumptions___3  = -> type_of @equals                ), 'function'
      return null

  #=========================================================================================================
  Equality:

    #-------------------------------------------------------------------------------------------------------
    basics: ->
      @eq ( Ω___4  = -> @equals 1.23456, 1.23456                                 ), true
      @eq ( Ω___5  = -> @equals 1.23456000000000000001, 1.23456000000000000002   ), true
      @eq ( Ω___6  = -> @equals 1.23456, 1.23457                                 ), false
      @eq ( Ω___7  = -> @equals '1.23456', '1.23457'                             ), false
      @eq ( Ω___8  = -> @equals '1.23457', '1.23457'                             ), true
      @eq ( Ω___9  = -> @equals {}, {}                                           ), true
      @eq ( Ω__10  = -> @equals { lst: [ 7, 8, 9, ]}, { lst: [ 7, 8, 9, ], }     ), true
      return null

    #-------------------------------------------------------------------------------------------------------
    set_equality_by_value: ->
      #.....................................................................................................
      do =>
        @eq ( Ω__11 = -> 'abc'                    ), 'abc'
        return null
      #.....................................................................................................
      do =>
        t2 = new Test { ordered_sets: false, ordered_maps: false, }
        result    = [ 1, [ 2 ], ]
        matcher1  = [ 1, [ 2 ], ]
        matcher2  = [ 1, [ 3 ], ]
        @eq ( Ω__12 = -> t2.equals result, matcher1 ), true
        @eq ( Ω__13 = -> t2.equals result, matcher2 ), false
        return null
      #.....................................................................................................
      do =>
        t2 = new Test { ordered_sets: false, ordered_maps: false, }
        result    = new Set [ 1, 2, ]
        matcher1  = new Set [ 1, 2, ]
        matcher2  = new Set [ 1, 3, ]
        @eq ( Ω__14 = -> t2.equals result, matcher1 ), true
        @eq ( Ω__15 = -> t2.equals result, matcher2 ), false ### !!!!!!!!!!!!!!!!!!!!!!!!!!!! ###
        return null
      #.....................................................................................................
      do =>
        t2 = new Test { ordered_sets: false, ordered_maps: false, }
        result    = new Set [ 1, [ 2 ], ]
        matcher1  = new Set [ 1, [ 2 ], ]
        matcher2  = new Set [ 1, [ 3 ], ]
        @eq ( Ω__16 = -> t2.equals result, matcher1 ), true
        @eq ( Ω__17 = -> t2.equals result, matcher2 ), false ### !!!!!!!!!!!!!!!!!!!!!!!!!!!! ###
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    map_equality_by_value: ->
      #.....................................................................................................
      do =>
        t2 = new Test { ordered_sets: false, ordered_maps: false, }
        { _types  } = require '../../../apps/guy-test-NG'
        result      = new Map [ [ 'a', [ 1, 2, ], ], [ 'b', [ 1, 2, ], ], ]
        matcher1    = new Map [ [ 'a', [ 1, 2, ], ], [ 'b', [ 1, 2, ], ], ]
        matcher2    = new Map [ [ 'a', [ 1, 3, ], ], [ 'b', [ 1, 3, ], ], ]
        @eq ( Ωmeqbv__18 = -> _types.type_of result     ), 'map'
        @eq ( Ωmeqbv__19 = -> t2.equals result, matcher1  ), true
        @eq ( Ωmeqbv__20 = -> t2.equals result, matcher2  ), false ### !!!!!!!!!!!!!!!!!!!!!!!!!!!! ###
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    can_configure_eq_of_plusminus_zero: ->
      #.....................................................................................................
      do =>
        t2 = new Test { signed_zero: false, }
        @eq ( Ω__21 = -> t2.equals +0, +0 ), true
        @eq ( Ω__22 = -> t2.equals -0, -0 ), true
        @eq ( Ω__23 = -> t2.equals +0, -0 ), true
        @eq ( Ω__24 = -> t2.equals -0, +0 ), true
      #.....................................................................................................
      do =>
        t2 = new Test { signed_zero: true, }
        @eq ( Ω__25 = -> t2.equals +0, +0 ), true
        @eq ( Ω__26 = -> t2.equals -0, -0 ), true
        @eq ( Ω__27 = -> t2.equals +0, -0 ), false
        @eq ( Ω__28 = -> t2.equals -0, +0 ), false
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    can_configure_ordered_objects: ->
      a = 123
      b = 456
      #.....................................................................................................
      do =>
        t2 = new Test { ordered_objects: false, }
        @eq ( Ω__29 = -> t2.equals { a, b, }, { a, b, } ), true
        @eq ( Ω__30 = -> t2.equals { a, b, }, { b, a, } ), true
      #.....................................................................................................
      do =>
        t2 = new Test { ordered_objects: true, }
        @eq ( Ω__31 = -> t2.equals { a, b, }, { a, b, } ), true
        @eq ( Ω__32 = -> t2.equals { a, b, }, { b, a, } ), false
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    can_configure_ordered_sets: ->
      a = 123
      b = 456
      #.....................................................................................................
      do =>
        t2 = new Test { ordered_sets: false, }
        @eq ( Ω__33 = -> t2.equals ( new Set 'ab' ), ( new Set 'ab' ) ), true
        @eq ( Ω__34 = -> t2.equals ( new Set 'ab' ), ( new Set 'ba' ) ), true
      #.....................................................................................................
      do =>
        t2 = new Test { ordered_sets: true, }
        @eq ( Ω__35 = -> t2.equals ( new Set 'ab' ), ( new Set 'ab' ) ), true
        @eq ( Ω__36 = -> t2.equals ( new Set 'ab' ), ( new Set 'ba' ) ), false
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    can_configure_ordered_maps: ->
      a = 123
      b = 456
      #.....................................................................................................
      do =>
        t2 = new Test { ordered_maps: false, }
        @eq ( Ω__37 = -> t2.equals ( new Map [ [ 'a', 1, ], [ 'b', 2, ], ] ), ( new Map [ [ 'a', 1, ], [ 'b', 2, ], ] ) ), true
        @eq ( Ω__38 = -> t2.equals ( new Map [ [ 'a', 1, ], [ 'b', 2, ], ] ), ( new Map [ [ 'b', 2, ], [ 'a', 1, ], ] ) ), true
      #.....................................................................................................
      do =>
        t2 = new Test { ordered_maps: true, }
        @eq ( Ω__39 = -> t2.equals ( new Map [ [ 'a', 1, ], [ 'b', 2, ], ] ), ( new Map [ [ 'a', 1, ], [ 'b', 2, ], ] ) ), true
        @eq ( Ω__40 = -> t2.equals ( new Map [ [ 'a', 1, ], [ 'b', 2, ], ] ), ( new Map [ [ 'b', 2, ], [ 'a', 1, ], ] ) ), false
      #.....................................................................................................
      return null

  #---------------------------------------------------------------------------------------------------------
  pass_and_fail: ->
    t2 = new Test()
    #.......................................................................................................
    @eq ( Ω__41 = -> type_of t2.pass ), 'function'
    @eq ( Ω__42 = -> type_of t2.fail ), 'function'
    tasks =
      paf_a: ->
        @pass 'paf_1', "this is good"
        @fail 'paf_2', "this is bad"
        @pass 'paf_3'
        @fail 'paf_4'
    t2.test tasks
    t2.report { prefix: "TEST RESULT", }
    @eq ( Ω__43 = -> t2.stats[ '*'           ].passes  ), 2
    @eq ( Ω__44 = -> t2.stats[ 'paf_a.paf_1' ].passes  ), 1
    @eq ( Ω__45 = -> t2.stats[ 'paf_a.paf_2' ].passes  ), 0
    @eq ( Ω__46 = -> t2.stats[ 'paf_a.paf_3' ].passes  ), 1
    @eq ( Ω__47 = -> t2.stats[ 'paf_a.paf_4' ].passes  ), 0
    @eq ( Ω__48 = -> t2.stats[ '*'           ].fails   ), 2
    @eq ( Ω__49 = -> t2.stats[ 'paf_a.paf_1' ].fails   ), 0
    @eq ( Ω__50 = -> t2.stats[ 'paf_a.paf_2' ].fails   ), 1
    @eq ( Ω__51 = -> t2.stats[ 'paf_a.paf_3' ].fails   ), 0
    @eq ( Ω__52 = -> t2.stats[ 'paf_a.paf_4' ].fails   ), 1
    #.......................................................................................................
    done?()

  #---------------------------------------------------------------------------------------------------------
  asynchronous_throws: ->
    FS = require 'node:fs/promises'
    t2 = new Test()
    #.......................................................................................................
    fetch_filesize = ( path ) -> ( await FS.stat path ).size
    #.......................................................................................................
    # await async_throws  T, ( Ω__53 = -> await fetch_filesize __filename   )
    # await async_throws  T, ( Ω__54 = -> await fetch_filesize __filename   ), "foobar"
    # await async_throws  T, ( Ω__55 = -> await fetch_filesize __filename   ), /no such file/
    #.......................................................................................................
    await t2.async_throws ( Ω__56 = -> await fetch_filesize 'nosuchpath' ), "foobar"
    await t2.async_throws ( Ω__57 = -> await fetch_filesize 'nosuchpath' ), /no such file/
    await t2.async_throws ( Ω__58 = -> await fetch_filesize 'nosuchpath' )
    # await do =>
    #   await async_throws ( Ω__59 = ->
    #     await t2.async_throws ( Ω__60 = -> await fetch_filesize 'nosuchpath' ), "foobar"
    #     ), /no such file .* doesn't match 'foobar'/
    #.......................................................................................................
    # await async_throws  T, ( Ω__61 = -> await fetch_filesize 'nosuchpath' )
    # await async_throws  T, ( Ω__62 = -> await fetch_filesize 'nosuchpath' ), /no such file/
    #.......................................................................................................
    done?()

  #---------------------------------------------------------------------------------------------------------
  asynchronous_errors: ->
    FS = require 'node:fs/promises'
    #.......................................................................................................
    fetch_filesize = ( path ) -> ( await FS.stat path ).size
    #.......................................................................................................
    produce_filesize = ( path ) =>
      try
        filesize  = await fetch_filesize path
        urge "Ω__63", { filesize, }
      catch error
        warn "Ω__64", error
      return null
    #.......................................................................................................
    echo '-------------------'
    # try await produce_filesize 'nosuchpath' catch error then warn 'Ω__65', error.message
    await produce_filesize 'nosuchpath'
    echo '-------------------'
    await produce_filesize __filename
    echo '-------------------'
    # await async_throws ( Ω__66 = -> await fetch_filesize __filename ), '???'
    await @async_throws ( Ω__67 = -> await fetch_filesize 'nosuchpath' ), /no such file/
    echo '-------------------'
    #.......................................................................................................
    done?()

  #---------------------------------------------------------------------------------------------------------
  test_cfg: ->
    #.......................................................................................................
    do =>
      t2 = new Test()
      @eq ( Ω__68 = -> Object.isFrozen t2.cfg  ), true
      @eq ( Ω__69 = -> t2.cfg.auto_reset       ), false
      @eq ( Ω__70 = -> t2.cfg.show_report      ), true
      @eq ( Ω__71 = -> t2.cfg.show_results     ), true
      @eq ( Ω__72 = -> t2.cfg.show_fails       ), true
      @eq ( Ω__73 = -> t2.cfg.show_passes      ), true
      @eq ( Ω__74 = -> t2.cfg.throw_on_error   ), false
      @eq ( Ω__75 = -> t2.cfg.throw_on_fail    ), false
      @eq ( Ω__76 = -> t2.cfg.message_width    ), 300
      return null
    #.......................................................................................................
    do =>
      t2 = new Test {}
      @eq ( Ω__77 = -> Object.isFrozen t2.cfg  ), true
      @eq ( Ω__78 = -> t2.cfg.auto_reset       ), false
      @eq ( Ω__79 = -> t2.cfg.show_report      ), true
      @eq ( Ω__80 = -> t2.cfg.show_results     ), true
      @eq ( Ω__81 = -> t2.cfg.show_fails       ), true
      @eq ( Ω__82 = -> t2.cfg.show_passes      ), true
      @eq ( Ω__83 = -> t2.cfg.throw_on_error   ), false
      @eq ( Ω__84 = -> t2.cfg.throw_on_fail    ), false
      @eq ( Ω__85 = -> t2.cfg.message_width    ), 300
      return null
    #.......................................................................................................
    do =>
      t2 = new Test { message_width: 30, throw_on_error: true, }
      @eq ( Ω__86 = -> Object.isFrozen t2.cfg  ), true
      @eq ( Ω__87 = -> t2.cfg.auto_reset       ), false
      @eq ( Ω__88 = -> t2.cfg.show_report      ), true
      @eq ( Ω__89 = -> t2.cfg.show_results     ), true
      @eq ( Ω__90 = -> t2.cfg.show_fails       ), true
      @eq ( Ω__91 = -> t2.cfg.show_passes      ), true
      @eq ( Ω__92 = -> t2.cfg.throw_on_error   ), true
      @eq ( Ω__93 = -> t2.cfg.throw_on_fail    ), false
      @eq ( Ω__94 = -> t2.cfg.message_width    ), 30
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  can_throw_on_fail: ->
    #.......................................................................................................
    do =>
      ### ensure that `Test` instance complains when no error is thrown inside a `throws()` check: ###
      t2 = new Test { throw_on_error: false, show_report: false, prefix: '**T2_1**', }
      t2.test ctof_1: ->
        @throws ( ctof_2 = -> 32 ), /expected an error/
      @eq ( Ω__95 = -> t2.stats    ), { '*': { passes: 0, fails: 1 }, 'ctof_1.ctof_2': { passes: 0, fails: 1 } }
      @eq ( Ω__96 = -> t2.warnings ), { 'ctof_1.ctof_2': [ '(noerr) expected an error but none was thrown' ] }
      return null
    #.......................................................................................................
    do =>
      t2 = new Test { throw_on_error: false, throw_on_fail: true, show_report: false, prefix: '**T2_2**', }
      @throws ( ctof_5 = -> t2.eq ( ctof_6 = -> 14 ), 15 ), /neq:/
      # @throws ( Ω__97 = -> t2.eq ( xy1 = -> 14 ), 15 ), /---/
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  TT3:
    assumptions: ( ctx ) ->
      t2 = new Test { show_report: false, }
      #.....................................................................................................
      await t2.async_test assumptions_task: ->
        line = '-'.repeat 108
        echo line; @eq ( dat_1 = -> 32 ), 32
        echo line; @eq ( dat_2 = -> 32 ), 33
        echo line; @eq ( dat_3 = -> throw new Error "fine" )
        echo line; @pass 'dat_4', 'test', "all fine"
        echo line; @pass 'dat_5', 'test'
        echo line; @fail 'dat_6', 'test', "all fine"
        echo line; @fail 'dat_7', 'test'
        echo line; @throws ( dat_8 = -> 'oops' ), /fine/
        echo line; @throws ( dat_9 = -> throw new Error "this is actually fine 1" ), /fine/
        echo line; @throws ( dat_10 = -> throw new Error "this is actually fine 2" ), /what/
        echo line; @throws ( dat_11 = -> throw new Error "this is actually fine 3" ), "not this"
        echo line; await @async_throws ( dat_12 = -> throw new Error "this is actually fine 4" )
        echo line; await @async_throws ( dat_13 = -> throw new Error "this is actually fine 5" ), /fine/
        echo line; await @async_throws ( dat_14 = -> throw new Error "this is actually fine 6" ), /not this/
        echo line; await @async_throws ( dat_15 = -> after 0.1, => await throw new Error "this is actually fine 7" ), /fine/
        echo line; await @async_throws ( dat_16 = -> after 0.1, => await throw new Error "this is actually fine 9" ), /what/
        echo line; await @async_throws ( dat_17 = -> after 0.1, => await throw new Error "this is actually fine 10" ), "not this"
        echo line; await @async_eq ( dat_18 = -> after 0, => await 32 ), 32
        echo line; await @async_eq ( dat_19 = -> after 0, => await 32 ), 33
        echo line; await @async_eq ( dat_20 = -> after 0, => await throw new Error "fine" )
      #.....................................................................................................
      @eq ( Ω__98 = -> t2.stats[ '*'                       ] ), { passes: 8, fails: 12 }
      @eq ( Ω__99 = -> t2.stats[ 'assumptions_task.dat_1'  ] ), { passes: 1, fails: 0 }
      @eq ( Ω_100 = -> t2.stats[ 'assumptions_task.dat_2'  ] ), { passes: 0, fails: 1 }
      @eq ( Ω_101 = -> t2.stats[ 'assumptions_task.dat_3'  ] ), { passes: 0, fails: 1 }
      @eq ( Ω_102 = -> t2.stats[ 'assumptions_task.dat_4'  ] ), { passes: 1, fails: 0 }
      @eq ( Ω_103 = -> t2.stats[ 'assumptions_task.dat_5'  ] ), { passes: 1, fails: 0 }
      @eq ( Ω_104 = -> t2.stats[ 'assumptions_task.dat_6'  ] ), { passes: 0, fails: 1 }
      @eq ( Ω_105 = -> t2.stats[ 'assumptions_task.dat_7'  ] ), { passes: 0, fails: 1 }
      @eq ( Ω_106 = -> t2.stats[ 'assumptions_task.dat_8'  ] ), { passes: 0, fails: 1 }
      @eq ( Ω_107 = -> t2.stats[ 'assumptions_task.dat_9'  ] ), { passes: 1, fails: 0 }
      @eq ( Ω_108 = -> t2.stats[ 'assumptions_task.dat_10' ] ), { passes: 0, fails: 1 }
      @eq ( Ω_109 = -> t2.stats[ 'assumptions_task.dat_11' ] ), { passes: 0, fails: 1 }
      @eq ( Ω_110 = -> t2.stats[ 'assumptions_task.dat_12' ] ), { passes: 1, fails: 0 }
      @eq ( Ω_111 = -> t2.stats[ 'assumptions_task.dat_13' ] ), { passes: 1, fails: 0 }
      @eq ( Ω_112 = -> t2.stats[ 'assumptions_task.dat_14' ] ), { passes: 0, fails: 1 }
      @eq ( Ω_113 = -> t2.stats[ 'assumptions_task.dat_15' ] ), { passes: 1, fails: 0 }
      @eq ( Ω_114 = -> t2.stats[ 'assumptions_task.dat_16' ] ), { passes: 0, fails: 1 }
      @eq ( Ω_115 = -> t2.stats[ 'assumptions_task.dat_17' ] ), { passes: 0, fails: 1 }
      @eq ( Ω_116 = -> t2.stats[ 'assumptions_task.dat_18' ] ), { passes: 1, fails: 0 }
      @eq ( Ω_117 = -> t2.stats[ 'assumptions_task.dat_19' ] ), { passes: 0, fails: 1 }
      @eq ( Ω_118 = -> t2.stats[ 'assumptions_task.dat_20' ] ), { passes: 0, fails: 1 }
      #.....................................................................................................
      return null

  #---------------------------------------------------------------------------------------------------------
  demo_for_readme: ->
    #.......................................................................................................
    my_math_lib =
      mul: ( a, b ) -> a * b
      add: ( a, b ) -> a + b
    #.......................................................................................................
    taskgroup_A =
      test_1: ->
      better_use_meaningful_names: ->
        @eq ( t__20 = -> my_math_lib.mul 3, 4 ), 12
        @eq ( t__21 = -> my_math_lib.add 3, 4 ), 7
      subgroup:
        foo: ->
        bar: ->
    taskgroup_B = {}
    ( new Test() ).test { taskgroup_A, taskgroup_B, }

# @foobar = ->
#   debug 'Ω_119'
#   @eq ( Ω_120 = -> 1 ), 1
#   return null

#===========================================================================================================
if module is require.main then await do =>
  cfg = { throw_on_error: true, }
  cfg = { throw_on_error: false, }
  await ( new Test cfg ).async_test {
    TT: @TT,
    # Interface:  @TT.Interface,
    # Equality:   @TT.Equality,
    # set_equality_by_value: @TT.Equality.set_equality_by_value,
    }
  # await ( new Test cfg ).async_test @TT
  # ( new Test cfg ).test @TT.pass_and_fail
  return null

