

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




#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  basic_runs: ->
    { Hoard,                    } = SFMODULES.require_intermission()
    #.......................................................................................................
    h = new Hoard()
    @throws ( Ωimt___1 = -> h.create_run()           ), /expected an integer or a text, got a null/
    @throws ( Ωimt___2 = -> h.create_run { hi: 7, }  ), /expected an integer or a text, got a null/
    # d = h.create_run();                  @eq ( Ωimt___3 = -> [ d, d.size, ] ), [ { lo: 0, hi: 0, },  1, ]
    d = h.create_run 7;                  @eq ( Ωimt___4 = -> [ d, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = h.create_run 7, 7;               @eq ( Ωimt___5 = -> [ d, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = h.create_run 7, 12;              @eq ( Ωimt___6 = -> [ d, d.size, ] ), [ { lo: 7, hi: 12, }, 6, ]
    d = h.create_run { lo: 7, };         @eq ( Ωimt___7 = -> [ d, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = h.create_run { lo: 7, hi: 7, };  @eq ( Ωimt___8 = -> [ d, d.size, ] ), [ { lo: 7, hi: 7, },  1, ]
    d = h.create_run { lo: 7, hi: 21, }; @eq ( Ωimt___9 = -> [ d, d.size, ] ), [ { lo: 7, hi: 21, }, 15, ]
    #.......................................................................................................
    @eq ( Ωimt__10 = -> ( h.create_run 1, 1 ).scatter ), undefined
    return null

  #---------------------------------------------------------------------------------------------------------
  basic_scatters: ->
    { Hoard,                    } = SFMODULES.require_intermission()
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter { data: { a: 1, } }
      @eq ( Ωimt__11 = -> { s..., } ), { data: { a: 1, }, runs: [], }
      @eq ( Ωimt__12 = -> s.is_normalized   ), true
      #.....................................................................................................
      s.add { lo: 1, hi: 1, };          @eq ( Ωimt__13 = -> s.runs.length     ), 1
      s.add 1;                          @eq ( Ωimt__14 = -> s.runs.length     ), 2
      s.add { lo: 1, hi: 1, };          @eq ( Ωimt__15 = -> s.runs.length     ), 3
      # s.add new Run { lo: 1, hi: 1, };  @eq ( Ωimt__16 = -> s.runs.length     ), 3
      #.....................................................................................................
      @eq ( Ωimt__17 = -> s.is_normalized   ), false
      # @eq ( Ωimt__18 = -> s.is_sorted       ), false
      @eq ( Ωimt__19 = -> s.data            ), { a: 1, }
      @eq ( Ωimt__20 = -> s.runs[ 0 ]       ), { lo: 1, hi: 1, }
      @eq ( Ωimt__21 = -> s.runs[ 1 ]       ), { lo: 1, hi: 1, }
      @eq ( Ωimt__22 = -> s.runs[ 2 ]       ), { lo: 1, hi: 1, }
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter { data: { a: 2, }, sort: true, }
      @eq ( Ωimt__23 = -> s.is_normalized   ), true
      # @eq ( Ωimt__24 = -> s.is_sorted       ), false
      s.add { lo: 1, hi: 1, };          @eq ( Ωimt__25 = -> s.runs.length     ), 1; @eq ( Ωimt__26 = -> s.is_normalized ), false
      s.add 1;                          @eq ( Ωimt__27 = -> s.runs.length     ), 2; @eq ( Ωimt__28 = -> s.is_normalized ), false
      s.add { lo: 1, hi: 1, };          @eq ( Ωimt__29 = -> s.runs.length     ), 3; @eq ( Ωimt__30 = -> s.is_normalized ), false
      # s.add new Run { lo: 1, hi: 1, };  @eq ( Ωimt__31 = -> s.runs.length     ), 3; @eq ( Ωimt__32 = -> s.is_normalized ), false
      #.....................................................................................................
      @eq ( Ωimt__33 = -> s.data            ), { a: 2, }
      @eq ( Ωimt__34 = -> s.runs[ 0 ]       ), { lo: 1, hi: 1, }
      @eq ( Ωimt__35 = -> s.runs[ 1 ]       ), { lo: 1, hi: 1, }
      @eq ( Ωimt__36 = -> s.runs[ 2 ]       ), { lo: 1, hi: 1, }
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter { data: { a: 3, }, normalize: true, }
      @eq ( Ωimt__37 = -> s.is_normalized ), true
      s.add { lo: 1, hi: 1, };          @eq ( Ωimt__38 = -> s.runs.length ), 1; @eq ( Ωimt__39 = -> s.is_normalized ), true
      s.add 1;                          @eq ( Ωimt__40 = -> s.runs.length ), 1; @eq ( Ωimt__41 = -> s.is_normalized ), true
      s.add { lo: 1, hi: 1, };          @eq ( Ωimt__42 = -> s.runs.length ), 1; @eq ( Ωimt__43 = -> s.is_normalized ), true
      # s.add new Run { lo: 1, hi: 1, };  @eq ( Ωimt__44 = -> s.runs.length ), 1; @eq ( Ωimt__45 = -> s.is_normalized ), true
      #.....................................................................................................
      @eq ( Ωimt__46 = -> s.data            ), { a: 3, }
      @eq ( Ωimt__47 = -> s.runs[ 0 ]       ), { lo: 1, hi: 1, }
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter { data: { a: 4, }, normalize: true, }
      @eq ( Ωimt__48 = -> s.is_normalized ), true
      s.add 103;  @eq ( Ωimt__49 = -> s.runs.length ), 1; @eq ( Ωimt__50 = -> s.is_normalized ), true
      s.add 100;  @eq ( Ωimt__51 = -> s.runs.length ), 2; @eq ( Ωimt__52 = -> s.is_normalized ), true
      s.add 101;  @eq ( Ωimt__53 = -> s.runs.length ), 2; @eq ( Ωimt__54 = -> s.is_normalized ), true
      #.....................................................................................................
      debug 'Ωimt__55', run for run in s.runs
      @eq ( Ωimt__56 = -> s.data            ), { a: 4, }
      @eq ( Ωimt__57 = -> s.runs[ 0 ]       ), { lo: 100, hi: 101, }
      @eq ( Ωimt__58 = -> s.runs[ 1 ]       ), { lo: 103, hi: 103, }
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter { normalize: true, }
      @eq ( Ωimt__59 = -> s.is_normalized ), true
      s.add 103, 109;   @eq ( Ωimt__60 = -> s.runs.length ), 1; @eq ( Ωimt__61 = -> s.is_normalized ), true
      s.add 111, 115;   @eq ( Ωimt__62 = -> s.runs.length ), 2; @eq ( Ωimt__63 = -> s.is_normalized ), true
      s.add 110;        @eq ( Ωimt__64 = -> s.runs.length ), 1; @eq ( Ωimt__65 = -> s.is_normalized ), true
      @eq ( Ωimt__66 = -> { min: s.min, max: s.max, } ), { min: 103, max: 115, }
      @eq ( Ωimt__67 = -> s.minmax                    ), { min: 103, max: 115, }
      #.....................................................................................................
      @eq ( Ωimt__68 = -> s.runs[ 0 ]       ), { lo: 103, hi: 115, }
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter { normalize: false, }
      @eq ( Ωimt__69 = -> s.is_normalized ), true
      s.add 103, 109;   @eq ( Ωimt__70 = -> s.runs.length ), 1; @eq ( Ωimt__71 = -> s.is_normalized ), false
      s.add 111, 115;   @eq ( Ωimt__72 = -> s.runs.length ), 2; @eq ( Ωimt__73 = -> s.is_normalized ), false
      s.add 110;        @eq ( Ωimt__74 = -> s.runs.length ), 3; @eq ( Ωimt__75 = -> s.is_normalized ), false
      @eq ( Ωimt__76 = -> { min: s.min, max: s.max, } ), { min: 103, max: 115, }
      @eq ( Ωimt__77 = -> s.minmax                    ), { min: 103, max: 115, }
      #.....................................................................................................
      @eq ( Ωimt__78 = -> s.runs[ 0 ] ), { lo: 103, hi: 109, }
      @eq ( Ωimt__79 = -> s.runs[ 1 ] ), { lo: 111, hi: 115, }
      @eq ( Ωimt__80 = -> s.runs[ 2 ] ), { lo: 110, hi: 110, }
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  containment: ->
    { Hoard,                    } = SFMODULES.require_intermission()
    #.......................................................................................................
    do =>
      h = new Hoard()
      r = h.create_run { lo: 25, hi: 30, }
      @eq ( Ωimt__81 = -> r.contains 21                               ), false
      @eq ( Ωimt__82 = -> r.contains 22                               ), false
      @eq ( Ωimt__83 = -> r.contains 23                               ), false
      @eq ( Ωimt__84 = -> r.contains 24                               ), false
      @eq ( Ωimt__85 = -> r.contains 25                               ), true
      @eq ( Ωimt__86 = -> r.contains 26                               ), true
      @eq ( Ωimt__87 = -> r.contains 27                               ), true
      @eq ( Ωimt__88 = -> r.contains 28                               ), true
      @eq ( Ωimt__89 = -> r.contains 29                               ), true
      @eq ( Ωimt__90 = -> r.contains 30                               ), true
      @eq ( Ωimt__91 = -> r.contains 31                               ), false
      @eq ( Ωimt__92 = -> r.contains 41                               ), false
      @eq ( Ωimt__93 = -> r.contains [ 25, ]                          ), true
      @eq ( Ωimt__94 = -> r.contains [ 30, ]                          ), true
      @eq ( Ωimt__95 = -> r.contains [ 31, ]                          ), false
      @eq ( Ωimt__96 = -> r.contains [ 32, ]                          ), false
      @eq ( Ωimt__97 = -> r.contains [ 25 .. 30 ]                     ), true
      @eq ( Ωimt__98 = -> r.contains [ 25 .. 31 ]                     ), false
      @eq ( Ωimt__99 = -> r.contains ( -> yield from [ 25 .. 30 ] )() ), true
      @eq ( Ωimt_100 = -> r.contains ( -> yield from [ 25 .. 31 ] )() ), false
      @eq ( Ωimt_101 = -> r.contains ( -> yield from [ 25 .. 32 ] )() ), false
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      s.add 25, 30
      s.add 32, 40
      @eq ( Ωimt_102 = -> s.contains 21                               ), false
      @eq ( Ωimt_103 = -> s.contains 22                               ), false
      @eq ( Ωimt_104 = -> s.contains 23                               ), false
      @eq ( Ωimt_105 = -> s.contains 24                               ), false
      @eq ( Ωimt_106 = -> s.contains 25                               ), true
      @eq ( Ωimt_107 = -> s.contains 26                               ), true
      @eq ( Ωimt_108 = -> s.contains 27                               ), true
      @eq ( Ωimt_109 = -> s.contains 28                               ), true
      @eq ( Ωimt_110 = -> s.contains 29                               ), true
      @eq ( Ωimt_111 = -> s.contains 30                               ), true
      @eq ( Ωimt_112 = -> s.contains 31                               ), false
      @eq ( Ωimt_113 = -> s.contains 32                               ), true
      @eq ( Ωimt_114 = -> s.contains 33                               ), true
      @eq ( Ωimt_115 = -> s.contains 34                               ), true
      @eq ( Ωimt_116 = -> s.contains 35                               ), true
      @eq ( Ωimt_117 = -> s.contains 36                               ), true
      @eq ( Ωimt_118 = -> s.contains 37                               ), true
      @eq ( Ωimt_119 = -> s.contains 38                               ), true
      @eq ( Ωimt_120 = -> s.contains 39                               ), true
      @eq ( Ωimt_121 = -> s.contains 40                               ), true
      @eq ( Ωimt_122 = -> s.contains 41                               ), false
      @eq ( Ωimt_123 = -> s.contains 42                               ), false
      @eq ( Ωimt_124 = -> s.contains 43                               ), false
      @eq ( Ωimt_125 = -> s.contains [ 25 .. 30 ]                     ), true
      @eq ( Ωimt_126 = -> s.contains [ 25 .. 31 ]                     ), false
      @eq ( Ωimt_127 = -> s.contains [ 30, ]                          ), true
      @eq ( Ωimt_128 = -> s.contains [ 31, ]                          ), false
      @eq ( Ωimt_129 = -> s.contains [ 32, ]                          ), true
      @eq ( Ωimt_130 = -> s.contains ( -> yield from [ 25 .. 30 ] )() ), true
      @eq ( Ωimt_131 = -> s.contains ( -> yield from [ 25 .. 31 ] )() ), false
      @eq ( Ωimt_132 = -> s.contains ( -> yield from [ 25 .. 32 ] )() ), false
      @eq ( Ωimt_133 = -> s.contains ( h.create_run 25              ) ), true
      @eq ( Ωimt_134 = -> s.contains ( h.create_run 25, 30          ) ), true
      @eq ( Ωimt_135 = -> s.contains ( h.create_run 25, 32          ) ), false
      s1 = h.create_scatter()
      s1.add 26, 27
      s1.add 37, 40
      @eq ( Ωimt_136 = -> s1.is_normalized                            ), false
      @eq ( Ωimt_137 = -> s.contains s1                               ), true
      @eq ( Ωimt_138 = -> s1.is_normalized                            ), true
      s1.add 25, 32
      @eq ( Ωimt_139 = -> s.contains s1                               ), false
      @eq ( Ωimt_140 = -> s.is_normalized                             ), true
      s.add 31
      @eq ( Ωimt_141 = -> s.is_normalized                             ), false
      @eq ( Ωimt_142 = -> s.contains s1                               ), true
      @eq ( Ωimt_143 = -> s.is_normalized                             ), true
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  iteration: ->
    { Hoard,                    } = SFMODULES.require_intermission()
    #.......................................................................................................
    do =>
      h = new Hoard()
      @eq ( Ωimt_144 = -> [ ( h.create_run 1         )..., ]       ), [ 1, ]
      @eq ( Ωimt_145 = -> [ ( h.create_run 297       )..., ]       ), [ 297, ]
      @eq ( Ωimt_146 = -> [ ( h.create_run 297, 308  )..., ]       ), [ 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308 ]
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      @eq ( Ωimt_147 = -> [ s..., ]       ), []
      s.add 1;        @eq ( Ωimt_148 = -> [ s..., ] ), [ 1,                               ]; @eq ( Ωimt_149 = -> s.is_normalized ), true
      s.add 297;      @eq ( Ωimt_150 = -> [ s..., ] ), [ 1, 297,                          ]; @eq ( Ωimt_151 = -> s.is_normalized ), true
      s.add 299, 302; @eq ( Ωimt_152 = -> [ s..., ] ), [ 1, 297,      299, 300, 301, 302, ]; @eq ( Ωimt_153 = -> s.is_normalized ), true
      s.add 298;      @eq ( Ωimt_154 = -> [ s..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_155 = -> s.is_normalized ), true
      s.add 300, 301; @eq ( Ωimt_156 = -> [ s..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_157 = -> s.is_normalized ), true
      @eq ( Ωimt_158 = -> s.runs.length   ), 2
      @eq ( Ωimt_159 = -> s.runs[ 0 ]     ), { lo: 1, hi: 1, }
      @eq ( Ωimt_160 = -> s.runs[ 1 ]     ), { lo: 297, hi: 302, }
      @eq ( Ωimt_161 = -> s.points        ), [ 1, 297, 298, 299, 300, 301, 302 ]
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      @eq ( Ωimt_162 = -> [ s.walk()..., ]       ), []
      s.add 1;        @eq ( Ωimt_163 = -> [ s.walk()..., ] ), [ 1,                               ]; @eq ( Ωimt_164 = -> s.is_normalized ), true
      s.add 297;      @eq ( Ωimt_165 = -> [ s.walk()..., ] ), [ 1, 297,                          ]; @eq ( Ωimt_166 = -> s.is_normalized ), true
      s.add 299, 302; @eq ( Ωimt_167 = -> [ s.walk()..., ] ), [ 1, 297,      299, 300, 301, 302, ]; @eq ( Ωimt_168 = -> s.is_normalized ), true
      s.add 298;      @eq ( Ωimt_169 = -> [ s.walk()..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_170 = -> s.is_normalized ), true
      s.add 300, 301; @eq ( Ωimt_171 = -> [ s.walk()..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_172 = -> s.is_normalized ), true
      @eq ( Ωimt_173 = -> s.runs.length   ), 2
      @eq ( Ωimt_174 = -> s.runs[ 0 ]     ), { lo: 1, hi: 1, }
      @eq ( Ωimt_175 = -> s.runs[ 1 ]     ), { lo: 297, hi: 302, }
      @eq ( Ωimt_176 = -> s.points        ), [ 1, 297, 298, 299, 300, 301, 302 ]
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      @eq ( Ωimt_177 = -> s.points ), []
      s.add 1;        @eq ( Ωimt_178 = -> s.points ), [ 1,                               ]; @eq ( Ωimt_179 = -> s.is_normalized ), true
      s.add 297;      @eq ( Ωimt_180 = -> s.points ), [ 1, 297,                          ]; @eq ( Ωimt_181 = -> s.is_normalized ), true
      s.add 299, 302; @eq ( Ωimt_182 = -> s.points ), [ 1, 297,      299, 300, 301, 302, ]; @eq ( Ωimt_183 = -> s.is_normalized ), true
      s.add 298;      @eq ( Ωimt_184 = -> s.points ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_185 = -> s.is_normalized ), true
      s.add 300, 301; @eq ( Ωimt_186 = -> s.points ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_187 = -> s.is_normalized ), true
      @eq ( Ωimt_188 = -> s.runs.length   ), 2
      @eq ( Ωimt_189 = -> s.runs[ 0 ]     ), { lo: 1, hi: 1, }
      @eq ( Ωimt_190 = -> s.runs[ 1 ]     ), { lo: 297, hi: 302, }
      @eq ( Ωimt_191 = -> s.points        ), [ 1, 297, 298, 299, 300, 301, 302 ]
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  using_strings_for_bounds: ->
    { Hoard,                    } = SFMODULES.require_intermission()
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      @throws ( Ωimt_192 = -> s.add 5.8         ), /expected an integer or a text, got a float/
      @throws ( Ωimt_193 = -> s.add -3          ), /-0x3 is not between \+0x0 and \+0x10ffff/
      @throws ( Ωimt_194 = -> s.add 0, -3       ), /-0x3 is not between \+0x0 and \+0x10ffff/
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard { first: -10, last: +10, }
      s = h.create_scatter()
      s.add -10; @eq ( Ωimt_195 = -> s.points   ), [ -10, ]
      s.add +10; @eq ( Ωimt_196 = -> s.points   ), [ -10, +10, ]
      @throws ( Ωimt_197 = -> s.add -11         ), /-0xb is not between -0xa and \+0xa/
      @throws ( Ωimt_198 = -> s.add +11         ), /\+0xb is not between -0xa and \+0xa/
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      s.add 'A';      @eq ( Ωimt_199 = -> s.points   ), [ ( 'A'.codePointAt 0 ), ]
      s.add 'A', 'Z'; @eq ( Ωimt_200 = -> s.points   ), [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90 ]
      s.add 'a', 'z'; @eq ( Ωimt_201 = -> s.points   ), [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, \
                                                          100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, ]
      @eq ( Ωimt_202 = -> s.min  ), ( 'A'.codePointAt 0 )
      @eq ( Ωimt_203 = -> s.max  ), ( 'z'.codePointAt 0 )
      @eq ( Ωimt_204 = -> { min: s.min, max: s.max, }  ), s.minmax
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      s.add 'Abc'
      @eq ( Ωimt_205 = -> s.points   ), [ ( 'A'.codePointAt 0 ), ]
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      s.add_codepoints_of 'Abc'
      @eq ( Ωimt_206 = -> s.runs.length ), 3
      @eq ( Ωimt_207 = -> s.points ), [ ( 'A'.codePointAt 0 ), ( 'b'.codePointAt 0 ), ( 'c'.codePointAt 0 ), ]
      @eq ( Ωimt_208 = -> s.runs.length ), 2
      @eq ( Ωimt_209 = -> s.runs[ 0 ] ), { lo: ( 'A'.codePointAt 0 ), hi: ( 'A'.codePointAt 0 ), }
      @eq ( Ωimt_210 = -> s.runs[ 1 ] ), { lo: ( 'b'.codePointAt 0 ), hi: ( 'c'.codePointAt 0 ), }
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      s.add_codepoints_of 'aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ'
      @eq ( Ωimt_211 = -> ( ( String.fromCodePoint cid ) for cid in s.points ).join '' ), 'AEIOUaeiouÄÖÜäöü'
      @eq ( Ωimt_212 = -> s.runs.length ), 16
      s.normalize()
      @eq ( Ωimt_213 = -> s.runs.length ), 16
      ;null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  data_retrieval: ->
    { Hoard,
      summarize_data,  } = SFMODULES.require_intermission()
    #.......................................................................................................
    do =>
      h = new Hoard()
      sv = h.add_scatter { data: { tags: [ 'vowel', ], is_ascii: true, }, }
      su = h.add_scatter { data: { tags: [ 'umlaut', ], }, }
      sv.add_codepoints_of 'aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ'
      su.add_codepoints_of 'äöü', 'äöü', 'ÄÖÜ'
      @eq ( Ωimt_214 = -> sv.contains 'A'                 ), true
      @eq ( Ωimt_215 = -> sv.contains 'A'.codePointAt 0   ), true
      @eq ( Ωimt_216 = -> sv.contains 'B'                 ), false
      @eq ( Ωimt_217 = -> sv.contains 'B'.codePointAt 0   ), false
      @eq ( Ωimt_218 = -> h.data_for  'A'                 ), { is_ascii: [ true, ], tags: [ 'vowel', ], }
      @eq ( Ωimt_219 = -> h.data_for  'ä'                 ), { is_ascii: [ true, undefined, ], tags: [ 'vowel', 'umlaut' ], }
      @eq ( Ωimt_220 = -> h.data_for  'B'                 ), null
      @eq ( Ωimt_221 = -> h.data_for  'y'                 ), null
      ;null
    #.......................................................................................................
    do =>
      class Vu_hoard extends Hoard
        summarize_data_is_ascii: summarize_data.as_boolean_and
      h = new Vu_hoard()
      sv = h.add_scatter { data: { tags: [ 'vowel', ], is_ascii: true, }, }
      su = h.add_scatter { data: { tags: [ 'umlaut', ], }, }
      sv.add_codepoints_of 'aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ'
      su.add_codepoints_of 'äöü', 'äöü', 'ÄÖÜ'
      @eq ( Ωimt_222 = -> sv.contains 'A'                 ), true
      @eq ( Ωimt_223 = -> sv.contains 'A'.codePointAt 0   ), true
      @eq ( Ωimt_224 = -> sv.contains 'B'                 ), false
      @eq ( Ωimt_225 = -> sv.contains 'B'.codePointAt 0   ), false
      @eq ( Ωimt_226 = -> h.data_for  'A'                 ), { is_ascii: true, tags: [ 'vowel', ], }
      @eq ( Ωimt_227 = -> h.data_for  'ä'                 ), { is_ascii: false, tags: [ 'vowel', 'umlaut' ], }
      @eq ( Ωimt_228 = -> h.data_for  'B'                 ), null
      @eq ( Ωimt_229 = -> h.data_for  'y'                 ), null
      ;null
    #.......................................................................................................
    return null



# f = ->
# #-----------------------------------------------------------------------------------------------------------
# sum_of_data = ( a, b ) =>
#   data = [ a.data ? [], b.data ? [], ].flat()
#   # debug 'Ωimt_230', { a, b, }
#   # debug 'Ωimt_231', { a..., data, }
#   { a..., data, }
# create_reducer = ( fn ) -> ( ranges ) => ranges.reduce( fn );

# #===========================================================================================================
# demo_intervals_fn = ->
#   # debug 'Ωimt_232', ( k for k of IFN ).sort()
#   #=========================================================================================================
#   do =>
#     rng_1       = [
#       { start: 1, end:  10, data:   5, }
#       { start: 4, end:   7, data:  10, }
#       { start: 4, end:  12, data:  12, }
#       { start: 0, end: 100, data: 102, }
#       { start: 0, end: 100, data: 101, }
#       ]
#     merged      = IFN.merge ( create_reducer sum_of_data ), rng_1
#     #.........................................................................................................
#     urge()
#     urge 'Ωimt_233', idx + 1, rng for rng, idx in merged
#     urge()
#     ;null
#   #=========================================================================================================
#   do =>
#     rng_1       = new Rangeset 1
#     rng_1.add { lo: 1, hi:   9, }
#     rng_1.add { lo: 4, hi:   6, }
#     rng_1.add { lo: 4, hi:  11, }
#     rng_1.add { lo: 0, hi:  99, }
#     rng_1.add { lo: 0, hi:  99, }
#     merged      = rng_1.merge ( create_reducer sum_of_data )
#     #.........................................................................................................
#     urge()
#     urge 'Ωimt_234', idx + 1, rng for rng, idx in merged.ranges
#     urge()
#     ;null
#   #.........................................................................................................
#   a = { start: 40, end: 49, }; b = { start: 50, end: 59, }; help 'Ωimt_235', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
#   a = { start: 40, end: 50, }; b = { start: 50, end: 59, }; help 'Ωimt_236', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
#   a = { start: 40, end: 51, }; b = { start: 50, end: 59, }; help 'Ωimt_237', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
#   a = { start: 40, end: 52, }; b = { start: 50, end: 59, }; help 'Ωimt_238', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
#   a = { start:  5, end: 10, }; b = { start: 0, end: 4 }; help 'Ωimt_239', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
#   a = { start:  5, end: 10, }; b = { start: 7, end: 8 }; help 'Ωimt_240', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
#   try
#     a = { start:  5, end: 10, }; b = [ { start: 0, end: 4 }, { start: 7, end: 8 }, ]; help 'Ωimt_241', a, b, { meeting: ( IFN.isMeeting a, b ), overlapping: ( IFN.isOverlapping a, b ), overlapping_s: ( IFN.isOverlappingSimple a, b ), }
#   catch e then warn 'Ωimt_242', e.message
#   info()
#   info 'Ωimt_243', IFN.simplify []
#   info 'Ωimt_244', IFN.simplify [ { start: 4, end: 20, }, ]
#   info 'Ωimt_245', IFN.simplify [ { start: 4, end: 18, }, { start: 19, end: 22, }, ]
#   info 'Ωimt_246', IFN.simplify [ { start: 4, end: 19, }, { start: 19, end: 22, }, ]
#   info 'Ωimt_247', IFN.simplify [ { start: 4, end: 20, }, { start: 19, end: 22, }, ]
#   info 'Ωimt_248', IFN.simplify [ { start: 4, end: 21, }, { start: 19, end: 22, }, ]
#   info 'Ωimt_249', IFN.simplify [ { start: 3, end:  9, }, { start:  9, end: 13, }, ]
#   info 'Ωimt_250', IFN.simplify [ { start: 3, end:  9, }, { start:  9, end: 13, }, { start: 11, end: 14, }, ] # [{ start: 3, end: 14 }]
#   info 'Ωimt_251', IFN.simplify [ { start: 3, end:  9, }, { start: 10, end: 13, }, { start: 11, end: 14, }, ]
#   info()
#   info 'Ωimt_252', ( ( new Rangeset() ).add()                                                                        ).simplify()
#   info 'Ωimt_253', ( ( new Rangeset() ).add { start: 4, end: 20, }                                                   ).simplify()
#   info 'Ωimt_254', ( ( new Rangeset() ).add { start: 4, end: 18, }, { start: 19, end: 22, }                          ).simplify()
#   info 'Ωimt_255', ( ( new Rangeset() ).add { start: 4, end: 19, }, { start: 19, end: 22, }                          ).simplify()
#   info 'Ωimt_256', ( ( new Rangeset() ).add { start: 4, end: 20, }, { start: 19, end: 22, }                          ).simplify()
#   info 'Ωimt_257', ( ( new Rangeset() ).add { start: 4, end: 21, }, { start: 19, end: 22, }                          ).simplify()
#   info 'Ωimt_258', ( ( new Rangeset() ).add { start: 3, end:  9, }, { start:  9, end: 13, }                          ).simplify()
#   info 'Ωimt_259', ( ( new Rangeset() ).add { start: 3, end:  9, }, { start:  9, end: 13, }, { start: 11, end: 14, } ).simplify() # [{ start: 3, end: 14 }]
#   info 'Ωimt_260', ( ( new Rangeset() ).add { start: 3, end:  9, }, { start: 10, end: 13, }, { start: 11, end: 14, } ).simplify()
#   info()
#   info 'Ωimt_261', ( ( new Rangeset() ).add()                                                                        ).simplify()
#   info 'Ωimt_262', ( ( new Rangeset() ).add { lo: 4, hi: 19, }                                                       ).simplify()
#   info 'Ωimt_263', ( ( new Rangeset() ).add { lo: 4, hi: 17, }, { lo: 19, hi: 21, }                                  ).simplify()
#   info 'Ωimt_264', ( ( new Rangeset() ).add { lo: 4, hi: 18, }, { lo: 19, hi: 21, }                                  ).simplify()
#   info 'Ωimt_265', ( ( new Rangeset() ).add { lo: 4, hi: 19, }, { lo: 19, hi: 21, }                                  ).simplify()
#   info 'Ωimt_266', ( ( new Rangeset() ).add { lo: 4, hi: 20, }, { lo: 19, hi: 21, }                                  ).simplify()
#   info 'Ωimt_267', ( ( new Rangeset() ).add { lo: 3, hi:  8, }, { lo:  9, hi: 12, }                                  ).simplify()
#   info 'Ωimt_268', ( ( new Rangeset() ).add { lo: 3, hi:  8, }, { lo:  9, hi: 12, }, { lo: 11, hi: 13, }             ).simplify() # [{ lo: 3, hi: 13 }]
#   info 'Ωimt_269', ( ( new Rangeset() ).add { lo: 3, hi:  8, }, { lo: 10, hi: 12, }, { lo: 11, hi: 13, }             ).simplify()
#   rng_2 = [
#     { start:  3, end: 10, data: 2, }
#     { start:  9, end: 13, data: 3, }
#     { start: 11, end: 14, data: 5, }
#     ]
#   merge_data_2 = ( a, b ) ->
#     # debug 'Ωimt_270', { a, b, } #, { a..., b..., }
#     return { a..., data: a.data * b.data, }
#   merged = IFN.merge ( create_reducer merge_data_2 ), rng_2 # [{ start: 3, end: 14 }]
#   info 'Ωimt_271', rng for rng in merged
#   # urge 'Ωimt_272', rng for rng in merged_ft
#   # urge()
#   ;null


#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: true, report_checks: true, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
  ( new Test guytest_cfg ).test { containment: tests.containment, }
  # ( new Test guytest_cfg ).test { basic_scatters: tests.basic_scatters, }

