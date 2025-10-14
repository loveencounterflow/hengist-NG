(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-sfmodules/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  //###########################################################################################################

  //===========================================================================================================
  this.tasks = {
    //-------------------------------------------------------------------------------------------------------
    jetstream_1: function() {
      var Jetstream, SFMODULES, internals, type_of, Ωjtstm___1, Ωjtstm___2;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, internals} = SFMODULES.require_jetstream());
      //.....................................................................................................
      this.eq((Ωjtstm___1 = function() {
        return type_of(new Jetstream());
      }), 'object');
      this.eq((Ωjtstm___2 = function() {
        return type_of((new Jetstream()).walk('data'));
      }), 'generator');
      (() => {        //.....................................................................................................
        var ex, filter, first, jet, last, surround, upper, watch, watched_1, watched_2, watched_3, watched_4, Ωjtstm__10, Ωjtstm__11, Ωjtstm__12, Ωjtstm__13, Ωjtstm__14, Ωjtstm__15, Ωjtstm__16, Ωjtstm__17, Ωjtstm__18, Ωjtstm___3, Ωjtstm___4, Ωjtstm___9;
        first = {'first': 'first'};
        last = {'last': 'last'};
        jet = new Jetstream();
        //...................................................................................................
        this.eq((Ωjtstm___3 = function() {
          return jet.length;
        }), 0);
        this.eq((Ωjtstm___4 = function() {
          return jet.is_empty;
        }), true);
        //...................................................................................................
        watched_1 = [];
        watched_2 = [];
        watched_3 = [];
        watched_4 = [];
        jet.push(watch = function(d) {
          help('Ωjtstm___5', rpr(d));
          return watched_1.push(d);
        });
        jet.push(upper = function*(d) {
          if ((typeof d) !== 'string') {
            return (yield d);
          }
          return (yield d.toUpperCase());
        });
        jet.push(watch = function(d) {
          info('Ωjtstm___6', rpr(d));
          return watched_2.push(d);
        });
        jet.push(ex = function*(d, mark = '!') {
          if (d === first || d === last) {
            return (yield d);
          }
          return (yield d + mark);
        });
        jet.push(watch = function(d) {
          help('Ωjtstm___7', rpr(d));
          return watched_3.push(d);
        });
        jet.push(surround = function*(d) {
          if (d === first) {
            return (yield `Let's say: \"`);
          }
          if (d === last) {
            return (yield '".');
          }
          return (yield d);
        });
        jet.push(filter = function*(d) {
          if (d !== first && d !== last) {
            return (yield d);
          }
        });
        jet.push(watch = function(d) {
          urge('Ωjtstm___8', rpr(d));
          return watched_4.push(d);
        });
        //...................................................................................................
        this.eq((Ωjtstm___9 = function() {
          return jet.length;
        }), 8);
        this.eq((Ωjtstm__10 = function() {
          return jet.is_empty;
        }), false);
        this.eq((Ωjtstm__11 = function() {
          return jet.send(first, 'hidey-ho', last);
        }), null);
        this.eq((Ωjtstm__12 = function() {
          var d;
          return [
            ...((function() {
              var results;
              results = [];
              for (d of jet.walk()) {
                results.push(d);
              }
              return results;
            })())
          ];
        }), [`Let's say: \"`, 'HIDEY-HO!', '".']);
        this.eq((Ωjtstm__13 = function() {
          return watched_1;
        }), [first, 'hidey-ho', last]);
        this.eq((Ωjtstm__14 = function() {
          return watched_2;
        }), [first, 'HIDEY-HO', last]);
        this.eq((Ωjtstm__15 = function() {
          return watched_3;
        }), [first, 'HIDEY-HO!', last]);
        this.eq((Ωjtstm__16 = function() {
          return watched_4;
        }), [`Let's say: \"`, 'HIDEY-HO!', '".']);
        this.eq((Ωjtstm__17 = function() {
          var d;
          return [
            ...((function() {
              var results;
              results = [];
              for (d of jet.walk(first, 'hidey-ho', last)) {
                results.push(d);
              }
              return results;
            })())
          ].join('');
        }), `Let's say: "HIDEY-HO!".`);
        this.eq((Ωjtstm__18 = function() {
          var d;
          return ((function() {
            var results;
            results = [];
            for (d of jet.run(first, 'hidey-ho', last)) {
              results.push(d);
            }
            return results;
          })()).join('');
        }), `Let's say: "HIDEY-HO!".`);
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    jetstream_2: function() {
      var Jetstream, SFMODULES, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, internals} = SFMODULES.require_jetstream());
      (() => {        //.....................................................................................................
        var add_1, jet, Ωjtstm__19;
        jet = new Jetstream();
        //...................................................................................................
        jet.push(add_1 = function*(d) {
          return (yield d + 1);
        });
        jet.push(add_1 = function*(d) {
          return (yield d + 1);
        });
        jet.push(add_1 = function*(d) {
          return (yield d + 1);
        });
        jet.push(add_1 = function*(d) {
          return (yield d + 1);
        });
        jet.push(add_1 = function*(d) {
          return (yield d + 1);
        });
        //...................................................................................................
        this.eq((Ωjtstm__19 = function() {
          var d;
          return [
            ...((function() {
              var results;
              results = [];
              for (d of jet.walk(0)) {
                results.push(d);
              }
              return results;
            })())
          ];
        }), [5]);
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    jetstream_2: function() {
      var Jetstream, SFMODULES, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, internals} = SFMODULES.require_jetstream());
      (() => {        //.....................................................................................................
        var Ωjtstm__20, Ωjtstm__21;
        /* empty pipeline is a pipeline without transforms, so data is passed through untransformed: */
        this.eq((Ωjtstm__20 = function() {
          return [...((new Jetstream()).walk('data'))];
        }), ['data']);
        this.eq((Ωjtstm__21 = function() {
          return (new Jetstream()).run('data');
        }), ['data']);
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    jetstream_3: function() {
      var Jetstream, SFMODULES, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, internals} = SFMODULES.require_jetstream());
      (() => {        //.....................................................................................................
        var collector, p_1, p_2, p_3, Ωjtstm__22, Ωjtstm__23, Ωjtstm__24;
        collector = [];
        //...................................................................................................
        p_1 = new Jetstream();
        p_1.push(function*(d) {
          collector.push('p1-t1');
          return (yield d + ' № 1');
        });
        p_1.push(function*(d) {
          collector.push('p1-t2');
          return (yield d + ' № 2');
        });
        //...................................................................................................
        p_2 = new Jetstream();
        p_2.push(function*(d) {
          collector.push('p2-t1');
          return (yield d + ' № 3');
        });
        p_2.push(p_1);
        p_2.push(function*(d) {
          collector.push('p2-t2');
          return (yield d + ' № 4');
        });
        //...................................................................................................
        p_3 = new Jetstream();
        p_3.push(function*(d) {
          collector.push('p3-t1');
          return (yield d + ' № 5');
        });
        p_3.push(p_2);
        p_3.push(function*(d) {
          collector.push('p3-t2');
          return (yield d + ' № 6');
        });
        this.eq((Ωjtstm__22 = function() {
          return p_3.run('my-data');
        }), ['my-data № 5 № 3 № 1 № 2 № 4 № 6']);
        this.eq((Ωjtstm__23 = function() {
          return collector;
        }), ['p3-t1', 'p2-t1', 'p1-t1', 'p1-t2', 'p2-t2', 'p3-t2']);
        this.eq((Ωjtstm__24 = function() {
          return p_3.get_first('my-data');
        }), 'my-data № 5 № 3 № 1 № 2 № 4 № 6');
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    jetstream_3: function() {
      var Jetstream, SFMODULES, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, internals} = SFMODULES.require_jetstream());
      (()/* same as above but the transforms are separate */ => {        //.....................................................................................................
        var first, g1, g2, jet, last, Ωjtstm__29;
        first = {'first': 'first'};
        last = {'last': 'last'};
        jet = new Jetstream();
        g1 = function*(d) {
          urge('Ωjtstm__25 g1', d);
          switch (d) {
            case first:
              yield d;
              return (yield 0);
            case last:
              yield 1;
              return (yield d);
            default:
              return (yield d * 2);
          }
        };
        g2 = function*(d) {
          urge('Ωjtstm__26 g2', d);
          switch (d) {
            case first:
              yield d;
              return (yield 0);
            case last:
              yield 1;
              return (yield d);
            default:
              return (yield d * 2);
          }
        };
        jet.push(g1);
        jet.push(g2);
        jet.push(function*(d) {
          if (d !== first && d !== last) {
            return (yield d);
          }
        });
        debug('Ωjtstm__27', jet);
        whisper('Ωjtstm__28', '————————————————————————————————————–');
        this.eq((Ωjtstm__29 = function() {
          return jet.run(first, 22, last);
        }), [0, 0, 88, 2, 1]);
        whisper('Ωjtstm__30', '————————————————————————————————————–');
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    jetstream_selectors: function() {
      var Jetstream, SFMODULES, Selector, _normalize_selectors, id_from_symbol, internals, normalize_selectors, probes_and_matchers, selectors_and_selections, selectors_as_list, stream_items, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, internals} = SFMODULES.require_jetstream());
      ({Selector, _normalize_selectors, normalize_selectors, selectors_as_list, id_from_symbol} = internals);
      //.....................................................................................................
      // @eq ( Ωjtstm__31 = -> type_of ( new Jetstream() )              ), 'object'
      //.....................................................................................................
      stream_items = [Symbol('start'), Symbol('end'), 76.9, "Mexico", null];
      probes_and_matchers = [
        {
          probe: 'cue',
          sel_list: ['cue'],
          nrm_sel: ['cue#*'],
          sel_rpr: 'cue',
          data: false,
          cues: true,
          accept_all: false
        },
        {
          probe: '#',
          sel_list: ['#'],
          nrm_sel: ['cue#*'],
          sel_rpr: '#',
          data: false,
          cues: true,
          accept_all: false
        },
        {
          //...................................................................................................
          probe: 'cue#end',
          sel_list: ['cue#end'],
          nrm_sel: ['cue#end'],
          sel_rpr: 'cue#end',
          data: false,
          cues: ['end'],
          accept_all: false
        },
        {
          probe: '#end',
          sel_list: ['#end'],
          nrm_sel: ['cue#end'],
          sel_rpr: '#end',
          data: false,
          cues: ['end'],
          accept_all: false
        },
        {
          //...................................................................................................
          probe: '#end,#start,',
          sel_list: ['#end',
        '#start',
        ''],
          nrm_sel: ['cue#end',
        'cue#start'],
          sel_rpr: '#end, #start, ',
          data: false,
          cues: ['end',
        'start'],
          accept_all: false
        },
        {
          probe: '#end,#start',
          sel_list: ['#end',
        '#start'],
          nrm_sel: ['cue#end',
        'cue#start'],
          sel_rpr: '#end, #start',
          data: false,
          cues: ['end',
        'start'],
          accept_all: false
        },
        {
          //...................................................................................................
          probe: 'cue#foo#bar',
          sel_list: ['cue#foo#bar'],
          nrm_sel: ['cue#foo#bar'],
          sel_rpr: 'cue#foo#bar',
          data: false,
          cues: ['foo#bar'],
          accept_all: false
        },
        {
          probe: '#foo#bar',
          sel_list: ['#foo#bar'],
          nrm_sel: ['cue#foo#bar'],
          sel_rpr: '#foo#bar',
          data: false,
          cues: ['foo#bar'],
          accept_all: false
        },
        {
          //...................................................................................................
          probe: 'cue#start',
          sel_list: ['cue#start'],
          nrm_sel: ['cue#start'],
          sel_rpr: 'cue#start',
          data: false,
          cues: ['start'],
          accept_all: false
        },
        {
          probe: '#start',
          sel_list: ['#start'],
          nrm_sel: ['cue#start'],
          sel_rpr: '#start',
          data: false,
          cues: ['start'],
          accept_all: false
        },
        {
          //...................................................................................................
          probe: ['cue#start',
        'cue#end'],
          sel_list: ['cue#start',
        'cue#end'],
          nrm_sel: ['cue#start',
        'cue#end'],
          sel_rpr: 'cue#start, cue#end',
          data: false,
          cues: ['start',
        'end'],
          accept_all: false
        },
        {
          probe: ['#start',
        '#end'],
          sel_list: ['#start',
        '#end'],
          nrm_sel: ['cue#start',
        'cue#end'],
          sel_rpr: '#start, #end',
          data: false,
          cues: ['start',
        'end'],
          accept_all: false
        },
        {
          probe: 'cue#start,cue#end',
          sel_list: ['cue#start',
        'cue#end'],
          nrm_sel: ['cue#start',
        'cue#end'],
          sel_rpr: 'cue#start, cue#end',
          data: false,
          cues: ['start',
        'end'],
          accept_all: false
        },
        {
          probe: '#start,#end',
          sel_list: ['#start',
        '#end'],
          nrm_sel: ['cue#start',
        'cue#end'],
          sel_rpr: '#start, #end',
          data: false,
          cues: ['start',
        'end'],
          accept_all: false
        },
        {
          probe: ' cue#start, cue#end ',
          sel_list: ['cue#start',
        'cue#end'],
          nrm_sel: ['cue#start',
        'cue#end'],
          sel_rpr: 'cue#start, cue#end',
          data: false,
          cues: ['start',
        'end'],
          accept_all: false
        },
        {
          //...................................................................................................
          probe: null,
          sel_list: [''],
          nrm_sel: ['data#*'],
          sel_rpr: '',
          data: true,
          cues: false,
          accept_all: false
        },
        {
          probe: [],
          sel_list: [],
          nrm_sel: ['data#*'],
          sel_rpr: '',
          data: true,
          cues: false,
          accept_all: false
        },
        {
          probe: [[]],
          sel_list: [],
          nrm_sel: ['data#*'],
          sel_rpr: '',
          data: true,
          cues: false,
          accept_all: false
        },
        {
          probe: [['']],
          sel_list: [''],
          nrm_sel: ['data#*'],
          sel_rpr: '',
          data: true,
          cues: false,
          accept_all: false
        },
        {
          probe: 'data',
          sel_list: ['data'],
          nrm_sel: ['data#*'],
          sel_rpr: 'data',
          data: true,
          cues: false,
          accept_all: false
        },
        {
          probe: '',
          sel_list: [''],
          nrm_sel: ['data#*'],
          sel_rpr: '',
          data: true,
          cues: false,
          accept_all: false
        },
        {
          probe: 'data#',
          sel_list: ['data#'],
          nrm_sel: ['data#*'],
          sel_rpr: 'data#',
          data: true,
          cues: false,
          accept_all: false
        },
        {
          //...................................................................................................
          probe: ['data',
        'cue'],
          sel_list: ['data',
        'cue'],
          nrm_sel: ['data#*',
        'cue#*'],
          sel_rpr: 'data, cue',
          data: true,
          cues: true,
          accept_all: true
        },
        {
          probe: 'data, cue',
          sel_list: ['data',
        'cue'],
          nrm_sel: ['data#*',
        'cue#*'],
          sel_rpr: 'data, cue',
          data: true,
          cues: true,
          accept_all: true
        },
        {
          //...................................................................................................
          probe: 'data#foo#bar',
          error: /IDs on data items not supported/
        }
      ];
      selectors_and_selections = [
        {
          sel: 'cue',
          nrm: 'cue#*',
          'Symbol(start)': true,
          'Symbol(end)': true,
          '76.9': false,
          "'Mexico'": false,
          null: false
        },
        {
          sel: '#',
          nrm: 'cue#*',
          'Symbol(start)': true,
          'Symbol(end)': true,
          '76.9': false,
          "'Mexico'": false,
          null: false
        },
        {
          //...................................................................................................
          sel: 'cue#end',
          nrm: 'cue#end',
          'Symbol(start)': false,
          'Symbol(end)': true,
          '76.9': false,
          "'Mexico'": false,
          null: false
        },
        {
          sel: '#end',
          nrm: 'cue#end',
          'Symbol(start)': false,
          'Symbol(end)': true,
          '76.9': false,
          "'Mexico'": false,
          null: false
        },
        {
          //...................................................................................................
          sel: '#end,#start,',
          nrm: 'cue#end,cue#start',
          'Symbol(start)': true,
          'Symbol(end)': true,
          '76.9': false,
          "'Mexico'": false,
          null: false
        },
        {
          sel: '#end,#start',
          nrm: 'cue#end,cue#start',
          'Symbol(start)': true,
          'Symbol(end)': true,
          '76.9': false,
          "'Mexico'": false,
          null: false
        },
        {
          //...................................................................................................
          sel: 'cue#foo#bar',
          nrm: 'cue#foo#bar',
          'Symbol(start)': false,
          'Symbol(end)': false,
          '76.9': false,
          "'Mexico'": false,
          null: false
        },
        {
          sel: '#foo#bar',
          nrm: 'cue#foo#bar',
          'Symbol(start)': false,
          'Symbol(end)': false,
          '76.9': false,
          "'Mexico'": false,
          null: false
        },
        {
          //...................................................................................................
          sel: 'cue#start',
          nrm: 'cue#start',
          'Symbol(start)': true,
          'Symbol(end)': false,
          '76.9': false,
          "'Mexico'": false,
          null: false
        },
        {
          sel: '#start',
          nrm: 'cue#start',
          'Symbol(start)': true,
          'Symbol(end)': false,
          '76.9': false,
          "'Mexico'": false,
          null: false
        },
        {
          //...................................................................................................
          sel: ['cue#start',
        'cue#end'],
          nrm: 'cue#start,cue#end',
          'Symbol(start)': true,
          'Symbol(end)': true,
          '76.9': false,
          "'Mexico'": false,
          null: false
        },
        {
          sel: ['#start',
        '#end'],
          nrm: 'cue#start,cue#end',
          'Symbol(start)': true,
          'Symbol(end)': true,
          '76.9': false,
          "'Mexico'": false,
          null: false
        },
        {
          sel: 'cue#start,cue#end',
          nrm: 'cue#start,cue#end',
          'Symbol(start)': true,
          'Symbol(end)': true,
          '76.9': false,
          "'Mexico'": false,
          null: false
        },
        {
          sel: '#start,#end',
          nrm: 'cue#start,cue#end',
          'Symbol(start)': true,
          'Symbol(end)': true,
          '76.9': false,
          "'Mexico'": false,
          null: false
        },
        {
          sel: ' cue#start, cue#end ',
          nrm: 'cue#start,cue#end',
          'Symbol(start)': true,
          'Symbol(end)': true,
          '76.9': false,
          "'Mexico'": false,
          null: false
        },
        {
          //...................................................................................................
          sel: null,
          nrm: 'data#*',
          'Symbol(start)': false,
          'Symbol(end)': false,
          '76.9': true,
          "'Mexico'": true,
          null: true
        },
        {
          sel: [],
          nrm: 'data#*',
          'Symbol(start)': false,
          'Symbol(end)': false,
          '76.9': true,
          "'Mexico'": true,
          null: true
        },
        {
          sel: [[]],
          nrm: 'data#*',
          'Symbol(start)': false,
          'Symbol(end)': false,
          '76.9': true,
          "'Mexico'": true,
          null: true
        },
        {
          sel: [['']],
          nrm: 'data#*',
          'Symbol(start)': false,
          'Symbol(end)': false,
          '76.9': true,
          "'Mexico'": true,
          null: true
        },
        {
          sel: 'data',
          nrm: 'data#*',
          'Symbol(start)': false,
          'Symbol(end)': false,
          '76.9': true,
          "'Mexico'": true,
          null: true
        },
        {
          sel: '',
          nrm: 'data#*',
          'Symbol(start)': false,
          'Symbol(end)': false,
          '76.9': true,
          "'Mexico'": true,
          null: true
        },
        {
          sel: 'data#',
          nrm: 'data#*',
          'Symbol(start)': false,
          'Symbol(end)': false,
          '76.9': true,
          "'Mexico'": true,
          null: true
        },
        {
          //...................................................................................................
          sel: ['data',
        'cue'],
          nrm: 'data#*,cue#*',
          'Symbol(start)': true,
          'Symbol(end)': true,
          '76.9': true,
          "'Mexico'": true,
          null: true
        },
        {
          sel: 'data, cue',
          nrm: 'data#*,cue#*',
          'Symbol(start)': true,
          'Symbol(end)': true,
          '76.9': true,
          "'Mexico'": true,
          null: true
        },
        {
          sel: '*',
          nrm: 'data#*,cue#*',
          'Symbol(start)': true,
          'Symbol(end)': true,
          '76.9': true,
          "'Mexico'": true,
          null: true
        }
      ];
      (() => {        //=====================================================================================================
        var accept_all, cues, data, i, len, nrm_sel, p, probe, sel, sel_list, sel_rpr, Ωjtstm__32, Ωjtstm__33, Ωjtstm__34, Ωjtstm__35, Ωjtstm__36, Ωjtstm__37, Ωjtstm__38;
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          p = probes_and_matchers[i];
          if (p.error != null) {
            this.throws((Ωjtstm__32 = function() {
              return new Selector(p.probe);
            }), p.error);
            continue;
          }
          probe = p.probe;
          sel_list = selectors_as_list(probe);
          nrm_sel = [...(normalize_selectors(probe))];
          sel = new Selector(probe);
          sel_rpr = sel.toString();
          ({data, cues, accept_all} = sel._get_excerpt());
          if (data !== true && data !== false) {
            data = [...data];
          }
          if (cues !== true && cues !== false) {
            cues = [...cues];
          }
          // echo { probe, sel_list, nrm_sel, sel_rpr, data, cues, accept_all, }
          this.eq((Ωjtstm__33 = function() {
            return sel_list;
          }), p.sel_list);
          this.eq((Ωjtstm__34 = function() {
            return nrm_sel;
          }), p.nrm_sel);
          this.eq((Ωjtstm__35 = function() {
            return sel_rpr;
          }), p.sel_rpr);
          this.eq((Ωjtstm__36 = function() {
            return data;
          }), p.data);
          this.eq((Ωjtstm__37 = function() {
            return cues;
          }), p.cues);
          this.eq((Ωjtstm__38 = function() {
            return accept_all;
          }), p.accept_all);
        }
        return null;
      })();
      (() => {        //-----------------------------------------------------------------------------------------------------
        var display_matcher, entry, i, item, j, len, len1, line, nrm, result, selector, Ωjtstm__39;
        display_matcher = true;
        display_matcher = false;
        for (i = 0, len = selectors_and_selections.length; i < len; i++) {
          entry = selectors_and_selections[i];
          selector = new Selector(entry.sel);
          nrm = [...(normalize_selectors(entry.sel))].join(',');
          line = {
            sel: entry.sel,
            nrm
          };
          for (j = 0, len1 = stream_items.length; j < len1; j++) {
            item = stream_items[j];
            result = selector.select(item);
            line[rpr(item)] = selector.select(item);
            if (!display_matcher) {
              if (result !== entry[rpr(item)]) {
                echo({
                  selector: entry.sel,
                  nrm,
                  item,
                  result
                });
              }
              this.eq((Ωjtstm__39 = function() {
                return result;
              }), entry[rpr(item)]);
            }
          }
          if (display_matcher) {
            echo(line);
          }
        }
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    build_pipelines: function() {
      var Jetstream, SFMODULES, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, internals} = SFMODULES.require_jetstream());
      (() => {        // { Selector,
        //   _normalize_selectors,
        //   normalize_selectors,
        //   selectors_as_list,
        //   id_from_symbol,         } = internals
        //.....................................................................................................
        var apppend, jet, prepend, Ωjtstm__40;
        jet = new Jetstream();
        jet.push(prepend = function*(d) {
          return (yield '(' + d);
        });
        jet.push(apppend = function*(d) {
          return (yield d + ')');
        });
        this.eq((Ωjtstm__40 = function() {
          return jet.get_first('string');
        }), '(string)');
        return null;
      })();
      (() => {        //.....................................................................................................
        var apppend, jet, prepend, Ωjtstm__41, Ωjtstm__42, Ωjtstm__43, Ωjtstm__44, Ωjtstm__45, Ωjtstm__46, Ωjtstm__47;
        jet = new Jetstream();
        jet.push(prepend = function*(d) {
          return (yield '(' + d);
        });
        jet.push(apppend = function*(d) {
          return (yield d + ')');
        });
        this.eq((Ωjtstm__41 = function() {
          return jet.send('string');
        }), null);
        this.eq((Ωjtstm__42 = function() {
          return jet.shelf;
        }), ['string']);
        this.eq((Ωjtstm__43 = function() {
          return jet.send('other');
        }), null);
        this.eq((Ωjtstm__44 = function() {
          return jet.shelf;
        }), ['string', 'other']);
        this.eq((Ωjtstm__45 = function() {
          return jet.get_first();
        }), '(string)');
        this.eq((Ωjtstm__46 = function() {
          return jet.shelf;
        }), []);
        return this.eq((Ωjtstm__47 = function() {
          return jet.run();
        }), []);
      })();
      (() => {        //.....................................................................................................
        var apppend, iterator, jet, prepend, Ωjtstm__48, Ωjtstm__49, Ωjtstm__50, Ωjtstm__51, Ωjtstm__52, Ωjtstm__53, Ωjtstm__54, Ωjtstm__55, Ωjtstm__56;
        jet = new Jetstream();
        jet.push(prepend = function*(d) {
          return (yield '(' + d);
        });
        jet.push(apppend = function*(d) {
          return (yield d + ')');
        });
        this.eq((Ωjtstm__48 = function() {
          return jet.send('string');
        }), null);
        this.eq((Ωjtstm__49 = function() {
          return jet.shelf;
        }), ['string']);
        this.eq((Ωjtstm__50 = function() {
          return jet.send('other');
        }), null);
        iterator = jet.walk();
        this.eq((Ωjtstm__51 = function() {
          return jet.shelf;
        }), ['string', 'other']);
        this.eq((Ωjtstm__52 = function() {
          return iterator.next();
        }), {
          done: false,
          value: '(string)'
        });
        this.eq((Ωjtstm__53 = function() {
          return jet.shelf;
        }), ['other']);
        this.eq((Ωjtstm__54 = function() {
          return iterator.next();
        }), {
          done: false,
          value: '(other)'
        });
        this.eq((Ωjtstm__55 = function() {
          return jet.shelf;
        }), []);
        this.eq((Ωjtstm__56 = function() {
          return iterator.next();
        }), {
          done: true,
          value: null
        });
        return null;
      })();
      (() => {        //.....................................................................................................
        var apppend, iterator, jet, prepend, Ωjtstm__57, Ωjtstm__58, Ωjtstm__59, Ωjtstm__60, Ωjtstm__61, Ωjtstm__62, Ωjtstm__63, Ωjtstm__64, Ωjtstm__65, Ωjtstm__66, Ωjtstm__67, Ωjtstm__68, Ωjtstm__69;
        jet = new Jetstream();
        jet.push(prepend = function*(d) {
          return (yield '(' + d);
        });
        jet.push(apppend = function*(d) {
          return (yield d + ')');
        });
        this.eq((Ωjtstm__57 = function() {
          return jet.send('string');
        }), null);
        this.eq((Ωjtstm__58 = function() {
          return jet.shelf;
        }), ['string']);
        this.eq((Ωjtstm__59 = function() {
          return jet.send('other');
        }), null);
        iterator = jet.walk('trois', 'quatre');
        this.eq((Ωjtstm__60 = function() {
          return jet.shelf;
        }), ['string', 'other', 'trois', 'quatre']);
        this.eq((Ωjtstm__61 = function() {
          return iterator.next();
        }), {
          done: false,
          value: '(string)'
        });
        this.eq((Ωjtstm__62 = function() {
          return jet.shelf;
        }), ['other', 'trois', 'quatre']);
        this.eq((Ωjtstm__63 = function() {
          return iterator.next();
        }), {
          done: false,
          value: '(other)'
        });
        this.eq((Ωjtstm__64 = function() {
          return jet.shelf;
        }), ['trois', 'quatre']);
        this.eq((Ωjtstm__65 = function() {
          return iterator.next();
        }), {
          done: false,
          value: '(trois)'
        });
        this.eq((Ωjtstm__66 = function() {
          return jet.shelf;
        }), ['quatre']);
        this.eq((Ωjtstm__67 = function() {
          return iterator.next();
        }), {
          done: false,
          value: '(quatre)'
        });
        this.eq((Ωjtstm__68 = function() {
          return jet.shelf;
        }), []);
        this.eq((Ωjtstm__69 = function() {
          return iterator.next();
        }), {
          done: true,
          value: null
        });
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    configure_transforms: function() {
      var Jetstream, SFMODULES, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, internals} = SFMODULES.require_jetstream());
      (() => {        // { Selector,
        //   _normalize_selectors,
        //   normalize_selectors,
        //   selectors_as_list,
        //   id_from_symbol,         } = internals
        //.....................................................................................................
        var append, first, jet, last, prepend, Ωjtstm__70;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream();
        jet.push(function*(d) {
          return (yield `*${d}*`);
        });
        jet.push('#first', prepend = function*(d) {
          if (d === first) {
            return (yield* [d, '(']);
          }
          return (yield 'error#1');
        });
        jet.push('#last', append = function*(d) {
          if (d === last) {
            return (yield* [')', d]);
          }
          return (yield 'error#2');
        });
        //...................................................................................................
        this.eq((Ωjtstm__70 = function() {
          return jet.run(first, 'birdistheword', last);
        }), ['(', '*birdistheword*', ')']);
        return null;
      })();
      (() => {        //.....................................................................................................
        var append, first, jet, last, prepend, Ωjtstm__71;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream();
        jet.push(function*(d) {
          return (yield `*${d}*`);
        });
        jet.push('#first', prepend = function*(d) {
          yield* [d, '('];
          return null;
        });
        jet.push('#last', append = function*(d) {
          yield* [')', d];
          return null;
        });
        //...................................................................................................
        this.eq((Ωjtstm__71 = function() {
          return jet.run(first, 'birdistheword', last);
        }), ['(', '*birdistheword*', ')']);
        return null;
      })();
      (() => {        //.....................................................................................................
        var append, first, jet, last, prepend, Ωjtstm__72;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream({
          outlet: 'data,cue'
        });
        jet.push(function*(d) {
          return (yield `*${d}*`);
        });
        jet.push('#first', prepend = function*(d) {
          yield* [d, '('];
          return null;
        });
        jet.push('#last', append = function*(d) {
          yield* [')', d];
          return null;
        });
        //...................................................................................................
        this.eq((Ωjtstm__72 = function() {
          return jet.run(first, 'birdistheword', last);
        }), [first, '(', '*birdistheword*', ')', last]);
        return null;
      })();
      (() => {        //.....................................................................................................
        var append, first, jet, last, prepend, Ωjtstm__73;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream({
          outlet: '*'
        });
        jet.push(function*(d) {
          return (yield `*${d}*`);
        });
        jet.push('#first', prepend = function*(d) {
          yield* [d, '('];
          return null;
        });
        jet.push('#last', append = function*(d) {
          yield* [')', d];
          return null;
        });
        //...................................................................................................
        this.eq((Ωjtstm__73 = function() {
          return jet.run(first, 'birdistheword', last);
        }), [first, '(', '*birdistheword*', ')', last]);
        return null;
      })();
      (() => {        //.....................................................................................................
        var append, first, jet, last, prepend, Ωjtstm__74;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream();
        jet.push(function*(d) {
          return (yield `*${d}*`);
        });
        jet.push('#first', prepend = function*(d) {
          yield* [d, '('];
          return null;
        });
        jet.push('#last', append = function*(d) {
          yield* [')', d];
          return null;
        });
        jet.configure({
          outlet: '*'
        });
        //...................................................................................................
        this.eq((Ωjtstm__74 = function() {
          return jet.run(first, 'birdistheword', last);
        }), [first, '(', '*birdistheword*', ')', last]);
        return null;
      })();
      (() => {        //.....................................................................................................
        var append, first, jet, last, prepend, Ωjtstm__75;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream();
        jet.push(function*(d) {
          return (yield `*${d}*`);
        });
        jet.push('#first', prepend = function*(d) {
          yield* [d, '('];
          return null;
        });
        jet.push('#last', append = function*(d) {
          yield* [')', d];
          return null;
        });
        jet.configure({
          pick: 'first'
        });
        //...................................................................................................
        this.eq((Ωjtstm__75 = function() {
          return jet.run(first, 'birdistheword', last);
        }), '(');
        return null;
      })();
      (() => {        //.....................................................................................................
        var append, first, jet, last, prepend, Ωjtstm__76;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream();
        jet.push(function*(d) {
          return (yield `*${d}*`);
        });
        jet.push('#first', prepend = function*(d) {
          yield* [d, '('];
          return null;
        });
        jet.push('#last', append = function*(d) {
          yield* [')', d];
          return null;
        });
        jet.configure({
          outlet: 'data,cue',
          pick: 'first'
        });
        //...................................................................................................
        this.eq((Ωjtstm__76 = function() {
          return jet.run(first, 'birdistheword', last);
        }), first);
        return null;
      })();
      (() => {        //.....................................................................................................
        var append, first, jet, last, prepend, Ωjtstm__77, Ωjtstm__78;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream();
        jet.push(function*(d) {
          return (yield `*${d}*`);
        });
        jet.push('#first', prepend = function*(d) {
          yield* [d, '('];
          return null;
        });
        jet.push('#last', append = function*(d) {
          yield* [')', d];
          return null;
        });
        jet.configure({
          pick: 'last'
        });
        //...................................................................................................
        this.eq((Ωjtstm__77 = function() {
          return jet.cfg.pick;
        }), 'last');
        this.eq((Ωjtstm__78 = function() {
          return jet.run(first, 'birdistheword', last);
        }), ')');
        return null;
      })();
      (() => {        //.....................................................................................................
        var append, first, jet, last, prepend, Ωjtstm__79;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream({
          pick: 'first'
        });
        jet.push(function*(d) {
          return (yield `*${d}*`);
        });
        jet.push('#first', prepend = function*(d) {
          yield* [d, '('];
          return null;
        });
        jet.push('#last', append = function*(d) {
          yield* [')', d];
          return null;
        });
        //...................................................................................................
        this.throws((Ωjtstm__79 = function() {
          return jet.run();
        }), /no results/);
        return null;
      })();
      (() => {        //.....................................................................................................
        var fallback, jet, Ωjtstm__80;
        fallback = Symbol('fallback');
        jet = new Jetstream({
          pick: 'first',
          fallback
        });
        jet.push(function*(d) {
          return (yield `*${d}*`);
        });
        jet.push(function*(d) {
          yield* [d, '('];
          return null;
        });
        jet.push(function*(d) {
          yield* [')', d];
          return null;
        });
        //...................................................................................................
        this.eq((Ωjtstm__80 = function() {
          return jet.run();
        }), fallback);
        return null;
      })();
      (() => {        //.....................................................................................................
        var a, b, c, fallback, jet, ordering, Ωjtstm__81, Ωjtstm__82, Ωjtstm__83, Ωjtstm__84;
        fallback = Symbol('fallback');
        jet = new Jetstream({
          pick: 'first',
          fallback
        });
        ordering = [];
        jet.push(a = function*(d) {
          ordering.push(`a${d}`);
          return (yield d * 2);
        });
        jet.push(b = function*(d) {
          ordering.push(`b${d}`);
          return (yield d * 3);
        });
        jet.push(c = function*(d) {
          ordering.push(`c${d}`);
          return (yield d * 5);
        });
        //...................................................................................................
        this.eq((Ωjtstm__81 = function() {
          return [...(jet.walk(1, 2, 3))];
        }), [30]);
        this.eq((Ωjtstm__82 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), 'a1 b2 c6 a2 b4 c12 a3 b6 c18');
        this.eq((Ωjtstm__83 = function() {
          return jet.run(1, 2, 3);
        }), 30);
        this.eq((Ωjtstm__84 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), 'a1 b2 c6 a2 b4 c12 a3 b6 c18');
        return null;
      })();
      (() => {        //.....................................................................................................
        var a, b, c, fallback, generator, jet, ordering, Ωjtstm__85, Ωjtstm__86, Ωjtstm__87, Ωjtstm__88;
        fallback = Symbol('fallback');
        jet = new Jetstream({
          pick: 'last',
          fallback
        });
        ordering = [];
        jet.push(a = function*(d) {
          ordering.push(`a${d}`);
          return (yield d * 2);
        });
        jet.push(b = function*(d) {
          ordering.push(`b${d}`);
          return (yield d * 3);
        });
        jet.push(c = function*(d) {
          ordering.push(`c${d}`);
          return (yield d * 5);
        });
        //...................................................................................................
        jet.send(1, 2, 3);
        generator = jet.walk();
        this.eq((Ωjtstm__85 = function() {
          return generator.next();
        }), {
          value: 90,
          done: false
        });
        this.eq((Ωjtstm__86 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), 'a1 b2 c6 a2 b4 c12 a3 b6 c18');
        this.eq((Ωjtstm__87 = function() {
          return jet.shelf;
        }), []);
        this.eq((Ωjtstm__88 = function() {
          return generator.next();
        }), {
          value: null,
          done: true
        });
        return null;
      })();
      (() => {        //.....................................................................................................
        var a, b, c, fallback, generator, jet, ordering, Ωjtstm__90, Ωjtstm__91, Ωjtstm__92, Ωjtstm__93, Ωjtstm__94, Ωjtstm__95;
        fallback = Symbol('fallback');
        jet = new Jetstream({
          pick: 'first',
          fallback
        });
        ordering = [];
        jet.push(a = function*(d) {
          ordering.push(`a${d}`);
          return (yield d * 2);
        });
        jet.push(b = function*(d) {
          ordering.push(`b${d}`);
          return (yield d * 3);
        });
        jet.push(c = function*(d) {
          ordering.push(`c${d}`);
          return (yield d * 5);
        });
        //...................................................................................................
        jet.send(1, 2, 3);
        // debug 'Ωjtstm__89', [ ( jet.walk() )..., ]
        generator = jet.walk();
        this.eq((Ωjtstm__90 = function() {
          return generator.next();
        }), {
          value: 30,
          done: false
        });
        this.eq((Ωjtstm__91 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), 'a1 b2 c6');
        this.eq((Ωjtstm__92 = function() {
          return generator.next();
        }), {
          value: null,
          done: true
        });
        this.eq((Ωjtstm__93 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), 'a2 b4 c12 a3 b6 c18');
        this.eq((Ωjtstm__94 = function() {
          return generator.next();
        }), {
          value: void 0,
          done: true
        });
        this.eq((Ωjtstm__95 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        return null;
      })();
      (() => {        //.....................................................................................................
        var a, b, c, jet, ordering, Ωjtstm_110, Ωjtstm_111, Ωjtstm_112, Ωjtstm_113;
        jet = new Jetstream({
          pick: 'first'
        });
        ordering = [];
        jet.push(a = function*(d) {
          ordering.push(`a${d}`);
          return (yield d * 2);
        });
        jet.push(b = function*(d) {
          ordering.push(`b${d}`);
          return (yield d * 3);
        });
        jet.push(c = function*(d) {
          ordering.push(`c${d}`);
          return (yield d * 5);
        });
        //...................................................................................................
        this.eq((Ωjtstm_110 = function() {
          return [...(jet.walk())];
        }), []);
        this.eq((Ωjtstm_111 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        this.throws((Ωjtstm_112 = function() {
          return jet.run();
        }), /no results/);
        this.eq((Ωjtstm_113 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        return null;
      })();
      (() => {        //.....................................................................................................
        var a, b, c, jet, ordering, Ωjtstm_114, Ωjtstm_115, Ωjtstm_116, Ωjtstm_117;
        jet = new Jetstream({
          pick: 'last'
        });
        ordering = [];
        jet.push(a = function*(d) {
          ordering.push(`a${d}`);
          return (yield d * 2);
        });
        jet.push(b = function*(d) {
          ordering.push(`b${d}`);
          return (yield d * 3);
        });
        jet.push(c = function*(d) {
          ordering.push(`c${d}`);
          return (yield d * 5);
        });
        //...................................................................................................
        this.eq((Ωjtstm_114 = function() {
          return [...(jet.walk())];
        }), []);
        this.eq((Ωjtstm_115 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        this.throws((Ωjtstm_116 = function() {
          return jet.run();
        }), /no results/);
        this.eq((Ωjtstm_117 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        return null;
      })();
      (() => {        //.....................................................................................................
        var fallback, jet, ordering, Ωjtstm_118, Ωjtstm_119, Ωjtstm_120, Ωjtstm_121;
        fallback = Symbol('fallback');
        jet = new Jetstream({
          pick: 'first',
          fallback
        });
        ordering = [];
        //...................................................................................................
        this.eq((Ωjtstm_118 = function() {
          return [...(jet.walk())];
        }), []);
        this.eq((Ωjtstm_119 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        this.eq((Ωjtstm_120 = function() {
          return jet.run();
        }), fallback);
        this.eq((Ωjtstm_121 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        return null;
      })();
      (() => {        //.....................................................................................................
        var fallback, jet, ordering, Ωjtstm_122, Ωjtstm_123, Ωjtstm_124, Ωjtstm_125;
        fallback = Symbol('fallback');
        jet = new Jetstream({
          pick: 'first',
          fallback
        });
        ordering = [];
        //...................................................................................................
        this.eq((Ωjtstm_122 = function() {
          return [...(jet.walk(1, 2, 3))];
        }), [1]);
        this.eq((Ωjtstm_123 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        this.eq((Ωjtstm_124 = function() {
          return jet.run(1, 2, 3);
        }), 1);
        this.eq((Ωjtstm_125 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        return null;
      })();
      (() => {        //.....................................................................................................
        var fallback, jet, ordering, Ωjtstm_126, Ωjtstm_127, Ωjtstm_128, Ωjtstm_129;
        fallback = Symbol('fallback');
        jet = new Jetstream({
          pick: 'last',
          fallback
        });
        ordering = [];
        //...................................................................................................
        this.eq((Ωjtstm_126 = function() {
          return [...(jet.walk(1, 2, 3))];
        }), [3]);
        this.eq((Ωjtstm_127 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        this.eq((Ωjtstm_128 = function() {
          return jet.run(1, 2, 3);
        }), 3);
        this.eq((Ωjtstm_129 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        return null;
      })();
      //.....................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      (new Test(guytest_cfg)).test(this.tasks);
      // ( new Test guytest_cfg ).test { jetstream_1: @tasks.jetstream_1, }
      return (new Test(guytest_cfg)).test({
        configure_transforms: this.tasks.configure_transforms
      });
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtamV0c3RyZWFtLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBR0ksQ0FBQTs7SUFBQSxXQUFBLEVBQWEsUUFBQSxDQUFBLENBQUE7QUFDakIsVUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxPQUFBLEVBQUEsVUFBQSxFQUFBO01BQU0sU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsUUFBUSxDQUFDLGVBQW5CLENBQUEsQ0FBOUI7TUFDQSxDQUFBLENBQUUsU0FBRixFQUNFLFNBREYsQ0FBQSxHQUM4QixTQUFTLENBQUMsaUJBQVYsQ0FBQSxDQUQ5QixFQUZOOztNQUtNLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxPQUFBLENBQVUsSUFBSSxTQUFKLENBQUEsQ0FBVjtNQUFILENBQWYsQ0FBSixFQUFrRSxRQUFsRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxPQUFBLENBQVEsQ0FBRSxJQUFJLFNBQUosQ0FBQSxDQUFGLENBQW1CLENBQUMsSUFBcEIsQ0FBeUIsTUFBekIsQ0FBUjtNQUFILENBQWYsQ0FBSixFQUFrRSxXQUFsRTtNQUVHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULFlBQUEsRUFBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxRQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFRLEtBQUEsR0FBWSxDQUFFLFNBQUEsT0FBRjtRQUNaLElBQUEsR0FBWSxDQUFFLFFBQUEsTUFBRjtRQUNaLEdBQUEsR0FBWSxJQUFJLFNBQUosQ0FBQSxFQUZwQjs7UUFJUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWYsQ0FBSixFQUEwRSxDQUExRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZixDQUFKLEVBQTBFLElBQTFFLEVBTFI7O1FBT1EsU0FBQSxHQUFZO1FBQ1osU0FBQSxHQUFZO1FBQ1osU0FBQSxHQUFZO1FBQ1osU0FBQSxHQUFZO1FBQ1osR0FBRyxDQUFDLElBQUosQ0FBUyxLQUFBLEdBQVEsUUFBQSxDQUFFLENBQUYsQ0FBQTtVQUFzQixJQUFBLENBQUssWUFBTCxFQUFtQixHQUFBLENBQUksQ0FBSixDQUFuQjtpQkFBMEIsU0FBUyxDQUFDLElBQVYsQ0FBZSxDQUFmO1FBQWhELENBQWpCO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxLQUFBLEdBQVEsU0FBQSxDQUFFLENBQUYsQ0FBQTtVQUNmLElBQXNCLENBQUUsT0FBTyxDQUFULENBQUEsS0FBZ0IsUUFBdEM7QUFBQSxtQkFBTyxDQUFBLE1BQU0sQ0FBTixFQUFQOztpQkFDQSxDQUFBLE1BQU0sQ0FBQyxDQUFDLFdBQUYsQ0FBQSxDQUFOO1FBRmUsQ0FBakI7UUFHQSxHQUFHLENBQUMsSUFBSixDQUFTLEtBQUEsR0FBUSxRQUFBLENBQUUsQ0FBRixDQUFBO1VBQXNCLElBQUEsQ0FBSyxZQUFMLEVBQW1CLEdBQUEsQ0FBSSxDQUFKLENBQW5CO2lCQUEwQixTQUFTLENBQUMsSUFBVixDQUFlLENBQWY7UUFBaEQsQ0FBakI7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLEVBQUEsR0FBUSxTQUFBLENBQUUsQ0FBRixFQUFLLE9BQU8sR0FBWixDQUFBO1VBQ2YsSUFBa0IsTUFBTyxTQUFQLE1BQWMsSUFBaEM7QUFBQSxtQkFBTyxDQUFBLE1BQU0sQ0FBTixFQUFQOztpQkFDQSxDQUFBLE1BQU0sQ0FBQSxHQUFJLElBQVY7UUFGZSxDQUFqQjtRQUdBLEdBQUcsQ0FBQyxJQUFKLENBQVMsS0FBQSxHQUFRLFFBQUEsQ0FBRSxDQUFGLENBQUE7VUFBc0IsSUFBQSxDQUFLLFlBQUwsRUFBbUIsR0FBQSxDQUFJLENBQUosQ0FBbkI7aUJBQTBCLFNBQVMsQ0FBQyxJQUFWLENBQWUsQ0FBZjtRQUFoRCxDQUFqQjtRQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsUUFBQSxHQUFXLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFDbEIsSUFBcUMsQ0FBQSxLQUFLLEtBQTFDO0FBQUEsbUJBQU8sQ0FBQSxNQUFNLENBQUEsYUFBQSxDQUFOLEVBQVA7O1VBQ0EsSUFBcUMsQ0FBQSxLQUFLLElBQTFDO0FBQUEsbUJBQU8sQ0FBQSxNQUFNLElBQU4sRUFBUDs7aUJBQ0EsQ0FBQSxNQUFNLENBQU47UUFIa0IsQ0FBcEI7UUFJQSxHQUFHLENBQUMsSUFBSixDQUFTLE1BQUEsR0FBUyxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQXNCLElBQWUsTUFBTyxTQUFQLE1BQWMsSUFBN0I7bUJBQUEsQ0FBQSxNQUFNLENBQU4sRUFBQTs7UUFBdEIsQ0FBbEI7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLEtBQUEsR0FBUyxRQUFBLENBQUUsQ0FBRixDQUFBO1VBQXNCLElBQUEsQ0FBSyxZQUFMLEVBQW1CLEdBQUEsQ0FBSSxDQUFKLENBQW5CO2lCQUEwQixTQUFTLENBQUMsSUFBVixDQUFlLENBQWY7UUFBaEQsQ0FBbEIsRUF6QlI7O1FBMkJRLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZixDQUFKLEVBQWtGLENBQWxGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFmLENBQUosRUFBa0YsS0FBbEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxJQUFKLENBQVMsS0FBVCxFQUFnQixVQUFoQixFQUE0QixJQUE1QjtRQUFILENBQWYsQ0FBSixFQUFrRixJQUFsRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7QUFBRSxjQUFBO2lCQUFDO1lBQUUsR0FBQTs7QUFBRTtjQUFBLEtBQUEsZUFBQTs2QkFBQTtjQUFBLENBQUE7O2dCQUFGLENBQUY7O1FBQUgsQ0FBZixDQUFKLEVBQWtGLENBQUUsQ0FBQSxhQUFBLENBQUYsRUFBdUIsV0FBdkIsRUFBb0MsSUFBcEMsQ0FBbEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBZixDQUFKLEVBQWtGLENBQUUsS0FBRixFQUFTLFVBQVQsRUFBdUIsSUFBdkIsQ0FBbEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBZixDQUFKLEVBQWtGLENBQUUsS0FBRixFQUFTLFVBQVQsRUFBdUIsSUFBdkIsQ0FBbEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBZixDQUFKLEVBQWtGLENBQUUsS0FBRixFQUFTLFdBQVQsRUFBdUIsSUFBdkIsQ0FBbEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBZixDQUFKLEVBQWtGLENBQUUsQ0FBQSxhQUFBLENBQUYsRUFBdUIsV0FBdkIsRUFBb0MsSUFBcEMsQ0FBbEY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTtpQkFBQztZQUFFLEdBQUE7O0FBQUU7Y0FBQSxLQUFBLHNDQUFBOzZCQUFBO2NBQUEsQ0FBQTs7Z0JBQUYsQ0FBRjtXQUF5RCxDQUFDLElBQTFELENBQStELEVBQS9EO1FBQUgsQ0FBZixDQUFKLEVBQStGLENBQUEsdUJBQUEsQ0FBL0Y7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTtpQkFBQzs7QUFBSTtZQUFBLEtBQUEscUNBQUE7MkJBQUE7WUFBQSxDQUFBOztjQUFKLENBQXlELENBQUMsSUFBMUQsQ0FBK0QsRUFBL0Q7UUFBSCxDQUFmLENBQUosRUFBK0YsQ0FBQSx1QkFBQSxDQUEvRjtBQUNBLGVBQU87TUF0Q04sQ0FBQSxJQVJUOztBQWdETSxhQUFPO0lBakRJLENBQWI7O0lBb0RBLFdBQUEsRUFBYSxRQUFBLENBQUEsQ0FBQTtBQUNqQixVQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO01BQU0sU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsUUFBUSxDQUFDLGVBQW5CLENBQUEsQ0FBOUI7TUFDQSxDQUFBLENBQUUsU0FBRixFQUNFLFNBREYsQ0FBQSxHQUM4QixTQUFTLENBQUMsaUJBQVYsQ0FBQSxDQUQ5QjtNQUdHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULFlBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQTtRQUFRLEdBQUEsR0FBWSxJQUFJLFNBQUosQ0FBQSxFQUFwQjs7UUFFUSxHQUFHLENBQUMsSUFBSixDQUFTLEtBQUEsR0FBUSxTQUFBLENBQUUsQ0FBRixDQUFBO2lCQUFTLENBQUEsTUFBTSxDQUFBLEdBQUksQ0FBVjtRQUFULENBQWpCO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxLQUFBLEdBQVEsU0FBQSxDQUFFLENBQUYsQ0FBQTtpQkFBUyxDQUFBLE1BQU0sQ0FBQSxHQUFJLENBQVY7UUFBVCxDQUFqQjtRQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsS0FBQSxHQUFRLFNBQUEsQ0FBRSxDQUFGLENBQUE7aUJBQVMsQ0FBQSxNQUFNLENBQUEsR0FBSSxDQUFWO1FBQVQsQ0FBakI7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLEtBQUEsR0FBUSxTQUFBLENBQUUsQ0FBRixDQUFBO2lCQUFTLENBQUEsTUFBTSxDQUFBLEdBQUksQ0FBVjtRQUFULENBQWpCO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxLQUFBLEdBQVEsU0FBQSxDQUFFLENBQUYsQ0FBQTtpQkFBUyxDQUFBLE1BQU0sQ0FBQSxHQUFJLENBQVY7UUFBVCxDQUFqQixFQU5SOztRQVFRLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7QUFBRSxjQUFBO2lCQUFDO1lBQUUsR0FBQTs7QUFBRTtjQUFBLEtBQUEsZ0JBQUE7NkJBQUE7Y0FBQSxDQUFBOztnQkFBRixDQUFGOztRQUFILENBQWYsQ0FBSixFQUFzRSxDQUFFLENBQUYsQ0FBdEU7QUFDQSxlQUFPO01BVk4sQ0FBQSxJQUxUOztBQWlCTSxhQUFPO0lBbEJJLENBcERiOztJQXlFQSxXQUFBLEVBQWEsUUFBQSxDQUFBLENBQUE7QUFDakIsVUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtNQUFNLFNBQUEsR0FBOEIsT0FBQSxDQUFRLG1DQUFSO01BQzlCLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBOEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQTlCO01BQ0EsQ0FBQSxDQUFFLFNBQUYsRUFDRSxTQURGLENBQUEsR0FDOEIsU0FBUyxDQUFDLGlCQUFWLENBQUEsQ0FEOUI7TUFHRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLFVBQUEsRUFBQSxVQUFBOztRQUNRLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBRSxHQUFBLENBQUUsQ0FBRSxJQUFJLFNBQUosQ0FBQSxDQUFGLENBQW1CLENBQUMsSUFBcEIsQ0FBeUIsTUFBekIsQ0FBRixDQUFGO1FBQUgsQ0FBZixDQUFKLEVBQXNFLENBQUUsTUFBRixDQUF0RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQU8sQ0FBRSxJQUFJLFNBQUosQ0FBQSxDQUFGLENBQW1CLENBQUMsR0FBcEIsQ0FBeUIsTUFBekI7UUFBUCxDQUFmLENBQUosRUFBc0UsQ0FBRSxNQUFGLENBQXRFO0FBQ0EsZUFBTztNQUpOLENBQUEsSUFMVDs7QUFXTSxhQUFPO0lBWkksQ0F6RWI7O0lBd0ZBLFdBQUEsRUFBYSxRQUFBLENBQUEsQ0FBQTtBQUNqQixVQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO01BQU0sU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsUUFBUSxDQUFDLGVBQW5CLENBQUEsQ0FBOUI7TUFDQSxDQUFBLENBQUUsU0FBRixFQUNFLFNBREYsQ0FBQSxHQUM4QixTQUFTLENBQUMsaUJBQVYsQ0FBQSxDQUQ5QjtNQUdHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULFlBQUEsU0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7UUFBUSxTQUFBLEdBQVksR0FBcEI7O1FBRVEsR0FBQSxHQUFNLElBQUksU0FBSixDQUFBO1FBQ04sR0FBRyxDQUFDLElBQUosQ0FBUyxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsU0FBUyxDQUFDLElBQVYsQ0FBZSxPQUFmO2lCQUF3QixDQUFBLE1BQU0sQ0FBQSxHQUFJLE1BQVY7UUFBakMsQ0FBVDtRQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsU0FBQSxDQUFFLENBQUYsQ0FBQTtVQUFTLFNBQVMsQ0FBQyxJQUFWLENBQWUsT0FBZjtpQkFBd0IsQ0FBQSxNQUFNLENBQUEsR0FBSSxNQUFWO1FBQWpDLENBQVQsRUFKUjs7UUFNUSxHQUFBLEdBQU0sSUFBSSxTQUFKLENBQUE7UUFDTixHQUFHLENBQUMsSUFBSixDQUFTLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxTQUFTLENBQUMsSUFBVixDQUFlLE9BQWY7aUJBQXdCLENBQUEsTUFBTSxDQUFBLEdBQUksTUFBVjtRQUFqQyxDQUFUO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxHQUFUO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsU0FBUyxDQUFDLElBQVYsQ0FBZSxPQUFmO2lCQUF3QixDQUFBLE1BQU0sQ0FBQSxHQUFJLE1BQVY7UUFBakMsQ0FBVCxFQVRSOztRQVdRLEdBQUEsR0FBTSxJQUFJLFNBQUosQ0FBQTtRQUNOLEdBQUcsQ0FBQyxJQUFKLENBQVMsU0FBQSxDQUFFLENBQUYsQ0FBQTtVQUFTLFNBQVMsQ0FBQyxJQUFWLENBQWUsT0FBZjtpQkFBd0IsQ0FBQSxNQUFNLENBQUEsR0FBSSxNQUFWO1FBQWpDLENBQVQ7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLEdBQVQ7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxTQUFTLENBQUMsSUFBVixDQUFlLE9BQWY7aUJBQXdCLENBQUEsTUFBTSxDQUFBLEdBQUksTUFBVjtRQUFqQyxDQUFUO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsR0FBSixDQUFlLFNBQWY7UUFBSCxDQUFmLENBQUosRUFBa0QsQ0FBRSxpQ0FBRixDQUFsRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUc7UUFBSCxDQUFmLENBQUosRUFBa0QsQ0FBRSxPQUFGLEVBQVcsT0FBWCxFQUFvQixPQUFwQixFQUE2QixPQUE3QixFQUFzQyxPQUF0QyxFQUErQyxPQUEvQyxDQUFsRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLFNBQUosQ0FBZSxTQUFmO1FBQUgsQ0FBZixDQUFKLEVBQWtELGlDQUFsRDtBQUNBLGVBQU87TUFuQk4sQ0FBQSxJQUxUOztBQTBCTSxhQUFPO0lBM0JJLENBeEZiOztJQXNIQSxXQUFBLEVBQWEsUUFBQSxDQUFBLENBQUE7QUFDakIsVUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtNQUFNLFNBQUEsR0FBOEIsT0FBQSxDQUFRLG1DQUFSO01BQzlCLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBOEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQTlCO01BQ0EsQ0FBQSxDQUFFLFNBQUYsRUFDRSxTQURGLENBQUEsR0FDOEIsU0FBUyxDQUFDLGlCQUFWLENBQUEsQ0FEOUI7TUFHRyxDQUFBLENBQUEsQ0FBRyxtREFBSCxHQUFBLEVBQUE7QUFDVCxZQUFBLEtBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUE7UUFBUSxLQUFBLEdBQWdCLENBQUUsU0FBQSxPQUFGO1FBQ2hCLElBQUEsR0FBZ0IsQ0FBRSxRQUFBLE1BQUY7UUFDaEIsR0FBQSxHQUFnQixJQUFJLFNBQUosQ0FBQTtRQUNoQixFQUFBLEdBQWdCLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFDZCxJQUFBLENBQUssZUFBTCxFQUFzQixDQUF0QjtBQUNBLGtCQUFPLENBQVA7QUFBQSxpQkFDTyxLQURQO2NBRUksTUFBTTtxQkFDTixDQUFBLE1BQU0sQ0FBTjtBQUhKLGlCQUlPLElBSlA7Y0FLSSxNQUFNO3FCQUNOLENBQUEsTUFBTSxDQUFOO0FBTko7cUJBUUksQ0FBQSxNQUFNLENBQUEsR0FBSSxDQUFWO0FBUko7UUFGYztRQVdoQixFQUFBLEdBQWdCLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFDZCxJQUFBLENBQUssZUFBTCxFQUFzQixDQUF0QjtBQUNBLGtCQUFPLENBQVA7QUFBQSxpQkFDTyxLQURQO2NBRUksTUFBTTtxQkFDTixDQUFBLE1BQU0sQ0FBTjtBQUhKLGlCQUlPLElBSlA7Y0FLSSxNQUFNO3FCQUNOLENBQUEsTUFBTSxDQUFOO0FBTko7cUJBUUksQ0FBQSxNQUFNLENBQUEsR0FBSSxDQUFWO0FBUko7UUFGYztRQVdoQixHQUFHLENBQUMsSUFBSixDQUFTLEVBQVQ7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLEVBQVQ7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxJQUFlLE1BQU8sU0FBUCxNQUFjLElBQTdCO21CQUFBLENBQUEsTUFBTSxDQUFOLEVBQUE7O1FBQVQsQ0FBVDtRQUNBLEtBQUEsQ0FBTSxZQUFOLEVBQW9CLEdBQXBCO1FBQ0EsT0FBQSxDQUFRLFlBQVIsRUFBc0IsdUNBQXRCO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsR0FBSixDQUFRLEtBQVIsRUFBZSxFQUFmLEVBQW1CLElBQW5CO1FBQUgsQ0FBZixDQUFKLEVBQW1FLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxFQUFSLEVBQVksQ0FBWixFQUFlLENBQWYsQ0FBbkU7UUFDQSxPQUFBLENBQVEsWUFBUixFQUFzQix1Q0FBdEI7QUFDQSxlQUFPO01BakNOLENBQUEsSUFMVDs7QUF3Q00sYUFBTztJQXpDSSxDQXRIYjs7SUFrS0EsbUJBQUEsRUFBcUIsUUFBQSxDQUFBLENBQUE7QUFDekIsVUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUEsRUFBQSxvQkFBQSxFQUFBLGNBQUEsRUFBQSxTQUFBLEVBQUEsbUJBQUEsRUFBQSxtQkFBQSxFQUFBLHdCQUFBLEVBQUEsaUJBQUEsRUFBQSxZQUFBLEVBQUE7TUFBTSxTQUFBLEdBQThCLE9BQUEsQ0FBUSxtQ0FBUjtNQUM5QixDQUFBLENBQUUsT0FBRixDQUFBLEdBQThCLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBbkIsQ0FBQSxDQUE5QjtNQUNBLENBQUEsQ0FBRSxTQUFGLEVBQ0UsU0FERixDQUFBLEdBQzhCLFNBQVMsQ0FBQyxpQkFBVixDQUFBLENBRDlCO01BRUEsQ0FBQSxDQUFFLFFBQUYsRUFDRSxvQkFERixFQUVFLG1CQUZGLEVBR0UsaUJBSEYsRUFJRSxjQUpGLENBQUEsR0FJOEIsU0FKOUIsRUFKTjs7OztNQVlNLFlBQUEsR0FBZSxDQUNiLE1BQUEsQ0FBTyxPQUFQLENBRGEsRUFFYixNQUFBLENBQU8sS0FBUCxDQUZhLEVBR2IsSUFIYSxFQUliLFFBSmEsRUFLYixJQUxhO01BT2YsbUJBQUEsR0FBc0I7UUFDcEI7VUFBRSxLQUFBLEVBQU8sS0FBVDtVQUFxQyxRQUFBLEVBQVUsQ0FBRSxLQUFGLENBQS9DO1VBQTJFLE9BQUEsRUFBUyxDQUFFLE9BQUYsQ0FBcEY7VUFBZ0gsT0FBQSxFQUFTLEtBQXpIO1VBQStJLElBQUEsRUFBTSxLQUFySjtVQUE0SixJQUFBLEVBQU0sSUFBbEs7VUFBdUwsVUFBQSxFQUFZO1FBQW5NLENBRG9CO1FBRXBCO1VBQUUsS0FBQSxFQUFPLEdBQVQ7VUFBcUMsUUFBQSxFQUFVLENBQUUsR0FBRixDQUEvQztVQUEyRSxPQUFBLEVBQVMsQ0FBRSxPQUFGLENBQXBGO1VBQWdILE9BQUEsRUFBUyxHQUF6SDtVQUErSSxJQUFBLEVBQU0sS0FBcko7VUFBNEosSUFBQSxFQUFNLElBQWxLO1VBQXVMLFVBQUEsRUFBWTtRQUFuTSxDQUZvQjtRQUlwQixDQUFBOztVQUFFLEtBQUEsRUFBTyxTQUFUO1VBQXFDLFFBQUEsRUFBVSxDQUFFLFNBQUYsQ0FBL0M7VUFBMkUsT0FBQSxFQUFTLENBQUUsU0FBRixDQUFwRjtVQUFnSCxPQUFBLEVBQVMsU0FBekg7VUFBK0ksSUFBQSxFQUFNLEtBQXJKO1VBQTRKLElBQUEsRUFBTSxDQUFFLEtBQUYsQ0FBbEs7VUFBdUwsVUFBQSxFQUFZO1FBQW5NLENBSm9CO1FBS3BCO1VBQUUsS0FBQSxFQUFPLE1BQVQ7VUFBcUMsUUFBQSxFQUFVLENBQUUsTUFBRixDQUEvQztVQUEyRSxPQUFBLEVBQVMsQ0FBRSxTQUFGLENBQXBGO1VBQWdILE9BQUEsRUFBUyxNQUF6SDtVQUErSSxJQUFBLEVBQU0sS0FBcko7VUFBNEosSUFBQSxFQUFNLENBQUUsS0FBRixDQUFsSztVQUF1TCxVQUFBLEVBQVk7UUFBbk0sQ0FMb0I7UUFPcEIsQ0FBQTs7VUFBRSxLQUFBLEVBQU8sY0FBVDtVQUFxQyxRQUFBLEVBQVUsQ0FBRSxNQUFGO1FBQVUsUUFBVjtRQUFvQixFQUFwQixDQUEvQztVQUEyRSxPQUFBLEVBQVMsQ0FBRSxTQUFGO1FBQWEsV0FBYixDQUFwRjtVQUFnSCxPQUFBLEVBQVMsZ0JBQXpIO1VBQStJLElBQUEsRUFBTSxLQUFySjtVQUE0SixJQUFBLEVBQU0sQ0FBRSxLQUFGO1FBQVMsT0FBVCxDQUFsSztVQUF1TCxVQUFBLEVBQVk7UUFBbk0sQ0FQb0I7UUFRcEI7VUFBRSxLQUFBLEVBQU8sYUFBVDtVQUFxQyxRQUFBLEVBQVUsQ0FBRSxNQUFGO1FBQVUsUUFBVixDQUEvQztVQUEyRSxPQUFBLEVBQVMsQ0FBRSxTQUFGO1FBQWEsV0FBYixDQUFwRjtVQUFnSCxPQUFBLEVBQVMsY0FBekg7VUFBK0ksSUFBQSxFQUFNLEtBQXJKO1VBQTRKLElBQUEsRUFBTSxDQUFFLEtBQUY7UUFBUyxPQUFULENBQWxLO1VBQXVMLFVBQUEsRUFBWTtRQUFuTSxDQVJvQjtRQVVwQixDQUFBOztVQUFFLEtBQUEsRUFBTyxhQUFUO1VBQXFDLFFBQUEsRUFBVSxDQUFFLGFBQUYsQ0FBL0M7VUFBMkUsT0FBQSxFQUFTLENBQUUsYUFBRixDQUFwRjtVQUFnSCxPQUFBLEVBQVMsYUFBekg7VUFBK0ksSUFBQSxFQUFNLEtBQXJKO1VBQTRKLElBQUEsRUFBTSxDQUFFLFNBQUYsQ0FBbEs7VUFBdUwsVUFBQSxFQUFZO1FBQW5NLENBVm9CO1FBV3BCO1VBQUUsS0FBQSxFQUFPLFVBQVQ7VUFBcUMsUUFBQSxFQUFVLENBQUUsVUFBRixDQUEvQztVQUEyRSxPQUFBLEVBQVMsQ0FBRSxhQUFGLENBQXBGO1VBQWdILE9BQUEsRUFBUyxVQUF6SDtVQUErSSxJQUFBLEVBQU0sS0FBcko7VUFBNEosSUFBQSxFQUFNLENBQUUsU0FBRixDQUFsSztVQUF1TCxVQUFBLEVBQVk7UUFBbk0sQ0FYb0I7UUFhcEIsQ0FBQTs7VUFBRSxLQUFBLEVBQU8sV0FBVDtVQUFxQyxRQUFBLEVBQVUsQ0FBRSxXQUFGLENBQS9DO1VBQTJFLE9BQUEsRUFBUyxDQUFFLFdBQUYsQ0FBcEY7VUFBZ0gsT0FBQSxFQUFTLFdBQXpIO1VBQStJLElBQUEsRUFBTSxLQUFySjtVQUE0SixJQUFBLEVBQU0sQ0FBRSxPQUFGLENBQWxLO1VBQXVMLFVBQUEsRUFBWTtRQUFuTSxDQWJvQjtRQWNwQjtVQUFFLEtBQUEsRUFBTyxRQUFUO1VBQXFDLFFBQUEsRUFBVSxDQUFFLFFBQUYsQ0FBL0M7VUFBMkUsT0FBQSxFQUFTLENBQUUsV0FBRixDQUFwRjtVQUFnSCxPQUFBLEVBQVMsUUFBekg7VUFBK0ksSUFBQSxFQUFNLEtBQXJKO1VBQTRKLElBQUEsRUFBTSxDQUFFLE9BQUYsQ0FBbEs7VUFBdUwsVUFBQSxFQUFZO1FBQW5NLENBZG9CO1FBZ0JwQixDQUFBOztVQUFFLEtBQUEsRUFBTyxDQUFFLFdBQUY7UUFBZSxTQUFmLENBQVQ7VUFBcUMsUUFBQSxFQUFVLENBQUUsV0FBRjtRQUFlLFNBQWYsQ0FBL0M7VUFBMkUsT0FBQSxFQUFTLENBQUUsV0FBRjtRQUFlLFNBQWYsQ0FBcEY7VUFBZ0gsT0FBQSxFQUFTLG9CQUF6SDtVQUErSSxJQUFBLEVBQU0sS0FBcko7VUFBNEosSUFBQSxFQUFNLENBQUUsT0FBRjtRQUFXLEtBQVgsQ0FBbEs7VUFBdUwsVUFBQSxFQUFZO1FBQW5NLENBaEJvQjtRQWlCcEI7VUFBRSxLQUFBLEVBQU8sQ0FBRSxRQUFGO1FBQVksTUFBWixDQUFUO1VBQXFDLFFBQUEsRUFBVSxDQUFFLFFBQUY7UUFBWSxNQUFaLENBQS9DO1VBQTJFLE9BQUEsRUFBUyxDQUFFLFdBQUY7UUFBZSxTQUFmLENBQXBGO1VBQWdILE9BQUEsRUFBUyxjQUF6SDtVQUErSSxJQUFBLEVBQU0sS0FBcko7VUFBNEosSUFBQSxFQUFNLENBQUUsT0FBRjtRQUFXLEtBQVgsQ0FBbEs7VUFBdUwsVUFBQSxFQUFZO1FBQW5NLENBakJvQjtRQWtCcEI7VUFBRSxLQUFBLEVBQU8sbUJBQVQ7VUFBcUMsUUFBQSxFQUFVLENBQUUsV0FBRjtRQUFlLFNBQWYsQ0FBL0M7VUFBMkUsT0FBQSxFQUFTLENBQUUsV0FBRjtRQUFlLFNBQWYsQ0FBcEY7VUFBZ0gsT0FBQSxFQUFTLG9CQUF6SDtVQUErSSxJQUFBLEVBQU0sS0FBcko7VUFBNEosSUFBQSxFQUFNLENBQUUsT0FBRjtRQUFXLEtBQVgsQ0FBbEs7VUFBdUwsVUFBQSxFQUFZO1FBQW5NLENBbEJvQjtRQW1CcEI7VUFBRSxLQUFBLEVBQU8sYUFBVDtVQUFxQyxRQUFBLEVBQVUsQ0FBRSxRQUFGO1FBQVksTUFBWixDQUEvQztVQUEyRSxPQUFBLEVBQVMsQ0FBRSxXQUFGO1FBQWUsU0FBZixDQUFwRjtVQUFnSCxPQUFBLEVBQVMsY0FBekg7VUFBK0ksSUFBQSxFQUFNLEtBQXJKO1VBQTRKLElBQUEsRUFBTSxDQUFFLE9BQUY7UUFBVyxLQUFYLENBQWxLO1VBQXVMLFVBQUEsRUFBWTtRQUFuTSxDQW5Cb0I7UUFvQnBCO1VBQUUsS0FBQSxFQUFPLHNCQUFUO1VBQXFDLFFBQUEsRUFBVSxDQUFFLFdBQUY7UUFBZSxTQUFmLENBQS9DO1VBQTJFLE9BQUEsRUFBUyxDQUFFLFdBQUY7UUFBZSxTQUFmLENBQXBGO1VBQWdILE9BQUEsRUFBUyxvQkFBekg7VUFBK0ksSUFBQSxFQUFNLEtBQXJKO1VBQTRKLElBQUEsRUFBTSxDQUFFLE9BQUY7UUFBVyxLQUFYLENBQWxLO1VBQXVMLFVBQUEsRUFBWTtRQUFuTSxDQXBCb0I7UUFzQnBCLENBQUE7O1VBQUUsS0FBQSxFQUFPLElBQVQ7VUFBcUMsUUFBQSxFQUFVLENBQUUsRUFBRixDQUEvQztVQUEyRSxPQUFBLEVBQVMsQ0FBRSxRQUFGLENBQXBGO1VBQWdILE9BQUEsRUFBUyxFQUF6SDtVQUErSSxJQUFBLEVBQU0sSUFBcko7VUFBMkosSUFBQSxFQUFNLEtBQWpLO1VBQXNMLFVBQUEsRUFBWTtRQUFsTSxDQXRCb0I7UUF1QnBCO1VBQUUsS0FBQSxFQUFPLEVBQVQ7VUFBcUMsUUFBQSxFQUFVLEVBQS9DO1VBQTJFLE9BQUEsRUFBUyxDQUFFLFFBQUYsQ0FBcEY7VUFBZ0gsT0FBQSxFQUFTLEVBQXpIO1VBQStJLElBQUEsRUFBTSxJQUFySjtVQUEySixJQUFBLEVBQU0sS0FBaks7VUFBc0wsVUFBQSxFQUFZO1FBQWxNLENBdkJvQjtRQXdCcEI7VUFBRSxLQUFBLEVBQU8sQ0FBRSxFQUFGLENBQVQ7VUFBcUMsUUFBQSxFQUFVLEVBQS9DO1VBQTJFLE9BQUEsRUFBUyxDQUFFLFFBQUYsQ0FBcEY7VUFBZ0gsT0FBQSxFQUFTLEVBQXpIO1VBQStJLElBQUEsRUFBTSxJQUFySjtVQUEySixJQUFBLEVBQU0sS0FBaks7VUFBc0wsVUFBQSxFQUFZO1FBQWxNLENBeEJvQjtRQXlCcEI7VUFBRSxLQUFBLEVBQU8sQ0FBRSxDQUFFLEVBQUYsQ0FBRixDQUFUO1VBQXFDLFFBQUEsRUFBVSxDQUFFLEVBQUYsQ0FBL0M7VUFBMkUsT0FBQSxFQUFTLENBQUUsUUFBRixDQUFwRjtVQUFnSCxPQUFBLEVBQVMsRUFBekg7VUFBK0ksSUFBQSxFQUFNLElBQXJKO1VBQTJKLElBQUEsRUFBTSxLQUFqSztVQUFzTCxVQUFBLEVBQVk7UUFBbE0sQ0F6Qm9CO1FBMEJwQjtVQUFFLEtBQUEsRUFBTyxNQUFUO1VBQXFDLFFBQUEsRUFBVSxDQUFFLE1BQUYsQ0FBL0M7VUFBMkUsT0FBQSxFQUFTLENBQUUsUUFBRixDQUFwRjtVQUFnSCxPQUFBLEVBQVMsTUFBekg7VUFBK0ksSUFBQSxFQUFNLElBQXJKO1VBQTJKLElBQUEsRUFBTSxLQUFqSztVQUFzTCxVQUFBLEVBQVk7UUFBbE0sQ0ExQm9CO1FBMkJwQjtVQUFFLEtBQUEsRUFBTyxFQUFUO1VBQXFDLFFBQUEsRUFBVSxDQUFFLEVBQUYsQ0FBL0M7VUFBMkUsT0FBQSxFQUFTLENBQUUsUUFBRixDQUFwRjtVQUFnSCxPQUFBLEVBQVMsRUFBekg7VUFBK0ksSUFBQSxFQUFNLElBQXJKO1VBQTJKLElBQUEsRUFBTSxLQUFqSztVQUFzTCxVQUFBLEVBQVk7UUFBbE0sQ0EzQm9CO1FBNEJwQjtVQUFFLEtBQUEsRUFBTyxPQUFUO1VBQXFDLFFBQUEsRUFBVSxDQUFFLE9BQUYsQ0FBL0M7VUFBMkUsT0FBQSxFQUFTLENBQUUsUUFBRixDQUFwRjtVQUFnSCxPQUFBLEVBQVMsT0FBekg7VUFBK0ksSUFBQSxFQUFNLElBQXJKO1VBQTJKLElBQUEsRUFBTSxLQUFqSztVQUFzTCxVQUFBLEVBQVk7UUFBbE0sQ0E1Qm9CO1FBOEJwQixDQUFBOztVQUFFLEtBQUEsRUFBTyxDQUFFLE1BQUY7UUFBVSxLQUFWLENBQVQ7VUFBcUMsUUFBQSxFQUFVLENBQUUsTUFBRjtRQUFVLEtBQVYsQ0FBL0M7VUFBMkUsT0FBQSxFQUFTLENBQUUsUUFBRjtRQUFZLE9BQVosQ0FBcEY7VUFBZ0gsT0FBQSxFQUFTLFdBQXpIO1VBQStJLElBQUEsRUFBTSxJQUFySjtVQUEySixJQUFBLEVBQU0sSUFBaks7VUFBc0wsVUFBQSxFQUFZO1FBQWxNLENBOUJvQjtRQStCcEI7VUFBRSxLQUFBLEVBQU8sV0FBVDtVQUFxQyxRQUFBLEVBQVUsQ0FBRSxNQUFGO1FBQVUsS0FBVixDQUEvQztVQUEyRSxPQUFBLEVBQVMsQ0FBRSxRQUFGO1FBQVksT0FBWixDQUFwRjtVQUFnSCxPQUFBLEVBQVMsV0FBekg7VUFBK0ksSUFBQSxFQUFNLElBQXJKO1VBQTJKLElBQUEsRUFBTSxJQUFqSztVQUFzTCxVQUFBLEVBQVk7UUFBbE0sQ0EvQm9CO1FBaUNwQixDQUFBOztVQUFFLEtBQUEsRUFBTyxjQUFUO1VBQXlCLEtBQUEsRUFBTztRQUFoQyxDQWpDb0I7O01BbUN0Qix3QkFBQSxHQUEyQjtRQUN6QjtVQUFFLEdBQUEsRUFBSyxLQUFQO1VBQW1DLEdBQUEsRUFBSyxPQUF4QztVQUE2RCxlQUFBLEVBQWlCLElBQTlFO1VBQW9GLGFBQUEsRUFBZSxJQUFuRztVQUF5RyxNQUFBLEVBQVEsS0FBakg7VUFBd0gsVUFBQSxFQUFZLEtBQXBJO1VBQTJJLElBQUEsRUFBTTtRQUFqSixDQUR5QjtRQUV6QjtVQUFFLEdBQUEsRUFBSyxHQUFQO1VBQW1DLEdBQUEsRUFBSyxPQUF4QztVQUE2RCxlQUFBLEVBQWlCLElBQTlFO1VBQW9GLGFBQUEsRUFBZSxJQUFuRztVQUF5RyxNQUFBLEVBQVEsS0FBakg7VUFBd0gsVUFBQSxFQUFZLEtBQXBJO1VBQTJJLElBQUEsRUFBTTtRQUFqSixDQUZ5QjtRQUl6QixDQUFBOztVQUFFLEdBQUEsRUFBSyxTQUFQO1VBQW1DLEdBQUEsRUFBSyxTQUF4QztVQUE2RCxlQUFBLEVBQWlCLEtBQTlFO1VBQXFGLGFBQUEsRUFBZSxJQUFwRztVQUEwRyxNQUFBLEVBQVEsS0FBbEg7VUFBeUgsVUFBQSxFQUFZLEtBQXJJO1VBQTRJLElBQUEsRUFBTTtRQUFsSixDQUp5QjtRQUt6QjtVQUFFLEdBQUEsRUFBSyxNQUFQO1VBQW1DLEdBQUEsRUFBSyxTQUF4QztVQUE2RCxlQUFBLEVBQWlCLEtBQTlFO1VBQXFGLGFBQUEsRUFBZSxJQUFwRztVQUEwRyxNQUFBLEVBQVEsS0FBbEg7VUFBeUgsVUFBQSxFQUFZLEtBQXJJO1VBQTRJLElBQUEsRUFBTTtRQUFsSixDQUx5QjtRQU96QixDQUFBOztVQUFFLEdBQUEsRUFBSyxjQUFQO1VBQW1DLEdBQUEsRUFBSyxtQkFBeEM7VUFBNkQsZUFBQSxFQUFpQixJQUE5RTtVQUFvRixhQUFBLEVBQWUsSUFBbkc7VUFBeUcsTUFBQSxFQUFRLEtBQWpIO1VBQXdILFVBQUEsRUFBWSxLQUFwSTtVQUEySSxJQUFBLEVBQU07UUFBakosQ0FQeUI7UUFRekI7VUFBRSxHQUFBLEVBQUssYUFBUDtVQUFtQyxHQUFBLEVBQUssbUJBQXhDO1VBQTZELGVBQUEsRUFBaUIsSUFBOUU7VUFBb0YsYUFBQSxFQUFlLElBQW5HO1VBQXlHLE1BQUEsRUFBUSxLQUFqSDtVQUF3SCxVQUFBLEVBQVksS0FBcEk7VUFBMkksSUFBQSxFQUFNO1FBQWpKLENBUnlCO1FBVXpCLENBQUE7O1VBQUUsR0FBQSxFQUFLLGFBQVA7VUFBbUMsR0FBQSxFQUFLLGFBQXhDO1VBQTZELGVBQUEsRUFBaUIsS0FBOUU7VUFBcUYsYUFBQSxFQUFlLEtBQXBHO1VBQTJHLE1BQUEsRUFBUSxLQUFuSDtVQUEwSCxVQUFBLEVBQVksS0FBdEk7VUFBNkksSUFBQSxFQUFNO1FBQW5KLENBVnlCO1FBV3pCO1VBQUUsR0FBQSxFQUFLLFVBQVA7VUFBbUMsR0FBQSxFQUFLLGFBQXhDO1VBQTZELGVBQUEsRUFBaUIsS0FBOUU7VUFBcUYsYUFBQSxFQUFlLEtBQXBHO1VBQTJHLE1BQUEsRUFBUSxLQUFuSDtVQUEwSCxVQUFBLEVBQVksS0FBdEk7VUFBNkksSUFBQSxFQUFNO1FBQW5KLENBWHlCO1FBYXpCLENBQUE7O1VBQUUsR0FBQSxFQUFLLFdBQVA7VUFBbUMsR0FBQSxFQUFLLFdBQXhDO1VBQTZELGVBQUEsRUFBaUIsSUFBOUU7VUFBb0YsYUFBQSxFQUFlLEtBQW5HO1VBQTBHLE1BQUEsRUFBUSxLQUFsSDtVQUF5SCxVQUFBLEVBQVksS0FBckk7VUFBNEksSUFBQSxFQUFNO1FBQWxKLENBYnlCO1FBY3pCO1VBQUUsR0FBQSxFQUFLLFFBQVA7VUFBbUMsR0FBQSxFQUFLLFdBQXhDO1VBQTZELGVBQUEsRUFBaUIsSUFBOUU7VUFBb0YsYUFBQSxFQUFlLEtBQW5HO1VBQTBHLE1BQUEsRUFBUSxLQUFsSDtVQUF5SCxVQUFBLEVBQVksS0FBckk7VUFBNEksSUFBQSxFQUFNO1FBQWxKLENBZHlCO1FBZ0J6QixDQUFBOztVQUFFLEdBQUEsRUFBSyxDQUFFLFdBQUY7UUFBZSxTQUFmLENBQVA7VUFBbUMsR0FBQSxFQUFLLG1CQUF4QztVQUE2RCxlQUFBLEVBQWlCLElBQTlFO1VBQW9GLGFBQUEsRUFBZSxJQUFuRztVQUF5RyxNQUFBLEVBQVEsS0FBakg7VUFBd0gsVUFBQSxFQUFZLEtBQXBJO1VBQTJJLElBQUEsRUFBTTtRQUFqSixDQWhCeUI7UUFpQnpCO1VBQUUsR0FBQSxFQUFLLENBQUUsUUFBRjtRQUFZLE1BQVosQ0FBUDtVQUFtQyxHQUFBLEVBQUssbUJBQXhDO1VBQTZELGVBQUEsRUFBaUIsSUFBOUU7VUFBb0YsYUFBQSxFQUFlLElBQW5HO1VBQXlHLE1BQUEsRUFBUSxLQUFqSDtVQUF3SCxVQUFBLEVBQVksS0FBcEk7VUFBMkksSUFBQSxFQUFNO1FBQWpKLENBakJ5QjtRQWtCekI7VUFBRSxHQUFBLEVBQUssbUJBQVA7VUFBbUMsR0FBQSxFQUFLLG1CQUF4QztVQUE2RCxlQUFBLEVBQWlCLElBQTlFO1VBQW9GLGFBQUEsRUFBZSxJQUFuRztVQUF5RyxNQUFBLEVBQVEsS0FBakg7VUFBd0gsVUFBQSxFQUFZLEtBQXBJO1VBQTJJLElBQUEsRUFBTTtRQUFqSixDQWxCeUI7UUFtQnpCO1VBQUUsR0FBQSxFQUFLLGFBQVA7VUFBbUMsR0FBQSxFQUFLLG1CQUF4QztVQUE2RCxlQUFBLEVBQWlCLElBQTlFO1VBQW9GLGFBQUEsRUFBZSxJQUFuRztVQUF5RyxNQUFBLEVBQVEsS0FBakg7VUFBd0gsVUFBQSxFQUFZLEtBQXBJO1VBQTJJLElBQUEsRUFBTTtRQUFqSixDQW5CeUI7UUFvQnpCO1VBQUUsR0FBQSxFQUFLLHNCQUFQO1VBQW1DLEdBQUEsRUFBSyxtQkFBeEM7VUFBNkQsZUFBQSxFQUFpQixJQUE5RTtVQUFvRixhQUFBLEVBQWUsSUFBbkc7VUFBeUcsTUFBQSxFQUFRLEtBQWpIO1VBQXdILFVBQUEsRUFBWSxLQUFwSTtVQUEySSxJQUFBLEVBQU07UUFBakosQ0FwQnlCO1FBc0J6QixDQUFBOztVQUFFLEdBQUEsRUFBSyxJQUFQO1VBQW1DLEdBQUEsRUFBSyxRQUF4QztVQUE2RCxlQUFBLEVBQWlCLEtBQTlFO1VBQXFGLGFBQUEsRUFBZSxLQUFwRztVQUEyRyxNQUFBLEVBQVEsSUFBbkg7VUFBeUgsVUFBQSxFQUFZLElBQXJJO1VBQTJJLElBQUEsRUFBTTtRQUFqSixDQXRCeUI7UUF1QnpCO1VBQUUsR0FBQSxFQUFLLEVBQVA7VUFBbUMsR0FBQSxFQUFLLFFBQXhDO1VBQTZELGVBQUEsRUFBaUIsS0FBOUU7VUFBcUYsYUFBQSxFQUFlLEtBQXBHO1VBQTJHLE1BQUEsRUFBUSxJQUFuSDtVQUF5SCxVQUFBLEVBQVksSUFBckk7VUFBMkksSUFBQSxFQUFNO1FBQWpKLENBdkJ5QjtRQXdCekI7VUFBRSxHQUFBLEVBQUssQ0FBRSxFQUFGLENBQVA7VUFBbUMsR0FBQSxFQUFLLFFBQXhDO1VBQTZELGVBQUEsRUFBaUIsS0FBOUU7VUFBcUYsYUFBQSxFQUFlLEtBQXBHO1VBQTJHLE1BQUEsRUFBUSxJQUFuSDtVQUF5SCxVQUFBLEVBQVksSUFBckk7VUFBMkksSUFBQSxFQUFNO1FBQWpKLENBeEJ5QjtRQXlCekI7VUFBRSxHQUFBLEVBQUssQ0FBRSxDQUFFLEVBQUYsQ0FBRixDQUFQO1VBQW1DLEdBQUEsRUFBSyxRQUF4QztVQUE2RCxlQUFBLEVBQWlCLEtBQTlFO1VBQXFGLGFBQUEsRUFBZSxLQUFwRztVQUEyRyxNQUFBLEVBQVEsSUFBbkg7VUFBeUgsVUFBQSxFQUFZLElBQXJJO1VBQTJJLElBQUEsRUFBTTtRQUFqSixDQXpCeUI7UUEwQnpCO1VBQUUsR0FBQSxFQUFLLE1BQVA7VUFBbUMsR0FBQSxFQUFLLFFBQXhDO1VBQTZELGVBQUEsRUFBaUIsS0FBOUU7VUFBcUYsYUFBQSxFQUFlLEtBQXBHO1VBQTJHLE1BQUEsRUFBUSxJQUFuSDtVQUF5SCxVQUFBLEVBQVksSUFBckk7VUFBMkksSUFBQSxFQUFNO1FBQWpKLENBMUJ5QjtRQTJCekI7VUFBRSxHQUFBLEVBQUssRUFBUDtVQUFtQyxHQUFBLEVBQUssUUFBeEM7VUFBNkQsZUFBQSxFQUFpQixLQUE5RTtVQUFxRixhQUFBLEVBQWUsS0FBcEc7VUFBMkcsTUFBQSxFQUFRLElBQW5IO1VBQXlILFVBQUEsRUFBWSxJQUFySTtVQUEySSxJQUFBLEVBQU07UUFBakosQ0EzQnlCO1FBNEJ6QjtVQUFFLEdBQUEsRUFBSyxPQUFQO1VBQW1DLEdBQUEsRUFBSyxRQUF4QztVQUE2RCxlQUFBLEVBQWlCLEtBQTlFO1VBQXFGLGFBQUEsRUFBZSxLQUFwRztVQUEyRyxNQUFBLEVBQVEsSUFBbkg7VUFBeUgsVUFBQSxFQUFZLElBQXJJO1VBQTJJLElBQUEsRUFBTTtRQUFqSixDQTVCeUI7UUE4QnpCLENBQUE7O1VBQUUsR0FBQSxFQUFLLENBQUUsTUFBRjtRQUFVLEtBQVYsQ0FBUDtVQUFtQyxHQUFBLEVBQUssY0FBeEM7VUFBNkQsZUFBQSxFQUFpQixJQUE5RTtVQUFvRixhQUFBLEVBQWUsSUFBbkc7VUFBeUcsTUFBQSxFQUFRLElBQWpIO1VBQXVILFVBQUEsRUFBWSxJQUFuSTtVQUF5SSxJQUFBLEVBQU07UUFBL0ksQ0E5QnlCO1FBK0J6QjtVQUFFLEdBQUEsRUFBSyxXQUFQO1VBQW1DLEdBQUEsRUFBSyxjQUF4QztVQUE2RCxlQUFBLEVBQWlCLElBQTlFO1VBQW9GLGFBQUEsRUFBZSxJQUFuRztVQUF5RyxNQUFBLEVBQVEsSUFBakg7VUFBdUgsVUFBQSxFQUFZLElBQW5JO1VBQXlJLElBQUEsRUFBTTtRQUEvSSxDQS9CeUI7UUFnQ3pCO1VBQUUsR0FBQSxFQUFLLEdBQVA7VUFBbUMsR0FBQSxFQUFLLGNBQXhDO1VBQTZELGVBQUEsRUFBaUIsSUFBOUU7VUFBb0YsYUFBQSxFQUFlLElBQW5HO1VBQXlHLE1BQUEsRUFBUSxJQUFqSDtVQUF1SCxVQUFBLEVBQVksSUFBbkk7VUFBeUksSUFBQSxFQUFNO1FBQS9JLENBaEN5Qjs7TUFtQ3hCLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULFlBQUEsVUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFRLEtBQUEscURBQUE7O1VBQ0UsSUFBRyxlQUFIO1lBQ0UsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtxQkFBRyxJQUFJLFFBQUosQ0FBYSxDQUFDLENBQUMsS0FBZjtZQUFILENBQWYsQ0FBUixFQUFrRCxDQUFDLENBQUMsS0FBcEQ7QUFDQSxxQkFGRjs7VUFHQSxLQUFBLEdBQWtCLENBQUMsQ0FBQztVQUNwQixRQUFBLEdBQWtCLGlCQUFBLENBQW9CLEtBQXBCO1VBQ2xCLE9BQUEsR0FBa0IsQ0FBRSxHQUFBLENBQUUsbUJBQUEsQ0FBb0IsS0FBcEIsQ0FBRixDQUFGO1VBQ2xCLEdBQUEsR0FBa0IsSUFBSSxRQUFKLENBQW9CLEtBQXBCO1VBQ2xCLE9BQUEsR0FBa0IsR0FBRyxDQUFDLFFBQUosQ0FBQTtVQUNsQixDQUFBLENBQUUsSUFBRixFQUNFLElBREYsRUFFRSxVQUZGLENBQUEsR0FFa0IsR0FBRyxDQUFDLFlBQUosQ0FBQSxDQUZsQjtVQUdBLElBQTBDLFNBQVUsUUFBVixTQUFnQixLQUExRDtZQUFBLElBQUEsR0FBa0IsQ0FBRSxHQUFFLElBQUosRUFBbEI7O1VBQ0EsSUFBMEMsU0FBVSxRQUFWLFNBQWdCLEtBQTFEO1lBQUEsSUFBQSxHQUFrQixDQUFFLEdBQUUsSUFBSixFQUFsQjtXQVpWOztVQWNVLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7bUJBQUc7VUFBSCxDQUFmLENBQUosRUFBcUMsQ0FBQyxDQUFDLFFBQXZDO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRztVQUFILENBQWYsQ0FBSixFQUFxQyxDQUFDLENBQUMsT0FBdkM7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHO1VBQUgsQ0FBZixDQUFKLEVBQXFDLENBQUMsQ0FBQyxPQUF2QztVQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7bUJBQUc7VUFBSCxDQUFmLENBQUosRUFBcUMsQ0FBQyxDQUFDLElBQXZDO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRztVQUFILENBQWYsQ0FBSixFQUFxQyxDQUFDLENBQUMsSUFBdkM7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHO1VBQUgsQ0FBZixDQUFKLEVBQXFDLENBQUMsQ0FBQyxVQUF2QztRQXBCRjtBQXFCQSxlQUFPO01BdEJOLENBQUE7TUF3QkEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1QsWUFBQSxlQUFBLEVBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBO1FBQVEsZUFBQSxHQUFrQjtRQUNsQixlQUFBLEdBQWtCO1FBQ2xCLEtBQUEsMERBQUE7O1VBQ0UsUUFBQSxHQUFZLElBQUksUUFBSixDQUFhLEtBQUssQ0FBQyxHQUFuQjtVQUNaLEdBQUEsR0FBWSxDQUFFLEdBQUEsQ0FBRSxtQkFBQSxDQUFvQixLQUFLLENBQUMsR0FBMUIsQ0FBRixDQUFGLENBQXlDLENBQUMsSUFBMUMsQ0FBK0MsR0FBL0M7VUFDWixJQUFBLEdBQVk7WUFBRSxHQUFBLEVBQUssS0FBSyxDQUFDLEdBQWI7WUFBa0I7VUFBbEI7VUFDWixLQUFBLGdEQUFBOztZQUNFLE1BQUEsR0FBb0IsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsSUFBaEI7WUFDcEIsSUFBSSxDQUFFLEdBQUEsQ0FBSSxJQUFKLENBQUYsQ0FBSixHQUFvQixRQUFRLENBQUMsTUFBVCxDQUFnQixJQUFoQjtZQUNwQixLQUFPLGVBQVA7Y0FDRSxJQUFHLE1BQUEsS0FBWSxLQUFLLENBQUUsR0FBQSxDQUFJLElBQUosQ0FBRixDQUFwQjtnQkFDRSxJQUFBLENBQUs7a0JBQUUsUUFBQSxFQUFVLEtBQUssQ0FBQyxHQUFsQjtrQkFBdUIsR0FBdkI7a0JBQTRCLElBQTVCO2tCQUFrQztnQkFBbEMsQ0FBTCxFQURGOztjQUVBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7dUJBQUc7Y0FBSCxDQUFmLENBQUosRUFBZ0MsS0FBSyxDQUFFLEdBQUEsQ0FBSSxJQUFKLENBQUYsQ0FBckMsRUFIRjs7VUFIRjtVQU9BLElBQUcsZUFBSDtZQUNFLElBQUEsQ0FBSyxJQUFMLEVBREY7O1FBWEY7QUFhQSxlQUFPO01BaEJOLENBQUEsSUFqSFQ7O0FBbUlNLGFBQU87SUFwSVksQ0FsS3JCOztJQXlTQSxlQUFBLEVBQWlCLFFBQUEsQ0FBQSxDQUFBO0FBQ3JCLFVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7TUFBTSxTQUFBLEdBQThCLE9BQUEsQ0FBUSxtQ0FBUjtNQUM5QixDQUFBLENBQUUsT0FBRixDQUFBLEdBQThCLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBbkIsQ0FBQSxDQUE5QjtNQUNBLENBQUEsQ0FBRSxTQUFGLEVBQ0UsU0FERixDQUFBLEdBQzhCLFNBQVMsQ0FBQyxpQkFBVixDQUFBLENBRDlCO01BUUcsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBOzs7Ozs7QUFDVCxZQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBO1FBQVEsR0FBQSxHQUFNLElBQUksU0FBSixDQUFBO1FBQ04sR0FBRyxDQUFDLElBQUosQ0FBUyxPQUFBLEdBQVUsU0FBQSxDQUFFLENBQUYsQ0FBQTtpQkFBUyxDQUFBLE1BQU0sR0FBQSxHQUFNLENBQVo7UUFBVCxDQUFuQjtRQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsT0FBQSxHQUFVLFNBQUEsQ0FBRSxDQUFGLENBQUE7aUJBQVMsQ0FBQSxNQUFNLENBQUEsR0FBSSxHQUFWO1FBQVQsQ0FBbkI7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxTQUFKLENBQWMsUUFBZDtRQUFILENBQWYsQ0FBSixFQUFnRCxVQUFoRDtBQUNBLGVBQU87TUFMTixDQUFBO01BT0EsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1QsWUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFRLEdBQUEsR0FBTSxJQUFJLFNBQUosQ0FBQTtRQUNOLEdBQUcsQ0FBQyxJQUFKLENBQVMsT0FBQSxHQUFVLFNBQUEsQ0FBRSxDQUFGLENBQUE7aUJBQVMsQ0FBQSxNQUFNLEdBQUEsR0FBTSxDQUFaO1FBQVQsQ0FBbkI7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLE9BQUEsR0FBVSxTQUFBLENBQUUsQ0FBRixDQUFBO2lCQUFTLENBQUEsTUFBTSxDQUFBLEdBQUksR0FBVjtRQUFULENBQW5CO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsSUFBSixDQUFTLFFBQVQ7UUFBSCxDQUFmLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWYsQ0FBSixFQUE0QyxDQUFFLFFBQUYsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxJQUFKLENBQVMsT0FBVDtRQUFILENBQWYsQ0FBSixFQUEyQyxJQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZixDQUFKLEVBQTRDLENBQUUsUUFBRixFQUFZLE9BQVosQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxTQUFKLENBQUE7UUFBSCxDQUFmLENBQUosRUFBNEMsVUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWYsQ0FBSixFQUE0QyxFQUE1QztlQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLEdBQUosQ0FBQTtRQUFILENBQWYsQ0FBSixFQUE0QyxFQUE1QztNQVZDLENBQUE7TUFZQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLE9BQUEsRUFBQSxRQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO1FBQVEsR0FBQSxHQUFNLElBQUksU0FBSixDQUFBO1FBQ04sR0FBRyxDQUFDLElBQUosQ0FBUyxPQUFBLEdBQVUsU0FBQSxDQUFFLENBQUYsQ0FBQTtpQkFBUyxDQUFBLE1BQU0sR0FBQSxHQUFNLENBQVo7UUFBVCxDQUFuQjtRQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsT0FBQSxHQUFVLFNBQUEsQ0FBRSxDQUFGLENBQUE7aUJBQVMsQ0FBQSxNQUFNLENBQUEsR0FBSSxHQUFWO1FBQVQsQ0FBbkI7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxJQUFKLENBQVMsUUFBVDtRQUFILENBQWYsQ0FBSixFQUE0QyxJQUE1QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZixDQUFKLEVBQTRDLENBQUUsUUFBRixDQUE1QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLElBQUosQ0FBUyxPQUFUO1FBQUgsQ0FBZixDQUFKLEVBQTJDLElBQTNDO1FBQ0EsUUFBQSxHQUFXLEdBQUcsQ0FBQyxJQUFKLENBQUE7UUFDWCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWYsQ0FBSixFQUE0QyxDQUFFLFFBQUYsRUFBWSxPQUFaLENBQTVDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxRQUFRLENBQUMsSUFBVCxDQUFBO1FBQUgsQ0FBZixDQUFKLEVBQTRDO1VBQUUsSUFBQSxFQUFNLEtBQVI7VUFBZ0IsS0FBQSxFQUFPO1FBQXZCLENBQTVDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFmLENBQUosRUFBNEMsQ0FBRSxPQUFGLENBQTVDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxRQUFRLENBQUMsSUFBVCxDQUFBO1FBQUgsQ0FBZixDQUFKLEVBQTRDO1VBQUUsSUFBQSxFQUFNLEtBQVI7VUFBZ0IsS0FBQSxFQUFPO1FBQXZCLENBQTVDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFmLENBQUosRUFBNEMsRUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFFBQVEsQ0FBQyxJQUFULENBQUE7UUFBSCxDQUFmLENBQUosRUFBNEM7VUFBRSxJQUFBLEVBQU0sSUFBUjtVQUFnQixLQUFBLEVBQU87UUFBdkIsQ0FBNUM7QUFDQSxlQUFPO01BZE4sQ0FBQTtNQWdCQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLE9BQUEsRUFBQSxRQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFRLEdBQUEsR0FBTSxJQUFJLFNBQUosQ0FBQTtRQUNOLEdBQUcsQ0FBQyxJQUFKLENBQVMsT0FBQSxHQUFVLFNBQUEsQ0FBRSxDQUFGLENBQUE7aUJBQVMsQ0FBQSxNQUFNLEdBQUEsR0FBTSxDQUFaO1FBQVQsQ0FBbkI7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLE9BQUEsR0FBVSxTQUFBLENBQUUsQ0FBRixDQUFBO2lCQUFTLENBQUEsTUFBTSxDQUFBLEdBQUksR0FBVjtRQUFULENBQW5CO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsSUFBSixDQUFTLFFBQVQ7UUFBSCxDQUFmLENBQUosRUFBNEMsSUFBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWYsQ0FBSixFQUE0QyxDQUFFLFFBQUYsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxJQUFKLENBQVMsT0FBVDtRQUFILENBQWYsQ0FBSixFQUEyQyxJQUEzQztRQUNBLFFBQUEsR0FBVyxHQUFHLENBQUMsSUFBSixDQUFTLE9BQVQsRUFBa0IsUUFBbEI7UUFDWCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWYsQ0FBSixFQUE0QyxDQUFFLFFBQUYsRUFBWSxPQUFaLEVBQXFCLE9BQXJCLEVBQThCLFFBQTlCLENBQTVDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxRQUFRLENBQUMsSUFBVCxDQUFBO1FBQUgsQ0FBZixDQUFKLEVBQTRDO1VBQUUsSUFBQSxFQUFNLEtBQVI7VUFBZ0IsS0FBQSxFQUFPO1FBQXZCLENBQTVDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFmLENBQUosRUFBNEMsQ0FBRSxPQUFGLEVBQVcsT0FBWCxFQUFvQixRQUFwQixDQUE1QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsUUFBUSxDQUFDLElBQVQsQ0FBQTtRQUFILENBQWYsQ0FBSixFQUE0QztVQUFFLElBQUEsRUFBTSxLQUFSO1VBQWdCLEtBQUEsRUFBTztRQUF2QixDQUE1QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZixDQUFKLEVBQTRDLENBQUUsT0FBRixFQUFXLFFBQVgsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFFBQVEsQ0FBQyxJQUFULENBQUE7UUFBSCxDQUFmLENBQUosRUFBNEM7VUFBRSxJQUFBLEVBQU0sS0FBUjtVQUFnQixLQUFBLEVBQU87UUFBdkIsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWYsQ0FBSixFQUE0QyxDQUFFLFFBQUYsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFFBQVEsQ0FBQyxJQUFULENBQUE7UUFBSCxDQUFmLENBQUosRUFBNEM7VUFBRSxJQUFBLEVBQU0sS0FBUjtVQUFnQixLQUFBLEVBQU87UUFBdkIsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQztRQUFQLENBQWYsQ0FBSixFQUE0QyxFQUE1QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsUUFBUSxDQUFDLElBQVQsQ0FBQTtRQUFILENBQWYsQ0FBSixFQUE0QztVQUFFLElBQUEsRUFBTSxJQUFSO1VBQWdCLEtBQUEsRUFBTztRQUF2QixDQUE1QztBQUNBLGVBQU87TUFsQk4sQ0FBQSxJQTdDVDs7QUFpRU0sYUFBTztJQWxFUSxDQXpTakI7O0lBOFdBLG9CQUFBLEVBQXNCLFFBQUEsQ0FBQSxDQUFBO0FBQzFCLFVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7TUFBTSxTQUFBLEdBQThCLE9BQUEsQ0FBUSxtQ0FBUjtNQUM5QixDQUFBLENBQUUsT0FBRixDQUFBLEdBQThCLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBbkIsQ0FBQSxDQUE5QjtNQUNBLENBQUEsQ0FBRSxTQUFGLEVBQ0UsU0FERixDQUFBLEdBQzhCLFNBQVMsQ0FBQyxpQkFBVixDQUFBLENBRDlCO01BUUcsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBOzs7Ozs7QUFDVCxZQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7UUFBUSxLQUFBLEdBQVEsTUFBQSxDQUFPLE9BQVA7UUFDUixJQUFBLEdBQVEsTUFBQSxDQUFPLE1BQVA7UUFDUixHQUFBLEdBQU0sSUFBSSxTQUFKLENBQUE7UUFDTixHQUFHLENBQUMsSUFBSixDQUFTLFNBQUEsQ0FBRSxDQUFGLENBQUE7aUJBQVMsQ0FBQSxNQUFNLENBQUEsQ0FBQSxDQUFBLENBQUksQ0FBSixDQUFBLENBQUEsQ0FBTjtRQUFULENBQVQ7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLFFBQVQsRUFBbUIsT0FBQSxHQUFVLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFDM0IsSUFBaUMsQ0FBQSxLQUFLLEtBQXRDO0FBQUEsbUJBQU8sQ0FBQSxPQUFXLENBQUUsQ0FBRixFQUFLLEdBQUwsQ0FBWCxFQUFQOztpQkFDQSxDQUFBLE1BQU0sU0FBTjtRQUYyQixDQUE3QjtRQUdBLEdBQUcsQ0FBQyxJQUFKLENBQVMsT0FBVCxFQUFrQixNQUFBLEdBQVMsU0FBQSxDQUFFLENBQUYsQ0FBQTtVQUN6QixJQUFpQyxDQUFBLEtBQUssSUFBdEM7QUFBQSxtQkFBTyxDQUFBLE9BQVcsQ0FBRSxHQUFGLEVBQU8sQ0FBUCxDQUFYLEVBQVA7O2lCQUNBLENBQUEsTUFBTSxTQUFOO1FBRnlCLENBQTNCLEVBUFI7O1FBV1EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsR0FBSixDQUFRLEtBQVIsRUFBZSxlQUFmLEVBQWdDLElBQWhDO1FBQUgsQ0FBZixDQUFKLEVBQThELENBQUUsR0FBRixFQUFPLGlCQUFQLEVBQTBCLEdBQTFCLENBQTlEO0FBQ0EsZUFBTztNQWJOLENBQUE7TUFlQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7UUFBUSxLQUFBLEdBQVEsTUFBQSxDQUFPLE9BQVA7UUFDUixJQUFBLEdBQVEsTUFBQSxDQUFPLE1BQVA7UUFDUixHQUFBLEdBQVEsSUFBSSxTQUFKLENBQUE7UUFDUixHQUFHLENBQUMsSUFBSixDQUFTLFNBQUEsQ0FBRSxDQUFGLENBQUE7aUJBQVMsQ0FBQSxNQUFNLENBQUEsQ0FBQSxDQUFBLENBQUksQ0FBSixDQUFBLENBQUEsQ0FBTjtRQUFULENBQVQ7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLFFBQVQsRUFBbUIsT0FBQSxHQUFVLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxPQUFXLENBQUUsQ0FBRixFQUFLLEdBQUw7aUJBQWE7UUFBakMsQ0FBN0I7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLE9BQVQsRUFBbUIsTUFBQSxHQUFVLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxPQUFXLENBQUUsR0FBRixFQUFPLENBQVA7aUJBQWE7UUFBakMsQ0FBN0IsRUFMUjs7UUFPUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFKLENBQVEsS0FBUixFQUFlLGVBQWYsRUFBZ0MsSUFBaEM7UUFBSCxDQUFmLENBQUosRUFBOEQsQ0FBRSxHQUFGLEVBQU8saUJBQVAsRUFBMEIsR0FBMUIsQ0FBOUQ7QUFDQSxlQUFPO01BVE4sQ0FBQTtNQVdBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULFlBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtRQUFRLEtBQUEsR0FBUSxNQUFBLENBQU8sT0FBUDtRQUNSLElBQUEsR0FBUSxNQUFBLENBQU8sTUFBUDtRQUNSLEdBQUEsR0FBUSxJQUFJLFNBQUosQ0FBYztVQUFFLE1BQUEsRUFBUTtRQUFWLENBQWQ7UUFDUixHQUFHLENBQUMsSUFBSixDQUFTLFNBQUEsQ0FBRSxDQUFGLENBQUE7aUJBQVMsQ0FBQSxNQUFNLENBQUEsQ0FBQSxDQUFBLENBQUksQ0FBSixDQUFBLENBQUEsQ0FBTjtRQUFULENBQVQ7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLFFBQVQsRUFBbUIsT0FBQSxHQUFVLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxPQUFXLENBQUUsQ0FBRixFQUFLLEdBQUw7aUJBQWE7UUFBakMsQ0FBN0I7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLE9BQVQsRUFBbUIsTUFBQSxHQUFVLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxPQUFXLENBQUUsR0FBRixFQUFPLENBQVA7aUJBQWE7UUFBakMsQ0FBN0IsRUFMUjs7UUFPUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFKLENBQVEsS0FBUixFQUFlLGVBQWYsRUFBZ0MsSUFBaEM7UUFBSCxDQUFmLENBQUosRUFBOEQsQ0FBRSxLQUFGLEVBQVMsR0FBVCxFQUFjLGlCQUFkLEVBQWlDLEdBQWpDLEVBQXNDLElBQXRDLENBQTlEO0FBQ0EsZUFBTztNQVROLENBQUE7TUFXQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7UUFBUSxLQUFBLEdBQVEsTUFBQSxDQUFPLE9BQVA7UUFDUixJQUFBLEdBQVEsTUFBQSxDQUFPLE1BQVA7UUFDUixHQUFBLEdBQVEsSUFBSSxTQUFKLENBQWM7VUFBRSxNQUFBLEVBQVE7UUFBVixDQUFkO1FBQ1IsR0FBRyxDQUFDLElBQUosQ0FBUyxTQUFBLENBQUUsQ0FBRixDQUFBO2lCQUFTLENBQUEsTUFBTSxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUosQ0FBQSxDQUFBLENBQU47UUFBVCxDQUFUO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxRQUFULEVBQW1CLE9BQUEsR0FBVSxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsT0FBVyxDQUFFLENBQUYsRUFBSyxHQUFMO2lCQUFhO1FBQWpDLENBQTdCO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxPQUFULEVBQW1CLE1BQUEsR0FBVSxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsT0FBVyxDQUFFLEdBQUYsRUFBTyxDQUFQO2lCQUFhO1FBQWpDLENBQTdCLEVBTFI7O1FBT1EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsR0FBSixDQUFRLEtBQVIsRUFBZSxlQUFmLEVBQWdDLElBQWhDO1FBQUgsQ0FBZixDQUFKLEVBQThELENBQUUsS0FBRixFQUFTLEdBQVQsRUFBYyxpQkFBZCxFQUFpQyxHQUFqQyxFQUFzQyxJQUF0QyxDQUE5RDtBQUNBLGVBQU87TUFUTixDQUFBO01BV0EsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1QsWUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBO1FBQVEsS0FBQSxHQUFRLE1BQUEsQ0FBTyxPQUFQO1FBQ1IsSUFBQSxHQUFRLE1BQUEsQ0FBTyxNQUFQO1FBQ1IsR0FBQSxHQUFRLElBQUksU0FBSixDQUFBO1FBQ1IsR0FBRyxDQUFDLElBQUosQ0FBUyxTQUFBLENBQUUsQ0FBRixDQUFBO2lCQUFTLENBQUEsTUFBTSxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUosQ0FBQSxDQUFBLENBQU47UUFBVCxDQUFUO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxRQUFULEVBQW1CLE9BQUEsR0FBVSxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsT0FBVyxDQUFFLENBQUYsRUFBSyxHQUFMO2lCQUFhO1FBQWpDLENBQTdCO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxPQUFULEVBQW1CLE1BQUEsR0FBVSxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsT0FBVyxDQUFFLEdBQUYsRUFBTyxDQUFQO2lCQUFhO1FBQWpDLENBQTdCO1FBQ0EsR0FBRyxDQUFDLFNBQUosQ0FBYztVQUFFLE1BQUEsRUFBUTtRQUFWLENBQWQsRUFOUjs7UUFRUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFKLENBQVEsS0FBUixFQUFlLGVBQWYsRUFBZ0MsSUFBaEM7UUFBSCxDQUFmLENBQUosRUFBOEQsQ0FBRSxLQUFGLEVBQVMsR0FBVCxFQUFjLGlCQUFkLEVBQWlDLEdBQWpDLEVBQXNDLElBQXRDLENBQTlEO0FBQ0EsZUFBTztNQVZOLENBQUE7TUFZQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7UUFBUSxLQUFBLEdBQVEsTUFBQSxDQUFPLE9BQVA7UUFDUixJQUFBLEdBQVEsTUFBQSxDQUFPLE1BQVA7UUFDUixHQUFBLEdBQVEsSUFBSSxTQUFKLENBQUE7UUFDUixHQUFHLENBQUMsSUFBSixDQUFTLFNBQUEsQ0FBRSxDQUFGLENBQUE7aUJBQVMsQ0FBQSxNQUFNLENBQUEsQ0FBQSxDQUFBLENBQUksQ0FBSixDQUFBLENBQUEsQ0FBTjtRQUFULENBQVQ7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLFFBQVQsRUFBbUIsT0FBQSxHQUFVLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxPQUFXLENBQUUsQ0FBRixFQUFLLEdBQUw7aUJBQWE7UUFBakMsQ0FBN0I7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLE9BQVQsRUFBbUIsTUFBQSxHQUFVLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxPQUFXLENBQUUsR0FBRixFQUFPLENBQVA7aUJBQWE7UUFBakMsQ0FBN0I7UUFDQSxHQUFHLENBQUMsU0FBSixDQUFjO1VBQUUsSUFBQSxFQUFNO1FBQVIsQ0FBZCxFQU5SOztRQVFRLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLEdBQUosQ0FBUSxLQUFSLEVBQWUsZUFBZixFQUFnQyxJQUFoQztRQUFILENBQWYsQ0FBSixFQUE4RCxHQUE5RDtBQUNBLGVBQU87TUFWTixDQUFBO01BWUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1QsWUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBO1FBQVEsS0FBQSxHQUFRLE1BQUEsQ0FBTyxPQUFQO1FBQ1IsSUFBQSxHQUFRLE1BQUEsQ0FBTyxNQUFQO1FBQ1IsR0FBQSxHQUFRLElBQUksU0FBSixDQUFBO1FBQ1IsR0FBRyxDQUFDLElBQUosQ0FBUyxTQUFBLENBQUUsQ0FBRixDQUFBO2lCQUFTLENBQUEsTUFBTSxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUosQ0FBQSxDQUFBLENBQU47UUFBVCxDQUFUO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxRQUFULEVBQW1CLE9BQUEsR0FBVSxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsT0FBVyxDQUFFLENBQUYsRUFBSyxHQUFMO2lCQUFhO1FBQWpDLENBQTdCO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxPQUFULEVBQW1CLE1BQUEsR0FBVSxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsT0FBVyxDQUFFLEdBQUYsRUFBTyxDQUFQO2lCQUFhO1FBQWpDLENBQTdCO1FBQ0EsR0FBRyxDQUFDLFNBQUosQ0FBYztVQUFFLE1BQUEsRUFBUSxVQUFWO1VBQXNCLElBQUEsRUFBTTtRQUE1QixDQUFkLEVBTlI7O1FBUVEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsR0FBSixDQUFRLEtBQVIsRUFBZSxlQUFmLEVBQWdDLElBQWhDO1FBQUgsQ0FBZixDQUFKLEVBQThELEtBQTlEO0FBQ0EsZUFBTztNQVZOLENBQUE7TUFZQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsVUFBQSxFQUFBO1FBQVEsS0FBQSxHQUFRLE1BQUEsQ0FBTyxPQUFQO1FBQ1IsSUFBQSxHQUFRLE1BQUEsQ0FBTyxNQUFQO1FBQ1IsR0FBQSxHQUFRLElBQUksU0FBSixDQUFBO1FBQ1IsR0FBRyxDQUFDLElBQUosQ0FBUyxTQUFBLENBQUUsQ0FBRixDQUFBO2lCQUFTLENBQUEsTUFBTSxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUosQ0FBQSxDQUFBLENBQU47UUFBVCxDQUFUO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxRQUFULEVBQW1CLE9BQUEsR0FBVSxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsT0FBVyxDQUFFLENBQUYsRUFBSyxHQUFMO2lCQUFhO1FBQWpDLENBQTdCO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxPQUFULEVBQW1CLE1BQUEsR0FBVSxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsT0FBVyxDQUFFLEdBQUYsRUFBTyxDQUFQO2lCQUFhO1FBQWpDLENBQTdCO1FBQ0EsR0FBRyxDQUFDLFNBQUosQ0FBYztVQUFFLElBQUEsRUFBTTtRQUFSLENBQWQsRUFOUjs7UUFRUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFBWCxDQUFmLENBQUosRUFBK0QsTUFBL0Q7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFKLENBQVEsS0FBUixFQUFlLGVBQWYsRUFBZ0MsSUFBaEM7UUFBSCxDQUFmLENBQUosRUFBK0QsR0FBL0Q7QUFDQSxlQUFPO01BWE4sQ0FBQTtNQWFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULFlBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtRQUFRLEtBQUEsR0FBUSxNQUFBLENBQU8sT0FBUDtRQUNSLElBQUEsR0FBUSxNQUFBLENBQU8sTUFBUDtRQUNSLEdBQUEsR0FBUSxJQUFJLFNBQUosQ0FBYztVQUFFLElBQUEsRUFBTTtRQUFSLENBQWQ7UUFDUixHQUFHLENBQUMsSUFBSixDQUFTLFNBQUEsQ0FBRSxDQUFGLENBQUE7aUJBQVMsQ0FBQSxNQUFNLENBQUEsQ0FBQSxDQUFBLENBQUksQ0FBSixDQUFBLENBQUEsQ0FBTjtRQUFULENBQVQ7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLFFBQVQsRUFBbUIsT0FBQSxHQUFVLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxPQUFXLENBQUUsQ0FBRixFQUFLLEdBQUw7aUJBQWE7UUFBakMsQ0FBN0I7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLE9BQVQsRUFBbUIsTUFBQSxHQUFVLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxPQUFXLENBQUUsR0FBRixFQUFPLENBQVA7aUJBQWE7UUFBakMsQ0FBN0IsRUFMUjs7UUFPUSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFKLENBQUE7UUFBSCxDQUFmLENBQVIsRUFBdUMsWUFBdkM7QUFDQSxlQUFPO01BVE4sQ0FBQTtNQVdBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULFlBQUEsUUFBQSxFQUFBLEdBQUEsRUFBQTtRQUFRLFFBQUEsR0FBWSxNQUFBLENBQU8sVUFBUDtRQUNaLEdBQUEsR0FBWSxJQUFJLFNBQUosQ0FBYztVQUFFLElBQUEsRUFBTSxPQUFSO1VBQWlCO1FBQWpCLENBQWQ7UUFDWixHQUFHLENBQUMsSUFBSixDQUFTLFNBQUEsQ0FBRSxDQUFGLENBQUE7aUJBQVMsQ0FBQSxNQUFNLENBQUEsQ0FBQSxDQUFBLENBQUksQ0FBSixDQUFBLENBQUEsQ0FBTjtRQUFULENBQVQ7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxPQUFXLENBQUUsQ0FBRixFQUFLLEdBQUw7aUJBQWE7UUFBakMsQ0FBVDtRQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsU0FBQSxDQUFFLENBQUYsQ0FBQTtVQUFTLE9BQVcsQ0FBRSxHQUFGLEVBQU8sQ0FBUDtpQkFBYTtRQUFqQyxDQUFULEVBSlI7O1FBTVEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsR0FBSixDQUFBO1FBQUgsQ0FBZixDQUFKLEVBQW1DLFFBQW5DO0FBQ0EsZUFBTztNQVJOLENBQUE7TUFVQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLFFBQUEsRUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO1FBQVEsUUFBQSxHQUFZLE1BQUEsQ0FBTyxVQUFQO1FBQ1osR0FBQSxHQUFZLElBQUksU0FBSixDQUFjO1VBQUUsSUFBQSxFQUFNLE9BQVI7VUFBaUI7UUFBakIsQ0FBZDtRQUNaLFFBQUEsR0FBWTtRQUNaLEdBQUcsQ0FBQyxJQUFKLENBQVMsQ0FBQSxHQUFJLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxRQUFRLENBQUMsSUFBVCxDQUFjLENBQUEsQ0FBQSxDQUFBLENBQUksQ0FBSixDQUFBLENBQWQ7aUJBQXVCLENBQUEsTUFBTSxDQUFBLEdBQUksQ0FBVjtRQUFoQyxDQUFiO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxDQUFBLEdBQUksU0FBQSxDQUFFLENBQUYsQ0FBQTtVQUFTLFFBQVEsQ0FBQyxJQUFULENBQWMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxDQUFKLENBQUEsQ0FBZDtpQkFBdUIsQ0FBQSxNQUFNLENBQUEsR0FBSSxDQUFWO1FBQWhDLENBQWI7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLENBQUEsR0FBSSxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsUUFBUSxDQUFDLElBQVQsQ0FBYyxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUosQ0FBQSxDQUFkO2lCQUF1QixDQUFBLE1BQU0sQ0FBQSxHQUFJLENBQVY7UUFBaEMsQ0FBYixFQUxSOztRQU9RLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBRSxHQUFBLENBQUUsR0FBRyxDQUFDLElBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsQ0FBRixDQUFGO1FBQUgsQ0FBZixDQUFKLEVBQXVFLENBQUUsRUFBRixDQUF2RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7QUFBRSxjQUFBO1VBQUMsQ0FBQSxHQUFJLFFBQVEsQ0FBQyxJQUFULENBQWMsR0FBZDtVQUFtQixRQUFRLENBQUMsTUFBVCxHQUFrQjtpQkFBRztRQUEvQyxDQUFmLENBQUosRUFBdUUsOEJBQXZFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsR0FBSixDQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZDtRQUFILENBQWYsQ0FBSixFQUF1RSxFQUF2RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7QUFBRSxjQUFBO1VBQUMsQ0FBQSxHQUFJLFFBQVEsQ0FBQyxJQUFULENBQWMsR0FBZDtVQUFtQixRQUFRLENBQUMsTUFBVCxHQUFrQjtpQkFBRztRQUEvQyxDQUFmLENBQUosRUFBdUUsOEJBQXZFO0FBQ0EsZUFBTztNQVpOLENBQUE7TUFjQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLFFBQUEsRUFBQSxTQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFRLFFBQUEsR0FBWSxNQUFBLENBQU8sVUFBUDtRQUNaLEdBQUEsR0FBWSxJQUFJLFNBQUosQ0FBYztVQUFFLElBQUEsRUFBTSxNQUFSO1VBQWdCO1FBQWhCLENBQWQ7UUFDWixRQUFBLEdBQVk7UUFDWixHQUFHLENBQUMsSUFBSixDQUFTLENBQUEsR0FBSSxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsUUFBUSxDQUFDLElBQVQsQ0FBYyxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUosQ0FBQSxDQUFkO2lCQUF1QixDQUFBLE1BQU0sQ0FBQSxHQUFJLENBQVY7UUFBaEMsQ0FBYjtRQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsQ0FBQSxHQUFJLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxRQUFRLENBQUMsSUFBVCxDQUFjLENBQUEsQ0FBQSxDQUFBLENBQUksQ0FBSixDQUFBLENBQWQ7aUJBQXVCLENBQUEsTUFBTSxDQUFBLEdBQUksQ0FBVjtRQUFoQyxDQUFiO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxDQUFBLEdBQUksU0FBQSxDQUFFLENBQUYsQ0FBQTtVQUFTLFFBQVEsQ0FBQyxJQUFULENBQWMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxDQUFKLENBQUEsQ0FBZDtpQkFBdUIsQ0FBQSxNQUFNLENBQUEsR0FBSSxDQUFWO1FBQWhDLENBQWIsRUFMUjs7UUFPUSxHQUFHLENBQUMsSUFBSixDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZjtRQUNBLFNBQUEsR0FBWSxHQUFHLENBQUMsSUFBSixDQUFBO1FBQ1osSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFTLENBQUMsSUFBVixDQUFBO1FBQUgsQ0FBZixDQUFKLEVBQXlFO1VBQUUsS0FBQSxFQUFPLEVBQVQ7VUFBYSxJQUFBLEVBQU07UUFBbkIsQ0FBekU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTtVQUFDLENBQUEsR0FBSSxRQUFRLENBQUMsSUFBVCxDQUFjLEdBQWQ7VUFBbUIsUUFBUSxDQUFDLE1BQVQsR0FBa0I7aUJBQUc7UUFBL0MsQ0FBZixDQUFKLEVBQXlFLDhCQUF6RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBZixDQUFKLEVBQXlFLEVBQXpFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFTLENBQUMsSUFBVixDQUFBO1FBQUgsQ0FBZixDQUFKLEVBQXlFO1VBQUUsS0FBQSxFQUFPLElBQVQ7VUFBZSxJQUFBLEVBQU07UUFBckIsQ0FBekU7QUFDQSxlQUFPO01BZE4sQ0FBQTtNQWdCQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLFFBQUEsRUFBQSxTQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO1FBQVEsUUFBQSxHQUFZLE1BQUEsQ0FBTyxVQUFQO1FBQ1osR0FBQSxHQUFZLElBQUksU0FBSixDQUFjO1VBQUUsSUFBQSxFQUFNLE9BQVI7VUFBaUI7UUFBakIsQ0FBZDtRQUNaLFFBQUEsR0FBWTtRQUNaLEdBQUcsQ0FBQyxJQUFKLENBQVMsQ0FBQSxHQUFJLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxRQUFRLENBQUMsSUFBVCxDQUFjLENBQUEsQ0FBQSxDQUFBLENBQUksQ0FBSixDQUFBLENBQWQ7aUJBQXVCLENBQUEsTUFBTSxDQUFBLEdBQUksQ0FBVjtRQUFoQyxDQUFiO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxDQUFBLEdBQUksU0FBQSxDQUFFLENBQUYsQ0FBQTtVQUFTLFFBQVEsQ0FBQyxJQUFULENBQWMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxDQUFKLENBQUEsQ0FBZDtpQkFBdUIsQ0FBQSxNQUFNLENBQUEsR0FBSSxDQUFWO1FBQWhDLENBQWI7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLENBQUEsR0FBSSxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsUUFBUSxDQUFDLElBQVQsQ0FBYyxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUosQ0FBQSxDQUFkO2lCQUF1QixDQUFBLE1BQU0sQ0FBQSxHQUFJLENBQVY7UUFBaEMsQ0FBYixFQUxSOztRQU9RLEdBQUcsQ0FBQyxJQUFKLENBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLEVBUFI7O1FBU1EsU0FBQSxHQUFZLEdBQUcsQ0FBQyxJQUFKLENBQUE7UUFDWixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQVMsQ0FBQyxJQUFWLENBQUE7UUFBSCxDQUFmLENBQUosRUFBeUU7VUFBRSxLQUFBLEVBQU8sRUFBVDtVQUFhLElBQUEsRUFBTTtRQUFuQixDQUF6RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7QUFBRSxjQUFBO1VBQUMsQ0FBQSxHQUFJLFFBQVEsQ0FBQyxJQUFULENBQWMsR0FBZDtVQUFtQixRQUFRLENBQUMsTUFBVCxHQUFrQjtpQkFBRztRQUEvQyxDQUFmLENBQUosRUFBeUUsVUFBekU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQVMsQ0FBQyxJQUFWLENBQUE7UUFBSCxDQUFmLENBQUosRUFBeUU7VUFBRSxLQUFBLEVBQU8sSUFBVDtVQUFlLElBQUEsRUFBTTtRQUFyQixDQUF6RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7QUFBRSxjQUFBO1VBQUMsQ0FBQSxHQUFJLFFBQVEsQ0FBQyxJQUFULENBQWMsR0FBZDtVQUFtQixRQUFRLENBQUMsTUFBVCxHQUFrQjtpQkFBRztRQUEvQyxDQUFmLENBQUosRUFBeUUscUJBQXpFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFTLENBQUMsSUFBVixDQUFBO1FBQUgsQ0FBZixDQUFKLEVBQXlFO1VBQUUsS0FBQSxFQUFPLE1BQVQ7VUFBb0IsSUFBQSxFQUFNO1FBQTFCLENBQXpFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtBQUFFLGNBQUE7VUFBQyxDQUFBLEdBQUksUUFBUSxDQUFDLElBQVQsQ0FBYyxHQUFkO1VBQW1CLFFBQVEsQ0FBQyxNQUFULEdBQWtCO2lCQUFHO1FBQS9DLENBQWYsQ0FBSixFQUF5RSxFQUF6RTtBQUNBLGVBQU87TUFqQk4sQ0FBQTtNQW1CQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxRQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7UUFBUSxHQUFBLEdBQVksSUFBSSxTQUFKLENBQWM7VUFBRSxJQUFBLEVBQU07UUFBUixDQUFkO1FBQ1osUUFBQSxHQUFZO1FBQ1osR0FBRyxDQUFDLElBQUosQ0FBUyxDQUFBLEdBQUksU0FBQSxDQUFFLENBQUYsQ0FBQTtVQUFTLFFBQVEsQ0FBQyxJQUFULENBQWMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxDQUFKLENBQUEsQ0FBZDtpQkFBdUIsQ0FBQSxNQUFNLENBQUEsR0FBSSxDQUFWO1FBQWhDLENBQWI7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLENBQUEsR0FBSSxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsUUFBUSxDQUFDLElBQVQsQ0FBYyxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUosQ0FBQSxDQUFkO2lCQUF1QixDQUFBLE1BQU0sQ0FBQSxHQUFJLENBQVY7UUFBaEMsQ0FBYjtRQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsQ0FBQSxHQUFJLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxRQUFRLENBQUMsSUFBVCxDQUFjLENBQUEsQ0FBQSxDQUFBLENBQUksQ0FBSixDQUFBLENBQWQ7aUJBQXVCLENBQUEsTUFBTSxDQUFBLEdBQUksQ0FBVjtRQUFoQyxDQUFiLEVBSlI7O1FBTVEsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFFLEdBQUEsQ0FBRSxHQUFHLENBQUMsSUFBSixDQUFBLENBQUYsQ0FBRjtRQUFILENBQWYsQ0FBUixFQUE2RSxFQUE3RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7QUFBRSxjQUFBO1VBQUMsQ0FBQSxHQUFJLFFBQVEsQ0FBQyxJQUFULENBQWMsR0FBZDtVQUFtQixRQUFRLENBQUMsTUFBVCxHQUFrQjtpQkFBRztRQUEvQyxDQUFmLENBQVIsRUFBNkUsRUFBN0U7UUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFKLENBQUE7UUFBSCxDQUFmLENBQVIsRUFBNkUsWUFBN0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTtVQUFDLENBQUEsR0FBSSxRQUFRLENBQUMsSUFBVCxDQUFjLEdBQWQ7VUFBbUIsUUFBUSxDQUFDLE1BQVQsR0FBa0I7aUJBQUc7UUFBL0MsQ0FBZixDQUFSLEVBQTZFLEVBQTdFO0FBQ0EsZUFBTztNQVhOLENBQUE7TUFhQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxRQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7UUFBUSxHQUFBLEdBQVksSUFBSSxTQUFKLENBQWM7VUFBRSxJQUFBLEVBQU07UUFBUixDQUFkO1FBQ1osUUFBQSxHQUFZO1FBQ1osR0FBRyxDQUFDLElBQUosQ0FBUyxDQUFBLEdBQUksU0FBQSxDQUFFLENBQUYsQ0FBQTtVQUFTLFFBQVEsQ0FBQyxJQUFULENBQWMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxDQUFKLENBQUEsQ0FBZDtpQkFBdUIsQ0FBQSxNQUFNLENBQUEsR0FBSSxDQUFWO1FBQWhDLENBQWI7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLENBQUEsR0FBSSxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsUUFBUSxDQUFDLElBQVQsQ0FBYyxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUosQ0FBQSxDQUFkO2lCQUF1QixDQUFBLE1BQU0sQ0FBQSxHQUFJLENBQVY7UUFBaEMsQ0FBYjtRQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsQ0FBQSxHQUFJLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxRQUFRLENBQUMsSUFBVCxDQUFjLENBQUEsQ0FBQSxDQUFBLENBQUksQ0FBSixDQUFBLENBQWQ7aUJBQXVCLENBQUEsTUFBTSxDQUFBLEdBQUksQ0FBVjtRQUFoQyxDQUFiLEVBSlI7O1FBTVEsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFFLEdBQUEsQ0FBRSxHQUFHLENBQUMsSUFBSixDQUFBLENBQUYsQ0FBRjtRQUFILENBQWYsQ0FBUixFQUE2RSxFQUE3RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7QUFBRSxjQUFBO1VBQUMsQ0FBQSxHQUFJLFFBQVEsQ0FBQyxJQUFULENBQWMsR0FBZDtVQUFtQixRQUFRLENBQUMsTUFBVCxHQUFrQjtpQkFBRztRQUEvQyxDQUFmLENBQVIsRUFBNkUsRUFBN0U7UUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFKLENBQUE7UUFBSCxDQUFmLENBQVIsRUFBNkUsWUFBN0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTtVQUFDLENBQUEsR0FBSSxRQUFRLENBQUMsSUFBVCxDQUFjLEdBQWQ7VUFBbUIsUUFBUSxDQUFDLE1BQVQsR0FBa0I7aUJBQUc7UUFBL0MsQ0FBZixDQUFSLEVBQTZFLEVBQTdFO0FBQ0EsZUFBTztNQVhOLENBQUE7TUFhQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLFFBQUEsRUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO1FBQVEsUUFBQSxHQUFZLE1BQUEsQ0FBTyxVQUFQO1FBQ1osR0FBQSxHQUFZLElBQUksU0FBSixDQUFjO1VBQUUsSUFBQSxFQUFNLE9BQVI7VUFBaUI7UUFBakIsQ0FBZDtRQUNaLFFBQUEsR0FBWSxHQUZwQjs7UUFJUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUUsR0FBQSxDQUFFLEdBQUcsQ0FBQyxJQUFKLENBQUEsQ0FBRixDQUFGO1FBQUgsQ0FBZixDQUFKLEVBQTZFLEVBQTdFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtBQUFFLGNBQUE7VUFBQyxDQUFBLEdBQUksUUFBUSxDQUFDLElBQVQsQ0FBYyxHQUFkO1VBQW1CLFFBQVEsQ0FBQyxNQUFULEdBQWtCO2lCQUFHO1FBQS9DLENBQWYsQ0FBSixFQUE2RSxFQUE3RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLEdBQUosQ0FBQTtRQUFILENBQWYsQ0FBSixFQUE2RSxRQUE3RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7QUFBRSxjQUFBO1VBQUMsQ0FBQSxHQUFJLFFBQVEsQ0FBQyxJQUFULENBQWMsR0FBZDtVQUFtQixRQUFRLENBQUMsTUFBVCxHQUFrQjtpQkFBRztRQUEvQyxDQUFmLENBQUosRUFBNkUsRUFBN0U7QUFDQSxlQUFPO01BVE4sQ0FBQTtNQVdBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULFlBQUEsUUFBQSxFQUFBLEdBQUEsRUFBQSxRQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7UUFBUSxRQUFBLEdBQVksTUFBQSxDQUFPLFVBQVA7UUFDWixHQUFBLEdBQVksSUFBSSxTQUFKLENBQWM7VUFBRSxJQUFBLEVBQU0sT0FBUjtVQUFpQjtRQUFqQixDQUFkO1FBQ1osUUFBQSxHQUFZLEdBRnBCOztRQUlRLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBRSxHQUFBLENBQUUsR0FBRyxDQUFDLElBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsQ0FBRixDQUFGO1FBQUgsQ0FBZixDQUFKLEVBQTZFLENBQUUsQ0FBRixDQUE3RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7QUFBRSxjQUFBO1VBQUMsQ0FBQSxHQUFJLFFBQVEsQ0FBQyxJQUFULENBQWMsR0FBZDtVQUFtQixRQUFRLENBQUMsTUFBVCxHQUFrQjtpQkFBRztRQUEvQyxDQUFmLENBQUosRUFBNkUsRUFBN0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFKLENBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkO1FBQUgsQ0FBZixDQUFKLEVBQTZFLENBQTdFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtBQUFFLGNBQUE7VUFBQyxDQUFBLEdBQUksUUFBUSxDQUFDLElBQVQsQ0FBYyxHQUFkO1VBQW1CLFFBQVEsQ0FBQyxNQUFULEdBQWtCO2lCQUFHO1FBQS9DLENBQWYsQ0FBSixFQUE2RSxFQUE3RTtBQUNBLGVBQU87TUFUTixDQUFBO01BV0EsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1QsWUFBQSxRQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFRLFFBQUEsR0FBWSxNQUFBLENBQU8sVUFBUDtRQUNaLEdBQUEsR0FBWSxJQUFJLFNBQUosQ0FBYztVQUFFLElBQUEsRUFBTSxNQUFSO1VBQWdCO1FBQWhCLENBQWQ7UUFDWixRQUFBLEdBQVksR0FGcEI7O1FBSVEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFFLEdBQUEsQ0FBRSxHQUFHLENBQUMsSUFBSixDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixDQUFGLENBQUY7UUFBSCxDQUFmLENBQUosRUFBNkUsQ0FBRSxDQUFGLENBQTdFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtBQUFFLGNBQUE7VUFBQyxDQUFBLEdBQUksUUFBUSxDQUFDLElBQVQsQ0FBYyxHQUFkO1VBQW1CLFFBQVEsQ0FBQyxNQUFULEdBQWtCO2lCQUFHO1FBQS9DLENBQWYsQ0FBSixFQUE2RSxFQUE3RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLEdBQUosQ0FBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQ7UUFBSCxDQUFmLENBQUosRUFBNkUsQ0FBN0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTtVQUFDLENBQUEsR0FBSSxRQUFRLENBQUMsSUFBVCxDQUFjLEdBQWQ7VUFBbUIsUUFBUSxDQUFDLE1BQVQsR0FBa0I7aUJBQUc7UUFBL0MsQ0FBZixDQUFKLEVBQTZFLEVBQTdFO0FBQ0EsZUFBTztNQVROLENBQUEsSUFqT1Q7O0FBNE9NLGFBQU87SUE3T2E7RUE5V3RCLEVBOUJKOzs7RUErbkJBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQTtNQUFFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsSUFBQyxDQUFBLEtBQS9CLEVBRkY7O2FBSUUsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLG9CQUFBLEVBQXNCLElBQUMsQ0FBQSxLQUFLLENBQUM7TUFBL0IsQ0FBOUI7SUFMc0MsQ0FBQSxJQUF4Qzs7QUEvbkJBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtc2Ztb2R1bGVzL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGFza3MgPVxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBqZXRzdHJlYW1fMTogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWp0c3RtX19fMSA9IC0+IHR5cGVfb2YgKCBuZXcgSmV0c3RyZWFtKCkgKSAgICAgICAgICAgICAgKSwgJ29iamVjdCdcbiAgICAgIEBlcSAoIM6panRzdG1fX18yID0gLT4gdHlwZV9vZiAoIG5ldyBKZXRzdHJlYW0oKSApLndhbGsgJ2RhdGEnICApLCAnZ2VuZXJhdG9yJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmaXJzdCAgICAgPSB7ICdmaXJzdCcsICB9XG4gICAgICAgIGxhc3QgICAgICA9IHsgJ2xhc3QnLCAgIH1cbiAgICAgICAgamV0ICAgICAgID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV9fXzMgPSAtPiBqZXQubGVuZ3RoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMFxuICAgICAgICBAZXEgKCDOqWp0c3RtX19fNCA9IC0+IGpldC5pc19lbXB0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgd2F0Y2hlZF8xID0gW11cbiAgICAgICAgd2F0Y2hlZF8yID0gW11cbiAgICAgICAgd2F0Y2hlZF8zID0gW11cbiAgICAgICAgd2F0Y2hlZF80ID0gW11cbiAgICAgICAgamV0LnB1c2ggd2F0Y2ggPSAoIGQgICAgICAgICAgICAgICkgLT4gaGVscCAnzqlqdHN0bV9fXzUnLCBycHIgZDsgd2F0Y2hlZF8xLnB1c2ggZFxuICAgICAgICBqZXQucHVzaCB1cHBlciA9ICggZCAgICAgICAgICAgICAgKSAtPlxuICAgICAgICAgIHJldHVybiB5aWVsZCBkIHVubGVzcyAoIHR5cGVvZiBkICkgaXMgJ3N0cmluZydcbiAgICAgICAgICB5aWVsZCBkLnRvVXBwZXJDYXNlKClcbiAgICAgICAgamV0LnB1c2ggd2F0Y2ggPSAoIGQgICAgICAgICAgICAgICkgLT4gaW5mbyAnzqlqdHN0bV9fXzYnLCBycHIgZDsgd2F0Y2hlZF8yLnB1c2ggZFxuICAgICAgICBqZXQucHVzaCBleCAgICA9ICggZCwgbWFyayA9ICchJyAgKSAtPlxuICAgICAgICAgIHJldHVybiB5aWVsZCBkIGlmIGQgaW4gWyBmaXJzdCwgbGFzdCwgXVxuICAgICAgICAgIHlpZWxkIGQgKyBtYXJrXG4gICAgICAgIGpldC5wdXNoIHdhdGNoID0gKCBkICAgICAgICAgICAgICApIC0+IGhlbHAgJ86panRzdG1fX183JywgcnByIGQ7IHdhdGNoZWRfMy5wdXNoIGRcbiAgICAgICAgamV0LnB1c2ggc3Vycm91bmQgPSAoIGQgKSAtPlxuICAgICAgICAgIHJldHVybiB5aWVsZCBcIlwiXCJMZXQncyBzYXk6IFxcXCJcIlwiXCIgIGlmIGQgaXMgZmlyc3RcbiAgICAgICAgICByZXR1cm4geWllbGQgJ1wiLicgICAgICAgICAgICAgICAgIGlmIGQgaXMgbGFzdFxuICAgICAgICAgIHlpZWxkIGRcbiAgICAgICAgamV0LnB1c2ggZmlsdGVyID0gKCBkICAgICAgICAgICAgICApIC0+IHlpZWxkIGQgdW5sZXNzIGQgaW4gWyBmaXJzdCwgbGFzdCwgXVxuICAgICAgICBqZXQucHVzaCB3YXRjaCAgPSAoIGQgICAgICAgICAgICAgICkgLT4gdXJnZSAnzqlqdHN0bV9fXzgnLCBycHIgZDsgd2F0Y2hlZF80LnB1c2ggZFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fX185ID0gLT4gamV0Lmxlbmd0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgOFxuICAgICAgICBAZXEgKCDOqWp0c3RtX18xMCA9IC0+IGpldC5pc19lbXB0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzExID0gLT4gamV0LnNlbmQgZmlyc3QsICdoaWRleS1obycsIGxhc3QgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbnVsbFxuICAgICAgICBAZXEgKCDOqWp0c3RtX18xMiA9IC0+IFsgKCBkIGZvciBkIGZyb20gamV0LndhbGsoKSApLi4uLCBdICAgICAgICAgICAgICAgICAgICAgICksIFsgXCJcIlwiTGV0J3Mgc2F5OiBcXFwiXCJcIlwiLCAnSElERVktSE8hJywgJ1wiLicgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX18xMyA9IC0+IHdhdGNoZWRfMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgZmlyc3QsICdoaWRleS1obycsICAgbGFzdCwgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX18xNCA9IC0+IHdhdGNoZWRfMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgZmlyc3QsICdISURFWS1ITycsICAgbGFzdCwgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX18xNSA9IC0+IHdhdGNoZWRfMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgZmlyc3QsICdISURFWS1ITyEnLCAgbGFzdCwgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX18xNiA9IC0+IHdhdGNoZWRfNCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgXCJcIlwiTGV0J3Mgc2F5OiBcXFwiXCJcIlwiLCAnSElERVktSE8hJywgJ1wiLicgICBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzE3ID0gLT4gWyAoIGQgZm9yIGQgZnJvbSBqZXQud2FsayBmaXJzdCwgJ2hpZGV5LWhvJywgbGFzdCApLi4uLCBdLmpvaW4gJycgICAgICksIFwiXCJcIkxldCdzIHNheTogXCJISURFWS1ITyFcIi5cIlwiXCJcbiAgICAgICAgQGVxICggzqlqdHN0bV9fMTggPSAtPiAoICAgZCBmb3IgZCBmcm9tIGpldC5ydW4gIGZpcnN0LCAnaGlkZXktaG8nLCBsYXN0ICAgICAgICkuam9pbiAnJyAgICAgKSwgXCJcIlwiTGV0J3Mgc2F5OiBcIkhJREVZLUhPIVwiLlwiXCJcIlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBqZXRzdHJlYW1fMjogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBqZXQucHVzaCBhZGRfMSA9ICggZCApIC0+IHlpZWxkIGQgKyAxXG4gICAgICAgIGpldC5wdXNoIGFkZF8xID0gKCBkICkgLT4geWllbGQgZCArIDFcbiAgICAgICAgamV0LnB1c2ggYWRkXzEgPSAoIGQgKSAtPiB5aWVsZCBkICsgMVxuICAgICAgICBqZXQucHVzaCBhZGRfMSA9ICggZCApIC0+IHlpZWxkIGQgKyAxXG4gICAgICAgIGpldC5wdXNoIGFkZF8xID0gKCBkICkgLT4geWllbGQgZCArIDFcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtX18xOSA9IC0+IFsgKCBkIGZvciBkIGZyb20gamV0LndhbGsgMCApLi4uLCBdICAgICAgICAgICksIFsgNSwgXVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBqZXRzdHJlYW1fMjogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICAjIyMgZW1wdHkgcGlwZWxpbmUgaXMgYSBwaXBlbGluZSB3aXRob3V0IHRyYW5zZm9ybXMsIHNvIGRhdGEgaXMgcGFzc2VkIHRocm91Z2ggdW50cmFuc2Zvcm1lZDogIyMjXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzIwID0gLT4gWyAoICggbmV3IEpldHN0cmVhbSgpICkud2FsayAnZGF0YScgKS4uLiwgIF0gKSwgWyAnZGF0YScsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fMjEgPSAtPiAgICAgKCBuZXcgSmV0c3RyZWFtKCkgKS5ydW4gICdkYXRhJyAgICAgICAgICApLCBbICdkYXRhJywgXVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBqZXRzdHJlYW1fMzogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBjb2xsZWN0b3IgPSBbXVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHBfMSA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBwXzEucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDEtdDEnOyB5aWVsZCBkICsgJyDihJYgMSdcbiAgICAgICAgcF8xLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AxLXQyJzsgeWllbGQgZCArICcg4oSWIDInXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcF8yID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIHBfMi5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMi10MSc7IHlpZWxkIGQgKyAnIOKEliAzJ1xuICAgICAgICBwXzIucHVzaCBwXzFcbiAgICAgICAgcF8yLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AyLXQyJzsgeWllbGQgZCArICcg4oSWIDQnXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcF8zID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIHBfMy5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMy10MSc7IHlpZWxkIGQgKyAnIOKEliA1J1xuICAgICAgICBwXzMucHVzaCBwXzJcbiAgICAgICAgcF8zLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AzLXQyJzsgeWllbGQgZCArICcg4oSWIDYnXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzIyID0gLT4gcF8zLnJ1biAgICAgICAgJ215LWRhdGEnICksIFsgJ215LWRhdGEg4oSWIDUg4oSWIDMg4oSWIDEg4oSWIDIg4oSWIDQg4oSWIDYnICwgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX18yMyA9IC0+IGNvbGxlY3RvciAgICAgICAgICAgICAgICApLCBbICdwMy10MScsICdwMi10MScsICdwMS10MScsICdwMS10MicsICdwMi10MicsICdwMy10MicgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX18yNCA9IC0+IHBfMy5nZXRfZmlyc3QgICdteS1kYXRhJyApLCAnbXktZGF0YSDihJYgNSDihJYgMyDihJYgMSDihJYgMiDihJYgNCDihJYgNidcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgamV0c3RyZWFtXzM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgSmV0c3RyZWFtLFxuICAgICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT4gIyMjIHNhbWUgYXMgYWJvdmUgYnV0IHRoZSB0cmFuc2Zvcm1zIGFyZSBzZXBhcmF0ZSAjIyNcbiAgICAgICAgZmlyc3QgICAgICAgICA9IHsgJ2ZpcnN0JywgIH1cbiAgICAgICAgbGFzdCAgICAgICAgICA9IHsgJ2xhc3QnLCAgIH1cbiAgICAgICAgamV0ICAgICAgICAgICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBnMSAgICAgICAgICAgID0gKCBkICkgLT5cbiAgICAgICAgICB1cmdlICfOqWp0c3RtX18yNSBnMScsIGRcbiAgICAgICAgICBzd2l0Y2ggZFxuICAgICAgICAgICAgd2hlbiBmaXJzdFxuICAgICAgICAgICAgICB5aWVsZCBkXG4gICAgICAgICAgICAgIHlpZWxkIDBcbiAgICAgICAgICAgIHdoZW4gbGFzdFxuICAgICAgICAgICAgICB5aWVsZCAxXG4gICAgICAgICAgICAgIHlpZWxkIGRcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgeWllbGQgZCAqIDJcbiAgICAgICAgZzIgICAgICAgICAgICA9ICggZCApIC0+XG4gICAgICAgICAgdXJnZSAnzqlqdHN0bV9fMjYgZzInLCBkXG4gICAgICAgICAgc3dpdGNoIGRcbiAgICAgICAgICAgIHdoZW4gZmlyc3RcbiAgICAgICAgICAgICAgeWllbGQgZFxuICAgICAgICAgICAgICB5aWVsZCAwXG4gICAgICAgICAgICB3aGVuIGxhc3RcbiAgICAgICAgICAgICAgeWllbGQgMVxuICAgICAgICAgICAgICB5aWVsZCBkXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHlpZWxkIGQgKiAyXG4gICAgICAgIGpldC5wdXNoIGcxXG4gICAgICAgIGpldC5wdXNoIGcyXG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIGQgdW5sZXNzIGQgaW4gWyBmaXJzdCwgbGFzdCwgXVxuICAgICAgICBkZWJ1ZyAnzqlqdHN0bV9fMjcnLCBqZXRcbiAgICAgICAgd2hpc3BlciAnzqlqdHN0bV9fMjgnLCAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTJ1xuICAgICAgICBAZXEgKCDOqWp0c3RtX18yOSA9IC0+IGpldC5ydW4gZmlyc3QsIDIyLCBsYXN0ICAgICAgICAgICAgICAgICAgICksIFsgMCwgMCwgODgsIDIsIDEgXVxuICAgICAgICB3aGlzcGVyICfOqWp0c3RtX18zMCcsICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGpldHN0cmVhbV9zZWxlY3RvcnM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgSmV0c3RyZWFtLFxuICAgICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAgIHsgU2VsZWN0b3IsXG4gICAgICAgIF9ub3JtYWxpemVfc2VsZWN0b3JzLFxuICAgICAgICBub3JtYWxpemVfc2VsZWN0b3JzLFxuICAgICAgICBzZWxlY3RvcnNfYXNfbGlzdCxcbiAgICAgICAgaWRfZnJvbV9zeW1ib2wsICAgICAgICAgfSA9IGludGVybmFsc1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIEBlcSAoIM6panRzdG1fXzMxID0gLT4gdHlwZV9vZiAoIG5ldyBKZXRzdHJlYW0oKSApICAgICAgICAgICAgICApLCAnb2JqZWN0J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzdHJlYW1faXRlbXMgPSBbXG4gICAgICAgIFN5bWJvbCAnc3RhcnQnXG4gICAgICAgIFN5bWJvbCAnZW5kJ1xuICAgICAgICA3Ni45XG4gICAgICAgIFwiTWV4aWNvXCJcbiAgICAgICAgbnVsbFxuICAgICAgICBdXG4gICAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgICB7IHByb2JlOiAnY3VlJywgICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJ2N1ZScgICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjKicgICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJ2N1ZScsICAgICAgICAgICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiB0cnVlLCAgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgIH1cbiAgICAgICAgeyBwcm9iZTogJyMnLCAgICAgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcjJyAgICAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlIyonICAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcjJywgICAgICAgICAgICAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogdHJ1ZSwgICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsICB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBwcm9iZTogJ2N1ZSNlbmQnLCAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdjdWUjZW5kJyAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI2VuZCcgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICdjdWUjZW5kJywgICAgICAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnZW5kJyBdLCAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogJyNlbmQnLCAgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcjZW5kJyAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI2VuZCcgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcjZW5kJywgICAgICAgICAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnZW5kJyBdLCAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHByb2JlOiAnI2VuZCwjc3RhcnQsJywgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyNlbmQnLCAnI3N0YXJ0JywgJycgICBdLCBucm1fc2VsOiBbICdjdWUjZW5kJywgJ2N1ZSNzdGFydCcgXSwgc2VsX3JwcjogJyNlbmQsICNzdGFydCwgJywgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdlbmQnLCAnc3RhcnQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnI2VuZCwjc3RhcnQnLCAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyNlbmQnLCAnI3N0YXJ0JyAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjZW5kJywgJ2N1ZSNzdGFydCcgXSwgc2VsX3JwcjogJyNlbmQsICNzdGFydCcsICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdlbmQnLCAnc3RhcnQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcHJvYmU6ICdjdWUjZm9vI2JhcicsICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnY3VlI2ZvbyNiYXInICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNmb28jYmFyJyAgICAgICAgICBdLCBzZWxfcnByOiAnY3VlI2ZvbyNiYXInLCAgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ2ZvbyNiYXInIF0sICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICcjZm9vI2JhcicsICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnI2ZvbyNiYXInICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNmb28jYmFyJyAgICAgICAgICBdLCBzZWxfcnByOiAnI2ZvbyNiYXInLCAgICAgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ2ZvbyNiYXInIF0sICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBwcm9iZTogJ2N1ZSNzdGFydCcsICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdjdWUjc3RhcnQnICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI3N0YXJ0JyAgICAgICAgICAgIF0sIHNlbF9ycHI6ICdjdWUjc3RhcnQnLCAgICAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnc3RhcnQnIF0sICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogJyNzdGFydCcsICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcjc3RhcnQnICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI3N0YXJ0JyAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcjc3RhcnQnLCAgICAgICAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnc3RhcnQnIF0sICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHByb2JlOiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgc2VsX2xpc3Q6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgc2VsX3JwcjogJ2N1ZSNzdGFydCwgY3VlI2VuZCcsIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdzdGFydCcsICdlbmQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiBbICcjc3RhcnQnLCAnI2VuZCcgXSwgICAgICAgc2VsX2xpc3Q6IFsgJyNzdGFydCcsICcjZW5kJyAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgc2VsX3JwcjogJyNzdGFydCwgI2VuZCcsICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdzdGFydCcsICdlbmQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnY3VlI3N0YXJ0LGN1ZSNlbmQnLCAgICAgICAgc2VsX2xpc3Q6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgc2VsX3JwcjogJ2N1ZSNzdGFydCwgY3VlI2VuZCcsIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdzdGFydCcsICdlbmQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnI3N0YXJ0LCNlbmQnLCAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyNzdGFydCcsICcjZW5kJyAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgc2VsX3JwcjogJyNzdGFydCwgI2VuZCcsICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdzdGFydCcsICdlbmQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnIGN1ZSNzdGFydCwgY3VlI2VuZCAnLCAgICAgc2VsX2xpc3Q6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgc2VsX3JwcjogJ2N1ZSNzdGFydCwgY3VlI2VuZCcsIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdzdGFydCcsICdlbmQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcHJvYmU6IG51bGwsICAgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnJyAgICAgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnJywgICAgICAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogW10sICAgICAgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICAgICAgICAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJyAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcnLCAgICAgICAgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBmYWxzZSwgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiBbIFtdIF0sICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgICAgICAgICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJycsICAgICAgICAgICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IGZhbHNlLCAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6IFsgWyAnJyBdIF0sICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnJyAgICAgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnJywgICAgICAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogJ2RhdGEnLCAgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdkYXRhJyAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJyAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICdkYXRhJywgICAgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBmYWxzZSwgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnJywgICAgICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJycgICAgICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJycsICAgICAgICAgICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IGZhbHNlLCAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICdkYXRhIycsICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnZGF0YSMnICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnZGF0YSMnLCAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHByb2JlOiBbICdkYXRhJywgJ2N1ZScgXSwgICAgICAgICAgc2VsX2xpc3Q6IFsgJ2RhdGEnLCAnY3VlJyAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonLCAnY3VlIyonICAgICAgXSwgc2VsX3JwcjogJ2RhdGEsIGN1ZScsICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IHRydWUsICAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IHRydWUsICB9XG4gICAgICAgIHsgcHJvYmU6ICdkYXRhLCBjdWUnLCAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnZGF0YScsICdjdWUnICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicsICdjdWUjKicgICAgICBdLCBzZWxfcnByOiAnZGF0YSwgY3VlJywgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogdHJ1ZSwgICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogdHJ1ZSwgIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHByb2JlOiAnZGF0YSNmb28jYmFyJywgZXJyb3I6IC9JRHMgb24gZGF0YSBpdGVtcyBub3Qgc3VwcG9ydGVkLywgfVxuICAgICAgICBdXG4gICAgICBzZWxlY3RvcnNfYW5kX3NlbGVjdGlvbnMgPSBbXG4gICAgICAgIHsgc2VsOiAnY3VlJywgICAgICAgICAgICAgICAgICAgICAgbnJtOiAnY3VlIyonLCAgICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgeyBzZWw6ICcjJywgICAgICAgICAgICAgICAgICAgICAgICBucm06ICdjdWUjKicsICAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgc2VsOiAnY3VlI2VuZCcsICAgICAgICAgICAgICAgICAgbnJtOiAnY3VlI2VuZCcsICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiAnI2VuZCcsICAgICAgICAgICAgICAgICAgICAgbnJtOiAnY3VlI2VuZCcsICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBzZWw6ICcjZW5kLCNzdGFydCwnLCAgICAgICAgICAgICBucm06ICdjdWUjZW5kLGN1ZSNzdGFydCcsICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICB7IHNlbDogJyNlbmQsI3N0YXJ0JywgICAgICAgICAgICAgIG5ybTogJ2N1ZSNlbmQsY3VlI3N0YXJ0JywgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBzZWw6ICdjdWUjZm9vI2JhcicsICAgICAgICAgICAgICBucm06ICdjdWUjZm9vI2JhcicsICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiAnI2ZvbyNiYXInLCAgICAgICAgICAgICAgICAgbnJtOiAnY3VlI2ZvbyNiYXInLCAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgc2VsOiAnY3VlI3N0YXJ0JywgICAgICAgICAgICAgICAgbnJtOiAnY3VlI3N0YXJ0JywgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiAnI3N0YXJ0JywgICAgICAgICAgICAgICAgICAgbnJtOiAnY3VlI3N0YXJ0JywgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBzZWw6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBucm06ICdjdWUjc3RhcnQsY3VlI2VuZCcsICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICB7IHNlbDogWyAnI3N0YXJ0JywgJyNlbmQnIF0sICAgICAgIG5ybTogJ2N1ZSNzdGFydCxjdWUjZW5kJywgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiAnY3VlI3N0YXJ0LGN1ZSNlbmQnLCAgICAgICAgbnJtOiAnY3VlI3N0YXJ0LGN1ZSNlbmQnLCAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgeyBzZWw6ICcjc3RhcnQsI2VuZCcsICAgICAgICAgICAgICBucm06ICdjdWUjc3RhcnQsY3VlI2VuZCcsICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICB7IHNlbDogJyBjdWUjc3RhcnQsIGN1ZSNlbmQgJywgICAgIG5ybTogJ2N1ZSNzdGFydCxjdWUjZW5kJywgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBzZWw6IG51bGwsICAgICAgICAgICAgICAgICAgICAgICBucm06ICdkYXRhIyonLCAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgIHsgc2VsOiBbXSwgICAgICAgICAgICAgICAgICAgICAgICAgbnJtOiAnZGF0YSMqJywgICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiB0cnVlLCBcIidNZXhpY28nXCI6IHRydWUsIG51bGw6IHRydWUgfVxuICAgICAgICB7IHNlbDogWyBbXSBdLCAgICAgICAgICAgICAgICAgICAgIG5ybTogJ2RhdGEjKicsICAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgeyBzZWw6IFsgWyAnJyBdIF0sICAgICAgICAgICAgICAgICBucm06ICdkYXRhIyonLCAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgIHsgc2VsOiAnZGF0YScsICAgICAgICAgICAgICAgICAgICAgbnJtOiAnZGF0YSMqJywgICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiB0cnVlLCBcIidNZXhpY28nXCI6IHRydWUsIG51bGw6IHRydWUgfVxuICAgICAgICB7IHNlbDogJycsICAgICAgICAgICAgICAgICAgICAgICAgIG5ybTogJ2RhdGEjKicsICAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgeyBzZWw6ICdkYXRhIycsICAgICAgICAgICAgICAgICAgICBucm06ICdkYXRhIyonLCAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBzZWw6IFsgJ2RhdGEnLCAnY3VlJyBdLCAgICAgICAgICBucm06ICdkYXRhIyosY3VlIyonLCAgICAgICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiB0cnVlLCBcIidNZXhpY28nXCI6IHRydWUsIG51bGw6IHRydWUgfVxuICAgICAgICB7IHNlbDogJ2RhdGEsIGN1ZScsICAgICAgICAgICAgICAgIG5ybTogJ2RhdGEjKixjdWUjKicsICAgICAgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgIHsgc2VsOiAnKicsICAgICAgICAgICAgICAgICAgICAgICAgbnJtOiAnZGF0YSMqLGN1ZSMqJywgICAgICAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgXVxuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBkbyA9PlxuICAgICAgICBmb3IgcCBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICAgaWYgcC5lcnJvcj9cbiAgICAgICAgICAgIEB0aHJvd3MgKCDOqWp0c3RtX18zMiA9IC0+IG5ldyBTZWxlY3RvciBwLnByb2JlICksIHAuZXJyb3JcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgcHJvYmUgICAgICAgICAgID0gcC5wcm9iZVxuICAgICAgICAgIHNlbF9saXN0ICAgICAgICA9IHNlbGVjdG9yc19hc19saXN0ICAgcHJvYmVcbiAgICAgICAgICBucm1fc2VsICAgICAgICAgPSBbICggbm9ybWFsaXplX3NlbGVjdG9ycyBwcm9iZSApLi4uLCBdXG4gICAgICAgICAgc2VsICAgICAgICAgICAgID0gbmV3IFNlbGVjdG9yICAgICAgICBwcm9iZVxuICAgICAgICAgIHNlbF9ycHIgICAgICAgICA9IHNlbC50b1N0cmluZygpXG4gICAgICAgICAgeyBkYXRhLFxuICAgICAgICAgICAgY3VlcyxcbiAgICAgICAgICAgIGFjY2VwdF9hbGwsIH0gPSBzZWwuX2dldF9leGNlcnB0KClcbiAgICAgICAgICBkYXRhICAgICAgICAgICAgPSBbICggZGF0YSApLi4uLCBdIHVubGVzcyBkYXRhIGluIFsgdHJ1ZSwgZmFsc2UsIF1cbiAgICAgICAgICBjdWVzICAgICAgICAgICAgPSBbICggY3VlcyApLi4uLCBdIHVubGVzcyBjdWVzIGluIFsgdHJ1ZSwgZmFsc2UsIF1cbiAgICAgICAgICAjIGVjaG8geyBwcm9iZSwgc2VsX2xpc3QsIG5ybV9zZWwsIHNlbF9ycHIsIGRhdGEsIGN1ZXMsIGFjY2VwdF9hbGwsIH1cbiAgICAgICAgICBAZXEgKCDOqWp0c3RtX18zMyA9IC0+IHNlbF9saXN0ICAgICksIHAuc2VsX2xpc3RcbiAgICAgICAgICBAZXEgKCDOqWp0c3RtX18zNCA9IC0+IG5ybV9zZWwgICAgICksIHAubnJtX3NlbFxuICAgICAgICAgIEBlcSAoIM6panRzdG1fXzM1ID0gLT4gc2VsX3JwciAgICAgKSwgcC5zZWxfcnByXG4gICAgICAgICAgQGVxICggzqlqdHN0bV9fMzYgPSAtPiBkYXRhICAgICAgICApLCBwLmRhdGFcbiAgICAgICAgICBAZXEgKCDOqWp0c3RtX18zNyA9IC0+IGN1ZXMgICAgICAgICksIHAuY3Vlc1xuICAgICAgICAgIEBlcSAoIM6panRzdG1fXzM4ID0gLT4gYWNjZXB0X2FsbCAgKSwgcC5hY2NlcHRfYWxsXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGRvID0+XG4gICAgICAgIGRpc3BsYXlfbWF0Y2hlciA9IHRydWVcbiAgICAgICAgZGlzcGxheV9tYXRjaGVyID0gZmFsc2VcbiAgICAgICAgZm9yIGVudHJ5IGluIHNlbGVjdG9yc19hbmRfc2VsZWN0aW9uc1xuICAgICAgICAgIHNlbGVjdG9yICA9IG5ldyBTZWxlY3RvciBlbnRyeS5zZWxcbiAgICAgICAgICBucm0gICAgICAgPSBbICggbm9ybWFsaXplX3NlbGVjdG9ycyBlbnRyeS5zZWwgKS4uLiwgXS5qb2luICcsJ1xuICAgICAgICAgIGxpbmUgICAgICA9IHsgc2VsOiBlbnRyeS5zZWwsIG5ybSwgfVxuICAgICAgICAgIGZvciBpdGVtIGluIHN0cmVhbV9pdGVtc1xuICAgICAgICAgICAgcmVzdWx0ICAgICAgICAgICAgPSBzZWxlY3Rvci5zZWxlY3QgaXRlbVxuICAgICAgICAgICAgbGluZVsgcnByIGl0ZW0gXSAgPSBzZWxlY3Rvci5zZWxlY3QgaXRlbVxuICAgICAgICAgICAgdW5sZXNzIGRpc3BsYXlfbWF0Y2hlclxuICAgICAgICAgICAgICBpZiByZXN1bHQgaXNudCBlbnRyeVsgcnByIGl0ZW0gXVxuICAgICAgICAgICAgICAgIGVjaG8geyBzZWxlY3RvcjogZW50cnkuc2VsLCBucm0sIGl0ZW0sIHJlc3VsdCwgfVxuICAgICAgICAgICAgICBAZXEgKCDOqWp0c3RtX18zOSA9IC0+IHJlc3VsdCApLCBlbnRyeVsgcnByIGl0ZW0gXVxuICAgICAgICAgIGlmIGRpc3BsYXlfbWF0Y2hlclxuICAgICAgICAgICAgZWNobyBsaW5lXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGJ1aWxkX3BpcGVsaW5lczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIyB7IFNlbGVjdG9yLFxuICAgICAgIyAgIF9ub3JtYWxpemVfc2VsZWN0b3JzLFxuICAgICAgIyAgIG5vcm1hbGl6ZV9zZWxlY3RvcnMsXG4gICAgICAjICAgc2VsZWN0b3JzX2FzX2xpc3QsXG4gICAgICAjICAgaWRfZnJvbV9zeW1ib2wsICAgICAgICAgfSA9IGludGVybmFsc1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBqZXQgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgamV0LnB1c2ggcHJlcGVuZCA9ICggZCApIC0+IHlpZWxkICcoJyArIGRcbiAgICAgICAgamV0LnB1c2ggYXBwcGVuZCA9ICggZCApIC0+IHlpZWxkIGQgKyAnKSdcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNDAgPSAtPiBqZXQuZ2V0X2ZpcnN0ICdzdHJpbmcnICksICcoc3RyaW5nKSdcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgamV0ID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCAnKCcgKyBkXG4gICAgICAgIGpldC5wdXNoIGFwcHBlbmQgPSAoIGQgKSAtPiB5aWVsZCBkICsgJyknXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzQxID0gLT4gamV0LnNlbmQgJ3N0cmluZycgICksIG51bGxcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNDIgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAnc3RyaW5nJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX180MyA9IC0+IGpldC5zZW5kICdvdGhlcicgICksIG51bGxcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNDQgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAnc3RyaW5nJywgJ290aGVyJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX180NSA9IC0+IGpldC5nZXRfZmlyc3QoKSAgICApLCAnKHN0cmluZyknXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzQ2ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFtdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzQ3ID0gLT4gamV0LnJ1bigpICAgICAgICAgICksIFtdXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGpldCA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBqZXQucHVzaCBwcmVwZW5kID0gKCBkICkgLT4geWllbGQgJygnICsgZFxuICAgICAgICBqZXQucHVzaCBhcHBwZW5kID0gKCBkICkgLT4geWllbGQgZCArICcpJ1xuICAgICAgICBAZXEgKCDOqWp0c3RtX180OCA9IC0+IGpldC5zZW5kICdzdHJpbmcnICApLCBudWxsXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzQ5ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ3N0cmluZycsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNTAgPSAtPiBqZXQuc2VuZCAnb3RoZXInICApLCBudWxsXG4gICAgICAgIGl0ZXJhdG9yID0gamV0LndhbGsoKVxuICAgICAgICBAZXEgKCDOqWp0c3RtX181MSA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbICdzdHJpbmcnLCAnb3RoZXInLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzUyID0gLT4gaXRlcmF0b3IubmV4dCgpICAgICksIHsgZG9uZTogZmFsc2UsICB2YWx1ZTogJyhzdHJpbmcpJywgfVxuICAgICAgICBAZXEgKCDOqWp0c3RtX181MyA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbICdvdGhlcicsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNTQgPSAtPiBpdGVyYXRvci5uZXh0KCkgICAgKSwgeyBkb25lOiBmYWxzZSwgIHZhbHVlOiAnKG90aGVyKScsIH1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNTUgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgW11cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNTYgPSAtPiBpdGVyYXRvci5uZXh0KCkgICAgKSwgeyBkb25lOiB0cnVlLCAgIHZhbHVlOiBudWxsLCB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGpldCA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBqZXQucHVzaCBwcmVwZW5kID0gKCBkICkgLT4geWllbGQgJygnICsgZFxuICAgICAgICBqZXQucHVzaCBhcHBwZW5kID0gKCBkICkgLT4geWllbGQgZCArICcpJ1xuICAgICAgICBAZXEgKCDOqWp0c3RtX181NyA9IC0+IGpldC5zZW5kICdzdHJpbmcnICApLCBudWxsXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzU4ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ3N0cmluZycsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNTkgPSAtPiBqZXQuc2VuZCAnb3RoZXInICApLCBudWxsXG4gICAgICAgIGl0ZXJhdG9yID0gamV0LndhbGsgJ3Ryb2lzJywgJ3F1YXRyZSdcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNjAgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAnc3RyaW5nJywgJ290aGVyJywgJ3Ryb2lzJywgJ3F1YXRyZScsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNjEgPSAtPiBpdGVyYXRvci5uZXh0KCkgICAgKSwgeyBkb25lOiBmYWxzZSwgIHZhbHVlOiAnKHN0cmluZyknLCB9XG4gICAgICAgIEBlcSAoIM6panRzdG1fXzYyID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ290aGVyJywgJ3Ryb2lzJywgJ3F1YXRyZScsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNjMgPSAtPiBpdGVyYXRvci5uZXh0KCkgICAgKSwgeyBkb25lOiBmYWxzZSwgIHZhbHVlOiAnKG90aGVyKScsIH1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNjQgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAndHJvaXMnLCAncXVhdHJlJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX182NSA9IC0+IGl0ZXJhdG9yLm5leHQoKSAgICApLCB7IGRvbmU6IGZhbHNlLCAgdmFsdWU6ICcodHJvaXMpJywgfVxuICAgICAgICBAZXEgKCDOqWp0c3RtX182NiA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbICdxdWF0cmUnLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzY3ID0gLT4gaXRlcmF0b3IubmV4dCgpICAgICksIHsgZG9uZTogZmFsc2UsICB2YWx1ZTogJyhxdWF0cmUpJywgfVxuICAgICAgICBAZXEgKCDOqWp0c3RtX182OCA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX182OSA9IC0+IGl0ZXJhdG9yLm5leHQoKSAgICApLCB7IGRvbmU6IHRydWUsICAgdmFsdWU6IG51bGwsIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29uZmlndXJlX3RyYW5zZm9ybXM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgSmV0c3RyZWFtLFxuICAgICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAgICMgeyBTZWxlY3RvcixcbiAgICAgICMgICBfbm9ybWFsaXplX3NlbGVjdG9ycyxcbiAgICAgICMgICBub3JtYWxpemVfc2VsZWN0b3JzLFxuICAgICAgIyAgIHNlbGVjdG9yc19hc19saXN0LFxuICAgICAgIyAgIGlkX2Zyb21fc3ltYm9sLCAgICAgICAgIH0gPSBpbnRlcm5hbHNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmlyc3QgPSBTeW1ib2wgJ2ZpcnN0J1xuICAgICAgICBsYXN0ICA9IFN5bWJvbCAnbGFzdCdcbiAgICAgICAgamV0ID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIFwiKiN7ZH0qXCJcbiAgICAgICAgamV0LnB1c2ggJyNmaXJzdCcsIHByZXBlbmQgPSAoIGQgKSAtPlxuICAgICAgICAgIHJldHVybiB5aWVsZCBmcm9tIFsgZCwgJygnLCBdIGlmIGQgaXMgZmlyc3RcbiAgICAgICAgICB5aWVsZCAnZXJyb3IjMSdcbiAgICAgICAgamV0LnB1c2ggJyNsYXN0JywgYXBwZW5kID0gKCBkICkgLT5cbiAgICAgICAgICByZXR1cm4geWllbGQgZnJvbSBbICcpJywgZCwgXSBpZiBkIGlzIGxhc3RcbiAgICAgICAgICB5aWVsZCAnZXJyb3IjMidcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtX183MCA9IC0+IGpldC5ydW4gZmlyc3QsICdiaXJkaXN0aGV3b3JkJywgbGFzdCApLCBbICcoJywgJypiaXJkaXN0aGV3b3JkKicsICcpJywgXVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmaXJzdCA9IFN5bWJvbCAnZmlyc3QnXG4gICAgICAgIGxhc3QgID0gU3ltYm9sICdsYXN0J1xuICAgICAgICBqZXQgICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBqZXQucHVzaCAoIGQgKSAtPiB5aWVsZCBcIioje2R9KlwiXG4gICAgICAgIGpldC5wdXNoICcjZmlyc3QnLCBwcmVwZW5kID0gKCBkICkgLT4geWllbGQgZnJvbSBbIGQsICcoJywgXTsgbnVsbFxuICAgICAgICBqZXQucHVzaCAnI2xhc3QnLCAgYXBwZW5kICA9ICggZCApIC0+IHlpZWxkIGZyb20gWyAnKScsIGQsIF07IG51bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtX183MSA9IC0+IGpldC5ydW4gZmlyc3QsICdiaXJkaXN0aGV3b3JkJywgbGFzdCApLCBbICcoJywgJypiaXJkaXN0aGV3b3JkKicsICcpJywgXVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmaXJzdCA9IFN5bWJvbCAnZmlyc3QnXG4gICAgICAgIGxhc3QgID0gU3ltYm9sICdsYXN0J1xuICAgICAgICBqZXQgICA9IG5ldyBKZXRzdHJlYW0geyBvdXRsZXQ6ICdkYXRhLGN1ZScsIH1cbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgXCIqI3tkfSpcIlxuICAgICAgICBqZXQucHVzaCAnI2ZpcnN0JywgcHJlcGVuZCA9ICggZCApIC0+IHlpZWxkIGZyb20gWyBkLCAnKCcsIF07IG51bGxcbiAgICAgICAgamV0LnB1c2ggJyNsYXN0JywgIGFwcGVuZCAgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgJyknLCBkLCBdOyBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNzIgPSAtPiBqZXQucnVuIGZpcnN0LCAnYmlyZGlzdGhld29yZCcsIGxhc3QgKSwgWyBmaXJzdCwgJygnLCAnKmJpcmRpc3RoZXdvcmQqJywgJyknLCBsYXN0LCBdXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZpcnN0ID0gU3ltYm9sICdmaXJzdCdcbiAgICAgICAgbGFzdCAgPSBTeW1ib2wgJ2xhc3QnXG4gICAgICAgIGpldCAgID0gbmV3IEpldHN0cmVhbSB7IG91dGxldDogJyonLCB9XG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIFwiKiN7ZH0qXCJcbiAgICAgICAgamV0LnB1c2ggJyNmaXJzdCcsIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgZCwgJygnLCBdOyBudWxsXG4gICAgICAgIGpldC5wdXNoICcjbGFzdCcsICBhcHBlbmQgID0gKCBkICkgLT4geWllbGQgZnJvbSBbICcpJywgZCwgXTsgbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzczID0gLT4gamV0LnJ1biBmaXJzdCwgJ2JpcmRpc3RoZXdvcmQnLCBsYXN0ICksIFsgZmlyc3QsICcoJywgJypiaXJkaXN0aGV3b3JkKicsICcpJywgbGFzdCwgXVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmaXJzdCA9IFN5bWJvbCAnZmlyc3QnXG4gICAgICAgIGxhc3QgID0gU3ltYm9sICdsYXN0J1xuICAgICAgICBqZXQgICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBqZXQucHVzaCAoIGQgKSAtPiB5aWVsZCBcIioje2R9KlwiXG4gICAgICAgIGpldC5wdXNoICcjZmlyc3QnLCBwcmVwZW5kID0gKCBkICkgLT4geWllbGQgZnJvbSBbIGQsICcoJywgXTsgbnVsbFxuICAgICAgICBqZXQucHVzaCAnI2xhc3QnLCAgYXBwZW5kICA9ICggZCApIC0+IHlpZWxkIGZyb20gWyAnKScsIGQsIF07IG51bGxcbiAgICAgICAgamV0LmNvbmZpZ3VyZSB7IG91dGxldDogJyonLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNzQgPSAtPiBqZXQucnVuIGZpcnN0LCAnYmlyZGlzdGhld29yZCcsIGxhc3QgKSwgWyBmaXJzdCwgJygnLCAnKmJpcmRpc3RoZXdvcmQqJywgJyknLCBsYXN0LCBdXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZpcnN0ID0gU3ltYm9sICdmaXJzdCdcbiAgICAgICAgbGFzdCAgPSBTeW1ib2wgJ2xhc3QnXG4gICAgICAgIGpldCAgID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIFwiKiN7ZH0qXCJcbiAgICAgICAgamV0LnB1c2ggJyNmaXJzdCcsIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgZCwgJygnLCBdOyBudWxsXG4gICAgICAgIGpldC5wdXNoICcjbGFzdCcsICBhcHBlbmQgID0gKCBkICkgLT4geWllbGQgZnJvbSBbICcpJywgZCwgXTsgbnVsbFxuICAgICAgICBqZXQuY29uZmlndXJlIHsgcGljazogJ2ZpcnN0JywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzc1ID0gLT4gamV0LnJ1biBmaXJzdCwgJ2JpcmRpc3RoZXdvcmQnLCBsYXN0ICksICcoJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmaXJzdCA9IFN5bWJvbCAnZmlyc3QnXG4gICAgICAgIGxhc3QgID0gU3ltYm9sICdsYXN0J1xuICAgICAgICBqZXQgICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBqZXQucHVzaCAoIGQgKSAtPiB5aWVsZCBcIioje2R9KlwiXG4gICAgICAgIGpldC5wdXNoICcjZmlyc3QnLCBwcmVwZW5kID0gKCBkICkgLT4geWllbGQgZnJvbSBbIGQsICcoJywgXTsgbnVsbFxuICAgICAgICBqZXQucHVzaCAnI2xhc3QnLCAgYXBwZW5kICA9ICggZCApIC0+IHlpZWxkIGZyb20gWyAnKScsIGQsIF07IG51bGxcbiAgICAgICAgamV0LmNvbmZpZ3VyZSB7IG91dGxldDogJ2RhdGEsY3VlJywgcGljazogJ2ZpcnN0JywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzc2ID0gLT4gamV0LnJ1biBmaXJzdCwgJ2JpcmRpc3RoZXdvcmQnLCBsYXN0ICksIGZpcnN0XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZpcnN0ID0gU3ltYm9sICdmaXJzdCdcbiAgICAgICAgbGFzdCAgPSBTeW1ib2wgJ2xhc3QnXG4gICAgICAgIGpldCAgID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIFwiKiN7ZH0qXCJcbiAgICAgICAgamV0LnB1c2ggJyNmaXJzdCcsIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgZCwgJygnLCBdOyBudWxsXG4gICAgICAgIGpldC5wdXNoICcjbGFzdCcsICBhcHBlbmQgID0gKCBkICkgLT4geWllbGQgZnJvbSBbICcpJywgZCwgXTsgbnVsbFxuICAgICAgICBqZXQuY29uZmlndXJlIHsgcGljazogJ2xhc3QnLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNzcgPSAtPiBqZXQuY2ZnLnBpY2sgICAgICAgICAgICAgICAgICAgICAgICAgICksICdsYXN0J1xuICAgICAgICBAZXEgKCDOqWp0c3RtX183OCA9IC0+IGpldC5ydW4gZmlyc3QsICdiaXJkaXN0aGV3b3JkJywgbGFzdCAgKSwgJyknXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZpcnN0ID0gU3ltYm9sICdmaXJzdCdcbiAgICAgICAgbGFzdCAgPSBTeW1ib2wgJ2xhc3QnXG4gICAgICAgIGpldCAgID0gbmV3IEpldHN0cmVhbSB7IHBpY2s6ICdmaXJzdCcsIH1cbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgXCIqI3tkfSpcIlxuICAgICAgICBqZXQucHVzaCAnI2ZpcnN0JywgcHJlcGVuZCA9ICggZCApIC0+IHlpZWxkIGZyb20gWyBkLCAnKCcsIF07IG51bGxcbiAgICAgICAgamV0LnB1c2ggJyNsYXN0JywgIGFwcGVuZCAgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgJyknLCBkLCBdOyBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQHRocm93cyAoIM6panRzdG1fXzc5ID0gLT4gamV0LnJ1bigpICksIC9ubyByZXN1bHRzL1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmYWxsYmFjayAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtIHsgcGljazogJ2ZpcnN0JywgZmFsbGJhY2ssIH1cbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgXCIqI3tkfSpcIlxuICAgICAgICBqZXQucHVzaCAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgZCwgJygnLCBdOyBudWxsXG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIGZyb20gWyAnKScsIGQsIF07IG51bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtX184MCA9IC0+IGpldC5ydW4oKSApLCBmYWxsYmFja1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmYWxsYmFjayAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtIHsgcGljazogJ2ZpcnN0JywgZmFsbGJhY2ssIH1cbiAgICAgICAgb3JkZXJpbmcgID0gW11cbiAgICAgICAgamV0LnB1c2ggYSA9ICggZCApIC0+IG9yZGVyaW5nLnB1c2ggXCJhI3tkfVwiOyB5aWVsZCBkICogMlxuICAgICAgICBqZXQucHVzaCBiID0gKCBkICkgLT4gb3JkZXJpbmcucHVzaCBcImIje2R9XCI7IHlpZWxkIGQgKiAzXG4gICAgICAgIGpldC5wdXNoIGMgPSAoIGQgKSAtPiBvcmRlcmluZy5wdXNoIFwiYyN7ZH1cIjsgeWllbGQgZCAqIDVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtX184MSA9IC0+IFsgKCBqZXQud2FsayAxLCAyLCAzICkuLi4sIF0gICAgICAgICAgICAgICAgICApLCBbIDMwLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzgyID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICksICdhMSBiMiBjNiBhMiBiNCBjMTIgYTMgYjYgYzE4J1xuICAgICAgICBAZXEgKCDOqWp0c3RtX184MyA9IC0+IGpldC5ydW4gMSwgMiwgMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAzMFxuICAgICAgICBAZXEgKCDOqWp0c3RtX184NCA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiApLCAnYTEgYjIgYzYgYTIgYjQgYzEyIGEzIGI2IGMxOCdcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmFsbGJhY2sgID0gU3ltYm9sICdmYWxsYmFjaydcbiAgICAgICAgamV0ICAgICAgID0gbmV3IEpldHN0cmVhbSB7IHBpY2s6ICdsYXN0JywgZmFsbGJhY2ssIH1cbiAgICAgICAgb3JkZXJpbmcgID0gW11cbiAgICAgICAgamV0LnB1c2ggYSA9ICggZCApIC0+IG9yZGVyaW5nLnB1c2ggXCJhI3tkfVwiOyB5aWVsZCBkICogMlxuICAgICAgICBqZXQucHVzaCBiID0gKCBkICkgLT4gb3JkZXJpbmcucHVzaCBcImIje2R9XCI7IHlpZWxkIGQgKiAzXG4gICAgICAgIGpldC5wdXNoIGMgPSAoIGQgKSAtPiBvcmRlcmluZy5wdXNoIFwiYyN7ZH1cIjsgeWllbGQgZCAqIDVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBqZXQuc2VuZCAxLCAyLCAzXG4gICAgICAgIGdlbmVyYXRvciA9IGpldC53YWxrKClcbiAgICAgICAgQGVxICggzqlqdHN0bV9fODUgPSAtPiBnZW5lcmF0b3IubmV4dCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IHZhbHVlOiA5MCwgZG9uZTogZmFsc2UsIH1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fODYgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgICApLCAnYTEgYjIgYzYgYTIgYjQgYzEyIGEzIGI2IGMxOCdcbiAgICAgICAgQGVxICggzqlqdHN0bV9fODcgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX184OCA9IC0+IGdlbmVyYXRvci5uZXh0KCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgdmFsdWU6IG51bGwsIGRvbmU6IHRydWUsIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmFsbGJhY2sgID0gU3ltYm9sICdmYWxsYmFjaydcbiAgICAgICAgamV0ICAgICAgID0gbmV3IEpldHN0cmVhbSB7IHBpY2s6ICdmaXJzdCcsIGZhbGxiYWNrLCB9XG4gICAgICAgIG9yZGVyaW5nICA9IFtdXG4gICAgICAgIGpldC5wdXNoIGEgPSAoIGQgKSAtPiBvcmRlcmluZy5wdXNoIFwiYSN7ZH1cIjsgeWllbGQgZCAqIDJcbiAgICAgICAgamV0LnB1c2ggYiA9ICggZCApIC0+IG9yZGVyaW5nLnB1c2ggXCJiI3tkfVwiOyB5aWVsZCBkICogM1xuICAgICAgICBqZXQucHVzaCBjID0gKCBkICkgLT4gb3JkZXJpbmcucHVzaCBcImMje2R9XCI7IHlpZWxkIGQgKiA1XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgamV0LnNlbmQgMSwgMiwgM1xuICAgICAgICAjIGRlYnVnICfOqWp0c3RtX184OScsIFsgKCBqZXQud2FsaygpICkuLi4sIF1cbiAgICAgICAgZ2VuZXJhdG9yID0gamV0LndhbGsoKVxuICAgICAgICBAZXEgKCDOqWp0c3RtX185MCA9IC0+IGdlbmVyYXRvci5uZXh0KCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgdmFsdWU6IDMwLCBkb25lOiBmYWxzZSwgfVxuICAgICAgICBAZXEgKCDOqWp0c3RtX185MSA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiAgICksICdhMSBiMiBjNidcbiAgICAgICAgQGVxICggzqlqdHN0bV9fOTIgPSAtPiBnZW5lcmF0b3IubmV4dCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IHZhbHVlOiBudWxsLCBkb25lOiB0cnVlLCB9XG4gICAgICAgIEBlcSAoIM6panRzdG1fXzkzID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICAgKSwgJ2EyIGI0IGMxMiBhMyBiNiBjMTgnXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzk0ID0gLT4gZ2VuZXJhdG9yLm5leHQoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlLCB9XG4gICAgICAgIEBlcSAoIM6panRzdG1fXzk1ID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICAgKSwgJydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgamV0ICAgICAgID0gbmV3IEpldHN0cmVhbSB7IHBpY2s6ICdmaXJzdCcsIH1cbiAgICAgICAgb3JkZXJpbmcgID0gW11cbiAgICAgICAgamV0LnB1c2ggYSA9ICggZCApIC0+IG9yZGVyaW5nLnB1c2ggXCJhI3tkfVwiOyB5aWVsZCBkICogMlxuICAgICAgICBqZXQucHVzaCBiID0gKCBkICkgLT4gb3JkZXJpbmcucHVzaCBcImIje2R9XCI7IHlpZWxkIGQgKiAzXG4gICAgICAgIGpldC5wdXNoIGMgPSAoIGQgKSAtPiBvcmRlcmluZy5wdXNoIFwiYyN7ZH1cIjsgeWllbGQgZCAqIDVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgICAgICggzqlqdHN0bV8xMTAgPSAtPiBbICggamV0LndhbGsoKSApLi4uLCBdICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbXVxuICAgICAgICBAZXEgICAgICggzqlqdHN0bV8xMTEgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgICApLCAnJ1xuICAgICAgICBAdGhyb3dzICggzqlqdHN0bV8xMTIgPSAtPiBqZXQucnVuKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvbm8gcmVzdWx0cy9cbiAgICAgICAgQGVxICAgICAoIM6panRzdG1fMTEzID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICAgKSwgJydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgamV0ICAgICAgID0gbmV3IEpldHN0cmVhbSB7IHBpY2s6ICdsYXN0JywgfVxuICAgICAgICBvcmRlcmluZyAgPSBbXVxuICAgICAgICBqZXQucHVzaCBhID0gKCBkICkgLT4gb3JkZXJpbmcucHVzaCBcImEje2R9XCI7IHlpZWxkIGQgKiAyXG4gICAgICAgIGpldC5wdXNoIGIgPSAoIGQgKSAtPiBvcmRlcmluZy5wdXNoIFwiYiN7ZH1cIjsgeWllbGQgZCAqIDNcbiAgICAgICAgamV0LnB1c2ggYyA9ICggZCApIC0+IG9yZGVyaW5nLnB1c2ggXCJjI3tkfVwiOyB5aWVsZCBkICogNVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAgICAgKCDOqWp0c3RtXzExNCA9IC0+IFsgKCBqZXQud2FsaygpICkuLi4sIF0gICAgICAgICAgICAgICAgICAgICAgICAgICksIFtdXG4gICAgICAgIEBlcSAgICAgKCDOqWp0c3RtXzExNSA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiAgICksICcnXG4gICAgICAgIEB0aHJvd3MgKCDOqWp0c3RtXzExNiA9IC0+IGpldC5ydW4oKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9ubyByZXN1bHRzL1xuICAgICAgICBAZXEgICAgICggzqlqdHN0bV8xMTcgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgICApLCAnJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmYWxsYmFjayAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtIHsgcGljazogJ2ZpcnN0JywgZmFsbGJhY2ssIH1cbiAgICAgICAgb3JkZXJpbmcgID0gW11cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtXzExOCA9IC0+IFsgKCBqZXQud2FsaygpICkuLi4sIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbXVxuICAgICAgICBAZXEgKCDOqWp0c3RtXzExOSA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiAgICAgICApLCAnJ1xuICAgICAgICBAZXEgKCDOqWp0c3RtXzEyMCA9IC0+IGpldC5ydW4oKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxsYmFja1xuICAgICAgICBAZXEgKCDOqWp0c3RtXzEyMSA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiAgICAgICApLCAnJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmYWxsYmFjayAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtIHsgcGljazogJ2ZpcnN0JywgZmFsbGJhY2ssIH1cbiAgICAgICAgb3JkZXJpbmcgID0gW11cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtXzEyMiA9IC0+IFsgKCBqZXQud2FsayAxLCAyLCAzICkuLi4sIF0gICAgICAgICAgICAgICAgICAgICAgICApLCBbIDEsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV8xMjMgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgICAgICAgKSwgJydcbiAgICAgICAgQGVxICggzqlqdHN0bV8xMjQgPSAtPiBqZXQucnVuIDEsIDIsIDMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMVxuICAgICAgICBAZXEgKCDOqWp0c3RtXzEyNSA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiAgICAgICApLCAnJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmYWxsYmFjayAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtIHsgcGljazogJ2xhc3QnLCBmYWxsYmFjaywgfVxuICAgICAgICBvcmRlcmluZyAgPSBbXVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTI2ID0gLT4gWyAoIGpldC53YWxrIDEsIDIsIDMgKS4uLiwgXSAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtXzEyNyA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiAgICAgICApLCAnJ1xuICAgICAgICBAZXEgKCDOqWp0c3RtXzEyOCA9IC0+IGpldC5ydW4gMSwgMiwgMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAzXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTI5ID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICAgICAgICksICcnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEB0YXNrc1xuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgamV0c3RyZWFtXzE6IEB0YXNrcy5qZXRzdHJlYW1fMSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGNvbmZpZ3VyZV90cmFuc2Zvcm1zOiBAdGFza3MuY29uZmlndXJlX3RyYW5zZm9ybXMsIH1cbiJdfQ==
