(async function() {
  'use strict';
  var GUY, SFMODULES, Test, alert, blue, bold, debug, echo, get_realistic_sources, get_various_sources, gold, green, grey, help, info, inspect, log, plain, praise, red, reverse, rpr, tests, urge, walk_lines, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-sqlite-segmenter'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  // { f }                     = require '../../../apps/effstring'
  // # write                     = ( p ) -> process.stdout.write p
  // { nfa }                   = require '../../../apps/normalize-function-arguments'
  ({Test} = require('../../../apps/guy-test-NG'));

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  // FS                        = require 'node:fs'
  // PATH                      = require 'node:path'

  //===========================================================================================================
  get_various_sources = function() {
    var R, SQL, get_plain_sources, get_sources_no_lcomments, i, idx, len, ref, source;
    SQL = String.raw;
    R = {};
    //.........................................................................................................
    R.long_source_nl = SQL`
create table "names" ( /* Nr 1 */
  name text unique not null,
  "no-comment[" /* bcomment! */ text not null default 'no;comment', -- lcomment brother
  [uuugh....] integer );

-- ---X---X---
-- Alas, a valid statement (although probably not one that can appear in regular dump file) ###
/* Nr 2 */ delete from end where end = 'x' returning end;

-- ---X---X---
/* Nr 3 */ begin immediate transaction;

-- ---X---X---
CREATE TRIGGER jzr_mirror_triples_register  /* Nr 4 */
before insert on jzr_mirror_triples_base
for each row begin
  select trigger_on_before_insert( 'jzr_mirror_triples_base', new.rowid, new.ref, new.s, new.v, new.o );
  end /*comment */ -- newline!
  /* Nr 5 */ ;

-- ---X---X---
/* Nr 6 */ select 'a''z;' as "semi"";colon";`;
    ref = R.long_source_nl.split(/-- ---X.*/gm);
    for (idx = i = 0, len = ref.length; i < len; idx = ++i) {
      source = ref[idx];
      // CREATE TABLE jzr_mirror_lines ( /* Nr 6 */
      //   -- 't:jfm:'
      //   rowid     text    unique  not null,
      //   ref       text    unique  not null generated always as ( dskey || ':L=' || line_nr ) virtual,
      //   dskey     text            not null,
      //   line_nr   integer         not null,
      //   lcode     text            not null,
      //   line      text            not null,
      //   jfields   json                null,
      //   field_1   text                null,
      //   field_2   text                null,
      //   field_3   text                null,
      //   field_4   text                null,
      // primary key ( rowid ),
      // check ( rowid regexp '^t:mr:ln:R=\d+$'),
      // unique ( dskey, line_nr ),
      // foreign key ( lcode ) references jzr_mirror_lcodes ( lcode ) );
      // INSERT INTO jzr_mirror_lines VALUES('t:mr:ln:R=1','dict:meanings',1,'B','',NULL,NULL,NULL,NULL,NULL);
      // INSERT INTO jzr_mirror_lines VALUES('t:mr:ln:R=2','dict:meanings',2,'B','',NULL,NULL,NULL,NULL,NULL);
      // INSERT INTO jzr_mirror_lines VALUES('t:mr:ln:R=3','dict:meanings',3,'B','',NULL,NULL,NULL,NULL,NULL);
      //.........................................................................................................
      R[`source_${idx + 1}`] = source;
    }
    get_plain_sources = function() {
      var key, results1;
      results1 = [];
      for (key in R) {
        source = R[key];
        if (/^source_\d+/.test(key)) {
          results1.push(source);
        }
      }
      return results1;
    };
    // get_sources_no_lcomments  = -> ( ( source.replace /(?<=\s)--.*$/g, '' ) for source in get_plain_sources() )
    get_sources_no_lcomments = function() {
      var j, len1, ref1, results1;
      ref1 = get_plain_sources();
      results1 = [];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        source = ref1[j];
        results1.push(source.replace(/--.*$/gm, ''));
      }
      return results1;
    };
    // debug 'Ωtcs___1', '\n' + source for source in get_plain_sources()
    // debug 'Ωtcs___2', '\n' + source for source in get_sources_no_lcomments()
    // R.long_source_nl          = ( get_plain_sources() ).join '\n'
    R.long_source_one_line = ((get_sources_no_lcomments()).join('')).replace(/\n/g, '');
    return R;
  };

  //-----------------------------------------------------------------------------------------------------------
  get_realistic_sources = function() {
    var R, SQL;
    SQL = String.raw;
    R = {};
    R.realistic_source_1 = SQL`-- ---X---X---
select 24 as a;

-- ---X---X---
create table t (
    rowid text unique not null primary key );

-- ---X---X---
CREATE TRIGGER some_trigger  /* Nr 4 */
before insert on t
for each row begin
  select trigger_on_before_insert( 't', new.rowid );
  end /*comment */ -- newline!
  /* Nr 5 */ ;

-- ---X---X---
insert into t ( rowid ) values ( 'first' );
-- ---X---X---
insert into t ( rowid ) values ( 'second' );
-- ---X---X---
insert into t ( rowid ) values ( 'third' );`;
    return R;
  };

  //===========================================================================================================
  walk_lines = function*(text) {
    return (yield* text.split('\n'));
  };

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    segmenter: function() {
      var Segmenter, Undumper, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Segmenter} = SFMODULES.require_coarse_sqlite_statement_segmenter());
      ({Undumper} = SFMODULES.require_sqlite_undumper());
      jr = JSON.stringify;
      sources = get_various_sources();
      (() => {        //.......................................................................................................
        var walker, Ωtcs___3, Ωtcs___4, Ωtcs___5;
        //.....................................................................................................
        walker = new Segmenter({
          mode: 'slow'
        });
        this.throws((Ωtcs___3 = function() {
          return walker.scan(void 0);
        }), /expected a text/);
        this.throws((Ωtcs___4 = function() {
          return walker.scan(null);
        }), /expected a text/);
        this.throws((Ωtcs___5 = function() {
          return walker.scan(Symbol('??'));
        }), /expected a text/);
        return null;
      })();
      (() => {        //.......................................................................................................
        var walker, Ωtcs___6, Ωtcs___7;
        walker = new Segmenter({
          mode: 'slow'
        });
        this.eq((Ωtcs___6 = function() {
          return type_of(walker.scan);
        }), 'function');
        this.eq((Ωtcs___7 = function() {
          return type_of(walker.scan('x'));
        }), 'generator');
        //.....................................................................................................
        // 'Ωtcs___8', jr segment for segment from walker.scan sources.source_1
        // 'Ωtcs___9', jr segment for segment from walker.scan sources.long_source_nl
        // 'Ωtcs__10', jr segment for segment from walker.scan sources.long_source_one_line
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var segment, segments, walker, Ωtcs__11, Ωtcs__12, Ωtcs__13;
        walker = new Segmenter({
          mode: 'slow'
        });
        segments = walker.scan(sources.source_1);
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__11 = function() {
          return /\bNr\s+1\b/.test(segment);
        }), true);
        this.eq((Ωtcs__12 = function() {
          return /\bNr\s+[^1]+\b/.test(segment);
        }), false);
        this.eq((Ωtcs__13 = function() {
          return segments.next().done;
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var segment, segments, walker, Ωtcs__14, Ωtcs__15, Ωtcs__16, Ωtcs__17, Ωtcs__18, Ωtcs__19, Ωtcs__20;
        walker = new Segmenter({
          mode: 'slow'
        });
        segments = walker.scan(sources.long_source_nl);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__14 = function() {
          return /\bNr\s+1\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__15 = function() {
          return /\bNr\s+2\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__16 = function() {
          return /\bNr\s+3\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__17 = function() {
          return /\bNr\s+4\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__18 = function() {
          return /\bNr\s+5\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__19 = function() {
          return /\bNr\s+6\b/.test(segment);
        }), true);
        //.....................................................................................................
        this.eq((Ωtcs__20 = function() {
          return segments.next().done;
        }), true);
        for (segment of segments) {
          info('Ω__21', jr(segment));
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var segment, segments, walker, Ωtcs__22, Ωtcs__23, Ωtcs__24, Ωtcs__25, Ωtcs__26, Ωtcs__27, Ωtcs__28;
        walker = new Segmenter({
          mode: 'slow'
        });
        segments = walker.scan(sources.long_source_one_line);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__22 = function() {
          return /\bNr\s+1\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__23 = function() {
          return /\bNr\s+2\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__24 = function() {
          return /\bNr\s+3\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__25 = function() {
          return /\bNr\s+4\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__26 = function() {
          return /\bNr\s+5\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__27 = function() {
          return /\bNr\s+6\b/.test(segment);
        }), true);
        //.....................................................................................................
        this.eq((Ωtcs__28 = function() {
          return segments.next().done;
        }), true);
        for (segment of segments) {
          info('Ω__29', jr(segment));
        }
        return null;
      })();
      // #.....................................................................................................
      // for token from walker.scan_tokens sources.long_source_one_line
      //   info 'Ωtcs__30', ( rpr token.fqname ), ( rpr token .hit ) unless ( token.fqname is 'top.ws' ) or ( token.is_system )
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    slow_segmenter_with_line_input: function() {
      var Segmenter, Undumper, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Segmenter} = SFMODULES.require_coarse_sqlite_statement_segmenter());
      ({Undumper} = SFMODULES.require_sqlite_undumper());
      jr = JSON.stringify;
      sources = get_various_sources();
      (() => {        //.......................................................................................................
        var done, line, line_nr, segment, segments, value, walker, Ω__32, Ωtcs__33;
        walker = new Segmenter({
          mode: 'slow'
        });
        line_nr = 0;
        segment = null;
        for (line of walk_lines(sources.source_1)) {
          line_nr++;
          debug('Ωtcs__31', {line_nr, line});
          segments = walker.scan(line);
          ({value, done} = segments.next());
          if (done) {
            continue;
          }
          if (segment != null) {
            this.eq((Ω__32 = function() {
              return false;
            }), "expect one segment, received two segments");
          } else {
            segment = value;
            this.eq((Ωtcs__33 = function() {
              return segment;
            }), `\ncreate table "names" ( /* Nr 1 */\n  name text unique not null,\n  "no-comment[" /* bcomment! */ text not null default 'no;comment', -- lcomment brother\n  [uuugh....] integer );`);
          }
        }
        // @eq ( Ωtcs__34 = -> /// \b Nr \s+ 1     \b ///.test segment ), true
        // @eq ( Ωtcs__35 = -> /// \b Nr \s+ [^1]+ \b ///.test segment ), false
        // @eq ( Ωtcs__36 = -> segments.next().done ), true
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    fast_segmenter_with_line_input: function() {
      var Segmenter, Undumper, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Segmenter} = SFMODULES.require_coarse_sqlite_statement_segmenter());
      ({Undumper} = SFMODULES.require_sqlite_undumper());
      jr = JSON.stringify;
      sources = get_realistic_sources();
      (() => {        //.......................................................................................................
        var line, line_nr, segment, segments, walker;
        walker = new Segmenter({
          mode: 'fast'
        });
        line_nr = 0;
        segment = null;
        for (line of walk_lines(sources.realistic_source_1)) {
          line_nr++;
          segments = walker.scan(line);
// debug 'Ωtcs__37', { line_nr, line, segments, }
          for (segment of segments) {
            info('Ωtcs__38', rpr(segment));
          }
        }
        // { value,
        //   done, } = segments.next()
        // continue if done
        // if segment?
        //   @eq ( Ω__39 = -> false ), "expect one segment, received two segments"
        // else
        //   segment = value
        //   @eq ( Ωtcs__40 = -> segment ), """\ncreate table "names" ( /* Nr 1 */\n  name text unique not null,\n  "no-comment[" /* bcomment! */ text not null default 'no;comment', -- lcomment brother\n  [uuugh....] integer );"""
        // # @eq ( Ωtcs__41 = -> /// \b Nr \s+ 1     \b ///.test segment ), true
        // # @eq ( Ωtcs__42 = -> /// \b Nr \s+ [^1]+ \b ///.test segment ), false
        // # @eq ( Ωtcs__43 = -> segments.next().done ), true
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    slow_undumper: function() {
      var Dbric, Dbric_std, SQL, Segmenter, Undumper, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Segmenter} = SFMODULES.require_coarse_sqlite_statement_segmenter());
      ({Undumper} = SFMODULES.require_sqlite_undumper());
      ({Dbric, Dbric_std, SQL} = SFMODULES.unstable.require_dbric());
      jr = JSON.stringify;
      sources = get_various_sources();
      (() => {        //.......................................................................................................
        var call_results, db, row, rows, show, statement, statements, undumper, Ωtcs__44, Ωtcs__45, Ωtcs__46, Ωtcs__47, Ωtcs__48, Ωtcs__49, Ωtcs__50, Ωtcs__51, Ωtcs__52, Ωtcs__53, Ωtcs__54, Ωtcs__55, Ωtcs__56;
        //.....................................................................................................
        call_results = [];
        db = new Dbric(':memory:');
        db.create_function({
          name: 'trigger_on_before_insert',
          call: function(table_name, rowid) {
            return call_results.push({table_name, rowid});
          }
        });
        undumper = new Undumper({
          db,
          mode: 'slow'
        });
        sources = get_realistic_sources();
        show = function(x) {
          echo(jr(x));
          return x;
        };
        //.....................................................................................................
        statements = undumper.scan(sources.realistic_source_1);
        statement = show(statements.next().value);
        this.eq((Ωtcs__44 = function() {
          return statement;
        }), "-- ---X---X---\nselect 24 as a;");
        statement = show(statements.next().value);
        this.eq((Ωtcs__45 = function() {
          return statement;
        }), "\n\n-- ---X---X---\ncreate table t (\n    rowid text unique not null primary key );");
        statement = show(statements.next().value);
        this.eq((Ωtcs__46 = function() {
          return statement;
        }), "\n\n-- ---X---X---\nCREATE TRIGGER some_trigger  /* Nr 4 */\nbefore insert on t\nfor each row begin\n  select trigger_on_before_insert( 't', new.rowid );\n\n  end /*comment */ -- newline!\n  /* Nr 5 */ ;");
        statement = show(statements.next().value);
        this.eq((Ωtcs__47 = function() {
          return statement;
        }), "\n\n-- ---X---X---\ninsert into t ( rowid ) values ( 'first' );");
        statement = show(statements.next().value);
        this.eq((Ωtcs__48 = function() {
          return statement;
        }), "\n-- ---X---X---\ninsert into t ( rowid ) values ( 'second' );");
        statement = show(statements.next().value);
        this.eq((Ωtcs__49 = function() {
          return statement;
        }), "\n-- ---X---X---\ninsert into t ( rowid ) values ( 'third' );");
        this.eq((Ωtcs__50 = function() {
          return statements.next().done;
        }), true);
        (function() {
          var results1;
          results1 = [];
          for (statement of statements) {
            results1.push(statement);
          }
          return results1;
        })();
        //.....................................................................................................
        /* NOTE ensure that statements are applied in case the above is incomplete */        statement = SQL`select * from t order by rowid;`;
        for (row of db.walk(statement)) {
          echo(jr(row));
        }
        rows = db.walk(statement);
        this.eq((Ωtcs__51 = function() {
          return rows.next().value;
        }), {
          rowid: 'first'
        });
        this.eq((Ωtcs__52 = function() {
          return rows.next().value;
        }), {
          rowid: 'second'
        });
        this.eq((Ωtcs__53 = function() {
          return rows.next().value;
        }), {
          rowid: 'third'
        });
        this.eq((Ωtcs__54 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        statement = SQL`select name, sql from sqlite_schema where type in ( 'table', 'view' ) order by name, type;`;
        for (row of db.walk(statement)) {
          echo(jr(row));
        }
        rows = db.walk(statement);
        this.eq((Ωtcs__55 = function() {
          return rows.next().value;
        }), {
          "name": "t",
          "sql": "CREATE TABLE t (\n    rowid text unique not null primary key )"
        });
        this.eq((Ωtcs__56 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    fast_undumper: function() {
      var Dbric, Dbric_std, SQL, Segmenter, Undumper, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Segmenter} = SFMODULES.require_coarse_sqlite_statement_segmenter());
      ({Undumper} = SFMODULES.require_sqlite_undumper());
      ({Dbric, Dbric_std, SQL} = SFMODULES.unstable.require_dbric());
      jr = JSON.stringify;
      sources = get_various_sources();
      (() => {        //.......................................................................................................
        var call_results, db, line, line_nr, results, show, statement, statements, undumper, Ωtcs__57, Ωtcs__58, Ωtcs__59, Ωtcs__60, Ωtcs__61, Ωtcs__62;
        //.....................................................................................................
        call_results = [];
        db = new Dbric(':memory:');
        db.create_function({
          name: 'trigger_on_before_insert',
          call: function(table_name, rowid) {
            return call_results.push({table_name, rowid});
          }
        });
        undumper = new Undumper({
          db,
          mode: 'fast'
        });
        sources = get_realistic_sources();
        show = function(x) {
          echo(jr(x));
          return x;
        };
        line_nr = 0;
        results = [];
//.....................................................................................................
        for (line of walk_lines(sources.realistic_source_1)) {
          line_nr++;
          statements = (function() {
            var results1;
            results1 = [];
            for (statement of undumper.scan(line)) {
              results1.push(results.push(statement));
            }
            return results1;
          })();
        }
        //.....................................................................................................
        this.eq((Ωtcs__57 = function() {
          return results[0];
        }), "-- ---X---X---\nselect 24 as a;");
        this.eq((Ωtcs__58 = function() {
          return results[1];
        }), "-- ---X---X---\ncreate table t (\n    rowid text unique not null primary key );");
        this.eq((Ωtcs__59 = function() {
          return results[2];
        }), "-- ---X---X---\nCREATE TRIGGER some_trigger  /* Nr 4 */\nbefore insert on t\nfor each row begin\n  select trigger_on_before_insert( 't', new.rowid );\n  end /*comment */ -- newline!\n  /* Nr 5 */ ;");
        this.eq((Ωtcs__60 = function() {
          return results[3];
        }), "-- ---X---X---\ninsert into t ( rowid ) values ( 'first' );");
        this.eq((Ωtcs__61 = function() {
          return results[4];
        }), "-- ---X---X---\ninsert into t ( rowid ) values ( 'second' );");
        this.eq((Ωtcs__62 = function() {
          return results[5];
        }), "-- ---X---X---\ninsert into t ( rowid ) values ( 'third' );");
        // @eq ( Ωtcs__63 = -> statements.next().done ), true
        // ( statement for statement from statements ) ### NOTE ensure that statements are applied in case the above is incomplete ###
        // #.....................................................................................................
        // statement = SQL"select * from t order by rowid;"
        // echo jr row for row from db.walk statement
        // rows = db.walk statement
        // @eq ( Ωtcs__64 = -> rows.next().value ), { rowid: 'first', }
        // @eq ( Ωtcs__65 = -> rows.next().value ), { rowid: 'second', }
        // @eq ( Ωtcs__66 = -> rows.next().value ), { rowid: 'third', }
        // @eq ( Ωtcs__67 = -> rows.next().done ), true
        // #.....................................................................................................
        // statement = SQL"select name, sql from sqlite_schema where type in ( 'table', 'view' ) order by name, type;"
        // echo jr row for row from db.walk statement
        // rows = db.walk statement
        // @eq ( Ωtcs__68 = -> rows.next().value ), {"name":"t","sql":"CREATE TABLE t (\n    rowid text unique not null primary key )"}
        // @eq ( Ωtcs__69 = -> rows.next().done ), true
        return null;
      })();
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      // demo_infinite_proxy()
      // demo_colorful_proxy()
      guytest_cfg = {
        throw_on_error: true,
        show_passes: true,
        report_checks: true
      };
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      return (new Test(guytest_cfg)).test({tests});
    })();
  }

  // # ( new Test guytest_cfg ).test { segmenter: tests.segmenter, }
// ( new Test guytest_cfg ).test { fast_undumper: tests.fast_undumper, }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtY29hcnNlLXNxbGl0ZS1zdGF0ZW1lbnQtc2VnbWVudGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLHFCQUFBLEVBQUEsbUJBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsNEJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEMsRUFiQTs7Ozs7RUE0QkEsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsMkJBQVIsQ0FBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsbUNBQVIsRUE3QjVCOzs7Ozs7RUFrQ0EsbUJBQUEsR0FBc0Is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QSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDthQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsQ0FBRSxLQUFGLENBQTlCO0lBTnNDLENBQUEsSUFBeEM7OztFQXhaQTs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1zcWxpdGUtc2VnbWVudGVyJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIHsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxuIyB7IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xueyBUZXN0LCAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuIyBGUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiMgUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5nZXRfdmFyaW91c19zb3VyY2VzID0gLT5cbiAgU1FMICAgPSBTdHJpbmcucmF3XG4gIFIgICAgID0ge31cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBSLmxvbmdfc291cmNlX25sID0gU1FMXCJcIlwiXG5cbiAgICBjcmVhdGUgdGFibGUgXCJuYW1lc1wiICggLyogTnIgMSAqL1xuICAgICAgbmFtZSB0ZXh0IHVuaXF1ZSBub3QgbnVsbCxcbiAgICAgIFwibm8tY29tbWVudFtcIiAvKiBiY29tbWVudCEgKi8gdGV4dCBub3QgbnVsbCBkZWZhdWx0ICdubztjb21tZW50JywgLS0gbGNvbW1lbnQgYnJvdGhlclxuICAgICAgW3V1dWdoLi4uLl0gaW50ZWdlciApO1xuXG4gICAgLS0gLS0tWC0tLVgtLS1cbiAgICAtLSBBbGFzLCBhIHZhbGlkIHN0YXRlbWVudCAoYWx0aG91Z2ggcHJvYmFibHkgbm90IG9uZSB0aGF0IGNhbiBhcHBlYXIgaW4gcmVndWxhciBkdW1wIGZpbGUpICMjI1xuICAgIC8qIE5yIDIgKi8gZGVsZXRlIGZyb20gZW5kIHdoZXJlIGVuZCA9ICd4JyByZXR1cm5pbmcgZW5kO1xuXG4gICAgLS0gLS0tWC0tLVgtLS1cbiAgICAvKiBOciAzICovIGJlZ2luIGltbWVkaWF0ZSB0cmFuc2FjdGlvbjtcblxuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgQ1JFQVRFIFRSSUdHRVIganpyX21pcnJvcl90cmlwbGVzX3JlZ2lzdGVyICAvKiBOciA0ICovXG4gICAgYmVmb3JlIGluc2VydCBvbiBqenJfbWlycm9yX3RyaXBsZXNfYmFzZVxuICAgIGZvciBlYWNoIHJvdyBiZWdpblxuICAgICAgc2VsZWN0IHRyaWdnZXJfb25fYmVmb3JlX2luc2VydCggJ2p6cl9taXJyb3JfdHJpcGxlc19iYXNlJywgbmV3LnJvd2lkLCBuZXcucmVmLCBuZXcucywgbmV3LnYsIG5ldy5vICk7XG4gICAgICBlbmQgLypjb21tZW50ICovIC0tIG5ld2xpbmUhXG4gICAgICAvKiBOciA1ICovIDtcblxuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgLyogTnIgNiAqLyBzZWxlY3QgJ2EnJ3o7JyBhcyBcInNlbWlcIlwiO2NvbG9uXCI7XG4gICAgXCJcIlwiXG4gICAgIyBDUkVBVEUgVEFCTEUganpyX21pcnJvcl9saW5lcyAoIC8qIE5yIDYgKi9cbiAgICAjICAgLS0gJ3Q6amZtOidcbiAgICAjICAgcm93aWQgICAgIHRleHQgICAgdW5pcXVlICBub3QgbnVsbCxcbiAgICAjICAgcmVmICAgICAgIHRleHQgICAgdW5pcXVlICBub3QgbnVsbCBnZW5lcmF0ZWQgYWx3YXlzIGFzICggZHNrZXkgfHwgJzpMPScgfHwgbGluZV9uciApIHZpcnR1YWwsXG4gICAgIyAgIGRza2V5ICAgICB0ZXh0ICAgICAgICAgICAgbm90IG51bGwsXG4gICAgIyAgIGxpbmVfbnIgICBpbnRlZ2VyICAgICAgICAgbm90IG51bGwsXG4gICAgIyAgIGxjb2RlICAgICB0ZXh0ICAgICAgICAgICAgbm90IG51bGwsXG4gICAgIyAgIGxpbmUgICAgICB0ZXh0ICAgICAgICAgICAgbm90IG51bGwsXG4gICAgIyAgIGpmaWVsZHMgICBqc29uICAgICAgICAgICAgICAgIG51bGwsXG4gICAgIyAgIGZpZWxkXzEgICB0ZXh0ICAgICAgICAgICAgICAgIG51bGwsXG4gICAgIyAgIGZpZWxkXzIgICB0ZXh0ICAgICAgICAgICAgICAgIG51bGwsXG4gICAgIyAgIGZpZWxkXzMgICB0ZXh0ICAgICAgICAgICAgICAgIG51bGwsXG4gICAgIyAgIGZpZWxkXzQgICB0ZXh0ICAgICAgICAgICAgICAgIG51bGwsXG4gICAgIyBwcmltYXJ5IGtleSAoIHJvd2lkICksXG4gICAgIyBjaGVjayAoIHJvd2lkIHJlZ2V4cCAnXnQ6bXI6bG46Uj1cXGQrJCcpLFxuICAgICMgdW5pcXVlICggZHNrZXksIGxpbmVfbnIgKSxcbiAgICAjIGZvcmVpZ24ga2V5ICggbGNvZGUgKSByZWZlcmVuY2VzIGp6cl9taXJyb3JfbGNvZGVzICggbGNvZGUgKSApO1xuICAgICMgSU5TRVJUIElOVE8ganpyX21pcnJvcl9saW5lcyBWQUxVRVMoJ3Q6bXI6bG46Uj0xJywnZGljdDptZWFuaW5ncycsMSwnQicsJycsTlVMTCxOVUxMLE5VTEwsTlVMTCxOVUxMKTtcbiAgICAjIElOU0VSVCBJTlRPIGp6cl9taXJyb3JfbGluZXMgVkFMVUVTKCd0Om1yOmxuOlI9MicsJ2RpY3Q6bWVhbmluZ3MnLDIsJ0InLCcnLE5VTEwsTlVMTCxOVUxMLE5VTEwsTlVMTCk7XG4gICAgIyBJTlNFUlQgSU5UTyBqenJfbWlycm9yX2xpbmVzIFZBTFVFUygndDptcjpsbjpSPTMnLCdkaWN0Om1lYW5pbmdzJywzLCdCJywnJyxOVUxMLE5VTEwsTlVMTCxOVUxMLE5VTEwpO1xuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIFJbIFwic291cmNlXyN7aWR4ICsgMX1cIiBdICA9IHNvdXJjZSBmb3Igc291cmNlLCBpZHggaW4gUi5sb25nX3NvdXJjZV9ubC5zcGxpdCAvLS0gLS0tWC4qL2dtXG4gIGdldF9wbGFpbl9zb3VyY2VzICAgICAgICAgPSAtPiAoIHNvdXJjZSBmb3Iga2V5LCBzb3VyY2Ugb2YgUiB3aGVuIC9ec291cmNlX1xcZCsvLnRlc3Qga2V5IClcbiAgIyBnZXRfc291cmNlc19ub19sY29tbWVudHMgID0gLT4gKCAoIHNvdXJjZS5yZXBsYWNlIC8oPzw9XFxzKS0tLiokL2csICcnICkgZm9yIHNvdXJjZSBpbiBnZXRfcGxhaW5fc291cmNlcygpIClcbiAgZ2V0X3NvdXJjZXNfbm9fbGNvbW1lbnRzICA9IC0+ICggKCBzb3VyY2UucmVwbGFjZSAvLS0uKiQvZ20sICcnICkgZm9yIHNvdXJjZSBpbiBnZXRfcGxhaW5fc291cmNlcygpIClcbiAgIyBkZWJ1ZyAnzql0Y3NfX18xJywgJ1xcbicgKyBzb3VyY2UgZm9yIHNvdXJjZSBpbiBnZXRfcGxhaW5fc291cmNlcygpXG4gICMgZGVidWcgJ86pdGNzX19fMicsICdcXG4nICsgc291cmNlIGZvciBzb3VyY2UgaW4gZ2V0X3NvdXJjZXNfbm9fbGNvbW1lbnRzKClcbiAgIyBSLmxvbmdfc291cmNlX25sICAgICAgICAgID0gKCBnZXRfcGxhaW5fc291cmNlcygpICkuam9pbiAnXFxuJ1xuICBSLmxvbmdfc291cmNlX29uZV9saW5lICAgID0gKCAoIGdldF9zb3VyY2VzX25vX2xjb21tZW50cygpICkuam9pbiAnJyApLnJlcGxhY2UgL1xcbi9nLCAnJ1xuICByZXR1cm4gUlxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmdldF9yZWFsaXN0aWNfc291cmNlcyA9IC0+XG4gIFNRTCAgID0gU3RyaW5nLnJhd1xuICBSICAgICA9IHt9XG4gIFIucmVhbGlzdGljX3NvdXJjZV8xID0gU1FMXCJcIlwiXG4gICAgLS0gLS0tWC0tLVgtLS1cbiAgICBzZWxlY3QgMjQgYXMgYTtcblxuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgY3JlYXRlIHRhYmxlIHQgKFxuICAgICAgICByb3dpZCB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1xuXG4gICAgLS0gLS0tWC0tLVgtLS1cbiAgICBDUkVBVEUgVFJJR0dFUiBzb21lX3RyaWdnZXIgIC8qIE5yIDQgKi9cbiAgICBiZWZvcmUgaW5zZXJ0IG9uIHRcbiAgICBmb3IgZWFjaCByb3cgYmVnaW5cbiAgICAgIHNlbGVjdCB0cmlnZ2VyX29uX2JlZm9yZV9pbnNlcnQoICd0JywgbmV3LnJvd2lkICk7XG4gICAgICBlbmQgLypjb21tZW50ICovIC0tIG5ld2xpbmUhXG4gICAgICAvKiBOciA1ICovIDtcblxuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgaW5zZXJ0IGludG8gdCAoIHJvd2lkICkgdmFsdWVzICggJ2ZpcnN0JyApO1xuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgaW5zZXJ0IGludG8gdCAoIHJvd2lkICkgdmFsdWVzICggJ3NlY29uZCcgKTtcbiAgICAtLSAtLS1YLS0tWC0tLVxuICAgIGluc2VydCBpbnRvIHQgKCByb3dpZCApIHZhbHVlcyAoICd0aGlyZCcgKTtcbiAgICBcIlwiXCJcbiAgcmV0dXJuIFJcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG53YWxrX2xpbmVzID0gKCB0ZXh0ICkgLT4geWllbGQgZnJvbSB0ZXh0LnNwbGl0ICdcXG4nXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2VnbWVudGVyOiAtPlxuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IFNlZ21lbnRlciwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfY29hcnNlX3NxbGl0ZV9zdGF0ZW1lbnRfc2VnbWVudGVyKClcbiAgICB7IFVuZHVtcGVyLCAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfc3FsaXRlX3VuZHVtcGVyKClcbiAgICBqciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gSlNPTi5zdHJpbmdpZnlcbiAgICBzb3VyY2VzICAgICAgICAgICAgICAgICAgICAgICAgID0gZ2V0X3ZhcmlvdXNfc291cmNlcygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICB3YWxrZXIgICAgICAgID0gbmV3IFNlZ21lbnRlciB7IG1vZGU6ICdzbG93JywgfVxuICAgICAgQHRocm93cyAoIM6pdGNzX19fMyA9IC0+IHdhbGtlci5zY2FuIHVuZGVmaW5lZCAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dC9cbiAgICAgIEB0aHJvd3MgKCDOqXRjc19fXzQgPSAtPiB3YWxrZXIuc2NhbiBudWxsICAgICAgICAgICksIC9leHBlY3RlZCBhIHRleHQvXG4gICAgICBAdGhyb3dzICggzql0Y3NfX181ID0gLT4gd2Fsa2VyLnNjYW4gU3ltYm9sICc/PycgICApLCAvZXhwZWN0ZWQgYSB0ZXh0L1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB3YWxrZXIgICAgICAgID0gbmV3IFNlZ21lbnRlciB7IG1vZGU6ICdzbG93JywgfVxuICAgICAgQGVxICggzql0Y3NfX182ID0gLT4gdHlwZV9vZiB3YWxrZXIuc2NhbiAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgQGVxICggzql0Y3NfX183ID0gLT4gdHlwZV9vZiB3YWxrZXIuc2NhbiAneCcgKSwgJ2dlbmVyYXRvcidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyAnzql0Y3NfX184JywganIgc2VnbWVudCBmb3Igc2VnbWVudCBmcm9tIHdhbGtlci5zY2FuIHNvdXJjZXMuc291cmNlXzFcbiAgICAgICMgJ86pdGNzX19fOScsIGpyIHNlZ21lbnQgZm9yIHNlZ21lbnQgZnJvbSB3YWxrZXIuc2NhbiBzb3VyY2VzLmxvbmdfc291cmNlX25sXG4gICAgICAjICfOqXRjc19fMTAnLCBqciBzZWdtZW50IGZvciBzZWdtZW50IGZyb20gd2Fsa2VyLnNjYW4gc291cmNlcy5sb25nX3NvdXJjZV9vbmVfbGluZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHdhbGtlciAgICA9IG5ldyBTZWdtZW50ZXIgeyBtb2RlOiAnc2xvdycsIH1cbiAgICAgIHNlZ21lbnRzICA9IHdhbGtlci5zY2FuIHNvdXJjZXMuc291cmNlXzFcbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMTEgPSAtPiAvLy8gXFxiIE5yIFxccysgMSAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgQGVxICggzql0Y3NfXzEyID0gLT4gLy8vIFxcYiBOciBcXHMrIFteMV0rIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIGZhbHNlXG4gICAgICBAZXEgKCDOqXRjc19fMTMgPSAtPiBzZWdtZW50cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHdhbGtlciAgICA9IG5ldyBTZWdtZW50ZXIgeyBtb2RlOiAnc2xvdycsIH1cbiAgICAgIHNlZ21lbnRzICA9IHdhbGtlci5zY2FuIHNvdXJjZXMubG9uZ19zb3VyY2VfbmxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18xNCA9IC0+IC8vLyBcXGIgTnIgXFxzKyAxICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMTUgPSAtPiAvLy8gXFxiIE5yIFxccysgMiAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzE2ID0gLT4gLy8vIFxcYiBOciBcXHMrIDMgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18xNyA9IC0+IC8vLyBcXGIgTnIgXFxzKyA0ICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMTggPSAtPiAvLy8gXFxiIE5yIFxccysgNSAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzE5ID0gLT4gLy8vIFxcYiBOciBcXHMrIDYgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzql0Y3NfXzIwID0gLT4gc2VnbWVudHMubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgaW5mbyAnzqlfXzIxJywganIgc2VnbWVudCBmb3Igc2VnbWVudCBmcm9tIHNlZ21lbnRzXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHdhbGtlciAgICA9IG5ldyBTZWdtZW50ZXIgeyBtb2RlOiAnc2xvdycsIH1cbiAgICAgIHNlZ21lbnRzICA9IHdhbGtlci5zY2FuIHNvdXJjZXMubG9uZ19zb3VyY2Vfb25lX2xpbmVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18yMiA9IC0+IC8vLyBcXGIgTnIgXFxzKyAxICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMjMgPSAtPiAvLy8gXFxiIE5yIFxccysgMiAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzI0ID0gLT4gLy8vIFxcYiBOciBcXHMrIDMgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18yNSA9IC0+IC8vLyBcXGIgTnIgXFxzKyA0ICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMjYgPSAtPiAvLy8gXFxiIE5yIFxccysgNSAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzI3ID0gLT4gLy8vIFxcYiBOciBcXHMrIDYgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzql0Y3NfXzI4ID0gLT4gc2VnbWVudHMubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgaW5mbyAnzqlfXzI5JywganIgc2VnbWVudCBmb3Igc2VnbWVudCBmcm9tIHNlZ21lbnRzXG4gICAgICA7bnVsbFxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBmb3IgdG9rZW4gZnJvbSB3YWxrZXIuc2Nhbl90b2tlbnMgc291cmNlcy5sb25nX3NvdXJjZV9vbmVfbGluZVxuICAgICMgICBpbmZvICfOqXRjc19fMzAnLCAoIHJwciB0b2tlbi5mcW5hbWUgKSwgKCBycHIgdG9rZW4gLmhpdCApIHVubGVzcyAoIHRva2VuLmZxbmFtZSBpcyAndG9wLndzJyApIG9yICggdG9rZW4uaXNfc3lzdGVtIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzbG93X3NlZ21lbnRlcl93aXRoX2xpbmVfaW5wdXQ6IC0+XG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgU2VnbWVudGVyLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9jb2Fyc2Vfc3FsaXRlX3N0YXRlbWVudF9zZWdtZW50ZXIoKVxuICAgIHsgVW5kdW1wZXIsICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9zcWxpdGVfdW5kdW1wZXIoKVxuICAgIGpyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBKU09OLnN0cmluZ2lmeVxuICAgIHNvdXJjZXMgICAgICAgICAgICAgICAgICAgICAgICAgPSBnZXRfdmFyaW91c19zb3VyY2VzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB3YWxrZXIgICAgPSBuZXcgU2VnbWVudGVyIHsgbW9kZTogJ3Nsb3cnLCB9XG4gICAgICBsaW5lX25yICAgPSAwXG4gICAgICBzZWdtZW50ICAgPSBudWxsXG4gICAgICBmb3IgbGluZSBmcm9tIHdhbGtfbGluZXMgc291cmNlcy5zb3VyY2VfMVxuICAgICAgICBsaW5lX25yKytcbiAgICAgICAgZGVidWcgJ86pdGNzX18zMScsIHsgbGluZV9uciwgbGluZSwgfVxuICAgICAgICBzZWdtZW50cyAgPSB3YWxrZXIuc2NhbiBsaW5lXG4gICAgICAgIHsgdmFsdWUsXG4gICAgICAgICAgZG9uZSwgfSA9IHNlZ21lbnRzLm5leHQoKVxuICAgICAgICBjb250aW51ZSBpZiBkb25lXG4gICAgICAgIGlmIHNlZ21lbnQ/XG4gICAgICAgICAgQGVxICggzqlfXzMyID0gLT4gZmFsc2UgKSwgXCJleHBlY3Qgb25lIHNlZ21lbnQsIHJlY2VpdmVkIHR3byBzZWdtZW50c1wiXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBzZWdtZW50ID0gdmFsdWVcbiAgICAgICAgICBAZXEgKCDOqXRjc19fMzMgPSAtPiBzZWdtZW50ICksIFwiXCJcIlxcbmNyZWF0ZSB0YWJsZSBcIm5hbWVzXCIgKCAvKiBOciAxICovXFxuICBuYW1lIHRleHQgdW5pcXVlIG5vdCBudWxsLFxcbiAgXCJuby1jb21tZW50W1wiIC8qIGJjb21tZW50ISAqLyB0ZXh0IG5vdCBudWxsIGRlZmF1bHQgJ25vO2NvbW1lbnQnLCAtLSBsY29tbWVudCBicm90aGVyXFxuICBbdXV1Z2guLi4uXSBpbnRlZ2VyICk7XCJcIlwiXG4gICAgICAgICMgQGVxICggzql0Y3NfXzM0ID0gLT4gLy8vIFxcYiBOciBcXHMrIDEgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICAgIyBAZXEgKCDOqXRjc19fMzUgPSAtPiAvLy8gXFxiIE5yIFxccysgW14xXSsgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgZmFsc2VcbiAgICAgICAgIyBAZXEgKCDOqXRjc19fMzYgPSAtPiBzZWdtZW50cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZhc3Rfc2VnbWVudGVyX3dpdGhfbGluZV9pbnB1dDogLT5cbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBTZWdtZW50ZXIsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2NvYXJzZV9zcWxpdGVfc3RhdGVtZW50X3NlZ21lbnRlcigpXG4gICAgeyBVbmR1bXBlciwgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3NxbGl0ZV91bmR1bXBlcigpXG4gICAganIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IEpTT04uc3RyaW5naWZ5XG4gICAgc291cmNlcyAgICAgICAgICAgICAgICAgICAgICAgICA9IGdldF9yZWFsaXN0aWNfc291cmNlcygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgd2Fsa2VyICAgID0gbmV3IFNlZ21lbnRlciB7IG1vZGU6ICdmYXN0JywgfVxuICAgICAgbGluZV9uciAgID0gMFxuICAgICAgc2VnbWVudCAgID0gbnVsbFxuICAgICAgZm9yIGxpbmUgZnJvbSB3YWxrX2xpbmVzIHNvdXJjZXMucmVhbGlzdGljX3NvdXJjZV8xXG4gICAgICAgIGxpbmVfbnIrK1xuICAgICAgICBzZWdtZW50cyAgPSB3YWxrZXIuc2NhbiBsaW5lXG4gICAgICAgICMgZGVidWcgJ86pdGNzX18zNycsIHsgbGluZV9uciwgbGluZSwgc2VnbWVudHMsIH1cbiAgICAgICAgZm9yIHNlZ21lbnQgZnJvbSBzZWdtZW50c1xuICAgICAgICAgIGluZm8gJ86pdGNzX18zOCcsIHJwciBzZWdtZW50XG4gICAgICAgICMgeyB2YWx1ZSxcbiAgICAgICAgIyAgIGRvbmUsIH0gPSBzZWdtZW50cy5uZXh0KClcbiAgICAgICAgIyBjb250aW51ZSBpZiBkb25lXG4gICAgICAgICMgaWYgc2VnbWVudD9cbiAgICAgICAgIyAgIEBlcSAoIM6pX18zOSA9IC0+IGZhbHNlICksIFwiZXhwZWN0IG9uZSBzZWdtZW50LCByZWNlaXZlZCB0d28gc2VnbWVudHNcIlxuICAgICAgICAjIGVsc2VcbiAgICAgICAgIyAgIHNlZ21lbnQgPSB2YWx1ZVxuICAgICAgICAjICAgQGVxICggzql0Y3NfXzQwID0gLT4gc2VnbWVudCApLCBcIlwiXCJcXG5jcmVhdGUgdGFibGUgXCJuYW1lc1wiICggLyogTnIgMSAqL1xcbiAgbmFtZSB0ZXh0IHVuaXF1ZSBub3QgbnVsbCxcXG4gIFwibm8tY29tbWVudFtcIiAvKiBiY29tbWVudCEgKi8gdGV4dCBub3QgbnVsbCBkZWZhdWx0ICdubztjb21tZW50JywgLS0gbGNvbW1lbnQgYnJvdGhlclxcbiAgW3V1dWdoLi4uLl0gaW50ZWdlciApO1wiXCJcIlxuICAgICAgICAjICMgQGVxICggzql0Y3NfXzQxID0gLT4gLy8vIFxcYiBOciBcXHMrIDEgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICAgIyAjIEBlcSAoIM6pdGNzX180MiA9IC0+IC8vLyBcXGIgTnIgXFxzKyBbXjFdKyBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCBmYWxzZVxuICAgICAgICAjICMgQGVxICggzql0Y3NfXzQzID0gLT4gc2VnbWVudHMubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzbG93X3VuZHVtcGVyOiAtPlxuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IFNlZ21lbnRlciwgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfY29hcnNlX3NxbGl0ZV9zdGF0ZW1lbnRfc2VnbWVudGVyKClcbiAgICB7IFVuZHVtcGVyLCAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfc3FsaXRlX3VuZHVtcGVyKClcbiAgICB7IERicmljLFxuICAgICAgRGJyaWNfc3RkLFxuICAgICAgU1FMLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAganIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IEpTT04uc3RyaW5naWZ5XG4gICAgc291cmNlcyAgICAgICAgICAgICAgICAgICAgICAgICA9IGdldF92YXJpb3VzX3NvdXJjZXMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgY2FsbF9yZXN1bHRzICA9IFtdXG4gICAgICBkYiAgICAgICAgICA9IG5ldyBEYnJpYyAnOm1lbW9yeTonXG4gICAgICBkYi5jcmVhdGVfZnVuY3Rpb25cbiAgICAgICAgbmFtZTogJ3RyaWdnZXJfb25fYmVmb3JlX2luc2VydCdcbiAgICAgICAgY2FsbDogKCB0YWJsZV9uYW1lLCByb3dpZCApIC0+IGNhbGxfcmVzdWx0cy5wdXNoIHsgdGFibGVfbmFtZSwgcm93aWQsIH1cbiAgICAgIHVuZHVtcGVyICAgID0gbmV3IFVuZHVtcGVyIHsgZGIsIG1vZGU6ICdzbG93JywgfVxuICAgICAgc291cmNlcyAgICAgPSBnZXRfcmVhbGlzdGljX3NvdXJjZXMoKVxuICAgICAgc2hvdyAgICAgICAgPSAoIHggKSAtPiBlY2hvIGpyIHg7IHhcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc3RhdGVtZW50cyA9IHVuZHVtcGVyLnNjYW4gc291cmNlcy5yZWFsaXN0aWNfc291cmNlXzFcbiAgICAgIHN0YXRlbWVudCAgPSBzaG93IHN0YXRlbWVudHMubmV4dCgpLnZhbHVlOyBAZXEgKCDOqXRjc19fNDQgPSAtPiBzdGF0ZW1lbnQgKSwgXCItLSAtLS1YLS0tWC0tLVxcbnNlbGVjdCAyNCBhcyBhO1wiXG4gICAgICBzdGF0ZW1lbnQgID0gc2hvdyBzdGF0ZW1lbnRzLm5leHQoKS52YWx1ZTsgQGVxICggzql0Y3NfXzQ1ID0gLT4gc3RhdGVtZW50ICksIFwiXFxuXFxuLS0gLS0tWC0tLVgtLS1cXG5jcmVhdGUgdGFibGUgdCAoXFxuICAgIHJvd2lkIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcbiAgICAgIHN0YXRlbWVudCAgPSBzaG93IHN0YXRlbWVudHMubmV4dCgpLnZhbHVlOyBAZXEgKCDOqXRjc19fNDYgPSAtPiBzdGF0ZW1lbnQgKSwgXCJcXG5cXG4tLSAtLS1YLS0tWC0tLVxcbkNSRUFURSBUUklHR0VSIHNvbWVfdHJpZ2dlciAgLyogTnIgNCAqL1xcbmJlZm9yZSBpbnNlcnQgb24gdFxcbmZvciBlYWNoIHJvdyBiZWdpblxcbiAgc2VsZWN0IHRyaWdnZXJfb25fYmVmb3JlX2luc2VydCggJ3QnLCBuZXcucm93aWQgKTtcXG5cXG4gIGVuZCAvKmNvbW1lbnQgKi8gLS0gbmV3bGluZSFcXG4gIC8qIE5yIDUgKi8gO1wiXG4gICAgICBzdGF0ZW1lbnQgID0gc2hvdyBzdGF0ZW1lbnRzLm5leHQoKS52YWx1ZTsgQGVxICggzql0Y3NfXzQ3ID0gLT4gc3RhdGVtZW50ICksIFwiXFxuXFxuLS0gLS0tWC0tLVgtLS1cXG5pbnNlcnQgaW50byB0ICggcm93aWQgKSB2YWx1ZXMgKCAnZmlyc3QnICk7XCJcbiAgICAgIHN0YXRlbWVudCAgPSBzaG93IHN0YXRlbWVudHMubmV4dCgpLnZhbHVlOyBAZXEgKCDOqXRjc19fNDggPSAtPiBzdGF0ZW1lbnQgKSwgXCJcXG4tLSAtLS1YLS0tWC0tLVxcbmluc2VydCBpbnRvIHQgKCByb3dpZCApIHZhbHVlcyAoICdzZWNvbmQnICk7XCJcbiAgICAgIHN0YXRlbWVudCAgPSBzaG93IHN0YXRlbWVudHMubmV4dCgpLnZhbHVlOyBAZXEgKCDOqXRjc19fNDkgPSAtPiBzdGF0ZW1lbnQgKSwgXCJcXG4tLSAtLS1YLS0tWC0tLVxcbmluc2VydCBpbnRvIHQgKCByb3dpZCApIHZhbHVlcyAoICd0aGlyZCcgKTtcIlxuICAgICAgQGVxICggzql0Y3NfXzUwID0gLT4gc3RhdGVtZW50cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICAoIHN0YXRlbWVudCBmb3Igc3RhdGVtZW50IGZyb20gc3RhdGVtZW50cyApICMjIyBOT1RFIGVuc3VyZSB0aGF0IHN0YXRlbWVudHMgYXJlIGFwcGxpZWQgaW4gY2FzZSB0aGUgYWJvdmUgaXMgaW5jb21wbGV0ZSAjIyNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc3RhdGVtZW50ID0gU1FMXCJzZWxlY3QgKiBmcm9tIHQgb3JkZXIgYnkgcm93aWQ7XCJcbiAgICAgIGVjaG8ganIgcm93IGZvciByb3cgZnJvbSBkYi53YWxrIHN0YXRlbWVudFxuICAgICAgcm93cyA9IGRiLndhbGsgc3RhdGVtZW50XG4gICAgICBAZXEgKCDOqXRjc19fNTEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAnZmlyc3QnLCB9XG4gICAgICBAZXEgKCDOqXRjc19fNTIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAnc2Vjb25kJywgfVxuICAgICAgQGVxICggzql0Y3NfXzUzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3RoaXJkJywgfVxuICAgICAgQGVxICggzql0Y3NfXzU0ID0gLT4gcm93cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHN0YXRlbWVudCA9IFNRTFwic2VsZWN0IG5hbWUsIHNxbCBmcm9tIHNxbGl0ZV9zY2hlbWEgd2hlcmUgdHlwZSBpbiAoICd0YWJsZScsICd2aWV3JyApIG9yZGVyIGJ5IG5hbWUsIHR5cGU7XCJcbiAgICAgIGVjaG8ganIgcm93IGZvciByb3cgZnJvbSBkYi53YWxrIHN0YXRlbWVudFxuICAgICAgcm93cyA9IGRiLndhbGsgc3RhdGVtZW50XG4gICAgICBAZXEgKCDOqXRjc19fNTUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7XCJuYW1lXCI6XCJ0XCIsXCJzcWxcIjpcIkNSRUFURSBUQUJMRSB0IChcXG4gICAgcm93aWQgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKVwifVxuICAgICAgQGVxICggzql0Y3NfXzU2ID0gLT4gcm93cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZhc3RfdW5kdW1wZXI6IC0+XG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgU2VnbWVudGVyLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9jb2Fyc2Vfc3FsaXRlX3N0YXRlbWVudF9zZWdtZW50ZXIoKVxuICAgIHsgVW5kdW1wZXIsICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9zcWxpdGVfdW5kdW1wZXIoKVxuICAgIHsgRGJyaWMsXG4gICAgICBEYnJpY19zdGQsXG4gICAgICBTUUwsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICBqciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gSlNPTi5zdHJpbmdpZnlcbiAgICBzb3VyY2VzICAgICAgICAgICAgICAgICAgICAgICAgID0gZ2V0X3ZhcmlvdXNfc291cmNlcygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjYWxsX3Jlc3VsdHMgID0gW11cbiAgICAgIGRiICAgICAgICAgID0gbmV3IERicmljICc6bWVtb3J5OidcbiAgICAgIGRiLmNyZWF0ZV9mdW5jdGlvblxuICAgICAgICBuYW1lOiAndHJpZ2dlcl9vbl9iZWZvcmVfaW5zZXJ0J1xuICAgICAgICBjYWxsOiAoIHRhYmxlX25hbWUsIHJvd2lkICkgLT4gY2FsbF9yZXN1bHRzLnB1c2ggeyB0YWJsZV9uYW1lLCByb3dpZCwgfVxuICAgICAgdW5kdW1wZXIgICAgPSBuZXcgVW5kdW1wZXIgeyBkYiwgbW9kZTogJ2Zhc3QnLCB9XG4gICAgICBzb3VyY2VzICAgICA9IGdldF9yZWFsaXN0aWNfc291cmNlcygpXG4gICAgICBzaG93ICAgICAgICA9ICggeCApIC0+IGVjaG8ganIgeDsgeFxuICAgICAgbGluZV9uciAgICAgPSAwXG4gICAgICByZXN1bHRzICAgICA9IFtdXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZvciBsaW5lIGZyb20gd2Fsa19saW5lcyBzb3VyY2VzLnJlYWxpc3RpY19zb3VyY2VfMVxuICAgICAgICBsaW5lX25yKytcbiAgICAgICAgc3RhdGVtZW50cyA9XG4gICAgICAgIGZvciBzdGF0ZW1lbnQgZnJvbSB1bmR1bXBlci5zY2FuIGxpbmVcbiAgICAgICAgICByZXN1bHRzLnB1c2ggc3RhdGVtZW50XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pdGNzX181NyA9IC0+IHJlc3VsdHNbIDAgXSApLCBcIi0tIC0tLVgtLS1YLS0tXFxuc2VsZWN0IDI0IGFzIGE7XCJcbiAgICAgIEBlcSAoIM6pdGNzX181OCA9IC0+IHJlc3VsdHNbIDEgXSApLCBcIi0tIC0tLVgtLS1YLS0tXFxuY3JlYXRlIHRhYmxlIHQgKFxcbiAgICByb3dpZCB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1wiXG4gICAgICBAZXEgKCDOqXRjc19fNTkgPSAtPiByZXN1bHRzWyAyIF0gKSwgXCItLSAtLS1YLS0tWC0tLVxcbkNSRUFURSBUUklHR0VSIHNvbWVfdHJpZ2dlciAgLyogTnIgNCAqL1xcbmJlZm9yZSBpbnNlcnQgb24gdFxcbmZvciBlYWNoIHJvdyBiZWdpblxcbiAgc2VsZWN0IHRyaWdnZXJfb25fYmVmb3JlX2luc2VydCggJ3QnLCBuZXcucm93aWQgKTtcXG4gIGVuZCAvKmNvbW1lbnQgKi8gLS0gbmV3bGluZSFcXG4gIC8qIE5yIDUgKi8gO1wiXG4gICAgICBAZXEgKCDOqXRjc19fNjAgPSAtPiByZXN1bHRzWyAzIF0gKSwgXCItLSAtLS1YLS0tWC0tLVxcbmluc2VydCBpbnRvIHQgKCByb3dpZCApIHZhbHVlcyAoICdmaXJzdCcgKTtcIlxuICAgICAgQGVxICggzql0Y3NfXzYxID0gLT4gcmVzdWx0c1sgNCBdICksIFwiLS0gLS0tWC0tLVgtLS1cXG5pbnNlcnQgaW50byB0ICggcm93aWQgKSB2YWx1ZXMgKCAnc2Vjb25kJyApO1wiXG4gICAgICBAZXEgKCDOqXRjc19fNjIgPSAtPiByZXN1bHRzWyA1IF0gKSwgXCItLSAtLS1YLS0tWC0tLVxcbmluc2VydCBpbnRvIHQgKCByb3dpZCApIHZhbHVlcyAoICd0aGlyZCcgKTtcIlxuICAgICAgIyBAZXEgKCDOqXRjc19fNjMgPSAtPiBzdGF0ZW1lbnRzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgICMgKCBzdGF0ZW1lbnQgZm9yIHN0YXRlbWVudCBmcm9tIHN0YXRlbWVudHMgKSAjIyMgTk9URSBlbnN1cmUgdGhhdCBzdGF0ZW1lbnRzIGFyZSBhcHBsaWVkIGluIGNhc2UgdGhlIGFib3ZlIGlzIGluY29tcGxldGUgIyMjXG4gICAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBzdGF0ZW1lbnQgPSBTUUxcInNlbGVjdCAqIGZyb20gdCBvcmRlciBieSByb3dpZDtcIlxuICAgICAgIyBlY2hvIGpyIHJvdyBmb3Igcm93IGZyb20gZGIud2FsayBzdGF0ZW1lbnRcbiAgICAgICMgcm93cyA9IGRiLndhbGsgc3RhdGVtZW50XG4gICAgICAjIEBlcSAoIM6pdGNzX182NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICdmaXJzdCcsIH1cbiAgICAgICMgQGVxICggzql0Y3NfXzY1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3NlY29uZCcsIH1cbiAgICAgICMgQGVxICggzql0Y3NfXzY2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3RoaXJkJywgfVxuICAgICAgIyBAZXEgKCDOqXRjc19fNjcgPSAtPiByb3dzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIHN0YXRlbWVudCA9IFNRTFwic2VsZWN0IG5hbWUsIHNxbCBmcm9tIHNxbGl0ZV9zY2hlbWEgd2hlcmUgdHlwZSBpbiAoICd0YWJsZScsICd2aWV3JyApIG9yZGVyIGJ5IG5hbWUsIHR5cGU7XCJcbiAgICAgICMgZWNobyBqciByb3cgZm9yIHJvdyBmcm9tIGRiLndhbGsgc3RhdGVtZW50XG4gICAgICAjIHJvd3MgPSBkYi53YWxrIHN0YXRlbWVudFxuICAgICAgIyBAZXEgKCDOqXRjc19fNjggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7XCJuYW1lXCI6XCJ0XCIsXCJzcWxcIjpcIkNSRUFURSBUQUJMRSB0IChcXG4gICAgcm93aWQgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKVwifVxuICAgICAgIyBAZXEgKCDOqXRjc19fNjkgPSAtPiByb3dzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAjICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBzZWdtZW50ZXI6IHRlc3RzLnNlZ21lbnRlciwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZmFzdF91bmR1bXBlcjogdGVzdHMuZmFzdF91bmR1bXBlciwgfVxuXG4iXX0=
