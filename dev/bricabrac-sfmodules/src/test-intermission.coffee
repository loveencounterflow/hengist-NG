

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
  whisper }               = GUY.trm.get_loggers 'bricabrac-intermission'
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
{ type_of,              } = ( require '../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics' ).require_type_of()
{ Hoard,
  Scatter,
  Run,
  summarize_data,       } = require '../../../apps/bricabrac-sfmodules/lib/intermission'
cid_of                    = ( text ) -> text.codePointAt 0




#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  basic_runs: ->
    h = new Hoard()
    d = new Run();                  @eq ( Ωimt___4 = -> [ { d..., }, d.size, ] ), [ { lo: 0, hi: 0, },  1, ]
    d = new Run { hi: 7, };         @eq ( Ωimt___5 = -> [ { d..., }, d.size, ] ), [ { lo: 0, hi: 7, },  8, ]
    d = new Run 7;                  @eq ( Ωimt___6 = -> [ { d..., }, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = new Run 7, 7;               @eq ( Ωimt___7 = -> [ { d..., }, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = new Run 7, 12;              @eq ( Ωimt___8 = -> [ { d..., }, d.size, ] ), [ { lo: 7, hi: 12, }, 6, ]
    d = new Run { lo: 7, };         @eq ( Ωimt___9 = -> [ { d..., }, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = new Run { lo: 7, hi: 7, };  @eq ( Ωimt__10 = -> [ { d..., }, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = new Run { lo: 7, hi: 21, }; @eq ( Ωimt__11 = -> [ { d..., }, d.size, ] ), [ { lo: 7, hi: 21, }, 15, ]
    d = new Run { lo: 7, hi: 21, }; @throws ( Ωimt__12 = -> d.lo = 6   ), /cannot assign to read only property/i
    d = new Run { lo: 7, hi: 21, }; @throws ( Ωimt__13 = -> d.hi = 22  ), /cannot assign to read only property/i
    #.......................................................................................................
    @eq ( Ωimt__14 = -> ( new Run 1, 1 ).scatter ), undefined
    ;null

  #---------------------------------------------------------------------------------------------------------
  basic_scatters: ->
    do =>
      h = new Hoard()
      s = h.add_scatter { a: 1, }
      @eq ( Ωimt__15 = -> { s..., } ), { data: { a: 1 }, rowid: 't:hrd:scatters,R=1', runs: [] }
      @eq ( Ωimt__16 = -> s.is_normalized   ), false
      #.....................................................................................................
      s.add_run { lo: 1, hi: 1, };          @eq ( Ωimt__17 = -> s.runs.length     ), 1
      s.add_run 1;                          @eq ( Ωimt__18 = -> s.runs.length     ), 2
      s.add_run { lo: 1, hi: 1, };          @eq ( Ωimt__19 = -> s.runs.length     ), 3
      # s.add_run new Run { lo: 1, hi: 1, };  @eq ( Ωimt__20 = -> s.runs.length     ), 3
      #.....................................................................................................
      @eq ( Ωimt__21 = -> s.is_normalized   ), false
      # @eq ( Ωimt__22 = -> s.is_sorted       ), false
      @eq ( Ωimt__23 = -> s.data            ), { a: 1, }
      @eq ( Ωimt__24 = -> { s.runs[ 0 ]..., } ), { lo: 1, hi: 1, }
      @eq ( Ωimt__25 = -> { s.runs[ 1 ]..., } ), { lo: 1, hi: 1, }
      @eq ( Ωimt__26 = -> { s.runs[ 2 ]..., } ), { lo: 1, hi: 1, }
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      @eq ( Ωimt__27 = -> s.is_normalized ), false
      s.add_run 103, 109;   @eq ( Ωimt__28 = -> s.runs.length ), 1; @eq ( Ωimt__29 = -> s.is_normalized ), false
      s.add_run 111, 115;   @eq ( Ωimt__30 = -> s.runs.length ), 2; @eq ( Ωimt__31 = -> s.is_normalized ), false
      s.add_run 110;        @eq ( Ωimt__32 = -> s.runs.length ), 3; @eq ( Ωimt__33 = -> s.is_normalized ), false
      @eq ( Ωimt__34 = -> { min: s.min, max: s.max, } ), { min: 103, max: 115, }
      @eq ( Ωimt__35 = -> s.minmax                    ), { min: 103, max: 115, }
      #.....................................................................................................
      @eq ( Ωimt__36 = -> { s.runs[ 0 ]..., } ), { lo: 103, hi: 109, }
      @eq ( Ωimt__37 = -> { s.runs[ 1 ]..., } ), { lo: 111, hi: 115, }
      @eq ( Ωimt__38 = -> { s.runs[ 2 ]..., } ), { lo: 110, hi: 110, }
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  _overlapping: ->
    do =>
      h = new Hoard()
      s = h.add_scatter()
      s.add_run 'a', 'y'
      s.add_run 'A', 'Y'
      debug 'Ωimt__39', h
      debug 'Ωimt__40', h.scatters
      @eq ( Ωimt__41 = -> s.contains 'a'                    ), true
      @eq ( Ωimt__42 = -> s.contains { lo: 'a', }           ), true
      @eq ( Ωimt__43 = -> s.contains { lo: 'a', hi: 'y', }  ), true
      @eq ( Ωimt__44 = -> s.contains { lo: 'a', hi: 'z', }  ), true
      @eq ( Ωimt__45 = -> s.contains '0'                    ), false
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  containment: ->
    do =>
      h = new Hoard()
      r = new Run { lo: 25, hi: 30, }
      @eq ( Ωimt__46 = -> r.contains 21                               ), false
      @eq ( Ωimt__47 = -> r.contains 22                               ), false
      @eq ( Ωimt__48 = -> r.contains 23                               ), false
      @eq ( Ωimt__49 = -> r.contains 24                               ), false
      @eq ( Ωimt__50 = -> r.contains 25                               ), true
      @eq ( Ωimt__51 = -> r.contains 26                               ), true
      @eq ( Ωimt__52 = -> r.contains 27                               ), true
      @eq ( Ωimt__53 = -> r.contains 28                               ), true
      @eq ( Ωimt__54 = -> r.contains 29                               ), true
      @eq ( Ωimt__55 = -> r.contains 30                               ), true
      @eq ( Ωimt__56 = -> r.contains 31                               ), false
      @eq ( Ωimt__57 = -> r.contains 41                               ), false
      @eq ( Ωimt__58 = -> r.contains [ 25, ]                          ), true
      @eq ( Ωimt__59 = -> r.contains [ 30, ]                          ), true
      @eq ( Ωimt__60 = -> r.contains [ 31, ]                          ), false
      @eq ( Ωimt__61 = -> r.contains [ 32, ]                          ), false
      @eq ( Ωimt__62 = -> r.contains [ 25 .. 30 ]                     ), true
      @eq ( Ωimt__63 = -> r.contains [ 25 .. 31 ]                     ), false
      @eq ( Ωimt__64 = -> r.contains ( -> yield from [ 25 .. 30 ] )() ), true
      @eq ( Ωimt__65 = -> r.contains ( -> yield from [ 25 .. 31 ] )() ), false
      @eq ( Ωimt__66 = -> r.contains ( -> yield from [ 25 .. 32 ] )() ), false
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      s.add_run 25, 30
      s.add_run 32, 40
      @eq ( Ωimt__67 = -> s.contains 21                               ), false
      @eq ( Ωimt__68 = -> s.contains 22                               ), false
      @eq ( Ωimt__69 = -> s.contains 23                               ), false
      @eq ( Ωimt__70 = -> s.contains 24                               ), false
      @eq ( Ωimt__71 = -> s.contains 25                               ), true
      @eq ( Ωimt__72 = -> s.contains 26                               ), true
      @eq ( Ωimt__73 = -> s.contains 27                               ), true
      @eq ( Ωimt__74 = -> s.contains 28                               ), true
      @eq ( Ωimt__75 = -> s.contains 29                               ), true
      @eq ( Ωimt__76 = -> s.contains 30                               ), true
      @eq ( Ωimt__77 = -> s.contains 31                               ), false
      @eq ( Ωimt__78 = -> s.contains 32                               ), true
      @eq ( Ωimt__79 = -> s.contains 33                               ), true
      @eq ( Ωimt__80 = -> s.contains 34                               ), true
      @eq ( Ωimt__81 = -> s.contains 35                               ), true
      @eq ( Ωimt__82 = -> s.contains 36                               ), true
      @eq ( Ωimt__83 = -> s.contains 37                               ), true
      @eq ( Ωimt__84 = -> s.contains 38                               ), true
      @eq ( Ωimt__85 = -> s.contains 39                               ), true
      @eq ( Ωimt__86 = -> s.contains 40                               ), true
      @eq ( Ωimt__87 = -> s.contains 41                               ), false
      @eq ( Ωimt__88 = -> s.contains 42                               ), false
      @eq ( Ωimt__89 = -> s.contains 43                               ), false
      @eq ( Ωimt__90 = -> s.contains [ 25 .. 30 ]                     ), true
      @eq ( Ωimt__91 = -> s.contains [ 25 .. 31 ]                     ), false
      @eq ( Ωimt__92 = -> s.contains [ 30, ]                          ), true
      @eq ( Ωimt__93 = -> s.contains [ 31, ]                          ), false
      @eq ( Ωimt__94 = -> s.contains [ 32, ]                          ), true
      @eq ( Ωimt__95 = -> s.contains ( -> yield from [ 25 .. 30 ] )() ), true
      @eq ( Ωimt__96 = -> s.contains ( -> yield from [ 25 .. 31 ] )() ), false
      @eq ( Ωimt__97 = -> s.contains ( -> yield from [ 25 .. 32 ] )() ), false
      @eq ( Ωimt__98 = -> s.contains ( new Run 25              ) ), true
      @eq ( Ωimt__99 = -> s.contains ( new Run 25, 30          ) ), true
      @eq ( Ωimt_100 = -> s.contains ( new Run 25, 32          ) ), false
      #.....................................................................................................
      @eq ( Ωimt_101 = -> h.contains 21                               ), false
      @eq ( Ωimt_102 = -> h.contains 22                               ), false
      @eq ( Ωimt_103 = -> h.contains 23                               ), false
      @eq ( Ωimt_104 = -> h.contains 24                               ), false
      @eq ( Ωimt_105 = -> h.contains 25                               ), true
      @eq ( Ωimt_106 = -> h.contains 26                               ), true
      @eq ( Ωimt_107 = -> h.contains 27                               ), true
      @eq ( Ωimt_108 = -> h.contains 28                               ), true
      @eq ( Ωimt_109 = -> h.contains 29                               ), true
      @eq ( Ωimt_110 = -> h.contains 30                               ), true
      @eq ( Ωimt_111 = -> h.contains 31                               ), false
      @eq ( Ωimt_112 = -> h.contains 32                               ), true
      @eq ( Ωimt_113 = -> h.contains 33                               ), true
      @eq ( Ωimt_114 = -> h.contains 34                               ), true
      @eq ( Ωimt_115 = -> h.contains 35                               ), true
      @eq ( Ωimt_116 = -> h.contains 36                               ), true
      @eq ( Ωimt_117 = -> h.contains 37                               ), true
      @eq ( Ωimt_118 = -> h.contains 38                               ), true
      @eq ( Ωimt_119 = -> h.contains 39                               ), true
      @eq ( Ωimt_120 = -> h.contains 40                               ), true
      @eq ( Ωimt_121 = -> h.contains 41                               ), false
      @eq ( Ωimt_122 = -> h.contains 42                               ), false
      @eq ( Ωimt_123 = -> h.contains 43                               ), false
      @eq ( Ωimt_124 = -> h.contains [ 25 .. 30 ]                     ), true
      @eq ( Ωimt_125 = -> h.contains [ 25 .. 31 ]                     ), false
      @eq ( Ωimt_126 = -> h.contains [ 30, ]                          ), true
      @eq ( Ωimt_127 = -> h.contains [ 31, ]                          ), false
      @eq ( Ωimt_128 = -> h.contains [ 32, ]                          ), true
      @eq ( Ωimt_129 = -> h.contains ( -> yield from [ 25 .. 30 ] )() ), true
      @eq ( Ωimt_130 = -> h.contains ( -> yield from [ 25 .. 31 ] )() ), false
      @eq ( Ωimt_131 = -> h.contains ( -> yield from [ 25 .. 32 ] )() ), false
      @eq ( Ωimt_132 = -> h.contains ( new Run 25              ) ), true
      @eq ( Ωimt_133 = -> h.contains ( new Run 25, 30          ) ), true
      @eq ( Ωimt_134 = -> h.contains ( new Run 25, 32          ) ), false
      #.....................................................................................................
      s1 = h.add_scatter()
      s1.add_run 26, 27
      s1.add_run 37, 40
      @eq ( Ωimt_135 = -> s1.is_normalized                            ), false
      @eq ( Ωimt_136 = -> s.contains s1                               ), true
      @eq ( Ωimt_137 = -> s1.is_normalized                            ), true
      s1.add_run 25, 32
      @eq ( Ωimt_138 = -> s.contains s1                               ), false
      @eq ( Ωimt_139 = -> s.is_normalized                             ), true
      s.add_run 31
      @eq ( Ωimt_140 = -> s.is_normalized                             ), false
      @eq ( Ωimt_141 = -> s.contains s1                               ), true
      @eq ( Ωimt_142 = -> s.is_normalized                             ), true
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  iteration: ->
    do =>
      h = new Hoard()
      @eq ( Ωimt_143 = -> [ ( new Run 1         )..., ]       ), [ 1, ]
      @eq ( Ωimt_144 = -> [ ( new Run 297       )..., ]       ), [ 297, ]
      @eq ( Ωimt_145 = -> [ ( new Run 297, 308  )..., ]       ), [ 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308 ]
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      @eq ( Ωimt_146 = -> [ s..., ]       ), []
      s.add_run 1;        @eq ( Ωimt_147 = -> [ s..., ] ), [ 1,                               ]; @eq ( Ωimt_148 = -> s.is_normalized ), true
      s.add_run 297;      @eq ( Ωimt_149 = -> [ s..., ] ), [ 1, 297,                          ]; @eq ( Ωimt_150 = -> s.is_normalized ), true
      s.add_run 299, 302; @eq ( Ωimt_151 = -> [ s..., ] ), [ 1, 297,      299, 300, 301, 302, ]; @eq ( Ωimt_152 = -> s.is_normalized ), true
      s.add_run 298;      @eq ( Ωimt_153 = -> [ s..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_154 = -> s.is_normalized ), true
      s.add_run 300, 301; @eq ( Ωimt_155 = -> [ s..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_156 = -> s.is_normalized ), true
      @eq ( Ωimt_157 = -> s.runs.length       ), 2
      @eq ( Ωimt_158 = -> { s.runs[ 0 ]..., } ), { lo: 1, hi: 1, rowid: 't:hrd:runs,R=9', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωimt_159 = -> { s.runs[ 1 ]..., } ), { lo: 297, hi: 302, rowid: 't:hrd:runs,R=10', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωimt_160 = -> s.points            ), [ 1, 297, 298, 299, 300, 301, 302 ]
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      @eq ( Ωimt_161 = -> [ s.walk()..., ]       ), []
      s.add_run 1;        @eq ( Ωimt_162 = -> [ s.walk()..., ] ), [ 1,                               ]; @eq ( Ωimt_163 = -> s.is_normalized ), true
      s.add_run 297;      @eq ( Ωimt_164 = -> [ s.walk()..., ] ), [ 1, 297,                          ]; @eq ( Ωimt_165 = -> s.is_normalized ), true
      s.add_run 299, 302; @eq ( Ωimt_166 = -> [ s.walk()..., ] ), [ 1, 297,      299, 300, 301, 302, ]; @eq ( Ωimt_167 = -> s.is_normalized ), true
      s.add_run 298;      @eq ( Ωimt_168 = -> [ s.walk()..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_169 = -> s.is_normalized ), true
      s.add_run 300, 301; @eq ( Ωimt_170 = -> [ s.walk()..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_171 = -> s.is_normalized ), true
      @eq ( Ωimt_172 = -> s.runs.length       ), 2
      @eq ( Ωimt_173 = -> { s.runs[ 0 ]..., } ), { lo: 1, hi: 1, rowid: 't:hrd:runs,R=9', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωimt_174 = -> { s.runs[ 1 ]..., } ), { lo: 297, hi: 302, rowid: 't:hrd:runs,R=10', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωimt_175 = -> s.points            ), [ 1, 297, 298, 299, 300, 301, 302 ]
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      @eq ( Ωimt_176 = -> s.points ), []
      s.add_run 1;        @eq ( Ωimt_177 = -> s.points ), [ 1,                               ]; @eq ( Ωimt_178 = -> s.is_normalized ), true
      s.add_run 297;      @eq ( Ωimt_179 = -> s.points ), [ 1, 297,                          ]; @eq ( Ωimt_180 = -> s.is_normalized ), true
      s.add_run 299, 302; @eq ( Ωimt_181 = -> s.points ), [ 1, 297,      299, 300, 301, 302, ]; @eq ( Ωimt_182 = -> s.is_normalized ), true
      s.add_run 298;      @eq ( Ωimt_183 = -> s.points ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_184 = -> s.is_normalized ), true
      s.add_run 300, 301; @eq ( Ωimt_185 = -> s.points ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_186 = -> s.is_normalized ), true
      @eq ( Ωimt_187 = -> s.runs.length       ), 2
      @eq ( Ωimt_188 = -> { s.runs[ 0 ]..., } ), { lo: 1, hi: 1, rowid: 't:hrd:runs,R=9', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωimt_189 = -> { s.runs[ 1 ]..., } ), { lo: 297, hi: 302, rowid: 't:hrd:runs,R=10', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωimt_190 = -> s.points            ), [ 1, 297, 298, 299, 300, 301, 302 ]
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  using_strings_for_bounds: ->
    do =>
      h = new Hoard()
      s = h.add_scatter()
      @throws ( Ωimt_191 = -> s.add_run 5.8         ), /not a valid point/
      # @throws ( Ωimt_192 = -> s.add_run -3          ), /-0x3 is not between \+0x0 and \+0x10ffff/
      @throws ( Ωimt_193 = -> s.add_run 0, -3       ), /lo must be less than or equal to hi/
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard { first: -10, last: +10, }
      s = h.add_scatter()
      s.add_run -10; @eq ( Ωimt_194 = -> s.points   ), [ -10, ]
      s.add_run +10; @eq ( Ωimt_195 = -> s.points   ), [ -10, +10, ]
      @throws ( Ωimt_196 = -> s.add_run -11         ), /expected run to be entirely between -0xa and \+0xa, got \{ lo: -0xb, -0xb, \}/
      @throws ( Ωimt_197 = -> s.add_run +11         ), /expected run to be entirely between -0xa and \+0xa, got \{ lo: \+0xb, \+0xb, \}/
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      s.add_run ( cid_of 'A' );                 @eq ( Ωimt_198 = -> s.points   ), [ ( 'A'.codePointAt 0 ), ]
      s.add_run ( cid_of 'A' ), ( cid_of 'Z' ); @eq ( Ωimt_199 = -> s.points   ), [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90 ]
      s.add_run ( cid_of 'a' ), ( cid_of 'z' ); @eq ( Ωimt_200 = -> s.points   ), [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, \
                                                          100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, ]
      @eq ( Ωimt_201 = -> s.min  ), ( 'A'.codePointAt 0 )
      @eq ( Ωimt_202 = -> s.max  ), ( 'z'.codePointAt 0 )
      @eq ( Ωimt_203 = -> { min: s.min, max: s.max, }  ), s.minmax
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      s = h.add_scatter()
      s = h.add_scatter()
      s.add_codepoints_of 'Abc'
      @eq ( Ωimt_204 = -> s.runs.length ), 3
      @eq ( Ωimt_205 = -> s.points ), [ ( 'A'.codePointAt 0 ), ( 'b'.codePointAt 0 ), ( 'c'.codePointAt 0 ), ]
      @eq ( Ωimt_206 = -> s.runs.length ), 2
      @eq ( Ωimt_207 = -> { s.runs[ 0 ]..., } ), { lo: ( 'A'.codePointAt 0 ), hi: ( 'A'.codePointAt 0 ), rowid: 't:hrd:runs,R=1', scatter: 't:hrd:scatters,R=3', }
      @eq ( Ωimt_208 = -> { s.runs[ 1 ]..., } ), { lo: ( 'b'.codePointAt 0 ), hi: ( 'c'.codePointAt 0 ), rowid: 't:hrd:runs,R=2', scatter: 't:hrd:scatters,R=3', }
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      s.add_codepoints_of 'aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ'
      @eq ( Ωimt_209 = -> ( ( String.fromCodePoint cid ) for cid in s.points ).join '' ), 'AEIOUaeiouÄÖÜäöü'
      @eq ( Ωimt_210 = -> s.runs.length ), 16
      s.normalize()
      @eq ( Ωimt_211 = -> s.runs.length ), 16
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  data_retrieval: ->
    do =>
      h = new Hoard()
      s_vowels = h.add_scatter { tags: [ 'vowel', ], is_ascii: true, }
      s_umlaut = h.add_scatter { tags: [ 'umlaut', ], }
      s_vowels.add_codepoints_of 'aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ'
      s_umlaut.add_codepoints_of 'äöü', 'äöü', 'ÄÖÜ'
      @eq ( Ωimt_212 = -> s_vowels.contains           ( cid_of 'A' )  ), true
      @eq ( Ωimt_213 = -> s_vowels.contains           ( cid_of 'B' )  ), false
      @eq ( Ωimt_214 = -> h.summarize_data_for_point  ( cid_of 'A' )  ), { is_ascii: [ true, ], tags: [ 'vowel', ], }
      @eq ( Ωimt_215 = -> h.summarize_data_for_point  ( cid_of 'ä' )  ), { is_ascii: [ true, ], tags: [ 'umlaut', 'vowel', ], }
      @eq ( Ωimt_216 = -> h.summarize_data_for_point  ( cid_of 'B' )  ), null
      @eq ( Ωimt_217 = -> h.summarize_data_for_point  ( cid_of 'y' )  ), null
      ;null
    #.......................................................................................................
    do =>
      class Vu_hoard extends Hoard
        summarize_data_is_ascii: summarize_data.as_boolean_and
      h = new Vu_hoard()
      s_ascii   = h.add_scatter { is_ascii: true, }
      s_vowels  = h.add_scatter { tags: [ 'vowel', ], }
      s_umlaut  = h.add_scatter { tags: [ 'umlaut', ], }
      s_ascii.add_run ( cid_of 'a' ), ( cid_of 'z' )
      s_ascii.add_run ( cid_of 'A' ), ( cid_of 'Z' )
      s_vowels.add_codepoints_of 'aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ'
      s_umlaut.add_codepoints_of 'äöü', 'äöü', 'ÄÖÜ'
      @eq ( Ωimt_218 = -> s_ascii.contains           ( cid_of 'A' ) ), true
      @eq ( Ωimt_219 = -> s_ascii.contains           ( cid_of 'Q' ) ), true
      @eq ( Ωimt_220 = -> s_ascii.contains           ( cid_of 'f' ) ), true
      @eq ( Ωimt_221 = -> s_vowels.contains          ( cid_of 'A' ) ), true
      @eq ( Ωimt_222 = -> s_vowels.contains          ( cid_of 'B' ) ), false
      @eq ( Ωimt_223 = -> h.get_data_for_point       ( cid_of 'A' ) ), [ { is_ascii: true }, { tags: [ 'vowel' ] } ]
      @eq ( Ωimt_224 = -> h.get_data_for_point       ( cid_of 'Q' ) ), [ { is_ascii: true }, ]
      @eq ( Ωimt_225 = -> h.get_data_for_point       ( cid_of 'f' ) ), [ { is_ascii: true }, ]
      @eq ( Ωimt_226 = -> h.get_data_for_point       ( cid_of 'B' ) ), [ { is_ascii: true }, ]
      @eq ( Ωimt_227 = -> h.get_data_for_point       ( cid_of 'ä' ) ), [ { tags: [ 'vowel', ], }, { tags: [ 'umlaut', ], }, ]
      @eq ( Ωimt_228 = -> h.summarize_data_for_point ( cid_of 'A' ) ), { is_ascii: true, tags: [ 'vowel' ], }
      @eq ( Ωimt_229 = -> h.summarize_data_for_point ( cid_of 'Q' ) ), { is_ascii: true, }
      @eq ( Ωimt_230 = -> h.summarize_data_for_point ( cid_of 'f' ) ), { is_ascii: true, }
      @eq ( Ωimt_231 = -> h.summarize_data_for_point ( cid_of 'B' ) ), { is_ascii: true, }
      @eq ( Ωimt_232 = -> h.summarize_data_for_point ( cid_of 'ä' ) ), { tags: [ 'umlaut', 'vowel', ], }
      #.....................................................................................................
      s_not_ascii = h.add_scatter { is_ascii: false, }
      s_not_ascii.add_run 0x80, 0x10ffff
      @eq ( Ωimt_233 = -> h.summarize_data_for_point      ( cid_of 'B' ) ), { is_ascii: true, }
      @eq ( Ωimt_234 = -> h.summarize_data_for_point      ( cid_of 'ä' ) ), { is_ascii: false, tags: [ 'umlaut', 'vowel', ], }
      @throws ( Ωimt_235 = -> h.summarize_data_for_point  'äwhat'        ), /not a valid point/
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  validation: ->
    { Type,
      Typespace,              } = SFMODULES.unstable.require_nanotypes_v2()
    #.......................................................................................................
    class My_typespace extends Typespace
      #...................................................................................................
      @integer: ( x ) ->
        @assign { x, }
        return true if Number.isSafeInteger x
        return @fail "#{rpr x} is a non-integer number", { fraction: x % 1, } if Number.isFinite x
        return @fail "#{rpr x} is not even a finite number"
      #...................................................................................................
      @text: ( x ) ->
        @assign { x, }
        return true if ( typeof x ) is 'string'
        ;false
      #...................................................................................................
      @point: ( x ) ->
        @assign { x, }
        return true if ( @T.integer.isa x )
        return @fail "#{rpr x} is not an integer and not a text"          unless ( @T.text.isa x )
        return @fail "#{rpr x} is a text but not with a single codepoint" unless ( ( Array.from x ).length is 1 )
        ;true
        # return true if Number.isSafeInteger x
        # return @fail "#{rpr x} is a non-integer number", { fraction: x % 1, } if Number.isFinite x
        # return @fail "#{rpr x} is not even a finite number"
    #.....................................................................................................
    T = new My_typespace()
    debug 'Ωimt_236', T.integer
    debug 'Ωimt_237', T.integer.isa
    #.......................................................................................................
    @eq ( Ωimt_238 = -> T.integer.isa           5         ), true
    @eq ( Ωimt_239 = -> T.point.isa             5         ), true
    @eq ( Ωimt_240 = -> T.point.isa             'a'       ), true
    #.......................................................................................................
    @eq ( Ωimt_241 = -> T.integer.isa           55.5      ), false
    @eq ( Ωimt_242 = -> T.point.isa             55.5      ), false
    @eq ( Ωimt_243 = -> T.point.isa             'abc'     ), false
    #.......................................................................................................
    @eq ( Ωimt_244 = -> T.integer.validate      5         ), 5
    @eq ( Ωimt_245 = -> T.point.validate        5         ), 5
    @eq ( Ωimt_246 = -> T.point.validate        'a'       ), 'a'
    #.......................................................................................................
    @eq ( Ωimt_247 = -> try T.integer.validate  55.5  catch e then return e.message ), """(integer) not a valid integer: 55.5 – 55.5 is a non-integer number"""
    @eq ( Ωimt_248 = -> try T.point.validate    55.5  catch e then return e.message ), """(point) not a valid point: 55.5 – 55.5 is not an integer and not a text"""
    @eq ( Ωimt_249 = -> try T.point.validate    'abc' catch e then return e.message ), """(point) not a valid point: abc – 'abc' is a text but not with a single codepoint"""
    #.......................................................................................................
    @throws ( Ωimt_250 = -> T.integer.validate  55.5      ), /not a valid integer/
    @throws ( Ωimt_251 = -> T.point.validate    55.5      ), /not a valid point/
    @throws ( Ωimt_252 = -> T.point.validate    'abc'     ), /not a valid point/
    @throws ( Ωimt_253 = -> T.point.validate    ''        ), /not a valid point/
    #.......................................................................................................
    ;null




#===========================================================================================================
if module is require.main then await do =>
  do_coverage = false
  do_coverage = true
  if do_coverage
    { Coverage_analyzer,          } = require '../../../apps/bricabrac-sfmodules/lib/coverage-analyzer'
    ca = new Coverage_analyzer()
    ca.wrap_class Hoard
    ca.wrap_class Scatter
    ca.wrap_class Run
  #.........................................................................................................
  guytest_cfg = { throw_on_error: false,  show_passes: true, report_checks: true, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { containment: tests.containment, }
  #.........................................................................................................
  if do_coverage
    warn 'Ωimt_254', "not covered:", ( reverse  bold " #{name} " ) for name in ca.unused_names if ca.unused_names.length > 0
  #.........................................................................................................
  ;null

