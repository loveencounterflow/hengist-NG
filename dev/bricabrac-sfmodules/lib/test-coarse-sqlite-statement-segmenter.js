(async function() {
  'use strict';
  var GUY, SFMODULES, SQL, Test, alert, blue, bold, debug, echo, get_sources, gold, green, grey, help, info, inspect, log, plain, praise, red, reverse, rpr, tests, urge, warn, whisper, white;

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
  get_sources = function() {
    var R, get_plain_sources, get_sources_no_lcomments, i, idx, len, ref, source;
    R = {};
    //...................................................................................................
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
      //...................................................................................................
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

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    statement_walker: function() {
      var Grammar, Statement_applicator, Statement_walker, internals, jr, sources, type_of;
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({Statement_walker, Statement_applicator, internals} = SFMODULES.require_coarse_sqlite_statement_segmenter());
      ({Grammar} = require('../../../apps/interlex'));
      jr = JSON.stringify;
      sources = get_sources();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtY29hcnNlLXNxbGl0ZS1zdGF0ZW1lbnQtc2VnbWVudGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxXQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsNEJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEMsRUFiQTs7Ozs7RUE0QkEsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsMkJBQVIsQ0FBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsbUNBQVI7O0VBQzVCLEdBQUEsR0FBNEIsTUFBTSxDQUFDLElBOUJuQzs7OztFQWtD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QztRQUFuQixDQUFiLENBQUosRUFBNEMsSUFBNUM7ZUFDQztNQXpCQSxDQUFBLElBaEVQOzs7OztBQThGSSxhQUFPO0lBL0ZTO0VBQWxCLEVBdEVGOzs7RUEyS0EsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBLFdBQUE7OztNQUVFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLElBQXZDO1FBQTZDLGFBQUEsRUFBZTtNQUE1RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDthQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsQ0FBRSxLQUFGLENBQTlCO0lBTnNDLENBQUEsSUFBeEM7OztFQTNLQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLXNxbGl0ZS1zZWdtZW50ZXInXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgeyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyAjIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG4jIHsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG57IFRlc3QsICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5TUUwgICAgICAgICAgICAgICAgICAgICAgID0gU3RyaW5nLnJhd1xuIyBGUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiMgUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcblxuZ2V0X3NvdXJjZXMgPSAtPlxuICBSID0ge31cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBSLmxvbmdfc291cmNlX25sID0gU1FMXCJcIlwiXG4gICAgY3JlYXRlIHRhYmxlIFwibmFtZXNcIiAoIC8qIE5yIDEgKi9cbiAgICAgIG5hbWUgdGV4dCB1bmlxdWUgbm90IG51bGwsXG4gICAgICBcIm5vLWNvbW1lbnRbXCIgLyogYmNvbW1lbnQhICovIHRleHQgbm90IG51bGwgZGVmYXVsdCAnbm87Y29tbWVudCcsIC0tIGxjb21tZW50IGJyb3RoZXJcbiAgICAgIFt1dXVnaC4uLi5dIGludGVnZXIgKTtcbiAgICAtLSAtLS1YLS0tWC0tLVxuICAgIC0tIEFsYXMsIGEgdmFsaWQgc3RhdGVtZW50IChhbHRob3VnaCBwcm9iYWJseSBub3Qgb25lIHRoYXQgY2FuIGFwcGVhciBpbiByZWd1bGFyIGR1bXAgZmlsZSkgIyMjXG4gICAgLyogTnIgMiAqLyBkZWxldGUgZnJvbSBlbmQgd2hlcmUgZW5kID0gJ3gnIHJldHVybmluZyBlbmQ7XG4gICAgLS0gLS0tWC0tLVgtLS1cbiAgICAvKiBOciAzICovIGJlZ2luIGltbWVkaWF0ZSB0cmFuc2FjdGlvbjtcbiAgICAtLSAtLS1YLS0tWC0tLVxuICAgIENSRUFURSBUUklHR0VSIGp6cl9taXJyb3JfdHJpcGxlc19yZWdpc3RlciAgLyogTnIgNCAqL1xuICAgIGJlZm9yZSBpbnNlcnQgb24ganpyX21pcnJvcl90cmlwbGVzX2Jhc2VcbiAgICBmb3IgZWFjaCByb3cgYmVnaW5cbiAgICAgIHNlbGVjdCB0cmlnZ2VyX29uX2JlZm9yZV9pbnNlcnQoICdqenJfbWlycm9yX3RyaXBsZXNfYmFzZScsIG5ldy5yb3dpZCwgbmV3LnJlZiwgbmV3LnMsIG5ldy52LCBuZXcubyApO1xuICAgICAgZW5kIC8qY29tbWVudCAqLyAtLSBuZXdsaW5lIVxuICAgICAgLyogTnIgNSAqLyA7XG4gICAgXCJcIlwiXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgUlsgXCJzb3VyY2VfI3tpZHggKyAxfVwiIF0gID0gc291cmNlIGZvciBzb3VyY2UsIGlkeCBpbiBSLmxvbmdfc291cmNlX25sLnNwbGl0IC8tLSAtLS1YLiovZ21cbiAgZ2V0X3BsYWluX3NvdXJjZXMgICAgICAgICA9IC0+ICggc291cmNlIGZvciBrZXksIHNvdXJjZSBvZiBSIHdoZW4gL15zb3VyY2VfXFxkKy8udGVzdCBrZXkgKVxuICAjIGdldF9zb3VyY2VzX25vX2xjb21tZW50cyAgPSAtPiAoICggc291cmNlLnJlcGxhY2UgLyg/PD1cXHMpLS0uKiQvZywgJycgKSBmb3Igc291cmNlIGluIGdldF9wbGFpbl9zb3VyY2VzKCkgKVxuICBnZXRfc291cmNlc19ub19sY29tbWVudHMgID0gLT4gKCAoIHNvdXJjZS5yZXBsYWNlIC8tLS4qJC9nbSwgJycgKSBmb3Igc291cmNlIGluIGdldF9wbGFpbl9zb3VyY2VzKCkgKVxuICAjIGRlYnVnICfOqXRjc19fXzEnLCAnXFxuJyArIHNvdXJjZSBmb3Igc291cmNlIGluIGdldF9wbGFpbl9zb3VyY2VzKClcbiAgIyBkZWJ1ZyAnzql0Y3NfX18yJywgJ1xcbicgKyBzb3VyY2UgZm9yIHNvdXJjZSBpbiBnZXRfc291cmNlc19ub19sY29tbWVudHMoKVxuICAjIFIubG9uZ19zb3VyY2VfbmwgICAgICAgICAgPSAoIGdldF9wbGFpbl9zb3VyY2VzKCkgKS5qb2luICdcXG4nXG4gIFIubG9uZ19zb3VyY2Vfb25lX2xpbmUgICAgPSAoICggZ2V0X3NvdXJjZXNfbm9fbGNvbW1lbnRzKCkgKS5qb2luICcnICkucmVwbGFjZSAvXFxuL2csICcnXG4gIHJldHVybiBSXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdGVtZW50X3dhbGtlcjogLT5cbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgeyBTdGF0ZW1lbnRfd2Fsa2VyLFxuICAgICAgU3RhdGVtZW50X2FwcGxpY2F0b3IsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2NvYXJzZV9zcWxpdGVfc3RhdGVtZW50X3NlZ21lbnRlcigpXG4gICAgeyBHcmFtbWFyLCAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAganIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IEpTT04uc3RyaW5naWZ5XG4gICAgc291cmNlcyAgICAgICAgICAgICAgICAgICAgICAgICA9IGdldF9zb3VyY2VzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHdhbGtlciAgICAgICAgPSBuZXcgU3RhdGVtZW50X3dhbGtlciB7IEdyYW1tYXIsIH1cbiAgICAgIEB0aHJvd3MgKCDOqXRjc19fXzMgPSAtPiB3YWxrZXIuc2NhbiB1bmRlZmluZWQgICAgICksIC9leHBlY3RlZCBhIHRleHQvXG4gICAgICBAdGhyb3dzICggzql0Y3NfX180ID0gLT4gd2Fsa2VyLnNjYW4gbnVsbCAgICAgICAgICApLCAvZXhwZWN0ZWQgYSB0ZXh0L1xuICAgICAgQHRocm93cyAoIM6pdGNzX19fNSA9IC0+IHdhbGtlci5zY2FuIFN5bWJvbCAnPz8nICAgKSwgL2V4cGVjdGVkIGEgdGV4dC9cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgd2Fsa2VyICAgICAgICA9IG5ldyBTdGF0ZW1lbnRfd2Fsa2VyIHsgR3JhbW1hciwgfVxuICAgICAgQGVxICggzql0Y3NfX182ID0gLT4gdHlwZV9vZiB3YWxrZXIuc2NhbiAgICAgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgQGVxICggzql0Y3NfX183ID0gLT4gdHlwZV9vZiB3YWxrZXIuc2NhbiAneCcgKSwgJ2dlbmVyYXRvcidcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyAnzql0Y3NfX184JywganIgc2VnbWVudCBmb3Igc2VnbWVudCBmcm9tIHdhbGtlci5zY2FuIHNvdXJjZXMuc291cmNlXzFcbiAgICAgICMgJ86pdGNzX19fOScsIGpyIHNlZ21lbnQgZm9yIHNlZ21lbnQgZnJvbSB3YWxrZXIuc2NhbiBzb3VyY2VzLmxvbmdfc291cmNlX25sXG4gICAgICAjICfOqXRjc19fMTAnLCBqciBzZWdtZW50IGZvciBzZWdtZW50IGZyb20gd2Fsa2VyLnNjYW4gc291cmNlcy5sb25nX3NvdXJjZV9vbmVfbGluZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIHdhbGtlciAgICA9IG5ldyBTdGF0ZW1lbnRfd2Fsa2VyIHsgR3JhbW1hciwgfVxuICAgICAgc2VnbWVudHMgID0gd2Fsa2VyLnNjYW4gc291cmNlcy5zb3VyY2VfMVxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18xMSA9IC0+IC8vLyBcXGIgTnIgXFxzKyAxICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICBAZXEgKCDOqXRjc19fMTIgPSAtPiAvLy8gXFxiIE5yIFxccysgW14xXSsgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pdGNzX18xMyA9IC0+IHNlZ21lbnRzLm5leHQoKS5kb25lICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgd2Fsa2VyICAgID0gbmV3IFN0YXRlbWVudF93YWxrZXIgeyBHcmFtbWFyLCB9XG4gICAgICBzZWdtZW50cyAgPSB3YWxrZXIuc2NhbiBzb3VyY2VzLmxvbmdfc291cmNlX25sXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMTQgPSAtPiAvLy8gXFxiIE5yIFxccysgMSAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzE1ID0gLT4gLy8vIFxcYiBOciBcXHMrIDIgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18xNiA9IC0+IC8vLyBcXGIgTnIgXFxzKyAzICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMTcgPSAtPiAvLy8gXFxiIE5yIFxccysgNCAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzE4ID0gLT4gLy8vIFxcYiBOciBcXHMrIDUgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzql0Y3NfXzE5ID0gLT4gc2VnbWVudHMubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICB3YWxrZXIgICAgPSBuZXcgU3RhdGVtZW50X3dhbGtlciB7IEdyYW1tYXIsIH1cbiAgICAgIHNlZ21lbnRzICA9IHdhbGtlci5zY2FuIHNvdXJjZXMubG9uZ19zb3VyY2Vfb25lX2xpbmVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18yMCA9IC0+IC8vLyBcXGIgTnIgXFxzKyAxICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMjEgPSAtPiAvLy8gXFxiIE5yIFxccysgMiAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWdtZW50ICAgPSBzZWdtZW50cy5uZXh0KCkudmFsdWVcbiAgICAgIGVjaG8ganIgc2VnbWVudFxuICAgICAgQGVxICggzql0Y3NfXzIyID0gLT4gLy8vIFxcYiBOciBcXHMrIDMgICAgIFxcYiAvLy8udGVzdCBzZWdtZW50ICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VnbWVudCAgID0gc2VnbWVudHMubmV4dCgpLnZhbHVlXG4gICAgICBlY2hvIGpyIHNlZ21lbnRcbiAgICAgIEBlcSAoIM6pdGNzX18yMyA9IC0+IC8vLyBcXGIgTnIgXFxzKyA0ICAgICBcXGIgLy8vLnRlc3Qgc2VnbWVudCApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZ21lbnQgICA9IHNlZ21lbnRzLm5leHQoKS52YWx1ZVxuICAgICAgZWNobyBqciBzZWdtZW50XG4gICAgICBAZXEgKCDOqXRjc19fMjQgPSAtPiAvLy8gXFxiIE5yIFxccysgNSAgICAgXFxiIC8vLy50ZXN0IHNlZ21lbnQgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqXRjc19fMjUgPSAtPiBzZWdtZW50cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBmb3IgdG9rZW4gZnJvbSB3YWxrZXIuc2Nhbl90b2tlbnMgc291cmNlcy5sb25nX3NvdXJjZV9vbmVfbGluZVxuICAgICMgICBpbmZvICfOqXRjc19fMjYnLCAoIHJwciB0b2tlbi5mcW5hbWUgKSwgKCBycHIgdG9rZW4gLmhpdCApIHVubGVzcyAoIHRva2VuLmZxbmFtZSBpcyAndG9wLndzJyApIG9yICggdG9rZW4uaXNfc3lzdGVtIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb19pbmZpbml0ZV9wcm94eSgpXG4gICMgZGVtb19jb2xvcmZ1bF9wcm94eSgpXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogdHJ1ZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBzdGF0ZW1lbnRfaW5oZXJpdGFuY2U6IHRlc3RzLnN0YXRlbWVudF9pbmhlcml0YW5jZSwgfVxuIl19
