(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, demo_async, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

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
          return p_3.pick_first('my-data');
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
        var accept_all, cues, data, k, len, nrm_sel, p, probe, sel, sel_list, sel_rpr, Ωjtstm__32, Ωjtstm__33, Ωjtstm__34, Ωjtstm__35, Ωjtstm__36, Ωjtstm__37, Ωjtstm__38;
        for (k = 0, len = probes_and_matchers.length; k < len; k++) {
          p = probes_and_matchers[k];
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
        var display_matcher, entry, item, k, l, len, len1, line, nrm, result, selector, Ωjtstm__39;
        display_matcher = true;
        display_matcher = false;
        for (k = 0, len = selectors_and_selections.length; k < len; k++) {
          entry = selectors_and_selections[k];
          selector = new Selector(entry.sel);
          nrm = [...(normalize_selectors(entry.sel))].join(',');
          line = {
            sel: entry.sel,
            nrm
          };
          for (l = 0, len1 = stream_items.length; l < len1; l++) {
            item = stream_items[l];
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
      (() => {        //.....................................................................................................
        var apppend, jet, prepend, Ωjtstm__40;
        jet = new Jetstream();
        jet.push(prepend = function*(d) {
          return (yield '(' + d);
        });
        jet.push(apppend = function*(d) {
          return (yield d + ')');
        });
        this.eq((Ωjtstm__40 = function() {
          return jet.pick_first('string');
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
          return jet.pick_first();
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
      (() => {        //.....................................................................................................
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
        var a, b, c, jet, ordering, Ωjtstm__96, Ωjtstm__97, Ωjtstm__98, Ωjtstm__99;
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
        this.eq((Ωjtstm__96 = function() {
          return [...(jet.walk())];
        }), []);
        this.eq((Ωjtstm__97 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        this.throws((Ωjtstm__98 = function() {
          return jet.run();
        }), /no results/);
        this.eq((Ωjtstm__99 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        return null;
      })();
      (() => {        //.....................................................................................................
        var a, b, c, jet, ordering, Ωjtstm_100, Ωjtstm_101, Ωjtstm_102, Ωjtstm_103;
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
        this.eq((Ωjtstm_100 = function() {
          return [...(jet.walk())];
        }), []);
        this.eq((Ωjtstm_101 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        this.throws((Ωjtstm_102 = function() {
          return jet.run();
        }), /no results/);
        this.eq((Ωjtstm_103 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        return null;
      })();
      (() => {        //.....................................................................................................
        var fallback, jet, ordering, Ωjtstm_104, Ωjtstm_105, Ωjtstm_106, Ωjtstm_107;
        fallback = Symbol('fallback');
        jet = new Jetstream({
          pick: 'first',
          fallback
        });
        ordering = [];
        //...................................................................................................
        this.eq((Ωjtstm_104 = function() {
          return [...(jet.walk())];
        }), []);
        this.eq((Ωjtstm_105 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        this.eq((Ωjtstm_106 = function() {
          return jet.run();
        }), fallback);
        this.eq((Ωjtstm_107 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        return null;
      })();
      (() => {        //.....................................................................................................
        var fallback, jet, ordering, Ωjtstm_108, Ωjtstm_109, Ωjtstm_110, Ωjtstm_111;
        fallback = Symbol('fallback');
        jet = new Jetstream({
          pick: 'first',
          fallback
        });
        ordering = [];
        //...................................................................................................
        this.eq((Ωjtstm_108 = function() {
          return [...(jet.walk(1, 2, 3))];
        }), [1]);
        this.eq((Ωjtstm_109 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        this.eq((Ωjtstm_110 = function() {
          return jet.run(1, 2, 3);
        }), 1);
        this.eq((Ωjtstm_111 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        return null;
      })();
      (() => {        //.....................................................................................................
        var fallback, jet, ordering, Ωjtstm_112, Ωjtstm_113, Ωjtstm_114, Ωjtstm_115;
        fallback = Symbol('fallback');
        jet = new Jetstream({
          pick: 'last',
          fallback
        });
        ordering = [];
        //...................................................................................................
        this.eq((Ωjtstm_112 = function() {
          return [...(jet.walk(1, 2, 3))];
        }), [3]);
        this.eq((Ωjtstm_113 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        this.eq((Ωjtstm_114 = function() {
          return jet.run(1, 2, 3);
        }), 3);
        this.eq((Ωjtstm_115 = function() {
          var R;
          R = ordering.join(' ');
          ordering.length = 0;
          return R;
        }), '');
        return null;
      })();
      (() => {        //.....................................................................................................
        var fallback, jet, Ωjtstm_116, Ωjtstm_117, Ωjtstm_118, Ωjtstm_119;
        fallback = null;
        jet = new Jetstream({fallback});
        jet.push(function*(d) {
          yield 10 + d;
          yield 20 + d;
          return null;
        });
        //...................................................................................................
        this.eq((Ωjtstm_116 = function() {
          return jet.pick_first(1, 2, 3);
        }), 11);
        this.eq((Ωjtstm_117 = function() {
          return jet.pick_last(1, 2, 3);
        }), 23);
        this.eq((Ωjtstm_118 = function() {
          return jet.pick_first();
        }), fallback);
        this.eq((Ωjtstm_119 = function() {
          return jet.pick_last();
        }), fallback);
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    jetstream_cue: function() {
      var Jetstream, SFMODULES, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, internals} = SFMODULES.require_jetstream());
      (() => {        //.....................................................................................................
        var fallback, jet, Ωjtstm_121, Ωjtstm_122;
        fallback = Symbol('fallback');
        jet = new Jetstream({
          fallback,
          outlet: '*'
        });
        jet.push('*', function*(d) {
          help('Ωjtstm_120', d);
          yield d;
          return null;
        });
        jet.cue('first');
        this.eq((Ωjtstm_121 = function() {
          return jet.shelf;
        }), [Symbol.for('first')]);
        this.eq((Ωjtstm_122 = function() {
          return jet.pick_first();
        }), Symbol.for('first'));
        return null;
      })();
      (() => {        //.....................................................................................................
        var fallback, jet, Ωjtstm_124, Ωjtstm_125, Ωjtstm_126, Ωjtstm_127;
        fallback = Symbol('fallback');
        jet = new Jetstream({
          fallback,
          outlet: '*'
        });
        jet.push('*', function*(d) {
          help('Ωjtstm_123', d);
          if (d === Symbol.for('first')) {
            jet.cue('other-start');
            jet.send(5);
            jet.cue('other-end');
          }
          yield d;
          return null;
        });
        jet.cue('first');
        this.eq((Ωjtstm_124 = function() {
          return jet.shelf;
        }), [Symbol.for('first')]);
        this.eq((Ωjtstm_125 = function() {
          return jet.pick_first();
        }), Symbol.for('first'));
        this.eq((Ωjtstm_126 = function() {
          return jet.pick_all();
        }), []);
        this.eq((Ωjtstm_127 = function() {
          return jet.pick_all(Symbol.for('first'));
        }), [Symbol.for('first'), Symbol.for('other-start'), 5, Symbol.for('other-end')]);
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    async_jetstream: async function() {
      var Async_jetstream, Jetstream, SFMODULES, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, Async_jetstream, internals} = SFMODULES.require_jetstream());
      await (async() => {        //.....................................................................................................
        var stream;
        stream = new Async_jetstream();
        debug('Ωjtstm_128', stream);
        stream.push(async function*(d) {
          await GUY.async.sleep(0.05);
          return (yield d * 2);
        });
        // debug 'Ωjtstm_129', stream.run 123, 555
        debug('Ωjtstm_130', (await stream.run(123, 555)));
        debug('Ωjtstm_131', (await stream.pick_first(123, 555)));
        debug('Ωjtstm_132', (await stream.pick_last(123, 555)));
        return null;
      })();
      await (() => {        //.....................................................................................................
        var stream, tfm, Ωjtstm_134, Ωjtstm_135;
        stream = new Jetstream();
        tfm = async function*(d) {
          return (yield (await d));
        };
        this.eq((Ωjtstm_134 = function() {
          return internals.type_of(tfm);
        }), 'asyncgeneratorfunction');
        this.throws((Ωjtstm_135 = function() {
          return stream.push(tfm);
        }), /cannot use async transform in sync jetstream, got a asyncgeneratorfunction/);
        // debug 'Ωjtstm_136', stream.run 1
        return null;
      })();
      //.....................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  demo_async = async function() {
    var i, j, n, sleep, value;
    ({sleep} = GUY.async);
    //.........................................................................................................
    f = async function*() {
      yield 1;
      await sleep(0.25);
      yield 2;
      return null;
    };
    //.........................................................................................................
    i = async function*() {
      yield* (await f()); // -> yield* ( await f() )
      return null;
    };
    //.........................................................................................................
    j = async function*() {
      var value;
      for await (value of f()) {
        yield value;
      }
      return null;
    };
//.........................................................................................................
    for await (value of f()) {
      debug('Ωjtstm_137', value);
    }
    //.........................................................................................................
    whisper('————————————————————————————————————–');
    help(i);
    help(i());
    help((await i));
    help((await i()));
    whisper('————————————————————————————————————–');
    help(j);
    help(j());
    help((await j));
    help((await j()));
    whisper('————————————————————————————————————–');
    for await (n of i()) {
      debug('Ωjtstm_138', n);
    }
    for await (n of j()) {
      debug('Ωjtstm_139', n);
    }
    /*

    for       value from       gf()
    for await value from async_gf()

    JS `yield* ...` translates to CS `yield from` and is as inseparable as `yield*`

          yield from       gf()
    await yield from async_gf()

    yield from             gf()
    yield from await async_gf()

    */
    //.........................................................................................................
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
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
      await (new Test(guytest_cfg)).async_test(this.tasks);
      // await ( new Test guytest_cfg ).async_test { jetstream_1: @tasks.jetstream_1, }
      return (await (new Test(guytest_cfg)).async_test({
        async_jetstream: this.tasks.async_jetstream
      }));
    })();
  }

  // await demo_async()

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtamV0c3RyZWFtLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTs7RUFFQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLGlDQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFaQTs7O0VBa0JBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBcEJBOzs7OztFQTJCQSxJQUFDLENBQUEsS0FBRCxHQUdJLENBQUE7O0lBQUEsV0FBQSxFQUFhLFFBQUEsQ0FBQSxDQUFBO0FBQ2pCLFVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsT0FBQSxFQUFBLFVBQUEsRUFBQTtNQUFNLFNBQUEsR0FBOEIsT0FBQSxDQUFRLG1DQUFSO01BQzlCLENBQUEsQ0FBRSxPQUFG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cEI7SUFERjtJQUVBLG9CQUFBO01BQ0UsS0FBQSxDQUFNLFlBQU4sRUFBb0IsQ0FBcEI7SUFERixDQW5DRjs7Ozs7Ozs7Ozs7Ozs7OztXQXFERztFQXREVSxFQWpzQmI7OztFQTJ2QkEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxNQUFNLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsVUFBekIsQ0FBb0MsSUFBQyxDQUFBLEtBQXJDLEVBRlI7O2FBSUUsQ0FBQSxNQUFNLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsVUFBekIsQ0FBb0M7UUFBRSxlQUFBLEVBQWlCLElBQUMsQ0FBQSxLQUFLLENBQUM7TUFBMUIsQ0FBcEMsQ0FBTjtJQUxzQyxDQUFBLElBQXhDOzs7RUEzdkJBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1zZm1vZHVsZXMvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0YXNrcyA9XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGpldHN0cmVhbV8xOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6panRzdG1fX18xID0gLT4gdHlwZV9vZiAoIG5ldyBKZXRzdHJlYW0oKSApICAgICAgICAgICAgICApLCAnb2JqZWN0J1xuICAgICAgQGVxICggzqlqdHN0bV9fXzIgPSAtPiB0eXBlX29mICggbmV3IEpldHN0cmVhbSgpICkud2FsayAnZGF0YScgICksICdnZW5lcmF0b3InXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZpcnN0ICAgICA9IHsgJ2ZpcnN0JywgIH1cbiAgICAgICAgbGFzdCAgICAgID0geyAnbGFzdCcsICAgfVxuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtX19fMyA9IC0+IGpldC5sZW5ndGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAwXG4gICAgICAgIEBlcSAoIM6panRzdG1fX180ID0gLT4gamV0LmlzX2VtcHR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB3YXRjaGVkXzEgPSBbXVxuICAgICAgICB3YXRjaGVkXzIgPSBbXVxuICAgICAgICB3YXRjaGVkXzMgPSBbXVxuICAgICAgICB3YXRjaGVkXzQgPSBbXVxuICAgICAgICBqZXQucHVzaCB3YXRjaCA9ICggZCAgICAgICAgICAgICAgKSAtPiBoZWxwICfOqWp0c3RtX19fNScsIHJwciBkOyB3YXRjaGVkXzEucHVzaCBkXG4gICAgICAgIGpldC5wdXNoIHVwcGVyID0gKCBkICAgICAgICAgICAgICApIC0+XG4gICAgICAgICAgcmV0dXJuIHlpZWxkIGQgdW5sZXNzICggdHlwZW9mIGQgKSBpcyAnc3RyaW5nJ1xuICAgICAgICAgIHlpZWxkIGQudG9VcHBlckNhc2UoKVxuICAgICAgICBqZXQucHVzaCB3YXRjaCA9ICggZCAgICAgICAgICAgICAgKSAtPiBpbmZvICfOqWp0c3RtX19fNicsIHJwciBkOyB3YXRjaGVkXzIucHVzaCBkXG4gICAgICAgIGpldC5wdXNoIGV4ICAgID0gKCBkLCBtYXJrID0gJyEnICApIC0+XG4gICAgICAgICAgcmV0dXJuIHlpZWxkIGQgaWYgZCBpbiBbIGZpcnN0LCBsYXN0LCBdXG4gICAgICAgICAgeWllbGQgZCArIG1hcmtcbiAgICAgICAgamV0LnB1c2ggd2F0Y2ggPSAoIGQgICAgICAgICAgICAgICkgLT4gaGVscCAnzqlqdHN0bV9fXzcnLCBycHIgZDsgd2F0Y2hlZF8zLnB1c2ggZFxuICAgICAgICBqZXQucHVzaCBzdXJyb3VuZCA9ICggZCApIC0+XG4gICAgICAgICAgcmV0dXJuIHlpZWxkIFwiXCJcIkxldCdzIHNheTogXFxcIlwiXCJcIiAgaWYgZCBpcyBmaXJzdFxuICAgICAgICAgIHJldHVybiB5aWVsZCAnXCIuJyAgICAgICAgICAgICAgICAgaWYgZCBpcyBsYXN0XG4gICAgICAgICAgeWllbGQgZFxuICAgICAgICBqZXQucHVzaCBmaWx0ZXIgPSAoIGQgICAgICAgICAgICAgICkgLT4geWllbGQgZCB1bmxlc3MgZCBpbiBbIGZpcnN0LCBsYXN0LCBdXG4gICAgICAgIGpldC5wdXNoIHdhdGNoICA9ICggZCAgICAgICAgICAgICAgKSAtPiB1cmdlICfOqWp0c3RtX19fOCcsIHJwciBkOyB3YXRjaGVkXzQucHVzaCBkXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV9fXzkgPSAtPiBqZXQubGVuZ3RoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCA4XG4gICAgICAgIEBlcSAoIM6panRzdG1fXzEwID0gLT4gamV0LmlzX2VtcHR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICAgQGVxICggzqlqdHN0bV9fMTEgPSAtPiBqZXQuc2VuZCBmaXJzdCwgJ2hpZGV5LWhvJywgbGFzdCAgICAgICAgICAgICAgICAgICAgICAgICApLCBudWxsXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzEyID0gLT4gWyAoIGQgZm9yIGQgZnJvbSBqZXQud2FsaygpICkuLi4sIF0gICAgICAgICAgICAgICAgICAgICAgKSwgWyBcIlwiXCJMZXQncyBzYXk6IFxcXCJcIlwiXCIsICdISURFWS1ITyEnLCAnXCIuJyBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzEzID0gLT4gd2F0Y2hlZF8xICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyBmaXJzdCwgJ2hpZGV5LWhvJywgICBsYXN0LCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzE0ID0gLT4gd2F0Y2hlZF8yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyBmaXJzdCwgJ0hJREVZLUhPJywgICBsYXN0LCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzE1ID0gLT4gd2F0Y2hlZF8zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyBmaXJzdCwgJ0hJREVZLUhPIScsICBsYXN0LCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzE2ID0gLT4gd2F0Y2hlZF80ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyBcIlwiXCJMZXQncyBzYXk6IFxcXCJcIlwiXCIsICdISURFWS1ITyEnLCAnXCIuJyAgIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fMTcgPSAtPiBbICggZCBmb3IgZCBmcm9tIGpldC53YWxrIGZpcnN0LCAnaGlkZXktaG8nLCBsYXN0ICkuLi4sIF0uam9pbiAnJyAgICAgKSwgXCJcIlwiTGV0J3Mgc2F5OiBcIkhJREVZLUhPIVwiLlwiXCJcIlxuICAgICAgICBAZXEgKCDOqWp0c3RtX18xOCA9IC0+ICggICBkIGZvciBkIGZyb20gamV0LnJ1biAgZmlyc3QsICdoaWRleS1obycsIGxhc3QgICAgICAgKS5qb2luICcnICAgICApLCBcIlwiXCJMZXQncyBzYXk6IFwiSElERVktSE8hXCIuXCJcIlwiXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGpldHN0cmVhbV8yOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGpldC5wdXNoIGFkZF8xID0gKCBkICkgLT4geWllbGQgZCArIDFcbiAgICAgICAgamV0LnB1c2ggYWRkXzEgPSAoIGQgKSAtPiB5aWVsZCBkICsgMVxuICAgICAgICBqZXQucHVzaCBhZGRfMSA9ICggZCApIC0+IHlpZWxkIGQgKyAxXG4gICAgICAgIGpldC5wdXNoIGFkZF8xID0gKCBkICkgLT4geWllbGQgZCArIDFcbiAgICAgICAgamV0LnB1c2ggYWRkXzEgPSAoIGQgKSAtPiB5aWVsZCBkICsgMVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzE5ID0gLT4gWyAoIGQgZm9yIGQgZnJvbSBqZXQud2FsayAwICkuLi4sIF0gICAgICAgICAgKSwgWyA1LCBdXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGpldHN0cmVhbV8yOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgICMjIyBlbXB0eSBwaXBlbGluZSBpcyBhIHBpcGVsaW5lIHdpdGhvdXQgdHJhbnNmb3Jtcywgc28gZGF0YSBpcyBwYXNzZWQgdGhyb3VnaCB1bnRyYW5zZm9ybWVkOiAjIyNcbiAgICAgICAgQGVxICggzqlqdHN0bV9fMjAgPSAtPiBbICggKCBuZXcgSmV0c3RyZWFtKCkgKS53YWxrICdkYXRhJyApLi4uLCAgXSApLCBbICdkYXRhJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX18yMSA9IC0+ICAgICAoIG5ldyBKZXRzdHJlYW0oKSApLnJ1biAgJ2RhdGEnICAgICAgICAgICksIFsgJ2RhdGEnLCBdXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGpldHN0cmVhbV8zOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGNvbGxlY3RvciA9IFtdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcF8xID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIHBfMS5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMS10MSc7IHlpZWxkIGQgKyAnIOKEliAxJ1xuICAgICAgICBwXzEucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDEtdDInOyB5aWVsZCBkICsgJyDihJYgMidcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBwXzIgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgcF8yLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AyLXQxJzsgeWllbGQgZCArICcg4oSWIDMnXG4gICAgICAgIHBfMi5wdXNoIHBfMVxuICAgICAgICBwXzIucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDItdDInOyB5aWVsZCBkICsgJyDihJYgNCdcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBwXzMgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgcF8zLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AzLXQxJzsgeWllbGQgZCArICcg4oSWIDUnXG4gICAgICAgIHBfMy5wdXNoIHBfMlxuICAgICAgICBwXzMucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDMtdDInOyB5aWVsZCBkICsgJyDihJYgNidcbiAgICAgICAgQGVxICggzqlqdHN0bV9fMjIgPSAtPiBwXzMucnVuICAgICAgICAnbXktZGF0YScgKSwgWyAnbXktZGF0YSDihJYgNSDihJYgMyDihJYgMSDihJYgMiDihJYgNCDihJYgNicgLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzIzID0gLT4gY29sbGVjdG9yICAgICAgICAgICAgICAgICksIFsgJ3AzLXQxJywgJ3AyLXQxJywgJ3AxLXQxJywgJ3AxLXQyJywgJ3AyLXQyJywgJ3AzLXQyJyBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzI0ID0gLT4gcF8zLnBpY2tfZmlyc3QgICdteS1kYXRhJyApLCAnbXktZGF0YSDihJYgNSDihJYgMyDihJYgMSDihJYgMiDihJYgNCDihJYgNidcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgamV0c3RyZWFtXzM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgSmV0c3RyZWFtLFxuICAgICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT4gIyMjIHNhbWUgYXMgYWJvdmUgYnV0IHRoZSB0cmFuc2Zvcm1zIGFyZSBzZXBhcmF0ZSAjIyNcbiAgICAgICAgZmlyc3QgICAgICAgICA9IHsgJ2ZpcnN0JywgIH1cbiAgICAgICAgbGFzdCAgICAgICAgICA9IHsgJ2xhc3QnLCAgIH1cbiAgICAgICAgamV0ICAgICAgICAgICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBnMSAgICAgICAgICAgID0gKCBkICkgLT5cbiAgICAgICAgICB1cmdlICfOqWp0c3RtX18yNSBnMScsIGRcbiAgICAgICAgICBzd2l0Y2ggZFxuICAgICAgICAgICAgd2hlbiBmaXJzdFxuICAgICAgICAgICAgICB5aWVsZCBkXG4gICAgICAgICAgICAgIHlpZWxkIDBcbiAgICAgICAgICAgIHdoZW4gbGFzdFxuICAgICAgICAgICAgICB5aWVsZCAxXG4gICAgICAgICAgICAgIHlpZWxkIGRcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgeWllbGQgZCAqIDJcbiAgICAgICAgZzIgICAgICAgICAgICA9ICggZCApIC0+XG4gICAgICAgICAgdXJnZSAnzqlqdHN0bV9fMjYgZzInLCBkXG4gICAgICAgICAgc3dpdGNoIGRcbiAgICAgICAgICAgIHdoZW4gZmlyc3RcbiAgICAgICAgICAgICAgeWllbGQgZFxuICAgICAgICAgICAgICB5aWVsZCAwXG4gICAgICAgICAgICB3aGVuIGxhc3RcbiAgICAgICAgICAgICAgeWllbGQgMVxuICAgICAgICAgICAgICB5aWVsZCBkXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHlpZWxkIGQgKiAyXG4gICAgICAgIGpldC5wdXNoIGcxXG4gICAgICAgIGpldC5wdXNoIGcyXG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIGQgdW5sZXNzIGQgaW4gWyBmaXJzdCwgbGFzdCwgXVxuICAgICAgICBkZWJ1ZyAnzqlqdHN0bV9fMjcnLCBqZXRcbiAgICAgICAgd2hpc3BlciAnzqlqdHN0bV9fMjgnLCAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTJ1xuICAgICAgICBAZXEgKCDOqWp0c3RtX18yOSA9IC0+IGpldC5ydW4gZmlyc3QsIDIyLCBsYXN0ICAgICAgICAgICAgICAgICAgICksIFsgMCwgMCwgODgsIDIsIDEgXVxuICAgICAgICB3aGlzcGVyICfOqWp0c3RtX18zMCcsICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGpldHN0cmVhbV9zZWxlY3RvcnM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgSmV0c3RyZWFtLFxuICAgICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAgIHsgU2VsZWN0b3IsXG4gICAgICAgIF9ub3JtYWxpemVfc2VsZWN0b3JzLFxuICAgICAgICBub3JtYWxpemVfc2VsZWN0b3JzLFxuICAgICAgICBzZWxlY3RvcnNfYXNfbGlzdCxcbiAgICAgICAgaWRfZnJvbV9zeW1ib2wsICAgICAgICAgfSA9IGludGVybmFsc1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIEBlcSAoIM6panRzdG1fXzMxID0gLT4gdHlwZV9vZiAoIG5ldyBKZXRzdHJlYW0oKSApICAgICAgICAgICAgICApLCAnb2JqZWN0J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzdHJlYW1faXRlbXMgPSBbXG4gICAgICAgIFN5bWJvbCAnc3RhcnQnXG4gICAgICAgIFN5bWJvbCAnZW5kJ1xuICAgICAgICA3Ni45XG4gICAgICAgIFwiTWV4aWNvXCJcbiAgICAgICAgbnVsbFxuICAgICAgICBdXG4gICAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgICB7IHByb2JlOiAnY3VlJywgICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJ2N1ZScgICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjKicgICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJ2N1ZScsICAgICAgICAgICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiB0cnVlLCAgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgIH1cbiAgICAgICAgeyBwcm9iZTogJyMnLCAgICAgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcjJyAgICAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlIyonICAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcjJywgICAgICAgICAgICAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogdHJ1ZSwgICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsICB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBwcm9iZTogJ2N1ZSNlbmQnLCAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdjdWUjZW5kJyAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI2VuZCcgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICdjdWUjZW5kJywgICAgICAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnZW5kJyBdLCAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogJyNlbmQnLCAgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcjZW5kJyAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI2VuZCcgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcjZW5kJywgICAgICAgICAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnZW5kJyBdLCAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHByb2JlOiAnI2VuZCwjc3RhcnQsJywgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyNlbmQnLCAnI3N0YXJ0JywgJycgICBdLCBucm1fc2VsOiBbICdjdWUjZW5kJywgJ2N1ZSNzdGFydCcgXSwgc2VsX3JwcjogJyNlbmQsICNzdGFydCwgJywgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdlbmQnLCAnc3RhcnQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnI2VuZCwjc3RhcnQnLCAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyNlbmQnLCAnI3N0YXJ0JyAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjZW5kJywgJ2N1ZSNzdGFydCcgXSwgc2VsX3JwcjogJyNlbmQsICNzdGFydCcsICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdlbmQnLCAnc3RhcnQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcHJvYmU6ICdjdWUjZm9vI2JhcicsICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnY3VlI2ZvbyNiYXInICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNmb28jYmFyJyAgICAgICAgICBdLCBzZWxfcnByOiAnY3VlI2ZvbyNiYXInLCAgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ2ZvbyNiYXInIF0sICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICcjZm9vI2JhcicsICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnI2ZvbyNiYXInICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNmb28jYmFyJyAgICAgICAgICBdLCBzZWxfcnByOiAnI2ZvbyNiYXInLCAgICAgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ2ZvbyNiYXInIF0sICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBwcm9iZTogJ2N1ZSNzdGFydCcsICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdjdWUjc3RhcnQnICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI3N0YXJ0JyAgICAgICAgICAgIF0sIHNlbF9ycHI6ICdjdWUjc3RhcnQnLCAgICAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnc3RhcnQnIF0sICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogJyNzdGFydCcsICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcjc3RhcnQnICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI3N0YXJ0JyAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcjc3RhcnQnLCAgICAgICAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnc3RhcnQnIF0sICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHByb2JlOiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgc2VsX2xpc3Q6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgc2VsX3JwcjogJ2N1ZSNzdGFydCwgY3VlI2VuZCcsIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdzdGFydCcsICdlbmQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiBbICcjc3RhcnQnLCAnI2VuZCcgXSwgICAgICAgc2VsX2xpc3Q6IFsgJyNzdGFydCcsICcjZW5kJyAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgc2VsX3JwcjogJyNzdGFydCwgI2VuZCcsICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdzdGFydCcsICdlbmQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnY3VlI3N0YXJ0LGN1ZSNlbmQnLCAgICAgICAgc2VsX2xpc3Q6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgc2VsX3JwcjogJ2N1ZSNzdGFydCwgY3VlI2VuZCcsIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdzdGFydCcsICdlbmQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnI3N0YXJ0LCNlbmQnLCAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyNzdGFydCcsICcjZW5kJyAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgc2VsX3JwcjogJyNzdGFydCwgI2VuZCcsICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdzdGFydCcsICdlbmQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnIGN1ZSNzdGFydCwgY3VlI2VuZCAnLCAgICAgc2VsX2xpc3Q6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgc2VsX3JwcjogJ2N1ZSNzdGFydCwgY3VlI2VuZCcsIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdzdGFydCcsICdlbmQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcHJvYmU6IG51bGwsICAgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnJyAgICAgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnJywgICAgICAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogW10sICAgICAgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICAgICAgICAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJyAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcnLCAgICAgICAgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBmYWxzZSwgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiBbIFtdIF0sICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgICAgICAgICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJycsICAgICAgICAgICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IGZhbHNlLCAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6IFsgWyAnJyBdIF0sICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnJyAgICAgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnJywgICAgICAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogJ2RhdGEnLCAgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdkYXRhJyAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJyAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICdkYXRhJywgICAgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBmYWxzZSwgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnJywgICAgICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJycgICAgICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJycsICAgICAgICAgICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IGZhbHNlLCAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICdkYXRhIycsICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnZGF0YSMnICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnZGF0YSMnLCAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHByb2JlOiBbICdkYXRhJywgJ2N1ZScgXSwgICAgICAgICAgc2VsX2xpc3Q6IFsgJ2RhdGEnLCAnY3VlJyAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonLCAnY3VlIyonICAgICAgXSwgc2VsX3JwcjogJ2RhdGEsIGN1ZScsICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IHRydWUsICAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IHRydWUsICB9XG4gICAgICAgIHsgcHJvYmU6ICdkYXRhLCBjdWUnLCAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnZGF0YScsICdjdWUnICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicsICdjdWUjKicgICAgICBdLCBzZWxfcnByOiAnZGF0YSwgY3VlJywgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogdHJ1ZSwgICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogdHJ1ZSwgIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHByb2JlOiAnZGF0YSNmb28jYmFyJywgZXJyb3I6IC9JRHMgb24gZGF0YSBpdGVtcyBub3Qgc3VwcG9ydGVkLywgfVxuICAgICAgICBdXG4gICAgICBzZWxlY3RvcnNfYW5kX3NlbGVjdGlvbnMgPSBbXG4gICAgICAgIHsgc2VsOiAnY3VlJywgICAgICAgICAgICAgICAgICAgICAgbnJtOiAnY3VlIyonLCAgICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgeyBzZWw6ICcjJywgICAgICAgICAgICAgICAgICAgICAgICBucm06ICdjdWUjKicsICAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgc2VsOiAnY3VlI2VuZCcsICAgICAgICAgICAgICAgICAgbnJtOiAnY3VlI2VuZCcsICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiAnI2VuZCcsICAgICAgICAgICAgICAgICAgICAgbnJtOiAnY3VlI2VuZCcsICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBzZWw6ICcjZW5kLCNzdGFydCwnLCAgICAgICAgICAgICBucm06ICdjdWUjZW5kLGN1ZSNzdGFydCcsICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICB7IHNlbDogJyNlbmQsI3N0YXJ0JywgICAgICAgICAgICAgIG5ybTogJ2N1ZSNlbmQsY3VlI3N0YXJ0JywgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBzZWw6ICdjdWUjZm9vI2JhcicsICAgICAgICAgICAgICBucm06ICdjdWUjZm9vI2JhcicsICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiAnI2ZvbyNiYXInLCAgICAgICAgICAgICAgICAgbnJtOiAnY3VlI2ZvbyNiYXInLCAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgc2VsOiAnY3VlI3N0YXJ0JywgICAgICAgICAgICAgICAgbnJtOiAnY3VlI3N0YXJ0JywgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiAnI3N0YXJ0JywgICAgICAgICAgICAgICAgICAgbnJtOiAnY3VlI3N0YXJ0JywgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBzZWw6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBucm06ICdjdWUjc3RhcnQsY3VlI2VuZCcsICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICB7IHNlbDogWyAnI3N0YXJ0JywgJyNlbmQnIF0sICAgICAgIG5ybTogJ2N1ZSNzdGFydCxjdWUjZW5kJywgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiAnY3VlI3N0YXJ0LGN1ZSNlbmQnLCAgICAgICAgbnJtOiAnY3VlI3N0YXJ0LGN1ZSNlbmQnLCAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgeyBzZWw6ICcjc3RhcnQsI2VuZCcsICAgICAgICAgICAgICBucm06ICdjdWUjc3RhcnQsY3VlI2VuZCcsICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICB7IHNlbDogJyBjdWUjc3RhcnQsIGN1ZSNlbmQgJywgICAgIG5ybTogJ2N1ZSNzdGFydCxjdWUjZW5kJywgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBzZWw6IG51bGwsICAgICAgICAgICAgICAgICAgICAgICBucm06ICdkYXRhIyonLCAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgIHsgc2VsOiBbXSwgICAgICAgICAgICAgICAgICAgICAgICAgbnJtOiAnZGF0YSMqJywgICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiB0cnVlLCBcIidNZXhpY28nXCI6IHRydWUsIG51bGw6IHRydWUgfVxuICAgICAgICB7IHNlbDogWyBbXSBdLCAgICAgICAgICAgICAgICAgICAgIG5ybTogJ2RhdGEjKicsICAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgeyBzZWw6IFsgWyAnJyBdIF0sICAgICAgICAgICAgICAgICBucm06ICdkYXRhIyonLCAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgIHsgc2VsOiAnZGF0YScsICAgICAgICAgICAgICAgICAgICAgbnJtOiAnZGF0YSMqJywgICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiB0cnVlLCBcIidNZXhpY28nXCI6IHRydWUsIG51bGw6IHRydWUgfVxuICAgICAgICB7IHNlbDogJycsICAgICAgICAgICAgICAgICAgICAgICAgIG5ybTogJ2RhdGEjKicsICAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgeyBzZWw6ICdkYXRhIycsICAgICAgICAgICAgICAgICAgICBucm06ICdkYXRhIyonLCAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBzZWw6IFsgJ2RhdGEnLCAnY3VlJyBdLCAgICAgICAgICBucm06ICdkYXRhIyosY3VlIyonLCAgICAgICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiB0cnVlLCBcIidNZXhpY28nXCI6IHRydWUsIG51bGw6IHRydWUgfVxuICAgICAgICB7IHNlbDogJ2RhdGEsIGN1ZScsICAgICAgICAgICAgICAgIG5ybTogJ2RhdGEjKixjdWUjKicsICAgICAgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgIHsgc2VsOiAnKicsICAgICAgICAgICAgICAgICAgICAgICAgbnJtOiAnZGF0YSMqLGN1ZSMqJywgICAgICAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgXVxuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBkbyA9PlxuICAgICAgICBmb3IgcCBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICAgaWYgcC5lcnJvcj9cbiAgICAgICAgICAgIEB0aHJvd3MgKCDOqWp0c3RtX18zMiA9IC0+IG5ldyBTZWxlY3RvciBwLnByb2JlICksIHAuZXJyb3JcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgcHJvYmUgICAgICAgICAgID0gcC5wcm9iZVxuICAgICAgICAgIHNlbF9saXN0ICAgICAgICA9IHNlbGVjdG9yc19hc19saXN0ICAgcHJvYmVcbiAgICAgICAgICBucm1fc2VsICAgICAgICAgPSBbICggbm9ybWFsaXplX3NlbGVjdG9ycyBwcm9iZSApLi4uLCBdXG4gICAgICAgICAgc2VsICAgICAgICAgICAgID0gbmV3IFNlbGVjdG9yICAgICAgICBwcm9iZVxuICAgICAgICAgIHNlbF9ycHIgICAgICAgICA9IHNlbC50b1N0cmluZygpXG4gICAgICAgICAgeyBkYXRhLFxuICAgICAgICAgICAgY3VlcyxcbiAgICAgICAgICAgIGFjY2VwdF9hbGwsIH0gPSBzZWwuX2dldF9leGNlcnB0KClcbiAgICAgICAgICBkYXRhICAgICAgICAgICAgPSBbICggZGF0YSApLi4uLCBdIHVubGVzcyBkYXRhIGluIFsgdHJ1ZSwgZmFsc2UsIF1cbiAgICAgICAgICBjdWVzICAgICAgICAgICAgPSBbICggY3VlcyApLi4uLCBdIHVubGVzcyBjdWVzIGluIFsgdHJ1ZSwgZmFsc2UsIF1cbiAgICAgICAgICAjIGVjaG8geyBwcm9iZSwgc2VsX2xpc3QsIG5ybV9zZWwsIHNlbF9ycHIsIGRhdGEsIGN1ZXMsIGFjY2VwdF9hbGwsIH1cbiAgICAgICAgICBAZXEgKCDOqWp0c3RtX18zMyA9IC0+IHNlbF9saXN0ICAgICksIHAuc2VsX2xpc3RcbiAgICAgICAgICBAZXEgKCDOqWp0c3RtX18zNCA9IC0+IG5ybV9zZWwgICAgICksIHAubnJtX3NlbFxuICAgICAgICAgIEBlcSAoIM6panRzdG1fXzM1ID0gLT4gc2VsX3JwciAgICAgKSwgcC5zZWxfcnByXG4gICAgICAgICAgQGVxICggzqlqdHN0bV9fMzYgPSAtPiBkYXRhICAgICAgICApLCBwLmRhdGFcbiAgICAgICAgICBAZXEgKCDOqWp0c3RtX18zNyA9IC0+IGN1ZXMgICAgICAgICksIHAuY3Vlc1xuICAgICAgICAgIEBlcSAoIM6panRzdG1fXzM4ID0gLT4gYWNjZXB0X2FsbCAgKSwgcC5hY2NlcHRfYWxsXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGRvID0+XG4gICAgICAgIGRpc3BsYXlfbWF0Y2hlciA9IHRydWVcbiAgICAgICAgZGlzcGxheV9tYXRjaGVyID0gZmFsc2VcbiAgICAgICAgZm9yIGVudHJ5IGluIHNlbGVjdG9yc19hbmRfc2VsZWN0aW9uc1xuICAgICAgICAgIHNlbGVjdG9yICA9IG5ldyBTZWxlY3RvciBlbnRyeS5zZWxcbiAgICAgICAgICBucm0gICAgICAgPSBbICggbm9ybWFsaXplX3NlbGVjdG9ycyBlbnRyeS5zZWwgKS4uLiwgXS5qb2luICcsJ1xuICAgICAgICAgIGxpbmUgICAgICA9IHsgc2VsOiBlbnRyeS5zZWwsIG5ybSwgfVxuICAgICAgICAgIGZvciBpdGVtIGluIHN0cmVhbV9pdGVtc1xuICAgICAgICAgICAgcmVzdWx0ICAgICAgICAgICAgPSBzZWxlY3Rvci5zZWxlY3QgaXRlbVxuICAgICAgICAgICAgbGluZVsgcnByIGl0ZW0gXSAgPSBzZWxlY3Rvci5zZWxlY3QgaXRlbVxuICAgICAgICAgICAgdW5sZXNzIGRpc3BsYXlfbWF0Y2hlclxuICAgICAgICAgICAgICBpZiByZXN1bHQgaXNudCBlbnRyeVsgcnByIGl0ZW0gXVxuICAgICAgICAgICAgICAgIGVjaG8geyBzZWxlY3RvcjogZW50cnkuc2VsLCBucm0sIGl0ZW0sIHJlc3VsdCwgfVxuICAgICAgICAgICAgICBAZXEgKCDOqWp0c3RtX18zOSA9IC0+IHJlc3VsdCApLCBlbnRyeVsgcnByIGl0ZW0gXVxuICAgICAgICAgIGlmIGRpc3BsYXlfbWF0Y2hlclxuICAgICAgICAgICAgZWNobyBsaW5lXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGJ1aWxkX3BpcGVsaW5lczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBqZXQgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgamV0LnB1c2ggcHJlcGVuZCA9ICggZCApIC0+IHlpZWxkICcoJyArIGRcbiAgICAgICAgamV0LnB1c2ggYXBwcGVuZCA9ICggZCApIC0+IHlpZWxkIGQgKyAnKSdcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNDAgPSAtPiBqZXQucGlja19maXJzdCAnc3RyaW5nJyApLCAnKHN0cmluZyknXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGpldCA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBqZXQucHVzaCBwcmVwZW5kID0gKCBkICkgLT4geWllbGQgJygnICsgZFxuICAgICAgICBqZXQucHVzaCBhcHBwZW5kID0gKCBkICkgLT4geWllbGQgZCArICcpJ1xuICAgICAgICBAZXEgKCDOqWp0c3RtX180MSA9IC0+IGpldC5zZW5kICdzdHJpbmcnICApLCBudWxsXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzQyID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ3N0cmluZycsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNDMgPSAtPiBqZXQuc2VuZCAnb3RoZXInICApLCBudWxsXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzQ0ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ3N0cmluZycsICdvdGhlcicsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNDUgPSAtPiBqZXQucGlja19maXJzdCgpICAgICksICcoc3RyaW5nKSdcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNDYgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgW11cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNDcgPSAtPiBqZXQucnVuKCkgICAgICAgICAgKSwgW11cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgamV0ID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCAnKCcgKyBkXG4gICAgICAgIGpldC5wdXNoIGFwcHBlbmQgPSAoIGQgKSAtPiB5aWVsZCBkICsgJyknXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzQ4ID0gLT4gamV0LnNlbmQgJ3N0cmluZycgICksIG51bGxcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNDkgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAnc3RyaW5nJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX181MCA9IC0+IGpldC5zZW5kICdvdGhlcicgICksIG51bGxcbiAgICAgICAgaXRlcmF0b3IgPSBqZXQud2FsaygpXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzUxID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ3N0cmluZycsICdvdGhlcicsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNTIgPSAtPiBpdGVyYXRvci5uZXh0KCkgICAgKSwgeyBkb25lOiBmYWxzZSwgIHZhbHVlOiAnKHN0cmluZyknLCB9XG4gICAgICAgIEBlcSAoIM6panRzdG1fXzUzID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ290aGVyJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX181NCA9IC0+IGl0ZXJhdG9yLm5leHQoKSAgICApLCB7IGRvbmU6IGZhbHNlLCAgdmFsdWU6ICcob3RoZXIpJywgfVxuICAgICAgICBAZXEgKCDOqWp0c3RtX181NSA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX181NiA9IC0+IGl0ZXJhdG9yLm5leHQoKSAgICApLCB7IGRvbmU6IHRydWUsICAgdmFsdWU6IG51bGwsIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgamV0ID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCAnKCcgKyBkXG4gICAgICAgIGpldC5wdXNoIGFwcHBlbmQgPSAoIGQgKSAtPiB5aWVsZCBkICsgJyknXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzU3ID0gLT4gamV0LnNlbmQgJ3N0cmluZycgICksIG51bGxcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNTggPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAnc3RyaW5nJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX181OSA9IC0+IGpldC5zZW5kICdvdGhlcicgICksIG51bGxcbiAgICAgICAgaXRlcmF0b3IgPSBqZXQud2FsayAndHJvaXMnLCAncXVhdHJlJ1xuICAgICAgICBAZXEgKCDOqWp0c3RtX182MCA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbICdzdHJpbmcnLCAnb3RoZXInLCAndHJvaXMnLCAncXVhdHJlJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX182MSA9IC0+IGl0ZXJhdG9yLm5leHQoKSAgICApLCB7IGRvbmU6IGZhbHNlLCAgdmFsdWU6ICcoc3RyaW5nKScsIH1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNjIgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAnb3RoZXInLCAndHJvaXMnLCAncXVhdHJlJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX182MyA9IC0+IGl0ZXJhdG9yLm5leHQoKSAgICApLCB7IGRvbmU6IGZhbHNlLCAgdmFsdWU6ICcob3RoZXIpJywgfVxuICAgICAgICBAZXEgKCDOqWp0c3RtX182NCA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbICd0cm9pcycsICdxdWF0cmUnLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzY1ID0gLT4gaXRlcmF0b3IubmV4dCgpICAgICksIHsgZG9uZTogZmFsc2UsICB2YWx1ZTogJyh0cm9pcyknLCB9XG4gICAgICAgIEBlcSAoIM6panRzdG1fXzY2ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ3F1YXRyZScsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNjcgPSAtPiBpdGVyYXRvci5uZXh0KCkgICAgKSwgeyBkb25lOiBmYWxzZSwgIHZhbHVlOiAnKHF1YXRyZSknLCB9XG4gICAgICAgIEBlcSAoIM6panRzdG1fXzY4ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFtdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzY5ID0gLT4gaXRlcmF0b3IubmV4dCgpICAgICksIHsgZG9uZTogdHJ1ZSwgICB2YWx1ZTogbnVsbCwgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25maWd1cmVfdHJhbnNmb3JtczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmaXJzdCA9IFN5bWJvbCAnZmlyc3QnXG4gICAgICAgIGxhc3QgID0gU3ltYm9sICdsYXN0J1xuICAgICAgICBqZXQgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgXCIqI3tkfSpcIlxuICAgICAgICBqZXQucHVzaCAnI2ZpcnN0JywgcHJlcGVuZCA9ICggZCApIC0+XG4gICAgICAgICAgcmV0dXJuIHlpZWxkIGZyb20gWyBkLCAnKCcsIF0gaWYgZCBpcyBmaXJzdFxuICAgICAgICAgIHlpZWxkICdlcnJvciMxJ1xuICAgICAgICBqZXQucHVzaCAnI2xhc3QnLCBhcHBlbmQgPSAoIGQgKSAtPlxuICAgICAgICAgIHJldHVybiB5aWVsZCBmcm9tIFsgJyknLCBkLCBdIGlmIGQgaXMgbGFzdFxuICAgICAgICAgIHlpZWxkICdlcnJvciMyJ1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzcwID0gLT4gamV0LnJ1biBmaXJzdCwgJ2JpcmRpc3RoZXdvcmQnLCBsYXN0ICksIFsgJygnLCAnKmJpcmRpc3RoZXdvcmQqJywgJyknLCBdXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZpcnN0ID0gU3ltYm9sICdmaXJzdCdcbiAgICAgICAgbGFzdCAgPSBTeW1ib2wgJ2xhc3QnXG4gICAgICAgIGpldCAgID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIFwiKiN7ZH0qXCJcbiAgICAgICAgamV0LnB1c2ggJyNmaXJzdCcsIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgZCwgJygnLCBdOyBudWxsXG4gICAgICAgIGpldC5wdXNoICcjbGFzdCcsICBhcHBlbmQgID0gKCBkICkgLT4geWllbGQgZnJvbSBbICcpJywgZCwgXTsgbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzcxID0gLT4gamV0LnJ1biBmaXJzdCwgJ2JpcmRpc3RoZXdvcmQnLCBsYXN0ICksIFsgJygnLCAnKmJpcmRpc3RoZXdvcmQqJywgJyknLCBdXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZpcnN0ID0gU3ltYm9sICdmaXJzdCdcbiAgICAgICAgbGFzdCAgPSBTeW1ib2wgJ2xhc3QnXG4gICAgICAgIGpldCAgID0gbmV3IEpldHN0cmVhbSB7IG91dGxldDogJ2RhdGEsY3VlJywgfVxuICAgICAgICBqZXQucHVzaCAoIGQgKSAtPiB5aWVsZCBcIioje2R9KlwiXG4gICAgICAgIGpldC5wdXNoICcjZmlyc3QnLCBwcmVwZW5kID0gKCBkICkgLT4geWllbGQgZnJvbSBbIGQsICcoJywgXTsgbnVsbFxuICAgICAgICBqZXQucHVzaCAnI2xhc3QnLCAgYXBwZW5kICA9ICggZCApIC0+IHlpZWxkIGZyb20gWyAnKScsIGQsIF07IG51bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtX183MiA9IC0+IGpldC5ydW4gZmlyc3QsICdiaXJkaXN0aGV3b3JkJywgbGFzdCApLCBbIGZpcnN0LCAnKCcsICcqYmlyZGlzdGhld29yZConLCAnKScsIGxhc3QsIF1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmlyc3QgPSBTeW1ib2wgJ2ZpcnN0J1xuICAgICAgICBsYXN0ICA9IFN5bWJvbCAnbGFzdCdcbiAgICAgICAgamV0ICAgPSBuZXcgSmV0c3RyZWFtIHsgb3V0bGV0OiAnKicsIH1cbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgXCIqI3tkfSpcIlxuICAgICAgICBqZXQucHVzaCAnI2ZpcnN0JywgcHJlcGVuZCA9ICggZCApIC0+IHlpZWxkIGZyb20gWyBkLCAnKCcsIF07IG51bGxcbiAgICAgICAgamV0LnB1c2ggJyNsYXN0JywgIGFwcGVuZCAgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgJyknLCBkLCBdOyBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNzMgPSAtPiBqZXQucnVuIGZpcnN0LCAnYmlyZGlzdGhld29yZCcsIGxhc3QgKSwgWyBmaXJzdCwgJygnLCAnKmJpcmRpc3RoZXdvcmQqJywgJyknLCBsYXN0LCBdXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZpcnN0ID0gU3ltYm9sICdmaXJzdCdcbiAgICAgICAgbGFzdCAgPSBTeW1ib2wgJ2xhc3QnXG4gICAgICAgIGpldCAgID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIFwiKiN7ZH0qXCJcbiAgICAgICAgamV0LnB1c2ggJyNmaXJzdCcsIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgZCwgJygnLCBdOyBudWxsXG4gICAgICAgIGpldC5wdXNoICcjbGFzdCcsICBhcHBlbmQgID0gKCBkICkgLT4geWllbGQgZnJvbSBbICcpJywgZCwgXTsgbnVsbFxuICAgICAgICBqZXQuY29uZmlndXJlIHsgb3V0bGV0OiAnKicsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtX183NCA9IC0+IGpldC5ydW4gZmlyc3QsICdiaXJkaXN0aGV3b3JkJywgbGFzdCApLCBbIGZpcnN0LCAnKCcsICcqYmlyZGlzdGhld29yZConLCAnKScsIGxhc3QsIF1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmlyc3QgPSBTeW1ib2wgJ2ZpcnN0J1xuICAgICAgICBsYXN0ICA9IFN5bWJvbCAnbGFzdCdcbiAgICAgICAgamV0ICAgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgXCIqI3tkfSpcIlxuICAgICAgICBqZXQucHVzaCAnI2ZpcnN0JywgcHJlcGVuZCA9ICggZCApIC0+IHlpZWxkIGZyb20gWyBkLCAnKCcsIF07IG51bGxcbiAgICAgICAgamV0LnB1c2ggJyNsYXN0JywgIGFwcGVuZCAgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgJyknLCBkLCBdOyBudWxsXG4gICAgICAgIGpldC5jb25maWd1cmUgeyBwaWNrOiAnZmlyc3QnLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNzUgPSAtPiBqZXQucnVuIGZpcnN0LCAnYmlyZGlzdGhld29yZCcsIGxhc3QgKSwgJygnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZpcnN0ID0gU3ltYm9sICdmaXJzdCdcbiAgICAgICAgbGFzdCAgPSBTeW1ib2wgJ2xhc3QnXG4gICAgICAgIGpldCAgID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIFwiKiN7ZH0qXCJcbiAgICAgICAgamV0LnB1c2ggJyNmaXJzdCcsIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgZCwgJygnLCBdOyBudWxsXG4gICAgICAgIGpldC5wdXNoICcjbGFzdCcsICBhcHBlbmQgID0gKCBkICkgLT4geWllbGQgZnJvbSBbICcpJywgZCwgXTsgbnVsbFxuICAgICAgICBqZXQuY29uZmlndXJlIHsgb3V0bGV0OiAnZGF0YSxjdWUnLCBwaWNrOiAnZmlyc3QnLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNzYgPSAtPiBqZXQucnVuIGZpcnN0LCAnYmlyZGlzdGhld29yZCcsIGxhc3QgKSwgZmlyc3RcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmlyc3QgPSBTeW1ib2wgJ2ZpcnN0J1xuICAgICAgICBsYXN0ICA9IFN5bWJvbCAnbGFzdCdcbiAgICAgICAgamV0ICAgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgXCIqI3tkfSpcIlxuICAgICAgICBqZXQucHVzaCAnI2ZpcnN0JywgcHJlcGVuZCA9ICggZCApIC0+IHlpZWxkIGZyb20gWyBkLCAnKCcsIF07IG51bGxcbiAgICAgICAgamV0LnB1c2ggJyNsYXN0JywgIGFwcGVuZCAgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgJyknLCBkLCBdOyBudWxsXG4gICAgICAgIGpldC5jb25maWd1cmUgeyBwaWNrOiAnbGFzdCcsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtX183NyA9IC0+IGpldC5jZmcucGljayAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2xhc3QnXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzc4ID0gLT4gamV0LnJ1biBmaXJzdCwgJ2JpcmRpc3RoZXdvcmQnLCBsYXN0ICApLCAnKSdcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmlyc3QgPSBTeW1ib2wgJ2ZpcnN0J1xuICAgICAgICBsYXN0ICA9IFN5bWJvbCAnbGFzdCdcbiAgICAgICAgamV0ICAgPSBuZXcgSmV0c3RyZWFtIHsgcGljazogJ2ZpcnN0JywgfVxuICAgICAgICBqZXQucHVzaCAoIGQgKSAtPiB5aWVsZCBcIioje2R9KlwiXG4gICAgICAgIGpldC5wdXNoICcjZmlyc3QnLCBwcmVwZW5kID0gKCBkICkgLT4geWllbGQgZnJvbSBbIGQsICcoJywgXTsgbnVsbFxuICAgICAgICBqZXQucHVzaCAnI2xhc3QnLCAgYXBwZW5kICA9ICggZCApIC0+IHlpZWxkIGZyb20gWyAnKScsIGQsIF07IG51bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAdGhyb3dzICggzqlqdHN0bV9fNzkgPSAtPiBqZXQucnVuKCkgKSwgL25vIHJlc3VsdHMvXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZhbGxiYWNrICA9IFN5bWJvbCAnZmFsbGJhY2snXG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0geyBwaWNrOiAnZmlyc3QnLCBmYWxsYmFjaywgfVxuICAgICAgICBqZXQucHVzaCAoIGQgKSAtPiB5aWVsZCBcIioje2R9KlwiXG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIGZyb20gWyBkLCAnKCcsIF07IG51bGxcbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgZnJvbSBbICcpJywgZCwgXTsgbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzgwID0gLT4gamV0LnJ1bigpICksIGZhbGxiYWNrXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZhbGxiYWNrICA9IFN5bWJvbCAnZmFsbGJhY2snXG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0geyBwaWNrOiAnZmlyc3QnLCBmYWxsYmFjaywgfVxuICAgICAgICBvcmRlcmluZyAgPSBbXVxuICAgICAgICBqZXQucHVzaCBhID0gKCBkICkgLT4gb3JkZXJpbmcucHVzaCBcImEje2R9XCI7IHlpZWxkIGQgKiAyXG4gICAgICAgIGpldC5wdXNoIGIgPSAoIGQgKSAtPiBvcmRlcmluZy5wdXNoIFwiYiN7ZH1cIjsgeWllbGQgZCAqIDNcbiAgICAgICAgamV0LnB1c2ggYyA9ICggZCApIC0+IG9yZGVyaW5nLnB1c2ggXCJjI3tkfVwiOyB5aWVsZCBkICogNVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzgxID0gLT4gWyAoIGpldC53YWxrIDEsIDIsIDMgKS4uLiwgXSAgICAgICAgICAgICAgICAgICksIFsgMzAsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fODIgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgKSwgJ2ExIGIyIGM2IGEyIGI0IGMxMiBhMyBiNiBjMTgnXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzgzID0gLT4gamV0LnJ1biAxLCAyLCAzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDMwXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzg0ID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICksICdhMSBiMiBjNiBhMiBiNCBjMTIgYTMgYjYgYzE4J1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmYWxsYmFjayAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtIHsgcGljazogJ2xhc3QnLCBmYWxsYmFjaywgfVxuICAgICAgICBvcmRlcmluZyAgPSBbXVxuICAgICAgICBqZXQucHVzaCBhID0gKCBkICkgLT4gb3JkZXJpbmcucHVzaCBcImEje2R9XCI7IHlpZWxkIGQgKiAyXG4gICAgICAgIGpldC5wdXNoIGIgPSAoIGQgKSAtPiBvcmRlcmluZy5wdXNoIFwiYiN7ZH1cIjsgeWllbGQgZCAqIDNcbiAgICAgICAgamV0LnB1c2ggYyA9ICggZCApIC0+IG9yZGVyaW5nLnB1c2ggXCJjI3tkfVwiOyB5aWVsZCBkICogNVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGpldC5zZW5kIDEsIDIsIDNcbiAgICAgICAgZ2VuZXJhdG9yID0gamV0LndhbGsoKVxuICAgICAgICBAZXEgKCDOqWp0c3RtX184NSA9IC0+IGdlbmVyYXRvci5uZXh0KCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgdmFsdWU6IDkwLCBkb25lOiBmYWxzZSwgfVxuICAgICAgICBAZXEgKCDOqWp0c3RtX184NiA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiAgICksICdhMSBiMiBjNiBhMiBiNCBjMTIgYTMgYjYgYzE4J1xuICAgICAgICBAZXEgKCDOqWp0c3RtX184NyA9IC0+IGpldC5zaGVsZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFtdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzg4ID0gLT4gZ2VuZXJhdG9yLm5leHQoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyB2YWx1ZTogbnVsbCwgZG9uZTogdHJ1ZSwgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmYWxsYmFjayAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtIHsgcGljazogJ2ZpcnN0JywgZmFsbGJhY2ssIH1cbiAgICAgICAgb3JkZXJpbmcgID0gW11cbiAgICAgICAgamV0LnB1c2ggYSA9ICggZCApIC0+IG9yZGVyaW5nLnB1c2ggXCJhI3tkfVwiOyB5aWVsZCBkICogMlxuICAgICAgICBqZXQucHVzaCBiID0gKCBkICkgLT4gb3JkZXJpbmcucHVzaCBcImIje2R9XCI7IHlpZWxkIGQgKiAzXG4gICAgICAgIGpldC5wdXNoIGMgPSAoIGQgKSAtPiBvcmRlcmluZy5wdXNoIFwiYyN7ZH1cIjsgeWllbGQgZCAqIDVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBqZXQuc2VuZCAxLCAyLCAzXG4gICAgICAgICMgZGVidWcgJ86panRzdG1fXzg5JywgWyAoIGpldC53YWxrKCkgKS4uLiwgXVxuICAgICAgICBnZW5lcmF0b3IgPSBqZXQud2FsaygpXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzkwID0gLT4gZ2VuZXJhdG9yLm5leHQoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyB2YWx1ZTogMzAsIGRvbmU6IGZhbHNlLCB9XG4gICAgICAgIEBlcSAoIM6panRzdG1fXzkxID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICAgKSwgJ2ExIGIyIGM2J1xuICAgICAgICBAZXEgKCDOqWp0c3RtX185MiA9IC0+IGdlbmVyYXRvci5uZXh0KCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgdmFsdWU6IG51bGwsIGRvbmU6IHRydWUsIH1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fOTMgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgICApLCAnYTIgYjQgYzEyIGEzIGI2IGMxOCdcbiAgICAgICAgQGVxICggzqlqdHN0bV9fOTQgPSAtPiBnZW5lcmF0b3IubmV4dCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUsIH1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fOTUgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgICApLCAnJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtIHsgcGljazogJ2ZpcnN0JywgfVxuICAgICAgICBvcmRlcmluZyAgPSBbXVxuICAgICAgICBqZXQucHVzaCBhID0gKCBkICkgLT4gb3JkZXJpbmcucHVzaCBcImEje2R9XCI7IHlpZWxkIGQgKiAyXG4gICAgICAgIGpldC5wdXNoIGIgPSAoIGQgKSAtPiBvcmRlcmluZy5wdXNoIFwiYiN7ZH1cIjsgeWllbGQgZCAqIDNcbiAgICAgICAgamV0LnB1c2ggYyA9ICggZCApIC0+IG9yZGVyaW5nLnB1c2ggXCJjI3tkfVwiOyB5aWVsZCBkICogNVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAgICAgKCDOqWp0c3RtX185NiA9IC0+IFsgKCBqZXQud2FsaygpICkuLi4sIF0gICAgICAgICAgICAgICAgICAgICAgICAgICksIFtdXG4gICAgICAgIEBlcSAgICAgKCDOqWp0c3RtX185NyA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiAgICksICcnXG4gICAgICAgIEB0aHJvd3MgKCDOqWp0c3RtX185OCA9IC0+IGpldC5ydW4oKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIC9ubyByZXN1bHRzL1xuICAgICAgICBAZXEgICAgICggzqlqdHN0bV9fOTkgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgICApLCAnJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtIHsgcGljazogJ2xhc3QnLCB9XG4gICAgICAgIG9yZGVyaW5nICA9IFtdXG4gICAgICAgIGpldC5wdXNoIGEgPSAoIGQgKSAtPiBvcmRlcmluZy5wdXNoIFwiYSN7ZH1cIjsgeWllbGQgZCAqIDJcbiAgICAgICAgamV0LnB1c2ggYiA9ICggZCApIC0+IG9yZGVyaW5nLnB1c2ggXCJiI3tkfVwiOyB5aWVsZCBkICogM1xuICAgICAgICBqZXQucHVzaCBjID0gKCBkICkgLT4gb3JkZXJpbmcucHVzaCBcImMje2R9XCI7IHlpZWxkIGQgKiA1XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICAgICAoIM6panRzdG1fMTAwID0gLT4gWyAoIGpldC53YWxrKCkgKS4uLiwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgW11cbiAgICAgICAgQGVxICAgICAoIM6panRzdG1fMTAxID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICAgKSwgJydcbiAgICAgICAgQHRocm93cyAoIM6panRzdG1fMTAyID0gLT4gamV0LnJ1bigpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vIHJlc3VsdHMvXG4gICAgICAgIEBlcSAgICAgKCDOqWp0c3RtXzEwMyA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiAgICksICcnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZhbGxiYWNrICA9IFN5bWJvbCAnZmFsbGJhY2snXG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0geyBwaWNrOiAnZmlyc3QnLCBmYWxsYmFjaywgfVxuICAgICAgICBvcmRlcmluZyAgPSBbXVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTA0ID0gLT4gWyAoIGpldC53YWxrKCkgKS4uLiwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFtdXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTA1ID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICAgICAgICksICcnXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTA2ID0gLT4gamV0LnJ1bigpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbGxiYWNrXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTA3ID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICAgICAgICksICcnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZhbGxiYWNrICA9IFN5bWJvbCAnZmFsbGJhY2snXG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0geyBwaWNrOiAnZmlyc3QnLCBmYWxsYmFjaywgfVxuICAgICAgICBvcmRlcmluZyAgPSBbXVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTA4ID0gLT4gWyAoIGpldC53YWxrIDEsIDIsIDMgKS4uLiwgXSAgICAgICAgICAgICAgICAgICAgICAgICksIFsgMSwgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtXzEwOSA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiAgICAgICApLCAnJ1xuICAgICAgICBAZXEgKCDOqWp0c3RtXzExMCA9IC0+IGpldC5ydW4gMSwgMiwgMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAxXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTExID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICAgICAgICksICcnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZhbGxiYWNrICA9IFN5bWJvbCAnZmFsbGJhY2snXG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0geyBwaWNrOiAnbGFzdCcsIGZhbGxiYWNrLCB9XG4gICAgICAgIG9yZGVyaW5nICA9IFtdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV8xMTIgPSAtPiBbICggamV0LndhbGsgMSwgMiwgMyApLi4uLCBdICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAzLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTEzID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICAgICAgICksICcnXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTE0ID0gLT4gamV0LnJ1biAxLCAyLCAzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDNcbiAgICAgICAgQGVxICggzqlqdHN0bV8xMTUgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgICAgICAgKSwgJydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmFsbGJhY2sgID0gbnVsbFxuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtIHsgZmFsbGJhY2ssIH1cbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgMTAgKyBkOyB5aWVsZCAyMCArIGQgO251bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtXzExNiA9IC0+IGpldC5waWNrX2ZpcnN0IDEsIDIsIDMgICAgKSwgMTFcbiAgICAgICAgQGVxICggzqlqdHN0bV8xMTcgPSAtPiBqZXQucGlja19sYXN0IDEsIDIsIDMgICAgICksIDIzXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTE4ID0gLT4gamV0LnBpY2tfZmlyc3QoKSAgICAgICAgICApLCBmYWxsYmFja1xuICAgICAgICBAZXEgKCDOqWp0c3RtXzExOSA9IC0+IGpldC5waWNrX2xhc3QoKSAgICAgICAgICAgKSwgZmFsbGJhY2tcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgamV0c3RyZWFtX2N1ZTogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmYWxsYmFjayAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtIHsgZmFsbGJhY2ssIG91dGxldDogJyonLCB9XG4gICAgICAgIGpldC5wdXNoICcqJywgKCBkICkgLT4gaGVscCAnzqlqdHN0bV8xMjAnLCBkOyB5aWVsZCBkIDtudWxsXG4gICAgICAgIGpldC5jdWUgJ2ZpcnN0J1xuICAgICAgICBAZXEgKCDOqWp0c3RtXzEyMSA9IC0+IGpldC5zaGVsZiAgICAgICAgICksIFsgKCBTeW1ib2wuZm9yICdmaXJzdCcgKSwgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtXzEyMiA9IC0+IGpldC5waWNrX2ZpcnN0KCkgICksIFN5bWJvbC5mb3IgJ2ZpcnN0J1xuICAgICAgICA7bnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmYWxsYmFjayAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtIHsgZmFsbGJhY2ssIG91dGxldDogJyonLCB9XG4gICAgICAgIGpldC5wdXNoICcqJywgKCBkICkgLT5cbiAgICAgICAgICBoZWxwICfOqWp0c3RtXzEyMycsIGRcbiAgICAgICAgICBpZiBkIGlzIFN5bWJvbC5mb3IgJ2ZpcnN0J1xuICAgICAgICAgICAgamV0LmN1ZSAnb3RoZXItc3RhcnQnXG4gICAgICAgICAgICBqZXQuc2VuZCA1XG4gICAgICAgICAgICBqZXQuY3VlICdvdGhlci1lbmQnXG4gICAgICAgICAgeWllbGQgZFxuICAgICAgICAgIDtudWxsXG4gICAgICAgIGpldC5jdWUgJ2ZpcnN0J1xuICAgICAgICBAZXEgKCDOqWp0c3RtXzEyNCA9IC0+IGpldC5zaGVsZiAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAoIFN5bWJvbC5mb3IgJ2ZpcnN0JyApLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTI1ID0gLT4gamV0LnBpY2tfZmlyc3QoKSAgICAgICAgICAgICAgICApLCBTeW1ib2wuZm9yICdmaXJzdCdcbiAgICAgICAgQGVxICggzqlqdHN0bV8xMjYgPSAtPiBqZXQucGlja19hbGwoKSAgICAgICAgICAgICAgICAgICksIFtdXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTI3ID0gLT4gamV0LnBpY2tfYWxsIFN5bWJvbC5mb3IgJ2ZpcnN0JyApLCBbICggU3ltYm9sLmZvciAnZmlyc3QnICksICggU3ltYm9sLmZvciAnb3RoZXItc3RhcnQnICksIDUsICggU3ltYm9sLmZvciAnb3RoZXItZW5kJyApIF1cbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYXN5bmNfamV0c3RyZWFtOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgQXN5bmNfamV0c3RyZWFtLFxuICAgICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgYXdhaXQgZG8gPT5cbiAgICAgICAgc3RyZWFtID0gbmV3IEFzeW5jX2pldHN0cmVhbSgpXG4gICAgICAgIGRlYnVnICfOqWp0c3RtXzEyOCcsIHN0cmVhbVxuICAgICAgICBzdHJlYW0ucHVzaCAoIGQgKSAtPlxuICAgICAgICAgIGF3YWl0IEdVWS5hc3luYy5zbGVlcCAwLjA1XG4gICAgICAgICAgeWllbGQgZCAqIDJcbiAgICAgICAgIyBkZWJ1ZyAnzqlqdHN0bV8xMjknLCBzdHJlYW0ucnVuIDEyMywgNTU1XG4gICAgICAgIGRlYnVnICfOqWp0c3RtXzEzMCcsIGF3YWl0IHN0cmVhbS5ydW4gMTIzLCA1NTVcbiAgICAgICAgZGVidWcgJ86panRzdG1fMTMxJywgYXdhaXQgc3RyZWFtLnBpY2tfZmlyc3QgMTIzLCA1NTVcbiAgICAgICAgZGVidWcgJ86panRzdG1fMTMyJywgYXdhaXQgc3RyZWFtLnBpY2tfbGFzdCAxMjMsIDU1NVxuICAgICAgICA7bnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBhd2FpdCBkbyA9PlxuICAgICAgICBzdHJlYW0gID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIHRmbSAgICAgPSAoIGQgKSAtPiB5aWVsZCBhd2FpdCBkXG4gICAgICAgIEBlcSAgICAgKCDOqWp0c3RtXzEzNCA9IC0+IGludGVybmFscy50eXBlX29mIHRmbSAgICksICdhc3luY2dlbmVyYXRvcmZ1bmN0aW9uJ1xuICAgICAgICBAdGhyb3dzICggzqlqdHN0bV8xMzUgPSAtPiBzdHJlYW0ucHVzaCB0Zm0gICAgICAgICApLCAvY2Fubm90IHVzZSBhc3luYyB0cmFuc2Zvcm0gaW4gc3luYyBqZXRzdHJlYW0sIGdvdCBhIGFzeW5jZ2VuZXJhdG9yZnVuY3Rpb24vXG4gICAgICAgICMgZGVidWcgJ86panRzdG1fMTM2Jywgc3RyZWFtLnJ1biAxXG4gICAgICAgIDtudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIDtudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9fYXN5bmMgPSAtPlxuICB7IHNsZWVwLCB9ICAgICA9IEdVWS5hc3luY1xuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGYgPSAtPlxuICAgIHlpZWxkIDFcbiAgICBhd2FpdCBzbGVlcCAwLjI1XG4gICAgeWllbGQgMlxuICAgIDtudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgaSA9IC0+XG4gICAgIyByZW5hbWluZyBgeWllbGQgZnJvbWAgYXMgYGRlbGVnYXRlYCwgdGhpcyBvbmUgYmVjb21lc1xuICAgICMgJ2RlbGVnYXRlIGF3YWl0IGdlbmVyYXRvcidcbiAgICB5aWVsZCBmcm9tIGF3YWl0IGYoKSAjIC0+IHlpZWxkKiAoIGF3YWl0IGYoKSApXG4gICAgO251bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBqID0gLT5cbiAgICBmb3IgYXdhaXQgdmFsdWUgZnJvbSBmKClcbiAgICAgIHlpZWxkIHZhbHVlXG4gICAgO251bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBmb3IgYXdhaXQgdmFsdWUgZnJvbSBmKClcbiAgICBkZWJ1ZyAnzqlqdHN0bV8xMzcnLCB2YWx1ZVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgaGVscCBpXG4gIGhlbHAgaSgpXG4gIGhlbHAgYXdhaXQgaVxuICBoZWxwIGF3YWl0IGkoKVxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gIGhlbHAgalxuICBoZWxwIGooKVxuICBoZWxwIGF3YWl0IGpcbiAgaGVscCBhd2FpdCBqKClcbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTJ1xuICBmb3IgYXdhaXQgbiBmcm9tIGkoKVxuICAgIGRlYnVnICfOqWp0c3RtXzEzOCcsIG5cbiAgZm9yIGF3YWl0IG4gZnJvbSBqKClcbiAgICBkZWJ1ZyAnzqlqdHN0bV8xMzknLCBuXG5cbiAgIyMjXG5cbiAgZm9yICAgICAgIHZhbHVlIGZyb20gICAgICAgZ2YoKVxuICBmb3IgYXdhaXQgdmFsdWUgZnJvbSBhc3luY19nZigpXG5cbiAgSlMgYHlpZWxkKiAuLi5gIHRyYW5zbGF0ZXMgdG8gQ1MgYHlpZWxkIGZyb21gIGFuZCBpcyBhcyBpbnNlcGFyYWJsZSBhcyBgeWllbGQqYFxuXG4gICAgICAgIHlpZWxkIGZyb20gICAgICAgZ2YoKVxuICBhd2FpdCB5aWVsZCBmcm9tIGFzeW5jX2dmKClcblxuICB5aWVsZCBmcm9tICAgICAgICAgICAgIGdmKClcbiAgeWllbGQgZnJvbSBhd2FpdCBhc3luY19nZigpXG5cbiAgIyMjXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgO251bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBhd2FpdCAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkuYXN5bmNfdGVzdCBAdGFza3NcbiAgIyBhd2FpdCAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkuYXN5bmNfdGVzdCB7IGpldHN0cmVhbV8xOiBAdGFza3MuamV0c3RyZWFtXzEsIH1cbiAgYXdhaXQgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLmFzeW5jX3Rlc3QgeyBhc3luY19qZXRzdHJlYW06IEB0YXNrcy5hc3luY19qZXRzdHJlYW0sIH1cblxuICAjIGF3YWl0IGRlbW9fYXN5bmMoKVxuXG4iXX0=
