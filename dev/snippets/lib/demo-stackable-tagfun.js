(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, blue, bold, debug, demo_stackable_tagfun_with_object, demo_stackable_tagfun_with_zwnbsp, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, require_nameit, reverse, rpr, urge, warn, whisper, white;

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
  demo_stackable_tagfun_with_zwnbsp = function() {
    var P, require_stackable_tagfun, stackable_tagfun, zwnbsp;
    //===========================================================================================================
    require_stackable_tagfun = function() {
      var create_stackable_tagfun, nameit, template;
      ({nameit} = require_nameit());
      template = {
        name: '(anonymous)',
        as_text: function(x) {
          return `${x}`;
        },
        transform: function(x) {
          return x;
        }
      };
      //.........................................................................................................
      create_stackable_tagfun = function(cfg) {
        var as_text, name, stackable_tagfun, transform;
        ({name, as_text, transform} = {...template, ...cfg});
        //.......................................................................................................
        stackable_tagfun = function(parts, ...expressions) {
          var R, expression, i, idx, len;
          debug('Ω___1', rpr(parts[0]));
          R = parts[0];
          for (idx = i = 0, len = expressions.length; i < len; idx = ++i) {
            expression = expressions[idx];
            R += (as_text(expression)) + parts[idx + 1];
          }
          R = transform(R);
          return R;
        };
        //.......................................................................................................
        nameit(name, stackable_tagfun);
        stackable_tagfun.create = create_stackable_tagfun;
        return stackable_tagfun;
      };
      return {
        //.........................................................................................................
        stackable_tagfun: create_stackable_tagfun()
      };
    };
    //===========================================================================================================
    echo('——————————————————————————————————————————————————————————————————————————————');
    ({stackable_tagfun} = require_stackable_tagfun());
    P = stackable_tagfun.create({
      name: 'parenthesize',
      as_text: function(expression) {
        if ((typeof expression) !== 'string') {
          expression = `${expression}`;
        }
        if (expression.startsWith(zwnbsp)) {
          expression = expression.slice(1);
        }
        return expression;
      },
      transform: function(result) {
        return `${zwnbsp}(${result})`;
      }
    });
    zwnbsp = '\ufeff'/* Zero-Width Non-Breaking Space; a no-op at the start of a text */
    info('Ω___2', rpr(P`first!`));
    info('Ω___3', P`second`);
    info('Ω___4', rpr(P`abc${P`jkl`}xyz`));
    info('Ω___5', rpr(P`abc${P`jkl`}mno${P`pqr${P`stu`}`}xyz`));
    info('Ω___6', rpr(P`abc${P`jkl`}mno${P`pqr${P`stu`}`}xyz`.replace(/\ufeff/gv, '█')));
    info('Ω___7', rpr(Array.from(P`abc`)));
    info('Ω___8', rpr(((Array.from(P`abc`))[0].codePointAt(0)).toString(16)));
    //.........................................................................................................
    return null;
  };

  //===========================================================================================================
  demo_stackable_tagfun_with_object = function() {
    var Html, escape_html_text, is_tagfun_call, require_escape_html_text, require_html_class, require_stackable_tagfun, stackable_tagfun, walk_nonempty_parts, walk_parts, walk_raw_nonempty_parts, walk_raw_parts, Ωt__17, Ωt__18, Ωt__19, Ωt__20, Ωt__21, Ωt__22, Ωt__23, Ωt__24, Ωt__25, Ωt__26, Ωt__27, Ωt__28, Ωt__29, Ωt__30, Ωt__31, Ωt__32;
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
    require_stackable_tagfun = function() {
      var create_stackable_tagfun, nameit, template;
      ({nameit} = require_nameit());
      template = {
        name: '(anonymous)',
        as_text: function(x) {
          return `${x}`;
        },
        transform: function(x) {
          return x;
        }
      };
      //.........................................................................................................
      create_stackable_tagfun = function(cfg) {
        var as_text, name, stackable_tagfun, transform;
        ({name, as_text, transform} = {...template, ...cfg});
        //.......................................................................................................
        stackable_tagfun = function(parts, ...expressions) {
          var R, expression, i, idx, len;
          debug('Ω___9', rpr(parts[0]));
          R = as_text(parts[0]);
          for (idx = i = 0, len = expressions.length; i < len; idx = ++i) {
            expression = expressions[idx];
            R += (as_text(expression)) + (as_text(parts[idx + 1]));
          }
          R = transform(R);
          return R;
        };
        //.......................................................................................................
        nameit(name, stackable_tagfun);
        stackable_tagfun.create = create_stackable_tagfun;
        return stackable_tagfun;
      };
      return {
        //.........................................................................................................
        stackable_tagfun: create_stackable_tagfun()
      };
    };
    //===========================================================================================================
    ({Html} = require_html_class());
    ({escape_html_text} = require_escape_html_text());
    ({stackable_tagfun} = require_stackable_tagfun());
    // P = stackable_tagfun.create
    //   name:       'parenthesize'
    //   as_text:    ( expression  ) ->
    //     return expression if expression instanceof Html
    //     expression = "#{expression}" unless typeof expression is 'string'
    //     return escape_html_text expression
    //   transform:  ( result      ) -> "#{zwnbsp}(#{result})"
    // info 'Ω__10', rpr P"first!"
    // info 'Ω__11',     P"second"
    // info 'Ω__12', rpr P"abc#{P"jkl"}xyz"
    // info 'Ω__13', rpr P"abc#{P"jkl"}mno#{P"pqr#{P"stu"}"}xyz"
    // info 'Ω__14', rpr Array.from P"abc"
    // info 'Ω__15', rpr ( ( Array.from P"abc" )[ 0 ].codePointAt 0 ).toString 16
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
    //=========================================================================================================
    // echo '——————————————————————————————————————————————————————————————————————————————'
    this.eq((Ωt__17 = function() {
      return [...(walk_parts``)];
    }), [
      {
        chunk: '',
        isa: 'chunk'
      }
    ]);
    this.eq((Ωt__18 = function() {
      return [...(walk_nonempty_parts``)];
    }), []);
    this.eq((Ωt__19 = function() {
      return [...(walk_parts`a`)];
    }), [
      {
        chunk: 'a',
        isa: 'chunk'
      }
    ]);
    this.eq((Ωt__20 = function() {
      return [...(walk_parts`\na`)];
    }), [
      {
        chunk: '\na',
        isa: 'chunk'
      }
    ]);
    this.eq((Ωt__21 = function() {
      return [...(walk_raw_parts`\na`)];
    }), [
      {
        chunk: '\\na',
        isa: 'chunk'
      }
    ]);
    this.eq((Ωt__22 = function() {
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
    this.eq((Ωt__23 = function() {
      return [...(walk_nonempty_parts`${1}`)];
    }), [
      {
        value: 1,
        isa: 'value'
      }
    ]);
    this.eq((Ωt__24 = function() {
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
    this.eq((Ωt__25 = function() {
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
    this.eq((Ωt__26 = function() {
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
    this.eq((Ωt__27 = function() {
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
    this.eq((Ωt__28 = function() {
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
    this.eq((Ωt__29 = function() {
      return [...(walk_parts("atoz"))];
    }), [
      {
        chunk: 'atoz',
        isa: 'chunk'
      }
    ]);
    this.eq((Ωt__30 = function() {
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
    this.eq((Ωt__31 = function() {
      return [...(walk_nonempty_parts(12))];
    }), [
      {
        value: 12,
        isa: 'value'
      }
    ]);
    this.eq((Ωt__32 = function() {
      return [...(walk_nonempty_parts(''))];
    }), []);
    //.........................................................................................................
    return null;
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
      return (new Test(guytest_cfg)).test({demo_stackable_tagfun_with_object});
    })();
  }

}).call(this);

//# sourceMappingURL=demo-stackable-tagfun.js.map