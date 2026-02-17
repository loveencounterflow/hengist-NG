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
      (() => {        //.......................................................................................................
        var results, row, rows;
        results = [];
        for (row of rows = h.hrd_find_conflicts()) {
          results.push(echo(row));
        }
        return results;
      })();
      // rows = h.hrd_conflicts()
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
        var rows, Ωdbrh__55, Ωdbrh__56, Ωdbrh__57, Ωdbrh__58, Ωdbrh__59, Ωdbrh__60, Ωdbrh__61, Ωdbrh__62, Ωdbrh__63;
        // echo row for row from rows = h.hrd_find_groups()
        rows = h.hrd_find_groups();
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
        rows = h.hrd_find_nonnormal_groups();
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
        rows = h.hrd_find_nonnormal_groups();
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
        for (row of rows = h.hrd_find_groups()) {
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
        var chr, chr_string, cid, color, h, i, is_vowel, ref, ref1, row, rows, Ωdbrh_100, Ωdbrh_101, Ωdbrh_102, Ωdbrh_103, Ωdbrh_104, Ωdbrh_105, Ωdbrh_106, Ωdbrh_107, Ωdbrh_108, Ωdbrh_109, Ωdbrh_110, Ωdbrh_111, Ωdbrh_112, Ωdbrh_113, Ωdbrh_114, Ωdbrh_115, Ωdbrh_116, Ωdbrh_117, Ωdbrh_118, Ωdbrh_119, Ωdbrh_120, Ωdbrh_121, Ωdbrh_122, Ωdbrh_123, Ωdbrh_124, Ωdbrh_125, Ωdbrh_126, Ωdbrh_127, Ωdbrh_128, Ωdbrh_129, Ωdbrh__87, Ωdbrh__88, Ωdbrh__89, Ωdbrh__90, Ωdbrh__91, Ωdbrh__92, Ωdbrh__93, Ωdbrh__94, Ωdbrh__95, Ωdbrh__96, Ωdbrh__97, Ωdbrh__98, Ωdbrh__99;
        h = Hoard.rebuild();
        //.....................................................................................................
        h.hrd_add_run(cid_of('A'), cid_of('Z'), 'vowel', false);
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh__87 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+00005a,vowel',
          lo: 65,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh__88 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.hrd_punch({
          lo: cid_of('A'),
          hi: cid_of('A'),
          key: 'vowel',
          value: true
        });
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh__89 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+000041,vowel',
          lo: 65,
          hi: 65,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh__90 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000042,+00005a,vowel',
          lo: 66,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh__91 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.hrd_punch(cid_of('E'), cid_of('E'), 'vowel', true);
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh__92 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+000041,vowel',
          lo: 65,
          hi: 65,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh__93 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000042,+000044,vowel',
          lo: 66,
          hi: 68,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh__94 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000045,+000045,vowel',
          lo: 69,
          hi: 69,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh__95 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000046,+00005a,vowel',
          lo: 70,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh__96 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.hrd_punch(cid_of('I'), cid_of('I'), 'vowel', true);
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh__97 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+000041,vowel',
          lo: 65,
          hi: 65,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh__98 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000042,+000044,vowel',
          lo: 66,
          hi: 68,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh__99 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000045,+000045,vowel',
          lo: 69,
          hi: 69,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_100 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000046,+000048,vowel',
          lo: 70,
          hi: 72,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_101 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000049,+000049,vowel',
          lo: 73,
          hi: 73,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_102 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00004a,+00005a,vowel',
          lo: 74,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_103 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.hrd_punch(cid_of('O'), cid_of('O'), 'vowel', true);
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh_104 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+000041,vowel',
          lo: 65,
          hi: 65,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_105 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000042,+000044,vowel',
          lo: 66,
          hi: 68,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_106 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000045,+000045,vowel',
          lo: 69,
          hi: 69,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_107 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000046,+000048,vowel',
          lo: 70,
          hi: 72,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_108 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000049,+000049,vowel',
          lo: 73,
          hi: 73,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_109 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00004a,+00004e,vowel',
          lo: 74,
          hi: 78,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_110 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00004f,+00004f,vowel',
          lo: 79,
          hi: 79,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_111 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000050,+00005a,vowel',
          lo: 80,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_112 = function() {
          return rows.next().done;
        }), true);
        //.....................................................................................................
        h.hrd_punch(cid_of('U'), cid_of('U'), 'vowel', true);
        // echo(); echo row for row from h.hrd_find_runs()
        rows = h.hrd_find_runs();
        this.eq((Ωdbrh_113 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000041,+000041,vowel',
          lo: 65,
          hi: 65,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_114 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000042,+000044,vowel',
          lo: 66,
          hi: 68,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_115 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000045,+000045,vowel',
          lo: 69,
          hi: 69,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_116 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000046,+000048,vowel',
          lo: 70,
          hi: 72,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_117 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000049,+000049,vowel',
          lo: 73,
          hi: 73,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_118 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00004a,+00004e,vowel',
          lo: 74,
          hi: 78,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_119 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+00004f,+00004f,vowel',
          lo: 79,
          hi: 79,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_120 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000050,+000054,vowel',
          lo: 80,
          hi: 84,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_121 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000055,+000055,vowel',
          lo: 85,
          hi: 85,
          key: 'vowel',
          value: 'true'
        });
        this.eq((Ωdbrh_122 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs:V=+000056,+00005a,vowel',
          lo: 86,
          hi: 90,
          key: 'vowel',
          value: 'false'
        });
        this.eq((Ωdbrh_123 = function() {
          return rows.next().done;
        }), true);
        for (row of h.hrd_find_groups()) {
          //.....................................................................................................
          echo(row);
        }
        rows = h.hrd_find_groups();
        this.eq((Ωdbrh_124 = function() {
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
        this.eq((Ωdbrh_125 = function() {
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
        this.eq((Ωdbrh_126 = function() {
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
          this.eq((Ωdbrh_127 = function() {
            return rows.length;
          }), 1);
          this.eq((Ωdbrh_128 = function() {
            return rows[0].key;
          }), 'vowel');
          this.eq((Ωdbrh_129 = function() {
            return type_of(is_vowel);
          }), 'boolean');
        }
        debug('Ωdbrh_130', chr_string);
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
        var h;
        h = Hoard.rebuild();
        //.....................................................................................................
        h.tbl_echo_as_text(SQL`select * from hrd_runs order by lo;`);
        h.hrd_add_run(cid_of('A'), cid_of('Z'), 'vowel', false);
        h.tbl_echo_as_text(SQL`select * from hrd_runs order by lo;`);
        h.hrd_punch(cid_of('E'), null, 'vowel', true);
        return h.tbl_echo_as_text(SQL`select * from hrd_runs order by lo;`);
      })();
      // h.tbl_echo_as_text SQL"select * from hrd_groups;"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMtaG9hcmQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxrQkFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLHlCQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO0lBQUEsb0JBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsdUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdF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LENBQUEsR0FBa0MsT0FBQSxDQUFRLHlEQUFSLENBQWxDO1FBQ0EsRUFBQSxHQUFLLElBQUksaUJBQUosQ0FBQSxFQUZQO09BRkY7OztNQU9FLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLElBQXZDO1FBQTZDLGFBQUEsRUFBZTtNQUE1RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RCxFQVRoQjs7TUFXRSxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCO1FBQUUseURBQUEsRUFBMkQsS0FBSyxDQUFDO01BQW5FLENBQTlCLEVBWEY7OztNQWNFLElBQUcsV0FBSDtRQUNFLElBQThFLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBaEIsR0FBeUIsQ0FBdkc7QUFBQTtVQUFBLEtBQUEscUNBQUE7O1lBQUEsSUFBQSxDQUFLLFdBQUwsRUFBa0IsY0FBbEIsRUFBa0MsT0FBQSxDQUFRLElBQVIsQ0FBbEM7VUFBQSxDQUFBO1NBREY7T0FkRjs7OzthQW1CRztJQXBCcUMsQ0FBQSxJQUF4Qzs7QUFqWkEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1kYnJpYy1ob2FyZCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5GUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnsgRGJyaWMsXG4gIERicmljX3N0ZCxcbiAgSUROLFxuICBMSVQsXG4gIFNRTCxcbiAgVkVDLFxuICBmcm9tX2Jvb2wsXG4gIGFzX2Jvb2wsXG4gIFRydWUsXG4gIEZhbHNlLFxuICB1bnF1b3RlX25hbWUsICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvZGJyaWMnXG4jIHsgbGV0cywgICAgICAgICAgICAgICAgIH0gPSBpbnRlcm5hbHNcbnsgZGJyaWNfcGx1Z2luOiBcXFxuICAgIGRicmljX2hvYXJkX3BsdWdpbiwgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvaW50ZXJtaXNzaW9uMidcbnsgdHlwZV9vZiwgICAgICAgICAgICAgIH0gPSAoIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvdW5zdGFibGUtcnByLXR5cGVfb2YtYnJpY3MnICkucmVxdWlyZV90eXBlX29mKClcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jaWRfb2YgPSAoIHggKSAtPiB4LmNvZGVQb2ludEF0IDBcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbnNlcnRfdW5pY29kZV9leGNsdXNpb25zID0gKCBoICkgLT5cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAtSW5maW5pdHksIGhpOiAgICAgICAgLTEsIGtleTogJyR4JywgdmFsdWU6IFwibmVnYXRpdmUgQ0lEc1wiLCAgIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweDAwMDAsIGhpOiAgICAweDAwMDAsIGtleTogJyR4JywgdmFsdWU6IFwiemVybyBieXRlc1wiLCAgICAgIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGQ4MDAsIGhpOiAgICAweGRiZmYsIGtleTogJyR4JywgdmFsdWU6IFwiaGlnaCBzdXJyb2dhdGVzXCIsIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGRjMDAsIGhpOiAgICAweGRmZmYsIGtleTogJyR4JywgdmFsdWU6IFwibG93IHN1cnJvZ2F0ZXNcIiwgIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGZkZDAsIGhpOiAgICAweGZkZWYsIGtleTogJyR4JywgdmFsdWU6IFwibm9uY2hhcmFjdGVyc1wiLCAgIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGZmZmUsIGhpOiAgICAweGZmZmYsIGtleTogJyR4JywgdmFsdWU6IFwibm9uY2hhcmFjdGVyc1wiLCAgIH1cbiAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgMHgxMTAwMDAsIGhpOiArSW5maW5pdHksIGtleTogJyR4JywgdmFsdWU6IFwiZXhjZXNzaXZlIENJRHNcIiwgIH1cbiAgO251bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGVzdHMgPSB0ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19ob2FyZF9wbHVnaW5fYmFzaWNzOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmQgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIEBwbHVnaW5zOiBbXG4gICAgICAgIGRicmljX2hvYXJkX3BsdWdpblxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBoID0gSG9hcmQucmVidWlsZCgpXG4gICAgQGVxICggzqlkYnJoX19fMSA9IC0+ICdzdGRfZ2V0X3RhYmxlcycgICAgICAgICAgICAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX18yID0gLT4gJ2hyZF9maW5kX3J1bnMnICAgICAgICAgICAgICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzMgPSAtPiAnaHJkX2luc2VydF9ydW4nICAgICAgICAgICAgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX19fNCA9IC0+ICdocmRfZmluZF9vdmVybGFwcycgICAgICAgICAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX181ID0gLT4gJ2hyZF9maW5kX292ZXJsYXBzX2Zvcl9rZXknICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzYgPSAtPiAnaHJkX2ZpbmRfY29uZmxpY3RzJyAgICAgICAgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBpbnNlcnRfdW5pY29kZV9leGNsdXNpb25zIGhcbiAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgLTB4MDAwYSwgaGk6ICAgIDB4MDAwMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgICAgICB9XG4gICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweDAwMDAsIGhpOiAgICAweDAwMGEsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicsICAgICAgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgaC5zdGF0ZW1lbnRzLmhyZF9maW5kX3J1bnNcbiAgICAgIHJvd3MgPSBoLndhbGsgaC5zdGF0ZW1lbnRzLmhyZF9maW5kX3J1bnNcbiAgICAgIEBlcSAoIM6pZGJyaF9fXzcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0tSW5maW5pdHksLTAwMDAwMSwkeCcsIGxvOiAtSW5maW5pdHksIGhpOiAtMSwga2V5OiAnJHgnLCB2YWx1ZTogJ25lZ2F0aXZlIENJRHMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fXzggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0tMDAwMDBhLCswMDAwMDAsZm9vJywgbG86IC0xMCwgaGk6IDAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicgfVxuICAgICAgQGVxICggzqlkYnJoX19fOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwMDAsKzAwMDAwMCwkeCcsIGxvOiAwLCBoaTogMCwga2V5OiAnJHgnLCB2YWx1ZTogJ3plcm8gYnl0ZXMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDAwLCswMDAwMGEsZm9vJywgbG86IDAsIGhpOiAxMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzExID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZDgwMCwrMDBkYmZmLCR4JywgbG86IDU1Mjk2LCBoaTogNTYzMTksIGtleTogJyR4JywgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDBkYzAwLCswMGRmZmYsJHgnLCBsbzogNTYzMjAsIGhpOiA1NzM0Mywga2V5OiAnJHgnLCB2YWx1ZTogJ2xvdyBzdXJyb2dhdGVzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzEzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZmRkMCwrMDBmZGVmLCR4JywgbG86IDY0OTc2LCBoaTogNjUwMDcsIGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzE0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZmZmZSwrMDBmZmZmLCR4JywgbG86IDY1NTM0LCBoaTogNjU1MzUsIGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzE1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzExMDAwMCwrSW5maW5pdHksJHgnLCBsbzogMTExNDExMiwgaGk6IEluZmluaXR5LCBrZXk6ICckeCcsIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTYgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBmaW5kX292ZXJsYXBzID0gaC5zdGF0ZW1lbnRzLmhyZF9maW5kX292ZXJsYXBzXG4gICAgICAjIGRlYnVnICfOqWRicmhfXzE3Jywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIGZpbmRfb3ZlcmxhcHMsIHsgbG86IC0weDEsIGhpOiAweDBiLCB9XG4gICAgICAjIGRlYnVnICfOqWRicmhfXzE4Jywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIGZpbmRfb3ZlcmxhcHMsIHsgbG86IC0weDEsIGhpOiAweDBiLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGxvICAgICAgPSAtMHgwMDAxXG4gICAgICBoaSAgICAgID0gKzB4MDAwYlxuICAgICAgc2VlbiAgICA9IG5ldyBTZXQoKVxuICAgICAgbWF0Y2hlciA9IFtdXG4gICAgICBmb3IgbiBpbiBbIGxvIC4uIGhpIF1cbiAgICAgICAgZm9yIHsgcm93aWQsIH0gZnJvbSBoLndhbGsgZmluZF9vdmVybGFwcywgeyBsbzogbiwgaGk6IG4sIH1cbiAgICAgICAgICBtYXRjaGVyLnB1c2ggcm93aWQgdW5sZXNzIHNlZW4uaGFzIHJvd2lkXG4gICAgICAgICAgc2Vlbi5hZGQgcm93aWRcbiAgICAgIEBlcSAoIM6pZGJyaF9fMTkgPSAtPiBtYXRjaGVyLmxlbmd0aCApLCA0XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlc3VsdCA9IFsgKCByb3dpZCBmb3IgeyByb3dpZCwgfSBmcm9tIGgud2FsayBmaW5kX292ZXJsYXBzLCB7IGxvLCBoaSwgfSApLi4uLCBdXG4gICAgICBAZXEgKCDOqWRicmhfXzIwID0gLT4gcmVzdWx0ICksIG1hdGNoZXJcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZmluZF9vdmVybGFwcyAgID0gaC5zdGF0ZW1lbnRzLmhyZF9maW5kX292ZXJsYXBzXG4gICAgICBmaW5kX2NvbmZsaWN0cyAgPSBoLnN0YXRlbWVudHMuaHJkX2ZpbmRfY29uZmxpY3RzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pZGJyaF9fMjEgPSAtPiBbICggcm93IGZvciByb3cgZnJvbSBoLndhbGsgZmluZF9jb25mbGljdHMgKS4uLiwgXSApLCBbXVxuICAgICAgQGVxICggzqlkYnJoX18yMiA9IC0+IFsgKCBoLmhyZF9maW5kX2NvbmZsaWN0cygpICkuLi4sIF0gICAgICAgICAgICAgICAgICksIFtdXG4gICAgICBAZXEgKCDOqWRicmhfXzIzID0gLT4gaC5ocmRfdmFsaWRhdGUoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbnVsbFxuICAgICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAtMHgwMDBhLCBoaTogKzB4MDAwMywga2V5OiAnZm9vJywgdmFsdWU6ICdcImZ1elwiJywgICAgICB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHNlZW4gICAgPSBuZXcgU2V0KClcbiAgICAgIG1hdGNoZXIgPSBbXG4gICAgICAgIHsga2V5OiAnZm9vJywgdmFsdWVfYTogJ1wiYmFyXCInLCB2YWx1ZV9iOiAnXCJmdXpcIicgfSxcbiAgICAgICAgeyBrZXk6ICdmb28nLCB2YWx1ZV9hOiAnXCJiYXJcIicsIHZhbHVlX2I6ICdcImZ1elwiJyB9LCBdXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJlc3VsdCA9IFtdXG4gICAgICBmb3Igcm93IGZyb20gaC53YWxrIGZpbmRfY29uZmxpY3RzXG4gICAgICAgIHJlc3VsdC5wdXNoIHsga2V5OiByb3cua2V5X2EsIHZhbHVlX2E6IHJvdy52YWx1ZV9hLCB2YWx1ZV9iOiByb3cudmFsdWVfYiwgfVxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcmVzdWx0XG4gICAgICBAZXEgKCDOqWRicmhfXzI0ID0gLT4gcmVzdWx0ICksIG1hdGNoZXJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmVzdWx0ID0gW11cbiAgICAgIGZvciByb3cgZnJvbSBoLmhyZF9maW5kX2NvbmZsaWN0cygpXG4gICAgICAgIHJlc3VsdC5wdXNoIHsga2V5OiByb3cua2V5X2EsIHZhbHVlX2E6IHJvdy52YWx1ZV9hLCB2YWx1ZV9iOiByb3cudmFsdWVfYiwgfVxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcmVzdWx0XG4gICAgICBAZXEgKCDOqWRicmhfXzI1ID0gLT4gcmVzdWx0ICksIG1hdGNoZXJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQHRocm93cyAoIM6pZGJyaF9fMjYgPSAtPiBoLmhyZF92YWxpZGF0ZSgpICksIC9mb3VuZCBjb25mbGljdHMvXG4gICAgICB0cnkgaC5ocmRfdmFsaWRhdGUoKSBjYXRjaCBlIHRoZW4gd2FybiAnzqlkYnJoX18yNycsIGUubWVzc2FnZVxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gaC53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBfaHJkX2dyb3VwX2hhc19jb25mbGljdDtcIlxuICAgICAgcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9ncm91cF9oYXNfY29uZmxpY3Q7XCJcbiAgICAgIEBlcSAoIM6pZGJyaF9fMjggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnLCBoYXNfY29uZmxpY3Q6IDAgfVxuICAgICAgQGVxICggzqlkYnJoX18yOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnLCBoYXNfY29uZmxpY3Q6IDAgfVxuICAgICAgQGVxICggzqlkYnJoX18zMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycsIGhhc19jb25mbGljdDogMCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzMxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCB2YWx1ZTogJ25lZ2F0aXZlIENJRHMnLCBoYXNfY29uZmxpY3Q6IDAgfVxuICAgICAgQGVxICggzqlkYnJoX18zMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJywgaGFzX2NvbmZsaWN0OiAwIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMzMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnemVybyBieXRlcycsIGhhc19jb25mbGljdDogMCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzM0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgaGFzX2NvbmZsaWN0OiAxIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMzUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiZnV6XCInLCBoYXNfY29uZmxpY3Q6IDEgfVxuICAgICAgQGVxICggzqlkYnJoX18zNiA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGVjaG8gcm93IGZvciByb3cgZnJvbSByb3dzID0gaC5ocmRfZmluZF9jb25mbGljdHMoKVxuICAgICAgIyByb3dzID0gaC5ocmRfY29uZmxpY3RzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19ob2FyZF9wbHVnaW5fZ3JvdXBzOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmQgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIEBwbHVnaW5zOiBbXG4gICAgICAgIGRicmljX2hvYXJkX3BsdWdpblxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBoID0gSG9hcmQucmVidWlsZCgpXG4gICAgaW5zZXJ0X3VuaWNvZGVfZXhjbHVzaW9ucyBoXG4gICAgaC5zdGF0ZW1lbnRzLmhyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgIC0weDAwMGEsIGhpOiAgICAweDAwMDAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicsICAgICAgfVxuICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHgwMDAwLCBoaTogICAgMHgwMDBhLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInLCAgICAgIH1cbiAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4MDAwMCwgaGk6ICAgIDB4MDAwYSwga2V5OiAnbmljZScsIHZhbHVlOiAndHJ1ZScsICAgICAgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLmhyZF9maW5kX2dyb3VwX2ZhY2V0cygpXG4gICAgICByb3dzID0gaC5ocmRfZmluZF9ncm91cF9mYWNldHMoKVxuICAgICAgQGVxICggzqlkYnJoX18zNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ2V4Y2Vzc2l2ZSBDSURzJywgIHJ1bnM6IDEsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMzggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnLCBydW5zOiAxLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzM5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnbG93IHN1cnJvZ2F0ZXMnLCAgcnVuczogMSwgfVxuICAgICAgQGVxICggzqlkYnJoX180MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ25lZ2F0aXZlIENJRHMnLCAgIHJ1bnM6IDEsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNDEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICdub25jaGFyYWN0ZXJzJywgICBydW5zOiAyLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzQyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnemVybyBieXRlcycsICAgICAgcnVuczogMSwgfVxuICAgICAgQGVxICggzqlkYnJoX180MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ2ZvbycsICB2YWx1ZTogJ1wiYmFyXCInLCAgICAgICAgICAgcnVuczogMiwgfVxuICAgICAgQGVxICggzqlkYnJoX180NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ25pY2UnLCB2YWx1ZTogJ3RydWUnLCAgICAgICAgICAgIHJ1bnM6IDEsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNDUgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSByb3dzID0gaC5ocmRfZmluZF9ydW5zX2J5X2dyb3VwKClcbiAgICAgIHJvd3MgPSBoLmhyZF9maW5kX3J1bnNfYnlfZ3JvdXAoKVxuICAgICAgQGVxICggzqlkYnJoX180NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdleGNlc3NpdmUgQ0lEcycsIHJ1bnM6IFsgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMTEwMDAwLCtJbmZpbml0eSwkeCcsIGxvOiAxMTE0MTEyLCBoaTogSW5maW5pdHksIGtleTogJyR4JywgdmFsdWU6ICdleGNlc3NpdmUgQ0lEcycgfSBdIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNDcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnaGlnaCBzdXJyb2dhdGVzJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMGQ4MDAsKzAwZGJmZiwkeCcsIGxvOiA1NTI5NiwgaGk6IDU2MzE5LCBrZXk6ICckeCcsIHZhbHVlOiAnaGlnaCBzdXJyb2dhdGVzJyB9IF0gfVxuICAgICAgQGVxICggzqlkYnJoX180OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycsIHJ1bnM6IFsgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDBkYzAwLCswMGRmZmYsJHgnLCBsbzogNTYzMjAsIGhpOiA1NzM0Mywga2V5OiAnJHgnLCB2YWx1ZTogJ2xvdyBzdXJyb2dhdGVzJyB9IF0gfVxuICAgICAgQGVxICggzqlkYnJoX180OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICduZWdhdGl2ZSBDSURzJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPS1JbmZpbml0eSwtMDAwMDAxLCR4JywgbG86IC1JbmZpbml0eSwgaGk6IC0xLCBrZXk6ICckeCcsIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycgfSBdIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNTAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnbm9uY2hhcmFjdGVycycsIHJ1bnM6IFsgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDBmZGQwLCswMGZkZWYsJHgnLCBsbzogNjQ5NzYsIGhpOiA2NTAwNywga2V5OiAnJHgnLCB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnIH0sIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZmZmZSwrMDBmZmZmLCR4JywgbG86IDY1NTM0LCBoaTogNjU1MzUsIGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJyB9IF0gfVxuICAgICAgQGVxICggzqlkYnJoX181MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICd6ZXJvIGJ5dGVzJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwMDAsKzAwMDAwMCwkeCcsIGxvOiAwLCBoaTogMCwga2V5OiAnJHgnLCB2YWx1ZTogJ3plcm8gYnl0ZXMnIH0gXSB9XG4gICAgICBAZXEgKCDOqWRicmhfXzUyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPS0wMDAwMGEsKzAwMDAwMCxmb28nLCBsbzogLTEwLCBoaTogMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJyB9LCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwMDAsKzAwMDAwYSxmb28nLCBsbzogMCwgaGk6IDEwLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInIH0gXSB9XG4gICAgICBAZXEgKCDOqWRicmhfXzUzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnbmljZScsIHZhbHVlOiAndHJ1ZScsIHJ1bnM6IFsgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDAwLCswMDAwMGEsbmljZScsIGxvOiAwLCBoaTogMTAsIGtleTogJ25pY2UnLCB2YWx1ZTogJ3RydWUnIH0gXSB9XG4gICAgICBAZXEgKCDOqWRicmhfXzU0ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGguaHJkX2ZpbmRfZ3JvdXBzKClcbiAgICAgIHJvd3MgPSBoLmhyZF9maW5kX2dyb3VwcygpXG4gICAgICBAZXEgKCDOqWRicmhfXzU1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnLCAgZmlyc3Q6IDExMTQxMTIsICAgbGFzdDogSW5maW5pdHksIHJ1bnM6IDEsIGhhc19jb25mbGljdDogZmFsc2UsIGlzX25vcm1hbDogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlkYnJoX181NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ2hpZ2ggc3Vycm9nYXRlcycsIGZpcnN0OiA1NTI5NiwgICAgIGxhc3Q6IDU2MzE5LCAgICBydW5zOiAxLCBoYXNfY29uZmxpY3Q6IGZhbHNlLCBpc19ub3JtYWw6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNTcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycsICBmaXJzdDogNTYzMjAsICAgICBsYXN0OiA1NzM0MywgICAgcnVuczogMSwgaGFzX2NvbmZsaWN0OiBmYWxzZSwgaXNfbm9ybWFsOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzU4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycsICAgZmlyc3Q6IC1JbmZpbml0eSwgbGFzdDogLTEsICAgICAgIHJ1bnM6IDEsIGhhc19jb25mbGljdDogZmFsc2UsIGlzX25vcm1hbDogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlkYnJoX181OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgICB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnLCAgIGZpcnN0OiA2NDk3NiwgICAgIGxhc3Q6IDY1NTM1LCAgICBydW5zOiAyLCBoYXNfY29uZmxpY3Q6IGZhbHNlLCBpc19ub3JtYWw6IHRydWUsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNjAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsICAgdmFsdWU6ICd6ZXJvIGJ5dGVzJywgICAgICBmaXJzdDogMCwgICAgICAgICBsYXN0OiAwLCAgICAgICAgcnVuczogMSwgaGFzX2NvbmZsaWN0OiBmYWxzZSwgaXNfbm9ybWFsOiB0cnVlLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzYxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnZm9vJywgIHZhbHVlOiAnXCJiYXJcIicsICAgICAgICAgICBmaXJzdDogLTEwLCAgICAgICBsYXN0OiAxMCwgICAgICAgcnVuczogMiwgaGFzX2NvbmZsaWN0OiB0cnVlLCAgaXNfbm9ybWFsOiBmYWxzZSwgfVxuICAgICAgQGVxICggzqlkYnJoX182MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ25pY2UnLCB2YWx1ZTogJ3RydWUnLCAgICAgICAgICAgIGZpcnN0OiAwLCAgICAgICAgIGxhc3Q6IDEwLCAgICAgICBydW5zOiAxLCBoYXNfY29uZmxpY3Q6IHRydWUsICBpc19ub3JtYWw6IGZhbHNlLCB9XG4gICAgICBAZXEgKCDOqWRicmhfXzYzID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb246IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBIb2FyZCBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQHBsdWdpbnM6IFtcbiAgICAgICAgZGJyaWNfaG9hcmRfcGx1Z2luXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gSG9hcmQucmVidWlsZCgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRlYnVnICfOqWRicmhfXzY0Jywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgQGVxICggzqlkYnJoX182NSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogMHgwMDEwLCBoaTogMHgwMDE1LCBrZXk6ICdhJywgdmFsdWU6ICdcIkFcIicsIH1cbiAgICAgIGguc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogMHgwMDIwLCBoaTogMHgwMDI1LCBrZXk6ICdhJywgdmFsdWU6ICdcIkFcIicsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBkZWJ1ZyAnzqlkYnJoX182NicsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAgICAgQGVxICggzqlkYnJoX182NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGQ6ICdhLFwiQVwiLDEnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNjggPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86IDB4MDAxNiwgaGk6IDB4MDAxNiwga2V5OiAnYScsIHZhbHVlOiAnXCJBXCInLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZGVidWcgJ86pZGJyaF9fNjknLCByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgICAgIEBlcSAoIM6pZGJyaF9fNzAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBkOiAnYSxcIkFcIiwwJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzcxID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfbm9ubm9ybWFsX2dyb3VwcygpXG4gICAgICBAZXEgKCDOqWRicmhfXzcyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnYScsIHZhbHVlOiAnXCJBXCInIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNzMgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86IDB4MDAxMCwgaGk6IDB4MDAxNSwga2V5OiAnYicsIHZhbHVlOiAnXCJCXCInLCB9XG4gICAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86IDB4MDAyMCwgaGk6IDB4MDAyNSwga2V5OiAnYicsIHZhbHVlOiAnXCJCXCInLCB9XG4gICAgICAjIGRlYnVnICfOqWRicmhfXzc0Jywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICBAZXEgKCDOqWRicmhfXzc1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgZDogJ2EsXCJBXCIsMCcgfVxuICAgICAgQGVxICggzqlkYnJoX183NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGQ6ICdiLFwiQlwiLDEnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fNzcgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgbG86IDB4MDAxMiwgaGk6IDB4MDAxNywga2V5OiAnYicsIHZhbHVlOiAnXCJCXCInLCB9XG4gICAgICAjIGRlYnVnICfOqWRicmhfXzc4Jywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICAgICBAZXEgKCDOqWRicmhfXzc5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgZDogJ2EsXCJBXCIsMCcgfVxuICAgICAgQGVxICggzqlkYnJoX184MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGQ6ICdiLFwiQlwiLDAnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fODEgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByb3dzID0gaC5ocmRfZmluZF9ub25ub3JtYWxfZ3JvdXBzKClcbiAgICAgIEBlcSAoIM6pZGJyaF9fODIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICdhJywgdmFsdWU6ICdcIkFcIicgfVxuICAgICAgQGVxICggzqlkYnJoX184MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ2InLCB2YWx1ZTogJ1wiQlwiJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzg0ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGVidWcgJ86pZGJyaF9fODUnLCByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLmhyZF9maW5kX2dyb3VwcygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb25fYW5kX2NvbmZsaWN0X2RldGVjdGlvbjogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNsYXNzIEhvYXJkIGV4dGVuZHMgRGJyaWNfc3RkXG4gICAgICBAcGx1Z2luczogW1xuICAgICAgICBkYnJpY19ob2FyZF9wbHVnaW5cbiAgICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGggPSBIb2FyZC5yZWJ1aWxkKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgKCBjaWRfb2YgJ1onICksICd2b3dlbCcsIGZhbHNlXG4gICAgICAjIGVjaG8oKTsgZWNobyByb3cgZm9yIHJvdyBmcm9tIGguaHJkX2ZpbmRfcnVucygpXG4gICAgICByb3dzID0gaC5ocmRfZmluZF9ydW5zKClcbiAgICAgIEBlcSAoIM6pZGJyaF9fODcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQxLCswMDAwNWEsdm93ZWwnLCBsbzogNjUsIGhpOiA5MCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzg4ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaC5ocmRfcHVuY2ggeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAnQScgKSwga2V5OiAndm93ZWwnLCB2YWx1ZTogdHJ1ZSwgfVxuICAgICAgIyBlY2hvKCk7IGVjaG8gcm93IGZvciByb3cgZnJvbSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfcnVucygpXG4gICAgICBAZXEgKCDOqWRicmhfXzg5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MSwrMDAwMDQxLHZvd2VsJywgbG86IDY1LCBoaTogNjUsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzkwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MiwrMDAwMDVhLHZvd2VsJywgbG86IDY2LCBoaTogOTAsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoX185MSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguaHJkX3B1bmNoICggY2lkX29mICdFJyApLCAoIGNpZF9vZiAnRScgKSwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgIyBlY2hvKCk7IGVjaG8gcm93IGZvciByb3cgZnJvbSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfcnVucygpXG4gICAgICBAZXEgKCDOqWRicmhfXzkyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MSwrMDAwMDQxLHZvd2VsJywgbG86IDY1LCBoaTogNjUsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzkzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MiwrMDAwMDQ0LHZvd2VsJywgbG86IDY2LCBoaTogNjgsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoX185NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDUsKzAwMDA0NSx2b3dlbCcsIGxvOiA2OSwgaGk6IDY5LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoX185NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDYsKzAwMDA1YSx2b3dlbCcsIGxvOiA3MCwgaGk6IDkwLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fOTYgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLmhyZF9wdW5jaCAoIGNpZF9vZiAnSScgKSwgKCBjaWRfb2YgJ0knICksICd2b3dlbCcsIHRydWVcbiAgICAgICMgZWNobygpOyBlY2hvIHJvdyBmb3Igcm93IGZyb20gaC5ocmRfZmluZF9ydW5zKClcbiAgICAgIHJvd3MgPSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgQGVxICggzqlkYnJoX185NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDEsKzAwMDA0MSx2b3dlbCcsIGxvOiA2NSwgaGk6IDY1LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoX185OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDIsKzAwMDA0NCx2b3dlbCcsIGxvOiA2NiwgaGk6IDY4LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fOTkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ1LCswMDAwNDUsdm93ZWwnLCBsbzogNjksIGhpOiA2OSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMDAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ2LCswMDAwNDgsdm93ZWwnLCBsbzogNzAsIGhpOiA3Miwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTAxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0OSwrMDAwMDQ5LHZvd2VsJywgbG86IDczLCBoaTogNzMsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTAyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0YSwrMDAwMDVhLHZvd2VsJywgbG86IDc0LCBoaTogOTAsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEwMyA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguaHJkX3B1bmNoICggY2lkX29mICdPJyApLCAoIGNpZF9vZiAnTycgKSwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgIyBlY2hvKCk7IGVjaG8gcm93IGZvciByb3cgZnJvbSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfcnVucygpXG4gICAgICBAZXEgKCDOqWRicmhfMTA0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MSwrMDAwMDQxLHZvd2VsJywgbG86IDY1LCBoaTogNjUsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTA1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MiwrMDAwMDQ0LHZvd2VsJywgbG86IDY2LCBoaTogNjgsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEwNiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDUsKzAwMDA0NSx2b3dlbCcsIGxvOiA2OSwgaGk6IDY5LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEwNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDYsKzAwMDA0OCx2b3dlbCcsIGxvOiA3MCwgaGk6IDcyLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMDggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ5LCswMDAwNDksdm93ZWwnLCBsbzogNzMsIGhpOiA3Mywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMDkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDRhLCswMDAwNGUsdm93ZWwnLCBsbzogNzQsIGhpOiA3OCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTEwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0ZiwrMDAwMDRmLHZvd2VsJywgbG86IDc5LCBoaTogNzksIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTExID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA1MCwrMDAwMDVhLHZvd2VsJywgbG86IDgwLCBoaTogOTAsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzExMiA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGguaHJkX3B1bmNoICggY2lkX29mICdVJyApLCAoIGNpZF9vZiAnVScgKSwgJ3Zvd2VsJywgdHJ1ZVxuICAgICAgIyBlY2hvKCk7IGVjaG8gcm93IGZvciByb3cgZnJvbSBoLmhyZF9maW5kX3J1bnMoKVxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfcnVucygpXG4gICAgICBAZXEgKCDOqWRicmhfMTEzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MSwrMDAwMDQxLHZvd2VsJywgbG86IDY1LCBoaTogNjUsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTE0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MiwrMDAwMDQ0LHZvd2VsJywgbG86IDY2LCBoaTogNjgsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzExNSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDUsKzAwMDA0NSx2b3dlbCcsIGxvOiA2OSwgaGk6IDY5LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoXzExNiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDYsKzAwMDA0OCx2b3dlbCcsIGxvOiA3MCwgaGk6IDcyLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMTcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ5LCswMDAwNDksdm93ZWwnLCBsbzogNzMsIGhpOiA3Mywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMTggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDRhLCswMDAwNGUsdm93ZWwnLCBsbzogNzQsIGhpOiA3OCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTE5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0ZiwrMDAwMDRmLHZvd2VsJywgbG86IDc5LCBoaTogNzksIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgICBAZXEgKCDOqWRicmhfMTIwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA1MCwrMDAwMDU0LHZvd2VsJywgbG86IDgwLCBoaTogODQsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEyMSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNTUsKzAwMDA1NSx2b3dlbCcsIGxvOiA4NSwgaGk6IDg1LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgICAgQGVxICggzqlkYnJoXzEyMiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNTYsKzAwMDA1YSx2b3dlbCcsIGxvOiA4NiwgaGk6IDkwLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF8xMjMgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBlY2hvIHJvdyBmb3Igcm93IGZyb20gaC5ocmRfZmluZF9ncm91cHMoKVxuICAgICAgcm93cyA9IGguaHJkX2ZpbmRfZ3JvdXBzKClcbiAgICAgIEBlcSAoIM6pZGJyaF8xMjQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnLCAgZmlyc3Q6IDY2LCBsYXN0OiA5MCwgcnVuczogNSwgaGFzX2NvbmZsaWN0OiB0cnVlLCBpc19ub3JtYWw6IGZhbHNlLCB9XG4gICAgICBAZXEgKCDOqWRicmhfMTI1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnLCAgIGZpcnN0OiA2NSwgbGFzdDogODUsIHJ1bnM6IDUsIGhhc19jb25mbGljdDogdHJ1ZSwgaXNfbm9ybWFsOiBmYWxzZSwgfVxuICAgICAgQGVxICggzqlkYnJoXzEyNiA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGNocl9zdHJpbmcgPSAnJ1xuICAgICAgZm9yIGNpZCBpbiBbICggY2lkX29mICdBJyApIC4uICggY2lkX29mICdaJyApIF1cbiAgICAgICAgcm93cyAgICAgICAgPSBbICggaC5ocmRfZmluZF9vdmVybGFwcyBjaWQgKS4uLiwgXVxuICAgICAgICBpc192b3dlbCAgICA9IHJvd3NbIDAgXS52YWx1ZVxuICAgICAgICBjb2xvciAgICAgICA9IGlmIGlzX3Zvd2VsIHRoZW4gd2hpdGUgZWxzZSBibHVlXG4gICAgICAgIGNociAgICAgICAgID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkXG4gICAgICAgIGNocl9zdHJpbmcgKz0gY29sb3IgY2hyXG4gICAgICAgIEBlcSAoIM6pZGJyaF8xMjcgPSAtPiByb3dzLmxlbmd0aCAgICAgICAgICAgICAgKSwgMVxuICAgICAgICBAZXEgKCDOqWRicmhfMTI4ID0gLT4gcm93c1sgMCBdLmtleSAgICAgICAgICAgICksICd2b3dlbCdcbiAgICAgICAgQGVxICggzqlkYnJoXzEyOSA9IC0+IHR5cGVfb2YgaXNfdm93ZWwgICAgICAgICApLCAnYm9vbGVhbidcbiAgICAgIGRlYnVnICfOqWRicmhfMTMwJywgY2hyX3N0cmluZ1xuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkYnJpY19ob2FyZF9wbHVnaW5fbm9ybWFsaXphdGlvbl9hbmRfY29uZmxpY3RfZGV0ZWN0aW9uXzI6IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBIb2FyZCBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQHBsdWdpbnM6IFtcbiAgICAgICAgZGJyaWNfaG9hcmRfcGx1Z2luXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoID0gSG9hcmQucmVidWlsZCgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX3J1bnMgb3JkZXIgYnkgbG87XCJcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksICggY2lkX29mICdaJyApLCAndm93ZWwnLCBmYWxzZVxuICAgICAgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfcnVucyBvcmRlciBieSBsbztcIlxuICAgICAgaC5ocmRfcHVuY2ggKCBjaWRfb2YgJ0UnICksIG51bGwsICd2b3dlbCcsIHRydWVcbiAgICAgIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX3J1bnMgb3JkZXIgYnkgbG87XCJcbiAgICAgICMgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfZ3JvdXBzO1wiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGRvX2NvdmVyYWdlID0gdHJ1ZVxuICBkb19jb3ZlcmFnZSA9IGZhbHNlXG4gIGlmIGRvX2NvdmVyYWdlXG4gICAgeyBDb3ZlcmFnZV9hbmFseXplciwgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvY292ZXJhZ2UtYW5hbHl6ZXInXG4gICAgY2EgPSBuZXcgQ292ZXJhZ2VfYW5hbHl6ZXIoKVxuICAgICMgY2Eud3JhcF9jbGFzcyBEYnJpY19zdGRcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb25fYW5kX2NvbmZsaWN0X2RldGVjdGlvbl8yOiB0ZXN0cy5kYnJpY19ob2FyZF9wbHVnaW5fbm9ybWFsaXphdGlvbl9hbmRfY29uZmxpY3RfZGV0ZWN0aW9uXzIsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2R5bmFtaWNfYnVpbGRfcHJvcGVydGllczogdGVzdHMuZGJyaWNfZHluYW1pY19idWlsZF9wcm9wZXJ0aWVzLCB9XG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaWYgZG9fY292ZXJhZ2VcbiAgICB3YXJuICfOqWRicmhfMTMxJywgXCJub3QgY292ZXJlZDpcIiwgcmV2ZXJzZSBuYW1lIGZvciBuYW1lIGluIGNhLnVudXNlZF9uYW1lcyBpZiBjYS51bnVzZWRfbmFtZXMubGVuZ3RoID4gMFxuICAgICMgaGVscCAnzqlkYnJoXzEzMicsIGNhLnVzZWRfbmFtZXNcbiAgICAjIHVyZ2UgJ86pZGJyaF8xMzMnLCBjb3VudCwgbmFtZXMgZm9yIGNvdW50LCBuYW1lcyBvZiBjYS5uYW1lc19ieV9jb3VudHNcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICA7bnVsbFxuXG5cbiJdfQ==
