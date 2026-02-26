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
          var chr, cid, color, colors, delta, facet_from_row, facets_from_rows, first, gfph, global_facet, global_facets, global_width, i, id, last, left, line, local_keys, mid, point, points, prv_point, ref, ref1, right, row, row_count, statement, y;
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
          prv_point = 0;
          line = '';
          for (y of this.walk(SQL`select * from hrd_inspection_points;`)) {
            ({point} = y);
            point -= lo;
            delta = Math.max(0, point - prv_point - 1);
            line += ' '.repeat(delta);
            line += GUY.trm.gold('▲');
            prv_point = point;
          }
          echo(colors.run(f`${gfph}:<15c; ${''}:>6c; ${line}`));
          //...................................................................................................
          return null;
        }

      };
      (() => {        //.......................................................................................................
        var chr, colors_by_facets, facet, facets, facets_by_point, h, has_facet, hi, i, key, keyvalue_by_facet, len, lo, lopoints/* TAINT use _get_facets */, max, min, new_runs, point, point_facets, value, y, z;
        h = Hoard_v.rebuild();
        colors_by_facets = {
          'vowel:true': GUY.trm.gold,
          'vowel:false': GUY.trm.blue
        };
        //.....................................................................................................
        h.hrd_add_run(cid_of('A'), cid_of('Z'), 'vowel', false);
        h.hrd_add_run(cid_of('a'), cid_of('z'), 'vowel', false);
        // h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
        h.hrd_add_run(cid_of('A'), null, 'vowel', true);
        h.hrd_add_run(cid_of('A'), null, 'vowel', true);
        h.hrd_add_run(cid_of('E'), null, 'vowel', true);
        h.hrd_add_run(cid_of('I'), null, 'vowel', true);
        h.hrd_add_run(cid_of('O'), null, 'vowel', true);
        h.hrd_add_run(cid_of('U'), null, 'vowel', true);
        h.hrd_add_run(cid_of('N'), cid_of('Z'), 'upper', true);
        h.hrd_add_run(cid_of('A'), cid_of('D'), 'vgroup', 'A');
        h.hrd_add_run(cid_of('I'), cid_of('N'), 'vgroup', 'I');
        // h.tbl_echo_as_text SQL"select * from hrd_runs order by lo;"
        // h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
        // h.hrd_add_run ( cid_of 'U' ), null, 'vowel', true
        // h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
        // h.hrd_add_run ( cid_of 'a' ), null, 'vowel', true
        // h.hrd_add_run ( cid_of 'd' ), null, 'vowel', false
        // h.hrd_add_run ( cid_of 'u' ), null, 'vowel', true
        // h.hrd_add_run ( cid_of 'c' ), ( cid_of 'x' ), 'vowel', true
        // h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
        // h.hrd_add_run ( cid_of 'b' ), null, 'vowel', false
        // h.hrd_add_run ( cid_of 'c' ), null, 'vowel', false
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
        lopoints = Object.fromEntries((function() {
          var i, len, results;
          results = [];
          for (i = 0, len = facets.length; i < len; i++) {
            facet = facets[i];
            results.push([facet, null]);
          }
          return results;
        })());
        new_runs = [];
        for (i = 0, len = facets.length; i < len; i++) {
          facet = facets[i];
          ({key, value} = keyvalue_by_facet[facet]);
// debug()
// debug 'Ωdbrh__16', reverse facet
          for (y of facets_by_point) {
            [point, point_facets] = y;
            chr = String.fromCodePoint(point);
            has_facet = point_facets.has(facet);
            if (has_facet) {
              if (lopoints[facet] == null) {
                lopoints[facet] = point;
              }
            } else {
              if (lopoints[facet] != null) {
                lo = lopoints[facet];
                hi = point - 1;
                new_runs.push({facet, key, value, lo, hi});
                lopoints[facet] = null;
              }
            }
          }
        }
// lo_chr  = String.fromCodePoint lo
// hi_chr  = String.fromCodePoint hi
// debug 'Ωdbrh__16', ( rpr chr ), point, ( rpr lo_chr ), ( rpr hi_chr ), lo, hi
        for (facet in lopoints) {
          lo = lopoints[facet];
          if (!(lo != null)) {
            continue;
          }
          ({key, value} = keyvalue_by_facet[facet]);
          new_runs.push({
            facet,
            key,
            value,
            lo,
            hi: max
          });
        }
        h.hrd_delete_runs();
        for (z of new_runs) {
          ({facet, key, value, lo, hi} = z);
          h.hrd_add_run(lo, hi, key, value);
        }
        // h.tbl_echo_as_text SQL"select * from hrd_topruns;"
        h.visualize({
          lo: cid_of('A'),
          hi: cid_of('z')
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMtaG9hcmQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxrQkFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLHlCQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO0lBQUEsb0JBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsdUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdF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RjtPQWRGOzs7O2FBbUJHO0lBcEJxQyxDQUFBLElBQXhDOztBQTVQQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLWRicmljLWhvYXJkJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbkZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxueyBEYnJpYyxcbiAgRGJyaWNfc3RkLFxuICBJRE4sXG4gIExJVCxcbiAgU1FMLFxuICBWRUMsXG4gIGZyb21fYm9vbCxcbiAgYXNfYm9vbCxcbiAgVHJ1ZSxcbiAgRmFsc2UsXG4gIHVucXVvdGVfbmFtZSwgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9kYnJpYydcbiMgeyBsZXRzLCAgICAgICAgICAgICAgICAgfSA9IGludGVybmFsc1xueyBkYnJpY19wbHVnaW46IFxcXG4gICAgZGJyaWNfaG9hcmRfcGx1Z2luLCB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9pbnRlcm1pc3Npb24yJ1xueyB0eXBlX29mLCAgICAgICAgICAgICAgfSA9ICggcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi91bnN0YWJsZS1ycHItdHlwZV9vZi1icmljcycgKS5yZXF1aXJlX3R5cGVfb2YoKVxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNpZF9vZiA9ICggeCApIC0+IHguY29kZVBvaW50QXQgMFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbnNlcnRfdW5pY29kZV9leGNsdXNpb25zID0gKCBoICkgLT5cbiAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogLUluZmluaXR5LCBoaTogICAgICAgIC0xLCBrZXk6ICckeCcsIHZhbHVlOiBcIm5lZ2F0aXZlIENJRHNcIiwgICB9XG4gIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4MDAwMCwgaGk6ICAgIDB4MDAwMCwga2V5OiAnJHgnLCB2YWx1ZTogXCJ6ZXJvIGJ5dGVzXCIsICAgICAgfVxuICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGQ4MDAsIGhpOiAgICAweGRiZmYsIGtleTogJyR4JywgdmFsdWU6IFwiaGlnaCBzdXJyb2dhdGVzXCIsIH1cbiAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHhkYzAwLCBoaTogICAgMHhkZmZmLCBrZXk6ICckeCcsIHZhbHVlOiBcImxvdyBzdXJyb2dhdGVzXCIsICB9XG4gIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4ZmRkMCwgaGk6ICAgIDB4ZmRlZiwga2V5OiAnJHgnLCB2YWx1ZTogXCJub25jaGFyYWN0ZXJzXCIsICAgfVxuICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGZmZmUsIGhpOiAgICAweGZmZmYsIGtleTogJyR4JywgdmFsdWU6IFwibm9uY2hhcmFjdGVyc1wiLCAgIH1cbiAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogIDB4MTEwMDAwLCBoaTogK0luZmluaXR5LCBrZXk6ICckeCcsIHZhbHVlOiBcImV4Y2Vzc2l2ZSBDSURzXCIsICB9XG4gIDtudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfaG9hcmRfcGx1Z2luX2Jhc2ljczogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEhvYXJkIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAcGx1Z2luczogW1xuICAgICAgICBkYnJpY19ob2FyZF9wbHVnaW5cbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaCA9IEhvYXJkLnJlYnVpbGQoKVxuICAgIEBlcSAoIM6pZGJyaF9fXzEgPSAtPiAnc3RkX2dldF90YWJsZXMnICAgICAgICAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX18yID0gLT4gJ2hyZF9maW5kX3J1bnMnICAgICAgICAgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX19fMyA9IC0+ICdfaHJkX2luc2VydF9ydW4nICAgICAgICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzQgPSAtPiAnaHJkX2ZpbmRfY292ZXJpbmdfcnVucycgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGluc2VydF91bmljb2RlX2V4Y2x1c2lvbnMgaFxuICAgIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgLTB4MDAwYSwgaGk6ICAgIDB4MDAwMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgICAgICB9XG4gICAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHgwMDAwLCBoaTogICAgMHgwMDBhLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInLCAgICAgIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBlY2hvIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBoLnN0YXRlbWVudHMuaHJkX2ZpbmRfcnVuc1xuICAgICAgcm93cyA9IGgud2FsayBoLnN0YXRlbWVudHMuaHJkX2ZpbmRfcnVuc1xuICAgICAgQGVxICggzqlkYnJoX19fNSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTEnLCBpbm9ybjogMSwgbG86IC1JbmZpbml0eSwgaGk6IC0xLCBrZXk6ICckeCcsIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycgfVxuICAgICAgQGVxICggzqlkYnJoX19fNiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTgnLCBpbm9ybjogOCwgbG86IC0xMCwgaGk6IDAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicgfVxuICAgICAgQGVxICggzqlkYnJoX19fNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTInLCBpbm9ybjogMiwgbG86IDAsIGhpOiAwLCBrZXk6ICckeCcsIHZhbHVlOiAnemVybyBieXRlcycgfVxuICAgICAgQGVxICggzqlkYnJoX19fOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTknLCBpbm9ybjogOSwgbG86IDAsIGhpOiAxMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJyB9XG4gICAgICBAZXEgKCDOqWRicmhfX185ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MycsIGlub3JuOiAzLCBsbzogNTUyOTYsIGhpOiA1NjMxOSwga2V5OiAnJHgnLCB2YWx1ZTogJ2hpZ2ggc3Vycm9nYXRlcycgfVxuICAgICAgQGVxICggzqlkYnJoX18xMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTQnLCBpbm9ybjogNCwgbG86IDU2MzIwLCBoaTogNTczNDMsIGtleTogJyR4JywgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycgfVxuICAgICAgQGVxICggzqlkYnJoX18xMSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTUnLCBpbm9ybjogNSwgbG86IDY0OTc2LCBoaTogNjUwMDcsIGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzEyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NicsIGlub3JuOiA2LCBsbzogNjU1MzQsIGhpOiA2NTUzNSwga2V5OiAnJHgnLCB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj03JywgaW5vcm46IDcsIGxvOiAxMTE0MTEyLCBoaTogSW5maW5pdHksIGtleTogJyR4JywgdmFsdWU6ICdleGNlc3NpdmUgQ0lEcycgfVxuICAgICAgQGVxICggzqlkYnJoX18xNCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2hvYXJkX3BsdWdpbl9ub3JtYWxpemF0aW9uX2FuZF9jb25mbGljdF9kZXRlY3Rpb25fMjogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEhvYXJkIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAcGx1Z2luczogW1xuICAgICAgICBkYnJpY19ob2FyZF9wbHVnaW5cbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmRfdiBleHRlbmRzIEhvYXJkXG4gICAgICB2aXN1YWxpemU6ICh7IGxvLCBoaSwgfSkgLT5cbiAgICAgICAgZmFjZXRfZnJvbV9yb3cgICAgPSAoIHJvdyApIC0+IFwiI3tyb3cua2V5fToje3Jvdy52YWx1ZV9qc29ufVwiXG4gICAgICAgIGZhY2V0c19mcm9tX3Jvd3MgID0gKCByb3dzICkgLT4gbmV3IFNldCBbICggbmV3IFNldCAoICggZmFjZXRfZnJvbV9yb3cgcm93ICkgZm9yIHJvdyBmcm9tIHJvd3MgKSApLi4uLCBdLnNvcnQoKVxuICAgICAgICBnbG9iYWxfZmFjZXRzICAgICA9IGZhY2V0c19mcm9tX3Jvd3MgQGhyZF9maW5kX2NvdmVyaW5nX3J1bnMgbG8sIGhpXG4gICAgICAgIGdsb2JhbF93aWR0aCAgICAgID0gaGkgLSBsb1xuICAgICAgICBjb2xvcnMgICAgICAgICAgICA9XG4gICAgICAgICAgZmFsbGJhY2s6ICAgKCBQLi4uICkgLT4gR1VZLnRybS5ncmV5ICBQLi4uXG4gICAgICAgICAgd2FybjogICAgICAgKCBQLi4uICkgLT4gR1VZLnRybS5yZWQgICBQLi4uXG4gICAgICAgICAgaW46ICAgICAgICAgKCBQLi4uICkgLT4gR1VZLnRybS5nb2xkICBQLi4uXG4gICAgICAgICAgb3V0OiAgICAgICAgKCBQLi4uICkgLT4gR1VZLnRybS5ibHVlICBQLi4uXG4gICAgICAgICAgcnVuOiAgICAgICAgKCBQLi4uICkgLT4gR1VZLnRybS5ncmV5ICBQLi4uXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgeyByb3dfY291bnQsIH0gPSBAZ2V0X2ZpcnN0IFNRTFwic2VsZWN0IGNvdW50KCopIGFzIHJvd19jb3VudCBmcm9tIGhyZF9ydW5zO1wiXG4gICAgICAgIGVjaG8oKVxuICAgICAgICBlY2hvIEdVWS50cm0ud2hpdGUgR1VZLnRybS5yZXZlcnNlIEdVWS50cm0uYm9sZCBcIiBob2FyZCB3aXRoICN7cm93X2NvdW50fSBydW5zIFwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZm9yIGdsb2JhbF9mYWNldCBmcm9tIGdsb2JhbF9mYWNldHNcbiAgICAgICAgICBnZnBoICAgICAgPSAnICcucmVwZWF0IGdsb2JhbF9mYWNldC5sZW5ndGhcbiAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgIHN0YXRlbWVudCA9IFNRTFwiXCJcIlxuICAgICAgICAgICAgc2VsZWN0ICogZnJvbSBocmRfcnVuc1xuICAgICAgICAgICAgICB3aGVyZSB0cnVlXG4gICAgICAgICAgICAgICAgYW5kICggZmFjZXQgPSAkZ2xvYmFsX2ZhY2V0IClcbiAgICAgICAgICAgICAgICBhbmQgKCBsbyA8PSAkaGkgKVxuICAgICAgICAgICAgICAgIGFuZCAoIGhpID49ICRsbyApXG4gICAgICAgICAgICAgIC0tIG9yZGVyIGJ5IGhpIC0gbG8gYXNjLCBsbyBkZXNjLCBrZXksIHZhbHVlXG4gICAgICAgICAgICAgIG9yZGVyIGJ5IGlub3JuIGRlc2NcbiAgICAgICAgICAgICAgO1wiXCJcIlxuICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgcG9pbnRzID0gJydcbiAgICAgICAgICBmb3IgY2lkIGluIFsgbG8gLi4gaGkgXVxuICAgICAgICAgICAgbG9jYWxfa2V5cyAgPSBmYWNldHNfZnJvbV9yb3dzIEBocmRfZmluZF9jb3ZlcmluZ19ydW5zIGNpZFxuICAgICAgICAgICAgY2hyICAgICAgICAgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWRcbiAgICAgICAgICAgIGNvbG9yICAgICAgID0gaWYgKCBsb2NhbF9rZXlzLmhhcyBnbG9iYWxfZmFjZXQgKSB0aGVuIGNvbG9ycy5pbiBlbHNlIGNvbG9ycy5vdXRcbiAgICAgICAgICAgIHBvaW50cyAgICAgKz0gY29sb3IgY2hyXG4gICAgICAgICAgZWNobyBmXCIje2dsb2JhbF9mYWNldH06PDE1YzsgI3snICd9Oj42YzsgI3twb2ludHN9XCJcbiAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgIGZvciByb3cgZnJvbSBAd2FsayBzdGF0ZW1lbnQsIHsgZ2xvYmFsX2ZhY2V0LCBsbywgaGksIH1cbiAgICAgICAgICAgIGlkICAgICAgICAgID0gcm93LnJvd2lkLnJlcGxhY2UgL14uKj89KFxcZCspLywgJ1skMV0nXG4gICAgICAgICAgICBmaXJzdCAgICAgICA9ICggTWF0aC5tYXggcm93LmxvLCBsbyApIC0gbG9cbiAgICAgICAgICAgIGxhc3QgICAgICAgID0gKCBNYXRoLm1pbiByb3cuaGksIGhpICkgLSBsb1xuICAgICAgICAgICAgbGVmdCAgICAgICAgPSBHVVkudHJtLmdyZXkgR1VZLnRybS5yZXZlcnNlICfwn66KJy5yZXBlYXQgZmlyc3RcbiAgICAgICAgICAgICMgbGVmdCAgICAgICAgPSBHVVkudHJtLmdyZXkgJ+KUgicucmVwZWF0IGZpcnN0XG4gICAgICAgICAgICBtaWQgICAgICAgICA9IEdVWS50cm0uZ29sZCAn8J+uiicucmVwZWF0IGxhc3QgLSBmaXJzdCArIDFcbiAgICAgICAgICAgICMgbWlkICAgICAgICAgPSBHVVkudHJtLmdvbGQgJ+KZpicucmVwZWF0IGxhc3QgLSBmaXJzdCArIDFcbiAgICAgICAgICAgICMgbWlkICAgICAgICAgPSBHVVkudHJtLmdvbGQgJ+KWiCcucmVwZWF0IGxhc3QgLSBmaXJzdCArIDFcbiAgICAgICAgICAgIHJpZ2h0ICAgICAgID0gR1VZLnRybS5ncmV5IEdVWS50cm0ucmV2ZXJzZSAn8J+uiicucmVwZWF0ICggZ2xvYmFsX3dpZHRoIC0gbGFzdCArIDEgKVxuICAgICAgICAgICAgZWNobyBjb2xvcnMucnVuIGZcIiN7Z2ZwaH06PDE1YzsgI3tpZH06PjZjOyAje2xlZnR9I3ttaWR9I3tyaWdodH1cIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHBydl9wb2ludCA9IDBcbiAgICAgICAgbGluZSAgICAgID0gJydcbiAgICAgICAgZm9yIHsgcG9pbnQsIH0gZnJvbSBAd2FsayBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2luc3BlY3Rpb25fcG9pbnRzO1wiXG4gICAgICAgICAgcG9pbnQgIC09IGxvXG4gICAgICAgICAgZGVsdGEgICA9IE1hdGgubWF4IDAsIHBvaW50IC0gcHJ2X3BvaW50IC0gMVxuICAgICAgICAgIGxpbmUgICArPSAnICcucmVwZWF0IGRlbHRhXG4gICAgICAgICAgbGluZSAgICs9IEdVWS50cm0uZ29sZCAn4payJ1xuICAgICAgICAgIHBydl9wb2ludCA9IHBvaW50XG4gICAgICAgIGVjaG8gY29sb3JzLnJ1biBmXCIje2dmcGh9OjwxNWM7ICN7Jyd9Oj42YzsgI3tsaW5lfVwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoICAgICAgICAgICAgICAgICA9IEhvYXJkX3YucmVidWlsZCgpXG4gICAgICBjb2xvcnNfYnlfZmFjZXRzICA9XG4gICAgICAgICd2b3dlbDp0cnVlJzogICAgIEdVWS50cm0uZ29sZFxuICAgICAgICAndm93ZWw6ZmFsc2UnOiAgICBHVVkudHJtLmJsdWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgKCBjaWRfb2YgJ1onICksICd2b3dlbCcsIGZhbHNlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdhJyApLCAoIGNpZF9vZiAneicgKSwgJ3Zvd2VsJywgZmFsc2VcbiAgICAgICMgaC52aXN1YWxpemUgeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAneicgKSwgfVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgbnVsbCwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgbnVsbCwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnRScgKSwgbnVsbCwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnSScgKSwgbnVsbCwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnTycgKSwgbnVsbCwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnVScgKSwgbnVsbCwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnTicgKSwgKCBjaWRfb2YgJ1onICksICd1cHBlcicsIHRydWVcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksICggY2lkX29mICdEJyApLCAndmdyb3VwJywgJ0EnXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdJJyApLCAoIGNpZF9vZiAnTicgKSwgJ3Zncm91cCcsICdJJ1xuICAgICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ydW5zIG9yZGVyIGJ5IGxvO1wiXG4gICAgICAjIGgudmlzdWFsaXplIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ3onICksIH1cbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnVScgKSwgbnVsbCwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgIyBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ2EnICksIG51bGwsICd2b3dlbCcsIHRydWVcbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnZCcgKSwgbnVsbCwgJ3Zvd2VsJywgZmFsc2VcbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAndScgKSwgbnVsbCwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdjJyApLCAoIGNpZF9vZiAneCcgKSwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgIyBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ2InICksIG51bGwsICd2b3dlbCcsIGZhbHNlXG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ2MnICksIG51bGwsICd2b3dlbCcsIGZhbHNlXG4gICAgICAjIGgudmlzdWFsaXplIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ3onICksIH1cbiAgICAgICMgIyBmb3IgcG9pbnQgaW4gWyAoIGNpZF9vZiAnQScgKSAuLiAoIGNpZF9vZiAneicgKSBdXG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksICggY2lkX29mICdaJyApLCAnZXZlbicsIHRydWVcbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgbnVsbCwgJ2V2ZW4nLCBmYWxzZVxuICAgICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdDJyApLCBudWxsLCAnZXZlbicsIGZhbHNlXG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0UnICksIG51bGwsICdldmVuJywgZmFsc2VcbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnRycgKSwgbnVsbCwgJ2V2ZW4nLCBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHsgbWluLCBtYXgsIH0gICAgID0gaC5ocmRfZ2V0X21pbl9tYXgoKVxuICAgICAga2V5dmFsdWVfYnlfZmFjZXQgPSBoLl9ocmRfZ2V0X2tleXZhbHVlX2J5X2ZhY2V0KClcbiAgICAgIGZhY2V0c19ieV9wb2ludCAgID0gaC5faHJkX21hcF9mYWNldHNfb2ZfaW5zcGVjdGlvbl9wb2ludHMoKVxuICAgICAgZmFjZXRzICAgICAgICAgICAgPSBPYmplY3Qua2V5cyBoLl9ocmRfZ2V0X2ZhbWlsaWVzKCkgIyMjIFRBSU5UIHVzZSBfZ2V0X2ZhY2V0cyAjIyNcbiAgICAgIGxvcG9pbnRzICAgICAgICAgID0gT2JqZWN0LmZyb21FbnRyaWVzICggWyBmYWNldCwgbnVsbCwgXSBmb3IgZmFjZXQgaW4gZmFjZXRzIClcbiAgICAgIG5ld19ydW5zICAgICAgICAgID0gW11cbiAgICAgIGZvciBmYWNldCBpbiBmYWNldHNcbiAgICAgICAgeyBrZXksIHZhbHVlLCB9ID0ga2V5dmFsdWVfYnlfZmFjZXRbIGZhY2V0IF1cbiAgICAgICAgIyBkZWJ1ZygpXG4gICAgICAgICMgZGVidWcgJ86pZGJyaF9fMTYnLCByZXZlcnNlIGZhY2V0XG4gICAgICAgIGZvciBbIHBvaW50LCBwb2ludF9mYWNldHMsIF0gZnJvbSBmYWNldHNfYnlfcG9pbnRcbiAgICAgICAgICBjaHIgICAgICAgICA9IFN0cmluZy5mcm9tQ29kZVBvaW50IHBvaW50XG4gICAgICAgICAgaGFzX2ZhY2V0ICAgPSBwb2ludF9mYWNldHMuaGFzIGZhY2V0XG4gICAgICAgICAgaWYgaGFzX2ZhY2V0XG4gICAgICAgICAgICBpZiBub3QgbG9wb2ludHNbIGZhY2V0IF0/XG4gICAgICAgICAgICAgIGxvcG9pbnRzWyBmYWNldCBdID0gcG9pbnRcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBpZiBsb3BvaW50c1sgZmFjZXQgXT9cbiAgICAgICAgICAgICAgbG8gICAgICAgICAgICAgICAgPSBsb3BvaW50c1sgZmFjZXQgXVxuICAgICAgICAgICAgICBoaSAgICAgICAgICAgICAgICA9IHBvaW50IC0gMVxuICAgICAgICAgICAgICBuZXdfcnVucy5wdXNoIHsgZmFjZXQsIGtleSwgdmFsdWUsIGxvLCBoaSwgfVxuICAgICAgICAgICAgICBsb3BvaW50c1sgZmFjZXQgXSA9IG51bGxcbiAgICAgICAgICAgICAgIyBsb19jaHIgID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgbG9cbiAgICAgICAgICAgICAgIyBoaV9jaHIgID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgaGlcbiAgICAgICAgICAgICAgIyBkZWJ1ZyAnzqlkYnJoX18xNicsICggcnByIGNociApLCBwb2ludCwgKCBycHIgbG9fY2hyICksICggcnByIGhpX2NociApLCBsbywgaGlcbiAgICAgIGZvciBmYWNldCwgbG8gb2YgbG9wb2ludHMgd2hlbiBsbz9cbiAgICAgICAgeyBrZXksIHZhbHVlLCB9ID0ga2V5dmFsdWVfYnlfZmFjZXRbIGZhY2V0IF1cbiAgICAgICAgbmV3X3J1bnMucHVzaCB7IGZhY2V0LCBrZXksIHZhbHVlLCBsbywgaGk6IG1heCwgfVxuICAgICAgaC5ocmRfZGVsZXRlX3J1bnMoKVxuICAgICAgZm9yIHsgZmFjZXQsIGtleSwgdmFsdWUsIGxvLCBoaSwgfSBmcm9tIG5ld19ydW5zXG4gICAgICAgIGguaHJkX2FkZF9ydW4gbG8sIGhpLCBrZXksIHZhbHVlXG4gICAgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX3RvcHJ1bnM7XCJcbiAgICAgIGgudmlzdWFsaXplIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ3onICksIH1cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGRvX2NvdmVyYWdlID0gdHJ1ZVxuICBkb19jb3ZlcmFnZSA9IGZhbHNlXG4gIGlmIGRvX2NvdmVyYWdlXG4gICAgeyBDb3ZlcmFnZV9hbmFseXplciwgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvY292ZXJhZ2UtYW5hbHl6ZXInXG4gICAgY2EgPSBuZXcgQ292ZXJhZ2VfYW5hbHl6ZXIoKVxuICAgICMgY2Eud3JhcF9jbGFzcyBEYnJpY19zdGRcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb25fYW5kX2NvbmZsaWN0X2RldGVjdGlvbl8yOiB0ZXN0cy5kYnJpY19ob2FyZF9wbHVnaW5fbm9ybWFsaXphdGlvbl9hbmRfY29uZmxpY3RfZGV0ZWN0aW9uXzIsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2R5bmFtaWNfYnVpbGRfcHJvcGVydGllczogdGVzdHMuZGJyaWNfZHluYW1pY19idWlsZF9wcm9wZXJ0aWVzLCB9XG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaWYgZG9fY292ZXJhZ2VcbiAgICB3YXJuICfOqWRicmhfXzIxJywgXCJub3QgY292ZXJlZDpcIiwgcmV2ZXJzZSBuYW1lIGZvciBuYW1lIGluIGNhLnVudXNlZF9uYW1lcyBpZiBjYS51bnVzZWRfbmFtZXMubGVuZ3RoID4gMFxuICAgICMgaGVscCAnzqlkYnJoX18yMicsIGNhLnVzZWRfbmFtZXNcbiAgICAjIHVyZ2UgJ86pZGJyaF9fMjMnLCBjb3VudCwgbmFtZXMgZm9yIGNvdW50LCBuYW1lcyBvZiBjYS5uYW1lc19ieV9jb3VudHNcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICA7bnVsbFxuXG5cbiJdfQ==
