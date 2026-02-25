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
        var row, rows, Ωdbrh__10, Ωdbrh__11, Ωdbrh__12, Ωdbrh__13, Ωdbrh__14, Ωdbrh___5, Ωdbrh___6, Ωdbrh___7, Ωdbrh___8, Ωdbrh___9;
        for (row of rows = h.walk(h.statements.hrd_find_runs)) {
          echo(row);
        }
        rows = h.walk(h.statements.hrd_find_runs);
        this.eq((Ωdbrh___5 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=1',
          inorn: 1,
          lo: -2e308,
          hi: -1,
          key: '$x',
          value: 'negative CIDs'
        });
        this.eq((Ωdbrh___6 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=8',
          inorn: 8,
          lo: -10,
          hi: 0,
          key: 'foo',
          value: '"bar"'
        });
        this.eq((Ωdbrh___7 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=2',
          inorn: 2,
          lo: 0,
          hi: 0,
          key: '$x',
          value: 'zero bytes'
        });
        this.eq((Ωdbrh___8 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=9',
          inorn: 9,
          lo: 0,
          hi: 10,
          key: 'foo',
          value: '"bar"'
        });
        this.eq((Ωdbrh___9 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=3',
          inorn: 3,
          lo: 55296,
          hi: 56319,
          key: '$x',
          value: 'high surrogates'
        });
        this.eq((Ωdbrh__10 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=4',
          inorn: 4,
          lo: 56320,
          hi: 57343,
          key: '$x',
          value: 'low surrogates'
        });
        this.eq((Ωdbrh__11 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=5',
          inorn: 5,
          lo: 64976,
          hi: 65007,
          key: '$x',
          value: 'noncharacters'
        });
        this.eq((Ωdbrh__12 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=6',
          inorn: 6,
          lo: 65534,
          hi: 65535,
          key: '$x',
          value: 'noncharacters'
        });
        this.eq((Ωdbrh__13 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:R=7',
          inorn: 7,
          lo: 1114112,
          hi: 2e308,
          key: '$x',
          value: 'excessive CIDs'
        });
        this.eq((Ωdbrh__14 = function() {
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
        var chr, colors_by_facets, current, facet, facets, facets_by_point, h, has_facet, i, key, keyvalue_by_facet, len, max, min, point, point_facets, ref, state/* TAINT use _get_facets */, value, y;
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
        h.hrd_add_run(cid_of('I'), null, 'vowel', true);
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
        //.....................................................................................................
        ({min, max} = h.hrd_get_min_max());
        keyvalue_by_facet = h._hrd_get_keyvalue_by_facet();
        facets_by_point = h._hrd_map_facets_of_inspection_points();
        facets = Object.keys(h._hrd_get_families());
        state = Object.fromEntries((function() {
          var i, len, results;
          results = [];
          for (i = 0, len = facets.length; i < len; i++) {
            facet = facets[i];
            results.push([facet, false]);
          }
          return results;
        })());
// debug 'Ωdbrh__16', facets
// debug 'Ωdbrh__16', state
// debug 'Ωdbrh__16', keyvalue_by_facet
        for (i = 0, len = facets.length; i < len; i++) {
          facet = facets[i];
          ({key, value} = keyvalue_by_facet[facet]);
          debug();
          debug('Ωdbrh__16', reverse(facet));
          for (y of facets_by_point) {
            [point, point_facets] = y;
            chr = String.fromCodePoint(point);
            has_facet = point_facets.has(facet);
            current = (ref = state[facet]) != null ? ref : false;
            whisper('Ωdbrh__16', (has_facet ? white : grey)(rpr(chr), facet));
          }
        }
        // if has_facet isnt current
        //   state[ facet ] = has_facet
        //   if current
        //     warn 'Ωdbrh__17', ( rpr chr ), facet, ')'
        //   else
        //     help 'Ωdbrh__16', ( rpr chr ), '(', facet # unless point is min
        // else
        //   null
        // whisper 'Ωdbrh__16', ( rpr chr ), '=', facet, current, '='
        // debug 'Ωdbrh__18', chr, facet, has_facet
        //   debug 'Ωdbrh__19', facet
        //   for { point, } from h.walk SQL"select * from hrd_inspection_points;"
        // facets      = h._hrd_facets_from_point point
        // urge 'Ωdbrh__20', chr, ( rpr facet ), facets
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
            warn('Ωdbrh__21', "not covered:", reverse(name));
          }
        }
      }
      // help 'Ωdbrh__22', ca.used_names
      // urge 'Ωdbrh__23', count, names for count, names of ca.names_by_counts
      //=========================================================================================================
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMtaG9hcmQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxrQkFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLHlCQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO0lBQUEsb0JBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsdUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdF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QUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixDQUFFLEtBQUYsQ0FBOUIsRUFWRjs7OztNQWNFLElBQUcsV0FBSDtRQUNFLElBQThFLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBaEIsR0FBeUIsQ0FBdkc7QUFBQTtVQUFBLEtBQUEscUNBQUE7O1lBQUEsSUFBQSxDQUFLLFdBQUwsRUFBa0IsY0FBbEIsRUFBa0MsT0FBQSxDQUFRLElBQVIsQ0FBbEM7VUFBQSxDQUFBO1NBREY7T0FkRjs7OzthQW1CRztJQXBCcUMsQ0FBQSxJQUF4Qzs7QUFuUEEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1kYnJpYy1ob2FyZCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5GUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnsgRGJyaWMsXG4gIERicmljX3N0ZCxcbiAgSUROLFxuICBMSVQsXG4gIFNRTCxcbiAgVkVDLFxuICBmcm9tX2Jvb2wsXG4gIGFzX2Jvb2wsXG4gIFRydWUsXG4gIEZhbHNlLFxuICB1bnF1b3RlX25hbWUsICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvZGJyaWMnXG4jIHsgbGV0cywgICAgICAgICAgICAgICAgIH0gPSBpbnRlcm5hbHNcbnsgZGJyaWNfcGx1Z2luOiBcXFxuICAgIGRicmljX2hvYXJkX3BsdWdpbiwgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvaW50ZXJtaXNzaW9uMidcbnsgdHlwZV9vZiwgICAgICAgICAgICAgIH0gPSAoIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvdW5zdGFibGUtcnByLXR5cGVfb2YtYnJpY3MnICkucmVxdWlyZV90eXBlX29mKClcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jaWRfb2YgPSAoIHggKSAtPiB4LmNvZGVQb2ludEF0IDBcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW5zZXJ0X3VuaWNvZGVfZXhjbHVzaW9ucyA9ICggaCApIC0+XG4gIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86IC1JbmZpbml0eSwgaGk6ICAgICAgICAtMSwga2V5OiAnJHgnLCB2YWx1ZTogXCJuZWdhdGl2ZSBDSURzXCIsICAgfVxuICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweDAwMDAsIGhpOiAgICAweDAwMDAsIGtleTogJyR4JywgdmFsdWU6IFwiemVybyBieXRlc1wiLCAgICAgIH1cbiAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHhkODAwLCBoaTogICAgMHhkYmZmLCBrZXk6ICckeCcsIHZhbHVlOiBcImhpZ2ggc3Vycm9nYXRlc1wiLCB9XG4gIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4ZGMwMCwgaGk6ICAgIDB4ZGZmZiwga2V5OiAnJHgnLCB2YWx1ZTogXCJsb3cgc3Vycm9nYXRlc1wiLCAgfVxuICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGZkZDAsIGhpOiAgICAweGZkZWYsIGtleTogJyR4JywgdmFsdWU6IFwibm9uY2hhcmFjdGVyc1wiLCAgIH1cbiAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHhmZmZlLCBoaTogICAgMHhmZmZmLCBrZXk6ICckeCcsIHZhbHVlOiBcIm5vbmNoYXJhY3RlcnNcIiwgICB9XG4gIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAweDExMDAwMCwgaGk6ICtJbmZpbml0eSwga2V5OiAnJHgnLCB2YWx1ZTogXCJleGNlc3NpdmUgQ0lEc1wiLCAgfVxuICA7bnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2hvYXJkX3BsdWdpbl9iYXNpY3M6IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBIb2FyZCBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQHBsdWdpbnM6IFtcbiAgICAgICAgZGJyaWNfaG9hcmRfcGx1Z2luXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGggPSBIb2FyZC5yZWJ1aWxkKClcbiAgICBAZXEgKCDOqWRicmhfX18xID0gLT4gJ3N0ZF9nZXRfdGFibGVzJyAgICAgICAgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX19fMiA9IC0+ICdocmRfZmluZF9ydW5zJyAgICAgICAgICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzMgPSAtPiAnX2hyZF9pbnNlcnRfcnVuJyAgICAgICAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX180ID0gLT4gJ2hyZF9maW5kX2NvdmVyaW5nX3J1bnMnIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBpbnNlcnRfdW5pY29kZV9leGNsdXNpb25zIGhcbiAgICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgIC0weDAwMGEsIGhpOiAgICAweDAwMDAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicsICAgICAgfVxuICAgIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4MDAwMCwgaGk6ICAgIDB4MDAwYSwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgICAgICB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgaC5zdGF0ZW1lbnRzLmhyZF9maW5kX3J1bnNcbiAgICAgIHJvd3MgPSBoLndhbGsgaC5zdGF0ZW1lbnRzLmhyZF9maW5kX3J1bnNcbiAgICAgIEBlcSAoIM6pZGJyaF9fXzUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0xJywgaW5vcm46IDEsIGxvOiAtSW5maW5pdHksIGhpOiAtMSwga2V5OiAnJHgnLCB2YWx1ZTogJ25lZ2F0aXZlIENJRHMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fXzYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj04JywgaW5vcm46IDgsIGxvOiAtMTAsIGhpOiAwLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fXzcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0yJywgaW5vcm46IDIsIGxvOiAwLCBoaTogMCwga2V5OiAnJHgnLCB2YWx1ZTogJ3plcm8gYnl0ZXMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fXzggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj05JywgaW5vcm46IDksIGxvOiAwLCBoaTogMTAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicgfVxuICAgICAgQGVxICggzqlkYnJoX19fOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTMnLCBpbm9ybjogMywgbG86IDU1Mjk2LCBoaTogNTYzMTksIGtleTogJyR4JywgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj00JywgaW5vcm46IDQsIGxvOiA1NjMyMCwgaGk6IDU3MzQzLCBrZXk6ICckeCcsIHZhbHVlOiAnbG93IHN1cnJvZ2F0ZXMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj01JywgaW5vcm46IDUsIGxvOiA2NDk3NiwgaGk6IDY1MDA3LCBrZXk6ICckeCcsIHZhbHVlOiAnbm9uY2hhcmFjdGVycycgfVxuICAgICAgQGVxICggzqlkYnJoX18xMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTYnLCBpbm9ybjogNiwgbG86IDY1NTM0LCBoaTogNjU1MzUsIGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzEzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NycsIGlub3JuOiA3LCBsbzogMTExNDExMiwgaGk6IEluZmluaXR5LCBrZXk6ICckeCcsIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTQgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19ob2FyZF9wbHVnaW5fbm9ybWFsaXphdGlvbl9hbmRfY29uZmxpY3RfZGV0ZWN0aW9uXzI6IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBIb2FyZCBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQHBsdWdpbnM6IFtcbiAgICAgICAgZGJyaWNfaG9hcmRfcGx1Z2luXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEhvYXJkX3YgZXh0ZW5kcyBIb2FyZFxuICAgICAgdmlzdWFsaXplOiAoeyBsbywgaGksIH0pIC0+XG4gICAgICAgIGZhY2V0X2Zyb21fcm93ICAgID0gKCByb3cgKSAtPiBcIiN7cm93LmtleX06I3tyb3cudmFsdWVfanNvbn1cIlxuICAgICAgICBmYWNldHNfZnJvbV9yb3dzICA9ICggcm93cyApIC0+IG5ldyBTZXQgWyAoIG5ldyBTZXQgKCAoIGZhY2V0X2Zyb21fcm93IHJvdyApIGZvciByb3cgZnJvbSByb3dzICkgKS4uLiwgXS5zb3J0KClcbiAgICAgICAgZ2xvYmFsX2ZhY2V0cyAgICAgPSBmYWNldHNfZnJvbV9yb3dzIEBocmRfZmluZF9jb3ZlcmluZ19ydW5zIGxvLCBoaVxuICAgICAgICBnbG9iYWxfd2lkdGggICAgICA9IGhpIC0gbG9cbiAgICAgICAgY29sb3JzICAgICAgICAgICAgPVxuICAgICAgICAgIGZhbGxiYWNrOiAgICggUC4uLiApIC0+IEdVWS50cm0uZ3JleSAgUC4uLlxuICAgICAgICAgIHdhcm46ICAgICAgICggUC4uLiApIC0+IEdVWS50cm0ucmVkICAgUC4uLlxuICAgICAgICAgIGluOiAgICAgICAgICggUC4uLiApIC0+IEdVWS50cm0uZ29sZCAgUC4uLlxuICAgICAgICAgIG91dDogICAgICAgICggUC4uLiApIC0+IEdVWS50cm0uYmx1ZSAgUC4uLlxuICAgICAgICAgIHJ1bjogICAgICAgICggUC4uLiApIC0+IEdVWS50cm0uZ3JleSAgUC4uLlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcm93X2NvdW50LCB9ID0gQGdldF9maXJzdCBTUUxcInNlbGVjdCBjb3VudCgqKSBhcyByb3dfY291bnQgZnJvbSBocmRfcnVucztcIlxuICAgICAgICBlY2hvKClcbiAgICAgICAgZWNobyBHVVkudHJtLndoaXRlIEdVWS50cm0ucmV2ZXJzZSBHVVkudHJtLmJvbGQgXCIgaG9hcmQgd2l0aCAje3Jvd19jb3VudH0gcnVucyBcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGZvciBnbG9iYWxfZmFjZXQgZnJvbSBnbG9iYWxfZmFjZXRzXG4gICAgICAgICAgZ2ZwaCAgICAgID0gJyAnLnJlcGVhdCBnbG9iYWxfZmFjZXQubGVuZ3RoXG4gICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTUUxcIlwiXCJcbiAgICAgICAgICAgIHNlbGVjdCAqIGZyb20gaHJkX3J1bnNcbiAgICAgICAgICAgICAgd2hlcmUgdHJ1ZVxuICAgICAgICAgICAgICAgIGFuZCAoIGZhY2V0ID0gJGdsb2JhbF9mYWNldCApXG4gICAgICAgICAgICAgICAgYW5kICggbG8gPD0gJGhpIClcbiAgICAgICAgICAgICAgICBhbmQgKCBoaSA+PSAkbG8gKVxuICAgICAgICAgICAgICAtLSBvcmRlciBieSBoaSAtIGxvIGFzYywgbG8gZGVzYywga2V5LCB2YWx1ZVxuICAgICAgICAgICAgICBvcmRlciBieSBpbm9ybiBkZXNjXG4gICAgICAgICAgICAgIDtcIlwiXCJcbiAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgIHBvaW50cyA9ICcnXG4gICAgICAgICAgZm9yIGNpZCBpbiBbIGxvIC4uIGhpIF1cbiAgICAgICAgICAgIGxvY2FsX2tleXMgID0gZmFjZXRzX2Zyb21fcm93cyBAaHJkX2ZpbmRfY292ZXJpbmdfcnVucyBjaWRcbiAgICAgICAgICAgIGNociAgICAgICAgID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkXG4gICAgICAgICAgICBjb2xvciAgICAgICA9IGlmICggbG9jYWxfa2V5cy5oYXMgZ2xvYmFsX2ZhY2V0ICkgdGhlbiBjb2xvcnMuaW4gZWxzZSBjb2xvcnMub3V0XG4gICAgICAgICAgICBwb2ludHMgICAgICs9IGNvbG9yIGNoclxuICAgICAgICAgIGVjaG8gZlwiI3tnbG9iYWxfZmFjZXR9OjwxNWM7ICN7JyAnfTo+NmM7ICN7cG9pbnRzfVwiXG4gICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICBmb3Igcm93IGZyb20gQHdhbGsgc3RhdGVtZW50LCB7IGdsb2JhbF9mYWNldCwgbG8sIGhpLCB9XG4gICAgICAgICAgICBpZCAgICAgICAgICA9IHJvdy5yb3dpZC5yZXBsYWNlIC9eLio/PShcXGQrKS8sICdbJDFdJ1xuICAgICAgICAgICAgZmlyc3QgICAgICAgPSAoIE1hdGgubWF4IHJvdy5sbywgbG8gKSAtIGxvXG4gICAgICAgICAgICBsYXN0ICAgICAgICA9ICggTWF0aC5taW4gcm93LmhpLCBoaSApIC0gbG9cbiAgICAgICAgICAgIGxlZnQgICAgICAgID0gR1VZLnRybS5ncmV5IEdVWS50cm0ucmV2ZXJzZSAn8J+uiicucmVwZWF0IGZpcnN0XG4gICAgICAgICAgICAjIGxlZnQgICAgICAgID0gR1VZLnRybS5ncmV5ICfilIInLnJlcGVhdCBmaXJzdFxuICAgICAgICAgICAgbWlkICAgICAgICAgPSBHVVkudHJtLmdvbGQgJ/CfroonLnJlcGVhdCBsYXN0IC0gZmlyc3QgKyAxXG4gICAgICAgICAgICAjIG1pZCAgICAgICAgID0gR1VZLnRybS5nb2xkICfimaYnLnJlcGVhdCBsYXN0IC0gZmlyc3QgKyAxXG4gICAgICAgICAgICAjIG1pZCAgICAgICAgID0gR1VZLnRybS5nb2xkICfilognLnJlcGVhdCBsYXN0IC0gZmlyc3QgKyAxXG4gICAgICAgICAgICByaWdodCAgICAgICA9IEdVWS50cm0uZ3JleSBHVVkudHJtLnJldmVyc2UgJ/CfroonLnJlcGVhdCAoIGdsb2JhbF93aWR0aCAtIGxhc3QgKyAxIClcbiAgICAgICAgICAgIGVjaG8gY29sb3JzLnJ1biBmXCIje2dmcGh9OjwxNWM7ICN7aWR9Oj42YzsgI3tsZWZ0fSN7bWlkfSN7cmlnaHR9XCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggICAgICAgICAgICAgICAgID0gSG9hcmRfdi5yZWJ1aWxkKClcbiAgICAgIGtleSAgICAgICAgICAgICAgID0gJ3Zvd2VsJ1xuICAgICAgY29sb3JzX2J5X2ZhY2V0cyAgPVxuICAgICAgICAndm93ZWw6dHJ1ZSc6ICAgICBHVVkudHJtLmdvbGRcbiAgICAgICAgJ3Zvd2VsOmZhbHNlJzogICAgR1VZLnRybS5ibHVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksICggY2lkX29mICdaJyApLCBrZXksIGZhbHNlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdhJyApLCAoIGNpZF9vZiAneicgKSwga2V5LCBmYWxzZVxuICAgICAgIyBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnRScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdJJyApLCBudWxsLCAndm93ZWwnLCB0cnVlXG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ08nICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdVJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ04nICksICggY2lkX29mICdaJyApLCAndXBwZXInLCB0cnVlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCAoIGNpZF9vZiAnRCcgKSwgJ3Zncm91cCcsICdBJ1xuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnSScgKSwgKCBjaWRfb2YgJ04nICksICd2Z3JvdXAnLCAnSSdcbiAgICAgICMgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfcnVucyBvcmRlciBieSBsbztcIlxuICAgICAgIyBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ1UnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgIyBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ2EnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdkJyApLCBudWxsLCBrZXksIGZhbHNlXG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ3UnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdjJyApLCAoIGNpZF9vZiAneCcgKSwga2V5LCB0cnVlXG4gICAgICAjIGgudmlzdWFsaXplIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ3onICksIH1cbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnYicgKSwgbnVsbCwga2V5LCBmYWxzZVxuICAgICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdjJyApLCBudWxsLCBrZXksIGZhbHNlXG4gICAgICAjIGgudmlzdWFsaXplIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ3onICksIH1cbiAgICAgICMgIyBmb3IgcG9pbnQgaW4gWyAoIGNpZF9vZiAnQScgKSAuLiAoIGNpZF9vZiAneicgKSBdXG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksICggY2lkX29mICdaJyApLCAnZXZlbicsIHRydWVcbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgbnVsbCwgJ2V2ZW4nLCBmYWxzZVxuICAgICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdDJyApLCBudWxsLCAnZXZlbicsIGZhbHNlXG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0UnICksIG51bGwsICdldmVuJywgZmFsc2VcbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnRycgKSwgbnVsbCwgJ2V2ZW4nLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHsgbWluLCBtYXgsIH0gICAgID0gaC5ocmRfZ2V0X21pbl9tYXgoKVxuICAgICAga2V5dmFsdWVfYnlfZmFjZXQgPSBoLl9ocmRfZ2V0X2tleXZhbHVlX2J5X2ZhY2V0KClcbiAgICAgIGZhY2V0c19ieV9wb2ludCAgID0gaC5faHJkX21hcF9mYWNldHNfb2ZfaW5zcGVjdGlvbl9wb2ludHMoKVxuICAgICAgZmFjZXRzICAgICAgICAgICAgPSBPYmplY3Qua2V5cyBoLl9ocmRfZ2V0X2ZhbWlsaWVzKCkgIyMjIFRBSU5UIHVzZSBfZ2V0X2ZhY2V0cyAjIyNcbiAgICAgIHN0YXRlICAgICAgICAgICAgID0gT2JqZWN0LmZyb21FbnRyaWVzICggWyBmYWNldCwgZmFsc2UsIF0gZm9yIGZhY2V0IGluIGZhY2V0cyApXG4gICAgICAjIGRlYnVnICfOqWRicmhfXzE2JywgZmFjZXRzXG4gICAgICAjIGRlYnVnICfOqWRicmhfXzE2Jywgc3RhdGVcbiAgICAgICMgZGVidWcgJ86pZGJyaF9fMTYnLCBrZXl2YWx1ZV9ieV9mYWNldFxuICAgICAgZm9yIGZhY2V0IGluIGZhY2V0c1xuICAgICAgICB7IGtleSwgdmFsdWUsIH0gPSBrZXl2YWx1ZV9ieV9mYWNldFsgZmFjZXQgXVxuICAgICAgICBkZWJ1ZygpXG4gICAgICAgIGRlYnVnICfOqWRicmhfXzE2JywgcmV2ZXJzZSBmYWNldFxuICAgICAgICBmb3IgWyBwb2ludCwgcG9pbnRfZmFjZXRzLCBdIGZyb20gZmFjZXRzX2J5X3BvaW50XG4gICAgICAgICAgY2hyICAgICAgICAgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBwb2ludFxuICAgICAgICAgIGhhc19mYWNldCAgID0gcG9pbnRfZmFjZXRzLmhhcyBmYWNldFxuICAgICAgICAgIGN1cnJlbnQgICAgID0gc3RhdGVbIGZhY2V0IF0gPyBmYWxzZVxuICAgICAgICAgIHdoaXNwZXIgJ86pZGJyaF9fMTYnLCAoIGlmIGhhc19mYWNldCB0aGVuIHdoaXRlIGVsc2UgZ3JleSApICggcnByIGNociApLCBmYWNldFxuICAgICAgICAgICMgaWYgaGFzX2ZhY2V0IGlzbnQgY3VycmVudFxuICAgICAgICAgICMgICBzdGF0ZVsgZmFjZXQgXSA9IGhhc19mYWNldFxuICAgICAgICAgICMgICBpZiBjdXJyZW50XG4gICAgICAgICAgIyAgICAgd2FybiAnzqlkYnJoX18xNycsICggcnByIGNociApLCBmYWNldCwgJyknXG4gICAgICAgICAgIyAgIGVsc2VcbiAgICAgICAgICAjICAgICBoZWxwICfOqWRicmhfXzE2JywgKCBycHIgY2hyICksICcoJywgZmFjZXQgIyB1bmxlc3MgcG9pbnQgaXMgbWluXG4gICAgICAgICAgIyBlbHNlXG4gICAgICAgICAgIyAgIG51bGxcbiAgICAgICAgICAgICMgd2hpc3BlciAnzqlkYnJoX18xNicsICggcnByIGNociApLCAnPScsIGZhY2V0LCBjdXJyZW50LCAnPSdcbiAgICAgICAgICAjIGRlYnVnICfOqWRicmhfXzE4JywgY2hyLCBmYWNldCwgaGFzX2ZhY2V0XG4gICAgICAjICAgZGVidWcgJ86pZGJyaF9fMTknLCBmYWNldFxuICAgICAgIyAgIGZvciB7IHBvaW50LCB9IGZyb20gaC53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBocmRfaW5zcGVjdGlvbl9wb2ludHM7XCJcbiAgICAgICAgICAjIGZhY2V0cyAgICAgID0gaC5faHJkX2ZhY2V0c19mcm9tX3BvaW50IHBvaW50XG4gICAgICAgICAgIyB1cmdlICfOqWRicmhfXzIwJywgY2hyLCAoIHJwciBmYWNldCApLCBmYWNldHNcbiAgICAgICMgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfYnJlYWtwb2ludF9mYWNldHNfMTtcIlxuICAgICAgIyBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBkb19jb3ZlcmFnZSA9IHRydWVcbiAgZG9fY292ZXJhZ2UgPSBmYWxzZVxuICBpZiBkb19jb3ZlcmFnZVxuICAgIHsgQ292ZXJhZ2VfYW5hbHl6ZXIsICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2NvdmVyYWdlLWFuYWx5emVyJ1xuICAgIGNhID0gbmV3IENvdmVyYWdlX2FuYWx5emVyKClcbiAgICAjIGNhLndyYXBfY2xhc3MgRGJyaWNfc3RkXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2hvYXJkX3BsdWdpbl9ub3JtYWxpemF0aW9uX2FuZF9jb25mbGljdF9kZXRlY3Rpb25fMjogdGVzdHMuZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb25fYW5kX2NvbmZsaWN0X2RldGVjdGlvbl8yLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkYnJpY19keW5hbWljX2J1aWxkX3Byb3BlcnRpZXM6IHRlc3RzLmRicmljX2R5bmFtaWNfYnVpbGRfcHJvcGVydGllcywgfVxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIGRvX2NvdmVyYWdlXG4gICAgd2FybiAnzqlkYnJoX18yMScsIFwibm90IGNvdmVyZWQ6XCIsIHJldmVyc2UgbmFtZSBmb3IgbmFtZSBpbiBjYS51bnVzZWRfbmFtZXMgaWYgY2EudW51c2VkX25hbWVzLmxlbmd0aCA+IDBcbiAgICAjIGhlbHAgJ86pZGJyaF9fMjInLCBjYS51c2VkX25hbWVzXG4gICAgIyB1cmdlICfOqWRicmhfXzIzJywgY291bnQsIG5hbWVzIGZvciBjb3VudCwgbmFtZXMgb2YgY2EubmFtZXNfYnlfY291bnRzXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgO251bGxcblxuXG4iXX0=
