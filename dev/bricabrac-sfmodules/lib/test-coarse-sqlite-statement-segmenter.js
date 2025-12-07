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
      var Segmenter, Undumper, internals, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Segmenter, Undumper, internals} = SFMODULES.require_coarse_sqlite_statement_segmenter());
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
      var Segmenter, Undumper, internals, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Segmenter, Undumper, internals} = SFMODULES.require_coarse_sqlite_statement_segmenter());
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
      var Segmenter, Undumper, internals, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Segmenter, Undumper, internals} = SFMODULES.require_coarse_sqlite_statement_segmenter());
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
      var Dbric, Dbric_std, SQL, Segmenter, Undumper, internals, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Segmenter, Undumper, internals} = SFMODULES.require_coarse_sqlite_statement_segmenter());
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
      var Dbric, Dbric_std, SQL, Segmenter, Undumper, internals, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Segmenter, Undumper, internals} = SFMODULES.require_coarse_sqlite_statement_segmenter());
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
      (new Test(guytest_cfg)).test({tests});
      // ( new Test guytest_cfg ).test { segmenter: tests.segmenter, }
      return (new Test(guytest_cfg)).test({
        fast_undumper: tests.fast_undumper
      });
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtY29hcnNlLXNxbGl0ZS1zdGF0ZW1lbnQtc2VnbWVudGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLHFCQUFBLEVBQUEsbUJBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsNEJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEMsRUFiQTs7Ozs7RUE0QkEsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsMkJBQVIsQ0FBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsbUNBQVIsRUE3QjVCOzs7Ozs7RUFrQ0EsbUJBQUEsR0FBc0Is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LFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLENBQUUsS0FBRixDQUE5QixFQUxGOzthQU9FLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSxhQUFBLEVBQWUsS0FBSyxDQUFDO01BQXZCLENBQTlCO0lBUnNDLENBQUEsSUFBeEM7O0FBN1pBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLXNxbGl0ZS1zZWdtZW50ZXInXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgeyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyAjIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG4jIHsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG57IFRlc3QsICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4jIEZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuIyBQQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmdldF92YXJpb3VzX3NvdXJjZXMgPSAtPlxuICBTUUwgICA9IFN0cmluZy5yYXdcbiAgUiAgICAgPSB7fVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIFIubG9uZ19zb3VyY2VfbmwgPSBTUUxcIlwiXCJcblxuICAgIGNyZWF0ZSB0YWJsZSBcIm5hbWVzXCIgKCAvKiBOciAxICovXG4gICAgICBuYW1lIHRleHQgdW5pcXVlIG5vdCBudWxsLFxuICAgICAgXCJuby1jb21tZW50W1wiIC8qIGJjb21tZW50ISAqLyB0ZXh0IG5vdCBudWxsIGRlZmF1bHQgJ25vO2NvbW1lbnQnLCAtLSBsY29tbWVudCBicm90aGVyXG4gICAgICBbdXV1Z2guLi4uXSBpbnRlZ2VyICk7XG5cbiAgICAtLSAtLS1YLS0tWC0tLVxuICAgIC0tIEFsYXMsIGEgdmFsaWQgc3RhdGVtZW50IChhbHRob3VnaCBwcm9iYWJseSBub3Qgb25lIHRoYXQgY2FuIGFwcGVhciBpbiByZWd1bGFyIGR1bXAgZmlsZSkgIyMjXG4gICAgLyogTnIgMiAqLyBkZWxldGUgZnJvbSBlbmQgd2hlcmUgZW5kID0gJ3gnIHJldHVybmluZyBlbmQ7XG5cbiAgICAtLSAtLS1YLS0tWC0tLVxuICAgIC8qIE5yIDMgKi8gYmVnaW4gaW1tZWRpYXRlIHRyYW5zYWN0aW9uO1xuXG4gICAgLS0gLS0tWC0tLVgtLS1cbiAgICBDUkVBVEUgVFJJR0dFUiBqenJfbWlycm9yX3RyaXBsZXNfcmVnaXN0ZXIgIC8qIE5yIDQgKi9cbiAgICBiZWZvcmUgaW5zZXJ0IG9uIGp6cl9taXJyb3JfdHJpcGxlc19iYXNlXG4gICAgZm9yIGVhY2ggcm93IGJlZ2luXG4gICAgICBzZWxlY3QgdHJpZ2dlcl9vbl9iZWZvcmVfaW5zZXJ0KCAnanpyX21pcnJvcl90cmlwbGVzX2Jhc2UnLCBuZXcucm93aWQsIG5ldy5yZWYsIG5ldy5zLCBuZXcudiwgbmV3Lm8gKTtcbiAgICAgIGVuZCAvKmNvbW1lbnQgKi8gLS0gbmV3bGluZSFcbiAgICAgIC8qIE5yIDUgKi8gO1xuXG4gICAgLS0gLS0tWC0tLVgtLS1cbiAgICAvKiBOciA2ICovIHNlbGVjdCAnYScnejsnIGFzIFwic2VtaVwiXCI7Y29sb25cIjtcbiAgICBcIlwiXCJcbiAgICAjIENSRUFURSBUQUJMRSBqenJfbWlycm9yX2xpbmVzICggLyogTnIgNiAqL1xuICAgICMgICAtLSAndDpqZm06J1xuICAgICMgICByb3dpZCAgICAgdGV4dCAgICB1bmlxdWUgIG5vdCBudWxsLFxuICAgICMgICByZWYgICAgICAgdGV4dCAgICB1bmlxdWUgIG5vdCBudWxsIGdlbmVyYXRlZCBhbHdheXMgYXMgKCBkc2tleSB8fCAnOkw9JyB8fCBsaW5lX25yICkgdmlydHVhbCxcbiAgICAjICAgZHNrZXkgICAgIHRleHQgICAgICAgICAgICBub3QgbnVsbCxcbiAgICAjICAgbGluZV9uciAgIGludGVnZXIgICAgICAgICBub3QgbnVsbCxcbiAgICAjICAgbGNvZGUgICAgIHRleHQgICAgICAgICAgICBub3QgbnVsbCxcbiAgICAjICAgbGluZSAgICAgIHRleHQgICAgICAgICAgICBub3QgbnVsbCxcbiAgICAjICAgamZpZWxkcyAgIGpzb24gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAjICAgZmllbGRfMSAgIHRleHQgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAjICAgZmllbGRfMiAgIHRleHQgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAjICAgZmllbGRfMyAgIHRleHQgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAjICAgZmllbGRfNCAgIHRleHQgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAjIHByaW1hcnkga2V5ICggcm93aWQgKSxcbiAgICAjIGNoZWNrICggcm93aWQgcmVnZXhwICdedDptcjpsbjpSPVxcZCskJyksXG4gICAgIyB1bmlxdWUgKCBkc2tleSwgbGluZV9uciApLFxuICAgICMgZm9yZWlnbiBrZXkgKCBsY29kZSApIHJlZmVyZW5jZXMganpyX21pcnJvcl9sY29kZXMgKCBsY29kZSApICk7XG4gICAgIyBJTlNFUlQgSU5UTyBqenJfbWlycm9yX2xpbmVzIFZBTFVFUygndDptcjpsbjpSPTEnLCdkaWN0Om1lYW5pbmdzJywxLCdCJywnJyxOVUxMLE5VTEwsTlVMTCxOVUxMLE5VTEwpO1xuICAgICMgSU5TRVJUIElOVE8ganpyX21pcnJvcl9saW5lcyBWQUxVRVMoJ3Q6bXI6bG46Uj0yJywnZGljdDptZWFuaW5ncycsMiwnQicsJycsTlVMTCxOVUxMLE5VTEwsTlVMTCxOVUxMKTtcbiAgICAjIElOU0VSVCBJTlRPIGp6cl9taXJyb3JfbGluZXMgVkFMVUVTKCd0Om1yOmxuOlI9MycsJ2RpY3Q6bWVhbmluZ3MnLDMsJ0InLCcnLE5VTEwsTlVMTCxOVUxMLE5VTEwsTlVMTCk7XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgUlsgXCJzb3VyY2VfI3tpZHggKyAxfVwiIF0gID0gc291cmNlIGZvciBzb3VyY2UsIGlkeCBpbiBSLmxvbmdfc291cmNlX25sLnNwbGl0IC8tLSAtLS1YLiovZ21cbiAgZ2V0X3BsYWluX3NvdXJjZXMgICAgICAgICA9IC0+ICggc291cmNlIGZvciBrZXksIHNvdXJjZSBvZiBSIHdoZW4gL15zb3VyY2VfXFxkKy8udGVzdCBrZXkgKVxuICAjIGdldF9zb3VyY2VzX25vX2xjb21tZW50cyAgPSAtPiAoICggc291cmNlLnJlcGxhY2UgLyg/PD1cXHMpLS0uKiQvZywgJycgKSBmb3Igc291cmNlIGluIGdldF9wbGFpbl9zb3VyY2VzKCkgKVxuICBnZXRfc291cmNlc19ub19sY29tbWVudHMgID0gLT4gKCAoIHNvdXJjZS5yZXBsYWNlIC8tLS4qJC9nbSwgJycgKSBmb3Igc291cmNlIGluIGdldF9wbGFpbl9zb3VyY2VzKCkgKVxuICAjIGRlYnVnICfOqXRjc19fXzEnLCAnXFxuJyArIHNvdXJjZSBmb3Igc291cmNlIGluIGdldF9wbGFpbl9zb3VyY2VzKClcbiAgIyBkZWJ1ZyAnzql0Y3NfX18yJywgJ1xcbicgKyBzb3VyY2UgZm9yIHNvdXJjZSBpbiBnZXRfc291cmNlc19ub19sY29tbWVudHMoKVxuICAjIFIubG9uZ19zb3VyY2VfbmwgICAgICAgICAgPSAoIGdldF9wbGFpbl9zb3VyY2VzKCkgKS5qb2luICdcXG4nXG4gIFIubG9uZ19zb3VyY2Vfb25lX2xpbmUgICAgPSAoICggZ2V0X3NvdXJjZXNfbm9fbGNvbW1lbnRzKCkgKS5qb2luICcnICkucmVwbGFjZSAvXFxuL2csICcnXG4gIHJldHVybiBSXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZ2V0X3JlYWxpc3RpY19zb3VyY2VzID0gLT5cbiAgU1FMICAgPSBTdHJpbmcucmF3XG4gIFIgICAgID0ge31cbiAgUi5yZWFsaXN0aWNfc291cmNlXzEgPSBTUUxcIlwiXCJcbiAgICAtLSAtLS1YLS0tWC0tLVxuICAgIHNlbGVjdCAyNCBhcyBhO1xuXG4gICAgLS0gLS0tWC0tLVgtLS1cbiAgICBjcmVhdGUgdGFibGUgdCAoXG4gICAgICAgIHJvd2lkIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XG5cbiAgICAtLSAtLS1YLS0tWC0tLVxuICAgIENSRUFURSBUUklHR0VSIHNvbWVfdHJpZ2dlciAgLyogTnIgNCAqL1xuICAgIGJlZm9yZSBpbnNlcnQgb24gdFxuICAgIGZvciBlYWNoIHJvdyBiZWdpblxuICAgICAgc2VsZWN0IHRyaWdnZXJfb25fYmVmb3JlX2luc2VydCggJ3QnLCBuZXcucm93aWQgKTtcbiAgICAgIGVuZCAvKmNvbW1lbnQgKi8gLS0gbmV3bGluZSFcbiAgICAgIC8qIE5yIDUgKi8gO1xuXG4gICAgLS0gLS0tWC0tLVgtLS1cbiAgICBpbnNlcnQgaW50byB0ICggcm93aWQgKSB2YWx1ZXMgKCAnZmlyc3QnICk7XG4gICAgLS0gLS0tWC0tLVgtLS1cbiAgICBpbnNlcnQgaW50byB0ICggcm93aWQgKSB2YWx1ZXMgKCAnc2Vjb25kJyApO1xuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgaW5zZXJ0IGludG8gdCAoIHJvd2lkICkgdmFsdWVzICggJ3RoaXJkJyApO1xuICAgIFwiXCJcIlxuICByZXR1cm4gUlxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbndhbGtfbGluZXMgPSAoIHRleHQgKSAtPiB5aWVsZCBmcm9tIHRleHQuc3BsaXQgJ1xcbidcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZWdtZW50ZXI6IC0+XG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgU2VnbWVudGVyLFxuICAgICAgVW5kdW1wZXIsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2NvYXJzZV9zcWxpdGVfc3RhdGVtZW50X3NlZ21lbnRlcigpXG4gICAganIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IEpTT04uc3RyaW5naWZ5XG4gICAgc291cmNlcyAgICAgICAgICAgICAgICAgICAgICAgICA9IGdldF92YXJpb3VzX3NvdXJjZXMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgd2Fsa2VyICAgICAgICA9IG5ldyBTZWdtZW50ZXIgeyBtb2RlOiAnc2xvdycsIH1cbiAgICAgIEB0aHJvd3MgKCDOqXRjc19fXzMgPSAtPiB3YWxrZXIuc2NhbiB1bmRlZmluZWQgICAgICksIC9leHBlY3RlZCBhIHRleHQvXG4gICAgICBAdGhyb3dzICggzql0Y3NfX180ID0gLT4gd2Fsa2VyLnNjYW4gbnVsbCAgICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0L1xuICAgICAgQHRocm93cyAoIM6pdGNzX19fNSA9IC0+IHdhbGtlci5zY2FuIFN5bWJvbCAnPz8nICAgKSwgL2V4cGVjdGVkIGEgdGV4dC9cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgd2Fsa2VyICAgICAgICA9IG5ldyBTZWdtZW50ZXIgeyBtb2RlOiAnc2xvdycsIH1cbiAgICAgIEBlcSAoIM6pdGNzX19fNiA9IC0+IHR5cGVfb2Ygd2Fsa2VyLnNjYW4gICAgICksICdmdW5jdGlvbidcbiAgICAgIEBlcSAoIM6pdGNzX19fNyA9IC0+IHR5cGVfb2Ygd2Fsa2VyLnNjYW4gJ3gnICksICdnZW5lcmF0b3InXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgJ86pdGNzX19fOCcsIGpyIHNlZ21lbnQgZm9yIHNlZ21lbnQgZnJvbSB3YWxrZXIuc2NhbiBzb3VyY2VzLnNvdXJjZV8xXG4gICAgICAjICfOqXRjc19fXzknLCBqciBzZWdtZW50IGZvciBzZWdtZW50IGZyb20gd2Fsa2VyLnNjYW4gc291cmNlcy5sb25nX3NvdXJjZV9ubFxuICAgICAgIyAnzql0Y3NfXzEwJywganIgc2VnbWVudCBmb3Igc2VnbWVudCBmcm9tIHdhbGtlci5zY2FuIHNvdXJjZXMubG9uZ19zb3VyY2Vfb25lX2xpbmVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB3YWxrZXIgICAgPSBuZXcgU2VnbWVudGVyIHsgbW9kZTogJ3Nsb3cnLCB9XG4gICAgICBzZWdtZW50cyAgPSB3YWxrZXIuc2NhbiBzb3VyY2VzLnNvdXJjZV8xXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzExID0gLT4gLy8vIFxcYiBOciBcXHMrIDEgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgIEBlcSAoIM6pdGNzX18xMiA9IC0+IC8vLyBcXGIgTnIgXFxzKyBbXjFdKyBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCBmYWxzZVxuICAgICAgQGVxICggzql0Y3NfXzEzID0gLT4gc2VnbWVudHMubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB3YWxrZXIgICAgPSBuZXcgU2VnbWVudGVyIHsgbW9kZTogJ3Nsb3cnLCB9XG4gICAgICBzZWdtZW50cyAgPSB3YWxrZXIuc2NhbiBzb3VyY2VzLmxvbmdfc291cmNlX25sXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMTQgPSAtPiAvLy8gXFxiIE5yIFxccysgMSAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzE1ID0gLT4gLy8vIFxcYiBOciBcXHMrIDIgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18xNiA9IC0+IC8vLyBcXGIgTnIgXFxzKyAzICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMTcgPSAtPiAvLy8gXFxiIE5yIFxccysgNCAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzE4ID0gLT4gLy8vIFxcYiBOciBcXHMrIDUgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18xOSA9IC0+IC8vLyBcXGIgTnIgXFxzKyA2ICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pdGNzX18yMCA9IC0+IHNlZ21lbnRzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgIGluZm8gJ86pX18yMScsIGpyIHNlZ21lbnQgZm9yIHNlZ21lbnQgZnJvbSBzZWdtZW50c1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB3YWxrZXIgICAgPSBuZXcgU2VnbWVudGVyIHsgbW9kZTogJ3Nsb3cnLCB9XG4gICAgICBzZWdtZW50cyAgPSB3YWxrZXIuc2NhbiBzb3VyY2VzLmxvbmdfc291cmNlX29uZV9saW5lXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMjIgPSAtPiAvLy8gXFxiIE5yIFxccysgMSAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzIzID0gLT4gLy8vIFxcYiBOciBcXHMrIDIgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18yNCA9IC0+IC8vLyBcXGIgTnIgXFxzKyAzICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMjUgPSAtPiAvLy8gXFxiIE5yIFxccysgNCAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzI2ID0gLT4gLy8vIFxcYiBOciBcXHMrIDUgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18yNyA9IC0+IC8vLyBcXGIgTnIgXFxzKyA2ICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pdGNzX18yOCA9IC0+IHNlZ21lbnRzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgIGluZm8gJ86pX18yOScsIGpyIHNlZ21lbnQgZm9yIHNlZ21lbnQgZnJvbSBzZWdtZW50c1xuICAgICAgO251bGxcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgZm9yIHRva2VuIGZyb20gd2Fsa2VyLnNjYW5fdG9rZW5zIHNvdXJjZXMubG9uZ19zb3VyY2Vfb25lX2xpbmVcbiAgICAjICAgaW5mbyAnzql0Y3NfXzMwJywgKCBycHIgdG9rZW4uZnFuYW1lICksICggcnByIHRva2VuIC5oaXQgKSB1bmxlc3MgKCB0b2tlbi5mcW5hbWUgaXMgJ3RvcC53cycgKSBvciAoIHRva2VuLmlzX3N5c3RlbSApXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2xvd19zZWdtZW50ZXJfd2l0aF9saW5lX2lucHV0OiAtPlxuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IFNlZ21lbnRlcixcbiAgICAgIFVuZHVtcGVyLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9jb2Fyc2Vfc3FsaXRlX3N0YXRlbWVudF9zZWdtZW50ZXIoKVxuICAgIGpyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBKU09OLnN0cmluZ2lmeVxuICAgIHNvdXJjZXMgICAgICAgICAgICAgICAgICAgICAgICAgPSBnZXRfdmFyaW91c19zb3VyY2VzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB3YWxrZXIgICAgPSBuZXcgU2VnbWVudGVyIHsgbW9kZTogJ3Nsb3cnLCB9XG4gICAgICBsaW5lX25yICAgPSAwXG4gICAgICBzZWdtZW50ICAgPSBudWxsXG4gICAgICBmb3IgbGluZSBmcm9tIHdhbGtfbGluZXMgc291cmNlcy5zb3VyY2VfMVxuICAgICAgICBsaW5lX25yKytcbiAgICAgICAgZGVidWcgJ86pdGNzX18zMScsIHsgbGluZV9uciwgbGluZSwgfVxuICAgICAgICBzZWdtZW50cyAgPSB3YWxrZXIuc2NhbiBsaW5lXG4gICAgICAgIHsgdmFsdWUsXG4gICAgICAgICAgZG9uZSwgfSA9IHNlZ21lbnRzLm5leHQoKVxuICAgICAgICBjb250aW51ZSBpZiBkb25lXG4gICAgICAgIGlmIHNlZ21lbnQ/XG4gICAgICAgICAgQGVxICggzqlfXzMyID0gLT4gZmFsc2UgKSwgXCJleHBlY3Qgb25lIHNlZ21lbnQsIHJlY2VpdmVkIHR3byBzZWdtZW50c1wiXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBzZWdtZW50ID0gdmFsdWVcbiAgICAgICAgICBAZXEgKCDOqXRjc19fMzMgPSAtPiBzZWdtZW50ICksIFwiXCJcIlxcbmNyZWF0ZSB0YWJsZSBcIm5hbWVzXCIgKCAvKiBOciAxICovXFxuICBuYW1lIHRleHQgdW5pcXVlIG5vdCBudWxsLFxcbiAgXCJuby1jb21tZW50W1wiIC8qIGJjb21tZW50ISAqLyB0ZXh0IG5vdCBudWxsIGRlZmF1bHQgJ25vO2NvbW1lbnQnLCAtLSBsY29tbWVudCBicm90aGVyXFxuICBbdXV1Z2guLi4uXSBpbnRlZ2VyICk7XCJcIlwiXG4gICAgICAgICMgQGVxICggzql0Y3NfXzM0ID0gLT4gLy8vIFxcYiBOciBcXHMrIDEgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICAgIyBAZXEgKCDOqXRjc19fMzUgPSAtPiAvLy8gXFxiIE5yIFxccysgW14xXSsgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgZmFsc2VcbiAgICAgICAgIyBAZXEgKCDOqXRjc19fMzYgPSAtPiBzZWdtZW50cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZhc3Rfc2VnbWVudGVyX3dpdGhfbGluZV9pbnB1dDogLT5cbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBTZWdtZW50ZXIsXG4gICAgICBVbmR1bXBlcixcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfY29hcnNlX3NxbGl0ZV9zdGF0ZW1lbnRfc2VnbWVudGVyKClcbiAgICBqciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gSlNPTi5zdHJpbmdpZnlcbiAgICBzb3VyY2VzICAgICAgICAgICAgICAgICAgICAgICAgID0gZ2V0X3JlYWxpc3RpY19zb3VyY2VzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB3YWxrZXIgICAgPSBuZXcgU2VnbWVudGVyIHsgbW9kZTogJ2Zhc3QnLCB9XG4gICAgICBsaW5lX25yICAgPSAwXG4gICAgICBzZWdtZW50ICAgPSBudWxsXG4gICAgICBmb3IgbGluZSBmcm9tIHdhbGtfbGluZXMgc291cmNlcy5yZWFsaXN0aWNfc291cmNlXzFcbiAgICAgICAgbGluZV9ucisrXG4gICAgICAgIHNlZ21lbnRzICA9IHdhbGtlci5zY2FuIGxpbmVcbiAgICAgICAgIyBkZWJ1ZyAnzql0Y3NfXzM3JywgeyBsaW5lX25yLCBsaW5lLCBzZWdtZW50cywgfVxuICAgICAgICBmb3Igc2VnbWVudCBmcm9tIHNlZ21lbnRzXG4gICAgICAgICAgaW5mbyAnzql0Y3NfXzM4JywgcnByIHNlZ21lbnRcbiAgICAgICAgIyB7IHZhbHVlLFxuICAgICAgICAjICAgZG9uZSwgfSA9IHNlZ21lbnRzLm5leHQoKVxuICAgICAgICAjIGNvbnRpbnVlIGlmIGRvbmVcbiAgICAgICAgIyBpZiBzZWdtZW50P1xuICAgICAgICAjICAgQGVxICggzqlfXzM5ID0gLT4gZmFsc2UgKSwgXCJleHBlY3Qgb25lIHNlZ21lbnQsIHJlY2VpdmVkIHR3byBzZWdtZW50c1wiXG4gICAgICAgICMgZWxzZVxuICAgICAgICAjICAgc2VnbWVudCA9IHZhbHVlXG4gICAgICAgICMgICBAZXEgKCDOqXRjc19fNDAgPSAtPiBzZWdtZW50ICksIFwiXCJcIlxcbmNyZWF0ZSB0YWJsZSBcIm5hbWVzXCIgKCAvKiBOciAxICovXFxuICBuYW1lIHRleHQgdW5pcXVlIG5vdCBudWxsLFxcbiAgXCJuby1jb21tZW50W1wiIC8qIGJjb21tZW50ISAqLyB0ZXh0IG5vdCBudWxsIGRlZmF1bHQgJ25vO2NvbW1lbnQnLCAtLSBsY29tbWVudCBicm90aGVyXFxuICBbdXV1Z2guLi4uXSBpbnRlZ2VyICk7XCJcIlwiXG4gICAgICAgICMgIyBAZXEgKCDOqXRjc19fNDEgPSAtPiAvLy8gXFxiIE5yIFxccysgMSAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgICAjICMgQGVxICggzql0Y3NfXzQyID0gLT4gLy8vIFxcYiBOciBcXHMrIFteMV0rIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIGZhbHNlXG4gICAgICAgICMgIyBAZXEgKCDOqXRjc19fNDMgPSAtPiBzZWdtZW50cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNsb3dfdW5kdW1wZXI6IC0+XG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgU2VnbWVudGVyLFxuICAgICAgVW5kdW1wZXIsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2NvYXJzZV9zcWxpdGVfc3RhdGVtZW50X3NlZ21lbnRlcigpXG4gICAgeyBEYnJpYyxcbiAgICAgIERicmljX3N0ZCxcbiAgICAgIFNRTCwgICAgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIGpyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBKU09OLnN0cmluZ2lmeVxuICAgIHNvdXJjZXMgICAgICAgICAgICAgICAgICAgICAgICAgPSBnZXRfdmFyaW91c19zb3VyY2VzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGNhbGxfcmVzdWx0cyAgPSBbXVxuICAgICAgZGIgICAgICAgICAgPSBuZXcgRGJyaWMgJzptZW1vcnk6J1xuICAgICAgZGIuY3JlYXRlX2Z1bmN0aW9uXG4gICAgICAgIG5hbWU6ICd0cmlnZ2VyX29uX2JlZm9yZV9pbnNlcnQnXG4gICAgICAgIGNhbGw6ICggdGFibGVfbmFtZSwgcm93aWQgKSAtPiBjYWxsX3Jlc3VsdHMucHVzaCB7IHRhYmxlX25hbWUsIHJvd2lkLCB9XG4gICAgICB1bmR1bXBlciAgICA9IG5ldyBVbmR1bXBlciB7IGRiLCBtb2RlOiAnc2xvdycsIH1cbiAgICAgIHNvdXJjZXMgICAgID0gZ2V0X3JlYWxpc3RpY19zb3VyY2VzKClcbiAgICAgIHNob3cgICAgICAgID0gKCB4ICkgLT4gZWNobyBqciB4OyB4XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHN0YXRlbWVudHMgPSB1bmR1bXBlci5zY2FuIHNvdXJjZXMucmVhbGlzdGljX3NvdXJjZV8xXG4gICAgICBzdGF0ZW1lbnQgID0gc2hvdyBzdGF0ZW1lbnRzLm5leHQoKS52YWx1ZTsgQGVxICggzql0Y3NfXzQ0ID0gLT4gc3RhdGVtZW50ICksIFwiLS0gLS0tWC0tLVgtLS1cXG5zZWxlY3QgMjQgYXMgYTtcIlxuICAgICAgc3RhdGVtZW50ICA9IHNob3cgc3RhdGVtZW50cy5uZXh0KCkudmFsdWU7IEBlcSAoIM6pdGNzX180NSA9IC0+IHN0YXRlbWVudCApLCBcIlxcblxcbi0tIC0tLVgtLS1YLS0tXFxuY3JlYXRlIHRhYmxlIHQgKFxcbiAgICByb3dpZCB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1wiXG4gICAgICBzdGF0ZW1lbnQgID0gc2hvdyBzdGF0ZW1lbnRzLm5leHQoKS52YWx1ZTsgQGVxICggzql0Y3NfXzQ2ID0gLT4gc3RhdGVtZW50ICksIFwiXFxuXFxuLS0gLS0tWC0tLVgtLS1cXG5DUkVBVEUgVFJJR0dFUiBzb21lX3RyaWdnZXIgIC8qIE5yIDQgKi9cXG5iZWZvcmUgaW5zZXJ0IG9uIHRcXG5mb3IgZWFjaCByb3cgYmVnaW5cXG4gIHNlbGVjdCB0cmlnZ2VyX29uX2JlZm9yZV9pbnNlcnQoICd0JywgbmV3LnJvd2lkICk7XFxuXFxuICBlbmQgLypjb21tZW50ICovIC0tIG5ld2xpbmUhXFxuICAvKiBOciA1ICovIDtcIlxuICAgICAgc3RhdGVtZW50ICA9IHNob3cgc3RhdGVtZW50cy5uZXh0KCkudmFsdWU7IEBlcSAoIM6pdGNzX180NyA9IC0+IHN0YXRlbWVudCApLCBcIlxcblxcbi0tIC0tLVgtLS1YLS0tXFxuaW5zZXJ0IGludG8gdCAoIHJvd2lkICkgdmFsdWVzICggJ2ZpcnN0JyApO1wiXG4gICAgICBzdGF0ZW1lbnQgID0gc2hvdyBzdGF0ZW1lbnRzLm5leHQoKS52YWx1ZTsgQGVxICggzql0Y3NfXzQ4ID0gLT4gc3RhdGVtZW50ICksIFwiXFxuLS0gLS0tWC0tLVgtLS1cXG5pbnNlcnQgaW50byB0ICggcm93aWQgKSB2YWx1ZXMgKCAnc2Vjb25kJyApO1wiXG4gICAgICBzdGF0ZW1lbnQgID0gc2hvdyBzdGF0ZW1lbnRzLm5leHQoKS52YWx1ZTsgQGVxICggzql0Y3NfXzQ5ID0gLT4gc3RhdGVtZW50ICksIFwiXFxuLS0gLS0tWC0tLVgtLS1cXG5pbnNlcnQgaW50byB0ICggcm93aWQgKSB2YWx1ZXMgKCAndGhpcmQnICk7XCJcbiAgICAgIEBlcSAoIM6pdGNzX181MCA9IC0+IHN0YXRlbWVudHMubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgKCBzdGF0ZW1lbnQgZm9yIHN0YXRlbWVudCBmcm9tIHN0YXRlbWVudHMgKSAjIyMgTk9URSBlbnN1cmUgdGhhdCBzdGF0ZW1lbnRzIGFyZSBhcHBsaWVkIGluIGNhc2UgdGhlIGFib3ZlIGlzIGluY29tcGxldGUgIyMjXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHN0YXRlbWVudCA9IFNRTFwic2VsZWN0ICogZnJvbSB0IG9yZGVyIGJ5IHJvd2lkO1wiXG4gICAgICBlY2hvIGpyIHJvdyBmb3Igcm93IGZyb20gZGIud2FsayBzdGF0ZW1lbnRcbiAgICAgIHJvd3MgPSBkYi53YWxrIHN0YXRlbWVudFxuICAgICAgQGVxICggzql0Y3NfXzUxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ2ZpcnN0JywgfVxuICAgICAgQGVxICggzql0Y3NfXzUyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3NlY29uZCcsIH1cbiAgICAgIEBlcSAoIM6pdGNzX181MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0aGlyZCcsIH1cbiAgICAgIEBlcSAoIM6pdGNzX181NCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzdGF0ZW1lbnQgPSBTUUxcInNlbGVjdCBuYW1lLCBzcWwgZnJvbSBzcWxpdGVfc2NoZW1hIHdoZXJlIHR5cGUgaW4gKCAndGFibGUnLCAndmlldycgKSBvcmRlciBieSBuYW1lLCB0eXBlO1wiXG4gICAgICBlY2hvIGpyIHJvdyBmb3Igcm93IGZyb20gZGIud2FsayBzdGF0ZW1lbnRcbiAgICAgIHJvd3MgPSBkYi53YWxrIHN0YXRlbWVudFxuICAgICAgQGVxICggzql0Y3NfXzU1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwge1wibmFtZVwiOlwidFwiLFwic3FsXCI6XCJDUkVBVEUgVEFCTEUgdCAoXFxuICAgIHJvd2lkIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5IClcIn1cbiAgICAgIEBlcSAoIM6pdGNzX181NiA9IC0+IHJvd3MubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmYXN0X3VuZHVtcGVyOiAtPlxuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IFNlZ21lbnRlcixcbiAgICAgIFVuZHVtcGVyLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9jb2Fyc2Vfc3FsaXRlX3N0YXRlbWVudF9zZWdtZW50ZXIoKVxuICAgIHsgRGJyaWMsXG4gICAgICBEYnJpY19zdGQsXG4gICAgICBTUUwsICAgICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2RicmljKClcbiAgICBqciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gSlNPTi5zdHJpbmdpZnlcbiAgICBzb3VyY2VzICAgICAgICAgICAgICAgICAgICAgICAgID0gZ2V0X3ZhcmlvdXNfc291cmNlcygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjYWxsX3Jlc3VsdHMgID0gW11cbiAgICAgIGRiICAgICAgICAgID0gbmV3IERicmljICc6bWVtb3J5OidcbiAgICAgIGRiLmNyZWF0ZV9mdW5jdGlvblxuICAgICAgICBuYW1lOiAndHJpZ2dlcl9vbl9iZWZvcmVfaW5zZXJ0J1xuICAgICAgICBjYWxsOiAoIHRhYmxlX25hbWUsIHJvd2lkICkgLT4gY2FsbF9yZXN1bHRzLnB1c2ggeyB0YWJsZV9uYW1lLCByb3dpZCwgfVxuICAgICAgdW5kdW1wZXIgICAgPSBuZXcgVW5kdW1wZXIgeyBkYiwgbW9kZTogJ2Zhc3QnLCB9XG4gICAgICBzb3VyY2VzICAgICA9IGdldF9yZWFsaXN0aWNfc291cmNlcygpXG4gICAgICBzaG93ICAgICAgICA9ICggeCApIC0+IGVjaG8ganIgeDsgeFxuICAgICAgbGluZV9uciAgICAgPSAwXG4gICAgICByZXN1bHRzICAgICA9IFtdXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGZvciBsaW5lIGZyb20gd2Fsa19saW5lcyBzb3VyY2VzLnJlYWxpc3RpY19zb3VyY2VfMVxuICAgICAgICBsaW5lX25yKytcbiAgICAgICAgc3RhdGVtZW50cyA9XG4gICAgICAgIGZvciBzdGF0ZW1lbnQgZnJvbSB1bmR1bXBlci5zY2FuIGxpbmVcbiAgICAgICAgICByZXN1bHRzLnB1c2ggc3RhdGVtZW50XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pdGNzX181NyA9IC0+IHJlc3VsdHNbIDAgXSApLCBcIi0tIC0tLVgtLS1YLS0tXFxuc2VsZWN0IDI0IGFzIGE7XCJcbiAgICAgIEBlcSAoIM6pdGNzX181OCA9IC0+IHJlc3VsdHNbIDEgXSApLCBcIi0tIC0tLVgtLS1YLS0tXFxuY3JlYXRlIHRhYmxlIHQgKFxcbiAgICByb3dpZCB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1wiXG4gICAgICBAZXEgKCDOqXRjc19fNTkgPSAtPiByZXN1bHRzWyAyIF0gKSwgXCItLSAtLS1YLS0tWC0tLVxcbkNSRUFURSBUUklHR0VSIHNvbWVfdHJpZ2dlciAgLyogTnIgNCAqL1xcbmJlZm9yZSBpbnNlcnQgb24gdFxcbmZvciBlYWNoIHJvdyBiZWdpblxcbiAgc2VsZWN0IHRyaWdnZXJfb25fYmVmb3JlX2luc2VydCggJ3QnLCBuZXcucm93aWQgKTtcXG4gIGVuZCAvKmNvbW1lbnQgKi8gLS0gbmV3bGluZSFcXG4gIC8qIE5yIDUgKi8gO1wiXG4gICAgICBAZXEgKCDOqXRjc19fNjAgPSAtPiByZXN1bHRzWyAzIF0gKSwgXCItLSAtLS1YLS0tWC0tLVxcbmluc2VydCBpbnRvIHQgKCByb3dpZCApIHZhbHVlcyAoICdmaXJzdCcgKTtcIlxuICAgICAgQGVxICggzql0Y3NfXzYxID0gLT4gcmVzdWx0c1sgNCBdICksIFwiLS0gLS0tWC0tLVgtLS1cXG5pbnNlcnQgaW50byB0ICggcm93aWQgKSB2YWx1ZXMgKCAnc2Vjb25kJyApO1wiXG4gICAgICBAZXEgKCDOqXRjc19fNjIgPSAtPiByZXN1bHRzWyA1IF0gKSwgXCItLSAtLS1YLS0tWC0tLVxcbmluc2VydCBpbnRvIHQgKCByb3dpZCApIHZhbHVlcyAoICd0aGlyZCcgKTtcIlxuICAgICAgIyBAZXEgKCDOqXRjc19fNjMgPSAtPiBzdGF0ZW1lbnRzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgICMgKCBzdGF0ZW1lbnQgZm9yIHN0YXRlbWVudCBmcm9tIHN0YXRlbWVudHMgKSAjIyMgTk9URSBlbnN1cmUgdGhhdCBzdGF0ZW1lbnRzIGFyZSBhcHBsaWVkIGluIGNhc2UgdGhlIGFib3ZlIGlzIGluY29tcGxldGUgIyMjXG4gICAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBzdGF0ZW1lbnQgPSBTUUxcInNlbGVjdCAqIGZyb20gdCBvcmRlciBieSByb3dpZDtcIlxuICAgICAgIyBlY2hvIGpyIHJvdyBmb3Igcm93IGZyb20gZGIud2FsayBzdGF0ZW1lbnRcbiAgICAgICMgcm93cyA9IGRiLndhbGsgc3RhdGVtZW50XG4gICAgICAjIEBlcSAoIM6pdGNzX182NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICdmaXJzdCcsIH1cbiAgICAgICMgQGVxICggzql0Y3NfXzY1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3NlY29uZCcsIH1cbiAgICAgICMgQGVxICggzql0Y3NfXzY2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3RoaXJkJywgfVxuICAgICAgIyBAZXEgKCDOqXRjc19fNjcgPSAtPiByb3dzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIHN0YXRlbWVudCA9IFNRTFwic2VsZWN0IG5hbWUsIHNxbCBmcm9tIHNxbGl0ZV9zY2hlbWEgd2hlcmUgdHlwZSBpbiAoICd0YWJsZScsICd2aWV3JyApIG9yZGVyIGJ5IG5hbWUsIHR5cGU7XCJcbiAgICAgICMgZWNobyBqciByb3cgZm9yIHJvdyBmcm9tIGRiLndhbGsgc3RhdGVtZW50XG4gICAgICAjIHJvd3MgPSBkYi53YWxrIHN0YXRlbWVudFxuICAgICAgIyBAZXEgKCDOqXRjc19fNjggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7XCJuYW1lXCI6XCJ0XCIsXCJzcWxcIjpcIkNSRUFURSBUQUJMRSB0IChcXG4gICAgcm93aWQgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKVwifVxuICAgICAgIyBAZXEgKCDOqXRjc19fNjkgPSAtPiByb3dzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgc2VnbWVudGVyOiB0ZXN0cy5zZWdtZW50ZXIsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBmYXN0X3VuZHVtcGVyOiB0ZXN0cy5mYXN0X3VuZHVtcGVyLCB9XG4iXX0=
