

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
  internals,
  summarize_data,       } = require '../../../apps/bricabrac-sfmodules/lib/intermission'
cid_of                    = ( text ) -> text.codePointAt 0




#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  basic_runs: ->
    h = new Hoard()
    d = new Run();                  @eq ( Ωimt___1 = -> [ { d..., }, d.size, ] ), [ { lo: 0, hi: 0, },  1, ]
    d = new Run { hi: 7, };         @eq ( Ωimt___2 = -> [ { d..., }, d.size, ] ), [ { lo: 0, hi: 7, },  8, ]
    d = new Run 7;                  @eq ( Ωimt___3 = -> [ { d..., }, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = new Run 7, 7;               @eq ( Ωimt___4 = -> [ { d..., }, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = new Run 7, 12;              @eq ( Ωimt___5 = -> [ { d..., }, d.size, ] ), [ { lo: 7, hi: 12, }, 6, ]
    d = new Run { lo: 7, };         @eq ( Ωimt___6 = -> [ { d..., }, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = new Run { lo: 7, hi: 7, };  @eq ( Ωimt___7 = -> [ { d..., }, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = new Run { lo: 7, hi: 21, }; @eq ( Ωimt___8 = -> [ { d..., }, d.size, ] ), [ { lo: 7, hi: 21, }, 15, ]
    d = new Run { lo: 7, hi: 21, }; @throws ( Ωimt___9 = -> d.lo = 6   ), /cannot assign to read only property/i
    d = new Run { lo: 7, hi: 21, }; @throws ( Ωimt__10 = -> d.hi = 22  ), /cannot assign to read only property/i
    #.......................................................................................................
    @eq ( Ωimt__11 = -> ( new Run 1, 1 ).scatter ), undefined
    ;null

  #---------------------------------------------------------------------------------------------------------
  basic_scatters: ->
    do =>
      h = new Hoard()
      s = h.add_scatter { a: 1, }
      @eq ( Ωimt__12 = -> { s..., } ), { data: { a: 1 }, rowid: 't:hrd:scatters,R=1', runs: [] }
      @eq ( Ωimt__13 = -> s.is_normalized   ), false
      #.....................................................................................................
      s.add_run { lo: 1, hi: 1, };          @eq ( Ωimt__14 = -> s.runs.length     ), 1
      s.add_run 1;                          @eq ( Ωimt__15 = -> s.runs.length     ), 2
      s.add_run { lo: 1, hi: 1, };          @eq ( Ωimt__16 = -> s.runs.length     ), 3
      # s.add_run new Run { lo: 1, hi: 1, };  @eq ( Ωimt__17 = -> s.runs.length     ), 3
      #.....................................................................................................
      @eq ( Ωimt__18 = -> s.is_normalized   ), false
      # @eq ( Ωimt__19 = -> s.is_sorted       ), false
      @eq ( Ωimt__20 = -> s.data            ), { a: 1, }
      @eq ( Ωimt__21 = -> { s.runs[ 0 ]..., } ), { lo: 1, hi: 1, }
      @eq ( Ωimt__22 = -> { s.runs[ 1 ]..., } ), { lo: 1, hi: 1, }
      @eq ( Ωimt__23 = -> { s.runs[ 2 ]..., } ), { lo: 1, hi: 1, }
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      @eq ( Ωimt__24 = -> s.is_normalized ), false
      s.add_run 103, 109;   @eq ( Ωimt__25 = -> s.runs.length ), 1; @eq ( Ωimt__26 = -> s.is_normalized ), false
      s.add_run 111, 115;   @eq ( Ωimt__27 = -> s.runs.length ), 2; @eq ( Ωimt__28 = -> s.is_normalized ), false
      s.add_run 110;        @eq ( Ωimt__29 = -> s.runs.length ), 3; @eq ( Ωimt__30 = -> s.is_normalized ), false
      @eq ( Ωimt__31 = -> { min: s.min, max: s.max, } ), { min: 103, max: 115, }
      @eq ( Ωimt__32 = -> s.minmax                    ), { min: 103, max: 115, }
      #.....................................................................................................
      @eq ( Ωimt__33 = -> { s.runs[ 0 ]..., } ), { lo: 103, hi: 109, }
      @eq ( Ωimt__34 = -> { s.runs[ 1 ]..., } ), { lo: 111, hi: 115, }
      @eq ( Ωimt__35 = -> { s.runs[ 2 ]..., } ), { lo: 110, hi: 110, }
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
      debug 'Ωimt__36', h
      debug 'Ωimt__37', h.scatters
      @eq ( Ωimt__38 = -> s.contains 'a'                    ), true
      @eq ( Ωimt__39 = -> s.contains { lo: 'a', }           ), true
      @eq ( Ωimt__40 = -> s.contains { lo: 'a', hi: 'y', }  ), true
      @eq ( Ωimt__41 = -> s.contains { lo: 'a', hi: 'z', }  ), true
      @eq ( Ωimt__42 = -> s.contains '0'                    ), false
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  containment: ->
    do =>
      h = new Hoard()
      r = new Run { lo: 25, hi: 30, }
      @eq ( Ωimt__43 = -> r.contains 21                               ), false
      @eq ( Ωimt__44 = -> r.contains 22                               ), false
      @eq ( Ωimt__45 = -> r.contains 23                               ), false
      @eq ( Ωimt__46 = -> r.contains 24                               ), false
      @eq ( Ωimt__47 = -> r.contains 25                               ), true
      @eq ( Ωimt__48 = -> r.contains 26                               ), true
      @eq ( Ωimt__49 = -> r.contains 27                               ), true
      @eq ( Ωimt__50 = -> r.contains 28                               ), true
      @eq ( Ωimt__51 = -> r.contains 29                               ), true
      @eq ( Ωimt__52 = -> r.contains 30                               ), true
      @eq ( Ωimt__53 = -> r.contains 31                               ), false
      @eq ( Ωimt__54 = -> r.contains 41                               ), false
      @eq ( Ωimt__55 = -> r.contains [ 25, ]                          ), true
      @eq ( Ωimt__56 = -> r.contains [ 30, ]                          ), true
      @eq ( Ωimt__57 = -> r.contains [ 31, ]                          ), false
      @eq ( Ωimt__58 = -> r.contains [ 32, ]                          ), false
      @eq ( Ωimt__59 = -> r.contains [ 25 .. 30 ]                     ), true
      @eq ( Ωimt__60 = -> r.contains [ 25 .. 31 ]                     ), false
      @eq ( Ωimt__61 = -> r.contains ( -> yield from [ 25 .. 30 ] )() ), true
      @eq ( Ωimt__62 = -> r.contains ( -> yield from [ 25 .. 31 ] )() ), false
      @eq ( Ωimt__63 = -> r.contains ( -> yield from [ 25 .. 32 ] )() ), false
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      s.add_run 25, 30
      s.add_run 32, 40
      @eq ( Ωimt__64 = -> s.contains 21                               ), false
      @eq ( Ωimt__65 = -> s.contains 22                               ), false
      @eq ( Ωimt__66 = -> s.contains 23                               ), false
      @eq ( Ωimt__67 = -> s.contains 24                               ), false
      @eq ( Ωimt__68 = -> s.contains 25                               ), true
      @eq ( Ωimt__69 = -> s.contains 26                               ), true
      @eq ( Ωimt__70 = -> s.contains 27                               ), true
      @eq ( Ωimt__71 = -> s.contains 28                               ), true
      @eq ( Ωimt__72 = -> s.contains 29                               ), true
      @eq ( Ωimt__73 = -> s.contains 30                               ), true
      @eq ( Ωimt__74 = -> s.contains 31                               ), false
      @eq ( Ωimt__75 = -> s.contains 32                               ), true
      @eq ( Ωimt__76 = -> s.contains 33                               ), true
      @eq ( Ωimt__77 = -> s.contains 34                               ), true
      @eq ( Ωimt__78 = -> s.contains 35                               ), true
      @eq ( Ωimt__79 = -> s.contains 36                               ), true
      @eq ( Ωimt__80 = -> s.contains 37                               ), true
      @eq ( Ωimt__81 = -> s.contains 38                               ), true
      @eq ( Ωimt__82 = -> s.contains 39                               ), true
      @eq ( Ωimt__83 = -> s.contains 40                               ), true
      @eq ( Ωimt__84 = -> s.contains 41                               ), false
      @eq ( Ωimt__85 = -> s.contains 42                               ), false
      @eq ( Ωimt__86 = -> s.contains 43                               ), false
      @eq ( Ωimt__87 = -> [ 25 .. 30 ].every ( n ) -> s.contains n    ), true
      @eq ( Ωimt__88 = -> [ 25 .. 31 ].every ( n ) -> s.contains n    ), false
      @eq ( Ωimt__89 = -> [ 30, ].every ( n ) -> s.contains n         ), true
      @eq ( Ωimt__90 = -> [ 31, ].every ( n ) -> s.contains n         ), false
      @eq ( Ωimt__91 = -> [ 32, ].every ( n ) -> s.contains n         ), true
      @eq ( Ωimt__92 = -> ( ( -> yield from [ 25 .. 30 ] )() ).every ( n ) -> s.contains n ), true
      @eq ( Ωimt__93 = -> ( ( -> yield from [ 25 .. 31 ] )() ).every ( n ) -> s.contains n ), false
      @eq ( Ωimt__94 = -> ( ( -> yield from [ 25 .. 32 ] )() ).every ( n ) -> s.contains n ), false
      @eq ( Ωimt__95 = -> ( [ ( new Run 25      )..., ] ).every ( n ) -> s.contains n ), true
      @eq ( Ωimt__96 = -> ( [ ( new Run 25, 30  )..., ] ).every ( n ) -> s.contains n ), true
      @eq ( Ωimt__97 = -> ( [ ( new Run 25, 32  )..., ] ).every ( n ) -> s.contains n ), false
      #.....................................................................................................
      @eq ( Ωimt__98 = -> h.contains 21                               ), false
      @eq ( Ωimt__99 = -> h.contains 22                               ), false
      @eq ( Ωimt_100 = -> h.contains 23                               ), false
      @eq ( Ωimt_101 = -> h.contains 24                               ), false
      @eq ( Ωimt_102 = -> h.contains 25                               ), true
      @eq ( Ωimt_103 = -> h.contains 26                               ), true
      @eq ( Ωimt_104 = -> h.contains 27                               ), true
      @eq ( Ωimt_105 = -> h.contains 28                               ), true
      @eq ( Ωimt_106 = -> h.contains 29                               ), true
      @eq ( Ωimt_107 = -> h.contains 30                               ), true
      @eq ( Ωimt_108 = -> h.contains 31                               ), false
      @eq ( Ωimt_109 = -> h.contains 32                               ), true
      @eq ( Ωimt_110 = -> h.contains 33                               ), true
      @eq ( Ωimt_111 = -> h.contains 34                               ), true
      @eq ( Ωimt_112 = -> h.contains 35                               ), true
      @eq ( Ωimt_113 = -> h.contains 36                               ), true
      @eq ( Ωimt_114 = -> h.contains 37                               ), true
      @eq ( Ωimt_115 = -> h.contains 38                               ), true
      @eq ( Ωimt_116 = -> h.contains 39                               ), true
      @eq ( Ωimt_117 = -> h.contains 40                               ), true
      @eq ( Ωimt_118 = -> h.contains 41                               ), false
      @eq ( Ωimt_119 = -> h.contains 42                               ), false
      @eq ( Ωimt_120 = -> h.contains 43                               ), false
      @eq ( Ωimt_121 = -> [ 25 .. 30 ].every ( n ) -> h.contains n    ), true
      @eq ( Ωimt_122 = -> [ 25 .. 31 ].every ( n ) -> h.contains n    ), false
      @eq ( Ωimt_123 = -> [ 30, ].every ( n ) -> h.contains n         ), true
      @eq ( Ωimt_124 = -> [ 31, ].every ( n ) -> h.contains n         ), false
      @eq ( Ωimt_125 = -> [ 32, ].every ( n ) -> h.contains n         ), true
      @eq ( Ωimt_126 = -> ( ( -> yield from [ 25 .. 30 ] )() ).every ( n ) -> h.contains n ), true
      @eq ( Ωimt_127 = -> ( ( -> yield from [ 25 .. 31 ] )() ).every ( n ) -> h.contains n ), false
      @eq ( Ωimt_128 = -> ( ( -> yield from [ 25 .. 32 ] )() ).every ( n ) -> h.contains n ), false
      @eq ( Ωimt_129 = -> ( [ ( new Run 25      )..., ] ).every ( n ) -> h.contains n ), true
      @eq ( Ωimt_130 = -> ( [ ( new Run 25, 30  )..., ] ).every ( n ) -> h.contains n ), true
      @eq ( Ωimt_131 = -> ( [ ( new Run 25, 32  )..., ] ).every ( n ) -> h.contains n ), false
      #.....................................................................................................
      # s1 = h.add_scatter()
      # s1.add_run 26, 27
      # s1.add_run 37, 40
      # @eq ( Ωimt_132 = -> s1.is_normalized                            ), false
      # @eq ( Ωimt_133 = -> s.contains s1                               ), true
      # @eq ( Ωimt_134 = -> s1.is_normalized                            ), true
      # s1.add_run 25, 32
      # @eq ( Ωimt_135 = -> s.contains s1                               ), false
      # @eq ( Ωimt_136 = -> s.is_normalized                             ), true
      # s.add_run 31
      # @eq ( Ωimt_137 = -> s.is_normalized                             ), false
      # @eq ( Ωimt_138 = -> s.contains s1                               ), true
      # @eq ( Ωimt_139 = -> s.is_normalized                             ), true
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  iteration: ->
    do =>
      h = new Hoard()
      @eq ( Ωimt_140 = -> [ ( new Run 1         )..., ]       ), [ 1, ]
      @eq ( Ωimt_141 = -> [ ( new Run 297       )..., ]       ), [ 297, ]
      @eq ( Ωimt_142 = -> [ ( new Run 297, 308  )..., ]       ), [ 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308 ]
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      @eq ( Ωimt_143 = -> [ s..., ]       ), []
      s.add_run 1;        @eq ( Ωimt_144 = -> [ s..., ] ), [ 1,                               ]; @eq ( Ωimt_145 = -> s.is_normalized ), true
      s.add_run 297;      @eq ( Ωimt_146 = -> [ s..., ] ), [ 1, 297,                          ]; @eq ( Ωimt_147 = -> s.is_normalized ), true
      s.add_run 299, 302; @eq ( Ωimt_148 = -> [ s..., ] ), [ 1, 297,      299, 300, 301, 302, ]; @eq ( Ωimt_149 = -> s.is_normalized ), true
      s.add_run 298;      @eq ( Ωimt_150 = -> [ s..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_151 = -> s.is_normalized ), true
      s.add_run 300, 301; @eq ( Ωimt_152 = -> [ s..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_153 = -> s.is_normalized ), true
      @eq ( Ωimt_154 = -> s.runs.length       ), 2
      @eq ( Ωimt_155 = -> { s.runs[ 0 ]..., } ), { lo: 1, hi: 1, rowid: 't:hrd:runs,R=9', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωimt_156 = -> { s.runs[ 1 ]..., } ), { lo: 297, hi: 302, rowid: 't:hrd:runs,R=10', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωimt_157 = -> s.points            ), [ 1, 297, 298, 299, 300, 301, 302 ]
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      @eq ( Ωimt_158 = -> [ s.walk()..., ]       ), []
      s.add_run 1;        @eq ( Ωimt_159 = -> [ s.walk()..., ] ), [ 1,                               ]; @eq ( Ωimt_160 = -> s.is_normalized ), true
      s.add_run 297;      @eq ( Ωimt_161 = -> [ s.walk()..., ] ), [ 1, 297,                          ]; @eq ( Ωimt_162 = -> s.is_normalized ), true
      s.add_run 299, 302; @eq ( Ωimt_163 = -> [ s.walk()..., ] ), [ 1, 297,      299, 300, 301, 302, ]; @eq ( Ωimt_164 = -> s.is_normalized ), true
      s.add_run 298;      @eq ( Ωimt_165 = -> [ s.walk()..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_166 = -> s.is_normalized ), true
      s.add_run 300, 301; @eq ( Ωimt_167 = -> [ s.walk()..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_168 = -> s.is_normalized ), true
      @eq ( Ωimt_169 = -> s.runs.length       ), 2
      @eq ( Ωimt_170 = -> { s.runs[ 0 ]..., } ), { lo: 1, hi: 1, rowid: 't:hrd:runs,R=9', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωimt_171 = -> { s.runs[ 1 ]..., } ), { lo: 297, hi: 302, rowid: 't:hrd:runs,R=10', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωimt_172 = -> s.points            ), [ 1, 297, 298, 299, 300, 301, 302 ]
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      @eq ( Ωimt_173 = -> s.points ), []
      s.add_run 1;        @eq ( Ωimt_174 = -> s.points ), [ 1,                               ]; @eq ( Ωimt_175 = -> s.is_normalized ), true
      s.add_run 297;      @eq ( Ωimt_176 = -> s.points ), [ 1, 297,                          ]; @eq ( Ωimt_177 = -> s.is_normalized ), true
      s.add_run 299, 302; @eq ( Ωimt_178 = -> s.points ), [ 1, 297,      299, 300, 301, 302, ]; @eq ( Ωimt_179 = -> s.is_normalized ), true
      s.add_run 298;      @eq ( Ωimt_180 = -> s.points ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_181 = -> s.is_normalized ), true
      s.add_run 300, 301; @eq ( Ωimt_182 = -> s.points ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_183 = -> s.is_normalized ), true
      @eq ( Ωimt_184 = -> s.runs.length       ), 2
      @eq ( Ωimt_185 = -> { s.runs[ 0 ]..., } ), { lo: 1, hi: 1, rowid: 't:hrd:runs,R=9', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωimt_186 = -> { s.runs[ 1 ]..., } ), { lo: 297, hi: 302, rowid: 't:hrd:runs,R=10', scatter: 't:hrd:scatters,R=1' }
      @eq ( Ωimt_187 = -> s.points            ), [ 1, 297, 298, 299, 300, 301, 302 ]
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  using_strings_for_bounds: ->
    do =>
      h = new Hoard()
      s = h.add_scatter()
      @throws ( Ωimt_188 = -> s.add_run 5.8         ), /not a valid point/
      # @throws ( Ωimt_189 = -> s.add_run -3          ), /-0x3 is not between \+0x0 and \+0x10ffff/
      @throws ( Ωimt_190 = -> s.add_run 0, -3       ), /lo must be less than or equal to hi/
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard { first: -10, last: +10, }
      s = h.add_scatter()
      s.add_run -10; @eq ( Ωimt_191 = -> s.points   ), [ -10, ]
      s.add_run +10; @eq ( Ωimt_192 = -> s.points   ), [ -10, +10, ]
      @throws ( Ωimt_193 = -> s.add_run -11         ), /expected run to be entirely between -0xa and \+0xa, got \{ lo: -0xb, -0xb, \}/
      @throws ( Ωimt_194 = -> s.add_run +11         ), /expected run to be entirely between -0xa and \+0xa, got \{ lo: \+0xb, \+0xb, \}/
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      s.add_run ( cid_of 'A' );                 @eq ( Ωimt_195 = -> s.points   ), [ ( 'A'.codePointAt 0 ), ]
      s.add_run ( cid_of 'A' ), ( cid_of 'Z' ); @eq ( Ωimt_196 = -> s.points   ), [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90 ]
      s.add_run ( cid_of 'a' ), ( cid_of 'z' ); @eq ( Ωimt_197 = -> s.points   ), [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, \
                                                          100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, ]
      @eq ( Ωimt_198 = -> s.min  ), ( 'A'.codePointAt 0 )
      @eq ( Ωimt_199 = -> s.max  ), ( 'z'.codePointAt 0 )
      @eq ( Ωimt_200 = -> { min: s.min, max: s.max, }  ), s.minmax
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      s = h.add_scatter()
      s = h.add_scatter()
      s.add_codepoints_of 'Abc'
      @eq ( Ωimt_201 = -> s.runs.length ), 3
      @eq ( Ωimt_202 = -> s.points ), [ ( 'A'.codePointAt 0 ), ( 'b'.codePointAt 0 ), ( 'c'.codePointAt 0 ), ]
      @eq ( Ωimt_203 = -> s.runs.length ), 2
      @eq ( Ωimt_204 = -> { s.runs[ 0 ]..., } ), { lo: ( 'A'.codePointAt 0 ), hi: ( 'A'.codePointAt 0 ), rowid: 't:hrd:runs,R=1', scatter: 't:hrd:scatters,R=3', }
      @eq ( Ωimt_205 = -> { s.runs[ 1 ]..., } ), { lo: ( 'b'.codePointAt 0 ), hi: ( 'c'.codePointAt 0 ), rowid: 't:hrd:runs,R=2', scatter: 't:hrd:scatters,R=3', }
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.add_scatter()
      s.add_codepoints_of 'aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ'
      @eq ( Ωimt_206 = -> ( ( String.fromCodePoint cid ) for cid in s.points ).join '' ), 'AEIOUaeiouÄÖÜäöü'
      @eq ( Ωimt_207 = -> s.runs.length ), 16
      s.normalize()
      @eq ( Ωimt_208 = -> s.runs.length ), 16
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
      @eq ( Ωimt_209 = -> s_vowels.contains           ( cid_of 'A' )  ), true
      @eq ( Ωimt_210 = -> s_vowels.contains           ( cid_of 'B' )  ), false
      @eq ( Ωimt_211 = -> h.summarize_data_for_point  ( cid_of 'A' )  ), { is_ascii: [ true, ], tags: [ 'vowel', ], }
      @eq ( Ωimt_212 = -> h.summarize_data_for_point  ( cid_of 'ä' )  ), { is_ascii: [ true, ], tags: [ 'umlaut', 'vowel', ], }
      @eq ( Ωimt_213 = -> h.summarize_data_for_point  ( cid_of 'B' )  ), null
      @eq ( Ωimt_214 = -> h.summarize_data_for_point  ( cid_of 'y' )  ), null
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
      @eq ( Ωimt_215 = -> s_ascii.contains           ( cid_of 'A' ) ), true
      @eq ( Ωimt_216 = -> s_ascii.contains           ( cid_of 'Q' ) ), true
      @eq ( Ωimt_217 = -> s_ascii.contains           ( cid_of 'f' ) ), true
      @eq ( Ωimt_218 = -> s_vowels.contains          ( cid_of 'A' ) ), true
      @eq ( Ωimt_219 = -> s_vowels.contains          ( cid_of 'B' ) ), false
      @eq ( Ωimt_220 = -> h.get_data_for_point       ( cid_of 'A' ) ), [ { is_ascii: true }, { tags: [ 'vowel' ] } ]
      @eq ( Ωimt_221 = -> h.get_data_for_point       ( cid_of 'Q' ) ), [ { is_ascii: true }, ]
      @eq ( Ωimt_222 = -> h.get_data_for_point       ( cid_of 'f' ) ), [ { is_ascii: true }, ]
      @eq ( Ωimt_223 = -> h.get_data_for_point       ( cid_of 'B' ) ), [ { is_ascii: true }, ]
      @eq ( Ωimt_224 = -> h.get_data_for_point       ( cid_of 'ä' ) ), [ { tags: [ 'vowel', ], }, { tags: [ 'umlaut', ], }, ]
      @eq ( Ωimt_225 = -> h.summarize_data_for_point ( cid_of 'A' ) ), { is_ascii: true, tags: [ 'vowel' ], }
      @eq ( Ωimt_226 = -> h.summarize_data_for_point ( cid_of 'Q' ) ), { is_ascii: true, }
      @eq ( Ωimt_227 = -> h.summarize_data_for_point ( cid_of 'f' ) ), { is_ascii: true, }
      @eq ( Ωimt_228 = -> h.summarize_data_for_point ( cid_of 'B' ) ), { is_ascii: true, }
      @eq ( Ωimt_229 = -> h.summarize_data_for_point ( cid_of 'ä' ) ), { tags: [ 'umlaut', 'vowel', ], }
      #.....................................................................................................
      s_not_ascii = h.add_scatter { is_ascii: false, }
      s_not_ascii.add_run 0x80, 0x10ffff
      @eq ( Ωimt_230 = -> h.summarize_data_for_point      ( cid_of 'B' ) ), { is_ascii: true, }
      @eq ( Ωimt_231 = -> h.summarize_data_for_point      ( cid_of 'ä' ) ), { is_ascii: false, tags: [ 'umlaut', 'vowel', ], }
      @throws ( Ωimt_232 = -> h.summarize_data_for_point  'äwhat'        ), /not a valid point/
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  validation: ->
    #.......................................................................................................
    @eq ( Ωimt_235 = -> internals.typespace.integer.isa           5         ), true
    @eq ( Ωimt_236 = -> internals.typespace.point.isa             5         ), true
    @eq ( Ωimt_237 = -> internals.typespace.point.isa             'a'       ), false
    #.......................................................................................................
    @eq ( Ωimt_238 = -> internals.typespace.integer.isa           55.5      ), false
    @eq ( Ωimt_239 = -> internals.typespace.point.isa             55.5      ), false
    @eq ( Ωimt_240 = -> internals.typespace.point.isa             'abc'     ), false
    #.......................................................................................................
    @eq ( Ωimt_241 = -> internals.typespace.integer.validate      5         ), 5
    @eq ( Ωimt_242 = -> internals.typespace.point.validate        5         ), 5
    @throws ( Ωimt_243 = -> internals.typespace.point.validate        'a'       ), /not a valid point/
    #.......................................................................................................
    @throws ( Ωimt_244 = -> internals.typespace.integer.validate  55.5      ), /not a valid integer/
    @throws ( Ωimt_245 = -> internals.typespace.point.validate    55.5      ), /not a valid point/
    @throws ( Ωimt_246 = -> internals.typespace.point.validate    'abc'     ), /not a valid point/
    #.......................................................................................................
    @throws ( Ωimt_247 = -> internals.typespace.integer.validate  55.5      ), /not a valid integer/
    @throws ( Ωimt_248 = -> internals.typespace.point.validate    55.5      ), /not a valid point/
    @throws ( Ωimt_249 = -> internals.typespace.point.validate    'abc'     ), /not a valid point/
    @throws ( Ωimt_250 = -> internals.typespace.point.validate    ''        ), /not a valid point/
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
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { containment: tests.containment, }
  #.........................................................................................................
  if do_coverage
    warn 'Ωimt_251', "not covered:", ( reverse  bold " #{name} " ) for name in ca.unused_names if ca.unused_names.length > 0
  #.........................................................................................................
  ;null

