(function() {
  'use strict';
  var FS, GUY, PATH, _get_short_file_descriptor, alert, debug, dsc, echo, filename, filenames, get_long_file_descriptor, get_short_file_descriptor, help, i, info, inspect, len, log, path, plain, praise, reverse, rpr, types_and_methods, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('promptparser/prompt-db'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  FS = require('node:fs');

  PATH = require('node:path');

  filenames = ['isa-nosuch', 'isa-nowhere-symlink', 'isa-circular-symlink', 'isa-file-symlink', 'isa-folder-symlink', 'isa-file', 'isa-folder'];

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
  _get_short_file_descriptor = function(path) {
    var is_loop, link, lstat, stat, type;
    type = null;
    link = false;
    is_loop = false;
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
      return {type, link, is_loop};
    }
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
    if (is_loop == null) {
      is_loop = false;
    }
    if (is_loop || (!link)) {
      stat = lstat;
    }
    if ((stat == null) && (!is_loop)) {
      return {
        type: 'link',
        link,
        is_loop
      };
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
    //.........................................................................................................
    if (type == null) {
      type = 'link';
    }
    return {type, link, is_loop};
  };

  //-----------------------------------------------------------------------------------------------------------
  get_short_file_descriptor = function(...P) {
    return _get_short_file_descriptor(...P);
  };

  //-----------------------------------------------------------------------------------------------------------
  get_long_file_descriptor = function(...P) {
    var dsc, stats;
    throw new Error("not implemented");
    return ({dsc, stats} = _get_short_file_descriptor(...P));
  };

// dev: 2114n,
// ino: 48064969n,
// mode: 33188n,
// nlink: 1n,
// uid: 85n,
// gid: 100n,
// rdev: 0n,
// size: 527n,
// blksize: 4096n,
// blocks: 8n,
// atimeMs: 1318289051000n,
// mtimeMs: 1318289051000n,
// ctimeMs: 1318289051000n,
// birthtimeMs: 1318289051000n,
// atimeNs: 1318289051000000000n,
// mtimeNs: 1318289051000000000n,
// ctimeNs: 1318289051000000000n,
// birthtimeNs: 1318289051000000000n,
// atime: Mon, 10 Oct 2011 23:24:11 GMT,
// mtime: Mon, 10 Oct 2011 23:24:11 GMT,
// ctime: Mon, 10 Oct 2011 23:24:11 GMT,
// birthtime: Mon, 10 Oct 2011 23:24:11 GMT
  for (i = 0, len = filenames.length; i < len; i++) {
    filename = filenames[i];
    // help()
    path = PATH.resolve(__dirname, PATH.join('../probes', filename));
    dsc = get_short_file_descriptor(path);
    help('Ω___4', filename.padEnd(20), dsc);
  }

}).call(this);

//# sourceMappingURL=demo-check-file-type.js.map