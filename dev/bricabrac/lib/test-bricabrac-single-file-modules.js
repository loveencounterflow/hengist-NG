(async function() {
  /*

  ## Applications

  * **RegEx Builder** (example from [Rejigs blog post](https://medium.com/@omarzawahry/rejigs-making-regular-expressions-human-readable-1fad37cb3eae))

  ```java
  var emailRegex =
      Rejigs.Create()
            .AtStart()
            .OneOrMore(r => r.AnyLetterOrDigit().Or().AnyOf("._%+-"))
            .Text("@")
            .OneOrMore(r => r.AnyLetterOrDigit().Or().AnyOf(".-"))
            .Text(".")
            .AnyLetterOrDigit().AtLeast(2)
            .AtEnd()
            .Build();
  ```

  * **HTML/XML Builer**
  * **SQL Builder**
  * **CLI Coloring**
  * syntax for a **Type Checker**

   */
  'use strict';
  var GTNG, GUY, SFMODULES, Test, alert, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, tests, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-single-file-modules'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    is_tagfun_call: function() {
      var fn, is_tagfun_call, Ωbbsfm___1, Ωbbsfm___2, Ωbbsfm___3;
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
      var escape_html_text, Ωbbsfm___4, Ωbbsfm___5, Ωbbsfm___6;
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
      var walk_nonempty_parts, walk_parts, walk_raw_nonempty_parts, walk_raw_parts, Ωbbsfm__10, Ωbbsfm__11, Ωbbsfm__12, Ωbbsfm__13, Ωbbsfm__14, Ωbbsfm__15, Ωbbsfm__16, Ωbbsfm__17, Ωbbsfm__18, Ωbbsfm__19, Ωbbsfm__20, Ωbbsfm__21, Ωbbsfm__22, Ωbbsfm__23, Ωbbsfm___7, Ωbbsfm___8, Ωbbsfm___9;
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
      var PATH, cache_filename_re, exists, get_next_filename, get_next_free_filename, path_prefix, probes_and_matchers, Ωbbsfm__24, Ωbbsfm__25, Ωbbsfm__26, Ωbbsfm__27;
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
      var ANSI, Ωbbsfm__40, Ωbbsfm__41, Ωbbsfm__42, Ωbbsfm__43, Ωbbsfm__44, Ωbbsfm__45, Ωbbsfm__46, Ωbbsfm__47;
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
      var C, Ωbbsfm__48, Ωbbsfm__49, Ωbbsfm__50, Ωbbsfm__51, Ωbbsfm__52, Ωbbsfm__53, Ωbbsfm__54;
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
        return C.overline1;
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
      var Ansi_chunker, C;
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
      var C, ansi_re, own_single_ansi_re, strip_ansi;
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
      var PATH, URL, app, app_path, bricabrac_cfg_1, bricabrac_cfg_2, callsite, datastore_path, fallback, get_app_details, get_bricabrac_cfg, get_callsite, name, package_path, require_from_app_folder, version, Ωbbsfm_100, Ωbbsfm_101, Ωbbsfm_102, Ωbbsfm_103, Ωbbsfm_104, Ωbbsfm_105, Ωbbsfm__95, Ωbbsfm__96, Ωbbsfm__97, Ωbbsfm__98, Ωbbsfm__99;
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
      var PATH, URL, app_path, callsite, fallback, filename, get_callsite, get_callsite_path, name, package_path, version, Ωbbsfm_106, Ωbbsfm_107;
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
      var PATH, URL, app, app_path, bricabrac_cfg_1, bricabrac_cfg_2, datastore_path, fallback, get_app_details, get_bricabrac_cfg, name, package_path, require_from_app_folder, version, Ωbbsfm_110, Ωbbsfm_111, Ωbbsfm_112, Ωbbsfm_113, Ωbbsfm_114, Ωbbsfm_115, Ωbbsfm_116, Ωbbsfm_117, Ωbbsfm_118, Ωbbsfm_119;
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
    require_dbric: function() {
      var Dbric, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      debug('Ωbbsfm_120', new Dbric('/dev/shm/bricabrac.sqlite'));
      (() => {
        var Dbric_store, dbs, results, row;
        Dbric_store = (function() {
          class Dbric_store extends Dbric {};

          Dbric_store.statements = {
            create_tables: SQL`-- drop table if exists kvps;
create table if not exists kvps (
  k             text unique not null primary key,
  v             json );`,
            get_schema: SQL`select * from sqlite_schema order by name, type;`,
            get_tables: SQL`select * from sqlite_schema where type is 'table' order by name, type;`,
            insert_kvp: SQL`insert into kvps ( k, v ) values ( $k, $v )
  on conflict ( k ) do update set v = excluded.v;`,
            get_kvps: SQL`select * from kvps order by k;`
          };

          return Dbric_store;

        }).call(this);
        debug('Ωbbsfm_121', new Dbric_store('/dev/shm/bricabrac.sqlite'));
        debug('Ωbbsfm_122', Dbric_store.open('/dev/shm/bricabrac.sqlite'));
        dbs = Dbric_store.open('/dev/shm/bricabrac.sqlite');
        dbs.statements.create_tables.run();
        for (row of dbs.statements.get_schema.iterate()) {
          help('Ωbbsfm_123', row);
        }
        dbs.statements.insert_kvp.run({
          k: 'one',
          v: JSON.stringify(1)
        });
        dbs.statements.insert_kvp.run({
          k: 'two',
          v: JSON.stringify(2)
        });
        dbs.statements.insert_kvp.run({
          k: 'three',
          v: JSON.stringify(3)
        });
        dbs.statements.insert_kvp.run({
          k: 'three',
          v: JSON.stringify('iii')
        });
        dbs.statements.insert_kvp.run({
          k: 'true',
          v: JSON.stringify(true)
        });
        dbs.statements.insert_kvp.run({
          k: 'false',
          v: JSON.stringify(false)
        });
        results = [];
        for (row of dbs.statements.get_kvps.iterate()) {
          row = {...row, ...{
              v: JSON.parse(row.v),
              _v: row.v
            }};
          results.push(help('Ωbbsfm_124', row));
        }
        return results;
      })();
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      // demo_infinite_proxy()
      // demo_colorful_proxy()
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
      (new Test(guytest_cfg)).test({tests});
      (new Test(guytest_cfg)).test({
        require_get_app_details: tests.require_get_app_details
      });
      return (new Test(guytest_cfg)).test({
        require_dbric: tests.require_dbric
      });
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCRztFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBRUg7QUFGRyxNQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUtILEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsK0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUEzQkc7OztFQTZCSCxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FB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LENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxhQUFBLEVBQWUsS0FBSyxDQUFDO01BQXZCLENBQTlCO0lBUHNDLENBQUEsSUFBeEM7O0FBcllHIiwic291cmNlc0NvbnRlbnQiOlsiXG4jIyNcblxuXG4jIyBBcHBsaWNhdGlvbnNcblxuKiAqKlJlZ0V4IEJ1aWxkZXIqKiAoZXhhbXBsZSBmcm9tIFtSZWppZ3MgYmxvZyBwb3N0XShodHRwczovL21lZGl1bS5jb20vQG9tYXJ6YXdhaHJ5L3Jlamlncy1tYWtpbmctcmVndWxhci1leHByZXNzaW9ucy1odW1hbi1yZWFkYWJsZS0xZmFkMzdjYjNlYWUpKVxuXG5gYGBqYXZhXG52YXIgZW1haWxSZWdleCA9XG4gICAgUmVqaWdzLkNyZWF0ZSgpXG4gICAgICAgICAgLkF0U3RhcnQoKVxuICAgICAgICAgIC5PbmVPck1vcmUociA9PiByLkFueUxldHRlck9yRGlnaXQoKS5PcigpLkFueU9mKFwiLl8lKy1cIikpXG4gICAgICAgICAgLlRleHQoXCJAXCIpXG4gICAgICAgICAgLk9uZU9yTW9yZShyID0+IHIuQW55TGV0dGVyT3JEaWdpdCgpLk9yKCkuQW55T2YoXCIuLVwiKSlcbiAgICAgICAgICAuVGV4dChcIi5cIilcbiAgICAgICAgICAuQW55TGV0dGVyT3JEaWdpdCgpLkF0TGVhc3QoMilcbiAgICAgICAgICAuQXRFbmQoKVxuICAgICAgICAgIC5CdWlsZCgpO1xuYGBgXG5cbiogKipIVE1ML1hNTCBCdWlsZXIqKlxuKiAqKlNRTCBCdWlsZGVyKipcbiogKipDTEkgQ29sb3JpbmcqKlxuKiBzeW50YXggZm9yIGEgKipUeXBlIENoZWNrZXIqKlxuXG4jIyNcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xuXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNfdGFnZnVuX2NhbGw6IC0+XG4gICAgeyBpc190YWdmdW5fY2FsbCwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfdGFnZnVuX3Rvb2xzKClcbiAgICBmbiA9ICggUC4uLiApIC0+IGlzX3RhZ2Z1bl9jYWxsIFAuLi5cbiAgICBAZXEgKCDOqWJic2ZtX19fMSA9IC0+IGZuKCkgICAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWJic2ZtX19fMiA9IC0+IGZuIFsgMSwgMiwgMywgXSAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWJic2ZtX19fMyA9IC0+IGZuXCJbIDEsIDIsIDMsIF1cIiApLCB0cnVlXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGVzY2FwZV9odG1sX3RleHQ6IC0+XG4gICAgeyBlc2NhcGVfaHRtbF90ZXh0LCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfZXNjYXBlX2h0bWxfdGV4dCgpXG4gICAgQGVxICggzqliYnNmbV9fXzQgPSAtPiBlc2NhcGVfaHRtbF90ZXh0ICcnICAgICAgICAgICAgICAgICAgICApLCAnJ1xuICAgIEBlcSAoIM6pYmJzZm1fX181ID0gLT4gZXNjYXBlX2h0bWxfdGV4dCAnYWJjJyAgICAgICAgICAgICAgICAgKSwgJ2FiYydcbiAgICBAZXEgKCDOqWJic2ZtX19fNiA9IC0+IGVzY2FwZV9odG1sX3RleHQgJ2FiYzx0YWc+ZCZlJmY8L3RhZz4nICksICdhYmMmbHQ7dGFnJmd0O2QmYW1wO2UmYW1wO2YmbHQ7L3RhZyZndDsnXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHdhbGtfdGFnZnVuX2NhbGxfcGFydHM6IC0+XG4gICAgIyB7IEh0bWwsICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmVfaHRtbF9jbGFzcygpXG4gICAgIyB7IGVzY2FwZV9odG1sX3RleHQsICAgICAgICAgfSA9IHJlcXVpcmVfZXNjYXBlX2h0bWxfdGV4dCgpXG4gICAgIyB7IHN0YWNrYWJsZV90YWdmdW4sICAgICAgICAgfSA9IHJlcXVpcmVfc3RhY2thYmxlX3RhZ2Z1bigpXG4gICAgeyB3YWxrX3BhcnRzLFxuICAgICAgd2Fsa19ub25lbXB0eV9wYXJ0cyxcbiAgICAgIHdhbGtfcmF3X3BhcnRzLFxuICAgICAgd2Fsa19yYXdfbm9uZW1wdHlfcGFydHMsICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfdGFnZnVuX3Rvb2xzKClcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEBlcSAoIM6pYmJzZm1fX183ID0gLT4gWyAoIHdhbGtfcGFydHNcIlwiICAgICAgICAgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX19fOCA9IC0+IFsgKCB3YWxrX3BhcnRzIFwiXCIgICAgICAgICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fXzkgPSAtPiBbICggd2Fsa19ub25lbXB0eV9wYXJ0c1wiXCIgICAgICAgICApLi4uLCBdICksIFtdXG4gICAgQGVxICggzqliYnNmbV9fMTAgPSAtPiBbICggd2Fsa19ub25lbXB0eV9wYXJ0cyAnJyAgICAgICAgKS4uLiwgXSApLCBbXVxuICAgIEBlcSAoIM6pYmJzZm1fXzExID0gLT4gWyAoIHdhbGtfcGFydHNcImFcIiAgICAgICAgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICdhJywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMTIgPSAtPiBbICggd2Fsa19wYXJ0c1wiXFxuYVwiICAgICAgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICdcXG5hJywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMTMgPSAtPiBbICggd2Fsa19yYXdfcGFydHNcIlxcbmFcIiAgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICdcXFxcbmEnLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18xNCA9IC0+IFsgKCB3YWxrX3BhcnRzXCIjezF9XCIgICAgICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9LCB7IHZhbHVlOiAxLCBpc2E6ICd2YWx1ZScsIH0sIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18xNSA9IC0+IFsgKCB3YWxrX25vbmVtcHR5X3BhcnRzXCIjezF9XCIgICAgICkuLi4sIF0gKSwgWyB7IHZhbHVlOiAxLCBpc2E6ICd2YWx1ZScsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18xNiA9IC0+IFsgKCB3YWxrX3BhcnRzXCJhI3sxfVwiICAgICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnYScsIGlzYTogJ2NodW5rJywgfSwgeyB2YWx1ZTogMSwgaXNhOiAndmFsdWUnLCB9LCB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMTcgPSAtPiBbICggd2Fsa19wYXJ0c1wiI3sxfSN7Mn1cIiAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgeyB2YWx1ZTogMSwgaXNhOiAndmFsdWUnLCB9LCB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9LCB7IHZhbHVlOiAyLCBpc2E6ICd2YWx1ZScsIH0sIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0gXVxuICAgIEBlcSAoIM6pYmJzZm1fXzE4ID0gLT4gWyAoIHdhbGtfbm9uZW1wdHlfcGFydHNcIiN7MX0jezJ9XCIgKS4uLiwgXSApLCBbIHsgdmFsdWU6IDEsIGlzYTogJ3ZhbHVlJywgfSwgeyB2YWx1ZTogMiwgaXNhOiAndmFsdWUnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMTkgPSAtPiBbICggd2Fsa19wYXJ0c1wiYSN7MX16XCIgICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJ2EnLCBpc2E6ICdjaHVuaycsIH0sIHsgdmFsdWU6IDEsIGlzYTogJ3ZhbHVlJywgfSwgeyBjaHVuazogJ3onLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18yMCA9IC0+IFsgKCB3YWxrX3BhcnRzXCJhI3sxfXojezJ9XCIgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnYScsIGlzYTogJ2NodW5rJywgfSwgeyB2YWx1ZTogMSwgaXNhOiAndmFsdWUnLCB9LCB7IGNodW5rOiAneicsIGlzYTogJ2NodW5rJywgfSwgeyB2YWx1ZTogMiwgaXNhOiAndmFsdWUnLCB9LCB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMjEgPSAtPiBbICggd2Fsa19wYXJ0cyBcImEjezF9eiN7Mn1cIiAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJ2ExejInLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18yMiA9IC0+IFsgKCB3YWxrX3BhcnRzIDEyICAgICAgICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgeyB2YWx1ZTogMTIsIGlzYTogJ3ZhbHVlJywgfSwgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzIzID0gLT4gWyAoIHdhbGtfbm9uZW1wdHlfcGFydHMgMTIgICAgICAgICkuLi4sIF0gKSwgWyB7IHZhbHVlOiAxMiwgaXNhOiAndmFsdWUnLCB9LCBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lOiAtPlxuICAgIHsgZ2V0X25leHRfZnJlZV9maWxlbmFtZSxcbiAgICAgIGdldF9uZXh0X2ZpbGVuYW1lLFxuICAgICAgZXhpc3RzLFxuICAgICAgY2FjaGVfZmlsZW5hbWVfcmUsICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX25leHRfZnJlZV9maWxlbmFtZSgpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQHRocm93cyAoIM6pYmJzZm1fXzI0ID0gLT4gZ2V0X25leHRfZnJlZV9maWxlbmFtZSBudWxsICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0L1xuICAgIEB0aHJvd3MgKCDOqWJic2ZtX18yNSA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgdW5kZWZpbmVkICAgKSwgL2V4cGVjdGVkIGEgdGV4dC9cbiAgICBAdGhyb3dzICggzqliYnNmbV9fMjYgPSAtPiBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lIHRydWUgICAgICAgICksIC9leHBlY3RlZCBhIHRleHQvXG4gICAgQHRocm93cyAoIM6pYmJzZm1fXzI3ID0gLT4gZ2V0X25leHRfZnJlZV9maWxlbmFtZSAnJyAgICAgICAgICApLCAvZXhwZWN0ZWQgYSBub25lbXB0eSB0ZXh0L1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgIFsgJ2EnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIGZhbHNlLCAnfi5hLjAwMDEuYnJpY2FicmFjLWNhY2hlJywgICAgICAgICAnfi5hLjAwMDEuYnJpY2FicmFjLWNhY2hlJywgXSwgXVxuICAgICAgWyAnUkVBRE1FLm1kJywgICAgICAgICAgICAgICAgICAgICAgICAgIFsgdHJ1ZSwgICd+LlJFQURNRS5tZC4wMDAxLmJyaWNhYnJhYy1jYWNoZScsICd+LlJFQURNRS5tZC4wMDA0LmJyaWNhYnJhYy1jYWNoZScsIF0sIF1cbiAgICAgIFsgJ34uUkVBRE1FLm1kLjAwMDEuYnJpY2FicmFjLWNhY2hlJywgICBbIHRydWUsICAnfi5SRUFETUUubWQuMDAwMi5icmljYWJyYWMtY2FjaGUnLCAnfi5SRUFETUUubWQuMDAwNC5icmljYWJyYWMtY2FjaGUnLCBdLCBdXG4gICAgICBbICd+LlJFQURNRS5tZC4wMDAyLmJyaWNhYnJhYy1jYWNoZScsICAgWyB0cnVlLCAgJ34uUkVBRE1FLm1kLjAwMDMuYnJpY2FicmFjLWNhY2hlJywgJ34uUkVBRE1FLm1kLjAwMDQuYnJpY2FicmFjLWNhY2hlJywgXSwgXVxuICAgICAgWyAnfi5SRUFETUUubWQuMDAwMy5icmljYWJyYWMtY2FjaGUnLCAgIFsgdHJ1ZSwgICd+LlJFQURNRS5tZC4wMDA0LmJyaWNhYnJhYy1jYWNoZScsICd+LlJFQURNRS5tZC4wMDA0LmJyaWNhYnJhYy1jYWNoZScsIF0sIF1cbiAgICAgIFsgJ34uUkVBRE1FLm1kLjAwMDQuYnJpY2FicmFjLWNhY2hlJywgICBbIGZhbHNlLCAnfi5SRUFETUUubWQuMDAwNS5icmljYWJyYWMtY2FjaGUnLCAnfi5SRUFETUUubWQuMDAwNS5icmljYWJyYWMtY2FjaGUnLCBdLCBdXG4gICAgICBdXG4gICAgcGF0aF9wcmVmaXggPSBQQVRILnJlc29sdmUgUEFUSC5qb2luIF9fZGlybmFtZSwgJy4uLy4uLy4uL2Fzc2V0cy9icmljYWJyYWMvZmluZC1mcmVlLWZpbGVuYW1lJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZvciBbIHBhdGgsIFsgbWF0Y2hlcl8xLCBtYXRjaGVyXzIsIG1hdGNoZXJfMywgXSwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgIGFic19wYXRoICAgICAgPSBQQVRILmpvaW4gcGF0aF9wcmVmaXgsIHBhdGhcbiAgICAgICAgYWJzX21hdGNoZXJfMiA9IFBBVEguam9pbiBwYXRoX3ByZWZpeCwgbWF0Y2hlcl8yXG4gICAgICAgIGFic19tYXRjaGVyXzMgPSBQQVRILmpvaW4gcGF0aF9wcmVmaXgsIG1hdGNoZXJfM1xuICAgICAgICBAZXEgKCDOqWJic2ZtX18yOCA9IC0+IGV4aXN0cyBhYnNfcGF0aCAgICAgICAgICAgICAgICAgICAgKSwgbWF0Y2hlcl8xXG4gICAgICAgIEBlcSAoIM6pYmJzZm1fXzI5ID0gLT4gZ2V0X25leHRfZmlsZW5hbWUgICAgICAgYWJzX3BhdGggICApLCBhYnNfbWF0Y2hlcl8yXG4gICAgICAgIEBlcSAoIM6pYmJzZm1fXzMwID0gLT4gZ2V0X25leHRfZnJlZV9maWxlbmFtZSAgYWJzX3BhdGggICApLCBhYnNfbWF0Y2hlcl8zXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZvciBbIHBhdGgsIFsgbWF0Y2hlcl8xLCBtYXRjaGVyXzIsIG1hdGNoZXJfMywgXSwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgIHJlbF9wYXRoICAgICAgPSBQQVRILnJlbGF0aXZlIHByb2Nlc3MuY3dkKCksIFBBVEguam9pbiBwYXRoX3ByZWZpeCwgcGF0aFxuICAgICAgICByZWxfbWF0Y2hlcl8yID0gUEFUSC5yZWxhdGl2ZSBwcm9jZXNzLmN3ZCgpLCBQQVRILmpvaW4gcGF0aF9wcmVmaXgsIG1hdGNoZXJfMlxuICAgICAgICByZWxfbWF0Y2hlcl8zID0gUEFUSC5yZWxhdGl2ZSBwcm9jZXNzLmN3ZCgpLCBQQVRILmpvaW4gcGF0aF9wcmVmaXgsIG1hdGNoZXJfM1xuICAgICAgICBAZXEgKCDOqWJic2ZtX18zMSA9IC0+IGV4aXN0cyByZWxfcGF0aCAgICAgICAgICAgICAgICAgICAgKSwgbWF0Y2hlcl8xXG4gICAgICAgIEBlcSAoIM6pYmJzZm1fXzMyID0gLT4gZ2V0X25leHRfZmlsZW5hbWUgICAgICAgcmVsX3BhdGggICApLCByZWxfbWF0Y2hlcl8yXG4gICAgICAgIEBlcSAoIM6pYmJzZm1fXzMzID0gLT4gZ2V0X25leHRfZnJlZV9maWxlbmFtZSAgcmVsX3BhdGggICApLCByZWxfbWF0Y2hlcl8zXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGN1cnJlbnRfY3dkID0gUEFUSC5yZXNvbHZlIHByb2Nlc3MuY3dkKClcbiAgICAgIHByb2Nlc3MuY2hkaXIgcGF0aF9wcmVmaXhcbiAgICAgIHRyeVxuICAgICAgICBmb3IgWyBwYXRoLCBbIG1hdGNoZXJfMSwgbWF0Y2hlcl8yLCBtYXRjaGVyXzMsIF0sIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICAgIEBlcSAoIM6pYmJzZm1fXzM0ID0gLT4gZXhpc3RzIHBhdGggICAgICAgICAgICAgICAgICAgICksIG1hdGNoZXJfMVxuICAgICAgICAgIEBlcSAoIM6pYmJzZm1fXzM1ID0gLT4gZ2V0X25leHRfZmlsZW5hbWUgICAgICAgcGF0aCAgICksIG1hdGNoZXJfMlxuICAgICAgICAgIEBlcSAoIM6pYmJzZm1fXzM2ID0gLT4gZ2V0X25leHRfZnJlZV9maWxlbmFtZSAgcGF0aCAgICksIG1hdGNoZXJfM1xuICAgICAgZmluYWxseVxuICAgICAgICBwcm9jZXNzLmNoZGlyIGN1cnJlbnRfY3dkXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lX3N3YXBfc3VmZml4OiAtPlxuICAjICAgeyBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lLFxuICAjICAgICBzd2FwX3N1ZmZpeCwgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfbmV4dF9mcmVlX2ZpbGVuYW1lKClcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBkZWJ1ZyAnzqliYnNmbV9fMzcnLCBpbnRlcm1lZGlhdGVfY2FjaGVfcGF0aCA9IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgJy9wYXRoL3RvL3JlZmVyZW5jZS50eHQnXG4gICMgICBkZWJ1ZyAnzqliYnNmbV9fMzgnLCBmaW5hbGl6ZWRfY2FjaGVfcGF0aCAgICA9IHN3YXBfc3VmZml4ICcuZmluYWxpemVkJ1xuICAjICAgQGVxICAgICAoIM6pYmJzZm1fXzM5ID0gLT4gaW50ZXJtZWRpYXRlX2NhY2hlX3BhdGggICAgICAgICAgICksICcvcGF0aC90by9+LnJlZmVyZW5jZS50eHQuMDAwMS5maW5hbGl6ZWQnXG4gICMgICByYXRoZXIgdXNlICcvcGF0aC90by9+LnJlZmVyZW5jZS50eHQuMDAwMS5icmljYWJyYWMtY2FjaGUuZmluYWxpemVkJ1xuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBBTlNJOiAtPlxuICAgIHsgQU5TSSwgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2koKVxuICAgIEBlcSAgICAgKCDOqWJic2ZtX180MCA9IC0+IEFOU0kuZmdfZnJvbV9oZXggJyNhMGExYTInICAgICAgICAgICApLCAnXFx4MUJbMzg6Mjo6MTYwOjE2MToxNjJtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX180MSA9IC0+IEFOU0kuYmdfZnJvbV9oZXggJyNhMGExYTInICAgICAgICAgICApLCAnXFx4MUJbNDg6Mjo6MTYwOjE2MToxNjJtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX180MiA9IC0+IEFOU0kuZmdfZnJvbV9kZWMgWyAxNjAsIDE2MSwgMTYyIF0gICApLCAnXFx4MUJbMzg6Mjo6MTYwOjE2MToxNjJtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX180MyA9IC0+IEFOU0kuYmdfZnJvbV9kZWMgWyAxNjAsIDE2MSwgMTYyIF0gICApLCAnXFx4MUJbNDg6Mjo6MTYwOjE2MToxNjJtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX180NCA9IC0+IEFOU0kuZGVjX2Zyb21faGV4ICcjYTBhMWEyJyAgICAgICAgICApLCBbIDE2MCwgMTYxLCAxNjIgXVxuICAgIEB0aHJvd3MgKCDOqWJic2ZtX180NSA9IC0+IEFOU0kuZGVjX2Zyb21faGV4ICcjeHh4eHh4JyAgICAgICAgICApLCAvbm90IGEgcHJvcGVyIGhleGFkZWNpbWFsIFJHQiBjb2RlOiAnI3h4eHh4eCcvXG4gICAgQHRocm93cyAoIM6pYmJzZm1fXzQ2ID0gLT4gQU5TSS5kZWNfZnJvbV9oZXggJyNhYWFhYScgICAgICAgICAgICksIC9ub3QgYSBwcm9wZXIgaGV4YWRlY2ltYWwgUkdCIGNvZGU6ICcjYWFhYWEnL1xuICAgIEB0aHJvd3MgKCDOqWJic2ZtX180NyA9IC0+IEFOU0kuZGVjX2Zyb21faGV4ICcjYWFhYWFiYicgICAgICAgICApLCAvbm90IGEgcHJvcGVyIGhleGFkZWNpbWFsIFJHQiBjb2RlOiAnI2FhYWFhYmInL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHM6IC0+XG4gICAgeyBhbnNpX2NvbG9yc19hbmRfZWZmZWN0czogQywgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2lfY29sb3JzX2FuZF9lZmZlY3RzKClcbiAgICBAZXEgICAgICggzqliYnNmbV9fNDggPSAtPiBDLnJlZCAgICAgICAgICAgICAgKSwgJ1xceDFCWzM4OjI6OjI1NTowOjE2bSdcbiAgICBAZXEgICAgICggzqliYnNmbV9fNDkgPSAtPiBDLmJnX3JlZCAgICAgICAgICAgKSwgJ1xceDFCWzQ4OjI6OjI1NTowOjE2bSdcbiAgICBAZXEgICAgICggzqliYnNmbV9fNTAgPSAtPiBDLm92ZXJsaW5lMSAgICAgICAgKSwgJ1xceDFiWzUzbSdcbiAgICBAZXEgICAgICggzqliYnNmbV9fNTEgPSAtPiBDLm92ZXJsaW5lMCAgICAgICAgKSwgJ1xceDFiWzU1bSdcbiAgICBAZXEgICAgICggzqliYnNmbV9fNTIgPSAtPiBDLmRlZmF1bHQgICAgICAgICAgKSwgJ1xceDFiWzM5bSdcbiAgICBAZXEgICAgICggzqliYnNmbV9fNTMgPSAtPiBDLmJnX2RlZmF1bHQgICAgICAgKSwgJ1xceDFiWzQ5bSdcbiAgICBAZXEgICAgICggzqliYnNmbV9fNTQgPSAtPiBDLnJlc2V0ICAgICAgICAgICAgKSwgJ1xceDFiWzBtJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfYW5zaV9jaHVua2VyOiAtPlxuICAgIHsgYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHM6IEMsIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpX2NvbG9yc19hbmRfZWZmZWN0cygpXG4gICAgeyBBbnNpX2NodW5rZXIsICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2lfY2h1bmtlcigpXG4gICAgZG8gPT5cbiAgICAgIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAgIHRleHQgID0gXCJBQkMjeyBDLmJsYWNrICsgQy5iZ19yZWQgKyBDLmJvbGQgKyAnREVGJyArIEMuYm9sZDAgKyBDLmRlZmF1bHQgKyBDLmJnX2RlZmF1bHQgfVhZWlwiXG4gICAgICBhYyAgICA9IG5ldyBBbnNpX2NodW5rZXIoKVxuICAgICAgdXJnZSAnzqliYnNmbV9fNTUnLCAgICAgICAgICAgICAgICBhYy5jaHVua2lmeSB0ZXh0XG4gICAgICAjIGluZm8gJ86pYmJzZm1fXzU2JywgZCBmb3IgZCBmcm9tICggYWMuY2h1bmtpZnkgdGV4dCApLmNodW5rc1xuICAgICAgaW5mbyAnzqliYnNmbV9fNTcnLCBkIGZvciBkIGZyb20gYWNcbiAgICAgIGluZm8gJ86pYmJzZm1fXzU4JywgYWMud2lkdGhcbiAgICAgIGluZm8gJ86pYmJzZm1fXzU5JywgYWMubGVuZ3RoXG4gICAgICBpbmZvICfOqWJic2ZtX182MCcsIGFjLmhhc19hbnNpXG4gICAgICBpbmZvICfOqWJic2ZtX182MScsIGFjLnRleHRcbiAgICBkbyA9PlxuICAgICAgZWNobyAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICAgICAgdGV4dCAgPSAnQUJDREVGWFlaJ1xuICAgICAgYWMgICAgPSBuZXcgQW5zaV9jaHVua2VyKClcbiAgICAgIHVyZ2UgJ86pYmJzZm1fXzYyJywgICAgICAgICAgICAgICAgYWMuY2h1bmtpZnkgdGV4dFxuICAgICAgIyBpbmZvICfOqWJic2ZtX182MycsIGQgZm9yIGQgZnJvbSAoIGFjLmNodW5raWZ5IHRleHQgKS5jaHVua3NcbiAgICAgIGluZm8gJ86pYmJzZm1fXzY0JywgZCBmb3IgZCBmcm9tIGFjXG4gICAgICBpbmZvICfOqWJic2ZtX182NScsIGFjLndpZHRoXG4gICAgICBpbmZvICfOqWJic2ZtX182NicsIGFjLmxlbmd0aFxuICAgICAgaW5mbyAnzqliYnNmbV9fNjcnLCBhYy5oYXNfYW5zaVxuICAgICAgaW5mbyAnzqliYnNmbV9fNjgnLCBhYy50ZXh0XG4gICAgZG8gPT5cbiAgICAgIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAgIHRleHQgID0gXCIjeyBDLmJsYWNrICsgQy5iZ19yZWQgKyBDLmJvbGQgKyBDLmJvbGQwICsgQy5kZWZhdWx0ICsgQy5iZ19kZWZhdWx0IH1cIlxuICAgICAgYWMgICAgPSBuZXcgQW5zaV9jaHVua2VyKClcbiAgICAgIHVyZ2UgJ86pYmJzZm1fXzY5JywgICAgICAgICAgICAgICAgYWMuY2h1bmtpZnkgdGV4dFxuICAgICAgIyBpbmZvICfOqWJic2ZtX183MCcsIGQgZm9yIGQgZnJvbSAoIGFjLmNodW5raWZ5IHRleHQgKS5jaHVua3NcbiAgICAgIGluZm8gJ86pYmJzZm1fXzcxJywgZCBmb3IgZCBmcm9tIGFjXG4gICAgICBpbmZvICfOqWJic2ZtX183MicsIGFjLndpZHRoXG4gICAgICBpbmZvICfOqWJic2ZtX183MycsIGFjLmxlbmd0aFxuICAgICAgaW5mbyAnzqliYnNmbV9fNzQnLCBhYy5oYXNfYW5zaVxuICAgICAgaW5mbyAnzqliYnNmbV9fNzUnLCBhYy50ZXh0XG4gICAgZG8gPT5cbiAgICAgIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAgIHRleHQgID0gJydcbiAgICAgIGFjICAgID0gbmV3IEFuc2lfY2h1bmtlcigpXG4gICAgICB1cmdlICfOqWJic2ZtX183NicsICAgICAgICAgICAgICAgIGFjLmNodW5raWZ5IHRleHRcbiAgICAgICMgaW5mbyAnzqliYnNmbV9fNzcnLCBkIGZvciBkIGZyb20gKCBhYy5jaHVua2lmeSB0ZXh0ICkuY2h1bmtzXG4gICAgICBpbmZvICfOqWJic2ZtX183OCcsIGQgZm9yIGQgZnJvbSBhY1xuICAgICAgaW5mbyAnzqliYnNmbV9fNzknLCBhYy53aWR0aFxuICAgICAgaW5mbyAnzqliYnNmbV9fODAnLCBhYy5sZW5ndGhcbiAgICAgIGluZm8gJ86pYmJzZm1fXzgxJywgYWMuaGFzX2Fuc2lcbiAgICAgIGluZm8gJ86pYmJzZm1fXzgyJywgYWMudGV4dFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfc3RyaXBfYW5zaTogLT5cbiAgICB7IHN0cmlwX2Fuc2ksIGludGVybmFsczpcbiAgICAgIHsgYW5zaV9yZSxcbiAgICAgICAgb3duX3NpbmdsZV9hbnNpX3JlLCAgICAgfSB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfc3RyaXBfYW5zaSgpXG4gICAgeyBhbnNpX2NvbG9yc19hbmRfZWZmZWN0czogQywgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2lfY29sb3JzX2FuZF9lZmZlY3RzKClcbiAgICBkbyA9PlxuICAgICAgdGV4dCAgPSBcIkFCQyN7IEMuYmxhY2sgKyBDLmJnX3JlZCArIEMuYm9sZCArICdERUYnICsgQy5ib2xkMCArIEMuZGVmYXVsdCArIEMuYmdfZGVmYXVsdCB9WFlaXCJcbiAgICAgIHVyZ2UgJ86pYmJzZm1fXzgzJywgcnByIHN0cmlwX2Fuc2kgdGV4dFxuICAgICAgaW5mbyAnzqliYnNmbV9fODQnLCBycHIgdGV4dC5zcGxpdCBhbnNpX3JlXG4gICAgICBpbmZvICfOqWJic2ZtX184NScsIHJwciB0ZXh0LnNwbGl0IG93bl9zaW5nbGVfYW5zaV9yZVxuICAgICAgQGVxICggzqliYnNmbV9fODYgPSAtPiBzdHJpcF9hbnNpIHRleHQgKSwgJ0FCQ0RFRlhZWidcbiAgICBkbyA9PlxuICAgICAgdGV4dCAgPSAnQUJDREVGWFlaJ1xuICAgICAgdXJnZSAnzqliYnNmbV9fODcnLCBycHIgc3RyaXBfYW5zaSB0ZXh0XG4gICAgICBAZXEgKCDOqWJic2ZtX184OCA9IC0+IHN0cmlwX2Fuc2kgdGV4dCApLCAnQUJDREVGWFlaJ1xuICAgIGRvID0+XG4gICAgICB0ZXh0ICA9IFwiI3sgQy5ibGFjayArIEMuYmdfcmVkICsgQy5ib2xkICsgQy5ib2xkMCArIEMuZGVmYXVsdCArIEMuYmdfZGVmYXVsdCB9XCJcbiAgICAgIHVyZ2UgJ86pYmJzZm1fXzg5JywgcnByIHN0cmlwX2Fuc2kgdGV4dFxuICAgICAgQGVxICggzqliYnNmbV9fOTAgPSAtPiBzdHJpcF9hbnNpIHRleHQgKSwgJydcbiAgICBkbyA9PlxuICAgICAgdGV4dCAgPSAnJ1xuICAgICAgdXJnZSAnzqliYnNmbV9fOTEnLCBycHIgc3RyaXBfYW5zaSB0ZXh0XG4gICAgICBAZXEgKCDOqWJic2ZtX185MiA9IC0+IHN0cmlwX2Fuc2kgdGV4dCApLCAnJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfZ2V0X2NhbGxzaXRlOiAtPlxuICAgIHsgZ2V0X2NhbGxzaXRlLFxuICAgICAgZ2V0X2FwcF9kZXRhaWxzLFxuICAgICAgcmVxdWlyZV9mcm9tX2FwcF9mb2xkZXIsXG4gICAgICBnZXRfYnJpY2FicmFjX2NmZywgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfY2FsbHNpdGUoKVxuICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgIFVSTCAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTp1cmwnXG4gICAgYXBwX3BhdGggICAgICAgICAgICAgICAgICAgICAgPSBQQVRILnJlc29sdmUgUEFUSC5qb2luIF9fZGlybmFtZSwgJy4uLy4uLy4uLydcbiAgICBwYWNrYWdlX3BhdGggICAgICAgICAgICAgICAgICA9IFBBVEguam9pbiBhcHBfcGF0aCwgJ3BhY2thZ2UuanNvbidcbiAgICB2ZXJzaW9uICAgICAgICAgICAgICAgICAgICAgICA9ICggcmVxdWlyZSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJyApLnZlcnNpb25cbiAgICBuYW1lICAgICAgICAgICAgICAgICAgICAgICAgICA9ICggcmVxdWlyZSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJyApLm5hbWVcbiAgICBmYWxsYmFjayAgICAgICAgICAgICAgICAgICAgICA9IFN5bWJvbCAnZmFsbGJhY2snXG4gICAgYnJpY2FicmFjX2NmZ18xICAgICAgICAgICAgICAgPSByZXF1aXJlX2Zyb21fYXBwX2ZvbGRlciB7IHBhdGg6ICdicmljYWJyYWMuY2ZnLmpzJywgfVxuICAgIGJyaWNhYnJhY19jZmdfMiAgICAgICAgICAgICAgID0gZ2V0X2JyaWNhYnJhY19jZmcoKVxuICAgIGFwcCAgICAgICAgICAgICAgICAgICAgICAgICAgID0gZ2V0X2FwcF9kZXRhaWxzKClcbiAgICBkYXRhc3RvcmVfcGF0aCAgICAgICAgICAgICAgICA9IFBBVEguam9pbiBhcHAucGF0aCwgJ2hlbmdpc3Qtbmcuc3FsaXRlJ1xuICAgIGNhbGxzaXRlICAgICAgICAgICAgICAgICAgICAgID0gZ2V0X2NhbGxzaXRlIHsgc291cmNlbWFwcGVkOiBmYWxzZSwgfVxuICAgIGRlYnVnICfOqWJic2ZtX185MycsIGJyaWNhYnJhY19jZmdfMlxuICAgICMgQGVxICggzqliYnNmbV9fOTQgPSAtPiBVUkwuZmlsZVVSTFRvUGF0aCBjYWxsc2l0ZS5zY3JpcHROYW1lICAgICAgICAgICAgICAgICApLCBfX2ZpbGVuYW1lXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzk1ID0gLT4gY2FsbHNpdGUuc2NyaXB0TmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIF9fZmlsZW5hbWVcbiAgICBAZXEgICAgICggzqliYnNmbV9fOTYgPSAtPiBhcHAucGF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgYXBwX3BhdGhcbiAgICBAZXEgICAgICggzqliYnNmbV9fOTcgPSAtPiBhcHAucGFja2FnZV9wYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgcGFja2FnZV9wYXRoXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzk4ID0gLT4gYXBwLnZlcnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHZlcnNpb25cbiAgICBAZXEgICAgICggzqliYnNmbV9fOTkgPSAtPiBhcHAubmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbmFtZVxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzEwMCA9IC0+IGJyaWNhYnJhY19jZmdfMS5kYXRhc3RvcmUubmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnaGVuZ2lzdC1uZydcbiAgICBAZXEgICAgICggzqliYnNmbV8xMDEgPSAtPiBnZXRfYnJpY2FicmFjX2NmZyB7IHBhdGg6ICdub3N1Y2hwYXRoJywgZmFsbGJhY2ssIH0gICApLCBmYWxsYmFja1xuICAgIEB0aHJvd3MgKCDOqWJic2ZtXzEwMiA9IC0+IGdldF9icmljYWJyYWNfY2ZnIHsgcGF0aDogJ25vc3VjaHBhdGgnLCB9ICAgICAgICAgICAgICksIC9DYW5ub3QgZmluZCBtb2R1bGUvaVxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzEwMyA9IC0+IGJyaWNhYnJhY19jZmdfMi5kYXRhc3RvcmUubmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnaGVuZ2lzdC1uZydcbiAgICBAZXEgICAgICggzqliYnNmbV8xMDQgPSAtPiBicmljYWJyYWNfY2ZnXzIuZGF0YXN0b3JlLnBhdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZGF0YXN0b3JlX3BhdGhcbiAgICBAZXEgICAgICggzqliYnNmbV8xMDUgPSAtPiBicmljYWJyYWNfY2ZnXzIuYXBwLm5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbmFtZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfZ2V0X2NhbGxzaXRlOiAtPlxuICAgIHsgZ2V0X2NhbGxzaXRlLFxuICAgICAgZ2V0X2NhbGxzaXRlX3BhdGgsICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X2NhbGxzaXRlKClcbiAgICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICBVUkwgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6dXJsJ1xuICAgIGFwcF9wYXRoICAgICAgICAgICAgICAgICAgICAgID0gUEFUSC5yZXNvbHZlIFBBVEguam9pbiBfX2Rpcm5hbWUsICcuLi8uLi8uLi8nXG4gICAgcGFja2FnZV9wYXRoICAgICAgICAgICAgICAgICAgPSBQQVRILmpvaW4gYXBwX3BhdGgsICdwYWNrYWdlLmpzb24nXG4gICAgdmVyc2lvbiAgICAgICAgICAgICAgICAgICAgICAgPSAoIHJlcXVpcmUgJy4uLy4uLy4uL3BhY2thZ2UuanNvbicgKS52ZXJzaW9uXG4gICAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoIHJlcXVpcmUgJy4uLy4uLy4uL3BhY2thZ2UuanNvbicgKS5uYW1lXG4gICAgZmFsbGJhY2sgICAgICAgICAgICAgICAgICAgICAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgIGNhbGxzaXRlICAgICAgICAgICAgICAgICAgICAgID0gZ2V0X2NhbGxzaXRlIHsgc291cmNlbWFwcGVkOiBmYWxzZSwgfVxuICAgIGZpbGVuYW1lICAgICAgICAgICAgICAgICAgICAgID0gX19maWxlbmFtZS5yZXBsYWNlIC9eKC4rKVxcL2xpYlxcLyhbXlxcL10rPylcXC5qcy8sICckMS9zcmMvJDIuY29mZmVlJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtXzEwNiA9IC0+IGNhbGxzaXRlLnNjcmlwdE5hbWUgKSwgX19maWxlbmFtZVxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzEwNyA9IC0+IGdldF9jYWxsc2l0ZV9wYXRoKCkgKSwgZmlsZW5hbWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2dldF9hcHBfZGV0YWlsczogLT5cbiAgICB7IGdldF9hcHBfZGV0YWlscyxcbiAgICAgIHJlcXVpcmVfZnJvbV9hcHBfZm9sZGVyLFxuICAgICAgZ2V0X2JyaWNhYnJhY19jZmcsIH0gICAgICAgID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X2FwcF9kZXRhaWxzKClcbiAgICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICBVUkwgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6dXJsJ1xuICAgIGFwcF9wYXRoICAgICAgICAgICAgICAgICAgICAgID0gUEFUSC5yZXNvbHZlIFBBVEguam9pbiBfX2Rpcm5hbWUsICcuLi8uLi8uLi8nXG4gICAgcGFja2FnZV9wYXRoICAgICAgICAgICAgICAgICAgPSBQQVRILmpvaW4gYXBwX3BhdGgsICdwYWNrYWdlLmpzb24nXG4gICAgdmVyc2lvbiAgICAgICAgICAgICAgICAgICAgICAgPSAoIHJlcXVpcmUgJy4uLy4uLy4uL3BhY2thZ2UuanNvbicgKS52ZXJzaW9uXG4gICAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoIHJlcXVpcmUgJy4uLy4uLy4uL3BhY2thZ2UuanNvbicgKS5uYW1lXG4gICAgZmFsbGJhY2sgICAgICAgICAgICAgICAgICAgICAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgIGJyaWNhYnJhY19jZmdfMSAgICAgICAgICAgICAgID0gcmVxdWlyZV9mcm9tX2FwcF9mb2xkZXIgeyBwYXRoOiAnYnJpY2FicmFjLmNmZy5qcycsIH1cbiAgICBicmljYWJyYWNfY2ZnXzIgICAgICAgICAgICAgICA9IGdldF9icmljYWJyYWNfY2ZnKClcbiAgICBhcHAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGdldF9hcHBfZGV0YWlscygpXG4gICAgZGF0YXN0b3JlX3BhdGggICAgICAgICAgICAgICAgPSBQQVRILmpvaW4gYXBwLnBhdGgsICdoZW5naXN0LW5nLnNxbGl0ZSdcbiAgICAjIGRlYnVnICfOqWJic2ZtXzEwOCcsIGJyaWNhYnJhY19jZmdfMlxuICAgICMgQGVxICggzqliYnNmbV8xMDkgPSAtPiBVUkwuZmlsZVVSTFRvUGF0aCBjYWxsc2l0ZS5zY3JpcHROYW1lICAgICAgICAgICAgICAgICApLCBfX2ZpbGVuYW1lXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTEwID0gLT4gYXBwLnBhdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGFwcF9wYXRoXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTExID0gLT4gYXBwLnBhY2thZ2VfcGF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHBhY2thZ2VfcGF0aFxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzExMiA9IC0+IGFwcC52ZXJzaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB2ZXJzaW9uXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTEzID0gLT4gYXBwLm5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIG5hbWVcbiAgICBAZXEgICAgICggzqliYnNmbV8xMTQgPSAtPiBicmljYWJyYWNfY2ZnXzEuZGF0YXN0b3JlLm5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2hlbmdpc3QtbmcnXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTE1ID0gLT4gZ2V0X2JyaWNhYnJhY19jZmcgeyBwYXRoOiAnbm9zdWNocGF0aCcsIGZhbGxiYWNrLCB9ICAgICAgICksIGZhbGxiYWNrXG4gICAgQHRocm93cyAoIM6pYmJzZm1fMTE2ID0gLT4gZ2V0X2JyaWNhYnJhY19jZmcgeyBwYXRoOiAnbm9zdWNocGF0aCcsICAgICAgICAgICB9ICAgICAgICksIC9DYW5ub3QgZmluZCBtb2R1bGUvaVxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzExNyA9IC0+IGJyaWNhYnJhY19jZmdfMi5kYXRhc3RvcmUubmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnaGVuZ2lzdC1uZydcbiAgICBAZXEgICAgICggzqliYnNmbV8xMTggPSAtPiBicmljYWJyYWNfY2ZnXzIuZGF0YXN0b3JlLnBhdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZGF0YXN0b3JlX3BhdGhcbiAgICBAZXEgICAgICggzqliYnNmbV8xMTkgPSAtPiBicmljYWJyYWNfY2ZnXzIuYXBwLm5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbmFtZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfZGJyaWM6IC0+XG4gICAgeyBEYnJpYyxcbiAgICAgIFNRTCxcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICBkZWJ1ZyAnzqliYnNmbV8xMjAnLCBuZXcgRGJyaWMgJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIERicmljX3N0b3JlIGV4dGVuZHMgRGJyaWNcbiAgICAgICAgQHN0YXRlbWVudHM6XG4gICAgICAgICAgY3JlYXRlX3RhYmxlczogU1FMXCJcIlwiXG4gICAgICAgICAgICAtLSBkcm9wIHRhYmxlIGlmIGV4aXN0cyBrdnBzO1xuICAgICAgICAgICAgY3JlYXRlIHRhYmxlIGlmIG5vdCBleGlzdHMga3ZwcyAoXG4gICAgICAgICAgICAgIGsgICAgICAgICAgICAgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXksXG4gICAgICAgICAgICAgIHYgICAgICAgICAgICAganNvbiApO1wiXCJcIlxuICAgICAgICAgIGdldF9zY2hlbWE6IFNRTFwiXCJcIlxuICAgICAgICAgICAgc2VsZWN0ICogZnJvbSBzcWxpdGVfc2NoZW1hIG9yZGVyIGJ5IG5hbWUsIHR5cGU7XCJcIlwiXG4gICAgICAgICAgZ2V0X3RhYmxlczogU1FMXCJcIlwiXG4gICAgICAgICAgICBzZWxlY3QgKiBmcm9tIHNxbGl0ZV9zY2hlbWEgd2hlcmUgdHlwZSBpcyAndGFibGUnIG9yZGVyIGJ5IG5hbWUsIHR5cGU7XCJcIlwiXG4gICAgICAgICAgaW5zZXJ0X2t2cDogU1FMXCJcIlwiXG4gICAgICAgICAgICBpbnNlcnQgaW50byBrdnBzICggaywgdiApIHZhbHVlcyAoICRrLCAkdiApXG4gICAgICAgICAgICAgIG9uIGNvbmZsaWN0ICggayApIGRvIHVwZGF0ZSBzZXQgdiA9IGV4Y2x1ZGVkLnY7XCJcIlwiXG4gICAgICAgICAgZ2V0X2t2cHM6IFNRTFwiXCJcIlxuICAgICAgICAgICAgc2VsZWN0ICogZnJvbSBrdnBzIG9yZGVyIGJ5IGs7XCJcIlwiXG4gICAgICBkZWJ1ZyAnzqliYnNmbV8xMjEnLCBuZXcgRGJyaWNfc3RvcmUgJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBkZWJ1ZyAnzqliYnNmbV8xMjInLCBEYnJpY19zdG9yZS5vcGVuICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgZGJzID0gRGJyaWNfc3RvcmUub3BlbiAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIGRicy5zdGF0ZW1lbnRzLmNyZWF0ZV90YWJsZXMucnVuKClcbiAgICAgIGZvciByb3cgZnJvbSBkYnMuc3RhdGVtZW50cy5nZXRfc2NoZW1hLml0ZXJhdGUoKVxuICAgICAgICBoZWxwICfOqWJic2ZtXzEyMycsIHJvd1xuICAgICAgZGJzLnN0YXRlbWVudHMuaW5zZXJ0X2t2cC5ydW4geyBrOiAnb25lJywgICB2OiAoIEpTT04uc3RyaW5naWZ5IDEgICAgICAgKSwgfVxuICAgICAgZGJzLnN0YXRlbWVudHMuaW5zZXJ0X2t2cC5ydW4geyBrOiAndHdvJywgICB2OiAoIEpTT04uc3RyaW5naWZ5IDIgICAgICAgKSwgfVxuICAgICAgZGJzLnN0YXRlbWVudHMuaW5zZXJ0X2t2cC5ydW4geyBrOiAndGhyZWUnLCB2OiAoIEpTT04uc3RyaW5naWZ5IDMgICAgICAgKSwgfVxuICAgICAgZGJzLnN0YXRlbWVudHMuaW5zZXJ0X2t2cC5ydW4geyBrOiAndGhyZWUnLCB2OiAoIEpTT04uc3RyaW5naWZ5ICdpaWknICAgKSwgfVxuICAgICAgZGJzLnN0YXRlbWVudHMuaW5zZXJ0X2t2cC5ydW4geyBrOiAndHJ1ZScsICB2OiAoIEpTT04uc3RyaW5naWZ5IHRydWUgICAgKSwgfVxuICAgICAgZGJzLnN0YXRlbWVudHMuaW5zZXJ0X2t2cC5ydW4geyBrOiAnZmFsc2UnLCB2OiAoIEpTT04uc3RyaW5naWZ5IGZhbHNlICAgKSwgfVxuICAgICAgZm9yIHJvdyBmcm9tIGRicy5zdGF0ZW1lbnRzLmdldF9rdnBzLml0ZXJhdGUoKVxuICAgICAgICByb3cgPSB7IHJvdy4uLiwgeyB2OiAoIEpTT04ucGFyc2Ugcm93LnYgKSwgX3Y6IHJvdy52LCB9Li4uLCB9XG4gICAgICAgIGhlbHAgJ86pYmJzZm1fMTI0Jywgcm93XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBkZW1vX2luZmluaXRlX3Byb3h5KClcbiAgIyBkZW1vX2NvbG9yZnVsX3Byb3h5KClcbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfZ2V0X2FwcF9kZXRhaWxzOiB0ZXN0cy5yZXF1aXJlX2dldF9hcHBfZGV0YWlscywgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHJlcXVpcmVfZGJyaWM6IHRlc3RzLnJlcXVpcmVfZGJyaWMsIH1cblxuIl19
//# sourceURL=../src/test-bricabrac-single-file-modules.coffee