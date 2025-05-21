
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
  whisper }               = GUY.trm.get_loggers 'interlex/test-basics'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'




############################################################################################################
#
#===========================================================================================================
@interlex_tasks =

  #=========================================================================================================
  internals:

    #-------------------------------------------------------------------------------------------------------
    jsid_re: ->
      # { partial, regex, }       = require '../../../apps/interlex/node_modules/regex'
      # _jsid_re = regex""" ^ [ $ _ \p{ID_Start} ] [ $ _ \u200C \u200D \p{ID_Continue} ]* $ """
      { _jsid_re } = require '../../../apps/interlex'
      debug 'Ωilxt___1', _jsid_re
      @eq ( Ωilxt___2 = -> ( 'abc'.match _jsid_re    )? ), true
      @eq ( Ωilxt___3 = -> ( '$abc'.match _jsid_re   )? ), true
      @eq ( Ωilxt___4 = -> ( '_abc$'.match _jsid_re  )? ), true
      @eq ( Ωilxt___5 = -> ( '_abc3'.match _jsid_re  )? ), true
      @eq ( Ωilxt___6 = -> ( '3_abc'.match _jsid_re  )? ), false
      @eq ( Ωilxt___7 = -> ( '&%'.match _jsid_re     )? ), false
      return null

    #-------------------------------------------------------------------------------------------------------
    jump_spec_re: ->
      # { partial, regex, }       = require '../../../apps/interlex/node_modules/regex'
      # _jsid_re = regex""" ^ [ $ _ \p{ID_Start} ] [ $ _ \u200C \u200D \p{ID_Continue} ]* $ """
      { _jump_spec_re } = require '../../../apps/interlex'
      debug 'Ωilxt___8', _jump_spec_re
      #.....................................................................................................
      @eq ( Ωilxt___9 = -> ( 'abc'.match _jump_spec_re     )? ), true
      @eq ( Ωilxt__10 = -> ( '$abc'.match _jump_spec_re    )? ), true
      @eq ( Ωilxt__11 = -> ( '_abc$'.match _jump_spec_re   )? ), true
      @eq ( Ωilxt__12 = -> ( '_abc3'.match _jump_spec_re   )? ), true
      @eq ( Ωilxt__13 = -> ( '..'.match _jump_spec_re      )? ), true
      #.....................................................................................................
      @eq ( Ωilxt__14 = -> ( 'abc'.match _jump_spec_re     ).groups ), { back: undefined, fore: 'abc' }
      @eq ( Ωilxt__15 = -> ( '$abc'.match _jump_spec_re    ).groups ), { back: undefined, fore: '$abc' }
      @eq ( Ωilxt__16 = -> ( '_abc$'.match _jump_spec_re   ).groups ), { back: undefined, fore: '_abc$' }
      @eq ( Ωilxt__17 = -> ( '_abc3'.match _jump_spec_re   ).groups ), { back: undefined, fore: '_abc3' }
      @eq ( Ωilxt__18 = -> ( '..'.match _jump_spec_re      ).groups ), { back: '..', fore: undefined }
      #.....................................................................................................
      @eq ( Ωilxt__19 = -> ( '[abc'.match _jump_spec_re    )? ), false
      @eq ( Ωilxt__20 = -> ( 'abc['.match _jump_spec_re    )? ), false
      @eq ( Ωilxt__21 = -> ( ']abc'.match _jump_spec_re    )? ), false
      @eq ( Ωilxt__22 = -> ( 'abc]'.match _jump_spec_re    )? ), false
      @eq ( Ωilxt__23 = -> ( '3_abc'.match _jump_spec_re   )? ), false
      @eq ( Ωilxt__24 = -> ( '&%'.match _jump_spec_re      )? ), false
      @eq ( Ωilxt__25 = -> ( '.'.match _jump_spec_re       )? ), false
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    parse_jump: ->
      { Grammar
        Level
        Token
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      @eq ( Ωilxt__26 = -> Token._parse_jump 'somewhere'  ), { action: 'fore', target: 'somewhere', }
      @eq ( Ωilxt__27 = -> Token._parse_jump '..'         ), { action: 'back', target: null, }
      #.....................................................................................................
      return null

  #=========================================================================================================
  regexes:

    #-------------------------------------------------------------------------------------------------------
    regexes: ->
      { rx
        new_regex_tag
        internals       } = require '../../../apps/interlex'
      { slevithan_regex } = internals
      { regex           } = slevithan_regex
      #===========================================================================================================
      @eq ( Ωilxt__28 = -> rpr regex'..'                                      ), '/../v'
      @eq ( Ωilxt__29 = -> rpr rx'..'                                         ), '/../dvy'
      @eq ( Ωilxt__30 = -> ( ( new_regex_tag 'dy'   )'..' ).flags             ), 'dvy'
      @eq ( Ωilxt__31 = -> ( ( new_regex_tag 'dy'   )'..' ).flags             ), 'dvy'
      #.....................................................................................................
      @eq ( Ωilxt__32 = -> ( ( new_regex_tag 'd'    )'..' ).flags             ), 'dvy'
      @eq ( Ωilxt__33 = -> ( ( new_regex_tag 'y'    )'..' ).flags             ), 'dvy'
      # @eq ( Ωilxt__34 = -> ( ( new_regex_tag 'dvy'  )'..' ).flags             ), 'dvy'
      # @eq ( Ωilxt__35 = -> ( ( new_regex_tag 'dv'   )'..' ).flags             ), 'dvy'
      # @eq ( Ωilxt__36 = -> ( ( new_regex_tag 'v'    )'..' ).flags             ), 'dvy'
      # @eq ( Ωilxt__37 = -> ( ( new_regex_tag 'x'   )'..' ).flags              ), 'dvy'
      # @eq ( Ωilxt__38 = -> ( ( new_regex_tag 'n'   )'..' ).flags              ), 'dvy'
      @throws ( Ωilxt__39 = -> ( ( new_regex_tag 'duy' )'..' ).flags          ), /———————————/
      @throws ( Ωilxt__40 = -> ( ( new_regex_tag 'u'   )'..' ).flags          ), /———————————/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    new_implementation: ->
      { rx
        new_regex_tag
        internals       } = require '../../../apps/interlex'
      { slevithan_regex } = internals
      { regex           } = slevithan_regex
      #=====================================================================================================
      internals                 =
        regex_flags_re:           /^(?!.*(.).*\1)[dgimsuvy]*$/
        mandatory_flags_txt:      'dy'
        forbidden_flags_re:       /[uv]/g
        #---------------------------------------------------------------------------------------------------------
        validate_regex_flags: ( flags ) ->
          unless ( typeof flags ) is 'string'
            throw new Error "Ωilx__41 expected a text, got #{rpr flags}"
          unless internals.regex_flags_re.test flags
            throw new Error "Ωilx__42 illegal or duplicate flags in #{rpr flags}"
          return flags
        #---------------------------------------------------------------------------------------------------------
        normalize_flags: ( flags = null ) ->
          ### Given a RegExp `flags` text, sets `d`, `y`, removes `u`, `v`, and returns sorted text with unique
          flags. ###
          flags   = internals.validate_regex_flags flags ? ''
          flags   = flags.replace internals.forbidden_flags_re, ''
          flags  += internals.mandatory_flags_txt
          return internals.get_unique_sorted_letters flags
        #---------------------------------------------------------------------------------------------------------
        get_unique_sorted_letters: ( text ) -> [ ( new Set text )..., ].sort().join ''
        #---------------------------------------------------------------------------------------------------------
        normalize_regex: ( regex ) ->
          ### Given a `regex`, return a new regex with the same pattern but normalized flags. ###
          unless regex instanceof RegExp
            throw new Error "Ωilx__43 expected a regex, got #{rpr regex}"
          return new RegExp regex.source, ( internals.normalize_flags regex.flags )
      #-----------------------------------------------------------------------------------------------------
      new_regex_tag = ( global_flags = null ) ->
        global_flags  = internals.normalize_flags global_flags
        R             = ( P... ) -> ( regex global_flags ) P...
        return new Proxy R,
          get: ( target, key ) ->
            return undefined unless typeof key is 'string'
            return regex internals.normalize_flags internals.get_unique_sorted_letters global_flags + key
      #-----------------------------------------------------------------------------------------------------
      @eq ( Ωilxt__44 = -> internals.normalize_flags()                ), 'dy'
      @eq ( Ωilxt__45 = -> internals.normalize_flags undefined        ), 'dy'
      @eq ( Ωilxt__46 = -> internals.normalize_flags null             ), 'dy'
      @eq ( Ωilxt__47 = -> internals.normalize_flags ''               ), 'dy'
      @eq ( Ωilxt__48 = -> internals.normalize_flags 'd'              ), 'dy'
      @eq ( Ωilxt__49 = -> internals.normalize_flags 'y'              ), 'dy'
      @eq ( Ωilxt__50 = -> internals.normalize_flags 'dy'             ), 'dy'
      @eq ( Ωilxt__51 = -> internals.normalize_flags 'yd'             ), 'dy'
      #.....................................................................................................
      @eq ( Ωilxt__52 = -> internals.normalize_flags 'i'              ), 'diy'
      @eq ( Ωilxt__53 = -> internals.normalize_flags 'g'              ), 'dgy'
      @eq ( Ωilxt__54 = -> internals.normalize_flags 'm'              ), 'dmy'
      @eq ( Ωilxt__55 = -> internals.normalize_flags 's'              ), 'dsy'
      @eq ( Ωilxt__56 = -> internals.normalize_flags 'dgimsuvy'       ), 'dgimsy'
      #.....................................................................................................
      @throws ( Ωilxt__57 = -> internals.normalize_flags 'a'          ), /illegal or duplicate flags/
      @throws ( Ωilxt__58 = -> internals.normalize_flags 'yy'         ), /illegal or duplicate flags/
      #-----------------------------------------------------------------------------------------------------
      @eq ( Ωilxt__59 = -> internals.normalize_regex /./              ), /./dy
      @eq ( Ωilxt__60 = -> internals.normalize_regex /./d             ), /./dy
      @eq ( Ωilxt__61 = -> internals.normalize_regex /./y             ), /./dy
      @eq ( Ωilxt__62 = -> internals.normalize_regex /./dy            ), /./dy
      @eq ( Ωilxt__63 = -> internals.normalize_regex /./yd            ), /./dy
      #.....................................................................................................
      @eq ( Ωilxt__64 = -> internals.normalize_regex /./i             ), /./diy
      @eq ( Ωilxt__65 = -> internals.normalize_regex /./g             ), /./dgy
      @eq ( Ωilxt__66 = -> internals.normalize_regex /./m             ), /./dmy
      @eq ( Ωilxt__67 = -> internals.normalize_regex /./s             ), /./dsy
      @eq ( Ωilxt__68 = -> internals.normalize_regex /./dgimsvy       ), /./dgimsy
      @eq ( Ωilxt__69 = -> internals.normalize_regex /./dgimsuy       ), /./dgimsy
      #.....................................................................................................
      @throws ( Ωilxt__70 = -> internals.normalize_regex()            ), /expected a regex, got/
      @throws ( Ωilxt__71 = -> internals.normalize_regex 'helo'       ), /expected a regex, got/
      #-----------------------------------------------------------------------------------------------------
      @eq ( Ωilxt__72 = -> ( new_regex_tag ''       )'.'              ), /./dvy
      @eq ( Ωilxt__73 = -> ( new_regex_tag 'd'      )'.'              ), /./dvy
      @eq ( Ωilxt__74 = -> ( new_regex_tag 'y'      )'.'              ), /./dvy
      @eq ( Ωilxt__75 = -> ( new_regex_tag 'dy'     )'.'              ), /./dvy
      @eq ( Ωilxt__76 = -> ( new_regex_tag 'yd'     )'.'              ), /./dvy
      @eq ( Ωilxt__77 = -> ( new_regex_tag 'd'      ).d'.'            ), /./dvy
      @eq ( Ωilxt__78 = -> ( new_regex_tag 'y'      ).y'.'            ), /./dvy
      @eq ( Ωilxt__79 = -> ( new_regex_tag 'dy'     ).dy'.'           ), /./dvy
      @eq ( Ωilxt__80 = -> ( new_regex_tag 'yd'     ).yd'.'           ), /./dvy
      @eq ( Ωilxt__81 = -> ( new_regex_tag ''       ).d'.'            ), /./dvy
      @eq ( Ωilxt__82 = -> ( new_regex_tag ''       ).y'.'            ), /./dvy
      @eq ( Ωilxt__83 = -> ( new_regex_tag ''       ).dy'.'           ), /./dvy
      @eq ( Ωilxt__84 = -> ( new_regex_tag ''       ).yd'.'           ), /./dvy
      #.....................................................................................................
      @eq ( Ωilxt__85 = -> ( new_regex_tag ''       ).i'.'            ), /./divy
      @eq ( Ωilxt__86 = -> ( new_regex_tag ''       ).g'.'            ), /./dgvy
      @eq ( Ωilxt__87 = -> ( new_regex_tag ''       ).m'.'            ), /./dmvy
      @eq ( Ωilxt__88 = -> ( new_regex_tag ''       ).s'.'            ), /./dsvy
      @eq ( Ωilxt__89 = -> ( new_regex_tag ''       ).dgimsvy'.'      ), /./dgimsvy
      @eq ( Ωilxt__90 = -> ( new_regex_tag ''       ).dgimsuy'.'      ), /./dgimsvy
      #.....................................................................................................
      return null

  #=========================================================================================================
  basics:

    #-------------------------------------------------------------------------------------------------------
    simple_1: ->
      ILX                 = require '../../../apps/interlex'
      { Grammar
        Level
        Token
        Lexeme
        rx
        internals       } = ILX
      { slevithan_regex } = internals
      #===========================================================================================================
      g                 = new Grammar { name: 'g', }
      gnd               = g.new_level { name: 'gnd', }
      number_tk_matcher = rx"[0-9]+\P{Letter}"
      number_tk         = gnd.new_token { name: 'number', matcher: number_tk_matcher, }
      number_lx         = null
      #.....................................................................................................
      @eq ( Ωilxt__91 = -> g.start_level instanceof Level                                 ), true
      @eq ( Ωilxt__92 = -> g.start_level                                                  ), gnd
      @eq ( Ωilxt__93 = -> g.start_level_name                                             ), 'gnd'
      @eq ( Ωilxt__94 = -> g.name                                                         ), 'g'
      @eq ( Ωilxt__95 = -> g.levels instanceof Object                                     ), true
      @eq ( Ωilxt__96 = -> g.levels.gnd                                                   ), gnd
      #.....................................................................................................
      @eq ( Ωilxt__97 = -> gnd instanceof Level                                           ), true
      @eq ( Ωilxt__98 = -> gnd.name                                                       ), 'gnd'
      @eq ( Ωilxt__99 = -> gnd.grammar                                                    ), g
      @eq ( Ωilxt_100 = -> gnd.tokens instanceof Array                                    ), true
      @eq ( Ωilxt_101 = -> gnd.tokens.length                                              ), 1
      @eq ( Ωilxt_102 = -> gnd.tokens[ 0 ]                                                ), number_tk
      #.....................................................................................................
      @eq ( Ωilxt_103 = -> number_tk instanceof Token                                     ), true
      @eq ( Ωilxt_104 = -> number_tk.name                                                 ), 'number'
      @eq ( Ωilxt_105 = -> number_tk.level                                                ), gnd
      @eq ( Ωilxt_106 = -> number_tk.grammar                                              ), g
      @eq ( Ωilxt_107 = -> rpr number_tk.matcher                                          ), '/[0-9]+/dvy'
      @eq ( Ωilxt_108 = -> number_tk.matcher.hasIndices                                   ), true
      @eq ( Ωilxt_109 = -> number_tk.matcher.sticky                                       ), true
      @eq ( Ωilxt_110 = -> number_tk.matcher.unicodeSets                                  ), true
      @eq ( Ωilxt_111 = -> number_tk.jump                                                 ), null
      @eq ( Ωilxt_112 = -> number_tk.jump_spec                                            ), null
      #.....................................................................................................
      @eq ( Ωilxt_113 = -> ( number_lx = number_tk.match_at 0, '398ä' )?                  ), true
      @eq ( Ωilxt_114 = -> number_lx instanceof Lexeme                                    ), true
      @eq ( Ωilxt_115 = -> number_lx.name                                                 ), 'number'
      @eq ( Ωilxt_116 = -> number_lx.fqname                                               ), 'gnd.number'
      @eq ( Ωilxt_117 = -> number_lx.level                                                ), gnd
      @eq ( Ωilxt_118 = -> number_lx.hit                                                  ), '398'
      @eq ( Ωilxt_119 = -> number_lx.start                                                ), 0
      @eq ( Ωilxt_120 = -> number_lx.stop                                                 ), 3
      #.....................................................................................................
      @eq ( Ωilxt_121 = -> ( number_lx = number_tk.match_at 7, 'abcdefgh00102xyz' )?      ), false
      @eq ( Ωilxt_122 = -> ( number_lx = number_tk.match_at 8, 'abcdefgh00102xyz' )?      ), true
      @eq ( Ωilxt_123 = -> number_lx instanceof Lexeme                                    ), true
      @eq ( Ωilxt_124 = -> number_lx.name                                                 ), 'number'
      @eq ( Ωilxt_125 = -> number_lx.fqname                                               ), 'gnd.number'
      @eq ( Ωilxt_126 = -> number_lx.level                                                ), gnd
      @eq ( Ωilxt_127 = -> number_lx.hit                                                  ), '00102'
      @eq ( Ωilxt_128 = -> number_lx.start                                                ), 8
      @eq ( Ωilxt_129 = -> number_lx.stop                                                 ), 13
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    new_regex_tag: ->
      { rx
        regex
        new_regex_tag } = require '../../../apps/interlex'
      #.....................................................................................................
      @eq ( Ωilxt_130 = -> typeof   new_regex_tag 'dy'                                  ), 'function'
      @eq ( Ωilxt_131 = -> ( (      new_regex_tag 'dyis'  )"[a-z]" ) instanceof RegExp  ), true
      @eq ( Ωilxt_132 = -> rpr (    new_regex_tag 'dyis'  )"[a-z]"                      ), '/[a-z]/disvy'
      @eq ( Ωilxt_133 = -> typeof ( new_regex_tag 'dy'    ).si                          ), 'function'
      @eq ( Ωilxt_134 = -> rpr (    new_regex_tag 'dy'    ).si"[a-z]"                   ), '/[a-z]/disvy'
      @eq ( Ωilxt_135 = -> rpr (    new_regex_tag 'dys'   ).si"[a-z]"                   ), '/[a-z]/disvy'
      @eq ( Ωilxt_136 = -> rpr (    new_regex_tag 'dys'   ).i"[a-z]"                    ), '/[a-z]/disvy'
      @eq ( Ωilxt_137 = -> rpr (    new_regex_tag 'dysi'  )"[a-z]"                      ), '/[a-z]/disvy'
      @eq ( Ωilxt_138 = -> rpr (    new_regex_tag 'v'     ).si"[a-z]"                   ), '/[a-z]/disvy'
      @throws ( Ωilxt_139 = -> (    new_regex_tag 'dy'    ).ab"[a-z]"                   ), /invalid flags/
      @throws ( Ωilxt_140 = -> (    new_regex_tag 'dyab'  )"[a-z]"                      ), /invalid flags/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    copy_regex: ->
      { _copy_regex } = require '../../../apps/interlex'
      @eq ( Ωilxt_141 = -> typeof _copy_regex                                         ), 'function'
      @eq ( Ωilxt_142 = -> ( _copy_regex /[a-z]/i, 'I'          ) instanceof RegExp   ), true
      @eq ( Ωilxt_143 = -> ( _copy_regex /[a-z]/i, 'I'          ).source              ), '[a-z]'
      @eq ( Ωilxt_144 = -> ( _copy_regex /[a-z]/i, 'I'          ).flags               ), ''
      @eq ( Ωilxt_145 = -> ( _copy_regex /[a-z]/i, 'Ig'         ).flags               ), 'g'
      @eq ( Ωilxt_146 = -> ( _copy_regex /[a-z]/i, 'IgV'        ).flags               ), 'g'
      @eq ( Ωilxt_147 = -> ( _copy_regex /[a-z]/i, 'gv'         ).flags               ), 'giv'
      @eq ( Ωilxt_148 = -> ( _copy_regex /[a-z]/i, 'gu'         ).flags               ), 'giu'
      @eq ( Ωilxt_149 = -> ( _copy_regex /[a-z]/igvys, 'SYVGI'  ).flags               ), ''
      @throws ( Ωilxt_150 = -> _copy_regex /[a-z]/i, 'guv'      ), /Invalid flags supplied to RegExp constructor/
      @throws ( Ωilxt_151 = -> _copy_regex /[a-z]/u, 'v'        ), /Invalid flags supplied to RegExp constructor/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    rx_flags: ->
      { rx } = require '../../../apps/interlex'
      @eq ( Ωilxt_152 = -> ( rx"x"        ).flags ), 'dvy'
      @eq ( Ωilxt_153 = -> ( rx.si"x"     ).flags ), 'disvy'
      # @eq ( Ωilxt_154 = -> ( rx.sidvy"x"  ).flags ), 'disvy'
      @eq ( Ωilxt_155 = -> ( rx.y"x"      ).flags ), 'dvy'
      @eq ( Ωilxt_156 = -> rpr rx"[abc]+" ), '/[abc]+/dvy'
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    numbering: ->
      ILX         = require '../../../apps/interlex'
      { Grammar
        rx      } = ILX
      #=====================================================================================================
      new_grammar = ( cfg ) ->
        g         = new Grammar { name: 'g', cfg..., }
        gnd       = g.new_level { name: 'gnd', }
        #.....................................................................................................
        gnd.new_token       { name: 'name',           matcher: rx"(?<initial>[A-Z])[a-z]*", }
        gnd.new_token       { name: 'number',         matcher: rx"[0-9]+",                  }
        gnd.new_token       { name: 'ws',             matcher: rx"\s+",                     }
        gnd.new_token       { name: 'text',           matcher: rx"[^a-zA-Z0-9\s]+",         }
        #.....................................................................................................
        return g
      #.....................................................................................................
      do =>
        g = new_grammar()
        @eq ( Ωilxt_157 = -> g.cfg.counter_name   ), 'line_nr'
        @eq ( Ωilxt_158 = -> g.cfg.counter_step   ), +1
        @eq ( Ωilxt_159 = -> g.cfg.counter_value  ), 1
        @eq ( Ωilxt_160 = -> g.state.count        ), 1
        probes_and_matchers = [
          [ "1st line",           1, ]
          [ "2nd line",           2, ]
          [ "3rd line",           3, ]
          [ "4th line (and EOF)", 4, ] ]
        #...................................................................................................
        for [ probe, matcher, ] from probes_and_matchers
          info 'Ωilxt_161', rpr probe
          lexemes = g.get_lexemes probe
          urge 'Ωilxt_162', lexemes
          @eq ( Ωilxt_163 = -> lexemes[ 0 ].line_nr ), matcher
        return null
      #.....................................................................................................
      do =>
        g = new_grammar { counter_name: 'test_id', counter_step: -1, counter_value: 10, }
        @eq ( Ωilxt_164 = -> g.cfg.counter_name   ), 'test_id'
        @eq ( Ωilxt_165 = -> g.cfg.counter_step   ), -1
        @eq ( Ωilxt_166 = -> g.cfg.counter_value  ), 10
        @eq ( Ωilxt_167 = -> g.state.count        ), 10
        probes_and_matchers = [
          [ "1st line",           10, ]
          [ "2nd line",           9, ]
          [ "3rd line",           8, ]
          [ "4th line (and EOF)", 7, ] ]
        #...................................................................................................
        for [ probe, matcher, ] from probes_and_matchers
          info 'Ωilxt_168', rpr probe
          lexemes = g.get_lexemes probe
          # urge 'Ωilxt_169', lexemes
          urge 'Ωilxt_170', g
          urge 'Ωilxt_171', g.cfg
          urge 'Ωilxt_172', g.state
          @eq ( Ωilxt_173 = -> lexemes[ 0 ].test_id ), matcher
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    can_use_plain_regexes: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #-----------------------------------------------------------------------------------------------------
      condense_lexemes = ( lexemes ) ->
        ( "#{lexeme.fqname}#{rpr lexeme.hit}" for lexeme from lexemes ).join '|'
      #-----------------------------------------------------------------------------------------------------
      probes_and_matchers = [
        [ "1st line",           { length: 3, condensed: "gnd.ordinal'1st'|gnd.ws' '|gnd.word'line'", }, ]
        [ "2nd line",           { length: 3, condensed: "gnd.ordinal'2nd'|gnd.ws' '|gnd.word'line'", }, ]
        [ "3rd line",           { length: 3, condensed: "gnd.ordinal'3rd'|gnd.ws' '|gnd.word'line'", }, ]
        [ "4th line (and EOF)", { length: 9, condensed: "gnd.ordinal'4th'|gnd.ws' '|gnd.word'line'|gnd.ws' '|gnd.other'('|gnd.word'and'|gnd.ws' '|gnd.word'EOF'|gnd.other')'", }, ] ]
      #-----------------------------------------------------------------------------------------------------
      test = ( g ) =>
        for [ probe, matcher, ] from probes_and_matchers
          g.reset_count()
          lexemes = g.get_lexemes probe
          @eq ( Ωilxt_174 = -> condense_lexemes lexemes ), matcher.condensed
          @eq ( Ωilxt_175 = -> lexemes.length ), matcher.length
          g.reset_count()
          @eq ( Ωilxt_176 = -> [ ( g.walk_lexemes probe )..., ] ), lexemes
        return null
      #-----------------------------------------------------------------------------------------------------
      do =>
        g         = new Grammar { name: 'g', }
        gnd       = g.new_level { name: 'gnd', }
        #...................................................................................................
        gnd.new_token       { name: 'name',           matcher: rx"(?<initial>[A-Z])[a-z]+",           }
        gnd.new_token       { name: 'ordinal',        matcher: rx"(?<ordinal>[0-9]+)(st|nd|rd|th)",   }
        gnd.new_token       { name: 'number',         matcher: rx"[0-9]+",                            }
        gnd.new_token       { name: 'ws',             matcher: rx"\s+",                               }
        gnd.new_token       { name: 'word',           matcher: rx.i"[a-z]+",                          }
        gnd.new_token       { name: 'other',          matcher: rx.i"[^a-z0-9\s]+",                    }
        #...................................................................................................
        test g
      #-----------------------------------------------------------------------------------------------------
      do =>
        g         = new Grammar { name: 'g', }
        gnd       = g.new_level { name: 'gnd', }
        #...................................................................................................
        gnd.new_token       { name: 'name',           matcher: /(?<initial>[A-Z])[a-z]+/dvy,            }
        gnd.new_token       { name: 'ordinal',        matcher: /(?<ordinal>[0-9]+)(?:st|nd|rd|th)/dvy,  }
        gnd.new_token       { name: 'number',         matcher: /[0-9]+/dvy,                             }
        gnd.new_token       { name: 'ws',             matcher: /\s+/dvy,                                }
        gnd.new_token       { name: 'word',           matcher: /[a-z]+/divy,                            }
        gnd.new_token       { name: 'other',          matcher: /[^a-z0-9\s]+/divy,                      }
        #...................................................................................................
        test g
      #-----------------------------------------------------------------------------------------------------
      do =>
        g         = new Grammar { name: 'g', }
        gnd       = g.new_level { name: 'gnd', }
        #...................................................................................................
        gnd.new_token       { name: 'name',           matcher: /(?<initial>[A-Z])[a-z]+/,               }
        gnd.new_token       { name: 'ordinal',        matcher: /(?<ordinal>[0-9]+)(?:st|nd|rd|th)/,     }
        gnd.new_token       { name: 'number',         matcher: /[0-9]+/,                                }
        gnd.new_token       { name: 'ws',             matcher: /\s+/,                                   }
        gnd.new_token       { name: 'word',           matcher: /[a-z]+/i,                               }
        gnd.new_token       { name: 'other',          matcher: /[^a-z0-9\s]+/i,                         }
        #...................................................................................................
        test g
      #-----------------------------------------------------------------------------------------------------
      do =>
        g         = new Grammar { name: 'g', }
        gnd       = g.new_level { name: 'gnd', }
        #...................................................................................................
        gnd.new_token       { name: 'name',           matcher: /(?<initial>[A-Z])[a-z]+/v,              }
        gnd.new_token       { name: 'ordinal',        matcher: /(?<ordinal>[0-9]+)(?:st|nd|rd|th)/u,    }
        gnd.new_token       { name: 'number',         matcher: /[0-9]+/,                                }
        gnd.new_token       { name: 'ws',             matcher: /\s+/,                                   }
        gnd.new_token       { name: 'word',           matcher: /[a-z]+/i,                               }
        gnd.new_token       { name: 'other',          matcher: /[^a-z0-9\s]+/i,                         }
        #...................................................................................................
        test g
      #.....................................................................................................
      return null


  #=========================================================================================================
  demo:

    #-------------------------------------------------------------------------------------------------------
    demo: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #===========================================================================================================
      g         = new Grammar { name: 'g', }
      gnd       = g.new_level { name: 'gnd', }
      string11  = g.new_level { name: 'string11', }
      string12  = g.new_level { name: 'string12', }
      # debug 'Ωilxt_177', [ string11, string12, ]
      # console.debug 'Ωilxt_178', [ string11, string12, ]
      # process.exit 111
      #.........................................................................................................
      gnd.new_token       { name: 'name',           matcher: rx"(?<initial>[A-Z])[a-z]*", }
      gnd.new_token       { name: 'number',         matcher: rx"[0-9]+",                  }
      gnd.new_token       { name: 'string11_start', matcher: rx"(?!<\\)'",                jump: 'string11', }
      gnd.new_token       { name: 'string12_start', matcher: rx'(?!<\\)"',                jump: 'string12', }
      gnd.new_token       { name: 'paren_start',    matcher: rx"\(",                      }
      gnd.new_token       { name: 'paren_stop',     matcher: rx"\)",                      }
      gnd.new_token       { name: 'other',          matcher: rx"[A-Za-z0-9]+",            }
      gnd.new_token       { name: 'ws',             matcher: rx"\s+",                     }
      #.........................................................................................................
      string11.new_token  { name: 'string11_stop',  matcher: rx"(?!<\\)'",                jump: '..', }
      string11.new_token  { name: 'text',           matcher: rx"[^']*",                   }
      #.........................................................................................................
      debug 'Ωilxt_179', g
      debug 'Ωilxt_180', g.levels
      debug 'Ωilxt_181', g.levels.gnd
      debug 'Ωilxt_182', g.levels.gnd.tokens
      debug 'Ωilxt_183', gnd
      debug 'Ωilxt_184', token for token from gnd
      #.........................................................................................................
      show_lexeme = ( lexeme ) ->
        { name
          fqname
          start
          stop
          hit
          jump
          jump_spec
          groups  } = lexeme
        groups_rpr  = if groups?  then ( rpr { groups..., } ) else ''
        jump_rpr    = jump_spec ? ''
        urge 'Ωilxt_185', f"#{start}:>3.0f;:#{stop}:<3.0f; #{fqname}:<20c; #{rpr hit}:<30c; #{jump_rpr}:<15c; #{groups_rpr}"
      #.........................................................................................................
      sources = [
        "Alice in Cairo 1912 (approximately)"
        "Alice in Cairo 1912 'approximately'"
        ]
      #.........................................................................................................
      for source from sources
        info 'Ωilxt_186', rpr source
        for lexeme from g.walk_lexemes source
          show_lexeme lexeme
      #.........................................................................................................
      return null


#===========================================================================================================
if module is require.main then await do =>
  # ( new Test { throw_on_error: true, } ).test @interlex_tasks
  # ( new Test { throw_on_error: false, } ).test @interlex_tasks
  # ( new Test { throw_on_error: true, } ).test { regexes: @interlex_tasks.basics.regexes, }
  ( new Test { throw_on_error: true, } ).test { new_implementation: @interlex_tasks.regexes.new_implementation, }
  # ( new Test { throw_on_error: true, } ).test { can_use_plain_regexes: @interlex_tasks.basics.can_use_plain_regexes, }
  # ( new Test { throw_on_error: true, } ).test { demo: @interlex_tasks.demo.demo, }
  # demo()
  # demo_jsidentifier()
  do =>
  f = ->
    help 'Ωilxt_187', Array.from 'a🈯z'
    help 'Ωilxt_188', 'a🈯z'.split /(.)/u
    help 'Ωilxt_189', 'a🈯z'.split( /(.)/v )
    help 'Ωilxt_190', 'a🈯z'.split( /(.)/d )
    help 'Ωilxt_191', match = 'a🈯z'.match /^(?<head>[a-z]+)(?<other>[^a-z]+)(?<tail>[a-z]+)/d
    help 'Ωilxt_192', { match.groups..., }
    help 'Ωilxt_193', { match.indices.groups..., }
    # help 'Ωilxt_194', rx"."
    # help 'Ωilxt_195', rx/./


