
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
{ internals: ct_internals
  isa
  std
  type_of               } = require '../../../apps/cleartype'


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
      @eq ( Ωilxt__68 = -> g.levels.constructor                                           ), undefined
      @eq ( Ωilxt__69 = -> g.levels.gnd                                                   ), gnd
      #.....................................................................................................
      @eq ( Ωilxt__70 = -> gnd instanceof Level                                           ), true
      @eq ( Ωilxt__71 = -> gnd.name                                                       ), 'gnd'
      @eq ( Ωilxt__72 = -> gnd.grammar                                                    ), g
      @eq ( Ωilxt__73 = -> gnd.tokens.constructor                                         ), undefined
      @eq ( Ωilxt__74 = -> gnd.tokens.length                                              ), undefined
      @eq ( Ωilxt__75 = -> gnd.tokens.number                                              ), number_tk
      #.....................................................................................................
      @eq ( Ωilxt__76 = -> number_tk instanceof Token                                     ), true
      @eq ( Ωilxt__77 = -> number_tk.name                                                 ), 'number'
      @eq ( Ωilxt__78 = -> number_tk.level                                                ), gnd
      @eq ( Ωilxt__79 = -> number_tk.grammar                                              ), g
      @eq ( Ωilxt__80 = -> number_tk.fit                                                  ), /[0-9]+/dvy
      @eq ( Ωilxt__81 = -> number_tk.fit.hasIndices                                       ), true
      @eq ( Ωilxt__82 = -> number_tk.fit.sticky                                           ), true
      @eq ( Ωilxt__83 = -> number_tk.fit.unicodeSets                                      ), true
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
      @eq ( Ωilxt_102 = -> g.levels.gnd                                                   ), gnd
      @eq ( Ωilxt_103 = -> g.levels.gnd.tokens.number                                     ), number_tk
      @eq ( Ωilxt_104 = -> ct_internals.gnd.function.isa g.token_from_fqname              ), true
      @eq ( Ωilxt_105 = -> g.token_from_fqname 'gnd.number'                               ), number_tk
      @throws ( Ωilxt_106 = -> g.token_from_fqname 'XXX.XXX'                              ), /unknown level 'XXX'/
      @throws ( Ωilxt_107 = -> g.token_from_fqname 'gnd.XXX'                              ), /unknown token 'XXX'/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    flexible_new_token_syntax: ->
      ILX                 = require '../../../apps/interlex'
      { Grammar
        Level
        Token
        Lexeme
        rx
        internals       } = ILX
      #.....................................................................................................
      do =>
        g                 = new Grammar { name: 'g', }
        gnd               = g.new_level { name: 'gnd', }
        number_tk_matcher = rx"[0-9]+"
        number_tk         = gnd.new_token { name: 'number', fit: number_tk_matcher, }
        number_lx         = g.scan_first '9753'
        @eq ( Ωilxt_109 = -> number_tk.name               ), 'number'
        @eq ( Ωilxt_110 = -> number_lx.token              ), number_tk
        return null
      #.....................................................................................................
      do =>
        g                 = new Grammar { name: 'g', }
        gnd               = g.new_level { name: 'gnd', }
        number_tk_matcher = rx"[0-9]+"
        number_tk         = gnd.new_token 'number', { fit: number_tk_matcher, }
        number_lx         = g.scan_first '9753'
        @eq ( Ωilxt_112 = -> number_tk.name               ), 'number'
        @eq ( Ωilxt_113 = -> number_lx.token              ), number_tk
        return null
      #.....................................................................................................
      do =>
        g                 = new Grammar { name: 'g', }
        gnd               = g.new_level { name: 'gnd', }
        number_tk_matcher = rx"[0-9]+"
        number_tk         = gnd.new_token 'number', number_tk_matcher
        number_lx         = g.scan_first '9753'
        @eq ( Ωilxt_112 = -> number_tk.name               ), 'number'
        @eq ( Ωilxt_113 = -> number_lx.token              ), number_tk
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    new_regex_tag: ->
      { rx
        regex
        internals
        new_regex_tag } = require '../../../apps/interlex'
      #.....................................................................................................
      @eq ( Ωilxt_114 = -> typeof   new_regex_tag 'dy'                                  ), 'function'
      @eq ( Ωilxt_115 = -> typeof ( new_regex_tag 'dy'    ).si                          ), 'function'
      @eq ( Ωilxt_116 = -> ( (      new_regex_tag 'dyis'  )"[a-z]" ) instanceof RegExp  ), true
      #.....................................................................................................
      @eq ( Ωilxt_117 = -> ( new_regex_tag 'dyis'  )"[a-z]"     ), /[a-z]/disvy
      @eq ( Ωilxt_118 = -> ( new_regex_tag 'dy'    ).si"[a-z]"  ), /[a-z]/disvy
      @eq ( Ωilxt_119 = -> ( new_regex_tag 'dys'   ).si"[a-z]"  ), /[a-z]/disvy
      @eq ( Ωilxt_120 = -> ( new_regex_tag 'dys'   ).i"[a-z]"   ), /[a-z]/disvy
      @eq ( Ωilxt_121 = -> ( new_regex_tag 'dysi'  )"[a-z]"     ), /[a-z]/disvy
      @eq ( Ωilxt_122 = -> ( new_regex_tag 'v'     ).si"[a-z]"  ), /[a-z]/disvy
      #.....................................................................................................
      @throws ( Ωilxt_123 = -> ( new_regex_tag 'dy'    ).ab"[a-z]"  ), /illegal or duplicate flags/
      @throws ( Ωilxt_124 = -> ( new_regex_tag 'dyab'  )"[a-z]"     ), /illegal or duplicate flags/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    normalize_regex: ->
      { internals       } = require '../../../apps/interlex'
      { normalize_regex } = internals
      @eq ( Ωilxt_125 = -> typeof normalize_regex     ), 'function'
      @eq ( Ωilxt_126 = -> normalize_regex /[a-z]/ig  ), /[a-z]/dgivy
      @eq ( Ωilxt_127 = -> normalize_regex /[a-z]/i   ), /[a-z]/divy
      @eq ( Ωilxt_128 = -> normalize_regex /[a-z]/u   ), /[a-z]/dvy
      @eq ( Ωilxt_129 = -> normalize_regex /[a-z]/gv  ), /[a-z]/dgvy
      @eq ( Ωilxt_130 = -> normalize_regex /[a-z]/gu  ), /[a-z]/dgvy
      @eq ( Ωilxt_131 = -> normalize_regex /[a-z]/v   ), /[a-z]/dvy
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    rx_flags: ->
      { rx } = require '../../../apps/interlex'
      @eq ( Ωilxt_132 = -> ( rx"x"        ).flags ), 'dvy'
      @eq ( Ωilxt_133 = -> ( rx.si"x"     ).flags ), 'disvy'
      # @eq ( Ωilxt_134 = -> ( rx.sidvy"x"  ).flags ), 'disvy'
      @eq ( Ωilxt_135 = -> ( rx.y"x"      ).flags ), 'dvy'
      @eq ( Ωilxt_136 = -> rpr rx"[abc]+" ), '/[abc]+/dvy'
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
        @eq ( Ωilxt_137 = -> g.state.lnr ), 1
        probes_and_matchers = [
          [ "1st line",           1, ]
          [ "2nd line",           2, ]
          [ "3rd line",           3, ]
          [ "4th line (and EOF)", 4, ] ]
        #...................................................................................................
        for [ probe, fit, ] from probes_and_matchers
          info 'Ωilxt_138', rpr probe
          lexemes = g.scan_to_list probe
          # urge 'Ωilxt_139', lexemes
          @eq ( Ωilxt_140 = -> lexemes[ 0 ].lnr ), fit
        return null
      #.....................................................................................................
      do =>
        g = new_grammar { lnr: 10, emit_signals: false, }
        @eq ( Ωilxt_141 = -> g.state.lnr ), 10
        @throws ( Ωilxt_142 = -> g.reset_lnr 10 ), /does not accept arguments/
        probes_and_matchers = [
          [ "1st line",           10, ]
          [ "2nd line",           11, ]
          [ "3rd line",           12, ]
          [ "4th line (and EOF)", 13, ] ]
        #...................................................................................................
        for [ probe, fit, ] from probes_and_matchers
          info 'Ωilxt_143', rpr probe
          lexeme = ( g.scan_to_list probe )[ 0 ]
          @eq ( Ωilxt_144 = -> lexeme.lnr ), fit
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
          @eq ( Ωilxt_145 = -> condense_lexemes lexemes ), fit.condensed
          @eq ( Ωilxt_146 = -> lexemes.length ), fit.length
          g.reset_lnr()
          @eq ( Ωilxt_147 = -> [ ( g.scan probe )..., ] ), lexemes
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
          @eq ( Ωilxt_148 = -> condense_lexemes first.match_first_at position, source ), fit
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
          @eq ( Ωilxt_149 = -> condense_lexemes first.match_first_at position, source ), fit
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
          @eq ( Ωilxt_150 = -> condense_lexemes first.match_longest_at position, source ), fit
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
          @eq ( Ωilxt_151 = -> condense_lexemes first.match_longest_at position, source ), fit
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
              @eq ( Ωilxt_152 = -> condense_lexemes first.match_longest_at position, source ), fit
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
            @eq ( Ωilxt_153 = -> g.cfg.strategy ), 'longest'
            @eq ( Ωilxt_154 = -> first.strategy ), 'longest'
            for [ source, fit, ] in probes_and_matchers
              @eq ( Ωilxt_155 = -> condense_lexemes g.scan_to_list source ), fit
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
        @eq ( Ωilxt_156 = -> g.cfg.strategy ), 'first'
        @eq ( Ωilxt_157 = -> first.strategy ), 'first'
        for [ source, fit, ] in probes_and_matchers
          @eq ( Ωilxt_158 = -> condense_lexemes g.scan_to_list source ), fit
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
        @eq ( Ωilxt_159 = -> g.cfg.strategy ), 'first'
        @eq ( Ωilxt_160 = -> first.strategy ), 'first'
        for [ source, fit, ] in probes_and_matchers
          @eq ( Ωilxt_161 = -> condense_lexemes g.scan_to_list source ), fit
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
        @throws ( Ωilxt_162 = -> g.scan_to_list "ab" ), /encountered zero-length match/
      #.....................................................................................................
      do =>
        g = new Grammar { strategy: 'longest', emit_signals: false, }
        gnd = g.new_level { name: 'gnd', }
        gnd.new_token { name: 'a', fit: /a/, }
        gnd.new_token { name: 'b', fit: /(?=b)/, }
        @throws ( Ωilxt_163 = -> g.scan_to_list "ab" ), /encountered zero-length match/
      #.....................................................................................................
      do =>
        ### We accept the empty match here since while it does get produced as an intermediate value to find
        the longest match, it does not get passed on as a resulting lexeme. ###
        g = new Grammar { strategy: 'longest', emit_signals: false, }
        gnd = g.new_level { name: 'gnd', }
        gnd.new_token { name: 'a', fit: /[ab]/, }
        gnd.new_token { name: 'b', fit: /(?=b)/, }
        @eq ( Ωilxt_164 = -> condense_lexemes g.scan_to_list "ab" ), "gnd.a'a'|gnd.a'b'"
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
        @throws ( Ωilxt_165 = -> first.new_token { name: 'digit', fit: /[0-9]/, jump: 'first',  } ), /cannot jump to same level/
        @throws ( Ωilxt_166 = -> first.new_token { name: 'digit', fit: /[0-9]/, jump: 'first!', } ), /cannot jump to same level/
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    parse_jumps: ->
      { Token } = require '../../../apps/interlex'
      #.....................................................................................................
      @eq     ( Ωilxt_167 = -> Token._parse_jump()                                   ), null
      @eq     ( Ωilxt_168 = -> Token._parse_jump '..'                                ), { spec: '..',       carry: false, action: 'back', target: '..',      }
      @eq     ( Ωilxt_169 = -> Token._parse_jump 'mylevel'                           ), { spec: 'mylevel',  carry: false, action: 'fore', target: 'mylevel', }
      @eq     ( Ωilxt_170 = -> Token._parse_jump '..!'                               ), { spec: '..!',      carry: true,  action: 'back', target: '..',      }
      @eq     ( Ωilxt_171 = -> Token._parse_jump 'mylevel!'                          ), { spec: 'mylevel!', carry: true,  action: 'fore', target: 'mylevel', }
      @eq     ( Ωilxt_172 = -> Token._parse_jump 'mylevel!', { name: 'otherlevel', } ), { spec: 'mylevel!', carry: true,  action: 'fore', target: 'mylevel', }
      @throws ( Ωilxt_173 = -> Token._parse_jump '..]'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_174 = -> Token._parse_jump ']..'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_175 = -> Token._parse_jump '[mylevel'                          ), /encountered illegal jump spec/
      @throws ( Ωilxt_176 = -> Token._parse_jump 'mylevel['                          ), /encountered illegal jump spec/
      @throws ( Ωilxt_177 = -> Token._parse_jump 'mylevel[', { name: 'otherlevel', } ), /encountered illegal jump spec/
      @throws ( Ωilxt_178 = -> Token._parse_jump '[mylevel['                         ), /encountered illegal jump spec/
      @throws ( Ωilxt_179 = -> Token._parse_jump '[mylevel]'                         ), /encountered illegal jump spec/
      @throws ( Ωilxt_180 = -> Token._parse_jump ']mylevel'                          ), /encountered illegal jump spec/
      @throws ( Ωilxt_181 = -> Token._parse_jump '[..'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_182 = -> Token._parse_jump '[..]'                              ), /encountered illegal jump spec/
      @throws ( Ωilxt_183 = -> Token._parse_jump '..['                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_184 = -> Token._parse_jump '[...'                              ), /encountered illegal jump spec/
      @throws ( Ωilxt_185 = -> Token._parse_jump '...'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_186 = -> Token._parse_jump '%'                                 ), /encountered illegal jump spec/
      @throws ( Ωilxt_187 = -> Token._parse_jump 'my-name'                           ), /encountered illegal jump spec/
      @throws ( Ωilxt_188 = -> Token._parse_jump 'mylevel',  { name: 'mylevel', }    ), /cannot jump to same level/
      @throws ( Ωilxt_189 = -> Token._parse_jump 'mylevel!', { name: 'mylevel', }    ), /cannot jump to same level/
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
        @eq ( Ωilxt_190 = -> lexeme instanceof Lexeme       ), true
        @eq ( Ωilxt_191 = -> lexeme.token instanceof Token  ), true
        @eq ( Ωilxt_192 = -> lexeme.name                    ), 'digit'
        @eq ( Ωilxt_193 = -> lexeme.level.name              ), 'first'
        @eq ( Ωilxt_194 = -> lexeme.fqname                  ), 'first.digit'
        lexeme.set_level number
        @eq ( Ωilxt_195 = -> lexeme instanceof Lexeme       ), true
        @eq ( Ωilxt_196 = -> lexeme.token instanceof Token  ), true
        @eq ( Ωilxt_197 = -> lexeme.name                    ), 'digit'
        @eq ( Ωilxt_198 = -> lexeme.level.name              ), 'number'
        @eq ( Ωilxt_199 = -> lexeme.fqname                  ), 'number.digit'
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
        @eq ( Ωilxt_200 = -> first.tokens.dq.name     ), 'dq'
        @eq ( Ωilxt_201 = -> first.tokens.dq.jump     ), { spec: 'dqstring!', carry: true, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_202 = -> dqstring.tokens.dq.name  ), 'dq'
        @eq ( Ωilxt_203 = -> dqstring.tokens.dq.jump  ), { spec: '..', carry: false, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.scan 'Bob said "wow".'
        @eq ( Ωilxt_204 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: 'Bob said ',  pos: '1:0:9',   }
        @eq ( Ωilxt_205 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.dq',    hit: '"',          pos: '1:9:10',  }
        @eq ( Ωilxt_206 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.other', hit: 'wow',        pos: '1:10:13', }
        @eq ( Ωilxt_207 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.dq',    hit: '"',          pos: '1:13:14', }
        @eq ( Ωilxt_208 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: '.',          pos: '1:14:15', }
        @eq ( Ωilxt_209 = -> lexemes.next().done  ), true
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
        @eq ( Ωilxt_210 = -> first.tokens.dq.name     ), 'dq'
        @eq ( Ωilxt_211 = -> first.tokens.dq.jump     ), { spec: 'dqstring', carry: false, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_212 = -> dqstring.tokens.dq.name  ), 'dq'
        @eq ( Ωilxt_213 = -> dqstring.tokens.dq.jump  ), { spec: '..!', carry: true, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.scan 'Bob said "wow".'
        @eq ( Ωilxt_214 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: 'Bob said ', pos: '1:0:9',   }
        @eq ( Ωilxt_215 = -> abbrlxm lexemes.next().value ), { fqname: 'first.dq',       hit: '"',         pos: '1:9:10',  }
        @eq ( Ωilxt_216 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.other', hit: 'wow',       pos: '1:10:13', }
        @eq ( Ωilxt_217 = -> abbrlxm lexemes.next().value ), { fqname: 'first.dq',       hit: '"',         pos: '1:13:14', }
        @eq ( Ωilxt_218 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: '.',         pos: '1:14:15', }
        @eq ( Ωilxt_219 = -> lexemes.next().done  ), true
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
        @eq ( Ωilxt_220 = -> first.tokens.dq.name     ), 'dq'
        @eq ( Ωilxt_221 = -> first.tokens.dq.jump     ), { spec: 'dqstring!', carry: true, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_222 = -> dqstring.tokens.dq.name  ), 'dq'
        @eq ( Ωilxt_223 = -> dqstring.tokens.dq.jump  ), { spec: '..!', carry: true, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.scan 'Bob said "wow".'
        @eq ( Ωilxt_224 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: 'Bob said ', pos: '1:0:9',   }
        @eq ( Ωilxt_225 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.dq',    hit: '"',         pos: '1:9:10',  }
        @eq ( Ωilxt_226 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.other', hit: 'wow',       pos: '1:10:13', }
        @eq ( Ωilxt_227 = -> abbrlxm lexemes.next().value ), { fqname: 'first.dq',       hit: '"',         pos: '1:13:14', }
        @eq ( Ωilxt_228 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: '.',         pos: '1:14:15', }
        @eq ( Ωilxt_229 = -> lexemes.next().done  ), true
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
        @eq ( Ωilxt_230 = -> first.tokens.dq.name     ), 'dq'
        @eq ( Ωilxt_231 = -> first.tokens.dq.jump     ), { spec: 'dqstring', carry: false, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_232 = -> dqstring.tokens.dq.name  ), 'dq'
        @eq ( Ωilxt_233 = -> dqstring.tokens.dq.jump  ), { spec: '..', carry: false, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.scan 'Bob said "wow".'
        @eq ( Ωilxt_234 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: 'Bob said ', pos: '1:0:9',   }
        @eq ( Ωilxt_235 = -> abbrlxm lexemes.next().value ), { fqname: 'first.dq',       hit: '"',         pos: '1:9:10',  }
        @eq ( Ωilxt_236 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.other', hit: 'wow',       pos: '1:10:13', }
        @eq ( Ωilxt_237 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.dq',    hit: '"',         pos: '1:13:14', }
        @eq ( Ωilxt_238 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: '.',         pos: '1:14:15', }
        @eq ( Ωilxt_239 = -> lexemes.next().done  ), true
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
          @eq ( Ωilxt_240 = -> condense_lexemes lexemes ), fit.condensed
          @eq ( Ωilxt_241 = -> lexemes.length ), fit.length
          g.reset_lnr()
          @eq ( Ωilxt_242 = -> [ ( g.scan probe )..., ] ), lexemes
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
        info 'Ωilxt_243', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
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
        info 'Ωilxt_244', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_245 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.before_digits', hit: '',   pos: '1:0:0', }
        @eq ( Ωilxt_246 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',    hit: '99', pos: '1:0:2', }
        @eq ( Ωilxt_247 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',       hit: 'kg', pos: '1:2:4', }
        @eq ( Ωilxt_248 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.before_digits', hit: '',   pos: '1:4:4', }
        @eq ( Ωilxt_249 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',    hit: '23', pos: '1:4:6', }
        @eq ( Ωilxt_250 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',       hit: 'mm', pos: '1:6:8', }
        @eq ( Ωilxt_251 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    duplicate_token_names_are_forbidden: ->
      { Grammar
        Token
        rx      } = require '../../../apps/interlex'
      #-----------------------------------------------------------------------------------------------------
      do =>
        g         = new Grammar { name: 'g', emit_signals: false, }
        gnd       = g.new_level { name: 'gnd', }
        #...................................................................................................
        @eq     ( Ωilxt_252 = -> ( gnd.new_token { name: 'letters', fit:  /[a-z]+/, } ) instanceof Token ), true
        @throws ( Ωilxt_253 = ->   gnd.new_token { name: 'letters', fit:  /[A-Z]+/, } ), null
      #.....................................................................................................
      return null

  #=========================================================================================================
  stack: ->
    Levelstack = ( require '../../../apps/interlex' ).internals.Levelstack
    do =>
      stack = new Levelstack()
      @eq     ( Ωilxt_254 = -> stack.is_empty                   ), true
      stack.push { name: '1', }
      @eq     ( Ωilxt_255 = -> stack.length                     ), 1
      @eq     ( Ωilxt_256 = -> stack.peek()                     ), { name: '1', }
      @eq     ( Ωilxt_257 = -> stack.pop()                      ), { name: '1', }
      @eq     ( Ωilxt_258 = -> stack.length                     ), 0
    do =>
      stack = new Levelstack { name: '1', }
      @eq     ( Ωilxt_259 = -> stack.length                     ), 1
      @eq     ( Ωilxt_260 = -> stack.peek()                     ), { name: '1', }
      @eq     ( Ωilxt_261 = -> stack.pop()                      ), { name: '1', }
      @eq     ( Ωilxt_262 = -> stack.length                     ), 0
    do =>
      stack = new Levelstack { name: '1', }, { name: '2', }
      @eq     ( Ωilxt_263 = -> stack.length                     ), 2
      @eq     ( Ωilxt_264 = -> stack.peek()                     ), { name: '2', }
      @eq     ( Ωilxt_265 = -> stack.popnpeek()                 ), { name: '1', }
      @eq     ( Ωilxt_266 = -> stack.length                     ), 1
      @eq     ( Ωilxt_267 = -> stack.peek()                     ), { name: '1', }
      @eq     ( Ωilxt_268 = -> stack.pop()                      ), { name: '1', }
      @eq     ( Ωilxt_269 = -> stack.length                     ), 0
    do =>
      stack = new Levelstack { name: '1', }, { name: '2', }
      @eq     ( Ωilxt_270 = -> stack.length                     ), 2
      # @eq     ( Ωilxt_271 = -> stack.peek_name()                ), '2'
      # @eq     ( Ωilxt_272 = -> stack.popnpeek_name()            ), '1'
      stack.pop()
      @eq     ( Ωilxt_273 = -> stack.length                     ), 1
      @eq     ( Ωilxt_274 = -> stack.is_empty                   ), false
      # @eq     ( Ωilxt_275 = -> stack.peek_name()                ), '1'
      @eq     ( Ωilxt_276 = -> stack.pop_name()                 ), '1'
      @eq     ( Ωilxt_277 = -> stack.length                     ), 0
      @eq     ( Ωilxt_278 = -> stack.is_empty                   ), true
    do =>
      stack = new Levelstack { name: '1', }, { name: '2', }
      @eq     ( Ωilxt_279 = -> stack.pop()                      ), { name: '2', }
      @eq     ( Ωilxt_280 = -> stack.is_empty                   ), false
      @eq     ( Ωilxt_281 = -> stack.pop()                      ), { name: '1', }
      @eq     ( Ωilxt_282 = -> stack.is_empty                   ), true
      @throws ( Ωilxt_283 = -> stack.pop()                      ), /stack is empty/
      @throws ( Ωilxt_284 = -> stack.popnpeek()                 ), /stack is empty/
      @throws ( Ωilxt_285 = -> stack.pop_name()                 ), /stack is empty/
      # @throws ( Ωilxt_286 = -> stack.popnpeek_name()            ), /stack is empty/
      @eq     ( Ωilxt_287 = -> stack.pop            'fallback'  ), 'fallback'
      @eq     ( Ωilxt_288 = -> stack.popnpeek       'fallback'  ), 'fallback'
      @eq     ( Ωilxt_289 = -> stack.pop_name       'fallback'  ), 'fallback'
      # @eq     ( Ωilxt_290 = -> stack.popnpeek_name  'fallback'  ), 'fallback'
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
        # g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_291', rpr source; tabulate_lexemes g.scan source
        info 'Ωilxt_292', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_293 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'R', pos: '1:0:1' }
        @eq ( Ωilxt_294 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: '\\2', pos: '1:1:3' }
        @eq ( Ωilxt_295 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'D', pos: '1:3:4' }
        @eq ( Ωilxt_296 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: '\\2', pos: '1:4:6' }
        @eq ( Ωilxt_297 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.ws',            hit: ' ', pos: '1:6:7' }
        @eq ( Ωilxt_298 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'h', pos: '1:7:8' }
        @eq ( Ωilxt_299 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'a', pos: '1:8:9' }
        @eq ( Ωilxt_300 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 's', pos: '1:9:10' }
        @eq ( Ωilxt_301 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.ws',            hit: ' ', pos: '1:10:11' }
        @eq ( Ωilxt_302 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.number_start',  hit: '', pos: '1:11:11' }
        @eq ( Ωilxt_303 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.digit',       hit: '3', pos: '1:11:12' }
        @eq ( Ωilxt_304 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.digit',       hit: '5', pos: '1:12:13' }
        @eq ( Ωilxt_305 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.digit',       hit: '5', pos: '1:13:14' }
        @eq ( Ωilxt_306 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.digit',       hit: '6', pos: '1:14:15' }
        @eq ( Ωilxt_307 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.digit',       hit: '.', pos: '1:15:16' }
        @eq ( Ωilxt_308 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.digit',       hit: '3', pos: '1:16:17' }
        @eq ( Ωilxt_309 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.number_stop', hit: '', pos: '1:17:17' }
        @eq ( Ωilxt_310 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.ws',            hit: ' ', pos: '1:17:18' }
        @eq ( Ωilxt_311 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'P', pos: '1:18:19' }
        @eq ( Ωilxt_312 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'e', pos: '1:19:20' }
        @eq ( Ωilxt_313 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 't', pos: '1:20:21' }
        @eq ( Ωilxt_314 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'a', pos: '1:21:22' }
        @eq ( Ωilxt_315 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'b', pos: '1:22:23' }
        @eq ( Ωilxt_316 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'y', pos: '1:23:24' }
        @eq ( Ωilxt_317 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 't', pos: '1:24:25' }
        @eq ( Ωilxt_318 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'e', pos: '1:25:26' }
        @eq ( Ωilxt_319 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 's', pos: '1:26:27' }
        @eq ( Ωilxt_320 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
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
        # g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_321', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
        info 'Ωilxt_322', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_323 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'R\\2D\\2',  pos: '1:0:6' }
        @eq ( Ωilxt_324 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.ws',            hit: ' ',         pos: '1:6:7' }
        @eq ( Ωilxt_325 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'has',       pos: '1:7:10' }
        @eq ( Ωilxt_326 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.ws',            hit: ' ',         pos: '1:10:11' }
        @eq ( Ωilxt_327 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.number_start',  hit: '',          pos: '1:11:11' }
        @eq ( Ωilxt_328 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.digit',       hit: '3556.3',    pos: '1:11:17' }
        @eq ( Ωilxt_329 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.number_stop', hit: '',          pos: '1:17:17' }
        @eq ( Ωilxt_330 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.ws',            hit: ' ',         pos: '1:17:18' }
        @eq ( Ωilxt_331 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.text',          hit: 'Petabytes', pos: '1:18:27' }
        @eq ( Ωilxt_332 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
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
        # g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_333', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
        info 'Ωilxt_334', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_335 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.name', hit: 'ArcBoCyDeen', pos: '1:0:11', data: { initial: [ 'A', 'B', 'C', 'D' ] }, }
        @eq ( Ωilxt_336 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
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
        # g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_337', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
        info 'Ωilxt_338', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_339 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.name', hit: 'ArcBoCyDeen', pos: '1:0:11', data: { initial: 'D' }, }
        @eq ( Ωilxt_340 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
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
        # g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_341', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
        info 'Ωilxt_342', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_343 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.name', hit: 'Arc', pos: '1:0:3', data: { initial: [ 'A', ] }, }
        @eq ( Ωilxt_344 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
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
        # g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_345', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
        info 'Ωilxt_346', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_347 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.name', hit: 'ArcBoCyDeen', pos: '1:0:11', data: { initial: [ 'A', 'B', 'C', 'D', ], } }
        @eq ( Ωilxt_348 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
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
        # g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_349', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
        info 'Ωilxt_350', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_351 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.name', hit: 'ArcBoCyDeen', pos: '1:0:11', data: { parts: [ 'Arc', 'Bo', 'Cy', 'Deen' ], initials: [ 'A', 'B', 'C', 'D' ] } }
        @eq ( Ωilxt_352 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      return null

    # #-------------------------------------------------------------------------------------------------------
    # token_merging_with_merge_join: ->
    #   { Grammar
    #     internals
    #     rx      } = require '../../../apps/interlex'
    #   #=====================================================================================================
    #   g         = new Grammar { name: 'g', emit_signals: false, }
    #   text      = g.new_level { name: 'text', }
    #   #.....................................................................................................
    #   fit = /// (?<parts> (?<initials> \p{Uppercase_Letter} ) \p{Lowercase_Letter}+ ) ///v
    #   text.new_token { name: 'name', fit, merge: 'join', }
    #   #.....................................................................................................
    #   do =>
    #     source = "ArcBoCyDeen"
    #     # g.reset_lnr(); echo abbrlxm lxm for lxm from g.scan source
    #     # info 'Ωilxt_353', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
    #     info 'Ωilxt_354', rpr source; g.reset_lnr(); lexemes = g.scan source
    #     @eq ( Ωilxt_355 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.name', hit: 'ArcBoCyDeen', pos: '1:0:11', data: { parts: [ 'ArcBoCyDeen' ], initials: [ 'ABCD' ] } }
    #     @eq ( Ωilxt_356 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
    #     return null
    #   return null

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
      @eq ( Ωilxt_357 = -> lexeme.groups              ), undefined
      @eq ( Ωilxt_358 = -> lexeme.data?               ), true
      @eq ( Ωilxt_359 = -> lexeme.has_data            ), true
      @eq ( Ωilxt_360 = -> lexeme.data.constructor    ), undefined
      @eq ( Ωilxt_361 = -> lexeme.data.initial        ), 'B'
      @eq ( Ωilxt_362 = -> lexeme.data.tail           ), 'robdignac'
      return null

    #-------------------------------------------------------------------------------------------------------
    reset_data: ->
      { Grammar } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g       = new Grammar()
        g_data  = g.data
        @eq ( Ωilxt_363 = -> type_of g.reset_data   ), 'function'
        @eq ( Ωilxt_364 = -> type_of g.assign       ), 'function'
        @eq ( Ωilxt_365 = -> g.data                 ), {}
        @eq ( Ωilxt_366 = -> g.data is g_data       ), true
        g.assign { key: 'value', }
        @eq ( Ωilxt_367 = -> g.data                 ), { key: 'value', }
        @eq ( Ωilxt_368 = -> g.data is g_data       ), true
        return null
      #.....................................................................................................
      do =>
        g       = new Grammar()
        g_data  = g.data
        g.assign { key: 'value', }
        @throws ( Ωilxt_369 = -> g.reset_data false ), /does not accept arguments/
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
        @eq ( Ωilxt_370 = -> g.data                           ), template
        @eq ( Ωilxt_371 = -> g.data       is template         ), false
        @eq ( Ωilxt_372 = -> g.data.list  is template.list    ), true
        @eq ( Ωilxt_373 = -> g.data.set   is template.set     ), true
        return null
      #.....................................................................................................
      do =>
        template  = { one: 1, list: ( -> [] ), set: ( -> new Set() ), }
        matcher   = { one: 1, list: [], set: new Set(), }
        g         = new Grammar { data: template, }
        ### guy_test doesn't currently recognize nested maps, sets so we're doing it the long way ###
        # @eq ( Ωilxt_374 = -> g.data                           ), matcher
        @eq ( Ωilxt_375 = -> g.data       is template         ), false
        @eq ( Ωilxt_376 = -> g.data.list  is template.list    ), false
        @eq ( Ωilxt_377 = -> g.data.set   is template.set     ), false
        @eq ( Ωilxt_378 = -> type_of g.data.list              ), 'list'
        @eq ( Ωilxt_379 = -> type_of g.data.set               ), 'set'
        return null
      #.....................................................................................................
      do =>
        template  = { count: 1, list: ( -> [] ), }
        matcher   = { count: 1, list: (    [] ), }
        g         = new Grammar { data: template, }
        ### guy_test doesn't currently recognize nested maps, sets so we're doing it the long way ###
        # @eq ( Ωilxt_380 = -> g.data                           ), matcher
        @eq ( Ωilxt_381 = -> g.data.count                         ), matcher.count
        @eq ( Ωilxt_382 = -> g.data.list                          ), matcher.list
        @eq ( Ωilxt_383 = -> g.cfg.data.count is template.count   ), true
        @eq ( Ωilxt_384 = -> g.cfg.data.list  is g.cfg.data.list  ), false
        @eq ( Ωilxt_385 = -> std.list.isa g.cfg.data.list         ), true
        g.data.count++
        g.data.list.push 'value'
        @eq ( Ωilxt_386 = -> g.data.count                         ), 2
        @eq ( Ωilxt_387 = -> g.data.list                          ), [ 'value', ]
        g.reset_data()
        @eq ( Ωilxt_388 = -> g.data.count                         ), matcher.count
        @eq ( Ωilxt_389 = -> g.data.list                          ), matcher.list
        return null
      #.....................................................................................................
      do =>
        template  = { count: 1, }
        g         = new Grammar { data: template, }
        ### guy_test doesn't currently recognize nested maps, sets so we're doing it the long way ###
        # @eq ( Ωilxt_390 = -> g.data                           ), matcher
        @eq (                                 Ωilxt_391 = -> g.data.count ), 1
        g.data.count++;                 @eq ( Ωilxt_392 = -> g.data.count ), 2
        g.reset_data();                 @eq ( Ωilxt_393 = -> g.data.count ), 1
        g.data.count++; g.reset_data(); @eq ( Ωilxt_394 = -> g.data.count ), 1
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    grammar_cfg_reset_lnr: ->
      { Grammar } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        @eq ( Ωilxt_395 = -> ( new Grammar() ).cfg.reset_lnr ), false
      #.....................................................................................................
      do =>
        g         = new Grammar { reset_lnr: false, }
        gnd       = g.new_level { name: 'gnd', }
        text      = gnd.new_token { name: 'text', fit: /.+/, }
        @eq ( Ωilxt_396 = -> g.state.lnr  ), 1
        lexeme = g.scan_first 'helo'
        @eq ( Ωilxt_397 = -> lexeme.lnr   ), 1
        @eq ( Ωilxt_398 = -> g.state.lnr  ), 2
        lexeme = g.scan_first 'how'
        @eq ( Ωilxt_399 = -> lexeme.lnr   ), 2
        @eq ( Ωilxt_400 = -> g.state.lnr  ), 3
      #.....................................................................................................
      do =>
        g         = new Grammar { reset_lnr: true, }
        gnd       = g.new_level { name: 'gnd', }
        text      = gnd.new_token { name: 'text', fit: /.+/, }
        @eq ( Ωilxt_401 = -> g.state.lnr  ), 1
        lexeme = g.scan_first 'helo'
        @eq ( Ωilxt_402 = -> lexeme.lnr   ), 1
        @eq ( Ωilxt_403 = -> g.state.lnr  ), 1
        lexeme = g.scan_first 'how'
        @eq ( Ωilxt_404 = -> lexeme.lnr   ), 1
        @eq ( Ωilxt_405 = -> g.state.lnr  ), 1
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    grammar_cfg_reset_data: ->
      { Grammar } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        @eq ( Ωilxt_406 = -> ( new Grammar() ).cfg.reset_data ), false
      #.....................................................................................................
      do =>
        g         = new Grammar { data: { count: 1, hits: ( -> [] ), }, reset_data: false, }
        gnd       = g.new_level { name: 'gnd', }
        text      = gnd.new_token { name: 'text', fit: /.+/, }
        hits      = g.data.hits
        @eq ( Ωilxt_407 = -> g.data.count         ), 1
        g.data.count++
        lexeme = g.scan_first 'helo'
        g.data.hits.push lexeme.hit
        @eq ( Ωilxt_408 = -> g.data.count         ), 2
        @eq ( Ωilxt_409 = -> g.data.hits          ), [ 'helo', ]
        g.data.count++
        lexeme = g.scan_first 'how'
        g.data.hits.push lexeme.hit
        @eq ( Ωilxt_410 = -> g.data.count         ), 3
        @eq ( Ωilxt_411 = -> g.data.hits          ), [ 'helo', 'how', ]
        @eq ( Ωilxt_412 = -> g.data.hits is hits  ), true
      #.....................................................................................................
      do =>
        g         = new Grammar { data: { count: 1, hits: ( -> [] ), }, reset_data: true, }
        gnd       = g.new_level { name: 'gnd', }
        text      = gnd.new_token { name: 'text', fit: /.+/, }
        hits      = g.data.hits
        @eq ( Ωilxt_413 = -> g.data.count         ), 1
        g.data.count++
        lexeme = g.scan_first 'helo'
        g.data.hits.push lexeme.hit
        @eq ( Ωilxt_414 = -> g.data.count         ), 1
        @eq ( Ωilxt_415 = -> g.data.hits          ), [ 'helo', ]
        g.data.count++
        lexeme = g.scan_first 'how'
        g.data.hits.push lexeme.hit
        @eq ( Ωilxt_416 = -> g.data.count         ), 1
        @eq ( Ωilxt_417 = -> g.data.hits          ), [ 'how', ]
        @eq ( Ωilxt_418 = -> g.data.hits is hits  ), false
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    grammar_cfg_reset_errors: ->
      { Grammar } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        @eq ( Ωilxt_419 = -> ( new Grammar() ).cfg.reset_errors ), false
      #.....................................................................................................
      do =>
        g         = new Grammar { data: { count: 1, hits: ( -> [] ), }, reset_errors: false, }
        gnd       = g.new_level { name: 'gnd', }
        text      = gnd.new_token { name: 'text', fit: /[0-9]+/, }
        hits      = g.data.hits
        lexeme = g.scan_first 'helo'
        @eq ( Ωilxt_420 = -> g.state.errors.length    ), 1
        @eq ( Ωilxt_421 = -> g.has_errors             ), true
        lexeme = g.scan_first 'how'
        @eq ( Ωilxt_422 = -> g.state.errors.length    ), 2
        @eq ( Ωilxt_423 = -> g.has_errors             ), true
        lexeme = g.scan_first '753'
        @eq ( Ωilxt_424 = -> g.state.errors.length    ), 2
        @eq ( Ωilxt_425 = -> g.has_errors             ), true
      # #.....................................................................................................
      # do =>
      #   g         = new Grammar { data: { count: 1, hits: ( -> [] ), }, reset_errors: true, }
      #   gnd       = g.new_level { name: 'gnd', }
      #   text      = gnd.new_token { name: 'text', fit: /[0-9]+/, }
      #   hits      = g.data.hits
      #   lexeme = g.scan_first 'helo'
      #   @eq ( Ωilxt_426 = -> g.data.hits          ), [ 'helo', ]
      #   lexeme = g.scan_first 'how'
      #   @eq ( Ωilxt_427 = -> g.data.hits          ), [ 'how', ]
      #   @eq ( Ωilxt_428 = -> g.data.hits is hits  ), false
      #.....................................................................................................
      return null

    # #-------------------------------------------------------------------------------------------------------
    # reset: ->
    #   { Grammar } = require '../../../apps/interlex'
    #   #.....................................................................................................
    #   do =>
    #     template  = { one: 1, list: [], set: new Set(), }
    #     g         = new Grammar { data: template, }
    #     @eq ( Ωilxt_429 = -> g.data                           ), template
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
      @eq ( Ωilxt_430 = -> ( new Grammar { emit_signals: false,         } ).cfg.emit_signals ), false
      @eq ( Ωilxt_431 = -> ( new Grammar { emit_signals: true,          } ).cfg.emit_signals ), true
      @eq ( Ωilxt_432 = -> ( new Grammar {}                               ).cfg.emit_signals ), true
      @eq ( Ωilxt_433 = -> ( new Grammar()                                ).cfg.emit_signals ), true
      return null

    #-------------------------------------------------------------------------------------------------------
    lexeme_props: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, loop_errors: 'emit', }
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
        # info 'Ωilxt_434', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
        # info 'Ωilxt_435', rpr source; g.reset_lnr(); echo extract_props lexeme for lexeme from g.scan source
        info 'Ωilxt_436', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_437 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',          is_system: true,  is_error: false, is_signal: true,  is_user: false, }
        @eq ( Ωilxt_438 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           is_system: true,  is_error: false, is_signal: true,  is_user: false, }
        @eq ( Ωilxt_439 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: 'level_one.to_level_two', is_system: false, is_error: false, is_signal: false, is_user: true, }
        @eq ( Ωilxt_440 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           is_system: true,  is_error: false, is_signal: true,  is_user: false, }
        @eq ( Ωilxt_441 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: 'level_two.to_level_one', is_system: false, is_error: false, is_signal: false, is_user: true, }
        @eq ( Ωilxt_442 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: '$error.loop',            is_system: true,  is_error: true,  is_signal: false, is_user: false, }
        @eq ( Ωilxt_443 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           is_system: true,  is_error: false, is_signal: true,  is_user: false, }
        @eq ( Ωilxt_444 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: '$error.earlystop',       is_system: true,  is_error: true,  is_signal: false, is_user: false, }
        @eq ( Ωilxt_445 = -> extract_props tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',           is_system: true,  is_error: false, is_signal: true,  is_user: false, }
        @eq ( Ωilxt_446 = -> extract_props tabulate_lexeme lexemes.next().value ), null
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
        info 'Ωilxt_447', rpr source; tabulate_lexemes g.scan source
        # info 'Ωilxt_448', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_449', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_450 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',        hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_451 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:0:0', data: { target: 'number' } }
        @eq ( Ωilxt_452 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.before_digits', hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_453 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '99', pos: '1:0:2' }
        @eq ( Ωilxt_454 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',          hit: 'kg', pos: '1:2:4' }
        @eq ( Ωilxt_455 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:4:4', data: { target: 'number' } }
        @eq ( Ωilxt_456 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.before_digits', hit: '',   pos: '1:4:4' }
        @eq ( Ωilxt_457 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '23', pos: '1:4:6' }
        @eq ( Ωilxt_458 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',          hit: 'mm', pos: '1:6:8' }
        @eq ( Ωilxt_459 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:8:8', data: { target: null } }
        @eq ( Ωilxt_460 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',         hit: '',   pos: '1:8:8' }
        @eq ( Ωilxt_461 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
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
        level_one = g.new_level { name: 'level_one',  }
        level_two = g.new_level { name: 'level_two',  }
        #...................................................................................................
        level_one.new_token { name: 'to_level_two', fit:  /(?=)/, jump: 'level_two', }
        level_two.new_token { name: 'to_level_one', fit:  /|/,    jump: 'level_one', }
        #...................................................................................................
        source = "doesn't matter"
        # info 'Ωilxt_462', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
        # info 'Ωilxt_463', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_464', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_465 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',          hit: '', pos: '1:0:0' }
        @eq ( Ωilxt_466 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           hit: '', pos: '1:0:0', data: { target: 'level_one' } }
        @eq ( Ωilxt_467 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'level_one.to_level_two', hit: '', pos: '1:0:0' }
        @eq ( Ωilxt_468 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           hit: '', pos: '1:0:0', data: { target: 'level_two' } }
        @eq ( Ωilxt_469 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'level_two.to_level_one', hit: '', pos: '1:0:0' }
        @throws ( Ωilxt_470 = -> abbrlxm tabulate_lexeme lexemes.next().value ), /encountered loop/
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
        level_one = g.new_level { name: 'level_one',  }
        level_two = g.new_level { name: 'level_two',  }
        #...................................................................................................
        level_one.new_token { name: 'to_level_two', fit:  /(?=)/, jump: 'level_two', }
        level_two.new_token { name: 'to_level_one', fit:  /|/,    jump: 'level_one', }
        #...................................................................................................
        source = "doesn't matter"
        # info 'Ωilxt_471', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
        # info 'Ωilxt_472', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_473', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_474 = -> g.has_errors ), false
        @eq ( Ωilxt_475 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',          hit: '',               pos: '1:0:0' }
        @eq ( Ωilxt_476 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           hit: '',               pos: '1:0:0', data: { target: 'level_one' } }
        @eq ( Ωilxt_477 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'level_one.to_level_two', hit: '',               pos: '1:0:0' }
        @eq ( Ωilxt_478 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           hit: '',               pos: '1:0:0', data: { target: 'level_two' } }
        @eq ( Ωilxt_479 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'level_two.to_level_one', hit: '',               pos: '1:0:0' }
        @eq ( Ωilxt_480 = -> g.has_errors ), false
        @eq ( Ωilxt_481 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$error.loop',            hit: '',               pos: '1:0:0', data: { message: "encountered loop at position +0 (indicated by '⚠': '⚠doesn\\'t matter')" } }
        @eq ( Ωilxt_482 = -> g.has_errors ), true
        @eq ( Ωilxt_483 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',           hit: '',               pos: '1:0:0', data: { target: null } }
        @eq ( Ωilxt_484 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$error.earlystop',       hit: "doesn't matter", pos: '1:0:14', data: { message: 'expected stop at 14, got +0' } }
        @eq ( Ωilxt_485 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',           hit: '',               pos: '1:0:0' }
        @eq ( Ωilxt_486 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        @eq ( Ωilxt_487 = -> g.has_errors ), true
        lexemes = g.scan source
        abbrlxm lexemes.next().value
        @eq ( Ωilxt_488 = -> g.has_errors ), true
        return null
        #...................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    has_errors: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      g         = new Grammar { name: 'g', reset_errors: true, emit_signals: true, loop_errors: 'emit', }
      gnd       = g.new_level { name: 'gnd', }
      @eq ( Ωilxt_489 = -> [ g.state.errors.length, g.has_errors, ] ), [ 0, false ]
      #.....................................................................................................
      g.state.errors.push null
      g.state.errors.push null
      @eq ( Ωilxt_490 = -> [ g.state.errors.length, g.has_errors, ] ), [ 2, true ]
      lexemes = g.scan 'ghi'
      @eq ( Ωilxt_491 = -> [ g.state.errors.length, g.has_errors, ] ), [ 2, true ]
      @eq ( Ωilxt_492 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',    hit: '',    pos: '1:0:0' }
      @eq ( Ωilxt_493 = -> [ g.state.errors.length, g.has_errors, ] ), [ 0, false ]
      @eq ( Ωilxt_494 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',     hit: '',    pos: '1:0:0', data: { target: null } }
      @eq ( Ωilxt_495 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$error.earlystop', hit: 'ghi', pos: '1:0:3', data: { message: 'expected stop at 3, got +0' } }
      @eq ( Ωilxt_496 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',     hit: '',    pos: '1:0:0' }
      @eq ( Ωilxt_497 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
      @eq ( Ωilxt_498 = -> [ g.state.errors.length, g.has_errors, ] ), [ 1, true ]
      return null

    #-------------------------------------------------------------------------------------------------------
    can_throw_earlystop_errors: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      g         = new Grammar { name: 'g', reset_errors: true, emit_signals: true, loop_errors: 'emit', earlystop_errors: 'throw', }
      gnd       = g.new_level { name: 'gnd', }
      @eq ( Ωilxt_499 = -> [ g.state.errors.length, g.has_errors, ] ), [ 0, false ]
      #.....................................................................................................
      g.state.errors.push null
      g.state.errors.push null
      @eq ( Ωilxt_500 = -> [ g.state.errors.length, g.has_errors, ] ), [ 2, true ]
      lexemes = g.scan 'ghi'
      @eq ( Ωilxt_501 = -> [ g.state.errors.length, g.has_errors, ] ), [ 2, true ]
      @eq ( Ωilxt_502 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',    hit: '',    pos: '1:0:0' }
      @eq ( Ωilxt_503 = -> [ g.state.errors.length, g.has_errors, ] ), [ 0, false ]
      @throws ( Ωilxt_504 = -> abbrlxm tabulate_lexeme lexemes.next().value ), /expected stop at 3/
      return null

    #-------------------------------------------------------------------------------------------------------
    ok_when_levels_back_to_back: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, }
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
        # info 'Ωilxt_505', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
        # info 'Ωilxt_506', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_507', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_508 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start', hit: '',        pos: '1:0:0' }
        @eq ( Ωilxt_509 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:0:0', data: { target: 'text' } }
        @eq ( Ωilxt_510 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.pretag',   hit: '',        pos: '1:0:0' }
        @eq ( Ωilxt_511 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:0:0', data: { target: 'tag' } }
        @eq ( Ωilxt_512 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'tag.tag',       hit: '<tag-a>', pos: '1:0:7' }
        @eq ( Ωilxt_513 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:7:7', data: { target: 'text' } }
        @eq ( Ωilxt_514 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'text.pretag',   hit: '',        pos: '1:7:7' }
        @eq ( Ωilxt_515 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:7:7', data: { target: 'tag' } }
        @eq ( Ωilxt_516 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'tag.tag',       hit: '<tag-b>', pos: '1:7:14' }
        @eq ( Ωilxt_517 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:14:14', data: { target: null } }
        @eq ( Ωilxt_518 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',  hit: '',        pos: '1:14:14' }
        @eq ( Ωilxt_519 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
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
        text  = g.new_level { name: 'text', }
        tag   = g.new_level { name: 'tag',  }
        #...................................................................................................
        text.new_token { name: 'pretag',    fit:  /(?=<)/,      jump: 'tag',  emit: false, }
        text.new_token { name: 'text',      fit:  /[^<]+/,      jump: null,   }
        tag.new_token  { name: 'tag',       fit:  /<[^>]*>+?/,  jump: '..', }
        #...................................................................................................
        # source = "<tag-a><tag-b><tag-c><tag-d>"
        # source = "<tag-a><tag-b><tag-c>"
        # source = "<tag-a>c<tag-b>"
        # source = "<tag-a>"
        # source = "text1<tag-a>text2<tag-b>text3"
        source = "<tag-a><tag-b>"
        info 'Ωilxt_520', rpr source; g.reset_lnr(); tabulate_lexemes g.scan source
        # info 'Ωilxt_521', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_522', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_523 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start', hit: '',        pos: '1:0:0' }
        @eq ( Ωilxt_524 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:0:0', data: { target: 'tag' } }
        @eq ( Ωilxt_525 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'tag.tag',       hit: '<tag-a>', pos: '1:0:7' }
        @eq ( Ωilxt_526 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:7:7', data: { target: 'tag' } }
        @eq ( Ωilxt_527 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'tag.tag',       hit: '<tag-b>', pos: '1:7:14' }
        @eq ( Ωilxt_528 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',        pos: '1:14:14', data: { target: null } }
        @eq ( Ωilxt_529 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',  hit: '',        pos: '1:14:14' }
        @eq ( Ωilxt_530 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
        #...................................................................................................
      return null

  #=========================================================================================================
  user_errors:

    #-------------------------------------------------------------------------------------------------------
    user_error_declared_on_token: ->
      { Grammar
        rx
        internals } = require '../../../apps/interlex'
      #=====================================================================================================
      cast = ({ hit, start, source, new_lexeme, lexeme, }) ->
        unless hit is 'c'
          yield lexeme
          return null
        yield new_lexeme 'error.nolikedis', start, source, { letter: hit, }
        return null
      #.....................................................................................................
      g         = new Grammar { name: 'g', emit_signals: true, }
      gnd       = g.new_level { name: 'gnd', }
      error     = g.new_level { name: 'error', }
      #.....................................................................................................
      name1 = gnd.new_token { name: 'name1',           fit: rx"(?<initial>[A-Z])", merge: true, }
      name2 = gnd.new_token { name: 'name2',           fit: rx"(?<lower>[a-z])",   merge: true, cast, }
      error.new_token       { name: 'nolikedis',       fit: rx".",                 merge: true, }
      #.....................................................................................................
      @eq ( Ωilxt_531 = -> g.cast               ), null
      @eq ( Ωilxt_532 = -> g.cast_method        ), null
      @eq ( Ωilxt_533 = -> gnd.cast             ), null
      @eq ( Ωilxt_534 = -> gnd.cast_method      ), null
      @eq ( Ωilxt_535 = -> error.cast           ), null
      @eq ( Ωilxt_536 = -> error.cast_method    ), null
      @eq ( Ωilxt_537 = -> name2.cast is cast   ), true
      @eq ( Ωilxt_538 = -> name2.cast_method    ), 'walk'
      #.....................................................................................................
      source = "Acceptreject"
      # info 'Ωilxt_539', rpr source; tabulate_lexemes g.scan source
      # info 'Ωilxt_540', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
      info 'Ωilxt_541', rpr source; g.reset_lnr(); lexemes = g.scan source
      @eq ( Ωilxt_542 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',   hit: '', pos: '1:0:0' }
      @eq ( Ωilxt_543 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:0:0', data: { target: 'gnd' } }
      @eq ( Ωilxt_544 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name1',       hit: 'A', pos: '1:0:1', data: { initial: [ 'A' ] } }
      @eq ( Ωilxt_545 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:1:1', data: { target: 'error' } }
      @eq ( Ωilxt_546 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'error.nolikedis', hit: 'cc', pos: '1:1:3', data: { letter: [ 'c', 'c' ] } }
      @eq ( Ωilxt_547 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:3:3', data: { target: 'gnd' } }
      @eq ( Ωilxt_548 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name2',       hit: 'eptreje', pos: '1:3:10', data: { lower: [ 'e', 'p', 't', 'r', 'e', 'j', 'e' ] } }
      @eq ( Ωilxt_549 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:10:10', data: { target: 'error' } }
      @eq ( Ωilxt_550 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'error.nolikedis', hit: 'c', pos: '1:10:11', data: { letter: [ 'c' ] } }
      @eq ( Ωilxt_551 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:11:11', data: { target: 'gnd' } }
      @eq ( Ωilxt_552 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name2',       hit: 't', pos: '1:11:12', data: { lower: [ 't' ] } }
      @eq ( Ωilxt_553 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:12:12', data: { target: null } }
      @eq ( Ωilxt_554 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',    hit: '', pos: '1:12:12' }
      @eq ( Ωilxt_555 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    user_error_declared_on_level: ->
      { Grammar
        rx
        internals } = require '../../../apps/interlex'
      #=====================================================================================================
      cast = ({ hit, start, source, new_lexeme, lexeme, }) ->
        unless hit is 'c'
          yield lexeme
          return null
        yield new_lexeme 'error.nolikedis', start, source, { letter: hit, }
        return null
      #.....................................................................................................
      g         = new Grammar { name: 'g', emit_signals: true, }
      gnd       = g.new_level { name: 'gnd', cast, }
      error     = g.new_level { name: 'error', }
      #.....................................................................................................
      name1 = gnd.new_token { name: 'name1',           fit: rx"(?<initial>[A-Z])", merge: true, }
      name2 = gnd.new_token { name: 'name2',           fit: rx"(?<lower>[a-z])",   merge: true, }
      error.new_token       { name: 'nolikedis',       fit: rx".",                 merge: true, }
      #.....................................................................................................
      @eq ( Ωilxt_556 = -> g.cast               ), null
      @eq ( Ωilxt_557 = -> g.cast_method        ), null
      @eq ( Ωilxt_558 = -> gnd.cast is cast     ), true
      @eq ( Ωilxt_559 = -> gnd.cast_method      ), 'walk'
      @eq ( Ωilxt_560 = -> error.cast           ), null
      @eq ( Ωilxt_561 = -> error.cast_method    ), null
      @eq ( Ωilxt_562 = -> name2.cast           ), null
      @eq ( Ωilxt_563 = -> name2.cast_method    ), null
      #.....................................................................................................
      source = "Acceptreject"
      # info 'Ωilxt_564', rpr source; tabulate_lexemes g.scan source
      # info 'Ωilxt_565', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
      info 'Ωilxt_566', rpr source; g.reset_lnr(); lexemes = g.scan source
      @eq ( Ωilxt_567 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',   hit: '', pos: '1:0:0' }
      @eq ( Ωilxt_568 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:0:0', data: { target: 'gnd' } }
      @eq ( Ωilxt_569 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name1',       hit: 'A', pos: '1:0:1', data: { initial: [ 'A' ] } }
      @eq ( Ωilxt_570 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:1:1', data: { target: 'error' } }
      @eq ( Ωilxt_571 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'error.nolikedis', hit: 'cc', pos: '1:1:3', data: { letter: [ 'c', 'c' ] } }
      @eq ( Ωilxt_572 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:3:3', data: { target: 'gnd' } }
      @eq ( Ωilxt_573 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name2',       hit: 'eptreje', pos: '1:3:10', data: { lower: [ 'e', 'p', 't', 'r', 'e', 'j', 'e' ] } }
      @eq ( Ωilxt_574 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:10:10', data: { target: 'error' } }
      @eq ( Ωilxt_575 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'error.nolikedis', hit: 'c', pos: '1:10:11', data: { letter: [ 'c' ] } }
      @eq ( Ωilxt_576 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:11:11', data: { target: 'gnd' } }
      @eq ( Ωilxt_577 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name2',       hit: 't', pos: '1:11:12', data: { lower: [ 't' ] } }
      @eq ( Ωilxt_578 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:12:12', data: { target: null } }
      @eq ( Ωilxt_579 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',    hit: '', pos: '1:12:12' }
      @eq ( Ωilxt_580 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    user_error_declared_on_grammar: ->
      { Grammar
        rx
        internals } = require '../../../apps/interlex'
      #=====================================================================================================
      cast = ({ hit, start, source, new_lexeme, lexeme, }) ->
        unless hit is 'c'
          yield lexeme
          return null
        yield new_lexeme 'error.nolikedis', start, source, { letter: hit, }
        return null
      #.....................................................................................................
      g         = new Grammar { name: 'g', emit_signals: true, cast, }
      gnd       = g.new_level { name: 'gnd', }
      error     = g.new_level { name: 'error', }
      #.....................................................................................................
      name1 = gnd.new_token { name: 'name1',           fit: rx"(?<initial>[A-Z])", merge: true, }
      name2 = gnd.new_token { name: 'name2',           fit: rx"(?<lower>[a-z])",   merge: true, }
      error.new_token       { name: 'nolikedis',       fit: rx".",                 merge: true, }
      #.....................................................................................................
      @eq ( Ωilxt_581 = -> g.cast is cast       ), true
      @eq ( Ωilxt_582 = -> g.cast_method        ), 'walk'
      @eq ( Ωilxt_583 = -> gnd.cast             ), null
      @eq ( Ωilxt_584 = -> gnd.cast_method      ), null
      @eq ( Ωilxt_585 = -> error.cast           ), null
      @eq ( Ωilxt_586 = -> error.cast_method    ), null
      @eq ( Ωilxt_587 = -> name2.cast           ), null
      @eq ( Ωilxt_588 = -> name2.cast_method    ), null
      #.....................................................................................................
      source = "Acceptreject"
      # info 'Ωilxt_589', rpr source; tabulate_lexemes g.scan source
      # info 'Ωilxt_590', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
      info 'Ωilxt_591', rpr source; g.reset_lnr(); lexemes = g.scan source
      @eq ( Ωilxt_592 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',   hit: '', pos: '1:0:0' }
      @eq ( Ωilxt_593 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:0:0', data: { target: 'gnd' } }
      @eq ( Ωilxt_594 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name1',       hit: 'A', pos: '1:0:1', data: { initial: [ 'A' ] } }
      @eq ( Ωilxt_595 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:1:1', data: { target: 'error' } }
      @eq ( Ωilxt_596 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'error.nolikedis', hit: 'cc', pos: '1:1:3', data: { letter: [ 'c', 'c' ] } }
      @eq ( Ωilxt_597 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:3:3', data: { target: 'gnd' } }
      @eq ( Ωilxt_598 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name2',       hit: 'eptreje', pos: '1:3:10', data: { lower: [ 'e', 'p', 't', 'r', 'e', 'j', 'e' ] } }
      @eq ( Ωilxt_599 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:10:10', data: { target: 'error' } }
      @eq ( Ωilxt_600 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'error.nolikedis', hit: 'c', pos: '1:10:11', data: { letter: [ 'c' ] } }
      @eq ( Ωilxt_601 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:11:11', data: { target: 'gnd' } }
      @eq ( Ωilxt_602 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name2',       hit: 't', pos: '1:11:12', data: { lower: [ 't' ] } }
      @eq ( Ωilxt_603 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '', pos: '1:12:12', data: { target: null } }
      @eq ( Ωilxt_604 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',    hit: '', pos: '1:12:12' }
      @eq ( Ωilxt_605 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
      #.....................................................................................................
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
      # info 'Ωilxt_606', rpr source; tabulate_lexemes g.scan source
      info 'Ωilxt_607', rpr source; g.reset_lnr(); lexemes = g.scan source
      @eq ( Ωilxt_608 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',   hit: '',              pos: '1:0:0' }
      @eq ( Ωilxt_609 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '',              pos: '1:0:0', data: { target: 'gnd' } }
      @eq ( Ωilxt_610 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name',        hit: 'Alice',         pos: '1:0:5', data: { initial: 'A', }, }
      @eq ( Ωilxt_611 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',          hit: ' ',             pos: '1:5:6' }
      @eq ( Ωilxt_612 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.other',       hit: 'in',            pos: '1:6:8' }
      @eq ( Ωilxt_613 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',          hit: ' ',             pos: '1:8:9' }
      @eq ( Ωilxt_614 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name',        hit: 'Cairo',         pos: '1:9:14', data: { initial: 'C', } }
      @eq ( Ωilxt_615 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',          hit: ' ',             pos: '1:14:15' }
      @eq ( Ωilxt_616 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.number',      hit: '1912',          pos: '1:15:19' }
      @eq ( Ωilxt_617 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',          hit: ' ',             pos: '1:19:20' }
      @eq ( Ωilxt_618 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.paren_start', hit: '(',             pos: '1:20:21' }
      @eq ( Ωilxt_619 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.other',       hit: 'approximately', pos: '1:21:34' }
      @eq ( Ωilxt_620 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.paren_stop',  hit: ')',             pos: '1:34:35' }
      @eq ( Ωilxt_621 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',    hit: '',              pos: '1:35:35', data: { target: null } }
      @eq ( Ωilxt_ACCEPT_622 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',    hit: '',              pos: '1:35:35', }
      @eq ( Ωilxt_623 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
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
      # info 'Ωilxt_624', rpr source; tabulate_lexemes g.scan source
      info 'Ωilxt_625', rpr source; g.reset_lnr(); lexemes = g.scan source
      @eq ( Ωilxt_626 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',      hit: '',       pos: '1:0:0' }
      @eq ( Ωilxt_627 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',       hit: '',       pos: '1:0:0', data: { target: 'gnd' } }
      @eq ( Ωilxt_628 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name',           hit: 'Alice',  pos: '1:0:5', data: { initial: 'A', }, }
      @eq ( Ωilxt_629 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',             hit: ' ',      pos: '1:5:6' }
      @eq ( Ωilxt_630 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.other',          hit: 'in',     pos: '1:6:8' }
      @eq ( Ωilxt_631 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',             hit: ' ',      pos: '1:8:9' }
      @eq ( Ωilxt_632 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.name',           hit: 'Cairo',  pos: '1:9:14', data: { initial: 'C', }, }
      @eq ( Ωilxt_633 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',             hit: ' ',      pos: '1:14:15' }
      @eq ( Ωilxt_634 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.number',         hit: '1912',   pos: '1:15:19' }
      @eq ( Ωilxt_635 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.ws',             hit: ' ',      pos: '1:19:20' }
      @eq ( Ωilxt_636 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.string11_start', hit: "'",      pos: '1:20:21' }
      @eq ( Ωilxt_637 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',       hit: '',       pos: '1:21:21', data: { target: 'string11' } }
      @eq ( Ωilxt_638 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string11.text',      hit: 'approximately', pos: '1:21:34' }
      @eq ( Ωilxt_639 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',       hit: '',       pos: '1:34:34', data: { target: null } }
      @eq ( Ωilxt_640 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$error.earlystop',   hit: "'",      pos: '1:34:35', data: { message: 'expected stop at 35, got 34' } }
      @eq ( Ωilxt_641 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',       hit: '',       pos: '1:34:34', }
      @eq ( Ωilxt_642 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
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
        # info 'Ωilxt_643', rpr source; tabulate_lexemes g.scan source
        info 'Ωilxt_644', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_645 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: 'R',           pos: '1:0:1' }
        @eq ( Ωilxt_646 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: '\\2',         pos: '1:1:3' }
        @eq ( Ωilxt_647 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: 'D',           pos: '1:3:4' }
        @eq ( Ωilxt_648 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: '\\2',         pos: '1:4:6' }
        @eq ( Ωilxt_649 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: ' on Charon ', pos: '1:6:17' }
        @eq ( Ωilxt_650 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.number_start', hit: '',            pos: '1:17:17' }
        @eq ( Ωilxt_651 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.number',    hit: '3',           pos: '1:17:18' }
        @eq ( Ωilxt_652 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        source = "R\\2D\\2 on Charon 3!!"
        # echo abbrlxm lxm for lxm from g.scan source
        # info 'Ωilxt_653', rpr source; tabulate_lexemes g.scan source
        info 'Ωilxt_654', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_655 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: 'R',           pos: '1:0:1' }
        @eq ( Ωilxt_656 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: '\\2',         pos: '1:1:3' }
        @eq ( Ωilxt_657 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: 'D',           pos: '1:3:4' }
        @eq ( Ωilxt_658 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: '\\2',         pos: '1:4:6' }
        @eq ( Ωilxt_659 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',         hit: ' on Charon ', pos: '1:6:17' }
        @eq ( Ωilxt_660 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.number_start', hit: '',            pos: '1:17:17' }
        @eq ( Ωilxt_661 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.number',    hit: '3',           pos: '1:17:18' }
        @eq ( Ωilxt_662 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$error.earlystop', hit: '!!',          pos: '1:18:20', data: { message: 'expected stop at 20, got 18' } }
        @eq ( Ωilxt_663 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
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
        @eq ( Ωilxt_664 = -> g.cfg.name           ), 'g'
        @eq ( Ωilxt_665 = -> g.cfg.strategy       ), 'first'
        @eq ( Ωilxt_666 = -> g.cfg.emit_signals   ), true
        return null
      #.........................................................................................................
      do =>
        g = new Grammar { emit_signals: false, }
        @eq ( Ωilxt_667 = -> g.cfg.name           ), 'g'
        @eq ( Ωilxt_668 = -> g.cfg.strategy       ), 'first'
        @eq ( Ωilxt_669 = -> g.cfg.emit_signals   ), false
        return null
      #.........................................................................................................
      return null

  #=========================================================================================================
  linking:

    #-------------------------------------------------------------------------------------------------------
    string_literal_with_line_breaks_staccato: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #=====================================================================================================
      g         = new Grammar { emit_signals: false, }
      gnd       = g.new_level { name: 'gnd', }
      string    = g.new_level { name: 'string', }
      #.....................................................................................................
      gnd.new_token       { name: 'dq1',            fit: /(?<!\\)"/,          jump: 'string!'        }
      gnd.new_token       { name: 'text',           fit: /(\\"|[^"])+/,                              }
      string.new_token    { name: 'string',         fit: /(\\"|[^"])+/,                              }
      string.new_token    { name: 'dq1',            fit: /(?<!\\)"/,          jump: '..'             }
      #.....................................................................................................
      do =>
        g.reset()
        source = 'the word "black bird" is the word\n'
        # info 'Ωilxt_670', rpr source; tabulate_lexemes g.scan source
        # info 'Ωilxt_671', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_672', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_673 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',      hit: 'the word ', pos: '1:0:9' }
        @eq ( Ωilxt_674 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1',    hit: '"', pos: '1:9:10' }
        @eq ( Ωilxt_675 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.string', hit: 'black bird', pos: '1:10:20' }
        @eq ( Ωilxt_676 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1',    hit: '"', pos: '1:20:21' }
        @eq ( Ωilxt_677 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',      hit: ' is the word\n', pos: '1:21:34' }
        @eq ( Ωilxt_678 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g.reset()
        source = 'the word "black\nbird" is the word\n'
        # info 'Ωilxt_679', rpr source; tabulate_lexemes g.scan source
        # info 'Ωilxt_680', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_681', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_682 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',      hit: 'the word ', pos: '1:0:9' }
        @eq ( Ωilxt_683 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1',    hit: '"', pos: '1:9:10' }
        @eq ( Ωilxt_684 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.string', hit: 'black\nbird', pos: '1:10:20' }
        @eq ( Ωilxt_685 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1',    hit: '"', pos: '1:20:21' }
        @eq ( Ωilxt_686 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',      hit: ' is the word\n', pos: '1:21:34' }
        @eq ( Ωilxt_687 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        ### NOTE we here accept a 'wrong' solution b/c the grammar declaration did not specify a continuous
        / legato scan which means that the second line is correctly analyzed as starting on the `text` level
        and ending with an unfinished string literal; ###
        g.reset()
        source1 = 'the word "black\n'
        source2 = 'bird" is the word\n'
        # info 'Ωilxt_688', rpr source1; tabulate_lexemes g.scan source1
        # info 'Ωilxt_689', rpr source1; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source1
        info 'Ωilxt_690', rpr source1; g.reset_lnr(); lexemes = g.scan source1
        @eq ( Ωilxt_691 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text', hit: 'the word ', pos: '1:0:9' }
        @eq ( Ωilxt_692 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1', hit: '"', pos: '1:9:10' }
        @eq ( Ωilxt_693 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.string', hit: 'black\n', pos: '1:10:16' }
        @eq ( Ωilxt_694 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        # info 'Ωilxt_695', rpr source2; tabulate_lexemes g.scan source2
        # info 'Ωilxt_696', rpr source2; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source2
        info 'Ωilxt_697', rpr source2; g.reset_lnr(); lexemes = g.scan source2
        @eq ( Ωilxt_698 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',      hit: 'bird', pos: '1:0:4' }
        @eq ( Ωilxt_699 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1',    hit: '"', pos: '1:4:5' }
        @eq ( Ωilxt_700 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.string', hit: ' is the word\n', pos: '1:5:18' }
        @eq ( Ωilxt_701 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    string_literal_with_linked_scanning: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #=====================================================================================================
      g         = new Grammar { emit_signals: false, linking: true, }
      gnd       = g.new_level { name: 'gnd', }
      string    = g.new_level { name: 'string', }
      #.....................................................................................................
      gnd.new_token       { name: 'dq1',            fit: /(?<!\\)"/,          jump: 'string!' }
      gnd.new_token       { name: 'text',           fit: /(\\"|[^"])+/,                       }
      string.new_token    { name: 'literal',        fit: /(\\"|[^"])+/,                       }
      string.new_token    { name: 'dq1',            fit: /(?<!\\)"/,          jump: '..'      }
      #.....................................................................................................
      @eq ( Ωilxt_702 = -> g.cfg.reset_stack  ), false
      @eq ( Ωilxt_703 = -> g.cfg.linking      ), true
      #.....................................................................................................
      do =>
        g.reset()
        source = 'the word "black bird" is the word\n'
        # info 'Ωilxt_704', rpr source; tabulate_lexemes g.scan source
        # info 'Ωilxt_705', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_706', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_707 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',       hit: 'the word ',      pos: '1:0:9' }
        @eq ( Ωilxt_708 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1',     hit: '"',              pos: '1:9:10' }
        @eq ( Ωilxt_709 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.literal', hit: 'black bird',     pos: '1:10:20' }
        @eq ( Ωilxt_710 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1',     hit: '"',              pos: '1:20:21' }
        @eq ( Ωilxt_711 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',       hit: ' is the word\n', pos: '1:21:34' }
        @eq ( Ωilxt_712 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g.reset()
        source = 'the word "black\nbird" is the word\n'
        # info 'Ωilxt_713', rpr source; tabulate_lexemes g.scan source
        # info 'Ωilxt_714', rpr source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_715', rpr source; g.reset_lnr(); lexemes = g.scan source
        @eq ( Ωilxt_716 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',       hit: 'the word ',      pos: '1:0:9' }
        @eq ( Ωilxt_717 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1',     hit: '"',              pos: '1:9:10' }
        @eq ( Ωilxt_718 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.literal', hit: 'black\nbird',    pos: '1:10:20' }
        @eq ( Ωilxt_719 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1',     hit: '"',              pos: '1:20:21' }
        @eq ( Ωilxt_720 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',       hit: ' is the word\n', pos: '1:21:34' }
        @eq ( Ωilxt_721 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g.reset()
        source1 = 'the word "black\n'
        source2 = 'bird" is the word\n'
        source3 = 'or so I heard\n'
        # info 'Ωilxt_722', rpr source1; tabulate_lexemes g.scan source1
        # info 'Ωilxt_723', rpr source2; tabulate_lexemes g.scan source2
        # info 'Ωilxt_724', rpr source3; tabulate_lexemes g.scan source3
        # info 'Ωilxt_725', rpr source1; echo abbrlxm lexeme for lexeme from g.scan source1
        # info 'Ωilxt_726', rpr source2; echo abbrlxm lexeme for lexeme from g.scan source2
        # info 'Ωilxt_727', rpr source3; echo abbrlxm lexeme for lexeme from g.scan source3
        g.reset()
        info 'Ωilxt_728', rpr source1; lexemes = g.scan source1
        @eq ( Ωilxt_729 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',       hit: 'the word ',       pos: '1:0:9' }
        @eq ( Ωilxt_730 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1',     hit: '"',               pos: '1:9:10' }
        @eq ( Ωilxt_731 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.literal', hit: 'black\n',         pos: '1:10:16' }
        @eq ( Ωilxt_732 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        info 'Ωilxt_733', rpr source2; lexemes = g.scan source2
        @eq ( Ωilxt_734 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.literal', hit: 'bird',            pos: '2:0:4' }
        @eq ( Ωilxt_735 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1',     hit: '"',               pos: '2:4:5' }
        @eq ( Ωilxt_736 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',       hit: ' is the word\n',  pos: '2:5:18' }
        @eq ( Ωilxt_737 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        info 'Ωilxt_738', rpr source3; lexemes = g.scan source3
        @eq ( Ωilxt_739 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',       hit: 'or so I heard\n', pos: '3:0:14' }
        @eq ( Ωilxt_740 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    linked_scanning_with_signals: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #=====================================================================================================
      g         = new Grammar { emit_signals: true, linking: true, }
      gnd       = g.new_level { name: 'gnd', }
      string    = g.new_level { name: 'string', }
      #.....................................................................................................
      gnd.new_token       { name: 'dq1',            fit: /(?<!\\)"/,          jump: 'string!' }
      gnd.new_token       { name: 'text',           fit: /(\\"|[^"])+/,                       }
      string.new_token    { name: 'literal',        fit: /(\\"|[^"])+/,                       }
      string.new_token    { name: 'dq1',            fit: /(?<!\\)"/,          jump: '..'      }
      #.....................................................................................................
      source1 = 'the word "black\n'
      source2 = 'bird" is the word\n'
      source3 = 'or so I heard\n'
      # do =>
      #   g.reset()
      #   info 'Ωilxt_741', rpr source1; tabulate_lexemes g.scan source1
      #   info 'Ωilxt_742', rpr source2; tabulate_lexemes g.scan source2
      #   info 'Ωilxt_743', rpr source3; tabulate_lexemes g.scan source3
      #   info 'Ωilxt_744', rpr null; tabulate_lexemes g.scan null
      #   return null
      # do =>
      #   g.reset()
      #   info 'Ωilxt_745', rpr source1; echo abbrlxm lexeme for lexeme from g.scan source1
      #   info 'Ωilxt_746', rpr source2; echo abbrlxm lexeme for lexeme from g.scan source2
      #   info 'Ωilxt_747', rpr source3; echo abbrlxm lexeme for lexeme from g.scan source3
      #   info 'Ωilxt_748', rpr null; echo abbrlxm lexeme for lexeme from g.scan null
      #   return null
      do =>
        g.reset()
        info 'Ωilxt_749', rpr source1; lexemes = g.scan source1
        @eq ( Ωilxt_750 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',  hit: '',                pos: '1:0:0' }
        @eq ( Ωilxt_751 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',   hit: '',                pos: '1:0:0', data: { target: 'gnd' } }
        @eq ( Ωilxt_752 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',       hit: 'the word ',       pos: '1:0:9' }
        @eq ( Ωilxt_753 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',   hit: '',                pos: '1:9:9', data: { target: 'string' } }
        @eq ( Ωilxt_754 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1',     hit: '"',               pos: '1:9:10' }
        @eq ( Ωilxt_755 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.literal', hit: 'black\n',         pos: '1:10:16' }
        @eq ( Ωilxt_756 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.pause',  hit: '',                pos: '1:16:16' }
        @eq ( Ωilxt_757 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        info 'Ωilxt_758', rpr source2; lexemes = g.scan source2
        @eq ( Ωilxt_759 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.resume', hit: '',                pos: '2:0:0' }
        @eq ( Ωilxt_760 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.literal', hit: 'bird',            pos: '2:0:4' }
        @eq ( Ωilxt_761 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1',     hit: '"',               pos: '2:4:5' }
        @eq ( Ωilxt_762 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',   hit: '',                pos: '2:5:5', data: { target: 'gnd' } }
        @eq ( Ωilxt_763 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',       hit: ' is the word\n',  pos: '2:5:18' }
        @eq ( Ωilxt_764 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.pause',  hit: '',                pos: '2:18:18' }
        @eq ( Ωilxt_765 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        info 'Ωilxt_766', rpr source3; lexemes = g.scan source3
        @eq ( Ωilxt_767 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.resume', hit: '',                pos: '3:0:0' }
        @eq ( Ωilxt_768 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',       hit: 'or so I heard\n', pos: '3:0:14' }
        @eq ( Ωilxt_769 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.pause',  hit: '',                pos: '3:14:14' }
        @eq ( Ωilxt_770 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        info 'Ωilxt_771', rpr null; lexemes = g.scan null
        @eq ( Ωilxt_772 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',   hit: '',                pos: '4:0:0', data: { target: null } }
        @eq ( Ωilxt_773 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',   hit: '',                pos: '4:0:0' }
        @eq ( Ωilxt_774 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    grammar_cfg_supply_eol: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        g = new Grammar()
        @eq ( Ωilxt_775 = -> g.cfg.supply_eol ), false
      #.....................................................................................................
      do =>
        g = new Grammar { supply_eol: false, }
        @eq ( Ωilxt_776 = -> g.cfg.supply_eol ), false
      #.....................................................................................................
      do =>
        g = new Grammar { supply_eol: true, }
        @eq ( Ωilxt_777 = -> g.cfg.supply_eol ), '\n'
      #.....................................................................................................
      do =>
        g = new Grammar { supply_eol: '\n', }
        @eq ( Ωilxt_778 = -> g.cfg.supply_eol ), '\n'
      #.....................................................................................................
      do =>
        g = new Grammar { supply_eol: '(EOL)', }
        @eq ( Ωilxt_779 = -> g.cfg.supply_eol ), '(EOL)'
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    linked_scanning_with_supply_eol: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #=====================================================================================================
      g         = new Grammar { emit_signals: true, linking: true, supply_eol: true, }
      gnd       = g.new_level { name: 'gnd', }
      string    = g.new_level { name: 'string', }
      #.....................................................................................................
      gnd.new_token       { name: 'dq1',            fit: /(?<!\\)"/,          jump: 'string!' }
      gnd.new_token       { name: 'text',           fit: /(\\"|[^"])+/,                       }
      string.new_token    { name: 'literal',        fit: /(\\"|[^"])+/,                       }
      string.new_token    { name: 'dq1',            fit: /(?<!\\)"/,          jump: '..'      }
      #.....................................................................................................
      source1 = 'the word "black'
      source2 = 'bird" is the word'
      source3 = 'or so I heard'
      # do =>
      #   g.reset()
      #   info 'Ωilxt_780', rpr source1; tabulate_lexemes g.scan source1
      #   info 'Ωilxt_781', rpr source2; tabulate_lexemes g.scan source2
      #   info 'Ωilxt_782', rpr source3; tabulate_lexemes g.scan source3
      #   info 'Ωilxt_783', rpr null; tabulate_lexemes g.scan null
      #   return null
      # do =>
      #   g.reset()
      #   info 'Ωilxt_784', rpr source1; echo abbrlxm lexeme for lexeme from g.scan source1
      #   info 'Ωilxt_785', rpr source2; echo abbrlxm lexeme for lexeme from g.scan source2
      #   info 'Ωilxt_786', rpr source3; echo abbrlxm lexeme for lexeme from g.scan source3
      #   info 'Ωilxt_787', rpr null; echo abbrlxm lexeme for lexeme from g.scan null
      #   return null
      do =>
        g.reset()
        info 'Ωilxt_788', rpr source1; lexemes = g.scan source1
        @eq ( Ωilxt_789 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',  hit: '',                pos: '1:0:0' }
        @eq ( Ωilxt_790 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',   hit: '',                pos: '1:0:0', data: { target: 'gnd' } }
        @eq ( Ωilxt_791 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',       hit: 'the word ',       pos: '1:0:9' }
        @eq ( Ωilxt_792 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',   hit: '',                pos: '1:9:9', data: { target: 'string' } }
        @eq ( Ωilxt_793 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1',     hit: '"',               pos: '1:9:10' }
        @eq ( Ωilxt_794 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.literal', hit: 'black\n',         pos: '1:10:16' }
        @eq ( Ωilxt_795 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.pause',  hit: '',                pos: '1:16:16' }
        @eq ( Ωilxt_796 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        info 'Ωilxt_797', rpr source2; lexemes = g.scan source2
        @eq ( Ωilxt_798 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.resume', hit: '',                pos: '2:0:0' }
        @eq ( Ωilxt_799 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.literal', hit: 'bird',            pos: '2:0:4' }
        @eq ( Ωilxt_800 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'string.dq1',     hit: '"',               pos: '2:4:5' }
        @eq ( Ωilxt_801 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',   hit: '',                pos: '2:5:5', data: { target: 'gnd' } }
        @eq ( Ωilxt_802 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',       hit: ' is the word\n',  pos: '2:5:18' }
        @eq ( Ωilxt_803 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.pause',  hit: '',                pos: '2:18:18' }
        @eq ( Ωilxt_804 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        info 'Ωilxt_805', rpr source3; lexemes = g.scan source3
        @eq ( Ωilxt_806 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.resume', hit: '',                pos: '3:0:0' }
        @eq ( Ωilxt_807 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.text',       hit: 'or so I heard\n', pos: '3:0:14' }
        @eq ( Ωilxt_808 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.pause',  hit: '',                pos: '3:14:14' }
        @eq ( Ωilxt_809 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        info 'Ωilxt_810', rpr null; lexemes = g.scan null
        @eq ( Ωilxt_811 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',   hit: '',                pos: '4:0:0', data: { target: null } }
        @eq ( Ωilxt_812 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',   hit: '',                pos: '4:0:0' }
        @eq ( Ωilxt_813 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
      #.....................................................................................................
      return null



#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false, show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true, show_passes: false, report_checks: false, }
  # guytest_cfg = { throw_on_error: false, show_passes: true, report_checks: true, }
  ( new Test guytest_cfg ).test @interlex_tasks
  # ( new Test guytest_cfg ).test { linking: @interlex_tasks.linking, }
  ( new Test guytest_cfg ).test { flexible_new_token_syntax: @interlex_tasks.basics.flexible_new_token_syntax, }
