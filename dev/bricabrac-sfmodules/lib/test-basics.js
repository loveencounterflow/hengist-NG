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
        var Selector, _normalize_selectors, accept_all, cues, data, i, id_from_symbol, len, normalize_selectors, nrm_sel, p, probe, probes_and_matchers, results, sel, sel_list, sel_rpr, selectors_as_list, stream_items, Ωjstrm_190, Ωjstrm_191, Ωjstrm_192, Ωjstrm_193, Ωjstrm_194, Ωjstrm_195;
        stream_items = [Symbol('start'), Symbol.for('start'), Symbol('end'), Symbol.for('end'), 76.9, "Mexico"];
        probes_and_matchers = [
          {
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
            probe: ['cue#start',
          'cue#end'],
            sel_list: ['cue#start',
          'cue#end'],
            nrm_sel: ['cue#start',
          'cue#end'],
            sel_rpr: 'cue#start, cue#end',
            data: true,
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
            data: true,
            cues: ['start',
          'end'],
            accept_all: false
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
            probe: 'data',
            sel_list: ['data'],
            nrm_sel: ['data#*'],
            sel_rpr: 'data',
            data: true,
            cues: false,
            accept_all: false
          },
          {
            probe: 'cue#foo#bar',
            sel_list: ['cue#foo#bar'],
            nrm_sel: ['cue#foo#bar'],
            sel_rpr: 'cue#foo#bar',
            data: true,
            cues: ['foo#bar'],
            accept_all: false
          },
          {
            probe: 'cue',
            sel_list: ['cue'],
            nrm_sel: ['cue#*'],
            sel_rpr: 'cue',
            data: true,
            cues: true,
            accept_all: true
          },
          {
            probe: 'cue#start,cue#end',
            sel_list: ['cue#start',
          'cue#end'],
            nrm_sel: ['cue#start',
          'cue#end'],
            sel_rpr: 'cue#start, cue#end',
            data: true,
            cues: ['start',
          'end'],
            accept_all: false
          },
          {
            probe: 'cue#start',
            sel_list: ['cue#start'],
            nrm_sel: ['cue#start'],
            sel_rpr: 'cue#start',
            data: true,
            cues: ['start'],
            accept_all: false
          },
          {
            probe: 'cue#end',
            sel_list: ['cue#end'],
            nrm_sel: ['cue#end'],
            sel_rpr: 'cue#end',
            data: true,
            cues: ['end'],
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
            probe: '#start,#end',
            sel_list: ['#start',
          '#end'],
            nrm_sel: ['cue#start',
          'cue#end'],
            sel_rpr: '#start, #end',
            data: true,
            cues: ['start',
          'end'],
            accept_all: false
          },
          {
            probe: '#start',
            sel_list: ['#start'],
            nrm_sel: ['cue#start'],
            sel_rpr: '#start',
            data: true,
            cues: ['start'],
            accept_all: false
          },
          {
            probe: '#foo#bar',
            sel_list: ['#foo#bar'],
            nrm_sel: ['cue#foo#bar'],
            sel_rpr: '#foo#bar',
            data: true,
            cues: ['foo#bar'],
            accept_all: false
          },
          {
            probe: '#end,#start,',
            sel_list: ['#end',
          '#start',
          ''],
            nrm_sel: ['cue#end',
          'cue#start'],
            sel_rpr: '#end, #start, ',
            data: true,
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
            data: true,
            cues: ['end',
          'start'],
            accept_all: false
          },
          {
            probe: '#end',
            sel_list: ['#end'],
            nrm_sel: ['cue#end'],
            sel_rpr: '#end',
            data: true,
            cues: ['end'],
            accept_all: false
          },
          {
            probe: '#',
            sel_list: ['#'],
            nrm_sel: ['cue#*'],
            sel_rpr: '#',
            data: true,
            cues: true,
            accept_all: true
          },
          {
            probe: ' cue#start, cue#end ',
            sel_list: ['cue#start',
          'cue#end'],
            nrm_sel: ['cue#start',
          'cue#end'],
            sel_rpr: 'cue#start, cue#end',
            data: true,
            cues: ['start',
          'end'],
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
          }
        ];
        //=====================================================================================================
        //.................................................................................................
        // { probe: 'data#foo#bar',             }
        Selector = class Selector {
          constructor(...selectors) {
            var match, ref, selector, selectors_rpr;
            ({selectors_rpr, selectors} = _normalize_selectors(...selectors));
            this.selectors_rpr = selectors_rpr;
            this.data = true;
            this.cues = false;
            this.accept_all = (this.data === true) && (this.cues === true);
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
                  if ((ref = this.cues) === true || ref === false) {
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
          _get_excerpt() {
            return {
              data: this.data,
              cues: this.cues,
              accept_all: this.accept_all
            };
          }

          //---------------------------------------------------------------------------------------------------
          select(item) {
            var is_cue;
            if (this.accept_all) {
              return true;
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
            throw new Error(`Ωjstrm_189 IDs on data items not supported in selector ${rpr(this.toString)}`);
          }

          // return @data.has id_from_value item

            //---------------------------------------------------------------------------------------------------
          toString() {
            return this.selectors_rpr;
          }

        };
        // R = []
        // if @all_cues  then R.push '+cue'
        // if @no_cues   then R.push '-cue'
        // if @all_data  then R.push '+data'
        // if @no_data   then R.push '-data'
        // return R.join '^'

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
          return (_normalize_selectors(...selectors)).selectors;
        };
        //---------------------------------------------------------------------------------------------------
        _normalize_selectors = function(...selectors) {
          var R, i, len, selector, selectors_rpr;
          selectors = selectors_as_list(...selectors);
          selectors_rpr = selectors.join(', ');
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
          return {
            selectors: R,
            selectors_rpr
          };
        };
//===================================================================================================
        results = [];
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          p = probes_and_matchers[i];
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
          echo({probe, sel_list, nrm_sel, sel_rpr, data, cues, accept_all});
          this.eq((Ωjstrm_190 = function() {
            return sel_list;
          }), p.sel_list);
          this.eq((Ωjstrm_191 = function() {
            return nrm_sel;
          }), p.nrm_sel);
          this.eq((Ωjstrm_192 = function() {
            return sel_rpr;
          }), p.sel_rpr);
          this.eq((Ωjstrm_193 = function() {
            return data;
          }), p.data);
          this.eq((Ωjstrm_194 = function() {
            return cues;
          }), p.cues);
          results.push(this.eq((Ωjstrm_195 = function() {
            return accept_all;
          }), p.accept_all));
        }
        return results;
      })();
      // debug 'Ωkvrt_196', rpr selectors_as_list ''
      // debug 'Ωkvrt_197', rpr selectors_as_list [ [ '', ], ]
      // debug 'Ωkvrt_198', rpr selectors_as_list()
      // debug 'Ωkvrt_199', rpr selectors_as_list []
      // debug 'Ωkvrt_200', rpr selectors_as_list [[]]
      // debug 'Ωkvrt_201', rpr selectors_as_list 'data'
      // debug 'Ωkvrt_202', rpr selectors_as_list 'cue'
      // debug 'Ωkvrt_203', rpr selectors_as_list 'cue', 'data'
      // debug 'Ωkvrt_204', rpr selectors_as_list ' cue#start, cue#end '
      // debug 'Ωkvrt_205', rpr selectors_as_list '#start'
      // debug 'Ωkvrt_206', rpr selectors_as_list '#start,#end'
      // debug 'Ωkvrt_207', rpr selectors_as_list '#end,#start'
      // debug 'Ωkvrt_208', rpr selectors_as_list '#end,#start,'
      // debug 'Ωkvrt_209', rpr selectors_as_list '#'
      // debug 'Ωkvrt_210', rpr selectors_as_list 'data#'
      // debug 'Ωkvrt_211', rpr selectors_as_list 'data#foo#bar'
      // debug 'Ωkvrt_212', rpr selectors_as_list '#foo#bar'
      // debug 'Ωkvrt_213', '————————————————————————————————————–'
      // debug 'Ωkvrt_214', rpr normalize_selectors ''
      // debug 'Ωkvrt_215', rpr normalize_selectors [ [ '', ], ]
      // debug 'Ωkvrt_216', rpr normalize_selectors()
      // debug 'Ωkvrt_217', rpr normalize_selectors []
      // debug 'Ωkvrt_218', rpr normalize_selectors [[]]
      // debug 'Ωkvrt_219', rpr normalize_selectors 'data'
      // debug 'Ωkvrt_220', rpr normalize_selectors 'cue'
      // debug 'Ωkvrt_221', rpr normalize_selectors 'cue', 'data'
      // debug 'Ωkvrt_222', rpr normalize_selectors ' cue#start, cue#end '
      // debug 'Ωkvrt_223', rpr normalize_selectors '#start'
      // debug 'Ωkvrt_224', rpr normalize_selectors '#start,#end'
      // debug 'Ωkvrt_225', rpr normalize_selectors '#end,#start'
      // debug 'Ωkvrt_226', rpr normalize_selectors '#end,#start,'
      // debug 'Ωkvrt_227', rpr normalize_selectors '#'
      // debug 'Ωkvrt_228', rpr normalize_selectors 'data#'
      // debug 'Ωkvrt_229', rpr normalize_selectors 'data#foo#bar'
      // debug 'Ωkvrt_230', rpr normalize_selectors '#foo#bar'
      // debug 'Ωkvrt_231', '————————————————————————————————————–'
      // debug 'Ωkvrt_232', new Selector ''
      // debug 'Ωkvrt_233', new Selector [ [ '', ], ]
      // debug 'Ωkvrt_234', new Selector()
      // debug 'Ωkvrt_235', new Selector []
      // debug 'Ωkvrt_236', new Selector [[]]
      // debug 'Ωkvrt_237', new Selector 'data'
      // debug 'Ωkvrt_238', new Selector 'cue'
      // debug 'Ωkvrt_239', new Selector 'cue', 'data'
      // debug 'Ωkvrt_240', new Selector ' cue#start, cue#end '
      // debug 'Ωkvrt_241', new Selector '#start'
      // debug 'Ωkvrt_242', new Selector '#start,#end'
      // debug 'Ωkvrt_243', new Selector '#end,#start'
      // debug 'Ωkvrt_244', new Selector '#end,#start,'
      // debug 'Ωkvrt_245', new Selector '#'
      // debug 'Ωkvrt_246', new Selector 'data#'
      // # debug 'Ωkvrt_247', new Selector 'data#foo#bar'
      // debug 'Ωkvrt_248', new Selector '#foo#bar'
      // selector = new Selector()
      // # for selector_text in selectors
      // selector_text = selector.toString()
      // for item in stream_items
      //   help 'Ωkvrt_249', f"#{rpr selector_text}:<20c; #{rpr item}:<20c; #{selector.select item}"
      //.....................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  demo_improved_structure = function() {
    var DIS;
    help('Ωkvrt_250', require('../../../apps/bricabrac-sfmodules'));
    DIS = require('../../../apps/bricabrac-sfmodules/lib/_demo-improved-structure');
    help('Ωkvrt_251', DIS);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLHVCQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQXBCQTs7Ozs7RUEyQkEsSUFBQyxDQUFBLEtBQUQsR0FHSSxDQUFBOztJQUFBLHdCQUFBLEVBQTBCLFFBQUEsQ0FBQSxDQUFBO0FBQzlCLFVBQUEsU0FBQSxFQUFBLGlCQUFBLEVBQUEsc0JBQUEsRUFBQSxPQUFBLEVBQUE7TUFBTSxTQUFBLEdBQThCLE9BQUEsQ0FBUSxtQ0FBUjtNQUM5QixDQUFBLENBQUUsT0FBRixDQUFBLEdBQThCLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBbkIsQ0FBQSxDQUE5QjtNQUNBLENBQUEsQ0FBRSxpQkFBRixDQUFBLEdBQThCLFNBQVMsQ0FBQyx3QkFBVixDQUFBLENBQTlCO01BQ0EsQ0FBQSxDQUFFLHNCQUFGLENBQUEsR0FBOEIsU0FBUyxDQUFDLDhCQUFWLENBQUEsQ0FBOUIsRUFITjs7TUFLTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsT0FBQSxDQUFRLGlCQUFSO01BQUgsQ0FBZCxDQUFKLEVBQWtELFVBQWxEO01BQ0csQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNULFlBQUEsUUFBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsWUFBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBUSxPQUFBLEdBQ0U7VUFBQSxVQUFBLEVBQWMsY0FBZDtVQUNBLFFBQUEsRUFBYyxnQkFEZDtVQUVBLFdBQUEsRUFBYztRQUZkO1FBR0YsT0FBQSxHQUNFO1VBQUEsVUFBQSxFQUFjLGtCQUFkO1VBQ0EsUUFBQSxFQUFjLFlBRGQ7VUFFQSxXQUFBLEVBQWM7UUFGZDtRQUdGLFlBQUEsR0FBZ0IsQ0FBRSxHQUFBLE9BQUY7UUFDaEIsUUFBQSxHQUFnQixpQkFBQSxDQUFrQixPQUFsQjtRQUNoQixJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBZCxDQUFSLEVBQWdELFlBQWhEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFILENBQWQsQ0FBUixFQUFnRCxPQUFoRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsUUFBQSxLQUFZO1FBQWYsQ0FBZCxDQUFSLEVBQWdELEtBQWhEO0FBQ0EsZUFBTztNQWROLENBQUE7TUFnQkEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1QsWUFBQSxPQUFBLEVBQUEsWUFBQSxFQUFBLFNBQUEsRUFBQTtRQUFRLE9BQUEsR0FDRTtVQUFBLFVBQUEsRUFBYyxjQUFkO1VBQ0EsUUFBQSxFQUFjLGdCQURkO1VBRUEsV0FBQSxFQUFjO1FBRmQ7UUFHRixZQUFBLEdBQWdCLENBQUUsR0FBQSxPQUFGO1FBQ2hCLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsaUJBQUEsQ0FBa0IsT0FBbEI7UUFBSCxDQUFkLENBQVIsRUFBc0QsMkNBQXREO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFILENBQWQsQ0FBUixFQUEwRCxZQUExRDtBQUNBLGVBQU87TUFSTixDQUFBO01BVUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1QsWUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQTtRQUFRLE9BQUEsR0FDRTtVQUFBLFVBQUEsRUFBZ0IsU0FBaEI7VUFDQSxZQUFBLEVBQWdCLFVBRGhCO1VBRUEsV0FBQSxFQUFnQix3QkFGaEI7VUFHQSxVQUFBLEVBQWdCLHNCQUhoQjtVQUlBLFVBQUEsRUFBZ0I7UUFKaEI7QUFLRjtRQUFBLEtBQUEsVUFBQTs7VUFDRSxLQUFBLENBQU0sV0FBTixFQUFtQixDQUFDLENBQUEsQ0FBQSxDQUFHLEdBQUgsQ0FBQSxPQUFBLENBQUEsQ0FBZ0IsR0FBQSxDQUFJLEtBQUosQ0FBaEIsQ0FBQSxDQUFwQjtRQURGO0FBRUEsZUFBTztNQVROLENBQUE7TUFXQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLHdCQUFBLEVBQUEsY0FBQSxFQUFBLEdBQUEsRUFBQSxXQUFBLEVBQUEsYUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUEsV0FBQSxFQUFBLFdBQUEsRUFBQSxLQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBUSxjQUFBLEdBQWlCO1VBQ2YsU0FBQSxFQUFXO1lBQ1QsTUFBQSxFQUFRLG1DQURDO1lBRVQsU0FBQSxFQUFXLHlCQUZGO1lBR1QsYUFBQSxFQUFlO1VBSE4sQ0FESTtVQU1mLFVBQUEsRUFBWTtZQUNWLEdBQUEsRUFBSyxVQURLO1lBRVYsR0FBQSxFQUFLLGFBRks7WUFHVixHQUFBLEVBQUssaUJBSEs7WUFJVixHQUFBLEVBQUs7VUFKSztRQU5HO1FBV2pCLHdCQUFBLEdBQTJCO1VBQ3pCLFNBQUEsRUFBVztZQUNULE1BQUEsRUFBUSxtQ0FEQztZQUVULFNBQUEsRUFBVyxzREFGRjtZQUdULGFBQUEsRUFBZTtVQUhOLENBRGM7VUFNekIsVUFBQSxFQUFZO1lBQ1YsR0FBQSxFQUFLLHVDQURLO1lBRVYsR0FBQSxFQUFLLDBEQUZLO1lBR1YsR0FBQSxFQUFLLGlHQUhLO1lBSVYsR0FBQSxFQUFLO1VBSks7UUFOYSxFQVhuQzs7UUF1QlEsTUFBQSxHQUFrQixDQUFBO1FBQ2xCLE1BQU0sQ0FBQyxPQUFQLEdBQWtCLGlCQUFBLENBQWtCLGNBQWMsQ0FBQyxPQUFqQztRQUNsQixNQUFNLENBQUMsUUFBUCxHQUFrQixDQUFBO0FBQ2xCO1FBQUEsS0FBQSxrQkFBQTs7VUFDRSxNQUFNLENBQUMsUUFBUSxDQUFFLFdBQUYsQ0FBZixHQUFpQztBQUNqQztVQUFBLEtBQUEsbUJBQUE7O1lBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBRSxXQUFGLENBQWYsR0FBaUMsTUFBTSxDQUFDLFFBQVEsQ0FBRSxXQUFGLENBQWUsQ0FBQyxVQUEvQixDQUEwQyxXQUExQyxFQUF1RCxhQUF2RDtVQURuQztRQUZGLENBMUJSOztRQStCUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBZCxDQUFKLEVBQThCLG9FQUE5QjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsTUFBTSxDQUFDLElBQVAsQ0FBWSxNQUFaO1FBQUgsQ0FBZCxDQUFKLEVBQTJDLE1BQU0sQ0FBQyxJQUFQLENBQVksd0JBQVosQ0FBM0M7QUFDQTtRQUFBLEtBQUEsV0FBQTs7VUFDRSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHO1VBQUgsQ0FBZCxDQUFKLEVBQThCLHdCQUF3QixDQUFDLE9BQU8sQ0FBRSxHQUFGLENBQTlEO1FBREY7QUFFQTtRQUFBLEtBQUEsV0FBQTs7VUFDRSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHO1VBQUgsQ0FBZCxDQUFKLEVBQThCLHdCQUF3QixDQUFDLFFBQVEsQ0FBRSxHQUFGLENBQS9EO1FBREYsQ0FuQ1I7O0FBc0NRLGVBQU87TUF2Q04sQ0FBQSxJQTNDVDs7QUFvRk0sYUFBTztJQXJGaUIsQ0FBMUI7O0lBd0ZBLDhCQUFBLEVBQWdDLFFBQUEsQ0FBQSxDQUFBO0FBQ3BDLFVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLHNCQUFBLEVBQUEsT0FBQSxFQUFBO01BQU0sU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsUUFBUSxDQUFDLGVBQW5CLENBQUEsQ0FBOUI7TUFDQSxDQUFBLENBQUUsc0JBQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsOEJBQVYsQ0FBQSxDQUE5QjtNQUNBLElBQUEsR0FBOEIsT0FBQSxDQUFRLFdBQVI7TUFDOUIsRUFBQSxHQUE4QixPQUFBLENBQVEsU0FBUjtNQUM5QixFQUFBLEdBQThCLE9BQUEsQ0FBUSxTQUFSLEVBTHBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUF1Qk0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLE9BQUEsQ0FBUSxzQkFBUjtNQUFILENBQWQsQ0FBSixFQUF1RCxVQUF2RDtNQUVHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULFlBQUEsUUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLFFBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO1FBQVEsUUFBQSxHQUFnQjtRQUNoQixHQUFBLEdBQWdCLHNCQUFBLENBQXVCLENBQUUsUUFBRixDQUF2QjtRQUNoQixRQUFBLEdBQWdCLEVBQUUsQ0FBQyxRQUFILENBQUE7UUFDaEIsSUFBQSxHQUFnQixFQUFFLENBQUMsWUFBSCxDQUFnQixFQUFFLENBQUMsT0FBSCxDQUFBLENBQWhCO1FBQ2hCLElBQUEsR0FBZ0IsRUFBRSxDQUFDLFlBQUgsQ0FBZ0IsRUFBRSxDQUFDLE1BQUgsQ0FBQSxDQUFoQixFQUp4Qjs7UUFNUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUUsTUFBTSxDQUFDLElBQVAsQ0FBWSxHQUFaLENBQUYsQ0FBbUIsQ0FBQyxJQUFwQixDQUFBO1FBQUgsQ0FBZCxDQUFKLEVBQXlELENBQUUsS0FBRixFQUFTLE1BQVQsQ0FBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUUsTUFBTSxDQUFDLElBQVAsQ0FBWSxHQUFHLENBQUMsR0FBaEIsQ0FBRixDQUF1QixDQUFDLElBQXhCLENBQUE7UUFBSCxDQUFkLENBQUosRUFBeUQsQ0FBRSxPQUFGLEVBQVcsUUFBWCxFQUFxQixNQUFyQixFQUE2QixTQUE3QixFQUF3QyxNQUF4QyxFQUFnRCxLQUFoRCxFQUF1RCxNQUF2RCxFQUErRCxjQUEvRCxFQUErRSxTQUEvRSxFQUEwRixNQUExRixDQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBRSxNQUFNLENBQUMsSUFBUCxDQUFZLEdBQUcsQ0FBQyxJQUFoQixDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBQTtRQUFILENBQWQsQ0FBSixFQUF5RCxDQUFFLE1BQUYsRUFBVSxNQUFWLEVBQWtCLE1BQWxCLENBQXpELEVBUlI7O1FBVVEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxPQUFBLENBQVEsR0FBRyxDQUFDLEdBQVo7UUFBSCxDQUFkLENBQUosRUFBeUQsS0FBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE9BQUEsQ0FBUSxHQUFHLENBQUMsSUFBWjtRQUFILENBQWQsQ0FBSixFQUF5RCxLQUF6RCxFQVhSOztRQWFRLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLFFBQUwsQ0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQXRCO1FBQUgsQ0FBZCxDQUFKLEVBQXlELFFBQXpEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsUUFBTCxDQUFjLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBdEI7UUFBSCxDQUFkLENBQUosRUFBeUQsUUFBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxRQUFMLENBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUF0QjtRQUFILENBQWQsQ0FBSixFQUF5RCxRQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUFYLENBQWQsQ0FBSixFQUF5RCxJQUFJLENBQUMsT0FBTCxDQUFhLElBQWIsRUFBbUIsUUFBbkIsRUFBNkIsY0FBN0IsRUFBNkMsTUFBN0MsQ0FBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFBWCxDQUFkLENBQUosRUFBeUQsSUFBSSxDQUFDLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLFFBQW5CLENBQXpEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsUUFBTCxDQUFjLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBdEI7UUFBSCxDQUFkLENBQUosRUFBeUQsUUFBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFBWCxDQUFkLENBQUosRUFBeUQsUUFBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFBWCxDQUFkLENBQUosRUFBeUQsSUFBSSxDQUFDLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLFFBQW5CLEVBQTZCLGNBQTdCLENBQXpEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQVgsQ0FBZCxDQUFKLEVBQXlELElBQUksQ0FBQyxPQUFMLENBQWEsSUFBYixFQUFtQixRQUFuQixFQUE2QixLQUE3QixDQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUFYLENBQWQsQ0FBSixFQUF5RCxJQUFJLENBQUMsT0FBTCxDQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBdEIsRUFBNEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFyQyxFQUEyQyxRQUEzQyxDQUF6RCxFQXRCUjs7UUF3QlEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQVosQ0FBZCxDQUFKLEVBQXlELElBQXpEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQVosQ0FBZCxDQUFKLEVBQXlELFFBQVEsQ0FBQyxRQUFsRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUFaLENBQWQsQ0FBSixFQUF5RCxJQUF6RCxFQTFCUjs7QUE0QlEsZUFBTztNQTdCTixDQUFBO01BK0JBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULFlBQUEsUUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLFFBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO1FBQVEsUUFBQSxHQUFnQjtRQUNoQixHQUFBLEdBQWdCLHNCQUFBLENBQXVCLENBQUUsUUFBRixDQUF2QjtRQUNoQixRQUFBLEdBQWdCLEVBQUUsQ0FBQyxRQUFILENBQUE7UUFDaEIsSUFBQSxHQUFnQixFQUFFLENBQUMsWUFBSCxDQUFnQixFQUFFLENBQUMsT0FBSCxDQUFBLENBQWhCO1FBQ2hCLElBQUEsR0FBZ0IsRUFBRSxDQUFDLFlBQUgsQ0FBZ0IsRUFBRSxDQUFDLE1BQUgsQ0FBQSxDQUFoQixFQUp4Qjs7UUFNUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUUsTUFBTSxDQUFDLElBQVAsQ0FBWSxHQUFaLENBQUYsQ0FBbUIsQ0FBQyxJQUFwQixDQUFBO1FBQUgsQ0FBZCxDQUFKLEVBQXlELENBQUUsS0FBRixFQUFTLE1BQVQsQ0FBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUUsTUFBTSxDQUFDLElBQVAsQ0FBWSxHQUFHLENBQUMsR0FBaEIsQ0FBRixDQUF1QixDQUFDLElBQXhCLENBQUE7UUFBSCxDQUFkLENBQUosRUFBeUQsQ0FBRSxPQUFGLEVBQVcsUUFBWCxFQUFxQixNQUFyQixFQUE2QixTQUE3QixFQUF3QyxNQUF4QyxFQUFnRCxLQUFoRCxFQUF1RCxNQUF2RCxFQUErRCxjQUEvRCxFQUErRSxTQUEvRSxFQUEwRixNQUExRixDQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBRSxNQUFNLENBQUMsSUFBUCxDQUFZLEdBQUcsQ0FBQyxJQUFoQixDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBQTtRQUFILENBQWQsQ0FBSixFQUF5RCxDQUFFLE1BQUYsRUFBVSxNQUFWLEVBQWtCLE1BQWxCLENBQXpELEVBUlI7O1FBVVEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxPQUFBLENBQVEsR0FBRyxDQUFDLEdBQVo7UUFBSCxDQUFkLENBQUosRUFBeUQsS0FBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE9BQUEsQ0FBUSxHQUFHLENBQUMsSUFBWjtRQUFILENBQWQsQ0FBSixFQUF5RCxLQUF6RCxFQVhSOztRQWFRLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLFFBQUwsQ0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQXRCO1FBQUgsQ0FBZCxDQUFKLEVBQXlELHNCQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLFFBQUwsQ0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQXRCO1FBQUgsQ0FBZCxDQUFKLEVBQXlELHNCQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLFFBQUwsQ0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQXRCO1FBQUgsQ0FBZCxDQUFKLEVBQXlELHNCQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUFYLENBQWQsQ0FBSixFQUF5RCxJQUFJLENBQUMsT0FBTCxDQUFhLElBQWIsRUFBbUIsc0JBQW5CLEVBQTJDLGNBQTNDLEVBQTJELE1BQTNELENBQXpEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQVgsQ0FBZCxDQUFKLEVBQXlELElBQUksQ0FBQyxPQUFMLENBQWEsSUFBYixFQUFtQixzQkFBbkIsQ0FBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxRQUFMLENBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUF0QjtRQUFILENBQWQsQ0FBSixFQUF5RCxzQkFBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFBWCxDQUFkLENBQUosRUFBeUQsc0JBQXpEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQVgsQ0FBZCxDQUFKLEVBQXlELElBQUksQ0FBQyxPQUFMLENBQWEsSUFBYixFQUFtQixzQkFBbkIsRUFBMkMsY0FBM0MsQ0FBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFBWCxDQUFkLENBQUosRUFBeUQsSUFBSSxDQUFDLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLHNCQUFuQixFQUEyQyxLQUEzQyxDQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUFYLENBQWQsQ0FBSixFQUF5RCxJQUFJLENBQUMsT0FBTCxDQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBdEIsRUFBNEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFyQyxFQUEyQyxzQkFBM0MsQ0FBekQsRUF0QlI7O1FBd0JRLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUFaLENBQWQsQ0FBSixFQUF5RCxJQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUFaLENBQWQsQ0FBSixFQUF5RCxRQUFRLENBQUMsUUFBbEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFBWixDQUFkLENBQUosRUFBeUQsSUFBekQsRUExQlI7O0FBNEJRLGVBQU87TUE3Qk4sQ0FBQTtNQStCQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsUUFBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBUSxRQUFBLEdBQWdCO1FBQ2hCLFFBQUEsR0FBZ0I7UUFDaEIsR0FBQSxHQUFnQixzQkFBQSxDQUF1QixDQUFFLFFBQUYsRUFBWSxRQUFaLENBQXZCO1FBQ2hCLFFBQUEsR0FBZ0IsRUFBRSxDQUFDLFFBQUgsQ0FBQTtRQUNoQixJQUFBLEdBQWdCLEVBQUUsQ0FBQyxZQUFILENBQWdCLEVBQUUsQ0FBQyxPQUFILENBQUEsQ0FBaEI7UUFDaEIsSUFBQSxHQUFnQixFQUFFLENBQUMsWUFBSCxDQUFnQixFQUFFLENBQUMsTUFBSCxDQUFBLENBQWhCLEVBTHhCOztRQU9RLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBRSxNQUFNLENBQUMsSUFBUCxDQUFZLEdBQVosQ0FBRixDQUFtQixDQUFDLElBQXBCLENBQUE7UUFBSCxDQUFkLENBQUosRUFBeUQsQ0FBRSxLQUFGLEVBQVMsTUFBVCxDQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBRSxNQUFNLENBQUMsSUFBUCxDQUFZLEdBQUcsQ0FBQyxHQUFoQixDQUFGLENBQXVCLENBQUMsSUFBeEIsQ0FBQTtRQUFILENBQWQsQ0FBSixFQUF5RCxDQUFFLE9BQUYsRUFBVyxRQUFYLEVBQXFCLE1BQXJCLEVBQTZCLFNBQTdCLEVBQXdDLE1BQXhDLEVBQWdELEtBQWhELEVBQXVELE1BQXZELEVBQStELGNBQS9ELEVBQStFLFNBQS9FLEVBQTBGLE1BQTFGLENBQXpEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFFLE1BQU0sQ0FBQyxJQUFQLENBQVksR0FBRyxDQUFDLElBQWhCLENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUFBO1FBQUgsQ0FBZCxDQUFKLEVBQXlELENBQUUsTUFBRixFQUFVLE1BQVYsRUFBa0IsTUFBbEIsQ0FBekQsRUFUUjs7UUFXUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE9BQUEsQ0FBUSxHQUFHLENBQUMsR0FBWjtRQUFILENBQWQsQ0FBSixFQUF5RCxLQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsT0FBQSxDQUFRLEdBQUcsQ0FBQyxJQUFaO1FBQUgsQ0FBZCxDQUFKLEVBQXlELEtBQXpELEVBWlI7O1FBY1EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsUUFBTCxDQUFjLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBdEI7UUFBSCxDQUFkLENBQUosRUFBeUQsUUFBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxRQUFMLENBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUF0QjtRQUFILENBQWQsQ0FBSixFQUF5RCxRQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLFFBQUwsQ0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQXRCO1FBQUgsQ0FBZCxDQUFKLEVBQXlELFFBQXpEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQVgsQ0FBZCxDQUFKLEVBQXlELElBQUksQ0FBQyxPQUFMLENBQWEsSUFBYixFQUFtQixRQUFuQixFQUE2QixRQUE3QixFQUF1QyxjQUF2QyxFQUF1RCxNQUF2RCxDQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUFYLENBQWQsQ0FBSixFQUF5RCxJQUFJLENBQUMsT0FBTCxDQUFhLElBQWIsRUFBbUIsUUFBbkIsRUFBNkIsUUFBN0IsQ0FBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxRQUFMLENBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUF0QjtRQUFILENBQWQsQ0FBSixFQUF5RCxRQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUFYLENBQWQsQ0FBSixFQUF5RCxRQUF6RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUFYLENBQWQsQ0FBSixFQUF5RCxJQUFJLENBQUMsT0FBTCxDQUFhLElBQWIsRUFBbUIsUUFBbkIsRUFBNkIsUUFBN0IsRUFBdUMsY0FBdkMsQ0FBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFBWCxDQUFkLENBQUosRUFBeUQsSUFBSSxDQUFDLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLFFBQW5CLEVBQTZCLFFBQTdCLEVBQXVDLEtBQXZDLENBQXpEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQVgsQ0FBZCxDQUFKLEVBQXlELElBQUksQ0FBQyxPQUFMLENBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUF0QixFQUE0QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQXJDLEVBQTJDLFFBQTNDLENBQXpELEVBdkJSOztRQXlCUSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFBWixDQUFkLENBQUosRUFBeUQsSUFBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFBWixDQUFkLENBQUosRUFBeUQsUUFBUSxDQUFDLFFBQWxFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQVosQ0FBZCxDQUFKLEVBQXlELElBQXpELEVBM0JSOztBQTZCUSxlQUFPO01BOUJOLENBQUEsSUF2RlQ7O0FBdUhNLGFBQU87SUF4SHVCLENBeEZoQzs7SUFtTkEsc0JBQUEsRUFBd0IsUUFBQSxDQUFBLENBQUE7QUFDNUIsVUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLE9BQUEsRUFBQSx3QkFBQSxFQUFBLGNBQUEsRUFBQSxTQUFBLEVBQUE7TUFBTSxTQUFBLEdBQThCLE9BQUEsQ0FBUSxtQ0FBUjtNQUM5QixDQUFBLENBQUUsT0FBRixDQUFBLEdBQThCLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBbkIsQ0FBQSxDQUE5QjtNQUNBLENBQUEsQ0FBRSxjQUFGLEVBQ0Usd0JBREYsRUFFRSxTQUZGLENBQUEsR0FFOEIsU0FBUyxDQUFDLHNCQUFWLENBQUEsQ0FGOUIsRUFGTjs7TUFNTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsT0FBQSxDQUFRLGNBQVI7TUFBSCxDQUFkLENBQUosRUFBMEQsbUJBQTFEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLE9BQUEsQ0FBUSx3QkFBUjtNQUFILENBQWQsQ0FBSixFQUEwRCxtQkFBMUQ7TUFFRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO1FBQVEsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxPQUFBLENBQVEsY0FBQSxDQUFlLEVBQWYsQ0FBUjtRQUFILENBQWQsQ0FBSixFQUEwRixXQUExRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsQ0FBRSxHQUFBLENBQUUsY0FBQSxDQUFlLEVBQWYsQ0FBRixDQUFGO1FBQUgsQ0FBZCxDQUFKLEVBQTBGO1VBQUU7WUFBRSxJQUFBLEVBQU07VUFBUixDQUFGO1NBQTFGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFBLENBQVUsY0FBQSxDQUEwQixZQUExQixDQUFWO1FBQUgsQ0FBZCxDQUFKLEVBQTBGLHlKQUExRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsU0FBQSxDQUFVLHdCQUFBLENBQTBCLFlBQTFCLENBQVY7UUFBSCxDQUFkLENBQUosRUFBMEYseUdBQTFGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFBLENBQVUsd0JBQUEsQ0FBMEIsS0FBMUIsQ0FBVjtRQUFILENBQWQsQ0FBSixFQUEwRixDQUFBLDhCQUFBLENBQTFGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFBLENBQVUsd0JBQUEsQ0FBMEIsS0FBMUIsQ0FBVjtRQUFILENBQWQsQ0FBSixFQUEwRixvQ0FBMUY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQUEsQ0FBVSx3QkFBQSxDQUEwQixZQUExQixDQUFWO1FBQUgsQ0FBZCxDQUFKLEVBQTBGLDZFQUExRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsU0FBQSxDQUFVLHdCQUFBLENBQTBCLGFBQTFCLENBQVY7UUFBSCxDQUFkLENBQUosRUFBMEYsaUdBQTFGO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFBLENBQVUsd0JBQUEsQ0FBMEIsWUFBMUIsQ0FBVjtRQUFILENBQWQsQ0FBSixFQUEwRixrRkFBMUY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQUEsQ0FBVSx3QkFBQSxDQUEwQixxQkFBMUIsQ0FBVjtRQUFILENBQWQsQ0FBSixFQUEwRiw0SUFBMUY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQUEsQ0FBVSx3QkFBQSxDQUEwQixlQUExQixDQUFWO1FBQUgsQ0FBZCxDQUFKLEVBQTBGLDJFQUExRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsU0FBQSxDQUFVLHdCQUFBLENBQTBCLDJCQUExQixDQUFWO1FBQUgsQ0FBZCxDQUFKLEVBQTBGLDJFQUExRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsU0FBQSxDQUFVLHdCQUFBLENBQTBCLDRCQUExQixDQUFWO1FBQUgsQ0FBZCxDQUFKLEVBQTBGLDJGQUExRixFQVpSOzs7Ozs7UUFrQlEsTUFBQSxHQUFTO1FBQ1QsS0FBQSx5Q0FBQTtVQUNFLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsS0FBSyxDQUFDLElBQVQsQ0FBQSxPQUFBLENBQUEsQ0FBdUIsR0FBQSxDQUFJLEtBQUssQ0FBQyxLQUFWLENBQXZCLENBQUEsQ0FBbkI7UUFERjtRQUVBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsU0FBQSxDQUFVLHdCQUFBLENBQXlCLE1BQXpCLENBQVY7UUFBSCxDQUFkLENBQUosRUFBa0Usb09BQWxFLEVBckJSOztBQXVCUSxlQUFPO01BeEJOLENBQUEsSUFUVDs7QUFtQ00sYUFBTztJQXBDZSxDQW5OeEI7O0lBMFBBLGdDQUFBLEVBQWtDLFFBQUEsQ0FBQSxDQUFBO0FBQ3RDLFVBQUEsRUFBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLE9BQUEsRUFBQSx3QkFBQSxFQUFBLGNBQUEsRUFBQSx1QkFBQSxFQUFBO01BQU0sU0FBQSxHQUFnQyxPQUFBLENBQVEsbUNBQVI7TUFDaEMsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUFnQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQW5CLENBQUEsQ0FBaEM7TUFDQSxDQUFBLENBQUUsdUJBQUYsQ0FBQSxHQUFnQyxTQUFTLENBQUMsZ0NBQVYsQ0FBQSxDQUFoQztNQUNBLENBQUEsQ0FBRSxjQUFGLEVBQ0Usd0JBREYsRUFFRSxTQUZGLENBQUEsR0FFZ0MsU0FBUyxDQUFDLHNCQUFWLENBQUEsQ0FGaEM7TUFHQSxJQUFBLEdBQWdDLE9BQUEsQ0FBUSxXQUFSO01BQ2hDLEVBQUEsR0FBZ0MsT0FBQSxDQUFRLFNBQVIsRUFQdEM7O01BU00sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLE9BQUEsQ0FBUSx1QkFBUjtNQUFILENBQWQsQ0FBSixFQUF3RCxVQUF4RDtNQUVHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULFlBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLEVBQUEsWUFBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO1FBQVEsSUFBQSxHQUFnQixJQUFJLENBQUMsT0FBTCxDQUFhLFNBQWIsRUFBd0IsbUVBQXhCO1FBQ2hCLFlBQUEsR0FBZ0I7UUFDaEIsTUFBQSxHQUFrQixFQUFFLENBQUMsWUFBSCxDQUFnQixJQUFoQixFQUFzQjtVQUFFLFFBQUEsRUFBVTtRQUFaLENBQXRCLEVBRjFCOzs7UUFLUSxNQUFBLEdBQWdCLHVCQUFBLENBQXdCO1VBQUUsSUFBQSxFQUFNLFlBQVI7VUFBc0I7UUFBdEIsQ0FBeEI7UUFDaEIsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxNQUFNLENBQUMsSUFBUCxDQUFBLENBQWEsQ0FBQztRQUFqQixDQUFkLENBQUosRUFBNEM7VUFBRSxJQUFBLEVBQU0sU0FBUjtVQUFtQixPQUFBLEVBQVMsQ0FBNUI7VUFBK0IsV0FBQSxFQUFhLEtBQTVDO1VBQW1ELFFBQUEsRUFBVSxLQUE3RDtVQUFvRSxVQUFBLEVBQVk7UUFBaEYsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQU0sQ0FBQyxJQUFQLENBQUEsQ0FBYSxDQUFDO1FBQWpCLENBQWQsQ0FBSixFQUE0QztVQUFFLElBQUEsRUFBTSxTQUFSO1VBQW1CLE9BQUEsRUFBUyxFQUE1QjtVQUFnQyxXQUFBLEVBQWEsUUFBN0M7VUFBdUQsUUFBQSxFQUFVLDJCQUFqRTtVQUE4RixVQUFBLEVBQVk7UUFBMUcsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQU0sQ0FBQyxJQUFQLENBQUEsQ0FBYSxDQUFDO1FBQWpCLENBQWQsQ0FBSixFQUE0QztVQUFFLElBQUEsRUFBTSxTQUFSO1VBQW1CLE9BQUEsRUFBUyxFQUE1QjtVQUFnQyxXQUFBLEVBQWEsUUFBN0M7VUFBdUQsUUFBQSxFQUFVLHlCQUFqRTtVQUE0RixVQUFBLEVBQVk7UUFBeEcsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQU0sQ0FBQyxJQUFQLENBQUEsQ0FBYSxDQUFDO1FBQWpCLENBQWQsQ0FBSixFQUE0QztVQUFFLElBQUEsRUFBTSxTQUFSO1VBQW1CLE9BQUEsRUFBUyxFQUE1QjtVQUFnQyxXQUFBLEVBQWEsUUFBN0M7VUFBdUQsUUFBQSxFQUFVLG1DQUFqRTtVQUFzRyxVQUFBLEVBQVk7UUFBbEgsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQU0sQ0FBQyxJQUFQLENBQUEsQ0FBYSxDQUFDO1FBQWpCLENBQWQsQ0FBSixFQUE0QztVQUFFLElBQUEsRUFBTSxTQUFSO1VBQW1CLE9BQUEsRUFBUyxHQUE1QjtVQUFpQyxXQUFBLEVBQWEsUUFBOUM7VUFBd0QsUUFBQSxFQUFVLG1DQUFsRTtVQUF1RyxVQUFBLEVBQVk7UUFBbkgsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQU0sQ0FBQyxJQUFQLENBQUEsQ0FBYSxDQUFDO1FBQWpCLENBQWQsQ0FBSixFQUE0QztVQUFFLElBQUEsRUFBTSxTQUFSO1VBQW1CLE9BQUEsRUFBUyxHQUE1QjtVQUFpQyxXQUFBLEVBQWEsTUFBOUM7VUFBc0QsUUFBQSxFQUFVLFdBQWhFO1VBQTZFLFVBQUEsRUFBWTtRQUF6RixDQUE1QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsTUFBTSxDQUFDLElBQVAsQ0FBQSxDQUFhLENBQUM7UUFBakIsQ0FBZCxDQUFKLEVBQTRDO1VBQUUsSUFBQSxFQUFNLFNBQVI7VUFBbUIsT0FBQSxFQUFTLEdBQTVCO1VBQWlDLFdBQUEsRUFBYSxNQUE5QztVQUFzRCxRQUFBLEVBQVUsU0FBaEU7VUFBMkUsVUFBQSxFQUFZO1FBQXZGLENBQTVDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxNQUFNLENBQUMsSUFBUCxDQUFBLENBQWEsQ0FBQztRQUFqQixDQUFkLENBQUosRUFBNEM7VUFBRSxJQUFBLEVBQU0sU0FBUjtVQUFtQixPQUFBLEVBQVMsR0FBNUI7VUFBaUMsV0FBQSxFQUFhLE1BQTlDO1VBQXNELFFBQUEsRUFBVSxTQUFoRTtVQUEyRSxVQUFBLEVBQVk7UUFBdkYsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQU0sQ0FBQyxJQUFQLENBQUEsQ0FBYSxDQUFDO1FBQWpCLENBQWQsQ0FBSixFQUE0QztVQUFFLElBQUEsRUFBTSxTQUFSO1VBQW1CLE9BQUEsRUFBUyxHQUE1QjtVQUFpQyxXQUFBLEVBQWEsUUFBOUM7VUFBd0QsUUFBQSxFQUFVLG1DQUFsRTtVQUF1RyxVQUFBLEVBQVk7UUFBbkgsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQU0sQ0FBQyxJQUFQLENBQUEsQ0FBYSxDQUFDO1FBQWpCLENBQWQsQ0FBSixFQUE0QztVQUFFLElBQUEsRUFBTSxTQUFSO1VBQW1CLE9BQUEsRUFBUyxHQUE1QjtVQUFpQyxXQUFBLEVBQWEsTUFBOUM7VUFBc0QsUUFBQSxFQUFVLFNBQWhFO1VBQTJFLFVBQUEsRUFBWTtRQUF2RixDQUE1QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsTUFBTSxDQUFDLElBQVAsQ0FBQSxDQUFhLENBQUM7UUFBakIsQ0FBZCxDQUFKLEVBQTRDO1VBQUUsSUFBQSxFQUFNLFNBQVI7VUFBbUIsT0FBQSxFQUFTLEdBQTVCO1VBQWlDLFdBQUEsRUFBYSxRQUE5QztVQUF3RCxRQUFBLEVBQVUsbUNBQWxFO1VBQXVHLFVBQUEsRUFBWTtRQUFuSCxDQUE1QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsTUFBTSxDQUFDLElBQVAsQ0FBQSxDQUFhLENBQUM7UUFBakIsQ0FBZCxDQUFKLEVBQTRDO1VBQUUsSUFBQSxFQUFNLFNBQVI7VUFBbUIsT0FBQSxFQUFTLDZEQUE1QjtVQUEyRixJQUFBLEVBQU0sa0JBQWpHO1VBQXFILE9BQUEsRUFBUztRQUE5SCxDQUE1QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsTUFBTSxDQUFDLElBQVAsQ0FBQSxDQUFhLENBQUM7UUFBakIsQ0FBZCxDQUFKLEVBQTRDO1VBQUUsSUFBQSxFQUFNLFNBQVI7VUFBbUIsT0FBQSxFQUFTLG1FQUE1QjtVQUFpRyxJQUFBLEVBQU0sd0JBQXZHO1VBQWlJLE9BQUEsRUFBUztRQUExSSxDQUE1QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsTUFBTSxDQUFDLElBQVAsQ0FBQSxDQUFhLENBQUM7UUFBakIsQ0FBZCxDQUFKLEVBQTRDO1VBQUUsSUFBQSxFQUFNLFNBQVI7VUFBbUIsT0FBQSxFQUFTLEdBQTVCO1VBQWlDLFdBQUEsRUFBYSxLQUE5QztVQUFxRCxRQUFBLEVBQVUsT0FBL0Q7VUFBd0UsVUFBQSxFQUFZO1FBQXBGLENBQTVDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxNQUFNLENBQUMsSUFBUCxDQUFBLENBQWEsQ0FBQztRQUFqQixDQUFkLENBQUosRUFBNEM7VUFBRSxJQUFBLEVBQU0sU0FBUjtVQUFtQixPQUFBLEVBQVMsR0FBNUI7VUFBaUMsV0FBQSxFQUFhLEtBQTlDO1VBQXFELFFBQUEsRUFBVSxPQUEvRDtVQUF3RSxVQUFBLEVBQVk7UUFBcEYsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQU0sQ0FBQyxJQUFQLENBQUEsQ0FBYSxDQUFDO1FBQWpCLENBQWQsQ0FBSixFQUE0QztVQUFFLElBQUEsRUFBTSxTQUFSO1VBQW1CLE9BQUEsRUFBUyw4RkFBNUI7VUFBNEgsSUFBQSxFQUFNLCtDQUFsSTtVQUFtTCxPQUFBLEVBQVM7UUFBNUwsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQU0sQ0FBQyxJQUFQLENBQUEsQ0FBYSxDQUFDO1FBQWpCLENBQWQsQ0FBSixFQUE0QztVQUFFLElBQUEsRUFBTSxTQUFSO1VBQW1CLE9BQUEsRUFBUyxHQUE1QjtVQUFpQyxXQUFBLEVBQWEsUUFBOUM7VUFBd0QsUUFBQSxFQUFVLG1DQUFsRTtVQUF1RyxVQUFBLEVBQVk7UUFBbkgsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQU0sQ0FBQyxJQUFQLENBQUEsQ0FBYSxDQUFDO1FBQWpCLENBQWQsQ0FBSixFQUE0QztVQUFFLElBQUEsRUFBTSxTQUFSO1VBQW1CLE9BQUEsRUFBUyw2RUFBNUI7VUFBMkcsSUFBQSxFQUFNLGtDQUFqSDtVQUFxSixPQUFBLEVBQVM7UUFBOUosQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE1BQU0sQ0FBQyxJQUFQLENBQUEsQ0FBYSxDQUFDO1FBQWpCLENBQWQsQ0FBSixFQUE0QztVQUFFLElBQUEsRUFBTSxTQUFSO1VBQW1CLE9BQUEsRUFBUyxHQUE1QjtVQUFpQyxXQUFBLEVBQWEsU0FBOUM7VUFBeUQsUUFBQSxFQUFVLHNCQUFuRTtVQUEyRixVQUFBLEVBQVk7UUFBdkcsQ0FBNUMsRUF4QlI7O0FBMEJRLGVBQU87TUEzQk4sQ0FBQTtNQTZCQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLENBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7UUFDUSxPQUFBLENBQVEsdUNBQVI7UUFDQSxLQUFBOztVQUFBO1VBQ0UsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBbEI7UUFERixDQUZSOztRQUtRLE9BQUEsQ0FBUSx1Q0FBUjtRQUNBLEtBQUE7O1VBQUE7VUFDRSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFsQjtRQURGLENBTlI7O1FBU1EsT0FBQSxDQUFRLHVDQUFSO1FBQ0EsS0FBQSwyREFBQTtVQUNFLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEtBQWxCO1FBREYsQ0FWUjs7UUFhUSxPQUFBLENBQVEsdUNBQVI7QUFDQTtRQUFBLEtBQUE7O1VBQUE7dUJBQ0UsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBbEI7UUFERixDQUFBOztNQWZDLENBQUEsSUF4Q1Q7O0FBMERNLGFBQU87SUEzRHlCLENBMVBsQzs7SUF3VEEsa0JBQUEsRUFBb0IsUUFBQSxDQUFBLENBQUE7QUFDeEIsVUFBQSxTQUFBLEVBQUEsVUFBQSxFQUFBLE9BQUEsRUFBQTtNQUFNLFNBQUEsR0FBOEIsT0FBQSxDQUFRLG1DQUFSO01BQzlCLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBOEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQTlCO01BQ0EsQ0FBQSxDQUFFLFVBQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsa0JBQVYsQ0FBQSxDQUE5QixFQUZOOztNQUlNLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxPQUFBLENBQVEsVUFBUjtNQUFILENBQWQsQ0FBSixFQUEyQyxVQUEzQztNQUVHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULFlBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtRQUFRLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBQSxDQUFXLEVBQVg7UUFBSCxDQUFkLENBQUosRUFBNEMsQ0FBQSxFQUFBLENBQTVDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxVQUFBLENBQVcsR0FBWDtRQUFILENBQWQsQ0FBSixFQUE0QyxDQUFBLEdBQUEsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQUEsQ0FBVyxHQUFYO1FBQUgsQ0FBZCxDQUFKLEVBQTRDLENBQUEsS0FBQSxDQUE1QztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBQSxDQUFXLEtBQVg7UUFBSCxDQUFkLENBQUosRUFBNEMsQ0FBQSxLQUFBLENBQTVDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxVQUFBLENBQVcsT0FBWDtRQUFILENBQWQsQ0FBSixFQUE0QyxDQUFBLE9BQUEsQ0FBNUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQUEsQ0FBVyxPQUFYO1FBQUgsQ0FBZCxDQUFKLEVBQTRDLENBQUEsV0FBQSxDQUE1QyxFQUxSOztBQU9RLGVBQU87TUFSTixDQUFBLElBTlQ7O0FBZ0JNLGFBQU87SUFqQlcsQ0F4VHBCOztJQTRVQSxrQkFBQSxFQUFvQixRQUFBLENBQUEsQ0FBQTtBQUN4QixVQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsT0FBQSxFQUFBO01BQU0sU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsUUFBUSxDQUFDLGVBQW5CLENBQUEsQ0FBOUI7TUFDQSxDQUFBLENBQUUsU0FBRixDQUFBLEdBQThCLFNBQVMsQ0FBQyxrQkFBVixDQUFBLENBQTlCLEVBRk47O01BSU0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLE9BQUEsQ0FBUSxTQUFSO01BQUgsQ0FBZCxDQUFKLEVBQTBDLFVBQTFDO01BRUcsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1QsWUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBUSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQUEsQ0FBVSxpQkFBVixFQUFtQyxHQUFuQztRQUFILENBQWQsQ0FBUixFQUFtRixxQ0FBbkY7UUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQUEsQ0FBVSxpQkFBVixFQUFtQyxLQUFuQztRQUFILENBQWQsQ0FBUixFQUFtRixxQ0FBbkY7UUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQUEsQ0FBVSxpQkFBVixFQUFtQyxpQkFBbkM7UUFBSCxDQUFkLENBQVIsRUFBbUYscUNBQW5GO1FBQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFBLENBQVUsY0FBVixFQUFtQyxpQkFBbkM7UUFBSCxDQUFkLENBQVIsRUFBbUYscUNBQW5GLEVBSFI7O1FBS1EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFBLENBQVUsR0FBVixFQUFtQyxlQUFuQztRQUFILENBQWQsQ0FBUixFQUFtRixJQUFuRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsU0FBQSxDQUFVLGVBQVYsRUFBbUMsZUFBbkM7UUFBSCxDQUFkLENBQVIsRUFBbUYsSUFBbkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQUEsQ0FBVSxlQUFWLEVBQW1DLE1BQW5DO1FBQUgsQ0FBZCxDQUFSLEVBQW1GLElBQW5GO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFBLENBQVUsZUFBVixFQUFtQyxPQUFuQztRQUFILENBQWQsQ0FBUixFQUFtRixJQUFuRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsU0FBQSxDQUFVLGlCQUFWLEVBQW1DLE9BQW5DO1FBQUgsQ0FBZCxDQUFSLEVBQW1GLElBQW5GO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFBLENBQVUsdUJBQVYsRUFBbUMsT0FBbkM7UUFBSCxDQUFkLENBQVIsRUFBbUYsSUFBbkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQUEsQ0FBVSxlQUFWLEVBQW1DLFdBQW5DO1FBQUgsQ0FBZCxDQUFSLEVBQW1GLElBQW5GO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFBLENBQVUsZUFBVixFQUFtQyxXQUFuQztRQUFILENBQWQsQ0FBUixFQUFtRixJQUFuRixFQVpSOztRQWNRLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsU0FBQSxDQUFVLG1CQUFWLEVBQW1DLGVBQW5DO1FBQUgsQ0FBZCxDQUFSLEVBQW1GLEtBQW5GO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFBLENBQVUsZUFBVixFQUFtQyxTQUFuQztRQUFILENBQWQsQ0FBUixFQUFtRixLQUFuRjtRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsU0FBQSxDQUFVLGVBQVYsRUFBbUMsT0FBbkM7UUFBSCxDQUFkLENBQVIsRUFBbUYsS0FBbkY7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFNBQUEsQ0FBVSxlQUFWLEVBQW1DLEdBQW5DO1FBQUgsQ0FBZCxDQUFSLEVBQW1GLEtBQW5GO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxTQUFBLENBQVUsZUFBVixFQUFtQyxPQUFuQztRQUFILENBQWQsQ0FBUixFQUFtRixLQUFuRixFQWxCUjs7QUFvQlEsZUFBTztNQXJCTixDQUFBLElBTlQ7O0FBNkJNLGFBQU87SUE5QlcsQ0E1VXBCOztJQTZXQSxpQkFBQSxFQUFtQixRQUFBLENBQUEsQ0FBQTtBQUN2QixVQUFBLENBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxPQUFBLEVBQUEsU0FBQSxFQUFBO01BQU0sU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsUUFBUSxDQUFDLGVBQW5CLENBQUEsQ0FBOUI7TUFDQSxDQUFBLENBQUUsU0FBRixFQUNFLENBREYsRUFFRSxTQUZGLENBQUEsR0FFOEIsU0FBUyxDQUFDLGlCQUFWLENBQUEsQ0FGOUIsRUFGTjs7TUFNTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsT0FBQSxDQUFVLElBQUksU0FBSixDQUFBLENBQVY7TUFBSCxDQUFkLENBQUosRUFBaUUsUUFBakU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsT0FBQSxDQUFRLENBQUUsSUFBSSxTQUFKLENBQUEsQ0FBRixDQUFtQixDQUFDLElBQXBCLENBQXlCLE1BQXpCLENBQVI7TUFBSCxDQUFkLENBQUosRUFBaUUsV0FBakU7TUFFRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLEVBQUEsRUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxRQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsT0FBQSxFQUFBO1FBQVEsS0FBQSxHQUFZLE1BQUEsQ0FBTyxPQUFQO1FBQ1osSUFBQSxHQUFZLE1BQUEsQ0FBTyxNQUFQO1FBQ1osR0FBQSxHQUFTLElBQUksU0FBSixDQUFBLEVBRmpCOztRQUlRLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxPQUFBLEdBQVUsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBWixDQUFKLEVBQXVFLENBQXZFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLE9BQUEsR0FBVSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFaLENBQUosRUFBdUUsSUFBdkUsRUFMUjs7UUFPUSxTQUFBLEdBQVk7UUFDWixTQUFBLEdBQVk7UUFDWixTQUFBLEdBQVk7UUFDWixTQUFBLEdBQVk7UUFDWixHQUFHLENBQUMsSUFBSixDQUFTLEtBQUEsR0FBUSxRQUFBLENBQUUsQ0FBRixDQUFBO1VBQXNCLElBQUEsQ0FBSyxTQUFMLEVBQWdCLEdBQUEsQ0FBSSxDQUFKLENBQWhCO2lCQUF1QixTQUFTLENBQUMsSUFBVixDQUFlLENBQWY7UUFBN0MsQ0FBakI7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLEtBQUEsR0FBUSxTQUFBLENBQUUsQ0FBRixDQUFBO2lCQUFzQixDQUFBLE1BQU0sQ0FBQyxDQUFDLFdBQUYsQ0FBQSxDQUFOO1FBQXRCLENBQWpCO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxLQUFBLEdBQVEsUUFBQSxDQUFFLENBQUYsQ0FBQTtVQUFzQixJQUFBLENBQUssU0FBTCxFQUFnQixHQUFBLENBQUksQ0FBSixDQUFoQjtpQkFBdUIsU0FBUyxDQUFDLElBQVYsQ0FBZSxDQUFmO1FBQTdDLENBQWpCO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxFQUFBLEdBQVEsU0FBQSxDQUFFLENBQUYsRUFBSyxPQUFPLEdBQVosQ0FBQTtpQkFBc0IsQ0FBQSxNQUFNLENBQUEsR0FBSSxJQUFWO1FBQXRCLENBQWpCO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxLQUFBLEdBQVEsUUFBQSxDQUFFLENBQUYsQ0FBQTtVQUFzQixJQUFBLENBQUssU0FBTCxFQUFnQixHQUFBLENBQUksQ0FBSixDQUFoQjtpQkFBdUIsU0FBUyxDQUFDLElBQVYsQ0FBZSxDQUFmO1FBQTdDLENBQWpCO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxDQUFBLENBQUUsQ0FBRSxLQUFGLEVBQVMsSUFBVCxDQUFGLEVBQW9CLFFBQUEsR0FBVyxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQ3RDLElBQXFDLENBQUEsS0FBSyxLQUExQztBQUFBLG1CQUFPLENBQUEsTUFBTSxDQUFBLGFBQUEsQ0FBTixFQUFQOztVQUNBLElBQXFDLENBQUEsS0FBSyxJQUExQztBQUFBLG1CQUFPLENBQUEsTUFBTSxJQUFOLEVBQVA7O2lCQUNBLENBQUEsTUFBTSxDQUFOO1FBSHNDLENBQS9CLENBQVQ7UUFJQSxHQUFHLENBQUMsSUFBSixDQUFTLEtBQUEsR0FBUSxRQUFBLENBQUUsQ0FBRixDQUFBO1VBQXNCLElBQUEsQ0FBSyxTQUFMLEVBQWdCLEdBQUEsQ0FBSSxDQUFKLENBQWhCO2lCQUF1QixTQUFTLENBQUMsSUFBVixDQUFlLENBQWY7UUFBN0MsQ0FBakIsRUFwQlI7O1FBc0JRLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxPQUFBLEdBQVUsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDO1FBQVAsQ0FBWixDQUFKLEVBQTRFLENBQTVFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLE9BQUEsR0FBVSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUM7UUFBUCxDQUFaLENBQUosRUFBNEUsS0FBNUU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsT0FBQSxHQUFVLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTtpQkFBQztZQUFFLEdBQUE7O0FBQUU7Y0FBQSxLQUFBLHlCQUFBOzZCQUFBO2NBQUEsQ0FBQTs7Z0JBQUYsQ0FBRjs7UUFBSCxDQUFaLENBQUosRUFBNEUsQ0FBRSxDQUFBLGFBQUEsQ0FBRixFQUF1QixXQUF2QixFQUFvQyxJQUFwQyxDQUE1RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxPQUFBLEdBQVUsUUFBQSxDQUFBLENBQUE7aUJBQUc7UUFBSCxDQUFaLENBQUosRUFBK0UsQ0FBRSxVQUFGLENBQS9FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLE9BQUEsR0FBVSxRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFILENBQVosQ0FBSixFQUErRSxDQUFFLFVBQUYsQ0FBL0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsT0FBQSxHQUFVLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBWixDQUFKLEVBQStFLENBQUUsV0FBRixDQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxPQUFBLEdBQVUsUUFBQSxDQUFBLENBQUE7aUJBQUc7UUFBSCxDQUFaLENBQUosRUFBK0UsQ0FBRSxDQUFBLGFBQUEsQ0FBRixFQUF1QixXQUF2QixFQUFvQyxJQUFwQyxDQUEvRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxPQUFBLEdBQVUsUUFBQSxDQUFBLENBQUE7QUFBRSxjQUFBO2lCQUFDO1lBQUUsR0FBQTs7QUFBRTtjQUFBLEtBQUEseUJBQUE7NkJBQUE7Y0FBQSxDQUFBOztnQkFBRixDQUFGO1dBQTRDLENBQUMsSUFBN0MsQ0FBa0QsRUFBbEQ7UUFBSCxDQUFaLENBQUosRUFBNEUsQ0FBQSx1QkFBQSxDQUE1RTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxPQUFBLEdBQVUsUUFBQSxDQUFBLENBQUE7QUFBRSxjQUFBO2lCQUFDOztBQUFJO1lBQUEsS0FBQSx3QkFBQTsyQkFBQTtZQUFBLENBQUE7O2NBQUosQ0FBNEMsQ0FBQyxJQUE3QyxDQUFrRCxFQUFsRDtRQUFILENBQVosQ0FBSixFQUE0RSxDQUFBLHVCQUFBLENBQTVFO0FBQ0EsZUFBTztNQWhDTixDQUFBO01Ba0NBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULFlBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQTtRQUFRLEdBQUEsR0FBUyxJQUFJLFNBQUosQ0FBQSxFQUFqQjs7UUFFUSxHQUFHLENBQUMsSUFBSixDQUFTLEtBQUEsR0FBUSxTQUFBLENBQUUsQ0FBRixDQUFBO2lCQUFTLENBQUEsTUFBTSxDQUFBLEdBQUksQ0FBVjtRQUFULENBQWpCO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxLQUFBLEdBQVEsU0FBQSxDQUFFLENBQUYsQ0FBQTtpQkFBUyxDQUFBLE1BQU0sQ0FBQSxHQUFJLENBQVY7UUFBVCxDQUFqQjtRQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsS0FBQSxHQUFRLFNBQUEsQ0FBRSxDQUFGLENBQUE7aUJBQVMsQ0FBQSxNQUFNLENBQUEsR0FBSSxDQUFWO1FBQVQsQ0FBakI7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLEtBQUEsR0FBUSxTQUFBLENBQUUsQ0FBRixDQUFBO2lCQUFTLENBQUEsTUFBTSxDQUFBLEdBQUksQ0FBVjtRQUFULENBQWpCO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxLQUFBLEdBQVEsU0FBQSxDQUFFLENBQUYsQ0FBQTtpQkFBUyxDQUFBLE1BQU0sQ0FBQSxHQUFJLENBQVY7UUFBVCxDQUFqQixFQU5SOztRQVFRLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxPQUFBLEdBQVUsUUFBQSxDQUFBLENBQUE7QUFBRSxjQUFBO2lCQUFDO1lBQUUsR0FBQTs7QUFBRTtjQUFBLEtBQUEsZ0JBQUE7NkJBQUE7Y0FBQSxDQUFBOztnQkFBRixDQUFGOztRQUFILENBQVosQ0FBSixFQUFtRSxDQUFFLENBQUYsQ0FBbkU7QUFDQSxlQUFPO01BVk4sQ0FBQTtNQVlBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULFlBQUEsT0FBQSxFQUFBLE9BQUE7O1FBQ1EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLE9BQUEsR0FBVSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFFLEdBQUEsQ0FBRSxDQUFFLElBQUksU0FBSixDQUFBLENBQUYsQ0FBbUIsQ0FBQyxJQUFwQixDQUF5QixNQUF6QixDQUFGLENBQUY7UUFBSCxDQUFaLENBQUosRUFBbUUsQ0FBRSxNQUFGLENBQW5FO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLE9BQUEsR0FBVSxRQUFBLENBQUEsQ0FBQTtpQkFBTyxDQUFFLElBQUksU0FBSixDQUFBLENBQUYsQ0FBbUIsQ0FBQyxHQUFwQixDQUF5QixNQUF6QjtRQUFQLENBQVosQ0FBSixFQUFtRSxDQUFFLE1BQUYsQ0FBbkU7QUFDQSxlQUFPO01BSk4sQ0FBQTtNQU1BLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNULFlBQUEsU0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUE7UUFBUSxTQUFBLEdBQVksR0FBcEI7O1FBRVEsR0FBQSxHQUFNLElBQUksU0FBSixDQUFBO1FBQ04sR0FBRyxDQUFDLElBQUosQ0FBUyxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsU0FBUyxDQUFDLElBQVYsQ0FBZSxPQUFmO2lCQUF3QixDQUFBLE1BQU0sQ0FBQSxHQUFJLE1BQVY7UUFBakMsQ0FBVDtRQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsU0FBQSxDQUFFLENBQUYsQ0FBQTtVQUFTLFNBQVMsQ0FBQyxJQUFWLENBQWUsT0FBZjtpQkFBd0IsQ0FBQSxNQUFNLENBQUEsR0FBSSxNQUFWO1FBQWpDLENBQVQsRUFKUjs7UUFNUSxHQUFBLEdBQU0sSUFBSSxTQUFKLENBQUE7UUFDTixHQUFHLENBQUMsSUFBSixDQUFTLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxTQUFTLENBQUMsSUFBVixDQUFlLE9BQWY7aUJBQXdCLENBQUEsTUFBTSxDQUFBLEdBQUksTUFBVjtRQUFqQyxDQUFUO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxHQUFUO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxTQUFBLENBQUUsQ0FBRixDQUFBO1VBQVMsU0FBUyxDQUFDLElBQVYsQ0FBZSxPQUFmO2lCQUF3QixDQUFBLE1BQU0sQ0FBQSxHQUFJLE1BQVY7UUFBakMsQ0FBVCxFQVRSOztRQVdRLEdBQUEsR0FBTSxJQUFJLFNBQUosQ0FBQTtRQUNOLEdBQUcsQ0FBQyxJQUFKLENBQVMsU0FBQSxDQUFFLENBQUYsQ0FBQTtVQUFTLFNBQVMsQ0FBQyxJQUFWLENBQWUsT0FBZjtpQkFBd0IsQ0FBQSxNQUFNLENBQUEsR0FBSSxNQUFWO1FBQWpDLENBQVQ7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLEdBQVQ7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFBUyxTQUFTLENBQUMsSUFBVixDQUFlLE9BQWY7aUJBQXdCLENBQUEsTUFBTSxDQUFBLEdBQUksTUFBVjtRQUFqQyxDQUFUO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLE9BQUEsR0FBVSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsR0FBSixDQUFlLFNBQWY7UUFBSCxDQUFaLENBQUosRUFBK0MsQ0FBRSxpQ0FBRixDQUEvQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxPQUFBLEdBQVUsUUFBQSxDQUFBLENBQUE7aUJBQUc7UUFBSCxDQUFaLENBQUosRUFBK0MsQ0FBRSxPQUFGLEVBQVcsT0FBWCxFQUFvQixPQUFwQixFQUE2QixPQUE3QixFQUFzQyxPQUF0QyxFQUErQyxPQUEvQyxDQUEvQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxPQUFBLEdBQVUsUUFBQSxDQUFBLENBQUE7aUJBQUcsR0FBRyxDQUFDLFNBQUosQ0FBZSxTQUFmO1FBQUgsQ0FBWixDQUFKLEVBQStDLGlDQUEvQztBQUNBLGVBQU87TUFuQk4sQ0FBQTtNQXFCQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxXQUFBLEVBQUEsV0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBUSxLQUFBLEdBQWdCLE1BQUEsQ0FBTyxPQUFQO1FBQ2hCLElBQUEsR0FBZ0IsTUFBQSxDQUFPLE1BQVA7UUFDaEIsR0FBQSxHQUFhLElBQUksU0FBSixDQUFBO1FBQ2IsQ0FBQSxHQUFnQixTQUFBLENBQUUsQ0FBRixDQUFBO1VBQ2QsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBbEI7VUFDQSxJQUF1QyxDQUFBLEtBQUssS0FBNUM7WUFBQSxJQUFBLENBQUssV0FBTCxFQUFrQixpQkFBbEIsRUFBQTs7VUFDQSxJQUFXLENBQUEsS0FBSyxLQUFoQjtZQUFBLE1BQU0sRUFBTjs7VUFDQSxJQUEwQyxNQUFPLFNBQVAsTUFBYyxJQUF4RDtZQUFBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLGdCQUFsQixFQUFBOztVQUNBLElBQW1CLE1BQU8sU0FBUCxNQUFjLElBQWpDO1lBQUEsTUFBTSxDQUFBLEdBQUksRUFBVjs7VUFDQSxJQUFzQyxDQUFBLEtBQUssSUFBM0M7WUFBQSxJQUFBLENBQUssV0FBTCxFQUFrQixnQkFBbEIsRUFBQTs7VUFDQSxJQUFXLENBQUEsS0FBSyxJQUFoQjttQkFBQSxDQUFBLE1BQU0sQ0FBTixFQUFBOztRQVBjO1FBUWhCLFdBQUEsR0FBZ0IsQ0FBQSxDQUFFLENBQUUsS0FBRixDQUFGLEVBQWUsQ0FBZjtRQUNoQixXQUFBLEdBQWdCLENBQUEsQ0FBRSxDQUFFLElBQUYsQ0FBRixFQUFlLENBQWY7UUFDaEIsR0FBRyxDQUFDLElBQUosQ0FBUyxXQUFUO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxXQUFUO1FBQ0EsS0FBQSxDQUFNLFdBQU4sRUFBbUIsR0FBbkI7UUFDQSxPQUFBLENBQVEsV0FBUixFQUFxQix1Q0FBckI7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFdBQVcsQ0FBRSxTQUFTLENBQUMsR0FBWjtRQUFkLENBQWQsQ0FBSixFQUFxRCxDQUFFLEtBQUYsQ0FBckQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFdBQVcsQ0FBRSxTQUFTLENBQUMsR0FBWjtRQUFkLENBQWQsQ0FBSixFQUFxRCxDQUFFLElBQUYsQ0FBckQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFKLENBQVEsRUFBUjtRQUFILENBQWQsQ0FBSixFQUFrRCxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsRUFBUixFQUFZLENBQVosQ0FBbEQ7UUFDQSxPQUFBLENBQVEsV0FBUixFQUFxQix1Q0FBckI7QUFDQSxlQUFPO01BdEJOLENBQUE7TUF3QkEsQ0FBQSxDQUFBLENBQUcsbURBQUgsR0FBQSxFQUFBO0FBQ1QsWUFBQSxLQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFdBQUEsRUFBQSxXQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtRQUFRLEtBQUEsR0FBZ0IsTUFBQSxDQUFPLE9BQVA7UUFDaEIsSUFBQSxHQUFnQixNQUFBLENBQU8sTUFBUDtRQUNoQixHQUFBLEdBQWEsSUFBSSxTQUFKLENBQUE7UUFDYixFQUFBLEdBQWdCLFNBQUEsQ0FBRSxDQUFGLENBQUE7VUFDZCxJQUFBLENBQUssY0FBTCxFQUFxQixDQUFyQjtVQUNBLElBQTBDLENBQUEsS0FBSyxLQUEvQztZQUFBLElBQUEsQ0FBSyxjQUFMLEVBQXFCLGlCQUFyQixFQUFBOztVQUNBLElBQVcsQ0FBQSxLQUFLLEtBQWhCO1lBQUEsTUFBTSxFQUFOOztVQUNBLElBQTZDLE1BQU8sU0FBUCxNQUFjLElBQTNEO1lBQUEsSUFBQSxDQUFLLGNBQUwsRUFBcUIsZ0JBQXJCLEVBQUE7O1VBQ0EsSUFBbUIsTUFBTyxTQUFQLE1BQWMsSUFBakM7WUFBQSxNQUFNLENBQUEsR0FBSSxFQUFWOztVQUNBLElBQXlDLENBQUEsS0FBSyxJQUE5QztZQUFBLElBQUEsQ0FBSyxjQUFMLEVBQXFCLGdCQUFyQixFQUFBOztVQUNBLElBQVcsQ0FBQSxLQUFLLElBQWhCO21CQUFBLENBQUEsTUFBTSxDQUFOLEVBQUE7O1FBUGM7UUFRaEIsRUFBQSxHQUFnQixTQUFBLENBQUUsQ0FBRixDQUFBO1VBQ2QsSUFBQSxDQUFLLGNBQUwsRUFBcUIsQ0FBckI7VUFDQSxJQUEwQyxDQUFBLEtBQUssS0FBL0M7WUFBQSxJQUFBLENBQUssY0FBTCxFQUFxQixpQkFBckIsRUFBQTs7VUFDQSxJQUFXLENBQUEsS0FBSyxLQUFoQjtZQUFBLE1BQU0sRUFBTjs7VUFDQSxJQUE2QyxNQUFPLFNBQVAsTUFBYyxJQUEzRDtZQUFBLElBQUEsQ0FBSyxjQUFMLEVBQXFCLGdCQUFyQixFQUFBOztVQUNBLElBQW1CLE1BQU8sU0FBUCxNQUFjLElBQWpDO1lBQUEsTUFBTSxDQUFBLEdBQUksRUFBVjs7VUFDQSxJQUF5QyxDQUFBLEtBQUssSUFBOUM7WUFBQSxJQUFBLENBQUssY0FBTCxFQUFxQixnQkFBckIsRUFBQTs7VUFDQSxJQUFXLENBQUEsS0FBSyxJQUFoQjttQkFBQSxDQUFBLE1BQU0sQ0FBTixFQUFBOztRQVBjO1FBUWhCLFdBQUEsR0FBZ0IsQ0FBQSxDQUFFLENBQUUsS0FBRixDQUFGLEVBQWUsRUFBZjtRQUNoQixXQUFBLEdBQWdCLENBQUEsQ0FBRSxDQUFFLElBQUYsQ0FBRixFQUFlLEVBQWY7UUFDaEIsR0FBRyxDQUFDLElBQUosQ0FBUyxXQUFUO1FBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxXQUFUO1FBQ0EsS0FBQSxDQUFNLFdBQU4sRUFBbUIsR0FBbkI7UUFDQSxPQUFBLENBQVEsV0FBUixFQUFxQix1Q0FBckI7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFdBQVcsQ0FBRSxTQUFTLENBQUMsR0FBWjtRQUFkLENBQWQsQ0FBSixFQUFxRCxDQUFFLEtBQUYsQ0FBckQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFdBQVcsQ0FBRSxTQUFTLENBQUMsR0FBWjtRQUFkLENBQWQsQ0FBSixFQUFxRCxDQUFFLElBQUYsQ0FBckQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxHQUFKLENBQVEsRUFBUjtRQUFILENBQWQsQ0FBSixFQUFrRCxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsRUFBUixFQUFZLENBQVosQ0FBbEQ7UUFDQSxPQUFBLENBQVEsV0FBUixFQUFxQix1Q0FBckI7QUFDQSxlQUFPO01BOUJOLENBQUEsSUExR1Q7O0FBMElNLGFBQU87SUEzSVUsQ0E3V25COztJQTJmQSxtQkFBQSxFQUFxQixRQUFBLENBQUEsQ0FBQTtBQUN6QixVQUFBLENBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtNQUFNLFNBQUEsR0FBOEIsT0FBQSxDQUFRLG1DQUFSO01BQzlCLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBOEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQTlCO01BQ0EsQ0FBQSxDQUFFLFNBQUYsRUFDRSxDQURGLEVBRUUsU0FGRixDQUFBLEdBRThCLFNBQVMsQ0FBQyxpQkFBVixDQUFBLENBRjlCO01BTUcsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBOzs7QUFDVCxZQUFBLFFBQUEsRUFBQSxvQkFBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxjQUFBLEVBQUEsR0FBQSxFQUFBLG1CQUFBLEVBQUEsT0FBQSxFQUFBLENBQUEsRUFBQSxLQUFBLEVBQUEsbUJBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxPQUFBLEVBQUEsaUJBQUEsRUFBQSxZQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtRQUFRLFlBQUEsR0FBZSxDQUNiLE1BQUEsQ0FBTyxPQUFQLENBRGEsRUFFYixNQUFNLENBQUMsR0FBUCxDQUFXLE9BQVgsQ0FGYSxFQUdiLE1BQUEsQ0FBTyxLQUFQLENBSGEsRUFJYixNQUFNLENBQUMsR0FBUCxDQUFXLEtBQVgsQ0FKYSxFQUtiLElBTGEsRUFNYixRQU5hO1FBUWYsbUJBQUEsR0FBc0I7VUFDcEI7WUFBRSxLQUFBLEVBQU8sSUFBVDtZQUFxQyxRQUFBLEVBQVUsQ0FBRSxFQUFGLENBQS9DO1lBQTJFLE9BQUEsRUFBUyxDQUFFLFFBQUYsQ0FBcEY7WUFBZ0gsT0FBQSxFQUFTLEVBQXpIO1lBQStJLElBQUEsRUFBTSxJQUFySjtZQUEySixJQUFBLEVBQU0sS0FBaks7WUFBc0wsVUFBQSxFQUFZO1VBQWxNLENBRG9CO1VBRXBCO1lBQUUsS0FBQSxFQUFPLEVBQVQ7WUFBcUMsUUFBQSxFQUFVLEVBQS9DO1lBQTJFLE9BQUEsRUFBUyxDQUFFLFFBQUYsQ0FBcEY7WUFBZ0gsT0FBQSxFQUFTLEVBQXpIO1lBQStJLElBQUEsRUFBTSxJQUFySjtZQUEySixJQUFBLEVBQU0sS0FBaks7WUFBc0wsVUFBQSxFQUFZO1VBQWxNLENBRm9CO1VBR3BCO1lBQUUsS0FBQSxFQUFPLENBQUUsRUFBRixDQUFUO1lBQXFDLFFBQUEsRUFBVSxFQUEvQztZQUEyRSxPQUFBLEVBQVMsQ0FBRSxRQUFGLENBQXBGO1lBQWdILE9BQUEsRUFBUyxFQUF6SDtZQUErSSxJQUFBLEVBQU0sSUFBcko7WUFBMkosSUFBQSxFQUFNLEtBQWpLO1lBQXNMLFVBQUEsRUFBWTtVQUFsTSxDQUhvQjtVQUlwQjtZQUFFLEtBQUEsRUFBTyxDQUFFLENBQUUsRUFBRixDQUFGLENBQVQ7WUFBcUMsUUFBQSxFQUFVLENBQUUsRUFBRixDQUEvQztZQUEyRSxPQUFBLEVBQVMsQ0FBRSxRQUFGLENBQXBGO1lBQWdILE9BQUEsRUFBUyxFQUF6SDtZQUErSSxJQUFBLEVBQU0sSUFBcko7WUFBMkosSUFBQSxFQUFNLEtBQWpLO1lBQXNMLFVBQUEsRUFBWTtVQUFsTSxDQUpvQjtVQUtwQjtZQUFFLEtBQUEsRUFBTyxDQUFFLE1BQUY7VUFBVSxLQUFWLENBQVQ7WUFBcUMsUUFBQSxFQUFVLENBQUUsTUFBRjtVQUFVLEtBQVYsQ0FBL0M7WUFBMkUsT0FBQSxFQUFTLENBQUUsUUFBRjtVQUFZLE9BQVosQ0FBcEY7WUFBZ0gsT0FBQSxFQUFTLFdBQXpIO1lBQStJLElBQUEsRUFBTSxJQUFySjtZQUEySixJQUFBLEVBQU0sSUFBaks7WUFBc0wsVUFBQSxFQUFZO1VBQWxNLENBTG9CO1VBTXBCO1lBQUUsS0FBQSxFQUFPLENBQUUsV0FBRjtVQUFlLFNBQWYsQ0FBVDtZQUFxQyxRQUFBLEVBQVUsQ0FBRSxXQUFGO1VBQWUsU0FBZixDQUEvQztZQUEyRSxPQUFBLEVBQVMsQ0FBRSxXQUFGO1VBQWUsU0FBZixDQUFwRjtZQUFnSCxPQUFBLEVBQVMsb0JBQXpIO1lBQStJLElBQUEsRUFBTSxJQUFySjtZQUEySixJQUFBLEVBQU0sQ0FBRSxPQUFGO1VBQVcsS0FBWCxDQUFqSztZQUFzTCxVQUFBLEVBQVk7VUFBbE0sQ0FOb0I7VUFPcEI7WUFBRSxLQUFBLEVBQU8sQ0FBRSxRQUFGO1VBQVksTUFBWixDQUFUO1lBQXFDLFFBQUEsRUFBVSxDQUFFLFFBQUY7VUFBWSxNQUFaLENBQS9DO1lBQTJFLE9BQUEsRUFBUyxDQUFFLFdBQUY7VUFBZSxTQUFmLENBQXBGO1lBQWdILE9BQUEsRUFBUyxjQUF6SDtZQUErSSxJQUFBLEVBQU0sSUFBcko7WUFBMkosSUFBQSxFQUFNLENBQUUsT0FBRjtVQUFXLEtBQVgsQ0FBaks7WUFBc0wsVUFBQSxFQUFZO1VBQWxNLENBUG9CO1VBUXBCO1lBQUUsS0FBQSxFQUFPLFdBQVQ7WUFBcUMsUUFBQSxFQUFVLENBQUUsTUFBRjtVQUFVLEtBQVYsQ0FBL0M7WUFBMkUsT0FBQSxFQUFTLENBQUUsUUFBRjtVQUFZLE9BQVosQ0FBcEY7WUFBZ0gsT0FBQSxFQUFTLFdBQXpIO1lBQStJLElBQUEsRUFBTSxJQUFySjtZQUEySixJQUFBLEVBQU0sSUFBaks7WUFBc0wsVUFBQSxFQUFZO1VBQWxNLENBUm9CO1VBU3BCO1lBQUUsS0FBQSxFQUFPLE1BQVQ7WUFBcUMsUUFBQSxFQUFVLENBQUUsTUFBRixDQUEvQztZQUEyRSxPQUFBLEVBQVMsQ0FBRSxRQUFGLENBQXBGO1lBQWdILE9BQUEsRUFBUyxNQUF6SDtZQUErSSxJQUFBLEVBQU0sSUFBcko7WUFBMkosSUFBQSxFQUFNLEtBQWpLO1lBQXNMLFVBQUEsRUFBWTtVQUFsTSxDQVRvQjtVQVVwQjtZQUFFLEtBQUEsRUFBTyxhQUFUO1lBQXFDLFFBQUEsRUFBVSxDQUFFLGFBQUYsQ0FBL0M7WUFBMkUsT0FBQSxFQUFTLENBQUUsYUFBRixDQUFwRjtZQUFnSCxPQUFBLEVBQVMsYUFBekg7WUFBK0ksSUFBQSxFQUFNLElBQXJKO1lBQTJKLElBQUEsRUFBTSxDQUFFLFNBQUYsQ0FBaks7WUFBc0wsVUFBQSxFQUFZO1VBQWxNLENBVm9CO1VBV3BCO1lBQUUsS0FBQSxFQUFPLEtBQVQ7WUFBcUMsUUFBQSxFQUFVLENBQUUsS0FBRixDQUEvQztZQUEyRSxPQUFBLEVBQVMsQ0FBRSxPQUFGLENBQXBGO1lBQWdILE9BQUEsRUFBUyxLQUF6SDtZQUErSSxJQUFBLEVBQU0sSUFBcko7WUFBMkosSUFBQSxFQUFNLElBQWpLO1lBQXNMLFVBQUEsRUFBWTtVQUFsTSxDQVhvQjtVQVlwQjtZQUFFLEtBQUEsRUFBTyxtQkFBVDtZQUFxQyxRQUFBLEVBQVUsQ0FBRSxXQUFGO1VBQWUsU0FBZixDQUEvQztZQUEyRSxPQUFBLEVBQVMsQ0FBRSxXQUFGO1VBQWUsU0FBZixDQUFwRjtZQUFnSCxPQUFBLEVBQVMsb0JBQXpIO1lBQStJLElBQUEsRUFBTSxJQUFySjtZQUEySixJQUFBLEVBQU0sQ0FBRSxPQUFGO1VBQVcsS0FBWCxDQUFqSztZQUFzTCxVQUFBLEVBQVk7VUFBbE0sQ0Fab0I7VUFhcEI7WUFBRSxLQUFBLEVBQU8sV0FBVDtZQUFxQyxRQUFBLEVBQVUsQ0FBRSxXQUFGLENBQS9DO1lBQTJFLE9BQUEsRUFBUyxDQUFFLFdBQUYsQ0FBcEY7WUFBZ0gsT0FBQSxFQUFTLFdBQXpIO1lBQStJLElBQUEsRUFBTSxJQUFySjtZQUEySixJQUFBLEVBQU0sQ0FBRSxPQUFGLENBQWpLO1lBQXNMLFVBQUEsRUFBWTtVQUFsTSxDQWJvQjtVQWNwQjtZQUFFLEtBQUEsRUFBTyxTQUFUO1lBQXFDLFFBQUEsRUFBVSxDQUFFLFNBQUYsQ0FBL0M7WUFBMkUsT0FBQSxFQUFTLENBQUUsU0FBRixDQUFwRjtZQUFnSCxPQUFBLEVBQVMsU0FBekg7WUFBK0ksSUFBQSxFQUFNLElBQXJKO1lBQTJKLElBQUEsRUFBTSxDQUFFLEtBQUYsQ0FBaks7WUFBc0wsVUFBQSxFQUFZO1VBQWxNLENBZG9CO1VBZXBCO1lBQUUsS0FBQSxFQUFPLEVBQVQ7WUFBcUMsUUFBQSxFQUFVLENBQUUsRUFBRixDQUEvQztZQUEyRSxPQUFBLEVBQVMsQ0FBRSxRQUFGLENBQXBGO1lBQWdILE9BQUEsRUFBUyxFQUF6SDtZQUErSSxJQUFBLEVBQU0sSUFBcko7WUFBMkosSUFBQSxFQUFNLEtBQWpLO1lBQXNMLFVBQUEsRUFBWTtVQUFsTSxDQWZvQjtVQWdCcEI7WUFBRSxLQUFBLEVBQU8sYUFBVDtZQUFxQyxRQUFBLEVBQVUsQ0FBRSxRQUFGO1VBQVksTUFBWixDQUEvQztZQUEyRSxPQUFBLEVBQVMsQ0FBRSxXQUFGO1VBQWUsU0FBZixDQUFwRjtZQUFnSCxPQUFBLEVBQVMsY0FBekg7WUFBK0ksSUFBQSxFQUFNLElBQXJKO1lBQTJKLElBQUEsRUFBTSxDQUFFLE9BQUY7VUFBVyxLQUFYLENBQWpLO1lBQXNMLFVBQUEsRUFBWTtVQUFsTSxDQWhCb0I7VUFpQnBCO1lBQUUsS0FBQSxFQUFPLFFBQVQ7WUFBcUMsUUFBQSxFQUFVLENBQUUsUUFBRixDQUEvQztZQUEyRSxPQUFBLEVBQVMsQ0FBRSxXQUFGLENBQXBGO1lBQWdILE9BQUEsRUFBUyxRQUF6SDtZQUErSSxJQUFBLEVBQU0sSUFBcko7WUFBMkosSUFBQSxFQUFNLENBQUUsT0FBRixDQUFqSztZQUFzTCxVQUFBLEVBQVk7VUFBbE0sQ0FqQm9CO1VBa0JwQjtZQUFFLEtBQUEsRUFBTyxVQUFUO1lBQXFDLFFBQUEsRUFBVSxDQUFFLFVBQUYsQ0FBL0M7WUFBMkUsT0FBQSxFQUFTLENBQUUsYUFBRixDQUFwRjtZQUFnSCxPQUFBLEVBQVMsVUFBekg7WUFBK0ksSUFBQSxFQUFNLElBQXJKO1lBQTJKLElBQUEsRUFBTSxDQUFFLFNBQUYsQ0FBaks7WUFBc0wsVUFBQSxFQUFZO1VBQWxNLENBbEJvQjtVQW1CcEI7WUFBRSxLQUFBLEVBQU8sY0FBVDtZQUFxQyxRQUFBLEVBQVUsQ0FBRSxNQUFGO1VBQVUsUUFBVjtVQUFvQixFQUFwQixDQUEvQztZQUEyRSxPQUFBLEVBQVMsQ0FBRSxTQUFGO1VBQWEsV0FBYixDQUFwRjtZQUFnSCxPQUFBLEVBQVMsZ0JBQXpIO1lBQStJLElBQUEsRUFBTSxJQUFySjtZQUEySixJQUFBLEVBQU0sQ0FBRSxLQUFGO1VBQVMsT0FBVCxDQUFqSztZQUFzTCxVQUFBLEVBQVk7VUFBbE0sQ0FuQm9CO1VBb0JwQjtZQUFFLEtBQUEsRUFBTyxhQUFUO1lBQXFDLFFBQUEsRUFBVSxDQUFFLE1BQUY7VUFBVSxRQUFWLENBQS9DO1lBQTJFLE9BQUEsRUFBUyxDQUFFLFNBQUY7VUFBYSxXQUFiLENBQXBGO1lBQWdILE9BQUEsRUFBUyxjQUF6SDtZQUErSSxJQUFBLEVBQU0sSUFBcko7WUFBMkosSUFBQSxFQUFNLENBQUUsS0FBRjtVQUFTLE9BQVQsQ0FBaks7WUFBc0wsVUFBQSxFQUFZO1VBQWxNLENBcEJvQjtVQXFCcEI7WUFBRSxLQUFBLEVBQU8sTUFBVDtZQUFxQyxRQUFBLEVBQVUsQ0FBRSxNQUFGLENBQS9DO1lBQTJFLE9BQUEsRUFBUyxDQUFFLFNBQUYsQ0FBcEY7WUFBZ0gsT0FBQSxFQUFTLE1BQXpIO1lBQStJLElBQUEsRUFBTSxJQUFySjtZQUEySixJQUFBLEVBQU0sQ0FBRSxLQUFGLENBQWpLO1lBQXNMLFVBQUEsRUFBWTtVQUFsTSxDQXJCb0I7VUFzQnBCO1lBQUUsS0FBQSxFQUFPLEdBQVQ7WUFBcUMsUUFBQSxFQUFVLENBQUUsR0FBRixDQUEvQztZQUEyRSxPQUFBLEVBQVMsQ0FBRSxPQUFGLENBQXBGO1lBQWdILE9BQUEsRUFBUyxHQUF6SDtZQUErSSxJQUFBLEVBQU0sSUFBcko7WUFBMkosSUFBQSxFQUFNLElBQWpLO1lBQXNMLFVBQUEsRUFBWTtVQUFsTSxDQXRCb0I7VUF1QnBCO1lBQUUsS0FBQSxFQUFPLHNCQUFUO1lBQXFDLFFBQUEsRUFBVSxDQUFFLFdBQUY7VUFBZSxTQUFmLENBQS9DO1lBQTJFLE9BQUEsRUFBUyxDQUFFLFdBQUY7VUFBZSxTQUFmLENBQXBGO1lBQWdILE9BQUEsRUFBUyxvQkFBekg7WUFBK0ksSUFBQSxFQUFNLElBQXJKO1lBQTJKLElBQUEsRUFBTSxDQUFFLE9BQUY7VUFBVyxLQUFYLENBQWpLO1lBQXNMLFVBQUEsRUFBWTtVQUFsTSxDQXZCb0I7VUF3QnBCO1lBQUUsS0FBQSxFQUFPLE9BQVQ7WUFBcUMsUUFBQSxFQUFVLENBQUUsT0FBRixDQUEvQztZQUEyRSxPQUFBLEVBQVMsQ0FBRSxRQUFGLENBQXBGO1lBQWdILE9BQUEsRUFBUyxPQUF6SDtZQUErSSxJQUFBLEVBQU0sSUFBcko7WUFBMkosSUFBQSxFQUFNLEtBQWpLO1lBQXNMLFVBQUEsRUFBWTtVQUFsTSxDQXhCb0I7VUFSOUI7Ozs7UUFxQ2MsV0FBTixNQUFBLFNBQUE7VUFDRSxXQUFhLENBQUEsR0FBRSxTQUFGLENBQUE7QUFDdkIsZ0JBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxRQUFBLEVBQUE7WUFBWSxDQUFBLENBQUUsYUFBRixFQUNFLFNBREYsQ0FBQSxHQUNrQixvQkFBQSxDQUFxQixHQUFBLFNBQXJCLENBRGxCO1lBRUEsSUFBQyxDQUFBLGFBQUQsR0FBa0I7WUFDbEIsSUFBQyxDQUFBLElBQUQsR0FBa0I7WUFDbEIsSUFBQyxDQUFBLElBQUQsR0FBa0I7WUFDbEIsSUFBQyxDQUFBLFVBQUQsR0FBa0IsQ0FBRSxJQUFDLENBQUEsSUFBRCxLQUFTLElBQVgsQ0FBQSxJQUFzQixDQUFFLElBQUMsQ0FBQSxJQUFELEtBQVMsSUFBWDtZQUN4QyxLQUFBLHFCQUFBO0FBQ0Usc0JBQU8sSUFBUDtBQUFBLHFCQUNPLFFBQUEsS0FBWSxRQURuQjtrQkFDaUMsSUFBQyxDQUFBLElBQUQsR0FBUTtBQUFsQztBQURQLHFCQUVPLFFBQUEsS0FBWSxPQUZuQjtrQkFFZ0MsSUFBQyxDQUFBLElBQUQsR0FBUTtBQUFqQztBQUZQLHFCQUdPLG9EQUhQOztrQkFLSSxNQUFNLElBQUksS0FBSixDQUFVLENBQUEsZ0RBQUEsQ0FBQSxDQUFtRCxRQUFuRCxDQUFBLENBQVY7QUFMVixxQkFNTyxtREFOUDtrQkFPSSxXQUFxQixJQUFDLENBQUEsVUFBVSxRQUFYLFFBQWlCLEtBQXRDO29CQUFBLElBQUMsQ0FBQSxJQUFELEdBQVEsSUFBSSxHQUFKLENBQUEsRUFBUjs7a0JBQ0EsSUFBQyxDQUFBLElBQUksQ0FBQyxHQUFOLENBQVUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUF2QjtBQUZHO0FBTlA7a0JBU087QUFUUDtZQURGO0FBV0EsbUJBQU87VUFsQkksQ0FBdkI7OztVQXFCVSxZQUFjLENBQUEsQ0FBQTttQkFBRztjQUFFLElBQUEsRUFBTSxJQUFDLENBQUEsSUFBVDtjQUFlLElBQUEsRUFBTSxJQUFDLENBQUEsSUFBdEI7Y0FBNEIsVUFBQSxFQUFZLElBQUMsQ0FBQTtZQUF6QztVQUFILENBckJ4Qjs7O1VBd0JVLE1BQVEsQ0FBRSxJQUFGLENBQUE7QUFDbEIsZ0JBQUE7WUFBWSxJQUFlLElBQUMsQ0FBQSxVQUFoQjtBQUFBLHFCQUFPLEtBQVA7O1lBQ0EsSUFBRyxNQUFBLEdBQVMsQ0FBRSxPQUFPLElBQVQsQ0FBQSxLQUFtQixRQUEvQjtjQUNFLElBQWlCLElBQUMsQ0FBQSxJQUFELEtBQVMsSUFBMUI7QUFBQSx1QkFBTyxLQUFQOztjQUNBLElBQWlCLElBQUMsQ0FBQSxJQUFELEtBQVMsS0FBMUI7QUFBQSx1QkFBTyxNQUFQOztBQUNBLHFCQUFPLElBQUMsQ0FBQSxJQUFJLENBQUMsR0FBTixDQUFVLGNBQUEsQ0FBZSxJQUFmLENBQVYsRUFIVDs7WUFJQSxJQUFpQixJQUFDLENBQUEsSUFBRCxLQUFTLElBQTFCO0FBQUEscUJBQU8sS0FBUDs7WUFDQSxJQUFpQixJQUFDLENBQUEsSUFBRCxLQUFTLEtBQTFCO0FBQUEscUJBQU8sTUFBUDs7WUFDQSxNQUFNLElBQUksS0FBSixDQUFVLENBQUEsdURBQUEsQ0FBQSxDQUEwRCxHQUFBLENBQUksSUFBQyxDQUFBLFFBQUwsQ0FBMUQsQ0FBQSxDQUFWO1VBUkEsQ0F4QmxCOzs7OztVQW9DVSxRQUFVLENBQUEsQ0FBQTttQkFBRyxJQUFDLENBQUE7VUFBSjs7UUFyQ1osRUFyQ1I7Ozs7Ozs7OztRQW1GUSxjQUFBLEdBQWlCLFFBQUEsQ0FBRSxNQUFGLENBQUE7QUFDekIsY0FBQTtVQUFVLENBQUEsR0FBSSxNQUFBLENBQU8sTUFBUDtBQUNKLGlCQUFTLENBQUc7UUFGRyxFQW5GekI7O1FBd0ZRLGlCQUFBLEdBQW9CLFFBQUEsQ0FBQSxHQUFFLFNBQUYsQ0FBQTtVQUNsQixJQUFhLFNBQVMsQ0FBQyxNQUFWLEtBQW9CLENBQWpDO0FBQUEsbUJBQU8sR0FBUDs7VUFDQSxTQUFBLEdBQVksU0FBUyxDQUFDLElBQVYsQ0FBZSxLQUFmO1VBQ1osSUFBYSxTQUFTLENBQUMsTUFBVixLQUFvQixDQUFqQztBQUFBLG1CQUFPLEdBQVA7O1VBQ0EsSUFBa0IsU0FBUyxDQUFDLE1BQVYsS0FBb0IsQ0FBcEIsSUFBMEIsU0FBUyxDQUFFLENBQUYsQ0FBVCxLQUFrQixFQUE5RDtBQUFBLG1CQUFPLENBQUUsRUFBRixFQUFQOztVQUNBLFNBQUEsR0FBWSxTQUFTLENBQUMsSUFBVixDQUFlLEdBQWY7VUFDWixTQUFBLEdBQVksU0FBUyxDQUFDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBMEIsRUFBMUI7VUFDWixTQUFBLEdBQVksU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsR0FBaEI7QUFBb0Isa0NBQ2hDLGlCQUFPO1FBUlcsRUF4RjVCOztRQW1HUSxtQkFBQSxHQUFzQixRQUFBLENBQUEsR0FBRSxTQUFGLENBQUE7aUJBQW9CLENBQUUsb0JBQUEsQ0FBcUIsR0FBQSxTQUFyQixDQUFGLENBQXFDLENBQUM7UUFBMUQsRUFuRzlCOztRQXNHUSxvQkFBQSxHQUF1QixRQUFBLENBQUEsR0FBRSxTQUFGLENBQUE7QUFDL0IsY0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxRQUFBLEVBQUE7VUFBVSxTQUFBLEdBQWdCLGlCQUFBLENBQWtCLEdBQUEsU0FBbEI7VUFDaEIsYUFBQSxHQUFnQixTQUFTLENBQUMsSUFBVixDQUFlLElBQWY7VUFDaEIsQ0FBQSxHQUFnQixJQUFJLEdBQUosQ0FBQTtVQUNoQixLQUFBLDJDQUFBOztBQUNFLG9CQUFPLElBQVA7QUFBQSxtQkFDTyxRQUFBLEtBQVksRUFEbkI7Z0JBQ3VDO0FBQWhDO0FBRFAsbUJBRU8sUUFBQSxLQUFZLEdBRm5CO2dCQUV1QyxDQUFDLENBQUMsR0FBRixDQUFNLE9BQU47QUFBaEM7QUFGUCxtQkFHTyxNQUFNLENBQUMsSUFBUCxDQUFZLFFBQVosQ0FIUDtnQkFHdUMsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxDQUFBLEdBQUEsQ0FBQSxDQUFNLFFBQU4sQ0FBQSxDQUFOO0FBQWhDO0FBSFAsbUJBSU8sTUFBTSxDQUFDLElBQVAsQ0FBWSxRQUFaLENBSlA7Z0JBSXVDLENBQUMsQ0FBQyxHQUFGLENBQU0sQ0FBQSxDQUFBLENBQUcsUUFBSCxDQUFBLENBQUEsQ0FBTjtBQUFoQztBQUpQLG1CQUtPLENBQUksR0FBRyxDQUFDLElBQUosQ0FBUyxRQUFULENBTFg7Z0JBS3VDLENBQUMsQ0FBQyxHQUFGLENBQU0sQ0FBQSxDQUFBLENBQUcsUUFBSCxDQUFBLEVBQUEsQ0FBTjtBQUFoQztBQUxQO2dCQU1PLENBQUMsQ0FBQyxHQUFGLENBQU0sUUFBTjtBQU5QO1VBREY7VUFRQSxJQUFrQixDQUFDLENBQUMsSUFBRixLQUFVLENBQTVCO1lBQUEsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxRQUFOLEVBQUE7O1VBQ0EsSUFBZSxDQUFDLENBQUMsSUFBRixLQUFZLENBQTNCO1lBQUEsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxFQUFULEVBQUE7O0FBQ0EsaUJBQU87WUFBRSxTQUFBLEVBQVcsQ0FBYjtZQUFnQjtVQUFoQjtRQWRjLEVBdEcvQjs7QUF1SFE7UUFBQSxLQUFBLHFEQUFBOztVQUNFLEtBQUEsR0FBa0IsQ0FBQyxDQUFDO1VBQ3BCLFFBQUEsR0FBa0IsaUJBQUEsQ0FBb0IsS0FBcEI7VUFDbEIsT0FBQSxHQUFrQixDQUFFLEdBQUEsQ0FBRSxtQkFBQSxDQUFvQixLQUFwQixDQUFGLENBQUY7VUFDbEIsR0FBQSxHQUFrQixJQUFJLFFBQUosQ0FBb0IsS0FBcEI7VUFDbEIsT0FBQSxHQUFrQixHQUFHLENBQUMsUUFBSixDQUFBO1VBQ2xCLENBQUEsQ0FBRSxJQUFGLEVBQ0UsSUFERixFQUVFLFVBRkYsQ0FBQSxHQUVrQixHQUFHLENBQUMsWUFBSixDQUFBLENBRmxCO1VBR0EsSUFBMEMsU0FBVSxRQUFWLFNBQWdCLEtBQTFEO1lBQUEsSUFBQSxHQUFrQixDQUFFLEdBQUUsSUFBSixFQUFsQjs7VUFDQSxJQUEwQyxTQUFVLFFBQVYsU0FBZ0IsS0FBMUQ7WUFBQSxJQUFBLEdBQWtCLENBQUUsR0FBRSxJQUFKLEVBQWxCOztVQUNBLElBQUEsQ0FBSyxDQUFFLEtBQUYsRUFBUyxRQUFULEVBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLEVBQWlELFVBQWpELENBQUw7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHO1VBQUgsQ0FBZixDQUFKLEVBQXFDLENBQUMsQ0FBQyxRQUF2QztVQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7bUJBQUc7VUFBSCxDQUFmLENBQUosRUFBcUMsQ0FBQyxDQUFDLE9BQXZDO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRztVQUFILENBQWYsQ0FBSixFQUFxQyxDQUFDLENBQUMsT0FBdkM7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHO1VBQUgsQ0FBZixDQUFKLEVBQXFDLENBQUMsQ0FBQyxJQUF2QztVQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7bUJBQUc7VUFBSCxDQUFmLENBQUosRUFBcUMsQ0FBQyxDQUFDLElBQXZDO3VCQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7bUJBQUc7VUFBSCxDQUFmLENBQUosRUFBcUMsQ0FBQyxDQUFDLFVBQXZDO1FBakJGLENBQUE7O01BeEhDLENBQUEsSUFSVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOE1NLGFBQU87SUEvTVk7RUEzZnJCLEVBOUJKOzs7RUE0dUJBLHVCQUFBLEdBQTBCLFFBQUEsQ0FBQSxDQUFBO0FBQzFCLFFBQUE7SUFBRSxJQUFBLENBQUssV0FBTCxFQUFrQixPQUFBLENBQVEsbUNBQVIsQ0FBbEI7SUFDQSxHQUFBLEdBQU0sT0FBQSxDQUFRLGdFQUFSO0lBQ04sSUFBQSxDQUFLLFdBQUwsRUFBa0IsR0FBbEI7SUFDQSxHQUFHLENBQUMsYUFBSixDQUFBO0FBQ0EsV0FBTztFQUxpQixFQTV1QjFCOzs7RUFxdkJBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQTtNQUFFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsSUFBQyxDQUFBLEtBQS9CLEVBRkY7Ozs7O2FBT0UsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLG1CQUFBLEVBQXFCLElBQUMsQ0FBQSxLQUFLLENBQUM7TUFBOUIsQ0FBOUI7SUFSc0MsQ0FBQSxJQUF4Qzs7O0VBcnZCQTs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLXNmbW9kdWxlcy90ZXN0LWJhc2ljcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRhc2tzID1cblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVxdWlyZV9kaWN0aW9uYXJ5X3Rvb2xzOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IGV4cGFuZF9kaWN0aW9uYXJ5LCAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9kaWN0aW9uYXJ5X3Rvb2xzKClcbiAgICAgIHsgZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucywgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2dldF9sb2NhbF9kZXN0aW5hdGlvbnMoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cnRfX18xID0gLT4gdHlwZV9vZiBleHBhbmRfZGljdGlvbmFyeSApLCAnZnVuY3Rpb24nXG4gICAgICBkbyA9PlxuICAgICAgICBzdHJpbmdzID1cbiAgICAgICAgICAnJHtncmVldH0nOiAgIFwiSGVsbG8gJHt3aG99XCJcbiAgICAgICAgICAnJHt3aG99JzogICAgIFwiZGVhciAke3RhcmdldH1cIlxuICAgICAgICAgICcke3RhcmdldH0nOiAgXCJ3b3JsZFwiXG4gICAgICAgIG1hdGNoZXIgPVxuICAgICAgICAgICcke2dyZWV0fSc6ICAgXCJIZWxsbyBkZWFyIHdvcmxkXCJcbiAgICAgICAgICAnJHt3aG99JzogICAgIFwiZGVhciB3b3JsZFwiXG4gICAgICAgICAgJyR7dGFyZ2V0fSc6ICBcIndvcmxkXCJcbiAgICAgICAgc3RyaW5nc19jb3B5ICA9IHsgc3RyaW5ncy4uLiwgfVxuICAgICAgICBleHBhbmRlZCAgICAgID0gZXhwYW5kX2RpY3Rpb25hcnkgc3RyaW5nc1xuICAgICAgICBAZXEgICAgICggzqlrdnJ0X19fMiA9IC0+IHN0cmluZ3MgICAgICAgICAgICAgKSwgc3RyaW5nc19jb3B5XG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfX18zID0gLT4gZXhwYW5kZWQgICAgICAgICAgICApLCBtYXRjaGVyXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfX180ID0gLT4gZXhwYW5kZWQgaXMgc3RyaW5ncyApLCBmYWxzZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBzdHJpbmdzID1cbiAgICAgICAgICAnJHtncmVldH0nOiAgIFwiSGVsbG8gJHt3aG99XCJcbiAgICAgICAgICAnJHt3aG99JzogICAgIFwiZGVhciAke3RhcmdldH1cIlxuICAgICAgICAgICcke3RhcmdldH0nOiAgXCJ3b3JsZCAke2dyZWV0fVwiXG4gICAgICAgIHN0cmluZ3NfY29weSAgPSB7IHN0cmluZ3MuLi4sIH1cbiAgICAgICAgQHRocm93cyAoIM6pa3ZydF9fXzUgPSAtPiBleHBhbmRfZGljdGlvbmFyeSBzdHJpbmdzICksIC9jeWNsaWMgcmVmZXJlbmNlIGRldGVjdGVkIGZvciBcXCRcXHtncmVldFxcfS9cbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF9fXzYgPSAtPiBzdHJpbmdzICAgICAgICAgICAgICAgICAgICAgICApLCBzdHJpbmdzX2NvcHlcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgc3RyaW5ncyA9XG4gICAgICAgICAgJy8odXNlcikvJzogICAgIFwiL0FsaWNlL1wiXG4gICAgICAgICAgJyhzY2hlbWEpLy8nOiAgIFwiaHR0cHM6Ly9cIlxuICAgICAgICAgICcoc2VydmVyKS8nOiAgICBcIihzY2hlbWEpLy9leGFtcGxlLmNvbS9cIlxuICAgICAgICAgICcoZm9sZGVyKSc6ICAgICBcIihzZXJ2ZXIpLyh1c2VyKS9kYXRhXCJcbiAgICAgICAgICAnOjpmaWxlOjonOiAgICAgXCIoZm9sZGVyKS9maWxlLnR4dFwiXG4gICAgICAgIGZvciBrZXksIHZhbHVlIG9mIGV4cGFuZF9kaWN0aW9uYXJ5IHN0cmluZ3NcbiAgICAgICAgICBkZWJ1ZyAnzqlrdnJ0X19fNycsIGZcIiN7a2V5fTo8MjBjOyAje3JwciB2YWx1ZX1cIlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBicmljYWJyYWNfanNvbiA9IHtcbiAgICAgICAgICBcInN0cmluZ3NcIjoge1xuICAgICAgICAgICAgXCIoZ2gpXCI6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tXCIsXG4gICAgICAgICAgICBcIihmbG93KS9cIjogXCIoZ2gpL2xvdmVlbmNvdW50ZXJmbG93L1wiLFxuICAgICAgICAgICAgXCIoc2Ztb2R1bGVzKVwiOiBcIihmbG93KS9icmljYWJyYWMtc2Ztb2R1bGVzL3JlZnMvaGVhZHMvbWFpbi9zcmNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hcHBpbmdzXCI6IHtcbiAgICAgICAgICAgIFwiYVwiOiBcIi0tKGdoKS0tXCJcbiAgICAgICAgICAgIFwiYlwiOiBcIi0tKGZsb3cpLy0tXCJcbiAgICAgICAgICAgIFwiY1wiOiBcIi0tKHNmbW9kdWxlcyktLVwiXG4gICAgICAgICAgICBcImRcIjogXCJ+Ly0tKHNmbW9kdWxlcyktLVwiIH0gfVxuICAgICAgICBfYnJpY2FicmFjX2NvbXBpbGVkX2pzb24gPSB7XG4gICAgICAgICAgXCJzdHJpbmdzXCI6IHtcbiAgICAgICAgICAgIFwiKGdoKVwiOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbVwiLFxuICAgICAgICAgICAgXCIoZmxvdykvXCI6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93L1wiLFxuICAgICAgICAgICAgXCIoc2Ztb2R1bGVzKVwiOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzL3JlZnMvaGVhZHMvbWFpbi9zcmNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hcHBpbmdzXCI6IHtcbiAgICAgICAgICAgIFwiYVwiOiBcIi0taHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tLS1cIlxuICAgICAgICAgICAgXCJiXCI6IFwiLS1odHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvLS1cIlxuICAgICAgICAgICAgXCJjXCI6IFwiLS1odHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlcy9yZWZzL2hlYWRzL21haW4vc3JjLS1cIlxuICAgICAgICAgICAgXCJkXCI6IFwifi8tLWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzL3JlZnMvaGVhZHMvbWFpbi9zcmMtLVwiIH0gfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJlc3VsdCAgICAgICAgICA9IHt9XG4gICAgICAgIHJlc3VsdC5zdHJpbmdzICA9IGV4cGFuZF9kaWN0aW9uYXJ5IGJyaWNhYnJhY19qc29uLnN0cmluZ3NcbiAgICAgICAgcmVzdWx0Lm1hcHBpbmdzID0ge31cbiAgICAgICAgZm9yIHRhcmdldF9wYXRoLCBzb3VyY2Vfc3BlYyBvZiBicmljYWJyYWNfanNvbi5tYXBwaW5nc1xuICAgICAgICAgIHJlc3VsdC5tYXBwaW5nc1sgdGFyZ2V0X3BhdGggXSA9IHNvdXJjZV9zcGVjXG4gICAgICAgICAgZm9yIHBhdHRlcm5fa2V5LCBwYXR0ZXJuX3ZhbHVlIG9mIHJlc3VsdC5zdHJpbmdzXG4gICAgICAgICAgICByZXN1bHQubWFwcGluZ3NbIHRhcmdldF9wYXRoIF0gPSByZXN1bHQubWFwcGluZ3NbIHRhcmdldF9wYXRoIF0ucmVwbGFjZUFsbCBwYXR0ZXJuX2tleSwgcGF0dGVybl92YWx1ZVxuICAgICAgICAjIGRlYnVnICfOqWt2cnRfX184JywgcmVzdWx0XG4gICAgICAgIEBlcSAoIM6pa3ZydF9fXzkgPSAtPiBmYWxzZSApLCBcInJlc29sdmUgaG9tZSBkaXJlY3Rvcnkgd2l0aCBvcy5ob21lZGlyKCkgLyBsb2NhbC1kZXN0aW5hdGlvbi5icmljc1wiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMTAgPSAtPiBPYmplY3Qua2V5cyByZXN1bHQgKSwgT2JqZWN0LmtleXMgX2JyaWNhYnJhY19jb21waWxlZF9qc29uXG4gICAgICAgIGZvciBrZXksIHZhbHVlIG9mIHJlc3VsdC5zdHJpbmdzXG4gICAgICAgICAgQGVxICggzqlrdnJ0X18xMSA9IC0+IHZhbHVlICksIF9icmljYWJyYWNfY29tcGlsZWRfanNvbi5zdHJpbmdzWyBrZXkgXVxuICAgICAgICBmb3Iga2V5LCB2YWx1ZSBvZiByZXN1bHQubWFwcGluZ3NcbiAgICAgICAgICBAZXEgKCDOqWt2cnRfXzEyID0gLT4gdmFsdWUgKSwgX2JyaWNhYnJhY19jb21waWxlZF9qc29uLm1hcHBpbmdzWyBrZXkgXVxuICAgICAgICAjIGRlYnVnICfOqWt2cnRfXzEzJywgKCBnZXRfbG9jYWxfZGVzdGluYXRpb25zIG51bGwgKS5ob21lXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlcXVpcmVfZ2V0X2xvY2FsX2Rlc3RpbmF0aW9uczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBnZXRfbG9jYWxfZGVzdGluYXRpb25zLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucygpXG4gICAgICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgICBPUyAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOm9zJ1xuICAgICAgRlMgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyB7XG4gICAgICAjICAgYXBwOiB7XG4gICAgICAjICAgICBuYW1lOiAnbXktYXBwLW5hbWUnLFxuICAgICAgIyAgICAgZGF0YTogJy9ob21lL2Zsb3cvLmxvY2FsL3NoYXJlL215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIGNvbmZpZzogJy9ob21lL2Zsb3cvLmNvbmZpZy9teS1hcHAtbmFtZScsXG4gICAgICAjICAgICBjYWNoZTogJy9ob21lL2Zsb3cvLmNhY2hlL215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIGxvZzogJy9ob21lL2Zsb3cvLmxvY2FsL3N0YXRlL215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIHRlbXA6ICcvdG1wL2Zsb3cvbXktYXBwLW5hbWUnLFxuICAgICAgIyAgICAgaG9tZTogJy9ob21lL2Zsb3cvbXktYXBwLW5hbWUnLFxuICAgICAgIyAgICAgbm9kZV9tb2R1bGVzOiAnL2hvbWUvZmxvdy9teS1hcHAtbmFtZS9ub2RlX21vZHVsZXMnLFxuICAgICAgIyAgICAgZGVwX2JpbjogJy9ob21lL2Zsb3cvbXktYXBwLW5hbWUvbm9kZV9tb2R1bGVzLy5iaW4nLFxuICAgICAgIyAgICAgb3duX2JpbjogJy9ob21lL2Zsb3cvbXktYXBwLW5hbWUvYmluJ1xuICAgICAgIyAgIH0sXG4gICAgICAjICAgdXNlcjogeyBuYW1lOiAnZmxvdycsIGhvbWU6ICcvaG9tZS9mbG93JywgdGVtcDogJy90bXAnIH1cbiAgICAgICMgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cnRfXzE0ID0gLT4gdHlwZV9vZiBnZXRfbG9jYWxfZGVzdGluYXRpb25zICksICdmdW5jdGlvbidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgYXBwX25hbWUgICAgICA9ICdteS1hcHAtbmFtZSdcbiAgICAgICAgZHN0ICAgICAgICAgICA9IGdldF9sb2NhbF9kZXN0aW5hdGlvbnMgeyBhcHBfbmFtZSwgfVxuICAgICAgICB1c2VyX25mbyAgICAgID0gT1MudXNlckluZm8oKVxuICAgICAgICBob21lICAgICAgICAgID0gRlMucmVhbHBhdGhTeW5jIE9TLmhvbWVkaXIoKVxuICAgICAgICB0ZW1wICAgICAgICAgID0gRlMucmVhbHBhdGhTeW5jIE9TLnRtcGRpcigpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X18xNSA9IC0+ICggT2JqZWN0LmtleXMgZHN0ICkuc29ydCgpICAgICAgICksIFsgJ2FwcCcsICd1c2VyJywgXVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzE2ID0gLT4gKCBPYmplY3Qua2V5cyBkc3QuYXBwICkuc29ydCgpICAgKSwgWyAnY2FjaGUnLCAnY29uZmlnJywgJ2RhdGEnLCAnZGVwX2JpbicsICdob21lJywgJ2xvZycsICduYW1lJywgJ25vZGVfbW9kdWxlcycsICdvd25fYmluJywgJ3RlbXAnIF1cbiAgICAgICAgQGVxICggzqlrdnJ0X18xNyA9IC0+ICggT2JqZWN0LmtleXMgZHN0LnVzZXIgKS5zb3J0KCkgICksIFsgJ2hvbWUnLCAnbmFtZScsICd0ZW1wJywgXVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMTggPSAtPiB0eXBlX29mIGRzdC5hcHAgICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzE5ID0gLT4gdHlwZV9vZiBkc3QudXNlciAgICAgICAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzIwID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmNhY2hlICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X18yMSA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jb25maWcgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMjIgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuZGF0YSAgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzIzID0gLT4gZHN0LmFwcC5kZXBfYmluICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9uYW1lLCAnbm9kZV9tb2R1bGVzJywgJy5iaW4nXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMjQgPSAtPiBkc3QuYXBwLmhvbWUgICAgICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X18yNSA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5sb2cgICAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMjYgPSAtPiBkc3QuYXBwLm5hbWUgICAgICAgICAgICAgICAgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzI3ID0gLT4gZHN0LmFwcC5ub2RlX21vZHVsZXMgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9uYW1lLCAnbm9kZV9tb2R1bGVzJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzI4ID0gLT4gZHN0LmFwcC5vd25fYmluICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9uYW1lLCAnYmluJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzI5ID0gLT4gZHN0LmFwcC50ZW1wICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGRzdC51c2VyLnRlbXAsIGRzdC51c2VyLm5hbWUsIGFwcF9uYW1lXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X18zMCA9IC0+IGRzdC51c2VyLmhvbWUgICAgICAgICAgICAgICAgICAgICksIGhvbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X18zMSA9IC0+IGRzdC51c2VyLm5hbWUgICAgICAgICAgICAgICAgICAgICksIHVzZXJfbmZvLnVzZXJuYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMzIgPSAtPiBkc3QudXNlci50ZW1wICAgICAgICAgICAgICAgICAgICApLCB0ZW1wXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgYXBwX25hbWUgICAgICA9IG51bGxcbiAgICAgICAgZHN0ICAgICAgICAgICA9IGdldF9sb2NhbF9kZXN0aW5hdGlvbnMgeyBhcHBfbmFtZSwgfVxuICAgICAgICB1c2VyX25mbyAgICAgID0gT1MudXNlckluZm8oKVxuICAgICAgICBob21lICAgICAgICAgID0gRlMucmVhbHBhdGhTeW5jIE9TLmhvbWVkaXIoKVxuICAgICAgICB0ZW1wICAgICAgICAgID0gRlMucmVhbHBhdGhTeW5jIE9TLnRtcGRpcigpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X18zMyA9IC0+ICggT2JqZWN0LmtleXMgZHN0ICkuc29ydCgpICAgICAgICksIFsgJ2FwcCcsICd1c2VyJywgXVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzM0ID0gLT4gKCBPYmplY3Qua2V5cyBkc3QuYXBwICkuc29ydCgpICAgKSwgWyAnY2FjaGUnLCAnY29uZmlnJywgJ2RhdGEnLCAnZGVwX2JpbicsICdob21lJywgJ2xvZycsICduYW1lJywgJ25vZGVfbW9kdWxlcycsICdvd25fYmluJywgJ3RlbXAnIF1cbiAgICAgICAgQGVxICggzqlrdnJ0X18zNSA9IC0+ICggT2JqZWN0LmtleXMgZHN0LnVzZXIgKS5zb3J0KCkgICksIFsgJ2hvbWUnLCAnbmFtZScsICd0ZW1wJywgXVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMzYgPSAtPiB0eXBlX29mIGRzdC5hcHAgICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzM3ID0gLT4gdHlwZV9vZiBkc3QudXNlciAgICAgICAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzM4ID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmNhY2hlICAgICAgKSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzM5ID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmNvbmZpZyAgICAgKSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzQwID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmRhdGEgICAgICAgKSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzQxID0gLT4gZHN0LmFwcC5kZXBfYmluICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsICc8WU9VUi1BUFAtTkFNRS1IRVJFPicsICdub2RlX21vZHVsZXMnLCAnLmJpbidcbiAgICAgICAgQGVxICggzqlrdnJ0X180MiA9IC0+IGRzdC5hcHAuaG9tZSAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNDMgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAubG9nICAgICAgICApLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNDQgPSAtPiBkc3QuYXBwLm5hbWUgICAgICAgICAgICAgICAgICAgICApLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNDUgPSAtPiBkc3QuYXBwLm5vZGVfbW9kdWxlcyAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+JywgJ25vZGVfbW9kdWxlcydcbiAgICAgICAgQGVxICggzqlrdnJ0X180NiA9IC0+IGRzdC5hcHAub3duX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nLCAnYmluJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzQ3ID0gLT4gZHN0LmFwcC50ZW1wICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGRzdC51c2VyLnRlbXAsIGRzdC51c2VyLm5hbWUsICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzQ4ID0gLT4gZHN0LnVzZXIuaG9tZSAgICAgICAgICAgICAgICAgICAgKSwgaG9tZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzQ5ID0gLT4gZHN0LnVzZXIubmFtZSAgICAgICAgICAgICAgICAgICAgKSwgdXNlcl9uZm8udXNlcm5hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X181MCA9IC0+IGRzdC51c2VyLnRlbXAgICAgICAgICAgICAgICAgICAgICksIHRlbXBcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBhcHBfbmFtZSAgICAgID0gJ2Zyb2J1bGF0b3InXG4gICAgICAgIGFwcF9ob21lICAgICAgPSAnL3BhdGgvdG8vcHJvamVjdHMnXG4gICAgICAgIGRzdCAgICAgICAgICAgPSBnZXRfbG9jYWxfZGVzdGluYXRpb25zIHsgYXBwX25hbWUsIGFwcF9ob21lIH1cbiAgICAgICAgdXNlcl9uZm8gICAgICA9IE9TLnVzZXJJbmZvKClcbiAgICAgICAgaG9tZSAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy5ob21lZGlyKClcbiAgICAgICAgdGVtcCAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy50bXBkaXIoKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTEgPSAtPiAoIE9iamVjdC5rZXlzIGRzdCApLnNvcnQoKSAgICAgICApLCBbICdhcHAnLCAndXNlcicsIF1cbiAgICAgICAgQGVxICggzqlrdnJ0X181MiA9IC0+ICggT2JqZWN0LmtleXMgZHN0LmFwcCApLnNvcnQoKSAgICksIFsgJ2NhY2hlJywgJ2NvbmZpZycsICdkYXRhJywgJ2RlcF9iaW4nLCAnaG9tZScsICdsb2cnLCAnbmFtZScsICdub2RlX21vZHVsZXMnLCAnb3duX2JpbicsICd0ZW1wJyBdXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTMgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC51c2VyICkuc29ydCgpICApLCBbICdob21lJywgJ25hbWUnLCAndGVtcCcsIF1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzU0ID0gLT4gdHlwZV9vZiBkc3QuYXBwICAgICAgICAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAgICAgQGVxICggzqlrdnJ0X181NSA9IC0+IHR5cGVfb2YgZHN0LnVzZXIgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X181NiA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jYWNoZSAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTcgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY29uZmlnICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzU4ID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmRhdGEgICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X181OSA9IC0+IGRzdC5hcHAuZGVwX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfaG9tZSwgYXBwX25hbWUsICdub2RlX21vZHVsZXMnLCAnLmJpbidcbiAgICAgICAgQGVxICggzqlrdnJ0X182MCA9IC0+IGRzdC5hcHAuaG9tZSAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfaG9tZSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X182MSA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5sb2cgICAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjIgPSAtPiBkc3QuYXBwLm5hbWUgICAgICAgICAgICAgICAgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzYzID0gLT4gZHN0LmFwcC5ub2RlX21vZHVsZXMgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9ob21lLCBhcHBfbmFtZSwgJ25vZGVfbW9kdWxlcydcbiAgICAgICAgQGVxICggzqlrdnJ0X182NCA9IC0+IGRzdC5hcHAub3duX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfaG9tZSwgYXBwX25hbWUsICdiaW4nXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjUgPSAtPiBkc3QuYXBwLnRlbXAgICAgICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgZHN0LnVzZXIudGVtcCwgZHN0LnVzZXIubmFtZSwgYXBwX25hbWVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzY2ID0gLT4gZHN0LnVzZXIuaG9tZSAgICAgICAgICAgICAgICAgICAgKSwgaG9tZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzY3ID0gLT4gZHN0LnVzZXIubmFtZSAgICAgICAgICAgICAgICAgICAgKSwgdXNlcl9uZm8udXNlcm5hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X182OCA9IC0+IGRzdC51c2VyLnRlbXAgICAgICAgICAgICAgICAgICAgICksIHRlbXBcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX3dhbGtfanNfdG9rZW5zOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IHdhbGtfanNfdG9rZW5zLFxuICAgICAgICB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMsXG4gICAgICAgIHN1bW1hcml6ZSwgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV93YWxrX2pzX3Rva2VucygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZydF9fNjkgPSAtPiB0eXBlX29mIHdhbGtfanNfdG9rZW5zICAgICAgICAgICAgKSwgJ2dlbmVyYXRvcmZ1bmN0aW9uJ1xuICAgICAgQGVxICggzqlrdnJ0X183MCA9IC0+IHR5cGVfb2Ygd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICApLCAnZ2VuZXJhdG9yZnVuY3Rpb24nXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzEgPSAtPiB0eXBlX29mIHdhbGtfanNfdG9rZW5zICcnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnZ2VuZXJhdG9yJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzcyID0gLT4gWyAoIHdhbGtfanNfdG9rZW5zICcnICkuLi4sIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyB7IHR5cGU6ICdlb2YnLCB9LCBdXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzMgPSAtPiBzdW1tYXJpemUgd2Fsa19qc190b2tlbnMgICAgICAgICAgICAndmFyIGEgPSA5OycgICAgICAgICAgICAgICAgICApLCBcIiYmJklkZW50aWZpZXJOYW1lJ3ZhcicmJiZXaGl0ZVNwYWNlJyAnJiYmSWRlbnRpZmllck5hbWUnYScmJiZXaGl0ZVNwYWNlJyAnJiYmUHVuY3R1YXRvcic9JyYmJldoaXRlU3BhY2UnICcmJiZOdW1lcmljTGl0ZXJhbCc5JyYmJlB1bmN0dWF0b3InOycmJiZlb2YmJiZcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzc0ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgJ3ZhciBhID0gOTsnICAgICAgICAgICAgICAgICAgKSwgXCImJiZJZGVudGlmaWVyTmFtZSd2YXInJiYmSWRlbnRpZmllck5hbWUnYScmJiZQdW5jdHVhdG9yJz0nJiYmTnVtZXJpY0xpdGVyYWwnOScmJiZQdW5jdHVhdG9yJzsnJiYmZW9mJiYmXCJcbiAgICAgICAgQGVxICggzqlrdnJ0X183NSA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgICdcInlcIicgICAgICAgICAgICAgICAgICAgICAgICAgKSwgXCJcIlwiJiYmU3RyaW5nTGl0ZXJhbCdcInlcIicmJiZlb2YmJiZcIlwiXCJcbiAgICAgICAgQGVxICggzqlrdnJ0X183NiA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwiJ3knXCIgICAgICAgICAgICAgICAgICAgICAgICAgKSwgXCImJiZTdHJpbmdMaXRlcmFsJ1xcXFwneVxcXFwnJyYmJmVvZiYmJlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzcgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcImBBJHsneSd9WmBcIiAgICAgICAgICAgICAgICAgICksIFwiJiYmVGVtcGxhdGVIZWFkJ2BBJHsnJiYmU3RyaW5nTGl0ZXJhbCdcXFxcJ3lcXFxcJycmJiZUZW1wbGF0ZVRhaWwnfVpgJyYmJmVvZiYmJlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzggPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcImZgQSR7J3knfVpgXCIgICAgICAgICAgICAgICAgICksIFwiJiYmSWRlbnRpZmllck5hbWUnZicmJiZUZW1wbGF0ZUhlYWQnYEEkeycmJiZTdHJpbmdMaXRlcmFsJ1xcXFwneVxcXFwnJyYmJlRlbXBsYXRlVGFpbCd9WmAnJiYmZW9mJiYmXCJcbiAgICAgICAgQGVxICggzqlrdnJ0X183OSA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwiYEEke2B5YH1aYFwiICAgICAgICAgICAgICAgICAgKSwgXCImJiZUZW1wbGF0ZUhlYWQnYEEkeycmJiZOb1N1YnN0aXR1dGlvblRlbXBsYXRlJ2B5YCcmJiZUZW1wbGF0ZVRhaWwnfVpgJyYmJmVvZiYmJlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fODAgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcImBBJHtyZXF1aXJlKGB5YCl9WmBcIiAgICAgICAgICksIFwiJiYmVGVtcGxhdGVIZWFkJ2BBJHsnJiYmSWRlbnRpZmllck5hbWUncmVxdWlyZScmJiZQdW5jdHVhdG9yJygnJiYmTm9TdWJzdGl0dXRpb25UZW1wbGF0ZSdgeWAnJiYmUHVuY3R1YXRvcicpJyYmJlRlbXBsYXRlVGFpbCd9WmAnJiYmZW9mJiYmXCJcbiAgICAgICAgQGVxICggzqlrdnJ0X184MSA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwicmVxdWlyZSA9IDc3N1wiICAgICAgICAgICAgICAgKSwgXCImJiZJZGVudGlmaWVyTmFtZSdyZXF1aXJlJyYmJlB1bmN0dWF0b3InPScmJiZOdW1lcmljTGl0ZXJhbCc3NzcnJiYmZW9mJiYmXCJcbiAgICAgICAgQGVxICggzqlrdnJ0X184MiA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwicmVxdWlyZSA9IDc3NyAvLyBmb286IGJhclwiICAgKSwgXCImJiZJZGVudGlmaWVyTmFtZSdyZXF1aXJlJyYmJlB1bmN0dWF0b3InPScmJiZOdW1lcmljTGl0ZXJhbCc3NzcnJiYmZW9mJiYmXCJcbiAgICAgICAgQGVxICggzqlrdnJ0X184MyA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwicmVxdWlyZSA9IDc3NzsgLy8gZm9vOiBiYXJcIiAgKSwgXCImJiZJZGVudGlmaWVyTmFtZSdyZXF1aXJlJyYmJlB1bmN0dWF0b3InPScmJiZOdW1lcmljTGl0ZXJhbCc3NzcnJiYmUHVuY3R1YXRvcic7JyYmJmVvZiYmJlwiXG4gICAgICAgICMgQGVxICggzqlrdnJ0X184NCA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwidHJ1ZVwiICAgICAgICAgICAgICAgICksIG51bGxcbiAgICAgICAgIyBAZXEgKCDOqWt2cnRfXzg1ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJmYWxzZVwiICAgICAgICAgICAgICAgKSwgbnVsbFxuICAgICAgICAjIEBlcSAoIM6pa3ZydF9fODYgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcInVuZGVmaW5lZFwiICAgICAgICAgICApLCBudWxsXG4gICAgICAgICMgQGVxICggzqlrdnJ0X184NyA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwibnVsbFwiICAgICAgICAgICAgICAgICksIG51bGxcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzb3VyY2UgPSBcImNvbnN0IHsgZCwgfSA9IHJlcXVpcmUoICdzb21lLW1vZHVsZScgKTsgLyogcmVxdWlyZSggJ290aGVyLW1vZHVsZScgKSAqL1wiXG4gICAgICAgIGZvciB0b2tlbiBmcm9tIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyBzb3VyY2VcbiAgICAgICAgICBpbmZvICfOqWt2cnRfXzg4JywgZlwiI3t0b2tlbi50eXBlfTo+MjBjOyAje3JwciB0b2tlbi52YWx1ZX1cIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzg5ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyBzb3VyY2UgKSwgXCImJiZJZGVudGlmaWVyTmFtZSdjb25zdCcmJiZQdW5jdHVhdG9yJ3snJiYmSWRlbnRpZmllck5hbWUnZCcmJiZQdW5jdHVhdG9yJywnJiYmUHVuY3R1YXRvcid9JyYmJlB1bmN0dWF0b3InPScmJiZJZGVudGlmaWVyTmFtZSdyZXF1aXJlJyYmJlB1bmN0dWF0b3InKCcmJiZTdHJpbmdMaXRlcmFsJ1xcXFwnc29tZS1tb2R1bGVcXFxcJycmJiZQdW5jdHVhdG9yJyknJiYmUHVuY3R1YXRvcic7JyYmJmVvZiYmJlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVxdWlyZV9wYXJzZV9yZXF1aXJlX3N0YXRlbWVudHM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IHdhbGtfcmVxdWlyZV9zdGF0ZW1lbnRzLCAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3BhcnNlX3JlcXVpcmVfc3RhdGVtZW50cygpXG4gICAgICB7IHdhbGtfanNfdG9rZW5zLFxuICAgICAgICB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMsXG4gICAgICAgIHN1bW1hcml6ZSwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3dhbGtfanNfdG9rZW5zKClcbiAgICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgICAgRlMgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cnRfXzkwID0gLT4gdHlwZV9vZiB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cyApLCAnZnVuY3Rpb24nXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHBhdGggICAgICAgICAgPSBQQVRILnJlc29sdmUgX19kaXJuYW1lLCAnLi4vLi4vLi4vYXNzZXRzL2JyaWNhYnJhYy9wYXJzZS1yZXF1aXJlLXN0YXRlbWVudHMvdGVzdC1iYXNpY3MuanMnXG4gICAgICAgIHdvdWxkYmVfcGF0aCAgPSBfX2ZpbGVuYW1lXG4gICAgICAgIHNvdXJjZSAgICAgICAgPSAoIEZTLnJlYWRGaWxlU3luYyBwYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnLCB9IClcbiAgICAgICAgIyBmb3IgZCBmcm9tIHdhbGtfcmVxdWlyZV9zdGF0ZW1lbnRzIHBhdGhcbiAgICAgICAgIyAgIGRlYnVnICfOqWt2cnRfXzkxJywgZFxuICAgICAgICB0b2tlbnMgICAgICAgID0gd2Fsa19yZXF1aXJlX3N0YXRlbWVudHMgeyBwYXRoOiB3b3VsZGJlX3BhdGgsIHNvdXJjZSwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzkyID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogNSwgZGlzcG9zaXRpb246ICducG0nLCBzZWxlY3RvcjogJ2d1eScsIGFubm90YXRpb246ICdzZW12ZXI6MC4zLjQnLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF9fOTMgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiAxMiwgZGlzcG9zaXRpb246ICdpbnNpZGUnLCBzZWxlY3RvcjogJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF9fOTQgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiAxNiwgZGlzcG9zaXRpb246ICdpbnNpZGUnLCBzZWxlY3RvcjogJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzk1ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMjUsIGRpc3Bvc2l0aW9uOiAnaW5zaWRlJywgc2VsZWN0b3I6ICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF9fOTYgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiAxNjIsIGRpc3Bvc2l0aW9uOiAnaW5zaWRlJywgc2VsZWN0b3I6ICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF9fOTcgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiAxNjUsIGRpc3Bvc2l0aW9uOiAnbm9kZScsIHNlbGVjdG9yOiAnbm9kZTpwYXRoJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzk4ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMTY2LCBkaXNwb3NpdGlvbjogJ25vZGUnLCBzZWxlY3RvcjogJ25vZGU6b3MnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF9fOTkgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiAxNjcsIGRpc3Bvc2l0aW9uOiAnbm9kZScsIHNlbGVjdG9yOiAnbm9kZTpmcycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzEwMCA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDM5OSwgZGlzcG9zaXRpb246ICdpbnNpZGUnLCBzZWxlY3RvcjogJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzEwMSA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDQ2NSwgZGlzcG9zaXRpb246ICdub2RlJywgc2VsZWN0b3I6ICdub2RlOmZzJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTAyID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogNDY2LCBkaXNwb3NpdGlvbjogJ2luc2lkZScsIHNlbGVjdG9yOiAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTAzID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICd3YXJuaW5nJywgbWVzc2FnZTogXCJpZ25vcmluZyBwb3NzaWJsZSBgcmVxdWlyZWAgb24gbGluZSA1NTQ6ICcgICAgICAgIHJlcXVpcmU7J1wiLCBsaW5lOiAnICAgICAgICByZXF1aXJlOycsIGxpbmVfbnI6IDU1NCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMDQgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3dhcm5pbmcnLCBtZXNzYWdlOiBcImlnbm9yaW5nIHBvc3NpYmxlIGByZXF1aXJlYCBvbiBsaW5lIDU1NTogJyAgICAgICAgcmVxdWlyZSh0cnVlKTsnXCIsIGxpbmU6ICcgICAgICAgIHJlcXVpcmUodHJ1ZSk7JywgbGluZV9ucjogNTU1IH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzEwNSA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDU1NiwgZGlzcG9zaXRpb246ICducG0nLCBzZWxlY3RvcjogJ3BrZyMxJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTA2ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogNTU3LCBkaXNwb3NpdGlvbjogJ25wbScsIHNlbGVjdG9yOiAncGtnIzInLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMDcgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3dhcm5pbmcnLCBtZXNzYWdlOiBcImlnbm9yaW5nIHBvc3NpYmxlIGByZXF1aXJlYCBvbiBsaW5lIDU1ODogJyAgICAgICAgcmV0dXJuIHJlcXVpcmUoIGBwa2cjM2AgKyBcXFxcJ3N1ZmZpeFxcXFwnICk7J1wiLCBsaW5lOiBcIiAgICAgICAgcmV0dXJuIHJlcXVpcmUoIGBwa2cjM2AgKyAnc3VmZml4JyApO1wiLCBsaW5lX25yOiA1NTggfVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTA4ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogNTY2LCBkaXNwb3NpdGlvbjogJ2luc2lkZScsIHNlbGVjdG9yOiAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTA5ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICd3YXJuaW5nJywgbWVzc2FnZTogXCJpZ25vcmluZyBwb3NzaWJsZSBgcmVxdWlyZWAgb24gbGluZSA2MDI6ICcgIGlmIChtb2R1bGUgPT09IHJlcXVpcmUubWFpbikgeydcIiwgbGluZTogJyAgaWYgKG1vZHVsZSA9PT0gcmVxdWlyZS5tYWluKSB7JywgbGluZV9ucjogNjAyIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzExMCA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDYyNiwgZGlzcG9zaXRpb246ICdvdXRzaWRlJywgc2VsZWN0b3I6ICcuLi8uLi8uLi8uLi93aGF0ZXZlcicsIGFubm90YXRpb246IG51bGwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTJ1xuICAgICAgICBmb3IgZCBmcm9tIHdhbGtfcmVxdWlyZV9zdGF0ZW1lbnRzIHsgc291cmNlOiAncmVxdWlyZShcInh4eFwiKTsnLCB9XG4gICAgICAgICAgaW5mbyAnzqlrdnJ0XzExMScsIGRcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICAgIGZvciBkIGZyb20gd2Fsa19yZXF1aXJlX3N0YXRlbWVudHMgeyBzb3VyY2U6ICdyZXF1aXJlKFwieHh4XCIpIC8vIHNlbXZlcjogNS42LjcnLCB9XG4gICAgICAgICAgdXJnZSAnzqlrdnJ0XzExMicsIGRcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICAgIGZvciB0b2tlbiBmcm9tIHdhbGtfanNfdG9rZW5zICdyZXF1aXJlKFwieHh4XCIpOyAvLyBzZW12ZXI6IDUuNi43J1xuICAgICAgICAgIGhlbHAgJ86pa3ZydF8xMTMnLCB0b2tlblxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgZm9yIGQgZnJvbSB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cyB7IHNvdXJjZTogJ3JlcXVpcmUoXCJ4eHhcIik7IC8vIHNlbXZlcjogNS42LjcnLCB9XG4gICAgICAgICAgaW5mbyAnzqlrdnJ0XzExNCcsIGRcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVxdWlyZV9ycHJfc3RyaW5nOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IHJwcl9zdHJpbmcsICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9ycHJfc3RyaW5nKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJ0XzExNSA9IC0+IHR5cGVfb2YgcnByX3N0cmluZyApLCAnZnVuY3Rpb24nXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMTYgPSAtPiBycHJfc3RyaW5nICcnICAgICAgICksIFwiXCJcIicnXCJcIlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMTcgPSAtPiBycHJfc3RyaW5nICdcIicgICAgICApLCBcIlwiXCInXCInXCJcIlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMTggPSAtPiBycHJfc3RyaW5nIFwiJ1wiICAgICAgKSwgXCJcIlwiJ1xcXFwnJ1wiXCJcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfMTE5ID0gLT4gcnByX3N0cmluZyAncG9wJyAgICApLCBcIlwiXCIncG9wJ1wiXCJcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfMTIwID0gLT4gcnByX3N0cmluZyAnXCJwb3BcIicgICksIFwiXCJcIidcInBvcFwiJ1wiXCJcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfMTIxID0gLT4gcnByX3N0cmluZyBcIidwb3AnXCIgICksIFwiXCJcIidcXFxcJ3BvcFxcXFwnJ1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlcXVpcmVfcGF0aF90b29sczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBpc19pbnNpZGUsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfcGF0aF90b29scygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZydF8xMjIgPSAtPiB0eXBlX29mIGlzX2luc2lkZSApLCAnZnVuY3Rpb24nXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIEB0aHJvd3MgKCDOqWt2cnRfMTIzID0gLT4gaXNfaW5zaWRlICcuLi9wYXRoL3RvL2ZpbGUnLCAgICAgICAnLycgICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhbiBhYnNvbHV0ZSBwYXRoIGFzIGFuY2hvci9cbiAgICAgICAgQHRocm93cyAoIM6pa3ZydF8xMjQgPSAtPiBpc19pbnNpZGUgJy4uL3BhdGgvdG8vZmlsZScsICAgICAgICd3YXQnICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGFuIGFic29sdXRlIHBhdGggYXMgYW5jaG9yL1xuICAgICAgICBAdGhyb3dzICggzqlrdnJ0XzEyNSA9IC0+IGlzX2luc2lkZSAnLi4vcGF0aC90by9maWxlJywgICAgICAgJy4uL3BhdGgvdG8vZmlsZScgICApLCAvZXhwZWN0ZWQgYW4gYWJzb2x1dGUgcGF0aCBhcyBhbmNob3IvXG4gICAgICAgIEB0aHJvd3MgKCDOqWt2cnRfMTI2ID0gLT4gaXNfaW5zaWRlICdwYXRoL3RvL2ZpbGUnLCAgICAgICAgICAnLi4vcGF0aC90by9maWxlJyAgICksIC9leHBlY3RlZCBhbiBhYnNvbHV0ZSBwYXRoIGFzIGFuY2hvci9cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgICAgICggzqlrdnJ0XzEyNyA9IC0+IGlzX2luc2lkZSAnLycsICAgICAgICAgICAgICAgICAgICAgJy9wYXRoL3RvL2ZpbGUnICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTI4ID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlJywgICAgICAgICAnL3BhdGgvdG8vZmlsZScgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMjkgPSAtPiBpc19pbnNpZGUgJy9wYXRoL3RvL2ZpbGUnLCAgICAgICAgICdvb3BzJyAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAgICggzqlrdnJ0XzEzMCA9IC0+IGlzX2luc2lkZSAnL3BhdGgvLi4vZmlsZScsICAgICAgICAgJy9maWxlJyAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTMxID0gLT4gaXNfaW5zaWRlICcvcGF0aC8uLi9maWxlLy4nLCAgICAgICAnL2ZpbGUnICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMzIgPSAtPiBpc19pbnNpZGUgJy9wYXRoLy4uL2ZpbGUvLi8uLy4vLicsICcvZmlsZScgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAgICggzqlrdnJ0XzEzMyA9IC0+IGlzX2luc2lkZSAnL3BhdGgvdG8vZmlsZScsICAgICAgICAgJy5cXFxcLi9vb3BzJyAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMzQgPSAtPiBpc19pbnNpZGUgJy9wYXRoL3RvL2ZpbGUnLCAgICAgICAgICcuLlxcXFwvb29wcycgICAgICAgICApLCB0cnVlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMzUgPSAtPiBpc19pbnNpZGUgJy9wYXRoL3RvL2ZpbGUvd2F0JywgICAgICcvcGF0aC90by9maWxlJyAgICAgKSwgZmFsc2VcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMzYgPSAtPiBpc19pbnNpZGUgJy9wYXRoL3RvL2ZpbGUnLCAgICAgICAgICcuLi9vb3BzJyAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMzcgPSAtPiBpc19pbnNpZGUgJy9wYXRoL3RvL2ZpbGUnLCAgICAgICAgICcvb29wcycgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMzggPSAtPiBpc19pbnNpZGUgJy9wYXRoL3RvL2ZpbGUnLCAgICAgICAgICcvJyAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMzkgPSAtPiBpc19pbnNpZGUgJy9wYXRoLy4uL2ZpbGUnLCAgICAgICAgICcvcGF0aCcgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX2pldHN0cmVhbTogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgICQsXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cnRfMTQwID0gLT4gdHlwZV9vZiAoIG5ldyBKZXRzdHJlYW0oKSApICAgICAgICAgICAgICApLCAnb2JqZWN0J1xuICAgICAgQGVxICggzqlrdnJ0XzE0MSA9IC0+IHR5cGVfb2YgKCBuZXcgSmV0c3RyZWFtKCkgKS53YWxrICdkYXRhJyAgKSwgJ2dlbmVyYXRvcidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZmlyc3QgICAgID0gU3ltYm9sICdmaXJzdCdcbiAgICAgICAgbGFzdCAgICAgID0gU3ltYm9sICdsYXN0J1xuICAgICAgICBqZXQgICAgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWFwXzE0MiA9IC0+IGpldC5sZW5ndGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAwXG4gICAgICAgIEBlcSAoIM6pYXBfMTQzID0gLT4gamV0LmlzX2VtcHR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB3YXRjaGVkXzEgPSBbXVxuICAgICAgICB3YXRjaGVkXzIgPSBbXVxuICAgICAgICB3YXRjaGVkXzMgPSBbXVxuICAgICAgICB3YXRjaGVkXzQgPSBbXVxuICAgICAgICBqZXQucHVzaCB3YXRjaCA9ICggZCAgICAgICAgICAgICAgKSAtPiBoZWxwICfOqWFwXzE0NCcsIHJwciBkOyB3YXRjaGVkXzEucHVzaCBkXG4gICAgICAgIGpldC5wdXNoIHVwcGVyID0gKCBkICAgICAgICAgICAgICApIC0+IHlpZWxkIGQudG9VcHBlckNhc2UoKVxuICAgICAgICBqZXQucHVzaCB3YXRjaCA9ICggZCAgICAgICAgICAgICAgKSAtPiBpbmZvICfOqWFwXzE0NScsIHJwciBkOyB3YXRjaGVkXzIucHVzaCBkXG4gICAgICAgIGpldC5wdXNoIGV4ICAgID0gKCBkLCBtYXJrID0gJyEnICApIC0+IHlpZWxkIGQgKyBtYXJrXG4gICAgICAgIGpldC5wdXNoIHdhdGNoID0gKCBkICAgICAgICAgICAgICApIC0+IGhlbHAgJ86pYXBfMTQ2JywgcnByIGQ7IHdhdGNoZWRfMy5wdXNoIGRcbiAgICAgICAgamV0LnB1c2ggJCB7IGZpcnN0LCBsYXN0LCB9LCBzdXJyb3VuZCA9ICggZCApIC0+XG4gICAgICAgICAgcmV0dXJuIHlpZWxkIFwiXCJcIkxldCdzIHNheTogXFxcIlwiXCJcIiAgaWYgZCBpcyBmaXJzdFxuICAgICAgICAgIHJldHVybiB5aWVsZCAnXCIuJyAgICAgICAgICAgICAgICAgaWYgZCBpcyBsYXN0XG4gICAgICAgICAgeWllbGQgZFxuICAgICAgICBqZXQucHVzaCB3YXRjaCA9ICggZCAgICAgICAgICAgICAgKSAtPiB1cmdlICfOqWFwXzE0NycsIHJwciBkOyB3YXRjaGVkXzQucHVzaCBkXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlhcF8xNDggPSAtPiBqZXQubGVuZ3RoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCA3XG4gICAgICAgIEBlcSAoIM6pYXBfMTQ5ID0gLT4gamV0LmlzX2VtcHR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICAgQGVxICggzqlhcF8xNTAgPSAtPiBbICggZCBmb3IgZCBmcm9tIGpldC53YWxrICdoaWRleS1obycgKS4uLiwgXSAgICAgICAgICApLCBbIFwiXCJcIkxldCdzIHNheTogXFxcIlwiXCJcIiwgJ0hJREVZLUhPIScsICdcIi4nIF1cbiAgICAgICAgQGVxICggzqlhcF8xNTEgPSAtPiB3YXRjaGVkXzEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbICdoaWRleS1obycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICBAZXEgKCDOqWFwXzE1MiA9IC0+IHdhdGNoZWRfMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgJ0hJREVZLUhPJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgIEBlcSAoIM6pYXBfMTUzID0gLT4gd2F0Y2hlZF8zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAnSElERVktSE8hJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgQGVxICggzqlhcF8xNTQgPSAtPiB3YXRjaGVkXzQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIFwiXCJcIkxldCdzIHNheTogXFxcIlwiXCJcIiwgJ0hJREVZLUhPIScsICdcIi4nICAgXVxuICAgICAgICBAZXEgKCDOqWFwXzE1NSA9IC0+IFsgKCBkIGZvciBkIGZyb20gamV0LndhbGsgJ2hpZGV5LWhvJyApLi4uLCBdLmpvaW4gJycgICksIFwiXCJcIkxldCdzIHNheTogXCJISURFWS1ITyFcIi5cIlwiXCJcbiAgICAgICAgQGVxICggzqlhcF8xNTYgPSAtPiAoICAgZCBmb3IgZCBmcm9tIGpldC5ydW4gICdoaWRleS1obycgICAgICAgKS5qb2luICcnICApLCBcIlwiXCJMZXQncyBzYXk6IFwiSElERVktSE8hXCIuXCJcIlwiXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGpldCAgICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGpldC5wdXNoIGFkZF8xID0gKCBkICkgLT4geWllbGQgZCArIDFcbiAgICAgICAgamV0LnB1c2ggYWRkXzEgPSAoIGQgKSAtPiB5aWVsZCBkICsgMVxuICAgICAgICBqZXQucHVzaCBhZGRfMSA9ICggZCApIC0+IHlpZWxkIGQgKyAxXG4gICAgICAgIGpldC5wdXNoIGFkZF8xID0gKCBkICkgLT4geWllbGQgZCArIDFcbiAgICAgICAgamV0LnB1c2ggYWRkXzEgPSAoIGQgKSAtPiB5aWVsZCBkICsgMVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pYXBfMTU3ID0gLT4gWyAoIGQgZm9yIGQgZnJvbSBqZXQud2FsayAwICkuLi4sIF0gICAgICAgICAgKSwgWyA1LCBdXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgICMjIyBlbXB0eSBwaXBlbGluZSBpcyBhIHBpcGVsaW5lIHdpdGhvdXQgdHJhbnNmb3Jtcywgc28gZGF0YSBpcyBwYXNzZWQgdGhyb3VnaCB1bnRyYW5zZm9ybWVkOiAjIyNcbiAgICAgICAgQGVxICggzqlhcF8xNTggPSAtPiBbICggKCBuZXcgSmV0c3RyZWFtKCkgKS53YWxrICdkYXRhJyApLi4uLCAgXSApLCBbICdkYXRhJywgXVxuICAgICAgICBAZXEgKCDOqWFwXzE1OSA9IC0+ICAgICAoIG5ldyBKZXRzdHJlYW0oKSApLnJ1biAgJ2RhdGEnICAgICAgICAgICksIFsgJ2RhdGEnLCBdXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGNvbGxlY3RvciA9IFtdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcF8xID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIHBfMS5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMS10MSc7IHlpZWxkIGQgKyAnIOKEliAxJ1xuICAgICAgICBwXzEucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDEtdDInOyB5aWVsZCBkICsgJyDihJYgMidcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBwXzIgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgcF8yLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AyLXQxJzsgeWllbGQgZCArICcg4oSWIDMnXG4gICAgICAgIHBfMi5wdXNoIHBfMVxuICAgICAgICBwXzIucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDItdDInOyB5aWVsZCBkICsgJyDihJYgNCdcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBwXzMgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgcF8zLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AzLXQxJzsgeWllbGQgZCArICcg4oSWIDUnXG4gICAgICAgIHBfMy5wdXNoIHBfMlxuICAgICAgICBwXzMucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDMtdDInOyB5aWVsZCBkICsgJyDihJYgNidcbiAgICAgICAgQGVxICggzqlhcF8xNjAgPSAtPiBwXzMucnVuICAgICAgICAnbXktZGF0YScgKSwgWyAnbXktZGF0YSDihJYgNSDihJYgMyDihJYgMSDihJYgMiDihJYgNCDihJYgNicgLCBdXG4gICAgICAgIEBlcSAoIM6pYXBfMTYxID0gLT4gY29sbGVjdG9yICAgICAgICAgICAgICAgICksIFsgJ3AzLXQxJywgJ3AyLXQxJywgJ3AxLXQxJywgJ3AxLXQyJywgJ3AyLXQyJywgJ3AzLXQyJyBdXG4gICAgICAgIEBlcSAoIM6pYXBfMTYyID0gLT4gcF8zLmdldF9maXJzdCAgJ215LWRhdGEnICksICdteS1kYXRhIOKEliA1IOKEliAzIOKEliAxIOKEliAyIOKEliA0IOKEliA2J1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmaXJzdCAgICAgICAgID0gU3ltYm9sICdmaXJzdCdcbiAgICAgICAgbGFzdCAgICAgICAgICA9IFN5bWJvbCAnbGFzdCdcbiAgICAgICAgamV0ICAgICAgICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBnICAgICAgICAgICAgID0gKCBkICkgLT5cbiAgICAgICAgICB1cmdlICfOqWt2cnRfMTYzJywgZFxuICAgICAgICAgIGluZm8gJ86pa3ZydF8xNjQnLCBcInlpZWxkIGZvciBmaXJzdFwiIGlmIGQgaXMgZmlyc3RcbiAgICAgICAgICB5aWVsZCAwIGlmIGQgaXMgZmlyc3RcbiAgICAgICAgICBpbmZvICfOqWt2cnRfMTY1JywgXCJ5aWVsZCBmb3IgZGF0YVwiIHVubGVzcyBkIGluIFsgZmlyc3QsIGxhc3QsIF1cbiAgICAgICAgICB5aWVsZCBkICogMiB1bmxlc3MgZCBpbiBbIGZpcnN0LCBsYXN0LCBdXG4gICAgICAgICAgaW5mbyAnzqlrdnJ0XzE2NicsIFwieWllbGQgZm9yIGxhc3RcIiBpZiBkIGlzIGxhc3RcbiAgICAgICAgICB5aWVsZCAxIGlmIGQgaXMgbGFzdFxuICAgICAgICB0cmFuc2Zvcm1fMSAgID0gJCB7IGZpcnN0LCAgfSwgZ1xuICAgICAgICB0cmFuc2Zvcm1fMiAgID0gJCB7IGxhc3QsICAgfSwgZ1xuICAgICAgICBqZXQucHVzaCB0cmFuc2Zvcm1fMVxuICAgICAgICBqZXQucHVzaCB0cmFuc2Zvcm1fMlxuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzE2NycsIGpldFxuICAgICAgICB3aGlzcGVyICfOqWt2cnRfMTY4JywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgQGVxICggzqlrdnJ0XzE2OSA9IC0+IHRyYW5zZm9ybV8xWyBpbnRlcm5hbHMuQ0ZHIF0gKSwgeyBmaXJzdCwgIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzE3MCA9IC0+IHRyYW5zZm9ybV8yWyBpbnRlcm5hbHMuQ0ZHIF0gKSwgeyBsYXN0LCAgIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzE3MSA9IC0+IGpldC5ydW4gMjIgICAgICAgICAgICAgICAgKSwgWyAwLCAxLCA4OCwgMSwgXVxuICAgICAgICB3aGlzcGVyICfOqWt2cnRfMTcyJywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT4gIyMjIHNhbWUgYXMgYWJvdmUgYnV0IHRoZSB0cmFuc2Zvcm1zIGFyZSBzZXBlcmF0ZSAjIyNcbiAgICAgICAgZmlyc3QgICAgICAgICA9IFN5bWJvbCAnZmlyc3QnXG4gICAgICAgIGxhc3QgICAgICAgICAgPSBTeW1ib2wgJ2xhc3QnXG4gICAgICAgIGpldCAgICAgICAgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgZzEgICAgICAgICAgICA9ICggZCApIC0+XG4gICAgICAgICAgdXJnZSAnzqlrdnJ0XzE3MyBnMScsIGRcbiAgICAgICAgICBpbmZvICfOqWt2cnRfMTc0IGcxJywgXCJ5aWVsZCBmb3IgZmlyc3RcIiBpZiBkIGlzIGZpcnN0XG4gICAgICAgICAgeWllbGQgMCBpZiBkIGlzIGZpcnN0XG4gICAgICAgICAgaW5mbyAnzqlrdnJ0XzE3NSBnMScsIFwieWllbGQgZm9yIGRhdGFcIiB1bmxlc3MgZCBpbiBbIGZpcnN0LCBsYXN0LCBdXG4gICAgICAgICAgeWllbGQgZCAqIDIgdW5sZXNzIGQgaW4gWyBmaXJzdCwgbGFzdCwgXVxuICAgICAgICAgIGluZm8gJ86pa3ZydF8xNzYgZzEnLCBcInlpZWxkIGZvciBsYXN0XCIgaWYgZCBpcyBsYXN0XG4gICAgICAgICAgeWllbGQgMSBpZiBkIGlzIGxhc3RcbiAgICAgICAgZzIgICAgICAgICAgICA9ICggZCApIC0+XG4gICAgICAgICAgdXJnZSAnzqlrdnJ0XzE3NyBnMicsIGRcbiAgICAgICAgICBpbmZvICfOqWt2cnRfMTc4IGcyJywgXCJ5aWVsZCBmb3IgZmlyc3RcIiBpZiBkIGlzIGZpcnN0XG4gICAgICAgICAgeWllbGQgMCBpZiBkIGlzIGZpcnN0XG4gICAgICAgICAgaW5mbyAnzqlrdnJ0XzE3OSBnMicsIFwieWllbGQgZm9yIGRhdGFcIiB1bmxlc3MgZCBpbiBbIGZpcnN0LCBsYXN0LCBdXG4gICAgICAgICAgeWllbGQgZCAqIDIgdW5sZXNzIGQgaW4gWyBmaXJzdCwgbGFzdCwgXVxuICAgICAgICAgIGluZm8gJ86pa3ZydF8xODAgZzInLCBcInlpZWxkIGZvciBsYXN0XCIgaWYgZCBpcyBsYXN0XG4gICAgICAgICAgeWllbGQgMSBpZiBkIGlzIGxhc3RcbiAgICAgICAgdHJhbnNmb3JtXzEgICA9ICQgeyBmaXJzdCwgIH0sIGcxXG4gICAgICAgIHRyYW5zZm9ybV8yICAgPSAkIHsgbGFzdCwgICB9LCBnMlxuICAgICAgICBqZXQucHVzaCB0cmFuc2Zvcm1fMVxuICAgICAgICBqZXQucHVzaCB0cmFuc2Zvcm1fMlxuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzE4MScsIGpldFxuICAgICAgICB3aGlzcGVyICfOqWt2cnRfMTgyJywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgQGVxICggzqlrdnJ0XzE4MyA9IC0+IHRyYW5zZm9ybV8xWyBpbnRlcm5hbHMuQ0ZHIF0gKSwgeyBmaXJzdCwgIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzE4NCA9IC0+IHRyYW5zZm9ybV8yWyBpbnRlcm5hbHMuQ0ZHIF0gKSwgeyBsYXN0LCAgIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzE4NSA9IC0+IGpldC5ydW4gMjIgICAgICAgICAgICAgICAgKSwgWyAwLCAxLCA4OCwgMSwgXVxuICAgICAgICB3aGlzcGVyICfOqWt2cnRfMTg2JywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgamV0c3RyZWFtX3NlbGVjdG9yczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBKZXRzdHJlYW0sXG4gICAgICAgICQsXG4gICAgICAgIGludGVybmFscywgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9qZXRzdHJlYW0oKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIEBlcSAoIM6pa3ZydF8xODcgPSAtPiB0eXBlX29mICggbmV3IEpldHN0cmVhbSgpICkgICAgICAgICAgICAgICksICdvYmplY3QnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHN0cmVhbV9pdGVtcyA9IFtcbiAgICAgICAgICBTeW1ib2wgJ3N0YXJ0J1xuICAgICAgICAgIFN5bWJvbC5mb3IgJ3N0YXJ0J1xuICAgICAgICAgIFN5bWJvbCAnZW5kJ1xuICAgICAgICAgIFN5bWJvbC5mb3IgJ2VuZCdcbiAgICAgICAgICA3Ni45XG4gICAgICAgICAgXCJNZXhpY29cIlxuICAgICAgICAgIF1cbiAgICAgICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgICAgICB7IHByb2JlOiBudWxsLCAgICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJycgICAgICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJycsICAgICAgICAgICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IGZhbHNlLCAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICAgeyBwcm9iZTogW10sICAgICAgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICAgICAgICAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJyAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcnLCAgICAgICAgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBmYWxzZSwgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAgIHsgcHJvYmU6IFsgW10gXSwgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAgICAgICAgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnJywgICAgICAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgICB7IHByb2JlOiBbIFsgJycgXSBdLCAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJycgICAgICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdkYXRhIyonICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJycsICAgICAgICAgICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IGZhbHNlLCAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICAgeyBwcm9iZTogWyAnZGF0YScsICdjdWUnIF0sICAgICAgICAgIHNlbF9saXN0OiBbICdkYXRhJywgJ2N1ZScgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJywgJ2N1ZSMqJyAgICAgIF0sIHNlbF9ycHI6ICdkYXRhLCBjdWUnLCAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiB0cnVlLCAgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiB0cnVlLCAgfVxuICAgICAgICAgIHsgcHJvYmU6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBzZWxfbGlzdDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIG5ybV9zZWw6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBzZWxfcnByOiAnY3VlI3N0YXJ0LCBjdWUjZW5kJywgZGF0YTogdHJ1ZSwgY3VlczogWyAnc3RhcnQnLCAnZW5kJyBdLCAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgICB7IHByb2JlOiBbICcjc3RhcnQnLCAnI2VuZCcgXSwgICAgICAgc2VsX2xpc3Q6IFsgJyNzdGFydCcsICcjZW5kJyAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgc2VsX3JwcjogJyNzdGFydCwgI2VuZCcsICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IFsgJ3N0YXJ0JywgJ2VuZCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICAgeyBwcm9iZTogJ2RhdGEsIGN1ZScsICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdkYXRhJywgJ2N1ZScgICAgICAgICAgXSwgbnJtX3NlbDogWyAnZGF0YSMqJywgJ2N1ZSMqJyAgICAgIF0sIHNlbF9ycHI6ICdkYXRhLCBjdWUnLCAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiB0cnVlLCAgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiB0cnVlLCAgfVxuICAgICAgICAgIHsgcHJvYmU6ICdkYXRhJywgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnZGF0YScgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnZGF0YScsICAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgICB7IHByb2JlOiAnY3VlI2ZvbyNiYXInLCAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJ2N1ZSNmb28jYmFyJyAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjZm9vI2JhcicgICAgICAgICAgXSwgc2VsX3JwcjogJ2N1ZSNmb28jYmFyJywgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IFsgJ2ZvbyNiYXInIF0sICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICAgeyBwcm9iZTogJ2N1ZScsICAgICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdjdWUnICAgICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlIyonICAgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICdjdWUnLCAgICAgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiB0cnVlLCAgICAgICAgICAgICAgICBhY2NlcHRfYWxsOiB0cnVlLCAgfVxuICAgICAgICAgIHsgcHJvYmU6ICdjdWUjc3RhcnQsY3VlI2VuZCcsICAgICAgICBzZWxfbGlzdDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIG5ybV9zZWw6IFsgJ2N1ZSNzdGFydCcsICdjdWUjZW5kJyBdLCBzZWxfcnByOiAnY3VlI3N0YXJ0LCBjdWUjZW5kJywgZGF0YTogdHJ1ZSwgY3VlczogWyAnc3RhcnQnLCAnZW5kJyBdLCAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgICB7IHByb2JlOiAnY3VlI3N0YXJ0JywgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJ2N1ZSNzdGFydCcgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnICAgICAgICAgICAgXSwgc2VsX3JwcjogJ2N1ZSNzdGFydCcsICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IFsgJ3N0YXJ0JyBdLCAgICAgICAgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICAgeyBwcm9iZTogJ2N1ZSNlbmQnLCAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICdjdWUjZW5kJyAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI2VuZCcgICAgICAgICAgICAgIF0sIHNlbF9ycHI6ICdjdWUjZW5kJywgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBbICdlbmQnIF0sICAgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAgIHsgcHJvYmU6ICcnLCAgICAgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnJyAgICAgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnJywgICAgICAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgICB7IHByb2JlOiAnI3N0YXJ0LCNlbmQnLCAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyNzdGFydCcsICcjZW5kJyAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgc2VsX3JwcjogJyNzdGFydCwgI2VuZCcsICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IFsgJ3N0YXJ0JywgJ2VuZCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICAgeyBwcm9iZTogJyNzdGFydCcsICAgICAgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcjc3RhcnQnICAgICAgICAgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI3N0YXJ0JyAgICAgICAgICAgIF0sIHNlbF9ycHI6ICcjc3RhcnQnLCAgICAgICAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBbICdzdGFydCcgXSwgICAgICAgICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAgIHsgcHJvYmU6ICcjZm9vI2JhcicsICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnI2ZvbyNiYXInICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNmb28jYmFyJyAgICAgICAgICBdLCBzZWxfcnByOiAnI2ZvbyNiYXInLCAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogWyAnZm9vI2JhcicgXSwgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgICB7IHByb2JlOiAnI2VuZCwjc3RhcnQsJywgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyNlbmQnLCAnI3N0YXJ0JywgJycgICBdLCBucm1fc2VsOiBbICdjdWUjZW5kJywgJ2N1ZSNzdGFydCcgXSwgc2VsX3JwcjogJyNlbmQsICNzdGFydCwgJywgICAgIGRhdGE6IHRydWUsIGN1ZXM6IFsgJ2VuZCcsICdzdGFydCcgXSwgIGFjY2VwdF9hbGw6IGZhbHNlLCB9XG4gICAgICAgICAgeyBwcm9iZTogJyNlbmQsI3N0YXJ0JywgICAgICAgICAgICAgIHNlbF9saXN0OiBbICcjZW5kJywgJyNzdGFydCcgICAgICAgXSwgbnJtX3NlbDogWyAnY3VlI2VuZCcsICdjdWUjc3RhcnQnIF0sIHNlbF9ycHI6ICcjZW5kLCAjc3RhcnQnLCAgICAgICBkYXRhOiB0cnVlLCBjdWVzOiBbICdlbmQnLCAnc3RhcnQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAgIHsgcHJvYmU6ICcjZW5kJywgICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnI2VuZCcgICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2N1ZSNlbmQnICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnI2VuZCcsICAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogWyAnZW5kJyBdLCAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgICB7IHByb2JlOiAnIycsICAgICAgICAgICAgICAgICAgICAgICAgc2VsX2xpc3Q6IFsgJyMnICAgICAgICAgICAgICAgICAgICBdLCBucm1fc2VsOiBbICdjdWUjKicgICAgICAgICAgICAgICAgXSwgc2VsX3JwcjogJyMnLCAgICAgICAgICAgICAgICAgIGRhdGE6IHRydWUsIGN1ZXM6IHRydWUsICAgICAgICAgICAgICAgIGFjY2VwdF9hbGw6IHRydWUsICB9XG4gICAgICAgICAgeyBwcm9iZTogJyBjdWUjc3RhcnQsIGN1ZSNlbmQgJywgICAgIHNlbF9saXN0OiBbICdjdWUjc3RhcnQnLCAnY3VlI2VuZCcgXSwgbnJtX3NlbDogWyAnY3VlI3N0YXJ0JywgJ2N1ZSNlbmQnIF0sIHNlbF9ycHI6ICdjdWUjc3RhcnQsIGN1ZSNlbmQnLCBkYXRhOiB0cnVlLCBjdWVzOiBbICdzdGFydCcsICdlbmQnIF0sICBhY2NlcHRfYWxsOiBmYWxzZSwgfVxuICAgICAgICAgIHsgcHJvYmU6ICdkYXRhIycsICAgICAgICAgICAgICAgICAgICBzZWxfbGlzdDogWyAnZGF0YSMnICAgICAgICAgICAgICAgIF0sIG5ybV9zZWw6IFsgJ2RhdGEjKicgICAgICAgICAgICAgICBdLCBzZWxfcnByOiAnZGF0YSMnLCAgICAgICAgICAgICAgZGF0YTogdHJ1ZSwgY3VlczogZmFsc2UsICAgICAgICAgICAgICAgYWNjZXB0X2FsbDogZmFsc2UsIH1cbiAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgICMgeyBwcm9iZTogJ2RhdGEjZm9vI2JhcicsICAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBjbGFzcyBTZWxlY3RvclxuICAgICAgICAgIGNvbnN0cnVjdG9yOiAoIHNlbGVjdG9ycy4uLiApIC0+XG4gICAgICAgICAgICB7IHNlbGVjdG9yc19ycHIsXG4gICAgICAgICAgICAgIHNlbGVjdG9ycywgIH0gPSBfbm9ybWFsaXplX3NlbGVjdG9ycyBzZWxlY3RvcnMuLi5cbiAgICAgICAgICAgIEBzZWxlY3RvcnNfcnByICA9IHNlbGVjdG9yc19ycHJcbiAgICAgICAgICAgIEBkYXRhICAgICAgICAgICA9IHRydWVcbiAgICAgICAgICAgIEBjdWVzICAgICAgICAgICA9IGZhbHNlXG4gICAgICAgICAgICBAYWNjZXB0X2FsbCAgICAgPSAoIEBkYXRhIGlzIHRydWUgKSBhbmQgKCBAY3VlcyBpcyB0cnVlIClcbiAgICAgICAgICAgIGZvciBzZWxlY3RvciBmcm9tIHNlbGVjdG9yc1xuICAgICAgICAgICAgICBzd2l0Y2ggdHJ1ZVxuICAgICAgICAgICAgICAgIHdoZW4gc2VsZWN0b3IgaXMgJ2RhdGEjKicgdGhlbiBAZGF0YSA9IHRydWVcbiAgICAgICAgICAgICAgICB3aGVuIHNlbGVjdG9yIGlzICdjdWUjKicgdGhlbiBAY3VlcyA9IHRydWVcbiAgICAgICAgICAgICAgICB3aGVuICggbWF0Y2ggPSBzZWxlY3Rvci5tYXRjaCAvXmRhdGEjKD88aWQ+LispJC8gKT9cbiAgICAgICAgICAgICAgICAgICMjIyBUQUlOVCBtZW50aW9uIG9yaWdpbmFsIHNlbGVjdG9yIG5leHQgdG8gbm9ybWFsaXplZCBmb3JtICMjI1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlqc3RybV8xODggSURzIG9uIGRhdGEgaXRlbXMgbm90IHN1cHBvcnRlZCwgZ290ICN7c2VsZWN0b3J9XCJcbiAgICAgICAgICAgICAgICB3aGVuICggbWF0Y2ggPSBzZWxlY3Rvci5tYXRjaCAvXmN1ZSMoPzxpZD4uKykkLyApP1xuICAgICAgICAgICAgICAgICAgQGN1ZXMgPSBuZXcgU2V0KCkgaWYgQGN1ZXMgaW4gWyB0cnVlLCBmYWxzZSwgXVxuICAgICAgICAgICAgICAgICAgQGN1ZXMuYWRkIG1hdGNoLmdyb3Vwcy5pZFxuICAgICAgICAgICAgICAgIGVsc2UgbnVsbFxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgIF9nZXRfZXhjZXJwdDogLT4geyBkYXRhOiBAZGF0YSwgY3VlczogQGN1ZXMsIGFjY2VwdF9hbGw6IEBhY2NlcHRfYWxsLCB9XG5cbiAgICAgICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgc2VsZWN0OiAoIGl0ZW0gKSAtPlxuICAgICAgICAgICAgcmV0dXJuIHRydWUgaWYgQGFjY2VwdF9hbGxcbiAgICAgICAgICAgIGlmIGlzX2N1ZSA9ICggdHlwZW9mIGl0ZW0gKSBpcyAnc3ltYm9sJ1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZSAgIGlmIEBjdWVzIGlzIHRydWVcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlICBpZiBAY3VlcyBpcyBmYWxzZVxuICAgICAgICAgICAgICByZXR1cm4gQGN1ZXMuaGFzIGlkX2Zyb21fc3ltYm9sIGl0ZW1cbiAgICAgICAgICAgIHJldHVybiB0cnVlICAgaWYgQGRhdGEgaXMgdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlICBpZiBAZGF0YSBpcyBmYWxzZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlqc3RybV8xODkgSURzIG9uIGRhdGEgaXRlbXMgbm90IHN1cHBvcnRlZCBpbiBzZWxlY3RvciAje3JwciBAdG9TdHJpbmd9XCJcbiAgICAgICAgICAgICMgcmV0dXJuIEBkYXRhLmhhcyBpZF9mcm9tX3ZhbHVlIGl0ZW1cblxuICAgICAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICB0b1N0cmluZzogLT4gQHNlbGVjdG9yc19ycHJcbiAgICAgICAgICAgICMgUiA9IFtdXG4gICAgICAgICAgICAjIGlmIEBhbGxfY3VlcyAgdGhlbiBSLnB1c2ggJytjdWUnXG4gICAgICAgICAgICAjIGlmIEBub19jdWVzICAgdGhlbiBSLnB1c2ggJy1jdWUnXG4gICAgICAgICAgICAjIGlmIEBhbGxfZGF0YSAgdGhlbiBSLnB1c2ggJytkYXRhJ1xuICAgICAgICAgICAgIyBpZiBAbm9fZGF0YSAgIHRoZW4gUi5wdXNoICctZGF0YSdcbiAgICAgICAgICAgICMgcmV0dXJuIFIuam9pbiAnXidcblxuICAgICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlkX2Zyb21fc3ltYm9sID0gKCBzeW1ib2wgKSAtPlxuICAgICAgICAgIFIgPSBTdHJpbmcgc3ltYm9sXG4gICAgICAgICAgcmV0dXJuICggUiApWyA3IC4uLiBSLmxlbmd0aCAtIDEgXVxuXG4gICAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgc2VsZWN0b3JzX2FzX2xpc3QgPSAoIHNlbGVjdG9ycy4uLiApIC0+XG4gICAgICAgICAgcmV0dXJuIFtdIGlmIHNlbGVjdG9ycy5sZW5ndGggaXMgMFxuICAgICAgICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5mbGF0IEluZmluaXR5XG4gICAgICAgICAgcmV0dXJuIFtdIGlmIHNlbGVjdG9ycy5sZW5ndGggaXMgMFxuICAgICAgICAgIHJldHVybiBbICcnLCBdIGlmIHNlbGVjdG9ycy5sZW5ndGggaXMgMSBhbmQgc2VsZWN0b3JzWyAwIF0gaXMgJydcbiAgICAgICAgICBzZWxlY3RvcnMgPSBzZWxlY3RvcnMuam9pbiAnLCdcbiAgICAgICAgICBzZWxlY3RvcnMgPSBzZWxlY3RvcnMucmVwbGFjZSAvXFxzKy9nLCAnJyAjIyMgVEFJTlQgbm90IGdlbmVyYWxseSBwb3NzaWJsZSAjIyNcbiAgICAgICAgICBzZWxlY3RvcnMgPSBzZWxlY3RvcnMuc3BsaXQgJywnICMjIyBUQUlOVCBub3QgZ2VuZXJhbGx5IHBvc3NpYmxlICMjI1xuICAgICAgICAgIHJldHVybiBzZWxlY3RvcnNcblxuICAgICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIG5vcm1hbGl6ZV9zZWxlY3RvcnMgPSAoIHNlbGVjdG9ycy4uLiApIC0+ICggX25vcm1hbGl6ZV9zZWxlY3RvcnMgc2VsZWN0b3JzLi4uICkuc2VsZWN0b3JzXG5cbiAgICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBfbm9ybWFsaXplX3NlbGVjdG9ycyA9ICggc2VsZWN0b3JzLi4uICkgLT5cbiAgICAgICAgICBzZWxlY3RvcnMgICAgID0gc2VsZWN0b3JzX2FzX2xpc3Qgc2VsZWN0b3JzLi4uXG4gICAgICAgICAgc2VsZWN0b3JzX3JwciA9IHNlbGVjdG9ycy5qb2luICcsICdcbiAgICAgICAgICBSICAgICAgICAgICAgID0gbmV3IFNldCgpXG4gICAgICAgICAgZm9yIHNlbGVjdG9yIGluIHNlbGVjdG9yc1xuICAgICAgICAgICAgc3dpdGNoIHRydWVcbiAgICAgICAgICAgICAgd2hlbiBzZWxlY3RvciBpcyAnJyAgICAgICAgICAgICB0aGVuIG51bGxcbiAgICAgICAgICAgICAgd2hlbiBzZWxlY3RvciBpcyAnIycgICAgICAgICAgICB0aGVuIFIuYWRkIFwiY3VlIypcIlxuICAgICAgICAgICAgICB3aGVuIC9eIy4rLy50ZXN0IHNlbGVjdG9yICAgICAgIHRoZW4gUi5hZGQgXCJjdWUje3NlbGVjdG9yfVwiXG4gICAgICAgICAgICAgIHdoZW4gLy4rIyQvLnRlc3Qgc2VsZWN0b3IgICAgICAgdGhlbiBSLmFkZCBcIiN7c2VsZWN0b3J9KlwiXG4gICAgICAgICAgICAgIHdoZW4gbm90IC8jLy50ZXN0IHNlbGVjdG9yICAgICAgdGhlbiBSLmFkZCBcIiN7c2VsZWN0b3J9IypcIlxuICAgICAgICAgICAgICBlbHNlIFIuYWRkIHNlbGVjdG9yXG4gICAgICAgICAgUi5hZGQgJ2RhdGEjKicgaWYgUi5zaXplIGlzIDBcbiAgICAgICAgICBSLmRlbGV0ZSAnJyBpZiBSLnNpemUgaXNudCAxXG4gICAgICAgICAgcmV0dXJuIHsgc2VsZWN0b3JzOiBSLCBzZWxlY3RvcnNfcnByLCB9XG5cbiAgICAgICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBmb3IgcCBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICAgcHJvYmUgICAgICAgICAgID0gcC5wcm9iZVxuICAgICAgICAgIHNlbF9saXN0ICAgICAgICA9IHNlbGVjdG9yc19hc19saXN0ICAgcHJvYmVcbiAgICAgICAgICBucm1fc2VsICAgICAgICAgPSBbICggbm9ybWFsaXplX3NlbGVjdG9ycyBwcm9iZSkuLi4sIF1cbiAgICAgICAgICBzZWwgICAgICAgICAgICAgPSBuZXcgU2VsZWN0b3IgICAgICAgIHByb2JlXG4gICAgICAgICAgc2VsX3JwciAgICAgICAgID0gc2VsLnRvU3RyaW5nKClcbiAgICAgICAgICB7IGRhdGEsXG4gICAgICAgICAgICBjdWVzLFxuICAgICAgICAgICAgYWNjZXB0X2FsbCwgfSA9IHNlbC5fZ2V0X2V4Y2VycHQoKVxuICAgICAgICAgIGRhdGEgICAgICAgICAgICA9IFsgKCBkYXRhICkuLi4sIF0gdW5sZXNzIGRhdGEgaW4gWyB0cnVlLCBmYWxzZSwgXVxuICAgICAgICAgIGN1ZXMgICAgICAgICAgICA9IFsgKCBjdWVzICkuLi4sIF0gdW5sZXNzIGN1ZXMgaW4gWyB0cnVlLCBmYWxzZSwgXVxuICAgICAgICAgIGVjaG8geyBwcm9iZSwgc2VsX2xpc3QsIG5ybV9zZWwsIHNlbF9ycHIsIGRhdGEsIGN1ZXMsIGFjY2VwdF9hbGwsIH1cbiAgICAgICAgICBAZXEgKCDOqWpzdHJtXzE5MCA9IC0+IHNlbF9saXN0ICAgICksIHAuc2VsX2xpc3RcbiAgICAgICAgICBAZXEgKCDOqWpzdHJtXzE5MSA9IC0+IG5ybV9zZWwgICAgICksIHAubnJtX3NlbFxuICAgICAgICAgIEBlcSAoIM6panN0cm1fMTkyID0gLT4gc2VsX3JwciAgICAgKSwgcC5zZWxfcnByXG4gICAgICAgICAgQGVxICggzqlqc3RybV8xOTMgPSAtPiBkYXRhICAgICAgICApLCBwLmRhdGFcbiAgICAgICAgICBAZXEgKCDOqWpzdHJtXzE5NCA9IC0+IGN1ZXMgICAgICAgICksIHAuY3Vlc1xuICAgICAgICAgIEBlcSAoIM6panN0cm1fMTk1ID0gLT4gYWNjZXB0X2FsbCAgKSwgcC5hY2NlcHRfYWxsXG5cbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzE5NicsIHJwciBzZWxlY3RvcnNfYXNfbGlzdCAnJ1xuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMTk3JywgcnByIHNlbGVjdG9yc19hc19saXN0IFsgWyAnJywgXSwgXVxuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMTk4JywgcnByIHNlbGVjdG9yc19hc19saXN0KClcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzE5OScsIHJwciBzZWxlY3RvcnNfYXNfbGlzdCBbXVxuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMjAwJywgcnByIHNlbGVjdG9yc19hc19saXN0IFtbXV1cbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIwMScsIHJwciBzZWxlY3RvcnNfYXNfbGlzdCAnZGF0YSdcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIwMicsIHJwciBzZWxlY3RvcnNfYXNfbGlzdCAnY3VlJ1xuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMjAzJywgcnByIHNlbGVjdG9yc19hc19saXN0ICdjdWUnLCAnZGF0YSdcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIwNCcsIHJwciBzZWxlY3RvcnNfYXNfbGlzdCAnIGN1ZSNzdGFydCwgY3VlI2VuZCAnXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yMDUnLCBycHIgc2VsZWN0b3JzX2FzX2xpc3QgJyNzdGFydCdcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIwNicsIHJwciBzZWxlY3RvcnNfYXNfbGlzdCAnI3N0YXJ0LCNlbmQnXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yMDcnLCBycHIgc2VsZWN0b3JzX2FzX2xpc3QgJyNlbmQsI3N0YXJ0J1xuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMjA4JywgcnByIHNlbGVjdG9yc19hc19saXN0ICcjZW5kLCNzdGFydCwnXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yMDknLCBycHIgc2VsZWN0b3JzX2FzX2xpc3QgJyMnXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yMTAnLCBycHIgc2VsZWN0b3JzX2FzX2xpc3QgJ2RhdGEjJ1xuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMjExJywgcnByIHNlbGVjdG9yc19hc19saXN0ICdkYXRhI2ZvbyNiYXInXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yMTInLCBycHIgc2VsZWN0b3JzX2FzX2xpc3QgJyNmb28jYmFyJ1xuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMjEzJywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIxNCcsIHJwciBub3JtYWxpemVfc2VsZWN0b3JzICcnXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yMTUnLCBycHIgbm9ybWFsaXplX3NlbGVjdG9ycyBbIFsgJycsIF0sIF1cbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIxNicsIHJwciBub3JtYWxpemVfc2VsZWN0b3JzKClcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIxNycsIHJwciBub3JtYWxpemVfc2VsZWN0b3JzIFtdXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yMTgnLCBycHIgbm9ybWFsaXplX3NlbGVjdG9ycyBbW11dXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yMTknLCBycHIgbm9ybWFsaXplX3NlbGVjdG9ycyAnZGF0YSdcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIyMCcsIHJwciBub3JtYWxpemVfc2VsZWN0b3JzICdjdWUnXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yMjEnLCBycHIgbm9ybWFsaXplX3NlbGVjdG9ycyAnY3VlJywgJ2RhdGEnXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yMjInLCBycHIgbm9ybWFsaXplX3NlbGVjdG9ycyAnIGN1ZSNzdGFydCwgY3VlI2VuZCAnXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yMjMnLCBycHIgbm9ybWFsaXplX3NlbGVjdG9ycyAnI3N0YXJ0J1xuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMjI0JywgcnByIG5vcm1hbGl6ZV9zZWxlY3RvcnMgJyNzdGFydCwjZW5kJ1xuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMjI1JywgcnByIG5vcm1hbGl6ZV9zZWxlY3RvcnMgJyNlbmQsI3N0YXJ0J1xuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMjI2JywgcnByIG5vcm1hbGl6ZV9zZWxlY3RvcnMgJyNlbmQsI3N0YXJ0LCdcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIyNycsIHJwciBub3JtYWxpemVfc2VsZWN0b3JzICcjJ1xuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMjI4JywgcnByIG5vcm1hbGl6ZV9zZWxlY3RvcnMgJ2RhdGEjJ1xuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMjI5JywgcnByIG5vcm1hbGl6ZV9zZWxlY3RvcnMgJ2RhdGEjZm9vI2JhcidcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIzMCcsIHJwciBub3JtYWxpemVfc2VsZWN0b3JzICcjZm9vI2JhcidcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIzMScsICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yMzInLCBuZXcgU2VsZWN0b3IgJydcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIzMycsIG5ldyBTZWxlY3RvciBbIFsgJycsIF0sIF1cbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIzNCcsIG5ldyBTZWxlY3RvcigpXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yMzUnLCBuZXcgU2VsZWN0b3IgW11cbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIzNicsIG5ldyBTZWxlY3RvciBbW11dXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yMzcnLCBuZXcgU2VsZWN0b3IgJ2RhdGEnXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yMzgnLCBuZXcgU2VsZWN0b3IgJ2N1ZSdcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzIzOScsIG5ldyBTZWxlY3RvciAnY3VlJywgJ2RhdGEnXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yNDAnLCBuZXcgU2VsZWN0b3IgJyBjdWUjc3RhcnQsIGN1ZSNlbmQgJ1xuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMjQxJywgbmV3IFNlbGVjdG9yICcjc3RhcnQnXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yNDInLCBuZXcgU2VsZWN0b3IgJyNzdGFydCwjZW5kJ1xuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMjQzJywgbmV3IFNlbGVjdG9yICcjZW5kLCNzdGFydCdcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0XzI0NCcsIG5ldyBTZWxlY3RvciAnI2VuZCwjc3RhcnQsJ1xuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMjQ1JywgbmV3IFNlbGVjdG9yICcjJ1xuICAgICAgICAjIGRlYnVnICfOqWt2cnRfMjQ2JywgbmV3IFNlbGVjdG9yICdkYXRhIydcbiAgICAgICAgIyAjIGRlYnVnICfOqWt2cnRfMjQ3JywgbmV3IFNlbGVjdG9yICdkYXRhI2ZvbyNiYXInXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF8yNDgnLCBuZXcgU2VsZWN0b3IgJyNmb28jYmFyJ1xuICAgICAgICAjIHNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKClcbiAgICAgICAgIyAjIGZvciBzZWxlY3Rvcl90ZXh0IGluIHNlbGVjdG9yc1xuICAgICAgICAjIHNlbGVjdG9yX3RleHQgPSBzZWxlY3Rvci50b1N0cmluZygpXG4gICAgICAgICMgZm9yIGl0ZW0gaW4gc3RyZWFtX2l0ZW1zXG4gICAgICAgICMgICBoZWxwICfOqWt2cnRfMjQ5JywgZlwiI3tycHIgc2VsZWN0b3JfdGV4dH06PDIwYzsgI3tycHIgaXRlbX06PDIwYzsgI3tzZWxlY3Rvci5zZWxlY3QgaXRlbX1cIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19pbXByb3ZlZF9zdHJ1Y3R1cmUgPSAtPlxuICBoZWxwICfOqWt2cnRfMjUwJywgcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICBESVMgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL19kZW1vLWltcHJvdmVkLXN0cnVjdHVyZSdcbiAgaGVscCAnzqlrdnJ0XzI1MScsIERJU1xuICBESVMuZGVtb19hdHRhY2hlZCgpXG4gIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQHRhc2tzXG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyByZXF1aXJlX2dldF9sb2NhbF9kZXN0aW5hdGlvbnM6IEB0YXNrcy5yZXF1aXJlX2dldF9sb2NhbF9kZXN0aW5hdGlvbnMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfd2Fsa19qc190b2tlbnM6IEB0YXNrcy5yZXF1aXJlX3dhbGtfanNfdG9rZW5zLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyByZXF1aXJlX3BhcnNlX3JlcXVpcmVfc3RhdGVtZW50czogQHRhc2tzLnJlcXVpcmVfcGFyc2VfcmVxdWlyZV9zdGF0ZW1lbnRzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyByZXF1aXJlX2pldHN0cmVhbTogQHRhc2tzLnJlcXVpcmVfamV0c3RyZWFtLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgamV0c3RyZWFtX3NlbGVjdG9yczogQHRhc2tzLmpldHN0cmVhbV9zZWxlY3RvcnMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfcGF0aF90b29sczogQHRhc2tzLnJlcXVpcmVfcGF0aF90b29scywgfVxuICAjIGRlbW9faW1wcm92ZWRfc3RydWN0dXJlKCkiXX0=
