(async function() {
  'use strict';
  var GUY, alert, bold, debug, echo, help, hide, info, inspect, log, nameit, plain, praise, require_cleartype, reverse, rpr, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, bold, log} = GUY.trm);

  ({hide} = GUY.props);

  ({
    props: {nameit}
  } = require('../../../apps/webguy'));

  //===========================================================================================================
  require_cleartype = function() {
    var integer, quantity, std;
    //=========================================================================================================
    integer = class integer {
      constructor(n = 0) {
        parseInt(n, 10);
      }

    };
    //=========================================================================================================
    quantity = class quantity {
      constructor(cfg) {
        return {
          q: 0,
          u: 'u',
          ...cfg
        };
      }

      my_field_names() {
        var k, results;
        results = [];
        for (k in this) {
          results.push(k);
        }
        return results;
      }

    };
    /*

    1.  ```
        integer = type.$create { $name: 'integer', $isa: ( -> ), ..., }

     * usage:
        integer.$create 3.141
        ```

    2.  ```
        class Integer extends Type
          $isa:     ( x ) -> Number.isInteger x
          $create:  ( x ) -> parseInt x, 10
        integer = new Integer()

     * usage:
        integer.$create 3.141
        ```

    3.  ```
        class integer extends Type
          @$isa:    ( x ) -> Number.isInteger x
          @$create: ( x ) -> parseInt x, 10

     * usage:
        integer.$create 3.141
        ```

     */
    //=========================================================================================================
    std = {};
    //=========================================================================================================
    return {std, integer, quantity};
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var integer, quantity, std;
      ({integer, quantity, std} = require_cleartype());
      info('Ω___1', std);
      (() => {
        var d;
        echo();
        info('Ω___2', integer);
        info('Ω___3', d = new integer(3.141));
        info('Ω___4', d.constructor === Object);
        info('Ω___5', d.constructor === integer);
        info('Ω___6', 7 + d);
        return info('Ω___7', d + 7);
      })();
      return (() => {
        var d;
        echo();
        info('Ω___8', quantity);
        info('Ω___9', d = new quantity({
          q: 7,
          u: 's'
        }));
        info('Ω__10', d.constructor === Object);
        info('Ω__11', d.constructor === quantity);
        info('Ω__12', d.q, d.u);
        info('Ω__13', {...d});
        return info('Ω__14', d.my_field_names);
      })();
    })();
  }

  // info 'Ω__15', d.my_field_names()

}).call(this);

//# sourceMappingURL=demo-cleartype-types-as-classes.js.map