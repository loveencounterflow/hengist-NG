(async function() {
  'use strict';
  var GTNG, GUY, PATH, SFMODULES, Test, abbreviate_cde, alert, blue, debug, echo, f, gold, help, info, inspect, isa_npod, lime, log, path_to_cdetnvx, plain, praise, red, reverse, rpr, run_shell_command, sh, type_of, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('hollerith'));

  ({rpr, inspect, echo, lime, gold, red, blue, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  ({type_of} = (require('../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics')).require_type_of());

  PATH = require('node:path');

  ({run_shell_command} = require('../../../apps/bricabrac-sfmodules/lib/cli-run-shell-command'));

  path_to_cdetnvx = PATH.resolve(PATH.join(__dirname, '../../../apps/cde-tnvx'));

  sh = function(command_line) {
    return (run_shell_command(path_to_cdetnvx, command_line)).trim();
  };

  //===========================================================================================================
  isa_npod = function(x) {
    return (x != null) && ((Object.getPrototypeOf(x)) === null);
  };

  //===========================================================================================================
  abbreviate_cde = function(cde, includes = '') {
    var R, e;
    includes = new Set((includes.length === 0 ? 'acdeiot' : includes));
    R = {};
    if (includes.has('a')) {
      R.a = cde.a;
    }
    if (includes.has('c')) {
      R.c = (function() {
        var i, len, ref, results;
        ref = cde.c;
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
        ref = cde.d;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          e = ref[i];
          results.push((isa_npod(e)) ? {...e} : e);
        }
        return results;
      })();
    }
    if (includes.has('e')) {
      R.e = cde.e;
    }
    if (includes.has('i')) {
      R.i = cde.i;
    }
    if (includes.has('o')) {
      R.o = cde.o;
    }
    if (includes.has('t')) {
      R.t = cde.t;
    }
    if (includes.has('s')) {
      R.s = cde.s;
    }
    return JSON.parse(JSON.stringify(R));
  };

  //===========================================================================================================
  this.cdetnvx = {
    //---------------------------------------------------------------------------------------------------------
    phase_1: {
      cde_tnvx: function() {
        var argv, i, includes, len, matcher, parse_argv, probes_and_matchers, Ωcde___2;
        ({parse_argv} = require('../../../apps/cde-tnvx/lib/parse-argv-1'));
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
                  v: ':name',
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
          [
            [['1',
            ''],
            'cde'],
            {
              c: [],
              d: [
                {
                  t: 'num',
                  v: '1',
                  x: 0
                },
                {
                  t: 'bar',
                  v: '',
                  x: 1
                }
              ],
              e: []
            }
          ],
          [
            //...................................................................................................
            [['-345',
            '--x--',
            '-678'],
            'cds'],
            {
              c: [],
              d: [
                {
                  t: 'num',
                  v: '-345',
                  x: 0
                },
                {
                  t: 'num',
                  v: '-678',
                  x: 2
                }
              ],
              s: 1
            }
          ],
          [
            [['-345',
            '--',
            '--x--',
            '-678'],
            'cds'],
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
                  v: '--x--',
                  x: 2
                },
                {
                  t: 'pfn',
                  v: '-678',
                  x: 3
                }
              ],
              s: null
            }
          ],
          [
            [['-345',
            '--x--',
            '--',
            '-678'],
            'cds'],
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
                  x: 3
                }
              ],
              s: 1
            }
          ],
          [
            [['-345',
            '--x--',
            '-t',
            '--x--'],
            'cdes'],
            {
              c: [
                {
                  t: 'bol',
                  n: 't',
                  v: false,
                  x: 2
                }
              ],
              d: [
                {
                  t: 'num',
                  v: '-345',
                  x: 0
                }
              ],
              e: [
                {
                  t: 'scs',
                  v: '--x--',
                  x: 3
                }
              ],
              s: 1
            }
          ],
          [[]],
          [
            //...................................................................................................
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
//.....................................................................................................
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [[argv, includes], matcher] = probes_and_matchers[i];
          if (matcher == null) {
            echo();
            continue;
          }
          // debug 'Ωcdetnvx___1', parse_argv argv
          echo([[argv, includes], abbreviate_cde(parse_argv(argv), includes)]);
          this.eq((Ωcde___2 = function() {
            return abbreviate_cde(parse_argv(argv), includes);
          }), matcher);
        }
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      legal_and_illegal_names: function() {
        var internals, name_re, probes_and_matchers, Ωcde__10, Ωcde__11, Ωcde___3, Ωcde___4, Ωcde___5, Ωcde___6, Ωcde___7, Ωcde___8, Ωcde___9;
        ({internals} = require('../../../apps/cde-tnvx/lib/parse-argv-1'));
        probes_and_matchers = [[]];
        //.....................................................................................................
        name_re = RegExp(`^${internals.patterns.nme_re.source}$`, "v");
        //.....................................................................................................
        this.eq((Ωcde___3 = function() {
          return type_of(internals.patterns.nme_re);
        }), 'regex');
        this.eq((Ωcde___4 = function() {
          return name_re.test('abc');
        }), true);
        this.eq((Ωcde___5 = function() {
          return name_re.test('abc34');
        }), true);
        this.eq((Ωcde___6 = function() {
          return name_re.test('aB_c34');
        }), true);
        this.eq((Ωcde___7 = function() {
          return name_re.test('äöü_c34');
        }), true);
        //.....................................................................................................
        this.eq((Ωcde___8 = function() {
          return name_re.test('-äöü_c34');
        }), false);
        this.eq((Ωcde___9 = function() {
          return name_re.test('+äöü_c34');
        }), false);
        this.eq((Ωcde__10 = function() {
          return name_re.test('äöü+c34');
        }), false);
        this.eq((Ωcde__11 = function() {
          return name_re.test('äöü_c34-');
        }), false);
        //.....................................................................................................
        return null;
      }
    },
    //---------------------------------------------------------------------------------------------------------
    phase_2: function() {
      var parse_argv, probes_and_matchers;
      ({parse_argv} = require('../../../apps/cde-tnvx/lib/parse-argv-2'));
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
        []
      ];
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    command_lines: {
      //-------------------------------------------------------------------------------------------------------
      beautify: function() {
        var Ωcde__12, Ωcde__13, Ωcde__14, Ωcde__15, Ωcde__16, Ωcde__17, Ωcde__18, Ωcde__19, Ωcde__20, Ωcde__21;
        this.eq((Ωcde__12 = function() {
          return sh(`echo '{}' | ./beautify`);
        }), '{}');
        this.eq((Ωcde__13 = function() {
          return sh(`echo '[]' | ./beautify`);
        }), '[]');
        this.eq((Ωcde__14 = function() {
          return sh(`echo 'abc' | ./beautify`);
        }), 'abc');
        this.eq((Ωcde__15 = function() {
          return sh(`echo '{"attr1":"value1"}' | ./beautify`);
        }), "{ attr1: 'value1' }");
        this.eq((Ωcde__16 = function() {
          return sh(`echo '{"attr1":"value1","attr2":"value2","attr3":"value3"}' | ./beautify`);
        }), "{ attr1: 'value1', attr2: 'value2', attr3: 'value3' }");
        this.eq((Ωcde__17 = function() {
          return sh(`echo '["quite","a","few","words","in","this"]' | ./beautify`);
        }), "[ 'quite', 'a', 'few', 'words', 'in', 'this' ]");
        this.eq((Ωcde__18 = function() {
          return sh(`./beautify '{}'`);
        }), '{}');
        this.eq((Ωcde__19 = function() {
          return sh(`./beautify '[]'`);
        }), '[]');
        this.eq((Ωcde__20 = function() {
          return sh(`echo 'abc' | ./beautify '{}'`);
        }), '{}');
        this.eq((Ωcde__21 = function() {
          return sh(`echo 'abc' | ./beautify '[]'`);
        }), '[]');
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      cli_arguments_as_list: function() {
        var Ωcde__22, Ωcde__23, Ωcde__24, Ωcde__25;
        this.eq((Ωcde__22 = function() {
          return sh(`./cli-arguments-as-list`);
        }), '[]');
        this.eq((Ωcde__23 = function() {
          return sh(`./cli-arguments-as-list a b c`);
        }), '["a","b","c"]');
        this.eq((Ωcde__24 = function() {
          return sh(`./cli-arguments-as-list a b c | ./beautify`);
        }), "[ 'a', 'b', 'c' ]");
        this.eq((Ωcde__25 = function() {
          return sh(`./cli-arguments-as-list a b 'c'`);
        }), '["a","b","c"]');
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      analyze_cli_arguments_phase_1: function() {
        var Ωcde__26, Ωcde__27, Ωcde__28;
        echo();
        echo(sh(`./parse-argv-1 first try!`));
        this.eq((Ωcde__26 = function() {
          return sh(`./parse-argv-1 first try!`);
        }), '{"a":["first","try!"],"c":[],"d":[{"t":"bar","v":"first","x":0},{"t":"bar","v":"try!","x":1}],"e":[],"i":"socket","o":"socket","s":null}');
        this.eq((Ωcde__27 = function() {
          return sh(`./parse-argv-1 +blah -blub +d.wat`);
        }), '{"a":["+blah","-blub","+d.wat"],"c":[{"t":"bol","n":"blah","v":true,"x":0},{"t":"bol","n":"blub","v":false,"x":1}],"d":[{"t":"bol","n":"wat","v":true,"x":2}],"e":[],"i":"socket","o":"socket","s":null}');
        this.eq((Ωcde__28 = function() {
          return sh(`./parse-argv-1 +verbose -verbose -- wat | ./beautify`);
        }), "{\n  a: [ '+verbose', '-verbose', '--', 'wat' ],\n  c: [\n    { t: 'bol', n: 'verbose', v: true, x: 0 },\n    { t: 'bol', n: 'verbose', v: false, x: 1 }\n  ],\n  d: [ { t: 'pfn', v: 'wat', x: 3 } ],\n  e: [],\n  i: 'socket',\n  o: 'pipe',\n  s: null\n}");
        echo(sh(`./parse-argv-1 --x-- +verbose -verbose -- wat | ./beautify`));
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
      show_requires('../../../apps/cde-tnvx');
      //---------------------------------------------------------------------------------------------------------
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: true,
        report_checks: true
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      (new Test(guytest_cfg)).test(this.cdetnvx);
      // { parse_argv,  } = require '../../../apps/cdetnvx/lib/parse-argv-1'
      // debug 'Ωcdetnvx__29', parse_argv [ 'def', ]
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLGNBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxRQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxlQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxpQkFBQSxFQUFBLEVBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTs7RUFFQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFdBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsSUFKRixFQUtFLEdBTEYsRUFNRSxJQU5GLEVBT0UsT0FQRixFQVFFLEdBUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FSaEMsRUFaQTs7O0VBc0JBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLG1DQUFSOztFQUM1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QUFRLDBDQUFSLENBQXJCO01BQ0EsYUFBQSxDQUFjLHdCQUFkLEVBREY7O01BR0UsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsSUFBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixJQUFDLENBQUEsT0FBL0IsRUFORjs7O2FBU0c7SUFWcUMsQ0FBQSxJQUF4Qzs7QUE3TkEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2hvbGxlcml0aCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICBsaW1lXG4gIGdvbGRcbiAgcmVkXG4gIGJsdWVcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbnsgdHlwZV9vZiwgICAgICAgICAgICAgIH0gPSAoIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvdW5zdGFibGUtcnByLXR5cGVfb2YtYnJpY3MnICkucmVxdWlyZV90eXBlX29mKClcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG57IHJ1bl9zaGVsbF9jb21tYW5kICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9jbGktcnVuLXNoZWxsLWNvbW1hbmQnXG5wYXRoX3RvX2NkZXRudnggICAgICAgICAgID0gUEFUSC5yZXNvbHZlIFBBVEguam9pbiBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hcHBzL2NkZS10bnZ4J1xuc2ggICAgICAgICAgICAgICAgICAgICAgICA9ICggY29tbWFuZF9saW5lICkgLT4gKCBydW5fc2hlbGxfY29tbWFuZCBwYXRoX3RvX2NkZXRudngsIGNvbW1hbmRfbGluZSApLnRyaW0oKVxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaXNhX25wb2QgPSAoIHggKSAtPiB4PyBhbmQgKCAoIE9iamVjdC5nZXRQcm90b3R5cGVPZiB4ICkgaXMgbnVsbCApXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuYWJicmV2aWF0ZV9jZGUgPSAoIGNkZSwgaW5jbHVkZXMgPSAnJyApIC0+XG4gIGluY2x1ZGVzID0gbmV3IFNldCAoIGlmIGluY2x1ZGVzLmxlbmd0aCBpcyAwIHRoZW4gJ2FjZGVpb3QnIGVsc2UgaW5jbHVkZXMgKVxuICBSID0ge31cbiAgUi5hID0gY2RlLmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgaW5jbHVkZXMuaGFzICdhJ1xuICBSLmMgPSAoICggaWYgKCBpc2FfbnBvZCBlICkgdGhlbiB7IGUuLi4sIH0gZWxzZSBlICkgZm9yIGUgaW4gY2RlLmMgKSAgICBpZiBpbmNsdWRlcy5oYXMgJ2MnXG4gIFIuZCA9ICggKCBpZiAoIGlzYV9ucG9kIGUgKSB0aGVuIHsgZS4uLiwgfSBlbHNlIGUgKSBmb3IgZSBpbiBjZGUuZCApICAgIGlmIGluY2x1ZGVzLmhhcyAnZCdcbiAgUi5lID0gY2RlLmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgaW5jbHVkZXMuaGFzICdlJ1xuICBSLmkgPSBjZGUuaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBpbmNsdWRlcy5oYXMgJ2knXG4gIFIubyA9IGNkZS5vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIGluY2x1ZGVzLmhhcyAnbydcbiAgUi50ID0gY2RlLnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgaW5jbHVkZXMuaGFzICd0J1xuICBSLnMgPSBjZGUucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBpbmNsdWRlcy5oYXMgJ3MnXG4gIHJldHVybiBKU09OLnBhcnNlIEpTT04uc3RyaW5naWZ5IFJcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBjZGV0bnZ4ID1cblxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcGhhc2VfMTpcblxuICAgIGNkZV90bnZ4OiAtPlxuICAgICAgeyBwYXJzZV9hcmd2LCAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvY2RlLXRudngvbGliL3BhcnNlLWFyZ3YtMSdcbiAgICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICAgIFsgWyBbICd4JyAgICAgICAgICAgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnYmFyJywgdjogJ3gnLCB4OiAwLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICd7fScgICAgICAgICAgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnb2JqJywgdjogJ3t9JywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICcrbmFtZScgICAgICAgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgeyB0OiAnYm9sJywgbjogJ25hbWUnLCB2OiB0cnVlLCB4OiAwLCB9ICAgIF0sIGQ6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICctbmFtZScgICAgICAgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgeyB0OiAnYm9sJywgbjogJ25hbWUnLCB2OiBmYWxzZSwgeDogMCwgfSAgIF0sIGQ6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICcrZC5uYW1lJyAgICAgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnYm9sJywgbjogJ25hbWUnLCB2OiB0cnVlLCB4OiAwLCB9ICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICctZC5uYW1lJyAgICAgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnYm9sJywgbjogJ25hbWUnLCB2OiBmYWxzZSwgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICclK25hbWUnICAgICAgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnZXNjJywgdjogJytuYW1lJywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICclLW5hbWUnICAgICAgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnZXNjJywgdjogJy1uYW1lJywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICc6bmFtZScgICAgICAgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyB7IHQ6ICdmYWMnLCB2OiAnOm5hbWUnLCB4OiAwLCB9IF0gfSBdXG4gICAgICAgIFsgWyBbICclOm5hbWUnICAgICAgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnZXNjJywgdjogJzpuYW1lJywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICc6bmFtZT0nICAgICAgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgeyB0OiAnZmFjJywgbjogJ25hbWUnLCB2OiAnJywgeDogMCwgfSAgICAgIF0sIGQ6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICc6bmFtZT13YXQnICAgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgeyB0OiAnZmFjJywgbjogJ25hbWUnLCB2OiAnd2F0JywgeDogMCwgfSAgIF0sIGQ6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICc6ZC5uYW1lPXdhdCcgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnZmFjJywgbjogJ25hbWUnLCB2OiAnd2F0JywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICctLScsICc6bmFtZT13YXQnICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAncGZuJywgdjogJzpuYW1lPXdhdCcsIHg6IDEsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICcxMjMnLCAnOm5hbWU9d2F0JyAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgeyB0OiAnZmFjJywgbjogJ25hbWUnLCB2OiAnd2F0JywgeDogMSwgfSAgIF0sIGQ6IFsgeyB0OiAnbnVtJywgdjogJzEyMycsIHg6IDAsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICd7XCJuYW1lXCI6XCJ2YWx1ZVwifScgICAgICBdLCAnY2RlJyAgXSwgeyBjOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBkOiBbIHsgdDogJ29iaicsIHY6ICd7XCJuYW1lXCI6XCJ2YWx1ZVwifScsIHg6IDAsIH0gICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICAgWyBbIFsgJ3tcIm5hbWVcIjp2YWx1ZX0nICAgICAgICBdLCAnY2RlJyAgXSwgeyBjOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBkOiBbIHsgdDogJ29iaicsIHY6ICd7XCJuYW1lXCI6dmFsdWV9JywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICd7XCJuYW1lXCI6XCJ2YWx1ZVwiJyAgICAgICBdLCAnY2RlJyAgXSwgeyBjOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBkOiBbIHsgdDogJ29iaicsIHY6ICd7XCJuYW1lXCI6XCJ2YWx1ZVwiJywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICAgWyBbIFsgJyV7XCJuYW1lXCI6dmFsdWV9JyAgICAgICBdLCAnY2RlJyAgXSwgeyBjOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBkOiBbIHsgdDogJ2VzYycsIHY6ICd7XCJuYW1lXCI6dmFsdWV9JywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICclJScgICAgICAgICAgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnZXNjJywgdjogJyUnLCB4OiAwLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICdbXScgICAgICAgICAgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnbHN0JywgdjogJ1tdJywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICclW10nICAgICAgICAgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnZXNjJywgdjogJ1tdJywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICAgIFsgWyBbICdbMyxcIndvcmRcIl0nICAgICAgICAgICAgXSwgJ2NkZScgIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdsc3QnLCB2OiAnWzMsXCJ3b3JkXCJdJywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgICBbIFsgWyAnMycsICdcIndvcmRcIicgICAgICAgICAgIF0sICdjZGUnICBdLCB7IGM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyB0OiAnbnVtJywgdjogJzMnLCB4OiAwLCB9LCB7IHQ6ICdiYXInLCB2OiAnXCJ3b3JkXCInLCB4OiAxLCB9ICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICAgWyBbIFsgJyszJyAgICAgICAgICAgICAgICAgICAgXSwgJ2NkZScgIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnKzMnLCB4OiAwLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICAgWyBbIFsgJy0zJyAgICAgICAgICAgICAgICAgICAgXSwgJ2NkZScgIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnLTMnLCB4OiAwLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICAgWyBbIFsgJy0wLjQnICAgICAgICAgICAgICAgICAgXSwgJ2NkZScgIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnLTAuNCcsIHg6IDAsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICAgWyBbIFsgJy0uNCcgICAgICAgICAgICAgICAgICAgXSwgJ2NkZScgIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnLS40JywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICAgWyBbIFsgJyswLjQnICAgICAgICAgICAgICAgICAgXSwgJ2NkZScgIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnKzAuNCcsIHg6IDAsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICAgWyBbIFsgJysuNCcgICAgICAgICAgICAgICAgICAgXSwgJ2NkZScgIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnKy40JywgeDogMCwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICAgWyBbIFsgJy45JyAgICAgICAgICAgICAgICAgICAgXSwgJ2NkZScgIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnLjknLCB4OiAwLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICAgWyBbIFsgJ3t9JywgJy0tJywgJ3t9JyAgICAgICAgXSwgJ2NkZScgIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdvYmonLCB2OiAne30nLCB4OiAwLCB9LCB7IHQ6ICdwZm4nLCB2OiAne30nLCB4OiAyLCB9ICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICAgWyBbIFsgJzM0NScsICctLScsICc2NzgnICAgICAgXSwgJ2NkZScgIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnMzQ1JywgeDogMCwgfSwgeyB0OiAncGZuJywgdjogJzY3OCcsIHg6IDIsIH0gICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICAgWyBbIFsgJy0zNDUnLCAnLS0nLCAnLTY3OCcgICAgXSwgJ2NkZScgIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnLTM0NScsIHg6IDAsIH0sIHsgdDogJ3BmbicsIHY6ICctNjc4JywgeDogMiwgfSBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICAgWyBbIFsgJyszNDUnLCAnLS0nLCAnKzY3OCcgICAgXSwgJ2NkZScgIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnKzM0NScsIHg6IDAsIH0sIHsgdDogJ3BmbicsIHY6ICcrNjc4JywgeDogMiwgfSBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICAgWyBbIFsgJzEnLCAnJywgICAgICAgICAgICAgICAgXSwgJ2NkZScgIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnMScsIHg6IDAsIH0sIHsgdDogJ2JhcicsIHY6ICcnLCB4OiAxLCB9ICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBbIFsgWyAnLTM0NScsICctLXgtLScsICctNjc4JyAgICAgICBdLCAnY2RzJyAgXSwgeyBjOiBbIF0sIGQ6IFsgeyB0OiAnbnVtJywgdjogJy0zNDUnLCB4OiAwLCB9LCB7IHQ6ICdudW0nLCB2OiAnLTY3OCcsIHg6IDIsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgczogMSwgfSBdXG4gICAgICAgIFsgWyBbICctMzQ1JywgJy0tJywgJy0teC0tJywgJy02NzgnIF0sICdjZHMnICBdLCB7IGM6IFsgXSwgZDogWyB7IHQ6ICdudW0nLCB2OiAnLTM0NScsIHg6IDAsIH0sIHsgdDogJ3BmbicsIHY6ICctLXgtLScsIHg6IDIsIH0sIHsgdDogJ3BmbicsIHY6ICctNjc4JywgeDogMywgfSBdLCBzOiBudWxsLCB9IF1cbiAgICAgICAgWyBbIFsgJy0zNDUnLCAnLS14LS0nLCAnLS0nLCAnLTY3OCcgXSwgJ2NkcycgIF0sIHsgYzogWyBdLCBkOiBbIHsgdDogJ251bScsIHY6ICctMzQ1JywgeDogMCwgfSwgeyB0OiAncGZuJywgdjogJy02NzgnLCB4OiAzLCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIHM6IDEsIH0gXVxuICAgICAgICBbIFsgWyAnLTM0NScsICctLXgtLScsICctdCcsICctLXgtLScgXSwgJ2NkZXMnICBdLCB7IGM6IFsgeyB0OiAnYm9sJywgbjogJ3QnLCB2OiBmYWxzZSwgeDogMiB9IF0sIGQ6IFsgeyB0OiAnbnVtJywgdjogJy0zNDUnLCB4OiAwIH0gXSwgZTogWyB7IHQ6ICdzY3MnLCB2OiAnLS14LS0nLCB4OiAzIH0gXSwgczogMSB9IF1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBbW11dXG4gICAgICAgIFsgWyBbICd4JyAgICAgICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICd4JyAgICAgICAgICAgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICd7fScgICAgICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICd7fScgICAgICAgICAgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICcrbmFtZScgICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICcrbmFtZScgICAgICAgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICctbmFtZScgICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICctbmFtZScgICAgICAgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICcrZC5uYW1lJyAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICcrZC5uYW1lJyAgICAgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICctZC5uYW1lJyAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICctZC5uYW1lJyAgICAgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICclK25hbWUnICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICclK25hbWUnICAgICAgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICclLW5hbWUnICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICclLW5hbWUnICAgICAgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICc6bmFtZScgICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICc6bmFtZScgICAgICAgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICclOm5hbWUnICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICclOm5hbWUnICAgICAgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICc6bmFtZT0nICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICc6bmFtZT0nICAgICAgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICc6bmFtZT13YXQnICAgICAgICBdLCAnYScgXSwgeyBhOiBbICc6bmFtZT13YXQnICAgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICc6ZC5uYW1lPXdhdCcgICAgICBdLCAnYScgXSwgeyBhOiBbICc6ZC5uYW1lPXdhdCcgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICctLScsICc6bmFtZT13YXQnICBdLCAnYScgXSwgeyBhOiBbICctLScsICc6bmFtZT13YXQnICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICcxMjMnLCAnOm5hbWU9d2F0JyBdLCAnYScgXSwgeyBhOiBbICcxMjMnLCAnOm5hbWU9d2F0JyBdLCB9LCBdXG4gICAgICAgIFsgWyBbICd7XCJuYW1lXCI6XCJ2YWx1ZVwifScgXSwgJ2EnIF0sIHsgYTogWyAne1wibmFtZVwiOlwidmFsdWVcIn0nIF0sIH0sIF1cbiAgICAgICAgWyBbIFsgJ3tcIm5hbWVcIjp2YWx1ZX0nICAgXSwgJ2EnIF0sIHsgYTogWyAne1wibmFtZVwiOnZhbHVlfScgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICd7XCJuYW1lXCI6XCJ2YWx1ZVwiJyAgXSwgJ2EnIF0sIHsgYTogWyAne1wibmFtZVwiOlwidmFsdWVcIicgIF0sIH0sIF1cbiAgICAgICAgWyBbIFsgJyV7XCJuYW1lXCI6dmFsdWV9JyAgXSwgJ2EnIF0sIHsgYTogWyAnJXtcIm5hbWVcIjp2YWx1ZX0nICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICclJScgICAgICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICclJScgICAgICAgICAgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICdbIF0nICAgICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICdbIF0nICAgICAgICAgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICclWyBdJyAgICAgICAgICAgICBdLCAnYScgXSwgeyBhOiBbICclWyBdJyAgICAgICAgICAgICBdLCB9LCBdXG4gICAgICAgIFsgWyBbICdbMyxcIndvcmRcIl0nICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJ1szLFwid29yZFwiXScgICAgICAgXSwgfSwgXVxuICAgICAgICBbIFsgWyAnMycsICdcIndvcmRcIicgICAgICBdLCAnYScgXSwgeyBhOiBbICczJywgJ1wid29yZFwiJyAgICAgIF0sIH0sIF1cbiAgICAgICAgWyBbIFsgJyszJyAgICAgICAgICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJyszJyAgICAgICAgICAgICAgIF0sIH0sIF1cbiAgICAgICAgWyBbIFsgJy0zJyAgICAgICAgICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJy0zJyAgICAgICAgICAgICAgIF0sIH0sIF1cbiAgICAgICAgWyBbIFsgJy0wLjQnICAgICAgICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJy0wLjQnICAgICAgICAgICAgIF0sIH0sIF1cbiAgICAgICAgWyBbIFsgJy0uNCcgICAgICAgICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJy0uNCcgICAgICAgICAgICAgIF0sIH0sIF1cbiAgICAgICAgWyBbIFsgJyswLjQnICAgICAgICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJyswLjQnICAgICAgICAgICAgIF0sIH0sIF1cbiAgICAgICAgWyBbIFsgJysuNCcgICAgICAgICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJysuNCcgICAgICAgICAgICAgIF0sIH0sIF1cbiAgICAgICAgWyBbIFsgJy45JyAgICAgICAgICAgICAgIF0sICdhJyBdLCB7IGE6IFsgJy45JyAgICAgICAgICAgICAgIF0sIH0sIF1cbiAgICAgICAgWyBbIFsgJ3t9JywgJy0tJywgJ3t9JyAgIF0sICdhJyBdLCB7IGE6IFsgJ3t9JywgJy0tJywgJ3t9JywgIF0sIH0sIF1cbiAgICAgICAgWyBbIFsgJzpkb3JrJywgJy0tJywgJzpkb3JrJyAgIF0sICdhJyBdLCB7IGE6IFsgJzpkb3JrJywgJy0tJywgJzpkb3JrJywgIF0sIH0sIF1cbiAgICAgICAgXVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBmb3IgWyBbIGFyZ3YsIGluY2x1ZGVzLCBdLCBtYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgdW5sZXNzIG1hdGNoZXI/XG4gICAgICAgICAgZWNobygpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgIyBkZWJ1ZyAnzqljZGV0bnZ4X19fMScsIHBhcnNlX2FyZ3YgYXJndlxuICAgICAgICBlY2hvIFsgWyBhcmd2LCBpbmNsdWRlcywgXSwgKCBhYmJyZXZpYXRlX2NkZSAoIHBhcnNlX2FyZ3YgYXJndiApLCBpbmNsdWRlcyApLCBdXG4gICAgICAgIEBlcSAoIM6pY2RlX19fMiA9IC0+IGFiYnJldmlhdGVfY2RlICggcGFyc2VfYXJndiBhcmd2ICksIGluY2x1ZGVzICksIG1hdGNoZXJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbGVnYWxfYW5kX2lsbGVnYWxfbmFtZXM6IC0+XG4gICAgICB7IGludGVybmFscywgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2NkZS10bnZ4L2xpYi9wYXJzZS1hcmd2LTEnXG4gICAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgICBbXVxuICAgICAgICBdXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIG5hbWVfcmUgPSAvLy8gXiAje2ludGVybmFscy5wYXR0ZXJucy5ubWVfcmUuc291cmNlfSAkIC8vL3ZcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqljZGVfX18zID0gLT4gdHlwZV9vZiBpbnRlcm5hbHMucGF0dGVybnMubm1lX3JlICAgICAgICAgICAgICksICdyZWdleCdcbiAgICAgIEBlcSAoIM6pY2RlX19fNCA9IC0+IG5hbWVfcmUudGVzdCAnYWJjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWNkZV9fXzUgPSAtPiBuYW1lX3JlLnRlc3QgJ2FiYzM0JyAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqljZGVfX182ID0gLT4gbmFtZV9yZS50ZXN0ICdhQl9jMzQnICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pY2RlX19fNyA9IC0+IG5hbWVfcmUudGVzdCAnw6TDtsO8X2MzNCcgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pY2RlX19fOCA9IC0+IG5hbWVfcmUudGVzdCAnLcOkw7bDvF9jMzQnICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqljZGVfX185ID0gLT4gbmFtZV9yZS50ZXN0ICcrw6TDtsO8X2MzNCcgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWNkZV9fMTAgPSAtPiBuYW1lX3JlLnRlc3QgJ8Okw7bDvCtjMzQnICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pY2RlX18xMSA9IC0+IG5hbWVfcmUudGVzdCAnw6TDtsO8X2MzNC0nICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcGhhc2VfMjogLT5cbiAgICB7IHBhcnNlX2FyZ3YsICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9jZGUtdG52eC9saWIvcGFyc2UtYXJndi0yJ1xuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbIFsgWyAneCcgICAgICAgICAgICAgICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgZDogWyB7IHQ6ICdiYXInLCB2OiAneCcsIHg6IDAsIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFtdXG4gICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tbWFuZF9saW5lczpcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYmVhdXRpZnk6IC0+XG4gICAgICBAZXEgKCDOqWNkZV9fMTIgPSAtPiBzaCBcIlwiXCJlY2hvICd7fScgfCAuL2JlYXV0aWZ5XCJcIlwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ3t9J1xuICAgICAgQGVxICggzqljZGVfXzEzID0gLT4gc2ggXCJcIlwiZWNobyAnW10nIHwgLi9iZWF1dGlmeVwiXCJcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdbXSdcbiAgICAgIEBlcSAoIM6pY2RlX18xNCA9IC0+IHNoIFwiXCJcImVjaG8gJ2FiYycgfCAuL2JlYXV0aWZ5XCJcIlwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnYWJjJ1xuICAgICAgQGVxICggzqljZGVfXzE1ID0gLT4gc2ggXCJcIlwiZWNobyAne1wiYXR0cjFcIjpcInZhbHVlMVwifScgfCAuL2JlYXV0aWZ5XCJcIlwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBcInsgYXR0cjE6ICd2YWx1ZTEnIH1cIlxuICAgICAgQGVxICggzqljZGVfXzE2ID0gLT4gc2ggXCJcIlwiZWNobyAne1wiYXR0cjFcIjpcInZhbHVlMVwiLFwiYXR0cjJcIjpcInZhbHVlMlwiLFwiYXR0cjNcIjpcInZhbHVlM1wifScgfCAuL2JlYXV0aWZ5XCJcIlwiICksIFwieyBhdHRyMTogJ3ZhbHVlMScsIGF0dHIyOiAndmFsdWUyJywgYXR0cjM6ICd2YWx1ZTMnIH1cIlxuICAgICAgQGVxICggzqljZGVfXzE3ID0gLT4gc2ggXCJcIlwiZWNobyAnW1wicXVpdGVcIixcImFcIixcImZld1wiLFwid29yZHNcIixcImluXCIsXCJ0aGlzXCJdJyB8IC4vYmVhdXRpZnlcIlwiXCIgICAgICAgICAgICAgICksIFwiWyAncXVpdGUnLCAnYScsICdmZXcnLCAnd29yZHMnLCAnaW4nLCAndGhpcycgXVwiXG4gICAgICBAZXEgKCDOqWNkZV9fMTggPSAtPiBzaCBcIlwiXCIuL2JlYXV0aWZ5ICd7fSdcIlwiXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ3t9J1xuICAgICAgQGVxICggzqljZGVfXzE5ID0gLT4gc2ggXCJcIlwiLi9iZWF1dGlmeSAnW10nXCJcIlwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdbXSdcbiAgICAgIEBlcSAoIM6pY2RlX18yMCA9IC0+IHNoIFwiXCJcImVjaG8gJ2FiYycgfCAuL2JlYXV0aWZ5ICd7fSdcIlwiXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAne30nXG4gICAgICBAZXEgKCDOqWNkZV9fMjEgPSAtPiBzaCBcIlwiXCJlY2hvICdhYmMnIHwgLi9iZWF1dGlmeSAnW10nXCJcIlwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ1tdJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjbGlfYXJndW1lbnRzX2FzX2xpc3Q6IC0+XG4gICAgICBAZXEgKCDOqWNkZV9fMjIgPSAtPiBzaCBcIlwiXCIuL2NsaS1hcmd1bWVudHMtYXMtbGlzdFwiXCJcIiAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ1tdJ1xuICAgICAgQGVxICggzqljZGVfXzIzID0gLT4gc2ggXCJcIlwiLi9jbGktYXJndW1lbnRzLWFzLWxpc3QgYSBiIGNcIlwiXCIgICAgICAgICAgICAgICAgICAgICksICdbXCJhXCIsXCJiXCIsXCJjXCJdJ1xuICAgICAgQGVxICggzqljZGVfXzI0ID0gLT4gc2ggXCJcIlwiLi9jbGktYXJndW1lbnRzLWFzLWxpc3QgYSBiIGMgfCAuL2JlYXV0aWZ5XCJcIlwiICAgICAgICksIFwiWyAnYScsICdiJywgJ2MnIF1cIlxuICAgICAgQGVxICggzqljZGVfXzI1ID0gLT4gc2ggXCJcIlwiLi9jbGktYXJndW1lbnRzLWFzLWxpc3QgYSBiICdjJ1wiXCJcIiAgICAgICAgICAgICAgICAgICksICdbXCJhXCIsXCJiXCIsXCJjXCJdJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBhbmFseXplX2NsaV9hcmd1bWVudHNfcGhhc2VfMTogLT5cbiAgICAgIGVjaG8oKVxuICAgICAgZWNobyBzaCBcIlwiXCIuL3BhcnNlLWFyZ3YtMSBmaXJzdCB0cnkhXCJcIlwiXG4gICAgICBAZXEgKCDOqWNkZV9fMjYgPSAtPiBzaCBcIlwiXCIuL3BhcnNlLWFyZ3YtMSBmaXJzdCB0cnkhXCJcIlwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAne1wiYVwiOltcImZpcnN0XCIsXCJ0cnkhXCJdLFwiY1wiOltdLFwiZFwiOlt7XCJ0XCI6XCJiYXJcIixcInZcIjpcImZpcnN0XCIsXCJ4XCI6MH0se1widFwiOlwiYmFyXCIsXCJ2XCI6XCJ0cnkhXCIsXCJ4XCI6MX1dLFwiZVwiOltdLFwiaVwiOlwic29ja2V0XCIsXCJvXCI6XCJzb2NrZXRcIixcInNcIjpudWxsfSdcbiAgICAgIEBlcSAoIM6pY2RlX18yNyA9IC0+IHNoIFwiXCJcIi4vcGFyc2UtYXJndi0xICtibGFoIC1ibHViICtkLndhdFwiXCJcIiAgICAgICAgICAgICAgICAgICAgICksICd7XCJhXCI6W1wiK2JsYWhcIixcIi1ibHViXCIsXCIrZC53YXRcIl0sXCJjXCI6W3tcInRcIjpcImJvbFwiLFwiblwiOlwiYmxhaFwiLFwidlwiOnRydWUsXCJ4XCI6MH0se1widFwiOlwiYm9sXCIsXCJuXCI6XCJibHViXCIsXCJ2XCI6ZmFsc2UsXCJ4XCI6MX1dLFwiZFwiOlt7XCJ0XCI6XCJib2xcIixcIm5cIjpcIndhdFwiLFwidlwiOnRydWUsXCJ4XCI6Mn1dLFwiZVwiOltdLFwiaVwiOlwic29ja2V0XCIsXCJvXCI6XCJzb2NrZXRcIixcInNcIjpudWxsfSdcbiAgICAgIEBlcSAoIM6pY2RlX18yOCA9IC0+IHNoIFwiXCJcIi4vcGFyc2UtYXJndi0xICt2ZXJib3NlIC12ZXJib3NlIC0tIHdhdCB8IC4vYmVhdXRpZnlcIlwiXCIgICksIFwie1xcbiAgYTogWyAnK3ZlcmJvc2UnLCAnLXZlcmJvc2UnLCAnLS0nLCAnd2F0JyBdLFxcbiAgYzogW1xcbiAgICB7IHQ6ICdib2wnLCBuOiAndmVyYm9zZScsIHY6IHRydWUsIHg6IDAgfSxcXG4gICAgeyB0OiAnYm9sJywgbjogJ3ZlcmJvc2UnLCB2OiBmYWxzZSwgeDogMSB9XFxuICBdLFxcbiAgZDogWyB7IHQ6ICdwZm4nLCB2OiAnd2F0JywgeDogMyB9IF0sXFxuICBlOiBbXSxcXG4gIGk6ICdzb2NrZXQnLFxcbiAgbzogJ3BpcGUnLFxcbiAgczogbnVsbFxcbn1cIlxuICAgICAgZWNobyBzaCBcIlwiXCIuL3BhcnNlLWFyZ3YtMSAtLXgtLSArdmVyYm9zZSAtdmVyYm9zZSAtLSB3YXQgfCAuL2JlYXV0aWZ5XCJcIlwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIDtudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgeyBzaG93X3JlcXVpcmVzLCB9ID0gcmVxdWlyZSAnLi4vLi4vc25pcHBldHMvbGliL2RlbW8tc2hvdy1yZXF1aXJlcy5qcydcbiAgc2hvd19yZXF1aXJlcyAnLi4vLi4vLi4vYXBwcy9jZGUtdG52eCdcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IHRydWUsICByZXBvcnRfY2hlY2tzOiB0cnVlLCAgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAY2RldG52eFxuICAjIHsgcGFyc2VfYXJndiwgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2NkZXRudngvbGliL3BhcnNlLWFyZ3YtMSdcbiAgIyBkZWJ1ZyAnzqljZGV0bnZ4X18yOScsIHBhcnNlX2FyZ3YgWyAnZGVmJywgXVxuICA7bnVsbFxuXG4iXX0=
