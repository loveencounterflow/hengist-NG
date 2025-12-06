(async function() {
  'use strict';
  var GUY, SFMODULES, Test, alert, blue, bold, debug, echo, get_realistic_sources, get_various_sources, gold, green, grey, help, info, inspect, log, plain, praise, red, reverse, rpr, tests, urge, warn, whisper, white;

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
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    statement_walker: function() {
      var Statement_applicator, Statement_walker, internals, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Statement_walker, Statement_applicator, internals} = SFMODULES.require_coarse_sqlite_statement_segmenter());
      jr = JSON.stringify;
      sources = get_various_sources();
      (() => {        //.......................................................................................................
        var walker, Ωtcs___3, Ωtcs___4, Ωtcs___5;
        //.....................................................................................................
        walker = new Statement_walker();
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
        walker = new Statement_walker();
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
        walker = new Statement_walker();
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
        var segment, segments, walker, Ωtcs__14, Ωtcs__15, Ωtcs__16, Ωtcs__17, Ωtcs__18, Ωtcs__19;
        walker = new Statement_walker();
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
        this.eq((Ωtcs__19 = function() {
          return segments.next().done;
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var segment, segments, walker, Ωtcs__20, Ωtcs__21, Ωtcs__22, Ωtcs__23, Ωtcs__24, Ωtcs__25;
        walker = new Statement_walker();
        segments = walker.scan(sources.long_source_one_line);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__20 = function() {
          return /\bNr\s+1\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__21 = function() {
          return /\bNr\s+2\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__22 = function() {
          return /\bNr\s+3\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__23 = function() {
          return /\bNr\s+4\b/.test(segment);
        }), true);
        //.....................................................................................................
        segment = segments.next().value;
        echo(jr(segment));
        this.eq((Ωtcs__24 = function() {
          return /\bNr\s+5\b/.test(segment);
        }), true);
        //.....................................................................................................
        this.eq((Ωtcs__25 = function() {
          return segments.next().done;
        }), true);
        return null;
      })();
      // #.....................................................................................................
      // for token from walker.scan_tokens sources.long_source_one_line
      //   info 'Ωtcs__26', ( rpr token.fqname ), ( rpr token .hit ) unless ( token.fqname is 'top.ws' ) or ( token.is_system )
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    statement_applicator: function() {
      var Dbric, Dbric_std, SQL, Statement_applicator, Statement_walker, internals, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Statement_walker, Statement_applicator, internals} = SFMODULES.require_coarse_sqlite_statement_segmenter());
      ({Dbric, Dbric_std, SQL} = SFMODULES.unstable.require_dbric());
      jr = JSON.stringify;
      sources = get_various_sources();
      (() => {        //.......................................................................................................
        var applicator, call_results, db, row, rows, statement, statements, Ωtcs__27, Ωtcs__28, Ωtcs__29, Ωtcs__30, Ωtcs__31, Ωtcs__32, Ωtcs__33, Ωtcs__34, Ωtcs__35, Ωtcs__36, Ωtcs__37;
        //.....................................................................................................
        call_results = [];
        db = new Dbric_std(':memory:');
        db.create_function({
          name: 'trigger_on_before_insert',
          call: function(table_name, rowid) {
            return call_results.push({table_name, rowid});
          }
        });
        applicator = new Statement_applicator({db});
        sources = get_realistic_sources();
        //.....................................................................................................
        statements = applicator.scan(sources.realistic_source_1);
        //.....................................................................................................
        statement = statements.next().value;
        echo(jr(statement));
        this.eq((Ωtcs__27 = function() {
          return statement;
        }), "-- ---X---X---\nselect 24 as a;");
        //.....................................................................................................
        statement = statements.next().value;
        echo(jr(statement));
        this.eq((Ωtcs__28 = function() {
          return statement;
        }), "\n\n-- ---X---X---\ncreate table t (\n    rowid text unique not null primary key );");
        //.....................................................................................................
        statement = statements.next().value;
        echo(jr(statement));
        this.eq((Ωtcs__29 = function() {
          return statement;
        }), "\n\n-- ---X---X---\nCREATE TRIGGER some_trigger  /* Nr 4 */\nbefore insert on t\nfor each row begin\n  select trigger_on_before_insert( 't', new.rowid );\n  end /*comment */ -- newline!\n  /* Nr 5 */ ;");
        //.....................................................................................................
        statement = statements.next().value;
        echo(jr(statement));
        this.eq((Ωtcs__30 = function() {
          return statement;
        }), "\n\n-- ---X---X---\ninsert into t ( rowid ) values ( 'first' );");
        //.....................................................................................................
        statement = statements.next().value;
        echo(jr(statement));
        this.eq((Ωtcs__31 = function() {
          return statement;
        }), "\n-- ---X---X---\ninsert into t ( rowid ) values ( 'second' );");
        //.....................................................................................................
        statement = statements.next().value;
        echo(jr(statement));
        this.eq((Ωtcs__32 = function() {
          return statement;
        }), "\n-- ---X---X---\ninsert into t ( rowid ) values ( 'third' );");
        //.....................................................................................................
        this.eq((Ωtcs__33 = function() {
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
        /* NOTE ensure that statements are applied in case the above is incomplete */        rows = db.walk(SQL`select * from t order by rowid;`);
        //.....................................................................................................
        row = rows.next().value;
        echo(jr(row));
        this.eq((Ωtcs__34 = function() {
          return row;
        }), {
          rowid: 'first'
        });
        //.....................................................................................................
        row = rows.next().value;
        echo(jr(row));
        this.eq((Ωtcs__35 = function() {
          return row;
        }), {
          rowid: 'second'
        });
        //.....................................................................................................
        row = rows.next().value;
        echo(jr(row));
        this.eq((Ωtcs__36 = function() {
          return row;
        }), {
          rowid: 'third'
        });
        //.....................................................................................................
        this.eq((Ωtcs__37 = function() {
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
      return (new Test(guytest_cfg)).test({tests});
    })();
  }

  // ( new Test guytest_cfg ).test { statement_inheritance: tests.statement_inheritance, }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtY29hcnNlLXNxbGl0ZS1zdGF0ZW1lbnQtc2VnbWVudGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLHFCQUFBLEVBQUEsbUJBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQiw0QkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQyxFQWJBOzs7OztFQTRCQSxDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUixDQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSxtQ0FBUixFQTdCNUI7Ozs7OztFQWtDQSxtQkFBQSxHQUFzQixRQUFBLENBQUEs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QUE5QjtJQU5zQyxDQUFBLElBQXhDOzs7RUFuUkE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1zcWxpdGUtc2VnbWVudGVyJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIHsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxuIyB7IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xueyBUZXN0LCAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuIyBGUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiMgUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5nZXRfdmFyaW91c19zb3VyY2VzID0gLT5cbiAgU1FMICAgPSBTdHJpbmcucmF3XG4gIFIgICAgID0ge31cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBSLmxvbmdfc291cmNlX25sID0gU1FMXCJcIlwiXG5cbiAgICBjcmVhdGUgdGFibGUgXCJuYW1lc1wiICggLyogTnIgMSAqL1xuICAgICAgbmFtZSB0ZXh0IHVuaXF1ZSBub3QgbnVsbCxcbiAgICAgIFwibm8tY29tbWVudFtcIiAvKiBiY29tbWVudCEgKi8gdGV4dCBub3QgbnVsbCBkZWZhdWx0ICdubztjb21tZW50JywgLS0gbGNvbW1lbnQgYnJvdGhlclxuICAgICAgW3V1dWdoLi4uLl0gaW50ZWdlciApO1xuXG4gICAgLS0gLS0tWC0tLVgtLS1cbiAgICAtLSBBbGFzLCBhIHZhbGlkIHN0YXRlbWVudCAoYWx0aG91Z2ggcHJvYmFibHkgbm90IG9uZSB0aGF0IGNhbiBhcHBlYXIgaW4gcmVndWxhciBkdW1wIGZpbGUpICMjI1xuICAgIC8qIE5yIDIgKi8gZGVsZXRlIGZyb20gZW5kIHdoZXJlIGVuZCA9ICd4JyByZXR1cm5pbmcgZW5kO1xuXG4gICAgLS0gLS0tWC0tLVgtLS1cbiAgICAvKiBOciAzICovIGJlZ2luIGltbWVkaWF0ZSB0cmFuc2FjdGlvbjtcblxuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgQ1JFQVRFIFRSSUdHRVIganpyX21pcnJvcl90cmlwbGVzX3JlZ2lzdGVyICAvKiBOciA0ICovXG4gICAgYmVmb3JlIGluc2VydCBvbiBqenJfbWlycm9yX3RyaXBsZXNfYmFzZVxuICAgIGZvciBlYWNoIHJvdyBiZWdpblxuICAgICAgc2VsZWN0IHRyaWdnZXJfb25fYmVmb3JlX2luc2VydCggJ2p6cl9taXJyb3JfdHJpcGxlc19iYXNlJywgbmV3LnJvd2lkLCBuZXcucmVmLCBuZXcucywgbmV3LnYsIG5ldy5vICk7XG4gICAgICBlbmQgLypjb21tZW50ICovIC0tIG5ld2xpbmUhXG4gICAgICAvKiBOciA1ICovIDtcbiAgICBcIlwiXCJcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBSWyBcInNvdXJjZV8je2lkeCArIDF9XCIgXSAgPSBzb3VyY2UgZm9yIHNvdXJjZSwgaWR4IGluIFIubG9uZ19zb3VyY2Vfbmwuc3BsaXQgLy0tIC0tLVguKi9nbVxuICBnZXRfcGxhaW5fc291cmNlcyAgICAgICAgID0gLT4gKCBzb3VyY2UgZm9yIGtleSwgc291cmNlIG9mIFIgd2hlbiAvXnNvdXJjZV9cXGQrLy50ZXN0IGtleSApXG4gICMgZ2V0X3NvdXJjZXNfbm9fbGNvbW1lbnRzICA9IC0+ICggKCBzb3VyY2UucmVwbGFjZSAvKD88PVxccyktLS4qJC9nLCAnJyApIGZvciBzb3VyY2UgaW4gZ2V0X3BsYWluX3NvdXJjZXMoKSApXG4gIGdldF9zb3VyY2VzX25vX2xjb21tZW50cyAgPSAtPiAoICggc291cmNlLnJlcGxhY2UgLy0tLiokL2dtLCAnJyApIGZvciBzb3VyY2UgaW4gZ2V0X3BsYWluX3NvdXJjZXMoKSApXG4gICMgZGVidWcgJ86pdGNzX19fMScsICdcXG4nICsgc291cmNlIGZvciBzb3VyY2UgaW4gZ2V0X3BsYWluX3NvdXJjZXMoKVxuICAjIGRlYnVnICfOqXRjc19fXzInLCAnXFxuJyArIHNvdXJjZSBmb3Igc291cmNlIGluIGdldF9zb3VyY2VzX25vX2xjb21tZW50cygpXG4gICMgUi5sb25nX3NvdXJjZV9ubCAgICAgICAgICA9ICggZ2V0X3BsYWluX3NvdXJjZXMoKSApLmpvaW4gJ1xcbidcbiAgUi5sb25nX3NvdXJjZV9vbmVfbGluZSAgICA9ICggKCBnZXRfc291cmNlc19ub19sY29tbWVudHMoKSApLmpvaW4gJycgKS5yZXBsYWNlIC9cXG4vZywgJydcbiAgcmV0dXJuIFJcblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5nZXRfcmVhbGlzdGljX3NvdXJjZXMgPSAtPlxuICBTUUwgICA9IFN0cmluZy5yYXdcbiAgUiAgICAgPSB7fVxuICBSLnJlYWxpc3RpY19zb3VyY2VfMSA9IFNRTFwiXCJcIlxuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgc2VsZWN0IDI0IGFzIGE7XG5cbiAgICAtLSAtLS1YLS0tWC0tLVxuICAgIGNyZWF0ZSB0YWJsZSB0IChcbiAgICAgICAgcm93aWQgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKTtcblxuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgQ1JFQVRFIFRSSUdHRVIgc29tZV90cmlnZ2VyICAvKiBOciA0ICovXG4gICAgYmVmb3JlIGluc2VydCBvbiB0XG4gICAgZm9yIGVhY2ggcm93IGJlZ2luXG4gICAgICBzZWxlY3QgdHJpZ2dlcl9vbl9iZWZvcmVfaW5zZXJ0KCAndCcsIG5ldy5yb3dpZCApO1xuICAgICAgZW5kIC8qY29tbWVudCAqLyAtLSBuZXdsaW5lIVxuICAgICAgLyogTnIgNSAqLyA7XG5cbiAgICAtLSAtLS1YLS0tWC0tLVxuICAgIGluc2VydCBpbnRvIHQgKCByb3dpZCApIHZhbHVlcyAoICdmaXJzdCcgKTtcbiAgICAtLSAtLS1YLS0tWC0tLVxuICAgIGluc2VydCBpbnRvIHQgKCByb3dpZCApIHZhbHVlcyAoICdzZWNvbmQnICk7XG4gICAgLS0gLS0tWC0tLVgtLS1cbiAgICBpbnNlcnQgaW50byB0ICggcm93aWQgKSB2YWx1ZXMgKCAndGhpcmQnICk7XG4gICAgXCJcIlwiXG4gIHJldHVybiBSXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdGF0ZW1lbnRfd2Fsa2VyOiAtPlxuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICB7IFN0YXRlbWVudF93YWxrZXIsXG4gICAgICBTdGF0ZW1lbnRfYXBwbGljYXRvcixcbiAgICAgIGludGVybmFscywgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfY29hcnNlX3NxbGl0ZV9zdGF0ZW1lbnRfc2VnbWVudGVyKClcbiAgICBqciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gSlNPTi5zdHJpbmdpZnlcbiAgICBzb3VyY2VzICAgICAgICAgICAgICAgICAgICAgICAgID0gZ2V0X3ZhcmlvdXNfc291cmNlcygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICB3YWxrZXIgICAgICAgID0gbmV3IFN0YXRlbWVudF93YWxrZXIoKVxuICAgICAgQHRocm93cyAoIM6pdGNzX19fMyA9IC0+IHdhbGtlci5zY2FuIHVuZGVmaW5lZCAgICAgKSwgL2V4cGVjdGVkIGEgdGV4dC9cbiAgICAgIEB0aHJvd3MgKCDOqXRjc19fXzQgPSAtPiB3YWxrZXIuc2NhbiBudWxsICAgICAgICAgICksIC9leHBlY3RlZCBhIHRleHQvXG4gICAgICBAdGhyb3dzICggzql0Y3NfX181ID0gLT4gd2Fsa2VyLnNjYW4gU3ltYm9sICc/PycgICApLCAvZXhwZWN0ZWQgYSB0ZXh0L1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB3YWxrZXIgICAgICAgID0gbmV3IFN0YXRlbWVudF93YWxrZXIoKVxuICAgICAgQGVxICggzql0Y3NfX182ID0gLT4gdHlwZV9vZiB3YWxrZXIuc2NhbiAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgQGVxICggzql0Y3NfX183ID0gLT4gdHlwZV9vZiB3YWxrZXIuc2NhbiAneCcgKSwgJ2dlbmVyYXRvcidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyAnzql0Y3NfX184JywganIgc2VnbWVudCBmb3Igc2VnbWVudCBmcm9tIHdhbGtlci5zY2FuIHNvdXJjZXMuc291cmNlXzFcbiAgICAgICMgJ86pdGNzX19fOScsIGpyIHNlZ21lbnQgZm9yIHNlZ21lbnQgZnJvbSB3YWxrZXIuc2NhbiBzb3VyY2VzLmxvbmdfc291cmNlX25sXG4gICAgICAjICfOqXRjc19fMTAnLCBqciBzZWdtZW50IGZvciBzZWdtZW50IGZyb20gd2Fsa2VyLnNjYW4gc291cmNlcy5sb25nX3NvdXJjZV9vbmVfbGluZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHdhbGtlciAgICA9IG5ldyBTdGF0ZW1lbnRfd2Fsa2VyKClcbiAgICAgIHNlZ21lbnRzICA9IHdhbGtlci5zY2FuIHNvdXJjZXMuc291cmNlXzFcbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMTEgPSAtPiAvLy8gXFxiIE5yIFxccysgMSAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgQGVxICggzql0Y3NfXzEyID0gLT4gLy8vIFxcYiBOciBcXHMrIFteMV0rIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIGZhbHNlXG4gICAgICBAZXEgKCDOqXRjc19fMTMgPSAtPiBzZWdtZW50cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHdhbGtlciAgICA9IG5ldyBTdGF0ZW1lbnRfd2Fsa2VyKClcbiAgICAgIHNlZ21lbnRzICA9IHdhbGtlci5zY2FuIHNvdXJjZXMubG9uZ19zb3VyY2VfbmxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18xNCA9IC0+IC8vLyBcXGIgTnIgXFxzKyAxICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMTUgPSAtPiAvLy8gXFxiIE5yIFxccysgMiAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzE2ID0gLT4gLy8vIFxcYiBOciBcXHMrIDMgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18xNyA9IC0+IC8vLyBcXGIgTnIgXFxzKyA0ICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMTggPSAtPiAvLy8gXFxiIE5yIFxccysgNSAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqXRjc19fMTkgPSAtPiBzZWdtZW50cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHdhbGtlciAgICA9IG5ldyBTdGF0ZW1lbnRfd2Fsa2VyKClcbiAgICAgIHNlZ21lbnRzICA9IHdhbGtlci5zY2FuIHNvdXJjZXMubG9uZ19zb3VyY2Vfb25lX2xpbmVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18yMCA9IC0+IC8vLyBcXGIgTnIgXFxzKyAxICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMjEgPSAtPiAvLy8gXFxiIE5yIFxccysgMiAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzIyID0gLT4gLy8vIFxcYiBOciBcXHMrIDMgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18yMyA9IC0+IC8vLyBcXGIgTnIgXFxzKyA0ICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMjQgPSAtPiAvLy8gXFxiIE5yIFxccysgNSAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqXRjc19fMjUgPSAtPiBzZWdtZW50cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBmb3IgdG9rZW4gZnJvbSB3YWxrZXIuc2Nhbl90b2tlbnMgc291cmNlcy5sb25nX3NvdXJjZV9vbmVfbGluZVxuICAgICMgICBpbmZvICfOqXRjc19fMjYnLCAoIHJwciB0b2tlbi5mcW5hbWUgKSwgKCBycHIgdG9rZW4gLmhpdCApIHVubGVzcyAoIHRva2VuLmZxbmFtZSBpcyAndG9wLndzJyApIG9yICggdG9rZW4uaXNfc3lzdGVtIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdGF0ZW1lbnRfYXBwbGljYXRvcjogLT5cbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBTdGF0ZW1lbnRfd2Fsa2VyLFxuICAgICAgU3RhdGVtZW50X2FwcGxpY2F0b3IsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2NvYXJzZV9zcWxpdGVfc3RhdGVtZW50X3NlZ21lbnRlcigpXG4gICAgeyBEYnJpYyxcbiAgICAgIERicmljX3N0ZCxcbiAgICAgIFNRTCwgICAgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZGJyaWMoKVxuICAgIGpyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBKU09OLnN0cmluZ2lmeVxuICAgIHNvdXJjZXMgICAgICAgICAgICAgICAgICAgICAgICAgPSBnZXRfdmFyaW91c19zb3VyY2VzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGNhbGxfcmVzdWx0cyAgPSBbXVxuICAgICAgZGIgICAgICAgICAgPSBuZXcgRGJyaWNfc3RkICc6bWVtb3J5OidcbiAgICAgIGRiLmNyZWF0ZV9mdW5jdGlvblxuICAgICAgICBuYW1lOiAndHJpZ2dlcl9vbl9iZWZvcmVfaW5zZXJ0J1xuICAgICAgICBjYWxsOiAoIHRhYmxlX25hbWUsIHJvd2lkICkgLT4gY2FsbF9yZXN1bHRzLnB1c2ggeyB0YWJsZV9uYW1lLCByb3dpZCwgfVxuICAgICAgYXBwbGljYXRvciAgPSBuZXcgU3RhdGVtZW50X2FwcGxpY2F0b3IgeyBkYiwgfVxuICAgICAgc291cmNlcyAgICAgPSBnZXRfcmVhbGlzdGljX3NvdXJjZXMoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzdGF0ZW1lbnRzID0gYXBwbGljYXRvci5zY2FuIHNvdXJjZXMucmVhbGlzdGljX3NvdXJjZV8xXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHN0YXRlbWVudCAgID0gc3RhdGVtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc3RhdGVtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMjcgPSAtPiBzdGF0ZW1lbnQgKSwgXCItLSAtLS1YLS0tWC0tLVxcbnNlbGVjdCAyNCBhcyBhO1wiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHN0YXRlbWVudCAgID0gc3RhdGVtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc3RhdGVtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMjggPSAtPiBzdGF0ZW1lbnQgKSwgXCJcXG5cXG4tLSAtLS1YLS0tWC0tLVxcbmNyZWF0ZSB0YWJsZSB0IChcXG4gICAgcm93aWQgdGV4dCB1bmlxdWUgbm90IG51bGwgcHJpbWFyeSBrZXkgKTtcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzdGF0ZW1lbnQgICA9IHN0YXRlbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHN0YXRlbWVudFxuICAgICAgQGVxICggzql0Y3NfXzI5ID0gLT4gc3RhdGVtZW50ICksIFwiXFxuXFxuLS0gLS0tWC0tLVgtLS1cXG5DUkVBVEUgVFJJR0dFUiBzb21lX3RyaWdnZXIgIC8qIE5yIDQgKi9cXG5iZWZvcmUgaW5zZXJ0IG9uIHRcXG5mb3IgZWFjaCByb3cgYmVnaW5cXG4gIHNlbGVjdCB0cmlnZ2VyX29uX2JlZm9yZV9pbnNlcnQoICd0JywgbmV3LnJvd2lkICk7XFxuICBlbmQgLypjb21tZW50ICovIC0tIG5ld2xpbmUhXFxuICAvKiBOciA1ICovIDtcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzdGF0ZW1lbnQgICA9IHN0YXRlbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHN0YXRlbWVudFxuICAgICAgQGVxICggzql0Y3NfXzMwID0gLT4gc3RhdGVtZW50ICksIFwiXFxuXFxuLS0gLS0tWC0tLVgtLS1cXG5pbnNlcnQgaW50byB0ICggcm93aWQgKSB2YWx1ZXMgKCAnZmlyc3QnICk7XCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc3RhdGVtZW50ICAgPSBzdGF0ZW1lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzdGF0ZW1lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18zMSA9IC0+IHN0YXRlbWVudCApLCBcIlxcbi0tIC0tLVgtLS1YLS0tXFxuaW5zZXJ0IGludG8gdCAoIHJvd2lkICkgdmFsdWVzICggJ3NlY29uZCcgKTtcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzdGF0ZW1lbnQgICA9IHN0YXRlbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHN0YXRlbWVudFxuICAgICAgQGVxICggzql0Y3NfXzMyID0gLT4gc3RhdGVtZW50ICksIFwiXFxuLS0gLS0tWC0tLVgtLS1cXG5pbnNlcnQgaW50byB0ICggcm93aWQgKSB2YWx1ZXMgKCAndGhpcmQnICk7XCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzql0Y3NfXzMzID0gLT4gc3RhdGVtZW50cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICAoIHN0YXRlbWVudCBmb3Igc3RhdGVtZW50IGZyb20gc3RhdGVtZW50cyApICMjIyBOT1RFIGVuc3VyZSB0aGF0IHN0YXRlbWVudHMgYXJlIGFwcGxpZWQgaW4gY2FzZSB0aGUgYWJvdmUgaXMgaW5jb21wbGV0ZSAjIyNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcm93cyA9IGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIHQgb3JkZXIgYnkgcm93aWQ7XCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcm93ICAgPSByb3dzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciByb3dcbiAgICAgIEBlcSAoIM6pdGNzX18zNCA9IC0+IHJvdyApLCB7IHJvd2lkOiAnZmlyc3QnLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJvdyAgID0gcm93cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgcm93XG4gICAgICBAZXEgKCDOqXRjc19fMzUgPSAtPiByb3cgKSwgeyByb3dpZDogJ3NlY29uZCcsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcm93ICAgPSByb3dzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciByb3dcbiAgICAgIEBlcSAoIM6pdGNzX18zNiA9IC0+IHJvdyApLCB7IHJvd2lkOiAndGhpcmQnLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pdGNzX18zNyA9IC0+IHJvd3MubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb19pbmZpbml0ZV9wcm94eSgpXG4gICMgZGVtb19jb2xvcmZ1bF9wcm94eSgpXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogdHJ1ZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBzdGF0ZW1lbnRfaW5oZXJpdGFuY2U6IHRlc3RzLnN0YXRlbWVudF9pbmhlcml0YW5jZSwgfVxuIl19
