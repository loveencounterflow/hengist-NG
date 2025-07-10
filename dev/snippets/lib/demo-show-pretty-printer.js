(async function() {
  'use strict';
  var $, C, COLOR, GUY, PATH, Show, TMPTRM, alert, colors, debug, demo_show, echo, execa, f, gold, help, info, inspect, isa_jsid, jsid_re, log, object_prototype, plain, pod_prototypes, praise, red, reverse, rpr, show, type_of, urge, warn, whisper, white, write,
    indexOf = [].indexOf;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, white, gold, red, reverse, log} = GUY.trm);

  PATH = require('node:path');

  ({execa, $} = require('execa'));

  ({f} = require('../../../apps/effstring'));

  write = function(p) {
    return process.stdout.write(p);
  };

  TMPTRM = GUY.trm;

  C = require('ansis');

  /*
  black
  blue
  green
  cyan
  sepia
  indigo
  steel
  brown
  olive
  lime
  red
  crimson
  plum
  pink
  orange
  gold
  tan
  yellow
  grey
  darkgrey
  white
  BASE03
  BASE02
  BASE01
  BASE00
  BASE0
  BASE1
  BASE2
  BASE3
  YELLOW
  ORANGE
  RED
  MAGENTA
  VIOLET
  BLUE
  CYAN
  GREEN
  */
  //-----------------------------------------------------------------------------------------------------------
  object_prototype = Object.getPrototypeOf({});

  pod_prototypes = [null, object_prototype];

  //-----------------------------------------------------------------------------------------------------------
  type_of = function(x) {
    /* TAINT consider to return x.constructor.name */
    var jstypeof, millertype, ref;
    if (x === null) {
      //.........................................................................................................
      /* Primitives: */
      return 'null';
    }
    if (x === void 0) {
      return 'undefined';
    }
    if ((x === +2e308) || (x === -2e308)) {
      return 'infinity';
    }
    if (x === true) {
      // return 'boolean'      if ( x is true ) or ( x is false )
      return 'true';
    }
    if (x === false) {
      return 'false';
    }
    if (Number.isNaN(x)) {
      return 'nan';
    }
    if (Number.isFinite(x)) {
      return 'float';
    }
    if (ref = Object.getPrototypeOf(x), indexOf.call(pod_prototypes, ref) >= 0) {
      // return 'unset'        if x is unset
      return 'pod';
    }
    //.........................................................................................................
    switch (jstypeof = typeof x) {
      case 'string':
        return 'text';
      case 'symbol':
        return 'symbol';
    }
    if (Array.isArray(x)) {
      //.........................................................................................................
      return 'list';
    }
    switch (millertype = ((Object.prototype.toString.call(x)).replace(/^\[object ([^\]]+)\]$/, '$1')).toLowerCase()) {
      case 'regexp':
        return 'regex';
    }
    return millertype;
  };

  // switch millertype = Object::toString.call x
  //   when '[object Function]'            then return 'function'
  //   when '[object AsyncFunction]'       then return 'asyncfunction'
  //   when '[object GeneratorFunction]'   then return 'generatorfunction'

  //===========================================================================================================
  /* thx to https://github.com/sindresorhus/identifier-regex */
  jsid_re = /^[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}]*$/v;

  isa_jsid = function(x) {
    return ((typeof x) === 'string') && jsid_re.test(x);
  };

  //===========================================================================================================
  Show = class Show {
    //---------------------------------------------------------------------------------------------------------
    constructor() {
      var me;
      me = (x) => {
        var text;
        return ((function() {
          var results;
          results = [];
          for (text of this.pen(x)) {
            results.push(text);
          }
          return results;
        }).call(this)).join('');
      };
      Object.setPrototypeOf(me, this);
      this.state = {
        level: 0,
        ended_with_nl: false
      };
      this.spacer = '\x20\x20';
      Object.defineProperty(this, 'dent', {
        get: () => {
          return this.spacer.repeat(this.state.level);
        }
      });
      return me;
    }

    //---------------------------------------------------------------------------------------------------------
    * pen(x) {
      var text;
      for (text of this.dispatch(x)) {
        this.state.ended_with_nl = text.endsWith('\n');
        yield text;
      }
      if (!this.state.ended_with_nl) {
        this.state.ended_with_nl = true;
      }
      // yield '\n'
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    go_down() {
      this.state.level++;
      return this.state.level;
    }

    //---------------------------------------------------------------------------------------------------------
    go_up() {
      if (this.state.level < 1) {
        throw new Error("Ω___1 unable to go below level 0");
      }
      this.state.level--;
      return this.state.level;
    }

    //---------------------------------------------------------------------------------------------------------
    * dispatch(x) {
      var method;
      if ((method = this[`show_${type_of(x)}`]) != null) {
        yield* method.call(this, x);
      } else {
        yield* this.show_other(x);
      }
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    _show_key(key) {
      var t;
      if (isa_jsid(key)) {
        return TMPTRM.cyan(key);
      }
      return [
        ...((function() {
          var results;
          results = [];
          for (t of this.dispatch(key)) {
            results.push(t);
          }
          return results;
        }).call(this))
      ].join('');
    }

    //---------------------------------------------------------------------------------------------------------
    * show_pod(x) {
      /* TAINT code duplication */
      var has_keys, key, text, value;
      has_keys = false;
      yield colors.pod('{');
//.......................................................................................................
      for (key in x) {
        value = x[key];
        has_keys = true;
        yield ' ' + (this._show_key(key)) + colors.pod(': ');
        for (text of this.dispatch(value)) {
          yield text;
        }
        yield colors.pod(',');
      }
      //.......................................................................................................
      yield colors.pod(!has_keys ? '}' : ' }');
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    * show_map(x) {
      /* TAINT code duplication */
      var has_keys, key, text, value, y;
      has_keys = false;
      yield colors.map('map{');
//.......................................................................................................
      for (y of x.entries()) {
        [key, value] = y;
        has_keys = true;
        yield ' ' + (this._show_key(key)) + colors.map(': ');
        for (text of this.dispatch(value)) {
          yield text;
        }
        yield colors.map(',');
      }
      //.......................................................................................................
      yield colors.map(!has_keys ? '}' : ' }');
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    * show_list(x) {
      var element, i, len, text;
      yield colors.list('[');
      for (i = 0, len = x.length; i < len; i++) {
        element = x[i];
/* TAINT code duplication */
        for (text of this.dispatch(element)) {
          yield ' ' + text + (colors.list(','));
        }
      }
      yield colors.list((x.length === 0) ? ']' : ' ]');
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    * show_set(x) {
      var element, text;
      yield colors.set('set[');
      for (element of x.keys()) {
/* TAINT code duplication */
        for (text of this.dispatch(element)) {
          yield ' ' + text + colors.set(',');
        }
      }
      yield colors.set((x.length === 0) ? ']' : ' ]');
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    * show_text(x) {
      if (indexOf.call(x, "'") >= 0) {
        yield colors.text('"' + (x.replace(/"/g, '\\"')) + '"');
      } else {
        yield colors.text("'" + (x.replace(/'/g, "\\'")) + "'");
      }
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    * show_float(x) {
      yield (colors.float(x.toString()));
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    * show_regex(x) {
      yield (colors.regex(x.toString()));
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    /* full words: */
    // show_true:      ( x ) -> yield ( colors.true      'true'      )
    // show_false:     ( x ) -> yield ( colors.false     'false'     )
    // show_undefined: ( x ) -> yield ( colors.undefined 'undefined' )
    // show_null:      ( x ) -> yield ( colors.null      'null'      )
    // show_nan:       ( x ) -> yield ( colors.nan       'NaN'       )
    /* (mostly) single letters: */
    * show_true(x) {
      return (yield (colors.true(' T ')));
    }

    * show_false(x) {
      return (yield (colors.false(' F ')));
    }

    * show_undefined(x) {
      return (yield (colors.undefined(' U ')));
    }

    * show_null(x) {
      return (yield (colors.null(' N ')));
    }

    * show_nan(x) {
      return (yield (colors.nan(' NaN ')));
    }

    //---------------------------------------------------------------------------------------------------------
    * show_other(x) {
      // yield '\n' unless @state.ended_with_nl
      yield colors.other(`${x}`);
      return null;
    }

  };

  //===========================================================================================================
  COLOR = new C.Ansis().extend({
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
    //.........................................................................................................
    FANCYRED: '#fd5230'
  });

  // oomph: ( x ) -> debug 'Ω___2', x; return "~~~ #{x} ~~~"
  colors = {
    pod: function(x) {
      return COLOR.gold(x);
    },
    map: function(x) {
      return COLOR.gold(x);
    },
    list: function(x) {
      return COLOR.gold(x);
    },
    set: function(x) {
      return COLOR.gold(x);
    },
    text: function(x) {
      return COLOR.wheat(x);
    },
    float: function(x) {
      return COLOR.FANCYRED(x);
    },
    regex: function(x) {
      return COLOR.plum(x);
    },
    true: function(x) {
      return COLOR.inverse.bold.italic.lime(x);
    },
    false: function(x) {
      return COLOR.inverse.bold.italic.orange(x);
    },
    undefined: function(x) {
      return COLOR.inverse.bold.italic.blue(x);
    },
    null: function(x) {
      return COLOR.inverse.bold.italic.deeppink(x);
    },
    nan: function(x) {
      return COLOR.inverse.bold.italic.turquoise(x);
    },
    other: function(x) {
      return COLOR.inverse.red(x);
    }
  };

  //===========================================================================================================
  show = new Show();

  //===========================================================================================================
  demo_show = function() {
    debug('Ω___3', show);
    debug('Ω___4', show.state);
    debug('Ω___5', rpr(show.dent));
    debug('Ω___6', show.go_down());
    debug('Ω___7', rpr(show.dent));
    echo();
    echo('-----------------------------------------------');
    echo(show("foo 'bar'"));
    echo('-----------------------------------------------');
    echo(show({}));
    echo('-----------------------------------------------');
    echo(show({
      kong: 108,
      low: 923,
      numbers: [10, 11, 12]
    }));
    echo('-----------------------------------------------');
    echo(show([]));
    echo('-----------------------------------------------');
    echo(show(['some', 'words', 'to', 'show', 1, -1, false]));
    echo('-----------------------------------------------');
    echo(show(new Map([['kong', 108], ['low', 923], [971, 'word'], [true, '+1'], ['a b c', false]])));
    echo('-----------------------------------------------');
    echo(show(new Set(['some', 'words', true, false, null, void 0, 3.1415926, 0/0])));
    echo('-----------------------------------------------');
    echo(show(/abc[de]/));
    echo('-----------------------------------------------');
    echo(show(Buffer.from('abcäöü')));
    echo('-----------------------------------------------');
    echo();
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var D, em, k, my_theme;
      // await demo_execa()
      demo_show();
      echo('Ω___8', C.hex('#FF75D1').bold.underline('Pink'), 'XXX');
      echo('Ω___9', C.yellow(C.red.bold.inverse('Pink'), 'XXX'));
      echo('Ω__10', C.yellow(`!!! ${C.red.bold.inverse('Pink')} XXX`));
      echo('Ω__11', TMPTRM.yellow(`!!! ${TMPTRM.red(TMPTRM.bold(TMPTRM.reverse('Pink')))} XXX`));
      echo('Ω__12', C.bgBlue.yellow.bold(" ooops "));
      echo('Ω__13', C.bgBlue.red.bold(" ooops "));
      echo('Ω__14', C.bgBlue.green.bold(" ooops "));
      echo('Ω__15', C.bgWhite.red.bold(-12345.87));
      echo();
      echo('Ω__16', C.bgWhite.red.bold` there was an ${C.bgRed.white`ERROR`} in the ${C.dim`pudding`} `);
      echo();
      echo('Ω__17', C.bgWhite.red.bold` there was an ${C.inverse`ERROR`} in the ${C.dim`pudding`} `);
      echo();
      echo('Ω__18', C.bgYellow.black.bold` there was an ${C.inverse`ERROR`} in the ${C.dim`pudding`} `);
      echo();
      echo('Ω__19', C.bgYellow.dim.black.bold` there was an ${C.inverse`ERROR`} in the ${C.dim`pudding`} `);
      echo();
      echo('Ω__20', C.bgBlack.cyan.bold` there was an ${C.inverse`ERROR`} in the \n${C.dim`pudding`} `);
      echo();
      echo('Ω__21', C.red.italic`Error: ${C.yellow`Module ${C.green`ansis`} is missing!`} Installation required.`);
      echo();
      my_theme = {
        orange: '#ffab40',
        pink: '#ff75d1',
        red: '#ff0000'
      };
      D = new C.Ansis().extend(my_theme);
      echo('Ω__22', (function() {
        var results;
        results = [];
        for (k in D) {
          results.push(k);
        }
        return results;
      })());
      echo('Ω__23', TMPTRM.red("Error: Installation required."));
      echo('Ω__24', C.red`Error: Installation required.`);
      echo('Ω__25', D.red`Error: Installation required.`);
      echo('Ω__26', D.orange.italic`Error: ${D.blue`Module ${D.pink`ansis`} is missing!`} Installation required.`);
      echo();
      red = D.red;
      echo('Ω__27', red`woo`);
      echo('Ω__28', red.italic`woo`);
      em = red.italic.bold.inverse;
      return echo('Ω__29', em`emphasize: ${show({
        d: 6
      })} not bad`);
    })();
  }

}).call(this);

//# sourceMappingURL=demo-show-pretty-printer.js.map