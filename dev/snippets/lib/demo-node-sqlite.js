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
    var all_segments, chr, cid, cid_hex, db, db_path, i, insert_segment, k, segment_length, segment_text, segment_width, some_segments, tmp_path, ucc, v, x;
    for (k in env_paths) {
      v = env_paths[k];
      debug('Ωnql___1', k, v);
    }
    tmp_path = env_paths.temp;
    db_path = PATH.join(tmp_path, 'chr-widths.sqlite');
    debug('Ωnql___2', mkdirp.sync(tmp_path));
    debug('Ωnql___3', db = new S.DatabaseSync(db_path));
    //.........................................................................................................
    db.exec(SQL`drop table if exists segments;`);
    //.........................................................................................................
    db.exec(SQL`create table segments (
  segment_text      text    not null primary key,
  segment_width     integer not null,
  segment_length    integer not null,
  constraint segment_width_eqgt_zero  check ( segment_width >= 0  ),
  constraint segment_length_eqgt_zero check ( segment_length >= 0 ) );`);
    //.........................................................................................................
    insert_segment = db.prepare(SQL`insert
into segments ( segment_text, segment_width, segment_length )
values ( $segment_text, $segment_width, $segment_length )
on conflict ( segment_text ) do update
  set ( segment_width, segment_length ) = ( excluded.segment_width, excluded.segment_length );`);
    //.........................................................................................................
    all_segments = db.prepare(SQL`select * from segments order by segment_text;`);
    //.........................................................................................................
    db.exec(SQL`begin transaction;`);
    for (cid = i = 0x00_0000; i <= 255; cid = ++i) {
      chr = String.fromCodePoint(cid);
      cid_hex = `U+${(cid.toString(16)).padStart(4, '0')}`;
      chr = String.fromCodePoint(cid);
      ucc = get_rough_unicode_category(chr);
      // debug 'Ωbbsfm___4', cid_hex, ( rpr chr ), ucc
      segment_text = chr;
      segment_width = null;
      segment_length = null;
      switch (ucc) {
        case 'control':
          segment_width = 0;
          segment_length = 0;
          break;
        case 'separator':
          segment_width = 0;
          segment_length = 0;
          break;
        default:
          segment_width = 1/* TAINT run wc --max-line-length */
          segment_length = 1;
      }
      insert_segment.run({segment_text, segment_width, segment_length});
    }
    db.exec(SQL`commit;`);
    for (x of all_segments.iterate()) {
      ({segment_text, segment_width, segment_length} = x);
      info('Ωnql___5', rpr(segment_text), segment_width, segment_length);
    }
    //.........................................................................................................
    // some_segments = db.prepare SQL"""select * from segments where segment_text in ( $texts );"""
    // debug 'Ωnql___6', some_segments.run { texts: [ 'a', 'b', ], }
    some_segments = db.prepare(SQL`select * from segments where segment_text in (
select value from json_each(?) );`);
    debug('Ωnql___7', some_segments.all(JSON.stringify(['a', 'b'])));
    //.........................................................................................................
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