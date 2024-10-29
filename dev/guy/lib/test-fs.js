(async function() {
  'use strict';
  var FS, GTNG, GUY, PATH, Test, alert, debug, echo, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('promptparser/prompt-db'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  FS = require('node:fs');

  PATH = require('node:path');

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  //###########################################################################################################

  //===========================================================================================================
  this.fs_tasks = {
    //-----------------------------------------------------------------------------------------------------------
    get_descriptor: function() {
      var filename, filenames_and_matchers, i, len, matcher, path, Ωfs___2;
      filenames_and_matchers = [
        [
          'isa-nosuch',
          {
            type: null,
            link: false,
            is_loop: false
          }
        ],
        [
          'isa-nowhere-symlink',
          {
            type: 'link',
            link: true,
            is_loop: false
          }
        ],
        [
          'isa-circular-symlink',
          {
            type: 'link',
            link: true,
            is_loop: true
          }
        ],
        [
          'isa-file-symlink',
          {
            type: 'file',
            link: true,
            is_loop: false
          }
        ],
        [
          'isa-folder-symlink',
          {
            type: 'folder',
            link: true,
            is_loop: false
          }
        ],
        [
          'isa-file',
          {
            type: 'file',
            link: false,
            is_loop: false
          }
        ],
        [
          'isa-folder',
          {
            type: 'folder',
            link: false,
            is_loop: false
          }
        ],
        [
          '/dev/tty0',
          {
            type: 'character',
            link: false,
            is_loop: false
          }
        ],
        [
          '/dev/loop0',
          {
            type: 'block',
            link: false,
            is_loop: false
          }
        ]
      ];
      GUY = require('../../../apps/guy');
      for (i = 0, len = filenames_and_matchers.length; i < len; i++) {
        [filename, matcher] = filenames_and_matchers[i];
        if (PATH.isAbsolute(filename)) {
          path = filename;
        } else {
          path = PATH.resolve(__dirname, PATH.join('../probes', filename));
        }
        this.eq((Ωfs___2 = function() {
          return GUY.fs.get_descriptor(path);
        }), matcher);
      }
      // debug 'Ωfs___3', GUY.fs.get_descriptor '/dev/loop0'
      // @eq ( Ωfs___4 = -> GUY.fs.get_descriptor '/dev/shm' ), matcher
      //.........................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      return (new Test({
        throw_on_error: true
      })).test(this.fs_tasks);
    })();
  }

}).call(this);

//# sourceMappingURL=test-fs.js.map