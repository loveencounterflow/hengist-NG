
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
condense_lexemes = ( lexemes ) ->
  lexemes = [ lexemes, ] unless Array.isArray lexemes
  ( "#{lexeme.fqname}#{rpr lexeme.hit}" for lexeme from lexemes ).join '|'


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
      { internals     } = require '../../../apps/interlex'
      { slevithan_regex
        jsid_re       } = internals
      jsid_anchored_re  = slevithan_regex.regex"^#{jsid_re}$"
      @eq ( Ωilxt___1 = -> jsid_anchored_re.flags ), 'v'
      @eq ( Ωilxt___2 = -> ( ( '_abc3'  ).match jsid_anchored_re  )? ), true
      @eq ( Ωilxt___3 = -> ( ( '_abc$'  ).match jsid_anchored_re  )? ), true
      @eq ( Ωilxt___4 = -> ( ( '$abc'   ).match jsid_anchored_re  )? ), true
      @eq ( Ωilxt___5 = -> ( ( 'abc'    ).match jsid_anchored_re  )? ), true
      @eq ( Ωilxt___6 = -> ( ( '3_abc'  ).match jsid_anchored_re  )? ), false
      @eq ( Ωilxt___7 = -> ( ( '&%'     ).match jsid_anchored_re  )? ), false
      return null

    #-------------------------------------------------------------------------------------------------------
    sort_lexemes_by_length_dec: ->
      { internals } = require '../../../apps/interlex'
      #.....................................................................................................
      @eq ( Ωilxt___8 = -> internals.sort_lexemes_by_length_dec []                                    ), []
      @eq ( Ωilxt___9 = -> internals.sort_lexemes_by_length_dec [ '1', ]                              ), [ '1' ]
      @eq ( Ωilxt__10 = -> internals.sort_lexemes_by_length_dec [ '1', 'i', ]                         ), [ '1', 'i' ]
      @eq ( Ωilxt__11 = -> internals.sort_lexemes_by_length_dec [ '1', '123', '1', '1234', ]          ), [ '1234', '123', '1', '1' ]
      @eq ( Ωilxt__12 = -> internals.sort_lexemes_by_length_dec [ 'abcd', '1234', '1', '123', 'i', ]  ), [ 'abcd', '1234', '123', '1', 'i' ]
      @eq ( Ωilxt__13 = -> internals.sort_lexemes_by_length_dec [ '1234', 'abcd', '1', '123', 'i', ]  ), [ '1234', 'abcd', '123', '1', 'i' ]
      @eq ( Ωilxt__14 = -> internals.sort_lexemes_by_length_dec [ '1234', '1', 'abcd', '123', 'i', ]  ), [ '1234', 'abcd', '123', '1', 'i' ]
      @eq ( Ωilxt__15 = -> internals.sort_lexemes_by_length_dec [ '1234', '1', '123', 'abcd', 'i', ]  ), [ '1234', 'abcd', '123', '1', 'i' ]
      @eq ( Ωilxt__16 = -> internals.sort_lexemes_by_length_dec [ '1234', '1', '123', 'i', 'abcd', ]  ), [ '1234', 'abcd', '123', '1', 'i' ]
      #.....................................................................................................
      return null

  #=========================================================================================================
  regexes:

    #-------------------------------------------------------------------------------------------------------
    new_implementation: ->
      { rx
        new_regex_tag
        internals       } = require '../../../apps/interlex'
      #=====================================================================================================
      @throws ( Ωilxt__17 = -> internals.normalize_regex_flags()                ), /Cannot destructure property 'flags'/
      @throws ( Ωilxt__18 = -> internals.normalize_regex_flags undefined        ), /Cannot destructure property 'flags'/
      @throws ( Ωilxt__19 = -> internals.normalize_regex_flags null             ), /Cannot destructure property 'flags'/
      @eq ( Ωilxt__20 = -> internals.normalize_regex_flags { flags: '',         mode: 'slr', } ), 'dy'
      @eq ( Ωilxt__21 = -> internals.normalize_regex_flags { flags: 'd',        mode: 'slr', } ), 'dy'
      @eq ( Ωilxt__22 = -> internals.normalize_regex_flags { flags: 'y',        mode: 'slr', } ), 'dy'
      @eq ( Ωilxt__23 = -> internals.normalize_regex_flags { flags: 'dy',       mode: 'slr', } ), 'dy'
      @eq ( Ωilxt__24 = -> internals.normalize_regex_flags { flags: 'yd',       mode: 'slr', } ), 'dy'
      #.....................................................................................................
      @eq ( Ωilxt__25 = -> internals.normalize_regex_flags { flags: 'i',        mode: 'slr', } ), 'diy'
      @eq ( Ωilxt__26 = -> internals.normalize_regex_flags { flags: 'g',        mode: 'slr', } ), 'dgy'
      @eq ( Ωilxt__27 = -> internals.normalize_regex_flags { flags: 'm',        mode: 'slr', } ), 'dmy'
      @eq ( Ωilxt__28 = -> internals.normalize_regex_flags { flags: 's',        mode: 'slr', } ), 'dsy'
      @eq ( Ωilxt__29 = -> internals.normalize_regex_flags { flags: 'dgimsuvy', mode: 'slr', } ), 'dgimsy'
      #.....................................................................................................
      @throws ( Ωilxt__30 = -> internals.normalize_regex_flags { flags: 'a',    mode: 'slr', } ), /illegal or duplicate flags/
      @throws ( Ωilxt__31 = -> internals.normalize_regex_flags { flags: 'yy',   mode: 'slr', } ), /illegal or duplicate flags/
      #-----------------------------------------------------------------------------------------------------
      @eq ( Ωilxt__32 = -> internals.normalize_regex /./              ), /./dvy
      @eq ( Ωilxt__33 = -> internals.normalize_regex /./d             ), /./dvy
      @eq ( Ωilxt__34 = -> internals.normalize_regex /./y             ), /./dvy
      @eq ( Ωilxt__35 = -> internals.normalize_regex /./dy            ), /./dvy
      @eq ( Ωilxt__36 = -> internals.normalize_regex /./yd            ), /./dvy
      #.....................................................................................................
      @eq ( Ωilxt__37 = -> internals.normalize_regex /./i             ), /./divy
      @eq ( Ωilxt__38 = -> internals.normalize_regex /./g             ), /./dgvy
      @eq ( Ωilxt__39 = -> internals.normalize_regex /./m             ), /./dmvy
      @eq ( Ωilxt__40 = -> internals.normalize_regex /./s             ), /./dsvy
      @eq ( Ωilxt__41 = -> internals.normalize_regex /./dgimsvy       ), /./dgimsvy
      @eq ( Ωilxt__42 = -> internals.normalize_regex /./dgimsuy       ), /./dgimsvy
      #.....................................................................................................
      @throws ( Ωilxt__43 = -> internals.normalize_regex()            ), /expected a regex, got/
      @throws ( Ωilxt__44 = -> internals.normalize_regex 'helo'       ), /expected a regex, got/
      #-----------------------------------------------------------------------------------------------------
      @eq ( Ωilxt__45 = -> ( new_regex_tag ''       )'.'              ), /./dvy
      @eq ( Ωilxt__46 = -> ( new_regex_tag 'd'      )'.'              ), /./dvy
      @eq ( Ωilxt__47 = -> ( new_regex_tag 'y'      )'.'              ), /./dvy
      @eq ( Ωilxt__48 = -> ( new_regex_tag 'dy'     )'.'              ), /./dvy
      @eq ( Ωilxt__49 = -> ( new_regex_tag 'yd'     )'.'              ), /./dvy
      @eq ( Ωilxt__50 = -> ( new_regex_tag 'd'      ).d'.'            ), /./dvy
      @eq ( Ωilxt__51 = -> ( new_regex_tag 'y'      ).y'.'            ), /./dvy
      @eq ( Ωilxt__52 = -> ( new_regex_tag 'dy'     ).dy'.'           ), /./dvy
      @eq ( Ωilxt__53 = -> ( new_regex_tag 'yd'     ).yd'.'           ), /./dvy
      @eq ( Ωilxt__54 = -> ( new_regex_tag ''       ).d'.'            ), /./dvy
      @eq ( Ωilxt__55 = -> ( new_regex_tag ''       ).y'.'            ), /./dvy
      @eq ( Ωilxt__56 = -> ( new_regex_tag ''       ).dy'.'           ), /./dvy
      @eq ( Ωilxt__57 = -> ( new_regex_tag ''       ).yd'.'           ), /./dvy
      #.....................................................................................................
      @eq ( Ωilxt__58 = -> ( new_regex_tag ''       ).i'.'            ), /./divy
      @eq ( Ωilxt__59 = -> ( new_regex_tag ''       ).g'.'            ), /./dgvy
      @eq ( Ωilxt__60 = -> ( new_regex_tag ''       ).m'.'            ), /./dmvy
      @eq ( Ωilxt__61 = -> ( new_regex_tag ''       ).s'.'            ), /./dsvy
      @eq ( Ωilxt__62 = -> ( new_regex_tag ''       ).dgimsvy'.'      ), /./dgimsvy
      @eq ( Ωilxt__63 = -> ( new_regex_tag ''       ).dgimsuy'.'      ), /./dgimsvy
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
      #===========================================================================================================
      g                 = new Grammar { name: 'g', }
      gnd               = g.new_level { name: 'gnd', }
      number_tk_matcher = rx"[0-9]+"
      number_tk         = gnd.new_token { name: 'number', matcher: number_tk_matcher, }
      number_lx         = null
      #.....................................................................................................
      @eq ( Ωilxt__64 = -> g.start_level instanceof Level                                 ), true
      @eq ( Ωilxt__65 = -> g.start_level                                                  ), gnd
      @eq ( Ωilxt__66 = -> g.start_level_name                                             ), 'gnd'
      @eq ( Ωilxt__67 = -> g.name                                                         ), 'g'
      @eq ( Ωilxt__68 = -> g.levels instanceof Object                                     ), true
      @eq ( Ωilxt__69 = -> g.levels.gnd                                                   ), gnd
      #.....................................................................................................
      @eq ( Ωilxt__70 = -> gnd instanceof Level                                           ), true
      @eq ( Ωilxt__71 = -> gnd.name                                                       ), 'gnd'
      @eq ( Ωilxt__72 = -> gnd.grammar                                                    ), g
      @eq ( Ωilxt__73 = -> gnd.tokens instanceof Array                                    ), true
      @eq ( Ωilxt__74 = -> gnd.tokens.length                                              ), 1
      @eq ( Ωilxt__75 = -> gnd.tokens[ 0 ]                                                ), number_tk
      #.....................................................................................................
      @eq ( Ωilxt__76 = -> number_tk instanceof Token                                     ), true
      @eq ( Ωilxt__77 = -> number_tk.name                                                 ), 'number'
      @eq ( Ωilxt__78 = -> number_tk.level                                                ), gnd
      @eq ( Ωilxt__79 = -> number_tk.grammar                                              ), g
      @eq ( Ωilxt__80 = -> number_tk.matcher                                              ), /[0-9]+/dvy
      @eq ( Ωilxt__81 = -> number_tk.matcher.hasIndices                                   ), true
      @eq ( Ωilxt__82 = -> number_tk.matcher.sticky                                       ), true
      @eq ( Ωilxt__83 = -> number_tk.matcher.unicodeSets                                  ), true
      @eq ( Ωilxt__84 = -> number_tk.jump                                                 ), null
      @eq ( Ωilxt__85 = -> number_tk.jump_spec                                            ), null
      #.....................................................................................................
      @eq ( Ωilxt__86 = -> ( number_lx = number_tk.match_at 0, '398ä' )?                  ), true
      @eq ( Ωilxt__87 = -> number_lx instanceof Lexeme                                    ), true
      @eq ( Ωilxt__88 = -> number_lx.name                                                 ), 'number'
      @eq ( Ωilxt__89 = -> number_lx.fqname                                               ), 'gnd.number'
      @eq ( Ωilxt__90 = -> number_lx.level                                                ), gnd
      @eq ( Ωilxt__91 = -> number_lx.hit                                                  ), '398'
      @eq ( Ωilxt__92 = -> number_lx.start                                                ), 0
      @eq ( Ωilxt__93 = -> number_lx.stop                                                 ), 3
      #.....................................................................................................
      @eq ( Ωilxt__94 = -> ( number_lx = number_tk.match_at 7, 'abcdefgh00102xyz' )?      ), false
      @eq ( Ωilxt__95 = -> ( number_lx = number_tk.match_at 8, 'abcdefgh00102xyz' )?      ), true
      @eq ( Ωilxt__96 = -> number_lx instanceof Lexeme                                    ), true
      @eq ( Ωilxt__97 = -> number_lx.name                                                 ), 'number'
      @eq ( Ωilxt__98 = -> number_lx.fqname                                               ), 'gnd.number'
      @eq ( Ωilxt__99 = -> number_lx.level                                                ), gnd
      @eq ( Ωilxt_100 = -> number_lx.hit                                                  ), '00102'
      @eq ( Ωilxt_101 = -> number_lx.start                                                ), 8
      @eq ( Ωilxt_102 = -> number_lx.stop                                                 ), 13
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    new_regex_tag: ->
      { rx
        regex
        internals
        new_regex_tag } = require '../../../apps/interlex'
      #.....................................................................................................
      @eq ( Ωilxt_103 = -> typeof   new_regex_tag 'dy'                                  ), 'function'
      @eq ( Ωilxt_104 = -> typeof ( new_regex_tag 'dy'    ).si                          ), 'function'
      @eq ( Ωilxt_105 = -> ( (      new_regex_tag 'dyis'  )"[a-z]" ) instanceof RegExp  ), true
      #.....................................................................................................
      @eq ( Ωilxt_106 = -> ( new_regex_tag 'dyis'  )"[a-z]"     ), /[a-z]/disvy
      @eq ( Ωilxt_107 = -> ( new_regex_tag 'dy'    ).si"[a-z]"  ), /[a-z]/disvy
      @eq ( Ωilxt_108 = -> ( new_regex_tag 'dys'   ).si"[a-z]"  ), /[a-z]/disvy
      @eq ( Ωilxt_109 = -> ( new_regex_tag 'dys'   ).i"[a-z]"   ), /[a-z]/disvy
      @eq ( Ωilxt_110 = -> ( new_regex_tag 'dysi'  )"[a-z]"     ), /[a-z]/disvy
      @eq ( Ωilxt_111 = -> ( new_regex_tag 'v'     ).si"[a-z]"  ), /[a-z]/disvy
      #.....................................................................................................
      @throws ( Ωilxt_112 = -> ( new_regex_tag 'dy'    ).ab"[a-z]"  ), /illegal or duplicate flags/
      @throws ( Ωilxt_113 = -> ( new_regex_tag 'dyab'  )"[a-z]"     ), /illegal or duplicate flags/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    normalize_regex: ->
      { internals       } = require '../../../apps/interlex'
      { normalize_regex } = internals
      @eq ( Ωilxt_114 = -> typeof normalize_regex     ), 'function'
      @eq ( Ωilxt_115 = -> normalize_regex /[a-z]/ig  ), /[a-z]/dgivy
      @eq ( Ωilxt_116 = -> normalize_regex /[a-z]/i   ), /[a-z]/divy
      @eq ( Ωilxt_117 = -> normalize_regex /[a-z]/u   ), /[a-z]/dvy
      @eq ( Ωilxt_118 = -> normalize_regex /[a-z]/gv  ), /[a-z]/dgvy
      @eq ( Ωilxt_119 = -> normalize_regex /[a-z]/gu  ), /[a-z]/dgvy
      @eq ( Ωilxt_120 = -> normalize_regex /[a-z]/v   ), /[a-z]/dvy
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    rx_flags: ->
      { rx } = require '../../../apps/interlex'
      @eq ( Ωilxt_121 = -> ( rx"x"        ).flags ), 'dvy'
      @eq ( Ωilxt_122 = -> ( rx.si"x"     ).flags ), 'disvy'
      # @eq ( Ωilxt_123 = -> ( rx.sidvy"x"  ).flags ), 'disvy'
      @eq ( Ωilxt_124 = -> ( rx.y"x"      ).flags ), 'dvy'
      @eq ( Ωilxt_125 = -> rpr rx"[abc]+" ), '/[abc]+/dvy'
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
        @eq ( Ωilxt_126 = -> g.cfg.counter_name   ), 'line_nr'
        @eq ( Ωilxt_127 = -> g.cfg.counter_step   ), +1
        @eq ( Ωilxt_128 = -> g.cfg.counter_value  ), 1
        @eq ( Ωilxt_129 = -> g.state.count        ), 1
        probes_and_matchers = [
          [ "1st line",           1, ]
          [ "2nd line",           2, ]
          [ "3rd line",           3, ]
          [ "4th line (and EOF)", 4, ] ]
        #...................................................................................................
        for [ probe, matcher, ] from probes_and_matchers
          info 'Ωilxt_130', rpr probe
          lexemes = g.get_lexemes probe
          urge 'Ωilxt_131', lexemes
          @eq ( Ωilxt_132 = -> lexemes[ 0 ].line_nr ), matcher
        return null
      #.....................................................................................................
      do =>
        g = new_grammar { counter_name: 'test_id', counter_step: -1, counter_value: 10, }
        @eq ( Ωilxt_133 = -> g.cfg.counter_name   ), 'test_id'
        @eq ( Ωilxt_134 = -> g.cfg.counter_step   ), -1
        @eq ( Ωilxt_135 = -> g.cfg.counter_value  ), 10
        @eq ( Ωilxt_136 = -> g.state.count        ), 10
        probes_and_matchers = [
          [ "1st line",           10, ]
          [ "2nd line",           9, ]
          [ "3rd line",           8, ]
          [ "4th line (and EOF)", 7, ] ]
        #...................................................................................................
        for [ probe, matcher, ] from probes_and_matchers
          info 'Ωilxt_137', rpr probe
          lexemes = g.get_lexemes probe
          # urge 'Ωilxt_138', lexemes
          urge 'Ωilxt_139', g
          urge 'Ωilxt_140', g.cfg
          urge 'Ωilxt_141', g.state
          @eq ( Ωilxt_142 = -> lexemes[ 0 ].test_id ), matcher
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    can_use_plain_regexes: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
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
          @eq ( Ωilxt_143 = -> condense_lexemes lexemes ), matcher.condensed
          @eq ( Ωilxt_144 = -> lexemes.length ), matcher.length
          g.reset_count()
          @eq ( Ωilxt_145 = -> [ ( g.walk_lexemes probe )..., ] ), lexemes
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
  strategies:

    #-------------------------------------------------------------------------------------------------------
    levels_implement_strategies: ->
      { Grammar } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        ### strategy 'first', shortest tokens first ###
        probes_and_matchers = [
          [ [ 0, 'abcd1234', ], "first.one_letter'a'", ]
          [ [ 1, 'abcd1234', ], "first.one_letter'b'", ]
          [ [ 2, 'abcd1234', ], "first.one_letter'c'", ]
          [ [ 3, 'abcd1234', ], "first.one_letter'd'", ]
          [ [ 4, 'abcd1234', ], "first.one_digit'1'",  ]
          [ [ 5, 'abcd1234', ], "first.one_digit'2'",  ]
          [ [ 0, '123abc',   ], "first.one_digit'1'",  ]
          [ [ 1, '123abc',   ], "first.one_digit'2'",  ]
          [ [ 2, '123abc',   ], "first.one_digit'3'",  ]
          [ [ 3, '123abc',   ], "first.one_letter'a'", ]
          [ [ 4, '123abc',   ], "first.one_letter'b'", ]
          [ [ 5, '123abc',   ], "first.one_letter'c'", ]
          ]
        #...................................................................................................
        g     = new Grammar()
        first = g.new_level { name: 'first', }
        first.new_token { name: 'one_digit',      matcher: /[0-9]{1}/i, }
        first.new_token { name: 'two_digits',     matcher: /[0-9]{2}/i, }
        first.new_token { name: 'three_digits',   matcher: /[0-9]{3}/i, }
        first.new_token { name: 'four_digits',    matcher: /[0-9]{4}/i, }
        first.new_token { name: 'one_letter',     matcher: /[a-z]{1}/i, }
        first.new_token { name: 'two_letters',    matcher: /[a-z]{2}/i, }
        first.new_token { name: 'three_letters',  matcher: /[a-z]{3}/i, }
        first.new_token { name: 'four_letters',   matcher: /[a-z]{4}/i, }
        #.....................................................................................................
        for [ [ position, source, ], matcher, ] in probes_and_matchers
          @eq ( Ωilxt_146 = -> condense_lexemes first.match_first_at position, source ), matcher
        return null
      #.....................................................................................................
      do =>
        ### strategy 'first', longest tokens first ###
        probes_and_matchers = [
          [ [ 0, 'abcd1234', ], "first.four_letters'abcd'", ]
          [ [ 1, 'abcd1234', ], "first.three_letters'bcd'", ]
          [ [ 2, 'abcd1234', ], "first.two_letters'cd'",    ]
          [ [ 3, 'abcd1234', ], "first.one_letter'd'",      ]
          [ [ 4, 'abcd1234', ], "first.four_digits'1234'",  ]
          [ [ 5, 'abcd1234', ], "first.three_digits'234'",  ]
          [ [ 0, '123abc',   ], "first.three_digits'123'",  ]
          [ [ 1, '123abc',   ], "first.two_digits'23'",     ]
          [ [ 2, '123abc',   ], "first.one_digit'3'",       ]
          [ [ 3, '123abc',   ], "first.three_letters'abc'", ]
          [ [ 4, '123abc',   ], "first.two_letters'bc'",    ]
          [ [ 5, '123abc',   ], "first.one_letter'c'",      ]
          ]
        #...................................................................................................
        g     = new Grammar()
        first = g.new_level { name: 'first', }
        first.new_token { name: 'four_digits',    matcher: /[0-9]{4}/i, }
        first.new_token { name: 'three_digits',   matcher: /[0-9]{3}/i, }
        first.new_token { name: 'two_digits',     matcher: /[0-9]{2}/i, }
        first.new_token { name: 'one_digit',      matcher: /[0-9]{1}/i, }
        first.new_token { name: 'four_letters',   matcher: /[a-z]{4}/i, }
        first.new_token { name: 'three_letters',  matcher: /[a-z]{3}/i, }
        first.new_token { name: 'two_letters',    matcher: /[a-z]{2}/i, }
        first.new_token { name: 'one_letter',     matcher: /[a-z]{1}/i, }
        #.....................................................................................................
        for [ [ position, source, ], matcher, ] in probes_and_matchers
          @eq ( Ωilxt_147 = -> condense_lexemes first.match_first_at position, source ), matcher
        return null
      #.....................................................................................................
      do =>
        ### strategy 'longest', shortest tokens first ###
        probes_and_matchers = [
          [ [ 0, 'abcd1234', ], "first.four_letters'abcd'", ]
          [ [ 1, 'abcd1234', ], "first.three_letters'bcd'", ]
          [ [ 2, 'abcd1234', ], "first.two_letters'cd'",    ]
          [ [ 3, 'abcd1234', ], "first.one_letter'd'",      ]
          [ [ 4, 'abcd1234', ], "first.four_digits'1234'",  ]
          [ [ 5, 'abcd1234', ], "first.three_digits'234'",  ]
          [ [ 0, '123abc',   ], "first.three_digits'123'",  ]
          [ [ 1, '123abc',   ], "first.two_digits'23'",     ]
          [ [ 2, '123abc',   ], "first.one_digit'3'",       ]
          [ [ 3, '123abc',   ], "first.three_letters'abc'", ]
          [ [ 4, '123abc',   ], "first.two_letters'bc'",    ]
          [ [ 5, '123abc',   ], "first.one_letter'c'",      ]
          ]
        #...................................................................................................
        g     = new Grammar()
        first = g.new_level { name: 'first', }
        first.new_token { name: 'one_digit',      matcher: /[0-9]{1}/i, }
        first.new_token { name: 'two_digits',     matcher: /[0-9]{2}/i, }
        first.new_token { name: 'three_digits',   matcher: /[0-9]{3}/i, }
        first.new_token { name: 'four_digits',    matcher: /[0-9]{4}/i, }
        first.new_token { name: 'one_letter',     matcher: /[a-z]{1}/i, }
        first.new_token { name: 'two_letters',    matcher: /[a-z]{2}/i, }
        first.new_token { name: 'three_letters',  matcher: /[a-z]{3}/i, }
        first.new_token { name: 'four_letters',   matcher: /[a-z]{4}/i, }
        #.....................................................................................................
        for [ [ position, source, ], matcher, ] in probes_and_matchers
          @eq ( Ωilxt_148 = -> condense_lexemes first.match_longest_at position, source ), matcher
        return null
      #.....................................................................................................
      do =>
        ### strategy 'longest', longest tokens first ###
        probes_and_matchers = [
          [ [ 0, 'abcd1234', ], "first.four_letters'abcd'", ]
          [ [ 1, 'abcd1234', ], "first.three_letters'bcd'", ]
          [ [ 2, 'abcd1234', ], "first.two_letters'cd'",    ]
          [ [ 3, 'abcd1234', ], "first.one_letter'd'",      ]
          [ [ 4, 'abcd1234', ], "first.four_digits'1234'",  ]
          [ [ 5, 'abcd1234', ], "first.three_digits'234'",  ]
          [ [ 0, '123abc',   ], "first.three_digits'123'",  ]
          [ [ 1, '123abc',   ], "first.two_digits'23'",     ]
          [ [ 2, '123abc',   ], "first.one_digit'3'",       ]
          [ [ 3, '123abc',   ], "first.three_letters'abc'", ]
          [ [ 4, '123abc',   ], "first.two_letters'bc'",    ]
          [ [ 5, '123abc',   ], "first.one_letter'c'",      ]
          ]
        #...................................................................................................
        g     = new Grammar()
        first = g.new_level { name: 'first', }
        first.new_token { name: 'four_digits',    matcher: /[0-9]{4}/i, }
        first.new_token { name: 'three_digits',   matcher: /[0-9]{3}/i, }
        first.new_token { name: 'two_digits',     matcher: /[0-9]{2}/i, }
        first.new_token { name: 'one_digit',      matcher: /[0-9]{1}/i, }
        first.new_token { name: 'four_letters',   matcher: /[a-z]{4}/i, }
        first.new_token { name: 'three_letters',  matcher: /[a-z]{3}/i, }
        first.new_token { name: 'two_letters',    matcher: /[a-z]{2}/i, }
        first.new_token { name: 'one_letter',     matcher: /[a-z]{1}/i, }
        #.....................................................................................................
        for [ [ position, source, ], matcher, ] in probes_and_matchers
          @eq ( Ωilxt_149 = -> condense_lexemes first.match_longest_at position, source ), matcher
        return null
      #.....................................................................................................
      do =>
        ### strategy 'longest', scrambled tokens ###
        probes_and_matchers = [
          [ [ 0, 'abcd1234', ], "first.four_letters'abcd'", ]
          [ [ 1, 'abcd1234', ], "first.three_letters'bcd'", ]
          [ [ 2, 'abcd1234', ], "first.two_letters'cd'",    ]
          [ [ 3, 'abcd1234', ], "first.one_letter'd'",      ]
          [ [ 4, 'abcd1234', ], "first.four_digits'1234'",  ]
          [ [ 5, 'abcd1234', ], "first.three_digits'234'",  ]
          [ [ 0, '123abc',   ], "first.three_digits'123'",  ]
          [ [ 1, '123abc',   ], "first.two_digits'23'",     ]
          [ [ 2, '123abc',   ], "first.one_digit'3'",       ]
          [ [ 3, '123abc',   ], "first.three_letters'abc'", ]
          [ [ 4, '123abc',   ], "first.two_letters'bc'",    ]
          [ [ 5, '123abc',   ], "first.one_letter'c'",      ]
          ]
        #...................................................................................................
        shuffle = GUY.rnd.get_shuffle 0.9876, 0.3456
        for _ in [ 1 .. 100 ]
          do =>
            g           = new Grammar()
            first       = g.new_level { name: 'first', }
            token_cfgs  = shuffle [
              { name: 'one_digit',      matcher: /[0-9]{1}/i, }
              { name: 'two_digits',     matcher: /[0-9]{2}/i, }
              { name: 'three_digits',   matcher: /[0-9]{3}/i, }
              { name: 'four_digits',    matcher: /[0-9]{4}/i, }
              { name: 'one_letter',     matcher: /[a-z]{1}/i, }
              { name: 'two_letters',    matcher: /[a-z]{2}/i, }
              { name: 'three_letters',  matcher: /[a-z]{3}/i, }
              { name: 'four_letters',   matcher: /[a-z]{4}/i, } ]
            first.new_token token_cfg for token_cfg in token_cfgs
            #...............................................................................................
            for [ [ position, source, ], matcher, ] in probes_and_matchers
              @eq ( Ωilxt_150 = -> condense_lexemes first.match_longest_at position, source ), matcher
            #...............................................................................................
            return null
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    grammars_use_strategies: ->
      { Grammar } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        ### strategy 'longest', scrambled tokens ###
        probes_and_matchers = [
          [ 'abcd1234',           "first.four_letters'abcd'|first.four_digits'1234'",                                                                       ]
          [ 'abcdefgh1234567890', "first.four_letters'abcd'|first.four_letters'efgh'|first.four_digits'1234'|first.four_digits'5678'|first.two_digits'90'", ]
          [ 'abcdefg123456789',   "first.four_letters'abcd'|first.three_letters'efg'|first.four_digits'1234'|first.four_digits'5678'|first.one_digit'9'",   ]
          [ '123abc',             "first.three_digits'123'|first.three_letters'abc'",                                                                       ]
          ]
        #.....................................................................................................
        shuffle = GUY.rnd.get_shuffle 0.9876, 0.3456
        for _ in [ 1 .. 100 ]
          do =>
            g           = new Grammar { strategy: 'longest', }
            first       = g.new_level { name: 'first', }
            token_cfgs  = shuffle [
              { name: 'one_digit',      matcher: /[0-9]{1}/i, }
              { name: 'two_digits',     matcher: /[0-9]{2}/i, }
              { name: 'three_digits',   matcher: /[0-9]{3}/i, }
              { name: 'four_digits',    matcher: /[0-9]{4}/i, }
              { name: 'one_letter',     matcher: /[a-z]{1}/i, }
              { name: 'two_letters',    matcher: /[a-z]{2}/i, }
              { name: 'three_letters',  matcher: /[a-z]{3}/i, }
              { name: 'four_letters',   matcher: /[a-z]{4}/i, } ]
            first.new_token token_cfg for token_cfg in token_cfgs
            #...............................................................................................
            @eq ( Ωilxt_151 = -> g.cfg.strategy ), 'longest'
            @eq ( Ωilxt_152 = -> first.strategy ), 'longest'
            for [ source, matcher, ] in probes_and_matchers
              @eq ( Ωilxt_153 = -> condense_lexemes g.get_lexemes source ), matcher
            #...............................................................................................
            return null
        return null
      #.....................................................................................................
      do =>
        ### strategy 'first', scrambled tokens ###
        probes_and_matchers = [
          [ 'abcd1234',     "first.two_letters'ab'|first.two_letters'cd'|first.one_digit'1'|first.one_digit'2'|first.one_digit'3'|first.one_digit'4'", ]
          [ 'abcde12345',   "first.two_letters'ab'|first.two_letters'cd'|first.one_letter'e'|first.one_digit'1'|first.one_digit'2'|first.one_digit'3'|first.one_digit'4'|first.one_digit'5'", ]
          [ 'abcdef123456', "first.two_letters'ab'|first.two_letters'cd'|first.two_letters'ef'|first.one_digit'1'|first.one_digit'2'|first.one_digit'3'|first.one_digit'4'|first.one_digit'5'|first.one_digit'6'", ]
          [ '123abc',       "first.one_digit'1'|first.one_digit'2'|first.one_digit'3'|first.two_letters'ab'|first.one_letter'c'", ]
          ]
        #...................................................................................................
        g     = new Grammar { strategy: 'first', }
        first = g.new_level { name: 'first', }
        first.new_token { name: 'two_letters',    matcher: /[a-z]{2}/i, }
        first.new_token { name: 'one_digit',      matcher: /[0-9]{1}/i, }
        first.new_token { name: 'three_digits',   matcher: /[0-9]{3}/i, }
        first.new_token { name: 'four_digits',    matcher: /[0-9]{4}/i, }
        first.new_token { name: 'two_digits',     matcher: /[0-9]{2}/i, }
        first.new_token { name: 'one_letter',     matcher: /[a-z]{1}/i, }
        first.new_token { name: 'four_letters',   matcher: /[a-z]{4}/i, }
        first.new_token { name: 'three_letters',  matcher: /[a-z]{3}/i, }
        #...................................................................................................
        @eq ( Ωilxt_154 = -> g.cfg.strategy ), 'first'
        @eq ( Ωilxt_155 = -> first.strategy ), 'first'
        for [ source, matcher, ] in probes_and_matchers
          @eq ( Ωilxt_156 = -> condense_lexemes g.get_lexemes source ), matcher
        return null
      #.....................................................................................................
      do =>
        ### strategy 'first', long tokens first ###
        probes_and_matchers = [
          [ 'abcd1234',     "first.four_letters'abcd'|first.four_digits'1234'", ]
          [ 'abcde12345',   "first.four_letters'abcd'|first.one_letter'e'|first.four_digits'1234'|first.one_digit'5'", ]
          [ 'abcdef123456', "first.four_letters'abcd'|first.two_letters'ef'|first.four_digits'1234'|first.two_digits'56'", ]
          [ '123abc',       "first.three_digits'123'|first.three_letters'abc'", ]
          ]
        #...................................................................................................
        g     = new Grammar { strategy: 'first', }
        first = g.new_level { name: 'first', }
        first.new_token { name: 'four_letters',   matcher: /[a-z]{4}/i, }
        first.new_token { name: 'three_letters',  matcher: /[a-z]{3}/i, }
        first.new_token { name: 'two_letters',    matcher: /[a-z]{2}/i, }
        first.new_token { name: 'one_letter',     matcher: /[a-z]{1}/i, }
        first.new_token { name: 'four_digits',    matcher: /[0-9]{4}/i, }
        first.new_token { name: 'three_digits',   matcher: /[0-9]{3}/i, }
        first.new_token { name: 'two_digits',     matcher: /[0-9]{2}/i, }
        first.new_token { name: 'one_digit',      matcher: /[0-9]{1}/i, }
        #...................................................................................................
        @eq ( Ωilxt_157 = -> g.cfg.strategy ), 'first'
        @eq ( Ωilxt_158 = -> first.strategy ), 'first'
        for [ source, matcher, ] in probes_and_matchers
          @eq ( Ωilxt_159 = -> condense_lexemes g.get_lexemes source ), matcher
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    all_strategies_refuse_jumpless_empty_matches: ->
      { Grammar } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g = new Grammar { strategy: 'first', }
        gnd = g.new_level { name: 'gnd', }
        gnd.new_token { name: 'a', matcher: /a/, }
        gnd.new_token { name: 'b', matcher: /(?=b)/, }
        @throws ( Ωilxt_160 = -> g.get_lexemes "ab" ), /encountered zero-length match/
      #.....................................................................................................
      do =>
        g = new Grammar { strategy: 'longest', }
        gnd = g.new_level { name: 'gnd', }
        gnd.new_token { name: 'a', matcher: /a/, }
        gnd.new_token { name: 'b', matcher: /(?=b)/, }
        @throws ( Ωilxt_161 = -> g.get_lexemes "ab" ), /encountered zero-length match/
      #.....................................................................................................
      do =>
        ### We accept the empty match here since while it does get produced as an intermediate value to find
        the longest match, it does not get passed on as a resulting lexeme. ###
        g = new Grammar { strategy: 'longest', }
        gnd = g.new_level { name: 'gnd', }
        gnd.new_token { name: 'a', matcher: /[ab]/, }
        gnd.new_token { name: 'b', matcher: /(?=b)/, }
        @eq ( Ωilxt_162 = -> condense_lexemes g.get_lexemes "ab" ), "gnd.a'a'|gnd.a'b'"
      #.....................................................................................................
      return null


  #=========================================================================================================
  levels:

    #-------------------------------------------------------------------------------------------------------
    illegal_to_declare_jump_to_same_level: ->
      { Grammar } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g       = new Grammar()
        first   = g.new_level { name: 'first', }
        @throws ( Ωilxt_163 = -> first.new_token { name: 'digit', matcher: /[0-9]/, jump: 'first',  } ), /cannot jump to same level/
        @throws ( Ωilxt_164 = -> first.new_token { name: 'digit', matcher: /[0-9]/, jump: 'first!', } ), /cannot jump to same level/
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    parse_jumps: ->
      { Token } = require '../../../apps/interlex'
      #.....................................................................................................
      @eq     ( Ωilxt_165 = -> Token._parse_jump()                                   ), null
      @eq     ( Ωilxt_166 = -> Token._parse_jump '..'                                ), { jump_spec: '..',       carry: false, action: 'back', target: '..',      }
      @eq     ( Ωilxt_167 = -> Token._parse_jump 'mylevel'                           ), { jump_spec: 'mylevel',  carry: false, action: 'fore', target: 'mylevel', }
      @eq     ( Ωilxt_168 = -> Token._parse_jump '..!'                               ), { jump_spec: '..!',      carry: true,  action: 'back', target: '..',      }
      @eq     ( Ωilxt_169 = -> Token._parse_jump 'mylevel!'                          ), { jump_spec: 'mylevel!', carry: true,  action: 'fore', target: 'mylevel', }
      @eq     ( Ωilxt_170 = -> Token._parse_jump 'mylevel!', { name: 'otherlevel', } ), { jump_spec: 'mylevel!', carry: true,  action: 'fore', target: 'mylevel', }
      @throws ( Ωilxt_171 = -> Token._parse_jump '..]'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_172 = -> Token._parse_jump ']..'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_173 = -> Token._parse_jump '[mylevel'                          ), /encountered illegal jump spec/
      @throws ( Ωilxt_174 = -> Token._parse_jump 'mylevel['                          ), /encountered illegal jump spec/
      @throws ( Ωilxt_175 = -> Token._parse_jump 'mylevel[', { name: 'otherlevel', } ), /encountered illegal jump spec/
      @throws ( Ωilxt_176 = -> Token._parse_jump '[mylevel['                         ), /encountered illegal jump spec/
      @throws ( Ωilxt_177 = -> Token._parse_jump '[mylevel]'                         ), /encountered illegal jump spec/
      @throws ( Ωilxt_178 = -> Token._parse_jump ']mylevel'                          ), /encountered illegal jump spec/
      @throws ( Ωilxt_179 = -> Token._parse_jump '[..'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_180 = -> Token._parse_jump '[..]'                              ), /encountered illegal jump spec/
      @throws ( Ωilxt_181 = -> Token._parse_jump '..['                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_182 = -> Token._parse_jump '[...'                              ), /encountered illegal jump spec/
      @throws ( Ωilxt_183 = -> Token._parse_jump '...'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_184 = -> Token._parse_jump '%'                                 ), /encountered illegal jump spec/
      @throws ( Ωilxt_185 = -> Token._parse_jump 'my-name'                           ), /encountered illegal jump spec/
      @throws ( Ωilxt_186 = -> Token._parse_jump 'mylevel',  { name: 'mylevel', }    ), /cannot jump to same level/
      @throws ( Ωilxt_187 = -> Token._parse_jump 'mylevel!', { name: 'mylevel', }    ), /cannot jump to same level/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    can_set_lexeme_level: ->
      { Grammar
        Token
        Lexeme } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g       = new Grammar()
        #...................................................................................................
        first   = g.new_level { name: 'first', }
        first.new_token   { name: 'digit',      matcher: /[0-9]/,     jump: 'number',   }
        first.new_token   { name: 'other',      matcher: /[^0-9]+/,                     }
        #...................................................................................................
        number  = g.new_level { name: 'number', }
        number.new_token  { name: 'digits',     matcher: /[0-9]+/,                      }
        number.new_token  { name: 'other',      matcher: /[^0-9]/,    jump: '..',       }
        #...................................................................................................
        [ lexeme, ] = g.get_lexemes '5'
        @eq ( Ωilxt_188 = -> lexeme instanceof Lexeme       ), true
        @eq ( Ωilxt_189 = -> lexeme.token instanceof Token  ), true
        @eq ( Ωilxt_190 = -> lexeme.name                    ), 'digit'
        @eq ( Ωilxt_191 = -> lexeme.level.name              ), 'first'
        @eq ( Ωilxt_192 = -> lexeme.fqname                  ), 'first.digit'
        lexeme.set_level number
        @eq ( Ωilxt_193 = -> lexeme instanceof Lexeme       ), true
        @eq ( Ωilxt_194 = -> lexeme.token instanceof Token  ), true
        @eq ( Ωilxt_195 = -> lexeme.name                    ), 'digit'
        @eq ( Ωilxt_196 = -> lexeme.level.name              ), 'number'
        @eq ( Ωilxt_197 = -> lexeme.fqname                  ), 'number.digit'
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    carrying_and_sticking_jumps: ->
      { Grammar } = require '../../../apps/interlex'
      abbrlx      = ( lexeme ) -> { level: lexeme.level.name, fqname: lexeme.fqname, hit: lexeme.hit, }
      #.....................................................................................................
      do =>
        ### forejump carries, backjump sticks ###
        g = new Grammar()
        #...................................................................................................
        first     = g.new_level { name: 'first', }
        first.new_token     { name: 'other',      matcher: /[^"]+/,                             }
        first.new_token     { name: 'dq',         matcher: /"/,             jump: 'dqstring!',  }
        #...................................................................................................
        dqstring  = g.new_level { name: 'dqstring', }
        dqstring.new_token  { name: 'other',      matcher: /[^"]+/,                             }
        dqstring.new_token  { name: 'dq',         matcher: /"/,             jump: '..'          }
        #...................................................................................................
        @eq ( Ωilxt_198 = -> first.tokens[ 1 ].name     ), 'dq'
        @eq ( Ωilxt_199 = -> first.tokens[ 1 ].jump     ), { jump_spec: 'dqstring!', carry: true, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_200 = -> dqstring.tokens[ 1 ].name  ), 'dq'
        @eq ( Ωilxt_201 = -> dqstring.tokens[ 1 ].jump  ), { jump_spec: '..', carry: false, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.walk_lexemes 'Bob said "wow".'
        @eq ( Ωilxt_202 = -> abbrlx lexemes.next().value ), { level: 'first',    fqname: 'first.other',    hit: 'Bob said ' }
        @eq ( Ωilxt_203 = -> abbrlx lexemes.next().value ), { level: 'dqstring', fqname: 'dqstring.dq',    hit: '"' }
        @eq ( Ωilxt_204 = -> abbrlx lexemes.next().value ), { level: 'dqstring', fqname: 'dqstring.other', hit: 'wow' }
        @eq ( Ωilxt_205 = -> abbrlx lexemes.next().value ), { level: 'dqstring', fqname: 'dqstring.dq',    hit: '"' }
        @eq ( Ωilxt_206 = -> abbrlx lexemes.next().value ), { level: 'first',    fqname: 'first.other',    hit: '.' }
        @eq ( Ωilxt_207 = -> lexemes.next().done  ), true
        return null
      #.....................................................................................................
      do =>
        ### forejump sticks, backjump carries ###
        g = new Grammar()
        #...................................................................................................
        first     = g.new_level { name: 'first', }
        first.new_token     { name: 'other',      matcher: /[^"]+/,                             }
        first.new_token     { name: 'dq',         matcher: /"/,             jump: 'dqstring',   }
        #...................................................................................................
        dqstring  = g.new_level { name: 'dqstring', }
        dqstring.new_token  { name: 'other',      matcher: /[^"]+/,                             }
        dqstring.new_token  { name: 'dq',         matcher: /"/,             jump: '..!'         }
        #...................................................................................................
        @eq ( Ωilxt_208 = -> first.tokens[ 1 ].name     ), 'dq'
        @eq ( Ωilxt_209 = -> first.tokens[ 1 ].jump     ), { jump_spec: 'dqstring', carry: false, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_210 = -> dqstring.tokens[ 1 ].name  ), 'dq'
        @eq ( Ωilxt_211 = -> dqstring.tokens[ 1 ].jump  ), { jump_spec: '..!', carry: true, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.walk_lexemes 'Bob said "wow".'
        @eq ( Ωilxt_212 = -> abbrlx lexemes.next().value ), { level: 'first',    fqname: 'first.other',    hit: 'Bob said ', }
        @eq ( Ωilxt_213 = -> abbrlx lexemes.next().value ), { level: 'first',    fqname: 'first.dq',       hit: '"',         }
        @eq ( Ωilxt_214 = -> abbrlx lexemes.next().value ), { level: 'dqstring', fqname: 'dqstring.other', hit: 'wow',       }
        @eq ( Ωilxt_215 = -> abbrlx lexemes.next().value ), { level: 'first',    fqname: 'first.dq',       hit: '"',         }
        @eq ( Ωilxt_216 = -> abbrlx lexemes.next().value ), { level: 'first',    fqname: 'first.other',    hit: '.',         }
        @eq ( Ωilxt_217 = -> lexemes.next().done  ), true
        return null
      #.....................................................................................................
      do =>
        ### forejump carries, backjump carries ###
        g = new Grammar()
        #...................................................................................................
        first     = g.new_level { name: 'first', }
        first.new_token     { name: 'other',      matcher: /[^"]+/,                             }
        first.new_token     { name: 'dq',         matcher: /"/,             jump: 'dqstring!',  }
        #...................................................................................................
        dqstring  = g.new_level { name: 'dqstring', }
        dqstring.new_token  { name: 'other',      matcher: /[^"]+/,                             }
        dqstring.new_token  { name: 'dq',         matcher: /"/,             jump: '..!'         }
        #...................................................................................................
        @eq ( Ωilxt_218 = -> first.tokens[ 1 ].name     ), 'dq'
        @eq ( Ωilxt_219 = -> first.tokens[ 1 ].jump     ), { jump_spec: 'dqstring!', carry: true, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_220 = -> dqstring.tokens[ 1 ].name  ), 'dq'
        @eq ( Ωilxt_221 = -> dqstring.tokens[ 1 ].jump  ), { jump_spec: '..!', carry: true, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.walk_lexemes 'Bob said "wow".'
        @eq ( Ωilxt_222 = -> abbrlx lexemes.next().value ), { level: 'first',    fqname: 'first.other',    hit: 'Bob said ', }
        @eq ( Ωilxt_223 = -> abbrlx lexemes.next().value ), { level: 'dqstring', fqname: 'dqstring.dq',    hit: '"',         }
        @eq ( Ωilxt_224 = -> abbrlx lexemes.next().value ), { level: 'dqstring', fqname: 'dqstring.other', hit: 'wow',       }
        @eq ( Ωilxt_225 = -> abbrlx lexemes.next().value ), { level: 'first',    fqname: 'first.dq',       hit: '"',         }
        @eq ( Ωilxt_226 = -> abbrlx lexemes.next().value ), { level: 'first',    fqname: 'first.other',    hit: '.',         }
        @eq ( Ωilxt_227 = -> lexemes.next().done  ), true
        return null
      #.....................................................................................................
      do =>
        ### forejump sticks, backjump sticks ###
        g = new Grammar()
        #...................................................................................................
        first     = g.new_level { name: 'first', }
        first.new_token     { name: 'other',      matcher: /[^"]+/,                             }
        first.new_token     { name: 'dq',         matcher: /"/,             jump: 'dqstring',   }
        #...................................................................................................
        dqstring  = g.new_level { name: 'dqstring', }
        dqstring.new_token  { name: 'other',      matcher: /[^"]+/,                             }
        dqstring.new_token  { name: 'dq',         matcher: /"/,             jump: '..'          }
        #...................................................................................................
        @eq ( Ωilxt_228 = -> first.tokens[ 1 ].name     ), 'dq'
        @eq ( Ωilxt_229 = -> first.tokens[ 1 ].jump     ), { jump_spec: 'dqstring', carry: false, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_230 = -> dqstring.tokens[ 1 ].name  ), 'dq'
        @eq ( Ωilxt_231 = -> dqstring.tokens[ 1 ].jump  ), { jump_spec: '..', carry: false, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.walk_lexemes 'Bob said "wow".'
        @eq ( Ωilxt_232 = -> abbrlx lexemes.next().value ), { level: 'first',    fqname: 'first.other',    hit: 'Bob said ', }
        @eq ( Ωilxt_233 = -> abbrlx lexemes.next().value ), { level: 'first',    fqname: 'first.dq',       hit: '"',         }
        @eq ( Ωilxt_234 = -> abbrlx lexemes.next().value ), { level: 'dqstring', fqname: 'dqstring.other', hit: 'wow',       }
        @eq ( Ωilxt_235 = -> abbrlx lexemes.next().value ), { level: 'dqstring', fqname: 'dqstring.dq',    hit: '"',         }
        @eq ( Ωilxt_236 = -> abbrlx lexemes.next().value ), { level: 'first',    fqname: 'first.other',    hit: '.',         }
        @eq ( Ωilxt_237 = -> lexemes.next().done  ), true
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    can_use_zero_length_matchers_with_jumps: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #-----------------------------------------------------------------------------------------------------
      probes_and_matchers = [
        [ "Alice has 431 owls", { length: 8, condensed: "gnd.letters'Alice'|gnd.ws' '|gnd.letters'has'|gnd.ws' '|gnd.before_digits''|number.digits'431'|gnd.ws' '|gnd.letters'owls'", }, ]
        [ "99kg",               { length: 3, condensed: "gnd.before_digits''|number.digits'99'|gnd.letters'kg'", }, ]
        ]
      #-----------------------------------------------------------------------------------------------------
      test = ( g ) =>
        for [ probe, matcher, ] from probes_and_matchers
          g.reset_count()
          lexemes = g.get_lexemes probe
          @eq ( Ωilxt_238 = -> condense_lexemes lexemes ), matcher.condensed
          @eq ( Ωilxt_239 = -> lexemes.length ), matcher.length
          g.reset_count()
          @eq ( Ωilxt_240 = -> [ ( g.walk_lexemes probe )..., ] ), lexemes
        return null
      #-----------------------------------------------------------------------------------------------------
      do =>
        g         = new Grammar { name: 'g', }
        gnd       = g.new_level { name: 'gnd', }
        number    = g.new_level { name: 'number', }
        #...................................................................................................
        gnd.new_token     { name: 'letters',          matcher: /[a-z]+/i,                      }
        gnd.new_token     { name: 'before_digits',    matcher: /(?=[0-9])/i,  jump: 'number',  }
        gnd.new_token     { name: 'ws',               matcher: /\s+/i,                         }
        #...................................................................................................
        number.new_token  { name: 'digits',           matcher: /[0-9]+/i,     jump: '..',      }
        #...................................................................................................
        test g
        source = probes_and_matchers[ 0 ][ 0 ]
        for lexeme from g.walk_lexemes source
          urge 'Ωilxt_241', f"#{lexeme.fqname}:_<25c; #{rpr lexeme.hit}:<20c;"
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
      # debug 'Ωilxt_242', [ string11, string12, ]
      # console.debug 'Ωilxt_243', [ string11, string12, ]
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
      string11.new_token  { name: 'string11_stop',  matcher: rx"(?!<\\)'",                jump: '..!', }
      string11.new_token  { name: 'text',           matcher: rx"[^']*",                   }
      #.........................................................................................................
      debug 'Ωilxt_244', g
      debug 'Ωilxt_245', g.levels
      debug 'Ωilxt_246', g.levels.gnd
      debug 'Ωilxt_247', g.levels.gnd.tokens
      debug 'Ωilxt_248', gnd
      debug 'Ωilxt_249', token for token from gnd
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
        urge 'Ωilxt_250', f"#{start}:>3.0f;:#{stop}:<3.0f; #{fqname}:<20c; #{rpr hit}:<30c; #{jump_rpr}:<15c; #{groups_rpr}"
      #.........................................................................................................
      sources = [
        "Alice in Cairo 1912 (approximately)"
        "Alice in Cairo 1912 'approximately'"
        ]
      #.........................................................................................................
      for source from sources
        info 'Ωilxt_251', rpr source
        for lexeme from g.walk_lexemes source
          show_lexeme lexeme
      #.........................................................................................................
      return null


#===========================================================================================================
if module is require.main then await do =>
  ( new Test { throw_on_error: false, } ).test @interlex_tasks
  # ( new Test { throw_on_error: true, } ).test @interlex_tasks
  ( new Test { throw_on_error: true, } ).test { can_use_zero_length_matchers_with_jumps: @interlex_tasks.levels.can_use_zero_length_matchers_with_jumps, }
  # ( new Test { throw_on_error: true, } ).test { demo: @interlex_tasks.demo.demo, }
  do =>
  f = ->
    help 'Ωilxt_252', Array.from 'a🈯z'
    help 'Ωilxt_253', 'a🈯z'.split /(.)/u
    help 'Ωilxt_254', 'a🈯z'.split( /(.)/v )
    help 'Ωilxt_255', 'a🈯z'.split( /(.)/d )
    help 'Ωilxt_256', match = 'a🈯z'.match /^(?<head>[a-z]+)(?<other>[^a-z]+)(?<tail>[a-z]+)/d
    help 'Ωilxt_257', { match.groups..., }
    help 'Ωilxt_258', { match.indices.groups..., }
    # help 'Ωilxt_259', rx"."
    # help 'Ωilxt_260', rx/./


