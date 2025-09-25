
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
  whisper }               = GUY.trm.get_loggers 'bricabrac-benchmarking'
{ rpr
  inspect
  echo
  white
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'
{ ansi_colors_and_effects: C, } = SFMODULES.require_ansi_colors_and_effects()


############################################################################################################
#
#===========================================================================================================
@tasks =

  #---------------------------------------------------------------------------------------------------------
  basics: ->
    { bigint_from_hrtime,
      hrtime_as_bigint,
      Benchmarker,            } = SFMODULES.unstable.require_benchmarking()
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { with_capture_output,    } = SFMODULES.unstable.require_capture_output()
    { strip_ansi,             } = SFMODULES.require_strip_ansi()
    #.......................................................................................................
    do =>
      bm            = new Benchmarker()
      output        = ''
      # output_handler  = ( text ) -> output += text
      handler       = ( result ) -> debug 'Ωbbbt___1', "result:", result
      inner_result  = null
      inner_result  = bm.timeit                          abc = -> debug "Ωbbbt___2 just a test"; return 9876
      inner_result  = bm.timeit 'name',                        -> debug "Ωbbbt___3 just a test"; return 9876
      inner_result  = bm.timeit 'name', 'task',               -> debug "Ωbbbt___4 just a test"; return 9876
      inner_result  = bm.timeit 'name', 'task', { handler, }, -> debug "Ωbbbt___5 just a test"; return 9876
      inner_result  = bm.timeit { 'name', 'task', },          -> debug "Ωbbbt___6 just a test"; return 9876
    #.......................................................................................................
    do =>
      bm              = new Benchmarker()
      output          = ''
      output_handler  = ( text ) -> output += text
      inner_result    = null
      outer_result    = with_capture_output output_handler, =>
        inner_result = bm.timeit abc = -> debug "Ωbbbt___7 just a test"; return 9876
      output          = strip_ansi output
      echo 'Ωbbbt___8', reverse white output
      @eq ( Ωbbbt___9 = -> /just a test/v.test      output  ), true
      @eq ( Ωbbbt__10 = -> /\babc:\s+[0-9.]+/v.test output  ), true
      @eq ( Ωbbbt__11 = -> inner_result                     ), 9876
      @eq ( Ωbbbt__12 = -> outer_result                     ), inner_result
      return null
    #.......................................................................................................
    do =>
      bm              = new Benchmarker()
      timings         = {}
      handler         = ( timeit_nfo ) ->
        Object.assign timings, timeit_nfo
        # timings[ "#{timeit_nfo.name}/#{timeit_nfo.task}" ] = timeit_nfo.dt
      output = ''
      output_handler  = ( text ) -> output += text
      inner_result    = null
      outer_result    = with_capture_output output_handler, =>
        inner_result = bm.timeit { handler, brand: 'mybrand', }, mytask = -> debug "Ωbbbt__13 just a test"; return 9876
      output          = strip_ansi output
      @eq ( Ωbbbt__14 = -> /just a test/v.test      output  ), true
      @eq ( Ωbbbt__15 = -> /\babc:\s+[0-9.]+/v.test output  ), false
      @eq ( Ωbbbt__16 = -> inner_result                     ), 9876
      @eq ( Ωbbbt__17 = -> outer_result                     ), inner_result
      # @eq ( Ωbbbt__18 = -> type_of timings[ 'mybrand/mytask' ]       ), 'float'
      # @eq ( Ωbbbt__19 = -> type_of timings.brands.mytask.mybrand        ), 'float'
      debug 'Ωbbbt__20', reverse white output
      bm.timeit { handler, brand: 'mybrand',    }, mytask     = -> debug "Ωbbbt__21 just a test"; return 9876
      bm.timeit { handler, brand: 'mybrand',    }, othertask  = -> debug "Ωbbbt__22 just a test"; return 9876
      bm.timeit { handler, brand: 'otherbrand', }, mytask     = -> debug "Ωbbbt__23 just a test"; return 9876
      bm.timeit { handler, brand: 'otherbrand', }, blahtask   = -> debug "Ωbbbt__24 just a test"; return 9876
      help 'Ωbbbt__25', timings
      help 'Ωbbbt__26', "brands:  ", timings.brands
      # help 'Ωbbbt__27', "tasks:   ", timings.tasks
      help 'Ωbbbt__28', bm.get_averages_by_brands()
      help 'Ωbbbt__29', bm.get_averages_by_tasks()
      return null
    #.......................................................................................................
    await do =>
      bm = new Benchmarker()
      my_async_task = ->
        R = []
        for t in [ 1 .. 1e6 ]
          R.push t ** 2
        # return R.length
        return await R.length
      urge 'Ωbbbt__30', my_async_task
      # urge 'Ωbbbt__31', bm.timeit m_async_task
      urge 'Ωbbbt__32', bm.format_dt await bm.timeit my_async_task
      help 'Ωbbbt__33', bm.get_averages_by_brands()
      help 'Ωbbbt__34', bm.get_averages_by_tasks()
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  fetch_example_com: ->
    { bigint_from_hrtime,
      hrtime_as_bigint,
      Benchmarker,            } = SFMODULES.unstable.require_benchmarking()
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { with_capture_output,    } = SFMODULES.unstable.require_capture_output()
    { strip_ansi,             } = SFMODULES.require_strip_ansi()
    #.......................................................................................................
    do =>
      bm      = new Benchmarker()
      brand   = 'node_fetch'
      rsp     = await bm.timeit { brand, }, fetch_website  = -> await fetch 'http://example.com'
      body    = await bm.timeit { brand, }, read_body      = -> await rsp.text()
      info 'Ωbbbt__35', bm.get_averages_by_brands()
      info 'Ωbbbt__36', bm.get_averages_by_tasks()
      return null
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: true, }
  # ( new Test guytest_cfg ).async_test @tasks
  ( new Test guytest_cfg ).test { fetch_example_com: @tasks.fetch_example_com, }

  # nodexh ~/hengist-NG/dev/snippets/lib/benchmark-unicode-character-width.js
  # nodexh ~/hengist-NG/dev/snippets/lib/demo-build-unicode-ranges.js
  # nodexh ~/hengist-NG/dev/snippets/lib/benchmark-read-huge-csv.js
  # nodexh ~/hengist-NG/dev/snippets/lib/demo-binary-lexicographic-sortkey.js
  # nodexh ~/hengist-NG/dev/snippets/lib/demo-varint-leb128.js
  # nodexh ~/hengist-NG/dev/hollerith/lib/benchmarks.js

  # debug 'Ωbbbt__37', require '../../snippets/lib/benchmark-unicode-character-width.js'
  # debug 'Ωbbbt__38', require '../../snippets/lib/demo-build-unicode-ranges.js'
  # debug 'Ωbbbt__39', require '../../snippets/lib/benchmark-read-huge-csv.js'
  # debug 'Ωbbbt__40', require '../../snippets/lib/demo-binary-lexicographic-sortkey.js'
  # debug 'Ωbbbt__41', require '../../snippets/lib/demo-varint-leb128.js'
  # debug 'Ωbbbt__42', ( require '../../hollerith/lib/benchmarks.js' ).run()

