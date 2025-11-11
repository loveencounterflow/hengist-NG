(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, demo_async, demo_await_fetch_website, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

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
        var d, stream, Ωjtstm_130, Ωjtstm_131, Ωjtstm_132;
        stream = new Async_jetstream();
        // debug 'Ωjtstm_128', stream
        stream.push(async function*(d) {
          await GUY.async.sleep(0.05);
          return (yield d * 2);
        });
        // debug 'Ωjtstm_129', stream.run 123, 555
        /* TAINT gotta check how to make async tests work */
        d = (await stream.run(123, 555));
        this.eq((Ωjtstm_130 = function() {
          return d;
        }), [246, 1110]);
        d = (await stream.pick_first(123, 555));
        this.eq((Ωjtstm_131 = function() {
          return d;
        }), 246);
        d = (await stream.pick_last(123, 555));
        this.eq((Ωjtstm_132 = function() {
          return d;
        }), 1110);
        return null;
      })();
      await (() => {        //.....................................................................................................
        var stream, tfm, Ωjtstm_133, Ωjtstm_134;
        stream = new Jetstream();
        tfm = async function*(d) {
          return (yield (await d));
        };
        this.eq((Ωjtstm_133 = function() {
          return internals.type_of(tfm);
        }), 'asyncgeneratorfunction');
        this.throws((Ωjtstm_134 = function() {
          return stream.push(tfm);
        }), /cannot use async transform in sync jetstream, got a asyncgeneratorfunction/);
        // debug 'Ωjtstm_135', stream.run 1
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    result_of_empty_call: async function() {
      var Async_jetstream, Jetstream, SFMODULES, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Async_jetstream, Jetstream, internals} = SFMODULES.require_jetstream());
      (() => {        //.....................................................................................................
        var fallback, jet, Ωjtstm_137, Ωjtstm_138;
        fallback = Symbol('fallback');
        jet = new Jetstream({
          fallback,
          outlet: '*',
          empty_call: null
        });
        jet.push(function*(d) {
          yield* ['a', 'e', 'i'];
          return null;
        });
        jet.push('*', function*(d) {
          help('Ωjtstm_136', d);
          yield d;
          return null;
        });
        // jet.cue 'first'
        this.eq((Ωjtstm_137 = function() {
          return jet.cfg.empty_call;
        }), null);
        this.eq((Ωjtstm_138 = function() {
          return jet.run();
        }), ['a', 'e', 'i']);
        return null;
      })();
      (() => {        //.....................................................................................................
        var fallback, jet, Ωjtstm_140;
        fallback = Symbol('fallback');
        jet = new Jetstream({
          fallback,
          outlet: '*',
          empty_call: null
        });
        jet.push(function*(d) {
          yield* ['a', 'e', 'i'];
          return null;
        });
        jet.push('*', function*(d) {
          help('Ωjtstm_139', d);
          yield d;
          return null;
        });
        jet.send('first');
        this.eq((Ωjtstm_140 = function() {
          return jet.run();
        }), ['a', 'e', 'i']);
        return null;
      })();
      await (async() => {        //.....................................................................................................
        var d, fallback, jet, Ωjtstm_142, Ωjtstm_143;
        fallback = Symbol('fallback');
        jet = new Async_jetstream({
          fallback,
          outlet: '*',
          empty_call: null
        });
        jet.push(function*(d) {
          yield* ['a', 'e', 'i'];
          return null;
        });
        jet.push('*', function*(d) {
          help('Ωjtstm_141', d);
          yield d;
          return null;
        });
        // jet.cue 'first'
        this.eq((Ωjtstm_142 = function() {
          return jet.cfg.empty_call;
        }), null);
        d = (await jet.run());
        this.eq((Ωjtstm_143 = function() {
          return d;
        }), ['a', 'e', 'i']);
        return null;
      })();
      await (async() => {        //.....................................................................................................
        var d, fallback, jet, Ωjtstm_145;
        fallback = Symbol('fallback');
        jet = new Async_jetstream({
          fallback,
          outlet: '*',
          empty_call: null
        });
        jet.push(function*(d) {
          yield* ['a', 'e', 'i'];
          return null;
        });
        jet.push('*', function*(d) {
          help('Ωjtstm_144', d);
          yield d;
          return null;
        });
        jet.send('first');
        d = (await jet.run());
        this.eq((Ωjtstm_145 = function() {
          return d;
        }), ['a', 'e', 'i']);
        return null;
      })();
      //.....................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  demo_await_fetch_website = async function() {
    return (await (async() => {
      var result, stream, Ωjtstm_151;
      stream = new Async_jetstream();
      stream.push(function(address) {
        return info(`Ωjtstm_146 fetching ${address}`);
      });
      stream.push(async function*(address) {
        var rsp;
        rsp = (await fetch(address));
        info(`Ωjtstm_147 got response from ${address}`);
        return (yield rsp);
      });
      stream.push(async function*(rsp) {
        var text;
        text = (await rsp.text());
        info('Ωjtstm_148', "retrieved response text");
        return (yield text);
      });
      // stream.push ( body    ) -> yield body.read()
      result = (await stream.pick_first('https://example.com'));
      help('Ωjtstm_149', rpr(result));
      // await @eq ( Ωjtstm_150 = -> await stream.pick_first 'https://example.com' ), 0
      this.eq((Ωjtstm_151 = function() {
        return result.startsWith('<!doctype html>');
      }), true);
      // debug 'Ωjtstm_152', stream.run 1
      return null;
    })());
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
      debug('Ωjtstm_153', value);
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
      debug('Ωjtstm_154', n);
    }
    for await (n of j()) {
      debug('Ωjtstm_155', n);
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
      // await ( new Test guytest_cfg ).async_test { async_jetstream: @tasks.async_jetstream, }
      return (await (new Test(guytest_cfg)).async_test({
        result_of_empty_call: this.tasks.result_of_empty_call
      }));
    })();
  }

  // await demo_async()

  // debug 'Ωjtstm_156', { namedpipe:    0x1000, }
// debug 'Ωjtstm_157', { chrdevice:    0x2000, }
// debug 'Ωjtstm_158', { folder:       0x4000, }
// debug 'Ωjtstm_159', { blockdevice:  0x6000, }
// debug 'Ωjtstm_160', { file:         0x8000, }
// debug 'Ωjtstm_161', { symlink:      0xa000, }
// debug 'Ωjtstm_162', { socket:       0xc000, }
// url_nfo = new URL 'https://example.com#fragment'
// debug 'Ωjtstm_163', ( k for k of url_nfo )
// debug 'Ωjtstm_164', rpr url_nfo.protocol
// debug 'Ωjtstm_165', rpr url_nfo.hash

  // for page_nr in [ 473 .. 489 ]
//   echo "p#{page_nr} A: (cont.); p#{page_nr} B: (cont.)"

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtamV0c3RyZWFtLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsRUFBQSx3QkFBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBR0ksQ0FBQTs7SUFBQSxXQUFBLEVBQWEsUUFBQSxDQUFBLENBQUE7QUFDakIsVUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxPQUFBLEVBQUEsVUFBQSxFQUFBO01BQU0sU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FB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LENBQUEsTUFBTSxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLFVBQXpCLENBQW9DO1FBQUUsb0JBQUEsRUFBc0IsSUFBQyxDQUFBLEtBQUssQ0FBQztNQUEvQixDQUFwQyxDQUFOO0lBTnNDLENBQUEsSUFBeEM7OztFQWgwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLXNmbW9kdWxlcy90ZXN0LWJhc2ljcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRhc2tzID1cblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgamV0c3RyZWFtXzE6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgSmV0c3RyZWFtLFxuICAgICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlqdHN0bV9fXzEgPSAtPiB0eXBlX29mICggbmV3IEpldHN0cmVhbSgpICkgICAgICAgICAgICAgICksICdvYmplY3QnXG4gICAgICBAZXEgKCDOqWp0c3RtX19fMiA9IC0+IHR5cGVfb2YgKCBuZXcgSmV0c3RyZWFtKCkgKS53YWxrICdkYXRhJyAgKSwgJ2dlbmVyYXRvcidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmlyc3QgICAgID0geyAnZmlyc3QnLCAgfVxuICAgICAgICBsYXN0ICAgICAgPSB7ICdsYXN0JywgICB9XG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fX18zID0gLT4gamV0Lmxlbmd0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDBcbiAgICAgICAgQGVxICggzqlqdHN0bV9fXzQgPSAtPiBqZXQuaXNfZW1wdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHdhdGNoZWRfMSA9IFtdXG4gICAgICAgIHdhdGNoZWRfMiA9IFtdXG4gICAgICAgIHdhdGNoZWRfMyA9IFtdXG4gICAgICAgIHdhdGNoZWRfNCA9IFtdXG4gICAgICAgIGpldC5wdXNoIHdhdGNoID0gKCBkICAgICAgICAgICAgICApIC0+IGhlbHAgJ86panRzdG1fX181JywgcnByIGQ7IHdhdGNoZWRfMS5wdXNoIGRcbiAgICAgICAgamV0LnB1c2ggdXBwZXIgPSAoIGQgICAgICAgICAgICAgICkgLT5cbiAgICAgICAgICByZXR1cm4geWllbGQgZCB1bmxlc3MgKCB0eXBlb2YgZCApIGlzICdzdHJpbmcnXG4gICAgICAgICAgeWllbGQgZC50b1VwcGVyQ2FzZSgpXG4gICAgICAgIGpldC5wdXNoIHdhdGNoID0gKCBkICAgICAgICAgICAgICApIC0+IGluZm8gJ86panRzdG1fX182JywgcnByIGQ7IHdhdGNoZWRfMi5wdXNoIGRcbiAgICAgICAgamV0LnB1c2ggZXggICAgPSAoIGQsIG1hcmsgPSAnIScgICkgLT5cbiAgICAgICAgICByZXR1cm4geWllbGQgZCBpZiBkIGluIFsgZmlyc3QsIGxhc3QsIF1cbiAgICAgICAgICB5aWVsZCBkICsgbWFya1xuICAgICAgICBqZXQucHVzaCB3YXRjaCA9ICggZCAgICAgICAgICAgICAgKSAtPiBoZWxwICfOqWp0c3RtX19fNycsIHJwciBkOyB3YXRjaGVkXzMucHVzaCBkXG4gICAgICAgIGpldC5wdXNoIHN1cnJvdW5kID0gKCBkICkgLT5cbiAgICAgICAgICByZXR1cm4geWllbGQgXCJcIlwiTGV0J3Mgc2F5OiBcXFwiXCJcIlwiICBpZiBkIGlzIGZpcnN0XG4gICAgICAgICAgcmV0dXJuIHlpZWxkICdcIi4nICAgICAgICAgICAgICAgICBpZiBkIGlzIGxhc3RcbiAgICAgICAgICB5aWVsZCBkXG4gICAgICAgIGpldC5wdXNoIGZpbHRlciA9ICggZCAgICAgICAgICAgICAgKSAtPiB5aWVsZCBkIHVubGVzcyBkIGluIFsgZmlyc3QsIGxhc3QsIF1cbiAgICAgICAgamV0LnB1c2ggd2F0Y2ggID0gKCBkICAgICAgICAgICAgICApIC0+IHVyZ2UgJ86panRzdG1fX184JywgcnByIGQ7IHdhdGNoZWRfNC5wdXNoIGRcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtX19fOSA9IC0+IGpldC5sZW5ndGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDhcbiAgICAgICAgQGVxICggzqlqdHN0bV9fMTAgPSAtPiBqZXQuaXNfZW1wdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgICBAZXEgKCDOqWp0c3RtX18xMSA9IC0+IGpldC5zZW5kIGZpcnN0LCAnaGlkZXktaG8nLCBsYXN0ICAgICAgICAgICAgICAgICAgICAgICAgICksIG51bGxcbiAgICAgICAgQGVxICggzqlqdHN0bV9fMTIgPSAtPiBbICggZCBmb3IgZCBmcm9tIGpldC53YWxrKCkgKS4uLiwgXSAgICAgICAgICAgICAgICAgICAgICApLCBbIFwiXCJcIkxldCdzIHNheTogXFxcIlwiXCJcIiwgJ0hJREVZLUhPIScsICdcIi4nIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fMTMgPSAtPiB3YXRjaGVkXzEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIGZpcnN0LCAnaGlkZXktaG8nLCAgIGxhc3QsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fMTQgPSAtPiB3YXRjaGVkXzIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIGZpcnN0LCAnSElERVktSE8nLCAgIGxhc3QsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fMTUgPSAtPiB3YXRjaGVkXzMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIGZpcnN0LCAnSElERVktSE8hJywgIGxhc3QsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fMTYgPSAtPiB3YXRjaGVkXzQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIFwiXCJcIkxldCdzIHNheTogXFxcIlwiXCJcIiwgJ0hJREVZLUhPIScsICdcIi4nICAgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX18xNyA9IC0+IFsgKCBkIGZvciBkIGZyb20gamV0LndhbGsgZmlyc3QsICdoaWRleS1obycsIGxhc3QgKS4uLiwgXS5qb2luICcnICAgICApLCBcIlwiXCJMZXQncyBzYXk6IFwiSElERVktSE8hXCIuXCJcIlwiXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzE4ID0gLT4gKCAgIGQgZm9yIGQgZnJvbSBqZXQucnVuICBmaXJzdCwgJ2hpZGV5LWhvJywgbGFzdCAgICAgICApLmpvaW4gJycgICAgICksIFwiXCJcIkxldCdzIHNheTogXCJISURFWS1ITyFcIi5cIlwiXCJcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgamV0c3RyZWFtXzI6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgSmV0c3RyZWFtLFxuICAgICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgamV0ICAgICAgID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgamV0LnB1c2ggYWRkXzEgPSAoIGQgKSAtPiB5aWVsZCBkICsgMVxuICAgICAgICBqZXQucHVzaCBhZGRfMSA9ICggZCApIC0+IHlpZWxkIGQgKyAxXG4gICAgICAgIGpldC5wdXNoIGFkZF8xID0gKCBkICkgLT4geWllbGQgZCArIDFcbiAgICAgICAgamV0LnB1c2ggYWRkXzEgPSAoIGQgKSAtPiB5aWVsZCBkICsgMVxuICAgICAgICBqZXQucHVzaCBhZGRfMSA9ICggZCApIC0+IHlpZWxkIGQgKyAxXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV9fMTkgPSAtPiBbICggZCBmb3IgZCBmcm9tIGpldC53YWxrIDAgKS4uLiwgXSAgICAgICAgICApLCBbIDUsIF1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgamV0c3RyZWFtXzI6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgSmV0c3RyZWFtLFxuICAgICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgIyMjIGVtcHR5IHBpcGVsaW5lIGlzIGEgcGlwZWxpbmUgd2l0aG91dCB0cmFuc2Zvcm1zLCBzbyBkYXRhIGlzIHBhc3NlZCB0aHJvdWdoIHVudHJhbnNmb3JtZWQ6ICMjI1xuICAgICAgICBAZXEgKCDOqWp0c3RtX18yMCA9IC0+IFsgKCAoIG5ldyBKZXRzdHJlYW0oKSApLndhbGsgJ2RhdGEnICkuLi4sICBdICksIFsgJ2RhdGEnLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzIxID0gLT4gICAgICggbmV3IEpldHN0cmVhbSgpICkucnVuICAnZGF0YScgICAgICAgICAgKSwgWyAnZGF0YScsIF1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgamV0c3RyZWFtXzM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgSmV0c3RyZWFtLFxuICAgICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgY29sbGVjdG9yID0gW11cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBwXzEgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgcF8xLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AxLXQxJzsgeWllbGQgZCArICcg4oSWIDEnXG4gICAgICAgIHBfMS5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMS10Mic7IHlpZWxkIGQgKyAnIOKEliAyJ1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHBfMiA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBwXzIucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDItdDEnOyB5aWVsZCBkICsgJyDihJYgMydcbiAgICAgICAgcF8yLnB1c2ggcF8xXG4gICAgICAgIHBfMi5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMi10Mic7IHlpZWxkIGQgKyAnIOKEliA0J1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHBfMyA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBwXzMucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDMtdDEnOyB5aWVsZCBkICsgJyDihJYgNSdcbiAgICAgICAgcF8zLnB1c2ggcF8yXG4gICAgICAgIHBfMy5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMy10Mic7IHlpZWxkIGQgKyAnIOKEliA2J1xuICAgICAgICBAZXEgKCDOqWp0c3RtX18yMiA9IC0+IHBfMy5ydW4gICAgICAgICdteS1kYXRhJyApLCBbICdteS1kYXRhIOKEliA1IOKEliAzIOKEliAxIOKEliAyIOKEliA0IOKEliA2JyAsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fMjMgPSAtPiBjb2xsZWN0b3IgICAgICAgICAgICAgICAgKSwgWyAncDMtdDEnLCAncDItdDEnLCAncDEtdDEnLCAncDEtdDInLCAncDItdDInLCAncDMtdDInIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fMjQgPSAtPiBwXzMucGlja19maXJzdCAgJ215LWRhdGEnICksICdteS1kYXRhIOKEliA1IOKEliAzIOKEliAxIOKEliAyIOKEliA0IOKEliA2J1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBqZXRzdHJlYW1fMzogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PiAjIyMgc2FtZSBhcyBhYm92ZSBidXQgdGhlIHRyYW5zZm9ybXMgYXJlIHNlcGFyYXRlICMjI1xuICAgICAgICBmaXJzdCAgICAgICAgID0geyAnZmlyc3QnLCAgfVxuICAgICAgICBsYXN0ICAgICAgICAgID0geyAnbGFzdCcsICAgfVxuICAgICAgICBqZXQgICAgICAgICAgID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGcxICAgICAgICAgICAgPSAoIGQgKSAtPlxuICAgICAgICAgIHVyZ2UgJ86panRzdG1fXzI1IGcxJywgZFxuICAgICAgICAgIHN3aXRjaCBkXG4gICAgICAgICAgICB3aGVuIGZpcnN0XG4gICAgICAgICAgICAgIHlpZWxkIGRcbiAgICAgICAgICAgICAgeWllbGQgMFxuICAgICAgICAgICAgd2hlbiBsYXN0XG4gICAgICAgICAgICAgIHlpZWxkIDFcbiAgICAgICAgICAgICAgeWllbGQgZFxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICB5aWVsZCBkICogMlxuICAgICAgICBnMiAgICAgICAgICAgID0gKCBkICkgLT5cbiAgICAgICAgICB1cmdlICfOqWp0c3RtX18yNiBnMicsIGRcbiAgICAgICAgICBzd2l0Y2ggZFxuICAgICAgICAgICAgd2hlbiBmaXJzdFxuICAgICAgICAgICAgICB5aWVsZCBkXG4gICAgICAgICAgICAgIHlpZWxkIDBcbiAgICAgICAgICAgIHdoZW4gbGFzdFxuICAgICAgICAgICAgICB5aWVsZCAxXG4gICAgICAgICAgICAgIHlpZWxkIGRcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgeWllbGQgZCAqIDJcbiAgICAgICAgamV0LnB1c2ggZzFcbiAgICAgICAgamV0LnB1c2ggZzJcbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgZCB1bmxlc3MgZCBpbiBbIGZpcnN0LCBsYXN0LCBdXG4gICAgICAgIGRlYnVnICfOqWp0c3RtX18yNycsIGpldFxuICAgICAgICB3aGlzcGVyICfOqWp0c3RtX18yOCcsICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzI5ID0gLT4gamV0LnJ1biBmaXJzdCwgMjIsIGxhc3QgICAgICAgICAgICAgICAgICAgKSwgWyAwLCAwLCA4OCwgMiwgMSBdXG4gICAgICAgIHdoaXNwZXIgJ86panRzdG1fXzMwJywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgamV0c3RyZWFtX3NlbGVjdG9yczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgeyBTZWxlY3RvcixcbiAgICAgICAgX25vcm1hbGl6ZV9zZWxlY3RvcnMsXG4gICAgICAgIG5vcm1hbGl6ZV9zZWxlY3RvcnMsXG4gICAgICAgIHNlbGVjdG9yc19hc19saXN0LFxuICAgICAgICBpZF9mcm9tX3N5bWJvbCwgICAgICAgICB9ID0gaW50ZXJuYWxzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgQGVxICggzqlqdHN0bV9fMzEgPSAtPiB0eXBlX29mICggbmV3IEpldHN0cmVhbSgpICkgICAgICAgICAgICAgICksICdvYmplY3QnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHN0cmVhbV9pdGVtcyA9IFtcbiAgICAgICAgU3ltYm9sICdzdGFydCdcbiAgICAgICAgU3ltYm9sICdlbmQnXG4gICAgICAgIDc2LjlcbiAgICAgICAgXCJNZXhpY29cIlxuICAgICAgICBudWxsXG4gICAgICAgIF1cbiAgICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICAgIHsgcHJvYmU6ICdjdWUnLCAgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnY3VlJyAgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSMqJyAgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnY3VlJywgICAgICAgICAgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IHRydWUsICAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCAgfVxuICAgICAgICB7IHByb2JlOiAnIycsICAgICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyMnICAgICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjKicgICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJyMnLCAgICAgICAgICAgICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiB0cnVlLCAgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHByb2JlOiAnY3VlI2VuZCcsICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJ2N1ZSNlbmQnICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjZW5kJyAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJ2N1ZSNlbmQnLCAgICAgICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdlbmQnIF0sICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnI2VuZCcsICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyNlbmQnICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjZW5kJyAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJyNlbmQnLCAgICAgICAgICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdlbmQnIF0sICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcHJvYmU6ICcjZW5kLCNzdGFydCwnLCAgICAgICAgICAgICBzZWxfbGlzdDogWyAnI2VuZCcsICcjc3RhcnQnLCAnJyAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNlbmQnLCAnY3VlI3N0YXJ0JyBdLCBzZWxfcnByOiAnI2VuZCwgI3N0YXJ0LCAnLCAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ2VuZCcsICdzdGFydCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICcjZW5kLCNzdGFydCcsICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnI2VuZCcsICcjc3RhcnQnICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNlbmQnLCAnY3VlI3N0YXJ0JyBdLCBzZWxfcnByOiAnI2VuZCwgI3N0YXJ0JywgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ2VuZCcsICdzdGFydCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBwcm9iZTogJ2N1ZSNmb28jYmFyJywgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdjdWUjZm9vI2JhcicgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI2ZvbyNiYXInICAgICAgICAgIF0sIHNlbF9ycHI6ICdjdWUjZm9vI2JhcicsICAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnZm9vI2JhcicgXSwgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogJyNmb28jYmFyJywgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcjZm9vI2JhcicgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI2ZvbyNiYXInICAgICAgICAgIF0sIHNlbF9ycHI6ICcjZm9vI2JhcicsICAgICAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnZm9vI2JhcicgXSwgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHByb2JlOiAnY3VlI3N0YXJ0JywgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJ2N1ZSNzdGFydCcgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnICAgICAgICAgICAgXSwgc2VsX3JwcjogJ2N1ZSNzdGFydCcsICAgICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdzdGFydCcgXSwgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnI3N0YXJ0JywgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyNzdGFydCcgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnICAgICAgICAgICAgXSwgc2VsX3JwcjogJyNzdGFydCcsICAgICAgICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdzdGFydCcgXSwgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcHJvYmU6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBzZWxfbGlzdDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIG5ybV9zZWw6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBzZWxfcnByOiAnY3VlI3N0YXJ0LCBjdWUjZW5kJywgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ3N0YXJ0JywgJ2VuZCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6IFsgJyNzdGFydCcsICcjZW5kJyBdLCAgICAgICBzZWxfbGlzdDogWyAnI3N0YXJ0JywgJyNlbmQnICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBzZWxfcnByOiAnI3N0YXJ0LCAjZW5kJywgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ3N0YXJ0JywgJ2VuZCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICdjdWUjc3RhcnQsY3VlI2VuZCcsICAgICAgICBzZWxfbGlzdDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIG5ybV9zZWw6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBzZWxfcnByOiAnY3VlI3N0YXJ0LCBjdWUjZW5kJywgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ3N0YXJ0JywgJ2VuZCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICcjc3RhcnQsI2VuZCcsICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnI3N0YXJ0JywgJyNlbmQnICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBzZWxfcnByOiAnI3N0YXJ0LCAjZW5kJywgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ3N0YXJ0JywgJ2VuZCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICcgY3VlI3N0YXJ0LCBjdWUjZW5kICcsICAgICBzZWxfbGlzdDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIG5ybV9zZWw6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBzZWxfcnByOiAnY3VlI3N0YXJ0LCBjdWUjZW5kJywgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ3N0YXJ0JywgJ2VuZCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBwcm9iZTogbnVsbCwgICAgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcnICAgICAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJyAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcnLCAgICAgICAgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBmYWxzZSwgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiBbXSwgICAgICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgICAgICAgICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJycsICAgICAgICAgICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IGZhbHNlLCAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6IFsgW10gXSwgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAgICAgICAgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnJywgICAgICAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogWyBbICcnIF0gXSwgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcnICAgICAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJyAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcnLCAgICAgICAgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBmYWxzZSwgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnZGF0YScsICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJ2RhdGEnICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJ2RhdGEnLCAgICAgICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IGZhbHNlLCAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICcnLCAgICAgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnJyAgICAgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnJywgICAgICAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogJ2RhdGEjJywgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdkYXRhIycgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJyAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICdkYXRhIycsICAgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBmYWxzZSwgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcHJvYmU6IFsgJ2RhdGEnLCAnY3VlJyBdLCAgICAgICAgICBzZWxfbGlzdDogWyAnZGF0YScsICdjdWUnICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicsICdjdWUjKicgICAgICBdLCBzZWxfcnByOiAnZGF0YSwgY3VlJywgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogdHJ1ZSwgICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogdHJ1ZSwgIH1cbiAgICAgICAgeyBwcm9iZTogJ2RhdGEsIGN1ZScsICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdkYXRhJywgJ2N1ZScgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJywgJ2N1ZSMqJyAgICAgIF0sIHNlbF9ycHI6ICdkYXRhLCBjdWUnLCAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiB0cnVlLCAgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiB0cnVlLCAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcHJvYmU6ICdkYXRhI2ZvbyNiYXInLCBlcnJvcjogL0lEcyBvbiBkYXRhIGl0ZW1zIG5vdCBzdXBwb3J0ZWQvLCB9XG4gICAgICAgIF1cbiAgICAgIHNlbGVjdG9yc19hbmRfc2VsZWN0aW9ucyA9IFtcbiAgICAgICAgeyBzZWw6ICdjdWUnLCAgICAgICAgICAgICAgICAgICAgICBucm06ICdjdWUjKicsICAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICB7IHNlbDogJyMnLCAgICAgICAgICAgICAgICAgICAgICAgIG5ybTogJ2N1ZSMqJywgICAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBzZWw6ICdjdWUjZW5kJywgICAgICAgICAgICAgICAgICBucm06ICdjdWUjZW5kJywgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgeyBzZWw6ICcjZW5kJywgICAgICAgICAgICAgICAgICAgICBucm06ICdjdWUjZW5kJywgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHNlbDogJyNlbmQsI3N0YXJ0LCcsICAgICAgICAgICAgIG5ybTogJ2N1ZSNlbmQsY3VlI3N0YXJ0JywgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiAnI2VuZCwjc3RhcnQnLCAgICAgICAgICAgICAgbnJtOiAnY3VlI2VuZCxjdWUjc3RhcnQnLCAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHNlbDogJ2N1ZSNmb28jYmFyJywgICAgICAgICAgICAgIG5ybTogJ2N1ZSNmb28jYmFyJywgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgeyBzZWw6ICcjZm9vI2JhcicsICAgICAgICAgICAgICAgICBucm06ICdjdWUjZm9vI2JhcicsICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBzZWw6ICdjdWUjc3RhcnQnLCAgICAgICAgICAgICAgICBucm06ICdjdWUjc3RhcnQnLCAgICAgICAgICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgeyBzZWw6ICcjc3RhcnQnLCAgICAgICAgICAgICAgICAgICBucm06ICdjdWUjc3RhcnQnLCAgICAgICAgICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHNlbDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIG5ybTogJ2N1ZSNzdGFydCxjdWUjZW5kJywgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiBbICcjc3RhcnQnLCAnI2VuZCcgXSwgICAgICAgbnJtOiAnY3VlI3N0YXJ0LGN1ZSNlbmQnLCAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgeyBzZWw6ICdjdWUjc3RhcnQsY3VlI2VuZCcsICAgICAgICBucm06ICdjdWUjc3RhcnQsY3VlI2VuZCcsICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICB7IHNlbDogJyNzdGFydCwjZW5kJywgICAgICAgICAgICAgIG5ybTogJ2N1ZSNzdGFydCxjdWUjZW5kJywgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiAnIGN1ZSNzdGFydCwgY3VlI2VuZCAnLCAgICAgbnJtOiAnY3VlI3N0YXJ0LGN1ZSNlbmQnLCAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHNlbDogbnVsbCwgICAgICAgICAgICAgICAgICAgICAgIG5ybTogJ2RhdGEjKicsICAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgeyBzZWw6IFtdLCAgICAgICAgICAgICAgICAgICAgICAgICBucm06ICdkYXRhIyonLCAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgIHsgc2VsOiBbIFtdIF0sICAgICAgICAgICAgICAgICAgICAgbnJtOiAnZGF0YSMqJywgICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiB0cnVlLCBcIidNZXhpY28nXCI6IHRydWUsIG51bGw6IHRydWUgfVxuICAgICAgICB7IHNlbDogWyBbICcnIF0gXSwgICAgICAgICAgICAgICAgIG5ybTogJ2RhdGEjKicsICAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgeyBzZWw6ICdkYXRhJywgICAgICAgICAgICAgICAgICAgICBucm06ICdkYXRhIyonLCAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgIHsgc2VsOiAnJywgICAgICAgICAgICAgICAgICAgICAgICAgbnJtOiAnZGF0YSMqJywgICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiB0cnVlLCBcIidNZXhpY28nXCI6IHRydWUsIG51bGw6IHRydWUgfVxuICAgICAgICB7IHNlbDogJ2RhdGEjJywgICAgICAgICAgICAgICAgICAgIG5ybTogJ2RhdGEjKicsICAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHNlbDogWyAnZGF0YScsICdjdWUnIF0sICAgICAgICAgIG5ybTogJ2RhdGEjKixjdWUjKicsICAgICAgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgIHsgc2VsOiAnZGF0YSwgY3VlJywgICAgICAgICAgICAgICAgbnJtOiAnZGF0YSMqLGN1ZSMqJywgICAgICAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgeyBzZWw6ICcqJywgICAgICAgICAgICAgICAgICAgICAgICBucm06ICdkYXRhIyosY3VlIyonLCAgICAgICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiB0cnVlLCBcIidNZXhpY28nXCI6IHRydWUsIG51bGw6IHRydWUgfVxuICAgICAgICBdXG4gICAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIGRvID0+XG4gICAgICAgIGZvciBwIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgICBpZiBwLmVycm9yP1xuICAgICAgICAgICAgQHRocm93cyAoIM6panRzdG1fXzMyID0gLT4gbmV3IFNlbGVjdG9yIHAucHJvYmUgKSwgcC5lcnJvclxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICBwcm9iZSAgICAgICAgICAgPSBwLnByb2JlXG4gICAgICAgICAgc2VsX2xpc3QgICAgICAgID0gc2VsZWN0b3JzX2FzX2xpc3QgICBwcm9iZVxuICAgICAgICAgIG5ybV9zZWwgICAgICAgICA9IFsgKCBub3JtYWxpemVfc2VsZWN0b3JzIHByb2JlICkuLi4sIF1cbiAgICAgICAgICBzZWwgICAgICAgICAgICAgPSBuZXcgU2VsZWN0b3IgICAgICAgIHByb2JlXG4gICAgICAgICAgc2VsX3JwciAgICAgICAgID0gc2VsLnRvU3RyaW5nKClcbiAgICAgICAgICB7IGRhdGEsXG4gICAgICAgICAgICBjdWVzLFxuICAgICAgICAgICAgYWNjZXB0X2FsbCwgfSA9IHNlbC5fZ2V0X2V4Y2VycHQoKVxuICAgICAgICAgIGRhdGEgICAgICAgICAgICA9IFsgKCBkYXRhICkuLi4sIF0gdW5sZXNzIGRhdGEgaW4gWyB0cnVlLCBmYWxzZSwgXVxuICAgICAgICAgIGN1ZXMgICAgICAgICAgICA9IFsgKCBjdWVzICkuLi4sIF0gdW5sZXNzIGN1ZXMgaW4gWyB0cnVlLCBmYWxzZSwgXVxuICAgICAgICAgICMgZWNobyB7IHByb2JlLCBzZWxfbGlzdCwgbnJtX3NlbCwgc2VsX3JwciwgZGF0YSwgY3VlcywgYWNjZXB0X2FsbCwgfVxuICAgICAgICAgIEBlcSAoIM6panRzdG1fXzMzID0gLT4gc2VsX2xpc3QgICAgKSwgcC5zZWxfbGlzdFxuICAgICAgICAgIEBlcSAoIM6panRzdG1fXzM0ID0gLT4gbnJtX3NlbCAgICAgKSwgcC5ucm1fc2VsXG4gICAgICAgICAgQGVxICggzqlqdHN0bV9fMzUgPSAtPiBzZWxfcnByICAgICApLCBwLnNlbF9ycHJcbiAgICAgICAgICBAZXEgKCDOqWp0c3RtX18zNiA9IC0+IGRhdGEgICAgICAgICksIHAuZGF0YVxuICAgICAgICAgIEBlcSAoIM6panRzdG1fXzM3ID0gLT4gY3VlcyAgICAgICAgKSwgcC5jdWVzXG4gICAgICAgICAgQGVxICggzqlqdHN0bV9fMzggPSAtPiBhY2NlcHRfYWxsICApLCBwLmFjY2VwdF9hbGxcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgZG8gPT5cbiAgICAgICAgZGlzcGxheV9tYXRjaGVyID0gdHJ1ZVxuICAgICAgICBkaXNwbGF5X21hdGNoZXIgPSBmYWxzZVxuICAgICAgICBmb3IgZW50cnkgaW4gc2VsZWN0b3JzX2FuZF9zZWxlY3Rpb25zXG4gICAgICAgICAgc2VsZWN0b3IgID0gbmV3IFNlbGVjdG9yIGVudHJ5LnNlbFxuICAgICAgICAgIG5ybSAgICAgICA9IFsgKCBub3JtYWxpemVfc2VsZWN0b3JzIGVudHJ5LnNlbCApLi4uLCBdLmpvaW4gJywnXG4gICAgICAgICAgbGluZSAgICAgID0geyBzZWw6IGVudHJ5LnNlbCwgbnJtLCB9XG4gICAgICAgICAgZm9yIGl0ZW0gaW4gc3RyZWFtX2l0ZW1zXG4gICAgICAgICAgICByZXN1bHQgICAgICAgICAgICA9IHNlbGVjdG9yLnNlbGVjdCBpdGVtXG4gICAgICAgICAgICBsaW5lWyBycHIgaXRlbSBdICA9IHNlbGVjdG9yLnNlbGVjdCBpdGVtXG4gICAgICAgICAgICB1bmxlc3MgZGlzcGxheV9tYXRjaGVyXG4gICAgICAgICAgICAgIGlmIHJlc3VsdCBpc250IGVudHJ5WyBycHIgaXRlbSBdXG4gICAgICAgICAgICAgICAgZWNobyB7IHNlbGVjdG9yOiBlbnRyeS5zZWwsIG5ybSwgaXRlbSwgcmVzdWx0LCB9XG4gICAgICAgICAgICAgIEBlcSAoIM6panRzdG1fXzM5ID0gLT4gcmVzdWx0ICksIGVudHJ5WyBycHIgaXRlbSBdXG4gICAgICAgICAgaWYgZGlzcGxheV9tYXRjaGVyXG4gICAgICAgICAgICBlY2hvIGxpbmVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYnVpbGRfcGlwZWxpbmVzOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGpldCA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBqZXQucHVzaCBwcmVwZW5kID0gKCBkICkgLT4geWllbGQgJygnICsgZFxuICAgICAgICBqZXQucHVzaCBhcHBwZW5kID0gKCBkICkgLT4geWllbGQgZCArICcpJ1xuICAgICAgICBAZXEgKCDOqWp0c3RtX180MCA9IC0+IGpldC5waWNrX2ZpcnN0ICdzdHJpbmcnICksICcoc3RyaW5nKSdcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgamV0ID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCAnKCcgKyBkXG4gICAgICAgIGpldC5wdXNoIGFwcHBlbmQgPSAoIGQgKSAtPiB5aWVsZCBkICsgJyknXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzQxID0gLT4gamV0LnNlbmQgJ3N0cmluZycgICksIG51bGxcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNDIgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAnc3RyaW5nJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX180MyA9IC0+IGpldC5zZW5kICdvdGhlcicgICksIG51bGxcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNDQgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAnc3RyaW5nJywgJ290aGVyJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX180NSA9IC0+IGpldC5waWNrX2ZpcnN0KCkgICAgKSwgJyhzdHJpbmcpJ1xuICAgICAgICBAZXEgKCDOqWp0c3RtX180NiA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX180NyA9IC0+IGpldC5ydW4oKSAgICAgICAgICApLCBbXVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBqZXQgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgamV0LnB1c2ggcHJlcGVuZCA9ICggZCApIC0+IHlpZWxkICcoJyArIGRcbiAgICAgICAgamV0LnB1c2ggYXBwcGVuZCA9ICggZCApIC0+IHlpZWxkIGQgKyAnKSdcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNDggPSAtPiBqZXQuc2VuZCAnc3RyaW5nJyAgKSwgbnVsbFxuICAgICAgICBAZXEgKCDOqWp0c3RtX180OSA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbICdzdHJpbmcnLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzUwID0gLT4gamV0LnNlbmQgJ290aGVyJyAgKSwgbnVsbFxuICAgICAgICBpdGVyYXRvciA9IGpldC53YWxrKClcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNTEgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAnc3RyaW5nJywgJ290aGVyJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX181MiA9IC0+IGl0ZXJhdG9yLm5leHQoKSAgICApLCB7IGRvbmU6IGZhbHNlLCAgdmFsdWU6ICcoc3RyaW5nKScsIH1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNTMgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAnb3RoZXInLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzU0ID0gLT4gaXRlcmF0b3IubmV4dCgpICAgICksIHsgZG9uZTogZmFsc2UsICB2YWx1ZTogJyhvdGhlciknLCB9XG4gICAgICAgIEBlcSAoIM6panRzdG1fXzU1ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFtdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzU2ID0gLT4gaXRlcmF0b3IubmV4dCgpICAgICksIHsgZG9uZTogdHJ1ZSwgICB2YWx1ZTogbnVsbCwgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBqZXQgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgamV0LnB1c2ggcHJlcGVuZCA9ICggZCApIC0+IHlpZWxkICcoJyArIGRcbiAgICAgICAgamV0LnB1c2ggYXBwcGVuZCA9ICggZCApIC0+IHlpZWxkIGQgKyAnKSdcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNTcgPSAtPiBqZXQuc2VuZCAnc3RyaW5nJyAgKSwgbnVsbFxuICAgICAgICBAZXEgKCDOqWp0c3RtX181OCA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbICdzdHJpbmcnLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzU5ID0gLT4gamV0LnNlbmQgJ290aGVyJyAgKSwgbnVsbFxuICAgICAgICBpdGVyYXRvciA9IGpldC53YWxrICd0cm9pcycsICdxdWF0cmUnXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzYwID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ3N0cmluZycsICdvdGhlcicsICd0cm9pcycsICdxdWF0cmUnLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzYxID0gLT4gaXRlcmF0b3IubmV4dCgpICAgICksIHsgZG9uZTogZmFsc2UsICB2YWx1ZTogJyhzdHJpbmcpJywgfVxuICAgICAgICBAZXEgKCDOqWp0c3RtX182MiA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbICdvdGhlcicsICd0cm9pcycsICdxdWF0cmUnLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzYzID0gLT4gaXRlcmF0b3IubmV4dCgpICAgICksIHsgZG9uZTogZmFsc2UsICB2YWx1ZTogJyhvdGhlciknLCB9XG4gICAgICAgIEBlcSAoIM6panRzdG1fXzY0ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ3Ryb2lzJywgJ3F1YXRyZScsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNjUgPSAtPiBpdGVyYXRvci5uZXh0KCkgICAgKSwgeyBkb25lOiBmYWxzZSwgIHZhbHVlOiAnKHRyb2lzKScsIH1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNjYgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAncXVhdHJlJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX182NyA9IC0+IGl0ZXJhdG9yLm5leHQoKSAgICApLCB7IGRvbmU6IGZhbHNlLCAgdmFsdWU6ICcocXVhdHJlKScsIH1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNjggPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgW11cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNjkgPSAtPiBpdGVyYXRvci5uZXh0KCkgICAgKSwgeyBkb25lOiB0cnVlLCAgIHZhbHVlOiBudWxsLCB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbmZpZ3VyZV90cmFuc2Zvcm1zOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZpcnN0ID0gU3ltYm9sICdmaXJzdCdcbiAgICAgICAgbGFzdCAgPSBTeW1ib2wgJ2xhc3QnXG4gICAgICAgIGpldCA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBqZXQucHVzaCAoIGQgKSAtPiB5aWVsZCBcIioje2R9KlwiXG4gICAgICAgIGpldC5wdXNoICcjZmlyc3QnLCBwcmVwZW5kID0gKCBkICkgLT5cbiAgICAgICAgICByZXR1cm4geWllbGQgZnJvbSBbIGQsICcoJywgXSBpZiBkIGlzIGZpcnN0XG4gICAgICAgICAgeWllbGQgJ2Vycm9yIzEnXG4gICAgICAgIGpldC5wdXNoICcjbGFzdCcsIGFwcGVuZCA9ICggZCApIC0+XG4gICAgICAgICAgcmV0dXJuIHlpZWxkIGZyb20gWyAnKScsIGQsIF0gaWYgZCBpcyBsYXN0XG4gICAgICAgICAgeWllbGQgJ2Vycm9yIzInXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNzAgPSAtPiBqZXQucnVuIGZpcnN0LCAnYmlyZGlzdGhld29yZCcsIGxhc3QgKSwgWyAnKCcsICcqYmlyZGlzdGhld29yZConLCAnKScsIF1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmlyc3QgPSBTeW1ib2wgJ2ZpcnN0J1xuICAgICAgICBsYXN0ICA9IFN5bWJvbCAnbGFzdCdcbiAgICAgICAgamV0ICAgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgXCIqI3tkfSpcIlxuICAgICAgICBqZXQucHVzaCAnI2ZpcnN0JywgcHJlcGVuZCA9ICggZCApIC0+IHlpZWxkIGZyb20gWyBkLCAnKCcsIF07IG51bGxcbiAgICAgICAgamV0LnB1c2ggJyNsYXN0JywgIGFwcGVuZCAgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgJyknLCBkLCBdOyBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNzEgPSAtPiBqZXQucnVuIGZpcnN0LCAnYmlyZGlzdGhld29yZCcsIGxhc3QgKSwgWyAnKCcsICcqYmlyZGlzdGhld29yZConLCAnKScsIF1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmlyc3QgPSBTeW1ib2wgJ2ZpcnN0J1xuICAgICAgICBsYXN0ICA9IFN5bWJvbCAnbGFzdCdcbiAgICAgICAgamV0ICAgPSBuZXcgSmV0c3RyZWFtIHsgb3V0bGV0OiAnZGF0YSxjdWUnLCB9XG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIFwiKiN7ZH0qXCJcbiAgICAgICAgamV0LnB1c2ggJyNmaXJzdCcsIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgZCwgJygnLCBdOyBudWxsXG4gICAgICAgIGpldC5wdXNoICcjbGFzdCcsICBhcHBlbmQgID0gKCBkICkgLT4geWllbGQgZnJvbSBbICcpJywgZCwgXTsgbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzcyID0gLT4gamV0LnJ1biBmaXJzdCwgJ2JpcmRpc3RoZXdvcmQnLCBsYXN0ICksIFsgZmlyc3QsICcoJywgJypiaXJkaXN0aGV3b3JkKicsICcpJywgbGFzdCwgXVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmaXJzdCA9IFN5bWJvbCAnZmlyc3QnXG4gICAgICAgIGxhc3QgID0gU3ltYm9sICdsYXN0J1xuICAgICAgICBqZXQgICA9IG5ldyBKZXRzdHJlYW0geyBvdXRsZXQ6ICcqJywgfVxuICAgICAgICBqZXQucHVzaCAoIGQgKSAtPiB5aWVsZCBcIioje2R9KlwiXG4gICAgICAgIGpldC5wdXNoICcjZmlyc3QnLCBwcmVwZW5kID0gKCBkICkgLT4geWllbGQgZnJvbSBbIGQsICcoJywgXTsgbnVsbFxuICAgICAgICBqZXQucHVzaCAnI2xhc3QnLCAgYXBwZW5kICA9ICggZCApIC0+IHlpZWxkIGZyb20gWyAnKScsIGQsIF07IG51bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtX183MyA9IC0+IGpldC5ydW4gZmlyc3QsICdiaXJkaXN0aGV3b3JkJywgbGFzdCApLCBbIGZpcnN0LCAnKCcsICcqYmlyZGlzdGhld29yZConLCAnKScsIGxhc3QsIF1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmlyc3QgPSBTeW1ib2wgJ2ZpcnN0J1xuICAgICAgICBsYXN0ICA9IFN5bWJvbCAnbGFzdCdcbiAgICAgICAgamV0ICAgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgXCIqI3tkfSpcIlxuICAgICAgICBqZXQucHVzaCAnI2ZpcnN0JywgcHJlcGVuZCA9ICggZCApIC0+IHlpZWxkIGZyb20gWyBkLCAnKCcsIF07IG51bGxcbiAgICAgICAgamV0LnB1c2ggJyNsYXN0JywgIGFwcGVuZCAgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgJyknLCBkLCBdOyBudWxsXG4gICAgICAgIGpldC5jb25maWd1cmUgeyBvdXRsZXQ6ICcqJywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzc0ID0gLT4gamV0LnJ1biBmaXJzdCwgJ2JpcmRpc3RoZXdvcmQnLCBsYXN0ICksIFsgZmlyc3QsICcoJywgJypiaXJkaXN0aGV3b3JkKicsICcpJywgbGFzdCwgXVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmaXJzdCA9IFN5bWJvbCAnZmlyc3QnXG4gICAgICAgIGxhc3QgID0gU3ltYm9sICdsYXN0J1xuICAgICAgICBqZXQgICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBqZXQucHVzaCAoIGQgKSAtPiB5aWVsZCBcIioje2R9KlwiXG4gICAgICAgIGpldC5wdXNoICcjZmlyc3QnLCBwcmVwZW5kID0gKCBkICkgLT4geWllbGQgZnJvbSBbIGQsICcoJywgXTsgbnVsbFxuICAgICAgICBqZXQucHVzaCAnI2xhc3QnLCAgYXBwZW5kICA9ICggZCApIC0+IHlpZWxkIGZyb20gWyAnKScsIGQsIF07IG51bGxcbiAgICAgICAgamV0LmNvbmZpZ3VyZSB7IHBpY2s6ICdmaXJzdCcsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtX183NSA9IC0+IGpldC5ydW4gZmlyc3QsICdiaXJkaXN0aGV3b3JkJywgbGFzdCApLCAnKCdcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmlyc3QgPSBTeW1ib2wgJ2ZpcnN0J1xuICAgICAgICBsYXN0ICA9IFN5bWJvbCAnbGFzdCdcbiAgICAgICAgamV0ICAgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgXCIqI3tkfSpcIlxuICAgICAgICBqZXQucHVzaCAnI2ZpcnN0JywgcHJlcGVuZCA9ICggZCApIC0+IHlpZWxkIGZyb20gWyBkLCAnKCcsIF07IG51bGxcbiAgICAgICAgamV0LnB1c2ggJyNsYXN0JywgIGFwcGVuZCAgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgJyknLCBkLCBdOyBudWxsXG4gICAgICAgIGpldC5jb25maWd1cmUgeyBvdXRsZXQ6ICdkYXRhLGN1ZScsIHBpY2s6ICdmaXJzdCcsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtX183NiA9IC0+IGpldC5ydW4gZmlyc3QsICdiaXJkaXN0aGV3b3JkJywgbGFzdCApLCBmaXJzdFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmaXJzdCA9IFN5bWJvbCAnZmlyc3QnXG4gICAgICAgIGxhc3QgID0gU3ltYm9sICdsYXN0J1xuICAgICAgICBqZXQgICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBqZXQucHVzaCAoIGQgKSAtPiB5aWVsZCBcIioje2R9KlwiXG4gICAgICAgIGpldC5wdXNoICcjZmlyc3QnLCBwcmVwZW5kID0gKCBkICkgLT4geWllbGQgZnJvbSBbIGQsICcoJywgXTsgbnVsbFxuICAgICAgICBqZXQucHVzaCAnI2xhc3QnLCAgYXBwZW5kICA9ICggZCApIC0+IHlpZWxkIGZyb20gWyAnKScsIGQsIF07IG51bGxcbiAgICAgICAgamV0LmNvbmZpZ3VyZSB7IHBpY2s6ICdsYXN0JywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzc3ID0gLT4gamV0LmNmZy5waWNrICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnbGFzdCdcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNzggPSAtPiBqZXQucnVuIGZpcnN0LCAnYmlyZGlzdGhld29yZCcsIGxhc3QgICksICcpJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmaXJzdCA9IFN5bWJvbCAnZmlyc3QnXG4gICAgICAgIGxhc3QgID0gU3ltYm9sICdsYXN0J1xuICAgICAgICBqZXQgICA9IG5ldyBKZXRzdHJlYW0geyBwaWNrOiAnZmlyc3QnLCB9XG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIFwiKiN7ZH0qXCJcbiAgICAgICAgamV0LnB1c2ggJyNmaXJzdCcsIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgZCwgJygnLCBdOyBudWxsXG4gICAgICAgIGpldC5wdXNoICcjbGFzdCcsICBhcHBlbmQgID0gKCBkICkgLT4geWllbGQgZnJvbSBbICcpJywgZCwgXTsgbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEB0aHJvd3MgKCDOqWp0c3RtX183OSA9IC0+IGpldC5ydW4oKSApLCAvbm8gcmVzdWx0cy9cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmFsbGJhY2sgID0gU3ltYm9sICdmYWxsYmFjaydcbiAgICAgICAgamV0ICAgICAgID0gbmV3IEpldHN0cmVhbSB7IHBpY2s6ICdmaXJzdCcsIGZhbGxiYWNrLCB9XG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIFwiKiN7ZH0qXCJcbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgZnJvbSBbIGQsICcoJywgXTsgbnVsbFxuICAgICAgICBqZXQucHVzaCAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgJyknLCBkLCBdOyBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV9fODAgPSAtPiBqZXQucnVuKCkgKSwgZmFsbGJhY2tcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmFsbGJhY2sgID0gU3ltYm9sICdmYWxsYmFjaydcbiAgICAgICAgamV0ICAgICAgID0gbmV3IEpldHN0cmVhbSB7IHBpY2s6ICdmaXJzdCcsIGZhbGxiYWNrLCB9XG4gICAgICAgIG9yZGVyaW5nICA9IFtdXG4gICAgICAgIGpldC5wdXNoIGEgPSAoIGQgKSAtPiBvcmRlcmluZy5wdXNoIFwiYSN7ZH1cIjsgeWllbGQgZCAqIDJcbiAgICAgICAgamV0LnB1c2ggYiA9ICggZCApIC0+IG9yZGVyaW5nLnB1c2ggXCJiI3tkfVwiOyB5aWVsZCBkICogM1xuICAgICAgICBqZXQucHVzaCBjID0gKCBkICkgLT4gb3JkZXJpbmcucHVzaCBcImMje2R9XCI7IHlpZWxkIGQgKiA1XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV9fODEgPSAtPiBbICggamV0LndhbGsgMSwgMiwgMyApLi4uLCBdICAgICAgICAgICAgICAgICAgKSwgWyAzMCwgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX184MiA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiApLCAnYTEgYjIgYzYgYTIgYjQgYzEyIGEzIGI2IGMxOCdcbiAgICAgICAgQGVxICggzqlqdHN0bV9fODMgPSAtPiBqZXQucnVuIDEsIDIsIDMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMzBcbiAgICAgICAgQGVxICggzqlqdHN0bV9fODQgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgKSwgJ2ExIGIyIGM2IGEyIGI0IGMxMiBhMyBiNiBjMTgnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZhbGxiYWNrICA9IFN5bWJvbCAnZmFsbGJhY2snXG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0geyBwaWNrOiAnbGFzdCcsIGZhbGxiYWNrLCB9XG4gICAgICAgIG9yZGVyaW5nICA9IFtdXG4gICAgICAgIGpldC5wdXNoIGEgPSAoIGQgKSAtPiBvcmRlcmluZy5wdXNoIFwiYSN7ZH1cIjsgeWllbGQgZCAqIDJcbiAgICAgICAgamV0LnB1c2ggYiA9ICggZCApIC0+IG9yZGVyaW5nLnB1c2ggXCJiI3tkfVwiOyB5aWVsZCBkICogM1xuICAgICAgICBqZXQucHVzaCBjID0gKCBkICkgLT4gb3JkZXJpbmcucHVzaCBcImMje2R9XCI7IHlpZWxkIGQgKiA1XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgamV0LnNlbmQgMSwgMiwgM1xuICAgICAgICBnZW5lcmF0b3IgPSBqZXQud2FsaygpXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzg1ID0gLT4gZ2VuZXJhdG9yLm5leHQoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyB2YWx1ZTogOTAsIGRvbmU6IGZhbHNlLCB9XG4gICAgICAgIEBlcSAoIM6panRzdG1fXzg2ID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICAgKSwgJ2ExIGIyIGM2IGEyIGI0IGMxMiBhMyBiNiBjMTgnXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzg3ID0gLT4gamV0LnNoZWxmICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgW11cbiAgICAgICAgQGVxICggzqlqdHN0bV9fODggPSAtPiBnZW5lcmF0b3IubmV4dCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IHZhbHVlOiBudWxsLCBkb25lOiB0cnVlLCB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZhbGxiYWNrICA9IFN5bWJvbCAnZmFsbGJhY2snXG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0geyBwaWNrOiAnZmlyc3QnLCBmYWxsYmFjaywgfVxuICAgICAgICBvcmRlcmluZyAgPSBbXVxuICAgICAgICBqZXQucHVzaCBhID0gKCBkICkgLT4gb3JkZXJpbmcucHVzaCBcImEje2R9XCI7IHlpZWxkIGQgKiAyXG4gICAgICAgIGpldC5wdXNoIGIgPSAoIGQgKSAtPiBvcmRlcmluZy5wdXNoIFwiYiN7ZH1cIjsgeWllbGQgZCAqIDNcbiAgICAgICAgamV0LnB1c2ggYyA9ICggZCApIC0+IG9yZGVyaW5nLnB1c2ggXCJjI3tkfVwiOyB5aWVsZCBkICogNVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGpldC5zZW5kIDEsIDIsIDNcbiAgICAgICAgIyBkZWJ1ZyAnzqlqdHN0bV9fODknLCBbICggamV0LndhbGsoKSApLi4uLCBdXG4gICAgICAgIGdlbmVyYXRvciA9IGpldC53YWxrKClcbiAgICAgICAgQGVxICggzqlqdHN0bV9fOTAgPSAtPiBnZW5lcmF0b3IubmV4dCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IHZhbHVlOiAzMCwgZG9uZTogZmFsc2UsIH1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fOTEgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgICApLCAnYTEgYjIgYzYnXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzkyID0gLT4gZ2VuZXJhdG9yLm5leHQoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyB2YWx1ZTogbnVsbCwgZG9uZTogdHJ1ZSwgfVxuICAgICAgICBAZXEgKCDOqWp0c3RtX185MyA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiAgICksICdhMiBiNCBjMTIgYTMgYjYgYzE4J1xuICAgICAgICBAZXEgKCDOqWp0c3RtX185NCA9IC0+IGdlbmVyYXRvci5uZXh0KCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSwgfVxuICAgICAgICBAZXEgKCDOqWp0c3RtX185NSA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiAgICksICcnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0geyBwaWNrOiAnZmlyc3QnLCB9XG4gICAgICAgIG9yZGVyaW5nICA9IFtdXG4gICAgICAgIGpldC5wdXNoIGEgPSAoIGQgKSAtPiBvcmRlcmluZy5wdXNoIFwiYSN7ZH1cIjsgeWllbGQgZCAqIDJcbiAgICAgICAgamV0LnB1c2ggYiA9ICggZCApIC0+IG9yZGVyaW5nLnB1c2ggXCJiI3tkfVwiOyB5aWVsZCBkICogM1xuICAgICAgICBqZXQucHVzaCBjID0gKCBkICkgLT4gb3JkZXJpbmcucHVzaCBcImMje2R9XCI7IHlpZWxkIGQgKiA1XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICAgICAoIM6panRzdG1fXzk2ID0gLT4gWyAoIGpldC53YWxrKCkgKS4uLiwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgW11cbiAgICAgICAgQGVxICAgICAoIM6panRzdG1fXzk3ID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICAgKSwgJydcbiAgICAgICAgQHRocm93cyAoIM6panRzdG1fXzk4ID0gLT4gamV0LnJ1bigpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgL25vIHJlc3VsdHMvXG4gICAgICAgIEBlcSAgICAgKCDOqWp0c3RtX185OSA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiAgICksICcnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0geyBwaWNrOiAnbGFzdCcsIH1cbiAgICAgICAgb3JkZXJpbmcgID0gW11cbiAgICAgICAgamV0LnB1c2ggYSA9ICggZCApIC0+IG9yZGVyaW5nLnB1c2ggXCJhI3tkfVwiOyB5aWVsZCBkICogMlxuICAgICAgICBqZXQucHVzaCBiID0gKCBkICkgLT4gb3JkZXJpbmcucHVzaCBcImIje2R9XCI7IHlpZWxkIGQgKiAzXG4gICAgICAgIGpldC5wdXNoIGMgPSAoIGQgKSAtPiBvcmRlcmluZy5wdXNoIFwiYyN7ZH1cIjsgeWllbGQgZCAqIDVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgICAgICggzqlqdHN0bV8xMDAgPSAtPiBbICggamV0LndhbGsoKSApLi4uLCBdICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbXVxuICAgICAgICBAZXEgICAgICggzqlqdHN0bV8xMDEgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgICApLCAnJ1xuICAgICAgICBAdGhyb3dzICggzqlqdHN0bV8xMDIgPSAtPiBqZXQucnVuKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAvbm8gcmVzdWx0cy9cbiAgICAgICAgQGVxICAgICAoIM6panRzdG1fMTAzID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICAgKSwgJydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmFsbGJhY2sgID0gU3ltYm9sICdmYWxsYmFjaydcbiAgICAgICAgamV0ICAgICAgID0gbmV3IEpldHN0cmVhbSB7IHBpY2s6ICdmaXJzdCcsIGZhbGxiYWNrLCB9XG4gICAgICAgIG9yZGVyaW5nICA9IFtdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV8xMDQgPSAtPiBbICggamV0LndhbGsoKSApLi4uLCBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgW11cbiAgICAgICAgQGVxICggzqlqdHN0bV8xMDUgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgICAgICAgKSwgJydcbiAgICAgICAgQGVxICggzqlqdHN0bV8xMDYgPSAtPiBqZXQucnVuKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsbGJhY2tcbiAgICAgICAgQGVxICggzqlqdHN0bV8xMDcgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgICAgICAgKSwgJydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmFsbGJhY2sgID0gU3ltYm9sICdmYWxsYmFjaydcbiAgICAgICAgamV0ICAgICAgID0gbmV3IEpldHN0cmVhbSB7IHBpY2s6ICdmaXJzdCcsIGZhbGxiYWNrLCB9XG4gICAgICAgIG9yZGVyaW5nICA9IFtdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV8xMDggPSAtPiBbICggamV0LndhbGsgMSwgMiwgMyApLi4uLCBdICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAxLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTA5ID0gLT4gUiA9IG9yZGVyaW5nLmpvaW4gJyAnOyBvcmRlcmluZy5sZW5ndGggPSAwOyBSICAgICAgICksICcnXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTEwID0gLT4gamV0LnJ1biAxLCAyLCAzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDFcbiAgICAgICAgQGVxICggzqlqdHN0bV8xMTEgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgICAgICAgKSwgJydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmFsbGJhY2sgID0gU3ltYm9sICdmYWxsYmFjaydcbiAgICAgICAgamV0ICAgICAgID0gbmV3IEpldHN0cmVhbSB7IHBpY2s6ICdsYXN0JywgZmFsbGJhY2ssIH1cbiAgICAgICAgb3JkZXJpbmcgID0gW11cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtXzExMiA9IC0+IFsgKCBqZXQud2FsayAxLCAyLCAzICkuLi4sIF0gICAgICAgICAgICAgICAgICAgICAgICApLCBbIDMsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV8xMTMgPSAtPiBSID0gb3JkZXJpbmcuam9pbiAnICc7IG9yZGVyaW5nLmxlbmd0aCA9IDA7IFIgICAgICAgKSwgJydcbiAgICAgICAgQGVxICggzqlqdHN0bV8xMTQgPSAtPiBqZXQucnVuIDEsIDIsIDMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgM1xuICAgICAgICBAZXEgKCDOqWp0c3RtXzExNSA9IC0+IFIgPSBvcmRlcmluZy5qb2luICcgJzsgb3JkZXJpbmcubGVuZ3RoID0gMDsgUiAgICAgICApLCAnJ1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmYWxsYmFjayAgPSBudWxsXG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0geyBmYWxsYmFjaywgfVxuICAgICAgICBqZXQucHVzaCAoIGQgKSAtPiB5aWVsZCAxMCArIGQ7IHlpZWxkIDIwICsgZCA7bnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTE2ID0gLT4gamV0LnBpY2tfZmlyc3QgMSwgMiwgMyAgICApLCAxMVxuICAgICAgICBAZXEgKCDOqWp0c3RtXzExNyA9IC0+IGpldC5waWNrX2xhc3QgMSwgMiwgMyAgICAgKSwgMjNcbiAgICAgICAgQGVxICggzqlqdHN0bV8xMTggPSAtPiBqZXQucGlja19maXJzdCgpICAgICAgICAgICksIGZhbGxiYWNrXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTE5ID0gLT4gamV0LnBpY2tfbGFzdCgpICAgICAgICAgICApLCBmYWxsYmFja1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBqZXRzdHJlYW1fY3VlOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZhbGxiYWNrICA9IFN5bWJvbCAnZmFsbGJhY2snXG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0geyBmYWxsYmFjaywgb3V0bGV0OiAnKicsIH1cbiAgICAgICAgamV0LnB1c2ggJyonLCAoIGQgKSAtPiBoZWxwICfOqWp0c3RtXzEyMCcsIGQ7IHlpZWxkIGQgO251bGxcbiAgICAgICAgamV0LmN1ZSAnZmlyc3QnXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTIxID0gLT4gamV0LnNoZWxmICAgICAgICAgKSwgWyAoIFN5bWJvbC5mb3IgJ2ZpcnN0JyApLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTIyID0gLT4gamV0LnBpY2tfZmlyc3QoKSAgKSwgU3ltYm9sLmZvciAnZmlyc3QnXG4gICAgICAgIDtudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZhbGxiYWNrICA9IFN5bWJvbCAnZmFsbGJhY2snXG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0geyBmYWxsYmFjaywgb3V0bGV0OiAnKicsIH1cbiAgICAgICAgamV0LnB1c2ggJyonLCAoIGQgKSAtPlxuICAgICAgICAgIGhlbHAgJ86panRzdG1fMTIzJywgZFxuICAgICAgICAgIGlmIGQgaXMgU3ltYm9sLmZvciAnZmlyc3QnXG4gICAgICAgICAgICBqZXQuY3VlICdvdGhlci1zdGFydCdcbiAgICAgICAgICAgIGpldC5zZW5kIDVcbiAgICAgICAgICAgIGpldC5jdWUgJ290aGVyLWVuZCdcbiAgICAgICAgICB5aWVsZCBkXG4gICAgICAgICAgO251bGxcbiAgICAgICAgamV0LmN1ZSAnZmlyc3QnXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTI0ID0gLT4gamV0LnNoZWxmICAgICAgICAgICAgICAgICAgICAgICApLCBbICggU3ltYm9sLmZvciAnZmlyc3QnICksIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV8xMjUgPSAtPiBqZXQucGlja19maXJzdCgpICAgICAgICAgICAgICAgICksIFN5bWJvbC5mb3IgJ2ZpcnN0J1xuICAgICAgICBAZXEgKCDOqWp0c3RtXzEyNiA9IC0+IGpldC5waWNrX2FsbCgpICAgICAgICAgICAgICAgICAgKSwgW11cbiAgICAgICAgQGVxICggzqlqdHN0bV8xMjcgPSAtPiBqZXQucGlja19hbGwgU3ltYm9sLmZvciAnZmlyc3QnICksIFsgKCBTeW1ib2wuZm9yICdmaXJzdCcgKSwgKCBTeW1ib2wuZm9yICdvdGhlci1zdGFydCcgKSwgNSwgKCBTeW1ib2wuZm9yICdvdGhlci1lbmQnICkgXVxuICAgICAgICA7bnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBhc3luY19qZXRzdHJlYW06IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgSmV0c3RyZWFtLFxuICAgICAgICBBc3luY19qZXRzdHJlYW0sXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBhd2FpdCBkbyA9PlxuICAgICAgICBzdHJlYW0gPSBuZXcgQXN5bmNfamV0c3RyZWFtKClcbiAgICAgICAgIyBkZWJ1ZyAnzqlqdHN0bV8xMjgnLCBzdHJlYW1cbiAgICAgICAgc3RyZWFtLnB1c2ggKCBkICkgLT5cbiAgICAgICAgICBhd2FpdCBHVVkuYXN5bmMuc2xlZXAgMC4wNVxuICAgICAgICAgIHlpZWxkIGQgKiAyXG4gICAgICAgICMgZGVidWcgJ86panRzdG1fMTI5Jywgc3RyZWFtLnJ1biAxMjMsIDU1NVxuICAgICAgICAjIyMgVEFJTlQgZ290dGEgY2hlY2sgaG93IHRvIG1ha2UgYXN5bmMgdGVzdHMgd29yayAjIyNcbiAgICAgICAgZCA9IGF3YWl0IHN0cmVhbS5ydW4gICAgICAgIDEyMywgNTU1OyBAZXEgKCAoIM6panRzdG1fMTMwID0gLT4gZCApKSwgWyAyNDYsIDExMTAsIF1cbiAgICAgICAgZCA9IGF3YWl0IHN0cmVhbS5waWNrX2ZpcnN0IDEyMywgNTU1OyBAZXEgKCAoIM6panRzdG1fMTMxID0gLT4gZCApKSwgMjQ2XG4gICAgICAgIGQgPSBhd2FpdCBzdHJlYW0ucGlja19sYXN0ICAxMjMsIDU1NTsgQGVxICggKCDOqWp0c3RtXzEzMiA9IC0+IGQgKSksIDExMTBcbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgYXdhaXQgZG8gPT5cbiAgICAgICAgc3RyZWFtICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICB0Zm0gICAgID0gKCBkICkgLT4geWllbGQgYXdhaXQgZFxuICAgICAgICBAZXEgICAgICggzqlqdHN0bV8xMzMgPSAtPiBpbnRlcm5hbHMudHlwZV9vZiB0Zm0gICApLCAnYXN5bmNnZW5lcmF0b3JmdW5jdGlvbidcbiAgICAgICAgQHRocm93cyAoIM6panRzdG1fMTM0ID0gLT4gc3RyZWFtLnB1c2ggdGZtICAgICAgICAgKSwgL2Nhbm5vdCB1c2UgYXN5bmMgdHJhbnNmb3JtIGluIHN5bmMgamV0c3RyZWFtLCBnb3QgYSBhc3luY2dlbmVyYXRvcmZ1bmN0aW9uL1xuICAgICAgICAjIGRlYnVnICfOqWp0c3RtXzEzNScsIHN0cmVhbS5ydW4gMVxuICAgICAgICA7bnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXN1bHRfb2ZfZW1wdHlfY2FsbDogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBBc3luY19qZXRzdHJlYW0sXG4gICAgICAgIEpldHN0cmVhbSxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZhbGxiYWNrICA9IFN5bWJvbCAnZmFsbGJhY2snXG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0geyBmYWxsYmFjaywgb3V0bGV0OiAnKicsIGVtcHR5X2NhbGw6IG51bGwsIH1cbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgZnJvbSBbICdhJywgJ2UnLCAnaScsIF0gO251bGxcbiAgICAgICAgamV0LnB1c2ggJyonLCAoIGQgKSAtPiBoZWxwICfOqWp0c3RtXzEzNicsIGQ7IHlpZWxkIGQgO251bGxcbiAgICAgICAgIyBqZXQuY3VlICdmaXJzdCdcbiAgICAgICAgQGVxICggzqlqdHN0bV8xMzcgPSAtPiBqZXQuY2ZnLmVtcHR5X2NhbGwgICksIG51bGxcbiAgICAgICAgQGVxICggzqlqdHN0bV8xMzggPSAtPiBqZXQucnVuKCkgICAgICAgICAgICksIFsgJ2EnLCAnZScsICdpJywgXVxuICAgICAgICA7bnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmYWxsYmFjayAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtIHsgZmFsbGJhY2ssIG91dGxldDogJyonLCBlbXB0eV9jYWxsOiBudWxsLCB9XG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIGZyb20gWyAnYScsICdlJywgJ2knLCBdIDtudWxsXG4gICAgICAgIGpldC5wdXNoICcqJywgKCBkICkgLT4gaGVscCAnzqlqdHN0bV8xMzknLCBkOyB5aWVsZCBkIDtudWxsXG4gICAgICAgIGpldC5zZW5kICdmaXJzdCdcbiAgICAgICAgQGVxICggzqlqdHN0bV8xNDAgPSAtPiBqZXQucnVuKCkgICAgICAgICAgICksIFsgJ2EnLCAnZScsICdpJywgXVxuICAgICAgICA7bnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBhd2FpdCBkbyA9PlxuICAgICAgICBmYWxsYmFjayAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgICAgICBqZXQgICAgICAgPSBuZXcgQXN5bmNfamV0c3RyZWFtIHsgZmFsbGJhY2ssIG91dGxldDogJyonLCBlbXB0eV9jYWxsOiBudWxsLCB9XG4gICAgICAgIGpldC5wdXNoICggZCApIC0+IHlpZWxkIGZyb20gWyAnYScsICdlJywgJ2knLCBdIDtudWxsXG4gICAgICAgIGpldC5wdXNoICcqJywgKCBkICkgLT4gaGVscCAnzqlqdHN0bV8xNDEnLCBkOyB5aWVsZCBkIDtudWxsXG4gICAgICAgICMgamV0LmN1ZSAnZmlyc3QnXG4gICAgICAgIEBlcSAoIM6panRzdG1fMTQyID0gLT4gamV0LmNmZy5lbXB0eV9jYWxsICApLCBudWxsXG4gICAgICAgIGQgPSBhd2FpdCBqZXQucnVuKCk7IEBlcSAoIM6panRzdG1fMTQzID0gLT4gZCApLCBbICdhJywgJ2UnLCAnaScsIF1cbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgYXdhaXQgZG8gPT5cbiAgICAgICAgZmFsbGJhY2sgID0gU3ltYm9sICdmYWxsYmFjaydcbiAgICAgICAgamV0ICAgICAgID0gbmV3IEFzeW5jX2pldHN0cmVhbSB7IGZhbGxiYWNrLCBvdXRsZXQ6ICcqJywgZW1wdHlfY2FsbDogbnVsbCwgfVxuICAgICAgICBqZXQucHVzaCAoIGQgKSAtPiB5aWVsZCBmcm9tIFsgJ2EnLCAnZScsICdpJywgXSA7bnVsbFxuICAgICAgICBqZXQucHVzaCAnKicsICggZCApIC0+IGhlbHAgJ86panRzdG1fMTQ0JywgZDsgeWllbGQgZCA7bnVsbFxuICAgICAgICBqZXQuc2VuZCAnZmlyc3QnXG4gICAgICAgIGQgPSBhd2FpdCBqZXQucnVuKCk7IEBlcSAoIM6panRzdG1fMTQ1ID0gLT4gZCApLCBbICdhJywgJ2UnLCAnaScsIF1cbiAgICAgICAgO251bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9fYXdhaXRfZmV0Y2hfd2Vic2l0ZSA9IC0+XG4gIGF3YWl0IGRvID0+XG4gICAgc3RyZWFtICA9IG5ldyBBc3luY19qZXRzdHJlYW0oKVxuICAgIHN0cmVhbS5wdXNoICggYWRkcmVzcyApIC0+IGluZm8gXCLOqWp0c3RtXzE0NiBmZXRjaGluZyAje2FkZHJlc3N9XCJcbiAgICBzdHJlYW0ucHVzaCAoIGFkZHJlc3MgKSAtPlxuICAgICAgcnNwID0gYXdhaXQgZmV0Y2ggYWRkcmVzc1xuICAgICAgaW5mbyBcIs6panRzdG1fMTQ3IGdvdCByZXNwb25zZSBmcm9tICN7YWRkcmVzc31cIlxuICAgICAgeWllbGQgcnNwXG4gICAgc3RyZWFtLnB1c2ggKCByc3AgICAgICkgLT5cbiAgICAgIHRleHQgPSBhd2FpdCByc3AudGV4dCgpXG4gICAgICBpbmZvICfOqWp0c3RtXzE0OCcsIFwicmV0cmlldmVkIHJlc3BvbnNlIHRleHRcIlxuICAgICAgeWllbGQgdGV4dFxuICAgICMgc3RyZWFtLnB1c2ggKCBib2R5ICAgICkgLT4geWllbGQgYm9keS5yZWFkKClcbiAgICByZXN1bHQgPSBhd2FpdCBzdHJlYW0ucGlja19maXJzdCAnaHR0cHM6Ly9leGFtcGxlLmNvbSdcbiAgICBoZWxwICfOqWp0c3RtXzE0OScsIHJwciByZXN1bHRcbiAgICAjIGF3YWl0IEBlcSAoIM6panRzdG1fMTUwID0gLT4gYXdhaXQgc3RyZWFtLnBpY2tfZmlyc3QgJ2h0dHBzOi8vZXhhbXBsZS5jb20nICksIDBcbiAgICBAZXEgKCDOqWp0c3RtXzE1MSA9IC0+IHJlc3VsdC5zdGFydHNXaXRoICc8IWRvY3R5cGUgaHRtbD4nICksIHRydWVcbiAgICAjIGRlYnVnICfOqWp0c3RtXzE1MicsIHN0cmVhbS5ydW4gMVxuICAgIDtudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19hc3luYyA9IC0+XG4gIHsgc2xlZXAsIH0gICAgID0gR1VZLmFzeW5jXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZiA9IC0+XG4gICAgeWllbGQgMVxuICAgIGF3YWl0IHNsZWVwIDAuMjVcbiAgICB5aWVsZCAyXG4gICAgO251bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBpID0gLT5cbiAgICAjIHJlbmFtaW5nIGB5aWVsZCBmcm9tYCBhcyBgZGVsZWdhdGVgLCB0aGlzIG9uZSBiZWNvbWVzXG4gICAgIyAnZGVsZWdhdGUgYXdhaXQgZ2VuZXJhdG9yJ1xuICAgIHlpZWxkIGZyb20gYXdhaXQgZigpICMgLT4geWllbGQqICggYXdhaXQgZigpIClcbiAgICA7bnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGogPSAtPlxuICAgIGZvciBhd2FpdCB2YWx1ZSBmcm9tIGYoKVxuICAgICAgeWllbGQgdmFsdWVcbiAgICA7bnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGZvciBhd2FpdCB2YWx1ZSBmcm9tIGYoKVxuICAgIGRlYnVnICfOqWp0c3RtXzE1MycsIHZhbHVlXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTJ1xuICBoZWxwIGlcbiAgaGVscCBpKClcbiAgaGVscCBhd2FpdCBpXG4gIGhlbHAgYXdhaXQgaSgpXG4gIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgaGVscCBqXG4gIGhlbHAgaigpXG4gIGhlbHAgYXdhaXQgalxuICBoZWxwIGF3YWl0IGooKVxuICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gIGZvciBhd2FpdCBuIGZyb20gaSgpXG4gICAgZGVidWcgJ86panRzdG1fMTU0JywgblxuICBmb3IgYXdhaXQgbiBmcm9tIGooKVxuICAgIGRlYnVnICfOqWp0c3RtXzE1NScsIG5cblxuICAjIyNcblxuICBmb3IgICAgICAgdmFsdWUgZnJvbSAgICAgICBnZigpXG4gIGZvciBhd2FpdCB2YWx1ZSBmcm9tIGFzeW5jX2dmKClcblxuICBKUyBgeWllbGQqIC4uLmAgdHJhbnNsYXRlcyB0byBDUyBgeWllbGQgZnJvbWAgYW5kIGlzIGFzIGluc2VwYXJhYmxlIGFzIGB5aWVsZCpgXG5cbiAgICAgICAgeWllbGQgZnJvbSAgICAgICBnZigpXG4gIGF3YWl0IHlpZWxkIGZyb20gYXN5bmNfZ2YoKVxuXG4gIHlpZWxkIGZyb20gICAgICAgICAgICAgZ2YoKVxuICB5aWVsZCBmcm9tIGF3YWl0IGFzeW5jX2dmKClcblxuICAjIyNcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICA7bnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGF3YWl0ICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS5hc3luY190ZXN0IEB0YXNrc1xuICAjIGF3YWl0ICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS5hc3luY190ZXN0IHsgamV0c3RyZWFtXzE6IEB0YXNrcy5qZXRzdHJlYW1fMSwgfVxuICAjIGF3YWl0ICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS5hc3luY190ZXN0IHsgYXN5bmNfamV0c3RyZWFtOiBAdGFza3MuYXN5bmNfamV0c3RyZWFtLCB9XG4gIGF3YWl0ICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS5hc3luY190ZXN0IHsgcmVzdWx0X29mX2VtcHR5X2NhbGw6IEB0YXNrcy5yZXN1bHRfb2ZfZW1wdHlfY2FsbCwgfVxuXG4gICMgYXdhaXQgZGVtb19hc3luYygpXG5cbiAgIyBkZWJ1ZyAnzqlqdHN0bV8xNTYnLCB7IG5hbWVkcGlwZTogICAgMHgxMDAwLCB9XG4gICMgZGVidWcgJ86panRzdG1fMTU3JywgeyBjaHJkZXZpY2U6ICAgIDB4MjAwMCwgfVxuICAjIGRlYnVnICfOqWp0c3RtXzE1OCcsIHsgZm9sZGVyOiAgICAgICAweDQwMDAsIH1cbiAgIyBkZWJ1ZyAnzqlqdHN0bV8xNTknLCB7IGJsb2NrZGV2aWNlOiAgMHg2MDAwLCB9XG4gICMgZGVidWcgJ86panRzdG1fMTYwJywgeyBmaWxlOiAgICAgICAgIDB4ODAwMCwgfVxuICAjIGRlYnVnICfOqWp0c3RtXzE2MScsIHsgc3ltbGluazogICAgICAweGEwMDAsIH1cbiAgIyBkZWJ1ZyAnzqlqdHN0bV8xNjInLCB7IHNvY2tldDogICAgICAgMHhjMDAwLCB9XG4gICMgdXJsX25mbyA9IG5ldyBVUkwgJ2h0dHBzOi8vZXhhbXBsZS5jb20jZnJhZ21lbnQnXG4gICMgZGVidWcgJ86panRzdG1fMTYzJywgKCBrIGZvciBrIG9mIHVybF9uZm8gKVxuICAjIGRlYnVnICfOqWp0c3RtXzE2NCcsIHJwciB1cmxfbmZvLnByb3RvY29sXG4gICMgZGVidWcgJ86panRzdG1fMTY1JywgcnByIHVybF9uZm8uaGFzaFxuXG4gICMgZm9yIHBhZ2VfbnIgaW4gWyA0NzMgLi4gNDg5IF1cbiAgIyAgIGVjaG8gXCJwI3twYWdlX25yfSBBOiAoY29udC4pOyBwI3twYWdlX25yfSBCOiAoY29udC4pXCJcblxuIl19
