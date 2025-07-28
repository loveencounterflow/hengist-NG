

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
    cache_filename_re = /^~\.(?<first>.*)\.(?<nr>[0-9]{4})\.filemirror-cache/v
    class TMP_custom_error extends Error
    class TMP_validation_error extends Error
    FS = require 'node:fs'
    max_attempts = 9999
    #.......................................................................................................
    exists = ( path ) ->
      try FS.statSync path catch error then return false
      return true
    #.......................................................................................................
    get_next_filename = ( path ) ->
      ### TAINT use proper type checking ###
      throw new TMP_validation_error "Ω___1 expected a text, got #{rpr path}" unless ( typeof path ) is 'string'
      throw new TMP_validation_error "Ω___2 expected a nonempty text, got #{rpr path}" unless path.length > 0
      return "~.#{path}.0001.filemirror-cache" unless ( match = path.match cache_filename_re )?
      { first, nr, } = match.groups
      nr        = "#{( parseInt nr, 10 ) + 1}".padStart 4, '0'
      path      = first
      return "~.#{first}.#{nr}.filemirror-cache"
    #.......................................................................................................
    get_next_free_filename = ( path ) ->
      R                     = path
      failed_attempt_count  = -1
      #.....................................................................................................
      loop
        #...................................................................................................
        failed_attempt_count++
        if failed_attempt_count > max_attempts
          throw new TMP_custom_error "Ω___3 too many (#{failed_attempt_count}) attempts; path #{rpr R} exists"
        #...................................................................................................
        R = get_next_filename R
        whisper 'Ω___4', "probing #{R}"
        break unless exists R
      return R
    #.......................................................................................................
    @throws ( Ω___5 = -> get_next_free_filename null        ), /expected a text/
    @throws ( Ω___6 = -> get_next_free_filename undefined   ), /expected a text/
    @throws ( Ω___7 = -> get_next_free_filename true        ), /expected a text/
    @throws ( Ω___8 = -> get_next_free_filename ''          ), /expected a nonempty text/
    #.......................................................................................................
    probes_and_matchers = [
      [ 'a',                                   [ false, '~.a.0001.filemirror-cache',         '~.a.0001.filemirror-cache', ], ]
      [ 'README.md',                           [ true,  '~.README.md.0001.filemirror-cache', '~.README.md.0004.filemirror-cache', ], ]
      [ '~.README.md.0001.filemirror-cache',   [ true,  '~.README.md.0002.filemirror-cache', '~.README.md.0004.filemirror-cache', ], ]
      [ '~.README.md.0002.filemirror-cache',   [ true,  '~.README.md.0003.filemirror-cache', '~.README.md.0004.filemirror-cache', ], ]
      [ '~.README.md.0003.filemirror-cache',   [ true,  '~.README.md.0004.filemirror-cache', '~.README.md.0004.filemirror-cache', ], ]
      [ '~.README.md.0004.filemirror-cache',   [ false, '~.README.md.0005.filemirror-cache', '~.README.md.0005.filemirror-cache', ], ]
      ]
    for [ path, [ matcher_1, matcher_2, matcher_3, ], ] in probes_and_matchers
      @eq ( Ω___9 = -> exists path                    ), matcher_1
      @eq ( Ω__10 = -> get_next_filename       path   ), matcher_2
      @eq ( Ω__11 = -> get_next_free_filename  path   ), matcher_3
    return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { file_mirror_tests, }
  #.........................................................................................................
  return null
