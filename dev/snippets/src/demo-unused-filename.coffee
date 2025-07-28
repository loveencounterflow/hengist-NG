

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
  whisper }               = GUY.trm.get_loggers 'demo-proxy'
{ rpr
  inspect
  echo
  white
  blue
  gold
  grey
  red
  bold
  reverse
  log     }               = GUY.trm
{ f }                     = require '../../../apps/effstring'
write                     = ( p ) -> process.stdout.write p
C                         = require 'ansis'
{ nfa }                   = require '../../../apps/normalize-function-arguments'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
SFMODULES                 = require './single-file-modules'



#===========================================================================================================
file_mirror_tests =
  t1: ->
    { get_next_free_filename,
      get_next_filename,
      exists,
      cache_filename_re,      } = SFMODULES.require_next_free_filename()
    PATH                        = require 'node:path'
    #.......................................................................................................
    @throws ( Ω___7 = -> get_next_free_filename null        ), /expected a text/
    @throws ( Ω___8 = -> get_next_free_filename undefined   ), /expected a text/
    @throws ( Ω___9 = -> get_next_free_filename true        ), /expected a text/
    @throws ( Ω__10 = -> get_next_free_filename ''          ), /expected a nonempty text/
    #.......................................................................................................
    probes_and_matchers = [
      [ 'a',                                   [ false, '~.a.0001.filemirror-cache',         '~.a.0001.filemirror-cache', ], ]
      [ 'README.md',                           [ true,  '~.README.md.0001.filemirror-cache', '~.README.md.0004.filemirror-cache', ], ]
      [ '~.README.md.0001.filemirror-cache',   [ true,  '~.README.md.0002.filemirror-cache', '~.README.md.0004.filemirror-cache', ], ]
      [ '~.README.md.0002.filemirror-cache',   [ true,  '~.README.md.0003.filemirror-cache', '~.README.md.0004.filemirror-cache', ], ]
      [ '~.README.md.0003.filemirror-cache',   [ true,  '~.README.md.0004.filemirror-cache', '~.README.md.0004.filemirror-cache', ], ]
      [ '~.README.md.0004.filemirror-cache',   [ false, '~.README.md.0005.filemirror-cache', '~.README.md.0005.filemirror-cache', ], ]
      ]
    path_prefix = PATH.resolve '../../../assets/bricabrac/find-free-filename'
    #.......................................................................................................
    do =>
      for [ path, [ matcher_1, matcher_2, matcher_3, ], ] in probes_and_matchers
        abs_path      = PATH.join path_prefix, path
        abs_matcher_2 = PATH.join path_prefix, matcher_2
        abs_matcher_3 = PATH.join path_prefix, matcher_3
        @eq ( Ω__12 = -> exists abs_path                    ), matcher_1
        @eq ( Ω__13 = -> get_next_filename       abs_path   ), abs_matcher_2
        @eq ( Ω__14 = -> get_next_free_filename  abs_path   ), abs_matcher_3
      return null
    #.......................................................................................................
    do =>
      for [ path, [ matcher_1, matcher_2, matcher_3, ], ] in probes_and_matchers
        rel_path      = PATH.relative process.cwd(), PATH.join path_prefix, path
        rel_matcher_2 = PATH.relative process.cwd(), PATH.join path_prefix, matcher_2
        rel_matcher_3 = PATH.relative process.cwd(), PATH.join path_prefix, matcher_3
        @eq ( Ω__12 = -> exists rel_path                    ), matcher_1
        @eq ( Ω__13 = -> get_next_filename       rel_path   ), rel_matcher_2
        @eq ( Ω__14 = -> get_next_free_filename  rel_path   ), rel_matcher_3
      return null
    #.......................................................................................................
    return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { file_mirror_tests, }
  #.........................................................................................................
  return null
