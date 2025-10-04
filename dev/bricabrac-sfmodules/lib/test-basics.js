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
        var source, token, Ωgld__71, Ωgld__72, Ωgld__73, Ωgld__74, Ωgld__75, Ωgld__76, Ωgld__77, Ωgld__78, Ωgld__79, Ωgld__81;
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
        this.eq((Ωgld__79 = function() {
          return summarize(walk_essential_js_tokens("`A${require(`y`)}Z`"));
        }), "&&&TemplateHead'`A${'&&&IdentifierName'require'&&&Punctuator'('&&&NoSubstitutionTemplate'`y`'&&&Punctuator')'&&&TemplateTail'}Z`'&&&");
        this.eq((Ωgld__79 = function() {
          return summarize(walk_essential_js_tokens("require = 777"));
        }), "&&&IdentifierName'require'&&&Punctuator'='&&&NumericLiteral'777'&&&");
        //...................................................................................................
        source = "const { d, } = require( 'some-module' ); /* require( 'other-module' ) */";
        for (token of walk_essential_js_tokens(source)) {
          info('Ωkvr__80', f`${token.type}:>20c; ${rpr(token.value)}`);
        }
        this.eq((Ωgld__81 = function() {
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
        // @eq ( Ωkvr__70 = -> type_of walk_essential_js_tokens  ), 'generatorfunction'
        //.....................................................................................................
        var history, line_nr, literal_pkg, reset, source, token;
        history = 0;
        literal_pkg = null;
        line_nr = null;
        reset = function() {
          history = 0;
          literal_pkg = null;
          line_nr = null;
          return null;
        };
        source = FS.readFileSync(__filename, {
          encoding: 'utf-8'
        });
        for (token of walk_essential_js_tokens(source)) {
          // info 'Ωkvr__80', f"#{token.type}:>20c; #{rpr token.value}"
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
                reset();
                continue;
              }
              history = 2;
              break;
            //...............................................................................................
            case 2:
              if (!(token.type === 'StringLiteral')) {
                reset();
                continue;
              }
              literal_pkg = token.value;
              history = 3;
              break;
            //...............................................................................................
            case 3:
              if (!((token.type === 'Punctuator') && (token.value === ')'))) {
                reset();
                continue;
              }
              debug('Ωkvr___7', `line ${line_nr} found require ${literal_pkg}`);
              reset();
          }
        }
        // @eq ( Ωgld__81 = -> summarize walk_essential_js_tokens source ), "&&&IdentifierName'const'&&&Punctuator'{'&&&IdentifierName'd'&&&Punctuator','&&&Punctuator'}'&&&Punctuator'='&&&IdentifierName'require'&&&Punctuator'('&&&StringLiteral'\\'some-module\\''&&&Punctuator')'&&&Punctuator';'&&&"
        //...................................................................................................
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    require_rpr_string: function() {
      var SFMODULES, rpr_string, type_of, Ωkvr__82;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({rpr_string} = SFMODULES.require_rpr_string());
      //.....................................................................................................
      this.eq((Ωkvr__82 = function() {
        return type_of(rpr_string);
      }), 'function');
      (() => {        //.....................................................................................................
        var Ωgld__83, Ωgld__84, Ωgld__85, Ωgld__86, Ωgld__87, Ωgld__88;
        this.eq((Ωgld__83 = function() {
          return rpr_string('');
        }), `''`);
        this.eq((Ωgld__84 = function() {
          return rpr_string('"');
        }), `'"'`);
        this.eq((Ωgld__85 = function() {
          return rpr_string("'");
        }), `'\\''`);
        this.eq((Ωgld__86 = function() {
          return rpr_string('pop');
        }), `'pop'`);
        this.eq((Ωgld__87 = function() {
          return rpr_string('"pop"');
        }), `'"pop"'`);
        this.eq((Ωgld__88 = function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBR0ksQ0FBQTs7SUFBQSx3QkFBQSxFQUEwQixRQUFBLENBQUEsQ0FBQTtBQUM5QixVQUFBLFNBQUEsRUFBQSxpQkFBQSxFQUFBLHNCQUFBLEVBQUEsT0FBQSxFQUFBO01BQU0sU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixTQUFTLENB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M0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQUEsQ0FBVyxPQUFYO1FBQUgsQ0FBYixDQUFKLEVBQTJDLENBQUEsT0FBQSxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBQSxDQUFXLE9BQVg7UUFBSCxDQUFiLENBQUosRUFBMkMsQ0FBQSxXQUFBLENBQTNDLEVBTFI7O0FBT1EsZUFBTztNQVJOLENBQUEsSUFOVDs7QUFnQk0sYUFBTztJQWpCVztFQS9TcEIsRUE5Qko7OztFQW9XQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLElBQUMsQ0FBQSxLQUEvQixFQUZGOzs7YUFLRSxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCO1FBQUUsZ0NBQUEsRUFBa0MsSUFBQyxDQUFBLEtBQUssQ0FBQztNQUEzQyxDQUE5QjtJQU5zQyxDQUFBLElBQXhDOztBQXBXQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLXNmbW9kdWxlcy90ZXN0LWJhc2ljcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRhc2tzID1cblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVxdWlyZV9kaWN0aW9uYXJ5X3Rvb2xzOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IGV4cGFuZF9kaWN0aW9uYXJ5LCAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9kaWN0aW9uYXJ5X3Rvb2xzKClcbiAgICAgIHsgZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucywgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2dldF9sb2NhbF9kZXN0aW5hdGlvbnMoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cl9fXzEgPSAtPiB0eXBlX29mIGV4cGFuZF9kaWN0aW9uYXJ5ICksICdmdW5jdGlvbidcbiAgICAgIGRvID0+XG4gICAgICAgIHN0cmluZ3MgPVxuICAgICAgICAgICcke2dyZWV0fSc6ICAgXCJIZWxsbyAke3dob31cIlxuICAgICAgICAgICcke3dob30nOiAgICAgXCJkZWFyICR7dGFyZ2V0fVwiXG4gICAgICAgICAgJyR7dGFyZ2V0fSc6ICBcIndvcmxkXCJcbiAgICAgICAgbWF0Y2hlciA9XG4gICAgICAgICAgJyR7Z3JlZXR9JzogICBcIkhlbGxvIGRlYXIgd29ybGRcIlxuICAgICAgICAgICcke3dob30nOiAgICAgXCJkZWFyIHdvcmxkXCJcbiAgICAgICAgICAnJHt0YXJnZXR9JzogIFwid29ybGRcIlxuICAgICAgICBzdHJpbmdzX2NvcHkgID0geyBzdHJpbmdzLi4uLCB9XG4gICAgICAgIGV4cGFuZGVkICAgICAgPSBleHBhbmRfZGljdGlvbmFyeSBzdHJpbmdzXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cl9fXzIgPSAtPiBzdHJpbmdzICAgICAgICAgICAgICksIHN0cmluZ3NfY29weVxuICAgICAgICBAZXEgICAgICggzqlrdnJfX18zID0gLT4gZXhwYW5kZWQgICAgICAgICAgICApLCBtYXRjaGVyXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cl9fXzQgPSAtPiBleHBhbmRlZCBpcyBzdHJpbmdzICksIGZhbHNlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHN0cmluZ3MgPVxuICAgICAgICAgICcke2dyZWV0fSc6ICAgXCJIZWxsbyAke3dob31cIlxuICAgICAgICAgICcke3dob30nOiAgICAgXCJkZWFyICR7dGFyZ2V0fVwiXG4gICAgICAgICAgJyR7dGFyZ2V0fSc6ICBcIndvcmxkICR7Z3JlZXR9XCJcbiAgICAgICAgc3RyaW5nc19jb3B5ICA9IHsgc3RyaW5ncy4uLiwgfVxuICAgICAgICBAdGhyb3dzICggzqlrdnJfX181ID0gLT4gZXhwYW5kX2RpY3Rpb25hcnkgc3RyaW5ncyApLCAvY3ljbGljIHJlZmVyZW5jZSBkZXRlY3RlZCBmb3IgXFwkXFx7Z3JlZXRcXH0vXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cl9fXzYgPSAtPiBzdHJpbmdzICAgICAgICAgICAgICAgICAgICAgICApLCBzdHJpbmdzX2NvcHlcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgc3RyaW5ncyA9XG4gICAgICAgICAgJy8odXNlcikvJzogICAgIFwiL0FsaWNlL1wiXG4gICAgICAgICAgJyhzY2hlbWEpLy8nOiAgIFwiaHR0cHM6Ly9cIlxuICAgICAgICAgICcoc2VydmVyKS8nOiAgICBcIihzY2hlbWEpLy9leGFtcGxlLmNvbS9cIlxuICAgICAgICAgICcoZm9sZGVyKSc6ICAgICBcIihzZXJ2ZXIpLyh1c2VyKS9kYXRhXCJcbiAgICAgICAgICAnOjpmaWxlOjonOiAgICAgXCIoZm9sZGVyKS9maWxlLnR4dFwiXG4gICAgICAgIGZvciBrZXksIHZhbHVlIG9mIGV4cGFuZF9kaWN0aW9uYXJ5IHN0cmluZ3NcbiAgICAgICAgICBkZWJ1ZyAnzqlrdnJfX183JywgZlwiI3trZXl9OjwyMGM7ICN7cnByIHZhbHVlfVwiXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGJyaWNhYnJhY19qc29uID0ge1xuICAgICAgICAgIFwic3RyaW5nc1wiOiB7XG4gICAgICAgICAgICBcIihnaClcIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb21cIixcbiAgICAgICAgICAgIFwiKGZsb3cpL1wiOiBcIihnaCkvbG92ZWVuY291bnRlcmZsb3cvXCIsXG4gICAgICAgICAgICBcIihzZm1vZHVsZXMpXCI6IFwiKGZsb3cpL2JyaWNhYnJhYy1zZm1vZHVsZXMvcmVmcy9oZWFkcy9tYWluL3NyY1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIFwibWFwcGluZ3NcIjoge1xuICAgICAgICAgICAgXCJhXCI6IFwiLS0oZ2gpLS1cIlxuICAgICAgICAgICAgXCJiXCI6IFwiLS0oZmxvdykvLS1cIlxuICAgICAgICAgICAgXCJjXCI6IFwiLS0oc2Ztb2R1bGVzKS0tXCJcbiAgICAgICAgICAgIFwiZFwiOiBcIn4vLS0oc2Ztb2R1bGVzKS0tXCIgfSB9XG4gICAgICAgIF9icmljYWJyYWNfY29tcGlsZWRfanNvbiA9IHtcbiAgICAgICAgICBcInN0cmluZ3NcIjoge1xuICAgICAgICAgICAgXCIoZ2gpXCI6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tXCIsXG4gICAgICAgICAgICBcIihmbG93KS9cIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvXCIsXG4gICAgICAgICAgICBcIihzZm1vZHVsZXMpXCI6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93L2JyaWNhYnJhYy1zZm1vZHVsZXMvcmVmcy9oZWFkcy9tYWluL3NyY1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIFwibWFwcGluZ3NcIjoge1xuICAgICAgICAgICAgXCJhXCI6IFwiLS1odHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20tLVwiXG4gICAgICAgICAgICBcImJcIjogXCItLWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy8tLVwiXG4gICAgICAgICAgICBcImNcIjogXCItLWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzL3JlZnMvaGVhZHMvbWFpbi9zcmMtLVwiXG4gICAgICAgICAgICBcImRcIjogXCJ+Ly0taHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93L2JyaWNhYnJhYy1zZm1vZHVsZXMvcmVmcy9oZWFkcy9tYWluL3NyYy0tXCIgfSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmVzdWx0ICAgICAgICAgID0ge31cbiAgICAgICAgcmVzdWx0LnN0cmluZ3MgID0gZXhwYW5kX2RpY3Rpb25hcnkgYnJpY2FicmFjX2pzb24uc3RyaW5nc1xuICAgICAgICByZXN1bHQubWFwcGluZ3MgPSB7fVxuICAgICAgICBmb3IgdGFyZ2V0X3BhdGgsIHNvdXJjZV9zcGVjIG9mIGJyaWNhYnJhY19qc29uLm1hcHBpbmdzXG4gICAgICAgICAgcmVzdWx0Lm1hcHBpbmdzWyB0YXJnZXRfcGF0aCBdID0gc291cmNlX3NwZWNcbiAgICAgICAgICBmb3IgcGF0dGVybl9rZXksIHBhdHRlcm5fdmFsdWUgb2YgcmVzdWx0LnN0cmluZ3NcbiAgICAgICAgICAgIHJlc3VsdC5tYXBwaW5nc1sgdGFyZ2V0X3BhdGggXSA9IHJlc3VsdC5tYXBwaW5nc1sgdGFyZ2V0X3BhdGggXS5yZXBsYWNlQWxsIHBhdHRlcm5fa2V5LCBwYXR0ZXJuX3ZhbHVlXG4gICAgICAgICMgZGVidWcgJ86pa3ZyX19fOCcsIHJlc3VsdFxuICAgICAgICBAZXEgKCDOqWt2cl9fXzkgPSAtPiBmYWxzZSApLCBcInJlc29sdmUgaG9tZSBkaXJlY3Rvcnkgd2l0aCBvcy5ob21lZGlyKCkgLyBsb2NhbC1kZXN0aW5hdGlvbi5icmljc1wiXG4gICAgICAgIEBlcSAoIM6pa3ZyX18xMCA9IC0+IE9iamVjdC5rZXlzIHJlc3VsdCApLCBPYmplY3Qua2V5cyBfYnJpY2FicmFjX2NvbXBpbGVkX2pzb25cbiAgICAgICAgZm9yIGtleSwgdmFsdWUgb2YgcmVzdWx0LnN0cmluZ3NcbiAgICAgICAgICBAZXEgKCDOqWt2cl9fMTEgPSAtPiB2YWx1ZSApLCBfYnJpY2FicmFjX2NvbXBpbGVkX2pzb24uc3RyaW5nc1sga2V5IF1cbiAgICAgICAgZm9yIGtleSwgdmFsdWUgb2YgcmVzdWx0Lm1hcHBpbmdzXG4gICAgICAgICAgQGVxICggzqlrdnJfXzEyID0gLT4gdmFsdWUgKSwgX2JyaWNhYnJhY19jb21waWxlZF9qc29uLm1hcHBpbmdzWyBrZXkgXVxuICAgICAgICAjIGRlYnVnICfOqWt2cl9fMTMnLCAoIGdldF9sb2NhbF9kZXN0aW5hdGlvbnMgbnVsbCApLmhvbWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVxdWlyZV9nZXRfbG9jYWxfZGVzdGluYXRpb25zOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IGdldF9sb2NhbF9kZXN0aW5hdGlvbnMsIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9nZXRfbG9jYWxfZGVzdGluYXRpb25zKClcbiAgICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICAgIE9TICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6b3MnXG4gICAgICBGUyAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIHtcbiAgICAgICMgICBhcHA6IHtcbiAgICAgICMgICAgIG5hbWU6ICdteS1hcHAtbmFtZScsXG4gICAgICAjICAgICBkYXRhOiAnL2hvbWUvZmxvdy8ubG9jYWwvc2hhcmUvbXktYXBwLW5hbWUnLFxuICAgICAgIyAgICAgY29uZmlnOiAnL2hvbWUvZmxvdy8uY29uZmlnL215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIGNhY2hlOiAnL2hvbWUvZmxvdy8uY2FjaGUvbXktYXBwLW5hbWUnLFxuICAgICAgIyAgICAgbG9nOiAnL2hvbWUvZmxvdy8ubG9jYWwvc3RhdGUvbXktYXBwLW5hbWUnLFxuICAgICAgIyAgICAgdGVtcDogJy90bXAvZmxvdy9teS1hcHAtbmFtZScsXG4gICAgICAjICAgICBob21lOiAnL2hvbWUvZmxvdy9teS1hcHAtbmFtZScsXG4gICAgICAjICAgICBub2RlX21vZHVsZXM6ICcvaG9tZS9mbG93L215LWFwcC1uYW1lL25vZGVfbW9kdWxlcycsXG4gICAgICAjICAgICBkZXBfYmluOiAnL2hvbWUvZmxvdy9teS1hcHAtbmFtZS9ub2RlX21vZHVsZXMvLmJpbicsXG4gICAgICAjICAgICBvd25fYmluOiAnL2hvbWUvZmxvdy9teS1hcHAtbmFtZS9iaW4nXG4gICAgICAjICAgfSxcbiAgICAgICMgICB1c2VyOiB7IG5hbWU6ICdmbG93JywgaG9tZTogJy9ob21lL2Zsb3cnLCB0ZW1wOiAnL3RtcCcgfVxuICAgICAgIyB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZyX18xNCA9IC0+IHR5cGVfb2YgZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyApLCAnZnVuY3Rpb24nXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGFwcF9uYW1lICAgICAgPSAnbXktYXBwLW5hbWUnXG4gICAgICAgIGRzdCAgICAgICAgICAgPSBnZXRfbG9jYWxfZGVzdGluYXRpb25zIHsgYXBwX25hbWUsIH1cbiAgICAgICAgdXNlcl9uZm8gICAgICA9IE9TLnVzZXJJbmZvKClcbiAgICAgICAgaG9tZSAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy5ob21lZGlyKClcbiAgICAgICAgdGVtcCAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy50bXBkaXIoKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pZ2xkX18xNSA9IC0+ICggT2JqZWN0LmtleXMgZHN0ICkuc29ydCgpICAgICAgICksIFsgJ2FwcCcsICd1c2VyJywgXVxuICAgICAgICBAZXEgKCDOqWdsZF9fMTYgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC5hcHAgKS5zb3J0KCkgICApLCBbICdjYWNoZScsICdjb25maWcnLCAnZGF0YScsICdkZXBfYmluJywgJ2hvbWUnLCAnbG9nJywgJ25hbWUnLCAnbm9kZV9tb2R1bGVzJywgJ293bl9iaW4nLCAndGVtcCcgXVxuICAgICAgICBAZXEgKCDOqWdsZF9fMTcgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC51c2VyICkuc29ydCgpICApLCBbICdob21lJywgJ25hbWUnLCAndGVtcCcsIF1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWdsZF9fMTggPSAtPiB0eXBlX29mIGRzdC5hcHAgICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgICAgICBAZXEgKCDOqWdsZF9fMTkgPSAtPiB0eXBlX29mIGRzdC51c2VyICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pZ2xkX18yMCA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jYWNoZSAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pZ2xkX18yMSA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jb25maWcgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pZ2xkX18yMiA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5kYXRhICAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pZ2xkX18yMyA9IC0+IGRzdC5hcHAuZGVwX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfbmFtZSwgJ25vZGVfbW9kdWxlcycsICcuYmluJ1xuICAgICAgICBAZXEgKCDOqWdsZF9fMjQgPSAtPiBkc3QuYXBwLmhvbWUgICAgICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzI1ID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmxvZyAgICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzI2ID0gLT4gZHN0LmFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzI3ID0gLT4gZHN0LmFwcC5ub2RlX21vZHVsZXMgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9uYW1lLCAnbm9kZV9tb2R1bGVzJ1xuICAgICAgICBAZXEgKCDOqWdsZF9fMjggPSAtPiBkc3QuYXBwLm93bl9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX25hbWUsICdiaW4nXG4gICAgICAgIEBlcSAoIM6pZ2xkX18yOSA9IC0+IGRzdC5hcHAudGVtcCAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBkc3QudXNlci50ZW1wLCBkc3QudXNlci5uYW1lLCBhcHBfbmFtZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pZ2xkX18zMCA9IC0+IGRzdC51c2VyLmhvbWUgICAgICAgICAgICAgICAgICAgICksIGhvbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzMxID0gLT4gZHN0LnVzZXIubmFtZSAgICAgICAgICAgICAgICAgICAgKSwgdXNlcl9uZm8udXNlcm5hbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzMyID0gLT4gZHN0LnVzZXIudGVtcCAgICAgICAgICAgICAgICAgICAgKSwgdGVtcFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGFwcF9uYW1lICAgICAgPSBudWxsXG4gICAgICAgIGRzdCAgICAgICAgICAgPSBnZXRfbG9jYWxfZGVzdGluYXRpb25zIHsgYXBwX25hbWUsIH1cbiAgICAgICAgdXNlcl9uZm8gICAgICA9IE9TLnVzZXJJbmZvKClcbiAgICAgICAgaG9tZSAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy5ob21lZGlyKClcbiAgICAgICAgdGVtcCAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy50bXBkaXIoKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pZ2xkX18zMyA9IC0+ICggT2JqZWN0LmtleXMgZHN0ICkuc29ydCgpICAgICAgICksIFsgJ2FwcCcsICd1c2VyJywgXVxuICAgICAgICBAZXEgKCDOqWdsZF9fMzQgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC5hcHAgKS5zb3J0KCkgICApLCBbICdjYWNoZScsICdjb25maWcnLCAnZGF0YScsICdkZXBfYmluJywgJ2hvbWUnLCAnbG9nJywgJ25hbWUnLCAnbm9kZV9tb2R1bGVzJywgJ293bl9iaW4nLCAndGVtcCcgXVxuICAgICAgICBAZXEgKCDOqWdsZF9fMzUgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC51c2VyICkuc29ydCgpICApLCBbICdob21lJywgJ25hbWUnLCAndGVtcCcsIF1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWdsZF9fMzYgPSAtPiB0eXBlX29mIGRzdC5hcHAgICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgICAgICBAZXEgKCDOqWdsZF9fMzcgPSAtPiB0eXBlX29mIGRzdC51c2VyICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pZ2xkX18zOCA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jYWNoZSAgICAgICksICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgQGVxICggzqlnbGRfXzM5ID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmNvbmZpZyAgICAgKSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICBAZXEgKCDOqWdsZF9fNDAgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuZGF0YSAgICAgICApLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICAgIEBlcSAoIM6pZ2xkX180MSA9IC0+IGRzdC5hcHAuZGVwX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nLCAnbm9kZV9tb2R1bGVzJywgJy5iaW4nXG4gICAgICAgIEBlcSAoIM6pZ2xkX180MiA9IC0+IGRzdC5hcHAuaG9tZSAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICAgIEBlcSAoIM6pZ2xkX180MyA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5sb2cgICAgICAgICksICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgQGVxICggzqlnbGRfXzQ0ID0gLT4gZHN0LmFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgKSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICBAZXEgKCDOqWdsZF9fNDUgPSAtPiBkc3QuYXBwLm5vZGVfbW9kdWxlcyAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+JywgJ25vZGVfbW9kdWxlcydcbiAgICAgICAgQGVxICggzqlnbGRfXzQ2ID0gLT4gZHN0LmFwcC5vd25fYmluICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsICc8WU9VUi1BUFAtTkFNRS1IRVJFPicsICdiaW4nXG4gICAgICAgIEBlcSAoIM6pZ2xkX180NyA9IC0+IGRzdC5hcHAudGVtcCAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBkc3QudXNlci50ZW1wLCBkc3QudXNlci5uYW1lLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlnbGRfXzQ4ID0gLT4gZHN0LnVzZXIuaG9tZSAgICAgICAgICAgICAgICAgICAgKSwgaG9tZVxuICAgICAgICBAZXEgKCDOqWdsZF9fNDkgPSAtPiBkc3QudXNlci5uYW1lICAgICAgICAgICAgICAgICAgICApLCB1c2VyX25mby51c2VybmFtZVxuICAgICAgICBAZXEgKCDOqWdsZF9fNTAgPSAtPiBkc3QudXNlci50ZW1wICAgICAgICAgICAgICAgICAgICApLCB0ZW1wXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgYXBwX25hbWUgICAgICA9ICdmcm9idWxhdG9yJ1xuICAgICAgICBhcHBfaG9tZSAgICAgID0gJy9wYXRoL3RvL3Byb2plY3RzJ1xuICAgICAgICBkc3QgICAgICAgICAgID0gZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyB7IGFwcF9uYW1lLCBhcHBfaG9tZSB9XG4gICAgICAgIHVzZXJfbmZvICAgICAgPSBPUy51c2VySW5mbygpXG4gICAgICAgIGhvbWUgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MuaG9tZWRpcigpXG4gICAgICAgIHRlbXAgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MudG1wZGlyKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWdsZF9fNTEgPSAtPiAoIE9iamVjdC5rZXlzIGRzdCApLnNvcnQoKSAgICAgICApLCBbICdhcHAnLCAndXNlcicsIF1cbiAgICAgICAgQGVxICggzqlnbGRfXzUyID0gLT4gKCBPYmplY3Qua2V5cyBkc3QuYXBwICkuc29ydCgpICAgKSwgWyAnY2FjaGUnLCAnY29uZmlnJywgJ2RhdGEnLCAnZGVwX2JpbicsICdob21lJywgJ2xvZycsICduYW1lJywgJ25vZGVfbW9kdWxlcycsICdvd25fYmluJywgJ3RlbXAnIF1cbiAgICAgICAgQGVxICggzqlnbGRfXzUzID0gLT4gKCBPYmplY3Qua2V5cyBkc3QudXNlciApLnNvcnQoKSAgKSwgWyAnaG9tZScsICduYW1lJywgJ3RlbXAnLCBdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlnbGRfXzU0ID0gLT4gdHlwZV9vZiBkc3QuYXBwICAgICAgICAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAgICAgQGVxICggzqlnbGRfXzU1ID0gLT4gdHlwZV9vZiBkc3QudXNlciAgICAgICAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWdsZF9fNTYgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY2FjaGUgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWdsZF9fNTcgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY29uZmlnICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWdsZF9fNTggPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuZGF0YSAgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWdsZF9fNTkgPSAtPiBkc3QuYXBwLmRlcF9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX2hvbWUsIGFwcF9uYW1lLCAnbm9kZV9tb2R1bGVzJywgJy5iaW4nXG4gICAgICAgIEBlcSAoIM6pZ2xkX182MCA9IC0+IGRzdC5hcHAuaG9tZSAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfaG9tZSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzYxID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmxvZyAgICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzYyID0gLT4gZHN0LmFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzYzID0gLT4gZHN0LmFwcC5ub2RlX21vZHVsZXMgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9ob21lLCBhcHBfbmFtZSwgJ25vZGVfbW9kdWxlcydcbiAgICAgICAgQGVxICggzqlnbGRfXzY0ID0gLT4gZHN0LmFwcC5vd25fYmluICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9ob21lLCBhcHBfbmFtZSwgJ2JpbidcbiAgICAgICAgQGVxICggzqlnbGRfXzY1ID0gLT4gZHN0LmFwcC50ZW1wICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGRzdC51c2VyLnRlbXAsIGRzdC51c2VyLm5hbWUsIGFwcF9uYW1lXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlnbGRfXzY2ID0gLT4gZHN0LnVzZXIuaG9tZSAgICAgICAgICAgICAgICAgICAgKSwgaG9tZVxuICAgICAgICBAZXEgKCDOqWdsZF9fNjcgPSAtPiBkc3QudXNlci5uYW1lICAgICAgICAgICAgICAgICAgICApLCB1c2VyX25mby51c2VybmFtZVxuICAgICAgICBAZXEgKCDOqWdsZF9fNjggPSAtPiBkc3QudXNlci50ZW1wICAgICAgICAgICAgICAgICAgICApLCB0ZW1wXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVxdWlyZV93YWxrX2pzX3Rva2VuczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyB3YWxrX2pzX3Rva2VucyxcbiAgICAgICAgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zLFxuICAgICAgICBzdW1tYXJpemUsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfd2Fsa19qc190b2tlbnMoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cl9fNjkgPSAtPiB0eXBlX29mIHdhbGtfanNfdG9rZW5zICAgICAgICAgICAgKSwgJ2dlbmVyYXRvcmZ1bmN0aW9uJ1xuICAgICAgQGVxICggzqlrdnJfXzcwID0gLT4gdHlwZV9vZiB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgICksICdnZW5lcmF0b3JmdW5jdGlvbidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgQGVxICggzqlnbGRfXzcxID0gLT4gdHlwZV9vZiB3YWxrX2pzX3Rva2VucyAnJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdnZW5lcmF0b3InXG4gICAgICAgIEBlcSAoIM6pZ2xkX183MiA9IC0+IFsgKCB3YWxrX2pzX3Rva2VucyAnJyApLi4uLCBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbXVxuICAgICAgICBAZXEgKCDOqWdsZF9fNzMgPSAtPiBzdW1tYXJpemUgd2Fsa19qc190b2tlbnMgICAgICAgICAgICAndmFyIGEgPSA5OycgICAgICAgICAgKSwgXCImJiZJZGVudGlmaWVyTmFtZSd2YXInJiYmV2hpdGVTcGFjZScgJyYmJklkZW50aWZpZXJOYW1lJ2EnJiYmV2hpdGVTcGFjZScgJyYmJlB1bmN0dWF0b3InPScmJiZXaGl0ZVNwYWNlJyAnJiYmTnVtZXJpY0xpdGVyYWwnOScmJiZQdW5jdHVhdG9yJzsnJiYmXCJcbiAgICAgICAgQGVxICggzqlnbGRfXzc0ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgJ3ZhciBhID0gOTsnICAgICAgICAgICksIFwiJiYmSWRlbnRpZmllck5hbWUndmFyJyYmJklkZW50aWZpZXJOYW1lJ2EnJiYmUHVuY3R1YXRvcic9JyYmJk51bWVyaWNMaXRlcmFsJzknJiYmUHVuY3R1YXRvcic7JyYmJlwiXG4gICAgICAgIEBlcSAoIM6pZ2xkX183NSA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgICdcInlcIicgICAgICAgICAgICAgICAgICksIFwiXCJcIiYmJlN0cmluZ0xpdGVyYWwnXCJ5XCInJiYmXCJcIlwiXG4gICAgICAgIEBlcSAoIM6pZ2xkX183NiA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwiJ3knXCIgICAgICAgICAgICAgICAgICksIFwiJiYmU3RyaW5nTGl0ZXJhbCdcXFxcJ3lcXFxcJycmJiZcIlxuICAgICAgICBAZXEgKCDOqWdsZF9fNzcgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcImBBJHsneSd9WmBcIiAgICAgICAgICApLCBcIiYmJlRlbXBsYXRlSGVhZCdgQSR7JyYmJlN0cmluZ0xpdGVyYWwnXFxcXCd5XFxcXCcnJiYmVGVtcGxhdGVUYWlsJ31aYCcmJiZcIlxuICAgICAgICBAZXEgKCDOqWdsZF9fNzggPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcImZgQSR7J3knfVpgXCIgICAgICAgICApLCBcIiYmJklkZW50aWZpZXJOYW1lJ2YnJiYmVGVtcGxhdGVIZWFkJ2BBJHsnJiYmU3RyaW5nTGl0ZXJhbCdcXFxcJ3lcXFxcJycmJiZUZW1wbGF0ZVRhaWwnfVpgJyYmJlwiXG4gICAgICAgIEBlcSAoIM6pZ2xkX183OSA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwiYEEke2B5YH1aYFwiICAgICAgICAgICksIFwiJiYmVGVtcGxhdGVIZWFkJ2BBJHsnJiYmTm9TdWJzdGl0dXRpb25UZW1wbGF0ZSdgeWAnJiYmVGVtcGxhdGVUYWlsJ31aYCcmJiZcIlxuICAgICAgICBAZXEgKCDOqWdsZF9fNzkgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcImBBJHtyZXF1aXJlKGB5YCl9WmBcIiApLCBcIiYmJlRlbXBsYXRlSGVhZCdgQSR7JyYmJklkZW50aWZpZXJOYW1lJ3JlcXVpcmUnJiYmUHVuY3R1YXRvcicoJyYmJk5vU3Vic3RpdHV0aW9uVGVtcGxhdGUnYHlgJyYmJlB1bmN0dWF0b3InKScmJiZUZW1wbGF0ZVRhaWwnfVpgJyYmJlwiXG4gICAgICAgIEBlcSAoIM6pZ2xkX183OSA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwicmVxdWlyZSA9IDc3N1wiICAgICAgICksIFwiJiYmSWRlbnRpZmllck5hbWUncmVxdWlyZScmJiZQdW5jdHVhdG9yJz0nJiYmTnVtZXJpY0xpdGVyYWwnNzc3JyYmJlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc291cmNlID0gXCJjb25zdCB7IGQsIH0gPSByZXF1aXJlKCAnc29tZS1tb2R1bGUnICk7IC8qIHJlcXVpcmUoICdvdGhlci1tb2R1bGUnICkgKi9cIlxuICAgICAgICBmb3IgdG9rZW4gZnJvbSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgc291cmNlXG4gICAgICAgICAgaW5mbyAnzqlrdnJfXzgwJywgZlwiI3t0b2tlbi50eXBlfTo+MjBjOyAje3JwciB0b2tlbi52YWx1ZX1cIlxuICAgICAgICBAZXEgKCDOqWdsZF9fODEgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zIHNvdXJjZSApLCBcIiYmJklkZW50aWZpZXJOYW1lJ2NvbnN0JyYmJlB1bmN0dWF0b3IneycmJiZJZGVudGlmaWVyTmFtZSdkJyYmJlB1bmN0dWF0b3InLCcmJiZQdW5jdHVhdG9yJ30nJiYmUHVuY3R1YXRvcic9JyYmJklkZW50aWZpZXJOYW1lJ3JlcXVpcmUnJiYmUHVuY3R1YXRvcicoJyYmJlN0cmluZ0xpdGVyYWwnXFxcXCdzb21lLW1vZHVsZVxcXFwnJyYmJlB1bmN0dWF0b3InKScmJiZQdW5jdHVhdG9yJzsnJiYmXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX3BhcnNlX3JlcXVpcmVfc3RhdGVtZW50czogLT5cbiAgICAgIEZTICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgd2Fsa19qc190b2tlbnMsXG4gICAgICAgIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyxcbiAgICAgICAgcnByX3Rva2VuLFxuICAgICAgICBzdW1tYXJpemUsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfd2Fsa19qc190b2tlbnMoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIEBlcSAoIM6pa3ZyX183MCA9IC0+IHR5cGVfb2Ygd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICApLCAnZ2VuZXJhdG9yZnVuY3Rpb24nXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGhpc3RvcnkgICAgID0gMFxuICAgICAgICBsaXRlcmFsX3BrZyA9IG51bGxcbiAgICAgICAgbGluZV9uciAgICAgPSBudWxsXG4gICAgICAgIHJlc2V0ICAgICAgID0gLT5cbiAgICAgICAgICBoaXN0b3J5ICAgICA9IDBcbiAgICAgICAgICBsaXRlcmFsX3BrZyA9IG51bGxcbiAgICAgICAgICBsaW5lX25yICAgICA9IG51bGxcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICBzb3VyY2UgICAgICA9IEZTLnJlYWRGaWxlU3luYyBfX2ZpbGVuYW1lLCB7IGVuY29kaW5nOiAndXRmLTgnLCB9XG4gICAgICAgIGZvciB0b2tlbiBmcm9tIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyBzb3VyY2VcbiAgICAgICAgICAjIGluZm8gJ86pa3ZyX184MCcsIGZcIiN7dG9rZW4udHlwZX06PjIwYzsgI3tycHIgdG9rZW4udmFsdWV9XCJcbiAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgIHN3aXRjaCBoaXN0b3J5XG4gICAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICAgIHdoZW4gMFxuICAgICAgICAgICAgICB1bmxlc3MgKCB0b2tlbi50eXBlIGlzICdJZGVudGlmaWVyTmFtZScgKSBhbmQgKCB0b2tlbi52YWx1ZSBpcyAncmVxdWlyZScgKVxuICAgICAgICAgICAgICAgIHJlc2V0KClcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICBoaXN0b3J5ID0gMVxuICAgICAgICAgICAgICBsaW5lX25yID0gdG9rZW4ubGluZV9uclxuICAgICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgICB3aGVuIDFcbiAgICAgICAgICAgICAgdW5sZXNzICggdG9rZW4udHlwZSBpcyAnUHVuY3R1YXRvcicgKSBhbmQgKCB0b2tlbi52YWx1ZSBpcyAnKCcgKVxuICAgICAgICAgICAgICAgIHJlc2V0KClcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICBoaXN0b3J5ID0gMlxuICAgICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgICB3aGVuIDJcbiAgICAgICAgICAgICAgdW5sZXNzICggdG9rZW4udHlwZSBpcyAnU3RyaW5nTGl0ZXJhbCcgKVxuICAgICAgICAgICAgICAgIHJlc2V0KClcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICBsaXRlcmFsX3BrZyA9IHRva2VuLnZhbHVlXG4gICAgICAgICAgICAgIGhpc3RvcnkgICAgID0gM1xuICAgICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgICB3aGVuIDNcbiAgICAgICAgICAgICAgdW5sZXNzICggdG9rZW4udHlwZSBpcyAnUHVuY3R1YXRvcicgKSBhbmQgKCB0b2tlbi52YWx1ZSBpcyAnKScgKVxuICAgICAgICAgICAgICAgIHJlc2V0KClcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICBkZWJ1ZyAnzqlrdnJfX183JywgXCJsaW5lICN7bGluZV9ucn0gZm91bmQgcmVxdWlyZSAje2xpdGVyYWxfcGtnfVwiXG4gICAgICAgICAgICAgIHJlc2V0KClcbiAgICAgICAgIyBAZXEgKCDOqWdsZF9fODEgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zIHNvdXJjZSApLCBcIiYmJklkZW50aWZpZXJOYW1lJ2NvbnN0JyYmJlB1bmN0dWF0b3IneycmJiZJZGVudGlmaWVyTmFtZSdkJyYmJlB1bmN0dWF0b3InLCcmJiZQdW5jdHVhdG9yJ30nJiYmUHVuY3R1YXRvcic9JyYmJklkZW50aWZpZXJOYW1lJ3JlcXVpcmUnJiYmUHVuY3R1YXRvcicoJyYmJlN0cmluZ0xpdGVyYWwnXFxcXCdzb21lLW1vZHVsZVxcXFwnJyYmJlB1bmN0dWF0b3InKScmJiZQdW5jdHVhdG9yJzsnJiYmXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX3Jwcl9zdHJpbmc6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgcnByX3N0cmluZywgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3Jwcl9zdHJpbmcoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cl9fODIgPSAtPiB0eXBlX29mIHJwcl9zdHJpbmcgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBAZXEgKCDOqWdsZF9fODMgPSAtPiBycHJfc3RyaW5nICcnICAgICAgICksIFwiXCJcIicnXCJcIlwiXG4gICAgICAgIEBlcSAoIM6pZ2xkX184NCA9IC0+IHJwcl9zdHJpbmcgJ1wiJyAgICAgICksIFwiXCJcIidcIidcIlwiXCJcbiAgICAgICAgQGVxICggzqlnbGRfXzg1ID0gLT4gcnByX3N0cmluZyBcIidcIiAgICAgICksIFwiXCJcIidcXFxcJydcIlwiXCJcbiAgICAgICAgQGVxICggzqlnbGRfXzg2ID0gLT4gcnByX3N0cmluZyAncG9wJyAgICApLCBcIlwiXCIncG9wJ1wiXCJcIlxuICAgICAgICBAZXEgKCDOqWdsZF9fODcgPSAtPiBycHJfc3RyaW5nICdcInBvcFwiJyAgKSwgXCJcIlwiJ1wicG9wXCInXCJcIlwiXG4gICAgICAgIEBlcSAoIM6pZ2xkX184OCA9IC0+IHJwcl9zdHJpbmcgXCIncG9wJ1wiICApLCBcIlwiXCInXFxcXCdwb3BcXFxcJydcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAdGFza3NcbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfZ2V0X2xvY2FsX2Rlc3RpbmF0aW9uczogQHRhc2tzLnJlcXVpcmVfZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV93YWxrX2pzX3Rva2VuczogQHRhc2tzLnJlcXVpcmVfd2Fsa19qc190b2tlbnMsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyByZXF1aXJlX3BhcnNlX3JlcXVpcmVfc3RhdGVtZW50czogQHRhc2tzLnJlcXVpcmVfcGFyc2VfcmVxdWlyZV9zdGF0ZW1lbnRzLCB9XG4iXX0=
