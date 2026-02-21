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
          var chr, cid, color, colors, facet_from_row, facets_from_rows, first, gfph, global_facet, global_facets, global_width, i, id, last, left, local_keys, mid, points, ref, ref1, right, row, statement;
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
          global_facets = facets_from_rows(this.hrd_find_overlaps(lo, hi));
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
//.........................................................................................................
          for (global_facet of global_facets) {
            statement = SQL`select * from hrd_runs where facet = $global_facet and lo <= $hi and hi >= $lo`;
            gfph = ' '.repeat(global_facet.length);
            for (cid = i = ref = lo, ref1 = hi; (ref <= ref1 ? i <= ref1 : i >= ref1); cid = ref <= ref1 ? ++i : --i) {
              local_keys = facets_from_rows(this.hrd_find_overlaps(cid));
              chr = String.fromCodePoint(cid);
              color = (local_keys.has(global_facet)) ? colors.in : colors.out;
              points += color(chr);
            }
            echo(f`${global_facet}:<15c; ${' '}:>6c; ${points}`);
            for (row of this.walk(statement, {global_facet, lo, hi})) {
              id = row.rowid.replace(/^.*?=(\d+)/, '[$1]');
              first = (Math.max(row.lo, lo)) - lo;
              last = (Math.min(row.hi, hi)) - lo;
              left = GUY.trm.grey('│'.repeat(first));
              mid = GUY.trm.gold('█'.repeat(last - first + 1));
              right = GUY.trm.grey('│'.repeat(global_width - last));
              echo(colors.run(f`${gfph}:<15c; ${id}:>6c; ${left}${mid}${right}`));
            }
            points = '';
          }
          //   #.......................................................................................................
          //   if rows.length is 0
          //     facet = '-:-'
          //     color = colors_by_facets[ facet ] ? fallback_color
          //     ( families[ key ] ?= '' ) += ( color chr )
          //   else
          //     for row in rows
          //       facet = "#{row.key}:#{row.value_json}"
          //       color = warn_color
          //   chr_string += color chr
          // #.........................................................................................................
          // debug 'Ωdbrh___3', chr_string
          return null;
        }

      };
      (() => {        //.......................................................................................................
        var colors_by_facets, h, key;
        h = Hoard_v.rebuild();
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
        h.visualize({
          lo: cid_of('A'),
          hi: cid_of('z')
        });
        return null;
      })();
      // #.......................................................................................................
      // do =>
      //   h   = Hoard_v.rebuild()
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMtaG9hcmQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxrQkFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLHlCQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO0lBQUEsb0JBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsdUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdF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REFBQSxFQUEyRCxLQUFLLENBQUM7TUFBbkUsQ0FBOUIsRUFYRjs7O01BY0UsSUFBRyxXQUFIO1FBQ0UsSUFBOEUsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFoQixHQUF5QixDQUF2RztBQUFBO1VBQUEsS0FBQSxxQ0FBQTs7WUFBQSxJQUFBLENBQUssV0FBTCxFQUFrQixjQUFsQixFQUFrQyxPQUFBLENBQVEsSUFBUixDQUFsQztVQUFBLENBQUE7U0FERjtPQWRGOzs7O2FBbUJHO0lBcEJxQyxDQUFBLElBQXhDOztBQXhlQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLWRicmljLWhvYXJkJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbkZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxueyBEYnJpYyxcbiAgRGJyaWNfc3RkLFxuICBJRE4sXG4gIExJVCxcbiAgU1FMLFxuICBWRUMsXG4gIGZyb21fYm9vbCxcbiAgYXNfYm9vbCxcbiAgVHJ1ZSxcbiAgRmFsc2UsXG4gIHVucXVvdGVfbmFtZSwgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9kYnJpYydcbiMgeyBsZXRzLCAgICAgICAgICAgICAgICAgfSA9IGludGVybmFsc1xueyBkYnJpY19wbHVnaW46IFxcXG4gICAgZGJyaWNfaG9hcmRfcGx1Z2luLCB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9pbnRlcm1pc3Npb24yJ1xueyB0eXBlX29mLCAgICAgICAgICAgICAgfSA9ICggcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi91bnN0YWJsZS1ycHItdHlwZV9vZi1icmljcycgKS5yZXF1aXJlX3R5cGVfb2YoKVxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNpZF9vZiA9ICggeCApIC0+IHguY29kZVBvaW50QXQgMFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbnNlcnRfdW5pY29kZV9leGNsdXNpb25zID0gKCBoICkgLT5cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAtSW5maW5pdHksIGhpOiAgICAgICAgLTEsIGtleTogJyR4JywgdmFsdWU6IFwibmVnYXRpdmUgQ0lEc1wiLCAgIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweDAwMDAsIGhpOiAgICAweDAwMDAsIGtleTogJyR4JywgdmFsdWU6IFwiemVybyBieXRlc1wiLCAgICAgIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGQ4MDAsIGhpOiAgICAweGRiZmYsIGtleTogJyR4JywgdmFsdWU6IFwiaGlnaCBzdXJyb2dhdGVzXCIsIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGRjMDAsIGhpOiAgICAweGRmZmYsIGtleTogJyR4JywgdmFsdWU6IFwibG93IHN1cnJvZ2F0ZXNcIiwgIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGZkZDAsIGhpOiAgICAweGZkZWYsIGtleTogJyR4JywgdmFsdWU6IFwibm9uY2hhcmFjdGVyc1wiLCAgIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGZmZmUsIGhpOiAgICAweGZmZmYsIGtleTogJyR4JywgdmFsdWU6IFwibm9uY2hhcmFjdGVyc1wiLCAgIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgMHgxMTAwMDAsIGhpOiArSW5maW5pdHksIGtleTogJyR4JywgdmFsdWU6IFwiZXhjZXNzaXZlIENJRHNcIiwgIH1cbiAgO251bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19ob2FyZF9wbHVnaW5fYmFzaWNzOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmQgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIEBwbHVnaW5zOiBbXG4gICAgICAgIGRicmljX2hvYXJkX3BsdWdpblxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBoID0gSG9hcmQucmVidWlsZCgpXG4gICAgQGVxICggzqlkYnJoX19fNCA9IC0+ICdzdGRfZ2V0X3RhYmxlcycgICAgICAgICAgICAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX181ID0gLT4gJ2hyZF9maW5kX3J1bnMnICAgICAgICAgICAgICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzYgPSAtPiAnaHJkX2luc2VydF9ydW4nICAgICAgICAgICAgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX19fNyA9IC0+ICdocmRfZmluZF9vdmVybGFwcycgICAgICAgICAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX184ID0gLT4gJ2hyZF9maW5kX292ZXJsYXBzX2Zvcl9rZXknICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzkgPSAtPiAnaHJkX2ZpbmRfcnVuc193aXRoX2NvbmZsaWN0c18xJyAgICAgICAgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBpbnNlcnRfdW5pY29kZV9leGNsdXNpb25zIGhcbiAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgLTB4MDAwYSwgaGk6ICAgIDB4MDAwMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgICAgICB9XG4gICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweDAwMDAsIGhpOiAgICAweDAwMGEsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicsICAgICAgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgaC5zdGF0ZW1lbnRzLmhyZF9maW5kX3J1bnNcbiAgICAgIHJvd3MgPSBoLndhbGsgaC5zdGF0ZW1lbnRzLmhyZF9maW5kX3J1bnNcbiAgICAgIEBlcSAoIM6pZGJyaF9fMTAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0tSW5maW5pdHksLTAwMDAwMSwkeCcsIGxvOiAtSW5maW5pdHksIGhpOiAtMSwga2V5OiAnJHgnLCB2YWx1ZTogJ25lZ2F0aXZlIENJRHMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0tMDAwMDBhLCswMDAwMDAsZm9vJywgbG86IC0xMCwgaGk6IDAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicgfVxuICAgICAgQGVxICggzqlkYnJoX18xMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwMDAsKzAwMDAwMCwkeCcsIGxvOiAwLCBoaTogMCwga2V5OiAnJHgnLCB2YWx1ZTogJ3plcm8gYnl0ZXMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDAwLCswMDAwMGEsZm9vJywgbG86IDAsIGhpOiAxMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzE0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZDgwMCwrMDBkYmZmLCR4JywgbG86IDU1Mjk2LCBoaTogNTYzMTksIGtleTogJyR4JywgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDBkYzAwLCswMGRmZmYsJHgnLCBsbzogNTYzMjAsIGhpOiA1NzM0Mywga2V5OiAnJHgnLCB2YWx1ZTogJ2xvdyBzdXJyb2dhdGVzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzE2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZmRkMCwrMDBmZGVmLCR4JywgbG86IDY0OTc2LCBoaTogNjUwMDcsIGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzE3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZmZmZSwrMDBmZmZmLCR4JywgbG86IDY1NTM0LCBoaTogNjU1MzUsIGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzE4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzExMDAwMCwrSW5maW5pdHksJHgnLCBsbzogMTExNDExMiwgaGk6IEluZmluaXR5LCBrZXk6ICckeCcsIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTkgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmaW5kX292ZXJsYXBzID0gaC5zdGF0ZW1lbnRzLmhyZF9maW5kX292ZXJsYXBzXG4gICAgICAjIGRlYnVnICfOqWRicmhfXzIwJywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIGZpbmRfb3ZlcmxhcHMsIHsgbG86IC0weDEsIGhpOiAweDBiLCB9XG4gICAgICAjIGRlYnVnICfOqWRicmhfXzIxJywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIGZpbmRfb3ZlcmxhcHMsIHsgbG86IC0weDEsIGhpOiAweDBiLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGxvICAgICAgPSAtMHgwMDAxXG4gICAgICBoaSAgICAgID0gKzB4MDAwYlxuICAgICAgc2VlbiAgICA9IG5ldyBTZXQoKVxuICAgICAgbWF0Y2hlciA9IFtdXG4gICAgICBmb3IgbiBpbiBbIGxvIC4uIGhpIF1cbiAgICAgICAgZm9yIHsgcm93aWQsIH0gZnJvbSBoLndhbGsgZmluZF9vdmVybGFwcywgeyBsbzogbiwgaGk6IG4sIH1cbiAgICAgICAgICBtYXRjaGVyLnB1c2ggcm93aWQgdW5sZXNzIHNlZW4uaGFzIHJvd2lkXG4gICAgICAgICAgc2Vlbi5hZGQgcm93aWRcbiAgICAgIEBlcSAoIM6pZGJyaF9fMjIgPSAtPiBtYXRjaGVyLmxlbmd0aCApLCA0XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlc3VsdCA9IFsgKCByb3dpZCBmb3IgeyByb3dpZCwgfSBmcm9tIGgud2FsayBmaW5kX292ZXJsYXBzLCB7IGxvLCBoaSwgfSApLi4uLCBdXG4gICAgICBAZXEgKCDOqWRicmhfXzIzID0gLT4gcmVzdWx0ICksIG1hdGNoZXJcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZmluZF9vdmVybGFwcyAgID0gaC5zdGF0ZW1lbnRzLmhyZF9maW5kX292ZXJsYXBzXG4gICAgICBmaW5kX2NvbmZsaWN0cyAgPSBoLnN0YXRlbWVudHMuaHJkX2ZpbmRfcnVuc193aXRoX2NvbmZsaWN0c18xXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pZGJyaF9fMjQgPSAtPiBbICggcm93IGZvciByb3cgZnJvbSBoLndhbGsgZmluZF9jb25mbGljdHMgKS4uLiwgXSApLCBbXVxuICAgICAgQGVxICggzqlkYnJoX18yNSA9IC0+IFsgKCBoLmhyZF9maW5kX3J1bnNfd2l0aF9jb25mbGljdHNfMSgpICkuLi4sIF0gICAgICAgICAgICAgICAgICksIFtdXG4gICAgICBAZXEgKCDOqWRicmhfXzI2ID0gLT4gaC5ocmRfdmFsaWRhdGVfMSgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBudWxsXG4gICAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86IC0weDAwMGEsIGhpOiArMHgwMDAzLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiZnV6XCInLCAgICAgIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgc2VlbiAgICA9IG5ldyBTZXQoKVxuICAgICAgbWF0Y2hlciA9IFtcbiAgICAgICAgeyBrZXk6ICdmb28nLCB2YWx1ZV9hOiAnXCJiYXJcIicsIHZhbHVlX2I6ICdcImZ1elwiJyB9LFxuICAgICAgICB7IGtleTogJ2ZvbycsIHZhbHVlX2E6ICdcImJhclwiJywgdmFsdWVfYjogJ1wiZnV6XCInIH0sIF1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmVzdWx0ID0gW11cbiAgICAgIGZvciByb3cgZnJvbSBoLndhbGsgZmluZF9jb25mbGljdHNcbiAgICAgICAgcmVzdWx0LnB1c2ggeyBrZXk6IHJvdy5rZXlfYSwgdmFsdWVfYTogcm93LnZhbHVlX2EsIHZhbHVlX2I6IHJvdy52YWx1ZV9iLCB9XG4gICAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSByZXN1bHRcbiAgICAgIEBlcSAoIM6pZGJyaF9fMjcgPSAtPiByZXN1bHQgKSwgbWF0Y2hlclxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXN1bHQgPSBbXVxuICAgICAgZm9yIHJvdyBmcm9tIGguaHJkX2ZpbmRfcnVuc193aXRoX2NvbmZsaWN0c18xKClcbiAgICAgICAgcmVzdWx0LnB1c2ggeyBrZXk6IHJvdy5rZXlfYSwgdmFsdWVfYTogcm93LnZhbHVlX2EsIHZhbHVlX2I6IHJvdy52YWx1ZV9iLCB9XG4gICAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSByZXN1bHRcbiAgICAgIEBlcSAoIM6pZGJyaF9fMjggPSAtPiByZXN1bHQgKSwgbWF0Y2hlclxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAdGhyb3dzICggzqlkYnJoX18yOSA9IC0+IGguaHJkX3ZhbGlkYXRlXzEoKSApLCAvZm91bmQgY29uZmxpY3RzL1xuICAgICAgdHJ5IGguaHJkX3ZhbGlkYXRlXzEoKSBjYXRjaCBlIHRoZW4gd2FybiAnzqlkYnJoX18zMCcsIGUubWVzc2FnZVxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gaC53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBfaHJkX2ZhbWlseV9oYXNfY29uZmxpY3RfMTtcIlxuICAgICAgcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9mYW1pbHlfaGFzX2NvbmZsaWN0XzE7XCJcbiAgICAgIEBlcSAoIM6pZGJyaF9fMzEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnLCBoYXNfY29uZmxpY3Q6IDAgfVxuICAgICAgQGVxICggzqlkYnJoX18zMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnLCBoYXNfY29uZmxpY3Q6IDAgfVxuICAgICAgQGVxICggzqlkYnJoX18zMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycsIGhhc19jb25mbGljdDogMCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzM0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ25lZ2F0aXZlIENJRHMnLCBoYXNfY29uZmxpY3Q6IDAgfVxuICAgICAgQGVxICggzqlkYnJoX18zNSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJywgaGFzX2NvbmZsaWN0OiAwIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMzYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnemVybyBieXRlcycsIGhhc19jb25mbGljdDogMCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzM3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgaGFzX2NvbmZsaWN0OiAxIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMzggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiZnV6XCInLCBoYXNfY29uZmxpY3Q6IDEgfVxuICAgICAgQGVxICggzqlkYnJoX18zOSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGVjaG8gcm93IGZvciByb3cgZnJvbSByb3dzID0gaC5ocmRfZmluZF9ydW5zX3dpdGhfY29uZmxpY3RzXzEoKVxuICAgICAgIyByb3dzID0gaC5ocmRfZmFtaWx5X2NvbmZsaWN0c18xKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19ob2FyZF9wbHVnaW5fZ3JvdXBzOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmQgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIEBwbHVnaW5zOiBbXG4gICAgICAgIGRicmljX2hvYXJkX3BsdWdpblxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBoID0gSG9hcmQucmVidWlsZCgpXG4gICAgaW5zZXJ0X3VuaWNvZGVfZXhjbHVzaW9ucyBoXG4gICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgIC0weDAwMGEsIGhpOiAgICAweDAwMDAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicsICAgICAgfVxuICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHgwMDAwLCBoaTogICAgMHgwMDBhLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInLCAgICAgIH1cbiAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4MDAwMCwgaGk6ICAgIDB4MDAwYSwga2V5OiAnbmljZScsIHZhbHVlOiAndHJ1ZScsICAgICAgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgaC5zdGF0ZW1lbnRzLl9ocmRfZmFjZXRfZ3JvdXBzXG4gICAgICByb3dzID0gaC53YWxrIGguc3RhdGVtZW50cy5faHJkX2ZhY2V0X2dyb3Vwc1xuICAgICAgQGVxICggzqlkYnJoX180MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ2V4Y2Vzc2l2ZSBDSURzJywgIHJ1bnM6IDEsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNDEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnLCBydW5zOiAxLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzQyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnbG93IHN1cnJvZ2F0ZXMnLCAgcnVuczogMSwgfVxuICAgICAgQGVxICggzqlkYnJoX180MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ25lZ2F0aXZlIENJRHMnLCAgIHJ1bnM6IDEsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNDQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICdub25jaGFyYWN0ZXJzJywgICBydW5zOiAyLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzQ1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnemVybyBieXRlcycsICAgICAgcnVuczogMSwgfVxuICAgICAgQGVxICggzqlkYnJoX180NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ2ZvbycsICB2YWx1ZTogJ1wiYmFyXCInLCAgICAgICAgICAgcnVuczogMiwgfVxuICAgICAgQGVxICggzqlkYnJoX180NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ25pY2UnLCB2YWx1ZTogJ3RydWUnLCAgICAgICAgICAgIHJ1bnM6IDEsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNDggPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBkbyA9PlxuICAgICMgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSByb3dzID0gaC5ocmRfZmluZF9ydW5zX2J5X2dyb3VwKClcbiAgICAjICAgcm93cyA9IGguaHJkX2ZpbmRfcnVuc19ieV9ncm91cCgpXG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fNDkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnLCBydW5zOiBbIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzExMDAwMCwrSW5maW5pdHksJHgnLCBsbzogMTExNDExMiwgaGk6IEluZmluaXR5LCBrZXk6ICckeCcsIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnIH0gXSB9XG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fNTAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnaGlnaCBzdXJyb2dhdGVzJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMGQ4MDAsKzAwZGJmZiwkeCcsIGxvOiA1NTI5NiwgaGk6IDU2MzE5LCBrZXk6ICckeCcsIHZhbHVlOiAnaGlnaCBzdXJyb2dhdGVzJyB9IF0gfVxuICAgICMgICBAZXEgKCDOqWRicmhfXzUxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ2xvdyBzdXJyb2dhdGVzJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMGRjMDAsKzAwZGZmZiwkeCcsIGxvOiA1NjMyMCwgaGk6IDU3MzQzLCBrZXk6ICckeCcsIHZhbHVlOiAnbG93IHN1cnJvZ2F0ZXMnIH0gXSB9XG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fNTIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycsIHJ1bnM6IFsgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0tSW5maW5pdHksLTAwMDAwMSwkeCcsIGxvOiAtSW5maW5pdHksIGhpOiAtMSwga2V5OiAnJHgnLCB2YWx1ZTogJ25lZ2F0aXZlIENJRHMnIH0gXSB9XG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fNTMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnbm9uY2hhcmFjdGVycycsIHJ1bnM6IFsgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDBmZGQwLCswMGZkZWYsJHgnLCBsbzogNjQ5NzYsIGhpOiA2NTAwNywga2V5OiAnJHgnLCB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnIH0sIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZmZmZSwrMDBmZmZmLCR4JywgbG86IDY1NTM0LCBoaTogNjU1MzUsIGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJyB9IF0gfVxuICAgICMgICBAZXEgKCDOqWRicmhfXzU0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ3plcm8gYnl0ZXMnLCBydW5zOiBbIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDAwMCwrMDAwMDAwLCR4JywgbG86IDAsIGhpOiAwLCBrZXk6ICckeCcsIHZhbHVlOiAnemVybyBieXRlcycgfSBdIH1cbiAgICAjICAgQGVxICggzqlkYnJoX181NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicsIHJ1bnM6IFsgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0tMDAwMDBhLCswMDAwMDAsZm9vJywgbG86IC0xMCwgaGk6IDAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicgfSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDAwLCswMDAwMGEsZm9vJywgbG86IDAsIGhpOiAxMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJyB9IF0gfVxuICAgICMgICBAZXEgKCDOqWRicmhfXzU2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnbmljZScsIHZhbHVlOiAndHJ1ZScsIHJ1bnM6IFsgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDAwLCswMDAwMGEsbmljZScsIGxvOiAwLCBoaTogMTAsIGtleTogJ25pY2UnLCB2YWx1ZTogJ3RydWUnIH0gXSB9XG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fNTcgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICMgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLmhyZF9maW5kX2ZhbWlsaWVzKClcbiAgICAgIHJvd3MgPSBoLmhyZF9maW5kX2ZhbWlsaWVzKClcbiAgICAgIEBlcSAoIM6pZGJyaF9fNTggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICdleGNlc3NpdmUgQ0lEcycsICBmaXJzdDogMTExNDExMiwgICBsYXN0OiBJbmZpbml0eSwgcnVuczogMSwgaGFzX2NvbmZsaWN0OiBmYWxzZSwgaXNfbm9ybWFsOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzU5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnaGlnaCBzdXJyb2dhdGVzJywgZmlyc3Q6IDU1Mjk2LCAgICAgbGFzdDogNTYzMTksICAgIHJ1bnM6IDEsIGhhc19jb25mbGljdDogZmFsc2UsIGlzX25vcm1hbDogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlkYnJoX182MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ2xvdyBzdXJyb2dhdGVzJywgIGZpcnN0OiA1NjMyMCwgICAgIGxhc3Q6IDU3MzQzLCAgICBydW5zOiAxLCBoYXNfY29uZmxpY3Q6IGZhbHNlLCBpc19ub3JtYWw6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNjEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICduZWdhdGl2ZSBDSURzJywgICBmaXJzdDogLUluZmluaXR5LCBsYXN0OiAtMSwgICAgICAgcnVuczogMSwgaGFzX2NvbmZsaWN0OiBmYWxzZSwgaXNfbm9ybWFsOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzYyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnbm9uY2hhcmFjdGVycycsICAgZmlyc3Q6IDY0OTc2LCAgICAgbGFzdDogNjU1MzUsICAgIHJ1bnM6IDIsIGhhc19jb25mbGljdDogZmFsc2UsIGlzX25vcm1hbDogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlkYnJoX182MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ3plcm8gYnl0ZXMnLCAgICAgIGZpcnN0OiAwLCAgICAgICAgIGxhc3Q6IDAsICAgICAgICBydW5zOiAxLCBoYXNfY29uZmxpY3Q6IGZhbHNlLCBpc19ub3JtYWw6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNjQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICdmb28nLCAgdmFsdWU6ICdcImJhclwiJywgICAgICAgICAgIGZpcnN0OiAtMTAsICAgICAgIGxhc3Q6IDEwLCAgICAgICBydW5zOiAyLCBoYXNfY29uZmxpY3Q6IHRydWUsICBpc19ub3JtYWw6IGZhbHNlLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzY1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnbmljZScsIHZhbHVlOiAndHJ1ZScsICAgICAgICAgICAgZmlyc3Q6IDAsICAgICAgICAgbGFzdDogMTAsICAgICAgIHJ1bnM6IDEsIGhhc19jb25mbGljdDogdHJ1ZSwgIGlzX25vcm1hbDogZmFsc2UsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNjYgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19ob2FyZF9wbHVnaW5fbm9ybWFsaXphdGlvbjogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEhvYXJkIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAcGx1Z2luczogW1xuICAgICAgICBkYnJpY19ob2FyZF9wbHVnaW5cbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBIb2FyZC5yZWJ1aWxkKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGVidWcgJ86pZGJyaF9fNjcnLCByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICBAZXEgKCDOqWRicmhfXzY4ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAweDAwMTAsIGhpOiAweDAwMTUsIGtleTogJ2EnLCB2YWx1ZTogJ1wiQVwiJywgfVxuICAgICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAweDAwMjAsIGhpOiAweDAwMjUsIGtleTogJ2EnLCB2YWx1ZTogJ1wiQVwiJywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGRlYnVnICfOqWRicmhfXzY5Jywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICBAZXEgKCDOqWRicmhfXzcwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgZDogJ2EsXCJBXCIsMScgfVxuICAgICAgQGVxICggzqlkYnJoX183MSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogMHgwMDE2LCBoaTogMHgwMDE2LCBrZXk6ICdhJywgdmFsdWU6ICdcIkFcIicsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBkZWJ1ZyAnzqlkYnJoX183MicsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgQGVxICggzqlkYnJoX183MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGQ6ICdhLFwiQVwiLDAnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNzQgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByb3dzID0gaC5ocmRfZmluZF9ub25ub3JtYWxfZmFtaWxpZXMoKVxuICAgICAgQGVxICggzqlkYnJoX183NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ2EnLCB2YWx1ZTogJ1wiQVwiJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzc2ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAweDAwMTAsIGhpOiAweDAwMTUsIGtleTogJ2InLCB2YWx1ZTogJ1wiQlwiJywgfVxuICAgICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAweDAwMjAsIGhpOiAweDAwMjUsIGtleTogJ2InLCB2YWx1ZTogJ1wiQlwiJywgfVxuICAgICAgIyBkZWJ1ZyAnzqlkYnJoX183NycsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgQGVxICggzqlkYnJoX183OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGQ6ICdhLFwiQVwiLDAnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNzkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBkOiAnYixcIkJcIiwxJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzgwID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAweDAwMTIsIGhpOiAweDAwMTcsIGtleTogJ2InLCB2YWx1ZTogJ1wiQlwiJywgfVxuICAgICAgIyBkZWJ1ZyAnzqlkYnJoX184MScsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgQGVxICggzqlkYnJoX184MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGQ6ICdhLFwiQVwiLDAnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fODMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBkOiAnYixcIkJcIiwwJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzg0ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfbm9ubm9ybWFsX2ZhbWlsaWVzKClcbiAgICAgIEBlcSAoIM6pZGJyaF9fODUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICdhJywgdmFsdWU6ICdcIkFcIicgfVxuICAgICAgQGVxICggzqlkYnJoX184NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ2InLCB2YWx1ZTogJ1wiQlwiJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzg3ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGVidWcgJ86pZGJyaF9fODgnLCByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLmhyZF9maW5kX2ZhbWlsaWVzKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19ob2FyZF9wbHVnaW5fbm9ybWFsaXphdGlvbl9hbmRfY29uZmxpY3RfZGV0ZWN0aW9uOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmQgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIEBwbHVnaW5zOiBbXG4gICAgICAgIGRicmljX2hvYXJkX3BsdWdpblxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IEhvYXJkLnJlYnVpbGQoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCAoIGNpZF9vZiAnWicgKSwgJ3Zvd2VsJywgZmFsc2VcbiAgICAgICMgZWNobygpOyBlY2hvIHJvdyBmb3Igcm93IGZyb20gaC5ocmRfZmluZF9ydW5zKClcbiAgICAgIHJvd3MgPSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgQGVxICggzqlkYnJoX184OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDEsKzAwMDA1YSx2b3dlbCcsIGxvOiA2NSwgaGk6IDkwLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fOTAgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLmhyZF9wdW5jaF8xIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ0EnICksIGtleTogJ3Zvd2VsJywgdmFsdWU6IHRydWUsIH1cbiAgICAgICMgZWNobygpOyBlY2hvIHJvdyBmb3Igcm93IGZyb20gaC5ocmRfZmluZF9ydW5zKClcbiAgICAgIHJvd3MgPSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgQGVxICggzqlkYnJoX185MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDEsKzAwMDA0MSx2b3dlbCcsIGxvOiA2NSwgaGk6IDY1LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoX185MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDIsKzAwMDA1YSx2b3dlbCcsIGxvOiA2NiwgaGk6IDkwLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fOTMgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLmhyZF9wdW5jaF8xICggY2lkX29mICdFJyApLCAoIGNpZF9vZiAnRScgKSwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgIyBlY2hvKCk7IGVjaG8gcm93IGZvciByb3cgZnJvbSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfcnVucygpXG4gICAgICBAZXEgKCDOqWRicmhfXzk0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MSwrMDAwMDQxLHZvd2VsJywgbG86IDY1LCBoaTogNjUsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzk1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MiwrMDAwMDQ0LHZvd2VsJywgbG86IDY2LCBoaTogNjgsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoX185NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDUsKzAwMDA0NSx2b3dlbCcsIGxvOiA2OSwgaGk6IDY5LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoX185NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDYsKzAwMDA1YSx2b3dlbCcsIGxvOiA3MCwgaGk6IDkwLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fOTggPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLmhyZF9wdW5jaF8xICggY2lkX29mICdJJyApLCAoIGNpZF9vZiAnSScgKSwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgIyBlY2hvKCk7IGVjaG8gcm93IGZvciByb3cgZnJvbSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfcnVucygpXG4gICAgICBAZXEgKCDOqWRicmhfXzk5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MSwrMDAwMDQxLHZvd2VsJywgbG86IDY1LCBoaTogNjUsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTAwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MiwrMDAwMDQ0LHZvd2VsJywgbG86IDY2LCBoaTogNjgsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEwMSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDUsKzAwMDA0NSx2b3dlbCcsIGxvOiA2OSwgaGk6IDY5LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEwMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDYsKzAwMDA0OCx2b3dlbCcsIGxvOiA3MCwgaGk6IDcyLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMDMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ5LCswMDAwNDksdm93ZWwnLCBsbzogNzMsIGhpOiA3Mywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMDQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDRhLCswMDAwNWEsdm93ZWwnLCBsbzogNzQsIGhpOiA5MCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTA1ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAnTycgKSwgKCBjaWRfb2YgJ08nICksICd2b3dlbCcsIHRydWVcbiAgICAgICMgZWNobygpOyBlY2hvIHJvdyBmb3Igcm93IGZyb20gaC5ocmRfZmluZF9ydW5zKClcbiAgICAgIHJvd3MgPSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgQGVxICggzqlkYnJoXzEwNiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDEsKzAwMDA0MSx2b3dlbCcsIGxvOiA2NSwgaGk6IDY1LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEwNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDIsKzAwMDA0NCx2b3dlbCcsIGxvOiA2NiwgaGk6IDY4LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMDggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ1LCswMDAwNDUsdm93ZWwnLCBsbzogNjksIGhpOiA2OSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMDkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ2LCswMDAwNDgsdm93ZWwnLCBsbzogNzAsIGhpOiA3Miwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTEwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0OSwrMDAwMDQ5LHZvd2VsJywgbG86IDczLCBoaTogNzMsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTExID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0YSwrMDAwMDRlLHZvd2VsJywgbG86IDc0LCBoaTogNzgsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzExMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNGYsKzAwMDA0Zix2b3dlbCcsIGxvOiA3OSwgaGk6IDc5LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoXzExMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNTAsKzAwMDA1YSx2b3dlbCcsIGxvOiA4MCwgaGk6IDkwLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMTQgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLmhyZF9wdW5jaF8xICggY2lkX29mICdVJyApLCAoIGNpZF9vZiAnVScgKSwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgIyBlY2hvKCk7IGVjaG8gcm93IGZvciByb3cgZnJvbSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfcnVucygpXG4gICAgICBAZXEgKCDOqWRicmhfMTE1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MSwrMDAwMDQxLHZvd2VsJywgbG86IDY1LCBoaTogNjUsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTE2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MiwrMDAwMDQ0LHZvd2VsJywgbG86IDY2LCBoaTogNjgsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzExNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDUsKzAwMDA0NSx2b3dlbCcsIGxvOiA2OSwgaGk6IDY5LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoXzExOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDYsKzAwMDA0OCx2b3dlbCcsIGxvOiA3MCwgaGk6IDcyLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMTkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ5LCswMDAwNDksdm93ZWwnLCBsbzogNzMsIGhpOiA3Mywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMjAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDRhLCswMDAwNGUsdm93ZWwnLCBsbzogNzQsIGhpOiA3OCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTIxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0ZiwrMDAwMDRmLHZvd2VsJywgbG86IDc5LCBoaTogNzksIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTIyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA1MCwrMDAwMDU0LHZvd2VsJywgbG86IDgwLCBoaTogODQsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEyMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNTUsKzAwMDA1NSx2b3dlbCcsIGxvOiA4NSwgaGk6IDg1LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEyNCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNTYsKzAwMDA1YSx2b3dlbCcsIGxvOiA4NiwgaGk6IDkwLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMjUgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBlY2hvIHJvdyBmb3Igcm93IGZyb20gaC5ocmRfZmluZF9mYW1pbGllcygpXG4gICAgICByb3dzID0gaC5ocmRfZmluZF9mYW1pbGllcygpXG4gICAgICBAZXEgKCDOqWRicmhfMTI2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJywgIGZpcnN0OiA2NiwgbGFzdDogOTAsIHJ1bnM6IDUsIGhhc19jb25mbGljdDogdHJ1ZSwgaXNfbm9ybWFsOiBmYWxzZSwgfVxuICAgICAgQGVxICggzqlkYnJoXzEyNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJywgICBmaXJzdDogNjUsIGxhc3Q6IDg1LCBydW5zOiA1LCBoYXNfY29uZmxpY3Q6IHRydWUsIGlzX25vcm1hbDogZmFsc2UsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMjggPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBjaHJfc3RyaW5nID0gJydcbiAgICAgIGZvciBjaWQgaW4gWyAoIGNpZF9vZiAnQScgKSAuLiAoIGNpZF9vZiAnWicgKSBdXG4gICAgICAgIHJvd3MgICAgICAgID0gWyAoIGguaHJkX2ZpbmRfb3ZlcmxhcHMgY2lkICkuLi4sIF1cbiAgICAgICAgaXNfdm93ZWwgICAgPSByb3dzWyAwIF0udmFsdWVcbiAgICAgICAgY29sb3IgICAgICAgPSBpZiBpc192b3dlbCB0aGVuIHdoaXRlIGVsc2UgYmx1ZVxuICAgICAgICBjaHIgICAgICAgICA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZFxuICAgICAgICBjaHJfc3RyaW5nICs9IGNvbG9yIGNoclxuICAgICAgICBAZXEgKCDOqWRicmhfMTI5ID0gLT4gcm93cy5sZW5ndGggICAgICAgICAgICAgICksIDFcbiAgICAgICAgQGVxICggzqlkYnJoXzEzMCA9IC0+IHJvd3NbIDAgXS5rZXkgICAgICAgICAgICApLCAndm93ZWwnXG4gICAgICAgIEBlcSAoIM6pZGJyaF8xMzEgPSAtPiB0eXBlX29mIGlzX3Zvd2VsICAgICAgICAgKSwgJ2Jvb2xlYW4nXG4gICAgICBkZWJ1ZyAnzqlkYnJoXzEzMicsIGNocl9zdHJpbmdcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb25fYW5kX2NvbmZsaWN0X2RldGVjdGlvbl8yOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmQgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIEBwbHVnaW5zOiBbXG4gICAgICAgIGRicmljX2hvYXJkX3BsdWdpblxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBIb2FyZF92IGV4dGVuZHMgSG9hcmRcbiAgICAgIHZpc3VhbGl6ZTogKHsgbG8sIGhpLCB9KSAtPlxuICAgICAgICBmYWNldF9mcm9tX3JvdyAgICA9ICggcm93ICkgLT4gXCIje3Jvdy5rZXl9OiN7cm93LnZhbHVlX2pzb259XCJcbiAgICAgICAgZmFjZXRzX2Zyb21fcm93cyAgPSAoIHJvd3MgKSAtPiBuZXcgU2V0IFsgKCBuZXcgU2V0ICggKCBmYWNldF9mcm9tX3JvdyByb3cgKSBmb3Igcm93IGZyb20gcm93cyApICkuLi4sIF0uc29ydCgpXG4gICAgICAgIGdsb2JhbF9mYWNldHMgICAgID0gZmFjZXRzX2Zyb21fcm93cyBAaHJkX2ZpbmRfb3ZlcmxhcHMgbG8sIGhpXG4gICAgICAgIGdsb2JhbF93aWR0aCAgICAgID0gaGkgLSBsb1xuICAgICAgICBjb2xvcnMgICAgICAgICAgICA9XG4gICAgICAgICAgZmFsbGJhY2s6ICAgKCBQLi4uICkgLT4gR1VZLnRybS5ncmV5ICBQLi4uXG4gICAgICAgICAgd2FybjogICAgICAgKCBQLi4uICkgLT4gR1VZLnRybS5yZWQgICBQLi4uXG4gICAgICAgICAgaW46ICAgICAgICAgKCBQLi4uICkgLT4gR1VZLnRybS5nb2xkICBQLi4uXG4gICAgICAgICAgb3V0OiAgICAgICAgKCBQLi4uICkgLT4gR1VZLnRybS5ibHVlICBQLi4uXG4gICAgICAgICAgcnVuOiAgICAgICAgKCBQLi4uICkgLT4gR1VZLnRybS5ncmV5ICBQLi4uXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZm9yIGdsb2JhbF9mYWNldCBmcm9tIGdsb2JhbF9mYWNldHNcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTUUxcIlwiXCJzZWxlY3QgKiBmcm9tIGhyZF9ydW5zIHdoZXJlIGZhY2V0ID0gJGdsb2JhbF9mYWNldCBhbmQgbG8gPD0gJGhpIGFuZCBoaSA+PSAkbG9cIlwiXCJcbiAgICAgICAgICBnZnBoICAgICAgPSAnICcucmVwZWF0IGdsb2JhbF9mYWNldC5sZW5ndGhcbiAgICAgICAgICBmb3IgY2lkIGluIFsgbG8gLi4gaGkgXVxuICAgICAgICAgICAgbG9jYWxfa2V5cyAgPSBmYWNldHNfZnJvbV9yb3dzIEBocmRfZmluZF9vdmVybGFwcyBjaWRcbiAgICAgICAgICAgIGNociAgICAgICAgID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkXG4gICAgICAgICAgICBjb2xvciAgICAgICA9IGlmICggbG9jYWxfa2V5cy5oYXMgZ2xvYmFsX2ZhY2V0ICkgdGhlbiBjb2xvcnMuaW4gZWxzZSBjb2xvcnMub3V0XG4gICAgICAgICAgICBwb2ludHMgICAgICs9IGNvbG9yIGNoclxuICAgICAgICAgIGVjaG8gZlwiI3tnbG9iYWxfZmFjZXR9OjwxNWM7ICN7JyAnfTo+NmM7ICN7cG9pbnRzfVwiXG4gICAgICAgICAgZm9yIHJvdyBmcm9tIEB3YWxrIHN0YXRlbWVudCwgeyBnbG9iYWxfZmFjZXQsIGxvLCBoaSwgfVxuICAgICAgICAgICAgaWQgICAgICAgICAgPSByb3cucm93aWQucmVwbGFjZSAvXi4qPz0oXFxkKykvLCAnWyQxXSdcbiAgICAgICAgICAgIGZpcnN0ICAgICAgID0gKCBNYXRoLm1heCByb3cubG8sIGxvICkgLSBsb1xuICAgICAgICAgICAgbGFzdCAgICAgICAgPSAoIE1hdGgubWluIHJvdy5oaSwgaGkgKSAtIGxvXG4gICAgICAgICAgICBsZWZ0ICAgICAgICA9IEdVWS50cm0uZ3JleSAn4pSCJy5yZXBlYXQgZmlyc3RcbiAgICAgICAgICAgIG1pZCAgICAgICAgID0gR1VZLnRybS5nb2xkICfilognLnJlcGVhdCBsYXN0IC0gZmlyc3QgKyAxXG4gICAgICAgICAgICByaWdodCAgICAgICA9IEdVWS50cm0uZ3JleSAn4pSCJy5yZXBlYXQgKCBnbG9iYWxfd2lkdGggLSBsYXN0IClcbiAgICAgICAgICAgIGVjaG8gY29sb3JzLnJ1biBmXCIje2dmcGh9OjwxNWM7ICN7aWR9Oj42YzsgI3tsZWZ0fSN7bWlkfSN7cmlnaHR9XCJcbiAgICAgICAgICBwb2ludHMgPSAnJ1xuICAgICAgICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgIyAgIGlmIHJvd3MubGVuZ3RoIGlzIDBcbiAgICAgICAgIyAgICAgZmFjZXQgPSAnLTotJ1xuICAgICAgICAjICAgICBjb2xvciA9IGNvbG9yc19ieV9mYWNldHNbIGZhY2V0IF0gPyBmYWxsYmFja19jb2xvclxuICAgICAgICAjICAgICAoIGZhbWlsaWVzWyBrZXkgXSA/PSAnJyApICs9ICggY29sb3IgY2hyIClcbiAgICAgICAgIyAgIGVsc2VcbiAgICAgICAgIyAgICAgZm9yIHJvdyBpbiByb3dzXG4gICAgICAgICMgICAgICAgZmFjZXQgPSBcIiN7cm93LmtleX06I3tyb3cudmFsdWVfanNvbn1cIlxuICAgICAgICAjICAgICAgIGNvbG9yID0gd2Fybl9jb2xvclxuICAgICAgICAjICAgY2hyX3N0cmluZyArPSBjb2xvciBjaHJcbiAgICAgICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICMgZGVidWcgJ86pZGJyaF9fXzMnLCBjaHJfc3RyaW5nXG4gICAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCAgICAgICAgICAgICAgICAgPSBIb2FyZF92LnJlYnVpbGQoKVxuICAgICAga2V5ICAgICAgICAgICAgICAgPSAndm93ZWwnXG4gICAgICBjb2xvcnNfYnlfZmFjZXRzICA9XG4gICAgICAgICd2b3dlbDp0cnVlJzogICAgIEdVWS50cm0uZ29sZFxuICAgICAgICAndm93ZWw6ZmFsc2UnOiAgICBHVVkudHJtLmJsdWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfcnVucyBvcmRlciBieSBsbztcIlxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgKCBjaWRfb2YgJ1onICksIGtleSwgZmFsc2VcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ2EnICksICggY2lkX29mICd6JyApLCBrZXksIGZhbHNlXG4gICAgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAnQScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX3J1bnMgb3JkZXIgYnkgbG87XCJcbiAgICAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ0UnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAnSScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICBoLmhyZF9wdW5jaF8xICggY2lkX29mICdPJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ1UnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAnTicgKSwgKCBjaWRfb2YgJ1onICksICd1cHBlcicsIHRydWVcbiAgICAgIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX3J1bnMgb3JkZXIgYnkgbG87XCJcbiAgICAgIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2ZhbWlseV9jb25mbGljdHNfMTtcIlxuICAgICAgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfZmFtaWx5X2NvbmZsaWN0c18yO1wiXG4gICAgICBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9mYW1pbHlfY29uZmxpY3RzXzIgd2hlcmUga2V5ID0gJGtleSBhbmQgdmFsdWUgIT0gJ3RydWUnO1wiLCB7IGtleSwgfVxuICAgICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIF9ocmRfZmFtaWx5X2hhc19jb25mbGljdF8xO1wiXG4gICAgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9jbGFuX2hhc19jb25mbGljdF8yO1wiXG4gICAgICBoLnRibF9lY2hvX2FzX3RleHQgaC5ocmRfZmluZF9mYW1pbGllc1xuICAgICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIF9ocmRfZmFjZXRfZ3JvdXBfaGFzX2NvbmZsaWN0XzI7XCJcbiAgICAgIGgudmlzdWFsaXplIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ3onICksIH1cbiAgICAgIDtudWxsXG4gICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgZG8gPT5cbiAgICAjICAgaCAgID0gSG9hcmRfdi5yZWJ1aWxkKClcbiAgICAjICAga2V5ID0gJ3Zvd2VsJ1xuICAgICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjICAgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfcnVucyBvcmRlciBieSBsbztcIlxuICAgICMgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCAoIGNpZF9vZiAnWicgKSwga2V5LCBmYWxzZVxuICAgICMgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdhJyApLCAoIGNpZF9vZiAneicgKSwga2V5LCBmYWxzZVxuICAgICMgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICMgICBoLmhyZF9wdW5jaF8xICggY2lkX29mICdBJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAjICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ydW5zIG9yZGVyIGJ5IGxvO1wiXG4gICAgIyAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnRScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgIyAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnSScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgIyAgIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX3J1bnMgb3JkZXIgYnkgbG87XCJcbiAgICAjICAgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfZmFtaWx5X2NvbmZsaWN0c18xO1wiXG4gICAgIyAgIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2ZhbWlseV9jb25mbGljdHNfMjtcIlxuICAgICMgICBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9mYW1pbHlfY29uZmxpY3RzXzIgd2hlcmUga2V5ID0gJGtleSBhbmQgdmFsdWUgIT0gJ3RydWUnO1wiLCB7IGtleSwgfVxuICAgICMgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9mYW1pbHlfaGFzX2NvbmZsaWN0XzE7XCJcbiAgICAjICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIF9ocmRfY2xhbl9oYXNfY29uZmxpY3RfMjtcIlxuICAgICMgICBoLnRibF9lY2hvX2FzX3RleHQgaC5ocmRfZmluZF9mYW1pbGllc1xuICAgICMgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9mYWNldF9ncm91cF9oYXNfY29uZmxpY3RfMjtcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBkb19jb3ZlcmFnZSA9IHRydWVcbiAgZG9fY292ZXJhZ2UgPSBmYWxzZVxuICBpZiBkb19jb3ZlcmFnZVxuICAgIHsgQ292ZXJhZ2VfYW5hbHl6ZXIsICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2NvdmVyYWdlLWFuYWx5emVyJ1xuICAgIGNhID0gbmV3IENvdmVyYWdlX2FuYWx5emVyKClcbiAgICAjIGNhLndyYXBfY2xhc3MgRGJyaWNfc3RkXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2hvYXJkX3BsdWdpbl9ub3JtYWxpemF0aW9uX2FuZF9jb25mbGljdF9kZXRlY3Rpb25fMjogdGVzdHMuZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb25fYW5kX2NvbmZsaWN0X2RldGVjdGlvbl8yLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkYnJpY19keW5hbWljX2J1aWxkX3Byb3BlcnRpZXM6IHRlc3RzLmRicmljX2R5bmFtaWNfYnVpbGRfcHJvcGVydGllcywgfVxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIGRvX2NvdmVyYWdlXG4gICAgd2FybiAnzqlkYnJoXzEzMycsIFwibm90IGNvdmVyZWQ6XCIsIHJldmVyc2UgbmFtZSBmb3IgbmFtZSBpbiBjYS51bnVzZWRfbmFtZXMgaWYgY2EudW51c2VkX25hbWVzLmxlbmd0aCA+IDBcbiAgICAjIGhlbHAgJ86pZGJyaF8xMzQnLCBjYS51c2VkX25hbWVzXG4gICAgIyB1cmdlICfOqWRicmhfMTM1JywgY291bnQsIG5hbWVzIGZvciBjb3VudCwgbmFtZXMgb2YgY2EubmFtZXNfYnlfY291bnRzXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgO251bGxcblxuXG4iXX0=
