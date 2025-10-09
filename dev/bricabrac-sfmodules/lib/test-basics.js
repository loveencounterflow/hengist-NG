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
        var ex, first, last, stream, surround, upper, watch, watched_1, watched_2, watched_3, watched_4, Ωap_142, Ωap_143, Ωap_148, Ωap_149, Ωap_150, Ωap_151, Ωap_152, Ωap_153, Ωap_154, Ωap_155, Ωap_156;
        first = Symbol('first');
        last = Symbol('last');
        stream = new Jetstream();
        //...................................................................................................
        this.eq((Ωap_142 = function() {
          return stream.length;
        }), 0);
        this.eq((Ωap_143 = function() {
          return stream.is_empty;
        }), true);
        //...................................................................................................
        watched_1 = [];
        watched_2 = [];
        watched_3 = [];
        watched_4 = [];
        stream.push(watch = function(d) {
          help('Ωap_144', rpr(d));
          return watched_1.push(d);
        });
        stream.push(upper = function*(d) {
          return (yield d.toUpperCase());
        });
        stream.push(watch = function(d) {
          info('Ωap_145', rpr(d));
          return watched_2.push(d);
        });
        stream.push(ex = function*(d, mark = '!') {
          return (yield d + mark);
        });
        stream.push(watch = function(d) {
          help('Ωap_146', rpr(d));
          return watched_3.push(d);
        });
        stream.push($({first, last}, surround = function*(d) {
          if (d === first) {
            return (yield `Let's say: \"`);
          }
          if (d === last) {
            return (yield '".');
          }
          return (yield d);
        }));
        stream.push(watch = function(d) {
          urge('Ωap_147', rpr(d));
          return watched_4.push(d);
        });
        //...................................................................................................
        this.eq((Ωap_148 = function() {
          return stream.length;
        }), 7);
        this.eq((Ωap_149 = function() {
          return stream.is_empty;
        }), false);
        this.eq((Ωap_150 = function() {
          var d;
          return [
            ...((function() {
              var results;
              results = [];
              for (d of stream.walk('hidey-ho')) {
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
              for (d of stream.walk('hidey-ho')) {
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
            for (d of stream.run('hidey-ho')) {
              results.push(d);
            }
            return results;
          })()).join('');
        }), `Let's say: "HIDEY-HO!".`);
        return null;
      })();
      (() => {        //.....................................................................................................
        var add_1, stream, Ωap_157;
        stream = new Jetstream();
        //...................................................................................................
        stream.push(add_1 = function*(d) {
          return (yield d + 1);
        });
        stream.push(add_1 = function*(d) {
          return (yield d + 1);
        });
        stream.push(add_1 = function*(d) {
          return (yield d + 1);
        });
        stream.push(add_1 = function*(d) {
          return (yield d + 1);
        });
        stream.push(add_1 = function*(d) {
          return (yield d + 1);
        });
        //...................................................................................................
        this.eq((Ωap_157 = function() {
          var d;
          return [
            ...((function() {
              var results;
              results = [];
              for (d of stream.walk(0)) {
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
        var first, g, last, stream, transform_1, transform_2, Ωkvrt_165, Ωkvrt_166, Ωkvrt_167;
        first = Symbol('first');
        last = Symbol('last');
        stream = new Jetstream();
        g = function*(d) {
          debug('Ωkvrt_163', d);
          if (d === first) {
            yield 0;
          }
          if (d !== first && d !== last) {
            yield d * 2;
          }
          if (d === last) {
            return (yield 1);
          }
        };
        transform_1 = $({first}, g);
        transform_2 = $({last}, g);
        stream.push(transform_1);
        stream.push(transform_2);
        debug('Ωkvrt_164', stream);
        this.eq((Ωkvrt_165 = function() {
          return transform_1[internals.CFG];
        }), {first});
        this.eq((Ωkvrt_166 = function() {
          return transform_2[internals.CFG];
        }), {last});
        this.eq((Ωkvrt_167 = function() {
          return stream.run(22);
        }), [0, 1, 88, 1]);
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
    help('Ωkvrt_168', require('../../../apps/bricabrac-sfmodules'));
    DIS = require('../../../apps/bricabrac-sfmodules/lib/_demo-improved-structure');
    help('Ωkvrt_169', DIS);
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
      return (new Test(guytest_cfg)).test({
        require_jetstream: this.tasks.require_jetstream
      });
    })();
  }

  // ( new Test guytest_cfg ).test { require_path_tools: @tasks.require_path_tools, }
// demo_improved_structure()

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLHVCQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQXBCQTs7Ozs7RUEyQkEsSUFBQyxDQUFBLEtBQUQsR0FHSSxDQUFBOztJQUFBLHdCQUFBLEVBQTBCLFFBQUEsQ0FBQSxDQUFBO0FBQzlCLFVBQUEsU0FBQSxFQUFBLGlCQUFBLEVBQUEsc0JBQUEsRUFBQSxPQUFBLEVBQUE7TUFBTSxTQUFBLEdBQThCLE9BQUEsQ0FBUSxtQ0FBUjtNQUM5QixDQUFBLENBQUUsT0FBRixDQUFBLEdB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O0VBL2ZBOztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtc2Ztb2R1bGVzL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGFza3MgPVxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX2RpY3Rpb25hcnlfdG9vbHM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgZXhwYW5kX2RpY3Rpb25hcnksICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2RpY3Rpb25hcnlfdG9vbHMoKVxuICAgICAgeyBnZXRfbG9jYWxfZGVzdGluYXRpb25zLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZydF9fXzEgPSAtPiB0eXBlX29mIGV4cGFuZF9kaWN0aW9uYXJ5ICksICdmdW5jdGlvbidcbiAgICAgIGRvID0+XG4gICAgICAgIHN0cmluZ3MgPVxuICAgICAgICAgICcke2dyZWV0fSc6ICAgXCJIZWxsbyAke3dob31cIlxuICAgICAgICAgICcke3dob30nOiAgICAgXCJkZWFyICR7dGFyZ2V0fVwiXG4gICAgICAgICAgJyR7dGFyZ2V0fSc6ICBcIndvcmxkXCJcbiAgICAgICAgbWF0Y2hlciA9XG4gICAgICAgICAgJyR7Z3JlZXR9JzogICBcIkhlbGxvIGRlYXIgd29ybGRcIlxuICAgICAgICAgICcke3dob30nOiAgICAgXCJkZWFyIHdvcmxkXCJcbiAgICAgICAgICAnJHt0YXJnZXR9JzogIFwid29ybGRcIlxuICAgICAgICBzdHJpbmdzX2NvcHkgID0geyBzdHJpbmdzLi4uLCB9XG4gICAgICAgIGV4cGFuZGVkICAgICAgPSBleHBhbmRfZGljdGlvbmFyeSBzdHJpbmdzXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfX18yID0gLT4gc3RyaW5ncyAgICAgICAgICAgICApLCBzdHJpbmdzX2NvcHlcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF9fXzMgPSAtPiBleHBhbmRlZCAgICAgICAgICAgICksIG1hdGNoZXJcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF9fXzQgPSAtPiBleHBhbmRlZCBpcyBzdHJpbmdzICksIGZhbHNlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHN0cmluZ3MgPVxuICAgICAgICAgICcke2dyZWV0fSc6ICAgXCJIZWxsbyAke3dob31cIlxuICAgICAgICAgICcke3dob30nOiAgICAgXCJkZWFyICR7dGFyZ2V0fVwiXG4gICAgICAgICAgJyR7dGFyZ2V0fSc6ICBcIndvcmxkICR7Z3JlZXR9XCJcbiAgICAgICAgc3RyaW5nc19jb3B5ICA9IHsgc3RyaW5ncy4uLiwgfVxuICAgICAgICBAdGhyb3dzICggzqlrdnJ0X19fNSA9IC0+IGV4cGFuZF9kaWN0aW9uYXJ5IHN0cmluZ3MgKSwgL2N5Y2xpYyByZWZlcmVuY2UgZGV0ZWN0ZWQgZm9yIFxcJFxce2dyZWV0XFx9L1xuICAgICAgICBAZXEgICAgICggzqlrdnJ0X19fNiA9IC0+IHN0cmluZ3MgICAgICAgICAgICAgICAgICAgICAgICksIHN0cmluZ3NfY29weVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBzdHJpbmdzID1cbiAgICAgICAgICAnLyh1c2VyKS8nOiAgICAgXCIvQWxpY2UvXCJcbiAgICAgICAgICAnKHNjaGVtYSkvLyc6ICAgXCJodHRwczovL1wiXG4gICAgICAgICAgJyhzZXJ2ZXIpLyc6ICAgIFwiKHNjaGVtYSkvL2V4YW1wbGUuY29tL1wiXG4gICAgICAgICAgJyhmb2xkZXIpJzogICAgIFwiKHNlcnZlcikvKHVzZXIpL2RhdGFcIlxuICAgICAgICAgICc6OmZpbGU6Oic6ICAgICBcIihmb2xkZXIpL2ZpbGUudHh0XCJcbiAgICAgICAgZm9yIGtleSwgdmFsdWUgb2YgZXhwYW5kX2RpY3Rpb25hcnkgc3RyaW5nc1xuICAgICAgICAgIGRlYnVnICfOqWt2cnRfX183JywgZlwiI3trZXl9OjwyMGM7ICN7cnByIHZhbHVlfVwiXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGJyaWNhYnJhY19qc29uID0ge1xuICAgICAgICAgIFwic3RyaW5nc1wiOiB7XG4gICAgICAgICAgICBcIihnaClcIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb21cIixcbiAgICAgICAgICAgIFwiKGZsb3cpL1wiOiBcIihnaCkvbG92ZWVuY291bnRlcmZsb3cvXCIsXG4gICAgICAgICAgICBcIihzZm1vZHVsZXMpXCI6IFwiKGZsb3cpL2JyaWNhYnJhYy1zZm1vZHVsZXMvcmVmcy9oZWFkcy9tYWluL3NyY1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIFwibWFwcGluZ3NcIjoge1xuICAgICAgICAgICAgXCJhXCI6IFwiLS0oZ2gpLS1cIlxuICAgICAgICAgICAgXCJiXCI6IFwiLS0oZmxvdykvLS1cIlxuICAgICAgICAgICAgXCJjXCI6IFwiLS0oc2Ztb2R1bGVzKS0tXCJcbiAgICAgICAgICAgIFwiZFwiOiBcIn4vLS0oc2Ztb2R1bGVzKS0tXCIgfSB9XG4gICAgICAgIF9icmljYWJyYWNfY29tcGlsZWRfanNvbiA9IHtcbiAgICAgICAgICBcInN0cmluZ3NcIjoge1xuICAgICAgICAgICAgXCIoZ2gpXCI6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tXCIsXG4gICAgICAgICAgICBcIihmbG93KS9cIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvXCIsXG4gICAgICAgICAgICBcIihzZm1vZHVsZXMpXCI6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93L2JyaWNhYnJhYy1zZm1vZHVsZXMvcmVmcy9oZWFkcy9tYWluL3NyY1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIFwibWFwcGluZ3NcIjoge1xuICAgICAgICAgICAgXCJhXCI6IFwiLS1odHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20tLVwiXG4gICAgICAgICAgICBcImJcIjogXCItLWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy8tLVwiXG4gICAgICAgICAgICBcImNcIjogXCItLWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzL3JlZnMvaGVhZHMvbWFpbi9zcmMtLVwiXG4gICAgICAgICAgICBcImRcIjogXCJ+Ly0taHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93L2JyaWNhYnJhYy1zZm1vZHVsZXMvcmVmcy9oZWFkcy9tYWluL3NyYy0tXCIgfSB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmVzdWx0ICAgICAgICAgID0ge31cbiAgICAgICAgcmVzdWx0LnN0cmluZ3MgID0gZXhwYW5kX2RpY3Rpb25hcnkgYnJpY2FicmFjX2pzb24uc3RyaW5nc1xuICAgICAgICByZXN1bHQubWFwcGluZ3MgPSB7fVxuICAgICAgICBmb3IgdGFyZ2V0X3BhdGgsIHNvdXJjZV9zcGVjIG9mIGJyaWNhYnJhY19qc29uLm1hcHBpbmdzXG4gICAgICAgICAgcmVzdWx0Lm1hcHBpbmdzWyB0YXJnZXRfcGF0aCBdID0gc291cmNlX3NwZWNcbiAgICAgICAgICBmb3IgcGF0dGVybl9rZXksIHBhdHRlcm5fdmFsdWUgb2YgcmVzdWx0LnN0cmluZ3NcbiAgICAgICAgICAgIHJlc3VsdC5tYXBwaW5nc1sgdGFyZ2V0X3BhdGggXSA9IHJlc3VsdC5tYXBwaW5nc1sgdGFyZ2V0X3BhdGggXS5yZXBsYWNlQWxsIHBhdHRlcm5fa2V5LCBwYXR0ZXJuX3ZhbHVlXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF9fXzgnLCByZXN1bHRcbiAgICAgICAgQGVxICggzqlrdnJ0X19fOSA9IC0+IGZhbHNlICksIFwicmVzb2x2ZSBob21lIGRpcmVjdG9yeSB3aXRoIG9zLmhvbWVkaXIoKSAvIGxvY2FsLWRlc3RpbmF0aW9uLmJyaWNzXCJcbiAgICAgICAgQGVxICggzqlrdnJ0X18xMCA9IC0+IE9iamVjdC5rZXlzIHJlc3VsdCApLCBPYmplY3Qua2V5cyBfYnJpY2FicmFjX2NvbXBpbGVkX2pzb25cbiAgICAgICAgZm9yIGtleSwgdmFsdWUgb2YgcmVzdWx0LnN0cmluZ3NcbiAgICAgICAgICBAZXEgKCDOqWt2cnRfXzExID0gLT4gdmFsdWUgKSwgX2JyaWNhYnJhY19jb21waWxlZF9qc29uLnN0cmluZ3NbIGtleSBdXG4gICAgICAgIGZvciBrZXksIHZhbHVlIG9mIHJlc3VsdC5tYXBwaW5nc1xuICAgICAgICAgIEBlcSAoIM6pa3ZydF9fMTIgPSAtPiB2YWx1ZSApLCBfYnJpY2FicmFjX2NvbXBpbGVkX2pzb24ubWFwcGluZ3NbIGtleSBdXG4gICAgICAgICMgZGVidWcgJ86pa3ZydF9fMTMnLCAoIGdldF9sb2NhbF9kZXN0aW5hdGlvbnMgbnVsbCApLmhvbWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVxdWlyZV9nZXRfbG9jYWxfZGVzdGluYXRpb25zOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IGdldF9sb2NhbF9kZXN0aW5hdGlvbnMsIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9nZXRfbG9jYWxfZGVzdGluYXRpb25zKClcbiAgICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICAgIE9TICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6b3MnXG4gICAgICBGUyAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIHtcbiAgICAgICMgICBhcHA6IHtcbiAgICAgICMgICAgIG5hbWU6ICdteS1hcHAtbmFtZScsXG4gICAgICAjICAgICBkYXRhOiAnL2hvbWUvZmxvdy8ubG9jYWwvc2hhcmUvbXktYXBwLW5hbWUnLFxuICAgICAgIyAgICAgY29uZmlnOiAnL2hvbWUvZmxvdy8uY29uZmlnL215LWFwcC1uYW1lJyxcbiAgICAgICMgICAgIGNhY2hlOiAnL2hvbWUvZmxvdy8uY2FjaGUvbXktYXBwLW5hbWUnLFxuICAgICAgIyAgICAgbG9nOiAnL2hvbWUvZmxvdy8ubG9jYWwvc3RhdGUvbXktYXBwLW5hbWUnLFxuICAgICAgIyAgICAgdGVtcDogJy90bXAvZmxvdy9teS1hcHAtbmFtZScsXG4gICAgICAjICAgICBob21lOiAnL2hvbWUvZmxvdy9teS1hcHAtbmFtZScsXG4gICAgICAjICAgICBub2RlX21vZHVsZXM6ICcvaG9tZS9mbG93L215LWFwcC1uYW1lL25vZGVfbW9kdWxlcycsXG4gICAgICAjICAgICBkZXBfYmluOiAnL2hvbWUvZmxvdy9teS1hcHAtbmFtZS9ub2RlX21vZHVsZXMvLmJpbicsXG4gICAgICAjICAgICBvd25fYmluOiAnL2hvbWUvZmxvdy9teS1hcHAtbmFtZS9iaW4nXG4gICAgICAjICAgfSxcbiAgICAgICMgICB1c2VyOiB7IG5hbWU6ICdmbG93JywgaG9tZTogJy9ob21lL2Zsb3cnLCB0ZW1wOiAnL3RtcCcgfVxuICAgICAgIyB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZydF9fMTQgPSAtPiB0eXBlX29mIGdldF9sb2NhbF9kZXN0aW5hdGlvbnMgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBhcHBfbmFtZSAgICAgID0gJ215LWFwcC1uYW1lJ1xuICAgICAgICBkc3QgICAgICAgICAgID0gZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyB7IGFwcF9uYW1lLCB9XG4gICAgICAgIHVzZXJfbmZvICAgICAgPSBPUy51c2VySW5mbygpXG4gICAgICAgIGhvbWUgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MuaG9tZWRpcigpXG4gICAgICAgIHRlbXAgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MudG1wZGlyKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzE1ID0gLT4gKCBPYmplY3Qua2V5cyBkc3QgKS5zb3J0KCkgICAgICAgKSwgWyAnYXBwJywgJ3VzZXInLCBdXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMTYgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC5hcHAgKS5zb3J0KCkgICApLCBbICdjYWNoZScsICdjb25maWcnLCAnZGF0YScsICdkZXBfYmluJywgJ2hvbWUnLCAnbG9nJywgJ25hbWUnLCAnbm9kZV9tb2R1bGVzJywgJ293bl9iaW4nLCAndGVtcCcgXVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzE3ID0gLT4gKCBPYmplY3Qua2V5cyBkc3QudXNlciApLnNvcnQoKSAgKSwgWyAnaG9tZScsICduYW1lJywgJ3RlbXAnLCBdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X18xOCA9IC0+IHR5cGVfb2YgZHN0LmFwcCAgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMTkgPSAtPiB0eXBlX29mIGRzdC51c2VyICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMjAgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY2FjaGUgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzIxID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmNvbmZpZyAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X18yMiA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5kYXRhICAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMjMgPSAtPiBkc3QuYXBwLmRlcF9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX25hbWUsICdub2RlX21vZHVsZXMnLCAnLmJpbidcbiAgICAgICAgQGVxICggzqlrdnJ0X18yNCA9IC0+IGRzdC5hcHAuaG9tZSAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzI1ID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmxvZyAgICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X18yNiA9IC0+IGRzdC5hcHAubmFtZSAgICAgICAgICAgICAgICAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMjcgPSAtPiBkc3QuYXBwLm5vZGVfbW9kdWxlcyAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX25hbWUsICdub2RlX21vZHVsZXMnXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMjggPSAtPiBkc3QuYXBwLm93bl9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX25hbWUsICdiaW4nXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMjkgPSAtPiBkc3QuYXBwLnRlbXAgICAgICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgZHN0LnVzZXIudGVtcCwgZHN0LnVzZXIubmFtZSwgYXBwX25hbWVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzMwID0gLT4gZHN0LnVzZXIuaG9tZSAgICAgICAgICAgICAgICAgICAgKSwgaG9tZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzMxID0gLT4gZHN0LnVzZXIubmFtZSAgICAgICAgICAgICAgICAgICAgKSwgdXNlcl9uZm8udXNlcm5hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X18zMiA9IC0+IGRzdC51c2VyLnRlbXAgICAgICAgICAgICAgICAgICAgICksIHRlbXBcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBhcHBfbmFtZSAgICAgID0gbnVsbFxuICAgICAgICBkc3QgICAgICAgICAgID0gZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyB7IGFwcF9uYW1lLCB9XG4gICAgICAgIHVzZXJfbmZvICAgICAgPSBPUy51c2VySW5mbygpXG4gICAgICAgIGhvbWUgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MuaG9tZWRpcigpXG4gICAgICAgIHRlbXAgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MudG1wZGlyKClcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzMzID0gLT4gKCBPYmplY3Qua2V5cyBkc3QgKS5zb3J0KCkgICAgICAgKSwgWyAnYXBwJywgJ3VzZXInLCBdXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMzQgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC5hcHAgKS5zb3J0KCkgICApLCBbICdjYWNoZScsICdjb25maWcnLCAnZGF0YScsICdkZXBfYmluJywgJ2hvbWUnLCAnbG9nJywgJ25hbWUnLCAnbm9kZV9tb2R1bGVzJywgJ293bl9iaW4nLCAndGVtcCcgXVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzM1ID0gLT4gKCBPYmplY3Qua2V5cyBkc3QudXNlciApLnNvcnQoKSAgKSwgWyAnaG9tZScsICduYW1lJywgJ3RlbXAnLCBdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X18zNiA9IC0+IHR5cGVfb2YgZHN0LmFwcCAgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMzcgPSAtPiB0eXBlX29mIGRzdC51c2VyICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMzggPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY2FjaGUgICAgICApLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMzkgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY29uZmlnICAgICApLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNDAgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuZGF0YSAgICAgICApLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNDEgPSAtPiBkc3QuYXBwLmRlcF9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+JywgJ25vZGVfbW9kdWxlcycsICcuYmluJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzQyID0gLT4gZHN0LmFwcC5ob21lICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgQGVxICggzqlrdnJ0X180MyA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5sb2cgICAgICAgICksICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgQGVxICggzqlrdnJ0X180NCA9IC0+IGRzdC5hcHAubmFtZSAgICAgICAgICAgICAgICAgICAgICksICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgICAgQGVxICggzqlrdnJ0X180NSA9IC0+IGRzdC5hcHAubm9kZV9tb2R1bGVzICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nLCAnbm9kZV9tb2R1bGVzJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzQ2ID0gLT4gZHN0LmFwcC5vd25fYmluICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsICc8WU9VUi1BUFAtTkFNRS1IRVJFPicsICdiaW4nXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNDcgPSAtPiBkc3QuYXBwLnRlbXAgICAgICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgZHN0LnVzZXIudGVtcCwgZHN0LnVzZXIubmFtZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNDggPSAtPiBkc3QudXNlci5ob21lICAgICAgICAgICAgICAgICAgICApLCBob21lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNDkgPSAtPiBkc3QudXNlci5uYW1lICAgICAgICAgICAgICAgICAgICApLCB1c2VyX25mby51c2VybmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzUwID0gLT4gZHN0LnVzZXIudGVtcCAgICAgICAgICAgICAgICAgICAgKSwgdGVtcFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGFwcF9uYW1lICAgICAgPSAnZnJvYnVsYXRvcidcbiAgICAgICAgYXBwX2hvbWUgICAgICA9ICcvcGF0aC90by9wcm9qZWN0cydcbiAgICAgICAgZHN0ICAgICAgICAgICA9IGdldF9sb2NhbF9kZXN0aW5hdGlvbnMgeyBhcHBfbmFtZSwgYXBwX2hvbWUgfVxuICAgICAgICB1c2VyX25mbyAgICAgID0gT1MudXNlckluZm8oKVxuICAgICAgICBob21lICAgICAgICAgID0gRlMucmVhbHBhdGhTeW5jIE9TLmhvbWVkaXIoKVxuICAgICAgICB0ZW1wICAgICAgICAgID0gRlMucmVhbHBhdGhTeW5jIE9TLnRtcGRpcigpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlrdnJ0X181MSA9IC0+ICggT2JqZWN0LmtleXMgZHN0ICkuc29ydCgpICAgICAgICksIFsgJ2FwcCcsICd1c2VyJywgXVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzUyID0gLT4gKCBPYmplY3Qua2V5cyBkc3QuYXBwICkuc29ydCgpICAgKSwgWyAnY2FjaGUnLCAnY29uZmlnJywgJ2RhdGEnLCAnZGVwX2JpbicsICdob21lJywgJ2xvZycsICduYW1lJywgJ25vZGVfbW9kdWxlcycsICdvd25fYmluJywgJ3RlbXAnIF1cbiAgICAgICAgQGVxICggzqlrdnJ0X181MyA9IC0+ICggT2JqZWN0LmtleXMgZHN0LnVzZXIgKS5zb3J0KCkgICksIFsgJ2hvbWUnLCAnbmFtZScsICd0ZW1wJywgXVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTQgPSAtPiB0eXBlX29mIGRzdC5hcHAgICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzU1ID0gLT4gdHlwZV9vZiBkc3QudXNlciAgICAgICAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzU2ID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmNhY2hlICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X181NyA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jb25maWcgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNTggPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuZGF0YSAgICAgICApLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzU5ID0gLT4gZHN0LmFwcC5kZXBfYmluICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9ob21lLCBhcHBfbmFtZSwgJ25vZGVfbW9kdWxlcycsICcuYmluJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzYwID0gLT4gZHN0LmFwcC5ob21lICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9ob21lLCBhcHBfbmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzYxID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmxvZyAgICAgICAgKSwgYXBwX25hbWVcbiAgICAgICAgQGVxICggzqlrdnJ0X182MiA9IC0+IGRzdC5hcHAubmFtZSAgICAgICAgICAgICAgICAgICAgICksIGFwcF9uYW1lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjMgPSAtPiBkc3QuYXBwLm5vZGVfbW9kdWxlcyAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX2hvbWUsIGFwcF9uYW1lLCAnbm9kZV9tb2R1bGVzJ1xuICAgICAgICBAZXEgKCDOqWt2cnRfXzY0ID0gLT4gZHN0LmFwcC5vd25fYmluICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9ob21lLCBhcHBfbmFtZSwgJ2JpbidcbiAgICAgICAgQGVxICggzqlrdnJ0X182NSA9IC0+IGRzdC5hcHAudGVtcCAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBkc3QudXNlci50ZW1wLCBkc3QudXNlci5uYW1lLCBhcHBfbmFtZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjYgPSAtPiBkc3QudXNlci5ob21lICAgICAgICAgICAgICAgICAgICApLCBob21lXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNjcgPSAtPiBkc3QudXNlci5uYW1lICAgICAgICAgICAgICAgICAgICApLCB1c2VyX25mby51c2VybmFtZVxuICAgICAgICBAZXEgKCDOqWt2cnRfXzY4ID0gLT4gZHN0LnVzZXIudGVtcCAgICAgICAgICAgICAgICAgICAgKSwgdGVtcFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlcXVpcmVfd2Fsa19qc190b2tlbnM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgd2Fsa19qc190b2tlbnMsXG4gICAgICAgIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyxcbiAgICAgICAgc3VtbWFyaXplLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3dhbGtfanNfdG9rZW5zKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJ0X182OSA9IC0+IHR5cGVfb2Ygd2Fsa19qc190b2tlbnMgICAgICAgICAgICApLCAnZ2VuZXJhdG9yZnVuY3Rpb24nXG4gICAgICBAZXEgKCDOqWt2cnRfXzcwID0gLT4gdHlwZV9vZiB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgICksICdnZW5lcmF0b3JmdW5jdGlvbidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgQGVxICggzqlrdnJ0X183MSA9IC0+IHR5cGVfb2Ygd2Fsa19qc190b2tlbnMgJycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdnZW5lcmF0b3InXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzIgPSAtPiBbICggd2Fsa19qc190b2tlbnMgJycgKS4uLiwgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbIHsgdHlwZTogJ2VvZicsIH0sIF1cbiAgICAgICAgQGVxICggzqlrdnJ0X183MyA9IC0+IHN1bW1hcml6ZSB3YWxrX2pzX3Rva2VucyAgICAgICAgICAgICd2YXIgYSA9IDk7JyAgICAgICAgICAgICAgICAgICksIFwiJiYmSWRlbnRpZmllck5hbWUndmFyJyYmJldoaXRlU3BhY2UnICcmJiZJZGVudGlmaWVyTmFtZSdhJyYmJldoaXRlU3BhY2UnICcmJiZQdW5jdHVhdG9yJz0nJiYmV2hpdGVTcGFjZScgJyYmJk51bWVyaWNMaXRlcmFsJzknJiYmUHVuY3R1YXRvcic7JyYmJmVvZiYmJlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fNzQgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICAndmFyIGEgPSA5OycgICAgICAgICAgICAgICAgICApLCBcIiYmJklkZW50aWZpZXJOYW1lJ3ZhcicmJiZJZGVudGlmaWVyTmFtZSdhJyYmJlB1bmN0dWF0b3InPScmJiZOdW1lcmljTGl0ZXJhbCc5JyYmJlB1bmN0dWF0b3InOycmJiZlb2YmJiZcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzc1ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgJ1wieVwiJyAgICAgICAgICAgICAgICAgICAgICAgICApLCBcIlwiXCImJiZTdHJpbmdMaXRlcmFsJ1wieVwiJyYmJmVvZiYmJlwiXCJcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzc2ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCIneSdcIiAgICAgICAgICAgICAgICAgICAgICAgICApLCBcIiYmJlN0cmluZ0xpdGVyYWwnXFxcXCd5XFxcXCcnJiYmZW9mJiYmXCJcbiAgICAgICAgQGVxICggzqlrdnJ0X183NyA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwiYEEkeyd5J31aYFwiICAgICAgICAgICAgICAgICAgKSwgXCImJiZUZW1wbGF0ZUhlYWQnYEEkeycmJiZTdHJpbmdMaXRlcmFsJ1xcXFwneVxcXFwnJyYmJlRlbXBsYXRlVGFpbCd9WmAnJiYmZW9mJiYmXCJcbiAgICAgICAgQGVxICggzqlrdnJ0X183OCA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwiZmBBJHsneSd9WmBcIiAgICAgICAgICAgICAgICAgKSwgXCImJiZJZGVudGlmaWVyTmFtZSdmJyYmJlRlbXBsYXRlSGVhZCdgQSR7JyYmJlN0cmluZ0xpdGVyYWwnXFxcXCd5XFxcXCcnJiYmVGVtcGxhdGVUYWlsJ31aYCcmJiZlb2YmJiZcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzc5ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJgQSR7YHlgfVpgXCIgICAgICAgICAgICAgICAgICApLCBcIiYmJlRlbXBsYXRlSGVhZCdgQSR7JyYmJk5vU3Vic3RpdHV0aW9uVGVtcGxhdGUnYHlgJyYmJlRlbXBsYXRlVGFpbCd9WmAnJiYmZW9mJiYmXCJcbiAgICAgICAgQGVxICggzqlrdnJ0X184MCA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwiYEEke3JlcXVpcmUoYHlgKX1aYFwiICAgICAgICAgKSwgXCImJiZUZW1wbGF0ZUhlYWQnYEEkeycmJiZJZGVudGlmaWVyTmFtZSdyZXF1aXJlJyYmJlB1bmN0dWF0b3InKCcmJiZOb1N1YnN0aXR1dGlvblRlbXBsYXRlJ2B5YCcmJiZQdW5jdHVhdG9yJyknJiYmVGVtcGxhdGVUYWlsJ31aYCcmJiZlb2YmJiZcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzgxID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJyZXF1aXJlID0gNzc3XCIgICAgICAgICAgICAgICApLCBcIiYmJklkZW50aWZpZXJOYW1lJ3JlcXVpcmUnJiYmUHVuY3R1YXRvcic9JyYmJk51bWVyaWNMaXRlcmFsJzc3NycmJiZlb2YmJiZcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzgyID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJyZXF1aXJlID0gNzc3IC8vIGZvbzogYmFyXCIgICApLCBcIiYmJklkZW50aWZpZXJOYW1lJ3JlcXVpcmUnJiYmUHVuY3R1YXRvcic9JyYmJk51bWVyaWNMaXRlcmFsJzc3NycmJiZlb2YmJiZcIlxuICAgICAgICBAZXEgKCDOqWt2cnRfXzgzID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJyZXF1aXJlID0gNzc3OyAvLyBmb286IGJhclwiICApLCBcIiYmJklkZW50aWZpZXJOYW1lJ3JlcXVpcmUnJiYmUHVuY3R1YXRvcic9JyYmJk51bWVyaWNMaXRlcmFsJzc3NycmJiZQdW5jdHVhdG9yJzsnJiYmZW9mJiYmXCJcbiAgICAgICAgIyBAZXEgKCDOqWt2cnRfXzg0ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJ0cnVlXCIgICAgICAgICAgICAgICAgKSwgbnVsbFxuICAgICAgICAjIEBlcSAoIM6pa3ZydF9fODUgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zICBcImZhbHNlXCIgICAgICAgICAgICAgICApLCBudWxsXG4gICAgICAgICMgQGVxICggzqlrdnJ0X184NiA9IC0+IHN1bW1hcml6ZSB3YWxrX2Vzc2VudGlhbF9qc190b2tlbnMgIFwidW5kZWZpbmVkXCIgICAgICAgICAgICksIG51bGxcbiAgICAgICAgIyBAZXEgKCDOqWt2cnRfXzg3ID0gLT4gc3VtbWFyaXplIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyAgXCJudWxsXCIgICAgICAgICAgICAgICAgKSwgbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNvdXJjZSA9IFwiY29uc3QgeyBkLCB9ID0gcmVxdWlyZSggJ3NvbWUtbW9kdWxlJyApOyAvKiByZXF1aXJlKCAnb3RoZXItbW9kdWxlJyApICovXCJcbiAgICAgICAgZm9yIHRva2VuIGZyb20gd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zIHNvdXJjZVxuICAgICAgICAgIGluZm8gJ86pa3ZydF9fODgnLCBmXCIje3Rva2VuLnR5cGV9Oj4yMGM7ICN7cnByIHRva2VuLnZhbHVlfVwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fODkgPSAtPiBzdW1tYXJpemUgd2Fsa19lc3NlbnRpYWxfanNfdG9rZW5zIHNvdXJjZSApLCBcIiYmJklkZW50aWZpZXJOYW1lJ2NvbnN0JyYmJlB1bmN0dWF0b3IneycmJiZJZGVudGlmaWVyTmFtZSdkJyYmJlB1bmN0dWF0b3InLCcmJiZQdW5jdHVhdG9yJ30nJiYmUHVuY3R1YXRvcic9JyYmJklkZW50aWZpZXJOYW1lJ3JlcXVpcmUnJiYmUHVuY3R1YXRvcicoJyYmJlN0cmluZ0xpdGVyYWwnXFxcXCdzb21lLW1vZHVsZVxcXFwnJyYmJlB1bmN0dWF0b3InKScmJiZQdW5jdHVhdG9yJzsnJiYmZW9mJiYmXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX3BhcnNlX3JlcXVpcmVfc3RhdGVtZW50czogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgd2Fsa19yZXF1aXJlX3N0YXRlbWVudHMsICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfcGFyc2VfcmVxdWlyZV9zdGF0ZW1lbnRzKClcbiAgICAgIHsgd2Fsa19qc190b2tlbnMsXG4gICAgICAgIHdhbGtfZXNzZW50aWFsX2pzX3Rva2VucyxcbiAgICAgICAgc3VtbWFyaXplLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfd2Fsa19qc190b2tlbnMoKVxuICAgICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgICBGUyAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZydF9fOTAgPSAtPiB0eXBlX29mIHdhbGtfcmVxdWlyZV9zdGF0ZW1lbnRzICksICdmdW5jdGlvbidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgcGF0aCAgICAgICAgICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hc3NldHMvYnJpY2FicmFjL3BhcnNlLXJlcXVpcmUtc3RhdGVtZW50cy90ZXN0LWJhc2ljcy5qcydcbiAgICAgICAgd291bGRiZV9wYXRoICA9IF9fZmlsZW5hbWVcbiAgICAgICAgc291cmNlICAgICAgICA9ICggRlMucmVhZEZpbGVTeW5jIHBhdGgsIHsgZW5jb2Rpbmc6ICd1dGYtOCcsIH0gKVxuICAgICAgICAjIGZvciBkIGZyb20gd2Fsa19yZXF1aXJlX3N0YXRlbWVudHMgcGF0aFxuICAgICAgICAjICAgZGVidWcgJ86pa3ZydF9fOTEnLCBkXG4gICAgICAgIHRva2VucyAgICAgICAgPSB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cyB7IHBhdGg6IHdvdWxkYmVfcGF0aCwgc291cmNlLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF9fOTIgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiA1LCBkaXNwb3NpdGlvbjogJ25wbScsIHNlbGVjdG9yOiAnZ3V5JywgYW5ub3RhdGlvbjogJ3NlbXZlcjowLjMuNCcsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0X185MyA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDEyLCBkaXNwb3NpdGlvbjogJ2luc2lkZScsIHNlbGVjdG9yOiAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0X185NCA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDE2LCBkaXNwb3NpdGlvbjogJ2luc2lkZScsIHNlbGVjdG9yOiAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF9fOTUgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiAyNSwgZGlzcG9zaXRpb246ICdpbnNpZGUnLCBzZWxlY3RvcjogJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0X185NiA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDE2MiwgZGlzcG9zaXRpb246ICdpbnNpZGUnLCBzZWxlY3RvcjogJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0X185NyA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDE2NSwgZGlzcG9zaXRpb246ICdub2RlJywgc2VsZWN0b3I6ICdub2RlOnBhdGgnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF9fOTggPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiAxNjYsIGRpc3Bvc2l0aW9uOiAnbm9kZScsIHNlbGVjdG9yOiAnbm9kZTpvcycsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0X185OSA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAncmVxdWlyZScsIGxpbmVfbnI6IDE2NywgZGlzcG9zaXRpb246ICdub2RlJywgc2VsZWN0b3I6ICdub2RlOmZzJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTAwID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogMzk5LCBkaXNwb3NpdGlvbjogJ2luc2lkZScsIHNlbGVjdG9yOiAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJywgYW5ub3RhdGlvbjogbnVsbCwgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTAxID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogNDY1LCBkaXNwb3NpdGlvbjogJ25vZGUnLCBzZWxlY3RvcjogJ25vZGU6ZnMnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMDIgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiA0NjYsIGRpc3Bvc2l0aW9uOiAnaW5zaWRlJywgc2VsZWN0b3I6ICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMDMgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3dhcm5pbmcnLCBtZXNzYWdlOiBcImlnbm9yaW5nIHBvc3NpYmxlIGByZXF1aXJlYCBvbiBsaW5lIDU1NDogJyAgICAgICAgcmVxdWlyZTsnXCIsIGxpbmU6ICcgICAgICAgIHJlcXVpcmU7JywgbGluZV9ucjogNTU0IH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzEwNCA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAnd2FybmluZycsIG1lc3NhZ2U6IFwiaWdub3JpbmcgcG9zc2libGUgYHJlcXVpcmVgIG9uIGxpbmUgNTU1OiAnICAgICAgICByZXF1aXJlKHRydWUpOydcIiwgbGluZTogJyAgICAgICAgcmVxdWlyZSh0cnVlKTsnLCBsaW5lX25yOiA1NTUgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTA1ID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogNTU2LCBkaXNwb3NpdGlvbjogJ25wbScsIHNlbGVjdG9yOiAncGtnIzEnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMDYgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiA1NTcsIGRpc3Bvc2l0aW9uOiAnbnBtJywgc2VsZWN0b3I6ICdwa2cjMicsIGFubm90YXRpb246IG51bGwsIH1cbiAgICAgICAgQGVxICggzqlrdnJ0XzEwNyA9IC0+IHRva2Vucy5uZXh0KCkudmFsdWUgKSwgeyB0eXBlOiAnd2FybmluZycsIG1lc3NhZ2U6IFwiaWdub3JpbmcgcG9zc2libGUgYHJlcXVpcmVgIG9uIGxpbmUgNTU4OiAnICAgICAgICByZXR1cm4gcmVxdWlyZSggYHBrZyMzYCArIFxcXFwnc3VmZml4XFxcXCcgKTsnXCIsIGxpbmU6IFwiICAgICAgICByZXR1cm4gcmVxdWlyZSggYHBrZyMzYCArICdzdWZmaXgnICk7XCIsIGxpbmVfbnI6IDU1OCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMDggPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3JlcXVpcmUnLCBsaW5lX25yOiA1NjYsIGRpc3Bvc2l0aW9uOiAnaW5zaWRlJywgc2VsZWN0b3I6ICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnLCBhbm5vdGF0aW9uOiBudWxsLCB9XG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMDkgPSAtPiB0b2tlbnMubmV4dCgpLnZhbHVlICksIHsgdHlwZTogJ3dhcm5pbmcnLCBtZXNzYWdlOiBcImlnbm9yaW5nIHBvc3NpYmxlIGByZXF1aXJlYCBvbiBsaW5lIDYwMjogJyAgaWYgKG1vZHVsZSA9PT0gcmVxdWlyZS5tYWluKSB7J1wiLCBsaW5lOiAnICBpZiAobW9kdWxlID09PSByZXF1aXJlLm1haW4pIHsnLCBsaW5lX25yOiA2MDIgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTEwID0gLT4gdG9rZW5zLm5leHQoKS52YWx1ZSApLCB7IHR5cGU6ICdyZXF1aXJlJywgbGluZV9ucjogNjI2LCBkaXNwb3NpdGlvbjogJ291dHNpZGUnLCBzZWxlY3RvcjogJy4uLy4uLy4uLy4uL3doYXRldmVyJywgYW5ub3RhdGlvbjogbnVsbCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB3aGlzcGVyICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJMnXG4gICAgICAgIGZvciBkIGZyb20gd2Fsa19yZXF1aXJlX3N0YXRlbWVudHMgeyBzb3VyY2U6ICdyZXF1aXJlKFwieHh4XCIpOycsIH1cbiAgICAgICAgICBpbmZvICfOqWt2cnRfMTExJywgZFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgZm9yIGQgZnJvbSB3YWxrX3JlcXVpcmVfc3RhdGVtZW50cyB7IHNvdXJjZTogJ3JlcXVpcmUoXCJ4eHhcIikgLy8gc2VtdmVyOiA1LjYuNycsIH1cbiAgICAgICAgICB1cmdlICfOqWt2cnRfMTEyJywgZFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHdoaXNwZXIgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAkydcbiAgICAgICAgZm9yIHRva2VuIGZyb20gd2Fsa19qc190b2tlbnMgJ3JlcXVpcmUoXCJ4eHhcIik7IC8vIHNlbXZlcjogNS42LjcnXG4gICAgICAgICAgaGVscCAnzqlrdnJ0XzExMycsIHRva2VuXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgd2hpc3BlciAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTJ1xuICAgICAgICBmb3IgZCBmcm9tIHdhbGtfcmVxdWlyZV9zdGF0ZW1lbnRzIHsgc291cmNlOiAncmVxdWlyZShcInh4eFwiKTsgLy8gc2VtdmVyOiA1LjYuNycsIH1cbiAgICAgICAgICBpbmZvICfOqWt2cnRfMTE0JywgZFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX3Jwcl9zdHJpbmc6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgcnByX3N0cmluZywgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3Jwcl9zdHJpbmcoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cnRfMTE1ID0gLT4gdHlwZV9vZiBycHJfc3RyaW5nICksICdmdW5jdGlvbidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgQGVxICggzqlrdnJ0XzExNiA9IC0+IHJwcl9zdHJpbmcgJycgICAgICAgKSwgXCJcIlwiJydcIlwiXCJcbiAgICAgICAgQGVxICggzqlrdnJ0XzExNyA9IC0+IHJwcl9zdHJpbmcgJ1wiJyAgICAgICksIFwiXCJcIidcIidcIlwiXCJcbiAgICAgICAgQGVxICggzqlrdnJ0XzExOCA9IC0+IHJwcl9zdHJpbmcgXCInXCIgICAgICApLCBcIlwiXCInXFxcXCcnXCJcIlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMTkgPSAtPiBycHJfc3RyaW5nICdwb3AnICAgICksIFwiXCJcIidwb3AnXCJcIlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMjAgPSAtPiBycHJfc3RyaW5nICdcInBvcFwiJyAgKSwgXCJcIlwiJ1wicG9wXCInXCJcIlwiXG4gICAgICAgIEBlcSAoIM6pa3ZydF8xMjEgPSAtPiBycHJfc3RyaW5nIFwiJ3BvcCdcIiAgKSwgXCJcIlwiJ1xcXFwncG9wXFxcXCcnXCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVxdWlyZV9wYXRoX3Rvb2xzOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IGlzX2luc2lkZSwgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9wYXRoX3Rvb2xzKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJ0XzEyMiA9IC0+IHR5cGVfb2YgaXNfaW5zaWRlICksICdmdW5jdGlvbidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgQHRocm93cyAoIM6pa3ZydF8xMjMgPSAtPiBpc19pbnNpZGUgJy4uL3BhdGgvdG8vZmlsZScsICAgICAgICcvJyAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGFuIGFic29sdXRlIHBhdGggYXMgYW5jaG9yL1xuICAgICAgICBAdGhyb3dzICggzqlrdnJ0XzEyNCA9IC0+IGlzX2luc2lkZSAnLi4vcGF0aC90by9maWxlJywgICAgICAgJ3dhdCcgICAgICAgICAgICAgICApLCAvZXhwZWN0ZWQgYW4gYWJzb2x1dGUgcGF0aCBhcyBhbmNob3IvXG4gICAgICAgIEB0aHJvd3MgKCDOqWt2cnRfMTI1ID0gLT4gaXNfaW5zaWRlICcuLi9wYXRoL3RvL2ZpbGUnLCAgICAgICAnLi4vcGF0aC90by9maWxlJyAgICksIC9leHBlY3RlZCBhbiBhYnNvbHV0ZSBwYXRoIGFzIGFuY2hvci9cbiAgICAgICAgQHRocm93cyAoIM6pa3ZydF8xMjYgPSAtPiBpc19pbnNpZGUgJ3BhdGgvdG8vZmlsZScsICAgICAgICAgICcuLi9wYXRoL3RvL2ZpbGUnICAgKSwgL2V4cGVjdGVkIGFuIGFic29sdXRlIHBhdGggYXMgYW5jaG9yL1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTI3ID0gLT4gaXNfaW5zaWRlICcvJywgICAgICAgICAgICAgICAgICAgICAnL3BhdGgvdG8vZmlsZScgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMjggPSAtPiBpc19pbnNpZGUgJy9wYXRoL3RvL2ZpbGUnLCAgICAgICAgICcvcGF0aC90by9maWxlJyAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAgICggzqlrdnJ0XzEyOSA9IC0+IGlzX2luc2lkZSAnL3BhdGgvdG8vZmlsZScsICAgICAgICAgJ29vcHMnICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTMwID0gLT4gaXNfaW5zaWRlICcvcGF0aC8uLi9maWxlJywgICAgICAgICAnL2ZpbGUnICAgICAgICAgICAgICksIHRydWVcbiAgICAgICAgQGVxICAgICAoIM6pa3ZydF8xMzEgPSAtPiBpc19pbnNpZGUgJy9wYXRoLy4uL2ZpbGUvLicsICAgICAgICcvZmlsZScgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAgICggzqlrdnJ0XzEzMiA9IC0+IGlzX2luc2lkZSAnL3BhdGgvLi4vZmlsZS8uLy4vLi8uJywgJy9maWxlJyAgICAgICAgICAgICApLCB0cnVlXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTMzID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlJywgICAgICAgICAnLlxcXFwuL29vcHMnICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAgICggzqlrdnJ0XzEzNCA9IC0+IGlzX2luc2lkZSAnL3BhdGgvdG8vZmlsZScsICAgICAgICAgJy4uXFxcXC9vb3BzJyAgICAgICAgICksIHRydWVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgICAgICggzqlrdnJ0XzEzNSA9IC0+IGlzX2luc2lkZSAnL3BhdGgvdG8vZmlsZS93YXQnLCAgICAgJy9wYXRoL3RvL2ZpbGUnICAgICApLCBmYWxzZVxuICAgICAgICBAZXEgICAgICggzqlrdnJ0XzEzNiA9IC0+IGlzX2luc2lkZSAnL3BhdGgvdG8vZmlsZScsICAgICAgICAgJy4uL29vcHMnICAgICAgICAgICApLCBmYWxzZVxuICAgICAgICBAZXEgICAgICggzqlrdnJ0XzEzNyA9IC0+IGlzX2luc2lkZSAnL3BhdGgvdG8vZmlsZScsICAgICAgICAgJy9vb3BzJyAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgICBAZXEgICAgICggzqlrdnJ0XzEzOCA9IC0+IGlzX2luc2lkZSAnL3BhdGgvdG8vZmlsZScsICAgICAgICAgJy8nICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgICBAZXEgICAgICggzqlrdnJ0XzEzOSA9IC0+IGlzX2luc2lkZSAnL3BhdGgvLi4vZmlsZScsICAgICAgICAgJy9wYXRoJyAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlcXVpcmVfamV0c3RyZWFtOiAtPlxuICAgICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgICB7IEpldHN0cmVhbSxcbiAgICAgICAgJCxcbiAgICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2pldHN0cmVhbSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZydF8xNDAgPSAtPiB0eXBlX29mICggbmV3IEpldHN0cmVhbSgpICkgICAgICAgICAgICAgICksICdvYmplY3QnXG4gICAgICBAZXEgKCDOqWt2cnRfMTQxID0gLT4gdHlwZV9vZiAoIG5ldyBKZXRzdHJlYW0oKSApLndhbGsgJ2RhdGEnICApLCAnZ2VuZXJhdG9yJ1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBmaXJzdCAgICAgPSBTeW1ib2wgJ2ZpcnN0J1xuICAgICAgICBsYXN0ICAgICAgPSBTeW1ib2wgJ2xhc3QnXG4gICAgICAgIHN0cmVhbSAgICA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBlcSAoIM6pYXBfMTQyID0gLT4gc3RyZWFtLmxlbmd0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDBcbiAgICAgICAgQGVxICggzqlhcF8xNDMgPSAtPiBzdHJlYW0uaXNfZW1wdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHdhdGNoZWRfMSA9IFtdXG4gICAgICAgIHdhdGNoZWRfMiA9IFtdXG4gICAgICAgIHdhdGNoZWRfMyA9IFtdXG4gICAgICAgIHdhdGNoZWRfNCA9IFtdXG4gICAgICAgIHN0cmVhbS5wdXNoIHdhdGNoID0gKCBkICAgICAgICAgICAgICApIC0+IGhlbHAgJ86pYXBfMTQ0JywgcnByIGQ7IHdhdGNoZWRfMS5wdXNoIGRcbiAgICAgICAgc3RyZWFtLnB1c2ggdXBwZXIgPSAoIGQgICAgICAgICAgICAgICkgLT4geWllbGQgZC50b1VwcGVyQ2FzZSgpXG4gICAgICAgIHN0cmVhbS5wdXNoIHdhdGNoID0gKCBkICAgICAgICAgICAgICApIC0+IGluZm8gJ86pYXBfMTQ1JywgcnByIGQ7IHdhdGNoZWRfMi5wdXNoIGRcbiAgICAgICAgc3RyZWFtLnB1c2ggZXggICAgPSAoIGQsIG1hcmsgPSAnIScgICkgLT4geWllbGQgZCArIG1hcmtcbiAgICAgICAgc3RyZWFtLnB1c2ggd2F0Y2ggPSAoIGQgICAgICAgICAgICAgICkgLT4gaGVscCAnzqlhcF8xNDYnLCBycHIgZDsgd2F0Y2hlZF8zLnB1c2ggZFxuICAgICAgICBzdHJlYW0ucHVzaCAkIHsgZmlyc3QsIGxhc3QsIH0sIHN1cnJvdW5kID0gKCBkICkgLT5cbiAgICAgICAgICByZXR1cm4geWllbGQgXCJcIlwiTGV0J3Mgc2F5OiBcXFwiXCJcIlwiICBpZiBkIGlzIGZpcnN0XG4gICAgICAgICAgcmV0dXJuIHlpZWxkICdcIi4nICAgICAgICAgICAgICAgICBpZiBkIGlzIGxhc3RcbiAgICAgICAgICB5aWVsZCBkXG4gICAgICAgIHN0cmVhbS5wdXNoIHdhdGNoID0gKCBkICAgICAgICAgICAgICApIC0+IHVyZ2UgJ86pYXBfMTQ3JywgcnByIGQ7IHdhdGNoZWRfNC5wdXNoIGRcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXEgKCDOqWFwXzE0OCA9IC0+IHN0cmVhbS5sZW5ndGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIDdcbiAgICAgICAgQGVxICggzqlhcF8xNDkgPSAtPiBzdHJlYW0uaXNfZW1wdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgICBAZXEgKCDOqWFwXzE1MCA9IC0+IFsgKCBkIGZvciBkIGZyb20gc3RyZWFtLndhbGsgJ2hpZGV5LWhvJyApLi4uLCBdICAgICAgICAgICksIFsgXCJcIlwiTGV0J3Mgc2F5OiBcXFwiXCJcIlwiLCAnSElERVktSE8hJywgJ1wiLicgXVxuICAgICAgICBAZXEgKCDOqWFwXzE1MSA9IC0+IHdhdGNoZWRfMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgJ2hpZGV5LWhvJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgIEBlcSAoIM6pYXBfMTUyID0gLT4gd2F0Y2hlZF8yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgWyAnSElERVktSE8nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgQGVxICggzqlhcF8xNTMgPSAtPiB3YXRjaGVkXzMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBbICdISURFWS1ITyEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICBAZXEgKCDOqWFwXzE1NCA9IC0+IHdhdGNoZWRfNCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFsgXCJcIlwiTGV0J3Mgc2F5OiBcXFwiXCJcIlwiLCAnSElERVktSE8hJywgJ1wiLicgICBdXG4gICAgICAgIEBlcSAoIM6pYXBfMTU1ID0gLT4gWyAoIGQgZm9yIGQgZnJvbSBzdHJlYW0ud2FsayAnaGlkZXktaG8nICkuLi4sIF0uam9pbiAnJyAgKSwgXCJcIlwiTGV0J3Mgc2F5OiBcIkhJREVZLUhPIVwiLlwiXCJcIlxuICAgICAgICBAZXEgKCDOqWFwXzE1NiA9IC0+ICggICBkIGZvciBkIGZyb20gc3RyZWFtLnJ1biAgJ2hpZGV5LWhvJyAgICAgICApLmpvaW4gJycgICksIFwiXCJcIkxldCdzIHNheTogXCJISURFWS1ITyFcIi5cIlwiXCJcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgc3RyZWFtICAgID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc3RyZWFtLnB1c2ggYWRkXzEgPSAoIGQgKSAtPiB5aWVsZCBkICsgMVxuICAgICAgICBzdHJlYW0ucHVzaCBhZGRfMSA9ICggZCApIC0+IHlpZWxkIGQgKyAxXG4gICAgICAgIHN0cmVhbS5wdXNoIGFkZF8xID0gKCBkICkgLT4geWllbGQgZCArIDFcbiAgICAgICAgc3RyZWFtLnB1c2ggYWRkXzEgPSAoIGQgKSAtPiB5aWVsZCBkICsgMVxuICAgICAgICBzdHJlYW0ucHVzaCBhZGRfMSA9ICggZCApIC0+IHlpZWxkIGQgKyAxXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGVxICggzqlhcF8xNTcgPSAtPiBbICggZCBmb3IgZCBmcm9tIHN0cmVhbS53YWxrIDAgKS4uLiwgXSAgICAgICAgICApLCBbIDUsIF1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgIyMjIGVtcHR5IHBpcGVsaW5lIGlzIGEgcGlwZWxpbmUgd2l0aG91dCB0cmFuc2Zvcm1zLCBzbyBkYXRhIGlzIHBhc3NlZCB0aHJvdWdoIHVudHJhbnNmb3JtZWQ6ICMjI1xuICAgICAgICBAZXEgKCDOqWFwXzE1OCA9IC0+IFsgKCAoIG5ldyBKZXRzdHJlYW0oKSApLndhbGsgJ2RhdGEnICkuLi4sICBdICksIFsgJ2RhdGEnLCBdXG4gICAgICAgIEBlcSAoIM6pYXBfMTU5ID0gLT4gICAgICggbmV3IEpldHN0cmVhbSgpICkucnVuICAnZGF0YScgICAgICAgICAgKSwgWyAnZGF0YScsIF1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgY29sbGVjdG9yID0gW11cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBwXzEgPSBuZXcgSmV0c3RyZWFtKClcbiAgICAgICAgcF8xLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AxLXQxJzsgeWllbGQgZCArICcg4oSWIDEnXG4gICAgICAgIHBfMS5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMS10Mic7IHlpZWxkIGQgKyAnIOKEliAyJ1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHBfMiA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBwXzIucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDItdDEnOyB5aWVsZCBkICsgJyDihJYgMydcbiAgICAgICAgcF8yLnB1c2ggcF8xXG4gICAgICAgIHBfMi5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMi10Mic7IHlpZWxkIGQgKyAnIOKEliA0J1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHBfMyA9IG5ldyBKZXRzdHJlYW0oKVxuICAgICAgICBwXzMucHVzaCAoIGQgKSAtPiBjb2xsZWN0b3IucHVzaCAncDMtdDEnOyB5aWVsZCBkICsgJyDihJYgNSdcbiAgICAgICAgcF8zLnB1c2ggcF8yXG4gICAgICAgIHBfMy5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMy10Mic7IHlpZWxkIGQgKyAnIOKEliA2J1xuICAgICAgICBAZXEgKCDOqWFwXzE2MCA9IC0+IHBfMy5ydW4gICAgICAgICdteS1kYXRhJyApLCBbICdteS1kYXRhIOKEliA1IOKEliAzIOKEliAxIOKEliAyIOKEliA0IOKEliA2JyAsIF1cbiAgICAgICAgQGVxICggzqlhcF8xNjEgPSAtPiBjb2xsZWN0b3IgICAgICAgICAgICAgICAgKSwgWyAncDMtdDEnLCAncDItdDEnLCAncDEtdDEnLCAncDEtdDInLCAncDItdDInLCAncDMtdDInIF1cbiAgICAgICAgQGVxICggzqlhcF8xNjIgPSAtPiBwXzMuZ2V0X2ZpcnN0ICAnbXktZGF0YScgKSwgJ215LWRhdGEg4oSWIDUg4oSWIDMg4oSWIDEg4oSWIDIg4oSWIDQg4oSWIDYnXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGZpcnN0ICAgICAgICAgPSBTeW1ib2wgJ2ZpcnN0J1xuICAgICAgICBsYXN0ICAgICAgICAgID0gU3ltYm9sICdsYXN0J1xuICAgICAgICBzdHJlYW0gICAgICAgID0gbmV3IEpldHN0cmVhbSgpXG4gICAgICAgIGcgICAgICAgICAgICAgPSAoIGQgKSAtPlxuICAgICAgICAgIGRlYnVnICfOqWt2cnRfMTYzJywgZFxuICAgICAgICAgIHlpZWxkIDAgaWYgZCBpcyBmaXJzdFxuICAgICAgICAgIHlpZWxkIGQgKiAyIHVubGVzcyBkIGluIFsgZmlyc3QsIGxhc3QsIF1cbiAgICAgICAgICB5aWVsZCAxIGlmIGQgaXMgbGFzdFxuICAgICAgICB0cmFuc2Zvcm1fMSAgID0gJCB7IGZpcnN0LCAgfSwgZ1xuICAgICAgICB0cmFuc2Zvcm1fMiAgID0gJCB7IGxhc3QsICAgfSwgZ1xuICAgICAgICBzdHJlYW0ucHVzaCB0cmFuc2Zvcm1fMVxuICAgICAgICBzdHJlYW0ucHVzaCB0cmFuc2Zvcm1fMlxuICAgICAgICBkZWJ1ZyAnzqlrdnJ0XzE2NCcsIHN0cmVhbVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTY1ID0gLT4gdHJhbnNmb3JtXzFbIGludGVybmFscy5DRkcgXSApLCB7IGZpcnN0LCAgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTY2ID0gLT4gdHJhbnNmb3JtXzJbIGludGVybmFscy5DRkcgXSApLCB7IGxhc3QsICAgfVxuICAgICAgICBAZXEgKCDOqWt2cnRfMTY3ID0gLT4gc3RyZWFtLnJ1biAyMiAgICAgICAgICAgICAgICApLCBbIDAsIDEsIDg4LCAxLCBdXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9faW1wcm92ZWRfc3RydWN0dXJlID0gLT5cbiAgaGVscCAnzqlrdnJ0XzE2OCcsIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgRElTID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9fZGVtby1pbXByb3ZlZC1zdHJ1Y3R1cmUnXG4gIGhlbHAgJ86pa3ZydF8xNjknLCBESVNcbiAgRElTLmRlbW9fYXR0YWNoZWQoKVxuICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEB0YXNrc1xuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9nZXRfbG9jYWxfZGVzdGluYXRpb25zOiBAdGFza3MucmVxdWlyZV9nZXRfbG9jYWxfZGVzdGluYXRpb25zLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyByZXF1aXJlX3dhbGtfanNfdG9rZW5zOiBAdGFza3MucmVxdWlyZV93YWxrX2pzX3Rva2VucywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9wYXJzZV9yZXF1aXJlX3N0YXRlbWVudHM6IEB0YXNrcy5yZXF1aXJlX3BhcnNlX3JlcXVpcmVfc3RhdGVtZW50cywgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfamV0c3RyZWFtOiBAdGFza3MucmVxdWlyZV9qZXRzdHJlYW0sIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfcGF0aF90b29sczogQHRhc2tzLnJlcXVpcmVfcGF0aF90b29scywgfVxuICAjIGRlbW9faW1wcm92ZWRfc3RydWN0dXJlKCkiXX0=
