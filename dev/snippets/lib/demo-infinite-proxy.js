(async function() {
  'use strict';
  var C, GUY, alert, debug, demo_colorful_proxy, demo_commutator, demo_picocolors_chalk, demo_proxy, echo, f, gold, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, urge, warn, whisper, white, write;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-proxy'));

  ({rpr, inspect, echo, white, gold, red, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  write = function(p) {
    return process.stdout.write(p);
  };

  C = require('ansis');

  ({nfa} = require('../../../apps/normalize-function-arguments'));

  //===========================================================================================================
  demo_proxy = function() {
    /* Building the chain: */
    var base, chain, new_infiniproxy, p, stack, template;
    stack = [];
    //.........................................................................................................
    template = {
      base: null,
      is_initial: false
    };
    //.........................................................................................................
    new_infiniproxy = nfa({template}, function(base, is_initial, cfg) {
      var R, proxy;
      proxy = new Proxy(base, {
        get: function(target, key) {
          if ((typeof key) === 'symbol') {
            return target[key];
          }
          if (is_initial) {
            stack.length = 0;
          }
          stack.push(key);
          return R;
        }
      });
      if (is_initial) {
        R = new_infiniproxy({
          base,
          is_initial: false
        });
      } else {
        R = proxy;
      }
      return proxy;
    });
    //.........................................................................................................
    base = function(...P) {
      var R;
      // debug 'Ω___1', P
      R = `${stack.join('.')}::${rpr(P)}`;
      stack.length = 0;
      return R;
    };
    p = new_infiniproxy(base, {
      is_initial: true
    });
    debug('Ω___2', p);
    debug('Ω___3', p.arc);
    info('Ω___4', p.arc.bo.cy(8));
    //.........................................................................................................
    /* These calls will be `stack`ed but then get thrown away as soon as any property of `p` is used: */
    p.ooops;
    debug('Ω___5', stack);
    p.wat;
    debug('Ω___6', stack);
    p.nö;
    debug('Ω___7', stack);
    info('Ω___8', p`some text`);
    debug('Ω___9', stack);
    //.........................................................................................................
    info('Ω__10', p.arc.bo.cy`some text`);
    info('Ω__11', p.arc.bo.cy.dean.blah`some text`);
    chain = p.arc.bo.cy;
    chain.dean.blah;
    chain.and.then.some;
    info('Ω__12', p("finally, a call"));
    return null;
  };

  //===========================================================================================================
  demo_colorful_proxy = function() {
    /* Building the chain: */
    var TMP_error, base, chain, extension, new_infiniproxy, p, stack, template;
    TMP_error = class TMP_error extends Error {};
    stack = [];
    //.........................................................................................................
    template = {
      bearer: null,
      base: null,
      is_initial: false
    };
    //.........................................................................................................
    new_infiniproxy = nfa({template}, function(bearer, base, is_initial, cfg) {
      var R, proxy;
      proxy = new Proxy(base, {
        get: function(target, key) {
          if ((typeof key) === 'symbol') {
            return target[key];
          }
          if (!Reflect.has(bearer, key)) {
            throw new TMP_error(`Ω__13 unknown key ${rpr(key)}`);
          }
          if (is_initial) {
            stack.length = 0;
          }
          stack.push(key);
          return R;
        }
      });
      if (is_initial) {
        R = new_infiniproxy({
          bearer,
          base,
          is_initial: false
        });
      } else {
        R = proxy;
      }
      return proxy;
    });
    //.........................................................................................................
    base = function(...P) {
      var R, key;
      R = P[0];
      while (stack.length > 0) {
        key = stack.pop();
        R = C[key](R);
      }
      return R;
    };
    //.........................................................................................................
    // @blink                    = "\x1b[5m"
    // @bold                     = "\x1b[1m"
    // @reverse                  = "\x1b[7m"
    // @underline                = "\x1b[4m"

    // #-----------------------------------------------------------------------------------------------------------
    // # Effects Off
    // #...........................................................................................................
    // @no_blink                 = "\x1b[25m"
    // @no_bold                  = "\x1b[22m"
    // @no_reverse               = "\x1b[27m"
    // @no_underline             = "\x1b[24m"
    //.........................................................................................................
    // C =
    //   blink: ( x ) ->
    //     debug 'Ω__14', rpr x
    //     return '---'
    // Object.setPrototypeOf C, C
    extension = {
      blink: function(x) {
        debug('Ω__15', rpr(x));
        return '---';
      }
    };
    //.........................................................................................................
    p = new_infiniproxy(C, base, {
      is_initial: true
    });
    info('Ω__16', p.green.bold.inverse(" holy moly "));
    // info 'Ω__17', p.green.bold.inverse.blink " holy moly "
    //.........................................................................................................
    info('Ω__18', p.yellow.italic`some text`);
    info('Ω__19', p.green.bold.inverse.underline`some text`);
    chain = p.cyan.bold;
    chain.underline;
    info('Ω__20', p("finally, a call"));
    return null;
  };

  //===========================================================================================================
  demo_commutator = function() {
    var Commutator, TMP_no_such_key_error, a, b, c, misfit;
    TMP_no_such_key_error = class TMP_no_such_key_error extends Error {};
    misfit = Symbol('misfit');
    //===========================================================================================================
    Commutator = class Commutator {
      //---------------------------------------------------------------------------------------------------------
      constructor() {
        this.bearers = [];
        this.cache = new Map();
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      add_bearer(x) {
        this.bearers.unshift(x);
        return null;
      }

      //---------------------------------------------------------------------------------------------------------
      get(key, fallback = misfit) {
        var R, bearer, i, len, ref;
        if ((R = this.cache.get(key)) != null) {
          return R;
        }
        ref = this.bearers;
        for (i = 0, len = ref.length; i < len; i++) {
          bearer = ref[i];
          if (!Reflect.has(bearer, key)) {
            continue;
          }
          this.cache.set(key, R = {
            bearer,
            value: bearer[key]
          });
          return R;
        }
        if (fallback !== misfit) {
          return fallback;
        }
        throw new TMP_no_such_key_error(`Ω__21 unknown key ${rpr(key)}`);
      }

    };
    //===========================================================================================================
    a = {
      k: 'K',
      l: 'not this'
    };
    b = {
      l: 'L'
    };
    c = new Commutator();
    c.add_bearer(a);
    c.add_bearer(b);
    debug('Ω__22', c.get('ttt', null));
    debug('Ω__23', c.get('k'));
    debug('Ω__24', c.get('l'));
    return null;
  };

  //===========================================================================================================
  demo_picocolors_chalk = function() {
    (() => {
      // info 'Ω__25',     C.yellow"█▒█"
      // info 'Ω__26',     C.yellow"█#{ C.green"▒" }█"
      info('Ω__27', C.red`█${C.green`▒`}█${C.green('GREEN')}###`);
      // info 'Ω__28', rpr C.yellow"█▒█"
      // info 'Ω__29', rpr C.yellow"█#{ C.green"▒" }█"
      info('Ω__30', rpr(C.red`█${C.green`▒`}█${C.green('GREEN')}###`));
      info('Ω__31', C.red`████${C.green`████${C.yellow`████`}████`}████`);
      info('Ω__32', rpr(C.red`████${C.green`████${C.yellow`████`}████`}████`));
      return null;
    })();
    (() => {      // do =>
      //   P = require 'picocolors'
      //   info 'Ω__33',     P.yellow"█▒█"
      //   info 'Ω__34',     P.yellow"█#{ P.green"▒" }█"
      //   info 'Ω__35',     P.red"█#{    P.green"▒" }█"
      //   info 'Ω__36', rpr P.yellow"█▒█"
      //   info 'Ω__37', rpr P.yellow"█#{ P.green"▒" }█"
      //   info 'Ω__38', rpr P.red"█#{    P.green"▒" }█"
      //   return null
      var H, color_off, green_on, hcolor, inner_on, outer_on, red_on;
      H = (require('chalk')).default;
      //-----------------------------------------------------------------------------------------------------------
      red_on = '\x1B[31m';
      green_on = '\x1B[32m';
      color_off = '\x1B[39m';
      outer_on = red_on;
      inner_on = green_on;
      hcolor = function(parts, ...expressions) {
        var R, expression, i, idx, len;
        R = outer_on + parts[0];
        for (idx = i = 0, len = expressions.length; i < len; idx = ++i) {
          expression = expressions[idx];
          R += (inner_on + expression.toString()) + (outer_on + parts[idx + 1]);
        }
        return R + color_off;
      };
      // info 'Ω__39',     hcolor"█"
      // info 'Ω__40',     hcolor"█#{'▒'}"
      info('Ω__41', hcolor`█${'▒'}█${'GREEN'}###`);
      // info 'Ω__42', rpr hcolor"█"
      // info 'Ω__43', rpr hcolor"█#{'▒'}"
      info('Ω__44', rpr(hcolor`█${'▒'}█${'GREEN'}###`));
      // info 'Ω__45',     H.yellow"█▒█"
      // info 'Ω__46',     H.yellow"█#{ H.green"▒" }█"
      // info 'Ω__47',     H.red"█#{    H.green"▒" }█"
      // info 'Ω__48', rpr H.yellow"█▒█"
      // info 'Ω__49', rpr H.yellow"█#{ H.green"▒" }█"
      // info 'Ω__50', rpr H.red"█#{    H.green"▒" }█"
      return null;
    })();
    (() => {
      var color_codes, color_off, colorizer_from_color_code, green, yellow;
      //-----------------------------------------------------------------------------------------------------------
      color_codes = {
        red: '\x1B[31m',
        green: '\x1B[32m',
        yellow: '\x1B[33m'
      };
      color_off = '\x1B[39m';
      //.......................................................................................................
      colorizer_from_color_code = function(color_code) {
        var R;
        R = function(parts, ...expressions) {
          var expression, i, idx, inner, len;
          R = color_code + parts[0];
          for (idx = i = 0, len = expressions.length; i < len; idx = ++i) {
            expression = expressions[idx];
            inner = expression.toString().replace(/\x1B\[39m$/, '');
            R += inner + (color_code + parts[idx + 1]);
          }
          return R + color_off;
        };
        return R;
      };
      //.......................................................................................................
      red = colorizer_from_color_code(color_codes.red);
      green = colorizer_from_color_code(color_codes.green);
      yellow = colorizer_from_color_code(color_codes.yellow);
      // info 'Ω__41',     red"█#{'▒'}█#{ 'GREEN' }###"
      // info 'Ω__44', rpr red"█#{'▒'}█#{ 'GREEN' }###"
      info('Ω__31', red`████${green`████${yellow`████`}████`}████`);
      info('Ω__31', rpr(red`████${green`████${yellow`████`}████`}████`));
      return null;
    })();
    return null;
  };

  // { Chalk: [class Chalk], __esModule: true,
  //   backgroundColorNames: [ 'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'bgBlackBright', 'bgGray', 'bgGrey', 'bgRedBright', 'bgGreenBright', 'bgYellowBright', 'bgBlueBright', 'bgMagentaBright', 'bgCyanBright', 'bgWhiteBright' ],
  //   backgroundColors: [ 'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'bgBlackBright', 'bgGray', 'bgGrey', 'bgRedBright', 'bgGreenBright', 'bgYellowBright', 'bgBlueBright', 'bgMagentaBright', 'bgCyanBright', 'bgWhiteBright' ],
  //   chalkStderr: { [Function: chalk] createChalk level: 3 },
  //   colorNames: [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'blackBright', 'gray', 'grey', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright', 'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'bgBlackBright', 'bgGray', 'bgGrey', 'bgRedBright', 'bgGreenBright', 'bgYellowBright', 'bgBlueBright', 'bgMagentaBright', 'bgCyanBright', 'bgWhiteBright' ],
  //   colors: [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'blackBright', 'gray', 'grey', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright', 'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'bgBlackBright', 'bgGray', 'bgGrey', 'bgRedBright', 'bgGreenBright', 'bgYellowBright', 'bgBlueBright', 'bgMagentaBright', 'bgCyanBright', 'bgWhiteBright' ],
  //   default: { [Function: chalk] createChalk level: 3 }, foregroundColorNames: [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'blackBright', 'gray', 'grey', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright' ], foregroundColors: [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'blackBright', 'gray', 'grey', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright' ], modifierNames: [ 'reset', 'bold', 'dim', 'italic', 'underline', 'overline', 'inverse', 'hidden', 'strikethrough' ], modifiers: [ 'reset', 'bold', 'dim', 'italic', 'underline', 'overline', 'inverse', 'hidden', 'strikethrough' ], supportsColor: { level: 3, hasBasic: true, has256: true, has16m: true }, supportsColorStderr: { level: 3, hasBasic: true, has256: true, has16m: true } }

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      demo_proxy();
      echo('——————————————————————————————————————————————————————————————————————————————');
      echo();
      demo_colorful_proxy();
      echo();
      demo_commutator();
      echo();
      demo_picocolors_chalk();
      return echo();
    })();
  }

}).call(this);

//# sourceMappingURL=demo-infinite-proxy.js.map