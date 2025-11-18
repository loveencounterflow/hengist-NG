

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
  whisper }               = GUY.trm.get_loggers 'bricabrac-dbric'
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


# #===========================================================================================================
# remove = ( path ) ->
#   try
#     FS.unlinkSync path
#     help 'Ωflr___1', "removed #{rpr path}"
#   catch error
#     throw error unless error.code is 'ENOENT'
#     urge 'Ωflr___2', "no such FS object: #{rpr path}"
#   return null


#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  basics: ->
    { walk_buffers_with_positions,
      walk_lines_with_positions, } = SFMODULES.unstable.require_fast_linereader()
    #.......................................................................................................
    path    = PATH.resolve __dirname, '../../../assets/bricabrac/fast-linereader/〇一二三四五六七八九.txt'
    matcher = FS.readFileSync path, { encoding: 'utf-8', }
    #.......................................................................................................
    for chunk_size in [ 10, 11, 100, ]
      echo '—————————————————————————————————————'
      result = ''
      for d from walk_lines_with_positions path, { chunk_size, }
        echo 'Ωflr___3', chunk_size, d.lnr, rpr d.line, rpr d.eol, d.buffer_nr
        result += d.line + d.eol
      @eq ( Ωflr___4 = -> result ), matcher
    # @throws ( Ωflr___5 = -> esql.unquote_name ''                ), /expected a name/
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: true, report_checks: true, }
  ( new Test guytest_cfg ).test { tests, }
  # # ( new Test guytest_cfg ).test { sample_db_with_bsql: tests.sample_db_with_bsql, }
  # ( new Test guytest_cfg ).test { udf_functions_with_nsql: tests.udf_functions_with_nsql, }
  # ( new Test guytest_cfg ).test { udf_functions_with_bsql: tests.udf_functions_with_bsql, }
  # ( new Test guytest_cfg ).test { udf_aggregates_with_bsql: tests.udf_aggregates_with_bsql, }
  # ( new Test guytest_cfg ).test { udf_aggregates_with_nsql: tests.udf_aggregates_with_nsql, }
  # ( new Test guytest_cfg ).test { udf_table_function_with_bsql: tests.udf_table_function_with_bsql, }
  # ( new Test guytest_cfg ).test { file_mirror_as_table_function: tests.file_mirror_as_table_function, }
