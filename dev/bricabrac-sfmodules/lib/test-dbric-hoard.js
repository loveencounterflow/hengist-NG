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
      var Hoard, h, Ωdbrh___1, Ωdbrh___2, Ωdbrh___3, Ωdbrh___4, Ωdbrh___5, Ωdbrh___6;
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
        return indexOf.call(Object.keys(h.statements), 'hrd_insert_run') >= 0;
      }), true);
      this.eq((Ωdbrh___4 = function() {
        return indexOf.call(Object.keys(h.statements), 'hrd_find_overlaps') >= 0;
      }), true);
      this.eq((Ωdbrh___5 = function() {
        return indexOf.call(Object.keys(h.statements), 'hrd_find_overlaps_for_key') >= 0;
      }), true);
      this.eq((Ωdbrh___6 = function() {
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
        var rows, Ωdbrh__10, Ωdbrh__11, Ωdbrh__12, Ωdbrh__13, Ωdbrh__14, Ωdbrh__15, Ωdbrh__16, Ωdbrh___7, Ωdbrh___8, Ωdbrh___9;
        // echo row for row from rows = h.walk h.statements.hrd_find_runs
        rows = h.walk(h.statements.hrd_find_runs);
        this.eq((Ωdbrh___7 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=-Infinity,-000001,$x',
          lo: -2e308,
          hi: -1,
          key: '$x',
          value: 'negative CIDs'
        });
        this.eq((Ωdbrh___8 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=-00000a,+000000,foo',
          lo: -10,
          hi: 0,
          key: 'foo',
          value: '"bar"'
        });
        this.eq((Ωdbrh___9 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000000,+000000,$x',
          lo: 0,
          hi: 0,
          key: '$x',
          value: 'zero bytes'
        });
        this.eq((Ωdbrh__10 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000000,+00000a,foo',
          lo: 0,
          hi: 10,
          key: 'foo',
          value: '"bar"'
        });
        this.eq((Ωdbrh__11 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00d800,+00dbff,$x',
          lo: 55296,
          hi: 56319,
          key: '$x',
          value: 'high surrogates'
        });
        this.eq((Ωdbrh__12 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00dc00,+00dfff,$x',
          lo: 56320,
          hi: 57343,
          key: '$x',
          value: 'low surrogates'
        });
        this.eq((Ωdbrh__13 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00fdd0,+00fdef,$x',
          lo: 64976,
          hi: 65007,
          key: '$x',
          value: 'noncharacters'
        });
        this.eq((Ωdbrh__14 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00fffe,+00ffff,$x',
          lo: 65534,
          hi: 65535,
          key: '$x',
          value: 'noncharacters'
        });
        this.eq((Ωdbrh__15 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+110000,+Infinity,$x',
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
      (() => {        //.......................................................................................................
        var find_overlaps, hi, i, lo, matcher, n, ref, ref1, result, rowid, seen, y, Ωdbrh__19, Ωdbrh__20;
        find_overlaps = h.statements.hrd_find_overlaps;
        // debug 'Ωdbrh__17', row for row from rows = h.walk find_overlaps, { lo: -0x1, hi: 0x0b, }
        // debug 'Ωdbrh__18', row for row from rows = h.walk find_overlaps, { lo: -0x1, hi: 0x0b, }
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
        this.eq((Ωdbrh__19 = function() {
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
        this.eq((Ωdbrh__20 = function() {
          return result;
        }), matcher);
        return null;
      })();
      (() => {        //.......................................................................................................
        var e, find_conflicts, find_overlaps, matcher, result, row, rows, seen, Ωdbrh__21, Ωdbrh__22, Ωdbrh__23, Ωdbrh__24, Ωdbrh__25, Ωdbrh__26, Ωdbrh__28, Ωdbrh__29, Ωdbrh__30, Ωdbrh__31, Ωdbrh__32, Ωdbrh__33, Ωdbrh__34, Ωdbrh__35, Ωdbrh__36;
        find_overlaps = h.statements.hrd_find_overlaps;
        find_conflicts = h.statements.hrd_find_runs_with_conflicts_1;
        //.....................................................................................................
        this.eq((Ωdbrh__21 = function() {
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
        this.eq((Ωdbrh__22 = function() {
          return [...(h.hrd_find_runs_with_conflicts_1())];
        }), []);
        this.eq((Ωdbrh__23 = function() {
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
        this.eq((Ωdbrh__24 = function() {
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
        this.eq((Ωdbrh__25 = function() {
          return result;
        }), matcher);
        //.....................................................................................................
        this.throws((Ωdbrh__26 = function() {
          return h.hrd_validate_1();
        }), /found conflicts/);
        try {
          h.hrd_validate_1();
        } catch (error) {
          e = error;
          warn('Ωdbrh__27', e.message);
        }
        // echo row for row from h.walk SQL"select * from _hrd_family_has_conflict_1;"
        rows = h.walk(SQL`select * from _hrd_family_has_conflict_1;`);
        this.eq((Ωdbrh__28 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'excessive CIDs',
          has_conflict: 0
        });
        this.eq((Ωdbrh__29 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'high surrogates',
          has_conflict: 0
        });
        this.eq((Ωdbrh__30 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'low surrogates',
          has_conflict: 0
        });
        this.eq((Ωdbrh__31 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'negative CIDs',
          has_conflict: 0
        });
        this.eq((Ωdbrh__32 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'noncharacters',
          has_conflict: 0
        });
        this.eq((Ωdbrh__33 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'zero bytes',
          has_conflict: 0
        });
        this.eq((Ωdbrh__34 = function() {
          return rows.next().value;
        }), {
          key: 'foo',
          value: '"bar"',
          has_conflict: 1
        });
        this.eq((Ωdbrh__35 = function() {
          return rows.next().value;
        }), {
          key: 'foo',
          value: '"fuz"',
          has_conflict: 1
        });
        this.eq((Ωdbrh__36 = function() {
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
        var rows, Ωdbrh__37, Ωdbrh__38, Ωdbrh__39, Ωdbrh__40, Ωdbrh__41, Ωdbrh__42, Ωdbrh__43, Ωdbrh__44, Ωdbrh__45;
        // echo row for row from rows = h.walk h.statements._hrd_facet_groups
        rows = h.walk(h.statements._hrd_facet_groups);
        this.eq((Ωdbrh__37 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'excessive CIDs',
          runs: 1
        });
        this.eq((Ωdbrh__38 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'high surrogates',
          runs: 1
        });
        this.eq((Ωdbrh__39 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'low surrogates',
          runs: 1
        });
        this.eq((Ωdbrh__40 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'negative CIDs',
          runs: 1
        });
        this.eq((Ωdbrh__41 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'noncharacters',
          runs: 2
        });
        this.eq((Ωdbrh__42 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'zero bytes',
          runs: 1
        });
        this.eq((Ωdbrh__43 = function() {
          return rows.next().value;
        }), {
          key: 'foo',
          value: '"bar"',
          runs: 2
        });
        this.eq((Ωdbrh__44 = function() {
          return rows.next().value;
        }), {
          key: 'nice',
          value: 'true',
          runs: 1
        });
        this.eq((Ωdbrh__45 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      (() => {        // #.......................................................................................................
        // do =>
        //   # echo row for row from rows = h.hrd_find_runs_by_group()
        //   rows = h.hrd_find_runs_by_group()
        //   @eq ( Ωdbrh__46 = -> rows.next().value  ), { key: '$x', value: 'excessive CIDs', runs: [ { rowid: 't:hrd:runs:V=+110000,+Infinity,$x', lo: 1114112, hi: Infinity, key: '$x', value: 'excessive CIDs' } ] }
        //   @eq ( Ωdbrh__47 = -> rows.next().value  ), { key: '$x', value: 'high surrogates', runs: [ { rowid: 't:hrd:runs:V=+00d800,+00dbff,$x', lo: 55296, hi: 56319, key: '$x', value: 'high surrogates' } ] }
        //   @eq ( Ωdbrh__48 = -> rows.next().value  ), { key: '$x', value: 'low surrogates', runs: [ { rowid: 't:hrd:runs:V=+00dc00,+00dfff,$x', lo: 56320, hi: 57343, key: '$x', value: 'low surrogates' } ] }
        //   @eq ( Ωdbrh__49 = -> rows.next().value  ), { key: '$x', value: 'negative CIDs', runs: [ { rowid: 't:hrd:runs:V=-Infinity,-000001,$x', lo: -Infinity, hi: -1, key: '$x', value: 'negative CIDs' } ] }
        //   @eq ( Ωdbrh__50 = -> rows.next().value  ), { key: '$x', value: 'noncharacters', runs: [ { rowid: 't:hrd:runs:V=+00fdd0,+00fdef,$x', lo: 64976, hi: 65007, key: '$x', value: 'noncharacters' }, { rowid: 't:hrd:runs:V=+00fffe,+00ffff,$x', lo: 65534, hi: 65535, key: '$x', value: 'noncharacters' } ] }
        //   @eq ( Ωdbrh__51 = -> rows.next().value  ), { key: '$x', value: 'zero bytes', runs: [ { rowid: 't:hrd:runs:V=+000000,+000000,$x', lo: 0, hi: 0, key: '$x', value: 'zero bytes' } ] }
        //   @eq ( Ωdbrh__52 = -> rows.next().value  ), { key: 'foo', value: '"bar"', runs: [ { rowid: 't:hrd:runs:V=-00000a,+000000,foo', lo: -10, hi: 0, key: 'foo', value: '"bar"' }, { rowid: 't:hrd:runs:V=+000000,+00000a,foo', lo: 0, hi: 10, key: 'foo', value: '"bar"' } ] }
        //   @eq ( Ωdbrh__53 = -> rows.next().value  ), { key: 'nice', value: 'true', runs: [ { rowid: 't:hrd:runs:V=+000000,+00000a,nice', lo: 0, hi: 10, key: 'nice', value: 'true' } ] }
        //   @eq ( Ωdbrh__54 = -> rows.next().done   ), true
        //   ;null
        //.......................................................................................................
        var rows, Ωdbrh__55, Ωdbrh__56, Ωdbrh__57, Ωdbrh__58, Ωdbrh__59, Ωdbrh__60, Ωdbrh__61, Ωdbrh__62, Ωdbrh__63;
        // echo row for row from rows = h.hrd_find_families()
        rows = h.hrd_find_families();
        this.eq((Ωdbrh__55 = function() {
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
        this.eq((Ωdbrh__56 = function() {
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
        this.eq((Ωdbrh__57 = function() {
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
        this.eq((Ωdbrh__58 = function() {
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
        this.eq((Ωdbrh__59 = function() {
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
        this.eq((Ωdbrh__60 = function() {
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
        this.eq((Ωdbrh__61 = function() {
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
        this.eq((Ωdbrh__62 = function() {
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
        this.eq((Ωdbrh__63 = function() {
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
        var h, row, rows, Ωdbrh__65, Ωdbrh__67, Ωdbrh__68, Ωdbrh__70, Ωdbrh__71, Ωdbrh__72, Ωdbrh__73, Ωdbrh__75, Ωdbrh__76, Ωdbrh__77, Ωdbrh__79, Ωdbrh__80, Ωdbrh__81, Ωdbrh__82, Ωdbrh__83, Ωdbrh__84;
        h = Hoard.rebuild();
        for (row of rows = h.walk(SQL`select * from hrd_normalization;`)) {
          //.....................................................................................................
          debug('Ωdbrh__64', row);
        }
        rows = h.walk(SQL`select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;`);
        this.eq((Ωdbrh__65 = function() {
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
        // debug 'Ωdbrh__66', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
        rows = h.walk(SQL`select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;`);
        this.eq((Ωdbrh__67 = function() {
          return rows.next().value;
        }), {
          d: 'a,"A",1'
        });
        this.eq((Ωdbrh__68 = function() {
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
        // debug 'Ωdbrh__69', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
        rows = h.walk(SQL`select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;`);
        this.eq((Ωdbrh__70 = function() {
          return rows.next().value;
        }), {
          d: 'a,"A",0'
        });
        this.eq((Ωdbrh__71 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        rows = h.hrd_find_nonnormal_families();
        this.eq((Ωdbrh__72 = function() {
          return rows.next().value;
        }), {
          key: 'a',
          value: '"A"'
        });
        this.eq((Ωdbrh__73 = function() {
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
        // debug 'Ωdbrh__74', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
        rows = h.walk(SQL`select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;`);
        this.eq((Ωdbrh__75 = function() {
          return rows.next().value;
        }), {
          d: 'a,"A",0'
        });
        this.eq((Ωdbrh__76 = function() {
          return rows.next().value;
        }), {
          d: 'b,"B",1'
        });
        this.eq((Ωdbrh__77 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.statements.hrd_insert_run.run({
          lo: 0x0012,
          hi: 0x0017,
          key: 'b',
          value: '"B"'
        });
        // debug 'Ωdbrh__78', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
        rows = h.walk(SQL`select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;`);
        this.eq((Ωdbrh__79 = function() {
          return rows.next().value;
        }), {
          d: 'a,"A",0'
        });
        this.eq((Ωdbrh__80 = function() {
          return rows.next().value;
        }), {
          d: 'b,"B",0'
        });
        this.eq((Ωdbrh__81 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        rows = h.hrd_find_nonnormal_families();
        this.eq((Ωdbrh__82 = function() {
          return rows.next().value;
        }), {
          key: 'a',
          value: '"A"'
        });
        this.eq((Ωdbrh__83 = function() {
          return rows.next().value;
        }), {
          key: 'b',
          value: '"B"'
        });
        this.eq((Ωdbrh__84 = function() {
          return rows.next().done;
        }), true);
        for (row of rows = h.hrd_find_families()) {
          //.....................................................................................................
          debug('Ωdbrh__85', row);
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
        var chr, chr_string, cid, color, h, i, is_vowel, ref, ref1, row, rows, Ωdbrh_100, Ωdbrh_101, Ωdbrh_102, Ωdbrh_103, Ωdbrh_104, Ωdbrh_105, Ωdbrh_106, Ωdbrh_107, Ωdbrh_108, Ωdbrh_109, Ωdbrh_110, Ωdbrh_111, Ωdbrh_112, Ωdbrh_113, Ωdbrh_114, Ωdbrh_115, Ωdbrh_116, Ωdbrh_117, Ωdbrh_118, Ωdbrh_119, Ωdbrh_120, Ωdbrh_121, Ωdbrh_122, Ωdbrh_123, Ωdbrh_124, Ωdbrh_125, Ωdbrh_126, Ωdbrh_127, Ωdbrh_128, Ωdbrh__86, Ωdbrh__87, Ωdbrh__88, Ωdbrh__89, Ωdbrh__90, Ωdbrh__91, Ωdbrh__92, Ωdbrh__93, Ωdbrh__94, Ωdbrh__95, Ωdbrh__96, Ωdbrh__97, Ωdbrh__98, Ωdbrh__99;
        h = Hoard.rebuild();
        //.....................................................................................................
        h.hrd_add_run(cid_of('A'), cid_of('Z'), 'vowel', false);
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh__86 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+00005a,vowel',
          lo: 65,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh__87 = function() {
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
        this.eq((Ωdbrh__88 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+000041,vowel',
          lo: 65,
          hi: 65,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh__89 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000042,+00005a,vowel',
          lo: 66,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh__90 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.hrd_punch_1(cid_of('E'), cid_of('E'), 'vowel', true);
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
          rowid: 't:hrd:runs:V=+000042,+000044,vowel',
          lo: 66,
          hi: 68,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh__93 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000045,+000045,vowel',
          lo: 69,
          hi: 69,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh__94 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000046,+00005a,vowel',
          lo: 70,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh__95 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.hrd_punch_1(cid_of('I'), cid_of('I'), 'vowel', true);
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh__96 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+000041,vowel',
          lo: 65,
          hi: 65,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh__97 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000042,+000044,vowel',
          lo: 66,
          hi: 68,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh__98 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000045,+000045,vowel',
          lo: 69,
          hi: 69,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh__99 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000046,+000048,vowel',
          lo: 70,
          hi: 72,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_100 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000049,+000049,vowel',
          lo: 73,
          hi: 73,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_101 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00004a,+00005a,vowel',
          lo: 74,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_102 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.hrd_punch_1(cid_of('O'), cid_of('O'), 'vowel', true);
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh_103 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+000041,vowel',
          lo: 65,
          hi: 65,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_104 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000042,+000044,vowel',
          lo: 66,
          hi: 68,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_105 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000045,+000045,vowel',
          lo: 69,
          hi: 69,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_106 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000046,+000048,vowel',
          lo: 70,
          hi: 72,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_107 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000049,+000049,vowel',
          lo: 73,
          hi: 73,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_108 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00004a,+00004e,vowel',
          lo: 74,
          hi: 78,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_109 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00004f,+00004f,vowel',
          lo: 79,
          hi: 79,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_110 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000050,+00005a,vowel',
          lo: 80,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_111 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.hrd_punch_1(cid_of('U'), cid_of('U'), 'vowel', true);
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh_112 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+000041,vowel',
          lo: 65,
          hi: 65,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_113 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000042,+000044,vowel',
          lo: 66,
          hi: 68,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_114 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000045,+000045,vowel',
          lo: 69,
          hi: 69,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_115 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000046,+000048,vowel',
          lo: 70,
          hi: 72,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_116 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000049,+000049,vowel',
          lo: 73,
          hi: 73,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_117 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00004a,+00004e,vowel',
          lo: 74,
          hi: 78,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_118 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00004f,+00004f,vowel',
          lo: 79,
          hi: 79,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_119 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000050,+000054,vowel',
          lo: 80,
          hi: 84,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_120 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000055,+000055,vowel',
          lo: 85,
          hi: 85,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_121 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000056,+00005a,vowel',
          lo: 86,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_122 = function() {
          return rows.next().done;
        }), true);
        for (row of h.hrd_find_families()) {
          //.....................................................................................................
          echo(row);
        }
        rows = h.hrd_find_families();
        this.eq((Ωdbrh_123 = function() {
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
        this.eq((Ωdbrh_124 = function() {
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
        this.eq((Ωdbrh_125 = function() {
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
          this.eq((Ωdbrh_126 = function() {
            return rows.length;
          }), 1);
          this.eq((Ωdbrh_127 = function() {
            return rows[0].key;
          }), 'vowel');
          this.eq((Ωdbrh_128 = function() {
            return type_of(is_vowel);
          }), 'boolean');
        }
        debug('Ωdbrh_129', chr_string);
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
              local_keys = facets_from_rows(this.hrd_find_overlaps(cid));
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
          for (row of this.walk(SQL`select * from hrd_normalization where is_normal = false;`)) {
            //.................................................................................................
            echo(row);
          }
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
        h.hrd_punch_1(cid_of('U'), null, key, true);
        h.visualize({
          lo: cid_of('A'),
          hi: cid_of('z')
        });
        h.hrd_punch_1(cid_of('a'), null, key, true);
        h.hrd_punch_1(cid_of('d'), null, key, false);
        h.hrd_punch_1(cid_of('u'), null, key, true);
        h.hrd_punch_1(cid_of('c'), cid_of('x'), key, true);
        h.visualize({
          lo: cid_of('A'),
          hi: cid_of('z')
        });
        h.hrd_normalize();
        h.visualize({
          lo: cid_of('A'),
          hi: cid_of('z')
        });
        h.hrd_punch_1(cid_of('b'), null, key, false);
        h.hrd_punch_1(cid_of('c'), null, key, false);
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
        // h.hrd_normalize()
        // h.visualize { lo: ( cid_of 'A' ), hi: ( cid_of 'z' ), }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMtaG9hcmQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxrQkFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLHlCQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO0lBQUEsb0JBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsdUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdF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LENBQUEsR0FBQTtBQUN4QyxVQUFBLGlCQUFBLEVBQUEsRUFBQSxFQUFBLFdBQUEsRUFBQSxXQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUE7TUFBRSxXQUFBLEdBQWM7TUFDZCxXQUFBLEdBQWM7TUFDZCxJQUFHLFdBQUg7UUFDRSxDQUFBLENBQUUsaUJBQUYsQ0FBQSxHQUFrQyxPQUFBLENBQVEseURBQVIsQ0FBbEM7UUFDQSxFQUFBLEdBQUssSUFBSSxpQkFBSixDQUFBLEVBRlA7T0FGRjs7O01BT0UsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsSUFBdkM7UUFBNkMsYUFBQSxFQUFlO01BQTVEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdELEVBVGhCOztNQVdFLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEI7UUFBRSx5REFBQSxFQUEyRCxLQUFLLENBQUM7TUFBbkUsQ0FBOUIsRUFYRjs7O01BY0UsSUFBRyxXQUFIO1FBQ0UsSUFBOEUsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFoQixHQUF5QixDQUF2RztBQUFBO1VBQUEsS0FBQSxxQ0FBQTs7WUFBQSxJQUFBLENBQUssV0FBTCxFQUFrQixjQUFsQixFQUFrQyxPQUFBLENBQVEsSUFBUixDQUFsQztVQUFBLENBQUE7U0FERjtPQWRGOzs7O2FBbUJHO0lBcEJxQyxDQUFBLElBQXhDOztBQTVnQkEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1kYnJpYy1ob2FyZCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5GUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnsgRGJyaWMsXG4gIERicmljX3N0ZCxcbiAgSUROLFxuICBMSVQsXG4gIFNRTCxcbiAgVkVDLFxuICBmcm9tX2Jvb2wsXG4gIGFzX2Jvb2wsXG4gIFRydWUsXG4gIEZhbHNlLFxuICB1bnF1b3RlX25hbWUsICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvZGJyaWMnXG4jIHsgbGV0cywgICAgICAgICAgICAgICAgIH0gPSBpbnRlcm5hbHNcbnsgZGJyaWNfcGx1Z2luOiBcXFxuICAgIGRicmljX2hvYXJkX3BsdWdpbiwgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvaW50ZXJtaXNzaW9uMidcbnsgdHlwZV9vZiwgICAgICAgICAgICAgIH0gPSAoIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvdW5zdGFibGUtcnByLXR5cGVfb2YtYnJpY3MnICkucmVxdWlyZV90eXBlX29mKClcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jaWRfb2YgPSAoIHggKSAtPiB4LmNvZGVQb2ludEF0IDBcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW5zZXJ0X3VuaWNvZGVfZXhjbHVzaW9ucyA9ICggaCApIC0+XG4gIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogLUluZmluaXR5LCBoaTogICAgICAgIC0xLCBrZXk6ICckeCcsIHZhbHVlOiBcIm5lZ2F0aXZlIENJRHNcIiwgICB9XG4gIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHgwMDAwLCBoaTogICAgMHgwMDAwLCBrZXk6ICckeCcsIHZhbHVlOiBcInplcm8gYnl0ZXNcIiwgICAgICB9XG4gIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHhkODAwLCBoaTogICAgMHhkYmZmLCBrZXk6ICckeCcsIHZhbHVlOiBcImhpZ2ggc3Vycm9nYXRlc1wiLCB9XG4gIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHhkYzAwLCBoaTogICAgMHhkZmZmLCBrZXk6ICckeCcsIHZhbHVlOiBcImxvdyBzdXJyb2dhdGVzXCIsICB9XG4gIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHhmZGQwLCBoaTogICAgMHhmZGVmLCBrZXk6ICckeCcsIHZhbHVlOiBcIm5vbmNoYXJhY3RlcnNcIiwgICB9XG4gIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHhmZmZlLCBoaTogICAgMHhmZmZmLCBrZXk6ICckeCcsIHZhbHVlOiBcIm5vbmNoYXJhY3RlcnNcIiwgICB9XG4gIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogIDB4MTEwMDAwLCBoaTogK0luZmluaXR5LCBrZXk6ICckeCcsIHZhbHVlOiBcImV4Y2Vzc2l2ZSBDSURzXCIsICB9XG4gIDtudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfaG9hcmRfcGx1Z2luX2Jhc2ljczogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEhvYXJkIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAcGx1Z2luczogW1xuICAgICAgICBkYnJpY19ob2FyZF9wbHVnaW5cbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaCA9IEhvYXJkLnJlYnVpbGQoKVxuICAgIEBlcSAoIM6pZGJyaF9fXzEgPSAtPiAnc3RkX2dldF90YWJsZXMnICAgICAgICAgICAgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX19fMiA9IC0+ICdocmRfZmluZF9ydW5zJyAgICAgICAgICAgICAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX18zID0gLT4gJ2hyZF9pbnNlcnRfcnVuJyAgICAgICAgICAgICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzQgPSAtPiAnaHJkX2ZpbmRfb3ZlcmxhcHMnICAgICAgICAgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX19fNSA9IC0+ICdocmRfZmluZF9vdmVybGFwc19mb3Jfa2V5JyAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX182ID0gLT4gJ2hyZF9maW5kX3J1bnNfd2l0aF9jb25mbGljdHNfMScgICAgICAgICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaW5zZXJ0X3VuaWNvZGVfZXhjbHVzaW9ucyBoXG4gICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgIC0weDAwMGEsIGhpOiAgICAweDAwMDAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicsICAgICAgfVxuICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHgwMDAwLCBoaTogICAgMHgwMDBhLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInLCAgICAgIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIGguc3RhdGVtZW50cy5ocmRfZmluZF9ydW5zXG4gICAgICByb3dzID0gaC53YWxrIGguc3RhdGVtZW50cy5ocmRfZmluZF9ydW5zXG4gICAgICBAZXEgKCDOqWRicmhfX183ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9LUluZmluaXR5LC0wMDAwMDEsJHgnLCBsbzogLUluZmluaXR5LCBoaTogLTEsIGtleTogJyR4JywgdmFsdWU6ICduZWdhdGl2ZSBDSURzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfX184ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9LTAwMDAwYSwrMDAwMDAwLGZvbycsIGxvOiAtMTAsIGhpOiAwLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fXzkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDAwLCswMDAwMDAsJHgnLCBsbzogMCwgaGk6IDAsIGtleTogJyR4JywgdmFsdWU6ICd6ZXJvIGJ5dGVzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzEwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDAwMCwrMDAwMDBhLGZvbycsIGxvOiAwLCBoaTogMTAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicgfVxuICAgICAgQGVxICggzqlkYnJoX18xMSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMGQ4MDAsKzAwZGJmZiwkeCcsIGxvOiA1NTI5NiwgaGk6IDU2MzE5LCBrZXk6ICckeCcsIHZhbHVlOiAnaGlnaCBzdXJyb2dhdGVzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzEyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZGMwMCwrMDBkZmZmLCR4JywgbG86IDU2MzIwLCBoaTogNTczNDMsIGtleTogJyR4JywgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycgfVxuICAgICAgQGVxICggzqlkYnJoX18xMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMGZkZDAsKzAwZmRlZiwkeCcsIGxvOiA2NDk3NiwgaGk6IDY1MDA3LCBrZXk6ICckeCcsIHZhbHVlOiAnbm9uY2hhcmFjdGVycycgfVxuICAgICAgQGVxICggzqlkYnJoX18xNCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMGZmZmUsKzAwZmZmZiwkeCcsIGxvOiA2NTUzNCwgaGk6IDY1NTM1LCBrZXk6ICckeCcsIHZhbHVlOiAnbm9uY2hhcmFjdGVycycgfVxuICAgICAgQGVxICggzqlkYnJoX18xNSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSsxMTAwMDAsK0luZmluaXR5LCR4JywgbG86IDExMTQxMTIsIGhpOiBJbmZpbml0eSwga2V5OiAnJHgnLCB2YWx1ZTogJ2V4Y2Vzc2l2ZSBDSURzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzE2ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZmluZF9vdmVybGFwcyA9IGguc3RhdGVtZW50cy5ocmRfZmluZF9vdmVybGFwc1xuICAgICAgIyBkZWJ1ZyAnzqlkYnJoX18xNycsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBmaW5kX292ZXJsYXBzLCB7IGxvOiAtMHgxLCBoaTogMHgwYiwgfVxuICAgICAgIyBkZWJ1ZyAnzqlkYnJoX18xOCcsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBmaW5kX292ZXJsYXBzLCB7IGxvOiAtMHgxLCBoaTogMHgwYiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBsbyAgICAgID0gLTB4MDAwMVxuICAgICAgaGkgICAgICA9ICsweDAwMGJcbiAgICAgIHNlZW4gICAgPSBuZXcgU2V0KClcbiAgICAgIG1hdGNoZXIgPSBbXVxuICAgICAgZm9yIG4gaW4gWyBsbyAuLiBoaSBdXG4gICAgICAgIGZvciB7IHJvd2lkLCB9IGZyb20gaC53YWxrIGZpbmRfb3ZlcmxhcHMsIHsgbG86IG4sIGhpOiBuLCB9XG4gICAgICAgICAgbWF0Y2hlci5wdXNoIHJvd2lkIHVubGVzcyBzZWVuLmhhcyByb3dpZFxuICAgICAgICAgIHNlZW4uYWRkIHJvd2lkXG4gICAgICBAZXEgKCDOqWRicmhfXzE5ID0gLT4gbWF0Y2hlci5sZW5ndGggKSwgNFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXN1bHQgPSBbICggcm93aWQgZm9yIHsgcm93aWQsIH0gZnJvbSBoLndhbGsgZmluZF9vdmVybGFwcywgeyBsbywgaGksIH0gKS4uLiwgXVxuICAgICAgQGVxICggzqlkYnJoX18yMCA9IC0+IHJlc3VsdCApLCBtYXRjaGVyXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZpbmRfb3ZlcmxhcHMgICA9IGguc3RhdGVtZW50cy5ocmRfZmluZF9vdmVybGFwc1xuICAgICAgZmluZF9jb25mbGljdHMgID0gaC5zdGF0ZW1lbnRzLmhyZF9maW5kX3J1bnNfd2l0aF9jb25mbGljdHNfMVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAZXEgKCDOqWRicmhfXzIxID0gLT4gWyAoIHJvdyBmb3Igcm93IGZyb20gaC53YWxrIGZpbmRfY29uZmxpY3RzICkuLi4sIF0gKSwgW11cbiAgICAgIEBlcSAoIM6pZGJyaF9fMjIgPSAtPiBbICggaC5ocmRfZmluZF9ydW5zX3dpdGhfY29uZmxpY3RzXzEoKSApLi4uLCBdICAgICAgICAgICAgICAgICApLCBbXVxuICAgICAgQGVxICggzqlkYnJoX18yMyA9IC0+IGguaHJkX3ZhbGlkYXRlXzEoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbnVsbFxuICAgICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAtMHgwMDBhLCBoaTogKzB4MDAwMywga2V5OiAnZm9vJywgdmFsdWU6ICdcImZ1elwiJywgICAgICB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZW4gICAgPSBuZXcgU2V0KClcbiAgICAgIG1hdGNoZXIgPSBbXG4gICAgICAgIHsga2V5OiAnZm9vJywgdmFsdWVfYTogJ1wiYmFyXCInLCB2YWx1ZV9iOiAnXCJmdXpcIicgfSxcbiAgICAgICAgeyBrZXk6ICdmb28nLCB2YWx1ZV9hOiAnXCJiYXJcIicsIHZhbHVlX2I6ICdcImZ1elwiJyB9LCBdXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlc3VsdCA9IFtdXG4gICAgICBmb3Igcm93IGZyb20gaC53YWxrIGZpbmRfY29uZmxpY3RzXG4gICAgICAgIHJlc3VsdC5wdXNoIHsga2V5OiByb3cua2V5X2EsIHZhbHVlX2E6IHJvdy52YWx1ZV9hLCB2YWx1ZV9iOiByb3cudmFsdWVfYiwgfVxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcmVzdWx0XG4gICAgICBAZXEgKCDOqWRicmhfXzI0ID0gLT4gcmVzdWx0ICksIG1hdGNoZXJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmVzdWx0ID0gW11cbiAgICAgIGZvciByb3cgZnJvbSBoLmhyZF9maW5kX3J1bnNfd2l0aF9jb25mbGljdHNfMSgpXG4gICAgICAgIHJlc3VsdC5wdXNoIHsga2V5OiByb3cua2V5X2EsIHZhbHVlX2E6IHJvdy52YWx1ZV9hLCB2YWx1ZV9iOiByb3cudmFsdWVfYiwgfVxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcmVzdWx0XG4gICAgICBAZXEgKCDOqWRicmhfXzI1ID0gLT4gcmVzdWx0ICksIG1hdGNoZXJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQHRocm93cyAoIM6pZGJyaF9fMjYgPSAtPiBoLmhyZF92YWxpZGF0ZV8xKCkgKSwgL2ZvdW5kIGNvbmZsaWN0cy9cbiAgICAgIHRyeSBoLmhyZF92YWxpZGF0ZV8xKCkgY2F0Y2ggZSB0aGVuIHdhcm4gJ86pZGJyaF9fMjcnLCBlLm1lc3NhZ2VcbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIGgud2FsayBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9mYW1pbHlfaGFzX2NvbmZsaWN0XzE7XCJcbiAgICAgIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIF9ocmRfZmFtaWx5X2hhc19jb25mbGljdF8xO1wiXG4gICAgICBAZXEgKCDOqWRicmhfXzI4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ2V4Y2Vzc2l2ZSBDSURzJywgaGFzX2NvbmZsaWN0OiAwIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMjkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnaGlnaCBzdXJyb2dhdGVzJywgaGFzX2NvbmZsaWN0OiAwIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMzAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnbG93IHN1cnJvZ2F0ZXMnLCBoYXNfY29uZmxpY3Q6IDAgfVxuICAgICAgQGVxICggzqlkYnJoX18zMSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICduZWdhdGl2ZSBDSURzJywgaGFzX2NvbmZsaWN0OiAwIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMzIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnbm9uY2hhcmFjdGVycycsIGhhc19jb25mbGljdDogMCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzMzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ3plcm8gYnl0ZXMnLCBoYXNfY29uZmxpY3Q6IDAgfVxuICAgICAgQGVxICggzqlkYnJoX18zNCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicsIGhhc19jb25mbGljdDogMSB9XG4gICAgICBAZXEgKCDOqWRicmhfXzM1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnZm9vJywgdmFsdWU6ICdcImZ1elwiJywgaGFzX2NvbmZsaWN0OiAxIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMzYgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBlY2hvIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGguaHJkX2ZpbmRfcnVuc193aXRoX2NvbmZsaWN0c18xKClcbiAgICAgICMgcm93cyA9IGguaHJkX2ZhbWlseV9jb25mbGljdHNfMSgpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfaG9hcmRfcGx1Z2luX2dyb3VwczogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEhvYXJkIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAcGx1Z2luczogW1xuICAgICAgICBkYnJpY19ob2FyZF9wbHVnaW5cbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaCA9IEhvYXJkLnJlYnVpbGQoKVxuICAgIGluc2VydF91bmljb2RlX2V4Y2x1c2lvbnMgaFxuICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAtMHgwMDBhLCBoaTogICAgMHgwMDAwLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInLCAgICAgIH1cbiAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4MDAwMCwgaGk6ICAgIDB4MDAwYSwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgICAgICB9XG4gICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweDAwMDAsIGhpOiAgICAweDAwMGEsIGtleTogJ25pY2UnLCB2YWx1ZTogJ3RydWUnLCAgICAgIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIGguc3RhdGVtZW50cy5faHJkX2ZhY2V0X2dyb3Vwc1xuICAgICAgcm93cyA9IGgud2FsayBoLnN0YXRlbWVudHMuX2hyZF9mYWNldF9ncm91cHNcbiAgICAgIEBlcSAoIM6pZGJyaF9fMzcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICdleGNlc3NpdmUgQ0lEcycsICBydW5zOiAxLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzM4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnaGlnaCBzdXJyb2dhdGVzJywgcnVuczogMSwgfVxuICAgICAgQGVxICggzqlkYnJoX18zOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ2xvdyBzdXJyb2dhdGVzJywgIHJ1bnM6IDEsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNDAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICduZWdhdGl2ZSBDSURzJywgICBydW5zOiAxLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzQxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnbm9uY2hhcmFjdGVycycsICAgcnVuczogMiwgfVxuICAgICAgQGVxICggzqlkYnJoX180MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ3plcm8gYnl0ZXMnLCAgICAgIHJ1bnM6IDEsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNDMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICdmb28nLCAgdmFsdWU6ICdcImJhclwiJywgICAgICAgICAgIHJ1bnM6IDIsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNDQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICduaWNlJywgdmFsdWU6ICd0cnVlJywgICAgICAgICAgICBydW5zOiAxLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzQ1ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgZG8gPT5cbiAgICAjICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGguaHJkX2ZpbmRfcnVuc19ieV9ncm91cCgpXG4gICAgIyAgIHJvd3MgPSBoLmhyZF9maW5kX3J1bnNfYnlfZ3JvdXAoKVxuICAgICMgICBAZXEgKCDOqWRicmhfXzQ2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ2V4Y2Vzc2l2ZSBDSURzJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSsxMTAwMDAsK0luZmluaXR5LCR4JywgbG86IDExMTQxMTIsIGhpOiBJbmZpbml0eSwga2V5OiAnJHgnLCB2YWx1ZTogJ2V4Y2Vzc2l2ZSBDSURzJyB9IF0gfVxuICAgICMgICBAZXEgKCDOqWRicmhfXzQ3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ2hpZ2ggc3Vycm9nYXRlcycsIHJ1bnM6IFsgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDBkODAwLCswMGRiZmYsJHgnLCBsbzogNTUyOTYsIGhpOiA1NjMxOSwga2V5OiAnJHgnLCB2YWx1ZTogJ2hpZ2ggc3Vycm9nYXRlcycgfSBdIH1cbiAgICAjICAgQGVxICggzqlkYnJoX180OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycsIHJ1bnM6IFsgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDBkYzAwLCswMGRmZmYsJHgnLCBsbzogNTYzMjAsIGhpOiA1NzM0Mywga2V5OiAnJHgnLCB2YWx1ZTogJ2xvdyBzdXJyb2dhdGVzJyB9IF0gfVxuICAgICMgICBAZXEgKCDOqWRicmhfXzQ5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ25lZ2F0aXZlIENJRHMnLCBydW5zOiBbIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9LUluZmluaXR5LC0wMDAwMDEsJHgnLCBsbzogLUluZmluaXR5LCBoaTogLTEsIGtleTogJyR4JywgdmFsdWU6ICduZWdhdGl2ZSBDSURzJyB9IF0gfVxuICAgICMgICBAZXEgKCDOqWRicmhfXzUwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnLCBydW5zOiBbIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZmRkMCwrMDBmZGVmLCR4JywgbG86IDY0OTc2LCBoaTogNjUwMDcsIGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJyB9LCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMGZmZmUsKzAwZmZmZiwkeCcsIGxvOiA2NTUzNCwgaGk6IDY1NTM1LCBrZXk6ICckeCcsIHZhbHVlOiAnbm9uY2hhcmFjdGVycycgfSBdIH1cbiAgICAjICAgQGVxICggzqlkYnJoX181MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICd6ZXJvIGJ5dGVzJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwMDAsKzAwMDAwMCwkeCcsIGxvOiAwLCBoaTogMCwga2V5OiAnJHgnLCB2YWx1ZTogJ3plcm8gYnl0ZXMnIH0gXSB9XG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fNTIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInLCBydW5zOiBbIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9LTAwMDAwYSwrMDAwMDAwLGZvbycsIGxvOiAtMTAsIGhpOiAwLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInIH0sIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDAwMCwrMDAwMDBhLGZvbycsIGxvOiAwLCBoaTogMTAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicgfSBdIH1cbiAgICAjICAgQGVxICggzqlkYnJoX181MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ25pY2UnLCB2YWx1ZTogJ3RydWUnLCBydW5zOiBbIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDAwMCwrMDAwMDBhLG5pY2UnLCBsbzogMCwgaGk6IDEwLCBrZXk6ICduaWNlJywgdmFsdWU6ICd0cnVlJyB9IF0gfVxuICAgICMgICBAZXEgKCDOqWRicmhfXzU0ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAjICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSByb3dzID0gaC5ocmRfZmluZF9mYW1pbGllcygpXG4gICAgICByb3dzID0gaC5ocmRfZmluZF9mYW1pbGllcygpXG4gICAgICBAZXEgKCDOqWRicmhfXzU1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnLCAgZmlyc3Q6IDExMTQxMTIsICAgbGFzdDogSW5maW5pdHksIHJ1bnM6IDEsIGhhc19jb25mbGljdDogZmFsc2UsIGlzX25vcm1hbDogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlkYnJoX181NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ2hpZ2ggc3Vycm9nYXRlcycsIGZpcnN0OiA1NTI5NiwgICAgIGxhc3Q6IDU2MzE5LCAgICBydW5zOiAxLCBoYXNfY29uZmxpY3Q6IGZhbHNlLCBpc19ub3JtYWw6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNTcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycsICBmaXJzdDogNTYzMjAsICAgICBsYXN0OiA1NzM0MywgICAgcnVuczogMSwgaGFzX2NvbmZsaWN0OiBmYWxzZSwgaXNfbm9ybWFsOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzU4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycsICAgZmlyc3Q6IC1JbmZpbml0eSwgbGFzdDogLTEsICAgICAgIHJ1bnM6IDEsIGhhc19jb25mbGljdDogZmFsc2UsIGlzX25vcm1hbDogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlkYnJoX181OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnLCAgIGZpcnN0OiA2NDk3NiwgICAgIGxhc3Q6IDY1NTM1LCAgICBydW5zOiAyLCBoYXNfY29uZmxpY3Q6IGZhbHNlLCBpc19ub3JtYWw6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNjAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICd6ZXJvIGJ5dGVzJywgICAgICBmaXJzdDogMCwgICAgICAgICBsYXN0OiAwLCAgICAgICAgcnVuczogMSwgaGFzX2NvbmZsaWN0OiBmYWxzZSwgaXNfbm9ybWFsOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzYxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnZm9vJywgIHZhbHVlOiAnXCJiYXJcIicsICAgICAgICAgICBmaXJzdDogLTEwLCAgICAgICBsYXN0OiAxMCwgICAgICAgcnVuczogMiwgaGFzX2NvbmZsaWN0OiB0cnVlLCAgaXNfbm9ybWFsOiBmYWxzZSwgfVxuICAgICAgQGVxICggzqlkYnJoX182MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ25pY2UnLCB2YWx1ZTogJ3RydWUnLCAgICAgICAgICAgIGZpcnN0OiAwLCAgICAgICAgIGxhc3Q6IDEwLCAgICAgICBydW5zOiAxLCBoYXNfY29uZmxpY3Q6IHRydWUsICBpc19ub3JtYWw6IGZhbHNlLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzYzID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb246IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBIb2FyZCBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQHBsdWdpbnM6IFtcbiAgICAgICAgZGJyaWNfaG9hcmRfcGx1Z2luXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gSG9hcmQucmVidWlsZCgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRlYnVnICfOqWRicmhfXzY0Jywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgQGVxICggzqlkYnJoX182NSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogMHgwMDEwLCBoaTogMHgwMDE1LCBrZXk6ICdhJywgdmFsdWU6ICdcIkFcIicsIH1cbiAgICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogMHgwMDIwLCBoaTogMHgwMDI1LCBrZXk6ICdhJywgdmFsdWU6ICdcIkFcIicsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBkZWJ1ZyAnzqlkYnJoX182NicsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgQGVxICggzqlkYnJoX182NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGQ6ICdhLFwiQVwiLDEnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNjggPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86IDB4MDAxNiwgaGk6IDB4MDAxNiwga2V5OiAnYScsIHZhbHVlOiAnXCJBXCInLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZGVidWcgJ86pZGJyaF9fNjknLCByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIEBlcSAoIM6pZGJyaF9fNzAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBkOiAnYSxcIkFcIiwwJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzcxID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfbm9ubm9ybWFsX2ZhbWlsaWVzKClcbiAgICAgIEBlcSAoIM6pZGJyaF9fNzIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICdhJywgdmFsdWU6ICdcIkFcIicgfVxuICAgICAgQGVxICggzqlkYnJoX183MyA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogMHgwMDEwLCBoaTogMHgwMDE1LCBrZXk6ICdiJywgdmFsdWU6ICdcIkJcIicsIH1cbiAgICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogMHgwMDIwLCBoaTogMHgwMDI1LCBrZXk6ICdiJywgdmFsdWU6ICdcIkJcIicsIH1cbiAgICAgICMgZGVidWcgJ86pZGJyaF9fNzQnLCByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIEBlcSAoIM6pZGJyaF9fNzUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBkOiAnYSxcIkFcIiwwJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzc2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgZDogJ2IsXCJCXCIsMScgfVxuICAgICAgQGVxICggzqlkYnJoX183NyA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogMHgwMDEyLCBoaTogMHgwMDE3LCBrZXk6ICdiJywgdmFsdWU6ICdcIkJcIicsIH1cbiAgICAgICMgZGVidWcgJ86pZGJyaF9fNzgnLCByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIEBlcSAoIM6pZGJyaF9fNzkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBkOiAnYSxcIkFcIiwwJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzgwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgZDogJ2IsXCJCXCIsMCcgfVxuICAgICAgQGVxICggzqlkYnJoX184MSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJvd3MgPSBoLmhyZF9maW5kX25vbm5vcm1hbF9mYW1pbGllcygpXG4gICAgICBAZXEgKCDOqWRicmhfXzgyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnYScsIHZhbHVlOiAnXCJBXCInIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fODMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICdiJywgdmFsdWU6ICdcIkJcIicgfVxuICAgICAgQGVxICggzqlkYnJoX184NCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRlYnVnICfOqWRicmhfXzg1Jywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC5ocmRfZmluZF9mYW1pbGllcygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb25fYW5kX2NvbmZsaWN0X2RldGVjdGlvbjogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEhvYXJkIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAcGx1Z2luczogW1xuICAgICAgICBkYnJpY19ob2FyZF9wbHVnaW5cbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBIb2FyZC5yZWJ1aWxkKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgKCBjaWRfb2YgJ1onICksICd2b3dlbCcsIGZhbHNlXG4gICAgICAjIGVjaG8oKTsgZWNobyByb3cgZm9yIHJvdyBmcm9tIGguaHJkX2ZpbmRfcnVucygpXG4gICAgICByb3dzID0gaC5ocmRfZmluZF9ydW5zKClcbiAgICAgIEBlcSAoIM6pZGJyaF9fODYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQxLCswMDAwNWEsdm93ZWwnLCBsbzogNjUsIGhpOiA5MCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzg3ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC5ocmRfcHVuY2hfMSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICdBJyApLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiB0cnVlLCB9XG4gICAgICAjIGVjaG8oKTsgZWNobyByb3cgZm9yIHJvdyBmcm9tIGguaHJkX2ZpbmRfcnVucygpXG4gICAgICByb3dzID0gaC5ocmRfZmluZF9ydW5zKClcbiAgICAgIEBlcSAoIM6pZGJyaF9fODggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQxLCswMDAwNDEsdm93ZWwnLCBsbzogNjUsIGhpOiA2NSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fODkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQyLCswMDAwNWEsdm93ZWwnLCBsbzogNjYsIGhpOiA5MCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzkwID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAnRScgKSwgKCBjaWRfb2YgJ0UnICksICd2b3dlbCcsIHRydWVcbiAgICAgICMgZWNobygpOyBlY2hvIHJvdyBmb3Igcm93IGZyb20gaC5ocmRfZmluZF9ydW5zKClcbiAgICAgIHJvd3MgPSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgQGVxICggzqlkYnJoX185MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDEsKzAwMDA0MSx2b3dlbCcsIGxvOiA2NSwgaGk6IDY1LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoX185MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDIsKzAwMDA0NCx2b3dlbCcsIGxvOiA2NiwgaGk6IDY4LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fOTMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ1LCswMDAwNDUsdm93ZWwnLCBsbzogNjksIGhpOiA2OSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fOTQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ2LCswMDAwNWEsdm93ZWwnLCBsbzogNzAsIGhpOiA5MCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzk1ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAnSScgKSwgKCBjaWRfb2YgJ0knICksICd2b3dlbCcsIHRydWVcbiAgICAgICMgZWNobygpOyBlY2hvIHJvdyBmb3Igcm93IGZyb20gaC5ocmRfZmluZF9ydW5zKClcbiAgICAgIHJvd3MgPSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgQGVxICggzqlkYnJoX185NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDEsKzAwMDA0MSx2b3dlbCcsIGxvOiA2NSwgaGk6IDY1LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoX185NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDIsKzAwMDA0NCx2b3dlbCcsIGxvOiA2NiwgaGk6IDY4LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fOTggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ1LCswMDAwNDUsdm93ZWwnLCBsbzogNjksIGhpOiA2OSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fOTkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ2LCswMDAwNDgsdm93ZWwnLCBsbzogNzAsIGhpOiA3Miwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTAwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0OSwrMDAwMDQ5LHZvd2VsJywgbG86IDczLCBoaTogNzMsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTAxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0YSwrMDAwMDVhLHZvd2VsJywgbG86IDc0LCBoaTogOTAsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEwMiA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ08nICksICggY2lkX29mICdPJyApLCAndm93ZWwnLCB0cnVlXG4gICAgICAjIGVjaG8oKTsgZWNobyByb3cgZm9yIHJvdyBmcm9tIGguaHJkX2ZpbmRfcnVucygpXG4gICAgICByb3dzID0gaC5ocmRfZmluZF9ydW5zKClcbiAgICAgIEBlcSAoIM6pZGJyaF8xMDMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQxLCswMDAwNDEsdm93ZWwnLCBsbzogNjUsIGhpOiA2NSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMDQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQyLCswMDAwNDQsdm93ZWwnLCBsbzogNjYsIGhpOiA2OCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTA1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0NSwrMDAwMDQ1LHZvd2VsJywgbG86IDY5LCBoaTogNjksIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTA2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0NiwrMDAwMDQ4LHZvd2VsJywgbG86IDcwLCBoaTogNzIsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEwNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDksKzAwMDA0OSx2b3dlbCcsIGxvOiA3MywgaGk6IDczLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEwOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNGEsKzAwMDA0ZSx2b3dlbCcsIGxvOiA3NCwgaGk6IDc4LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMDkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDRmLCswMDAwNGYsdm93ZWwnLCBsbzogNzksIGhpOiA3OSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMTAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDUwLCswMDAwNWEsdm93ZWwnLCBsbzogODAsIGhpOiA5MCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTExID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAnVScgKSwgKCBjaWRfb2YgJ1UnICksICd2b3dlbCcsIHRydWVcbiAgICAgICMgZWNobygpOyBlY2hvIHJvdyBmb3Igcm93IGZyb20gaC5ocmRfZmluZF9ydW5zKClcbiAgICAgIHJvd3MgPSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgQGVxICggzqlkYnJoXzExMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDEsKzAwMDA0MSx2b3dlbCcsIGxvOiA2NSwgaGk6IDY1LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoXzExMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDIsKzAwMDA0NCx2b3dlbCcsIGxvOiA2NiwgaGk6IDY4LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMTQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ1LCswMDAwNDUsdm93ZWwnLCBsbzogNjksIGhpOiA2OSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMTUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ2LCswMDAwNDgsdm93ZWwnLCBsbzogNzAsIGhpOiA3Miwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTE2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0OSwrMDAwMDQ5LHZvd2VsJywgbG86IDczLCBoaTogNzMsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTE3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0YSwrMDAwMDRlLHZvd2VsJywgbG86IDc0LCBoaTogNzgsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzExOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNGYsKzAwMDA0Zix2b3dlbCcsIGxvOiA3OSwgaGk6IDc5LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoXzExOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNTAsKzAwMDA1NCx2b3dlbCcsIGxvOiA4MCwgaGk6IDg0LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMjAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDU1LCswMDAwNTUsdm93ZWwnLCBsbzogODUsIGhpOiA4NSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMjEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDU2LCswMDAwNWEsdm93ZWwnLCBsbzogODYsIGhpOiA5MCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTIyID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZWNobyByb3cgZm9yIHJvdyBmcm9tIGguaHJkX2ZpbmRfZmFtaWxpZXMoKVxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfZmFtaWxpZXMoKVxuICAgICAgQGVxICggzqlkYnJoXzEyMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScsICBmaXJzdDogNjYsIGxhc3Q6IDkwLCBydW5zOiA1LCBoYXNfY29uZmxpY3Q6IHRydWUsIGlzX25vcm1hbDogZmFsc2UsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMjQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScsICAgZmlyc3Q6IDY1LCBsYXN0OiA4NSwgcnVuczogNSwgaGFzX2NvbmZsaWN0OiB0cnVlLCBpc19ub3JtYWw6IGZhbHNlLCB9XG4gICAgICBAZXEgKCDOqWRicmhfMTI1ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgY2hyX3N0cmluZyA9ICcnXG4gICAgICBmb3IgY2lkIGluIFsgKCBjaWRfb2YgJ0EnICkgLi4gKCBjaWRfb2YgJ1onICkgXVxuICAgICAgICByb3dzICAgICAgICA9IFsgKCBoLmhyZF9maW5kX292ZXJsYXBzIGNpZCApLi4uLCBdXG4gICAgICAgIGlzX3Zvd2VsICAgID0gcm93c1sgMCBdLnZhbHVlXG4gICAgICAgIGNvbG9yICAgICAgID0gaWYgaXNfdm93ZWwgdGhlbiB3aGl0ZSBlbHNlIGJsdWVcbiAgICAgICAgY2hyICAgICAgICAgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWRcbiAgICAgICAgY2hyX3N0cmluZyArPSBjb2xvciBjaHJcbiAgICAgICAgQGVxICggzqlkYnJoXzEyNiA9IC0+IHJvd3MubGVuZ3RoICAgICAgICAgICAgICApLCAxXG4gICAgICAgIEBlcSAoIM6pZGJyaF8xMjcgPSAtPiByb3dzWyAwIF0ua2V5ICAgICAgICAgICAgKSwgJ3Zvd2VsJ1xuICAgICAgICBAZXEgKCDOqWRicmhfMTI4ID0gLT4gdHlwZV9vZiBpc192b3dlbCAgICAgICAgICksICdib29sZWFuJ1xuICAgICAgZGVidWcgJ86pZGJyaF8xMjknLCBjaHJfc3RyaW5nXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2hvYXJkX3BsdWdpbl9ub3JtYWxpemF0aW9uX2FuZF9jb25mbGljdF9kZXRlY3Rpb25fMjogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEhvYXJkIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAcGx1Z2luczogW1xuICAgICAgICBkYnJpY19ob2FyZF9wbHVnaW5cbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmRfdiBleHRlbmRzIEhvYXJkXG4gICAgICB2aXN1YWxpemU6ICh7IGxvLCBoaSwgfSkgLT5cbiAgICAgICAgZmFjZXRfZnJvbV9yb3cgICAgPSAoIHJvdyApIC0+IFwiI3tyb3cua2V5fToje3Jvdy52YWx1ZV9qc29ufVwiXG4gICAgICAgIGZhY2V0c19mcm9tX3Jvd3MgID0gKCByb3dzICkgLT4gbmV3IFNldCBbICggbmV3IFNldCAoICggZmFjZXRfZnJvbV9yb3cgcm93ICkgZm9yIHJvdyBmcm9tIHJvd3MgKSApLi4uLCBdLnNvcnQoKVxuICAgICAgICBnbG9iYWxfZmFjZXRzICAgICA9IGZhY2V0c19mcm9tX3Jvd3MgQGhyZF9maW5kX292ZXJsYXBzIGxvLCBoaVxuICAgICAgICBnbG9iYWxfd2lkdGggICAgICA9IGhpIC0gbG9cbiAgICAgICAgY29sb3JzICAgICAgICAgICAgPVxuICAgICAgICAgIGZhbGxiYWNrOiAgICggUC4uLiApIC0+IEdVWS50cm0uZ3JleSAgUC4uLlxuICAgICAgICAgIHdhcm46ICAgICAgICggUC4uLiApIC0+IEdVWS50cm0ucmVkICAgUC4uLlxuICAgICAgICAgIGluOiAgICAgICAgICggUC4uLiApIC0+IEdVWS50cm0uZ29sZCAgUC4uLlxuICAgICAgICAgIG91dDogICAgICAgICggUC4uLiApIC0+IEdVWS50cm0uYmx1ZSAgUC4uLlxuICAgICAgICAgIHJ1bjogICAgICAgICggUC4uLiApIC0+IEdVWS50cm0uZ3JleSAgUC4uLlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHsgcm93X2NvdW50LCB9ID0gQGdldF9maXJzdCBTUUxcInNlbGVjdCBjb3VudCgqKSBhcyByb3dfY291bnQgZnJvbSBocmRfcnVucztcIlxuICAgICAgICBlY2hvKClcbiAgICAgICAgZWNobyBHVVkudHJtLndoaXRlIEdVWS50cm0ucmV2ZXJzZSBHVVkudHJtLmJvbGQgXCIgaG9hcmQgd2l0aCAje3Jvd19jb3VudH0gcnVucyBcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGZvciBnbG9iYWxfZmFjZXQgZnJvbSBnbG9iYWxfZmFjZXRzXG4gICAgICAgICAgZ2ZwaCAgICAgID0gJyAnLnJlcGVhdCBnbG9iYWxfZmFjZXQubGVuZ3RoXG4gICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTUUxcIlwiXCJcbiAgICAgICAgICAgIHNlbGVjdCAqIGZyb20gaHJkX3J1bnNcbiAgICAgICAgICAgICAgd2hlcmUgdHJ1ZVxuICAgICAgICAgICAgICAgIGFuZCAoIGZhY2V0ID0gJGdsb2JhbF9mYWNldCApXG4gICAgICAgICAgICAgICAgYW5kICggbG8gPD0gJGhpIClcbiAgICAgICAgICAgICAgICBhbmQgKCBoaSA+PSAkbG8gKVxuICAgICAgICAgICAgICAtLSBvcmRlciBieSBoaSAtIGxvIGFzYywgbG8gZGVzYywga2V5LCB2YWx1ZVxuICAgICAgICAgICAgICBvcmRlciBieSBpbm9ybiBkZXNjXG4gICAgICAgICAgICAgIDtcIlwiXCJcbiAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgIHBvaW50cyA9ICcnXG4gICAgICAgICAgZm9yIGNpZCBpbiBbIGxvIC4uIGhpIF1cbiAgICAgICAgICAgIGxvY2FsX2tleXMgID0gZmFjZXRzX2Zyb21fcm93cyBAaHJkX2ZpbmRfb3ZlcmxhcHMgY2lkXG4gICAgICAgICAgICBjaHIgICAgICAgICA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZFxuICAgICAgICAgICAgY29sb3IgICAgICAgPSBpZiAoIGxvY2FsX2tleXMuaGFzIGdsb2JhbF9mYWNldCApIHRoZW4gY29sb3JzLmluIGVsc2UgY29sb3JzLm91dFxuICAgICAgICAgICAgcG9pbnRzICAgICArPSBjb2xvciBjaHJcbiAgICAgICAgICBlY2hvIGZcIiN7Z2xvYmFsX2ZhY2V0fTo8MTVjOyAjeycgJ306PjZjOyAje3BvaW50c31cIlxuICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgZm9yIHJvdyBmcm9tIEB3YWxrIHN0YXRlbWVudCwgeyBnbG9iYWxfZmFjZXQsIGxvLCBoaSwgfVxuICAgICAgICAgICAgaWQgICAgICAgICAgPSByb3cucm93aWQucmVwbGFjZSAvXi4qPz0oXFxkKykvLCAnWyQxXSdcbiAgICAgICAgICAgIGZpcnN0ICAgICAgID0gKCBNYXRoLm1heCByb3cubG8sIGxvICkgLSBsb1xuICAgICAgICAgICAgbGFzdCAgICAgICAgPSAoIE1hdGgubWluIHJvdy5oaSwgaGkgKSAtIGxvXG4gICAgICAgICAgICBsZWZ0ICAgICAgICA9IEdVWS50cm0uZ3JleSBHVVkudHJtLnJldmVyc2UgJ/CfroonLnJlcGVhdCBmaXJzdFxuICAgICAgICAgICAgIyBsZWZ0ICAgICAgICA9IEdVWS50cm0uZ3JleSAn4pSCJy5yZXBlYXQgZmlyc3RcbiAgICAgICAgICAgIG1pZCAgICAgICAgID0gR1VZLnRybS5nb2xkICfwn66KJy5yZXBlYXQgbGFzdCAtIGZpcnN0ICsgMVxuICAgICAgICAgICAgIyBtaWQgICAgICAgICA9IEdVWS50cm0uZ29sZCAn4pmmJy5yZXBlYXQgbGFzdCAtIGZpcnN0ICsgMVxuICAgICAgICAgICAgIyBtaWQgICAgICAgICA9IEdVWS50cm0uZ29sZCAn4paIJy5yZXBlYXQgbGFzdCAtIGZpcnN0ICsgMVxuICAgICAgICAgICAgcmlnaHQgICAgICAgPSBHVVkudHJtLmdyZXkgR1VZLnRybS5yZXZlcnNlICfwn66KJy5yZXBlYXQgKCBnbG9iYWxfd2lkdGggLSBsYXN0ICsgMSApXG4gICAgICAgICAgICBlY2hvIGNvbG9ycy5ydW4gZlwiI3tnZnBofTo8MTVjOyAje2lkfTo+NmM7ICN7bGVmdH0je21pZH0je3JpZ2h0fVwiXG4gICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZWNobyByb3cgZm9yIHJvdyBmcm9tIEB3YWxrIFNRTFwic2VsZWN0ICogZnJvbSBocmRfbm9ybWFsaXphdGlvbiB3aGVyZSBpc19ub3JtYWwgPSBmYWxzZTtcIlxuICAgICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggICAgICAgICAgICAgICAgID0gSG9hcmRfdi5yZWJ1aWxkKClcbiAgICAgIGtleSAgICAgICAgICAgICAgID0gJ3Zvd2VsJ1xuICAgICAgY29sb3JzX2J5X2ZhY2V0cyAgPVxuICAgICAgICAndm93ZWw6dHJ1ZSc6ICAgICBHVVkudHJtLmdvbGRcbiAgICAgICAgJ3Zvd2VsOmZhbHNlJzogICAgR1VZLnRybS5ibHVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksICggY2lkX29mICdaJyApLCBrZXksIGZhbHNlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdhJyApLCAoIGNpZF9vZiAneicgKSwga2V5LCBmYWxzZVxuICAgICAgaC52aXN1YWxpemUgeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAneicgKSwgfVxuICAgICAgIyBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ0EnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ydW5zIG9yZGVyIGJ5IGxvO1wiXG4gICAgICBoLmhyZF9wdW5jaF8xICggY2lkX29mICdFJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ0knICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAnTycgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICBoLmhyZF9wdW5jaF8xICggY2lkX29mICdVJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ04nICksICggY2lkX29mICdaJyApLCAndXBwZXInLCB0cnVlXG4gICAgICBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ydW5zIG9yZGVyIGJ5IGxvO1wiXG4gICAgICBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9mYW1pbHlfY29uZmxpY3RzXzE7XCJcbiAgICAgIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2ZhbWlseV9jb25mbGljdHNfMjtcIlxuICAgICAgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfZmFtaWx5X2NvbmZsaWN0c18yIHdoZXJlIGtleSA9ICRrZXkgYW5kIHZhbHVlICE9ICd0cnVlJztcIiwgeyBrZXksIH1cbiAgICAgICMgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBfaHJkX2ZhbWlseV9oYXNfY29uZmxpY3RfMTtcIlxuICAgICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIF9ocmRfY2xhbl9oYXNfY29uZmxpY3RfMjtcIlxuICAgICAgaC50YmxfZWNob19hc190ZXh0IGguaHJkX2ZpbmRfZmFtaWxpZXNcbiAgICAgICMgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBfaHJkX2ZhY2V0X2dyb3VwX2hhc19jb25mbGljdF8yO1wiXG4gICAgICBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICBoLmhyZF9wdW5jaF8xICggY2lkX29mICdVJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAgIGgudmlzdWFsaXplIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ3onICksIH1cbiAgICAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ2EnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAnZCcgKSwgbnVsbCwga2V5LCBmYWxzZVxuICAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAndScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICBoLmhyZF9wdW5jaF8xICggY2lkX29mICdjJyApLCAoIGNpZF9vZiAneCcgKSwga2V5LCB0cnVlXG4gICAgICBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICBoLmhyZF9ub3JtYWxpemUoKVxuICAgICAgaC52aXN1YWxpemUgeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAneicgKSwgfVxuICAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAnYicgKSwgbnVsbCwga2V5LCBmYWxzZVxuICAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAnYycgKSwgbnVsbCwga2V5LCBmYWxzZVxuICAgICAgaC52aXN1YWxpemUgeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAneicgKSwgfVxuICAgICAgIyBmb3IgcG9pbnQgaW4gWyAoIGNpZF9vZiAnQScgKSAuLiAoIGNpZF9vZiAneicgKSBdXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCAoIGNpZF9vZiAnWicgKSwgJ2V2ZW4nLCB0cnVlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCBudWxsLCAnZXZlbicsIGZhbHNlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdDJyApLCBudWxsLCAnZXZlbicsIGZhbHNlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdFJyApLCBudWxsLCAnZXZlbicsIGZhbHNlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdHJyApLCBudWxsLCAnZXZlbicsIGZhbHNlXG4gICAgICBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICBmb3IgY2lkIGluIFsgKCBjaWRfb2YgJ0EnICkgLi4gKCBjaWRfb2YgJ1onICkgXVxuICAgICAgICBjaHIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWRcbiAgICAgICAgUiAgID0ge31cbiAgICAgICAgZm9yIHsga2V5LCB2YWx1ZSwgfSBmcm9tIGguaHJkX2ZpbmRfdG9wcnVuc19mb3JfcG9pbnQgY2lkXG4gICAgICAgICAgIyMjIFRBSU5UIGNvbXBsYWluIGlmIGtleSB0YWtlbiAjIyNcbiAgICAgICAgICBSWyBrZXkgXSA9IHZhbHVlXG4gICAgICAgIGRlYnVnICfOqWRicmhfMTMwJywgY2hyLCBSXG4gICAgICAjIGguaHJkX25vcm1hbGl6ZSgpXG4gICAgICAjIGgudmlzdWFsaXplIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ3onICksIH1cbiAgICAgIDtudWxsXG4gICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgZG8gPT5cbiAgICAjICAgaCAgID0gSG9hcmRfdi5yZWJ1aWxkKClcbiAgICAjICAga2V5ID0gJ3Zvd2VsJ1xuICAgICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjICAgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfcnVucyBvcmRlciBieSBsbztcIlxuICAgICMgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCAoIGNpZF9vZiAnWicgKSwga2V5LCBmYWxzZVxuICAgICMgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdhJyApLCAoIGNpZF9vZiAneicgKSwga2V5LCBmYWxzZVxuICAgICMgICAjIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICMgICBoLmhyZF9wdW5jaF8xICggY2lkX29mICdBJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAjICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ydW5zIG9yZGVyIGJ5IGxvO1wiXG4gICAgIyAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnRScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgIyAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnSScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgIyAgIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX3J1bnMgb3JkZXIgYnkgbG87XCJcbiAgICAjICAgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfZmFtaWx5X2NvbmZsaWN0c18xO1wiXG4gICAgIyAgIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2ZhbWlseV9jb25mbGljdHNfMjtcIlxuICAgICMgICBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9mYW1pbHlfY29uZmxpY3RzXzIgd2hlcmUga2V5ID0gJGtleSBhbmQgdmFsdWUgIT0gJ3RydWUnO1wiLCB7IGtleSwgfVxuICAgICMgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9mYW1pbHlfaGFzX2NvbmZsaWN0XzE7XCJcbiAgICAjICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIF9ocmRfY2xhbl9oYXNfY29uZmxpY3RfMjtcIlxuICAgICMgICBoLnRibF9lY2hvX2FzX3RleHQgaC5ocmRfZmluZF9mYW1pbGllc1xuICAgICMgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9mYWNldF9ncm91cF9oYXNfY29uZmxpY3RfMjtcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBkb19jb3ZlcmFnZSA9IHRydWVcbiAgZG9fY292ZXJhZ2UgPSBmYWxzZVxuICBpZiBkb19jb3ZlcmFnZVxuICAgIHsgQ292ZXJhZ2VfYW5hbHl6ZXIsICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2NvdmVyYWdlLWFuYWx5emVyJ1xuICAgIGNhID0gbmV3IENvdmVyYWdlX2FuYWx5emVyKClcbiAgICAjIGNhLndyYXBfY2xhc3MgRGJyaWNfc3RkXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2hvYXJkX3BsdWdpbl9ub3JtYWxpemF0aW9uX2FuZF9jb25mbGljdF9kZXRlY3Rpb25fMjogdGVzdHMuZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb25fYW5kX2NvbmZsaWN0X2RldGVjdGlvbl8yLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkYnJpY19keW5hbWljX2J1aWxkX3Byb3BlcnRpZXM6IHRlc3RzLmRicmljX2R5bmFtaWNfYnVpbGRfcHJvcGVydGllcywgfVxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIGRvX2NvdmVyYWdlXG4gICAgd2FybiAnzqlkYnJoXzEzMScsIFwibm90IGNvdmVyZWQ6XCIsIHJldmVyc2UgbmFtZSBmb3IgbmFtZSBpbiBjYS51bnVzZWRfbmFtZXMgaWYgY2EudW51c2VkX25hbWVzLmxlbmd0aCA+IDBcbiAgICAjIGhlbHAgJ86pZGJyaF8xMzInLCBjYS51c2VkX25hbWVzXG4gICAgIyB1cmdlICfOqWRicmhfMTMzJywgY291bnQsIG5hbWVzIGZvciBjb3VudCwgbmFtZXMgb2YgY2EubmFtZXNfYnlfY291bnRzXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgO251bGxcblxuXG4iXX0=
