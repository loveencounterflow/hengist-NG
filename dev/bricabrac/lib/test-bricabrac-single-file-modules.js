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
      ({get_next_free_filename, get_next_filename, exists, cache_filename_re} = SFMODULES.require_next_free_filename());
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
    //---------------------------------------------------------------------------------------------------------
    ANSI: function() {
      var ANSI, Ωbbsfm__37, Ωbbsfm__38, Ωbbsfm__39, Ωbbsfm__40, Ωbbsfm__41, Ωbbsfm__42, Ωbbsfm__43, Ωbbsfm__44;
      ({ANSI} = SFMODULES.require_ansi());
      this.eq((Ωbbsfm__37 = function() {
        return ANSI.fg_from_hex('#a0a1a2');
      }), '\x1B[38:2::160:161:162m');
      this.eq((Ωbbsfm__38 = function() {
        return ANSI.bg_from_hex('#a0a1a2');
      }), '\x1B[48:2::160:161:162m');
      this.eq((Ωbbsfm__39 = function() {
        return ANSI.fg_from_dec([160, 161, 162]);
      }), '\x1B[38:2::160:161:162m');
      this.eq((Ωbbsfm__40 = function() {
        return ANSI.bg_from_dec([160, 161, 162]);
      }), '\x1B[48:2::160:161:162m');
      this.eq((Ωbbsfm__41 = function() {
        return ANSI.dec_from_hex('#a0a1a2');
      }), [160, 161, 162]);
      this.throws((Ωbbsfm__42 = function() {
        return ANSI.dec_from_hex('#xxxxxx');
      }), /not a proper hexadecimal RGB code: '#xxxxxx'/);
      this.throws((Ωbbsfm__43 = function() {
        return ANSI.dec_from_hex('#aaaaa');
      }), /not a proper hexadecimal RGB code: '#aaaaa'/);
      this.throws((Ωbbsfm__44 = function() {
        return ANSI.dec_from_hex('#aaaaabb');
      }), /not a proper hexadecimal RGB code: '#aaaaabb'/);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    require_ansi_colors_and_effects: function() {
      var C, Ωbbsfm__45, Ωbbsfm__46, Ωbbsfm__47, Ωbbsfm__48, Ωbbsfm__49, Ωbbsfm__50, Ωbbsfm__51;
      ({
        ansi_colors_and_effects: C
      } = SFMODULES.require_ansi_colors_and_effects());
      this.eq((Ωbbsfm__45 = function() {
        return C.red;
      }), '\x1B[38:2::255:0:16m');
      this.eq((Ωbbsfm__46 = function() {
        return C.bg_red;
      }), '\x1B[48:2::255:0:16m');
      this.eq((Ωbbsfm__47 = function() {
        return C.overline1;
      }), '\x1b[53m');
      this.eq((Ωbbsfm__48 = function() {
        return C.overline0;
      }), '\x1b[55m');
      this.eq((Ωbbsfm__49 = function() {
        return C.default;
      }), '\x1b[39m');
      this.eq((Ωbbsfm__50 = function() {
        return C.bg_default;
      }), '\x1b[49m');
      this.eq((Ωbbsfm__51 = function() {
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
        urge('Ωbbsfm__52', ac.chunkify(text));
        for (d of ac) {
          // info 'Ωbbsfm__53', d for d from ( ac.chunkify text ).chunks
          info('Ωbbsfm__54', d);
        }
        info('Ωbbsfm__55', ac.width);
        info('Ωbbsfm__56', ac.length);
        info('Ωbbsfm__57', ac.has_ansi);
        return info('Ωbbsfm__58', ac.text);
      })();
      (() => {
        var ac, d, text;
        echo('—————————————————————————————————————————————');
        text = 'ABCDEFXYZ';
        ac = new Ansi_chunker();
        urge('Ωbbsfm__59', ac.chunkify(text));
        for (d of ac) {
          // info 'Ωbbsfm__60', d for d from ( ac.chunkify text ).chunks
          info('Ωbbsfm__61', d);
        }
        info('Ωbbsfm__62', ac.width);
        info('Ωbbsfm__63', ac.length);
        info('Ωbbsfm__64', ac.has_ansi);
        return info('Ωbbsfm__65', ac.text);
      })();
      (() => {
        var ac, d, text;
        echo('—————————————————————————————————————————————');
        text = `${C.black + C.bg_red + C.bold + C.bold0 + C.default + C.bg_default}`;
        ac = new Ansi_chunker();
        urge('Ωbbsfm__66', ac.chunkify(text));
        for (d of ac) {
          // info 'Ωbbsfm__67', d for d from ( ac.chunkify text ).chunks
          info('Ωbbsfm__68', d);
        }
        info('Ωbbsfm__69', ac.width);
        info('Ωbbsfm__70', ac.length);
        info('Ωbbsfm__71', ac.has_ansi);
        return info('Ωbbsfm__72', ac.text);
      })();
      (() => {
        var ac, d, text;
        echo('—————————————————————————————————————————————');
        text = '';
        ac = new Ansi_chunker();
        urge('Ωbbsfm__73', ac.chunkify(text));
        for (d of ac) {
          // info 'Ωbbsfm__74', d for d from ( ac.chunkify text ).chunks
          info('Ωbbsfm__75', d);
        }
        info('Ωbbsfm__76', ac.width);
        info('Ωbbsfm__77', ac.length);
        info('Ωbbsfm__78', ac.has_ansi);
        return info('Ωbbsfm__79', ac.text);
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
      return (new Test(guytest_cfg)).test({tests});
    })();
  }

  // f = ( ctx ) -> debug 'Ωbbsfm__80', ctx.arguments
// g = ( P... ) -> debug 'Ωbbsfm__81', f { arguments, }
// g 5, 'd'

}).call(this);

//# sourceMappingURL=test-bricabrac-single-file-modules.js.map