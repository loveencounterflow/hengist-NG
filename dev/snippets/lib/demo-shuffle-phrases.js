(async function() {
  'use strict';
  var GUY, debug, echo, info, inspect, reverse, rpr, shuffle_phrases, types, urge;

  //===========================================================================================================
  GUY = require('guy');

  ({rpr, inspect, echo, reverse} = GUY.trm);

  ({info, urge, debug} = GUY.trm.get_loggers('demo-shuffle-phrases'));

  types = new (require('../../../apps/intertype')).Intertype();

  //-----------------------------------------------------------------------------------------------------------
  shuffle_phrases = function(text) {
    var R, i, idx, last_idx, phrase, phrases, ref;
    types.validate.nonempty.text(text);
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
    R = ((GUY.rnd.shuffle(phrases)).join('')).trim();
    R = R.replace(/[\s.;]$/, '');
    return R;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var _, i;
      for (_ = i = 1; i <= 5; _ = ++i) {
        echo();
        echo('[]', shuffle_phrases(process.argv[2]));
      }
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=demo-shuffle-phrases.js.map