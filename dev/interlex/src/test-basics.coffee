
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
  ( "#{lexeme?.fqname ? null}#{rpr lexeme?.hit ? null}" for lexeme from lexemes ).join '|'

#-----------------------------------------------------------------------------------------------------------
# abbrlxm = ( lxm ) -> {
#   level:  lxm?.level?.name ? null,
#   fqname: lxm?.fqname      ? null,
#   hit:    lxm?.hit         ? null,
#   pos:    ( if lxm? then "#{lxm.start}:#{lxm.stop}" else null ), }

#-----------------------------------------------------------------------------------------------------------
abbrlxm = ( lxm ) ->
  return null unless lxm?
  R =
    fqname: lxm.fqname
    hit:    lxm.hit
    pos:    "#{lxm.lnr}:#{lxm.start}:#{lxm.stop}"
  R.data = { lxm.data..., } if lxm.has_data
  return R

#-----------------------------------------------------------------------------------------------------------
tabulate_lexemes = ( lexemes ) ->
  tabulate_lexeme lexeme for lexeme from lexemes
  return lexemes

#-----------------------------------------------------------------------------------------------------------
tabulate_lexeme = ( lexeme ) ->
  unless lexeme?
    urge 'Ωilxt___1', lexeme
  else
    alxm      = abbrlxm lexeme
    hit_rpr   = if lexeme.hit is '' then '' else rpr lexeme.hit
    data_rpr  = if lexeme.has_data then rpr { lexeme.data..., } else ''
    I         = GUY.trm.lime '▏'
    # g         = GUY.trm.gold
    urge 'Ωilxt___2', f""" \
      #{I} #{ lexeme.level.name }:<15c; \
      #{I} #{ lexeme.name       }:<15c; \
      #{I} #{ hit_rpr           }:<10c; \
      #{I} #{ alxm.pos          }:<10c; \
      #{I} #{ data_rpr          }:<50c; \
      #{I}"""
  return lexeme


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
      @eq ( Ωilxt___3 = -> jsid_anchored_re.flags ), 'v'
      @eq ( Ωilxt___4 = -> ( ( '_abc3'  ).match jsid_anchored_re  )? ), true
      @eq ( Ωilxt___5 = -> ( ( '_abc$'  ).match jsid_anchored_re  )? ), true
      @eq ( Ωilxt___6 = -> ( ( '$abc'   ).match jsid_anchored_re  )? ), true
      @eq ( Ωilxt___7 = -> ( ( 'abc'    ).match jsid_anchored_re  )? ), true
      @eq ( Ωilxt___8 = -> ( ( '3_abc'  ).match jsid_anchored_re  )? ), false
      @eq ( Ωilxt___9 = -> ( ( '&%'     ).match jsid_anchored_re  )? ), false
      return null

    #-------------------------------------------------------------------------------------------------------
    sort_lexemes_by_length_dec: ->
      { internals } = require '../../../apps/interlex'
      #.....................................................................................................
      @eq ( Ωilxt__10 = -> internals.sort_lexemes_by_length_dec []                                    ), []
      @eq ( Ωilxt__11 = -> internals.sort_lexemes_by_length_dec [ '1', ]                              ), [ '1' ]
      @eq ( Ωilxt__12 = -> internals.sort_lexemes_by_length_dec [ '1', 'i', ]                         ), [ '1', 'i' ]
      @eq ( Ωilxt__13 = -> internals.sort_lexemes_by_length_dec [ '1', '123', '1', '1234', ]          ), [ '1234', '123', '1', '1' ]
      @eq ( Ωilxt__14 = -> internals.sort_lexemes_by_length_dec [ 'abcd', '1234', '1', '123', 'i', ]  ), [ 'abcd', '1234', '123', '1', 'i' ]
      @eq ( Ωilxt__15 = -> internals.sort_lexemes_by_length_dec [ '1234', 'abcd', '1', '123', 'i', ]  ), [ '1234', 'abcd', '123', '1', 'i' ]
      @eq ( Ωilxt__16 = -> internals.sort_lexemes_by_length_dec [ '1234', '1', 'abcd', '123', 'i', ]  ), [ '1234', 'abcd', '123', '1', 'i' ]
      @eq ( Ωilxt__17 = -> internals.sort_lexemes_by_length_dec [ '1234', '1', '123', 'abcd', 'i', ]  ), [ '1234', 'abcd', '123', '1', 'i' ]
      @eq ( Ωilxt__18 = -> internals.sort_lexemes_by_length_dec [ '1234', '1', '123', 'i', 'abcd', ]  ), [ '1234', 'abcd', '123', '1', 'i' ]
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
      @throws ( Ωilxt__19 = -> internals.normalize_regex_flags()                ), /Cannot destructure property 'flags'/
      @throws ( Ωilxt__20 = -> internals.normalize_regex_flags undefined        ), /Cannot destructure property 'flags'/
      @throws ( Ωilxt__21 = -> internals.normalize_regex_flags null             ), /Cannot destructure property 'flags'/
      @eq ( Ωilxt__22 = -> internals.normalize_regex_flags { flags: '',         mode: 'slr', } ), 'dy'
      @eq ( Ωilxt__23 = -> internals.normalize_regex_flags { flags: 'd',        mode: 'slr', } ), 'dy'
      @eq ( Ωilxt__24 = -> internals.normalize_regex_flags { flags: 'y',        mode: 'slr', } ), 'dy'
      @eq ( Ωilxt__25 = -> internals.normalize_regex_flags { flags: 'dy',       mode: 'slr', } ), 'dy'
      @eq ( Ωilxt__26 = -> internals.normalize_regex_flags { flags: 'yd',       mode: 'slr', } ), 'dy'
      #.....................................................................................................
      @eq ( Ωilxt__27 = -> internals.normalize_regex_flags { flags: 'i',        mode: 'slr', } ), 'diy'
      @eq ( Ωilxt__28 = -> internals.normalize_regex_flags { flags: 'g',        mode: 'slr', } ), 'dgy'
      @eq ( Ωilxt__29 = -> internals.normalize_regex_flags { flags: 'm',        mode: 'slr', } ), 'dmy'
      @eq ( Ωilxt__30 = -> internals.normalize_regex_flags { flags: 's',        mode: 'slr', } ), 'dsy'
      @eq ( Ωilxt__31 = -> internals.normalize_regex_flags { flags: 'dgimsuvy', mode: 'slr', } ), 'dgimsy'
      #.....................................................................................................
      @throws ( Ωilxt__32 = -> internals.normalize_regex_flags { flags: 'a',    mode: 'slr', } ), /illegal or duplicate flags/
      @throws ( Ωilxt__33 = -> internals.normalize_regex_flags { flags: 'yy',   mode: 'slr', } ), /illegal or duplicate flags/
      #-----------------------------------------------------------------------------------------------------
      @eq ( Ωilxt__34 = -> internals.normalize_regex /./              ), /./dvy
      @eq ( Ωilxt__35 = -> internals.normalize_regex /./d             ), /./dvy
      @eq ( Ωilxt__36 = -> internals.normalize_regex /./y             ), /./dvy
      @eq ( Ωilxt__37 = -> internals.normalize_regex /./dy            ), /./dvy
      @eq ( Ωilxt__38 = -> internals.normalize_regex /./yd            ), /./dvy
      #.....................................................................................................
      @eq ( Ωilxt__39 = -> internals.normalize_regex /./i             ), /./divy
      @eq ( Ωilxt__40 = -> internals.normalize_regex /./g             ), /./dgvy
      @eq ( Ωilxt__41 = -> internals.normalize_regex /./m             ), /./dmvy
      @eq ( Ωilxt__42 = -> internals.normalize_regex /./s             ), /./dsvy
      @eq ( Ωilxt__43 = -> internals.normalize_regex /./dgimsvy       ), /./dgimsvy
      @eq ( Ωilxt__44 = -> internals.normalize_regex /./dgimsuy       ), /./dgimsvy
      #.....................................................................................................
      @throws ( Ωilxt__45 = -> internals.normalize_regex()            ), /expected a regex, got/
      @throws ( Ωilxt__46 = -> internals.normalize_regex 'helo'       ), /expected a regex, got/
      #-----------------------------------------------------------------------------------------------------
      @eq ( Ωilxt__47 = -> ( new_regex_tag ''       )'.'              ), /./dvy
      @eq ( Ωilxt__48 = -> ( new_regex_tag 'd'      )'.'              ), /./dvy
      @eq ( Ωilxt__49 = -> ( new_regex_tag 'y'      )'.'              ), /./dvy
      @eq ( Ωilxt__50 = -> ( new_regex_tag 'dy'     )'.'              ), /./dvy
      @eq ( Ωilxt__51 = -> ( new_regex_tag 'yd'     )'.'              ), /./dvy
      @eq ( Ωilxt__52 = -> ( new_regex_tag 'd'      ).d'.'            ), /./dvy
      @eq ( Ωilxt__53 = -> ( new_regex_tag 'y'      ).y'.'            ), /./dvy
      @eq ( Ωilxt__54 = -> ( new_regex_tag 'dy'     ).dy'.'           ), /./dvy
      @eq ( Ωilxt__55 = -> ( new_regex_tag 'yd'     ).yd'.'           ), /./dvy
      @eq ( Ωilxt__56 = -> ( new_regex_tag ''       ).d'.'            ), /./dvy
      @eq ( Ωilxt__57 = -> ( new_regex_tag ''       ).y'.'            ), /./dvy
      @eq ( Ωilxt__58 = -> ( new_regex_tag ''       ).dy'.'           ), /./dvy
      @eq ( Ωilxt__59 = -> ( new_regex_tag ''       ).yd'.'           ), /./dvy
      #.....................................................................................................
      @eq ( Ωilxt__60 = -> ( new_regex_tag ''       ).i'.'            ), /./divy
      @eq ( Ωilxt__61 = -> ( new_regex_tag ''       ).g'.'            ), /./dgvy
      @eq ( Ωilxt__62 = -> ( new_regex_tag ''       ).m'.'            ), /./dmvy
      @eq ( Ωilxt__63 = -> ( new_regex_tag ''       ).s'.'            ), /./dsvy
      @eq ( Ωilxt__64 = -> ( new_regex_tag ''       ).dgimsvy'.'      ), /./dgimsvy
      @eq ( Ωilxt__65 = -> ( new_regex_tag ''       ).dgimsuy'.'      ), /./dgimsvy
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
      @eq ( Ωilxt__66 = -> g.start_level instanceof Level                                 ), true
      @eq ( Ωilxt__67 = -> g.start_level                                                  ), gnd
      @eq ( Ωilxt__68 = -> g.start_level_name                                             ), 'gnd'
      @eq ( Ωilxt__69 = -> g.name                                                         ), 'g'
      @eq ( Ωilxt__70 = -> g.levels instanceof Object                                     ), true
      @eq ( Ωilxt__71 = -> g.levels.gnd                                                   ), gnd
      #.....................................................................................................
      @eq ( Ωilxt__72 = -> gnd instanceof Level                                           ), true
      @eq ( Ωilxt__73 = -> gnd.name                                                       ), 'gnd'
      @eq ( Ωilxt__74 = -> gnd.grammar                                                    ), g
      @eq ( Ωilxt__75 = -> gnd.tokens instanceof Array                                    ), true
      @eq ( Ωilxt__76 = -> gnd.tokens.length                                              ), 1
      @eq ( Ωilxt__77 = -> gnd.tokens[ 0 ]                                                ), number_tk
      #.....................................................................................................
      @eq ( Ωilxt__78 = -> number_tk instanceof Token                                     ), true
      @eq ( Ωilxt__79 = -> number_tk.name                                                 ), 'number'
      @eq ( Ωilxt__80 = -> number_tk.level                                                ), gnd
      @eq ( Ωilxt__81 = -> number_tk.grammar                                              ), g
      @eq ( Ωilxt__82 = -> number_tk.matcher                                              ), /[0-9]+/dvy
      @eq ( Ωilxt__83 = -> number_tk.matcher.hasIndices                                   ), true
      @eq ( Ωilxt__84 = -> number_tk.matcher.sticky                                       ), true
      @eq ( Ωilxt__85 = -> number_tk.matcher.unicodeSets                                  ), true
      @eq ( Ωilxt__86 = -> number_tk.jump                                                 ), null
      #.....................................................................................................
      @eq ( Ωilxt__87 = -> ( number_lx = number_tk.match_at 0, '398ä' )?                  ), true
      @eq ( Ωilxt__88 = -> number_lx instanceof Lexeme                                    ), true
      @eq ( Ωilxt__89 = -> number_lx.name                                                 ), 'number'
      @eq ( Ωilxt__90 = -> number_lx.fqname                                               ), 'gnd.number'
      @eq ( Ωilxt__91 = -> number_lx.level                                                ), gnd
      @eq ( Ωilxt__92 = -> number_lx.hit                                                  ), '398'
      @eq ( Ωilxt__93 = -> number_lx.start                                                ), 0
      @eq ( Ωilxt__94 = -> number_lx.stop                                                 ), 3
      #.....................................................................................................
      @eq ( Ωilxt__95 = -> ( number_lx = number_tk.match_at 7, 'abcdefgh00102xyz' )?      ), false
      @eq ( Ωilxt__96 = -> ( number_lx = number_tk.match_at 8, 'abcdefgh00102xyz' )?      ), true
      @eq ( Ωilxt__97 = -> number_lx instanceof Lexeme                                    ), true
      @eq ( Ωilxt__98 = -> number_lx.name                                                 ), 'number'
      @eq ( Ωilxt__99 = -> number_lx.fqname                                               ), 'gnd.number'
      @eq ( Ωilxt_100 = -> number_lx.level                                                ), gnd
      @eq ( Ωilxt_101 = -> number_lx.hit                                                  ), '00102'
      @eq ( Ωilxt_102 = -> number_lx.start                                                ), 8
      @eq ( Ωilxt_103 = -> number_lx.stop                                                 ), 13
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    new_regex_tag: ->
      { rx
        regex
        internals
        new_regex_tag } = require '../../../apps/interlex'
      #.....................................................................................................
      @eq ( Ωilxt_104 = -> typeof   new_regex_tag 'dy'                                  ), 'function'
      @eq ( Ωilxt_105 = -> typeof ( new_regex_tag 'dy'    ).si                          ), 'function'
      @eq ( Ωilxt_106 = -> ( (      new_regex_tag 'dyis'  )"[a-z]" ) instanceof RegExp  ), true
      #.....................................................................................................
      @eq ( Ωilxt_107 = -> ( new_regex_tag 'dyis'  )"[a-z]"     ), /[a-z]/disvy
      @eq ( Ωilxt_108 = -> ( new_regex_tag 'dy'    ).si"[a-z]"  ), /[a-z]/disvy
      @eq ( Ωilxt_109 = -> ( new_regex_tag 'dys'   ).si"[a-z]"  ), /[a-z]/disvy
      @eq ( Ωilxt_110 = -> ( new_regex_tag 'dys'   ).i"[a-z]"   ), /[a-z]/disvy
      @eq ( Ωilxt_111 = -> ( new_regex_tag 'dysi'  )"[a-z]"     ), /[a-z]/disvy
      @eq ( Ωilxt_112 = -> ( new_regex_tag 'v'     ).si"[a-z]"  ), /[a-z]/disvy
      #.....................................................................................................
      @throws ( Ωilxt_113 = -> ( new_regex_tag 'dy'    ).ab"[a-z]"  ), /illegal or duplicate flags/
      @throws ( Ωilxt_114 = -> ( new_regex_tag 'dyab'  )"[a-z]"     ), /illegal or duplicate flags/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    normalize_regex: ->
      { internals       } = require '../../../apps/interlex'
      { normalize_regex } = internals
      @eq ( Ωilxt_115 = -> typeof normalize_regex     ), 'function'
      @eq ( Ωilxt_116 = -> normalize_regex /[a-z]/ig  ), /[a-z]/dgivy
      @eq ( Ωilxt_117 = -> normalize_regex /[a-z]/i   ), /[a-z]/divy
      @eq ( Ωilxt_118 = -> normalize_regex /[a-z]/u   ), /[a-z]/dvy
      @eq ( Ωilxt_119 = -> normalize_regex /[a-z]/gv  ), /[a-z]/dgvy
      @eq ( Ωilxt_120 = -> normalize_regex /[a-z]/gu  ), /[a-z]/dgvy
      @eq ( Ωilxt_121 = -> normalize_regex /[a-z]/v   ), /[a-z]/dvy
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    rx_flags: ->
      { rx } = require '../../../apps/interlex'
      @eq ( Ωilxt_122 = -> ( rx"x"        ).flags ), 'dvy'
      @eq ( Ωilxt_123 = -> ( rx.si"x"     ).flags ), 'disvy'
      # @eq ( Ωilxt_124 = -> ( rx.sidvy"x"  ).flags ), 'disvy'
      @eq ( Ωilxt_125 = -> ( rx.y"x"      ).flags ), 'dvy'
      @eq ( Ωilxt_126 = -> rpr rx"[abc]+" ), '/[abc]+/dvy'
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
        g = new_grammar { emit_signals: false, }
        @eq ( Ωilxt_127 = -> g.state.lnr ), 1
        probes_and_matchers = [
          [ "1st line",           1, ]
          [ "2nd line",           2, ]
          [ "3rd line",           3, ]
          [ "4th line (and EOF)", 4, ] ]
        #...................................................................................................
        for [ probe, matcher, ] from probes_and_matchers
          info 'Ωilxt_128', rpr probe
          lexemes = g.get_lexemes probe
          # urge 'Ωilxt_129', lexemes
          @eq ( Ωilxt_130 = -> lexemes[ 0 ].lnr ), matcher
        return null
      #.....................................................................................................
      do =>
        g = new_grammar { emit_signals: false, }
        @eq ( Ωilxt_131 = -> g.state.lnr ), 1
        g.reset_lnr 10
        @eq ( Ωilxt_132 = -> g.state.lnr ), 10
        probes_and_matchers = [
          [ "1st line",           10, ]
          [ "2nd line",           11, ]
          [ "3rd line",           12, ]
          [ "4th line (and EOF)", 13, ] ]
        #...................................................................................................
        for [ probe, matcher, ] from probes_and_matchers
          info 'Ωilxt_133', rpr probe
          lexeme = ( g.get_lexemes probe )[ 0 ]
          @eq ( Ωilxt_134 = -> lexeme.lnr ), matcher
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
          g.reset_lnr()
          lexemes = g.get_lexemes probe
          @eq ( Ωilxt_135 = -> condense_lexemes lexemes ), matcher.condensed
          @eq ( Ωilxt_136 = -> lexemes.length ), matcher.length
          g.reset_lnr()
          @eq ( Ωilxt_137 = -> [ ( g.walk_lexemes probe )..., ] ), lexemes
        return null
      #-----------------------------------------------------------------------------------------------------
      do =>
        g         = new Grammar { name: 'g', emit_signals: false, }
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
        g         = new Grammar { name: 'g', emit_signals: false, }
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
        g         = new Grammar { name: 'g', emit_signals: false, }
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
        g         = new Grammar { name: 'g', emit_signals: false, }
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
          @eq ( Ωilxt_138 = -> condense_lexemes first.match_first_at position, source ), matcher
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
          @eq ( Ωilxt_139 = -> condense_lexemes first.match_first_at position, source ), matcher
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
          @eq ( Ωilxt_140 = -> condense_lexemes first.match_longest_at position, source ), matcher
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
          @eq ( Ωilxt_141 = -> condense_lexemes first.match_longest_at position, source ), matcher
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
              @eq ( Ωilxt_142 = -> condense_lexemes first.match_longest_at position, source ), matcher
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
            @eq ( Ωilxt_143 = -> g.cfg.strategy ), 'longest'
            @eq ( Ωilxt_144 = -> first.strategy ), 'longest'
            for [ source, matcher, ] in probes_and_matchers
              @eq ( Ωilxt_145 = -> condense_lexemes g.get_lexemes source ), matcher
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
        first.new_token { name: 'two_letters',    matcher: /[a-z]{2}/i, }
        first.new_token { name: 'one_digit',      matcher: /[0-9]{1}/i, }
        first.new_token { name: 'three_digits',   matcher: /[0-9]{3}/i, }
        first.new_token { name: 'four_digits',    matcher: /[0-9]{4}/i, }
        first.new_token { name: 'two_digits',     matcher: /[0-9]{2}/i, }
        first.new_token { name: 'one_letter',     matcher: /[a-z]{1}/i, }
        first.new_token { name: 'four_letters',   matcher: /[a-z]{4}/i, }
        first.new_token { name: 'three_letters',  matcher: /[a-z]{3}/i, }
        #...................................................................................................
        @eq ( Ωilxt_146 = -> g.cfg.strategy ), 'first'
        @eq ( Ωilxt_147 = -> first.strategy ), 'first'
        for [ source, matcher, ] in probes_and_matchers
          @eq ( Ωilxt_148 = -> condense_lexemes g.get_lexemes source ), matcher
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
        first.new_token { name: 'four_letters',   matcher: /[a-z]{4}/i, }
        first.new_token { name: 'three_letters',  matcher: /[a-z]{3}/i, }
        first.new_token { name: 'two_letters',    matcher: /[a-z]{2}/i, }
        first.new_token { name: 'one_letter',     matcher: /[a-z]{1}/i, }
        first.new_token { name: 'four_digits',    matcher: /[0-9]{4}/i, }
        first.new_token { name: 'three_digits',   matcher: /[0-9]{3}/i, }
        first.new_token { name: 'two_digits',     matcher: /[0-9]{2}/i, }
        first.new_token { name: 'one_digit',      matcher: /[0-9]{1}/i, }
        #...................................................................................................
        @eq ( Ωilxt_149 = -> g.cfg.strategy ), 'first'
        @eq ( Ωilxt_150 = -> first.strategy ), 'first'
        for [ source, matcher, ] in probes_and_matchers
          @eq ( Ωilxt_151 = -> condense_lexemes g.get_lexemes source ), matcher
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
        gnd.new_token { name: 'a', matcher: /a/, }
        gnd.new_token { name: 'b', matcher: /(?=b)/, }
        @throws ( Ωilxt_152 = -> g.get_lexemes "ab" ), /encountered zero-length match/
      #.....................................................................................................
      do =>
        g = new Grammar { strategy: 'longest', emit_signals: false, }
        gnd = g.new_level { name: 'gnd', }
        gnd.new_token { name: 'a', matcher: /a/, }
        gnd.new_token { name: 'b', matcher: /(?=b)/, }
        @throws ( Ωilxt_153 = -> g.get_lexemes "ab" ), /encountered zero-length match/
      #.....................................................................................................
      do =>
        ### We accept the empty match here since while it does get produced as an intermediate value to find
        the longest match, it does not get passed on as a resulting lexeme. ###
        g = new Grammar { strategy: 'longest', emit_signals: false, }
        gnd = g.new_level { name: 'gnd', }
        gnd.new_token { name: 'a', matcher: /[ab]/, }
        gnd.new_token { name: 'b', matcher: /(?=b)/, }
        @eq ( Ωilxt_154 = -> condense_lexemes g.get_lexemes "ab" ), "gnd.a'a'|gnd.a'b'"
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
        @throws ( Ωilxt_155 = -> first.new_token { name: 'digit', matcher: /[0-9]/, jump: 'first',  } ), /cannot jump to same level/
        @throws ( Ωilxt_156 = -> first.new_token { name: 'digit', matcher: /[0-9]/, jump: 'first!', } ), /cannot jump to same level/
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    parse_jumps: ->
      { Token } = require '../../../apps/interlex'
      #.....................................................................................................
      @eq     ( Ωilxt_157 = -> Token._parse_jump()                                   ), null
      @eq     ( Ωilxt_158 = -> Token._parse_jump '..'                                ), { spec: '..',       carry: false, action: 'back', target: '..',      }
      @eq     ( Ωilxt_159 = -> Token._parse_jump 'mylevel'                           ), { spec: 'mylevel',  carry: false, action: 'fore', target: 'mylevel', }
      @eq     ( Ωilxt_160 = -> Token._parse_jump '..!'                               ), { spec: '..!',      carry: true,  action: 'back', target: '..',      }
      @eq     ( Ωilxt_161 = -> Token._parse_jump 'mylevel!'                          ), { spec: 'mylevel!', carry: true,  action: 'fore', target: 'mylevel', }
      @eq     ( Ωilxt_162 = -> Token._parse_jump 'mylevel!', { name: 'otherlevel', } ), { spec: 'mylevel!', carry: true,  action: 'fore', target: 'mylevel', }
      @throws ( Ωilxt_163 = -> Token._parse_jump '..]'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_164 = -> Token._parse_jump ']..'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_165 = -> Token._parse_jump '[mylevel'                          ), /encountered illegal jump spec/
      @throws ( Ωilxt_166 = -> Token._parse_jump 'mylevel['                          ), /encountered illegal jump spec/
      @throws ( Ωilxt_167 = -> Token._parse_jump 'mylevel[', { name: 'otherlevel', } ), /encountered illegal jump spec/
      @throws ( Ωilxt_168 = -> Token._parse_jump '[mylevel['                         ), /encountered illegal jump spec/
      @throws ( Ωilxt_169 = -> Token._parse_jump '[mylevel]'                         ), /encountered illegal jump spec/
      @throws ( Ωilxt_170 = -> Token._parse_jump ']mylevel'                          ), /encountered illegal jump spec/
      @throws ( Ωilxt_171 = -> Token._parse_jump '[..'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_172 = -> Token._parse_jump '[..]'                              ), /encountered illegal jump spec/
      @throws ( Ωilxt_173 = -> Token._parse_jump '..['                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_174 = -> Token._parse_jump '[...'                              ), /encountered illegal jump spec/
      @throws ( Ωilxt_175 = -> Token._parse_jump '...'                               ), /encountered illegal jump spec/
      @throws ( Ωilxt_176 = -> Token._parse_jump '%'                                 ), /encountered illegal jump spec/
      @throws ( Ωilxt_177 = -> Token._parse_jump 'my-name'                           ), /encountered illegal jump spec/
      @throws ( Ωilxt_178 = -> Token._parse_jump 'mylevel',  { name: 'mylevel', }    ), /cannot jump to same level/
      @throws ( Ωilxt_179 = -> Token._parse_jump 'mylevel!', { name: 'mylevel', }    ), /cannot jump to same level/
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
        first.new_token   { name: 'digit',      matcher: /[0-9]/,     jump: 'number',   }
        first.new_token   { name: 'other',      matcher: /[^0-9]+/,                     }
        #...................................................................................................
        number  = g.new_level { name: 'number', }
        number.new_token  { name: 'digits',     matcher: /[0-9]+/,                      }
        number.new_token  { name: 'other',      matcher: /[^0-9]/,    jump: '..',       }
        #...................................................................................................
        [ lexeme, ] = g.get_lexemes '5'
        @eq ( Ωilxt_180 = -> lexeme instanceof Lexeme       ), true
        @eq ( Ωilxt_181 = -> lexeme.token instanceof Token  ), true
        @eq ( Ωilxt_182 = -> lexeme.name                    ), 'digit'
        @eq ( Ωilxt_183 = -> lexeme.level.name              ), 'first'
        @eq ( Ωilxt_184 = -> lexeme.fqname                  ), 'first.digit'
        lexeme.set_level number
        @eq ( Ωilxt_185 = -> lexeme instanceof Lexeme       ), true
        @eq ( Ωilxt_186 = -> lexeme.token instanceof Token  ), true
        @eq ( Ωilxt_187 = -> lexeme.name                    ), 'digit'
        @eq ( Ωilxt_188 = -> lexeme.level.name              ), 'number'
        @eq ( Ωilxt_189 = -> lexeme.fqname                  ), 'number.digit'
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
        first.new_token     { name: 'other',      matcher: /[^"]+/,                             }
        first.new_token     { name: 'dq',         matcher: /"/,             jump: 'dqstring!',  }
        #...................................................................................................
        dqstring  = g.new_level { name: 'dqstring', }
        dqstring.new_token  { name: 'other',      matcher: /[^"]+/,                             }
        dqstring.new_token  { name: 'dq',         matcher: /"/,             jump: '..'          }
        #...................................................................................................
        @eq ( Ωilxt_190 = -> first.tokens[ 1 ].name     ), 'dq'
        @eq ( Ωilxt_191 = -> first.tokens[ 1 ].jump     ), { spec: 'dqstring!', carry: true, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_192 = -> dqstring.tokens[ 1 ].name  ), 'dq'
        @eq ( Ωilxt_193 = -> dqstring.tokens[ 1 ].jump  ), { spec: '..', carry: false, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.walk_lexemes 'Bob said "wow".'
        @eq ( Ωilxt_194 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: 'Bob said ',  pos: '1:0:9',   }
        @eq ( Ωilxt_195 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.dq',    hit: '"',          pos: '1:9:10',  }
        @eq ( Ωilxt_196 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.other', hit: 'wow',        pos: '1:10:13', }
        @eq ( Ωilxt_197 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.dq',    hit: '"',          pos: '1:13:14', }
        @eq ( Ωilxt_198 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: '.',          pos: '1:14:15', }
        @eq ( Ωilxt_199 = -> lexemes.next().done  ), true
        return null
      #.....................................................................................................
      do =>
        ### forejump sticks, backjump carries ###
        g = new Grammar g_cfg
        #...................................................................................................
        first     = g.new_level { name: 'first', }
        first.new_token     { name: 'other',      matcher: /[^"]+/,                             }
        first.new_token     { name: 'dq',         matcher: /"/,             jump: 'dqstring',   }
        #...................................................................................................
        dqstring  = g.new_level { name: 'dqstring', }
        dqstring.new_token  { name: 'other',      matcher: /[^"]+/,                             }
        dqstring.new_token  { name: 'dq',         matcher: /"/,             jump: '..!'         }
        #...................................................................................................
        @eq ( Ωilxt_200 = -> first.tokens[ 1 ].name     ), 'dq'
        @eq ( Ωilxt_201 = -> first.tokens[ 1 ].jump     ), { spec: 'dqstring', carry: false, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_202 = -> dqstring.tokens[ 1 ].name  ), 'dq'
        @eq ( Ωilxt_203 = -> dqstring.tokens[ 1 ].jump  ), { spec: '..!', carry: true, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.walk_lexemes 'Bob said "wow".'
        @eq ( Ωilxt_204 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: 'Bob said ', pos: '1:0:9',   }
        @eq ( Ωilxt_205 = -> abbrlxm lexemes.next().value ), { fqname: 'first.dq',       hit: '"',         pos: '1:9:10',  }
        @eq ( Ωilxt_206 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.other', hit: 'wow',       pos: '1:10:13', }
        @eq ( Ωilxt_207 = -> abbrlxm lexemes.next().value ), { fqname: 'first.dq',       hit: '"',         pos: '1:13:14', }
        @eq ( Ωilxt_208 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: '.',         pos: '1:14:15', }
        @eq ( Ωilxt_209 = -> lexemes.next().done  ), true
        return null
      #.....................................................................................................
      do =>
        ### forejump carries, backjump carries ###
        g = new Grammar g_cfg
        #...................................................................................................
        first     = g.new_level { name: 'first', }
        first.new_token     { name: 'other',      matcher: /[^"]+/,                             }
        first.new_token     { name: 'dq',         matcher: /"/,             jump: 'dqstring!',  }
        #...................................................................................................
        dqstring  = g.new_level { name: 'dqstring', }
        dqstring.new_token  { name: 'other',      matcher: /[^"]+/,                             }
        dqstring.new_token  { name: 'dq',         matcher: /"/,             jump: '..!'         }
        #...................................................................................................
        @eq ( Ωilxt_210 = -> first.tokens[ 1 ].name     ), 'dq'
        @eq ( Ωilxt_211 = -> first.tokens[ 1 ].jump     ), { spec: 'dqstring!', carry: true, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_212 = -> dqstring.tokens[ 1 ].name  ), 'dq'
        @eq ( Ωilxt_213 = -> dqstring.tokens[ 1 ].jump  ), { spec: '..!', carry: true, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.walk_lexemes 'Bob said "wow".'
        @eq ( Ωilxt_214 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: 'Bob said ', pos: '1:0:9',   }
        @eq ( Ωilxt_215 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.dq',    hit: '"',         pos: '1:9:10',  }
        @eq ( Ωilxt_216 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.other', hit: 'wow',       pos: '1:10:13', }
        @eq ( Ωilxt_217 = -> abbrlxm lexemes.next().value ), { fqname: 'first.dq',       hit: '"',         pos: '1:13:14', }
        @eq ( Ωilxt_218 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: '.',         pos: '1:14:15', }
        @eq ( Ωilxt_219 = -> lexemes.next().done  ), true
        return null
      #.....................................................................................................
      do =>
        ### forejump sticks, backjump sticks ###
        g = new Grammar g_cfg
        #...................................................................................................
        first     = g.new_level { name: 'first', }
        first.new_token     { name: 'other',      matcher: /[^"]+/,                             }
        first.new_token     { name: 'dq',         matcher: /"/,             jump: 'dqstring',   }
        #...................................................................................................
        dqstring  = g.new_level { name: 'dqstring', }
        dqstring.new_token  { name: 'other',      matcher: /[^"]+/,                             }
        dqstring.new_token  { name: 'dq',         matcher: /"/,             jump: '..'          }
        #...................................................................................................
        @eq ( Ωilxt_220 = -> first.tokens[ 1 ].name     ), 'dq'
        @eq ( Ωilxt_221 = -> first.tokens[ 1 ].jump     ), { spec: 'dqstring', carry: false, action: 'fore', target: 'dqstring', }
        @eq ( Ωilxt_222 = -> dqstring.tokens[ 1 ].name  ), 'dq'
        @eq ( Ωilxt_223 = -> dqstring.tokens[ 1 ].jump  ), { spec: '..', carry: false, action: 'back', target: '..', }
        #...................................................................................................
        lexemes = g.walk_lexemes 'Bob said "wow".'
        @eq ( Ωilxt_224 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: 'Bob said ', pos: '1:0:9',   }
        @eq ( Ωilxt_225 = -> abbrlxm lexemes.next().value ), { fqname: 'first.dq',       hit: '"',         pos: '1:9:10',  }
        @eq ( Ωilxt_226 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.other', hit: 'wow',       pos: '1:10:13', }
        @eq ( Ωilxt_227 = -> abbrlxm lexemes.next().value ), { fqname: 'dqstring.dq',    hit: '"',         pos: '1:13:14', }
        @eq ( Ωilxt_228 = -> abbrlxm lexemes.next().value ), { fqname: 'first.other',    hit: '.',         pos: '1:14:15', }
        @eq ( Ωilxt_229 = -> lexemes.next().done  ), true
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
          g.reset_lnr()
          lexemes = g.get_lexemes probe
          @eq ( Ωilxt_230 = -> condense_lexemes lexemes ), matcher.condensed
          @eq ( Ωilxt_231 = -> lexemes.length ), matcher.length
          g.reset_lnr()
          @eq ( Ωilxt_232 = -> [ ( g.walk_lexemes probe )..., ] ), lexemes
        return null
      #-----------------------------------------------------------------------------------------------------
      do =>
        g         = new Grammar { name: 'g', emit_signals: false, }
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
        info 'Ωilxt_233', source; g.reset_lnr 1; tabulate_lexemes g.walk_lexemes source
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
        gnd.new_token     { name: 'letters',          matcher:  /[a-zA-Z]+/,                      }
        gnd.new_token     { name: 'before_digits',    matcher:  /(?=[0-9])/,  jump: 'number',  }
        gnd.new_token     { name: 'ws',               matcher:  /\s+/,                         }
        #...................................................................................................
        number.new_token  { name: 'integer',          matcher:  /[0-9]+/,           }
        number.new_token  { name: 'unit',             matcher:  /[a-zA-Z]+/,     jump: '..',      }
        #...................................................................................................
        source = "99kg23mm"
        info 'Ωilxt_234', source; g.reset_lnr 1; lexemes = g.walk_lexemes source
        @eq ( Ωilxt_235 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.before_digits', hit: '',   pos: '1:0:0', }
        @eq ( Ωilxt_236 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',    hit: '99', pos: '1:0:2', }
        @eq ( Ωilxt_237 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',       hit: 'kg', pos: '1:2:4', }
        @eq ( Ωilxt_238 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.before_digits', hit: '',   pos: '1:4:4', }
        @eq ( Ωilxt_239 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',    hit: '23', pos: '1:4:6', }
        @eq ( Ωilxt_240 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',       hit: 'mm', pos: '1:6:8', }
        @eq ( Ωilxt_241 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
      #.....................................................................................................
      return null

  #=========================================================================================================
  stack: ->
    Levelstack = ( require '../../../apps/interlex' ).internals.Levelstack
    do =>
      stack = new Levelstack()
      @eq     ( Ωilxt_242 = -> stack.is_empty                   ), true
      stack.push { name: '1', }
      @eq     ( Ωilxt_243 = -> stack.length                     ), 1
      @eq     ( Ωilxt_244 = -> stack.peek()                     ), { name: '1', }
      @eq     ( Ωilxt_245 = -> stack.pop()                      ), { name: '1', }
      @eq     ( Ωilxt_246 = -> stack.length                     ), 0
    do =>
      stack = new Levelstack { name: '1', }
      @eq     ( Ωilxt_247 = -> stack.length                     ), 1
      @eq     ( Ωilxt_248 = -> stack.peek()                     ), { name: '1', }
      @eq     ( Ωilxt_249 = -> stack.pop()                      ), { name: '1', }
      @eq     ( Ωilxt_250 = -> stack.length                     ), 0
    do =>
      stack = new Levelstack { name: '1', }, { name: '2', }
      @eq     ( Ωilxt_251 = -> stack.length                     ), 2
      @eq     ( Ωilxt_252 = -> stack.peek()                     ), { name: '2', }
      @eq     ( Ωilxt_253 = -> stack.popnpeek()                 ), { name: '1', }
      @eq     ( Ωilxt_254 = -> stack.length                     ), 1
      @eq     ( Ωilxt_255 = -> stack.peek()                     ), { name: '1', }
      @eq     ( Ωilxt_256 = -> stack.pop()                      ), { name: '1', }
      @eq     ( Ωilxt_257 = -> stack.length                     ), 0
    do =>
      stack = new Levelstack { name: '1', }, { name: '2', }
      @eq     ( Ωilxt_258 = -> stack.length                     ), 2
      @eq     ( Ωilxt_259 = -> stack.peek_name()                ), '2'
      @eq     ( Ωilxt_260 = -> stack.popnpeek_name()            ), '1'
      @eq     ( Ωilxt_261 = -> stack.length                     ), 1
      @eq     ( Ωilxt_262 = -> stack.is_empty                   ), false
      @eq     ( Ωilxt_263 = -> stack.peek_name()                ), '1'
      @eq     ( Ωilxt_264 = -> stack.pop_name()                 ), '1'
      @eq     ( Ωilxt_265 = -> stack.length                     ), 0
      @eq     ( Ωilxt_266 = -> stack.is_empty                   ), true
    do =>
      stack = new Levelstack { name: '1', }, { name: '2', }
      @eq     ( Ωilxt_267 = -> stack.pop()                      ), { name: '2', }
      @eq     ( Ωilxt_268 = -> stack.is_empty                   ), false
      @eq     ( Ωilxt_269 = -> stack.pop()                      ), { name: '1', }
      @eq     ( Ωilxt_270 = -> stack.is_empty                   ), true
      @throws ( Ωilxt_271 = -> stack.pop()                      ), /stack is empty/
      @throws ( Ωilxt_272 = -> stack.popnpeek()                 ), /stack is empty/
      @throws ( Ωilxt_273 = -> stack.pop_name()                 ), /stack is empty/
      @throws ( Ωilxt_274 = -> stack.popnpeek_name()            ), /stack is empty/
      @eq     ( Ωilxt_275 = -> stack.pop            'fallback'  ), 'fallback'
      @eq     ( Ωilxt_276 = -> stack.popnpeek       'fallback'  ), 'fallback'
      @eq     ( Ωilxt_277 = -> stack.pop_name       'fallback'  ), 'fallback'
      @eq     ( Ωilxt_278 = -> stack.popnpeek_name  'fallback'  ), 'fallback'
    return null

  #=========================================================================================================
  signals:

    #-------------------------------------------------------------------------------------------------------
    cfg_settings: ->
      { Grammar } = require '../../../apps/interlex'
      @eq ( Ωilxt_279 = -> ( new Grammar { emit_signals: false,         } ).cfg.emit_signals ), false
      @eq ( Ωilxt_280 = -> ( new Grammar { emit_signals: true,          } ).cfg.emit_signals ), true
      @eq ( Ωilxt_281 = -> ( new Grammar {}                               ).cfg.emit_signals ), true
      @eq ( Ωilxt_282 = -> ( new Grammar()                                ).cfg.emit_signals ), true
      # @throws ( Ωilxt_ACCEPTFORNOW_283 = -> ( new Grammar { emit_signals: null,      } ).cfg.emit_signals ), /——————————————————————/
      # @throws ( Ωilxt_ACCEPTFORNOW_284 = -> ( new Grammar { emit_signals: undefined, } ).cfg.emit_signals ), /——————————————————————/
      return null

    #-------------------------------------------------------------------------------------------------------
    detailed_jump_signals: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #-----------------------------------------------------------------------------------------------------
      ### fore jump sticky, back jump sticky ###
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, simplify_jumps: false, }
        @eq ( Ωilxt_285 = -> g.cfg.simplify_jumps ), false
        gnd       = g.new_level { name: 'gnd',      }
        number    = g.new_level { name: 'number',   }
        #...................................................................................................
        gnd.new_token     { name: 'letters',          matcher:  /[a-zA-Z]+/,                      }
        gnd.new_token     { name: 'before_digits',    matcher:  /(?=[0-9])/,  jump: 'number',     }
        gnd.new_token     { name: 'ws',               matcher:  /\s+/,                            }
        #...................................................................................................
        number.new_token  { name: 'integer',          matcher:  /[0-9]+/,                         }
        number.new_token  { name: 'unit',             matcher:  /[a-zA-Z]+/,     jump: '..',      }
        #...................................................................................................
        source = "99kg23mm"
        # info 'Ωilxt_286', source; tabulate_lexemes g.walk_lexemes source
        info 'Ωilxt_287', source; g.reset_lnr 1; lexemes = g.walk_lexemes source
        @eq ( Ωilxt_288 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',     hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_289 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',      hit: '',   pos: '1:0:0', data: { from_level: null, to_level: 'gnd' }, }
        @eq ( Ωilxt_290 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.before_digits', hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_291 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',      hit: '',   pos: '1:0:0', data: { from_level: 'gnd', to_level: 'number' }, }
        @eq ( Ωilxt_292 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',    hit: '99', pos: '1:0:2' }
        @eq ( Ωilxt_293 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',       hit: 'kg', pos: '1:2:4' }
        @eq ( Ωilxt_294 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',      hit: '',   pos: '1:4:4', data: { from_level: 'number', to_level: 'gnd' }, }
        @eq ( Ωilxt_295 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.before_digits', hit: '',   pos: '1:4:4' }
        @eq ( Ωilxt_296 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',      hit: '',   pos: '1:4:4', data: { from_level: 'gnd', to_level: 'number' }, }
        @eq ( Ωilxt_297 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',    hit: '23', pos: '1:4:6' }
        @eq ( Ωilxt_298 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',       hit: 'mm', pos: '1:6:8' }
        @eq ( Ωilxt_299 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',      hit: '',   pos: '1:8:8', data: { from_level: 'number', to_level: 'gnd' }, }
        @eq ( Ωilxt_300 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',      hit: '',   pos: '1:8:8', data: { from_level: 'gnd', to_level: null }, }
        @eq ( Ωilxt_301 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',      hit: '',   pos: '1:8:8' }
        @eq ( Ωilxt_302 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      ### fore jump carry, back jump sticky ###
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, simplify_jumps: false, }
        @eq ( Ωilxt_303 = -> g.cfg.simplify_jumps ), false
        gnd       = g.new_level { name: 'gnd',      }
        number    = g.new_level { name: 'number',   }
        #...................................................................................................
        gnd.new_token     { name: 'letters',          matcher:  /[a-zA-Z]+/,                      }
        gnd.new_token     { name: 'before_digits',    matcher:  /(?=[0-9])/,  jump: 'number!',    }
        gnd.new_token     { name: 'ws',               matcher:  /\s+/,                            }
        #...................................................................................................
        number.new_token  { name: 'integer',          matcher:  /[0-9]+/,                         }
        number.new_token  { name: 'unit',             matcher:  /[a-zA-Z]+/,     jump: '..',      }
        #...................................................................................................
        source = "99kg23mm"
        # info 'Ωilxt_304', source; tabulate_lexemes g.walk_lexemes source
        info 'Ωilxt_305', source; g.reset_lnr 1; lexemes = g.walk_lexemes source
        @eq ( Ωilxt_306 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',        hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_307 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:0:0', data: { from_level: null,     to_level: 'gnd' }, }
        @eq ( Ωilxt_308 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:0:0', data: { from_level: 'gnd',    to_level: 'number' }, }
        @eq ( Ωilxt_309 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.before_digits', hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_310 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '99', pos: '1:0:2' }
        @eq ( Ωilxt_311 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',          hit: 'kg', pos: '1:2:4' }
        @eq ( Ωilxt_312 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:4:4', data: { from_level: 'number', to_level: 'gnd' }, }
        @eq ( Ωilxt_313 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:4:4', data: { from_level: 'gnd',    to_level: 'number' }, }
        @eq ( Ωilxt_314 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.before_digits', hit: '',   pos: '1:4:4' }
        @eq ( Ωilxt_315 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '23', pos: '1:4:6' }
        @eq ( Ωilxt_316 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',          hit: 'mm', pos: '1:6:8' }
        @eq ( Ωilxt_317 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:8:8', data: { from_level: 'number', to_level: 'gnd' }, }
        @eq ( Ωilxt_318 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:8:8', data: { from_level: 'gnd',    to_level: null }, }
        @eq ( Ωilxt_319 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',         hit: '',   pos: '1:8:8' }
        @eq ( Ωilxt_320 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      ### fore jump carry, back jump carry ###
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, simplify_jumps: false, }
        @eq ( Ωilxt_321 = -> g.cfg.simplify_jumps ), false
        gnd       = g.new_level { name: 'gnd',      }
        number    = g.new_level { name: 'number',   }
        #...................................................................................................
        gnd.new_token     { name: 'letters',          matcher:  /[a-zA-Z]+/,                      }
        gnd.new_token     { name: 'before_digits',    matcher:  /(?=[0-9])/,  jump: 'number!',    }
        gnd.new_token     { name: 'ws',               matcher:  /\s+/,                            }
        #...................................................................................................
        number.new_token  { name: 'integer',          matcher:  /[0-9]+/,                         }
        number.new_token  { name: 'unit',             matcher:  /[a-zA-Z]+/,     jump: '..!',     }
        #...................................................................................................
        source = "99kg23mm"
        # info 'Ωilxt_322', source; tabulate_lexemes g.walk_lexemes source
        info 'Ωilxt_323', source; g.reset_lnr 1; lexemes = g.walk_lexemes source
        @eq ( Ωilxt_324 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',        hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_325 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:0:0', data: { from_level: null,     to_level: 'gnd' }, }
        @eq ( Ωilxt_326 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:0:0', data: { from_level: 'gnd',    to_level: 'number' }, }
        @eq ( Ωilxt_327 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.before_digits', hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_328 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '99', pos: '1:0:2' }
        @eq ( Ωilxt_329 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:2:2', data: { from_level: 'number', to_level: 'gnd' }, }
        @eq ( Ωilxt_330 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.unit',             hit: 'kg', pos: '1:2:4' }
        @eq ( Ωilxt_331 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:4:4', data: { from_level: 'gnd',    to_level: 'number' }, }
        @eq ( Ωilxt_332 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.before_digits', hit: '',   pos: '1:4:4' }
        @eq ( Ωilxt_333 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '23', pos: '1:4:6' }
        @eq ( Ωilxt_334 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:6:6', data: { from_level: 'number', to_level: 'gnd' }, }
        @eq ( Ωilxt_335 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.unit',             hit: 'mm', pos: '1:6:8' }
        @eq ( Ωilxt_336 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:8:8', data: { from_level: 'gnd',    to_level: null }, }
        @eq ( Ωilxt_337 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',         hit: '',   pos: '1:8:8' }
        @eq ( Ωilxt_338 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      ### fore jump sticky, back jump carry ###
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, simplify_jumps: false, }
        @eq ( Ωilxt_339 = -> g.cfg.simplify_jumps ), false
        gnd       = g.new_level { name: 'gnd',      }
        number    = g.new_level { name: 'number',   }
        #...................................................................................................
        gnd.new_token     { name: 'letters',          matcher:  /[a-zA-Z]+/,                      }
        gnd.new_token     { name: 'before_digits',    matcher:  /(?=[0-9])/,  jump: 'number',     }
        gnd.new_token     { name: 'ws',               matcher:  /\s+/,                            }
        #...................................................................................................
        number.new_token  { name: 'integer',          matcher:  /[0-9]+/,                         }
        number.new_token  { name: 'unit',             matcher:  /[a-zA-Z]+/,     jump: '..!',     }
        #...................................................................................................
        source = "99kg23mm"
        # info 'Ωilxt_340', source; tabulate_lexemes g.walk_lexemes source
        info 'Ωilxt_341', source; g.reset_lnr 1; lexemes = g.walk_lexemes source
        @eq ( Ωilxt_342 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',        hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_343 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:0:0', data: { from_level: null,     to_level: 'gnd' }, }
        @eq ( Ωilxt_344 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.before_digits',    hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_345 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:0:0', data: { from_level: 'gnd',    to_level: 'number' }, }
        @eq ( Ωilxt_346 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '99', pos: '1:0:2' }
        @eq ( Ωilxt_347 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:2:2', data: { from_level: 'number', to_level: 'gnd' }, }
        @eq ( Ωilxt_348 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.unit',             hit: 'kg', pos: '1:2:4' }
        @eq ( Ωilxt_349 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.before_digits',    hit: '',   pos: '1:4:4' }
        @eq ( Ωilxt_350 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:4:4', data: { from_level: 'gnd',    to_level: 'number' }, }
        @eq ( Ωilxt_351 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '23', pos: '1:4:6' }
        @eq ( Ωilxt_352 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:6:6', data: { from_level: 'number', to_level: 'gnd' }, }
        @eq ( Ωilxt_353 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'gnd.unit',             hit: 'mm', pos: '1:6:8' }
        @eq ( Ωilxt_354 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:8:8', data: { from_level: 'gnd',    to_level: null }, }
        @eq ( Ωilxt_355 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',         hit: '',   pos: '1:8:8' }
        @eq ( Ωilxt_356 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
        #...................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    simplified_jump_signals: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      ### fore jump carry, back jump sticky ###
      do =>
        g         = new Grammar { name: 'g', emit_signals: true, }
        @eq ( Ωilxt_357 = -> g.cfg.simplify_jumps ), true
        gnd       = g.new_level { name: 'gnd',      }
        number    = g.new_level { name: 'number',   }
        #...................................................................................................
        gnd.new_token     { name: 'letters',          matcher:  /[a-zA-Z]+/,                      }
        gnd.new_token     { name: 'before_digits',    matcher:  /(?=[0-9])/,  jump: 'number!',    }
        gnd.new_token     { name: 'ws',               matcher:  /\s+/,                            }
        #...................................................................................................
        number.new_token  { name: 'integer',          matcher:  /[0-9]+/,                         }
        number.new_token  { name: 'unit',             matcher:  /[a-zA-Z]+/,     jump: '..',      }
        #...................................................................................................
        source = "99kg23mm"
        # info 'Ωilxt_358', source; tabulate_lexemes g.walk_lexemes source
        info 'Ωilxt_359', source; g.reset_lnr 1; lexemes = g.walk_lexemes source
        @eq ( Ωilxt_360 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start',        hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_361 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:0:0', data: { from_level: null,     to_level: 'number' }, }
        @eq ( Ωilxt_362 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.before_digits', hit: '',   pos: '1:0:0' }
        @eq ( Ωilxt_363 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '99', pos: '1:0:2' }
        @eq ( Ωilxt_364 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',          hit: 'kg', pos: '1:2:4' }
        @eq ( Ωilxt_365 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:4:4', data: { from_level: 'number', to_level: 'number' }, }
        @eq ( Ωilxt_366 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.before_digits', hit: '',   pos: '1:4:4' }
        @eq ( Ωilxt_367 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.integer',       hit: '23', pos: '1:4:6' }
        @eq ( Ωilxt_368 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'number.unit',          hit: 'mm', pos: '1:6:8' }
        @eq ( Ωilxt_369 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',         hit: '',   pos: '1:8:8', data: { from_level: 'number', to_level: null }, }
        @eq ( Ωilxt_370 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',         hit: '',   pos: '1:8:8' }
        @eq ( Ωilxt_371 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
        #...................................................................................................
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
      # debug 'Ωilxt_372', [ string11, string12, ]
      # console.debug 'Ωilxt_373', [ string11, string12, ]
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
      sources = [
        "Alice in Cairo 1912 (approximately)"
        "Alice in Cairo 1912 'approximately'"
        ]
      #.........................................................................................................
      for source from sources
        info 'Ωilxt_374', rpr source
        g.reset_lnr 1
        tabulate_lexemes g.walk_lexemes source
      #.........................................................................................................
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
        @eq ( Ωilxt_375 = -> g.cfg.name           ), 'g'
        @eq ( Ωilxt_376 = -> g.cfg.strategy       ), 'first'
        @eq ( Ωilxt_377 = -> g.cfg.emit_signals   ), true
        @eq ( Ωilxt_378 = -> g.cfg.simplify_jumps ), true
        return null
      #.........................................................................................................
      do =>
        g = new Grammar { emit_signals: false, }
        @eq ( Ωilxt_379 = -> g.cfg.name           ), 'g'
        @eq ( Ωilxt_380 = -> g.cfg.strategy       ), 'first'
        @eq ( Ωilxt_381 = -> g.cfg.emit_signals   ), false
        @eq ( Ωilxt_382 = -> g.cfg.simplify_jumps ), false
        return null
      #.........................................................................................................
      return null


#===========================================================================================================
if module is require.main then await do =>
  gt_cfg = { throw_on_error: true, show_passes: false, report_checks: false, }
  # gt_cfg = { throw_on_error: false, show_passes: true, report_checks: true, }
  ( new Test gt_cfg ).test @interlex_tasks
  ( new Test gt_cfg ).test { cfg_settings: @interlex_tasks.cfg_settings, }
  # ( new Test gt_cfg ).test { numbering: @interlex_tasks.basics.numbering, }
  # ( new Test gt_cfg ).test { stack: @interlex_tasks.stack, }
  # do =>
  #   f = ( simplify ) ->
  #     return yield from g() if simplify
  #     yield 1
  #     yield 2
  #     yield 3
  #     return null
  #   g = -> yield from 'abcd'
  #   debug 'Ωilxt_383', [ ( d for d from f false )..., ]
  #   debug 'Ωilxt_384', [ ( d for d from f true )..., ]
  f = ->
    help 'Ωilxt_385', Array.from 'a🈯z'
    help 'Ωilxt_386', 'a🈯z'.split /(.)/u
    help 'Ωilxt_387', 'a🈯z'.split( /(.)/v )
    help 'Ωilxt_388', 'a🈯z'.split( /(.)/d )
    help 'Ωilxt_389', match = 'a🈯z'.match /^(?<head>[a-z]+)(?<other>[^a-z]+)(?<tail>[a-z]+)/d
    help 'Ωilxt_390', { match.groups..., }
    help 'Ωilxt_391', { match.indices.groups..., }
    # help 'Ωilxt_392', rx"."
    # help 'Ωilxt_393', rx/./


