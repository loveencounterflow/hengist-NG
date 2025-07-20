(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, require_escape_html_text, require_html_class, require_nameit, require_tagfun_tools, reverse, rpr, tests, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-proxy'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  //===========================================================================================================
  /* NOTE Future Single-File Module */
  require_nameit = function() {
    var nameit;
    nameit = function(name, fn) {
      Object.defineProperty(fn, 'name', {
        value: name
      });
      return fn;
    };
    //---------------------------------------------------------------------------------------------------------
    return {nameit};
  };

  //===========================================================================================================
  /* NOTE Future Single-File Module */
  require_escape_html_text = function() {
    var escape_html_text;
    escape_html_text = function(text) {
      var R;
      R = text;
      R = R.replace(/&/g, '&amp;');
      R = R.replace(/</g, '&lt;');
      R = R.replace(/>/g, '&gt;');
      return R;
    };
    return {escape_html_text};
  };

  //===========================================================================================================
  require_html_class = function() {
    var Html;
    //---------------------------------------------------------------------------------------------------------
    Html = class Html {
      //-------------------------------------------------------------------------------------------------------
      constructor(name, atrs, content) {
        this.name = name;
        this.atrs = atrs != null ? atrs : new Map();
        this.content = content != null ? content : [];
        return void 0;
      }

      //-------------------------------------------------------------------------------------------------------
      toString() {
        var R, e, i, len;
        R = [];
        R.push(`<${name}`);
        R.push(" ATRs");
        R.push(">");
        for (i = 0, len = content.length; i < len; i++) {
          e = content[i];
          R.push(e);
        }
        R.push(`</${name}>`);
        return R.join('');
      }

    };
    return {Html};
  };

  //===========================================================================================================
  require_tagfun_tools = function() {
    var is_tagfun_call, walk_nonempty_parts, walk_parts, walk_raw_nonempty_parts, walk_raw_parts;
    //---------------------------------------------------------------------------------------------------------
    is_tagfun_call = function(...P) {
      if (!Array.isArray(P[0])) {
        return false;
      }
      if (!Object.isFrozen(P[0])) {
        return false;
      }
      if (P[0].raw == null) {
        return false;
      }
      return true;
    };
    //---------------------------------------------------------------------------------------------------------
    walk_raw_parts = function*(chunks, ...values) {
      var chunk;
      chunks = (function() {
        var i, len, ref, results;
        ref = chunks.raw;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          chunk = ref[i];
          results.push(chunk);
        }
        return results;
      })();
      chunks.raw = chunks.slice(0);
      Object.freeze(chunks);
      return (yield* walk_parts(chunks, ...values));
    };
    //---------------------------------------------------------------------------------------------------------
    walk_parts = function*(chunks, ...values) {
      var i, idx, len, value;
      if (!is_tagfun_call(chunks, ...values)) {
        if (values.length !== 0) {
          throw new Error(`Ω__16 expected 1 argument in non-template call, got ${arguments.length}`);
        }
        if (typeof chunks === 'string') {
          [chunks, values] = [[chunks], []];
        } else {
          [chunks, values] = [['', ''], [chunks]];
        }
      }
      yield ({
        //.......................................................................................................
        chunk: chunks[0],
        isa: 'chunk'
      });
      for (idx = i = 0, len = values.length; i < len; idx = ++i) {
        value = values[idx];
        yield ({
          value,
          isa: 'value'
        });
        yield ({
          chunk: chunks[idx + 1],
          isa: 'chunk'
        });
      }
      //.......................................................................................................
      return null;
    };
    //---------------------------------------------------------------------------------------------------------
    walk_raw_nonempty_parts = function*(chunks, ...values) {
      var part;
      for (part of walk_raw_parts(chunks, ...values)) {
        if (!((part.chunk === '') || (part.value === ''))) {
          yield part;
        }
      }
      return null;
    };
    //---------------------------------------------------------------------------------------------------------
    walk_nonempty_parts = function*(chunks, ...values) {
      var part;
      for (part of walk_parts(chunks, ...values)) {
        if (!((part.chunk === '') || (part.value === ''))) {
          yield part;
        }
      }
      return null;
    };
    //---------------------------------------------------------------------------------------------------------
    return {is_tagfun_call, walk_parts, walk_nonempty_parts, walk_raw_parts, walk_raw_nonempty_parts};
  };

  //===========================================================================================================
  tests = {
    walk_tagfun_call_parts: function() {
      var walk_nonempty_parts, walk_parts, walk_raw_nonempty_parts, walk_raw_parts, Ωt__17, Ωt__18, Ωt__19, Ωt__20, Ωt__21, Ωt__22, Ωt__23, Ωt__24, Ωt__25, Ωt__26, Ωt__27, Ωt__28, Ωt__29, Ωt__30, Ωt__31, Ωt__32, Ωt__33;
      // { Html,                     } = require_html_class()
      // { escape_html_text,         } = require_escape_html_text()
      // { stackable_tagfun,         } = require_stackable_tagfun()
      ({walk_parts, walk_nonempty_parts, walk_raw_parts, walk_raw_nonempty_parts} = require_tagfun_tools());
      //-------------------------------------------------------------------------------------------------------
      this.eq((Ωt__17 = function() {
        return [...(walk_parts``)];
      }), [
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__18 = function() {
        return [...(walk_parts(""))];
      }), [
        {
          chunk: '',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__19 = function() {
        return [...(walk_nonempty_parts``)];
      }), []);
      this.eq((Ωt__20 = function() {
        return [...(walk_nonempty_parts(''))];
      }), []);
      this.eq((Ωt__21 = function() {
        return [...(walk_parts`a`)];
      }), [
        {
          chunk: 'a',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__22 = function() {
        return [...(walk_parts`\na`)];
      }), [
        {
          chunk: '\na',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__23 = function() {
        return [...(walk_raw_parts`\na`)];
      }), [
        {
          chunk: '\\na',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__24 = function() {
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
      this.eq((Ωt__25 = function() {
        return [...(walk_nonempty_parts`${1}`)];
      }), [
        {
          value: 1,
          isa: 'value'
        }
      ]);
      this.eq((Ωt__26 = function() {
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
      this.eq((Ωt__27 = function() {
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
      this.eq((Ωt__28 = function() {
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
      this.eq((Ωt__29 = function() {
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
      this.eq((Ωt__30 = function() {
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
      this.eq((Ωt__31 = function() {
        return [...(walk_parts(`a${1}z${2}`))];
      }), [
        {
          chunk: 'a1z2',
          isa: 'chunk'
        }
      ]);
      this.eq((Ωt__32 = function() {
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
      this.eq((Ωt__33 = function() {
        return [...(walk_nonempty_parts(12))];
      }), [
        {
          value: 12,
          isa: 'value'
        }
      ]);
      //.........................................................................................................
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
      // ( new Test guytest_cfg ).test { demo_stackable_tagfun_with_zwnbsp, }
      return (new Test(guytest_cfg)).test({tests});
    })();
  }

}).call(this);

//# sourceMappingURL=demo-stackable-tagfun.js.map