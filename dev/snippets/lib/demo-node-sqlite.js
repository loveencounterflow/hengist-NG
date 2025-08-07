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

  ({get_next_free_filename} = SFMODULES.unstable.require_next_free_filename());

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
    var all_segments, changeset, changeset_final_path_ins, changeset_intermediate_ins, chr, cid, cid_hex, count_segments, db, db_path, i, insert_segment, k, segment_length, segment_text, segment_width, session, tmp_path, ucc, v;
    for (k in env_paths) {
      v = env_paths[k];
      debug('Ωnql___2', k, v);
    }
    tmp_path = env_paths.temp;
    db_path = PATH.join(tmp_path, 'chr-widths.sqlite');
    changeset_intermediate_ins = `${db_path}.changeset.intermediate`;
    changeset_final_path_ins = `${db_path}.changeset.finalized`;
    changeset = null;
    session = null;
    debug('Ωnql___3', mkdirp.sync(tmp_path));
    debug('Ωnql___4', db = new Segment_width_db(db_path));
    on_process_exit(function(...P) {
      /* * apply changeset to read-only DB                     */
      /*   * rename intermediate file to final version         */
      var ac_cfg, changeset_final_path, changeset_intermediate_path;
      debug('Ωnql___5', `segment count before changeset application: ${count_segments.get().count}`);
      if (session == null) {
        return null;
      }
      changeset = session.patchset();
      // changeset = session.changeset()
      /* * to avoid application of unfinished changesets:      */
      /*   * write changeset to intermediate file              */
      changeset_intermediate_path = get_next_free_filename(changeset_intermediate_ins);
      FS.writeFileSync(changeset_intermediate_path, changeset);
      help('Ωnql___6', `changeset written to ${changeset_intermediate_path}`);
      changeset_final_path = get_next_free_filename(changeset_final_path_ins);
      FS.renameSync(changeset_intermediate_path, changeset_final_path);
      help('Ωnql___7', `changeset renamed to ${changeset_final_path}`);
      ac_cfg = {
        onConflict: function(type_of_change) {
          return SQLITE.constants.SQLITE_CHANGESET_OMIT;
        }
      };
      debug('Ωnql___8', db.db.applyChangeset(FS.readFileSync(changeset_final_path), ac_cfg));
      debug('Ωnql___9', `segment count after changeset application: ${count_segments.get().count}`);
      return null;
    });
    //.........................................................................................................
    db.execute(SQL`drop table if exists segments;`);
    db.execute(db.constructor.statements.create_table_segments);
    insert_segment = db.prepare(db.constructor.statements.insert_segment);
    //.........................................................................................................
    all_segments = db.prepare(SQL`select * from segments order by segment_text;`);
    count_segments = db.prepare(SQL`select count(*) as count from segments;`);
    //.........................................................................................................
    session = db.db.createSession();
    db.execute(SQL`begin transaction;`);
    for (cid = i = 0x00_000c; i <= 80; cid = ++i) {
      chr = String.fromCodePoint(cid);
      cid_hex = `U+${(cid.toString(16)).padStart(4, '0')}`;
      chr = String.fromCodePoint(cid);
      ucc = get_rough_unicode_category(chr);
      // debug 'Ωbbsfm__10', cid_hex, ( rpr chr ), ucc
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
      info('Ωnql__11', insert_segment.all({segment_text}));
    }
    db.execute(SQL`commit;`);
    info('Ωnql__12', insert_segment.all({
      segment_text: "a somewhat longer text"
    }));
    info('Ωnql__13', insert_segment.all({
      segment_text: "a text"
    }));
    info('Ωnql__14', insert_segment.all({
      segment_text: "A"
    }));
    info('Ωnql__15', insert_segment.all({
      segment_text: "9"
    }));
    urge('Ωnql__16', insert_segment.all({
      segment_text: "\n"
    }));
    urge('Ωnql__17', insert_segment.all({
      segment_text: ""
    }));
    urge('Ωnql__18', insert_segment.all({
      segment_text: "$(ls)"
    }));
    // for { segment_text, segment_width, segment_length, } from all_segments.iterate()
    //   info 'Ωnql__19', ( rpr segment_text ), segment_width, segment_length
    //.........................................................................................................
    // some_segments = db.prepare SQL"""select * from segments where segment_text in ( $texts );"""
    // debug 'Ωnql__20', some_segments.run { texts: [ 'a', 'b', ], }
    // some_segments = db.prepare SQL"""select * from segments where segment_text in (
    //   select value from json_each(?) );"""
    // some_segments.setReturnArrays true
    // for { segment_text, segment_width, segment_length, }, idx in some_segments.all ( JSON.stringify [ 'a', 'b', ] )
    //   urge 'Ωnql__21', idx, ( rpr segment_text ), segment_width, segment_length
    //.........................................................................................................
    info('Ωnql__22', db.cache.size);
    info('Ωnql__23', db.get_many_segment_metrics('A', 'a somewhat longer text', 'Z'));
    info('Ωnql__24', db.cache.size);
    info('Ωnql__25', db.get_single_segment_metrics('a new text'));
    info('Ωnql__26', db.get_single_segment_metrics('another new text'));
    info('Ωnql__27', db.get_single_segment_metrics('xxxxxxxxxxxxxxxx'));
    info('Ωnql__28', db.cache.size);
    info('Ωnql__29', count_segments.get());
    // info 'Ωnql__30', db.cache
    // #.........................................................................................................
    // some_segments_with_widths = db.prepare SQL"""
    //   select
    //     $text as my_text,
    //     width_from_text( $text ) as width;"""
    // debug 'Ωnql__31', some_segments_with_widths.all { text: '765', }
    //.........................................................................................................
    debug('Ωnql__32', (require('node:fs')).writeFileSync('/tmp/changeset.bin', session.patchset()));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tbm9kZS1zcWxpdGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQUE7QUFBQSxNQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxXQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLGdCQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxDQUFBLEVBQUEsdUJBQUEsRUFBQSxzQkFBQSxFQUFBLDBCQUFBLEVBQUEsc0JBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsMEJBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLGVBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0Isa0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSw2Q0FBUjs7RUFDNUIsTUFBQSxHQUE0QixPQUFBLENBQVEsUUFBUjs7RUFDNUIsU0FBQSxHQUE0QixDQUFFLE9BQUEsQ0FBUSxXQUFSLENBQUYsQ0FBdUIsQ0FBQyxPQUF4QixDQUFnQyxrQkFBaEM7O0VBQzVCLE1BQUEsR0FBNEIsT0FBQSxDQUFRLGFBQVI7O0VBQzVCLElBQUEsR0FBNEIsT0FBQSxDQUFRLFdBQVI7O0VBQzVCLENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLG9CQUFSLENBQTVCOztFQUNBLENBQUE7SUFBRSxPQUFBLEVBQ0E7RUFERixDQUFBLEdBQzRCLE9BQUEsQ0FBUSxXQUFSLENBRDVCOztFQUVBLENBQUEsQ0FBRSxzQkFBRixDQUFBLEdBQThCLFNBQVMsQ0FBQyxRQUFRLENBQUMsMEJBQW5CLENBQUEsQ0FBOUI7O0VBQ0EsRUFBQSxHQUE0QixPQUFBLENBQVEsU0FBUixFQXZDNUI7OztFQTJDQSwwQkFBQSxHQUNFO0lBQUEsVUFBQSxFQUFZLFdBQVo7SUFDQSxPQUFBLEVBQVksVUFEWjtJQUVBLE1BQUEsRUFBWSxVQUZaO0lBR0EsS0FBQSxFQUFZLFdBSFo7SUFJQSxTQUFBLEVBQVksVUFKWjtJQUtBLElBQUEsRUFBWTtFQUxaLEVBNUNGOzs7OztFQXFEQSwwQkFBQSxHQUE2QixRQUFBLENBQUUsR0FBRixDQUFBO0FBQzdCLFFBQUEsSUFBQSxFQUFBO0lBQUUsS0FBQSxrQ0FBQTs7TUFDRSxJQUFlLE9BQU8sQ0FBQyxJQUFSLENBQWEsR0FBYixDQUFmO0FBQUEsZUFBTyxLQUFQOztJQURGO0FBRUEsV0FBTztFQUhvQixFQXJEN0I7OztFQTREQSxFQUFBLEdBQUssT0FBQSxDQUFRLG9CQUFSLEVBNURMOzs7RUErREEsdUJBQUEsR0FBMEIsUUFBQSxDQUFFLE9BQUYsRUFBVyxLQUFYLENBQUE7QUFDeEIsV0FBTyxDQUFFLEVBQUUsQ0FBQyxRQUFILENBQVksT0FBWixFQUFxQjtNQUFFLFFBQUEsRUFBVSxPQUFaO01BQXFCO0lBQXJCLENBQXJCLENBQUYsQ0FBc0QsQ0FBQyxPQUF2RCxDQUErRCxNQUEvRCxFQUF1RSxFQUF2RTtFQURpQixFQS9EMUI7OztFQW1FQSxzQkFBQSxHQUF5QixRQUFBLENBQUUsSUFBRixDQUFBLEVBQUE7O0FBRXZCLFdBQU8sUUFBQSxDQUFXLHVCQUFBLENBQXdCLHNCQUF4QixFQUFnRCxJQUFoRCxDQUFYLEVBQW1FLEVBQW5FO0VBRmdCOztFQU1uQjs7SUFBTixNQUFBLFlBQUEsQ0FBQTs7TUFPRSxXQUFhLENBQUUsT0FBRixDQUFBO0FBQ2YsWUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxlQUFBLEVBQUEsSUFBQSxFQUFBO1FBQUksSUFBQyxDQUFBLEVBQUQsR0FBc0IsSUFBSSxNQUFNLENBQUMsWUFBWCxDQUF3QixPQUF4QjtRQUN0QixLQUFBLEdBQXNCLElBQUMsQ0FBQSxZQUQzQjs7O1FBSUksSUFBQyxDQUFBLFVBQUQsR0FBc0IsQ0FBQSxFQUoxQjs7UUFNSSxlQUFBLEdBQWtCO1VBQUUsYUFBQSxFQUFlLElBQWpCO1VBQXVCLE9BQUEsRUFBUztRQUFoQztBQUNsQjtRQUFBLEtBQUEsV0FBQTs7VUFDRSxJQUFHLENBQUUsT0FBTyxNQUFULENBQUEsS0FBcUIsVUFBeEI7WUFDRSxDQUFFLElBQUYsRUFBUSxNQUFSLENBQUEsR0FBb0IsQ0FBRSxNQUFGLEVBQVUsQ0FBQSxDQUFWLEVBRHRCO1dBQUEsTUFBQTtZQUdFLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBWSxNQUFaLEVBSEY7O1VBSUEsTUFBQSxHQUFVLENBQUUsR0FBQSxlQUFGLEVBQXNCLE1BQXRCO1VBQ1YsSUFBQSxHQUFVLElBQUksQ0FBQyxJQUFMLENBQVUsSUFBVjtVQUNWLElBQUMsQ0FBQSxFQUFFLENBQUMsUUFBSixDQUFhLElBQWIsRUFBbUIsTUFBbkIsRUFBMkIsSUFBM0I7UUFQRixDQVBKOzs7Ozs7Ozs7OztBQXlCSSxlQUFPO01BMUJJLENBTGY7OztNQWtDRSxPQUFTLENBQUUsR0FBRixDQUFBO2VBQVcsSUFBQyxDQUFBLEVBQUUsQ0FBQyxJQUFKLENBQVMsR0FBVDtNQUFYLENBbENYOzs7TUFxQ0UsT0FBUyxDQUFFLEdBQUYsQ0FBQTtlQUFXLElBQUMsQ0FBQSxFQUFFLENBQUMsT0FBSixDQUFZLEdBQVo7TUFBWDs7SUF2Q1g7OztJQUdFLFdBQUMsQ0FBQSxTQUFELEdBQVksQ0FBQTs7SUFDWixXQUFDLENBQUEsVUFBRCxHQUFhLENBQUE7Ozs7OztFQXVDVDs7SUFBTixNQUFBLGlCQUFBLFFBQStCLFlBQS9CLENBQUE7O01BNENFLFdBQWEsQ0FBRSxPQUFGLENBQUE7QUFDZixZQUFBO2FBQUksQ0FBTSxPQUFOO1FBQ0EsS0FBQSxHQUFVLElBQUMsQ0FBQTtRQUNYLElBQUMsQ0FBQSxLQUFELEdBQVUsSUFBSSxHQUFKLENBQUEsRUFGZDs7UUFJSSxJQUFDLENBQUEsVUFBRCxHQUNFO1VBQUEsY0FBQSxFQUEwQixJQUFDLENBQUEsT0FBRCxDQUFTLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBMUIsQ0FBMUI7VUFDQSx3QkFBQSxFQUEwQixJQUFDLENBQUEsT0FBRCxDQUFTLEtBQUssQ0FBQyxVQUFVLENBQUMsd0JBQTFCO1FBRDFCO0FBRUYsZUFBTztNQVJJLENBMUNmOzs7TUFxREUsd0JBQTBCLENBQUEsR0FBRSxhQUFGLENBQUE7QUFDNUIsWUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUE7UUFDSSxhQUFBLEdBQWdCLGFBQWEsQ0FBQyxJQUFkLENBQW1CLEtBQW5CO1FBQ2hCLENBQUEsR0FBSSxNQUFNLENBQUMsTUFBUCxDQUFjLElBQWQ7UUFDSixLQUFBLCtDQUFBOztVQUNFLElBQUcsNENBQUg7WUFDRSxLQURGO1dBQUEsTUFFSyxJQUFHLDRFQUFIO1lBQ0gsSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUFQLENBQVcsWUFBWCxFQUF5QixHQUF6QixFQURHO1dBQUEsTUFBQTtZQUdILEdBQUEsR0FBTSxJQUFDLENBQUEsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUEzQixDQUErQixDQUFFLFlBQUYsQ0FBL0I7WUFDTixJQUFDLENBQUEsS0FBSyxDQUFDLEdBQVAsQ0FBVyxZQUFYLEVBQXlCLEdBQXpCLEVBSkc7O1VBS0wsQ0FBQyxDQUFFLFlBQUYsQ0FBRCxHQUFvQjtRQVJ0QjtBQVNBLGVBQU87TUFiaUIsQ0FyRDVCOzs7TUFxRUUsMEJBQTRCLENBQUUsWUFBRixDQUFBO0FBQW1CLFlBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQTtBQUFDO1FBQUEsS0FBQSxRQUFBOztBQUFBLGlCQUFPO1FBQVA7TUFBcEI7O0lBdkU5Qjs7O0lBR0UsZ0JBQUMsQ0FBQSxTQUFELEdBRUUsQ0FBQTs7TUFBQSxlQUFBLEVBQ0U7UUFBQSxhQUFBLEVBQWdCLElBQWhCO1FBQ0EsT0FBQSxFQUFnQixLQURoQjtRQUVBLElBQUEsRUFBZ0IsUUFBQSxDQUFFLElBQUYsQ0FBQTtpQkFBWSxzQkFBQSxDQUF1QixJQUF2QjtRQUFaO01BRmhCLENBREY7O01BS0EsZ0JBQUEsRUFDRTtRQUFBLGFBQUEsRUFBZ0IsSUFBaEI7UUFDQSxPQUFBLEVBQWdCLEtBRGhCO1FBRUEsSUFBQSxFQUFnQixRQUFBLENBQUUsSUFBRixDQUFBO2lCQUFZLElBQUksQ0FBQztRQUFqQjtNQUZoQjtJQU5GOzs7SUFXRixnQkFBQyxDQUFBLFVBQUQsR0FFRSxDQUFBOztNQUFBLHFCQUFBLEVBQXVCLEdBQUcsQ0FBQTs7Ozs7O3NFQUFBLENBQTFCOzs7Ozs7Ozs7TUFnQkEsY0FBQSxFQUFnQixHQUFHLENBQUE7OztjQUFBLENBaEJuQjs7TUFzQkEsd0JBQUEsRUFBMEIsR0FBRyxDQUFBLGtFQUFBO0lBdEI3Qjs7OztnQkF0SUo7OztFQStMQSxJQUFBLEdBQU8sQ0FBQSxDQUFBLEdBQUE7QUFDUCxRQUFBLFlBQUEsRUFBQSxTQUFBLEVBQUEsd0JBQUEsRUFBQSwwQkFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLGNBQUEsRUFBQSxFQUFBLEVBQUEsT0FBQSxFQUFBLENBQUEsRUFBQSxjQUFBLEVBQUEsQ0FBQSxFQUFBLGNBQUEsRUFBQSxZQUFBLEVBQUEsYUFBQSxFQUFBLE9BQUEsRUFBQSxRQUFBLEVBQUEsR0FBQSxFQUFBO0lBQUUsS0FBQSxjQUFBOztNQUFBLEtBQUEsQ0FBTSxVQUFOLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCO0lBQUE7SUFDQSxRQUFBLEdBQThCLFNBQVMsQ0FBQztJQUN4QyxPQUFBLEdBQThCLElBQUksQ0FBQyxJQUFMLENBQVUsUUFBVixFQUFvQixtQkFBcEI7SUFDOUIsMEJBQUEsR0FBOEIsQ0FBQSxDQUFBLENBQUcsT0FBSCxDQUFBLHVCQUFBO0lBQzlCLHdCQUFBLEdBQThCLENBQUEsQ0FBQSxDQUFHLE9BQUgsQ0FBQSxvQkFBQTtJQUM5QixTQUFBLEdBQThCO0lBQzlCLE9BQUEsR0FBOEI7SUFDOUIsS0FBQSxDQUFNLFVBQU4sRUFBa0IsTUFBTSxDQUFDLElBQVAsQ0FBWSxRQUFaLENBQWxCO0lBQ0EsS0FBQSxDQUFNLFVBQU4sRUFBa0IsRUFBQSxHQUFLLElBQUksZ0JBQUosQ0FBcUIsT0FBckIsQ0FBdkI7SUFDQSxlQUFBLENBQWdCLFFBQUEsQ0FBQSxHQUFFLENBQUYsQ0FBQSxFQUFBOzs7QUFDbEIsVUFBQSxNQUFBLEVBQUEsb0JBQUEsRUFBQTtNQUFJLEtBQUEsQ0FBTSxVQUFOLEVBQWtCLENBQUEsNENBQUEsQ0FBQSxDQUErQyxjQUFjLENBQUMsR0FBZixDQUFBLENBQW9CLENBQUMsS0FBcEUsQ0FBQSxDQUFsQjtNQUNBLElBQW1CLGVBQW5CO0FBQUEsZUFBTyxLQUFQOztNQUVBLFNBQUEsR0FBWSxPQUFPLENBQUMsUUFBUixDQUFBLEVBSGhCOzs7O01BT0ksMkJBQUEsR0FBOEIsc0JBQUEsQ0FBdUIsMEJBQXZCO01BQzlCLEVBQUUsQ0FBQyxhQUFILENBQWlCLDJCQUFqQixFQUE4QyxTQUE5QztNQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLENBQUEscUJBQUEsQ0FBQSxDQUF3QiwyQkFBeEIsQ0FBQSxDQUFqQjtNQUVBLG9CQUFBLEdBQXVCLHNCQUFBLENBQXVCLHdCQUF2QjtNQUN2QixFQUFFLENBQUMsVUFBSCxDQUFjLDJCQUFkLEVBQTJDLG9CQUEzQztNQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLENBQUEscUJBQUEsQ0FBQSxDQUF3QixvQkFBeEIsQ0FBQSxDQUFqQjtNQUVBLE1BQUEsR0FDRTtRQUFBLFVBQUEsRUFBWSxRQUFBLENBQUUsY0FBRixDQUFBO2lCQUFzQixNQUFNLENBQUMsU0FBUyxDQUFDO1FBQXZDO01BQVo7TUFDRixLQUFBLENBQU0sVUFBTixFQUFrQixFQUFFLENBQUMsRUFBRSxDQUFDLGNBQU4sQ0FBdUIsRUFBRSxDQUFDLFlBQUgsQ0FBZ0Isb0JBQWhCLENBQXZCLEVBQStELE1BQS9ELENBQWxCO01BQ0EsS0FBQSxDQUFNLFVBQU4sRUFBa0IsQ0FBQSwyQ0FBQSxDQUFBLENBQThDLGNBQWMsQ0FBQyxHQUFmLENBQUEsQ0FBb0IsQ0FBQyxLQUFuRSxDQUFBLENBQWxCO0FBQ0EsYUFBTztJQXBCTyxDQUFoQixFQVRGOztJQStCRSxFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQSw4QkFBQSxDQUFkO0lBQ0EsRUFBRSxDQUFDLE9BQUgsQ0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxxQkFBckM7SUFDQSxjQUFBLEdBQWlCLEVBQUUsQ0FBQyxPQUFILENBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBckMsRUFqQ25COztJQW1DRSxZQUFBLEdBQWtCLEVBQUUsQ0FBQyxPQUFILENBQVcsR0FBRyxDQUFBLDZDQUFBLENBQWQ7SUFDbEIsY0FBQSxHQUFrQixFQUFFLENBQUMsT0FBSCxDQUFXLEdBQUcsQ0FBQSx1Q0FBQSxDQUFkLEVBcENwQjs7SUFzQ0UsT0FBQSxHQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBTixDQUFBO0lBQ1YsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUEsa0JBQUEsQ0FBZDtJQUNBLEtBQVcsdUNBQVg7TUFDRSxHQUFBLEdBQVUsTUFBTSxDQUFDLGFBQVAsQ0FBcUIsR0FBckI7TUFDVixPQUFBLEdBQVUsQ0FBQSxFQUFBLENBQUEsQ0FBSyxDQUFFLEdBQUcsQ0FBQyxRQUFKLENBQWEsRUFBYixDQUFGLENBQW1CLENBQUMsUUFBcEIsQ0FBNkIsQ0FBN0IsRUFBZ0MsR0FBaEMsQ0FBTCxDQUFBO01BQ1YsR0FBQSxHQUFVLE1BQU0sQ0FBQyxhQUFQLENBQXFCLEdBQXJCO01BQ1YsR0FBQSxHQUFVLDBCQUFBLENBQTJCLEdBQTNCLEVBSGQ7O01BS0ksWUFBQSxHQUFrQjtNQUNsQixhQUFBLEdBQWtCO01BQ2xCLGNBQUEsR0FBa0I7QUFDbEIsY0FBTyxHQUFQO0FBQUEsYUFDTyxTQURQO1VBRUksYUFBQSxHQUFrQjtVQUNsQixjQUFBLEdBQWtCO0FBRmY7QUFEUCxhQUlPLFdBSlA7VUFLSSxhQUFBLEdBQWtCO1VBQ2xCLGNBQUEsR0FBa0I7QUFGZjtBQUpQO1VBUUksYUFBQSxHQUFrQixDQUFFO1VBQ3BCLGNBQUEsR0FBa0I7QUFUdEI7TUFVQSxJQUFBLENBQUssVUFBTCxFQUFpQixjQUFjLENBQUMsR0FBZixDQUFtQixDQUFFLFlBQUYsQ0FBbkIsQ0FBakI7SUFuQkY7SUFvQkEsRUFBRSxDQUFDLE9BQUgsQ0FBVyxHQUFHLENBQUEsT0FBQSxDQUFkO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsY0FBYyxDQUFDLEdBQWYsQ0FBbUI7TUFBRSxZQUFBLEVBQWM7SUFBaEIsQ0FBbkIsQ0FBakI7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixjQUFjLENBQUMsR0FBZixDQUFtQjtNQUFFLFlBQUEsRUFBYztJQUFoQixDQUFuQixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLGNBQWMsQ0FBQyxHQUFmLENBQW1CO01BQUUsWUFBQSxFQUFjO0lBQWhCLENBQW5CLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsY0FBYyxDQUFDLEdBQWYsQ0FBbUI7TUFBRSxZQUFBLEVBQWM7SUFBaEIsQ0FBbkIsQ0FBakI7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixjQUFjLENBQUMsR0FBZixDQUFtQjtNQUFFLFlBQUEsRUFBYztJQUFoQixDQUFuQixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLGNBQWMsQ0FBQyxHQUFmLENBQW1CO01BQUUsWUFBQSxFQUFjO0lBQWhCLENBQW5CLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsY0FBYyxDQUFDLEdBQWYsQ0FBbUI7TUFBRSxZQUFBLEVBQWM7SUFBaEIsQ0FBbkIsQ0FBakIsRUFuRUY7Ozs7Ozs7Ozs7OztJQStFRSxJQUFBLENBQUssVUFBTCxFQUFpQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQTFCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsRUFBRSxDQUFDLHdCQUFILENBQTRCLEdBQTVCLEVBQWlDLHdCQUFqQyxFQUEyRCxHQUEzRCxDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBMUI7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixFQUFFLENBQUMsMEJBQUgsQ0FBOEIsWUFBOUIsQ0FBakI7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixFQUFFLENBQUMsMEJBQUgsQ0FBOEIsa0JBQTlCLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsRUFBRSxDQUFDLDBCQUFILENBQThCLGtCQUE5QixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBMUI7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixjQUFjLENBQUMsR0FBZixDQUFBLENBQWpCLEVBdEZGOzs7Ozs7Ozs7SUErRkUsS0FBQSxDQUFNLFVBQU4sRUFBa0IsQ0FBRSxPQUFBLENBQVEsU0FBUixDQUFGLENBQXFCLENBQUMsYUFBdEIsQ0FBb0Msb0JBQXBDLEVBQTBELE9BQU8sQ0FBQyxRQUFSLENBQUEsQ0FBMUQsQ0FBbEIsRUEvRkY7O0FBaUdFLFdBQU87RUFsR0YsRUEvTFA7OztFQW9TQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUE7TUFDdEMsTUFBTSxJQUFBLENBQUE7QUFDTixhQUFPO0lBRitCLENBQUEsSUFBeEM7O0FBcFNBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2RlbW8tbm9kZS1zcWxpdGUnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcbm1rZGlycCAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdta2RpcnAnXG5lbnZfcGF0aHMgICAgICAgICAgICAgICAgID0gKCByZXF1aXJlICdlbnYtcGF0aHMnICkuZGVmYXVsdCAnZGVtby1ub2RlLXNxbGl0ZSdcblNRTElURSAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnNxbGl0ZSdcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG57IFNRTCB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9kYmF5J1xueyBkZWZhdWx0OiBcXFxuICBvbl9wcm9jZXNzX2V4aXQsICAgICAgfSA9IHJlcXVpcmUgJ2V4aXQtaG9vaydcbnsgZ2V0X25leHRfZnJlZV9maWxlbmFtZSwgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX25leHRfZnJlZV9maWxlbmFtZSgpXG5GUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlsbGVnYWxfY29kZXBvaW50X3BhdHRlcm5zID1cbiAgdW5hc3NpZ25lZDogLy8vXlxccHtDbn0kLy8vdiAjIENvbnRyb2xcbiAgY29udHJvbDogICAgLy8vXlxccHtDfSQvLy92ICMgQ29udHJvbFxuICBsZXR0ZXI6ICAgICAvLy9eXFxwe0x9JC8vL3ZcbiAgc3BhY2U6ICAgICAgLy8vXlxccHtac30kLy8vdlxuICBzZXBhcmF0b3I6ICAvLy9eXFxwe1p9JC8vL3ZcbiAgbWFyazogICAgICAgLy8vXlxccHtNfSQvLy92XG4gICMgc3Vycm9nYXRlOiAgLy8vXlxccHtDfSQvLy92ICMgU3Vycm9nYXRlXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZ2V0X3JvdWdoX3VuaWNvZGVfY2F0ZWdvcnkgPSAoIGNociApIC0+XG4gIGZvciBuYW1lLCBwYXR0ZXJuIG9mIGlsbGVnYWxfY29kZXBvaW50X3BhdHRlcm5zXG4gICAgcmV0dXJuIG5hbWUgaWYgcGF0dGVybi50ZXN0IGNoclxuICByZXR1cm4gJ290aGVyJ1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQ1AgPSByZXF1aXJlICdub2RlOmNoaWxkX3Byb2Nlc3MnXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZ2V0X2NvbW1hbmRfbGluZV9yZXN1bHQgPSAoIGNvbW1hbmQsIGlucHV0ICkgLT5cbiAgcmV0dXJuICggQ1AuZXhlY1N5bmMgY29tbWFuZCwgeyBlbmNvZGluZzogJ3V0Zi04JywgaW5wdXQsIH0gKS5yZXBsYWNlIC9cXG4kL3MsICcnXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZ2V0X3djX21heF9saW5lX2xlbmd0aCA9ICggdGV4dCApIC0+XG4gICMjIyB0aHggdG8gaHR0cHM6Ly91bml4LnN0YWNrZXhjaGFuZ2UuY29tL2EvMjU4NTUxLzI4MDIwNCAjIyNcbiAgcmV0dXJuIHBhcnNlSW50ICggZ2V0X2NvbW1hbmRfbGluZV9yZXN1bHQgJ3djIC0tbWF4LWxpbmUtbGVuZ3RoJywgdGV4dCApLCAxMFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY2xhc3MgTm9kZV9zcWxpdGVcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEBmdW5jdGlvbnM6IHt9XG4gIEBzdGF0ZW1lbnRzOiB7fVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3RydWN0b3I6ICggZGJfcGF0aCApIC0+XG4gICAgQGRiICAgICAgICAgICAgICAgICA9IG5ldyBTUUxJVEUuRGF0YWJhc2VTeW5jIGRiX3BhdGhcbiAgICBjbGFzeiAgICAgICAgICAgICAgID0gQGNvbnN0cnVjdG9yXG4gICAgIyMjIE5PVEUgd2UgY2FuJ3QganVzdCBwcmVwYXJlIGFsbCB0aGUgc3RldG1lbnRzIGFzIHRoZXkgZGVwZW5kIG9uIERCIG9iamVjdHMgZXhpc3Rpbmcgb3Igbm90IGV4aXN0aW5nLFxuICAgIGFzIHRoZSBjYXNlIG1heSBiZS4gSGVuY2Ugd2UgcHJlcGFyZSBzdGF0ZW1lbnRzIG9uLWRlbWFuZCBhbmQgY2FjaGUgdGhlbSBoZXJlIGFzIG5lZWRlZDogIyMjXG4gICAgQHN0YXRlbWVudHMgICAgICAgICA9IHt9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmbl9jZmdfdGVtcGxhdGUgPSB7IGRldGVybWluaXN0aWM6IHRydWUsIHZhcmFyZ3M6IGZhbHNlLCB9XG4gICAgZm9yIG5hbWUsIGZuX2NmZyBvZiBjbGFzei5mdW5jdGlvbnNcbiAgICAgIGlmICggdHlwZW9mIGZuX2NmZyApIGlzICdmdW5jdGlvbidcbiAgICAgICAgWyBjYWxsLCBmbl9jZmcsIF0gPSBbIGZuX2NmZywge30sIF1cbiAgICAgIGVsc2VcbiAgICAgICAgeyBjYWxsLCB9ID0gZm5fY2ZnXG4gICAgICBmbl9jZmcgID0geyBmbl9jZmdfdGVtcGxhdGUuLi4sIGZuX2NmZywgfVxuICAgICAgY2FsbCAgICA9IGNhbGwuYmluZCBAXG4gICAgICBAZGIuZnVuY3Rpb24gbmFtZSwgZm5fY2ZnLCBjYWxsXG4gICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgZm9yIG5hbWUsIHNxbCBvZiBjbGFzei5zdGF0ZW1lbnRzXG4gICAgIyAgIHN3aXRjaCB0cnVlXG4gICAgIyAgICAgd2hlbiBuYW1lLnN0YXJ0c1dpdGggJ2NyZWF0ZV90YWJsZV8nXG4gICAgIyAgICAgICBudWxsXG4gICAgIyAgICAgd2hlbiBuYW1lLnN0YXJ0c1dpdGggJ2luc2VydF8nXG4gICAgIyAgICAgICBudWxsXG4gICAgIyAgICAgZWxzZVxuICAgICMgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlucWxfX18xIHVuYWJsZSB0byBwYXJzZSBzdGF0ZW1lbnQgbmFtZSAje3JwciBuYW1lfVwiXG4gICAgIyAjICAgQFsgbmFtZSBdID0gQHByZXBhcmUgc3FsXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZXhlY3V0ZTogKCBzcWwgKSAtPiBAZGIuZXhlYyBzcWxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByZXBhcmU6ICggc3FsICkgLT4gQGRiLnByZXBhcmUgc3FsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jbGFzcyBTZWdtZW50X3dpZHRoX2RiIGV4dGVuZHMgTm9kZV9zcWxpdGVcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEBmdW5jdGlvbnM6XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB3aWR0aF9mcm9tX3RleHQ6XG4gICAgICBkZXRlcm1pbmlzdGljOiAgdHJ1ZVxuICAgICAgdmFyYXJnczogICAgICAgIGZhbHNlXG4gICAgICBjYWxsOiAgICAgICAgICAgKCB0ZXh0ICkgLT4gZ2V0X3djX21heF9saW5lX2xlbmd0aCB0ZXh0XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBsZW5ndGhfZnJvbV90ZXh0OlxuICAgICAgZGV0ZXJtaW5pc3RpYzogIHRydWVcbiAgICAgIHZhcmFyZ3M6ICAgICAgICBmYWxzZVxuICAgICAgY2FsbDogICAgICAgICAgICggdGV4dCApIC0+IHRleHQubGVuZ3RoXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBAc3RhdGVtZW50czpcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNyZWF0ZV90YWJsZV9zZWdtZW50czogU1FMXCJcIlwiXG4gICAgICBkcm9wIHRhYmxlIGlmIGV4aXN0cyBzZWdtZW50cztcbiAgICAgIGNyZWF0ZSB0YWJsZSBzZWdtZW50cyAoXG4gICAgICAgICAgc2VnbWVudF90ZXh0ICAgICAgdGV4dCAgICBub3QgbnVsbCBwcmltYXJ5IGtleSxcbiAgICAgICAgICBzZWdtZW50X3dpZHRoICAgICBpbnRlZ2VyIG5vdCBudWxsIGdlbmVyYXRlZCBhbHdheXMgYXMgKCB3aWR0aF9mcm9tX3RleHQoICBzZWdtZW50X3RleHQgKSApIHN0b3JlZCxcbiAgICAgICAgICBzZWdtZW50X2xlbmd0aCAgICBpbnRlZ2VyIG5vdCBudWxsIGdlbmVyYXRlZCBhbHdheXMgYXMgKCBsZW5ndGhfZnJvbV90ZXh0KCBzZWdtZW50X3RleHQgKSApIHN0b3JlZCxcbiAgICAgICAgY29uc3RyYWludCBzZWdtZW50X3dpZHRoX2VxZ3RfemVybyAgY2hlY2sgKCBzZWdtZW50X3dpZHRoICA+PSAwICksXG4gICAgICAgIGNvbnN0cmFpbnQgc2VnbWVudF9sZW5ndGhfZXFndF96ZXJvIGNoZWNrICggc2VnbWVudF9sZW5ndGggPj0gMCApICk7XCJcIlwiXG4gICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgaW5zZXJ0X3NlZ21lbnQ6IFNRTFwiXCJcIlxuICAgICMgICBpbnNlcnQgaW50byBzZWdtZW50cyAgKCBzZWdtZW50X3RleHQsICAgc2VnbWVudF93aWR0aCwgIHNlZ21lbnRfbGVuZ3RoICApXG4gICAgIyAgICAgICAgICAgICAgICAgdmFsdWVzICAoICRzZWdtZW50X3RleHQsICAkc2VnbWVudF93aWR0aCwgJHNlZ21lbnRfbGVuZ3RoIClcbiAgICAjICAgICBvbiBjb25mbGljdCAoIHNlZ21lbnRfdGV4dCApIGRvIHVwZGF0ZVxuICAgICMgICAgICAgICAgICAgICAgIHNldCAgICAgKCAgICAgICAgICAgICAgICAgc2VnbWVudF93aWR0aCwgIHNlZ21lbnRfbGVuZ3RoICApID1cbiAgICAjICAgICAgICAgICAgICAgICAgICAgICAgICggZXhjbHVkZWQuc2VnbWVudF93aWR0aCwgZXhjbHVkZWQuc2VnbWVudF9sZW5ndGggKTtcIlwiXCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGluc2VydF9zZWdtZW50OiBTUUxcIlwiXCJcbiAgICAgIGluc2VydCBpbnRvIHNlZ21lbnRzICAoIHNlZ21lbnRfdGV4dCAgKVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgICggJHNlZ21lbnRfdGV4dCApXG4gICAgICAgIG9uIGNvbmZsaWN0ICggc2VnbWVudF90ZXh0ICkgZG8gbm90aGluZ1xuICAgICAgICByZXR1cm5pbmcgKjtcIlwiXCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHNlbGVjdF9yb3dfZnJvbV9zZWdtZW50czogU1FMXCJcIlwiXG4gICAgICBzZWxlY3QgKiBmcm9tIHNlZ21lbnRzIHdoZXJlIHNlZ21lbnRfdGV4dCA9ICRzZWdtZW50X3RleHQgbGltaXQgMTtcIlwiXCJcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0cnVjdG9yOiAoIGRiX3BhdGggKSAtPlxuICAgIHN1cGVyIGRiX3BhdGhcbiAgICBjbGFzeiAgID0gQGNvbnN0cnVjdG9yXG4gICAgQGNhY2hlICA9IG5ldyBNYXAoKVxuICAgICMjIyBUQUlOVCBzaG91bGQgYmUgZG9uZSBhdXRvbWF0aWNhbGx5ICMjI1xuICAgIEBzdGF0ZW1lbnRzID1cbiAgICAgIGluc2VydF9zZWdtZW50OiAgICAgICAgICAgQHByZXBhcmUgY2xhc3ouc3RhdGVtZW50cy5pbnNlcnRfc2VnbWVudFxuICAgICAgc2VsZWN0X3Jvd19mcm9tX3NlZ21lbnRzOiBAcHJlcGFyZSBjbGFzei5zdGF0ZW1lbnRzLnNlbGVjdF9yb3dfZnJvbV9zZWdtZW50c1xuICAgIHJldHVybiB1bmRlZmluZWRcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldF9tYW55X3NlZ21lbnRfbWV0cmljczogKCBzZWdtZW50X3RleHRzLi4uICkgLT5cbiAgICAjIyMgVEFJTlQgY29uc2lkZXIgYnVuZGxpbmcgcmVxdWVzdHMgaW50byBzaW5nbGUgb25lIHVzaW5nIEpTT04gYXJyYXkgIyMjXG4gICAgc2VnbWVudF90ZXh0cyA9IHNlZ21lbnRfdGV4dHMuZmxhdCBJbmZpbml0eVxuICAgIFIgPSBPYmplY3QuY3JlYXRlIG51bGxcbiAgICBmb3Igc2VnbWVudF90ZXh0IGluIHNlZ21lbnRfdGV4dHNcbiAgICAgIGlmICggcm93ID0gQGNhY2hlLmdldCBzZWdtZW50X3RleHQgKT9cbiAgICAgICAgbnVsbFxuICAgICAgZWxzZSBpZiAoIHJvdyA9IEBzdGF0ZW1lbnRzLnNlbGVjdF9yb3dfZnJvbV9zZWdtZW50cy5nZXQgeyBzZWdtZW50X3RleHQsIH0gKT9cbiAgICAgICAgQGNhY2hlLnNldCBzZWdtZW50X3RleHQsIHJvd1xuICAgICAgZWxzZVxuICAgICAgICByb3cgPSBAc3RhdGVtZW50cy5pbnNlcnRfc2VnbWVudC5nZXQgeyBzZWdtZW50X3RleHQsIH1cbiAgICAgICAgQGNhY2hlLnNldCBzZWdtZW50X3RleHQsIHJvd1xuICAgICAgUlsgc2VnbWVudF90ZXh0IF0gPSByb3dcbiAgICByZXR1cm4gUlxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3NpbmdsZV9zZWdtZW50X21ldHJpY3M6ICggc2VnbWVudF90ZXh0ICkgLT4gcmV0dXJuIFIgZm9yIF8sIFIgb2YgQGdldF9tYW55X3NlZ21lbnRfbWV0cmljcyBzZWdtZW50X3RleHRcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW8gPSA9PlxuICBkZWJ1ZyAnzqlucWxfX18yJywgaywgdiBmb3IgaywgdiBvZiBlbnZfcGF0aHNcbiAgdG1wX3BhdGggICAgICAgICAgICAgICAgICAgID0gZW52X3BhdGhzLnRlbXBcbiAgZGJfcGF0aCAgICAgICAgICAgICAgICAgICAgID0gUEFUSC5qb2luIHRtcF9wYXRoLCAnY2hyLXdpZHRocy5zcWxpdGUnXG4gIGNoYW5nZXNldF9pbnRlcm1lZGlhdGVfaW5zICA9IFwiI3tkYl9wYXRofS5jaGFuZ2VzZXQuaW50ZXJtZWRpYXRlXCJcbiAgY2hhbmdlc2V0X2ZpbmFsX3BhdGhfaW5zICAgID0gXCIje2RiX3BhdGh9LmNoYW5nZXNldC5maW5hbGl6ZWRcIlxuICBjaGFuZ2VzZXQgICAgICAgICAgICAgICAgICAgPSBudWxsXG4gIHNlc3Npb24gICAgICAgICAgICAgICAgICAgICA9IG51bGxcbiAgZGVidWcgJ86pbnFsX19fMycsIG1rZGlycC5zeW5jIHRtcF9wYXRoXG4gIGRlYnVnICfOqW5xbF9fXzQnLCBkYiA9IG5ldyBTZWdtZW50X3dpZHRoX2RiIGRiX3BhdGhcbiAgb25fcHJvY2Vzc19leGl0ICggUC4uLiApIC0+XG4gICAgZGVidWcgJ86pbnFsX19fNScsIFwic2VnbWVudCBjb3VudCBiZWZvcmUgY2hhbmdlc2V0IGFwcGxpY2F0aW9uOiAje2NvdW50X3NlZ21lbnRzLmdldCgpLmNvdW50fVwiXG4gICAgcmV0dXJuIG51bGwgdW5sZXNzIHNlc3Npb24/XG4gICAgIyMjICogb2J0YWluIGNoYW5nZXNldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMjI1xuICAgIGNoYW5nZXNldCA9IHNlc3Npb24ucGF0Y2hzZXQoKVxuICAgICMgY2hhbmdlc2V0ID0gc2Vzc2lvbi5jaGFuZ2VzZXQoKVxuICAgICMjIyAqIHRvIGF2b2lkIGFwcGxpY2F0aW9uIG9mIHVuZmluaXNoZWQgY2hhbmdlc2V0czogICAgICAjIyNcbiAgICAjIyMgICAqIHdyaXRlIGNoYW5nZXNldCB0byBpbnRlcm1lZGlhdGUgZmlsZSAgICAgICAgICAgICAgIyMjXG4gICAgY2hhbmdlc2V0X2ludGVybWVkaWF0ZV9wYXRoID0gZ2V0X25leHRfZnJlZV9maWxlbmFtZSBjaGFuZ2VzZXRfaW50ZXJtZWRpYXRlX2luc1xuICAgIEZTLndyaXRlRmlsZVN5bmMgY2hhbmdlc2V0X2ludGVybWVkaWF0ZV9wYXRoLCBjaGFuZ2VzZXRcbiAgICBoZWxwICfOqW5xbF9fXzYnLCBcImNoYW5nZXNldCB3cml0dGVuIHRvICN7Y2hhbmdlc2V0X2ludGVybWVkaWF0ZV9wYXRofVwiXG4gICAgIyMjICAgKiByZW5hbWUgaW50ZXJtZWRpYXRlIGZpbGUgdG8gZmluYWwgdmVyc2lvbiAgICAgICAgICMjI1xuICAgIGNoYW5nZXNldF9maW5hbF9wYXRoID0gZ2V0X25leHRfZnJlZV9maWxlbmFtZSBjaGFuZ2VzZXRfZmluYWxfcGF0aF9pbnNcbiAgICBGUy5yZW5hbWVTeW5jIGNoYW5nZXNldF9pbnRlcm1lZGlhdGVfcGF0aCwgY2hhbmdlc2V0X2ZpbmFsX3BhdGhcbiAgICBoZWxwICfOqW5xbF9fXzcnLCBcImNoYW5nZXNldCByZW5hbWVkIHRvICN7Y2hhbmdlc2V0X2ZpbmFsX3BhdGh9XCJcbiAgICAjIyMgKiBhcHBseSBjaGFuZ2VzZXQgdG8gcmVhZC1vbmx5IERCICAgICAgICAgICAgICAgICAgICAgIyMjXG4gICAgYWNfY2ZnID1cbiAgICAgIG9uQ29uZmxpY3Q6ICggdHlwZV9vZl9jaGFuZ2UgKSAtPiBTUUxJVEUuY29uc3RhbnRzLlNRTElURV9DSEFOR0VTRVRfT01JVFxuICAgIGRlYnVnICfOqW5xbF9fXzgnLCBkYi5kYi5hcHBseUNoYW5nZXNldCAoIEZTLnJlYWRGaWxlU3luYyBjaGFuZ2VzZXRfZmluYWxfcGF0aCApLCBhY19jZmdcbiAgICBkZWJ1ZyAnzqlucWxfX185JywgXCJzZWdtZW50IGNvdW50IGFmdGVyIGNoYW5nZXNldCBhcHBsaWNhdGlvbjogI3tjb3VudF9zZWdtZW50cy5nZXQoKS5jb3VudH1cIlxuICAgIHJldHVybiBudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJkcm9wIHRhYmxlIGlmIGV4aXN0cyBzZWdtZW50cztcIlwiXCJcbiAgZGIuZXhlY3V0ZSBkYi5jb25zdHJ1Y3Rvci5zdGF0ZW1lbnRzLmNyZWF0ZV90YWJsZV9zZWdtZW50c1xuICBpbnNlcnRfc2VnbWVudCA9IGRiLnByZXBhcmUgZGIuY29uc3RydWN0b3Iuc3RhdGVtZW50cy5pbnNlcnRfc2VnbWVudFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGFsbF9zZWdtZW50cyAgICA9IGRiLnByZXBhcmUgU1FMXCJcIlwic2VsZWN0ICogZnJvbSBzZWdtZW50cyBvcmRlciBieSBzZWdtZW50X3RleHQ7XCJcIlwiXG4gIGNvdW50X3NlZ21lbnRzICA9IGRiLnByZXBhcmUgU1FMXCJzZWxlY3QgY291bnQoKikgYXMgY291bnQgZnJvbSBzZWdtZW50cztcIlxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHNlc3Npb24gPSBkYi5kYi5jcmVhdGVTZXNzaW9uKClcbiAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJiZWdpbiB0cmFuc2FjdGlvbjtcIlwiXCJcbiAgZm9yIGNpZCBpbiBbIDB4MDBfMDAwYyAuLiAweDAwXzAwNTAgXVxuICAgIGNociAgICAgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWRcbiAgICBjaWRfaGV4ID0gXCJVKyN7KCBjaWQudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA0LCAnMCd9XCJcbiAgICBjaHIgICAgID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkXG4gICAgdWNjICAgICA9IGdldF9yb3VnaF91bmljb2RlX2NhdGVnb3J5IGNoclxuICAgICMgZGVidWcgJ86pYmJzZm1fXzEwJywgY2lkX2hleCwgKCBycHIgY2hyICksIHVjY1xuICAgIHNlZ21lbnRfdGV4dCAgICA9IGNoclxuICAgIHNlZ21lbnRfd2lkdGggICA9IG51bGxcbiAgICBzZWdtZW50X2xlbmd0aCAgPSBudWxsXG4gICAgc3dpdGNoIHVjY1xuICAgICAgd2hlbiAnY29udHJvbCdcbiAgICAgICAgc2VnbWVudF93aWR0aCAgID0gMFxuICAgICAgICBzZWdtZW50X2xlbmd0aCAgPSAwXG4gICAgICB3aGVuICdzZXBhcmF0b3InXG4gICAgICAgIHNlZ21lbnRfd2lkdGggICA9IDBcbiAgICAgICAgc2VnbWVudF9sZW5ndGggID0gMFxuICAgICAgZWxzZVxuICAgICAgICBzZWdtZW50X3dpZHRoICAgPSAxICMjIyBUQUlOVCBydW4gd2MgLS1tYXgtbGluZS1sZW5ndGggIyMjXG4gICAgICAgIHNlZ21lbnRfbGVuZ3RoICA9IDFcbiAgICBpbmZvICfOqW5xbF9fMTEnLCBpbnNlcnRfc2VnbWVudC5hbGwgeyBzZWdtZW50X3RleHQsIH1cbiAgZGIuZXhlY3V0ZSBTUUxcIlwiXCJjb21taXQ7XCJcIlwiXG4gIGluZm8gJ86pbnFsX18xMicsIGluc2VydF9zZWdtZW50LmFsbCB7IHNlZ21lbnRfdGV4dDogXCJhIHNvbWV3aGF0IGxvbmdlciB0ZXh0XCIsIH1cbiAgaW5mbyAnzqlucWxfXzEzJywgaW5zZXJ0X3NlZ21lbnQuYWxsIHsgc2VnbWVudF90ZXh0OiBcImEgdGV4dFwiLCB9XG4gIGluZm8gJ86pbnFsX18xNCcsIGluc2VydF9zZWdtZW50LmFsbCB7IHNlZ21lbnRfdGV4dDogXCJBXCIsIH1cbiAgaW5mbyAnzqlucWxfXzE1JywgaW5zZXJ0X3NlZ21lbnQuYWxsIHsgc2VnbWVudF90ZXh0OiBcIjlcIiwgfVxuICB1cmdlICfOqW5xbF9fMTYnLCBpbnNlcnRfc2VnbWVudC5hbGwgeyBzZWdtZW50X3RleHQ6IFwiXFxuXCIsIH1cbiAgdXJnZSAnzqlucWxfXzE3JywgaW5zZXJ0X3NlZ21lbnQuYWxsIHsgc2VnbWVudF90ZXh0OiBcIlwiLCB9XG4gIHVyZ2UgJ86pbnFsX18xOCcsIGluc2VydF9zZWdtZW50LmFsbCB7IHNlZ21lbnRfdGV4dDogXCIkKGxzKVwiLCB9XG4gICMgZm9yIHsgc2VnbWVudF90ZXh0LCBzZWdtZW50X3dpZHRoLCBzZWdtZW50X2xlbmd0aCwgfSBmcm9tIGFsbF9zZWdtZW50cy5pdGVyYXRlKClcbiAgIyAgIGluZm8gJ86pbnFsX18xOScsICggcnByIHNlZ21lbnRfdGV4dCApLCBzZWdtZW50X3dpZHRoLCBzZWdtZW50X2xlbmd0aFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgc29tZV9zZWdtZW50cyA9IGRiLnByZXBhcmUgU1FMXCJcIlwic2VsZWN0ICogZnJvbSBzZWdtZW50cyB3aGVyZSBzZWdtZW50X3RleHQgaW4gKCAkdGV4dHMgKTtcIlwiXCJcbiAgIyBkZWJ1ZyAnzqlucWxfXzIwJywgc29tZV9zZWdtZW50cy5ydW4geyB0ZXh0czogWyAnYScsICdiJywgXSwgfVxuICAjIHNvbWVfc2VnbWVudHMgPSBkYi5wcmVwYXJlIFNRTFwiXCJcInNlbGVjdCAqIGZyb20gc2VnbWVudHMgd2hlcmUgc2VnbWVudF90ZXh0IGluIChcbiAgIyAgIHNlbGVjdCB2YWx1ZSBmcm9tIGpzb25fZWFjaCg/KSApO1wiXCJcIlxuICAjIHNvbWVfc2VnbWVudHMuc2V0UmV0dXJuQXJyYXlzIHRydWVcbiAgIyBmb3IgeyBzZWdtZW50X3RleHQsIHNlZ21lbnRfd2lkdGgsIHNlZ21lbnRfbGVuZ3RoLCB9LCBpZHggaW4gc29tZV9zZWdtZW50cy5hbGwgKCBKU09OLnN0cmluZ2lmeSBbICdhJywgJ2InLCBdIClcbiAgIyAgIHVyZ2UgJ86pbnFsX18yMScsIGlkeCwgKCBycHIgc2VnbWVudF90ZXh0ICksIHNlZ21lbnRfd2lkdGgsIHNlZ21lbnRfbGVuZ3RoXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgaW5mbyAnzqlucWxfXzIyJywgZGIuY2FjaGUuc2l6ZVxuICBpbmZvICfOqW5xbF9fMjMnLCBkYi5nZXRfbWFueV9zZWdtZW50X21ldHJpY3MgJ0EnLCAnYSBzb21ld2hhdCBsb25nZXIgdGV4dCcsICdaJ1xuICBpbmZvICfOqW5xbF9fMjQnLCBkYi5jYWNoZS5zaXplXG4gIGluZm8gJ86pbnFsX18yNScsIGRiLmdldF9zaW5nbGVfc2VnbWVudF9tZXRyaWNzICdhIG5ldyB0ZXh0J1xuICBpbmZvICfOqW5xbF9fMjYnLCBkYi5nZXRfc2luZ2xlX3NlZ21lbnRfbWV0cmljcyAnYW5vdGhlciBuZXcgdGV4dCdcbiAgaW5mbyAnzqlucWxfXzI3JywgZGIuZ2V0X3NpbmdsZV9zZWdtZW50X21ldHJpY3MgJ3h4eHh4eHh4eHh4eHh4eHgnXG4gIGluZm8gJ86pbnFsX18yOCcsIGRiLmNhY2hlLnNpemVcbiAgaW5mbyAnzqlucWxfXzI5JywgY291bnRfc2VnbWVudHMuZ2V0KClcbiAgIyBpbmZvICfOqW5xbF9fMzAnLCBkYi5jYWNoZVxuICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyBzb21lX3NlZ21lbnRzX3dpdGhfd2lkdGhzID0gZGIucHJlcGFyZSBTUUxcIlwiXCJcbiAgIyAgIHNlbGVjdFxuICAjICAgICAkdGV4dCBhcyBteV90ZXh0LFxuICAjICAgICB3aWR0aF9mcm9tX3RleHQoICR0ZXh0ICkgYXMgd2lkdGg7XCJcIlwiXG4gICMgZGVidWcgJ86pbnFsX18zMScsIHNvbWVfc2VnbWVudHNfd2l0aF93aWR0aHMuYWxsIHsgdGV4dDogJzc2NScsIH1cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBkZWJ1ZyAnzqlucWxfXzMyJywgKCByZXF1aXJlICdub2RlOmZzJyApLndyaXRlRmlsZVN5bmMgJy90bXAvY2hhbmdlc2V0LmJpbicsIHNlc3Npb24ucGF0Y2hzZXQoKVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGF3YWl0IGRlbW8oKVxuICByZXR1cm4gbnVsbFxuIl19
//# sourceURL=../src/demo-node-sqlite.coffee