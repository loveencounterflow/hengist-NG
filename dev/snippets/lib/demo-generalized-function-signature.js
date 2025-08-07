(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, blue, bold, debug, demo_call_styles, demo_generalized_signature, demo_get_parameter_names, demo_nfa, echo, f, gold, help, info, inspect, log, plain, praise, red, reverse, rpr, urge, warn, whisper,
    indexOf = [].indexOf;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  ({gold, blue, red, reverse, bold} = GUY.trm);

  /*

   * Restriction

  In order to avoid having to integrate a JS expression parser, we restrict eligible functions to those whose
  signatures consists of nothing but bare parameter names, parameter names with spread (soak) symbol '...',
  and parameter names with the symbolic default 'optional' which must be spelled out in those same letters.

   * CFG Resolution Strategies

  * demand fixed number positional
  * demand last one named
  * signature has *p* ∈ ℕ₀ positional parameters (named in signature)
  * signature has *q* ∈ [ 0, 1 ] PODs for named parameters (i.e. has one or none)
  * signature has *p* + *q* = *b* ∈ ℕ₀ parameters
  * signature has *s* ∈ [ 0, 1 ] splats (i.e. has one or none)
  * function call has *a* ∈ ℕ₀ arguments
    * pre-check strategies:
      * **PCS1**: reject if *b* ≠ *p*
      * **PCS2**: reject if *b* > *p* (Note: can/will not apply if any parameter is declared as a rest (or
        soak) parameter (i.e. with `...`); in that case, assume *b* = *p*)
  * recognition of CFG:
    * all strategies / invariants:
      * CFG may only be last parameter and therefore last argument
      * CFG must be a POD
    * CFG recognition strategies:
      * **CRS1** CFG must be at position of CFG in parameters, arguments[ b - 1 ]
      * **CRS2** CFG must be at last position of arguments, arguments[ a - 1 ]
  Given a function `f = ( a, b, c, cfg ) ->` that is called as follows:

  * **p0_n0**: f()
  * **p1_n0**: f 1
  * **p2_n0**: f 1, 2
  * **p3_n0**: f 1, 2, 3
  * **p0_n1**: f          { a: 4, d: 5, }
  * **p1_n1**: f 1,       { a: 4, d: 5, }
  * **p2_n1**: f 1, 2,    { a: 4, d: 5, }
  * **p3_n1**: f 1, 2, 3, { a: 4, d: 5, }
  * **p4_n0**: f 1, 2, 3, 4

  * **NN**: demand 4 arguments, last one must be a POD
    * **p0_n0**: f()                          # ERROR
    * **p1_n0**: f 1                          # ERROR
    * **p2_n0**: f 1, 2                       # ERROR
    * **p3_n0**: f 1, 2, 3                    # ERROR
    * **p0_n1**: f          { a: 4, d: 5, }   # ERROR
    * **p1_n1**: f 1,       { a: 4, d: 5, }   # ERROR
    * **p2_n1**: f 1, 2,    { a: 4, d: 5, }   # ERROR
    * **p3_n1**: f 1, 2, 3, { a: 4, d: 5, }   # depends on Name Clash Resolution Strategy
    * **p4_n0**: f 1, 2, 3, 4                 # ERROR

  * **NN**: assign positional arguments that appear in signature, last must be a POD
    * **p0_n0**: f()                          # ERROR
    * **p1_n0**: f 1                          # ERROR
    * **p2_n0**: f 1, 2                       # ERROR
    * **p3_n0**: f 1, 2, 3                    # ERROR
    * **p0_n1**: f          { a: 4, d: 5, }   # { a: 4, d: 5, }
    * **p1_n1**: f 1,       { a: 4, d: 5, }   # {       d: 5, }, `a` depends on Name Clash Resolution Strategy
    * **p2_n1**: f 1, 2,    { a: 4, d: 5, }   # {       d: 5, }, `a` depends on Name Clash Resolution Strategy
    * **p3_n1**: f 1, 2, 3, { a: 4, d: 5, }   # {       d: 5, }, `a` depends on Name Clash Resolution Strategy
    * **p4_n0**: f 1, 2, 3, 4                 # ERROR

  * **NN**: assign positional arguments that appear in signature, last may be a POD (udf: `undefined`)
    * **p0_n0**: f()                          # { a: 4, b: udf, c: udf, }
    * **p1_n0**: f 1                          # { a: 4, b: udf, c: udf, }
    * **p2_n0**: f 1, 2                       # { a: 4, b: udf, c: udf, }
    * **p3_n0**: f 1, 2, 3                    # { a: 4, b: udf, c: udf, }
    * **p0_n1**: f          { a: 4, d: 5, }   # { a: 4, b: udf, c: udf, d: 5, }
    * **p1_n1**: f 1,       { a: 4, d: 5, }   # {       b: udf, c: udf, d: 5, }, `a` depends on Name Clash Resolution Strategy
    * **p2_n1**: f 1, 2,    { a: 4, d: 5, }   # {       b: udf, c: udf, d: 5, }, `a` depends on Name Clash Resolution Strategy
    * **p3_n1**: f 1, 2, 3, { a: 4, d: 5, }   # {       b: udf, c: udf, d: 5, }, `a` depends on Name Clash Resolution Strategy
    * **p4_n0**: f 1, 2, 3, 4                 # ERROR

   */
  //===========================================================================================================
  demo_generalized_signature = function() {
    var get_fn_args;
    get_fn_args = (require('fn-args')).default;
    (() => {      // functionArguments
      var d;
      d = [];
      d[0] = 7;
      d.k = 6;
      d[1] = 5;
      urge('Ω___1', Object.keys(d)); // [ '0', '1', 'k' ]
      urge('Ω___2', [...(Object.entries(d))]); // [ [ '0', 7 ], [ '1', 5 ], [ 'k', 6 ] ]
      return null;
    })();
    (() => {
      var get_arguments_poscfg, gnd, pod_prototypes, unset;
      //.......................................................................................................
      pod_prototypes = Object.freeze([null, Object.getPrototypeOf({})]);
      gnd = {
        pod: {
          isa: function(x) {
            var ref;
            return (x != null) && (ref = Object.getPrototypeOf(x), indexOf.call(pod_prototypes, ref) >= 0);
          }
        }
      };
      //.......................................................................................................
      get_arguments_poscfg = function(names, argvments, fallback = null) {
        var R, i, idx, last_arg_idx, len, name, named_argvment, named_name, positional_argvments, positional_names, value;
        help();
        // argvments = [ argvments..., ]
        positional_names = names.slice(0, +(names.length - 2) + 1 || 9e9);
        named_name = names.at(-1);
        info('Ω___3', {positional_names, named_name, positional_argvments, named_argvment, fallback});
        R = {};
        //.....................................................................................................
        if (gnd.pod.isa(argvments.at(-1))) {
          positional_argvments = argvments.slice(0, +(argvments.length - 2) + 1 || 9e9);
          named_argvment = argvments.at(-1);
        } else {
          positional_argvments = argvments.slice(0);
          named_argvment = null;
        }
        //.....................................................................................................
        last_arg_idx = positional_argvments.length - 1;
        for (idx = i = 0, len = names.length; i < len; idx = ++i) {
          name = names[idx];
          if (idx <= last_arg_idx) {
            help('Ω___4', name, rpr(positional_argvments[idx]));
            R[name] = positional_argvments[idx];
          } else {
            urge('Ω___5', `fallback for positional argument @${idx} = ${rpr(argvments[idx])}`);
            R[name] = fallback;
          }
        }
        //.....................................................................................................
        if (named_argvment != null) {
          help('Ω___6', `named_argvment ${rpr(named_argvment)}`);
          for (name in named_argvment) {
            value = named_argvment[name];
            if (Reflect.has(R, name)) {
              warn('Ω___7', `repeated named argument { ${name}: ${rpr(value)}, }`);
              // apply one of strategy = [ 'error', 'named_wins', 'positional_wins', ]
              R[name] = value;
            } else {
              R[name] = value;
            }
          }
        } else {
          urge('Ω___8', "no named argvments");
        }
        //.....................................................................................................
        return R;
      };
      //.......................................................................................................
      f = function(a, b, Q) {
        var cfg;
        // cfg = Object.assign ( Object.create null ), { a, b, }, Q...
        cfg = Object.assign({}, {a, b}, ...Q);
        // info 'Ω___9', f"#{GUY.trm.gold [ arguments..., ]}:>30c;", GUY.trm.blue { a, b, cfg, }
        return info('Ω__10', GUY.trm.gold([...arguments]), GUY.trm.blue({a, b, cfg}));
      };
      //.......................................................................................................
      debug('Ω__11', (f.toString().split('\n'))[0].replace(/^.*function\(\s*/, ''));
      // debug 'Ω__12', ( ( ( a, b = ')', c ) -> ).toString().split '\n' )[ 0 ].replace /^.*function\(\s*/, ''
      // debug 'Ω__13', ( ( ( a, b ### = ) ###, c, Q... ) => ).toString().split '\n' )[ 0 ].replace /^.*function\(\s*/, ''
      unset = Symbol('unset');
      info('Ω__14', get_arguments_poscfg(['a', 'b', 'cfg'], [1], unset));
      info('Ω__15', get_arguments_poscfg(['a', 'b', 'cfg'], [
        1,
        {
          k: 'K'
        }
      ], unset));
      info('Ω__16', get_arguments_poscfg(['a', 'b', 'cfg'], [
        1,
        2,
        {
          k: 'K'
        }
      ], unset));
      info('Ω__17', get_arguments_poscfg(['a', 'b', 'cfg'], [
        1,
        2,
        3,
        {
          k: 'K'
        }
      ], unset));
      info('Ω__18', get_arguments_poscfg(['a', 'b', 'cfg'], [
        1,
        2,
        {
          k: 'K',
          a: 'A'
        }
      ], unset));
      // f 1
      // f 1, 2, 3
      // f 1, 2, k: 'K'
      // f 1, 2, k: 'K', 9, m: 'M'
      return null;
    })();
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_call_styles = function() {
    f = function(first, second, also) {
      // info()
      return info('Ω__19', arguments.length, gold([...arguments]), blue({first, second, also}));
    };
    f('one');
    f('one', {
      second: 'two',
      also: 'three'
    });
    f('one', 'two');
    f('one', 'two', {
      also: 'three'
    });
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_get_parameter_names = function() {
    var get_fn_args, get_signature, optional;
    get_fn_args = (require('fn-args')).default;
    get_signature = function(f) {
      /* thx to https://github.com/sindresorhus/identifier-regex */
      var $names, R, body, disposition, i, jsid_re, kernel, len, match, name, part, parts;
      jsid_re = /^[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}]*$/sv;
      debug();
      body = f.toString();
      kernel = body.replace(/^[^\(]*\(\s*([^\)]*)\s*\).*$/sv, '$1');
      parts = kernel.split(/,\s*/sv);
      // urge 'Ω__20', rpr body
      // urge 'Ω__21', rpr kernel
      // urge 'Ω__22', rpr parts
      $names = [];
      // R       = { $names, }
      R = {};
      for (i = 0, len = parts.length; i < len; i++) {
        part = parts[i];
        switch (true) {
          case (match = part.match(/^[.]{3}\s*(?<name>\S+)\s*$/sv)) != null:
            name = match.groups.name;
            disposition = 'soak';
            break;
          case (match = part.match(/^(?<name>\S+)\s*=\s*optional$/sv)) != null:
            name = match.groups.name;
            disposition = 'optional';
            break;
          default:
            if ((part.match(jsid_re)) == null) {
              throw new Error(`Ω__23 not compliant: ${rpr(part)} in ${rpr(kernel)}`);
            }
            name = part;
            disposition = 'bare';
        }
        // info 'Ω__24', ( rpr part ), { name, disposition, }
        R[name] = disposition;
        // R[ name ] = { name, disposition, }
        $names.push(name);
      }
      return R;
    };
    optional = Symbol('optional');
    (() => {      //.........................................................................................................
      
    const f = function (
      a,
      b = ', e = 7,',
      /* d = 9, */
      c = 8,
      ...P
      ) {}
    ;
      var e;
      debug('Ω__25', (function() {
        try {
          return get_signature(f);
        } catch (error) {
          e = error;
          return red(reverse(e.message));
        }
      })());
      // debug 'Ω__26', get_fn_args f
      return null;
    })();
    (() => {      //.........................................................................................................
      var e;
      f = function(a, b = 4 * (sqrt(8)), c = foo(bar)) {};
      debug('Ω__27', (function() {
        try {
          return get_signature(f);
        } catch (error) {
          e = error;
          return red(reverse(e.message));
        }
      })());
      // debug 'Ω__28', get_fn_args f
      return null;
    })();
    (() => {      //.........................................................................................................
      var e, signature;
      f = function(a, b, c) {
        return {
          $A: [...arguments],
          a,
          b,
          c
        };
      };
      help('Ω__29', (function() {
        try {
          return signature = get_signature(f);
        } catch (error) {
          e = error;
          return red(reverse(e.message));
        }
      })());
      // help 'Ω__30', get_fn_args f
      if (signature != null) {
        info('Ω__31', f(1));
        info('Ω__32', f(1, 2));
        info('Ω__33', f(1, 2, 3));
      }
      return null;
    })();
    (() => {      //.........................................................................................................
      var e, signature;
      f = function(a, b, c = optional) {
        return {
          $A: [...arguments],
          a,
          b,
          c
        };
      };
      help('Ω__34', (function() {
        try {
          return signature = get_signature(f);
        } catch (error) {
          e = error;
          return red(reverse(e.message));
        }
      })());
      // help 'Ω__35', get_fn_args f
      if (signature != null) {
        info('Ω__36', f(1));
        info('Ω__37', f(1, 2));
        info('Ω__38', f(1, 2, 3));
      }
      return null;
    })();
    (() => {      //.........................................................................................................
      var e, signature;
      f = function(a, b = optional, c) {
        return {
          $A: [...arguments],
          a,
          b,
          c
        };
      };
      help('Ω__39', (function() {
        try {
          return signature = get_signature(f);
        } catch (error) {
          e = error;
          return red(reverse(e.message));
        }
      })());
      // help 'Ω__40', get_fn_args f
      if (signature != null) {
        info('Ω__41', f(1));
        info('Ω__42', f(1, 2));
        info('Ω__43', f(1, 2, 3));
      }
      return null;
    })();
    (() => {      //.........................................................................................................
      var e, signature;
      f = function(a, b = optional, c = optional) {
        return {
          $A: [...arguments],
          a,
          b,
          c
        };
      };
      help('Ω__44', (function() {
        try {
          return signature = get_signature(f);
        } catch (error) {
          e = error;
          return red(reverse(e.message));
        }
      })());
      // help 'Ω__45', get_fn_args f
      if (signature != null) {
        info('Ω__46', f(1));
        info('Ω__47', f(1, 2));
        info('Ω__48', f(1, 2, 3));
      }
      return null;
    })();
    (() => {      //.........................................................................................................
      var e, signature;
      f = function(a, b = optional, ...c) {
        return {
          $A: [...arguments],
          a,
          b,
          c
        };
      };
      help('Ω__49', (function() {
        try {
          return signature = get_signature(f);
        } catch (error) {
          e = error;
          return red(reverse(e.message));
        }
      })());
      // help 'Ω__50', get_fn_args f
      if (signature != null) {
        info('Ω__51', f(1));
        info('Ω__52', f(1, 2));
        info('Ω__53', f(1, 2, 3));
      }
      return null;
    })();
    (() => {      //.........................................................................................................
      var e, optionall, signature;
      optionall = 0;
      f = function(a, b = optionall, ...c) {
        return {
          $A: [...arguments],
          a,
          b,
          c
        };
      };
      help('Ω__54', (function() {
        try {
          return signature = get_signature(f);
        } catch (error) {
          e = error;
          return red(reverse(e.message));
        }
      })());
      // help 'Ω__55', get_fn_args f
      if (signature != null) {
        info('Ω__56', f(1));
        info('Ω__57', f(1, 2));
        info('Ω__58', f(1, 2, 3));
      }
      return null;
    })();
    //.........................................................................................................
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_nfa = function() {
    var Arity_error, Not_implemented_error, Value_mismatch_error, e, fn, get_signature, gnd, nfa, optional, pod_prototypes;
    optional = Symbol('optional');
    pod_prototypes = Object.freeze([null, Object.getPrototypeOf({})]);
    gnd = {
      pod: {
        isa: function(x) {
          var ref;
          return (x != null) && (ref = Object.getPrototypeOf(x), indexOf.call(pod_prototypes, ref) >= 0);
        }
      }
    };
    //=========================================================================================================
    Arity_error = class Arity_error extends Error {};
    Not_implemented_error = class Not_implemented_error extends Error {};
    Value_mismatch_error = class Value_mismatch_error extends Error {};
    //=========================================================================================================
    get_signature = function(f) {
      /* thx to https://github.com/sindresorhus/identifier-regex */
      var $names, R, body, disposition, i, jsid_re, kernel, len, match, name, part, parts;
      jsid_re = /^[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}]*$/sv;
      debug();
      body = f.toString();
      kernel = body.replace(/^[^\(]*\(\s*([^\)]*)\s*\).*$/sv, '$1');
      parts = kernel.split(/,\s*/sv);
      // urge 'Ω__59', rpr body
      // urge 'Ω__60', rpr kernel
      // urge 'Ω__61', rpr parts
      $names = [];
      // R       = { $names, }
      R = {};
      for (i = 0, len = parts.length; i < len; i++) {
        part = parts[i];
        switch (true) {
          case (match = part.match(/^[.]{3}\s*(?<name>\S+)\s*$/sv)) != null:
            name = match.groups.name;
            disposition = 'soak';
            break;
          case (match = part.match(/^(?<name>\S+)\s*=\s*optional$/sv)) != null:
            name = match.groups.name;
            disposition = 'optional';
            break;
          default:
            if ((part.match(jsid_re)) == null) {
              throw new Error(`Ω__62 not compliant: ${rpr(part)} in ${rpr(kernel)}`);
            }
            name = part;
            disposition = 'bare';
        }
        // info 'Ω__63', ( rpr part ), { name, disposition, }
        R[name] = disposition;
        // R[ name ] = { name, disposition, }
        $names.push(name);
      }
      return R;
    };
    //=========================================================================================================
    /* Normalize Function Arguments

    ## To Do

    * **`[—]`** implement class `Template`, argument `template` as `nfa { template, }, fn`
    * **`[—]`** implement validation as `nfa { isa, }, fn`
    * **`[—]`** integrate ClearType as `nfa type, fn`

     */
    nfa = function(fn) {
      var arity, disposition, dispositions, i, idx, len, name, names, pos_names, signature;
      signature = get_signature(fn);
      names = Object.keys(signature);
      pos_names = names.slice(0, +(names.length - 2) + 1 || 9e9);
      arity = names.length;
      dispositions = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = names.length; i < len; i++) {
          name = names[i];
          results.push(signature[name]);
        }
        return results;
      })();
//.......................................................................................................
      for (idx = i = 0, len = dispositions.length; i < len; idx = ++i) {
        disposition = dispositions[idx];
        if (disposition === 'bare') {
          continue;
        }
        throw new Not_implemented_error(`Ω__65 encountered unimplemented disposition ${rpr(disposition)} for parameter #names[ idx ]`);
      }
      //.......................................................................................................
      return function(...P) {
        var Q, j, len1, nme_value, pos_value;
        //.....................................................................................................
        if (P.length > arity) {
          throw new Arity_error(`Ω__66 expected up to ${arity} arguments, got ${P.length}`);
        }
        //.....................................................................................................
        if (!gnd.pod.isa(P.at(-1))) {
          if (P.length > arity - 1) {
            throw new Arity_error(`Ω__67 expected up to ${arity - 1} positional arguments plus one POD, got ${P.length} positional arguments`);
          }
          P.push({}); // Object.create null
        } else {
          /* NOTE copy object so we can modify it */
          // P[ P.length - 1 ] = Object.assign ( Object.create null ), P.at -1
          P[P.length - 1] = Object.assign({}, P.at(-1));
        }
        //.....................................................................................................
        while (P.length < arity) {
          P.splice(P.length - 1, 0, void 0);
        }
        //.....................................................................................................
        /* TAINT use Q = P.pop(), fn.call @, P..., Q */
        Q = P.at(-1);
        for (idx = j = 0, len1 = pos_names.length; j < len1; idx = ++j) {
          name = pos_names[idx];
          pos_value = P[idx];
          nme_value = Q[name];
          switch (true) {
            case (pos_value === void 0) && (nme_value === void 0):
              null;
              break;
            case (pos_value === void 0) && (nme_value !== void 0):
              P[idx] = nme_value;
              break;
            case (pos_value !== void 0) && (nme_value === void 0):
              Q[name] = pos_value;
              break;
            default:
              /* TAINT treat acc to value mismatch resolution strategy */
              // unless pos_value is nme_value                                   # strategy: 'error'
              //   throw new Value_mismatch_error "Ω__68"
              // P[ idx  ] = nme_value                                           # strategy: 'named'
              Q[name] = pos_value; // strategy: 'positional'
          }
        }
        //.....................................................................................................
        return fn.call(this, ...P);
      };
    };
    //=========================================================================================================
    fn = nfa(function(a, b, c, cfg) {
      return {a, b, c, cfg};
    });
    // fn = ( a, b, c, cfg ) -> { $A: [ arguments..., ], a, b, c, cfg, }
    // help 'Ω__69', get_fn_args fn
    // if signature?
    //.........................................................................................................
    echo();
    info('Ω__70', fn(1));
    info('Ω__71', fn(1, 2));
    info('Ω__72', fn(1, 2, 3));
    info('Ω__73', (function() {
      try {
        return fn(1, 2, 3, 4);
      } catch (error) {
        e = error;
        return red(reverse(e.message));
      }
    })());
    //.........................................................................................................
    echo();
    info('Ω__74', fn(1, {}));
    info('Ω__75', fn(1, 2, {}));
    info('Ω__76', fn(1, 2, 3, {}));
    info('Ω__77', (function() {
      try {
        return fn(1, 2, 3, 4, {});
      } catch (error) {
        e = error;
        return red(reverse(e.message));
      }
    })());
    //.........................................................................................................
    echo();
    info('Ω__78', fn(1, {
      b: 88
    }));
    info('Ω__79', fn(1, 2, {
      b: 88
    }));
    info('Ω__80', fn(1, 2, 3, {
      b: 88
    }));
    info('Ω__81', (function() {
      try {
        return fn(1, 2, 3, 4, {
          b: 88
        });
      } catch (error) {
        e = error;
        return red(reverse(e.message));
      }
    })());
    //.........................................................................................................
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
      // guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
      // ( new Test guytest_cfg ).test @cleartype_tasks
      // # ( new Test guytest_cfg ).test @cleartype_tasks.builtins
      // demo_generalized_signature()
      // demo_get_parameter_names()
      return demo_nfa();
    })();
  }

  // demo_call_styles()
// ```f = ( a, b, ...P, cfg ) => {}```

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tZ2VuZXJhbGl6ZWQtZnVuY3Rpb24tc2lnbmF0dXJlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsZ0JBQUEsRUFBQSwwQkFBQSxFQUFBLHdCQUFBLEVBQUEsUUFBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQTtJQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsdUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsQ0FBQSxDQUFFLElBQUYsRUFDRSxJQURGLEVBRUUsR0FGRixFQUdFLE9BSEYsRUFJRSxJQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFD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QUFTLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7Ozs7OzthQU90QyxRQUFBLENBQUE7SUFQc0MsQ0FBQSxJQUF4Qzs7O0VBbmJBOztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdpbnRlcnR5cGUvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xueyBnb2xkXG4gIGJsdWVcbiAgcmVkXG4gIHJldmVyc2VcbiAgYm9sZCAgICAgICAgICAgICAgICAgIH0gPSBHVVkudHJtXG5cbiMjI1xuXG4jIFJlc3RyaWN0aW9uXG5cbkluIG9yZGVyIHRvIGF2b2lkIGhhdmluZyB0byBpbnRlZ3JhdGUgYSBKUyBleHByZXNzaW9uIHBhcnNlciwgd2UgcmVzdHJpY3QgZWxpZ2libGUgZnVuY3Rpb25zIHRvIHRob3NlIHdob3NlXG5zaWduYXR1cmVzIGNvbnNpc3RzIG9mIG5vdGhpbmcgYnV0IGJhcmUgcGFyYW1ldGVyIG5hbWVzLCBwYXJhbWV0ZXIgbmFtZXMgd2l0aCBzcHJlYWQgKHNvYWspIHN5bWJvbCAnLi4uJyxcbmFuZCBwYXJhbWV0ZXIgbmFtZXMgd2l0aCB0aGUgc3ltYm9saWMgZGVmYXVsdCAnb3B0aW9uYWwnIHdoaWNoIG11c3QgYmUgc3BlbGxlZCBvdXQgaW4gdGhvc2Ugc2FtZSBsZXR0ZXJzLlxuXG4jIENGRyBSZXNvbHV0aW9uIFN0cmF0ZWdpZXNcblxuKiBkZW1hbmQgZml4ZWQgbnVtYmVyIHBvc2l0aW9uYWxcbiogZGVtYW5kIGxhc3Qgb25lIG5hbWVkXG4qIHNpZ25hdHVyZSBoYXMgKnAqIOKIiCDihJXigoAgcG9zaXRpb25hbCBwYXJhbWV0ZXJzIChuYW1lZCBpbiBzaWduYXR1cmUpXG4qIHNpZ25hdHVyZSBoYXMgKnEqIOKIiCBbIDAsIDEgXSBQT0RzIGZvciBuYW1lZCBwYXJhbWV0ZXJzIChpLmUuIGhhcyBvbmUgb3Igbm9uZSlcbiogc2lnbmF0dXJlIGhhcyAqcCogKyAqcSogPSAqYiog4oiIIOKEleKCgCBwYXJhbWV0ZXJzXG4qIHNpZ25hdHVyZSBoYXMgKnMqIOKIiCBbIDAsIDEgXSBzcGxhdHMgKGkuZS4gaGFzIG9uZSBvciBub25lKVxuKiBmdW5jdGlvbiBjYWxsIGhhcyAqYSog4oiIIOKEleKCgCBhcmd1bWVudHNcbiAgKiBwcmUtY2hlY2sgc3RyYXRlZ2llczpcbiAgICAqICoqUENTMSoqOiByZWplY3QgaWYgKmIqIOKJoCAqcCpcbiAgICAqICoqUENTMioqOiByZWplY3QgaWYgKmIqID4gKnAqIChOb3RlOiBjYW4vd2lsbCBub3QgYXBwbHkgaWYgYW55IHBhcmFtZXRlciBpcyBkZWNsYXJlZCBhcyBhIHJlc3QgKG9yXG4gICAgICBzb2FrKSBwYXJhbWV0ZXIgKGkuZS4gd2l0aCBgLi4uYCk7IGluIHRoYXQgY2FzZSwgYXNzdW1lICpiKiA9ICpwKilcbiogcmVjb2duaXRpb24gb2YgQ0ZHOlxuICAqIGFsbCBzdHJhdGVnaWVzIC8gaW52YXJpYW50czpcbiAgICAqIENGRyBtYXkgb25seSBiZSBsYXN0IHBhcmFtZXRlciBhbmQgdGhlcmVmb3JlIGxhc3QgYXJndW1lbnRcbiAgICAqIENGRyBtdXN0IGJlIGEgUE9EXG4gICogQ0ZHIHJlY29nbml0aW9uIHN0cmF0ZWdpZXM6XG4gICAgKiAqKkNSUzEqKiBDRkcgbXVzdCBiZSBhdCBwb3NpdGlvbiBvZiBDRkcgaW4gcGFyYW1ldGVycywgYXJndW1lbnRzWyBiIC0gMSBdXG4gICAgKiAqKkNSUzIqKiBDRkcgbXVzdCBiZSBhdCBsYXN0IHBvc2l0aW9uIG9mIGFyZ3VtZW50cywgYXJndW1lbnRzWyBhIC0gMSBdXG5HaXZlbiBhIGZ1bmN0aW9uIGBmID0gKCBhLCBiLCBjLCBjZmcgKSAtPmAgdGhhdCBpcyBjYWxsZWQgYXMgZm9sbG93czpcblxuKiAqKnAwX24wKio6IGYoKVxuKiAqKnAxX24wKio6IGYgMVxuKiAqKnAyX24wKio6IGYgMSwgMlxuKiAqKnAzX24wKio6IGYgMSwgMiwgM1xuKiAqKnAwX24xKio6IGYgICAgICAgICAgeyBhOiA0LCBkOiA1LCB9XG4qICoqcDFfbjEqKjogZiAxLCAgICAgICB7IGE6IDQsIGQ6IDUsIH1cbiogKipwMl9uMSoqOiBmIDEsIDIsICAgIHsgYTogNCwgZDogNSwgfVxuKiAqKnAzX24xKio6IGYgMSwgMiwgMywgeyBhOiA0LCBkOiA1LCB9XG4qICoqcDRfbjAqKjogZiAxLCAyLCAzLCA0XG5cbiogKipOTioqOiBkZW1hbmQgNCBhcmd1bWVudHMsIGxhc3Qgb25lIG11c3QgYmUgYSBQT0RcbiAgKiAqKnAwX24wKio6IGYoKSAgICAgICAgICAgICAgICAgICAgICAgICAgIyBFUlJPUlxuICAqICoqcDFfbjAqKjogZiAxICAgICAgICAgICAgICAgICAgICAgICAgICAjIEVSUk9SXG4gICogKipwMl9uMCoqOiBmIDEsIDIgICAgICAgICAgICAgICAgICAgICAgICMgRVJST1JcbiAgKiAqKnAzX24wKio6IGYgMSwgMiwgMyAgICAgICAgICAgICAgICAgICAgIyBFUlJPUlxuICAqICoqcDBfbjEqKjogZiAgICAgICAgICB7IGE6IDQsIGQ6IDUsIH0gICAjIEVSUk9SXG4gICogKipwMV9uMSoqOiBmIDEsICAgICAgIHsgYTogNCwgZDogNSwgfSAgICMgRVJST1JcbiAgKiAqKnAyX24xKio6IGYgMSwgMiwgICAgeyBhOiA0LCBkOiA1LCB9ICAgIyBFUlJPUlxuICAqICoqcDNfbjEqKjogZiAxLCAyLCAzLCB7IGE6IDQsIGQ6IDUsIH0gICAjIGRlcGVuZHMgb24gTmFtZSBDbGFzaCBSZXNvbHV0aW9uIFN0cmF0ZWd5XG4gICogKipwNF9uMCoqOiBmIDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICMgRVJST1JcblxuKiAqKk5OKio6IGFzc2lnbiBwb3NpdGlvbmFsIGFyZ3VtZW50cyB0aGF0IGFwcGVhciBpbiBzaWduYXR1cmUsIGxhc3QgbXVzdCBiZSBhIFBPRFxuICAqICoqcDBfbjAqKjogZigpICAgICAgICAgICAgICAgICAgICAgICAgICAjIEVSUk9SXG4gICogKipwMV9uMCoqOiBmIDEgICAgICAgICAgICAgICAgICAgICAgICAgICMgRVJST1JcbiAgKiAqKnAyX24wKio6IGYgMSwgMiAgICAgICAgICAgICAgICAgICAgICAgIyBFUlJPUlxuICAqICoqcDNfbjAqKjogZiAxLCAyLCAzICAgICAgICAgICAgICAgICAgICAjIEVSUk9SXG4gICogKipwMF9uMSoqOiBmICAgICAgICAgIHsgYTogNCwgZDogNSwgfSAgICMgeyBhOiA0LCBkOiA1LCB9XG4gICogKipwMV9uMSoqOiBmIDEsICAgICAgIHsgYTogNCwgZDogNSwgfSAgICMgeyAgICAgICBkOiA1LCB9LCBgYWAgZGVwZW5kcyBvbiBOYW1lIENsYXNoIFJlc29sdXRpb24gU3RyYXRlZ3lcbiAgKiAqKnAyX24xKio6IGYgMSwgMiwgICAgeyBhOiA0LCBkOiA1LCB9ICAgIyB7ICAgICAgIGQ6IDUsIH0sIGBhYCBkZXBlbmRzIG9uIE5hbWUgQ2xhc2ggUmVzb2x1dGlvbiBTdHJhdGVneVxuICAqICoqcDNfbjEqKjogZiAxLCAyLCAzLCB7IGE6IDQsIGQ6IDUsIH0gICAjIHsgICAgICAgZDogNSwgfSwgYGFgIGRlcGVuZHMgb24gTmFtZSBDbGFzaCBSZXNvbHV0aW9uIFN0cmF0ZWd5XG4gICogKipwNF9uMCoqOiBmIDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICMgRVJST1JcblxuKiAqKk5OKio6IGFzc2lnbiBwb3NpdGlvbmFsIGFyZ3VtZW50cyB0aGF0IGFwcGVhciBpbiBzaWduYXR1cmUsIGxhc3QgbWF5IGJlIGEgUE9EICh1ZGY6IGB1bmRlZmluZWRgKVxuICAqICoqcDBfbjAqKjogZigpICAgICAgICAgICAgICAgICAgICAgICAgICAjIHsgYTogNCwgYjogdWRmLCBjOiB1ZGYsIH1cbiAgKiAqKnAxX24wKio6IGYgMSAgICAgICAgICAgICAgICAgICAgICAgICAgIyB7IGE6IDQsIGI6IHVkZiwgYzogdWRmLCB9XG4gICogKipwMl9uMCoqOiBmIDEsIDIgICAgICAgICAgICAgICAgICAgICAgICMgeyBhOiA0LCBiOiB1ZGYsIGM6IHVkZiwgfVxuICAqICoqcDNfbjAqKjogZiAxLCAyLCAzICAgICAgICAgICAgICAgICAgICAjIHsgYTogNCwgYjogdWRmLCBjOiB1ZGYsIH1cbiAgKiAqKnAwX24xKio6IGYgICAgICAgICAgeyBhOiA0LCBkOiA1LCB9ICAgIyB7IGE6IDQsIGI6IHVkZiwgYzogdWRmLCBkOiA1LCB9XG4gICogKipwMV9uMSoqOiBmIDEsICAgICAgIHsgYTogNCwgZDogNSwgfSAgICMgeyAgICAgICBiOiB1ZGYsIGM6IHVkZiwgZDogNSwgfSwgYGFgIGRlcGVuZHMgb24gTmFtZSBDbGFzaCBSZXNvbHV0aW9uIFN0cmF0ZWd5XG4gICogKipwMl9uMSoqOiBmIDEsIDIsICAgIHsgYTogNCwgZDogNSwgfSAgICMgeyAgICAgICBiOiB1ZGYsIGM6IHVkZiwgZDogNSwgfSwgYGFgIGRlcGVuZHMgb24gTmFtZSBDbGFzaCBSZXNvbHV0aW9uIFN0cmF0ZWd5XG4gICogKipwM19uMSoqOiBmIDEsIDIsIDMsIHsgYTogNCwgZDogNSwgfSAgICMgeyAgICAgICBiOiB1ZGYsIGM6IHVkZiwgZDogNSwgfSwgYGFgIGRlcGVuZHMgb24gTmFtZSBDbGFzaCBSZXNvbHV0aW9uIFN0cmF0ZWd5XG4gICogKipwNF9uMCoqOiBmIDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICMgRVJST1JcblxuIyMjXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19nZW5lcmFsaXplZF9zaWduYXR1cmUgPSAtPlxuICBnZXRfZm5fYXJncyA9ICggcmVxdWlyZSAnZm4tYXJncycgKS5kZWZhdWx0XG4gICMgZnVuY3Rpb25Bcmd1bWVudHNcbiAgZG8gPT5cbiAgICBkICAgICAgPSBbXVxuICAgIGRbIDAgXSA9IDdcbiAgICBkLmsgICAgPSA2XG4gICAgZFsgMSBdID0gNVxuICAgIHVyZ2UgJ86pX19fMScsIE9iamVjdC5rZXlzIGQgICAgICAgICAgICAgICAgICMgWyAnMCcsICcxJywgJ2snIF1cbiAgICB1cmdlICfOqV9fXzInLCBbICggT2JqZWN0LmVudHJpZXMgZCApLi4uLCBdICAjIFsgWyAnMCcsIDcgXSwgWyAnMScsIDUgXSwgWyAnaycsIDYgXSBdXG4gICAgcmV0dXJuIG51bGxcbiAgZG8gPT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHBvZF9wcm90b3R5cGVzICA9IE9iamVjdC5mcmVlemUgWyBudWxsLCAoIE9iamVjdC5nZXRQcm90b3R5cGVPZiB7fSApLCBdXG4gICAgZ25kID1cbiAgICAgIHBvZDogaXNhOiAoIHggKSAtPiB4PyBhbmQgKCBPYmplY3QuZ2V0UHJvdG90eXBlT2YgeCApIGluIHBvZF9wcm90b3R5cGVzXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBnZXRfYXJndW1lbnRzX3Bvc2NmZyA9ICggbmFtZXMsIGFyZ3ZtZW50cywgZmFsbGJhY2sgPSBudWxsICkgLT5cbiAgICAgIGhlbHAoKVxuICAgICAgIyBhcmd2bWVudHMgPSBbIGFyZ3ZtZW50cy4uLiwgXVxuICAgICAgcG9zaXRpb25hbF9uYW1lcyAgICAgID0gbmFtZXNbICAgICAgMCAuLiBuYW1lcy5sZW5ndGggICAgIC0gMiBdXG4gICAgICBuYW1lZF9uYW1lICAgICAgICAgICAgPSAgICAgbmFtZXMuYXQgLTFcbiAgICAgIGluZm8gJ86pX19fMycsIHsgcG9zaXRpb25hbF9uYW1lcywgbmFtZWRfbmFtZSwgcG9zaXRpb25hbF9hcmd2bWVudHMsIG5hbWVkX2FyZ3ZtZW50LCBmYWxsYmFjaywgfVxuICAgICAgUiA9IHt9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGlmIGduZC5wb2QuaXNhIGFyZ3ZtZW50cy5hdCAtMVxuICAgICAgICBwb3NpdGlvbmFsX2FyZ3ZtZW50cyAgPSBhcmd2bWVudHNbICAwIC4uIGFyZ3ZtZW50cy5sZW5ndGggLSAyIF1cbiAgICAgICAgbmFtZWRfYXJndm1lbnQgICAgICAgID0gYXJndm1lbnRzLmF0IC0xXG4gICAgICBlbHNlXG4gICAgICAgIHBvc2l0aW9uYWxfYXJndm1lbnRzICA9IGFyZ3ZtZW50c1sgIC4uICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICBuYW1lZF9hcmd2bWVudCAgICAgICAgPSBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGxhc3RfYXJnX2lkeCA9IHBvc2l0aW9uYWxfYXJndm1lbnRzLmxlbmd0aCAtIDFcbiAgICAgIGZvciBuYW1lLCBpZHggaW4gbmFtZXNcbiAgICAgICAgaWYgaWR4IDw9IGxhc3RfYXJnX2lkeFxuICAgICAgICAgIGhlbHAgJ86pX19fNCcsIG5hbWUsIHJwciBwb3NpdGlvbmFsX2FyZ3ZtZW50c1sgaWR4IF1cbiAgICAgICAgICBSWyBuYW1lIF0gPSBwb3NpdGlvbmFsX2FyZ3ZtZW50c1sgaWR4IF1cbiAgICAgICAgZWxzZVxuICAgICAgICAgIHVyZ2UgJ86pX19fNScsIFwiZmFsbGJhY2sgZm9yIHBvc2l0aW9uYWwgYXJndW1lbnQgQCN7aWR4fSA9ICN7cnByIGFyZ3ZtZW50c1sgaWR4IF19XCJcbiAgICAgICAgICBSWyBuYW1lIF0gPSBmYWxsYmFja1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBpZiBuYW1lZF9hcmd2bWVudD9cbiAgICAgICAgaGVscCAnzqlfX182JywgXCJuYW1lZF9hcmd2bWVudCAje3JwciBuYW1lZF9hcmd2bWVudH1cIlxuICAgICAgICBmb3IgbmFtZSwgdmFsdWUgb2YgbmFtZWRfYXJndm1lbnRcbiAgICAgICAgICBpZiBSZWZsZWN0LmhhcyBSLCBuYW1lXG4gICAgICAgICAgICB3YXJuICfOqV9fXzcnLCBcInJlcGVhdGVkIG5hbWVkIGFyZ3VtZW50IHsgI3tuYW1lfTogI3tycHIgdmFsdWV9LCB9XCJcbiAgICAgICAgICAgICMgYXBwbHkgb25lIG9mIHN0cmF0ZWd5ID0gWyAnZXJyb3InLCAnbmFtZWRfd2lucycsICdwb3NpdGlvbmFsX3dpbnMnLCBdXG4gICAgICAgICAgICBSWyBuYW1lIF0gPSB2YWx1ZVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIFJbIG5hbWUgXSA9IHZhbHVlXG4gICAgICBlbHNlXG4gICAgICAgIHVyZ2UgJ86pX19fOCcsIFwibm8gbmFtZWQgYXJndm1lbnRzXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIFJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGYgPSAoIGEsIGIsIFEgKSAtPlxuICAgICAgIyBjZmcgPSBPYmplY3QuYXNzaWduICggT2JqZWN0LmNyZWF0ZSBudWxsICksIHsgYSwgYiwgfSwgUS4uLlxuICAgICAgY2ZnID0gT2JqZWN0LmFzc2lnbiB7fSwgeyBhLCBiLCB9LCBRLi4uXG4gICAgICAjIGluZm8gJ86pX19fOScsIGZcIiN7R1VZLnRybS5nb2xkIFsgYXJndW1lbnRzLi4uLCBdfTo+MzBjO1wiLCBHVVkudHJtLmJsdWUgeyBhLCBiLCBjZmcsIH1cbiAgICAgIGluZm8gJ86pX18xMCcsICggR1VZLnRybS5nb2xkIFsgYXJndW1lbnRzLi4uLCBdICksIEdVWS50cm0uYmx1ZSB7IGEsIGIsIGNmZywgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGVidWcgJ86pX18xMScsICggZi50b1N0cmluZygpLnNwbGl0ICdcXG4nIClbIDAgXS5yZXBsYWNlIC9eLipmdW5jdGlvblxcKFxccyovLCAnJ1xuICAgICMgZGVidWcgJ86pX18xMicsICggKCAoIGEsIGIgPSAnKScsIGMgKSAtPiApLnRvU3RyaW5nKCkuc3BsaXQgJ1xcbicgKVsgMCBdLnJlcGxhY2UgL14uKmZ1bmN0aW9uXFwoXFxzKi8sICcnXG4gICAgIyBkZWJ1ZyAnzqlfXzEzJywgKCAoICggYSwgYiAjIyMgPSApICMjIywgYywgUS4uLiApID0+ICkudG9TdHJpbmcoKS5zcGxpdCAnXFxuJyApWyAwIF0ucmVwbGFjZSAvXi4qZnVuY3Rpb25cXChcXHMqLywgJydcbiAgICB1bnNldCA9IFN5bWJvbCAndW5zZXQnXG4gICAgaW5mbyAnzqlfXzE0JywgZ2V0X2FyZ3VtZW50c19wb3NjZmcgWyAnYScsICdiJywgJ2NmZycsIF0sIFsgMSwgICAgICAgICAgICAgICAgICAgIF0sIHVuc2V0XG4gICAgaW5mbyAnzqlfXzE1JywgZ2V0X2FyZ3VtZW50c19wb3NjZmcgWyAnYScsICdiJywgJ2NmZycsIF0sIFsgMSwgazogJ0snLCAgICAgICAgICAgIF0sIHVuc2V0XG4gICAgaW5mbyAnzqlfXzE2JywgZ2V0X2FyZ3VtZW50c19wb3NjZmcgWyAnYScsICdiJywgJ2NmZycsIF0sIFsgMSwgMiwgazogJ0snLCAgICAgICAgIF0sIHVuc2V0XG4gICAgaW5mbyAnzqlfXzE3JywgZ2V0X2FyZ3VtZW50c19wb3NjZmcgWyAnYScsICdiJywgJ2NmZycsIF0sIFsgMSwgMiwgMywgazogJ0snLCAgICAgIF0sIHVuc2V0XG4gICAgaW5mbyAnzqlfXzE4JywgZ2V0X2FyZ3VtZW50c19wb3NjZmcgWyAnYScsICdiJywgJ2NmZycsIF0sIFsgMSwgMiwgazogJ0snLCBhOiAnQScsIF0sIHVuc2V0XG4gICAgIyBmIDFcbiAgICAjIGYgMSwgMiwgM1xuICAgICMgZiAxLCAyLCBrOiAnSydcbiAgICAjIGYgMSwgMiwgazogJ0snLCA5LCBtOiAnTSdcbiAgICByZXR1cm4gbnVsbFxuICByZXR1cm4gbnVsbFxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmRlbW9fY2FsbF9zdHlsZXMgPSAtPlxuICBmID0gKCBmaXJzdCwgc2Vjb25kLCBhbHNvICkgLT5cbiAgICAjIGluZm8oKVxuICAgIGluZm8gJ86pX18xOScsIGFyZ3VtZW50cy5sZW5ndGgsICggZ29sZCBbIGFyZ3VtZW50cy4uLiwgXSApLCAoIGJsdWUgeyBmaXJzdCwgc2Vjb25kLCBhbHNvLCB9IClcbiAgZiAnb25lJ1xuICBmICdvbmUnLCB7IHNlY29uZDogJ3R3bycsIGFsc286ICd0aHJlZScsIH1cbiAgZiAnb25lJywgJ3R3bydcbiAgZiAnb25lJywgJ3R3bycsIHsgYWxzbzogJ3RocmVlJywgfVxuICByZXR1cm4gbnVsbFxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmRlbW9fZ2V0X3BhcmFtZXRlcl9uYW1lcyA9IC0+XG4gIGdldF9mbl9hcmdzID0gKCByZXF1aXJlICdmbi1hcmdzJyApLmRlZmF1bHRcbiAgZ2V0X3NpZ25hdHVyZSA9ICggZiApIC0+XG4gICAgIyMjIHRoeCB0byBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2lkZW50aWZpZXItcmVnZXggIyMjXG4gICAganNpZF9yZSAgICAgICAgICAgICAgPSAvLy8gXiBbICQgXyBcXHB7SURfU3RhcnR9IF0gWyAkIF8gXFx1MjAwQyBcXHUyMDBEIFxccHtJRF9Db250aW51ZX0gXSogJCAvLy9zdlxuICAgIGRlYnVnKClcbiAgICBib2R5ICAgID0gZi50b1N0cmluZygpXG4gICAga2VybmVsICA9IGJvZHkucmVwbGFjZSAvLy8gXiBbXiBcXCggXSogXFwoIFxccyogKCBbXiBcXCkgXSogKSBcXHMqIFxcKSAuKiAkIC8vL3N2LCAnJDEnXG4gICAgcGFydHMgICA9IGtlcm5lbC5zcGxpdCAvLy8gLCBcXHMqIC8vL3N2XG4gICAgIyB1cmdlICfOqV9fMjAnLCBycHIgYm9keVxuICAgICMgdXJnZSAnzqlfXzIxJywgcnByIGtlcm5lbFxuICAgICMgdXJnZSAnzqlfXzIyJywgcnByIHBhcnRzXG4gICAgJG5hbWVzICA9IFtdXG4gICAgIyBSICAgICAgID0geyAkbmFtZXMsIH1cbiAgICBSICAgICAgID0ge31cbiAgICBmb3IgcGFydCBpbiBwYXJ0c1xuICAgICAgc3dpdGNoIHRydWVcbiAgICAgICAgd2hlbiAoIG1hdGNoID0gcGFydC5tYXRjaCAvLy8gXiBbLl17M30gXFxzKiAoPzxuYW1lPiBcXFMrICkgXFxzKiAkIC8vL3N2ICk/XG4gICAgICAgICAgbmFtZSAgICAgICAgICA9IG1hdGNoLmdyb3Vwcy5uYW1lXG4gICAgICAgICAgZGlzcG9zaXRpb24gICA9ICdzb2FrJ1xuICAgICAgICB3aGVuICggbWF0Y2ggPSBwYXJ0Lm1hdGNoIC8vLyBeICg/PG5hbWU+IFxcUysgKSBcXHMqID0gXFxzKiBvcHRpb25hbCAkLy8vc3YgKT9cbiAgICAgICAgICBuYW1lICAgICAgICAgID0gbWF0Y2guZ3JvdXBzLm5hbWVcbiAgICAgICAgICBkaXNwb3NpdGlvbiAgID0gJ29wdGlvbmFsJ1xuICAgICAgICBlbHNlXG4gICAgICAgICAgdW5sZXNzICggcGFydC5tYXRjaCBqc2lkX3JlICk/XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fMjMgbm90IGNvbXBsaWFudDogI3tycHIgcGFydH0gaW4gI3tycHIga2VybmVsfVwiXG4gICAgICAgICAgbmFtZSAgICAgICAgICA9IHBhcnRcbiAgICAgICAgICBkaXNwb3NpdGlvbiAgID0gJ2JhcmUnXG4gICAgICAjIGluZm8gJ86pX18yNCcsICggcnByIHBhcnQgKSwgeyBuYW1lLCBkaXNwb3NpdGlvbiwgfVxuICAgICAgUlsgbmFtZSBdID0gZGlzcG9zaXRpb25cbiAgICAgICMgUlsgbmFtZSBdID0geyBuYW1lLCBkaXNwb3NpdGlvbiwgfVxuICAgICAgJG5hbWVzLnB1c2ggbmFtZVxuICAgIHJldHVybiBSXG4gIG9wdGlvbmFsID0gU3ltYm9sICdvcHRpb25hbCdcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBkbyA9PlxuICAgIGBgYFxuICAgIGNvbnN0IGYgPSBmdW5jdGlvbiAoXG4gICAgICBhLFxuICAgICAgYiA9ICcsIGUgPSA3LCcsXG4gICAgICAvKiBkID0gOSwgKi9cbiAgICAgIGMgPSA4LFxuICAgICAgLi4uUFxuICAgICAgKSB7fVxuICAgIGBgYFxuICAgIGRlYnVnICfOqV9fMjUnLCB0cnkgZ2V0X3NpZ25hdHVyZSBmIGNhdGNoIGUgdGhlbiAocmVkIHJldmVyc2UgZS5tZXNzYWdlIClcbiAgICAjIGRlYnVnICfOqV9fMjYnLCBnZXRfZm5fYXJncyBmXG4gICAgcmV0dXJuIG51bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBkbyA9PlxuICAgIGYgPSAoIGEsIGIgPSA0ICogKCBzcXJ0IDggKSwgYyA9ICggZm9vIGJhciApICkgLT5cbiAgICBkZWJ1ZyAnzqlfXzI3JywgdHJ5IGdldF9zaWduYXR1cmUgZiBjYXRjaCBlIHRoZW4gKHJlZCByZXZlcnNlIGUubWVzc2FnZSApXG4gICAgIyBkZWJ1ZyAnzqlfXzI4JywgZ2V0X2ZuX2FyZ3MgZlxuICAgIHJldHVybiBudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZG8gPT5cbiAgICBmID0gKCBhLCBiLCBjICkgLT4geyAkQTogWyBhcmd1bWVudHMuLi4sIF0sIGEsIGIsIGMsIH1cbiAgICBoZWxwICfOqV9fMjknLCB0cnkgc2lnbmF0dXJlID0gZ2V0X3NpZ25hdHVyZSBmIGNhdGNoIGUgdGhlbiAocmVkIHJldmVyc2UgZS5tZXNzYWdlIClcbiAgICAjIGhlbHAgJ86pX18zMCcsIGdldF9mbl9hcmdzIGZcbiAgICBpZiBzaWduYXR1cmU/XG4gICAgICBpbmZvICfOqV9fMzEnLCBmIDFcbiAgICAgIGluZm8gJ86pX18zMicsIGYgMSwgMlxuICAgICAgaW5mbyAnzqlfXzMzJywgZiAxLCAyLCAzXG4gICAgcmV0dXJuIG51bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBkbyA9PlxuICAgIGYgPSAoIGEsIGIsIGMgPSBvcHRpb25hbCApIC0+IHsgJEE6IFsgYXJndW1lbnRzLi4uLCBdLCBhLCBiLCBjLCB9XG4gICAgaGVscCAnzqlfXzM0JywgdHJ5IHNpZ25hdHVyZSA9IGdldF9zaWduYXR1cmUgZiBjYXRjaCBlIHRoZW4gKHJlZCByZXZlcnNlIGUubWVzc2FnZSApXG4gICAgIyBoZWxwICfOqV9fMzUnLCBnZXRfZm5fYXJncyBmXG4gICAgaWYgc2lnbmF0dXJlP1xuICAgICAgaW5mbyAnzqlfXzM2JywgZiAxXG4gICAgICBpbmZvICfOqV9fMzcnLCBmIDEsIDJcbiAgICAgIGluZm8gJ86pX18zOCcsIGYgMSwgMiwgM1xuICAgIHJldHVybiBudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZG8gPT5cbiAgICBmID0gKCBhLCBiID0gb3B0aW9uYWwsIGMgKSAtPiB7ICRBOiBbIGFyZ3VtZW50cy4uLiwgXSwgYSwgYiwgYywgfVxuICAgIGhlbHAgJ86pX18zOScsIHRyeSBzaWduYXR1cmUgPSBnZXRfc2lnbmF0dXJlIGYgY2F0Y2ggZSB0aGVuIChyZWQgcmV2ZXJzZSBlLm1lc3NhZ2UgKVxuICAgICMgaGVscCAnzqlfXzQwJywgZ2V0X2ZuX2FyZ3MgZlxuICAgIGlmIHNpZ25hdHVyZT9cbiAgICAgIGluZm8gJ86pX180MScsIGYgMVxuICAgICAgaW5mbyAnzqlfXzQyJywgZiAxLCAyXG4gICAgICBpbmZvICfOqV9fNDMnLCBmIDEsIDIsIDNcbiAgICByZXR1cm4gbnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGRvID0+XG4gICAgZiA9ICggYSwgYiA9IG9wdGlvbmFsLCBjID0gb3B0aW9uYWwgKSAtPiB7ICRBOiBbIGFyZ3VtZW50cy4uLiwgXSwgYSwgYiwgYywgfVxuICAgIGhlbHAgJ86pX180NCcsIHRyeSBzaWduYXR1cmUgPSBnZXRfc2lnbmF0dXJlIGYgY2F0Y2ggZSB0aGVuIChyZWQgcmV2ZXJzZSBlLm1lc3NhZ2UgKVxuICAgICMgaGVscCAnzqlfXzQ1JywgZ2V0X2ZuX2FyZ3MgZlxuICAgIGlmIHNpZ25hdHVyZT9cbiAgICAgIGluZm8gJ86pX180NicsIGYgMVxuICAgICAgaW5mbyAnzqlfXzQ3JywgZiAxLCAyXG4gICAgICBpbmZvICfOqV9fNDgnLCBmIDEsIDIsIDNcbiAgICByZXR1cm4gbnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGRvID0+XG4gICAgZiA9ICggYSwgYj1vcHRpb25hbCwgYy4uLiApIC0+IHsgJEE6IFsgYXJndW1lbnRzLi4uLCBdLCBhLCBiLCBjLCB9XG4gICAgaGVscCAnzqlfXzQ5JywgdHJ5IHNpZ25hdHVyZSA9IGdldF9zaWduYXR1cmUgZiBjYXRjaCBlIHRoZW4gKHJlZCByZXZlcnNlIGUubWVzc2FnZSApXG4gICAgIyBoZWxwICfOqV9fNTAnLCBnZXRfZm5fYXJncyBmXG4gICAgaWYgc2lnbmF0dXJlP1xuICAgICAgaW5mbyAnzqlfXzUxJywgZiAxXG4gICAgICBpbmZvICfOqV9fNTInLCBmIDEsIDJcbiAgICAgIGluZm8gJ86pX181MycsIGYgMSwgMiwgM1xuICAgIHJldHVybiBudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZG8gPT5cbiAgICBvcHRpb25hbGwgPSAwXG4gICAgZiA9ICggYSwgYiA9IG9wdGlvbmFsbCwgYy4uLiApIC0+IHsgJEE6IFsgYXJndW1lbnRzLi4uLCBdLCBhLCBiLCBjLCB9XG4gICAgaGVscCAnzqlfXzU0JywgdHJ5IHNpZ25hdHVyZSA9IGdldF9zaWduYXR1cmUgZiBjYXRjaCBlIHRoZW4gKHJlZCByZXZlcnNlIGUubWVzc2FnZSApXG4gICAgIyBoZWxwICfOqV9fNTUnLCBnZXRfZm5fYXJncyBmXG4gICAgaWYgc2lnbmF0dXJlP1xuICAgICAgaW5mbyAnzqlfXzU2JywgZiAxXG4gICAgICBpbmZvICfOqV9fNTcnLCBmIDEsIDJcbiAgICAgIGluZm8gJ86pX181OCcsIGYgMSwgMiwgM1xuICAgIHJldHVybiBudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcmV0dXJuIG51bGxcblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5kZW1vX25mYSA9IC0+XG4gIG9wdGlvbmFsICAgICAgICA9IFN5bWJvbCAnb3B0aW9uYWwnXG4gIHBvZF9wcm90b3R5cGVzICA9IE9iamVjdC5mcmVlemUgWyBudWxsLCAoIE9iamVjdC5nZXRQcm90b3R5cGVPZiB7fSApLCBdXG4gIGduZCAgICAgICAgICAgICA9XG4gICAgcG9kOiBpc2E6ICggeCApIC0+IHg/IGFuZCAoIE9iamVjdC5nZXRQcm90b3R5cGVPZiB4ICkgaW4gcG9kX3Byb3RvdHlwZXNcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjbGFzcyBBcml0eV9lcnJvciBleHRlbmRzIEVycm9yXG4gIGNsYXNzIE5vdF9pbXBsZW1lbnRlZF9lcnJvciBleHRlbmRzIEVycm9yXG4gIGNsYXNzIFZhbHVlX21pc21hdGNoX2Vycm9yIGV4dGVuZHMgRXJyb3JcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBnZXRfc2lnbmF0dXJlID0gKCBmICkgLT5cbiAgICAjIyMgdGh4IHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvaWRlbnRpZmllci1yZWdleCAjIyNcbiAgICBqc2lkX3JlICAgICAgICAgICAgICA9IC8vLyBeIFsgJCBfIFxccHtJRF9TdGFydH0gXSBbICQgXyBcXHUyMDBDIFxcdTIwMEQgXFxwe0lEX0NvbnRpbnVlfSBdKiAkIC8vL3N2XG4gICAgZGVidWcoKVxuICAgIGJvZHkgICAgPSBmLnRvU3RyaW5nKClcbiAgICBrZXJuZWwgID0gYm9keS5yZXBsYWNlIC8vLyBeIFteIFxcKCBdKiBcXCggXFxzKiAoIFteIFxcKSBdKiApIFxccyogXFwpIC4qICQgLy8vc3YsICckMSdcbiAgICBwYXJ0cyAgID0ga2VybmVsLnNwbGl0IC8vLyAsIFxccyogLy8vc3ZcbiAgICAjIHVyZ2UgJ86pX181OScsIHJwciBib2R5XG4gICAgIyB1cmdlICfOqV9fNjAnLCBycHIga2VybmVsXG4gICAgIyB1cmdlICfOqV9fNjEnLCBycHIgcGFydHNcbiAgICAkbmFtZXMgID0gW11cbiAgICAjIFIgICAgICAgPSB7ICRuYW1lcywgfVxuICAgIFIgICAgICAgPSB7fVxuICAgIGZvciBwYXJ0IGluIHBhcnRzXG4gICAgICBzd2l0Y2ggdHJ1ZVxuICAgICAgICB3aGVuICggbWF0Y2ggPSBwYXJ0Lm1hdGNoIC8vLyBeIFsuXXszfSBcXHMqICg/PG5hbWU+IFxcUysgKSBcXHMqICQgLy8vc3YgKT9cbiAgICAgICAgICBuYW1lICAgICAgICAgID0gbWF0Y2guZ3JvdXBzLm5hbWVcbiAgICAgICAgICBkaXNwb3NpdGlvbiAgID0gJ3NvYWsnXG4gICAgICAgIHdoZW4gKCBtYXRjaCA9IHBhcnQubWF0Y2ggLy8vIF4gKD88bmFtZT4gXFxTKyApIFxccyogPSBcXHMqIG9wdGlvbmFsICQvLy9zdiApP1xuICAgICAgICAgIG5hbWUgICAgICAgICAgPSBtYXRjaC5ncm91cHMubmFtZVxuICAgICAgICAgIGRpc3Bvc2l0aW9uICAgPSAnb3B0aW9uYWwnXG4gICAgICAgIGVsc2VcbiAgICAgICAgICB1bmxlc3MgKCBwYXJ0Lm1hdGNoIGpzaWRfcmUgKT9cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pX182MiBub3QgY29tcGxpYW50OiAje3JwciBwYXJ0fSBpbiAje3JwciBrZXJuZWx9XCJcbiAgICAgICAgICBuYW1lICAgICAgICAgID0gcGFydFxuICAgICAgICAgIGRpc3Bvc2l0aW9uICAgPSAnYmFyZSdcbiAgICAgICMgaW5mbyAnzqlfXzYzJywgKCBycHIgcGFydCApLCB7IG5hbWUsIGRpc3Bvc2l0aW9uLCB9XG4gICAgICBSWyBuYW1lIF0gPSBkaXNwb3NpdGlvblxuICAgICAgIyBSWyBuYW1lIF0gPSB7IG5hbWUsIGRpc3Bvc2l0aW9uLCB9XG4gICAgICAkbmFtZXMucHVzaCBuYW1lXG4gICAgcmV0dXJuIFJcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAjIyMgTm9ybWFsaXplIEZ1bmN0aW9uIEFyZ3VtZW50c1xuXG4gICMjIFRvIERvXG5cbiAgKiAqKmBb4oCUXWAqKiBpbXBsZW1lbnQgY2xhc3MgYFRlbXBsYXRlYCwgYXJndW1lbnQgYHRlbXBsYXRlYCBhcyBgbmZhIHsgdGVtcGxhdGUsIH0sIGZuYFxuICAqICoqYFvigJRdYCoqIGltcGxlbWVudCB2YWxpZGF0aW9uIGFzIGBuZmEgeyBpc2EsIH0sIGZuYFxuICAqICoqYFvigJRdYCoqIGludGVncmF0ZSBDbGVhclR5cGUgYXMgYG5mYSB0eXBlLCBmbmBcblxuICAjIyNcbiAgbmZhID0gKCBmbiApIC0+XG4gICAgc2lnbmF0dXJlICAgICAgICAgPSBnZXRfc2lnbmF0dXJlIGZuXG4gICAgbmFtZXMgICAgICAgICAgICAgPSBPYmplY3Qua2V5cyBzaWduYXR1cmVcbiAgICBwb3NfbmFtZXMgICAgICAgICA9IG5hbWVzWyAuLiBuYW1lcy5sZW5ndGggLSAyIF1cbiAgICBhcml0eSAgICAgICAgICAgICA9IG5hbWVzLmxlbmd0aFxuICAgIGRpc3Bvc2l0aW9ucyAgICAgID0gKCBzaWduYXR1cmVbIG5hbWUgXSBmb3IgbmFtZSBpbiBuYW1lcyApXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgZGlzcG9zaXRpb24sIGlkeCBpbiBkaXNwb3NpdGlvbnNcbiAgICAgIGNvbnRpbnVlIGlmIGRpc3Bvc2l0aW9uIGlzICdiYXJlJ1xuICAgICAgdGhyb3cgbmV3IE5vdF9pbXBsZW1lbnRlZF9lcnJvciBcIs6pX182NSBlbmNvdW50ZXJlZCB1bmltcGxlbWVudGVkIGRpc3Bvc2l0aW9uICN7cnByIGRpc3Bvc2l0aW9ufSBmb3IgcGFyYW1ldGVyICNuYW1lc1sgaWR4IF1cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuICggUC4uLiApIC0+XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGlmIFAubGVuZ3RoID4gYXJpdHlcbiAgICAgICAgdGhyb3cgbmV3IEFyaXR5X2Vycm9yIFwizqlfXzY2IGV4cGVjdGVkIHVwIHRvICN7YXJpdHl9IGFyZ3VtZW50cywgZ290ICN7UC5sZW5ndGh9XCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgdW5sZXNzIGduZC5wb2QuaXNhIFAuYXQgLTFcbiAgICAgICAgaWYgUC5sZW5ndGggPiBhcml0eSAtIDFcbiAgICAgICAgICB0aHJvdyBuZXcgQXJpdHlfZXJyb3IgXCLOqV9fNjcgZXhwZWN0ZWQgdXAgdG8gI3thcml0eSAtIDF9IHBvc2l0aW9uYWwgYXJndW1lbnRzIHBsdXMgb25lIFBPRCwgZ290ICN7UC5sZW5ndGh9IHBvc2l0aW9uYWwgYXJndW1lbnRzXCJcbiAgICAgICAgUC5wdXNoIHt9ICMgT2JqZWN0LmNyZWF0ZSBudWxsXG4gICAgICBlbHNlXG4gICAgICAgICMjIyBOT1RFIGNvcHkgb2JqZWN0IHNvIHdlIGNhbiBtb2RpZnkgaXQgIyMjXG4gICAgICAgICMgUFsgUC5sZW5ndGggLSAxIF0gPSBPYmplY3QuYXNzaWduICggT2JqZWN0LmNyZWF0ZSBudWxsICksIFAuYXQgLTFcbiAgICAgICAgUFsgUC5sZW5ndGggLSAxIF0gPSBPYmplY3QuYXNzaWduIHt9LCBQLmF0IC0xXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHdoaWxlIFAubGVuZ3RoIDwgYXJpdHlcbiAgICAgICAgUC5zcGxpY2UgUC5sZW5ndGggLSAxLCAwLCB1bmRlZmluZWRcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyMjIFRBSU5UIHVzZSBRID0gUC5wb3AoKSwgZm4uY2FsbCBALCBQLi4uLCBRICMjI1xuICAgICAgUSA9IFAuYXQgLTFcbiAgICAgIGZvciBuYW1lLCBpZHggaW4gcG9zX25hbWVzXG4gICAgICAgIHBvc192YWx1ZSA9IFBbIGlkeCAgXVxuICAgICAgICBubWVfdmFsdWUgPSBRWyBuYW1lIF1cbiAgICAgICAgc3dpdGNoIHRydWVcbiAgICAgICAgICB3aGVuICggcG9zX3ZhbHVlIGlzICAgdW5kZWZpbmVkICkgYW5kICggbm1lX3ZhbHVlIGlzICAgdW5kZWZpbmVkICkgdGhlbiBudWxsXG4gICAgICAgICAgd2hlbiAoIHBvc192YWx1ZSBpcyAgIHVuZGVmaW5lZCApIGFuZCAoIG5tZV92YWx1ZSBpc250IHVuZGVmaW5lZCApIHRoZW4gUFsgaWR4ICBdID0gbm1lX3ZhbHVlXG4gICAgICAgICAgd2hlbiAoIHBvc192YWx1ZSBpc250IHVuZGVmaW5lZCApIGFuZCAoIG5tZV92YWx1ZSBpcyAgIHVuZGVmaW5lZCApIHRoZW4gUVsgbmFtZSBdID0gcG9zX3ZhbHVlXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgIyMjIFRBSU5UIHRyZWF0IGFjYyB0byB2YWx1ZSBtaXNtYXRjaCByZXNvbHV0aW9uIHN0cmF0ZWd5ICMjI1xuICAgICAgICAgICAgIyB1bmxlc3MgcG9zX3ZhbHVlIGlzIG5tZV92YWx1ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyBzdHJhdGVneTogJ2Vycm9yJ1xuICAgICAgICAgICAgIyAgIHRocm93IG5ldyBWYWx1ZV9taXNtYXRjaF9lcnJvciBcIs6pX182OFwiXG4gICAgICAgICAgICAjIFBbIGlkeCAgXSA9IG5tZV92YWx1ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIHN0cmF0ZWd5OiAnbmFtZWQnXG4gICAgICAgICAgICBRWyBuYW1lIF0gPSBwb3NfdmFsdWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIHN0cmF0ZWd5OiAncG9zaXRpb25hbCdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIGZuLmNhbGwgQCwgUC4uLlxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGZuID0gbmZhICggYSwgYiwgYywgY2ZnICkgLT4geyBhLCBiLCBjLCBjZmcsIH1cbiAgIyBmbiA9ICggYSwgYiwgYywgY2ZnICkgLT4geyAkQTogWyBhcmd1bWVudHMuLi4sIF0sIGEsIGIsIGMsIGNmZywgfVxuICAjIGhlbHAgJ86pX182OScsIGdldF9mbl9hcmdzIGZuXG4gICMgaWYgc2lnbmF0dXJlP1xuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGVjaG8oKVxuICBpbmZvICfOqV9fNzAnLCBmbiAxXG4gIGluZm8gJ86pX183MScsIGZuIDEsIDJcbiAgaW5mbyAnzqlfXzcyJywgZm4gMSwgMiwgM1xuICBpbmZvICfOqV9fNzMnLCB0cnkgZm4gMSwgMiwgMywgNCBjYXRjaCBlIHRoZW4gcmVkIHJldmVyc2UgZS5tZXNzYWdlXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZWNobygpXG4gIGluZm8gJ86pX183NCcsIGZuIDEsIHt9XG4gIGluZm8gJ86pX183NScsIGZuIDEsIDIsIHt9XG4gIGluZm8gJ86pX183NicsIGZuIDEsIDIsIDMsIHt9XG4gIGluZm8gJ86pX183NycsIHRyeSBmbiAxLCAyLCAzLCA0LCB7fSBjYXRjaCBlIHRoZW4gcmVkIHJldmVyc2UgZS5tZXNzYWdlXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZWNobygpXG4gIGluZm8gJ86pX183OCcsIGZuIDEsIHsgYjogODgsIH1cbiAgaW5mbyAnzqlfXzc5JywgZm4gMSwgMiwgeyBiOiA4OCwgfVxuICBpbmZvICfOqV9fODAnLCBmbiAxLCAyLCAzLCB7IGI6IDg4LCB9XG4gIGluZm8gJ86pX184MScsIHRyeSBmbiAxLCAyLCAzLCA0LCB7IGI6IDg4LCB9IGNhdGNoIGUgdGhlbiByZWQgcmV2ZXJzZSBlLm1lc3NhZ2VcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgIyBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEBjbGVhcnR5cGVfdGFza3NcbiAgIyAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEBjbGVhcnR5cGVfdGFza3MuYnVpbHRpbnNcbiAgIyBkZW1vX2dlbmVyYWxpemVkX3NpZ25hdHVyZSgpXG4gICMgZGVtb19nZXRfcGFyYW1ldGVyX25hbWVzKClcbiAgZGVtb19uZmEoKVxuICAjIGRlbW9fY2FsbF9zdHlsZXMoKVxuICAjIGBgYGYgPSAoIGEsIGIsIC4uLlAsIGNmZyApID0+IHt9YGBgXG5cblxuXG4iXX0=
//# sourceURL=../src/demo-generalized-function-signature.coffee