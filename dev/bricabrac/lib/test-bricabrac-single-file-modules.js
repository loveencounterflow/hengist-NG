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
    //   debug 'Ωbbsfm__52', intermediate_cache_path = get_next_free_filename '/path/to/reference.txt'
    //   debug 'Ωbbsfm__52', finalized_cache_path    = swap_suffix '.finalized'
    //   @eq     ( Ωbbsfm__37 = -> intermediate_cache_path           ), '/path/to/~.reference.txt.0001.finalized'
    //   rather use '/path/to/~.reference.txt.0001.bricabrac-cache.finalized'
    //   #.......................................................................................................
    //   return null

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
    },
    //---------------------------------------------------------------------------------------------------------
    require_ansi_chunker: function() {
      var Ansi_chunker, C;
      ({
        ansi_colors_and_effects: C
      } = SFMODULES.require_ansi_colors_and_effects());
      ({Ansi_chunker} = SFMODULES.require_ansi_chunker());
      (() => {        //.......................................................................................................
        debug('Ωbbsfm__52', require('wcwidth.js'));
        debug('Ωbbsfm__52', require('wcstring'));
        /*
        Excluded:

          * [**`wcsize`**](https://github.com/martinheidegger/wcsize): not very well usable in modern
            environments as `wcsize`, according to the docs, "differ[...]s from both [`wcwidth` and
            `visualwidth-js`] by only returning the width of one character (as integer!)", meaning that it
            cannot, by construction, handle composed Latin accented letters, or let alone multi-codepoint
            emoji. It also struggles with Unicode surrogate handling, at least in trying to make sense of them
            in the `README.md`.

          * [**`visualwidth-js`**](https://github.com/tokuhirom/visualwidth-js): too old, started ca. 2011,
            last commit from ca. 2015

         */
        return null;
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

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCRztFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBRUg7QUFGRyxNQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUtILEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsK0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUEzQkc7OztFQTZCSCxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSw2Q0FBUixFQWhDekI7OztFQXVDSCxJQUFDLENBQUEsS0FBRCxHQUFTLEtBQUEsR0FHUCxDQUFBOztJQUFBLGNBQUEsRUFBZ0IsUUFBQSxDQUFBLENBQUE7QUFDbEIsVUFBQSxFQUFBLEVBQUEsY0FBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsY0FBRixDQUFBLEdBQXVDLFNBQVMsQ0FBQyxvQkFBVixDQUFBLENBQXZDO01BQ0EsRUFBQSxHQUFLLFFBQUEsQ0FBQSxHQUFFLENBQUYsQ0FBQTtlQUFZLGNBQUEsQ0FBZSxHQUFBLENBQWY7TUFBWjtNQUNMLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxFQUFBLENBQUE7TUFBSCxDQUFmLENBQUosRUFBMEMsS0FBMUM7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsRUFBQSxDQUFHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQUg7TUFBSCxDQUFmLENBQUosRUFBMEMsS0FBMUM7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsRUFBRSxDQUFBLFlBQUE7TUFBTCxDQUFmLENBQUosRUFBMEMsSUFBMUM7QUFDQSxhQUFPO0lBTk8sQ0FBaEI7O0lBU0EsZ0JBQUEsRUFBa0IsUUFBQSxDQUFBLENBQUE7QUFDcEIsVUFBQSxnQkFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsZ0JBQUYsQ0FBQSxHQUF3QixTQUFTLENBQUMsd0JBQVYsQ0FBQSxDQUF4QjtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxnQkFBQSxDQUFpQixFQUFqQjtNQUFILENBQWYsQ0FBSixFQUFnRSxFQUFoRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxnQkFBQSxDQUFpQixLQUFqQjtNQUFILENBQWYsQ0FBSixFQUFnRSxLQUFoRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxnQkFBQSxDQUFpQixxQkFBakI7TUFBSCxDQUFmLENBQUosRUFBZ0UseUNBQWhFO0FBQ0EsYUFBTztJQUxTLENBVGxCOztJQWlCQSxzQkFBQSxFQUF3QixRQUFBLENBQUEsQ0FBQTtBQUMxQixVQUFBLG1CQUFBLEVBQUEsVUFBQSxFQUFBLHVCQUFBLEVBQUEsY0FBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBOzs7O01BR0ksQ0FBQSxDQUFFLFVBQUYsRUFDRSxtQkFERixFQUVFLGNBRkYsRUFHRSx1QkFIRixDQUFBLEdBR2dDLFNBQVMsQ0FBQyxvQkFBVixDQUFBLENBSGhDLEVBSEo7O01BUUksSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUUsR0FBQSxDQUFFLFVBQVUsQ0FBQSxDQUFaLENBQUY7TUFBSCxDQUFmLENBQUosRUFBbUU7UUFBRTtVQUFFLEtBQUEsRUFBTyxFQUFUO1VBQWEsR0FBQSxFQUFLO1FBQWxCLENBQUY7T0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBRSxHQUFBLENBQUUsVUFBQSxDQUFXLEVBQVgsQ0FBRixDQUFGO01BQUgsQ0FBZixDQUFKLEVBQW1FO1FBQUU7VUFBRSxLQUFBLEVBQU8sRUFBVDtVQUFhLEdBQUEsRUFBSztRQUFsQixDQUFGO09BQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUUsR0FBQSxDQUFFLG1CQUFtQixDQUFBLENBQXJCLENBQUY7TUFBSCxDQUFmLENBQUosRUFBbUUsRUFBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBRSxHQUFBLENBQUUsbUJBQUEsQ0FBb0IsRUFBcEIsQ0FBRixDQUFGO01BQUgsQ0FBZixDQUFKLEVBQW1FLEVBQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUUsR0FBQSxDQUFFLFVBQVUsQ0FBQSxDQUFBLENBQVosQ0FBRjtNQUFILENBQWYsQ0FBSixFQUFtRTtRQUFFO1VBQUUsS0FBQSxFQUFPLEdBQVQ7VUFBYyxHQUFBLEVBQUs7UUFBbkIsQ0FBRjtPQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFFLEdBQUEsQ0FBRSxVQUFVLENBQUEsR0FBQSxDQUFaLENBQUY7TUFBSCxDQUFmLENBQUosRUFBbUU7UUFBRTtVQUFFLEtBQUEsRUFBTyxLQUFUO1VBQWdCLEdBQUEsRUFBSztRQUFyQixDQUFGO09BQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUUsR0FBQSxDQUFFLGNBQWMsQ0FBQSxHQUFBLENBQWhCLENBQUY7TUFBSCxDQUFmLENBQUosRUFBbUU7UUFBRTtVQUFFLEtBQUEsRUFBTyxNQUFUO1VBQWlCLEdBQUEsRUFBSztRQUF0QixDQUFGO09BQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUUsR0FBQSxDQUFFLFVBQVUsQ0FBQSxDQUFBLENBQUcsQ0FBSCxDQUFBLENBQVosQ0FBRjtNQUFILENBQWYsQ0FBSixFQUFtRTtRQUFFO1VBQUUsS0FBQSxFQUFPLEVBQVQ7VUFBYSxHQUFBLEVBQUs7UUFBbEIsQ0FBRjtRQUFnQztVQUFFLEtBQUEsRUFBTyxDQUFUO1VBQVksR0FBQSxFQUFLO1FBQWpCLENBQWhDO1FBQTZEO1VBQUUsS0FBQSxFQUFPLEVBQVQ7VUFBYSxHQUFBLEVBQUs7UUFBbEIsQ0FBN0Q7T0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBRSxHQUFBLENBQUUsbUJBQW1CLENBQUEsQ0FBQSxDQUFHLENBQUgsQ0FBQSxDQUFyQixDQUFGO01BQUgsQ0FBZixDQUFKLEVBQW1FO1FBQUU7VUFBRSxLQUFBLEVBQU8sQ0FBVDtVQUFZLEdBQUEsRUFBSztRQUFqQixDQUFGO09BQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUUsR0FBQSxDQUFFLFVBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBSSxDQUFKLENBQUEsQ0FBWixDQUFGO01BQUgsQ0FBZixDQUFKLEVBQW1FO1FBQUU7VUFBRSxLQUFBLEVBQU8sR0FBVDtVQUFjLEdBQUEsRUFBSztRQUFuQixDQUFGO1FBQWlDO1VBQUUsS0FBQSxFQUFPLENBQVQ7VUFBWSxHQUFBLEVBQUs7UUFBakIsQ0FBakM7UUFBOEQ7VUFBRSxLQUFBLEVBQU8sRUFBVDtVQUFhLEdBQUEsRUFBSztRQUFsQixDQUE5RDtPQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFFLEdBQUEsQ0FBRSxVQUFVLENBQUEsQ0FBQSxDQUFHLENBQUgsQ0FBQSxDQUFBLENBQU8sQ0FBUCxDQUFBLENBQVosQ0FBRjtNQUFILENBQWYsQ0FBSixFQUFtRTtRQUFFO1VBQUUsS0FBQSxFQUFPLEVBQVQ7VUFBYSxHQUFBLEVBQUs7UUFBbEIsQ0FBRjtRQUFnQztVQUFFLEtBQUEsRUFBTyxDQUFUO1VBQVksR0FBQSxFQUFLO1FBQWpCLENBQWhDO1FBQTZEO1VBQUUsS0FBQSxFQUFPLEVBQVQ7VUFBYSxHQUFBLEVBQUs7UUFBbEIsQ0FBN0Q7UUFBMkY7VUFBRSxLQUFBLEVBQU8sQ0FBVDtVQUFZLEdBQUEsRUFBSztRQUFqQixDQUEzRjtRQUF3SDtVQUFFLEtBQUEsRUFBTyxFQUFUO1VBQWEsR0FBQSxFQUFLO1FBQWxCLENBQXhIO09BQW5FO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUUsR0FBQSxDQUFFLG1CQUFtQixDQUFBLENBQUEsQ0FBRyxDQUFILENBQUEsQ0FBQSxDQUFPLENBQVAsQ0FBQSxDQUFyQixDQUFGO01BQUgsQ0FBZixDQUFKLEVBQW1FO1FBQUU7VUFBRSxLQUFBLEVBQU8sQ0FBVDtVQUFZLEdBQUEsRUFBSztRQUFqQixDQUFGO1FBQStCO1VBQUUsS0FBQSxFQUFPLENBQVQ7VUFBWSxHQUFBLEVBQUs7UUFBakIsQ0FBL0I7T0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBRSxHQUFBLENBQUUsVUFBVSxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUosQ0FBQSxDQUFBLENBQVosQ0FBRjtNQUFILENBQWYsQ0FBSixFQUFtRTtRQUFFO1VBQUUsS0FBQSxFQUFPLEdBQVQ7VUFBYyxHQUFBLEVBQUs7UUFBbkIsQ0FBRjtRQUFpQztVQUFFLEtBQUEsRUFBTyxDQUFUO1VBQVksR0FBQSxFQUFLO1FBQWpCLENBQWpDO1FBQThEO1VBQUUsS0FBQSxFQUFPLEdBQVQ7VUFBYyxHQUFBLEVBQUs7UUFBbkIsQ0FBOUQ7T0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBRSxHQUFBLENBQUUsVUFBVSxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUosQ0FBQSxDQUFBLENBQUEsQ0FBUyxDQUFULENBQUEsQ0FBWixDQUFGO01BQUgsQ0FBZixDQUFKLEVBQW1FO1FBQUU7VUFBRSxLQUFBLEVBQU8sR0FBVDtVQUFjLEdBQUEsRUFBSztRQUFuQixDQUFGO1FBQWlDO1VBQUUsS0FBQSxFQUFPLENBQVQ7VUFBWSxHQUFBLEVBQUs7UUFBakIsQ0FBakM7UUFBOEQ7VUFBRSxLQUFBLEVBQU8sR0FBVDtVQUFjLEdBQUEsRUFBSztRQUFuQixDQUE5RDtRQUE2RjtVQUFFLEtBQUEsRUFBTyxDQUFUO1VBQVksR0FBQSxFQUFLO1FBQWpCLENBQTdGO1FBQTBIO1VBQUUsS0FBQSxFQUFPLEVBQVQ7VUFBYSxHQUFBLEVBQUs7UUFBbEIsQ0FBMUg7T0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBRSxHQUFBLENBQUUsVUFBQSxDQUFXLENBQUEsQ0FBQSxDQUFBLENBQUksQ0FBSixDQUFBLENBQUEsQ0FBQSxDQUFTLENBQVQsQ0FBQSxDQUFYLENBQUYsQ0FBRjtNQUFILENBQWYsQ0FBSixFQUFtRTtRQUFFO1VBQUUsS0FBQSxFQUFPLE1BQVQ7VUFBaUIsR0FBQSxFQUFLO1FBQXRCLENBQUY7T0FBbkU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBRSxHQUFBLENBQUUsVUFBQSxDQUFXLEVBQVgsQ0FBRixDQUFGO01BQUgsQ0FBZixDQUFKLEVBQW1FO1FBQUU7VUFBRSxLQUFBLEVBQU8sRUFBVDtVQUFhLEdBQUEsRUFBSztRQUFsQixDQUFGO1FBQWdDO1VBQUUsS0FBQSxFQUFPLEVBQVQ7VUFBYSxHQUFBLEVBQUs7UUFBbEIsQ0FBaEM7UUFBOEQ7VUFBRSxLQUFBLEVBQU8sRUFBVDtVQUFhLEdBQUEsRUFBSztRQUFsQixDQUE5RDtPQUFuRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFFLEdBQUEsQ0FBRSxtQkFBQSxDQUFvQixFQUFwQixDQUFGLENBQUY7TUFBSCxDQUFmLENBQUosRUFBbUU7UUFBRTtVQUFFLEtBQUEsRUFBTyxFQUFUO1VBQWEsR0FBQSxFQUFLO1FBQWxCLENBQUY7T0FBbkUsRUF4Qko7O0FBMEJJLGFBQU87SUEzQmUsQ0FqQnhCOztJQStDQSxzQkFBQSxFQUF3QixRQUFBLENBQUEsQ0FBQTtBQUMxQixVQUFBLElBQUEsRUFBQSxpQkFBQSxFQUFBLE1BQUEsRUFBQSxpQkFBQSxFQUFBLHNCQUFBLEVBQUEsV0FBQSxFQUFBLG1CQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsc0JBQUYsRUFDRSxpQkFERixFQUVFLE1BRkYsRUFHRSxpQkFIRixDQUFBLEdBRzhCLFNBQVMsQ0FBQyxRQUFRLENBQUMsMEJBQW5CLENBQUEsQ0FIOUI7TUFJQSxJQUFBLEdBQThCLE9BQUEsQ0FBUSxXQUFSLEVBSmxDOztNQU1JLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxzQkFBQSxDQUF1QixJQUF2QjtNQUFILENBQWYsQ0FBUixFQUFnRSxpQkFBaEU7TUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsc0JBQUEsQ0FBdUIsTUFBdkI7TUFBSCxDQUFmLENBQVIsRUFBZ0UsaUJBQWhFO01BQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLHNCQUFBLENBQXVCLElBQXZCO01BQUgsQ0FBZixDQUFSLEVBQWdFLGlCQUFoRTtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxzQkFBQSxDQUF1QixFQUF2QjtNQUFILENBQWYsQ0FBUixFQUFnRSwwQkFBaEUsRUFUSjs7TUFXSSxtQkFBQSxHQUFzQixDQUNwQixDQUFFLEdBQUYsRUFBd0MsQ0FBRSxLQUFGLEVBQVMsMEJBQVQsRUFBNkMsMEJBQTdDLENBQXhDLENBRG9CLEVBRXBCLENBQUUsV0FBRixFQUF3QyxDQUFFLElBQUYsRUFBUyxrQ0FBVCxFQUE2QyxrQ0FBN0MsQ0FBeEMsQ0FGb0IsRUFHcEIsQ0FBRSxrQ0FBRixFQUF3QyxDQUFFLElBQUYsRUFBUyxrQ0FBVCxFQUE2QyxrQ0FBN0MsQ0FBeEMsQ0FIb0IsRUFJcEIsQ0FBRSxrQ0FBRixFQUF3QyxDQUFFLElBQUYsRUFBUyxrQ0FBVCxFQUE2QyxrQ0FBN0MsQ0FBeEMsQ0FKb0IsRUFLcEIsQ0FBRSxrQ0FBRixFQUF3QyxDQUFFLElBQUYsRUFBUyxrQ0FBVCxFQUE2QyxrQ0FBN0MsQ0FBeEMsQ0FMb0IsRUFNcEIsQ0FBRSxrQ0FBRixFQUF3QyxDQUFFLEtBQUYsRUFBUyxrQ0FBVCxFQUE2QyxrQ0FBN0MsQ0FBeEMsQ0FOb0I7TUFRdEIsV0FBQSxHQUFjLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBSSxDQUFDLElBQUwsQ0FBVSxTQUFWLEVBQXFCLDhDQUFyQixDQUFiO01BRVgsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxhQUFBLEVBQUEsYUFBQSxFQUFBLFFBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBO1FBQU0sS0FBQSxxREFBQTtVQUFJLENBQUUsSUFBRixFQUFRLENBQUUsU0FBRixFQUFhLFNBQWIsRUFBd0IsU0FBeEIsQ0FBUjtVQUNGLFFBQUEsR0FBZ0IsSUFBSSxDQUFDLElBQUwsQ0FBVSxXQUFWLEVBQXVCLElBQXZCO1VBQ2hCLGFBQUEsR0FBZ0IsSUFBSSxDQUFDLElBQUwsQ0FBVSxXQUFWLEVBQXVCLFNBQXZCO1VBQ2hCLGFBQUEsR0FBZ0IsSUFBSSxDQUFDLElBQUwsQ0FBVSxXQUFWLEVBQXVCLFNBQXZCO1VBQ2hCLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7bUJBQUcsTUFBQSxDQUFPLFFBQVA7VUFBSCxDQUFmLENBQUosRUFBNEQsU0FBNUQ7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHLGlCQUFBLENBQXdCLFFBQXhCO1VBQUgsQ0FBZixDQUFKLEVBQTRELGFBQTVEO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxzQkFBQSxDQUF3QixRQUF4QjtVQUFILENBQWYsQ0FBSixFQUE0RCxhQUE1RDtRQU5GO0FBT0EsZUFBTztNQVJOLENBQUE7TUFVQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDUCxZQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLGFBQUEsRUFBQSxhQUFBLEVBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7UUFBTSxLQUFBLHFEQUFBO1VBQUksQ0FBRSxJQUFGLEVBQVEsQ0FBRSxTQUFGLEVBQWEsU0FBYixFQUF3QixTQUF4QixDQUFSO1VBQ0YsUUFBQSxHQUFnQixJQUFJLENBQUMsUUFBTCxDQUFjLE9BQU8sQ0FBQyxHQUFSLENBQUEsQ0FBZCxFQUE2QixJQUFJLENBQUMsSUFBTCxDQUFVLFdBQVYsRUFBdUIsSUFBdkIsQ0FBN0I7VUFDaEIsYUFBQSxHQUFnQixJQUFJLENBQUMsUUFBTCxDQUFjLE9BQU8sQ0FBQyxHQUFSLENBQUEsQ0FBZCxFQUE2QixJQUFJLENBQUMsSUFBTCxDQUFVLFdBQVYsRUFBdUIsU0FBdkIsQ0FBN0I7VUFDaEIsYUFBQSxHQUFnQixJQUFJLENBQUMsUUFBTCxDQUFjLE9BQU8sQ0FBQyxHQUFSLENBQUEsQ0FBZCxFQUE2QixJQUFJLENBQUMsSUFBTCxDQUFVLFdBQVYsRUFBdUIsU0FBdkIsQ0FBN0I7VUFDaEIsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTttQkFBRyxNQUFBLENBQU8sUUFBUDtVQUFILENBQWYsQ0FBSixFQUE0RCxTQUE1RDtVQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7bUJBQUcsaUJBQUEsQ0FBd0IsUUFBeEI7VUFBSCxDQUFmLENBQUosRUFBNEQsYUFBNUQ7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO21CQUFHLHNCQUFBLENBQXdCLFFBQXhCO1VBQUgsQ0FBZixDQUFKLEVBQTRELGFBQTVEO1FBTkY7QUFPQSxlQUFPO01BUk4sQ0FBQTtNQVVBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsV0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7UUFBTSxXQUFBLEdBQWMsSUFBSSxDQUFDLE9BQUwsQ0FBYSxPQUFPLENBQUMsR0FBUixDQUFBLENBQWI7UUFDZCxPQUFPLENBQUMsS0FBUixDQUFjLFdBQWQ7QUFDQTtVQUNFLEtBQUEscURBQUE7WUFBSSxDQUFFLElBQUYsRUFBUSxDQUFFLFNBQUYsRUFBYSxTQUFiLEVBQXdCLFNBQXhCLENBQVI7WUFDRixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO3FCQUFHLE1BQUEsQ0FBTyxJQUFQO1lBQUgsQ0FBZixDQUFKLEVBQXdELFNBQXhEO1lBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtxQkFBRyxpQkFBQSxDQUF3QixJQUF4QjtZQUFILENBQWYsQ0FBSixFQUF3RCxTQUF4RDtZQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7cUJBQUcsc0JBQUEsQ0FBd0IsSUFBeEI7WUFBSCxDQUFmLENBQUosRUFBd0QsU0FBeEQ7VUFIRixDQURGO1NBQUE7VUFNRSxPQUFPLENBQUMsS0FBUixDQUFjLFdBQWQsRUFORjs7QUFPQSxlQUFPO01BVk4sQ0FBQSxJQXpDUDs7QUFxREksYUFBTztJQXREZSxDQS9DeEI7Ozs7Ozs7Ozs7Ozs7O0lBb0hBLElBQUEsRUFBTSxRQUFBLENBQUEsQ0FBQTtBQUNSLFVBQUEsSUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBWSxTQUFTLENBQUMsWUFBVixDQUFBLENBQVo7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsU0FBakI7TUFBSCxDQUFmLENBQVIsRUFBa0UseUJBQWxFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLElBQUksQ0FBQyxXQUFMLENBQWlCLFNBQWpCO01BQUgsQ0FBZixDQUFSLEVBQWtFLHlCQUFsRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxJQUFJLENBQUMsV0FBTCxDQUFpQixDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQUFqQjtNQUFILENBQWYsQ0FBUixFQUFrRSx5QkFBbEU7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosQ0FBakI7TUFBSCxDQUFmLENBQVIsRUFBa0UseUJBQWxFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLElBQUksQ0FBQyxZQUFMLENBQWtCLFNBQWxCO01BQUgsQ0FBZixDQUFSLEVBQWtFLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLENBQWxFO01BQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLElBQUksQ0FBQyxZQUFMLENBQWtCLFNBQWxCO01BQUgsQ0FBZixDQUFSLEVBQWtFLDhDQUFsRTtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxJQUFJLENBQUMsWUFBTCxDQUFrQixRQUFsQjtNQUFILENBQWYsQ0FBUixFQUFrRSw2Q0FBbEU7TUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsVUFBbEI7TUFBSCxDQUFmLENBQVIsRUFBa0UsK0NBQWxFLEVBUko7O0FBVUksYUFBTztJQVhILENBcEhOOztJQWtJQSwrQkFBQSxFQUFpQyxRQUFBLENBQUEsQ0FBQTtBQUNuQyxVQUFBLENBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQTtNQUFJLENBQUE7UUFBRSx1QkFBQSxFQUF5QjtNQUEzQixDQUFBLEdBQWtDLFNBQVMsQ0FBQywrQkFBVixDQUFBLENBQWxDO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQztNQUFMLENBQWYsQ0FBUixFQUFnRCxzQkFBaEQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDO01BQUwsQ0FBZixDQUFSLEVBQWdELHNCQUFoRDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUM7TUFBTCxDQUFmLENBQVIsRUFBZ0QsVUFBaEQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDO01BQUwsQ0FBZixDQUFSLEVBQWdELFVBQWhEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQztNQUFMLENBQWYsQ0FBUixFQUFnRCxVQUFoRDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUM7TUFBTCxDQUFmLENBQVIsRUFBZ0QsVUFBaEQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDO01BQUwsQ0FBZixDQUFSLEVBQWdELFNBQWhELEVBUEo7O0FBU0ksYUFBTztJQVZ3QixDQWxJakM7O0lBK0lBLG9CQUFBLEVBQXNCLFFBQUEsQ0FBQSxDQUFBO0FBQ3hCLFVBQUEsWUFBQSxFQUFBO01BQUksQ0FBQTtRQUFFLHVCQUFBLEVBQXlCO01BQTNCLENBQUEsR0FBa0MsU0FBUyxDQUFDLCtCQUFWLENBQUEsQ0FBbEM7TUFDQSxDQUFBLENBQUUsWUFBRixDQUFBLEdBQWtDLFNBQVMsQ0FBQyxvQkFBVixDQUFBLENBQWxDO01BQ0csQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNQLFlBQUEsRUFBQSxFQUFBLENBQUEsRUFBQTtRQUFNLElBQUEsQ0FBSywrQ0FBTDtRQUNBLElBQUEsR0FBUSxDQUFBLEdBQUEsQ0FBQSxDQUFPLENBQUMsQ0FBQyxLQUFGLEdBQVUsQ0FBQyxDQUFDLE1BQVosR0FBcUIsQ0FBQyxDQUFDLElBQXZCLEdBQThCLEtBQTlCLEdBQXNDLENBQUMsQ0FBQyxLQUF4QyxHQUFnRCxDQUFDLENBQUMsT0FBbEQsR0FBNEQsQ0FBQyxDQUFDLFVBQXJFLENBQUEsR0FBQTtRQUNSLEVBQUEsR0FBUSxJQUFJLFlBQUosQ0FBQTtRQUNSLElBQUEsQ0FBSyxZQUFMLEVBQWtDLEVBQUUsQ0FBQyxRQUFILENBQVksSUFBWixDQUFsQztRQUVBLEtBQUEsT0FBQSxHQUFBOztVQUFBLElBQUEsQ0FBSyxZQUFMLEVBQW1CLENBQW5CO1FBQUE7UUFDQSxJQUFBLENBQUssWUFBTCxFQUFtQixFQUFFLENBQUMsS0FBdEI7UUFDQSxJQUFBLENBQUssWUFBTCxFQUFtQixFQUFFLENBQUMsTUFBdEI7UUFDQSxJQUFBLENBQUssWUFBTCxFQUFtQixFQUFFLENBQUMsUUFBdEI7ZUFDQSxJQUFBLENBQUssWUFBTCxFQUFtQixFQUFFLENBQUMsSUFBdEI7TUFWQyxDQUFBO01BV0EsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNQLFlBQUEsRUFBQSxFQUFBLENBQUEsRUFBQTtRQUFNLElBQUEsQ0FBSywrQ0FBTDtRQUNBLElBQUEsR0FBUTtRQUNSLEVBQUEsR0FBUSxJQUFJLFlBQUosQ0FBQTtRQUNSLElBQUEsQ0FBSyxZQUFMLEVBQWtDLEVBQUUsQ0FBQyxRQUFILENBQVksSUFBWixDQUFsQztRQUVBLEtBQUEsT0FBQSxHQUFBOztVQUFBLElBQUEsQ0FBSyxZQUFMLEVBQW1CLENBQW5CO1FBQUE7UUFDQSxJQUFBLENBQUssWUFBTCxFQUFtQixFQUFFLENBQUMsS0FBdEI7UUFDQSxJQUFBLENBQUssWUFBTCxFQUFtQixFQUFFLENBQUMsTUFBdEI7UUFDQSxJQUFBLENBQUssWUFBTCxFQUFtQixFQUFFLENBQUMsUUFBdEI7ZUFDQSxJQUFBLENBQUssWUFBTCxFQUFtQixFQUFFLENBQUMsSUFBdEI7TUFWQyxDQUFBO01BV0EsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNQLFlBQUEsRUFBQSxFQUFBLENBQUEsRUFBQTtRQUFNLElBQUEsQ0FBSywrQ0FBTDtRQUNBLElBQUEsR0FBUSxDQUFBLENBQUEsQ0FBSSxDQUFDLENBQUMsS0FBRixHQUFVLENBQUMsQ0FBQyxNQUFaLEdBQXFCLENBQUMsQ0FBQyxJQUF2QixHQUE4QixDQUFDLENBQUMsS0FBaEMsR0FBd0MsQ0FBQyxDQUFDLE9BQTFDLEdBQW9ELENBQUMsQ0FBQyxVQUExRCxDQUFBO1FBQ1IsRUFBQSxHQUFRLElBQUksWUFBSixDQUFBO1FBQ1IsSUFBQSxDQUFLLFlBQUwsRUFBa0MsRUFBRSxDQUFDLFFBQUgsQ0FBWSxJQUFaLENBQWxDO1FBRUEsS0FBQSxPQUFBLEdBQUE7O1VBQUEsSUFBQSxDQUFLLFlBQUwsRUFBbUIsQ0FBbkI7UUFBQTtRQUNBLElBQUEsQ0FBSyxZQUFMLEVBQW1CLEVBQUUsQ0FBQyxLQUF0QjtRQUNBLElBQUEsQ0FBSyxZQUFMLEVBQW1CLEVBQUUsQ0FBQyxNQUF0QjtRQUNBLElBQUEsQ0FBSyxZQUFMLEVBQW1CLEVBQUUsQ0FBQyxRQUF0QjtlQUNBLElBQUEsQ0FBSyxZQUFMLEVBQW1CLEVBQUUsQ0FBQyxJQUF0QjtNQVZDLENBQUE7TUFXQSxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ1AsWUFBQSxFQUFBLEVBQUEsQ0FBQSxFQUFBO1FBQU0sSUFBQSxDQUFLLCtDQUFMO1FBQ0EsSUFBQSxHQUFRO1FBQ1IsRUFBQSxHQUFRLElBQUksWUFBSixDQUFBO1FBQ1IsSUFBQSxDQUFLLFlBQUwsRUFBa0MsRUFBRSxDQUFDLFFBQUgsQ0FBWSxJQUFaLENBQWxDO1FBRUEsS0FBQSxPQUFBLEdBQUE7O1VBQUEsSUFBQSxDQUFLLFlBQUwsRUFBbUIsQ0FBbkI7UUFBQTtRQUNBLElBQUEsQ0FBSyxZQUFMLEVBQW1CLEVBQUUsQ0FBQyxLQUF0QjtRQUNBLElBQUEsQ0FBSyxZQUFMLEVBQW1CLEVBQUUsQ0FBQyxNQUF0QjtRQUNBLElBQUEsQ0FBSyxZQUFMLEVBQW1CLEVBQUUsQ0FBQyxRQUF0QjtlQUNBLElBQUEsQ0FBSyxZQUFMLEVBQW1CLEVBQUUsQ0FBQyxJQUF0QjtNQVZDLENBQUEsSUFuQ1A7O0FBK0NJLGFBQU87SUFoRGEsQ0EvSXRCOztJQWtNQSxvQkFBQSxFQUFzQixRQUFBLENBQUEsQ0FBQTtBQUN4QixVQUFBLFlBQUEsRUFBQTtNQUFJLENBQUE7UUFBRSx1QkFBQSxFQUF5QjtNQUEzQixDQUFBLEdBQWtDLFNBQVMsQ0FBQywrQkFBVixDQUFBLENBQWxDO01BQ0EsQ0FBQSxDQUFFLFlBQUYsQ0FBQSxHQUFrQyxTQUFTLENBQUMsb0JBQVYsQ0FBQSxDQUFsQztNQUVHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtRQUNELEtBQUEsQ0FBTSxZQUFOLEVBQW9CLE9BQUEsQ0FBUSxZQUFSLENBQXBCO1FBQ0EsS0FBQSxDQUFNLFlBQU4sRUFBb0IsT0FBQSxDQUFRLFVBQVIsQ0FBcEIsRUFETjs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JNLGVBQU87TUFqQk4sQ0FBQSxJQUhQOztBQXNCSSxhQUFPO0lBdkJhO0VBbE10QixFQTFDQzs7O0VBd1FILElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQSxXQUFBOzs7TUFFRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7YUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLENBQUUsS0FBRixDQUE5QjtJQUxzQyxDQUFBLElBQXhDOztBQXhRRyIsInNvdXJjZXNDb250ZW50IjpbIlxuIyMjXG5cblxuIyMgQXBwbGljYXRpb25zXG5cbiogKipSZWdFeCBCdWlsZGVyKiogKGV4YW1wbGUgZnJvbSBbUmVqaWdzIGJsb2cgcG9zdF0oaHR0cHM6Ly9tZWRpdW0uY29tL0BvbWFyemF3YWhyeS9yZWppZ3MtbWFraW5nLXJlZ3VsYXItZXhwcmVzc2lvbnMtaHVtYW4tcmVhZGFibGUtMWZhZDM3Y2IzZWFlKSlcblxuYGBgamF2YVxudmFyIGVtYWlsUmVnZXggPVxuICAgIFJlamlncy5DcmVhdGUoKVxuICAgICAgICAgIC5BdFN0YXJ0KClcbiAgICAgICAgICAuT25lT3JNb3JlKHIgPT4gci5BbnlMZXR0ZXJPckRpZ2l0KCkuT3IoKS5BbnlPZihcIi5fJSstXCIpKVxuICAgICAgICAgIC5UZXh0KFwiQFwiKVxuICAgICAgICAgIC5PbmVPck1vcmUociA9PiByLkFueUxldHRlck9yRGlnaXQoKS5PcigpLkFueU9mKFwiLi1cIikpXG4gICAgICAgICAgLlRleHQoXCIuXCIpXG4gICAgICAgICAgLkFueUxldHRlck9yRGlnaXQoKS5BdExlYXN0KDIpXG4gICAgICAgICAgLkF0RW5kKClcbiAgICAgICAgICAuQnVpbGQoKTtcbmBgYFxuXG4qICoqSFRNTC9YTUwgQnVpbGVyKipcbiogKipTUUwgQnVpbGRlcioqXG4qICoqQ0xJIENvbG9yaW5nKipcbiogc3ludGF4IGZvciBhICoqVHlwZSBDaGVja2VyKipcblxuIyMjXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzX3RhZ2Z1bl9jYWxsOiAtPlxuICAgIHsgaXNfdGFnZnVuX2NhbGwsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3RhZ2Z1bl90b29scygpXG4gICAgZm4gPSAoIFAuLi4gKSAtPiBpc190YWdmdW5fY2FsbCBQLi4uXG4gICAgQGVxICggzqliYnNmbV9fXzEgPSAtPiBmbigpICAgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqliYnNmbV9fXzIgPSAtPiBmbiBbIDEsIDIsIDMsIF0gICksIGZhbHNlXG4gICAgQGVxICggzqliYnNmbV9fXzMgPSAtPiBmblwiWyAxLCAyLCAzLCBdXCIgKSwgdHJ1ZVxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBlc2NhcGVfaHRtbF90ZXh0OiAtPlxuICAgIHsgZXNjYXBlX2h0bWxfdGV4dCwgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2VzY2FwZV9odG1sX3RleHQoKVxuICAgIEBlcSAoIM6pYmJzZm1fX180ID0gLT4gZXNjYXBlX2h0bWxfdGV4dCAnJyAgICAgICAgICAgICAgICAgICAgKSwgJydcbiAgICBAZXEgKCDOqWJic2ZtX19fNSA9IC0+IGVzY2FwZV9odG1sX3RleHQgJ2FiYycgICAgICAgICAgICAgICAgICksICdhYmMnXG4gICAgQGVxICggzqliYnNmbV9fXzYgPSAtPiBlc2NhcGVfaHRtbF90ZXh0ICdhYmM8dGFnPmQmZSZmPC90YWc+JyApLCAnYWJjJmx0O3RhZyZndDtkJmFtcDtlJmFtcDtmJmx0Oy90YWcmZ3Q7J1xuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB3YWxrX3RhZ2Z1bl9jYWxsX3BhcnRzOiAtPlxuICAgICMgeyBIdG1sLCAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlX2h0bWxfY2xhc3MoKVxuICAgICMgeyBlc2NhcGVfaHRtbF90ZXh0LCAgICAgICAgIH0gPSByZXF1aXJlX2VzY2FwZV9odG1sX3RleHQoKVxuICAgICMgeyBzdGFja2FibGVfdGFnZnVuLCAgICAgICAgIH0gPSByZXF1aXJlX3N0YWNrYWJsZV90YWdmdW4oKVxuICAgIHsgd2Fsa19wYXJ0cyxcbiAgICAgIHdhbGtfbm9uZW1wdHlfcGFydHMsXG4gICAgICB3YWxrX3Jhd19wYXJ0cyxcbiAgICAgIHdhbGtfcmF3X25vbmVtcHR5X3BhcnRzLCAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3RhZ2Z1bl90b29scygpXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBAZXEgKCDOqWJic2ZtX19fNyA9IC0+IFsgKCB3YWxrX3BhcnRzXCJcIiAgICAgICAgICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fXzggPSAtPiBbICggd2Fsa19wYXJ0cyBcIlwiICAgICAgICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fX185ID0gLT4gWyAoIHdhbGtfbm9uZW1wdHlfcGFydHNcIlwiICAgICAgICAgKS4uLiwgXSApLCBbXVxuICAgIEBlcSAoIM6pYmJzZm1fXzEwID0gLT4gWyAoIHdhbGtfbm9uZW1wdHlfcGFydHMgJycgICAgICAgICkuLi4sIF0gKSwgW11cbiAgICBAZXEgKCDOqWJic2ZtX18xMSA9IC0+IFsgKCB3YWxrX3BhcnRzXCJhXCIgICAgICAgICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnYScsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzEyID0gLT4gWyAoIHdhbGtfcGFydHNcIlxcbmFcIiAgICAgICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnXFxuYScsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzEzID0gLT4gWyAoIHdhbGtfcmF3X3BhcnRzXCJcXG5hXCIgICAgICAgICAgICkuLi4sIF0gKSwgWyB7IGNodW5rOiAnXFxcXG5hJywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMTQgPSAtPiBbICggd2Fsa19wYXJ0c1wiI3sxfVwiICAgICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgeyB2YWx1ZTogMSwgaXNhOiAndmFsdWUnLCB9LCB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMTUgPSAtPiBbICggd2Fsa19ub25lbXB0eV9wYXJ0c1wiI3sxfVwiICAgICApLi4uLCBdICksIFsgeyB2YWx1ZTogMSwgaXNhOiAndmFsdWUnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMTYgPSAtPiBbICggd2Fsa19wYXJ0c1wiYSN7MX1cIiAgICAgICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJ2EnLCBpc2E6ICdjaHVuaycsIH0sIHsgdmFsdWU6IDEsIGlzYTogJ3ZhbHVlJywgfSwgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzE3ID0gLT4gWyAoIHdhbGtfcGFydHNcIiN7MX0jezJ9XCIgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIHsgdmFsdWU6IDEsIGlzYTogJ3ZhbHVlJywgfSwgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgeyB2YWx1ZTogMiwgaXNhOiAndmFsdWUnLCB9LCB7IGNodW5rOiAnJywgaXNhOiAnY2h1bmsnLCB9IF1cbiAgICBAZXEgKCDOqWJic2ZtX18xOCA9IC0+IFsgKCB3YWxrX25vbmVtcHR5X3BhcnRzXCIjezF9I3syfVwiICkuLi4sIF0gKSwgWyB7IHZhbHVlOiAxLCBpc2E6ICd2YWx1ZScsIH0sIHsgdmFsdWU6IDIsIGlzYTogJ3ZhbHVlJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzE5ID0gLT4gWyAoIHdhbGtfcGFydHNcImEjezF9elwiICAgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICdhJywgaXNhOiAnY2h1bmsnLCB9LCB7IHZhbHVlOiAxLCBpc2E6ICd2YWx1ZScsIH0sIHsgY2h1bms6ICd6JywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMjAgPSAtPiBbICggd2Fsa19wYXJ0c1wiYSN7MX16I3syfVwiICAgICAgICApLi4uLCBdICksIFsgeyBjaHVuazogJ2EnLCBpc2E6ICdjaHVuaycsIH0sIHsgdmFsdWU6IDEsIGlzYTogJ3ZhbHVlJywgfSwgeyBjaHVuazogJ3onLCBpc2E6ICdjaHVuaycsIH0sIHsgdmFsdWU6IDIsIGlzYTogJ3ZhbHVlJywgfSwgeyBjaHVuazogJycsIGlzYTogJ2NodW5rJywgfSwgXVxuICAgIEBlcSAoIM6pYmJzZm1fXzIxID0gLT4gWyAoIHdhbGtfcGFydHMgXCJhI3sxfXojezJ9XCIgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICdhMXoyJywgaXNhOiAnY2h1bmsnLCB9LCBdXG4gICAgQGVxICggzqliYnNmbV9fMjIgPSAtPiBbICggd2Fsa19wYXJ0cyAxMiAgICAgICAgICAgICAgICAgKS4uLiwgXSApLCBbIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIHsgdmFsdWU6IDEyLCBpc2E6ICd2YWx1ZScsIH0sIHsgY2h1bms6ICcnLCBpc2E6ICdjaHVuaycsIH0sIF1cbiAgICBAZXEgKCDOqWJic2ZtX18yMyA9IC0+IFsgKCB3YWxrX25vbmVtcHR5X3BhcnRzIDEyICAgICAgICApLi4uLCBdICksIFsgeyB2YWx1ZTogMTIsIGlzYTogJ3ZhbHVlJywgfSwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X25leHRfZnJlZV9maWxlbmFtZTogLT5cbiAgICB7IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUsXG4gICAgICBnZXRfbmV4dF9maWxlbmFtZSxcbiAgICAgIGV4aXN0cyxcbiAgICAgIGNhY2hlX2ZpbGVuYW1lX3JlLCAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9uZXh0X2ZyZWVfZmlsZW5hbWUoKVxuICAgIFBBVEggICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEB0aHJvd3MgKCDOqWJic2ZtX18yNCA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgbnVsbCAgICAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dC9cbiAgICBAdGhyb3dzICggzqliYnNmbV9fMjUgPSAtPiBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lIHVuZGVmaW5lZCAgICksIC9leHBlY3RlZCBhIHRleHQvXG4gICAgQHRocm93cyAoIM6pYmJzZm1fXzI2ID0gLT4gZ2V0X25leHRfZnJlZV9maWxlbmFtZSB0cnVlICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0L1xuICAgIEB0aHJvd3MgKCDOqWJic2ZtX18yNyA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgJycgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgbm9uZW1wdHkgdGV4dC9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbICdhJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBmYWxzZSwgJ34uYS4wMDAxLmJyaWNhYnJhYy1jYWNoZScsICAgICAgICAgJ34uYS4wMDAxLmJyaWNhYnJhYy1jYWNoZScsIF0sIF1cbiAgICAgIFsgJ1JFQURNRS5tZCcsICAgICAgICAgICAgICAgICAgICAgICAgICBbIHRydWUsICAnfi5SRUFETUUubWQuMDAwMS5icmljYWJyYWMtY2FjaGUnLCAnfi5SRUFETUUubWQuMDAwNC5icmljYWJyYWMtY2FjaGUnLCBdLCBdXG4gICAgICBbICd+LlJFQURNRS5tZC4wMDAxLmJyaWNhYnJhYy1jYWNoZScsICAgWyB0cnVlLCAgJ34uUkVBRE1FLm1kLjAwMDIuYnJpY2FicmFjLWNhY2hlJywgJ34uUkVBRE1FLm1kLjAwMDQuYnJpY2FicmFjLWNhY2hlJywgXSwgXVxuICAgICAgWyAnfi5SRUFETUUubWQuMDAwMi5icmljYWJyYWMtY2FjaGUnLCAgIFsgdHJ1ZSwgICd+LlJFQURNRS5tZC4wMDAzLmJyaWNhYnJhYy1jYWNoZScsICd+LlJFQURNRS5tZC4wMDA0LmJyaWNhYnJhYy1jYWNoZScsIF0sIF1cbiAgICAgIFsgJ34uUkVBRE1FLm1kLjAwMDMuYnJpY2FicmFjLWNhY2hlJywgICBbIHRydWUsICAnfi5SRUFETUUubWQuMDAwNC5icmljYWJyYWMtY2FjaGUnLCAnfi5SRUFETUUubWQuMDAwNC5icmljYWJyYWMtY2FjaGUnLCBdLCBdXG4gICAgICBbICd+LlJFQURNRS5tZC4wMDA0LmJyaWNhYnJhYy1jYWNoZScsICAgWyBmYWxzZSwgJ34uUkVBRE1FLm1kLjAwMDUuYnJpY2FicmFjLWNhY2hlJywgJ34uUkVBRE1FLm1kLjAwMDUuYnJpY2FicmFjLWNhY2hlJywgXSwgXVxuICAgICAgXVxuICAgIHBhdGhfcHJlZml4ID0gUEFUSC5yZXNvbHZlIFBBVEguam9pbiBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hc3NldHMvYnJpY2FicmFjL2ZpbmQtZnJlZS1maWxlbmFtZSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3IgWyBwYXRoLCBbIG1hdGNoZXJfMSwgbWF0Y2hlcl8yLCBtYXRjaGVyXzMsIF0sIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICBhYnNfcGF0aCAgICAgID0gUEFUSC5qb2luIHBhdGhfcHJlZml4LCBwYXRoXG4gICAgICAgIGFic19tYXRjaGVyXzIgPSBQQVRILmpvaW4gcGF0aF9wcmVmaXgsIG1hdGNoZXJfMlxuICAgICAgICBhYnNfbWF0Y2hlcl8zID0gUEFUSC5qb2luIHBhdGhfcHJlZml4LCBtYXRjaGVyXzNcbiAgICAgICAgQGVxICggzqliYnNmbV9fMjggPSAtPiBleGlzdHMgYWJzX3BhdGggICAgICAgICAgICAgICAgICAgICksIG1hdGNoZXJfMVxuICAgICAgICBAZXEgKCDOqWJic2ZtX18yOSA9IC0+IGdldF9uZXh0X2ZpbGVuYW1lICAgICAgIGFic19wYXRoICAgKSwgYWJzX21hdGNoZXJfMlxuICAgICAgICBAZXEgKCDOqWJic2ZtX18zMCA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgIGFic19wYXRoICAgKSwgYWJzX21hdGNoZXJfM1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmb3IgWyBwYXRoLCBbIG1hdGNoZXJfMSwgbWF0Y2hlcl8yLCBtYXRjaGVyXzMsIF0sIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICByZWxfcGF0aCAgICAgID0gUEFUSC5yZWxhdGl2ZSBwcm9jZXNzLmN3ZCgpLCBQQVRILmpvaW4gcGF0aF9wcmVmaXgsIHBhdGhcbiAgICAgICAgcmVsX21hdGNoZXJfMiA9IFBBVEgucmVsYXRpdmUgcHJvY2Vzcy5jd2QoKSwgUEFUSC5qb2luIHBhdGhfcHJlZml4LCBtYXRjaGVyXzJcbiAgICAgICAgcmVsX21hdGNoZXJfMyA9IFBBVEgucmVsYXRpdmUgcHJvY2Vzcy5jd2QoKSwgUEFUSC5qb2luIHBhdGhfcHJlZml4LCBtYXRjaGVyXzNcbiAgICAgICAgQGVxICggzqliYnNmbV9fMzEgPSAtPiBleGlzdHMgcmVsX3BhdGggICAgICAgICAgICAgICAgICAgICksIG1hdGNoZXJfMVxuICAgICAgICBAZXEgKCDOqWJic2ZtX18zMiA9IC0+IGdldF9uZXh0X2ZpbGVuYW1lICAgICAgIHJlbF9wYXRoICAgKSwgcmVsX21hdGNoZXJfMlxuICAgICAgICBAZXEgKCDOqWJic2ZtX18zMyA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgIHJlbF9wYXRoICAgKSwgcmVsX21hdGNoZXJfM1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjdXJyZW50X2N3ZCA9IFBBVEgucmVzb2x2ZSBwcm9jZXNzLmN3ZCgpXG4gICAgICBwcm9jZXNzLmNoZGlyIHBhdGhfcHJlZml4XG4gICAgICB0cnlcbiAgICAgICAgZm9yIFsgcGF0aCwgWyBtYXRjaGVyXzEsIG1hdGNoZXJfMiwgbWF0Y2hlcl8zLCBdLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgICBAZXEgKCDOqWJic2ZtX18zNCA9IC0+IGV4aXN0cyBwYXRoICAgICAgICAgICAgICAgICAgICApLCBtYXRjaGVyXzFcbiAgICAgICAgICBAZXEgKCDOqWJic2ZtX18zNSA9IC0+IGdldF9uZXh0X2ZpbGVuYW1lICAgICAgIHBhdGggICApLCBtYXRjaGVyXzJcbiAgICAgICAgICBAZXEgKCDOqWJic2ZtX18zNiA9IC0+IGdldF9uZXh0X2ZyZWVfZmlsZW5hbWUgIHBhdGggICApLCBtYXRjaGVyXzNcbiAgICAgIGZpbmFsbHlcbiAgICAgICAgcHJvY2Vzcy5jaGRpciBjdXJyZW50X2N3ZFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIyAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgZ2V0X25leHRfZnJlZV9maWxlbmFtZV9zd2FwX3N1ZmZpeDogLT5cbiAgIyAgIHsgZ2V0X25leHRfZnJlZV9maWxlbmFtZSxcbiAgIyAgICAgc3dhcF9zdWZmaXgsICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX25leHRfZnJlZV9maWxlbmFtZSgpXG4gICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgZGVidWcgJ86pYmJzZm1fXzUyJywgaW50ZXJtZWRpYXRlX2NhY2hlX3BhdGggPSBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lICcvcGF0aC90by9yZWZlcmVuY2UudHh0J1xuICAjICAgZGVidWcgJ86pYmJzZm1fXzUyJywgZmluYWxpemVkX2NhY2hlX3BhdGggICAgPSBzd2FwX3N1ZmZpeCAnLmZpbmFsaXplZCdcbiAgIyAgIEBlcSAgICAgKCDOqWJic2ZtX18zNyA9IC0+IGludGVybWVkaWF0ZV9jYWNoZV9wYXRoICAgICAgICAgICApLCAnL3BhdGgvdG8vfi5yZWZlcmVuY2UudHh0LjAwMDEuZmluYWxpemVkJ1xuICAjICAgcmF0aGVyIHVzZSAnL3BhdGgvdG8vfi5yZWZlcmVuY2UudHh0LjAwMDEuYnJpY2FicmFjLWNhY2hlLmZpbmFsaXplZCdcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQU5TSTogLT5cbiAgICB7IEFOU0ksIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpKClcbiAgICBAZXEgICAgICggzqliYnNmbV9fMzcgPSAtPiBBTlNJLmZnX2Zyb21faGV4ICcjYTBhMWEyJyAgICAgICAgICAgKSwgJ1xceDFCWzM4OjI6OjE2MDoxNjE6MTYybSdcbiAgICBAZXEgICAgICggzqliYnNmbV9fMzggPSAtPiBBTlNJLmJnX2Zyb21faGV4ICcjYTBhMWEyJyAgICAgICAgICAgKSwgJ1xceDFCWzQ4OjI6OjE2MDoxNjE6MTYybSdcbiAgICBAZXEgICAgICggzqliYnNmbV9fMzkgPSAtPiBBTlNJLmZnX2Zyb21fZGVjIFsgMTYwLCAxNjEsIDE2MiBdICAgKSwgJ1xceDFCWzM4OjI6OjE2MDoxNjE6MTYybSdcbiAgICBAZXEgICAgICggzqliYnNmbV9fNDAgPSAtPiBBTlNJLmJnX2Zyb21fZGVjIFsgMTYwLCAxNjEsIDE2MiBdICAgKSwgJ1xceDFCWzQ4OjI6OjE2MDoxNjE6MTYybSdcbiAgICBAZXEgICAgICggzqliYnNmbV9fNDEgPSAtPiBBTlNJLmRlY19mcm9tX2hleCAnI2EwYTFhMicgICAgICAgICAgKSwgWyAxNjAsIDE2MSwgMTYyIF1cbiAgICBAdGhyb3dzICggzqliYnNmbV9fNDIgPSAtPiBBTlNJLmRlY19mcm9tX2hleCAnI3h4eHh4eCcgICAgICAgICAgKSwgL25vdCBhIHByb3BlciBoZXhhZGVjaW1hbCBSR0IgY29kZTogJyN4eHh4eHgnL1xuICAgIEB0aHJvd3MgKCDOqWJic2ZtX180MyA9IC0+IEFOU0kuZGVjX2Zyb21faGV4ICcjYWFhYWEnICAgICAgICAgICApLCAvbm90IGEgcHJvcGVyIGhleGFkZWNpbWFsIFJHQiBjb2RlOiAnI2FhYWFhJy9cbiAgICBAdGhyb3dzICggzqliYnNmbV9fNDQgPSAtPiBBTlNJLmRlY19mcm9tX2hleCAnI2FhYWFhYmInICAgICAgICAgKSwgL25vdCBhIHByb3BlciBoZXhhZGVjaW1hbCBSR0IgY29kZTogJyNhYWFhYWJiJy9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2Fuc2lfY29sb3JzX2FuZF9lZmZlY3RzOiAtPlxuICAgIHsgYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHM6IEMsIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpX2NvbG9yc19hbmRfZWZmZWN0cygpXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzQ1ID0gLT4gQy5yZWQgICAgICAgICAgICAgICksICdcXHgxQlszODoyOjoyNTU6MDoxNm0nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzQ2ID0gLT4gQy5iZ19yZWQgICAgICAgICAgICksICdcXHgxQls0ODoyOjoyNTU6MDoxNm0nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzQ3ID0gLT4gQy5vdmVybGluZTEgICAgICAgICksICdcXHgxYls1M20nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzQ4ID0gLT4gQy5vdmVybGluZTAgICAgICAgICksICdcXHgxYls1NW0nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzQ5ID0gLT4gQy5kZWZhdWx0ICAgICAgICAgICksICdcXHgxYlszOW0nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzUwID0gLT4gQy5iZ19kZWZhdWx0ICAgICAgICksICdcXHgxYls0OW0nXG4gICAgQGVxICAgICAoIM6pYmJzZm1fXzUxID0gLT4gQy5yZXNldCAgICAgICAgICAgICksICdcXHgxYlswbSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2Fuc2lfY2h1bmtlcjogLT5cbiAgICB7IGFuc2lfY29sb3JzX2FuZF9lZmZlY3RzOiBDLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHMoKVxuICAgIHsgQW5zaV9jaHVua2VyLCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpX2NodW5rZXIoKVxuICAgIGRvID0+XG4gICAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICB0ZXh0ICA9IFwiQUJDI3sgQy5ibGFjayArIEMuYmdfcmVkICsgQy5ib2xkICsgJ0RFRicgKyBDLmJvbGQwICsgQy5kZWZhdWx0ICsgQy5iZ19kZWZhdWx0IH1YWVpcIlxuICAgICAgYWMgICAgPSBuZXcgQW5zaV9jaHVua2VyKClcbiAgICAgIHVyZ2UgJ86pYmJzZm1fXzUyJywgICAgICAgICAgICAgICAgYWMuY2h1bmtpZnkgdGV4dFxuICAgICAgIyBpbmZvICfOqWJic2ZtX181MycsIGQgZm9yIGQgZnJvbSAoIGFjLmNodW5raWZ5IHRleHQgKS5jaHVua3NcbiAgICAgIGluZm8gJ86pYmJzZm1fXzU0JywgZCBmb3IgZCBmcm9tIGFjXG4gICAgICBpbmZvICfOqWJic2ZtX181NScsIGFjLndpZHRoXG4gICAgICBpbmZvICfOqWJic2ZtX181NicsIGFjLmxlbmd0aFxuICAgICAgaW5mbyAnzqliYnNmbV9fNTcnLCBhYy5oYXNfYW5zaVxuICAgICAgaW5mbyAnzqliYnNmbV9fNTgnLCBhYy50ZXh0XG4gICAgZG8gPT5cbiAgICAgIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAgIHRleHQgID0gJ0FCQ0RFRlhZWidcbiAgICAgIGFjICAgID0gbmV3IEFuc2lfY2h1bmtlcigpXG4gICAgICB1cmdlICfOqWJic2ZtX181OScsICAgICAgICAgICAgICAgIGFjLmNodW5raWZ5IHRleHRcbiAgICAgICMgaW5mbyAnzqliYnNmbV9fNjAnLCBkIGZvciBkIGZyb20gKCBhYy5jaHVua2lmeSB0ZXh0ICkuY2h1bmtzXG4gICAgICBpbmZvICfOqWJic2ZtX182MScsIGQgZm9yIGQgZnJvbSBhY1xuICAgICAgaW5mbyAnzqliYnNmbV9fNjInLCBhYy53aWR0aFxuICAgICAgaW5mbyAnzqliYnNmbV9fNjMnLCBhYy5sZW5ndGhcbiAgICAgIGluZm8gJ86pYmJzZm1fXzY0JywgYWMuaGFzX2Fuc2lcbiAgICAgIGluZm8gJ86pYmJzZm1fXzY1JywgYWMudGV4dFxuICAgIGRvID0+XG4gICAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICB0ZXh0ICA9IFwiI3sgQy5ibGFjayArIEMuYmdfcmVkICsgQy5ib2xkICsgQy5ib2xkMCArIEMuZGVmYXVsdCArIEMuYmdfZGVmYXVsdCB9XCJcbiAgICAgIGFjICAgID0gbmV3IEFuc2lfY2h1bmtlcigpXG4gICAgICB1cmdlICfOqWJic2ZtX182NicsICAgICAgICAgICAgICAgIGFjLmNodW5raWZ5IHRleHRcbiAgICAgICMgaW5mbyAnzqliYnNmbV9fNjcnLCBkIGZvciBkIGZyb20gKCBhYy5jaHVua2lmeSB0ZXh0ICkuY2h1bmtzXG4gICAgICBpbmZvICfOqWJic2ZtX182OCcsIGQgZm9yIGQgZnJvbSBhY1xuICAgICAgaW5mbyAnzqliYnNmbV9fNjknLCBhYy53aWR0aFxuICAgICAgaW5mbyAnzqliYnNmbV9fNzAnLCBhYy5sZW5ndGhcbiAgICAgIGluZm8gJ86pYmJzZm1fXzcxJywgYWMuaGFzX2Fuc2lcbiAgICAgIGluZm8gJ86pYmJzZm1fXzcyJywgYWMudGV4dFxuICAgIGRvID0+XG4gICAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICB0ZXh0ICA9ICcnXG4gICAgICBhYyAgICA9IG5ldyBBbnNpX2NodW5rZXIoKVxuICAgICAgdXJnZSAnzqliYnNmbV9fNzMnLCAgICAgICAgICAgICAgICBhYy5jaHVua2lmeSB0ZXh0XG4gICAgICAjIGluZm8gJ86pYmJzZm1fXzc0JywgZCBmb3IgZCBmcm9tICggYWMuY2h1bmtpZnkgdGV4dCApLmNodW5rc1xuICAgICAgaW5mbyAnzqliYnNmbV9fNzUnLCBkIGZvciBkIGZyb20gYWNcbiAgICAgIGluZm8gJ86pYmJzZm1fXzc2JywgYWMud2lkdGhcbiAgICAgIGluZm8gJ86pYmJzZm1fXzc3JywgYWMubGVuZ3RoXG4gICAgICBpbmZvICfOqWJic2ZtX183OCcsIGFjLmhhc19hbnNpXG4gICAgICBpbmZvICfOqWJic2ZtX183OScsIGFjLnRleHRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXF1aXJlX2Fuc2lfY2h1bmtlcjogLT5cbiAgICB7IGFuc2lfY29sb3JzX2FuZF9lZmZlY3RzOiBDLCB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHMoKVxuICAgIHsgQW5zaV9jaHVua2VyLCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpX2NodW5rZXIoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGRlYnVnICfOqWJic2ZtX181MicsIHJlcXVpcmUgJ3djd2lkdGguanMnXG4gICAgICBkZWJ1ZyAnzqliYnNmbV9fNTInLCByZXF1aXJlICd3Y3N0cmluZydcbiAgICAgICMjI1xuICAgICAgRXhjbHVkZWQ6XG5cbiAgICAgICAgKiBbKipgd2NzaXplYCoqXShodHRwczovL2dpdGh1Yi5jb20vbWFydGluaGVpZGVnZ2VyL3djc2l6ZSk6IG5vdCB2ZXJ5IHdlbGwgdXNhYmxlIGluIG1vZGVyblxuICAgICAgICAgIGVudmlyb25tZW50cyBhcyBgd2NzaXplYCwgYWNjb3JkaW5nIHRvIHRoZSBkb2NzLCBcImRpZmZlclsuLi5dcyBmcm9tIGJvdGggW2B3Y3dpZHRoYCBhbmRcbiAgICAgICAgICBgdmlzdWFsd2lkdGgtanNgXSBieSBvbmx5IHJldHVybmluZyB0aGUgd2lkdGggb2Ygb25lIGNoYXJhY3RlciAoYXMgaW50ZWdlciEpXCIsIG1lYW5pbmcgdGhhdCBpdFxuICAgICAgICAgIGNhbm5vdCwgYnkgY29uc3RydWN0aW9uLCBoYW5kbGUgY29tcG9zZWQgTGF0aW4gYWNjZW50ZWQgbGV0dGVycywgb3IgbGV0IGFsb25lIG11bHRpLWNvZGVwb2ludFxuICAgICAgICAgIGVtb2ppLiBJdCBhbHNvIHN0cnVnZ2xlcyB3aXRoIFVuaWNvZGUgc3Vycm9nYXRlIGhhbmRsaW5nLCBhdCBsZWFzdCBpbiB0cnlpbmcgdG8gbWFrZSBzZW5zZSBvZiB0aGVtXG4gICAgICAgICAgaW4gdGhlIGBSRUFETUUubWRgLlxuXG4gICAgICAgICogWyoqYHZpc3VhbHdpZHRoLWpzYCoqXShodHRwczovL2dpdGh1Yi5jb20vdG9rdWhpcm9tL3Zpc3VhbHdpZHRoLWpzKTogdG9vIG9sZCwgc3RhcnRlZCBjYS4gMjAxMSxcbiAgICAgICAgICBsYXN0IGNvbW1pdCBmcm9tIGNhLiAyMDE1XG5cbiAgICAgICMjI1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4iXX0=
//# sourceURL=../src/test-bricabrac-single-file-modules.coffee