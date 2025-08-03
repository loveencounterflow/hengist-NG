(async function() {
  'use strict';
  var GTNG, GUY, Node_sqlite, PATH, SFMODULES, SQL, SQLITE, Segment_width_db, Test, alert, blue, bold, debug, demo, echo, env_paths, f, get_rough_unicode_category, gold, green, grey, help, illegal_codepoint_patterns, info, inspect, log, mkdirp, nfa, plain, praise, red, reverse, rpr, urge, warn, whisper, white;

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

  SQLITE = require('node:sqlite');

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

  Node_sqlite = (function() {
    //===========================================================================================================
    class Node_sqlite {
      //---------------------------------------------------------------------------------------------------------
      constructor(db_path) {
        var clasz, name, ref, sql;
        this.db = new SQLITE.DatabaseSync(db_path);
        clasz = this.constructor;
        /* NOTE we can't just prepare all the stetments as they depend on DB objects existing or not existing,
           as the case may be. Hence we prepare statements on-demand and cache them here as needed: */
        this.statements = {};
        ref = clasz.statements;
        //.......................................................................................................
        for (name in ref) {
          sql = ref[name];
          switch (true) {
            case name.startsWith('create_table_'):
              null;
              break;
            case name.startsWith('insert_'):
              null;
              break;
            default:
              throw new Error(`Ωnql___1 unable to parse statement name ${rpr(name)}`);
          }
        }
        //   @[ name ] = @prepare sql
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      execute(sql) {
        return this.db.exec(sql);
      }

      //---------------------------------------------------------------------------------------------------------
      prepare(sql) {
        return this.db.prepare(sql);
      }

    };

    //---------------------------------------------------------------------------------------------------------
    Node_sqlite.statements = {};

    return Node_sqlite;

  }).call(this);

  Segment_width_db = (function() {
    //===========================================================================================================
    class Segment_width_db extends Node_sqlite {};

    //---------------------------------------------------------------------------------------------------------
    Segment_width_db.statements = {
      //.......................................................................................................
      create_table_segments: SQL`drop table if exists segments;
create table segments (
    segment_text      text    not null primary key,
    segment_width     integer not null,
    segment_length    integer not null,
  constraint segment_width_eqgt_zero  check ( segment_width  >= 0 ),
  constraint segment_length_eqgt_zero check ( segment_length >= 0 ) );`,
      //.......................................................................................................
      insert_segment: SQL`insert into segments  ( segment_text,   segment_width,  segment_length  )
              values  ( $segment_text,  $segment_width, $segment_length )
  on conflict ( segment_text ) do update
              set     (                 segment_width,  segment_length  ) =
                      ( excluded.segment_width, excluded.segment_length );`
    };

    return Segment_width_db;

  }).call(this);

  //===========================================================================================================
  demo = () => {
    var all_segments, cfg, chr, cid, cid_hex, db, db_path, i, idx, insert_segment, j, k, len, ref, segment_length, segment_text, segment_width, some_segments, some_segments_with_widths, tmp_path, ucc, v, x;
    for (k in env_paths) {
      v = env_paths[k];
      debug('Ωnql___2', k, v);
    }
    tmp_path = env_paths.temp;
    db_path = PATH.join(tmp_path, 'chr-widths.sqlite');
    debug('Ωnql___3', mkdirp.sync(tmp_path));
    debug('Ωnql___4', db = new Segment_width_db(db_path));
    //.........................................................................................................
    db.execute(SQL`drop table if exists segments;`);
    db.execute(db.constructor.statements.create_table_segments);
    insert_segment = db.prepare(db.constructor.statements.insert_segment);
    //.........................................................................................................
    all_segments = db.prepare(SQL`select * from segments order by segment_text;`);
    //.........................................................................................................
    db.execute(SQL`begin transaction;`);
    for (cid = i = 0x00_000c; i <= 80; cid = ++i) {
      chr = String.fromCodePoint(cid);
      cid_hex = `U+${(cid.toString(16)).padStart(4, '0')}`;
      chr = String.fromCodePoint(cid);
      ucc = get_rough_unicode_category(chr);
      // debug 'Ωbbsfm___5', cid_hex, ( rpr chr ), ucc
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
    db.execute(SQL`commit;`);
    for (x of all_segments.iterate()) {
      ({segment_text, segment_width, segment_length} = x);
      info('Ωnql___6', rpr(segment_text), segment_width, segment_length);
    }
    //.........................................................................................................
    // some_segments = db.prepare SQL"""select * from segments where segment_text in ( $texts );"""
    // debug 'Ωnql___7', some_segments.run { texts: [ 'a', 'b', ], }
    some_segments = db.prepare(SQL`select * from segments where segment_text in (
select value from json_each(?) );`);
    ref = some_segments.all(JSON.stringify(['a', 'b']));
    // some_segments.setReturnArrays true
    for (idx = j = 0, len = ref.length; j < len; idx = ++j) {
      ({segment_text, segment_width, segment_length} = ref[idx]);
      urge('Ωnql___8', idx, rpr(segment_text), segment_width, segment_length);
    }
    //.........................................................................................................
    cfg = {
      deterministic: true,
      varargs: false
    };
    db.db.function('width_from_text', cfg, function(text) {
      return (Array.from(text)).length;
    });
    some_segments_with_widths = db.prepare(SQL`select
  $text as my_text,
  width_from_text( $text ) as width;`);
    debug('Ωnql___9', some_segments_with_widths.all({
      text: '765'
    }));
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