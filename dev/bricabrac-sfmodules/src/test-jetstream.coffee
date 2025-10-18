
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
        @eq ( Ωjtstm__24 = -> p_3.pick_first  'my-data' ), 'my-data № 5 № 3 № 1 № 2 № 4 № 6'
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
        { sel: '*',                        nrm: 'data#*,cue#*',      'Symbol(start)': true, 'Symbol(end)': true, '76.9': true, "'Mexico'": true, null: true }
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
      #.....................................................................................................
      do =>
        jet = new Jetstream()
        jet.push prepend = ( d ) -> yield '(' + d
        jet.push apppend = ( d ) -> yield d + ')'
        @eq ( Ωjtstm__40 = -> jet.pick_first 'string' ), '(string)'
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
        @eq ( Ωjtstm__45 = -> jet.pick_first()    ), '(string)'
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
      #.....................................................................................................
      do =>
        first = Symbol 'first'
        last  = Symbol 'last'
        jet = new Jetstream()
        jet.push ( d ) -> yield "*#{d}*"
        jet.push '#first', prepend = ( d ) ->
          return yield from [ d, '(', ] if d is first
          yield 'error#1'
        jet.push '#last', append = ( d ) ->
          return yield from [ ')', d, ] if d is last
          yield 'error#2'
        #...................................................................................................
        @eq ( Ωjtstm__70 = -> jet.run first, 'birdistheword', last ), [ '(', '*birdistheword*', ')', ]
        return null
      #.....................................................................................................
      do =>
        first = Symbol 'first'
        last  = Symbol 'last'
        jet   = new Jetstream()
        jet.push ( d ) -> yield "*#{d}*"
        jet.push '#first', prepend = ( d ) -> yield from [ d, '(', ]; null
        jet.push '#last',  append  = ( d ) -> yield from [ ')', d, ]; null
        #...................................................................................................
        @eq ( Ωjtstm__71 = -> jet.run first, 'birdistheword', last ), [ '(', '*birdistheword*', ')', ]
        return null
      #.....................................................................................................
      do =>
        first = Symbol 'first'
        last  = Symbol 'last'
        jet   = new Jetstream { outlet: 'data,cue', }
        jet.push ( d ) -> yield "*#{d}*"
        jet.push '#first', prepend = ( d ) -> yield from [ d, '(', ]; null
        jet.push '#last',  append  = ( d ) -> yield from [ ')', d, ]; null
        #...................................................................................................
        @eq ( Ωjtstm__72 = -> jet.run first, 'birdistheword', last ), [ first, '(', '*birdistheword*', ')', last, ]
        return null
      #.....................................................................................................
      do =>
        first = Symbol 'first'
        last  = Symbol 'last'
        jet   = new Jetstream { outlet: '*', }
        jet.push ( d ) -> yield "*#{d}*"
        jet.push '#first', prepend = ( d ) -> yield from [ d, '(', ]; null
        jet.push '#last',  append  = ( d ) -> yield from [ ')', d, ]; null
        #...................................................................................................
        @eq ( Ωjtstm__73 = -> jet.run first, 'birdistheword', last ), [ first, '(', '*birdistheword*', ')', last, ]
        return null
      #.....................................................................................................
      do =>
        first = Symbol 'first'
        last  = Symbol 'last'
        jet   = new Jetstream()
        jet.push ( d ) -> yield "*#{d}*"
        jet.push '#first', prepend = ( d ) -> yield from [ d, '(', ]; null
        jet.push '#last',  append  = ( d ) -> yield from [ ')', d, ]; null
        jet.configure { outlet: '*', }
        #...................................................................................................
        @eq ( Ωjtstm__74 = -> jet.run first, 'birdistheword', last ), [ first, '(', '*birdistheword*', ')', last, ]
        return null
      #.....................................................................................................
      do =>
        first = Symbol 'first'
        last  = Symbol 'last'
        jet   = new Jetstream()
        jet.push ( d ) -> yield "*#{d}*"
        jet.push '#first', prepend = ( d ) -> yield from [ d, '(', ]; null
        jet.push '#last',  append  = ( d ) -> yield from [ ')', d, ]; null
        jet.configure { pick: 'first', }
        #...................................................................................................
        @eq ( Ωjtstm__75 = -> jet.run first, 'birdistheword', last ), '('
        return null
      #.....................................................................................................
      do =>
        first = Symbol 'first'
        last  = Symbol 'last'
        jet   = new Jetstream()
        jet.push ( d ) -> yield "*#{d}*"
        jet.push '#first', prepend = ( d ) -> yield from [ d, '(', ]; null
        jet.push '#last',  append  = ( d ) -> yield from [ ')', d, ]; null
        jet.configure { outlet: 'data,cue', pick: 'first', }
        #...................................................................................................
        @eq ( Ωjtstm__76 = -> jet.run first, 'birdistheword', last ), first
        return null
      #.....................................................................................................
      do =>
        first = Symbol 'first'
        last  = Symbol 'last'
        jet   = new Jetstream()
        jet.push ( d ) -> yield "*#{d}*"
        jet.push '#first', prepend = ( d ) -> yield from [ d, '(', ]; null
        jet.push '#last',  append  = ( d ) -> yield from [ ')', d, ]; null
        jet.configure { pick: 'last', }
        #...................................................................................................
        @eq ( Ωjtstm__77 = -> jet.cfg.pick                          ), 'last'
        @eq ( Ωjtstm__78 = -> jet.run first, 'birdistheword', last  ), ')'
        return null
      #.....................................................................................................
      do =>
        first = Symbol 'first'
        last  = Symbol 'last'
        jet   = new Jetstream { pick: 'first', }
        jet.push ( d ) -> yield "*#{d}*"
        jet.push '#first', prepend = ( d ) -> yield from [ d, '(', ]; null
        jet.push '#last',  append  = ( d ) -> yield from [ ')', d, ]; null
        #...................................................................................................
        @throws ( Ωjtstm__79 = -> jet.run() ), /no results/
        return null
      #.....................................................................................................
      do =>
        fallback  = Symbol 'fallback'
        jet       = new Jetstream { pick: 'first', fallback, }
        jet.push ( d ) -> yield "*#{d}*"
        jet.push ( d ) -> yield from [ d, '(', ]; null
        jet.push ( d ) -> yield from [ ')', d, ]; null
        #...................................................................................................
        @eq ( Ωjtstm__80 = -> jet.run() ), fallback
        return null
      #.....................................................................................................
      do =>
        fallback  = Symbol 'fallback'
        jet       = new Jetstream { pick: 'first', fallback, }
        ordering  = []
        jet.push a = ( d ) -> ordering.push "a#{d}"; yield d * 2
        jet.push b = ( d ) -> ordering.push "b#{d}"; yield d * 3
        jet.push c = ( d ) -> ordering.push "c#{d}"; yield d * 5
        #...................................................................................................
        @eq ( Ωjtstm__81 = -> [ ( jet.walk 1, 2, 3 )..., ]                  ), [ 30, ]
        @eq ( Ωjtstm__82 = -> R = ordering.join ' '; ordering.length = 0; R ), 'a1 b2 c6 a2 b4 c12 a3 b6 c18'
        @eq ( Ωjtstm__83 = -> jet.run 1, 2, 3                               ), 30
        @eq ( Ωjtstm__84 = -> R = ordering.join ' '; ordering.length = 0; R ), 'a1 b2 c6 a2 b4 c12 a3 b6 c18'
        return null
      #.....................................................................................................
      do =>
        fallback  = Symbol 'fallback'
        jet       = new Jetstream { pick: 'last', fallback, }
        ordering  = []
        jet.push a = ( d ) -> ordering.push "a#{d}"; yield d * 2
        jet.push b = ( d ) -> ordering.push "b#{d}"; yield d * 3
        jet.push c = ( d ) -> ordering.push "c#{d}"; yield d * 5
        #...................................................................................................
        jet.send 1, 2, 3
        generator = jet.walk()
        @eq ( Ωjtstm__85 = -> generator.next()                                ), { value: 90, done: false, }
        @eq ( Ωjtstm__86 = -> R = ordering.join ' '; ordering.length = 0; R   ), 'a1 b2 c6 a2 b4 c12 a3 b6 c18'
        @eq ( Ωjtstm__87 = -> jet.shelf                                       ), []
        @eq ( Ωjtstm__88 = -> generator.next()                                ), { value: null, done: true, }
        return null
      #.....................................................................................................
      do =>
        fallback  = Symbol 'fallback'
        jet       = new Jetstream { pick: 'first', fallback, }
        ordering  = []
        jet.push a = ( d ) -> ordering.push "a#{d}"; yield d * 2
        jet.push b = ( d ) -> ordering.push "b#{d}"; yield d * 3
        jet.push c = ( d ) -> ordering.push "c#{d}"; yield d * 5
        #...................................................................................................
        jet.send 1, 2, 3
        # debug 'Ωjtstm__89', [ ( jet.walk() )..., ]
        generator = jet.walk()
        @eq ( Ωjtstm__90 = -> generator.next()                                ), { value: 30, done: false, }
        @eq ( Ωjtstm__91 = -> R = ordering.join ' '; ordering.length = 0; R   ), 'a1 b2 c6'
        @eq ( Ωjtstm__92 = -> generator.next()                                ), { value: null, done: true, }
        @eq ( Ωjtstm__93 = -> R = ordering.join ' '; ordering.length = 0; R   ), 'a2 b4 c12 a3 b6 c18'
        @eq ( Ωjtstm__94 = -> generator.next()                                ), { value: undefined, done: true, }
        @eq ( Ωjtstm__95 = -> R = ordering.join ' '; ordering.length = 0; R   ), ''
        return null
      #.....................................................................................................
      do =>
        jet       = new Jetstream { pick: 'first', }
        ordering  = []
        jet.push a = ( d ) -> ordering.push "a#{d}"; yield d * 2
        jet.push b = ( d ) -> ordering.push "b#{d}"; yield d * 3
        jet.push c = ( d ) -> ordering.push "c#{d}"; yield d * 5
        #...................................................................................................
        @eq     ( Ωjtstm__96 = -> [ ( jet.walk() )..., ]                          ), []
        @eq     ( Ωjtstm__97 = -> R = ordering.join ' '; ordering.length = 0; R   ), ''
        @throws ( Ωjtstm__98 = -> jet.run()                                       ), /no results/
        @eq     ( Ωjtstm__99 = -> R = ordering.join ' '; ordering.length = 0; R   ), ''
        return null
      #.....................................................................................................
      do =>
        jet       = new Jetstream { pick: 'last', }
        ordering  = []
        jet.push a = ( d ) -> ordering.push "a#{d}"; yield d * 2
        jet.push b = ( d ) -> ordering.push "b#{d}"; yield d * 3
        jet.push c = ( d ) -> ordering.push "c#{d}"; yield d * 5
        #...................................................................................................
        @eq     ( Ωjtstm_100 = -> [ ( jet.walk() )..., ]                          ), []
        @eq     ( Ωjtstm_101 = -> R = ordering.join ' '; ordering.length = 0; R   ), ''
        @throws ( Ωjtstm_102 = -> jet.run()                                       ), /no results/
        @eq     ( Ωjtstm_103 = -> R = ordering.join ' '; ordering.length = 0; R   ), ''
        return null
      #.....................................................................................................
      do =>
        fallback  = Symbol 'fallback'
        jet       = new Jetstream { pick: 'first', fallback, }
        ordering  = []
        #...................................................................................................
        @eq ( Ωjtstm_104 = -> [ ( jet.walk() )..., ]                              ), []
        @eq ( Ωjtstm_105 = -> R = ordering.join ' '; ordering.length = 0; R       ), ''
        @eq ( Ωjtstm_106 = -> jet.run()                                           ), fallback
        @eq ( Ωjtstm_107 = -> R = ordering.join ' '; ordering.length = 0; R       ), ''
        return null
      #.....................................................................................................
      do =>
        fallback  = Symbol 'fallback'
        jet       = new Jetstream { pick: 'first', fallback, }
        ordering  = []
        #...................................................................................................
        @eq ( Ωjtstm_108 = -> [ ( jet.walk 1, 2, 3 )..., ]                        ), [ 1, ]
        @eq ( Ωjtstm_109 = -> R = ordering.join ' '; ordering.length = 0; R       ), ''
        @eq ( Ωjtstm_110 = -> jet.run 1, 2, 3                                     ), 1
        @eq ( Ωjtstm_111 = -> R = ordering.join ' '; ordering.length = 0; R       ), ''
        return null
      #.....................................................................................................
      do =>
        fallback  = Symbol 'fallback'
        jet       = new Jetstream { pick: 'last', fallback, }
        ordering  = []
        #...................................................................................................
        @eq ( Ωjtstm_112 = -> [ ( jet.walk 1, 2, 3 )..., ]                        ), [ 3, ]
        @eq ( Ωjtstm_113 = -> R = ordering.join ' '; ordering.length = 0; R       ), ''
        @eq ( Ωjtstm_114 = -> jet.run 1, 2, 3                                     ), 3
        @eq ( Ωjtstm_115 = -> R = ordering.join ' '; ordering.length = 0; R       ), ''
        return null
      #.....................................................................................................
      do =>
        fallback  = null
        jet       = new Jetstream { fallback, }
        jet.push ( d ) -> yield 10 + d; yield 20 + d ;null
        #...................................................................................................
        @eq ( Ωjtstm_116 = -> jet.pick_first 1, 2, 3    ), 11
        @eq ( Ωjtstm_117 = -> jet.pick_last 1, 2, 3     ), 23
        @eq ( Ωjtstm_118 = -> jet.pick_first()          ), fallback
        @eq ( Ωjtstm_119 = -> jet.pick_last()           ), fallback
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    jetstream_cue: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        internals,              } = SFMODULES.require_jetstream()
      #.....................................................................................................
      do =>
        fallback  = Symbol 'fallback'
        jet       = new Jetstream { fallback, outlet: '*', }
        jet.push '*', ( d ) -> help 'Ωjtstm_120', d; yield d ;null
        jet.cue 'first'
        @eq ( Ωjtstm_121 = -> jet.shelf         ), [ ( Symbol.for 'first' ), ]
        @eq ( Ωjtstm_122 = -> jet.pick_first()  ), Symbol.for 'first'
        ;null
      #.....................................................................................................
      do =>
        fallback  = Symbol 'fallback'
        jet       = new Jetstream { fallback, outlet: '*', }
        jet.push '*', ( d ) ->
          help 'Ωjtstm_123', d
          if d is Symbol.for 'first'
            jet.cue 'other-start'
            jet.send 5
            jet.cue 'other-end'
          yield d
          ;null
        jet.cue 'first'
        @eq ( Ωjtstm_124 = -> jet.shelf                       ), [ ( Symbol.for 'first' ), ]
        @eq ( Ωjtstm_125 = -> jet.pick_first()                ), Symbol.for 'first'
        @eq ( Ωjtstm_126 = -> jet.pick_all()                  ), []
        @eq ( Ωjtstm_127 = -> jet.pick_all Symbol.for 'first' ), [ ( Symbol.for 'first' ), ( Symbol.for 'other-start' ), 5, ( Symbol.for 'other-end' ) ]
        ;null
      #.....................................................................................................
      ;null

    #-------------------------------------------------------------------------------------------------------
    async_jetstream: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        Async_jetstream,
        internals,              } = SFMODULES.require_jetstream()
      #.....................................................................................................
      await do =>
        stream = new Async_jetstream()
        # debug 'Ωjtstm_128', stream
        stream.push ( d ) ->
          await GUY.async.sleep 0.05
          yield d * 2
        # debug 'Ωjtstm_129', stream.run 123, 555
        ### TAINT gotta check how to make async tests work ###
        d = await stream.run        123, 555; @eq ( ( Ωjtstm_130 = -> d )), [ 246, 1110, ]
        d = await stream.pick_first 123, 555; @eq ( ( Ωjtstm_131 = -> d )), 246
        d = await stream.pick_last  123, 555; @eq ( ( Ωjtstm_132 = -> d )), 1110
        ;null
      #.....................................................................................................
      await do =>
        stream  = new Jetstream()
        tfm     = ( d ) -> yield await d
        @eq     ( Ωjtstm_133 = -> internals.type_of tfm   ), 'asyncgeneratorfunction'
        @throws ( Ωjtstm_134 = -> stream.push tfm         ), /cannot use async transform in sync jetstream, got a asyncgeneratorfunction/
        # debug 'Ωjtstm_135', stream.run 1
        ;null
      #.....................................................................................................
      ;null


#===========================================================================================================
demo_await_fetch_website = ->
  await do =>
    stream  = new Async_jetstream()
    stream.push ( address ) -> info "Ωjtstm_136 fetching #{address}"
    stream.push ( address ) ->
      rsp = await fetch address
      info "Ωjtstm_137 got response from #{address}"
      yield rsp
    stream.push ( rsp     ) ->
      text = await rsp.text()
      info 'Ωjtstm_138', "retrieved response text"
      yield text
    # stream.push ( body    ) -> yield body.read()
    result = await stream.pick_first 'https://example.com'
    help 'Ωjtstm_139', rpr result
    # await @eq ( Ωjtstm_140 = -> await stream.pick_first 'https://example.com' ), 0
    @eq ( Ωjtstm_141 = -> result.startsWith '<!doctype html>' ), true
    # debug 'Ωjtstm_142', stream.run 1
    ;null

#===========================================================================================================
demo_async = ->
  { sleep, }     = GUY.async
  #.........................................................................................................
  f = ->
    yield 1
    await sleep 0.25
    yield 2
    ;null
  #.........................................................................................................
  i = ->
    # renaming `yield from` as `delegate`, this one becomes
    # 'delegate await generator'
    yield from await f() # -> yield* ( await f() )
    ;null
  #.........................................................................................................
  j = ->
    for await value from f()
      yield value
    ;null
  #.........................................................................................................
  for await value from f()
    debug 'Ωjtstm_143', value
  #.........................................................................................................
  whisper '————————————————————————————————————–'
  help i
  help i()
  help await i
  help await i()
  whisper '————————————————————————————————————–'
  help j
  help j()
  help await j
  help await j()
  whisper '————————————————————————————————————–'
  for await n from i()
    debug 'Ωjtstm_144', n
  for await n from j()
    debug 'Ωjtstm_145', n

  ###

  for       value from       gf()
  for await value from async_gf()

  JS `yield* ...` translates to CS `yield from` and is as inseparable as `yield*`

        yield from       gf()
  await yield from async_gf()

  yield from             gf()
  yield from await async_gf()

  ###
  #.........................................................................................................
  ;null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  await ( new Test guytest_cfg ).async_test @tasks
  # await ( new Test guytest_cfg ).async_test { jetstream_1: @tasks.jetstream_1, }
  await ( new Test guytest_cfg ).async_test { async_jetstream: @tasks.async_jetstream, }

  # await demo_async()

