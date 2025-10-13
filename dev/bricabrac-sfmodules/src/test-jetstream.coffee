
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
        $,
        internals,              } = SFMODULES.require_jetstream()
      #.....................................................................................................
      @eq ( Ωkvrt___1 = -> type_of ( new Jetstream() )              ), 'object'
      @eq ( Ωkvrt___2 = -> type_of ( new Jetstream() ).walk 'data'  ), 'generator'
      #.....................................................................................................
      do =>
        first     = Symbol 'first'
        last      = Symbol 'last'
        jet       = new Jetstream()
        #...................................................................................................
        @eq ( Ωap___3 = -> jet.length                                       ), 0
        @eq ( Ωap___4 = -> jet.is_empty                                     ), true
        #...................................................................................................
        watched_1 = []
        watched_2 = []
        watched_3 = []
        watched_4 = []
        jet.push watch = ( d              ) -> help 'Ωap___5', rpr d; watched_1.push d
        jet.push upper = ( d              ) -> yield d.toUpperCase()
        jet.push watch = ( d              ) -> info 'Ωap___6', rpr d; watched_2.push d
        jet.push ex    = ( d, mark = '!'  ) -> yield d + mark
        jet.push watch = ( d              ) -> help 'Ωap___7', rpr d; watched_3.push d
        jet.push $ { first, last, }, surround = ( d ) ->
          return yield """Let's say: \""""  if d is first
          return yield '".'                 if d is last
          yield d
        jet.push watch = ( d              ) -> urge 'Ωap___8', rpr d; watched_4.push d
        #...................................................................................................
        @eq ( Ωap___9 = -> jet.length                                               ), 7
        @eq ( Ωap__10 = -> jet.is_empty                                             ), false
        @eq ( Ωap__11 = -> [ ( d for d from jet.walk 'hidey-ho' )..., ]             ), [ """Let's say: \"""", 'HIDEY-HO!', '".' ]
        @eq ( Ωap__12 = -> watched_1                                                ), [ 'hidey-ho'                               ]
        @eq ( Ωap__13 = -> watched_2                                                ), [ 'HIDEY-HO'                               ]
        @eq ( Ωap__14 = -> watched_3                                                ), [ 'HIDEY-HO!'                              ]
        @eq ( Ωap__15 = -> watched_4                                                ), [ """Let's say: \"""", 'HIDEY-HO!', '".'   ]
        @eq ( Ωap__16 = -> [ ( d for d from jet.walk 'hidey-ho' )..., ].join ''     ), """Let's say: "HIDEY-HO!"."""
        @eq ( Ωap__17 = -> (   d for d from jet.run  'hidey-ho'       ).join ''     ), """Let's say: "HIDEY-HO!"."""
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    jetstream_2: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        $,
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
        @eq ( Ωap__18 = -> [ ( d for d from jet.walk 0 )..., ]          ), [ 5, ]
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    jetstream_2: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        $,
        internals,              } = SFMODULES.require_jetstream()
      #.....................................................................................................
      do =>
        ### empty pipeline is a pipeline without transforms, so data is passed through untransformed: ###
        @eq ( Ωap__19 = -> [ ( ( new Jetstream() ).walk 'data' )...,  ] ), [ 'data', ]
        @eq ( Ωap__20 = ->     ( new Jetstream() ).run  'data'          ), [ 'data', ]
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    jetstream_3: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        $,
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
        @eq ( Ωap__21 = -> p_3.run        'my-data' ), [ 'my-data № 5 № 3 № 1 № 2 № 4 № 6' , ]
        @eq ( Ωap__22 = -> collector                ), [ 'p3-t1', 'p2-t1', 'p1-t1', 'p1-t2', 'p2-t2', 'p3-t2' ]
        @eq ( Ωap__23 = -> p_3.get_first  'my-data' ), 'my-data № 5 № 3 № 1 № 2 № 4 № 6'
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    jetstream_3: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        $,
        internals,              } = SFMODULES.require_jetstream()
      #.....................................................................................................
      do =>
        first         = Symbol 'first'
        last          = Symbol 'last'
        jet           = new Jetstream()
        g             = ( d ) ->
          urge 'Ωkvrt__24', d
          info 'Ωkvrt__25', "yield for first" if d is first
          yield 0 if d is first
          info 'Ωkvrt__26', "yield for data" unless d in [ first, last, ]
          yield d * 2 unless d in [ first, last, ]
          info 'Ωkvrt__27', "yield for last" if d is last
          yield 1 if d is last
        transform_1   = $ { first,  }, g
        transform_2   = $ { last,   }, g
        jet.push transform_1
        jet.push transform_2
        debug 'Ωkvrt__28', jet
        whisper 'Ωkvrt__29', '————————————————————————————————————–'
        @eq ( Ωkvrt__30 = -> transform_1[ internals.CFG ] ), { first,  }
        @eq ( Ωkvrt__31 = -> transform_2[ internals.CFG ] ), { last,   }
        @eq ( Ωkvrt__32 = -> jet.run 22                   ), [ 0, 1, 88, 1, ]
        whisper 'Ωkvrt__33', '————————————————————————————————————–'
        return null
      #.....................................................................................................
      do => ### same as above but the transforms are separate ###
        first         = Symbol 'first'
        last          = Symbol 'last'
        jet           = new Jetstream()
        g1            = ( d ) ->
          urge 'Ωkvrt__34 g1', d
          info 'Ωkvrt__35 g1', "yield for first" if d is first
          yield 0 if d is first
          info 'Ωkvrt__36 g1', "yield for data" unless d in [ first, last, ]
          yield d * 2 unless d in [ first, last, ]
          info 'Ωkvrt__37 g1', "yield for last" if d is last
          yield 1 if d is last
        g2            = ( d ) ->
          urge 'Ωkvrt__38 g2', d
          info 'Ωkvrt__39 g2', "yield for first" if d is first
          yield 0 if d is first
          info 'Ωkvrt__40 g2', "yield for data" unless d in [ first, last, ]
          yield d * 2 unless d in [ first, last, ]
          info 'Ωkvrt__41 g2', "yield for last" if d is last
          yield 1 if d is last
        transform_1   = $ { first,  }, g1
        transform_2   = $ { last,   }, g2
        jet.push transform_1
        jet.push transform_2
        debug 'Ωkvrt__42', jet
        whisper 'Ωkvrt__43', '————————————————————————————————————–'
        @eq ( Ωkvrt__44 = -> transform_1[ internals.CFG ] ), { first,  }
        @eq ( Ωkvrt__45 = -> transform_2[ internals.CFG ] ), { last,   }
        @eq ( Ωkvrt__46 = -> jet.run 22                   ), [ 0, 1, 88, 1, ]
        whisper 'Ωkvrt__47', '————————————————————————————————————–'
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    jetstream_selectors: ->
      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        $,
        internals,              } = SFMODULES.require_jetstream()
      { Selector,
        _normalize_selectors,
        normalize_selectors,
        selectors_as_list,
        id_from_symbol,         } = internals
      #.....................................................................................................
      # @eq ( Ωkvrt__48 = -> type_of ( new Jetstream() )              ), 'object'
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
            @throws ( Ωjstrm__49 = -> new Selector p.probe ), p.error
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
          @eq ( Ωjstrm__50 = -> sel_list    ), p.sel_list
          @eq ( Ωjstrm__51 = -> nrm_sel     ), p.nrm_sel
          @eq ( Ωjstrm__52 = -> sel_rpr     ), p.sel_rpr
          @eq ( Ωjstrm__53 = -> data        ), p.data
          @eq ( Ωjstrm__54 = -> cues        ), p.cues
          @eq ( Ωjstrm__55 = -> accept_all  ), p.accept_all
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
              @eq ( Ωkvrt__56 = -> result ), entry[ rpr item ]
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
        $,
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
        @eq ( Ωkvrt__57 = -> jet.get_first 'string' ), '(string)'
        return null
      #.....................................................................................................
      do =>
        jet = new Jetstream()
        jet.push prepend = ( d ) -> yield '(' + d
        jet.push apppend = ( d ) -> yield d + ')'
        @eq ( Ωkvrt__58 = -> jet.send 'string'  ), null
        @eq ( Ωkvrt__59 = -> jet.shelf          ), [ 'string', ]
        @eq ( Ωkvrt__60 = -> jet.send 'other'  ), null
        @eq ( Ωkvrt__61 = -> jet.shelf          ), [ 'string', 'other', ]
        @eq ( Ωkvrt__62 = -> jet.get_first()    ), '(string)'
        @eq ( Ωkvrt__63 = -> jet.shelf          ), []
        @eq ( Ωkvrt__64 = -> jet.run()          ), []
      #.....................................................................................................
      do =>
        jet = new Jetstream()
        jet.push prepend = ( d ) -> yield '(' + d
        jet.push apppend = ( d ) -> yield d + ')'
        @eq ( Ωkvrt__65 = -> jet.send 'string'  ), null
        @eq ( Ωkvrt__66 = -> jet.shelf          ), [ 'string', ]
        @eq ( Ωkvrt__67 = -> jet.send 'other'  ), null
        iterator = jet.walk()
        @eq ( Ωkvrt__68 = -> jet.shelf          ), [ 'string', 'other', ]
        @eq ( Ωkvrt__69 = -> iterator.next()    ), { done: false,  value: '(string)', }
        @eq ( Ωkvrt__70 = -> jet.shelf          ), [ 'other', ]
        @eq ( Ωkvrt__71 = -> iterator.next()    ), { done: false,  value: '(other)', }
        @eq ( Ωkvrt__72 = -> jet.shelf          ), []
        @eq ( Ωkvrt__73 = -> iterator.next()    ), { done: true,   value: null, }
        return null
      #.....................................................................................................
      do =>
        jet = new Jetstream()
        jet.push prepend = ( d ) -> yield '(' + d
        jet.push apppend = ( d ) -> yield d + ')'
        @eq ( Ωkvrt__74 = -> jet.send 'string'  ), null
        @eq ( Ωkvrt__75 = -> jet.shelf          ), [ 'string', ]
        @eq ( Ωkvrt__76 = -> jet.send 'other'  ), null
        iterator = jet.walk 'trois', 'quatre'
        @eq ( Ωkvrt__77 = -> jet.shelf          ), [ 'string', 'other', 'trois', 'quatre', ]
        @eq ( Ωkvrt__78 = -> iterator.next()    ), { done: false,  value: '(string)', }
        @eq ( Ωkvrt__79 = -> jet.shelf          ), [ 'other', 'trois', 'quatre', ]
        @eq ( Ωkvrt__80 = -> iterator.next()    ), { done: false,  value: '(other)', }
        @eq ( Ωkvrt__81 = -> jet.shelf          ), [ 'trois', 'quatre', ]
        @eq ( Ωkvrt__82 = -> iterator.next()    ), { done: false,  value: '(trois)', }
        @eq ( Ωkvrt__83 = -> jet.shelf          ), [ 'quatre', ]
        @eq ( Ωkvrt__84 = -> iterator.next()    ), { done: false,  value: '(quatre)', }
        @eq ( Ωkvrt__85 = -> jet.shelf          ), []
        @eq ( Ωkvrt__86 = -> iterator.next()    ), { done: true,   value: null, }
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    configure_transforms: ->
      return null


      SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { Jetstream,
        $,
        internals,              } = SFMODULES.require_jetstream()
      # { Selector,
      #   _normalize_selectors,
      #   normalize_selectors,
      #   selectors_as_list,
      #   id_from_symbol,         } = internals
      #.....................................................................................................
      do =>
        jet = new Jetstream()
        jet.push 'data,#last', prepend = ( d ) ->
          return yield 'yay' if d is last
          yield '(' + d
        jet.push apppend = ( d ) -> yield d + ')'
        debug 'Ωkvrt__28', jet.run 'birdistheword'
        # @eq ( Ωkvrt__57 = -> jet.get_first 'string' ), '(string)'
        return null




#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @tasks
  # ( new Test guytest_cfg ).test { configure_transforms: @tasks.configure_transforms, }
