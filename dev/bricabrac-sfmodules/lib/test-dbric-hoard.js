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
        var R, chr, cid, colors_by_facets, h, i, key, ref, ref1, value, y;
        h = Hoard_v.rebuild();
        key = 'vowel';
        colors_by_facets = {
          'vowel:true': GUY.trm.gold,
          'vowel:false': GUY.trm.blue
        };
        //.....................................................................................................
        h.hrd_add_run(cid_of('A'), cid_of('Z'), key, false);
        h.hrd_add_run(cid_of('a'), cid_of('z'), key, false);
        h.visualize({
          lo: cid_of('A'),
          hi: cid_of('z')
        });
        // h.hrd_add_run ( cid_of 'A' ), null, key, true
        h.hrd_add_run(cid_of('A'), null, key, true);
        // h.tbl_echo_as_text SQL"select * from hrd_runs order by lo;"
        h.hrd_add_run(cid_of('E'), null, key, true);
        h.hrd_add_run(cid_of('I'), null, key, true);
        h.hrd_add_run(cid_of('O'), null, key, true);
        h.hrd_add_run(cid_of('U'), null, key, true);
        h.hrd_add_run(cid_of('N'), cid_of('Z'), 'upper', true);
        h.tbl_echo_as_text(SQL`select * from hrd_runs order by lo;`);
        // h.tbl_echo_as_text SQL"select * from hrd_family_conflicts_1;"
        // h.tbl_echo_as_text SQL"select * from hrd_family_conflicts_2;"
        // h.tbl_echo_as_text SQL"select * from hrd_family_conflicts_2 where key = $key and value != 'true';", { key, }
        // h.tbl_echo_as_text SQL"select * from _hrd_family_has_conflict_1;"
        // h.tbl_echo_as_text SQL"select * from _hrd_clan_has_conflict_2;"
        // h.tbl_echo_as_text h.hrd_find_families
        // h.tbl_echo_as_text SQL"select * from _hrd_facet_group_has_conflict_2;"
        h.visualize({
          lo: cid_of('A'),
          hi: cid_of('z')
        });
        h.hrd_add_run(cid_of('U'), null, key, true);
        h.visualize({
          lo: cid_of('A'),
          hi: cid_of('z')
        });
        h.hrd_add_run(cid_of('a'), null, key, true);
        h.hrd_add_run(cid_of('d'), null, key, false);
        h.hrd_add_run(cid_of('u'), null, key, true);
        h.hrd_add_run(cid_of('c'), cid_of('x'), key, true);
        h.visualize({
          lo: cid_of('A'),
          hi: cid_of('z')
        });
        h.hrd_add_run(cid_of('b'), null, key, false);
        h.hrd_add_run(cid_of('c'), null, key, false);
        h.visualize({
          lo: cid_of('A'),
          hi: cid_of('z')
        });
        // for point in [ ( cid_of 'A' ) .. ( cid_of 'z' ) ]
        h.hrd_add_run(cid_of('A'), cid_of('Z'), 'even', true);
        h.hrd_add_run(cid_of('A'), null, 'even', false);
        h.hrd_add_run(cid_of('C'), null, 'even', false);
        h.hrd_add_run(cid_of('E'), null, 'even', false);
        h.hrd_add_run(cid_of('G'), null, 'even', false);
        h.visualize({
          lo: cid_of('A'),
          hi: cid_of('z')
        });
        for (cid = i = ref = cid_of('A'), ref1 = cid_of('Z'); (ref <= ref1 ? i <= ref1 : i >= ref1); cid = ref <= ref1 ? ++i : --i) {
          chr = String.fromCodePoint(cid);
          R = {};
          for (y of h.hrd_find_topruns_for_point(cid)) {
            ({key, value} = y);
            /* TAINT complain if key taken */
            R[key] = value;
          }
          debug('Ωdbrh_130', chr, R);
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMtaG9hcmQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxrQkFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLHlCQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO0lBQUEsb0JBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsdUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdF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QWtDLE9BQUEsQ0FBUSx5REFBUixDQUFsQztRQUNBLEVBQUEsR0FBSyxJQUFJLGlCQUFKLENBQUEsRUFGUDtPQUZGOzs7TUFPRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxJQUF2QztRQUE2QyxhQUFBLEVBQWU7TUFBNUQ7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLENBQUUsS0FBRixDQUE5QixFQVZGOzs7O01BY0UsSUFBRyxXQUFIO1FBQ0UsSUFBOEUsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFoQixHQUF5QixDQUF2RztBQUFBO1VBQUEsS0FBQSxxQ0FBQTs7WUFBQSxJQUFBLENBQUssV0FBTCxFQUFrQixjQUFsQixFQUFrQyxPQUFBLENBQVEsSUFBUixDQUFsQztVQUFBLENBQUE7U0FERjtPQWRGOzs7O2FBbUJHO0lBcEJxQyxDQUFBLElBQXhDOztBQTlOQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLWRicmljLWhvYXJkJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbkZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxueyBEYnJpYyxcbiAgRGJyaWNfc3RkLFxuICBJRE4sXG4gIExJVCxcbiAgU1FMLFxuICBWRUMsXG4gIGZyb21fYm9vbCxcbiAgYXNfYm9vbCxcbiAgVHJ1ZSxcbiAgRmFsc2UsXG4gIHVucXVvdGVfbmFtZSwgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9kYnJpYydcbiMgeyBsZXRzLCAgICAgICAgICAgICAgICAgfSA9IGludGVybmFsc1xueyBkYnJpY19wbHVnaW46IFxcXG4gICAgZGJyaWNfaG9hcmRfcGx1Z2luLCB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9pbnRlcm1pc3Npb24yJ1xueyB0eXBlX29mLCAgICAgICAgICAgICAgfSA9ICggcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi91bnN0YWJsZS1ycHItdHlwZV9vZi1icmljcycgKS5yZXF1aXJlX3R5cGVfb2YoKVxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNpZF9vZiA9ICggeCApIC0+IHguY29kZVBvaW50QXQgMFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbnNlcnRfdW5pY29kZV9leGNsdXNpb25zID0gKCBoICkgLT5cbiAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogLUluZmluaXR5LCBoaTogICAgICAgIC0xLCBrZXk6ICckeCcsIHZhbHVlOiBcIm5lZ2F0aXZlIENJRHNcIiwgICB9XG4gIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4MDAwMCwgaGk6ICAgIDB4MDAwMCwga2V5OiAnJHgnLCB2YWx1ZTogXCJ6ZXJvIGJ5dGVzXCIsICAgICAgfVxuICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGQ4MDAsIGhpOiAgICAweGRiZmYsIGtleTogJyR4JywgdmFsdWU6IFwiaGlnaCBzdXJyb2dhdGVzXCIsIH1cbiAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHhkYzAwLCBoaTogICAgMHhkZmZmLCBrZXk6ICckeCcsIHZhbHVlOiBcImxvdyBzdXJyb2dhdGVzXCIsICB9XG4gIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4ZmRkMCwgaGk6ICAgIDB4ZmRlZiwga2V5OiAnJHgnLCB2YWx1ZTogXCJub25jaGFyYWN0ZXJzXCIsICAgfVxuICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGZmZmUsIGhpOiAgICAweGZmZmYsIGtleTogJyR4JywgdmFsdWU6IFwibm9uY2hhcmFjdGVyc1wiLCAgIH1cbiAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogIDB4MTEwMDAwLCBoaTogK0luZmluaXR5LCBrZXk6ICckeCcsIHZhbHVlOiBcImV4Y2Vzc2l2ZSBDSURzXCIsICB9XG4gIDtudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfaG9hcmRfcGx1Z2luX2Jhc2ljczogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEhvYXJkIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAcGx1Z2luczogW1xuICAgICAgICBkYnJpY19ob2FyZF9wbHVnaW5cbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaCA9IEhvYXJkLnJlYnVpbGQoKVxuICAgIEBlcSAoIM6pZGJyaF9fXzEgPSAtPiAnc3RkX2dldF90YWJsZXMnICAgICAgICAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX18yID0gLT4gJ2hyZF9maW5kX3J1bnMnICAgICAgICAgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX19fMyA9IC0+ICdfaHJkX2luc2VydF9ydW4nICAgICAgICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzQgPSAtPiAnaHJkX2ZpbmRfY292ZXJpbmdfcnVucycgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGluc2VydF91bmljb2RlX2V4Y2x1c2lvbnMgaFxuICAgIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgLTB4MDAwYSwgaGk6ICAgIDB4MDAwMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgICAgICB9XG4gICAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHgwMDAwLCBoaTogICAgMHgwMDBhLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInLCAgICAgIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBlY2hvIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBoLnN0YXRlbWVudHMuaHJkX2ZpbmRfcnVuc1xuICAgICAgcm93cyA9IGgud2FsayBoLnN0YXRlbWVudHMuaHJkX2ZpbmRfcnVuc1xuICAgICAgQGVxICggzqlkYnJoX19fNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTEnLCBpbm9ybjogMSwgbG86IC1JbmZpbml0eSwgaGk6IC0xLCBrZXk6ICckeCcsIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycgfVxuICAgICAgQGVxICggzqlkYnJoX19fOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTgnLCBpbm9ybjogOCwgbG86IC0xMCwgaGk6IDAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicgfVxuICAgICAgQGVxICggzqlkYnJoX19fOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTInLCBpbm9ybjogMiwgbG86IDAsIGhpOiAwLCBrZXk6ICckeCcsIHZhbHVlOiAnemVybyBieXRlcycgfVxuICAgICAgQGVxICggzqlkYnJoX18xMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTknLCBpbm9ybjogOSwgbG86IDAsIGhpOiAxMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzExID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MycsIGlub3JuOiAzLCBsbzogNTUyOTYsIGhpOiA1NjMxOSwga2V5OiAnJHgnLCB2YWx1ZTogJ2hpZ2ggc3Vycm9nYXRlcycgfVxuICAgICAgQGVxICggzqlkYnJoX18xMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTQnLCBpbm9ybjogNCwgbG86IDU2MzIwLCBoaTogNTczNDMsIGtleTogJyR4JywgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycgfVxuICAgICAgQGVxICggzqlkYnJoX18xMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTUnLCBpbm9ybjogNSwgbG86IDY0OTc2LCBoaTogNjUwMDcsIGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzE0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NicsIGlub3JuOiA2LCBsbzogNjU1MzQsIGhpOiA2NTUzNSwga2V5OiAnJHgnLCB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj03JywgaW5vcm46IDcsIGxvOiAxMTE0MTEyLCBoaTogSW5maW5pdHksIGtleTogJyR4JywgdmFsdWU6ICdleGNlc3NpdmUgQ0lEcycgfVxuICAgICAgQGVxICggzqlkYnJoX18xNiA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2hvYXJkX3BsdWdpbl9ub3JtYWxpemF0aW9uX2FuZF9jb25mbGljdF9kZXRlY3Rpb25fMjogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEhvYXJkIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAcGx1Z2luczogW1xuICAgICAgICBkYnJpY19ob2FyZF9wbHVnaW5cbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmRfdiBleHRlbmRzIEhvYXJkXG4gICAgICB2aXN1YWxpemU6ICh7IGxvLCBoaSwgfSkgLT5cbiAgICAgICAgZmFjZXRfZnJvbV9yb3cgICAgPSAoIHJvdyApIC0+IFwiI3tyb3cua2V5fToje3Jvdy52YWx1ZV9qc29ufVwiXG4gICAgICAgIGZhY2V0c19mcm9tX3Jvd3MgID0gKCByb3dzICkgLT4gbmV3IFNldCBbICggbmV3IFNldCAoICggZmFjZXRfZnJvbV9yb3cgcm93ICkgZm9yIHJvdyBmcm9tIHJvd3MgKSApLi4uLCBdLnNvcnQoKVxuICAgICAgICBnbG9iYWxfZmFjZXRzICAgICA9IGZhY2V0c19mcm9tX3Jvd3MgQGhyZF9maW5kX2NvdmVyaW5nX3J1bnMgbG8sIGhpXG4gICAgICAgIGdsb2JhbF93aWR0aCAgICAgID0gaGkgLSBsb1xuICAgICAgICBjb2xvcnMgICAgICAgICAgICA9XG4gICAgICAgICAgZmFsbGJhY2s6ICAgKCBQLi4uICkgLT4gR1VZLnRybS5ncmV5ICBQLi4uXG4gICAgICAgICAgd2FybjogICAgICAgKCBQLi4uICkgLT4gR1VZLnRybS5yZWQgICBQLi4uXG4gICAgICAgICAgaW46ICAgICAgICAgKCBQLi4uICkgLT4gR1VZLnRybS5nb2xkICBQLi4uXG4gICAgICAgICAgb3V0OiAgICAgICAgKCBQLi4uICkgLT4gR1VZLnRybS5ibHVlICBQLi4uXG4gICAgICAgICAgcnVuOiAgICAgICAgKCBQLi4uICkgLT4gR1VZLnRybS5ncmV5ICBQLi4uXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyByb3dfY291bnQsIH0gPSBAZ2V0X2ZpcnN0IFNRTFwic2VsZWN0IGNvdW50KCopIGFzIHJvd19jb3VudCBmcm9tIGhyZF9ydW5zO1wiXG4gICAgICAgIGVjaG8oKVxuICAgICAgICBlY2hvIEdVWS50cm0ud2hpdGUgR1VZLnRybS5yZXZlcnNlIEdVWS50cm0uYm9sZCBcIiBob2FyZCB3aXRoICN7cm93X2NvdW50fSBydW5zIFwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZm9yIGdsb2JhbF9mYWNldCBmcm9tIGdsb2JhbF9mYWNldHNcbiAgICAgICAgICBnZnBoICAgICAgPSAnICcucmVwZWF0IGdsb2JhbF9mYWNldC5sZW5ndGhcbiAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgIHN0YXRlbWVudCA9IFNRTFwiXCJcIlxuICAgICAgICAgICAgc2VsZWN0ICogZnJvbSBocmRfcnVuc1xuICAgICAgICAgICAgICB3aGVyZSB0cnVlXG4gICAgICAgICAgICAgICAgYW5kICggZmFjZXQgPSAkZ2xvYmFsX2ZhY2V0IClcbiAgICAgICAgICAgICAgICBhbmQgKCBsbyA8PSAkaGkgKVxuICAgICAgICAgICAgICAgIGFuZCAoIGhpID49ICRsbyApXG4gICAgICAgICAgICAgIC0tIG9yZGVyIGJ5IGhpIC0gbG8gYXNjLCBsbyBkZXNjLCBrZXksIHZhbHVlXG4gICAgICAgICAgICAgIG9yZGVyIGJ5IGlub3JuIGRlc2NcbiAgICAgICAgICAgICAgO1wiXCJcIlxuICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgcG9pbnRzID0gJydcbiAgICAgICAgICBmb3IgY2lkIGluIFsgbG8gLi4gaGkgXVxuICAgICAgICAgICAgbG9jYWxfa2V5cyAgPSBmYWNldHNfZnJvbV9yb3dzIEBocmRfZmluZF9jb3ZlcmluZ19ydW5zIGNpZFxuICAgICAgICAgICAgY2hyICAgICAgICAgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWRcbiAgICAgICAgICAgIGNvbG9yICAgICAgID0gaWYgKCBsb2NhbF9rZXlzLmhhcyBnbG9iYWxfZmFjZXQgKSB0aGVuIGNvbG9ycy5pbiBlbHNlIGNvbG9ycy5vdXRcbiAgICAgICAgICAgIHBvaW50cyAgICAgKz0gY29sb3IgY2hyXG4gICAgICAgICAgZWNobyBmXCIje2dsb2JhbF9mYWNldH06PDE1YzsgI3snICd9Oj42YzsgI3twb2ludHN9XCJcbiAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgIGZvciByb3cgZnJvbSBAd2FsayBzdGF0ZW1lbnQsIHsgZ2xvYmFsX2ZhY2V0LCBsbywgaGksIH1cbiAgICAgICAgICAgIGlkICAgICAgICAgID0gcm93LnJvd2lkLnJlcGxhY2UgL14uKj89KFxcZCspLywgJ1skMV0nXG4gICAgICAgICAgICBmaXJzdCAgICAgICA9ICggTWF0aC5tYXggcm93LmxvLCBsbyApIC0gbG9cbiAgICAgICAgICAgIGxhc3QgICAgICAgID0gKCBNYXRoLm1pbiByb3cuaGksIGhpICkgLSBsb1xuICAgICAgICAgICAgbGVmdCAgICAgICAgPSBHVVkudHJtLmdyZXkgR1VZLnRybS5yZXZlcnNlICfwn66KJy5yZXBlYXQgZmlyc3RcbiAgICAgICAgICAgICMgbGVmdCAgICAgICAgPSBHVVkudHJtLmdyZXkgJ+KUgicucmVwZWF0IGZpcnN0XG4gICAgICAgICAgICBtaWQgICAgICAgICA9IEdVWS50cm0uZ29sZCAn8J+uiicucmVwZWF0IGxhc3QgLSBmaXJzdCArIDFcbiAgICAgICAgICAgICMgbWlkICAgICAgICAgPSBHVVkudHJtLmdvbGQgJ+KZpicucmVwZWF0IGxhc3QgLSBmaXJzdCArIDFcbiAgICAgICAgICAgICMgbWlkICAgICAgICAgPSBHVVkudHJtLmdvbGQgJ+KWiCcucmVwZWF0IGxhc3QgLSBmaXJzdCArIDFcbiAgICAgICAgICAgIHJpZ2h0ICAgICAgID0gR1VZLnRybS5ncmV5IEdVWS50cm0ucmV2ZXJzZSAn8J+uiicucmVwZWF0ICggZ2xvYmFsX3dpZHRoIC0gbGFzdCArIDEgKVxuICAgICAgICAgICAgZWNobyBjb2xvcnMucnVuIGZcIiN7Z2ZwaH06PDE1YzsgI3tpZH06PjZjOyAje2xlZnR9I3ttaWR9I3tyaWdodH1cIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCAgICAgICAgICAgICAgICAgPSBIb2FyZF92LnJlYnVpbGQoKVxuICAgICAga2V5ICAgICAgICAgICAgICAgPSAndm93ZWwnXG4gICAgICBjb2xvcnNfYnlfZmFjZXRzICA9XG4gICAgICAgICd2b3dlbDp0cnVlJzogICAgIEdVWS50cm0uZ29sZFxuICAgICAgICAndm93ZWw6ZmFsc2UnOiAgICBHVVkudHJtLmJsdWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgKCBjaWRfb2YgJ1onICksIGtleSwgZmFsc2VcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ2EnICksICggY2lkX29mICd6JyApLCBrZXksIGZhbHNlXG4gICAgICBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX3J1bnMgb3JkZXIgYnkgbG87XCJcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0UnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnSScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdPJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ1UnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnTicgKSwgKCBjaWRfb2YgJ1onICksICd1cHBlcicsIHRydWVcbiAgICAgIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX3J1bnMgb3JkZXIgYnkgbG87XCJcbiAgICAgICMgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfZmFtaWx5X2NvbmZsaWN0c18xO1wiXG4gICAgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2ZhbWlseV9jb25mbGljdHNfMjtcIlxuICAgICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9mYW1pbHlfY29uZmxpY3RzXzIgd2hlcmUga2V5ID0gJGtleSBhbmQgdmFsdWUgIT0gJ3RydWUnO1wiLCB7IGtleSwgfVxuICAgICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIF9ocmRfZmFtaWx5X2hhc19jb25mbGljdF8xO1wiXG4gICAgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9jbGFuX2hhc19jb25mbGljdF8yO1wiXG4gICAgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBoLmhyZF9maW5kX2ZhbWlsaWVzXG4gICAgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9mYWNldF9ncm91cF9oYXNfY29uZmxpY3RfMjtcIlxuICAgICAgaC52aXN1YWxpemUgeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAneicgKSwgfVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnVScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdhJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ2QnICksIG51bGwsIGtleSwgZmFsc2VcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ3UnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnYycgKSwgKCBjaWRfb2YgJ3gnICksIGtleSwgdHJ1ZVxuICAgICAgaC52aXN1YWxpemUgeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAneicgKSwgfVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnYicgKSwgbnVsbCwga2V5LCBmYWxzZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnYycgKSwgbnVsbCwga2V5LCBmYWxzZVxuICAgICAgaC52aXN1YWxpemUgeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAneicgKSwgfVxuICAgICAgIyBmb3IgcG9pbnQgaW4gWyAoIGNpZF9vZiAnQScgKSAuLiAoIGNpZF9vZiAneicgKSBdXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCAoIGNpZF9vZiAnWicgKSwgJ2V2ZW4nLCB0cnVlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCBudWxsLCAnZXZlbicsIGZhbHNlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdDJyApLCBudWxsLCAnZXZlbicsIGZhbHNlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdFJyApLCBudWxsLCAnZXZlbicsIGZhbHNlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdHJyApLCBudWxsLCAnZXZlbicsIGZhbHNlXG4gICAgICBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICBmb3IgY2lkIGluIFsgKCBjaWRfb2YgJ0EnICkgLi4gKCBjaWRfb2YgJ1onICkgXVxuICAgICAgICBjaHIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWRcbiAgICAgICAgUiAgID0ge31cbiAgICAgICAgZm9yIHsga2V5LCB2YWx1ZSwgfSBmcm9tIGguaHJkX2ZpbmRfdG9wcnVuc19mb3JfcG9pbnQgY2lkXG4gICAgICAgICAgIyMjIFRBSU5UIGNvbXBsYWluIGlmIGtleSB0YWtlbiAjIyNcbiAgICAgICAgICBSWyBrZXkgXSA9IHZhbHVlXG4gICAgICAgIGRlYnVnICfOqWRicmhfMTMwJywgY2hyLCBSXG4gICAgICAjIGgudmlzdWFsaXplIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ3onICksIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGRvX2NvdmVyYWdlID0gdHJ1ZVxuICBkb19jb3ZlcmFnZSA9IGZhbHNlXG4gIGlmIGRvX2NvdmVyYWdlXG4gICAgeyBDb3ZlcmFnZV9hbmFseXplciwgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvY292ZXJhZ2UtYW5hbHl6ZXInXG4gICAgY2EgPSBuZXcgQ292ZXJhZ2VfYW5hbHl6ZXIoKVxuICAgICMgY2Eud3JhcF9jbGFzcyBEYnJpY19zdGRcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb25fYW5kX2NvbmZsaWN0X2RldGVjdGlvbl8yOiB0ZXN0cy5kYnJpY19ob2FyZF9wbHVnaW5fbm9ybWFsaXphdGlvbl9hbmRfY29uZmxpY3RfZGV0ZWN0aW9uXzIsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2R5bmFtaWNfYnVpbGRfcHJvcGVydGllczogdGVzdHMuZGJyaWNfZHluYW1pY19idWlsZF9wcm9wZXJ0aWVzLCB9XG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaWYgZG9fY292ZXJhZ2VcbiAgICB3YXJuICfOqWRicmhfMTMxJywgXCJub3QgY292ZXJlZDpcIiwgcmV2ZXJzZSBuYW1lIGZvciBuYW1lIGluIGNhLnVudXNlZF9uYW1lcyBpZiBjYS51bnVzZWRfbmFtZXMubGVuZ3RoID4gMFxuICAgICMgaGVscCAnzqlkYnJoXzEzMicsIGNhLnVzZWRfbmFtZXNcbiAgICAjIHVyZ2UgJ86pZGJyaF8xMzMnLCBjb3VudCwgbmFtZXMgZm9yIGNvdW50LCBuYW1lcyBvZiBjYS5uYW1lc19ieV9jb3VudHNcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICA7bnVsbFxuXG5cbiJdfQ==
