

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




#===========================================================================================================
@tests = tests =

  #---------------------------------------------------------------------------------------------------------
  basic_runs: ->
    { Hoard,                    } = require '../../../apps/bricabrac-sfmodules/lib/intermission'
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
    ;null

  #---------------------------------------------------------------------------------------------------------
  basic_scatters: ->
    { Hoard,                    } = require '../../../apps/bricabrac-sfmodules/lib/intermission'
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter { data: { a: 1, } }
      @eq ( Ωimt__11 = -> { s..., } ), { data: { a: 1, }, runs: [], }
      @eq ( Ωimt__12 = -> s.is_normalized   ), true
      #.....................................................................................................
      s.add_run { lo: 1, hi: 1, };          @eq ( Ωimt__13 = -> s.runs.length     ), 1
      s.add_run 1;                          @eq ( Ωimt__14 = -> s.runs.length     ), 2
      s.add_run { lo: 1, hi: 1, };          @eq ( Ωimt__15 = -> s.runs.length     ), 3
      # s.add_run new Run { lo: 1, hi: 1, };  @eq ( Ωimt__16 = -> s.runs.length     ), 3
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
      s.add_run { lo: 1, hi: 1, };          @eq ( Ωimt__25 = -> s.runs.length     ), 1; @eq ( Ωimt__26 = -> s.is_normalized ), false
      s.add_run 1;                          @eq ( Ωimt__27 = -> s.runs.length     ), 2; @eq ( Ωimt__28 = -> s.is_normalized ), false
      s.add_run { lo: 1, hi: 1, };          @eq ( Ωimt__29 = -> s.runs.length     ), 3; @eq ( Ωimt__30 = -> s.is_normalized ), false
      # s.add_run new Run { lo: 1, hi: 1, };  @eq ( Ωimt__31 = -> s.runs.length     ), 3; @eq ( Ωimt__32 = -> s.is_normalized ), false
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
      s.add_run { lo: 1, hi: 1, };          @eq ( Ωimt__38 = -> s.runs.length ), 1; @eq ( Ωimt__39 = -> s.is_normalized ), true
      s.add_run 1;                          @eq ( Ωimt__40 = -> s.runs.length ), 1; @eq ( Ωimt__41 = -> s.is_normalized ), true
      s.add_run { lo: 1, hi: 1, };          @eq ( Ωimt__42 = -> s.runs.length ), 1; @eq ( Ωimt__43 = -> s.is_normalized ), true
      # s.add_run new Run { lo: 1, hi: 1, };  @eq ( Ωimt__44 = -> s.runs.length ), 1; @eq ( Ωimt__45 = -> s.is_normalized ), true
      #.....................................................................................................
      @eq ( Ωimt__46 = -> s.data            ), { a: 3, }
      @eq ( Ωimt__47 = -> s.runs[ 0 ]       ), { lo: 1, hi: 1, }
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter { data: { a: 4, }, normalize: true, }
      @eq ( Ωimt__48 = -> s.is_normalized ), true
      s.add_run 103;  @eq ( Ωimt__49 = -> s.runs.length ), 1; @eq ( Ωimt__50 = -> s.is_normalized ), true
      s.add_run 100;  @eq ( Ωimt__51 = -> s.runs.length ), 2; @eq ( Ωimt__52 = -> s.is_normalized ), true
      s.add_run 101;  @eq ( Ωimt__53 = -> s.runs.length ), 2; @eq ( Ωimt__54 = -> s.is_normalized ), true
      #.....................................................................................................
      # debug 'Ωimt__55', run for run in s.runs
      @eq ( Ωimt__56 = -> s.data            ), { a: 4, }
      @eq ( Ωimt__57 = -> s.runs[ 0 ]       ), { lo: 100, hi: 101, }
      @eq ( Ωimt__58 = -> s.runs[ 1 ]       ), { lo: 103, hi: 103, }
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter { normalize: true, }
      @eq ( Ωimt__59 = -> s.is_normalized ), true
      s.add_run 103, 109;   @eq ( Ωimt__60 = -> s.runs.length ), 1; @eq ( Ωimt__61 = -> s.is_normalized ), true
      s.add_run 111, 115;   @eq ( Ωimt__62 = -> s.runs.length ), 2; @eq ( Ωimt__63 = -> s.is_normalized ), true
      s.add_run 110;        @eq ( Ωimt__64 = -> s.runs.length ), 1; @eq ( Ωimt__65 = -> s.is_normalized ), true
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
      s.add_run 103, 109;   @eq ( Ωimt__70 = -> s.runs.length ), 1; @eq ( Ωimt__71 = -> s.is_normalized ), false
      s.add_run 111, 115;   @eq ( Ωimt__72 = -> s.runs.length ), 2; @eq ( Ωimt__73 = -> s.is_normalized ), false
      s.add_run 110;        @eq ( Ωimt__74 = -> s.runs.length ), 3; @eq ( Ωimt__75 = -> s.is_normalized ), false
      @eq ( Ωimt__76 = -> { min: s.min, max: s.max, } ), { min: 103, max: 115, }
      @eq ( Ωimt__77 = -> s.minmax                    ), { min: 103, max: 115, }
      #.....................................................................................................
      @eq ( Ωimt__78 = -> s.runs[ 0 ] ), { lo: 103, hi: 109, }
      @eq ( Ωimt__79 = -> s.runs[ 1 ] ), { lo: 111, hi: 115, }
      @eq ( Ωimt__80 = -> s.runs[ 2 ] ), { lo: 110, hi: 110, }
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  overlapping: ->
    { Hoard, } = require '../../../apps/bricabrac-sfmodules/lib/intermission'
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      s.add_run 'a', 'y'
      s.add_run 'A', 'Y'
      debug 'Ωimt__81', h
      debug 'Ωimt__82', h.scatters
      @eq ( Ωimt__83 = -> s.contains 'a'                    ), true
      @eq ( Ωimt__84 = -> s.contains { lo: 'a', }           ), true
      @eq ( Ωimt__85 = -> s.contains { lo: 'a', hi: 'y', }  ), true
      @eq ( Ωimt__86 = -> s.contains { lo: 'a', hi: 'z', }  ), true
      @eq ( Ωimt__87 = -> s.contains '0'                    ), false
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  containment: ->
    { Hoard,                    } = require '../../../apps/bricabrac-sfmodules/lib/intermission'
    #.......................................................................................................
    do =>
      h = new Hoard()
      r = h.create_run { lo: 25, hi: 30, }
      @eq ( Ωimt__88 = -> r.contains 21                               ), false
      @eq ( Ωimt__89 = -> r.contains 22                               ), false
      @eq ( Ωimt__90 = -> r.contains 23                               ), false
      @eq ( Ωimt__91 = -> r.contains 24                               ), false
      @eq ( Ωimt__92 = -> r.contains 25                               ), true
      @eq ( Ωimt__93 = -> r.contains 26                               ), true
      @eq ( Ωimt__94 = -> r.contains 27                               ), true
      @eq ( Ωimt__95 = -> r.contains 28                               ), true
      @eq ( Ωimt__96 = -> r.contains 29                               ), true
      @eq ( Ωimt__97 = -> r.contains 30                               ), true
      @eq ( Ωimt__98 = -> r.contains 31                               ), false
      @eq ( Ωimt__99 = -> r.contains 41                               ), false
      @eq ( Ωimt_100 = -> r.contains [ 25, ]                          ), true
      @eq ( Ωimt_101 = -> r.contains [ 30, ]                          ), true
      @eq ( Ωimt_102 = -> r.contains [ 31, ]                          ), false
      @eq ( Ωimt_103 = -> r.contains [ 32, ]                          ), false
      @eq ( Ωimt_104 = -> r.contains [ 25 .. 30 ]                     ), true
      @eq ( Ωimt_105 = -> r.contains [ 25 .. 31 ]                     ), false
      @eq ( Ωimt_106 = -> r.contains ( -> yield from [ 25 .. 30 ] )() ), true
      @eq ( Ωimt_107 = -> r.contains ( -> yield from [ 25 .. 31 ] )() ), false
      @eq ( Ωimt_108 = -> r.contains ( -> yield from [ 25 .. 32 ] )() ), false
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      s.add_run 25, 30
      s.add_run 32, 40
      @eq ( Ωimt_109 = -> s.contains 21                               ), false
      @eq ( Ωimt_110 = -> s.contains 22                               ), false
      @eq ( Ωimt_111 = -> s.contains 23                               ), false
      @eq ( Ωimt_112 = -> s.contains 24                               ), false
      @eq ( Ωimt_113 = -> s.contains 25                               ), true
      @eq ( Ωimt_114 = -> s.contains 26                               ), true
      @eq ( Ωimt_115 = -> s.contains 27                               ), true
      @eq ( Ωimt_116 = -> s.contains 28                               ), true
      @eq ( Ωimt_117 = -> s.contains 29                               ), true
      @eq ( Ωimt_118 = -> s.contains 30                               ), true
      @eq ( Ωimt_119 = -> s.contains 31                               ), false
      @eq ( Ωimt_120 = -> s.contains 32                               ), true
      @eq ( Ωimt_121 = -> s.contains 33                               ), true
      @eq ( Ωimt_122 = -> s.contains 34                               ), true
      @eq ( Ωimt_123 = -> s.contains 35                               ), true
      @eq ( Ωimt_124 = -> s.contains 36                               ), true
      @eq ( Ωimt_125 = -> s.contains 37                               ), true
      @eq ( Ωimt_126 = -> s.contains 38                               ), true
      @eq ( Ωimt_127 = -> s.contains 39                               ), true
      @eq ( Ωimt_128 = -> s.contains 40                               ), true
      @eq ( Ωimt_129 = -> s.contains 41                               ), false
      @eq ( Ωimt_130 = -> s.contains 42                               ), false
      @eq ( Ωimt_131 = -> s.contains 43                               ), false
      @eq ( Ωimt_132 = -> s.contains [ 25 .. 30 ]                     ), true
      @eq ( Ωimt_133 = -> s.contains [ 25 .. 31 ]                     ), false
      @eq ( Ωimt_134 = -> s.contains [ 30, ]                          ), true
      @eq ( Ωimt_135 = -> s.contains [ 31, ]                          ), false
      @eq ( Ωimt_136 = -> s.contains [ 32, ]                          ), true
      @eq ( Ωimt_137 = -> s.contains ( -> yield from [ 25 .. 30 ] )() ), true
      @eq ( Ωimt_138 = -> s.contains ( -> yield from [ 25 .. 31 ] )() ), false
      @eq ( Ωimt_139 = -> s.contains ( -> yield from [ 25 .. 32 ] )() ), false
      @eq ( Ωimt_140 = -> s.contains ( h.create_run 25              ) ), true
      @eq ( Ωimt_141 = -> s.contains ( h.create_run 25, 30          ) ), true
      @eq ( Ωimt_142 = -> s.contains ( h.create_run 25, 32          ) ), false
      s1 = h.create_scatter()
      s1.add_run 26, 27
      s1.add_run 37, 40
      @eq ( Ωimt_143 = -> s1.is_normalized                            ), false
      @eq ( Ωimt_144 = -> s.contains s1                               ), true
      @eq ( Ωimt_145 = -> s1.is_normalized                            ), true
      s1.add_run 25, 32
      @eq ( Ωimt_146 = -> s.contains s1                               ), false
      @eq ( Ωimt_147 = -> s.is_normalized                             ), true
      s.add_run 31
      @eq ( Ωimt_148 = -> s.is_normalized                             ), false
      @eq ( Ωimt_149 = -> s.contains s1                               ), true
      @eq ( Ωimt_150 = -> s.is_normalized                             ), true
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  iteration: ->
    { Hoard,                    } = require '../../../apps/bricabrac-sfmodules/lib/intermission'
    #.......................................................................................................
    do =>
      h = new Hoard()
      @eq ( Ωimt_151 = -> [ ( h.create_run 1         )..., ]       ), [ 1, ]
      @eq ( Ωimt_152 = -> [ ( h.create_run 297       )..., ]       ), [ 297, ]
      @eq ( Ωimt_153 = -> [ ( h.create_run 297, 308  )..., ]       ), [ 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308 ]
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      @eq ( Ωimt_154 = -> [ s..., ]       ), []
      s.add_run 1;        @eq ( Ωimt_155 = -> [ s..., ] ), [ 1,                               ]; @eq ( Ωimt_156 = -> s.is_normalized ), true
      s.add_run 297;      @eq ( Ωimt_157 = -> [ s..., ] ), [ 1, 297,                          ]; @eq ( Ωimt_158 = -> s.is_normalized ), true
      s.add_run 299, 302; @eq ( Ωimt_159 = -> [ s..., ] ), [ 1, 297,      299, 300, 301, 302, ]; @eq ( Ωimt_160 = -> s.is_normalized ), true
      s.add_run 298;      @eq ( Ωimt_161 = -> [ s..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_162 = -> s.is_normalized ), true
      s.add_run 300, 301; @eq ( Ωimt_163 = -> [ s..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_164 = -> s.is_normalized ), true
      @eq ( Ωimt_165 = -> s.runs.length   ), 2
      @eq ( Ωimt_166 = -> s.runs[ 0 ]     ), { lo: 1, hi: 1, }
      @eq ( Ωimt_167 = -> s.runs[ 1 ]     ), { lo: 297, hi: 302, }
      @eq ( Ωimt_168 = -> s.points        ), [ 1, 297, 298, 299, 300, 301, 302 ]
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      @eq ( Ωimt_169 = -> [ s.walk()..., ]       ), []
      s.add_run 1;        @eq ( Ωimt_170 = -> [ s.walk()..., ] ), [ 1,                               ]; @eq ( Ωimt_171 = -> s.is_normalized ), true
      s.add_run 297;      @eq ( Ωimt_172 = -> [ s.walk()..., ] ), [ 1, 297,                          ]; @eq ( Ωimt_173 = -> s.is_normalized ), true
      s.add_run 299, 302; @eq ( Ωimt_174 = -> [ s.walk()..., ] ), [ 1, 297,      299, 300, 301, 302, ]; @eq ( Ωimt_175 = -> s.is_normalized ), true
      s.add_run 298;      @eq ( Ωimt_176 = -> [ s.walk()..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_177 = -> s.is_normalized ), true
      s.add_run 300, 301; @eq ( Ωimt_178 = -> [ s.walk()..., ] ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_179 = -> s.is_normalized ), true
      @eq ( Ωimt_180 = -> s.runs.length   ), 2
      @eq ( Ωimt_181 = -> s.runs[ 0 ]     ), { lo: 1, hi: 1, }
      @eq ( Ωimt_182 = -> s.runs[ 1 ]     ), { lo: 297, hi: 302, }
      @eq ( Ωimt_183 = -> s.points        ), [ 1, 297, 298, 299, 300, 301, 302 ]
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      @eq ( Ωimt_184 = -> s.points ), []
      s.add_run 1;        @eq ( Ωimt_185 = -> s.points ), [ 1,                               ]; @eq ( Ωimt_186 = -> s.is_normalized ), true
      s.add_run 297;      @eq ( Ωimt_187 = -> s.points ), [ 1, 297,                          ]; @eq ( Ωimt_188 = -> s.is_normalized ), true
      s.add_run 299, 302; @eq ( Ωimt_189 = -> s.points ), [ 1, 297,      299, 300, 301, 302, ]; @eq ( Ωimt_190 = -> s.is_normalized ), true
      s.add_run 298;      @eq ( Ωimt_191 = -> s.points ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_192 = -> s.is_normalized ), true
      s.add_run 300, 301; @eq ( Ωimt_193 = -> s.points ), [ 1, 297, 298, 299, 300, 301, 302, ]; @eq ( Ωimt_194 = -> s.is_normalized ), true
      @eq ( Ωimt_195 = -> s.runs.length   ), 2
      @eq ( Ωimt_196 = -> s.runs[ 0 ]     ), { lo: 1, hi: 1, }
      @eq ( Ωimt_197 = -> s.runs[ 1 ]     ), { lo: 297, hi: 302, }
      @eq ( Ωimt_198 = -> s.points        ), [ 1, 297, 298, 299, 300, 301, 302 ]
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  using_strings_for_bounds: ->
    { Hoard,                    } = require '../../../apps/bricabrac-sfmodules/lib/intermission'
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      @throws ( Ωimt_199 = -> s.add_run 5.8         ), /expected an integer or a text, got a float/
      @throws ( Ωimt_200 = -> s.add_run -3          ), /-0x3 is not between \+0x0 and \+0x10ffff/
      @throws ( Ωimt_201 = -> s.add_run 0, -3       ), /-0x3 is not between \+0x0 and \+0x10ffff/
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard { first: -10, last: +10, }
      s = h.create_scatter()
      s.add_run -10; @eq ( Ωimt_202 = -> s.points   ), [ -10, ]
      s.add_run +10; @eq ( Ωimt_203 = -> s.points   ), [ -10, +10, ]
      @throws ( Ωimt_204 = -> s.add_run -11         ), /-0xb is not between -0xa and \+0xa/
      @throws ( Ωimt_205 = -> s.add_run +11         ), /\+0xb is not between -0xa and \+0xa/
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      s.add_run 'A';      @eq ( Ωimt_206 = -> s.points   ), [ ( 'A'.codePointAt 0 ), ]
      s.add_run 'A', 'Z'; @eq ( Ωimt_207 = -> s.points   ), [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90 ]
      s.add_run 'a', 'z'; @eq ( Ωimt_208 = -> s.points   ), [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, \
                                                          100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, ]
      @eq ( Ωimt_209 = -> s.min  ), ( 'A'.codePointAt 0 )
      @eq ( Ωimt_210 = -> s.max  ), ( 'z'.codePointAt 0 )
      @eq ( Ωimt_211 = -> { min: s.min, max: s.max, }  ), s.minmax
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      s.add_run 'Abc'
      @eq ( Ωimt_212 = -> s.points   ), [ ( 'A'.codePointAt 0 ), ]
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      s.add_codepoints_of 'Abc'
      @eq ( Ωimt_213 = -> s.runs.length ), 3
      @eq ( Ωimt_214 = -> s.points ), [ ( 'A'.codePointAt 0 ), ( 'b'.codePointAt 0 ), ( 'c'.codePointAt 0 ), ]
      @eq ( Ωimt_215 = -> s.runs.length ), 2
      @eq ( Ωimt_216 = -> s.runs[ 0 ] ), { lo: ( 'A'.codePointAt 0 ), hi: ( 'A'.codePointAt 0 ), }
      @eq ( Ωimt_217 = -> s.runs[ 1 ] ), { lo: ( 'b'.codePointAt 0 ), hi: ( 'c'.codePointAt 0 ), }
      ;null
    #.......................................................................................................
    do =>
      h = new Hoard()
      s = h.create_scatter()
      s.add_codepoints_of 'aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ'
      @eq ( Ωimt_218 = -> ( ( String.fromCodePoint cid ) for cid in s.points ).join '' ), 'AEIOUaeiouÄÖÜäöü'
      @eq ( Ωimt_219 = -> s.runs.length ), 16
      s.normalize()
      @eq ( Ωimt_220 = -> s.runs.length ), 16
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  data_retrieval: ->
    { Hoard,
      summarize_data,  } = require '../../../apps/bricabrac-sfmodules/lib/intermission'
    #.......................................................................................................
    do =>
      h = new Hoard()
      s_vowels = h.add_scatter { data: { tags: [ 'vowel', ], is_ascii: true, }, }
      s_umlaut = h.add_scatter { data: { tags: [ 'umlaut', ], }, }
      s_vowels.add_codepoints_of 'aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ'
      s_umlaut.add_codepoints_of 'äöü', 'äöü', 'ÄÖÜ'
      @eq ( Ωimt_221 = -> s_vowels.contains 'A'                 ), true
      @eq ( Ωimt_222 = -> s_vowels.contains 'A'.codePointAt 0   ), true
      @eq ( Ωimt_223 = -> s_vowels.contains 'B'                 ), false
      @eq ( Ωimt_224 = -> s_vowels.contains 'B'.codePointAt 0   ), false
      @eq ( Ωimt_225 = -> h.summarize_data_for_point  'A'       ), { is_ascii: [ true, ], tags: [ 'vowel', ], }
      @eq ( Ωimt_226 = -> h.summarize_data_for_point  'ä'       ), { is_ascii: [ true, ], tags: [ 'umlaut', 'vowel', ], }
      @eq ( Ωimt_227 = -> h.summarize_data_for_point  'B'       ), null
      @eq ( Ωimt_228 = -> h.summarize_data_for_point  'y'       ), null
      ;null
    #.......................................................................................................
    do =>
      class Vu_hoard extends Hoard
        summarize_data_is_ascii: summarize_data.as_boolean_and
      h = new Vu_hoard()
      s_ascii   = h.add_scatter { data: { is_ascii: true, }, }
      s_vowels  = h.add_scatter { data: { tags: [ 'vowel', ], }, }
      s_umlaut  = h.add_scatter { data: { tags: [ 'umlaut', ], }, }
      s_ascii.add_run 'a', 'z'
      s_ascii.add_run 'A', 'Z'
      s_vowels.add_codepoints_of 'aeiouäöü', 'aeiouäöü', 'AEIOUÄÖÜ', 'AEIOUÄÖÜ'
      s_umlaut.add_codepoints_of 'äöü', 'äöü', 'ÄÖÜ'
      @eq ( Ωimt_229 = -> s_ascii.contains      'A'               ), true
      @eq ( Ωimt_230 = -> s_ascii.contains      'Q'               ), true
      @eq ( Ωimt_231 = -> s_ascii.contains      'f'               ), true
      @eq ( Ωimt_232 = -> s_vowels.contains     'A'               ), true
      @eq ( Ωimt_233 = -> s_vowels.contains     'A'.codePointAt 0 ), true
      @eq ( Ωimt_234 = -> s_vowels.contains     'B'               ), false
      @eq ( Ωimt_235 = -> s_vowels.contains     'B'.codePointAt 0 ), false
      @eq ( Ωimt_236 = -> h.get_data_for_point        'A'               ), [ { is_ascii: true }, { tags: [ 'vowel' ] } ]
      @eq ( Ωimt_237 = -> h.get_data_for_point        'A'.codePointAt 0 ), [ { is_ascii: true }, { tags: [ 'vowel' ] } ]
      @eq ( Ωimt_238 = -> h.get_data_for_point        'Q'               ), [ { is_ascii: true }, ]
      @eq ( Ωimt_239 = -> h.get_data_for_point        'f'               ), [ { is_ascii: true }, ]
      @eq ( Ωimt_240 = -> h.get_data_for_point        'B'               ), [ { is_ascii: true }, ]
      @eq ( Ωimt_241 = -> h.get_data_for_point        'B'.codePointAt 0 ), [ { is_ascii: true }, ]
      @eq ( Ωimt_242 = -> h.get_data_for_point        'ä'               ), [ { tags: [ 'vowel', ], }, { tags: [ 'umlaut', ], }, ]
      @eq ( Ωimt_243 = -> h.summarize_data_for_point  'A'               ), { is_ascii: true, tags: [ 'vowel' ], }
      @eq ( Ωimt_244 = -> h.summarize_data_for_point  'A'.codePointAt 0 ), { is_ascii: true, tags: [ 'vowel' ], }
      @eq ( Ωimt_245 = -> h.summarize_data_for_point  'Q'               ), { is_ascii: true, }
      @eq ( Ωimt_246 = -> h.summarize_data_for_point  'f'               ), { is_ascii: true, }
      @eq ( Ωimt_247 = -> h.summarize_data_for_point  'B'               ), { is_ascii: true, }
      @eq ( Ωimt_248 = -> h.summarize_data_for_point  'B'.codePointAt 0 ), { is_ascii: true, }
      @eq ( Ωimt_249 = -> h.summarize_data_for_point  'ä'               ), { tags: [ 'umlaut', 'vowel', ], }
      #.....................................................................................................
      s_not_ascii = h.add_scatter { data: { is_ascii: false, }, }
      s_not_ascii.add_run 0x80, 0x10ffff
      @eq ( Ωimt_250 = -> h.summarize_data_for_point  'B'               ), { is_ascii: true, }
      @eq ( Ωimt_251 = -> h.summarize_data_for_point  'ä'               ), { is_ascii: false, tags: [ 'umlaut', 'vowel', ], }
      @throws ( Ωimt_252 = -> h.summarize_data_for_point  'äwhat'        ), /not a valid point/
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
    debug 'Ωimt_253', T.integer
    debug 'Ωimt_254', T.integer.isa
    #.......................................................................................................
    @eq ( Ωimt_255 = -> T.integer.isa           5         ), true
    @eq ( Ωimt_256 = -> T.point.isa             5         ), true
    @eq ( Ωimt_257 = -> T.point.isa             'a'       ), true
    #.......................................................................................................
    @eq ( Ωimt_258 = -> T.integer.isa           55.5      ), false
    @eq ( Ωimt_259 = -> T.point.isa             55.5      ), false
    @eq ( Ωimt_260 = -> T.point.isa             'abc'     ), false
    #.......................................................................................................
    @eq ( Ωimt_261 = -> T.integer.validate      5         ), 5
    @eq ( Ωimt_262 = -> T.point.validate        5         ), 5
    @eq ( Ωimt_263 = -> T.point.validate        'a'       ), 'a'
    #.......................................................................................................
    @eq ( Ωimt_264 = -> try T.integer.validate  55.5  catch e then return e.message ), """(integer) not a valid integer: 55.5 – 55.5 is a non-integer number"""
    @eq ( Ωimt_265 = -> try T.point.validate    55.5  catch e then return e.message ), """(point) not a valid point: 55.5 – 55.5 is not an integer and not a text"""
    @eq ( Ωimt_266 = -> try T.point.validate    'abc' catch e then return e.message ), """(point) not a valid point: abc – 'abc' is a text but not with a single codepoint"""
    #.......................................................................................................
    @throws ( Ωimt_267 = -> T.integer.validate  55.5      ), /not a valid integer/
    @throws ( Ωimt_268 = -> T.point.validate    55.5      ), /not a valid point/
    @throws ( Ωimt_269 = -> T.point.validate    'abc'     ), /not a valid point/
    @throws ( Ωimt_270 = -> T.point.validate    ''        ), /not a valid point/
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  _dbric_integration: ->
    { Hoard,
      summarize_data,           } = require '../../../apps/bricabrac-sfmodules/lib/intermission'
    { Dbric,
      as_bool,
      SQL,
      LIT,
      IDN,
      VEC,
      internals,                } = SFMODULES.unstable.require_dbric()
    prefix = 'prfx'
    debug 'Ωimt_271', Hoard
    #.......................................................................................................
    # get_functions = ( db ) ->
    #   R = {}
    #   for { name, builtin, type, } from db.walk SQL"""select name, builtin, type from pragma_function_list() order by name;"""
    #     is_builtin = as_bool builtin
    #     R[ name ] = { name, is_builtin, type, }
    #   return R
    # #.......................................................................................................
    # get_function_names = ( db ) -> new Set ( key for key of get_functions db )
    # #.......................................................................................................
    # @eq ( Ωimt_272 = -> type_of Hoard.get_udfs                                    ), 'function'
    # @eq ( Ωimt_273 = -> type_of Hoard.get_build_statements                        ), 'function'
    # #.......................................................................................................
    # @eq ( Ωimt_274 = -> type_of Hoard.get_udfs              { prefix, }           ), 'pod'
    # @eq ( Ωimt_275 = -> type_of Hoard.get_build_statements  { prefix, }           ), 'list'
    # #.......................................................................................................
    # @eq ( Ωimt_276 = -> ( Object.keys Hoard.get_udfs        { prefix, } ).length  ), 3
    # @eq ( Ωimt_277 = -> ( Hoard.get_build_statements        { prefix, } ).length  ), 3
    # #.......................................................................................................
    # {}
    # udfs              = Hoard.get_udfs { prefix, }
    # build_statements  = Hoard.get_build_statements { prefix, }
    # db                = new Dbric ':memory:'
    # #.......................................................................................................
    # for name, definition of udfs
    #   info 'Ωimt_278', "create UDF #{definition.name}"
    #   db.create_function definition
    # debug 'Ωimt_279',  name for name from get_function_names db when name.startsWith "#{prefix}_"
    # #.......................................................................................................
    # for statement, idx in build_statements
    #   statement = db.prepare statement
    #   info 'Ωimt_280', statement.run()
    # #.......................................................................................................
    # insert_data = db.prepare SQL"""insert into #{IDN "#{prefix}_hoard_scatters"} ( data ) values ( $data )"""
    # insert_data.run { data: ( JSON.stringify { letter: 'A', arc: true, zeta: false, } ), }
    # insert_data.run { data: ( JSON.stringify { zeta: false, letter: 'A', arc: true, } ), }
    # insert_data.run { data: ( JSON.stringify { letter: 'B', arc: true, zeta: false, } ), }
    # insert_data.run { data: ( JSON.stringify { letter: 'C', arc: true, zeta: false, } ), }
    # echo { row..., } for row from db.walk SQL"""select * from #{IDN "#{prefix}_hoard_scatters"}"""
    # echo { row..., } for row from db.walk SQL"""select #{IDN "#{prefix}_normalize_data"}( $data ) as ndata;""", { data: ( JSON.stringify { letter: 'A', arc: true, zeta: false, } ), }
    # echo { row..., } for row from db.walk SQL"""select #{IDN "#{prefix}_normalize_data"}( $data ) as ndata;""", { data: ( JSON.stringify { zeta: false, letter: 'A', arc: true, } ), }
    # echo { row..., } for row from db.walk SQL"""select #{IDN "#{prefix}_normalize_data"}( $data ) as ndata;""", { data: ( JSON.stringify { letter: 'B', arc: true, zeta: false, } ), }
    # echo { row..., } for row from db.walk SQL"""select #{IDN "#{prefix}_normalize_data"}( $data ) as ndata;""", { data: ( JSON.stringify { letter: 'C', arc: true, zeta: false, } ), }
    #.......................................................................................................
    ;null




#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: true, report_checks: true, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
  ( new Test guytest_cfg ).test { overlapping: tests.overlapping, }
  # ( new Test guytest_cfg ).test { dbric_integration: tests._dbric_integration, }
  # ( new Test guytest_cfg ).test { basic_scatters: tests.basic_scatters, }
  ;null

