(async function() {
  'use strict';
  var GUY, alert, debug, demo_exifr, demo_exifreader, demo_exiftool_vendored, demo_fast_glob, demo_node_glob, echo, help, info, inspect, log, plain, praise, reverse, rpr, set_path, urge, warn, whisper,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  //-----------------------------------------------------------------------------------------------------------
  set_path = function() {
    var R, path, ref;
    if ((path = (ref = process.argv[2]) != null ? ref : null) != null) {
      process.chdir(path);
    }
    R = process.cwd();
    info(`Ω___1 CWD: ${R}`);
    return R;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_fast_glob = async function() {
    var FG, cfg, patterns;
    FG = require('fast-glob');
    patterns = ['**/*.png', '**/*.jpg'];
    cfg = {
      dot: true
    };
    set_path();
    await (async() => {      //.........................................................................................................
      var entries;
      console.time('fast-glob-async');
      entries = (await FG.glob(patterns, cfg));
      console.timeEnd('fast-glob-async');
      debug('Ω___2', `found ${entries.length} matching files`);
      return null;
    })();
    (() => {      //.........................................................................................................
      var entries;
      console.time('fast-glob-sync');
      entries = FG.globSync(patterns, cfg);
      console.timeEnd('fast-glob-sync');
      debug('Ω___3', `found ${entries.length} matching files`);
      return null;
    })();
    //.........................................................................................................
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_node_glob = async function() {
    var cfg, glob, globSync, patterns;
    ({glob, globSync} = require('glob'));
    patterns = ['**/*.png', '**/*.jpg'];
    cfg = {
      dot: true
    };
    set_path();
    await (async() => {      //.........................................................................................................
      var entries;
      console.time('node-glob-async');
      entries = (await glob(patterns, cfg));
      console.timeEnd('node-glob-async');
      debug('Ω___4', `found ${entries.length} matching files`);
      return null;
    })();
    (() => {      //.........................................................................................................
      var entries;
      console.time('node-glob-sync');
      entries = globSync(patterns, cfg);
      console.timeEnd('node-glob-sync');
      debug('Ω___5', `found ${entries.length} matching files`);
      return null;
    })();
    //.........................................................................................................
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_exifr = function() {
    var EXIFR, PATH, base_path, cfg, count, glob, globSync, patterns;
    PATH = require('node:path');
    ({glob, globSync} = require('glob'));
    EXIFR = require('exifr');
    patterns = ['**/*.png', '**/*.jpg'];
    cfg = {
      dot: true
    };
    base_path = set_path();
    count = 0;
    (async() => {      //.........................................................................................................
      var abs_path, exif, i, len, ref, rel_path, rel_paths;
      console.time('demo_exifr');
      ref = (rel_paths = globSync(patterns, cfg));
      for (i = 0, len = ref.length; i < len; i++) {
        rel_path = ref[i];
        count++;
        if ((modulo(count, 1000)) === 0) {
          whisper(count);
        }
        abs_path = PATH.resolve(base_path, rel_path);
        exif = (await EXIFR.parse(abs_path));
        if (exif != null) {
          debug('Ω___6', abs_path);
          info('Ω___7', exif);
        }
      }
      console.timeEnd('demo_exifr');
      debug('Ω___8', `found ${rel_paths.length} matching files`);
      return null;
    })();
    //.........................................................................................................
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_exiftool_vendored = function() {
    var PATH, base_path, cfg, count, exiftool, glob, globSync, patterns;
    PATH = require('node:path');
    ({glob, globSync} = require('glob'));
    ({exiftool} = require('exiftool-vendored'));
    patterns = ['**/*.png', '**/*.jpg'];
    cfg = {
      dot: true
    };
    base_path = set_path();
    count = 0;
    (async() => {      //.........................................................................................................
      var abs_path, data, exif, i, len, ref, ref1, rel_path, rel_paths;
      console.time('demo_exiftool_vendored');
      ref = (rel_paths = globSync(patterns, cfg));
      for (i = 0, len = ref.length; i < len; i++) {
        rel_path = ref[i];
        count++;
        if ((modulo(count, 1000)) === 0) {
          whisper(count);
        }
        abs_path = PATH.resolve(base_path, rel_path);
        exif = (await exiftool.read(abs_path));
        if ((data = (ref1 = exif != null ? exif.UserComment : void 0) != null ? ref1 : null) != null) {
          data = JSON.parse(data);
        }
      }
      // debug 'Ω___9', abs_path
      // debug 'Ω__10', Object.keys data
      // info 'Ω__11', data.prompt
      // info 'Ω__12', data.creation_date
      // info 'Ω__13', new Date data.creation_date
      console.timeEnd('demo_exiftool_vendored');
      debug('Ω__14', `found ${rel_paths.length} matching files`);
      return null;
    })();
    //.........................................................................................................
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_exifreader = function() {
    var ExifReader, PATH, base_path, cfg, count, glob, globSync, patterns;
    PATH = require('node:path');
    ({glob, globSync} = require('glob'));
    ExifReader = require('exifreader');
    patterns = ['**/*.png', '**/*.jpg'];
    cfg = {
      dot: true
    };
    base_path = set_path();
    count = 0;
    (async() => {      //.........................................................................................................
      var abs_path, data, exif, i, len, ref, ref1, rel_path, rel_paths;
      console.time('demo_exifreader');
      ref = (rel_paths = globSync(patterns, cfg));
      for (i = 0, len = ref.length; i < len; i++) {
        rel_path = ref[i];
        count++;
        if ((modulo(count, 1000)) === 0) {
          whisper(count);
        }
        abs_path = PATH.resolve(base_path, rel_path);
        exif = (await ExifReader.load(abs_path, {
          async: true,
          includeUnknown: true
        }));
        if ((data = (ref1 = exif != null ? exif.UserComment : void 0) != null ? ref1 : null) != null) {
          data = JSON.parse((Buffer.from(data.value)).toString('utf-8'));
        }
      }
      // debug 'Ω__15', abs_path
      // debug 'Ω__16', Object.keys data
      // info 'Ω__17', data.prompt
      // info 'Ω__18', data.creation_date
      // info 'Ω__19', new Date data.creation_date
      console.timeEnd('demo_exifreader');
      debug('Ω__20', `found ${rel_paths.length} matching files`);
      return null;
    })();
    //.........................................................................................................
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      // await demo_fast_glob()
      // await demo_node_glob()
      // await demo_exifr()
      // await demo_exiftool_vendored()
      return (await demo_exifreader());
    })();
  }

}).call(this);

//# sourceMappingURL=demo-walk-many-files-extract-exif-data.js.map