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
      var $, Jetstream, SFMODULES, internals, type_of, Ωkvrt___1, Ωkvrt___2;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, $, internals} = SFMODULES.require_jetstream());
      //.....................................................................................................
      this.eq((Ωkvrt___1 = function() {
        return type_of(new Jetstream());
      }), 'object');
      this.eq((Ωkvrt___2 = function() {
        return type_of((new Jetstream()).walk('data'));
      }), 'generator');
      (() => {        //.....................................................................................................
        var ex, first, jet, last, surround, upper, watch, watched_1, watched_2, watched_3, watched_4, Ωap__10, Ωap__11, Ωap__12, Ωap__13, Ωap__14, Ωap__15, Ωap__16, Ωap__17, Ωap___3, Ωap___4, Ωap___9;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream();
        //...................................................................................................
        this.eq((Ωap___3 = function() {
          return jet.length;
        }), 0);
        this.eq((Ωap___4 = function() {
          return jet.is_empty;
        }), true);
        //...................................................................................................
        watched_1 = [];
        watched_2 = [];
        watched_3 = [];
        watched_4 = [];
        jet.push(watch = function(d) {
          help('Ωap___5', rpr(d));
          return watched_1.push(d);
        });
        jet.push(upper = function*(d) {
          return (yield d.toUpperCase());
        });
        jet.push(watch = function(d) {
          info('Ωap___6', rpr(d));
          return watched_2.push(d);
        });
        jet.push(ex = function*(d, mark = '!') {
          return (yield d + mark);
        });
        jet.push(watch = function(d) {
          help('Ωap___7', rpr(d));
          return watched_3.push(d);
        });
        jet.push($({first, last}, surround = function*(d) {
          if (d === first) {
            return (yield `Let's say: \"`);
          }
          if (d === last) {
            return (yield '".');
          }
          return (yield d);
        }));
        jet.push(watch = function(d) {
          urge('Ωap___8', rpr(d));
          return watched_4.push(d);
        });
        //...................................................................................................
        this.eq((Ωap___9 = function() {
          return jet.length;
        }), 7);
        this.eq((Ωap__10 = function() {
          return jet.is_empty;
        }), false);
        this.eq((Ωap__11 = function() {
          var d;
          return [
            ...((function() {
              var results;
              results = [];
              for (d of jet.walk('hidey-ho')) {
                results.push(d);
              }
              return results;
            })())
          ];
        }), [`Let's say: \"`, 'HIDEY-HO!', '".']);
        this.eq((Ωap__12 = function() {
          return watched_1;
        }), ['hidey-ho']);
        this.eq((Ωap__13 = function() {
          return watched_2;
        }), ['HIDEY-HO']);
        this.eq((Ωap__14 = function() {
          return watched_3;
        }), ['HIDEY-HO!']);
        this.eq((Ωap__15 = function() {
          return watched_4;
        }), [`Let's say: \"`, 'HIDEY-HO!', '".']);
        this.eq((Ωap__16 = function() {
          var d;
          return [
            ...((function() {
              var results;
              results = [];
              for (d of jet.walk('hidey-ho')) {
                results.push(d);
              }
              return results;
            })())
          ].join('');
        }), `Let's say: "HIDEY-HO!".`);
        this.eq((Ωap__17 = function() {
          var d;
          return ((function() {
            var results;
            results = [];
            for (d of jet.run('hidey-ho')) {
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
      var $, Jetstream, SFMODULES, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, $, internals} = SFMODULES.require_jetstream());
      (() => {        //.....................................................................................................
        var add_1, jet, Ωap__18;
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
        this.eq((Ωap__18 = function() {
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
      var $, Jetstream, SFMODULES, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, $, internals} = SFMODULES.require_jetstream());
      (() => {        //.....................................................................................................
        var Ωap__19, Ωap__20;
        /* empty pipeline is a pipeline without transforms, so data is passed through untransformed: */
        this.eq((Ωap__19 = function() {
          return [...((new Jetstream()).walk('data'))];
        }), ['data']);
        this.eq((Ωap__20 = function() {
          return (new Jetstream()).run('data');
        }), ['data']);
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    jetstream_3: function() {
      var $, Jetstream, SFMODULES, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, $, internals} = SFMODULES.require_jetstream());
      (() => {        //.....................................................................................................
        var collector, p_1, p_2, p_3, Ωap__21, Ωap__22, Ωap__23;
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
        this.eq((Ωap__21 = function() {
          return p_3.run('my-data');
        }), ['my-data № 5 № 3 № 1 № 2 № 4 № 6']);
        this.eq((Ωap__22 = function() {
          return collector;
        }), ['p3-t1', 'p2-t1', 'p1-t1', 'p1-t2', 'p2-t2', 'p3-t2']);
        this.eq((Ωap__23 = function() {
          return p_3.get_first('my-data');
        }), 'my-data № 5 № 3 № 1 № 2 № 4 № 6');
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    jetstream_3: function() {
      var $, Jetstream, SFMODULES, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, $, internals} = SFMODULES.require_jetstream());
      (() => {        //.....................................................................................................
        var first, g, jet, last, transform_1, transform_2, Ωkvrt__30, Ωkvrt__31, Ωkvrt__32;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream();
        g = function*(d) {
          urge('Ωkvrt__24', d);
          if (d === first) {
            info('Ωkvrt__25', "yield for first");
          }
          if (d === first) {
            yield 0;
          }
          if (d !== first && d !== last) {
            info('Ωkvrt__26', "yield for data");
          }
          if (d !== first && d !== last) {
            yield d * 2;
          }
          if (d === last) {
            info('Ωkvrt__27', "yield for last");
          }
          if (d === last) {
            return (yield 1);
          }
        };
        transform_1 = $({first}, g);
        transform_2 = $({last}, g);
        jet.push(transform_1);
        jet.push(transform_2);
        debug('Ωkvrt__28', jet);
        whisper('Ωkvrt__29', '————————————————————————————————————–');
        this.eq((Ωkvrt__30 = function() {
          return transform_1[internals.CFG];
        }), {first});
        this.eq((Ωkvrt__31 = function() {
          return transform_2[internals.CFG];
        }), {last});
        this.eq((Ωkvrt__32 = function() {
          return jet.run(22);
        }), [0, 1, 88, 1]);
        whisper('Ωkvrt__33', '————————————————————————————————————–');
        return null;
      })();
      (()/* same as above but the transforms are separate */ => {        //.....................................................................................................
        var first, g1, g2, jet, last, transform_1, transform_2, Ωkvrt__44, Ωkvrt__45, Ωkvrt__46;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream();
        g1 = function*(d) {
          urge('Ωkvrt__34 g1', d);
          if (d === first) {
            info('Ωkvrt__35 g1', "yield for first");
          }
          if (d === first) {
            yield 0;
          }
          if (d !== first && d !== last) {
            info('Ωkvrt__36 g1', "yield for data");
          }
          if (d !== first && d !== last) {
            yield d * 2;
          }
          if (d === last) {
            info('Ωkvrt__37 g1', "yield for last");
          }
          if (d === last) {
            return (yield 1);
          }
        };
        g2 = function*(d) {
          urge('Ωkvrt__38 g2', d);
          if (d === first) {
            info('Ωkvrt__39 g2', "yield for first");
          }
          if (d === first) {
            yield 0;
          }
          if (d !== first && d !== last) {
            info('Ωkvrt__40 g2', "yield for data");
          }
          if (d !== first && d !== last) {
            yield d * 2;
          }
          if (d === last) {
            info('Ωkvrt__41 g2', "yield for last");
          }
          if (d === last) {
            return (yield 1);
          }
        };
        transform_1 = $({first}, g1);
        transform_2 = $({last}, g2);
        jet.push(transform_1);
        jet.push(transform_2);
        debug('Ωkvrt__42', jet);
        whisper('Ωkvrt__43', '————————————————————————————————————–');
        this.eq((Ωkvrt__44 = function() {
          return transform_1[internals.CFG];
        }), {first});
        this.eq((Ωkvrt__45 = function() {
          return transform_2[internals.CFG];
        }), {last});
        this.eq((Ωkvrt__46 = function() {
          return jet.run(22);
        }), [0, 1, 88, 1]);
        whisper('Ωkvrt__47', '————————————————————————————————————–');
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    jetstream_selectors: function() {
      var $, Jetstream, SFMODULES, Selector, _normalize_selectors, id_from_symbol, internals, normalize_selectors, probes_and_matchers, selectors_and_selections, selectors_as_list, stream_items, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, $, internals} = SFMODULES.require_jetstream());
      ({Selector, _normalize_selectors, normalize_selectors, selectors_as_list, id_from_symbol} = internals);
      //.....................................................................................................
      // @eq ( Ωkvrt__48 = -> type_of ( new Jetstream() )              ), 'object'
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
        var accept_all, cues, data, i, len, nrm_sel, p, probe, sel, sel_list, sel_rpr, Ωjstrm__49, Ωjstrm__50, Ωjstrm__51, Ωjstrm__52, Ωjstrm__53, Ωjstrm__54, Ωjstrm__55;
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          p = probes_and_matchers[i];
          if (p.error != null) {
            this.throws((Ωjstrm__49 = function() {
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
          this.eq((Ωjstrm__50 = function() {
            return sel_list;
          }), p.sel_list);
          this.eq((Ωjstrm__51 = function() {
            return nrm_sel;
          }), p.nrm_sel);
          this.eq((Ωjstrm__52 = function() {
            return sel_rpr;
          }), p.sel_rpr);
          this.eq((Ωjstrm__53 = function() {
            return data;
          }), p.data);
          this.eq((Ωjstrm__54 = function() {
            return cues;
          }), p.cues);
          this.eq((Ωjstrm__55 = function() {
            return accept_all;
          }), p.accept_all);
        }
        return null;
      })();
      (() => {        //-----------------------------------------------------------------------------------------------------
        var display_matcher, entry, i, item, j, len, len1, line, nrm, result, selector, Ωkvrt__56;
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
              this.eq((Ωkvrt__56 = function() {
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
      var $, Jetstream, SFMODULES, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, $, internals} = SFMODULES.require_jetstream());
      (() => {        // { Selector,
        //   _normalize_selectors,
        //   normalize_selectors,
        //   selectors_as_list,
        //   id_from_symbol,         } = internals
        //.....................................................................................................
        var apppend, jet, prepend, Ωkvrt__57;
        jet = new Jetstream();
        jet.push(prepend = function*(d) {
          return (yield '(' + d);
        });
        jet.push(apppend = function*(d) {
          return (yield d + ')');
        });
        this.eq((Ωkvrt__57 = function() {
          return jet.get_first('string');
        }), '(string)');
        return null;
      })();
      (() => {        //.....................................................................................................
        var apppend, jet, prepend, Ωkvrt__58, Ωkvrt__59, Ωkvrt__60, Ωkvrt__61, Ωkvrt__62, Ωkvrt__63, Ωkvrt__64;
        jet = new Jetstream();
        jet.push(prepend = function*(d) {
          return (yield '(' + d);
        });
        jet.push(apppend = function*(d) {
          return (yield d + ')');
        });
        this.eq((Ωkvrt__58 = function() {
          return jet.send('string');
        }), null);
        this.eq((Ωkvrt__59 = function() {
          return jet.shelf;
        }), ['string']);
        this.eq((Ωkvrt__60 = function() {
          return jet.send('other');
        }), null);
        this.eq((Ωkvrt__61 = function() {
          return jet.shelf;
        }), ['string', 'other']);
        this.eq((Ωkvrt__62 = function() {
          return jet.get_first();
        }), '(string)');
        this.eq((Ωkvrt__63 = function() {
          return jet.shelf;
        }), []);
        return this.eq((Ωkvrt__64 = function() {
          return jet.run();
        }), []);
      })();
      (() => {        //.....................................................................................................
        var apppend, iterator, jet, prepend, Ωkvrt__65, Ωkvrt__66, Ωkvrt__67, Ωkvrt__68, Ωkvrt__69, Ωkvrt__70, Ωkvrt__71, Ωkvrt__72, Ωkvrt__73;
        jet = new Jetstream();
        jet.push(prepend = function*(d) {
          return (yield '(' + d);
        });
        jet.push(apppend = function*(d) {
          return (yield d + ')');
        });
        this.eq((Ωkvrt__65 = function() {
          return jet.send('string');
        }), null);
        this.eq((Ωkvrt__66 = function() {
          return jet.shelf;
        }), ['string']);
        this.eq((Ωkvrt__67 = function() {
          return jet.send('other');
        }), null);
        iterator = jet.walk();
        this.eq((Ωkvrt__68 = function() {
          return jet.shelf;
        }), ['string', 'other']);
        this.eq((Ωkvrt__69 = function() {
          return iterator.next();
        }), {
          done: false,
          value: '(string)'
        });
        this.eq((Ωkvrt__70 = function() {
          return jet.shelf;
        }), ['other']);
        this.eq((Ωkvrt__71 = function() {
          return iterator.next();
        }), {
          done: false,
          value: '(other)'
        });
        this.eq((Ωkvrt__72 = function() {
          return jet.shelf;
        }), []);
        this.eq((Ωkvrt__73 = function() {
          return iterator.next();
        }), {
          done: true,
          value: null
        });
        return null;
      })();
      (() => {        //.....................................................................................................
        var apppend, iterator, jet, prepend, Ωkvrt__74, Ωkvrt__75, Ωkvrt__76, Ωkvrt__77, Ωkvrt__78, Ωkvrt__79, Ωkvrt__80, Ωkvrt__81, Ωkvrt__82, Ωkvrt__83, Ωkvrt__84, Ωkvrt__85, Ωkvrt__86;
        jet = new Jetstream();
        jet.push(prepend = function*(d) {
          return (yield '(' + d);
        });
        jet.push(apppend = function*(d) {
          return (yield d + ')');
        });
        this.eq((Ωkvrt__74 = function() {
          return jet.send('string');
        }), null);
        this.eq((Ωkvrt__75 = function() {
          return jet.shelf;
        }), ['string']);
        this.eq((Ωkvrt__76 = function() {
          return jet.send('other');
        }), null);
        iterator = jet.walk('trois', 'quatre');
        this.eq((Ωkvrt__77 = function() {
          return jet.shelf;
        }), ['string', 'other', 'trois', 'quatre']);
        this.eq((Ωkvrt__78 = function() {
          return iterator.next();
        }), {
          done: false,
          value: '(string)'
        });
        this.eq((Ωkvrt__79 = function() {
          return jet.shelf;
        }), ['other', 'trois', 'quatre']);
        this.eq((Ωkvrt__80 = function() {
          return iterator.next();
        }), {
          done: false,
          value: '(other)'
        });
        this.eq((Ωkvrt__81 = function() {
          return jet.shelf;
        }), ['trois', 'quatre']);
        this.eq((Ωkvrt__82 = function() {
          return iterator.next();
        }), {
          done: false,
          value: '(trois)'
        });
        this.eq((Ωkvrt__83 = function() {
          return jet.shelf;
        }), ['quatre']);
        this.eq((Ωkvrt__84 = function() {
          return iterator.next();
        }), {
          done: false,
          value: '(quatre)'
        });
        this.eq((Ωkvrt__85 = function() {
          return jet.shelf;
        }), []);
        this.eq((Ωkvrt__86 = function() {
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
      var $, Jetstream, SFMODULES, internals, type_of;
      return null;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, $, internals} = SFMODULES.require_jetstream());
      return (() => {        // { Selector,
        //   _normalize_selectors,
        //   normalize_selectors,
        //   selectors_as_list,
        //   id_from_symbol,         } = internals
        //.....................................................................................................
        var apppend, jet, prepend;
        jet = new Jetstream();
        jet.push('data,#last', prepend = function*(d) {
          if (d === last) {
            return (yield 'yay');
          }
          return (yield '(' + d);
        });
        jet.push(apppend = function*(d) {
          return (yield d + ')');
        });
        debug('Ωkvrt__28', jet.run('birdistheword'));
        // @eq ( Ωkvrt__57 = -> jet.get_first 'string' ), '(string)'
        return null;
      })();
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      return (new Test(guytest_cfg)).test(this.tasks);
    })();
  }

  // ( new Test guytest_cfg ).test { configure_transforms: @tasks.configure_transforms, }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtamV0c3RyZWFtLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBR0ksQ0FBQTs7SUFBQSxXQUFBLEVBQWEsUUFBQSxDQUFBLENBQUE7QUFDakIsVUFBQSxDQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQTtNQUFNLFNBQUEsR0FBOEIsT0FBQSxDQUFRLG1DQUFSO01BQzlCLENBQUEsQ0FBRSxPQUFG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V0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDthQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsSUFBQyxDQUFBLEtBQS9CO0lBSHNDLENBQUEsSUFBeEM7OztFQTliQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtc2Ztb2R1bGVzL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGFza3MgPVxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBqZXRzdHJlYW1fMTogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgICQsXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cnRfX18xID0gLT4gdHlwZV9vZiAoIG5ldyBKZXRzdHJlYW0oKSApICAgICAgICAgICAgICApLCAnb2JqZWN0J1xuICAgICAgQGVxICggzqlrdnJ0X19fMiA9IC0+IHR5cGVfb2YgKCBuZXcgSmV0c3RyZWFtKCkgKS53YWxrICdkYXRhJyAgKSwgJ2dlbmVyYXRvcidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmlyc3QgICAgID0gU3ltYm9sICdmaXJzdCdcbiAgICAgICAgbGFzdCAgICAgID0gU3ltYm9sICdsYXN0J1xuICAgICAgICBqZXQgICAgICAgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWFwX19fMyA9IC0+IGpldC5sZW5ndGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAwXG4gICAgICAgIEBlcSAoIM6pYXBfX180ID0gLT4gamV0LmlzX2VtcHR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB3YXRjaGVkXzEgPSBbXVxuICAgICAgICB3YXRjaGVkXzIgPSBbXVxuICAgICAgICB3YXRjaGVkXzMgPSBbXVxuICAgICAgICB3YXRjaGVkXzQgPSBbXVxuICAgICAgICBqZXQucHVzaCB3YXRjaCA9ICggZCAgICAgICAgICAgICAgKSAtPiBoZWxwICfOqWFwX19fNScsIHJwciBkOyB3YXRjaGVkXzEucHVzaCBkXG4gICAgICAgIGpldC5wdXNoIHVwcGVyID0gKCBkICAgICAgICAgICAgICApIC0+IHlpZWxkIGQudG9VcHBlckNhc2UoKVxuICAgICAgICBqZXQucHVzaCB3YXRjaCA9ICggZCAgICAgICAgICAgICAgKSAtPiBpbmZvICfOqWFwX19fNicsIHJwciBkOyB3YXRjaGVkXzIucHVzaCBkXG4gICAgICAgIGpldC5wdXNoIGV4ICAgID0gKCBkLCBtYXJrID0gJyEnICApIC0+IHlpZWxkIGQgKyBtYXJrXG4gICAgICAgIGpldC5wdXNoIHdhdGNoID0gKCBkICAgICAgICAgICAgICApIC0+IGhlbHAgJ86pYXBfX183JywgcnByIGQ7IHdhdGNoZWRfMy5wdXNoIGRcbiAgICAgICAgamV0LnB1c2ggJCB7IGZpcnN0LCBsYXN0LCB9LCBzdXJyb3VuZCA9ICggZCApIC0+XG4gICAgICAgICAgcmV0dXJuIHlpZWxkIFwiXCJcIkxldCdzIHNheTogXFxcIlwiXCJcIiAgaWYgZCBpcyBmaXJzdFxuICAgICAgICAgIHJldHVybiB5aWVsZCAnXCIuJyAgICAgICAgICAgICAgICAgaWYgZCBpcyBsYXN0XG4gICAgICAgICAgeWllbGQgZFxuICAgICAgICBqZXQucHVzaCB3YXRjaCA9ICggZCAgICAgICAgICAgICAgKSAtPiB1cmdlICfOqWFwX19fOCcsIHJwciBkOyB3YXRjaGVkXzQucHVzaCBkXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlhcF9fXzkgPSAtPiBqZXQubGVuZ3RoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCA3XG4gICAgICAgIEBlcSAoIM6pYXBfXzEwID0gLT4gamV0LmlzX2VtcHR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICAgQGVxICggzqlhcF9fMTEgPSAtPiBbICggZCBmb3IgZCBmcm9tIGpldC53YWxrICdoaWRleS1obycgKS4uLiwgXSAgICAgICAgICAgICApLCBbIFwiXCJcIkxldCdzIHNheTogXFxcIlwiXCJcIiwgJ0hJREVZLUhPIScsICdcIi4nIF1cbiAgICAgICAgQGVxICggzqlhcF9fMTIgPSAtPiB3YXRjaGVkXzEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbICdoaWRleS1obycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICBAZXEgKCDOqWFwX18xMyA9IC0+IHdhdGNoZWRfMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgJ0hJREVZLUhPJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgIEBlcSAoIM6pYXBfXzE0ID0gLT4gd2F0Y2hlZF8zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAnSElERVktSE8hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgQGVxICggzqlhcF9fMTUgPSAtPiB3YXRjaGVkXzQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIFwiXCJcIkxldCdzIHNheTogXFxcIlwiXCJcIiwgJ0hJREVZLUhPIScsICdcIi4nICAgXVxuICAgICAgICBAZXEgKCDOqWFwX18xNiA9IC0+IFsgKCBkIGZvciBkIGZyb20gamV0LndhbGsgJ2hpZGV5LWhvJyApLi4uLCBdLmpvaW4gJycgICAgICksIFwiXCJcIkxldCdzIHNheTogXCJISURFWS1ITyFcIi5cIlwiXCJcbiAgICAgICAgQGVxICggzqlhcF9fMTcgPSAtPiAoICAgZCBmb3IgZCBmcm9tIGpldC5ydW4gICdoaWRleS1obycgICAgICAgKS5qb2luICcnICAgICApLCBcIlwiXCJMZXQncyBzYXk6IFwiSElERVktSE8hXCIuXCJcIlwiXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGpldHN0cmVhbV8yOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgJCxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGpldCAgICAgICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGpldC5wdXNoIGFkZF8xID0gKCBkICkgLT4geWllbGQgZCArIDFcbiAgICAgICAgamV0LnB1c2ggYWRkXzEgPSAoIGQgKSAtPiB5aWVsZCBkICsgMVxuICAgICAgICBqZXQucHVzaCBhZGRfMSA9ICggZCApIC0+IHlpZWxkIGQgKyAxXG4gICAgICAgIGpldC5wdXNoIGFkZF8xID0gKCBkICkgLT4geWllbGQgZCArIDFcbiAgICAgICAgamV0LnB1c2ggYWRkXzEgPSAoIGQgKSAtPiB5aWVsZCBkICsgMVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pYXBfXzE4ID0gLT4gWyAoIGQgZm9yIGQgZnJvbSBqZXQud2FsayAwICkuLi4sIF0gICAgICAgICAgKSwgWyA1LCBdXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGpldHN0cmVhbV8yOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgJCxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgICMjIyBlbXB0eSBwaXBlbGluZSBpcyBhIHBpcGVsaW5lIHdpdGhvdXQgdHJhbnNmb3Jtcywgc28gZGF0YSBpcyBwYXNzZWQgdGhyb3VnaCB1bnRyYW5zZm9ybWVkOiAjIyNcbiAgICAgICAgQGVxICggzqlhcF9fMTkgPSAtPiBbICggKCBuZXcgSmV0c3RyZWFtKCkgKS53YWxrICdkYXRhJyApLi4uLCAgXSApLCBbICdkYXRhJywgXVxuICAgICAgICBAZXEgKCDOqWFwX18yMCA9IC0+ICAgICAoIG5ldyBKZXRzdHJlYW0oKSApLnJ1biAgJ2RhdGEnICAgICAgICAgICksIFsgJ2RhdGEnLCBdXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGpldHN0cmVhbV8zOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgJCxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGNvbGxlY3RvciA9IFtdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcF8xID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIHBfMS5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMS10MSc7IHlpZWxkIGQgKyAnIOKEliAxJ1xuICAgICAgICBwXzEucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDEtdDInOyB5aWVsZCBkICsgJyDihJYgMidcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBwXzIgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgcF8yLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AyLXQxJzsgeWllbGQgZCArICcg4oSWIDMnXG4gICAgICAgIHBfMi5wdXNoIHBfMVxuICAgICAgICBwXzIucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDItdDInOyB5aWVsZCBkICsgJyDihJYgNCdcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBwXzMgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgcF8zLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AzLXQxJzsgeWllbGQgZCArICcg4oSWIDUnXG4gICAgICAgIHBfMy5wdXNoIHBfMlxuICAgICAgICBwXzMucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDMtdDInOyB5aWVsZCBkICsgJyDihJYgNidcbiAgICAgICAgQGVxICggzqlhcF9fMjEgPSAtPiBwXzMucnVuICAgICAgICAnbXktZGF0YScgKSwgWyAnbXktZGF0YSDihJYgNSDihJYgMyDihJYgMSDihJYgMiDihJYgNCDihJYgNicgLCBdXG4gICAgICAgIEBlcSAoIM6pYXBfXzIyID0gLT4gY29sbGVjdG9yICAgICAgICAgICAgICAgICksIFsgJ3AzLXQxJywgJ3AyLXQxJywgJ3AxLXQxJywgJ3AxLXQyJywgJ3AyLXQyJywgJ3AzLXQyJyBdXG4gICAgICAgIEBlcSAoIM6pYXBfXzIzID0gLT4gcF8zLmdldF9maXJzdCAgJ215LWRhdGEnICksICdteS1kYXRhIOKEliA1IOKEliAzIOKEliAxIOKEliAyIOKEliA0IOKEliA2J1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBqZXRzdHJlYW1fMzogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgICQsXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmaXJzdCAgICAgICAgID0gU3ltYm9sICdmaXJzdCdcbiAgICAgICAgbGFzdCAgICAgICAgICA9IFN5bWJvbCAnbGFzdCdcbiAgICAgICAgamV0ICAgICAgICAgICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBnICAgICAgICAgICAgID0gKCBkICkgLT5cbiAgICAgICAgICB1cmdlICfOqWt2cnRfXzI0JywgZFxuICAgICAgICAgIGluZm8gJ86pa3ZydF9fMjUnLCBcInlpZWxkIGZvciBmaXJzdFwiIGlmIGQgaXMgZmlyc3RcbiAgICAgICAgICB5aWVsZCAwIGlmIGQgaXMgZmlyc3RcbiAgICAgICAgICBpbmZvICfOqWt2cnRfXzI2JywgXCJ5aWVsZCBmb3IgZGF0YVwiIHVubGVzcyBkIGluIFsgZmlyc3QsIGxhc3QsIF1cbiAgICAgICAgICB5aWVsZCBkICogMiB1bmxlc3MgZCBpbiBbIGZpcnN0LCBsYXN0LCBdXG4gICAgICAgICAgaW5mbyAnzqlrdnJ0X18yNycsIFwieWllbGQgZm9yIGxhc3RcIiBpZiBkIGlzIGxhc3RcbiAgICAgICAgICB5aWVsZCAxIGlmIGQgaXMgbGFzdFxuICAgICAgICB0cmFuc2Zvcm1fMSAgID0gJCB7IGZpcnN0LCAgfSwgZ1xuICAgICAgICB0cmFuc2Zvcm1fMiAgID0gJCB7IGxhc3QsICAgfSwgZ1xuICAgICAgICBqZXQucHVzaCB0cmFuc2Zvcm1fMVxuICAgICAgICBqZXQucHVzaCB0cmFuc2Zvcm1fMlxuICAgICAgICBkZWJ1ZyAnzqlrdnJ0X18yOCcsIGpldFxuICAgICAgICB3aGlzcGVyICfOqWt2cnRfXzI5JywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgQGVxICggzqlrdnJ0X18zMCA9IC0+IHRyYW5zZm9ybV8xWyBpbnRlcm5hbHMuQ0ZHIF0gKSwgeyBmaXJzdCwgIH1cbiAgICAgICAgQGVxICggzqlrdnJ0X18zMSA9IC0+IHRyYW5zZm9ybV8yWyBpbnRlcm5hbHMuQ0ZHIF0gKSwgeyBsYXN0LCAgIH1cbiAgICAgICAgQGVxICggzqlrdnJ0X18zMiA9IC0+IGpldC5ydW4gMjIgICAgICAgICAgICAgICAgICAgKSwgWyAwLCAxLCA4OCwgMSwgXVxuICAgICAgICB3aGlzcGVyICfOqWt2cnRfXzMzJywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT4gIyMjIHNhbWUgYXMgYWJvdmUgYnV0IHRoZSB0cmFuc2Zvcm1zIGFyZSBzZXBhcmF0ZSAjIyNcbiAgICAgICAgZmlyc3QgICAgICAgICA9IFN5bWJvbCAnZmlyc3QnXG4gICAgICAgIGxhc3QgICAgICAgICAgPSBTeW1ib2wgJ2xhc3QnXG4gICAgICAgIGpldCAgICAgICAgICAgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgZzEgICAgICAgICAgICA9ICggZCApIC0+XG4gICAgICAgICAgdXJnZSAnzqlrdnJ0X18zNCBnMScsIGRcbiAgICAgICAgICBpbmZvICfOqWt2cnRfXzM1IGcxJywgXCJ5aWVsZCBmb3IgZmlyc3RcIiBpZiBkIGlzIGZpcnN0XG4gICAgICAgICAgeWllbGQgMCBpZiBkIGlzIGZpcnN0XG4gICAgICAgICAgaW5mbyAnzqlrdnJ0X18zNiBnMScsIFwieWllbGQgZm9yIGRhdGFcIiB1bmxlc3MgZCBpbiBbIGZpcnN0LCBsYXN0LCBdXG4gICAgICAgICAgeWllbGQgZCAqIDIgdW5sZXNzIGQgaW4gWyBmaXJzdCwgbGFzdCwgXVxuICAgICAgICAgIGluZm8gJ86pa3ZydF9fMzcgZzEnLCBcInlpZWxkIGZvciBsYXN0XCIgaWYgZCBpcyBsYXN0XG4gICAgICAgICAgeWllbGQgMSBpZiBkIGlzIGxhc3RcbiAgICAgICAgZzIgICAgICAgICAgICA9ICggZCApIC0+XG4gICAgICAgICAgdXJnZSAnzqlrdnJ0X18zOCBnMicsIGRcbiAgICAgICAgICBpbmZvICfOqWt2cnRfXzM5IGcyJywgXCJ5aWVsZCBmb3IgZmlyc3RcIiBpZiBkIGlzIGZpcnN0XG4gICAgICAgICAgeWllbGQgMCBpZiBkIGlzIGZpcnN0XG4gICAgICAgICAgaW5mbyAnzqlrdnJ0X180MCBnMicsIFwieWllbGQgZm9yIGRhdGFcIiB1bmxlc3MgZCBpbiBbIGZpcnN0LCBsYXN0LCBdXG4gICAgICAgICAgeWllbGQgZCAqIDIgdW5sZXNzIGQgaW4gWyBmaXJzdCwgbGFzdCwgXVxuICAgICAgICAgIGluZm8gJ86pa3ZydF9fNDEgZzInLCBcInlpZWxkIGZvciBsYXN0XCIgaWYgZCBpcyBsYXN0XG4gICAgICAgICAgeWllbGQgMSBpZiBkIGlzIGxhc3RcbiAgICAgICAgdHJhbnNmb3JtXzEgICA9ICQgeyBmaXJzdCwgIH0sIGcxXG4gICAgICAgIHRyYW5zZm9ybV8yICAgPSAkIHsgbGFzdCwgICB9LCBnMlxuICAgICAgICBqZXQucHVzaCB0cmFuc2Zvcm1fMVxuICAgICAgICBqZXQucHVzaCB0cmFuc2Zvcm1fMlxuICAgICAgICBkZWJ1ZyAnzqlrdnJ0X180MicsIGpldFxuICAgICAgICB3aGlzcGVyICfOqWt2cnRfXzQzJywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgQGVxICggzqlrdnJ0X180NCA9IC0+IHRyYW5zZm9ybV8xWyBpbnRlcm5hbHMuQ0ZHIF0gKSwgeyBmaXJzdCwgIH1cbiAgICAgICAgQGVxICggzqlrdnJ0X180NSA9IC0+IHRyYW5zZm9ybV8yWyBpbnRlcm5hbHMuQ0ZHIF0gKSwgeyBsYXN0LCAgIH1cbiAgICAgICAgQGVxICggzqlrdnJ0X180NiA9IC0+IGpldC5ydW4gMjIgICAgICAgICAgICAgICAgICAgKSwgWyAwLCAxLCA4OCwgMSwgXVxuICAgICAgICB3aGlzcGVyICfOqWt2cnRfXzQ3JywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgamV0c3RyZWFtX3NlbGVjdG9yczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgICQsXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgeyBTZWxlY3RvcixcbiAgICAgICAgX25vcm1hbGl6ZV9zZWxlY3RvcnMsXG4gICAgICAgIG5vcm1hbGl6ZV9zZWxlY3RvcnMsXG4gICAgICAgIHNlbGVjdG9yc19hc19saXN0LFxuICAgICAgICBpZF9mcm9tX3N5bWJvbCwgICAgICAgICB9ID0gaW50ZXJuYWxzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgQGVxICggzqlrdnJ0X180OCA9IC0+IHR5cGVfb2YgKCBuZXcgSmV0c3RyZWFtKCkgKSAgICAgICAgICAgICAgKSwgJ29iamVjdCdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc3RyZWFtX2l0ZW1zID0gW1xuICAgICAgICBTeW1ib2wgJ3N0YXJ0J1xuICAgICAgICBTeW1ib2wgJ2VuZCdcbiAgICAgICAgNzYuOVxuICAgICAgICBcIk1leGljb1wiXG4gICAgICAgIG51bGxcbiAgICAgICAgXVxuICAgICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgICAgeyBwcm9iZTogJ2N1ZScsICAgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdjdWUnICAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlIyonICAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICdjdWUnLCAgICAgICAgICAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogdHJ1ZSwgICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsICB9XG4gICAgICAgIHsgcHJvYmU6ICcjJywgICAgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnIycgICAgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSMqJyAgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnIycsICAgICAgICAgICAgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IHRydWUsICAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCAgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcHJvYmU6ICdjdWUjZW5kJywgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnY3VlI2VuZCcgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNlbmQnICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnY3VlI2VuZCcsICAgICAgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ2VuZCcgXSwgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICcjZW5kJywgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnI2VuZCcgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNlbmQnICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnI2VuZCcsICAgICAgICAgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ2VuZCcgXSwgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBwcm9iZTogJyNlbmQsI3N0YXJ0LCcsICAgICAgICAgICAgIHNlbF9saXN0OiBbICcjZW5kJywgJyNzdGFydCcsICcnICAgXSwgbnJtX3NlbDogWyAnY3VlI2VuZCcsICdjdWUjc3RhcnQnIF0sIHNlbF9ycHI6ICcjZW5kLCAjc3RhcnQsICcsICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnZW5kJywgJ3N0YXJ0JyBdLCAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogJyNlbmQsI3N0YXJ0JywgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcjZW5kJywgJyNzdGFydCcgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI2VuZCcsICdjdWUjc3RhcnQnIF0sIHNlbF9ycHI6ICcjZW5kLCAjc3RhcnQnLCAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnZW5kJywgJ3N0YXJ0JyBdLCAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHByb2JlOiAnY3VlI2ZvbyNiYXInLCAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJ2N1ZSNmb28jYmFyJyAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjZm9vI2JhcicgICAgICAgICAgXSwgc2VsX3JwcjogJ2N1ZSNmb28jYmFyJywgICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdmb28jYmFyJyBdLCAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnI2ZvbyNiYXInLCAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyNmb28jYmFyJyAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjZm9vI2JhcicgICAgICAgICAgXSwgc2VsX3JwcjogJyNmb28jYmFyJywgICAgICAgICAgIGRhdGE6IGZhbHNlLCBjdWVzOiBbICdmb28jYmFyJyBdLCAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcHJvYmU6ICdjdWUjc3RhcnQnLCAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnY3VlI3N0YXJ0JyAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNzdGFydCcgICAgICAgICAgICBdLCBzZWxfcnByOiAnY3VlI3N0YXJ0JywgICAgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ3N0YXJ0JyBdLCAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICcjc3RhcnQnLCAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnI3N0YXJ0JyAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNzdGFydCcgICAgICAgICAgICBdLCBzZWxfcnByOiAnI3N0YXJ0JywgICAgICAgICAgICAgZGF0YTogZmFsc2UsIGN1ZXM6IFsgJ3N0YXJ0JyBdLCAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBwcm9iZTogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIHNlbF9saXN0OiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgbnJtX3NlbDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIHNlbF9ycHI6ICdjdWUjc3RhcnQsIGN1ZSNlbmQnLCBkYXRhOiBmYWxzZSwgY3VlczogWyAnc3RhcnQnLCAnZW5kJyBdLCAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogWyAnI3N0YXJ0JywgJyNlbmQnIF0sICAgICAgIHNlbF9saXN0OiBbICcjc3RhcnQnLCAnI2VuZCcgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIHNlbF9ycHI6ICcjc3RhcnQsICNlbmQnLCAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnc3RhcnQnLCAnZW5kJyBdLCAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogJ2N1ZSNzdGFydCxjdWUjZW5kJywgICAgICAgIHNlbF9saXN0OiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgbnJtX3NlbDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIHNlbF9ycHI6ICdjdWUjc3RhcnQsIGN1ZSNlbmQnLCBkYXRhOiBmYWxzZSwgY3VlczogWyAnc3RhcnQnLCAnZW5kJyBdLCAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogJyNzdGFydCwjZW5kJywgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcjc3RhcnQnLCAnI2VuZCcgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIHNlbF9ycHI6ICcjc3RhcnQsICNlbmQnLCAgICAgICBkYXRhOiBmYWxzZSwgY3VlczogWyAnc3RhcnQnLCAnZW5kJyBdLCAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogJyBjdWUjc3RhcnQsIGN1ZSNlbmQgJywgICAgIHNlbF9saXN0OiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgbnJtX3NlbDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIHNlbF9ycHI6ICdjdWUjc3RhcnQsIGN1ZSNlbmQnLCBkYXRhOiBmYWxzZSwgY3VlczogWyAnc3RhcnQnLCAnZW5kJyBdLCAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHByb2JlOiBudWxsLCAgICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJycgICAgICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJycsICAgICAgICAgICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IGZhbHNlLCAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6IFtdLCAgICAgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAgICAgICAgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnJywgICAgICAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogWyBbXSBdLCAgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICAgICAgICAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJyAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcnLCAgICAgICAgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBmYWxzZSwgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiBbIFsgJycgXSBdLCAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJycgICAgICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJycsICAgICAgICAgICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IGZhbHNlLCAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgIHsgcHJvYmU6ICdkYXRhJywgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnZGF0YScgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnZGF0YScsICAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgeyBwcm9iZTogJycsICAgICAgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcnICAgICAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJyAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcnLCAgICAgICAgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBmYWxzZSwgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICB7IHByb2JlOiAnZGF0YSMnLCAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJ2RhdGEjJyAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJ2RhdGEjJywgICAgICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IGZhbHNlLCAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBwcm9iZTogWyAnZGF0YScsICdjdWUnIF0sICAgICAgICAgIHNlbF9saXN0OiBbICdkYXRhJywgJ2N1ZScgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJywgJ2N1ZSMqJyAgICAgIF0sIHNlbF9ycHI6ICdkYXRhLCBjdWUnLCAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiB0cnVlLCAgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiB0cnVlLCAgfVxuICAgICAgICB7IHByb2JlOiAnZGF0YSwgY3VlJywgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJ2RhdGEnLCAnY3VlJyAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonLCAnY3VlIyonICAgICAgXSwgc2VsX3JwcjogJ2RhdGEsIGN1ZScsICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IHRydWUsICAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IHRydWUsICB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyBwcm9iZTogJ2RhdGEjZm9vI2JhcicsIGVycm9yOiAvSURzIG9uIGRhdGEgaXRlbXMgbm90IHN1cHBvcnRlZC8sIH1cbiAgICAgICAgXVxuICAgICAgc2VsZWN0b3JzX2FuZF9zZWxlY3Rpb25zID0gW1xuICAgICAgICB7IHNlbDogJ2N1ZScsICAgICAgICAgICAgICAgICAgICAgIG5ybTogJ2N1ZSMqJywgICAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiAnIycsICAgICAgICAgICAgICAgICAgICAgICAgbnJtOiAnY3VlIyonLCAgICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHNlbDogJ2N1ZSNlbmQnLCAgICAgICAgICAgICAgICAgIG5ybTogJ2N1ZSNlbmQnLCAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICB7IHNlbDogJyNlbmQnLCAgICAgICAgICAgICAgICAgICAgIG5ybTogJ2N1ZSNlbmQnLCAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgc2VsOiAnI2VuZCwjc3RhcnQsJywgICAgICAgICAgICAgbnJtOiAnY3VlI2VuZCxjdWUjc3RhcnQnLCAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgeyBzZWw6ICcjZW5kLCNzdGFydCcsICAgICAgICAgICAgICBucm06ICdjdWUjZW5kLGN1ZSNzdGFydCcsICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgc2VsOiAnY3VlI2ZvbyNiYXInLCAgICAgICAgICAgICAgbnJtOiAnY3VlI2ZvbyNiYXInLCAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICB7IHNlbDogJyNmb28jYmFyJywgICAgICAgICAgICAgICAgIG5ybTogJ2N1ZSNmb28jYmFyJywgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHNlbDogJ2N1ZSNzdGFydCcsICAgICAgICAgICAgICAgIG5ybTogJ2N1ZSNzdGFydCcsICAgICAgICAgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICB7IHNlbDogJyNzdGFydCcsICAgICAgICAgICAgICAgICAgIG5ybTogJ2N1ZSNzdGFydCcsICAgICAgICAgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgc2VsOiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgbnJtOiAnY3VlI3N0YXJ0LGN1ZSNlbmQnLCAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgeyBzZWw6IFsgJyNzdGFydCcsICcjZW5kJyBdLCAgICAgICBucm06ICdjdWUjc3RhcnQsY3VlI2VuZCcsICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICB7IHNlbDogJ2N1ZSNzdGFydCxjdWUjZW5kJywgICAgICAgIG5ybTogJ2N1ZSNzdGFydCxjdWUjZW5kJywgJ1N5bWJvbChzdGFydCknOiB0cnVlLCAnU3ltYm9sKGVuZCknOiB0cnVlLCAnNzYuOSc6IGZhbHNlLCBcIidNZXhpY28nXCI6IGZhbHNlLCBudWxsOiBmYWxzZSB9XG4gICAgICAgIHsgc2VsOiAnI3N0YXJ0LCNlbmQnLCAgICAgICAgICAgICAgbnJtOiAnY3VlI3N0YXJ0LGN1ZSNlbmQnLCAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogZmFsc2UsIFwiJ01leGljbydcIjogZmFsc2UsIG51bGw6IGZhbHNlIH1cbiAgICAgICAgeyBzZWw6ICcgY3VlI3N0YXJ0LCBjdWUjZW5kICcsICAgICBucm06ICdjdWUjc3RhcnQsY3VlI2VuZCcsICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiBmYWxzZSwgXCInTWV4aWNvJ1wiOiBmYWxzZSwgbnVsbDogZmFsc2UgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgc2VsOiBudWxsLCAgICAgICAgICAgICAgICAgICAgICAgbnJtOiAnZGF0YSMqJywgICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiB0cnVlLCBcIidNZXhpY28nXCI6IHRydWUsIG51bGw6IHRydWUgfVxuICAgICAgICB7IHNlbDogW10sICAgICAgICAgICAgICAgICAgICAgICAgIG5ybTogJ2RhdGEjKicsICAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgeyBzZWw6IFsgW10gXSwgICAgICAgICAgICAgICAgICAgICBucm06ICdkYXRhIyonLCAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgIHsgc2VsOiBbIFsgJycgXSBdLCAgICAgICAgICAgICAgICAgbnJtOiAnZGF0YSMqJywgICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiB0cnVlLCBcIidNZXhpY28nXCI6IHRydWUsIG51bGw6IHRydWUgfVxuICAgICAgICB7IHNlbDogJ2RhdGEnLCAgICAgICAgICAgICAgICAgICAgIG5ybTogJ2RhdGEjKicsICAgICAgICAgICAgJ1N5bWJvbChzdGFydCknOiBmYWxzZSwgJ1N5bWJvbChlbmQpJzogZmFsc2UsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgeyBzZWw6ICcnLCAgICAgICAgICAgICAgICAgICAgICAgICBucm06ICdkYXRhIyonLCAgICAgICAgICAgICdTeW1ib2woc3RhcnQpJzogZmFsc2UsICdTeW1ib2woZW5kKSc6IGZhbHNlLCAnNzYuOSc6IHRydWUsIFwiJ01leGljbydcIjogdHJ1ZSwgbnVsbDogdHJ1ZSB9XG4gICAgICAgIHsgc2VsOiAnZGF0YSMnLCAgICAgICAgICAgICAgICAgICAgbnJtOiAnZGF0YSMqJywgICAgICAgICAgICAnU3ltYm9sKHN0YXJ0KSc6IGZhbHNlLCAnU3ltYm9sKGVuZCknOiBmYWxzZSwgJzc2LjknOiB0cnVlLCBcIidNZXhpY28nXCI6IHRydWUsIG51bGw6IHRydWUgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgc2VsOiBbICdkYXRhJywgJ2N1ZScgXSwgICAgICAgICAgbnJtOiAnZGF0YSMqLGN1ZSMqJywgICAgICAnU3ltYm9sKHN0YXJ0KSc6IHRydWUsICdTeW1ib2woZW5kKSc6IHRydWUsICc3Ni45JzogdHJ1ZSwgXCInTWV4aWNvJ1wiOiB0cnVlLCBudWxsOiB0cnVlIH1cbiAgICAgICAgeyBzZWw6ICdkYXRhLCBjdWUnLCAgICAgICAgICAgICAgICBucm06ICdkYXRhIyosY3VlIyonLCAgICAgICdTeW1ib2woc3RhcnQpJzogdHJ1ZSwgJ1N5bWJvbChlbmQpJzogdHJ1ZSwgJzc2LjknOiB0cnVlLCBcIidNZXhpY28nXCI6IHRydWUsIG51bGw6IHRydWUgfVxuICAgICAgICBdXG4gICAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIGRvID0+XG4gICAgICAgIGZvciBwIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgICBpZiBwLmVycm9yP1xuICAgICAgICAgICAgQHRocm93cyAoIM6panN0cm1fXzQ5ID0gLT4gbmV3IFNlbGVjdG9yIHAucHJvYmUgKSwgcC5lcnJvclxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICBwcm9iZSAgICAgICAgICAgPSBwLnByb2JlXG4gICAgICAgICAgc2VsX2xpc3QgICAgICAgID0gc2VsZWN0b3JzX2FzX2xpc3QgICBwcm9iZVxuICAgICAgICAgIG5ybV9zZWwgICAgICAgICA9IFsgKCBub3JtYWxpemVfc2VsZWN0b3JzIHByb2JlICkuLi4sIF1cbiAgICAgICAgICBzZWwgICAgICAgICAgICAgPSBuZXcgU2VsZWN0b3IgICAgICAgIHByb2JlXG4gICAgICAgICAgc2VsX3JwciAgICAgICAgID0gc2VsLnRvU3RyaW5nKClcbiAgICAgICAgICB7IGRhdGEsXG4gICAgICAgICAgICBjdWVzLFxuICAgICAgICAgICAgYWNjZXB0X2FsbCwgfSA9IHNlbC5fZ2V0X2V4Y2VycHQoKVxuICAgICAgICAgIGRhdGEgICAgICAgICAgICA9IFsgKCBkYXRhICkuLi4sIF0gdW5sZXNzIGRhdGEgaW4gWyB0cnVlLCBmYWxzZSwgXVxuICAgICAgICAgIGN1ZXMgICAgICAgICAgICA9IFsgKCBjdWVzICkuLi4sIF0gdW5sZXNzIGN1ZXMgaW4gWyB0cnVlLCBmYWxzZSwgXVxuICAgICAgICAgICMgZWNobyB7IHByb2JlLCBzZWxfbGlzdCwgbnJtX3NlbCwgc2VsX3JwciwgZGF0YSwgY3VlcywgYWNjZXB0X2FsbCwgfVxuICAgICAgICAgIEBlcSAoIM6panN0cm1fXzUwID0gLT4gc2VsX2xpc3QgICAgKSwgcC5zZWxfbGlzdFxuICAgICAgICAgIEBlcSAoIM6panN0cm1fXzUxID0gLT4gbnJtX3NlbCAgICAgKSwgcC5ucm1fc2VsXG4gICAgICAgICAgQGVxICggzqlqc3RybV9fNTIgPSAtPiBzZWxfcnByICAgICApLCBwLnNlbF9ycHJcbiAgICAgICAgICBAZXEgKCDOqWpzdHJtX181MyA9IC0+IGRhdGEgICAgICAgICksIHAuZGF0YVxuICAgICAgICAgIEBlcSAoIM6panN0cm1fXzU0ID0gLT4gY3VlcyAgICAgICAgKSwgcC5jdWVzXG4gICAgICAgICAgQGVxICggzqlqc3RybV9fNTUgPSAtPiBhY2NlcHRfYWxsICApLCBwLmFjY2VwdF9hbGxcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgZG8gPT5cbiAgICAgICAgZGlzcGxheV9tYXRjaGVyID0gdHJ1ZVxuICAgICAgICBkaXNwbGF5X21hdGNoZXIgPSBmYWxzZVxuICAgICAgICBmb3IgZW50cnkgaW4gc2VsZWN0b3JzX2FuZF9zZWxlY3Rpb25zXG4gICAgICAgICAgc2VsZWN0b3IgID0gbmV3IFNlbGVjdG9yIGVudHJ5LnNlbFxuICAgICAgICAgIG5ybSAgICAgICA9IFsgKCBub3JtYWxpemVfc2VsZWN0b3JzIGVudHJ5LnNlbCApLi4uLCBdLmpvaW4gJywnXG4gICAgICAgICAgbGluZSAgICAgID0geyBzZWw6IGVudHJ5LnNlbCwgbnJtLCB9XG4gICAgICAgICAgZm9yIGl0ZW0gaW4gc3RyZWFtX2l0ZW1zXG4gICAgICAgICAgICByZXN1bHQgICAgICAgICAgICA9IHNlbGVjdG9yLnNlbGVjdCBpdGVtXG4gICAgICAgICAgICBsaW5lWyBycHIgaXRlbSBdICA9IHNlbGVjdG9yLnNlbGVjdCBpdGVtXG4gICAgICAgICAgICB1bmxlc3MgZGlzcGxheV9tYXRjaGVyXG4gICAgICAgICAgICAgIGlmIHJlc3VsdCBpc250IGVudHJ5WyBycHIgaXRlbSBdXG4gICAgICAgICAgICAgICAgZWNobyB7IHNlbGVjdG9yOiBlbnRyeS5zZWwsIG5ybSwgaXRlbSwgcmVzdWx0LCB9XG4gICAgICAgICAgICAgIEBlcSAoIM6pa3ZydF9fNTYgPSAtPiByZXN1bHQgKSwgZW50cnlbIHJwciBpdGVtIF1cbiAgICAgICAgICBpZiBkaXNwbGF5X21hdGNoZXJcbiAgICAgICAgICAgIGVjaG8gbGluZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBidWlsZF9waXBlbGluZXM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgSmV0c3RyZWFtLFxuICAgICAgICAkLFxuICAgICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAgICMgeyBTZWxlY3RvcixcbiAgICAgICMgICBfbm9ybWFsaXplX3NlbGVjdG9ycyxcbiAgICAgICMgICBub3JtYWxpemVfc2VsZWN0b3JzLFxuICAgICAgIyAgIHNlbGVjdG9yc19hc19saXN0LFxuICAgICAgIyAgIGlkX2Zyb21fc3ltYm9sLCAgICAgICAgIH0gPSBpbnRlcm5hbHNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgamV0ID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCAnKCcgKyBkXG4gICAgICAgIGpldC5wdXNoIGFwcHBlbmQgPSAoIGQgKSAtPiB5aWVsZCBkICsgJyknXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTcgPSAtPiBqZXQuZ2V0X2ZpcnN0ICdzdHJpbmcnICksICcoc3RyaW5nKSdcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgamV0ID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCAnKCcgKyBkXG4gICAgICAgIGpldC5wdXNoIGFwcHBlbmQgPSAoIGQgKSAtPiB5aWVsZCBkICsgJyknXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTggPSAtPiBqZXQuc2VuZCAnc3RyaW5nJyAgKSwgbnVsbFxuICAgICAgICBAZXEgKCDOqWt2cnRfXzU5ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ3N0cmluZycsIF1cbiAgICAgICAgQGVxICggzqlrdnJ0X182MCA9IC0+IGpldC5zZW5kICdvdGhlcicgICksIG51bGxcbiAgICAgICAgQGVxICggzqlrdnJ0X182MSA9IC0+IGpldC5zaGVsZiAgICAgICAgICApLCBbICdzdHJpbmcnLCAnb3RoZXInLCBdXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjIgPSAtPiBqZXQuZ2V0X2ZpcnN0KCkgICAgKSwgJyhzdHJpbmcpJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzYzID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFtdXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjQgPSAtPiBqZXQucnVuKCkgICAgICAgICAgKSwgW11cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgamV0ID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCAnKCcgKyBkXG4gICAgICAgIGpldC5wdXNoIGFwcHBlbmQgPSAoIGQgKSAtPiB5aWVsZCBkICsgJyknXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjUgPSAtPiBqZXQuc2VuZCAnc3RyaW5nJyAgKSwgbnVsbFxuICAgICAgICBAZXEgKCDOqWt2cnRfXzY2ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ3N0cmluZycsIF1cbiAgICAgICAgQGVxICggzqlrdnJ0X182NyA9IC0+IGpldC5zZW5kICdvdGhlcicgICksIG51bGxcbiAgICAgICAgaXRlcmF0b3IgPSBqZXQud2FsaygpXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjggPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAnc3RyaW5nJywgJ290aGVyJywgXVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzY5ID0gLT4gaXRlcmF0b3IubmV4dCgpICAgICksIHsgZG9uZTogZmFsc2UsICB2YWx1ZTogJyhzdHJpbmcpJywgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzcwID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ290aGVyJywgXVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzcxID0gLT4gaXRlcmF0b3IubmV4dCgpICAgICksIHsgZG9uZTogZmFsc2UsICB2YWx1ZTogJyhvdGhlciknLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzIgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgW11cbiAgICAgICAgQGVxICggzqlrdnJ0X183MyA9IC0+IGl0ZXJhdG9yLm5leHQoKSAgICApLCB7IGRvbmU6IHRydWUsICAgdmFsdWU6IG51bGwsIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgamV0ID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoIHByZXBlbmQgPSAoIGQgKSAtPiB5aWVsZCAnKCcgKyBkXG4gICAgICAgIGpldC5wdXNoIGFwcHBlbmQgPSAoIGQgKSAtPiB5aWVsZCBkICsgJyknXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzQgPSAtPiBqZXQuc2VuZCAnc3RyaW5nJyAgKSwgbnVsbFxuICAgICAgICBAZXEgKCDOqWt2cnRfXzc1ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ3N0cmluZycsIF1cbiAgICAgICAgQGVxICggzqlrdnJ0X183NiA9IC0+IGpldC5zZW5kICdvdGhlcicgICksIG51bGxcbiAgICAgICAgaXRlcmF0b3IgPSBqZXQud2FsayAndHJvaXMnLCAncXVhdHJlJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzc3ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFsgJ3N0cmluZycsICdvdGhlcicsICd0cm9pcycsICdxdWF0cmUnLCBdXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzggPSAtPiBpdGVyYXRvci5uZXh0KCkgICAgKSwgeyBkb25lOiBmYWxzZSwgIHZhbHVlOiAnKHN0cmluZyknLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzkgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAnb3RoZXInLCAndHJvaXMnLCAncXVhdHJlJywgXVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzgwID0gLT4gaXRlcmF0b3IubmV4dCgpICAgICksIHsgZG9uZTogZmFsc2UsICB2YWx1ZTogJyhvdGhlciknLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF9fODEgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAndHJvaXMnLCAncXVhdHJlJywgXVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzgyID0gLT4gaXRlcmF0b3IubmV4dCgpICAgICksIHsgZG9uZTogZmFsc2UsICB2YWx1ZTogJyh0cm9pcyknLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF9fODMgPSAtPiBqZXQuc2hlbGYgICAgICAgICAgKSwgWyAncXVhdHJlJywgXVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzg0ID0gLT4gaXRlcmF0b3IubmV4dCgpICAgICksIHsgZG9uZTogZmFsc2UsICB2YWx1ZTogJyhxdWF0cmUpJywgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzg1ID0gLT4gamV0LnNoZWxmICAgICAgICAgICksIFtdXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fODYgPSAtPiBpdGVyYXRvci5uZXh0KCkgICAgKSwgeyBkb25lOiB0cnVlLCAgIHZhbHVlOiBudWxsLCB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbmZpZ3VyZV90cmFuc2Zvcm1zOiAtPlxuICAgICAgcmV0dXJuIG51bGxcblxuXG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgSmV0c3RyZWFtLFxuICAgICAgICAkLFxuICAgICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAgICMgeyBTZWxlY3RvcixcbiAgICAgICMgICBfbm9ybWFsaXplX3NlbGVjdG9ycyxcbiAgICAgICMgICBub3JtYWxpemVfc2VsZWN0b3JzLFxuICAgICAgIyAgIHNlbGVjdG9yc19hc19saXN0LFxuICAgICAgIyAgIGlkX2Zyb21fc3ltYm9sLCAgICAgICAgIH0gPSBpbnRlcm5hbHNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgamV0ID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGpldC5wdXNoICdkYXRhLCNsYXN0JywgcHJlcGVuZCA9ICggZCApIC0+XG4gICAgICAgICAgcmV0dXJuIHlpZWxkICd5YXknIGlmIGQgaXMgbGFzdFxuICAgICAgICAgIHlpZWxkICcoJyArIGRcbiAgICAgICAgamV0LnB1c2ggYXBwcGVuZCA9ICggZCApIC0+IHlpZWxkIGQgKyAnKSdcbiAgICAgICAgZGVidWcgJ86pa3ZydF9fMjgnLCBqZXQucnVuICdiaXJkaXN0aGV3b3JkJ1xuICAgICAgICAjIEBlcSAoIM6pa3ZydF9fNTcgPSAtPiBqZXQuZ2V0X2ZpcnN0ICdzdHJpbmcnICksICcoc3RyaW5nKSdcbiAgICAgICAgcmV0dXJuIG51bGxcblxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQHRhc2tzXG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBjb25maWd1cmVfdHJhbnNmb3JtczogQHRhc2tzLmNvbmZpZ3VyZV90cmFuc2Zvcm1zLCB9XG4iXX0=
