(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, demo_generalized_signature, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper,
    indexOf = [].indexOf;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  //===========================================================================================================
  demo_generalized_signature = function() {
    (() => {
      var d;
      d = [];
      d[0] = 7;
      d.k = 6;
      d[1] = 5;
      urge('Ω_152', Object.keys(d)); // [ '0', '1', 'k' ]
      urge('Ω_153', [...(Object.entries(d))]); // [ [ '0', 7 ], [ '1', 5 ], [ 'k', 6 ] ]
      return null;
    })();
    (() => {
      var get_arguments, gnd, pod_prototypes;
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
      get_arguments = function(positional, args, fallback = null) {
        var R, i, idx, last_arg_idx, len, name, named_args, value;
        help();
        args = [...args];
        info('Ω_154', {positional, args, fallback});
        R = {};
        //.....................................................................................................
        if (gnd.pod.isa(args.at(-1))) {
          named_args = args.pop();
        } else {
          named_args = null;
        }
        //.....................................................................................................
        last_arg_idx = args.length - 1;
        for (idx = i = 0, len = positional.length; i < len; idx = ++i) {
          name = positional[idx];
          if (idx <= last_arg_idx) {
            help('Ω_155', name, rpr(args[idx]));
            R[name] = args[idx];
          } else {
            urge('Ω_156', `fallback for positional argument @${idx} = ${rpr(args[idx])}`);
            R[name] = fallback;
          }
        }
        //.....................................................................................................
        if (named_args != null) {
          help('Ω_157', `named args ${rpr(named_args)}`);
          for (name in named_args) {
            value = named_args[name];
            if (Reflect.has(R, name)) {
              warn('Ω_158', `repeated named argument { ${name}: ${rpr(value)}, }`);
              // apply one of strategy = [ 'error', 'named_wins', 'positional_wins', ]
              R[name] = value;
            } else {
              R[name] = value;
            }
          }
        } else {
          urge('Ω_159', "no named args");
        }
        //.....................................................................................................
        return R;
      };
      
    const g = function (
      a,
      b,
      c,
      ) {}
    //.......................................................................................................
    ;
      debug('Ω_160', g.toString());
      f = function(a, b, Q) {
        var cfg;
        // cfg = Object.assign ( Object.create null ), { a, b, }, Q...
        cfg = Object.assign({}, {a, b}, ...Q);
        // info 'Ω_161', f"#{GUY.trm.gold [ arguments..., ]}:>30c;", GUY.trm.blue { a, b, cfg, }
        return info('Ω_162', GUY.trm.gold([...arguments]), GUY.trm.blue({a, b, cfg}));
      };
      //.......................................................................................................
      debug('Ω_163', (f.toString().split('\n'))[0].replace(/^.*function\(\s*/, ''));
      // debug 'Ω_164', ( ( ( a, b = ')', c ) -> ).toString().split '\n' )[ 0 ].replace /^.*function\(\s*/, ''
      // debug 'Ω_165', ( ( ( a, b ### = ) ###, c, Q... ) => ).toString().split '\n' )[ 0 ].replace /^.*function\(\s*/, ''
      info('Ω_166', get_arguments(['a', 'b'], [1]));
      info('Ω_167', get_arguments(['a', 'b'], [
        1,
        {
          k: 'K'
        }
      ]));
      info('Ω_168', get_arguments(['a', 'b'], [
        1,
        2,
        {
          k: 'K'
        }
      ]));
      info('Ω_169', get_arguments(['a', 'b'], [
        1,
        2,
        3,
        {
          k: 'K'
        }
      ]));
      info('Ω_170', get_arguments(['a', 'b'], [
        1,
        2,
        {
          k: 'K',
          a: 'A'
        }
      ]));
      // f 1
      // f 1, 2, 3
      // f 1, 2, k: 'K'
      // f 1, 2, k: 'K', 9, m: 'M'
      return null;
    })();
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
      // guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
      // ( new Test guytest_cfg ).test @cleartype_tasks
      // # ( new Test guytest_cfg ).test @cleartype_tasks.builtins
      return demo_generalized_signature();
    })();
  }

}).call(this);

//# sourceMappingURL=demo-generalized-function-signature.js.map