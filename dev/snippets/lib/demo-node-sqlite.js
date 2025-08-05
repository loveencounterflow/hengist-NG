(async function() {
  'use strict';
  var CP, FS, GTNG, GUY, Node_sqlite, PATH, SFMODULES, SQL, SQLITE, Segment_width_db, Test, alert, blue, bold, debug, demo, echo, env_paths, f, get_command_line_result, get_next_free_filename, get_rough_unicode_category, get_wc_max_line_length, gold, green, grey, help, illegal_codepoint_patterns, info, inspect, log, mkdirp, nfa, on_process_exit, plain, praise, red, reverse, rpr, urge, warn, whisper, white;

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

  ({
    default: on_process_exit
  } = require('exit-hook'));

  ({get_next_free_filename} = SFMODULES.require_next_free_filename());

  FS = require('node:fs');

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

  //-----------------------------------------------------------------------------------------------------------
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
  CP = require('node:child_process');

  //-----------------------------------------------------------------------------------------------------------
  get_command_line_result = function(command, input) {
    return (CP.execSync(command, {
      encoding: 'utf-8',
      input
    })).replace(/\n$/s, '');
  };

  //-----------------------------------------------------------------------------------------------------------
  get_wc_max_line_length = function(text) {
    /* thx to https://unix.stackexchange.com/a/258551/280204 */
    return parseInt(get_command_line_result('wc --max-line-length', text), 10);
  };

  Node_sqlite = (function() {
    //===========================================================================================================
    class Node_sqlite {
      //---------------------------------------------------------------------------------------------------------
      constructor(db_path) {
        var call, clasz, fn_cfg, fn_cfg_template, name, ref;
        this.db = new SQLITE.DatabaseSync(db_path);
        clasz = this.constructor;
        /* NOTE we can't just prepare all the stetments as they depend on DB objects existing or not existing,
           as the case may be. Hence we prepare statements on-demand and cache them here as needed: */
        this.statements = {};
        //.......................................................................................................
        fn_cfg_template = {
          deterministic: true,
          varargs: false
        };
        ref = clasz.functions;
        for (name in ref) {
          fn_cfg = ref[name];
          if ((typeof fn_cfg) === 'function') {
            [call, fn_cfg] = [fn_cfg, {}];
          } else {
            ({call} = fn_cfg);
          }
          fn_cfg = {...fn_cfg_template, fn_cfg};
          call = call.bind(this);
          this.db.function(name, fn_cfg, call);
        }
        // #.......................................................................................................
        // for name, sql of clasz.statements
        //   switch true
        //     when name.startsWith 'create_table_'
        //       null
        //     when name.startsWith 'insert_'
        //       null
        //     else
        //       throw new Error "Ωnql___1 unable to parse statement name #{rpr name}"
        // #   @[ name ] = @prepare sql
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
    Node_sqlite.functions = {};

    Node_sqlite.statements = {};

    return Node_sqlite;

  }).call(this);

  Segment_width_db = (function() {
    //===========================================================================================================
    class Segment_width_db extends Node_sqlite {
      //---------------------------------------------------------------------------------------------------------
      constructor(db_path) {
        var clasz;
        super(db_path);
        clasz = this.constructor;
        this.cache = new Map();
        /* TAINT should be done automatically */
        this.statements = {
          insert_segment: this.prepare(clasz.statements.insert_segment),
          select_row_from_segments: this.prepare(clasz.statements.select_row_from_segments)
        };
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      get_many_segment_metrics(...segment_texts) {
        var R, i, len, row, segment_text;
        segment_texts = segment_texts.flat(2e308);
        R = Object.create(null);
        for (i = 0, len = segment_texts.length; i < len; i++) {
          segment_text = segment_texts[i];
          if ((row = this.cache.get(segment_text)) != null) {
            null;
          } else if ((row = this.statements.select_row_from_segments.get({segment_text})) != null) {
            this.cache.set(segment_text, row);
          } else {
            row = this.statements.insert_segment.get({segment_text});
            this.cache.set(segment_text, row);
          }
          R[segment_text] = row;
        }
        return R;
      }

      //---------------------------------------------------------------------------------------------------------
      get_single_segment_metrics(segment_text) {
        var R, _, ref;
        ref = this.get_many_segment_metrics(segment_text);
        for (_ in ref) {
          R = ref[_];
          return R;
        }
      }

    };

    //---------------------------------------------------------------------------------------------------------
    Segment_width_db.functions = {
      //.......................................................................................................
      width_from_text: {
        deterministic: true,
        varargs: false,
        call: function(text) {
          return get_wc_max_line_length(text);
        }
      },
      //.......................................................................................................
      length_from_text: {
        deterministic: true,
        varargs: false,
        call: function(text) {
          return text.length;
        }
      }
    };

    //---------------------------------------------------------------------------------------------------------
    Segment_width_db.statements = {
      //.......................................................................................................
      create_table_segments: SQL`drop table if exists segments;
create table segments (
    segment_text      text    not null primary key,
    segment_width     integer not null generated always as ( width_from_text(  segment_text ) ) stored,
    segment_length    integer not null generated always as ( length_from_text( segment_text ) ) stored,
  constraint segment_width_eqgt_zero  check ( segment_width  >= 0 ),
  constraint segment_length_eqgt_zero check ( segment_length >= 0 ) );`,
      // #.......................................................................................................
      // insert_segment: SQL"""
      //   insert into segments  ( segment_text,   segment_width,  segment_length  )
      //                 values  ( $segment_text,  $segment_width, $segment_length )
      //     on conflict ( segment_text ) do update
      //                 set     (                 segment_width,  segment_length  ) =
      //                         ( excluded.segment_width, excluded.segment_length );"""
      //.......................................................................................................
      insert_segment: SQL`insert into segments  ( segment_text  )
              values  ( $segment_text )
  on conflict ( segment_text ) do nothing
  returning *;`,
      //.......................................................................................................
      select_row_from_segments: SQL`select * from segments where segment_text = $segment_text limit 1;`
    };

    return Segment_width_db;

  }).call(this);

  //===========================================================================================================
  demo = () => {
    var all_segments, changeset, changeset_final_path, changeset_intermediate_path, chr, cid, cid_hex, count_segments, db, db_path, i, insert_segment, k, segment_length, segment_text, segment_width, session, tmp_path, ucc, v;
    for (k in env_paths) {
      v = env_paths[k];
      debug('Ωnql___2', k, v);
    }
    tmp_path = env_paths.temp;
    db_path = PATH.join(tmp_path, 'chr-widths.sqlite');
    changeset_intermediate_path = get_next_free_filename(db_path);
    changeset_final_path = `${changeset_intermediate_path}.finalized`;
    changeset = null;
    session = null;
    debug('Ωnql___3', mkdirp.sync(tmp_path));
    debug('Ωnql___4', db = new Segment_width_db(db_path));
    on_process_exit(function(...P) {
      if (session == null) {
        return null;
      }
      changeset = session.patchset();
      // changeset = session.changeset()
      /* * to avoid application of unfinished changesets:      */
      /*   * write changeset to intermediate file              */
      FS.writeFileSync(changeset_intermediate_path, changeset);
      help('Ωnql___5', `changeset written to ${changeset_intermediate_path}`);
      /*   * rename intermediate file to final version         */
      FS.renameSync(changeset_intermediate_path, changeset_final_path);
      help('Ωnql___5', `changeset renamed to ${changeset_final_path}`);
      /* * apply changeset to read-only DB                     */
      return null;
    });
    //.........................................................................................................
    db.execute(SQL`drop table if exists segments;`);
    db.execute(db.constructor.statements.create_table_segments);
    insert_segment = db.prepare(db.constructor.statements.insert_segment);
    //.........................................................................................................
    all_segments = db.prepare(SQL`select * from segments order by segment_text;`);
    //.........................................................................................................
    session = db.db.createSession();
    db.execute(SQL`begin transaction;`);
    for (cid = i = 0x00_000c; i <= 80; cid = ++i) {
      chr = String.fromCodePoint(cid);
      cid_hex = `U+${(cid.toString(16)).padStart(4, '0')}`;
      chr = String.fromCodePoint(cid);
      ucc = get_rough_unicode_category(chr);
      // debug 'Ωbbsfm___6', cid_hex, ( rpr chr ), ucc
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
      info('Ωnql___7', insert_segment.all({segment_text}));
    }
    db.execute(SQL`commit;`);
    info('Ωnql___8', insert_segment.all({
      segment_text: "a somewhat longer text"
    }));
    info('Ωnql___9', insert_segment.all({
      segment_text: "a text"
    }));
    info('Ωnql__10', insert_segment.all({
      segment_text: "A"
    }));
    info('Ωnql__11', insert_segment.all({
      segment_text: "9"
    }));
    urge('Ωnql__12', insert_segment.all({
      segment_text: "\n"
    }));
    urge('Ωnql__13', insert_segment.all({
      segment_text: ""
    }));
    urge('Ωnql__14', insert_segment.all({
      segment_text: "$(ls)"
    }));
    count_segments = db.prepare(SQL`select count(*) from segments;`);
    info('Ωnql__15', count_segments.get());
    // for { segment_text, segment_width, segment_length, } from all_segments.iterate()
    //   info 'Ωnql__16', ( rpr segment_text ), segment_width, segment_length
    //.........................................................................................................
    // some_segments = db.prepare SQL"""select * from segments where segment_text in ( $texts );"""
    // debug 'Ωnql__17', some_segments.run { texts: [ 'a', 'b', ], }
    // some_segments = db.prepare SQL"""select * from segments where segment_text in (
    //   select value from json_each(?) );"""
    // some_segments.setReturnArrays true
    // for { segment_text, segment_width, segment_length, }, idx in some_segments.all ( JSON.stringify [ 'a', 'b', ] )
    //   urge 'Ωnql__18', idx, ( rpr segment_text ), segment_width, segment_length
    //.........................................................................................................
    info('Ωnql__19', db.cache.size);
    info('Ωnql__20', db.get_many_segment_metrics('A', 'a somewhat longer text', 'Z'));
    info('Ωnql__21', db.cache.size);
    info('Ωnql__22', db.get_single_segment_metrics('a new text'));
    info('Ωnql__23', db.cache.size);
    info('Ωnql__24', count_segments.get());
    // info 'Ωnql__25', db.cache
    // #.........................................................................................................
    // some_segments_with_widths = db.prepare SQL"""
    //   select
    //     $text as my_text,
    //     width_from_text( $text ) as width;"""
    // debug 'Ωnql__26', some_segments_with_widths.all { text: '765', }
    //.........................................................................................................
    debug('Ωnql__27', (require('node:fs')).writeFileSync('/tmp/changeset.bin', session.patchset()));
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