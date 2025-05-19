
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
  basics:

    #-------------------------------------------------------------------------------------------------------
    simple_1: ->
      ILX         = require '../../../apps/interlex'
      { Grammar
        Level
        Token
        Lexeme
        rx      } = ILX
      #===========================================================================================================
      g                 = new Grammar { name: 'g', }
      gnd               = g.new_level { name: 'gnd', }
      number_tk_matcher = rx"[0-9]+"
      number_tk         = gnd.new_token { name: 'number', matcher: number_tk_matcher, }
      number_lx         = null
      #.....................................................................................................
      @eq ( Ωilxt__28 = -> g.start_level instanceof Level                                ), true
      @eq ( Ωilxt__29 = -> g.start_level                                                 ), gnd
      @eq ( Ωilxt__30 = -> g.start_level_name                                            ), 'gnd'
      @eq ( Ωilxt__31 = -> g.name                                                        ), 'g'
      @eq ( Ωilxt__32 = -> g.levels instanceof Object                                    ), true
      @eq ( Ωilxt__33 = -> g.levels.gnd                                                  ), gnd
      #.....................................................................................................
      @eq ( Ωilxt__34 = -> gnd instanceof Level                                          ), true
      @eq ( Ωilxt__35 = -> gnd.name                                                      ), 'gnd'
      @eq ( Ωilxt__36 = -> gnd.grammar                                                   ), g
      @eq ( Ωilxt__37 = -> gnd.tokens instanceof Array                                   ), true
      @eq ( Ωilxt__38 = -> gnd.tokens.length                                             ), 1
      @eq ( Ωilxt__39 = -> gnd.tokens[ 0 ]                                               ), number_tk
      #.....................................................................................................
      @eq ( Ωilxt__40 = -> number_tk instanceof Token                                    ), true
      @eq ( Ωilxt__41 = -> number_tk.name                                                ), 'number'
      @eq ( Ωilxt__42 = -> number_tk.level                                               ), gnd
      @eq ( Ωilxt__43 = -> number_tk.grammar                                             ), g
      @eq ( Ωilxt__44 = -> number_tk.matcher is number_tk_matcher                        ), true
      @eq ( Ωilxt__45 = -> number_tk.jump                                                ), null
      @eq ( Ωilxt__46 = -> number_tk.jump_spec                                           ), null
      #.....................................................................................................
      @eq ( Ωilxt__47 = -> ( number_lx = number_tk.match_at 0, '398' )?                  ), true
      @eq ( Ωilxt__48 = -> number_lx instanceof Lexeme                                   ), true
      @eq ( Ωilxt__49 = -> number_lx.name                                                ), 'number'
      @eq ( Ωilxt__50 = -> number_lx.fqname                                              ), 'gnd.number'
      @eq ( Ωilxt__51 = -> number_lx.level                                               ), gnd
      @eq ( Ωilxt__52 = -> number_lx.hit                                                 ), '398'
      @eq ( Ωilxt__53 = -> number_lx.start                                               ), 0
      @eq ( Ωilxt__54 = -> number_lx.stop                                                ), 3
      #.....................................................................................................
      @eq ( Ωilxt__55 = -> ( number_lx = number_tk.match_at 7, 'abcdefgh00102xyz' )?     ), false
      @eq ( Ωilxt__56 = -> ( number_lx = number_tk.match_at 8, 'abcdefgh00102xyz' )?     ), true
      @eq ( Ωilxt__57 = -> number_lx instanceof Lexeme                                   ), true
      @eq ( Ωilxt__58 = -> number_lx.name                                                ), 'number'
      @eq ( Ωilxt__59 = -> number_lx.fqname                                              ), 'gnd.number'
      @eq ( Ωilxt__60 = -> number_lx.level                                               ), gnd
      @eq ( Ωilxt__61 = -> number_lx.hit                                                 ), '00102'
      @eq ( Ωilxt__62 = -> number_lx.start                                               ), 8
      @eq ( Ωilxt__63 = -> number_lx.stop                                                ), 13
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    new_regex_tag_preview: ->
      # { Grammar
      #   rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      do =>
        { rx
          regex
          new_regex_tag } = require '../../../apps/interlex'
        debug 'Ωilxt__64', rx = new_regex_tag 'dy'
        debug 'Ωilxt__65', ( new_regex_tag 'dy' )"[a-z]"
        debug 'Ωilxt__66', ( new_regex_tag 'dy' ).si
        debug 'Ωilxt__67', ( new_regex_tag 'dy' ).si"[a-z]"
        @throws ( Ωilxt__68 = -> ( new_regex_tag 'dy' ).ab"[a-z]" ), /invalid flags/
        # rx"x"
        # ( rx 's' )
        # debug ( rx 's' )"x#{/a/i}"
        # debug ( rx 's' )"x#{/a/i}"
        # # debug /\p{ghfghfgh}/v
        # debug ( rx 's' )"s) x#{/a/i}"
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    copy_regex: ->
      { _copy_regex } = require '../../../apps/interlex'
      @eq ( Ωilxt__69 = -> typeof _copy_regex                                         ), 'function'
      @eq ( Ωilxt__70 = -> ( _copy_regex /[a-z]/i, 'I'          ) instanceof RegExp   ), true
      @eq ( Ωilxt__71 = -> ( _copy_regex /[a-z]/i, 'I'          ).source              ), '[a-z]'
      @eq ( Ωilxt__72 = -> ( _copy_regex /[a-z]/i, 'I'          ).flags               ), ''
      @eq ( Ωilxt__73 = -> ( _copy_regex /[a-z]/i, 'Ig'         ).flags               ), 'g'
      @eq ( Ωilxt__74 = -> ( _copy_regex /[a-z]/i, 'IgV'        ).flags               ), 'g'
      @eq ( Ωilxt__75 = -> ( _copy_regex /[a-z]/i, 'gv'         ).flags               ), 'giv'
      @eq ( Ωilxt__76 = -> ( _copy_regex /[a-z]/i, 'gu'         ).flags               ), 'giu'
      @eq ( Ωilxt__77 = -> ( _copy_regex /[a-z]/igvys, 'SYVGI'  ).flags               ), ''
      @throws ( Ωilxt__78 = -> _copy_regex /[a-z]/i, 'guv'      ), /Invalid flags supplied to RegExp constructor/
      @throws ( Ωilxt__79 = -> _copy_regex /[a-z]/u, 'v'        ), /Invalid flags supplied to RegExp constructor/
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    rx_flags: ->
      { rx
        new_regex_tag } = require '../../../apps/interlex'
      @eq ( Ωilxt__80 = -> ( rx"x"        ).flags ), 'dvy'
      @eq ( Ωilxt__81 = -> ( rx.si"x"     ).flags ), 'disvy'
      # @eq ( Ωilxt__82 = -> ( rx.sidvy"x"  ).flags ), 'disvy'
      @eq ( Ωilxt__83 = -> ( rx.y"x"      ).flags ), 'dvy'
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
        @eq ( Ωilxt__84 = -> g.cfg.counter_name   ), 'line_nr'
        @eq ( Ωilxt__85 = -> g.cfg.counter_step   ), +1
        @eq ( Ωilxt__86 = -> g.cfg.counter_value  ), 1
        @eq ( Ωilxt__87 = -> g.state.count        ), 1
        probes_and_matchers = [
          [ "1st line",           1, ]
          [ "2nd line",           2, ]
          [ "3rd line",           3, ]
          [ "4th line (and EOF)", 4, ] ]
        #...................................................................................................
        for [ probe, matcher, ] from probes_and_matchers
          info 'Ωilxt__88', rpr probe
          tokens = g.get_tokens probe
          urge 'Ωilxt__89', tokens
          @eq ( Ωilxt__90 = -> tokens[ 0 ].line_nr ), matcher
        return null
      #.....................................................................................................
      do =>
        g = new_grammar { counter_name: 'test_id', counter_step: -1, counter_value: 10, }
        @eq ( Ωilxt__91 = -> g.cfg.counter_name   ), 'test_id'
        @eq ( Ωilxt__92 = -> g.cfg.counter_step   ), -1
        @eq ( Ωilxt__93 = -> g.cfg.counter_value  ), 10
        @eq ( Ωilxt__94 = -> g.state.count        ), 10
        probes_and_matchers = [
          [ "1st line",           10, ]
          [ "2nd line",           9, ]
          [ "3rd line",           8, ]
          [ "4th line (and EOF)", 7, ] ]
        #...................................................................................................
        for [ probe, matcher, ] from probes_and_matchers
          info 'Ωilxt__95', rpr probe
          tokens = g.get_tokens probe
          # urge 'Ωilxt__96', tokens
          urge 'Ωilxt__97', g
          urge 'Ωilxt__98', g.cfg
          urge 'Ωilxt__99', g.state
          @eq ( Ωilxt_100 = -> tokens[ 0 ].test_id ), matcher
        return null
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
      # debug 'Ωilxt_101', [ string11, string12, ]
      # console.debug 'Ωilxt_102', [ string11, string12, ]
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
      debug 'Ωilxt_103', g
      debug 'Ωilxt_104', g.levels
      debug 'Ωilxt_105', g.levels.gnd
      debug 'Ωilxt_106', g.levels.gnd.tokens
      debug 'Ωilxt_107', gnd
      debug 'Ωilxt_108', token for token from gnd
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
        urge 'Ωilxt_109', f"#{start}:>3.0f;:#{stop}:<3.0f; #{fqname}:<20c; #{rpr hit}:<30c; #{jump_rpr}:<15c; #{groups_rpr}"
      #.........................................................................................................
      sources = [
        "Alice in Cairo 1912 (approximately)"
        "Alice in Cairo 1912 'approximately'"
        ]
      #.........................................................................................................
      for source from sources
        info 'Ωilxt_110', rpr source
        for lexeme from g.walk_tokens source
          show_lexeme lexeme
      #.........................................................................................................
      return null


#===========================================================================================================
if module is require.main then await do =>
  ( new Test { throw_on_error: true, } ).test @interlex_tasks
  ( new Test { throw_on_error: true, } ).test { copy_regex: @interlex_tasks.basics.copy_regex, }
  # ( new Test { throw_on_error: true, } ).test { demo: @interlex_tasks.demo.demo, }
  # demo()
  # demo_jsidentifier()
  do =>
  f = ->
    help 'Ωilxt_111', Array.from 'a🈯z'
    help 'Ωilxt_112', 'a🈯z'.split /(.)/u
    help 'Ωilxt_113', 'a🈯z'.split( /(.)/v )
    help 'Ωilxt_114', 'a🈯z'.split( /(.)/d )
    help 'Ωilxt_115', match = 'a🈯z'.match /^(?<head>[a-z]+)(?<other>[^a-z]+)(?<tail>[a-z]+)/d
    help 'Ωilxt_116', { match.groups..., }
    help 'Ωilxt_117', { match.indices.groups..., }
    # help 'Ωilxt_118', rx"."
    # help 'Ωilxt_119', rx/./


