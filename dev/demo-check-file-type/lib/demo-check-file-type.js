(function() {
  'use strict';
  var FS, GUY, PATH, alert, debug, dsc, echo, filename, filenames, get_file_descriptor, help, i, info, inspect, len, log, path, plain, praise, reverse, rpr, types_and_methods, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('promptparser/prompt-db'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  FS = require('node:fs');

  PATH = require('node:path');

  filenames = ['isa-nosuch', 'isa-circular-symlink', 'isa-file', 'isa-file-symlink', 'isa-folder', 'isa-folder-symlink', 'isa-nowhere-symlink'];

  types_and_methods = [
    {
      type: 'file',
      method_name: 'isFile'
    },
    {
      type: 'folder',
      method_name: 'isDirectory'
    },
    {
      type: 'block',
      method_name: 'isBlockDevice'
    },
    {
      type: 'character',
      method_name: 'isCharacterDevice'
    },
    {
      type: 'fifo',
      method_name: 'isFIFO'
    },
    {
      type: 'socket',
      method_name: 'isSocket'
    }
  ];

  //-----------------------------------------------------------------------------------------------------------
  get_file_descriptor = function(path) {
    var is_loop, link, lstat, stat, type;
    //.........................................................................................................
    [lstat, link] = (() => {
      var error;
      try {
        lstat = FS.lstatSync(path);
      } catch (error1) {
        error = error1;
        if (error.code === 'ENOENT') {
          return [null, false];
        }
        throw error;
      }
      return [lstat, lstat.isSymbolicLink()];
    })();
    if (lstat == null) {
      //.........................................................................................................
      return null;
    }
    info('Ω___1', PATH.basename(path), lstat != null, link);
    //.........................................................................................................
    if (link) {
      [stat, is_loop] = (() => {
        var error;
        try {
          stat = FS.statSync(path);
        } catch (error1) {
          error = error1;
          if (error.code === 'ELOOP') {
            return [null, true];
          }
          if (error.code === 'ENOENT') {
            return [null, false];
          }
          throw error;
        }
        return [stat, false];
      })();
    }
    debug('Ω___2', (PATH.basename(path)).padEnd(20), {
      lstat: lstat != null,
      stat: stat != null,
      link,
      is_loop
    });
    if (is_loop || (!link)) {
      stat = lstat;
    }
    if ((stat == null) && (!is_loop)) {
      return null;
    }
    type = (() => {
      var i, len, method_name;
      for (i = 0, len = types_and_methods.length; i < len; i++) {
        ({type, method_name} = types_and_methods[i]);
        if (stat[method_name]()) {
          return type;
        }
      }
      return null;
    })();
    return {
      //.........................................................................................................
      type,
      link,
      is_loop: false
    };
  };

  for (i = 0, len = filenames.length; i < len; i++) {
    filename = filenames[i];
    help();
    path = PATH.resolve(__dirname, PATH.join('../probes', filename));
    dsc = get_file_descriptor(path);
    help('Ω___4', filename.padEnd(20), dsc);
  }

}).call(this);

//# sourceMappingURL=demo-check-file-type.js.map