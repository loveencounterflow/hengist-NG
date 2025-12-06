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
  /* Nr 5 */ ;`;
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
      var key, results;
      results = [];
      for (key in R) {
        source = R[key];
        if (/^source_\d+/.test(key)) {
          results.push(source);
        }
      }
      return results;
    };
    // get_sources_no_lcomments  = -> ( ( source.replace /(?<=\s)--.*$/g, '' ) for source in get_plain_sources() )
    get_sources_no_lcomments = function() {
      var j, len1, ref1, results;
      ref1 = get_plain_sources();
      results = [];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        source = ref1[j];
        results.push(source.replace(/--.*$/gm, ''));
      }
      return results;
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
        walker = new Segmenter();
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
        walker = new Segmenter();
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
        walker = new Segmenter();
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
        var segment, segments, walker, Ωtcs__14, Ωtcs__15, Ωtcs__16, Ωtcs__17, Ωtcs__18, Ωtcs__20;
        walker = new Segmenter();
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
        for (segment of segments) {
          info('Ω__19', jr(segment));
        }
        this.eq((Ωtcs__20 = function() {
          return segments.next().done;
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var segment, segments, walker, Ωtcs__21, Ωtcs__22, Ωtcs__23, Ωtcs__24, Ωtcs__25, Ωtcs__26;
        walker = new Segmenter();
        segments = walker.scan(sources.long_source_one_line);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__21 = function() {
          return /\bNr\s+1\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__22 = function() {
          return /\bNr\s+2\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__23 = function() {
          return /\bNr\s+3\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__24 = function() {
          return /\bNr\s+4\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__25 = function() {
          return /\bNr\s+5\b/.test(segment);
        }), true);
        //.....................................................................................................
        this.eq((Ωtcs__26 = function() {
          return segments.next().done;
        }), true);
        return null;
      })();
      // #.....................................................................................................
      // for token from walker.scan_tokens sources.long_source_one_line
      //   info 'Ωtcs__27', ( rpr token.fqname ), ( rpr token .hit ) unless ( token.fqname is 'top.ws' ) or ( token.is_system )
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    segmenter_with_line_input: function() {
      var Segmenter, Undumper, internals, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Segmenter, Undumper, internals} = SFMODULES.require_coarse_sqlite_statement_segmenter());
      jr = JSON.stringify;
      sources = get_various_sources();
      (() => {        //.......................................................................................................
        var done, line, line_nr, segment, segments, value, walker, Ω__29, Ωtcs__30;
        walker = new Segmenter();
        line_nr = 0;
        segment = null;
        for (line of walk_lines(sources.source_1)) {
          line_nr++;
          debug('Ωtcs__28', {line_nr, line});
          segments = walker.scan(line);
          ({value, done} = segments.next());
          if (done) {
            continue;
          }
          if (segment != null) {
            this.eq((Ω__29 = function() {
              return false;
            }), "expect one segment, received two segments");
          } else {
            segment = value;
            this.eq((Ωtcs__30 = function() {
              return segment;
            }), `\ncreate table "names" ( /* Nr 1 */\n  name text unique not null,\n  "no-comment[" /* bcomment! */ text not null default 'no;comment', -- lcomment brother\n  [uuugh....] integer );`);
          }
        }
        // @eq ( Ωtcs__31 = -> /// \b Nr \s+ 1     \b ///.test segment ), true
        // @eq ( Ωtcs__32 = -> /// \b Nr \s+ [^1]+ \b ///.test segment ), false
        // @eq ( Ωtcs__33 = -> segments.next().done ), true
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    undumper: function() {
      var Dbric, Dbric_std, SQL, Segmenter, Undumper, internals, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Segmenter, Undumper, internals} = SFMODULES.require_coarse_sqlite_statement_segmenter());
      ({Dbric, Dbric_std, SQL} = SFMODULES.unstable.require_dbric());
      jr = JSON.stringify;
      sources = get_various_sources();
      (() => {        //.......................................................................................................
        var applicator, call_results, db, row, rows, show, statement, statements, Ωtcs__34, Ωtcs__35, Ωtcs__36, Ωtcs__37, Ωtcs__38, Ωtcs__39, Ωtcs__40, Ωtcs__41, Ωtcs__42, Ωtcs__43, Ωtcs__44, Ωtcs__45, Ωtcs__46;
        //.....................................................................................................
        call_results = [];
        db = new Dbric(':memory:');
        db.create_function({
          name: 'trigger_on_before_insert',
          call: function(table_name, rowid) {
            return call_results.push({table_name, rowid});
          }
        });
        applicator = new Undumper({db});
        sources = get_realistic_sources();
        show = function(x) {
          echo(jr(x));
          return x;
        };
        //.....................................................................................................
        statements = applicator.scan(sources.realistic_source_1);
        statement = show(statements.next().value);
        this.eq((Ωtcs__34 = function() {
          return statement;
        }), "-- ---X---X---\nselect 24 as a;");
        statement = show(statements.next().value);
        this.eq((Ωtcs__35 = function() {
          return statement;
        }), "\n\n-- ---X---X---\ncreate table t (\n    rowid text unique not null primary key );");
        statement = show(statements.next().value);
        this.eq((Ωtcs__36 = function() {
          return statement;
        }), "\n\n-- ---X---X---\nCREATE TRIGGER some_trigger  /* Nr 4 */\nbefore insert on t\nfor each row begin\n  select trigger_on_before_insert( 't', new.rowid );\n  end /*comment */ -- newline!\n  /* Nr 5 */ ;");
        statement = show(statements.next().value);
        this.eq((Ωtcs__37 = function() {
          return statement;
        }), "\n\n-- ---X---X---\ninsert into t ( rowid ) values ( 'first' );");
        statement = show(statements.next().value);
        this.eq((Ωtcs__38 = function() {
          return statement;
        }), "\n-- ---X---X---\ninsert into t ( rowid ) values ( 'second' );");
        statement = show(statements.next().value);
        this.eq((Ωtcs__39 = function() {
          return statement;
        }), "\n-- ---X---X---\ninsert into t ( rowid ) values ( 'third' );");
        this.eq((Ωtcs__40 = function() {
          return statements.next().done;
        }), true);
        (function() {
          var results;
          results = [];
          for (statement of statements) {
            results.push(statement);
          }
          return results;
        })();
        //.....................................................................................................
        /* NOTE ensure that statements are applied in case the above is incomplete */        statement = SQL`select * from t order by rowid;`;
        for (row of db.walk(statement)) {
          echo(jr(row));
        }
        rows = db.walk(statement);
        this.eq((Ωtcs__41 = function() {
          return rows.next().value;
        }), {
          rowid: 'first'
        });
        this.eq((Ωtcs__42 = function() {
          return rows.next().value;
        }), {
          rowid: 'second'
        });
        this.eq((Ωtcs__43 = function() {
          return rows.next().value;
        }), {
          rowid: 'third'
        });
        this.eq((Ωtcs__44 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        statement = SQL`select name, sql from sqlite_schema where type in ( 'table', 'view' ) order by name, type;`;
        for (row of db.walk(statement)) {
          echo(jr(row));
        }
        rows = db.walk(statement);
        this.eq((Ωtcs__45 = function() {
          return rows.next().value;
        }), {
          "name": "t",
          "sql": "CREATE TABLE t (\n    rowid text unique not null primary key )"
        });
        this.eq((Ωtcs__46 = function() {
          return rows.next().done;
        }), true);
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
      return (new Test(guytest_cfg)).test({
        segmenter_with_line_input: tests.segmenter_with_line_input
      });
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtY29hcnNlLXNxbGl0ZS1zdGF0ZW1lbnQtc2VnbWVudGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLHFCQUFBLEVBQUEsbUJBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsNEJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEMsRUFiQTs7Ozs7RUE0QkEsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsMkJBQVIsQ0FBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsbUNBQVIsRUE3QjVCOzs7Ozs7RUFrQ0EsbUJBQUEsR0FBc0Is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QUEsQ0FBVyxDQUFDO1FBQWYsQ0FBYixDQUFKLEVBQXdDLElBQXhDO2VBQ0M7TUFsQ0EsQ0FBQSxJQVZQOzthQThDSztJQS9DTztFQW5JVixFQS9IRjs7O0VBdVRBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQSxXQUFBOzs7TUFFRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxJQUF2QztRQUE2QyxhQUFBLEVBQWU7TUFBNUQ7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLENBQUUsS0FBRixDQUE5QjthQUNBLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSx5QkFBQSxFQUEyQixLQUFLLENBQUM7TUFBbkMsQ0FBOUI7SUFQc0MsQ0FBQSxJQUF4Qzs7QUF2VEEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtc3FsaXRlLXNlZ21lbnRlcidcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyB7IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jICMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbiMgeyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbnsgVGVzdCwgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiMgRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4jIFBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZ2V0X3ZhcmlvdXNfc291cmNlcyA9IC0+XG4gIFNRTCAgID0gU3RyaW5nLnJhd1xuICBSICAgICA9IHt9XG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgUi5sb25nX3NvdXJjZV9ubCA9IFNRTFwiXCJcIlxuXG4gICAgY3JlYXRlIHRhYmxlIFwibmFtZXNcIiAoIC8qIE5yIDEgKi9cbiAgICAgIG5hbWUgdGV4dCB1bmlxdWUgbm90IG51bGwsXG4gICAgICBcIm5vLWNvbW1lbnRbXCIgLyogYmNvbW1lbnQhICovIHRleHQgbm90IG51bGwgZGVmYXVsdCAnbm87Y29tbWVudCcsIC0tIGxjb21tZW50IGJyb3RoZXJcbiAgICAgIFt1dXVnaC4uLi5dIGludGVnZXIgKTtcblxuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgLS0gQWxhcywgYSB2YWxpZCBzdGF0ZW1lbnQgKGFsdGhvdWdoIHByb2JhYmx5IG5vdCBvbmUgdGhhdCBjYW4gYXBwZWFyIGluIHJlZ3VsYXIgZHVtcCBmaWxlKSAjIyNcbiAgICAvKiBOciAyICovIGRlbGV0ZSBmcm9tIGVuZCB3aGVyZSBlbmQgPSAneCcgcmV0dXJuaW5nIGVuZDtcblxuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgLyogTnIgMyAqLyBiZWdpbiBpbW1lZGlhdGUgdHJhbnNhY3Rpb247XG5cbiAgICAtLSAtLS1YLS0tWC0tLVxuICAgIENSRUFURSBUUklHR0VSIGp6cl9taXJyb3JfdHJpcGxlc19yZWdpc3RlciAgLyogTnIgNCAqL1xuICAgIGJlZm9yZSBpbnNlcnQgb24ganpyX21pcnJvcl90cmlwbGVzX2Jhc2VcbiAgICBmb3IgZWFjaCByb3cgYmVnaW5cbiAgICAgIHNlbGVjdCB0cmlnZ2VyX29uX2JlZm9yZV9pbnNlcnQoICdqenJfbWlycm9yX3RyaXBsZXNfYmFzZScsIG5ldy5yb3dpZCwgbmV3LnJlZiwgbmV3LnMsIG5ldy52LCBuZXcubyApO1xuICAgICAgZW5kIC8qY29tbWVudCAqLyAtLSBuZXdsaW5lIVxuICAgICAgLyogTnIgNSAqLyA7XG4gICAgXCJcIlwiXG4gICAgIyBDUkVBVEUgVEFCTEUganpyX21pcnJvcl9saW5lcyAoIC8qIE5yIDYgKi9cbiAgICAjICAgLS0gJ3Q6amZtOidcbiAgICAjICAgcm93aWQgICAgIHRleHQgICAgdW5pcXVlICBub3QgbnVsbCxcbiAgICAjICAgcmVmICAgICAgIHRleHQgICAgdW5pcXVlICBub3QgbnVsbCBnZW5lcmF0ZWQgYWx3YXlzIGFzICggZHNrZXkgfHwgJzpMPScgfHwgbGluZV9uciApIHZpcnR1YWwsXG4gICAgIyAgIGRza2V5ICAgICB0ZXh0ICAgICAgICAgICAgbm90IG51bGwsXG4gICAgIyAgIGxpbmVfbnIgICBpbnRlZ2VyICAgICAgICAgbm90IG51bGwsXG4gICAgIyAgIGxjb2RlICAgICB0ZXh0ICAgICAgICAgICAgbm90IG51bGwsXG4gICAgIyAgIGxpbmUgICAgICB0ZXh0ICAgICAgICAgICAgbm90IG51bGwsXG4gICAgIyAgIGpmaWVsZHMgICBqc29uICAgICAgICAgICAgICAgIG51bGwsXG4gICAgIyAgIGZpZWxkXzEgICB0ZXh0ICAgICAgICAgICAgICAgIG51bGwsXG4gICAgIyAgIGZpZWxkXzIgICB0ZXh0ICAgICAgICAgICAgICAgIG51bGwsXG4gICAgIyAgIGZpZWxkXzMgICB0ZXh0ICAgICAgICAgICAgICAgIG51bGwsXG4gICAgIyAgIGZpZWxkXzQgICB0ZXh0ICAgICAgICAgICAgICAgIG51bGwsXG4gICAgIyBwcmltYXJ5IGtleSAoIHJvd2lkICksXG4gICAgIyBjaGVjayAoIHJvd2lkIHJlZ2V4cCAnXnQ6bXI6bG46Uj1cXGQrJCcpLFxuICAgICMgdW5pcXVlICggZHNrZXksIGxpbmVfbnIgKSxcbiAgICAjIGZvcmVpZ24ga2V5ICggbGNvZGUgKSByZWZlcmVuY2VzIGp6cl9taXJyb3JfbGNvZGVzICggbGNvZGUgKSApO1xuICAgICMgSU5TRVJUIElOVE8ganpyX21pcnJvcl9saW5lcyBWQUxVRVMoJ3Q6bXI6bG46Uj0xJywnZGljdDptZWFuaW5ncycsMSwnQicsJycsTlVMTCxOVUxMLE5VTEwsTlVMTCxOVUxMKTtcbiAgICAjIElOU0VSVCBJTlRPIGp6cl9taXJyb3JfbGluZXMgVkFMVUVTKCd0Om1yOmxuOlI9MicsJ2RpY3Q6bWVhbmluZ3MnLDIsJ0InLCcnLE5VTEwsTlVMTCxOVUxMLE5VTEwsTlVMTCk7XG4gICAgIyBJTlNFUlQgSU5UTyBqenJfbWlycm9yX2xpbmVzIFZBTFVFUygndDptcjpsbjpSPTMnLCdkaWN0Om1lYW5pbmdzJywzLCdCJywnJyxOVUxMLE5VTEwsTlVMTCxOVUxMLE5VTEwpO1xuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIFJbIFwic291cmNlXyN7aWR4ICsgMX1cIiBdICA9IHNvdXJjZSBmb3Igc291cmNlLCBpZHggaW4gUi5sb25nX3NvdXJjZV9ubC5zcGxpdCAvLS0gLS0tWC4qL2dtXG4gIGdldF9wbGFpbl9zb3VyY2VzICAgICAgICAgPSAtPiAoIHNvdXJjZSBmb3Iga2V5LCBzb3VyY2Ugb2YgUiB3aGVuIC9ec291cmNlX1xcZCsvLnRlc3Qga2V5IClcbiAgIyBnZXRfc291cmNlc19ub19sY29tbWVudHMgID0gLT4gKCAoIHNvdXJjZS5yZXBsYWNlIC8oPzw9XFxzKS0tLiokL2csICcnICkgZm9yIHNvdXJjZSBpbiBnZXRfcGxhaW5fc291cmNlcygpIClcbiAgZ2V0X3NvdXJjZXNfbm9fbGNvbW1lbnRzICA9IC0+ICggKCBzb3VyY2UucmVwbGFjZSAvLS0uKiQvZ20sICcnICkgZm9yIHNvdXJjZSBpbiBnZXRfcGxhaW5fc291cmNlcygpIClcbiAgIyBkZWJ1ZyAnzql0Y3NfX18xJywgJ1xcbicgKyBzb3VyY2UgZm9yIHNvdXJjZSBpbiBnZXRfcGxhaW5fc291cmNlcygpXG4gICMgZGVidWcgJ86pdGNzX19fMicsICdcXG4nICsgc291cmNlIGZvciBzb3VyY2UgaW4gZ2V0X3NvdXJjZXNfbm9fbGNvbW1lbnRzKClcbiAgIyBSLmxvbmdfc291cmNlX25sICAgICAgICAgID0gKCBnZXRfcGxhaW5fc291cmNlcygpICkuam9pbiAnXFxuJ1xuICBSLmxvbmdfc291cmNlX29uZV9saW5lICAgID0gKCAoIGdldF9zb3VyY2VzX25vX2xjb21tZW50cygpICkuam9pbiAnJyApLnJlcGxhY2UgL1xcbi9nLCAnJ1xuICByZXR1cm4gUlxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmdldF9yZWFsaXN0aWNfc291cmNlcyA9IC0+XG4gIFNRTCAgID0gU3RyaW5nLnJhd1xuICBSICAgICA9IHt9XG4gIFIucmVhbGlzdGljX3NvdXJjZV8xID0gU1FMXCJcIlwiXG4gICAgLS0gLS0tWC0tLVgtLS1cbiAgICBzZWxlY3QgMjQgYXMgYTtcblxuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgY3JlYXRlIHRhYmxlIHQgKFxuICAgICAgICByb3dpZCB0ZXh0IHVuaXF1ZSBub3QgbnVsbCBwcmltYXJ5IGtleSApO1xuXG4gICAgLS0gLS0tWC0tLVgtLS1cbiAgICBDUkVBVEUgVFJJR0dFUiBzb21lX3RyaWdnZXIgIC8qIE5yIDQgKi9cbiAgICBiZWZvcmUgaW5zZXJ0IG9uIHRcbiAgICBmb3IgZWFjaCByb3cgYmVnaW5cbiAgICAgIHNlbGVjdCB0cmlnZ2VyX29uX2JlZm9yZV9pbnNlcnQoICd0JywgbmV3LnJvd2lkICk7XG4gICAgICBlbmQgLypjb21tZW50ICovIC0tIG5ld2xpbmUhXG4gICAgICAvKiBOciA1ICovIDtcblxuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgaW5zZXJ0IGludG8gdCAoIHJvd2lkICkgdmFsdWVzICggJ2ZpcnN0JyApO1xuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgaW5zZXJ0IGludG8gdCAoIHJvd2lkICkgdmFsdWVzICggJ3NlY29uZCcgKTtcbiAgICAtLSAtLS1YLS0tWC0tLVxuICAgIGluc2VydCBpbnRvIHQgKCByb3dpZCApIHZhbHVlcyAoICd0aGlyZCcgKTtcbiAgICBcIlwiXCJcbiAgcmV0dXJuIFJcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG53YWxrX2xpbmVzID0gKCB0ZXh0ICkgLT4geWllbGQgZnJvbSB0ZXh0LnNwbGl0ICdcXG4nXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2VnbWVudGVyOiAtPlxuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IFNlZ21lbnRlcixcbiAgICAgIFVuZHVtcGVyLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9jb2Fyc2Vfc3FsaXRlX3N0YXRlbWVudF9zZWdtZW50ZXIoKVxuICAgIGpyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBKU09OLnN0cmluZ2lmeVxuICAgIHNvdXJjZXMgICAgICAgICAgICAgICAgICAgICAgICAgPSBnZXRfdmFyaW91c19zb3VyY2VzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHdhbGtlciAgICAgICAgPSBuZXcgU2VnbWVudGVyKClcbiAgICAgIEB0aHJvd3MgKCDOqXRjc19fXzMgPSAtPiB3YWxrZXIuc2NhbiB1bmRlZmluZWQgICAgICksIC9leHBlY3RlZCBhIHRleHQvXG4gICAgICBAdGhyb3dzICggzql0Y3NfX180ID0gLT4gd2Fsa2VyLnNjYW4gbnVsbCAgICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0L1xuICAgICAgQHRocm93cyAoIM6pdGNzX19fNSA9IC0+IHdhbGtlci5zY2FuIFN5bWJvbCAnPz8nICAgKSwgL2V4cGVjdGVkIGEgdGV4dC9cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgd2Fsa2VyICAgICAgICA9IG5ldyBTZWdtZW50ZXIoKVxuICAgICAgQGVxICggzql0Y3NfX182ID0gLT4gdHlwZV9vZiB3YWxrZXIuc2NhbiAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgQGVxICggzql0Y3NfX183ID0gLT4gdHlwZV9vZiB3YWxrZXIuc2NhbiAneCcgKSwgJ2dlbmVyYXRvcidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyAnzql0Y3NfX184JywganIgc2VnbWVudCBmb3Igc2VnbWVudCBmcm9tIHdhbGtlci5zY2FuIHNvdXJjZXMuc291cmNlXzFcbiAgICAgICMgJ86pdGNzX19fOScsIGpyIHNlZ21lbnQgZm9yIHNlZ21lbnQgZnJvbSB3YWxrZXIuc2NhbiBzb3VyY2VzLmxvbmdfc291cmNlX25sXG4gICAgICAjICfOqXRjc19fMTAnLCBqciBzZWdtZW50IGZvciBzZWdtZW50IGZyb20gd2Fsa2VyLnNjYW4gc291cmNlcy5sb25nX3NvdXJjZV9vbmVfbGluZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHdhbGtlciAgICA9IG5ldyBTZWdtZW50ZXIoKVxuICAgICAgc2VnbWVudHMgID0gd2Fsa2VyLnNjYW4gc291cmNlcy5zb3VyY2VfMVxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18xMSA9IC0+IC8vLyBcXGIgTnIgXFxzKyAxICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICBAZXEgKCDOqXRjc19fMTIgPSAtPiAvLy8gXFxiIE5yIFxccysgW14xXSsgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pdGNzX18xMyA9IC0+IHNlZ21lbnRzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgd2Fsa2VyICAgID0gbmV3IFNlZ21lbnRlcigpXG4gICAgICBzZWdtZW50cyAgPSB3YWxrZXIuc2NhbiBzb3VyY2VzLmxvbmdfc291cmNlX25sXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMTQgPSAtPiAvLy8gXFxiIE5yIFxccysgMSAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzE1ID0gLT4gLy8vIFxcYiBOciBcXHMrIDIgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18xNiA9IC0+IC8vLyBcXGIgTnIgXFxzKyAzICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMTcgPSAtPiAvLy8gXFxiIE5yIFxccysgNCAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzE4ID0gLT4gLy8vIFxcYiBOciBcXHMrIDUgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZm9yIHNlZ21lbnQgZnJvbSBzZWdtZW50c1xuICAgICAgICBpbmZvICfOqV9fMTknLCBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMjAgPSAtPiBzZWdtZW50cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHdhbGtlciAgICA9IG5ldyBTZWdtZW50ZXIoKVxuICAgICAgc2VnbWVudHMgID0gd2Fsa2VyLnNjYW4gc291cmNlcy5sb25nX3NvdXJjZV9vbmVfbGluZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzIxID0gLT4gLy8vIFxcYiBOciBcXHMrIDEgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18yMiA9IC0+IC8vLyBcXGIgTnIgXFxzKyAyICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMjMgPSAtPiAvLy8gXFxiIE5yIFxccysgMyAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzI0ID0gLT4gLy8vIFxcYiBOciBcXHMrIDQgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18yNSA9IC0+IC8vLyBcXGIgTnIgXFxzKyA1ICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pdGNzX18yNiA9IC0+IHNlZ21lbnRzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGZvciB0b2tlbiBmcm9tIHdhbGtlci5zY2FuX3Rva2VucyBzb3VyY2VzLmxvbmdfc291cmNlX29uZV9saW5lXG4gICAgIyAgIGluZm8gJ86pdGNzX18yNycsICggcnByIHRva2VuLmZxbmFtZSApLCAoIHJwciB0b2tlbiAuaGl0ICkgdW5sZXNzICggdG9rZW4uZnFuYW1lIGlzICd0b3Aud3MnICkgb3IgKCB0b2tlbi5pc19zeXN0ZW0gKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNlZ21lbnRlcl93aXRoX2xpbmVfaW5wdXQ6IC0+XG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgU2VnbWVudGVyLFxuICAgICAgVW5kdW1wZXIsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2NvYXJzZV9zcWxpdGVfc3RhdGVtZW50X3NlZ21lbnRlcigpXG4gICAganIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IEpTT04uc3RyaW5naWZ5XG4gICAgc291cmNlcyAgICAgICAgICAgICAgICAgICAgICAgICA9IGdldF92YXJpb3VzX3NvdXJjZXMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHdhbGtlciAgICA9IG5ldyBTZWdtZW50ZXIoKVxuICAgICAgbGluZV9uciAgID0gMFxuICAgICAgc2VnbWVudCAgID0gbnVsbFxuICAgICAgZm9yIGxpbmUgZnJvbSB3YWxrX2xpbmVzIHNvdXJjZXMuc291cmNlXzFcbiAgICAgICAgbGluZV9ucisrXG4gICAgICAgIGRlYnVnICfOqXRjc19fMjgnLCB7IGxpbmVfbnIsIGxpbmUsIH1cbiAgICAgICAgc2VnbWVudHMgID0gd2Fsa2VyLnNjYW4gbGluZVxuICAgICAgICB7IHZhbHVlLFxuICAgICAgICAgIGRvbmUsIH0gPSBzZWdtZW50cy5uZXh0KClcbiAgICAgICAgY29udGludWUgaWYgZG9uZVxuICAgICAgICBpZiBzZWdtZW50P1xuICAgICAgICAgIEBlcSAoIM6pX18yOSA9IC0+IGZhbHNlICksIFwiZXhwZWN0IG9uZSBzZWdtZW50LCByZWNlaXZlZCB0d28gc2VnbWVudHNcIlxuICAgICAgICBlbHNlXG4gICAgICAgICAgc2VnbWVudCA9IHZhbHVlXG4gICAgICAgICAgQGVxICggzql0Y3NfXzMwID0gLT4gc2VnbWVudCApLCBcIlwiXCJcXG5jcmVhdGUgdGFibGUgXCJuYW1lc1wiICggLyogTnIgMSAqL1xcbiAgbmFtZSB0ZXh0IHVuaXF1ZSBub3QgbnVsbCxcXG4gIFwibm8tY29tbWVudFtcIiAvKiBiY29tbWVudCEgKi8gdGV4dCBub3QgbnVsbCBkZWZhdWx0ICdubztjb21tZW50JywgLS0gbGNvbW1lbnQgYnJvdGhlclxcbiAgW3V1dWdoLi4uLl0gaW50ZWdlciApO1wiXCJcIlxuICAgICAgICAjIEBlcSAoIM6pdGNzX18zMSA9IC0+IC8vLyBcXGIgTnIgXFxzKyAxICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAgICMgQGVxICggzql0Y3NfXzMyID0gLT4gLy8vIFxcYiBOciBcXHMrIFteMV0rIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIGZhbHNlXG4gICAgICAgICMgQGVxICggzql0Y3NfXzMzID0gLT4gc2VnbWVudHMubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1bmR1bXBlcjogLT5cbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBTZWdtZW50ZXIsXG4gICAgICBVbmR1bXBlcixcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfY29hcnNlX3NxbGl0ZV9zdGF0ZW1lbnRfc2VnbWVudGVyKClcbiAgICB7IERicmljLFxuICAgICAgRGJyaWNfc3RkLFxuICAgICAgU1FMLCAgICAgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9kYnJpYygpXG4gICAganIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IEpTT04uc3RyaW5naWZ5XG4gICAgc291cmNlcyAgICAgICAgICAgICAgICAgICAgICAgICA9IGdldF92YXJpb3VzX3NvdXJjZXMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgY2FsbF9yZXN1bHRzICA9IFtdXG4gICAgICBkYiAgICAgICAgICA9IG5ldyBEYnJpYyAnOm1lbW9yeTonXG4gICAgICBkYi5jcmVhdGVfZnVuY3Rpb25cbiAgICAgICAgbmFtZTogJ3RyaWdnZXJfb25fYmVmb3JlX2luc2VydCdcbiAgICAgICAgY2FsbDogKCB0YWJsZV9uYW1lLCByb3dpZCApIC0+IGNhbGxfcmVzdWx0cy5wdXNoIHsgdGFibGVfbmFtZSwgcm93aWQsIH1cbiAgICAgIGFwcGxpY2F0b3IgID0gbmV3IFVuZHVtcGVyIHsgZGIsIH1cbiAgICAgIHNvdXJjZXMgICAgID0gZ2V0X3JlYWxpc3RpY19zb3VyY2VzKClcbiAgICAgIHNob3cgICAgICAgID0gKCB4ICkgLT4gZWNobyBqciB4OyB4XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHN0YXRlbWVudHMgPSBhcHBsaWNhdG9yLnNjYW4gc291cmNlcy5yZWFsaXN0aWNfc291cmNlXzFcbiAgICAgIHN0YXRlbWVudCAgPSBzaG93IHN0YXRlbWVudHMubmV4dCgpLnZhbHVlOyBAZXEgKCDOqXRjc19fMzQgPSAtPiBzdGF0ZW1lbnQgKSwgXCItLSAtLS1YLS0tWC0tLVxcbnNlbGVjdCAyNCBhcyBhO1wiXG4gICAgICBzdGF0ZW1lbnQgID0gc2hvdyBzdGF0ZW1lbnRzLm5leHQoKS52YWx1ZTsgQGVxICggzql0Y3NfXzM1ID0gLT4gc3RhdGVtZW50ICksIFwiXFxuXFxuLS0gLS0tWC0tLVgtLS1cXG5jcmVhdGUgdGFibGUgdCAoXFxuICAgIHJvd2lkIHRleHQgdW5pcXVlIG5vdCBudWxsIHByaW1hcnkga2V5ICk7XCJcbiAgICAgIHN0YXRlbWVudCAgPSBzaG93IHN0YXRlbWVudHMubmV4dCgpLnZhbHVlOyBAZXEgKCDOqXRjc19fMzYgPSAtPiBzdGF0ZW1lbnQgKSwgXCJcXG5cXG4tLSAtLS1YLS0tWC0tLVxcbkNSRUFURSBUUklHR0VSIHNvbWVfdHJpZ2dlciAgLyogTnIgNCAqL1xcbmJlZm9yZSBpbnNlcnQgb24gdFxcbmZvciBlYWNoIHJvdyBiZWdpblxcbiAgc2VsZWN0IHRyaWdnZXJfb25fYmVmb3JlX2luc2VydCggJ3QnLCBuZXcucm93aWQgKTtcXG4gIGVuZCAvKmNvbW1lbnQgKi8gLS0gbmV3bGluZSFcXG4gIC8qIE5yIDUgKi8gO1wiXG4gICAgICBzdGF0ZW1lbnQgID0gc2hvdyBzdGF0ZW1lbnRzLm5leHQoKS52YWx1ZTsgQGVxICggzql0Y3NfXzM3ID0gLT4gc3RhdGVtZW50ICksIFwiXFxuXFxuLS0gLS0tWC0tLVgtLS1cXG5pbnNlcnQgaW50byB0ICggcm93aWQgKSB2YWx1ZXMgKCAnZmlyc3QnICk7XCJcbiAgICAgIHN0YXRlbWVudCAgPSBzaG93IHN0YXRlbWVudHMubmV4dCgpLnZhbHVlOyBAZXEgKCDOqXRjc19fMzggPSAtPiBzdGF0ZW1lbnQgKSwgXCJcXG4tLSAtLS1YLS0tWC0tLVxcbmluc2VydCBpbnRvIHQgKCByb3dpZCApIHZhbHVlcyAoICdzZWNvbmQnICk7XCJcbiAgICAgIHN0YXRlbWVudCAgPSBzaG93IHN0YXRlbWVudHMubmV4dCgpLnZhbHVlOyBAZXEgKCDOqXRjc19fMzkgPSAtPiBzdGF0ZW1lbnQgKSwgXCJcXG4tLSAtLS1YLS0tWC0tLVxcbmluc2VydCBpbnRvIHQgKCByb3dpZCApIHZhbHVlcyAoICd0aGlyZCcgKTtcIlxuICAgICAgQGVxICggzql0Y3NfXzQwID0gLT4gc3RhdGVtZW50cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICAoIHN0YXRlbWVudCBmb3Igc3RhdGVtZW50IGZyb20gc3RhdGVtZW50cyApICMjIyBOT1RFIGVuc3VyZSB0aGF0IHN0YXRlbWVudHMgYXJlIGFwcGxpZWQgaW4gY2FzZSB0aGUgYWJvdmUgaXMgaW5jb21wbGV0ZSAjIyNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc3RhdGVtZW50ID0gU1FMXCJzZWxlY3QgKiBmcm9tIHQgb3JkZXIgYnkgcm93aWQ7XCJcbiAgICAgIGVjaG8ganIgcm93IGZvciByb3cgZnJvbSBkYi53YWxrIHN0YXRlbWVudFxuICAgICAgcm93cyA9IGRiLndhbGsgc3RhdGVtZW50XG4gICAgICBAZXEgKCDOqXRjc19fNDEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAnZmlyc3QnLCB9XG4gICAgICBAZXEgKCDOqXRjc19fNDIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAnc2Vjb25kJywgfVxuICAgICAgQGVxICggzql0Y3NfXzQzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3RoaXJkJywgfVxuICAgICAgQGVxICggzql0Y3NfXzQ0ID0gLT4gcm93cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHN0YXRlbWVudCA9IFNRTFwic2VsZWN0IG5hbWUsIHNxbCBmcm9tIHNxbGl0ZV9zY2hlbWEgd2hlcmUgdHlwZSBpbiAoICd0YWJsZScsICd2aWV3JyApIG9yZGVyIGJ5IG5hbWUsIHR5cGU7XCJcbiAgICAgIGVjaG8ganIgcm93IGZvciByb3cgZnJvbSBkYi53YWxrIHN0YXRlbWVudFxuICAgICAgcm93cyA9IGRiLndhbGsgc3RhdGVtZW50XG4gICAgICBAZXEgKCDOqXRjc19fNDUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7XCJuYW1lXCI6XCJ0XCIsXCJzcWxcIjpcIkNSRUFURSBUQUJMRSB0IChcXG4gICAgcm93aWQgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKVwifVxuICAgICAgQGVxICggzql0Y3NfXzQ2ID0gLT4gcm93cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBkZW1vX2luZmluaXRlX3Byb3h5KClcbiAgIyBkZW1vX2NvbG9yZnVsX3Byb3h5KClcbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBzZWdtZW50ZXJfd2l0aF9saW5lX2lucHV0OiB0ZXN0cy5zZWdtZW50ZXJfd2l0aF9saW5lX2lucHV0LCB9XG4iXX0=
