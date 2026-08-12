(async function() {
  'use strict';
  var GTNG, GUY, PATH, SFMODULES, Test, abbreviate_argvnfo, alert, blue, debug, echo, f, gold, help, info, inspect, isa_npod, lime, log, path_to_jsonick, plain, praise, red, reverse, rpr, run_shell_command, sh, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('hollerith'));

  ({rpr, inspect, echo, lime, gold, red, blue, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  PATH = require('node:path');

  ({run_shell_command} = require('../../../apps/bricabrac-sfmodules/lib/cli-run-shell-command'));

  path_to_jsonick = PATH.resolve(PATH.join(__dirname, '../../../apps/jsonick'));

  sh = function(command_line) {
    return (run_shell_command(path_to_jsonick, command_line)).trim();
  };

  //===========================================================================================================
  isa_npod = function(x) {
    return (x != null) && ((Object.getPrototypeOf(x)) === null);
  };

  //===========================================================================================================
  abbreviate_argvnfo = function(argvnfo, includes = '') {
    var R, e;
    includes = new Set((includes.length === 0 ? 'acdeiot' : includes));
    R = {};
    if (includes.has('a')) {
      R.a = argvnfo.a;
    }
    if (includes.has('c')) {
      R.c = (function() {
        var i, len, ref, results;
        ref = argvnfo.c;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          e = ref[i];
          results.push((isa_npod(e)) ? {...e} : e);
        }
        return results;
      })();
    }
    if (includes.has('d')) {
      R.d = (function() {
        var i, len, ref, results;
        ref = argvnfo.d;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          e = ref[i];
          results.push((isa_npod(e)) ? {...e} : e);
        }
        return results;
      })();
    }
    if (includes.has('e')) {
      R.e = argvnfo.e;
    }
    if (includes.has('i')) {
      R.i = argvnfo.i;
    }
    if (includes.has('o')) {
      R.o = argvnfo.o;
    }
    if (includes.has('t')) {
      R.t = argvnfo.t;
    }
    return R;
  };

  //===========================================================================================================
  this.jsonick = {
    //---------------------------------------------------------------------------------------------------------
    basics: function() {
      var argv, i, includes, len, matcher, parse_argv, probes_and_matchers, Ωjst___2;
      ({parse_argv} = require('../../../apps/jsonick/lib/analyze-cli-arguments-phase-1'));
      probes_and_matchers = [
        [
          [['x'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'bar',
                v: 'x',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['{}'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'obj',
                v: '{}',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['+name'],
          'cde'],
          {
            c: [
              {
                t: 'bol',
                n: 'name',
                v: true,
                x: 0
              }
            ],
            d: [],
            e: []
          }
        ],
        [
          [['-name'],
          'cde'],
          {
            c: [
              {
                t: 'bol',
                n: 'name',
                v: false,
                x: 0
              }
            ],
            d: [],
            e: []
          }
        ],
        [
          [['+d.name'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'bol',
                n: 'name',
                v: true,
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['-d.name'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'bol',
                n: 'name',
                v: false,
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['%+name'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'esc',
                v: '+name',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['%-name'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'esc',
                v: '-name',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [[':name'],
          'cde'],
          {
            c: [],
            d: [],
            e: [
              {
                t: 'fac',
                x: 0
              }
            ]
          }
        ],
        [
          [['%:name'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'esc',
                v: ':name',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [[':name='],
          'cde'],
          {
            c: [
              {
                t: 'fac',
                n: 'name',
                v: '',
                x: 0
              }
            ],
            d: [],
            e: []
          }
        ],
        [
          [[':name=wat'],
          'cde'],
          {
            c: [
              {
                t: 'fac',
                n: 'name',
                v: 'wat',
                x: 0
              }
            ],
            d: [],
            e: []
          }
        ],
        [
          [[':d.name=wat'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'fac',
                n: 'name',
                v: 'wat',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['--',
          ':name=wat'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'pfn',
                v: ':name=wat',
                x: 1
              }
            ],
            e: []
          }
        ],
        [
          [['123',
          ':name=wat'],
          'cde'],
          {
            c: [
              {
                t: 'fac',
                n: 'name',
                v: 'wat',
                x: 1
              }
            ],
            d: [
              {
                t: 'num',
                v: '123',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['{"name":"value"}'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'obj',
                v: '{"name":"value"}',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['{"name":value}'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'obj',
                v: '{"name":value}',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['{"name":"value"'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'obj',
                v: '{"name":"value"',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['%{"name":value}'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'esc',
                v: '{"name":value}',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['%%'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'esc',
                v: '%',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['[]'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'lst',
                v: '[]',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['%[]'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'esc',
                v: '[]',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['[3,"word"]'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'lst',
                v: '[3,"word"]',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['3',
          '"word"'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'num',
                v: '3',
                x: 0
              },
              {
                t: 'bar',
                v: '"word"',
                x: 1
              }
            ],
            e: []
          }
        ],
        [
          [['+3'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'num',
                v: '+3',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['-3'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'num',
                v: '-3',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['-0.4'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'num',
                v: '-0.4',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['-.4'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'num',
                v: '-.4',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['+0.4'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'num',
                v: '+0.4',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['+.4'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'num',
                v: '+.4',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['.9'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'num',
                v: '.9',
                x: 0
              }
            ],
            e: []
          }
        ],
        [
          [['{}',
          '--',
          '{}'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'obj',
                v: '{}',
                x: 0
              },
              {
                t: 'pfn',
                v: '{}',
                x: 2
              }
            ],
            e: []
          }
        ],
        [
          [['345',
          '--',
          '678'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'num',
                v: '345',
                x: 0
              },
              {
                t: 'pfn',
                v: '678',
                x: 2
              }
            ],
            e: []
          }
        ],
        [
          [['-345',
          '--',
          '-678'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'num',
                v: '-345',
                x: 0
              },
              {
                t: 'pfn',
                v: '-678',
                x: 2
              }
            ],
            e: []
          }
        ],
        [
          [['+345',
          '--',
          '+678'],
          'cde'],
          {
            c: [],
            d: [
              {
                t: 'num',
                v: '+345',
                x: 0
              },
              {
                t: 'pfn',
                v: '+678',
                x: 2
              }
            ],
            e: []
          }
        ],
        [[]],
        [
          // [ [ [ ':dork', '--', ':dork'   ], 'cde' ], { c: [                                            ], d: [ { t: 'fac', v: '+678', x: 2, } ], e: [ { t: 'fac',  x: 0, }                     ] } ]
          //.....................................................................................................
          [['x'],
          'a'],
          {
            a: ['x']
          }
        ],
        [
          [['{}'],
          'a'],
          {
            a: ['{}']
          }
        ],
        [
          [['+name'],
          'a'],
          {
            a: ['+name']
          }
        ],
        [
          [['-name'],
          'a'],
          {
            a: ['-name']
          }
        ],
        [
          [['+d.name'],
          'a'],
          {
            a: ['+d.name']
          }
        ],
        [
          [['-d.name'],
          'a'],
          {
            a: ['-d.name']
          }
        ],
        [
          [['%+name'],
          'a'],
          {
            a: ['%+name']
          }
        ],
        [
          [['%-name'],
          'a'],
          {
            a: ['%-name']
          }
        ],
        [
          [[':name'],
          'a'],
          {
            a: [':name']
          }
        ],
        [
          [['%:name'],
          'a'],
          {
            a: ['%:name']
          }
        ],
        [
          [[':name='],
          'a'],
          {
            a: [':name=']
          }
        ],
        [
          [[':name=wat'],
          'a'],
          {
            a: [':name=wat']
          }
        ],
        [
          [[':d.name=wat'],
          'a'],
          {
            a: [':d.name=wat']
          }
        ],
        [
          [['--',
          ':name=wat'],
          'a'],
          {
            a: ['--',
          ':name=wat']
          }
        ],
        [
          [['123',
          ':name=wat'],
          'a'],
          {
            a: ['123',
          ':name=wat']
          }
        ],
        [
          [['{"name":"value"}'],
          'a'],
          {
            a: ['{"name":"value"}']
          }
        ],
        [
          [['{"name":value}'],
          'a'],
          {
            a: ['{"name":value}']
          }
        ],
        [
          [['{"name":"value"'],
          'a'],
          {
            a: ['{"name":"value"']
          }
        ],
        [
          [['%{"name":value}'],
          'a'],
          {
            a: ['%{"name":value}']
          }
        ],
        [
          [['%%'],
          'a'],
          {
            a: ['%%']
          }
        ],
        [
          [['[ ]'],
          'a'],
          {
            a: ['[ ]']
          }
        ],
        [
          [['%[ ]'],
          'a'],
          {
            a: ['%[ ]']
          }
        ],
        [
          [['[3,"word"]'],
          'a'],
          {
            a: ['[3,"word"]']
          }
        ],
        [
          [['3',
          '"word"'],
          'a'],
          {
            a: ['3',
          '"word"']
          }
        ],
        [
          [['+3'],
          'a'],
          {
            a: ['+3']
          }
        ],
        [
          [['-3'],
          'a'],
          {
            a: ['-3']
          }
        ],
        [
          [['-0.4'],
          'a'],
          {
            a: ['-0.4']
          }
        ],
        [
          [['-.4'],
          'a'],
          {
            a: ['-.4']
          }
        ],
        [
          [['+0.4'],
          'a'],
          {
            a: ['+0.4']
          }
        ],
        [
          [['+.4'],
          'a'],
          {
            a: ['+.4']
          }
        ],
        [
          [['.9'],
          'a'],
          {
            a: ['.9']
          }
        ],
        [
          [['{}',
          '--',
          '{}'],
          'a'],
          {
            a: ['{}',
          '--',
          '{}']
          }
        ],
        [
          [[':dork',
          '--',
          ':dork'],
          'a'],
          {
            a: [':dork',
          '--',
          ':dork']
          }
        ]
      ];
//.......................................................................................................
      for (i = 0, len = probes_and_matchers.length; i < len; i++) {
        [[argv, includes], matcher] = probes_and_matchers[i];
        if (matcher == null) {
          echo();
          continue;
        }
        // debug 'Ωjsonick___1', parse_argv argv
        echo([[argv, includes], abbreviate_argvnfo(parse_argv(argv), includes)]);
        this.eq((Ωjst___2 = function() {
          return abbreviate_argvnfo(parse_argv(argv), includes);
        }), matcher);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    command_lines: {
      //-------------------------------------------------------------------------------------------------------
      beautify: function() {
        var Ωjst__10, Ωjst__11, Ωjst__12, Ωjst___3, Ωjst___4, Ωjst___5, Ωjst___6, Ωjst___7, Ωjst___8, Ωjst___9;
        this.eq((Ωjst___3 = function() {
          return sh(`echo '{}' | ./beautify`);
        }), '{}');
        this.eq((Ωjst___4 = function() {
          return sh(`echo '[]' | ./beautify`);
        }), '[]');
        this.eq((Ωjst___5 = function() {
          return sh(`echo 'abc' | ./beautify`);
        }), 'abc');
        this.eq((Ωjst___6 = function() {
          return sh(`echo '{"attr1":"value1"}' | ./beautify`);
        }), "{ attr1: 'value1' }");
        this.eq((Ωjst___7 = function() {
          return sh(`echo '{"attr1":"value1","attr2":"value2","attr3":"value3"}' | ./beautify`);
        }), "{ attr1: 'value1', attr2: 'value2', attr3: 'value3' }");
        this.eq((Ωjst___8 = function() {
          return sh(`echo '["quite","a","few","words","in","this"]' | ./beautify`);
        }), "[ 'quite', 'a', 'few', 'words', 'in', 'this' ]");
        this.eq((Ωjst___9 = function() {
          return sh(`./beautify '{}'`);
        }), '{}');
        this.eq((Ωjst__10 = function() {
          return sh(`./beautify '[]'`);
        }), '[]');
        this.eq((Ωjst__11 = function() {
          return sh(`echo 'abc' | ./beautify '{}'`);
        }), '{}');
        this.eq((Ωjst__12 = function() {
          return sh(`echo 'abc' | ./beautify '[]'`);
        }), '[]');
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      cli_arguments_as_list: function() {
        var Ωjst__13, Ωjst__14, Ωjst__15, Ωjst__16;
        this.eq((Ωjst__13 = function() {
          return sh(`./cli-arguments-as-list`);
        }), '[]');
        this.eq((Ωjst__14 = function() {
          return sh(`./cli-arguments-as-list a b c`);
        }), '["a","b","c"]');
        this.eq((Ωjst__15 = function() {
          return sh(`./cli-arguments-as-list a b c | ./beautify`);
        }), "[ 'a', 'b', 'c' ]");
        this.eq((Ωjst__16 = function() {
          return sh(`./cli-arguments-as-list a b 'c'`);
        }), '["a","b","c"]');
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      analyze_cli_arguments_phase_1: function() {
        var Ωjst__17, Ωjst__18;
        this.eq((Ωjst__17 = function() {
          return sh(`./analyze-cli-arguments-phase-1 first try!`);
        }), '{"a":["first","try!"],"c":[],"d":[{"t":"bar","v":"first","x":0},{"t":"bar","v":"try!","x":1}],"e":[],"i":"socket","o":"socket"}');
        this.eq((Ωjst__18 = function() {
          return sh(`./analyze-cli-arguments-phase-1 +blah -blub +d.wat`);
        }), '{"a":["+blah","-blub","+d.wat"],"c":[{"t":"bol","n":"blah","v":true,"x":0},{"t":"bol","n":"blub","v":false,"x":1}],"d":[{"t":"bol","n":"wat","v":true,"x":2}],"e":[],"i":"socket","o":"socket"}');
        this.eq((Ωjst__18 = function() {
          return sh(`./analyze-cli-arguments-phase-1 +verbose -verbose -- wat | ./beautify`);
        }), "{\n  a: [ '+verbose', '-verbose', '--', 'wat' ],\n  c: [\n    { t: 'bol', n: 'verbose', v: true, x: 0 },\n    { t: 'bol', n: 'verbose', v: false, x: 1 }\n  ],\n  d: [ { t: 'pfn', v: 'wat', x: 3 } ],\n  e: [],\n  i: 'socket',\n  o: 'pipe'\n}");
        echo(sh(`./analyze-cli-arguments-phase-1 +verbose -verbose -- wat | ./beautify`));
        //.....................................................................................................
        return null;
      }
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg, show_requires;
      ({show_requires} = require('../../snippets/lib/demo-show-requires.js'));
      show_requires('../../../apps/jsonick');
      //---------------------------------------------------------------------------------------------------------
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
      (new Test(guytest_cfg)).test(this.jsonick);
      // { parse_argv,  } = require '../../../apps/jsonick/lib/analyze-cli-arguments-phase-1'
      // debug 'Ωjsonick___2', parse_argv [ 'def', ]
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLGtCQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsUUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsZUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsaUJBQUEsRUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTs7RUFFQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFdBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsSUFKRixFQUtFLEdBTEYsRUFNRSxJQU5GLEVBT0UsT0FQRixFQVFFLEdBUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FSaEMsRUFaQTs7O0VBc0JBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLG1DQUFSOztFQUM1QixJQUFBLEdBQTRCLE9BQUEsQ0FBUSxXQUFSOztFQUM1QixDQUFBLENBQUUsaUJBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsNkRBQVIsQ0FBNUI7O0VBQ0EsZUFBQSxHQUE0QixJQUFJLENBQUMsT0FBTCxDQUFhLElBQUksQ0FBQyxJQUFMLENBQVUsU0FBVixFQUFxQix1QkFBckIsQ0FBYjs7RUFDNUIsRUFBQSxHQUE0QixRQUFBLENBQUUsWUFBRixDQUFBO1dBQW9CLENBQUUsaUJBQUEsQ0FBa0IsZUFBbEIsRUFBbUMsWUFBbkMsQ0FBRixDQUFtRCxDQUFDLElBQXBELENBQUE7RUFBcEIsRUE3QjVCOzs7RUFpQ0EsUUFBQSxHQUFXLFFBQUEsQ0FBRSxDQUFGLENBQUE7V0FBUyxXQUFBLElBQU8sQ0FBRSxDQUFFLE1BQU0sQ0FBQyxjQUFQLENBQXNCLENBQXRCLENBQUYsQ0FBQSxLQUErQixJQUFqQztFQUFoQixFQWpDWDs7O0VBb0NBLGtCQUFBLEdBQXFCLFFBQUEsQ0FBRSxPQUFGLEVBQVcsV0FBVyxFQUF0QixDQUFBO0FBQ3JCLFFBQUEsQ0FBQSxFQUFBO0lBQUUsUUFBQSxHQUFXLElBQUksR0FBSixDQUFRLENBQUssUUFBUSxDQUFDLE1BQVQsS0FBbUIsQ0FBdEIsR0FBNkIsU0FBN0IsR0FBNEMsUUFBOUMsQ0FBUjtJQUNYLENBQUEsR0FBSSxDQUFBO0lBQ0osSUFBK0UsUUFBUSxDQUFDLEdBQVQsQ0FBYSxHQUFiLENBQS9FO01BQUEsQ0FBQyxDQUFDLENBQUYsR0FBTSxPQUFPLENBQUMsRUFBZDs7SUFDQSxJQUErRSxRQUFRLENBQUMsR0FBVCxDQUFhLEdBQWIsQ0FBL0U7TUFBQSxDQUFDLENBQUMsQ0FBRjs7QUFBUTtBQUFBO1FBQUEsS0FBQSxxQ0FBQTs7dUJBQUssQ0FBRSxRQUFBLENBQVMsQ0FBVCxDQUFGLENBQUgsR0FBdUIsQ0FBRSxHQUFBLENBQUYsQ0FBdkIsR0FBc0M7UUFBeEMsQ0FBQTs7V0FBUjs7SUFDQSxJQUErRSxRQUFRLENBQUMsR0FBVCxDQUFhLEdBQWIsQ0FBL0U7TUFBQSxDQUFDLENBQUMsQ0FBRjs7QUFBUTtBQUFBO1FBQUEsS0FBQSxxQ0FBQTs7dUJBQUssQ0FBRSxRQUFBLENBQVMsQ0FBVCxDQUFGLENBQUgsR0FBdUIsQ0FBRSxHQUFBLENBQUYsQ0FBdkIsR0FBc0M7UUFBeEMsQ0FBQTs7V0FBUjs7SUFDQSxJQUErRSxRQUFRLENBQUMsR0FBVCxDQUFhLEdBQWIsQ0FBL0U7TUFBQSxDQUFDLENBQUMsQ0FBRixHQUFNLE9BQU8sQ0FBQyxFQUFkOztJQUNBLElBQStFLFFBQVEsQ0FBQyxHQUFULENBQWEsR0FBYixDQUEvRTtNQUFBLENBQUMsQ0FBQyxDQUFGLEdBQU0sT0FBTyxDQUFDLEVBQWQ7O0lBQ0EsSUFBK0UsUUFBUSxDQUFDLEdBQVQsQ0FBYSxHQUFiLENBQS9FO01BQUEsQ0FBQyxDQUFDLENBQUYsR0FBTSxPQUFPLENBQUMsRUFBZDs7SUFDQSxJQUErRSxRQUFRLENBQUMsR0FBVCxDQUFhLEdBQWIsQ0FBL0U7TUFBQSxDQUFDLENBQUMsQ0FBRixHQUFNLE9BQU8sQ0FBQyxFQUFkOztBQUNBLFdBQU87RUFWWSxFQXBDckI7OztFQWtEQSxJQUFDLENBQUEsT0FBRCxHQUlFLENBQUE7O0lBQUEsTUFBQSxFQUFRLFFBQUEsQ0FBQSxDQUFBO0FBQ1YsVUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFFBQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLFVBQUEsRUFBQSxtQkFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLFVBQUYsQ0FBQSxHQUFtQixPQUFBLENBQVEseURBQVIsQ0FBbkI7TUFDQSxtQkFBQSxHQUFzQjtRQUNwQjtVQUFFLENBQUUsQ0FBRSxHQUFGLENBQUY7VUFBOEIsS0FBOUIsQ0FBRjtVQUF5QztZQUFFLENBQUEsRUFBRyxFQUFMO1lBQXFELENBQUEsRUFBRztjQUFFO2dCQUFFLENBQUEsRUFBRyxLQUFMO2dCQUFZLENBQUEsRUFBRyxHQUFmO2dCQUFvQixDQUFBLEVBQUc7Y0FBdkIsQ0FBRjthQUF4RDtZQUE0SCxDQUFBLEVBQUc7VUFBL0gsQ0FBekM7U0FEb0I7UUFFcEI7VUFBRSxDQUFFLENBQUUsSUFBRixDQUFGO1VBQThCLEtBQTlCLENBQUY7VUFBeUM7WUFBRSxDQUFBLEVBQUcsRUFBTDtZQUFxRCxDQUFBLEVBQUc7Y0FBRTtnQkFBRSxDQUFBLEVBQUcsS0FBTDtnQkFBWSxDQUFBLEVBQUcsSUFBZjtnQkFBcUIsQ0FBQSxFQUFHO2NBQXhCLENBQUY7YUFBeEQ7WUFBNEgsQ0FBQSxFQUFHO1VBQS9ILENBQXpDO1NBRm9CO1FBR3BCO1VBQUUsQ0FBRSxDQUFFLE9BQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLE1BQWY7Z0JBQXVCLENBQUEsRUFBRyxJQUExQjtnQkFBZ0MsQ0FBQSxFQUFHO2NBQW5DLENBQUY7YUFBTDtZQUFxRCxDQUFBLEVBQUcsRUFBeEQ7WUFBNEgsQ0FBQSxFQUFHO1VBQS9ILENBQXpDO1NBSG9CO1FBSXBCO1VBQUUsQ0FBRSxDQUFFLE9BQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLE1BQWY7Z0JBQXVCLENBQUEsRUFBRyxLQUExQjtnQkFBaUMsQ0FBQSxFQUFHO2NBQXBDLENBQUY7YUFBTDtZQUFxRCxDQUFBLEVBQUcsRUFBeEQ7WUFBNEgsQ0FBQSxFQUFHO1VBQS9ILENBQXpDO1NBSm9CO1FBS3BCO1VBQUUsQ0FBRSxDQUFFLFNBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLE1BQWY7Z0JBQXVCLENBQUEsRUFBRyxJQUExQjtnQkFBZ0MsQ0FBQSxFQUFHO2NBQW5DLENBQUY7YUFBeEQ7WUFBNEgsQ0FBQSxFQUFHO1VBQS9ILENBQXpDO1NBTG9CO1FBTXBCO1VBQUUsQ0FBRSxDQUFFLFNBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLE1BQWY7Z0JBQXVCLENBQUEsRUFBRyxLQUExQjtnQkFBaUMsQ0FBQSxFQUFHO2NBQXBDLENBQUY7YUFBeEQ7WUFBNEgsQ0FBQSxFQUFHO1VBQS9ILENBQXpDO1NBTm9CO1FBT3BCO1VBQUUsQ0FBRSxDQUFFLFFBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLE9BQWY7Z0JBQXdCLENBQUEsRUFBRztjQUEzQixDQUFGO2FBQXhEO1lBQTRILENBQUEsRUFBRztVQUEvSCxDQUF6QztTQVBvQjtRQVFwQjtVQUFFLENBQUUsQ0FBRSxRQUFGLENBQUY7VUFBOEIsS0FBOUIsQ0FBRjtVQUF5QztZQUFFLENBQUEsRUFBRyxFQUFMO1lBQXFELENBQUEsRUFBRztjQUFFO2dCQUFFLENBQUEsRUFBRyxLQUFMO2dCQUFZLENBQUEsRUFBRyxPQUFmO2dCQUF3QixDQUFBLEVBQUc7Y0FBM0IsQ0FBRjthQUF4RDtZQUE0SCxDQUFBLEVBQUc7VUFBL0gsQ0FBekM7U0FSb0I7UUFTcEI7VUFBRSxDQUFFLENBQUUsT0FBRixDQUFGO1VBQThCLEtBQTlCLENBQUY7VUFBeUM7WUFBRSxDQUFBLEVBQUcsRUFBTDtZQUFxRCxDQUFBLEVBQUcsRUFBeEQ7WUFBNEgsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHO2NBQWYsQ0FBRjs7VUFBL0gsQ0FBekM7U0FUb0I7UUFVcEI7VUFBRSxDQUFFLENBQUUsUUFBRixDQUFGO1VBQThCLEtBQTlCLENBQUY7VUFBeUM7WUFBRSxDQUFBLEVBQUcsRUFBTDtZQUFxRCxDQUFBLEVBQUc7Y0FBRTtnQkFBRSxDQUFBLEVBQUcsS0FBTDtnQkFBWSxDQUFBLEVBQUcsT0FBZjtnQkFBd0IsQ0FBQSxFQUFHO2NBQTNCLENBQUY7YUFBeEQ7WUFBNEgsQ0FBQSxFQUFHO1VBQS9ILENBQXpDO1NBVm9CO1FBV3BCO1VBQUUsQ0FBRSxDQUFFLFFBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLE1BQWY7Z0JBQXVCLENBQUEsRUFBRyxFQUExQjtnQkFBOEIsQ0FBQSxFQUFHO2NBQWpDLENBQUY7YUFBTDtZQUFxRCxDQUFBLEVBQUcsRUFBeEQ7WUFBNEgsQ0FBQSxFQUFHO1VBQS9ILENBQXpDO1NBWG9CO1FBWXBCO1VBQUUsQ0FBRSxDQUFFLFdBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLE1BQWY7Z0JBQXVCLENBQUEsRUFBRyxLQUExQjtnQkFBaUMsQ0FBQSxFQUFHO2NBQXBDLENBQUY7YUFBTDtZQUFxRCxDQUFBLEVBQUcsRUFBeEQ7WUFBNEgsQ0FBQSxFQUFHO1VBQS9ILENBQXpDO1NBWm9CO1FBYXBCO1VBQUUsQ0FBRSxDQUFFLGFBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLE1BQWY7Z0JBQXVCLENBQUEsRUFBRyxLQUExQjtnQkFBaUMsQ0FBQSxFQUFHO2NBQXBDLENBQUY7YUFBeEQ7WUFBNEgsQ0FBQSxFQUFHO1VBQS9ILENBQXpDO1NBYm9CO1FBY3BCO1VBQUUsQ0FBRSxDQUFFLElBQUY7VUFBUSxXQUFSLENBQUY7VUFBOEIsS0FBOUIsQ0FBRjtVQUF5QztZQUFFLENBQUEsRUFBRyxFQUFMO1lBQXFELENBQUEsRUFBRztjQUFFO2dCQUFFLENBQUEsRUFBRyxLQUFMO2dCQUFZLENBQUEsRUFBRyxXQUFmO2dCQUE0QixDQUFBLEVBQUc7Y0FBL0IsQ0FBRjthQUF4RDtZQUE0SCxDQUFBLEVBQUc7VUFBL0gsQ0FBekM7U0Fkb0I7UUFlcEI7VUFBRSxDQUFFLENBQUUsS0FBRjtVQUFTLFdBQVQsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLE1BQWY7Z0JBQXVCLENBQUEsRUFBRyxLQUExQjtnQkFBaUMsQ0FBQSxFQUFHO2NBQXBDLENBQUY7YUFBTDtZQUFxRCxDQUFBLEVBQUc7Y0FBRTtnQkFBRSxDQUFBLEVBQUcsS0FBTDtnQkFBWSxDQUFBLEVBQUcsS0FBZjtnQkFBc0IsQ0FBQSxFQUFHO2NBQXpCLENBQUY7YUFBeEQ7WUFBNEgsQ0FBQSxFQUFHO1VBQS9ILENBQXpDO1NBZm9CO1FBZ0JwQjtVQUFFLENBQUUsQ0FBRSxrQkFBRixDQUFGO1VBQThCLEtBQTlCLENBQUY7VUFBeUM7WUFBRSxDQUFBLEVBQUcsRUFBTDtZQUFxRCxDQUFBLEVBQUc7Y0FBRTtnQkFBRSxDQUFBLEVBQUcsS0FBTDtnQkFBWSxDQUFBLEVBQUcsa0JBQWY7Z0JBQW1DLENBQUEsRUFBRztjQUF0QyxDQUFGO2FBQXhEO1lBQTRILENBQUEsRUFBRztVQUEvSCxDQUF6QztTQWhCb0I7UUFpQnBCO1VBQUUsQ0FBRSxDQUFFLGdCQUFGLENBQUY7VUFBOEIsS0FBOUIsQ0FBRjtVQUF5QztZQUFFLENBQUEsRUFBRyxFQUFMO1lBQXFELENBQUEsRUFBRztjQUFFO2dCQUFFLENBQUEsRUFBRyxLQUFMO2dCQUFZLENBQUEsRUFBRyxnQkFBZjtnQkFBaUMsQ0FBQSxFQUFHO2NBQXBDLENBQUY7YUFBeEQ7WUFBNEgsQ0FBQSxFQUFHO1VBQS9ILENBQXpDO1NBakJvQjtRQWtCcEI7VUFBRSxDQUFFLENBQUUsaUJBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLGlCQUFmO2dCQUFrQyxDQUFBLEVBQUc7Y0FBckMsQ0FBRjthQUF4RDtZQUE0SCxDQUFBLEVBQUc7VUFBL0gsQ0FBekM7U0FsQm9CO1FBbUJwQjtVQUFFLENBQUUsQ0FBRSxpQkFBRixDQUFGO1VBQThCLEtBQTlCLENBQUY7VUFBeUM7WUFBRSxDQUFBLEVBQUcsRUFBTDtZQUFxRCxDQUFBLEVBQUc7Y0FBRTtnQkFBRSxDQUFBLEVBQUcsS0FBTDtnQkFBWSxDQUFBLEVBQUcsZ0JBQWY7Z0JBQWlDLENBQUEsRUFBRztjQUFwQyxDQUFGO2FBQXhEO1lBQTRILENBQUEsRUFBRztVQUEvSCxDQUF6QztTQW5Cb0I7UUFvQnBCO1VBQUUsQ0FBRSxDQUFFLElBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLEdBQWY7Z0JBQW9CLENBQUEsRUFBRztjQUF2QixDQUFGO2FBQXhEO1lBQTRILENBQUEsRUFBRztVQUEvSCxDQUF6QztTQXBCb0I7UUFxQnBCO1VBQUUsQ0FBRSxDQUFFLElBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLElBQWY7Z0JBQXFCLENBQUEsRUFBRztjQUF4QixDQUFGO2FBQXhEO1lBQTRILENBQUEsRUFBRztVQUEvSCxDQUF6QztTQXJCb0I7UUFzQnBCO1VBQUUsQ0FBRSxDQUFFLEtBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLElBQWY7Z0JBQXFCLENBQUEsRUFBRztjQUF4QixDQUFGO2FBQXhEO1lBQTRILENBQUEsRUFBRztVQUEvSCxDQUF6QztTQXRCb0I7UUF1QnBCO1VBQUUsQ0FBRSxDQUFFLFlBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLFlBQWY7Z0JBQTZCLENBQUEsRUFBRztjQUFoQyxDQUFGO2FBQXhEO1lBQTRILENBQUEsRUFBRztVQUEvSCxDQUF6QztTQXZCb0I7UUF3QnBCO1VBQUUsQ0FBRSxDQUFFLEdBQUY7VUFBTyxRQUFQLENBQUY7VUFBOEIsS0FBOUIsQ0FBRjtVQUF5QztZQUFFLENBQUEsRUFBRyxFQUFMO1lBQXFELENBQUEsRUFBRztjQUFFO2dCQUFFLENBQUEsRUFBRyxLQUFMO2dCQUFZLENBQUEsRUFBRyxHQUFmO2dCQUFvQixDQUFBLEVBQUc7Y0FBdkIsQ0FBRjtjQUErQjtnQkFBRSxDQUFBLEVBQUcsS0FBTDtnQkFBWSxDQUFBLEVBQUcsUUFBZjtnQkFBeUIsQ0FBQSxFQUFHO2NBQTVCLENBQS9CO2FBQXhEO1lBQTRILENBQUEsRUFBRztVQUEvSCxDQUF6QztTQXhCb0I7UUF5QnBCO1VBQUUsQ0FBRSxDQUFFLElBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLElBQWY7Z0JBQXFCLENBQUEsRUFBRztjQUF4QixDQUFGO2FBQXhEO1lBQTRILENBQUEsRUFBRztVQUEvSCxDQUF6QztTQXpCb0I7UUEwQnBCO1VBQUUsQ0FBRSxDQUFFLElBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLElBQWY7Z0JBQXFCLENBQUEsRUFBRztjQUF4QixDQUFGO2FBQXhEO1lBQTRILENBQUEsRUFBRztVQUEvSCxDQUF6QztTQTFCb0I7UUEyQnBCO1VBQUUsQ0FBRSxDQUFFLE1BQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLE1BQWY7Z0JBQXVCLENBQUEsRUFBRztjQUExQixDQUFGO2FBQXhEO1lBQTRILENBQUEsRUFBRztVQUEvSCxDQUF6QztTQTNCb0I7UUE0QnBCO1VBQUUsQ0FBRSxDQUFFLEtBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLEtBQWY7Z0JBQXNCLENBQUEsRUFBRztjQUF6QixDQUFGO2FBQXhEO1lBQTRILENBQUEsRUFBRztVQUEvSCxDQUF6QztTQTVCb0I7UUE2QnBCO1VBQUUsQ0FBRSxDQUFFLE1BQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLE1BQWY7Z0JBQXVCLENBQUEsRUFBRztjQUExQixDQUFGO2FBQXhEO1lBQTRILENBQUEsRUFBRztVQUEvSCxDQUF6QztTQTdCb0I7UUE4QnBCO1VBQUUsQ0FBRSxDQUFFLEtBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLEtBQWY7Z0JBQXNCLENBQUEsRUFBRztjQUF6QixDQUFGO2FBQXhEO1lBQTRILENBQUEsRUFBRztVQUEvSCxDQUF6QztTQTlCb0I7UUErQnBCO1VBQUUsQ0FBRSxDQUFFLElBQUYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLElBQWY7Z0JBQXFCLENBQUEsRUFBRztjQUF4QixDQUFGO2FBQXhEO1lBQTRILENBQUEsRUFBRztVQUEvSCxDQUF6QztTQS9Cb0I7UUFnQ3BCO1VBQUUsQ0FBRSxDQUFFLElBQUY7VUFBUSxJQUFSO1VBQWMsSUFBZCxDQUFGO1VBQThCLEtBQTlCLENBQUY7VUFBeUM7WUFBRSxDQUFBLEVBQUcsRUFBTDtZQUFxRCxDQUFBLEVBQUc7Y0FBRTtnQkFBRSxDQUFBLEVBQUcsS0FBTDtnQkFBWSxDQUFBLEVBQUcsSUFBZjtnQkFBcUIsQ0FBQSxFQUFHO2NBQXhCLENBQUY7Y0FBZ0M7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLElBQWY7Z0JBQXFCLENBQUEsRUFBRztjQUF4QixDQUFoQzthQUF4RDtZQUE0SCxDQUFBLEVBQUc7VUFBL0gsQ0FBekM7U0FoQ29CO1FBaUNwQjtVQUFFLENBQUUsQ0FBRSxLQUFGO1VBQVMsSUFBVDtVQUFlLEtBQWYsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLEtBQWY7Z0JBQXNCLENBQUEsRUFBRztjQUF6QixDQUFGO2NBQWlDO2dCQUFFLENBQUEsRUFBRyxLQUFMO2dCQUFZLENBQUEsRUFBRyxLQUFmO2dCQUFzQixDQUFBLEVBQUc7Y0FBekIsQ0FBakM7YUFBeEQ7WUFBNEgsQ0FBQSxFQUFHO1VBQS9ILENBQXpDO1NBakNvQjtRQWtDcEI7VUFBRSxDQUFFLENBQUUsTUFBRjtVQUFVLElBQVY7VUFBZ0IsTUFBaEIsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLE1BQWY7Z0JBQXVCLENBQUEsRUFBRztjQUExQixDQUFGO2NBQWtDO2dCQUFFLENBQUEsRUFBRyxLQUFMO2dCQUFZLENBQUEsRUFBRyxNQUFmO2dCQUF1QixDQUFBLEVBQUc7Y0FBMUIsQ0FBbEM7YUFBeEQ7WUFBNEgsQ0FBQSxFQUFHO1VBQS9ILENBQXpDO1NBbENvQjtRQW1DcEI7VUFBRSxDQUFFLENBQUUsTUFBRjtVQUFVLElBQVY7VUFBZ0IsTUFBaEIsQ0FBRjtVQUE4QixLQUE5QixDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLEVBQUw7WUFBcUQsQ0FBQSxFQUFHO2NBQUU7Z0JBQUUsQ0FBQSxFQUFHLEtBQUw7Z0JBQVksQ0FBQSxFQUFHLE1BQWY7Z0JBQXVCLENBQUEsRUFBRztjQUExQixDQUFGO2NBQWtDO2dCQUFFLENBQUEsRUFBRyxLQUFMO2dCQUFZLENBQUEsRUFBRyxNQUFmO2dCQUF1QixDQUFBLEVBQUc7Y0FBMUIsQ0FBbEM7YUFBeEQ7WUFBNEgsQ0FBQSxFQUFHO1VBQS9ILENBQXpDO1NBbkNvQjtRQXNDcEIsQ0FBQyxFQUFELENBdENvQjtRQXVDcEI7OztVQUFFLENBQUUsQ0FBRSxHQUFGLENBQUY7VUFBMEIsR0FBMUIsQ0FBRjtVQUFtQztZQUFFLENBQUEsRUFBRyxDQUFFLEdBQUY7VUFBTCxDQUFuQztTQXZDb0I7UUF3Q3BCO1VBQUUsQ0FBRSxDQUFFLElBQUYsQ0FBRjtVQUEwQixHQUExQixDQUFGO1VBQW1DO1lBQUUsQ0FBQSxFQUFHLENBQUUsSUFBRjtVQUFMLENBQW5DO1NBeENvQjtRQXlDcEI7VUFBRSxDQUFFLENBQUUsT0FBRixDQUFGO1VBQTBCLEdBQTFCLENBQUY7VUFBbUM7WUFBRSxDQUFBLEVBQUcsQ0FBRSxPQUFGO1VBQUwsQ0FBbkM7U0F6Q29CO1FBMENwQjtVQUFFLENBQUUsQ0FBRSxPQUFGLENBQUY7VUFBMEIsR0FBMUIsQ0FBRjtVQUFtQztZQUFFLENBQUEsRUFBRyxDQUFFLE9BQUY7VUFBTCxDQUFuQztTQTFDb0I7UUEyQ3BCO1VBQUUsQ0FBRSxDQUFFLFNBQUYsQ0FBRjtVQUEwQixHQUExQixDQUFGO1VBQW1DO1lBQUUsQ0FBQSxFQUFHLENBQUUsU0FBRjtVQUFMLENBQW5DO1NBM0NvQjtRQTRDcEI7VUFBRSxDQUFFLENBQUUsU0FBRixDQUFGO1VBQTBCLEdBQTFCLENBQUY7VUFBbUM7WUFBRSxDQUFBLEVBQUcsQ0FBRSxTQUFGO1VBQUwsQ0FBbkM7U0E1Q29CO1FBNkNwQjtVQUFFLENBQUUsQ0FBRSxRQUFGLENBQUY7VUFBMEIsR0FBMUIsQ0FBRjtVQUFtQztZQUFFLENBQUEsRUFBRyxDQUFFLFFBQUY7VUFBTCxDQUFuQztTQTdDb0I7UUE4Q3BCO1VBQUUsQ0FBRSxDQUFFLFFBQUYsQ0FBRjtVQUEwQixHQUExQixDQUFGO1VBQW1DO1lBQUUsQ0FBQSxFQUFHLENBQUUsUUFBRjtVQUFMLENBQW5DO1NBOUNvQjtRQStDcEI7VUFBRSxDQUFFLENBQUUsT0FBRixDQUFGO1VBQTBCLEdBQTFCLENBQUY7VUFBbUM7WUFBRSxDQUFBLEVBQUcsQ0FBRSxPQUFGO1VBQUwsQ0FBbkM7U0EvQ29CO1FBZ0RwQjtVQUFFLENBQUUsQ0FBRSxRQUFGLENBQUY7VUFBMEIsR0FBMUIsQ0FBRjtVQUFtQztZQUFFLENBQUEsRUFBRyxDQUFFLFFBQUY7VUFBTCxDQUFuQztTQWhEb0I7UUFpRHBCO1VBQUUsQ0FBRSxDQUFFLFFBQUYsQ0FBRjtVQUEwQixHQUExQixDQUFGO1VBQW1DO1lBQUUsQ0FBQSxFQUFHLENBQUUsUUFBRjtVQUFMLENBQW5DO1NBakRvQjtRQWtEcEI7VUFBRSxDQUFFLENBQUUsV0FBRixDQUFGO1VBQTBCLEdBQTFCLENBQUY7VUFBbUM7WUFBRSxDQUFBLEVBQUcsQ0FBRSxXQUFGO1VBQUwsQ0FBbkM7U0FsRG9CO1FBbURwQjtVQUFFLENBQUUsQ0FBRSxhQUFGLENBQUY7VUFBMEIsR0FBMUIsQ0FBRjtVQUFtQztZQUFFLENBQUEsRUFBRyxDQUFFLGFBQUY7VUFBTCxDQUFuQztTQW5Eb0I7UUFvRHBCO1VBQUUsQ0FBRSxDQUFFLElBQUY7VUFBUSxXQUFSLENBQUY7VUFBMEIsR0FBMUIsQ0FBRjtVQUFtQztZQUFFLENBQUEsRUFBRyxDQUFFLElBQUY7VUFBUSxXQUFSO1VBQUwsQ0FBbkM7U0FwRG9CO1FBcURwQjtVQUFFLENBQUUsQ0FBRSxLQUFGO1VBQVMsV0FBVCxDQUFGO1VBQTBCLEdBQTFCLENBQUY7VUFBbUM7WUFBRSxDQUFBLEVBQUcsQ0FBRSxLQUFGO1VBQVMsV0FBVDtVQUFMLENBQW5DO1NBckRvQjtRQXNEcEI7VUFBRSxDQUFFLENBQUUsa0JBQUYsQ0FBRjtVQUEwQixHQUExQixDQUFGO1VBQW1DO1lBQUUsQ0FBQSxFQUFHLENBQUUsa0JBQUY7VUFBTCxDQUFuQztTQXREb0I7UUF1RHBCO1VBQUUsQ0FBRSxDQUFFLGdCQUFGLENBQUY7VUFBMEIsR0FBMUIsQ0FBRjtVQUFtQztZQUFFLENBQUEsRUFBRyxDQUFFLGdCQUFGO1VBQUwsQ0FBbkM7U0F2RG9CO1FBd0RwQjtVQUFFLENBQUUsQ0FBRSxpQkFBRixDQUFGO1VBQTBCLEdBQTFCLENBQUY7VUFBbUM7WUFBRSxDQUFBLEVBQUcsQ0FBRSxpQkFBRjtVQUFMLENBQW5DO1NBeERvQjtRQXlEcEI7VUFBRSxDQUFFLENBQUUsaUJBQUYsQ0FBRjtVQUEwQixHQUExQixDQUFGO1VBQW1DO1lBQUUsQ0FBQSxFQUFHLENBQUUsaUJBQUY7VUFBTCxDQUFuQztTQXpEb0I7UUEwRHBCO1VBQUUsQ0FBRSxDQUFFLElBQUYsQ0FBRjtVQUEwQixHQUExQixDQUFGO1VBQW1DO1lBQUUsQ0FBQSxFQUFHLENBQUUsSUFBRjtVQUFMLENBQW5DO1NBMURvQjtRQTJEcEI7VUFBRSxDQUFFLENBQUUsS0FBRixDQUFGO1VBQTBCLEdBQTFCLENBQUY7VUFBbUM7WUFBRSxDQUFBLEVBQUcsQ0FBRSxLQUFGO1VBQUwsQ0FBbkM7U0EzRG9CO1FBNERwQjtVQUFFLENBQUUsQ0FBRSxNQUFGLENBQUY7VUFBMEIsR0FBMUIsQ0FBRjtVQUFtQztZQUFFLENBQUEsRUFBRyxDQUFFLE1BQUY7VUFBTCxDQUFuQztTQTVEb0I7UUE2RHBCO1VBQUUsQ0FBRSxDQUFFLFlBQUYsQ0FBRjtVQUEwQixHQUExQixDQUFGO1VBQW1DO1lBQUUsQ0FBQSxFQUFHLENBQUUsWUFBRjtVQUFMLENBQW5DO1NBN0RvQjtRQThEcEI7VUFBRSxDQUFFLENBQUUsR0FBRjtVQUFPLFFBQVAsQ0FBRjtVQUEwQixHQUExQixDQUFGO1VBQW1DO1lBQUUsQ0FBQSxFQUFHLENBQUUsR0FBRjtVQUFPLFFBQVA7VUFBTCxDQUFuQztTQTlEb0I7UUErRHBCO1VBQUUsQ0FBRSxDQUFFLElBQUYsQ0FBRjtVQUEwQixHQUExQixDQUFGO1VBQW1DO1lBQUUsQ0FBQSxFQUFHLENBQUUsSUFBRjtVQUFMLENBQW5DO1NBL0RvQjtRQWdFcEI7VUFBRSxDQUFFLENBQUUsSUFBRixDQUFGO1VBQTBCLEdBQTFCLENBQUY7VUFBbUM7WUFBRSxDQUFBLEVBQUcsQ0FBRSxJQUFGO1VBQUwsQ0FBbkM7U0FoRW9CO1FBaUVwQjtVQUFFLENBQUUsQ0FBRSxNQUFGLENBQUY7VUFBMEIsR0FBMUIsQ0FBRjtVQUFtQztZQUFFLENBQUEsRUFBRyxDQUFFLE1BQUY7VUFBTCxDQUFuQztTQWpFb0I7UUFrRXBCO1VBQUUsQ0FBRSxDQUFFLEtBQUYsQ0FBRjtVQUEwQixHQUExQixDQUFGO1VBQW1DO1lBQUUsQ0FBQSxFQUFHLENBQUUsS0FBRjtVQUFMLENBQW5DO1NBbEVvQjtRQW1FcEI7VUFBRSxDQUFFLENBQUUsTUFBRixDQUFGO1VBQTBCLEdBQTFCLENBQUY7VUFBbUM7WUFBRSxDQUFBLEVBQUcsQ0FBRSxNQUFGO1VBQUwsQ0FBbkM7U0FuRW9CO1FBb0VwQjtVQUFFLENBQUUsQ0FBRSxLQUFGLENBQUY7VUFBMEIsR0FBMUIsQ0FBRjtVQUFtQztZQUFFLENBQUEsRUFBRyxDQUFFLEtBQUY7VUFBTCxDQUFuQztTQXBFb0I7UUFxRXBCO1VBQUUsQ0FBRSxDQUFFLElBQUYsQ0FBRjtVQUEwQixHQUExQixDQUFGO1VBQW1DO1lBQUUsQ0FBQSxFQUFHLENBQUUsSUFBRjtVQUFMLENBQW5DO1NBckVvQjtRQXNFcEI7VUFBRSxDQUFFLENBQUUsSUFBRjtVQUFRLElBQVI7VUFBYyxJQUFkLENBQUY7VUFBMEIsR0FBMUIsQ0FBRjtVQUFtQztZQUFFLENBQUEsRUFBRyxDQUFFLElBQUY7VUFBUSxJQUFSO1VBQWMsSUFBZDtVQUFMLENBQW5DO1NBdEVvQjtRQXVFcEI7VUFBRSxDQUFFLENBQUUsT0FBRjtVQUFXLElBQVg7VUFBaUIsT0FBakIsQ0FBRjtVQUFnQyxHQUFoQyxDQUFGO1VBQXlDO1lBQUUsQ0FBQSxFQUFHLENBQUUsT0FBRjtVQUFXLElBQVg7VUFBaUIsT0FBakI7VUFBTCxDQUF6QztTQXZFb0I7UUFEMUI7O01BMkVJLEtBQUEscURBQUE7UUFBSSxDQUFFLENBQUUsSUFBRixFQUFRLFFBQVIsQ0FBRixFQUF1QixPQUF2QjtRQUNGLElBQU8sZUFBUDtVQUNFLElBQUEsQ0FBQTtBQUNBLG1CQUZGO1NBQU47O1FBSU0sSUFBQSxDQUFLLENBQUUsQ0FBRSxJQUFGLEVBQVEsUUFBUixDQUFGLEVBQXlCLGtCQUFBLENBQXFCLFVBQUEsQ0FBVyxJQUFYLENBQXJCLEVBQXdDLFFBQXhDLENBQXpCLENBQUw7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLGtCQUFBLENBQXFCLFVBQUEsQ0FBVyxJQUFYLENBQXJCLEVBQXdDLFFBQXhDO1FBQUgsQ0FBYixDQUFKLEVBQXdFLE9BQXhFO01BTkYsQ0EzRUo7O2FBbUZLO0lBcEZLLENBQVI7O0lBd0ZBLGFBQUEsRUFHRSxDQUFBOztNQUFBLFFBQUEsRUFBVSxRQUFBLENBQUEsQ0FBQTtBQUNkLFlBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUE7UUFBTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUEsQ0FBRyxDQUFBLHNCQUFBLENBQUg7UUFBSCxDQUFiLENBQUosRUFBeUcsSUFBekc7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUEsQ0FBRyxDQUFBLHNCQUFBLENBQUg7UUFBSCxDQUFiLENBQUosRUFBeUcsSUFBekc7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUEsQ0FBRyxDQUFBLHVCQUFBLENBQUg7UUFBSCxDQUFiLENBQUosRUFBeUcsS0FBekc7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUEsQ0FBRyxDQUFBLHNDQUFBLENBQUg7UUFBSCxDQUFiLENBQUosRUFBeUcscUJBQXpHO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFBLENBQUcsQ0FBQSx3RUFBQSxDQUFIO1FBQUgsQ0FBYixDQUFKLEVBQXlHLHVEQUF6RztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7aUJBQUcsRUFBQSxDQUFHLENBQUEsMkRBQUEsQ0FBSDtRQUFILENBQWIsQ0FBSixFQUF5RyxnREFBekc7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUEsQ0FBRyxDQUFBLGVBQUEsQ0FBSDtRQUFILENBQWIsQ0FBSixFQUF5RyxJQUF6RztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7aUJBQUcsRUFBQSxDQUFHLENBQUEsZUFBQSxDQUFIO1FBQUgsQ0FBYixDQUFKLEVBQXlHLElBQXpHO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFBLENBQUcsQ0FBQSw0QkFBQSxDQUFIO1FBQUgsQ0FBYixDQUFKLEVBQXlHLElBQXpHO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFBLENBQUcsQ0FBQSw0QkFBQSxDQUFIO1FBQUgsQ0FBYixDQUFKLEVBQXlHLElBQXpHLEVBVE47O2VBV087TUFaTyxDQUFWOztNQWVBLHFCQUFBLEVBQXVCLFFBQUEsQ0FBQSxDQUFBO0FBQzNCLFlBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUE7UUFBTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUEsQ0FBRyxDQUFBLHVCQUFBLENBQUg7UUFBSCxDQUFiLENBQUosRUFBaUYsSUFBakY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUEsQ0FBRyxDQUFBLDZCQUFBLENBQUg7UUFBSCxDQUFiLENBQUosRUFBaUYsZUFBakY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUEsQ0FBRyxDQUFBLDBDQUFBLENBQUg7UUFBSCxDQUFiLENBQUosRUFBaUYsbUJBQWpGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFBLENBQUcsQ0FBQSwrQkFBQSxDQUFIO1FBQUgsQ0FBYixDQUFKLEVBQWlGLGVBQWpGLEVBSE47O2VBS087TUFOb0IsQ0FmdkI7O01Bd0JBLDZCQUFBLEVBQStCLFFBQUEsQ0FBQSxDQUFBO0FBQ25DLFlBQUEsUUFBQSxFQUFBO1FBQU0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxFQUFBLENBQUcsQ0FBQSwwQ0FBQSxDQUFIO1FBQUgsQ0FBYixDQUFKLEVBQXVHLGlJQUF2RztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7aUJBQUcsRUFBQSxDQUFHLENBQUEsa0RBQUEsQ0FBSDtRQUFILENBQWIsQ0FBSixFQUF1RyxpTUFBdkc7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEVBQUEsQ0FBRyxDQUFBLHFFQUFBLENBQUg7UUFBSCxDQUFiLENBQUosRUFBdUcsa1BBQXZHO1FBQ0EsSUFBQSxDQUFLLEVBQUEsQ0FBRyxDQUFBLHFFQUFBLENBQUgsQ0FBTCxFQUhOOztlQUtPO01BTjRCO0lBeEIvQjtFQTNGRixFQXRERjs7O0VBbUxBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQSxXQUFBLEVBQUE7TUFBRSxDQUFBLENBQUUsYUFBRixDQUFBLEdBQXFCLE9BQUEsQ0FBUSwwQ0FBUixDQUFyQjtNQUNBLGFBQUEsQ0FBYyx1QkFBZCxFQURGOztNQUdFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsSUFBQyxDQUFBLE9BQS9CLEVBTEY7OzthQVFHO0lBVHFDLENBQUEsSUFBeEM7O0FBbkxBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdob2xsZXJpdGgnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgbGltZVxuICBnb2xkXG4gIHJlZFxuICBibHVlXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xueyBydW5fc2hlbGxfY29tbWFuZCAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvY2xpLXJ1bi1zaGVsbC1jb21tYW5kJ1xucGF0aF90b19qc29uaWNrICAgICAgICAgICA9IFBBVEgucmVzb2x2ZSBQQVRILmpvaW4gX19kaXJuYW1lLCAnLi4vLi4vLi4vYXBwcy9qc29uaWNrJ1xuc2ggICAgICAgICAgICAgICAgICAgICAgICA9ICggY29tbWFuZF9saW5lICkgLT4gKCBydW5fc2hlbGxfY29tbWFuZCBwYXRoX3RvX2pzb25pY2ssIGNvbW1hbmRfbGluZSApLnRyaW0oKVxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaXNhX25wb2QgPSAoIHggKSAtPiB4PyBhbmQgKCAoIE9iamVjdC5nZXRQcm90b3R5cGVPZiB4ICkgaXMgbnVsbCApXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuYWJicmV2aWF0ZV9hcmd2bmZvID0gKCBhcmd2bmZvLCBpbmNsdWRlcyA9ICcnICkgLT5cbiAgaW5jbHVkZXMgPSBuZXcgU2V0ICggaWYgaW5jbHVkZXMubGVuZ3RoIGlzIDAgdGhlbiAnYWNkZWlvdCcgZWxzZSBpbmNsdWRlcyApXG4gIFIgPSB7fVxuICBSLmEgPSBhcmd2bmZvLmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgaW5jbHVkZXMuaGFzICdhJ1xuICBSLmMgPSAoICggaWYgKCBpc2FfbnBvZCBlICkgdGhlbiB7IGUuLi4sIH0gZWxzZSBlICkgZm9yIGUgaW4gYXJndm5mby5jICkgICAgaWYgaW5jbHVkZXMuaGFzICdjJ1xuICBSLmQgPSAoICggaWYgKCBpc2FfbnBvZCBlICkgdGhlbiB7IGUuLi4sIH0gZWxzZSBlICkgZm9yIGUgaW4gYXJndm5mby5kICkgICAgaWYgaW5jbHVkZXMuaGFzICdkJ1xuICBSLmUgPSBhcmd2bmZvLmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgaW5jbHVkZXMuaGFzICdlJ1xuICBSLmkgPSBhcmd2bmZvLmkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgaW5jbHVkZXMuaGFzICdpJ1xuICBSLm8gPSBhcmd2bmZvLm8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgaW5jbHVkZXMuaGFzICdvJ1xuICBSLnQgPSBhcmd2bmZvLnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgaW5jbHVkZXMuaGFzICd0J1xuICByZXR1cm4gUlxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGpzb25pY2sgPVxuXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBiYXNpY3M6IC0+XG4gICAgeyBwYXJzZV9hcmd2LCAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvanNvbmljay9saWIvYW5hbHl6ZS1jbGktYXJndW1lbnRzLXBoYXNlLTEnXG4gICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgIFsgWyBbICd4JyAgICAgICAgICAgICAgICAgICAgXSwgJ2NkZScgXSwgeyBjOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBkOiBbIHsgdDogJ2JhcicsIHY6ICd4JywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJ3t9JyAgICAgICAgICAgICAgICAgICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnb2JqJywgdjogJ3t9JywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAnK25hbWUnICAgICAgICAgICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyB7IHQ6ICdib2wnLCBuOiAnbmFtZScsIHY6IHRydWUsIHg6IDAsIH0gICAgXSwgZDogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFsgWyBbICctbmFtZScgICAgICAgICAgICAgICAgXSwgJ2NkZScgXSwgeyBjOiBbIHsgdDogJ2JvbCcsIG46ICduYW1lJywgdjogZmFsc2UsIHg6IDAsIH0gICBdLCBkOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJytkLm5hbWUnICAgICAgICAgICAgICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnYm9sJywgbjogJ25hbWUnLCB2OiB0cnVlLCB4OiAwLCB9ICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAnLWQubmFtZScgICAgICAgICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdib2wnLCBuOiAnbmFtZScsIHY6IGZhbHNlLCB4OiAwLCB9ICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFsgWyBbICclK25hbWUnICAgICAgICAgICAgICAgXSwgJ2NkZScgXSwgeyBjOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBkOiBbIHsgdDogJ2VzYycsIHY6ICcrbmFtZScsIHg6IDAsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJyUtbmFtZScgICAgICAgICAgICAgICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnZXNjJywgdjogJy1uYW1lJywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAnOm5hbWUnICAgICAgICAgICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbIHsgdDogJ2ZhYycsIHg6IDAsIH0gXSB9IF1cbiAgICAgIFsgWyBbICclOm5hbWUnICAgICAgICAgICAgICAgXSwgJ2NkZScgXSwgeyBjOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBkOiBbIHsgdDogJ2VzYycsIHY6ICc6bmFtZScsIHg6IDAsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJzpuYW1lPScgICAgICAgICAgICAgICBdLCAnY2RlJyBdLCB7IGM6IFsgeyB0OiAnZmFjJywgbjogJ25hbWUnLCB2OiAnJywgeDogMCwgfSAgICAgIF0sIGQ6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAnOm5hbWU9d2F0JyAgICAgICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyB7IHQ6ICdmYWMnLCBuOiAnbmFtZScsIHY6ICd3YXQnLCB4OiAwLCB9ICAgXSwgZDogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFsgWyBbICc6ZC5uYW1lPXdhdCcgICAgICAgICAgXSwgJ2NkZScgXSwgeyBjOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBkOiBbIHsgdDogJ2ZhYycsIG46ICduYW1lJywgdjogJ3dhdCcsIHg6IDAsIH0gICAgICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJy0tJywgJzpuYW1lPXdhdCcgICAgICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAncGZuJywgdjogJzpuYW1lPXdhdCcsIHg6IDEsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAnMTIzJywgJzpuYW1lPXdhdCcgICAgIF0sICdjZGUnIF0sIHsgYzogWyB7IHQ6ICdmYWMnLCBuOiAnbmFtZScsIHY6ICd3YXQnLCB4OiAxLCB9ICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnMTIzJywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFsgWyBbICd7XCJuYW1lXCI6XCJ2YWx1ZVwifScgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdvYmonLCB2OiAne1wibmFtZVwiOlwidmFsdWVcIn0nLCB4OiAwLCB9ICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAne1wibmFtZVwiOnZhbHVlfScgICAgICAgXSwgJ2NkZScgXSwgeyBjOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBkOiBbIHsgdDogJ29iaicsIHY6ICd7XCJuYW1lXCI6dmFsdWV9JywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAne1wibmFtZVwiOlwidmFsdWVcIicgICAgICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnb2JqJywgdjogJ3tcIm5hbWVcIjpcInZhbHVlXCInLCB4OiAwLCB9ICAgICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJyV7XCJuYW1lXCI6dmFsdWV9JyAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdlc2MnLCB2OiAne1wibmFtZVwiOnZhbHVlfScsIHg6IDAsIH0gICAgICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJyUlJyAgICAgICAgICAgICAgICAgICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnZXNjJywgdjogJyUnLCB4OiAwLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAnW10nICAgICAgICAgICAgICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdsc3QnLCB2OiAnW10nLCB4OiAwLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFsgWyBbICclW10nICAgICAgICAgICAgICAgICAgXSwgJ2NkZScgXSwgeyBjOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBkOiBbIHsgdDogJ2VzYycsIHY6ICdbXScsIHg6IDAsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJ1szLFwid29yZFwiXScgICAgICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdsc3QnLCB2OiAnWzMsXCJ3b3JkXCJdJywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJzMnLCAnXCJ3b3JkXCInICAgICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnMycsIHg6IDAsIH0sIHsgdDogJ2JhcicsIHY6ICdcIndvcmRcIicsIHg6IDEsIH0gIF0sIGU6IFsgICAgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJyszJyAgICAgICAgICAgICAgICAgICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnbnVtJywgdjogJyszJywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAnLTMnICAgICAgICAgICAgICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnLTMnLCB4OiAwLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFsgWyBbICctMC40JyAgICAgICAgICAgICAgICAgXSwgJ2NkZScgXSwgeyBjOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBkOiBbIHsgdDogJ251bScsIHY6ICctMC40JywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJy0uNCcgICAgICAgICAgICAgICAgICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnbnVtJywgdjogJy0uNCcsIHg6IDAsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAnKzAuNCcgICAgICAgICAgICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnKzAuNCcsIHg6IDAsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFsgWyBbICcrLjQnICAgICAgICAgICAgICAgICAgXSwgJ2NkZScgXSwgeyBjOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBkOiBbIHsgdDogJ251bScsIHY6ICcrLjQnLCB4OiAwLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJy45JyAgICAgICAgICAgICAgICAgICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnbnVtJywgdjogJy45JywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAne30nLCAnLS0nLCAne30nICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdvYmonLCB2OiAne30nLCB4OiAwLCB9LCB7IHQ6ICdwZm4nLCB2OiAne30nLCB4OiAyLCB9ICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFsgWyBbICczNDUnLCAnLS0nLCAnNjc4JyAgICAgXSwgJ2NkZScgXSwgeyBjOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBkOiBbIHsgdDogJ251bScsIHY6ICczNDUnLCB4OiAwLCB9LCB7IHQ6ICdwZm4nLCB2OiAnNjc4JywgeDogMiwgfSAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJy0zNDUnLCAnLS0nLCAnLTY3OCcgICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnbnVtJywgdjogJy0zNDUnLCB4OiAwLCB9LCB7IHQ6ICdwZm4nLCB2OiAnLTY3OCcsIHg6IDIsIH0gXSwgZTogWyAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAnKzM0NScsICctLScsICcrNjc4JyAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnKzM0NScsIHg6IDAsIH0sIHsgdDogJ3BmbicsIHY6ICcrNjc4JywgeDogMiwgfSBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICMgWyBbIFsgJzpkb3JrJywgJy0tJywgJzpkb3JrJyAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdmYWMnLCB2OiAnKzY3OCcsIHg6IDIsIH0gXSwgZTogWyB7IHQ6ICdmYWMnLCAgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFtbXV1cbiAgICAgIFsgWyBbICd4JyAgICAgICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICd4JyAgICAgICAgICAgICAgICBdLCB9LCBdXG4gICAgICBbIFsgWyAne30nICAgICAgICAgICAgICAgXSwgJ2EnIF0sIHsgYTogWyAne30nICAgICAgICAgICAgICAgXSwgfSwgXVxuICAgICAgWyBbIFsgJytuYW1lJyAgICAgICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJytuYW1lJyAgICAgICAgICAgIF0sIH0sIF1cbiAgICAgIFsgWyBbICctbmFtZScgICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICctbmFtZScgICAgICAgICAgICBdLCB9LCBdXG4gICAgICBbIFsgWyAnK2QubmFtZScgICAgICAgICAgXSwgJ2EnIF0sIHsgYTogWyAnK2QubmFtZScgICAgICAgICAgXSwgfSwgXVxuICAgICAgWyBbIFsgJy1kLm5hbWUnICAgICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJy1kLm5hbWUnICAgICAgICAgIF0sIH0sIF1cbiAgICAgIFsgWyBbICclK25hbWUnICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICclK25hbWUnICAgICAgICAgICBdLCB9LCBdXG4gICAgICBbIFsgWyAnJS1uYW1lJyAgICAgICAgICAgXSwgJ2EnIF0sIHsgYTogWyAnJS1uYW1lJyAgICAgICAgICAgXSwgfSwgXVxuICAgICAgWyBbIFsgJzpuYW1lJyAgICAgICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJzpuYW1lJyAgICAgICAgICAgIF0sIH0sIF1cbiAgICAgIFsgWyBbICclOm5hbWUnICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICclOm5hbWUnICAgICAgICAgICBdLCB9LCBdXG4gICAgICBbIFsgWyAnOm5hbWU9JyAgICAgICAgICAgXSwgJ2EnIF0sIHsgYTogWyAnOm5hbWU9JyAgICAgICAgICAgXSwgfSwgXVxuICAgICAgWyBbIFsgJzpuYW1lPXdhdCcgICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJzpuYW1lPXdhdCcgICAgICAgIF0sIH0sIF1cbiAgICAgIFsgWyBbICc6ZC5uYW1lPXdhdCcgICAgICBdLCAnYScgXSwgeyBhOiBbICc6ZC5uYW1lPXdhdCcgICAgICBdLCB9LCBdXG4gICAgICBbIFsgWyAnLS0nLCAnOm5hbWU9d2F0JyAgXSwgJ2EnIF0sIHsgYTogWyAnLS0nLCAnOm5hbWU9d2F0JyAgXSwgfSwgXVxuICAgICAgWyBbIFsgJzEyMycsICc6bmFtZT13YXQnIF0sICdhJyBdLCB7IGE6IFsgJzEyMycsICc6bmFtZT13YXQnIF0sIH0sIF1cbiAgICAgIFsgWyBbICd7XCJuYW1lXCI6XCJ2YWx1ZVwifScgXSwgJ2EnIF0sIHsgYTogWyAne1wibmFtZVwiOlwidmFsdWVcIn0nIF0sIH0sIF1cbiAgICAgIFsgWyBbICd7XCJuYW1lXCI6dmFsdWV9JyAgIF0sICdhJyBdLCB7IGE6IFsgJ3tcIm5hbWVcIjp2YWx1ZX0nICAgXSwgfSwgXVxuICAgICAgWyBbIFsgJ3tcIm5hbWVcIjpcInZhbHVlXCInICBdLCAnYScgXSwgeyBhOiBbICd7XCJuYW1lXCI6XCJ2YWx1ZVwiJyAgXSwgfSwgXVxuICAgICAgWyBbIFsgJyV7XCJuYW1lXCI6dmFsdWV9JyAgXSwgJ2EnIF0sIHsgYTogWyAnJXtcIm5hbWVcIjp2YWx1ZX0nICBdLCB9LCBdXG4gICAgICBbIFsgWyAnJSUnICAgICAgICAgICAgICAgXSwgJ2EnIF0sIHsgYTogWyAnJSUnICAgICAgICAgICAgICAgXSwgfSwgXVxuICAgICAgWyBbIFsgJ1sgXScgICAgICAgICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJ1sgXScgICAgICAgICAgICAgIF0sIH0sIF1cbiAgICAgIFsgWyBbICclWyBdJyAgICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICclWyBdJyAgICAgICAgICAgICBdLCB9LCBdXG4gICAgICBbIFsgWyAnWzMsXCJ3b3JkXCJdJyAgICAgICBdLCAnYScgXSwgeyBhOiBbICdbMyxcIndvcmRcIl0nICAgICAgIF0sIH0sIF1cbiAgICAgIFsgWyBbICczJywgJ1wid29yZFwiJyAgICAgIF0sICdhJyBdLCB7IGE6IFsgJzMnLCAnXCJ3b3JkXCInICAgICAgXSwgfSwgXVxuICAgICAgWyBbIFsgJyszJyAgICAgICAgICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJyszJyAgICAgICAgICAgICAgIF0sIH0sIF1cbiAgICAgIFsgWyBbICctMycgICAgICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICctMycgICAgICAgICAgICAgICBdLCB9LCBdXG4gICAgICBbIFsgWyAnLTAuNCcgICAgICAgICAgICAgXSwgJ2EnIF0sIHsgYTogWyAnLTAuNCcgICAgICAgICAgICAgXSwgfSwgXVxuICAgICAgWyBbIFsgJy0uNCcgICAgICAgICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJy0uNCcgICAgICAgICAgICAgIF0sIH0sIF1cbiAgICAgIFsgWyBbICcrMC40JyAgICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICcrMC40JyAgICAgICAgICAgICBdLCB9LCBdXG4gICAgICBbIFsgWyAnKy40JyAgICAgICAgICAgICAgXSwgJ2EnIF0sIHsgYTogWyAnKy40JyAgICAgICAgICAgICAgXSwgfSwgXVxuICAgICAgWyBbIFsgJy45JyAgICAgICAgICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJy45JyAgICAgICAgICAgICAgIF0sIH0sIF1cbiAgICAgIFsgWyBbICd7fScsICctLScsICd7fScgICBdLCAnYScgXSwgeyBhOiBbICd7fScsICctLScsICd7fScsICBdLCB9LCBdXG4gICAgICBbIFsgWyAnOmRvcmsnLCAnLS0nLCAnOmRvcmsnICAgXSwgJ2EnIF0sIHsgYTogWyAnOmRvcmsnLCAnLS0nLCAnOmRvcmsnLCAgXSwgfSwgXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIFsgWyBhcmd2LCBpbmNsdWRlcywgXSwgbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICB1bmxlc3MgbWF0Y2hlcj9cbiAgICAgICAgZWNobygpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICAjIGRlYnVnICfOqWpzb25pY2tfX18xJywgcGFyc2VfYXJndiBhcmd2XG4gICAgICBlY2hvIFsgWyBhcmd2LCBpbmNsdWRlcywgXSwgKCBhYmJyZXZpYXRlX2FyZ3ZuZm8gKCBwYXJzZV9hcmd2IGFyZ3YgKSwgaW5jbHVkZXMgKSwgXVxuICAgICAgQGVxICggzqlqc3RfX18yID0gLT4gYWJicmV2aWF0ZV9hcmd2bmZvICggcGFyc2VfYXJndiBhcmd2ICksIGluY2x1ZGVzICksIG1hdGNoZXJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbW1hbmRfbGluZXM6XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGJlYXV0aWZ5OiAtPlxuICAgICAgQGVxICggzqlqc3RfX18zID0gLT4gc2ggXCJcIlwiZWNobyAne30nIHwgLi9iZWF1dGlmeVwiXCJcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICd7fSdcbiAgICAgIEBlcSAoIM6panN0X19fNCA9IC0+IHNoIFwiXCJcImVjaG8gJ1tdJyB8IC4vYmVhdXRpZnlcIlwiXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnW10nXG4gICAgICBAZXEgKCDOqWpzdF9fXzUgPSAtPiBzaCBcIlwiXCJlY2hvICdhYmMnIHwgLi9iZWF1dGlmeVwiXCJcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2FiYydcbiAgICAgIEBlcSAoIM6panN0X19fNiA9IC0+IHNoIFwiXCJcImVjaG8gJ3tcImF0dHIxXCI6XCJ2YWx1ZTFcIn0nIHwgLi9iZWF1dGlmeVwiXCJcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgXCJ7IGF0dHIxOiAndmFsdWUxJyB9XCJcbiAgICAgIEBlcSAoIM6panN0X19fNyA9IC0+IHNoIFwiXCJcImVjaG8gJ3tcImF0dHIxXCI6XCJ2YWx1ZTFcIixcImF0dHIyXCI6XCJ2YWx1ZTJcIixcImF0dHIzXCI6XCJ2YWx1ZTNcIn0nIHwgLi9iZWF1dGlmeVwiXCJcIiApLCBcInsgYXR0cjE6ICd2YWx1ZTEnLCBhdHRyMjogJ3ZhbHVlMicsIGF0dHIzOiAndmFsdWUzJyB9XCJcbiAgICAgIEBlcSAoIM6panN0X19fOCA9IC0+IHNoIFwiXCJcImVjaG8gJ1tcInF1aXRlXCIsXCJhXCIsXCJmZXdcIixcIndvcmRzXCIsXCJpblwiLFwidGhpc1wiXScgfCAuL2JlYXV0aWZ5XCJcIlwiICAgICAgICAgICAgICApLCBcIlsgJ3F1aXRlJywgJ2EnLCAnZmV3JywgJ3dvcmRzJywgJ2luJywgJ3RoaXMnIF1cIlxuICAgICAgQGVxICggzqlqc3RfX185ID0gLT4gc2ggXCJcIlwiLi9iZWF1dGlmeSAne30nXCJcIlwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICd7fSdcbiAgICAgIEBlcSAoIM6panN0X18xMCA9IC0+IHNoIFwiXCJcIi4vYmVhdXRpZnkgJ1tdJ1wiXCJcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnW10nXG4gICAgICBAZXEgKCDOqWpzdF9fMTEgPSAtPiBzaCBcIlwiXCJlY2hvICdhYmMnIHwgLi9iZWF1dGlmeSAne30nXCJcIlwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ3t9J1xuICAgICAgQGVxICggzqlqc3RfXzEyID0gLT4gc2ggXCJcIlwiZWNobyAnYWJjJyB8IC4vYmVhdXRpZnkgJ1tdJ1wiXCJcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdbXSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY2xpX2FyZ3VtZW50c19hc19saXN0OiAtPlxuICAgICAgQGVxICggzqlqc3RfXzEzID0gLT4gc2ggXCJcIlwiLi9jbGktYXJndW1lbnRzLWFzLWxpc3RcIlwiXCIgICAgICAgICAgICAgICAgICAgICAgICAgICksICdbXSdcbiAgICAgIEBlcSAoIM6panN0X18xNCA9IC0+IHNoIFwiXCJcIi4vY2xpLWFyZ3VtZW50cy1hcy1saXN0IGEgYiBjXCJcIlwiICAgICAgICAgICAgICAgICAgICApLCAnW1wiYVwiLFwiYlwiLFwiY1wiXSdcbiAgICAgIEBlcSAoIM6panN0X18xNSA9IC0+IHNoIFwiXCJcIi4vY2xpLWFyZ3VtZW50cy1hcy1saXN0IGEgYiBjIHwgLi9iZWF1dGlmeVwiXCJcIiAgICAgICApLCBcIlsgJ2EnLCAnYicsICdjJyBdXCJcbiAgICAgIEBlcSAoIM6panN0X18xNiA9IC0+IHNoIFwiXCJcIi4vY2xpLWFyZ3VtZW50cy1hcy1saXN0IGEgYiAnYydcIlwiXCIgICAgICAgICAgICAgICAgICApLCAnW1wiYVwiLFwiYlwiLFwiY1wiXSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYW5hbHl6ZV9jbGlfYXJndW1lbnRzX3BoYXNlXzE6IC0+XG4gICAgICBAZXEgKCDOqWpzdF9fMTcgPSAtPiBzaCBcIlwiXCIuL2FuYWx5emUtY2xpLWFyZ3VtZW50cy1waGFzZS0xIGZpcnN0IHRyeSFcIlwiXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICd7XCJhXCI6W1wiZmlyc3RcIixcInRyeSFcIl0sXCJjXCI6W10sXCJkXCI6W3tcInRcIjpcImJhclwiLFwidlwiOlwiZmlyc3RcIixcInhcIjowfSx7XCJ0XCI6XCJiYXJcIixcInZcIjpcInRyeSFcIixcInhcIjoxfV0sXCJlXCI6W10sXCJpXCI6XCJzb2NrZXRcIixcIm9cIjpcInNvY2tldFwifSdcbiAgICAgIEBlcSAoIM6panN0X18xOCA9IC0+IHNoIFwiXCJcIi4vYW5hbHl6ZS1jbGktYXJndW1lbnRzLXBoYXNlLTEgK2JsYWggLWJsdWIgK2Qud2F0XCJcIlwiICAgICAgICAgICAgICAgICAgICAgKSwgJ3tcImFcIjpbXCIrYmxhaFwiLFwiLWJsdWJcIixcIitkLndhdFwiXSxcImNcIjpbe1widFwiOlwiYm9sXCIsXCJuXCI6XCJibGFoXCIsXCJ2XCI6dHJ1ZSxcInhcIjowfSx7XCJ0XCI6XCJib2xcIixcIm5cIjpcImJsdWJcIixcInZcIjpmYWxzZSxcInhcIjoxfV0sXCJkXCI6W3tcInRcIjpcImJvbFwiLFwiblwiOlwid2F0XCIsXCJ2XCI6dHJ1ZSxcInhcIjoyfV0sXCJlXCI6W10sXCJpXCI6XCJzb2NrZXRcIixcIm9cIjpcInNvY2tldFwifSdcbiAgICAgIEBlcSAoIM6panN0X18xOCA9IC0+IHNoIFwiXCJcIi4vYW5hbHl6ZS1jbGktYXJndW1lbnRzLXBoYXNlLTEgK3ZlcmJvc2UgLXZlcmJvc2UgLS0gd2F0IHwgLi9iZWF1dGlmeVwiXCJcIiAgKSwgXCJ7XFxuICBhOiBbICcrdmVyYm9zZScsICctdmVyYm9zZScsICctLScsICd3YXQnIF0sXFxuICBjOiBbXFxuICAgIHsgdDogJ2JvbCcsIG46ICd2ZXJib3NlJywgdjogdHJ1ZSwgeDogMCB9LFxcbiAgICB7IHQ6ICdib2wnLCBuOiAndmVyYm9zZScsIHY6IGZhbHNlLCB4OiAxIH1cXG4gIF0sXFxuICBkOiBbIHsgdDogJ3BmbicsIHY6ICd3YXQnLCB4OiAzIH0gXSxcXG4gIGU6IFtdLFxcbiAgaTogJ3NvY2tldCcsXFxuICBvOiAncGlwZSdcXG59XCJcbiAgICAgIGVjaG8gc2ggXCJcIlwiLi9hbmFseXplLWNsaS1hcmd1bWVudHMtcGhhc2UtMSArdmVyYm9zZSAtdmVyYm9zZSAtLSB3YXQgfCAuL2JlYXV0aWZ5XCJcIlwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIDtudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgeyBzaG93X3JlcXVpcmVzLCB9ID0gcmVxdWlyZSAnLi4vLi4vc25pcHBldHMvbGliL2RlbW8tc2hvdy1yZXF1aXJlcy5qcydcbiAgc2hvd19yZXF1aXJlcyAnLi4vLi4vLi4vYXBwcy9qc29uaWNrJ1xuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEBqc29uaWNrXG4gICMgeyBwYXJzZV9hcmd2LCAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvanNvbmljay9saWIvYW5hbHl6ZS1jbGktYXJndW1lbnRzLXBoYXNlLTEnXG4gICMgZGVidWcgJ86panNvbmlja19fXzInLCBwYXJzZV9hcmd2IFsgJ2RlZicsIF1cbiAgO251bGxcblxuIl19
