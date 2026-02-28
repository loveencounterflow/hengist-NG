


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
{ Hoard,
  dbric_hoard_plugin,   } = require '../../../apps/bricabrac-sfmodules/lib/intermission2'
{ type_of,              } = ( require '../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics' ).require_type_of()

#===========================================================================================================
cid_of  = ( x ) -> x.codePointAt 0
as_chr  = ( n ) -> String.fromCodePoint n


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
      # echo row for row from rows = h.walk h.statements.hrd_find_runs
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
  dbric_hoard_plugin_regularize: ->
    #.......................................................................................................
    h                 = Hoard.rebuild()
    colors_by_facets  =
      'vowel:true':     GUY.trm.gold
      'vowel:false':    GUY.trm.blue
    #.......................................................................................................
    h.hrd_add_run cid, null, 'uc', true for cid in [ ( cid_of 'A' ) .. ( cid_of 'Z' ) ]
    h.hrd_add_run ( cid_of 'A' ), ( cid_of 'Z' ), 'vowel', false
    h.hrd_add_run ( cid_of 'a' ), ( cid_of 'z' ), 'vowel', false
    h.hrd_add_run ( cid_of 'A' ), null, 'vowel', true
    h.hrd_add_run ( cid_of 'A' ), null, 'vowel', true
    h.hrd_add_run ( cid_of 'E' ), null, 'vowel', true
    h.hrd_add_run ( cid_of 'I' ), null, 'vowel', true
    h.hrd_add_run ( cid_of 'O' ), null, 'vowel', true
    h.hrd_add_run ( cid_of 'U' ), null, 'vowel', true
    h.hrd_add_run ( cid_of 'N' ), ( cid_of 'Z' ), 'upper', true
    h.hrd_add_run ( cid_of 'A' ), ( cid_of 'D' ), 'vgroup', 'A'
    h.hrd_add_run ( cid_of 'I' ), ( cid_of 'N' ), 'vgroup', 'I'
    h.hrd_add_run ( cid_of 'a' ), null, 'vowel', true
    h.hrd_add_run ( cid_of 'e' ), null, 'vowel', true
    h.hrd_add_run ( cid_of 'i' ), null, 'vowel', true
    h.hrd_add_run ( cid_of 'o' ), null, 'vowel', true
    h.hrd_add_run ( cid_of 'd' ), null, 'vowel', false
    h.hrd_add_run ( cid_of 'u' ), null, 'vowel', true
    #.......................................................................................................
    # echo row for row from rows = h.walk SQL"select * from hrd_runs order by inorn;"
    rows = h.walk SQL"select * from hrd_runs order by inorn;"
    @eq ( Ωdbrh__15 = -> rows.next().value ), { rowid: 't:hrd:runs:R=1', inorn: 1, lo: 65, hi: 65, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__16 = -> rows.next().value ), { rowid: 't:hrd:runs:R=2', inorn: 2, lo: 66, hi: 66, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__17 = -> rows.next().value ), { rowid: 't:hrd:runs:R=3', inorn: 3, lo: 67, hi: 67, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__18 = -> rows.next().value ), { rowid: 't:hrd:runs:R=4', inorn: 4, lo: 68, hi: 68, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__19 = -> rows.next().value ), { rowid: 't:hrd:runs:R=5', inorn: 5, lo: 69, hi: 69, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__20 = -> rows.next().value ), { rowid: 't:hrd:runs:R=6', inorn: 6, lo: 70, hi: 70, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__21 = -> rows.next().value ), { rowid: 't:hrd:runs:R=7', inorn: 7, lo: 71, hi: 71, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__22 = -> rows.next().value ), { rowid: 't:hrd:runs:R=8', inorn: 8, lo: 72, hi: 72, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__23 = -> rows.next().value ), { rowid: 't:hrd:runs:R=9', inorn: 9, lo: 73, hi: 73, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__24 = -> rows.next().value ), { rowid: 't:hrd:runs:R=10', inorn: 10, lo: 74, hi: 74, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__25 = -> rows.next().value ), { rowid: 't:hrd:runs:R=11', inorn: 11, lo: 75, hi: 75, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__26 = -> rows.next().value ), { rowid: 't:hrd:runs:R=12', inorn: 12, lo: 76, hi: 76, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__27 = -> rows.next().value ), { rowid: 't:hrd:runs:R=13', inorn: 13, lo: 77, hi: 77, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__28 = -> rows.next().value ), { rowid: 't:hrd:runs:R=14', inorn: 14, lo: 78, hi: 78, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__29 = -> rows.next().value ), { rowid: 't:hrd:runs:R=15', inorn: 15, lo: 79, hi: 79, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__30 = -> rows.next().value ), { rowid: 't:hrd:runs:R=16', inorn: 16, lo: 80, hi: 80, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__31 = -> rows.next().value ), { rowid: 't:hrd:runs:R=17', inorn: 17, lo: 81, hi: 81, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__32 = -> rows.next().value ), { rowid: 't:hrd:runs:R=18', inorn: 18, lo: 82, hi: 82, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__33 = -> rows.next().value ), { rowid: 't:hrd:runs:R=19', inorn: 19, lo: 83, hi: 83, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__34 = -> rows.next().value ), { rowid: 't:hrd:runs:R=20', inorn: 20, lo: 84, hi: 84, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__35 = -> rows.next().value ), { rowid: 't:hrd:runs:R=21', inorn: 21, lo: 85, hi: 85, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__36 = -> rows.next().value ), { rowid: 't:hrd:runs:R=22', inorn: 22, lo: 86, hi: 86, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__37 = -> rows.next().value ), { rowid: 't:hrd:runs:R=23', inorn: 23, lo: 87, hi: 87, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__38 = -> rows.next().value ), { rowid: 't:hrd:runs:R=24', inorn: 24, lo: 88, hi: 88, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__39 = -> rows.next().value ), { rowid: 't:hrd:runs:R=25', inorn: 25, lo: 89, hi: 89, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__40 = -> rows.next().value ), { rowid: 't:hrd:runs:R=26', inorn: 26, lo: 90, hi: 90, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__41 = -> rows.next().value ), { rowid: 't:hrd:runs:R=27', inorn: 27, lo: 65, hi: 90, facet: 'vowel:false', key: 'vowel', value: 'false' }
    @eq ( Ωdbrh__42 = -> rows.next().value ), { rowid: 't:hrd:runs:R=28', inorn: 28, lo: 97, hi: 122, facet: 'vowel:false', key: 'vowel', value: 'false' }
    @eq ( Ωdbrh__43 = -> rows.next().value ), { rowid: 't:hrd:runs:R=29', inorn: 29, lo: 65, hi: 65, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__44 = -> rows.next().value ), { rowid: 't:hrd:runs:R=30', inorn: 30, lo: 65, hi: 65, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__45 = -> rows.next().value ), { rowid: 't:hrd:runs:R=31', inorn: 31, lo: 69, hi: 69, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__46 = -> rows.next().value ), { rowid: 't:hrd:runs:R=32', inorn: 32, lo: 73, hi: 73, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__47 = -> rows.next().value ), { rowid: 't:hrd:runs:R=33', inorn: 33, lo: 79, hi: 79, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__48 = -> rows.next().value ), { rowid: 't:hrd:runs:R=34', inorn: 34, lo: 85, hi: 85, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__49 = -> rows.next().value ), { rowid: 't:hrd:runs:R=35', inorn: 35, lo: 78, hi: 90, facet: 'upper:true', key: 'upper', value: 'true' }
    @eq ( Ωdbrh__50 = -> rows.next().value ), { rowid: 't:hrd:runs:R=36', inorn: 36, lo: 65, hi: 68, facet: 'vgroup:"A"', key: 'vgroup', value: '"A"' }
    @eq ( Ωdbrh__51 = -> rows.next().value ), { rowid: 't:hrd:runs:R=37', inorn: 37, lo: 73, hi: 78, facet: 'vgroup:"I"', key: 'vgroup', value: '"I"' }
    @eq ( Ωdbrh__52 = -> rows.next().value ), { rowid: 't:hrd:runs:R=38', inorn: 38, lo: 97, hi: 97, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__53 = -> rows.next().value ), { rowid: 't:hrd:runs:R=39', inorn: 39, lo: 101, hi: 101, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__54 = -> rows.next().value ), { rowid: 't:hrd:runs:R=40', inorn: 40, lo: 105, hi: 105, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__55 = -> rows.next().value ), { rowid: 't:hrd:runs:R=41', inorn: 41, lo: 111, hi: 111, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__56 = -> rows.next().value ), { rowid: 't:hrd:runs:R=42', inorn: 42, lo: 100, hi: 100, facet: 'vowel:false', key: 'vowel', value: 'false' }
    @eq ( Ωdbrh__57 = -> rows.next().value ), { rowid: 't:hrd:runs:R=43', inorn: 43, lo: 117, hi: 117, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__58 = -> rows.next().done ), true
    #.......................................................................................................
    h.hrd_visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
    h.hrd_regularize()
    h.hrd_visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
    # h.tbl_echo_as_text SQL"select * from hrd_topruns;"
    #.......................................................................................................
    # echo row for row from rows = h.walk SQL"select * from hrd_runs order by inorn;"
    rows = h.walk SQL"select * from hrd_runs order by inorn;"
    @eq ( Ωdbrh__59 = -> rows.next().value ), { rowid: 't:hrd:runs:R=44', inorn: 44, lo: 65, hi: 90, facet: 'uc:true', key: 'uc', value: 'true' }
    @eq ( Ωdbrh__60 = -> rows.next().value ), { rowid: 't:hrd:runs:R=45', inorn: 45, lo: 78, hi: 90, facet: 'upper:true', key: 'upper', value: 'true' }
    @eq ( Ωdbrh__61 = -> rows.next().value ), { rowid: 't:hrd:runs:R=46', inorn: 46, lo: 65, hi: 68, facet: 'vgroup:"A"', key: 'vgroup', value: '"A"' }
    @eq ( Ωdbrh__62 = -> rows.next().value ), { rowid: 't:hrd:runs:R=47', inorn: 47, lo: 73, hi: 78, facet: 'vgroup:"I"', key: 'vgroup', value: '"I"' }
    @eq ( Ωdbrh__63 = -> rows.next().value ), { rowid: 't:hrd:runs:R=48', inorn: 48, lo: 66, hi: 68, facet: 'vowel:false', key: 'vowel', value: 'false' }
    @eq ( Ωdbrh__64 = -> rows.next().value ), { rowid: 't:hrd:runs:R=49', inorn: 49, lo: 70, hi: 72, facet: 'vowel:false', key: 'vowel', value: 'false' }
    @eq ( Ωdbrh__65 = -> rows.next().value ), { rowid: 't:hrd:runs:R=50', inorn: 50, lo: 74, hi: 78, facet: 'vowel:false', key: 'vowel', value: 'false' }
    @eq ( Ωdbrh__66 = -> rows.next().value ), { rowid: 't:hrd:runs:R=51', inorn: 51, lo: 80, hi: 84, facet: 'vowel:false', key: 'vowel', value: 'false' }
    @eq ( Ωdbrh__67 = -> rows.next().value ), { rowid: 't:hrd:runs:R=52', inorn: 52, lo: 86, hi: 90, facet: 'vowel:false', key: 'vowel', value: 'false' }
    @eq ( Ωdbrh__68 = -> rows.next().value ), { rowid: 't:hrd:runs:R=53', inorn: 53, lo: 98, hi: 100, facet: 'vowel:false', key: 'vowel', value: 'false' }
    @eq ( Ωdbrh__69 = -> rows.next().value ), { rowid: 't:hrd:runs:R=54', inorn: 54, lo: 102, hi: 104, facet: 'vowel:false', key: 'vowel', value: 'false' }
    @eq ( Ωdbrh__70 = -> rows.next().value ), { rowid: 't:hrd:runs:R=55', inorn: 55, lo: 106, hi: 110, facet: 'vowel:false', key: 'vowel', value: 'false' }
    @eq ( Ωdbrh__71 = -> rows.next().value ), { rowid: 't:hrd:runs:R=56', inorn: 56, lo: 112, hi: 116, facet: 'vowel:false', key: 'vowel', value: 'false' }
    @eq ( Ωdbrh__72 = -> rows.next().value ), { rowid: 't:hrd:runs:R=57', inorn: 57, lo: 65, hi: 65, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__73 = -> rows.next().value ), { rowid: 't:hrd:runs:R=58', inorn: 58, lo: 69, hi: 69, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__74 = -> rows.next().value ), { rowid: 't:hrd:runs:R=59', inorn: 59, lo: 73, hi: 73, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__75 = -> rows.next().value ), { rowid: 't:hrd:runs:R=60', inorn: 60, lo: 79, hi: 79, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__76 = -> rows.next().value ), { rowid: 't:hrd:runs:R=61', inorn: 61, lo: 85, hi: 85, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__77 = -> rows.next().value ), { rowid: 't:hrd:runs:R=62', inorn: 62, lo: 97, hi: 97, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__78 = -> rows.next().value ), { rowid: 't:hrd:runs:R=63', inorn: 63, lo: 101, hi: 101, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__79 = -> rows.next().value ), { rowid: 't:hrd:runs:R=64', inorn: 64, lo: 105, hi: 105, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__80 = -> rows.next().value ), { rowid: 't:hrd:runs:R=65', inorn: 65, lo: 111, hi: 111, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__81 = -> rows.next().value ), { rowid: 't:hrd:runs:R=66', inorn: 66, lo: 117, hi: 117, facet: 'vowel:true', key: 'vowel', value: 'true' }
    @eq ( Ωdbrh__82 = -> rows.next().value ), { rowid: 't:hrd:runs:R=67', inorn: 67, lo: 118, hi: 122, facet: 'vowel:false', key: 'vowel', value: 'false' }
    @eq ( Ωdbrh__83 = -> rows.next().done ), true
    #.......................................................................................................
    # echo row for row from rows = h.walk SQL"select * from hrd_global_bounds order by point;"
    rows = h.get_all SQL"select * from hrd_global_bounds order by point;"
    @eq ( Ωdbrh__84 = -> rows ), [ { bound: 'min', point: 65 }, { bound: 'max', point: 122 } ]
    #.......................................................................................................
    chrs = ( ( as_chr row.point ) for row from h.walk SQL"select * from hrd_breakpoints order by point;" ).join ''
    @eq ( Ωdbrh__85 = -> chrs ), 'AABDEEFHIIJNNOOPTUUVZaabdeefhiijnooptuuvz'
    #.......................................................................................................
    chrs = ( ( as_chr row.point ) for row from h.walk SQL"select * from hrd_inspection_points order by point;" ).join ''
    @eq ( Ωdbrh__86 = -> chrs ), 'ABDEFHIJMNOPTUVZ[`abdefhijnoptuvz'
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  _dbric_hoard_visualize_infinity: ->
    #.......................................................................................................
    h                 = Hoard.rebuild()
    insert_unicode_exclusions h
    h.hrd_visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
    #.......................................................................................................
    ;null


#===========================================================================================================
if module is require.main then await do =>
  do_coverage = true
  do_coverage = false
  if do_coverage
    { Coverage_analyzer,          } = require '../../../apps/bricabrac-sfmodules/lib/coverage-analyzer'
    ca = new Coverage_analyzer()
    ca.wrap_class Hoard
  #---------------------------------------------------------------------------------------------------------
  guytest_cfg = { throw_on_error: false,  show_passes: true, report_checks: true, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { dbric_hoard_plugin_regularize: tests.dbric_hoard_plugin_regularize, }
  # ( new Test guytest_cfg ).test { dbric_dynamic_build_properties: tests.dbric_dynamic_build_properties, }
  #---------------------------------------------------------------------------------------------------------
  if do_coverage
    warn 'Ωdbrh__87', "not covered:", reverse name for name in ca.unused_names if ca.unused_names.length > 0
    # help 'Ωdbrh__88', ca.used_names
    # urge 'Ωdbrh__89', count, names for count, names of ca.names_by_counts
  #=========================================================================================================
  ;null


