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
    //-------------------------------------------------------------------------------------------------------
    require_dictionary_tools: function() {
      var SFMODULES, expand_dictionary, get_local_destinations, type_of, Ωkvrt___1;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({expand_dictionary} = SFMODULES.require_dictionary_tools());
      ({get_local_destinations} = SFMODULES.require_get_local_destinations());
      //.....................................................................................................
      this.eq((Ωkvrt___1 = function() {
        return type_of(expand_dictionary);
      }), 'function');
      (() => {
        var expanded, matcher, strings, strings_copy, Ωkvrt___2, Ωkvrt___3, Ωkvrt___4;
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
        this.eq((Ωkvrt___2 = function() {
          return strings;
        }), strings_copy);
        this.eq((Ωkvrt___3 = function() {
          return expanded;
        }), matcher);
        this.eq((Ωkvrt___4 = function() {
          return expanded === strings;
        }), false);
        return null;
      })();
      (() => {        //.....................................................................................................
        var strings, strings_copy, Ωkvrt___5, Ωkvrt___6;
        strings = {
          '${greet}': "Hello ${who}",
          '${who}': "dear ${target}",
          '${target}': "world ${greet}"
        };
        strings_copy = {...strings};
        this.throws((Ωkvrt___5 = function() {
          return expand_dictionary(strings);
        }), /cyclic reference detected for \$\{greet\}/);
        this.eq((Ωkvrt___6 = function() {
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
          debug('Ωkvrt___7', f`${key}:<20c; ${rpr(value)}`);
        }
        return null;
      })();
      (() => {        //.....................................................................................................
        var _bricabrac_compiled_json, bricabrac_json, key, pattern_key, pattern_value, ref, ref1, ref2, ref3, result, source_spec, target_path, value, Ωkvrt__10, Ωkvrt__11, Ωkvrt__12, Ωkvrt___9;
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
        // debug 'Ωkvrt___8', result
        this.eq((Ωkvrt___9 = function() {
          return false;
        }), "resolve home directory with os.homedir() / local-destination.brics");
        this.eq((Ωkvrt__10 = function() {
          return Object.keys(result);
        }), Object.keys(_bricabrac_compiled_json));
        ref2 = result.strings;
        for (key in ref2) {
          value = ref2[key];
          this.eq((Ωkvrt__11 = function() {
            return value;
          }), _bricabrac_compiled_json.strings[key]);
        }
        ref3 = result.mappings;
        for (key in ref3) {
          value = ref3[key];
          this.eq((Ωkvrt__12 = function() {
            return value;
          }), _bricabrac_compiled_json.mappings[key]);
        }
        // debug 'Ωkvrt__13', ( get_local_destinations null ).home
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    require_get_local_destinations: function() {
      var FS, OS, PATH, SFMODULES, get_local_destinations, type_of, Ωkvrt__14;
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
      this.eq((Ωkvrt__14 = function() {
        return type_of(get_local_destinations);
      }), 'function');
      (() => {        //.....................................................................................................
        var app_name, dst, home, temp, user_nfo, Ωkvrt__15, Ωkvrt__16, Ωkvrt__17, Ωkvrt__18, Ωkvrt__19, Ωkvrt__20, Ωkvrt__21, Ωkvrt__22, Ωkvrt__23, Ωkvrt__24, Ωkvrt__25, Ωkvrt__26, Ωkvrt__27, Ωkvrt__28, Ωkvrt__29, Ωkvrt__30, Ωkvrt__31, Ωkvrt__32;
        app_name = 'my-app-name';
        dst = get_local_destinations({app_name});
        user_nfo = OS.userInfo();
        home = FS.realpathSync(OS.homedir());
        temp = FS.realpathSync(OS.tmpdir());
        //...................................................................................................
        this.eq((Ωkvrt__15 = function() {
          return (Object.keys(dst)).sort();
        }), ['app', 'user']);
        this.eq((Ωkvrt__16 = function() {
          return (Object.keys(dst.app)).sort();
        }), ['cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp']);
        this.eq((Ωkvrt__17 = function() {
          return (Object.keys(dst.user)).sort();
        }), ['home', 'name', 'temp']);
        //...................................................................................................
        this.eq((Ωkvrt__18 = function() {
          return type_of(dst.app);
        }), 'pod');
        this.eq((Ωkvrt__19 = function() {
          return type_of(dst.user);
        }), 'pod');
        //...................................................................................................
        this.eq((Ωkvrt__20 = function() {
          return PATH.basename(dst.app.cache);
        }), app_name);
        this.eq((Ωkvrt__21 = function() {
          return PATH.basename(dst.app.config);
        }), app_name);
        this.eq((Ωkvrt__22 = function() {
          return PATH.basename(dst.app.data);
        }), app_name);
        this.eq((Ωkvrt__23 = function() {
          return dst.app.dep_bin;
        }), PATH.resolve(home, app_name, 'node_modules', '.bin'));
        this.eq((Ωkvrt__24 = function() {
          return dst.app.home;
        }), PATH.resolve(home, app_name));
        this.eq((Ωkvrt__25 = function() {
          return PATH.basename(dst.app.log);
        }), app_name);
        this.eq((Ωkvrt__26 = function() {
          return dst.app.name;
        }), app_name);
        this.eq((Ωkvrt__27 = function() {
          return dst.app.node_modules;
        }), PATH.resolve(home, app_name, 'node_modules'));
        this.eq((Ωkvrt__28 = function() {
          return dst.app.own_bin;
        }), PATH.resolve(home, app_name, 'bin'));
        this.eq((Ωkvrt__29 = function() {
          return dst.app.temp;
        }), PATH.resolve(dst.user.temp, dst.user.name, app_name));
        //...................................................................................................
        this.eq((Ωkvrt__30 = function() {
          return dst.user.home;
        }), home);
        this.eq((Ωkvrt__31 = function() {
          return dst.user.name;
        }), user_nfo.username);
        this.eq((Ωkvrt__32 = function() {
          return dst.user.temp;
        }), temp);
        //...................................................................................................
        return null;
      })();
      (() => {        //.....................................................................................................
        var app_name, dst, home, temp, user_nfo, Ωkvrt__33, Ωkvrt__34, Ωkvrt__35, Ωkvrt__36, Ωkvrt__37, Ωkvrt__38, Ωkvrt__39, Ωkvrt__40, Ωkvrt__41, Ωkvrt__42, Ωkvrt__43, Ωkvrt__44, Ωkvrt__45, Ωkvrt__46, Ωkvrt__47, Ωkvrt__48, Ωkvrt__49, Ωkvrt__50;
        app_name = null;
        dst = get_local_destinations({app_name});
        user_nfo = OS.userInfo();
        home = FS.realpathSync(OS.homedir());
        temp = FS.realpathSync(OS.tmpdir());
        //...................................................................................................
        this.eq((Ωkvrt__33 = function() {
          return (Object.keys(dst)).sort();
        }), ['app', 'user']);
        this.eq((Ωkvrt__34 = function() {
          return (Object.keys(dst.app)).sort();
        }), ['cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp']);
        this.eq((Ωkvrt__35 = function() {
          return (Object.keys(dst.user)).sort();
        }), ['home', 'name', 'temp']);
        //...................................................................................................
        this.eq((Ωkvrt__36 = function() {
          return type_of(dst.app);
        }), 'pod');
        this.eq((Ωkvrt__37 = function() {
          return type_of(dst.user);
        }), 'pod');
        //...................................................................................................
        this.eq((Ωkvrt__38 = function() {
          return PATH.basename(dst.app.cache);
        }), '<YOUR-APP-NAME-HERE>');
        this.eq((Ωkvrt__39 = function() {
          return PATH.basename(dst.app.config);
        }), '<YOUR-APP-NAME-HERE>');
        this.eq((Ωkvrt__40 = function() {
          return PATH.basename(dst.app.data);
        }), '<YOUR-APP-NAME-HERE>');
        this.eq((Ωkvrt__41 = function() {
          return dst.app.dep_bin;
        }), PATH.resolve(home, '<YOUR-APP-NAME-HERE>', 'node_modules', '.bin'));
        this.eq((Ωkvrt__42 = function() {
          return dst.app.home;
        }), PATH.resolve(home, '<YOUR-APP-NAME-HERE>'));
        this.eq((Ωkvrt__43 = function() {
          return PATH.basename(dst.app.log);
        }), '<YOUR-APP-NAME-HERE>');
        this.eq((Ωkvrt__44 = function() {
          return dst.app.name;
        }), '<YOUR-APP-NAME-HERE>');
        this.eq((Ωkvrt__45 = function() {
          return dst.app.node_modules;
        }), PATH.resolve(home, '<YOUR-APP-NAME-HERE>', 'node_modules'));
        this.eq((Ωkvrt__46 = function() {
          return dst.app.own_bin;
        }), PATH.resolve(home, '<YOUR-APP-NAME-HERE>', 'bin'));
        this.eq((Ωkvrt__47 = function() {
          return dst.app.temp;
        }), PATH.resolve(dst.user.temp, dst.user.name, '<YOUR-APP-NAME-HERE>'));
        //...................................................................................................
        this.eq((Ωkvrt__48 = function() {
          return dst.user.home;
        }), home);
        this.eq((Ωkvrt__49 = function() {
          return dst.user.name;
        }), user_nfo.username);
        this.eq((Ωkvrt__50 = function() {
          return dst.user.temp;
        }), temp);
        //...................................................................................................
        return null;
      })();
      (() => {        //.....................................................................................................
        var app_home, app_name, dst, home, temp, user_nfo, Ωkvrt__51, Ωkvrt__52, Ωkvrt__53, Ωkvrt__54, Ωkvrt__55, Ωkvrt__56, Ωkvrt__57, Ωkvrt__58, Ωkvrt__59, Ωkvrt__60, Ωkvrt__61, Ωkvrt__62, Ωkvrt__63, Ωkvrt__64, Ωkvrt__65, Ωkvrt__66, Ωkvrt__67, Ωkvrt__68;
        app_name = 'frobulator';
        app_home = '/path/to/projects';
        dst = get_local_destinations({app_name, app_home});
        user_nfo = OS.userInfo();
        home = FS.realpathSync(OS.homedir());
        temp = FS.realpathSync(OS.tmpdir());
        //...................................................................................................
        this.eq((Ωkvrt__51 = function() {
          return (Object.keys(dst)).sort();
        }), ['app', 'user']);
        this.eq((Ωkvrt__52 = function() {
          return (Object.keys(dst.app)).sort();
        }), ['cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp']);
        this.eq((Ωkvrt__53 = function() {
          return (Object.keys(dst.user)).sort();
        }), ['home', 'name', 'temp']);
        //...................................................................................................
        this.eq((Ωkvrt__54 = function() {
          return type_of(dst.app);
        }), 'pod');
        this.eq((Ωkvrt__55 = function() {
          return type_of(dst.user);
        }), 'pod');
        //...................................................................................................
        this.eq((Ωkvrt__56 = function() {
          return PATH.basename(dst.app.cache);
        }), app_name);
        this.eq((Ωkvrt__57 = function() {
          return PATH.basename(dst.app.config);
        }), app_name);
        this.eq((Ωkvrt__58 = function() {
          return PATH.basename(dst.app.data);
        }), app_name);
        this.eq((Ωkvrt__59 = function() {
          return dst.app.dep_bin;
        }), PATH.resolve(home, app_home, app_name, 'node_modules', '.bin'));
        this.eq((Ωkvrt__60 = function() {
          return dst.app.home;
        }), PATH.resolve(home, app_home, app_name));
        this.eq((Ωkvrt__61 = function() {
          return PATH.basename(dst.app.log);
        }), app_name);
        this.eq((Ωkvrt__62 = function() {
          return dst.app.name;
        }), app_name);
        this.eq((Ωkvrt__63 = function() {
          return dst.app.node_modules;
        }), PATH.resolve(home, app_home, app_name, 'node_modules'));
        this.eq((Ωkvrt__64 = function() {
          return dst.app.own_bin;
        }), PATH.resolve(home, app_home, app_name, 'bin'));
        this.eq((Ωkvrt__65 = function() {
          return dst.app.temp;
        }), PATH.resolve(dst.user.temp, dst.user.name, app_name));
        //...................................................................................................
        this.eq((Ωkvrt__66 = function() {
          return dst.user.home;
        }), home);
        this.eq((Ωkvrt__67 = function() {
          return dst.user.name;
        }), user_nfo.username);
        this.eq((Ωkvrt__68 = function() {
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
      var SFMODULES, summarize, type_of, walk_essential_js_tokens, walk_js_tokens, Ωkvrt__69, Ωkvrt__70;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({walk_js_tokens, walk_essential_js_tokens, summarize} = SFMODULES.require_walk_js_tokens());
      //.....................................................................................................
      this.eq((Ωkvrt__69 = function() {
        return type_of(walk_js_tokens);
      }), 'generatorfunction');
      this.eq((Ωkvrt__70 = function() {
        return type_of(walk_essential_js_tokens);
      }), 'generatorfunction');
      (() => {        //.....................................................................................................
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
        //...................................................................................................
        source = "const { d, } = require( 'some-module' ); /* require( 'other-module' ) */";
        for (token of walk_essential_js_tokens(source)) {
          info('Ωkvrt__88', f`${token.type}:>20c; ${rpr(token.value)}`);
        }
        this.eq((Ωkvrt__89 = function() {
          return summarize(walk_essential_js_tokens(source));
        }), "&&&IdentifierName'const'&&&Punctuator'{'&&&IdentifierName'd'&&&Punctuator','&&&Punctuator'}'&&&Punctuator'='&&&IdentifierName'require'&&&Punctuator'('&&&StringLiteral'\\'some-module\\''&&&Punctuator')'&&&Punctuator';'&&&eof&&&");
        //...................................................................................................
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    require_parse_require_statements: function() {
      var FS, PATH, SFMODULES, summarize, type_of, walk_essential_js_tokens, walk_js_tokens, walk_require_statements, Ωkvrt__90;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({walk_require_statements} = SFMODULES.require_parse_require_statements());
      ({walk_js_tokens, walk_essential_js_tokens, summarize} = SFMODULES.require_walk_js_tokens());
      PATH = require('node:path');
      FS = require('node:fs');
      //.....................................................................................................
      this.eq((Ωkvrt__90 = function() {
        return type_of(walk_require_statements);
      }), 'function');
      (() => {        //.....................................................................................................
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
        //...................................................................................................
        return null;
      })();
      (() => {        //.....................................................................................................
        var d, results, token;
        //...................................................................................................
        whisper('————————————————————————————————————–');
        for (d of walk_require_statements({
          source: 'require("xxx");'
        })) {
          info('Ωkvrt_111', d);
        }
        //...................................................................................................
        whisper('————————————————————————————————————–');
        for (d of walk_require_statements({
          source: 'require("xxx") // semver: 5.6.7'
        })) {
          urge('Ωkvrt_112', d);
        }
        //...................................................................................................
        whisper('————————————————————————————————————–');
        for (token of walk_js_tokens('require("xxx"); // semver: 5.6.7')) {
          help('Ωkvrt_113', token);
        }
        //...................................................................................................
        whisper('————————————————————————————————————–');
        results = [];
        for (d of walk_require_statements({
          source: 'require("xxx"); // semver: 5.6.7'
        })) {
          results.push(info('Ωkvrt_114', d));
        }
        return results;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    require_rpr_string: function() {
      var SFMODULES, rpr_string, type_of, Ωkvrt_115;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({rpr_string} = SFMODULES.require_rpr_string());
      //.....................................................................................................
      this.eq((Ωkvrt_115 = function() {
        return type_of(rpr_string);
      }), 'function');
      (() => {        //.....................................................................................................
        var Ωkvrt_116, Ωkvrt_117, Ωkvrt_118, Ωkvrt_119, Ωkvrt_120, Ωkvrt_121;
        this.eq((Ωkvrt_116 = function() {
          return rpr_string('');
        }), `''`);
        this.eq((Ωkvrt_117 = function() {
          return rpr_string('"');
        }), `'"'`);
        this.eq((Ωkvrt_118 = function() {
          return rpr_string("'");
        }), `'\\''`);
        this.eq((Ωkvrt_119 = function() {
          return rpr_string('pop');
        }), `'pop'`);
        this.eq((Ωkvrt_120 = function() {
          return rpr_string('"pop"');
        }), `'"pop"'`);
        this.eq((Ωkvrt_121 = function() {
          return rpr_string("'pop'");
        }), `'\\'pop\\''`);
        //...................................................................................................
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    require_path_tools: function() {
      var SFMODULES, is_inside, type_of, Ωkvrt_122;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({is_inside} = SFMODULES.require_path_tools());
      //.....................................................................................................
      this.eq((Ωkvrt_122 = function() {
        return type_of(is_inside);
      }), 'function');
      (() => {        //.....................................................................................................
        var Ωkvrt_123, Ωkvrt_124, Ωkvrt_125, Ωkvrt_126, Ωkvrt_127, Ωkvrt_128, Ωkvrt_129, Ωkvrt_130, Ωkvrt_131, Ωkvrt_132, Ωkvrt_133, Ωkvrt_134, Ωkvrt_135, Ωkvrt_136, Ωkvrt_137, Ωkvrt_138, Ωkvrt_139;
        this.throws((Ωkvrt_123 = function() {
          return is_inside('../path/to/file', '/');
        }), /expected an absolute path as anchor/);
        this.throws((Ωkvrt_124 = function() {
          return is_inside('../path/to/file', 'wat');
        }), /expected an absolute path as anchor/);
        this.throws((Ωkvrt_125 = function() {
          return is_inside('../path/to/file', '../path/to/file');
        }), /expected an absolute path as anchor/);
        this.throws((Ωkvrt_126 = function() {
          return is_inside('path/to/file', '../path/to/file');
        }), /expected an absolute path as anchor/);
        //...................................................................................................
        this.eq((Ωkvrt_127 = function() {
          return is_inside('/', '/path/to/file');
        }), true);
        this.eq((Ωkvrt_128 = function() {
          return is_inside('/path/to/file', '/path/to/file');
        }), true);
        this.eq((Ωkvrt_129 = function() {
          return is_inside('/path/to/file', 'oops');
        }), true);
        this.eq((Ωkvrt_130 = function() {
          return is_inside('/path/../file', '/file');
        }), true);
        this.eq((Ωkvrt_131 = function() {
          return is_inside('/path/../file/.', '/file');
        }), true);
        this.eq((Ωkvrt_132 = function() {
          return is_inside('/path/../file/./././.', '/file');
        }), true);
        this.eq((Ωkvrt_133 = function() {
          return is_inside('/path/to/file', '.\\./oops');
        }), true);
        this.eq((Ωkvrt_134 = function() {
          return is_inside('/path/to/file', '..\\/oops');
        }), true);
        //...................................................................................................
        this.eq((Ωkvrt_135 = function() {
          return is_inside('/path/to/file/wat', '/path/to/file');
        }), false);
        this.eq((Ωkvrt_136 = function() {
          return is_inside('/path/to/file', '../oops');
        }), false);
        this.eq((Ωkvrt_137 = function() {
          return is_inside('/path/to/file', '/oops');
        }), false);
        this.eq((Ωkvrt_138 = function() {
          return is_inside('/path/to/file', '/');
        }), false);
        this.eq((Ωkvrt_139 = function() {
          return is_inside('/path/../file', '/path');
        }), false);
        //...................................................................................................
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    require_jetstream: function() {
      var $, Jetstream, SFMODULES, internals, type_of, Ωkvrt_140, Ωkvrt_141;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, $, internals} = SFMODULES.require_jetstream());
      //.....................................................................................................
      this.eq((Ωkvrt_140 = function() {
        return type_of(new Jetstream());
      }), 'object');
      this.eq((Ωkvrt_141 = function() {
        return type_of((new Jetstream()).walk('data'));
      }), 'generator');
      (() => {        //.....................................................................................................
        var ex, first, jet, last, surround, upper, watch, watched_1, watched_2, watched_3, watched_4, Ωap_142, Ωap_143, Ωap_148, Ωap_149, Ωap_150, Ωap_151, Ωap_152, Ωap_153, Ωap_154, Ωap_155, Ωap_156;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream();
        //...................................................................................................
        this.eq((Ωap_142 = function() {
          return jet.length;
        }), 0);
        this.eq((Ωap_143 = function() {
          return jet.is_empty;
        }), true);
        //...................................................................................................
        watched_1 = [];
        watched_2 = [];
        watched_3 = [];
        watched_4 = [];
        jet.push(watch = function(d) {
          help('Ωap_144', rpr(d));
          return watched_1.push(d);
        });
        jet.push(upper = function*(d) {
          return (yield d.toUpperCase());
        });
        jet.push(watch = function(d) {
          info('Ωap_145', rpr(d));
          return watched_2.push(d);
        });
        jet.push(ex = function*(d, mark = '!') {
          return (yield d + mark);
        });
        jet.push(watch = function(d) {
          help('Ωap_146', rpr(d));
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
          urge('Ωap_147', rpr(d));
          return watched_4.push(d);
        });
        //...................................................................................................
        this.eq((Ωap_148 = function() {
          return jet.length;
        }), 7);
        this.eq((Ωap_149 = function() {
          return jet.is_empty;
        }), false);
        this.eq((Ωap_150 = function() {
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
        this.eq((Ωap_151 = function() {
          return watched_1;
        }), ['hidey-ho']);
        this.eq((Ωap_152 = function() {
          return watched_2;
        }), ['HIDEY-HO']);
        this.eq((Ωap_153 = function() {
          return watched_3;
        }), ['HIDEY-HO!']);
        this.eq((Ωap_154 = function() {
          return watched_4;
        }), [`Let's say: \"`, 'HIDEY-HO!', '".']);
        this.eq((Ωap_155 = function() {
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
        this.eq((Ωap_156 = function() {
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
      (() => {        //.....................................................................................................
        var add_1, jet, Ωap_157;
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
        this.eq((Ωap_157 = function() {
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
      (() => {        //.....................................................................................................
        var Ωap_158, Ωap_159;
        /* empty pipeline is a pipeline without transforms, so data is passed through untransformed: */
        this.eq((Ωap_158 = function() {
          return [...((new Jetstream()).walk('data'))];
        }), ['data']);
        this.eq((Ωap_159 = function() {
          return (new Jetstream()).run('data');
        }), ['data']);
        return null;
      })();
      (() => {        //.....................................................................................................
        var collector, p_1, p_2, p_3, Ωap_160, Ωap_161, Ωap_162;
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
        this.eq((Ωap_160 = function() {
          return p_3.run('my-data');
        }), ['my-data № 5 № 3 № 1 № 2 № 4 № 6']);
        this.eq((Ωap_161 = function() {
          return collector;
        }), ['p3-t1', 'p2-t1', 'p1-t1', 'p1-t2', 'p2-t2', 'p3-t2']);
        this.eq((Ωap_162 = function() {
          return p_3.get_first('my-data');
        }), 'my-data № 5 № 3 № 1 № 2 № 4 № 6');
        return null;
      })();
      (() => {        //.....................................................................................................
        var first, g, jet, last, transform_1, transform_2, Ωkvrt_169, Ωkvrt_170, Ωkvrt_171;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream();
        g = function*(d) {
          urge('Ωkvrt_163', d);
          if (d === first) {
            info('Ωkvrt_164', "yield for first");
          }
          if (d === first) {
            yield 0;
          }
          if (d !== first && d !== last) {
            info('Ωkvrt_165', "yield for data");
          }
          if (d !== first && d !== last) {
            yield d * 2;
          }
          if (d === last) {
            info('Ωkvrt_166', "yield for last");
          }
          if (d === last) {
            return (yield 1);
          }
        };
        transform_1 = $({first}, g);
        transform_2 = $({last}, g);
        jet.push(transform_1);
        jet.push(transform_2);
        debug('Ωkvrt_167', jet);
        whisper('Ωkvrt_168', '————————————————————————————————————–');
        this.eq((Ωkvrt_169 = function() {
          return transform_1[internals.CFG];
        }), {first});
        this.eq((Ωkvrt_170 = function() {
          return transform_2[internals.CFG];
        }), {last});
        this.eq((Ωkvrt_171 = function() {
          return jet.run(22);
        }), [0, 1, 88, 1]);
        whisper('Ωkvrt_172', '————————————————————————————————————–');
        return null;
      })();
      (()/* same as above but the transforms are seperate */ => {        //.....................................................................................................
        var first, g1, g2, jet, last, transform_1, transform_2, Ωkvrt_183, Ωkvrt_184, Ωkvrt_185;
        first = Symbol('first');
        last = Symbol('last');
        jet = new Jetstream();
        g1 = function*(d) {
          urge('Ωkvrt_173 g1', d);
          if (d === first) {
            info('Ωkvrt_174 g1', "yield for first");
          }
          if (d === first) {
            yield 0;
          }
          if (d !== first && d !== last) {
            info('Ωkvrt_175 g1', "yield for data");
          }
          if (d !== first && d !== last) {
            yield d * 2;
          }
          if (d === last) {
            info('Ωkvrt_176 g1', "yield for last");
          }
          if (d === last) {
            return (yield 1);
          }
        };
        g2 = function*(d) {
          urge('Ωkvrt_177 g2', d);
          if (d === first) {
            info('Ωkvrt_178 g2', "yield for first");
          }
          if (d === first) {
            yield 0;
          }
          if (d !== first && d !== last) {
            info('Ωkvrt_179 g2', "yield for data");
          }
          if (d !== first && d !== last) {
            yield d * 2;
          }
          if (d === last) {
            info('Ωkvrt_180 g2', "yield for last");
          }
          if (d === last) {
            return (yield 1);
          }
        };
        transform_1 = $({first}, g1);
        transform_2 = $({last}, g2);
        jet.push(transform_1);
        jet.push(transform_2);
        debug('Ωkvrt_181', jet);
        whisper('Ωkvrt_182', '————————————————————————————————————–');
        this.eq((Ωkvrt_183 = function() {
          return transform_1[internals.CFG];
        }), {first});
        this.eq((Ωkvrt_184 = function() {
          return transform_2[internals.CFG];
        }), {last});
        this.eq((Ωkvrt_185 = function() {
          return jet.run(22);
        }), [0, 1, 88, 1]);
        whisper('Ωkvrt_186', '————————————————————————————————————–');
        return null;
      })();
      //.....................................................................................................
      return null;
    },
    //-------------------------------------------------------------------------------------------------------
    jetstream_selectors: function() {
      var $, Jetstream, SFMODULES, internals, type_of;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Jetstream, $, internals} = SFMODULES.require_jetstream());
      (() => {        //.....................................................................................................
        // @eq ( Ωkvrt_187 = -> type_of ( new Jetstream() )              ), 'object'
        //.....................................................................................................
        var Selector, id_from_symbol, normalize_selectors, selectors, selectors_as_list, stream_items;
        stream_items = [Symbol('start'), Symbol.for('start'), Symbol('end'), Symbol.for('end'), 76.9, "Mexico"];
        selectors = [
          {
            probe: null,
            normalized: new Set(['data'])
          },
          {
            probe: '',
            normalized: new Set([''])
          },
          {
            probe: 'data',
            normalized: new Set(['data'])
          },
          {
            probe: ['data',
          'cue'],
            normalized: new Set(['data',
          'cue'])
          },
          {
            probe: 'data, cue',
            normalized: new Set(['data',
          'cue'])
          },
          {
            probe: 'cue',
            normalized: new Set(['cue'])
          },
          {
            probe: 'cue#end',
            normalized: new Set(['cue#end'])
          },
          {
            probe: '#end',
            normalized: new Set(['cue#end'])
          },
          {
            probe: 'cue#start',
            normalized: new Set(['cue#start'])
          },
          {
            probe: '#start',
            normalized: new Set(['cue#start'])
          },
          {
            probe: 'cue#start,cue#end',
            normalized: new Set(['cue#start',
          'cue#end'])
          },
          {
            probe: ['cue#start',
          'cue#end'],
            normalized: new Set(['cue#start',
          'cue#end'])
          },
          {
            probe: '#start,#end',
            normalized: new Set(['cue#start',
          'cue#end'])
          },
          {
            probe: ['#start',
          '#end'],
            normalized: new Set(['cue#start',
          'cue#end'])
          }
        ];
        //=====================================================================================================
        Selector = class Selector {
          constructor(...selectors) {
            var ignore_cue_ids, match, selector;
            selectors = normalize_selectors(...selectors);
            this.reject_all = false;
            this.data = true;
            this.cues = false;
            ignore_cue_ids = false;
            for (selector of selectors) {
              switch (true) {
                case selector === 'data#*':
                  this.data = true;
                  break;
                case selector === 'cue#*':
                  this.cues = true;
                  break;
                case (match = selector.match(/^data#(?<id>.+)$/)) != null:
                  /* TAINT mention original selector next to normalized form */
                  throw new Error(`Ωjstrm_188 IDs on data items not supported, got ${selector}`);
                case (match = selector.match(/^cue#(?<id>.+)$/)) != null:
                  if (!(typeof this.cues === 'set')) {
                    this.cues = new Set();
                  }
                  this.cues.add(match.groups.id);
                  break;
                default:
                  null;
              }
            }
            return void 0;
          }

          //---------------------------------------------------------------------------------------------------
          select(item) {
            var is_cue;
            if (this.reject_all) {
              return false;
            }
            if (is_cue = (typeof item) === 'symbol') {
              if (this.cues === true) {
                return true;
              }
              if (this.cues === false) {
                return false;
              }
              return this.cues.has(id_from_symbol(item));
            }
            if (this.data === true) {
              return true;
            }
            if (this.data === false) {
              return false;
            }
            throw new Error("Ωjstrm_188 IDs on data items not supported");
          }

          // return @data.has id_from_value item

            //---------------------------------------------------------------------------------------------------
          toString() {
            var R;
            R = [];
            if (this.all_cues) {
              R.push('+cue');
            }
            if (this.no_cues) {
              R.push('-cue');
            }
            if (this.all_data) {
              R.push('+data');
            }
            if (this.no_data) {
              R.push('-data');
            }
            return R.join('^');
          }

        };
        //---------------------------------------------------------------------------------------------------
        id_from_symbol = function(symbol) {
          var R;
          R = String(symbol);
          return R.slice(7, R.length - 1);
        };
        //---------------------------------------------------------------------------------------------------
        selectors_as_list = function(...selectors) {
          if (selectors.length === 0) {
            return [];
          }
          selectors = selectors.flat(2e308);
          if (selectors.length === 0) {
            return [];
          }
          if (selectors.length === 1 && selectors[0] === '') {
            return [''];
          }
          selectors = selectors.join(',');
          selectors = selectors.replace(/\s+/g, '');
          selectors = selectors.split(',');
/* TAINT not generally possible */          return selectors;
        };
        //---------------------------------------------------------------------------------------------------
        normalize_selectors = function(...selectors) {
          var R, i, len, selector;
          selectors = selectors_as_list(...selectors);
          R = new Set();
          for (i = 0, len = selectors.length; i < len; i++) {
            selector = selectors[i];
            switch (true) {
              case selector === '':
                null;
                break;
              case selector === '#':
                R.add("cue#*");
                break;
              case /^#.+/.test(selector):
                R.add(`cue${selector}`);
                break;
              case /.+#$/.test(selector):
                R.add(`${selector}*`);
                break;
              case !/#/.test(selector):
                R.add(`${selector}#*`);
                break;
              default:
                R.add(selector);
            }
          }
          if (R.size === 0) {
            R.add('data#*');
          }
          if (R.size !== 1) {
            R.delete('');
          }
          return R;
        };
        //===================================================================================================
        debug('Ωkvrt_189', rpr(selectors_as_list('')));
        debug('Ωkvrt_190', rpr(selectors_as_list([['']])));
        debug('Ωkvrt_191', rpr(selectors_as_list()));
        debug('Ωkvrt_192', rpr(selectors_as_list([])));
        debug('Ωkvrt_193', rpr(selectors_as_list([[]])));
        debug('Ωkvrt_194', rpr(selectors_as_list('data')));
        debug('Ωkvrt_195', rpr(selectors_as_list('cue')));
        debug('Ωkvrt_196', rpr(selectors_as_list('cue', 'data')));
        debug('Ωkvrt_197', rpr(selectors_as_list(' cue#start, cue#end ')));
        debug('Ωkvrt_198', rpr(selectors_as_list('#start')));
        debug('Ωkvrt_199', rpr(selectors_as_list('#start,#end')));
        debug('Ωkvrt_200', rpr(selectors_as_list('#end,#start')));
        debug('Ωkvrt_201', rpr(selectors_as_list('#end,#start,')));
        debug('Ωkvrt_202', rpr(selectors_as_list('#')));
        debug('Ωkvrt_203', rpr(selectors_as_list('data#')));
        debug('Ωkvrt_204', rpr(selectors_as_list('data#foo#bar')));
        debug('Ωkvrt_205', rpr(selectors_as_list('#foo#bar')));
        debug('Ωkvrt_206', '————————————————————————————————————–');
        debug('Ωkvrt_207', rpr(normalize_selectors('')));
        debug('Ωkvrt_208', rpr(normalize_selectors([['']])));
        debug('Ωkvrt_209', rpr(normalize_selectors()));
        debug('Ωkvrt_210', rpr(normalize_selectors([])));
        debug('Ωkvrt_211', rpr(normalize_selectors([[]])));
        debug('Ωkvrt_212', rpr(normalize_selectors('data')));
        debug('Ωkvrt_213', rpr(normalize_selectors('cue')));
        debug('Ωkvrt_214', rpr(normalize_selectors('cue', 'data')));
        debug('Ωkvrt_215', rpr(normalize_selectors(' cue#start, cue#end ')));
        debug('Ωkvrt_216', rpr(normalize_selectors('#start')));
        debug('Ωkvrt_217', rpr(normalize_selectors('#start,#end')));
        debug('Ωkvrt_218', rpr(normalize_selectors('#end,#start')));
        debug('Ωkvrt_219', rpr(normalize_selectors('#end,#start,')));
        debug('Ωkvrt_220', rpr(normalize_selectors('#')));
        debug('Ωkvrt_221', rpr(normalize_selectors('data#')));
        debug('Ωkvrt_222', rpr(normalize_selectors('data#foo#bar')));
        debug('Ωkvrt_223', rpr(normalize_selectors('#foo#bar')));
        debug('Ωkvrt_206', '————————————————————————————————————–');
        debug('Ωkvrt_207', new Selector(''));
        debug('Ωkvrt_208', new Selector([['']]));
        debug('Ωkvrt_209', new Selector());
        debug('Ωkvrt_210', new Selector([]));
        debug('Ωkvrt_211', new Selector([[]]));
        debug('Ωkvrt_212', new Selector('data'));
        debug('Ωkvrt_213', new Selector('cue'));
        debug('Ωkvrt_214', new Selector('cue', 'data'));
        debug('Ωkvrt_215', new Selector(' cue#start, cue#end '));
        debug('Ωkvrt_216', new Selector('#start'));
        debug('Ωkvrt_217', new Selector('#start,#end'));
        debug('Ωkvrt_218', new Selector('#end,#start'));
        debug('Ωkvrt_219', new Selector('#end,#start,'));
        debug('Ωkvrt_220', new Selector('#'));
        debug('Ωkvrt_221', new Selector('data#'));
        // debug 'Ωkvrt_222', new Selector 'data#foo#bar'
        return debug('Ωkvrt_223', new Selector('#foo#bar'));
      })();
      // selector = new Selector()
      // # for selector_text in selectors
      // selector_text = selector.toString()
      // for item in stream_items
      //   help 'Ωkvrt_224', f"#{rpr selector_text}:<20c; #{rpr item}:<20c; #{selector.select item}"
      //.....................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  demo_improved_structure = function() {
    var DIS;
    help('Ωkvrt_225', require('../../../apps/bricabrac-sfmodules'));
    DIS = require('../../../apps/bricabrac-sfmodules/lib/_demo-improved-structure');
    help('Ωkvrt_226', DIS);
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
      // ( new Test guytest_cfg ).test { require_parse_require_statements: @tasks.require_parse_require_statements, }
      // ( new Test guytest_cfg ).test { require_jetstream: @tasks.require_jetstream, }
      return (new Test(guytest_cfg)).test({
        jetstream_selectors: this.tasks.jetstream_selectors
      });
    })();
  }

  // ( new Test guytest_cfg ).test { require_path_tools: @tasks.require_path_tools, }
// demo_improved_structure()

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLHVCQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQXBCQTs7Ozs7RUEyQkEsSUFBQyxDQUFBLEtBQUQsR0FHSSxDQUFBOztJQUFBLHdCQUFBLEVBQTBCLFFBQUEsQ0FBQSxDQUFBO0FBQzlCLFVBQUEsU0FBQSxFQUFBLGlCQUFBLEVBQUEsc0JBQUEsRUFBQSxPQUFBLEVBQUE7TUFBTSxTQUFBLEdBQThCLE9BQUEsQ0FBUSxtQ0FBUjtNQUM5QixDQUFBLENBQUUsT0FBRixDQUFBLEdB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OzthQU9FLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxtQkFBQSxFQUFxQixJQUFDLENBQUEsS0FBSyxDQUFDO01BQTlCLENBQTlCO0lBUnNDLENBQUEsSUFBeEM7OztFQTlzQkE7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1zZm1vZHVsZXMvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0YXNrcyA9XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlcXVpcmVfZGljdGlvbmFyeV90b29sczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBleHBhbmRfZGljdGlvbmFyeSwgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfZGljdGlvbmFyeV90b29scygpXG4gICAgICB7IGdldF9sb2NhbF9kZXN0aW5hdGlvbnMsIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9nZXRfbG9jYWxfZGVzdGluYXRpb25zKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJ0X19fMSA9IC0+IHR5cGVfb2YgZXhwYW5kX2RpY3Rpb25hcnkgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgZG8gPT5cbiAgICAgICAgc3RyaW5ncyA9XG4gICAgICAgICAgJyR7Z3JlZXR9JzogICBcIkhlbGxvICR7d2hvfVwiXG4gICAgICAgICAgJyR7d2hvfSc6ICAgICBcImRlYXIgJHt0YXJnZXR9XCJcbiAgICAgICAgICAnJHt0YXJnZXR9JzogIFwid29ybGRcIlxuICAgICAgICBtYXRjaGVyID1cbiAgICAgICAgICAnJHtncmVldH0nOiAgIFwiSGVsbG8gZGVhciB3b3JsZFwiXG4gICAgICAgICAgJyR7d2hvfSc6ICAgICBcImRlYXIgd29ybGRcIlxuICAgICAgICAgICcke3RhcmdldH0nOiAgXCJ3b3JsZFwiXG4gICAgICAgIHN0cmluZ3NfY29weSAgPSB7IHN0cmluZ3MuLi4sIH1cbiAgICAgICAgZXhwYW5kZWQgICAgICA9IGV4cGFuZF9kaWN0aW9uYXJ5IHN0cmluZ3NcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF9fXzIgPSAtPiBzdHJpbmdzICAgICAgICAgICAgICksIHN0cmluZ3NfY29weVxuICAgICAgICBAZXEgICAgICggzqlrdnJ0X19fMyA9IC0+IGV4cGFuZGVkICAgICAgICAgICAgKSwgbWF0Y2hlclxuICAgICAgICBAZXEgICAgICggzqlrdnJ0X19fNCA9IC0+IGV4cGFuZGVkIGlzIHN0cmluZ3MgKSwgZmFsc2VcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgc3RyaW5ncyA9XG4gICAgICAgICAgJyR7Z3JlZXR9JzogICBcIkhlbGxvICR7d2hvfVwiXG4gICAgICAgICAgJyR7d2hvfSc6ICAgICBcImRlYXIgJHt0YXJnZXR9XCJcbiAgICAgICAgICAnJHt0YXJnZXR9JzogIFwid29ybGQgJHtncmVldH1cIlxuICAgICAgICBzdHJpbmdzX2NvcHkgID0geyBzdHJpbmdzLi4uLCB9XG4gICAgICAgIEB0aHJvd3MgKCDOqWt2cnRfX181ID0gLT4gZXhwYW5kX2RpY3Rpb25hcnkgc3RyaW5ncyApLCAvY3ljbGljIHJlZmVyZW5jZSBkZXRlY3RlZCBmb3IgXFwkXFx7Z3JlZXRcXH0vXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfX182ID0gLT4gc3RyaW5ncyAgICAgICAgICAgICAgICAgICAgICAgKSwgc3RyaW5nc19jb3B5XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHN0cmluZ3MgPVxuICAgICAgICAgICcvKHVzZXIpLyc6ICAgICBcIi9BbGljZS9cIlxuICAgICAgICAgICcoc2NoZW1hKS8vJzogICBcImh0dHBzOi8vXCJcbiAgICAgICAgICAnKHNlcnZlcikvJzogICAgXCIoc2NoZW1hKS8vZXhhbXBsZS5jb20vXCJcbiAgICAgICAgICAnKGZvbGRlciknOiAgICAgXCIoc2VydmVyKS8odXNlcikvZGF0YVwiXG4gICAgICAgICAgJzo6ZmlsZTo6JzogICAgIFwiKGZvbGRlcikvZmlsZS50eHRcIlxuICAgICAgICBmb3Iga2V5LCB2YWx1ZSBvZiBleHBhbmRfZGljdGlvbmFyeSBzdHJpbmdzXG4gICAgICAgICAgZGVidWcgJ86pa3ZydF9fXzcnLCBmXCIje2tleX06PDIwYzsgI3tycHIgdmFsdWV9XCJcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgYnJpY2FicmFjX2pzb24gPSB7XG4gICAgICAgICAgXCJzdHJpbmdzXCI6IHtcbiAgICAgICAgICAgIFwiKGdoKVwiOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbVwiLFxuICAgICAgICAgICAgXCIoZmxvdykvXCI6IFwiKGdoKS9sb3ZlZW5jb3VudGVyZmxvdy9cIixcbiAgICAgICAgICAgIFwiKHNmbW9kdWxlcylcIjogXCIoZmxvdykvYnJpY2FicmFjLXNmbW9kdWxlcy9yZWZzL2hlYWRzL21haW4vc3JjXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtYXBwaW5nc1wiOiB7XG4gICAgICAgICAgICBcImFcIjogXCItLShnaCktLVwiXG4gICAgICAgICAgICBcImJcIjogXCItLShmbG93KS8tLVwiXG4gICAgICAgICAgICBcImNcIjogXCItLShzZm1vZHVsZXMpLS1cIlxuICAgICAgICAgICAgXCJkXCI6IFwifi8tLShzZm1vZHVsZXMpLS1cIiB9IH1cbiAgICAgICAgX2JyaWNhYnJhY19jb21waWxlZF9qc29uID0ge1xuICAgICAgICAgIFwic3RyaW5nc1wiOiB7XG4gICAgICAgICAgICBcIihnaClcIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb21cIixcbiAgICAgICAgICAgIFwiKGZsb3cpL1wiOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9cIixcbiAgICAgICAgICAgIFwiKHNmbW9kdWxlcylcIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlcy9yZWZzL2hlYWRzL21haW4vc3JjXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtYXBwaW5nc1wiOiB7XG4gICAgICAgICAgICBcImFcIjogXCItLWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS0tXCJcbiAgICAgICAgICAgIFwiYlwiOiBcIi0taHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93Ly0tXCJcbiAgICAgICAgICAgIFwiY1wiOiBcIi0taHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93L2JyaWNhYnJhYy1zZm1vZHVsZXMvcmVmcy9oZWFkcy9tYWluL3NyYy0tXCJcbiAgICAgICAgICAgIFwiZFwiOiBcIn4vLS1odHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlcy9yZWZzL2hlYWRzL21haW4vc3JjLS1cIiB9IH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXN1bHQgICAgICAgICAgPSB7fVxuICAgICAgICByZXN1bHQuc3RyaW5ncyAgPSBleHBhbmRfZGljdGlvbmFyeSBicmljYWJyYWNfanNvbi5zdHJpbmdzXG4gICAgICAgIHJlc3VsdC5tYXBwaW5ncyA9IHt9XG4gICAgICAgIGZvciB0YXJnZXRfcGF0aCwgc291cmNlX3NwZWMgb2YgYnJpY2FicmFjX2pzb24ubWFwcGluZ3NcbiAgICAgICAgICByZXN1bHQubWFwcGluZ3NbIHRhcmdldF9wYXRoIF0gPSBzb3VyY2Vfc3BlY1xuICAgICAgICAgIGZvciBwYXR0ZXJuX2tleSwgcGF0dGVybl92YWx1ZSBvZiByZXN1bHQuc3RyaW5nc1xuICAgICAgICAgICAgcmVzdWx0Lm1hcHBpbmdzWyB0YXJnZXRfcGF0aCBdID0gcmVzdWx0Lm1hcHBpbmdzWyB0YXJnZXRfcGF0aCBdLnJlcGxhY2VBbGwgcGF0dGVybl9rZXksIHBhdHRlcm5fdmFsdWVcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0X19fOCcsIHJlc3VsdFxuICAgICAgICBAZXEgKCDOqWt2cnRfX185ID0gLT4gZmFsc2UgKSwgXCJyZXNvbHZlIGhvbWUgZGlyZWN0b3J5IHdpdGggb3MuaG9tZWRpcigpIC8gbG9jYWwtZGVzdGluYXRpb24uYnJpY3NcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzEwID0gLT4gT2JqZWN0LmtleXMgcmVzdWx0ICksIE9iamVjdC5rZXlzIF9icmljYWJyYWNfY29tcGlsZWRfanNvblxuICAgICAgICBmb3Iga2V5LCB2YWx1ZSBvZiByZXN1bHQuc3RyaW5nc1xuICAgICAgICAgIEBlcSAoIM6pa3ZydF9fMTEgPSAtPiB2YWx1ZSApLCBfYnJpY2FicmFjX2NvbXBpbGVkX2pzb24uc3RyaW5nc1sga2V5IF1cbiAgICAgICAgZm9yIGtleSwgdmFsdWUgb2YgcmVzdWx0Lm1hcHBpbmdzXG4gICAgICAgICAgQGVxICggzqlrdnJ0X18xMiA9IC0+IHZhbHVlICksIF9icmljYWJyYWNfY29tcGlsZWRfanNvbi5tYXBwaW5nc1sga2V5IF1cbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0X18xMycsICggZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyBudWxsICkuaG9tZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX2dldF9sb2NhbF9kZXN0aW5hdGlvbnM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucywgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2dldF9sb2NhbF9kZXN0aW5hdGlvbnMoKVxuICAgICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgICAgT1MgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpvcydcbiAgICAgIEZTICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMge1xuICAgICAgIyAgIGFwcDoge1xuICAgICAgIyAgICAgbmFtZTogJ215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIGRhdGE6ICcvaG9tZS9mbG93Ly5sb2NhbC9zaGFyZS9teS1hcHAtbmFtZScsXG4gICAgICAjICAgICBjb25maWc6ICcvaG9tZS9mbG93Ly5jb25maWcvbXktYXBwLW5hbWUnLFxuICAgICAgIyAgICAgY2FjaGU6ICcvaG9tZS9mbG93Ly5jYWNoZS9teS1hcHAtbmFtZScsXG4gICAgICAjICAgICBsb2c6ICcvaG9tZS9mbG93Ly5sb2NhbC9zdGF0ZS9teS1hcHAtbmFtZScsXG4gICAgICAjICAgICB0ZW1wOiAnL3RtcC9mbG93L215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIGhvbWU6ICcvaG9tZS9mbG93L215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIG5vZGVfbW9kdWxlczogJy9ob21lL2Zsb3cvbXktYXBwLW5hbWUvbm9kZV9tb2R1bGVzJyxcbiAgICAgICMgICAgIGRlcF9iaW46ICcvaG9tZS9mbG93L215LWFwcC1uYW1lL25vZGVfbW9kdWxlcy8uYmluJyxcbiAgICAgICMgICAgIG93bl9iaW46ICcvaG9tZS9mbG93L215LWFwcC1uYW1lL2JpbidcbiAgICAgICMgICB9LFxuICAgICAgIyAgIHVzZXI6IHsgbmFtZTogJ2Zsb3cnLCBob21lOiAnL2hvbWUvZmxvdycsIHRlbXA6ICcvdG1wJyB9XG4gICAgICAjIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJ0X18xNCA9IC0+IHR5cGVfb2YgZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyApLCAnZnVuY3Rpb24nXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGFwcF9uYW1lICAgICAgPSAnbXktYXBwLW5hbWUnXG4gICAgICAgIGRzdCAgICAgICAgICAgPSBnZXRfbG9jYWxfZGVzdGluYXRpb25zIHsgYXBwX25hbWUsIH1cbiAgICAgICAgdXNlcl9uZm8gICAgICA9IE9TLnVzZXJJbmZvKClcbiAgICAgICAgaG9tZSAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy5ob21lZGlyKClcbiAgICAgICAgdGVtcCAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy50bXBkaXIoKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMTUgPSAtPiAoIE9iamVjdC5rZXlzIGRzdCApLnNvcnQoKSAgICAgICApLCBbICdhcHAnLCAndXNlcicsIF1cbiAgICAgICAgQGVxICggzqlrdnJ0X18xNiA9IC0+ICggT2JqZWN0LmtleXMgZHN0LmFwcCApLnNvcnQoKSAgICksIFsgJ2NhY2hlJywgJ2NvbmZpZycsICdkYXRhJywgJ2RlcF9iaW4nLCAnaG9tZScsICdsb2cnLCAnbmFtZScsICdub2RlX21vZHVsZXMnLCAnb3duX2JpbicsICd0ZW1wJyBdXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMTcgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC51c2VyICkuc29ydCgpICApLCBbICdob21lJywgJ25hbWUnLCAndGVtcCcsIF1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzE4ID0gLT4gdHlwZV9vZiBkc3QuYXBwICAgICAgICAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAgICAgQGVxICggzqlrdnJ0X18xOSA9IC0+IHR5cGVfb2YgZHN0LnVzZXIgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X18yMCA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jYWNoZSAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMjEgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY29uZmlnICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzIyID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmRhdGEgICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X18yMyA9IC0+IGRzdC5hcHAuZGVwX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfbmFtZSwgJ25vZGVfbW9kdWxlcycsICcuYmluJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzI0ID0gLT4gZHN0LmFwcC5ob21lICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMjUgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAubG9nICAgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzI2ID0gLT4gZHN0LmFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X18yNyA9IC0+IGRzdC5hcHAubm9kZV9tb2R1bGVzICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfbmFtZSwgJ25vZGVfbW9kdWxlcydcbiAgICAgICAgQGVxICggzqlrdnJ0X18yOCA9IC0+IGRzdC5hcHAub3duX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfbmFtZSwgJ2JpbidcbiAgICAgICAgQGVxICggzqlrdnJ0X18yOSA9IC0+IGRzdC5hcHAudGVtcCAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBkc3QudXNlci50ZW1wLCBkc3QudXNlci5uYW1lLCBhcHBfbmFtZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMzAgPSAtPiBkc3QudXNlci5ob21lICAgICAgICAgICAgICAgICAgICApLCBob21lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMzEgPSAtPiBkc3QudXNlci5uYW1lICAgICAgICAgICAgICAgICAgICApLCB1c2VyX25mby51c2VybmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzMyID0gLT4gZHN0LnVzZXIudGVtcCAgICAgICAgICAgICAgICAgICAgKSwgdGVtcFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGFwcF9uYW1lICAgICAgPSBudWxsXG4gICAgICAgIGRzdCAgICAgICAgICAgPSBnZXRfbG9jYWxfZGVzdGluYXRpb25zIHsgYXBwX25hbWUsIH1cbiAgICAgICAgdXNlcl9uZm8gICAgICA9IE9TLnVzZXJJbmZvKClcbiAgICAgICAgaG9tZSAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy5ob21lZGlyKClcbiAgICAgICAgdGVtcCAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy50bXBkaXIoKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMzMgPSAtPiAoIE9iamVjdC5rZXlzIGRzdCApLnNvcnQoKSAgICAgICApLCBbICdhcHAnLCAndXNlcicsIF1cbiAgICAgICAgQGVxICggzqlrdnJ0X18zNCA9IC0+ICggT2JqZWN0LmtleXMgZHN0LmFwcCApLnNvcnQoKSAgICksIFsgJ2NhY2hlJywgJ2NvbmZpZycsICdkYXRhJywgJ2RlcF9iaW4nLCAnaG9tZScsICdsb2cnLCAnbmFtZScsICdub2RlX21vZHVsZXMnLCAnb3duX2JpbicsICd0ZW1wJyBdXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMzUgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC51c2VyICkuc29ydCgpICApLCBbICdob21lJywgJ25hbWUnLCAndGVtcCcsIF1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzM2ID0gLT4gdHlwZV9vZiBkc3QuYXBwICAgICAgICAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAgICAgQGVxICggzqlrdnJ0X18zNyA9IC0+IHR5cGVfb2YgZHN0LnVzZXIgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X18zOCA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jYWNoZSAgICAgICksICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgQGVxICggzqlrdnJ0X18zOSA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jb25maWcgICAgICksICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgQGVxICggzqlrdnJ0X180MCA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5kYXRhICAgICAgICksICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgQGVxICggzqlrdnJ0X180MSA9IC0+IGRzdC5hcHAuZGVwX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nLCAnbm9kZV9tb2R1bGVzJywgJy5iaW4nXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNDIgPSAtPiBkc3QuYXBwLmhvbWUgICAgICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzQzID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmxvZyAgICAgICAgKSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzQ0ID0gLT4gZHN0LmFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgKSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzQ1ID0gLT4gZHN0LmFwcC5ub2RlX21vZHVsZXMgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsICc8WU9VUi1BUFAtTkFNRS1IRVJFPicsICdub2RlX21vZHVsZXMnXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNDYgPSAtPiBkc3QuYXBwLm93bl9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+JywgJ2JpbidcbiAgICAgICAgQGVxICggzqlrdnJ0X180NyA9IC0+IGRzdC5hcHAudGVtcCAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBkc3QudXNlci50ZW1wLCBkc3QudXNlci5uYW1lLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X180OCA9IC0+IGRzdC51c2VyLmhvbWUgICAgICAgICAgICAgICAgICAgICksIGhvbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X180OSA9IC0+IGRzdC51c2VyLm5hbWUgICAgICAgICAgICAgICAgICAgICksIHVzZXJfbmZvLnVzZXJuYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTAgPSAtPiBkc3QudXNlci50ZW1wICAgICAgICAgICAgICAgICAgICApLCB0ZW1wXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgYXBwX25hbWUgICAgICA9ICdmcm9idWxhdG9yJ1xuICAgICAgICBhcHBfaG9tZSAgICAgID0gJy9wYXRoL3RvL3Byb2plY3RzJ1xuICAgICAgICBkc3QgICAgICAgICAgID0gZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyB7IGFwcF9uYW1lLCBhcHBfaG9tZSB9XG4gICAgICAgIHVzZXJfbmZvICAgICAgPSBPUy51c2VySW5mbygpXG4gICAgICAgIGhvbWUgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MuaG9tZWRpcigpXG4gICAgICAgIHRlbXAgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MudG1wZGlyKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzUxID0gLT4gKCBPYmplY3Qua2V5cyBkc3QgKS5zb3J0KCkgICAgICAgKSwgWyAnYXBwJywgJ3VzZXInLCBdXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTIgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC5hcHAgKS5zb3J0KCkgICApLCBbICdjYWNoZScsICdjb25maWcnLCAnZGF0YScsICdkZXBfYmluJywgJ2hvbWUnLCAnbG9nJywgJ25hbWUnLCAnbm9kZV9tb2R1bGVzJywgJ293bl9iaW4nLCAndGVtcCcgXVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzUzID0gLT4gKCBPYmplY3Qua2V5cyBkc3QudXNlciApLnNvcnQoKSAgKSwgWyAnaG9tZScsICduYW1lJywgJ3RlbXAnLCBdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X181NCA9IC0+IHR5cGVfb2YgZHN0LmFwcCAgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTUgPSAtPiB0eXBlX29mIGRzdC51c2VyICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTYgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY2FjaGUgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzU3ID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmNvbmZpZyAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X181OCA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5kYXRhICAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTkgPSAtPiBkc3QuYXBwLmRlcF9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX2hvbWUsIGFwcF9uYW1lLCAnbm9kZV9tb2R1bGVzJywgJy5iaW4nXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjAgPSAtPiBkc3QuYXBwLmhvbWUgICAgICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX2hvbWUsIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjEgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAubG9nICAgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzYyID0gLT4gZHN0LmFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X182MyA9IC0+IGRzdC5hcHAubm9kZV9tb2R1bGVzICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfaG9tZSwgYXBwX25hbWUsICdub2RlX21vZHVsZXMnXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjQgPSAtPiBkc3QuYXBwLm93bl9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX2hvbWUsIGFwcF9uYW1lLCAnYmluJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzY1ID0gLT4gZHN0LmFwcC50ZW1wICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGRzdC51c2VyLnRlbXAsIGRzdC51c2VyLm5hbWUsIGFwcF9uYW1lXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X182NiA9IC0+IGRzdC51c2VyLmhvbWUgICAgICAgICAgICAgICAgICAgICksIGhvbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X182NyA9IC0+IGRzdC51c2VyLm5hbWUgICAgICAgICAgICAgICAgICAgICksIHVzZXJfbmZvLnVzZXJuYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjggPSAtPiBkc3QudXNlci50ZW1wICAgICAgICAgICAgICAgICAgICApLCB0ZW1wXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVxdWlyZV93YWxrX2pzX3Rva2VuczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyB3YWxrX2pzX3Rva2VucyxcbiAgICAgICAgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zLFxuICAgICAgICBzdW1tYXJpemUsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfd2Fsa19qc190b2tlbnMoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cnRfXzY5ID0gLT4gdHlwZV9vZiB3YWxrX2pzX3Rva2VucyAgICAgICAgICAgICksICdnZW5lcmF0b3JmdW5jdGlvbidcbiAgICAgIEBlcSAoIM6pa3ZydF9fNzAgPSAtPiB0eXBlX29mIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgKSwgJ2dlbmVyYXRvcmZ1bmN0aW9uJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzcxID0gLT4gdHlwZV9vZiB3YWxrX2pzX3Rva2VucyAnJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2dlbmVyYXRvcidcbiAgICAgICAgQGVxICggzqlrdnJ0X183MiA9IC0+IFsgKCB3YWxrX2pzX3Rva2VucyAnJyApLi4uLCBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgeyB0eXBlOiAnZW9mJywgfSwgXVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzczID0gLT4gc3VtbWFyaXplIHdhbGtfanNfdG9rZW5zICAgICAgICAgICAgJ3ZhciBhID0gOTsnICAgICAgICAgICAgICAgICAgKSwgXCImJiZJZGVudGlmaWVyTmFtZSd2YXInJiYmV2hpdGVTcGFjZScgJyYmJklkZW50aWZpZXJOYW1lJ2EnJiYmV2hpdGVTcGFjZScgJyYmJlB1bmN0dWF0b3InPScmJiZXaGl0ZVNwYWNlJyAnJiYmTnVtZXJpY0xpdGVyYWwnOScmJiZQdW5jdHVhdG9yJzsnJiYmZW9mJiYmXCJcbiAgICAgICAgQGVxICggzqlrdnJ0X183NCA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgICd2YXIgYSA9IDk7JyAgICAgICAgICAgICAgICAgICksIFwiJiYmSWRlbnRpZmllck5hbWUndmFyJyYmJklkZW50aWZpZXJOYW1lJ2EnJiYmUHVuY3R1YXRvcic9JyYmJk51bWVyaWNMaXRlcmFsJzknJiYmUHVuY3R1YXRvcic7JyYmJmVvZiYmJlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzUgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICAnXCJ5XCInICAgICAgICAgICAgICAgICAgICAgICAgICksIFwiXCJcIiYmJlN0cmluZ0xpdGVyYWwnXCJ5XCInJiYmZW9mJiYmXCJcIlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzYgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcIid5J1wiICAgICAgICAgICAgICAgICAgICAgICAgICksIFwiJiYmU3RyaW5nTGl0ZXJhbCdcXFxcJ3lcXFxcJycmJiZlb2YmJiZcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzc3ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJgQSR7J3knfVpgXCIgICAgICAgICAgICAgICAgICApLCBcIiYmJlRlbXBsYXRlSGVhZCdgQSR7JyYmJlN0cmluZ0xpdGVyYWwnXFxcXCd5XFxcXCcnJiYmVGVtcGxhdGVUYWlsJ31aYCcmJiZlb2YmJiZcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzc4ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJmYEEkeyd5J31aYFwiICAgICAgICAgICAgICAgICApLCBcIiYmJklkZW50aWZpZXJOYW1lJ2YnJiYmVGVtcGxhdGVIZWFkJ2BBJHsnJiYmU3RyaW5nTGl0ZXJhbCdcXFxcJ3lcXFxcJycmJiZUZW1wbGF0ZVRhaWwnfVpgJyYmJmVvZiYmJlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzkgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcImBBJHtgeWB9WmBcIiAgICAgICAgICAgICAgICAgICksIFwiJiYmVGVtcGxhdGVIZWFkJ2BBJHsnJiYmTm9TdWJzdGl0dXRpb25UZW1wbGF0ZSdgeWAnJiYmVGVtcGxhdGVUYWlsJ31aYCcmJiZlb2YmJiZcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzgwID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJgQSR7cmVxdWlyZShgeWApfVpgXCIgICAgICAgICApLCBcIiYmJlRlbXBsYXRlSGVhZCdgQSR7JyYmJklkZW50aWZpZXJOYW1lJ3JlcXVpcmUnJiYmUHVuY3R1YXRvcicoJyYmJk5vU3Vic3RpdHV0aW9uVGVtcGxhdGUnYHlgJyYmJlB1bmN0dWF0b3InKScmJiZUZW1wbGF0ZVRhaWwnfVpgJyYmJmVvZiYmJlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fODEgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcInJlcXVpcmUgPSA3NzdcIiAgICAgICAgICAgICAgICksIFwiJiYmSWRlbnRpZmllck5hbWUncmVxdWlyZScmJiZQdW5jdHVhdG9yJz0nJiYmTnVtZXJpY0xpdGVyYWwnNzc3JyYmJmVvZiYmJlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fODIgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcInJlcXVpcmUgPSA3NzcgLy8gZm9vOiBiYXJcIiAgICksIFwiJiYmSWRlbnRpZmllck5hbWUncmVxdWlyZScmJiZQdW5jdHVhdG9yJz0nJiYmTnVtZXJpY0xpdGVyYWwnNzc3JyYmJmVvZiYmJlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fODMgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcInJlcXVpcmUgPSA3Nzc7IC8vIGZvbzogYmFyXCIgICksIFwiJiYmSWRlbnRpZmllck5hbWUncmVxdWlyZScmJiZQdW5jdHVhdG9yJz0nJiYmTnVtZXJpY0xpdGVyYWwnNzc3JyYmJlB1bmN0dWF0b3InOycmJiZlb2YmJiZcIlxuICAgICAgICAjIEBlcSAoIM6pa3ZydF9fODQgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcInRydWVcIiAgICAgICAgICAgICAgICApLCBudWxsXG4gICAgICAgICMgQGVxICggzqlrdnJ0X184NSA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwiZmFsc2VcIiAgICAgICAgICAgICAgICksIG51bGxcbiAgICAgICAgIyBAZXEgKCDOqWt2cnRfXzg2ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJ1bmRlZmluZWRcIiAgICAgICAgICAgKSwgbnVsbFxuICAgICAgICAjIEBlcSAoIM6pa3ZydF9fODcgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcIm51bGxcIiAgICAgICAgICAgICAgICApLCBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc291cmNlID0gXCJjb25zdCB7IGQsIH0gPSByZXF1aXJlKCAnc29tZS1tb2R1bGUnICk7IC8qIHJlcXVpcmUoICdvdGhlci1tb2R1bGUnICkgKi9cIlxuICAgICAgICBmb3IgdG9rZW4gZnJvbSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgc291cmNlXG4gICAgICAgICAgaW5mbyAnzqlrdnJ0X184OCcsIGZcIiN7dG9rZW4udHlwZX06PjIwYzsgI3tycHIgdG9rZW4udmFsdWV9XCJcbiAgICAgICAgQGVxICggzqlrdnJ0X184OSA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgc291cmNlICksIFwiJiYmSWRlbnRpZmllck5hbWUnY29uc3QnJiYmUHVuY3R1YXRvcid7JyYmJklkZW50aWZpZXJOYW1lJ2QnJiYmUHVuY3R1YXRvcicsJyYmJlB1bmN0dWF0b3InfScmJiZQdW5jdHVhdG9yJz0nJiYmSWRlbnRpZmllck5hbWUncmVxdWlyZScmJiZQdW5jdHVhdG9yJygnJiYmU3RyaW5nTGl0ZXJhbCdcXFxcJ3NvbWUtbW9kdWxlXFxcXCcnJiYmUHVuY3R1YXRvcicpJyYmJlB1bmN0dWF0b3InOycmJiZlb2YmJiZcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlcXVpcmVfcGFyc2VfcmVxdWlyZV9zdGF0ZW1lbnRzOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cywgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9wYXJzZV9yZXF1aXJlX3N0YXRlbWVudHMoKVxuICAgICAgeyB3YWxrX2pzX3Rva2VucyxcbiAgICAgICAgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zLFxuICAgICAgICBzdW1tYXJpemUsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV93YWxrX2pzX3Rva2VucygpXG4gICAgICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICAgIEZTICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJ0X185MCA9IC0+IHR5cGVfb2Ygd2Fsa19yZXF1aXJlX3N0YXRlbWVudHMgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBwYXRoICAgICAgICAgID0gUEFUSC5yZXNvbHZlIF9fZGlybmFtZSwgJy4uLy4uLy4uL2Fzc2V0cy9icmljYWJyYWMvcGFyc2UtcmVxdWlyZS1zdGF0ZW1lbnRzL3Rlc3QtYmFzaWNzLmpzJ1xuICAgICAgICB3b3VsZGJlX3BhdGggID0gX19maWxlbmFtZVxuICAgICAgICBzb3VyY2UgICAgICAgID0gKCBGUy5yZWFkRmlsZVN5bmMgcGF0aCwgeyBlbmNvZGluZzogJ3V0Zi04JywgfSApXG4gICAgICAgICMgZm9yIGQgZnJvbSB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cyBwYXRoXG4gICAgICAgICMgICBkZWJ1ZyAnzqlrdnJ0X185MScsIGRcbiAgICAgICAgdG9rZW5zICAgICAgICA9IHdhbGtfcmVxdWlyZV9zdGF0ZW1lbnRzIHsgcGF0aDogd291bGRiZV9wYXRoLCBzb3VyY2UsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0X185MiA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDUsIGRpc3Bvc2l0aW9uOiAnbnBtJywgc2VsZWN0b3I6ICdndXknLCBhbm5vdGF0aW9uOiAnc2VtdmVyOjAuMy40JywgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzkzID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMTIsIGRpc3Bvc2l0aW9uOiAnaW5zaWRlJywgc2VsZWN0b3I6ICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzk0ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMTYsIGRpc3Bvc2l0aW9uOiAnaW5zaWRlJywgc2VsZWN0b3I6ICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0X185NSA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDI1LCBkaXNwb3NpdGlvbjogJ2luc2lkZScsIHNlbGVjdG9yOiAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzk2ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMTYyLCBkaXNwb3NpdGlvbjogJ2luc2lkZScsIHNlbGVjdG9yOiAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzk3ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMTY1LCBkaXNwb3NpdGlvbjogJ25vZGUnLCBzZWxlY3RvcjogJ25vZGU6cGF0aCcsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0X185OCA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDE2NiwgZGlzcG9zaXRpb246ICdub2RlJywgc2VsZWN0b3I6ICdub2RlOm9zJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzk5ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMTY3LCBkaXNwb3NpdGlvbjogJ25vZGUnLCBzZWxlY3RvcjogJ25vZGU6ZnMnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMDAgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiAzOTksIGRpc3Bvc2l0aW9uOiAnaW5zaWRlJywgc2VsZWN0b3I6ICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMDEgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiA0NjUsIGRpc3Bvc2l0aW9uOiAnbm9kZScsIHNlbGVjdG9yOiAnbm9kZTpmcycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzEwMiA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDQ2NiwgZGlzcG9zaXRpb246ICdpbnNpZGUnLCBzZWxlY3RvcjogJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzEwMyA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAnd2FybmluZycsIG1lc3NhZ2U6IFwiaWdub3JpbmcgcG9zc2libGUgYHJlcXVpcmVgIG9uIGxpbmUgNTU0OiAnICAgICAgICByZXF1aXJlOydcIiwgbGluZTogJyAgICAgICAgcmVxdWlyZTsnLCBsaW5lX25yOiA1NTQgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTA0ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICd3YXJuaW5nJywgbWVzc2FnZTogXCJpZ25vcmluZyBwb3NzaWJsZSBgcmVxdWlyZWAgb24gbGluZSA1NTU6ICcgICAgICAgIHJlcXVpcmUodHJ1ZSk7J1wiLCBsaW5lOiAnICAgICAgICByZXF1aXJlKHRydWUpOycsIGxpbmVfbnI6IDU1NSB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMDUgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiA1NTYsIGRpc3Bvc2l0aW9uOiAnbnBtJywgc2VsZWN0b3I6ICdwa2cjMScsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzEwNiA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDU1NywgZGlzcG9zaXRpb246ICducG0nLCBzZWxlY3RvcjogJ3BrZyMyJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTA3ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICd3YXJuaW5nJywgbWVzc2FnZTogXCJpZ25vcmluZyBwb3NzaWJsZSBgcmVxdWlyZWAgb24gbGluZSA1NTg6ICcgICAgICAgIHJldHVybiByZXF1aXJlKCBgcGtnIzNgICsgXFxcXCdzdWZmaXhcXFxcJyApOydcIiwgbGluZTogXCIgICAgICAgIHJldHVybiByZXF1aXJlKCBgcGtnIzNgICsgJ3N1ZmZpeCcgKTtcIiwgbGluZV9ucjogNTU4IH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzEwOCA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDU2NiwgZGlzcG9zaXRpb246ICdpbnNpZGUnLCBzZWxlY3RvcjogJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzEwOSA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAnd2FybmluZycsIG1lc3NhZ2U6IFwiaWdub3JpbmcgcG9zc2libGUgYHJlcXVpcmVgIG9uIGxpbmUgNjAyOiAnICBpZiAobW9kdWxlID09PSByZXF1aXJlLm1haW4pIHsnXCIsIGxpbmU6ICcgIGlmIChtb2R1bGUgPT09IHJlcXVpcmUubWFpbikgeycsIGxpbmVfbnI6IDYwMiB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMTAgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiA2MjYsIGRpc3Bvc2l0aW9uOiAnb3V0c2lkZScsIHNlbGVjdG9yOiAnLi4vLi4vLi4vLi4vd2hhdGV2ZXInLCBhbm5vdGF0aW9uOiBudWxsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgZm9yIGQgZnJvbSB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cyB7IHNvdXJjZTogJ3JlcXVpcmUoXCJ4eHhcIik7JywgfVxuICAgICAgICAgIGluZm8gJ86pa3ZydF8xMTEnLCBkXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTJ1xuICAgICAgICBmb3IgZCBmcm9tIHdhbGtfcmVxdWlyZV9zdGF0ZW1lbnRzIHsgc291cmNlOiAncmVxdWlyZShcInh4eFwiKSAvLyBzZW12ZXI6IDUuNi43JywgfVxuICAgICAgICAgIHVyZ2UgJ86pa3ZydF8xMTInLCBkXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTJ1xuICAgICAgICBmb3IgdG9rZW4gZnJvbSB3YWxrX2pzX3Rva2VucyAncmVxdWlyZShcInh4eFwiKTsgLy8gc2VtdmVyOiA1LjYuNydcbiAgICAgICAgICBoZWxwICfOqWt2cnRfMTEzJywgdG9rZW5cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICAgIGZvciBkIGZyb20gd2Fsa19yZXF1aXJlX3N0YXRlbWVudHMgeyBzb3VyY2U6ICdyZXF1aXJlKFwieHh4XCIpOyAvLyBzZW12ZXI6IDUuNi43JywgfVxuICAgICAgICAgIGluZm8gJ86pa3ZydF8xMTQnLCBkXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlcXVpcmVfcnByX3N0cmluZzogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBycHJfc3RyaW5nLCAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfcnByX3N0cmluZygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZydF8xMTUgPSAtPiB0eXBlX29mIHJwcl9zdHJpbmcgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBAZXEgKCDOqWt2cnRfMTE2ID0gLT4gcnByX3N0cmluZyAnJyAgICAgICApLCBcIlwiXCInJ1wiXCJcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfMTE3ID0gLT4gcnByX3N0cmluZyAnXCInICAgICAgKSwgXCJcIlwiJ1wiJ1wiXCJcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfMTE4ID0gLT4gcnByX3N0cmluZyBcIidcIiAgICAgICksIFwiXCJcIidcXFxcJydcIlwiXCJcbiAgICAgICAgQGVxICggzqlrdnJ0XzExOSA9IC0+IHJwcl9zdHJpbmcgJ3BvcCcgICAgKSwgXCJcIlwiJ3BvcCdcIlwiXCJcbiAgICAgICAgQGVxICggzqlrdnJ0XzEyMCA9IC0+IHJwcl9zdHJpbmcgJ1wicG9wXCInICApLCBcIlwiXCInXCJwb3BcIidcIlwiXCJcbiAgICAgICAgQGVxICggzqlrdnJ0XzEyMSA9IC0+IHJwcl9zdHJpbmcgXCIncG9wJ1wiICApLCBcIlwiXCInXFxcXCdwb3BcXFxcJydcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX3BhdGhfdG9vbHM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgaXNfaW5zaWRlLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3BhdGhfdG9vbHMoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cnRfMTIyID0gLT4gdHlwZV9vZiBpc19pbnNpZGUgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBAdGhyb3dzICggzqlrdnJ0XzEyMyA9IC0+IGlzX2luc2lkZSAnLi4vcGF0aC90by9maWxlJywgICAgICAgJy8nICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYW4gYWJzb2x1dGUgcGF0aCBhcyBhbmNob3IvXG4gICAgICAgIEB0aHJvd3MgKCDOqWt2cnRfMTI0ID0gLT4gaXNfaW5zaWRlICcuLi9wYXRoL3RvL2ZpbGUnLCAgICAgICAnd2F0JyAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhbiBhYnNvbHV0ZSBwYXRoIGFzIGFuY2hvci9cbiAgICAgICAgQHRocm93cyAoIM6pa3ZydF8xMjUgPSAtPiBpc19pbnNpZGUgJy4uL3BhdGgvdG8vZmlsZScsICAgICAgICcuLi9wYXRoL3RvL2ZpbGUnICAgKSwgL2V4cGVjdGVkIGFuIGFic29sdXRlIHBhdGggYXMgYW5jaG9yL1xuICAgICAgICBAdGhyb3dzICggzqlrdnJ0XzEyNiA9IC0+IGlzX2luc2lkZSAncGF0aC90by9maWxlJywgICAgICAgICAgJy4uL3BhdGgvdG8vZmlsZScgICApLCAvZXhwZWN0ZWQgYW4gYWJzb2x1dGUgcGF0aCBhcyBhbmNob3IvXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMjcgPSAtPiBpc19pbnNpZGUgJy8nLCAgICAgICAgICAgICAgICAgICAgICcvcGF0aC90by9maWxlJyAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAgICggzqlrdnJ0XzEyOCA9IC0+IGlzX2luc2lkZSAnL3BhdGgvdG8vZmlsZScsICAgICAgICAgJy9wYXRoL3RvL2ZpbGUnICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTI5ID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlJywgICAgICAgICAnb29wcycgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMzAgPSAtPiBpc19pbnNpZGUgJy9wYXRoLy4uL2ZpbGUnLCAgICAgICAgICcvZmlsZScgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAgICggzqlrdnJ0XzEzMSA9IC0+IGlzX2luc2lkZSAnL3BhdGgvLi4vZmlsZS8uJywgICAgICAgJy9maWxlJyAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTMyID0gLT4gaXNfaW5zaWRlICcvcGF0aC8uLi9maWxlLy4vLi8uLy4nLCAnL2ZpbGUnICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMzMgPSAtPiBpc19pbnNpZGUgJy9wYXRoL3RvL2ZpbGUnLCAgICAgICAgICcuXFxcXC4vb29wcycgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTM0ID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlJywgICAgICAgICAnLi5cXFxcL29vcHMnICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTM1ID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlL3dhdCcsICAgICAnL3BhdGgvdG8vZmlsZScgICAgICksIGZhbHNlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTM2ID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlJywgICAgICAgICAnLi4vb29wcycgICAgICAgICAgICksIGZhbHNlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTM3ID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlJywgICAgICAgICAnL29vcHMnICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTM4ID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlJywgICAgICAgICAnLycgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTM5ID0gLT4gaXNfaW5zaWRlICcvcGF0aC8uLi9maWxlJywgICAgICAgICAnL3BhdGgnICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVxdWlyZV9qZXRzdHJlYW06IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgSmV0c3RyZWFtLFxuICAgICAgICAkLFxuICAgICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJ0XzE0MCA9IC0+IHR5cGVfb2YgKCBuZXcgSmV0c3RyZWFtKCkgKSAgICAgICAgICAgICAgKSwgJ29iamVjdCdcbiAgICAgIEBlcSAoIM6pa3ZydF8xNDEgPSAtPiB0eXBlX29mICggbmV3IEpldHN0cmVhbSgpICkud2FsayAnZGF0YScgICksICdnZW5lcmF0b3InXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZpcnN0ICAgICA9IFN5bWJvbCAnZmlyc3QnXG4gICAgICAgIGxhc3QgICAgICA9IFN5bWJvbCAnbGFzdCdcbiAgICAgICAgamV0ICAgID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlhcF8xNDIgPSAtPiBqZXQubGVuZ3RoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgMFxuICAgICAgICBAZXEgKCDOqWFwXzE0MyA9IC0+IGpldC5pc19lbXB0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgd2F0Y2hlZF8xID0gW11cbiAgICAgICAgd2F0Y2hlZF8yID0gW11cbiAgICAgICAgd2F0Y2hlZF8zID0gW11cbiAgICAgICAgd2F0Y2hlZF80ID0gW11cbiAgICAgICAgamV0LnB1c2ggd2F0Y2ggPSAoIGQgICAgICAgICAgICAgICkgLT4gaGVscCAnzqlhcF8xNDQnLCBycHIgZDsgd2F0Y2hlZF8xLnB1c2ggZFxuICAgICAgICBqZXQucHVzaCB1cHBlciA9ICggZCAgICAgICAgICAgICAgKSAtPiB5aWVsZCBkLnRvVXBwZXJDYXNlKClcbiAgICAgICAgamV0LnB1c2ggd2F0Y2ggPSAoIGQgICAgICAgICAgICAgICkgLT4gaW5mbyAnzqlhcF8xNDUnLCBycHIgZDsgd2F0Y2hlZF8yLnB1c2ggZFxuICAgICAgICBqZXQucHVzaCBleCAgICA9ICggZCwgbWFyayA9ICchJyAgKSAtPiB5aWVsZCBkICsgbWFya1xuICAgICAgICBqZXQucHVzaCB3YXRjaCA9ICggZCAgICAgICAgICAgICAgKSAtPiBoZWxwICfOqWFwXzE0NicsIHJwciBkOyB3YXRjaGVkXzMucHVzaCBkXG4gICAgICAgIGpldC5wdXNoICQgeyBmaXJzdCwgbGFzdCwgfSwgc3Vycm91bmQgPSAoIGQgKSAtPlxuICAgICAgICAgIHJldHVybiB5aWVsZCBcIlwiXCJMZXQncyBzYXk6IFxcXCJcIlwiXCIgIGlmIGQgaXMgZmlyc3RcbiAgICAgICAgICByZXR1cm4geWllbGQgJ1wiLicgICAgICAgICAgICAgICAgIGlmIGQgaXMgbGFzdFxuICAgICAgICAgIHlpZWxkIGRcbiAgICAgICAgamV0LnB1c2ggd2F0Y2ggPSAoIGQgICAgICAgICAgICAgICkgLT4gdXJnZSAnzqlhcF8xNDcnLCBycHIgZDsgd2F0Y2hlZF80LnB1c2ggZFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pYXBfMTQ4ID0gLT4gamV0Lmxlbmd0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgN1xuICAgICAgICBAZXEgKCDOqWFwXzE0OSA9IC0+IGpldC5pc19lbXB0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICAgIEBlcSAoIM6pYXBfMTUwID0gLT4gWyAoIGQgZm9yIGQgZnJvbSBqZXQud2FsayAnaGlkZXktaG8nICkuLi4sIF0gICAgICAgICAgKSwgWyBcIlwiXCJMZXQncyBzYXk6IFxcXCJcIlwiXCIsICdISURFWS1ITyEnLCAnXCIuJyBdXG4gICAgICAgIEBlcSAoIM6pYXBfMTUxID0gLT4gd2F0Y2hlZF8xICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAnaGlkZXktaG8nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgQGVxICggzqlhcF8xNTIgPSAtPiB3YXRjaGVkXzIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbICdISURFWS1ITycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICBAZXEgKCDOqWFwXzE1MyA9IC0+IHdhdGNoZWRfMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgJ0hJREVZLUhPIScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgIEBlcSAoIM6pYXBfMTU0ID0gLT4gd2F0Y2hlZF80ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyBcIlwiXCJMZXQncyBzYXk6IFxcXCJcIlwiXCIsICdISURFWS1ITyEnLCAnXCIuJyAgIF1cbiAgICAgICAgQGVxICggzqlhcF8xNTUgPSAtPiBbICggZCBmb3IgZCBmcm9tIGpldC53YWxrICdoaWRleS1obycgKS4uLiwgXS5qb2luICcnICApLCBcIlwiXCJMZXQncyBzYXk6IFwiSElERVktSE8hXCIuXCJcIlwiXG4gICAgICAgIEBlcSAoIM6pYXBfMTU2ID0gLT4gKCAgIGQgZm9yIGQgZnJvbSBqZXQucnVuICAnaGlkZXktaG8nICAgICAgICkuam9pbiAnJyAgKSwgXCJcIlwiTGV0J3Mgc2F5OiBcIkhJREVZLUhPIVwiLlwiXCJcIlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBqZXQgICAgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBqZXQucHVzaCBhZGRfMSA9ICggZCApIC0+IHlpZWxkIGQgKyAxXG4gICAgICAgIGpldC5wdXNoIGFkZF8xID0gKCBkICkgLT4geWllbGQgZCArIDFcbiAgICAgICAgamV0LnB1c2ggYWRkXzEgPSAoIGQgKSAtPiB5aWVsZCBkICsgMVxuICAgICAgICBqZXQucHVzaCBhZGRfMSA9ICggZCApIC0+IHlpZWxkIGQgKyAxXG4gICAgICAgIGpldC5wdXNoIGFkZF8xID0gKCBkICkgLT4geWllbGQgZCArIDFcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWFwXzE1NyA9IC0+IFsgKCBkIGZvciBkIGZyb20gamV0LndhbGsgMCApLi4uLCBdICAgICAgICAgICksIFsgNSwgXVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICAjIyMgZW1wdHkgcGlwZWxpbmUgaXMgYSBwaXBlbGluZSB3aXRob3V0IHRyYW5zZm9ybXMsIHNvIGRhdGEgaXMgcGFzc2VkIHRocm91Z2ggdW50cmFuc2Zvcm1lZDogIyMjXG4gICAgICAgIEBlcSAoIM6pYXBfMTU4ID0gLT4gWyAoICggbmV3IEpldHN0cmVhbSgpICkud2FsayAnZGF0YScgKS4uLiwgIF0gKSwgWyAnZGF0YScsIF1cbiAgICAgICAgQGVxICggzqlhcF8xNTkgPSAtPiAgICAgKCBuZXcgSmV0c3RyZWFtKCkgKS5ydW4gICdkYXRhJyAgICAgICAgICApLCBbICdkYXRhJywgXVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBjb2xsZWN0b3IgPSBbXVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHBfMSA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBwXzEucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDEtdDEnOyB5aWVsZCBkICsgJyDihJYgMSdcbiAgICAgICAgcF8xLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AxLXQyJzsgeWllbGQgZCArICcg4oSWIDInXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcF8yID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIHBfMi5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMi10MSc7IHlpZWxkIGQgKyAnIOKEliAzJ1xuICAgICAgICBwXzIucHVzaCBwXzFcbiAgICAgICAgcF8yLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AyLXQyJzsgeWllbGQgZCArICcg4oSWIDQnXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcF8zID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIHBfMy5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMy10MSc7IHlpZWxkIGQgKyAnIOKEliA1J1xuICAgICAgICBwXzMucHVzaCBwXzJcbiAgICAgICAgcF8zLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AzLXQyJzsgeWllbGQgZCArICcg4oSWIDYnXG4gICAgICAgIEBlcSAoIM6pYXBfMTYwID0gLT4gcF8zLnJ1biAgICAgICAgJ215LWRhdGEnICksIFsgJ215LWRhdGEg4oSWIDUg4oSWIDMg4oSWIDEg4oSWIDIg4oSWIDQg4oSWIDYnICwgXVxuICAgICAgICBAZXEgKCDOqWFwXzE2MSA9IC0+IGNvbGxlY3RvciAgICAgICAgICAgICAgICApLCBbICdwMy10MScsICdwMi10MScsICdwMS10MScsICdwMS10MicsICdwMi10MicsICdwMy10MicgXVxuICAgICAgICBAZXEgKCDOqWFwXzE2MiA9IC0+IHBfMy5nZXRfZmlyc3QgICdteS1kYXRhJyApLCAnbXktZGF0YSDihJYgNSDihJYgMyDihJYgMSDihJYgMiDihJYgNCDihJYgNidcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmlyc3QgICAgICAgICA9IFN5bWJvbCAnZmlyc3QnXG4gICAgICAgIGxhc3QgICAgICAgICAgPSBTeW1ib2wgJ2xhc3QnXG4gICAgICAgIGpldCAgICAgICAgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgZyAgICAgICAgICAgICA9ICggZCApIC0+XG4gICAgICAgICAgdXJnZSAnzqlrdnJ0XzE2MycsIGRcbiAgICAgICAgICBpbmZvICfOqWt2cnRfMTY0JywgXCJ5aWVsZCBmb3IgZmlyc3RcIiBpZiBkIGlzIGZpcnN0XG4gICAgICAgICAgeWllbGQgMCBpZiBkIGlzIGZpcnN0XG4gICAgICAgICAgaW5mbyAnzqlrdnJ0XzE2NScsIFwieWllbGQgZm9yIGRhdGFcIiB1bmxlc3MgZCBpbiBbIGZpcnN0LCBsYXN0LCBdXG4gICAgICAgICAgeWllbGQgZCAqIDIgdW5sZXNzIGQgaW4gWyBmaXJzdCwgbGFzdCwgXVxuICAgICAgICAgIGluZm8gJ86pa3ZydF8xNjYnLCBcInlpZWxkIGZvciBsYXN0XCIgaWYgZCBpcyBsYXN0XG4gICAgICAgICAgeWllbGQgMSBpZiBkIGlzIGxhc3RcbiAgICAgICAgdHJhbnNmb3JtXzEgICA9ICQgeyBmaXJzdCwgIH0sIGdcbiAgICAgICAgdHJhbnNmb3JtXzIgICA9ICQgeyBsYXN0LCAgIH0sIGdcbiAgICAgICAgamV0LnB1c2ggdHJhbnNmb3JtXzFcbiAgICAgICAgamV0LnB1c2ggdHJhbnNmb3JtXzJcbiAgICAgICAgZGVidWcgJ86pa3ZydF8xNjcnLCBqZXRcbiAgICAgICAgd2hpc3BlciAnzqlrdnJ0XzE2OCcsICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICAgIEBlcSAoIM6pa3ZydF8xNjkgPSAtPiB0cmFuc2Zvcm1fMVsgaW50ZXJuYWxzLkNGRyBdICksIHsgZmlyc3QsICB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xNzAgPSAtPiB0cmFuc2Zvcm1fMlsgaW50ZXJuYWxzLkNGRyBdICksIHsgbGFzdCwgICB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xNzEgPSAtPiBqZXQucnVuIDIyICAgICAgICAgICAgICAgICksIFsgMCwgMSwgODgsIDEsIF1cbiAgICAgICAgd2hpc3BlciAnzqlrdnJ0XzE3MicsICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+ICMjIyBzYW1lIGFzIGFib3ZlIGJ1dCB0aGUgdHJhbnNmb3JtcyBhcmUgc2VwZXJhdGUgIyMjXG4gICAgICAgIGZpcnN0ICAgICAgICAgPSBTeW1ib2wgJ2ZpcnN0J1xuICAgICAgICBsYXN0ICAgICAgICAgID0gU3ltYm9sICdsYXN0J1xuICAgICAgICBqZXQgICAgICAgID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGcxICAgICAgICAgICAgPSAoIGQgKSAtPlxuICAgICAgICAgIHVyZ2UgJ86pa3ZydF8xNzMgZzEnLCBkXG4gICAgICAgICAgaW5mbyAnzqlrdnJ0XzE3NCBnMScsIFwieWllbGQgZm9yIGZpcnN0XCIgaWYgZCBpcyBmaXJzdFxuICAgICAgICAgIHlpZWxkIDAgaWYgZCBpcyBmaXJzdFxuICAgICAgICAgIGluZm8gJ86pa3ZydF8xNzUgZzEnLCBcInlpZWxkIGZvciBkYXRhXCIgdW5sZXNzIGQgaW4gWyBmaXJzdCwgbGFzdCwgXVxuICAgICAgICAgIHlpZWxkIGQgKiAyIHVubGVzcyBkIGluIFsgZmlyc3QsIGxhc3QsIF1cbiAgICAgICAgICBpbmZvICfOqWt2cnRfMTc2IGcxJywgXCJ5aWVsZCBmb3IgbGFzdFwiIGlmIGQgaXMgbGFzdFxuICAgICAgICAgIHlpZWxkIDEgaWYgZCBpcyBsYXN0XG4gICAgICAgIGcyICAgICAgICAgICAgPSAoIGQgKSAtPlxuICAgICAgICAgIHVyZ2UgJ86pa3ZydF8xNzcgZzInLCBkXG4gICAgICAgICAgaW5mbyAnzqlrdnJ0XzE3OCBnMicsIFwieWllbGQgZm9yIGZpcnN0XCIgaWYgZCBpcyBmaXJzdFxuICAgICAgICAgIHlpZWxkIDAgaWYgZCBpcyBmaXJzdFxuICAgICAgICAgIGluZm8gJ86pa3ZydF8xNzkgZzInLCBcInlpZWxkIGZvciBkYXRhXCIgdW5sZXNzIGQgaW4gWyBmaXJzdCwgbGFzdCwgXVxuICAgICAgICAgIHlpZWxkIGQgKiAyIHVubGVzcyBkIGluIFsgZmlyc3QsIGxhc3QsIF1cbiAgICAgICAgICBpbmZvICfOqWt2cnRfMTgwIGcyJywgXCJ5aWVsZCBmb3IgbGFzdFwiIGlmIGQgaXMgbGFzdFxuICAgICAgICAgIHlpZWxkIDEgaWYgZCBpcyBsYXN0XG4gICAgICAgIHRyYW5zZm9ybV8xICAgPSAkIHsgZmlyc3QsICB9LCBnMVxuICAgICAgICB0cmFuc2Zvcm1fMiAgID0gJCB7IGxhc3QsICAgfSwgZzJcbiAgICAgICAgamV0LnB1c2ggdHJhbnNmb3JtXzFcbiAgICAgICAgamV0LnB1c2ggdHJhbnNmb3JtXzJcbiAgICAgICAgZGVidWcgJ86pa3ZydF8xODEnLCBqZXRcbiAgICAgICAgd2hpc3BlciAnzqlrdnJ0XzE4MicsICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICAgIEBlcSAoIM6pa3ZydF8xODMgPSAtPiB0cmFuc2Zvcm1fMVsgaW50ZXJuYWxzLkNGRyBdICksIHsgZmlyc3QsICB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xODQgPSAtPiB0cmFuc2Zvcm1fMlsgaW50ZXJuYWxzLkNGRyBdICksIHsgbGFzdCwgICB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xODUgPSAtPiBqZXQucnVuIDIyICAgICAgICAgICAgICAgICksIFsgMCwgMSwgODgsIDEsIF1cbiAgICAgICAgd2hpc3BlciAnzqlrdnJ0XzE4NicsICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGpldHN0cmVhbV9zZWxlY3RvcnM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgSmV0c3RyZWFtLFxuICAgICAgICAkLFxuICAgICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfamV0c3RyZWFtKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBAZXEgKCDOqWt2cnRfMTg3ID0gLT4gdHlwZV9vZiAoIG5ldyBKZXRzdHJlYW0oKSApICAgICAgICAgICAgICApLCAnb2JqZWN0J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBzdHJlYW1faXRlbXMgPSBbXG4gICAgICAgICAgU3ltYm9sICdzdGFydCdcbiAgICAgICAgICBTeW1ib2wuZm9yICdzdGFydCdcbiAgICAgICAgICBTeW1ib2wgJ2VuZCdcbiAgICAgICAgICBTeW1ib2wuZm9yICdlbmQnXG4gICAgICAgICAgNzYuOVxuICAgICAgICAgIFwiTWV4aWNvXCJcbiAgICAgICAgICBdXG4gICAgICAgIHNlbGVjdG9ycyA9IFtcbiAgICAgICAgICB7IHByb2JlOiBudWxsLCAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWQ6ICggbmV3IFNldCBbICdkYXRhJywgICAgICAgICAgICAgICAgIF0gKSB9XG4gICAgICAgICAgeyBwcm9iZTogJycsICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkOiAoIG5ldyBTZXQgWyAnJywgICAgICAgICAgICAgICAgICAgICBdICkgfVxuICAgICAgICAgIHsgcHJvYmU6ICdkYXRhJywgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZDogKCBuZXcgU2V0IFsgJ2RhdGEnLCAgICAgICAgICAgICAgICAgXSApIH1cbiAgICAgICAgICB7IHByb2JlOiBbICdkYXRhJywgJ2N1ZScsIF0sICAgICAgICAgIG5vcm1hbGl6ZWQ6ICggbmV3IFNldCBbICdkYXRhJywgJ2N1ZScsICAgICAgICAgIF0gKSB9XG4gICAgICAgICAgeyBwcm9iZTogJ2RhdGEsIGN1ZScsICAgICAgICAgICAgICAgICBub3JtYWxpemVkOiAoIG5ldyBTZXQgWyAnZGF0YScsICdjdWUnLCAgICAgICAgICBdICkgfVxuICAgICAgICAgIHsgcHJvYmU6ICdjdWUnLCAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZDogKCBuZXcgU2V0IFsgJ2N1ZScsICAgICAgICAgICAgICAgICAgXSApIH1cbiAgICAgICAgICB7IHByb2JlOiAnY3VlI2VuZCcsICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWQ6ICggbmV3IFNldCBbICdjdWUjZW5kJywgICAgICAgICAgICAgIF0gKSB9XG4gICAgICAgICAgeyBwcm9iZTogJyNlbmQnLCAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkOiAoIG5ldyBTZXQgWyAnY3VlI2VuZCcsICAgICAgICAgICAgICBdICkgfVxuICAgICAgICAgIHsgcHJvYmU6ICdjdWUjc3RhcnQnLCAgICAgICAgICAgICAgICAgbm9ybWFsaXplZDogKCBuZXcgU2V0IFsgJ2N1ZSNzdGFydCcsICAgICAgICAgICAgXSApIH1cbiAgICAgICAgICB7IHByb2JlOiAnI3N0YXJ0JywgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWQ6ICggbmV3IFNldCBbICdjdWUjc3RhcnQnLCAgICAgICAgICAgIF0gKSB9XG4gICAgICAgICAgeyBwcm9iZTogJ2N1ZSNzdGFydCxjdWUjZW5kJywgICAgICAgICBub3JtYWxpemVkOiAoIG5ldyBTZXQgWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnLCBdICkgfVxuICAgICAgICAgIHsgcHJvYmU6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJywgXSwgbm9ybWFsaXplZDogKCBuZXcgU2V0IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJywgXSApIH1cbiAgICAgICAgICB7IHByb2JlOiAnI3N0YXJ0LCNlbmQnLCAgICAgICAgICAgICAgIG5vcm1hbGl6ZWQ6ICggbmV3IFNldCBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcsIF0gKSB9XG4gICAgICAgICAgeyBwcm9iZTogWyAnI3N0YXJ0JywgJyNlbmQnLCBdLCAgICAgICBub3JtYWxpemVkOiAoIG5ldyBTZXQgWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnLCBdICkgfVxuICAgICAgICAgIF1cbiAgICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGNsYXNzIFNlbGVjdG9yXG4gICAgICAgICAgY29uc3RydWN0b3I6ICggc2VsZWN0b3JzLi4uICkgLT5cbiAgICAgICAgICAgIHNlbGVjdG9ycyAgICAgICA9IG5vcm1hbGl6ZV9zZWxlY3RvcnMgc2VsZWN0b3JzLi4uXG4gICAgICAgICAgICBAcmVqZWN0X2FsbCAgICAgPSBmYWxzZVxuICAgICAgICAgICAgQGRhdGEgICAgICAgICAgID0gdHJ1ZVxuICAgICAgICAgICAgQGN1ZXMgICAgICAgICAgID0gZmFsc2VcbiAgICAgICAgICAgIGlnbm9yZV9jdWVfaWRzICA9IGZhbHNlXG4gICAgICAgICAgICBmb3Igc2VsZWN0b3IgZnJvbSBzZWxlY3RvcnNcbiAgICAgICAgICAgICAgc3dpdGNoIHRydWVcbiAgICAgICAgICAgICAgICB3aGVuIHNlbGVjdG9yIGlzICdkYXRhIyonIHRoZW4gQGRhdGEgPSB0cnVlXG4gICAgICAgICAgICAgICAgd2hlbiBzZWxlY3RvciBpcyAnY3VlIyonIHRoZW4gQGN1ZXMgPSB0cnVlXG4gICAgICAgICAgICAgICAgd2hlbiAoIG1hdGNoID0gc2VsZWN0b3IubWF0Y2ggL15kYXRhIyg/PGlkPi4rKSQvICk/XG4gICAgICAgICAgICAgICAgICAjIyMgVEFJTlQgbWVudGlvbiBvcmlnaW5hbCBzZWxlY3RvciBuZXh0IHRvIG5vcm1hbGl6ZWQgZm9ybSAjIyNcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6panN0cm1fMTg4IElEcyBvbiBkYXRhIGl0ZW1zIG5vdCBzdXBwb3J0ZWQsIGdvdCAje3NlbGVjdG9yfVwiXG4gICAgICAgICAgICAgICAgd2hlbiAoIG1hdGNoID0gc2VsZWN0b3IubWF0Y2ggL15jdWUjKD88aWQ+LispJC8gKT9cbiAgICAgICAgICAgICAgICAgIEBjdWVzID0gbmV3IFNldCgpIHVubGVzcyAoIHR5cGVvZiBAY3VlcyBpcyAnc2V0JyApXG4gICAgICAgICAgICAgICAgICBAY3Vlcy5hZGQgbWF0Y2guZ3JvdXBzLmlkXG4gICAgICAgICAgICAgICAgZWxzZSBudWxsXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgc2VsZWN0OiAoIGl0ZW0gKSAtPlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlIGlmIEByZWplY3RfYWxsXG4gICAgICAgICAgICBpZiBpc19jdWUgPSAoIHR5cGVvZiBpdGVtICkgaXMgJ3N5bWJvbCdcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWUgICBpZiBAY3VlcyBpcyB0cnVlXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZSAgaWYgQGN1ZXMgaXMgZmFsc2VcbiAgICAgICAgICAgICAgcmV0dXJuIEBjdWVzLmhhcyBpZF9mcm9tX3N5bWJvbCBpdGVtXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZSAgIGlmIEBkYXRhIGlzIHRydWVcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSAgaWYgQGRhdGEgaXMgZmFsc2VcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6panN0cm1fMTg4IElEcyBvbiBkYXRhIGl0ZW1zIG5vdCBzdXBwb3J0ZWRcIlxuICAgICAgICAgICAgIyByZXR1cm4gQGRhdGEuaGFzIGlkX2Zyb21fdmFsdWUgaXRlbVxuXG4gICAgICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgIHRvU3RyaW5nOiAtPlxuICAgICAgICAgICAgUiA9IFtdXG4gICAgICAgICAgICBpZiBAYWxsX2N1ZXMgIHRoZW4gUi5wdXNoICcrY3VlJ1xuICAgICAgICAgICAgaWYgQG5vX2N1ZXMgICB0aGVuIFIucHVzaCAnLWN1ZSdcbiAgICAgICAgICAgIGlmIEBhbGxfZGF0YSAgdGhlbiBSLnB1c2ggJytkYXRhJ1xuICAgICAgICAgICAgaWYgQG5vX2RhdGEgICB0aGVuIFIucHVzaCAnLWRhdGEnXG4gICAgICAgICAgICByZXR1cm4gUi5qb2luICdeJ1xuXG4gICAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWRfZnJvbV9zeW1ib2wgPSAoIHN5bWJvbCApIC0+XG4gICAgICAgICAgUiA9IFN0cmluZyBzeW1ib2xcbiAgICAgICAgICByZXR1cm4gKCBSIClbIDcgLi4uIFIubGVuZ3RoIC0gMSBdXG5cbiAgICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBzZWxlY3RvcnNfYXNfbGlzdCA9ICggc2VsZWN0b3JzLi4uICkgLT5cbiAgICAgICAgICByZXR1cm4gW10gaWYgc2VsZWN0b3JzLmxlbmd0aCBpcyAwXG4gICAgICAgICAgc2VsZWN0b3JzID0gc2VsZWN0b3JzLmZsYXQgSW5maW5pdHlcbiAgICAgICAgICByZXR1cm4gW10gaWYgc2VsZWN0b3JzLmxlbmd0aCBpcyAwXG4gICAgICAgICAgcmV0dXJuIFsgJycsIF0gaWYgc2VsZWN0b3JzLmxlbmd0aCBpcyAxIGFuZCBzZWxlY3RvcnNbIDAgXSBpcyAnJ1xuICAgICAgICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5qb2luICcsJ1xuICAgICAgICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5yZXBsYWNlIC9cXHMrL2csICcnICMjIyBUQUlOVCBub3QgZ2VuZXJhbGx5IHBvc3NpYmxlICMjI1xuICAgICAgICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5zcGxpdCAnLCcgIyMjIFRBSU5UIG5vdCBnZW5lcmFsbHkgcG9zc2libGUgIyMjXG4gICAgICAgICAgcmV0dXJuIHNlbGVjdG9yc1xuXG4gICAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgbm9ybWFsaXplX3NlbGVjdG9ycyA9ICggc2VsZWN0b3JzLi4uICkgLT5cbiAgICAgICAgICBzZWxlY3RvcnMgPSBzZWxlY3RvcnNfYXNfbGlzdCBzZWxlY3RvcnMuLi5cbiAgICAgICAgICBSICAgICAgICAgPSBuZXcgU2V0KClcbiAgICAgICAgICBmb3Igc2VsZWN0b3IgaW4gc2VsZWN0b3JzXG4gICAgICAgICAgICBzd2l0Y2ggdHJ1ZVxuICAgICAgICAgICAgICB3aGVuIHNlbGVjdG9yIGlzICcnICAgICAgICAgICAgIHRoZW4gbnVsbFxuICAgICAgICAgICAgICB3aGVuIHNlbGVjdG9yIGlzICcjJyAgICAgICAgICAgIHRoZW4gUi5hZGQgXCJjdWUjKlwiXG4gICAgICAgICAgICAgIHdoZW4gL14jLisvLnRlc3Qgc2VsZWN0b3IgICAgICAgdGhlbiBSLmFkZCBcImN1ZSN7c2VsZWN0b3J9XCJcbiAgICAgICAgICAgICAgd2hlbiAvLisjJC8udGVzdCBzZWxlY3RvciAgICAgICB0aGVuIFIuYWRkIFwiI3tzZWxlY3Rvcn0qXCJcbiAgICAgICAgICAgICAgd2hlbiBub3QgLyMvLnRlc3Qgc2VsZWN0b3IgICAgICB0aGVuIFIuYWRkIFwiI3tzZWxlY3Rvcn0jKlwiXG4gICAgICAgICAgICAgIGVsc2UgUi5hZGQgc2VsZWN0b3JcbiAgICAgICAgICBSLmFkZCAnZGF0YSMqJyBpZiBSLnNpemUgaXMgMFxuICAgICAgICAgIFIuZGVsZXRlICcnIGlmIFIuc2l6ZSBpc250IDFcbiAgICAgICAgICByZXR1cm4gUlxuXG4gICAgICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgZGVidWcgJ86pa3ZydF8xODknLCBycHIgc2VsZWN0b3JzX2FzX2xpc3QgJydcbiAgICAgICAgZGVidWcgJ86pa3ZydF8xOTAnLCBycHIgc2VsZWN0b3JzX2FzX2xpc3QgWyBbICcnLCBdLCBdXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMTkxJywgcnByIHNlbGVjdG9yc19hc19saXN0KClcbiAgICAgICAgZGVidWcgJ86pa3ZydF8xOTInLCBycHIgc2VsZWN0b3JzX2FzX2xpc3QgW11cbiAgICAgICAgZGVidWcgJ86pa3ZydF8xOTMnLCBycHIgc2VsZWN0b3JzX2FzX2xpc3QgW1tdXVxuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzE5NCcsIHJwciBzZWxlY3RvcnNfYXNfbGlzdCAnZGF0YSdcbiAgICAgICAgZGVidWcgJ86pa3ZydF8xOTUnLCBycHIgc2VsZWN0b3JzX2FzX2xpc3QgJ2N1ZSdcbiAgICAgICAgZGVidWcgJ86pa3ZydF8xOTYnLCBycHIgc2VsZWN0b3JzX2FzX2xpc3QgJ2N1ZScsICdkYXRhJ1xuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzE5NycsIHJwciBzZWxlY3RvcnNfYXNfbGlzdCAnIGN1ZSNzdGFydCwgY3VlI2VuZCAnXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMTk4JywgcnByIHNlbGVjdG9yc19hc19saXN0ICcjc3RhcnQnXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMTk5JywgcnByIHNlbGVjdG9yc19hc19saXN0ICcjc3RhcnQsI2VuZCdcbiAgICAgICAgZGVidWcgJ86pa3ZydF8yMDAnLCBycHIgc2VsZWN0b3JzX2FzX2xpc3QgJyNlbmQsI3N0YXJ0J1xuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzIwMScsIHJwciBzZWxlY3RvcnNfYXNfbGlzdCAnI2VuZCwjc3RhcnQsJ1xuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzIwMicsIHJwciBzZWxlY3RvcnNfYXNfbGlzdCAnIydcbiAgICAgICAgZGVidWcgJ86pa3ZydF8yMDMnLCBycHIgc2VsZWN0b3JzX2FzX2xpc3QgJ2RhdGEjJ1xuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzIwNCcsIHJwciBzZWxlY3RvcnNfYXNfbGlzdCAnZGF0YSNmb28jYmFyJ1xuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzIwNScsIHJwciBzZWxlY3RvcnNfYXNfbGlzdCAnI2ZvbyNiYXInXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMjA2JywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgZGVidWcgJ86pa3ZydF8yMDcnLCBycHIgbm9ybWFsaXplX3NlbGVjdG9ycyAnJ1xuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzIwOCcsIHJwciBub3JtYWxpemVfc2VsZWN0b3JzIFsgWyAnJywgXSwgXVxuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzIwOScsIHJwciBub3JtYWxpemVfc2VsZWN0b3JzKClcbiAgICAgICAgZGVidWcgJ86pa3ZydF8yMTAnLCBycHIgbm9ybWFsaXplX3NlbGVjdG9ycyBbXVxuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzIxMScsIHJwciBub3JtYWxpemVfc2VsZWN0b3JzIFtbXV1cbiAgICAgICAgZGVidWcgJ86pa3ZydF8yMTInLCBycHIgbm9ybWFsaXplX3NlbGVjdG9ycyAnZGF0YSdcbiAgICAgICAgZGVidWcgJ86pa3ZydF8yMTMnLCBycHIgbm9ybWFsaXplX3NlbGVjdG9ycyAnY3VlJ1xuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzIxNCcsIHJwciBub3JtYWxpemVfc2VsZWN0b3JzICdjdWUnLCAnZGF0YSdcbiAgICAgICAgZGVidWcgJ86pa3ZydF8yMTUnLCBycHIgbm9ybWFsaXplX3NlbGVjdG9ycyAnIGN1ZSNzdGFydCwgY3VlI2VuZCAnXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMjE2JywgcnByIG5vcm1hbGl6ZV9zZWxlY3RvcnMgJyNzdGFydCdcbiAgICAgICAgZGVidWcgJ86pa3ZydF8yMTcnLCBycHIgbm9ybWFsaXplX3NlbGVjdG9ycyAnI3N0YXJ0LCNlbmQnXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMjE4JywgcnByIG5vcm1hbGl6ZV9zZWxlY3RvcnMgJyNlbmQsI3N0YXJ0J1xuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzIxOScsIHJwciBub3JtYWxpemVfc2VsZWN0b3JzICcjZW5kLCNzdGFydCwnXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMjIwJywgcnByIG5vcm1hbGl6ZV9zZWxlY3RvcnMgJyMnXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMjIxJywgcnByIG5vcm1hbGl6ZV9zZWxlY3RvcnMgJ2RhdGEjJ1xuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzIyMicsIHJwciBub3JtYWxpemVfc2VsZWN0b3JzICdkYXRhI2ZvbyNiYXInXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMjIzJywgcnByIG5vcm1hbGl6ZV9zZWxlY3RvcnMgJyNmb28jYmFyJ1xuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzIwNicsICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMjA3JywgbmV3IFNlbGVjdG9yICcnXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMjA4JywgbmV3IFNlbGVjdG9yIFsgWyAnJywgXSwgXVxuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzIwOScsIG5ldyBTZWxlY3RvcigpXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMjEwJywgbmV3IFNlbGVjdG9yIFtdXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMjExJywgbmV3IFNlbGVjdG9yIFtbXV1cbiAgICAgICAgZGVidWcgJ86pa3ZydF8yMTInLCBuZXcgU2VsZWN0b3IgJ2RhdGEnXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMjEzJywgbmV3IFNlbGVjdG9yICdjdWUnXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMjE0JywgbmV3IFNlbGVjdG9yICdjdWUnLCAnZGF0YSdcbiAgICAgICAgZGVidWcgJ86pa3ZydF8yMTUnLCBuZXcgU2VsZWN0b3IgJyBjdWUjc3RhcnQsIGN1ZSNlbmQgJ1xuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzIxNicsIG5ldyBTZWxlY3RvciAnI3N0YXJ0J1xuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzIxNycsIG5ldyBTZWxlY3RvciAnI3N0YXJ0LCNlbmQnXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMjE4JywgbmV3IFNlbGVjdG9yICcjZW5kLCNzdGFydCdcbiAgICAgICAgZGVidWcgJ86pa3ZydF8yMTknLCBuZXcgU2VsZWN0b3IgJyNlbmQsI3N0YXJ0LCdcbiAgICAgICAgZGVidWcgJ86pa3ZydF8yMjAnLCBuZXcgU2VsZWN0b3IgJyMnXG4gICAgICAgIGRlYnVnICfOqWt2cnRfMjIxJywgbmV3IFNlbGVjdG9yICdkYXRhIydcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIyMicsIG5ldyBTZWxlY3RvciAnZGF0YSNmb28jYmFyJ1xuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzIyMycsIG5ldyBTZWxlY3RvciAnI2ZvbyNiYXInXG4gICAgICAgICMgc2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IoKVxuICAgICAgICAjICMgZm9yIHNlbGVjdG9yX3RleHQgaW4gc2VsZWN0b3JzXG4gICAgICAgICMgc2VsZWN0b3JfdGV4dCA9IHNlbGVjdG9yLnRvU3RyaW5nKClcbiAgICAgICAgIyBmb3IgaXRlbSBpbiBzdHJlYW1faXRlbXNcbiAgICAgICAgIyAgIGhlbHAgJ86pa3ZydF8yMjQnLCBmXCIje3JwciBzZWxlY3Rvcl90ZXh0fTo8MjBjOyAje3JwciBpdGVtfTo8MjBjOyAje3NlbGVjdG9yLnNlbGVjdCBpdGVtfVwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX2ltcHJvdmVkX3N0cnVjdHVyZSA9IC0+XG4gIGhlbHAgJ86pa3ZydF8yMjUnLCByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gIERJUyA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvX2RlbW8taW1wcm92ZWQtc3RydWN0dXJlJ1xuICBoZWxwICfOqWt2cnRfMjI2JywgRElTXG4gIERJUy5kZW1vX2F0dGFjaGVkKClcbiAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAdGFza3NcbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfZ2V0X2xvY2FsX2Rlc3RpbmF0aW9uczogQHRhc2tzLnJlcXVpcmVfZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV93YWxrX2pzX3Rva2VuczogQHRhc2tzLnJlcXVpcmVfd2Fsa19qc190b2tlbnMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfcGFyc2VfcmVxdWlyZV9zdGF0ZW1lbnRzOiBAdGFza3MucmVxdWlyZV9wYXJzZV9yZXF1aXJlX3N0YXRlbWVudHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfamV0c3RyZWFtOiBAdGFza3MucmVxdWlyZV9qZXRzdHJlYW0sIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBqZXRzdHJlYW1fc2VsZWN0b3JzOiBAdGFza3MuamV0c3RyZWFtX3NlbGVjdG9ycywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9wYXRoX3Rvb2xzOiBAdGFza3MucmVxdWlyZV9wYXRoX3Rvb2xzLCB9XG4gICMgZGVtb19pbXByb3ZlZF9zdHJ1Y3R1cmUoKSJdfQ==
