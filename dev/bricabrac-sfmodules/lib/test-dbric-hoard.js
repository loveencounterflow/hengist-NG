(async function() {
  'use strict';
  var Dbric, Dbric_std, FS, False, GTNG, GUY, IDN, LIT, PATH, SFMODULES, SQL, Test, True, VEC, alert, as_bool, blue, bold, cid_of, dbric_hoard_plugin, debug, echo, f, from_bool, gold, green, grey, help, info, insert_unicode_exclusions, inspect, log, nfa, plain, praise, red, reverse, rpr, tests, type_of, unquote_name, urge, warn, whisper, white,
    indexOf = [].indexOf;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-dbric-hoard'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  FS = require('node:fs');

  PATH = require('node:path');

  //===========================================================================================================
  ({Dbric, Dbric_std, IDN, LIT, SQL, VEC, from_bool, as_bool, True, False, unquote_name} = require('../../../apps/bricabrac-sfmodules/lib/dbric'));

  ({
    // { lets,                 } = internals
    dbric_plugin: dbric_hoard_plugin
  } = require('../../../apps/bricabrac-sfmodules/lib/intermission2'));

  ({type_of} = (require('../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics')).require_type_of());

  //===========================================================================================================
  cid_of = function(x) {
    return x.codePointAt(0);
  };

  //===========================================================================================================
  insert_unicode_exclusions = function(h) {
    h.statements._hrd_insert_run.run({
      lo: -2e308,
      hi: -1,
      key: '$x',
      value: "negative CIDs"
    });
    h.statements._hrd_insert_run.run({
      lo: 0x0000,
      hi: 0x0000,
      key: '$x',
      value: "zero bytes"
    });
    h.statements._hrd_insert_run.run({
      lo: 0xd800,
      hi: 0xdbff,
      key: '$x',
      value: "high surrogates"
    });
    h.statements._hrd_insert_run.run({
      lo: 0xdc00,
      hi: 0xdfff,
      key: '$x',
      value: "low surrogates"
    });
    h.statements._hrd_insert_run.run({
      lo: 0xfdd0,
      hi: 0xfdef,
      key: '$x',
      value: "noncharacters"
    });
    h.statements._hrd_insert_run.run({
      lo: 0xfffe,
      hi: 0xffff,
      key: '$x',
      value: "noncharacters"
    });
    h.statements._hrd_insert_run.run({
      lo: 0x110000,
      hi: +2e308,
      key: '$x',
      value: "excessive CIDs"
    });
    return null;
  };

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    dbric_hoard_plugin_basics: function() {
      var Hoard, h, Ωdbrh___1, Ωdbrh___2, Ωdbrh___3, Ωdbrh___4;
      Hoard = (function() {
        //.......................................................................................................
        class Hoard extends Dbric_std {};

        Hoard.plugins = [dbric_hoard_plugin];

        return Hoard;

      }).call(this);
      //.......................................................................................................
      h = Hoard.rebuild();
      this.eq((Ωdbrh___1 = function() {
        return indexOf.call(Object.keys(h.statements), 'std_get_tables') >= 0;
      }), true);
      this.eq((Ωdbrh___2 = function() {
        return indexOf.call(Object.keys(h.statements), 'hrd_find_runs') >= 0;
      }), true);
      this.eq((Ωdbrh___3 = function() {
        return indexOf.call(Object.keys(h.statements), '_hrd_insert_run') >= 0;
      }), true);
      this.eq((Ωdbrh___4 = function() {
        return indexOf.call(Object.keys(h.statements), 'hrd_find_covering_runs') >= 0;
      }), true);
      //.......................................................................................................
      insert_unicode_exclusions(h);
      h.statements._hrd_insert_run.run({
        lo: -0x000a,
        hi: 0x0000,
        key: 'foo',
        value: '"bar"'
      });
      h.statements._hrd_insert_run.run({
        lo: 0x0000,
        hi: 0x000a,
        key: 'foo',
        value: '"bar"'
      });
      (() => {        //.......................................................................................................
        var row, rows, Ωdbrh__10, Ωdbrh__11, Ωdbrh__12, Ωdbrh__13, Ωdbrh__14, Ωdbrh__15, Ωdbrh__16, Ωdbrh___7, Ωdbrh___8, Ωdbrh___9;
        for (row of rows = h.walk(h.statements.hrd_find_runs)) {
          echo(row);
        }
        rows = h.walk(h.statements.hrd_find_runs);
        this.eq((Ωdbrh___7 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=1',
          inorn: 1,
          lo: -2e308,
          hi: -1,
          key: '$x',
          value: 'negative CIDs'
        });
        this.eq((Ωdbrh___8 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=8',
          inorn: 8,
          lo: -10,
          hi: 0,
          key: 'foo',
          value: '"bar"'
        });
        this.eq((Ωdbrh___9 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=2',
          inorn: 2,
          lo: 0,
          hi: 0,
          key: '$x',
          value: 'zero bytes'
        });
        this.eq((Ωdbrh__10 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=9',
          inorn: 9,
          lo: 0,
          hi: 10,
          key: 'foo',
          value: '"bar"'
        });
        this.eq((Ωdbrh__11 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=3',
          inorn: 3,
          lo: 55296,
          hi: 56319,
          key: '$x',
          value: 'high surrogates'
        });
        this.eq((Ωdbrh__12 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=4',
          inorn: 4,
          lo: 56320,
          hi: 57343,
          key: '$x',
          value: 'low surrogates'
        });
        this.eq((Ωdbrh__13 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=5',
          inorn: 5,
          lo: 64976,
          hi: 65007,
          key: '$x',
          value: 'noncharacters'
        });
        this.eq((Ωdbrh__14 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=6',
          inorn: 6,
          lo: 65534,
          hi: 65535,
          key: '$x',
          value: 'noncharacters'
        });
        this.eq((Ωdbrh__15 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=7',
          inorn: 7,
          lo: 1114112,
          hi: 2e308,
          key: '$x',
          value: 'excessive CIDs'
        });
        this.eq((Ωdbrh__16 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    dbric_hoard_plugin_normalization_and_conflict_detection_2: function() {
      var Hoard, Hoard_v;
      Hoard = (function() {
        //.......................................................................................................
        class Hoard extends Dbric_std {};

        Hoard.plugins = [dbric_hoard_plugin];

        return Hoard;

      }).call(this);
      //.......................................................................................................
      Hoard_v = class Hoard_v extends Hoard {
        visualize({lo, hi}) {
          var chr, cid, color, colors, facet_from_row, facets_from_rows, first, gfph, global_facet, global_facets, global_width, i, id, last, left, local_keys, mid, points, ref, ref1, right, row, row_count, statement;
          facet_from_row = function(row) {
            return `${row.key}:${row.value_json}`;
          };
          facets_from_rows = function(rows) {
            var row;
            return new Set([
              ...(new Set((function() {
                var results;
                results = [];
                for (row of rows) {
                  results.push(facet_from_row(row));
                }
                return results;
              })()))
            ].sort());
          };
          global_facets = facets_from_rows(this.hrd_find_covering_runs(lo, hi));
          global_width = hi - lo;
          colors = {
            fallback: function(...P) {
              return GUY.trm.grey(...P);
            },
            warn: function(...P) {
              return GUY.trm.red(...P);
            },
            in: function(...P) {
              return GUY.trm.gold(...P);
            },
            out: function(...P) {
              return GUY.trm.blue(...P);
            },
            run: function(...P) {
              return GUY.trm.grey(...P);
            }
          };
          //...................................................................................................
          ({row_count} = this.get_first(SQL`select count(*) as row_count from hrd_runs;`));
          echo();
          echo(GUY.trm.white(GUY.trm.reverse(GUY.trm.bold(` hoard with ${row_count} runs `))));
//...................................................................................................
          for (global_facet of global_facets) {
            gfph = ' '.repeat(global_facet.length);
            //.................................................................................................
            statement = SQL`select * from hrd_runs
  where true
    and ( facet = $global_facet )
    and ( lo <= $hi )
    and ( hi >= $lo )
  -- order by hi - lo asc, lo desc, key, value
  order by inorn desc
  ;`;
            //.................................................................................................
            points = '';
            for (cid = i = ref = lo, ref1 = hi; (ref <= ref1 ? i <= ref1 : i >= ref1); cid = ref <= ref1 ? ++i : --i) {
              local_keys = facets_from_rows(this.hrd_find_covering_runs(cid));
              chr = String.fromCodePoint(cid);
              color = (local_keys.has(global_facet)) ? colors.in : colors.out;
              points += color(chr);
            }
            echo(f`${global_facet}:<15c; ${' '}:>6c; ${points}`);
//.................................................................................................
            for (row of this.walk(statement, {global_facet, lo, hi})) {
              id = row.rowid.replace(/^.*?=(\d+)/, '[$1]');
              first = (Math.max(row.lo, lo)) - lo;
              last = (Math.min(row.hi, hi)) - lo;
              left = GUY.trm.grey(GUY.trm.reverse('🮊'.repeat(first)));
              // left        = GUY.trm.grey '│'.repeat first
              mid = GUY.trm.gold('🮊'.repeat(last - first + 1));
              // mid         = GUY.trm.gold '♦'.repeat last - first + 1
              // mid         = GUY.trm.gold '█'.repeat last - first + 1
              right = GUY.trm.grey(GUY.trm.reverse('🮊'.repeat(global_width - last + 1)));
              echo(colors.run(f`${gfph}:<15c; ${id}:>6c; ${left}${mid}${right}`));
            }
          }
          //...................................................................................................
          return null;
        }

      };
      (() => {        //.......................................................................................................
        var bound, chr, colors_by_facets, description, h, key, point, y, z;
        h = Hoard_v.rebuild();
        key = 'vowel';
        colors_by_facets = {
          'vowel:true': GUY.trm.gold,
          'vowel:false': GUY.trm.blue
        };
        //.....................................................................................................
        h.hrd_add_run(cid_of('A'), cid_of('Z'), key, false);
        h.hrd_add_run(cid_of('a'), cid_of('z'), key, false);
        // h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
        // h.hrd_add_run ( cid_of 'A' ), null, key, true
        // h.hrd_add_run ( cid_of 'A' ), null, key, true
        // h.hrd_add_run ( cid_of 'E' ), null, key, true
        // h.hrd_add_run ( cid_of 'I' ), null, key, true
        // h.hrd_add_run ( cid_of 'O' ), null, key, true
        // h.hrd_add_run ( cid_of 'U' ), null, key, true
        h.hrd_add_run(cid_of('N'), cid_of('Z'), 'upper', true);
        h.hrd_add_run(cid_of('A'), cid_of('D'), 'vgroup', 'A');
        h.hrd_add_run(cid_of('I'), cid_of('N'), 'vgroup', 'I');
        // h.tbl_echo_as_text SQL"select * from hrd_runs order by lo;"
        // h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
        // h.hrd_add_run ( cid_of 'U' ), null, key, true
        // h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
        // h.hrd_add_run ( cid_of 'a' ), null, key, true
        // h.hrd_add_run ( cid_of 'd' ), null, key, false
        // h.hrd_add_run ( cid_of 'u' ), null, key, true
        // h.hrd_add_run ( cid_of 'c' ), ( cid_of 'x' ), key, true
        // h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
        // h.hrd_add_run ( cid_of 'b' ), null, key, false
        // h.hrd_add_run ( cid_of 'c' ), null, key, false
        // h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
        // # for point in [ ( cid_of 'A' ) .. ( cid_of 'z' ) ]
        // h.hrd_add_run ( cid_of 'A' ), ( cid_of 'Z' ), 'even', true
        // h.hrd_add_run ( cid_of 'A' ), null, 'even', false
        // h.hrd_add_run ( cid_of 'C' ), null, 'even', false
        // h.hrd_add_run ( cid_of 'E' ), null, 'even', false
        // h.hrd_add_run ( cid_of 'G' ), null, 'even', false
        //.....................................................................................................
        h.visualize({
          lo: cid_of('A'),
          hi: cid_of('z')
        });
        h.tbl_echo_as_text(SQL`select * from hrd_global_bounds;`);
        // h.tbl_echo_as_text SQL"select * from hrd_breakpoints;"
        h.tbl_echo_as_text(SQL`select * from hrd_inspection_points;`);
        for (y of h.walk(SQL`select * from hrd_breakpoints;`)) {
          ({bound, point} = y);
          chr = String.fromCodePoint(point);
          description = h.hrd_describe_point(point);
          debug('Ωdbrh_131', chr, bound, description);
        }
        for (z of h.walk(SQL`select * from hrd_inspection_points;`)) {
          ({point} = z);
          chr = String.fromCodePoint(point);
          description = h.hrd_describe_point(point);
          urge('Ωdbrh_131', chr, description);
        }
        // h.tbl_echo_as_text SQL"select * from hrd_breakpoint_facets_1;"
        // h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
        return null;
      })();
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var Coverage_analyzer, ca, do_coverage, guytest_cfg, i, len, name, ref;
      do_coverage = true;
      do_coverage = false;
      if (do_coverage) {
        ({Coverage_analyzer} = require('../../../apps/bricabrac-sfmodules/lib/coverage-analyzer'));
        ca = new Coverage_analyzer();
      }
      // ca.wrap_class Dbric_std
      //---------------------------------------------------------------------------------------------------------
      guytest_cfg = {
        throw_on_error: false,
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
      // ( new Test guytest_cfg ).test { dbric_hoard_plugin_normalization_and_conflict_detection_2: tests.dbric_hoard_plugin_normalization_and_conflict_detection_2, }
      // ( new Test guytest_cfg ).test { dbric_dynamic_build_properties: tests.dbric_dynamic_build_properties, }
      //---------------------------------------------------------------------------------------------------------
      if (do_coverage) {
        if (ca.unused_names.length > 0) {
          ref = ca.unused_names;
          for (i = 0, len = ref.length; i < len; i++) {
            name = ref[i];
            warn('Ωdbrh_131', "not covered:", reverse(name));
          }
        }
      }
      // help 'Ωdbrh_132', ca.used_names
      // urge 'Ωdbrh_133', count, names for count, names of ca.names_by_counts
      //=========================================================================================================
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMtaG9hcmQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxrQkFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLHlCQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO0lBQUEsb0JBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsdUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdF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QXRFRjs7O0VBOE5BLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQSxpQkFBQSxFQUFBLEVBQUEsRUFBQSxXQUFBLEVBQUEsV0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBO01BQUUsV0FBQSxHQUFjO01BQ2QsV0FBQSxHQUFjO01BQ2QsSUFBRyxXQUFIO1FBQ0UsQ0FBQSxDQUFFLGlCQUFGLENBQUEsR0FBa0MsT0FBQSxDQUFRLHlEQUFSLENBQWxDO1FBQ0EsRUFBQSxHQUFLLElBQUksaUJBQUosQ0FBQSxFQUZQO09BRkY7OztNQU9FLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLElBQXZDO1FBQTZDLGFBQUEsRUFBZTtNQUE1RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsQ0FBRSxLQUFGLENBQTlCLEVBVkY7Ozs7TUFjRSxJQUFHLFdBQUg7UUFDRSxJQUE4RSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQWhCLEdBQXlCLENBQXZHO0FBQUE7VUFBQSxLQUFBLHFDQUFBOztZQUFBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLGNBQWxCLEVBQWtDLE9BQUEsQ0FBUSxJQUFSLENBQWxDO1VBQUEsQ0FBQTtTQURGO09BZEY7Ozs7YUFtQkc7SUFwQnFDLENBQUEsSUFBeEM7O0FBOU5BIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtZGJyaWMtaG9hcmQnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG57IERicmljLFxuICBEYnJpY19zdGQsXG4gIElETixcbiAgTElULFxuICBTUUwsXG4gIFZFQyxcbiAgZnJvbV9ib29sLFxuICBhc19ib29sLFxuICBUcnVlLFxuICBGYWxzZSxcbiAgdW5xdW90ZV9uYW1lLCAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2RicmljJ1xuIyB7IGxldHMsICAgICAgICAgICAgICAgICB9ID0gaW50ZXJuYWxzXG57IGRicmljX3BsdWdpbjogXFxcbiAgICBkYnJpY19ob2FyZF9wbHVnaW4sIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2ludGVybWlzc2lvbjInXG57IHR5cGVfb2YsICAgICAgICAgICAgICB9ID0gKCByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL3Vuc3RhYmxlLXJwci10eXBlX29mLWJyaWNzJyApLnJlcXVpcmVfdHlwZV9vZigpXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY2lkX29mID0gKCB4ICkgLT4geC5jb2RlUG9pbnRBdCAwXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmluc2VydF91bmljb2RlX2V4Y2x1c2lvbnMgPSAoIGggKSAtPlxuICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAtSW5maW5pdHksIGhpOiAgICAgICAgLTEsIGtleTogJyR4JywgdmFsdWU6IFwibmVnYXRpdmUgQ0lEc1wiLCAgIH1cbiAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHgwMDAwLCBoaTogICAgMHgwMDAwLCBrZXk6ICckeCcsIHZhbHVlOiBcInplcm8gYnl0ZXNcIiwgICAgICB9XG4gIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4ZDgwMCwgaGk6ICAgIDB4ZGJmZiwga2V5OiAnJHgnLCB2YWx1ZTogXCJoaWdoIHN1cnJvZ2F0ZXNcIiwgfVxuICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGRjMDAsIGhpOiAgICAweGRmZmYsIGtleTogJyR4JywgdmFsdWU6IFwibG93IHN1cnJvZ2F0ZXNcIiwgIH1cbiAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHhmZGQwLCBoaTogICAgMHhmZGVmLCBrZXk6ICckeCcsIHZhbHVlOiBcIm5vbmNoYXJhY3RlcnNcIiwgICB9XG4gIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4ZmZmZSwgaGk6ICAgIDB4ZmZmZiwga2V5OiAnJHgnLCB2YWx1ZTogXCJub25jaGFyYWN0ZXJzXCIsICAgfVxuICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgMHgxMTAwMDAsIGhpOiArSW5maW5pdHksIGtleTogJyR4JywgdmFsdWU6IFwiZXhjZXNzaXZlIENJRHNcIiwgIH1cbiAgO251bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19ob2FyZF9wbHVnaW5fYmFzaWNzOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmQgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIEBwbHVnaW5zOiBbXG4gICAgICAgIGRicmljX2hvYXJkX3BsdWdpblxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBoID0gSG9hcmQucmVidWlsZCgpXG4gICAgQGVxICggzqlkYnJoX19fMSA9IC0+ICdzdGRfZ2V0X3RhYmxlcycgICAgICAgICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzIgPSAtPiAnaHJkX2ZpbmRfcnVucycgICAgICAgICAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX18zID0gLT4gJ19ocmRfaW5zZXJ0X3J1bicgICAgICAgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX19fNCA9IC0+ICdocmRfZmluZF9jb3ZlcmluZ19ydW5zJyBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaW5zZXJ0X3VuaWNvZGVfZXhjbHVzaW9ucyBoXG4gICAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAtMHgwMDBhLCBoaTogICAgMHgwMDAwLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInLCAgICAgIH1cbiAgICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweDAwMDAsIGhpOiAgICAweDAwMGEsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicsICAgICAgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGVjaG8gcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIGguc3RhdGVtZW50cy5ocmRfZmluZF9ydW5zXG4gICAgICByb3dzID0gaC53YWxrIGguc3RhdGVtZW50cy5ocmRfZmluZF9ydW5zXG4gICAgICBAZXEgKCDOqWRicmhfX183ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MScsIGlub3JuOiAxLCBsbzogLUluZmluaXR5LCBoaTogLTEsIGtleTogJyR4JywgdmFsdWU6ICduZWdhdGl2ZSBDSURzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfX184ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9OCcsIGlub3JuOiA4LCBsbzogLTEwLCBoaTogMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJyB9XG4gICAgICBAZXEgKCDOqWRicmhfX185ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MicsIGlub3JuOiAyLCBsbzogMCwgaGk6IDAsIGtleTogJyR4JywgdmFsdWU6ICd6ZXJvIGJ5dGVzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzEwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9OScsIGlub3JuOiA5LCBsbzogMCwgaGk6IDEwLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0zJywgaW5vcm46IDMsIGxvOiA1NTI5NiwgaGk6IDU2MzE5LCBrZXk6ICckeCcsIHZhbHVlOiAnaGlnaCBzdXJyb2dhdGVzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzEyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NCcsIGlub3JuOiA0LCBsbzogNTYzMjAsIGhpOiA1NzM0Mywga2V5OiAnJHgnLCB2YWx1ZTogJ2xvdyBzdXJyb2dhdGVzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzEzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NScsIGlub3JuOiA1LCBsbzogNjQ5NzYsIGhpOiA2NTAwNywga2V5OiAnJHgnLCB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj02JywgaW5vcm46IDYsIGxvOiA2NTUzNCwgaGk6IDY1NTM1LCBrZXk6ICckeCcsIHZhbHVlOiAnbm9uY2hhcmFjdGVycycgfVxuICAgICAgQGVxICggzqlkYnJoX18xNSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTcnLCBpbm9ybjogNywgbG86IDExMTQxMTIsIGhpOiBJbmZpbml0eSwga2V5OiAnJHgnLCB2YWx1ZTogJ2V4Y2Vzc2l2ZSBDSURzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzE2ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb25fYW5kX2NvbmZsaWN0X2RldGVjdGlvbl8yOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmQgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIEBwbHVnaW5zOiBbXG4gICAgICAgIGRicmljX2hvYXJkX3BsdWdpblxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBIb2FyZF92IGV4dGVuZHMgSG9hcmRcbiAgICAgIHZpc3VhbGl6ZTogKHsgbG8sIGhpLCB9KSAtPlxuICAgICAgICBmYWNldF9mcm9tX3JvdyAgICA9ICggcm93ICkgLT4gXCIje3Jvdy5rZXl9OiN7cm93LnZhbHVlX2pzb259XCJcbiAgICAgICAgZmFjZXRzX2Zyb21fcm93cyAgPSAoIHJvd3MgKSAtPiBuZXcgU2V0IFsgKCBuZXcgU2V0ICggKCBmYWNldF9mcm9tX3JvdyByb3cgKSBmb3Igcm93IGZyb20gcm93cyApICkuLi4sIF0uc29ydCgpXG4gICAgICAgIGdsb2JhbF9mYWNldHMgICAgID0gZmFjZXRzX2Zyb21fcm93cyBAaHJkX2ZpbmRfY292ZXJpbmdfcnVucyBsbywgaGlcbiAgICAgICAgZ2xvYmFsX3dpZHRoICAgICAgPSBoaSAtIGxvXG4gICAgICAgIGNvbG9ycyAgICAgICAgICAgID1cbiAgICAgICAgICBmYWxsYmFjazogICAoIFAuLi4gKSAtPiBHVVkudHJtLmdyZXkgIFAuLi5cbiAgICAgICAgICB3YXJuOiAgICAgICAoIFAuLi4gKSAtPiBHVVkudHJtLnJlZCAgIFAuLi5cbiAgICAgICAgICBpbjogICAgICAgICAoIFAuLi4gKSAtPiBHVVkudHJtLmdvbGQgIFAuLi5cbiAgICAgICAgICBvdXQ6ICAgICAgICAoIFAuLi4gKSAtPiBHVVkudHJtLmJsdWUgIFAuLi5cbiAgICAgICAgICBydW46ICAgICAgICAoIFAuLi4gKSAtPiBHVVkudHJtLmdyZXkgIFAuLi5cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHJvd19jb3VudCwgfSA9IEBnZXRfZmlyc3QgU1FMXCJzZWxlY3QgY291bnQoKikgYXMgcm93X2NvdW50IGZyb20gaHJkX3J1bnM7XCJcbiAgICAgICAgZWNobygpXG4gICAgICAgIGVjaG8gR1VZLnRybS53aGl0ZSBHVVkudHJtLnJldmVyc2UgR1VZLnRybS5ib2xkIFwiIGhvYXJkIHdpdGggI3tyb3dfY291bnR9IHJ1bnMgXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBmb3IgZ2xvYmFsX2ZhY2V0IGZyb20gZ2xvYmFsX2ZhY2V0c1xuICAgICAgICAgIGdmcGggICAgICA9ICcgJy5yZXBlYXQgZ2xvYmFsX2ZhY2V0Lmxlbmd0aFxuICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgc3RhdGVtZW50ID0gU1FMXCJcIlwiXG4gICAgICAgICAgICBzZWxlY3QgKiBmcm9tIGhyZF9ydW5zXG4gICAgICAgICAgICAgIHdoZXJlIHRydWVcbiAgICAgICAgICAgICAgICBhbmQgKCBmYWNldCA9ICRnbG9iYWxfZmFjZXQgKVxuICAgICAgICAgICAgICAgIGFuZCAoIGxvIDw9ICRoaSApXG4gICAgICAgICAgICAgICAgYW5kICggaGkgPj0gJGxvIClcbiAgICAgICAgICAgICAgLS0gb3JkZXIgYnkgaGkgLSBsbyBhc2MsIGxvIGRlc2MsIGtleSwgdmFsdWVcbiAgICAgICAgICAgICAgb3JkZXIgYnkgaW5vcm4gZGVzY1xuICAgICAgICAgICAgICA7XCJcIlwiXG4gICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICBwb2ludHMgPSAnJ1xuICAgICAgICAgIGZvciBjaWQgaW4gWyBsbyAuLiBoaSBdXG4gICAgICAgICAgICBsb2NhbF9rZXlzICA9IGZhY2V0c19mcm9tX3Jvd3MgQGhyZF9maW5kX2NvdmVyaW5nX3J1bnMgY2lkXG4gICAgICAgICAgICBjaHIgICAgICAgICA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZFxuICAgICAgICAgICAgY29sb3IgICAgICAgPSBpZiAoIGxvY2FsX2tleXMuaGFzIGdsb2JhbF9mYWNldCApIHRoZW4gY29sb3JzLmluIGVsc2UgY29sb3JzLm91dFxuICAgICAgICAgICAgcG9pbnRzICAgICArPSBjb2xvciBjaHJcbiAgICAgICAgICBlY2hvIGZcIiN7Z2xvYmFsX2ZhY2V0fTo8MTVjOyAjeycgJ306PjZjOyAje3BvaW50c31cIlxuICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgZm9yIHJvdyBmcm9tIEB3YWxrIHN0YXRlbWVudCwgeyBnbG9iYWxfZmFjZXQsIGxvLCBoaSwgfVxuICAgICAgICAgICAgaWQgICAgICAgICAgPSByb3cucm93aWQucmVwbGFjZSAvXi4qPz0oXFxkKykvLCAnWyQxXSdcbiAgICAgICAgICAgIGZpcnN0ICAgICAgID0gKCBNYXRoLm1heCByb3cubG8sIGxvICkgLSBsb1xuICAgICAgICAgICAgbGFzdCAgICAgICAgPSAoIE1hdGgubWluIHJvdy5oaSwgaGkgKSAtIGxvXG4gICAgICAgICAgICBsZWZ0ICAgICAgICA9IEdVWS50cm0uZ3JleSBHVVkudHJtLnJldmVyc2UgJ/CfroonLnJlcGVhdCBmaXJzdFxuICAgICAgICAgICAgIyBsZWZ0ICAgICAgICA9IEdVWS50cm0uZ3JleSAn4pSCJy5yZXBlYXQgZmlyc3RcbiAgICAgICAgICAgIG1pZCAgICAgICAgID0gR1VZLnRybS5nb2xkICfwn66KJy5yZXBlYXQgbGFzdCAtIGZpcnN0ICsgMVxuICAgICAgICAgICAgIyBtaWQgICAgICAgICA9IEdVWS50cm0uZ29sZCAn4pmmJy5yZXBlYXQgbGFzdCAtIGZpcnN0ICsgMVxuICAgICAgICAgICAgIyBtaWQgICAgICAgICA9IEdVWS50cm0uZ29sZCAn4paIJy5yZXBlYXQgbGFzdCAtIGZpcnN0ICsgMVxuICAgICAgICAgICAgcmlnaHQgICAgICAgPSBHVVkudHJtLmdyZXkgR1VZLnRybS5yZXZlcnNlICfwn66KJy5yZXBlYXQgKCBnbG9iYWxfd2lkdGggLSBsYXN0ICsgMSApXG4gICAgICAgICAgICBlY2hvIGNvbG9ycy5ydW4gZlwiI3tnZnBofTo8MTVjOyAje2lkfTo+NmM7ICN7bGVmdH0je21pZH0je3JpZ2h0fVwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoICAgICAgICAgICAgICAgICA9IEhvYXJkX3YucmVidWlsZCgpXG4gICAgICBrZXkgICAgICAgICAgICAgICA9ICd2b3dlbCdcbiAgICAgIGNvbG9yc19ieV9mYWNldHMgID1cbiAgICAgICAgJ3Zvd2VsOnRydWUnOiAgICAgR1VZLnRybS5nb2xkXG4gICAgICAgICd2b3dlbDpmYWxzZSc6ICAgIEdVWS50cm0uYmx1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCAoIGNpZF9vZiAnWicgKSwga2V5LCBmYWxzZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnYScgKSwgKCBjaWRfb2YgJ3onICksIGtleSwgZmFsc2VcbiAgICAgICMgaC52aXN1YWxpemUgeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAneicgKSwgfVxuICAgICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0UnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdJJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnTycgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ1UnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnTicgKSwgKCBjaWRfb2YgJ1onICksICd1cHBlcicsIHRydWVcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksICggY2lkX29mICdEJyApLCAndmdyb3VwJywgJ0EnXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdJJyApLCAoIGNpZF9vZiAnTicgKSwgJ3Zncm91cCcsICdJJ1xuICAgICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ydW5zIG9yZGVyIGJ5IGxvO1wiXG4gICAgICAjIGgudmlzdWFsaXplIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ3onICksIH1cbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnVScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICAjIGgudmlzdWFsaXplIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ3onICksIH1cbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnYScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ2QnICksIG51bGwsIGtleSwgZmFsc2VcbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAndScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ2MnICksICggY2lkX29mICd4JyApLCBrZXksIHRydWVcbiAgICAgICMgaC52aXN1YWxpemUgeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAneicgKSwgfVxuICAgICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdiJyApLCBudWxsLCBrZXksIGZhbHNlXG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ2MnICksIG51bGwsIGtleSwgZmFsc2VcbiAgICAgICMgaC52aXN1YWxpemUgeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAneicgKSwgfVxuICAgICAgIyAjIGZvciBwb2ludCBpbiBbICggY2lkX29mICdBJyApIC4uICggY2lkX29mICd6JyApIF1cbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgKCBjaWRfb2YgJ1onICksICdldmVuJywgdHJ1ZVxuICAgICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCBudWxsLCAnZXZlbicsIGZhbHNlXG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0MnICksIG51bGwsICdldmVuJywgZmFsc2VcbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnRScgKSwgbnVsbCwgJ2V2ZW4nLCBmYWxzZVxuICAgICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdHJyApLCBudWxsLCAnZXZlbicsIGZhbHNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGgudmlzdWFsaXplIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ3onICksIH1cbiAgICAgIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2dsb2JhbF9ib3VuZHM7XCJcbiAgICAgICMgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfYnJlYWtwb2ludHM7XCJcbiAgICAgIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2luc3BlY3Rpb25fcG9pbnRzO1wiXG4gICAgICBmb3IgeyBib3VuZCwgcG9pbnQsIH0gZnJvbSBoLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9icmVha3BvaW50cztcIlxuICAgICAgICBjaHIgICAgICAgICA9IFN0cmluZy5mcm9tQ29kZVBvaW50IHBvaW50XG4gICAgICAgIGRlc2NyaXB0aW9uID0gaC5ocmRfZGVzY3JpYmVfcG9pbnQgcG9pbnRcbiAgICAgICAgZGVidWcgJ86pZGJyaF8xMzEnLCBjaHIsIGJvdW5kLCBkZXNjcmlwdGlvblxuICAgICAgZm9yIHsgcG9pbnQsIH0gZnJvbSBoLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9pbnNwZWN0aW9uX3BvaW50cztcIlxuICAgICAgICBjaHIgICAgICAgICA9IFN0cmluZy5mcm9tQ29kZVBvaW50IHBvaW50XG4gICAgICAgIGRlc2NyaXB0aW9uID0gaC5ocmRfZGVzY3JpYmVfcG9pbnQgcG9pbnRcbiAgICAgICAgdXJnZSAnzqlkYnJoXzEzMScsIGNociwgZGVzY3JpcHRpb25cbiAgICAgICMgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfYnJlYWtwb2ludF9mYWNldHNfMTtcIlxuICAgICAgIyBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBkb19jb3ZlcmFnZSA9IHRydWVcbiAgZG9fY292ZXJhZ2UgPSBmYWxzZVxuICBpZiBkb19jb3ZlcmFnZVxuICAgIHsgQ292ZXJhZ2VfYW5hbHl6ZXIsICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2NvdmVyYWdlLWFuYWx5emVyJ1xuICAgIGNhID0gbmV3IENvdmVyYWdlX2FuYWx5emVyKClcbiAgICAjIGNhLndyYXBfY2xhc3MgRGJyaWNfc3RkXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2hvYXJkX3BsdWdpbl9ub3JtYWxpemF0aW9uX2FuZF9jb25mbGljdF9kZXRlY3Rpb25fMjogdGVzdHMuZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb25fYW5kX2NvbmZsaWN0X2RldGVjdGlvbl8yLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkYnJpY19keW5hbWljX2J1aWxkX3Byb3BlcnRpZXM6IHRlc3RzLmRicmljX2R5bmFtaWNfYnVpbGRfcHJvcGVydGllcywgfVxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIGRvX2NvdmVyYWdlXG4gICAgd2FybiAnzqlkYnJoXzEzMScsIFwibm90IGNvdmVyZWQ6XCIsIHJldmVyc2UgbmFtZSBmb3IgbmFtZSBpbiBjYS51bnVzZWRfbmFtZXMgaWYgY2EudW51c2VkX25hbWVzLmxlbmd0aCA+IDBcbiAgICAjIGhlbHAgJ86pZGJyaF8xMzInLCBjYS51c2VkX25hbWVzXG4gICAgIyB1cmdlICfOqWRicmhfMTMzJywgY291bnQsIG5hbWVzIGZvciBjb3VudCwgbmFtZXMgb2YgY2EubmFtZXNfYnlfY291bnRzXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgO251bGxcblxuXG4iXX0=
