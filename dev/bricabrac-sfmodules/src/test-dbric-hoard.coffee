


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
  h.statements._hrd_insert_run.run { lo: -Infinity, hi:        -1, key: '$x', value: "negative CIDs",   }
  h.statements._hrd_insert_run.run { lo:    0x0000, hi:    0x0000, key: '$x', value: "zero bytes",      }
  h.statements._hrd_insert_run.run { lo:    0xd800, hi:    0xdbff, key: '$x', value: "high surrogates", }
  h.statements._hrd_insert_run.run { lo:    0xdc00, hi:    0xdfff, key: '$x', value: "low surrogates",  }
  h.statements._hrd_insert_run.run { lo:    0xfdd0, hi:    0xfdef, key: '$x', value: "noncharacters",   }
  h.statements._hrd_insert_run.run { lo:    0xfffe, hi:    0xffff, key: '$x', value: "noncharacters",   }
  h.statements._hrd_insert_run.run { lo:  0x110000, hi: +Infinity, key: '$x', value: "excessive CIDs",  }
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
    @eq ( Ωdbrh___1 = -> 'std_get_tables'         in Object.keys h.statements ), true
    @eq ( Ωdbrh___2 = -> 'hrd_find_runs'          in Object.keys h.statements ), true
    @eq ( Ωdbrh___3 = -> '_hrd_insert_run'        in Object.keys h.statements ), true
    @eq ( Ωdbrh___4 = -> 'hrd_find_covering_runs' in Object.keys h.statements ), true
    #.......................................................................................................
    insert_unicode_exclusions h
    h.statements._hrd_insert_run.run { lo:   -0x000a, hi:    0x0000, key: 'foo', value: '"bar"',      }
    h.statements._hrd_insert_run.run { lo:    0x0000, hi:    0x000a, key: 'foo', value: '"bar"',      }
    #.......................................................................................................
    do =>
      echo row for row from rows = h.walk h.statements.hrd_find_runs
      rows = h.walk h.statements.hrd_find_runs
      @eq ( Ωdbrh___5 = -> rows.next().value  ), { rowid: 't:hrd:runs:R=1', inorn: 1, lo: -Infinity, hi: -1, key: '$x', value: 'negative CIDs' }
      @eq ( Ωdbrh___6 = -> rows.next().value  ), { rowid: 't:hrd:runs:R=8', inorn: 8, lo: -10, hi: 0, key: 'foo', value: '"bar"' }
      @eq ( Ωdbrh___7 = -> rows.next().value  ), { rowid: 't:hrd:runs:R=2', inorn: 2, lo: 0, hi: 0, key: '$x', value: 'zero bytes' }
      @eq ( Ωdbrh___8 = -> rows.next().value  ), { rowid: 't:hrd:runs:R=9', inorn: 9, lo: 0, hi: 10, key: 'foo', value: '"bar"' }
      @eq ( Ωdbrh___9 = -> rows.next().value  ), { rowid: 't:hrd:runs:R=3', inorn: 3, lo: 55296, hi: 56319, key: '$x', value: 'high surrogates' }
      @eq ( Ωdbrh__10 = -> rows.next().value  ), { rowid: 't:hrd:runs:R=4', inorn: 4, lo: 56320, hi: 57343, key: '$x', value: 'low surrogates' }
      @eq ( Ωdbrh__11 = -> rows.next().value  ), { rowid: 't:hrd:runs:R=5', inorn: 5, lo: 64976, hi: 65007, key: '$x', value: 'noncharacters' }
      @eq ( Ωdbrh__12 = -> rows.next().value  ), { rowid: 't:hrd:runs:R=6', inorn: 6, lo: 65534, hi: 65535, key: '$x', value: 'noncharacters' }
      @eq ( Ωdbrh__13 = -> rows.next().value  ), { rowid: 't:hrd:runs:R=7', inorn: 7, lo: 1114112, hi: Infinity, key: '$x', value: 'excessive CIDs' }
      @eq ( Ωdbrh__14 = -> rows.next().done   ), true
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
        global_facets     = facets_from_rows @hrd_find_covering_runs lo, hi
        global_width      = hi - lo
        colors            =
          fallback:   ( P... ) -> GUY.trm.grey  P...
          warn:       ( P... ) -> GUY.trm.red   P...
          in:         ( P... ) -> GUY.trm.gold  P...
          out:        ( P... ) -> GUY.trm.blue  P...
          run:        ( P... ) -> GUY.trm.grey  P...
        #...................................................................................................
        { row_count, } = @get_first SQL"select count(*) as row_count from hrd_runs;"
        echo()
        echo GUY.trm.white GUY.trm.reverse GUY.trm.bold " hoard with #{row_count} runs "
        #...................................................................................................
        for global_facet from global_facets
          gfph      = ' '.repeat global_facet.length
          #.................................................................................................
          statement = SQL"""
            select * from hrd_runs
              where true
                and ( facet = $global_facet )
                and ( lo <= $hi )
                and ( hi >= $lo )
              -- order by hi - lo asc, lo desc, key, value
              order by inorn desc
              ;"""
          #.................................................................................................
          points = ''
          for cid in [ lo .. hi ]
            local_keys  = facets_from_rows @hrd_find_covering_runs cid
            chr         = String.fromCodePoint cid
            color       = if ( local_keys.has global_facet ) then colors.in else colors.out
            points     += color chr
          echo f"#{global_facet}:<15c; #{' '}:>6c; #{points}"
          #.................................................................................................
          for row from @walk statement, { global_facet, lo, hi, }
            id          = row.rowid.replace /^.*?=(\d+)/, '[$1]'
            first       = ( Math.max row.lo, lo ) - lo
            last        = ( Math.min row.hi, hi ) - lo
            left        = GUY.trm.grey GUY.trm.reverse '🮊'.repeat first
            # left        = GUY.trm.grey '│'.repeat first
            mid         = GUY.trm.gold '🮊'.repeat last - first + 1
            # mid         = GUY.trm.gold '♦'.repeat last - first + 1
            # mid         = GUY.trm.gold '█'.repeat last - first + 1
            right       = GUY.trm.grey GUY.trm.reverse '🮊'.repeat ( global_width - last + 1 )
            echo colors.run f"#{gfph}:<15c; #{id}:>6c; #{left}#{mid}#{right}"
        #...................................................................................................
        prv_point = 0
        line      = ''
        for { point, } from @walk SQL"select * from hrd_inspection_points;"
          point  -= lo
          delta   = Math.max 0, point - prv_point - 1
          line   += ' '.repeat delta
          line   += GUY.trm.gold '▲'
          prv_point = point
        echo colors.run f"#{gfph}:<15c; #{''}:>6c; #{line}"
        #...................................................................................................
        ;null
    #.......................................................................................................
    do =>
      h                 = Hoard_v.rebuild()
      colors_by_facets  =
        'vowel:true':     GUY.trm.gold
        'vowel:false':    GUY.trm.blue
      #.....................................................................................................
      h.hrd_add_run ( cid_of 'A' ), ( cid_of 'Z' ), 'vowel', false
      h.hrd_add_run ( cid_of 'a' ), ( cid_of 'z' ), 'vowel', false
      # h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
      h.hrd_add_run ( cid_of 'A' ), null, 'vowel', true
      h.hrd_add_run ( cid_of 'A' ), null, 'vowel', true
      h.hrd_add_run ( cid_of 'E' ), null, 'vowel', true
      h.hrd_add_run ( cid_of 'I' ), null, 'vowel', true
      h.hrd_add_run ( cid_of 'O' ), null, 'vowel', true
      h.hrd_add_run ( cid_of 'U' ), null, 'vowel', true
      h.hrd_add_run ( cid_of 'N' ), ( cid_of 'Z' ), 'upper', true
      h.hrd_add_run ( cid_of 'A' ), ( cid_of 'D' ), 'vgroup', 'A'
      h.hrd_add_run ( cid_of 'I' ), ( cid_of 'N' ), 'vgroup', 'I'
      # h.tbl_echo_as_text SQL"select * from hrd_runs order by lo;"
      # h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
      # h.hrd_add_run ( cid_of 'U' ), null, 'vowel', true
      # h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
      # h.hrd_add_run ( cid_of 'a' ), null, 'vowel', true
      # h.hrd_add_run ( cid_of 'd' ), null, 'vowel', false
      # h.hrd_add_run ( cid_of 'u' ), null, 'vowel', true
      # h.hrd_add_run ( cid_of 'c' ), ( cid_of 'x' ), 'vowel', true
      # h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
      # h.hrd_add_run ( cid_of 'b' ), null, 'vowel', false
      # h.hrd_add_run ( cid_of 'c' ), null, 'vowel', false
      # h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
      # # for point in [ ( cid_of 'A' ) .. ( cid_of 'z' ) ]
      # h.hrd_add_run ( cid_of 'A' ), ( cid_of 'Z' ), 'even', true
      # h.hrd_add_run ( cid_of 'A' ), null, 'even', false
      # h.hrd_add_run ( cid_of 'C' ), null, 'even', false
      # h.hrd_add_run ( cid_of 'E' ), null, 'even', false
      # h.hrd_add_run ( cid_of 'G' ), null, 'even', false
      #.....................................................................................................
      h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
      #.....................................................................................................
      { min, max, }     = h.hrd_get_min_max()
      keyvalue_by_facet = h._hrd_get_keyvalue_by_facet()
      facets_by_point   = h._hrd_map_facets_of_inspection_points()
      facets            = Object.keys h._hrd_get_families() ### TAINT use _get_facets ###
      lopoints          = Object.fromEntries ( [ facet, null, ] for facet in facets )
      new_runs          = []
      for facet in facets
        { key, value, } = keyvalue_by_facet[ facet ]
        # debug()
        # debug 'Ωdbrh__16', reverse facet
        for [ point, point_facets, ] from facets_by_point
          chr         = String.fromCodePoint point
          has_facet   = point_facets.has facet
          if has_facet
            if not lopoints[ facet ]?
              lopoints[ facet ] = point
          else
            if lopoints[ facet ]?
              lo                = lopoints[ facet ]
              hi                = point - 1
              new_runs.push { facet, key, value, lo, hi, }
              lopoints[ facet ] = null
              # lo_chr  = String.fromCodePoint lo
              # hi_chr  = String.fromCodePoint hi
              # debug 'Ωdbrh__16', ( rpr chr ), point, ( rpr lo_chr ), ( rpr hi_chr ), lo, hi
      for facet, lo of lopoints when lo?
        { key, value, } = keyvalue_by_facet[ facet ]
        new_runs.push { facet, key, value, lo, hi: max, }
      h.hrd_delete_runs()
      for { facet, key, value, lo, hi, } from new_runs
        h.hrd_add_run lo, hi, key, value
      # h.tbl_echo_as_text SQL"select * from hrd_topruns;"
      h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
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
  # ( new Test guytest_cfg ).test { dbric_hoard_plugin_normalization_and_conflict_detection_2: tests.dbric_hoard_plugin_normalization_and_conflict_detection_2, }
  # ( new Test guytest_cfg ).test { dbric_dynamic_build_properties: tests.dbric_dynamic_build_properties, }
  #---------------------------------------------------------------------------------------------------------
  if do_coverage
    warn 'Ωdbrh__21', "not covered:", reverse name for name in ca.unused_names if ca.unused_names.length > 0
    # help 'Ωdbrh__22', ca.used_names
    # urge 'Ωdbrh__23', count, names for count, names of ca.names_by_counts
  #=========================================================================================================
  ;null


