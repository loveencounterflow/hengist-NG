
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
  whisper }               = GUY.trm.get_loggers 'bricabrac-sfmodules/test-basics'
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
@tasks =

    #-------------------------------------------------------------------------------------------------------
    jetstream_1: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        internals,              } = SFMODULES.require_jetstream()
      #.....................................................................................................
      @eq ( Ωjtstm___1 = -> type_of ( new Jetstream() )              ), 'object'
      @eq ( Ωjtstm___2 = -> type_of ( new Jetstream() ).walk 'data'  ), 'generator'
      #.....................................................................................................
      do =>
        first     = { 'first',  }
        last      = { 'last',   }
        jet       = new Jetstream()
        #...................................................................................................
        @eq ( Ωjtstm___3 = -> jet.length                                       ), 0
        @eq ( Ωjtstm___4 = -> jet.is_empty                                     ), true
        #...................................................................................................
        watched_1 = []
        watched_2 = []
        watched_3 = []
        watched_4 = []
        jet.push watch = ( d              ) -> help 'Ωjtstm___5', rpr d; watched_1.push d
        jet.push upper = ( d              ) ->
          return yield d unless ( typeof d ) is 'string'
          yield d.toUpperCase()
        jet.push watch = ( d              ) -> info 'Ωjtstm___6', rpr d; watched_2.push d
        jet.push ex    = ( d, mark = '!'  ) ->
          return yield d if d in [ first, last, ]
          yield d + mark
        jet.push watch = ( d              ) -> help 'Ωjtstm___7', rpr d; watched_3.push d
        jet.push surround = ( d ) ->
          return yield """Let's say: \""""  if d is first
          return yield '".'                 if d is last
          yield d
        jet.push filter = ( d              ) -> yield d unless d in [ first, last, ]
        jet.push watch  = ( d              ) -> urge 'Ωjtstm___8', rpr d; watched_4.push d
        #...................................................................................................
        @eq ( Ωjtstm___9 = -> jet.length                                               ), 8
        @eq ( Ωjtstm__10 = -> jet.is_empty                                             ), false
        @eq ( Ωjtstm__11 = -> jet.send first, 'hidey-ho', last                         ), null
        @eq ( Ωjtstm__12 = -> [ ( d for d from jet.walk() )..., ]                      ), [ """Let's say: \"""", 'HIDEY-HO!', '".' ]
        @eq ( Ωjtstm__13 = -> watched_1                                                ), [ first, 'hidey-ho',   last, ]
        @eq ( Ωjtstm__14 = -> watched_2                                                ), [ first, 'HIDEY-HO',   last, ]
        @eq ( Ωjtstm__15 = -> watched_3                                                ), [ first, 'HIDEY-HO!',  last, ]
        @eq ( Ωjtstm__16 = -> watched_4                                                ), [ """Let's say: \"""", 'HIDEY-HO!', '".'   ]
        @eq ( Ωjtstm__17 = -> [ ( d for d from jet.walk first, 'hidey-ho', last )..., ].join ''     ), """Let's say: "HIDEY-HO!"."""
        @eq ( Ωjtstm__18 = -> (   d for d from jet.run  first, 'hidey-ho', last       ).join ''     ), """Let's say: "HIDEY-HO!"."""
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    jetstream_2: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        internals,              } = SFMODULES.require_jetstream()
      #.....................................................................................................
      do =>
        jet       = new Jetstream()
        #...................................................................................................
        jet.push add_1 = ( d ) -> yield d + 1
        jet.push add_1 = ( d ) -> yield d + 1
        jet.push add_1 = ( d ) -> yield d + 1
        jet.push add_1 = ( d ) -> yield d + 1
        jet.push add_1 = ( d ) -> yield d + 1
        #...................................................................................................
        @eq ( Ωjtstm__19 = -> [ ( d for d from jet.walk 0 )..., ]          ), [ 5, ]
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    jetstream_2: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        internals,              } = SFMODULES.require_jetstream()
      #.....................................................................................................
      do =>
        ### empty pipeline is a pipeline without transforms, so data is passed through untransformed: ###
        @eq ( Ωjtstm__20 = -> [ ( ( new Jetstream() ).walk 'data' )...,  ] ), [ 'data', ]
        @eq ( Ωjtstm__21 = ->     ( new Jetstream() ).run  'data'          ), [ 'data', ]
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    jetstream_3: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        internals,              } = SFMODULES.require_jetstream()
      #.....................................................................................................
      do =>
        collector = []
        #...................................................................................................
        p_1 = new Jetstream()
        p_1.push ( d ) -> collector.push 'p1-t1'; yield d + ' № 1'
        p_1.push ( d ) -> collector.push 'p1-t2'; yield d + ' № 2'
        #...................................................................................................
        p_2 = new Jetstream()
        p_2.push ( d ) -> collector.push 'p2-t1'; yield d + ' № 3'
        p_2.push p_1
        p_2.push ( d ) -> collector.push 'p2-t2'; yield d + ' № 4'
        #...................................................................................................
        p_3 = new Jetstream()
        p_3.push ( d ) -> collector.push 'p3-t1'; yield d + ' № 5'
        p_3.push p_2
        p_3.push ( d ) -> collector.push 'p3-t2'; yield d + ' № 6'
        @eq ( Ωjtstm__22 = -> p_3.run        'my-data' ), [ 'my-data № 5 № 3 № 1 № 2 № 4 № 6' , ]
        @eq ( Ωjtstm__23 = -> collector                ), [ 'p3-t1', 'p2-t1', 'p1-t1', 'p1-t2', 'p2-t2', 'p3-t2' ]
        @eq ( Ωjtstm__24 = -> p_3.get_first  'my-data' ), 'my-data № 5 № 3 № 1 № 2 № 4 № 6'
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    jetstream_3: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        internals,              } = SFMODULES.require_jetstream()
      #.....................................................................................................
      do => ### same as above but the transforms are separate ###
        first         = { 'first',  }
        last          = { 'last',   }
        jet           = new Jetstream()
        g1            = ( d ) ->
          urge 'Ωjtstm__25 g1', d
          switch d
            when first
              yield d
              yield 0
            when last
              yield 1
              yield d
            else
              yield d * 2
        g2            = ( d ) ->
          urge 'Ωjtstm__26 g2', d
          switch d
            when first
              yield d
              yield 0
            when last
              yield 1
              yield d
            else
              yield d * 2
        jet.push g1
        jet.push g2
        jet.push ( d ) -> yield d unless d in [ first, last, ]
        debug 'Ωjtstm__27', jet
        whisper 'Ωjtstm__28', '————————————————————————————————————–'
        @eq ( Ωjtstm__29 = -> jet.run first, 22, last                   ), [ 0, 0, 88, 2, 1 ]
        whisper 'Ωjtstm__30', '————————————————————————————————————–'
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    jetstream_selectors: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        internals,              } = SFMODULES.require_jetstream()
      { Selector,
        _normalize_selectors,
        normalize_selectors,
        selectors_as_list,
        id_from_symbol,         } = internals
      #.....................................................................................................
      # @eq ( Ωjtstm__31 = -> type_of ( new Jetstream() )              ), 'object'
      #.....................................................................................................
      stream_items = [
        Symbol 'start'
        Symbol 'end'
        76.9
        "Mexico"
        null
        ]
      probes_and_matchers = [
        { probe: 'cue',                      sel_list: [ 'cue'                  ], nrm_sel: [ 'cue#*'                ], sel_rpr: 'cue',                data: false, cues: true,                accept_all: false,  }
        { probe: '#',                        sel_list: [ '#'                    ], nrm_sel: [ 'cue#*'                ], sel_rpr: '#',                  data: false, cues: true,                accept_all: false,  }
        #...................................................................................................
        { probe: 'cue#end',                  sel_list: [ 'cue#end'              ], nrm_sel: [ 'cue#end'              ], sel_rpr: 'cue#end',            data: false, cues: [ 'end' ],           accept_all: false, }
        { probe: '#end',                     sel_list: [ '#end'                 ], nrm_sel: [ 'cue#end'              ], sel_rpr: '#end',               data: false, cues: [ 'end' ],           accept_all: false, }
        #...................................................................................................
        { probe: '#end,#start,',             sel_list: [ '#end', '#start', ''   ], nrm_sel: [ 'cue#end', 'cue#start' ], sel_rpr: '#end, #start, ',     data: false, cues: [ 'end', 'start' ],  accept_all: false, }
        { probe: '#end,#start',              sel_list: [ '#end', '#start'       ], nrm_sel: [ 'cue#end', 'cue#start' ], sel_rpr: '#end, #start',       data: false, cues: [ 'end', 'start' ],  accept_all: false, }
        #...................................................................................................
        { probe: 'cue#foo#bar',              sel_list: [ 'cue#foo#bar'          ], nrm_sel: [ 'cue#foo#bar'          ], sel_rpr: 'cue#foo#bar',        data: false, cues: [ 'foo#bar' ],       accept_all: false, }
        { probe: '#foo#bar',                 sel_list: [ '#foo#bar'             ], nrm_sel: [ 'cue#foo#bar'          ], sel_rpr: '#foo#bar',           data: false, cues: [ 'foo#bar' ],       accept_all: false, }
        #...................................................................................................
        { probe: 'cue#start',                sel_list: [ 'cue#start'            ], nrm_sel: [ 'cue#start'            ], sel_rpr: 'cue#start',          data: false, cues: [ 'start' ],         accept_all: false, }
        { probe: '#start',                   sel_list: [ '#start'               ], nrm_sel: [ 'cue#start'            ], sel_rpr: '#start',             data: false, cues: [ 'start' ],         accept_all: false, }
        #...................................................................................................
        { probe: [ 'cue#start', 'cue#end' ], sel_list: [ 'cue#start', 'cue#end' ], nrm_sel: [ 'cue#start', 'cue#end' ], sel_rpr: 'cue#start, cue#end', data: false, cues: [ 'start', 'end' ],  accept_all: false, }
        { probe: [ '#start', '#end' ],       sel_list: [ '#start', '#end'       ], nrm_sel: [ 'cue#start', 'cue#end' ], sel_rpr: '#start, #end',       data: false, cues: [ 'start', 'end' ],  accept_all: false, }
        { probe: 'cue#start,cue#end',        sel_list: [ 'cue#start', 'cue#end' ], nrm_sel: [ 'cue#start', 'cue#end' ], sel_rpr: 'cue#start, cue#end', data: false, cues: [ 'start', 'end' ],  accept_all: false, }
        { probe: '#start,#end',              sel_list: [ '#start', '#end'       ], nrm_sel: [ 'cue#start', 'cue#end' ], sel_rpr: '#start, #end',       data: false, cues: [ 'start', 'end' ],  accept_all: false, }
        { probe: ' cue#start, cue#end ',     sel_list: [ 'cue#start', 'cue#end' ], nrm_sel: [ 'cue#start', 'cue#end' ], sel_rpr: 'cue#start, cue#end', data: false, cues: [ 'start', 'end' ],  accept_all: false, }
        #...................................................................................................
        { probe: null,                       sel_list: [ ''                     ], nrm_sel: [ 'data#*'               ], sel_rpr: '',                   data: true, cues: false,               accept_all: false, }
        { probe: [],                         sel_list: [                        ], nrm_sel: [ 'data#*'               ], sel_rpr: '',                   data: true, cues: false,               accept_all: false, }
        { probe: [ [] ],                     sel_list: [                        ], nrm_sel: [ 'data#*'               ], sel_rpr: '',                   data: true, cues: false,               accept_all: false, }
        { probe: [ [ '' ] ],                 sel_list: [ ''                     ], nrm_sel: [ 'data#*'               ], sel_rpr: '',                   data: true, cues: false,               accept_all: false, }
        { probe: 'data',                     sel_list: [ 'data'                 ], nrm_sel: [ 'data#*'               ], sel_rpr: 'data',               data: true, cues: false,               accept_all: false, }
        { probe: '',                         sel_list: [ ''                     ], nrm_sel: [ 'data#*'               ], sel_rpr: '',                   data: true, cues: false,               accept_all: false, }
        { probe: 'data#',                    sel_list: [ 'data#'                ], nrm_sel: [ 'data#*'               ], sel_rpr: 'data#',              data: true, cues: false,               accept_all: false, }
        #...................................................................................................
        { probe: [ 'data', 'cue' ],          sel_list: [ 'data', 'cue'          ], nrm_sel: [ 'data#*', 'cue#*'      ], sel_rpr: 'data, cue',          data: true, cues: true,                accept_all: true,  }
        { probe: 'data, cue',                sel_list: [ 'data', 'cue'          ], nrm_sel: [ 'data#*', 'cue#*'      ], sel_rpr: 'data, cue',          data: true, cues: true,                accept_all: true,  }
        #...................................................................................................
        { probe: 'data#foo#bar', error: /IDs on data items not supported/, }
        ]
      selectors_and_selections = [
        { sel: 'cue',                      nrm: 'cue#*',             'Symbol(start)': true, 'Symbol(end)': true, '76.9': false, "'Mexico'": false, null: false }
        { sel: '#',                        nrm: 'cue#*',             'Symbol(start)': true, 'Symbol(end)': true, '76.9': false, "'Mexico'": false, null: false }
        #...................................................................................................
        { sel: 'cue#end',                  nrm: 'cue#end',           'Symbol(start)': false, 'Symbol(end)': true, '76.9': false, "'Mexico'": false, null: false }
        { sel: '#end',                     nrm: 'cue#end',           'Symbol(start)': false, 'Symbol(end)': true, '76.9': false, "'Mexico'": false, null: false }
        #...................................................................................................
        { sel: '#end,#start,',             nrm: 'cue#end,cue#start', 'Symbol(start)': true, 'Symbol(end)': true, '76.9': false, "'Mexico'": false, null: false }
        { sel: '#end,#start',              nrm: 'cue#end,cue#start', 'Symbol(start)': true, 'Symbol(end)': true, '76.9': false, "'Mexico'": false, null: false }
        #...................................................................................................
        { sel: 'cue#foo#bar',              nrm: 'cue#foo#bar',       'Symbol(start)': false, 'Symbol(end)': false, '76.9': false, "'Mexico'": false, null: false }
        { sel: '#foo#bar',                 nrm: 'cue#foo#bar',       'Symbol(start)': false, 'Symbol(end)': false, '76.9': false, "'Mexico'": false, null: false }
        #...................................................................................................
        { sel: 'cue#start',                nrm: 'cue#start',         'Symbol(start)': true, 'Symbol(end)': false, '76.9': false, "'Mexico'": false, null: false }
        { sel: '#start',                   nrm: 'cue#start',         'Symbol(start)': true, 'Symbol(end)': false, '76.9': false, "'Mexico'": false, null: false }
        #...................................................................................................
        { sel: [ 'cue#start', 'cue#end' ], nrm: 'cue#start,cue#end', 'Symbol(start)': true, 'Symbol(end)': true, '76.9': false, "'Mexico'": false, null: false }
        { sel: [ '#start', '#end' ],       nrm: 'cue#start,cue#end', 'Symbol(start)': true, 'Symbol(end)': true, '76.9': false, "'Mexico'": false, null: false }
        { sel: 'cue#start,cue#end',        nrm: 'cue#start,cue#end', 'Symbol(start)': true, 'Symbol(end)': true, '76.9': false, "'Mexico'": false, null: false }
        { sel: '#start,#end',              nrm: 'cue#start,cue#end', 'Symbol(start)': true, 'Symbol(end)': true, '76.9': false, "'Mexico'": false, null: false }
        { sel: ' cue#start, cue#end ',     nrm: 'cue#start,cue#end', 'Symbol(start)': true, 'Symbol(end)': true, '76.9': false, "'Mexico'": false, null: false }
        #...................................................................................................
        { sel: null,                       nrm: 'data#*',            'Symbol(start)': false, 'Symbol(end)': false, '76.9': true, "'Mexico'": true, null: true }
        { sel: [],                         nrm: 'data#*',            'Symbol(start)': false, 'Symbol(end)': false, '76.9': true, "'Mexico'": true, null: true }
        { sel: [ [] ],                     nrm: 'data#*',            'Symbol(start)': false, 'Symbol(end)': false, '76.9': true, "'Mexico'": true, null: true }
        { sel: [ [ '' ] ],                 nrm: 'data#*',            'Symbol(start)': false, 'Symbol(end)': false, '76.9': true, "'Mexico'": true, null: true }
        { sel: 'data',                     nrm: 'data#*',            'Symbol(start)': false, 'Symbol(end)': false, '76.9': true, "'Mexico'": true, null: true }
        { sel: '',                         nrm: 'data#*',            'Symbol(start)': false, 'Symbol(end)': false, '76.9': true, "'Mexico'": true, null: true }
        { sel: 'data#',                    nrm: 'data#*',            'Symbol(start)': false, 'Symbol(end)': false, '76.9': true, "'Mexico'": true, null: true }
        #...................................................................................................
        { sel: [ 'data', 'cue' ],          nrm: 'data#*,cue#*',      'Symbol(start)': true, 'Symbol(end)': true, '76.9': true, "'Mexico'": true, null: true }
        { sel: 'data, cue',                nrm: 'data#*,cue#*',      'Symbol(start)': true, 'Symbol(end)': true, '76.9': true, "'Mexico'": true, null: true }
        ]
      #=====================================================================================================
      do =>
        for p in probes_and_matchers
          if p.error?
            @throws ( Ωjtstm__32 = -> new Selector p.probe ), p.error
            continue
          probe           = p.probe
          sel_list        = selectors_as_list   probe
          nrm_sel         = [ ( normalize_selectors probe )..., ]
          sel             = new Selector        probe
          sel_rpr         = sel.toString()
          { data,
            cues,
            accept_all, } = sel._get_excerpt()
          data            = [ ( data )..., ] unless data in [ true, false, ]
          cues            = [ ( cues )..., ] unless cues in [ true, false, ]
          # echo { probe, sel_list, nrm_sel, sel_rpr, data, cues, accept_all, }
          @eq ( Ωjtstm__33 = -> sel_list    ), p.sel_list
          @eq ( Ωjtstm__34 = -> nrm_sel     ), p.nrm_sel
          @eq ( Ωjtstm__35 = -> sel_rpr     ), p.sel_rpr
          @eq ( Ωjtstm__36 = -> data        ), p.data
          @eq ( Ωjtstm__37 = -> cues        ), p.cues
          @eq ( Ωjtstm__38 = -> accept_all  ), p.accept_all
        return null
      #-----------------------------------------------------------------------------------------------------
      do =>
        display_matcher = true
        display_matcher = false
        for entry in selectors_and_selections
          selector  = new Selector entry.sel
          nrm       = [ ( normalize_selectors entry.sel )..., ].join ','
          line      = { sel: entry.sel, nrm, }
          for item in stream_items
            result            = selector.select item
            line[ rpr item ]  = selector.select item
            unless display_matcher
              if result isnt entry[ rpr item ]
                echo { selector: entry.sel, nrm, item, result, }
              @eq ( Ωjtstm__39 = -> result ), entry[ rpr item ]
          if display_matcher
            echo line
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    build_pipelines: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        internals,              } = SFMODULES.require_jetstream()
      # { Selector,
      #   _normalize_selectors,
      #   normalize_selectors,
      #   selectors_as_list,
      #   id_from_symbol,         } = internals
      #.....................................................................................................
      do =>
        jet = new Jetstream()
        jet.push prepend = ( d ) -> yield '(' + d
        jet.push apppend = ( d ) -> yield d + ')'
        @eq ( Ωjtstm__40 = -> jet.get_first 'string' ), '(string)'
        return null
      #.....................................................................................................
      do =>
        jet = new Jetstream()
        jet.push prepend = ( d ) -> yield '(' + d
        jet.push apppend = ( d ) -> yield d + ')'
        @eq ( Ωjtstm__41 = -> jet.send 'string'  ), null
        @eq ( Ωjtstm__42 = -> jet.shelf          ), [ 'string', ]
        @eq ( Ωjtstm__43 = -> jet.send 'other'  ), null
        @eq ( Ωjtstm__44 = -> jet.shelf          ), [ 'string', 'other', ]
        @eq ( Ωjtstm__45 = -> jet.get_first()    ), '(string)'
        @eq ( Ωjtstm__46 = -> jet.shelf          ), []
        @eq ( Ωjtstm__47 = -> jet.run()          ), []
      #.....................................................................................................
      do =>
        jet = new Jetstream()
        jet.push prepend = ( d ) -> yield '(' + d
        jet.push apppend = ( d ) -> yield d + ')'
        @eq ( Ωjtstm__48 = -> jet.send 'string'  ), null
        @eq ( Ωjtstm__49 = -> jet.shelf          ), [ 'string', ]
        @eq ( Ωjtstm__50 = -> jet.send 'other'  ), null
        iterator = jet.walk()
        @eq ( Ωjtstm__51 = -> jet.shelf          ), [ 'string', 'other', ]
        @eq ( Ωjtstm__52 = -> iterator.next()    ), { done: false,  value: '(string)', }
        @eq ( Ωjtstm__53 = -> jet.shelf          ), [ 'other', ]
        @eq ( Ωjtstm__54 = -> iterator.next()    ), { done: false,  value: '(other)', }
        @eq ( Ωjtstm__55 = -> jet.shelf          ), []
        @eq ( Ωjtstm__56 = -> iterator.next()    ), { done: true,   value: null, }
        return null
      #.....................................................................................................
      do =>
        jet = new Jetstream()
        jet.push prepend = ( d ) -> yield '(' + d
        jet.push apppend = ( d ) -> yield d + ')'
        @eq ( Ωjtstm__57 = -> jet.send 'string'  ), null
        @eq ( Ωjtstm__58 = -> jet.shelf          ), [ 'string', ]
        @eq ( Ωjtstm__59 = -> jet.send 'other'  ), null
        iterator = jet.walk 'trois', 'quatre'
        @eq ( Ωjtstm__60 = -> jet.shelf          ), [ 'string', 'other', 'trois', 'quatre', ]
        @eq ( Ωjtstm__61 = -> iterator.next()    ), { done: false,  value: '(string)', }
        @eq ( Ωjtstm__62 = -> jet.shelf          ), [ 'other', 'trois', 'quatre', ]
        @eq ( Ωjtstm__63 = -> iterator.next()    ), { done: false,  value: '(other)', }
        @eq ( Ωjtstm__64 = -> jet.shelf          ), [ 'trois', 'quatre', ]
        @eq ( Ωjtstm__65 = -> iterator.next()    ), { done: false,  value: '(trois)', }
        @eq ( Ωjtstm__66 = -> jet.shelf          ), [ 'quatre', ]
        @eq ( Ωjtstm__67 = -> iterator.next()    ), { done: false,  value: '(quatre)', }
        @eq ( Ωjtstm__68 = -> jet.shelf          ), []
        @eq ( Ωjtstm__69 = -> iterator.next()    ), { done: true,   value: null, }
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    configure_transforms: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        internals,              } = SFMODULES.require_jetstream()
      # { Selector,
      #   _normalize_selectors,
      #   normalize_selectors,
      #   selectors_as_list,
      #   id_from_symbol,         } = internals
      #.....................................................................................................
      do =>
        first = Symbol 'first'
        last  = Symbol 'last'
        jet = new Jetstream()
        jet.push 'data,#last', prepend = ( d ) ->
          switch d
            when last   then yield 'yay';   yield d
            when first  then yield 'oops';  yield d
            else yield '(' + d
          return null
        jet.push                  apppend = ( d ) -> yield d + ')'
        jet.push '#first,#last',  filter  = ( d ) -> debug 'Ωjtstm__70', d; yield return
        #...................................................................................................
        debug 'Ωjtstm__71', jet.run first, 'birdistheword', last
        # @eq ( Ωjtstm__72 = -> jet.get_first 'string' ), '(string)'
        return null
      #.....................................................................................................
      return null




#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @tasks
  # ( new Test guytest_cfg ).test { jetstream_1: @tasks.jetstream_1, }
  ( new Test guytest_cfg ).test { configure_transforms: @tasks.configure_transforms, }
