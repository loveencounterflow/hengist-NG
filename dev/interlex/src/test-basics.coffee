
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
{ condense_lexemes
  abbrlxm
  tabulate_lexemes
  tabulate_lexeme       } = require './helpers'
{ type_of               } = require '../../../apps/cleartype'


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
      number_tk         = gnd.new_token { name: 'number', fit: number_tk_matcher, }
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
      @eq ( Ωilxt__80 = -> number_tk.fit                                              ), /[0-9]+/dvy
      @eq ( Ωilxt__81 = -> number_tk.fit.hasIndices                                   ), true
      @eq ( Ωilxt__82 = -> number_tk.fit.sticky                                       ), true
      @eq ( Ωilxt__83 = -> number_tk.fit.unicodeSets                                  ), true
      @eq ( Ωilxt__84 = -> number_tk.jump                                                 ), null
      #.....................................................................................................
      @eq ( Ωilxt__85 = -> ( number_lx = number_tk.match_at 0, '398ä' )?                  ), true
      @eq ( Ωilxt__86 = -> number_lx instanceof Lexeme                                    ), true
      @eq ( Ωilxt__87 = -> number_lx.name                                                 ), 'number'
      @eq ( Ωilxt__88 = -> number_lx.fqname                                               ), 'gnd.number'
      @eq ( Ωilxt__89 = -> number_lx.level                                                ), gnd
      @eq ( Ωilxt__90 = -> number_lx.hit                                                  ), '398'
      @eq ( Ωilxt__91 = -> number_lx.start                                                ), 0
      @eq ( Ωilxt__92 = -> number_lx.stop                                                 ), 3
      #.....................................................................................................
      @eq ( Ωilxt__93 = -> ( number_lx = number_tk.match_at 7, 'abcdefgh00102xyz' )?      ), false
      @eq ( Ωilxt__94 = -> ( number_lx = number_tk.match_at 8, 'abcdefgh00102xyz' )?      ), true
      @eq ( Ωilxt__95 = -> number_lx instanceof Lexeme                                    ), true
      @eq ( Ωilxt__96 = -> number_lx.name                                                 ), 'number'
      @eq ( Ωilxt__97 = -> number_lx.fqname                                               ), 'gnd.number'
      @eq ( Ωilxt__98 = -> number_lx.level                                                ), gnd
      @eq ( Ωilxt__99 = -> number_lx.hit                                                  ), '00102'
      @eq ( Ωilxt_100 = -> number_lx.start                                                ), 8
      @eq ( Ωilxt_101 = -> number_lx.stop                                                 ), 13
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    new_regex_tag: ->
      { rx
        regex
        internals
        new_regex_tag } = require '../../../apps/interlex'
      #.....................................................................................................
      @eq ( Ωilxt_102 = -> typeof   new_regex_tag 'dy'                                  ), 'function'
      @eq ( Ωilxt_103 = -> typeof ( new_regex_tag 'dy'    ).si                          ), 'function'
      @eq ( Ωilxt_104 = -> ( (      new_regex_tag 'dyis'  )"[a-z]" ) instanceof RegExp  ), true
      #.....................................................................................................
      @eq ( Ωilxt_105 = -> ( new_regex_tag 'dyis'  )"[a-z]"     ), /[a-z]/disvy
      @eq ( Ωilxt_106 = -> ( new_regex_tag 'dy'    ).si"[a-z]"  ), /[a-z]/disvy
      @eq ( Ωilxt_107 = -> ( new_regex_tag 'dys'   ).si"[a-z]"  ), /[a-z]/disvy
      @eq ( Ωilxt_108 = -> ( new_regex_tag 'dys'   ).i"[a-z]"   ), /[a-z]/disvy
      @eq ( Ωilxt_109 = -> ( new_regex_tag 'dysi'  )"[a-z]"     ), /[a-z]/disvy
      @eq ( Ωilxt_110 = -> ( new_regex_tag 'v'     ).si"[a-z]"  ), /[a-z]/disvy
      #.....................................................................................................
      @throws ( Ωilxt_111 = -> ( new_regex_tag 'dy'    ).ab"[a-z]"  ), /illegal or duplicate flags/
      @throws ( Ωilxt_112 = -> ( new_regex_tag 'dyab'  )"[a-z]"     ), /illegal or duplicate flags/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    normalize_regex: ->
      { internals       } = require '../../../apps/interlex'
      { normalize_regex } = internals
      @eq ( Ωilxt_113 = -> typeof normalize_regex     ), 'function'
      @eq ( Ωilxt_114 = -> normalize_regex /[a-z]/ig  ), /[a-z]/dgivy
      @eq ( Ωilxt_115 = -> normalize_regex /[a-z]/i   ), /[a-z]/divy
      @eq ( Ωilxt_116 = -> normalize_regex /[a-z]/u   ), /[a-z]/dvy
      @eq ( Ωilxt_117 = -> normalize_regex /[a-z]/gv  ), /[a-z]/dgvy
      @eq ( Ωilxt_118 = -> normalize_regex /[a-z]/gu  ), /[a-z]/dgvy
      @eq ( Ωilxt_119 = -> normalize_regex /[a-z]/v   ), /[a-z]/dvy
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    rx_flags: ->
      { rx } = require '../../../apps/interlex'
      @eq ( Ωilxt_120 = -> ( rx"x"        ).flags ), 'dvy'
      @eq ( Ωilxt_121 = -> ( rx.si"x"     ).flags ), 'disvy'
      # @eq ( Ωilxt_122 = -> ( rx.sidvy"x"  ).flags ), 'disvy'
      @eq ( Ωilxt_123 = -> ( rx.y"x"      ).flags ), 'dvy'
      @eq ( Ωilxt_124 = -> rpr rx"[abc]+" ), '/[abc]+/dvy'
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
        gnd.new_token       { name: 'name',           fit: rx"(?<initial>[A-Z])[a-z]*", }
        gnd.new_token       { name: 'number',         fit: rx"[0-9]+",                  }
        gnd.new_token       { name: 'ws',             fit: rx"\s+",                     }
        gnd.new_token       { name: 'text',           fit: rx"[^a-zA-Z0-9\s]+",         }
        #.....................................................................................................
        return g
      #.....................................................................................................
      do =>
        g = new_grammar { emit_signals: false, }
        @eq ( Ωilxt_125 = -> g.state.lnr ), 1
        probes_and_matchers = [
          [ "1st line",           1, ]
          [ "2nd line",           2, ]
          [ "3rd line",           3, ]
          [ "4th line (and EOF)", 4, ] ]
        #...................................................................................................
        for [ probe, fit, ] from probes_and_matchers
          info 'Ωilxt_126', rpr probe
          lexemes = g.scan_to_list probe
          # urge 'Ωilxt_127', lexemes
          @eq ( Ωilxt_128 = -> lexemes[ 0 ].lnr ), fit
        return null
      #.....................................................................................................
      do =>
        g = new_grammar { emit_signals: false, }
        @eq ( Ωilxt_129 = -> g.state.lnr ), 1
        g.reset_lnr 10
        @eq ( Ωilxt_130 = -> g.state.lnr ), 10
        probes_and_matchers = [
          [ "1st line",           10, ]
          [ "2nd line",           11, ]
          [ "3rd line",           12, ]
          [ "4th line (and EOF)", 13, ] ]
        #...................................................................................................
        for [ probe, fit, ] from probes_and_matchers
          info 'Ωilxt_131', rpr probe
          lexeme = ( g.scan_to_list probe )[ 0 ]
          @eq ( Ωilxt_132 = -> lexeme.lnr ), fit
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
        for [ probe, fit, ] from probes_and_matchers
          g.reset_lnr()
          lexemes = g.scan_to_list probe
          @eq ( Ωilxt_133 = -> condense_lexemes lexemes ), fit.condensed
          @eq ( Ωilxt_134 = -> lexemes.length ), fit.length
          g.reset_lnr()
          @eq ( Ωilxt_135 = -> [ ( g.scan probe )..., ] ), lexemes
        return null
      #-----------------------------------------------------------------------------------------------------
      do =>
        g         = new Grammar { name: 'g', emit_signals: false, }
        gnd       = g.new_level { name: 'gnd', }
        #...................................................................................................
        gnd.new_token       { name: 'name',           fit: rx"(?<initial>[A-Z])[a-z]+",           }
        gnd.new_token       { name: 'ordinal',        fit: rx"(?<ordinal>[0-9]+)(st|nd|rd|th)",   }
        gnd.new_token       { name: 'number',         fit: rx"[0-9]+",                            }
        gnd.new_token       { name: 'ws',             fit: rx"\s+",                               }
        gnd.new_token       { name: 'word',           fit: rx.i"[a-z]+",                          }
        gnd.new_token       { name: 'other',          fit: rx.i"[^a-z0-9\s]+",                    }
        #...................................................................................................
        test g
      #-----------------------------------------------------------------------------------------------------
      do =>
        g         = new Grammar { name: 'g', emit_signals: false, }
        gnd       = g.new_level { name: 'gnd', }
        #...................................................................................................
        gnd.new_token       { name: 'name',           fit: /(?<initial>[A-Z])[a-z]+/dvy,            }
        gnd.new_token       { name: 'ordinal',        fit: /(?<ordinal>[0-9]+)(?:st|nd|rd|th)/dvy,  }
        gnd.new_token       { name: 'number',         fit: /[0-9]+/dvy,                             }
        gnd.new_token       { name: 'ws',             fit: /\s+/dvy,                                }
        gnd.new_token       { name: 'word',           fit: /[a-z]+/divy,                            }
        gnd.new_token       { name: 'other',          fit: /[^a-z0-9\s]+/divy,                      }
        #...................................................................................................
        test g
      #-----------------------------------------------------------------------------------------------------
      do =>
        g         = new Grammar { name: 'g', emit_signals: false, }
        gnd       = g.new_level { name: 'gnd', }
        #...................................................................................................
        gnd.new_token       { name: 'name',           fit: /(?<initial>[A-Z])[a-z]+/,               }
        gnd.new_token       { name: 'ordinal',        fit: /(?<ordinal>[0-9]+)(?:st|nd|rd|th)/,     }
        gnd.new_token       { name: 'number',         fit: /[0-9]+/,                                }
        gnd.new_token       { name: 'ws',             fit: /\s+/,                                   }
        gnd.new_token       { name: 'word',           fit: /[a-z]+/i,                               }
        gnd.new_token       { name: 'other',          fit: /[^a-z0-9\s]+/i,                         }
        #...................................................................................................
        test g
      #-----------------------------------------------------------------------------------------------------
      do =>
        g         = new Grammar { name: 'g', emit_signals: false, }
        gnd       = g.new_level { name: 'gnd', }
        #...................................................................................................
        gnd.new_token       { name: 'name',           fit: /(?<initial>[A-Z])[a-z]+/v,              }
        gnd.new_token       { name: 'ordinal',        fit: /(?<ordinal>[0-9]+)(?:st|nd|rd|th)/u,    }
        gnd.new_token       { name: 'number',         fit: /[0-9]+/,                                }
        gnd.new_token       { name: 'ws',             fit: /\s+/,                                   }
        gnd.new_token       { name: 'word',           fit: /[a-z]+/i,                               }
        gnd.new_token       { name: 'other',          fit: /[^a-z0-9\s]+/i,                         }
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
        first.new_token { name: 'one_digit',      fit: /[0-9]{1}/i, }
        first.new_token { name: 'two_digits',     fit: /[0-9]{2}/i, }
        first.new_token { name: 'three_digits',   fit: /[0-9]{3}/i, }
        first.new_token { name: 'four_digits',    fit: /[0-9]{4}/i, }
        first.new_token { name: 'one_letter',     fit: /[a-z]{1}/i, }
        first.new_token { name: 'two_letters',    fit: /[a-z]{2}/i, }
        first.new_token { name: 'three_letters',  fit: /[a-z]{3}/i, }
        first.new_token { name: 'four_letters',   fit: /[a-z]{4}/i, }
        #.....................................................................................................
        for [ [ position, source, ], fit, ] in probes_and_matchers
          @eq ( Ωilxt_136 = -> condense_lexemes first.match_first_at position, source ), fit
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
        first.new_token { name: 'four_digits',    fit: /[0-9]{4}/i, }
        first.new_token { name: 'three_digits',   fit: /[0-9]{3}/i, }
        first.new_token { name: 'two_digits',     fit: /[0-9]{2}/i, }
        first.new_token { name: 'one_digit',      fit: /[0-9]{1}/i, }
        first.new_token { name: 'four_letters',   fit: /[a-z]{4}/i, }
        first.new_token { name: 'three_letters',  fit: /[a-z]{3}/i, }
        first.new_token { name: 'two_letters',    fit: /[a-z]{2}/i, }
        first.new_token { name: 'one_letter',     fit: /[a-z]{1}/i, }
        #.....................................................................................................
        for [ [ position, source, ], fit, ] in probes_and_matchers
          @eq ( Ωilxt_137 = -> condense_lexemes first.match_first_at position, source ), fit
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
        first.new_token { name: 'one_digit',      fit: /[0-9]{1}/i, }
        first.new_token { name: 'two_digits',     fit: /[0-9]{2}/i, }
        first.new_token { name: 'three_digits',   fit: /[0-9]{3}/i, }
        first.new_token { name: 'four_digits',    fit: /[0-9]{4}/i, }
        first.new_token { name: 'one_letter',     fit: /[a-z]{1}/i, }
        first.new_token { name: 'two_letters',    fit: /[a-z]{2}/i, }
        first.new_token { name: 'three_letters',  fit: /[a-z]{3}/i, }
        first.new_token { name: 'four_letters',   fit: /[a-z]{4}/i, }
        #.....................................................................................................
        for [ [ position, source, ], fit, ] in probes_and_matchers
          @eq ( Ωilxt_138 = -> condense_lexemes first.match_longest_at position, source ), fit
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
        first.new_token { name: 'four_digits',    fit: /[0-9]{4}/i, }
        first.new_token { name: 'three_digits',   fit: /[0-9]{3}/i, }
        first.new_token { name: 'two_digits',     fit: /[0-9]{2}/i, }
        first.new_token { name: 'one_digit',      fit: /[0-9]{1}/i, }
        first.new_token { name: 'four_letters',   fit: /[a-z]{4}/i, }
        first.new_token { name: 'three_letters',  fit: /[a-z]{3}/i, }
        first.new_token { name: 'two_letters',    fit: /[a-z]{2}/i, }
        first.new_token { name: 'one_letter',     fit: /[a-z]{1}/i, }
        #.....................................................................................................
        for [ [ position, source, ], fit, ] in probes_and_matchers
          @eq ( Ωilxt_139 = -> condense_lexemes first.match_longest_at position, source ), fit
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
              { name: 'one_digit',      fit: /[0-9]{1}/i, }
              { name: 'two_digits',     fit: /[0-9]{2}/i, }
              { name: 'three_digits',   fit: /[0-9]{3}/i, }
              { name: 'four_digits',    fit: /[0-9]{4}/i, }
              { name: 'one_letter',     fit: /[a-z]{1}/i, }
              { name: 'two_letters',    fit: /[a-z]{2}/i, }
              { name: 'three_letters',  fit: /[a-z]{3}/i, }
              { name: 'four_letters',   fit: /[a-z]{4}/i, } ]
            first.new_token token_cfg for token_cfg in token_cfgs
            #...............................................................................................
            for [ [ position, source, ], fit, ] in probes_and_matchers
              @eq ( Ωilxt_140 = -> condense_lexemes first.match_longest_at position, source ), fit
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
            g           = new Grammar { strategy: 'longest', emit_signals: false, }
            first       = g.new_level { name: 'first', }
            token_cfgs  = shuffle [
              { name: 'one_digit',      fit: /[0-9]{1}/i, }
              { name: 'two_digits',     fit: /[0-9]{2}/i, }
              { name: 'three_digits',   fit: /[0-9]{3}/i, }
              { name: 'four_digits',    fit: /[0-9]{4}/i, }
              { name: 'one_letter',     fit: /[a-z]{1}/i, }
              { name: 'two_letters',    fit: /[a-z]{2}/i, }
              { name: 'three_letters',  fit: /[a-z]{3}/i, }
              { name: 'four_letters',   fit: /[a-z]{4}/i, } ]
            first.new_token token_cfg for token_cfg in token_cfgs
            #...............................................................................................
            @eq ( Ωilxt_141 = -> g.cfg.strategy ), 'longest'
            @eq ( Ωilxt_142 = -> first.strategy ), 'longest'
            for [ source, fit, ] in probes_and_matchers
              @eq ( Ωilxt_143 = -> condense_lexemes g.scan_to_list source ), fit
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
        g     = new Grammar { strategy: 'first', emit_signals: false, }
        first = g.new_level { name: 'first', }
        first.new_token { name: 'two_letters',    fit: /[a-z]{2}/i, }
        first.new_token { name: 'one_digit',      fit: /[0-9]{1}/i, }
        first.new_token { name: 'three_digits',   fit: /[0-9]{3}/i, }
        first.new_token { name: 'four_digits',    fit: /[0-9]{4}/i, }
        first.new_token { name: 'two_digits',     fit: /[0-9]{2}/i, }
        first.new_token { name: 'one_letter',     fit: /[a-z]{1}/i, }
        first.new_token { name: 'four_letters',   fit: /[a-z]{4}/i, }
        first.new_token { name: 'three_letters',  fit: /[a-z]{3}/i, }
        #...................................................................................................
        @eq ( Ωilxt_144 = -> g.cfg.strategy ), 'first'
        @eq ( Ωilxt_145 = -> first.strategy ), 'first'
        for [ source, fit, ] in probes_and_matchers
          @eq ( Ωilxt_146 = -> condense_lexemes g.scan_to_list source ), fit
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
        g     = new Grammar { strategy: 'first', emit_signals: false, }
        first = g.new_level { name: 'first', }
        first.new_token { name: 'four_letters',   fit: /[a-z]{4}/i, }
        first.new_token { name: 'three_letters',  fit: /[a-z]{3}/i, }
        first.new_token { name: 'two_letters',    fit: /[a-z]{2}/i, }
        first.new_token { name: 'one_letter',     fit: /[a-z]{1}/i, }
        first.new_token { name: 'four_digits',    fit: /[0-9]{4}/i, }
        first.new_token { name: 'three_digits',   fit: /[0-9]{3}/i, }
        first.new_token { name: 'two_digits',     fit: /[0-9]{2}/i, }
        first.new_token { name: 'one_digit',      fit: /[0-9]{1}/i, }
        #...................................................................................................
        @eq ( Ωilxt_147 = -> g.cfg.strategy ), 'first'
        @eq ( Ωilxt_148 = -> first.strategy ), 'first'
        for [ source, fit, ] in probes_and_matchers
          @eq ( Ωilxt_149 = -> condense_lexemes g.scan_to_list source ), fit
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    all_strategies_refuse_jumpless_empty_matches: ->
      { Grammar } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g = new Grammar { strategy: 'first', emit_signals: false, }
        gnd = g.new_level { name: 'gnd', }
        gnd.new_token { name: 'a', fit: /a/, }
        gnd.new_token { name: 'b', fit: /(?=b)/, }
        @throws ( Ωilxt_150 = -> g.scan_to_list "ab" ), /encountered zero-length match/
      #.....................................................................................................
      do =>
        g = new Grammar { strategy: 'longest', emit_signals: false, }
        gnd = g.new_level { name: 'gnd', }
        gnd.new_token { name: 'a', fit: /a/, }
        gnd.new_token { name: 'b', fit: /(?=b)/, }
        @throws ( Ωilxt_151 = -> g.scan_to_list "ab" ), /encountered zero-length match/
      #.....................................................................................................
      do =>
        ### We accept the empty match here since while it does get produced as an intermediate value to find
        the longest match, it does not get passed on as a resulting lexeme. ###
        g = new Grammar { strategy: 'longest', emit_signals: false, }
        gnd = g.new_level { name: 'gnd', }
        gnd.new_token { name: 'a', fit: /[ab]/, }
        gnd.new_token { name: 'b', fit: /(?=b)/, }
        @eq ( Ωilxt_152 = -> condense_lexemes g.scan_to_list "ab" ), "gnd.a'a'|gnd.a'b'"
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
        @throws ( Ωilxt_153 = -> first.new_token { name: 'digit', fit: /[0-9]/, jump: 'first',  } ), /cannot jump to same level/
        @throws ( Ωilxt_154 = -> first.new_token { name: 'digit', fit: /[0-9]/, jump: 'first!', } ), /cannot jump to same level/
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    parse_jumps: ->
      { Token } = require '../../../apps/interlex'
      #.....................................................................................................
      @eq     ( Ωilxt_155 = -> Token._parse_jump()                                   ), null
      @eq     ( Ωilxt_156 = -> Token._parse_jump '..'                                ), { spec: '..',       carry: false, action: 'back', target: '..',      }
      @eq     ( Ωilxt_157 = -> Token._parse_jump 'mylevel'                           ), { spec: 'mylevel',  carry: false, action: 'fore', target: 'mylevel', }
      @eq     ( Ωilxt_158 = -> Token._parse_jump '..!'                               ), { spec: '..!',      carry: true,  action: 'back', target: '..',      }
      @eq     ( Ωilxt_159 = -> Token._parse_jump 'mylevel!'                          ), { spec: 'mylevel!', carry: true,  action: 'fore', target: 'mylevel', }
      @eq     ( Ωilxt_160 = -> Token._parse_jump 'mylevel!', { name: 'otherlevel', } ), { spec: 'mylevel!', carry: true,  action: 'fore', target: 'mylevel', }
      @throws ( Ωilxt_161 = -> Token._parse_jump '..]'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_162 = -> Token._parse_jump ']..'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_163 = -> Token._parse_jump '[mylevel'                          ), /encountered illegal jump spec/
      @throws ( Ωilxt_164 = -> Token._parse_jump 'mylevel['                          ), /encountered illegal jump spec/
      @throws ( Ωilxt_165 = -> Token._parse_jump 'mylevel[', { name: 'otherlevel', } ), /encountered illegal jump spec/
      @throws ( Ωilxt_166 = -> Token._parse_jump '[mylevel['                         ), /encountered illegal jump spec/
      @throws ( Ωilxt_167 = -> Token._parse_jump '[mylevel]'                         ), /encountered illegal jump spec/
      @throws ( Ωilxt_168 = -> Token._parse_jump ']mylevel'                          ), /encountered illegal jump spec/
      @throws ( Ωilxt_169 = -> Token._parse_jump '[..'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_170 = -> Token._parse_jump '[..]'                              ), /encountered illegal jump spec/
      @throws ( Ωilxt_171 = -> Token._parse_jump '..['                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_172 = -> Token._parse_jump '[...'                              ), /encountered illegal jump spec/
      @throws ( Ωilxt_173 = -> Token._parse_jump '...'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_174 = -> Token._parse_jump '%'                                 ), /encountered illegal jump spec/
      @throws ( Ωilxt_175 = -> Token._parse_jump 'my-name'                           ), /encountered illegal jump spec/
      @throws ( Ωilxt_176 = -> Token._parse_jump 'mylevel',  { name: 'mylevel', }    ), /cannot jump to same level/
      @throws ( Ωilxt_177 = -> Token._parse_jump 'mylevel!', { name: 'mylevel', }    ), /cannot jump to same level/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    can_set_lexeme_level: ->
      { Grammar
        Token
        Lexeme } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g       = new Grammar { emit_signals: false, }
        #...................................................................................................
        first   = g.new_level { name: 'first', }
        first.new_token   { name: 'digit',      fit: /[0-9]/,     jump: 'number',   }
        first.new_token   { name: 'other',      fit: /[^0-9]+/,                     }
        #...................................................................................................
        number  = g.new_level { name: 'number', }
        number.new_token  { name: 'digits',     fit: /[0-9]+/,                      }
        number.new_token  { name: 'other',      fit: /[^0-9]/,    jump: '..',       }
        #...................................................................................................
        [ lexeme, ] = g.scan_to_list '5'
        @eq ( Ωilxt_178 = -> lexeme instanceof Lexeme       ), true
        @eq ( Ωilxt_179 = -> lexeme.token instanceof Token  ), true
        @eq ( Ωilxt_180 = -> lexeme.name                    ), 'digit'
        @eq ( Ωilxt_181 = -> lexeme.level.name              ), 'first'
        @eq ( Ωilxt_182 = -> lexeme.fqname                  ), 'first.digit'
        lexeme.set_level number
        @eq ( Ωilxt_183 = -> lexeme instanceof Lexeme       ), true
        @eq ( Ωilxt_184 = -> lexeme.token instanceof Token  ), true
        @eq ( Ωilxt_185 = -> lexeme.name                    ), 'digit'
        @eq ( Ωilxt_186 = -> lexeme.level.name              ), 'number'
        @eq ( Ωilxt_187 = -> lexeme.fqname                  ), 'number.digit'
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    carrying_and_sticking_jumps: ->
      { Grammar } = require '../../../apps/interlex'
      g_cfg = { emit_signals: false, }
      #.....................................................................................................
      do =>
        ### forejump carries, backjump sticks ###
        g = new Grammar g_cfg
        #...................................................................................................
        first     = g.new_level { name: 'first', }
        first.new_token     { name: 'other',      fit: /[^"]+/,                             }
        first.new_token     { name: 'dq',         fit: /"/,             jump: 'dqstring!',  }
        #...................................................................................................
        dqstring  = g.new_level { name: 'dqstring', }
        dqstring.new_token  { name: 'other',      fit: /[^"]+/,                             }
        dqstring.new_token  { name: 'dq',         fit: /"/,             jump: '..'          }
        #...................................................................................................
        @eq ( Ωilxt_188 = -> first.tokens[ 1 ].name     ), 'dq'
        @eq ( Ωilxt_189 = -> first.tokens[ 1 ].jump     ), { spec: 'dqstring!', carry: true, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_190 = -> dqstring.tokens[ 1 ].name  ), 'dq'
        @eq ( Ωilxt_191 = -> dqstring.tokens[ 1 ].jump  ), { spec: '..', carry: false, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.scan 'Bob said "wow".'
        @eq ( Ωilxt_192 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: 'Bob said ',  pos: '1:0:9',   }
        @eq ( Ωilxt_193 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.dq',    hit: '"',          pos: '1:9:10',  }
        @eq ( Ωilxt_194 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.other', hit: 'wow',        pos: '1:10:13', }
        @eq ( Ωilxt_195 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.dq',    hit: '"',          pos: '1:13:14', }
        @eq ( Ωilxt_196 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: '.',          pos: '1:14:15', }
        @eq ( Ωilxt_197 = -> lexemes.next().done  ), true
        return null
      #.....................................................................................................
      do =>
        ### forejump sticks, backjump carries ###
        g = new Grammar g_cfg
        #...................................................................................................
        first     = g.new_level { name: 'first', }
        first.new_token     { name: 'other',      fit: /[^"]+/,                             }
        first.new_token     { name: 'dq',         fit: /"/,             jump: 'dqstring',   }
        #...................................................................................................
        dqstring  = g.new_level { name: 'dqstring', }
        dqstring.new_token  { name: 'other',      fit: /[^"]+/,                             }
        dqstring.new_token  { name: 'dq',         fit: /"/,             jump: '..!'         }
        #...................................................................................................
        @eq ( Ωilxt_198 = -> first.tokens[ 1 ].name     ), 'dq'
        @eq ( Ωilxt_199 = -> first.tokens[ 1 ].jump     ), { spec: 'dqstring', carry: false, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_200 = -> dqstring.tokens[ 1 ].name  ), 'dq'
        @eq ( Ωilxt_201 = -> dqstring.tokens[ 1 ].jump  ), { spec: '..!', carry: true, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.scan 'Bob said "wow".'
        @eq ( Ωilxt_202 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: 'Bob said ', pos: '1:0:9',   }
        @eq ( Ωilxt_203 = -> abbrlxm lexemes.next().value ), { fqname: 'first.dq',       hit: '"',         pos: '1:9:10',  }
        @eq ( Ωilxt_204 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.other', hit: 'wow',       pos: '1:10:13', }
        @eq ( Ωilxt_205 = -> abbrlxm lexemes.next().value ), { fqname: 'first.dq',       hit: '"',         pos: '1:13:14', }
        @eq ( Ωilxt_206 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: '.',         pos: '1:14:15', }
        @eq ( Ωilxt_207 = -> lexemes.next().done  ), true
        return null
      #.....................................................................................................
      do =>
        ### forejump carries, backjump carries ###
        g = new Grammar g_cfg
        #...................................................................................................
        first     = g.new_level { name: 'first', }
        first.new_token     { name: 'other',      fit: /[^"]+/,                             }
        first.new_token     { name: 'dq',         fit: /"/,             jump: 'dqstring!',  }
        #...................................................................................................
        dqstring  = g.new_level { name: 'dqstring', }
        dqstring.new_token  { name: 'other',      fit: /[^"]+/,                             }
        dqstring.new_token  { name: 'dq',         fit: /"/,             jump: '..!'         }
        #...................................................................................................
        @eq ( Ωilxt_208 = -> first.tokens[ 1 ].name     ), 'dq'
        @eq ( Ωilxt_209 = -> first.tokens[ 1 ].jump     ), { spec: 'dqstring!', carry: true, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_210 = -> dqstring.tokens[ 1 ].name  ), 'dq'
        @eq ( Ωilxt_211 = -> dqstring.tokens[ 1 ].jump  ), { spec: '..!', carry: true, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.scan 'Bob said "wow".'
        @eq ( Ωilxt_212 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: 'Bob said ', pos: '1:0:9',   }
        @eq ( Ωilxt_213 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.dq',    hit: '"',         pos: '1:9:10',  }
        @eq ( Ωilxt_214 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.other', hit: 'wow',       pos: '1:10:13', }
        @eq ( Ωilxt_215 = -> abbrlxm lexemes.next().value ), { fqname: 'first.dq',       hit: '"',         pos: '1:13:14', }
        @eq ( Ωilxt_216 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: '.',         pos: '1:14:15', }
        @eq ( Ωilxt_217 = -> lexemes.next().done  ), true
        return null
      #.....................................................................................................
      do =>
        ### forejump sticks, backjump sticks ###
        g = new Grammar g_cfg
        #...................................................................................................
        first     = g.new_level { name: 'first', }
        first.new_token     { name: 'other',      fit: /[^"]+/,                             }
        first.new_token     { name: 'dq',         fit: /"/,             jump: 'dqstring',   }
        #...................................................................................................
        dqstring  = g.new_level { name: 'dqstring', }
        dqstring.new_token  { name: 'other',      fit: /[^"]+/,                             }
        dqstring.new_token  { name: 'dq',         fit: /"/,             jump: '..'          }
        #...................................................................................................
        @eq ( Ωilxt_218 = -> first.tokens[ 1 ].name     ), 'dq'
        @eq ( Ωilxt_219 = -> first.tokens[ 1 ].jump     ), { spec: 'dqstring', carry: false, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_220 = -> dqstring.tokens[ 1 ].name  ), 'dq'
        @eq ( Ωilxt_221 = -> dqstring.tokens[ 1 ].jump  ), { spec: '..', carry: false, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.scan 'Bob said "wow".'
        @eq ( Ωilxt_222 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: 'Bob said ', pos: '1:0:9',   }
        @eq ( Ωilxt_223 = -> abbrlxm lexemes.next().value ), { fqname: 'first.dq',       hit: '"',         pos: '1:9:10',  }
        @eq ( Ωilxt_224 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.other', hit: 'wow',       pos: '1:10:13', }
        @eq ( Ωilxt_225 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.dq',    hit: '"',         pos: '1:13:14', }
        @eq ( Ωilxt_226 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: '.',         pos: '1:14:15', }
        @eq ( Ωilxt_227 = -> lexemes.next().done  ), true
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
        for [ probe, fit, ] from probes_and_matchers
          g.reset_lnr()
          lexemes = g.scan_to_list probe
          @eq ( Ωilxt_228 = -> condense_lexemes lexemes ), fit.condensed
          @eq ( Ωilxt_229 = -> lexemes.length ), fit.length
          g.reset_lnr()
          @eq ( Ωilxt_230 = -> [ ( g.scan probe )..., ] ), lexemes
        return null
      #-----------------------------------------------------------------------------------------------------
      do =>
        g         = new Grammar { name: 'g', emit_signals: false, }
        gnd       = g.new_level { name: 'gnd', }
        number    = g.new_level { name: 'number', }
        #...................................................................................................
        gnd.new_token     { name: 'letters',          fit: /[a-z]+/i,                      }
        gnd.new_token     { name: 'before_digits',    fit: /(?=[0-9])/i,  jump: 'number',  }
        gnd.new_token     { name: 'ws',               fit: /\s+/i,                         }
        #...................................................................................................
        number.new_token  { name: 'digits',           fit: /[0-9]+/i,     jump: '..',      }
        #...................................................................................................
        test g
        source = probes_and_matchers[ 0 ][ 0 ]
        info 'Ωilxt_231', source; g.reset_lnr 1; tabulate_lexemes g.scan source
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    can_use_zero_length_matchers_with_jumps_2: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #-----------------------------------------------------------------------------------------------------
      do =>
        g         = new Grammar { name: 'g', emit_signals: false, }
        gnd       = g.new_level { name: 'gnd', }
        number    = g.new_level { name: 'number', }
        #...................................................................................................
        gnd.new_token     { name: 'letters',          fit:  /[a-zA-Z]+/,                      }
        gnd.new_token     { name: 'before_digits',    fit:  /(?=[0-9])/,  jump: 'number',  }
        gnd.new_token     { name: 'ws',               fit:  /\s+/,                         }
        #...................................................................................................
        number.new_token  { name: 'integer',          fit:  /[0-9]+/,           }
        number.new_token  { name: 'unit',             fit:  /[a-zA-Z]+/,     jump: '..',      }
        #...................................................................................................
        source = "99kg23mm"
        info 'Ωilxt_232', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_233 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.before_digits', hit: '',   pos: '1:0:0', }
        @eq ( Ωilxt_234 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',    hit: '99', pos: '1:0:2', }
        @eq ( Ωilxt_235 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',       hit: 'kg', pos: '1:2:4', }
        @eq ( Ωilxt_236 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.before_digits', hit: '',   pos: '1:4:4', }
        @eq ( Ωilxt_237 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',    hit: '23', pos: '1:4:6', }
        @eq ( Ωilxt_238 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',       hit: 'mm', pos: '1:6:8', }
        @eq ( Ωilxt_239 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
      #.....................................................................................................
      return null

  #=========================================================================================================
  stack: ->
    Levelstack = ( require '../../../apps/interlex' ).internals.Levelstack
    do =>
      stack = new Levelstack()
      @eq     ( Ωilxt_240 = -> stack.is_empty                   ), true
      stack.push { name: '1', }
      @eq     ( Ωilxt_241 = -> stack.length                     ), 1
      @eq     ( Ωilxt_242 = -> stack.peek()                     ), { name: '1', }
      @eq     ( Ωilxt_243 = -> stack.pop()                      ), { name: '1', }
      @eq     ( Ωilxt_244 = -> stack.length                     ), 0
    do =>
      stack = new Levelstack { name: '1', }
      @eq     ( Ωilxt_245 = -> stack.length                     ), 1
      @eq     ( Ωilxt_246 = -> stack.peek()                     ), { name: '1', }
      @eq     ( Ωilxt_247 = -> stack.pop()                      ), { name: '1', }
      @eq     ( Ωilxt_248 = -> stack.length                     ), 0
    do =>
      stack = new Levelstack { name: '1', }, { name: '2', }
      @eq     ( Ωilxt_249 = -> stack.length                     ), 2
      @eq     ( Ωilxt_250 = -> stack.peek()                     ), { name: '2', }
      @eq     ( Ωilxt_251 = -> stack.popnpeek()                 ), { name: '1', }
      @eq     ( Ωilxt_252 = -> stack.length                     ), 1
      @eq     ( Ωilxt_253 = -> stack.peek()                     ), { name: '1', }
      @eq     ( Ωilxt_254 = -> stack.pop()                      ), { name: '1', }
      @eq     ( Ωilxt_255 = -> stack.length                     ), 0
    do =>
      stack = new Levelstack { name: '1', }, { name: '2', }
      @eq     ( Ωilxt_256 = -> stack.length                     ), 2
      @eq     ( Ωilxt_257 = -> stack.peek_name()                ), '2'
      @eq     ( Ωilxt_258 = -> stack.popnpeek_name()            ), '1'
      @eq     ( Ωilxt_259 = -> stack.length                     ), 1
      @eq     ( Ωilxt_260 = -> stack.is_empty                   ), false
      @eq     ( Ωilxt_261 = -> stack.peek_name()                ), '1'
      @eq     ( Ωilxt_262 = -> stack.pop_name()                 ), '1'
      @eq     ( Ωilxt_263 = -> stack.length                     ), 0
      @eq     ( Ωilxt_264 = -> stack.is_empty                   ), true
    do =>
      stack = new Levelstack { name: '1', }, { name: '2', }
      @eq     ( Ωilxt_265 = -> stack.pop()                      ), { name: '2', }
      @eq     ( Ωilxt_266 = -> stack.is_empty                   ), false
      @eq     ( Ωilxt_267 = -> stack.pop()                      ), { name: '1', }
      @eq     ( Ωilxt_268 = -> stack.is_empty                   ), true
      @throws ( Ωilxt_269 = -> stack.pop()                      ), /stack is empty/
      @throws ( Ωilxt_270 = -> stack.popnpeek()                 ), /stack is empty/
      @throws ( Ωilxt_271 = -> stack.pop_name()                 ), /stack is empty/
      @throws ( Ωilxt_272 = -> stack.popnpeek_name()            ), /stack is empty/
      @eq     ( Ωilxt_273 = -> stack.pop            'fallback'  ), 'fallback'
      @eq     ( Ωilxt_274 = -> stack.popnpeek       'fallback'  ), 'fallback'
      @eq     ( Ωilxt_275 = -> stack.pop_name       'fallback'  ), 'fallback'
      @eq     ( Ωilxt_276 = -> stack.popnpeek_name  'fallback'  ), 'fallback'
    return null

  #=========================================================================================================
  lexeme_merging:

    #-------------------------------------------------------------------------------------------------------
    no_merging: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #=====================================================================================================
      g         = new Grammar { name: 'g', emit_signals: false, }
      text      = g.new_level { name: 'text', }
      number    = g.new_level { name: 'number', }
      #.....................................................................................................
      text.new_token    { name: 'text',         fit: /// \\ \p{Decimal_Number} | \p{Letter} ///v,                 }
      text.new_token    { name: 'ws',           fit: /// \p{White_Space}                    ///v,                 }
      text.new_token    { name: 'number_start', fit: /// (?= (?!< \\ ) \p{Decimal_Number} ) ///v, jump: 'number', }
      number.new_token  { name: 'digit',        fit: /// \p{Decimal_Number} | \. | e        ///v,                 }
      number.new_token  { name: 'number_stop',  fit: /// (?= \P{Decimal_Number} )           ///v, jump: '..',     }
      #.....................................................................................................
      do =>
        source = "R\\2D\\2 has 3556.3 Petabytes"
        # g.reset_lnr 1; echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_277', source; tabulate_lexemes g.scan source
        info 'Ωilxt_278', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_279 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'R', pos: '1:0:1' }
        @eq ( Ωilxt_280 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: '\\2', pos: '1:1:3' }
        @eq ( Ωilxt_281 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'D', pos: '1:3:4' }
        @eq ( Ωilxt_282 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: '\\2', pos: '1:4:6' }
        @eq ( Ωilxt_283 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.ws',            hit: ' ', pos: '1:6:7' }
        @eq ( Ωilxt_284 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'h', pos: '1:7:8' }
        @eq ( Ωilxt_285 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'a', pos: '1:8:9' }
        @eq ( Ωilxt_286 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 's', pos: '1:9:10' }
        @eq ( Ωilxt_287 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.ws',            hit: ' ', pos: '1:10:11' }
        @eq ( Ωilxt_288 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.number_start',  hit: '', pos: '1:11:11' }
        @eq ( Ωilxt_289 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.digit',       hit: '3', pos: '1:11:12' }
        @eq ( Ωilxt_290 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.digit',       hit: '5', pos: '1:12:13' }
        @eq ( Ωilxt_291 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.digit',       hit: '5', pos: '1:13:14' }
        @eq ( Ωilxt_292 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.digit',       hit: '6', pos: '1:14:15' }
        @eq ( Ωilxt_293 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.digit',       hit: '.', pos: '1:15:16' }
        @eq ( Ωilxt_294 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.digit',       hit: '3', pos: '1:16:17' }
        @eq ( Ωilxt_295 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.number_stop', hit: '', pos: '1:17:17' }
        @eq ( Ωilxt_296 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.ws',            hit: ' ', pos: '1:17:18' }
        @eq ( Ωilxt_297 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'P', pos: '1:18:19' }
        @eq ( Ωilxt_298 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'e', pos: '1:19:20' }
        @eq ( Ωilxt_299 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 't', pos: '1:20:21' }
        @eq ( Ωilxt_300 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'a', pos: '1:21:22' }
        @eq ( Ωilxt_301 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'b', pos: '1:22:23' }
        @eq ( Ωilxt_302 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'y', pos: '1:23:24' }
        @eq ( Ωilxt_303 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 't', pos: '1:24:25' }
        @eq ( Ωilxt_304 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'e', pos: '1:25:26' }
        @eq ( Ωilxt_305 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 's', pos: '1:26:27' }
        @eq ( Ωilxt_306 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null

    #-------------------------------------------------------------------------------------------------------
    token_merging: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #=====================================================================================================
      g         = new Grammar { name: 'g', emit_signals: false, }
      text      = g.new_level { name: 'text', }
      number    = g.new_level { name: 'number', }
      #.....................................................................................................
      text.new_token    { name: 'text',         fit: /// \\ \p{Decimal_Number} | \p{Letter} ///v, merge: true,    }
      text.new_token    { name: 'ws',           fit: /// \p{White_Space}                    ///v, merge: true,    }
      text.new_token    { name: 'number_start', fit: /// (?= (?!< \\ ) \p{Decimal_Number} ) ///v, jump: 'number', }
      number.new_token  { name: 'digit',        fit: /// \p{Decimal_Number} | \. | e        ///v, merge: true,    }
      number.new_token  { name: 'number_stop',  fit: /// (?= \P{Decimal_Number} )           ///v, jump: '..',     }
      #.....................................................................................................
      do =>
        source = "R\\2D\\2 has 3556.3 Petabytes"
        # g.reset_lnr 1; echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_307', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        info 'Ωilxt_308', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_309 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'R\\2D\\2',  pos: '1:0:6' }
        @eq ( Ωilxt_310 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.ws',            hit: ' ',         pos: '1:6:7' }
        @eq ( Ωilxt_311 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'has',       pos: '1:7:10' }
        @eq ( Ωilxt_312 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.ws',            hit: ' ',         pos: '1:10:11' }
        @eq ( Ωilxt_313 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.number_start',  hit: '',          pos: '1:11:11' }
        @eq ( Ωilxt_314 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.digit',       hit: '3556.3',    pos: '1:11:17' }
        @eq ( Ωilxt_315 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.number_stop', hit: '',          pos: '1:17:17' }
        @eq ( Ωilxt_316 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.ws',            hit: ' ',         pos: '1:17:18' }
        @eq ( Ωilxt_317 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'Petabytes', pos: '1:18:27' }
        @eq ( Ωilxt_318 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      return null

    #-------------------------------------------------------------------------------------------------------
    token_merging_with_default: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #=====================================================================================================
      g         = new Grammar { name: 'g', emit_signals: false, }
      text      = g.new_level { name: 'text', }
      #.....................................................................................................
      text.new_token { name: 'name', fit: /// (?<initial> \p{Uppercase_Letter} ) \p{Lowercase_Letter}+ ///v, merge: true,    }
      #.....................................................................................................
      do =>
        source = "ArcBoCyDeen"
        # g.reset_lnr 1; echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_319', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        info 'Ωilxt_320', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_321 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.name', hit: 'ArcBoCyDeen', pos: '1:0:11', data: { initial: [ 'A', 'B', 'C', 'D' ] }, }
        @eq ( Ωilxt_322 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      return null

    #-------------------------------------------------------------------------------------------------------
    token_merging_with_assign: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #=====================================================================================================
      g         = new Grammar { name: 'g', emit_signals: false, }
      text      = g.new_level { name: 'text', }
      #.....................................................................................................
      text.new_token { name: 'name', fit: /// (?<initial> \p{Uppercase_Letter} ) \p{Lowercase_Letter}+ ///v, merge: 'assign',    }
      #.....................................................................................................
      do =>
        source = "ArcBoCyDeen"
        # g.reset_lnr 1; echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_323', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        info 'Ωilxt_324', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_325 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.name', hit: 'ArcBoCyDeen', pos: '1:0:11', data: { initial: 'D' }, }
        @eq ( Ωilxt_326 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      return null

    #-------------------------------------------------------------------------------------------------------
    token_merging_with_default_and_single_match: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #=====================================================================================================
      g         = new Grammar { name: 'g', emit_signals: false, }
      text      = g.new_level { name: 'text', }
      #.....................................................................................................
      text.new_token { name: 'name', fit: /// (?<initial> \p{Uppercase_Letter} ) \p{Lowercase_Letter}+ ///v, merge: true,    }
      #.....................................................................................................
      do =>
        source = "Arc"
        # g.reset_lnr 1; echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_327', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        info 'Ωilxt_328', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_329 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.name', hit: 'Arc', pos: '1:0:3', data: { initial: [ 'A', ] }, }
        @eq ( Ωilxt_330 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      return null

    #-------------------------------------------------------------------------------------------------------
    token_merging_with_merge_function: ->
      { Grammar
        internals
        rx      } = require '../../../apps/interlex'
      #=====================================================================================================
      g         = new Grammar { name: 'g', emit_signals: false, }
      text      = g.new_level { name: 'text', }
      #.....................................................................................................
      merge     = ({ merged, lexemes, }) ->
        merged.assign { initial: ( lxm.data.initial for lxm in lexemes ), }
        return null
      text.new_token { name: 'name', fit: /// (?<initial> \p{Uppercase_Letter} ) \p{Lowercase_Letter}+ ///v, merge, }
      #.....................................................................................................
      do =>
        source = "ArcBoCyDeen"
        # g.reset_lnr 1; echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_331', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        info 'Ωilxt_332', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_333 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.name', hit: 'ArcBoCyDeen', pos: '1:0:11', data: { initial: [ 'A', 'B', 'C', 'D', ], } }
        @eq ( Ωilxt_334 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      return null

    #-------------------------------------------------------------------------------------------------------
    token_merging_with_merge_list: ->
      { Grammar
        internals
        rx      } = require '../../../apps/interlex'
      #=====================================================================================================
      g         = new Grammar { name: 'g', emit_signals: false, }
      text      = g.new_level { name: 'text', }
      #.....................................................................................................
      fit = /// (?<parts> (?<initials> \p{Uppercase_Letter} ) \p{Lowercase_Letter}+ ) ///v
      text.new_token { name: 'name', fit, merge: 'list', }
      #.....................................................................................................
      do =>
        source = "ArcBoCyDeen"
        # g.reset_lnr 1; echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_335', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        info 'Ωilxt_336', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_337 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.name', hit: 'ArcBoCyDeen', pos: '1:0:11', data: { parts: [ 'Arc', 'Bo', 'Cy', 'Deen' ], initials: [ 'A', 'B', 'C', 'D' ] } }
        @eq ( Ωilxt_338 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      return null

  #=========================================================================================================
  data_capture:

    #-------------------------------------------------------------------------------------------------------
    data_property: ->
      { Grammar } = require '../../../apps/interlex'
      g     = new Grammar()
      gnd   = g.new_level { name: 'gnd', }
      name  = gnd.new_token { name: 'name', fit: ///
        (?<initial> \p{Uppercase_Letter} ) (?<tail> \p{Lowercase_Letter}* ) ///, }
      lexeme = g.scan_first 'Brobdignac'
      @eq ( Ωilxt_339 = -> lexeme.groups              ), undefined
      @eq ( Ωilxt_340 = -> lexeme.data?               ), true
      @eq ( Ωilxt_341 = -> lexeme.has_data            ), true
      @eq ( Ωilxt_342 = -> lexeme.data.constructor    ), undefined
      @eq ( Ωilxt_343 = -> lexeme.data.initial        ), 'B'
      @eq ( Ωilxt_344 = -> lexeme.data.tail           ), 'robdignac'
      return null

    #-------------------------------------------------------------------------------------------------------
    reset_data: ->
      { Grammar } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g       = new Grammar()
        g_data  = g.data
        @eq ( Ωilxt_345 = -> type_of g.reset_data   ), 'function'
        @eq ( Ωilxt_346 = -> type_of g.assign       ), 'function'
        @eq ( Ωilxt_347 = -> g.data                 ), {}
        @eq ( Ωilxt_348 = -> g.data is g_data       ), true
        g.assign { key: 'value', }
        @eq ( Ωilxt_349 = -> g.data                 ), { key: 'value', }
        @eq ( Ωilxt_350 = -> g.data is g_data       ), true
        return null
      #.....................................................................................................
      do =>
        g       = new Grammar()
        g_data  = g.data
        g.assign { key: 'value', }
        g.reset_data false
        @eq ( Ωilxt_351 = -> g.data                 ), { key: 'value', }
        @eq ( Ωilxt_352 = -> g.data is g_data       ), true
        return null
      #.....................................................................................................
      do =>
        g       = new Grammar()
        g_data  = g.data
        g.assign { key: 'value', }
        g.reset_data true
        @eq ( Ωilxt_353 = -> g.data                 ), {}
        @eq ( Ωilxt_354 = -> g.data is g_data       ), true
        return null
      #.....................................................................................................
      do =>
        g       = new Grammar()
        g_data  = g.data
        g.assign { key: 'value', }
        g.reset_data null
        @eq ( Ωilxt_355 = -> g.data                 ), {}
        @eq ( Ωilxt_356 = -> g.data is g_data       ), true
        return null
      #.....................................................................................................
      do =>
        g       = new Grammar()
        g_data  = g.data
        g.assign { key: 'value', }
        g.reset_data { super_cool: true, }
        @eq ( Ωilxt_357 = -> g.data                 ), { super_cool: true, }
        @eq ( Ωilxt_358 = -> g.data is g_data       ), true
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    data_templating: ->
      { Grammar } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        template  = { one: 1, list: [], set: new Set(), }
        g         = new Grammar { data: template, }
        @eq ( Ωilxt_359 = -> g.data                           ), template
        @eq ( Ωilxt_360 = -> g.data       is template         ), false
        @eq ( Ωilxt_361 = -> g.data.list  is template.list    ), true
        @eq ( Ωilxt_362 = -> g.data.set   is template.set     ), true
        return null
      #.....................................................................................................
      do =>
        template  = { one: 1, list: ( -> [] ), set: ( -> new Set() ), }
        matcher   = { one: 1, list: [], set: new Set(), }
        g         = new Grammar { data: template, }
        ### guy_test doesn't currently recognize nested maps, sets so we're doing it the long way ###
        # @eq ( Ωilxt_363 = -> g.data                           ), matcher
        @eq ( Ωilxt_364 = -> g.data       is template         ), false
        @eq ( Ωilxt_365 = -> g.data.list  is template.list    ), false
        @eq ( Ωilxt_366 = -> g.data.set   is template.set     ), false
        @eq ( Ωilxt_367 = -> type_of g.data.list              ), 'list'
        @eq ( Ωilxt_368 = -> type_of g.data.set               ), 'set'
        return null
      #.....................................................................................................
      do =>
        template  = { count: 1, list: ( -> [] ), }
        matcher   = { count: 1, list: (    [] ), }
        g         = new Grammar { data: template, }
        ### guy_test doesn't currently recognize nested maps, sets so we're doing it the long way ###
        # @eq ( Ωilxt_369 = -> g.data                           ), matcher
        @eq ( Ωilxt_370 = -> g.data.count                         ), matcher.count
        @eq ( Ωilxt_371 = -> g.data.list                          ), matcher.list
        @eq ( Ωilxt_372 = -> g.cfg.data.count is template.count   ), true
        @eq ( Ωilxt_373 = -> g.cfg.data.list  is template.list    ), true
        g.data.count++
        g.data.list.push 'value'
        @eq ( Ωilxt_374 = -> g.data.count                         ), 2
        @eq ( Ωilxt_375 = -> g.data.list                          ), [ 'value', ]
        g.reset_data()
        @eq ( Ωilxt_376 = -> g.data.count                         ), matcher.count
        @eq ( Ωilxt_377 = -> g.data.list                          ), matcher.list
        return null
      #.....................................................................................................
      do =>
        template  = { count: 1, }
        g         = new Grammar { data: template, }
        ### guy_test doesn't currently recognize nested maps, sets so we're doing it the long way ###
        # @eq ( Ωilxt_378 = -> g.data                           ), matcher
        @eq (                                             Ωilxt_379 = -> g.data.count ), 1
        g.data.count++;                             @eq ( Ωilxt_380 = -> g.data.count ), 2
        g.reset_data();                             @eq ( Ωilxt_381 = -> g.data.count ), 1
        g.data.count++; g.reset_data false;         @eq ( Ωilxt_382 = -> g.data.count ), 2
        g.data.count++; g.reset_data true;          @eq ( Ωilxt_383 = -> g.data.count ), 1
        g.data.count++; g.reset_data null;          @eq ( Ωilxt_384 = -> g.data.count ), 1
        g.data.count++; g.reset_data { count: 3, }; @eq ( Ωilxt_385 = -> g.data.count ), 3
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    reset_on_scan: ->
      { Grammar } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        template  = { count: 1, }
        g         = new Grammar { data: template, reset_on_scan: false, }
        gnd       = g.new_level { name: 'gnd', }
        text      = gnd.new_token { name: 'text', fit: /.+/, }
        lexeme = g.scan_first 'helo'
        @eq ( Ωilxt_387 = -> lexeme.lnr   ), 1
        @eq ( Ωilxt_388 = -> g.data.count ), 1
        @eq ( Ωilxt_389 = -> g.state.lnr  ), 2
        g.data.count++
        @eq ( Ωilxt_390 = -> g.data.count ), 2
        lexeme = g.scan_first 'how'
        @eq ( Ωilxt_393 = -> lexeme.lnr   ), 2
        @eq ( Ωilxt_394 = -> g.state.lnr  ), 3
        @eq ( Ωilxt_395 = -> g.data.count ), 2
    #   #.....................................................................................................
    #   do =>
    #     template  = { count: 1, }
    #     g         = new Grammar { data: template, reset_on_scan: true, }
    #     gnd       = g.new_level { name: 'gnd', }
    #     text      = gnd.new_token { name: 'text', fit: /.+/, }
    #     @eq ( Ωilxt_396 = -> g.data.count ), 1
    #     g.data.count++
    #     @eq ( Ωilxt_397 = -> g.data.count ), 2
    #     debug 'Ωilxt_398', lexeme = g.scan_first 'helo'
    #     @eq ( Ωilxt_399 = -> g.data.count ), 1
    #     @eq ( Ωilxt_400 = -> g.state.lnr  ), 1
    #     g.data.count++
    #     @eq ( Ωilxt_401 = -> g.data.count ), 2
    #     debug 'Ωilxt_402', lexeme = g.scan_first 'how'
    #     @eq ( Ωilxt_403 = -> g.state.lnr  ), 1
    #     @eq ( Ωilxt_404 = -> g.data.count ), 1
      #.....................................................................................................
      return null

    # #-------------------------------------------------------------------------------------------------------
    # reset: ->
    #   { Grammar } = require '../../../apps/interlex'
    #   #.....................................................................................................
    #   do =>
    #     template  = { one: 1, list: [], set: new Set(), }
    #     g         = new Grammar { data: template, }
    #     @eq ( Ωilxt_405 = -> g.data                           ), template
    #   #.....................................................................................................
    #   return null

    data_casting: ->
    data_absorption: ->


  # * **`[—]`** `Grammar::reset: ({ lnr: 1, data: null, }) ->`
  # * **`[+]`** `reset_lnr: ( lnr = 1 ) ->`
  # * **`[—]`** `reset_data: ( data = null ) ->`
  # * **`[—]`** `grammar_cfg = { reset_on_scan: { lnr: 1, data: null }, }` (also `true`, `false`)
  # * **`[—]`** `grammar_cfg = { absorb_data: false, }` (also `true`)


  #=========================================================================================================
  signals:

    #-------------------------------------------------------------------------------------------------------
    cfg_settings: ->
      { Grammar } = require '../../../apps/interlex'
      @eq ( Ωilxt_406 = -> ( new Grammar { emit_signals: false,         } ).cfg.emit_signals ), false
      @eq ( Ωilxt_407 = -> ( new Grammar { emit_signals: true,          } ).cfg.emit_signals ), true
      @eq ( Ωilxt_408 = -> ( new Grammar {}                               ).cfg.emit_signals ), true
      @eq ( Ωilxt_409 = -> ( new Grammar()                                ).cfg.emit_signals ), true
      @eq ( Ωilxt_410 = -> ( new Grammar { emit_signals: false,         } ).cfg.merge_jumps  ), false
      @eq ( Ωilxt_411 = -> ( new Grammar { emit_signals: true,          } ).cfg.merge_jumps  ), true
      @eq ( Ωilxt_412 = -> ( new Grammar {}                               ).cfg.merge_jumps  ), true
      @eq ( Ωilxt_413 = -> ( new Grammar()                                ).cfg.merge_jumps  ), true
      return null

    #-------------------------------------------------------------------------------------------------------
    lexeme_props: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, loop_errors: 'emit', }
        @eq ( Ωilxt_414 = -> g.cfg.merge_jumps ), true
        level_one = g.new_level { name: 'level_one',  }
        level_two = g.new_level { name: 'level_two',  }
        #...................................................................................................
        level_one.new_token { name: 'to_level_two', fit:  /(?=)/, jump: 'level_two', }
        level_two.new_token { name: 'to_level_one', fit:  /|/,    jump: 'level_one', }
        #...................................................................................................
        extract_props = ( lexeme ) ->
          return null unless lexeme?
          return {
            fqname:     lexeme.fqname
            is_system:  lexeme.is_system
            is_error:   lexeme.is_error
            is_signal:  lexeme.is_signal
            is_user:    lexeme.is_user    }
        #...................................................................................................
        source = "doesn't matter"
        # info 'Ωilxt_415', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_416', source; g.reset_lnr 1; echo extract_props lexeme for lexeme from g.scan source
        info 'Ωilxt_417', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_418 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',          is_system: true,  is_error: false, is_signal: true,  is_user: false, }
        @eq ( Ωilxt_419 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           is_system: true,  is_error: false, is_signal: true,  is_user: false, }
        @eq ( Ωilxt_420 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: 'level_one.to_level_two', is_system: false, is_error: false, is_signal: false, is_user: true, }
        @eq ( Ωilxt_421 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           is_system: true,  is_error: false, is_signal: true,  is_user: false, }
        @eq ( Ωilxt_422 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: 'level_two.to_level_one', is_system: false, is_error: false, is_signal: false, is_user: true, }
        @eq ( Ωilxt_423 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           is_system: true,  is_error: false, is_signal: true,  is_user: false, }
        @eq ( Ωilxt_424 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: '$error.loop',            is_system: true,  is_error: true,  is_signal: false, is_user: false, }
        @eq ( Ωilxt_425 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           is_system: true,  is_error: false, is_signal: true,  is_user: false, }
        @eq ( Ωilxt_426 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: '$error.earlystop',       is_system: true,  is_error: true,  is_signal: false, is_user: false, }
        @eq ( Ωilxt_427 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',           is_system: true,  is_error: false, is_signal: true,  is_user: false, }
        @eq ( Ωilxt_428 = -> extract_props tabulate_lexeme lexemes.next().value ), null
        return null
        #...................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    detailed_jump_signals: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #-----------------------------------------------------------------------------------------------------
      ### fore jump sticky, back jump sticky ###
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, merge_jumps: false, }
        @eq ( Ωilxt_429 = -> g.cfg.merge_jumps ), false
        gnd       = g.new_level { name: 'gnd',      }
        number    = g.new_level { name: 'number',   }
        #...................................................................................................
        gnd.new_token     { name: 'letters',          fit:  /[a-zA-Z]+/,                      }
        gnd.new_token     { name: 'before_digits',    fit:  /(?=[0-9])/,  jump: 'number',     }
        gnd.new_token     { name: 'ws',               fit:  /\s+/,                            }
        #...................................................................................................
        number.new_token  { name: 'integer',          fit:  /[0-9]+/,                         }
        number.new_token  { name: 'unit',             fit:  /[a-zA-Z]+/,     jump: '..',      }
        #...................................................................................................
        source = "99kg23mm"
        # info 'Ωilxt_430', source; tabulate_lexemes g.scan source
        info 'Ωilxt_431', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_432 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',     hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_433 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',      hit: '',   pos: '1:0:0', data: { target: 'gnd' }, }
        @eq ( Ωilxt_434 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.before_digits', hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_435 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',      hit: '',   pos: '1:0:0', data: { target: 'number' }, }
        @eq ( Ωilxt_436 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',    hit: '99', pos: '1:0:2' }
        @eq ( Ωilxt_437 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',       hit: 'kg', pos: '1:2:4' }
        @eq ( Ωilxt_438 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',      hit: '',   pos: '1:4:4', data: { target: 'gnd' }, }
        @eq ( Ωilxt_439 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.before_digits', hit: '',   pos: '1:4:4' }
        @eq ( Ωilxt_440 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',      hit: '',   pos: '1:4:4', data: { target: 'number' }, }
        @eq ( Ωilxt_441 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',    hit: '23', pos: '1:4:6' }
        @eq ( Ωilxt_442 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',       hit: 'mm', pos: '1:6:8' }
        @eq ( Ωilxt_443 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',      hit: '',   pos: '1:8:8', data: { target: 'gnd' }, }
        @eq ( Ωilxt_444 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',      hit: '',   pos: '1:8:8', data: { target: null }, }
        @eq ( Ωilxt_445 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',      hit: '',   pos: '1:8:8' }
        @eq ( Ωilxt_446 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      ### fore jump carry, back jump sticky ###
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, merge_jumps: false, }
        @eq ( Ωilxt_447 = -> g.cfg.merge_jumps ), false
        gnd       = g.new_level { name: 'gnd',      }
        number    = g.new_level { name: 'number',   }
        #...................................................................................................
        gnd.new_token     { name: 'letters',          fit:  /[a-zA-Z]+/,                      }
        gnd.new_token     { name: 'before_digits',    fit:  /(?=[0-9])/,  jump: 'number!',    }
        gnd.new_token     { name: 'ws',               fit:  /\s+/,                            }
        #...................................................................................................
        number.new_token  { name: 'integer',          fit:  /[0-9]+/,                         }
        number.new_token  { name: 'unit',             fit:  /[a-zA-Z]+/,     jump: '..',      }
        #...................................................................................................
        source = "99kg23mm"
        # info 'Ωilxt_448', source; tabulate_lexemes g.scan source
        info 'Ωilxt_449', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_450 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',        hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_451 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:0:0', data: { target: 'gnd' }, }
        @eq ( Ωilxt_452 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:0:0', data: { target: 'number' }, }
        @eq ( Ωilxt_453 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.before_digits', hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_454 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '99', pos: '1:0:2' }
        @eq ( Ωilxt_455 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',          hit: 'kg', pos: '1:2:4' }
        @eq ( Ωilxt_456 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:4:4', data: { target: 'gnd' }, }
        @eq ( Ωilxt_457 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:4:4', data: { target: 'number' }, }
        @eq ( Ωilxt_458 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.before_digits', hit: '',   pos: '1:4:4' }
        @eq ( Ωilxt_459 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '23', pos: '1:4:6' }
        @eq ( Ωilxt_460 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',          hit: 'mm', pos: '1:6:8' }
        @eq ( Ωilxt_461 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:8:8', data: { target: 'gnd' }, }
        @eq ( Ωilxt_462 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:8:8', data: { target: null }, }
        @eq ( Ωilxt_463 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',         hit: '',   pos: '1:8:8' }
        @eq ( Ωilxt_464 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      ### fore jump carry, back jump carry ###
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, merge_jumps: false, }
        @eq ( Ωilxt_465 = -> g.cfg.merge_jumps ), false
        gnd       = g.new_level { name: 'gnd',      }
        number    = g.new_level { name: 'number',   }
        #...................................................................................................
        gnd.new_token     { name: 'letters',          fit:  /[a-zA-Z]+/,                      }
        gnd.new_token     { name: 'before_digits',    fit:  /(?=[0-9])/,  jump: 'number!',    }
        gnd.new_token     { name: 'ws',               fit:  /\s+/,                            }
        #...................................................................................................
        number.new_token  { name: 'integer',          fit:  /[0-9]+/,                         }
        number.new_token  { name: 'unit',             fit:  /[a-zA-Z]+/,     jump: '..!',     }
        #...................................................................................................
        source = "99kg23mm"
        # info 'Ωilxt_466', source; tabulate_lexemes g.scan source
        info 'Ωilxt_467', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_468 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',        hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_469 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:0:0', data: { target: 'gnd' }, }
        @eq ( Ωilxt_470 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:0:0', data: { target: 'number' }, }
        @eq ( Ωilxt_471 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.before_digits', hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_472 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '99', pos: '1:0:2' }
        @eq ( Ωilxt_473 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:2:2', data: { target: 'gnd' }, }
        @eq ( Ωilxt_474 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.unit',             hit: 'kg', pos: '1:2:4' }
        @eq ( Ωilxt_475 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:4:4', data: { target: 'number' }, }
        @eq ( Ωilxt_476 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.before_digits', hit: '',   pos: '1:4:4' }
        @eq ( Ωilxt_477 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '23', pos: '1:4:6' }
        @eq ( Ωilxt_478 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:6:6', data: { target: 'gnd' }, }
        @eq ( Ωilxt_479 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.unit',             hit: 'mm', pos: '1:6:8' }
        @eq ( Ωilxt_480 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:8:8', data: { target: null }, }
        @eq ( Ωilxt_481 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',         hit: '',   pos: '1:8:8' }
        @eq ( Ωilxt_482 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      ### fore jump sticky, back jump carry ###
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, merge_jumps: false, }
        @eq ( Ωilxt_483 = -> g.cfg.merge_jumps ), false
        gnd       = g.new_level { name: 'gnd',      }
        number    = g.new_level { name: 'number',   }
        #...................................................................................................
        gnd.new_token     { name: 'letters',          fit:  /[a-zA-Z]+/,                      }
        gnd.new_token     { name: 'before_digits',    fit:  /(?=[0-9])/,  jump: 'number',     }
        gnd.new_token     { name: 'ws',               fit:  /\s+/,                            }
        #...................................................................................................
        number.new_token  { name: 'integer',          fit:  /[0-9]+/,                         }
        number.new_token  { name: 'unit',             fit:  /[a-zA-Z]+/,     jump: '..!',     }
        #...................................................................................................
        source = "99kg23mm"
        # info 'Ωilxt_484', source; tabulate_lexemes g.scan source
        info 'Ωilxt_485', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_486 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',        hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_487 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:0:0', data: { target: 'gnd' }, }
        @eq ( Ωilxt_488 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.before_digits',    hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_489 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:0:0', data: { target: 'number' }, }
        @eq ( Ωilxt_490 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '99', pos: '1:0:2' }
        @eq ( Ωilxt_491 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:2:2', data: { target: 'gnd' }, }
        @eq ( Ωilxt_492 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.unit',             hit: 'kg', pos: '1:2:4' }
        @eq ( Ωilxt_493 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.before_digits',    hit: '',   pos: '1:4:4' }
        @eq ( Ωilxt_494 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:4:4', data: { target: 'number' }, }
        @eq ( Ωilxt_495 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '23', pos: '1:4:6' }
        @eq ( Ωilxt_496 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:6:6', data: { target: 'gnd' }, }
        @eq ( Ωilxt_497 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.unit',             hit: 'mm', pos: '1:6:8' }
        @eq ( Ωilxt_498 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:8:8', data: { target: null }, }
        @eq ( Ωilxt_499 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',         hit: '',   pos: '1:8:8' }
        @eq ( Ωilxt_500 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
        #...................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    merge_jump_signals: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      ### fore jump carry, back jump sticky ###
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, }
        @eq ( Ωilxt_501 = -> g.cfg.merge_jumps ), true
        gnd       = g.new_level { name: 'gnd',      }
        number    = g.new_level { name: 'number',   }
        #...................................................................................................
        gnd.new_token     { name: 'letters',          fit:  /[a-zA-Z]+/,                      }
        gnd.new_token     { name: 'before_digits',    fit:  /(?=[0-9])/,  jump: 'number!',    }
        gnd.new_token     { name: 'ws',               fit:  /\s+/,                            }
        #...................................................................................................
        number.new_token  { name: 'integer',          fit:  /[0-9]+/,                         }
        number.new_token  { name: 'unit',             fit:  /[a-zA-Z]+/,     jump: '..',      }
        #...................................................................................................
        source = "99kg23mm"
        # info 'Ωilxt_502', source; tabulate_lexemes g.scan source
        info 'Ωilxt_503', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_504 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',        hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_505 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:0:0', data: { target: 'number' }, }
        @eq ( Ωilxt_506 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.before_digits', hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_507 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '99', pos: '1:0:2' }
        @eq ( Ωilxt_508 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',          hit: 'kg', pos: '1:2:4' }
        @eq ( Ωilxt_509 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:4:4', data: { target: 'number' }, }
        @eq ( Ωilxt_510 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.before_digits', hit: '',   pos: '1:4:4' }
        @eq ( Ωilxt_511 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '23', pos: '1:4:6' }
        @eq ( Ωilxt_512 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',          hit: 'mm', pos: '1:6:8' }
        @eq ( Ωilxt_513 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:8:8', data: { target: null }, }
        @eq ( Ωilxt_514 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',         hit: '',   pos: '1:8:8' }
        @eq ( Ωilxt_515 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
        #...................................................................................................
      return null

  #=========================================================================================================
  infinite_loops:

    #-------------------------------------------------------------------------------------------------------
    zero_matches_with_jumps_as_exceptions: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, loop_errors: 'throw', }
        @eq ( Ωilxt_516 = -> g.cfg.merge_jumps ), true
        level_one = g.new_level { name: 'level_one',  }
        level_two = g.new_level { name: 'level_two',  }
        #...................................................................................................
        level_one.new_token { name: 'to_level_two', fit:  /(?=)/, jump: 'level_two', }
        level_two.new_token { name: 'to_level_one', fit:  /|/,    jump: 'level_one', }
        #...................................................................................................
        source = "doesn't matter"
        # info 'Ωilxt_517', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_518', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_519', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_520 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',          hit: '', pos: '1:0:0' }
        @eq ( Ωilxt_521 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           hit: '', pos: '1:0:0', data: { target: 'level_one' } }
        @eq ( Ωilxt_522 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'level_one.to_level_two', hit: '', pos: '1:0:0' }
        @eq ( Ωilxt_523 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           hit: '', pos: '1:0:0', data: { target: 'level_two' } }
        @eq ( Ωilxt_524 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'level_two.to_level_one', hit: '', pos: '1:0:0' }
        @throws ( Ωilxt_525 = -> abbrlxm tabulate_lexeme lexemes.next().value ), /encountered loop/
        return null
        #...................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    zero_matches_with_jumps_as_error_signals: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, loop_errors: 'emit', }
        @eq ( Ωilxt_526 = -> g.cfg.merge_jumps ), true
        level_one = g.new_level { name: 'level_one',  }
        level_two = g.new_level { name: 'level_two',  }
        #...................................................................................................
        level_one.new_token { name: 'to_level_two', fit:  /(?=)/, jump: 'level_two', }
        level_two.new_token { name: 'to_level_one', fit:  /|/,    jump: 'level_one', }
        #...................................................................................................
        source = "doesn't matter"
        # info 'Ωilxt_527', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_528', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_529', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_530 = -> g.has_error ), false
        @eq ( Ωilxt_531 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',          hit: '',               pos: '1:0:0' }
        @eq ( Ωilxt_532 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           hit: '',               pos: '1:0:0', data: { target: 'level_one' } }
        @eq ( Ωilxt_533 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'level_one.to_level_two', hit: '',               pos: '1:0:0' }
        @eq ( Ωilxt_534 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           hit: '',               pos: '1:0:0', data: { target: 'level_two' } }
        @eq ( Ωilxt_535 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'level_two.to_level_one', hit: '',               pos: '1:0:0' }
        @eq ( Ωilxt_536 = -> g.has_error ), false
        @eq ( Ωilxt_537 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           hit: '',               pos: '1:0:0', data: { target: 'level_one' } }
        @eq ( Ωilxt_538 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$error.loop',            hit: '',               pos: '1:0:0', data: { message: "encountered loop at position +0 (indicated by '⚠': '⚠doesn\\'t matter')" } }
        @eq ( Ωilxt_539 = -> g.has_error ), true
        @eq ( Ωilxt_540 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           hit: '',               pos: '1:0:0', data: { target: null } }
        @eq ( Ωilxt_541 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$error.earlystop',       hit: "doesn't matter", pos: '1:0:14', data: { message: 'expected stop at 14, got +0' } }
        @eq ( Ωilxt_542 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',           hit: '',               pos: '1:0:0' }
        @eq ( Ωilxt_543 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        @eq ( Ωilxt_544 = -> g.has_error ), true
        lexemes = g.scan source
        abbrlxm lexemes.next().value
        @eq ( Ωilxt_545 = -> g.has_error ), false
        return null
        #...................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    has_errors: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      g         = new Grammar { name: 'g', emit_signals: true, loop_errors: 'emit', }
      gnd       = g.new_level { name: 'gnd', }
      @eq ( Ωilxt_546 = -> [ g.state.errors.length, g.has_error, ] ), [ 0, false ]
      #.....................................................................................................
      g.state.errors.push null
      g.state.errors.push null
      @eq ( Ωilxt_547 = -> [ g.state.errors.length, g.has_error, ] ), [ 2, true ]
      lexemes = g.scan 'ghi'
      @eq ( Ωilxt_548 = -> [ g.state.errors.length, g.has_error, ] ), [ 2, true ]
      @eq ( Ωilxt_549 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',    hit: '',    pos: '1:0:0' }
      @eq ( Ωilxt_550 = -> [ g.state.errors.length, g.has_error, ] ), [ 0, false ]
      @eq ( Ωilxt_551 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',     hit: '',    pos: '1:0:0', data: { target: null } }
      @eq ( Ωilxt_552 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$error.earlystop', hit: 'ghi', pos: '1:0:3', data: { message: 'expected stop at 3, got +0' } }
      @eq ( Ωilxt_553 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',     hit: '',    pos: '1:0:0' }
      @eq ( Ωilxt_554 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
      @eq ( Ωilxt_555 = -> [ g.state.errors.length, g.has_error, ] ), [ 1, true ]
      return null

    #-------------------------------------------------------------------------------------------------------
    can_throw_earlystop_errors: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      g         = new Grammar { name: 'g', emit_signals: true, loop_errors: 'emit', earlystop_errors: 'throw', }
      gnd       = g.new_level { name: 'gnd', }
      @eq ( Ωilxt_556 = -> [ g.state.errors.length, g.has_error, ] ), [ 0, false ]
      #.....................................................................................................
      g.state.errors.push null
      g.state.errors.push null
      @eq ( Ωilxt_557 = -> [ g.state.errors.length, g.has_error, ] ), [ 2, true ]
      lexemes = g.scan 'ghi'
      @eq ( Ωilxt_558 = -> [ g.state.errors.length, g.has_error, ] ), [ 2, true ]
      @eq ( Ωilxt_559 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',    hit: '',    pos: '1:0:0' }
      @eq ( Ωilxt_560 = -> [ g.state.errors.length, g.has_error, ] ), [ 0, false ]
      @throws ( Ωilxt_561 = -> abbrlxm tabulate_lexeme lexemes.next().value ), /expected stop at 3/
      return null

    #-------------------------------------------------------------------------------------------------------
    ok_when_levels_back_to_back: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, }
        @eq ( Ωilxt_562 = -> g.cfg.merge_jumps ), true
        text  = g.new_level { name: 'text', }
        tag   = g.new_level { name: 'tag',  }
        #...................................................................................................
        text.new_token { name: 'pretag',    fit:  /(?=<)/,      jump: 'tag',  }
        text.new_token { name: 'text',      fit:  /.+/,         jump: null,   }
        tag.new_token  { name: 'tag',       fit:  /<[^>]*>+?/,  jump: 'text', }
        #...................................................................................................
        # source = "<tag-a><tag-b><tag-c><tag-d>"
        # source = "<tag-a><tag-b><tag-c>"
        source = "<tag-a><tag-b>"
        # source = "<tag-a>"
        # info 'Ωilxt_563', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_564', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_565', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_566 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start', hit: '',        pos: '1:0:0' }
        @eq ( Ωilxt_567 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:0:0', data: { target: 'text' } }
        @eq ( Ωilxt_568 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.pretag',   hit: '',        pos: '1:0:0' }
        @eq ( Ωilxt_569 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:0:0', data: { target: 'tag' } }
        @eq ( Ωilxt_570 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'tag.tag',       hit: '<tag-a>', pos: '1:0:7' }
        @eq ( Ωilxt_571 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:7:7', data: { target: 'text' } }
        @eq ( Ωilxt_572 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.pretag',   hit: '',        pos: '1:7:7' }
        @eq ( Ωilxt_573 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:7:7', data: { target: 'tag' } }
        @eq ( Ωilxt_574 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'tag.tag',       hit: '<tag-b>', pos: '1:7:14' }
        @eq ( Ωilxt_575 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:14:14', data: { target: null } }
        @eq ( Ωilxt_576 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',  hit: '',        pos: '1:14:14' }
        @eq ( Ωilxt_577 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
        #...................................................................................................
      return null

  #=========================================================================================================
  ghost_tokens:

    #-------------------------------------------------------------------------------------------------------
    ok_when_levels_back_to_back: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, }
        @eq ( Ωilxt_578 = -> g.cfg.merge_jumps ), true
        text  = g.new_level { name: 'text', }
        tag   = g.new_level { name: 'tag',  }
        #...................................................................................................
        text.new_token { name: 'pretag',    fit:  /(?=<)/,      jump: 'tag',  emit: false, }
        text.new_token { name: 'text',      fit:  /.+/,         jump: null,   }
        tag.new_token  { name: 'tag',       fit:  /<[^>]*>+?/,  jump: 'text', }
        #...................................................................................................
        # source = "<tag-a><tag-b><tag-c><tag-d>"
        # source = "<tag-a><tag-b><tag-c>"
        source = "<tag-a><tag-b>"
        # source = "<tag-a>"
        # info 'Ωilxt_579', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_580', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_581', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_582 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start', hit: '',        pos: '1:0:0' }
        @eq ( Ωilxt_583 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:0:0', data: { target: 'tag' } }
        @eq ( Ωilxt_584 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'tag.tag',       hit: '<tag-a>', pos: '1:0:7' }
        @eq ( Ωilxt_585 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:7:7', data: { target: 'tag' } }
        @eq ( Ωilxt_586 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'tag.tag',       hit: '<tag-b>', pos: '1:7:14' }
        @eq ( Ωilxt_587 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:14:14', data: { target: null } }
        @eq ( Ωilxt_588 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',  hit: '',        pos: '1:14:14' }
        @eq ( Ωilxt_589 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
        #...................................................................................................
      return null

  #=========================================================================================================
  demo:

    #-------------------------------------------------------------------------------------------------------
    demo_nr_1: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #=====================================================================================================
      g         = new Grammar { name: 'g', }
      gnd       = g.new_level { name: 'gnd', }
      #.....................................................................................................
      gnd.new_token       { name: 'name',           fit: rx"(?<initial>[A-Z])[a-z]*", }
      gnd.new_token       { name: 'number',         fit: rx"[0-9]+",                  }
      gnd.new_token       { name: 'paren_start',    fit: rx"\(",                      }
      gnd.new_token       { name: 'paren_stop',     fit: rx"\)",                      }
      gnd.new_token       { name: 'other',          fit: rx"[A-Za-z0-9]+",            }
      gnd.new_token       { name: 'ws',             fit: rx"\s+",                     }
      #.....................................................................................................
      source = "Alice in Cairo 1912 (approximately)"
      # info 'Ωilxt_590', source; tabulate_lexemes g.scan source
      info 'Ωilxt_591', source; g.reset_lnr 1; lexemes = g.scan source
      @eq ( Ωilxt_592 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',   hit: '',              pos: '1:0:0' }
      @eq ( Ωilxt_593 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '',              pos: '1:0:0', data: { target: 'gnd' } }
      @eq ( Ωilxt_594 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name',        hit: 'Alice',         pos: '1:0:5', data: { initial: 'A', }, }
      @eq ( Ωilxt_595 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',          hit: ' ',             pos: '1:5:6' }
      @eq ( Ωilxt_596 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.other',       hit: 'in',            pos: '1:6:8' }
      @eq ( Ωilxt_597 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',          hit: ' ',             pos: '1:8:9' }
      @eq ( Ωilxt_598 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name',        hit: 'Cairo',         pos: '1:9:14', data: { initial: 'C', } }
      @eq ( Ωilxt_599 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',          hit: ' ',             pos: '1:14:15' }
      @eq ( Ωilxt_600 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.number',      hit: '1912',          pos: '1:15:19' }
      @eq ( Ωilxt_601 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',          hit: ' ',             pos: '1:19:20' }
      @eq ( Ωilxt_602 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.paren_start', hit: '(',             pos: '1:20:21' }
      @eq ( Ωilxt_603 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.other',       hit: 'approximately', pos: '1:21:34' }
      @eq ( Ωilxt_604 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.paren_stop',  hit: ')',             pos: '1:34:35' }
      @eq ( Ωilxt_605 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '',              pos: '1:35:35', data: { target: null } }
      @eq ( Ωilxt_ACCEPT_606 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',    hit: '',              pos: '1:35:35', }
      @eq ( Ωilxt_607 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    demo_nr_2: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #=====================================================================================================
      g         = new Grammar { name: 'faulty', }
      gnd       = g.new_level { name: 'gnd', }
      string11  = g.new_level { name: 'string11', }
      #.....................................................................................................
      gnd.new_token       { name: 'name',           fit: rx"(?<initial>[A-Z])[a-z]*", }
      gnd.new_token       { name: 'number',         fit: rx"[0-9]+",                  }
      gnd.new_token       { name: 'string11_start', fit: rx"(?!<\\)'",                jump: 'string11', }
      gnd.new_token       { name: 'paren_start',    fit: rx"\(",                      }
      gnd.new_token       { name: 'paren_stop',     fit: rx"\)",                      }
      gnd.new_token       { name: 'other',          fit: rx"[A-Za-z0-9]+",            }
      gnd.new_token       { name: 'ws',             fit: rx"\s+",                     }
      #.....................................................................................................
      # string11.new_token  { name: 'string11_stop',  fit: rx"(?!<\\)'",                jump: '..!', }
      string11.new_token  { name: 'text',           fit: rx"[^']+",                   }
      #.....................................................................................................
      source = "Alice in Cairo 1912 'approximately'"
      # info 'Ωilxt_608', source; tabulate_lexemes g.scan source
      info 'Ωilxt_609', source; g.reset_lnr 1; lexemes = g.scan source
      @eq ( Ωilxt_610 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',      hit: '',       pos: '1:0:0' }
      @eq ( Ωilxt_611 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',       hit: '',       pos: '1:0:0', data: { target: 'gnd' } }
      @eq ( Ωilxt_612 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name',           hit: 'Alice',  pos: '1:0:5', data: { initial: 'A', }, }
      @eq ( Ωilxt_613 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',             hit: ' ',      pos: '1:5:6' }
      @eq ( Ωilxt_614 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.other',          hit: 'in',     pos: '1:6:8' }
      @eq ( Ωilxt_615 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',             hit: ' ',      pos: '1:8:9' }
      @eq ( Ωilxt_616 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name',           hit: 'Cairo',  pos: '1:9:14', data: { initial: 'C', }, }
      @eq ( Ωilxt_617 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',             hit: ' ',      pos: '1:14:15' }
      @eq ( Ωilxt_618 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.number',         hit: '1912',   pos: '1:15:19' }
      @eq ( Ωilxt_619 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',             hit: ' ',      pos: '1:19:20' }
      @eq ( Ωilxt_620 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.string11_start', hit: "'",      pos: '1:20:21' }
      @eq ( Ωilxt_621 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',       hit: '',       pos: '1:21:21', data: { target: 'string11' } }
      @eq ( Ωilxt_622 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string11.text',      hit: 'approximately', pos: '1:21:34' }
      @eq ( Ωilxt_623 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',       hit: '',       pos: '1:34:34', data: { target: null } }
      @eq ( Ωilxt_624 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$error.earlystop',   hit: "'",      pos: '1:34:35', data: { message: 'expected stop at 35, got 34' } }
      @eq ( Ωilxt_625 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',       hit: '',       pos: '1:34:34', }
      @eq ( Ωilxt_626 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
      return null

    #-------------------------------------------------------------------------------------------------------
    demo_nr_3: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #=====================================================================================================
      g         = new Grammar { name: 'faulty', emit_signals: false, }
      gnd       = g.new_level { name: 'gnd', }
      number    = g.new_level { name: 'number', }
      #.....................................................................................................
      gnd.new_token       { name: 'text',           fit: rx.i"\\[0-9]|[a-z\s]+",                  }
      gnd.new_token       { name: 'number_start',   fit: rx"(?=(?!<\\)[0-9])",    jump: 'number', }
      number.new_token    { name: 'number',         fit: rx"[0-9]+",                              }
      #.....................................................................................................
      do =>
        source = "R\\2D\\2 on Charon 3"
        # info 'Ωilxt_627', source; tabulate_lexemes g.scan source
        info 'Ωilxt_628', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_629 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: 'R',           pos: '1:0:1' }
        @eq ( Ωilxt_630 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: '\\2',         pos: '1:1:3' }
        @eq ( Ωilxt_631 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: 'D',           pos: '1:3:4' }
        @eq ( Ωilxt_632 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: '\\2',         pos: '1:4:6' }
        @eq ( Ωilxt_633 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: ' on Charon ', pos: '1:6:17' }
        @eq ( Ωilxt_634 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.number_start', hit: '',            pos: '1:17:17' }
        @eq ( Ωilxt_635 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.number',    hit: '3',           pos: '1:17:18' }
        @eq ( Ωilxt_636 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        source = "R\\2D\\2 on Charon 3!!"
        # echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_637', source; tabulate_lexemes g.scan source
        info 'Ωilxt_638', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_639 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: 'R',           pos: '1:0:1' }
        @eq ( Ωilxt_640 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: '\\2',         pos: '1:1:3' }
        @eq ( Ωilxt_641 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: 'D',           pos: '1:3:4' }
        @eq ( Ωilxt_642 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: '\\2',         pos: '1:4:6' }
        @eq ( Ωilxt_643 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: ' on Charon ', pos: '1:6:17' }
        @eq ( Ωilxt_644 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.number_start', hit: '',            pos: '1:17:17' }
        @eq ( Ωilxt_645 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.number',    hit: '3',           pos: '1:17:18' }
        @eq ( Ωilxt_646 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$error.earlystop', hit: '!!',          pos: '1:18:20', data: { message: 'expected stop at 20, got 18' } }
        @eq ( Ωilxt_647 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      return null

  #=========================================================================================================
  cfg_settings:

    #-------------------------------------------------------------------------------------------------------
    grammar: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.........................................................................................................
      do =>
        g = new Grammar()
        @eq ( Ωilxt_648 = -> g.cfg.name           ), 'g'
        @eq ( Ωilxt_649 = -> g.cfg.strategy       ), 'first'
        @eq ( Ωilxt_650 = -> g.cfg.emit_signals   ), true
        @eq ( Ωilxt_651 = -> g.cfg.merge_jumps    ), true
        return null
      #.........................................................................................................
      do =>
        g = new Grammar { emit_signals: false, }
        @eq ( Ωilxt_652 = -> g.cfg.name           ), 'g'
        @eq ( Ωilxt_653 = -> g.cfg.strategy       ), 'first'
        @eq ( Ωilxt_654 = -> g.cfg.emit_signals   ), false
        @eq ( Ωilxt_655 = -> g.cfg.merge_jumps    ), false
        return null
      #.........................................................................................................
      return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true, show_passes: false, report_checks: false, }
  # guytest_cfg = { throw_on_error: false, show_passes: false, report_checks: false, }
  # guytest_cfg = { throw_on_error: false, show_passes: true, report_checks: true, }
  ( new Test guytest_cfg ).test @interlex_tasks
  ( new Test guytest_cfg ).test { data_capture: @interlex_tasks.data_capture, }
  # ( new Test guytest_cfg ).test { ghost_tokens: @interlex_tasks.ghost_tokens, }
  # ( new Test guytest_cfg ).test { cfg_settings: @interlex_tasks.cfg_settings, }
  # ( new Test guytest_cfg ).test { numbering: @interlex_tasks.basics.numbering, }
  # ( new Test guytest_cfg ).test { stack: @interlex_tasks.stack, }

