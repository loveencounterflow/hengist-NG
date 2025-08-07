(async function() {
  'use strict';
  var CRYPTO, DBay, FS, GUY, SQL, alert, debug, demo_exifr, demo_exifreader, demo_exiftool_vendored, demo_fast_glob, demo_node_glob, echo, help, id_from_text, info, inspect, log, nosuchprompt, plain, praise, prepare_db, reverse, rpr, set_path, urge, warn, whisper,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; },
    indexOf = [].indexOf;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  FS = require('node:fs');

  CRYPTO = require('node:crypto');

  ({DBay} = require('../../../apps/dbay'));

  ({SQL} = DBay);

  nosuchprompt = "";

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
        var R, data, exif, fd, ref;
        fd = FS.openSync(path);
        FS.readSync(fd, my_buffer);
        exif = ExifReader.load(my_buffer);
        if ((data = (ref = exif != null ? exif.UserComment : void 0) != null ? ref : null) != null) {
          R = JSON.parse((Buffer.from(data.value)).toString('utf-8'));
        } else {
          R = {
            prompt: nosuchprompt,
            date: null
          };
        }
        //.....................................................................................................
        R.prompt_id = id_from_text(R.prompt);
        return R;
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
            /* NOTE we know that in the present run we will not again have to test against the current
                     `path_id`, so we also know we can safely delete it from the pool of known IDs (thereby making it
                     smaller and potentially a tad faster); after having gone through all `path_ids` in the file
                     system, we will then effectively have turned `DB.known_path_ids` into `extraneous_path_ids`, i.e.
                     those that could be deleted from the DB if deemed necessary. */
            DB.known_path_ids.delete(path_id);
          } else {
            // warn "Ω__19 inserting path ID #{rpr path_id}"
            counts.added++;
            //.................................................................................................
            exif = exif_from_path(abs_path);
            /* TAINT use prepared statement */
            DB.db(SQL`insert into prompts ( id, prompt ) values ( ?, ? )
  on conflict ( id ) do nothing;`, [exif.prompt_id, exif.prompt]);
            /* TAINT use prepared statement */
            DB.db(SQL`insert into files ( id, prompt_id, path ) values ( ?, ?, ? );`, [path_id, exif.prompt_id, abs_path]);
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
    id        text not null primary key,
    prompt_id text not null,
    path      text not null,
  foreign key ( prompt_id ) references prompts ( id ) );`);
        db(SQL`create table prompts (
  id      text not null primary key,
  prompt  text not null );`);
        db(SQL`insert into prompts ( id, prompt ) values ( ?, ? );`, [id_from_text(nosuchprompt), nosuchprompt]);
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
      var R, id;
      R = new Set();
      for (id of db.first_values(SQL`select * from files;`)) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8td2Fsay1tYW55LWZpbGVzLWV4dHJhY3QtZXhpZi1kYXRhLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxNQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsVUFBQSxFQUFBLGVBQUEsRUFBQSxzQkFBQSxFQUFBLGNBQUEsRUFBQSxjQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxZQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsWUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsVUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQTtJQUFBOzs7RUFFQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHVCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEM7O0VBS0EsRUFBQSxHQUE0QixPQUFBLENBQVEsU0FBUjs7RUFDNUIsTUFBQSxHQUE0QixPQUFBLENBQVEsYUFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsb0JBQVIsQ0FBNUI7O0VBQ0EsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxZQUFBLEdBQTRCLEdBckI1Qjs7O0VBd0JBLFlB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QTBDRSxXQUFPLENBQUUsSUFBRixFQUFRLEVBQVIsRUFBWSxjQUFaO0VBM0NJLEVBcE5iOzs7RUFtUUEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7Ozs7O2FBS3RDLENBQUEsTUFBTSxlQUFBLENBQUEsQ0FBTjtJQUxzQyxDQUFBLElBQXhDOzs7RUFuUUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdpbnRlcnR5cGUvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbkZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuQ1JZUFRPICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6Y3J5cHRvJ1xueyBEQmF5IH0gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZGJheSdcbnsgU1FMICB9ICAgICAgICAgICAgICAgICAgPSBEQmF5XG5ub3N1Y2hwcm9tcHQgICAgICAgICAgICAgID0gXCJcIlxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlkX2Zyb21fdGV4dCA9ICggdGV4dCwgbGVuZ3RoID0gOCApIC0+XG4gIGhhc2ggPSBDUllQVE8uY3JlYXRlSGFzaCAnc2hhMSdcbiAgaGFzaC51cGRhdGUgdGV4dFxuICByZXR1cm4gKCBoYXNoLmRpZ2VzdCAnaGV4JyApWyAuLi4gbGVuZ3RoIF1cblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5zZXRfcGF0aCA9IC0+XG4gIHByb2Nlc3MuY2hkaXIgcGF0aCBpZiAoIHBhdGggPSBwcm9jZXNzLmFyZ3ZbIDIgXSA/IG51bGwgKT9cbiAgUiA9IHByb2Nlc3MuY3dkKClcbiAgaW5mbyBcIs6pX19fMSBDV0Q6ICN7Un1cIlxuICByZXR1cm4gUlxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmRlbW9fZmFzdF9nbG9iID0gLT5cbiAgRkcgICAgICAgID0gcmVxdWlyZSAnZmFzdC1nbG9iJ1xuICBwYXR0ZXJucyAgPSBbICcqKi8qLnBuZycsICcqKi8qLmpwZycsIF1cbiAgY2ZnICAgICAgID0geyBkb3Q6IHRydWUgfVxuICBzZXRfcGF0aCgpXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgYXdhaXQgZG8gPT5cbiAgICBjb25zb2xlLnRpbWUgJ2Zhc3QtZ2xvYi1hc3luYydcbiAgICBlbnRyaWVzID0gYXdhaXQgRkcuZ2xvYiBwYXR0ZXJucywgY2ZnXG4gICAgY29uc29sZS50aW1lRW5kICdmYXN0LWdsb2ItYXN5bmMnXG4gICAgZGVidWcgJ86pX19fMicsIFwiZm91bmQgI3tlbnRyaWVzLmxlbmd0aH0gbWF0Y2hpbmcgZmlsZXNcIlxuICAgIHJldHVybiBudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZG8gPT5cbiAgICBjb25zb2xlLnRpbWUgJ2Zhc3QtZ2xvYi1zeW5jJ1xuICAgIGVudHJpZXMgPSBGRy5nbG9iU3luYyBwYXR0ZXJucywgY2ZnXG4gICAgY29uc29sZS50aW1lRW5kICdmYXN0LWdsb2Itc3luYydcbiAgICBkZWJ1ZyAnzqlfX18zJywgXCJmb3VuZCAje2VudHJpZXMubGVuZ3RofSBtYXRjaGluZyBmaWxlc1wiXG4gICAgcmV0dXJuIG51bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICByZXR1cm4gbnVsbFxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmRlbW9fbm9kZV9nbG9iID0gLT5cbiAgeyBnbG9iXG4gICAgZ2xvYlN5bmMgIH0gPSByZXF1aXJlICdnbG9iJ1xuICBwYXR0ZXJucyAgICAgID0gWyAnKiovKi5wbmcnLCAnKiovKi5qcGcnLCBdXG4gIGNmZyAgICAgICAgICAgPSB7IGRvdDogdHJ1ZSB9XG4gIHNldF9wYXRoKClcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBhd2FpdCBkbyA9PlxuICAgIGNvbnNvbGUudGltZSAnbm9kZS1nbG9iLWFzeW5jJ1xuICAgIGVudHJpZXMgPSBhd2FpdCBnbG9iIHBhdHRlcm5zLCBjZmdcbiAgICBjb25zb2xlLnRpbWVFbmQgJ25vZGUtZ2xvYi1hc3luYydcbiAgICBkZWJ1ZyAnzqlfX180JywgXCJmb3VuZCAje2VudHJpZXMubGVuZ3RofSBtYXRjaGluZyBmaWxlc1wiXG4gICAgcmV0dXJuIG51bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBkbyA9PlxuICAgIGNvbnNvbGUudGltZSAnbm9kZS1nbG9iLXN5bmMnXG4gICAgZW50cmllcyA9IGdsb2JTeW5jIHBhdHRlcm5zLCBjZmdcbiAgICBjb25zb2xlLnRpbWVFbmQgJ25vZGUtZ2xvYi1zeW5jJ1xuICAgIGRlYnVnICfOqV9fXzUnLCBcImZvdW5kICN7ZW50cmllcy5sZW5ndGh9IG1hdGNoaW5nIGZpbGVzXCJcbiAgICByZXR1cm4gbnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHJldHVybiBudWxsXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZGVtb19leGlmciA9IC0+XG4gIFBBVEggICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gIHsgZ2xvYlxuICAgIGdsb2JTeW5jICB9ID0gcmVxdWlyZSAnZ2xvYidcbiAgRVhJRlIgICAgICAgICA9IHJlcXVpcmUgJ2V4aWZyJ1xuICBwYXR0ZXJucyAgICAgID0gWyAnKiovKi5wbmcnLCAnKiovKi5qcGcnLCBdXG4gIGNmZyAgICAgICAgICAgPSB7IGRvdDogdHJ1ZSB9XG4gIGJhc2VfcGF0aCAgICAgPSBzZXRfcGF0aCgpXG4gIGNvdW50ICAgICAgICAgPSAwXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZG8gPT5cbiAgICBjb25zb2xlLnRpbWUgJ2RlbW9fZXhpZnInXG4gICAgZm9yIHJlbF9wYXRoIGluICggcmVsX3BhdGhzID0gZ2xvYlN5bmMgcGF0dGVybnMsIGNmZyApXG4gICAgICBjb3VudCsrOyB3aGlzcGVyIGNvdW50IGlmICggY291bnQgJSUgMTAwMCApIGlzIDBcbiAgICAgIGFic19wYXRoICA9IFBBVEgucmVzb2x2ZSBiYXNlX3BhdGgsIHJlbF9wYXRoXG4gICAgICBleGlmICAgICAgPSBhd2FpdCBFWElGUi5wYXJzZSBhYnNfcGF0aFxuICAgICAgaWYgZXhpZj9cbiAgICAgICAgZGVidWcgJ86pX19fNicsIGFic19wYXRoXG4gICAgICAgIGluZm8gJ86pX19fNycsIGV4aWZcbiAgICBjb25zb2xlLnRpbWVFbmQgJ2RlbW9fZXhpZnInXG4gICAgZGVidWcgJ86pX19fOCcsIFwiZm91bmQgI3tyZWxfcGF0aHMubGVuZ3RofSBtYXRjaGluZyBmaWxlc1wiXG4gICAgcmV0dXJuIG51bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICByZXR1cm4gbnVsbFxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmRlbW9fZXhpZnRvb2xfdmVuZG9yZWQgPSAtPlxuICBQQVRIICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICB7IGdsb2JcbiAgICBnbG9iU3luYyAgfSA9IHJlcXVpcmUgJ2dsb2InXG4gIHsgZXhpZnRvb2wgfSAgICAgICAgID0gcmVxdWlyZSAnZXhpZnRvb2wtdmVuZG9yZWQnXG4gIHBhdHRlcm5zICAgICAgPSBbICcqKi8qLnBuZycsICcqKi8qLmpwZycsIF1cbiAgY2ZnICAgICAgICAgICA9IHsgZG90OiB0cnVlIH1cbiAgYmFzZV9wYXRoICAgICA9IHNldF9wYXRoKClcbiAgY291bnQgICAgICAgICA9IDBcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBkbyA9PlxuICAgIGNvbnNvbGUudGltZSAnZGVtb19leGlmdG9vbF92ZW5kb3JlZCdcbiAgICBmb3IgcmVsX3BhdGggaW4gKCByZWxfcGF0aHMgPSBnbG9iU3luYyBwYXR0ZXJucywgY2ZnIClcbiAgICAgIGNvdW50Kys7IHdoaXNwZXIgY291bnQgaWYgKCBjb3VudCAlJSAxMDAwICkgaXMgMFxuICAgICAgYWJzX3BhdGggID0gUEFUSC5yZXNvbHZlIGJhc2VfcGF0aCwgcmVsX3BhdGhcbiAgICAgIGV4aWYgICAgICA9IGF3YWl0IGV4aWZ0b29sLnJlYWQgYWJzX3BhdGhcbiAgICAgIGlmICggZGF0YSA9IGV4aWY/LlVzZXJDb21tZW50ID8gbnVsbCApP1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZSBkYXRhXG4gICAgICAgICMgZGVidWcgJ86pX19fOScsIGFic19wYXRoXG4gICAgICAgICMgZGVidWcgJ86pX18xMCcsIE9iamVjdC5rZXlzIGRhdGFcbiAgICAgICAgIyBpbmZvICfOqV9fMTEnLCBkYXRhLnByb21wdFxuICAgICAgICAjIGluZm8gJ86pX18xMicsIGRhdGEuY3JlYXRpb25fZGF0ZVxuICAgICAgICAjIGluZm8gJ86pX18xMycsIG5ldyBEYXRlIGRhdGEuY3JlYXRpb25fZGF0ZVxuICAgIGNvbnNvbGUudGltZUVuZCAnZGVtb19leGlmdG9vbF92ZW5kb3JlZCdcbiAgICBkZWJ1ZyAnzqlfXzE0JywgXCJmb3VuZCAje3JlbF9wYXRocy5sZW5ndGh9IG1hdGNoaW5nIGZpbGVzXCJcbiAgICByZXR1cm4gbnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHJldHVybiBudWxsXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZGVtb19leGlmcmVhZGVyID0gLT5cbiAgUEFUSCAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICB7IGdsb2JcbiAgICBnbG9iU3luYyAgfSAgID0gcmVxdWlyZSAnZ2xvYidcbiAgRXhpZlJlYWRlciAgICAgID0gcmVxdWlyZSAnZXhpZnJlYWRlcidcbiAgcGF0dGVybnMgICAgICAgID0gWyAnKiovKi5wbmcnLCAnKiovKi5qcGcnLCBdXG4gIGNmZyAgICAgICAgICAgICA9IHsgZG90OiB0cnVlIH1cbiAgYmFzZV9wYXRoICAgICAgID0gc2V0X3BhdGgoKVxuICBjb3VudCAgICAgICAgICAgPSAwXG4gIERCICAgICAgICAgICAgICA9IHByZXBhcmVfZGIoKVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGV4aWZfZnJvbV9wYXRoICA9IGRvID0+XG4gICAgbXlfYnVmZmVyID0gbmV3IEJ1ZmZlci5hbGxvYyAyICogMTAyNFxuICAgIHJldHVybiAoIHBhdGggKSAtPlxuICAgICAgZmQgICAgICAgICAgPSBGUy5vcGVuU3luYyBwYXRoXG4gICAgICBGUy5yZWFkU3luYyBmZCwgbXlfYnVmZmVyXG4gICAgICBleGlmICAgICAgICA9IEV4aWZSZWFkZXIubG9hZCBteV9idWZmZXJcbiAgICAgIGlmICggZGF0YSA9IGV4aWY/LlVzZXJDb21tZW50ID8gbnVsbCApP1xuICAgICAgICBSID0gSlNPTi5wYXJzZSAoIEJ1ZmZlci5mcm9tIGRhdGEudmFsdWUgKS50b1N0cmluZyAndXRmLTgnXG4gICAgICBlbHNlXG4gICAgICAgIFIgPSB7IHByb21wdDogbm9zdWNocHJvbXB0LCBkYXRlOiBudWxsLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFIucHJvbXB0X2lkID0gaWRfZnJvbV90ZXh0IFIucHJvbXB0XG4gICAgICByZXR1cm4gUlxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGRvID0+XG4gICAgREIuZGIgLT5cbiAgICAgIGNvbnNvbGUudGltZSAnZGVtb19leGlmcmVhZGVyJ1xuICAgICAgY291bnRzICAgID1cbiAgICAgICAgc2tpcHBlZDogIDBcbiAgICAgICAgYWRkZWQ6ICAgIDBcbiAgICAgICAgZGVsZXRlZDogIDBcbiAgICAgIHJlbF9wYXRocyA9IGdsb2JTeW5jIHBhdHRlcm5zLCBjZmdcbiAgICAgIGluZm8gJ86pX18xNycsIFwiZm91bmQgI3tyZWxfcGF0aHMubGVuZ3RofSBtYXRjaGluZyBmaWxlc1wiXG4gICAgICBmb3IgcmVsX3BhdGggaW4gcmVsX3BhdGhzXG4gICAgICAgIGNvdW50Kys7IHdoaXNwZXIgY291bnQgaWYgKCBjb3VudCAlJSAxMDAwICkgaXMgMFxuICAgICAgICBicmVhayBpZiBjb3VudCA+IDEwMDAwICMjIyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEgIyMjXG4gICAgICAgIGFic19wYXRoICA9IFBBVEgucmVzb2x2ZSBiYXNlX3BhdGgsIHJlbF9wYXRoXG4gICAgICAgIHBhdGhfaWQgICA9IGlkX2Zyb21fdGV4dCBhYnNfcGF0aFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGlmIERCLmtub3duX3BhdGhfaWRzLmhhcyBwYXRoX2lkXG4gICAgICAgICAgIyBoZWxwIFwizqlfXzE4IHNraXBwaW5nIHBhdGggSUQgI3tycHIgcGF0aF9pZH1cIlxuICAgICAgICAgIGNvdW50cy5za2lwcGVkKytcbiAgICAgICAgICAjIyMgTk9URSB3ZSBrbm93IHRoYXQgaW4gdGhlIHByZXNlbnQgcnVuIHdlIHdpbGwgbm90IGFnYWluIGhhdmUgdG8gdGVzdCBhZ2FpbnN0IHRoZSBjdXJyZW50XG4gICAgICAgICAgYHBhdGhfaWRgLCBzbyB3ZSBhbHNvIGtub3cgd2UgY2FuIHNhZmVseSBkZWxldGUgaXQgZnJvbSB0aGUgcG9vbCBvZiBrbm93biBJRHMgKHRoZXJlYnkgbWFraW5nIGl0XG4gICAgICAgICAgc21hbGxlciBhbmQgcG90ZW50aWFsbHkgYSB0YWQgZmFzdGVyKTsgYWZ0ZXIgaGF2aW5nIGdvbmUgdGhyb3VnaCBhbGwgYHBhdGhfaWRzYCBpbiB0aGUgZmlsZVxuICAgICAgICAgIHN5c3RlbSwgd2Ugd2lsbCB0aGVuIGVmZmVjdGl2ZWx5IGhhdmUgdHVybmVkIGBEQi5rbm93bl9wYXRoX2lkc2AgaW50byBgZXh0cmFuZW91c19wYXRoX2lkc2AsIGkuZS5cbiAgICAgICAgICB0aG9zZSB0aGF0IGNvdWxkIGJlIGRlbGV0ZWQgZnJvbSB0aGUgREIgaWYgZGVlbWVkIG5lY2Vzc2FyeS4gIyMjXG4gICAgICAgICAgREIua25vd25fcGF0aF9pZHMuZGVsZXRlIHBhdGhfaWRcbiAgICAgICAgZWxzZVxuICAgICAgICAgICMgd2FybiBcIs6pX18xOSBpbnNlcnRpbmcgcGF0aCBJRCAje3JwciBwYXRoX2lkfVwiXG4gICAgICAgICAgY291bnRzLmFkZGVkKytcbiAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgIGV4aWYgPSBleGlmX2Zyb21fcGF0aCBhYnNfcGF0aFxuICAgICAgICAgICMjIyBUQUlOVCB1c2UgcHJlcGFyZWQgc3RhdGVtZW50ICMjI1xuICAgICAgICAgIERCLmRiIFNRTFwiXCJcIlxuICAgICAgICAgICAgaW5zZXJ0IGludG8gcHJvbXB0cyAoIGlkLCBwcm9tcHQgKSB2YWx1ZXMgKCA/LCA/IClcbiAgICAgICAgICAgICAgb24gY29uZmxpY3QgKCBpZCApIGRvIG5vdGhpbmc7XCJcIlwiLCBbXG4gICAgICAgICAgICBleGlmLnByb21wdF9pZCwgZXhpZi5wcm9tcHQsIF1cbiAgICAgICAgICAjIyMgVEFJTlQgdXNlIHByZXBhcmVkIHN0YXRlbWVudCAjIyNcbiAgICAgICAgICBEQi5kYiBTUUxcIlwiXCJpbnNlcnQgaW50byBmaWxlcyAoIGlkLCBwcm9tcHRfaWQsIHBhdGggKSB2YWx1ZXMgKCA/LCA/LCA/ICk7XCJcIlwiLCBbXG4gICAgICAgICAgICBwYXRoX2lkLCBleGlmLnByb21wdF9pZCwgYWJzX3BhdGgsIF1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaW5mbyBcIs6pX18yMSBjaGFuZ2VzIHRvIERCIGF0ICN7REIucGF0aH06ICN7cnByIGNvdW50c31cIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgIGNvbnNvbGUudGltZUVuZCAnZGVtb19leGlmcmVhZGVyJ1xuICAgIHJldHVybiBudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcmV0dXJuIG51bGxcblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5wcmVwYXJlX2RiID0gLT5cbiAgcGF0aCAgICAgICAgICAgICAgICA9ICcvZGV2L3NobS9maWxlcy1hbmQtcHJvbXB0cy5zcWxpdGUnXG4gIGRiICAgICAgICAgICAgICAgICAgPSBuZXcgREJheSB7IHBhdGgsIH1cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBnZXRfbXVzdF9pbml0aWFsaXplID0gKCBkYiApIC0+XG4gICAgdGFibGVzICAgID0gZGIuZmlyc3RfdmFsdWVzIFNRTFwic2VsZWN0IG5hbWUgZnJvbSBzcWxpdGVfc2NoZW1hIHdoZXJlIHR5cGUgPSAndGFibGUnIG9yZGVyIGJ5IG5hbWU7XCJcbiAgICB0YWJsZXMgICAgPSBbIHRhYmxlcy4uLiwgXVxuICAgIFIgICAgICAgICA9IGZhbHNlXG4gICAgUiAgICAgICBvcj0gJ2ZpbGVzJyAgICBub3QgaW4gdGFibGVzXG4gICAgUiAgICAgICBvcj0gJ3Byb21wdHMnICBub3QgaW4gdGFibGVzXG4gICAgcmV0dXJuIFJcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBpbml0aWFsaXplX2RiID0gKCBkYiApIC0+XG4gICAgZGIgLT5cbiAgICAgIGRiIFNRTFwiZHJvcCB0YWJsZSBpZiBleGlzdHMgZmlsZXM7XCJcbiAgICAgIGRiIFNRTFwiZHJvcCB0YWJsZSBpZiBleGlzdHMgcHJvbXB0cztcIlxuICAgICAgZGIgU1FMXCJcIlwiXG4gICAgICAgIGNyZWF0ZSB0YWJsZSBmaWxlcyAoXG4gICAgICAgICAgICBpZCAgICAgICAgdGV4dCBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICAgIHByb21wdF9pZCB0ZXh0IG5vdCBudWxsLFxuICAgICAgICAgICAgcGF0aCAgICAgIHRleHQgbm90IG51bGwsXG4gICAgICAgICAgZm9yZWlnbiBrZXkgKCBwcm9tcHRfaWQgKSByZWZlcmVuY2VzIHByb21wdHMgKCBpZCApICk7XCJcIlwiXG4gICAgICBkYiBTUUxcIlwiXCJcbiAgICAgICAgY3JlYXRlIHRhYmxlIHByb21wdHMgKFxuICAgICAgICAgIGlkICAgICAgdGV4dCBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICBwcm9tcHQgIHRleHQgbm90IG51bGwgKTtcIlwiXCJcbiAgICAgIGRiIFNRTFwiXCJcImluc2VydCBpbnRvIHByb21wdHMgKCBpZCwgcHJvbXB0ICkgdmFsdWVzICggPywgPyApO1wiXCJcIiwgW1xuICAgICAgICAoIGlkX2Zyb21fdGV4dCBub3N1Y2hwcm9tcHQgKSwgbm9zdWNocHJvbXB0LCBdXG4gICAgICByZXR1cm4gbnVsbFxuICAgIHJldHVybiBudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgaWYgZ2V0X211c3RfaW5pdGlhbGl6ZSBkYlxuICAgIHdhcm4gXCLOqV9fMjIgaW5pdGlhbGl6aW5nIERCIGF0ICN7cGF0aH1cIlxuICAgIGluaXRpYWxpemVfZGIgZGJcbiAgZWxzZVxuICAgIGhlbHAgXCLOqV9fMjMgcmUtdXNpbmcgREIgYXQgI3twYXRofVwiXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyMjIFRBSU5UIGNhbiB3ZSB1c2UgYW4gQVBJIGNhbGwgdG8gZ2V0IGEgc2V0PyAjIyNcbiAga25vd25fcGF0aF9pZHMgPSBkbyA9PlxuICAgIFIgPSBuZXcgU2V0KClcbiAgICBSLmFkZCBpZCBmb3IgaWQgZnJvbSBkYi5maXJzdF92YWx1ZXMgU1FMXCJzZWxlY3QgKiBmcm9tIGZpbGVzO1wiXG4gICAgcmV0dXJuIFJcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICByZXR1cm4geyBwYXRoLCBkYiwga25vd25fcGF0aF9pZHMsIH1cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGF3YWl0IGRlbW9fZmFzdF9nbG9iKClcbiAgIyBhd2FpdCBkZW1vX25vZGVfZ2xvYigpXG4gICMgYXdhaXQgZGVtb19leGlmcigpXG4gICMgYXdhaXQgZGVtb19leGlmdG9vbF92ZW5kb3JlZCgpXG4gIGF3YWl0IGRlbW9fZXhpZnJlYWRlcigpXG4gICMgZGVtb19kYmF5X3dpdGhfZXhpZmRhdGEoKVxuIl19
//# sourceURL=../src/demo-walk-many-files-extract-exif-data.coffee