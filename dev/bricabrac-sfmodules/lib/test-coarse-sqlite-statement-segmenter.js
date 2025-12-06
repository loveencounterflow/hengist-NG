(async function() {
  'use strict';
  var GUY, SFMODULES, SQL, Test, alert, blue, bold, debug, echo, get_realistic_sources, get_various_sources, gold, green, grey, help, info, inspect, log, plain, praise, red, reverse, rpr, tests, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-sqlite-segmenter'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  // { f }                     = require '../../../apps/effstring'
  // # write                     = ( p ) -> process.stdout.write p
  // { nfa }                   = require '../../../apps/normalize-function-arguments'
  ({Test} = require('../../../apps/guy-test-NG'));

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  SQL = String.raw;

  // FS                        = require 'node:fs'
  // PATH                      = require 'node:path'

  //===========================================================================================================
  get_various_sources = function() {
    var R, get_plain_sources, get_sources_no_lcomments, i, idx, len, ref, source;
    R = {};
    //.........................................................................................................
    R.long_source_nl = SQL`create table "names" ( /* Nr 1 */
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
    var R;
    R = {};
    R.realistic_source_1 = SQL``;
    return R;
  };

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    statement_walker: function() {
      var Grammar, Statement_applicator, Statement_walker, internals, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Statement_walker, Statement_applicator, internals} = SFMODULES.require_coarse_sqlite_statement_segmenter());
      ({Grammar} = require('../../../apps/interlex'));
      jr = JSON.stringify;
      sources = get_various_sources();
      (() => {        //.......................................................................................................
        var walker, Ωtcs___3, Ωtcs___4, Ωtcs___5;
        //.....................................................................................................
        walker = new Statement_walker({Grammar});
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
        walker = new Statement_walker({Grammar});
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
        walker = new Statement_walker({Grammar});
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
        walker = new Statement_walker({Grammar});
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
        walker = new Statement_walker({Grammar});
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtY29hcnNlLXNxbGl0ZS1zdGF0ZW1lbnQtc2VnbWVudGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxxQkFBQSxFQUFBLG1CQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsNEJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEMsRUFiQTs7Ozs7RUE0QkEsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsMkJBQVIsQ0FBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsbUNBQVI7O0VBQzVCLEdBQUEsR0FBNEIsTUFBTSxDQUFDLElBOUJuQzs7Ozs7O0VBbUNBLG1CQUFBLEdBQXNCLFFBQUEsQ0FBQSxDQUFBO0FBQ3RCLFFBQUEsQ0FBQSxFQUFBLGlCQUFBLEVBQUEsd0JBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUE7SUFBRSxDQUFBLEdBQUksQ0FBQSxFQUFOOztJQUVFLENBQUMsQ0FBQyxjQUFGLEdBQW1CLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O2NBQUE7QUFtQnRCO0lBQUEsS0FBQSxpREFBQTt3QkFBQTs7TUFBQSxDQUFDLENBQUUsQ0FBQSxPQUFBLENBQUEsQ0FBVSxHQUFBLEdBQU0sQ0FBaEIsQ0FBQSxDQUFGLENBQUQsR0FBNEI7SUFBNUI7SUFDQSxpQkFBQSxHQUE0QixRQUFBLENBQUEsQ0FBQTtBQUFFLFVBQUEsR0FBQSxFQUFBO0FBQUc7TUFBQSxLQUFBLFFBQUE7O1lBQWlDLGFBQWEsQ0FBQyxJQUFkLENBQW1CLEdBQW5CO3VCQUFqQzs7TUFBQSxDQUFBOztJQUFMLEVBdEI5Qjs7SUF3QkUsd0JBQUEsR0FBNEIsUUFBQSxDQUFBLENBQUE7QUFBRSxVQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBO0FBQUc7QUFBQTtNQUFBLEtBQUEsd0NBQUE7O3FCQUFFLE1BQU0sQ0FBQyxPQUFQLENBQWUsU0FBZixFQUEwQixFQUExQjtNQUFGLENBQUE7O0lBQUwsRUF4QjlCOzs7O0lBNEJFLENBQUMsQ0FBQyxvQkFBRixHQUE0QixDQUFFLENBQUUsd0JBQUEsQ0FBQSxDQUFGLENBQThCLENBQUMsSUFBL0IsQ0FBb0MsRUFBcEMsQ0FBRixDQUEwQyxDQUFDLE9BQTNDLENBQW1ELEtBQW5ELEVBQTBELEVBQTFEO0FBQzVCLFdBQU87RUE5QmEsRUFuQ3RCOzs7RUFvRUEscUJBQUEsR0FBd0IsUUFBQSxDQUFBLENBQUE7QUFDeEIsUUFBQTtJQUFFLENBQUEsR0FBSSxDQUFBO0lBQ0osQ0FBQyxDQUFDLGtCQUFGLEdBQXVCLEdBQUcsQ0FBQTtBQUMxQixXQUFPO0VBSGUsRUFwRXhCOzs7RUEyRUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxLQUFBLEdBR1AsQ0FBQTs7SUFBQSxnQkFBQSxFQUFrQixRQUFBLENBQUEsQ0FBQTtBQUNwQixVQUFBLE9BQUEsRUFBQSxvQkFBQSxFQUFBLGdCQUFBLEVBQUEsU0FBQSxFQUFBLEVBQUEsRUFBQSxPQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsT0FBRixDQUFBLEdBQWtDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBbkIsQ0FBQSxDQUFsQztNQUNBLENBQUEsQ0FBRSxnQkFBRixFQUNFLG9CQURGLEVBRUUsU0FGRixDQUFBLEdBRWtDLFNBQVMsQ0FBQyx5Q0FBVixDQUFBLENBRmxDO01BR0EsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUFrQyxPQUFBLENBQVEsd0JBQVIsQ0FBbEM7TUFDQSxFQUFBLEdBQWtDLElBQUksQ0FBQztNQUN2QyxPQUFBLEdBQWtDLG1CQUFBLENBQUE7TUFFL0IsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBOztRQUNNLE1BQUEsR0FBZ0IsSUFBSSxnQkFBSixDQUFxQixDQUFFLE9BQUYsQ0FBckI7UUFDaEIsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxNQUFNLENBQUMsSUFBUCxDQUFZLE1BQVo7UUFBSCxDQUFiLENBQVIsRUFBcUQsaUJBQXJEO1FBQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxNQUFNLENBQUMsSUFBUCxDQUFZLElBQVo7UUFBSCxDQUFiLENBQVIsRUFBcUQsaUJBQXJEO1FBQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxNQUFNLENBQUMsSUFBUCxDQUFZLE1BQUEsQ0FBTyxJQUFQLENBQVo7UUFBSCxDQUFiLENBQVIsRUFBcUQsaUJBQXJEO2VBQ0M7TUFOQSxDQUFBO01BUUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBO1FBQU0sTUFBQSxHQUFnQixJQUFJLGdCQUFKLENBQXFCLENBQUUsT0FBRixDQUFyQjtRQUNoQixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLE9BQUEsQ0FBUSxNQUFNLENBQUMsSUFBZjtRQUFILENBQWIsQ0FBSixFQUErQyxVQUEvQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7aUJBQUcsT0FBQSxDQUFRLE1BQU0sQ0FBQyxJQUFQLENBQVksR0FBWixDQUFSO1FBQUgsQ0FBYixDQUFKLEVBQStDLFdBQS9DLEVBRk47Ozs7OztlQVFPO01BVEEsQ0FBQTtNQVdBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsT0FBQSxFQUFBLFFBQUEsRUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQTtRQUFNLE1BQUEsR0FBWSxJQUFJLGdCQUFKLENBQXFCLENBQUUsT0FBRixDQUFyQjtRQUNaLFFBQUEsR0FBWSxNQUFNLENBQUMsSUFBUCxDQUFZLE9BQU8sQ0FBQyxRQUFwQjtRQUNaLE9BQUEsR0FBWSxRQUFRLENBQUMsSUFBVCxDQUFBLENBQWUsQ0FBQztRQUM1QixJQUFBLENBQUssRUFBQSxDQUFHLE9BQUgsQ0FBTDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7aUJBQUcsWUFBMEIsQ0FBQyxJQUEzQixDQUFnQyxPQUFoQztRQUFILENBQWIsQ0FBSixFQUErRCxJQUEvRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7aUJBQUcsZ0JBQTBCLENBQUMsSUFBM0IsQ0FBZ0MsT0FBaEM7UUFBSCxDQUFiLENBQUosRUFBK0QsS0FBL0Q7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFFBQVEsQ0FBQyxJQUFULENBQUEsQ0FBZSxDQUFDO1FBQW5CLENBQWIsQ0FBSixFQUE0QyxJQUE1QztlQUNDO01BUkEsQ0FBQTtNQVVBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsT0FBQSxFQUFBLFFBQUEsRUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQTtRQUFNLE1BQUEsR0FBWSxJQUFJLGdCQUFKLENBQXFCLENBQUUsT0FBRixDQUFyQjtRQUNaLFFBQUEsR0FBWSxNQUFNLENBQUMsSUFBUCxDQUFZLE9BQU8sQ0FBQyxjQUFwQixFQURsQjs7UUFHTSxPQUFBLEdBQVksUUFBUSxDQUFDLElBQVQsQ0FBQSxDQUFlLENBQUM7UUFDNUIsSUFBQSxDQUFLLEVBQUEsQ0FBRyxPQUFILENBQUw7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFlBQTBCLENBQUMsSUFBM0IsQ0FBZ0MsT0FBaEM7UUFBSCxDQUFiLENBQUosRUFBK0QsSUFBL0QsRUFMTjs7UUFPTSxPQUFBLEdBQVksUUFBUSxDQUFDLElBQVQsQ0FBQSxDQUFlLENBQUM7UUFDNUIsSUFBQSxDQUFLLEVBQUEsQ0FBRyxPQUFILENBQUw7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFlBQTBCLENBQUMsSUFBM0IsQ0FBZ0MsT0FBaEM7UUFBSCxDQUFiLENBQUosRUFBK0QsSUFBL0QsRUFUTjs7UUFXTSxPQUFBLEdBQVksUUFBUSxDQUFDLElBQVQsQ0FBQSxDQUFlLENBQUM7UUFDNUIsSUFBQSxDQUFLLEVBQUEsQ0FBRyxPQUFILENBQUw7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFlBQTBCLENBQUMsSUFBM0IsQ0FBZ0MsT0FBaEM7UUFBSCxDQUFiLENBQUosRUFBK0QsSUFBL0QsRUFiTjs7UUFlTSxPQUFBLEdBQVksUUFBUSxDQUFDLElBQVQsQ0FBQSxDQUFlLENBQUM7UUFDNUIsSUFBQSxDQUFLLEVBQUEsQ0FBRyxPQUFILENBQUw7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFlBQTBCLENBQUMsSUFBM0IsQ0FBZ0MsT0FBaEM7UUFBSCxDQUFiLENBQUosRUFBK0QsSUFBL0QsRUFqQk47O1FBbUJNLE9BQUEsR0FBWSxRQUFRLENBQUMsSUFBVCxDQUFBLENBQWUsQ0FBQztRQUM1QixJQUFBLENBQUssRUFBQSxDQUFHLE9BQUgsQ0FBTDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7aUJBQUcsWUFBMEIsQ0FBQyxJQUEzQixDQUFnQyxPQUFoQztRQUFILENBQWIsQ0FBSixFQUErRCxJQUEvRCxFQXJCTjs7UUF1Qk0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxRQUFRLENBQUMsSUFBVCxDQUFBLENBQWUsQ0FBQztRQUFuQixDQUFiLENBQUosRUFBNEMsSUFBNUM7ZUFDQztNQXpCQSxDQUFBO01BMkJBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsT0FBQSxFQUFBLFFBQUEsRUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQTtRQUFNLE1BQUEsR0FBWSxJQUFJLGdCQUFKLENBQXFCLENBQUUsT0FBRixDQUFyQjtRQUNaLFFBQUEsR0FBWSxNQUFNLENBQUMsSUFBUCxDQUFZLE9BQU8sQ0FBQyxvQkFBcEIsRUFEbEI7O1FBR00sT0FBQSxHQUFZLFFBQVEsQ0FBQyxJQUFULENBQUEsQ0FBZSxDQUFDO1FBQzVCLElBQUEsQ0FBSyxFQUFBLENBQUcsT0FBSCxDQUFMO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxZQUEwQixDQUFDLElBQTNCLENBQWdDLE9BQWhDO1FBQUgsQ0FBYixDQUFKLEVBQStELElBQS9ELEVBTE47O1FBT00sT0FBQSxHQUFZLFFBQVEsQ0FBQyxJQUFULENBQUEsQ0FBZSxDQUFDO1FBQzVCLElBQUEsQ0FBSyxFQUFBLENBQUcsT0FBSCxDQUFMO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxZQUEwQixDQUFDLElBQTNCLENBQWdDLE9BQWhDO1FBQUgsQ0FBYixDQUFKLEVBQStELElBQS9ELEVBVE47O1FBV00sT0FBQSxHQUFZLFFBQVEsQ0FBQyxJQUFULENBQUEsQ0FBZSxDQUFDO1FBQzVCLElBQUEsQ0FBSyxFQUFBLENBQUcsT0FBSCxDQUFMO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxZQUEwQixDQUFDLElBQTNCLENBQWdDLE9BQWhDO1FBQUgsQ0FBYixDQUFKLEVBQStELElBQS9ELEVBYk47O1FBZU0sT0FBQSxHQUFZLFFBQVEsQ0FBQyxJQUFULENBQUEsQ0FBZSxDQUFDO1FBQzVCLElBQUEsQ0FBSyxFQUFBLENBQUcsT0FBSCxDQUFMO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxZQUEwQixDQUFDLElBQTNCLENBQWdDLE9BQWhDO1FBQUgsQ0FBYixDQUFKLEVBQStELElBQS9ELEVBakJOOztRQW1CTSxPQUFBLEdBQVksUUFBUSxDQUFDLElBQVQsQ0FBQSxDQUFlLENBQUM7UUFDNUIsSUFBQSxDQUFLLEVBQUEsQ0FBRyxPQUFILENBQUw7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFlBQTBCLENBQUMsSUFBM0IsQ0FBZ0MsT0FBaEM7UUFBSCxDQUFiLENBQUosRUFBK0QsSUFBL0QsRUFyQk47O1FBdUJNLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7aUJBQUcsUUFBUSxDQUFDLElBQVQsQ0FBQSxDQUFlLENBQUM7UUFBbkIsQ0FBYixDQUFKLEVBQTRDLElBQTVDO2VBQ0M7TUF6QkEsQ0FBQSxJQWhFUDs7Ozs7QUE4RkksYUFBTztJQS9GUztFQUFsQixFQTlFRjs7O0VBbUxBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQSxXQUFBOzs7TUFFRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxJQUF2QztRQUE2QyxhQUFBLEVBQWU7TUFBNUQ7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7YUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLENBQUUsS0FBRixDQUE5QjtJQU5zQyxDQUFBLElBQXhDOzs7RUFuTEE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1zcWxpdGUtc2VnbWVudGVyJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIHsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxuIyB7IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xueyBUZXN0LCAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuU1FMICAgICAgICAgICAgICAgICAgICAgICA9IFN0cmluZy5yYXdcbiMgRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4jIFBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZ2V0X3ZhcmlvdXNfc291cmNlcyA9IC0+XG4gIFIgPSB7fVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIFIubG9uZ19zb3VyY2VfbmwgPSBTUUxcIlwiXCJcbiAgICBjcmVhdGUgdGFibGUgXCJuYW1lc1wiICggLyogTnIgMSAqL1xuICAgICAgbmFtZSB0ZXh0IHVuaXF1ZSBub3QgbnVsbCxcbiAgICAgIFwibm8tY29tbWVudFtcIiAvKiBiY29tbWVudCEgKi8gdGV4dCBub3QgbnVsbCBkZWZhdWx0ICdubztjb21tZW50JywgLS0gbGNvbW1lbnQgYnJvdGhlclxuICAgICAgW3V1dWdoLi4uLl0gaW50ZWdlciApO1xuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgLS0gQWxhcywgYSB2YWxpZCBzdGF0ZW1lbnQgKGFsdGhvdWdoIHByb2JhYmx5IG5vdCBvbmUgdGhhdCBjYW4gYXBwZWFyIGluIHJlZ3VsYXIgZHVtcCBmaWxlKSAjIyNcbiAgICAvKiBOciAyICovIGRlbGV0ZSBmcm9tIGVuZCB3aGVyZSBlbmQgPSAneCcgcmV0dXJuaW5nIGVuZDtcbiAgICAtLSAtLS1YLS0tWC0tLVxuICAgIC8qIE5yIDMgKi8gYmVnaW4gaW1tZWRpYXRlIHRyYW5zYWN0aW9uO1xuICAgIC0tIC0tLVgtLS1YLS0tXG4gICAgQ1JFQVRFIFRSSUdHRVIganpyX21pcnJvcl90cmlwbGVzX3JlZ2lzdGVyICAvKiBOciA0ICovXG4gICAgYmVmb3JlIGluc2VydCBvbiBqenJfbWlycm9yX3RyaXBsZXNfYmFzZVxuICAgIGZvciBlYWNoIHJvdyBiZWdpblxuICAgICAgc2VsZWN0IHRyaWdnZXJfb25fYmVmb3JlX2luc2VydCggJ2p6cl9taXJyb3JfdHJpcGxlc19iYXNlJywgbmV3LnJvd2lkLCBuZXcucmVmLCBuZXcucywgbmV3LnYsIG5ldy5vICk7XG4gICAgICBlbmQgLypjb21tZW50ICovIC0tIG5ld2xpbmUhXG4gICAgICAvKiBOciA1ICovIDtcbiAgICBcIlwiXCJcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBSWyBcInNvdXJjZV8je2lkeCArIDF9XCIgXSAgPSBzb3VyY2UgZm9yIHNvdXJjZSwgaWR4IGluIFIubG9uZ19zb3VyY2Vfbmwuc3BsaXQgLy0tIC0tLVguKi9nbVxuICBnZXRfcGxhaW5fc291cmNlcyAgICAgICAgID0gLT4gKCBzb3VyY2UgZm9yIGtleSwgc291cmNlIG9mIFIgd2hlbiAvXnNvdXJjZV9cXGQrLy50ZXN0IGtleSApXG4gICMgZ2V0X3NvdXJjZXNfbm9fbGNvbW1lbnRzICA9IC0+ICggKCBzb3VyY2UucmVwbGFjZSAvKD88PVxccyktLS4qJC9nLCAnJyApIGZvciBzb3VyY2UgaW4gZ2V0X3BsYWluX3NvdXJjZXMoKSApXG4gIGdldF9zb3VyY2VzX25vX2xjb21tZW50cyAgPSAtPiAoICggc291cmNlLnJlcGxhY2UgLy0tLiokL2dtLCAnJyApIGZvciBzb3VyY2UgaW4gZ2V0X3BsYWluX3NvdXJjZXMoKSApXG4gICMgZGVidWcgJ86pdGNzX19fMScsICdcXG4nICsgc291cmNlIGZvciBzb3VyY2UgaW4gZ2V0X3BsYWluX3NvdXJjZXMoKVxuICAjIGRlYnVnICfOqXRjc19fXzInLCAnXFxuJyArIHNvdXJjZSBmb3Igc291cmNlIGluIGdldF9zb3VyY2VzX25vX2xjb21tZW50cygpXG4gICMgUi5sb25nX3NvdXJjZV9ubCAgICAgICAgICA9ICggZ2V0X3BsYWluX3NvdXJjZXMoKSApLmpvaW4gJ1xcbidcbiAgUi5sb25nX3NvdXJjZV9vbmVfbGluZSAgICA9ICggKCBnZXRfc291cmNlc19ub19sY29tbWVudHMoKSApLmpvaW4gJycgKS5yZXBsYWNlIC9cXG4vZywgJydcbiAgcmV0dXJuIFJcblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5nZXRfcmVhbGlzdGljX3NvdXJjZXMgPSAtPlxuICBSID0ge31cbiAgUi5yZWFsaXN0aWNfc291cmNlXzEgPSBTUUxcIlwiXCJcIlwiXCJcbiAgcmV0dXJuIFJcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0YXRlbWVudF93YWxrZXI6IC0+XG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgIHsgU3RhdGVtZW50X3dhbGtlcixcbiAgICAgIFN0YXRlbWVudF9hcHBsaWNhdG9yLFxuICAgICAgaW50ZXJuYWxzLCAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9jb2Fyc2Vfc3FsaXRlX3N0YXRlbWVudF9zZWdtZW50ZXIoKVxuICAgIHsgR3JhbW1hciwgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgIGpyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBKU09OLnN0cmluZ2lmeVxuICAgIHNvdXJjZXMgICAgICAgICAgICAgICAgICAgICAgICAgPSBnZXRfdmFyaW91c19zb3VyY2VzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHdhbGtlciAgICAgICAgPSBuZXcgU3RhdGVtZW50X3dhbGtlciB7IEdyYW1tYXIsIH1cbiAgICAgIEB0aHJvd3MgKCDOqXRjc19fXzMgPSAtPiB3YWxrZXIuc2NhbiB1bmRlZmluZWQgICAgICksIC9leHBlY3RlZCBhIHRleHQvXG4gICAgICBAdGhyb3dzICggzql0Y3NfX180ID0gLT4gd2Fsa2VyLnNjYW4gbnVsbCAgICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0L1xuICAgICAgQHRocm93cyAoIM6pdGNzX19fNSA9IC0+IHdhbGtlci5zY2FuIFN5bWJvbCAnPz8nICAgKSwgL2V4cGVjdGVkIGEgdGV4dC9cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgd2Fsa2VyICAgICAgICA9IG5ldyBTdGF0ZW1lbnRfd2Fsa2VyIHsgR3JhbW1hciwgfVxuICAgICAgQGVxICggzql0Y3NfX182ID0gLT4gdHlwZV9vZiB3YWxrZXIuc2NhbiAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgQGVxICggzql0Y3NfX183ID0gLT4gdHlwZV9vZiB3YWxrZXIuc2NhbiAneCcgKSwgJ2dlbmVyYXRvcidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyAnzql0Y3NfX184JywganIgc2VnbWVudCBmb3Igc2VnbWVudCBmcm9tIHdhbGtlci5zY2FuIHNvdXJjZXMuc291cmNlXzFcbiAgICAgICMgJ86pdGNzX19fOScsIGpyIHNlZ21lbnQgZm9yIHNlZ21lbnQgZnJvbSB3YWxrZXIuc2NhbiBzb3VyY2VzLmxvbmdfc291cmNlX25sXG4gICAgICAjICfOqXRjc19fMTAnLCBqciBzZWdtZW50IGZvciBzZWdtZW50IGZyb20gd2Fsa2VyLnNjYW4gc291cmNlcy5sb25nX3NvdXJjZV9vbmVfbGluZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHdhbGtlciAgICA9IG5ldyBTdGF0ZW1lbnRfd2Fsa2VyIHsgR3JhbW1hciwgfVxuICAgICAgc2VnbWVudHMgID0gd2Fsa2VyLnNjYW4gc291cmNlcy5zb3VyY2VfMVxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18xMSA9IC0+IC8vLyBcXGIgTnIgXFxzKyAxICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICBAZXEgKCDOqXRjc19fMTIgPSAtPiAvLy8gXFxiIE5yIFxccysgW14xXSsgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pdGNzX18xMyA9IC0+IHNlZ21lbnRzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgd2Fsa2VyICAgID0gbmV3IFN0YXRlbWVudF93YWxrZXIgeyBHcmFtbWFyLCB9XG4gICAgICBzZWdtZW50cyAgPSB3YWxrZXIuc2NhbiBzb3VyY2VzLmxvbmdfc291cmNlX25sXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMTQgPSAtPiAvLy8gXFxiIE5yIFxccysgMSAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzE1ID0gLT4gLy8vIFxcYiBOciBcXHMrIDIgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18xNiA9IC0+IC8vLyBcXGIgTnIgXFxzKyAzICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMTcgPSAtPiAvLy8gXFxiIE5yIFxccysgNCAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzE4ID0gLT4gLy8vIFxcYiBOciBcXHMrIDUgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzql0Y3NfXzE5ID0gLT4gc2VnbWVudHMubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB3YWxrZXIgICAgPSBuZXcgU3RhdGVtZW50X3dhbGtlciB7IEdyYW1tYXIsIH1cbiAgICAgIHNlZ21lbnRzICA9IHdhbGtlci5zY2FuIHNvdXJjZXMubG9uZ19zb3VyY2Vfb25lX2xpbmVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18yMCA9IC0+IC8vLyBcXGIgTnIgXFxzKyAxICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMjEgPSAtPiAvLy8gXFxiIE5yIFxccysgMiAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzIyID0gLT4gLy8vIFxcYiBOciBcXHMrIDMgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18yMyA9IC0+IC8vLyBcXGIgTnIgXFxzKyA0ICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMjQgPSAtPiAvLy8gXFxiIE5yIFxccysgNSAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqXRjc19fMjUgPSAtPiBzZWdtZW50cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBmb3IgdG9rZW4gZnJvbSB3YWxrZXIuc2Nhbl90b2tlbnMgc291cmNlcy5sb25nX3NvdXJjZV9vbmVfbGluZVxuICAgICMgICBpbmZvICfOqXRjc19fMjYnLCAoIHJwciB0b2tlbi5mcW5hbWUgKSwgKCBycHIgdG9rZW4gLmhpdCApIHVubGVzcyAoIHRva2VuLmZxbmFtZSBpcyAndG9wLndzJyApIG9yICggdG9rZW4uaXNfc3lzdGVtIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb19pbmZpbml0ZV9wcm94eSgpXG4gICMgZGVtb19jb2xvcmZ1bF9wcm94eSgpXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogdHJ1ZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBzdGF0ZW1lbnRfaW5oZXJpdGFuY2U6IHRlc3RzLnN0YXRlbWVudF9pbmhlcml0YW5jZSwgfVxuIl19
