(function() {
  'use strict';
  var FS, GUY, PATH, Test, alert, debug, echo, help, info, inspect, log, my_filename, plain, praise, rpr, tasks, urge, warn, whisper;

  //###########################################################################################################
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('guy-test/test-all'));

  ({rpr, inspect, echo, log} = GUY.trm);

  //...........................................................................................................
  PATH = require('path');

  FS = require('fs');

  ({Test} = require('guy-test'));

  my_filename = PATH.basename(__filename);

  //###########################################################################################################
  tasks = {};

  (async function() {
    var cfg, filename, i, k, len, module, path, paths;
    paths = FS.readdirSync(__dirname);
    for (i = 0, len = paths.length; i < len; i++) {
      path = paths[i];
      filename = PATH.basename(path);
      if (path.endsWith('.js.map')) {
        continue;
      }
      if (filename === my_filename) {
        continue;
      }
      if (!filename.startsWith('test-')) {
        continue;
      }
      path = PATH.join(__dirname, path);
      module = require(path);
      debug('Ω___1', module);
      debug('Ω___2', (function() {
        var results;
        results = [];
        for (k in module) {
          results.push(k);
        }
        return results;
      })());
      tasks[filename] = module;
    }
    cfg = {
      throw_on_error: false
    };
    return (await ((new Test(cfg)).async_test({tasks})));
  })();

}).call(this);

//# sourceMappingURL=test-all.js.map