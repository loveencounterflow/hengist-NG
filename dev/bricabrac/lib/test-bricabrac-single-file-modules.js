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
      var CP, cp, demo_wc_max_line_length, get_rough_unicode_category, get_wc_max_line_length, glyph, guytest_cfg, i, illegal_codepoint_patterns, len, ranges, text, texts, ucc_descriptor_from_chr, ucc_patterns;
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
      // ( new Test guytest_cfg ).test { tests, }
      // echo "\x1b[6nxyz"
      // echo "abc\x1b[6nxyz"
      // echo "abcdef\x1b[6nxyz"
      // echo "abcdef𓂋\x1b[6nxyz"
      // echo "abcdef两\x1b[6nxyz"
      // echo "abcdef𬺱\x1b[6nxyz"
      // echo "abcdef𒁾\x1b[6nxyz"
      // f = ( ctx ) -> debug 'Ωbbsfm__80', ctx.arguments
      // g = ( P... ) -> debug 'Ωbbsfm__81', f { arguments, }
      // g 5, 'd'
      // CP = require 'node:child_process'
      // cfg =
      //   encoding: 'utf-8'
      //   stdin:    'inherit'
      //   stdout:   'inherit'
      //   stderr:   'inherit'
      // # debug 'Ωbbsfm__82', CP.execSync "ls", cfg
      // # debug 'Ωbbsfm__83', CP.exec """echo -en "xxxxxxxxx\x1b[6n" ; read\n""", cfg
      // # { stdin, stdout, stderr, } =
      // echo '—————————————————————————————————————————————'
      // cp = CP.exec """echo -en 'xxxxxxxxx\x1b[6n'""", cfg
      // # cp = CP.exec """echo -en 'xxxxxxxxx\x1b[6n' ; read""", cfg
      // # cp = CP.exec '''echo '' ; echo -en 'x两\\x1b[6n' ; tmux display-message -p '两: #{cursor_x}' >> /tmp/output''', cfg
      // cp.stdin.resume()
      // cp.stdin.setEncoding  'utf-8' # 0
      // cp.stdout.setEncoding 'utf-8' # 1
      // cp.stderr.setEncoding 'utf-8' # 2
      // # debug 'Ωbbsfm__84', rpr cp.stdin.read()
      // # debug 'Ωbbsfm__85', rpr cp.stdout.read()
      // # debug 'Ωbbsfm__86', rpr cp.stderr.read()
      // # debug 'Ωbbsfm__87', rpr cp.read()
      // cp.stdin.on  'data', ( data ) -> help 'Ωbbsfm__88', rpr data # 0
      // cp.stdout.on 'data', ( data ) -> urge 'Ωbbsfm__89', rpr data # 1
      // cp.stderr.on 'data', ( data ) -> warn 'Ωbbsfm__90', rpr data # 2
      // echo '—————————————————————————————————————————————'
      // cp = CP.spawn 'echo', [ '-en', 'xxxxxxxxx\x1b[6n', ], cfg
      // # cp = CP.spawn 'ls', [ '-AlF', ], cfg
      // cp.stdin.setEncoding  'utf-8'
      // cp.stdout.setEncoding 'utf-8'
      // cp.stderr.setEncoding 'utf-8'
      // # debug 'Ωbbsfm__91', rpr cp.stdin.read()
      // # debug 'Ωbbsfm__92', rpr cp.stdout.read()
      // # debug 'Ωbbsfm__93', rpr cp.stderr.read()
      // # debug 'Ωbbsfm__94', rpr cp.read()
      // cp.stdin.on  'data', ( data ) -> help 'Ωbbsfm__95', rpr data # 0
      // cp.stdout.on 'data', ( data ) -> urge 'Ωbbsfm__96', rpr data # 1
      // cp.stderr.on 'data', ( data ) -> warn 'Ωbbsfm__97', rpr data # 2

      // illegal_codepoints: [ # see https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Special_code_points
      //   [   0x0000,   0x0000, ] # zero
      //   [   0x0001,   0x001f, ] # lower controls
      //   [   0x007f,   0x009f, ] # higher controls
      //   [   0xd800,   0xdfff, ] # surrogates
      //   [   0xfdd0,   0xfdef, ]
      //   [   0xfffe,   0xffff, ]
      //   [  0x1fffe,  0x1ffff, ]
      //   [  0x2fffe,  0x2ffff, ]
      //   [  0x3fffe,  0x3ffff, ]
      //   [  0x4fffe,  0x4ffff, ]
      //   [  0x5fffe,  0x5ffff, ]
      //   [  0x6fffe,  0x6ffff, ]
      //   [  0x7fffe,  0x7ffff, ]
      //   [  0x8fffe,  0x8ffff, ]
      //   [  0x9fffe,  0x9ffff, ]
      //   [  0xafffe,  0xaffff, ]
      //   [  0xbfffe,  0xbffff, ]
      //   [  0xcfffe,  0xcffff, ]
      //   [  0xdfffe,  0xdffff, ]
      //   [  0xefffe,  0xeffff, ]
      //   [  0xffffe,  0xfffff, ]
      //   [ 0x10fffe, 0x10ffff, ] ]
      illegal_codepoint_patterns = {
        unassigned: /^\p{Cn}$/v, // Control
        control: /^\p{C}$/v, // Control
        // surrogate:  ///^\p{C}$///v # Surrogate
        // letter:     ///^\p{L}$///v
        space: /^\p{Zs}$/v,
        separator: /^\p{Z}$/v,
        mark: /^\p{M}$/v
      };
      ucc_patterns = {
        Cc: {
          code: 'Cc',
          pattern: /^\p{Cc}$/v,
          name: "Other, Control"
        },
        Cf: {
          code: 'Cf',
          pattern: /^\p{Cf}$/v,
          name: "Other, Format"
        },
        Cn: {
          code: 'Cn',
          pattern: /^\p{Cn}$/v,
          name: "Other, Not Assigned"
        },
        Co: {
          code: 'Co',
          pattern: /^\p{Co}$/v,
          name: "Other, Private Use"
        },
        Cs: {
          code: 'Cs',
          pattern: /^\p{Cs}$/v,
          name: "Other, Surrogate"
        },
        LC: {
          code: 'LC',
          pattern: /^\p{LC}$/v,
          name: "Letter, Cased"
        },
        Ll: {
          code: 'Ll',
          pattern: /^\p{Ll}$/v,
          name: "Letter, Lowercase"
        },
        Lm: {
          code: 'Lm',
          pattern: /^\p{Lm}$/v,
          name: "Letter, Modifier"
        },
        Lo: {
          code: 'Lo',
          pattern: /^\p{Lo}$/v,
          name: "Letter, Other"
        },
        Lt: {
          code: 'Lt',
          pattern: /^\p{Lt}$/v,
          name: "Letter, Titlecase"
        },
        Lu: {
          code: 'Lu',
          pattern: /^\p{Lu}$/v,
          name: "Letter, Uppercase"
        },
        Mc: {
          code: 'Mc',
          pattern: /^\p{Mc}$/v,
          name: "Mark, Spacing Combining"
        },
        Me: {
          code: 'Me',
          pattern: /^\p{Me}$/v,
          name: "Mark, Enclosing"
        },
        Mn: {
          code: 'Mn',
          pattern: /^\p{Mn}$/v,
          name: "Mark, Nonspacing"
        },
        Nd: {
          code: 'Nd',
          pattern: /^\p{Nd}$/v,
          name: "Number, Decimal Digit"
        },
        Nl: {
          code: 'Nl',
          pattern: /^\p{Nl}$/v,
          name: "Number, Letter"
        },
        No: {
          code: 'No',
          pattern: /^\p{No}$/v,
          name: "Number, Other"
        },
        Pc: {
          code: 'Pc',
          pattern: /^\p{Pc}$/v,
          name: "Punctuation, Connector"
        },
        Pd: {
          code: 'Pd',
          pattern: /^\p{Pd}$/v,
          name: "Punctuation, Dash"
        },
        Pe: {
          code: 'Pe',
          pattern: /^\p{Pe}$/v,
          name: "Punctuation, Close"
        },
        Pf: {
          code: 'Pf',
          pattern: /^\p{Pf}$/v,
          name: "Punctuation, Final quote"
        },
        Pi: {
          code: 'Pi',
          pattern: /^\p{Pi}$/v,
          name: "Punctuation, Initial quote"
        },
        Po: {
          code: 'Po',
          pattern: /^\p{Po}$/v,
          name: "Punctuation, Other"
        },
        Ps: {
          code: 'Ps',
          pattern: /^\p{Ps}$/v,
          name: "Punctuation, Open"
        },
        Sc: {
          code: 'Sc',
          pattern: /^\p{Sc}$/v,
          name: "Symbol, Currency"
        },
        Sk: {
          code: 'Sk',
          pattern: /^\p{Sk}$/v,
          name: "Symbol, Modifier"
        },
        Sm: {
          code: 'Sm',
          pattern: /^\p{Sm}$/v,
          name: "Symbol, Math"
        },
        So: {
          code: 'So',
          pattern: /^\p{So}$/v,
          name: "Symbol, Other"
        },
        Zl: {
          code: 'Zl',
          pattern: /^\p{Zl}$/v,
          name: "Separator, Line"
        },
        Zp: {
          code: 'Zp',
          pattern: /^\p{Zp}$/v,
          name: "Separator, Paragraph"
        },
        Zs: {
          code: 'Zs',
          pattern: /^\p{Zs}$/v,
          name: "Separator, Space"
        }
      };
      ucc_descriptor_from_chr = function(chr) {
        var _, dsc;
        for (_ in ucc_patterns) {
          dsc = ucc_patterns[_];
          if (dsc.pattern.test(chr)) {
            return dsc;
          }
        }
        throw new Error("Ωbbsfm__98 unable to determine Unicode category code");
      };
      get_rough_unicode_category = function(chr) {
        var name, pattern;
        for (name in illegal_codepoint_patterns) {
          pattern = illegal_codepoint_patterns[name];
          if (pattern.test(chr)) {
            return name;
          }
        }
        return 'other';
      };
      // echo """#!/usr/bin/env bash"""
      // echo """set -euo pipefail"""
      // echo """echo -ne '' > /tmp/output"""
      ranges = [
        (function() {
          var results = [];
          for (var i = 0x00000; i <= 512; i++){ results.push(i); }
          return results;
        }).apply(this),
        (function() {
          var results = [];
          for (var i = 0x0ff00; i <= 65791; i++){ results.push(i); }
          return results;
        }).apply(this),
        (function() {
          var results = [];
          for (var i = 0x13000; i <= 78079; i++){ results.push(i); }
          return results;
        }).apply(this)
      ];
      f = function() {};
      //   for range in ranges
      //     for cid in range
      //       cid_hex = "U+#{( cid.toString 16 ).padStart 4, '0'}"
      //       chr     = String.fromCodePoint cid
      //       ucc     = get_rough_unicode_category chr
      //       debug 'Ωbbsfm__99', cid_hex, ( rpr chr ), ucc
      //       switch ucc
      //         when 'control', 'separator'
      //           echo """echo "#{cid_hex}: 0" >> /tmp/output"""
      //         when 'space', 'mark'
      //           # echo """echo ; echo -ne "x#{chr}\\x1b[6n" ; IFS=';' read -sdR -p $'\\E[6n' ROW COL ; echo "#{cid_hex}: $COL" >> /tmp/output"""
      //           echo """echo '' ; echo -en 'xx#{chr}\\x1b[6n' ; tmux display-message -p '#{cid_hex}: \#{cursor_x}' >> /tmp/output"""
      //         else
      //           # echo """echo ; echo -ne "x#{chr}\\x1b[6n" ; IFS=';' read -sdR -p $'\\E[6n' ROW COL ; echo "#{chr}: $COL" >> /tmp/output"""
      //           echo """echo '' ; echo -en 'xx#{chr}\\x1b[6n' ; tmux display-message -p '#{chr}: \#{cursor_x}' >> /tmp/output"""
      //   return null
      debug('Ωbbsfm_100', (glyph = '🙋🏽'), Array.from(glyph));
      debug('Ωbbsfm_102', (glyph = 'x쒇'), Array.from(glyph));
      debug('Ωbbsfm_103', (glyph = 'x별'), Array.from(glyph));
      debug('Ωbbsfm_104', (glyph = 'xㅂ ㅕ ㄹ'), Array.from(glyph));
      debug('Ωbbsfm_105', (glyph = 'xㅂㅕㄹ'), Array.from(glyph));
      debug('Ωbbsfm_106', (glyph = 'x벼ᄅ'), Array.from(glyph));
      debug('Ωbbsfm_107', (glyph = 'xᄇ\u{200D}ᅧ\u{200D}ᆯ'), Array.from(glyph));
      debug('Ωbbsfm_108', (glyph = 'xﾲￊﾩ'), Array.from(glyph));
      echo(`echo 'xx' | wc --max-line-length`); // 2
      echo(`echo 'x🙋🏽' | wc --max-line-length`); // 5
      echo(`echo 'x쒇' | wc --max-line-length`); // 3
      echo(`echo 'x별' | wc --max-line-length`); // 3
      echo(`echo 'xㅂ ㅕ ㄹ' | wc --max-line-length`); // 9
      echo(`echo 'xㅂㅕㄹ' | wc --max-line-length`); // 7
      echo(`echo 'x벼ᄅ' | wc --max-line-length`); // 5
      echo(`echo 'xᄇ\u{200D}ᅧ\u{200D}ᆯ' | wc --max-line-length`); // 3
      echo(`echo 'xﾲￊﾩ' | wc --max-line-length`); // 4
      echo(`echo 'xa︠b︡' | wc --max-line-length`); // 3
      echo(`echo 'xâ' | wc --max-line-length`); // 2
      CP = require('node:child_process');
      texts = [
        'xxx', // 2
        'x🙋🏽x', // 5
        'x쒇x', // 3
        'x별x', // 3
        'xㅂ ㅕ ㄹx', // 9
        'xㅂㅕㄹx', // 7
        'xﾲￊﾩx', // 4
        'x별Lx', // 4
        'xa︠b︡x', // 3
        'xa︠b︡x', // 3
        'xâx', // 2
        'x𓃵x',
        'x﷽x'
      ];
      get_wc_max_line_length = function(text) {
        var width1_txt;
        width1_txt = CP.execSync(`echo ${rpr(text)} | wc --max-line-length`, {
          encoding: 'utf-8'
        });
        return parseInt(width1_txt, 10);
      };
      for (i = 0, len = texts.length; i < len; i++) {
        text = texts[i];
        echo('Ωbbsfm_109', rpr(text), (get_wc_max_line_length(text)) - 2);
      }
      demo_wc_max_line_length = function() {
        var chr, cid, cid_hex, j, k, len1, len2, range, ucc;
        for (j = 0, len1 = ranges.length; j < len1; j++) {
          range = ranges[j];
          for (k = 0, len2 = range.length; k < len2; k++) {
            cid = range[k];
            cid_hex = `U+${(cid.toString(16)).padStart(4, '0')}`;
            chr = String.fromCodePoint(cid);
            ucc = get_rough_unicode_category(chr);
            // debug 'Ωbbsfm__99', cid_hex, ( rpr chr ), ucc
            echo(cid_hex, (get_wc_max_line_length(`x${chr}x`)) - 2);
          }
        }
        // switch ucc
        //   when 'control', 'separator'
        //     echo """echo "#{cid_hex}: 0" >> /tmp/output"""
        //   when 'space', 'mark'
        //     # echo """echo ; echo -ne "x#{chr}\\x1b[6n" ; IFS=';' read -sdR -p $'\\E[6n' ROW COL ; echo "#{cid_hex}: $COL" >> /tmp/output"""
        //     echo """echo '' ; echo -en 'xx#{chr}\\x1b[6n' ; tmux display-message -p '#{cid_hex}: \#{cursor_x}' >> /tmp/output"""
        //   else
        //     # echo """echo ; echo -ne "x#{chr}\\x1b[6n" ; IFS=';' read -sdR -p $'\\E[6n' ROW COL ; echo "#{chr}: $COL" >> /tmp/output"""
        //     echo """echo '' ; echo -en 'xx#{chr}\\x1b[6n' ; tmux display-message -p '#{chr}: \#{cursor_x}' >> /tmp/output"""
        return null;
      };
      cp = CP.spawn("echo", ['helo'], {
        encoding: 'utf-8'
      });
      cp.stdin.setEncoding('utf-8');
      cp.stdout.setEncoding('utf-8');
      cp.stderr.setEncoding('utf-8');
      cp.stdin.on('data', function(data) {
        return help('Ωbbsfm__95', rpr(data)); // 0
      });
      cp.stdout.on('data', function(data) {
        return urge('Ωbbsfm__96', rpr(data)); // 1
      });
      cp.stderr.on('data', function(data) {
        return warn('Ωbbsfm__97', rpr(data)); // 2
      });
      cp.stdin.write("ls\n");
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=test-bricabrac-single-file-modules.js.map