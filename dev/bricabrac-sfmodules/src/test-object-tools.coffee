

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
  whisper }               = GUY.trm.get_loggers 'test-object-tools'
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
# { f }                     = require '../../../apps/effstring'
# write                     = ( p ) -> process.stdout.write p
# { nfa }                   = require '../../../apps/normalize-function-arguments'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
# FS                        = require 'node:fs'
# PATH                      = require 'node:path'



#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  module_exports: ->
    { type_of,                } = SFMODULES.unstable.require_type_of()
    #.......................................................................................................
    @eq ( Ωot___1 = -> type_of SFMODULES.unstable.require_clean_assign          ), 'function'
    @eq ( Ωot___2 = -> type_of SFMODULES.unstable.require_pick                  ), 'function'
    @eq ( Ωot___3 = -> type_of SFMODULES.unstable.require_remap                 ), 'function'
    @eq ( Ωot___4 = -> type_of SFMODULES.unstable.require_get_prototype_chain   ), 'function'
    # { walk_buffers_with_positions,
    #   walk_lines_with_positions, } = SFMODULES.unstable.require_fast_linereader()
    #.......................................................................................................
    # @throws ( Ωot___5 = -> esql.unquote_name ''                ), /expected a name/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  get_prototype_chain: ->
    { type_of,                } = SFMODULES.unstable.require_type_of()
    #.......................................................................................................
    { get_prototype_chain,
      get_all_in_prototype_chain, } = SFMODULES.unstable.require_get_prototype_chain()
    #.......................................................................................................
    class A
      @words = [ 'a', 'French', 'dictionary', ]
    class B extends A
      @words = [ 'the', 'British', 'gardener', ]
    #.......................................................................................................
    prop_A    = Object.getPrototypeOf A
    prop_B    = Object.getPrototypeOf B
    null_obj  = Object.create null
    #.......................................................................................................
    @eq ( Ωot___6 = -> get_prototype_chain null           ), []
    @eq ( Ωot___7 = -> get_prototype_chain undefined      ), []
    @eq ( Ωot___8 = -> get_prototype_chain {}             ), [ {}, null_obj, ]
    @eq ( Ωot___9 = -> get_prototype_chain A              ), [ A, prop_A, null_obj, ]
    @eq ( Ωot__10 = -> get_prototype_chain B              ), [ B, prop_B, prop_A, null_obj, ]
    @eq ( Ωot__11 = -> get_prototype_chain new A()        ), [ {}, {}, null_obj, ]
    @eq ( Ωot__12 = -> get_prototype_chain new B()        ), [ {}, {}, {}, null_obj, ]
    #.......................................................................................................
    @eq ( Ωot__13 = -> get_all_in_prototype_chain B,                        'words' ), [ [ 'the', 'British', 'gardener' ], [ 'a', 'French', 'dictionary' ] ]
    @eq ( Ωot__14 = -> get_all_in_prototype_chain ( new B() ).constructor,  'words' ), [ [ 'the', 'British', 'gardener' ], [ 'a', 'French', 'dictionary' ] ]
    @eq ( Ωot__15 = -> get_all_in_prototype_chain ( new B() ),              'words' ), []
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: true, report_checks: true, }
  ( new Test guytest_cfg ).test { tests, }
