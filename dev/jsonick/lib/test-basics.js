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
            d: ['x'],
            e: []
          }
        ],
        [
          [['{}'],
          'cde'],
          {
            c: [],
            d: [{}],
            e: []
          }
        ],
        [
          [['+name'],
          'cde'],
          {
            c: [
              {
                name: true
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
                name: false
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
                name: true
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
                name: false
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
            d: ['+name'],
            e: []
          }
        ],
        [
          [['%-name'],
          'cde'],
          {
            c: [],
            d: ['-name'],
            e: []
          }
        ],
        [
          [[':name'],
          'cde'],
          {
            c: [],
            d: [],
            e: [':name']
          }
        ],
        [
          [['%:name'],
          'cde'],
          {
            c: [],
            d: [':name'],
            e: []
          }
        ],
        [
          [[':name='],
          'cde'],
          {
            c: [
              {
                name: ''
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
                name: 'wat'
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
                name: 'wat'
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
            d: [':name=wat'],
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
                name: 'wat'
              }
            ],
            d: ['123'],
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
                name: 'value'
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
            d: [],
            e: ['{"name":value}']
          }
        ],
        [
          [['{"name":"value"'],
          'cde'],
          {
            c: [],
            d: [],
            e: ['{"name":"value"']
          }
        ],
        [
          [['%{"name":value}'],
          'cde'],
          {
            c: [],
            d: ['{"name":value}'],
            e: []
          }
        ],
        [
          [['%%'],
          'cde'],
          {
            c: [],
            d: ['%'],
            e: []
          }
        ],
        [
          [['[]'],
          'cde'],
          {
            c: [],
            d: [[]],
            e: []
          }
        ],
        [
          [['%[]'],
          'cde'],
          {
            c: [],
            d: ['[]'],
            e: []
          }
        ],
        [
          [['[3,"word"]'],
          'cde'],
          {
            c: [],
            d: [[3,
          'word']],
            e: []
          }
        ],
        [[]],
        [
          //.....................................................................................................
          [['x'],
          'at'],
          {
            a: ['x'],
            t: {
              c: [],
              d: ['word'],
              e: []
            }
          }
        ],
        [
          [['{}'],
          'at'],
          {
            a: ['{}'],
            t: {
              c: [],
              d: ['objectlit'],
              e: []
            }
          }
        ],
        [
          [['+name'],
          'at'],
          {
            a: ['+name'],
            t: {
              c: ['boolean'],
              d: [],
              e: []
            }
          }
        ],
        [
          [['-name'],
          'at'],
          {
            a: ['-name'],
            t: {
              c: ['boolean'],
              d: [],
              e: []
            }
          }
        ],
        [
          [['+d.name'],
          'at'],
          {
            a: ['+d.name'],
            t: {
              c: [],
              d: ['boolean'],
              e: []
            }
          }
        ],
        [
          [['-d.name'],
          'at'],
          {
            a: ['-d.name'],
            t: {
              c: [],
              d: ['boolean'],
              e: []
            }
          }
        ],
        [
          [['%+name'],
          'at'],
          {
            a: ['%+name'],
            t: {
              c: [],
              d: ['escaped'],
              e: []
            }
          }
        ],
        [
          [['%-name'],
          'at'],
          {
            a: ['%-name'],
            t: {
              c: [],
              d: ['escaped'],
              e: []
            }
          }
        ],
        [
          [[':name'],
          'at'],
          {
            a: [':name'],
            t: {
              c: [],
              d: [],
              e: ['other']
            }
          }
        ],
        [
          [['%:name'],
          'at'],
          {
            a: ['%:name'],
            t: {
              c: [],
              d: ['escaped'],
              e: []
            }
          }
        ],
        [
          [[':name='],
          'at'],
          {
            a: [':name='],
            t: {
              c: ['facet'],
              d: [],
              e: []
            }
          }
        ],
        [
          [[':name=wat'],
          'at'],
          {
            a: [':name=wat'],
            t: {
              c: ['facet'],
              d: [],
              e: []
            }
          }
        ],
        [
          [[':d.name=wat'],
          'at'],
          {
            a: [':d.name=wat'],
            t: {
              c: [],
              d: ['facet'],
              e: []
            }
          }
        ],
        [
          [['--',
          ':name=wat'],
          'at'],
          {
            a: ['--',
          ':name=wat'],
            t: {
              c: [],
              d: [],
              e: []
            }
          }
        ],
        [
          [['123',
          ':name=wat'],
          'at'],
          {
            a: ['123',
          ':name=wat'],
            t: {
              c: ['facet'],
              d: ['word'],
              e: []
            }
          }
        ],
        [
          [['{"name":"value"}'],
          'at'],
          {
            a: ['{"name":"value"}'],
            t: {
              c: [],
              d: ['objectlit'],
              e: []
            }
          }
        ],
        [
          [['{"name":value}'],
          'at'],
          {
            a: ['{"name":value}'],
            t: {
              c: [],
              d: [],
              e: ['eobjectlit']
            }
          }
        ],
        [
          [['{"name":"value"'],
          'at'],
          {
            a: ['{"name":"value"'],
            t: {
              c: [],
              d: [],
              e: ['eobjectlit']
            }
          }
        ],
        [
          [['%{"name":value}'],
          'at'],
          {
            a: ['%{"name":value}'],
            t: {
              c: [],
              d: ['escaped'],
              e: []
            }
          }
        ],
        [
          [['%%'],
          'at'],
          {
            a: ['%%'],
            t: {
              c: [],
              d: ['escaped'],
              e: []
            }
          }
        ],
        [
          [['[ ]'],
          'at'],
          {
            a: ['[ ]'],
            t: {
              c: [],
              d: ['listlit'],
              e: []
            }
          }
        ],
        [
          [['%[ ]'],
          'at'],
          {
            a: ['%[ ]'],
            t: {
              c: [],
              d: ['escaped'],
              e: []
            }
          }
        ],
        [
          [['[3,"word"]'],
          'at'],
          {
            a: ['[3,"word"]'],
            t: {
              c: [],
              d: ['listlit'],
              e: []
            }
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
        // echo [ [ argv, includes, ], ( abbreviate_argvnfo ( parse_argv argv ), includes ), ]
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
      other: function() {
        debug('Ωjst___3', rpr(path_to_jsonick));
        debug('Ωjst___4', run_shell_command(path_to_jsonick, "ls -AlF"));
        // debug 'Ωjst___5', rpr run_shell_command path_to_jsonick, "./cli-arguments-as-list first try!"
        // debug 'Ωjst___6', rpr run_shell_command path_to_jsonick, """echo 'x' | nodexh ~/jzr/jsonick/analyze-cli-arguments-phase-1 %:d.color=yellow :d.color=yellow"""
        // debug 'Ωjst___7', rpr run_shell_command path_to_jsonick, """echo 'x' | nodexh ~/jzr/jsonick/analyze-cli-arguments-phase-1 %:d.color=yellow :d.color=yellow | ./beautify"""
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      beautify: function() {
        var Ωjst__10, Ωjst__11, Ωjst__12, Ωjst__13, Ωjst__14, Ωjst__15, Ωjst__16, Ωjst__17, Ωjst___8, Ωjst___9;
        this.eq((Ωjst___8 = function() {
          return sh(`echo '{}' | ./beautify`);
        }), '{}');
        this.eq((Ωjst___9 = function() {
          return sh(`echo '[]' | ./beautify`);
        }), '[]');
        this.eq((Ωjst__10 = function() {
          return sh(`echo 'abc' | ./beautify`);
        }), 'abc');
        this.eq((Ωjst__11 = function() {
          return sh(`echo '{"attr1":"value1"}' | ./beautify`);
        }), "{ attr1: 'value1' }");
        this.eq((Ωjst__12 = function() {
          return sh(`echo '{"attr1":"value1","attr2":"value2","attr3":"value3"}' | ./beautify`);
        }), "{ attr1: 'value1', attr2: 'value2', attr3: 'value3' }");
        this.eq((Ωjst__13 = function() {
          return sh(`echo '["quite","a","few","words","in","this"]' | ./beautify`);
        }), "[ 'quite', 'a', 'few', 'words', 'in', 'this' ]");
        this.eq((Ωjst__14 = function() {
          return sh(`./beautify '{}'`);
        }), '{}');
        this.eq((Ωjst__15 = function() {
          return sh(`./beautify '[]'`);
        }), '[]');
        this.eq((Ωjst__16 = function() {
          return sh(`echo 'abc' | ./beautify '{}'`);
        }), '{}');
        this.eq((Ωjst__17 = function() {
          return sh(`echo 'abc' | ./beautify '[]'`);
        }), '[]');
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
      return (new Test(guytest_cfg)).test(this.jsonick);
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLGtCQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsUUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsZUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsaUJBQUEsRUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTs7RUFFQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFdBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsSUFKRixFQUtFLEdBTEYsRUFNRSxJQU5GLEVBT0UsT0FQRixFQVFFLEdBUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FSaEMsRUFaQTs7O0VBc0JBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLG1DQUFSOztFQUM1QixJQUFBLEdB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OEMsYUFBQSxFQUFlO01BQTdEO2FBQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixJQUFDLENBQUEsT0FBL0I7SUFOc0MsQ0FBQSxJQUF4Qzs7QUFwSkEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2hvbGxlcml0aCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICBsaW1lXG4gIGdvbGRcbiAgcmVkXG4gIGJsdWVcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG57IHJ1bl9zaGVsbF9jb21tYW5kICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9jbGktcnVuLXNoZWxsLWNvbW1hbmQnXG5wYXRoX3RvX2pzb25pY2sgICAgICAgICAgID0gUEFUSC5yZXNvbHZlIFBBVEguam9pbiBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hcHBzL2pzb25pY2snXG5zaCAgICAgICAgICAgICAgICAgICAgICAgID0gKCBjb21tYW5kX2xpbmUgKSAtPiAoIHJ1bl9zaGVsbF9jb21tYW5kIHBhdGhfdG9fanNvbmljaywgY29tbWFuZF9saW5lICkudHJpbSgpXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pc2FfbnBvZCA9ICggeCApIC0+IHg/IGFuZCAoICggT2JqZWN0LmdldFByb3RvdHlwZU9mIHggKSBpcyBudWxsIClcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5hYmJyZXZpYXRlX2FyZ3ZuZm8gPSAoIGFyZ3ZuZm8sIGluY2x1ZGVzID0gJycgKSAtPlxuICBpbmNsdWRlcyA9IG5ldyBTZXQgKCBpZiBpbmNsdWRlcy5sZW5ndGggaXMgMCB0aGVuICdhY2RlaW90JyBlbHNlIGluY2x1ZGVzIClcbiAgUiA9IHt9XG4gIFIuYSA9IGFyZ3ZuZm8uYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBpbmNsdWRlcy5oYXMgJ2EnXG4gIFIuYyA9ICggKCBpZiAoIGlzYV9ucG9kIGUgKSB0aGVuIHsgZS4uLiwgfSBlbHNlIGUgKSBmb3IgZSBpbiBhcmd2bmZvLmMgKSAgICBpZiBpbmNsdWRlcy5oYXMgJ2MnXG4gIFIuZCA9ICggKCBpZiAoIGlzYV9ucG9kIGUgKSB0aGVuIHsgZS4uLiwgfSBlbHNlIGUgKSBmb3IgZSBpbiBhcmd2bmZvLmQgKSAgICBpZiBpbmNsdWRlcy5oYXMgJ2QnXG4gIFIuZSA9IGFyZ3ZuZm8uZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBpbmNsdWRlcy5oYXMgJ2UnXG4gIFIuaSA9IGFyZ3ZuZm8uaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBpbmNsdWRlcy5oYXMgJ2knXG4gIFIubyA9IGFyZ3ZuZm8ubyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBpbmNsdWRlcy5oYXMgJ28nXG4gIFIudCA9IGFyZ3ZuZm8udCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBpbmNsdWRlcy5oYXMgJ3QnXG4gIHJldHVybiBSXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AanNvbmljayA9XG5cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJhc2ljczogLT5cbiAgICB7IHBhcnNlX2FyZ3YsICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9qc29uaWNrL2xpYi9hbmFseXplLWNsaS1hcmd1bWVudHMtcGhhc2UtMSdcbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgWyBbIFsgJ3gnICAgICAgICAgICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgXSwgZDogWyAneCcgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFsgWyBbICd7fScgICAgICAgICAgICAgICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgIF0sIGQ6IFsge30gICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAnK25hbWUnICAgICAgICAgICAgXSwgJ2NkZScgXSwgeyBjOiBbIHsgbmFtZTogdHJ1ZSB9ICBdLCBkOiBbICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJy1uYW1lJyAgICAgICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyB7IG5hbWU6IGZhbHNlIH0gXSwgZDogWyAgICAgICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFsgWyBbICcrZC5uYW1lJyAgICAgICAgICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyBuYW1lOiB0cnVlIH0gICAgXSwgZTogWyAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAnLWQubmFtZScgICAgICAgICAgXSwgJ2NkZScgXSwgeyBjOiBbICAgICAgICAgICAgICAgICBdLCBkOiBbIHsgbmFtZTogZmFsc2UgfSAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJyUrbmFtZScgICAgICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgXSwgZDogWyAnK25hbWUnICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFsgWyBbICclLW5hbWUnICAgICAgICAgICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgIF0sIGQ6IFsgJy1uYW1lJyAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAnOm5hbWUnICAgICAgICAgICAgXSwgJ2NkZScgXSwgeyBjOiBbICAgICAgICAgICAgICAgICBdLCBkOiBbICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgJzpuYW1lJyAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJyU6bmFtZScgICAgICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgXSwgZDogWyAnOm5hbWUnICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFsgWyBbICc6bmFtZT0nICAgICAgICAgICBdLCAnY2RlJyBdLCB7IGM6IFsgeyBuYW1lOiAnJyB9ICAgIF0sIGQ6IFsgICAgICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAnOm5hbWU9d2F0JyAgICAgICAgXSwgJ2NkZScgXSwgeyBjOiBbIHsgbmFtZTogJ3dhdCcgfSBdLCBkOiBbICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJzpkLm5hbWU9d2F0JyAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgXSwgZDogWyB7IG5hbWU6ICd3YXQnIH0gICBdLCBlOiBbICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFsgWyBbICctLScsICc6bmFtZT13YXQnICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgIF0sIGQ6IFsgJzpuYW1lPXdhdCcgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAnMTIzJywgJzpuYW1lPXdhdCcgXSwgJ2NkZScgXSwgeyBjOiBbIHsgbmFtZTogJ3dhdCcgfSBdLCBkOiBbICcxMjMnICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJ3tcIm5hbWVcIjpcInZhbHVlXCJ9JyBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgIF0sIGQ6IFsgeyBuYW1lOiAndmFsdWUnIH0gXSwgZTogWyAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAne1wibmFtZVwiOnZhbHVlfScgICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgIF0sIGQ6IFsgICAgICAgICAgICAgICAgICAgXSwgZTogWyAne1wibmFtZVwiOnZhbHVlfScgXSB9IF1cbiAgICAgIFsgWyBbICd7XCJuYW1lXCI6XCJ2YWx1ZVwiJyAgXSwgJ2NkZScgXSwgeyBjOiBbICAgICAgICAgICAgICAgICBdLCBkOiBbICAgICAgICAgICAgICAgICAgIF0sIGU6IFsgJ3tcIm5hbWVcIjpcInZhbHVlXCInIF0gfSBdXG4gICAgICBbIFsgWyAnJXtcIm5hbWVcIjp2YWx1ZX0nICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgIF0sIGQ6IFsgJ3tcIm5hbWVcIjp2YWx1ZX0nICBdLCBlOiBbICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFsgWyBbICclJScgICAgICAgICAgICAgICBdLCAnY2RlJyBdLCB7IGM6IFsgICAgICAgICAgICAgICAgIF0sIGQ6IFsgJyUnICAgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgICAgICAgICAgIF0gfSBdXG4gICAgICBbIFsgWyAnW10nICAgICAgICAgICAgICAgXSwgJ2NkZScgXSwgeyBjOiBbICAgICAgICAgICAgICAgICBdLCBkOiBbIFtdICAgICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICAgICAgICAgICBdIH0gXVxuICAgICAgWyBbIFsgJyVbXScgICAgICAgICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgXSwgZDogWyAnW10nICAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgIFsgWyBbICdbMyxcIndvcmRcIl0nICAgICAgIF0sICdjZGUnIF0sIHsgYzogWyAgICAgICAgICAgICAgICAgXSwgZDogWyBbMywnd29yZCddICAgICAgICBdLCBlOiBbICAgICAgICAgICAgICAgICAgXSB9IF1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgW1tdXVxuICAgICAgWyBbIFsgJ3gnICAgICAgICAgICAgICAgIF0sICdhdCcgXSwgeyBhOiBbICd4JyAgICAgICAgICAgICAgICBdLCB0OiB7IGM6IFsgICAgICAgICAgIF0sIGQ6IFsgJ3dvcmQnICAgICAgXSwgZTogWyAgICAgICAgIF0gfSB9IF1cbiAgICAgIFsgWyBbICd7fScgICAgICAgICAgICAgICBdLCAnYXQnIF0sIHsgYTogWyAne30nICAgICAgICAgICAgICAgXSwgdDogeyBjOiBbICAgICAgICAgICBdLCBkOiBbICdvYmplY3RsaXQnIF0sIGU6IFsgICAgICAgICBdIH0gfSBdXG4gICAgICBbIFsgWyAnK25hbWUnICAgICAgICAgICAgXSwgJ2F0JyBdLCB7IGE6IFsgJytuYW1lJyAgICAgICAgICAgIF0sIHQ6IHsgYzogWyAnYm9vbGVhbicgXSwgZDogWyAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgXSB9IH0gXVxuICAgICAgWyBbIFsgJy1uYW1lJyAgICAgICAgICAgIF0sICdhdCcgXSwgeyBhOiBbICctbmFtZScgICAgICAgICAgICBdLCB0OiB7IGM6IFsgJ2Jvb2xlYW4nIF0sIGQ6IFsgICAgICAgICAgICAgXSwgZTogWyAgICAgICAgIF0gfSB9IF1cbiAgICAgIFsgWyBbICcrZC5uYW1lJyAgICAgICAgICBdLCAnYXQnIF0sIHsgYTogWyAnK2QubmFtZScgICAgICAgICAgXSwgdDogeyBjOiBbICAgICAgICAgICBdLCBkOiBbICdib29sZWFuJyAgIF0sIGU6IFsgICAgICAgICBdIH0gfSBdXG4gICAgICBbIFsgWyAnLWQubmFtZScgICAgICAgICAgXSwgJ2F0JyBdLCB7IGE6IFsgJy1kLm5hbWUnICAgICAgICAgIF0sIHQ6IHsgYzogWyAgICAgICAgICAgXSwgZDogWyAnYm9vbGVhbicgICBdLCBlOiBbICAgICAgICAgXSB9IH0gXVxuICAgICAgWyBbIFsgJyUrbmFtZScgICAgICAgICAgIF0sICdhdCcgXSwgeyBhOiBbICclK25hbWUnICAgICAgICAgICBdLCB0OiB7IGM6IFsgICAgICAgICAgIF0sIGQ6IFsgJ2VzY2FwZWQnICAgXSwgZTogWyAgICAgICAgIF0gfSB9IF1cbiAgICAgIFsgWyBbICclLW5hbWUnICAgICAgICAgICBdLCAnYXQnIF0sIHsgYTogWyAnJS1uYW1lJyAgICAgICAgICAgXSwgdDogeyBjOiBbICAgICAgICAgICBdLCBkOiBbICdlc2NhcGVkJyAgIF0sIGU6IFsgICAgICAgICBdIH0gfSBdXG4gICAgICBbIFsgWyAnOm5hbWUnICAgICAgICAgICAgXSwgJ2F0JyBdLCB7IGE6IFsgJzpuYW1lJyAgICAgICAgICAgIF0sIHQ6IHsgYzogWyAgICAgICAgICAgXSwgZDogWyAgICAgICAgICAgICBdLCBlOiBbICdvdGhlcicgXSB9IH0gXVxuICAgICAgWyBbIFsgJyU6bmFtZScgICAgICAgICAgIF0sICdhdCcgXSwgeyBhOiBbICclOm5hbWUnICAgICAgICAgICBdLCB0OiB7IGM6IFsgICAgICAgICAgIF0sIGQ6IFsgJ2VzY2FwZWQnICAgXSwgZTogWyAgICAgICAgIF0gfSB9IF1cbiAgICAgIFsgWyBbICc6bmFtZT0nICAgICAgICAgICBdLCAnYXQnIF0sIHsgYTogWyAnOm5hbWU9JyAgICAgICAgICAgXSwgdDogeyBjOiBbICdmYWNldCcgICBdLCBkOiBbICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICBdIH0gfSBdXG4gICAgICBbIFsgWyAnOm5hbWU9d2F0JyAgICAgICAgXSwgJ2F0JyBdLCB7IGE6IFsgJzpuYW1lPXdhdCcgICAgICAgIF0sIHQ6IHsgYzogWyAnZmFjZXQnICAgXSwgZDogWyAgICAgICAgICAgICBdLCBlOiBbICAgICAgICAgXSB9IH0gXVxuICAgICAgWyBbIFsgJzpkLm5hbWU9d2F0JyAgICAgIF0sICdhdCcgXSwgeyBhOiBbICc6ZC5uYW1lPXdhdCcgICAgICBdLCB0OiB7IGM6IFsgICAgICAgICAgIF0sIGQ6IFsgJ2ZhY2V0JyAgICAgXSwgZTogWyAgICAgICAgIF0gfSB9IF1cbiAgICAgIFsgWyBbICctLScsICc6bmFtZT13YXQnICBdLCAnYXQnIF0sIHsgYTogWyAnLS0nLCAnOm5hbWU9d2F0JyAgXSwgdDogeyBjOiBbICAgICAgICAgICBdLCBkOiBbICAgICAgICAgICAgIF0sIGU6IFsgICAgICAgICBdIH0gfSBdXG4gICAgICBbIFsgWyAnMTIzJywgJzpuYW1lPXdhdCcgXSwgJ2F0JyBdLCB7IGE6IFsgJzEyMycsICc6bmFtZT13YXQnIF0sIHQ6IHsgYzogWyAnZmFjZXQnICAgXSwgZDogWyAnd29yZCcgICAgICBdLCBlOiBbICAgICAgICAgXSB9IH0gXVxuICAgICAgWyBbIFsgJ3tcIm5hbWVcIjpcInZhbHVlXCJ9JyBdLCAnYXQnIF0sIHsgYTogWyAne1wibmFtZVwiOlwidmFsdWVcIn0nIF0sIHQ6IHsgYzogWyAgICAgICAgICAgXSwgZDogWyAnb2JqZWN0bGl0JyBdLCBlOiBbICAgICAgICAgXSB9IH0gXVxuICAgICAgWyBbIFsgJ3tcIm5hbWVcIjp2YWx1ZX0nICAgXSwgJ2F0JyBdLCB7IGE6IFsgJ3tcIm5hbWVcIjp2YWx1ZX0nICAgXSwgdDogeyBjOiBbICAgICAgICAgICBdLCBkOiBbICAgICAgICAgICAgIF0sIGU6IFsgJ2VvYmplY3RsaXQnICAgICAgICBdIH0gfSBdXG4gICAgICBbIFsgWyAne1wibmFtZVwiOlwidmFsdWVcIicgIF0sICdhdCcgXSwgeyBhOiBbICd7XCJuYW1lXCI6XCJ2YWx1ZVwiJyAgXSwgdDogeyBjOiBbICAgICAgICAgICBdLCBkOiBbICAgICAgICAgICAgIF0sIGU6IFsgJ2VvYmplY3RsaXQnICAgICAgICBdIH0gfSBdXG4gICAgICBbIFsgWyAnJXtcIm5hbWVcIjp2YWx1ZX0nICBdLCAnYXQnIF0sIHsgYTogWyAnJXtcIm5hbWVcIjp2YWx1ZX0nICBdLCB0OiB7IGM6IFsgICAgICAgICAgIF0sIGQ6IFsgJ2VzY2FwZWQnICAgXSwgZTogWyAgICAgICAgIF0gfSB9IF1cbiAgICAgIFsgWyBbICclJScgICAgICAgICAgICAgICBdLCAnYXQnIF0sIHsgYTogWyAnJSUnICAgICAgICAgICAgICAgXSwgdDogeyBjOiBbICAgICAgICAgICBdLCBkOiBbICdlc2NhcGVkJyAgIF0sIGU6IFsgICAgICAgICBdIH0gfSBdXG4gICAgICBbIFsgWyAnWyBdJyAgICAgICAgICAgICAgXSwgJ2F0JyBdLCB7IGE6IFsgJ1sgXScgICAgICAgICAgICAgIF0sIHQ6IHsgYzogWyAgICAgICAgICAgXSwgZDogWyAnbGlzdGxpdCcgICBdLCBlOiBbICAgICAgICAgXSB9IH0gXVxuICAgICAgWyBbIFsgJyVbIF0nICAgICAgICAgICAgIF0sICdhdCcgXSwgeyBhOiBbICclWyBdJyAgICAgICAgICAgICBdLCB0OiB7IGM6IFsgICAgICAgICAgIF0sIGQ6IFsgJ2VzY2FwZWQnICAgXSwgZTogWyAgICAgICAgIF0gfSB9IF1cbiAgICAgIFsgWyBbICdbMyxcIndvcmRcIl0nICAgICAgIF0sICdhdCcgXSwgeyBhOiBbICdbMyxcIndvcmRcIl0nICAgICAgIF0sIHQ6IHsgYzogWyAgICAgICAgICAgXSwgZDogWyAnbGlzdGxpdCcgICBdLCBlOiBbICAgICAgICAgXSB9IH0gXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIFsgWyBhcmd2LCBpbmNsdWRlcywgXSwgbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICB1bmxlc3MgbWF0Y2hlcj9cbiAgICAgICAgZWNobygpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICAjIGRlYnVnICfOqWpzb25pY2tfX18xJywgcGFyc2VfYXJndiBhcmd2XG4gICAgICAjIGVjaG8gWyBbIGFyZ3YsIGluY2x1ZGVzLCBdLCAoIGFiYnJldmlhdGVfYXJndm5mbyAoIHBhcnNlX2FyZ3YgYXJndiApLCBpbmNsdWRlcyApLCBdXG4gICAgICBAZXEgKCDOqWpzdF9fXzIgPSAtPiBhYmJyZXZpYXRlX2FyZ3ZuZm8gKCBwYXJzZV9hcmd2IGFyZ3YgKSwgaW5jbHVkZXMgKSwgbWF0Y2hlclxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tbWFuZF9saW5lczpcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgb3RoZXI6IC0+XG4gICAgICBkZWJ1ZyAnzqlqc3RfX18zJywgcnByIHBhdGhfdG9fanNvbmlja1xuICAgICAgZGVidWcgJ86panN0X19fNCcsIHJ1bl9zaGVsbF9jb21tYW5kICAgICBwYXRoX3RvX2pzb25pY2ssIFwibHMgLUFsRlwiXG4gICAgICAjIGRlYnVnICfOqWpzdF9fXzUnLCBycHIgcnVuX3NoZWxsX2NvbW1hbmQgcGF0aF90b19qc29uaWNrLCBcIi4vY2xpLWFyZ3VtZW50cy1hcy1saXN0IGZpcnN0IHRyeSFcIlxuICAgICAgIyBkZWJ1ZyAnzqlqc3RfX182JywgcnByIHJ1bl9zaGVsbF9jb21tYW5kIHBhdGhfdG9fanNvbmljaywgXCJcIlwiZWNobyAneCcgfCBub2RleGggfi9qenIvanNvbmljay9hbmFseXplLWNsaS1hcmd1bWVudHMtcGhhc2UtMSAlOmQuY29sb3I9eWVsbG93IDpkLmNvbG9yPXllbGxvd1wiXCJcIlxuICAgICAgIyBkZWJ1ZyAnzqlqc3RfX183JywgcnByIHJ1bl9zaGVsbF9jb21tYW5kIHBhdGhfdG9fanNvbmljaywgXCJcIlwiZWNobyAneCcgfCBub2RleGggfi9qenIvanNvbmljay9hbmFseXplLWNsaS1hcmd1bWVudHMtcGhhc2UtMSAlOmQuY29sb3I9eWVsbG93IDpkLmNvbG9yPXllbGxvdyB8IC4vYmVhdXRpZnlcIlwiXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYmVhdXRpZnk6IC0+XG4gICAgICBAZXEgKCDOqWpzdF9fXzggPSAtPiBzaCBcIlwiXCJlY2hvICd7fScgfCAuL2JlYXV0aWZ5XCJcIlwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ3t9J1xuICAgICAgQGVxICggzqlqc3RfX185ID0gLT4gc2ggXCJcIlwiZWNobyAnW10nIHwgLi9iZWF1dGlmeVwiXCJcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdbXSdcbiAgICAgIEBlcSAoIM6panN0X18xMCA9IC0+IHNoIFwiXCJcImVjaG8gJ2FiYycgfCAuL2JlYXV0aWZ5XCJcIlwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnYWJjJ1xuICAgICAgQGVxICggzqlqc3RfXzExID0gLT4gc2ggXCJcIlwiZWNobyAne1wiYXR0cjFcIjpcInZhbHVlMVwifScgfCAuL2JlYXV0aWZ5XCJcIlwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBcInsgYXR0cjE6ICd2YWx1ZTEnIH1cIlxuICAgICAgQGVxICggzqlqc3RfXzEyID0gLT4gc2ggXCJcIlwiZWNobyAne1wiYXR0cjFcIjpcInZhbHVlMVwiLFwiYXR0cjJcIjpcInZhbHVlMlwiLFwiYXR0cjNcIjpcInZhbHVlM1wifScgfCAuL2JlYXV0aWZ5XCJcIlwiICksIFwieyBhdHRyMTogJ3ZhbHVlMScsIGF0dHIyOiAndmFsdWUyJywgYXR0cjM6ICd2YWx1ZTMnIH1cIlxuICAgICAgQGVxICggzqlqc3RfXzEzID0gLT4gc2ggXCJcIlwiZWNobyAnW1wicXVpdGVcIixcImFcIixcImZld1wiLFwid29yZHNcIixcImluXCIsXCJ0aGlzXCJdJyB8IC4vYmVhdXRpZnlcIlwiXCIgICAgICAgICAgICAgICksIFwiWyAncXVpdGUnLCAnYScsICdmZXcnLCAnd29yZHMnLCAnaW4nLCAndGhpcycgXVwiXG4gICAgICBAZXEgKCDOqWpzdF9fMTQgPSAtPiBzaCBcIlwiXCIuL2JlYXV0aWZ5ICd7fSdcIlwiXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ3t9J1xuICAgICAgQGVxICggzqlqc3RfXzE1ID0gLT4gc2ggXCJcIlwiLi9iZWF1dGlmeSAnW10nXCJcIlwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdbXSdcbiAgICAgIEBlcSAoIM6panN0X18xNiA9IC0+IHNoIFwiXCJcImVjaG8gJ2FiYycgfCAuL2JlYXV0aWZ5ICd7fSdcIlwiXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAne30nXG4gICAgICBAZXEgKCDOqWpzdF9fMTcgPSAtPiBzaCBcIlwiXCJlY2hvICdhYmMnIHwgLi9iZWF1dGlmeSAnW10nXCJcIlwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ1tdJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIHsgc2hvd19yZXF1aXJlcywgfSA9IHJlcXVpcmUgJy4uLy4uL3NuaXBwZXRzL2xpYi9kZW1vLXNob3ctcmVxdWlyZXMuanMnXG4gIHNob3dfcmVxdWlyZXMgJy4uLy4uLy4uL2FwcHMvanNvbmljaydcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAanNvbmlja1xuXG5cbiJdfQ==
