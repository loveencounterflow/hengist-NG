(async function() {
  'use strict';
  var Dbric, Dbric_std, FS, False, GTNG, GUY, IDN, LIT, PATH, SFMODULES, SQL, Test, True, VEC, alert, as_bool, blue, bold, cid_of, dbric_hoard_plugin, debug, echo, f, from_bool, gold, green, grey, help, info, insert_unicode_exclusions, inspect, log, nfa, plain, praise, red, reverse, rpr, show_colorized_chr_string, tests, type_of, unquote_name, urge, warn, whisper, white,
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
  show_colorized_chr_string = function(hoard, lo, hi, colors_by_facets) {
    var chr, chr_string, cid, color, facet, fallback_color, i, r, ref, ref1, ref2, rows, warn_color;
    fallback_color = GUY.trm.grey;
    warn_color = GUY.trm.red;
    chr_string = '';
//.........................................................................................................
    for (cid = i = ref = lo, ref1 = hi; (ref <= ref1 ? i <= ref1 : i >= ref1); cid = ref <= ref1 ? ++i : --i) {
      chr = String.fromCodePoint(cid);
      rows = [...(hoard.hrd_find_overlaps(cid))];
      //.......................................................................................................
      if (rows.length === 1) {
        facet = `${rows[0].key}:${rows[0].value_json}`;
        color = (ref2 = colors_by_facets[facet]) != null ? ref2 : fallback_color;
      } else {
        if (rows.length === 0) {
          urge(`Ωdbrh___1 ${rpr(chr)}: found no facets`);
        } else {
          urge(`Ωdbrh___2 ${rpr(chr)}: found facets:`, ((function() {
            var j, len, results;
            results = [];
            for (j = 0, len = rows.length; j < len; j++) {
              r = rows[j];
              results.push(`${r.key}:${r.value_json}`);
            }
            return results;
          })()).join(';'));
        }
        color = warn_color;
      }
      chr_string += color(chr);
    }
    //.........................................................................................................
    return debug('Ωdbrh___3', chr_string);
  };

  //===========================================================================================================
  insert_unicode_exclusions = function(h) {
    h.statements.hrd_insert_run.run({
      lo: -2e308,
      hi: -1,
      key: '$x',
      value: "negative CIDs"
    });
    h.statements.hrd_insert_run.run({
      lo: 0x0000,
      hi: 0x0000,
      key: '$x',
      value: "zero bytes"
    });
    h.statements.hrd_insert_run.run({
      lo: 0xd800,
      hi: 0xdbff,
      key: '$x',
      value: "high surrogates"
    });
    h.statements.hrd_insert_run.run({
      lo: 0xdc00,
      hi: 0xdfff,
      key: '$x',
      value: "low surrogates"
    });
    h.statements.hrd_insert_run.run({
      lo: 0xfdd0,
      hi: 0xfdef,
      key: '$x',
      value: "noncharacters"
    });
    h.statements.hrd_insert_run.run({
      lo: 0xfffe,
      hi: 0xffff,
      key: '$x',
      value: "noncharacters"
    });
    h.statements.hrd_insert_run.run({
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
      var Hoard, h, Ωdbrh___4, Ωdbrh___5, Ωdbrh___6, Ωdbrh___7, Ωdbrh___8, Ωdbrh___9;
      Hoard = (function() {
        //.......................................................................................................
        class Hoard extends Dbric_std {};

        Hoard.plugins = [dbric_hoard_plugin];

        return Hoard;

      }).call(this);
      //.......................................................................................................
      h = Hoard.rebuild();
      this.eq((Ωdbrh___4 = function() {
        return indexOf.call(Object.keys(h.statements), 'std_get_tables') >= 0;
      }), true);
      this.eq((Ωdbrh___5 = function() {
        return indexOf.call(Object.keys(h.statements), 'hrd_find_runs') >= 0;
      }), true);
      this.eq((Ωdbrh___6 = function() {
        return indexOf.call(Object.keys(h.statements), 'hrd_insert_run') >= 0;
      }), true);
      this.eq((Ωdbrh___7 = function() {
        return indexOf.call(Object.keys(h.statements), 'hrd_find_overlaps') >= 0;
      }), true);
      this.eq((Ωdbrh___8 = function() {
        return indexOf.call(Object.keys(h.statements), 'hrd_find_overlaps_for_key') >= 0;
      }), true);
      this.eq((Ωdbrh___9 = function() {
        return indexOf.call(Object.keys(h.statements), 'hrd_find_runs_with_conflicts_1') >= 0;
      }), true);
      //.......................................................................................................
      insert_unicode_exclusions(h);
      h.statements.hrd_insert_run.run({
        lo: -0x000a,
        hi: 0x0000,
        key: 'foo',
        value: '"bar"'
      });
      h.statements.hrd_insert_run.run({
        lo: 0x0000,
        hi: 0x000a,
        key: 'foo',
        value: '"bar"'
      });
      (() => {        //.......................................................................................................
        var rows, Ωdbrh__10, Ωdbrh__11, Ωdbrh__12, Ωdbrh__13, Ωdbrh__14, Ωdbrh__15, Ωdbrh__16, Ωdbrh__17, Ωdbrh__18, Ωdbrh__19;
        // echo row for row from rows = h.walk h.statements.hrd_find_runs
        rows = h.walk(h.statements.hrd_find_runs);
        this.eq((Ωdbrh__10 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=-Infinity,-000001,$x',
          lo: -2e308,
          hi: -1,
          key: '$x',
          value: 'negative CIDs'
        });
        this.eq((Ωdbrh__11 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=-00000a,+000000,foo',
          lo: -10,
          hi: 0,
          key: 'foo',
          value: '"bar"'
        });
        this.eq((Ωdbrh__12 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000000,+000000,$x',
          lo: 0,
          hi: 0,
          key: '$x',
          value: 'zero bytes'
        });
        this.eq((Ωdbrh__13 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000000,+00000a,foo',
          lo: 0,
          hi: 10,
          key: 'foo',
          value: '"bar"'
        });
        this.eq((Ωdbrh__14 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00d800,+00dbff,$x',
          lo: 55296,
          hi: 56319,
          key: '$x',
          value: 'high surrogates'
        });
        this.eq((Ωdbrh__15 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00dc00,+00dfff,$x',
          lo: 56320,
          hi: 57343,
          key: '$x',
          value: 'low surrogates'
        });
        this.eq((Ωdbrh__16 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00fdd0,+00fdef,$x',
          lo: 64976,
          hi: 65007,
          key: '$x',
          value: 'noncharacters'
        });
        this.eq((Ωdbrh__17 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00fffe,+00ffff,$x',
          lo: 65534,
          hi: 65535,
          key: '$x',
          value: 'noncharacters'
        });
        this.eq((Ωdbrh__18 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+110000,+Infinity,$x',
          lo: 1114112,
          hi: 2e308,
          key: '$x',
          value: 'excessive CIDs'
        });
        this.eq((Ωdbrh__19 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var find_overlaps, hi, i, lo, matcher, n, ref, ref1, result, rowid, seen, y, Ωdbrh__22, Ωdbrh__23;
        find_overlaps = h.statements.hrd_find_overlaps;
        // debug 'Ωdbrh__20', row for row from rows = h.walk find_overlaps, { lo: -0x1, hi: 0x0b, }
        // debug 'Ωdbrh__21', row for row from rows = h.walk find_overlaps, { lo: -0x1, hi: 0x0b, }
        //.....................................................................................................
        lo = -0x0001;
        hi = +0x000b;
        seen = new Set();
        matcher = [];
        for (n = i = ref = lo, ref1 = hi; (ref <= ref1 ? i <= ref1 : i >= ref1); n = ref <= ref1 ? ++i : --i) {
          for (y of h.walk(find_overlaps, {
            lo: n,
            hi: n
          })) {
            ({rowid} = y);
            if (!seen.has(rowid)) {
              matcher.push(rowid);
            }
            seen.add(rowid);
          }
        }
        this.eq((Ωdbrh__22 = function() {
          return matcher.length;
        }), 4);
        //.....................................................................................................
        result = [
          ...((function() {
            var results,
          z;
            results = [];
            for (z of h.walk(find_overlaps, {lo, hi})) {
              ({rowid} = z);
              results.push(rowid);
            }
            return results;
          })())
        ];
        this.eq((Ωdbrh__23 = function() {
          return result;
        }), matcher);
        return null;
      })();
      (() => {        //.......................................................................................................
        var e, find_conflicts, find_overlaps, matcher, result, row, rows, seen, Ωdbrh__24, Ωdbrh__25, Ωdbrh__26, Ωdbrh__27, Ωdbrh__28, Ωdbrh__29, Ωdbrh__31, Ωdbrh__32, Ωdbrh__33, Ωdbrh__34, Ωdbrh__35, Ωdbrh__36, Ωdbrh__37, Ωdbrh__38, Ωdbrh__39;
        find_overlaps = h.statements.hrd_find_overlaps;
        find_conflicts = h.statements.hrd_find_runs_with_conflicts_1;
        //.....................................................................................................
        this.eq((Ωdbrh__24 = function() {
          var row;
          return [
            ...((function() {
              var results;
              results = [];
              for (row of h.walk(find_conflicts)) {
                results.push(row);
              }
              return results;
            })())
          ];
        }), []);
        this.eq((Ωdbrh__25 = function() {
          return [...(h.hrd_find_runs_with_conflicts_1())];
        }), []);
        this.eq((Ωdbrh__26 = function() {
          return h.hrd_validate_1();
        }), null);
        h.statements.hrd_insert_run.run({
          lo: -0x000a,
          hi: +0x0003,
          key: 'foo',
          value: '"fuz"'
        });
        //.....................................................................................................
        seen = new Set();
        matcher = [
          {
            key: 'foo',
            value_a: '"bar"',
            value_b: '"fuz"'
          },
          {
            key: 'foo',
            value_a: '"bar"',
            value_b: '"fuz"'
          }
        ];
        //.....................................................................................................
        result = [];
        for (row of h.walk(find_conflicts)) {
          result.push({
            key: row.key_a,
            value_a: row.value_a,
            value_b: row.value_b
          });
        }
        // echo row for row from result
        this.eq((Ωdbrh__27 = function() {
          return result;
        }), matcher);
        //.....................................................................................................
        result = [];
        for (row of h.hrd_find_runs_with_conflicts_1()) {
          result.push({
            key: row.key_a,
            value_a: row.value_a,
            value_b: row.value_b
          });
        }
        // echo row for row from result
        this.eq((Ωdbrh__28 = function() {
          return result;
        }), matcher);
        //.....................................................................................................
        this.throws((Ωdbrh__29 = function() {
          return h.hrd_validate_1();
        }), /found conflicts/);
        try {
          h.hrd_validate_1();
        } catch (error) {
          e = error;
          warn('Ωdbrh__30', e.message);
        }
        // echo row for row from h.walk SQL"select * from _hrd_family_has_conflict_1;"
        rows = h.walk(SQL`select * from _hrd_family_has_conflict_1;`);
        this.eq((Ωdbrh__31 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'excessive CIDs',
          has_conflict: 0
        });
        this.eq((Ωdbrh__32 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'high surrogates',
          has_conflict: 0
        });
        this.eq((Ωdbrh__33 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'low surrogates',
          has_conflict: 0
        });
        this.eq((Ωdbrh__34 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'negative CIDs',
          has_conflict: 0
        });
        this.eq((Ωdbrh__35 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'noncharacters',
          has_conflict: 0
        });
        this.eq((Ωdbrh__36 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'zero bytes',
          has_conflict: 0
        });
        this.eq((Ωdbrh__37 = function() {
          return rows.next().value;
        }), {
          key: 'foo',
          value: '"bar"',
          has_conflict: 1
        });
        this.eq((Ωdbrh__38 = function() {
          return rows.next().value;
        }), {
          key: 'foo',
          value: '"fuz"',
          has_conflict: 1
        });
        this.eq((Ωdbrh__39 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var results, row, rows;
        results = [];
        for (row of rows = h.hrd_find_runs_with_conflicts_1()) {
          results.push(echo(row));
        }
        return results;
      })();
      // rows = h.hrd_family_conflicts_1()
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    dbric_hoard_plugin_groups: function() {
      var Hoard, h;
      Hoard = (function() {
        //.......................................................................................................
        class Hoard extends Dbric_std {};

        Hoard.plugins = [dbric_hoard_plugin];

        return Hoard;

      }).call(this);
      //.......................................................................................................
      h = Hoard.rebuild();
      insert_unicode_exclusions(h);
      h.statements.hrd_insert_run.run({
        lo: -0x000a,
        hi: 0x0000,
        key: 'foo',
        value: '"bar"'
      });
      h.statements.hrd_insert_run.run({
        lo: 0x0000,
        hi: 0x000a,
        key: 'foo',
        value: '"bar"'
      });
      h.statements.hrd_insert_run.run({
        lo: 0x0000,
        hi: 0x000a,
        key: 'nice',
        value: 'true'
      });
      (() => {        //.......................................................................................................
        var rows, Ωdbrh__40, Ωdbrh__41, Ωdbrh__42, Ωdbrh__43, Ωdbrh__44, Ωdbrh__45, Ωdbrh__46, Ωdbrh__47, Ωdbrh__48;
        // echo row for row from rows = h.walk h.statements._hrd_facet_groups
        rows = h.walk(h.statements._hrd_facet_groups);
        this.eq((Ωdbrh__40 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'excessive CIDs',
          runs: 1
        });
        this.eq((Ωdbrh__41 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'high surrogates',
          runs: 1
        });
        this.eq((Ωdbrh__42 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'low surrogates',
          runs: 1
        });
        this.eq((Ωdbrh__43 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'negative CIDs',
          runs: 1
        });
        this.eq((Ωdbrh__44 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'noncharacters',
          runs: 2
        });
        this.eq((Ωdbrh__45 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'zero bytes',
          runs: 1
        });
        this.eq((Ωdbrh__46 = function() {
          return rows.next().value;
        }), {
          key: 'foo',
          value: '"bar"',
          runs: 2
        });
        this.eq((Ωdbrh__47 = function() {
          return rows.next().value;
        }), {
          key: 'nice',
          value: 'true',
          runs: 1
        });
        this.eq((Ωdbrh__48 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      (() => {        // #.......................................................................................................
        // do =>
        //   # echo row for row from rows = h.hrd_find_runs_by_group()
        //   rows = h.hrd_find_runs_by_group()
        //   @eq ( Ωdbrh__49 = -> rows.next().value  ), { key: '$x', value: 'excessive CIDs', runs: [ { rowid: 't:hrd:runs:V=+110000,+Infinity,$x', lo: 1114112, hi: Infinity, key: '$x', value: 'excessive CIDs' } ] }
        //   @eq ( Ωdbrh__50 = -> rows.next().value  ), { key: '$x', value: 'high surrogates', runs: [ { rowid: 't:hrd:runs:V=+00d800,+00dbff,$x', lo: 55296, hi: 56319, key: '$x', value: 'high surrogates' } ] }
        //   @eq ( Ωdbrh__51 = -> rows.next().value  ), { key: '$x', value: 'low surrogates', runs: [ { rowid: 't:hrd:runs:V=+00dc00,+00dfff,$x', lo: 56320, hi: 57343, key: '$x', value: 'low surrogates' } ] }
        //   @eq ( Ωdbrh__52 = -> rows.next().value  ), { key: '$x', value: 'negative CIDs', runs: [ { rowid: 't:hrd:runs:V=-Infinity,-000001,$x', lo: -Infinity, hi: -1, key: '$x', value: 'negative CIDs' } ] }
        //   @eq ( Ωdbrh__53 = -> rows.next().value  ), { key: '$x', value: 'noncharacters', runs: [ { rowid: 't:hrd:runs:V=+00fdd0,+00fdef,$x', lo: 64976, hi: 65007, key: '$x', value: 'noncharacters' }, { rowid: 't:hrd:runs:V=+00fffe,+00ffff,$x', lo: 65534, hi: 65535, key: '$x', value: 'noncharacters' } ] }
        //   @eq ( Ωdbrh__54 = -> rows.next().value  ), { key: '$x', value: 'zero bytes', runs: [ { rowid: 't:hrd:runs:V=+000000,+000000,$x', lo: 0, hi: 0, key: '$x', value: 'zero bytes' } ] }
        //   @eq ( Ωdbrh__55 = -> rows.next().value  ), { key: 'foo', value: '"bar"', runs: [ { rowid: 't:hrd:runs:V=-00000a,+000000,foo', lo: -10, hi: 0, key: 'foo', value: '"bar"' }, { rowid: 't:hrd:runs:V=+000000,+00000a,foo', lo: 0, hi: 10, key: 'foo', value: '"bar"' } ] }
        //   @eq ( Ωdbrh__56 = -> rows.next().value  ), { key: 'nice', value: 'true', runs: [ { rowid: 't:hrd:runs:V=+000000,+00000a,nice', lo: 0, hi: 10, key: 'nice', value: 'true' } ] }
        //   @eq ( Ωdbrh__57 = -> rows.next().done   ), true
        //   ;null
        //.......................................................................................................
        var rows, Ωdbrh__58, Ωdbrh__59, Ωdbrh__60, Ωdbrh__61, Ωdbrh__62, Ωdbrh__63, Ωdbrh__64, Ωdbrh__65, Ωdbrh__66;
        // echo row for row from rows = h.hrd_find_families()
        rows = h.hrd_find_families();
        this.eq((Ωdbrh__58 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'excessive CIDs',
          first: 1114112,
          last: 2e308,
          runs: 1,
          has_conflict: false,
          is_normal: true
        });
        this.eq((Ωdbrh__59 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'high surrogates',
          first: 55296,
          last: 56319,
          runs: 1,
          has_conflict: false,
          is_normal: true
        });
        this.eq((Ωdbrh__60 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'low surrogates',
          first: 56320,
          last: 57343,
          runs: 1,
          has_conflict: false,
          is_normal: true
        });
        this.eq((Ωdbrh__61 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'negative CIDs',
          first: -2e308,
          last: -1,
          runs: 1,
          has_conflict: false,
          is_normal: true
        });
        this.eq((Ωdbrh__62 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'noncharacters',
          first: 64976,
          last: 65535,
          runs: 2,
          has_conflict: false,
          is_normal: true
        });
        this.eq((Ωdbrh__63 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'zero bytes',
          first: 0,
          last: 0,
          runs: 1,
          has_conflict: false,
          is_normal: true
        });
        this.eq((Ωdbrh__64 = function() {
          return rows.next().value;
        }), {
          key: 'foo',
          value: '"bar"',
          first: -10,
          last: 10,
          runs: 2,
          has_conflict: true,
          is_normal: false
        });
        this.eq((Ωdbrh__65 = function() {
          return rows.next().value;
        }), {
          key: 'nice',
          value: 'true',
          first: 0,
          last: 10,
          runs: 1,
          has_conflict: true,
          is_normal: false
        });
        this.eq((Ωdbrh__66 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    dbric_hoard_plugin_normalization: function() {
      var Hoard;
      Hoard = (function() {
        //.......................................................................................................
        class Hoard extends Dbric_std {};

        Hoard.plugins = [dbric_hoard_plugin];

        return Hoard;

      }).call(this);
      (() => {        //.......................................................................................................
        var h, row, rows, Ωdbrh__68, Ωdbrh__70, Ωdbrh__71, Ωdbrh__73, Ωdbrh__74, Ωdbrh__75, Ωdbrh__76, Ωdbrh__78, Ωdbrh__79, Ωdbrh__80, Ωdbrh__82, Ωdbrh__83, Ωdbrh__84, Ωdbrh__85, Ωdbrh__86, Ωdbrh__87;
        h = Hoard.rebuild();
        for (row of rows = h.walk(SQL`select * from hrd_normalization;`)) {
          //.....................................................................................................
          debug('Ωdbrh__67', row);
        }
        rows = h.walk(SQL`select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;`);
        this.eq((Ωdbrh__68 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.statements.hrd_insert_run.run({
          lo: 0x0010,
          hi: 0x0015,
          key: 'a',
          value: '"A"'
        });
        h.statements.hrd_insert_run.run({
          lo: 0x0020,
          hi: 0x0025,
          key: 'a',
          value: '"A"'
        });
        //.....................................................................................................
        // debug 'Ωdbrh__69', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
        rows = h.walk(SQL`select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;`);
        this.eq((Ωdbrh__70 = function() {
          return rows.next().value;
        }), {
          d: 'a,"A",1'
        });
        this.eq((Ωdbrh__71 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.statements.hrd_insert_run.run({
          lo: 0x0016,
          hi: 0x0016,
          key: 'a',
          value: '"A"'
        });
        //.....................................................................................................
        // debug 'Ωdbrh__72', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
        rows = h.walk(SQL`select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;`);
        this.eq((Ωdbrh__73 = function() {
          return rows.next().value;
        }), {
          d: 'a,"A",0'
        });
        this.eq((Ωdbrh__74 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        rows = h.hrd_find_nonnormal_families();
        this.eq((Ωdbrh__75 = function() {
          return rows.next().value;
        }), {
          key: 'a',
          value: '"A"'
        });
        this.eq((Ωdbrh__76 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.statements.hrd_insert_run.run({
          lo: 0x0010,
          hi: 0x0015,
          key: 'b',
          value: '"B"'
        });
        h.statements.hrd_insert_run.run({
          lo: 0x0020,
          hi: 0x0025,
          key: 'b',
          value: '"B"'
        });
        // debug 'Ωdbrh__77', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
        rows = h.walk(SQL`select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;`);
        this.eq((Ωdbrh__78 = function() {
          return rows.next().value;
        }), {
          d: 'a,"A",0'
        });
        this.eq((Ωdbrh__79 = function() {
          return rows.next().value;
        }), {
          d: 'b,"B",1'
        });
        this.eq((Ωdbrh__80 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.statements.hrd_insert_run.run({
          lo: 0x0012,
          hi: 0x0017,
          key: 'b',
          value: '"B"'
        });
        // debug 'Ωdbrh__81', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
        rows = h.walk(SQL`select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;`);
        this.eq((Ωdbrh__82 = function() {
          return rows.next().value;
        }), {
          d: 'a,"A",0'
        });
        this.eq((Ωdbrh__83 = function() {
          return rows.next().value;
        }), {
          d: 'b,"B",0'
        });
        this.eq((Ωdbrh__84 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        rows = h.hrd_find_nonnormal_families();
        this.eq((Ωdbrh__85 = function() {
          return rows.next().value;
        }), {
          key: 'a',
          value: '"A"'
        });
        this.eq((Ωdbrh__86 = function() {
          return rows.next().value;
        }), {
          key: 'b',
          value: '"B"'
        });
        this.eq((Ωdbrh__87 = function() {
          return rows.next().done;
        }), true);
        for (row of rows = h.hrd_find_families()) {
          //.....................................................................................................
          debug('Ωdbrh__88', row);
        }
        //.....................................................................................................
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    dbric_hoard_plugin_normalization_and_conflict_detection: function() {
      var Hoard;
      Hoard = (function() {
        //.......................................................................................................
        class Hoard extends Dbric_std {};

        Hoard.plugins = [dbric_hoard_plugin];

        return Hoard;

      }).call(this);
      (() => {        //.......................................................................................................
        var chr, chr_string, cid, color, h, i, is_vowel, ref, ref1, row, rows, Ωdbrh_100, Ωdbrh_101, Ωdbrh_102, Ωdbrh_103, Ωdbrh_104, Ωdbrh_105, Ωdbrh_106, Ωdbrh_107, Ωdbrh_108, Ωdbrh_109, Ωdbrh_110, Ωdbrh_111, Ωdbrh_112, Ωdbrh_113, Ωdbrh_114, Ωdbrh_115, Ωdbrh_116, Ωdbrh_117, Ωdbrh_118, Ωdbrh_119, Ωdbrh_120, Ωdbrh_121, Ωdbrh_122, Ωdbrh_123, Ωdbrh_124, Ωdbrh_125, Ωdbrh_126, Ωdbrh_127, Ωdbrh_128, Ωdbrh_129, Ωdbrh_130, Ωdbrh_131, Ωdbrh__89, Ωdbrh__90, Ωdbrh__91, Ωdbrh__92, Ωdbrh__93, Ωdbrh__94, Ωdbrh__95, Ωdbrh__96, Ωdbrh__97, Ωdbrh__98, Ωdbrh__99;
        h = Hoard.rebuild();
        //.....................................................................................................
        h.hrd_add_run(cid_of('A'), cid_of('Z'), 'vowel', false);
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh__89 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+00005a,vowel',
          lo: 65,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh__90 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.hrd_punch_1({
          lo: cid_of('A'),
          hi: cid_of('A'),
          key: 'vowel',
          value: true
        });
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh__91 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+000041,vowel',
          lo: 65,
          hi: 65,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh__92 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000042,+00005a,vowel',
          lo: 66,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh__93 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.hrd_punch_1(cid_of('E'), cid_of('E'), 'vowel', true);
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh__94 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+000041,vowel',
          lo: 65,
          hi: 65,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh__95 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000042,+000044,vowel',
          lo: 66,
          hi: 68,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh__96 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000045,+000045,vowel',
          lo: 69,
          hi: 69,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh__97 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000046,+00005a,vowel',
          lo: 70,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh__98 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.hrd_punch_1(cid_of('I'), cid_of('I'), 'vowel', true);
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh__99 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+000041,vowel',
          lo: 65,
          hi: 65,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_100 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000042,+000044,vowel',
          lo: 66,
          hi: 68,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_101 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000045,+000045,vowel',
          lo: 69,
          hi: 69,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_102 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000046,+000048,vowel',
          lo: 70,
          hi: 72,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_103 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000049,+000049,vowel',
          lo: 73,
          hi: 73,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_104 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00004a,+00005a,vowel',
          lo: 74,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_105 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.hrd_punch_1(cid_of('O'), cid_of('O'), 'vowel', true);
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh_106 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+000041,vowel',
          lo: 65,
          hi: 65,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_107 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000042,+000044,vowel',
          lo: 66,
          hi: 68,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_108 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000045,+000045,vowel',
          lo: 69,
          hi: 69,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_109 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000046,+000048,vowel',
          lo: 70,
          hi: 72,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_110 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000049,+000049,vowel',
          lo: 73,
          hi: 73,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_111 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00004a,+00004e,vowel',
          lo: 74,
          hi: 78,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_112 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00004f,+00004f,vowel',
          lo: 79,
          hi: 79,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_113 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000050,+00005a,vowel',
          lo: 80,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_114 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.hrd_punch_1(cid_of('U'), cid_of('U'), 'vowel', true);
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh_115 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+000041,vowel',
          lo: 65,
          hi: 65,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_116 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000042,+000044,vowel',
          lo: 66,
          hi: 68,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_117 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000045,+000045,vowel',
          lo: 69,
          hi: 69,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_118 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000046,+000048,vowel',
          lo: 70,
          hi: 72,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_119 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000049,+000049,vowel',
          lo: 73,
          hi: 73,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_120 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00004a,+00004e,vowel',
          lo: 74,
          hi: 78,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_121 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00004f,+00004f,vowel',
          lo: 79,
          hi: 79,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_122 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000050,+000054,vowel',
          lo: 80,
          hi: 84,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_123 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000055,+000055,vowel',
          lo: 85,
          hi: 85,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_124 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000056,+00005a,vowel',
          lo: 86,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_125 = function() {
          return rows.next().done;
        }), true);
        for (row of h.hrd_find_families()) {
          //.....................................................................................................
          echo(row);
        }
        rows = h.hrd_find_families();
        this.eq((Ωdbrh_126 = function() {
          return rows.next().value;
        }), {
          key: 'vowel',
          value: 'false',
          first: 66,
          last: 90,
          runs: 5,
          has_conflict: true,
          is_normal: false
        });
        this.eq((Ωdbrh_127 = function() {
          return rows.next().value;
        }), {
          key: 'vowel',
          value: 'true',
          first: 65,
          last: 85,
          runs: 5,
          has_conflict: true,
          is_normal: false
        });
        this.eq((Ωdbrh_128 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        chr_string = '';
        for (cid = i = ref = cid_of('A'), ref1 = cid_of('Z'); (ref <= ref1 ? i <= ref1 : i >= ref1); cid = ref <= ref1 ? ++i : --i) {
          rows = [...(h.hrd_find_overlaps(cid))];
          is_vowel = rows[0].value;
          color = is_vowel ? white : blue;
          chr = String.fromCodePoint(cid);
          chr_string += color(chr);
          this.eq((Ωdbrh_129 = function() {
            return rows.length;
          }), 1);
          this.eq((Ωdbrh_130 = function() {
            return rows[0].key;
          }), 'vowel');
          this.eq((Ωdbrh_131 = function() {
            return type_of(is_vowel);
          }), 'boolean');
        }
        debug('Ωdbrh_132', chr_string);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    dbric_hoard_plugin_normalization_and_conflict_detection_2: function() {
      var Hoard;
      Hoard = (function() {
        //.......................................................................................................
        class Hoard extends Dbric_std {};

        Hoard.plugins = [dbric_hoard_plugin];

        return Hoard;

      }).call(this);
      (() => {        //.......................................................................................................
        var colors_by_facets, h, key;
        h = Hoard.rebuild();
        key = 'vowel';
        colors_by_facets = {
          'vowel:true': GUY.trm.gold,
          'vowel:false': GUY.trm.blue
        };
        //.....................................................................................................
        h.tbl_echo_as_text(SQL`select * from hrd_runs order by lo;`);
        h.hrd_add_run(cid_of('A'), cid_of('Z'), key, false);
        h.hrd_add_run(cid_of('a'), cid_of('z'), key, false);
        // h.hrd_add_run ( cid_of 'A' ), null, key, true
        h.hrd_punch_1(cid_of('A'), null, key, true);
        // h.tbl_echo_as_text SQL"select * from hrd_runs order by lo;"
        h.hrd_punch_1(cid_of('E'), null, key, true);
        h.hrd_punch_1(cid_of('I'), null, key, true);
        h.hrd_punch_1(cid_of('O'), null, key, true);
        h.hrd_punch_1(cid_of('U'), null, key, true);
        h.hrd_punch_1(cid_of('N'), cid_of('Z'), 'upper', true);
        h.tbl_echo_as_text(SQL`select * from hrd_runs order by lo;`);
        h.tbl_echo_as_text(SQL`select * from hrd_family_conflicts_1;`);
        h.tbl_echo_as_text(SQL`select * from hrd_family_conflicts_2;`);
        h.tbl_echo_as_text(SQL`select * from hrd_family_conflicts_2 where key = $key and value != 'true';`, {key});
        // h.tbl_echo_as_text SQL"select * from _hrd_family_has_conflict_1;"
        // h.tbl_echo_as_text SQL"select * from _hrd_clan_has_conflict_2;"
        h.tbl_echo_as_text(h.hrd_find_families);
        // h.tbl_echo_as_text SQL"select * from _hrd_facet_group_has_conflict_2;"
        show_colorized_chr_string(h, cid_of('A'), cid_of('z'), colors_by_facets);
        return null;
      })();
      // #.......................................................................................................
      // do =>
      //   h   = Hoard.rebuild()
      //   key = 'vowel'
      //   #.....................................................................................................
      //   h.tbl_echo_as_text SQL"select * from hrd_runs order by lo;"
      //   h.hrd_add_run ( cid_of 'A' ), ( cid_of 'Z' ), key, false
      //   h.hrd_add_run ( cid_of 'a' ), ( cid_of 'z' ), key, false
      //   # h.hrd_add_run ( cid_of 'A' ), null, key, true
      //   h.hrd_punch_1 ( cid_of 'A' ), null, key, true
      //   # h.tbl_echo_as_text SQL"select * from hrd_runs order by lo;"
      //   # h.hrd_add_run ( cid_of 'E' ), null, key, true
      //   # h.hrd_add_run ( cid_of 'I' ), null, key, true
      //   h.tbl_echo_as_text SQL"select * from hrd_runs order by lo;"
      //   h.tbl_echo_as_text SQL"select * from hrd_family_conflicts_1;"
      //   h.tbl_echo_as_text SQL"select * from hrd_family_conflicts_2;"
      //   h.tbl_echo_as_text SQL"select * from hrd_family_conflicts_2 where key = $key and value != 'true';", { key, }
      //   # h.tbl_echo_as_text SQL"select * from _hrd_family_has_conflict_1;"
      //   # h.tbl_echo_as_text SQL"select * from _hrd_clan_has_conflict_2;"
      //   h.tbl_echo_as_text h.hrd_find_families
      //   # h.tbl_echo_as_text SQL"select * from _hrd_facet_group_has_conflict_2;"
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
      // ( new Test guytest_cfg ).test { tests, }
      (new Test(guytest_cfg)).test({
        dbric_hoard_plugin_normalization_and_conflict_detection_2: tests.dbric_hoard_plugin_normalization_and_conflict_detection_2
      });
      // ( new Test guytest_cfg ).test { dbric_dynamic_build_properties: tests.dbric_dynamic_build_properties, }
      //---------------------------------------------------------------------------------------------------------
      if (do_coverage) {
        if (ca.unused_names.length > 0) {
          ref = ca.unused_names;
          for (i = 0, len = ref.length; i < len; i++) {
            name = ref[i];
            warn('Ωdbrh_133', "not covered:", reverse(name));
          }
        }
      }
      // help 'Ωdbrh_134', ca.used_names
      // urge 'Ωdbrh_135', count, names for count, names of ca.names_by_counts
      //=========================================================================================================
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMtaG9hcmQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxrQkFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLHlCQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSx5QkFBQSxFQUFBLEtBQUEsRUFBQSxPQUFBLEVBQUEsWUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7SUFBQSxvQkFBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQix1QkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFV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YztNQUNkLFdBQUEsR0FBYztNQUNkLElBQUcsV0FBSDtRQUNFLENBQUEsQ0FBRSxpQkFBRixDQUFBLEdBQWtDLE9BQUEsQ0FBUSx5REFBUixDQUFsQztRQUNBLEVBQUEsR0FBSyxJQUFJLGlCQUFKLENBQUEsRUFGUDtPQUZGOzs7TUFPRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxJQUF2QztRQUE2QyxhQUFBLEVBQWU7TUFBNUQ7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0QsRUFUaEI7O01BV0UsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLHlEQUFBLEVBQTJELEtBQUssQ0FBQztNQUFuRSxDQUE5QixFQVhGOzs7TUFjRSxJQUFHLFdBQUg7UUFDRSxJQUE4RSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQWhCLEdBQXlCLENBQXZHO0FBQUE7VUFBQSxLQUFBLHFDQUFBOztZQUFBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLGNBQWxCLEVBQWtDLE9BQUEsQ0FBUSxJQUFSLENBQWxDO1VBQUEsQ0FBQTtTQURGO09BZEY7Ozs7YUFtQkc7SUFwQnFDLENBQUEsSUFBeEM7O0FBamRBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtZGJyaWMtaG9hcmQnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG57IERicmljLFxuICBEYnJpY19zdGQsXG4gIElETixcbiAgTElULFxuICBTUUwsXG4gIFZFQyxcbiAgZnJvbV9ib29sLFxuICBhc19ib29sLFxuICBUcnVlLFxuICBGYWxzZSxcbiAgdW5xdW90ZV9uYW1lLCAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2RicmljJ1xuIyB7IGxldHMsICAgICAgICAgICAgICAgICB9ID0gaW50ZXJuYWxzXG57IGRicmljX3BsdWdpbjogXFxcbiAgICBkYnJpY19ob2FyZF9wbHVnaW4sIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2ludGVybWlzc2lvbjInXG57IHR5cGVfb2YsICAgICAgICAgICAgICB9ID0gKCByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL3Vuc3RhYmxlLXJwci10eXBlX29mLWJyaWNzJyApLnJlcXVpcmVfdHlwZV9vZigpXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY2lkX29mID0gKCB4ICkgLT4geC5jb2RlUG9pbnRBdCAwXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuc2hvd19jb2xvcml6ZWRfY2hyX3N0cmluZyA9ICggaG9hcmQsIGxvLCBoaSwgY29sb3JzX2J5X2ZhY2V0cyApIC0+XG4gIGZhbGxiYWNrX2NvbG9yICA9IEdVWS50cm0uZ3JleVxuICB3YXJuX2NvbG9yICAgICAgPSBHVVkudHJtLnJlZFxuICBjaHJfc3RyaW5nICAgICAgPSAnJ1xuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGZvciBjaWQgaW4gWyBsbyAuLiBoaSBdXG4gICAgY2hyICAgICAgICAgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWRcbiAgICByb3dzICAgICAgICA9IFsgKCBob2FyZC5ocmRfZmluZF9vdmVybGFwcyBjaWQgKS4uLiwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaWYgcm93cy5sZW5ndGggaXMgMVxuICAgICAgZmFjZXQgPSBcIiN7cm93c1sgMCBdLmtleX06I3tyb3dzWyAwIF0udmFsdWVfanNvbn1cIlxuICAgICAgY29sb3IgPSBjb2xvcnNfYnlfZmFjZXRzWyBmYWNldCBdID8gZmFsbGJhY2tfY29sb3JcbiAgICBlbHNlXG4gICAgICBpZiByb3dzLmxlbmd0aCBpcyAwXG4gICAgICAgIHVyZ2UgXCLOqWRicmhfX18xICN7cnByIGNocn06IGZvdW5kIG5vIGZhY2V0c1wiXG4gICAgICBlbHNlXG4gICAgICAgIHVyZ2UgXCLOqWRicmhfX18yICN7cnByIGNocn06IGZvdW5kIGZhY2V0czpcIiwgKCBcIiN7ci5rZXl9OiN7ci52YWx1ZV9qc29ufVwiIGZvciByIGluIHJvd3MgKS5qb2luICc7J1xuICAgICAgY29sb3IgPSB3YXJuX2NvbG9yXG4gICAgY2hyX3N0cmluZyArPSBjb2xvciBjaHJcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBkZWJ1ZyAnzqlkYnJoX19fMycsIGNocl9zdHJpbmdcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmluc2VydF91bmljb2RlX2V4Y2x1c2lvbnMgPSAoIGggKSAtPlxuICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86IC1JbmZpbml0eSwgaGk6ICAgICAgICAtMSwga2V5OiAnJHgnLCB2YWx1ZTogXCJuZWdhdGl2ZSBDSURzXCIsICAgfVxuICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4MDAwMCwgaGk6ICAgIDB4MDAwMCwga2V5OiAnJHgnLCB2YWx1ZTogXCJ6ZXJvIGJ5dGVzXCIsICAgICAgfVxuICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4ZDgwMCwgaGk6ICAgIDB4ZGJmZiwga2V5OiAnJHgnLCB2YWx1ZTogXCJoaWdoIHN1cnJvZ2F0ZXNcIiwgfVxuICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4ZGMwMCwgaGk6ICAgIDB4ZGZmZiwga2V5OiAnJHgnLCB2YWx1ZTogXCJsb3cgc3Vycm9nYXRlc1wiLCAgfVxuICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4ZmRkMCwgaGk6ICAgIDB4ZmRlZiwga2V5OiAnJHgnLCB2YWx1ZTogXCJub25jaGFyYWN0ZXJzXCIsICAgfVxuICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4ZmZmZSwgaGk6ICAgIDB4ZmZmZiwga2V5OiAnJHgnLCB2YWx1ZTogXCJub25jaGFyYWN0ZXJzXCIsICAgfVxuICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAweDExMDAwMCwgaGk6ICtJbmZpbml0eSwga2V5OiAnJHgnLCB2YWx1ZTogXCJleGNlc3NpdmUgQ0lEc1wiLCAgfVxuICA7bnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2hvYXJkX3BsdWdpbl9iYXNpY3M6IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBIb2FyZCBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQHBsdWdpbnM6IFtcbiAgICAgICAgZGJyaWNfaG9hcmRfcGx1Z2luXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGggPSBIb2FyZC5yZWJ1aWxkKClcbiAgICBAZXEgKCDOqWRicmhfX180ID0gLT4gJ3N0ZF9nZXRfdGFibGVzJyAgICAgICAgICAgICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzUgPSAtPiAnaHJkX2ZpbmRfcnVucycgICAgICAgICAgICAgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX19fNiA9IC0+ICdocmRfaW5zZXJ0X3J1bicgICAgICAgICAgICAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX183ID0gLT4gJ2hyZF9maW5kX292ZXJsYXBzJyAgICAgICAgICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzggPSAtPiAnaHJkX2ZpbmRfb3ZlcmxhcHNfZm9yX2tleScgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX19fOSA9IC0+ICdocmRfZmluZF9ydW5zX3dpdGhfY29uZmxpY3RzXzEnICAgICAgICAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGluc2VydF91bmljb2RlX2V4Y2x1c2lvbnMgaFxuICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAtMHgwMDBhLCBoaTogICAgMHgwMDAwLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInLCAgICAgIH1cbiAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4MDAwMCwgaGk6ICAgIDB4MDAwYSwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgICAgICB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBoLnN0YXRlbWVudHMuaHJkX2ZpbmRfcnVuc1xuICAgICAgcm93cyA9IGgud2FsayBoLnN0YXRlbWVudHMuaHJkX2ZpbmRfcnVuc1xuICAgICAgQGVxICggzqlkYnJoX18xMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPS1JbmZpbml0eSwtMDAwMDAxLCR4JywgbG86IC1JbmZpbml0eSwgaGk6IC0xLCBrZXk6ICckeCcsIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycgfVxuICAgICAgQGVxICggzqlkYnJoX18xMSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPS0wMDAwMGEsKzAwMDAwMCxmb28nLCBsbzogLTEwLCBoaTogMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzEyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDAwMCwrMDAwMDAwLCR4JywgbG86IDAsIGhpOiAwLCBrZXk6ICckeCcsIHZhbHVlOiAnemVybyBieXRlcycgfVxuICAgICAgQGVxICggzqlkYnJoX18xMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwMDAsKzAwMDAwYSxmb28nLCBsbzogMCwgaGk6IDEwLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDBkODAwLCswMGRiZmYsJHgnLCBsbzogNTUyOTYsIGhpOiA1NjMxOSwga2V5OiAnJHgnLCB2YWx1ZTogJ2hpZ2ggc3Vycm9nYXRlcycgfVxuICAgICAgQGVxICggzqlkYnJoX18xNSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMGRjMDAsKzAwZGZmZiwkeCcsIGxvOiA1NjMyMCwgaGk6IDU3MzQzLCBrZXk6ICckeCcsIHZhbHVlOiAnbG93IHN1cnJvZ2F0ZXMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDBmZGQwLCswMGZkZWYsJHgnLCBsbzogNjQ5NzYsIGhpOiA2NTAwNywga2V5OiAnJHgnLCB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDBmZmZlLCswMGZmZmYsJHgnLCBsbzogNjU1MzQsIGhpOiA2NTUzNSwga2V5OiAnJHgnLCB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMTEwMDAwLCtJbmZpbml0eSwkeCcsIGxvOiAxMTE0MTEyLCBoaTogSW5maW5pdHksIGtleTogJyR4JywgdmFsdWU6ICdleGNlc3NpdmUgQ0lEcycgfVxuICAgICAgQGVxICggzqlkYnJoX18xOSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZpbmRfb3ZlcmxhcHMgPSBoLnN0YXRlbWVudHMuaHJkX2ZpbmRfb3ZlcmxhcHNcbiAgICAgICMgZGVidWcgJ86pZGJyaF9fMjAnLCByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgZmluZF9vdmVybGFwcywgeyBsbzogLTB4MSwgaGk6IDB4MGIsIH1cbiAgICAgICMgZGVidWcgJ86pZGJyaF9fMjEnLCByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgZmluZF9vdmVybGFwcywgeyBsbzogLTB4MSwgaGk6IDB4MGIsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgbG8gICAgICA9IC0weDAwMDFcbiAgICAgIGhpICAgICAgPSArMHgwMDBiXG4gICAgICBzZWVuICAgID0gbmV3IFNldCgpXG4gICAgICBtYXRjaGVyID0gW11cbiAgICAgIGZvciBuIGluIFsgbG8gLi4gaGkgXVxuICAgICAgICBmb3IgeyByb3dpZCwgfSBmcm9tIGgud2FsayBmaW5kX292ZXJsYXBzLCB7IGxvOiBuLCBoaTogbiwgfVxuICAgICAgICAgIG1hdGNoZXIucHVzaCByb3dpZCB1bmxlc3Mgc2Vlbi5oYXMgcm93aWRcbiAgICAgICAgICBzZWVuLmFkZCByb3dpZFxuICAgICAgQGVxICggzqlkYnJoX18yMiA9IC0+IG1hdGNoZXIubGVuZ3RoICksIDRcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmVzdWx0ID0gWyAoIHJvd2lkIGZvciB7IHJvd2lkLCB9IGZyb20gaC53YWxrIGZpbmRfb3ZlcmxhcHMsIHsgbG8sIGhpLCB9ICkuLi4sIF1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMjMgPSAtPiByZXN1bHQgKSwgbWF0Y2hlclxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmaW5kX292ZXJsYXBzICAgPSBoLnN0YXRlbWVudHMuaHJkX2ZpbmRfb3ZlcmxhcHNcbiAgICAgIGZpbmRfY29uZmxpY3RzICA9IGguc3RhdGVtZW50cy5ocmRfZmluZF9ydW5zX3dpdGhfY29uZmxpY3RzXzFcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlkYnJoX18yNCA9IC0+IFsgKCByb3cgZm9yIHJvdyBmcm9tIGgud2FsayBmaW5kX2NvbmZsaWN0cyApLi4uLCBdICksIFtdXG4gICAgICBAZXEgKCDOqWRicmhfXzI1ID0gLT4gWyAoIGguaHJkX2ZpbmRfcnVuc193aXRoX2NvbmZsaWN0c18xKCkgKS4uLiwgXSAgICAgICAgICAgICAgICAgKSwgW11cbiAgICAgIEBlcSAoIM6pZGJyaF9fMjYgPSAtPiBoLmhyZF92YWxpZGF0ZV8xKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIG51bGxcbiAgICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogLTB4MDAwYSwgaGk6ICsweDAwMDMsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJmdXpcIicsICAgICAgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzZWVuICAgID0gbmV3IFNldCgpXG4gICAgICBtYXRjaGVyID0gW1xuICAgICAgICB7IGtleTogJ2ZvbycsIHZhbHVlX2E6ICdcImJhclwiJywgdmFsdWVfYjogJ1wiZnV6XCInIH0sXG4gICAgICAgIHsga2V5OiAnZm9vJywgdmFsdWVfYTogJ1wiYmFyXCInLCB2YWx1ZV9iOiAnXCJmdXpcIicgfSwgXVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXN1bHQgPSBbXVxuICAgICAgZm9yIHJvdyBmcm9tIGgud2FsayBmaW5kX2NvbmZsaWN0c1xuICAgICAgICByZXN1bHQucHVzaCB7IGtleTogcm93LmtleV9hLCB2YWx1ZV9hOiByb3cudmFsdWVfYSwgdmFsdWVfYjogcm93LnZhbHVlX2IsIH1cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJlc3VsdFxuICAgICAgQGVxICggzqlkYnJoX18yNyA9IC0+IHJlc3VsdCApLCBtYXRjaGVyXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlc3VsdCA9IFtdXG4gICAgICBmb3Igcm93IGZyb20gaC5ocmRfZmluZF9ydW5zX3dpdGhfY29uZmxpY3RzXzEoKVxuICAgICAgICByZXN1bHQucHVzaCB7IGtleTogcm93LmtleV9hLCB2YWx1ZV9hOiByb3cudmFsdWVfYSwgdmFsdWVfYjogcm93LnZhbHVlX2IsIH1cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJlc3VsdFxuICAgICAgQGVxICggzqlkYnJoX18yOCA9IC0+IHJlc3VsdCApLCBtYXRjaGVyXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEB0aHJvd3MgKCDOqWRicmhfXzI5ID0gLT4gaC5ocmRfdmFsaWRhdGVfMSgpICksIC9mb3VuZCBjb25mbGljdHMvXG4gICAgICB0cnkgaC5ocmRfdmFsaWRhdGVfMSgpIGNhdGNoIGUgdGhlbiB3YXJuICfOqWRicmhfXzMwJywgZS5tZXNzYWdlXG4gICAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSBoLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIF9ocmRfZmFtaWx5X2hhc19jb25mbGljdF8xO1wiXG4gICAgICByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBfaHJkX2ZhbWlseV9oYXNfY29uZmxpY3RfMTtcIlxuICAgICAgQGVxICggzqlkYnJoX18zMSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdleGNlc3NpdmUgQ0lEcycsIGhhc19jb25mbGljdDogMCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzMyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ2hpZ2ggc3Vycm9nYXRlcycsIGhhc19jb25mbGljdDogMCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzMzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ2xvdyBzdXJyb2dhdGVzJywgaGFzX2NvbmZsaWN0OiAwIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMzQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycsIGhhc19jb25mbGljdDogMCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzM1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnLCBoYXNfY29uZmxpY3Q6IDAgfVxuICAgICAgQGVxICggzqlkYnJoX18zNiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICd6ZXJvIGJ5dGVzJywgaGFzX2NvbmZsaWN0OiAwIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMzcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInLCBoYXNfY29uZmxpY3Q6IDEgfVxuICAgICAgQGVxICggzqlkYnJoX18zOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ2ZvbycsIHZhbHVlOiAnXCJmdXpcIicsIGhhc19jb25mbGljdDogMSB9XG4gICAgICBAZXEgKCDOqWRicmhfXzM5ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLmhyZF9maW5kX3J1bnNfd2l0aF9jb25mbGljdHNfMSgpXG4gICAgICAjIHJvd3MgPSBoLmhyZF9mYW1pbHlfY29uZmxpY3RzXzEoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2hvYXJkX3BsdWdpbl9ncm91cHM6IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBIb2FyZCBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQHBsdWdpbnM6IFtcbiAgICAgICAgZGJyaWNfaG9hcmRfcGx1Z2luXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGggPSBIb2FyZC5yZWJ1aWxkKClcbiAgICBpbnNlcnRfdW5pY29kZV9leGNsdXNpb25zIGhcbiAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgLTB4MDAwYSwgaGk6ICAgIDB4MDAwMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgICAgICB9XG4gICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweDAwMDAsIGhpOiAgICAweDAwMGEsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicsICAgICAgfVxuICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHgwMDAwLCBoaTogICAgMHgwMDBhLCBrZXk6ICduaWNlJywgdmFsdWU6ICd0cnVlJywgICAgICB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBoLnN0YXRlbWVudHMuX2hyZF9mYWNldF9ncm91cHNcbiAgICAgIHJvd3MgPSBoLndhbGsgaC5zdGF0ZW1lbnRzLl9ocmRfZmFjZXRfZ3JvdXBzXG4gICAgICBAZXEgKCDOqWRicmhfXzQwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnLCAgcnVuczogMSwgfVxuICAgICAgQGVxICggzqlkYnJoX180MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ2hpZ2ggc3Vycm9nYXRlcycsIHJ1bnM6IDEsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNDIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycsICBydW5zOiAxLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzQzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycsICAgcnVuczogMSwgfVxuICAgICAgQGVxICggzqlkYnJoX180NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnLCAgIHJ1bnM6IDIsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNDUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICd6ZXJvIGJ5dGVzJywgICAgICBydW5zOiAxLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzQ2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnZm9vJywgIHZhbHVlOiAnXCJiYXJcIicsICAgICAgICAgICBydW5zOiAyLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzQ3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnbmljZScsIHZhbHVlOiAndHJ1ZScsICAgICAgICAgICAgcnVuczogMSwgfVxuICAgICAgQGVxICggzqlkYnJoX180OCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGRvID0+XG4gICAgIyAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLmhyZF9maW5kX3J1bnNfYnlfZ3JvdXAoKVxuICAgICMgICByb3dzID0gaC5ocmRfZmluZF9ydW5zX2J5X2dyb3VwKClcbiAgICAjICAgQGVxICggzqlkYnJoX180OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdleGNlc3NpdmUgQ0lEcycsIHJ1bnM6IFsgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMTEwMDAwLCtJbmZpbml0eSwkeCcsIGxvOiAxMTE0MTEyLCBoaTogSW5maW5pdHksIGtleTogJyR4JywgdmFsdWU6ICdleGNlc3NpdmUgQ0lEcycgfSBdIH1cbiAgICAjICAgQGVxICggzqlkYnJoX181MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnLCBydW5zOiBbIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZDgwMCwrMDBkYmZmLCR4JywgbG86IDU1Mjk2LCBoaTogNTYzMTksIGtleTogJyR4JywgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnIH0gXSB9XG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fNTEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnbG93IHN1cnJvZ2F0ZXMnLCBydW5zOiBbIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZGMwMCwrMDBkZmZmLCR4JywgbG86IDU2MzIwLCBoaTogNTczNDMsIGtleTogJyR4JywgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycgfSBdIH1cbiAgICAjICAgQGVxICggzqlkYnJoX181MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICduZWdhdGl2ZSBDSURzJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPS1JbmZpbml0eSwtMDAwMDAxLCR4JywgbG86IC1JbmZpbml0eSwgaGk6IC0xLCBrZXk6ICckeCcsIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycgfSBdIH1cbiAgICAjICAgQGVxICggzqlkYnJoX181MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMGZkZDAsKzAwZmRlZiwkeCcsIGxvOiA2NDk3NiwgaGk6IDY1MDA3LCBrZXk6ICckeCcsIHZhbHVlOiAnbm9uY2hhcmFjdGVycycgfSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDBmZmZlLCswMGZmZmYsJHgnLCBsbzogNjU1MzQsIGhpOiA2NTUzNSwga2V5OiAnJHgnLCB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnIH0gXSB9XG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fNTQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnemVybyBieXRlcycsIHJ1bnM6IFsgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDAwLCswMDAwMDAsJHgnLCBsbzogMCwgaGk6IDAsIGtleTogJyR4JywgdmFsdWU6ICd6ZXJvIGJ5dGVzJyB9IF0gfVxuICAgICMgICBAZXEgKCDOqWRicmhfXzU1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPS0wMDAwMGEsKzAwMDAwMCxmb28nLCBsbzogLTEwLCBoaTogMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJyB9LCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwMDAsKzAwMDAwYSxmb28nLCBsbzogMCwgaGk6IDEwLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInIH0gXSB9XG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fNTYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICduaWNlJywgdmFsdWU6ICd0cnVlJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwMDAsKzAwMDAwYSxuaWNlJywgbG86IDAsIGhpOiAxMCwga2V5OiAnbmljZScsIHZhbHVlOiAndHJ1ZScgfSBdIH1cbiAgICAjICAgQGVxICggzqlkYnJoX181NyA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgIyAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGguaHJkX2ZpbmRfZmFtaWxpZXMoKVxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfZmFtaWxpZXMoKVxuICAgICAgQGVxICggzqlkYnJoX181OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ2V4Y2Vzc2l2ZSBDSURzJywgIGZpcnN0OiAxMTE0MTEyLCAgIGxhc3Q6IEluZmluaXR5LCBydW5zOiAxLCBoYXNfY29uZmxpY3Q6IGZhbHNlLCBpc19ub3JtYWw6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNTkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnLCBmaXJzdDogNTUyOTYsICAgICBsYXN0OiA1NjMxOSwgICAgcnVuczogMSwgaGFzX2NvbmZsaWN0OiBmYWxzZSwgaXNfbm9ybWFsOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzYwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnbG93IHN1cnJvZ2F0ZXMnLCAgZmlyc3Q6IDU2MzIwLCAgICAgbGFzdDogNTczNDMsICAgIHJ1bnM6IDEsIGhhc19jb25mbGljdDogZmFsc2UsIGlzX25vcm1hbDogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlkYnJoX182MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ25lZ2F0aXZlIENJRHMnLCAgIGZpcnN0OiAtSW5maW5pdHksIGxhc3Q6IC0xLCAgICAgICBydW5zOiAxLCBoYXNfY29uZmxpY3Q6IGZhbHNlLCBpc19ub3JtYWw6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNjIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICdub25jaGFyYWN0ZXJzJywgICBmaXJzdDogNjQ5NzYsICAgICBsYXN0OiA2NTUzNSwgICAgcnVuczogMiwgaGFzX2NvbmZsaWN0OiBmYWxzZSwgaXNfbm9ybWFsOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzYzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnemVybyBieXRlcycsICAgICAgZmlyc3Q6IDAsICAgICAgICAgbGFzdDogMCwgICAgICAgIHJ1bnM6IDEsIGhhc19jb25mbGljdDogZmFsc2UsIGlzX25vcm1hbDogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlkYnJoX182NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ2ZvbycsICB2YWx1ZTogJ1wiYmFyXCInLCAgICAgICAgICAgZmlyc3Q6IC0xMCwgICAgICAgbGFzdDogMTAsICAgICAgIHJ1bnM6IDIsIGhhc19jb25mbGljdDogdHJ1ZSwgIGlzX25vcm1hbDogZmFsc2UsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNjUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICduaWNlJywgdmFsdWU6ICd0cnVlJywgICAgICAgICAgICBmaXJzdDogMCwgICAgICAgICBsYXN0OiAxMCwgICAgICAgcnVuczogMSwgaGFzX2NvbmZsaWN0OiB0cnVlLCAgaXNfbm9ybWFsOiBmYWxzZSwgfVxuICAgICAgQGVxICggzqlkYnJoX182NiA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2hvYXJkX3BsdWdpbl9ub3JtYWxpemF0aW9uOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmQgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIEBwbHVnaW5zOiBbXG4gICAgICAgIGRicmljX2hvYXJkX3BsdWdpblxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IEhvYXJkLnJlYnVpbGQoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkZWJ1ZyAnzqlkYnJoX182NycsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCAqIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIEBlcSAoIM6pZGJyaF9fNjggPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86IDB4MDAxMCwgaGk6IDB4MDAxNSwga2V5OiAnYScsIHZhbHVlOiAnXCJBXCInLCB9XG4gICAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86IDB4MDAyMCwgaGk6IDB4MDAyNSwga2V5OiAnYScsIHZhbHVlOiAnXCJBXCInLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZGVidWcgJ86pZGJyaF9fNjknLCByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIEBlcSAoIM6pZGJyaF9fNzAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBkOiAnYSxcIkFcIiwxJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzcxID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAweDAwMTYsIGhpOiAweDAwMTYsIGtleTogJ2EnLCB2YWx1ZTogJ1wiQVwiJywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGRlYnVnICfOqWRicmhfXzcyJywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICBAZXEgKCDOqWRicmhfXzczID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgZDogJ2EsXCJBXCIsMCcgfVxuICAgICAgQGVxICggzqlkYnJoX183NCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJvd3MgPSBoLmhyZF9maW5kX25vbm5vcm1hbF9mYW1pbGllcygpXG4gICAgICBAZXEgKCDOqWRicmhfXzc1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnYScsIHZhbHVlOiAnXCJBXCInIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNzYgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86IDB4MDAxMCwgaGk6IDB4MDAxNSwga2V5OiAnYicsIHZhbHVlOiAnXCJCXCInLCB9XG4gICAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86IDB4MDAyMCwgaGk6IDB4MDAyNSwga2V5OiAnYicsIHZhbHVlOiAnXCJCXCInLCB9XG4gICAgICAjIGRlYnVnICfOqWRicmhfXzc3Jywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICBAZXEgKCDOqWRicmhfXzc4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgZDogJ2EsXCJBXCIsMCcgfVxuICAgICAgQGVxICggzqlkYnJoX183OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGQ6ICdiLFwiQlwiLDEnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fODAgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86IDB4MDAxMiwgaGk6IDB4MDAxNywga2V5OiAnYicsIHZhbHVlOiAnXCJCXCInLCB9XG4gICAgICAjIGRlYnVnICfOqWRicmhfXzgxJywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICBAZXEgKCDOqWRicmhfXzgyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgZDogJ2EsXCJBXCIsMCcgfVxuICAgICAgQGVxICggzqlkYnJoX184MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGQ6ICdiLFwiQlwiLDAnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fODQgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByb3dzID0gaC5ocmRfZmluZF9ub25ub3JtYWxfZmFtaWxpZXMoKVxuICAgICAgQGVxICggzqlkYnJoX184NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ2EnLCB2YWx1ZTogJ1wiQVwiJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzg2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnYicsIHZhbHVlOiAnXCJCXCInIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fODcgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkZWJ1ZyAnzqlkYnJoX184OCcsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGguaHJkX2ZpbmRfZmFtaWxpZXMoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2hvYXJkX3BsdWdpbl9ub3JtYWxpemF0aW9uX2FuZF9jb25mbGljdF9kZXRlY3Rpb246IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBIb2FyZCBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQHBsdWdpbnM6IFtcbiAgICAgICAgZGJyaWNfaG9hcmRfcGx1Z2luXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gSG9hcmQucmVidWlsZCgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksICggY2lkX29mICdaJyApLCAndm93ZWwnLCBmYWxzZVxuICAgICAgIyBlY2hvKCk7IGVjaG8gcm93IGZvciByb3cgZnJvbSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfcnVucygpXG4gICAgICBAZXEgKCDOqWRicmhfXzg5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MSwrMDAwMDVhLHZvd2VsJywgbG86IDY1LCBoaTogOTAsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoX185MCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguaHJkX3B1bmNoXzEgeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAnQScgKSwga2V5OiAndm93ZWwnLCB2YWx1ZTogdHJ1ZSwgfVxuICAgICAgIyBlY2hvKCk7IGVjaG8gcm93IGZvciByb3cgZnJvbSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfcnVucygpXG4gICAgICBAZXEgKCDOqWRicmhfXzkxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MSwrMDAwMDQxLHZvd2VsJywgbG86IDY1LCBoaTogNjUsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzkyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MiwrMDAwMDVhLHZvd2VsJywgbG86IDY2LCBoaTogOTAsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoX185MyA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ0UnICksICggY2lkX29mICdFJyApLCAndm93ZWwnLCB0cnVlXG4gICAgICAjIGVjaG8oKTsgZWNobyByb3cgZm9yIHJvdyBmcm9tIGguaHJkX2ZpbmRfcnVucygpXG4gICAgICByb3dzID0gaC5ocmRfZmluZF9ydW5zKClcbiAgICAgIEBlcSAoIM6pZGJyaF9fOTQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQxLCswMDAwNDEsdm93ZWwnLCBsbzogNjUsIGhpOiA2NSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fOTUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQyLCswMDAwNDQsdm93ZWwnLCBsbzogNjYsIGhpOiA2OCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzk2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0NSwrMDAwMDQ1LHZvd2VsJywgbG86IDY5LCBoaTogNjksIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzk3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0NiwrMDAwMDVhLHZvd2VsJywgbG86IDcwLCBoaTogOTAsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoX185OCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ0knICksICggY2lkX29mICdJJyApLCAndm93ZWwnLCB0cnVlXG4gICAgICAjIGVjaG8oKTsgZWNobyByb3cgZm9yIHJvdyBmcm9tIGguaHJkX2ZpbmRfcnVucygpXG4gICAgICByb3dzID0gaC5ocmRfZmluZF9ydW5zKClcbiAgICAgIEBlcSAoIM6pZGJyaF9fOTkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQxLCswMDAwNDEsdm93ZWwnLCBsbzogNjUsIGhpOiA2NSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMDAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQyLCswMDAwNDQsdm93ZWwnLCBsbzogNjYsIGhpOiA2OCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTAxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0NSwrMDAwMDQ1LHZvd2VsJywgbG86IDY5LCBoaTogNjksIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTAyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0NiwrMDAwMDQ4LHZvd2VsJywgbG86IDcwLCBoaTogNzIsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEwMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDksKzAwMDA0OSx2b3dlbCcsIGxvOiA3MywgaGk6IDczLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEwNCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNGEsKzAwMDA1YSx2b3dlbCcsIGxvOiA3NCwgaGk6IDkwLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMDUgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLmhyZF9wdW5jaF8xICggY2lkX29mICdPJyApLCAoIGNpZF9vZiAnTycgKSwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgIyBlY2hvKCk7IGVjaG8gcm93IGZvciByb3cgZnJvbSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfcnVucygpXG4gICAgICBAZXEgKCDOqWRicmhfMTA2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MSwrMDAwMDQxLHZvd2VsJywgbG86IDY1LCBoaTogNjUsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTA3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MiwrMDAwMDQ0LHZvd2VsJywgbG86IDY2LCBoaTogNjgsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEwOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDUsKzAwMDA0NSx2b3dlbCcsIGxvOiA2OSwgaGk6IDY5LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEwOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDYsKzAwMDA0OCx2b3dlbCcsIGxvOiA3MCwgaGk6IDcyLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMTAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ5LCswMDAwNDksdm93ZWwnLCBsbzogNzMsIGhpOiA3Mywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMTEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDRhLCswMDAwNGUsdm93ZWwnLCBsbzogNzQsIGhpOiA3OCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTEyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0ZiwrMDAwMDRmLHZvd2VsJywgbG86IDc5LCBoaTogNzksIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTEzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA1MCwrMDAwMDVhLHZvd2VsJywgbG86IDgwLCBoaTogOTAsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzExNCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ1UnICksICggY2lkX29mICdVJyApLCAndm93ZWwnLCB0cnVlXG4gICAgICAjIGVjaG8oKTsgZWNobyByb3cgZm9yIHJvdyBmcm9tIGguaHJkX2ZpbmRfcnVucygpXG4gICAgICByb3dzID0gaC5ocmRfZmluZF9ydW5zKClcbiAgICAgIEBlcSAoIM6pZGJyaF8xMTUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQxLCswMDAwNDEsdm93ZWwnLCBsbzogNjUsIGhpOiA2NSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMTYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQyLCswMDAwNDQsdm93ZWwnLCBsbzogNjYsIGhpOiA2OCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTE3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0NSwrMDAwMDQ1LHZvd2VsJywgbG86IDY5LCBoaTogNjksIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTE4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0NiwrMDAwMDQ4LHZvd2VsJywgbG86IDcwLCBoaTogNzIsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzExOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDksKzAwMDA0OSx2b3dlbCcsIGxvOiA3MywgaGk6IDczLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEyMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNGEsKzAwMDA0ZSx2b3dlbCcsIGxvOiA3NCwgaGk6IDc4LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMjEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDRmLCswMDAwNGYsdm93ZWwnLCBsbzogNzksIGhpOiA3OSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMjIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDUwLCswMDAwNTQsdm93ZWwnLCBsbzogODAsIGhpOiA4NCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTIzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA1NSwrMDAwMDU1LHZvd2VsJywgbG86IDg1LCBoaTogODUsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTI0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA1NiwrMDAwMDVhLHZvd2VsJywgbG86IDg2LCBoaTogOTAsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEyNSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGVjaG8gcm93IGZvciByb3cgZnJvbSBoLmhyZF9maW5kX2ZhbWlsaWVzKClcbiAgICAgIHJvd3MgPSBoLmhyZF9maW5kX2ZhbWlsaWVzKClcbiAgICAgIEBlcSAoIM6pZGJyaF8xMjYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnLCAgZmlyc3Q6IDY2LCBsYXN0OiA5MCwgcnVuczogNSwgaGFzX2NvbmZsaWN0OiB0cnVlLCBpc19ub3JtYWw6IGZhbHNlLCB9XG4gICAgICBAZXEgKCDOqWRicmhfMTI3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnLCAgIGZpcnN0OiA2NSwgbGFzdDogODUsIHJ1bnM6IDUsIGhhc19jb25mbGljdDogdHJ1ZSwgaXNfbm9ybWFsOiBmYWxzZSwgfVxuICAgICAgQGVxICggzqlkYnJoXzEyOCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGNocl9zdHJpbmcgPSAnJ1xuICAgICAgZm9yIGNpZCBpbiBbICggY2lkX29mICdBJyApIC4uICggY2lkX29mICdaJyApIF1cbiAgICAgICAgcm93cyAgICAgICAgPSBbICggaC5ocmRfZmluZF9vdmVybGFwcyBjaWQgKS4uLiwgXVxuICAgICAgICBpc192b3dlbCAgICA9IHJvd3NbIDAgXS52YWx1ZVxuICAgICAgICBjb2xvciAgICAgICA9IGlmIGlzX3Zvd2VsIHRoZW4gd2hpdGUgZWxzZSBibHVlXG4gICAgICAgIGNociAgICAgICAgID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkXG4gICAgICAgIGNocl9zdHJpbmcgKz0gY29sb3IgY2hyXG4gICAgICAgIEBlcSAoIM6pZGJyaF8xMjkgPSAtPiByb3dzLmxlbmd0aCAgICAgICAgICAgICAgKSwgMVxuICAgICAgICBAZXEgKCDOqWRicmhfMTMwID0gLT4gcm93c1sgMCBdLmtleSAgICAgICAgICAgICksICd2b3dlbCdcbiAgICAgICAgQGVxICggzqlkYnJoXzEzMSA9IC0+IHR5cGVfb2YgaXNfdm93ZWwgICAgICAgICApLCAnYm9vbGVhbidcbiAgICAgIGRlYnVnICfOqWRicmhfMTMyJywgY2hyX3N0cmluZ1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19ob2FyZF9wbHVnaW5fbm9ybWFsaXphdGlvbl9hbmRfY29uZmxpY3RfZGV0ZWN0aW9uXzI6IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBIb2FyZCBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQHBsdWdpbnM6IFtcbiAgICAgICAgZGJyaWNfaG9hcmRfcGx1Z2luXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoICAgICAgICAgICAgICAgICA9IEhvYXJkLnJlYnVpbGQoKVxuICAgICAga2V5ICAgICAgICAgICAgICAgPSAndm93ZWwnXG4gICAgICBjb2xvcnNfYnlfZmFjZXRzICA9XG4gICAgICAgICd2b3dlbDp0cnVlJzogICAgIEdVWS50cm0uZ29sZFxuICAgICAgICAndm93ZWw6ZmFsc2UnOiAgICBHVVkudHJtLmJsdWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfcnVucyBvcmRlciBieSBsbztcIlxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgKCBjaWRfb2YgJ1onICksIGtleSwgZmFsc2VcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ2EnICksICggY2lkX29mICd6JyApLCBrZXksIGZhbHNlXG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAnQScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX3J1bnMgb3JkZXIgYnkgbG87XCJcbiAgICAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ0UnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAnSScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICBoLmhyZF9wdW5jaF8xICggY2lkX29mICdPJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ1UnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAnTicgKSwgKCBjaWRfb2YgJ1onICksICd1cHBlcicsIHRydWVcbiAgICAgIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX3J1bnMgb3JkZXIgYnkgbG87XCJcbiAgICAgIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2ZhbWlseV9jb25mbGljdHNfMTtcIlxuICAgICAgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfZmFtaWx5X2NvbmZsaWN0c18yO1wiXG4gICAgICBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9mYW1pbHlfY29uZmxpY3RzXzIgd2hlcmUga2V5ID0gJGtleSBhbmQgdmFsdWUgIT0gJ3RydWUnO1wiLCB7IGtleSwgfVxuICAgICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIF9ocmRfZmFtaWx5X2hhc19jb25mbGljdF8xO1wiXG4gICAgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9jbGFuX2hhc19jb25mbGljdF8yO1wiXG4gICAgICBoLnRibF9lY2hvX2FzX3RleHQgaC5ocmRfZmluZF9mYW1pbGllc1xuICAgICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIF9ocmRfZmFjZXRfZ3JvdXBfaGFzX2NvbmZsaWN0XzI7XCJcbiAgICAgIHNob3dfY29sb3JpemVkX2Nocl9zdHJpbmcgaCwgKCBjaWRfb2YgJ0EnICksICggY2lkX29mICd6JyApLCBjb2xvcnNfYnlfZmFjZXRzXG4gICAgICA7bnVsbFxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGRvID0+XG4gICAgIyAgIGggICA9IEhvYXJkLnJlYnVpbGQoKVxuICAgICMgICBrZXkgPSAndm93ZWwnXG4gICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgICBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ydW5zIG9yZGVyIGJ5IGxvO1wiXG4gICAgIyAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksICggY2lkX29mICdaJyApLCBrZXksIGZhbHNlXG4gICAgIyAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ2EnICksICggY2lkX29mICd6JyApLCBrZXksIGZhbHNlXG4gICAgIyAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgIyAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ0EnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICMgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX3J1bnMgb3JkZXIgYnkgbG87XCJcbiAgICAjICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdFJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAjICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdJJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAjICAgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfcnVucyBvcmRlciBieSBsbztcIlxuICAgICMgICBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9mYW1pbHlfY29uZmxpY3RzXzE7XCJcbiAgICAjICAgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfZmFtaWx5X2NvbmZsaWN0c18yO1wiXG4gICAgIyAgIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2ZhbWlseV9jb25mbGljdHNfMiB3aGVyZSBrZXkgPSAka2V5IGFuZCB2YWx1ZSAhPSAndHJ1ZSc7XCIsIHsga2V5LCB9XG4gICAgIyAgICMgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBfaHJkX2ZhbWlseV9oYXNfY29uZmxpY3RfMTtcIlxuICAgICMgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9jbGFuX2hhc19jb25mbGljdF8yO1wiXG4gICAgIyAgIGgudGJsX2VjaG9fYXNfdGV4dCBoLmhyZF9maW5kX2ZhbWlsaWVzXG4gICAgIyAgICMgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBfaHJkX2ZhY2V0X2dyb3VwX2hhc19jb25mbGljdF8yO1wiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGRvX2NvdmVyYWdlID0gdHJ1ZVxuICBkb19jb3ZlcmFnZSA9IGZhbHNlXG4gIGlmIGRvX2NvdmVyYWdlXG4gICAgeyBDb3ZlcmFnZV9hbmFseXplciwgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvY292ZXJhZ2UtYW5hbHl6ZXInXG4gICAgY2EgPSBuZXcgQ292ZXJhZ2VfYW5hbHl6ZXIoKVxuICAgICMgY2Eud3JhcF9jbGFzcyBEYnJpY19zdGRcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb25fYW5kX2NvbmZsaWN0X2RldGVjdGlvbl8yOiB0ZXN0cy5kYnJpY19ob2FyZF9wbHVnaW5fbm9ybWFsaXphdGlvbl9hbmRfY29uZmxpY3RfZGV0ZWN0aW9uXzIsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2R5bmFtaWNfYnVpbGRfcHJvcGVydGllczogdGVzdHMuZGJyaWNfZHluYW1pY19idWlsZF9wcm9wZXJ0aWVzLCB9XG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaWYgZG9fY292ZXJhZ2VcbiAgICB3YXJuICfOqWRicmhfMTMzJywgXCJub3QgY292ZXJlZDpcIiwgcmV2ZXJzZSBuYW1lIGZvciBuYW1lIGluIGNhLnVudXNlZF9uYW1lcyBpZiBjYS51bnVzZWRfbmFtZXMubGVuZ3RoID4gMFxuICAgICMgaGVscCAnzqlkYnJoXzEzNCcsIGNhLnVzZWRfbmFtZXNcbiAgICAjIHVyZ2UgJ86pZGJyaF8xMzUnLCBjb3VudCwgbmFtZXMgZm9yIGNvdW50LCBuYW1lcyBvZiBjYS5uYW1lc19ieV9jb3VudHNcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICA7bnVsbFxuXG5cbiJdfQ==
