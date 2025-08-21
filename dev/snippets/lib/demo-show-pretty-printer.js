(async function() {
  'use strict';
  var $, C, COLOR, GUY, PATH, Show, TMPTRM, alert, colors, debug, demo_color_effects, demo_show, echo, execa, f, gold, help, info, inspect, isa_jsid, jsid_re, log, object_prototype, plain, pod_prototypes, praise, red, reverse, rpr, show, templates, type_of, urge, warn, whisper, white, write,
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
  templates = {
    show: {
      indentation: null
    }
  };

  //===========================================================================================================
  Show = class Show {
    //---------------------------------------------------------------------------------------------------------
    constructor(cfg) {
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
      this.cfg = {...templates.show, ...cfg};
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
    FANCYRED: '#fd5230',
    FANCYORANGE: '#fd6d30'
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
      return COLOR.inverse.bold.italic.FANCYORANGE(x);
    },
    undefined: function(x) {
      return COLOR.inverse.bold.italic.magenta(x);
    },
    null: function(x) {
      return COLOR.inverse.bold.italic.blue(x);
    },
    nan: function(x) {
      return COLOR.inverse.bold.italic.magenta(x);
    },
    other: function(x) {
      return COLOR.inverse.red(x);
    }
  };

  //===========================================================================================================
  show = new Show();

  //===========================================================================================================
  demo_show = function() {
    var v_1, v_10, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9;
    debug('Ω___3', show);
    debug('Ω___4', show.state);
    debug('Ω___5', rpr(show.dent));
    debug('Ω___6', show.go_down());
    debug('Ω___7', rpr(show.dent));
    echo();
    echo('————————————————————————————————————————————————————————————————');
    echo(show(v_1 = "foo 'bar'"));
    echo('————————————————————————————————————————————————————————————————');
    echo(show(v_2 = {}));
    echo('————————————————————————————————————————————————————————————————');
    echo(show(v_3 = {
      kong: 108,
      low: 923,
      numbers: [10, 11, 12]
    }));
    echo('————————————————————————————————————————————————————————————————');
    echo(show(v_4 = []));
    echo('————————————————————————————————————————————————————————————————');
    echo(show(v_5 = ['some', 'words', 'to', 'show', 1, -1, false]));
    echo('————————————————————————————————————————————————————————————————');
    echo(show(v_6 = new Map([['kong', 108], ['low', 923], [971, 'word'], [true, '+1'], ['a b c', false]])));
    echo('————————————————————————————————————————————————————————————————');
    echo(show(v_7 = new Set(['some', 'words', true, false, null, void 0, 3.1415926, 0/0])));
    echo('————————————————————————————————————————————————————————————————');
    echo(show(v_8 = /abc[de]/));
    echo('————————————————————————————————————————————————————————————————');
    echo(show(v_9 = Buffer.from('abcäöü')));
    echo('————————————————————————————————————————————————————————————————');
    echo(show(v_10 = {v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9})); // v_10, v_11, v_12, v_13, v_14, }
    v_10.v_10 = v_10;
    echo('————————————————————————————————————————————————————————————————');
    // echo show v_10 = { v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10, } # v_10, v_11, v_12, v_13, v_14, }
    echo('————————————————————————————————————————————————————————————————');
    echo();
    return null;
  };

  //===========================================================================================================
  demo_color_effects = function() {
    var D, em, k, my_theme;
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
    echo('Ω__29', em`emphasize: ${show({
      d: 6
    })} not bad`);
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // await demo_execa()
      return demo_show();
    })();
  }

  // demo_color_effects()

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tc2hvdy1wcmV0dHktcHJpbnRlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBQTtBQUFBLE1BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLGtCQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxnQkFBQSxFQUFBLEtBQUEsRUFBQSxjQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBO0lBQUEsb0JBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsWUFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxJQUpGLEVBS0UsR0FMRixFQU1FLE9BTkYsRUFPRSxHQVBGLENBQUEsR0FPNEIsR0FBRyxDQUFDLEdBUGhDOztFQVFBLElBQUEsR0FBNEIsT0FBQSxDQUFRLFdBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsQ0FERixDQUFBLEdBQzRCLE9BQUEs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QSxTQUFBLEVBQTRCLFNBMUI1QjtJQTJCQSxXQUFBLEVBQTRCLFNBM0I1QjtJQTRCQSxjQUFBLEVBQTRCLFNBNUI1QjtJQTZCQSxVQUFBLEVBQTRCLFNBN0I1QjtJQThCQSxVQUFBLEVBQTRCLFNBOUI1QjtJQStCQSxPQUFBLEVBQTRCLFNBL0I1QjtJQWdDQSxVQUFBLEVBQTRCLFNBaEM1QjtJQWlDQSxZQUFBLEVBQTRCLFNBakM1QjtJQWtDQSxhQUFBLEVBQTRCLFNBbEM1QjtJQW1DQSxhQUFBLEVBQTRCLFNBbkM1QjtJQW9DQSxhQUFBLEVBQTRCLFNBcEM1QjtJQXFDQSxVQUFBLEVBQTRCLFNBckM1QjtJQXNDQSxRQUFBLEVBQTRCLFNBdEM1QjtJQXVDQSxXQUFBLEVBQTRCLFNBdkM1QjtJQXdDQSxPQUFBLEVBQTRCLFNBeEM1QjtJQXlDQSxVQUFBLEVBQTRCLFNBekM1QjtJQTBDQSxTQUFBLEVBQTRCLFNBMUM1QjtJQTJDQSxXQUFBLEVBQTRCLFNBM0M1QjtJQTRDQSxXQUFBLEVBQTRCLFNBNUM1QjtJQTZDQSxTQUFBLEVBQTRCLFNBN0M1QjtJQThDQSxVQUFBLEVBQTRCLFNBOUM1QjtJQStDQSxJQUFBLEVBQTRCLFNBL0M1QjtJQWdEQSxTQUFBLEVBQTRCLFNBaEQ1QjtJQWlEQSxJQUFBLEVBQTRCLFNBakQ1QjtJQWtEQSxLQUFBLEVBQTRCLFNBbEQ1QjtJQW1EQSxXQUFBLEVBQTRCLFNBbkQ1QjtJQW9EQSxRQUFBLEVBQTRCLFNBcEQ1QjtJQXFEQSxPQUFBLEVBQTRCLFNBckQ1QjtJQXNEQSxTQUFBLEVBQTRCLFNBdEQ1QjtJQXVEQSxNQUFBLEVBQTRCLFNBdkQ1QjtJQXdEQSxLQUFBLEVBQTRCLFNBeEQ1QjtJQXlEQSxLQUFBLEVBQTRCLFNBekQ1QjtJQTBEQSxRQUFBLEVBQTRCLFNBMUQ1QjtJQTJEQSxhQUFBLEVBQTRCLFNBM0Q1QjtJQTREQSxTQUFBLEVBQTRCLFNBNUQ1QjtJQTZEQSxZQUFBLEVBQTRCLFNBN0Q1QjtJQThEQSxTQUFBLEVBQTRCLFNBOUQ1QjtJQStEQSxVQUFBLEVBQTRCLFNBL0Q1QjtJQWdFQSxTQUFBLEVBQTRCLFNBaEU1QjtJQWlFQSxvQkFBQSxFQUE0QixTQWpFNUI7SUFrRUEsU0FBQSxFQUE0QixTQWxFNUI7SUFtRUEsVUFBQSxFQUE0QixTQW5FNUI7SUFvRUEsU0FBQSxFQUE0QixTQXBFNUI7SUFxRUEsV0FBQSxFQUE0QixTQXJFNUI7SUFzRUEsYUFBQSxFQUE0QixTQXRFNUI7SUF1RUEsWUFBQSxFQUE0QixTQXZFNUI7SUF3RUEsY0FBQSxFQUE0QixTQXhFNUI7SUF5RUEsY0FBQSxFQUE0QixTQXpFNUI7SUEwRUEsV0FBQSxFQUE0QixTQTFFNUI7SUEyRUEsSUFBQSxFQUE0QixTQTNFNUI7SUE0RUEsU0FBQSxFQUE0QixTQTVFNUI7SUE2RUEsS0FBQSxFQUE0QixTQTdFNUI7SUE4RUEsT0FBQSxFQUE0QixTQTlFNUI7SUErRUEsTUFBQSxFQUE0QixTQS9FNUI7SUFnRkEsZ0JBQUEsRUFBNEIsU0FoRjVCO0lBaUZBLFVBQUEsRUFBNEIsU0FqRjVCO0lBa0ZBLFlBQUEsRUFBNEIsU0FsRjVCO0lBbUZBLFlBQUEsRUFBNEIsU0FuRjVCO0lBb0ZBLGNBQUEsRUFBNEIsU0FwRjVCO0lBcUZBLGVBQUEsRUFBNEIsU0FyRjVCO0lBc0ZBLGlCQUFBLEVBQTRCLFNBdEY1QjtJQXVGQSxlQUFBLEVBQTRCLFNBdkY1QjtJQXdGQSxlQUFBLEVBQTRCLFNBeEY1QjtJQXlGQSxZQUFBLEVBQTRCLFNBekY1QjtJQTBGQSxTQUFBLEVBQTRCLFNBMUY1QjtJQTJGQSxTQUFBLEVBQTRCLFNBM0Y1QjtJQTRGQSxRQUFBLEVBQTRCLFNBNUY1QjtJQTZGQSxXQUFBLEVBQTRCLFNBN0Y1QjtJQThGQSxJQUFBLEVBQTRCLFNBOUY1QjtJQStGQSxPQUFBLEVBQTRCLFNBL0Y1QjtJQWdHQSxLQUFBLEVBQTRCLFNBaEc1QjtJQWlHQSxTQUFBLEVBQTRCLFNBakc1QjtJQWtHQSxNQUFBLEVBQTRCLFNBbEc1QjtJQW1HQSxTQUFBLEVBQTRCLFNBbkc1QjtJQW9HQSxNQUFBLEVBQTRCLFNBcEc1QjtJQXFHQSxhQUFBLEVBQTRCLFNBckc1QjtJQXNHQSxTQUFBLEVBQTRCLFNBdEc1QjtJQXVHQSxhQUFBLEVBQTRCLFNBdkc1QjtJQXdHQSxhQUFBLEVBQTRCLFNBeEc1QjtJQXlHQSxVQUFBLEVBQTRCLFNBekc1QjtJQTBHQSxTQUFBLEVBQTRCLFNBMUc1QjtJQTJHQSxJQUFBLEVBQTRCLFNBM0c1QjtJQTRHQSxJQUFBLEVBQTRCLFNBNUc1QjtJQTZHQSxJQUFBLEVBQTRCLFNBN0c1QjtJQThHQSxVQUFBLEVBQTRCLFNBOUc1QjtJQStHQSxNQUFBLEVBQTRCLFNBL0c1QjtJQWdIQSxHQUFBLEVBQTRCLFNBaEg1QjtJQWlIQSxTQUFBLEVBQTRCLFNBakg1QjtJQWtIQSxTQUFBLEVBQTRCLFNBbEg1QjtJQW1IQSxXQUFBLEVBQTRCLFNBbkg1QjtJQW9IQSxNQUFBLEVBQTRCLFNBcEg1QjtJQXFIQSxVQUFBLEVBQTRCLFNBckg1QjtJQXNIQSxRQUFBLEVBQTRCLFNBdEg1QjtJQXVIQSxRQUFBLEVBQTRCLFNBdkg1QjtJQXdIQSxNQUFBLEVBQTRCLFNBeEg1QjtJQXlIQSxNQUFBLEVBQTRCLFNBekg1QjtJQTBIQSxPQUFBLEVBQTRCLFNBMUg1QjtJQTJIQSxTQUFBLEVBQTRCLFNBM0g1QjtJQTRIQSxTQUFBLEVBQTRCLFNBNUg1QjtJQTZIQSxJQUFBLEVBQTRCLFNBN0g1QjtJQThIQSxXQUFBLEVBQTRCLFNBOUg1QjtJQStIQSxTQUFBLEVBQTRCLFNBL0g1QjtJQWdJQSxHQUFBLEVBQTRCLFNBaEk1QjtJQWlJQSxJQUFBLEVBQTRCLFNBakk1QjtJQWtJQSxPQUFBLEVBQTRCLFNBbEk1QjtJQW1JQSxNQUFBLEVBQTRCLFNBbkk1QjtJQW9JQSxTQUFBLEVBQTRCLFNBcEk1QjtJQXFJQSxNQUFBLEVBQTRCLFNBckk1QjtJQXNJQSxLQUFBLEVBQTRCLFNBdEk1QjtJQXVJQSxLQUFBLEVBQTRCLFNBdkk1QjtJQXdJQSxVQUFBLEVBQTRCLFNBeEk1QjtJQXlJQSxNQUFBLEVBQTRCLFNBekk1QjtJQTBJQSxXQUFBLEVB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QyxHQUFQLENBQVcsK0JBQVgsQ0FBZDtJQUNBLElBQUEsQ0FBSyxPQUFMLEVBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQSw2QkFBQSxDQUFuQjtJQUNBLElBQUEsQ0FBSyxPQUFMLEVBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQSw2QkFBQSxDQUFuQjtJQUNBLElBQUEsQ0FBSyxPQUFMLEVBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUEsT0FBQSxDQUFBLENBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQSxPQUFBLENBQUEsQ0FBVSxDQUFDLENBQUMsSUFBSSxDQUFBLEtBQUEsQ0FBaEIsQ0FBQSxZQUFBLENBQWhCLENBQUEsdUJBQUEsQ0FBN0I7SUFDQSxJQUFBLENBQUE7SUFDQSxHQUFBLEdBQU0sQ0FBQyxDQUFDO0lBQ1IsSUFBQSxDQUFLLE9BQUwsRUFBYyxHQUFHLENBQUEsR0FBQSxDQUFqQjtJQUNBLElBQUEsQ0FBSyxPQUFMLEVBQWMsR0FBRyxDQUFDLE1BQU0sQ0FBQSxHQUFBLENBQXhCO0lBQ0EsRUFBQSxHQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3JCLElBQUEsQ0FBSyxPQUFMLEVBQWMsRUFBRSxDQUFBLFdBQUEsQ0FBQSxDQUFlLElBQUEsQ0FBSztNQUFFLENBQUEsRUFBRztJQUFMLENBQUwsQ0FBZixDQUFBLFFBQUEsQ0FBaEI7QUFDQSxXQUFPO0VBdENZLEVBdGNyQjs7O0VBK2VBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7YUFFdEMsU0FBQSxDQUFBO0lBRnNDLENBQUEsSUFBeEM7OztFQS9lQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdkZW1vLWV4ZWNhJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdvbGRcbiAgcmVkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xueyBleGVjYVxuICAkIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2V4ZWNhJ1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xud3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcblRNUFRSTSAgICAgICAgICAgICAgICAgICAgPSBHVVkudHJtXG5DICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnYW5zaXMnXG5cblxuIyMjXG5ibGFja1xuYmx1ZVxuZ3JlZW5cbmN5YW5cbnNlcGlhXG5pbmRpZ29cbnN0ZWVsXG5icm93blxub2xpdmVcbmxpbWVcbnJlZFxuY3JpbXNvblxucGx1bVxucGlua1xub3JhbmdlXG5nb2xkXG50YW5cbnllbGxvd1xuZ3JleVxuZGFya2dyZXlcbndoaXRlXG5CQVNFMDNcbkJBU0UwMlxuQkFTRTAxXG5CQVNFMDBcbkJBU0UwXG5CQVNFMVxuQkFTRTJcbkJBU0UzXG5ZRUxMT1dcbk9SQU5HRVxuUkVEXG5NQUdFTlRBXG5WSU9MRVRcbkJMVUVcbkNZQU5cbkdSRUVOXG4jIyNcblxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbm9iamVjdF9wcm90b3R5cGUgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHt9XG5wb2RfcHJvdG90eXBlcyAgICA9IFsgbnVsbCwgb2JqZWN0X3Byb3RvdHlwZSwgXVxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnR5cGVfb2YgPSAoIHggKSAtPlxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMjIyBQcmltaXRpdmVzOiAjIyNcbiAgcmV0dXJuICdudWxsJyAgICAgICAgIGlmIHggaXMgbnVsbFxuICByZXR1cm4gJ3VuZGVmaW5lZCcgICAgaWYgeCBpcyB1bmRlZmluZWRcbiAgcmV0dXJuICdpbmZpbml0eScgICAgIGlmICggeCBpcyArSW5maW5pdHkgKSBvciAoIHggaXMgLUluZmluaXR5IClcbiAgIyByZXR1cm4gJ2Jvb2xlYW4nICAgICAgaWYgKCB4IGlzIHRydWUgKSBvciAoIHggaXMgZmFsc2UgKVxuICByZXR1cm4gJ3RydWUnICAgICAgICAgaWYgKCB4IGlzIHRydWUgKVxuICByZXR1cm4gJ2ZhbHNlJyAgICAgICAgaWYgKCB4IGlzIGZhbHNlIClcbiAgcmV0dXJuICduYW4nICAgICAgICAgIGlmIE51bWJlci5pc05hTiAgICAgeFxuICByZXR1cm4gJ2Zsb2F0JyAgICAgICAgaWYgTnVtYmVyLmlzRmluaXRlICB4XG4gICMgcmV0dXJuICd1bnNldCcgICAgICAgIGlmIHggaXMgdW5zZXRcbiAgcmV0dXJuICdwb2QnICAgICAgICAgIGlmICggT2JqZWN0LmdldFByb3RvdHlwZU9mIHggKSBpbiBwb2RfcHJvdG90eXBlc1xuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHN3aXRjaCBqc3R5cGVvZiA9IHR5cGVvZiB4XG4gICAgd2hlbiAnc3RyaW5nJyAgICAgICAgICAgICAgICAgICAgICAgdGhlbiByZXR1cm4gJ3RleHQnXG4gICAgd2hlbiAnc3ltYm9sJyAgICAgICAgICAgICAgICAgICAgICAgdGhlbiByZXR1cm4gJ3N5bWJvbCdcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICByZXR1cm4gJ2xpc3QnICAgICAgICAgaWYgQXJyYXkuaXNBcnJheSAgeFxuICAjIyMgVEFJTlQgY29uc2lkZXIgdG8gcmV0dXJuIHguY29uc3RydWN0b3IubmFtZSAjIyNcbiAgc3dpdGNoIG1pbGxlcnR5cGUgPSAoICggT2JqZWN0Ojp0b1N0cmluZy5jYWxsIHggKS5yZXBsYWNlIC9eXFxbb2JqZWN0IChbXlxcXV0rKVxcXSQvLCAnJDEnICkudG9Mb3dlckNhc2UoKVxuICAgIHdoZW4gJ3JlZ2V4cCcgICAgICAgICAgICAgICAgICAgICAgIHRoZW4gcmV0dXJuICdyZWdleCdcbiAgcmV0dXJuIG1pbGxlcnR5cGVcbiAgIyBzd2l0Y2ggbWlsbGVydHlwZSA9IE9iamVjdDo6dG9TdHJpbmcuY2FsbCB4XG4gICMgICB3aGVuICdbb2JqZWN0IEZ1bmN0aW9uXScgICAgICAgICAgICB0aGVuIHJldHVybiAnZnVuY3Rpb24nXG4gICMgICB3aGVuICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyAgICAgICB0aGVuIHJldHVybiAnYXN5bmNmdW5jdGlvbidcbiAgIyAgIHdoZW4gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyAgIHRoZW4gcmV0dXJuICdnZW5lcmF0b3JmdW5jdGlvbidcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4jIyMgdGh4IHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvaWRlbnRpZmllci1yZWdleCAjIyNcbmpzaWRfcmUgICA9IC8vL14gWyAkIF8gXFxwe0lEX1N0YXJ0fSBdIFsgJCBfIFxcdTIwMEMgXFx1MjAwRCBcXHB7SURfQ29udGludWV9IF0qICQvLy92XG5pc2FfanNpZCAgPSAoIHggKSAtPiAoICggdHlwZW9mIHggKSBpcyAnc3RyaW5nJyApIGFuZCBqc2lkX3JlLnRlc3QgeFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudGVtcGxhdGVzID1cbiAgc2hvdzogeyBpbmRlbnRhdGlvbjogbnVsbCwgfVxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNsYXNzIFNob3dcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0cnVjdG9yOiAoIGNmZyApIC0+XG4gICAgbWUgPSAoIHggKSA9PlxuICAgICAgcmV0dXJuICggdGV4dCBmb3IgdGV4dCBmcm9tIEBwZW4geCApLmpvaW4gJydcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YgbWUsIEBcbiAgICBAY2ZnICAgID0geyB0ZW1wbGF0ZXMuc2hvdy4uLiwgY2ZnLi4uLCB9XG4gICAgQHN0YXRlICA9IHsgbGV2ZWw6IDAsIGVuZGVkX3dpdGhfbmw6IGZhbHNlLCB9XG4gICAgQHNwYWNlciA9ICdcXHgyMFxceDIwJ1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBALCAnZGVudCcsXG4gICAgICBnZXQ6ID0+IEBzcGFjZXIucmVwZWF0IEBzdGF0ZS5sZXZlbFxuICAgIHJldHVybiBtZVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcGVuOiAoIHggKSAtPlxuICAgIGZvciB0ZXh0IGZyb20gQGRpc3BhdGNoIHhcbiAgICAgIEBzdGF0ZS5lbmRlZF93aXRoX25sID0gdGV4dC5lbmRzV2l0aCAnXFxuJ1xuICAgICAgeWllbGQgdGV4dFxuICAgIHVubGVzcyBAc3RhdGUuZW5kZWRfd2l0aF9ubFxuICAgICAgQHN0YXRlLmVuZGVkX3dpdGhfbmwgPSB0cnVlXG4gICAgICAjIHlpZWxkICdcXG4nXG4gICAgcmV0dXJuIG51bGxcblxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ29fZG93bjogLT5cbiAgICBAc3RhdGUubGV2ZWwrK1xuICAgIHJldHVybiBAc3RhdGUubGV2ZWxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdvX3VwOiAtPlxuICAgIGlmIEBzdGF0ZS5sZXZlbCA8IDFcbiAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pX19fMSB1bmFibGUgdG8gZ28gYmVsb3cgbGV2ZWwgMFwiXG4gICAgQHN0YXRlLmxldmVsLS1cbiAgICByZXR1cm4gQHN0YXRlLmxldmVsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkaXNwYXRjaDogKCB4ICkgLT5cbiAgICBpZiAoIG1ldGhvZCA9IEBbIFwic2hvd18je3R5cGVfb2YgeH1cIiBdICk/XG4gICAgICB5aWVsZCBmcm9tIG1ldGhvZC5jYWxsIEAsIHhcbiAgICBlbHNlXG4gICAgICB5aWVsZCBmcm9tIEBzaG93X290aGVyIHhcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgX3Nob3dfa2V5OiAoIGtleSApIC0+XG4gICAgaWYgaXNhX2pzaWQga2V5IHRoZW4gcmV0dXJuIFRNUFRSTS5jeWFuIGtleVxuICAgIHJldHVybiBbICggdCBmb3IgdCBmcm9tIEBkaXNwYXRjaCBrZXkgKS4uLiwgXS5qb2luICcnXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzaG93X3BvZDogKCB4ICkgLT5cbiAgICBoYXNfa2V5cyA9IGZhbHNlXG4gICAgeWllbGQgY29sb3JzLnBvZCAneydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBrZXksIHZhbHVlIG9mIHhcbiAgICAgICMjIyBUQUlOVCBjb2RlIGR1cGxpY2F0aW9uICMjI1xuICAgICAgaGFzX2tleXMgPSB0cnVlXG4gICAgICB5aWVsZCAnICcgKyAoIEBfc2hvd19rZXkga2V5ICkgKyBjb2xvcnMucG9kICc6ICdcbiAgICAgIGZvciB0ZXh0IGZyb20gQGRpc3BhdGNoIHZhbHVlXG4gICAgICAgIHlpZWxkIHRleHRcbiAgICAgIHlpZWxkIGNvbG9ycy5wb2QgJywnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB5aWVsZCBjb2xvcnMucG9kIGlmICggbm90IGhhc19rZXlzICkgdGhlbiAnfScgZWxzZSAnIH0nXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNob3dfbWFwOiAoIHggKSAtPlxuICAgIGhhc19rZXlzID0gZmFsc2VcbiAgICB5aWVsZCBjb2xvcnMubWFwICdtYXB7J1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIFsga2V5LCB2YWx1ZSwgXSBmcm9tIHguZW50cmllcygpXG4gICAgICAjIyMgVEFJTlQgY29kZSBkdXBsaWNhdGlvbiAjIyNcbiAgICAgIGhhc19rZXlzID0gdHJ1ZVxuICAgICAgeWllbGQgJyAnICsgKCBAX3Nob3dfa2V5IGtleSApICsgY29sb3JzLm1hcCAnOiAnXG4gICAgICBmb3IgdGV4dCBmcm9tIEBkaXNwYXRjaCB2YWx1ZVxuICAgICAgICB5aWVsZCB0ZXh0XG4gICAgICB5aWVsZCBjb2xvcnMubWFwICcsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgeWllbGQgY29sb3JzLm1hcCBpZiAoIG5vdCBoYXNfa2V5cyApIHRoZW4gJ30nIGVsc2UgJyB9J1xuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzaG93X2xpc3Q6ICggeCApIC0+XG4gICAgeWllbGQgY29sb3JzLmxpc3QgJ1snXG4gICAgZm9yIGVsZW1lbnQgaW4geFxuICAgICAgIyMjIFRBSU5UIGNvZGUgZHVwbGljYXRpb24gIyMjXG4gICAgICBmb3IgdGV4dCBmcm9tIEBkaXNwYXRjaCBlbGVtZW50XG4gICAgICAgIHlpZWxkICcgJyArIHRleHQgKyAoIGNvbG9ycy5saXN0ICcsJyApXG4gICAgeWllbGQgY29sb3JzLmxpc3QgaWYgKCB4Lmxlbmd0aCBpcyAwICkgdGhlbiAnXScgZWxzZSAnIF0nXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNob3dfc2V0OiAoIHggKSAtPlxuICAgIHlpZWxkIGNvbG9ycy5zZXQgJ3NldFsnXG4gICAgZm9yIGVsZW1lbnQgZnJvbSB4LmtleXMoKVxuICAgICAgIyMjIFRBSU5UIGNvZGUgZHVwbGljYXRpb24gIyMjXG4gICAgICBmb3IgdGV4dCBmcm9tIEBkaXNwYXRjaCBlbGVtZW50XG4gICAgICAgIHlpZWxkICcgJyArIHRleHQgKyBjb2xvcnMuc2V0ICcsJ1xuICAgIHlpZWxkIGNvbG9ycy5zZXQgaWYgKCB4Lmxlbmd0aCBpcyAwICkgdGhlbiAnXScgZWxzZSAnIF0nXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNob3dfdGV4dDogKCB4ICkgLT5cbiAgICBpZiBcIidcIiBpbiB4IHRoZW4gIHlpZWxkIGNvbG9ycy50ZXh0ICdcIicgKyAoIHgucmVwbGFjZSAvXCIvZywgJ1xcXFxcIicgKSArICdcIidcbiAgICBlbHNlICAgICAgICAgICAgICB5aWVsZCBjb2xvcnMudGV4dCBcIidcIiArICggeC5yZXBsYWNlIC8nL2csIFwiXFxcXCdcIiApICsgXCInXCJcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2hvd19mbG9hdDogKCB4ICkgLT5cbiAgICB5aWVsZCAoIGNvbG9ycy5mbG9hdCB4LnRvU3RyaW5nKCkgKVxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzaG93X3JlZ2V4OiAoIHggKSAtPlxuICAgIHlpZWxkICggY29sb3JzLnJlZ2V4IHgudG9TdHJpbmcoKSApXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMjIyBmdWxsIHdvcmRzOiAjIyNcbiAgIyBzaG93X3RydWU6ICAgICAgKCB4ICkgLT4geWllbGQgKCBjb2xvcnMudHJ1ZSAgICAgICd0cnVlJyAgICAgIClcbiAgIyBzaG93X2ZhbHNlOiAgICAgKCB4ICkgLT4geWllbGQgKCBjb2xvcnMuZmFsc2UgICAgICdmYWxzZScgICAgIClcbiAgIyBzaG93X3VuZGVmaW5lZDogKCB4ICkgLT4geWllbGQgKCBjb2xvcnMudW5kZWZpbmVkICd1bmRlZmluZWQnIClcbiAgIyBzaG93X251bGw6ICAgICAgKCB4ICkgLT4geWllbGQgKCBjb2xvcnMubnVsbCAgICAgICdudWxsJyAgICAgIClcbiAgIyBzaG93X25hbjogICAgICAgKCB4ICkgLT4geWllbGQgKCBjb2xvcnMubmFuICAgICAgICdOYU4nICAgICAgIClcbiAgIyMjIChtb3N0bHkpIHNpbmdsZSBsZXR0ZXJzOiAjIyNcbiAgc2hvd190cnVlOiAgICAgICggeCApIC0+IHlpZWxkICggY29sb3JzLnRydWUgICAgICAnIFQgJyAgICAgKVxuICBzaG93X2ZhbHNlOiAgICAgKCB4ICkgLT4geWllbGQgKCBjb2xvcnMuZmFsc2UgICAgICcgRiAnICAgICApXG4gIHNob3dfdW5kZWZpbmVkOiAoIHggKSAtPiB5aWVsZCAoIGNvbG9ycy51bmRlZmluZWQgJyBVICcgICAgIClcbiAgc2hvd19udWxsOiAgICAgICggeCApIC0+IHlpZWxkICggY29sb3JzLm51bGwgICAgICAnIE4gJyAgICAgKVxuICBzaG93X25hbjogICAgICAgKCB4ICkgLT4geWllbGQgKCBjb2xvcnMubmFuICAgICAgICcgTmFOICcgICApXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzaG93X290aGVyOiAoIHggKSAtPlxuICAgICMgeWllbGQgJ1xcbicgdW5sZXNzIEBzdGF0ZS5lbmRlZF93aXRoX25sXG4gICAgeWllbGQgY29sb3JzLm90aGVyIFwiI3t4fVwiXG4gICAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5DT0xPUiA9IG5ldyBDLkFuc2lzKCkuZXh0ZW5kXG4gIGFsaWNlYmx1ZTogICAgICAgICAgICAgICAgICAnI2YwZjhmZidcbiAgYW50aXF1ZXdoaXRlOiAgICAgICAgICAgICAgICcjZmFlYmQ3J1xuICBhcXVhOiAgICAgICAgICAgICAgICAgICAgICAgJyMwMGZmZmYnXG4gIGFxdWFtYXJpbmU6ICAgICAgICAgICAgICAgICAnIzdmZmZkNCdcbiAgYXp1cmU6ICAgICAgICAgICAgICAgICAgICAgICcjZjBmZmZmJ1xuICBiZWlnZTogICAgICAgICAgICAgICAgICAgICAgJyNmNWY1ZGMnXG4gIGJpc3F1ZTogICAgICAgICAgICAgICAgICAgICAnI2ZmZTRjNCdcbiAgYmxhY2s6ICAgICAgICAgICAgICAgICAgICAgICcjMDAwMDAwJ1xuICBibGFuY2hlZGFsbW9uZDogICAgICAgICAgICAgJyNmZmViY2QnXG4gIGJsdWU6ICAgICAgICAgICAgICAgICAgICAgICAnIzAwMDBmZidcbiAgYmx1ZXZpb2xldDogICAgICAgICAgICAgICAgICcjOGEyYmUyJ1xuICBicm93bjogICAgICAgICAgICAgICAgICAgICAgJyNhNTJhMmEnXG4gIGJ1cmx5d29vZDogICAgICAgICAgICAgICAgICAnI2RlYjg4NydcbiAgY2FkZXRibHVlOiAgICAgICAgICAgICAgICAgICcjNWY5ZWEwJ1xuICBjaGFydHJldXNlOiAgICAgICAgICAgICAgICAgJyM3ZmZmMDAnXG4gIGNob2NvbGF0ZTogICAgICAgICAgICAgICAgICAnI2QyNjkxZSdcbiAgY29yYWw6ICAgICAgICAgICAgICAgICAgICAgICcjZmY3ZjUwJ1xuICBjb3JuZmxvd2VyYmx1ZTogICAgICAgICAgICAgJyM2NDk1ZWQnXG4gIGNvcm5zaWxrOiAgICAgICAgICAgICAgICAgICAnI2ZmZjhkYydcbiAgY3JpbXNvbjogICAgICAgICAgICAgICAgICAgICcjZGMxNDNjJ1xuICBjeWFuOiAgICAgICAgICAgICAgICAgICAgICAgJyMwMGZmZmYnXG4gIGRhcmtibHVlOiAgICAgICAgICAgICAgICAgICAnIzAwMDA4YidcbiAgZGFya2N5YW46ICAgICAgICAgICAgICAgICAgICcjMDA4YjhiJ1xuICBkYXJrZ29sZGVucm9kOiAgICAgICAgICAgICAgJyNiODg2MGInXG4gIGRhcmtncmF5OiAgICAgICAgICAgICAgICAgICAnI2E5YTlhOSdcbiAgZGFya2dyZWVuOiAgICAgICAgICAgICAgICAgICcjMDA2NDAwJ1xuICBkYXJra2hha2k6ICAgICAgICAgICAgICAgICAgJyNiZGI3NmInXG4gIGRhcmttYWdlbnRhOiAgICAgICAgICAgICAgICAnIzhiMDA4YidcbiAgZGFya29saXZlZ3JlZW46ICAgICAgICAgICAgICcjNTU2YjJmJ1xuICBkYXJrb3JhbmdlOiAgICAgICAgICAgICAgICAgJyNmZjhjMDAnXG4gIGRhcmtvcmNoaWQ6ICAgICAgICAgICAgICAgICAnIzk5MzJjYydcbiAgZGFya3JlZDogICAgICAgICAgICAgICAgICAgICcjOGIwMDAwJ1xuICBkYXJrc2FsbW9uOiAgICAgICAgICAgICAgICAgJyNlOTk2N2EnXG4gIGRhcmtzZWFncmVlbjogICAgICAgICAgICAgICAnIzhmYmM4ZidcbiAgZGFya3NsYXRlYmx1ZTogICAgICAgICAgICAgICcjNDgzZDhiJ1xuICBkYXJrc2xhdGVncmF5OiAgICAgICAgICAgICAgJyMyZjRmNGYnXG4gIGRhcmt0dXJxdW9pc2U6ICAgICAgICAgICAgICAnIzAwY2VkMSdcbiAgZGFya3Zpb2xldDogICAgICAgICAgICAgICAgICcjOTQwMGQzJ1xuICBkZWVwcGluazogICAgICAgICAgICAgICAgICAgJyNmZjE0OTMnXG4gIGRlZXBza3libHVlOiAgICAgICAgICAgICAgICAnIzAwYmZmZidcbiAgZGltZ3JheTogICAgICAgICAgICAgICAgICAgICcjNjk2OTY5J1xuICBkb2RnZXJibHVlOiAgICAgICAgICAgICAgICAgJyMxZTkwZmYnXG4gIGZpcmVicmljazogICAgICAgICAgICAgICAgICAnI2IyMjIyMidcbiAgZmxvcmFsd2hpdGU6ICAgICAgICAgICAgICAgICcjZmZmYWYwJ1xuICBmb3Jlc3RncmVlbjogICAgICAgICAgICAgICAgJyMyMjhiMjInXG4gIGdhaW5zYm9ybzogICAgICAgICAgICAgICAgICAnI2RjZGNkYydcbiAgZ2hvc3R3aGl0ZTogICAgICAgICAgICAgICAgICcjZjhmOGZmJ1xuICBnb2xkOiAgICAgICAgICAgICAgICAgICAgICAgJyNmZmQ3MDAnXG4gIGdvbGRlbnJvZDogICAgICAgICAgICAgICAgICAnI2RhYTUyMCdcbiAgZ3JheTogICAgICAgICAgICAgICAgICAgICAgICcjODA4MDgwJ1xuICBncmVlbjogICAgICAgICAgICAgICAgICAgICAgJyMwMDgwMDAnXG4gIGdyZWVueWVsbG93OiAgICAgICAgICAgICAgICAnI2FkZmYyZidcbiAgaG9uZXlkZXc6ICAgICAgICAgICAgICAgICAgICcjZjBmZmYwJ1xuICBob3RwaW5rOiAgICAgICAgICAgICAgICAgICAgJyNmZjY5YjQnXG4gIGluZGlhbnJlZDogICAgICAgICAgICAgICAgICAnI2NkNWM1YydcbiAgaW5kaWdvOiAgICAgICAgICAgICAgICAgICAgICcjNGIwMDgyJ1xuICBpdm9yeTogICAgICAgICAgICAgICAgICAgICAgJyNmZmZmZjAnXG4gIGtoYWtpOiAgICAgICAgICAgICAgICAgICAgICAnI2YwZTY4YydcbiAgbGF2ZW5kZXI6ICAgICAgICAgICAgICAgICAgICcjZTZlNmZhJ1xuICBsYXZlbmRlcmJsdXNoOiAgICAgICAgICAgICAgJyNmZmYwZjUnXG4gIGxhd25ncmVlbjogICAgICAgICAgICAgICAgICAnIzdjZmMwMCdcbiAgbGVtb25jaGlmZm9uOiAgICAgICAgICAgICAgICcjZmZmYWNkJ1xuICBsaWdodGJsdWU6ICAgICAgICAgICAgICAgICAgJyNhZGQ4ZTYnXG4gIGxpZ2h0Y29yYWw6ICAgICAgICAgICAgICAgICAnI2YwODA4MCdcbiAgbGlnaHRjeWFuOiAgICAgICAgICAgICAgICAgICcjZTBmZmZmJ1xuICBsaWdodGdvbGRlbnJvZHllbGxvdzogICAgICAgJyNmYWZhZDInXG4gIGxpZ2h0Z3JheTogICAgICAgICAgICAgICAgICAnI2QzZDNkMydcbiAgbGlnaHRncmVlbjogICAgICAgICAgICAgICAgICcjOTBlZTkwJ1xuICBsaWdodHBpbms6ICAgICAgICAgICAgICAgICAgJyNmZmI2YzEnXG4gIGxpZ2h0c2FsbW9uOiAgICAgICAgICAgICAgICAnI2ZmYTA3YSdcbiAgbGlnaHRzZWFncmVlbjogICAgICAgICAgICAgICcjMjBiMmFhJ1xuICBsaWdodHNreWJsdWU6ICAgICAgICAgICAgICAgJyM4N2NlZmEnXG4gIGxpZ2h0c2xhdGVncmF5OiAgICAgICAgICAgICAnIzc3ODg5OSdcbiAgbGlnaHRzdGVlbGJsdWU6ICAgICAgICAgICAgICcjYjBjNGRlJ1xuICBsaWdodHllbGxvdzogICAgICAgICAgICAgICAgJyNmZmZmZTAnXG4gIGxpbWU6ICAgICAgICAgICAgICAgICAgICAgICAnIzAwZmYwMCdcbiAgbGltZWdyZWVuOiAgICAgICAgICAgICAgICAgICcjMzJjZDMyJ1xuICBsaW5lbjogICAgICAgICAgICAgICAgICAgICAgJyNmYWYwZTYnXG4gIG1hZ2VudGE6ICAgICAgICAgICAgICAgICAgICAnI2ZmMDBmZidcbiAgbWFyb29uOiAgICAgICAgICAgICAgICAgICAgICcjODAwMDAwJ1xuICBtZWRpdW1hcXVhbWFyaW5lOiAgICAgICAgICAgJyM2NmNkYWEnXG4gIG1lZGl1bWJsdWU6ICAgICAgICAgICAgICAgICAnIzAwMDBjZCdcbiAgbWVkaXVtb3JjaGlkOiAgICAgICAgICAgICAgICcjYmE1NWQzJ1xuICBtZWRpdW1wdXJwbGU6ICAgICAgICAgICAgICAgJyM5MzcwZGInXG4gIG1lZGl1bXNlYWdyZWVuOiAgICAgICAgICAgICAnIzNjYjM3MSdcbiAgbWVkaXVtc2xhdGVibHVlOiAgICAgICAgICAgICcjN2I2OGVlJ1xuICBtZWRpdW1zcHJpbmdncmVlbjogICAgICAgICAgJyMwMGZhOWEnXG4gIG1lZGl1bXR1cnF1b2lzZTogICAgICAgICAgICAnIzQ4ZDFjYydcbiAgbWVkaXVtdmlvbGV0cmVkOiAgICAgICAgICAgICcjYzcxNTg1J1xuICBtaWRuaWdodGJsdWU6ICAgICAgICAgICAgICAgJyMxOTE5NzAnXG4gIG1pbnRjcmVhbTogICAgICAgICAgICAgICAgICAnI2Y1ZmZmYSdcbiAgbWlzdHlyb3NlOiAgICAgICAgICAgICAgICAgICcjZmZlNGUxJ1xuICBtb2NjYXNpbjogICAgICAgICAgICAgICAgICAgJyNmZmU0YjUnXG4gIG5hdmFqb3doaXRlOiAgICAgICAgICAgICAgICAnI2ZmZGVhZCdcbiAgbmF2eTogICAgICAgICAgICAgICAgICAgICAgICcjMDAwMDgwJ1xuICBvbGRsYWNlOiAgICAgICAgICAgICAgICAgICAgJyNmZGY1ZTYnXG4gIG9saXZlOiAgICAgICAgICAgICAgICAgICAgICAnIzgwODAwMCdcbiAgb2xpdmVkcmFiOiAgICAgICAgICAgICAgICAgICcjNmI4ZTIzJ1xuICBvcmFuZ2U6ICAgICAgICAgICAgICAgICAgICAgJyNmZmE1MDAnXG4gIG9yYW5nZXJlZDogICAgICAgICAgICAgICAgICAnI2ZmNDUwMCdcbiAgb3JjaGlkOiAgICAgICAgICAgICAgICAgICAgICcjZGE3MGQ2J1xuICBwYWxlZ29sZGVucm9kOiAgICAgICAgICAgICAgJyNlZWU4YWEnXG4gIHBhbGVncmVlbjogICAgICAgICAgICAgICAgICAnIzk4ZmI5OCdcbiAgcGFsZXR1cnF1b2lzZTogICAgICAgICAgICAgICcjYWZlZWVlJ1xuICBwYWxldmlvbGV0cmVkOiAgICAgICAgICAgICAgJyNkYjcwOTMnXG4gIHBhcGF5YXdoaXA6ICAgICAgICAgICAgICAgICAnI2ZmZWZkNSdcbiAgcGVhY2hwdWZmOiAgICAgICAgICAgICAgICAgICcjZmZkYWI5J1xuICBwZXJ1OiAgICAgICAgICAgICAgICAgICAgICAgJyNjZDg1M2YnXG4gIHBpbms6ICAgICAgICAgICAgICAgICAgICAgICAnI2ZmYzBjYidcbiAgcGx1bTogICAgICAgICAgICAgICAgICAgICAgICcjZGRhMGRkJ1xuICBwb3dkZXJibHVlOiAgICAgICAgICAgICAgICAgJyNiMGUwZTYnXG4gIHB1cnBsZTogICAgICAgICAgICAgICAgICAgICAnIzgwMDA4MCdcbiAgcmVkOiAgICAgICAgICAgICAgICAgICAgICAgICcjZmYwMDAwJ1xuICByb3N5YnJvd246ICAgICAgICAgICAgICAgICAgJyNiYzhmOGYnXG4gIHJveWFsYmx1ZTogICAgICAgICAgICAgICAgICAnIzQxNjllMSdcbiAgc2FkZGxlYnJvd246ICAgICAgICAgICAgICAgICcjOGI0NTEzJ1xuICBzYWxtb246ICAgICAgICAgICAgICAgICAgICAgJyNmYTgwNzInXG4gIHNhbmR5YnJvd246ICAgICAgICAgICAgICAgICAnI2Y0YTQ2MCdcbiAgc2VhZ3JlZW46ICAgICAgICAgICAgICAgICAgICcjMmU4YjU3J1xuICBzZWFzaGVsbDogICAgICAgICAgICAgICAgICAgJyNmZmY1ZWUnXG4gIHNpZW5uYTogICAgICAgICAgICAgICAgICAgICAnI2EwNTIyZCdcbiAgc2lsdmVyOiAgICAgICAgICAgICAgICAgICAgICcjYzBjMGMwJ1xuICBza3libHVlOiAgICAgICAgICAgICAgICAgICAgJyM4N2NlZWInXG4gIHNsYXRlYmx1ZTogICAgICAgICAgICAgICAgICAnIzZhNWFjZCdcbiAgc2xhdGVncmF5OiAgICAgICAgICAgICAgICAgICcjNzA4MDkwJ1xuICBzbm93OiAgICAgICAgICAgICAgICAgICAgICAgJyNmZmZhZmEnXG4gIHNwcmluZ2dyZWVuOiAgICAgICAgICAgICAgICAnIzAwZmY3ZidcbiAgc3RlZWxibHVlOiAgICAgICAgICAgICAgICAgICcjNDY4MmI0J1xuICB0YW46ICAgICAgICAgICAgICAgICAgICAgICAgJyNkMmI0OGMnXG4gIHRlYWw6ICAgICAgICAgICAgICAgICAgICAgICAnIzAwODA4MCdcbiAgdGhpc3RsZTogICAgICAgICAgICAgICAgICAgICcjZDhiZmQ4J1xuICB0b21hdG86ICAgICAgICAgICAgICAgICAgICAgJyNmZjYzNDcnXG4gIHR1cnF1b2lzZTogICAgICAgICAgICAgICAgICAnIzQwZTBkMCdcbiAgdmlvbGV0OiAgICAgICAgICAgICAgICAgICAgICcjZWU4MmVlJ1xuICB3aGVhdDogICAgICAgICAgICAgICAgICAgICAgJyNmNWRlYjMnXG4gIHdoaXRlOiAgICAgICAgICAgICAgICAgICAgICAnI2ZmZmZmZidcbiAgd2hpdGVzbW9rZTogICAgICAgICAgICAgICAgICcjZjVmNWY1J1xuICB5ZWxsb3c6ICAgICAgICAgICAgICAgICAgICAgJyNmZmZmMDAnXG4gIHllbGxvd2dyZWVuOiAgICAgICAgICAgICAgICAnIzlhY2QzMidcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBGQU5DWVJFRDogICAgICAgICAgICAgICAgICAgJyNmZDUyMzAnXG4gIEZBTkNZT1JBTkdFOiAgICAgICAgICAgICAgICAnI2ZkNmQzMCdcbiAgIyBvb21waDogKCB4ICkgLT4gZGVidWcgJ86pX19fMicsIHg7IHJldHVybiBcIn5+fiAje3h9IH5+flwiXG5cbmNvbG9ycyA9XG4gIHBvZDogICAgICAgICggeCApIC0+IENPTE9SLmdvbGQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhcbiAgbWFwOiAgICAgICAgKCB4ICkgLT4gQ09MT1IuZ29sZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeFxuICBsaXN0OiAgICAgICAoIHggKSAtPiBDT0xPUi5nb2xkICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4XG4gIHNldDogICAgICAgICggeCApIC0+IENPTE9SLmdvbGQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhcbiAgdGV4dDogICAgICAgKCB4ICkgLT4gQ09MT1Iud2hlYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeFxuICBmbG9hdDogICAgICAoIHggKSAtPiBDT0xPUi5GQU5DWVJFRCAgICAgICAgICAgICAgICAgICAgICAgICB4XG4gIHJlZ2V4OiAgICAgICggeCApIC0+IENPTE9SLnBsdW0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhcbiAgdHJ1ZTogICAgICAgKCB4ICkgLT4gQ09MT1IuaW52ZXJzZS5ib2xkLml0YWxpYy5saW1lICAgICAgICAgeFxuICBmYWxzZTogICAgICAoIHggKSAtPiBDT0xPUi5pbnZlcnNlLmJvbGQuaXRhbGljLkZBTkNZT1JBTkdFICB4XG4gIHVuZGVmaW5lZDogICggeCApIC0+IENPTE9SLmludmVyc2UuYm9sZC5pdGFsaWMubWFnZW50YSAgICAgIHhcbiAgbnVsbDogICAgICAgKCB4ICkgLT4gQ09MT1IuaW52ZXJzZS5ib2xkLml0YWxpYy5ibHVlICAgICAgICAgeFxuICBuYW46ICAgICAgICAoIHggKSAtPiBDT0xPUi5pbnZlcnNlLmJvbGQuaXRhbGljLm1hZ2VudGEgICAgICB4XG4gIG90aGVyOiAgICAgICggeCApIC0+IENPTE9SLmludmVyc2UucmVkICAgICAgICAgICAgICAgICAgICAgIHhcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5zaG93ID0gbmV3IFNob3coKVxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19zaG93ID0gLT5cbiAgZGVidWcgJ86pX19fMycsIHNob3dcbiAgZGVidWcgJ86pX19fNCcsIHNob3cuc3RhdGVcbiAgZGVidWcgJ86pX19fNScsIHJwciBzaG93LmRlbnRcbiAgZGVidWcgJ86pX19fNicsIHNob3cuZ29fZG93bigpXG4gIGRlYnVnICfOqV9fXzcnLCBycHIgc2hvdy5kZW50XG4gIGVjaG8oKVxuICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGVjaG8gc2hvdyB2XzEgPSBcImZvbyAnYmFyJ1wiXG4gIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgZWNobyBzaG93IHZfMiA9IHt9XG4gIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgZWNobyBzaG93IHZfMyA9IHsga29uZzogMTA4LCBsb3c6IDkyMywgbnVtYmVyczogWyAxMCwgMTEsIDEyLCBdLCB9XG4gIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgZWNobyBzaG93IHZfNCA9IFtdXG4gIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgZWNobyBzaG93IHZfNSA9IFsgJ3NvbWUnLCAnd29yZHMnLCAndG8nLCAnc2hvdycsIDEsIC0xLCBmYWxzZSwgXVxuICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGVjaG8gc2hvdyB2XzYgPSBuZXcgTWFwIFsgWyAna29uZycsIDEwOCwgXSwgWyAnbG93JywgOTIzLCBdLCBbIDk3MSwgJ3dvcmQnLCBdLCBbIHRydWUsICcrMScsIF0sIFsgJ2EgYiBjJywgZmFsc2UsIF0gXVxuICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGVjaG8gc2hvdyB2XzcgPSBuZXcgU2V0IFsgJ3NvbWUnLCAnd29yZHMnLCB0cnVlLCBmYWxzZSwgbnVsbCwgdW5kZWZpbmVkLCAzLjE0MTU5MjYsIE5hTiwgXVxuICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gIGVjaG8gc2hvdyB2XzggPSAvYWJjW2RlXS9cbiAgZWNobyAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBlY2hvIHNob3cgdl85ID0gQnVmZmVyLmZyb20gJ2FiY8Okw7bDvCdcbiAgZWNobyAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICBlY2hvIHNob3cgdl8xMCA9IHsgdl8xLCB2XzIsIHZfMywgdl80LCB2XzUsIHZfNiwgdl83LCB2XzgsIHZfOSwgfSAjIHZfMTAsIHZfMTEsIHZfMTIsIHZfMTMsIHZfMTQsIH1cbiAgdl8xMC52XzEwID0gdl8xMFxuICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICMgZWNobyBzaG93IHZfMTAgPSB7IHZfMSwgdl8yLCB2XzMsIHZfNCwgdl81LCB2XzYsIHZfNywgdl84LCB2XzksIHZfMTAsIH0gIyB2XzEwLCB2XzExLCB2XzEyLCB2XzEzLCB2XzE0LCB9XG4gIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgZWNobygpXG4gIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19jb2xvcl9lZmZlY3RzID0gLT5cbiAgZWNobyAnzqlfX184JywgKCBDLmhleCgnI0ZGNzVEMScpLmJvbGQudW5kZXJsaW5lICdQaW5rJyAgKSwgJ1hYWCdcbiAgZWNobyAnzqlfX185JywgKCBDLnllbGxvdyAoIEMucmVkLmJvbGQuaW52ZXJzZSAnUGluaycgICAgICApLCAnWFhYJyApXG4gIGVjaG8gJ86pX18xMCcsICggQy55ZWxsb3cgXCIhISEgI3tDLnJlZC5ib2xkLmludmVyc2UgJ1BpbmsnfSBYWFhcIiApXG4gIGVjaG8gJ86pX18xMScsICggVE1QVFJNLnllbGxvdyBcIiEhISAje1RNUFRSTS5yZWQgVE1QVFJNLmJvbGQgVE1QVFJNLnJldmVyc2UgJ1BpbmsnfSBYWFhcIiApXG4gIGVjaG8gJ86pX18xMicsICggQy5iZ0JsdWUueWVsbG93LmJvbGQgXCIgb29vcHMgXCIgKVxuICBlY2hvICfOqV9fMTMnLCAoIEMuYmdCbHVlLnJlZC5ib2xkIFwiIG9vb3BzIFwiIClcbiAgZWNobyAnzqlfXzE0JywgKCBDLmJnQmx1ZS5ncmVlbi5ib2xkIFwiIG9vb3BzIFwiIClcbiAgZWNobyAnzqlfXzE1JywgKCBDLmJnV2hpdGUucmVkLmJvbGQgLTEyMzQ1Ljg3IClcbiAgZWNobygpXG4gIGVjaG8gJ86pX18xNicsICggQy5iZ1doaXRlLnJlZC5ib2xkXCIgdGhlcmUgd2FzIGFuICN7Qy5iZ1JlZC53aGl0ZVwiRVJST1JcIn0gaW4gdGhlICN7Qy5kaW1cInB1ZGRpbmdcIn0gXCIgKVxuICBlY2hvKClcbiAgZWNobyAnzqlfXzE3JywgKCBDLmJnV2hpdGUucmVkLmJvbGRcIiB0aGVyZSB3YXMgYW4gI3tDLmludmVyc2VcIkVSUk9SXCJ9IGluIHRoZSAje0MuZGltXCJwdWRkaW5nXCJ9IFwiIClcbiAgZWNobygpXG4gIGVjaG8gJ86pX18xOCcsICggQy5iZ1llbGxvdy5ibGFjay5ib2xkXCIgdGhlcmUgd2FzIGFuICN7Qy5pbnZlcnNlXCJFUlJPUlwifSBpbiB0aGUgI3tDLmRpbVwicHVkZGluZ1wifSBcIiApXG4gIGVjaG8oKVxuICBlY2hvICfOqV9fMTknLCAoIEMuYmdZZWxsb3cuZGltLmJsYWNrLmJvbGRcIiB0aGVyZSB3YXMgYW4gI3tDLmludmVyc2VcIkVSUk9SXCJ9IGluIHRoZSAje0MuZGltXCJwdWRkaW5nXCJ9IFwiIClcbiAgZWNobygpXG4gIGVjaG8gJ86pX18yMCcsICggQy5iZ0JsYWNrLmN5YW4uYm9sZFwiIHRoZXJlIHdhcyBhbiAje0MuaW52ZXJzZVwiRVJST1JcIn0gaW4gdGhlIFxcbiN7Qy5kaW1cInB1ZGRpbmdcIn0gXCIgKVxuICBlY2hvKClcbiAgZWNobyAnzqlfXzIxJywgQy5yZWQuaXRhbGljXCJFcnJvcjogI3tDLnllbGxvd1wiTW9kdWxlICN7Qy5ncmVlblwiYW5zaXNcIn0gaXMgbWlzc2luZyFcIn0gSW5zdGFsbGF0aW9uIHJlcXVpcmVkLlwiXG4gIGVjaG8oKVxuICBteV90aGVtZSA9XG4gICAgb3JhbmdlOiAnI2ZmYWI0MCdcbiAgICBwaW5rOiAgICcjZmY3NWQxJ1xuICAgIHJlZDogICAgJyNmZjAwMDAnXG4gIEQgPSBuZXcgQy5BbnNpcygpLmV4dGVuZCBteV90aGVtZVxuICBlY2hvICfOqV9fMjInLCAoIGsgZm9yIGsgb2YgRCApXG4gIGVjaG8gJ86pX18yMycsIFRNUFRSTS5yZWQgXCJFcnJvcjogSW5zdGFsbGF0aW9uIHJlcXVpcmVkLlwiXG4gIGVjaG8gJ86pX18yNCcsIEMucmVkXCJFcnJvcjogSW5zdGFsbGF0aW9uIHJlcXVpcmVkLlwiXG4gIGVjaG8gJ86pX18yNScsIEQucmVkXCJFcnJvcjogSW5zdGFsbGF0aW9uIHJlcXVpcmVkLlwiXG4gIGVjaG8gJ86pX18yNicsIEQub3JhbmdlLml0YWxpY1wiRXJyb3I6ICN7RC5ibHVlXCJNb2R1bGUgI3tELnBpbmtcImFuc2lzXCJ9IGlzIG1pc3NpbmchXCJ9IEluc3RhbGxhdGlvbiByZXF1aXJlZC5cIlxuICBlY2hvKClcbiAgcmVkID0gRC5yZWRcbiAgZWNobyAnzqlfXzI3JywgcmVkXCJ3b29cIlxuICBlY2hvICfOqV9fMjgnLCByZWQuaXRhbGljXCJ3b29cIlxuICBlbSA9IHJlZC5pdGFsaWMuYm9sZC5pbnZlcnNlXG4gIGVjaG8gJ86pX18yOScsIGVtXCJlbXBoYXNpemU6ICN7IHNob3cgeyBkOiA2LCB9fSBub3QgYmFkXCJcbiAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBhd2FpdCBkZW1vX2V4ZWNhKClcbiAgZGVtb19zaG93KClcbiAgIyBkZW1vX2NvbG9yX2VmZmVjdHMoKVxuXG5cblxuXG4iXX0=
//# sourceURL=../src/demo-show-pretty-printer.coffee