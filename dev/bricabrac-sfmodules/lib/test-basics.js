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
    require_dictionary_tools: function() {
      var SFMODULES, expand_dictionary, get_local_destinations, type_of, Ωkvrt___1;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({expand_dictionary} = SFMODULES.require_dictionary_tools());
      ({get_local_destinations} = SFMODULES.require_get_local_destinations());
      //.......................................................................................................
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
      (() => {        //.......................................................................................................
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
      (() => {        //.......................................................................................................
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
      (() => {        //.......................................................................................................
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
        //.....................................................................................................
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
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_get_local_destinations: function() {
      var FS, OS, PATH, SFMODULES, get_local_destinations, type_of, Ωkvrt__14;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({get_local_destinations} = SFMODULES.require_get_local_destinations());
      PATH = require('node:path');
      OS = require('node:os');
      FS = require('node:fs');
      //.......................................................................................................
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
      //.......................................................................................................
      this.eq((Ωkvrt__14 = function() {
        return type_of(get_local_destinations);
      }), 'function');
      (() => {        //.......................................................................................................
        var app_name, dst, home, temp, user_nfo, Ωkvrt__15, Ωkvrt__16, Ωkvrt__17, Ωkvrt__18, Ωkvrt__19, Ωkvrt__20, Ωkvrt__21, Ωkvrt__22, Ωkvrt__23, Ωkvrt__24, Ωkvrt__25, Ωkvrt__26, Ωkvrt__27, Ωkvrt__28, Ωkvrt__29, Ωkvrt__30, Ωkvrt__31, Ωkvrt__32;
        app_name = 'my-app-name';
        dst = get_local_destinations({app_name});
        user_nfo = OS.userInfo();
        home = FS.realpathSync(OS.homedir());
        temp = FS.realpathSync(OS.tmpdir());
        //.....................................................................................................
        this.eq((Ωkvrt__15 = function() {
          return (Object.keys(dst)).sort();
        }), ['app', 'user']);
        this.eq((Ωkvrt__16 = function() {
          return (Object.keys(dst.app)).sort();
        }), ['cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp']);
        this.eq((Ωkvrt__17 = function() {
          return (Object.keys(dst.user)).sort();
        }), ['home', 'name', 'temp']);
        //.....................................................................................................
        this.eq((Ωkvrt__18 = function() {
          return type_of(dst.app);
        }), 'pod');
        this.eq((Ωkvrt__19 = function() {
          return type_of(dst.user);
        }), 'pod');
        //.....................................................................................................
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
        //.....................................................................................................
        this.eq((Ωkvrt__30 = function() {
          return dst.user.home;
        }), home);
        this.eq((Ωkvrt__31 = function() {
          return dst.user.name;
        }), user_nfo.username);
        this.eq((Ωkvrt__32 = function() {
          return dst.user.temp;
        }), temp);
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var app_name, dst, home, temp, user_nfo, Ωkvrt__33, Ωkvrt__34, Ωkvrt__35, Ωkvrt__36, Ωkvrt__37, Ωkvrt__38, Ωkvrt__39, Ωkvrt__40, Ωkvrt__41, Ωkvrt__42, Ωkvrt__43, Ωkvrt__44, Ωkvrt__45, Ωkvrt__46, Ωkvrt__47, Ωkvrt__48, Ωkvrt__49, Ωkvrt__50;
        app_name = null;
        dst = get_local_destinations({app_name});
        user_nfo = OS.userInfo();
        home = FS.realpathSync(OS.homedir());
        temp = FS.realpathSync(OS.tmpdir());
        //.....................................................................................................
        this.eq((Ωkvrt__33 = function() {
          return (Object.keys(dst)).sort();
        }), ['app', 'user']);
        this.eq((Ωkvrt__34 = function() {
          return (Object.keys(dst.app)).sort();
        }), ['cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp']);
        this.eq((Ωkvrt__35 = function() {
          return (Object.keys(dst.user)).sort();
        }), ['home', 'name', 'temp']);
        //.....................................................................................................
        this.eq((Ωkvrt__36 = function() {
          return type_of(dst.app);
        }), 'pod');
        this.eq((Ωkvrt__37 = function() {
          return type_of(dst.user);
        }), 'pod');
        //.....................................................................................................
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
        //.....................................................................................................
        this.eq((Ωkvrt__48 = function() {
          return dst.user.home;
        }), home);
        this.eq((Ωkvrt__49 = function() {
          return dst.user.name;
        }), user_nfo.username);
        this.eq((Ωkvrt__50 = function() {
          return dst.user.temp;
        }), temp);
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var app_home, app_name, dst, home, temp, user_nfo, Ωkvrt__51, Ωkvrt__52, Ωkvrt__53, Ωkvrt__54, Ωkvrt__55, Ωkvrt__56, Ωkvrt__57, Ωkvrt__58, Ωkvrt__59, Ωkvrt__60, Ωkvrt__61, Ωkvrt__62, Ωkvrt__63, Ωkvrt__64, Ωkvrt__65, Ωkvrt__66, Ωkvrt__67, Ωkvrt__68;
        app_name = 'frobulator';
        app_home = '/path/to/projects';
        dst = get_local_destinations({app_name, app_home});
        user_nfo = OS.userInfo();
        home = FS.realpathSync(OS.homedir());
        temp = FS.realpathSync(OS.tmpdir());
        //.....................................................................................................
        this.eq((Ωkvrt__51 = function() {
          return (Object.keys(dst)).sort();
        }), ['app', 'user']);
        this.eq((Ωkvrt__52 = function() {
          return (Object.keys(dst.app)).sort();
        }), ['cache', 'config', 'data', 'dep_bin', 'home', 'log', 'name', 'node_modules', 'own_bin', 'temp']);
        this.eq((Ωkvrt__53 = function() {
          return (Object.keys(dst.user)).sort();
        }), ['home', 'name', 'temp']);
        //.....................................................................................................
        this.eq((Ωkvrt__54 = function() {
          return type_of(dst.app);
        }), 'pod');
        this.eq((Ωkvrt__55 = function() {
          return type_of(dst.user);
        }), 'pod');
        //.....................................................................................................
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
        //.....................................................................................................
        this.eq((Ωkvrt__66 = function() {
          return dst.user.home;
        }), home);
        this.eq((Ωkvrt__67 = function() {
          return dst.user.name;
        }), user_nfo.username);
        this.eq((Ωkvrt__68 = function() {
          return dst.user.temp;
        }), temp);
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_rpr_string: function() {
      var SFMODULES, rpr_string, type_of, Ωkvrt_115;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({rpr_string} = SFMODULES.require_rpr_string());
      //.......................................................................................................
      this.eq((Ωkvrt_115 = function() {
        return type_of(rpr_string);
      }), 'function');
      (() => {        //.......................................................................................................
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
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_path_tools: function() {
      var SFMODULES, is_inside, type_of, Ωkvrt_122;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({is_inside} = SFMODULES.require_path_tools());
      //.......................................................................................................
      this.eq((Ωkvrt_122 = function() {
        return type_of(is_inside);
      }), 'function');
      (() => {        //.......................................................................................................
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
        //.....................................................................................................
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
        //.....................................................................................................
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
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    is_tagfun_call: function() {
      var SFMODULES, fn, is_tagfun_call, Ωbbsfm___1, Ωbbsfm___2, Ωbbsfm___3;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({is_tagfun_call} = SFMODULES.require_tagfun_tools());
      fn = function(...P) {
        return is_tagfun_call(...P);
      };
      this.eq((Ωbbsfm___1 = function() {
        return fn();
      }), false);
      this.eq((Ωbbsfm___2 = function() {
        return fn([1, 2, 3]);
      }), false);
      this.eq((Ωbbsfm___3 = function() {
        return fn`[ 1, 2, 3, ]`;
      }), true);
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    escape_html_text: function() {
      var SFMODULES, escape_html_text, Ωbbsfm___4, Ωbbsfm___5, Ωbbsfm___6;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({escape_html_text} = SFMODULES.require_escape_html_text());
      this.eq((Ωbbsfm___4 = function() {
        return escape_html_text('');
      }), '');
      this.eq((Ωbbsfm___5 = function() {
        return escape_html_text('abc');
      }), 'abc');
      this.eq((Ωbbsfm___6 = function() {
        return escape_html_text('abc<tag>d&e&f</tag>');
      }), 'abc&lt;tag&gt;d&amp;e&amp;f&lt;/tag&gt;');
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    walk_tagfun_call_parts: function() {
      var SFMODULES, walk_nonempty_parts, walk_parts, walk_raw_nonempty_parts, walk_raw_parts, Ωbbsfm__10, Ωbbsfm__11, Ωbbsfm__12, Ωbbsfm__13, Ωbbsfm__14, Ωbbsfm__15, Ωbbsfm__16, Ωbbsfm__17, Ωbbsfm__18, Ωbbsfm__19, Ωbbsfm__20, Ωbbsfm__21, Ωbbsfm__22, Ωbbsfm__23, Ωbbsfm___7, Ωbbsfm___8, Ωbbsfm___9;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      // { Html,                     } = require_html_class()
      // { escape_html_text,         } = require_escape_html_text()
      // { stackable_tagfun,         } = require_stackable_tagfun()
      ({walk_parts, walk_nonempty_parts, walk_raw_parts, walk_raw_nonempty_parts} = SFMODULES.require_tagfun_tools());
      //-------------------------------------------------------------------------------------------------------
      this.eq((Ωbbsfm___7 = function() {
        return [...(walk_parts``)];
      }), [
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωbbsfm___8 = function() {
        return [...(walk_parts(""))];
      }), [
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωbbsfm___9 = function() {
        return [...(walk_nonempty_parts``)];
      }), []);
      this.eq((Ωbbsfm__10 = function() {
        return [...(walk_nonempty_parts(''))];
      }), []);
      this.eq((Ωbbsfm__11 = function() {
        return [...(walk_parts`a`)];
      }), [
        {
          chunk: 'a',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωbbsfm__12 = function() {
        return [...(walk_parts`\na`)];
      }), [
        {
          chunk: '\na',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωbbsfm__13 = function() {
        return [...(walk_raw_parts`\na`)];
      }), [
        {
          chunk: '\\na',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωbbsfm__14 = function() {
        return [...(walk_parts`${1}`)];
      }), [
        {
          chunk: '',
          isa: 'chunk'
        },
        {
          value: 1,
          isa: 'value'
        },
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωbbsfm__15 = function() {
        return [...(walk_nonempty_parts`${1}`)];
      }), [
        {
          value: 1,
          isa: 'value'
        }
      ]);
      this.eq((Ωbbsfm__16 = function() {
        return [...(walk_parts`a${1}`)];
      }), [
        {
          chunk: 'a',
          isa: 'chunk'
        },
        {
          value: 1,
          isa: 'value'
        },
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωbbsfm__17 = function() {
        return [...(walk_parts`${1}${2}`)];
      }), [
        {
          chunk: '',
          isa: 'chunk'
        },
        {
          value: 1,
          isa: 'value'
        },
        {
          chunk: '',
          isa: 'chunk'
        },
        {
          value: 2,
          isa: 'value'
        },
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωbbsfm__18 = function() {
        return [...(walk_nonempty_parts`${1}${2}`)];
      }), [
        {
          value: 1,
          isa: 'value'
        },
        {
          value: 2,
          isa: 'value'
        }
      ]);
      this.eq((Ωbbsfm__19 = function() {
        return [...(walk_parts`a${1}z`)];
      }), [
        {
          chunk: 'a',
          isa: 'chunk'
        },
        {
          value: 1,
          isa: 'value'
        },
        {
          chunk: 'z',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωbbsfm__20 = function() {
        return [...(walk_parts`a${1}z${2}`)];
      }), [
        {
          chunk: 'a',
          isa: 'chunk'
        },
        {
          value: 1,
          isa: 'value'
        },
        {
          chunk: 'z',
          isa: 'chunk'
        },
        {
          value: 2,
          isa: 'value'
        },
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωbbsfm__21 = function() {
        return [...(walk_parts(`a${1}z${2}`))];
      }), [
        {
          chunk: 'a1z2',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωbbsfm__22 = function() {
        return [...(walk_parts(12))];
      }), [
        {
          chunk: '',
          isa: 'chunk'
        },
        {
          value: 12,
          isa: 'value'
        },
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωbbsfm__23 = function() {
        return [...(walk_nonempty_parts(12))];
      }), [
        {
          value: 12,
          isa: 'value'
        }
      ]);
      //.........................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    get_next_free_filename: function() {
      var PATH, SFMODULES, cache_filename_re, exists, get_next_filename, get_next_free_filename, path_prefix, probes_and_matchers, Ωbbsfm__24, Ωbbsfm__25, Ωbbsfm__26, Ωbbsfm__27;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({get_next_free_filename, get_next_filename, exists, cache_filename_re} = SFMODULES.unstable.require_next_free_filename());
      PATH = require('node:path');
      //.......................................................................................................
      this.throws((Ωbbsfm__24 = function() {
        return get_next_free_filename(null);
      }), /expected a text/);
      this.throws((Ωbbsfm__25 = function() {
        return get_next_free_filename(void 0);
      }), /expected a text/);
      this.throws((Ωbbsfm__26 = function() {
        return get_next_free_filename(true);
      }), /expected a text/);
      this.throws((Ωbbsfm__27 = function() {
        return get_next_free_filename('');
      }), /expected a nonempty text/);
      //.......................................................................................................
      probes_and_matchers = [['a', [false, '~.a.0001.bricabrac-cache', '~.a.0001.bricabrac-cache']], ['README.md', [true, '~.README.md.0001.bricabrac-cache', '~.README.md.0004.bricabrac-cache']], ['~.README.md.0001.bricabrac-cache', [true, '~.README.md.0002.bricabrac-cache', '~.README.md.0004.bricabrac-cache']], ['~.README.md.0002.bricabrac-cache', [true, '~.README.md.0003.bricabrac-cache', '~.README.md.0004.bricabrac-cache']], ['~.README.md.0003.bricabrac-cache', [true, '~.README.md.0004.bricabrac-cache', '~.README.md.0004.bricabrac-cache']], ['~.README.md.0004.bricabrac-cache', [false, '~.README.md.0005.bricabrac-cache', '~.README.md.0005.bricabrac-cache']]];
      path_prefix = PATH.resolve(PATH.join(__dirname, '../../../assets/bricabrac/find-free-filename'));
      (() => {        //.......................................................................................................
        var abs_matcher_2, abs_matcher_3, abs_path, i, len, matcher_1, matcher_2, matcher_3, path, Ωbbsfm__28, Ωbbsfm__29, Ωbbsfm__30;
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [path, [matcher_1, matcher_2, matcher_3]] = probes_and_matchers[i];
          abs_path = PATH.join(path_prefix, path);
          abs_matcher_2 = PATH.join(path_prefix, matcher_2);
          abs_matcher_3 = PATH.join(path_prefix, matcher_3);
          this.eq((Ωbbsfm__28 = function() {
            return exists(abs_path);
          }), matcher_1);
          this.eq((Ωbbsfm__29 = function() {
            return get_next_filename(abs_path);
          }), abs_matcher_2);
          this.eq((Ωbbsfm__30 = function() {
            return get_next_free_filename(abs_path);
          }), abs_matcher_3);
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var i, len, matcher_1, matcher_2, matcher_3, path, rel_matcher_2, rel_matcher_3, rel_path, Ωbbsfm__31, Ωbbsfm__32, Ωbbsfm__33;
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [path, [matcher_1, matcher_2, matcher_3]] = probes_and_matchers[i];
          rel_path = PATH.relative(process.cwd(), PATH.join(path_prefix, path));
          rel_matcher_2 = PATH.relative(process.cwd(), PATH.join(path_prefix, matcher_2));
          rel_matcher_3 = PATH.relative(process.cwd(), PATH.join(path_prefix, matcher_3));
          this.eq((Ωbbsfm__31 = function() {
            return exists(rel_path);
          }), matcher_1);
          this.eq((Ωbbsfm__32 = function() {
            return get_next_filename(rel_path);
          }), rel_matcher_2);
          this.eq((Ωbbsfm__33 = function() {
            return get_next_free_filename(rel_path);
          }), rel_matcher_3);
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var current_cwd, i, len, matcher_1, matcher_2, matcher_3, path, Ωbbsfm__34, Ωbbsfm__35, Ωbbsfm__36;
        current_cwd = PATH.resolve(process.cwd());
        process.chdir(path_prefix);
        try {
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [path, [matcher_1, matcher_2, matcher_3]] = probes_and_matchers[i];
            this.eq((Ωbbsfm__34 = function() {
              return exists(path);
            }), matcher_1);
            this.eq((Ωbbsfm__35 = function() {
              return get_next_filename(path);
            }), matcher_2);
            this.eq((Ωbbsfm__36 = function() {
              return get_next_free_filename(path);
            }), matcher_3);
          }
        } finally {
          process.chdir(current_cwd);
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    // #---------------------------------------------------------------------------------------------------------
    // get_next_free_filename_swap_suffix: ->
    //   { get_next_free_filename,
    //     swap_suffix,            } = SFMODULES.require_next_free_filename()
    //   #.......................................................................................................
    //   debug 'Ωbbsfm__37', intermediate_cache_path = get_next_free_filename '/path/to/reference.txt'
    //   debug 'Ωbbsfm__38', finalized_cache_path    = swap_suffix '.finalized'
    //   @eq     ( Ωbbsfm__39 = -> intermediate_cache_path           ), '/path/to/~.reference.txt.0001.finalized'
    //   rather use '/path/to/~.reference.txt.0001.bricabrac-cache.finalized'
    //   #.......................................................................................................
    //   return null

    //---------------------------------------------------------------------------------------------------------
    ANSI: function() {
      var ANSI, SFMODULES, Ωbbsfm__40, Ωbbsfm__41, Ωbbsfm__42, Ωbbsfm__43, Ωbbsfm__44, Ωbbsfm__45, Ωbbsfm__46, Ωbbsfm__47;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({ANSI} = SFMODULES.require_ansi());
      this.eq((Ωbbsfm__40 = function() {
        return ANSI.fg_from_hex('#a0a1a2');
      }), '\x1B[38:2::160:161:162m');
      this.eq((Ωbbsfm__41 = function() {
        return ANSI.bg_from_hex('#a0a1a2');
      }), '\x1B[48:2::160:161:162m');
      this.eq((Ωbbsfm__42 = function() {
        return ANSI.fg_from_dec([160, 161, 162]);
      }), '\x1B[38:2::160:161:162m');
      this.eq((Ωbbsfm__43 = function() {
        return ANSI.bg_from_dec([160, 161, 162]);
      }), '\x1B[48:2::160:161:162m');
      this.eq((Ωbbsfm__44 = function() {
        return ANSI.dec_from_hex('#a0a1a2');
      }), [160, 161, 162]);
      this.throws((Ωbbsfm__45 = function() {
        return ANSI.dec_from_hex('#xxxxxx');
      }), /not a proper hexadecimal RGB code: '#xxxxxx'/);
      this.throws((Ωbbsfm__46 = function() {
        return ANSI.dec_from_hex('#aaaaa');
      }), /not a proper hexadecimal RGB code: '#aaaaa'/);
      this.throws((Ωbbsfm__47 = function() {
        return ANSI.dec_from_hex('#aaaaabb');
      }), /not a proper hexadecimal RGB code: '#aaaaabb'/);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_ansi_colors_and_effects: function() {
      var C, SFMODULES, Ωbbsfm__48, Ωbbsfm__49, Ωbbsfm__50, Ωbbsfm__51, Ωbbsfm__52, Ωbbsfm__53, Ωbbsfm__54;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({
        ansi_colors_and_effects: C
      } = SFMODULES.require_ansi_colors_and_effects());
      this.eq((Ωbbsfm__48 = function() {
        return C.red;
      }), '\x1B[38:2::255:0:16m');
      this.eq((Ωbbsfm__49 = function() {
        return C.bg_red;
      }), '\x1B[48:2::255:0:16m');
      this.eq((Ωbbsfm__50 = function() {
        return C.overline;
      }), '\x1b[53m');
      this.eq((Ωbbsfm__51 = function() {
        return C.overline0;
      }), '\x1b[55m');
      this.eq((Ωbbsfm__52 = function() {
        return C.default;
      }), '\x1b[39m');
      this.eq((Ωbbsfm__53 = function() {
        return C.bg_default;
      }), '\x1b[49m');
      this.eq((Ωbbsfm__54 = function() {
        return C.reset;
      }), '\x1b[0m');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_ansi_chunker: function() {
      var Ansi_chunker, C, SFMODULES;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({
        ansi_colors_and_effects: C
      } = SFMODULES.require_ansi_colors_and_effects());
      ({Ansi_chunker} = SFMODULES.require_ansi_chunker());
      (() => {
        var ac, d, text;
        echo('—————————————————————————————————————————————');
        text = `ABC${C.black + C.bg_red + C.bold + 'DEF' + C.bold0 + C.default + C.bg_default}XYZ`;
        ac = new Ansi_chunker();
        urge('Ωbbsfm__55', ac.chunkify(text));
        for (d of ac) {
          // info 'Ωbbsfm__56', d for d from ( ac.chunkify text ).chunks
          info('Ωbbsfm__57', d);
        }
        info('Ωbbsfm__58', ac.width);
        info('Ωbbsfm__59', ac.length);
        info('Ωbbsfm__60', ac.has_ansi);
        return info('Ωbbsfm__61', ac.text);
      })();
      (() => {
        var ac, d, text;
        echo('—————————————————————————————————————————————');
        text = 'ABCDEFXYZ';
        ac = new Ansi_chunker();
        urge('Ωbbsfm__62', ac.chunkify(text));
        for (d of ac) {
          // info 'Ωbbsfm__63', d for d from ( ac.chunkify text ).chunks
          info('Ωbbsfm__64', d);
        }
        info('Ωbbsfm__65', ac.width);
        info('Ωbbsfm__66', ac.length);
        info('Ωbbsfm__67', ac.has_ansi);
        return info('Ωbbsfm__68', ac.text);
      })();
      (() => {
        var ac, d, text;
        echo('—————————————————————————————————————————————');
        text = `${C.black + C.bg_red + C.bold + C.bold0 + C.default + C.bg_default}`;
        ac = new Ansi_chunker();
        urge('Ωbbsfm__69', ac.chunkify(text));
        for (d of ac) {
          // info 'Ωbbsfm__70', d for d from ( ac.chunkify text ).chunks
          info('Ωbbsfm__71', d);
        }
        info('Ωbbsfm__72', ac.width);
        info('Ωbbsfm__73', ac.length);
        info('Ωbbsfm__74', ac.has_ansi);
        return info('Ωbbsfm__75', ac.text);
      })();
      (() => {
        var ac, d, text;
        echo('—————————————————————————————————————————————');
        text = '';
        ac = new Ansi_chunker();
        urge('Ωbbsfm__76', ac.chunkify(text));
        for (d of ac) {
          // info 'Ωbbsfm__77', d for d from ( ac.chunkify text ).chunks
          info('Ωbbsfm__78', d);
        }
        info('Ωbbsfm__79', ac.width);
        info('Ωbbsfm__80', ac.length);
        info('Ωbbsfm__81', ac.has_ansi);
        return info('Ωbbsfm__82', ac.text);
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_strip_ansi: function() {
      var C, SFMODULES, ansi_re, own_single_ansi_re, strip_ansi;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({
        strip_ansi,
        internals: {ansi_re, own_single_ansi_re}
      } = SFMODULES.require_strip_ansi());
      ({
        ansi_colors_and_effects: C
      } = SFMODULES.require_ansi_colors_and_effects());
      (() => {
        var text, Ωbbsfm__86;
        text = `ABC${C.black + C.bg_red + C.bold + 'DEF' + C.bold0 + C.default + C.bg_default}XYZ`;
        urge('Ωbbsfm__83', rpr(strip_ansi(text)));
        info('Ωbbsfm__84', rpr(text.split(ansi_re)));
        info('Ωbbsfm__85', rpr(text.split(own_single_ansi_re)));
        return this.eq((Ωbbsfm__86 = function() {
          return strip_ansi(text);
        }), 'ABCDEFXYZ');
      })();
      (() => {
        var text, Ωbbsfm__88;
        text = 'ABCDEFXYZ';
        urge('Ωbbsfm__87', rpr(strip_ansi(text)));
        return this.eq((Ωbbsfm__88 = function() {
          return strip_ansi(text);
        }), 'ABCDEFXYZ');
      })();
      (() => {
        var text, Ωbbsfm__90;
        text = `${C.black + C.bg_red + C.bold + C.bold0 + C.default + C.bg_default}`;
        urge('Ωbbsfm__89', rpr(strip_ansi(text)));
        return this.eq((Ωbbsfm__90 = function() {
          return strip_ansi(text);
        }), '');
      })();
      (() => {
        var text, Ωbbsfm__92;
        text = '';
        urge('Ωbbsfm__91', rpr(strip_ansi(text)));
        return this.eq((Ωbbsfm__92 = function() {
          return strip_ansi(text);
        }), '');
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_get_callsite: function() {
      var PATH, SFMODULES, URL, app, app_path, bricabrac_cfg_1, bricabrac_cfg_2, callsite, datastore_path, fallback, get_app_details, get_bricabrac_cfg, get_callsite, name, package_path, require_from_app_folder, version, Ωbbsfm_100, Ωbbsfm_101, Ωbbsfm_102, Ωbbsfm_103, Ωbbsfm_104, Ωbbsfm_105, Ωbbsfm__95, Ωbbsfm__96, Ωbbsfm__97, Ωbbsfm__98, Ωbbsfm__99;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({get_callsite, get_app_details, require_from_app_folder, get_bricabrac_cfg} = SFMODULES.unstable.require_get_callsite());
      PATH = require('node:path');
      URL = require('node:url');
      app_path = PATH.resolve(PATH.join(__dirname, '../../../'));
      package_path = PATH.join(app_path, 'package.json');
      version = (require('../../../package.json')).version;
      name = (require('../../../package.json')).name;
      fallback = Symbol('fallback');
      bricabrac_cfg_1 = require_from_app_folder({
        path: 'bricabrac.cfg.js'
      });
      bricabrac_cfg_2 = get_bricabrac_cfg();
      app = get_app_details();
      datastore_path = PATH.join(app.path, 'hengist-ng.sqlite');
      callsite = get_callsite({
        sourcemapped: false
      });
      debug('Ωbbsfm__93', bricabrac_cfg_2);
      // @eq ( Ωbbsfm__94 = -> URL.fileURLToPath callsite.scriptName                 ), __filename
      this.eq((Ωbbsfm__95 = function() {
        return callsite.scriptName;
      }), __filename);
      this.eq((Ωbbsfm__96 = function() {
        return app.path;
      }), app_path);
      this.eq((Ωbbsfm__97 = function() {
        return app.package_path;
      }), package_path);
      this.eq((Ωbbsfm__98 = function() {
        return app.version;
      }), version);
      this.eq((Ωbbsfm__99 = function() {
        return app.name;
      }), name);
      this.eq((Ωbbsfm_100 = function() {
        return bricabrac_cfg_1.datastore.name;
      }), 'hengist-ng');
      this.eq((Ωbbsfm_101 = function() {
        return get_bricabrac_cfg({
          path: 'nosuchpath',
          fallback
        });
      }), fallback);
      this.throws((Ωbbsfm_102 = function() {
        return get_bricabrac_cfg({
          path: 'nosuchpath'
        });
      }), /Cannot find module/i);
      this.eq((Ωbbsfm_103 = function() {
        return bricabrac_cfg_2.datastore.name;
      }), 'hengist-ng');
      this.eq((Ωbbsfm_104 = function() {
        return bricabrac_cfg_2.datastore.path;
      }), datastore_path);
      this.eq((Ωbbsfm_105 = function() {
        return bricabrac_cfg_2.app.name;
      }), name);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_get_callsite: function() {
      var PATH, SFMODULES, URL, app_path, callsite, fallback, filename, get_callsite, get_callsite_path, name, package_path, version, Ωbbsfm_106, Ωbbsfm_107;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({get_callsite, get_callsite_path} = SFMODULES.unstable.require_get_callsite());
      PATH = require('node:path');
      URL = require('node:url');
      app_path = PATH.resolve(PATH.join(__dirname, '../../../'));
      package_path = PATH.join(app_path, 'package.json');
      version = (require('../../../package.json')).version;
      name = (require('../../../package.json')).name;
      fallback = Symbol('fallback');
      callsite = get_callsite({
        sourcemapped: false
      });
      filename = __filename.replace(/^(.+)\/lib\/([^\/]+?)\.js/, '$1/src/$2.coffee');
      this.eq((Ωbbsfm_106 = function() {
        return callsite.scriptName;
      }), __filename);
      this.eq((Ωbbsfm_107 = function() {
        return get_callsite_path();
      }), filename);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_get_app_details: function() {
      var PATH, SFMODULES, URL, app, app_path, bricabrac_cfg_1, bricabrac_cfg_2, datastore_path, fallback, get_app_details, get_bricabrac_cfg, name, package_path, require_from_app_folder, version, Ωbbsfm_110, Ωbbsfm_111, Ωbbsfm_112, Ωbbsfm_113, Ωbbsfm_114, Ωbbsfm_115, Ωbbsfm_116, Ωbbsfm_117, Ωbbsfm_118, Ωbbsfm_119;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({get_app_details, require_from_app_folder, get_bricabrac_cfg} = SFMODULES.unstable.require_get_app_details());
      PATH = require('node:path');
      URL = require('node:url');
      app_path = PATH.resolve(PATH.join(__dirname, '../../../'));
      package_path = PATH.join(app_path, 'package.json');
      version = (require('../../../package.json')).version;
      name = (require('../../../package.json')).name;
      fallback = Symbol('fallback');
      bricabrac_cfg_1 = require_from_app_folder({
        path: 'bricabrac.cfg.js'
      });
      bricabrac_cfg_2 = get_bricabrac_cfg();
      app = get_app_details();
      datastore_path = PATH.join(app.path, 'hengist-ng.sqlite');
      // debug 'Ωbbsfm_108', bricabrac_cfg_2
      // @eq ( Ωbbsfm_109 = -> URL.fileURLToPath callsite.scriptName                 ), __filename
      this.eq((Ωbbsfm_110 = function() {
        return app.path;
      }), app_path);
      this.eq((Ωbbsfm_111 = function() {
        return app.package_path;
      }), package_path);
      this.eq((Ωbbsfm_112 = function() {
        return app.version;
      }), version);
      this.eq((Ωbbsfm_113 = function() {
        return app.name;
      }), name);
      this.eq((Ωbbsfm_114 = function() {
        return bricabrac_cfg_1.datastore.name;
      }), 'hengist-ng');
      this.eq((Ωbbsfm_115 = function() {
        return get_bricabrac_cfg({
          path: 'nosuchpath',
          fallback
        });
      }), fallback);
      this.throws((Ωbbsfm_116 = function() {
        return get_bricabrac_cfg({
          path: 'nosuchpath'
        });
      }), /Cannot find module/i);
      this.eq((Ωbbsfm_117 = function() {
        return bricabrac_cfg_2.datastore.name;
      }), 'hengist-ng');
      this.eq((Ωbbsfm_118 = function() {
        return bricabrac_cfg_2.datastore.path;
      }), datastore_path);
      this.eq((Ωbbsfm_119 = function() {
        return bricabrac_cfg_2.app.name;
      }), name);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_loupe: function() {
      var LOUPE, SFMODULES, Ωbbsfm_120, Ωbbsfm_121, Ωbbsfm_122;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      LOUPE = SFMODULES.require_loupe();
      //.......................................................................................................
      this.eq((Ωbbsfm_120 = function() {
        return typeof LOUPE.rpr;
      }), 'function');
      this.eq((Ωbbsfm_121 = function() {
        return LOUPE.rpr({});
      }), '{}');
      this.eq((Ωbbsfm_121 = function() {
        return LOUPE.rpr(+0);
      }), '0');
      this.eq((Ωbbsfm_121 = function() {
        return LOUPE.rpr(-0);
      }), '0');
      this.eq((Ωbbsfm_122 = function() {
        return LOUPE.rpr("'\n'");
      }), "'\\'\\n\\''");
      this.eq((Ωbbsfm_122 = function() {
        return LOUPE.rpr('"\n"');
      }), `'"\\n"'`);
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
      return (new Test(guytest_cfg)).test({
        require_dictionary_tools: this.tasks.require_dictionary_tools
      });
    })();
  }

  // demo_improved_structure()

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLHVCQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQXBCQTs7Ozs7RUEyQkEsSUFBQyxDQUFBLEtBQUQsR0FHRSxDQUFBOztJQUFBLHdCQUFBLEVBQTBCLFFBQUEsQ0FBQSxDQUFBO0FBQzVCLFVBQUEsU0FBQSxFQUFBLGlCQUFBLEVBQUEsc0JBQUEsRUFBQSxPQUFBLEVBQUE7TUFBSSxTQUFBLEdBQThCLE9BQUEsQ0FBUSxtQ0FBUjtNQUM5QixDQUFBLENBQUUsT0FBRixDQUFBLEdB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QWxCO0lBQ0EsR0FBQSxHQUFNLE9BQUEsQ0FBUSxnRUFBUjtJQUNOLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEdBQWxCO0lBQ0EsR0FBRyxDQUFDLGFBQUosQ0FBQTtBQUNBLFdBQU87RUFMaUIsRUFobkIxQjs7O0VBeW5CQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLElBQUMsQ0FBQSxLQUEvQixFQUZGOzthQUlFLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSx3QkFBQSxFQUEwQixJQUFDLENBQUEsS0FBSyxDQUFDO01BQW5DLENBQTlCO0lBTHNDLENBQUEsSUFBeEM7OztFQXpuQkE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLXNmbW9kdWxlcy90ZXN0LWJhc2ljcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRhc2tzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfZGljdGlvbmFyeV90b29sczogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBleHBhbmRfZGljdGlvbmFyeSwgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfZGljdGlvbmFyeV90b29scygpXG4gICAgeyBnZXRfbG9jYWxfZGVzdGluYXRpb25zLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWt2cnRfX18xID0gLT4gdHlwZV9vZiBleHBhbmRfZGljdGlvbmFyeSApLCAnZnVuY3Rpb24nXG4gICAgZG8gPT5cbiAgICAgIHN0cmluZ3MgPVxuICAgICAgICAnJHtncmVldH0nOiAgIFwiSGVsbG8gJHt3aG99XCJcbiAgICAgICAgJyR7d2hvfSc6ICAgICBcImRlYXIgJHt0YXJnZXR9XCJcbiAgICAgICAgJyR7dGFyZ2V0fSc6ICBcIndvcmxkXCJcbiAgICAgIG1hdGNoZXIgPVxuICAgICAgICAnJHtncmVldH0nOiAgIFwiSGVsbG8gZGVhciB3b3JsZFwiXG4gICAgICAgICcke3dob30nOiAgICAgXCJkZWFyIHdvcmxkXCJcbiAgICAgICAgJyR7dGFyZ2V0fSc6ICBcIndvcmxkXCJcbiAgICAgIHN0cmluZ3NfY29weSAgPSB7IHN0cmluZ3MuLi4sIH1cbiAgICAgIGV4cGFuZGVkICAgICAgPSBleHBhbmRfZGljdGlvbmFyeSBzdHJpbmdzXG4gICAgICBAZXEgICAgICggzqlrdnJ0X19fMiA9IC0+IHN0cmluZ3MgICAgICAgICAgICAgKSwgc3RyaW5nc19jb3B5XG4gICAgICBAZXEgICAgICggzqlrdnJ0X19fMyA9IC0+IGV4cGFuZGVkICAgICAgICAgICAgKSwgbWF0Y2hlclxuICAgICAgQGVxICAgICAoIM6pa3ZydF9fXzQgPSAtPiBleHBhbmRlZCBpcyBzdHJpbmdzICksIGZhbHNlXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHN0cmluZ3MgPVxuICAgICAgICAnJHtncmVldH0nOiAgIFwiSGVsbG8gJHt3aG99XCJcbiAgICAgICAgJyR7d2hvfSc6ICAgICBcImRlYXIgJHt0YXJnZXR9XCJcbiAgICAgICAgJyR7dGFyZ2V0fSc6ICBcIndvcmxkICR7Z3JlZXR9XCJcbiAgICAgIHN0cmluZ3NfY29weSAgPSB7IHN0cmluZ3MuLi4sIH1cbiAgICAgIEB0aHJvd3MgKCDOqWt2cnRfX181ID0gLT4gZXhwYW5kX2RpY3Rpb25hcnkgc3RyaW5ncyApLCAvY3ljbGljIHJlZmVyZW5jZSBkZXRlY3RlZCBmb3IgXFwkXFx7Z3JlZXRcXH0vXG4gICAgICBAZXEgICAgICggzqlrdnJ0X19fNiA9IC0+IHN0cmluZ3MgICAgICAgICAgICAgICAgICAgICAgICksIHN0cmluZ3NfY29weVxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBzdHJpbmdzID1cbiAgICAgICAgJy8odXNlcikvJzogICAgIFwiL0FsaWNlL1wiXG4gICAgICAgICcoc2NoZW1hKS8vJzogICBcImh0dHBzOi8vXCJcbiAgICAgICAgJyhzZXJ2ZXIpLyc6ICAgIFwiKHNjaGVtYSkvL2V4YW1wbGUuY29tL1wiXG4gICAgICAgICcoZm9sZGVyKSc6ICAgICBcIihzZXJ2ZXIpLyh1c2VyKS9kYXRhXCJcbiAgICAgICAgJzo6ZmlsZTo6JzogICAgIFwiKGZvbGRlcikvZmlsZS50eHRcIlxuICAgICAgZm9yIGtleSwgdmFsdWUgb2YgZXhwYW5kX2RpY3Rpb25hcnkgc3RyaW5nc1xuICAgICAgICBkZWJ1ZyAnzqlrdnJ0X19fNycsIGZcIiN7a2V5fTo8MjBjOyAje3JwciB2YWx1ZX1cIlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBicmljYWJyYWNfanNvbiA9IHtcbiAgICAgICAgXCJzdHJpbmdzXCI6IHtcbiAgICAgICAgICBcIihnaClcIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb21cIixcbiAgICAgICAgICBcIihmbG93KS9cIjogXCIoZ2gpL2xvdmVlbmNvdW50ZXJmbG93L1wiLFxuICAgICAgICAgIFwiKHNmbW9kdWxlcylcIjogXCIoZmxvdykvYnJpY2FicmFjLXNmbW9kdWxlcy9yZWZzL2hlYWRzL21haW4vc3JjXCJcbiAgICAgICAgICB9LFxuICAgICAgICBcIm1hcHBpbmdzXCI6IHtcbiAgICAgICAgICBcImFcIjogXCItLShnaCktLVwiXG4gICAgICAgICAgXCJiXCI6IFwiLS0oZmxvdykvLS1cIlxuICAgICAgICAgIFwiY1wiOiBcIi0tKHNmbW9kdWxlcyktLVwiXG4gICAgICAgICAgXCJkXCI6IFwifi8tLShzZm1vZHVsZXMpLS1cIiB9IH1cbiAgICAgIF9icmljYWJyYWNfY29tcGlsZWRfanNvbiA9IHtcbiAgICAgICAgXCJzdHJpbmdzXCI6IHtcbiAgICAgICAgICBcIihnaClcIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb21cIixcbiAgICAgICAgICBcIihmbG93KS9cIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbG92ZWVuY291bnRlcmZsb3cvXCIsXG4gICAgICAgICAgXCIoc2Ztb2R1bGVzKVwiOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzL3JlZnMvaGVhZHMvbWFpbi9zcmNcIlxuICAgICAgICAgIH0sXG4gICAgICAgIFwibWFwcGluZ3NcIjoge1xuICAgICAgICAgIFwiYVwiOiBcIi0taHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tLS1cIlxuICAgICAgICAgIFwiYlwiOiBcIi0taHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xvdmVlbmNvdW50ZXJmbG93Ly0tXCJcbiAgICAgICAgICBcImNcIjogXCItLWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzL3JlZnMvaGVhZHMvbWFpbi9zcmMtLVwiXG4gICAgICAgICAgXCJkXCI6IFwifi8tLWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3ZlZW5jb3VudGVyZmxvdy9icmljYWJyYWMtc2Ztb2R1bGVzL3JlZnMvaGVhZHMvbWFpbi9zcmMtLVwiIH0gfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXN1bHQgICAgICAgICAgPSB7fVxuICAgICAgcmVzdWx0LnN0cmluZ3MgID0gZXhwYW5kX2RpY3Rpb25hcnkgYnJpY2FicmFjX2pzb24uc3RyaW5nc1xuICAgICAgcmVzdWx0Lm1hcHBpbmdzID0ge31cbiAgICAgIGZvciB0YXJnZXRfcGF0aCwgc291cmNlX3NwZWMgb2YgYnJpY2FicmFjX2pzb24ubWFwcGluZ3NcbiAgICAgICAgcmVzdWx0Lm1hcHBpbmdzWyB0YXJnZXRfcGF0aCBdID0gc291cmNlX3NwZWNcbiAgICAgICAgZm9yIHBhdHRlcm5fa2V5LCBwYXR0ZXJuX3ZhbHVlIG9mIHJlc3VsdC5zdHJpbmdzXG4gICAgICAgICAgcmVzdWx0Lm1hcHBpbmdzWyB0YXJnZXRfcGF0aCBdID0gcmVzdWx0Lm1hcHBpbmdzWyB0YXJnZXRfcGF0aCBdLnJlcGxhY2VBbGwgcGF0dGVybl9rZXksIHBhdHRlcm5fdmFsdWVcbiAgICAgICMgZGVidWcgJ86pa3ZydF9fXzgnLCByZXN1bHRcbiAgICAgIEBlcSAoIM6pa3ZydF9fXzkgPSAtPiBmYWxzZSApLCBcInJlc29sdmUgaG9tZSBkaXJlY3Rvcnkgd2l0aCBvcy5ob21lZGlyKCkgLyBsb2NhbC1kZXN0aW5hdGlvbi5icmljc1wiXG4gICAgICBAZXEgKCDOqWt2cnRfXzEwID0gLT4gT2JqZWN0LmtleXMgcmVzdWx0ICksIE9iamVjdC5rZXlzIF9icmljYWJyYWNfY29tcGlsZWRfanNvblxuICAgICAgZm9yIGtleSwgdmFsdWUgb2YgcmVzdWx0LnN0cmluZ3NcbiAgICAgICAgQGVxICggzqlrdnJ0X18xMSA9IC0+IHZhbHVlICksIF9icmljYWJyYWNfY29tcGlsZWRfanNvbi5zdHJpbmdzWyBrZXkgXVxuICAgICAgZm9yIGtleSwgdmFsdWUgb2YgcmVzdWx0Lm1hcHBpbmdzXG4gICAgICAgIEBlcSAoIM6pa3ZydF9fMTIgPSAtPiB2YWx1ZSApLCBfYnJpY2FicmFjX2NvbXBpbGVkX2pzb24ubWFwcGluZ3NbIGtleSBdXG4gICAgICAjIGRlYnVnICfOqWt2cnRfXzEzJywgKCBnZXRfbG9jYWxfZGVzdGluYXRpb25zIG51bGwgKS5ob21lXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfZ2V0X2xvY2FsX2Rlc3RpbmF0aW9uczogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBnZXRfbG9jYWxfZGVzdGluYXRpb25zLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucygpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgIE9TICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6b3MnXG4gICAgRlMgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMge1xuICAgICMgICBhcHA6IHtcbiAgICAjICAgICBuYW1lOiAnbXktYXBwLW5hbWUnLFxuICAgICMgICAgIGRhdGE6ICcvaG9tZS9mbG93Ly5sb2NhbC9zaGFyZS9teS1hcHAtbmFtZScsXG4gICAgIyAgICAgY29uZmlnOiAnL2hvbWUvZmxvdy8uY29uZmlnL215LWFwcC1uYW1lJyxcbiAgICAjICAgICBjYWNoZTogJy9ob21lL2Zsb3cvLmNhY2hlL215LWFwcC1uYW1lJyxcbiAgICAjICAgICBsb2c6ICcvaG9tZS9mbG93Ly5sb2NhbC9zdGF0ZS9teS1hcHAtbmFtZScsXG4gICAgIyAgICAgdGVtcDogJy90bXAvZmxvdy9teS1hcHAtbmFtZScsXG4gICAgIyAgICAgaG9tZTogJy9ob21lL2Zsb3cvbXktYXBwLW5hbWUnLFxuICAgICMgICAgIG5vZGVfbW9kdWxlczogJy9ob21lL2Zsb3cvbXktYXBwLW5hbWUvbm9kZV9tb2R1bGVzJyxcbiAgICAjICAgICBkZXBfYmluOiAnL2hvbWUvZmxvdy9teS1hcHAtbmFtZS9ub2RlX21vZHVsZXMvLmJpbicsXG4gICAgIyAgICAgb3duX2JpbjogJy9ob21lL2Zsb3cvbXktYXBwLW5hbWUvYmluJ1xuICAgICMgICB9LFxuICAgICMgICB1c2VyOiB7IG5hbWU6ICdmbG93JywgaG9tZTogJy9ob21lL2Zsb3cnLCB0ZW1wOiAnL3RtcCcgfVxuICAgICMgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlrdnJ0X18xNCA9IC0+IHR5cGVfb2YgZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyApLCAnZnVuY3Rpb24nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgYXBwX25hbWUgICAgICA9ICdteS1hcHAtbmFtZSdcbiAgICAgIGRzdCAgICAgICAgICAgPSBnZXRfbG9jYWxfZGVzdGluYXRpb25zIHsgYXBwX25hbWUsIH1cbiAgICAgIHVzZXJfbmZvICAgICAgPSBPUy51c2VySW5mbygpXG4gICAgICBob21lICAgICAgICAgID0gRlMucmVhbHBhdGhTeW5jIE9TLmhvbWVkaXIoKVxuICAgICAgdGVtcCAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy50bXBkaXIoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cnRfXzE1ID0gLT4gKCBPYmplY3Qua2V5cyBkc3QgKS5zb3J0KCkgICAgICAgKSwgWyAnYXBwJywgJ3VzZXInLCBdXG4gICAgICBAZXEgKCDOqWt2cnRfXzE2ID0gLT4gKCBPYmplY3Qua2V5cyBkc3QuYXBwICkuc29ydCgpICAgKSwgWyAnY2FjaGUnLCAnY29uZmlnJywgJ2RhdGEnLCAnZGVwX2JpbicsICdob21lJywgJ2xvZycsICduYW1lJywgJ25vZGVfbW9kdWxlcycsICdvd25fYmluJywgJ3RlbXAnIF1cbiAgICAgIEBlcSAoIM6pa3ZydF9fMTcgPSAtPiAoIE9iamVjdC5rZXlzIGRzdC51c2VyICkuc29ydCgpICApLCBbICdob21lJywgJ25hbWUnLCAndGVtcCcsIF1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJ0X18xOCA9IC0+IHR5cGVfb2YgZHN0LmFwcCAgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICBAZXEgKCDOqWt2cnRfXzE5ID0gLT4gdHlwZV9vZiBkc3QudXNlciAgICAgICAgICAgICAgICAgKSwgJ3BvZCdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJ0X18yMCA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jYWNoZSAgICAgICksIGFwcF9uYW1lXG4gICAgICBAZXEgKCDOqWt2cnRfXzIxID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmNvbmZpZyAgICAgKSwgYXBwX25hbWVcbiAgICAgIEBlcSAoIM6pa3ZydF9fMjIgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuZGF0YSAgICAgICApLCBhcHBfbmFtZVxuICAgICAgQGVxICggzqlrdnJ0X18yMyA9IC0+IGRzdC5hcHAuZGVwX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfbmFtZSwgJ25vZGVfbW9kdWxlcycsICcuYmluJ1xuICAgICAgQGVxICggzqlrdnJ0X18yNCA9IC0+IGRzdC5hcHAuaG9tZSAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfbmFtZVxuICAgICAgQGVxICggzqlrdnJ0X18yNSA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5sb2cgICAgICAgICksIGFwcF9uYW1lXG4gICAgICBAZXEgKCDOqWt2cnRfXzI2ID0gLT4gZHN0LmFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgKSwgYXBwX25hbWVcbiAgICAgIEBlcSAoIM6pa3ZydF9fMjcgPSAtPiBkc3QuYXBwLm5vZGVfbW9kdWxlcyAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX25hbWUsICdub2RlX21vZHVsZXMnXG4gICAgICBAZXEgKCDOqWt2cnRfXzI4ID0gLT4gZHN0LmFwcC5vd25fYmluICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9uYW1lLCAnYmluJ1xuICAgICAgQGVxICggzqlrdnJ0X18yOSA9IC0+IGRzdC5hcHAudGVtcCAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBkc3QudXNlci50ZW1wLCBkc3QudXNlci5uYW1lLCBhcHBfbmFtZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cnRfXzMwID0gLT4gZHN0LnVzZXIuaG9tZSAgICAgICAgICAgICAgICAgICAgKSwgaG9tZVxuICAgICAgQGVxICggzqlrdnJ0X18zMSA9IC0+IGRzdC51c2VyLm5hbWUgICAgICAgICAgICAgICAgICAgICksIHVzZXJfbmZvLnVzZXJuYW1lXG4gICAgICBAZXEgKCDOqWt2cnRfXzMyID0gLT4gZHN0LnVzZXIudGVtcCAgICAgICAgICAgICAgICAgICAgKSwgdGVtcFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGFwcF9uYW1lICAgICAgPSBudWxsXG4gICAgICBkc3QgICAgICAgICAgID0gZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyB7IGFwcF9uYW1lLCB9XG4gICAgICB1c2VyX25mbyAgICAgID0gT1MudXNlckluZm8oKVxuICAgICAgaG9tZSAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy5ob21lZGlyKClcbiAgICAgIHRlbXAgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MudG1wZGlyKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJ0X18zMyA9IC0+ICggT2JqZWN0LmtleXMgZHN0ICkuc29ydCgpICAgICAgICksIFsgJ2FwcCcsICd1c2VyJywgXVxuICAgICAgQGVxICggzqlrdnJ0X18zNCA9IC0+ICggT2JqZWN0LmtleXMgZHN0LmFwcCApLnNvcnQoKSAgICksIFsgJ2NhY2hlJywgJ2NvbmZpZycsICdkYXRhJywgJ2RlcF9iaW4nLCAnaG9tZScsICdsb2cnLCAnbmFtZScsICdub2RlX21vZHVsZXMnLCAnb3duX2JpbicsICd0ZW1wJyBdXG4gICAgICBAZXEgKCDOqWt2cnRfXzM1ID0gLT4gKCBPYmplY3Qua2V5cyBkc3QudXNlciApLnNvcnQoKSAgKSwgWyAnaG9tZScsICduYW1lJywgJ3RlbXAnLCBdXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZydF9fMzYgPSAtPiB0eXBlX29mIGRzdC5hcHAgICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgICAgQGVxICggzqlrdnJ0X18zNyA9IC0+IHR5cGVfb2YgZHN0LnVzZXIgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZydF9fMzggPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY2FjaGUgICAgICApLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICBAZXEgKCDOqWt2cnRfXzM5ID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmNvbmZpZyAgICAgKSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgQGVxICggzqlrdnJ0X180MCA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5kYXRhICAgICAgICksICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgIEBlcSAoIM6pa3ZydF9fNDEgPSAtPiBkc3QuYXBwLmRlcF9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+JywgJ25vZGVfbW9kdWxlcycsICcuYmluJ1xuICAgICAgQGVxICggzqlrdnJ0X180MiA9IC0+IGRzdC5hcHAuaG9tZSAgICAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCAnPFlPVVItQVBQLU5BTUUtSEVSRT4nXG4gICAgICBAZXEgKCDOqWt2cnRfXzQzID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmxvZyAgICAgICAgKSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgQGVxICggzqlrdnJ0X180NCA9IC0+IGRzdC5hcHAubmFtZSAgICAgICAgICAgICAgICAgICAgICksICc8WU9VUi1BUFAtTkFNRS1IRVJFPidcbiAgICAgIEBlcSAoIM6pa3ZydF9fNDUgPSAtPiBkc3QuYXBwLm5vZGVfbW9kdWxlcyAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+JywgJ25vZGVfbW9kdWxlcydcbiAgICAgIEBlcSAoIM6pa3ZydF9fNDYgPSAtPiBkc3QuYXBwLm93bl9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+JywgJ2JpbidcbiAgICAgIEBlcSAoIM6pa3ZydF9fNDcgPSAtPiBkc3QuYXBwLnRlbXAgICAgICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgZHN0LnVzZXIudGVtcCwgZHN0LnVzZXIubmFtZSwgJzxZT1VSLUFQUC1OQU1FLUhFUkU+J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWt2cnRfXzQ4ID0gLT4gZHN0LnVzZXIuaG9tZSAgICAgICAgICAgICAgICAgICAgKSwgaG9tZVxuICAgICAgQGVxICggzqlrdnJ0X180OSA9IC0+IGRzdC51c2VyLm5hbWUgICAgICAgICAgICAgICAgICAgICksIHVzZXJfbmZvLnVzZXJuYW1lXG4gICAgICBAZXEgKCDOqWt2cnRfXzUwID0gLT4gZHN0LnVzZXIudGVtcCAgICAgICAgICAgICAgICAgICAgKSwgdGVtcFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGFwcF9uYW1lICAgICAgPSAnZnJvYnVsYXRvcidcbiAgICAgIGFwcF9ob21lICAgICAgPSAnL3BhdGgvdG8vcHJvamVjdHMnXG4gICAgICBkc3QgICAgICAgICAgID0gZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucyB7IGFwcF9uYW1lLCBhcHBfaG9tZSB9XG4gICAgICB1c2VyX25mbyAgICAgID0gT1MudXNlckluZm8oKVxuICAgICAgaG9tZSAgICAgICAgICA9IEZTLnJlYWxwYXRoU3luYyBPUy5ob21lZGlyKClcbiAgICAgIHRlbXAgICAgICAgICAgPSBGUy5yZWFscGF0aFN5bmMgT1MudG1wZGlyKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJ0X181MSA9IC0+ICggT2JqZWN0LmtleXMgZHN0ICkuc29ydCgpICAgICAgICksIFsgJ2FwcCcsICd1c2VyJywgXVxuICAgICAgQGVxICggzqlrdnJ0X181MiA9IC0+ICggT2JqZWN0LmtleXMgZHN0LmFwcCApLnNvcnQoKSAgICksIFsgJ2NhY2hlJywgJ2NvbmZpZycsICdkYXRhJywgJ2RlcF9iaW4nLCAnaG9tZScsICdsb2cnLCAnbmFtZScsICdub2RlX21vZHVsZXMnLCAnb3duX2JpbicsICd0ZW1wJyBdXG4gICAgICBAZXEgKCDOqWt2cnRfXzUzID0gLT4gKCBPYmplY3Qua2V5cyBkc3QudXNlciApLnNvcnQoKSAgKSwgWyAnaG9tZScsICduYW1lJywgJ3RlbXAnLCBdXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZydF9fNTQgPSAtPiB0eXBlX29mIGRzdC5hcHAgICAgICAgICAgICAgICAgICApLCAncG9kJ1xuICAgICAgQGVxICggzqlrdnJ0X181NSA9IC0+IHR5cGVfb2YgZHN0LnVzZXIgICAgICAgICAgICAgICAgICksICdwb2QnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZydF9fNTYgPSAtPiBQQVRILmJhc2VuYW1lIGRzdC5hcHAuY2FjaGUgICAgICApLCBhcHBfbmFtZVxuICAgICAgQGVxICggzqlrdnJ0X181NyA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5jb25maWcgICAgICksIGFwcF9uYW1lXG4gICAgICBAZXEgKCDOqWt2cnRfXzU4ID0gLT4gUEFUSC5iYXNlbmFtZSBkc3QuYXBwLmRhdGEgICAgICAgKSwgYXBwX25hbWVcbiAgICAgIEBlcSAoIM6pa3ZydF9fNTkgPSAtPiBkc3QuYXBwLmRlcF9iaW4gICAgICAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX2hvbWUsIGFwcF9uYW1lLCAnbm9kZV9tb2R1bGVzJywgJy5iaW4nXG4gICAgICBAZXEgKCDOqWt2cnRfXzYwID0gLT4gZHN0LmFwcC5ob21lICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGhvbWUsIGFwcF9ob21lLCBhcHBfbmFtZVxuICAgICAgQGVxICggzqlrdnJ0X182MSA9IC0+IFBBVEguYmFzZW5hbWUgZHN0LmFwcC5sb2cgICAgICAgICksIGFwcF9uYW1lXG4gICAgICBAZXEgKCDOqWt2cnRfXzYyID0gLT4gZHN0LmFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgKSwgYXBwX25hbWVcbiAgICAgIEBlcSAoIM6pa3ZydF9fNjMgPSAtPiBkc3QuYXBwLm5vZGVfbW9kdWxlcyAgICAgICAgICAgICApLCBQQVRILnJlc29sdmUgaG9tZSwgYXBwX2hvbWUsIGFwcF9uYW1lLCAnbm9kZV9tb2R1bGVzJ1xuICAgICAgQGVxICggzqlrdnJ0X182NCA9IC0+IGRzdC5hcHAub3duX2JpbiAgICAgICAgICAgICAgICAgICksIFBBVEgucmVzb2x2ZSBob21lLCBhcHBfaG9tZSwgYXBwX25hbWUsICdiaW4nXG4gICAgICBAZXEgKCDOqWt2cnRfXzY1ID0gLT4gZHN0LmFwcC50ZW1wICAgICAgICAgICAgICAgICAgICAgKSwgUEFUSC5yZXNvbHZlIGRzdC51c2VyLnRlbXAsIGRzdC51c2VyLm5hbWUsIGFwcF9uYW1lXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZydF9fNjYgPSAtPiBkc3QudXNlci5ob21lICAgICAgICAgICAgICAgICAgICApLCBob21lXG4gICAgICBAZXEgKCDOqWt2cnRfXzY3ID0gLT4gZHN0LnVzZXIubmFtZSAgICAgICAgICAgICAgICAgICAgKSwgdXNlcl9uZm8udXNlcm5hbWVcbiAgICAgIEBlcSAoIM6pa3ZydF9fNjggPSAtPiBkc3QudXNlci50ZW1wICAgICAgICAgICAgICAgICAgICApLCB0ZW1wXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVxdWlyZV9ycHJfc3RyaW5nOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IHJwcl9zdHJpbmcsICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9ycHJfc3RyaW5nKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pa3ZydF8xMTUgPSAtPiB0eXBlX29mIHJwcl9zdHJpbmcgKSwgJ2Z1bmN0aW9uJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIEBlcSAoIM6pa3ZydF8xMTYgPSAtPiBycHJfc3RyaW5nICcnICAgICAgICksIFwiXCJcIicnXCJcIlwiXG4gICAgICBAZXEgKCDOqWt2cnRfMTE3ID0gLT4gcnByX3N0cmluZyAnXCInICAgICAgKSwgXCJcIlwiJ1wiJ1wiXCJcIlxuICAgICAgQGVxICggzqlrdnJ0XzExOCA9IC0+IHJwcl9zdHJpbmcgXCInXCIgICAgICApLCBcIlwiXCInXFxcXCcnXCJcIlwiXG4gICAgICBAZXEgKCDOqWt2cnRfMTE5ID0gLT4gcnByX3N0cmluZyAncG9wJyAgICApLCBcIlwiXCIncG9wJ1wiXCJcIlxuICAgICAgQGVxICggzqlrdnJ0XzEyMCA9IC0+IHJwcl9zdHJpbmcgJ1wicG9wXCInICApLCBcIlwiXCInXCJwb3BcIidcIlwiXCJcbiAgICAgIEBlcSAoIM6pa3ZydF8xMjEgPSAtPiBycHJfc3RyaW5nIFwiJ3BvcCdcIiAgKSwgXCJcIlwiJ1xcXFwncG9wXFxcXCcnXCJcIlwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVxdWlyZV9wYXRoX3Rvb2xzOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IGlzX2luc2lkZSwgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9wYXRoX3Rvb2xzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pa3ZydF8xMjIgPSAtPiB0eXBlX29mIGlzX2luc2lkZSApLCAnZnVuY3Rpb24nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgQHRocm93cyAoIM6pa3ZydF8xMjMgPSAtPiBpc19pbnNpZGUgJy4uL3BhdGgvdG8vZmlsZScsICAgICAgICcvJyAgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGFuIGFic29sdXRlIHBhdGggYXMgYW5jaG9yL1xuICAgICAgQHRocm93cyAoIM6pa3ZydF8xMjQgPSAtPiBpc19pbnNpZGUgJy4uL3BhdGgvdG8vZmlsZScsICAgICAgICd3YXQnICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGFuIGFic29sdXRlIHBhdGggYXMgYW5jaG9yL1xuICAgICAgQHRocm93cyAoIM6pa3ZydF8xMjUgPSAtPiBpc19pbnNpZGUgJy4uL3BhdGgvdG8vZmlsZScsICAgICAgICcuLi9wYXRoL3RvL2ZpbGUnICAgKSwgL2V4cGVjdGVkIGFuIGFic29sdXRlIHBhdGggYXMgYW5jaG9yL1xuICAgICAgQHRocm93cyAoIM6pa3ZydF8xMjYgPSAtPiBpc19pbnNpZGUgJ3BhdGgvdG8vZmlsZScsICAgICAgICAgICcuLi9wYXRoL3RvL2ZpbGUnICAgKSwgL2V4cGVjdGVkIGFuIGFic29sdXRlIHBhdGggYXMgYW5jaG9yL1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgICAgICggzqlrdnJ0XzEyNyA9IC0+IGlzX2luc2lkZSAnLycsICAgICAgICAgICAgICAgICAgICAgJy9wYXRoL3RvL2ZpbGUnICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlrdnJ0XzEyOCA9IC0+IGlzX2luc2lkZSAnL3BhdGgvdG8vZmlsZScsICAgICAgICAgJy9wYXRoL3RvL2ZpbGUnICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlrdnJ0XzEyOSA9IC0+IGlzX2luc2lkZSAnL3BhdGgvdG8vZmlsZScsICAgICAgICAgJ29vcHMnICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlrdnJ0XzEzMCA9IC0+IGlzX2luc2lkZSAnL3BhdGgvLi4vZmlsZScsICAgICAgICAgJy9maWxlJyAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlrdnJ0XzEzMSA9IC0+IGlzX2luc2lkZSAnL3BhdGgvLi4vZmlsZS8uJywgICAgICAgJy9maWxlJyAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlrdnJ0XzEzMiA9IC0+IGlzX2luc2lkZSAnL3BhdGgvLi4vZmlsZS8uLy4vLi8uJywgJy9maWxlJyAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgICAgICggzqlrdnJ0XzEzMyA9IC0+IGlzX2luc2lkZSAnL3BhdGgvdG8vZmlsZScsICAgICAgICAgJy5cXFxcLi9vb3BzJyAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTM0ID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlJywgICAgICAgICAnLi5cXFxcL29vcHMnICAgICAgICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgICAgICggzqlrdnJ0XzEzNSA9IC0+IGlzX2luc2lkZSAnL3BhdGgvdG8vZmlsZS93YXQnLCAgICAgJy9wYXRoL3RvL2ZpbGUnICAgICApLCBmYWxzZVxuICAgICAgQGVxICAgICAoIM6pa3ZydF8xMzYgPSAtPiBpc19pbnNpZGUgJy9wYXRoL3RvL2ZpbGUnLCAgICAgICAgICcuLi9vb3BzJyAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAgICAgKCDOqWt2cnRfMTM3ID0gLT4gaXNfaW5zaWRlICcvcGF0aC90by9maWxlJywgICAgICAgICAnL29vcHMnICAgICAgICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgICAgICggzqlrdnJ0XzEzOCA9IC0+IGlzX2luc2lkZSAnL3BhdGgvdG8vZmlsZScsICAgICAgICAgJy8nICAgICAgICAgICAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICAgICAoIM6pa3ZydF8xMzkgPSAtPiBpc19pbnNpZGUgJy9wYXRoLy4uL2ZpbGUnLCAgICAgICAgICcvcGF0aCcgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc190YWdmdW5fY2FsbDogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIHsgaXNfdGFnZnVuX2NhbGwsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3RhZ2Z1bl90b29scygpXG4gICAgZm4gPSAoIFAuLi4gKSAtPiBpc190YWdmdW5fY2FsbCBQLi4uXG4gICAgQGVxICggzqliYnNmbV9fXzEgPSAtPiBmbigpICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqliYnNmbV9fXzIgPSAtPiBmbiBbIDEsIDIsIDMsIF0gICksIGZhbHNlXG4gICAgQGVxICggzqliYnNmbV9fXzMgPSAtPiBmblwiWyAxLCAyLCAzLCBdXCIgKSwgdHJ1ZVxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBlc2NhcGVfaHRtbF90ZXh0OiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgeyBlc2NhcGVfaHRtbF90ZXh0LCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfZXNjYXBlX2h0bWxfdGV4dCgpXG4gICAgQGVxICggzqliYnNmbV9fXzQgPSAtPiBlc2NhcGVfaHRtbF90ZXh0ICcnICAgICAgICAgICAgICAgICAgICApLCAnJ1xuICAgIEBlcSAoIM6pYmJzZm1fX181ID0gLT4gZXNjYXBlX2h0bWxfdGV4dCAnYWJjJyAgICAgICAgICAgICAgICAgKSwgJ2FiYydcbiAgICBAZXEgKCDOqWJic2ZtX19fNiA9IC0+IGVzY2FwZV9odG1sX3RleHQgJ2FiYzx0YWc+ZCZlJmY8L3RhZz4nICksICdhYmMmbHQ7dGFnJmd0O2QmYW1wO2UmYW1wO2YmbHQ7L3RhZyZndDsnXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHdhbGtfdGFnZnVuX2NhbGxfcGFydHM6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAjIHsgSHRtbCwgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZV9odG1sX2NsYXNzKClcbiAgICAjIHsgZXNjYXBlX2h0bWxfdGV4dCwgICAgICAgICB9ID0gcmVxdWlyZV9lc2NhcGVfaHRtbF90ZXh0KClcbiAgICAjIHsgc3RhY2thYmxlX3RhZ2Z1biwgICAgICAgICB9ID0gcmVxdWlyZV9zdGFja2FibGVfdGFnZnVuKClcbiAgICB7IHdhbGtfcGFydHMsXG4gICAgICB3YWxrX25vbmVtcHR5X3BhcnRzLFxuICAgICAgd2Fsa19yYXdfcGFydHMsXG4gICAgICB3YWxrX3Jhd19ub25lbXB0eV9wYXJ0cywgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV90YWdmdW5fdG9vbHMoKVxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQGVxICggzqliYnNmbV9fXzcgPSAtPiBbICggd2Fsa19wYXJ0c1wiXCIgICAgICAgICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fX184ID0gLT4gWyAoIHdhbGtfcGFydHMgXCJcIiAgICAgICAgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX19fOSA9IC0+IFsgKCB3YWxrX25vbmVtcHR5X3BhcnRzXCJcIiAgICAgICAgICkuLi4sIF0gKSwgW11cbiAgICBAZXEgKCDOqWJic2ZtX18xMCA9IC0+IFsgKCB3YWxrX25vbmVtcHR5X3BhcnRzICcnICAgICAgICApLi4uLCBdICksIFtdXG4gICAgQGVxICggzqliYnNmbV9fMTEgPSAtPiBbICggd2Fsa19wYXJ0c1wiYVwiICAgICAgICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJ2EnLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18xMiA9IC0+IFsgKCB3YWxrX3BhcnRzXCJcXG5hXCIgICAgICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJ1xcbmEnLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18xMyA9IC0+IFsgKCB3YWxrX3Jhd19wYXJ0c1wiXFxuYVwiICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJ1xcXFxuYScsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzE0ID0gLT4gWyAoIHdhbGtfcGFydHNcIiN7MX1cIiAgICAgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIHsgdmFsdWU6IDEsIGlzYTogJ3ZhbHVlJywgfSwgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzE1ID0gLT4gWyAoIHdhbGtfbm9uZW1wdHlfcGFydHNcIiN7MX1cIiAgICAgKS4uLiwgXSApLCBbIHsgdmFsdWU6IDEsIGlzYTogJ3ZhbHVlJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzE2ID0gLT4gWyAoIHdhbGtfcGFydHNcImEjezF9XCIgICAgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICdhJywgaXNhOiAnY2h1bmsnLCB9LCB7IHZhbHVlOiAxLCBpc2E6ICd2YWx1ZScsIH0sIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18xNyA9IC0+IFsgKCB3YWxrX3BhcnRzXCIjezF9I3syfVwiICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9LCB7IHZhbHVlOiAxLCBpc2E6ICd2YWx1ZScsIH0sIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIHsgdmFsdWU6IDIsIGlzYTogJ3ZhbHVlJywgfSwgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSBdXG4gICAgQGVxICggzqliYnNmbV9fMTggPSAtPiBbICggd2Fsa19ub25lbXB0eV9wYXJ0c1wiI3sxfSN7Mn1cIiApLi4uLCBdICksIFsgeyB2YWx1ZTogMSwgaXNhOiAndmFsdWUnLCB9LCB7IHZhbHVlOiAyLCBpc2E6ICd2YWx1ZScsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18xOSA9IC0+IFsgKCB3YWxrX3BhcnRzXCJhI3sxfXpcIiAgICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnYScsIGlzYTogJ2NodW5rJywgfSwgeyB2YWx1ZTogMSwgaXNhOiAndmFsdWUnLCB9LCB7IGNodW5rOiAneicsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzIwID0gLT4gWyAoIHdhbGtfcGFydHNcImEjezF9eiN7Mn1cIiAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICdhJywgaXNhOiAnY2h1bmsnLCB9LCB7IHZhbHVlOiAxLCBpc2E6ICd2YWx1ZScsIH0sIHsgY2h1bms6ICd6JywgaXNhOiAnY2h1bmsnLCB9LCB7IHZhbHVlOiAyLCBpc2E6ICd2YWx1ZScsIH0sIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18yMSA9IC0+IFsgKCB3YWxrX3BhcnRzIFwiYSN7MX16I3syfVwiICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnYTF6MicsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzIyID0gLT4gWyAoIHdhbGtfcGFydHMgMTIgICAgICAgICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9LCB7IHZhbHVlOiAxMiwgaXNhOiAndmFsdWUnLCB9LCB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMjMgPSAtPiBbICggd2Fsa19ub25lbXB0eV9wYXJ0cyAxMiAgICAgICAgKS4uLiwgXSApLCBbIHsgdmFsdWU6IDEyLCBpc2E6ICd2YWx1ZScsIH0sIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9uZXh0X2ZyZWVfZmlsZW5hbWU6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUsXG4gICAgICBnZXRfbmV4dF9maWxlbmFtZSxcbiAgICAgIGV4aXN0cyxcbiAgICAgIGNhY2hlX2ZpbGVuYW1lX3JlLCAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9uZXh0X2ZyZWVfZmlsZW5hbWUoKVxuICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEB0aHJvd3MgKCDOqWJic2ZtX18yNCA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgbnVsbCAgICAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dC9cbiAgICBAdGhyb3dzICggzqliYnNmbV9fMjUgPSAtPiBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lIHVuZGVmaW5lZCAgICksIC9leHBlY3RlZCBhIHRleHQvXG4gICAgQHRocm93cyAoIM6pYmJzZm1fXzI2ID0gLT4gZ2V0X25leHRfZnJlZV9maWxlbmFtZSB0cnVlICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0L1xuICAgIEB0aHJvd3MgKCDOqWJic2ZtX18yNyA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgJycgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgbm9uZW1wdHkgdGV4dC9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbICdhJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBmYWxzZSwgJ34uYS4wMDAxLmJyaWNhYnJhYy1jYWNoZScsICAgICAgICAgJ34uYS4wMDAxLmJyaWNhYnJhYy1jYWNoZScsIF0sIF1cbiAgICAgIFsgJ1JFQURNRS5tZCcsICAgICAgICAgICAgICAgICAgICAgICAgICBbIHRydWUsICAnfi5SRUFETUUubWQuMDAwMS5icmljYWJyYWMtY2FjaGUnLCAnfi5SRUFETUUubWQuMDAwNC5icmljYWJyYWMtY2FjaGUnLCBdLCBdXG4gICAgICBbICd+LlJFQURNRS5tZC4wMDAxLmJyaWNhYnJhYy1jYWNoZScsICAgWyB0cnVlLCAgJ34uUkVBRE1FLm1kLjAwMDIuYnJpY2FicmFjLWNhY2hlJywgJ34uUkVBRE1FLm1kLjAwMDQuYnJpY2FicmFjLWNhY2hlJywgXSwgXVxuICAgICAgWyAnfi5SRUFETUUubWQuMDAwMi5icmljYWJyYWMtY2FjaGUnLCAgIFsgdHJ1ZSwgICd+LlJFQURNRS5tZC4wMDAzLmJyaWNhYnJhYy1jYWNoZScsICd+LlJFQURNRS5tZC4wMDA0LmJyaWNhYnJhYy1jYWNoZScsIF0sIF1cbiAgICAgIFsgJ34uUkVBRE1FLm1kLjAwMDMuYnJpY2FicmFjLWNhY2hlJywgICBbIHRydWUsICAnfi5SRUFETUUubWQuMDAwNC5icmljYWJyYWMtY2FjaGUnLCAnfi5SRUFETUUubWQuMDAwNC5icmljYWJyYWMtY2FjaGUnLCBdLCBdXG4gICAgICBbICd+LlJFQURNRS5tZC4wMDA0LmJyaWNhYnJhYy1jYWNoZScsICAgWyBmYWxzZSwgJ34uUkVBRE1FLm1kLjAwMDUuYnJpY2FicmFjLWNhY2hlJywgJ34uUkVBRE1FLm1kLjAwMDUuYnJpY2FicmFjLWNhY2hlJywgXSwgXVxuICAgICAgXVxuICAgIHBhdGhfcHJlZml4ID0gUEFUSC5yZXNvbHZlIFBBVEguam9pbiBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hc3NldHMvYnJpY2FicmFjL2ZpbmQtZnJlZS1maWxlbmFtZSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3IgWyBwYXRoLCBbIG1hdGNoZXJfMSwgbWF0Y2hlcl8yLCBtYXRjaGVyXzMsIF0sIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICBhYnNfcGF0aCAgICAgID0gUEFUSC5qb2luIHBhdGhfcHJlZml4LCBwYXRoXG4gICAgICAgIGFic19tYXRjaGVyXzIgPSBQQVRILmpvaW4gcGF0aF9wcmVmaXgsIG1hdGNoZXJfMlxuICAgICAgICBhYnNfbWF0Y2hlcl8zID0gUEFUSC5qb2luIHBhdGhfcHJlZml4LCBtYXRjaGVyXzNcbiAgICAgICAgQGVxICggzqliYnNmbV9fMjggPSAtPiBleGlzdHMgYWJzX3BhdGggICAgICAgICAgICAgICAgICAgICksIG1hdGNoZXJfMVxuICAgICAgICBAZXEgKCDOqWJic2ZtX18yOSA9IC0+IGdldF9uZXh0X2ZpbGVuYW1lICAgICAgIGFic19wYXRoICAgKSwgYWJzX21hdGNoZXJfMlxuICAgICAgICBAZXEgKCDOqWJic2ZtX18zMCA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgIGFic19wYXRoICAgKSwgYWJzX21hdGNoZXJfM1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3IgWyBwYXRoLCBbIG1hdGNoZXJfMSwgbWF0Y2hlcl8yLCBtYXRjaGVyXzMsIF0sIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICByZWxfcGF0aCAgICAgID0gUEFUSC5yZWxhdGl2ZSBwcm9jZXNzLmN3ZCgpLCBQQVRILmpvaW4gcGF0aF9wcmVmaXgsIHBhdGhcbiAgICAgICAgcmVsX21hdGNoZXJfMiA9IFBBVEgucmVsYXRpdmUgcHJvY2Vzcy5jd2QoKSwgUEFUSC5qb2luIHBhdGhfcHJlZml4LCBtYXRjaGVyXzJcbiAgICAgICAgcmVsX21hdGNoZXJfMyA9IFBBVEgucmVsYXRpdmUgcHJvY2Vzcy5jd2QoKSwgUEFUSC5qb2luIHBhdGhfcHJlZml4LCBtYXRjaGVyXzNcbiAgICAgICAgQGVxICggzqliYnNmbV9fMzEgPSAtPiBleGlzdHMgcmVsX3BhdGggICAgICAgICAgICAgICAgICAgICksIG1hdGNoZXJfMVxuICAgICAgICBAZXEgKCDOqWJic2ZtX18zMiA9IC0+IGdldF9uZXh0X2ZpbGVuYW1lICAgICAgIHJlbF9wYXRoICAgKSwgcmVsX21hdGNoZXJfMlxuICAgICAgICBAZXEgKCDOqWJic2ZtX18zMyA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgIHJlbF9wYXRoICAgKSwgcmVsX21hdGNoZXJfM1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjdXJyZW50X2N3ZCA9IFBBVEgucmVzb2x2ZSBwcm9jZXNzLmN3ZCgpXG4gICAgICBwcm9jZXNzLmNoZGlyIHBhdGhfcHJlZml4XG4gICAgICB0cnlcbiAgICAgICAgZm9yIFsgcGF0aCwgWyBtYXRjaGVyXzEsIG1hdGNoZXJfMiwgbWF0Y2hlcl8zLCBdLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgICBAZXEgKCDOqWJic2ZtX18zNCA9IC0+IGV4aXN0cyBwYXRoICAgICAgICAgICAgICAgICAgICApLCBtYXRjaGVyXzFcbiAgICAgICAgICBAZXEgKCDOqWJic2ZtX18zNSA9IC0+IGdldF9uZXh0X2ZpbGVuYW1lICAgICAgIHBhdGggICApLCBtYXRjaGVyXzJcbiAgICAgICAgICBAZXEgKCDOqWJic2ZtX18zNiA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgIHBhdGggICApLCBtYXRjaGVyXzNcbiAgICAgIGZpbmFsbHlcbiAgICAgICAgcHJvY2Vzcy5jaGRpciBjdXJyZW50X2N3ZFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIyAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgZ2V0X25leHRfZnJlZV9maWxlbmFtZV9zd2FwX3N1ZmZpeDogLT5cbiAgIyAgIHsgZ2V0X25leHRfZnJlZV9maWxlbmFtZSxcbiAgIyAgICAgc3dhcF9zdWZmaXgsICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX25leHRfZnJlZV9maWxlbmFtZSgpXG4gICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgZGVidWcgJ86pYmJzZm1fXzM3JywgaW50ZXJtZWRpYXRlX2NhY2hlX3BhdGggPSBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lICcvcGF0aC90by9yZWZlcmVuY2UudHh0J1xuICAjICAgZGVidWcgJ86pYmJzZm1fXzM4JywgZmluYWxpemVkX2NhY2hlX3BhdGggICAgPSBzd2FwX3N1ZmZpeCAnLmZpbmFsaXplZCdcbiAgIyAgIEBlcSAgICAgKCDOqWJic2ZtX18zOSA9IC0+IGludGVybWVkaWF0ZV9jYWNoZV9wYXRoICAgICAgICAgICApLCAnL3BhdGgvdG8vfi5yZWZlcmVuY2UudHh0LjAwMDEuZmluYWxpemVkJ1xuICAjICAgcmF0aGVyIHVzZSAnL3BhdGgvdG8vfi5yZWZlcmVuY2UudHh0LjAwMDEuYnJpY2FicmFjLWNhY2hlLmZpbmFsaXplZCdcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQU5TSTogLT5cbiAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuICAgIHsgQU5TSSwgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2koKVxuICAgIEBlcSAgICAgKCDOqWJic2ZtX180MCA9IC0+IEFOU0kuZmdfZnJvbV9oZXggJyNhMGExYTInICAgICAgICAgICApLCAnXFx4MUJbMzg6Mjo6MTYwOjE2MToxNjJtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX180MSA9IC0+IEFOU0kuYmdfZnJvbV9oZXggJyNhMGExYTInICAgICAgICAgICApLCAnXFx4MUJbNDg6Mjo6MTYwOjE2MToxNjJtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX180MiA9IC0+IEFOU0kuZmdfZnJvbV9kZWMgWyAxNjAsIDE2MSwgMTYyIF0gICApLCAnXFx4MUJbMzg6Mjo6MTYwOjE2MToxNjJtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX180MyA9IC0+IEFOU0kuYmdfZnJvbV9kZWMgWyAxNjAsIDE2MSwgMTYyIF0gICApLCAnXFx4MUJbNDg6Mjo6MTYwOjE2MToxNjJtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX180NCA9IC0+IEFOU0kuZGVjX2Zyb21faGV4ICcjYTBhMWEyJyAgICAgICAgICApLCBbIDE2MCwgMTYxLCAxNjIgXVxuICAgIEB0aHJvd3MgKCDOqWJic2ZtX180NSA9IC0+IEFOU0kuZGVjX2Zyb21faGV4ICcjeHh4eHh4JyAgICAgICAgICApLCAvbm90IGEgcHJvcGVyIGhleGFkZWNpbWFsIFJHQiBjb2RlOiAnI3h4eHh4eCcvXG4gICAgQHRocm93cyAoIM6pYmJzZm1fXzQ2ID0gLT4gQU5TSS5kZWNfZnJvbV9oZXggJyNhYWFhYScgICAgICAgICAgICksIC9ub3QgYSBwcm9wZXIgaGV4YWRlY2ltYWwgUkdCIGNvZGU6ICcjYWFhYWEnL1xuICAgIEB0aHJvd3MgKCDOqWJic2ZtX180NyA9IC0+IEFOU0kuZGVjX2Zyb21faGV4ICcjYWFhYWFiYicgICAgICAgICApLCAvbm90IGEgcHJvcGVyIGhleGFkZWNpbWFsIFJHQiBjb2RlOiAnI2FhYWFhYmInL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHM6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IGFuc2lfY29sb3JzX2FuZF9lZmZlY3RzOiBDLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHMoKVxuICAgIEBlcSAgICAgKCDOqWJic2ZtX180OCA9IC0+IEMucmVkICAgICAgICAgICAgICApLCAnXFx4MUJbMzg6Mjo6MjU1OjA6MTZtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX180OSA9IC0+IEMuYmdfcmVkICAgICAgICAgICApLCAnXFx4MUJbNDg6Mjo6MjU1OjA6MTZtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX181MCA9IC0+IEMub3ZlcmxpbmUgICAgICAgICApLCAnXFx4MWJbNTNtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX181MSA9IC0+IEMub3ZlcmxpbmUwICAgICAgICApLCAnXFx4MWJbNTVtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX181MiA9IC0+IEMuZGVmYXVsdCAgICAgICAgICApLCAnXFx4MWJbMzltJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX181MyA9IC0+IEMuYmdfZGVmYXVsdCAgICAgICApLCAnXFx4MWJbNDltJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX181NCA9IC0+IEMucmVzZXQgICAgICAgICAgICApLCAnXFx4MWJbMG0nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVxdWlyZV9hbnNpX2NodW5rZXI6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IGFuc2lfY29sb3JzX2FuZF9lZmZlY3RzOiBDLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHMoKVxuICAgIHsgQW5zaV9jaHVua2VyLCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpX2NodW5rZXIoKVxuICAgIGRvID0+XG4gICAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICB0ZXh0ICA9IFwiQUJDI3sgQy5ibGFjayArIEMuYmdfcmVkICsgQy5ib2xkICsgJ0RFRicgKyBDLmJvbGQwICsgQy5kZWZhdWx0ICsgQy5iZ19kZWZhdWx0IH1YWVpcIlxuICAgICAgYWMgICAgPSBuZXcgQW5zaV9jaHVua2VyKClcbiAgICAgIHVyZ2UgJ86pYmJzZm1fXzU1JywgICAgICAgICAgICAgICAgYWMuY2h1bmtpZnkgdGV4dFxuICAgICAgIyBpbmZvICfOqWJic2ZtX181NicsIGQgZm9yIGQgZnJvbSAoIGFjLmNodW5raWZ5IHRleHQgKS5jaHVua3NcbiAgICAgIGluZm8gJ86pYmJzZm1fXzU3JywgZCBmb3IgZCBmcm9tIGFjXG4gICAgICBpbmZvICfOqWJic2ZtX181OCcsIGFjLndpZHRoXG4gICAgICBpbmZvICfOqWJic2ZtX181OScsIGFjLmxlbmd0aFxuICAgICAgaW5mbyAnzqliYnNmbV9fNjAnLCBhYy5oYXNfYW5zaVxuICAgICAgaW5mbyAnzqliYnNmbV9fNjEnLCBhYy50ZXh0XG4gICAgZG8gPT5cbiAgICAgIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAgIHRleHQgID0gJ0FCQ0RFRlhZWidcbiAgICAgIGFjICAgID0gbmV3IEFuc2lfY2h1bmtlcigpXG4gICAgICB1cmdlICfOqWJic2ZtX182MicsICAgICAgICAgICAgICAgIGFjLmNodW5raWZ5IHRleHRcbiAgICAgICMgaW5mbyAnzqliYnNmbV9fNjMnLCBkIGZvciBkIGZyb20gKCBhYy5jaHVua2lmeSB0ZXh0ICkuY2h1bmtzXG4gICAgICBpbmZvICfOqWJic2ZtX182NCcsIGQgZm9yIGQgZnJvbSBhY1xuICAgICAgaW5mbyAnzqliYnNmbV9fNjUnLCBhYy53aWR0aFxuICAgICAgaW5mbyAnzqliYnNmbV9fNjYnLCBhYy5sZW5ndGhcbiAgICAgIGluZm8gJ86pYmJzZm1fXzY3JywgYWMuaGFzX2Fuc2lcbiAgICAgIGluZm8gJ86pYmJzZm1fXzY4JywgYWMudGV4dFxuICAgIGRvID0+XG4gICAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICB0ZXh0ICA9IFwiI3sgQy5ibGFjayArIEMuYmdfcmVkICsgQy5ib2xkICsgQy5ib2xkMCArIEMuZGVmYXVsdCArIEMuYmdfZGVmYXVsdCB9XCJcbiAgICAgIGFjICAgID0gbmV3IEFuc2lfY2h1bmtlcigpXG4gICAgICB1cmdlICfOqWJic2ZtX182OScsICAgICAgICAgICAgICAgIGFjLmNodW5raWZ5IHRleHRcbiAgICAgICMgaW5mbyAnzqliYnNmbV9fNzAnLCBkIGZvciBkIGZyb20gKCBhYy5jaHVua2lmeSB0ZXh0ICkuY2h1bmtzXG4gICAgICBpbmZvICfOqWJic2ZtX183MScsIGQgZm9yIGQgZnJvbSBhY1xuICAgICAgaW5mbyAnzqliYnNmbV9fNzInLCBhYy53aWR0aFxuICAgICAgaW5mbyAnzqliYnNmbV9fNzMnLCBhYy5sZW5ndGhcbiAgICAgIGluZm8gJ86pYmJzZm1fXzc0JywgYWMuaGFzX2Fuc2lcbiAgICAgIGluZm8gJ86pYmJzZm1fXzc1JywgYWMudGV4dFxuICAgIGRvID0+XG4gICAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICB0ZXh0ICA9ICcnXG4gICAgICBhYyAgICA9IG5ldyBBbnNpX2NodW5rZXIoKVxuICAgICAgdXJnZSAnzqliYnNmbV9fNzYnLCAgICAgICAgICAgICAgICBhYy5jaHVua2lmeSB0ZXh0XG4gICAgICAjIGluZm8gJ86pYmJzZm1fXzc3JywgZCBmb3IgZCBmcm9tICggYWMuY2h1bmtpZnkgdGV4dCApLmNodW5rc1xuICAgICAgaW5mbyAnzqliYnNmbV9fNzgnLCBkIGZvciBkIGZyb20gYWNcbiAgICAgIGluZm8gJ86pYmJzZm1fXzc5JywgYWMud2lkdGhcbiAgICAgIGluZm8gJ86pYmJzZm1fXzgwJywgYWMubGVuZ3RoXG4gICAgICBpbmZvICfOqWJic2ZtX184MScsIGFjLmhhc19hbnNpXG4gICAgICBpbmZvICfOqWJic2ZtX184MicsIGFjLnRleHRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX3N0cmlwX2Fuc2k6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IHN0cmlwX2Fuc2ksIGludGVybmFsczpcbiAgICAgIHsgYW5zaV9yZSxcbiAgICAgICAgb3duX3NpbmdsZV9hbnNpX3JlLCAgICAgfSB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfc3RyaXBfYW5zaSgpXG4gICAgeyBhbnNpX2NvbG9yc19hbmRfZWZmZWN0czogQywgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2lfY29sb3JzX2FuZF9lZmZlY3RzKClcbiAgICBkbyA9PlxuICAgICAgdGV4dCAgPSBcIkFCQyN7IEMuYmxhY2sgKyBDLmJnX3JlZCArIEMuYm9sZCArICdERUYnICsgQy5ib2xkMCArIEMuZGVmYXVsdCArIEMuYmdfZGVmYXVsdCB9WFlaXCJcbiAgICAgIHVyZ2UgJ86pYmJzZm1fXzgzJywgcnByIHN0cmlwX2Fuc2kgdGV4dFxuICAgICAgaW5mbyAnzqliYnNmbV9fODQnLCBycHIgdGV4dC5zcGxpdCBhbnNpX3JlXG4gICAgICBpbmZvICfOqWJic2ZtX184NScsIHJwciB0ZXh0LnNwbGl0IG93bl9zaW5nbGVfYW5zaV9yZVxuICAgICAgQGVxICggzqliYnNmbV9fODYgPSAtPiBzdHJpcF9hbnNpIHRleHQgKSwgJ0FCQ0RFRlhZWidcbiAgICBkbyA9PlxuICAgICAgdGV4dCAgPSAnQUJDREVGWFlaJ1xuICAgICAgdXJnZSAnzqliYnNmbV9fODcnLCBycHIgc3RyaXBfYW5zaSB0ZXh0XG4gICAgICBAZXEgKCDOqWJic2ZtX184OCA9IC0+IHN0cmlwX2Fuc2kgdGV4dCApLCAnQUJDREVGWFlaJ1xuICAgIGRvID0+XG4gICAgICB0ZXh0ICA9IFwiI3sgQy5ibGFjayArIEMuYmdfcmVkICsgQy5ib2xkICsgQy5ib2xkMCArIEMuZGVmYXVsdCArIEMuYmdfZGVmYXVsdCB9XCJcbiAgICAgIHVyZ2UgJ86pYmJzZm1fXzg5JywgcnByIHN0cmlwX2Fuc2kgdGV4dFxuICAgICAgQGVxICggzqliYnNmbV9fOTAgPSAtPiBzdHJpcF9hbnNpIHRleHQgKSwgJydcbiAgICBkbyA9PlxuICAgICAgdGV4dCAgPSAnJ1xuICAgICAgdXJnZSAnzqliYnNmbV9fOTEnLCBycHIgc3RyaXBfYW5zaSB0ZXh0XG4gICAgICBAZXEgKCDOqWJic2ZtX185MiA9IC0+IHN0cmlwX2Fuc2kgdGV4dCApLCAnJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfZ2V0X2NhbGxzaXRlOiAtPlxuICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgeyBnZXRfY2FsbHNpdGUsXG4gICAgICBnZXRfYXBwX2RldGFpbHMsXG4gICAgICByZXF1aXJlX2Zyb21fYXBwX2ZvbGRlcixcbiAgICAgIGdldF9icmljYWJyYWNfY2ZnLCAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9jYWxsc2l0ZSgpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgVVJMICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnVybCdcbiAgICBhcHBfcGF0aCAgICAgICAgICAgICAgICAgICAgICA9IFBBVEgucmVzb2x2ZSBQQVRILmpvaW4gX19kaXJuYW1lLCAnLi4vLi4vLi4vJ1xuICAgIHBhY2thZ2VfcGF0aCAgICAgICAgICAgICAgICAgID0gUEFUSC5qb2luIGFwcF9wYXRoLCAncGFja2FnZS5qc29uJ1xuICAgIHZlcnNpb24gICAgICAgICAgICAgICAgICAgICAgID0gKCByZXF1aXJlICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nICkudmVyc2lvblxuICAgIG5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgID0gKCByZXF1aXJlICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nICkubmFtZVxuICAgIGZhbGxiYWNrICAgICAgICAgICAgICAgICAgICAgID0gU3ltYm9sICdmYWxsYmFjaydcbiAgICBicmljYWJyYWNfY2ZnXzEgICAgICAgICAgICAgICA9IHJlcXVpcmVfZnJvbV9hcHBfZm9sZGVyIHsgcGF0aDogJ2JyaWNhYnJhYy5jZmcuanMnLCB9XG4gICAgYnJpY2FicmFjX2NmZ18yICAgICAgICAgICAgICAgPSBnZXRfYnJpY2FicmFjX2NmZygpXG4gICAgYXBwICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBnZXRfYXBwX2RldGFpbHMoKVxuICAgIGRhdGFzdG9yZV9wYXRoICAgICAgICAgICAgICAgID0gUEFUSC5qb2luIGFwcC5wYXRoLCAnaGVuZ2lzdC1uZy5zcWxpdGUnXG4gICAgY2FsbHNpdGUgICAgICAgICAgICAgICAgICAgICAgPSBnZXRfY2FsbHNpdGUgeyBzb3VyY2VtYXBwZWQ6IGZhbHNlLCB9XG4gICAgZGVidWcgJ86pYmJzZm1fXzkzJywgYnJpY2FicmFjX2NmZ18yXG4gICAgIyBAZXEgKCDOqWJic2ZtX185NCA9IC0+IFVSTC5maWxlVVJMVG9QYXRoIGNhbGxzaXRlLnNjcmlwdE5hbWUgICAgICAgICAgICAgICAgICksIF9fZmlsZW5hbWVcbiAgICBAZXEgICAgICggzqliYnNmbV9fOTUgPSAtPiBjYWxsc2l0ZS5zY3JpcHROYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgX19maWxlbmFtZVxuICAgIEBlcSAgICAgKCDOqWJic2ZtX185NiA9IC0+IGFwcC5wYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBhcHBfcGF0aFxuICAgIEBlcSAgICAgKCDOqWJic2ZtX185NyA9IC0+IGFwcC5wYWNrYWdlX3BhdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBwYWNrYWdlX3BhdGhcbiAgICBAZXEgICAgICggzqliYnNmbV9fOTggPSAtPiBhcHAudmVyc2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdmVyc2lvblxuICAgIEBlcSAgICAgKCDOqWJic2ZtX185OSA9IC0+IGFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBuYW1lXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTAwID0gLT4gYnJpY2FicmFjX2NmZ18xLmRhdGFzdG9yZS5uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdoZW5naXN0LW5nJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtXzEwMSA9IC0+IGdldF9icmljYWJyYWNfY2ZnIHsgcGF0aDogJ25vc3VjaHBhdGgnLCBmYWxsYmFjaywgfSAgICksIGZhbGxiYWNrXG4gICAgQHRocm93cyAoIM6pYmJzZm1fMTAyID0gLT4gZ2V0X2JyaWNhYnJhY19jZmcgeyBwYXRoOiAnbm9zdWNocGF0aCcsIH0gICAgICAgICAgICAgKSwgL0Nhbm5vdCBmaW5kIG1vZHVsZS9pXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTAzID0gLT4gYnJpY2FicmFjX2NmZ18yLmRhdGFzdG9yZS5uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdoZW5naXN0LW5nJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtXzEwNCA9IC0+IGJyaWNhYnJhY19jZmdfMi5kYXRhc3RvcmUucGF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBkYXRhc3RvcmVfcGF0aFxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzEwNSA9IC0+IGJyaWNhYnJhY19jZmdfMi5hcHAubmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBuYW1lXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVxdWlyZV9nZXRfY2FsbHNpdGU6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IGdldF9jYWxsc2l0ZSxcbiAgICAgIGdldF9jYWxsc2l0ZV9wYXRoLCAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9jYWxsc2l0ZSgpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgVVJMICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnVybCdcbiAgICBhcHBfcGF0aCAgICAgICAgICAgICAgICAgICAgICA9IFBBVEgucmVzb2x2ZSBQQVRILmpvaW4gX19kaXJuYW1lLCAnLi4vLi4vLi4vJ1xuICAgIHBhY2thZ2VfcGF0aCAgICAgICAgICAgICAgICAgID0gUEFUSC5qb2luIGFwcF9wYXRoLCAncGFja2FnZS5qc29uJ1xuICAgIHZlcnNpb24gICAgICAgICAgICAgICAgICAgICAgID0gKCByZXF1aXJlICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nICkudmVyc2lvblxuICAgIG5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgID0gKCByZXF1aXJlICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nICkubmFtZVxuICAgIGZhbGxiYWNrICAgICAgICAgICAgICAgICAgICAgID0gU3ltYm9sICdmYWxsYmFjaydcbiAgICBjYWxsc2l0ZSAgICAgICAgICAgICAgICAgICAgICA9IGdldF9jYWxsc2l0ZSB7IHNvdXJjZW1hcHBlZDogZmFsc2UsIH1cbiAgICBmaWxlbmFtZSAgICAgICAgICAgICAgICAgICAgICA9IF9fZmlsZW5hbWUucmVwbGFjZSAvXiguKylcXC9saWJcXC8oW15cXC9dKz8pXFwuanMvLCAnJDEvc3JjLyQyLmNvZmZlZSdcbiAgICBAZXEgICAgICggzqliYnNmbV8xMDYgPSAtPiBjYWxsc2l0ZS5zY3JpcHROYW1lICksIF9fZmlsZW5hbWVcbiAgICBAZXEgICAgICggzqliYnNmbV8xMDcgPSAtPiBnZXRfY2FsbHNpdGVfcGF0aCgpICksIGZpbGVuYW1lXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVxdWlyZV9nZXRfYXBwX2RldGFpbHM6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICB7IGdldF9hcHBfZGV0YWlscyxcbiAgICAgIHJlcXVpcmVfZnJvbV9hcHBfZm9sZGVyLFxuICAgICAgZ2V0X2JyaWNhYnJhY19jZmcsIH0gICAgICAgID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X2FwcF9kZXRhaWxzKClcbiAgICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICBVUkwgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6dXJsJ1xuICAgIGFwcF9wYXRoICAgICAgICAgICAgICAgICAgICAgID0gUEFUSC5yZXNvbHZlIFBBVEguam9pbiBfX2Rpcm5hbWUsICcuLi8uLi8uLi8nXG4gICAgcGFja2FnZV9wYXRoICAgICAgICAgICAgICAgICAgPSBQQVRILmpvaW4gYXBwX3BhdGgsICdwYWNrYWdlLmpzb24nXG4gICAgdmVyc2lvbiAgICAgICAgICAgICAgICAgICAgICAgPSAoIHJlcXVpcmUgJy4uLy4uLy4uL3BhY2thZ2UuanNvbicgKS52ZXJzaW9uXG4gICAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoIHJlcXVpcmUgJy4uLy4uLy4uL3BhY2thZ2UuanNvbicgKS5uYW1lXG4gICAgZmFsbGJhY2sgICAgICAgICAgICAgICAgICAgICAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgIGJyaWNhYnJhY19jZmdfMSAgICAgICAgICAgICAgID0gcmVxdWlyZV9mcm9tX2FwcF9mb2xkZXIgeyBwYXRoOiAnYnJpY2FicmFjLmNmZy5qcycsIH1cbiAgICBicmljYWJyYWNfY2ZnXzIgICAgICAgICAgICAgICA9IGdldF9icmljYWJyYWNfY2ZnKClcbiAgICBhcHAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGdldF9hcHBfZGV0YWlscygpXG4gICAgZGF0YXN0b3JlX3BhdGggICAgICAgICAgICAgICAgPSBQQVRILmpvaW4gYXBwLnBhdGgsICdoZW5naXN0LW5nLnNxbGl0ZSdcbiAgICAjIGRlYnVnICfOqWJic2ZtXzEwOCcsIGJyaWNhYnJhY19jZmdfMlxuICAgICMgQGVxICggzqliYnNmbV8xMDkgPSAtPiBVUkwuZmlsZVVSTFRvUGF0aCBjYWxsc2l0ZS5zY3JpcHROYW1lICAgICAgICAgICAgICAgICApLCBfX2ZpbGVuYW1lXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTEwID0gLT4gYXBwLnBhdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGFwcF9wYXRoXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTExID0gLT4gYXBwLnBhY2thZ2VfcGF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHBhY2thZ2VfcGF0aFxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzExMiA9IC0+IGFwcC52ZXJzaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB2ZXJzaW9uXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTEzID0gLT4gYXBwLm5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIG5hbWVcbiAgICBAZXEgICAgICggzqliYnNmbV8xMTQgPSAtPiBicmljYWJyYWNfY2ZnXzEuZGF0YXN0b3JlLm5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2hlbmdpc3QtbmcnXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTE1ID0gLT4gZ2V0X2JyaWNhYnJhY19jZmcgeyBwYXRoOiAnbm9zdWNocGF0aCcsIGZhbGxiYWNrLCB9ICAgICAgICksIGZhbGxiYWNrXG4gICAgQHRocm93cyAoIM6pYmJzZm1fMTE2ID0gLT4gZ2V0X2JyaWNhYnJhY19jZmcgeyBwYXRoOiAnbm9zdWNocGF0aCcsICAgICAgICAgICB9ICAgICAgICksIC9DYW5ub3QgZmluZCBtb2R1bGUvaVxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzExNyA9IC0+IGJyaWNhYnJhY19jZmdfMi5kYXRhc3RvcmUubmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnaGVuZ2lzdC1uZydcbiAgICBAZXEgICAgICggzqliYnNmbV8xMTggPSAtPiBicmljYWJyYWNfY2ZnXzIuZGF0YXN0b3JlLnBhdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZGF0YXN0b3JlX3BhdGhcbiAgICBAZXEgICAgICggzqliYnNmbV8xMTkgPSAtPiBicmljYWJyYWNfY2ZnXzIuYXBwLm5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbmFtZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfbG91cGU6IC0+XG4gICAgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICBMT1VQRSA9IFNGTU9EVUxFUy5yZXF1aXJlX2xvdXBlKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzEyMCA9IC0+IHR5cGVvZiBMT1VQRS5ycHIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtXzEyMSA9IC0+IExPVVBFLnJwciB7fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ3t9J1xuICAgIEBlcSAgICAgKCDOqWJic2ZtXzEyMSA9IC0+IExPVVBFLnJwciArMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJzAnXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTIxID0gLT4gTE9VUEUucnByIC0wICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnMCdcbiAgICBAZXEgICAgICggzqliYnNmbV8xMjIgPSAtPiBMT1VQRS5ycHIgXCInXFxuJ1wiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFwiJ1xcXFwnXFxcXG5cXFxcJydcIlxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzEyMiA9IC0+IExPVVBFLnJwciAnXCJcXG5cIicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgXCJcIlwiJ1wiXFxcXG5cIidcIlwiXCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX2ltcHJvdmVkX3N0cnVjdHVyZSA9IC0+XG4gIGhlbHAgJ86pa3ZydF8xOTYnLCByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gIERJUyA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvX2RlbW8taW1wcm92ZWQtc3RydWN0dXJlJ1xuICBoZWxwICfOqWt2cnRfMTk3JywgRElTXG4gIERJUy5kZW1vX2F0dGFjaGVkKClcbiAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAdGFza3NcbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfZ2V0X2xvY2FsX2Rlc3RpbmF0aW9uczogQHRhc2tzLnJlcXVpcmVfZ2V0X2xvY2FsX2Rlc3RpbmF0aW9ucywgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfZGljdGlvbmFyeV90b29sczogQHRhc2tzLnJlcXVpcmVfZGljdGlvbmFyeV90b29scywgfVxuICAjIGRlbW9faW1wcm92ZWRfc3RydWN0dXJlKCkiXX0=
