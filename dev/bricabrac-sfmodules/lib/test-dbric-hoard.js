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
        null;
        // #.......................................................................................................
        // do =>
        //   find_overlaps = h.statements.hrd_find_covering_runs
        //   # debug 'Ωdbrh__17', row for row from rows = h.walk find_overlaps, { lo: -0x1, hi: 0x0b, }
        //   # debug 'Ωdbrh__18', row for row from rows = h.walk find_overlaps, { lo: -0x1, hi: 0x0b, }
        //   #.....................................................................................................
        //   lo      = -0x0001
        //   hi      = +0x000b
        //   seen    = new Set()
        //   matcher = []
        //   for n in [ lo .. hi ]
        //     for { rowid, } from h.walk find_overlaps, { lo: n, hi: n, }
        //       matcher.push rowid unless seen.has rowid
        //       seen.add rowid
        //   @eq ( Ωdbrh__19 = -> matcher.length ), 4
        //   #.....................................................................................................
        //   result = [ ( rowid for { rowid, } from h.walk find_overlaps, { lo, hi, } )..., ]
        //   @eq ( Ωdbrh__20 = -> result ), matcher
        //   ;null
        // #.......................................................................................................
        // do =>
        //   find_overlaps   = h.statements.hrd_find_covering_runs
        //   find_conflicts  = h.statements.hrd_find_runs_with_conflicts_1
        //   #.....................................................................................................
        //   @eq ( Ωdbrh__21 = -> [ ( row for row from h.walk find_conflicts )..., ] ), []
        //   @eq ( Ωdbrh__22 = -> [ ( h.hrd_find_runs_with_conflicts_1() )..., ]                 ), []
        //   @eq ( Ωdbrh__23 = -> h.hrd_validate_1()                                   ), null
        //   h.statements._hrd_insert_run.run { lo: -0x000a, hi: +0x0003, key: 'foo', value: '"fuz"',      }
        //   #.....................................................................................................
        //   seen    = new Set()
        //   matcher = [
        //     { key: 'foo', value_a: '"bar"', value_b: '"fuz"' },
        //     { key: 'foo', value_a: '"bar"', value_b: '"fuz"' }, ]
        //   #.....................................................................................................
        //   result = []
        //   for row from h.walk find_conflicts
        //     result.push { key: row.key_a, value_a: row.value_a, value_b: row.value_b, }
        //   # echo row for row from result
        //   @eq ( Ωdbrh__24 = -> result ), matcher
        //   #.....................................................................................................
        //   result = []
        //   for row from h.hrd_find_runs_with_conflicts_1()
        //     result.push { key: row.key_a, value_a: row.value_a, value_b: row.value_b, }
        //   # echo row for row from result
        //   @eq ( Ωdbrh__25 = -> result ), matcher
        //   #.....................................................................................................
        //   @throws ( Ωdbrh__26 = -> h.hrd_validate_1() ), /found conflicts/
        //   try h.hrd_validate_1() catch e then warn 'Ωdbrh__27', e.message
        //   # echo row for row from h.walk SQL"select * from _hrd_family_has_conflict_1;"
        //   rows = h.walk SQL"select * from _hrd_family_has_conflict_1;"
        //   @eq ( Ωdbrh__28 = -> rows.next().value  ), { key: '$x', value: 'excessive CIDs', has_conflict: 0 }
        //   @eq ( Ωdbrh__29 = -> rows.next().value  ), { key: '$x', value: 'high surrogates', has_conflict: 0 }
        //   @eq ( Ωdbrh__30 = -> rows.next().value  ), { key: '$x', value: 'low surrogates', has_conflict: 0 }
        //   @eq ( Ωdbrh__31 = -> rows.next().value  ), { key: '$x', value: 'negative CIDs', has_conflict: 0 }
        //   @eq ( Ωdbrh__32 = -> rows.next().value  ), { key: '$x', value: 'noncharacters', has_conflict: 0 }
        //   @eq ( Ωdbrh__33 = -> rows.next().value  ), { key: '$x', value: 'zero bytes', has_conflict: 0 }
        //   @eq ( Ωdbrh__34 = -> rows.next().value  ), { key: 'foo', value: '"bar"', has_conflict: 1 }
        //   @eq ( Ωdbrh__35 = -> rows.next().value  ), { key: 'foo', value: '"fuz"', has_conflict: 1 }
        //   @eq ( Ωdbrh__36 = -> rows.next().done   ), true
        return null;
      })();
      // #.......................................................................................................
      // do =>
      //   echo row for row from rows = h.hrd_find_runs_with_conflicts_1()
      //   # rows = h.hrd_family_conflicts_1()
      //.......................................................................................................
      return null;
    },
    // #---------------------------------------------------------------------------------------------------------
    // dbric_hoard_plugin_groups: ->
    //   #.......................................................................................................
    //   class Hoard extends Dbric_std
    //     @plugins: [
    //       dbric_hoard_plugin
    //       ]
    //   #.......................................................................................................
    //   h = Hoard.rebuild()
    //   insert_unicode_exclusions h
    //   h.statements._hrd_insert_run.run { lo:   -0x000a, hi:    0x0000, key: 'foo', value: '"bar"',      }
    //   h.statements._hrd_insert_run.run { lo:    0x0000, hi:    0x000a, key: 'foo', value: '"bar"',      }
    //   h.statements._hrd_insert_run.run { lo:    0x0000, hi:    0x000a, key: 'nice', value: 'true',      }
    //   #.......................................................................................................
    //   do =>
    //     # echo row for row from rows = h.walk h.statements._hrd_facet_groups
    //     rows = h.walk h.statements._hrd_facet_groups
    //     @eq ( Ωdbrh__37 = -> rows.next().value  ), { key: '$x',   value: 'excessive CIDs',  runs: 1, }
    //     @eq ( Ωdbrh__38 = -> rows.next().value  ), { key: '$x',   value: 'high surrogates', runs: 1, }
    //     @eq ( Ωdbrh__39 = -> rows.next().value  ), { key: '$x',   value: 'low surrogates',  runs: 1, }
    //     @eq ( Ωdbrh__40 = -> rows.next().value  ), { key: '$x',   value: 'negative CIDs',   runs: 1, }
    //     @eq ( Ωdbrh__41 = -> rows.next().value  ), { key: '$x',   value: 'noncharacters',   runs: 2, }
    //     @eq ( Ωdbrh__42 = -> rows.next().value  ), { key: '$x',   value: 'zero bytes',      runs: 1, }
    //     @eq ( Ωdbrh__43 = -> rows.next().value  ), { key: 'foo',  value: '"bar"',           runs: 2, }
    //     @eq ( Ωdbrh__44 = -> rows.next().value  ), { key: 'nice', value: 'true',            runs: 1, }
    //     @eq ( Ωdbrh__45 = -> rows.next().done   ), true
    //     ;null
    //   # #.......................................................................................................
    //   # do =>
    //   #   # echo row for row from rows = h.hrd_find_runs_by_group()
    //   #   rows = h.hrd_find_runs_by_group()
    //   #   @eq ( Ωdbrh__46 = -> rows.next().value  ), { key: '$x', value: 'excessive CIDs', runs: [ { rowid: 't:hrd:runs:V=+110000,+Infinity,$x', lo: 1114112, hi: Infinity, key: '$x', value: 'excessive CIDs' } ] }
    //   #   @eq ( Ωdbrh__47 = -> rows.next().value  ), { key: '$x', value: 'high surrogates', runs: [ { rowid: 't:hrd:runs:V=+00d800,+00dbff,$x', lo: 55296, hi: 56319, key: '$x', value: 'high surrogates' } ] }
    //   #   @eq ( Ωdbrh__48 = -> rows.next().value  ), { key: '$x', value: 'low surrogates', runs: [ { rowid: 't:hrd:runs:V=+00dc00,+00dfff,$x', lo: 56320, hi: 57343, key: '$x', value: 'low surrogates' } ] }
    //   #   @eq ( Ωdbrh__49 = -> rows.next().value  ), { key: '$x', value: 'negative CIDs', runs: [ { rowid: 't:hrd:runs:V=-Infinity,-000001,$x', lo: -Infinity, hi: -1, key: '$x', value: 'negative CIDs' } ] }
    //   #   @eq ( Ωdbrh__50 = -> rows.next().value  ), { key: '$x', value: 'noncharacters', runs: [ { rowid: 't:hrd:runs:V=+00fdd0,+00fdef,$x', lo: 64976, hi: 65007, key: '$x', value: 'noncharacters' }, { rowid: 't:hrd:runs:V=+00fffe,+00ffff,$x', lo: 65534, hi: 65535, key: '$x', value: 'noncharacters' } ] }
    //   #   @eq ( Ωdbrh__51 = -> rows.next().value  ), { key: '$x', value: 'zero bytes', runs: [ { rowid: 't:hrd:runs:V=+000000,+000000,$x', lo: 0, hi: 0, key: '$x', value: 'zero bytes' } ] }
    //   #   @eq ( Ωdbrh__52 = -> rows.next().value  ), { key: 'foo', value: '"bar"', runs: [ { rowid: 't:hrd:runs:V=-00000a,+000000,foo', lo: -10, hi: 0, key: 'foo', value: '"bar"' }, { rowid: 't:hrd:runs:V=+000000,+00000a,foo', lo: 0, hi: 10, key: 'foo', value: '"bar"' } ] }
    //   #   @eq ( Ωdbrh__53 = -> rows.next().value  ), { key: 'nice', value: 'true', runs: [ { rowid: 't:hrd:runs:V=+000000,+00000a,nice', lo: 0, hi: 10, key: 'nice', value: 'true' } ] }
    //   #   @eq ( Ωdbrh__54 = -> rows.next().done   ), true
    //   #   ;null
    //   #.......................................................................................................
    //   do =>
    //     # echo row for row from rows = h.hrd_find_families()
    //     rows = h.hrd_find_families()
    //     @eq ( Ωdbrh__55 = -> rows.next().value  ), { key: '$x',   value: 'excessive CIDs',  first: 1114112,   last: Infinity, runs: 1, has_conflict: false, is_normal: true, }
    //     @eq ( Ωdbrh__56 = -> rows.next().value  ), { key: '$x',   value: 'high surrogates', first: 55296,     last: 56319,    runs: 1, has_conflict: false, is_normal: true, }
    //     @eq ( Ωdbrh__57 = -> rows.next().value  ), { key: '$x',   value: 'low surrogates',  first: 56320,     last: 57343,    runs: 1, has_conflict: false, is_normal: true, }
    //     @eq ( Ωdbrh__58 = -> rows.next().value  ), { key: '$x',   value: 'negative CIDs',   first: -Infinity, last: -1,       runs: 1, has_conflict: false, is_normal: true, }
    //     @eq ( Ωdbrh__59 = -> rows.next().value  ), { key: '$x',   value: 'noncharacters',   first: 64976,     last: 65535,    runs: 2, has_conflict: false, is_normal: true, }
    //     @eq ( Ωdbrh__60 = -> rows.next().value  ), { key: '$x',   value: 'zero bytes',      first: 0,         last: 0,        runs: 1, has_conflict: false, is_normal: true, }
    //     @eq ( Ωdbrh__61 = -> rows.next().value  ), { key: 'foo',  value: '"bar"',           first: -10,       last: 10,       runs: 2, has_conflict: true,  is_normal: false, }
    //     @eq ( Ωdbrh__62 = -> rows.next().value  ), { key: 'nice', value: 'true',            first: 0,         last: 10,       runs: 1, has_conflict: true,  is_normal: false, }
    //     @eq ( Ωdbrh__63 = -> rows.next().done   ), true
    //     ;null
    //   #.......................................................................................................
    //   ;null

    // #---------------------------------------------------------------------------------------------------------
    // dbric_hoard_plugin_normalization: ->
    //   #.......................................................................................................
    //   class Hoard extends Dbric_std
    //     @plugins: [
    //       dbric_hoard_plugin
    //       ]
    //   #.......................................................................................................
    //   do =>
    //     h = Hoard.rebuild()
    //     #.....................................................................................................
    //     debug 'Ωdbrh__64', row for row from rows = h.walk SQL"select * from hrd_normalization;"
    //     rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
    //     @eq ( Ωdbrh__65 = -> rows.next().done   ), true
    //     #.....................................................................................................
    //     h.statements._hrd_insert_run.run { lo: 0x0010, hi: 0x0015, key: 'a', value: '"A"', }
    //     h.statements._hrd_insert_run.run { lo: 0x0020, hi: 0x0025, key: 'a', value: '"A"', }
    //     #.....................................................................................................
    //     # debug 'Ωdbrh__66', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
    //     rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
    //     @eq ( Ωdbrh__67 = -> rows.next().value  ), { d: 'a,"A",1' }
    //     @eq ( Ωdbrh__68 = -> rows.next().done   ), true
    //     #.....................................................................................................
    //     h.statements._hrd_insert_run.run { lo: 0x0016, hi: 0x0016, key: 'a', value: '"A"', }
    //     #.....................................................................................................
    //     # debug 'Ωdbrh__69', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
    //     rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
    //     @eq ( Ωdbrh__70 = -> rows.next().value  ), { d: 'a,"A",0' }
    //     @eq ( Ωdbrh__71 = -> rows.next().done   ), true
    //     #.....................................................................................................
    //     rows = h.hrd_find_nonnormal_families()
    //     @eq ( Ωdbrh__72 = -> rows.next().value  ), { key: 'a', value: '"A"' }
    //     @eq ( Ωdbrh__73 = -> rows.next().done   ), true
    //     #.....................................................................................................
    //     h.statements._hrd_insert_run.run { lo: 0x0010, hi: 0x0015, key: 'b', value: '"B"', }
    //     h.statements._hrd_insert_run.run { lo: 0x0020, hi: 0x0025, key: 'b', value: '"B"', }
    //     # debug 'Ωdbrh__74', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
    //     rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
    //     @eq ( Ωdbrh__75 = -> rows.next().value  ), { d: 'a,"A",0' }
    //     @eq ( Ωdbrh__76 = -> rows.next().value  ), { d: 'b,"B",1' }
    //     @eq ( Ωdbrh__77 = -> rows.next().done   ), true
    //     #.....................................................................................................
    //     h.statements._hrd_insert_run.run { lo: 0x0012, hi: 0x0017, key: 'b', value: '"B"', }
    //     # debug 'Ωdbrh__78', row for row from rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
    //     rows = h.walk SQL"select printf( '%s,%s,%d', key, value, is_normal ) as d from hrd_normalization;"
    //     @eq ( Ωdbrh__79 = -> rows.next().value  ), { d: 'a,"A",0' }
    //     @eq ( Ωdbrh__80 = -> rows.next().value  ), { d: 'b,"B",0' }
    //     @eq ( Ωdbrh__81 = -> rows.next().done   ), true
    //     #.....................................................................................................
    //     rows = h.hrd_find_nonnormal_families()
    //     @eq ( Ωdbrh__82 = -> rows.next().value  ), { key: 'a', value: '"A"' }
    //     @eq ( Ωdbrh__83 = -> rows.next().value  ), { key: 'b', value: '"B"' }
    //     @eq ( Ωdbrh__84 = -> rows.next().done   ), true
    //     #.....................................................................................................
    //     debug 'Ωdbrh__85', row for row from rows = h.hrd_find_families()
    //     #.....................................................................................................
    //     ;null
    //   #.......................................................................................................
    //   ;null

    // #---------------------------------------------------------------------------------------------------------
    // dbric_hoard_plugin_normalization_and_conflict_detection: ->
    //   #.......................................................................................................
    //   class Hoard extends Dbric_std
    //     @plugins: [
    //       dbric_hoard_plugin
    //       ]
    //   #.......................................................................................................
    //   do =>
    //     h = Hoard.rebuild()
    //     #.....................................................................................................
    //     h.hrd_add_run ( cid_of 'A' ), ( cid_of 'Z' ), 'vowel', false
    //     # echo(); echo row for row from h.hrd_find_runs()
    //     rows = h.hrd_find_runs()
    //     @eq ( Ωdbrh__86 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000041,+00005a,vowel', lo: 65, hi: 90, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh__87 = -> rows.next().done   ), true
    //     #.....................................................................................................
    //     h.hrd_punch_1 { lo: ( cid_of 'A' ), hi: ( cid_of 'A' ), key: 'vowel', value: true, }
    //     # echo(); echo row for row from h.hrd_find_runs()
    //     rows = h.hrd_find_runs()
    //     @eq ( Ωdbrh__88 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000041,+000041,vowel', lo: 65, hi: 65, key: 'vowel', value: 'true' }
    //     @eq ( Ωdbrh__89 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000042,+00005a,vowel', lo: 66, hi: 90, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh__90 = -> rows.next().done   ), true
    //     #.....................................................................................................
    //     h.hrd_punch_1 ( cid_of 'E' ), ( cid_of 'E' ), 'vowel', true
    //     # echo(); echo row for row from h.hrd_find_runs()
    //     rows = h.hrd_find_runs()
    //     @eq ( Ωdbrh__91 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000041,+000041,vowel', lo: 65, hi: 65, key: 'vowel', value: 'true' }
    //     @eq ( Ωdbrh__92 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000042,+000044,vowel', lo: 66, hi: 68, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh__93 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000045,+000045,vowel', lo: 69, hi: 69, key: 'vowel', value: 'true' }
    //     @eq ( Ωdbrh__94 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000046,+00005a,vowel', lo: 70, hi: 90, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh__95 = -> rows.next().done   ), true
    //     #.....................................................................................................
    //     h.hrd_punch_1 ( cid_of 'I' ), ( cid_of 'I' ), 'vowel', true
    //     # echo(); echo row for row from h.hrd_find_runs()
    //     rows = h.hrd_find_runs()
    //     @eq ( Ωdbrh__96 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000041,+000041,vowel', lo: 65, hi: 65, key: 'vowel', value: 'true' }
    //     @eq ( Ωdbrh__97 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000042,+000044,vowel', lo: 66, hi: 68, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh__98 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000045,+000045,vowel', lo: 69, hi: 69, key: 'vowel', value: 'true' }
    //     @eq ( Ωdbrh__99 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000046,+000048,vowel', lo: 70, hi: 72, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh_100 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000049,+000049,vowel', lo: 73, hi: 73, key: 'vowel', value: 'true' }
    //     @eq ( Ωdbrh_101 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00004a,+00005a,vowel', lo: 74, hi: 90, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh_102 = -> rows.next().done   ), true
    //     #.....................................................................................................
    //     h.hrd_punch_1 ( cid_of 'O' ), ( cid_of 'O' ), 'vowel', true
    //     # echo(); echo row for row from h.hrd_find_runs()
    //     rows = h.hrd_find_runs()
    //     @eq ( Ωdbrh_103 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000041,+000041,vowel', lo: 65, hi: 65, key: 'vowel', value: 'true' }
    //     @eq ( Ωdbrh_104 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000042,+000044,vowel', lo: 66, hi: 68, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh_105 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000045,+000045,vowel', lo: 69, hi: 69, key: 'vowel', value: 'true' }
    //     @eq ( Ωdbrh_106 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000046,+000048,vowel', lo: 70, hi: 72, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh_107 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000049,+000049,vowel', lo: 73, hi: 73, key: 'vowel', value: 'true' }
    //     @eq ( Ωdbrh_108 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00004a,+00004e,vowel', lo: 74, hi: 78, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh_109 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00004f,+00004f,vowel', lo: 79, hi: 79, key: 'vowel', value: 'true' }
    //     @eq ( Ωdbrh_110 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000050,+00005a,vowel', lo: 80, hi: 90, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh_111 = -> rows.next().done   ), true
    //     #.....................................................................................................
    //     h.hrd_punch_1 ( cid_of 'U' ), ( cid_of 'U' ), 'vowel', true
    //     # echo(); echo row for row from h.hrd_find_runs()
    //     rows = h.hrd_find_runs()
    //     @eq ( Ωdbrh_112 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000041,+000041,vowel', lo: 65, hi: 65, key: 'vowel', value: 'true' }
    //     @eq ( Ωdbrh_113 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000042,+000044,vowel', lo: 66, hi: 68, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh_114 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000045,+000045,vowel', lo: 69, hi: 69, key: 'vowel', value: 'true' }
    //     @eq ( Ωdbrh_115 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000046,+000048,vowel', lo: 70, hi: 72, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh_116 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000049,+000049,vowel', lo: 73, hi: 73, key: 'vowel', value: 'true' }
    //     @eq ( Ωdbrh_117 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00004a,+00004e,vowel', lo: 74, hi: 78, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh_118 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+00004f,+00004f,vowel', lo: 79, hi: 79, key: 'vowel', value: 'true' }
    //     @eq ( Ωdbrh_119 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000050,+000054,vowel', lo: 80, hi: 84, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh_120 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000055,+000055,vowel', lo: 85, hi: 85, key: 'vowel', value: 'true' }
    //     @eq ( Ωdbrh_121 = -> rows.next().value  ), { rowid: 't:hrd:runs:V=+000056,+00005a,vowel', lo: 86, hi: 90, key: 'vowel', value: 'false' }
    //     @eq ( Ωdbrh_122 = -> rows.next().done   ), true
    //     #.....................................................................................................
    //     echo row for row from h.hrd_find_families()
    //     rows = h.hrd_find_families()
    //     @eq ( Ωdbrh_123 = -> rows.next().value  ), { key: 'vowel', value: 'false',  first: 66, last: 90, runs: 5, has_conflict: true, is_normal: false, }
    //     @eq ( Ωdbrh_124 = -> rows.next().value  ), { key: 'vowel', value: 'true',   first: 65, last: 85, runs: 5, has_conflict: true, is_normal: false, }
    //     @eq ( Ωdbrh_125 = -> rows.next().done   ), true
    //     #.....................................................................................................
    //     chr_string = ''
    //     for cid in [ ( cid_of 'A' ) .. ( cid_of 'Z' ) ]
    //       rows        = [ ( h.hrd_find_covering_runs cid )..., ]
    //       is_vowel    = rows[ 0 ].value
    //       color       = if is_vowel then white else blue
    //       chr         = String.fromCodePoint cid
    //       chr_string += color chr
    //       @eq ( Ωdbrh_126 = -> rows.length              ), 1
    //       @eq ( Ωdbrh_127 = -> rows[ 0 ].key            ), 'vowel'
    //       @eq ( Ωdbrh_128 = -> type_of is_vowel         ), 'boolean'
    //     debug 'Ωdbrh_129', chr_string
    //     ;null
    //   #.......................................................................................................
    //   ;null

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMtaG9hcmQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxrQkFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLHlCQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO0lBQUEsb0JBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsdUJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSxtQ0FBUjs7RUFDNUIsRUFBQSxHQUE0QixPQUFBLENBQVEsU0FBUjs7RUFDNUIsSUFBQSxHQUE0QixPQUFBLENBQVEsV0FBUixFQWhDNUI7OztFQWtDQSxDQUFBLENBQUUsS0FBRixFQUNFLFNBREYsRUFFRSxHQUZGLEVBR0UsR0FIRixFQUlFLEdBSkYsRUFLRSxHQUxGLEVBTUUsU0FORixFQU9FLE9BUEYsRUFRRSxJQVJGLEVBU0UsS0FURixFQVVFLFlBVkYsQ0FBQSxHQVU0QixPQUFBLENBQVEsNkNBQVIsQ0FWNUI7O0VBWUEsQ0FBQSxDQUFBOztJQUFFLFlBQUEsRUFDRTtFQURKLENBQUEsR0FDNEIsT0FBQSxDQUFRLHFEQUFSLENBRDVCOztFQUVBLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBNEIsQ0FBRSxPQUFBLENBQVEsa0VBQVIsQ0FBRixDQUE4RSxDQUFDLGVBQS9FLENBQUEsQ0FBNUIsRUFoREE7OztFQW1EQSxNQUFBLEdBQVMsUUFBQSxDQUFFLENBQUYsQ0FBQTtXQUFTLENBQUMsQ0FBQyxXQUFGLENBQWMsQ0FBZDtFQUFULEVBbkRUOzs7RUF3REEseUJBQUEsR0FBNEIsUUFBQSxDQUFFLENBQUYsQ0FBQTtJQUMxQixDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxHQUE3QixDQUFpQztNQUFFLEVBQUEsRUFBSSxDQUFDLEtBQVA7TUFBaUIsRUFBQSxFQUFXLENBQUMsQ0FBN0I7TUFBZ0MsR0FBQSxFQUFLLElBQXJDO01BQTJDLEtBQUEsRUFBTztJQUFsRCxDQUFqQztJQUNBLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEdBQTdCLENBQWlDO01BQUUsRUFBQSxFQUFPLE1BQVQ7TUFBaUIsRUFBQSxFQUFPLE1BQXhCO01BQWdDLEdBQUEsRUFBSyxJQUFyQztNQUEyQyxLQUFBLEVBQU87SUFBbEQsQ0FBakM7SUFDQSxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxHQUE3QixDQUFpQztNQUFFLEVBQUEsRUFBTyxNQUFUO01BQWlCLEVBQUEsRUFBTyxNQUF4QjtNQUFnQyxHQUFBLEVBQUssSUFBckM7TUFBMkMsS0FBQSxFQUFPO0lBQWxELENBQWpDO0lBQ0EsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsR0FBN0IsQ0FBaUM7TUFBRSxFQUFBLEVBQU8sTUFBVDtNQUFpQixFQUFBLEVBQU8sTUFBeEI7TUFBZ0MsR0FBQSxFQUFLLElBQXJDO01BQTJDLEtBQUEsRUFBTztJQUFsRCxDQUFqQztJQUNBLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEdBQTdCLENBQWlDO01BQUUsRUFBQSxFQUFPLE1BQVQ7TUFBaUIsRUFBQSxFQUFPLE1BQXhCO01BQWdDLEdBQUEsRUFBSyxJQUFyQztNQUEyQyxLQUFBLEVBQU87SUFBbEQsQ0FBakM7SUFDQSxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxHQUE3QixDQUFpQztNQUFFLEVBQUEsRUFBTyxNQUFUO01BQWlCLEVBQUEsRUFBTyxNQUF4QjtNQUFnQyxHQUFBLEVBQUssSUFBckM7TUFBMkMsS0FBQSxFQUFPO0lBQWxELENBQWpDO0lBQ0EsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsR0FBN0IsQ0FBaUM7TUFBRSxFQUFBLEVBQUssUUFBUDtNQUFpQixFQUFBLEVBQUksQ0FBQyxLQUF0QjtNQUFnQyxHQUFBLEVBQUssSUFBckM7TUFBMkMsS0FBQSxFQUFPO0lBQWxELENBQWpDO1dBQ0M7RUFSeUIsRUF4RDVCOzs7RUFtRUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxLQUFBLEdBR1AsQ0FBQTs7SUFBQSx5QkFBQSxFQUEyQixRQUFBLENBQUEsQ0FBQTtBQUM3QixVQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7TUFDVTs7UUFBTixNQUFBLE1BQUEsUUFBb0IsVUFBcEIsQ0FBQTs7UUFDRSxLQUFDLENBQUEsT0FBRCxHQUFVLENBQ1Isa0JBRFE7Ozs7b0JBRmhCOztNQU1JLENBQUEsR0FBSSxLQUFLLENBQUMsT0FBTixDQUFBO01BQ0osSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTs0QkFBK0IsTUFBTSxDQUFDLElBQVAsQ0FBWSxDQUFDLENBQUMsVUFBZCxHQUE1QjtNQUFILENBQWQsQ0FBSixFQUE2RSxJQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7NEJBQStCLE1BQU0sQ0FBQyxJQUFQLENBQVksQ0FBQyxDQUFDLFVBQWQsR0FBNUI7TUFBSCxDQUFkLENBQUosRUFBNkUsSUFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBOzRCQUErQixNQUFNLENBQUMsSUFBUCxDQUFZLENBQUMsQ0FBQyxVQUFkLEdBQTVCO01BQUgsQ0FBZCxDQUFKLEVBQTZFLElBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTs0QkFBK0IsTUFBTSxDQUFDLElBQVAsQ0FBWSxDQUFDLENBQUMsVUFBZCxHQUE1QjtNQUFILENBQWQsQ0FBSixFQUE2RSxJQUE3RSxFQVZKOztNQVlJLHlCQUFBLENBQTBCLENBQTFCO01BQ0EsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsR0FBN0IsQ0FBaUM7UUFBRSxFQUFBLEVBQU0sQ0FBQyxNQUFUO1FBQWlCLEVBQUEsRUFBTyxNQUF4QjtRQUFnQyxHQUFBLEVBQUssS0FBckM7UUFBNEMsS0FBQSxFQUFPO01BQW5ELENBQWpDO01BQ0EsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsR0FBN0IsQ0FBaUM7UUFBRSxFQUFBLEVBQU8sTUFBVDtRQUFpQixFQUFBLEVBQU8sTUFBeEI7UUFBZ0MsR0FBQSxFQUFLLEtBQXJDO1FBQTRDLEtBQUEsRUFBTztNQUFuRCxDQUFqQztNQUVHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtRQUFNLEtBQUEsZ0RBQUE7VUFBQSxJQUFBLENBQUssR0FBTDtRQUFBO1FBQ0EsSUFBQSxHQUFPLENBQUMsQ0FBQyxJQUFGLENBQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFwQjtRQUNQLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFkLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sZ0JBQVQ7VUFBMkIsS0FBQSxFQUFPLENBQWxDO1VBQXFDLEVBQUEsRUFBSSxDQUFDLEtBQTFDO1VBQW9ELEVBQUEsRUFBSSxDQUFDLENBQXpEO1VBQTRELEdBQUEsRUFBSyxJQUFqRTtVQUF1RSxLQUFBLEVBQU87UUFBOUUsQ0FBM0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZCxDQUFKLEVBQTJDO1VBQUUsS0FBQSxFQUFPLGdCQUFUO1VBQTJCLEtBQUEsRUFBTyxDQUFsQztVQUFxQyxFQUFBLEVBQUksQ0FBQyxFQUExQztVQUE4QyxFQUFBLEVBQUksQ0FBbEQ7VUFBcUQsR0FBQSxFQUFLLEtBQTFEO1VBQWlFLEtBQUEsRUFBTztRQUF4RSxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFkLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sZ0JBQVQ7VUFBMkIsS0FBQSxFQUFPLENBQWxDO1VBQXFDLEVBQUEsRUFBSSxDQUF6QztVQUE0QyxFQUFBLEVBQUksQ0FBaEQ7VUFBbUQsR0FBQSxFQUFLLElBQXhEO1VBQThELEtBQUEsRUFBTztRQUFyRSxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFkLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sZ0JBQVQ7VUFBMkIsS0FBQSxFQUFPLENBQWxDO1VBQXFDLEVBQUEsRUFBSSxDQUF6QztVQUE0QyxFQUFBLEVBQUksRUFBaEQ7VUFBb0QsR0FBQSxFQUFLLEtBQXpEO1VBQWdFLEtBQUEsRUFBTztRQUF2RSxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFkLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sZ0JBQVQ7VUFBMkIsS0FBQSxFQUFPLENBQWxDO1VBQXFDLEVBQUEsRUFBSSxLQUF6QztVQUFnRCxFQUFBLEVBQUksS0FBcEQ7VUFBMkQsR0FBQSxFQUFLLElBQWhFO1VBQXNFLEtBQUEsRUFBTztRQUE3RSxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFkLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sZ0JBQVQ7VUFBMkIsS0FBQSxFQUFPLENBQWxDO1VBQXFDLEVBQUEsRUFBSSxLQUF6QztVQUFnRCxFQUFBLEVBQUksS0FBcEQ7VUFBMkQsR0FBQSxFQUFLLElBQWhFO1VBQXNFLEtBQUEsRUFBTztRQUE3RSxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFkLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sZ0JBQVQ7VUFBMkIsS0FBQSxFQUFPLENBQWxDO1VBQXFDLEVBQUEsRUFBSSxLQUF6QztVQUFnRCxFQUFBLEVBQUksS0FBcEQ7VUFBMkQsR0FBQSxFQUFLLElBQWhFO1VBQXNFLEtBQUEsRUFBTztRQUE3RSxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFkLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sZ0JBQVQ7VUFBMkIsS0FBQSxFQUFPLENBQWxDO1VBQXFDLEVBQUEsRUFBSSxLQUF6QztVQUFnRCxFQUFBLEVBQUksS0FBcEQ7VUFBMkQsR0FBQSxFQUFLLElBQWhFO1VBQXNFLEtBQUEsRUFBTztRQUE3RSxDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFkLENBQUosRUFBMkM7VUFBRSxLQUFBLEVBQU8sZ0JBQVQ7VUFBMkIsS0FBQSxFQUFPLENBQWxDO1VBQXFDLEVBQUEsRUFBSSxPQUF6QztVQUFrRCxFQUFBLEVBQUksS0FBdEQ7VUFBZ0UsR0FBQSxFQUFLLElBQXJFO1VBQTJFLEtBQUEsRUFBTztRQUFsRixDQUEzQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFkLENBQUosRUFBMkMsSUFBM0M7UUFDQyxLQVpQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUF3RU87TUF6RUEsQ0FBQSxJQWhCUDs7Ozs7O2FBK0ZLO0lBaEd3QixDQUEzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc1RBLHlEQUFBLEVBQTJELFFBQUEsQ0FBQSxDQUFBO0FBQzdELFVBQUEsS0FBQSxFQUFBO01BQ1U7O1FBQU4sTUFBQSxNQUFBLFFBQW9CLFVBQXBCLENBQUE7O1FBQ0UsS0FBQyxDQUFBLE9BQUQsR0FBVSxDQUNSLGtCQURROzs7O29CQUZoQjs7TUFNVSxVQUFOLE1BQUEsUUFBQSxRQUFzQixNQUF0QjtRQUNFLFNBQVcsQ0FBQyxDQUFFLEVBQUYsRUFBTSxFQUFOLENBQUQsQ0FBQTtBQUNqQixjQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxjQUFBLEVBQUEsZ0JBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLFlBQUEsRUFBQSxhQUFBLEVBQUEsWUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxVQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBO1VBQVEsY0FBQSxHQUFvQixRQUFBLENBQUUsR0FBRixDQUFBO21CQUFXLENBQUEsQ0FBQSxDQUFHLEdBQUcsQ0FBQyxHQUFQLENBQUEsQ0FBQSxDQUFBLENBQWMsR0FBRyxDQUFDLFVBQWxCLENBQUE7VUFBWDtVQUNwQixnQkFBQSxHQUFvQixRQUFBLENBQUUsSUFBRixDQUFBO0FBQVcsZ0JBQUE7bUJBQUMsSUFBSSxHQUFKLENBQVE7Y0FBRSxHQUFBLENBQUUsSUFBSSxHQUFKOztBQUFVO2dCQUFBLEtBQUEsV0FBQTsrQkFBRSxjQUFBLENBQWUsR0FBZjtnQkFBRixDQUFBOztrQkFBVixDQUFGLENBQUY7YUFBZ0UsQ0FBQyxJQUFqRSxDQUFBLENBQVI7VUFBWjtVQUNwQixhQUFBLEdBQW9CLGdCQUFBLENBQWlCLElBQUMsQ0FBQSxzQkFBRCxDQUF3QixFQUF4QixFQUE0QixFQUE1QixDQUFqQjtVQUNwQixZQUFBLEdBQW9CLEVBQUEsR0FBSztVQUN6QixNQUFBLEdBQ0U7WUFBQSxRQUFBLEVBQVksUUFBQSxDQUFBLEdBQUUsQ0FBRixDQUFBO3FCQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBUixDQUFjLEdBQUEsQ0FBZDtZQUFaLENBQVo7WUFDQSxJQUFBLEVBQVksUUFBQSxDQUFBLEdBQUUsQ0FBRixDQUFBO3FCQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBUixDQUFjLEdBQUEsQ0FBZDtZQUFaLENBRFo7WUFFQSxFQUFBLEVBQVksUUFBQSxDQUFBLEdBQUUsQ0FBRixDQUFBO3FCQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBUixDQUFjLEdBQUEsQ0FBZDtZQUFaLENBRlo7WUFHQSxHQUFBLEVBQVksUUFBQSxDQUFBLEdBQUUsQ0FBRixDQUFBO3FCQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBUixDQUFjLEdBQUEsQ0FBZDtZQUFaLENBSFo7WUFJQSxHQUFBLEVBQVksUUFBQSxDQUFBLEdBQUUsQ0FBRixDQUFBO3FCQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBUixDQUFjLEdBQUEsQ0FBZDtZQUFaO1VBSlosRUFMVjs7VUFXUSxDQUFBLENBQUUsU0FBRixDQUFBLEdBQWlCLElBQUMsQ0FBQSxTQUFELENBQVcsR0FBRyxDQUFBLDJDQUFBLENBQWQsQ0FBakI7VUFDQSxJQUFBLENBQUE7VUFDQSxJQUFBLENBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFSLENBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFSLENBQWdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBUixDQUFhLENBQUEsWUFBQSxDQUFBLENBQWUsU0FBZixDQUFBLE1BQUEsQ0FBYixDQUFoQixDQUFkLENBQUwsRUFiUjs7VUFlUSxLQUFBLDZCQUFBO1lBQ0UsSUFBQSxHQUFZLEdBQUcsQ0FBQyxNQUFKLENBQVcsWUFBWSxDQUFDLE1BQXhCLEVBQXRCOztZQUVVLFNBQUEsR0FBWSxHQUFHLENBQUE7Ozs7Ozs7R0FBQSxFQUZ6Qjs7WUFZVSxNQUFBLEdBQVM7WUFDVCxLQUFXLG1HQUFYO2NBQ0UsVUFBQSxHQUFjLGdCQUFBLENBQWlCLElBQUMsQ0FBQSxzQkFBRCxDQUF3QixHQUF4QixDQUFqQjtjQUNkLEdBQUEsR0FBYyxNQUFNLENBQUMsYUFBUCxDQUFxQixHQUFyQjtjQUNkLEtBQUEsR0FBaUIsQ0FBRSxVQUFVLENBQUMsR0FBWCxDQUFlLFlBQWYsQ0FBRixDQUFILEdBQXdDLE1BQU0sQ0FBQyxFQUEvQyxHQUF1RCxNQUFNLENBQUM7Y0FDNUUsTUFBQSxJQUFjLEtBQUEsQ0FBTSxHQUFOO1lBSmhCO1lBS0EsSUFBQSxDQUFLLENBQUMsQ0FBQSxDQUFBLENBQUcsWUFBSCxDQUFBLE9BQUEsQ0FBQSxDQUF5QixHQUF6QixDQUFBLE1BQUEsQ0FBQSxDQUFxQyxNQUFyQyxDQUFBLENBQU4sRUFsQlY7O1lBb0JVLEtBQUEsbURBQUE7Y0FDRSxFQUFBLEdBQWMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFWLENBQWtCLFlBQWxCLEVBQWdDLE1BQWhDO2NBQ2QsS0FBQSxHQUFjLENBQUUsSUFBSSxDQUFDLEdBQUwsQ0FBUyxHQUFHLENBQUMsRUFBYixFQUFpQixFQUFqQixDQUFGLENBQUEsR0FBMEI7Y0FDeEMsSUFBQSxHQUFjLENBQUUsSUFBSSxDQUFDLEdBQUwsQ0FBUyxHQUFHLENBQUMsRUFBYixFQUFpQixFQUFqQixDQUFGLENBQUEsR0FBMEI7Y0FDeEMsSUFBQSxHQUFjLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBUixDQUFhLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBUixDQUFnQixJQUFJLENBQUMsTUFBTCxDQUFZLEtBQVosQ0FBaEIsQ0FBYixFQUgxQjs7Y0FLWSxHQUFBLEdBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFSLENBQWEsSUFBSSxDQUFDLE1BQUwsQ0FBWSxJQUFBLEdBQU8sS0FBUCxHQUFlLENBQTNCLENBQWIsRUFMMUI7OztjQVFZLEtBQUEsR0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQVIsQ0FBYSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQVIsQ0FBZ0IsSUFBSSxDQUFDLE1BQUwsQ0FBYyxZQUFBLEdBQWUsSUFBZixHQUFzQixDQUFwQyxDQUFoQixDQUFiO2NBQ2QsSUFBQSxDQUFLLE1BQU0sQ0FBQyxHQUFQLENBQVcsQ0FBQyxDQUFBLENBQUEsQ0FBRyxJQUFILENBQUEsT0FBQSxDQUFBLENBQWlCLEVBQWpCLENBQUEsTUFBQSxDQUFBLENBQTRCLElBQTVCLENBQUEsQ0FBQSxDQUFtQyxHQUFuQyxDQUFBLENBQUEsQ0FBeUMsS0FBekMsQ0FBQSxDQUFaLENBQUw7WUFWRjtVQXJCRixDQWZSOztpQkFnRFM7UUFqRFE7O01BRGI7TUFvREcsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxnQkFBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBO1FBQU0sQ0FBQSxHQUFvQixPQUFPLENBQUMsT0FBUixDQUFBO1FBQ3BCLEdBQUEsR0FBb0I7UUFDcEIsZ0JBQUEsR0FDRTtVQUFBLFlBQUEsRUFBa0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUExQjtVQUNBLGFBQUEsRUFBa0IsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUQxQixFQUhSOztRQU1NLENBQUMsQ0FBQyxXQUFGLENBQWdCLE1BQUEsQ0FBTyxHQUFQLENBQWhCLEVBQWdDLE1BQUEsQ0FBTyxHQUFQLENBQWhDLEVBQThDLEdBQTlDLEVBQW1ELEtBQW5EO1FBQ0EsQ0FBQyxDQUFDLFdBQUYsQ0FBZ0IsTUFBQSxDQUFPLEdBQVAsQ0FBaEIsRUFBZ0MsTUFBQSxDQUFPLEdBQVAsQ0FBaEMsRUFBOEMsR0FBOUMsRUFBbUQsS0FBbkQ7UUFDQSxDQUFDLENBQUMsU0FBRixDQUFZO1VBQUUsRUFBQSxFQUFNLE1BQUEsQ0FBTyxHQUFQLENBQVI7VUFBc0IsRUFBQSxFQUFNLE1BQUEsQ0FBTyxHQUFQO1FBQTVCLENBQVosRUFSTjs7UUFVTSxDQUFDLENBQUMsV0FBRixDQUFnQixNQUFBLENBQU8sR0FBUCxDQUFoQixFQUE4QixJQUE5QixFQUFvQyxHQUFwQyxFQUF5QyxJQUF6QyxFQVZOOztRQVlNLENBQUMsQ0FBQyxXQUFGLENBQWdCLE1BQUEsQ0FBTyxHQUFQLENBQWhCLEVBQThCLElBQTlCLEVBQW9DLEdBQXBDLEVBQXlDLElBQXpDO1FBQ0EsQ0FBQyxDQUFDLFdBQUYsQ0FBZ0IsTUFBQSxDQUFPLEdBQVAsQ0FBaEIsRUFBOEIsSUFBOUIsRUFBb0MsR0FBcEMsRUFBeUMsSUFBekM7UUFDQSxDQUFDLENBQUMsV0FBRixDQUFnQixNQUFBLENBQU8sR0FBUCxDQUFoQixFQUE4QixJQUE5QixFQUFvQyxHQUFwQyxFQUF5QyxJQUF6QztRQUNBLENBQUMsQ0FBQyxXQUFGLENBQWdCLE1BQUEsQ0FBTyxHQUFQLENBQWhCLEVBQThCLElBQTlCLEVBQW9DLEdBQXBDLEVBQXlDLElBQXpDO1FBQ0EsQ0FBQyxDQUFDLFdBQUYsQ0FBZ0IsTUFBQSxDQUFPLEdBQVAsQ0FBaEIsRUFBZ0MsTUFBQSxDQUFPLEdBQVAsQ0FBaEMsRUFBOEMsT0FBOUMsRUFBdUQsSUFBdkQ7UUFDQSxDQUFDLENBQUMsZ0JBQUYsQ0FBbUIsR0FBRyxDQUFBLG1DQUFBLENBQXRCLEVBakJOOzs7Ozs7OztRQXlCTSxDQUFDLENBQUMsU0FBRixDQUFZO1VBQUUsRUFBQSxFQUFNLE1BQUEsQ0FBTyxHQUFQLENBQVI7VUFBc0IsRUFBQSxFQUFNLE1BQUEsQ0FBTyxHQUFQO1FBQTVCLENBQVo7UUFDQSxDQUFDLENBQUMsV0FBRixDQUFnQixNQUFBLENBQU8sR0FBUCxDQUFoQixFQUE4QixJQUE5QixFQUFvQyxHQUFwQyxFQUF5QyxJQUF6QztRQUNBLENBQUMsQ0FBQyxTQUFGLENBQVk7VUFBRSxFQUFBLEVBQU0sTUFBQSxDQUFPLEdBQVAsQ0FBUjtVQUFzQixFQUFBLEVBQU0sTUFBQSxDQUFPLEdBQVA7UUFBNUIsQ0FBWjtRQUNBLENBQUMsQ0FBQyxXQUFGLENBQWdCLE1BQUEsQ0FBTyxHQUFQLENBQWhCLEVBQThCLElBQTlCLEVBQW9DLEdBQXBDLEVBQXlDLElBQXpDO1FBQ0EsQ0FBQyxDQUFDLFdBQUYsQ0FBZ0IsTUFBQSxDQUFPLEdBQVAsQ0FBaEIsRUFBOEIsSUFBOUIsRUFBb0MsR0FBcEMsRUFBeUMsS0FBekM7UUFDQSxDQUFDLENBQUMsV0FBRixDQUFnQixNQUFBLENBQU8sR0FBUCxDQUFoQixFQUE4QixJQUE5QixFQUFvQyxHQUFwQyxFQUF5QyxJQUF6QztRQUNBLENBQUMsQ0FBQyxXQUFGLENBQWdCLE1BQUEsQ0FBTyxHQUFQLENBQWhCLEVBQWdDLE1BQUEsQ0FBTyxHQUFQLENBQWhDLEVBQThDLEdBQTlDLEVBQW1ELElBQW5EO1FBQ0EsQ0FBQyxDQUFDLFNBQUYsQ0FBWTtVQUFFLEVBQUEsRUFBTSxNQUFBLENBQU8sR0FBUCxDQUFSO1VBQXNCLEVBQUEsRUFBTSxNQUFBLENBQU8sR0FBUDtRQUE1QixDQUFaO1FBQ0EsQ0FBQyxDQUFDLFdBQUYsQ0FBZ0IsTUFBQSxDQUFPLEdBQVAsQ0FBaEIsRUFBOEIsSUFBOUIsRUFBb0MsR0FBcEMsRUFBeUMsS0FBekM7UUFDQSxDQUFDLENBQUMsV0FBRixDQUFnQixNQUFBLENBQU8sR0FBUCxDQUFoQixFQUE4QixJQUE5QixFQUFvQyxHQUFwQyxFQUF5QyxLQUF6QztRQUNBLENBQUMsQ0FBQyxTQUFGLENBQVk7VUFBRSxFQUFBLEVBQU0sTUFBQSxDQUFPLEdBQVAsQ0FBUjtVQUFzQixFQUFBLEVBQU0sTUFBQSxDQUFPLEdBQVA7UUFBNUIsQ0FBWixFQW5DTjs7UUFxQ00sQ0FBQyxDQUFDLFdBQUYsQ0FBZ0IsTUFBQSxDQUFPLEdBQVAsQ0FBaEIsRUFBZ0MsTUFBQSxDQUFPLEdBQVAsQ0FBaEMsRUFBOEMsTUFBOUMsRUFBc0QsSUFBdEQ7UUFDQSxDQUFDLENBQUMsV0FBRixDQUFnQixNQUFBLENBQU8sR0FBUCxDQUFoQixFQUE4QixJQUE5QixFQUFvQyxNQUFwQyxFQUE0QyxLQUE1QztRQUNBLENBQUMsQ0FBQyxXQUFGLENBQWdCLE1BQUEsQ0FBTyxHQUFQLENBQWhCLEVBQThCLElBQTlCLEVBQW9DLE1BQXBDLEVBQTRDLEtBQTVDO1FBQ0EsQ0FBQyxDQUFDLFdBQUYsQ0FBZ0IsTUFBQSxDQUFPLEdBQVAsQ0FBaEIsRUFBOEIsSUFBOUIsRUFBb0MsTUFBcEMsRUFBNEMsS0FBNUM7UUFDQSxDQUFDLENBQUMsV0FBRixDQUFnQixNQUFBLENBQU8sR0FBUCxDQUFoQixFQUE4QixJQUE5QixFQUFvQyxNQUFwQyxFQUE0QyxLQUE1QztRQUNBLENBQUMsQ0FBQyxTQUFGLENBQVk7VUFBRSxFQUFBLEVBQU0sTUFBQSxDQUFPLEdBQVAsQ0FBUjtVQUFzQixFQUFBLEVBQU0sTUFBQSxDQUFPLEdBQVA7UUFBNUIsQ0FBWjtRQUNBLEtBQVcscUhBQVg7VUFDRSxHQUFBLEdBQU0sTUFBTSxDQUFDLGFBQVAsQ0FBcUIsR0FBckI7VUFDTixDQUFBLEdBQU0sQ0FBQTtVQUNOLEtBQUEsc0NBQUE7YUFBSSxDQUFFLEdBQUYsRUFBTyxLQUFQLE9BQ1o7O1lBQ1UsQ0FBQyxDQUFFLEdBQUYsQ0FBRCxHQUFXO1VBRmI7VUFHQSxLQUFBLENBQU0sV0FBTixFQUFtQixHQUFuQixFQUF3QixDQUF4QjtRQU5GLENBM0NOOztlQW1ETztNQXBEQSxDQUFBLElBMURQOzthQWdISztJQWpId0Q7RUF0VDNELEVBdEVGOzs7RUFpZkEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBLGlCQUFBLEVBQUEsRUFBQSxFQUFBLFdBQUEsRUFBQSxXQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUE7TUFBRSxXQUFBLEdBQWM7TUFDZCxXQUFBLEdBQWM7TUFDZCxJQUFHLFdBQUg7UUFDRSxDQUFBLENBQUUsaUJBQUYsQ0FBQSxHQUFrQyxPQUFBLENBQVEseURBQVIsQ0FBbEM7UUFDQSxFQUFBLEdBQUssSUFBSSxpQkFBSixDQUFBLEVBRlA7T0FGRjs7O01BT0UsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsSUFBdkM7UUFBNkMsYUFBQSxFQUFlO01BQTVEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixDQUFFLEtBQUYsQ0FBOUIsRUFWRjs7OztNQWNFLElBQUcsV0FBSDtRQUNFLElBQThFLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBaEIsR0FBeUIsQ0FBdkc7QUFBQTtVQUFBLEtBQUEscUNBQUE7O1lBQUEsSUFBQSxDQUFLLFdBQUwsRUFBa0IsY0FBbEIsRUFBa0MsT0FBQSxDQUFRLElBQVIsQ0FBbEM7VUFBQSxDQUFBO1NBREY7T0FkRjs7OzthQW1CRztJQXBCcUMsQ0FBQSxJQUF4Qzs7QUFqZkEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1kYnJpYy1ob2FyZCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5GUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnsgRGJyaWMsXG4gIERicmljX3N0ZCxcbiAgSUROLFxuICBMSVQsXG4gIFNRTCxcbiAgVkVDLFxuICBmcm9tX2Jvb2wsXG4gIGFzX2Jvb2wsXG4gIFRydWUsXG4gIEZhbHNlLFxuICB1bnF1b3RlX25hbWUsICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvZGJyaWMnXG4jIHsgbGV0cywgICAgICAgICAgICAgICAgIH0gPSBpbnRlcm5hbHNcbnsgZGJyaWNfcGx1Z2luOiBcXFxuICAgIGRicmljX2hvYXJkX3BsdWdpbiwgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvaW50ZXJtaXNzaW9uMidcbnsgdHlwZV9vZiwgICAgICAgICAgICAgIH0gPSAoIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvdW5zdGFibGUtcnByLXR5cGVfb2YtYnJpY3MnICkucmVxdWlyZV90eXBlX29mKClcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jaWRfb2YgPSAoIHggKSAtPiB4LmNvZGVQb2ludEF0IDBcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW5zZXJ0X3VuaWNvZGVfZXhjbHVzaW9ucyA9ICggaCApIC0+XG4gIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86IC1JbmZpbml0eSwgaGk6ICAgICAgICAtMSwga2V5OiAnJHgnLCB2YWx1ZTogXCJuZWdhdGl2ZSBDSURzXCIsICAgfVxuICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweDAwMDAsIGhpOiAgICAweDAwMDAsIGtleTogJyR4JywgdmFsdWU6IFwiemVybyBieXRlc1wiLCAgICAgIH1cbiAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHhkODAwLCBoaTogICAgMHhkYmZmLCBrZXk6ICckeCcsIHZhbHVlOiBcImhpZ2ggc3Vycm9nYXRlc1wiLCB9XG4gIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4ZGMwMCwgaGk6ICAgIDB4ZGZmZiwga2V5OiAnJHgnLCB2YWx1ZTogXCJsb3cgc3Vycm9nYXRlc1wiLCAgfVxuICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGZkZDAsIGhpOiAgICAweGZkZWYsIGtleTogJyR4JywgdmFsdWU6IFwibm9uY2hhcmFjdGVyc1wiLCAgIH1cbiAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHhmZmZlLCBoaTogICAgMHhmZmZmLCBrZXk6ICckeCcsIHZhbHVlOiBcIm5vbmNoYXJhY3RlcnNcIiwgICB9XG4gIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAweDExMDAwMCwgaGk6ICtJbmZpbml0eSwga2V5OiAnJHgnLCB2YWx1ZTogXCJleGNlc3NpdmUgQ0lEc1wiLCAgfVxuICA7bnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2hvYXJkX3BsdWdpbl9iYXNpY3M6IC0+XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBIb2FyZCBleHRlbmRzIERicmljX3N0ZFxuICAgICAgQHBsdWdpbnM6IFtcbiAgICAgICAgZGJyaWNfaG9hcmRfcGx1Z2luXG4gICAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGggPSBIb2FyZC5yZWJ1aWxkKClcbiAgICBAZXEgKCDOqWRicmhfX18xID0gLT4gJ3N0ZF9nZXRfdGFibGVzJyAgICAgICAgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX19fMiA9IC0+ICdocmRfZmluZF9ydW5zJyAgICAgICAgICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzMgPSAtPiAnX2hyZF9pbnNlcnRfcnVuJyAgICAgICAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX180ID0gLT4gJ2hyZF9maW5kX2NvdmVyaW5nX3J1bnMnIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBpbnNlcnRfdW5pY29kZV9leGNsdXNpb25zIGhcbiAgICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgIC0weDAwMGEsIGhpOiAgICAweDAwMDAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicsICAgICAgfVxuICAgIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4MDAwMCwgaGk6ICAgIDB4MDAwYSwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgICAgICB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLndhbGsgaC5zdGF0ZW1lbnRzLmhyZF9maW5kX3J1bnNcbiAgICAgIHJvd3MgPSBoLndhbGsgaC5zdGF0ZW1lbnRzLmhyZF9maW5kX3J1bnNcbiAgICAgIEBlcSAoIM6pZGJyaF9fXzcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0xJywgaW5vcm46IDEsIGxvOiAtSW5maW5pdHksIGhpOiAtMSwga2V5OiAnJHgnLCB2YWx1ZTogJ25lZ2F0aXZlIENJRHMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fXzggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj04JywgaW5vcm46IDgsIGxvOiAtMTAsIGhpOiAwLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fXzkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0yJywgaW5vcm46IDIsIGxvOiAwLCBoaTogMCwga2V5OiAnJHgnLCB2YWx1ZTogJ3plcm8gYnl0ZXMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj05JywgaW5vcm46IDksIGxvOiAwLCBoaTogMTAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicgfVxuICAgICAgQGVxICggzqlkYnJoX18xMSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTMnLCBpbm9ybjogMywgbG86IDU1Mjk2LCBoaTogNTYzMTksIGtleTogJyR4JywgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj00JywgaW5vcm46IDQsIGxvOiA1NjMyMCwgaGk6IDU3MzQzLCBrZXk6ICckeCcsIHZhbHVlOiAnbG93IHN1cnJvZ2F0ZXMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj01JywgaW5vcm46IDUsIGxvOiA2NDk3NiwgaGk6IDY1MDA3LCBrZXk6ICckeCcsIHZhbHVlOiAnbm9uY2hhcmFjdGVycycgfVxuICAgICAgQGVxICggzqlkYnJoX18xNCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTYnLCBpbm9ybjogNiwgbG86IDY1NTM0LCBoaTogNjU1MzUsIGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzE1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NycsIGlub3JuOiA3LCBsbzogMTExNDExMiwgaGk6IEluZmluaXR5LCBrZXk6ICckeCcsIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTYgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAgICAgO251bGxcbiAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBkbyA9PlxuICAgICMgICBmaW5kX292ZXJsYXBzID0gaC5zdGF0ZW1lbnRzLmhyZF9maW5kX2NvdmVyaW5nX3J1bnNcbiAgICAjICAgIyBkZWJ1ZyAnzqlkYnJoX18xNycsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBmaW5kX292ZXJsYXBzLCB7IGxvOiAtMHgxLCBoaTogMHgwYiwgfVxuICAgICMgICAjIGRlYnVnICfOqWRicmhfXzE4Jywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIGZpbmRfb3ZlcmxhcHMsIHsgbG86IC0weDEsIGhpOiAweDBiLCB9XG4gICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgICBsbyAgICAgID0gLTB4MDAwMVxuICAgICMgICBoaSAgICAgID0gKzB4MDAwYlxuICAgICMgICBzZWVuICAgID0gbmV3IFNldCgpXG4gICAgIyAgIG1hdGNoZXIgPSBbXVxuICAgICMgICBmb3IgbiBpbiBbIGxvIC4uIGhpIF1cbiAgICAjICAgICBmb3IgeyByb3dpZCwgfSBmcm9tIGgud2FsayBmaW5kX292ZXJsYXBzLCB7IGxvOiBuLCBoaTogbiwgfVxuICAgICMgICAgICAgbWF0Y2hlci5wdXNoIHJvd2lkIHVubGVzcyBzZWVuLmhhcyByb3dpZFxuICAgICMgICAgICAgc2Vlbi5hZGQgcm93aWRcbiAgICAjICAgQGVxICggzqlkYnJoX18xOSA9IC0+IG1hdGNoZXIubGVuZ3RoICksIDRcbiAgICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyAgIHJlc3VsdCA9IFsgKCByb3dpZCBmb3IgeyByb3dpZCwgfSBmcm9tIGgud2FsayBmaW5kX292ZXJsYXBzLCB7IGxvLCBoaSwgfSApLi4uLCBdXG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fMjAgPSAtPiByZXN1bHQgKSwgbWF0Y2hlclxuICAgICMgICA7bnVsbFxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGRvID0+XG4gICAgIyAgIGZpbmRfb3ZlcmxhcHMgICA9IGguc3RhdGVtZW50cy5ocmRfZmluZF9jb3ZlcmluZ19ydW5zXG4gICAgIyAgIGZpbmRfY29uZmxpY3RzICA9IGguc3RhdGVtZW50cy5ocmRfZmluZF9ydW5zX3dpdGhfY29uZmxpY3RzXzFcbiAgICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fMjEgPSAtPiBbICggcm93IGZvciByb3cgZnJvbSBoLndhbGsgZmluZF9jb25mbGljdHMgKS4uLiwgXSApLCBbXVxuICAgICMgICBAZXEgKCDOqWRicmhfXzIyID0gLT4gWyAoIGguaHJkX2ZpbmRfcnVuc193aXRoX2NvbmZsaWN0c18xKCkgKS4uLiwgXSAgICAgICAgICAgICAgICAgKSwgW11cbiAgICAjICAgQGVxICggzqlkYnJoX18yMyA9IC0+IGguaHJkX3ZhbGlkYXRlXzEoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgbnVsbFxuICAgICMgICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAtMHgwMDBhLCBoaTogKzB4MDAwMywga2V5OiAnZm9vJywgdmFsdWU6ICdcImZ1elwiJywgICAgICB9XG4gICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgICBzZWVuICAgID0gbmV3IFNldCgpXG4gICAgIyAgIG1hdGNoZXIgPSBbXG4gICAgIyAgICAgeyBrZXk6ICdmb28nLCB2YWx1ZV9hOiAnXCJiYXJcIicsIHZhbHVlX2I6ICdcImZ1elwiJyB9LFxuICAgICMgICAgIHsga2V5OiAnZm9vJywgdmFsdWVfYTogJ1wiYmFyXCInLCB2YWx1ZV9iOiAnXCJmdXpcIicgfSwgXVxuICAgICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjICAgcmVzdWx0ID0gW11cbiAgICAjICAgZm9yIHJvdyBmcm9tIGgud2FsayBmaW5kX2NvbmZsaWN0c1xuICAgICMgICAgIHJlc3VsdC5wdXNoIHsga2V5OiByb3cua2V5X2EsIHZhbHVlX2E6IHJvdy52YWx1ZV9hLCB2YWx1ZV9iOiByb3cudmFsdWVfYiwgfVxuICAgICMgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSByZXN1bHRcbiAgICAjICAgQGVxICggzqlkYnJoX18yNCA9IC0+IHJlc3VsdCApLCBtYXRjaGVyXG4gICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgICByZXN1bHQgPSBbXVxuICAgICMgICBmb3Igcm93IGZyb20gaC5ocmRfZmluZF9ydW5zX3dpdGhfY29uZmxpY3RzXzEoKVxuICAgICMgICAgIHJlc3VsdC5wdXNoIHsga2V5OiByb3cua2V5X2EsIHZhbHVlX2E6IHJvdy52YWx1ZV9hLCB2YWx1ZV9iOiByb3cudmFsdWVfYiwgfVxuICAgICMgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSByZXN1bHRcbiAgICAjICAgQGVxICggzqlkYnJoX18yNSA9IC0+IHJlc3VsdCApLCBtYXRjaGVyXG4gICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgICBAdGhyb3dzICggzqlkYnJoX18yNiA9IC0+IGguaHJkX3ZhbGlkYXRlXzEoKSApLCAvZm91bmQgY29uZmxpY3RzL1xuICAgICMgICB0cnkgaC5ocmRfdmFsaWRhdGVfMSgpIGNhdGNoIGUgdGhlbiB3YXJuICfOqWRicmhfXzI3JywgZS5tZXNzYWdlXG4gICAgIyAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIGgud2FsayBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9mYW1pbHlfaGFzX2NvbmZsaWN0XzE7XCJcbiAgICAjICAgcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9mYW1pbHlfaGFzX2NvbmZsaWN0XzE7XCJcbiAgICAjICAgQGVxICggzqlkYnJoX18yOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdleGNlc3NpdmUgQ0lEcycsIGhhc19jb25mbGljdDogMCB9XG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fMjkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnaGlnaCBzdXJyb2dhdGVzJywgaGFzX2NvbmZsaWN0OiAwIH1cbiAgICAjICAgQGVxICggzqlkYnJoX18zMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycsIGhhc19jb25mbGljdDogMCB9XG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fMzEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycsIGhhc19jb25mbGljdDogMCB9XG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fMzIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnbm9uY2hhcmFjdGVycycsIGhhc19jb25mbGljdDogMCB9XG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fMzMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnemVybyBieXRlcycsIGhhc19jb25mbGljdDogMCB9XG4gICAgIyAgIEBlcSAoIM6pZGJyaF9fMzQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInLCBoYXNfY29uZmxpY3Q6IDEgfVxuICAgICMgICBAZXEgKCDOqWRicmhfXzM1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnZm9vJywgdmFsdWU6ICdcImZ1elwiJywgaGFzX2NvbmZsaWN0OiAxIH1cbiAgICAjICAgQGVxICggzqlkYnJoX18zNiA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGRvID0+XG4gICAgIyAgIGVjaG8gcm93IGZvciByb3cgZnJvbSByb3dzID0gaC5ocmRfZmluZF9ydW5zX3dpdGhfY29uZmxpY3RzXzEoKVxuICAgICMgICAjIHJvd3MgPSBoLmhyZF9mYW1pbHlfY29uZmxpY3RzXzEoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBkYnJpY19ob2FyZF9wbHVnaW5fZ3JvdXBzOiAtPlxuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgIGNsYXNzIEhvYXJkIGV4dGVuZHMgRGJyaWNfc3RkXG4gICMgICAgIEBwbHVnaW5zOiBbXG4gICMgICAgICAgZGJyaWNfaG9hcmRfcGx1Z2luXG4gICMgICAgICAgXVxuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgIGggPSBIb2FyZC5yZWJ1aWxkKClcbiAgIyAgIGluc2VydF91bmljb2RlX2V4Y2x1c2lvbnMgaFxuICAjICAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAtMHgwMDBhLCBoaTogICAgMHgwMDAwLCBrZXk6ICdmb28nLCB2YWx1ZTogJ1wiYmFyXCInLCAgICAgIH1cbiAgIyAgIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4MDAwMCwgaGk6ICAgIDB4MDAwYSwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgICAgICB9XG4gICMgICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweDAwMDAsIGhpOiAgICAweDAwMGEsIGtleTogJ25pY2UnLCB2YWx1ZTogJ3RydWUnLCAgICAgIH1cbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBkbyA9PlxuICAjICAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIGguc3RhdGVtZW50cy5faHJkX2ZhY2V0X2dyb3Vwc1xuICAjICAgICByb3dzID0gaC53YWxrIGguc3RhdGVtZW50cy5faHJkX2ZhY2V0X2dyb3Vwc1xuICAjICAgICBAZXEgKCDOqWRicmhfXzM3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnLCAgcnVuczogMSwgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzM4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnaGlnaCBzdXJyb2dhdGVzJywgcnVuczogMSwgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzM5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnbG93IHN1cnJvZ2F0ZXMnLCAgcnVuczogMSwgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzQwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycsICAgcnVuczogMSwgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzQxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnbm9uY2hhcmFjdGVycycsICAgcnVuczogMiwgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzQyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnemVybyBieXRlcycsICAgICAgcnVuczogMSwgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzQzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnZm9vJywgIHZhbHVlOiAnXCJiYXJcIicsICAgICAgICAgICBydW5zOiAyLCB9XG4gICMgICAgIEBlcSAoIM6pZGJyaF9fNDQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICduaWNlJywgdmFsdWU6ICd0cnVlJywgICAgICAgICAgICBydW5zOiAxLCB9XG4gICMgICAgIEBlcSAoIM6pZGJyaF9fNDUgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAjICAgICA7bnVsbFxuICAjICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgIyBkbyA9PlxuICAjICAgIyAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLmhyZF9maW5kX3J1bnNfYnlfZ3JvdXAoKVxuICAjICAgIyAgIHJvd3MgPSBoLmhyZF9maW5kX3J1bnNfYnlfZ3JvdXAoKVxuICAjICAgIyAgIEBlcSAoIM6pZGJyaF9fNDYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnLCBydW5zOiBbIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzExMDAwMCwrSW5maW5pdHksJHgnLCBsbzogMTExNDExMiwgaGk6IEluZmluaXR5LCBrZXk6ICckeCcsIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnIH0gXSB9XG4gICMgICAjICAgQGVxICggzqlkYnJoX180NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnLCBydW5zOiBbIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwZDgwMCwrMDBkYmZmLCR4JywgbG86IDU1Mjk2LCBoaTogNTYzMTksIGtleTogJyR4JywgdmFsdWU6ICdoaWdoIHN1cnJvZ2F0ZXMnIH0gXSB9XG4gICMgICAjICAgQGVxICggzqlkYnJoX180OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycsIHJ1bnM6IFsgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDBkYzAwLCswMGRmZmYsJHgnLCBsbzogNTYzMjAsIGhpOiA1NzM0Mywga2V5OiAnJHgnLCB2YWx1ZTogJ2xvdyBzdXJyb2dhdGVzJyB9IF0gfVxuICAjICAgIyAgIEBlcSAoIM6pZGJyaF9fNDkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICckeCcsIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycsIHJ1bnM6IFsgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0tSW5maW5pdHksLTAwMDAwMSwkeCcsIGxvOiAtSW5maW5pdHksIGhpOiAtMSwga2V5OiAnJHgnLCB2YWx1ZTogJ25lZ2F0aXZlIENJRHMnIH0gXSB9XG4gICMgICAjICAgQGVxICggzqlkYnJoX181MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMGZkZDAsKzAwZmRlZiwkeCcsIGxvOiA2NDk3NiwgaGk6IDY1MDA3LCBrZXk6ICckeCcsIHZhbHVlOiAnbm9uY2hhcmFjdGVycycgfSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDBmZmZlLCswMGZmZmYsJHgnLCBsbzogNjU1MzQsIGhpOiA2NTUzNSwga2V5OiAnJHgnLCB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnIH0gXSB9XG4gICMgICAjICAgQGVxICggzqlkYnJoX181MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJyR4JywgdmFsdWU6ICd6ZXJvIGJ5dGVzJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwMDAsKzAwMDAwMCwkeCcsIGxvOiAwLCBoaTogMCwga2V5OiAnJHgnLCB2YWx1ZTogJ3plcm8gYnl0ZXMnIH0gXSB9XG4gICMgICAjICAgQGVxICggzqlkYnJoX181MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicsIHJ1bnM6IFsgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0tMDAwMDBhLCswMDAwMDAsZm9vJywgbG86IC0xMCwgaGk6IDAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicgfSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDAwLCswMDAwMGEsZm9vJywgbG86IDAsIGhpOiAxMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJyB9IF0gfVxuICAjICAgIyAgIEBlcSAoIM6pZGJyaF9fNTMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICduaWNlJywgdmFsdWU6ICd0cnVlJywgcnVuczogWyB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwMDAsKzAwMDAwYSxuaWNlJywgbG86IDAsIGhpOiAxMCwga2V5OiAnbmljZScsIHZhbHVlOiAndHJ1ZScgfSBdIH1cbiAgIyAgICMgICBAZXEgKCDOqWRicmhfXzU0ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgIyAgICMgICA7bnVsbFxuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgIGRvID0+XG4gICMgICAgICMgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSBoLmhyZF9maW5kX2ZhbWlsaWVzKClcbiAgIyAgICAgcm93cyA9IGguaHJkX2ZpbmRfZmFtaWxpZXMoKVxuICAjICAgICBAZXEgKCDOqWRicmhfXzU1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnZXhjZXNzaXZlIENJRHMnLCAgZmlyc3Q6IDExMTQxMTIsICAgbGFzdDogSW5maW5pdHksIHJ1bnM6IDEsIGhhc19jb25mbGljdDogZmFsc2UsIGlzX25vcm1hbDogdHJ1ZSwgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzU2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnaGlnaCBzdXJyb2dhdGVzJywgZmlyc3Q6IDU1Mjk2LCAgICAgbGFzdDogNTYzMTksICAgIHJ1bnM6IDEsIGhhc19jb25mbGljdDogZmFsc2UsIGlzX25vcm1hbDogdHJ1ZSwgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzU3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnbG93IHN1cnJvZ2F0ZXMnLCAgZmlyc3Q6IDU2MzIwLCAgICAgbGFzdDogNTczNDMsICAgIHJ1bnM6IDEsIGhhc19jb25mbGljdDogZmFsc2UsIGlzX25vcm1hbDogdHJ1ZSwgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzU4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycsICAgZmlyc3Q6IC1JbmZpbml0eSwgbGFzdDogLTEsICAgICAgIHJ1bnM6IDEsIGhhc19jb25mbGljdDogZmFsc2UsIGlzX25vcm1hbDogdHJ1ZSwgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzU5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnbm9uY2hhcmFjdGVycycsICAgZmlyc3Q6IDY0OTc2LCAgICAgbGFzdDogNjU1MzUsICAgIHJ1bnM6IDIsIGhhc19jb25mbGljdDogZmFsc2UsIGlzX25vcm1hbDogdHJ1ZSwgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzYwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnJHgnLCAgIHZhbHVlOiAnemVybyBieXRlcycsICAgICAgZmlyc3Q6IDAsICAgICAgICAgbGFzdDogMCwgICAgICAgIHJ1bnM6IDEsIGhhc19jb25mbGljdDogZmFsc2UsIGlzX25vcm1hbDogdHJ1ZSwgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzYxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnZm9vJywgIHZhbHVlOiAnXCJiYXJcIicsICAgICAgICAgICBmaXJzdDogLTEwLCAgICAgICBsYXN0OiAxMCwgICAgICAgcnVuczogMiwgaGFzX2NvbmZsaWN0OiB0cnVlLCAgaXNfbm9ybWFsOiBmYWxzZSwgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzYyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAnbmljZScsIHZhbHVlOiAndHJ1ZScsICAgICAgICAgICAgZmlyc3Q6IDAsICAgICAgICAgbGFzdDogMTAsICAgICAgIHJ1bnM6IDEsIGhhc19jb25mbGljdDogdHJ1ZSwgIGlzX25vcm1hbDogZmFsc2UsIH1cbiAgIyAgICAgQGVxICggzqlkYnJoX182MyA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICMgICAgIDtudWxsXG4gICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgO251bGxcblxuICAjICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBkYnJpY19ob2FyZF9wbHVnaW5fbm9ybWFsaXphdGlvbjogLT5cbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBjbGFzcyBIb2FyZCBleHRlbmRzIERicmljX3N0ZFxuICAjICAgICBAcGx1Z2luczogW1xuICAjICAgICAgIGRicmljX2hvYXJkX3BsdWdpblxuICAjICAgICAgIF1cbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBkbyA9PlxuICAjICAgICBoID0gSG9hcmQucmVidWlsZCgpXG4gICMgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgICBkZWJ1ZyAnzqlkYnJoX182NCcsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCAqIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgIyAgICAgcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAjICAgICBAZXEgKCDOqWRicmhfXzY1ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgIyAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAgIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86IDB4MDAxMCwgaGk6IDB4MDAxNSwga2V5OiAnYScsIHZhbHVlOiAnXCJBXCInLCB9XG4gICMgICAgIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86IDB4MDAyMCwgaGk6IDB4MDAyNSwga2V5OiAnYScsIHZhbHVlOiAnXCJBXCInLCB9XG4gICMgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgICAjIGRlYnVnICfOqWRicmhfXzY2Jywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICMgICAgIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgcHJpbnRmKCAnJXMsJXMsJWQnLCBrZXksIHZhbHVlLCBpc19ub3JtYWwgKSBhcyBkIGZyb20gaHJkX25vcm1hbGl6YXRpb247XCJcbiAgIyAgICAgQGVxICggzqlkYnJoX182NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGQ6ICdhLFwiQVwiLDEnIH1cbiAgIyAgICAgQGVxICggzqlkYnJoX182OCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICMgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAweDAwMTYsIGhpOiAweDAwMTYsIGtleTogJ2EnLCB2YWx1ZTogJ1wiQVwiJywgfVxuICAjICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgICAgIyBkZWJ1ZyAnzqlkYnJoX182OScsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAjICAgICByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICMgICAgIEBlcSAoIM6pZGJyaF9fNzAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBkOiAnYSxcIkFcIiwwJyB9XG4gICMgICAgIEBlcSAoIM6pZGJyaF9fNzEgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAjICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgICAgcm93cyA9IGguaHJkX2ZpbmRfbm9ubm9ybWFsX2ZhbWlsaWVzKClcbiAgIyAgICAgQGVxICggzqlkYnJoX183MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ2EnLCB2YWx1ZTogJ1wiQVwiJyB9XG4gICMgICAgIEBlcSAoIM6pZGJyaF9fNzMgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAjICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgICAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogMHgwMDEwLCBoaTogMHgwMDE1LCBrZXk6ICdiJywgdmFsdWU6ICdcIkJcIicsIH1cbiAgIyAgICAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogMHgwMDIwLCBoaTogMHgwMDI1LCBrZXk6ICdiJywgdmFsdWU6ICdcIkJcIicsIH1cbiAgIyAgICAgIyBkZWJ1ZyAnzqlkYnJoX183NCcsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAjICAgICByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICMgICAgIEBlcSAoIM6pZGJyaF9fNzUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBkOiAnYSxcIkFcIiwwJyB9XG4gICMgICAgIEBlcSAoIM6pZGJyaF9fNzYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBkOiAnYixcIkJcIiwxJyB9XG4gICMgICAgIEBlcSAoIM6pZGJyaF9fNzcgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAjICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgICAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogMHgwMDEyLCBoaTogMHgwMDE3LCBrZXk6ICdiJywgdmFsdWU6ICdcIkJcIicsIH1cbiAgIyAgICAgIyBkZWJ1ZyAnzqlkYnJoX183OCcsIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCBwcmludGYoICclcywlcywlZCcsIGtleSwgdmFsdWUsIGlzX25vcm1hbCApIGFzIGQgZnJvbSBocmRfbm9ybWFsaXphdGlvbjtcIlxuICAjICAgICByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0IHByaW50ZiggJyVzLCVzLCVkJywga2V5LCB2YWx1ZSwgaXNfbm9ybWFsICkgYXMgZCBmcm9tIGhyZF9ub3JtYWxpemF0aW9uO1wiXG4gICMgICAgIEBlcSAoIM6pZGJyaF9fNzkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBkOiAnYSxcIkFcIiwwJyB9XG4gICMgICAgIEBlcSAoIM6pZGJyaF9fODAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBkOiAnYixcIkJcIiwwJyB9XG4gICMgICAgIEBlcSAoIM6pZGJyaF9fODEgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAjICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgICAgcm93cyA9IGguaHJkX2ZpbmRfbm9ubm9ybWFsX2ZhbWlsaWVzKClcbiAgIyAgICAgQGVxICggzqlkYnJoX184MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IGtleTogJ2EnLCB2YWx1ZTogJ1wiQVwiJyB9XG4gICMgICAgIEBlcSAoIM6pZGJyaF9fODMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyBrZXk6ICdiJywgdmFsdWU6ICdcIkJcIicgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzg0ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgIyAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAgIGRlYnVnICfOqWRicmhfXzg1Jywgcm93IGZvciByb3cgZnJvbSByb3dzID0gaC5ocmRfZmluZF9mYW1pbGllcygpXG4gICMgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgICA7bnVsbFxuICAjICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgIDtudWxsXG5cbiAgIyAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb25fYW5kX2NvbmZsaWN0X2RldGVjdGlvbjogLT5cbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBjbGFzcyBIb2FyZCBleHRlbmRzIERicmljX3N0ZFxuICAjICAgICBAcGx1Z2luczogW1xuICAjICAgICAgIGRicmljX2hvYXJkX3BsdWdpblxuICAjICAgICAgIF1cbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICBkbyA9PlxuICAjICAgICBoID0gSG9hcmQucmVidWlsZCgpXG4gICMgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCAoIGNpZF9vZiAnWicgKSwgJ3Zvd2VsJywgZmFsc2VcbiAgIyAgICAgIyBlY2hvKCk7IGVjaG8gcm93IGZvciByb3cgZnJvbSBoLmhyZF9maW5kX3J1bnMoKVxuICAjICAgICByb3dzID0gaC5ocmRfZmluZF9ydW5zKClcbiAgIyAgICAgQGVxICggzqlkYnJoX184NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDEsKzAwMDA1YSx2b3dlbCcsIGxvOiA2NSwgaGk6IDkwLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgIyAgICAgQGVxICggzqlkYnJoX184NyA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICMgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjICAgICBoLmhyZF9wdW5jaF8xIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ0EnICksIGtleTogJ3Zvd2VsJywgdmFsdWU6IHRydWUsIH1cbiAgIyAgICAgIyBlY2hvKCk7IGVjaG8gcm93IGZvciByb3cgZnJvbSBoLmhyZF9maW5kX3J1bnMoKVxuICAjICAgICByb3dzID0gaC5ocmRfZmluZF9ydW5zKClcbiAgIyAgICAgQGVxICggzqlkYnJoX184OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDEsKzAwMDA0MSx2b3dlbCcsIGxvOiA2NSwgaGk6IDY1LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzg5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MiwrMDAwMDVhLHZvd2VsJywgbG86IDY2LCBoaTogOTAsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzkwID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgIyAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ0UnICksICggY2lkX29mICdFJyApLCAndm93ZWwnLCB0cnVlXG4gICMgICAgICMgZWNobygpOyBlY2hvIHJvdyBmb3Igcm93IGZyb20gaC5ocmRfZmluZF9ydW5zKClcbiAgIyAgICAgcm93cyA9IGguaHJkX2ZpbmRfcnVucygpXG4gICMgICAgIEBlcSAoIM6pZGJyaF9fOTEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQxLCswMDAwNDEsdm93ZWwnLCBsbzogNjUsIGhpOiA2NSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgIyAgICAgQGVxICggzqlkYnJoX185MiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDIsKzAwMDA0NCx2b3dlbCcsIGxvOiA2NiwgaGk6IDY4LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgIyAgICAgQGVxICggzqlkYnJoX185MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDUsKzAwMDA0NSx2b3dlbCcsIGxvOiA2OSwgaGk6IDY5LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzk0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0NiwrMDAwMDVhLHZvd2VsJywgbG86IDcwLCBoaTogOTAsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzk1ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgIyAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ0knICksICggY2lkX29mICdJJyApLCAndm93ZWwnLCB0cnVlXG4gICMgICAgICMgZWNobygpOyBlY2hvIHJvdyBmb3Igcm93IGZyb20gaC5ocmRfZmluZF9ydW5zKClcbiAgIyAgICAgcm93cyA9IGguaHJkX2ZpbmRfcnVucygpXG4gICMgICAgIEBlcSAoIM6pZGJyaF9fOTYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQxLCswMDAwNDEsdm93ZWwnLCBsbzogNjUsIGhpOiA2NSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgIyAgICAgQGVxICggzqlkYnJoX185NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDIsKzAwMDA0NCx2b3dlbCcsIGxvOiA2NiwgaGk6IDY4LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgIyAgICAgQGVxICggzqlkYnJoX185OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDUsKzAwMDA0NSx2b3dlbCcsIGxvOiA2OSwgaGk6IDY5LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAjICAgICBAZXEgKCDOqWRicmhfXzk5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0NiwrMDAwMDQ4LHZvd2VsJywgbG86IDcwLCBoaTogNzIsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAjICAgICBAZXEgKCDOqWRicmhfMTAwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0OSwrMDAwMDQ5LHZvd2VsJywgbG86IDczLCBoaTogNzMsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICMgICAgIEBlcSAoIM6pZGJyaF8xMDEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDRhLCswMDAwNWEsdm93ZWwnLCBsbzogNzQsIGhpOiA5MCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICMgICAgIEBlcSAoIM6pZGJyaF8xMDIgPSAtPiByb3dzLm5leHQoKS5kb25lICAgKSwgdHJ1ZVxuICAjICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyAgICAgaC5ocmRfcHVuY2hfMSAoIGNpZF9vZiAnTycgKSwgKCBjaWRfb2YgJ08nICksICd2b3dlbCcsIHRydWVcbiAgIyAgICAgIyBlY2hvKCk7IGVjaG8gcm93IGZvciByb3cgZnJvbSBoLmhyZF9maW5kX3J1bnMoKVxuICAjICAgICByb3dzID0gaC5ocmRfZmluZF9ydW5zKClcbiAgIyAgICAgQGVxICggzqlkYnJoXzEwMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDEsKzAwMDA0MSx2b3dlbCcsIGxvOiA2NSwgaGk6IDY1LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAjICAgICBAZXEgKCDOqWRicmhfMTA0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0MiwrMDAwMDQ0LHZvd2VsJywgbG86IDY2LCBoaTogNjgsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAjICAgICBAZXEgKCDOqWRicmhfMTA1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0NSwrMDAwMDQ1LHZvd2VsJywgbG86IDY5LCBoaTogNjksIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICMgICAgIEBlcSAoIM6pZGJyaF8xMDYgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ2LCswMDAwNDgsdm93ZWwnLCBsbzogNzAsIGhpOiA3Miwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICMgICAgIEBlcSAoIM6pZGJyaF8xMDcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQ5LCswMDAwNDksdm93ZWwnLCBsbzogNzMsIGhpOiA3Mywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgIyAgICAgQGVxICggzqlkYnJoXzEwOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNGEsKzAwMDA0ZSx2b3dlbCcsIGxvOiA3NCwgaGk6IDc4LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgIyAgICAgQGVxICggzqlkYnJoXzEwOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNGYsKzAwMDA0Zix2b3dlbCcsIGxvOiA3OSwgaGk6IDc5LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAjICAgICBAZXEgKCDOqWRicmhfMTEwID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA1MCwrMDAwMDVhLHZvd2VsJywgbG86IDgwLCBoaTogOTAsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAjICAgICBAZXEgKCDOqWRicmhfMTExID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgIyAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAgIGguaHJkX3B1bmNoXzEgKCBjaWRfb2YgJ1UnICksICggY2lkX29mICdVJyApLCAndm93ZWwnLCB0cnVlXG4gICMgICAgICMgZWNobygpOyBlY2hvIHJvdyBmb3Igcm93IGZyb20gaC5ocmRfZmluZF9ydW5zKClcbiAgIyAgICAgcm93cyA9IGguaHJkX2ZpbmRfcnVucygpXG4gICMgICAgIEBlcSAoIM6pZGJyaF8xMTIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDQxLCswMDAwNDEsdm93ZWwnLCBsbzogNjUsIGhpOiA2NSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgIyAgICAgQGVxICggzqlkYnJoXzExMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDIsKzAwMDA0NCx2b3dlbCcsIGxvOiA2NiwgaGk6IDY4LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgIyAgICAgQGVxICggzqlkYnJoXzExNCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNDUsKzAwMDA0NSx2b3dlbCcsIGxvOiA2OSwgaGk6IDY5LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAjICAgICBAZXEgKCDOqWRicmhfMTE1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0NiwrMDAwMDQ4LHZvd2VsJywgbG86IDcwLCBoaTogNzIsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAjICAgICBAZXEgKCDOqWRicmhfMTE2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA0OSwrMDAwMDQ5LHZvd2VsJywgbG86IDczLCBoaTogNzMsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICMgICAgIEBlcSAoIM6pZGJyaF8xMTcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDRhLCswMDAwNGUsdm93ZWwnLCBsbzogNzQsIGhpOiA3OCwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICMgICAgIEBlcSAoIM6pZGJyaF8xMTggPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Vj0rMDAwMDRmLCswMDAwNGYsdm93ZWwnLCBsbzogNzksIGhpOiA3OSwga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgIyAgICAgQGVxICggzqlkYnJoXzExOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNTAsKzAwMDA1NCx2b3dlbCcsIGxvOiA4MCwgaGk6IDg0LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgIyAgICAgQGVxICggzqlkYnJoXzEyMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpWPSswMDAwNTUsKzAwMDA1NSx2b3dlbCcsIGxvOiA4NSwgaGk6IDg1LCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAjICAgICBAZXEgKCDOqWRicmhfMTIxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlY9KzAwMDA1NiwrMDAwMDVhLHZvd2VsJywgbG86IDg2LCBoaTogOTAsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAjICAgICBAZXEgKCDOqWRicmhfMTIyID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgIyAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAgIGVjaG8gcm93IGZvciByb3cgZnJvbSBoLmhyZF9maW5kX2ZhbWlsaWVzKClcbiAgIyAgICAgcm93cyA9IGguaHJkX2ZpbmRfZmFtaWxpZXMoKVxuICAjICAgICBAZXEgKCDOqWRicmhfMTIzID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJywgIGZpcnN0OiA2NiwgbGFzdDogOTAsIHJ1bnM6IDUsIGhhc19jb25mbGljdDogdHJ1ZSwgaXNfbm9ybWFsOiBmYWxzZSwgfVxuICAjICAgICBAZXEgKCDOqWRicmhfMTI0ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnLCAgIGZpcnN0OiA2NSwgbGFzdDogODUsIHJ1bnM6IDUsIGhhc19jb25mbGljdDogdHJ1ZSwgaXNfbm9ybWFsOiBmYWxzZSwgfVxuICAjICAgICBAZXEgKCDOqWRicmhfMTI1ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgICksIHRydWVcbiAgIyAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICAgIGNocl9zdHJpbmcgPSAnJ1xuICAjICAgICBmb3IgY2lkIGluIFsgKCBjaWRfb2YgJ0EnICkgLi4gKCBjaWRfb2YgJ1onICkgXVxuICAjICAgICAgIHJvd3MgICAgICAgID0gWyAoIGguaHJkX2ZpbmRfY292ZXJpbmdfcnVucyBjaWQgKS4uLiwgXVxuICAjICAgICAgIGlzX3Zvd2VsICAgID0gcm93c1sgMCBdLnZhbHVlXG4gICMgICAgICAgY29sb3IgICAgICAgPSBpZiBpc192b3dlbCB0aGVuIHdoaXRlIGVsc2UgYmx1ZVxuICAjICAgICAgIGNociAgICAgICAgID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkXG4gICMgICAgICAgY2hyX3N0cmluZyArPSBjb2xvciBjaHJcbiAgIyAgICAgICBAZXEgKCDOqWRicmhfMTI2ID0gLT4gcm93cy5sZW5ndGggICAgICAgICAgICAgICksIDFcbiAgIyAgICAgICBAZXEgKCDOqWRicmhfMTI3ID0gLT4gcm93c1sgMCBdLmtleSAgICAgICAgICAgICksICd2b3dlbCdcbiAgIyAgICAgICBAZXEgKCDOqWRicmhfMTI4ID0gLT4gdHlwZV9vZiBpc192b3dlbCAgICAgICAgICksICdib29sZWFuJ1xuICAjICAgICBkZWJ1ZyAnzqlkYnJoXzEyOScsIGNocl9zdHJpbmdcbiAgIyAgICAgO251bGxcbiAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICMgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfaG9hcmRfcGx1Z2luX25vcm1hbGl6YXRpb25fYW5kX2NvbmZsaWN0X2RldGVjdGlvbl8yOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgSG9hcmQgZXh0ZW5kcyBEYnJpY19zdGRcbiAgICAgIEBwbHVnaW5zOiBbXG4gICAgICAgIGRicmljX2hvYXJkX3BsdWdpblxuICAgICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBIb2FyZF92IGV4dGVuZHMgSG9hcmRcbiAgICAgIHZpc3VhbGl6ZTogKHsgbG8sIGhpLCB9KSAtPlxuICAgICAgICBmYWNldF9mcm9tX3JvdyAgICA9ICggcm93ICkgLT4gXCIje3Jvdy5rZXl9OiN7cm93LnZhbHVlX2pzb259XCJcbiAgICAgICAgZmFjZXRzX2Zyb21fcm93cyAgPSAoIHJvd3MgKSAtPiBuZXcgU2V0IFsgKCBuZXcgU2V0ICggKCBmYWNldF9mcm9tX3JvdyByb3cgKSBmb3Igcm93IGZyb20gcm93cyApICkuLi4sIF0uc29ydCgpXG4gICAgICAgIGdsb2JhbF9mYWNldHMgICAgID0gZmFjZXRzX2Zyb21fcm93cyBAaHJkX2ZpbmRfY292ZXJpbmdfcnVucyBsbywgaGlcbiAgICAgICAgZ2xvYmFsX3dpZHRoICAgICAgPSBoaSAtIGxvXG4gICAgICAgIGNvbG9ycyAgICAgICAgICAgID1cbiAgICAgICAgICBmYWxsYmFjazogICAoIFAuLi4gKSAtPiBHVVkudHJtLmdyZXkgIFAuLi5cbiAgICAgICAgICB3YXJuOiAgICAgICAoIFAuLi4gKSAtPiBHVVkudHJtLnJlZCAgIFAuLi5cbiAgICAgICAgICBpbjogICAgICAgICAoIFAuLi4gKSAtPiBHVVkudHJtLmdvbGQgIFAuLi5cbiAgICAgICAgICBvdXQ6ICAgICAgICAoIFAuLi4gKSAtPiBHVVkudHJtLmJsdWUgIFAuLi5cbiAgICAgICAgICBydW46ICAgICAgICAoIFAuLi4gKSAtPiBHVVkudHJtLmdyZXkgIFAuLi5cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB7IHJvd19jb3VudCwgfSA9IEBnZXRfZmlyc3QgU1FMXCJzZWxlY3QgY291bnQoKikgYXMgcm93X2NvdW50IGZyb20gaHJkX3J1bnM7XCJcbiAgICAgICAgZWNobygpXG4gICAgICAgIGVjaG8gR1VZLnRybS53aGl0ZSBHVVkudHJtLnJldmVyc2UgR1VZLnRybS5ib2xkIFwiIGhvYXJkIHdpdGggI3tyb3dfY291bnR9IHJ1bnMgXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBmb3IgZ2xvYmFsX2ZhY2V0IGZyb20gZ2xvYmFsX2ZhY2V0c1xuICAgICAgICAgIGdmcGggICAgICA9ICcgJy5yZXBlYXQgZ2xvYmFsX2ZhY2V0Lmxlbmd0aFxuICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgc3RhdGVtZW50ID0gU1FMXCJcIlwiXG4gICAgICAgICAgICBzZWxlY3QgKiBmcm9tIGhyZF9ydW5zXG4gICAgICAgICAgICAgIHdoZXJlIHRydWVcbiAgICAgICAgICAgICAgICBhbmQgKCBmYWNldCA9ICRnbG9iYWxfZmFjZXQgKVxuICAgICAgICAgICAgICAgIGFuZCAoIGxvIDw9ICRoaSApXG4gICAgICAgICAgICAgICAgYW5kICggaGkgPj0gJGxvIClcbiAgICAgICAgICAgICAgLS0gb3JkZXIgYnkgaGkgLSBsbyBhc2MsIGxvIGRlc2MsIGtleSwgdmFsdWVcbiAgICAgICAgICAgICAgb3JkZXIgYnkgaW5vcm4gZGVzY1xuICAgICAgICAgICAgICA7XCJcIlwiXG4gICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICBwb2ludHMgPSAnJ1xuICAgICAgICAgIGZvciBjaWQgaW4gWyBsbyAuLiBoaSBdXG4gICAgICAgICAgICBsb2NhbF9rZXlzICA9IGZhY2V0c19mcm9tX3Jvd3MgQGhyZF9maW5kX2NvdmVyaW5nX3J1bnMgY2lkXG4gICAgICAgICAgICBjaHIgICAgICAgICA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZFxuICAgICAgICAgICAgY29sb3IgICAgICAgPSBpZiAoIGxvY2FsX2tleXMuaGFzIGdsb2JhbF9mYWNldCApIHRoZW4gY29sb3JzLmluIGVsc2UgY29sb3JzLm91dFxuICAgICAgICAgICAgcG9pbnRzICAgICArPSBjb2xvciBjaHJcbiAgICAgICAgICBlY2hvIGZcIiN7Z2xvYmFsX2ZhY2V0fTo8MTVjOyAjeycgJ306PjZjOyAje3BvaW50c31cIlxuICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgZm9yIHJvdyBmcm9tIEB3YWxrIHN0YXRlbWVudCwgeyBnbG9iYWxfZmFjZXQsIGxvLCBoaSwgfVxuICAgICAgICAgICAgaWQgICAgICAgICAgPSByb3cucm93aWQucmVwbGFjZSAvXi4qPz0oXFxkKykvLCAnWyQxXSdcbiAgICAgICAgICAgIGZpcnN0ICAgICAgID0gKCBNYXRoLm1heCByb3cubG8sIGxvICkgLSBsb1xuICAgICAgICAgICAgbGFzdCAgICAgICAgPSAoIE1hdGgubWluIHJvdy5oaSwgaGkgKSAtIGxvXG4gICAgICAgICAgICBsZWZ0ICAgICAgICA9IEdVWS50cm0uZ3JleSBHVVkudHJtLnJldmVyc2UgJ/CfroonLnJlcGVhdCBmaXJzdFxuICAgICAgICAgICAgIyBsZWZ0ICAgICAgICA9IEdVWS50cm0uZ3JleSAn4pSCJy5yZXBlYXQgZmlyc3RcbiAgICAgICAgICAgIG1pZCAgICAgICAgID0gR1VZLnRybS5nb2xkICfwn66KJy5yZXBlYXQgbGFzdCAtIGZpcnN0ICsgMVxuICAgICAgICAgICAgIyBtaWQgICAgICAgICA9IEdVWS50cm0uZ29sZCAn4pmmJy5yZXBlYXQgbGFzdCAtIGZpcnN0ICsgMVxuICAgICAgICAgICAgIyBtaWQgICAgICAgICA9IEdVWS50cm0uZ29sZCAn4paIJy5yZXBlYXQgbGFzdCAtIGZpcnN0ICsgMVxuICAgICAgICAgICAgcmlnaHQgICAgICAgPSBHVVkudHJtLmdyZXkgR1VZLnRybS5yZXZlcnNlICfwn66KJy5yZXBlYXQgKCBnbG9iYWxfd2lkdGggLSBsYXN0ICsgMSApXG4gICAgICAgICAgICBlY2hvIGNvbG9ycy5ydW4gZlwiI3tnZnBofTo8MTVjOyAje2lkfTo+NmM7ICN7bGVmdH0je21pZH0je3JpZ2h0fVwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoICAgICAgICAgICAgICAgICA9IEhvYXJkX3YucmVidWlsZCgpXG4gICAgICBrZXkgICAgICAgICAgICAgICA9ICd2b3dlbCdcbiAgICAgIGNvbG9yc19ieV9mYWNldHMgID1cbiAgICAgICAgJ3Zvd2VsOnRydWUnOiAgICAgR1VZLnRybS5nb2xkXG4gICAgICAgICd2b3dlbDpmYWxzZSc6ICAgIEdVWS50cm0uYmx1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCAoIGNpZF9vZiAnWicgKSwga2V5LCBmYWxzZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnYScgKSwgKCBjaWRfb2YgJ3onICksIGtleSwgZmFsc2VcbiAgICAgIGgudmlzdWFsaXplIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ3onICksIH1cbiAgICAgICMgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAgICMgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfcnVucyBvcmRlciBieSBsbztcIlxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnRScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdJJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ08nICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnVScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdOJyApLCAoIGNpZF9vZiAnWicgKSwgJ3VwcGVyJywgdHJ1ZVxuICAgICAgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfcnVucyBvcmRlciBieSBsbztcIlxuICAgICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9mYW1pbHlfY29uZmxpY3RzXzE7XCJcbiAgICAgICMgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBocmRfZmFtaWx5X2NvbmZsaWN0c18yO1wiXG4gICAgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2ZhbWlseV9jb25mbGljdHNfMiB3aGVyZSBrZXkgPSAka2V5IGFuZCB2YWx1ZSAhPSAndHJ1ZSc7XCIsIHsga2V5LCB9XG4gICAgICAjIGgudGJsX2VjaG9fYXNfdGV4dCBTUUxcInNlbGVjdCAqIGZyb20gX2hyZF9mYW1pbHlfaGFzX2NvbmZsaWN0XzE7XCJcbiAgICAgICMgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBfaHJkX2NsYW5faGFzX2NvbmZsaWN0XzI7XCJcbiAgICAgICMgaC50YmxfZWNob19hc190ZXh0IGguaHJkX2ZpbmRfZmFtaWxpZXNcbiAgICAgICMgaC50YmxfZWNob19hc190ZXh0IFNRTFwic2VsZWN0ICogZnJvbSBfaHJkX2ZhY2V0X2dyb3VwX2hhc19jb25mbGljdF8yO1wiXG4gICAgICBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdVJyApLCBudWxsLCBrZXksIHRydWVcbiAgICAgIGgudmlzdWFsaXplIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ3onICksIH1cbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ2EnICksIG51bGwsIGtleSwgdHJ1ZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnZCcgKSwgbnVsbCwga2V5LCBmYWxzZVxuICAgICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAndScgKSwgbnVsbCwga2V5LCB0cnVlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdjJyApLCAoIGNpZF9vZiAneCcgKSwga2V5LCB0cnVlXG4gICAgICBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdiJyApLCBudWxsLCBrZXksIGZhbHNlXG4gICAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdjJyApLCBudWxsLCBrZXksIGZhbHNlXG4gICAgICBoLnZpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgICAjIGZvciBwb2ludCBpbiBbICggY2lkX29mICdBJyApIC4uICggY2lkX29mICd6JyApIF1cbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksICggY2lkX29mICdaJyApLCAnZXZlbicsIHRydWVcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksIG51bGwsICdldmVuJywgZmFsc2VcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0MnICksIG51bGwsICdldmVuJywgZmFsc2VcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0UnICksIG51bGwsICdldmVuJywgZmFsc2VcbiAgICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0cnICksIG51bGwsICdldmVuJywgZmFsc2VcbiAgICAgIGgudmlzdWFsaXplIHsgbG86ICggY2lkX29mICdBJyApLCBoaTogKCBjaWRfb2YgJ3onICksIH1cbiAgICAgIGZvciBjaWQgaW4gWyAoIGNpZF9vZiAnQScgKSAuLiAoIGNpZF9vZiAnWicgKSBdXG4gICAgICAgIGNociA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZFxuICAgICAgICBSICAgPSB7fVxuICAgICAgICBmb3IgeyBrZXksIHZhbHVlLCB9IGZyb20gaC5ocmRfZmluZF90b3BydW5zX2Zvcl9wb2ludCBjaWRcbiAgICAgICAgICAjIyMgVEFJTlQgY29tcGxhaW4gaWYga2V5IHRha2VuICMjI1xuICAgICAgICAgIFJbIGtleSBdID0gdmFsdWVcbiAgICAgICAgZGVidWcgJ86pZGJyaF8xMzAnLCBjaHIsIFJcbiAgICAgICMgaC52aXN1YWxpemUgeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAneicgKSwgfVxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZG9fY292ZXJhZ2UgPSB0cnVlXG4gIGRvX2NvdmVyYWdlID0gZmFsc2VcbiAgaWYgZG9fY292ZXJhZ2VcbiAgICB7IENvdmVyYWdlX2FuYWx5emVyLCAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9jb3ZlcmFnZS1hbmFseXplcidcbiAgICBjYSA9IG5ldyBDb3ZlcmFnZV9hbmFseXplcigpXG4gICAgIyBjYS53cmFwX2NsYXNzIERicmljX3N0ZFxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogdHJ1ZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBkYnJpY19ob2FyZF9wbHVnaW5fbm9ybWFsaXphdGlvbl9hbmRfY29uZmxpY3RfZGV0ZWN0aW9uXzI6IHRlc3RzLmRicmljX2hvYXJkX3BsdWdpbl9ub3JtYWxpemF0aW9uX2FuZF9jb25mbGljdF9kZXRlY3Rpb25fMiwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGJyaWNfZHluYW1pY19idWlsZF9wcm9wZXJ0aWVzOiB0ZXN0cy5kYnJpY19keW5hbWljX2J1aWxkX3Byb3BlcnRpZXMsIH1cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpZiBkb19jb3ZlcmFnZVxuICAgIHdhcm4gJ86pZGJyaF8xMzEnLCBcIm5vdCBjb3ZlcmVkOlwiLCByZXZlcnNlIG5hbWUgZm9yIG5hbWUgaW4gY2EudW51c2VkX25hbWVzIGlmIGNhLnVudXNlZF9uYW1lcy5sZW5ndGggPiAwXG4gICAgIyBoZWxwICfOqWRicmhfMTMyJywgY2EudXNlZF9uYW1lc1xuICAgICMgdXJnZSAnzqlkYnJoXzEzMycsIGNvdW50LCBuYW1lcyBmb3IgY291bnQsIG5hbWVzIG9mIGNhLm5hbWVzX2J5X2NvdW50c1xuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIDtudWxsXG5cblxuIl19
