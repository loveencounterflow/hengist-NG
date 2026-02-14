
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
  whisper }               = GUY.trm.get_loggers 'bricabrac-benchmark-canonical-json'
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
SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
{ ansi_colors_and_effects: C, } = SFMODULES.require_ansi_colors_and_effects()


############################################################################################################
#
#===========================================================================================================
@tasks =

  #---------------------------------------------------------------------------------------------------------
  canonicize_json: ->
    { bigint_from_hrtime,
      hrtime_as_bigint,
      Benchmarker,            } = SFMODULES.unstable.require_benchmarking()
    { type_of,                } = SFMODULES.unstable.require_type_of()
    canonicalize                = require 'canonicalize'
    stringify                   = require 'fast-json-stable-stringify'
    bm                          = new Benchmarker()
    brand                       = 'canojason'
    repetitions                 = 1e5
    #.......................................................................................................
    probes_and_matchers = [
      [ {}, '{}' ]
      [ { from_account: '543 232 625-3', to_account: '321 567 636-4', amount: 500, currency: 'USD' }, '{"amount":500,"currency":"USD","from_account":"543 232 625-3","to_account":"321 567 636-4"}' ]
      [ [ 56, { '1': [], '10': null, d: true } ], '[56,{"1":[],"10":null,"d":true}]' ]
      [ { peach: 'This sorting order', 'péché': 'is wrong according to French', 'pêche': 'but canonicalization MUST', sin: 'ignore locale' }, '{"peach":"This sorting order","péché":"is wrong according to French","pêche":"but canonicalization MUST","sin":"ignore locale"}' ]
      [ { '1': { f: { f: 'hi', F: 5 }, '\n': 56 }, '10': {}, '111': [ { e: 'yes', E: 'no' } ], '': 'empty', a: {}, A: { b: '123' } }, '{"":"empty","1":{"\\n":56,"f":{"F":5,"f":"hi"}},"10":{},"111":[{"E":"no","e":"yes"}],"A":{"b":"123"},"a":{}}' ]
      [ { numbers: [ 333333333.3333333, 1e+30, 4.5, 0.002, 1e-27 ], string: """€$\x0F\nA'B"\\\\"/""", literals: [ null, true, false ] }, """{"literals":[null,true,false],"numbers":[333333333.3333333,1e+30,4.5,0.002,1e-27],"string":"€$\\u000f\\nA'B\\"\\\\\\\\\\"/"}""" ]
      [ { '1': 'One', '€': 'Euro Sign', '\x80': 'Control', '😂': 'Smiley', 'ö': 'Latin Small Letter O With Diaeresis', 'דּ': 'Hebrew Letter Dalet With Dagesh', '</script>': 'Browser Challenge' }, '{"1":"One","</script>":"Browser Challenge","\x80":"Control","ö":"Latin Small Letter O With Diaeresis","€":"Euro Sign","😂":"Smiley","דּ":"Hebrew Letter Dalet With Dagesh"}' ]
      ]
    #.......................................................................................................
    total         = probes_and_matchers.length * repetitions
    error_counts  = []
    #.......................................................................................................
    error_counts.push bm.timeit { brand, total, }, plain = ({ progress, }) ->
      error_count = 0
      for nr in [ 1 .. repetitions ]
        for [ probe, matcher, ] in probes_and_matchers
          progress()
          result = JSON.stringify probe
          error_count++ if ( nr is 1 ) and ( result isnt matcher )
      return error_count
    #.......................................................................................................
    error_counts.push bm.timeit { brand, total, }, sorted = ({ progress, }) ->
      error_count = 0
      for nr in [ 1 .. repetitions ]
        for [ probe, matcher, ] in probes_and_matchers
          progress()
          result = JSON.stringify probe, ( Object.keys probe ).sort()
          error_count++ if ( nr is 1 ) and ( result isnt matcher )
      return error_count
    #.......................................................................................................
    error_counts.push bm.timeit { brand, total, }, kanonicalize = ({ progress, }) ->
      error_count = 0
      for nr in [ 1 .. repetitions ]
        for [ probe, matcher, ] in probes_and_matchers
          progress()
          result = canonicalize probe
          error_count++ if ( nr is 1 ) and ( result isnt matcher )
          # echo [ probe, result, ] if nr is 1
      return error_count
    #.......................................................................................................
    error_counts.push bm.timeit { brand, total, }, fast_stringify = ({ progress, }) ->
      error_count = 0
      for nr in [ 1 .. repetitions ]
        for [ probe, matcher, ] in probes_and_matchers
          progress()
          result = stringify probe
          error_count++ if ( nr is 1 ) and ( result isnt matcher )
          # echo [ probe, result, ] if nr is 1
      return error_count
    #.......................................................................................................
    urge 'Ωbbbt__36', error_counts
    info 'Ωbbbt__36', bm.get_averages_by_tasks()
    return null



#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: true, }
  ( new Test guytest_cfg ).async_test @tasks
  # ( new Test guytest_cfg ).test { fetch_example_com: @tasks.fetch_example_com, }
  ;null
