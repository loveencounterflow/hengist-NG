


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
  whisper }               = GUY.trm.get_loggers 'bricabrac-dbric-hoard'
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
{ Dbric,
  Dbric_std,
  IDN,
  LIT,
  SQL,
  VEC,
  from_bool,
  as_bool,
  True,
  False,
  unquote_name,         } = require '../../../apps/bricabrac-sfmodules/lib/dbric'
# { lets,                 } = internals
{ dbric_plugin: \
    dbric_hoard_plugin, } = require '../../../apps/bricabrac-sfmodules/lib/intermission2'




#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  dbric_hoard_plugin: ->
    #.......................................................................................................
    class Hoard extends Dbric_std
      @plugins: [
        dbric_hoard_plugin
        ]
    #.......................................................................................................
    h = Hoard.rebuild()
    @eq ( Ωdbrh___1 = -> 'std_get_tables'             in Object.keys h.statements ), true
    @eq ( Ωdbrh___2 = -> 'hrd_find_runs'              in Object.keys h.statements ), true
    @eq ( Ωdbrh___3 = -> 'hrd_insert_run'             in Object.keys h.statements ), true
    @eq ( Ωdbrh___4 = -> 'hrd_find_overlaps'          in Object.keys h.statements ), true
    @eq ( Ωdbrh___5 = -> 'hrd_find_overlaps_for_key'  in Object.keys h.statements ), true
    @eq ( Ωdbrh___6 = -> 'hrd_find_conflicts'         in Object.keys h.statements ), true
    #.......................................................................................................
    h.statements.hrd_insert_run.run { lo: -Infinity, hi:        -1, key: '$x', value: "negative CIDs",   }
    h.statements.hrd_insert_run.run { lo:    0x0000, hi:    0x0000, key: '$x', value: "zero bytes",      }
    h.statements.hrd_insert_run.run { lo:    0xd800, hi:    0xdbff, key: '$x', value: "high surrogates", }
    h.statements.hrd_insert_run.run { lo:    0xdc00, hi:    0xdfff, key: '$x', value: "low surrogates",  }
    h.statements.hrd_insert_run.run { lo:    0xfdd0, hi:    0xfdef, key: '$x', value: "noncharacters",   }
    h.statements.hrd_insert_run.run { lo:    0xfffe, hi:    0xffff, key: '$x', value: "noncharacters",   }
    h.statements.hrd_insert_run.run { lo:  0x110000, hi: +Infinity, key: '$x', value: "excessive CIDs",  }
    h.statements.hrd_insert_run.run { lo:   -0x000a, hi:    0x0000, key: 'foo', value: "bar",      }
    h.statements.hrd_insert_run.run { lo:    0x0000, hi:    0x000a, key: 'foo', value: "bar",      }
    #.......................................................................................................
    do =>
      # echo row for row from rows = h.walk h.statements.hrd_find_runs
      rows = h.walk h.statements.hrd_find_runs
      @eq ( Ωdbrh___7 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=-Infinity,-000001,$x', lo: -Infinity, hi: -1, key: '$x', value: 'negative CIDs' }
      @eq ( Ωdbrh___8 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=-00000a,+000000,foo', lo: -10, hi: 0, key: 'foo', value: 'bar' }
      @eq ( Ωdbrh___9 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000000,+000000,$x', lo: 0, hi: 0, key: '$x', value: 'zero bytes' }
      @eq ( Ωdbrh__10 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000000,+00000a,foo', lo: 0, hi: 10, key: 'foo', value: 'bar' }
      @eq ( Ωdbrh__11 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00d800,+00dbff,$x', lo: 55296, hi: 56319, key: '$x', value: 'high surrogates' }
      @eq ( Ωdbrh__12 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00dc00,+00dfff,$x', lo: 56320, hi: 57343, key: '$x', value: 'low surrogates' }
      @eq ( Ωdbrh__13 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00fdd0,+00fdef,$x', lo: 64976, hi: 65007, key: '$x', value: 'noncharacters' }
      @eq ( Ωdbrh__14 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00fffe,+00ffff,$x', lo: 65534, hi: 65535, key: '$x', value: 'noncharacters' }
      @eq ( Ωdbrh__15 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+110000,+Infinity,$x', lo: 1114112, hi: Infinity, key: '$x', value: 'excessive CIDs' }
      @eq ( Ωdbrh__16 = -> rows.next().done   ), true
      ;null
    #.......................................................................................................
    do =>
      find_overlaps = h.statements.hrd_find_overlaps
      # debug 'Ωdbrh__17', row for row from rows = h.walk find_overlaps, { lo: -0x1, hi: 0x0b, }
      # debug 'Ωdbrh__18', row for row from rows = h.walk find_overlaps, { lo: -0x1, hi: 0x0b, }
      #.....................................................................................................
      lo      = -0x0001
      hi      = +0x000b
      seen    = new Set()
      matcher = []
      for n in [ lo .. hi ]
        for { rowid, } from h.walk find_overlaps, { lo: n, hi: n, }
          matcher.push rowid unless seen.has rowid
          seen.add rowid
      @eq ( Ωdbrh__19 = -> matcher.length ), 4
      #.....................................................................................................
      result = [ ( rowid for { rowid, } from h.walk find_overlaps, { lo, hi, } )..., ]
      @eq ( Ωdbrh__20 = -> result ), matcher
      ;null
    #.......................................................................................................
    do =>
      find_overlaps   = h.statements.hrd_find_overlaps
      find_conflicts  = h.statements.hrd_find_conflicts
      #.....................................................................................................
      @eq ( Ωdbrh__21 = -> [ ( row for row from h.walk find_conflicts )..., ] ), []
      h.statements.hrd_insert_run.run { lo: -0x000a, hi: +0x0003, key: 'foo', value: "fuz",      }
      #.....................................................................................................
      seen    = new Set()
      matcher = [
        { key: 'foo', value_a: 'bar', value_b: 'fuz' },
        { key: 'foo', value_a: 'bar', value_b: 'fuz' }, ]
      # #.....................................................................................................
      result = []
      for row from h.walk find_conflicts
        result.push { key: row.key_a, value_a: row.value_a, value_b: row.value_b, }
      # echo row for row from result
      @eq ( Ωdbrh__22 = -> result ), matcher
      ;null
    #.......................................................................................................
    ;null


#===========================================================================================================
if module is require.main then await do =>
  do_coverage = true
  do_coverage = false
  if do_coverage
    { Coverage_analyzer,          } = require '../../../apps/bricabrac-sfmodules/lib/coverage-analyzer'
    ca = new Coverage_analyzer()
    # ca.wrap_class Dbric_std
  #---------------------------------------------------------------------------------------------------------
  guytest_cfg = { throw_on_error: false,  show_passes: true, report_checks: true, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { dbric_hoard_plugin_model: tests.dbric_hoard_plugin_model, }
  # ( new Test guytest_cfg ).test { dbric_dynamic_build_properties: tests.dbric_dynamic_build_properties, }
  #---------------------------------------------------------------------------------------------------------
  if do_coverage
    warn 'Ωdbrh__23', "not covered:", reverse name for name in ca.unused_names if ca.unused_names.length > 0
    # help 'Ωdbrh__24', ca.used_names
    # urge 'Ωdbrh__25', count, names for count, names of ca.names_by_counts
  #=========================================================================================================
  ;null


