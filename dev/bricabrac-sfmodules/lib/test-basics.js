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
        history = null;
        literal_pkg = null;
        line_nr = null;
        reset = function() {
          return history = literal_pkg = line_nr = null;
        };
        source = FS.readFileSync(__filename, {
          encoding: 'utf-8'
        });
        for (token of walk_essential_js_tokens(source)) {
          // info 'Ωkvr__80', f"#{token.type}:>20c; #{rpr token.value}"
          //.................................................................................................
          switch (history) {
            //...............................................................................................
            case null:
              if (!((token.type === 'IdentifierName') && (token.value === 'require'))) {
                reset();
                continue;
              }
              history = rpr_token(token);
              line_nr = token.line_nr;
              break;
            //...............................................................................................
            case "IdentifierName'require'":
              if (!((token.type === 'Punctuator') && (token.value === '('))) {
                reset();
                continue;
              }
              history += ';' + rpr_token(token);
              break;
            //...............................................................................................
            case "IdentifierName'require';Punctuator'('":
              if (!(token.type === 'StringLiteral')) {
                reset();
                continue;
              }
              literal_pkg = token.value;
              history += ';' + '[literal]';
              break;
            //...............................................................................................
            case "IdentifierName'require';Punctuator'(';[literal]":
              if (!((token.type === 'Punctuator') && (token.value === ')'))) {
                reset();
                continue;
              }
              debug('Ωkvr___7', `line ${line_nr} found require ${literal_pkg}`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBR0ksQ0FBQTs7SUFBQSx3QkFBQSxFQUEwQixRQUFBLENBQUEsQ0FBQTtBQUM5QixVQUFBLFNBQUEsRUFBQSxpQkFBQSxFQUFBLHNCQUFBLEVBQUEsT0FBQSxFQUFBO01BQU0sU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixTQUFTLENB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RUFBMkMsQ0FBQSxLQUFBLENBQTNDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxVQUFBLENBQVcsT0FBWDtRQUFILENBQWIsQ0FBSixFQUEyQyxDQUFBLE9BQUEsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQUEsQ0FBVyxPQUFYO1FBQUgsQ0FBYixDQUFKLEVBQTJDLENBQUEsV0FBQSxDQUEzQyxFQUxSOztBQU9RLGVBQU87TUFSTixDQUFBLElBTlQ7O0FBZ0JNLGFBQU87SUFqQlc7RUExU3BCLEVBOUJKOzs7RUErVkEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixJQUFDLENBQUEsS0FBL0IsRUFGRjs7O2FBS0UsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLGdDQUFBLEVBQWtDLElBQUMsQ0FBQSxLQUFLLENBQUM7TUFBM0MsQ0FBOUI7SUFOc0MsQ0FBQSxJQUF4Qzs7QUEvVkEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1zZm1vZHVsZXMvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0YXNrcyA9XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlcXVpcmVfZGljdGlvbmFyeV90b29sczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBleHBhbmRfZGljdGlvbmFyeSwgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfZGljdGlvbmFyeV90b29scygpXG4gICAgICB7IGdldF9sb2NhbF9kZXN0aW5hdGlvbnMsIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9nZXRfbG9jYWxfZGVzdGluYXRpb25zKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJfX18xID0gLT4gdHlwZV9vZiBleHBhbmRfZGljdGlvbmFyeSApLCAnZnVuY3Rpb24nXG4gICAgICBkbyA9PlxuICAgICAgICBzdHJpbmdzID1cbiAgICAgICAgICAnJHtncmVldH0nOiAgIFwiSGVsbG8gJHt3aG99XCJcbiAgICAgICAgICAnJHt3aG99JzogICAgIFwiZGVhciAke3RhcmdldH1cIlxuICAgICAgICAgICcke3RhcmdldH0nOiAgXCJ3b3JsZFwiXG4gICAgICAgIG1hdGNoZXIgPVxuICAgICAgICAgICcke2dyZWV0fSc6ICAgXCJIZWxsbyBkZWFyIHdvcmxkXCJcbiAgICAgICAgICAnJHt3aG99JzogICAgIFwiZGVhciB3b3JsZFwiXG4gICAgICAgICAgJyR7dGFyZ2V0fSc6ICBcIndvcmxkXCJcbiAgICAgICAgc3RyaW5nc19jb3B5ICA9IHsgc3RyaW5ncy4uLiwgfVxuICAgICAgICBleHBhbmRlZCAgICAgID0gZXhwYW5kX2RpY3Rpb25hcnkgc3RyaW5nc1xuICAgICAgICBAZXEgICAgICggzqlrdnJfX18yID0gLT4gc3RyaW5ncyAgICAgICAgICAgICApLCBzdHJpbmdzX2NvcHlcbiAgICAgICAgQGVxICAgICAoIM6pa3ZyX19fMyA9IC0+IGV4cGFuZGVkICAgICAgICAgICAgKSwgbWF0Y2hlclxuICAgICAgICBAZXEgICAgICggzqlrdnJfX180ID0gLT4gZXhwYW5kZWQgaXMgc3RyaW5ncyApLCBmYWxzZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBzdHJpbmdzID1cbiAgICAgICAgICAnJHtncmVldH0nOiAgIFwiSGVsbG8gJHt3aG99XCJcbiAgICAgICAgICAnJHt3aG99JzogICAgIFwiZGVhciAke3RhcmdldH1cIlxuICAgICAgICAgICcke3RhcmdldH0nOiAgXCJ3b3JsZCAke2dyZWV0fVwiXG4gICAgICAgIHN0cmluZ3NfY29weSAgPSB7IHN0cmluZ3MuLi4sIH1cbiAgICAgICAgQHRocm93cyAoIM6pa3ZyX19fNSA9IC0+IGV4cGFuZF9kaWN0aW9uYXJ5IHN0cmluZ3MgKSwgL2N5Y2xpYyByZWZlcmVuY2UgZGV0ZWN0ZWQgZm9yIFxcJFxce2dyZWV0XFx9L1xuICAgICAgICBAZXEgICAgICggzqlrdnJfX182ID0gLT4gc3RyaW5ncyAgICAgICAgICAgICAgICAgICAgICAgKSwgc3RyaW5nc19jb3B5XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHN0cmluZ3MgPVxuICAgICAgICAgICcvKHVzZXIpLyc6ICAgICBcIi9BbGljZS9cIlxuICAgICAgICAgICcoc2NoZW1hKS8vJzogICBcImh0dHBzOi8vXCJcbiAgICAgICAgICAnKHNlcnZlcikvJzogICAgXCIoc2NoZW1hKS8vZXhhbXBsZS5jb20vXCJcbiAgICAgICAgICAnKGZvbGRlciknOiAgICAgXCIoc2VydmVyKS8odXNlcikvZGF0YVwiXG4gICAgICAgICAgJzo6ZmlsZTo6JzogICAgIFwiKGZvbGRlcikvZmlsZS50eHRcIlxuICAgICAgICBmb3Iga2V5LCB2YWx1ZSBvZiBleHBhbmRfZGljdGlvbmFyeSBzdHJpbmdzXG4gICAgICAgICAgZGVidWcgJ86pa3ZyX19fNycsIGZcIiN7a2V5fTo8MjBjOyAje3JwciB2YWx1ZX1cIlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBicmljYWJyYWNfanNvbiA9IHtcbiAgICAgICAgICBcInN0cmluZ3NcIjoge1xuICAgICAgICAgICAgXCIoZ2gpXCI6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tXCIsXG4gICAgICAgICAgICBcIihmbG93KS9cIjogXCIoZ2gpL2xvdmVlbmNvdW50ZXJmbG93L1wiLFxuICAgICAgICAgICAgXCIoc2Ztb2R1bGVzKVwiOiBcIihmbG93KS9icmljYWJyYWMtc2Ztb2R1bGVzL3JlZnMvaGVhZHMvbWFpbi9zcmNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hcHBpbmdzXCI6IHtcbiAgICAgICAgICAgIFwiYVwiOiBcIi0tKGdoKS0tXCJcbiAgICAgICAgICAgIFwiYlwiOiBcIi0tKGZsb3cpLy0tXCJcbiAgICAgICAgICAgIFwiY1wiOiBcIi0tKHNmbW9kdWxlcyktLVwiXG4gICAgICAgICAgICBcImRcIjogXCJ+Ly0tKHNmbW9kdWxlcyktLVwiIH0gfVxuICAgICAgICBfYnJpY2FicmFjX2NvbXBpbGVkX2pzb24gPSB7XG4gICAgICAgICAgXCJzdHJpbmdzXCI6IHtcbiAgICAgICAgICAgIFwiKGdoKVwiOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbVwiLFxuICAgICAgICAgICAgXCIoZmxvdykvXCI6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93L1wiLFxuICAgICAgICAgICAgXCIoc2Ztb2R1bGVzKVwiOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzL3JlZnMvaGVhZHMvbWFpbi9zcmNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hcHBpbmdzXCI6IHtcbiAgICAgICAgICAgIFwiYVwiOiBcIi0taHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tLS1cIlxuICAgICAgICAgICAgXCJiXCI6IFwiLS1odHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvLS1cIlxuICAgICAgICAgICAgXCJjXCI6IFwiLS1odHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlcy9yZWZzL2hlYWRzL21haW4vc3JjLS1cIlxuICAgICAgICAgICAgXCJkXCI6IFwifi8tLWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzL3JlZnMvaGVhZHMvbWFpbi9zcmMtLVwiIH0gfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJlc3VsdCAgICAgICAgICA9IHt9XG4gICAgICAgIHJlc3VsdC5zdHJpbmdzICA9IGV4cGFuZF9kaWN0aW9uYXJ5IGJyaWNhYnJhY19qc29uLnN0cmluZ3NcbiAgICAgICAgcmVzdWx0Lm1hcHBpbmdzID0ge31cbiAgICAgICAgZm9yIHRhcmdldF9wYXRoLCBzb3VyY2Vfc3BlYyBvZiBicmljYWJyYWNfanNvbi5tYXBwaW5nc1xuICAgICAgICAgIHJlc3VsdC5tYXBwaW5nc1sgdGFyZ2V0X3BhdGggXSA9IHNvdXJjZV9zcGVjXG4gICAgICAgICAgZm9yIHBhdHRlcm5fa2V5LCBwYXR0ZXJuX3ZhbHVlIG9mIHJlc3VsdC5zdHJpbmdzXG4gICAgICAgICAgICByZXN1bHQubWFwcGluZ3NbIHRhcmdldF9wYXRoIF0gPSByZXN1bHQubWFwcGluZ3NbIHRhcmdldF9wYXRoIF0ucmVwbGFjZUFsbCBwYXR0ZXJuX2tleSwgcGF0dGVybl92YWx1ZVxuICAgICAgICAjIGRlYnVnICfOqWt2cl9fXzgnLCByZXN1bHRcbiAgICAgICAgQGVxICggzqlrdnJfX185ID0gLT4gZmFsc2UgKSwgXCJyZXNvbHZlIGhvbWUgZGlyZWN0b3J5IHdpdGggb3MuaG9tZWRpcigpIC8gbG9jYWwtZGVzdGluYXRpb24uYnJpY3NcIlxuICAgICAgICBAZXEgKCDOqWt2cl9fMTAgPSAtPiBPYmplY3Qua2V5cyByZXN1bHQgKSwgT2JqZWN0LmtleXMgX2JyaWNhYnJhY19jb21waWxlZF9qc29uXG4gICAgICAgIGZvciBrZXksIHZhbHVlIG9mIHJlc3VsdC5zdHJpbmdzXG4gICAgICAgICAgQGVxICggzqlrdnJfXzExID0gLT4gdmFsdWUgKSwgX2JyaWNhYnJhY19jb21waWxlZF9qc29uLnN0cmluZ3NbIGtleSBdXG4gICAgICAgIGZvciBrZXksIHZhbHVlIG9mIHJlc3VsdC5tYXBwaW5nc1xuICAgICAgICAgIEBlcSAoIM6pa3ZyX18xMiA9IC0+IHZhbHVlICksIF9icmljYWJyYWNfY29tcGlsZWRfanNvbi5tYXBwaW5nc1sga2V5IF1cbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJfXzEzJywgKCBnZXRfbG9jYWxfZGVzdGluYXRpb25zIG51bGwgKS5ob21lXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlcXVpcmVfZ2V0X2xvY2FsX2Rlc3RpbmF0aW9uczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBnZXRfbG9jYWxfZGVzdGluYXRpb25zLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucygpXG4gICAgICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgICBPUyAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOm9zJ1xuICAgICAgRlMgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyB7XG4gICAgICAjICAgYXBwOiB7XG4gICAgICAjICAgICBuYW1lOiAnbXktYXBwLW5hbWUnLFxuICAgICAgIyAgICAgZGF0YTogJy9ob21lL2Zsb3cvLmxvY2FsL3NoYXJlL215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIGNvbmZpZzogJy9ob21lL2Zsb3cvLmNvbmZpZy9teS1hcHAtbmFtZScsXG4gICAgICAjICAgICBjYWNoZTogJy9ob21lL2Zsb3cvLmNhY2hlL215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIGxvZzogJy9ob21lL2Zsb3cvLmxvY2FsL3N0YXRlL215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIHRlbXA6ICcvdG1wL2Zsb3cvbXktYXBwLW5hbWUnLFxuICAgICAgIyAgICAgaG9tZTogJy9ob21lL2Zsb3cvbXktYXBwLW5hbWUnLFxuICAgICAgIyAgICAgbm9kZV9tb2R1bGVzOiAnL2hvbWUvZmxvdy9teS1hcHAtbmFtZS9ub2RlX21vZHVsZXMnLFxuICAgICAgIyAgICAgZGVwX2JpbjogJy9ob21lL2Zsb3cvbXktYXBwLW5hbWUvbm9kZV9tb2R1bGVzLy5iaW4nLFxuICAgICAgIyAgICAgb3duX2JpbjogJy9ob21lL2Zsb3cvbXktYXBwLW5hbWUvYmluJ1xuICAgICAgIyAgIH0sXG4gICAgICAjICAgdXNlcjogeyBuYW1lOiAnZmxvdycsIGhvbWU6ICcvaG9tZS9mbG93JywgdGVtcDogJy90bXAnIH1cbiAgICAgICMgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cl9fMTQgPSAtPiB0eXBlX29mIGdldF9sb2NhbF9kZXN0aW5hdGlvbnMgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBhcHBfbmFtZSAgICAgID0gJ215LWFwcC1uYW1lJ1xuICAgICAgICBkc3QgICAgICAgICAgID0gZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyB7IGFwcF9uYW1lLCB9XG4gICAgICAgIHVzZXJfbmZvICAgICAgPSBPUy51c2VySW5mbygpXG4gICAgICAgIGhvbWUgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MuaG9tZWRpcigpXG4gICAgICAgIHRlbXAgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MudG1wZGlyKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWdsZF9fMTUgPSAtPiAoIE9iamVjdC5rZXlzIGRzdCApLnNvcnQoKSAgICAgICApLCBbICdhcHAnLCAndXNlcicsIF1cbiAgICAgICAgQGVxICggzqlnbGRfXzE2ID0gLT4gKCBPYmplY3Qua2V5cyBkc3QuYXBwICkuc29ydCgpICAgKSwgWyAnY2FjaGUnLCAnY29uZmlnJywgJ2RhdGEnLCAnZGVwX2JpbicsICdob21lJywgJ2xvZycsICduYW1lJywgJ25vZGVfbW9kdWxlcycsICdvd25fYmluJywgJ3RlbXAnIF1cbiAgICAgICAgQGVxICggzqlnbGRfXzE3ID0gLT4gKCBPYmplY3Qua2V5cyBkc3QudXNlciApLnNvcnQoKSAgKSwgWyAnaG9tZScsICduYW1lJywgJ3RlbXAnLCBdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlnbGRfXzE4ID0gLT4gdHlwZV9vZiBkc3QuYXBwICAgICAgICAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAgICAgQGVxICggzqlnbGRfXzE5ID0gLT4gdHlwZV9vZiBkc3QudXNlciAgICAgICAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWdsZF9fMjAgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY2FjaGUgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWdsZF9fMjEgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY29uZmlnICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWdsZF9fMjIgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuZGF0YSAgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWdsZF9fMjMgPSAtPiBkc3QuYXBwLmRlcF9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX25hbWUsICdub2RlX21vZHVsZXMnLCAnLmJpbidcbiAgICAgICAgQGVxICggzqlnbGRfXzI0ID0gLT4gZHN0LmFwcC5ob21lICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pZ2xkX18yNSA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5sb2cgICAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pZ2xkX18yNiA9IC0+IGRzdC5hcHAubmFtZSAgICAgICAgICAgICAgICAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pZ2xkX18yNyA9IC0+IGRzdC5hcHAubm9kZV9tb2R1bGVzICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfbmFtZSwgJ25vZGVfbW9kdWxlcydcbiAgICAgICAgQGVxICggzqlnbGRfXzI4ID0gLT4gZHN0LmFwcC5vd25fYmluICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9uYW1lLCAnYmluJ1xuICAgICAgICBAZXEgKCDOqWdsZF9fMjkgPSAtPiBkc3QuYXBwLnRlbXAgICAgICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgZHN0LnVzZXIudGVtcCwgZHN0LnVzZXIubmFtZSwgYXBwX25hbWVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWdsZF9fMzAgPSAtPiBkc3QudXNlci5ob21lICAgICAgICAgICAgICAgICAgICApLCBob21lXG4gICAgICAgIEBlcSAoIM6pZ2xkX18zMSA9IC0+IGRzdC51c2VyLm5hbWUgICAgICAgICAgICAgICAgICAgICksIHVzZXJfbmZvLnVzZXJuYW1lXG4gICAgICAgIEBlcSAoIM6pZ2xkX18zMiA9IC0+IGRzdC51c2VyLnRlbXAgICAgICAgICAgICAgICAgICAgICksIHRlbXBcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBhcHBfbmFtZSAgICAgID0gbnVsbFxuICAgICAgICBkc3QgICAgICAgICAgID0gZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyB7IGFwcF9uYW1lLCB9XG4gICAgICAgIHVzZXJfbmZvICAgICAgPSBPUy51c2VySW5mbygpXG4gICAgICAgIGhvbWUgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MuaG9tZWRpcigpXG4gICAgICAgIHRlbXAgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MudG1wZGlyKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWdsZF9fMzMgPSAtPiAoIE9iamVjdC5rZXlzIGRzdCApLnNvcnQoKSAgICAgICApLCBbICdhcHAnLCAndXNlcicsIF1cbiAgICAgICAgQGVxICggzqlnbGRfXzM0ID0gLT4gKCBPYmplY3Qua2V5cyBkc3QuYXBwICkuc29ydCgpICAgKSwgWyAnY2FjaGUnLCAnY29uZmlnJywgJ2RhdGEnLCAnZGVwX2JpbicsICdob21lJywgJ2xvZycsICduYW1lJywgJ25vZGVfbW9kdWxlcycsICdvd25fYmluJywgJ3RlbXAnIF1cbiAgICAgICAgQGVxICggzqlnbGRfXzM1ID0gLT4gKCBPYmplY3Qua2V5cyBkc3QudXNlciApLnNvcnQoKSAgKSwgWyAnaG9tZScsICduYW1lJywgJ3RlbXAnLCBdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlnbGRfXzM2ID0gLT4gdHlwZV9vZiBkc3QuYXBwICAgICAgICAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAgICAgQGVxICggzqlnbGRfXzM3ID0gLT4gdHlwZV9vZiBkc3QudXNlciAgICAgICAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWdsZF9fMzggPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY2FjaGUgICAgICApLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICAgIEBlcSAoIM6pZ2xkX18zOSA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jb25maWcgICAgICksICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgQGVxICggzqlnbGRfXzQwID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmRhdGEgICAgICAgKSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICBAZXEgKCDOqWdsZF9fNDEgPSAtPiBkc3QuYXBwLmRlcF9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+JywgJ25vZGVfbW9kdWxlcycsICcuYmluJ1xuICAgICAgICBAZXEgKCDOqWdsZF9fNDIgPSAtPiBkc3QuYXBwLmhvbWUgICAgICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICBAZXEgKCDOqWdsZF9fNDMgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAubG9nICAgICAgICApLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICAgIEBlcSAoIM6pZ2xkX180NCA9IC0+IGRzdC5hcHAubmFtZSAgICAgICAgICAgICAgICAgICAgICksICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgQGVxICggzqlnbGRfXzQ1ID0gLT4gZHN0LmFwcC5ub2RlX21vZHVsZXMgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsICc8WU9VUi1BUFAtTkFNRS1IRVJFPicsICdub2RlX21vZHVsZXMnXG4gICAgICAgIEBlcSAoIM6pZ2xkX180NiA9IC0+IGRzdC5hcHAub3duX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nLCAnYmluJ1xuICAgICAgICBAZXEgKCDOqWdsZF9fNDcgPSAtPiBkc3QuYXBwLnRlbXAgICAgICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgZHN0LnVzZXIudGVtcCwgZHN0LnVzZXIubmFtZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pZ2xkX180OCA9IC0+IGRzdC51c2VyLmhvbWUgICAgICAgICAgICAgICAgICAgICksIGhvbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzQ5ID0gLT4gZHN0LnVzZXIubmFtZSAgICAgICAgICAgICAgICAgICAgKSwgdXNlcl9uZm8udXNlcm5hbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzUwID0gLT4gZHN0LnVzZXIudGVtcCAgICAgICAgICAgICAgICAgICAgKSwgdGVtcFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGFwcF9uYW1lICAgICAgPSAnZnJvYnVsYXRvcidcbiAgICAgICAgYXBwX2hvbWUgICAgICA9ICcvcGF0aC90by9wcm9qZWN0cydcbiAgICAgICAgZHN0ICAgICAgICAgICA9IGdldF9sb2NhbF9kZXN0aW5hdGlvbnMgeyBhcHBfbmFtZSwgYXBwX2hvbWUgfVxuICAgICAgICB1c2VyX25mbyAgICAgID0gT1MudXNlckluZm8oKVxuICAgICAgICBob21lICAgICAgICAgID0gRlMucmVhbHBhdGhTeW5jIE9TLmhvbWVkaXIoKVxuICAgICAgICB0ZW1wICAgICAgICAgID0gRlMucmVhbHBhdGhTeW5jIE9TLnRtcGRpcigpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlnbGRfXzUxID0gLT4gKCBPYmplY3Qua2V5cyBkc3QgKS5zb3J0KCkgICAgICAgKSwgWyAnYXBwJywgJ3VzZXInLCBdXG4gICAgICAgIEBlcSAoIM6pZ2xkX181MiA9IC0+ICggT2JqZWN0LmtleXMgZHN0LmFwcCApLnNvcnQoKSAgICksIFsgJ2NhY2hlJywgJ2NvbmZpZycsICdkYXRhJywgJ2RlcF9iaW4nLCAnaG9tZScsICdsb2cnLCAnbmFtZScsICdub2RlX21vZHVsZXMnLCAnb3duX2JpbicsICd0ZW1wJyBdXG4gICAgICAgIEBlcSAoIM6pZ2xkX181MyA9IC0+ICggT2JqZWN0LmtleXMgZHN0LnVzZXIgKS5zb3J0KCkgICksIFsgJ2hvbWUnLCAnbmFtZScsICd0ZW1wJywgXVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pZ2xkX181NCA9IC0+IHR5cGVfb2YgZHN0LmFwcCAgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAgIEBlcSAoIM6pZ2xkX181NSA9IC0+IHR5cGVfb2YgZHN0LnVzZXIgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlnbGRfXzU2ID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmNhY2hlICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzU3ID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmNvbmZpZyAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzU4ID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmRhdGEgICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzU5ID0gLT4gZHN0LmFwcC5kZXBfYmluICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9ob21lLCBhcHBfbmFtZSwgJ25vZGVfbW9kdWxlcycsICcuYmluJ1xuICAgICAgICBAZXEgKCDOqWdsZF9fNjAgPSAtPiBkc3QuYXBwLmhvbWUgICAgICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX2hvbWUsIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pZ2xkX182MSA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5sb2cgICAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pZ2xkX182MiA9IC0+IGRzdC5hcHAubmFtZSAgICAgICAgICAgICAgICAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pZ2xkX182MyA9IC0+IGRzdC5hcHAubm9kZV9tb2R1bGVzICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfaG9tZSwgYXBwX25hbWUsICdub2RlX21vZHVsZXMnXG4gICAgICAgIEBlcSAoIM6pZ2xkX182NCA9IC0+IGRzdC5hcHAub3duX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfaG9tZSwgYXBwX25hbWUsICdiaW4nXG4gICAgICAgIEBlcSAoIM6pZ2xkX182NSA9IC0+IGRzdC5hcHAudGVtcCAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBkc3QudXNlci50ZW1wLCBkc3QudXNlci5uYW1lLCBhcHBfbmFtZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pZ2xkX182NiA9IC0+IGRzdC51c2VyLmhvbWUgICAgICAgICAgICAgICAgICAgICksIGhvbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzY3ID0gLT4gZHN0LnVzZXIubmFtZSAgICAgICAgICAgICAgICAgICAgKSwgdXNlcl9uZm8udXNlcm5hbWVcbiAgICAgICAgQGVxICggzqlnbGRfXzY4ID0gLT4gZHN0LnVzZXIudGVtcCAgICAgICAgICAgICAgICAgICAgKSwgdGVtcFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlcXVpcmVfd2Fsa19qc190b2tlbnM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgd2Fsa19qc190b2tlbnMsXG4gICAgICAgIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyxcbiAgICAgICAgc3VtbWFyaXplLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3dhbGtfanNfdG9rZW5zKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJfXzY5ID0gLT4gdHlwZV9vZiB3YWxrX2pzX3Rva2VucyAgICAgICAgICAgICksICdnZW5lcmF0b3JmdW5jdGlvbidcbiAgICAgIEBlcSAoIM6pa3ZyX183MCA9IC0+IHR5cGVfb2Ygd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICApLCAnZ2VuZXJhdG9yZnVuY3Rpb24nXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIEBlcSAoIM6pZ2xkX183MSA9IC0+IHR5cGVfb2Ygd2Fsa19qc190b2tlbnMgJycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnZ2VuZXJhdG9yJ1xuICAgICAgICBAZXEgKCDOqWdsZF9fNzIgPSAtPiBbICggd2Fsa19qc190b2tlbnMgJycgKS4uLiwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgW11cbiAgICAgICAgQGVxICggzqlnbGRfXzczID0gLT4gc3VtbWFyaXplIHdhbGtfanNfdG9rZW5zICAgICAgICAgICAgJ3ZhciBhID0gOTsnICAgICAgICAgICksIFwiJiYmSWRlbnRpZmllck5hbWUndmFyJyYmJldoaXRlU3BhY2UnICcmJiZJZGVudGlmaWVyTmFtZSdhJyYmJldoaXRlU3BhY2UnICcmJiZQdW5jdHVhdG9yJz0nJiYmV2hpdGVTcGFjZScgJyYmJk51bWVyaWNMaXRlcmFsJzknJiYmUHVuY3R1YXRvcic7JyYmJlwiXG4gICAgICAgIEBlcSAoIM6pZ2xkX183NCA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgICd2YXIgYSA9IDk7JyAgICAgICAgICApLCBcIiYmJklkZW50aWZpZXJOYW1lJ3ZhcicmJiZJZGVudGlmaWVyTmFtZSdhJyYmJlB1bmN0dWF0b3InPScmJiZOdW1lcmljTGl0ZXJhbCc5JyYmJlB1bmN0dWF0b3InOycmJiZcIlxuICAgICAgICBAZXEgKCDOqWdsZF9fNzUgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICAnXCJ5XCInICAgICAgICAgICAgICAgICApLCBcIlwiXCImJiZTdHJpbmdMaXRlcmFsJ1wieVwiJyYmJlwiXCJcIlxuICAgICAgICBAZXEgKCDOqWdsZF9fNzYgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcIid5J1wiICAgICAgICAgICAgICAgICApLCBcIiYmJlN0cmluZ0xpdGVyYWwnXFxcXCd5XFxcXCcnJiYmXCJcbiAgICAgICAgQGVxICggzqlnbGRfXzc3ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJgQSR7J3knfVpgXCIgICAgICAgICAgKSwgXCImJiZUZW1wbGF0ZUhlYWQnYEEkeycmJiZTdHJpbmdMaXRlcmFsJ1xcXFwneVxcXFwnJyYmJlRlbXBsYXRlVGFpbCd9WmAnJiYmXCJcbiAgICAgICAgQGVxICggzqlnbGRfXzc4ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJmYEEkeyd5J31aYFwiICAgICAgICAgKSwgXCImJiZJZGVudGlmaWVyTmFtZSdmJyYmJlRlbXBsYXRlSGVhZCdgQSR7JyYmJlN0cmluZ0xpdGVyYWwnXFxcXCd5XFxcXCcnJiYmVGVtcGxhdGVUYWlsJ31aYCcmJiZcIlxuICAgICAgICBAZXEgKCDOqWdsZF9fNzkgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcImBBJHtgeWB9WmBcIiAgICAgICAgICApLCBcIiYmJlRlbXBsYXRlSGVhZCdgQSR7JyYmJk5vU3Vic3RpdHV0aW9uVGVtcGxhdGUnYHlgJyYmJlRlbXBsYXRlVGFpbCd9WmAnJiYmXCJcbiAgICAgICAgQGVxICggzqlnbGRfXzc5ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJgQSR7cmVxdWlyZShgeWApfVpgXCIgKSwgXCImJiZUZW1wbGF0ZUhlYWQnYEEkeycmJiZJZGVudGlmaWVyTmFtZSdyZXF1aXJlJyYmJlB1bmN0dWF0b3InKCcmJiZOb1N1YnN0aXR1dGlvblRlbXBsYXRlJ2B5YCcmJiZQdW5jdHVhdG9yJyknJiYmVGVtcGxhdGVUYWlsJ31aYCcmJiZcIlxuICAgICAgICBAZXEgKCDOqWdsZF9fNzkgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcInJlcXVpcmUgPSA3NzdcIiAgICAgICApLCBcIiYmJklkZW50aWZpZXJOYW1lJ3JlcXVpcmUnJiYmUHVuY3R1YXRvcic9JyYmJk51bWVyaWNMaXRlcmFsJzc3NycmJiZcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNvdXJjZSA9IFwiY29uc3QgeyBkLCB9ID0gcmVxdWlyZSggJ3NvbWUtbW9kdWxlJyApOyAvKiByZXF1aXJlKCAnb3RoZXItbW9kdWxlJyApICovXCJcbiAgICAgICAgZm9yIHRva2VuIGZyb20gd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zIHNvdXJjZVxuICAgICAgICAgIGluZm8gJ86pa3ZyX184MCcsIGZcIiN7dG9rZW4udHlwZX06PjIwYzsgI3tycHIgdG9rZW4udmFsdWV9XCJcbiAgICAgICAgQGVxICggzqlnbGRfXzgxID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyBzb3VyY2UgKSwgXCImJiZJZGVudGlmaWVyTmFtZSdjb25zdCcmJiZQdW5jdHVhdG9yJ3snJiYmSWRlbnRpZmllck5hbWUnZCcmJiZQdW5jdHVhdG9yJywnJiYmUHVuY3R1YXRvcid9JyYmJlB1bmN0dWF0b3InPScmJiZJZGVudGlmaWVyTmFtZSdyZXF1aXJlJyYmJlB1bmN0dWF0b3InKCcmJiZTdHJpbmdMaXRlcmFsJ1xcXFwnc29tZS1tb2R1bGVcXFxcJycmJiZQdW5jdHVhdG9yJyknJiYmUHVuY3R1YXRvcic7JyYmJlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVxdWlyZV9wYXJzZV9yZXF1aXJlX3N0YXRlbWVudHM6IC0+XG4gICAgICBGUyAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IHdhbGtfanNfdG9rZW5zLFxuICAgICAgICB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMsXG4gICAgICAgIHJwcl90b2tlbixcbiAgICAgICAgc3VtbWFyaXplLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3dhbGtfanNfdG9rZW5zKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBAZXEgKCDOqWt2cl9fNzAgPSAtPiB0eXBlX29mIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgKSwgJ2dlbmVyYXRvcmZ1bmN0aW9uJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBoaXN0b3J5ICAgICA9IG51bGxcbiAgICAgICAgbGl0ZXJhbF9wa2cgPSBudWxsXG4gICAgICAgIGxpbmVfbnIgICAgID0gbnVsbFxuICAgICAgICByZXNldCAgICAgICA9IC0+IGhpc3RvcnkgPSBsaXRlcmFsX3BrZyA9IGxpbmVfbnIgPSBudWxsXG4gICAgICAgIHNvdXJjZSAgICAgID0gRlMucmVhZEZpbGVTeW5jIF9fZmlsZW5hbWUsIHsgZW5jb2Rpbmc6ICd1dGYtOCcsIH1cbiAgICAgICAgZm9yIHRva2VuIGZyb20gd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zIHNvdXJjZVxuICAgICAgICAgICMgaW5mbyAnzqlrdnJfXzgwJywgZlwiI3t0b2tlbi50eXBlfTo+MjBjOyAje3JwciB0b2tlbi52YWx1ZX1cIlxuICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgc3dpdGNoIGhpc3RvcnlcbiAgICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgICAgd2hlbiBudWxsXG4gICAgICAgICAgICAgIHVubGVzcyAoIHRva2VuLnR5cGUgaXMgJ0lkZW50aWZpZXJOYW1lJyApIGFuZCAoIHRva2VuLnZhbHVlIGlzICdyZXF1aXJlJyApXG4gICAgICAgICAgICAgICAgcmVzZXQoKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgIGhpc3RvcnkgPSBycHJfdG9rZW4gdG9rZW5cbiAgICAgICAgICAgICAgbGluZV9uciA9IHRva2VuLmxpbmVfbnJcbiAgICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgICAgd2hlbiBcIklkZW50aWZpZXJOYW1lJ3JlcXVpcmUnXCJcbiAgICAgICAgICAgICAgdW5sZXNzICggdG9rZW4udHlwZSBpcyAnUHVuY3R1YXRvcicgKSBhbmQgKCB0b2tlbi52YWx1ZSBpcyAnKCcgKVxuICAgICAgICAgICAgICAgIHJlc2V0KClcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICBoaXN0b3J5ICs9ICc7JyArIHJwcl90b2tlbiB0b2tlblxuICAgICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgICB3aGVuIFwiSWRlbnRpZmllck5hbWUncmVxdWlyZSc7UHVuY3R1YXRvcicoJ1wiXG4gICAgICAgICAgICAgIHVubGVzcyAoIHRva2VuLnR5cGUgaXMgJ1N0cmluZ0xpdGVyYWwnIClcbiAgICAgICAgICAgICAgICByZXNldCgpXG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgbGl0ZXJhbF9wa2cgPSB0b2tlbi52YWx1ZVxuICAgICAgICAgICAgICBoaXN0b3J5ICs9ICc7JyArICdbbGl0ZXJhbF0nXG4gICAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICAgIHdoZW4gXCJJZGVudGlmaWVyTmFtZSdyZXF1aXJlJztQdW5jdHVhdG9yJygnO1tsaXRlcmFsXVwiXG4gICAgICAgICAgICAgIHVubGVzcyAoIHRva2VuLnR5cGUgaXMgJ1B1bmN0dWF0b3InICkgYW5kICggdG9rZW4udmFsdWUgaXMgJyknIClcbiAgICAgICAgICAgICAgICByZXNldCgpXG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgZGVidWcgJ86pa3ZyX19fNycsIFwibGluZSAje2xpbmVfbnJ9IGZvdW5kIHJlcXVpcmUgI3tsaXRlcmFsX3BrZ31cIlxuICAgICAgICAjIEBlcSAoIM6pZ2xkX184MSA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgc291cmNlICksIFwiJiYmSWRlbnRpZmllck5hbWUnY29uc3QnJiYmUHVuY3R1YXRvcid7JyYmJklkZW50aWZpZXJOYW1lJ2QnJiYmUHVuY3R1YXRvcicsJyYmJlB1bmN0dWF0b3InfScmJiZQdW5jdHVhdG9yJz0nJiYmSWRlbnRpZmllck5hbWUncmVxdWlyZScmJiZQdW5jdHVhdG9yJygnJiYmU3RyaW5nTGl0ZXJhbCdcXFxcJ3NvbWUtbW9kdWxlXFxcXCcnJiYmUHVuY3R1YXRvcicpJyYmJlB1bmN0dWF0b3InOycmJiZcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlcXVpcmVfcnByX3N0cmluZzogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBycHJfc3RyaW5nLCAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfcnByX3N0cmluZygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZyX184MiA9IC0+IHR5cGVfb2YgcnByX3N0cmluZyApLCAnZnVuY3Rpb24nXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIEBlcSAoIM6pZ2xkX184MyA9IC0+IHJwcl9zdHJpbmcgJycgICAgICAgKSwgXCJcIlwiJydcIlwiXCJcbiAgICAgICAgQGVxICggzqlnbGRfXzg0ID0gLT4gcnByX3N0cmluZyAnXCInICAgICAgKSwgXCJcIlwiJ1wiJ1wiXCJcIlxuICAgICAgICBAZXEgKCDOqWdsZF9fODUgPSAtPiBycHJfc3RyaW5nIFwiJ1wiICAgICAgKSwgXCJcIlwiJ1xcXFwnJ1wiXCJcIlxuICAgICAgICBAZXEgKCDOqWdsZF9fODYgPSAtPiBycHJfc3RyaW5nICdwb3AnICAgICksIFwiXCJcIidwb3AnXCJcIlwiXG4gICAgICAgIEBlcSAoIM6pZ2xkX184NyA9IC0+IHJwcl9zdHJpbmcgJ1wicG9wXCInICApLCBcIlwiXCInXCJwb3BcIidcIlwiXCJcbiAgICAgICAgQGVxICggzqlnbGRfXzg4ID0gLT4gcnByX3N0cmluZyBcIidwb3AnXCIgICksIFwiXCJcIidcXFxcJ3BvcFxcXFwnJ1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEB0YXNrc1xuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9nZXRfbG9jYWxfZGVzdGluYXRpb25zOiBAdGFza3MucmVxdWlyZV9nZXRfbG9jYWxfZGVzdGluYXRpb25zLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyByZXF1aXJlX3dhbGtfanNfdG9rZW5zOiBAdGFza3MucmVxdWlyZV93YWxrX2pzX3Rva2VucywgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfcGFyc2VfcmVxdWlyZV9zdGF0ZW1lbnRzOiBAdGFza3MucmVxdWlyZV9wYXJzZV9yZXF1aXJlX3N0YXRlbWVudHMsIH1cbiJdfQ==
