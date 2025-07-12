(async function() {
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
  'use strict';
  var C, GUY, alert, blue, bold, debug, demo_colorful_proxy, demo_infinite_proxy, demo_proxy_as_html_producer, echo, f, gold, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, urge, warn, whisper, white, write;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-proxy'));

  ({rpr, inspect, echo, white, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  write = function(p) {
    return process.stdout.write(p);
  };

  C = require('ansis');

  ({nfa} = require('../../../apps/normalize-function-arguments'));

  //===========================================================================================================
  demo_infinite_proxy = function() {
    var base, get_proxy, new_infiniproxy, stack, template;
    stack = [];
    get_proxy = Symbol('get_proxy');
    //.........................................................................................................
    template = {
      base: null,
      is_initial: true,
      empty_stack_on_new_chain: true
    };
    //.........................................................................................................
    new_infiniproxy = nfa({template}, function(base, is_initial, cfg) {
      var R, proxy;
      if (!cfg.empty_stack_on_new_chain) {
        is_initial = false;
      }
      proxy = new Proxy(base, {
        get: function(target, key) {
          if (key === get_proxy) {
            return new_infiniproxy({
              base,
              is_initial: false
            });
          }
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
      R = `${stack.join('.')}::${rpr(P)}`;
      stack.length = 0;
      return R;
    };
    (() => {      //.........................................................................................................
      /* These calls will be `stack`ed but then get thrown away as soon as any property of `p` is used: */
      var p;
      echo('——————————————————————————————————————————————————————————————————————————————');
      p = new_infiniproxy(base, {
        empty_stack_on_new_chain: true
      });
      /* default */      p.ooops;
      debug('Ω___1', stack);
      p.wat;
      debug('Ω___2', stack);
      p.nö;
      debug('Ω___3', stack);
      info('Ω___4', p.more_of_this`some text`);
      debug('Ω___5', stack);
      return null;
    })();
    (() => {      //.........................................................................................................
      /* These calls will be `stack`ed and remain on the stack until `p` is called: */
      var p;
      echo('——————————————————————————————————————————————————————————————————————————————');
      p = new_infiniproxy(base, {
        empty_stack_on_new_chain: false
      });
      /* opt-in */      p.ooops;
      debug('Ω___6', stack);
      p.wat;
      debug('Ω___7', stack);
      p.nö;
      debug('Ω___8', stack);
      info('Ω___9', p.more_of_this`some text`);
      debug('Ω__10', stack);
      return null;
    })();
    (() => {      //.........................................................................................................
      /* But if needed, can always reference a proxy from an intermediate result and build a property chain
         on that; here we used a special unique value `get_proxy` that produces an intermediate result *without*
         adding it to the property chain: */
      var p, proxy;
      echo('——————————————————————————————————————————————————————————————————————————————');
      p = new_infiniproxy(base);
      info('Ω__11', p.red.bold.underline`some text`);
      /* Some random property retrievals without call... */
      p.bold.underline;
      p.strikethrough.inverse;
      /* ...won't influence the meaning of the next property chain: */
      info('Ω__12', p.yellow`finally, a call`);
      proxy = p[get_proxy];
      /* Imagine we go through some branching if/then clauses to decide whether to add some styles: */
      proxy.bold.underline;
      proxy.strikethrough;
      proxy.inverse;
      proxy.yellow;
      /* Finally, we're ready to print: */
      info('Ω__13', proxy`this will be printed in bold + underline + strikethrough + inverse + yellow`);
      return null;
    })();
    return null;
  };

  // #===========================================================================================================
  // demo_picocolors_chalk = ->
  //   do =>
  //     # info 'Ω__14',     C.yellow"█▒█"
  //     # info 'Ω__15',     C.yellow"█#{ C.green"▒" }█"
  //     info 'Ω__16',     C.red"█#{    C.green"▒" }█#{ C.green 'GREEN' }###"
  //     # info 'Ω__17', rpr C.yellow"█▒█"
  //     # info 'Ω__18', rpr C.yellow"█#{ C.green"▒" }█"
  //     info 'Ω__19', rpr C.red"█#{    C.green"▒" }█#{ C.green 'GREEN' }###"
  //     info 'Ω__20',     C.red"████#{C.green"████#{C.yellow"████"}████"}████"
  //     info 'Ω__21', rpr C.red"████#{C.green"████#{C.yellow"████"}████"}████"
  //     return null
  //   do =>
  //     #-----------------------------------------------------------------------------------------------------------
  //     color_codes =
  //       red:    '\x1B[31m'
  //       green:  '\x1B[32m'
  //       yellow: '\x1B[33m'
  //     color_off = '\x1B[39m'
  //     #.......................................................................................................
  //     colorizer_from_color_code = ( color_code ) ->
  //       R = ( parts, expressions... ) ->
  //         R = color_code + parts[ 0 ]
  //         for expression, idx in expressions
  //           inner = expression.toString().replace /\x1B\[39m$/, ''
  //           R += ( inner ) + ( color_code + parts[ idx + 1 ] )
  //         return R + color_off
  //       return R
  //     #.......................................................................................................
  //     red     = colorizer_from_color_code color_codes.red
  //     green   = colorizer_from_color_code color_codes.green
  //     yellow  = colorizer_from_color_code color_codes.yellow
  //     # info 'Ω__22',     red"█#{'▒'}█#{ 'GREEN' }###"
  //     # info 'Ω__23', rpr red"█#{'▒'}█#{ 'GREEN' }###"
  //     info 'Ω__24',     red"████#{green"████#{yellow"████"}████"}████"
  //     info 'Ω__25', rpr red"████#{green"████#{yellow"████"}████"}████"
  //     return null
  //   return null

  //===========================================================================================================
  demo_colorful_proxy = function() {
    /* Building the chain: */
    var TMP_error, base, chain, new_infiniproxy, p, stack, template;
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
            throw new TMP_error(`Ω__26 unknown key ${rpr(key)}`);
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
    p = new_infiniproxy(C, base, {
      is_initial: true
    });
    info('Ω__27', p.green.bold.inverse(" holy moly "));
    //.........................................................................................................
    info('Ω__28', p.yellow.italic`some text`);
    info('Ω__29', p.green.bold.inverse.underline`some text`);
    chain = p.cyan.bold;
    chain.underline;
    info('Ω__30', p("finally, a call"));
    return null;
  };

  //===========================================================================================================
  demo_proxy_as_html_producer = function() {
    var get_proxy, get_stack, new_infiniproxy, pop_old_stack, properties, push_new_stack, stackofstacks, template;
    /* NOTE in order for nested calls to properly work, it looks like we need a stack of stacks;
     currently
     ```
     H.div"this stuff is #{H.span"cool!"}"
     ```
     returns an empty string.
     */
    // stack         = []
    stackofstacks = [];
    get_stack = function() {
      return stackofstacks.at(-1);
    };
    push_new_stack = function() {
      stackofstacks.push([]);
      return get_stack();
    };
    pop_old_stack = function() {
      return stackofstacks.pop();
    };
    // push_new_stack()
    properties = new Map();
    get_proxy = Symbol('get_proxy');
    //.........................................................................................................
    template = {
      base: null,
      is_initial: true,
      empty_stack_on_new_chain: true
    };
    //.........................................................................................................
    new_infiniproxy = nfa({template}, function(base, is_initial, cfg) {
      var R, proxy;
      if (!cfg.empty_stack_on_new_chain) {
        is_initial = false;
      }
      proxy = new Proxy(base, {
        get: function(target, key) {
          var XXX_before, XXX_mark, XXX_stack, ref, ref1;
          if (key === get_proxy) {
            return new_infiniproxy({
              base,
              is_initial: false
            });
          }
          if ((typeof key) === 'symbol') {
            return target[key];
          }
          if (Reflect.has(target, key)) {
            return target[key];
          }
          XXX_before = ((ref = get_stack()) != null ? ref : []).slice(0);
          if (is_initial) {
            // stack.length = 0
            push_new_stack();
          }
          get_stack().push(key);
          XXX_mark = is_initial ? reverse(red(bold(' I '))) : reverse(white(bold(' S ')));
          XXX_stack = ((ref1 = get_stack()) != null ? ref1 : []).slice(0);
          debug('Ω__31', XXX_mark, 'key:', rpr(key), 'before:', gold(rpr(XXX_before.join('.'))), 'after:', blue(rpr(XXX_stack.join('.'))));
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
    (() => {      //.........................................................................................................
      var H, Raw, button, escape_html_text, render_html, tag_function;
      echo('——————————————————————————————————————————————————————————————————————————————');
      //.......................................................................................................
      Raw = class Raw {
        constructor(text) {
          this.data = text;
          return void 0;
        }

        toString() {
          return this.data;
        }

      };
      //.......................................................................................................
      escape_html_text = function(text) {
        var R;
        R = text;
        R = R.replace(/&/g, '&amp;');
        R = R.replace(/</g, '&lt;');
        R = R.replace(/>/g, '&gt;');
        return R;
      };
      //.......................................................................................................
      tag_function = function(parts, ...expressions) {
        var R, expression, expression_rpr, i, idx, len;
        debug('Ω__32', expressions);
        R = parts[0];
        for (idx = i = 0, len = expressions.length; i < len; idx = ++i) {
          expression = expressions[idx];
          expression_rpr = expression.toString();
          if (!(expression instanceof Raw)) {
            expression_rpr = escape_html_text(expression_rpr);
          }
          R += expression_rpr + parts[idx + 1];
        }
        return R;
      };
      //.......................................................................................................
      render_html = function(...P) {
        var R, class_names, class_rpr, is_template_call, p, stack, tag_name, text;
        stack = get_stack();
        pop_old_stack();
        urge('Ω__33', gold(reverse(bold({stack}))));
        is_template_call = (Array.isArray(P[0])) && (Object.isFrozen(P[0])) && (P[0].raw != null);
        if (is_template_call) {
          text = tag_function(...P);
        } else {
          switch (true) {
            case P.length === 0:
              text = '';
              break;
            case P.length === 1:
              text = tag_function(P);
              break;
            default:
              throw new Error("Ω__34 more than one argument not allowed");
          }
        }
        // debug 'Ω__35', { is_template_call, text, }
        //.....................................................................................................
        R = [];
        if (stack.length > 0) {
          tag_name = stack.shift();
          if (stack.length > 0) {
            class_names = stack.join(' ');
            class_rpr = ` class='${class_names}'`;
          } else {
            class_rpr = '';
          }
          //...................................................................................................
          R.push("<");
          R.push(tag_name);
          R.push(class_rpr);
          //...................................................................................................
          /* properties: */
          p = (() => {
            /* TAINT must escape, quote value */
            var _p, property_name, property_value, property_value_rpr, x;
            if (properties.size === 0) {
              return '';
            }
            _p = [];
            for (x of properties.entries()) {
              [property_name, property_value] = x;
              property_value_rpr = property_value.replace(/'/g, '&apos;');
              _p.push(`${property_name}='${property_value_rpr}'`);
            }
            properties.clear();
            return ' ' + _p.join(' ');
          })();
          //...................................................................................................
          R.push(p);
          R.push(">");
          R.push(text);
          R.push("</");
          R.push(tag_name);
          R.push(">");
        }
        //.....................................................................................................
        stack.length = 0;
        urge('Ω__36', R);
        R = R.join('');
        if (stackofstacks.length !== 0) {
          R = new Raw(R);
        }
        // R = new Raw R
        return R;
      };
      //.......................................................................................................
      render_html.on_click = function(action) {
        if (Array.isArray(action)) {
          action = action[0];
        }
        properties.set('on_click', action);
        return this;
      };
      //.......................................................................................................
      H = new_infiniproxy(render_html);
      // info 'Ω__37', H.div.big.important"some <arbitrary> text"
      // info 'Ω__38', H.div.big.important "some <arbitrary> text"
      // info 'Ω__39', H.on_click'send_form()'.xxx ### TAINT wrong result ###
      // info 'Ω__40', H.div.on_click'send_form()'.big.important"this value is #{true}"
      // info 'Ω__41', H.span"cool!"
      // info 'Ω__42', H.div"this stuff is #{"cool!"}"
      info('Ω__43', H.div.outer`this stuff is ${H.span.inner`cool!`}`);
      info('Ω__44', button = new Raw(H.button.on_click`send_form`.red`cool!`));
      info('Ω__45', H.div.outer`press here: ${button}`);
      // info 'Ω__46', H.div.on_click'send_form()'"this stuff is #{H.span"cool!"}"
      // info 'Ω__47', H.div.on_click'send_form()'.big.important"this stuff is #{H.span"cool!"}"
      return null;
    })();
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // demo_infinite_proxy()
      // demo_colorful_proxy()
      demo_proxy_as_html_producer();
      return echo();
    })();
  }

}).call(this);

//# sourceMappingURL=demo-infinite-proxy.js.map