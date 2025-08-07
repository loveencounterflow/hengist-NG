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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tc2hvdy1wcmV0dHktcHJpbnRlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBQTtBQUFBLE1BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsUUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsZ0JBQUEsRUFBQSxLQUFBLEVBQUEsY0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBO0lBQUEsb0JBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsWUFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxJQUpGLEVBS0UsR0FMRixFQU1FLE9BTkYsRUFPRSxHQVBGLENBQUEsR0FPNEIsR0FBRyxDQUFDLEdBUGhDOztFQVFBLElBQUEsR0FBNEIsT0FBQSxDQUFRLFdBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsQ0FERixDQUFBLEdBQzRCLE9BQUEsQ0FBUSxPQUFSLENBRDVCOztFQUVB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QUFFLENBQUEsV0FBQSxDQUFBLENBQWUsSUFBQSxDQUFLO1FBQUUsQ0FBQSxFQUFHO01BQUwsQ0FBTCxDQUFmLENBQUEsUUFBQSxDQUFoQjtJQXZDc0MsQ0FBQSxJQUF4Qzs7QUE3YkEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2RlbW8tZXhlY2EnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ29sZFxuICByZWRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG57IGV4ZWNhXG4gICQgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZXhlY2EnXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG53cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxuVE1QVFJNICAgICAgICAgICAgICAgICAgICA9IEdVWS50cm1cbkMgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdhbnNpcydcblxuXG4jIyNcbmJsYWNrXG5ibHVlXG5ncmVlblxuY3lhblxuc2VwaWFcbmluZGlnb1xuc3RlZWxcbmJyb3duXG5vbGl2ZVxubGltZVxucmVkXG5jcmltc29uXG5wbHVtXG5waW5rXG5vcmFuZ2VcbmdvbGRcbnRhblxueWVsbG93XG5ncmV5XG5kYXJrZ3JleVxud2hpdGVcbkJBU0UwM1xuQkFTRTAyXG5CQVNFMDFcbkJBU0UwMFxuQkFTRTBcbkJBU0UxXG5CQVNFMlxuQkFTRTNcbllFTExPV1xuT1JBTkdFXG5SRURcbk1BR0VOVEFcblZJT0xFVFxuQkxVRVxuQ1lBTlxuR1JFRU5cbiMjI1xuXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxub2JqZWN0X3Byb3RvdHlwZSAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yge31cbnBvZF9wcm90b3R5cGVzICAgID0gWyBudWxsLCBvYmplY3RfcHJvdG90eXBlLCBdXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudHlwZV9vZiA9ICggeCApIC0+XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyMjIFByaW1pdGl2ZXM6ICMjI1xuICByZXR1cm4gJ251bGwnICAgICAgICAgaWYgeCBpcyBudWxsXG4gIHJldHVybiAndW5kZWZpbmVkJyAgICBpZiB4IGlzIHVuZGVmaW5lZFxuICByZXR1cm4gJ2luZmluaXR5JyAgICAgaWYgKCB4IGlzICtJbmZpbml0eSApIG9yICggeCBpcyAtSW5maW5pdHkgKVxuICAjIHJldHVybiAnYm9vbGVhbicgICAgICBpZiAoIHggaXMgdHJ1ZSApIG9yICggeCBpcyBmYWxzZSApXG4gIHJldHVybiAndHJ1ZScgICAgICAgICBpZiAoIHggaXMgdHJ1ZSApXG4gIHJldHVybiAnZmFsc2UnICAgICAgICBpZiAoIHggaXMgZmFsc2UgKVxuICByZXR1cm4gJ25hbicgICAgICAgICAgaWYgTnVtYmVyLmlzTmFOICAgICB4XG4gIHJldHVybiAnZmxvYXQnICAgICAgICBpZiBOdW1iZXIuaXNGaW5pdGUgIHhcbiAgIyByZXR1cm4gJ3Vuc2V0JyAgICAgICAgaWYgeCBpcyB1bnNldFxuICByZXR1cm4gJ3BvZCcgICAgICAgICAgaWYgKCBPYmplY3QuZ2V0UHJvdG90eXBlT2YgeCApIGluIHBvZF9wcm90b3R5cGVzXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgc3dpdGNoIGpzdHlwZW9mID0gdHlwZW9mIHhcbiAgICB3aGVuICdzdHJpbmcnICAgICAgICAgICAgICAgICAgICAgICB0aGVuIHJldHVybiAndGV4dCdcbiAgICB3aGVuICdzeW1ib2wnICAgICAgICAgICAgICAgICAgICAgICB0aGVuIHJldHVybiAnc3ltYm9sJ1xuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHJldHVybiAnbGlzdCcgICAgICAgICBpZiBBcnJheS5pc0FycmF5ICB4XG4gICMjIyBUQUlOVCBjb25zaWRlciB0byByZXR1cm4geC5jb25zdHJ1Y3Rvci5uYW1lICMjI1xuICBzd2l0Y2ggbWlsbGVydHlwZSA9ICggKCBPYmplY3Q6OnRvU3RyaW5nLmNhbGwgeCApLnJlcGxhY2UgL15cXFtvYmplY3QgKFteXFxdXSspXFxdJC8sICckMScgKS50b0xvd2VyQ2FzZSgpXG4gICAgd2hlbiAncmVnZXhwJyAgICAgICAgICAgICAgICAgICAgICAgdGhlbiByZXR1cm4gJ3JlZ2V4J1xuICByZXR1cm4gbWlsbGVydHlwZVxuICAjIHN3aXRjaCBtaWxsZXJ0eXBlID0gT2JqZWN0Ojp0b1N0cmluZy5jYWxsIHhcbiAgIyAgIHdoZW4gJ1tvYmplY3QgRnVuY3Rpb25dJyAgICAgICAgICAgIHRoZW4gcmV0dXJuICdmdW5jdGlvbidcbiAgIyAgIHdoZW4gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nICAgICAgIHRoZW4gcmV0dXJuICdhc3luY2Z1bmN0aW9uJ1xuICAjICAgd2hlbiAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nICAgdGhlbiByZXR1cm4gJ2dlbmVyYXRvcmZ1bmN0aW9uJ1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiMjIyB0aHggdG8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9pZGVudGlmaWVyLXJlZ2V4ICMjI1xuanNpZF9yZSAgID0gLy8vXiBbICQgXyBcXHB7SURfU3RhcnR9IF0gWyAkIF8gXFx1MjAwQyBcXHUyMDBEIFxccHtJRF9Db250aW51ZX0gXSogJC8vL3ZcbmlzYV9qc2lkICA9ICggeCApIC0+ICggKCB0eXBlb2YgeCApIGlzICdzdHJpbmcnICkgYW5kIGpzaWRfcmUudGVzdCB4XG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jbGFzcyBTaG93XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBtZSA9ICggeCApID0+XG4gICAgICByZXR1cm4gKCB0ZXh0IGZvciB0ZXh0IGZyb20gQHBlbiB4ICkuam9pbiAnJ1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZiBtZSwgQFxuICAgIEBzdGF0ZSAgPSB7IGxldmVsOiAwLCBlbmRlZF93aXRoX25sOiBmYWxzZSwgfVxuICAgIEBzcGFjZXIgPSAnXFx4MjBcXHgyMCdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkgQCwgJ2RlbnQnLFxuICAgICAgZ2V0OiA9PiBAc3BhY2VyLnJlcGVhdCBAc3RhdGUubGV2ZWxcbiAgICByZXR1cm4gbWVcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHBlbjogKCB4ICkgLT5cbiAgICBmb3IgdGV4dCBmcm9tIEBkaXNwYXRjaCB4XG4gICAgICBAc3RhdGUuZW5kZWRfd2l0aF9ubCA9IHRleHQuZW5kc1dpdGggJ1xcbidcbiAgICAgIHlpZWxkIHRleHRcbiAgICB1bmxlc3MgQHN0YXRlLmVuZGVkX3dpdGhfbmxcbiAgICAgIEBzdGF0ZS5lbmRlZF93aXRoX25sID0gdHJ1ZVxuICAgICAgIyB5aWVsZCAnXFxuJ1xuICAgIHJldHVybiBudWxsXG5cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdvX2Rvd246IC0+XG4gICAgQHN0YXRlLmxldmVsKytcbiAgICByZXR1cm4gQHN0YXRlLmxldmVsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnb191cDogLT5cbiAgICBpZiBAc3RhdGUubGV2ZWwgPCAxXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fXzEgdW5hYmxlIHRvIGdvIGJlbG93IGxldmVsIDBcIlxuICAgIEBzdGF0ZS5sZXZlbC0tXG4gICAgcmV0dXJuIEBzdGF0ZS5sZXZlbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGlzcGF0Y2g6ICggeCApIC0+XG4gICAgaWYgKCBtZXRob2QgPSBAWyBcInNob3dfI3t0eXBlX29mIHh9XCIgXSApP1xuICAgICAgeWllbGQgZnJvbSBtZXRob2QuY2FsbCBALCB4XG4gICAgZWxzZVxuICAgICAgeWllbGQgZnJvbSBAc2hvd19vdGhlciB4XG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIF9zaG93X2tleTogKCBrZXkgKSAtPlxuICAgIGlmIGlzYV9qc2lkIGtleSB0aGVuIHJldHVybiBUTVBUUk0uY3lhbiBrZXlcbiAgICByZXR1cm4gWyAoIHQgZm9yIHQgZnJvbSBAZGlzcGF0Y2gga2V5ICkuLi4sIF0uam9pbiAnJ1xuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2hvd19wb2Q6ICggeCApIC0+XG4gICAgaGFzX2tleXMgPSBmYWxzZVxuICAgIHlpZWxkIGNvbG9ycy5wb2QgJ3snXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3Iga2V5LCB2YWx1ZSBvZiB4XG4gICAgICAjIyMgVEFJTlQgY29kZSBkdXBsaWNhdGlvbiAjIyNcbiAgICAgIGhhc19rZXlzID0gdHJ1ZVxuICAgICAgeWllbGQgJyAnICsgKCBAX3Nob3dfa2V5IGtleSApICsgY29sb3JzLnBvZCAnOiAnXG4gICAgICBmb3IgdGV4dCBmcm9tIEBkaXNwYXRjaCB2YWx1ZVxuICAgICAgICB5aWVsZCB0ZXh0XG4gICAgICB5aWVsZCBjb2xvcnMucG9kICcsJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgeWllbGQgY29sb3JzLnBvZCBpZiAoIG5vdCBoYXNfa2V5cyApIHRoZW4gJ30nIGVsc2UgJyB9J1xuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzaG93X21hcDogKCB4ICkgLT5cbiAgICBoYXNfa2V5cyA9IGZhbHNlXG4gICAgeWllbGQgY29sb3JzLm1hcCAnbWFweydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZvciBbIGtleSwgdmFsdWUsIF0gZnJvbSB4LmVudHJpZXMoKVxuICAgICAgIyMjIFRBSU5UIGNvZGUgZHVwbGljYXRpb24gIyMjXG4gICAgICBoYXNfa2V5cyA9IHRydWVcbiAgICAgIHlpZWxkICcgJyArICggQF9zaG93X2tleSBrZXkgKSArIGNvbG9ycy5tYXAgJzogJ1xuICAgICAgZm9yIHRleHQgZnJvbSBAZGlzcGF0Y2ggdmFsdWVcbiAgICAgICAgeWllbGQgdGV4dFxuICAgICAgeWllbGQgY29sb3JzLm1hcCAnLCdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHlpZWxkIGNvbG9ycy5tYXAgaWYgKCBub3QgaGFzX2tleXMgKSB0aGVuICd9JyBlbHNlICcgfSdcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2hvd19saXN0OiAoIHggKSAtPlxuICAgIHlpZWxkIGNvbG9ycy5saXN0ICdbJ1xuICAgIGZvciBlbGVtZW50IGluIHhcbiAgICAgICMjIyBUQUlOVCBjb2RlIGR1cGxpY2F0aW9uICMjI1xuICAgICAgZm9yIHRleHQgZnJvbSBAZGlzcGF0Y2ggZWxlbWVudFxuICAgICAgICB5aWVsZCAnICcgKyB0ZXh0ICsgKCBjb2xvcnMubGlzdCAnLCcgKVxuICAgIHlpZWxkIGNvbG9ycy5saXN0IGlmICggeC5sZW5ndGggaXMgMCApIHRoZW4gJ10nIGVsc2UgJyBdJ1xuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzaG93X3NldDogKCB4ICkgLT5cbiAgICB5aWVsZCBjb2xvcnMuc2V0ICdzZXRbJ1xuICAgIGZvciBlbGVtZW50IGZyb20geC5rZXlzKClcbiAgICAgICMjIyBUQUlOVCBjb2RlIGR1cGxpY2F0aW9uICMjI1xuICAgICAgZm9yIHRleHQgZnJvbSBAZGlzcGF0Y2ggZWxlbWVudFxuICAgICAgICB5aWVsZCAnICcgKyB0ZXh0ICsgY29sb3JzLnNldCAnLCdcbiAgICB5aWVsZCBjb2xvcnMuc2V0IGlmICggeC5sZW5ndGggaXMgMCApIHRoZW4gJ10nIGVsc2UgJyBdJ1xuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzaG93X3RleHQ6ICggeCApIC0+XG4gICAgaWYgXCInXCIgaW4geCB0aGVuICB5aWVsZCBjb2xvcnMudGV4dCAnXCInICsgKCB4LnJlcGxhY2UgL1wiL2csICdcXFxcXCInICkgKyAnXCInXG4gICAgZWxzZSAgICAgICAgICAgICAgeWllbGQgY29sb3JzLnRleHQgXCInXCIgKyAoIHgucmVwbGFjZSAvJy9nLCBcIlxcXFwnXCIgKSArIFwiJ1wiXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNob3dfZmxvYXQ6ICggeCApIC0+XG4gICAgeWllbGQgKCBjb2xvcnMuZmxvYXQgeC50b1N0cmluZygpIClcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2hvd19yZWdleDogKCB4ICkgLT5cbiAgICB5aWVsZCAoIGNvbG9ycy5yZWdleCB4LnRvU3RyaW5nKCkgKVxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIyMgZnVsbCB3b3JkczogIyMjXG4gICMgc2hvd190cnVlOiAgICAgICggeCApIC0+IHlpZWxkICggY29sb3JzLnRydWUgICAgICAndHJ1ZScgICAgICApXG4gICMgc2hvd19mYWxzZTogICAgICggeCApIC0+IHlpZWxkICggY29sb3JzLmZhbHNlICAgICAnZmFsc2UnICAgICApXG4gICMgc2hvd191bmRlZmluZWQ6ICggeCApIC0+IHlpZWxkICggY29sb3JzLnVuZGVmaW5lZCAndW5kZWZpbmVkJyApXG4gICMgc2hvd19udWxsOiAgICAgICggeCApIC0+IHlpZWxkICggY29sb3JzLm51bGwgICAgICAnbnVsbCcgICAgICApXG4gICMgc2hvd19uYW46ICAgICAgICggeCApIC0+IHlpZWxkICggY29sb3JzLm5hbiAgICAgICAnTmFOJyAgICAgICApXG4gICMjIyAobW9zdGx5KSBzaW5nbGUgbGV0dGVyczogIyMjXG4gIHNob3dfdHJ1ZTogICAgICAoIHggKSAtPiB5aWVsZCAoIGNvbG9ycy50cnVlICAgICAgJyBUICcgICAgIClcbiAgc2hvd19mYWxzZTogICAgICggeCApIC0+IHlpZWxkICggY29sb3JzLmZhbHNlICAgICAnIEYgJyAgICAgKVxuICBzaG93X3VuZGVmaW5lZDogKCB4ICkgLT4geWllbGQgKCBjb2xvcnMudW5kZWZpbmVkICcgVSAnICAgICApXG4gIHNob3dfbnVsbDogICAgICAoIHggKSAtPiB5aWVsZCAoIGNvbG9ycy5udWxsICAgICAgJyBOICcgICAgIClcbiAgc2hvd19uYW46ICAgICAgICggeCApIC0+IHlpZWxkICggY29sb3JzLm5hbiAgICAgICAnIE5hTiAnICAgKVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2hvd19vdGhlcjogKCB4ICkgLT5cbiAgICAjIHlpZWxkICdcXG4nIHVubGVzcyBAc3RhdGUuZW5kZWRfd2l0aF9ubFxuICAgIHlpZWxkIGNvbG9ycy5vdGhlciBcIiN7eH1cIlxuICAgIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQ09MT1IgPSBuZXcgQy5BbnNpcygpLmV4dGVuZFxuICBhbGljZWJsdWU6ICAgICAgICAgICAgICAgICAgJyNmMGY4ZmYnXG4gIGFudGlxdWV3aGl0ZTogICAgICAgICAgICAgICAnI2ZhZWJkNydcbiAgYXF1YTogICAgICAgICAgICAgICAgICAgICAgICcjMDBmZmZmJ1xuICBhcXVhbWFyaW5lOiAgICAgICAgICAgICAgICAgJyM3ZmZmZDQnXG4gIGF6dXJlOiAgICAgICAgICAgICAgICAgICAgICAnI2YwZmZmZidcbiAgYmVpZ2U6ICAgICAgICAgICAgICAgICAgICAgICcjZjVmNWRjJ1xuICBiaXNxdWU6ICAgICAgICAgICAgICAgICAgICAgJyNmZmU0YzQnXG4gIGJsYWNrOiAgICAgICAgICAgICAgICAgICAgICAnIzAwMDAwMCdcbiAgYmxhbmNoZWRhbG1vbmQ6ICAgICAgICAgICAgICcjZmZlYmNkJ1xuICBibHVlOiAgICAgICAgICAgICAgICAgICAgICAgJyMwMDAwZmYnXG4gIGJsdWV2aW9sZXQ6ICAgICAgICAgICAgICAgICAnIzhhMmJlMidcbiAgYnJvd246ICAgICAgICAgICAgICAgICAgICAgICcjYTUyYTJhJ1xuICBidXJseXdvb2Q6ICAgICAgICAgICAgICAgICAgJyNkZWI4ODcnXG4gIGNhZGV0Ymx1ZTogICAgICAgICAgICAgICAgICAnIzVmOWVhMCdcbiAgY2hhcnRyZXVzZTogICAgICAgICAgICAgICAgICcjN2ZmZjAwJ1xuICBjaG9jb2xhdGU6ICAgICAgICAgICAgICAgICAgJyNkMjY5MWUnXG4gIGNvcmFsOiAgICAgICAgICAgICAgICAgICAgICAnI2ZmN2Y1MCdcbiAgY29ybmZsb3dlcmJsdWU6ICAgICAgICAgICAgICcjNjQ5NWVkJ1xuICBjb3Juc2lsazogICAgICAgICAgICAgICAgICAgJyNmZmY4ZGMnXG4gIGNyaW1zb246ICAgICAgICAgICAgICAgICAgICAnI2RjMTQzYydcbiAgY3lhbjogICAgICAgICAgICAgICAgICAgICAgICcjMDBmZmZmJ1xuICBkYXJrYmx1ZTogICAgICAgICAgICAgICAgICAgJyMwMDAwOGInXG4gIGRhcmtjeWFuOiAgICAgICAgICAgICAgICAgICAnIzAwOGI4YidcbiAgZGFya2dvbGRlbnJvZDogICAgICAgICAgICAgICcjYjg4NjBiJ1xuICBkYXJrZ3JheTogICAgICAgICAgICAgICAgICAgJyNhOWE5YTknXG4gIGRhcmtncmVlbjogICAgICAgICAgICAgICAgICAnIzAwNjQwMCdcbiAgZGFya2toYWtpOiAgICAgICAgICAgICAgICAgICcjYmRiNzZiJ1xuICBkYXJrbWFnZW50YTogICAgICAgICAgICAgICAgJyM4YjAwOGInXG4gIGRhcmtvbGl2ZWdyZWVuOiAgICAgICAgICAgICAnIzU1NmIyZidcbiAgZGFya29yYW5nZTogICAgICAgICAgICAgICAgICcjZmY4YzAwJ1xuICBkYXJrb3JjaGlkOiAgICAgICAgICAgICAgICAgJyM5OTMyY2MnXG4gIGRhcmtyZWQ6ICAgICAgICAgICAgICAgICAgICAnIzhiMDAwMCdcbiAgZGFya3NhbG1vbjogICAgICAgICAgICAgICAgICcjZTk5NjdhJ1xuICBkYXJrc2VhZ3JlZW46ICAgICAgICAgICAgICAgJyM4ZmJjOGYnXG4gIGRhcmtzbGF0ZWJsdWU6ICAgICAgICAgICAgICAnIzQ4M2Q4YidcbiAgZGFya3NsYXRlZ3JheTogICAgICAgICAgICAgICcjMmY0ZjRmJ1xuICBkYXJrdHVycXVvaXNlOiAgICAgICAgICAgICAgJyMwMGNlZDEnXG4gIGRhcmt2aW9sZXQ6ICAgICAgICAgICAgICAgICAnIzk0MDBkMydcbiAgZGVlcHBpbms6ICAgICAgICAgICAgICAgICAgICcjZmYxNDkzJ1xuICBkZWVwc2t5Ymx1ZTogICAgICAgICAgICAgICAgJyMwMGJmZmYnXG4gIGRpbWdyYXk6ICAgICAgICAgICAgICAgICAgICAnIzY5Njk2OSdcbiAgZG9kZ2VyYmx1ZTogICAgICAgICAgICAgICAgICcjMWU5MGZmJ1xuICBmaXJlYnJpY2s6ICAgICAgICAgICAgICAgICAgJyNiMjIyMjInXG4gIGZsb3JhbHdoaXRlOiAgICAgICAgICAgICAgICAnI2ZmZmFmMCdcbiAgZm9yZXN0Z3JlZW46ICAgICAgICAgICAgICAgICcjMjI4YjIyJ1xuICBnYWluc2Jvcm86ICAgICAgICAgICAgICAgICAgJyNkY2RjZGMnXG4gIGdob3N0d2hpdGU6ICAgICAgICAgICAgICAgICAnI2Y4ZjhmZidcbiAgZ29sZDogICAgICAgICAgICAgICAgICAgICAgICcjZmZkNzAwJ1xuICBnb2xkZW5yb2Q6ICAgICAgICAgICAgICAgICAgJyNkYWE1MjAnXG4gIGdyYXk6ICAgICAgICAgICAgICAgICAgICAgICAnIzgwODA4MCdcbiAgZ3JlZW46ICAgICAgICAgICAgICAgICAgICAgICcjMDA4MDAwJ1xuICBncmVlbnllbGxvdzogICAgICAgICAgICAgICAgJyNhZGZmMmYnXG4gIGhvbmV5ZGV3OiAgICAgICAgICAgICAgICAgICAnI2YwZmZmMCdcbiAgaG90cGluazogICAgICAgICAgICAgICAgICAgICcjZmY2OWI0J1xuICBpbmRpYW5yZWQ6ICAgICAgICAgICAgICAgICAgJyNjZDVjNWMnXG4gIGluZGlnbzogICAgICAgICAgICAgICAgICAgICAnIzRiMDA4MidcbiAgaXZvcnk6ICAgICAgICAgICAgICAgICAgICAgICcjZmZmZmYwJ1xuICBraGFraTogICAgICAgICAgICAgICAgICAgICAgJyNmMGU2OGMnXG4gIGxhdmVuZGVyOiAgICAgICAgICAgICAgICAgICAnI2U2ZTZmYSdcbiAgbGF2ZW5kZXJibHVzaDogICAgICAgICAgICAgICcjZmZmMGY1J1xuICBsYXduZ3JlZW46ICAgICAgICAgICAgICAgICAgJyM3Y2ZjMDAnXG4gIGxlbW9uY2hpZmZvbjogICAgICAgICAgICAgICAnI2ZmZmFjZCdcbiAgbGlnaHRibHVlOiAgICAgICAgICAgICAgICAgICcjYWRkOGU2J1xuICBsaWdodGNvcmFsOiAgICAgICAgICAgICAgICAgJyNmMDgwODAnXG4gIGxpZ2h0Y3lhbjogICAgICAgICAgICAgICAgICAnI2UwZmZmZidcbiAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICAgICAgICcjZmFmYWQyJ1xuICBsaWdodGdyYXk6ICAgICAgICAgICAgICAgICAgJyNkM2QzZDMnXG4gIGxpZ2h0Z3JlZW46ICAgICAgICAgICAgICAgICAnIzkwZWU5MCdcbiAgbGlnaHRwaW5rOiAgICAgICAgICAgICAgICAgICcjZmZiNmMxJ1xuICBsaWdodHNhbG1vbjogICAgICAgICAgICAgICAgJyNmZmEwN2EnXG4gIGxpZ2h0c2VhZ3JlZW46ICAgICAgICAgICAgICAnIzIwYjJhYSdcbiAgbGlnaHRza3libHVlOiAgICAgICAgICAgICAgICcjODdjZWZhJ1xuICBsaWdodHNsYXRlZ3JheTogICAgICAgICAgICAgJyM3Nzg4OTknXG4gIGxpZ2h0c3RlZWxibHVlOiAgICAgICAgICAgICAnI2IwYzRkZSdcbiAgbGlnaHR5ZWxsb3c6ICAgICAgICAgICAgICAgICcjZmZmZmUwJ1xuICBsaW1lOiAgICAgICAgICAgICAgICAgICAgICAgJyMwMGZmMDAnXG4gIGxpbWVncmVlbjogICAgICAgICAgICAgICAgICAnIzMyY2QzMidcbiAgbGluZW46ICAgICAgICAgICAgICAgICAgICAgICcjZmFmMGU2J1xuICBtYWdlbnRhOiAgICAgICAgICAgICAgICAgICAgJyNmZjAwZmYnXG4gIG1hcm9vbjogICAgICAgICAgICAgICAgICAgICAnIzgwMDAwMCdcbiAgbWVkaXVtYXF1YW1hcmluZTogICAgICAgICAgICcjNjZjZGFhJ1xuICBtZWRpdW1ibHVlOiAgICAgICAgICAgICAgICAgJyMwMDAwY2QnXG4gIG1lZGl1bW9yY2hpZDogICAgICAgICAgICAgICAnI2JhNTVkMydcbiAgbWVkaXVtcHVycGxlOiAgICAgICAgICAgICAgICcjOTM3MGRiJ1xuICBtZWRpdW1zZWFncmVlbjogICAgICAgICAgICAgJyMzY2IzNzEnXG4gIG1lZGl1bXNsYXRlYmx1ZTogICAgICAgICAgICAnIzdiNjhlZSdcbiAgbWVkaXVtc3ByaW5nZ3JlZW46ICAgICAgICAgICcjMDBmYTlhJ1xuICBtZWRpdW10dXJxdW9pc2U6ICAgICAgICAgICAgJyM0OGQxY2MnXG4gIG1lZGl1bXZpb2xldHJlZDogICAgICAgICAgICAnI2M3MTU4NSdcbiAgbWlkbmlnaHRibHVlOiAgICAgICAgICAgICAgICcjMTkxOTcwJ1xuICBtaW50Y3JlYW06ICAgICAgICAgICAgICAgICAgJyNmNWZmZmEnXG4gIG1pc3R5cm9zZTogICAgICAgICAgICAgICAgICAnI2ZmZTRlMSdcbiAgbW9jY2FzaW46ICAgICAgICAgICAgICAgICAgICcjZmZlNGI1J1xuICBuYXZham93aGl0ZTogICAgICAgICAgICAgICAgJyNmZmRlYWQnXG4gIG5hdnk6ICAgICAgICAgICAgICAgICAgICAgICAnIzAwMDA4MCdcbiAgb2xkbGFjZTogICAgICAgICAgICAgICAgICAgICcjZmRmNWU2J1xuICBvbGl2ZTogICAgICAgICAgICAgICAgICAgICAgJyM4MDgwMDAnXG4gIG9saXZlZHJhYjogICAgICAgICAgICAgICAgICAnIzZiOGUyMydcbiAgb3JhbmdlOiAgICAgICAgICAgICAgICAgICAgICcjZmZhNTAwJ1xuICBvcmFuZ2VyZWQ6ICAgICAgICAgICAgICAgICAgJyNmZjQ1MDAnXG4gIG9yY2hpZDogICAgICAgICAgICAgICAgICAgICAnI2RhNzBkNidcbiAgcGFsZWdvbGRlbnJvZDogICAgICAgICAgICAgICcjZWVlOGFhJ1xuICBwYWxlZ3JlZW46ICAgICAgICAgICAgICAgICAgJyM5OGZiOTgnXG4gIHBhbGV0dXJxdW9pc2U6ICAgICAgICAgICAgICAnI2FmZWVlZSdcbiAgcGFsZXZpb2xldHJlZDogICAgICAgICAgICAgICcjZGI3MDkzJ1xuICBwYXBheWF3aGlwOiAgICAgICAgICAgICAgICAgJyNmZmVmZDUnXG4gIHBlYWNocHVmZjogICAgICAgICAgICAgICAgICAnI2ZmZGFiOSdcbiAgcGVydTogICAgICAgICAgICAgICAgICAgICAgICcjY2Q4NTNmJ1xuICBwaW5rOiAgICAgICAgICAgICAgICAgICAgICAgJyNmZmMwY2InXG4gIHBsdW06ICAgICAgICAgICAgICAgICAgICAgICAnI2RkYTBkZCdcbiAgcG93ZGVyYmx1ZTogICAgICAgICAgICAgICAgICcjYjBlMGU2J1xuICBwdXJwbGU6ICAgICAgICAgICAgICAgICAgICAgJyM4MDAwODAnXG4gIHJlZDogICAgICAgICAgICAgICAgICAgICAgICAnI2ZmMDAwMCdcbiAgcm9zeWJyb3duOiAgICAgICAgICAgICAgICAgICcjYmM4ZjhmJ1xuICByb3lhbGJsdWU6ICAgICAgICAgICAgICAgICAgJyM0MTY5ZTEnXG4gIHNhZGRsZWJyb3duOiAgICAgICAgICAgICAgICAnIzhiNDUxMydcbiAgc2FsbW9uOiAgICAgICAgICAgICAgICAgICAgICcjZmE4MDcyJ1xuICBzYW5keWJyb3duOiAgICAgICAgICAgICAgICAgJyNmNGE0NjAnXG4gIHNlYWdyZWVuOiAgICAgICAgICAgICAgICAgICAnIzJlOGI1NydcbiAgc2Vhc2hlbGw6ICAgICAgICAgICAgICAgICAgICcjZmZmNWVlJ1xuICBzaWVubmE6ICAgICAgICAgICAgICAgICAgICAgJyNhMDUyMmQnXG4gIHNpbHZlcjogICAgICAgICAgICAgICAgICAgICAnI2MwYzBjMCdcbiAgc2t5Ymx1ZTogICAgICAgICAgICAgICAgICAgICcjODdjZWViJ1xuICBzbGF0ZWJsdWU6ICAgICAgICAgICAgICAgICAgJyM2YTVhY2QnXG4gIHNsYXRlZ3JheTogICAgICAgICAgICAgICAgICAnIzcwODA5MCdcbiAgc25vdzogICAgICAgICAgICAgICAgICAgICAgICcjZmZmYWZhJ1xuICBzcHJpbmdncmVlbjogICAgICAgICAgICAgICAgJyMwMGZmN2YnXG4gIHN0ZWVsYmx1ZTogICAgICAgICAgICAgICAgICAnIzQ2ODJiNCdcbiAgdGFuOiAgICAgICAgICAgICAgICAgICAgICAgICcjZDJiNDhjJ1xuICB0ZWFsOiAgICAgICAgICAgICAgICAgICAgICAgJyMwMDgwODAnXG4gIHRoaXN0bGU6ICAgICAgICAgICAgICAgICAgICAnI2Q4YmZkOCdcbiAgdG9tYXRvOiAgICAgICAgICAgICAgICAgICAgICcjZmY2MzQ3J1xuICB0dXJxdW9pc2U6ICAgICAgICAgICAgICAgICAgJyM0MGUwZDAnXG4gIHZpb2xldDogICAgICAgICAgICAgICAgICAgICAnI2VlODJlZSdcbiAgd2hlYXQ6ICAgICAgICAgICAgICAgICAgICAgICcjZjVkZWIzJ1xuICB3aGl0ZTogICAgICAgICAgICAgICAgICAgICAgJyNmZmZmZmYnXG4gIHdoaXRlc21va2U6ICAgICAgICAgICAgICAgICAnI2Y1ZjVmNSdcbiAgeWVsbG93OiAgICAgICAgICAgICAgICAgICAgICcjZmZmZjAwJ1xuICB5ZWxsb3dncmVlbjogICAgICAgICAgICAgICAgJyM5YWNkMzInXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgRkFOQ1lSRUQ6ICAgICAgICAgICAgICAgICAgICcjZmQ1MjMwJ1xuICBGQU5DWU9SQU5HRTogICAgICAgICAgICAgICAgJyNmZDZkMzAnXG4gICMgb29tcGg6ICggeCApIC0+IGRlYnVnICfOqV9fXzInLCB4OyByZXR1cm4gXCJ+fn4gI3t4fSB+fn5cIlxuXG5jb2xvcnMgPVxuICBwb2Q6ICAgICAgICAoIHggKSAtPiBDT0xPUi5nb2xkICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4XG4gIG1hcDogICAgICAgICggeCApIC0+IENPTE9SLmdvbGQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhcbiAgbGlzdDogICAgICAgKCB4ICkgLT4gQ09MT1IuZ29sZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeFxuICBzZXQ6ICAgICAgICAoIHggKSAtPiBDT0xPUi5nb2xkICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4XG4gIHRleHQ6ICAgICAgICggeCApIC0+IENPTE9SLndoZWF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhcbiAgZmxvYXQ6ICAgICAgKCB4ICkgLT4gQ09MT1IuRkFOQ1lSRUQgICAgICAgICAgICAgICAgICAgICAgICAgeFxuICByZWdleDogICAgICAoIHggKSAtPiBDT0xPUi5wbHVtICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4XG4gIHRydWU6ICAgICAgICggeCApIC0+IENPTE9SLmludmVyc2UuYm9sZC5pdGFsaWMubGltZSAgICAgICAgIHhcbiAgZmFsc2U6ICAgICAgKCB4ICkgLT4gQ09MT1IuaW52ZXJzZS5ib2xkLml0YWxpYy5GQU5DWU9SQU5HRSAgeFxuICB1bmRlZmluZWQ6ICAoIHggKSAtPiBDT0xPUi5pbnZlcnNlLmJvbGQuaXRhbGljLm1hZ2VudGEgICAgICB4XG4gIG51bGw6ICAgICAgICggeCApIC0+IENPTE9SLmludmVyc2UuYm9sZC5pdGFsaWMuYmx1ZSAgICAgICAgIHhcbiAgbmFuOiAgICAgICAgKCB4ICkgLT4gQ09MT1IuaW52ZXJzZS5ib2xkLml0YWxpYy5tYWdlbnRhICAgICAgeFxuICBvdGhlcjogICAgICAoIHggKSAtPiBDT0xPUi5pbnZlcnNlLnJlZCAgICAgICAgICAgICAgICAgICAgICB4XG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuc2hvdyA9IG5ldyBTaG93KClcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9fc2hvdyA9IC0+XG4gIGRlYnVnICfOqV9fXzMnLCBzaG93XG4gIGRlYnVnICfOqV9fXzQnLCBzaG93LnN0YXRlXG4gIGRlYnVnICfOqV9fXzUnLCBycHIgc2hvdy5kZW50XG4gIGRlYnVnICfOqV9fXzYnLCBzaG93LmdvX2Rvd24oKVxuICBkZWJ1ZyAnzqlfX183JywgcnByIHNob3cuZGVudFxuICBlY2hvKClcbiAgZWNobyAnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nXG4gIGVjaG8gc2hvdyBcImZvbyAnYmFyJ1wiXG4gIGVjaG8gJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJ1xuICBlY2hvIHNob3cge31cbiAgZWNobyAnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nXG4gIGVjaG8gc2hvdyB7IGtvbmc6IDEwOCwgbG93OiA5MjMsIG51bWJlcnM6IFsgMTAsIDExLCAxMiwgXSwgfVxuICBlY2hvICctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSdcbiAgZWNobyBzaG93IFtdXG4gIGVjaG8gJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJ1xuICBlY2hvIHNob3cgWyAnc29tZScsICd3b3JkcycsICd0bycsICdzaG93JywgMSwgLTEsIGZhbHNlLCBdXG4gIGVjaG8gJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJ1xuICBlY2hvIHNob3cgbmV3IE1hcCBbIFsgJ2tvbmcnLCAxMDgsIF0sIFsgJ2xvdycsIDkyMywgXSwgWyA5NzEsICd3b3JkJywgXSwgWyB0cnVlLCAnKzEnLCBdLCBbICdhIGIgYycsIGZhbHNlLCBdIF1cbiAgZWNobyAnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nXG4gIGVjaG8gc2hvdyBuZXcgU2V0IFsgJ3NvbWUnLCAnd29yZHMnLCB0cnVlLCBmYWxzZSwgbnVsbCwgdW5kZWZpbmVkLCAzLjE0MTU5MjYsIE5hTiwgXVxuICBlY2hvICctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSdcbiAgZWNobyBzaG93IC9hYmNbZGVdL1xuICBlY2hvICctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSdcbiAgZWNobyBzaG93IEJ1ZmZlci5mcm9tICdhYmPDpMO2w7wnXG4gIGVjaG8gJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJ1xuICBlY2hvKClcbiAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGF3YWl0IGRlbW9fZXhlY2EoKVxuICBkZW1vX3Nob3coKVxuICBlY2hvICfOqV9fXzgnLCAoIEMuaGV4KCcjRkY3NUQxJykuYm9sZC51bmRlcmxpbmUgJ1BpbmsnICApLCAnWFhYJ1xuICBlY2hvICfOqV9fXzknLCAoIEMueWVsbG93ICggQy5yZWQuYm9sZC5pbnZlcnNlICdQaW5rJyAgICAgICksICdYWFgnIClcbiAgZWNobyAnzqlfXzEwJywgKCBDLnllbGxvdyBcIiEhISAje0MucmVkLmJvbGQuaW52ZXJzZSAnUGluayd9IFhYWFwiIClcbiAgZWNobyAnzqlfXzExJywgKCBUTVBUUk0ueWVsbG93IFwiISEhICN7VE1QVFJNLnJlZCBUTVBUUk0uYm9sZCBUTVBUUk0ucmV2ZXJzZSAnUGluayd9IFhYWFwiIClcbiAgZWNobyAnzqlfXzEyJywgKCBDLmJnQmx1ZS55ZWxsb3cuYm9sZCBcIiBvb29wcyBcIiApXG4gIGVjaG8gJ86pX18xMycsICggQy5iZ0JsdWUucmVkLmJvbGQgXCIgb29vcHMgXCIgKVxuICBlY2hvICfOqV9fMTQnLCAoIEMuYmdCbHVlLmdyZWVuLmJvbGQgXCIgb29vcHMgXCIgKVxuICBlY2hvICfOqV9fMTUnLCAoIEMuYmdXaGl0ZS5yZWQuYm9sZCAtMTIzNDUuODcgKVxuICBlY2hvKClcbiAgZWNobyAnzqlfXzE2JywgKCBDLmJnV2hpdGUucmVkLmJvbGRcIiB0aGVyZSB3YXMgYW4gI3tDLmJnUmVkLndoaXRlXCJFUlJPUlwifSBpbiB0aGUgI3tDLmRpbVwicHVkZGluZ1wifSBcIiApXG4gIGVjaG8oKVxuICBlY2hvICfOqV9fMTcnLCAoIEMuYmdXaGl0ZS5yZWQuYm9sZFwiIHRoZXJlIHdhcyBhbiAje0MuaW52ZXJzZVwiRVJST1JcIn0gaW4gdGhlICN7Qy5kaW1cInB1ZGRpbmdcIn0gXCIgKVxuICBlY2hvKClcbiAgZWNobyAnzqlfXzE4JywgKCBDLmJnWWVsbG93LmJsYWNrLmJvbGRcIiB0aGVyZSB3YXMgYW4gI3tDLmludmVyc2VcIkVSUk9SXCJ9IGluIHRoZSAje0MuZGltXCJwdWRkaW5nXCJ9IFwiIClcbiAgZWNobygpXG4gIGVjaG8gJ86pX18xOScsICggQy5iZ1llbGxvdy5kaW0uYmxhY2suYm9sZFwiIHRoZXJlIHdhcyBhbiAje0MuaW52ZXJzZVwiRVJST1JcIn0gaW4gdGhlICN7Qy5kaW1cInB1ZGRpbmdcIn0gXCIgKVxuICBlY2hvKClcbiAgZWNobyAnzqlfXzIwJywgKCBDLmJnQmxhY2suY3lhbi5ib2xkXCIgdGhlcmUgd2FzIGFuICN7Qy5pbnZlcnNlXCJFUlJPUlwifSBpbiB0aGUgXFxuI3tDLmRpbVwicHVkZGluZ1wifSBcIiApXG4gIGVjaG8oKVxuICBlY2hvICfOqV9fMjEnLCBDLnJlZC5pdGFsaWNcIkVycm9yOiAje0MueWVsbG93XCJNb2R1bGUgI3tDLmdyZWVuXCJhbnNpc1wifSBpcyBtaXNzaW5nIVwifSBJbnN0YWxsYXRpb24gcmVxdWlyZWQuXCJcbiAgZWNobygpXG4gIG15X3RoZW1lID1cbiAgICBvcmFuZ2U6ICcjZmZhYjQwJ1xuICAgIHBpbms6ICAgJyNmZjc1ZDEnXG4gICAgcmVkOiAgICAnI2ZmMDAwMCdcbiAgRCA9IG5ldyBDLkFuc2lzKCkuZXh0ZW5kIG15X3RoZW1lXG4gIGVjaG8gJ86pX18yMicsICggayBmb3IgayBvZiBEIClcbiAgZWNobyAnzqlfXzIzJywgVE1QVFJNLnJlZCBcIkVycm9yOiBJbnN0YWxsYXRpb24gcmVxdWlyZWQuXCJcbiAgZWNobyAnzqlfXzI0JywgQy5yZWRcIkVycm9yOiBJbnN0YWxsYXRpb24gcmVxdWlyZWQuXCJcbiAgZWNobyAnzqlfXzI1JywgRC5yZWRcIkVycm9yOiBJbnN0YWxsYXRpb24gcmVxdWlyZWQuXCJcbiAgZWNobyAnzqlfXzI2JywgRC5vcmFuZ2UuaXRhbGljXCJFcnJvcjogI3tELmJsdWVcIk1vZHVsZSAje0QucGlua1wiYW5zaXNcIn0gaXMgbWlzc2luZyFcIn0gSW5zdGFsbGF0aW9uIHJlcXVpcmVkLlwiXG4gIGVjaG8oKVxuICByZWQgPSBELnJlZFxuICBlY2hvICfOqV9fMjcnLCByZWRcIndvb1wiXG4gIGVjaG8gJ86pX18yOCcsIHJlZC5pdGFsaWNcIndvb1wiXG4gIGVtID0gcmVkLml0YWxpYy5ib2xkLmludmVyc2VcbiAgZWNobyAnzqlfXzI5JywgZW1cImVtcGhhc2l6ZTogI3sgc2hvdyB7IGQ6IDYsIH19IG5vdCBiYWRcIlxuXG5cblxuXG4iXX0=
//# sourceURL=../src/demo-show-pretty-printer.coffee