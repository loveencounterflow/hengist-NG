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
        var apppend, filter, first, jet, last, prepend;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream();
        jet.push('data,#last', prepend = function*(d) {
          switch (d) {
            case last:
              yield 'yay';
              yield d;
              break;
            case first:
              yield 'oops';
              yield d;
              break;
            default:
              yield '(' + d;
          }
          return null;
        });
        jet.push(apppend = function*(d) {
          return (yield d + ')');
        });
        jet.push('#first,#last', filter = function*(d) {
          debug('Ωjtstm__70', d);
        });
        //...................................................................................................
        debug('Ωjtstm__71', jet.run(first, 'birdistheword', last));
        // @eq ( Ωjtstm__72 = -> jet.get_first 'string' ), '(string)'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtamV0c3RyZWFtLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBR0ksQ0FBQTs7SUFBQSxXQUFBLEVBQWEsUUFBQSxDQUFBLENBQUE7QUFDakIsVUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxPQUFBLEVBQUEsVUFBQSxFQUFBO01BQU0sU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4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LFlBQU4sRUFBb0IsQ0FBcEI7UUFBVCxDQUFwQyxFQVZSOztRQVlRLEtBQUEsQ0FBTSxZQUFOLEVBQW9CLEdBQUcsQ0FBQyxHQUFKLENBQVEsS0FBUixFQUFlLGVBQWYsRUFBZ0MsSUFBaEMsQ0FBcEIsRUFaUjs7QUFjUSxlQUFPO01BZk4sQ0FBQSxJQVZUOztBQTJCTSxhQUFPO0lBNUJhO0VBN1d0QixFQTlCSjs7O0VBNmFBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQTtNQUFFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsSUFBQyxDQUFBLEtBQS9CLEVBRkY7O2FBSUUsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLG9CQUFBLEVBQXNCLElBQUMsQ0FBQSxLQUFLLENBQUM7TUFBL0IsQ0FBOUI7SUFMc0MsQ0FBQSxJQUF4Qzs7QUE3YUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1zZm1vZHVsZXMvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0YXNrcyA9XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGpldHN0cmVhbV8xOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6panRzdG1fX18xID0gLT4gdHlwZV9vZiAoIG5ldyBKZXRzdHJlYW0oKSApICAgICAgICAgICAgICApLCAnb2JqZWN0J1xuICAgICAgQGVxICggzqlqdHN0bV9fXzIgPSAtPiB0eXBlX29mICggbmV3IEpldHN0cmVhbSgpICkud2FsayAnZGF0YScgICksICdnZW5lcmF0b3InXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZpcnN0ICAgICA9IHsgJ2ZpcnN0JywgIH1cbiAgICAgICAgbGFzdCAgICAgID0geyAnbGFzdCcsICAgfVxuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWp0c3RtX19fMyA9IC0+IGpldC5sZW5ndGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAwXG4gICAgICAgIEBlcSAoIM6panRzdG1fX180ID0gLT4gamV0LmlzX2VtcHR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB3YXRjaGVkXzEgPSBbXVxuICAgICAgICB3YXRjaGVkXzIgPSBbXVxuICAgICAgICB3YXRjaGVkXzMgPSBbXVxuICAgICAgICB3YXRjaGVkXzQgPSBbXVxuICAgICAgICBqZXQucHVzaCB3YXRjaCA9ICggZCAgICAgICAgICAgICAgKSAtPiBoZWxwICfOqWp0c3RtX19fNScsIHJwciBkOyB3YXRjaGVkXzEucHVzaCBkXG4gICAgICAgIGpldC5wdXNoIHVwcGVyID0gKCBkICAgICAgICAgICAgICApIC0+XG4gICAgICAgICAgcmV0dXJuIHlpZWxkIGQgdW5sZXNzICggdHlwZW9mIGQgKSBpcyAnc3RyaW5nJ1xuICAgICAgICAgIHlpZWxkIGQudG9VcHBlckNhc2UoKVxuICAgICAgICBqZXQucHVzaCB3YXRjaCA9ICggZCAgICAgICAgICAgICAgKSAtPiBpbmZvICfOqWp0c3RtX19fNicsIHJwciBkOyB3YXRjaGVkXzIucHVzaCBkXG4gICAgICAgIGpldC5wdXNoIGV4ICAgID0gKCBkLCBtYXJrID0gJyEnICApIC0+XG4gICAgICAgICAgcmV0dXJuIHlpZWxkIGQgaWYgZCBpbiBbIGZpcnN0LCBsYXN0LCBdXG4gICAgICAgICAgeWllbGQgZCArIG1hcmtcbiAgICAgICAgamV0LnB1c2ggd2F0Y2ggPSAoIGQgICAgICAgICAgICAgICkgLT4gaGVscCAnzqlqdHN0bV9fXzcnLCBycHIgZDsgd2F0Y2hlZF8zLnB1c2ggZFxuICAgICAgICBqZXQucHVzaCBzdXJyb3VuZCA9ICggZCApIC0+XG4gICAgICAgICAgcmV0dXJuIHlpZWxkIFwiXCJcIkxldCdzIHNheTogXFxcIlwiXCJcIiAgaWYgZCBpcyBmaXJzdFxuICAgICAgICAgIHJldHVybiB5aWVsZCAnXCIuJyAgICAgICAgICAgICAgICAgaWYgZCBpcyBsYXN0XG4gICAgICAgICAgeWllbGQgZFxuICAgICAgICBqZXQucHVzaCBmaWx0ZXIgPSAoIGQgICAgICAgICAgICAgICkgLT4geWllbGQgZCB1bmxlc3MgZCBpbiBbIGZpcnN0LCBsYXN0LCBdXG4gICAgICAgIGpldC5wdXNoIHdhdGNoICA9ICggZCAgICAgICAgICAgICAgKSAtPiB1cmdlICfOqWp0c3RtX19fOCcsIHJwciBkOyB3YXRjaGVkXzQucHVzaCBkXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlqdHN0bV9fXzkgPSAtPiBqZXQubGVuZ3RoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCA4XG4gICAgICAgIEBlcSAoIM6panRzdG1fXzEwID0gLT4gamV0LmlzX2VtcHR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICAgQGVxICggzqlqdHN0bV9fMTEgPSAtPiBqZXQuc2VuZCBmaXJzdCwgJ2hpZGV5LWhvJywgbGFzdCAgICAgICAgICAgICAgICAgICAgICAgICApLCBudWxsXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzEyID0gLT4gWyAoIGQgZm9yIGQgZnJvbSBqZXQud2FsaygpICkuLi4sIF0gICAgICAgICAgICAgICAgICAgICAgKSwgWyBcIlwiXCJMZXQncyBzYXk6IFxcXCJcIlwiXCIsICdISURFWS1ITyEnLCAnXCIuJyBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzEzID0gLT4gd2F0Y2hlZF8xICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyBmaXJzdCwgJ2hpZGV5LWhvJywgICBsYXN0LCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzE0ID0gLT4gd2F0Y2hlZF8yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyBmaXJzdCwgJ0hJREVZLUhPJywgICBsYXN0LCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzE1ID0gLT4gd2F0Y2hlZF8zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyBmaXJzdCwgJ0hJREVZLUhPIScsICBsYXN0LCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzE2ID0gLT4gd2F0Y2hlZF80ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyBcIlwiXCJMZXQncyBzYXk6IFxcXCJcIlwiXCIsICdISURFWS1ITyEnLCAnXCIuJyAgIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fMTcgPSAtPiBbICggZCBmb3IgZCBmcm9tIGpldC53YWxrIGZpcnN0LCAnaGlkZXktaG8nLCBsYXN0ICkuLi4sIF0uam9pbiAnJyAgICAgKSwgXCJcIlwiTGV0J3Mgc2F5OiBcIkhJREVZLUhPIVwiLlwiXCJcIlxuICAgICAgICBAZXEgKCDOqWp0c3RtX18xOCA9IC0+ICggICBkIGZvciBkIGZyb20gamV0LnJ1biAgZmlyc3QsICdoaWRleS1obycsIGxhc3QgICAgICAgKS5qb2luICcnICAgICApLCBcIlwiXCJMZXQncyBzYXk6IFwiSElERVktSE8hXCIuXCJcIlwiXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGpldHN0cmVhbV8yOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGpldC5wdXNoIGFkZF8xID0gKCBkICkgLT4geWllbGQgZCArIDFcbiAgICAgICAgamV0LnB1c2ggYWRkXzEgPSAoIGQgKSAtPiB5aWVsZCBkICsgMVxuICAgICAgICBqZXQucHVzaCBhZGRfMSA9ICggZCApIC0+IHlpZWxkIGQgKyAxXG4gICAgICAgIGpldC5wdXNoIGFkZF8xID0gKCBkICkgLT4geWllbGQgZCArIDFcbiAgICAgICAgamV0LnB1c2ggYWRkXzEgPSAoIGQgKSAtPiB5aWVsZCBkICsgMVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzE5ID0gLT4gWyAoIGQgZm9yIGQgZnJvbSBqZXQud2FsayAwICkuLi4sIF0gICAgICAgICAgKSwgWyA1LCBdXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGpldHN0cmVhbV8yOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgICMjIyBlbXB0eSBwaXBlbGluZSBpcyBhIHBpcGVsaW5lIHdpdGhvdXQgdHJhbnNmb3Jtcywgc28gZGF0YSBpcyBwYXNzZWQgdGhyb3VnaCB1bnRyYW5zZm9ybWVkOiAjIyNcbiAgICAgICAgQGVxICggzqlqdHN0bV9fMjAgPSAtPiBbICggKCBuZXcgSmV0c3RyZWFtKCkgKS53YWxrICdkYXRhJyApLi4uLCAgXSApLCBbICdkYXRhJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX18yMSA9IC0+ICAgICAoIG5ldyBKZXRzdHJlYW0oKSApLnJ1biAgJ2RhdGEnICAgICAgICAgICksIFsgJ2RhdGEnLCBdXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGpldHN0cmVhbV8zOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGNvbGxlY3RvciA9IFtdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcF8xID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIHBfMS5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMS10MSc7IHlpZWxkIGQgKyAnIOKEliAxJ1xuICAgICAgICBwXzEucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDEtdDInOyB5aWVsZCBkICsgJyDihJYgMidcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBwXzIgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgcF8yLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AyLXQxJzsgeWllbGQgZCArICcg4oSWIDMnXG4gICAgICAgIHBfMi5wdXNoIHBfMVxuICAgICAgICBwXzIucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDItdDInOyB5aWVsZCBkICsgJyDihJYgNCdcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBwXzMgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgcF8zLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AzLXQxJzsgeWllbGQgZCArICcg4oSWIDUnXG4gICAgICAgIHBfMy5wdXNoIHBfMlxuICAgICAgICBwXzMucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDMtdDInOyB5aWVsZCBkICsgJyDihJYgNidcbiAgICAgICAgQGVxICggzqlqdHN0bV9fMjIgPSAtPiBwXzMucnVuICAgICAgICAnbXktZGF0YScgKSwgWyAnbXktZGF0YSDihJYgNSDihJYgMyDihJYgMSDihJYgMiDihJYgNCDihJYgNicgLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzIzID0gLT4gY29sbGVjdG9yICAgICAgICAgICAgICAgICksIFsgJ3AzLXQxJywgJ3AyLXQxJywgJ3AxLXQxJywgJ3AxLXQyJywgJ3AyLXQyJywgJ3AzLXQyJyBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzI0ID0gLT4gcF8zLmdldF9maXJzdCAgJ215LWRhdGEnICksICdteS1kYXRhIOKEliA1IOKEliAzIOKEliAxIOKEliAyIOKEliA0IOKEliA2J1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBqZXRzdHJlYW1fMzogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PiAjIyMgc2FtZSBhcyBhYm92ZSBidXQgdGhlIHRyYW5zZm9ybXMgYXJlIHNlcGFyYXRlICMjI1xuICAgICAgICBmaXJzdCAgICAgICAgID0geyAnZmlyc3QnLCAgfVxuICAgICAgICBsYXN0ICAgICAgICAgID0geyAnbGFzdCcsICAgfVxuICAgICAgICBqZXQgICAgICAgICAgID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGcxICAgICAgICAgICAgPSAoIGQgKSAtPlxuICAgICAgICAgIHVyZ2UgJ86panRzdG1fXzI1IGcxJywgZFxuICAgICAgICAgIHN3aXRjaCBkXG4gICAgICAgICAgICB3aGVuIGZpcnN0XG4gICAgICAgICAgICAgIHlpZWxkIGRcbiAgICAgICAgICAgICAgeWllbGQgMFxuICAgICAgICAgICAgd2hlbiBsYXN0XG4gICAgICAgICAgICAgIHlpZWxkIDFcbiAgICAgICAgICAgICAgeWllbGQgZFxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICB5aWVsZCBkICogMlxuICAgICAgICBnMiAgICAgICAgICAgID0gKCBkICkgLT5cbiAgICAgICAgICB1cmdlICfOqWp0c3RtX18yNiBnMicsIGRcbiAgICAgICAgICBzd2l0Y2ggZFxuICAgICAgICAgICAgd2hlbiBmaXJzdFxuICAgICAgICAgICAgICB5aWVsZCBkXG4gICAgICAgICAgICAgIHlpZWxkIDBcbiAgICAgICAgICAgIHdoZW4gbGFzdFxuICAgICAgICAgICAgICB5aWVsZCAxXG4gICAgICAgICAgICAgIHlpZWxkIGRcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgeWllbGQgZCAqIDJcbiAgICAgICAgamV0LnB1c2ggZzFcbiAgICAgICAgamV0LnB1c2ggZzJcbiAgICAgICAgamV0LnB1c2ggKCBkICkgLT4geWllbGQgZCB1bmxlc3MgZCBpbiBbIGZpcnN0LCBsYXN0LCBdXG4gICAgICAgIGRlYnVnICfOqWp0c3RtX18yNycsIGpldFxuICAgICAgICB3aGlzcGVyICfOqWp0c3RtX18yOCcsICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzI5ID0gLT4gamV0LnJ1biBmaXJzdCwgMjIsIGxhc3QgICAgICAgICAgICAgICAgICAgKSwgWyAwLCAwLCA4OCwgMiwgMSBdXG4gICAgICAgIHdoaXNwZXIgJ86panRzdG1fXzMwJywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgamV0c3RyZWFtX3NlbGVjdG9yczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgeyBTZWxlY3RvcixcbiAgICAgICAgX25vcm1hbGl6ZV9zZWxlY3RvcnMsXG4gICAgICAgIG5vcm1hbGl6ZV9zZWxlY3RvcnMsXG4gICAgICAgIHNlbGVjdG9yc19hc19saXN0LFxuICAgICAgICBpZF9mcm9tX3N5bWJvbCwgICAgICAgICB9ID0gaW50ZXJuYWxzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgQGVxICggzqlqdHN0bV9fMzEgPSAtPiB0eXBlX29mICggbmV3IEpldHN0cmVhbSgpICkgICAgICAgICAgICAgICksICdvYmplY3QnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHN0cmVhbV9pdGVtcyA9IFtcbiAgICAgICAgU3ltYm9sICdzdGFydCdcbiAgICAgICAgU3ltYm9sICdlbmQnXG4gICAgICAgIDc2LjlcbiAgICAgICAgXCJNZXhpY29cIlxuICAgICAgICBudWxsXG4gICAgICAgIF1cbiAgICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICAgIHsgcHJvYmU6ICdjdWUnLCAgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnY3VlJyAgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSMqJyAgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnY3VlJywgICAgICAgICAgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IHRydWUsICAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCAgfVxuICAgICAgICB7IHByb2JlOiAnIycsICAgICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyMnICAgICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjKicgICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJyMnLCAgICAgICAgICAgICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiB0cnVlLCAgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHByb2JlOiAnY3VlI2VuZCcsICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJ2N1ZSNlbmQnICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjZW5kJyAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJ2N1ZSNlbmQnLCAgICAgICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdlbmQnIF0sICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnI2VuZCcsICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyNlbmQnICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjZW5kJyAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJyNlbmQnLCAgICAgICAgICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdlbmQnIF0sICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcHJvYmU6ICcjZW5kLCNzdGFydCwnLCAgICAgICAgICAgICBzZWxfbGlzdDogWyAnI2VuZCcsICcjc3RhcnQnLCAnJyAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNlbmQnLCAnY3VlI3N0YXJ0JyBdLCBzZWxfcnByOiAnI2VuZCwgI3N0YXJ0LCAnLCAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ2VuZCcsICdzdGFydCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICcjZW5kLCNzdGFydCcsICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnI2VuZCcsICcjc3RhcnQnICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNlbmQnLCAnY3VlI3N0YXJ0JyBdLCBzZWxfcnByOiAnI2VuZCwgI3N0YXJ0JywgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ2VuZCcsICdzdGFydCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBwcm9iZTogJ2N1ZSNmb28jYmFyJywgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdjdWUjZm9vI2JhcicgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI2ZvbyNiYXInICAgICAgICAgIF0sIHNlbF9ycHI6ICdjdWUjZm9vI2JhcicsICAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnZm9vI2JhcicgXSwgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogJyNmb28jYmFyJywgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcjZm9vI2JhcicgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI2ZvbyNiYXInICAgICAgICAgIF0sIHNlbF9ycHI6ICcjZm9vI2JhcicsICAgICAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnZm9vI2JhcicgXSwgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHByb2JlOiAnY3VlI3N0YXJ0JywgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJ2N1ZSNzdGFydCcgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnICAgICAgICAgICAgXSwgc2VsX3JwcjogJ2N1ZSNzdGFydCcsICAgICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdzdGFydCcgXSwgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnI3N0YXJ0JywgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyNzdGFydCcgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnICAgICAgICAgICAgXSwgc2VsX3JwcjogJyNzdGFydCcsICAgICAgICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdzdGFydCcgXSwgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcHJvYmU6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBzZWxfbGlzdDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIG5ybV9zZWw6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBzZWxfcnByOiAnY3VlI3N0YXJ0LCBjdWUjZW5kJywgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ3N0YXJ0JywgJ2VuZCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6IFsgJyNzdGFydCcsICcjZW5kJyBdLCAgICAgICBzZWxfbGlzdDogWyAnI3N0YXJ0JywgJyNlbmQnICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBzZWxfcnByOiAnI3N0YXJ0LCAjZW5kJywgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ3N0YXJ0JywgJ2VuZCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICdjdWUjc3RhcnQsY3VlI2VuZCcsICAgICAgICBzZWxfbGlzdDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIG5ybV9zZWw6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBzZWxfcnByOiAnY3VlI3N0YXJ0LCBjdWUjZW5kJywgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ3N0YXJ0JywgJ2VuZCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICcjc3RhcnQsI2VuZCcsICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnI3N0YXJ0JywgJyNlbmQnICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBzZWxfcnByOiAnI3N0YXJ0LCAjZW5kJywgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ3N0YXJ0JywgJ2VuZCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICcgY3VlI3N0YXJ0LCBjdWUjZW5kICcsICAgICBzZWxfbGlzdDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIG5ybV9zZWw6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBzZWxfcnByOiAnY3VlI3N0YXJ0LCBjdWUjZW5kJywgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ3N0YXJ0JywgJ2VuZCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBwcm9iZTogbnVsbCwgICAgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcnICAgICAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJyAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcnLCAgICAgICAgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBmYWxzZSwgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiBbXSwgICAgICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgICAgICAgICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJycsICAgICAgICAgICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IGZhbHNlLCAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6IFsgW10gXSwgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAgICAgICAgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnJywgICAgICAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogWyBbICcnIF0gXSwgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcnICAgICAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJyAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcnLCAgICAgICAgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBmYWxzZSwgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnZGF0YScsICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJ2RhdGEnICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJ2RhdGEnLCAgICAgICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IGZhbHNlLCAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICcnLCAgICAgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnJyAgICAgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnJywgICAgICAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogJ2RhdGEjJywgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdkYXRhIycgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJyAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICdkYXRhIycsICAgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBmYWxzZSwgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcHJvYmU6IFsgJ2RhdGEnLCAnY3VlJyBdLCAgICAgICAgICBzZWxfbGlzdDogWyAnZGF0YScsICdjdWUnICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicsICdjdWUjKicgICAgICBdLCBzZWxfcnByOiAnZGF0YSwgY3VlJywgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogdHJ1ZSwgICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogdHJ1ZSwgIH1cbiAgICAgICAgeyBwcm9iZTogJ2RhdGEsIGN1ZScsICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdkYXRhJywgJ2N1ZScgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJywgJ2N1ZSMqJyAgICAgIF0sIHNlbF9ycHI6ICdkYXRhLCBjdWUnLCAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiB0cnVlLCAgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiB0cnVlLCAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcHJvYmU6ICdkYXRhI2ZvbyNiYXInLCBlcnJvcjogL0lEcyBvbiBkYXRhIGl0ZW1zIG5vdCBzdXBwb3J0ZWQvLCB9XG4gICAgICAgIF1cbiAgICAgIHNlbGVjdG9yc19hbmRfc2VsZWN0aW9ucyA9IFtcbiAgICAgICAgeyBzZWw6ICdjdWUnLCAgICAgICAgICAgICAgICAgICAgICBucm06ICdjdWUjKicsICAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICB7IHNlbDogJyMnLCAgICAgICAgICAgICAgICAgICAgICAgIG5ybTogJ2N1ZSMqJywgICAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBzZWw6ICdjdWUjZW5kJywgICAgICAgICAgICAgICAgICBucm06ICdjdWUjZW5kJywgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgeyBzZWw6ICcjZW5kJywgICAgICAgICAgICAgICAgICAgICBucm06ICdjdWUjZW5kJywgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHNlbDogJyNlbmQsI3N0YXJ0LCcsICAgICAgICAgICAgIG5ybTogJ2N1ZSNlbmQsY3VlI3N0YXJ0JywgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiAnI2VuZCwjc3RhcnQnLCAgICAgICAgICAgICAgbnJtOiAnY3VlI2VuZCxjdWUjc3RhcnQnLCAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHNlbDogJ2N1ZSNmb28jYmFyJywgICAgICAgICAgICAgIG5ybTogJ2N1ZSNmb28jYmFyJywgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgeyBzZWw6ICcjZm9vI2JhcicsICAgICAgICAgICAgICAgICBucm06ICdjdWUjZm9vI2JhcicsICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBzZWw6ICdjdWUjc3RhcnQnLCAgICAgICAgICAgICAgICBucm06ICdjdWUjc3RhcnQnLCAgICAgICAgICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgeyBzZWw6ICcjc3RhcnQnLCAgICAgICAgICAgICAgICAgICBucm06ICdjdWUjc3RhcnQnLCAgICAgICAgICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHNlbDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIG5ybTogJ2N1ZSNzdGFydCxjdWUjZW5kJywgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiBbICcjc3RhcnQnLCAnI2VuZCcgXSwgICAgICAgbnJtOiAnY3VlI3N0YXJ0LGN1ZSNlbmQnLCAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgeyBzZWw6ICdjdWUjc3RhcnQsY3VlI2VuZCcsICAgICAgICBucm06ICdjdWUjc3RhcnQsY3VlI2VuZCcsICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICB7IHNlbDogJyNzdGFydCwjZW5kJywgICAgICAgICAgICAgIG5ybTogJ2N1ZSNzdGFydCxjdWUjZW5kJywgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiAnIGN1ZSNzdGFydCwgY3VlI2VuZCAnLCAgICAgbnJtOiAnY3VlI3N0YXJ0LGN1ZSNlbmQnLCAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHNlbDogbnVsbCwgICAgICAgICAgICAgICAgICAgICAgIG5ybTogJ2RhdGEjKicsICAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgeyBzZWw6IFtdLCAgICAgICAgICAgICAgICAgICAgICAgICBucm06ICdkYXRhIyonLCAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgIHsgc2VsOiBbIFtdIF0sICAgICAgICAgICAgICAgICAgICAgbnJtOiAnZGF0YSMqJywgICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiB0cnVlLCBcIidNZXhpY28nXCI6IHRydWUsIG51bGw6IHRydWUgfVxuICAgICAgICB7IHNlbDogWyBbICcnIF0gXSwgICAgICAgICAgICAgICAgIG5ybTogJ2RhdGEjKicsICAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgeyBzZWw6ICdkYXRhJywgICAgICAgICAgICAgICAgICAgICBucm06ICdkYXRhIyonLCAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgIHsgc2VsOiAnJywgICAgICAgICAgICAgICAgICAgICAgICAgbnJtOiAnZGF0YSMqJywgICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiB0cnVlLCBcIidNZXhpY28nXCI6IHRydWUsIG51bGw6IHRydWUgfVxuICAgICAgICB7IHNlbDogJ2RhdGEjJywgICAgICAgICAgICAgICAgICAgIG5ybTogJ2RhdGEjKicsICAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHNlbDogWyAnZGF0YScsICdjdWUnIF0sICAgICAgICAgIG5ybTogJ2RhdGEjKixjdWUjKicsICAgICAgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgIHsgc2VsOiAnZGF0YSwgY3VlJywgICAgICAgICAgICAgICAgbnJtOiAnZGF0YSMqLGN1ZSMqJywgICAgICAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgXVxuICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBkbyA9PlxuICAgICAgICBmb3IgcCBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICAgaWYgcC5lcnJvcj9cbiAgICAgICAgICAgIEB0aHJvd3MgKCDOqWp0c3RtX18zMiA9IC0+IG5ldyBTZWxlY3RvciBwLnByb2JlICksIHAuZXJyb3JcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgcHJvYmUgICAgICAgICAgID0gcC5wcm9iZVxuICAgICAgICAgIHNlbF9saXN0ICAgICAgICA9IHNlbGVjdG9yc19hc19saXN0ICAgcHJvYmVcbiAgICAgICAgICBucm1fc2VsICAgICAgICAgPSBbICggbm9ybWFsaXplX3NlbGVjdG9ycyBwcm9iZSApLi4uLCBdXG4gICAgICAgICAgc2VsICAgICAgICAgICAgID0gbmV3IFNlbGVjdG9yICAgICAgICBwcm9iZVxuICAgICAgICAgIHNlbF9ycHIgICAgICAgICA9IHNlbC50b1N0cmluZygpXG4gICAgICAgICAgeyBkYXRhLFxuICAgICAgICAgICAgY3VlcyxcbiAgICAgICAgICAgIGFjY2VwdF9hbGwsIH0gPSBzZWwuX2dldF9leGNlcnB0KClcbiAgICAgICAgICBkYXRhICAgICAgICAgICAgPSBbICggZGF0YSApLi4uLCBdIHVubGVzcyBkYXRhIGluIFsgdHJ1ZSwgZmFsc2UsIF1cbiAgICAgICAgICBjdWVzICAgICAgICAgICAgPSBbICggY3VlcyApLi4uLCBdIHVubGVzcyBjdWVzIGluIFsgdHJ1ZSwgZmFsc2UsIF1cbiAgICAgICAgICAjIGVjaG8geyBwcm9iZSwgc2VsX2xpc3QsIG5ybV9zZWwsIHNlbF9ycHIsIGRhdGEsIGN1ZXMsIGFjY2VwdF9hbGwsIH1cbiAgICAgICAgICBAZXEgKCDOqWp0c3RtX18zMyA9IC0+IHNlbF9saXN0ICAgICksIHAuc2VsX2xpc3RcbiAgICAgICAgICBAZXEgKCDOqWp0c3RtX18zNCA9IC0+IG5ybV9zZWwgICAgICksIHAubnJtX3NlbFxuICAgICAgICAgIEBlcSAoIM6panRzdG1fXzM1ID0gLT4gc2VsX3JwciAgICAgKSwgcC5zZWxfcnByXG4gICAgICAgICAgQGVxICggzqlqdHN0bV9fMzYgPSAtPiBkYXRhICAgICAgICApLCBwLmRhdGFcbiAgICAgICAgICBAZXEgKCDOqWp0c3RtX18zNyA9IC0+IGN1ZXMgICAgICAgICksIHAuY3Vlc1xuICAgICAgICAgIEBlcSAoIM6panRzdG1fXzM4ID0gLT4gYWNjZXB0X2FsbCAgKSwgcC5hY2NlcHRfYWxsXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGRvID0+XG4gICAgICAgIGRpc3BsYXlfbWF0Y2hlciA9IHRydWVcbiAgICAgICAgZGlzcGxheV9tYXRjaGVyID0gZmFsc2VcbiAgICAgICAgZm9yIGVudHJ5IGluIHNlbGVjdG9yc19hbmRfc2VsZWN0aW9uc1xuICAgICAgICAgIHNlbGVjdG9yICA9IG5ldyBTZWxlY3RvciBlbnRyeS5zZWxcbiAgICAgICAgICBucm0gICAgICAgPSBbICggbm9ybWFsaXplX3NlbGVjdG9ycyBlbnRyeS5zZWwgKS4uLiwgXS5qb2luICcsJ1xuICAgICAgICAgIGxpbmUgICAgICA9IHsgc2VsOiBlbnRyeS5zZWwsIG5ybSwgfVxuICAgICAgICAgIGZvciBpdGVtIGluIHN0cmVhbV9pdGVtc1xuICAgICAgICAgICAgcmVzdWx0ICAgICAgICAgICAgPSBzZWxlY3Rvci5zZWxlY3QgaXRlbVxuICAgICAgICAgICAgbGluZVsgcnByIGl0ZW0gXSAgPSBzZWxlY3Rvci5zZWxlY3QgaXRlbVxuICAgICAgICAgICAgdW5sZXNzIGRpc3BsYXlfbWF0Y2hlclxuICAgICAgICAgICAgICBpZiByZXN1bHQgaXNudCBlbnRyeVsgcnByIGl0ZW0gXVxuICAgICAgICAgICAgICAgIGVjaG8geyBzZWxlY3RvcjogZW50cnkuc2VsLCBucm0sIGl0ZW0sIHJlc3VsdCwgfVxuICAgICAgICAgICAgICBAZXEgKCDOqWp0c3RtX18zOSA9IC0+IHJlc3VsdCApLCBlbnRyeVsgcnByIGl0ZW0gXVxuICAgICAgICAgIGlmIGRpc3BsYXlfbWF0Y2hlclxuICAgICAgICAgICAgZWNobyBsaW5lXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGJ1aWxkX3BpcGVsaW5lczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIyB7IFNlbGVjdG9yLFxuICAgICAgIyAgIF9ub3JtYWxpemVfc2VsZWN0b3JzLFxuICAgICAgIyAgIG5vcm1hbGl6ZV9zZWxlY3RvcnMsXG4gICAgICAjICAgc2VsZWN0b3JzX2FzX2xpc3QsXG4gICAgICAjICAgaWRfZnJvbV9zeW1ib2wsICAgICAgICAgfSA9IGludGVybmFsc1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBqZXQgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgamV0LnB1c2ggcHJlcGVuZCA9ICggZCApIC0+IHlpZWxkICcoJyArIGRcbiAgICAgICAgamV0LnB1c2ggYXBwcGVuZCA9ICggZCApIC0+IHlpZWxkIGQgKyAnKSdcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNDAgPSAtPiBqZXQuZ2V0X2ZpcnN0ICdzdHJpbmcnICksICcoc3RyaW5nKSdcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgamV0ID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCAnKCcgKyBkXG4gICAgICAgIGpldC5wdXNoIGFwcHBlbmQgPSAoIGQgKSAtPiB5aWVsZCBkICsgJyknXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzQxID0gLT4gamV0LnNlbmQgJ3N0cmluZycgICksIG51bGxcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNDIgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAnc3RyaW5nJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX180MyA9IC0+IGpldC5zZW5kICdvdGhlcicgICksIG51bGxcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNDQgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAnc3RyaW5nJywgJ290aGVyJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX180NSA9IC0+IGpldC5nZXRfZmlyc3QoKSAgICApLCAnKHN0cmluZyknXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzQ2ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFtdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzQ3ID0gLT4gamV0LnJ1bigpICAgICAgICAgICksIFtdXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGpldCA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBqZXQucHVzaCBwcmVwZW5kID0gKCBkICkgLT4geWllbGQgJygnICsgZFxuICAgICAgICBqZXQucHVzaCBhcHBwZW5kID0gKCBkICkgLT4geWllbGQgZCArICcpJ1xuICAgICAgICBAZXEgKCDOqWp0c3RtX180OCA9IC0+IGpldC5zZW5kICdzdHJpbmcnICApLCBudWxsXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzQ5ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ3N0cmluZycsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNTAgPSAtPiBqZXQuc2VuZCAnb3RoZXInICApLCBudWxsXG4gICAgICAgIGl0ZXJhdG9yID0gamV0LndhbGsoKVxuICAgICAgICBAZXEgKCDOqWp0c3RtX181MSA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbICdzdHJpbmcnLCAnb3RoZXInLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzUyID0gLT4gaXRlcmF0b3IubmV4dCgpICAgICksIHsgZG9uZTogZmFsc2UsICB2YWx1ZTogJyhzdHJpbmcpJywgfVxuICAgICAgICBAZXEgKCDOqWp0c3RtX181MyA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbICdvdGhlcicsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNTQgPSAtPiBpdGVyYXRvci5uZXh0KCkgICAgKSwgeyBkb25lOiBmYWxzZSwgIHZhbHVlOiAnKG90aGVyKScsIH1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNTUgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgW11cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNTYgPSAtPiBpdGVyYXRvci5uZXh0KCkgICAgKSwgeyBkb25lOiB0cnVlLCAgIHZhbHVlOiBudWxsLCB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGpldCA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBqZXQucHVzaCBwcmVwZW5kID0gKCBkICkgLT4geWllbGQgJygnICsgZFxuICAgICAgICBqZXQucHVzaCBhcHBwZW5kID0gKCBkICkgLT4geWllbGQgZCArICcpJ1xuICAgICAgICBAZXEgKCDOqWp0c3RtX181NyA9IC0+IGpldC5zZW5kICdzdHJpbmcnICApLCBudWxsXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzU4ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ3N0cmluZycsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNTkgPSAtPiBqZXQuc2VuZCAnb3RoZXInICApLCBudWxsXG4gICAgICAgIGl0ZXJhdG9yID0gamV0LndhbGsgJ3Ryb2lzJywgJ3F1YXRyZSdcbiAgICAgICAgQGVxICggzqlqdHN0bV9fNjAgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAnc3RyaW5nJywgJ290aGVyJywgJ3Ryb2lzJywgJ3F1YXRyZScsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNjEgPSAtPiBpdGVyYXRvci5uZXh0KCkgICAgKSwgeyBkb25lOiBmYWxzZSwgIHZhbHVlOiAnKHN0cmluZyknLCB9XG4gICAgICAgIEBlcSAoIM6panRzdG1fXzYyID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ290aGVyJywgJ3Ryb2lzJywgJ3F1YXRyZScsIF1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNjMgPSAtPiBpdGVyYXRvci5uZXh0KCkgICAgKSwgeyBkb25lOiBmYWxzZSwgIHZhbHVlOiAnKG90aGVyKScsIH1cbiAgICAgICAgQGVxICggzqlqdHN0bV9fNjQgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAndHJvaXMnLCAncXVhdHJlJywgXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX182NSA9IC0+IGl0ZXJhdG9yLm5leHQoKSAgICApLCB7IGRvbmU6IGZhbHNlLCAgdmFsdWU6ICcodHJvaXMpJywgfVxuICAgICAgICBAZXEgKCDOqWp0c3RtX182NiA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbICdxdWF0cmUnLCBdXG4gICAgICAgIEBlcSAoIM6panRzdG1fXzY3ID0gLT4gaXRlcmF0b3IubmV4dCgpICAgICksIHsgZG9uZTogZmFsc2UsICB2YWx1ZTogJyhxdWF0cmUpJywgfVxuICAgICAgICBAZXEgKCDOqWp0c3RtX182OCA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbXVxuICAgICAgICBAZXEgKCDOqWp0c3RtX182OSA9IC0+IGl0ZXJhdG9yLm5leHQoKSAgICApLCB7IGRvbmU6IHRydWUsICAgdmFsdWU6IG51bGwsIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29uZmlndXJlX3RyYW5zZm9ybXM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgSmV0c3RyZWFtLFxuICAgICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAgICMgeyBTZWxlY3RvcixcbiAgICAgICMgICBfbm9ybWFsaXplX3NlbGVjdG9ycyxcbiAgICAgICMgICBub3JtYWxpemVfc2VsZWN0b3JzLFxuICAgICAgIyAgIHNlbGVjdG9yc19hc19saXN0LFxuICAgICAgIyAgIGlkX2Zyb21fc3ltYm9sLCAgICAgICAgIH0gPSBpbnRlcm5hbHNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmlyc3QgPSBTeW1ib2wgJ2ZpcnN0J1xuICAgICAgICBsYXN0ICA9IFN5bWJvbCAnbGFzdCdcbiAgICAgICAgamV0ID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoICdkYXRhLCNsYXN0JywgcHJlcGVuZCA9ICggZCApIC0+XG4gICAgICAgICAgc3dpdGNoIGRcbiAgICAgICAgICAgIHdoZW4gbGFzdCAgIHRoZW4geWllbGQgJ3lheSc7ICAgeWllbGQgZFxuICAgICAgICAgICAgd2hlbiBmaXJzdCAgdGhlbiB5aWVsZCAnb29wcyc7ICB5aWVsZCBkXG4gICAgICAgICAgICBlbHNlIHlpZWxkICcoJyArIGRcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICBqZXQucHVzaCAgICAgICAgICAgICAgICAgIGFwcHBlbmQgPSAoIGQgKSAtPiB5aWVsZCBkICsgJyknXG4gICAgICAgIGpldC5wdXNoICcjZmlyc3QsI2xhc3QnLCAgZmlsdGVyICA9ICggZCApIC0+IGRlYnVnICfOqWp0c3RtX183MCcsIGQ7IHlpZWxkIHJldHVyblxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGRlYnVnICfOqWp0c3RtX183MScsIGpldC5ydW4gZmlyc3QsICdiaXJkaXN0aGV3b3JkJywgbGFzdFxuICAgICAgICAjIEBlcSAoIM6panRzdG1fXzcyID0gLT4gamV0LmdldF9maXJzdCAnc3RyaW5nJyApLCAnKHN0cmluZyknXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEB0YXNrc1xuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgamV0c3RyZWFtXzE6IEB0YXNrcy5qZXRzdHJlYW1fMSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGNvbmZpZ3VyZV90cmFuc2Zvcm1zOiBAdGFza3MuY29uZmlndXJlX3RyYW5zZm9ybXMsIH1cbiJdfQ==
