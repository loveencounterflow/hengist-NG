(async function() {
  'use strict';
  var $isa, GUY, _, alert, bold, debug, echo, help, hide, info, inspect, log, merge_two, merge_v1, merge_with_lodash, nameit, plain, praise, reverse, rpr, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, bold, log} = GUY.trm);

  ({hide} = GUY.props);

  ({
    props: {nameit}
  } = require('../../../apps/webguy'));

  _ = require('lodash');

  ({$isa} = require('../../../apps/intertype'));

  //===========================================================================================================
  merge_with_lodash = function(me, ...others) {
    return _.merge(me, ...others);
  };

  //===========================================================================================================
  merge_v1 = function(me, ...others) {
    return merge_two(me, others[0]);
  };

  merge_two = function(me, other) {
    var descriptor, key, ref;
    ref = Object.getOwnPropertyDescriptors(me);
    for (key in ref) {
      descriptor = ref[key];
      debug('Ω___3', key);
    }
    return me;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      (() => {
        var d, me, other, third;
        me = {
          'a': [
            {
              'b': 2
            },
            {
              'd': 4,
              e: [
                7,
                {
                  x: 'X'
                }
              ]
            }
          ],
          b: 'Bme'
        };
        other = {
          'a': [
            {
              'c': 3
            },
            {
              e: [
                5,
                {
                  y: 'Y'
                }
              ]
            }
          ],
          b: 'B'
        };
        third = {
          'a': [
            3,
            {
              'e': [6]
            }
          ],
          b: 'B3rd'
        };
        echo();
        help('Ω___1', d = merge_with_lodash(me, other));
        echo();
        help('Ω___2', merge_with_lodash(d, third));
        echo();
        debug('Ω___3', merge_with_lodash({}));
        debug('Ω___4', merge_with_lodash(5));
        return null;
      })();
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=demo-merge-recursively.js.map