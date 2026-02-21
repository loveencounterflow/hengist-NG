


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
{ type_of,              } = ( require '../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics' ).require_type_of()

#===========================================================================================================
cid_of = ( x ) -> x.codePointAt 0



#===========================================================================================================
insert_unicode_exclusions = ( h ) ->
  h.statements.hrd_insert_run.run { lo: -Infinity, hi:        -1, key: '$x', value: "negative CIDs",   }
  h.statements.hrd_insert_run.run { lo:    0x0000, hi:    0x0000, key: '$x', value: "zero bytes",      }
  h.statements.hrd_insert_run.run { lo:    0xd800, hi:    0xdbff, key: '$x', value: "high surrogates", }
  h.statements.hrd_insert_run.run { lo:    0xdc00, hi:    0xdfff, key: '$x', value: "low surrogates",  }
  h.statements.hrd_insert_run.run { lo:    0xfdd0, hi:    0xfdef, key: '$x', value: "noncharacters",   }
  h.statements.hrd_insert_run.run { lo:    0xfffe, hi:    0xffff, key: '$x', value: "noncharacters",   }
  h.statements.hrd_insert_run.run { lo:  0x110000, hi: +Infinity, key: '$x', value: "excessive CIDs",  }
  ;null

#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  dbric_hoard_plugin_basics: ->
    #.......................................................................................................
    class Hoard extends Dbric_std
      @plugins: [
        dbric_hoard_plugin
        ]
    #.......................................................................................................
    h = Hoard.rebuild()
    @eq ( Ωdbrh___4 = -> 'std_get_tables'             in Object.keys h.statements ), true
    @eq ( Ωdbrh___5 = -> 'hrd_find_runs'              in Object.keys h.statements ), true
    @eq ( Ωdbrh___6 = -> 'hrd_insert_run'             in Object.keys h.statements ), true
    @eq ( Ωdbrh___7 = -> 'hrd_find_overlaps'          in Object.keys h.statements ), true
    @eq ( Ωdbrh___8 = -> 'hrd_find_overlaps_for_key'  in Object.keys h.statements ), true
    @eq ( Ωdbrh___9 = -> 'hrd_find_runs_with_conflicts_1'         in Object.keys h.statements ), true
    #.......................................................................................................
    insert_unicode_exclusions h
    h.statements.hrd_insert_run.run { lo:   -0x000a, hi:    0x0000, key: 'foo', value: '"bar"',      }
    h.statements.hrd_insert_run.run { lo:    0x0000, hi:    0x000a, key: 'foo', value: '"bar"',      }
    #.......................................................................................................
    do =>
      # echo row for row from rows = h.walk h.statements.hrd_find_runs
      rows = h.walk h.statements.hrd_find_runs
      @eq ( Ωdbrh__10 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=-Infinity,-000001,$x', lo: -Infinity, hi: -1, key: '$x', value: 'negative CIDs' }
      @eq ( Ωdbrh__11 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=-00000a,+000000,foo', lo: -10, hi: 0, key: 'foo', value: '"bar"' }
      @eq ( Ωdbrh__12 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000000,+000000,$x', lo: 0, hi: 0, key: '$x', value: 'zero bytes' }
      @eq ( Ωdbrh__13 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000000,+00000a,foo', lo: 0, hi: 10, key: 'foo', value: '"bar"' }
      @eq ( Ωdbrh__14 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00d800,+00dbff,$x', lo: 55296, hi: 56319, key: '$x', value: 'high surrogates' }
      @eq ( Ωdbrh__15 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00dc00,+00dfff,$x', lo: 56320, hi: 57343, key: '$x', value: 'low surrogates' }
      @eq ( Ωdbrh__16 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00fdd0,+00fdef,$x', lo: 64976, hi: 65007, key: '$x', value: 'noncharacters' }
      @eq ( Ωdbrh__17 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00fffe,+00ffff,$x', lo: 65534, hi: 65535, key: '$x', value: 'noncharacters' }
      @eq ( Ωdbrh__18 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+110000,+Infinity,$x', lo: 1114112, hi: Infinity, key: '$x', value: 'excessive CIDs' }
      @eq ( Ωdbrh__19 = -> rows.next().done   ), true
      ;null
    #.......................................................................................................
    do =>
      find_overlaps = h.statements.hrd_find_overlaps
      # debug 'Ωdbrh__20', row for row from rows = h.walk find_overlaps, { lo: -0x1, hi: 0x0b, }
      # debug 'Ωdbrh__21', row for row from rows = h.walk find_overlaps, { lo: -0x1, hi: 0x0b, }
      #.....................................................................................................
      lo      = -0x0001
      hi      = +0x000b
      seen    = new Set()
      matcher = []
      for n in [ lo .. hi ]
        for { rowid, } from h.walk find_overlaps, { lo: n, hi: n, }
          matcher.push rowid unless seen.has rowid
          seen.add rowid
      @eq ( Ωdbrh__22 = -> matcher.length ), 4
      #.....................................................................................................
      result = [ ( rowid for { rowid, } from h.walk find_overlaps, { lo, hi, } )..., ]
      @eq ( Ωdbrh__23 = -> result ), matcher
      ;null
    #.......................................................................................................
    do =>
      find_overlaps   = h.statements.hrd_find_overlaps
      find_conflicts  = h.statements.hrd_find_runs_with_conflicts_1
      #.....................................................................................................
      @eq ( Ωdbrh__24 = -> [ ( row for row from h.walk find_conflicts )..., ] ), []
      @eq ( Ωdbrh__25 = -> [ ( h.hrd_find_runs_with_conflicts_1() )..., ]                 ), []
      @eq ( Ωdbrh__26 = -> h.hrd_validate_1()                                   ), null
      h.statements.hrd_insert_run.run { lo: -0x000a, hi: +0x0003, key: 'foo', value: '"fuz"',      }
      #.....................................................................................................
      seen    = new Set()
      matcher = [
        { key: 'foo', value_a: '"bar"', value_b: '"fuz"' },
        { key: 'foo', value_a: '"bar"', value_b: '"fuz"' }, ]
      #.....................................................................................................
      result = []
      for row from h.walk find_conflicts
        result.push { key: row.key_a, value_a: row.value_a, value_b: row.value_b, }
      # echo row for row from result
      @eq ( Ωdbrh__27 = -> result ), matcher
      #.....................................................................................................
      result = []
      for row from h.hrd_find_runs_with_conflicts_1()
        result.push { key: row.key_a, value_a: row.value_a, value_b: row.value_b, }
      # echo row for row from result
      @eq ( Ωdbrh__28 = -> result ), matcher
      #.....................................................................................................
      @throws ( Ωdbrh__29 = -> h.hrd_validate_1() ), /found conflicts/
      try h.hrd_validate_1() catch e then warn 'Ωdbrh__30', e.message
      # echo row for row from h.walk SQL"select * from _hrd_family_has_conflict_1;"
      rows = h.walk SQL"select * from _hrd_family_has_conflict_1;"
      @eq ( Ωdbrh__31 = -> rows.next().value  ), { key: '$x', value: 'excessive CIDs', has_conflict: 0 }
      @eq ( Ωdbrh__32 = -> rows.next().value  ), { key: '$x', value: 'high surrogates', has_conflict: 0 }
      @eq ( Ωdbrh__33 = -> rows.next().value  ), { key: '$x', value: 'low surrogates', has_conflict: 0 }
      @eq ( Ωdbrh__34 = -> rows.next().value  ), { key: '$x', value: 'negative CIDs', has_conflict: 0 }
      @eq ( Ωdbrh__35 = -> rows.next().value  ), { key: '$x', value: 'noncharacters', has_conflict: 0 }
      @eq ( Ωdbrh__36 = -> rows.next().value  ), { key: '$x', value: 'zero bytes', has_conflict: 0 }
      @eq ( Ωdbrh__37 = -> rows.next().value  ), { key: 'foo', value: '"bar"', has_conflict: 1 }
      @eq ( Ωdbrh__38 = -> rows.next().value  ), { key: 'foo', value: '"fuz"', has_conflict: 1 }
      @eq ( Ωdbrh__39 = -> rows.next().done   ), true
      ;null
    #.......................................................................................................
    do =>
      echo row for row from rows = h.hrd_find_runs_with_conflicts_1()
      # rows = h.hrd_family_conflicts_1()
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  dbric_hoard_plugin_groups: ->
    #.......................................................................................................
    class Hoard extends Dbric_std
      @plugins: [
        dbric_hoard_plugin
        ]
    #.......................................................................................................
    h = Hoard.rebuild()
    insert_unicode_exclusions h
    h.statements.hrd_insert_run.run { lo:   -0x000a, hi:    0x0000, key: 'foo', value: '"bar"',      }
    h.statements.hrd_insert_run.run { lo:    0x0000, hi:    0x000a, key: 'foo', value: '"bar"',      }
    h.statements.hrd_insert_run.run { lo:    0x0000, hi:    0x000a, key: 'nice', value: 'true',      }
    #.......................................................................................................
    do =>
      # echo row for row from rows = h.walk h.statements._hrd_facet_groups
      rows = h.walk h.statements._hrd_facet_groups
      @eq ( Ωdbrh__40 = -> rows.next().value  ), { key: '$x',   value: 'excessive CIDs',  runs: 1, }
      @eq ( Ωdbrh__41 = -> rows.next().value  ), { key: '$x',   value: 'high surrogates', runs: 1, }
      @eq ( Ωdbrh__42 = -> rows.next().value  ), { key: '$x',   value: 'low surrogates',  runs: 1, }
      @eq ( Ωdbrh__43 = -> rows.next().value  ), { key: '$x',   value: 'negative CIDs',   runs: 1, }
      @eq ( Ωdbrh__44 = -> rows.next().value  ), { key: '$x',   value: 'noncharacters',   runs: 2, }
      @eq ( Ωdbrh__45 = -> rows.next().value  ), { key: '$x',   value: 'zero bytes',      runs: 1, }
      @eq ( Ωdbrh__46 = -> rows.next().value  ), { key: 'foo',  value: '"bar"',           runs: 2, }
      @eq ( Ωdbrh__47 = -> rows.next().value  ), { key: 'nice', value: 'true',            runs: 1, }
      @eq ( Ωdbrh__48 = -> rows.next().done   ), true
      ;null
    # #.......................................................................................................
    # do =>
    #   # echo row for row from rows = h.hrd_find_runs_by_group()
    #   rows = h.hrd_find_runs_by_group()
    #   @eq ( Ωdbrh__49 = -> rows.next().value  ), { key: '$x', value: 'excessive CIDs', runs: [ { rowid: 't:hrd:runs:V=+110000,+Infinity,$x', lo: 1114112, hi: Infinity, key: '$x', value: 'excessive CIDs' } ] }
    #   @eq ( Ωdbrh__50 = -> rows.next().value  ), { key: '$x', value: 'high surrogates', runs: [ { rowid: 't:hrd:runs:V=+00d800,+00dbff,$x', lo: 55296, hi: 56319, key: '$x', value: 'high surrogates' } ] }
    #   @eq ( Ωdbrh__51 = -> rows.next().value  ), { key: '$x', value: 'low surrogates', runs: [ { rowid: 't:hrd:runs:V=+00dc00,+00dfff,$x', lo: 56320, hi: 57343, key: '$x', value: 'low surrogates' } ] }
    #   @eq ( Ωdbrh__52 = -> rows.next().value  ), { key: '$x', value: 'negative CIDs', runs: [ { rowid: 't:hrd:runs:V=-Infinity,-000001,$x', lo: -Infinity, hi: -1, key: '$x', value: 'negative CIDs' } ] }
    #   @eq ( Ωdbrh__53 = -> rows.next().value  ), { key: '$x', value: 'noncharacters', runs: [ { rowid: 't:hrd:runs:V=+00fdd0,+00fdef,$x', lo: 64976, hi: 65007, key: '$x', value: 'noncharacters' }, { rowid: 't:hrd:runs:V=+00fffe,+00ffff,$x', lo: 65534, hi: 65535, key: '$x', value: 'noncharacters' } ] }
    #   @eq ( Ωdbrh__54 = -> rows.next().value  ), { key: '$x', value: 'zero bytes', runs: [ { rowid: 't:hrd:runs:V=+000000,+000000,$x', lo: 0, hi: 0, key: '$x', value: 'zero bytes' } ] }
    #   @eq ( Ωdbrh__55 = -> rows.next().value  ), { key: 'foo', value: '"bar"', runs: [ { rowid: 't:hrd:runs:V=-00000a,+000000,foo', lo: -10, hi: 0, key: 'foo', value: '"bar"' }, { rowid: 't:hrd:runs:V=+000000,+00000a,foo', lo: 0, hi: 10, key: 'foo', value: '"bar"' } ] }
    #   @eq ( Ωdbrh__56 = -> rows.next().value  ), { key: 'nice', value: 'true', runs: [ { rowid: 't:hrd:runs:V=+000000,+00000a,nice', lo: 0, hi: 10, key: 'nice', value: 'true' } ] }
    #   @eq ( Ωdbrh__57 = -> rows.next().done   ), true
    #   ;null
    #.......................................................................................................
    do =>
      # echo row for row from rows = h.hrd_find_families()
      rows = h.hrd_find_families()
      @eq ( Ωdbrh__58 = -> rows.next().value  ), { key: '$x',   value: 'excessive CIDs',  first: 1114112,   last: Infinity, runs: 1, has_conflict: false, is_normal: true, }
      @eq ( Ωdbrh__59 = -> rows.next().value  ), { key: '$x',   value: 'high surrogates', first: 55296,     last: 56319,    runs: 1, has_conflict: false, is_normal: true, }
      @eq ( Ωdbrh__60 = -> rows.next().value  ), { key: '$x',   value: 'low surrogates',  first: 56320,     last: 57343,    runs: 1, has_conflict: false, is_normal: true, }
      @eq ( Ωdbrh__61 = -> rows.next().value  ), { key: '$x',   value: 'negative CIDs',   first: -Infinity, last: -1,       runs: 1, has_conflict: false, is_normal: true, }
      @eq ( Ωdbrh__62 = -> rows.next().value  ), { key: '$x',   value: 'noncharacters',   first: 64976,     last: 65535,    runs: 2, has_conflict: false, is_normal: true, }
      @eq ( Ωdbrh__63 = -> rows.next().value  ), { key: '$x',   value: 'zero bytes',      first: 0,         last: 0,        runs: 1, has_conflict: false, is_normal: true, }
      @eq ( Ωdbrh__64 = -> rows.next().value  ), { key: 'foo',  value: '"bar"',           first: -10,       last: 10,       runs: 2, has_conflict: true,  is_normal: false, }
      @eq ( Ωdbrh__65 = -> rows.next().value  ), { key: 'nice', value: 'true',            first: 0,         last: 10,       runs: 1, has_conflict: true,  is_normal: false, }
      @eq ( Ωdbrh__66 = -> rows.next().done   ), true
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  dbric_hoard_plugin_normalization: ->
    #.......................................................................................................
    class Hoard extends Dbric_std
      @plugins: [
        dbric_hoard_plugin
        ]
    #.......................................................................................................
    do =>
      h = Hoard.rebuild()
      #.....................................................................................................
      debug 'Ωdbrh__67', row for row from rows = h.walk SQL"select * from hrd_normalization;"
      rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
      @eq ( Ωdbrh__68 = -> rows.next().done   ), true
      #.....................................................................................................
      h.statements.hrd_insert_run.run { lo: 0x0010, hi: 0x0015, key: 'a', value: '"A"', }
      h.statements.hrd_insert_run.run { lo: 0x0020, hi: 0x0025, key: 'a', value: '"A"', }
      #.....................................................................................................
      # debug 'Ωdbrh__69', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
      rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
      @eq ( Ωdbrh__70 = -> rows.next().value  ), { d: 'a,"A",1' }
      @eq ( Ωdbrh__71 = -> rows.next().done   ), true
      #.....................................................................................................
      h.statements.hrd_insert_run.run { lo: 0x0016, hi: 0x0016, key: 'a', value: '"A"', }
      #.....................................................................................................
      # debug 'Ωdbrh__72', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
      rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
      @eq ( Ωdbrh__73 = -> rows.next().value  ), { d: 'a,"A",0' }
      @eq ( Ωdbrh__74 = -> rows.next().done   ), true
      #.....................................................................................................
      rows = h.hrd_find_nonnormal_families()
      @eq ( Ωdbrh__75 = -> rows.next().value  ), { key: 'a', value: '"A"' }
      @eq ( Ωdbrh__76 = -> rows.next().done   ), true
      #.....................................................................................................
      h.statements.hrd_insert_run.run { lo: 0x0010, hi: 0x0015, key: 'b', value: '"B"', }
      h.statements.hrd_insert_run.run { lo: 0x0020, hi: 0x0025, key: 'b', value: '"B"', }
      # debug 'Ωdbrh__77', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
      rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
      @eq ( Ωdbrh__78 = -> rows.next().value  ), { d: 'a,"A",0' }
      @eq ( Ωdbrh__79 = -> rows.next().value  ), { d: 'b,"B",1' }
      @eq ( Ωdbrh__80 = -> rows.next().done   ), true
      #.....................................................................................................
      h.statements.hrd_insert_run.run { lo: 0x0012, hi: 0x0017, key: 'b', value: '"B"', }
      # debug 'Ωdbrh__81', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
      rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
      @eq ( Ωdbrh__82 = -> rows.next().value  ), { d: 'a,"A",0' }
      @eq ( Ωdbrh__83 = -> rows.next().value  ), { d: 'b,"B",0' }
      @eq ( Ωdbrh__84 = -> rows.next().done   ), true
      #.....................................................................................................
      rows = h.hrd_find_nonnormal_families()
      @eq ( Ωdbrh__85 = -> rows.next().value  ), { key: 'a', value: '"A"' }
      @eq ( Ωdbrh__86 = -> rows.next().value  ), { key: 'b', value: '"B"' }
      @eq ( Ωdbrh__87 = -> rows.next().done   ), true
      #.....................................................................................................
      debug 'Ωdbrh__88', row for row from rows = h.hrd_find_families()
      #.....................................................................................................
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  dbric_hoard_plugin_normalization_and_conflict_detection: ->
    #.......................................................................................................
    class Hoard extends Dbric_std
      @plugins: [
        dbric_hoard_plugin
        ]
    #.......................................................................................................
    do =>
      h = Hoard.rebuild()
      #.....................................................................................................
      h.hrd_add_run ( cid_of 'A' ), ( cid_of 'Z' ), 'vowel', false
      # echo(); echo row for row from h.hrd_find_runs()
      rows = h.hrd_find_runs()
      @eq ( Ωdbrh__89 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000041,+00005a,vowel', lo: 65, hi: 90, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh__90 = -> rows.next().done   ), true
      #.....................................................................................................
      h.hrd_punch_1 { lo: ( cid_of 'A' ), hi: ( cid_of 'A' ), key: 'vowel', value: true, }
      # echo(); echo row for row from h.hrd_find_runs()
      rows = h.hrd_find_runs()
      @eq ( Ωdbrh__91 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000041,+000041,vowel', lo: 65, hi: 65, key: 'vowel', value: 'true' }
      @eq ( Ωdbrh__92 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000042,+00005a,vowel', lo: 66, hi: 90, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh__93 = -> rows.next().done   ), true
      #.....................................................................................................
      h.hrd_punch_1 ( cid_of 'E' ), ( cid_of 'E' ), 'vowel', true
      # echo(); echo row for row from h.hrd_find_runs()
      rows = h.hrd_find_runs()
      @eq ( Ωdbrh__94 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000041,+000041,vowel', lo: 65, hi: 65, key: 'vowel', value: 'true' }
      @eq ( Ωdbrh__95 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000042,+000044,vowel', lo: 66, hi: 68, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh__96 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000045,+000045,vowel', lo: 69, hi: 69, key: 'vowel', value: 'true' }
      @eq ( Ωdbrh__97 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000046,+00005a,vowel', lo: 70, hi: 90, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh__98 = -> rows.next().done   ), true
      #.....................................................................................................
      h.hrd_punch_1 ( cid_of 'I' ), ( cid_of 'I' ), 'vowel', true
      # echo(); echo row for row from h.hrd_find_runs()
      rows = h.hrd_find_runs()
      @eq ( Ωdbrh__99 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000041,+000041,vowel', lo: 65, hi: 65, key: 'vowel', value: 'true' }
      @eq ( Ωdbrh_100 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000042,+000044,vowel', lo: 66, hi: 68, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh_101 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000045,+000045,vowel', lo: 69, hi: 69, key: 'vowel', value: 'true' }
      @eq ( Ωdbrh_102 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000046,+000048,vowel', lo: 70, hi: 72, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh_103 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000049,+000049,vowel', lo: 73, hi: 73, key: 'vowel', value: 'true' }
      @eq ( Ωdbrh_104 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00004a,+00005a,vowel', lo: 74, hi: 90, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh_105 = -> rows.next().done   ), true
      #.....................................................................................................
      h.hrd_punch_1 ( cid_of 'O' ), ( cid_of 'O' ), 'vowel', true
      # echo(); echo row for row from h.hrd_find_runs()
      rows = h.hrd_find_runs()
      @eq ( Ωdbrh_106 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000041,+000041,vowel', lo: 65, hi: 65, key: 'vowel', value: 'true' }
      @eq ( Ωdbrh_107 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000042,+000044,vowel', lo: 66, hi: 68, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh_108 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000045,+000045,vowel', lo: 69, hi: 69, key: 'vowel', value: 'true' }
      @eq ( Ωdbrh_109 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000046,+000048,vowel', lo: 70, hi: 72, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh_110 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000049,+000049,vowel', lo: 73, hi: 73, key: 'vowel', value: 'true' }
      @eq ( Ωdbrh_111 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00004a,+00004e,vowel', lo: 74, hi: 78, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh_112 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00004f,+00004f,vowel', lo: 79, hi: 79, key: 'vowel', value: 'true' }
      @eq ( Ωdbrh_113 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000050,+00005a,vowel', lo: 80, hi: 90, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh_114 = -> rows.next().done   ), true
      #.....................................................................................................
      h.hrd_punch_1 ( cid_of 'U' ), ( cid_of 'U' ), 'vowel', true
      # echo(); echo row for row from h.hrd_find_runs()
      rows = h.hrd_find_runs()
      @eq ( Ωdbrh_115 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000041,+000041,vowel', lo: 65, hi: 65, key: 'vowel', value: 'true' }
      @eq ( Ωdbrh_116 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000042,+000044,vowel', lo: 66, hi: 68, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh_117 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000045,+000045,vowel', lo: 69, hi: 69, key: 'vowel', value: 'true' }
      @eq ( Ωdbrh_118 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000046,+000048,vowel', lo: 70, hi: 72, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh_119 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000049,+000049,vowel', lo: 73, hi: 73, key: 'vowel', value: 'true' }
      @eq ( Ωdbrh_120 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00004a,+00004e,vowel', lo: 74, hi: 78, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh_121 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00004f,+00004f,vowel', lo: 79, hi: 79, key: 'vowel', value: 'true' }
      @eq ( Ωdbrh_122 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000050,+000054,vowel', lo: 80, hi: 84, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh_123 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000055,+000055,vowel', lo: 85, hi: 85, key: 'vowel', value: 'true' }
      @eq ( Ωdbrh_124 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000056,+00005a,vowel', lo: 86, hi: 90, key: 'vowel', value: 'false' }
      @eq ( Ωdbrh_125 = -> rows.next().done   ), true
      #.....................................................................................................
      echo row for row from h.hrd_find_families()
      rows = h.hrd_find_families()
      @eq ( Ωdbrh_126 = -> rows.next().value  ), { key: 'vowel', value: 'false',  first: 66, last: 90, runs: 5, has_conflict: true, is_normal: false, }
      @eq ( Ωdbrh_127 = -> rows.next().value  ), { key: 'vowel', value: 'true',   first: 65, last: 85, runs: 5, has_conflict: true, is_normal: false, }
      @eq ( Ωdbrh_128 = -> rows.next().done   ), true
      #.....................................................................................................
      chr_string = ''
      for cid in [ ( cid_of 'A' ) .. ( cid_of 'Z' ) ]
        rows        = [ ( h.hrd_find_overlaps cid )..., ]
        is_vowel    = rows[ 0 ].value
        color       = if is_vowel then white else blue
        chr         = String.fromCodePoint cid
        chr_string += color chr
        @eq ( Ωdbrh_129 = -> rows.length              ), 1
        @eq ( Ωdbrh_130 = -> rows[ 0 ].key            ), 'vowel'
        @eq ( Ωdbrh_131 = -> type_of is_vowel         ), 'boolean'
      debug 'Ωdbrh_132', chr_string
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  dbric_hoard_plugin_normalization_and_conflict_detection_2: ->
    #.......................................................................................................
    class Hoard extends Dbric_std
      @plugins: [
        dbric_hoard_plugin
        ]
    #.......................................................................................................
    class Hoard_v extends Hoard
      visualize: ({ lo, hi, }) ->
        facet_from_row    = ( row ) -> "#{row.key}:#{row.value_json}"
        facets_from_rows  = ( rows ) -> new Set [ ( new Set ( ( facet_from_row row ) for row from rows ) )..., ].sort()
        global_facets     = facets_from_rows @hrd_find_overlaps lo, hi
        global_width      = hi - lo
        colors            =
          fallback:   ( P... ) -> GUY.trm.grey  P...
          warn:       ( P... ) -> GUY.trm.red   P...
          in:         ( P... ) -> GUY.trm.gold  P...
          out:        ( P... ) -> GUY.trm.blue  P...
          run:        ( P... ) -> GUY.trm.white P...
        #.........................................................................................................
        for global_facet from global_facets
          statement = SQL"""select * from hrd_runs where facet = $global_facet and lo <= $hi and hi >= $lo"""
          gfph      = ' '.repeat global_facet.length
          for cid in [ lo .. hi ]
            local_keys  = facets_from_rows @hrd_find_overlaps cid
            chr         = String.fromCodePoint cid
            color       = if ( local_keys.has global_facet ) then colors.in else colors.out
            points     += color chr
          echo f"#{global_facet}:<15c; #{' '}:>6c; #{points}"
          for row from @walk statement, { global_facet, lo, hi, }
            id          = row.rowid.replace /^.*?=(\d+)/, '[$1]'
            first       = ( Math.max row.lo, lo ) - lo
            last        = ( Math.min row.hi, hi ) - lo
            left        = '.'.repeat first
            mid         = '—'.repeat last - first + 1
            right       = '.'.repeat global_width - last
            echo f"#{gfph}:<15c; #{id}:>6c; #{left}#{mid}#{right}"
          points = ''
        #   #.......................................................................................................
        #   if rows.length is 0
        #     facet = '-:-'
        #     color = colors_by_facets[ facet ] ? fallback_color
        #     ( families[ key ] ?= '' ) += ( color chr )
        #   else
        #     for row in rows
        #       facet = "#{row.key}:#{row.value_json}"
        #       color = warn_color
        #   chr_string += color chr
        # #.........................................................................................................
        # debug 'Ωdbrh___3', chr_string
        ;null
    #.......................................................................................................
    do =>
      h                 = Hoard_v.rebuild()
      key               = 'vowel'
      colors_by_facets  =
        'vowel:true':     GUY.trm.gold
        'vowel:false':    GUY.trm.blue
      #.....................................................................................................
      h.tbl_echo_as_text SQL"select * from hrd_runs order by lo;"
      h.hrd_add_run ( cid_of 'A' ), ( cid_of 'Z' ), key, false
      h.hrd_add_run ( cid_of 'a' ), ( cid_of 'z' ), key, false
      # h.hrd_add_run ( cid_of 'A' ), null, key, true
      h.hrd_punch_1 ( cid_of 'A' ), null, key, true
      # h.tbl_echo_as_text SQL"select * from hrd_runs order by lo;"
      h.hrd_punch_1 ( cid_of 'E' ), null, key, true
      h.hrd_punch_1 ( cid_of 'I' ), null, key, true
      h.hrd_punch_1 ( cid_of 'O' ), null, key, true
      h.hrd_punch_1 ( cid_of 'U' ), null, key, true
      h.hrd_punch_1 ( cid_of 'N' ), ( cid_of 'Z' ), 'upper', true
      h.tbl_echo_as_text SQL"select * from hrd_runs order by lo;"
      h.tbl_echo_as_text SQL"select * from hrd_family_conflicts_1;"
      h.tbl_echo_as_text SQL"select * from hrd_family_conflicts_2;"
      h.tbl_echo_as_text SQL"select * from hrd_family_conflicts_2 where key = $key and value != 'true';", { key, }
      # h.tbl_echo_as_text SQL"select * from _hrd_family_has_conflict_1;"
      # h.tbl_echo_as_text SQL"select * from _hrd_clan_has_conflict_2;"
      h.tbl_echo_as_text h.hrd_find_families
      # h.tbl_echo_as_text SQL"select * from _hrd_facet_group_has_conflict_2;"
      h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
      ;null
    # #.......................................................................................................
    # do =>
    #   h   = Hoard_v.rebuild()
    #   key = 'vowel'
    #   #.....................................................................................................
    #   h.tbl_echo_as_text SQL"select * from hrd_runs order by lo;"
    #   h.hrd_add_run ( cid_of 'A' ), ( cid_of 'Z' ), key, false
    #   h.hrd_add_run ( cid_of 'a' ), ( cid_of 'z' ), key, false
    #   # h.hrd_add_run ( cid_of 'A' ), null, key, true
    #   h.hrd_punch_1 ( cid_of 'A' ), null, key, true
    #   # h.tbl_echo_as_text SQL"select * from hrd_runs order by lo;"
    #   # h.hrd_add_run ( cid_of 'E' ), null, key, true
    #   # h.hrd_add_run ( cid_of 'I' ), null, key, true
    #   h.tbl_echo_as_text SQL"select * from hrd_runs order by lo;"
    #   h.tbl_echo_as_text SQL"select * from hrd_family_conflicts_1;"
    #   h.tbl_echo_as_text SQL"select * from hrd_family_conflicts_2;"
    #   h.tbl_echo_as_text SQL"select * from hrd_family_conflicts_2 where key = $key and value != 'true';", { key, }
    #   # h.tbl_echo_as_text SQL"select * from _hrd_family_has_conflict_1;"
    #   # h.tbl_echo_as_text SQL"select * from _hrd_clan_has_conflict_2;"
    #   h.tbl_echo_as_text h.hrd_find_families
    #   # h.tbl_echo_as_text SQL"select * from _hrd_facet_group_has_conflict_2;"
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
  # ( new Test guytest_cfg ).test { tests, }
  ( new Test guytest_cfg ).test { dbric_hoard_plugin_normalization_and_conflict_detection_2: tests.dbric_hoard_plugin_normalization_and_conflict_detection_2, }
  # ( new Test guytest_cfg ).test { dbric_dynamic_build_properties: tests.dbric_dynamic_build_properties, }
  #---------------------------------------------------------------------------------------------------------
  if do_coverage
    warn 'Ωdbrh_133', "not covered:", reverse name for name in ca.unused_names if ca.unused_names.length > 0
    # help 'Ωdbrh_134', ca.used_names
    # urge 'Ωdbrh_135', count, names for count, names of ca.names_by_counts
  #=========================================================================================================
  ;null


