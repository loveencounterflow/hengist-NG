(async function() {
  'use strict';
  var CRYPTO, DBay, FS, GUY, SQL, alert, debug, demo_exifr, demo_exifreader, demo_exiftool_vendored, demo_fast_glob, demo_node_glob, echo, help, id_from_text, info, inspect, log, plain, praise, prepare_db, reverse, rpr, set_path, urge, warn, whisper,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; },
    indexOf = [].indexOf;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  FS = require('node:fs');

  CRYPTO = require('node:crypto');

  ({DBay} = require('../../../apps/dbay'));

  ({SQL} = DBay);

  //-----------------------------------------------------------------------------------------------------------
  id_from_text = function(text, length = 8) {
    var hash;
    hash = CRYPTO.createHash('sha1');
    hash.update(text);
    return (hash.digest('hex')).slice(0, length);
  };

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
    var DB, ExifReader, PATH, base_path, cfg, count, exif_from_path, glob, globSync, patterns;
    PATH = require('node:path');
    ({glob, globSync} = require('glob'));
    ExifReader = require('exifreader');
    patterns = ['**/*.png', '**/*.jpg'];
    cfg = {
      dot: true
    };
    base_path = set_path();
    count = 0;
    DB = prepare_db();
    //.........................................................................................................
    exif_from_path = (() => {
      var my_buffer;
      my_buffer = new Buffer.alloc(2 * 1024);
      return function(path) {
        var data, exif, fd, ref;
        fd = FS.openSync(path);
        FS.readSync(fd, my_buffer);
        exif = ExifReader.load(my_buffer);
        if ((data = (ref = exif != null ? exif.UserComment : void 0) != null ? ref : null) != null) {
          return JSON.parse((Buffer.from(data.value)).toString('utf-8'));
        }
        return null;
      };
    })();
    (() => {      //.........................................................................................................
      DB.db(function() {
        var abs_path, counts, exif, i, len, path_id, rel_path, rel_paths;
        console.time('demo_exifreader');
        counts = {
          skipped: 0,
          added: 0,
          deleted: 0
        };
        rel_paths = globSync(patterns, cfg);
        info('Ω__17', `found ${rel_paths.length} matching files`);
        for (i = 0, len = rel_paths.length; i < len; i++) {
          rel_path = rel_paths[i];
          count++;
          if ((modulo(count, 1000)) === 0) {
            whisper(count);
          }
          if (count > 10000/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */) {
            break;
          }
          abs_path = PATH.resolve(base_path, rel_path);
          path_id = id_from_text(abs_path);
          //...................................................................................................
          if (DB.known_path_ids.has(path_id)) {
            // help "Ω__18 skipping path ID #{rpr path_id}"
            counts.skipped++;
            DB.known_path_ids.delete(path_id);
          } else {
            // warn "Ω__19 inserting path ID #{rpr path_id}"
            counts.added++;
            /* TAINT use prepared statement */
            DB.db(SQL`insert into files ( id, path ) values ( ?, ? );`, [path_id, abs_path]);
            //.................................................................................................
            exif = exif_from_path(abs_path);
            /* TAINT use prepared statement */
            DB.db(SQL`insert into prompts ( id, prompt ) values ( ?, ? );`, [path_id, exif.prompt]);
          }
        }
        //.....................................................................................................
        info(`Ω__21 changes to DB at ${DB.path}: ${rpr(counts)}`);
        //.....................................................................................................
        return null;
      });
      console.timeEnd('demo_exifreader');
      return null;
    })();
    //.........................................................................................................
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  prepare_db = function() {
    var db, get_must_initialize, initialize_db, known_path_ids, path;
    path = '/dev/shm/files-and-prompts.sqlite';
    db = new DBay({path});
    //.........................................................................................................
    get_must_initialize = function(db) {
      var R, tables;
      tables = db.first_values(SQL`select name from sqlite_schema where type = 'table' order by name;`);
      tables = [...tables];
      R = false;
      R || (R = indexOf.call(tables, 'files') < 0);
      R || (R = indexOf.call(tables, 'prompts') < 0);
      return R;
    };
    //.........................................................................................................
    initialize_db = function(db) {
      db(function() {
        db(SQL`drop table if exists files;`);
        db(SQL`drop table if exists prompts;`);
        db(SQL`create table files (
  id      text not null primary key,
  path    text not null );`);
        db(SQL`create table prompts (
  id      text not null primary key,
  prompt  text not null );`);
        // db SQL"insert into texts values ( 3, 'third' );"
        // db SQL"insert into texts values ( 1, 'first' );"
        // db SQL"insert into texts values ( ?, ? );", [ 2, 'second', ]
        return null;
      });
      return null;
    };
    //.........................................................................................................
    if (get_must_initialize(db)) {
      warn(`Ω__22 initializing DB at ${path}`);
      initialize_db(db);
    } else {
      help(`Ω__23 re-using DB at ${path}`);
    }
    //.........................................................................................................
    /* TAINT can we use an API call to get a set? */
    known_path_ids = (() => {
      var R, id, ref;
      R = new Set();
      ref = db.first_values(SQL`select * from files;`);
      for (id of ref) {
        R.add(id);
      }
      return R;
    })();
    //.........................................................................................................
    return {path, db, known_path_ids};
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

  // demo_dbay_with_exifdata()

}).call(this);

//# sourceMappingURL=demo-walk-many-files-extract-exif-data.js.map