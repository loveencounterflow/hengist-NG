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
      return (new Test(guytest_cfg)).test(this.tasks);
    })();
  }

  // ( new Test guytest_cfg ).test { require_get_local_destinations: @tasks.require_get_local_destinations, }
// ( new Test guytest_cfg ).test { require_walk_js_tokens: @tasks.require_walk_js_tokens, }
// ( new Test guytest_cfg ).test { require_parse_require_statements: @tasks.require_parse_require_statements, }
// ( new Test guytest_cfg ).test { require_jetstream: @tasks.require_jetstream, }
// ( new Test guytest_cfg ).test { require_path_tools: @tasks.require_path_tools, }
// demo_improved_structure()

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLHVCQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQXBCQTs7Ozs7RUEyQkEsSUFBQyxDQUFBLEtBQUQsR0FHSSxDQUFBOztJQUFBLHdCQUFBLEVBQTBCLFFBQUEsQ0FBQSxDQUFBO0FBQzlCLFVBQUEsU0FBQSxFQUFBLGlCQUFBLEVBQUEsc0JBQUEsRUFBQSxPQUFBLEVBQUE7TUFBTSxTQUFBLEdBQThCLE9BQUEsQ0FBUSxtQ0FBUjtNQUM5QixDQUFBLENBQUUsT0FBRixDQUFBLEdB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cmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1zZm1vZHVsZXMvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0YXNrcyA9XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlcXVpcmVfZGljdGlvbmFyeV90b29sczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBleHBhbmRfZGljdGlvbmFyeSwgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfZGljdGlvbmFyeV90b29scygpXG4gICAgICB7IGdldF9sb2NhbF9kZXN0aW5hdGlvbnMsIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9nZXRfbG9jYWxfZGVzdGluYXRpb25zKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJ0X19fMSA9IC0+IHR5cGVfb2YgZXhwYW5kX2RpY3Rpb25hcnkgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgZG8gPT5cbiAgICAgICAgc3RyaW5ncyA9XG4gICAgICAgICAgJyR7Z3JlZXR9JzogICBcIkhlbGxvICR7d2hvfVwiXG4gICAgICAgICAgJyR7d2hvfSc6ICAgICBcImRlYXIgJHt0YXJnZXR9XCJcbiAgICAgICAgICAnJHt0YXJnZXR9JzogIFwid29ybGRcIlxuICAgICAgICBtYXRjaGVyID1cbiAgICAgICAgICAnJHtncmVldH0nOiAgIFwiSGVsbG8gZGVhciB3b3JsZFwiXG4gICAgICAgICAgJyR7d2hvfSc6ICAgICBcImRlYXIgd29ybGRcIlxuICAgICAgICAgICcke3RhcmdldH0nOiAgXCJ3b3JsZFwiXG4gICAgICAgIHN0cmluZ3NfY29weSAgPSB7IHN0cmluZ3MuLi4sIH1cbiAgICAgICAgZXhwYW5kZWQgICAgICA9IGV4cGFuZF9kaWN0aW9uYXJ5IHN0cmluZ3NcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF9fXzIgPSAtPiBzdHJpbmdzICAgICAgICAgICAgICksIHN0cmluZ3NfY29weVxuICAgICAgICBAZXEgICAgICggzqlrdnJ0X19fMyA9IC0+IGV4cGFuZGVkICAgICAgICAgICAgKSwgbWF0Y2hlclxuICAgICAgICBAZXEgICAgICggzqlrdnJ0X19fNCA9IC0+IGV4cGFuZGVkIGlzIHN0cmluZ3MgKSwgZmFsc2VcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgc3RyaW5ncyA9XG4gICAgICAgICAgJyR7Z3JlZXR9JzogICBcIkhlbGxvICR7d2hvfVwiXG4gICAgICAgICAgJyR7d2hvfSc6ICAgICBcImRlYXIgJHt0YXJnZXR9XCJcbiAgICAgICAgICAnJHt0YXJnZXR9JzogIFwid29ybGQgJHtncmVldH1cIlxuICAgICAgICBzdHJpbmdzX2NvcHkgID0geyBzdHJpbmdzLi4uLCB9XG4gICAgICAgIEB0aHJvd3MgKCDOqWt2cnRfX181ID0gLT4gZXhwYW5kX2RpY3Rpb25hcnkgc3RyaW5ncyApLCAvY3ljbGljIHJlZmVyZW5jZSBkZXRlY3RlZCBmb3IgXFwkXFx7Z3JlZXRcXH0vXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfX182ID0gLT4gc3RyaW5ncyAgICAgICAgICAgICAgICAgICAgICAgKSwgc3RyaW5nc19jb3B5XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHN0cmluZ3MgPVxuICAgICAgICAgICcvKHVzZXIpLyc6ICAgICBcIi9BbGljZS9cIlxuICAgICAgICAgICcoc2NoZW1hKS8vJzogICBcImh0dHBzOi8vXCJcbiAgICAgICAgICAnKHNlcnZlcikvJzogICAgXCIoc2NoZW1hKS8vZXhhbXBsZS5jb20vXCJcbiAgICAgICAgICAnKGZvbGRlciknOiAgICAgXCIoc2VydmVyKS8odXNlcikvZGF0YVwiXG4gICAgICAgICAgJzo6ZmlsZTo6JzogICAgIFwiKGZvbGRlcikvZmlsZS50eHRcIlxuICAgICAgICBmb3Iga2V5LCB2YWx1ZSBvZiBleHBhbmRfZGljdGlvbmFyeSBzdHJpbmdzXG4gICAgICAgICAgZGVidWcgJ86pa3ZydF9fXzcnLCBmXCIje2tleX06PDIwYzsgI3tycHIgdmFsdWV9XCJcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgYnJpY2FicmFjX2pzb24gPSB7XG4gICAgICAgICAgXCJzdHJpbmdzXCI6IHtcbiAgICAgICAgICAgIFwiKGdoKVwiOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbVwiLFxuICAgICAgICAgICAgXCIoZmxvdykvXCI6IFwiKGdoKS9sb3ZlZW5jb3VudGVyZmxvdy9cIixcbiAgICAgICAgICAgIFwiKHNmbW9kdWxlcylcIjogXCIoZmxvdykvYnJpY2FicmFjLXNmbW9kdWxlcy9yZWZzL2hlYWRzL21haW4vc3JjXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtYXBwaW5nc1wiOiB7XG4gICAgICAgICAgICBcImFcIjogXCItLShnaCktLVwiXG4gICAgICAgICAgICBcImJcIjogXCItLShmbG93KS8tLVwiXG4gICAgICAgICAgICBcImNcIjogXCItLShzZm1vZHVsZXMpLS1cIlxuICAgICAgICAgICAgXCJkXCI6IFwifi8tLShzZm1vZHVsZXMpLS1cIiB9IH1cbiAgICAgICAgX2JyaWNhYnJhY19jb21waWxlZF9qc29uID0ge1xuICAgICAgICAgIFwic3RyaW5nc1wiOiB7XG4gICAgICAgICAgICBcIihnaClcIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb21cIixcbiAgICAgICAgICAgIFwiKGZsb3cpL1wiOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9cIixcbiAgICAgICAgICAgIFwiKHNmbW9kdWxlcylcIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlcy9yZWZzL2hlYWRzL21haW4vc3JjXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtYXBwaW5nc1wiOiB7XG4gICAgICAgICAgICBcImFcIjogXCItLWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS0tXCJcbiAgICAgICAgICAgIFwiYlwiOiBcIi0taHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93Ly0tXCJcbiAgICAgICAgICAgIFwiY1wiOiBcIi0taHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93L2JyaWNhYnJhYy1zZm1vZHVsZXMvcmVmcy9oZWFkcy9tYWluL3NyYy0tXCJcbiAgICAgICAgICAgIFwiZFwiOiBcIn4vLS1odHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvYnJpY2FicmFjLXNmbW9kdWxlcy9yZWZzL2hlYWRzL21haW4vc3JjLS1cIiB9IH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXN1bHQgICAgICAgICAgPSB7fVxuICAgICAgICByZXN1bHQuc3RyaW5ncyAgPSBleHBhbmRfZGljdGlvbmFyeSBicmljYWJyYWNfanNvbi5zdHJpbmdzXG4gICAgICAgIHJlc3VsdC5tYXBwaW5ncyA9IHt9XG4gICAgICAgIGZvciB0YXJnZXRfcGF0aCwgc291cmNlX3NwZWMgb2YgYnJpY2FicmFjX2pzb24ubWFwcGluZ3NcbiAgICAgICAgICByZXN1bHQubWFwcGluZ3NbIHRhcmdldF9wYXRoIF0gPSBzb3VyY2Vfc3BlY1xuICAgICAgICAgIGZvciBwYXR0ZXJuX2tleSwgcGF0dGVybl92YWx1ZSBvZiByZXN1bHQuc3RyaW5nc1xuICAgICAgICAgICAgcmVzdWx0Lm1hcHBpbmdzWyB0YXJnZXRfcGF0aCBdID0gcmVzdWx0Lm1hcHBpbmdzWyB0YXJnZXRfcGF0aCBdLnJlcGxhY2VBbGwgcGF0dGVybl9rZXksIHBhdHRlcm5fdmFsdWVcbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0X19fOCcsIHJlc3VsdFxuICAgICAgICBAZXEgKCDOqWt2cnRfX185ID0gLT4gZmFsc2UgKSwgXCJyZXNvbHZlIGhvbWUgZGlyZWN0b3J5IHdpdGggb3MuaG9tZWRpcigpIC8gbG9jYWwtZGVzdGluYXRpb24uYnJpY3NcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzEwID0gLT4gT2JqZWN0LmtleXMgcmVzdWx0ICksIE9iamVjdC5rZXlzIF9icmljYWJyYWNfY29tcGlsZWRfanNvblxuICAgICAgICBmb3Iga2V5LCB2YWx1ZSBvZiByZXN1bHQuc3RyaW5nc1xuICAgICAgICAgIEBlcSAoIM6pa3ZydF9fMTEgPSAtPiB2YWx1ZSApLCBfYnJpY2FicmFjX2NvbXBpbGVkX2pzb24uc3RyaW5nc1sga2V5IF1cbiAgICAgICAgZm9yIGtleSwgdmFsdWUgb2YgcmVzdWx0Lm1hcHBpbmdzXG4gICAgICAgICAgQGVxICggzqlrdnJ0X18xMiA9IC0+IHZhbHVlICksIF9icmljYWJyYWNfY29tcGlsZWRfanNvbi5tYXBwaW5nc1sga2V5IF1cbiAgICAgICAgIyBkZWJ1ZyAnzqlrdnJ0X18xMycsICggZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyBudWxsICkuaG9tZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX2dldF9sb2NhbF9kZXN0aW5hdGlvbnM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucywgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2dldF9sb2NhbF9kZXN0aW5hdGlvbnMoKVxuICAgICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgICAgT1MgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpvcydcbiAgICAgIEZTICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMge1xuICAgICAgIyAgIGFwcDoge1xuICAgICAgIyAgICAgbmFtZTogJ215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIGRhdGE6ICcvaG9tZS9mbG93Ly5sb2NhbC9zaGFyZS9teS1hcHAtbmFtZScsXG4gICAgICAjICAgICBjb25maWc6ICcvaG9tZS9mbG93Ly5jb25maWcvbXktYXBwLW5hbWUnLFxuICAgICAgIyAgICAgY2FjaGU6ICcvaG9tZS9mbG93Ly5jYWNoZS9teS1hcHAtbmFtZScsXG4gICAgICAjICAgICBsb2c6ICcvaG9tZS9mbG93Ly5sb2NhbC9zdGF0ZS9teS1hcHAtbmFtZScsXG4gICAgICAjICAgICB0ZW1wOiAnL3RtcC9mbG93L215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIGhvbWU6ICcvaG9tZS9mbG93L215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIG5vZGVfbW9kdWxlczogJy9ob21lL2Zsb3cvbXktYXBwLW5hbWUvbm9kZV9tb2R1bGVzJyxcbiAgICAgICMgICAgIGRlcF9iaW46ICcvaG9tZS9mbG93L215LWFwcC1uYW1lL25vZGVfbW9kdWxlcy8uYmluJyxcbiAgICAgICMgICAgIG93bl9iaW46ICcvaG9tZS9mbG93L215LWFwcC1uYW1lL2JpbidcbiAgICAgICMgICB9LFxuICAgICAgIyAgIHVzZXI6IHsgbmFtZTogJ2Zsb3cnLCBob21lOiAnL2hvbWUvZmxvdycsIHRlbXA6ICcvdG1wJyB9XG4gICAgICAjIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJ0X18xNCA9IC0+IHR5cGVfb2YgZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyApLCAnZnVuY3Rpb24nXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGFwcF9uYW1lICAgICAgPSAnbXktYXBwLW5hbWUnXG4gICAgICAgIGRzdCAgICAgICAgICAgPSBnZXRfbG9jYWxfZGVzdGluYXRpb25zIHsgYXBwX25hbWUsIH1cbiAgICAgICAgdXNlcl9uZm8gICAgICA9IE9TLnVzZXJJbmZvKClcbiAgICAgICAgaG9tZSAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy5ob21lZGlyKClcbiAgICAgICAgdGVtcCAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy50bXBkaXIoKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMTUgPSAtPiAoIE9iamVjdC5rZXlzIGRzdCApLnNvcnQoKSAgICAgICApLCBbICdhcHAnLCAndXNlcicsIF1cbiAgICAgICAgQGVxICggzqlrdnJ0X18xNiA9IC0+ICggT2JqZWN0LmtleXMgZHN0LmFwcCApLnNvcnQoKSAgICksIFsgJ2NhY2hlJywgJ2NvbmZpZycsICdkYXRhJywgJ2RlcF9iaW4nLCAnaG9tZScsICdsb2cnLCAnbmFtZScsICdub2RlX21vZHVsZXMnLCAnb3duX2JpbicsICd0ZW1wJyBdXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMTcgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC51c2VyICkuc29ydCgpICApLCBbICdob21lJywgJ25hbWUnLCAndGVtcCcsIF1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzE4ID0gLT4gdHlwZV9vZiBkc3QuYXBwICAgICAgICAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAgICAgQGVxICggzqlrdnJ0X18xOSA9IC0+IHR5cGVfb2YgZHN0LnVzZXIgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X18yMCA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jYWNoZSAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMjEgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY29uZmlnICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzIyID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmRhdGEgICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X18yMyA9IC0+IGRzdC5hcHAuZGVwX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfbmFtZSwgJ25vZGVfbW9kdWxlcycsICcuYmluJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzI0ID0gLT4gZHN0LmFwcC5ob21lICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMjUgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAubG9nICAgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzI2ID0gLT4gZHN0LmFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X18yNyA9IC0+IGRzdC5hcHAubm9kZV9tb2R1bGVzICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfbmFtZSwgJ25vZGVfbW9kdWxlcydcbiAgICAgICAgQGVxICggzqlrdnJ0X18yOCA9IC0+IGRzdC5hcHAub3duX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfbmFtZSwgJ2JpbidcbiAgICAgICAgQGVxICggzqlrdnJ0X18yOSA9IC0+IGRzdC5hcHAudGVtcCAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBkc3QudXNlci50ZW1wLCBkc3QudXNlci5uYW1lLCBhcHBfbmFtZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMzAgPSAtPiBkc3QudXNlci5ob21lICAgICAgICAgICAgICAgICAgICApLCBob21lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMzEgPSAtPiBkc3QudXNlci5uYW1lICAgICAgICAgICAgICAgICAgICApLCB1c2VyX25mby51c2VybmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzMyID0gLT4gZHN0LnVzZXIudGVtcCAgICAgICAgICAgICAgICAgICAgKSwgdGVtcFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGFwcF9uYW1lICAgICAgPSBudWxsXG4gICAgICAgIGRzdCAgICAgICAgICAgPSBnZXRfbG9jYWxfZGVzdGluYXRpb25zIHsgYXBwX25hbWUsIH1cbiAgICAgICAgdXNlcl9uZm8gICAgICA9IE9TLnVzZXJJbmZvKClcbiAgICAgICAgaG9tZSAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy5ob21lZGlyKClcbiAgICAgICAgdGVtcCAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy50bXBkaXIoKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMzMgPSAtPiAoIE9iamVjdC5rZXlzIGRzdCApLnNvcnQoKSAgICAgICApLCBbICdhcHAnLCAndXNlcicsIF1cbiAgICAgICAgQGVxICggzqlrdnJ0X18zNCA9IC0+ICggT2JqZWN0LmtleXMgZHN0LmFwcCApLnNvcnQoKSAgICksIFsgJ2NhY2hlJywgJ2NvbmZpZycsICdkYXRhJywgJ2RlcF9iaW4nLCAnaG9tZScsICdsb2cnLCAnbmFtZScsICdub2RlX21vZHVsZXMnLCAnb3duX2JpbicsICd0ZW1wJyBdXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMzUgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC51c2VyICkuc29ydCgpICApLCBbICdob21lJywgJ25hbWUnLCAndGVtcCcsIF1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzM2ID0gLT4gdHlwZV9vZiBkc3QuYXBwICAgICAgICAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAgICAgQGVxICggzqlrdnJ0X18zNyA9IC0+IHR5cGVfb2YgZHN0LnVzZXIgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X18zOCA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jYWNoZSAgICAgICksICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgQGVxICggzqlrdnJ0X18zOSA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jb25maWcgICAgICksICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgQGVxICggzqlrdnJ0X180MCA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5kYXRhICAgICAgICksICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgQGVxICggzqlrdnJ0X180MSA9IC0+IGRzdC5hcHAuZGVwX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nLCAnbm9kZV9tb2R1bGVzJywgJy5iaW4nXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNDIgPSAtPiBkc3QuYXBwLmhvbWUgICAgICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzQzID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmxvZyAgICAgICAgKSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzQ0ID0gLT4gZHN0LmFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgKSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzQ1ID0gLT4gZHN0LmFwcC5ub2RlX21vZHVsZXMgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsICc8WU9VUi1BUFAtTkFNRS1IRVJFPicsICdub2RlX21vZHVsZXMnXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNDYgPSAtPiBkc3QuYXBwLm93bl9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+JywgJ2JpbidcbiAgICAgICAgQGVxICggzqlrdnJ0X180NyA9IC0+IGRzdC5hcHAudGVtcCAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBkc3QudXNlci50ZW1wLCBkc3QudXNlci5uYW1lLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X180OCA9IC0+IGRzdC51c2VyLmhvbWUgICAgICAgICAgICAgICAgICAgICksIGhvbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X180OSA9IC0+IGRzdC51c2VyLm5hbWUgICAgICAgICAgICAgICAgICAgICksIHVzZXJfbmZvLnVzZXJuYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTAgPSAtPiBkc3QudXNlci50ZW1wICAgICAgICAgICAgICAgICAgICApLCB0ZW1wXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgYXBwX25hbWUgICAgICA9ICdmcm9idWxhdG9yJ1xuICAgICAgICBhcHBfaG9tZSAgICAgID0gJy9wYXRoL3RvL3Byb2plY3RzJ1xuICAgICAgICBkc3QgICAgICAgICAgID0gZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyB7IGFwcF9uYW1lLCBhcHBfaG9tZSB9XG4gICAgICAgIHVzZXJfbmZvICAgICAgPSBPUy51c2VySW5mbygpXG4gICAgICAgIGhvbWUgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MuaG9tZWRpcigpXG4gICAgICAgIHRlbXAgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MudG1wZGlyKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzUxID0gLT4gKCBPYmplY3Qua2V5cyBkc3QgKS5zb3J0KCkgICAgICAgKSwgWyAnYXBwJywgJ3VzZXInLCBdXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTIgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC5hcHAgKS5zb3J0KCkgICApLCBbICdjYWNoZScsICdjb25maWcnLCAnZGF0YScsICdkZXBfYmluJywgJ2hvbWUnLCAnbG9nJywgJ25hbWUnLCAnbm9kZV9tb2R1bGVzJywgJ293bl9iaW4nLCAndGVtcCcgXVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzUzID0gLT4gKCBPYmplY3Qua2V5cyBkc3QudXNlciApLnNvcnQoKSAgKSwgWyAnaG9tZScsICduYW1lJywgJ3RlbXAnLCBdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X181NCA9IC0+IHR5cGVfb2YgZHN0LmFwcCAgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTUgPSAtPiB0eXBlX29mIGRzdC51c2VyICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTYgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY2FjaGUgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzU3ID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmNvbmZpZyAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X181OCA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5kYXRhICAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTkgPSAtPiBkc3QuYXBwLmRlcF9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX2hvbWUsIGFwcF9uYW1lLCAnbm9kZV9tb2R1bGVzJywgJy5iaW4nXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjAgPSAtPiBkc3QuYXBwLmhvbWUgICAgICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX2hvbWUsIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjEgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAubG9nICAgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzYyID0gLT4gZHN0LmFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X182MyA9IC0+IGRzdC5hcHAubm9kZV9tb2R1bGVzICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfaG9tZSwgYXBwX25hbWUsICdub2RlX21vZHVsZXMnXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjQgPSAtPiBkc3QuYXBwLm93bl9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX2hvbWUsIGFwcF9uYW1lLCAnYmluJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzY1ID0gLT4gZHN0LmFwcC50ZW1wICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGRzdC51c2VyLnRlbXAsIGRzdC51c2VyLm5hbWUsIGFwcF9uYW1lXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X182NiA9IC0+IGRzdC51c2VyLmhvbWUgICAgICAgICAgICAgICAgICAgICksIGhvbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X182NyA9IC0+IGRzdC51c2VyLm5hbWUgICAgICAgICAgICAgICAgICAgICksIHVzZXJfbmZvLnVzZXJuYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjggPSAtPiBkc3QudXNlci50ZW1wICAgICAgICAgICAgICAgICAgICApLCB0ZW1wXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVxdWlyZV93YWxrX2pzX3Rva2VuczogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyB3YWxrX2pzX3Rva2VucyxcbiAgICAgICAgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zLFxuICAgICAgICBzdW1tYXJpemUsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfd2Fsa19qc190b2tlbnMoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cnRfXzY5ID0gLT4gdHlwZV9vZiB3YWxrX2pzX3Rva2VucyAgICAgICAgICAgICksICdnZW5lcmF0b3JmdW5jdGlvbidcbiAgICAgIEBlcSAoIM6pa3ZydF9fNzAgPSAtPiB0eXBlX29mIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgKSwgJ2dlbmVyYXRvcmZ1bmN0aW9uJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzcxID0gLT4gdHlwZV9vZiB3YWxrX2pzX3Rva2VucyAnJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2dlbmVyYXRvcidcbiAgICAgICAgQGVxICggzqlrdnJ0X183MiA9IC0+IFsgKCB3YWxrX2pzX3Rva2VucyAnJyApLi4uLCBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgeyB0eXBlOiAnZW9mJywgfSwgXVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzczID0gLT4gc3VtbWFyaXplIHdhbGtfanNfdG9rZW5zICAgICAgICAgICAgJ3ZhciBhID0gOTsnICAgICAgICAgICAgICAgICAgKSwgXCImJiZJZGVudGlmaWVyTmFtZSd2YXInJiYmV2hpdGVTcGFjZScgJyYmJklkZW50aWZpZXJOYW1lJ2EnJiYmV2hpdGVTcGFjZScgJyYmJlB1bmN0dWF0b3InPScmJiZXaGl0ZVNwYWNlJyAnJiYmTnVtZXJpY0xpdGVyYWwnOScmJiZQdW5jdHVhdG9yJzsnJiYmZW9mJiYmXCJcbiAgICAgICAgQGVxICggzqlrdnJ0X183NCA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgICd2YXIgYSA9IDk7JyAgICAgICAgICAgICAgICAgICksIFwiJiYmSWRlbnRpZmllck5hbWUndmFyJyYmJklkZW50aWZpZXJOYW1lJ2EnJiYmUHVuY3R1YXRvcic9JyYmJk51bWVyaWNMaXRlcmFsJzknJiYmUHVuY3R1YXRvcic7JyYmJmVvZiYmJlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzUgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICAnXCJ5XCInICAgICAgICAgICAgICAgICAgICAgICAgICksIFwiXCJcIiYmJlN0cmluZ0xpdGVyYWwnXCJ5XCInJiYmZW9mJiYmXCJcIlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzYgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcIid5J1wiICAgICAgICAgICAgICAgICAgICAgICAgICksIFwiJiYmU3RyaW5nTGl0ZXJhbCdcXFxcJ3lcXFxcJycmJiZlb2YmJiZcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzc3ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJgQSR7J3knfVpgXCIgICAgICAgICAgICAgICAgICApLCBcIiYmJlRlbXBsYXRlSGVhZCdgQSR7JyYmJlN0cmluZ0xpdGVyYWwnXFxcXCd5XFxcXCcnJiYmVGVtcGxhdGVUYWlsJ31aYCcmJiZlb2YmJiZcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzc4ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJmYEEkeyd5J31aYFwiICAgICAgICAgICAgICAgICApLCBcIiYmJklkZW50aWZpZXJOYW1lJ2YnJiYmVGVtcGxhdGVIZWFkJ2BBJHsnJiYmU3RyaW5nTGl0ZXJhbCdcXFxcJ3lcXFxcJycmJiZUZW1wbGF0ZVRhaWwnfVpgJyYmJmVvZiYmJlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzkgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcImBBJHtgeWB9WmBcIiAgICAgICAgICAgICAgICAgICksIFwiJiYmVGVtcGxhdGVIZWFkJ2BBJHsnJiYmTm9TdWJzdGl0dXRpb25UZW1wbGF0ZSdgeWAnJiYmVGVtcGxhdGVUYWlsJ31aYCcmJiZlb2YmJiZcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzgwID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJgQSR7cmVxdWlyZShgeWApfVpgXCIgICAgICAgICApLCBcIiYmJlRlbXBsYXRlSGVhZCdgQSR7JyYmJklkZW50aWZpZXJOYW1lJ3JlcXVpcmUnJiYmUHVuY3R1YXRvcicoJyYmJk5vU3Vic3RpdHV0aW9uVGVtcGxhdGUnYHlgJyYmJlB1bmN0dWF0b3InKScmJiZUZW1wbGF0ZVRhaWwnfVpgJyYmJmVvZiYmJlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fODEgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcInJlcXVpcmUgPSA3NzdcIiAgICAgICAgICAgICAgICksIFwiJiYmSWRlbnRpZmllck5hbWUncmVxdWlyZScmJiZQdW5jdHVhdG9yJz0nJiYmTnVtZXJpY0xpdGVyYWwnNzc3JyYmJmVvZiYmJlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fODIgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcInJlcXVpcmUgPSA3NzcgLy8gZm9vOiBiYXJcIiAgICksIFwiJiYmSWRlbnRpZmllck5hbWUncmVxdWlyZScmJiZQdW5jdHVhdG9yJz0nJiYmTnVtZXJpY0xpdGVyYWwnNzc3JyYmJmVvZiYmJlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fODMgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcInJlcXVpcmUgPSA3Nzc7IC8vIGZvbzogYmFyXCIgICksIFwiJiYmSWRlbnRpZmllck5hbWUncmVxdWlyZScmJiZQdW5jdHVhdG9yJz0nJiYmTnVtZXJpY0xpdGVyYWwnNzc3JyYmJlB1bmN0dWF0b3InOycmJiZlb2YmJiZcIlxuICAgICAgICAjIEBlcSAoIM6pa3ZydF9fODQgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcInRydWVcIiAgICAgICAgICAgICAgICApLCBudWxsXG4gICAgICAgICMgQGVxICggzqlrdnJ0X184NSA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwiZmFsc2VcIiAgICAgICAgICAgICAgICksIG51bGxcbiAgICAgICAgIyBAZXEgKCDOqWt2cnRfXzg2ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJ1bmRlZmluZWRcIiAgICAgICAgICAgKSwgbnVsbFxuICAgICAgICAjIEBlcSAoIM6pa3ZydF9fODcgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcIm51bGxcIiAgICAgICAgICAgICAgICApLCBudWxsXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc291cmNlID0gXCJjb25zdCB7IGQsIH0gPSByZXF1aXJlKCAnc29tZS1tb2R1bGUnICk7IC8qIHJlcXVpcmUoICdvdGhlci1tb2R1bGUnICkgKi9cIlxuICAgICAgICBmb3IgdG9rZW4gZnJvbSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgc291cmNlXG4gICAgICAgICAgaW5mbyAnzqlrdnJ0X184OCcsIGZcIiN7dG9rZW4udHlwZX06PjIwYzsgI3tycHIgdG9rZW4udmFsdWV9XCJcbiAgICAgICAgQGVxICggzqlrdnJ0X184OSA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgc291cmNlICksIFwiJiYmSWRlbnRpZmllck5hbWUnY29uc3QnJiYmUHVuY3R1YXRvcid7JyYmJklkZW50aWZpZXJOYW1lJ2QnJiYmUHVuY3R1YXRvcicsJyYmJlB1bmN0dWF0b3InfScmJiZQdW5jdHVhdG9yJz0nJiYmSWRlbnRpZmllck5hbWUncmVxdWlyZScmJiZQdW5jdHVhdG9yJygnJiYmU3RyaW5nTGl0ZXJhbCdcXFxcJ3NvbWUtbW9kdWxlXFxcXCcnJiYmUHVuY3R1YXRvcicpJyYmJlB1bmN0dWF0b3InOycmJiZlb2YmJiZcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlcXVpcmVfcGFyc2VfcmVxdWlyZV9zdGF0ZW1lbnRzOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cywgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9wYXJzZV9yZXF1aXJlX3N0YXRlbWVudHMoKVxuICAgICAgeyB3YWxrX2pzX3Rva2VucyxcbiAgICAgICAgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zLFxuICAgICAgICBzdW1tYXJpemUsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV93YWxrX2pzX3Rva2VucygpXG4gICAgICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICAgIEZTICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJ0X185MCA9IC0+IHR5cGVfb2Ygd2Fsa19yZXF1aXJlX3N0YXRlbWVudHMgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBwYXRoICAgICAgICAgID0gUEFUSC5yZXNvbHZlIF9fZGlybmFtZSwgJy4uLy4uLy4uL2Fzc2V0cy9icmljYWJyYWMvcGFyc2UtcmVxdWlyZS1zdGF0ZW1lbnRzL3Rlc3QtYmFzaWNzLmpzJ1xuICAgICAgICB3b3VsZGJlX3BhdGggID0gX19maWxlbmFtZVxuICAgICAgICBzb3VyY2UgICAgICAgID0gKCBGUy5yZWFkRmlsZVN5bmMgcGF0aCwgeyBlbmNvZGluZzogJ3V0Zi04JywgfSApXG4gICAgICAgICMgZm9yIGQgZnJvbSB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cyBwYXRoXG4gICAgICAgICMgICBkZWJ1ZyAnzqlrdnJ0X185MScsIGRcbiAgICAgICAgdG9rZW5zICAgICAgICA9IHdhbGtfcmVxdWlyZV9zdGF0ZW1lbnRzIHsgcGF0aDogd291bGRiZV9wYXRoLCBzb3VyY2UsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0X185MiA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDUsIGRpc3Bvc2l0aW9uOiAnbnBtJywgc2VsZWN0b3I6ICdndXknLCBhbm5vdGF0aW9uOiAnc2VtdmVyOjAuMy40JywgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzkzID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMTIsIGRpc3Bvc2l0aW9uOiAnaW5zaWRlJywgc2VsZWN0b3I6ICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzk0ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMTYsIGRpc3Bvc2l0aW9uOiAnaW5zaWRlJywgc2VsZWN0b3I6ICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0X185NSA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDI1LCBkaXNwb3NpdGlvbjogJ2luc2lkZScsIHNlbGVjdG9yOiAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzk2ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMTYyLCBkaXNwb3NpdGlvbjogJ2luc2lkZScsIHNlbGVjdG9yOiAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzk3ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMTY1LCBkaXNwb3NpdGlvbjogJ25vZGUnLCBzZWxlY3RvcjogJ25vZGU6cGF0aCcsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0X185OCA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDE2NiwgZGlzcG9zaXRpb246ICdub2RlJywgc2VsZWN0b3I6ICdub2RlOm9zJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzk5ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMTY3LCBkaXNwb3NpdGlvbjogJ25vZGUnLCBzZWxlY3RvcjogJ25vZGU6ZnMnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMDAgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiAzOTksIGRpc3Bvc2l0aW9uOiAnaW5zaWRlJywgc2VsZWN0b3I6ICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMDEgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiA0NjUsIGRpc3Bvc2l0aW9uOiAnbm9kZScsIHNlbGVjdG9yOiAnbm9kZTpmcycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzEwMiA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDQ2NiwgZGlzcG9zaXRpb246ICdpbnNpZGUnLCBzZWxlY3RvcjogJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzEwMyA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAnd2FybmluZycsIG1lc3NhZ2U6IFwiaWdub3JpbmcgcG9zc2libGUgYHJlcXVpcmVgIG9uIGxpbmUgNTU0OiAnICAgICAgICByZXF1aXJlOydcIiwgbGluZTogJyAgICAgICAgcmVxdWlyZTsnLCBsaW5lX25yOiA1NTQgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTA0ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICd3YXJuaW5nJywgbWVzc2FnZTogXCJpZ25vcmluZyBwb3NzaWJsZSBgcmVxdWlyZWAgb24gbGluZSA1NTU6ICcgICAgICAgIHJlcXVpcmUodHJ1ZSk7J1wiLCBsaW5lOiAnICAgICAgICByZXF1aXJlKHRydWUpOycsIGxpbmVfbnI6IDU1NSB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMDUgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiA1NTYsIGRpc3Bvc2l0aW9uOiAnbnBtJywgc2VsZWN0b3I6ICdwa2cjMScsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzEwNiA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDU1NywgZGlzcG9zaXRpb246ICducG0nLCBzZWxlY3RvcjogJ3BrZyMyJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTA3ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICd3YXJuaW5nJywgbWVzc2FnZTogXCJpZ25vcmluZyBwb3NzaWJsZSBgcmVxdWlyZWAgb24gbGluZSA1NTg6ICcgICAgICAgIHJldHVybiByZXF1aXJlKCBgcGtnIzNgICsgXFxcXCdzdWZmaXhcXFxcJyApOydcIiwgbGluZTogXCIgICAgICAgIHJldHVybiByZXF1aXJlKCBgcGtnIzNgICsgJ3N1ZmZpeCcgKTtcIiwgbGluZV9ucjogNTU4IH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzEwOCA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDU2NiwgZGlzcG9zaXRpb246ICdpbnNpZGUnLCBzZWxlY3RvcjogJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzEwOSA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAnd2FybmluZycsIG1lc3NhZ2U6IFwiaWdub3JpbmcgcG9zc2libGUgYHJlcXVpcmVgIG9uIGxpbmUgNjAyOiAnICBpZiAobW9kdWxlID09PSByZXF1aXJlLm1haW4pIHsnXCIsIGxpbmU6ICcgIGlmIChtb2R1bGUgPT09IHJlcXVpcmUubWFpbikgeycsIGxpbmVfbnI6IDYwMiB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMTAgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiA2MjYsIGRpc3Bvc2l0aW9uOiAnb3V0c2lkZScsIHNlbGVjdG9yOiAnLi4vLi4vLi4vLi4vd2hhdGV2ZXInLCBhbm5vdGF0aW9uOiBudWxsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgZm9yIGQgZnJvbSB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cyB7IHNvdXJjZTogJ3JlcXVpcmUoXCJ4eHhcIik7JywgfVxuICAgICAgICAgIGluZm8gJ86pa3ZydF8xMTEnLCBkXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTJ1xuICAgICAgICBmb3IgZCBmcm9tIHdhbGtfcmVxdWlyZV9zdGF0ZW1lbnRzIHsgc291cmNlOiAncmVxdWlyZShcInh4eFwiKSAvLyBzZW12ZXI6IDUuNi43JywgfVxuICAgICAgICAgIHVyZ2UgJ86pa3ZydF8xMTInLCBkXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTJ1xuICAgICAgICBmb3IgdG9rZW4gZnJvbSB3YWxrX2pzX3Rva2VucyAncmVxdWlyZShcInh4eFwiKTsgLy8gc2VtdmVyOiA1LjYuNydcbiAgICAgICAgICBoZWxwICfOqWt2cnRfMTEzJywgdG9rZW5cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICAgIGZvciBkIGZyb20gd2Fsa19yZXF1aXJlX3N0YXRlbWVudHMgeyBzb3VyY2U6ICdyZXF1aXJlKFwieHh4XCIpOyAvLyBzZW12ZXI6IDUuNi43JywgfVxuICAgICAgICAgIGluZm8gJ86pa3ZydF8xMTQnLCBkXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlcXVpcmVfcnByX3N0cmluZzogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBycHJfc3RyaW5nLCAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfcnByX3N0cmluZygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZydF8xMTUgPSAtPiB0eXBlX29mIHJwcl9zdHJpbmcgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBAZXEgKCDOqWt2cnRfMTE2ID0gLT4gcnByX3N0cmluZyAnJyAgICAgICApLCBcIlwiXCInJ1wiXCJcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfMTE3ID0gLT4gcnByX3N0cmluZyAnXCInICAgICAgKSwgXCJcIlwiJ1wiJ1wiXCJcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfMTE4ID0gLT4gcnByX3N0cmluZyBcIidcIiAgICAgICksIFwiXCJcIidcXFxcJydcIlwiXCJcbiAgICAgICAgQGVxICggzqlrdnJ0XzExOSA9IC0+IHJwcl9zdHJpbmcgJ3BvcCcgICAgKSwgXCJcIlwiJ3BvcCdcIlwiXCJcbiAgICAgICAgQGVxICggzqlrdnJ0XzEyMCA9IC0+IHJwcl9zdHJpbmcgJ1wicG9wXCInICApLCBcIlwiXCInXCJwb3BcIidcIlwiXCJcbiAgICAgICAgQGVxICggzqlrdnJ0XzEyMSA9IC0+IHJwcl9zdHJpbmcgXCIncG9wJ1wiICApLCBcIlwiXCInXFxcXCdwb3BcXFxcJydcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX3BhdGhfdG9vbHM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgaXNfaW5zaWRlLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3BhdGhfdG9vbHMoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cnRfMTIyID0gLT4gdHlwZV9vZiBpc19pbnNpZGUgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBAdGhyb3dzICggzqlrdnJ0XzEyMyA9IC0+IGlzX2luc2lkZSAnLi4vcGF0aC90by9maWxlJywgICAgICAgJy8nICAgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYW4gYWJzb2x1dGUgcGF0aCBhcyBhbmNob3IvXG4gICAgICAgIEB0aHJvd3MgKCDOqWt2cnRfMTI0ID0gLT4gaXNfaW5zaWRlICcuLi9wYXRoL3RvL2ZpbGUnLCAgICAgICAnd2F0JyAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhbiBhYnNvbHV0ZSBwYXRoIGFzIGFuY2hvci9cbiAgICAgICAgQHRocm93cyAoIM6pa3ZydF8xMjUgPSAtPiBpc19pbnNpZGUgJy4uL3BhdGgvdG8vZmlsZScsICAgICAgICcuLi9wYXRoL3RvL2ZpbGUnICAgKSwgL2V4cGVjdGVkIGFuIGFic29sdXRlIHBhdGggYXMgYW5jaG9yL1xuICAgICAgICBAdGhyb3dzICggzqlrdnJ0XzEyNiA9IC0+IGlzX2luc2lkZSAncGF0aC90by9maWxlJywgICAgICAgICAgJy4uL3BhdGgvdG8vZmlsZScgICApLCAvZXhwZWN0ZWQgYW4gYWJzb2x1dGUgcGF0aCBhcyBhbmNob3IvXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMjcgPSAtPiBpc19pbnNpZGUgJy8nLCAgICAgICAgICAgICAgICAgICAgICcvcGF0aC90by9maWxlJyAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAgICggzqlrdnJ0XzEyOCA9IC0+IGlzX2luc2lkZSAnL3BhdGgvdG8vZmlsZScsICAgICAgICAgJy9wYXRoL3RvL2ZpbGUnICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTI5ID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlJywgICAgICAgICAnb29wcycgICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMzAgPSAtPiBpc19pbnNpZGUgJy9wYXRoLy4uL2ZpbGUnLCAgICAgICAgICcvZmlsZScgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAgICggzqlrdnJ0XzEzMSA9IC0+IGlzX2luc2lkZSAnL3BhdGgvLi4vZmlsZS8uJywgICAgICAgJy9maWxlJyAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTMyID0gLT4gaXNfaW5zaWRlICcvcGF0aC8uLi9maWxlLy4vLi8uLy4nLCAnL2ZpbGUnICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMzMgPSAtPiBpc19pbnNpZGUgJy9wYXRoL3RvL2ZpbGUnLCAgICAgICAgICcuXFxcXC4vb29wcycgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTM0ID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlJywgICAgICAgICAnLi5cXFxcL29vcHMnICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTM1ID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlL3dhdCcsICAgICAnL3BhdGgvdG8vZmlsZScgICAgICksIGZhbHNlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTM2ID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlJywgICAgICAgICAnLi4vb29wcycgICAgICAgICAgICksIGZhbHNlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTM3ID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlJywgICAgICAgICAnL29vcHMnICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTM4ID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlJywgICAgICAgICAnLycgICAgICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTM5ID0gLT4gaXNfaW5zaWRlICcvcGF0aC8uLi9maWxlJywgICAgICAgICAnL3BhdGgnICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9faW1wcm92ZWRfc3RydWN0dXJlID0gLT5cbiAgaGVscCAnzqlrdnJ0XzE5NicsIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgRElTID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9fZGVtby1pbXByb3ZlZC1zdHJ1Y3R1cmUnXG4gIGhlbHAgJ86pa3ZydF8xOTcnLCBESVNcbiAgRElTLmRlbW9fYXR0YWNoZWQoKVxuICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEB0YXNrc1xuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9nZXRfbG9jYWxfZGVzdGluYXRpb25zOiBAdGFza3MucmVxdWlyZV9nZXRfbG9jYWxfZGVzdGluYXRpb25zLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyByZXF1aXJlX3dhbGtfanNfdG9rZW5zOiBAdGFza3MucmVxdWlyZV93YWxrX2pzX3Rva2VucywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9wYXJzZV9yZXF1aXJlX3N0YXRlbWVudHM6IEB0YXNrcy5yZXF1aXJlX3BhcnNlX3JlcXVpcmVfc3RhdGVtZW50cywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9qZXRzdHJlYW06IEB0YXNrcy5yZXF1aXJlX2pldHN0cmVhbSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9wYXRoX3Rvb2xzOiBAdGFza3MucmVxdWlyZV9wYXRoX3Rvb2xzLCB9XG4gICMgZGVtb19pbXByb3ZlZF9zdHJ1Y3R1cmUoKSJdfQ==
