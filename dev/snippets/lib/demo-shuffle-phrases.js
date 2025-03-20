(async function() {
  'use strict';
  var GUY, debug, echo, factorial, info, inspect, reverse, rpr, shuffle_phrases, types, urge, warn;

  //===========================================================================================================
  GUY = require('guy');

  ({rpr, inspect, echo, reverse} = GUY.trm);

  ({info, warn, urge, debug} = GUY.trm.get_loggers('demo-shuffle-phrases'));

  types = new (require('../../../apps/intertype')).Intertype();

  //-----------------------------------------------------------------------------------------------------------
  shuffle_phrases = function({text, shuffler}) {
    var R, i, idx, last_idx, phrase, phrases, ref;
    types.validate.nonempty.text(text);
    types.validate.function(shuffler != null ? shuffler : shuffler = GUY.rnd.shuffle.bind(GUY.rnd));
    text = text.trim();
    phrases = (function() {
      var ref, results;
      ref = text.matchAll(/[^.;]+(?:[.;]|$)/g);
      results = [];
      for (phrase of ref) {
        results.push(phrase[0]);
      }
      return results;
    })();
    last_idx = phrases.length - 1;
    if (!/[.;]$/.test(phrases[last_idx])) {
      phrases[last_idx] += ';';
    }
    for (idx = i = 0, ref = last_idx; (0 <= ref ? i <= ref : i >= ref); idx = 0 <= ref ? ++i : --i) {
      phrases[idx] = (phrases[idx].startsWith(' ') ? '' : ' ') + phrases[idx];
    }
    R = ((shuffler(phrases)).join('')).trim();
    R = R.replace(/[\s.;]$/, '');
    return R;
  };

  //-----------------------------------------------------------------------------------------------------------
  factorial = function(n) {
    if (n <= 1) {
      return 1;
    } else {
      return (factorial(n - 1)) * n;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var _, candidate, i, known, paragon, text;
      // debug 'Ω___1', factorial i for i in [ 0 ... 100 ]
      text = process.argv[2];
      paragon = shuffle_phrases({
        text,
        shuffler: (function(x) {
          return x;
        })
      });
      echo(GUY.trm.grey(paragon));
      known = new Set();
      for (_ = i = 1; i <= 10; _ = ++i) {
        echo();
        candidate = shuffle_phrases({text});
        if (candidate === paragon) {
          warn('Ω___1', "same");
          continue;
        }
        if (known.has(candidate)) {
          warn('Ω___1', "repetition");
          continue;
        }
        known.add(candidate);
        echo(candidate);
      }
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=demo-shuffle-phrases.js.map