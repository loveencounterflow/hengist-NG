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
      var Dbric, Dbric_store, SQL, internals;
      ({Dbric, SQL, internals} = SFMODULES.unstable.require_dbric());
      debug('Ωbbsfm_120', new Dbric('/dev/shm/bricabrac.sqlite'));
      Dbric_store = (function() {
        //=======================================================================================================
        class Dbric_store extends Dbric {
          //---------------------------------------------------------------------------------------------------
          is_ready() {
            var dbos, ref;
            dbos = this._get_db_objects();
            if (((ref = dbos.store_facets) != null ? ref.type : void 0) !== 'table') {
              return false;
            }
            return true;
          }

        };

        Dbric_store.statements = {
          // store_create_tables: SQL"""
          //   """
          store_create_tables: SQL`create table store_facets (
  facet_key             text unique not null primary key,
  facet_value           json );`,
          store_insert_facet: SQL`insert into store_facets ( facet_key, facet_value ) values ( $facet_key, $facet_value )
  on conflict ( facet_key ) do update set facet_value = excluded.facet_value;`,
          store_get_facets: SQL`select * from store_facets order by facet_key;`
        };

        return Dbric_store;

      }).call(this);
      (() => {        //=======================================================================================================
        var dbs, results, row;
        debug('Ωbbsfm_121', new Dbric_store('/dev/shm/bricabrac.sqlite'));
        dbs = Dbric_store.open('/dev/shm/bricabrac.sqlite');
        dbs.statements.store_create_tables.run();
        for (row of dbs.statements.get_schema.iterate()) {
          help('Ωbbsfm_123', row);
        }
        dbs.statements.store_insert_facet.run({
          facet_key: 'one',
          facet_value: JSON.stringify(1)
        });
        dbs.statements.store_insert_facet.run({
          facet_key: 'two',
          facet_value: JSON.stringify(2)
        });
        dbs.statements.store_insert_facet.run({
          facet_key: 'three',
          facet_value: JSON.stringify(3)
        });
        dbs.statements.store_insert_facet.run({
          facet_key: 'three',
          facet_value: JSON.stringify('iii')
        });
        dbs.statements.store_insert_facet.run({
          facet_key: 'true',
          facet_value: JSON.stringify(true)
        });
        dbs.statements.store_insert_facet.run({
          facet_key: 'false',
          facet_value: JSON.stringify(false)
        });
        results = [];
        for (row of dbs.statements.store_get_facets.iterate()) {
          row = {...row, ...{
              facet_value: JSON.parse(row.facet_value),
              _v: row.facet_value
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCRztFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBRUg7QUFGRyxNQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUtILEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsK0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUEzQkc7OztFQTZCSCxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FB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QixDQUFDLElBQXpCLENBQThCO1FBQUUsdUJBQUEsRUFBeUIsS0FBSyxDQUFDO01BQWpDLENBQTlCO2FBQ0EsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLGFBQUEsRUFBZSxLQUFLLENBQUM7TUFBdkIsQ0FBOUI7SUFQc0MsQ0FBQSxJQUF4Qzs7QUExWUciLCJzb3VyY2VzQ29udGVudCI6WyJcbiMjI1xuXG5cbiMjIEFwcGxpY2F0aW9uc1xuXG4qICoqUmVnRXggQnVpbGRlcioqIChleGFtcGxlIGZyb20gW1JlamlncyBibG9nIHBvc3RdKGh0dHBzOi8vbWVkaXVtLmNvbS9Ab21hcnphd2FocnkvcmVqaWdzLW1ha2luZy1yZWd1bGFyLWV4cHJlc3Npb25zLWh1bWFuLXJlYWRhYmxlLTFmYWQzN2NiM2VhZSkpXG5cbmBgYGphdmFcbnZhciBlbWFpbFJlZ2V4ID1cbiAgICBSZWppZ3MuQ3JlYXRlKClcbiAgICAgICAgICAuQXRTdGFydCgpXG4gICAgICAgICAgLk9uZU9yTW9yZShyID0+IHIuQW55TGV0dGVyT3JEaWdpdCgpLk9yKCkuQW55T2YoXCIuXyUrLVwiKSlcbiAgICAgICAgICAuVGV4dChcIkBcIilcbiAgICAgICAgICAuT25lT3JNb3JlKHIgPT4gci5BbnlMZXR0ZXJPckRpZ2l0KCkuT3IoKS5BbnlPZihcIi4tXCIpKVxuICAgICAgICAgIC5UZXh0KFwiLlwiKVxuICAgICAgICAgIC5BbnlMZXR0ZXJPckRpZ2l0KCkuQXRMZWFzdCgyKVxuICAgICAgICAgIC5BdEVuZCgpXG4gICAgICAgICAgLkJ1aWxkKCk7XG5gYGBcblxuKiAqKkhUTUwvWE1MIEJ1aWxlcioqXG4qICoqU1FMIEJ1aWxkZXIqKlxuKiAqKkNMSSBDb2xvcmluZyoqXG4qIHN5bnRheCBmb3IgYSAqKlR5cGUgQ2hlY2tlcioqXG5cbiMjI1xuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG5cblxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc190YWdmdW5fY2FsbDogLT5cbiAgICB7IGlzX3RhZ2Z1bl9jYWxsLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV90YWdmdW5fdG9vbHMoKVxuICAgIGZuID0gKCBQLi4uICkgLT4gaXNfdGFnZnVuX2NhbGwgUC4uLlxuICAgIEBlcSAoIM6pYmJzZm1fX18xID0gLT4gZm4oKSAgICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6pYmJzZm1fX18yID0gLT4gZm4gWyAxLCAyLCAzLCBdICApLCBmYWxzZVxuICAgIEBlcSAoIM6pYmJzZm1fX18zID0gLT4gZm5cIlsgMSwgMiwgMywgXVwiICksIHRydWVcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZXNjYXBlX2h0bWxfdGV4dDogLT5cbiAgICB7IGVzY2FwZV9odG1sX3RleHQsIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9lc2NhcGVfaHRtbF90ZXh0KClcbiAgICBAZXEgKCDOqWJic2ZtX19fNCA9IC0+IGVzY2FwZV9odG1sX3RleHQgJycgICAgICAgICAgICAgICAgICAgICksICcnXG4gICAgQGVxICggzqliYnNmbV9fXzUgPSAtPiBlc2NhcGVfaHRtbF90ZXh0ICdhYmMnICAgICAgICAgICAgICAgICApLCAnYWJjJ1xuICAgIEBlcSAoIM6pYmJzZm1fX182ID0gLT4gZXNjYXBlX2h0bWxfdGV4dCAnYWJjPHRhZz5kJmUmZjwvdGFnPicgKSwgJ2FiYyZsdDt0YWcmZ3Q7ZCZhbXA7ZSZhbXA7ZiZsdDsvdGFnJmd0OydcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgd2Fsa190YWdmdW5fY2FsbF9wYXJ0czogLT5cbiAgICAjIHsgSHRtbCwgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZV9odG1sX2NsYXNzKClcbiAgICAjIHsgZXNjYXBlX2h0bWxfdGV4dCwgICAgICAgICB9ID0gcmVxdWlyZV9lc2NhcGVfaHRtbF90ZXh0KClcbiAgICAjIHsgc3RhY2thYmxlX3RhZ2Z1biwgICAgICAgICB9ID0gcmVxdWlyZV9zdGFja2FibGVfdGFnZnVuKClcbiAgICB7IHdhbGtfcGFydHMsXG4gICAgICB3YWxrX25vbmVtcHR5X3BhcnRzLFxuICAgICAgd2Fsa19yYXdfcGFydHMsXG4gICAgICB3YWxrX3Jhd19ub25lbXB0eV9wYXJ0cywgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV90YWdmdW5fdG9vbHMoKVxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQGVxICggzqliYnNmbV9fXzcgPSAtPiBbICggd2Fsa19wYXJ0c1wiXCIgICAgICAgICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fX184ID0gLT4gWyAoIHdhbGtfcGFydHMgXCJcIiAgICAgICAgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX19fOSA9IC0+IFsgKCB3YWxrX25vbmVtcHR5X3BhcnRzXCJcIiAgICAgICAgICkuLi4sIF0gKSwgW11cbiAgICBAZXEgKCDOqWJic2ZtX18xMCA9IC0+IFsgKCB3YWxrX25vbmVtcHR5X3BhcnRzICcnICAgICAgICApLi4uLCBdICksIFtdXG4gICAgQGVxICggzqliYnNmbV9fMTEgPSAtPiBbICggd2Fsa19wYXJ0c1wiYVwiICAgICAgICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJ2EnLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18xMiA9IC0+IFsgKCB3YWxrX3BhcnRzXCJcXG5hXCIgICAgICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJ1xcbmEnLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18xMyA9IC0+IFsgKCB3YWxrX3Jhd19wYXJ0c1wiXFxuYVwiICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJ1xcXFxuYScsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzE0ID0gLT4gWyAoIHdhbGtfcGFydHNcIiN7MX1cIiAgICAgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIHsgdmFsdWU6IDEsIGlzYTogJ3ZhbHVlJywgfSwgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzE1ID0gLT4gWyAoIHdhbGtfbm9uZW1wdHlfcGFydHNcIiN7MX1cIiAgICAgKS4uLiwgXSApLCBbIHsgdmFsdWU6IDEsIGlzYTogJ3ZhbHVlJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzE2ID0gLT4gWyAoIHdhbGtfcGFydHNcImEjezF9XCIgICAgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICdhJywgaXNhOiAnY2h1bmsnLCB9LCB7IHZhbHVlOiAxLCBpc2E6ICd2YWx1ZScsIH0sIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18xNyA9IC0+IFsgKCB3YWxrX3BhcnRzXCIjezF9I3syfVwiICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9LCB7IHZhbHVlOiAxLCBpc2E6ICd2YWx1ZScsIH0sIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIHsgdmFsdWU6IDIsIGlzYTogJ3ZhbHVlJywgfSwgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSBdXG4gICAgQGVxICggzqliYnNmbV9fMTggPSAtPiBbICggd2Fsa19ub25lbXB0eV9wYXJ0c1wiI3sxfSN7Mn1cIiApLi4uLCBdICksIFsgeyB2YWx1ZTogMSwgaXNhOiAndmFsdWUnLCB9LCB7IHZhbHVlOiAyLCBpc2E6ICd2YWx1ZScsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18xOSA9IC0+IFsgKCB3YWxrX3BhcnRzXCJhI3sxfXpcIiAgICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnYScsIGlzYTogJ2NodW5rJywgfSwgeyB2YWx1ZTogMSwgaXNhOiAndmFsdWUnLCB9LCB7IGNodW5rOiAneicsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzIwID0gLT4gWyAoIHdhbGtfcGFydHNcImEjezF9eiN7Mn1cIiAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICdhJywgaXNhOiAnY2h1bmsnLCB9LCB7IHZhbHVlOiAxLCBpc2E6ICd2YWx1ZScsIH0sIHsgY2h1bms6ICd6JywgaXNhOiAnY2h1bmsnLCB9LCB7IHZhbHVlOiAyLCBpc2E6ICd2YWx1ZScsIH0sIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18yMSA9IC0+IFsgKCB3YWxrX3BhcnRzIFwiYSN7MX16I3syfVwiICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnYTF6MicsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzIyID0gLT4gWyAoIHdhbGtfcGFydHMgMTIgICAgICAgICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9LCB7IHZhbHVlOiAxMiwgaXNhOiAndmFsdWUnLCB9LCB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMjMgPSAtPiBbICggd2Fsa19ub25lbXB0eV9wYXJ0cyAxMiAgICAgICAgKS4uLiwgXSApLCBbIHsgdmFsdWU6IDEyLCBpc2E6ICd2YWx1ZScsIH0sIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9uZXh0X2ZyZWVfZmlsZW5hbWU6IC0+XG4gICAgeyBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lLFxuICAgICAgZ2V0X25leHRfZmlsZW5hbWUsXG4gICAgICBleGlzdHMsXG4gICAgICBjYWNoZV9maWxlbmFtZV9yZSwgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfbmV4dF9mcmVlX2ZpbGVuYW1lKClcbiAgICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAdGhyb3dzICggzqliYnNmbV9fMjQgPSAtPiBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lIG51bGwgICAgICAgICksIC9leHBlY3RlZCBhIHRleHQvXG4gICAgQHRocm93cyAoIM6pYmJzZm1fXzI1ID0gLT4gZ2V0X25leHRfZnJlZV9maWxlbmFtZSB1bmRlZmluZWQgICApLCAvZXhwZWN0ZWQgYSB0ZXh0L1xuICAgIEB0aHJvd3MgKCDOqWJic2ZtX18yNiA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgdHJ1ZSAgICAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dC9cbiAgICBAdGhyb3dzICggzqliYnNmbV9fMjcgPSAtPiBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lICcnICAgICAgICAgICksIC9leHBlY3RlZCBhIG5vbmVtcHR5IHRleHQvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgWyAnYScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgZmFsc2UsICd+LmEuMDAwMS5icmljYWJyYWMtY2FjaGUnLCAgICAgICAgICd+LmEuMDAwMS5icmljYWJyYWMtY2FjaGUnLCBdLCBdXG4gICAgICBbICdSRUFETUUubWQnLCAgICAgICAgICAgICAgICAgICAgICAgICAgWyB0cnVlLCAgJ34uUkVBRE1FLm1kLjAwMDEuYnJpY2FicmFjLWNhY2hlJywgJ34uUkVBRE1FLm1kLjAwMDQuYnJpY2FicmFjLWNhY2hlJywgXSwgXVxuICAgICAgWyAnfi5SRUFETUUubWQuMDAwMS5icmljYWJyYWMtY2FjaGUnLCAgIFsgdHJ1ZSwgICd+LlJFQURNRS5tZC4wMDAyLmJyaWNhYnJhYy1jYWNoZScsICd+LlJFQURNRS5tZC4wMDA0LmJyaWNhYnJhYy1jYWNoZScsIF0sIF1cbiAgICAgIFsgJ34uUkVBRE1FLm1kLjAwMDIuYnJpY2FicmFjLWNhY2hlJywgICBbIHRydWUsICAnfi5SRUFETUUubWQuMDAwMy5icmljYWJyYWMtY2FjaGUnLCAnfi5SRUFETUUubWQuMDAwNC5icmljYWJyYWMtY2FjaGUnLCBdLCBdXG4gICAgICBbICd+LlJFQURNRS5tZC4wMDAzLmJyaWNhYnJhYy1jYWNoZScsICAgWyB0cnVlLCAgJ34uUkVBRE1FLm1kLjAwMDQuYnJpY2FicmFjLWNhY2hlJywgJ34uUkVBRE1FLm1kLjAwMDQuYnJpY2FicmFjLWNhY2hlJywgXSwgXVxuICAgICAgWyAnfi5SRUFETUUubWQuMDAwNC5icmljYWJyYWMtY2FjaGUnLCAgIFsgZmFsc2UsICd+LlJFQURNRS5tZC4wMDA1LmJyaWNhYnJhYy1jYWNoZScsICd+LlJFQURNRS5tZC4wMDA1LmJyaWNhYnJhYy1jYWNoZScsIF0sIF1cbiAgICAgIF1cbiAgICBwYXRoX3ByZWZpeCA9IFBBVEgucmVzb2x2ZSBQQVRILmpvaW4gX19kaXJuYW1lLCAnLi4vLi4vLi4vYXNzZXRzL2JyaWNhYnJhYy9maW5kLWZyZWUtZmlsZW5hbWUnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZm9yIFsgcGF0aCwgWyBtYXRjaGVyXzEsIG1hdGNoZXJfMiwgbWF0Y2hlcl8zLCBdLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgYWJzX3BhdGggICAgICA9IFBBVEguam9pbiBwYXRoX3ByZWZpeCwgcGF0aFxuICAgICAgICBhYnNfbWF0Y2hlcl8yID0gUEFUSC5qb2luIHBhdGhfcHJlZml4LCBtYXRjaGVyXzJcbiAgICAgICAgYWJzX21hdGNoZXJfMyA9IFBBVEguam9pbiBwYXRoX3ByZWZpeCwgbWF0Y2hlcl8zXG4gICAgICAgIEBlcSAoIM6pYmJzZm1fXzI4ID0gLT4gZXhpc3RzIGFic19wYXRoICAgICAgICAgICAgICAgICAgICApLCBtYXRjaGVyXzFcbiAgICAgICAgQGVxICggzqliYnNmbV9fMjkgPSAtPiBnZXRfbmV4dF9maWxlbmFtZSAgICAgICBhYnNfcGF0aCAgICksIGFic19tYXRjaGVyXzJcbiAgICAgICAgQGVxICggzqliYnNmbV9fMzAgPSAtPiBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lICBhYnNfcGF0aCAgICksIGFic19tYXRjaGVyXzNcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZm9yIFsgcGF0aCwgWyBtYXRjaGVyXzEsIG1hdGNoZXJfMiwgbWF0Y2hlcl8zLCBdLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgcmVsX3BhdGggICAgICA9IFBBVEgucmVsYXRpdmUgcHJvY2Vzcy5jd2QoKSwgUEFUSC5qb2luIHBhdGhfcHJlZml4LCBwYXRoXG4gICAgICAgIHJlbF9tYXRjaGVyXzIgPSBQQVRILnJlbGF0aXZlIHByb2Nlc3MuY3dkKCksIFBBVEguam9pbiBwYXRoX3ByZWZpeCwgbWF0Y2hlcl8yXG4gICAgICAgIHJlbF9tYXRjaGVyXzMgPSBQQVRILnJlbGF0aXZlIHByb2Nlc3MuY3dkKCksIFBBVEguam9pbiBwYXRoX3ByZWZpeCwgbWF0Y2hlcl8zXG4gICAgICAgIEBlcSAoIM6pYmJzZm1fXzMxID0gLT4gZXhpc3RzIHJlbF9wYXRoICAgICAgICAgICAgICAgICAgICApLCBtYXRjaGVyXzFcbiAgICAgICAgQGVxICggzqliYnNmbV9fMzIgPSAtPiBnZXRfbmV4dF9maWxlbmFtZSAgICAgICByZWxfcGF0aCAgICksIHJlbF9tYXRjaGVyXzJcbiAgICAgICAgQGVxICggzqliYnNmbV9fMzMgPSAtPiBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lICByZWxfcGF0aCAgICksIHJlbF9tYXRjaGVyXzNcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY3VycmVudF9jd2QgPSBQQVRILnJlc29sdmUgcHJvY2Vzcy5jd2QoKVxuICAgICAgcHJvY2Vzcy5jaGRpciBwYXRoX3ByZWZpeFxuICAgICAgdHJ5XG4gICAgICAgIGZvciBbIHBhdGgsIFsgbWF0Y2hlcl8xLCBtYXRjaGVyXzIsIG1hdGNoZXJfMywgXSwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICAgQGVxICggzqliYnNmbV9fMzQgPSAtPiBleGlzdHMgcGF0aCAgICAgICAgICAgICAgICAgICAgKSwgbWF0Y2hlcl8xXG4gICAgICAgICAgQGVxICggzqliYnNmbV9fMzUgPSAtPiBnZXRfbmV4dF9maWxlbmFtZSAgICAgICBwYXRoICAgKSwgbWF0Y2hlcl8yXG4gICAgICAgICAgQGVxICggzqliYnNmbV9fMzYgPSAtPiBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lICBwYXRoICAgKSwgbWF0Y2hlcl8zXG4gICAgICBmaW5hbGx5XG4gICAgICAgIHByb2Nlc3MuY2hkaXIgY3VycmVudF9jd2RcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIGdldF9uZXh0X2ZyZWVfZmlsZW5hbWVfc3dhcF9zdWZmaXg6IC0+XG4gICMgICB7IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUsXG4gICMgICAgIHN3YXBfc3VmZml4LCAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9uZXh0X2ZyZWVfZmlsZW5hbWUoKVxuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgIGRlYnVnICfOqWJic2ZtX18zNycsIGludGVybWVkaWF0ZV9jYWNoZV9wYXRoID0gZ2V0X25leHRfZnJlZV9maWxlbmFtZSAnL3BhdGgvdG8vcmVmZXJlbmNlLnR4dCdcbiAgIyAgIGRlYnVnICfOqWJic2ZtX18zOCcsIGZpbmFsaXplZF9jYWNoZV9wYXRoICAgID0gc3dhcF9zdWZmaXggJy5maW5hbGl6ZWQnXG4gICMgICBAZXEgICAgICggzqliYnNmbV9fMzkgPSAtPiBpbnRlcm1lZGlhdGVfY2FjaGVfcGF0aCAgICAgICAgICAgKSwgJy9wYXRoL3RvL34ucmVmZXJlbmNlLnR4dC4wMDAxLmZpbmFsaXplZCdcbiAgIyAgIHJhdGhlciB1c2UgJy9wYXRoL3RvL34ucmVmZXJlbmNlLnR4dC4wMDAxLmJyaWNhYnJhYy1jYWNoZS5maW5hbGl6ZWQnXG4gICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEFOU0k6IC0+XG4gICAgeyBBTlNJLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaSgpXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzQwID0gLT4gQU5TSS5mZ19mcm9tX2hleCAnI2EwYTFhMicgICAgICAgICAgICksICdcXHgxQlszODoyOjoxNjA6MTYxOjE2Mm0nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzQxID0gLT4gQU5TSS5iZ19mcm9tX2hleCAnI2EwYTFhMicgICAgICAgICAgICksICdcXHgxQls0ODoyOjoxNjA6MTYxOjE2Mm0nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzQyID0gLT4gQU5TSS5mZ19mcm9tX2RlYyBbIDE2MCwgMTYxLCAxNjIgXSAgICksICdcXHgxQlszODoyOjoxNjA6MTYxOjE2Mm0nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzQzID0gLT4gQU5TSS5iZ19mcm9tX2RlYyBbIDE2MCwgMTYxLCAxNjIgXSAgICksICdcXHgxQls0ODoyOjoxNjA6MTYxOjE2Mm0nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzQ0ID0gLT4gQU5TSS5kZWNfZnJvbV9oZXggJyNhMGExYTInICAgICAgICAgICksIFsgMTYwLCAxNjEsIDE2MiBdXG4gICAgQHRocm93cyAoIM6pYmJzZm1fXzQ1ID0gLT4gQU5TSS5kZWNfZnJvbV9oZXggJyN4eHh4eHgnICAgICAgICAgICksIC9ub3QgYSBwcm9wZXIgaGV4YWRlY2ltYWwgUkdCIGNvZGU6ICcjeHh4eHh4Jy9cbiAgICBAdGhyb3dzICggzqliYnNmbV9fNDYgPSAtPiBBTlNJLmRlY19mcm9tX2hleCAnI2FhYWFhJyAgICAgICAgICAgKSwgL25vdCBhIHByb3BlciBoZXhhZGVjaW1hbCBSR0IgY29kZTogJyNhYWFhYScvXG4gICAgQHRocm93cyAoIM6pYmJzZm1fXzQ3ID0gLT4gQU5TSS5kZWNfZnJvbV9oZXggJyNhYWFhYWJiJyAgICAgICAgICksIC9ub3QgYSBwcm9wZXIgaGV4YWRlY2ltYWwgUkdCIGNvZGU6ICcjYWFhYWFiYicvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVxdWlyZV9hbnNpX2NvbG9yc19hbmRfZWZmZWN0czogLT5cbiAgICB7IGFuc2lfY29sb3JzX2FuZF9lZmZlY3RzOiBDLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHMoKVxuICAgIEBlcSAgICAgKCDOqWJic2ZtX180OCA9IC0+IEMucmVkICAgICAgICAgICAgICApLCAnXFx4MUJbMzg6Mjo6MjU1OjA6MTZtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX180OSA9IC0+IEMuYmdfcmVkICAgICAgICAgICApLCAnXFx4MUJbNDg6Mjo6MjU1OjA6MTZtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX181MCA9IC0+IEMub3ZlcmxpbmUxICAgICAgICApLCAnXFx4MWJbNTNtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX181MSA9IC0+IEMub3ZlcmxpbmUwICAgICAgICApLCAnXFx4MWJbNTVtJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX181MiA9IC0+IEMuZGVmYXVsdCAgICAgICAgICApLCAnXFx4MWJbMzltJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX181MyA9IC0+IEMuYmdfZGVmYXVsdCAgICAgICApLCAnXFx4MWJbNDltJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtX181NCA9IC0+IEMucmVzZXQgICAgICAgICAgICApLCAnXFx4MWJbMG0nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVxdWlyZV9hbnNpX2NodW5rZXI6IC0+XG4gICAgeyBhbnNpX2NvbG9yc19hbmRfZWZmZWN0czogQywgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2lfY29sb3JzX2FuZF9lZmZlY3RzKClcbiAgICB7IEFuc2lfY2h1bmtlciwgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaV9jaHVua2VyKClcbiAgICBkbyA9PlxuICAgICAgZWNobyAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICAgICAgdGV4dCAgPSBcIkFCQyN7IEMuYmxhY2sgKyBDLmJnX3JlZCArIEMuYm9sZCArICdERUYnICsgQy5ib2xkMCArIEMuZGVmYXVsdCArIEMuYmdfZGVmYXVsdCB9WFlaXCJcbiAgICAgIGFjICAgID0gbmV3IEFuc2lfY2h1bmtlcigpXG4gICAgICB1cmdlICfOqWJic2ZtX181NScsICAgICAgICAgICAgICAgIGFjLmNodW5raWZ5IHRleHRcbiAgICAgICMgaW5mbyAnzqliYnNmbV9fNTYnLCBkIGZvciBkIGZyb20gKCBhYy5jaHVua2lmeSB0ZXh0ICkuY2h1bmtzXG4gICAgICBpbmZvICfOqWJic2ZtX181NycsIGQgZm9yIGQgZnJvbSBhY1xuICAgICAgaW5mbyAnzqliYnNmbV9fNTgnLCBhYy53aWR0aFxuICAgICAgaW5mbyAnzqliYnNmbV9fNTknLCBhYy5sZW5ndGhcbiAgICAgIGluZm8gJ86pYmJzZm1fXzYwJywgYWMuaGFzX2Fuc2lcbiAgICAgIGluZm8gJ86pYmJzZm1fXzYxJywgYWMudGV4dFxuICAgIGRvID0+XG4gICAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICB0ZXh0ICA9ICdBQkNERUZYWVonXG4gICAgICBhYyAgICA9IG5ldyBBbnNpX2NodW5rZXIoKVxuICAgICAgdXJnZSAnzqliYnNmbV9fNjInLCAgICAgICAgICAgICAgICBhYy5jaHVua2lmeSB0ZXh0XG4gICAgICAjIGluZm8gJ86pYmJzZm1fXzYzJywgZCBmb3IgZCBmcm9tICggYWMuY2h1bmtpZnkgdGV4dCApLmNodW5rc1xuICAgICAgaW5mbyAnzqliYnNmbV9fNjQnLCBkIGZvciBkIGZyb20gYWNcbiAgICAgIGluZm8gJ86pYmJzZm1fXzY1JywgYWMud2lkdGhcbiAgICAgIGluZm8gJ86pYmJzZm1fXzY2JywgYWMubGVuZ3RoXG4gICAgICBpbmZvICfOqWJic2ZtX182NycsIGFjLmhhc19hbnNpXG4gICAgICBpbmZvICfOqWJic2ZtX182OCcsIGFjLnRleHRcbiAgICBkbyA9PlxuICAgICAgZWNobyAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICAgICAgdGV4dCAgPSBcIiN7IEMuYmxhY2sgKyBDLmJnX3JlZCArIEMuYm9sZCArIEMuYm9sZDAgKyBDLmRlZmF1bHQgKyBDLmJnX2RlZmF1bHQgfVwiXG4gICAgICBhYyAgICA9IG5ldyBBbnNpX2NodW5rZXIoKVxuICAgICAgdXJnZSAnzqliYnNmbV9fNjknLCAgICAgICAgICAgICAgICBhYy5jaHVua2lmeSB0ZXh0XG4gICAgICAjIGluZm8gJ86pYmJzZm1fXzcwJywgZCBmb3IgZCBmcm9tICggYWMuY2h1bmtpZnkgdGV4dCApLmNodW5rc1xuICAgICAgaW5mbyAnzqliYnNmbV9fNzEnLCBkIGZvciBkIGZyb20gYWNcbiAgICAgIGluZm8gJ86pYmJzZm1fXzcyJywgYWMud2lkdGhcbiAgICAgIGluZm8gJ86pYmJzZm1fXzczJywgYWMubGVuZ3RoXG4gICAgICBpbmZvICfOqWJic2ZtX183NCcsIGFjLmhhc19hbnNpXG4gICAgICBpbmZvICfOqWJic2ZtX183NScsIGFjLnRleHRcbiAgICBkbyA9PlxuICAgICAgZWNobyAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICAgICAgdGV4dCAgPSAnJ1xuICAgICAgYWMgICAgPSBuZXcgQW5zaV9jaHVua2VyKClcbiAgICAgIHVyZ2UgJ86pYmJzZm1fXzc2JywgICAgICAgICAgICAgICAgYWMuY2h1bmtpZnkgdGV4dFxuICAgICAgIyBpbmZvICfOqWJic2ZtX183NycsIGQgZm9yIGQgZnJvbSAoIGFjLmNodW5raWZ5IHRleHQgKS5jaHVua3NcbiAgICAgIGluZm8gJ86pYmJzZm1fXzc4JywgZCBmb3IgZCBmcm9tIGFjXG4gICAgICBpbmZvICfOqWJic2ZtX183OScsIGFjLndpZHRoXG4gICAgICBpbmZvICfOqWJic2ZtX184MCcsIGFjLmxlbmd0aFxuICAgICAgaW5mbyAnzqliYnNmbV9fODEnLCBhYy5oYXNfYW5zaVxuICAgICAgaW5mbyAnzqliYnNmbV9fODInLCBhYy50ZXh0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVxdWlyZV9zdHJpcF9hbnNpOiAtPlxuICAgIHsgc3RyaXBfYW5zaSwgaW50ZXJuYWxzOlxuICAgICAgeyBhbnNpX3JlLFxuICAgICAgICBvd25fc2luZ2xlX2Fuc2lfcmUsICAgICB9IH0gPSBTRk1PRFVMRVMucmVxdWlyZV9zdHJpcF9hbnNpKClcbiAgICB7IGFuc2lfY29sb3JzX2FuZF9lZmZlY3RzOiBDLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHMoKVxuICAgIGRvID0+XG4gICAgICB0ZXh0ICA9IFwiQUJDI3sgQy5ibGFjayArIEMuYmdfcmVkICsgQy5ib2xkICsgJ0RFRicgKyBDLmJvbGQwICsgQy5kZWZhdWx0ICsgQy5iZ19kZWZhdWx0IH1YWVpcIlxuICAgICAgdXJnZSAnzqliYnNmbV9fODMnLCBycHIgc3RyaXBfYW5zaSB0ZXh0XG4gICAgICBpbmZvICfOqWJic2ZtX184NCcsIHJwciB0ZXh0LnNwbGl0IGFuc2lfcmVcbiAgICAgIGluZm8gJ86pYmJzZm1fXzg1JywgcnByIHRleHQuc3BsaXQgb3duX3NpbmdsZV9hbnNpX3JlXG4gICAgICBAZXEgKCDOqWJic2ZtX184NiA9IC0+IHN0cmlwX2Fuc2kgdGV4dCApLCAnQUJDREVGWFlaJ1xuICAgIGRvID0+XG4gICAgICB0ZXh0ICA9ICdBQkNERUZYWVonXG4gICAgICB1cmdlICfOqWJic2ZtX184NycsIHJwciBzdHJpcF9hbnNpIHRleHRcbiAgICAgIEBlcSAoIM6pYmJzZm1fXzg4ID0gLT4gc3RyaXBfYW5zaSB0ZXh0ICksICdBQkNERUZYWVonXG4gICAgZG8gPT5cbiAgICAgIHRleHQgID0gXCIjeyBDLmJsYWNrICsgQy5iZ19yZWQgKyBDLmJvbGQgKyBDLmJvbGQwICsgQy5kZWZhdWx0ICsgQy5iZ19kZWZhdWx0IH1cIlxuICAgICAgdXJnZSAnzqliYnNmbV9fODknLCBycHIgc3RyaXBfYW5zaSB0ZXh0XG4gICAgICBAZXEgKCDOqWJic2ZtX185MCA9IC0+IHN0cmlwX2Fuc2kgdGV4dCApLCAnJ1xuICAgIGRvID0+XG4gICAgICB0ZXh0ICA9ICcnXG4gICAgICB1cmdlICfOqWJic2ZtX185MScsIHJwciBzdHJpcF9hbnNpIHRleHRcbiAgICAgIEBlcSAoIM6pYmJzZm1fXzkyID0gLT4gc3RyaXBfYW5zaSB0ZXh0ICksICcnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVxdWlyZV9nZXRfY2FsbHNpdGU6IC0+XG4gICAgeyBnZXRfY2FsbHNpdGUsXG4gICAgICBnZXRfYXBwX2RldGFpbHMsXG4gICAgICByZXF1aXJlX2Zyb21fYXBwX2ZvbGRlcixcbiAgICAgIGdldF9icmljYWJyYWNfY2ZnLCAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9jYWxsc2l0ZSgpXG4gICAgUEFUSCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gICAgVVJMICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnVybCdcbiAgICBhcHBfcGF0aCAgICAgICAgICAgICAgICAgICAgICA9IFBBVEgucmVzb2x2ZSBQQVRILmpvaW4gX19kaXJuYW1lLCAnLi4vLi4vLi4vJ1xuICAgIHBhY2thZ2VfcGF0aCAgICAgICAgICAgICAgICAgID0gUEFUSC5qb2luIGFwcF9wYXRoLCAncGFja2FnZS5qc29uJ1xuICAgIHZlcnNpb24gICAgICAgICAgICAgICAgICAgICAgID0gKCByZXF1aXJlICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nICkudmVyc2lvblxuICAgIG5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgID0gKCByZXF1aXJlICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nICkubmFtZVxuICAgIGZhbGxiYWNrICAgICAgICAgICAgICAgICAgICAgID0gU3ltYm9sICdmYWxsYmFjaydcbiAgICBicmljYWJyYWNfY2ZnXzEgICAgICAgICAgICAgICA9IHJlcXVpcmVfZnJvbV9hcHBfZm9sZGVyIHsgcGF0aDogJ2JyaWNhYnJhYy5jZmcuanMnLCB9XG4gICAgYnJpY2FicmFjX2NmZ18yICAgICAgICAgICAgICAgPSBnZXRfYnJpY2FicmFjX2NmZygpXG4gICAgYXBwICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBnZXRfYXBwX2RldGFpbHMoKVxuICAgIGRhdGFzdG9yZV9wYXRoICAgICAgICAgICAgICAgID0gUEFUSC5qb2luIGFwcC5wYXRoLCAnaGVuZ2lzdC1uZy5zcWxpdGUnXG4gICAgY2FsbHNpdGUgICAgICAgICAgICAgICAgICAgICAgPSBnZXRfY2FsbHNpdGUgeyBzb3VyY2VtYXBwZWQ6IGZhbHNlLCB9XG4gICAgZGVidWcgJ86pYmJzZm1fXzkzJywgYnJpY2FicmFjX2NmZ18yXG4gICAgIyBAZXEgKCDOqWJic2ZtX185NCA9IC0+IFVSTC5maWxlVVJMVG9QYXRoIGNhbGxzaXRlLnNjcmlwdE5hbWUgICAgICAgICAgICAgICAgICksIF9fZmlsZW5hbWVcbiAgICBAZXEgICAgICggzqliYnNmbV9fOTUgPSAtPiBjYWxsc2l0ZS5zY3JpcHROYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgX19maWxlbmFtZVxuICAgIEBlcSAgICAgKCDOqWJic2ZtX185NiA9IC0+IGFwcC5wYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBhcHBfcGF0aFxuICAgIEBlcSAgICAgKCDOqWJic2ZtX185NyA9IC0+IGFwcC5wYWNrYWdlX3BhdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBwYWNrYWdlX3BhdGhcbiAgICBAZXEgICAgICggzqliYnNmbV9fOTggPSAtPiBhcHAudmVyc2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgdmVyc2lvblxuICAgIEBlcSAgICAgKCDOqWJic2ZtX185OSA9IC0+IGFwcC5uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBuYW1lXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTAwID0gLT4gYnJpY2FicmFjX2NmZ18xLmRhdGFzdG9yZS5uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdoZW5naXN0LW5nJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtXzEwMSA9IC0+IGdldF9icmljYWJyYWNfY2ZnIHsgcGF0aDogJ25vc3VjaHBhdGgnLCBmYWxsYmFjaywgfSAgICksIGZhbGxiYWNrXG4gICAgQHRocm93cyAoIM6pYmJzZm1fMTAyID0gLT4gZ2V0X2JyaWNhYnJhY19jZmcgeyBwYXRoOiAnbm9zdWNocGF0aCcsIH0gICAgICAgICAgICAgKSwgL0Nhbm5vdCBmaW5kIG1vZHVsZS9pXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTAzID0gLT4gYnJpY2FicmFjX2NmZ18yLmRhdGFzdG9yZS5uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdoZW5naXN0LW5nJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtXzEwNCA9IC0+IGJyaWNhYnJhY19jZmdfMi5kYXRhc3RvcmUucGF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBkYXRhc3RvcmVfcGF0aFxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzEwNSA9IC0+IGJyaWNhYnJhY19jZmdfMi5hcHAubmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBuYW1lXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVxdWlyZV9nZXRfY2FsbHNpdGU6IC0+XG4gICAgeyBnZXRfY2FsbHNpdGUsXG4gICAgICBnZXRfY2FsbHNpdGVfcGF0aCwgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfY2FsbHNpdGUoKVxuICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgIFVSTCAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTp1cmwnXG4gICAgYXBwX3BhdGggICAgICAgICAgICAgICAgICAgICAgPSBQQVRILnJlc29sdmUgUEFUSC5qb2luIF9fZGlybmFtZSwgJy4uLy4uLy4uLydcbiAgICBwYWNrYWdlX3BhdGggICAgICAgICAgICAgICAgICA9IFBBVEguam9pbiBhcHBfcGF0aCwgJ3BhY2thZ2UuanNvbidcbiAgICB2ZXJzaW9uICAgICAgICAgICAgICAgICAgICAgICA9ICggcmVxdWlyZSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJyApLnZlcnNpb25cbiAgICBuYW1lICAgICAgICAgICAgICAgICAgICAgICAgICA9ICggcmVxdWlyZSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJyApLm5hbWVcbiAgICBmYWxsYmFjayAgICAgICAgICAgICAgICAgICAgICA9IFN5bWJvbCAnZmFsbGJhY2snXG4gICAgY2FsbHNpdGUgICAgICAgICAgICAgICAgICAgICAgPSBnZXRfY2FsbHNpdGUgeyBzb3VyY2VtYXBwZWQ6IGZhbHNlLCB9XG4gICAgZmlsZW5hbWUgICAgICAgICAgICAgICAgICAgICAgPSBfX2ZpbGVuYW1lLnJlcGxhY2UgL14oLispXFwvbGliXFwvKFteXFwvXSs/KVxcLmpzLywgJyQxL3NyYy8kMi5jb2ZmZWUnXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTA2ID0gLT4gY2FsbHNpdGUuc2NyaXB0TmFtZSApLCBfX2ZpbGVuYW1lXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTA3ID0gLT4gZ2V0X2NhbGxzaXRlX3BhdGgoKSApLCBmaWxlbmFtZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcXVpcmVfZ2V0X2FwcF9kZXRhaWxzOiAtPlxuICAgIHsgZ2V0X2FwcF9kZXRhaWxzLFxuICAgICAgcmVxdWlyZV9mcm9tX2FwcF9mb2xkZXIsXG4gICAgICBnZXRfYnJpY2FicmFjX2NmZywgfSAgICAgICAgPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfYXBwX2RldGFpbHMoKVxuICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgIFVSTCAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTp1cmwnXG4gICAgYXBwX3BhdGggICAgICAgICAgICAgICAgICAgICAgPSBQQVRILnJlc29sdmUgUEFUSC5qb2luIF9fZGlybmFtZSwgJy4uLy4uLy4uLydcbiAgICBwYWNrYWdlX3BhdGggICAgICAgICAgICAgICAgICA9IFBBVEguam9pbiBhcHBfcGF0aCwgJ3BhY2thZ2UuanNvbidcbiAgICB2ZXJzaW9uICAgICAgICAgICAgICAgICAgICAgICA9ICggcmVxdWlyZSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJyApLnZlcnNpb25cbiAgICBuYW1lICAgICAgICAgICAgICAgICAgICAgICAgICA9ICggcmVxdWlyZSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJyApLm5hbWVcbiAgICBmYWxsYmFjayAgICAgICAgICAgICAgICAgICAgICA9IFN5bWJvbCAnZmFsbGJhY2snXG4gICAgYnJpY2FicmFjX2NmZ18xICAgICAgICAgICAgICAgPSByZXF1aXJlX2Zyb21fYXBwX2ZvbGRlciB7IHBhdGg6ICdicmljYWJyYWMuY2ZnLmpzJywgfVxuICAgIGJyaWNhYnJhY19jZmdfMiAgICAgICAgICAgICAgID0gZ2V0X2JyaWNhYnJhY19jZmcoKVxuICAgIGFwcCAgICAgICAgICAgICAgICAgICAgICAgICAgID0gZ2V0X2FwcF9kZXRhaWxzKClcbiAgICBkYXRhc3RvcmVfcGF0aCAgICAgICAgICAgICAgICA9IFBBVEguam9pbiBhcHAucGF0aCwgJ2hlbmdpc3Qtbmcuc3FsaXRlJ1xuICAgICMgZGVidWcgJ86pYmJzZm1fMTA4JywgYnJpY2FicmFjX2NmZ18yXG4gICAgIyBAZXEgKCDOqWJic2ZtXzEwOSA9IC0+IFVSTC5maWxlVVJMVG9QYXRoIGNhbGxzaXRlLnNjcmlwdE5hbWUgICAgICAgICAgICAgICAgICksIF9fZmlsZW5hbWVcbiAgICBAZXEgICAgICggzqliYnNmbV8xMTAgPSAtPiBhcHAucGF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgYXBwX3BhdGhcbiAgICBAZXEgICAgICggzqliYnNmbV8xMTEgPSAtPiBhcHAucGFja2FnZV9wYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgcGFja2FnZV9wYXRoXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTEyID0gLT4gYXBwLnZlcnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHZlcnNpb25cbiAgICBAZXEgICAgICggzqliYnNmbV8xMTMgPSAtPiBhcHAubmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbmFtZVxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzExNCA9IC0+IGJyaWNhYnJhY19jZmdfMS5kYXRhc3RvcmUubmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnaGVuZ2lzdC1uZydcbiAgICBAZXEgICAgICggzqliYnNmbV8xMTUgPSAtPiBnZXRfYnJpY2FicmFjX2NmZyB7IHBhdGg6ICdub3N1Y2hwYXRoJywgZmFsbGJhY2ssIH0gICAgICAgKSwgZmFsbGJhY2tcbiAgICBAdGhyb3dzICggzqliYnNmbV8xMTYgPSAtPiBnZXRfYnJpY2FicmFjX2NmZyB7IHBhdGg6ICdub3N1Y2hwYXRoJywgICAgICAgICAgIH0gICAgICAgKSwgL0Nhbm5vdCBmaW5kIG1vZHVsZS9pXG4gICAgQGVxICAgICAoIM6pYmJzZm1fMTE3ID0gLT4gYnJpY2FicmFjX2NmZ18yLmRhdGFzdG9yZS5uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICdoZW5naXN0LW5nJ1xuICAgIEBlcSAgICAgKCDOqWJic2ZtXzExOCA9IC0+IGJyaWNhYnJhY19jZmdfMi5kYXRhc3RvcmUucGF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBkYXRhc3RvcmVfcGF0aFxuICAgIEBlcSAgICAgKCDOqWJic2ZtXzExOSA9IC0+IGJyaWNhYnJhY19jZmdfMi5hcHAubmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBuYW1lXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVxdWlyZV9kYnJpYzogLT5cbiAgICB7IERicmljLFxuICAgICAgU1FMLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIGRlYnVnICfOqWJic2ZtXzEyMCcsIG5ldyBEYnJpYyAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsYXNzIERicmljX3N0b3JlIGV4dGVuZHMgRGJyaWNcbiAgICAgIEBzdGF0ZW1lbnRzOlxuICAgICAgICAjIHN0b3JlX2NyZWF0ZV90YWJsZXM6IFNRTFwiXCJcIlxuICAgICAgICAjICAgXCJcIlwiXG4gICAgICAgIHN0b3JlX2NyZWF0ZV90YWJsZXM6IFNRTFwiXCJcIlxuICAgICAgICAgIGNyZWF0ZSB0YWJsZSBzdG9yZV9mYWNldHMgKFxuICAgICAgICAgICAgZmFjZXRfa2V5ICAgICAgICAgICAgIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgICAgZmFjZXRfdmFsdWUgICAgICAgICAgIGpzb24gKTtcIlwiXCJcbiAgICAgICAgc3RvcmVfaW5zZXJ0X2ZhY2V0OiBTUUxcIlwiXCJcbiAgICAgICAgICBpbnNlcnQgaW50byBzdG9yZV9mYWNldHMgKCBmYWNldF9rZXksIGZhY2V0X3ZhbHVlICkgdmFsdWVzICggJGZhY2V0X2tleSwgJGZhY2V0X3ZhbHVlIClcbiAgICAgICAgICAgIG9uIGNvbmZsaWN0ICggZmFjZXRfa2V5ICkgZG8gdXBkYXRlIHNldCBmYWNldF92YWx1ZSA9IGV4Y2x1ZGVkLmZhY2V0X3ZhbHVlO1wiXCJcIlxuICAgICAgICBzdG9yZV9nZXRfZmFjZXRzOiBTUUxcIlwiXCJcbiAgICAgICAgICBzZWxlY3QgKiBmcm9tIHN0b3JlX2ZhY2V0cyBvcmRlciBieSBmYWNldF9rZXk7XCJcIlwiXG5cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGlzX3JlYWR5OiAtPlxuICAgICAgICBkYm9zID0gQF9nZXRfZGJfb2JqZWN0cygpXG4gICAgICAgIHJldHVybiBmYWxzZSB1bmxlc3MgZGJvcy5zdG9yZV9mYWNldHM/LnR5cGUgaXMgJ3RhYmxlJ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBkbyA9PlxuICAgICAgZGVidWcgJ86pYmJzZm1fMTIxJywgbmV3IERicmljX3N0b3JlICcvZGV2L3NobS9icmljYWJyYWMuc3FsaXRlJ1xuICAgICAgZGJzID0gRGJyaWNfc3RvcmUub3BlbiAnL2Rldi9zaG0vYnJpY2FicmFjLnNxbGl0ZSdcbiAgICAgIGRicy5zdGF0ZW1lbnRzLnN0b3JlX2NyZWF0ZV90YWJsZXMucnVuKClcbiAgICAgIGZvciByb3cgZnJvbSBkYnMuc3RhdGVtZW50cy5nZXRfc2NoZW1hLml0ZXJhdGUoKVxuICAgICAgICBoZWxwICfOqWJic2ZtXzEyMycsIHJvd1xuICAgICAgZGJzLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ29uZScsICAgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgMSAgICAgICApLCB9XG4gICAgICBkYnMuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndHdvJywgICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSAyICAgICAgICksIH1cbiAgICAgIGRicy5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICd0aHJlZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IDMgICAgICAgKSwgfVxuICAgICAgZGJzLnN0YXRlbWVudHMuc3RvcmVfaW5zZXJ0X2ZhY2V0LnJ1biB7IGZhY2V0X2tleTogJ3RocmVlJywgZmFjZXRfdmFsdWU6ICggSlNPTi5zdHJpbmdpZnkgJ2lpaScgICApLCB9XG4gICAgICBkYnMuc3RhdGVtZW50cy5zdG9yZV9pbnNlcnRfZmFjZXQucnVuIHsgZmFjZXRfa2V5OiAndHJ1ZScsICBmYWNldF92YWx1ZTogKCBKU09OLnN0cmluZ2lmeSB0cnVlICAgICksIH1cbiAgICAgIGRicy5zdGF0ZW1lbnRzLnN0b3JlX2luc2VydF9mYWNldC5ydW4geyBmYWNldF9rZXk6ICdmYWxzZScsIGZhY2V0X3ZhbHVlOiAoIEpTT04uc3RyaW5naWZ5IGZhbHNlICAgKSwgfVxuICAgICAgZm9yIHJvdyBmcm9tIGRicy5zdGF0ZW1lbnRzLnN0b3JlX2dldF9mYWNldHMuaXRlcmF0ZSgpXG4gICAgICAgIHJvdyA9IHsgcm93Li4uLCB7IGZhY2V0X3ZhbHVlOiAoIEpTT04ucGFyc2Ugcm93LmZhY2V0X3ZhbHVlICksIF92OiByb3cuZmFjZXRfdmFsdWUsIH0uLi4sIH1cbiAgICAgICAgaGVscCAnzqliYnNmbV8xMjQnLCByb3dcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9nZXRfYXBwX2RldGFpbHM6IHRlc3RzLnJlcXVpcmVfZ2V0X2FwcF9kZXRhaWxzLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgcmVxdWlyZV9kYnJpYzogdGVzdHMucmVxdWlyZV9kYnJpYywgfVxuXG4iXX0=
//# sourceURL=../src/test-bricabrac-single-file-modules.coffee