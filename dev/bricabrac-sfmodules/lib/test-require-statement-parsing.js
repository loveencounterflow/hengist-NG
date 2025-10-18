(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, demo_improved_structure, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

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
    //---------------------------------------------------------------------------------------------------------
    require_walk_js_tokens: function() {
      var SFMODULES, summarize, type_of, walk_essential_js_tokens, walk_js_tokens, Ωkvrt__69, Ωkvrt__70;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({walk_js_tokens, walk_essential_js_tokens, summarize} = SFMODULES.require_walk_js_tokens());
      //.......................................................................................................
      this.eq((Ωkvrt__69 = function() {
        return type_of(walk_js_tokens);
      }), 'generatorfunction');
      this.eq((Ωkvrt__70 = function() {
        return type_of(walk_essential_js_tokens);
      }), 'generatorfunction');
      (() => {        //.......................................................................................................
        var source, token, Ωkvrt__71, Ωkvrt__72, Ωkvrt__73, Ωkvrt__74, Ωkvrt__75, Ωkvrt__76, Ωkvrt__77, Ωkvrt__78, Ωkvrt__79, Ωkvrt__80, Ωkvrt__81, Ωkvrt__82, Ωkvrt__83, Ωkvrt__89;
        this.eq((Ωkvrt__71 = function() {
          return type_of(walk_js_tokens(''));
        }), 'generator');
        this.eq((Ωkvrt__72 = function() {
          return [...(walk_js_tokens(''))];
        }), [
          {
            type: 'eof'
          }
        ]);
        this.eq((Ωkvrt__73 = function() {
          return summarize(walk_js_tokens('var a = 9;'));
        }), "&&&IdentifierName'var'&&&WhiteSpace' '&&&IdentifierName'a'&&&WhiteSpace' '&&&Punctuator'='&&&WhiteSpace' '&&&NumericLiteral'9'&&&Punctuator';'&&&eof&&&");
        this.eq((Ωkvrt__74 = function() {
          return summarize(walk_essential_js_tokens('var a = 9;'));
        }), "&&&IdentifierName'var'&&&IdentifierName'a'&&&Punctuator'='&&&NumericLiteral'9'&&&Punctuator';'&&&eof&&&");
        this.eq((Ωkvrt__75 = function() {
          return summarize(walk_essential_js_tokens('"y"'));
        }), `&&&StringLiteral'"y"'&&&eof&&&`);
        this.eq((Ωkvrt__76 = function() {
          return summarize(walk_essential_js_tokens("'y'"));
        }), "&&&StringLiteral'\\'y\\''&&&eof&&&");
        this.eq((Ωkvrt__77 = function() {
          return summarize(walk_essential_js_tokens("`A${'y'}Z`"));
        }), "&&&TemplateHead'`A${'&&&StringLiteral'\\'y\\''&&&TemplateTail'}Z`'&&&eof&&&");
        this.eq((Ωkvrt__78 = function() {
          return summarize(walk_essential_js_tokens("f`A${'y'}Z`"));
        }), "&&&IdentifierName'f'&&&TemplateHead'`A${'&&&StringLiteral'\\'y\\''&&&TemplateTail'}Z`'&&&eof&&&");
        this.eq((Ωkvrt__79 = function() {
          return summarize(walk_essential_js_tokens("`A${`y`}Z`"));
        }), "&&&TemplateHead'`A${'&&&NoSubstitutionTemplate'`y`'&&&TemplateTail'}Z`'&&&eof&&&");
        this.eq((Ωkvrt__80 = function() {
          return summarize(walk_essential_js_tokens("`A${require(`y`)}Z`"));
        }), "&&&TemplateHead'`A${'&&&IdentifierName'require'&&&Punctuator'('&&&NoSubstitutionTemplate'`y`'&&&Punctuator')'&&&TemplateTail'}Z`'&&&eof&&&");
        this.eq((Ωkvrt__81 = function() {
          return summarize(walk_essential_js_tokens("require = 777"));
        }), "&&&IdentifierName'require'&&&Punctuator'='&&&NumericLiteral'777'&&&eof&&&");
        this.eq((Ωkvrt__82 = function() {
          return summarize(walk_essential_js_tokens("require = 777 // foo: bar"));
        }), "&&&IdentifierName'require'&&&Punctuator'='&&&NumericLiteral'777'&&&eof&&&");
        this.eq((Ωkvrt__83 = function() {
          return summarize(walk_essential_js_tokens("require = 777; // foo: bar"));
        }), "&&&IdentifierName'require'&&&Punctuator'='&&&NumericLiteral'777'&&&Punctuator';'&&&eof&&&");
        // @eq ( Ωkvrt__84 = -> summarize walk_essential_js_tokens  "true"                ), null
        // @eq ( Ωkvrt__85 = -> summarize walk_essential_js_tokens  "false"               ), null
        // @eq ( Ωkvrt__86 = -> summarize walk_essential_js_tokens  "undefined"           ), null
        // @eq ( Ωkvrt__87 = -> summarize walk_essential_js_tokens  "null"                ), null
        //.....................................................................................................
        source = "const { d, } = require( 'some-module' ); /* require( 'other-module' ) */";
        for (token of walk_essential_js_tokens(source)) {
          info('Ωkvrt__88', f`${token.type}:>20c; ${rpr(token.value)}`);
        }
        this.eq((Ωkvrt__89 = function() {
          return summarize(walk_essential_js_tokens(source));
        }), "&&&IdentifierName'const'&&&Punctuator'{'&&&IdentifierName'd'&&&Punctuator','&&&Punctuator'}'&&&Punctuator'='&&&IdentifierName'require'&&&Punctuator'('&&&StringLiteral'\\'some-module\\''&&&Punctuator')'&&&Punctuator';'&&&eof&&&");
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_parse_require_statements: function() {
      var FS, PATH, SFMODULES, summarize, type_of, walk_essential_js_tokens, walk_js_tokens, walk_require_statements, Ωkvrt__90;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({walk_require_statements} = SFMODULES.require_parse_require_statements());
      ({walk_js_tokens, walk_essential_js_tokens, summarize} = SFMODULES.require_walk_js_tokens());
      PATH = require('node:path');
      FS = require('node:fs');
      //.......................................................................................................
      this.eq((Ωkvrt__90 = function() {
        return type_of(walk_require_statements);
      }), 'function');
      (() => {        //.......................................................................................................
        var path, source, tokens, wouldbe_path, Ωkvrt_100, Ωkvrt_101, Ωkvrt_102, Ωkvrt_103, Ωkvrt_104, Ωkvrt_105, Ωkvrt_106, Ωkvrt_107, Ωkvrt_108, Ωkvrt_109, Ωkvrt_110, Ωkvrt__92, Ωkvrt__93, Ωkvrt__94, Ωkvrt__95, Ωkvrt__96, Ωkvrt__97, Ωkvrt__98, Ωkvrt__99;
        path = PATH.resolve(__dirname, '../../../assets/bricabrac/parse-require-statements/test-basics.js');
        wouldbe_path = __filename;
        source = FS.readFileSync(path, {
          encoding: 'utf-8'
        });
        // for d from walk_require_statements path
        //   debug 'Ωkvrt__91', d
        tokens = walk_require_statements({
          path: wouldbe_path,
          source
        });
        this.eq((Ωkvrt__92 = function() {
          return tokens.next().value;
        }), {
          type: 'require',
          line_nr: 5,
          disposition: 'npm',
          selector: 'guy',
          annotation: 'semver:0.3.4'
        });
        this.eq((Ωkvrt__93 = function() {
          return tokens.next().value;
        }), {
          type: 'require',
          line_nr: 12,
          disposition: 'inside',
          selector: '../../../apps/guy-test-NG',
          annotation: null
        });
        this.eq((Ωkvrt__94 = function() {
          return tokens.next().value;
        }), {
          type: 'require',
          line_nr: 16,
          disposition: 'inside',
          selector: '../../../apps/effstring',
          annotation: null
        });
        this.eq((Ωkvrt__95 = function() {
          return tokens.next().value;
        }), {
          type: 'require',
          line_nr: 25,
          disposition: 'inside',
          selector: '../../../apps/bricabrac-sfmodules',
          annotation: null
        });
        this.eq((Ωkvrt__96 = function() {
          return tokens.next().value;
        }), {
          type: 'require',
          line_nr: 162,
          disposition: 'inside',
          selector: '../../../apps/bricabrac-sfmodules',
          annotation: null
        });
        this.eq((Ωkvrt__97 = function() {
          return tokens.next().value;
        }), {
          type: 'require',
          line_nr: 165,
          disposition: 'node',
          selector: 'node:path',
          annotation: null
        });
        this.eq((Ωkvrt__98 = function() {
          return tokens.next().value;
        }), {
          type: 'require',
          line_nr: 166,
          disposition: 'node',
          selector: 'node:os',
          annotation: null
        });
        this.eq((Ωkvrt__99 = function() {
          return tokens.next().value;
        }), {
          type: 'require',
          line_nr: 167,
          disposition: 'node',
          selector: 'node:fs',
          annotation: null
        });
        this.eq((Ωkvrt_100 = function() {
          return tokens.next().value;
        }), {
          type: 'require',
          line_nr: 399,
          disposition: 'inside',
          selector: '../../../apps/bricabrac-sfmodules',
          annotation: null
        });
        this.eq((Ωkvrt_101 = function() {
          return tokens.next().value;
        }), {
          type: 'require',
          line_nr: 465,
          disposition: 'node',
          selector: 'node:fs',
          annotation: null
        });
        this.eq((Ωkvrt_102 = function() {
          return tokens.next().value;
        }), {
          type: 'require',
          line_nr: 466,
          disposition: 'inside',
          selector: '../../../apps/bricabrac-sfmodules',
          annotation: null
        });
        this.eq((Ωkvrt_103 = function() {
          return tokens.next().value;
        }), {
          type: 'warning',
          message: "ignoring possible `require` on line 554: '        require;'",
          line: '        require;',
          line_nr: 554
        });
        this.eq((Ωkvrt_104 = function() {
          return tokens.next().value;
        }), {
          type: 'warning',
          message: "ignoring possible `require` on line 555: '        require(true);'",
          line: '        require(true);',
          line_nr: 555
        });
        this.eq((Ωkvrt_105 = function() {
          return tokens.next().value;
        }), {
          type: 'require',
          line_nr: 556,
          disposition: 'npm',
          selector: 'pkg#1',
          annotation: null
        });
        this.eq((Ωkvrt_106 = function() {
          return tokens.next().value;
        }), {
          type: 'require',
          line_nr: 557,
          disposition: 'npm',
          selector: 'pkg#2',
          annotation: null
        });
        this.eq((Ωkvrt_107 = function() {
          return tokens.next().value;
        }), {
          type: 'warning',
          message: "ignoring possible `require` on line 558: '        return require( `pkg#3` + \\'suffix\\' );'",
          line: "        return require( `pkg#3` + 'suffix' );",
          line_nr: 558
        });
        this.eq((Ωkvrt_108 = function() {
          return tokens.next().value;
        }), {
          type: 'require',
          line_nr: 566,
          disposition: 'inside',
          selector: '../../../apps/bricabrac-sfmodules',
          annotation: null
        });
        this.eq((Ωkvrt_109 = function() {
          return tokens.next().value;
        }), {
          type: 'warning',
          message: "ignoring possible `require` on line 602: '  if (module === require.main) {'",
          line: '  if (module === require.main) {',
          line_nr: 602
        });
        this.eq((Ωkvrt_110 = function() {
          return tokens.next().value;
        }), {
          type: 'require',
          line_nr: 626,
          disposition: 'outside',
          selector: '../../../../whatever',
          annotation: null
        });
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var d, results, token;
        //.....................................................................................................
        whisper('————————————————————————————————————–');
        for (d of walk_require_statements({
          source: 'require("xxx");'
        })) {
          info('Ωkvrt_111', d);
        }
        //.....................................................................................................
        whisper('————————————————————————————————————–');
        for (d of walk_require_statements({
          source: 'require("xxx") // semver: 5.6.7'
        })) {
          urge('Ωkvrt_112', d);
        }
        //.....................................................................................................
        whisper('————————————————————————————————————–');
        for (token of walk_js_tokens('require("xxx"); // semver: 5.6.7')) {
          help('Ωkvrt_113', token);
        }
        //.....................................................................................................
        whisper('————————————————————————————————————–');
        results = [];
        for (d of walk_require_statements({
          source: 'require("xxx"); // semver: 5.6.7'
        })) {
          results.push(info('Ωkvrt_114', d));
        }
        return results;
      })();
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  demo_improved_structure = function() {
    var DIS;
    help('Ωkvrt_196', require('../../../apps/bricabrac-sfmodules'));
    DIS = require('../../../apps/bricabrac-sfmodules/lib/_demo-improved-structure');
    help('Ωkvrt_197', DIS);
    DIS.demo_attached();
    return null;
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
      // ( new Test guytest_cfg ).test { require_get_local_destinations: @tasks.require_get_local_destinations, }
      // ( new Test guytest_cfg ).test { require_walk_js_tokens: @tasks.require_walk_js_tokens, }
      return (new Test(guytest_cfg)).test({
        require_parse_require_statements: this.tasks.require_parse_require_statements
      });
    })();
  }

  // ( new Test guytest_cfg ).test { require_jetstream: @tasks.require_jetstream, }
// ( new Test guytest_cfg ).test { require_path_tools: @tasks.require_path_tools, }
// demo_improved_structure()

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtcmVxdWlyZS1zdGF0ZW1lbnQtcGFyc2luZy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSx1QkFBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBR0UsQ0FBQTs7SUFBQSxzQkFBQSxFQUF3QixRQUFBLENBQUEsQ0FBQTtBQUMxQixVQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsT0FBQSxFQUFBLHdCQUFBLEVBQUEsY0FBQSxFQUFBLFNBQUEsRUFBQTtNQUFJLFNBQUEsR0FBOEIsT0FBQSxD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ICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLXNmbW9kdWxlcy90ZXN0LWJhc2ljcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRhc2tzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfd2Fsa19qc190b2tlbnM6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgd2Fsa19qc190b2tlbnMsXG4gICAgICB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMsXG4gICAgICBzdW1tYXJpemUsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfd2Fsa19qc190b2tlbnMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlrdnJ0X182OSA9IC0+IHR5cGVfb2Ygd2Fsa19qc190b2tlbnMgICAgICAgICAgICApLCAnZ2VuZXJhdG9yZnVuY3Rpb24nXG4gICAgQGVxICggzqlrdnJ0X183MCA9IC0+IHR5cGVfb2Ygd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICApLCAnZ2VuZXJhdG9yZnVuY3Rpb24nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQGVxICggzqlrdnJ0X183MSA9IC0+IHR5cGVfb2Ygd2Fsa19qc190b2tlbnMgJycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdnZW5lcmF0b3InXG4gICAgICBAZXEgKCDOqWt2cnRfXzcyID0gLT4gWyAoIHdhbGtfanNfdG9rZW5zICcnICkuLi4sIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyB7IHR5cGU6ICdlb2YnLCB9LCBdXG4gICAgICBAZXEgKCDOqWt2cnRfXzczID0gLT4gc3VtbWFyaXplIHdhbGtfanNfdG9rZW5zICAgICAgICAgICAgJ3ZhciBhID0gOTsnICAgICAgICAgICAgICAgICAgKSwgXCImJiZJZGVudGlmaWVyTmFtZSd2YXInJiYmV2hpdGVTcGFjZScgJyYmJklkZW50aWZpZXJOYW1lJ2EnJiYmV2hpdGVTcGFjZScgJyYmJlB1bmN0dWF0b3InPScmJiZXaGl0ZVNwYWNlJyAnJiYmTnVtZXJpY0xpdGVyYWwnOScmJiZQdW5jdHVhdG9yJzsnJiYmZW9mJiYmXCJcbiAgICAgIEBlcSAoIM6pa3ZydF9fNzQgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICAndmFyIGEgPSA5OycgICAgICAgICAgICAgICAgICApLCBcIiYmJklkZW50aWZpZXJOYW1lJ3ZhcicmJiZJZGVudGlmaWVyTmFtZSdhJyYmJlB1bmN0dWF0b3InPScmJiZOdW1lcmljTGl0ZXJhbCc5JyYmJlB1bmN0dWF0b3InOycmJiZlb2YmJiZcIlxuICAgICAgQGVxICggzqlrdnJ0X183NSA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgICdcInlcIicgICAgICAgICAgICAgICAgICAgICAgICAgKSwgXCJcIlwiJiYmU3RyaW5nTGl0ZXJhbCdcInlcIicmJiZlb2YmJiZcIlwiXCJcbiAgICAgIEBlcSAoIM6pa3ZydF9fNzYgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcIid5J1wiICAgICAgICAgICAgICAgICAgICAgICAgICksIFwiJiYmU3RyaW5nTGl0ZXJhbCdcXFxcJ3lcXFxcJycmJiZlb2YmJiZcIlxuICAgICAgQGVxICggzqlrdnJ0X183NyA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwiYEEkeyd5J31aYFwiICAgICAgICAgICAgICAgICAgKSwgXCImJiZUZW1wbGF0ZUhlYWQnYEEkeycmJiZTdHJpbmdMaXRlcmFsJ1xcXFwneVxcXFwnJyYmJlRlbXBsYXRlVGFpbCd9WmAnJiYmZW9mJiYmXCJcbiAgICAgIEBlcSAoIM6pa3ZydF9fNzggPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcImZgQSR7J3knfVpgXCIgICAgICAgICAgICAgICAgICksIFwiJiYmSWRlbnRpZmllck5hbWUnZicmJiZUZW1wbGF0ZUhlYWQnYEEkeycmJiZTdHJpbmdMaXRlcmFsJ1xcXFwneVxcXFwnJyYmJlRlbXBsYXRlVGFpbCd9WmAnJiYmZW9mJiYmXCJcbiAgICAgIEBlcSAoIM6pa3ZydF9fNzkgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcImBBJHtgeWB9WmBcIiAgICAgICAgICAgICAgICAgICksIFwiJiYmVGVtcGxhdGVIZWFkJ2BBJHsnJiYmTm9TdWJzdGl0dXRpb25UZW1wbGF0ZSdgeWAnJiYmVGVtcGxhdGVUYWlsJ31aYCcmJiZlb2YmJiZcIlxuICAgICAgQGVxICggzqlrdnJ0X184MCA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwiYEEke3JlcXVpcmUoYHlgKX1aYFwiICAgICAgICAgKSwgXCImJiZUZW1wbGF0ZUhlYWQnYEEkeycmJiZJZGVudGlmaWVyTmFtZSdyZXF1aXJlJyYmJlB1bmN0dWF0b3InKCcmJiZOb1N1YnN0aXR1dGlvblRlbXBsYXRlJ2B5YCcmJiZQdW5jdHVhdG9yJyknJiYmVGVtcGxhdGVUYWlsJ31aYCcmJiZlb2YmJiZcIlxuICAgICAgQGVxICggzqlrdnJ0X184MSA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwicmVxdWlyZSA9IDc3N1wiICAgICAgICAgICAgICAgKSwgXCImJiZJZGVudGlmaWVyTmFtZSdyZXF1aXJlJyYmJlB1bmN0dWF0b3InPScmJiZOdW1lcmljTGl0ZXJhbCc3NzcnJiYmZW9mJiYmXCJcbiAgICAgIEBlcSAoIM6pa3ZydF9fODIgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcInJlcXVpcmUgPSA3NzcgLy8gZm9vOiBiYXJcIiAgICksIFwiJiYmSWRlbnRpZmllck5hbWUncmVxdWlyZScmJiZQdW5jdHVhdG9yJz0nJiYmTnVtZXJpY0xpdGVyYWwnNzc3JyYmJmVvZiYmJlwiXG4gICAgICBAZXEgKCDOqWt2cnRfXzgzID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJyZXF1aXJlID0gNzc3OyAvLyBmb286IGJhclwiICApLCBcIiYmJklkZW50aWZpZXJOYW1lJ3JlcXVpcmUnJiYmUHVuY3R1YXRvcic9JyYmJk51bWVyaWNMaXRlcmFsJzc3NycmJiZQdW5jdHVhdG9yJzsnJiYmZW9mJiYmXCJcbiAgICAgICMgQGVxICggzqlrdnJ0X184NCA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwidHJ1ZVwiICAgICAgICAgICAgICAgICksIG51bGxcbiAgICAgICMgQGVxICggzqlrdnJ0X184NSA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwiZmFsc2VcIiAgICAgICAgICAgICAgICksIG51bGxcbiAgICAgICMgQGVxICggzqlrdnJ0X184NiA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwidW5kZWZpbmVkXCIgICAgICAgICAgICksIG51bGxcbiAgICAgICMgQGVxICggzqlrdnJ0X184NyA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwibnVsbFwiICAgICAgICAgICAgICAgICksIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc291cmNlID0gXCJjb25zdCB7IGQsIH0gPSByZXF1aXJlKCAnc29tZS1tb2R1bGUnICk7IC8qIHJlcXVpcmUoICdvdGhlci1tb2R1bGUnICkgKi9cIlxuICAgICAgZm9yIHRva2VuIGZyb20gd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zIHNvdXJjZVxuICAgICAgICBpbmZvICfOqWt2cnRfXzg4JywgZlwiI3t0b2tlbi50eXBlfTo+MjBjOyAje3JwciB0b2tlbi52YWx1ZX1cIlxuICAgICAgQGVxICggzqlrdnJ0X184OSA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgc291cmNlICksIFwiJiYmSWRlbnRpZmllck5hbWUnY29uc3QnJiYmUHVuY3R1YXRvcid7JyYmJklkZW50aWZpZXJOYW1lJ2QnJiYmUHVuY3R1YXRvcicsJyYmJlB1bmN0dWF0b3InfScmJiZQdW5jdHVhdG9yJz0nJiYmSWRlbnRpZmllck5hbWUncmVxdWlyZScmJiZQdW5jdHVhdG9yJygnJiYmU3RyaW5nTGl0ZXJhbCdcXFxcJ3NvbWUtbW9kdWxlXFxcXCcnJiYmUHVuY3R1YXRvcicpJyYmJlB1bmN0dWF0b3InOycmJiZlb2YmJiZcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfcGFyc2VfcmVxdWlyZV9zdGF0ZW1lbnRzOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cywgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9wYXJzZV9yZXF1aXJlX3N0YXRlbWVudHMoKVxuICAgIHsgd2Fsa19qc190b2tlbnMsXG4gICAgICB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMsXG4gICAgICBzdW1tYXJpemUsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV93YWxrX2pzX3Rva2VucygpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgRlMgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlrdnJ0X185MCA9IC0+IHR5cGVfb2Ygd2Fsa19yZXF1aXJlX3N0YXRlbWVudHMgKSwgJ2Z1bmN0aW9uJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHBhdGggICAgICAgICAgPSBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4vYXNzZXRzL2JyaWNhYnJhYy9wYXJzZS1yZXF1aXJlLXN0YXRlbWVudHMvdGVzdC1iYXNpY3MuanMnXG4gICAgICB3b3VsZGJlX3BhdGggID0gX19maWxlbmFtZVxuICAgICAgc291cmNlICAgICAgICA9ICggRlMucmVhZEZpbGVTeW5jIHBhdGgsIHsgZW5jb2Rpbmc6ICd1dGYtOCcsIH0gKVxuICAgICAgIyBmb3IgZCBmcm9tIHdhbGtfcmVxdWlyZV9zdGF0ZW1lbnRzIHBhdGhcbiAgICAgICMgICBkZWJ1ZyAnzqlrdnJ0X185MScsIGRcbiAgICAgIHRva2VucyAgICAgICAgPSB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cyB7IHBhdGg6IHdvdWxkYmVfcGF0aCwgc291cmNlLCB9XG4gICAgICBAZXEgKCDOqWt2cnRfXzkyID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogNSwgZGlzcG9zaXRpb246ICducG0nLCBzZWxlY3RvcjogJ2d1eScsIGFubm90YXRpb246ICdzZW12ZXI6MC4zLjQnLCB9XG4gICAgICBAZXEgKCDOqWt2cnRfXzkzID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMTIsIGRpc3Bvc2l0aW9uOiAnaW5zaWRlJywgc2VsZWN0b3I6ICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgQGVxICggzqlrdnJ0X185NCA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDE2LCBkaXNwb3NpdGlvbjogJ2luc2lkZScsIHNlbGVjdG9yOiAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICBAZXEgKCDOqWt2cnRfXzk1ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMjUsIGRpc3Bvc2l0aW9uOiAnaW5zaWRlJywgc2VsZWN0b3I6ICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICBAZXEgKCDOqWt2cnRfXzk2ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMTYyLCBkaXNwb3NpdGlvbjogJ2luc2lkZScsIHNlbGVjdG9yOiAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgQGVxICggzqlrdnJ0X185NyA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDE2NSwgZGlzcG9zaXRpb246ICdub2RlJywgc2VsZWN0b3I6ICdub2RlOnBhdGgnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICBAZXEgKCDOqWt2cnRfXzk4ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMTY2LCBkaXNwb3NpdGlvbjogJ25vZGUnLCBzZWxlY3RvcjogJ25vZGU6b3MnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICBAZXEgKCDOqWt2cnRfXzk5ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMTY3LCBkaXNwb3NpdGlvbjogJ25vZGUnLCBzZWxlY3RvcjogJ25vZGU6ZnMnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICBAZXEgKCDOqWt2cnRfMTAwID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMzk5LCBkaXNwb3NpdGlvbjogJ2luc2lkZScsIHNlbGVjdG9yOiAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgQGVxICggzqlrdnJ0XzEwMSA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDQ2NSwgZGlzcG9zaXRpb246ICdub2RlJywgc2VsZWN0b3I6ICdub2RlOmZzJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgQGVxICggzqlrdnJ0XzEwMiA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDQ2NiwgZGlzcG9zaXRpb246ICdpbnNpZGUnLCBzZWxlY3RvcjogJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgIEBlcSAoIM6pa3ZydF8xMDMgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3dhcm5pbmcnLCBtZXNzYWdlOiBcImlnbm9yaW5nIHBvc3NpYmxlIGByZXF1aXJlYCBvbiBsaW5lIDU1NDogJyAgICAgICAgcmVxdWlyZTsnXCIsIGxpbmU6ICcgICAgICAgIHJlcXVpcmU7JywgbGluZV9ucjogNTU0IH1cbiAgICAgIEBlcSAoIM6pa3ZydF8xMDQgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3dhcm5pbmcnLCBtZXNzYWdlOiBcImlnbm9yaW5nIHBvc3NpYmxlIGByZXF1aXJlYCBvbiBsaW5lIDU1NTogJyAgICAgICAgcmVxdWlyZSh0cnVlKTsnXCIsIGxpbmU6ICcgICAgICAgIHJlcXVpcmUodHJ1ZSk7JywgbGluZV9ucjogNTU1IH1cbiAgICAgIEBlcSAoIM6pa3ZydF8xMDUgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiA1NTYsIGRpc3Bvc2l0aW9uOiAnbnBtJywgc2VsZWN0b3I6ICdwa2cjMScsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgIEBlcSAoIM6pa3ZydF8xMDYgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiA1NTcsIGRpc3Bvc2l0aW9uOiAnbnBtJywgc2VsZWN0b3I6ICdwa2cjMicsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgIEBlcSAoIM6pa3ZydF8xMDcgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3dhcm5pbmcnLCBtZXNzYWdlOiBcImlnbm9yaW5nIHBvc3NpYmxlIGByZXF1aXJlYCBvbiBsaW5lIDU1ODogJyAgICAgICAgcmV0dXJuIHJlcXVpcmUoIGBwa2cjM2AgKyBcXFxcJ3N1ZmZpeFxcXFwnICk7J1wiLCBsaW5lOiBcIiAgICAgICAgcmV0dXJuIHJlcXVpcmUoIGBwa2cjM2AgKyAnc3VmZml4JyApO1wiLCBsaW5lX25yOiA1NTggfVxuICAgICAgQGVxICggzqlrdnJ0XzEwOCA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDU2NiwgZGlzcG9zaXRpb246ICdpbnNpZGUnLCBzZWxlY3RvcjogJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgIEBlcSAoIM6pa3ZydF8xMDkgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3dhcm5pbmcnLCBtZXNzYWdlOiBcImlnbm9yaW5nIHBvc3NpYmxlIGByZXF1aXJlYCBvbiBsaW5lIDYwMjogJyAgaWYgKG1vZHVsZSA9PT0gcmVxdWlyZS5tYWluKSB7J1wiLCBsaW5lOiAnICBpZiAobW9kdWxlID09PSByZXF1aXJlLm1haW4pIHsnLCBsaW5lX25yOiA2MDIgfVxuICAgICAgQGVxICggzqlrdnJ0XzExMCA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDYyNiwgZGlzcG9zaXRpb246ICdvdXRzaWRlJywgc2VsZWN0b3I6ICcuLi8uLi8uLi8uLi93aGF0ZXZlcicsIGFubm90YXRpb246IG51bGwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTJ1xuICAgICAgZm9yIGQgZnJvbSB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cyB7IHNvdXJjZTogJ3JlcXVpcmUoXCJ4eHhcIik7JywgfVxuICAgICAgICBpbmZvICfOqWt2cnRfMTExJywgZFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICBmb3IgZCBmcm9tIHdhbGtfcmVxdWlyZV9zdGF0ZW1lbnRzIHsgc291cmNlOiAncmVxdWlyZShcInh4eFwiKSAvLyBzZW12ZXI6IDUuNi43JywgfVxuICAgICAgICB1cmdlICfOqWt2cnRfMTEyJywgZFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICBmb3IgdG9rZW4gZnJvbSB3YWxrX2pzX3Rva2VucyAncmVxdWlyZShcInh4eFwiKTsgLy8gc2VtdmVyOiA1LjYuNydcbiAgICAgICAgaGVscCAnzqlrdnJ0XzExMycsIHRva2VuXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgIGZvciBkIGZyb20gd2Fsa19yZXF1aXJlX3N0YXRlbWVudHMgeyBzb3VyY2U6ICdyZXF1aXJlKFwieHh4XCIpOyAvLyBzZW12ZXI6IDUuNi43JywgfVxuICAgICAgICBpbmZvICfOqWt2cnRfMTE0JywgZFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9faW1wcm92ZWRfc3RydWN0dXJlID0gLT5cbiAgaGVscCAnzqlrdnJ0XzE5NicsIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgRElTID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9fZGVtby1pbXByb3ZlZC1zdHJ1Y3R1cmUnXG4gIGhlbHAgJ86pa3ZydF8xOTcnLCBESVNcbiAgRElTLmRlbW9fYXR0YWNoZWQoKVxuICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEB0YXNrc1xuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9nZXRfbG9jYWxfZGVzdGluYXRpb25zOiBAdGFza3MucmVxdWlyZV9nZXRfbG9jYWxfZGVzdGluYXRpb25zLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyByZXF1aXJlX3dhbGtfanNfdG9rZW5zOiBAdGFza3MucmVxdWlyZV93YWxrX2pzX3Rva2VucywgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfcGFyc2VfcmVxdWlyZV9zdGF0ZW1lbnRzOiBAdGFza3MucmVxdWlyZV9wYXJzZV9yZXF1aXJlX3N0YXRlbWVudHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfamV0c3RyZWFtOiBAdGFza3MucmVxdWlyZV9qZXRzdHJlYW0sIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfcGF0aF90b29sczogQHRhc2tzLnJlcXVpcmVfcGF0aF90b29scywgfVxuICAjIGRlbW9faW1wcm92ZWRfc3RydWN0dXJlKCkiXX0=
