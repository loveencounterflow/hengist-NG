(async function() {
  'use strict';
  var C, GTNG, GUY, Test, alert, blue, bold, debug, demo_colorful_proxy, demo_infinite_proxy, demo_proxy_as_html_producer, echo, f, get_infiniproxy, gold, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, urge, warn, whisper, white, write;

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

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

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
  get_infiniproxy = function(base) {
    var get_proxy, get_stack, get_stack_length, new_doublestack_infiniproxy, pop_old_stack, push_new_stack, stackofstacks, template;
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
    get_stack_length = function() {
      return stackofstacks.length;
    };
    get_proxy = Symbol('get_proxy');
    //.........................................................................................................
    template = {
      base: null,
      is_initial: true,
      empty_stack_on_new_chain: true
    };
    //.........................................................................................................
    new_doublestack_infiniproxy = nfa({template}, function(base, is_initial, cfg) {
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
          if (Reflect.has(target, key)) {
            return target[key];
          }
          // XXX_before = ( get_stack() ? [] )[ .. ]
          if (is_initial) {
            push_new_stack();
          }
          get_stack().push(key);
          // XXX_mark = if is_initial then ( reverse red bold ' I ' ) else ( reverse white bold ' S ' )
          // XXX_stack = ( get_stack() ? [] )[ .. ]
          // debug 'Ω__31', XXX_mark, 'key:', ( rpr key ), 'before:', ( gold rpr XXX_before.join '.' ), 'after:', ( blue rpr XXX_stack.join '.' )
          return R;
        }
      });
      if (is_initial) {
        R = new_doublestack_infiniproxy({
          base,
          is_initial: false
        });
      } else {
        R = proxy;
      }
      return proxy;
    });
    return {
      //.........................................................................................................
      proxy: new_doublestack_infiniproxy(base),
      get_stack,
      push_new_stack,
      pop_old_stack,
      get_proxy,
      get_stack_length
    };
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_proxy_as_html_producer = function() {
    var H, Raw, XXX, append, button, escape_html_text, properties, render_html, text_from_tagged_template_call, Ω__46, Ω__47, Ω__48;
    //.........................................................................................................
    echo('——————————————————————————————————————————————————————————————————————————————');
    append = function(list, ...P) {
      return list.splice(list.length, 0, ...P);
    };
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
    text_from_tagged_template_call = function(parts, ...expressions) {
      var R, expression, expression_rpr, i, idx, len;
      // debug 'Ω__32', expressions
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
      var R, atrs_rpr, class_names, class_rpr, is_template_call, stack, tag_name, text;
      stack = XXX.get_stack();
      XXX.pop_old_stack();
      // urge 'Ω__33', gold reverse bold { stack, }
      is_template_call = (Array.isArray(P[0])) && (Object.isFrozen(P[0])) && (P[0].raw != null);
      if (is_template_call) {
        text = text_from_tagged_template_call(...P);
      } else {
        switch (true) {
          case P.length === 0:
            text = '';
            break;
          case P.length === 1:
            text = text_from_tagged_template_call(P);
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
        append(R, "<", tag_name, class_rpr);
        //...................................................................................................
        /* properties: */
        atrs_rpr = (() => {
          /* TAINT must escape, quote value */
          var _atrs, property_name, property_value, property_value_rpr, x;
          if (properties.size === 0) {
            return '';
          }
          _atrs = [];
          for (x of properties.entries()) {
            [property_name, property_value] = x;
            property_value_rpr = property_value.replace(/'/g, '&apos;');
            _atrs.push(`${property_name}='${property_value_rpr}'`);
          }
          properties.clear();
          return ' ' + _atrs.join(' ');
        })();
        //...................................................................................................
        append(R, atrs_rpr, ">", text, "</", tag_name, ">");
      }
      //.....................................................................................................
      stack.length = 0;
      urge('Ω__36', R);
      R = R.join('');
      if (XXX.get_stack_length() !== 0) {
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
    properties = new Map();
    XXX = get_infiniproxy(render_html);
    H = XXX.proxy;
    // info 'Ω__37', H.div.big.important"some <arbitrary> text"
    // info 'Ω__38', H.div.big.important "some <arbitrary> text"
    // info 'Ω__39', H.on_click'send_form()'.xxx ### TAINT wrong result ###
    // info 'Ω__40', H.div.on_click'send_form()'.big.important"this value is #{true}"
    // info 'Ω__41', H.span"cool!"
    // info 'Ω__42', H.div"this stuff is #{"cool!"}"
    button = new Raw(H.button.on_click`send_form`.red`cool!`);
    //.........................................................................................................
    info('Ω__43', white(bold(reverse(H.div.outer`this stuff is ${H.span.inner`cool!`}`))));
    info('Ω__44', white(bold(reverse(new Raw(H.button.on_click`send_form`.red`cool!`)))));
    info('Ω__45', white(bold(reverse(H.div.outer`press here: ${button}`))));
    //.........................................................................................................
    this.eq((Ω__46 = function() {
      return H.div.outer`this stuff is ${H.span.inner`cool!`}`;
    }), "<div class='outer'>this stuff is <span class='inner'>cool!</span></div>");
    this.eq((Ω__47 = function() {
      return new Raw(H.button.on_click`send_form`.red`cool!`);
    }), {
      data: "<button class='red' on_click='send_form'>cool!</button>"
    });
    this.eq((Ω__48 = function() {
      return H.div.outer`press here: ${button}`;
    }), "<div class='outer'>press here: <button class='red' on_click='send_form'>cool!</button></div>");
    return null;
  };

  // # # # ###
  // # # # SQL.insert.into.employees('id','name').values(id,name)
  // # # # ###

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
      return (new Test(guytest_cfg)).test({demo_proxy_as_html_producer});
    })();
  }

}).call(this);

//# sourceMappingURL=demo-infinite-proxy.js.map