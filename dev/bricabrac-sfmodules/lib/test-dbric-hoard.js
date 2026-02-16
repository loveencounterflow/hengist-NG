(async function() {
  'use strict';
  var Dbric, Dbric_std, FS, False, GTNG, GUY, IDN, LIT, PATH, SFMODULES, SQL, Test, True, VEC, alert, as_bool, blue, bold, cid_of, dbric_hoard_plugin, debug, echo, f, from_bool, gold, green, grey, help, info, insert_unicode_exclusions, inspect, log, nfa, plain, praise, red, reverse, rpr, tests, unquote_name, urge, warn, whisper, white,
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
        return indexOf.call(Object.keys(h.statements), 'hrd_find_conflicts') >= 0;
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
        find_conflicts = h.statements.hrd_find_conflicts;
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
          return [...(h.hrd_find_conflicts())];
        }), []);
        this.eq((Ωdbrh__23 = function() {
          return h.hrd_validate();
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
        for (row of h.hrd_find_conflicts()) {
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
          return h.hrd_validate();
        }), /found conflicts/);
        try {
          h.hrd_validate();
        } catch (error) {
          e = error;
          warn('Ωdbrh__27', e.message);
        }
        // echo row for row from h.walk SQL"select * from _hrd_group_has_conflict;"
        rows = h.walk(SQL`select * from _hrd_group_has_conflict;`);
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
        // echo row for row from rows = h.hrd_find_group_facets()
        rows = h.hrd_find_group_facets();
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
      (() => {        //.......................................................................................................
        var rows, Ωdbrh__46, Ωdbrh__47, Ωdbrh__48, Ωdbrh__49, Ωdbrh__50, Ωdbrh__51, Ωdbrh__52, Ωdbrh__53, Ωdbrh__54;
        // echo row for row from rows = h.hrd_find_runs_by_group()
        rows = h.hrd_find_runs_by_group();
        this.eq((Ωdbrh__46 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'excessive CIDs',
          runs: [
            {
              rowid: 't:hrd:runs:V=+110000,+Infinity,$x',
              lo: 1114112,
              hi: 2e308,
              key: '$x',
              value: 'excessive CIDs'
            }
          ]
        });
        this.eq((Ωdbrh__47 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'high surrogates',
          runs: [
            {
              rowid: 't:hrd:runs:V=+00d800,+00dbff,$x',
              lo: 55296,
              hi: 56319,
              key: '$x',
              value: 'high surrogates'
            }
          ]
        });
        this.eq((Ωdbrh__48 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'low surrogates',
          runs: [
            {
              rowid: 't:hrd:runs:V=+00dc00,+00dfff,$x',
              lo: 56320,
              hi: 57343,
              key: '$x',
              value: 'low surrogates'
            }
          ]
        });
        this.eq((Ωdbrh__49 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'negative CIDs',
          runs: [
            {
              rowid: 't:hrd:runs:V=-Infinity,-000001,$x',
              lo: -2e308,
              hi: -1,
              key: '$x',
              value: 'negative CIDs'
            }
          ]
        });
        this.eq((Ωdbrh__50 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'noncharacters',
          runs: [
            {
              rowid: 't:hrd:runs:V=+00fdd0,+00fdef,$x',
              lo: 64976,
              hi: 65007,
              key: '$x',
              value: 'noncharacters'
            },
            {
              rowid: 't:hrd:runs:V=+00fffe,+00ffff,$x',
              lo: 65534,
              hi: 65535,
              key: '$x',
              value: 'noncharacters'
            }
          ]
        });
        this.eq((Ωdbrh__51 = function() {
          return rows.next().value;
        }), {
          key: '$x',
          value: 'zero bytes',
          runs: [
            {
              rowid: 't:hrd:runs:V=+000000,+000000,$x',
              lo: 0,
              hi: 0,
              key: '$x',
              value: 'zero bytes'
            }
          ]
        });
        this.eq((Ωdbrh__52 = function() {
          return rows.next().value;
        }), {
          key: 'foo',
          value: '"bar"',
          runs: [
            {
              rowid: 't:hrd:runs:V=-00000a,+000000,foo',
              lo: -10,
              hi: 0,
              key: 'foo',
              value: '"bar"'
            },
            {
              rowid: 't:hrd:runs:V=+000000,+00000a,foo',
              lo: 0,
              hi: 10,
              key: 'foo',
              value: '"bar"'
            }
          ]
        });
        this.eq((Ωdbrh__53 = function() {
          return rows.next().value;
        }), {
          key: 'nice',
          value: 'true',
          runs: [
            {
              rowid: 't:hrd:runs:V=+000000,+00000a,nice',
              lo: 0,
              hi: 10,
              key: 'nice',
              value: 'true'
            }
          ]
        });
        this.eq((Ωdbrh__54 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var results, row, rows;
        results = [];
        for (row of rows = h.hrd_find_groups()) {
          results.push(echo(row));
        }
        return results;
      })();
      // rows = h.hrd_find_groups()
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
        var h, row, rows, Ωdbrh__56, Ωdbrh__58, Ωdbrh__59, Ωdbrh__61, Ωdbrh__62, Ωdbrh__63, Ωdbrh__64, Ωdbrh__66, Ωdbrh__67, Ωdbrh__68, Ωdbrh__70, Ωdbrh__71, Ωdbrh__72, Ωdbrh__73, Ωdbrh__74, Ωdbrh__75;
        h = Hoard.rebuild();
        for (row of rows = h.walk(SQL`select * from hrd_normalization;`)) {
          //.....................................................................................................
          debug('Ωdbrh__55', row);
        }
        rows = h.walk(SQL`select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;`);
        this.eq((Ωdbrh__56 = function() {
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
        // debug 'Ωdbrh__57', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
        rows = h.walk(SQL`select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;`);
        this.eq((Ωdbrh__58 = function() {
          return rows.next().value;
        }), {
          d: 'a,"A",1'
        });
        this.eq((Ωdbrh__59 = function() {
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
        // debug 'Ωdbrh__60', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
        rows = h.walk(SQL`select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;`);
        this.eq((Ωdbrh__61 = function() {
          return rows.next().value;
        }), {
          d: 'a,"A",0'
        });
        this.eq((Ωdbrh__62 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        rows = h.hrd_find_nonnormal_groups();
        this.eq((Ωdbrh__63 = function() {
          return rows.next().value;
        }), {
          key: 'a',
          value: '"A"'
        });
        this.eq((Ωdbrh__64 = function() {
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
        // debug 'Ωdbrh__65', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
        rows = h.walk(SQL`select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;`);
        this.eq((Ωdbrh__66 = function() {
          return rows.next().value;
        }), {
          d: 'a,"A",0'
        });
        this.eq((Ωdbrh__67 = function() {
          return rows.next().value;
        }), {
          d: 'b,"B",1'
        });
        this.eq((Ωdbrh__68 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.statements.hrd_insert_run.run({
          lo: 0x0012,
          hi: 0x0017,
          key: 'b',
          value: '"B"'
        });
        // debug 'Ωdbrh__69', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
        rows = h.walk(SQL`select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;`);
        this.eq((Ωdbrh__70 = function() {
          return rows.next().value;
        }), {
          d: 'a,"A",0'
        });
        this.eq((Ωdbrh__71 = function() {
          return rows.next().value;
        }), {
          d: 'b,"B",0'
        });
        this.eq((Ωdbrh__72 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        rows = h.hrd_find_nonnormal_groups();
        this.eq((Ωdbrh__73 = function() {
          return rows.next().value;
        }), {
          key: 'a',
          value: '"A"'
        });
        this.eq((Ωdbrh__74 = function() {
          return rows.next().value;
        }), {
          key: 'b',
          value: '"B"'
        });
        this.eq((Ωdbrh__75 = function() {
          return rows.next().done;
        }), true);
        for (row of rows = h.hrd_find_groups()) {
          //.....................................................................................................
          debug('Ωdbrh__76', row);
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
        var h;
        h = Hoard.rebuild();
        h.hrd_punch(cid_of('A'), cid_of('Z'), 'vowel', false);
        h.hrd_punch({
          lo: cid_of('A'),
          hi: cid_of('A'),
          key: 'vowel',
          value: true
        });
        h.hrd_punch(cid_of('E'), cid_of('E'), 'vowel', true);
        h.hrd_punch(cid_of('I'), cid_of('I'), 'vowel', true);
        h.hrd_punch(cid_of('O'), cid_of('O'), 'vowel', true);
        return h.hrd_punch(cid_of('U'), cid_of('U'), 'vowel', true);
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
      // ( new Test guytest_cfg ).test { dbric_hoard_plugin_model: tests.dbric_hoard_plugin_model, }
      // ( new Test guytest_cfg ).test { dbric_dynamic_build_properties: tests.dbric_dynamic_build_properties, }
      //---------------------------------------------------------------------------------------------------------
      if (do_coverage) {
        if (ca.unused_names.length > 0) {
          ref = ca.unused_names;
          for (i = 0, len = ref.length; i < len; i++) {
            name = ref[i];
            warn('Ωdbrh__77', "not covered:", reverse(name));
          }
        }
      }
      // help 'Ωdbrh__78', ca.used_names
      // urge 'Ωdbrh__79', count, names for count, names of ca.names_by_counts
      //=========================================================================================================
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMtaG9hcmQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxrQkFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLHlCQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsWUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7SUFBQSxvQkFBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQix1QkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFB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QTtVQUFBLEtBQUEscUNBQUE7O1lBQUEsSUFBQSxDQUFLLFdBQUwsRUFBa0IsY0FBbEIsRUFBa0MsT0FBQSxDQUFRLElBQVIsQ0FBbEM7VUFBQSxDQUFBO1NBREY7T0FkRjs7OzthQW1CRztJQXBCcUMsQ0FBQSxJQUF4Qzs7QUFwU0EiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1kYnJpYy1ob2FyZCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5GUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnsgRGJyaWMsXG4gIERicmljX3N0ZCxcbiAgSUROLFxuICBMSVQsXG4gIFNRTCxcbiAgVkVDLFxuICBmcm9tX2Jvb2wsXG4gIGFzX2Jvb2wsXG4gIFRydWUsXG4gIEZhbHNlLFxuICB1bnF1b3RlX25hbWUsICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvZGJyaWMnXG4jIHsgbGV0cywgICAgICAgICAgICAgICAgIH0gPSBpbnRlcm5hbHNcbnsgZGJyaWNfcGx1Z2luOiBcXFxuICAgIGRicmljX2hvYXJkX3BsdWdpbiwgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvaW50ZXJtaXNzaW9uMidcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jaWRfb2YgPSAoIHggKSAtPiB4LmNvZGVQb2ludEF0IDBcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbnNlcnRfdW5pY29kZV9leGNsdXNpb25zID0gKCBoICkgLT5cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAtSW5maW5pdHksIGhpOiAgICAgICAgLTEsIGtleTogJyR4JywgdmFsdWU6IFwibmVnYXRpdmUgQ0lEc1wiLCAgIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweDAwMDAsIGhpOiAgICAweDAwMDAsIGtleTogJyR4JywgdmFsdWU6IFwiemVybyBieXRlc1wiLCAgICAgIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGQ4MDAsIGhpOiAgICAweGRiZmYsIGtleTogJyR4JywgdmFsdWU6IFwiaGlnaCBzdXJyb2dhdGVzXCIsIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGRjMDAsIGhpOiAgICAweGRmZmYsIGtleTogJyR4JywgdmFsdWU6IFwibG93IHN1cnJvZ2F0ZXNcIiwgIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGZkZDAsIGhpOiAgICAweGZkZWYsIGtleTogJyR4JywgdmFsdWU6IFwibm9uY2hhcmFjdGVyc1wiLCAgIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGZmZmUsIGhpOiAgICAweGZmZmYsIGtleTogJyR4JywgdmFsdWU6IFwibm9uY2hhcmFjdGVyc1wiLCAgIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgMHgxMTAwMDAsIGhpOiArSW5maW5pdHksIGtleTogJyR4JywgdmFsdWU6IFwiZXhjZXNzaXZlIENJRHNcIiwgIH1cbiAgO251bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19ob2FyZF9wbHVnaW5fYmFzaWNzOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmQgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIEBwbHVnaW5zOiBbXG4gICAgICAgIGRicmljX2hvYXJkX3BsdWdpblxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBoID0gSG9hcmQucmVidWlsZCgpXG4gICAgQGVxICggzqlkYnJoX19fMSA9IC0+ICdzdGRfZ2V0X3RhYmxlcycgICAgICAgICAgICAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX18yID0gLT4gJ2hyZF9maW5kX3J1bnMnICAgICAgICAgICAgICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzMgPSAtPiAnaHJkX2luc2VydF9ydW4nICAgICAgICAgICAgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX19fNCA9IC0+ICdocmRfZmluZF9vdmVybGFwcycgICAgICAgICAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX181ID0gLT4gJ2hyZF9maW5kX292ZXJsYXBzX2Zvcl9rZXknICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzYgPSAtPiAnaHJkX2ZpbmRfY29uZmxpY3RzJyAgICAgICAgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBpbnNlcnRfdW5pY29kZV9leGNsdXNpb25zIGhcbiAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgLTB4MDAwYSwgaGk6ICAgIDB4MDAwMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgICAgICB9XG4gICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweDAwMDAsIGhpOiAgICAweDAwMGEsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicsICAgICAgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgaC5zdGF0ZW1lbnRzLmhyZF9maW5kX3J1bnNcbiAgICAgIHJvd3MgPSBoLndhbGsgaC5zdGF0ZW1lbnRzLmhyZF9maW5kX3J1bnNcbiAgICAgIEBlcSAoIM6pZGJyaF9fXzcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0tSW5maW5pdHksLTAwMDAwMSwkeCcsIGxvOiAtSW5maW5pdHksIGhpOiAtMSwga2V5OiAnJHgnLCB2YWx1ZTogJ25lZ2F0aXZlIENJRHMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fXzggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0tMDAwMDBhLCswMDAwMDAsZm9vJywgbG86IC0xMCwgaGk6IDAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicgfVxuICAgICAgQGVxICggzqlkYnJoX19fOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwMDAsKzAwMDAwMCwkeCcsIGxvOiAwLCBoaTogMCwga2V5OiAnJHgnLCB2YWx1ZTogJ3plcm8gYnl0ZXMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDAwLCswMDAwMGEsZm9vJywgbG86IDAsIGhpOiAxMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzExID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZDgwMCwrMDBkYmZmLCR4JywgbG86IDU1Mjk2LCBoaTogNTYzMTksIGtleTogJyR4JywgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDBkYzAwLCswMGRmZmYsJHgnLCBsbzogNTYzMjAsIGhpOiA1NzM0Mywga2V5OiAnJHgnLCB2YWx1ZTogJ2xvdyBzdXJyb2dhdGVzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzEzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZmRkMCwrMDBmZGVmLCR4JywgbG86IDY0OTc2LCBoaTogNjUwMDcsIGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzE0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZmZmZSwrMDBmZmZmLCR4JywgbG86IDY1NTM0LCBoaTogNjU1MzUsIGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzE1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzExMDAwMCwrSW5maW5pdHksJHgnLCBsbzogMTExNDExMiwgaGk6IEluZmluaXR5LCBrZXk6ICckeCcsIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTYgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmaW5kX292ZXJsYXBzID0gaC5zdGF0ZW1lbnRzLmhyZF9maW5kX292ZXJsYXBzXG4gICAgICAjIGRlYnVnICfOqWRicmhfXzE3Jywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIGZpbmRfb3ZlcmxhcHMsIHsgbG86IC0weDEsIGhpOiAweDBiLCB9XG4gICAgICAjIGRlYnVnICfOqWRicmhfXzE4Jywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIGZpbmRfb3ZlcmxhcHMsIHsgbG86IC0weDEsIGhpOiAweDBiLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGxvICAgICAgPSAtMHgwMDAxXG4gICAgICBoaSAgICAgID0gKzB4MDAwYlxuICAgICAgc2VlbiAgICA9IG5ldyBTZXQoKVxuICAgICAgbWF0Y2hlciA9IFtdXG4gICAgICBmb3IgbiBpbiBbIGxvIC4uIGhpIF1cbiAgICAgICAgZm9yIHsgcm93aWQsIH0gZnJvbSBoLndhbGsgZmluZF9vdmVybGFwcywgeyBsbzogbiwgaGk6IG4sIH1cbiAgICAgICAgICBtYXRjaGVyLnB1c2ggcm93aWQgdW5sZXNzIHNlZW4uaGFzIHJvd2lkXG4gICAgICAgICAgc2Vlbi5hZGQgcm93aWRcbiAgICAgIEBlcSAoIM6pZGJyaF9fMTkgPSAtPiBtYXRjaGVyLmxlbmd0aCApLCA0XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlc3VsdCA9IFsgKCByb3dpZCBmb3IgeyByb3dpZCwgfSBmcm9tIGgud2FsayBmaW5kX292ZXJsYXBzLCB7IGxvLCBoaSwgfSApLi4uLCBdXG4gICAgICBAZXEgKCDOqWRicmhfXzIwID0gLT4gcmVzdWx0ICksIG1hdGNoZXJcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZmluZF9vdmVybGFwcyAgID0gaC5zdGF0ZW1lbnRzLmhyZF9maW5kX292ZXJsYXBzXG4gICAgICBmaW5kX2NvbmZsaWN0cyAgPSBoLnN0YXRlbWVudHMuaHJkX2ZpbmRfY29uZmxpY3RzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pZGJyaF9fMjEgPSAtPiBbICggcm93IGZvciByb3cgZnJvbSBoLndhbGsgZmluZF9jb25mbGljdHMgKS4uLiwgXSApLCBbXVxuICAgICAgQGVxICggzqlkYnJoX18yMiA9IC0+IFsgKCBoLmhyZF9maW5kX2NvbmZsaWN0cygpICkuLi4sIF0gICAgICAgICAgICAgICAgICksIFtdXG4gICAgICBAZXEgKCDOqWRicmhfXzIzID0gLT4gaC5ocmRfdmFsaWRhdGUoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbnVsbFxuICAgICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAtMHgwMDBhLCBoaTogKzB4MDAwMywga2V5OiAnZm9vJywgdmFsdWU6ICdcImZ1elwiJywgICAgICB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZW4gICAgPSBuZXcgU2V0KClcbiAgICAgIG1hdGNoZXIgPSBbXG4gICAgICAgIHsga2V5OiAnZm9vJywgdmFsdWVfYTogJ1wiYmFyXCInLCB2YWx1ZV9iOiAnXCJmdXpcIicgfSxcbiAgICAgICAgeyBrZXk6ICdmb28nLCB2YWx1ZV9hOiAnXCJiYXJcIicsIHZhbHVlX2I6ICdcImZ1elwiJyB9LCBdXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlc3VsdCA9IFtdXG4gICAgICBmb3Igcm93IGZyb20gaC53YWxrIGZpbmRfY29uZmxpY3RzXG4gICAgICAgIHJlc3VsdC5wdXNoIHsga2V5OiByb3cua2V5X2EsIHZhbHVlX2E6IHJvdy52YWx1ZV9hLCB2YWx1ZV9iOiByb3cudmFsdWVfYiwgfVxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcmVzdWx0XG4gICAgICBAZXEgKCDOqWRicmhfXzI0ID0gLT4gcmVzdWx0ICksIG1hdGNoZXJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmVzdWx0ID0gW11cbiAgICAgIGZvciByb3cgZnJvbSBoLmhyZF9maW5kX2NvbmZsaWN0cygpXG4gICAgICAgIHJlc3VsdC5wdXNoIHsga2V5OiByb3cua2V5X2EsIHZhbHVlX2E6IHJvdy52YWx1ZV9hLCB2YWx1ZV9iOiByb3cudmFsdWVfYiwgfVxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcmVzdWx0XG4gICAgICBAZXEgKCDOqWRicmhfXzI1ID0gLT4gcmVzdWx0ICksIG1hdGNoZXJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQHRocm93cyAoIM6pZGJyaF9fMjYgPSAtPiBoLmhyZF92YWxpZGF0ZSgpICksIC9mb3VuZCBjb25mbGljdHMvXG4gICAgICB0cnkgaC5ocmRfdmFsaWRhdGUoKSBjYXRjaCBlIHRoZW4gd2FybiAnzqlkYnJoX18yNycsIGUubWVzc2FnZVxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gaC53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBfaHJkX2dyb3VwX2hhc19jb25mbGljdDtcIlxuICAgICAgcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9ncm91cF9oYXNfY29uZmxpY3Q7XCJcbiAgICAgIEBlcSAoIM6pZGJyaF9fMjggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnLCBoYXNfY29uZmxpY3Q6IDAgfVxuICAgICAgQGVxICggzqlkYnJoX18yOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnLCBoYXNfY29uZmxpY3Q6IDAgfVxuICAgICAgQGVxICggzqlkYnJoX18zMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycsIGhhc19jb25mbGljdDogMCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzMxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ25lZ2F0aXZlIENJRHMnLCBoYXNfY29uZmxpY3Q6IDAgfVxuICAgICAgQGVxICggzqlkYnJoX18zMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJywgaGFzX2NvbmZsaWN0OiAwIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMzMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnemVybyBieXRlcycsIGhhc19jb25mbGljdDogMCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzM0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgaGFzX2NvbmZsaWN0OiAxIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMzUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiZnV6XCInLCBoYXNfY29uZmxpY3Q6IDEgfVxuICAgICAgQGVxICggzqlkYnJoX18zNiA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2hvYXJkX3BsdWdpbl9ncm91cHM6IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBIb2FyZCBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQHBsdWdpbnM6IFtcbiAgICAgICAgZGJyaWNfaG9hcmRfcGx1Z2luXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGggPSBIb2FyZC5yZWJ1aWxkKClcbiAgICBpbnNlcnRfdW5pY29kZV9leGNsdXNpb25zIGhcbiAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgLTB4MDAwYSwgaGk6ICAgIDB4MDAwMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgICAgICB9XG4gICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweDAwMDAsIGhpOiAgICAweDAwMGEsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicsICAgICAgfVxuICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHgwMDAwLCBoaTogICAgMHgwMDBhLCBrZXk6ICduaWNlJywgdmFsdWU6ICd0cnVlJywgICAgICB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGguaHJkX2ZpbmRfZ3JvdXBfZmFjZXRzKClcbiAgICAgIHJvd3MgPSBoLmhyZF9maW5kX2dyb3VwX2ZhY2V0cygpXG4gICAgICBAZXEgKCDOqWRicmhfXzM3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnLCAgcnVuczogMSwgfVxuICAgICAgQGVxICggzqlkYnJoX18zOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ2hpZ2ggc3Vycm9nYXRlcycsIHJ1bnM6IDEsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMzkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycsICBydW5zOiAxLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzQwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycsICAgcnVuczogMSwgfVxuICAgICAgQGVxICggzqlkYnJoX180MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnLCAgIHJ1bnM6IDIsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNDIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICd6ZXJvIGJ5dGVzJywgICAgICBydW5zOiAxLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzQzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnZm9vJywgIHZhbHVlOiAnXCJiYXJcIicsICAgICAgICAgICBydW5zOiAyLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzQ0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnbmljZScsIHZhbHVlOiAndHJ1ZScsICAgICAgICAgICAgcnVuczogMSwgfVxuICAgICAgQGVxICggzqlkYnJoX180NSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLmhyZF9maW5kX3J1bnNfYnlfZ3JvdXAoKVxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfcnVuc19ieV9ncm91cCgpXG4gICAgICBAZXEgKCDOqWRicmhfXzQ2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ2V4Y2Vzc2l2ZSBDSURzJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSsxMTAwMDAsK0luZmluaXR5LCR4JywgbG86IDExMTQxMTIsIGhpOiBJbmZpbml0eSwga2V5OiAnJHgnLCB2YWx1ZTogJ2V4Y2Vzc2l2ZSBDSURzJyB9IF0gfVxuICAgICAgQGVxICggzqlkYnJoX180NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnLCBydW5zOiBbIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZDgwMCwrMDBkYmZmLCR4JywgbG86IDU1Mjk2LCBoaTogNTYzMTksIGtleTogJyR4JywgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnIH0gXSB9XG4gICAgICBAZXEgKCDOqWRicmhfXzQ4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ2xvdyBzdXJyb2dhdGVzJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMGRjMDAsKzAwZGZmZiwkeCcsIGxvOiA1NjMyMCwgaGk6IDU3MzQzLCBrZXk6ICckeCcsIHZhbHVlOiAnbG93IHN1cnJvZ2F0ZXMnIH0gXSB9XG4gICAgICBAZXEgKCDOqWRicmhfXzQ5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ25lZ2F0aXZlIENJRHMnLCBydW5zOiBbIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9LUluZmluaXR5LC0wMDAwMDEsJHgnLCBsbzogLUluZmluaXR5LCBoaTogLTEsIGtleTogJyR4JywgdmFsdWU6ICduZWdhdGl2ZSBDSURzJyB9IF0gfVxuICAgICAgQGVxICggzqlkYnJoX181MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMGZkZDAsKzAwZmRlZiwkeCcsIGxvOiA2NDk3NiwgaGk6IDY1MDA3LCBrZXk6ICckeCcsIHZhbHVlOiAnbm9uY2hhcmFjdGVycycgfSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDBmZmZlLCswMGZmZmYsJHgnLCBsbzogNjU1MzQsIGhpOiA2NTUzNSwga2V5OiAnJHgnLCB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnIH0gXSB9XG4gICAgICBAZXEgKCDOqWRicmhfXzUxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ3plcm8gYnl0ZXMnLCBydW5zOiBbIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDAwMCwrMDAwMDAwLCR4JywgbG86IDAsIGhpOiAwLCBrZXk6ICckeCcsIHZhbHVlOiAnemVybyBieXRlcycgfSBdIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNTIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInLCBydW5zOiBbIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9LTAwMDAwYSwrMDAwMDAwLGZvbycsIGxvOiAtMTAsIGhpOiAwLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInIH0sIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDAwMCwrMDAwMDBhLGZvbycsIGxvOiAwLCBoaTogMTAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicgfSBdIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNTMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICduaWNlJywgdmFsdWU6ICd0cnVlJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwMDAsKzAwMDAwYSxuaWNlJywgbG86IDAsIGhpOiAxMCwga2V5OiAnbmljZScsIHZhbHVlOiAndHJ1ZScgfSBdIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNTQgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBlY2hvIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGguaHJkX2ZpbmRfZ3JvdXBzKClcbiAgICAgICMgcm93cyA9IGguaHJkX2ZpbmRfZ3JvdXBzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19ob2FyZF9wbHVnaW5fbm9ybWFsaXphdGlvbjogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEhvYXJkIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAcGx1Z2luczogW1xuICAgICAgICBkYnJpY19ob2FyZF9wbHVnaW5cbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBIb2FyZC5yZWJ1aWxkKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGVidWcgJ86pZGJyaF9fNTUnLCByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICBAZXEgKCDOqWRicmhfXzU2ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAweDAwMTAsIGhpOiAweDAwMTUsIGtleTogJ2EnLCB2YWx1ZTogJ1wiQVwiJywgfVxuICAgICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAweDAwMjAsIGhpOiAweDAwMjUsIGtleTogJ2EnLCB2YWx1ZTogJ1wiQVwiJywgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIGRlYnVnICfOqWRicmhfXzU3Jywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICBAZXEgKCDOqWRicmhfXzU4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgZDogJ2EsXCJBXCIsMScgfVxuICAgICAgQGVxICggzqlkYnJoX181OSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogMHgwMDE2LCBoaTogMHgwMDE2LCBrZXk6ICdhJywgdmFsdWU6ICdcIkFcIicsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBkZWJ1ZyAnzqlkYnJoX182MCcsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgQGVxICggzqlkYnJoX182MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGQ6ICdhLFwiQVwiLDAnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNjIgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByb3dzID0gaC5ocmRfZmluZF9ub25ub3JtYWxfZ3JvdXBzKClcbiAgICAgIEBlcSAoIM6pZGJyaF9fNjMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICdhJywgdmFsdWU6ICdcIkFcIicgfVxuICAgICAgQGVxICggzqlkYnJoX182NCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogMHgwMDEwLCBoaTogMHgwMDE1LCBrZXk6ICdiJywgdmFsdWU6ICdcIkJcIicsIH1cbiAgICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogMHgwMDIwLCBoaTogMHgwMDI1LCBrZXk6ICdiJywgdmFsdWU6ICdcIkJcIicsIH1cbiAgICAgICMgZGVidWcgJ86pZGJyaF9fNjUnLCByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIEBlcSAoIM6pZGJyaF9fNjYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBkOiAnYSxcIkFcIiwwJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzY3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgZDogJ2IsXCJCXCIsMScgfVxuICAgICAgQGVxICggzqlkYnJoX182OCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogMHgwMDEyLCBoaTogMHgwMDE3LCBrZXk6ICdiJywgdmFsdWU6ICdcIkJcIicsIH1cbiAgICAgICMgZGVidWcgJ86pZGJyaF9fNjknLCByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIEBlcSAoIM6pZGJyaF9fNzAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBkOiAnYSxcIkFcIiwwJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzcxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgZDogJ2IsXCJCXCIsMCcgfVxuICAgICAgQGVxICggzqlkYnJoX183MiA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJvd3MgPSBoLmhyZF9maW5kX25vbm5vcm1hbF9ncm91cHMoKVxuICAgICAgQGVxICggzqlkYnJoX183MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ2EnLCB2YWx1ZTogJ1wiQVwiJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzc0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnYicsIHZhbHVlOiAnXCJCXCInIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNzUgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkZWJ1ZyAnzqlkYnJoX183NicsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGguaHJkX2ZpbmRfZ3JvdXBzKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19ob2FyZF9wbHVnaW5fbm9ybWFsaXphdGlvbl9hbmRfY29uZmxpY3RfZGV0ZWN0aW9uOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmQgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIEBwbHVnaW5zOiBbXG4gICAgICAgIGRicmljX2hvYXJkX3BsdWdpblxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaCA9IEhvYXJkLnJlYnVpbGQoKVxuICAgICAgaC5ocmRfcHVuY2ggKCBjaWRfb2YgJ0EnICksICggY2lkX29mICdaJyApLCAndm93ZWwnLCBmYWxzZVxuICAgICAgaC5ocmRfcHVuY2ggeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAnQScgKSwga2V5OiAndm93ZWwnLCB2YWx1ZTogdHJ1ZSwgfVxuICAgICAgaC5ocmRfcHVuY2ggKCBjaWRfb2YgJ0UnICksICggY2lkX29mICdFJyApLCAndm93ZWwnLCB0cnVlXG4gICAgICBoLmhyZF9wdW5jaCAoIGNpZF9vZiAnSScgKSwgKCBjaWRfb2YgJ0knICksICd2b3dlbCcsIHRydWVcbiAgICAgIGguaHJkX3B1bmNoICggY2lkX29mICdPJyApLCAoIGNpZF9vZiAnTycgKSwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgaC5ocmRfcHVuY2ggKCBjaWRfb2YgJ1UnICksICggY2lkX29mICdVJyApLCAndm93ZWwnLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGRvX2NvdmVyYWdlID0gdHJ1ZVxuICBkb19jb3ZlcmFnZSA9IGZhbHNlXG4gIGlmIGRvX2NvdmVyYWdlXG4gICAgeyBDb3ZlcmFnZV9hbmFseXplciwgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvY292ZXJhZ2UtYW5hbHl6ZXInXG4gICAgY2EgPSBuZXcgQ292ZXJhZ2VfYW5hbHl6ZXIoKVxuICAgICMgY2Eud3JhcF9jbGFzcyBEYnJpY19zdGRcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGJyaWNfaG9hcmRfcGx1Z2luX21vZGVsOiB0ZXN0cy5kYnJpY19ob2FyZF9wbHVnaW5fbW9kZWwsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2R5bmFtaWNfYnVpbGRfcHJvcGVydGllczogdGVzdHMuZGJyaWNfZHluYW1pY19idWlsZF9wcm9wZXJ0aWVzLCB9XG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaWYgZG9fY292ZXJhZ2VcbiAgICB3YXJuICfOqWRicmhfXzc3JywgXCJub3QgY292ZXJlZDpcIiwgcmV2ZXJzZSBuYW1lIGZvciBuYW1lIGluIGNhLnVudXNlZF9uYW1lcyBpZiBjYS51bnVzZWRfbmFtZXMubGVuZ3RoID4gMFxuICAgICMgaGVscCAnzqlkYnJoX183OCcsIGNhLnVzZWRfbmFtZXNcbiAgICAjIHVyZ2UgJ86pZGJyaF9fNzknLCBjb3VudCwgbmFtZXMgZm9yIGNvdW50LCBuYW1lcyBvZiBjYS5uYW1lc19ieV9jb3VudHNcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICA7bnVsbFxuXG5cbiJdfQ==
