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
          v: 1
        });
        dbs.statements.insert_kvp.run({
          k: 'two',
          v: 2
        });
        dbs.statements.insert_kvp.run({
          k: 'three',
          v: 3
        });
        dbs.statements.insert_kvp.run({
          k: 'three',
          v: 'iii'
        });
        results = [];
        for (row of dbs.statements.get_kvps.iterate()) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCRztFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBRUg7QUFGRyxNQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUtILEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsK0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUEzQkc7OztFQTZCSCxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FB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QTFDQzs7O0VBa1lILElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQSxXQUFBOzs7TUFFRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLENBQUUsS0FBRixDQUE5QjtNQUNBLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSx1QkFBQSxFQUF5QixLQUFLLENBQUM7TUFBakMsQ0FBOUI7YUFDQSxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCO1FBQUUsYUFBQSxFQUFlLEtBQUssQ0FBQztNQUF2QixDQUE5QjtJQVBzQyxDQUFBLElBQXhDOztBQWxZRyIsInNvdXJjZXNDb250ZW50IjpbIlxuIyMjXG5cblxuIyMgQXBwbGljYXRpb25zXG5cbiogKipSZWdFeCBCdWlsZGVyKiogKGV4YW1wbGUgZnJvbSBbUmVqaWdzIGJsb2cgcG9zdF0oaHR0cHM6Ly9tZWRpdW0uY29tL0BvbWFyemF3YWhyeS9yZWppZ3MtbWFraW5nLXJlZ3VsYXItZXhwcmVzc2lvbnMtaHVtYW4tcmVhZGFibGUtMWZhZDM3Y2IzZWFlKSlcblxuYGBgamF2YVxudmFyIGVtYWlsUmVnZXggPVxuICAgIFJlamlncy5DcmVhdGUoKVxuICAgICAgICAgIC5BdFN0YXJ0KClcbiAgICAgICAgICAuT25lT3JNb3JlKHIgPT4gci5BbnlMZXR0ZXJPckRpZ2l0KCkuT3IoKS5BbnlPZihcIi5fJSstXCIpKVxuICAgICAgICAgIC5UZXh0KFwiQFwiKVxuICAgICAgICAgIC5PbmVPck1vcmUociA9PiByLkFueUxldHRlck9yRGlnaXQoKS5PcigpLkFueU9mKFwiLi1cIikpXG4gICAgICAgICAgLlRleHQoXCIuXCIpXG4gICAgICAgICAgLkFueUxldHRlck9yRGlnaXQoKS5BdExlYXN0KDIpXG4gICAgICAgICAgLkF0RW5kKClcbiAgICAgICAgICAuQnVpbGQoKTtcbmBgYFxuXG4qICoqSFRNTC9YTUwgQnVpbGVyKipcbiogKipTUUwgQnVpbGRlcioqXG4qICoqQ0xJIENvbG9yaW5nKipcbiogc3ludGF4IGZvciBhICoqVHlwZSBDaGVja2VyKipcblxuIyMjXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzX3RhZ2Z1bl9jYWxsOiAtPlxuICAgIHsgaXNfdGFnZnVuX2NhbGwsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3RhZ2Z1bl90b29scygpXG4gICAgZm4gPSAoIFAuLi4gKSAtPiBpc190YWdmdW5fY2FsbCBQLi4uXG4gICAgQGVxICggzqliYnNmbV9fXzEgPSAtPiBmbigpICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqliYnNmbV9fXzIgPSAtPiBmbiBbIDEsIDIsIDMsIF0gICksIGZhbHNlXG4gICAgQGVxICggzqliYnNmbV9fXzMgPSAtPiBmblwiWyAxLCAyLCAzLCBdXCIgKSwgdHJ1ZVxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBlc2NhcGVfaHRtbF90ZXh0OiAtPlxuICAgIHsgZXNjYXBlX2h0bWxfdGV4dCwgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2VzY2FwZV9odG1sX3RleHQoKVxuICAgIEBlcSAoIM6pYmJzZm1fX180ID0gLT4gZXNjYXBlX2h0bWxfdGV4dCAnJyAgICAgICAgICAgICAgICAgICAgKSwgJydcbiAgICBAZXEgKCDOqWJic2ZtX19fNSA9IC0+IGVzY2FwZV9odG1sX3RleHQgJ2FiYycgICAgICAgICAgICAgICAgICksICdhYmMnXG4gICAgQGVxICggzqliYnNmbV9fXzYgPSAtPiBlc2NhcGVfaHRtbF90ZXh0ICdhYmM8dGFnPmQmZSZmPC90YWc+JyApLCAnYWJjJmx0O3RhZyZndDtkJmFtcDtlJmFtcDtmJmx0Oy90YWcmZ3Q7J1xuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB3YWxrX3RhZ2Z1bl9jYWxsX3BhcnRzOiAtPlxuICAgICMgeyBIdG1sLCAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlX2h0bWxfY2xhc3MoKVxuICAgICMgeyBlc2NhcGVfaHRtbF90ZXh0LCAgICAgICAgIH0gPSByZXF1aXJlX2VzY2FwZV9odG1sX3RleHQoKVxuICAgICMgeyBzdGFja2FibGVfdGFnZnVuLCAgICAgICAgIH0gPSByZXF1aXJlX3N0YWNrYWJsZV90YWdmdW4oKVxuICAgIHsgd2Fsa19wYXJ0cyxcbiAgICAgIHdhbGtfbm9uZW1wdHlfcGFydHMsXG4gICAgICB3YWxrX3Jhd19wYXJ0cyxcbiAgICAgIHdhbGtfcmF3X25vbmVtcHR5X3BhcnRzLCAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3RhZ2Z1bl90b29scygpXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBAZXEgKCDOqWJic2ZtX19fNyA9IC0+IFsgKCB3YWxrX3BhcnRzXCJcIiAgICAgICAgICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fXzggPSAtPiBbICggd2Fsa19wYXJ0cyBcIlwiICAgICAgICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fX185ID0gLT4gWyAoIHdhbGtfbm9uZW1wdHlfcGFydHNcIlwiICAgICAgICAgKS4uLiwgXSApLCBbXVxuICAgIEBlcSAoIM6pYmJzZm1fXzEwID0gLT4gWyAoIHdhbGtfbm9uZW1wdHlfcGFydHMgJycgICAgICAgICkuLi4sIF0gKSwgW11cbiAgICBAZXEgKCDOqWJic2ZtX18xMSA9IC0+IFsgKCB3YWxrX3BhcnRzXCJhXCIgICAgICAgICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnYScsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzEyID0gLT4gWyAoIHdhbGtfcGFydHNcIlxcbmFcIiAgICAgICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnXFxuYScsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzEzID0gLT4gWyAoIHdhbGtfcmF3X3BhcnRzXCJcXG5hXCIgICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnXFxcXG5hJywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMTQgPSAtPiBbICggd2Fsa19wYXJ0c1wiI3sxfVwiICAgICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgeyB2YWx1ZTogMSwgaXNhOiAndmFsdWUnLCB9LCB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMTUgPSAtPiBbICggd2Fsa19ub25lbXB0eV9wYXJ0c1wiI3sxfVwiICAgICApLi4uLCBdICksIFsgeyB2YWx1ZTogMSwgaXNhOiAndmFsdWUnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMTYgPSAtPiBbICggd2Fsa19wYXJ0c1wiYSN7MX1cIiAgICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJ2EnLCBpc2E6ICdjaHVuaycsIH0sIHsgdmFsdWU6IDEsIGlzYTogJ3ZhbHVlJywgfSwgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzE3ID0gLT4gWyAoIHdhbGtfcGFydHNcIiN7MX0jezJ9XCIgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIHsgdmFsdWU6IDEsIGlzYTogJ3ZhbHVlJywgfSwgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgeyB2YWx1ZTogMiwgaXNhOiAndmFsdWUnLCB9LCB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9IF1cbiAgICBAZXEgKCDOqWJic2ZtX18xOCA9IC0+IFsgKCB3YWxrX25vbmVtcHR5X3BhcnRzXCIjezF9I3syfVwiICkuLi4sIF0gKSwgWyB7IHZhbHVlOiAxLCBpc2E6ICd2YWx1ZScsIH0sIHsgdmFsdWU6IDIsIGlzYTogJ3ZhbHVlJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzE5ID0gLT4gWyAoIHdhbGtfcGFydHNcImEjezF9elwiICAgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICdhJywgaXNhOiAnY2h1bmsnLCB9LCB7IHZhbHVlOiAxLCBpc2E6ICd2YWx1ZScsIH0sIHsgY2h1bms6ICd6JywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMjAgPSAtPiBbICggd2Fsa19wYXJ0c1wiYSN7MX16I3syfVwiICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJ2EnLCBpc2E6ICdjaHVuaycsIH0sIHsgdmFsdWU6IDEsIGlzYTogJ3ZhbHVlJywgfSwgeyBjaHVuazogJ3onLCBpc2E6ICdjaHVuaycsIH0sIHsgdmFsdWU6IDIsIGlzYTogJ3ZhbHVlJywgfSwgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzIxID0gLT4gWyAoIHdhbGtfcGFydHMgXCJhI3sxfXojezJ9XCIgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICdhMXoyJywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMjIgPSAtPiBbICggd2Fsa19wYXJ0cyAxMiAgICAgICAgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIHsgdmFsdWU6IDEyLCBpc2E6ICd2YWx1ZScsIH0sIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18yMyA9IC0+IFsgKCB3YWxrX25vbmVtcHR5X3BhcnRzIDEyICAgICAgICApLi4uLCBdICksIFsgeyB2YWx1ZTogMTIsIGlzYTogJ3ZhbHVlJywgfSwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X25leHRfZnJlZV9maWxlbmFtZTogLT5cbiAgICB7IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUsXG4gICAgICBnZXRfbmV4dF9maWxlbmFtZSxcbiAgICAgIGV4aXN0cyxcbiAgICAgIGNhY2hlX2ZpbGVuYW1lX3JlLCAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9uZXh0X2ZyZWVfZmlsZW5hbWUoKVxuICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEB0aHJvd3MgKCDOqWJic2ZtX18yNCA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgbnVsbCAgICAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dC9cbiAgICBAdGhyb3dzICggzqliYnNmbV9fMjUgPSAtPiBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lIHVuZGVmaW5lZCAgICksIC9leHBlY3RlZCBhIHRleHQvXG4gICAgQHRocm93cyAoIM6pYmJzZm1fXzI2ID0gLT4gZ2V0X25leHRfZnJlZV9maWxlbmFtZSB0cnVlICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0L1xuICAgIEB0aHJvd3MgKCDOqWJic2ZtX18yNyA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgJycgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgbm9uZW1wdHkgdGV4dC9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbICdhJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBmYWxzZSwgJ34uYS4wMDAxLmJyaWNhYnJhYy1jYWNoZScsICAgICAgICAgJ34uYS4wMDAxLmJyaWNhYnJhYy1jYWNoZScsIF0sIF1cbiAgICAgIFsgJ1JFQURNRS5tZCcsICAgICAgICAgICAgICAgICAgICAgICAgICBbIHRydWUsICAnfi5SRUFETUUubWQuMDAwMS5icmljYWJyYWMtY2FjaGUnLCAnfi5SRUFETUUubWQuMDAwNC5icmljYWJyYWMtY2FjaGUnLCBdLCBdXG4gICAgICBbICd+LlJFQURNRS5tZC4wMDAxLmJyaWNhYnJhYy1jYWNoZScsICAgWyB0cnVlLCAgJ34uUkVBRE1FLm1kLjAwMDIuYnJpY2FicmFjLWNhY2hlJywgJ34uUkVBRE1FLm1kLjAwMDQuYnJpY2FicmFjLWNhY2hlJywgXSwgXVxuICAgICAgWyAnfi5SRUFETUUubWQuMDAwMi5icmljYWJyYWMtY2FjaGUnLCAgIFsgdHJ1ZSwgICd+LlJFQURNRS5tZC4wMDAzLmJyaWNhYnJhYy1jYWNoZScsICd+LlJFQURNRS5tZC4wMDA0LmJyaWNhYnJhYy1jYWNoZScsIF0sIF1cbiAgICAgIFsgJ34uUkVBRE1FLm1kLjAwMDMuYnJpY2FicmFjLWNhY2hlJywgICBbIHRydWUsICAnfi5SRUFETUUubWQuMDAwNC5icmljYWJyYWMtY2FjaGUnLCAnfi5SRUFETUUubWQuMDAwNC5icmljYWJyYWMtY2FjaGUnLCBdLCBdXG4gICAgICBbICd+LlJFQURNRS5tZC4wMDA0LmJyaWNhYnJhYy1jYWNoZScsICAgWyBmYWxzZSwgJ34uUkVBRE1FLm1kLjAwMDUuYnJpY2FicmFjLWNhY2hlJywgJ34uUkVBRE1FLm1kLjAwMDUuYnJpY2FicmFjLWNhY2hlJywgXSwgXVxuICAgICAgXVxuICAgIHBhdGhfcHJlZml4ID0gUEFUSC5yZXNvbHZlIFBBVEguam9pbiBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hc3NldHMvYnJpY2FicmFjL2ZpbmQtZnJlZS1maWxlbmFtZSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3IgWyBwYXRoLCBbIG1hdGNoZXJfMSwgbWF0Y2hlcl8yLCBtYXRjaGVyXzMsIF0sIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICBhYnNfcGF0aCAgICAgID0gUEFUSC5qb2luIHBhdGhfcHJlZml4LCBwYXRoXG4gICAgICAgIGFic19tYXRjaGVyXzIgPSBQQVRILmpvaW4gcGF0aF9wcmVmaXgsIG1hdGNoZXJfMlxuICAgICAgICBhYnNfbWF0Y2hlcl8zID0gUEFUSC5qb2luIHBhdGhfcHJlZml4LCBtYXRjaGVyXzNcbiAgICAgICAgQGVxICggzqliYnNmbV9fMjggPSAtPiBleGlzdHMgYWJzX3BhdGggICAgICAgICAgICAgICAgICAgICksIG1hdGNoZXJfMVxuICAgICAgICBAZXEgKCDOqWJic2ZtX18yOSA9IC0+IGdldF9uZXh0X2ZpbGVuYW1lICAgICAgIGFic19wYXRoICAgKSwgYWJzX21hdGNoZXJfMlxuICAgICAgICBAZXEgKCDOqWJic2ZtX18zMCA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgIGFic19wYXRoICAgKSwgYWJzX21hdGNoZXJfM1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3IgWyBwYXRoLCBbIG1hdGNoZXJfMSwgbWF0Y2hlcl8yLCBtYXRjaGVyXzMsIF0sIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICByZWxfcGF0aCAgICAgID0gUEFUSC5yZWxhdGl2ZSBwcm9jZXNzLmN3ZCgpLCBQQVRILmpvaW4gcGF0aF9wcmVmaXgsIHBhdGhcbiAgICAgICAgcmVsX21hdGNoZXJfMiA9IFBBVEgucmVsYXRpdmUgcHJvY2Vzcy5jd2QoKSwgUEFUSC5qb2luIHBhdGhfcHJlZml4LCBtYXRjaGVyXzJcbiAgICAgICAgcmVsX21hdGNoZXJfMyA9IFBBVEgucmVsYXRpdmUgcHJvY2Vzcy5jd2QoKSwgUEFUSC5qb2luIHBhdGhfcHJlZml4LCBtYXRjaGVyXzNcbiAgICAgICAgQGVxICggzqliYnNmbV9fMzEgPSAtPiBleGlzdHMgcmVsX3BhdGggICAgICAgICAgICAgICAgICAgICksIG1hdGNoZXJfMVxuICAgICAgICBAZXEgKCDOqWJic2ZtX18zMiA9IC0+IGdldF9uZXh0X2ZpbGVuYW1lICAgICAgIHJlbF9wYXRoICAgKSwgcmVsX21hdGNoZXJfMlxuICAgICAgICBAZXEgKCDOqWJic2ZtX18zMyA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgIHJlbF9wYXRoICAgKSwgcmVsX21hdGNoZXJfM1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjdXJyZW50X2N3ZCA9IFBBVEgucmVzb2x2ZSBwcm9jZXNzLmN3ZCgpXG4gICAgICBwcm9jZXNzLmNoZGlyIHBhdGhfcHJlZml4XG4gICAgICB0cnlcbiAgICAgICAgZm9yIFsgcGF0aCwgWyBtYXRjaGVyXzEsIG1hdGNoZXJfMiwgbWF0Y2hlcl8zLCBdLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgICBAZXEgKCDOqWJic2ZtX18zNCA9IC0+IGV4aXN0cyBwYXRoICAgICAgICAgICAgICAgICAgICApLCBtYXRjaGVyXzFcbiAgICAgICAgICBAZXEgKCDOqWJic2ZtX18zNSA9IC0+IGdldF9uZXh0X2ZpbGVuYW1lICAgICAgIHBhdGggICApLCBtYXRjaGVyXzJcbiAgICAgICAgICBAZXEgKCDOqWJic2ZtX18zNiA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgIHBhdGggICApLCBtYXRjaGVyXzNcbiAgICAgIGZpbmFsbHlcbiAgICAgICAgcHJvY2Vzcy5jaGRpciBjdXJyZW50X2N3ZFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIyAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgZ2V0X25leHRfZnJlZV9maWxlbmFtZV9zd2FwX3N1ZmZpeDogLT5cbiAgIyAgIHsgZ2V0X25leHRfZnJlZV9maWxlbmFtZSxcbiAgIyAgICAgc3dhcF9zdWZmaXgsICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX25leHRfZnJlZV9maWxlbmFtZSgpXG4gICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgZGVidWcgJ86pYmJzZm1fXzM3JywgaW50ZXJtZWRpYXRlX2NhY2hlX3BhdGggPSBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lICcvcGF0aC90by9yZWZlcmVuY2UudHh0J1xuICAjICAgZGVidWcgJ86pYmJzZm1fXzM4JywgZmluYWxpemVkX2NhY2hlX3BhdGggICAgPSBzd2FwX3N1ZmZpeCAnLmZpbmFsaXplZCdcbiAgIyAgIEBlcSAgICAgKCDOqWJic2ZtX18zOSA9IC0+IGludGVybWVkaWF0ZV9jYWNoZV9wYXRoICAgICAgICAgICApLCAnL3BhdGgvdG8vfi5yZWZlcmVuY2UudHh0LjAwMDEuZmluYWxpemVkJ1xuICAjICAgcmF0aGVyIHVzZSAnL3BhdGgvdG8vfi5yZWZlcmVuY2UudHh0LjAwMDEuYnJpY2FicmFjLWNhY2hlLmZpbmFsaXplZCdcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQU5TSTogLT5cbiAgICB7IEFOU0ksIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpKClcbiAgICBAZXEgICAgICggzqliYnNmbV9fNDAgPSAtPiBBTlNJLmZnX2Zyb21faGV4ICcjYTBhMWEyJyAgICAgICAgICAgKSwgJ1xceDFCWzM4OjI6OjE2MDoxNjE6MTYybSdcbiAgICBAZXEgICAgICggzqliYnNmbV9fNDEgPSAtPiBBTlNJLmJnX2Zyb21faGV4ICcjYTBhMWEyJyAgICAgICAgICAgKSwgJ1xceDFCWzQ4OjI6OjE2MDoxNjE6MTYybSdcbiAgICBAZXEgICAgICggzqliYnNmbV9fNDIgPSAtPiBBTlNJLmZnX2Zyb21fZGVjIFsgMTYwLCAxNjEsIDE2MiBdICAgKSwgJ1xceDFCWzM4OjI6OjE2MDoxNjE6MTYybSdcbiAgICBAZXEgICAgICggzqliYnNmbV9fNDMgPSAtPiBBTlNJLmJnX2Zyb21fZGVjIFsgMTYwLCAxNjEsIDE2MiBdICAgKSwgJ1xceDFCWzQ4OjI6OjE2MDoxNjE6MTYybSdcbiAgICBAZXEgICAgICggzqliYnNmbV9fNDQgPSAtPiBBTlNJLmRlY19mcm9tX2hleCAnI2EwYTFhMicgICAgICAgICAgKSwgWyAxNjAsIDE2MSwgMTYyIF1cbiAgICBAdGhyb3dzICggzqliYnNmbV9fNDUgPSAtPiBBTlNJLmRlY19mcm9tX2hleCAnI3h4eHh4eCcgICAgICAgICAgKSwgL25vdCBhIHByb3BlciBoZXhhZGVjaW1hbCBSR0IgY29kZTogJyN4eHh4eHgnL1xuICAgIEB0aHJvd3MgKCDOqWJic2ZtX180NiA9IC0+IEFOU0kuZGVjX2Zyb21faGV4ICcjYWFhYWEnICAgICAgICAgICApLCAvbm90IGEgcHJvcGVyIGhleGFkZWNpbWFsIFJHQiBjb2RlOiAnI2FhYWFhJy9cbiAgICBAdGhyb3dzICggzqliYnNmbV9fNDcgPSAtPiBBTlNJLmRlY19mcm9tX2hleCAnI2FhYWFhYmInICAgICAgICAgKSwgL25vdCBhIHByb3BlciBoZXhhZGVjaW1hbCBSR0IgY29kZTogJyNhYWFhYWJiJy9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2Fuc2lfY29sb3JzX2FuZF9lZmZlY3RzOiAtPlxuICAgIHsgYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHM6IEMsIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpX2NvbG9yc19hbmRfZWZmZWN0cygpXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzQ4ID0gLT4gQy5yZWQgICAgICAgICAgICAgICksICdcXHgxQlszODoyOjoyNTU6MDoxNm0nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzQ5ID0gLT4gQy5iZ19yZWQgICAgICAgICAgICksICdcXHgxQls0ODoyOjoyNTU6MDoxNm0nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzUwID0gLT4gQy5vdmVybGluZTEgICAgICAgICksICdcXHgxYls1M20nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzUxID0gLT4gQy5vdmVybGluZTAgICAgICAgICksICdcXHgxYls1NW0nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzUyID0gLT4gQy5kZWZhdWx0ICAgICAgICAgICksICdcXHgxYlszOW0nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzUzID0gLT4gQy5iZ19kZWZhdWx0ICAgICAgICksICdcXHgxYls0OW0nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzU0ID0gLT4gQy5yZXNldCAgICAgICAgICAgICksICdcXHgxYlswbSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2Fuc2lfY2h1bmtlcjogLT5cbiAgICB7IGFuc2lfY29sb3JzX2FuZF9lZmZlY3RzOiBDLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHMoKVxuICAgIHsgQW5zaV9jaHVua2VyLCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpX2NodW5rZXIoKVxuICAgIGRvID0+XG4gICAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICB0ZXh0ICA9IFwiQUJDI3sgQy5ibGFjayArIEMuYmdfcmVkICsgQy5ib2xkICsgJ0RFRicgKyBDLmJvbGQwICsgQy5kZWZhdWx0ICsgQy5iZ19kZWZhdWx0IH1YWVpcIlxuICAgICAgYWMgICAgPSBuZXcgQW5zaV9jaHVua2VyKClcbiAgICAgIHVyZ2UgJ86pYmJzZm1fXzU1JywgICAgICAgICAgICAgICAgYWMuY2h1bmtpZnkgdGV4dFxuICAgICAgIyBpbmZvICfOqWJic2ZtX181NicsIGQgZm9yIGQgZnJvbSAoIGFjLmNodW5raWZ5IHRleHQgKS5jaHVua3NcbiAgICAgIGluZm8gJ86pYmJzZm1fXzU3JywgZCBmb3IgZCBmcm9tIGFjXG4gICAgICBpbmZvICfOqWJic2ZtX181OCcsIGFjLndpZHRoXG4gICAgICBpbmZvICfOqWJic2ZtX181OScsIGFjLmxlbmd0aFxuICAgICAgaW5mbyAnzqliYnNmbV9fNjAnLCBhYy5oYXNfYW5zaVxuICAgICAgaW5mbyAnzqliYnNmbV9fNjEnLCBhYy50ZXh0XG4gICAgZG8gPT5cbiAgICAgIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAgIHRleHQgID0gJ0FCQ0RFRlhZWidcbiAgICAgIGFjICAgID0gbmV3IEFuc2lfY2h1bmtlcigpXG4gICAgICB1cmdlICfOqWJic2ZtX182MicsICAgICAgICAgICAgICAgIGFjLmNodW5raWZ5IHRleHRcbiAgICAgICMgaW5mbyAnzqliYnNmbV9fNjMnLCBkIGZvciBkIGZyb20gKCBhYy5jaHVua2lmeSB0ZXh0ICkuY2h1bmtzXG4gICAgICBpbmZvICfOqWJic2ZtX182NCcsIGQgZm9yIGQgZnJvbSBhY1xuICAgICAgaW5mbyAnzqliYnNmbV9fNjUnLCBhYy53aWR0aFxuICAgICAgaW5mbyAnzqliYnNmbV9fNjYnLCBhYy5sZW5ndGhcbiAgICAgIGluZm8gJ86pYmJzZm1fXzY3JywgYWMuaGFzX2Fuc2lcbiAgICAgIGluZm8gJ86pYmJzZm1fXzY4JywgYWMudGV4dFxuICAgIGRvID0+XG4gICAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICB0ZXh0ICA9IFwiI3sgQy5ibGFjayArIEMuYmdfcmVkICsgQy5ib2xkICsgQy5ib2xkMCArIEMuZGVmYXVsdCArIEMuYmdfZGVmYXVsdCB9XCJcbiAgICAgIGFjICAgID0gbmV3IEFuc2lfY2h1bmtlcigpXG4gICAgICB1cmdlICfOqWJic2ZtX182OScsICAgICAgICAgICAgICAgIGFjLmNodW5raWZ5IHRleHRcbiAgICAgICMgaW5mbyAnzqliYnNmbV9fNzAnLCBkIGZvciBkIGZyb20gKCBhYy5jaHVua2lmeSB0ZXh0ICkuY2h1bmtzXG4gICAgICBpbmZvICfOqWJic2ZtX183MScsIGQgZm9yIGQgZnJvbSBhY1xuICAgICAgaW5mbyAnzqliYnNmbV9fNzInLCBhYy53aWR0aFxuICAgICAgaW5mbyAnzqliYnNmbV9fNzMnLCBhYy5sZW5ndGhcbiAgICAgIGluZm8gJ86pYmJzZm1fXzc0JywgYWMuaGFzX2Fuc2lcbiAgICAgIGluZm8gJ86pYmJzZm1fXzc1JywgYWMudGV4dFxuICAgIGRvID0+XG4gICAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICB0ZXh0ICA9ICcnXG4gICAgICBhYyAgICA9IG5ldyBBbnNpX2NodW5rZXIoKVxuICAgICAgdXJnZSAnzqliYnNmbV9fNzYnLCAgICAgICAgICAgICAgICBhYy5jaHVua2lmeSB0ZXh0XG4gICAgICAjIGluZm8gJ86pYmJzZm1fXzc3JywgZCBmb3IgZCBmcm9tICggYWMuY2h1bmtpZnkgdGV4dCApLmNodW5rc1xuICAgICAgaW5mbyAnzqliYnNmbV9fNzgnLCBkIGZvciBkIGZyb20gYWNcbiAgICAgIGluZm8gJ86pYmJzZm1fXzc5JywgYWMud2lkdGhcbiAgICAgIGluZm8gJ86pYmJzZm1fXzgwJywgYWMubGVuZ3RoXG4gICAgICBpbmZvICfOqWJic2ZtX184MScsIGFjLmhhc19hbnNpXG4gICAgICBpbmZvICfOqWJic2ZtX184MicsIGFjLnRleHRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX3N0cmlwX2Fuc2k6IC0+XG4gICAgeyBzdHJpcF9hbnNpLCBpbnRlcm5hbHM6XG4gICAgICB7IGFuc2lfcmUsXG4gICAgICAgIG93bl9zaW5nbGVfYW5zaV9yZSwgICAgIH0gfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3N0cmlwX2Fuc2koKVxuICAgIHsgYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHM6IEMsIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpX2NvbG9yc19hbmRfZWZmZWN0cygpXG4gICAgZG8gPT5cbiAgICAgIHRleHQgID0gXCJBQkMjeyBDLmJsYWNrICsgQy5iZ19yZWQgKyBDLmJvbGQgKyAnREVGJyArIEMuYm9sZDAgKyBDLmRlZmF1bHQgKyBDLmJnX2RlZmF1bHQgfVhZWlwiXG4gICAgICB1cmdlICfOqWJic2ZtX184MycsIHJwciBzdHJpcF9hbnNpIHRleHRcbiAgICAgIGluZm8gJ86pYmJzZm1fXzg0JywgcnByIHRleHQuc3BsaXQgYW5zaV9yZVxuICAgICAgaW5mbyAnzqliYnNmbV9fODUnLCBycHIgdGV4dC5zcGxpdCBvd25fc2luZ2xlX2Fuc2lfcmVcbiAgICAgIEBlcSAoIM6pYmJzZm1fXzg2ID0gLT4gc3RyaXBfYW5zaSB0ZXh0ICksICdBQkNERUZYWVonXG4gICAgZG8gPT5cbiAgICAgIHRleHQgID0gJ0FCQ0RFRlhZWidcbiAgICAgIHVyZ2UgJ86pYmJzZm1fXzg3JywgcnByIHN0cmlwX2Fuc2kgdGV4dFxuICAgICAgQGVxICggzqliYnNmbV9fODggPSAtPiBzdHJpcF9hbnNpIHRleHQgKSwgJ0FCQ0RFRlhZWidcbiAgICBkbyA9PlxuICAgICAgdGV4dCAgPSBcIiN7IEMuYmxhY2sgKyBDLmJnX3JlZCArIEMuYm9sZCArIEMuYm9sZDAgKyBDLmRlZmF1bHQgKyBDLmJnX2RlZmF1bHQgfVwiXG4gICAgICB1cmdlICfOqWJic2ZtX184OScsIHJwciBzdHJpcF9hbnNpIHRleHRcbiAgICAgIEBlcSAoIM6pYmJzZm1fXzkwID0gLT4gc3RyaXBfYW5zaSB0ZXh0ICksICcnXG4gICAgZG8gPT5cbiAgICAgIHRleHQgID0gJydcbiAgICAgIHVyZ2UgJ86pYmJzZm1fXzkxJywgcnByIHN0cmlwX2Fuc2kgdGV4dFxuICAgICAgQGVxICggzqliYnNmbV9fOTIgPSAtPiBzdHJpcF9hbnNpIHRleHQgKSwgJydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2dldF9jYWxsc2l0ZTogLT5cbiAgICB7IGdldF9jYWxsc2l0ZSxcbiAgICAgIGdldF9hcHBfZGV0YWlscyxcbiAgICAgIHJlcXVpcmVfZnJvbV9hcHBfZm9sZGVyLFxuICAgICAgZ2V0X2JyaWNhYnJhY19jZmcsICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X2NhbGxzaXRlKClcbiAgICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICBVUkwgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6dXJsJ1xuICAgIGFwcF9wYXRoICAgICAgICAgICAgICAgICAgICAgID0gUEFUSC5yZXNvbHZlIFBBVEguam9pbiBfX2Rpcm5hbWUsICcuLi8uLi8uLi8nXG4gICAgcGFja2FnZV9wYXRoICAgICAgICAgICAgICAgICAgPSBQQVRILmpvaW4gYXBwX3BhdGgsICdwYWNrYWdlLmpzb24nXG4gICAgdmVyc2lvbiAgICAgICAgICAgICAgICAgICAgICAgPSAoIHJlcXVpcmUgJy4uLy4uLy4uL3BhY2thZ2UuanNvbicgKS52ZXJzaW9uXG4gICAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoIHJlcXVpcmUgJy4uLy4uLy4uL3BhY2thZ2UuanNvbicgKS5uYW1lXG4gICAgZmFsbGJhY2sgICAgICAgICAgICAgICAgICAgICAgPSBTeW1ib2wgJ2ZhbGxiYWNrJ1xuICAgIGJyaWNhYnJhY19jZmdfMSAgICAgICAgICAgICAgID0gcmVxdWlyZV9mcm9tX2FwcF9mb2xkZXIgeyBwYXRoOiAnYnJpY2FicmFjLmNmZy5qcycsIH1cbiAgICBicmljYWJyYWNfY2ZnXzIgICAgICAgICAgICAgICA9IGdldF9icmljYWJyYWNfY2ZnKClcbiAgICBhcHAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGdldF9hcHBfZGV0YWlscygpXG4gICAgZGF0YXN0b3JlX3BhdGggICAgICAgICAgICAgICAgPSBQQVRILmpvaW4gYXBwLnBhdGgsICdoZW5naXN0LW5nLnNxbGl0ZSdcbiAgICBjYWxsc2l0ZSAgICAgICAgICAgICAgICAgICAgICA9IGdldF9jYWxsc2l0ZSB7IHNvdXJjZW1hcHBlZDogZmFsc2UsIH1cbiAgICBkZWJ1ZyAnzqliYnNmbV9fOTMnLCBicmljYWJyYWNfY2ZnXzJcbiAgICAjIEBlcSAoIM6pYmJzZm1fXzk0ID0gLT4gVVJMLmZpbGVVUkxUb1BhdGggY2FsbHNpdGUuc2NyaXB0TmFtZSAgICAgICAgICAgICAgICAgKSwgX19maWxlbmFtZVxuICAgIEBlcSAgICAgKCDOqWJic2ZtX185NSA9IC0+IGNhbGxzaXRlLnNjcmlwdE5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBfX2ZpbGVuYW1lXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzk2ID0gLT4gYXBwLnBhdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGFwcF9wYXRoXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzk3ID0gLT4gYXBwLnBhY2thZ2VfcGF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHBhY2thZ2VfcGF0aFxuICAgIEBlcSAgICAgKCDOqWJic2ZtX185OCA9IC0+IGFwcC52ZXJzaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB2ZXJzaW9uXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzk5ID0gLT4gYXBwLm5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIG5hbWVcbiAgICBAZXEgICAgICggzqliYnNmbV8xMDAgPSAtPiBicmljYWJyYWNfY2ZnXzEuZGF0YXN0b3JlLm5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2hlbmdpc3QtbmcnXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTAxID0gLT4gZ2V0X2JyaWNhYnJhY19jZmcgeyBwYXRoOiAnbm9zdWNocGF0aCcsIGZhbGxiYWNrLCB9ICAgKSwgZmFsbGJhY2tcbiAgICBAdGhyb3dzICggzqliYnNmbV8xMDIgPSAtPiBnZXRfYnJpY2FicmFjX2NmZyB7IHBhdGg6ICdub3N1Y2hwYXRoJywgfSAgICAgICAgICAgICApLCAvQ2Fubm90IGZpbmQgbW9kdWxlL2lcbiAgICBAZXEgICAgICggzqliYnNmbV8xMDMgPSAtPiBicmljYWJyYWNfY2ZnXzIuZGF0YXN0b3JlLm5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2hlbmdpc3QtbmcnXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTA0ID0gLT4gYnJpY2FicmFjX2NmZ18yLmRhdGFzdG9yZS5wYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGRhdGFzdG9yZV9wYXRoXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTA1ID0gLT4gYnJpY2FicmFjX2NmZ18yLmFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIG5hbWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2dldF9jYWxsc2l0ZTogLT5cbiAgICB7IGdldF9jYWxsc2l0ZSxcbiAgICAgIGdldF9jYWxsc2l0ZV9wYXRoLCAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9jYWxsc2l0ZSgpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgVVJMICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnVybCdcbiAgICBhcHBfcGF0aCAgICAgICAgICAgICAgICAgICAgICA9IFBBVEgucmVzb2x2ZSBQQVRILmpvaW4gX19kaXJuYW1lLCAnLi4vLi4vLi4vJ1xuICAgIHBhY2thZ2VfcGF0aCAgICAgICAgICAgICAgICAgID0gUEFUSC5qb2luIGFwcF9wYXRoLCAncGFja2FnZS5qc29uJ1xuICAgIHZlcnNpb24gICAgICAgICAgICAgICAgICAgICAgID0gKCByZXF1aXJlICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nICkudmVyc2lvblxuICAgIG5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgID0gKCByZXF1aXJlICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nICkubmFtZVxuICAgIGZhbGxiYWNrICAgICAgICAgICAgICAgICAgICAgID0gU3ltYm9sICdmYWxsYmFjaydcbiAgICBjYWxsc2l0ZSAgICAgICAgICAgICAgICAgICAgICA9IGdldF9jYWxsc2l0ZSB7IHNvdXJjZW1hcHBlZDogZmFsc2UsIH1cbiAgICBmaWxlbmFtZSAgICAgICAgICAgICAgICAgICAgICA9IF9fZmlsZW5hbWUucmVwbGFjZSAvXiguKylcXC9saWJcXC8oW15cXC9dKz8pXFwuanMvLCAnJDEvc3JjLyQyLmNvZmZlZSdcbiAgICBAZXEgICAgICggzqliYnNmbV8xMDYgPSAtPiBjYWxsc2l0ZS5zY3JpcHROYW1lICksIF9fZmlsZW5hbWVcbiAgICBAZXEgICAgICggzqliYnNmbV8xMDcgPSAtPiBnZXRfY2FsbHNpdGVfcGF0aCgpICksIGZpbGVuYW1lXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVxdWlyZV9nZXRfYXBwX2RldGFpbHM6IC0+XG4gICAgeyBnZXRfYXBwX2RldGFpbHMsXG4gICAgICByZXF1aXJlX2Zyb21fYXBwX2ZvbGRlcixcbiAgICAgIGdldF9icmljYWJyYWNfY2ZnLCB9ICAgICAgICA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9hcHBfZGV0YWlscygpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgVVJMICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnVybCdcbiAgICBhcHBfcGF0aCAgICAgICAgICAgICAgICAgICAgICA9IFBBVEgucmVzb2x2ZSBQQVRILmpvaW4gX19kaXJuYW1lLCAnLi4vLi4vLi4vJ1xuICAgIHBhY2thZ2VfcGF0aCAgICAgICAgICAgICAgICAgID0gUEFUSC5qb2luIGFwcF9wYXRoLCAncGFja2FnZS5qc29uJ1xuICAgIHZlcnNpb24gICAgICAgICAgICAgICAgICAgICAgID0gKCByZXF1aXJlICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nICkudmVyc2lvblxuICAgIG5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgID0gKCByZXF1aXJlICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nICkubmFtZVxuICAgIGZhbGxiYWNrICAgICAgICAgICAgICAgICAgICAgID0gU3ltYm9sICdmYWxsYmFjaydcbiAgICBicmljYWJyYWNfY2ZnXzEgICAgICAgICAgICAgICA9IHJlcXVpcmVfZnJvbV9hcHBfZm9sZGVyIHsgcGF0aDogJ2JyaWNhYnJhYy5jZmcuanMnLCB9XG4gICAgYnJpY2FicmFjX2NmZ18yICAgICAgICAgICAgICAgPSBnZXRfYnJpY2FicmFjX2NmZygpXG4gICAgYXBwICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBnZXRfYXBwX2RldGFpbHMoKVxuICAgIGRhdGFzdG9yZV9wYXRoICAgICAgICAgICAgICAgID0gUEFUSC5qb2luIGFwcC5wYXRoLCAnaGVuZ2lzdC1uZy5zcWxpdGUnXG4gICAgIyBkZWJ1ZyAnzqliYnNmbV8xMDgnLCBicmljYWJyYWNfY2ZnXzJcbiAgICAjIEBlcSAoIM6pYmJzZm1fMTA5ID0gLT4gVVJMLmZpbGVVUkxUb1BhdGggY2FsbHNpdGUuc2NyaXB0TmFtZSAgICAgICAgICAgICAgICAgKSwgX19maWxlbmFtZVxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzExMCA9IC0+IGFwcC5wYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBhcHBfcGF0aFxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzExMSA9IC0+IGFwcC5wYWNrYWdlX3BhdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBwYWNrYWdlX3BhdGhcbiAgICBAZXEgICAgICggzqliYnNmbV8xMTIgPSAtPiBhcHAudmVyc2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdmVyc2lvblxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzExMyA9IC0+IGFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBuYW1lXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTE0ID0gLT4gYnJpY2FicmFjX2NmZ18xLmRhdGFzdG9yZS5uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdoZW5naXN0LW5nJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtXzExNSA9IC0+IGdldF9icmljYWJyYWNfY2ZnIHsgcGF0aDogJ25vc3VjaHBhdGgnLCBmYWxsYmFjaywgfSAgICAgICApLCBmYWxsYmFja1xuICAgIEB0aHJvd3MgKCDOqWJic2ZtXzExNiA9IC0+IGdldF9icmljYWJyYWNfY2ZnIHsgcGF0aDogJ25vc3VjaHBhdGgnLCAgICAgICAgICAgfSAgICAgICApLCAvQ2Fubm90IGZpbmQgbW9kdWxlL2lcbiAgICBAZXEgICAgICggzqliYnNmbV8xMTcgPSAtPiBicmljYWJyYWNfY2ZnXzIuZGF0YXN0b3JlLm5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2hlbmdpc3QtbmcnXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTE4ID0gLT4gYnJpY2FicmFjX2NmZ18yLmRhdGFzdG9yZS5wYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGRhdGFzdG9yZV9wYXRoXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTE5ID0gLT4gYnJpY2FicmFjX2NmZ18yLmFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIG5hbWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2RicmljOiAtPlxuICAgIHsgRGJyaWMsXG4gICAgICBTUUwsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAgZGVidWcgJ86pYmJzZm1fMTIwJywgbmV3IERicmljICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgIGRvID0+XG4gICAgICBjbGFzcyBEYnJpY19zdG9yZSBleHRlbmRzIERicmljXG4gICAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICAgIGNyZWF0ZV90YWJsZXM6IFNRTFwiXCJcIlxuICAgICAgICAgICAgLS0gZHJvcCB0YWJsZSBpZiBleGlzdHMga3ZwcztcbiAgICAgICAgICAgIGNyZWF0ZSB0YWJsZSBpZiBub3QgZXhpc3RzIGt2cHMgKFxuICAgICAgICAgICAgICBrICAgICAgICAgICAgIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgICAgICB2ICAgICAgICAgICAgIGpzb24gKTtcIlwiXCJcbiAgICAgICAgICBnZXRfc2NoZW1hOiBTUUxcIlwiXCJcbiAgICAgICAgICAgIHNlbGVjdCAqIGZyb20gc3FsaXRlX3NjaGVtYSBvcmRlciBieSBuYW1lLCB0eXBlO1wiXCJcIlxuICAgICAgICAgIGdldF90YWJsZXM6IFNRTFwiXCJcIlxuICAgICAgICAgICAgc2VsZWN0ICogZnJvbSBzcWxpdGVfc2NoZW1hIHdoZXJlIHR5cGUgaXMgJ3RhYmxlJyBvcmRlciBieSBuYW1lLCB0eXBlO1wiXCJcIlxuICAgICAgICAgIGluc2VydF9rdnA6IFNRTFwiXCJcIlxuICAgICAgICAgICAgaW5zZXJ0IGludG8ga3ZwcyAoIGssIHYgKSB2YWx1ZXMgKCAkaywgJHYgKVxuICAgICAgICAgICAgICBvbiBjb25mbGljdCAoIGsgKSBkbyB1cGRhdGUgc2V0IHYgPSBleGNsdWRlZC52O1wiXCJcIlxuICAgICAgICAgIGdldF9rdnBzOiBTUUxcIlwiXCJcbiAgICAgICAgICAgIHNlbGVjdCAqIGZyb20ga3ZwcyBvcmRlciBieSBrO1wiXCJcIlxuICAgICAgZGVidWcgJ86pYmJzZm1fMTIxJywgbmV3IERicmljX3N0b3JlICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgZGVidWcgJ86pYmJzZm1fMTIyJywgRGJyaWNfc3RvcmUub3BlbiAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIGRicyA9IERicmljX3N0b3JlLm9wZW4gJy9kZXYvc2htL2JyaWNhYnJhYy5zcWxpdGUnXG4gICAgICBkYnMuc3RhdGVtZW50cy5jcmVhdGVfdGFibGVzLnJ1bigpXG4gICAgICBmb3Igcm93IGZyb20gZGJzLnN0YXRlbWVudHMuZ2V0X3NjaGVtYS5pdGVyYXRlKClcbiAgICAgICAgaGVscCAnzqliYnNmbV8xMjMnLCByb3dcbiAgICAgIGRicy5zdGF0ZW1lbnRzLmluc2VydF9rdnAucnVuIHsgazogJ29uZScsICAgdjogMSwgfVxuICAgICAgZGJzLnN0YXRlbWVudHMuaW5zZXJ0X2t2cC5ydW4geyBrOiAndHdvJywgICB2OiAyLCB9XG4gICAgICBkYnMuc3RhdGVtZW50cy5pbnNlcnRfa3ZwLnJ1biB7IGs6ICd0aHJlZScsIHY6IDMsIH1cbiAgICAgIGRicy5zdGF0ZW1lbnRzLmluc2VydF9rdnAucnVuIHsgazogJ3RocmVlJywgdjogJ2lpaScsIH1cbiAgICAgIGZvciByb3cgZnJvbSBkYnMuc3RhdGVtZW50cy5nZXRfa3Zwcy5pdGVyYXRlKClcbiAgICAgICAgaGVscCAnzqliYnNmbV8xMjQnLCByb3dcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9nZXRfYXBwX2RldGFpbHM6IHRlc3RzLnJlcXVpcmVfZ2V0X2FwcF9kZXRhaWxzLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9kYnJpYzogdGVzdHMucmVxdWlyZV9kYnJpYywgfVxuXG4iXX0=
//# sourceURL=../src/test-bricabrac-single-file-modules.coffee