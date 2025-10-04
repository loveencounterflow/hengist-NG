(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');//semver:0.3.4

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
    require_dictionary_tools: function() {
      var SFMODULES, expand_dictionary, get_local_destinations, type_of, Ωkvr___1;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({expand_dictionary} = SFMODULES.require_dictionary_tools());
      ({get_local_destinations} = SFMODULES.require_get_local_destinations());
      //.....................................................................................................
      this.eq((Ωkvr___1 = function() {
        return type_of(expand_dictionary);
      }), 'function');
      (() => {
        var expanded, matcher, strings, strings_copy, Ωkvr___2, Ωkvr___3, Ωkvr___4;
        strings = {
          '${greet}': "Hello ${who}",
          '${who}': "dear ${target}",
          '${target}': "world"
        };
        matcher = {
          '${greet}': "Hello dear world",
          '${who}': "dear world",
          '${target}': "world"
        };
        strings_copy = {...strings};
        expanded = expand_dictionary(strings);
        this.eq((Ωkvr___2 = function() {
          return strings;
        }), strings_copy);
        this.eq((Ωkvr___3 = function() {
          return expanded;
        }), matcher);
        this.eq((Ωkvr___4 = function() {
          return expanded === strings;
        }), false);
        return null;
      })();
      (() => {        //.....................................................................................................
        var strings, strings_copy, Ωkvr___5, Ωkvr___6;
        strings = {
          '${greet}': "Hello ${who}",
          '${who}': "dear ${target}",
          '${target}': "world ${greet}"
        };
        strings_copy = {...strings};
        this.throws((Ωkvr___5 = function() {
          return expand_dictionary(strings);
        }), /cyclic reference detected for \$\{greet\}/);
        this.eq((Ωkvr___6 = function() {
          return strings;
        }), strings_copy);
        return null;
      })();
      (() => {        //.....................................................................................................
        var key, ref, strings, value;
        strings = {
          '/(user)/': "/Alice/",
          '(schema)//': "https://",
          '(server)/': "(schema)//example.com/",
          '(folder)': "(server)/(user)/data",
          '::file::': "(folder)/file.txt"
        };
        ref = expand_dictionary(strings);
        for (key in ref) {
          value = ref[key];
          debug('Ωkvr___7', f`${key}:<20c; ${rpr(value)}`);
        }
        return null;
      })();
      (() => {        //.....................................................................................................
        var _bricabrac_compiled_json, bricabrac_json, key, pattern_key, pattern_value, ref, ref1, ref2, ref3, result, source_spec, target_path, value, Ωkvr__10, Ωkvr__11, Ωkvr__12, Ωkvr___9;
        bricabrac_json = {
          "strings": {
            "(gh)": "https://raw.githubusercontent.com",
            "(flow)/": "(gh)/loveencounterflow/",
            "(sfmodules)": "(flow)/bricabrac-sfmodules/refs/heads/main/src"
          },
          "mappings": {
            "a": "--(gh)--",
            "b": "--(flow)/--",
            "c": "--(sfmodules)--",
            "d": "~/--(sfmodules)--"
          }
        };
        _bricabrac_compiled_json = {
          "strings": {
            "(gh)": "https://raw.githubusercontent.com",
            "(flow)/": "https://raw.githubusercontent.com/loveencounterflow/",
            "(sfmodules)": "https://raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/refs/heads/main/src"
          },
          "mappings": {
            "a": "--https://raw.githubusercontent.com--",
            "b": "--https://raw.githubusercontent.com/loveencounterflow/--",
            "c": "--https://raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/refs/heads/main/src--",
            "d": "~/--https://raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/refs/heads/main/src--"
          }
        };
        //...................................................................................................
        result = {};
        result.strings = expand_dictionary(bricabrac_json.strings);
        result.mappings = {};
        ref = bricabrac_json.mappings;
        for (target_path in ref) {
          source_spec = ref[target_path];
          result.mappings[target_path] = source_spec;
          ref1 = result.strings;
          for (pattern_key in ref1) {
            pattern_value = ref1[pattern_key];
            result.mappings[target_path] = result.mappings[target_path].replaceAll(pattern_key, pattern_value);
          }
        }
        // debug 'Ωkvr___8', result
        this.eq((Ωkvr___9 = function() {
          return false;
        }), "resolve home directory with os.homedir() / local-destination.brics");
        this.eq((Ωkvr__10 = function() {
          return Object.keys(result);
        }), Object.keys(_bricabrac_compiled_json));
        ref2 = result.strings;
        for (key in ref2) {
          value = ref2[key];
          this.eq((Ωkvr__11 = function() {
            return value;
          }), _bricabrac_compiled_json.strings[key]);
        }
        ref3 = result.mappings;
        for (key in ref3) {
          value = ref3[key];
          this.eq((Ωkvr__12 = function() {
            return value;
          }), _bricabrac_compiled_json.mappings[key]);
        }
        // debug 'Ωkvr__13', ( get_local_destinations null ).home
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    require_get_local_destinations: function() {
      var FS, OS, PATH, SFMODULES, get_local_destinations, type_of, Ωkvr__14;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({get_local_destinations} = SFMODULES.require_get_local_destinations());
      PATH = require('node:path');
      OS = require('node:os');
      FS = require('node:fs');
      //.....................................................................................................
      // {
      //   app: {
      //     name: 'my-app-name',
      //     data: '/home/flow/.local/share/my-app-name',
      //     config: '/home/flow/.config/my-app-name',
      //     cache: '/home/flow/.cache/my-app-name',
      //     log: '/home/flow/.local/state/my-app-name',
      //     temp: '/tmp/flow/my-app-name',
      //     home: '/home/flow/my-app-name',
      //     node_modules: '/home/flow/my-app-name/node_modules',
      //     dep_bin: '/home/flow/my-app-name/node_modules/.bin',
      //     own_bin: '/home/flow/my-app-name/bin'
      //   },
      //   user: { name: 'flow', home: '/home/flow', temp: '/tmp' }
      // }
      //.....................................................................................................
      this.eq((Ωkvr__14 = function() {
        return type_of(get_local_destinations);
      }), 'function');
      (() => {        //.....................................................................................................
        var app_name, dst, home, temp, user_nfo, Ωgld__15, Ωgld__16, Ωgld__17, Ωgld__18, Ωgld__19, Ωgld__20, Ωgld__21, Ωgld__22, Ωgld__23, Ωgld__24, Ωgld__25, Ωgld__26, Ωgld__27, Ωgld__28, Ωgld__29, Ωgld__30, Ωgld__31, Ωgld__32;
        app_name = 'my-app-name';
        dst = get_local_destinations({app_name});
        user_nfo = OS.userInfo();
        home = FS.realpathSync(OS.homedir());
        temp = FS.realpathSync(OS.tmpdir());
        //...................................................................................................
        this.eq((Ωgld__15 = function() {
          return (Object.keys(dst)).sort();
        }), ['app', 'user']);
        this.eq((Ωgld__16 = function() {
          return (Object.keys(dst.app)).sort();
        }), ['cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp']);
        this.eq((Ωgld__17 = function() {
          return (Object.keys(dst.user)).sort();
        }), ['home', 'name', 'temp']);
        //...................................................................................................
        this.eq((Ωgld__18 = function() {
          return type_of(dst.app);
        }), 'pod');
        this.eq((Ωgld__19 = function() {
          return type_of(dst.user);
        }), 'pod');
        //...................................................................................................
        this.eq((Ωgld__20 = function() {
          return PATH.basename(dst.app.cache);
        }), app_name);
        this.eq((Ωgld__21 = function() {
          return PATH.basename(dst.app.config);
        }), app_name);
        this.eq((Ωgld__22 = function() {
          return PATH.basename(dst.app.data);
        }), app_name);
        this.eq((Ωgld__23 = function() {
          return dst.app.dep_bin;
        }), PATH.resolve(home, app_name, 'node_modules', '.bin'));
        this.eq((Ωgld__24 = function() {
          return dst.app.home;
        }), PATH.resolve(home, app_name));
        this.eq((Ωgld__25 = function() {
          return PATH.basename(dst.app.log);
        }), app_name);
        this.eq((Ωgld__26 = function() {
          return dst.app.name;
        }), app_name);
        this.eq((Ωgld__27 = function() {
          return dst.app.node_modules;
        }), PATH.resolve(home, app_name, 'node_modules'));
        this.eq((Ωgld__28 = function() {
          return dst.app.own_bin;
        }), PATH.resolve(home, app_name, 'bin'));
        this.eq((Ωgld__29 = function() {
          return dst.app.temp;
        }), PATH.resolve(dst.user.temp, dst.user.name, app_name));
        //...................................................................................................
        this.eq((Ωgld__30 = function() {
          return dst.user.home;
        }), home);
        this.eq((Ωgld__31 = function() {
          return dst.user.name;
        }), user_nfo.username);
        this.eq((Ωgld__32 = function() {
          return dst.user.temp;
        }), temp);
        //...................................................................................................
        return null;
      })();
      (() => {        //.....................................................................................................
        var app_name, dst, home, temp, user_nfo, Ωgld__33, Ωgld__34, Ωgld__35, Ωgld__36, Ωgld__37, Ωgld__38, Ωgld__39, Ωgld__40, Ωgld__41, Ωgld__42, Ωgld__43, Ωgld__44, Ωgld__45, Ωgld__46, Ωgld__47, Ωgld__48, Ωgld__49, Ωgld__50;
        app_name = null;
        dst = get_local_destinations({app_name});
        user_nfo = OS.userInfo();
        home = FS.realpathSync(OS.homedir());
        temp = FS.realpathSync(OS.tmpdir());
        //...................................................................................................
        this.eq((Ωgld__33 = function() {
          return (Object.keys(dst)).sort();
        }), ['app', 'user']);
        this.eq((Ωgld__34 = function() {
          return (Object.keys(dst.app)).sort();
        }), ['cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp']);
        this.eq((Ωgld__35 = function() {
          return (Object.keys(dst.user)).sort();
        }), ['home', 'name', 'temp']);
        //...................................................................................................
        this.eq((Ωgld__36 = function() {
          return type_of(dst.app);
        }), 'pod');
        this.eq((Ωgld__37 = function() {
          return type_of(dst.user);
        }), 'pod');
        //...................................................................................................
        this.eq((Ωgld__38 = function() {
          return PATH.basename(dst.app.cache);
        }), '<YOUR-APP-NAME-HERE>');
        this.eq((Ωgld__39 = function() {
          return PATH.basename(dst.app.config);
        }), '<YOUR-APP-NAME-HERE>');
        this.eq((Ωgld__40 = function() {
          return PATH.basename(dst.app.data);
        }), '<YOUR-APP-NAME-HERE>');
        this.eq((Ωgld__41 = function() {
          return dst.app.dep_bin;
        }), PATH.resolve(home, '<YOUR-APP-NAME-HERE>', 'node_modules', '.bin'));
        this.eq((Ωgld__42 = function() {
          return dst.app.home;
        }), PATH.resolve(home, '<YOUR-APP-NAME-HERE>'));
        this.eq((Ωgld__43 = function() {
          return PATH.basename(dst.app.log);
        }), '<YOUR-APP-NAME-HERE>');
        this.eq((Ωgld__44 = function() {
          return dst.app.name;
        }), '<YOUR-APP-NAME-HERE>');
        this.eq((Ωgld__45 = function() {
          return dst.app.node_modules;
        }), PATH.resolve(home, '<YOUR-APP-NAME-HERE>', 'node_modules'));
        this.eq((Ωgld__46 = function() {
          return dst.app.own_bin;
        }), PATH.resolve(home, '<YOUR-APP-NAME-HERE>', 'bin'));
        this.eq((Ωgld__47 = function() {
          return dst.app.temp;
        }), PATH.resolve(dst.user.temp, dst.user.name, '<YOUR-APP-NAME-HERE>'));
        //...................................................................................................
        this.eq((Ωgld__48 = function() {
          return dst.user.home;
        }), home);
        this.eq((Ωgld__49 = function() {
          return dst.user.name;
        }), user_nfo.username);
        this.eq((Ωgld__50 = function() {
          return dst.user.temp;
        }), temp);
        //...................................................................................................
        return null;
      })();
      (() => {        //.....................................................................................................
        var app_home, app_name, dst, home, temp, user_nfo, Ωgld__51, Ωgld__52, Ωgld__53, Ωgld__54, Ωgld__55, Ωgld__56, Ωgld__57, Ωgld__58, Ωgld__59, Ωgld__60, Ωgld__61, Ωgld__62, Ωgld__63, Ωgld__64, Ωgld__65, Ωgld__66, Ωgld__67, Ωgld__68;
        app_name = 'frobulator';
        app_home = '/path/to/projects';
        dst = get_local_destinations({app_name, app_home});
        user_nfo = OS.userInfo();
        home = FS.realpathSync(OS.homedir());
        temp = FS.realpathSync(OS.tmpdir());
        //...................................................................................................
        this.eq((Ωgld__51 = function() {
          return (Object.keys(dst)).sort();
        }), ['app', 'user']);
        this.eq((Ωgld__52 = function() {
          return (Object.keys(dst.app)).sort();
        }), ['cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp']);
        this.eq((Ωgld__53 = function() {
          return (Object.keys(dst.user)).sort();
        }), ['home', 'name', 'temp']);
        //...................................................................................................
        this.eq((Ωgld__54 = function() {
          return type_of(dst.app);
        }), 'pod');
        this.eq((Ωgld__55 = function() {
          return type_of(dst.user);
        }), 'pod');
        //...................................................................................................
        this.eq((Ωgld__56 = function() {
          return PATH.basename(dst.app.cache);
        }), app_name);
        this.eq((Ωgld__57 = function() {
          return PATH.basename(dst.app.config);
        }), app_name);
        this.eq((Ωgld__58 = function() {
          return PATH.basename(dst.app.data);
        }), app_name);
        this.eq((Ωgld__59 = function() {
          return dst.app.dep_bin;
        }), PATH.resolve(home, app_home, app_name, 'node_modules', '.bin'));
        this.eq((Ωgld__60 = function() {
          return dst.app.home;
        }), PATH.resolve(home, app_home, app_name));
        this.eq((Ωgld__61 = function() {
          return PATH.basename(dst.app.log);
        }), app_name);
        this.eq((Ωgld__62 = function() {
          return dst.app.name;
        }), app_name);
        this.eq((Ωgld__63 = function() {
          return dst.app.node_modules;
        }), PATH.resolve(home, app_home, app_name, 'node_modules'));
        this.eq((Ωgld__64 = function() {
          return dst.app.own_bin;
        }), PATH.resolve(home, app_home, app_name, 'bin'));
        this.eq((Ωgld__65 = function() {
          return dst.app.temp;
        }), PATH.resolve(dst.user.temp, dst.user.name, app_name));
        //...................................................................................................
        this.eq((Ωgld__66 = function() {
          return dst.user.home;
        }), home);
        this.eq((Ωgld__67 = function() {
          return dst.user.name;
        }), user_nfo.username);
        this.eq((Ωgld__68 = function() {
          return dst.user.temp;
        }), temp);
        //...................................................................................................
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    require_walk_js_tokens: function() {
      var SFMODULES, summarize, type_of, walk_essential_js_tokens, walk_js_tokens, Ωkvr__69, Ωkvr__70;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({walk_js_tokens, walk_essential_js_tokens, summarize} = SFMODULES.require_walk_js_tokens());
      //.....................................................................................................
      this.eq((Ωkvr__69 = function() {
        return type_of(walk_js_tokens);
      }), 'generatorfunction');
      this.eq((Ωkvr__70 = function() {
        return type_of(walk_essential_js_tokens);
      }), 'generatorfunction');
      (() => {        //.....................................................................................................
        var source, token, Ωgld__71, Ωgld__72, Ωgld__73, Ωgld__74, Ωgld__75, Ωgld__76, Ωgld__77, Ωgld__78, Ωgld__79, Ωgld__80, Ωgld__81, Ωgld__87;
        this.eq((Ωgld__71 = function() {
          return type_of(walk_js_tokens(''));
        }), 'generator');
        this.eq((Ωgld__72 = function() {
          return [...(walk_js_tokens(''))];
        }), []);
        this.eq((Ωgld__73 = function() {
          return summarize(walk_js_tokens('var a = 9;'));
        }), "&&&IdentifierName'var'&&&WhiteSpace' '&&&IdentifierName'a'&&&WhiteSpace' '&&&Punctuator'='&&&WhiteSpace' '&&&NumericLiteral'9'&&&Punctuator';'&&&");
        this.eq((Ωgld__74 = function() {
          return summarize(walk_essential_js_tokens('var a = 9;'));
        }), "&&&IdentifierName'var'&&&IdentifierName'a'&&&Punctuator'='&&&NumericLiteral'9'&&&Punctuator';'&&&");
        this.eq((Ωgld__75 = function() {
          return summarize(walk_essential_js_tokens('"y"'));
        }), `&&&StringLiteral'"y"'&&&`);
        this.eq((Ωgld__76 = function() {
          return summarize(walk_essential_js_tokens("'y'"));
        }), "&&&StringLiteral'\\'y\\''&&&");
        this.eq((Ωgld__77 = function() {
          return summarize(walk_essential_js_tokens("`A${'y'}Z`"));
        }), "&&&TemplateHead'`A${'&&&StringLiteral'\\'y\\''&&&TemplateTail'}Z`'&&&");
        this.eq((Ωgld__78 = function() {
          return summarize(walk_essential_js_tokens("f`A${'y'}Z`"));
        }), "&&&IdentifierName'f'&&&TemplateHead'`A${'&&&StringLiteral'\\'y\\''&&&TemplateTail'}Z`'&&&");
        this.eq((Ωgld__79 = function() {
          return summarize(walk_essential_js_tokens("`A${`y`}Z`"));
        }), "&&&TemplateHead'`A${'&&&NoSubstitutionTemplate'`y`'&&&TemplateTail'}Z`'&&&");
        this.eq((Ωgld__80 = function() {
          return summarize(walk_essential_js_tokens("`A${require(`y`)}Z`"));
        }), "&&&TemplateHead'`A${'&&&IdentifierName'require'&&&Punctuator'('&&&NoSubstitutionTemplate'`y`'&&&Punctuator')'&&&TemplateTail'}Z`'&&&");
        this.eq((Ωgld__81 = function() {
          return summarize(walk_essential_js_tokens("require = 777"));
        }), "&&&IdentifierName'require'&&&Punctuator'='&&&NumericLiteral'777'&&&");
        // @eq ( Ωgld__82 = -> summarize walk_essential_js_tokens  "true"                ), null
        // @eq ( Ωgld__83 = -> summarize walk_essential_js_tokens  "false"               ), null
        // @eq ( Ωgld__84 = -> summarize walk_essential_js_tokens  "undefined"           ), null
        // @eq ( Ωgld__85 = -> summarize walk_essential_js_tokens  "null"                ), null
        //...................................................................................................
        source = "const { d, } = require( 'some-module' ); /* require( 'other-module' ) */";
        for (token of walk_essential_js_tokens(source)) {
          info('Ωkvr__86', f`${token.type}:>20c; ${rpr(token.value)}`);
        }
        this.eq((Ωgld__87 = function() {
          return summarize(walk_essential_js_tokens(source));
        }), "&&&IdentifierName'const'&&&Punctuator'{'&&&IdentifierName'd'&&&Punctuator','&&&Punctuator'}'&&&Punctuator'='&&&IdentifierName'require'&&&Punctuator'('&&&StringLiteral'\\'some-module\\''&&&Punctuator')'&&&Punctuator';'&&&");
        //...................................................................................................
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    require_parse_require_statements: function() {
      var FS, SFMODULES, rpr_token, summarize, type_of, walk_essential_js_tokens, walk_js_tokens;
      FS = require('node:fs');
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({walk_js_tokens, walk_essential_js_tokens, rpr_token, summarize} = SFMODULES.require_walk_js_tokens());
      (() => {        //.....................................................................................................
        // @eq ( Ωkvr__88 = -> type_of walk_essential_js_tokens  ), 'generatorfunction'
        //.....................................................................................................
        var compile_warning, history, i, len, line_nr, lines, pkg_name, reset, source, token, warning, warnings;
        source = FS.readFileSync(__filename, {
          encoding: 'utf-8'
        });
        lines = null;
        //...................................................................................................
        warnings = [];
        history = 0;
        pkg_name = null;
        line_nr = null;
        //...................................................................................................
        reset = function() {
          history = 0;
          pkg_name = null;
          line_nr = null;
          return null;
        };
        //...................................................................................................
        compile_warning = function(token) {
          var line, message, ref;
          if (lines == null) {
            lines = [null, ...(source.split('\n'))];
          }
          line = (ref = lines[token.line_nr]) != null ? ref : "(ERROR: UNABLE TO RETRIEVE SOURCE)";
          return message = `Ωkvr__89 ignoring possible \`require\` on line ${token.line_nr}: ${rpr(line)}`;
        };
        for (token of walk_essential_js_tokens(source)) {
          // info 'Ωkvr__90', token
          //.................................................................................................
          switch (history) {
            //...............................................................................................
            case 0:
              if (!((token.type === 'IdentifierName') && (token.value === 'require'))) {
                reset();
                continue;
              }
              history = 1;
              line_nr = token.line_nr;
              break;
            //...............................................................................................
            case 1:
              if (!((token.type === 'Punctuator') && (token.value === '('))) {
                warn('Ωkvr__91', token);
                warnings.push(compile_warning(token));
                reset();
                continue;
              }
              history = 2;
              break;
            //...............................................................................................
            case 2:
              if (!(token.categories.has('string_literals'))) {
                warn('Ωkvr__92', token);
                warnings.push(compile_warning(token));
                reset();
                continue;
              }
              pkg_name = eval(token.value);
              history = 3;
              break;
            //...............................................................................................
            case 3:
              if (!((token.type === 'Punctuator') && (token.value === ')'))) {
                warn('Ωkvr__93', token);
                warnings.push(compile_warning(token));
                reset();
                continue;
              }
              debug('Ωkvr__94', `line ${line_nr} found require ${rpr(pkg_name)}`);
              reset();
          }
        }
        // @eq ( Ωgld__95 = -> summarize walk_essential_js_tokens source ), "&&&IdentifierName'const'&&&Punctuator'{'&&&IdentifierName'd'&&&Punctuator','&&&Punctuator'}'&&&Punctuator'='&&&IdentifierName'require'&&&Punctuator'('&&&StringLiteral'\\'some-module\\''&&&Punctuator')'&&&Punctuator';'&&&"
        if (warnings.length > 0) {
          warn("There have been warnings:");
          for (i = 0, len = warnings.length; i < len; i++) {
            warning = warnings[i];
            warn('Ωkvr__96', warning);
          }
        }
        //...................................................................................................
        return null;
        require;
        require(true);
        require('pkg#1');
        require( `pkg#2` );
        return require( `pkg#3` + 'suffix' );
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    require_rpr_string: function() {
      var SFMODULES, rpr_string, type_of, Ωkvr__97;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({rpr_string} = SFMODULES.require_rpr_string());
      //.....................................................................................................
      this.eq((Ωkvr__97 = function() {
        return type_of(rpr_string);
      }), 'function');
      (() => {        //.....................................................................................................
        var Ωgld_100, Ωgld_101, Ωgld_102, Ωgld_103, Ωgld__98, Ωgld__99;
        this.eq((Ωgld__98 = function() {
          return rpr_string('');
        }), `''`);
        this.eq((Ωgld__99 = function() {
          return rpr_string('"');
        }), `'"'`);
        this.eq((Ωgld_100 = function() {
          return rpr_string("'");
        }), `'\\''`);
        this.eq((Ωgld_101 = function() {
          return rpr_string('pop');
        }), `'pop'`);
        this.eq((Ωgld_102 = function() {
          return rpr_string('"pop"');
        }), `'"pop"'`);
        this.eq((Ωgld_103 = function() {
          return rpr_string("'pop'");
        }), `'\\'pop\\''`);
        //...................................................................................................
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
      // ( new Test guytest_cfg ).test { require_get_local_destinations: @tasks.require_get_local_destinations, }
      // ( new Test guytest_cfg ).test { require_walk_js_tokens: @tasks.require_walk_js_tokens, }
      return (new Test(guytest_cfg)).test({
        require_parse_require_statements: this.tasks.require_parse_require_statements
      });
    })();
  }

}).call(this);

require('../../../../whatever');


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBR0ksQ0FBQTs7SUFBQSx3QkFBQSxFQUEwQixRQUFBLENBQUEsQ0FBQTtBQUM5QixVQUFBLFNBQUEsRUFBQSxpQkFBQSxFQUFBLHNCQUFBLEVBQUEsT0FBQSxFQUFBO01BQU0sU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixTQUFTLENB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QSxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBQSxDQUFXLE9BQVg7UUFBSCxDQUFiLENBQUosRUFBMkMsQ0FBQSxPQUFBLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxVQUFBLENBQVcsT0FBWDtRQUFILENBQWIsQ0FBSixFQUEyQyxDQUFBLFdBQUEsQ0FBM0MsRUFMUjs7QUFPUSxlQUFPO01BUk4sQ0FBQSxJQU5UOztBQWdCTSxhQUFPO0lBakJXO0VBMVVwQixFQTlCSjs7O0VBK1hBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQTtNQUFFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsSUFBQyxDQUFBLEtBQS9CLEVBRkY7OzthQUtFLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxnQ0FBQSxFQUFrQyxJQUFDLENBQUEsS0FBSyxDQUFDO01BQTNDLENBQTlCO0lBTnNDLENBQUEsSUFBeEM7O0FBL1hBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtc2Ztb2R1bGVzL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGFza3MgPVxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX2RpY3Rpb25hcnlfdG9vbHM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgZXhwYW5kX2RpY3Rpb25hcnksICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2RpY3Rpb25hcnlfdG9vbHMoKVxuICAgICAgeyBnZXRfbG9jYWxfZGVzdGluYXRpb25zLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZyX19fMSA9IC0+IHR5cGVfb2YgZXhwYW5kX2RpY3Rpb25hcnkgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgZG8gPT5cbiAgICAgICAgc3RyaW5ncyA9XG4gICAgICAgICAgJyR7Z3JlZXR9JzogICBcIkhlbGxvICR7d2hvfVwiXG4gICAgICAgICAgJyR7d2hvfSc6ICAgICBcImRlYXIgJHt0YXJnZXR9XCJcbiAgICAgICAgICAnJHt0YXJnZXR9JzogIFwid29ybGRcIlxuICAgICAgICBtYXRjaGVyID1cbiAgICAgICAgICAnJHtncmVldH0nOiAgIFwiSGVsbG8gZGVhciB3b3JsZFwiXG4gICAgICAgICAgJyR7d2hvfSc6ICAgICBcImRlYXIgd29ybGRcIlxuICAgICAgICAgICcke3RhcmdldH0nOiAgXCJ3b3JsZFwiXG4gICAgICAgIHN0cmluZ3NfY29weSAgPSB7IHN0cmluZ3MuLi4sIH1cbiAgICAgICAgZXhwYW5kZWQgICAgICA9IGV4cGFuZF9kaWN0aW9uYXJ5IHN0cmluZ3NcbiAgICAgICAgQGVxICAgICAoIM6pa3ZyX19fMiA9IC0+IHN0cmluZ3MgICAgICAgICAgICAgKSwgc3RyaW5nc19jb3B5XG4gICAgICAgIEBlcSAgICAgKCDOqWt2cl9fXzMgPSAtPiBleHBhbmRlZCAgICAgICAgICAgICksIG1hdGNoZXJcbiAgICAgICAgQGVxICAgICAoIM6pa3ZyX19fNCA9IC0+IGV4cGFuZGVkIGlzIHN0cmluZ3MgKSwgZmFsc2VcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgc3RyaW5ncyA9XG4gICAgICAgICAgJyR7Z3JlZXR9JzogICBcIkhlbGxvICR7d2hvfVwiXG4gICAgICAgICAgJyR7d2hvfSc6ICAgICBcImRlYXIgJHt0YXJnZXR9XCJcbiAgICAgICAgICAnJHt0YXJnZXR9JzogIFwid29ybGQgJHtncmVldH1cIlxuICAgICAgICBzdHJpbmdzX2NvcHkgID0geyBzdHJpbmdzLi4uLCB9XG4gICAgICAgIEB0aHJvd3MgKCDOqWt2cl9fXzUgPSAtPiBleHBhbmRfZGljdGlvbmFyeSBzdHJpbmdzICksIC9jeWNsaWMgcmVmZXJlbmNlIGRldGVjdGVkIGZvciBcXCRcXHtncmVldFxcfS9cbiAgICAgICAgQGVxICAgICAoIM6pa3ZyX19fNiA9IC0+IHN0cmluZ3MgICAgICAgICAgICAgICAgICAgICAgICksIHN0cmluZ3NfY29weVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBzdHJpbmdzID1cbiAgICAgICAgICAnLyh1c2VyKS8nOiAgICAgXCIvQWxpY2UvXCJcbiAgICAgICAgICAnKHNjaGVtYSkvLyc6ICAgXCJodHRwczovL1wiXG4gICAgICAgICAgJyhzZXJ2ZXIpLyc6ICAgIFwiKHNjaGVtYSkvL2V4YW1wbGUuY29tL1wiXG4gICAgICAgICAgJyhmb2xkZXIpJzogICAgIFwiKHNlcnZlcikvKHVzZXIpL2RhdGFcIlxuICAgICAgICAgICc6OmZpbGU6Oic6ICAgICBcIihmb2xkZXIpL2ZpbGUudHh0XCJcbiAgICAgICAgZm9yIGtleSwgdmFsdWUgb2YgZXhwYW5kX2RpY3Rpb25hcnkgc3RyaW5nc1xuICAgICAgICAgIGRlYnVnICfOqWt2cl9fXzcnLCBmXCIje2tleX06PDIwYzsgI3tycHIgdmFsdWV9XCJcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgYnJpY2FicmFjX2pzb24gPSB7XG4gICAgICAgICAgXCJzdHJpbmdzXCI6IHtcbiAgICAgICAgICAgIFwiKGdoKVwiOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbVwiLFxuICAgICAgICAgICAgXCIoZmxvdykvXCI6IFwiKGdoKS9sb3ZlZW5jb3VudGVyZmxvdy9cIixcbiAgICAgICAgICAgIFwiKHNmbW9kdWxlcylcIjogXCIoZmxvdykvYnJpY2FicmFjLXNmbW9kdWxlcy9yZWZzL2hlYWRzL21haW4vc3JjXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtYXBwaW5nc1wiOiB7XG4gICAgICAgICAgICBcImFcIjogXCItLShnaCktLVwiXG4gICAgICAgICAgICBcImJcIjogXCItLShmbG93KS8tLVwiXG4gICAgICAgICAgICBcImNcIjogXCItLShzZm1vZHVsZXMpLS1cIlxuICAgICAgICAgICAgXCJkXCI6IFwifi8tLShzZm1vZHVsZXMpLS1cIiB9IH1cbiAgICAgICAgX2JyaWNhYnJhY19jb21waWxlZF9qc29uID0ge1xuICAgICAgICAgIFwic3RyaW5nc1wiOiB7XG4gICAgICAgICAgICBcIihnaClcIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb21cIixcbiAgICAgICAgICAgIFwiKGZsb3cpL1wiOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9cIixcbiAgICAgICAgICAgIFwiKHNmbW9kdWxlcylcIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlcy9yZWZzL2hlYWRzL21haW4vc3JjXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtYXBwaW5nc1wiOiB7XG4gICAgICAgICAgICBcImFcIjogXCItLWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS0tXCJcbiAgICAgICAgICAgIFwiYlwiOiBcIi0taHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93Ly0tXCJcbiAgICAgICAgICAgIFwiY1wiOiBcIi0taHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93L2JyaWNhYnJhYy1zZm1vZHVsZXMvcmVmcy9oZWFkcy9tYWluL3NyYy0tXCJcbiAgICAgICAgICAgIFwiZFwiOiBcIn4vLS1odHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlcy9yZWZzL2hlYWRzL21haW4vc3JjLS1cIiB9IH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXN1bHQgICAgICAgICAgPSB7fVxuICAgICAgICByZXN1bHQuc3RyaW5ncyAgPSBleHBhbmRfZGljdGlvbmFyeSBicmljYWJyYWNfanNvbi5zdHJpbmdzXG4gICAgICAgIHJlc3VsdC5tYXBwaW5ncyA9IHt9XG4gICAgICAgIGZvciB0YXJnZXRfcGF0aCwgc291cmNlX3NwZWMgb2YgYnJpY2FicmFjX2pzb24ubWFwcGluZ3NcbiAgICAgICAgICByZXN1bHQubWFwcGluZ3NbIHRhcmdldF9wYXRoIF0gPSBzb3VyY2Vfc3BlY1xuICAgICAgICAgIGZvciBwYXR0ZXJuX2tleSwgcGF0dGVybl92YWx1ZSBvZiByZXN1bHQuc3RyaW5nc1xuICAgICAgICAgICAgcmVzdWx0Lm1hcHBpbmdzWyB0YXJnZXRfcGF0aCBdID0gcmVzdWx0Lm1hcHBpbmdzWyB0YXJnZXRfcGF0aCBdLnJlcGxhY2VBbGwgcGF0dGVybl9rZXksIHBhdHRlcm5fdmFsdWVcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJfX184JywgcmVzdWx0XG4gICAgICAgIEBlcSAoIM6pa3ZyX19fOSA9IC0+IGZhbHNlICksIFwicmVzb2x2ZSBob21lIGRpcmVjdG9yeSB3aXRoIG9zLmhvbWVkaXIoKSAvIGxvY2FsLWRlc3RpbmF0aW9uLmJyaWNzXCJcbiAgICAgICAgQGVxICggzqlrdnJfXzEwID0gLT4gT2JqZWN0LmtleXMgcmVzdWx0ICksIE9iamVjdC5rZXlzIF9icmljYWJyYWNfY29tcGlsZWRfanNvblxuICAgICAgICBmb3Iga2V5LCB2YWx1ZSBvZiByZXN1bHQuc3RyaW5nc1xuICAgICAgICAgIEBlcSAoIM6pa3ZyX18xMSA9IC0+IHZhbHVlICksIF9icmljYWJyYWNfY29tcGlsZWRfanNvbi5zdHJpbmdzWyBrZXkgXVxuICAgICAgICBmb3Iga2V5LCB2YWx1ZSBvZiByZXN1bHQubWFwcGluZ3NcbiAgICAgICAgICBAZXEgKCDOqWt2cl9fMTIgPSAtPiB2YWx1ZSApLCBfYnJpY2FicmFjX2NvbXBpbGVkX2pzb24ubWFwcGluZ3NbIGtleSBdXG4gICAgICAgICMgZGVidWcgJ86pa3ZyX18xMycsICggZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyBudWxsICkuaG9tZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX2dldF9sb2NhbF9kZXN0aW5hdGlvbnM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucywgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2dldF9sb2NhbF9kZXN0aW5hdGlvbnMoKVxuICAgICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgICAgT1MgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpvcydcbiAgICAgIEZTICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMge1xuICAgICAgIyAgIGFwcDoge1xuICAgICAgIyAgICAgbmFtZTogJ215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIGRhdGE6ICcvaG9tZS9mbG93Ly5sb2NhbC9zaGFyZS9teS1hcHAtbmFtZScsXG4gICAgICAjICAgICBjb25maWc6ICcvaG9tZS9mbG93Ly5jb25maWcvbXktYXBwLW5hbWUnLFxuICAgICAgIyAgICAgY2FjaGU6ICcvaG9tZS9mbG93Ly5jYWNoZS9teS1hcHAtbmFtZScsXG4gICAgICAjICAgICBsb2c6ICcvaG9tZS9mbG93Ly5sb2NhbC9zdGF0ZS9teS1hcHAtbmFtZScsXG4gICAgICAjICAgICB0ZW1wOiAnL3RtcC9mbG93L215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIGhvbWU6ICcvaG9tZS9mbG93L215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIG5vZGVfbW9kdWxlczogJy9ob21lL2Zsb3cvbXktYXBwLW5hbWUvbm9kZV9tb2R1bGVzJyxcbiAgICAgICMgICAgIGRlcF9iaW46ICcvaG9tZS9mbG93L215LWFwcC1uYW1lL25vZGVfbW9kdWxlcy8uYmluJyxcbiAgICAgICMgICAgIG93bl9iaW46ICcvaG9tZS9mbG93L215LWFwcC1uYW1lL2JpbidcbiAgICAgICMgICB9LFxuICAgICAgIyAgIHVzZXI6IHsgbmFtZTogJ2Zsb3cnLCBob21lOiAnL2hvbWUvZmxvdycsIHRlbXA6ICcvdG1wJyB9XG4gICAgICAjIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJfXzE0ID0gLT4gdHlwZV9vZiBnZXRfbG9jYWxfZGVzdGluYXRpb25zICksICdmdW5jdGlvbidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgYXBwX25hbWUgICAgICA9ICdteS1hcHAtbmFtZSdcbiAgICAgICAgZHN0ICAgICAgICAgICA9IGdldF9sb2NhbF9kZXN0aW5hdGlvbnMgeyBhcHBfbmFtZSwgfVxuICAgICAgICB1c2VyX25mbyAgICAgID0gT1MudXNlckluZm8oKVxuICAgICAgICBob21lICAgICAgICAgID0gRlMucmVhbHBhdGhTeW5jIE9TLmhvbWVkaXIoKVxuICAgICAgICB0ZW1wICAgICAgICAgID0gRlMucmVhbHBhdGhTeW5jIE9TLnRtcGRpcigpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlnbGRfXzE1ID0gLT4gKCBPYmplY3Qua2V5cyBkc3QgKS5zb3J0KCkgICAgICAgKSwgWyAnYXBwJywgJ3VzZXInLCBdXG4gICAgICAgIEBlcSAoIM6pZ2xkX18xNiA9IC0+ICggT2JqZWN0LmtleXMgZHN0LmFwcCApLnNvcnQoKSAgICksIFsgJ2NhY2hlJywgJ2NvbmZpZycsICdkYXRhJywgJ2RlcF9iaW4nLCAnaG9tZScsICdsb2cnLCAnbmFtZScsICdub2RlX21vZHVsZXMnLCAnb3duX2JpbicsICd0ZW1wJyBdXG4gICAgICAgIEBlcSAoIM6pZ2xkX18xNyA9IC0+ICggT2JqZWN0LmtleXMgZHN0LnVzZXIgKS5zb3J0KCkgICksIFsgJ2hvbWUnLCAnbmFtZScsICd0ZW1wJywgXVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pZ2xkX18xOCA9IC0+IHR5cGVfb2YgZHN0LmFwcCAgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAgIEBlcSAoIM6pZ2xkX18xOSA9IC0+IHR5cGVfb2YgZHN0LnVzZXIgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlnbGRfXzIwID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmNhY2hlICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzIxID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmNvbmZpZyAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzIyID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmRhdGEgICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzIzID0gLT4gZHN0LmFwcC5kZXBfYmluICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9uYW1lLCAnbm9kZV9tb2R1bGVzJywgJy5iaW4nXG4gICAgICAgIEBlcSAoIM6pZ2xkX18yNCA9IC0+IGRzdC5hcHAuaG9tZSAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWdsZF9fMjUgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAubG9nICAgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWdsZF9fMjYgPSAtPiBkc3QuYXBwLm5hbWUgICAgICAgICAgICAgICAgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWdsZF9fMjcgPSAtPiBkc3QuYXBwLm5vZGVfbW9kdWxlcyAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX25hbWUsICdub2RlX21vZHVsZXMnXG4gICAgICAgIEBlcSAoIM6pZ2xkX18yOCA9IC0+IGRzdC5hcHAub3duX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfbmFtZSwgJ2JpbidcbiAgICAgICAgQGVxICggzqlnbGRfXzI5ID0gLT4gZHN0LmFwcC50ZW1wICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGRzdC51c2VyLnRlbXAsIGRzdC51c2VyLm5hbWUsIGFwcF9uYW1lXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlnbGRfXzMwID0gLT4gZHN0LnVzZXIuaG9tZSAgICAgICAgICAgICAgICAgICAgKSwgaG9tZVxuICAgICAgICBAZXEgKCDOqWdsZF9fMzEgPSAtPiBkc3QudXNlci5uYW1lICAgICAgICAgICAgICAgICAgICApLCB1c2VyX25mby51c2VybmFtZVxuICAgICAgICBAZXEgKCDOqWdsZF9fMzIgPSAtPiBkc3QudXNlci50ZW1wICAgICAgICAgICAgICAgICAgICApLCB0ZW1wXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgYXBwX25hbWUgICAgICA9IG51bGxcbiAgICAgICAgZHN0ICAgICAgICAgICA9IGdldF9sb2NhbF9kZXN0aW5hdGlvbnMgeyBhcHBfbmFtZSwgfVxuICAgICAgICB1c2VyX25mbyAgICAgID0gT1MudXNlckluZm8oKVxuICAgICAgICBob21lICAgICAgICAgID0gRlMucmVhbHBhdGhTeW5jIE9TLmhvbWVkaXIoKVxuICAgICAgICB0ZW1wICAgICAgICAgID0gRlMucmVhbHBhdGhTeW5jIE9TLnRtcGRpcigpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlnbGRfXzMzID0gLT4gKCBPYmplY3Qua2V5cyBkc3QgKS5zb3J0KCkgICAgICAgKSwgWyAnYXBwJywgJ3VzZXInLCBdXG4gICAgICAgIEBlcSAoIM6pZ2xkX18zNCA9IC0+ICggT2JqZWN0LmtleXMgZHN0LmFwcCApLnNvcnQoKSAgICksIFsgJ2NhY2hlJywgJ2NvbmZpZycsICdkYXRhJywgJ2RlcF9iaW4nLCAnaG9tZScsICdsb2cnLCAnbmFtZScsICdub2RlX21vZHVsZXMnLCAnb3duX2JpbicsICd0ZW1wJyBdXG4gICAgICAgIEBlcSAoIM6pZ2xkX18zNSA9IC0+ICggT2JqZWN0LmtleXMgZHN0LnVzZXIgKS5zb3J0KCkgICksIFsgJ2hvbWUnLCAnbmFtZScsICd0ZW1wJywgXVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pZ2xkX18zNiA9IC0+IHR5cGVfb2YgZHN0LmFwcCAgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAgIEBlcSAoIM6pZ2xkX18zNyA9IC0+IHR5cGVfb2YgZHN0LnVzZXIgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlnbGRfXzM4ID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmNhY2hlICAgICAgKSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICBAZXEgKCDOqWdsZF9fMzkgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY29uZmlnICAgICApLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICAgIEBlcSAoIM6pZ2xkX180MCA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5kYXRhICAgICAgICksICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgQGVxICggzqlnbGRfXzQxID0gLT4gZHN0LmFwcC5kZXBfYmluICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsICc8WU9VUi1BUFAtTkFNRS1IRVJFPicsICdub2RlX21vZHVsZXMnLCAnLmJpbidcbiAgICAgICAgQGVxICggzqlnbGRfXzQyID0gLT4gZHN0LmFwcC5ob21lICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgQGVxICggzqlnbGRfXzQzID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmxvZyAgICAgICAgKSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICBAZXEgKCDOqWdsZF9fNDQgPSAtPiBkc3QuYXBwLm5hbWUgICAgICAgICAgICAgICAgICAgICApLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICAgIEBlcSAoIM6pZ2xkX180NSA9IC0+IGRzdC5hcHAubm9kZV9tb2R1bGVzICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nLCAnbm9kZV9tb2R1bGVzJ1xuICAgICAgICBAZXEgKCDOqWdsZF9fNDYgPSAtPiBkc3QuYXBwLm93bl9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+JywgJ2JpbidcbiAgICAgICAgQGVxICggzqlnbGRfXzQ3ID0gLT4gZHN0LmFwcC50ZW1wICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGRzdC51c2VyLnRlbXAsIGRzdC51c2VyLm5hbWUsICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWdsZF9fNDggPSAtPiBkc3QudXNlci5ob21lICAgICAgICAgICAgICAgICAgICApLCBob21lXG4gICAgICAgIEBlcSAoIM6pZ2xkX180OSA9IC0+IGRzdC51c2VyLm5hbWUgICAgICAgICAgICAgICAgICAgICksIHVzZXJfbmZvLnVzZXJuYW1lXG4gICAgICAgIEBlcSAoIM6pZ2xkX181MCA9IC0+IGRzdC51c2VyLnRlbXAgICAgICAgICAgICAgICAgICAgICksIHRlbXBcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBhcHBfbmFtZSAgICAgID0gJ2Zyb2J1bGF0b3InXG4gICAgICAgIGFwcF9ob21lICAgICAgPSAnL3BhdGgvdG8vcHJvamVjdHMnXG4gICAgICAgIGRzdCAgICAgICAgICAgPSBnZXRfbG9jYWxfZGVzdGluYXRpb25zIHsgYXBwX25hbWUsIGFwcF9ob21lIH1cbiAgICAgICAgdXNlcl9uZm8gICAgICA9IE9TLnVzZXJJbmZvKClcbiAgICAgICAgaG9tZSAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy5ob21lZGlyKClcbiAgICAgICAgdGVtcCAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy50bXBkaXIoKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pZ2xkX181MSA9IC0+ICggT2JqZWN0LmtleXMgZHN0ICkuc29ydCgpICAgICAgICksIFsgJ2FwcCcsICd1c2VyJywgXVxuICAgICAgICBAZXEgKCDOqWdsZF9fNTIgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC5hcHAgKS5zb3J0KCkgICApLCBbICdjYWNoZScsICdjb25maWcnLCAnZGF0YScsICdkZXBfYmluJywgJ2hvbWUnLCAnbG9nJywgJ25hbWUnLCAnbm9kZV9tb2R1bGVzJywgJ293bl9iaW4nLCAndGVtcCcgXVxuICAgICAgICBAZXEgKCDOqWdsZF9fNTMgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC51c2VyICkuc29ydCgpICApLCBbICdob21lJywgJ25hbWUnLCAndGVtcCcsIF1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWdsZF9fNTQgPSAtPiB0eXBlX29mIGRzdC5hcHAgICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgICAgICBAZXEgKCDOqWdsZF9fNTUgPSAtPiB0eXBlX29mIGRzdC51c2VyICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pZ2xkX181NiA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jYWNoZSAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pZ2xkX181NyA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jb25maWcgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pZ2xkX181OCA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5kYXRhICAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pZ2xkX181OSA9IC0+IGRzdC5hcHAuZGVwX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfaG9tZSwgYXBwX25hbWUsICdub2RlX21vZHVsZXMnLCAnLmJpbidcbiAgICAgICAgQGVxICggzqlnbGRfXzYwID0gLT4gZHN0LmFwcC5ob21lICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9ob21lLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWdsZF9fNjEgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAubG9nICAgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWdsZF9fNjIgPSAtPiBkc3QuYXBwLm5hbWUgICAgICAgICAgICAgICAgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWdsZF9fNjMgPSAtPiBkc3QuYXBwLm5vZGVfbW9kdWxlcyAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX2hvbWUsIGFwcF9uYW1lLCAnbm9kZV9tb2R1bGVzJ1xuICAgICAgICBAZXEgKCDOqWdsZF9fNjQgPSAtPiBkc3QuYXBwLm93bl9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX2hvbWUsIGFwcF9uYW1lLCAnYmluJ1xuICAgICAgICBAZXEgKCDOqWdsZF9fNjUgPSAtPiBkc3QuYXBwLnRlbXAgICAgICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgZHN0LnVzZXIudGVtcCwgZHN0LnVzZXIubmFtZSwgYXBwX25hbWVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWdsZF9fNjYgPSAtPiBkc3QudXNlci5ob21lICAgICAgICAgICAgICAgICAgICApLCBob21lXG4gICAgICAgIEBlcSAoIM6pZ2xkX182NyA9IC0+IGRzdC51c2VyLm5hbWUgICAgICAgICAgICAgICAgICAgICksIHVzZXJfbmZvLnVzZXJuYW1lXG4gICAgICAgIEBlcSAoIM6pZ2xkX182OCA9IC0+IGRzdC51c2VyLnRlbXAgICAgICAgICAgICAgICAgICAgICksIHRlbXBcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX3dhbGtfanNfdG9rZW5zOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IHdhbGtfanNfdG9rZW5zLFxuICAgICAgICB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMsXG4gICAgICAgIHN1bW1hcml6ZSwgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV93YWxrX2pzX3Rva2VucygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZyX182OSA9IC0+IHR5cGVfb2Ygd2Fsa19qc190b2tlbnMgICAgICAgICAgICApLCAnZ2VuZXJhdG9yZnVuY3Rpb24nXG4gICAgICBAZXEgKCDOqWt2cl9fNzAgPSAtPiB0eXBlX29mIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgKSwgJ2dlbmVyYXRvcmZ1bmN0aW9uJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBAZXEgKCDOqWdsZF9fNzEgPSAtPiB0eXBlX29mIHdhbGtfanNfdG9rZW5zICcnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2dlbmVyYXRvcidcbiAgICAgICAgQGVxICggzqlnbGRfXzcyID0gLT4gWyAoIHdhbGtfanNfdG9rZW5zICcnICkuLi4sIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFtdXG4gICAgICAgIEBlcSAoIM6pZ2xkX183MyA9IC0+IHN1bW1hcml6ZSB3YWxrX2pzX3Rva2VucyAgICAgICAgICAgICd2YXIgYSA9IDk7JyAgICAgICAgICApLCBcIiYmJklkZW50aWZpZXJOYW1lJ3ZhcicmJiZXaGl0ZVNwYWNlJyAnJiYmSWRlbnRpZmllck5hbWUnYScmJiZXaGl0ZVNwYWNlJyAnJiYmUHVuY3R1YXRvcic9JyYmJldoaXRlU3BhY2UnICcmJiZOdW1lcmljTGl0ZXJhbCc5JyYmJlB1bmN0dWF0b3InOycmJiZcIlxuICAgICAgICBAZXEgKCDOqWdsZF9fNzQgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICAndmFyIGEgPSA5OycgICAgICAgICAgKSwgXCImJiZJZGVudGlmaWVyTmFtZSd2YXInJiYmSWRlbnRpZmllck5hbWUnYScmJiZQdW5jdHVhdG9yJz0nJiYmTnVtZXJpY0xpdGVyYWwnOScmJiZQdW5jdHVhdG9yJzsnJiYmXCJcbiAgICAgICAgQGVxICggzqlnbGRfXzc1ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgJ1wieVwiJyAgICAgICAgICAgICAgICAgKSwgXCJcIlwiJiYmU3RyaW5nTGl0ZXJhbCdcInlcIicmJiZcIlwiXCJcbiAgICAgICAgQGVxICggzqlnbGRfXzc2ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCIneSdcIiAgICAgICAgICAgICAgICAgKSwgXCImJiZTdHJpbmdMaXRlcmFsJ1xcXFwneVxcXFwnJyYmJlwiXG4gICAgICAgIEBlcSAoIM6pZ2xkX183NyA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwiYEEkeyd5J31aYFwiICAgICAgICAgICksIFwiJiYmVGVtcGxhdGVIZWFkJ2BBJHsnJiYmU3RyaW5nTGl0ZXJhbCdcXFxcJ3lcXFxcJycmJiZUZW1wbGF0ZVRhaWwnfVpgJyYmJlwiXG4gICAgICAgIEBlcSAoIM6pZ2xkX183OCA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwiZmBBJHsneSd9WmBcIiAgICAgICAgICksIFwiJiYmSWRlbnRpZmllck5hbWUnZicmJiZUZW1wbGF0ZUhlYWQnYEEkeycmJiZTdHJpbmdMaXRlcmFsJ1xcXFwneVxcXFwnJyYmJlRlbXBsYXRlVGFpbCd9WmAnJiYmXCJcbiAgICAgICAgQGVxICggzqlnbGRfXzc5ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJgQSR7YHlgfVpgXCIgICAgICAgICAgKSwgXCImJiZUZW1wbGF0ZUhlYWQnYEEkeycmJiZOb1N1YnN0aXR1dGlvblRlbXBsYXRlJ2B5YCcmJiZUZW1wbGF0ZVRhaWwnfVpgJyYmJlwiXG4gICAgICAgIEBlcSAoIM6pZ2xkX184MCA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwiYEEke3JlcXVpcmUoYHlgKX1aYFwiICksIFwiJiYmVGVtcGxhdGVIZWFkJ2BBJHsnJiYmSWRlbnRpZmllck5hbWUncmVxdWlyZScmJiZQdW5jdHVhdG9yJygnJiYmTm9TdWJzdGl0dXRpb25UZW1wbGF0ZSdgeWAnJiYmUHVuY3R1YXRvcicpJyYmJlRlbXBsYXRlVGFpbCd9WmAnJiYmXCJcbiAgICAgICAgQGVxICggzqlnbGRfXzgxID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJyZXF1aXJlID0gNzc3XCIgICAgICAgKSwgXCImJiZJZGVudGlmaWVyTmFtZSdyZXF1aXJlJyYmJlB1bmN0dWF0b3InPScmJiZOdW1lcmljTGl0ZXJhbCc3NzcnJiYmXCJcbiAgICAgICAgIyBAZXEgKCDOqWdsZF9fODIgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcInRydWVcIiAgICAgICAgICAgICAgICApLCBudWxsXG4gICAgICAgICMgQGVxICggzqlnbGRfXzgzID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJmYWxzZVwiICAgICAgICAgICAgICAgKSwgbnVsbFxuICAgICAgICAjIEBlcSAoIM6pZ2xkX184NCA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwidW5kZWZpbmVkXCIgICAgICAgICAgICksIG51bGxcbiAgICAgICAgIyBAZXEgKCDOqWdsZF9fODUgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcIm51bGxcIiAgICAgICAgICAgICAgICApLCBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc291cmNlID0gXCJjb25zdCB7IGQsIH0gPSByZXF1aXJlKCAnc29tZS1tb2R1bGUnICk7IC8qIHJlcXVpcmUoICdvdGhlci1tb2R1bGUnICkgKi9cIlxuICAgICAgICBmb3IgdG9rZW4gZnJvbSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgc291cmNlXG4gICAgICAgICAgaW5mbyAnzqlrdnJfXzg2JywgZlwiI3t0b2tlbi50eXBlfTo+MjBjOyAje3JwciB0b2tlbi52YWx1ZX1cIlxuICAgICAgICBAZXEgKCDOqWdsZF9fODcgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zIHNvdXJjZSApLCBcIiYmJklkZW50aWZpZXJOYW1lJ2NvbnN0JyYmJlB1bmN0dWF0b3IneycmJiZJZGVudGlmaWVyTmFtZSdkJyYmJlB1bmN0dWF0b3InLCcmJiZQdW5jdHVhdG9yJ30nJiYmUHVuY3R1YXRvcic9JyYmJklkZW50aWZpZXJOYW1lJ3JlcXVpcmUnJiYmUHVuY3R1YXRvcicoJyYmJlN0cmluZ0xpdGVyYWwnXFxcXCdzb21lLW1vZHVsZVxcXFwnJyYmJlB1bmN0dWF0b3InKScmJiZQdW5jdHVhdG9yJzsnJiYmXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX3BhcnNlX3JlcXVpcmVfc3RhdGVtZW50czogLT5cbiAgICAgIEZTICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgd2Fsa19qc190b2tlbnMsXG4gICAgICAgIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyxcbiAgICAgICAgcnByX3Rva2VuLFxuICAgICAgICBzdW1tYXJpemUsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfd2Fsa19qc190b2tlbnMoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIEBlcSAoIM6pa3ZyX184OCA9IC0+IHR5cGVfb2Ygd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICApLCAnZ2VuZXJhdG9yZnVuY3Rpb24nXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHNvdXJjZSAgICAgID0gRlMucmVhZEZpbGVTeW5jIF9fZmlsZW5hbWUsIHsgZW5jb2Rpbmc6ICd1dGYtOCcsIH1cbiAgICAgICAgbGluZXMgICAgICAgPSBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgd2FybmluZ3MgICAgPSBbXVxuICAgICAgICBoaXN0b3J5ICAgICA9IDBcbiAgICAgICAgcGtnX25hbWUgICAgPSBudWxsXG4gICAgICAgIGxpbmVfbnIgICAgID0gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJlc2V0ICAgICAgID0gLT5cbiAgICAgICAgICBoaXN0b3J5ICAgICA9IDBcbiAgICAgICAgICBwa2dfbmFtZSAgICA9IG51bGxcbiAgICAgICAgICBsaW5lX25yICAgICA9IG51bGxcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGNvbXBpbGVfd2FybmluZyA9ICggdG9rZW4gKSAtPlxuICAgICAgICAgIGxpbmVzICA/PSBbIG51bGwsICggc291cmNlLnNwbGl0ICdcXG4nICkuLi4sIF1cbiAgICAgICAgICBsaW5lICAgID0gbGluZXNbIHRva2VuLmxpbmVfbnIgXSA/IFwiKEVSUk9SOiBVTkFCTEUgVE8gUkVUUklFVkUgU09VUkNFKVwiXG4gICAgICAgICAgbWVzc2FnZSA9IFwizqlrdnJfXzg5IGlnbm9yaW5nIHBvc3NpYmxlIGByZXF1aXJlYCBvbiBsaW5lICN7dG9rZW4ubGluZV9ucn06ICN7cnByIGxpbmV9XCJcbiAgICAgICAgZm9yIHRva2VuIGZyb20gd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zIHNvdXJjZVxuICAgICAgICAgICMgaW5mbyAnzqlrdnJfXzkwJywgdG9rZW5cbiAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgIHN3aXRjaCBoaXN0b3J5XG4gICAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICAgIHdoZW4gMFxuICAgICAgICAgICAgICB1bmxlc3MgKCB0b2tlbi50eXBlIGlzICdJZGVudGlmaWVyTmFtZScgKSBhbmQgKCB0b2tlbi52YWx1ZSBpcyAncmVxdWlyZScgKVxuICAgICAgICAgICAgICAgIHJlc2V0KClcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICBoaXN0b3J5ID0gMVxuICAgICAgICAgICAgICBsaW5lX25yID0gdG9rZW4ubGluZV9uclxuICAgICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgICB3aGVuIDFcbiAgICAgICAgICAgICAgdW5sZXNzICggdG9rZW4udHlwZSBpcyAnUHVuY3R1YXRvcicgKSBhbmQgKCB0b2tlbi52YWx1ZSBpcyAnKCcgKVxuICAgICAgICAgICAgICAgIHdhcm4gJ86pa3ZyX185MScsIHRva2VuXG4gICAgICAgICAgICAgICAgd2FybmluZ3MucHVzaCBjb21waWxlX3dhcm5pbmcgdG9rZW5cbiAgICAgICAgICAgICAgICByZXNldCgpXG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgaGlzdG9yeSA9IDJcbiAgICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgICAgd2hlbiAyXG4gICAgICAgICAgICAgIHVubGVzcyAoIHRva2VuLmNhdGVnb3JpZXMuaGFzICdzdHJpbmdfbGl0ZXJhbHMnIClcbiAgICAgICAgICAgICAgICB3YXJuICfOqWt2cl9fOTInLCB0b2tlblxuICAgICAgICAgICAgICAgIHdhcm5pbmdzLnB1c2ggY29tcGlsZV93YXJuaW5nIHRva2VuXG4gICAgICAgICAgICAgICAgcmVzZXQoKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgIHBrZ19uYW1lICAgID0gZXZhbCB0b2tlbi52YWx1ZVxuICAgICAgICAgICAgICBoaXN0b3J5ICAgICA9IDNcbiAgICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgICAgd2hlbiAzXG4gICAgICAgICAgICAgIHVubGVzcyAoIHRva2VuLnR5cGUgaXMgJ1B1bmN0dWF0b3InICkgYW5kICggdG9rZW4udmFsdWUgaXMgJyknIClcbiAgICAgICAgICAgICAgICB3YXJuICfOqWt2cl9fOTMnLCB0b2tlblxuICAgICAgICAgICAgICAgIHdhcm5pbmdzLnB1c2ggY29tcGlsZV93YXJuaW5nIHRva2VuXG4gICAgICAgICAgICAgICAgcmVzZXQoKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgIGRlYnVnICfOqWt2cl9fOTQnLCBcImxpbmUgI3tsaW5lX25yfSBmb3VuZCByZXF1aXJlICN7cnByIHBrZ19uYW1lfVwiXG4gICAgICAgICAgICAgIHJlc2V0KClcbiAgICAgICAgIyBAZXEgKCDOqWdsZF9fOTUgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zIHNvdXJjZSApLCBcIiYmJklkZW50aWZpZXJOYW1lJ2NvbnN0JyYmJlB1bmN0dWF0b3IneycmJiZJZGVudGlmaWVyTmFtZSdkJyYmJlB1bmN0dWF0b3InLCcmJiZQdW5jdHVhdG9yJ30nJiYmUHVuY3R1YXRvcic9JyYmJklkZW50aWZpZXJOYW1lJ3JlcXVpcmUnJiYmUHVuY3R1YXRvcicoJyYmJlN0cmluZ0xpdGVyYWwnXFxcXCdzb21lLW1vZHVsZVxcXFwnJyYmJlB1bmN0dWF0b3InKScmJiZQdW5jdHVhdG9yJzsnJiYmXCJcbiAgICAgICAgaWYgd2FybmluZ3MubGVuZ3RoID4gMFxuICAgICAgICAgIHdhcm4gXCJUaGVyZSBoYXZlIGJlZW4gd2FybmluZ3M6XCJcbiAgICAgICAgICB3YXJuICfOqWt2cl9fOTYnLCB3YXJuaW5nIGZvciB3YXJuaW5nIGluIHdhcm5pbmdzXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgcmVxdWlyZVxuICAgICAgICByZXF1aXJlIHRydWVcbiAgICAgICAgcmVxdWlyZSAncGtnIzEnXG4gICAgICAgIHJlcXVpcmUgYGBgIGBwa2cjMmAgYGBgXG4gICAgICAgIHJlcXVpcmUgYGBgIGBwa2cjM2AgKyAnc3VmZml4JyBgYGBcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVxdWlyZV9ycHJfc3RyaW5nOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IHJwcl9zdHJpbmcsICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9ycHJfc3RyaW5nKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJfXzk3ID0gLT4gdHlwZV9vZiBycHJfc3RyaW5nICksICdmdW5jdGlvbidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgQGVxICggzqlnbGRfXzk4ID0gLT4gcnByX3N0cmluZyAnJyAgICAgICApLCBcIlwiXCInJ1wiXCJcIlxuICAgICAgICBAZXEgKCDOqWdsZF9fOTkgPSAtPiBycHJfc3RyaW5nICdcIicgICAgICApLCBcIlwiXCInXCInXCJcIlwiXG4gICAgICAgIEBlcSAoIM6pZ2xkXzEwMCA9IC0+IHJwcl9zdHJpbmcgXCInXCIgICAgICApLCBcIlwiXCInXFxcXCcnXCJcIlwiXG4gICAgICAgIEBlcSAoIM6pZ2xkXzEwMSA9IC0+IHJwcl9zdHJpbmcgJ3BvcCcgICAgKSwgXCJcIlwiJ3BvcCdcIlwiXCJcbiAgICAgICAgQGVxICggzqlnbGRfMTAyID0gLT4gcnByX3N0cmluZyAnXCJwb3BcIicgICksIFwiXCJcIidcInBvcFwiJ1wiXCJcIlxuICAgICAgICBAZXEgKCDOqWdsZF8xMDMgPSAtPiBycHJfc3RyaW5nIFwiJ3BvcCdcIiAgKSwgXCJcIlwiJ1xcXFwncG9wXFxcXCcnXCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQHRhc2tzXG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyByZXF1aXJlX2dldF9sb2NhbF9kZXN0aW5hdGlvbnM6IEB0YXNrcy5yZXF1aXJlX2dldF9sb2NhbF9kZXN0aW5hdGlvbnMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfd2Fsa19qc190b2tlbnM6IEB0YXNrcy5yZXF1aXJlX3dhbGtfanNfdG9rZW5zLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9wYXJzZV9yZXF1aXJlX3N0YXRlbWVudHM6IEB0YXNrcy5yZXF1aXJlX3BhcnNlX3JlcXVpcmVfc3RhdGVtZW50cywgfVxuIl19
