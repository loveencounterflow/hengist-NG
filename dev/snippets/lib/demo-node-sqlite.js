(async function() {
  'use strict';
  var GTNG, GUY, PATH, S, SFMODULES, SQL, Test, alert, blue, bold, debug, demo, echo, env_paths, f, get_rough_unicode_category, gold, green, grey, help, illegal_codepoint_patterns, info, inspect, log, mkdirp, nfa, plain, praise, red, reverse, rpr, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-node-sqlite'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  mkdirp = require('mkdirp');

  env_paths = (require('env-paths')).default('demo-node-sqlite');

  S = require('node:sqlite');

  PATH = require('node:path');

  ({SQL} = require('../../../apps/dbay'));

  //===========================================================================================================
  illegal_codepoint_patterns = {
    unassigned: /^\p{Cn}$/v, // Control
    control: /^\p{C}$/v, // Control
    letter: /^\p{L}$/v,
    space: /^\p{Zs}$/v,
    separator: /^\p{Z}$/v,
    mark: /^\p{M}$/v
  };

  // surrogate:  ///^\p{C}$///v # Surrogate
  get_rough_unicode_category = function(chr) {
    var name, pattern;
    for (name in illegal_codepoint_patterns) {
      pattern = illegal_codepoint_patterns[name];
      if (pattern.test(chr)) {
        return name;
      }
    }
    return 'other';
  };

  //===========================================================================================================
  demo = () => {
    var chr, cid, cid_hex, db, db_path, i, insert_width, k, tmp_path, ucc, v, width_cells, width_text, x;
    for (k in env_paths) {
      v = env_paths[k];
      debug('Ωnql___1', k, v);
    }
    tmp_path = env_paths.temp;
    db_path = PATH.join(tmp_path, 'chr-widths.sqlite');
    debug('Ωnql___2', mkdirp.sync(tmp_path));
    debug('Ωnql___3', db = new S.DatabaseSync(db_path));
    //.........................................................................................................
    db.exec(SQL`drop table if exists widths;`);
    //.........................................................................................................
    db.exec(SQL`create table widths (
  width_text      text    not null primary key,
  width_cells     integer not null );`);
    //.........................................................................................................
    insert_width = db.prepare(SQL`insert
into widths ( width_text, width_cells )
values ( $width_text, $width_cells )
on conflict ( width_text ) do update set width_cells = excluded.width_cells;`);
    //.........................................................................................................
    db.exec(SQL`begin transaction;`);
    for (cid = i = 0x00_0000; i <= 255; cid = ++i) {
      chr = String.fromCodePoint(cid);
      cid_hex = `U+${(cid.toString(16)).padStart(4, '0')}`;
      chr = String.fromCodePoint(cid);
      ucc = get_rough_unicode_category(chr);
      // debug 'Ωbbsfm___4', cid_hex, ( rpr chr ), ucc
      width_text = chr;
      width_cells = null;
      switch (ucc) {
        case 'control':
          width_cells = 0;
          break;
        case 'separator':
          width_cells = 0;
          break;
        case 'space':
          width_cells = 1;
          break;
        case 'unassigned':
          width_cells = 1;
          break;
        case 'mark':
          width_cells = 1;
          break;
        default:
          width_cells = 1;
      }
      insert_width.run({width_text, width_cells});
    }
    db.exec(SQL`commit;`);
    for (x of (db.prepare(SQL`select * from widths order by width_text;`)).iterate()) {
      ({width_text, width_cells} = x);
      info('Ωnql___5', rpr(width_text), width_cells);
    }
    // db.exec SQL"""create index if not exists width_cells_index on widths ( );"""
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      await demo();
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=demo-node-sqlite.js.map