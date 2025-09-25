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

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tbm9kZS1zcWxpdGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQUE7QUFBQSxNQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxXQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLGdCQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxDQUFBLEVBQUEsdUJBQUEsRUFBQSxzQkFBQSxFQUFBLDBCQUFBLEVBQUEsc0JBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsMEJBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLGVBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0Isa0JBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMs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SUErRkUsS0FBQSxDQUFNLFVBQU4sRUFBa0IsQ0FBRSxPQUFBLENBQVEsU0FBUixDQUFGLENBQXFCLENBQUMsYUFBdEIsQ0FBb0Msb0JBQXBDLEVBQTBELE9BQU8sQ0FBQyxRQUFSLENBQUEsQ0FBMUQsQ0FBbEIsRUEvRkY7O0FBaUdFLFdBQU87RUFsR0YsRUEvTFA7OztFQW9TQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUE7TUFDdEMsTUFBTSxJQUFBLENBQUE7QUFDTixhQUFPO0lBRitCLENBQUEsSUFBeEM7O0FBcFNBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2RlbW8tbm9kZS1zcWxpdGUnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xubWtkaXJwICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ21rZGlycCdcbmVudl9wYXRocyAgICAgICAgICAgICAgICAgPSAoIHJlcXVpcmUgJ2Vudi1wYXRocycgKS5kZWZhdWx0ICdkZW1vLW5vZGUtc3FsaXRlJ1xuU1FMSVRFICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6c3FsaXRlJ1xuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbnsgU1FMIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2RiYXknXG57IGRlZmF1bHQ6IFxcXG4gIG9uX3Byb2Nlc3NfZXhpdCwgICAgICB9ID0gcmVxdWlyZSAnZXhpdC1ob29rJ1xueyBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lLCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfbmV4dF9mcmVlX2ZpbGVuYW1lKClcbkZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWxsZWdhbF9jb2RlcG9pbnRfcGF0dGVybnMgPVxuICB1bmFzc2lnbmVkOiAvLy9eXFxwe0NufSQvLy92ICMgQ29udHJvbFxuICBjb250cm9sOiAgICAvLy9eXFxwe0N9JC8vL3YgIyBDb250cm9sXG4gIGxldHRlcjogICAgIC8vL15cXHB7TH0kLy8vdlxuICBzcGFjZTogICAgICAvLy9eXFxwe1pzfSQvLy92XG4gIHNlcGFyYXRvcjogIC8vL15cXHB7Wn0kLy8vdlxuICBtYXJrOiAgICAgICAvLy9eXFxwe019JC8vL3ZcbiAgIyBzdXJyb2dhdGU6ICAvLy9eXFxwe0N9JC8vL3YgIyBTdXJyb2dhdGVcblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5nZXRfcm91Z2hfdW5pY29kZV9jYXRlZ29yeSA9ICggY2hyICkgLT5cbiAgZm9yIG5hbWUsIHBhdHRlcm4gb2YgaWxsZWdhbF9jb2RlcG9pbnRfcGF0dGVybnNcbiAgICByZXR1cm4gbmFtZSBpZiBwYXR0ZXJuLnRlc3QgY2hyXG4gIHJldHVybiAnb3RoZXInXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5DUCA9IHJlcXVpcmUgJ25vZGU6Y2hpbGRfcHJvY2VzcydcblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5nZXRfY29tbWFuZF9saW5lX3Jlc3VsdCA9ICggY29tbWFuZCwgaW5wdXQgKSAtPlxuICByZXR1cm4gKCBDUC5leGVjU3luYyBjb21tYW5kLCB7IGVuY29kaW5nOiAndXRmLTgnLCBpbnB1dCwgfSApLnJlcGxhY2UgL1xcbiQvcywgJydcblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5nZXRfd2NfbWF4X2xpbmVfbGVuZ3RoID0gKCB0ZXh0ICkgLT5cbiAgIyMjIHRoeCB0byBodHRwczovL3VuaXguc3RhY2tleGNoYW5nZS5jb20vYS8yNTg1NTEvMjgwMjA0ICMjI1xuICByZXR1cm4gcGFyc2VJbnQgKCBnZXRfY29tbWFuZF9saW5lX3Jlc3VsdCAnd2MgLS1tYXgtbGluZS1sZW5ndGgnLCB0ZXh0ICksIDEwXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jbGFzcyBOb2RlX3NxbGl0ZVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQGZ1bmN0aW9uczoge31cbiAgQHN0YXRlbWVudHM6IHt9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdHJ1Y3RvcjogKCBkYl9wYXRoICkgLT5cbiAgICBAZGIgICAgICAgICAgICAgICAgID0gbmV3IFNRTElURS5EYXRhYmFzZVN5bmMgZGJfcGF0aFxuICAgIGNsYXN6ICAgICAgICAgICAgICAgPSBAY29uc3RydWN0b3JcbiAgICAjIyMgTk9URSB3ZSBjYW4ndCBqdXN0IHByZXBhcmUgYWxsIHRoZSBzdGV0bWVudHMgYXMgdGhleSBkZXBlbmQgb24gREIgb2JqZWN0cyBleGlzdGluZyBvciBub3QgZXhpc3RpbmcsXG4gICAgYXMgdGhlIGNhc2UgbWF5IGJlLiBIZW5jZSB3ZSBwcmVwYXJlIHN0YXRlbWVudHMgb24tZGVtYW5kIGFuZCBjYWNoZSB0aGVtIGhlcmUgYXMgbmVlZGVkOiAjIyNcbiAgICBAc3RhdGVtZW50cyAgICAgICAgID0ge31cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGZuX2NmZ190ZW1wbGF0ZSA9IHsgZGV0ZXJtaW5pc3RpYzogdHJ1ZSwgdmFyYXJnczogZmFsc2UsIH1cbiAgICBmb3IgbmFtZSwgZm5fY2ZnIG9mIGNsYXN6LmZ1bmN0aW9uc1xuICAgICAgaWYgKCB0eXBlb2YgZm5fY2ZnICkgaXMgJ2Z1bmN0aW9uJ1xuICAgICAgICBbIGNhbGwsIGZuX2NmZywgXSA9IFsgZm5fY2ZnLCB7fSwgXVxuICAgICAgZWxzZVxuICAgICAgICB7IGNhbGwsIH0gPSBmbl9jZmdcbiAgICAgIGZuX2NmZyAgPSB7IGZuX2NmZ190ZW1wbGF0ZS4uLiwgZm5fY2ZnLCB9XG4gICAgICBjYWxsICAgID0gY2FsbC5iaW5kIEBcbiAgICAgIEBkYi5mdW5jdGlvbiBuYW1lLCBmbl9jZmcsIGNhbGxcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBmb3IgbmFtZSwgc3FsIG9mIGNsYXN6LnN0YXRlbWVudHNcbiAgICAjICAgc3dpdGNoIHRydWVcbiAgICAjICAgICB3aGVuIG5hbWUuc3RhcnRzV2l0aCAnY3JlYXRlX3RhYmxlXydcbiAgICAjICAgICAgIG51bGxcbiAgICAjICAgICB3aGVuIG5hbWUuc3RhcnRzV2l0aCAnaW5zZXJ0XydcbiAgICAjICAgICAgIG51bGxcbiAgICAjICAgICBlbHNlXG4gICAgIyAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqW5xbF9fXzEgdW5hYmxlIHRvIHBhcnNlIHN0YXRlbWVudCBuYW1lICN7cnByIG5hbWV9XCJcbiAgICAjICMgICBAWyBuYW1lIF0gPSBAcHJlcGFyZSBzcWxcbiAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBleGVjdXRlOiAoIHNxbCApIC0+IEBkYi5leGVjIHNxbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJlcGFyZTogKCBzcWwgKSAtPiBAZGIucHJlcGFyZSBzcWxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNsYXNzIFNlZ21lbnRfd2lkdGhfZGIgZXh0ZW5kcyBOb2RlX3NxbGl0ZVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQGZ1bmN0aW9uczpcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHdpZHRoX2Zyb21fdGV4dDpcbiAgICAgIGRldGVybWluaXN0aWM6ICB0cnVlXG4gICAgICB2YXJhcmdzOiAgICAgICAgZmFsc2VcbiAgICAgIGNhbGw6ICAgICAgICAgICAoIHRleHQgKSAtPiBnZXRfd2NfbWF4X2xpbmVfbGVuZ3RoIHRleHRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGxlbmd0aF9mcm9tX3RleHQ6XG4gICAgICBkZXRlcm1pbmlzdGljOiAgdHJ1ZVxuICAgICAgdmFyYXJnczogICAgICAgIGZhbHNlXG4gICAgICBjYWxsOiAgICAgICAgICAgKCB0ZXh0ICkgLT4gdGV4dC5sZW5ndGhcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEBzdGF0ZW1lbnRzOlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY3JlYXRlX3RhYmxlX3NlZ21lbnRzOiBTUUxcIlwiXCJcbiAgICAgIGRyb3AgdGFibGUgaWYgZXhpc3RzIHNlZ21lbnRzO1xuICAgICAgY3JlYXRlIHRhYmxlIHNlZ21lbnRzIChcbiAgICAgICAgICBzZWdtZW50X3RleHQgICAgICB0ZXh0ICAgIG5vdCBudWxsIHByaW1hcnkga2V5LFxuICAgICAgICAgIHNlZ21lbnRfd2lkdGggICAgIGludGVnZXIgbm90IG51bGwgZ2VuZXJhdGVkIGFsd2F5cyBhcyAoIHdpZHRoX2Zyb21fdGV4dCggIHNlZ21lbnRfdGV4dCApICkgc3RvcmVkLFxuICAgICAgICAgIHNlZ21lbnRfbGVuZ3RoICAgIGludGVnZXIgbm90IG51bGwgZ2VuZXJhdGVkIGFsd2F5cyBhcyAoIGxlbmd0aF9mcm9tX3RleHQoIHNlZ21lbnRfdGV4dCApICkgc3RvcmVkLFxuICAgICAgICBjb25zdHJhaW50IHNlZ21lbnRfd2lkdGhfZXFndF96ZXJvICBjaGVjayAoIHNlZ21lbnRfd2lkdGggID49IDAgKSxcbiAgICAgICAgY29uc3RyYWludCBzZWdtZW50X2xlbmd0aF9lcWd0X3plcm8gY2hlY2sgKCBzZWdtZW50X2xlbmd0aCA+PSAwICkgKTtcIlwiXCJcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBpbnNlcnRfc2VnbWVudDogU1FMXCJcIlwiXG4gICAgIyAgIGluc2VydCBpbnRvIHNlZ21lbnRzICAoIHNlZ21lbnRfdGV4dCwgICBzZWdtZW50X3dpZHRoLCAgc2VnbWVudF9sZW5ndGggIClcbiAgICAjICAgICAgICAgICAgICAgICB2YWx1ZXMgICggJHNlZ21lbnRfdGV4dCwgICRzZWdtZW50X3dpZHRoLCAkc2VnbWVudF9sZW5ndGggKVxuICAgICMgICAgIG9uIGNvbmZsaWN0ICggc2VnbWVudF90ZXh0ICkgZG8gdXBkYXRlXG4gICAgIyAgICAgICAgICAgICAgICAgc2V0ICAgICAoICAgICAgICAgICAgICAgICBzZWdtZW50X3dpZHRoLCAgc2VnbWVudF9sZW5ndGggICkgPVxuICAgICMgICAgICAgICAgICAgICAgICAgICAgICAgKCBleGNsdWRlZC5zZWdtZW50X3dpZHRoLCBleGNsdWRlZC5zZWdtZW50X2xlbmd0aCApO1wiXCJcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaW5zZXJ0X3NlZ21lbnQ6IFNRTFwiXCJcIlxuICAgICAgaW5zZXJ0IGludG8gc2VnbWVudHMgICggc2VnbWVudF90ZXh0ICApXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcyAgKCAkc2VnbWVudF90ZXh0IClcbiAgICAgICAgb24gY29uZmxpY3QgKCBzZWdtZW50X3RleHQgKSBkbyBub3RoaW5nXG4gICAgICAgIHJldHVybmluZyAqO1wiXCJcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgc2VsZWN0X3Jvd19mcm9tX3NlZ21lbnRzOiBTUUxcIlwiXCJcbiAgICAgIHNlbGVjdCAqIGZyb20gc2VnbWVudHMgd2hlcmUgc2VnbWVudF90ZXh0ID0gJHNlZ21lbnRfdGV4dCBsaW1pdCAxO1wiXCJcIlxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3RydWN0b3I6ICggZGJfcGF0aCApIC0+XG4gICAgc3VwZXIgZGJfcGF0aFxuICAgIGNsYXN6ICAgPSBAY29uc3RydWN0b3JcbiAgICBAY2FjaGUgID0gbmV3IE1hcCgpXG4gICAgIyMjIFRBSU5UIHNob3VsZCBiZSBkb25lIGF1dG9tYXRpY2FsbHkgIyMjXG4gICAgQHN0YXRlbWVudHMgPVxuICAgICAgaW5zZXJ0X3NlZ21lbnQ6ICAgICAgICAgICBAcHJlcGFyZSBjbGFzei5zdGF0ZW1lbnRzLmluc2VydF9zZWdtZW50XG4gICAgICBzZWxlY3Rfcm93X2Zyb21fc2VnbWVudHM6IEBwcmVwYXJlIGNsYXN6LnN0YXRlbWVudHMuc2VsZWN0X3Jvd19mcm9tX3NlZ21lbnRzXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X21hbnlfc2VnbWVudF9tZXRyaWNzOiAoIHNlZ21lbnRfdGV4dHMuLi4gKSAtPlxuICAgICMjIyBUQUlOVCBjb25zaWRlciBidW5kbGluZyByZXF1ZXN0cyBpbnRvIHNpbmdsZSBvbmUgdXNpbmcgSlNPTiBhcnJheSAjIyNcbiAgICBzZWdtZW50X3RleHRzID0gc2VnbWVudF90ZXh0cy5mbGF0IEluZmluaXR5XG4gICAgUiA9IE9iamVjdC5jcmVhdGUgbnVsbFxuICAgIGZvciBzZWdtZW50X3RleHQgaW4gc2VnbWVudF90ZXh0c1xuICAgICAgaWYgKCByb3cgPSBAY2FjaGUuZ2V0IHNlZ21lbnRfdGV4dCApP1xuICAgICAgICBudWxsXG4gICAgICBlbHNlIGlmICggcm93ID0gQHN0YXRlbWVudHMuc2VsZWN0X3Jvd19mcm9tX3NlZ21lbnRzLmdldCB7IHNlZ21lbnRfdGV4dCwgfSApP1xuICAgICAgICBAY2FjaGUuc2V0IHNlZ21lbnRfdGV4dCwgcm93XG4gICAgICBlbHNlXG4gICAgICAgIHJvdyA9IEBzdGF0ZW1lbnRzLmluc2VydF9zZWdtZW50LmdldCB7IHNlZ21lbnRfdGV4dCwgfVxuICAgICAgICBAY2FjaGUuc2V0IHNlZ21lbnRfdGV4dCwgcm93XG4gICAgICBSWyBzZWdtZW50X3RleHQgXSA9IHJvd1xuICAgIHJldHVybiBSXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRfc2luZ2xlX3NlZ21lbnRfbWV0cmljczogKCBzZWdtZW50X3RleHQgKSAtPiByZXR1cm4gUiBmb3IgXywgUiBvZiBAZ2V0X21hbnlfc2VnbWVudF9tZXRyaWNzIHNlZ21lbnRfdGV4dFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtbyA9ID0+XG4gIGRlYnVnICfOqW5xbF9fXzInLCBrLCB2IGZvciBrLCB2IG9mIGVudl9wYXRoc1xuICB0bXBfcGF0aCAgICAgICAgICAgICAgICAgICAgPSBlbnZfcGF0aHMudGVtcFxuICBkYl9wYXRoICAgICAgICAgICAgICAgICAgICAgPSBQQVRILmpvaW4gdG1wX3BhdGgsICdjaHItd2lkdGhzLnNxbGl0ZSdcbiAgY2hhbmdlc2V0X2ludGVybWVkaWF0ZV9pbnMgID0gXCIje2RiX3BhdGh9LmNoYW5nZXNldC5pbnRlcm1lZGlhdGVcIlxuICBjaGFuZ2VzZXRfZmluYWxfcGF0aF9pbnMgICAgPSBcIiN7ZGJfcGF0aH0uY2hhbmdlc2V0LmZpbmFsaXplZFwiXG4gIGNoYW5nZXNldCAgICAgICAgICAgICAgICAgICA9IG51bGxcbiAgc2Vzc2lvbiAgICAgICAgICAgICAgICAgICAgID0gbnVsbFxuICBkZWJ1ZyAnzqlucWxfX18zJywgbWtkaXJwLnN5bmMgdG1wX3BhdGhcbiAgZGVidWcgJ86pbnFsX19fNCcsIGRiID0gbmV3IFNlZ21lbnRfd2lkdGhfZGIgZGJfcGF0aFxuICBvbl9wcm9jZXNzX2V4aXQgKCBQLi4uICkgLT5cbiAgICBkZWJ1ZyAnzqlucWxfX181JywgXCJzZWdtZW50IGNvdW50IGJlZm9yZSBjaGFuZ2VzZXQgYXBwbGljYXRpb246ICN7Y291bnRfc2VnbWVudHMuZ2V0KCkuY291bnR9XCJcbiAgICByZXR1cm4gbnVsbCB1bmxlc3Mgc2Vzc2lvbj9cbiAgICAjIyMgKiBvYnRhaW4gY2hhbmdlc2V0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyMjXG4gICAgY2hhbmdlc2V0ID0gc2Vzc2lvbi5wYXRjaHNldCgpXG4gICAgIyBjaGFuZ2VzZXQgPSBzZXNzaW9uLmNoYW5nZXNldCgpXG4gICAgIyMjICogdG8gYXZvaWQgYXBwbGljYXRpb24gb2YgdW5maW5pc2hlZCBjaGFuZ2VzZXRzOiAgICAgICMjI1xuICAgICMjIyAgICogd3JpdGUgY2hhbmdlc2V0IHRvIGludGVybWVkaWF0ZSBmaWxlICAgICAgICAgICAgICAjIyNcbiAgICBjaGFuZ2VzZXRfaW50ZXJtZWRpYXRlX3BhdGggPSBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lIGNoYW5nZXNldF9pbnRlcm1lZGlhdGVfaW5zXG4gICAgRlMud3JpdGVGaWxlU3luYyBjaGFuZ2VzZXRfaW50ZXJtZWRpYXRlX3BhdGgsIGNoYW5nZXNldFxuICAgIGhlbHAgJ86pbnFsX19fNicsIFwiY2hhbmdlc2V0IHdyaXR0ZW4gdG8gI3tjaGFuZ2VzZXRfaW50ZXJtZWRpYXRlX3BhdGh9XCJcbiAgICAjIyMgICAqIHJlbmFtZSBpbnRlcm1lZGlhdGUgZmlsZSB0byBmaW5hbCB2ZXJzaW9uICAgICAgICAgIyMjXG4gICAgY2hhbmdlc2V0X2ZpbmFsX3BhdGggPSBnZXRfbmV4dF9mcmVlX2ZpbGVuYW1lIGNoYW5nZXNldF9maW5hbF9wYXRoX2luc1xuICAgIEZTLnJlbmFtZVN5bmMgY2hhbmdlc2V0X2ludGVybWVkaWF0ZV9wYXRoLCBjaGFuZ2VzZXRfZmluYWxfcGF0aFxuICAgIGhlbHAgJ86pbnFsX19fNycsIFwiY2hhbmdlc2V0IHJlbmFtZWQgdG8gI3tjaGFuZ2VzZXRfZmluYWxfcGF0aH1cIlxuICAgICMjIyAqIGFwcGx5IGNoYW5nZXNldCB0byByZWFkLW9ubHkgREIgICAgICAgICAgICAgICAgICAgICAjIyNcbiAgICBhY19jZmcgPVxuICAgICAgb25Db25mbGljdDogKCB0eXBlX29mX2NoYW5nZSApIC0+IFNRTElURS5jb25zdGFudHMuU1FMSVRFX0NIQU5HRVNFVF9PTUlUXG4gICAgZGVidWcgJ86pbnFsX19fOCcsIGRiLmRiLmFwcGx5Q2hhbmdlc2V0ICggRlMucmVhZEZpbGVTeW5jIGNoYW5nZXNldF9maW5hbF9wYXRoICksIGFjX2NmZ1xuICAgIGRlYnVnICfOqW5xbF9fXzknLCBcInNlZ21lbnQgY291bnQgYWZ0ZXIgY2hhbmdlc2V0IGFwcGxpY2F0aW9uOiAje2NvdW50X3NlZ21lbnRzLmdldCgpLmNvdW50fVwiXG4gICAgcmV0dXJuIG51bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBkYi5leGVjdXRlIFNRTFwiXCJcImRyb3AgdGFibGUgaWYgZXhpc3RzIHNlZ21lbnRzO1wiXCJcIlxuICBkYi5leGVjdXRlIGRiLmNvbnN0cnVjdG9yLnN0YXRlbWVudHMuY3JlYXRlX3RhYmxlX3NlZ21lbnRzXG4gIGluc2VydF9zZWdtZW50ID0gZGIucHJlcGFyZSBkYi5jb25zdHJ1Y3Rvci5zdGF0ZW1lbnRzLmluc2VydF9zZWdtZW50XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgYWxsX3NlZ21lbnRzICAgID0gZGIucHJlcGFyZSBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIHNlZ21lbnRzIG9yZGVyIGJ5IHNlZ21lbnRfdGV4dDtcIlwiXCJcbiAgY291bnRfc2VnbWVudHMgID0gZGIucHJlcGFyZSBTUUxcInNlbGVjdCBjb3VudCgqKSBhcyBjb3VudCBmcm9tIHNlZ21lbnRzO1wiXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgc2Vzc2lvbiA9IGRiLmRiLmNyZWF0ZVNlc3Npb24oKVxuICBkYi5leGVjdXRlIFNRTFwiXCJcImJlZ2luIHRyYW5zYWN0aW9uO1wiXCJcIlxuICBmb3IgY2lkIGluIFsgMHgwMF8wMDBjIC4uIDB4MDBfMDA1MCBdXG4gICAgY2hyICAgICA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZFxuICAgIGNpZF9oZXggPSBcIlUrI3soIGNpZC50b1N0cmluZyAxNiApLnBhZFN0YXJ0IDQsICcwJ31cIlxuICAgIGNociAgICAgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWRcbiAgICB1Y2MgICAgID0gZ2V0X3JvdWdoX3VuaWNvZGVfY2F0ZWdvcnkgY2hyXG4gICAgIyBkZWJ1ZyAnzqliYnNmbV9fMTAnLCBjaWRfaGV4LCAoIHJwciBjaHIgKSwgdWNjXG4gICAgc2VnbWVudF90ZXh0ICAgID0gY2hyXG4gICAgc2VnbWVudF93aWR0aCAgID0gbnVsbFxuICAgIHNlZ21lbnRfbGVuZ3RoICA9IG51bGxcbiAgICBzd2l0Y2ggdWNjXG4gICAgICB3aGVuICdjb250cm9sJ1xuICAgICAgICBzZWdtZW50X3dpZHRoICAgPSAwXG4gICAgICAgIHNlZ21lbnRfbGVuZ3RoICA9IDBcbiAgICAgIHdoZW4gJ3NlcGFyYXRvcidcbiAgICAgICAgc2VnbWVudF93aWR0aCAgID0gMFxuICAgICAgICBzZWdtZW50X2xlbmd0aCAgPSAwXG4gICAgICBlbHNlXG4gICAgICAgIHNlZ21lbnRfd2lkdGggICA9IDEgIyMjIFRBSU5UIHJ1biB3YyAtLW1heC1saW5lLWxlbmd0aCAjIyNcbiAgICAgICAgc2VnbWVudF9sZW5ndGggID0gMVxuICAgIGluZm8gJ86pbnFsX18xMScsIGluc2VydF9zZWdtZW50LmFsbCB7IHNlZ21lbnRfdGV4dCwgfVxuICBkYi5leGVjdXRlIFNRTFwiXCJcImNvbW1pdDtcIlwiXCJcbiAgaW5mbyAnzqlucWxfXzEyJywgaW5zZXJ0X3NlZ21lbnQuYWxsIHsgc2VnbWVudF90ZXh0OiBcImEgc29tZXdoYXQgbG9uZ2VyIHRleHRcIiwgfVxuICBpbmZvICfOqW5xbF9fMTMnLCBpbnNlcnRfc2VnbWVudC5hbGwgeyBzZWdtZW50X3RleHQ6IFwiYSB0ZXh0XCIsIH1cbiAgaW5mbyAnzqlucWxfXzE0JywgaW5zZXJ0X3NlZ21lbnQuYWxsIHsgc2VnbWVudF90ZXh0OiBcIkFcIiwgfVxuICBpbmZvICfOqW5xbF9fMTUnLCBpbnNlcnRfc2VnbWVudC5hbGwgeyBzZWdtZW50X3RleHQ6IFwiOVwiLCB9XG4gIHVyZ2UgJ86pbnFsX18xNicsIGluc2VydF9zZWdtZW50LmFsbCB7IHNlZ21lbnRfdGV4dDogXCJcXG5cIiwgfVxuICB1cmdlICfOqW5xbF9fMTcnLCBpbnNlcnRfc2VnbWVudC5hbGwgeyBzZWdtZW50X3RleHQ6IFwiXCIsIH1cbiAgdXJnZSAnzqlucWxfXzE4JywgaW5zZXJ0X3NlZ21lbnQuYWxsIHsgc2VnbWVudF90ZXh0OiBcIiQobHMpXCIsIH1cbiAgIyBmb3IgeyBzZWdtZW50X3RleHQsIHNlZ21lbnRfd2lkdGgsIHNlZ21lbnRfbGVuZ3RoLCB9IGZyb20gYWxsX3NlZ21lbnRzLml0ZXJhdGUoKVxuICAjICAgaW5mbyAnzqlucWxfXzE5JywgKCBycHIgc2VnbWVudF90ZXh0ICksIHNlZ21lbnRfd2lkdGgsIHNlZ21lbnRfbGVuZ3RoXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyBzb21lX3NlZ21lbnRzID0gZGIucHJlcGFyZSBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIHNlZ21lbnRzIHdoZXJlIHNlZ21lbnRfdGV4dCBpbiAoICR0ZXh0cyApO1wiXCJcIlxuICAjIGRlYnVnICfOqW5xbF9fMjAnLCBzb21lX3NlZ21lbnRzLnJ1biB7IHRleHRzOiBbICdhJywgJ2InLCBdLCB9XG4gICMgc29tZV9zZWdtZW50cyA9IGRiLnByZXBhcmUgU1FMXCJcIlwic2VsZWN0ICogZnJvbSBzZWdtZW50cyB3aGVyZSBzZWdtZW50X3RleHQgaW4gKFxuICAjICAgc2VsZWN0IHZhbHVlIGZyb20ganNvbl9lYWNoKD8pICk7XCJcIlwiXG4gICMgc29tZV9zZWdtZW50cy5zZXRSZXR1cm5BcnJheXMgdHJ1ZVxuICAjIGZvciB7IHNlZ21lbnRfdGV4dCwgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGgsIH0sIGlkeCBpbiBzb21lX3NlZ21lbnRzLmFsbCAoIEpTT04uc3RyaW5naWZ5IFsgJ2EnLCAnYicsIF0gKVxuICAjICAgdXJnZSAnzqlucWxfXzIxJywgaWR4LCAoIHJwciBzZWdtZW50X3RleHQgKSwgc2VnbWVudF93aWR0aCwgc2VnbWVudF9sZW5ndGhcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBpbmZvICfOqW5xbF9fMjInLCBkYi5jYWNoZS5zaXplXG4gIGluZm8gJ86pbnFsX18yMycsIGRiLmdldF9tYW55X3NlZ21lbnRfbWV0cmljcyAnQScsICdhIHNvbWV3aGF0IGxvbmdlciB0ZXh0JywgJ1onXG4gIGluZm8gJ86pbnFsX18yNCcsIGRiLmNhY2hlLnNpemVcbiAgaW5mbyAnzqlucWxfXzI1JywgZGIuZ2V0X3NpbmdsZV9zZWdtZW50X21ldHJpY3MgJ2EgbmV3IHRleHQnXG4gIGluZm8gJ86pbnFsX18yNicsIGRiLmdldF9zaW5nbGVfc2VnbWVudF9tZXRyaWNzICdhbm90aGVyIG5ldyB0ZXh0J1xuICBpbmZvICfOqW5xbF9fMjcnLCBkYi5nZXRfc2luZ2xlX3NlZ21lbnRfbWV0cmljcyAneHh4eHh4eHh4eHh4eHh4eCdcbiAgaW5mbyAnzqlucWxfXzI4JywgZGIuY2FjaGUuc2l6ZVxuICBpbmZvICfOqW5xbF9fMjknLCBjb3VudF9zZWdtZW50cy5nZXQoKVxuICAjIGluZm8gJ86pbnFsX18zMCcsIGRiLmNhY2hlXG4gICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjIHNvbWVfc2VnbWVudHNfd2l0aF93aWR0aHMgPSBkYi5wcmVwYXJlIFNRTFwiXCJcIlxuICAjICAgc2VsZWN0XG4gICMgICAgICR0ZXh0IGFzIG15X3RleHQsXG4gICMgICAgIHdpZHRoX2Zyb21fdGV4dCggJHRleHQgKSBhcyB3aWR0aDtcIlwiXCJcbiAgIyBkZWJ1ZyAnzqlucWxfXzMxJywgc29tZV9zZWdtZW50c193aXRoX3dpZHRocy5hbGwgeyB0ZXh0OiAnNzY1JywgfVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGRlYnVnICfOqW5xbF9fMzInLCAoIHJlcXVpcmUgJ25vZGU6ZnMnICkud3JpdGVGaWxlU3luYyAnL3RtcC9jaGFuZ2VzZXQuYmluJywgc2Vzc2lvbi5wYXRjaHNldCgpXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgYXdhaXQgZGVtbygpXG4gIHJldHVybiBudWxsXG4iXX0=
