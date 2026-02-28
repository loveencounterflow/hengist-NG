(async function() {
  'use strict';
  var Dbric, Dbric_std, FS, False, GTNG, GUY, Hoard, IDN, LIT, PATH, SFMODULES, SQL, Test, True, VEC, alert, as_bool, as_chr, blue, bold, cid_of, dbric_hoard_plugin, debug, echo, f, from_bool, gold, green, grey, help, info, insert_unicode_exclusions, inspect, log, nfa, plain, praise, red, reverse, rpr, tests, type_of, unquote_name, urge, warn, whisper, white,
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

  // { lets,                 } = internals
  ({Hoard, dbric_hoard_plugin} = require('../../../apps/bricabrac-sfmodules/lib/intermission'));

  ({type_of} = (require('../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics')).require_type_of());

  //===========================================================================================================
  cid_of = function(x) {
    return x.codePointAt(0);
  };

  as_chr = function(n) {
    return String.fromCodePoint(n);
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
      var h, Ωdbrh___1, Ωdbrh___2, Ωdbrh___3, Ωdbrh___4;
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
        var rows, Ωdbrh__10, Ωdbrh__11, Ωdbrh__12, Ωdbrh__13, Ωdbrh__14, Ωdbrh___5, Ωdbrh___6, Ωdbrh___7, Ωdbrh___8, Ωdbrh___9;
        // echo row for row from rows = h.walk h.statements.hrd_find_runs
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
    dbric_hoard_plugin_regularize: function() {
      var chrs, cid, colors_by_facets, h, i, ref, ref1, row, rows, Ωdbrh__15, Ωdbrh__16, Ωdbrh__17, Ωdbrh__18, Ωdbrh__19, Ωdbrh__20, Ωdbrh__21, Ωdbrh__22, Ωdbrh__23, Ωdbrh__24, Ωdbrh__25, Ωdbrh__26, Ωdbrh__27, Ωdbrh__28, Ωdbrh__29, Ωdbrh__30, Ωdbrh__31, Ωdbrh__32, Ωdbrh__33, Ωdbrh__34, Ωdbrh__35, Ωdbrh__36, Ωdbrh__37, Ωdbrh__38, Ωdbrh__39, Ωdbrh__40, Ωdbrh__41, Ωdbrh__42, Ωdbrh__43, Ωdbrh__44, Ωdbrh__45, Ωdbrh__46, Ωdbrh__47, Ωdbrh__48, Ωdbrh__49, Ωdbrh__50, Ωdbrh__51, Ωdbrh__52, Ωdbrh__53, Ωdbrh__54, Ωdbrh__55, Ωdbrh__56, Ωdbrh__57, Ωdbrh__58, Ωdbrh__59, Ωdbrh__60, Ωdbrh__61, Ωdbrh__62, Ωdbrh__63, Ωdbrh__64, Ωdbrh__65, Ωdbrh__66, Ωdbrh__67, Ωdbrh__68, Ωdbrh__69, Ωdbrh__70, Ωdbrh__71, Ωdbrh__72, Ωdbrh__73, Ωdbrh__74, Ωdbrh__75, Ωdbrh__76, Ωdbrh__77, Ωdbrh__78, Ωdbrh__79, Ωdbrh__80, Ωdbrh__81, Ωdbrh__82, Ωdbrh__83, Ωdbrh__84, Ωdbrh__85, Ωdbrh__86;
      //.......................................................................................................
      h = Hoard.rebuild();
      colors_by_facets = {
        'vowel:true': GUY.trm.gold,
        'vowel:false': GUY.trm.blue
      };
      for (cid = i = ref = cid_of('A'), ref1 = cid_of('Z'); (ref <= ref1 ? i <= ref1 : i >= ref1); cid = ref <= ref1 ? ++i : --i) {
        //.......................................................................................................
        h.hrd_add_run(cid, null, 'uc', true);
      }
      h.hrd_add_run(cid_of('A'), cid_of('Z'), 'vowel', false);
      h.hrd_add_run(cid_of('a'), cid_of('z'), 'vowel', false);
      h.hrd_add_run(cid_of('A'), null, 'vowel', true);
      h.hrd_add_run(cid_of('A'), null, 'vowel', true);
      h.hrd_add_run(cid_of('E'), null, 'vowel', true);
      h.hrd_add_run(cid_of('I'), null, 'vowel', true);
      h.hrd_add_run(cid_of('O'), null, 'vowel', true);
      h.hrd_add_run(cid_of('U'), null, 'vowel', true);
      h.hrd_add_run(cid_of('N'), cid_of('Z'), 'upper', true);
      h.hrd_add_run(cid_of('A'), cid_of('D'), 'vgroup', 'A');
      h.hrd_add_run(cid_of('I'), cid_of('N'), 'vgroup', 'I');
      h.hrd_add_run(cid_of('a'), null, 'vowel', true);
      h.hrd_add_run(cid_of('e'), null, 'vowel', true);
      h.hrd_add_run(cid_of('i'), null, 'vowel', true);
      h.hrd_add_run(cid_of('o'), null, 'vowel', true);
      h.hrd_add_run(cid_of('d'), null, 'vowel', false);
      h.hrd_add_run(cid_of('u'), null, 'vowel', true);
      //.......................................................................................................
      // echo row for row from rows = h.walk SQL"select * from hrd_runs order by inorn;"
      rows = h.walk(SQL`select * from hrd_runs order by inorn;`);
      this.eq((Ωdbrh__15 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=1',
        inorn: 1,
        lo: 65,
        hi: 65,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__16 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=2',
        inorn: 2,
        lo: 66,
        hi: 66,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__17 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=3',
        inorn: 3,
        lo: 67,
        hi: 67,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__18 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=4',
        inorn: 4,
        lo: 68,
        hi: 68,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__19 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=5',
        inorn: 5,
        lo: 69,
        hi: 69,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__20 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=6',
        inorn: 6,
        lo: 70,
        hi: 70,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__21 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=7',
        inorn: 7,
        lo: 71,
        hi: 71,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__22 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=8',
        inorn: 8,
        lo: 72,
        hi: 72,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__23 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=9',
        inorn: 9,
        lo: 73,
        hi: 73,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__24 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=10',
        inorn: 10,
        lo: 74,
        hi: 74,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__25 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=11',
        inorn: 11,
        lo: 75,
        hi: 75,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__26 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=12',
        inorn: 12,
        lo: 76,
        hi: 76,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__27 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=13',
        inorn: 13,
        lo: 77,
        hi: 77,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__28 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=14',
        inorn: 14,
        lo: 78,
        hi: 78,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__29 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=15',
        inorn: 15,
        lo: 79,
        hi: 79,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__30 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=16',
        inorn: 16,
        lo: 80,
        hi: 80,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__31 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=17',
        inorn: 17,
        lo: 81,
        hi: 81,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__32 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=18',
        inorn: 18,
        lo: 82,
        hi: 82,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__33 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=19',
        inorn: 19,
        lo: 83,
        hi: 83,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__34 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=20',
        inorn: 20,
        lo: 84,
        hi: 84,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__35 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=21',
        inorn: 21,
        lo: 85,
        hi: 85,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__36 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=22',
        inorn: 22,
        lo: 86,
        hi: 86,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__37 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=23',
        inorn: 23,
        lo: 87,
        hi: 87,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__38 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=24',
        inorn: 24,
        lo: 88,
        hi: 88,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__39 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=25',
        inorn: 25,
        lo: 89,
        hi: 89,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__40 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=26',
        inorn: 26,
        lo: 90,
        hi: 90,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__41 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=27',
        inorn: 27,
        lo: 65,
        hi: 90,
        facet: 'vowel:false',
        key: 'vowel',
        value: 'false'
      });
      this.eq((Ωdbrh__42 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=28',
        inorn: 28,
        lo: 97,
        hi: 122,
        facet: 'vowel:false',
        key: 'vowel',
        value: 'false'
      });
      this.eq((Ωdbrh__43 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=29',
        inorn: 29,
        lo: 65,
        hi: 65,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__44 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=30',
        inorn: 30,
        lo: 65,
        hi: 65,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__45 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=31',
        inorn: 31,
        lo: 69,
        hi: 69,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__46 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=32',
        inorn: 32,
        lo: 73,
        hi: 73,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__47 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=33',
        inorn: 33,
        lo: 79,
        hi: 79,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__48 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=34',
        inorn: 34,
        lo: 85,
        hi: 85,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__49 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=35',
        inorn: 35,
        lo: 78,
        hi: 90,
        facet: 'upper:true',
        key: 'upper',
        value: 'true'
      });
      this.eq((Ωdbrh__50 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=36',
        inorn: 36,
        lo: 65,
        hi: 68,
        facet: 'vgroup:"A"',
        key: 'vgroup',
        value: '"A"'
      });
      this.eq((Ωdbrh__51 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=37',
        inorn: 37,
        lo: 73,
        hi: 78,
        facet: 'vgroup:"I"',
        key: 'vgroup',
        value: '"I"'
      });
      this.eq((Ωdbrh__52 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=38',
        inorn: 38,
        lo: 97,
        hi: 97,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__53 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=39',
        inorn: 39,
        lo: 101,
        hi: 101,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__54 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=40',
        inorn: 40,
        lo: 105,
        hi: 105,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__55 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=41',
        inorn: 41,
        lo: 111,
        hi: 111,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__56 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=42',
        inorn: 42,
        lo: 100,
        hi: 100,
        facet: 'vowel:false',
        key: 'vowel',
        value: 'false'
      });
      this.eq((Ωdbrh__57 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=43',
        inorn: 43,
        lo: 117,
        hi: 117,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__58 = function() {
        return rows.next().done;
      }), true);
      //.......................................................................................................
      h.hrd_visualize({
        lo: cid_of('A'),
        hi: cid_of('z')
      });
      h.hrd_regularize();
      h.hrd_visualize({
        lo: cid_of('A'),
        hi: cid_of('z')
      });
      // h.tbl_echo_as_text SQL"select * from hrd_topruns;"
      //.......................................................................................................
      // echo row for row from rows = h.walk SQL"select * from hrd_runs order by inorn;"
      rows = h.walk(SQL`select * from hrd_runs order by inorn;`);
      this.eq((Ωdbrh__59 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=44',
        inorn: 44,
        lo: 65,
        hi: 90,
        facet: 'uc:true',
        key: 'uc',
        value: 'true'
      });
      this.eq((Ωdbrh__60 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=45',
        inorn: 45,
        lo: 78,
        hi: 90,
        facet: 'upper:true',
        key: 'upper',
        value: 'true'
      });
      this.eq((Ωdbrh__61 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=46',
        inorn: 46,
        lo: 65,
        hi: 68,
        facet: 'vgroup:"A"',
        key: 'vgroup',
        value: '"A"'
      });
      this.eq((Ωdbrh__62 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=47',
        inorn: 47,
        lo: 73,
        hi: 78,
        facet: 'vgroup:"I"',
        key: 'vgroup',
        value: '"I"'
      });
      this.eq((Ωdbrh__63 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=48',
        inorn: 48,
        lo: 66,
        hi: 68,
        facet: 'vowel:false',
        key: 'vowel',
        value: 'false'
      });
      this.eq((Ωdbrh__64 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=49',
        inorn: 49,
        lo: 70,
        hi: 72,
        facet: 'vowel:false',
        key: 'vowel',
        value: 'false'
      });
      this.eq((Ωdbrh__65 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=50',
        inorn: 50,
        lo: 74,
        hi: 78,
        facet: 'vowel:false',
        key: 'vowel',
        value: 'false'
      });
      this.eq((Ωdbrh__66 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=51',
        inorn: 51,
        lo: 80,
        hi: 84,
        facet: 'vowel:false',
        key: 'vowel',
        value: 'false'
      });
      this.eq((Ωdbrh__67 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=52',
        inorn: 52,
        lo: 86,
        hi: 90,
        facet: 'vowel:false',
        key: 'vowel',
        value: 'false'
      });
      this.eq((Ωdbrh__68 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=53',
        inorn: 53,
        lo: 98,
        hi: 100,
        facet: 'vowel:false',
        key: 'vowel',
        value: 'false'
      });
      this.eq((Ωdbrh__69 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=54',
        inorn: 54,
        lo: 102,
        hi: 104,
        facet: 'vowel:false',
        key: 'vowel',
        value: 'false'
      });
      this.eq((Ωdbrh__70 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=55',
        inorn: 55,
        lo: 106,
        hi: 110,
        facet: 'vowel:false',
        key: 'vowel',
        value: 'false'
      });
      this.eq((Ωdbrh__71 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=56',
        inorn: 56,
        lo: 112,
        hi: 116,
        facet: 'vowel:false',
        key: 'vowel',
        value: 'false'
      });
      this.eq((Ωdbrh__72 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=57',
        inorn: 57,
        lo: 65,
        hi: 65,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__73 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=58',
        inorn: 58,
        lo: 69,
        hi: 69,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__74 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=59',
        inorn: 59,
        lo: 73,
        hi: 73,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__75 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=60',
        inorn: 60,
        lo: 79,
        hi: 79,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__76 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=61',
        inorn: 61,
        lo: 85,
        hi: 85,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__77 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=62',
        inorn: 62,
        lo: 97,
        hi: 97,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__78 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=63',
        inorn: 63,
        lo: 101,
        hi: 101,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__79 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=64',
        inorn: 64,
        lo: 105,
        hi: 105,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__80 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=65',
        inorn: 65,
        lo: 111,
        hi: 111,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__81 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=66',
        inorn: 66,
        lo: 117,
        hi: 117,
        facet: 'vowel:true',
        key: 'vowel',
        value: 'true'
      });
      this.eq((Ωdbrh__82 = function() {
        return rows.next().value;
      }), {
        rowid: 't:hrd:runs:R=67',
        inorn: 67,
        lo: 118,
        hi: 122,
        facet: 'vowel:false',
        key: 'vowel',
        value: 'false'
      });
      this.eq((Ωdbrh__83 = function() {
        return rows.next().done;
      }), true);
      //.......................................................................................................
      // echo row for row from rows = h.walk SQL"select * from hrd_global_bounds order by point;"
      rows = h.get_all(SQL`select * from hrd_global_bounds order by point;`);
      this.eq((Ωdbrh__84 = function() {
        return rows;
      }), [
        {
          bound: 'min',
          point: 65
        },
        {
          bound: 'max',
          point: 122
        }
      ]);
      //.......................................................................................................
      chrs = ((function() {
        var results;
        results = [];
        for (row of h.walk(SQL`select * from hrd_breakpoints order by point;`)) {
          results.push(as_chr(row.point));
        }
        return results;
      })()).join('');
      this.eq((Ωdbrh__85 = function() {
        return chrs;
      }), 'AABDEEFHIIJNNOOPTUUVZaabdeefhiijnooptuuvz');
      //.......................................................................................................
      chrs = ((function() {
        var results;
        results = [];
        for (row of h.walk(SQL`select * from hrd_inspection_points order by point;`)) {
          results.push(as_chr(row.point));
        }
        return results;
      })()).join('');
      this.eq((Ωdbrh__86 = function() {
        return chrs;
      }), 'ABDEFHIJMNOPTUVZ[`abdefhijnoptuvz');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    _dbric_hoard_visualize_infinity: function() {
      var h;
      //.......................................................................................................
      h = Hoard.rebuild();
      insert_unicode_exclusions(h);
      h.hrd_visualize({
        lo: cid_of('A'),
        hi: cid_of('z')
      });
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
        ca.wrap_class(Hoard);
      }
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
      // ( new Test guytest_cfg ).test { dbric_hoard_plugin_regularize: tests.dbric_hoard_plugin_regularize, }
      // ( new Test guytest_cfg ).test { dbric_dynamic_build_properties: tests.dbric_dynamic_build_properties, }
      //---------------------------------------------------------------------------------------------------------
      if (do_coverage) {
        if (ca.unused_names.length > 0) {
          ref = ca.unused_names;
          for (i = 0, len = ref.length; i < len; i++) {
            name = ref[i];
            warn('Ωdbrh__87', "not covered:", reverse(name));
          }
        }
      }
      // help 'Ωdbrh__88', ca.used_names
      // urge 'Ωdbrh__89', count, names for count, names of ca.names_by_counts
      //=========================================================================================================
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMtaG9hcmQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBLGtCQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEseUJBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxPQUFBLEVBQUEsWUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7SUFBQSxvQkFBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQix1QkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNF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LElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFkLENBQUosRUFBMkMsSUFBM0M7ZUFDQztNQWJBLENBQUEsSUFYUDs7YUEwQks7SUEzQndCLENBQTNCOztJQThCQSw2QkFBQSxFQUErQixRQUFBLENBQUEsQ0FBQTtBQUNqQyxVQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsZ0JBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxF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QUNFLENBQUEsQ0FBRSxpQkFBRixDQUFBLEdBQWtDLE9BQUEsQ0FBUSx5REFBUixDQUFsQztRQUNBLEVBQUEsR0FBSyxJQUFJLGlCQUFKLENBQUE7UUFDTCxFQUFFLENBQUMsVUFBSCxDQUFjLEtBQWQsRUFIRjtPQUZGOztNQU9FLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLElBQXZDO1FBQTZDLGFBQUEsRUFBZTtNQUE1RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsQ0FBRSxLQUFGLENBQTlCLEVBVkY7Ozs7TUFjRSxJQUFHLFdBQUg7UUFDRSxJQUE4RSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQWhCLEdBQXlCLENBQXZHO0FBQUE7VUFBQSxLQUFBLHFDQUFBOztZQUFBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLGNBQWxCLEVBQWtDLE9BQUEsQ0FBUSxJQUFSLENBQWxDO1VBQUEsQ0FBQTtTQURGO09BZEY7Ozs7YUFtQkc7SUFwQnFDLENBQUEsSUFBeEM7O0FBck9BIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtZGJyaWMtaG9hcmQnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbnsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5QQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG57IERicmljLFxuICBEYnJpY19zdGQsXG4gIElETixcbiAgTElULFxuICBTUUwsXG4gIFZFQyxcbiAgZnJvbV9ib29sLFxuICBhc19ib29sLFxuICBUcnVlLFxuICBGYWxzZSxcbiAgdW5xdW90ZV9uYW1lLCAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2RicmljJ1xuIyB7IGxldHMsICAgICAgICAgICAgICAgICB9ID0gaW50ZXJuYWxzXG57IEhvYXJkLFxuICBkYnJpY19ob2FyZF9wbHVnaW4sICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvaW50ZXJtaXNzaW9uJ1xueyB0eXBlX29mLCAgICAgICAgICAgICAgfSA9ICggcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi91bnN0YWJsZS1ycHItdHlwZV9vZi1icmljcycgKS5yZXF1aXJlX3R5cGVfb2YoKVxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNpZF9vZiAgPSAoIHggKSAtPiB4LmNvZGVQb2ludEF0IDBcbmFzX2NociAgPSAoIG4gKSAtPiBTdHJpbmcuZnJvbUNvZGVQb2ludCBuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbnNlcnRfdW5pY29kZV9leGNsdXNpb25zID0gKCBoICkgLT5cbiAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogLUluZmluaXR5LCBoaTogICAgICAgIC0xLCBrZXk6ICckeCcsIHZhbHVlOiBcIm5lZ2F0aXZlIENJRHNcIiwgICB9XG4gIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4MDAwMCwgaGk6ICAgIDB4MDAwMCwga2V5OiAnJHgnLCB2YWx1ZTogXCJ6ZXJvIGJ5dGVzXCIsICAgICAgfVxuICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGQ4MDAsIGhpOiAgICAweGRiZmYsIGtleTogJyR4JywgdmFsdWU6IFwiaGlnaCBzdXJyb2dhdGVzXCIsIH1cbiAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogICAgMHhkYzAwLCBoaTogICAgMHhkZmZmLCBrZXk6ICckeCcsIHZhbHVlOiBcImxvdyBzdXJyb2dhdGVzXCIsICB9XG4gIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4ZmRkMCwgaGk6ICAgIDB4ZmRlZiwga2V5OiAnJHgnLCB2YWx1ZTogXCJub25jaGFyYWN0ZXJzXCIsICAgfVxuICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgICAweGZmZmUsIGhpOiAgICAweGZmZmYsIGtleTogJyR4JywgdmFsdWU6IFwibm9uY2hhcmFjdGVyc1wiLCAgIH1cbiAgaC5zdGF0ZW1lbnRzLl9ocmRfaW5zZXJ0X3J1bi5ydW4geyBsbzogIDB4MTEwMDAwLCBoaTogK0luZmluaXR5LCBrZXk6ICckeCcsIHZhbHVlOiBcImV4Y2Vzc2l2ZSBDSURzXCIsICB9XG4gIDtudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfaG9hcmRfcGx1Z2luX2Jhc2ljczogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGggPSBIb2FyZC5yZWJ1aWxkKClcbiAgICBAZXEgKCDOqWRicmhfX18xID0gLT4gJ3N0ZF9nZXRfdGFibGVzJyAgICAgICAgIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX19fMiA9IC0+ICdocmRfZmluZF9ydW5zJyAgICAgICAgICBpbiBPYmplY3Qua2V5cyBoLnN0YXRlbWVudHMgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzMgPSAtPiAnX2hyZF9pbnNlcnRfcnVuJyAgICAgICAgaW4gT2JqZWN0LmtleXMgaC5zdGF0ZW1lbnRzICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX180ID0gLT4gJ2hyZF9maW5kX2NvdmVyaW5nX3J1bnMnIGluIE9iamVjdC5rZXlzIGguc3RhdGVtZW50cyApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBpbnNlcnRfdW5pY29kZV9leGNsdXNpb25zIGhcbiAgICBoLnN0YXRlbWVudHMuX2hyZF9pbnNlcnRfcnVuLnJ1biB7IGxvOiAgIC0weDAwMGEsIGhpOiAgICAweDAwMDAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicsICAgICAgfVxuICAgIGguc3RhdGVtZW50cy5faHJkX2luc2VydF9ydW4ucnVuIHsgbG86ICAgIDB4MDAwMCwgaGk6ICAgIDB4MDAwYSwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJywgICAgICB9XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBoLnN0YXRlbWVudHMuaHJkX2ZpbmRfcnVuc1xuICAgICAgcm93cyA9IGgud2FsayBoLnN0YXRlbWVudHMuaHJkX2ZpbmRfcnVuc1xuICAgICAgQGVxICggzqlkYnJoX19fNSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTEnLCBpbm9ybjogMSwgbG86IC1JbmZpbml0eSwgaGk6IC0xLCBrZXk6ICckeCcsIHZhbHVlOiAnbmVnYXRpdmUgQ0lEcycgfVxuICAgICAgQGVxICggzqlkYnJoX19fNiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTgnLCBpbm9ybjogOCwgbG86IC0xMCwgaGk6IDAsIGtleTogJ2ZvbycsIHZhbHVlOiAnXCJiYXJcIicgfVxuICAgICAgQGVxICggzqlkYnJoX19fNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTInLCBpbm9ybjogMiwgbG86IDAsIGhpOiAwLCBrZXk6ICckeCcsIHZhbHVlOiAnemVybyBieXRlcycgfVxuICAgICAgQGVxICggzqlkYnJoX19fOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTknLCBpbm9ybjogOSwgbG86IDAsIGhpOiAxMCwga2V5OiAnZm9vJywgdmFsdWU6ICdcImJhclwiJyB9XG4gICAgICBAZXEgKCDOqWRicmhfX185ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MycsIGlub3JuOiAzLCBsbzogNTUyOTYsIGhpOiA1NjMxOSwga2V5OiAnJHgnLCB2YWx1ZTogJ2hpZ2ggc3Vycm9nYXRlcycgfVxuICAgICAgQGVxICggzqlkYnJoX18xMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTQnLCBpbm9ybjogNCwgbG86IDU2MzIwLCBoaTogNTczNDMsIGtleTogJyR4JywgdmFsdWU6ICdsb3cgc3Vycm9nYXRlcycgfVxuICAgICAgQGVxICggzqlkYnJoX18xMSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTUnLCBpbm9ybjogNSwgbG86IDY0OTc2LCBoaTogNjUwMDcsIGtleTogJyR4JywgdmFsdWU6ICdub25jaGFyYWN0ZXJzJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzEyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NicsIGlub3JuOiA2LCBsbzogNjU1MzQsIGhpOiA2NTUzNSwga2V5OiAnJHgnLCB2YWx1ZTogJ25vbmNoYXJhY3RlcnMnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSAgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj03JywgaW5vcm46IDcsIGxvOiAxMTE0MTEyLCBoaTogSW5maW5pdHksIGtleTogJyR4JywgdmFsdWU6ICdleGNlc3NpdmUgQ0lEcycgfVxuICAgICAgQGVxICggzqlkYnJoX18xNCA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2hvYXJkX3BsdWdpbl9yZWd1bGFyaXplOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaCAgICAgICAgICAgICAgICAgPSBIb2FyZC5yZWJ1aWxkKClcbiAgICBjb2xvcnNfYnlfZmFjZXRzICA9XG4gICAgICAndm93ZWw6dHJ1ZSc6ICAgICBHVVkudHJtLmdvbGRcbiAgICAgICd2b3dlbDpmYWxzZSc6ICAgIEdVWS50cm0uYmx1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaC5ocmRfYWRkX3J1biBjaWQsIG51bGwsICd1YycsIHRydWUgZm9yIGNpZCBpbiBbICggY2lkX29mICdBJyApIC4uICggY2lkX29mICdaJyApIF1cbiAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCAoIGNpZF9vZiAnWicgKSwgJ3Zvd2VsJywgZmFsc2VcbiAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdhJyApLCAoIGNpZF9vZiAneicgKSwgJ3Zvd2VsJywgZmFsc2VcbiAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdBJyApLCBudWxsLCAndm93ZWwnLCB0cnVlXG4gICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnQScgKSwgbnVsbCwgJ3Zvd2VsJywgdHJ1ZVxuICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0UnICksIG51bGwsICd2b3dlbCcsIHRydWVcbiAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdJJyApLCBudWxsLCAndm93ZWwnLCB0cnVlXG4gICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnTycgKSwgbnVsbCwgJ3Zvd2VsJywgdHJ1ZVxuICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ1UnICksIG51bGwsICd2b3dlbCcsIHRydWVcbiAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdOJyApLCAoIGNpZF9vZiAnWicgKSwgJ3VwcGVyJywgdHJ1ZVxuICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ0EnICksICggY2lkX29mICdEJyApLCAndmdyb3VwJywgJ0EnXG4gICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnSScgKSwgKCBjaWRfb2YgJ04nICksICd2Z3JvdXAnLCAnSSdcbiAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdhJyApLCBudWxsLCAndm93ZWwnLCB0cnVlXG4gICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnZScgKSwgbnVsbCwgJ3Zvd2VsJywgdHJ1ZVxuICAgIGguaHJkX2FkZF9ydW4gKCBjaWRfb2YgJ2knICksIG51bGwsICd2b3dlbCcsIHRydWVcbiAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICdvJyApLCBudWxsLCAndm93ZWwnLCB0cnVlXG4gICAgaC5ocmRfYWRkX3J1biAoIGNpZF9vZiAnZCcgKSwgbnVsbCwgJ3Zvd2VsJywgZmFsc2VcbiAgICBoLmhyZF9hZGRfcnVuICggY2lkX29mICd1JyApLCBudWxsLCAndm93ZWwnLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBocmRfcnVucyBvcmRlciBieSBpbm9ybjtcIlxuICAgIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ydW5zIG9yZGVyIGJ5IGlub3JuO1wiXG4gICAgQGVxICggzqlkYnJoX18xNSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MScsIGlub3JuOiAxLCBsbzogNjUsIGhpOiA2NSwgZmFjZXQ6ICd1Yzp0cnVlJywga2V5OiAndWMnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICBAZXEgKCDOqWRicmhfXzE2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0yJywgaW5vcm46IDIsIGxvOiA2NiwgaGk6IDY2LCBmYWNldDogJ3VjOnRydWUnLCBrZXk6ICd1YycsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fMTcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTMnLCBpbm9ybjogMywgbG86IDY3LCBoaTogNjcsIGZhY2V0OiAndWM6dHJ1ZScsIGtleTogJ3VjJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX18xOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NCcsIGlub3JuOiA0LCBsbzogNjgsIGhpOiA2OCwgZmFjZXQ6ICd1Yzp0cnVlJywga2V5OiAndWMnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICBAZXEgKCDOqWRicmhfXzE5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj01JywgaW5vcm46IDUsIGxvOiA2OSwgaGk6IDY5LCBmYWNldDogJ3VjOnRydWUnLCBrZXk6ICd1YycsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fMjAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTYnLCBpbm9ybjogNiwgbG86IDcwLCBoaTogNzAsIGZhY2V0OiAndWM6dHJ1ZScsIGtleTogJ3VjJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX18yMSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NycsIGlub3JuOiA3LCBsbzogNzEsIGhpOiA3MSwgZmFjZXQ6ICd1Yzp0cnVlJywga2V5OiAndWMnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICBAZXEgKCDOqWRicmhfXzIyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj04JywgaW5vcm46IDgsIGxvOiA3MiwgaGk6IDcyLCBmYWNldDogJ3VjOnRydWUnLCBrZXk6ICd1YycsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fMjMgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTknLCBpbm9ybjogOSwgbG86IDczLCBoaTogNzMsIGZhY2V0OiAndWM6dHJ1ZScsIGtleTogJ3VjJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX18yNCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MTAnLCBpbm9ybjogMTAsIGxvOiA3NCwgaGk6IDc0LCBmYWNldDogJ3VjOnRydWUnLCBrZXk6ICd1YycsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fMjUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTExJywgaW5vcm46IDExLCBsbzogNzUsIGhpOiA3NSwgZmFjZXQ6ICd1Yzp0cnVlJywga2V5OiAndWMnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICBAZXEgKCDOqWRicmhfXzI2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0xMicsIGlub3JuOiAxMiwgbG86IDc2LCBoaTogNzYsIGZhY2V0OiAndWM6dHJ1ZScsIGtleTogJ3VjJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX18yNyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MTMnLCBpbm9ybjogMTMsIGxvOiA3NywgaGk6IDc3LCBmYWNldDogJ3VjOnRydWUnLCBrZXk6ICd1YycsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fMjggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTE0JywgaW5vcm46IDE0LCBsbzogNzgsIGhpOiA3OCwgZmFjZXQ6ICd1Yzp0cnVlJywga2V5OiAndWMnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICBAZXEgKCDOqWRicmhfXzI5ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0xNScsIGlub3JuOiAxNSwgbG86IDc5LCBoaTogNzksIGZhY2V0OiAndWM6dHJ1ZScsIGtleTogJ3VjJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX18zMCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MTYnLCBpbm9ybjogMTYsIGxvOiA4MCwgaGk6IDgwLCBmYWNldDogJ3VjOnRydWUnLCBrZXk6ICd1YycsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fMzEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTE3JywgaW5vcm46IDE3LCBsbzogODEsIGhpOiA4MSwgZmFjZXQ6ICd1Yzp0cnVlJywga2V5OiAndWMnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICBAZXEgKCDOqWRicmhfXzMyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0xOCcsIGlub3JuOiAxOCwgbG86IDgyLCBoaTogODIsIGZhY2V0OiAndWM6dHJ1ZScsIGtleTogJ3VjJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX18zMyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MTknLCBpbm9ybjogMTksIGxvOiA4MywgaGk6IDgzLCBmYWNldDogJ3VjOnRydWUnLCBrZXk6ICd1YycsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fMzQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTIwJywgaW5vcm46IDIwLCBsbzogODQsIGhpOiA4NCwgZmFjZXQ6ICd1Yzp0cnVlJywga2V5OiAndWMnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICBAZXEgKCDOqWRicmhfXzM1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0yMScsIGlub3JuOiAyMSwgbG86IDg1LCBoaTogODUsIGZhY2V0OiAndWM6dHJ1ZScsIGtleTogJ3VjJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX18zNiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MjInLCBpbm9ybjogMjIsIGxvOiA4NiwgaGk6IDg2LCBmYWNldDogJ3VjOnRydWUnLCBrZXk6ICd1YycsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fMzcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTIzJywgaW5vcm46IDIzLCBsbzogODcsIGhpOiA4NywgZmFjZXQ6ICd1Yzp0cnVlJywga2V5OiAndWMnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICBAZXEgKCDOqWRicmhfXzM4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0yNCcsIGlub3JuOiAyNCwgbG86IDg4LCBoaTogODgsIGZhY2V0OiAndWM6dHJ1ZScsIGtleTogJ3VjJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX18zOSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MjUnLCBpbm9ybjogMjUsIGxvOiA4OSwgaGk6IDg5LCBmYWNldDogJ3VjOnRydWUnLCBrZXk6ICd1YycsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fNDAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTI2JywgaW5vcm46IDI2LCBsbzogOTAsIGhpOiA5MCwgZmFjZXQ6ICd1Yzp0cnVlJywga2V5OiAndWMnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICBAZXEgKCDOqWRicmhfXzQxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0yNycsIGlub3JuOiAyNywgbG86IDY1LCBoaTogOTAsIGZhY2V0OiAndm93ZWw6ZmFsc2UnLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICBAZXEgKCDOqWRicmhfXzQyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0yOCcsIGlub3JuOiAyOCwgbG86IDk3LCBoaTogMTIyLCBmYWNldDogJ3Zvd2VsOmZhbHNlJywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgQGVxICggzqlkYnJoX180MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MjknLCBpbm9ybjogMjksIGxvOiA2NSwgaGk6IDY1LCBmYWNldDogJ3Zvd2VsOnRydWUnLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fNDQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTMwJywgaW5vcm46IDMwLCBsbzogNjUsIGhpOiA2NSwgZmFjZXQ6ICd2b3dlbDp0cnVlJywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICBAZXEgKCDOqWRicmhfXzQ1ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0zMScsIGlub3JuOiAzMSwgbG86IDY5LCBoaTogNjksIGZhY2V0OiAndm93ZWw6dHJ1ZScsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX180NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MzInLCBpbm9ybjogMzIsIGxvOiA3MywgaGk6IDczLCBmYWNldDogJ3Zvd2VsOnRydWUnLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fNDcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTMzJywgaW5vcm46IDMzLCBsbzogNzksIGhpOiA3OSwgZmFjZXQ6ICd2b3dlbDp0cnVlJywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICBAZXEgKCDOqWRicmhfXzQ4ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0zNCcsIGlub3JuOiAzNCwgbG86IDg1LCBoaTogODUsIGZhY2V0OiAndm93ZWw6dHJ1ZScsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX180OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MzUnLCBpbm9ybjogMzUsIGxvOiA3OCwgaGk6IDkwLCBmYWNldDogJ3VwcGVyOnRydWUnLCBrZXk6ICd1cHBlcicsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fNTAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTM2JywgaW5vcm46IDM2LCBsbzogNjUsIGhpOiA2OCwgZmFjZXQ6ICd2Z3JvdXA6XCJBXCInLCBrZXk6ICd2Z3JvdXAnLCB2YWx1ZTogJ1wiQVwiJyB9XG4gICAgQGVxICggzqlkYnJoX181MSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MzcnLCBpbm9ybjogMzcsIGxvOiA3MywgaGk6IDc4LCBmYWNldDogJ3Zncm91cDpcIklcIicsIGtleTogJ3Zncm91cCcsIHZhbHVlOiAnXCJJXCInIH1cbiAgICBAZXEgKCDOqWRicmhfXzUyID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj0zOCcsIGlub3JuOiAzOCwgbG86IDk3LCBoaTogOTcsIGZhY2V0OiAndm93ZWw6dHJ1ZScsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX181MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9MzknLCBpbm9ybjogMzksIGxvOiAxMDEsIGhpOiAxMDEsIGZhY2V0OiAndm93ZWw6dHJ1ZScsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX181NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NDAnLCBpbm9ybjogNDAsIGxvOiAxMDUsIGhpOiAxMDUsIGZhY2V0OiAndm93ZWw6dHJ1ZScsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX181NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NDEnLCBpbm9ybjogNDEsIGxvOiAxMTEsIGhpOiAxMTEsIGZhY2V0OiAndm93ZWw6dHJ1ZScsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX181NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NDInLCBpbm9ybjogNDIsIGxvOiAxMDAsIGhpOiAxMDAsIGZhY2V0OiAndm93ZWw6ZmFsc2UnLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICBAZXEgKCDOqWRicmhfXzU3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj00MycsIGlub3JuOiA0MywgbG86IDExNywgaGk6IDExNywgZmFjZXQ6ICd2b3dlbDp0cnVlJywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICBAZXEgKCDOqWRicmhfXzU4ID0gLT4gcm93cy5uZXh0KCkuZG9uZSApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBoLmhyZF92aXN1YWxpemUgeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAneicgKSwgfVxuICAgIGguaHJkX3JlZ3VsYXJpemUoKVxuICAgIGguaHJkX3Zpc3VhbGl6ZSB7IGxvOiAoIGNpZF9vZiAnQScgKSwgaGk6ICggY2lkX29mICd6JyApLCB9XG4gICAgIyBoLnRibF9lY2hvX2FzX3RleHQgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF90b3BydW5zO1wiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGVjaG8gcm93IGZvciByb3cgZnJvbSByb3dzID0gaC53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBocmRfcnVucyBvcmRlciBieSBpbm9ybjtcIlxuICAgIHJvd3MgPSBoLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ydW5zIG9yZGVyIGJ5IGlub3JuO1wiXG4gICAgQGVxICggzqlkYnJoX181OSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NDQnLCBpbm9ybjogNDQsIGxvOiA2NSwgaGk6IDkwLCBmYWNldDogJ3VjOnRydWUnLCBrZXk6ICd1YycsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fNjAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTQ1JywgaW5vcm46IDQ1LCBsbzogNzgsIGhpOiA5MCwgZmFjZXQ6ICd1cHBlcjp0cnVlJywga2V5OiAndXBwZXInLCB2YWx1ZTogJ3RydWUnIH1cbiAgICBAZXEgKCDOqWRicmhfXzYxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj00NicsIGlub3JuOiA0NiwgbG86IDY1LCBoaTogNjgsIGZhY2V0OiAndmdyb3VwOlwiQVwiJywga2V5OiAndmdyb3VwJywgdmFsdWU6ICdcIkFcIicgfVxuICAgIEBlcSAoIM6pZGJyaF9fNjIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTQ3JywgaW5vcm46IDQ3LCBsbzogNzMsIGhpOiA3OCwgZmFjZXQ6ICd2Z3JvdXA6XCJJXCInLCBrZXk6ICd2Z3JvdXAnLCB2YWx1ZTogJ1wiSVwiJyB9XG4gICAgQGVxICggzqlkYnJoX182MyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NDgnLCBpbm9ybjogNDgsIGxvOiA2NiwgaGk6IDY4LCBmYWNldDogJ3Zvd2VsOmZhbHNlJywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgQGVxICggzqlkYnJoX182NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NDknLCBpbm9ybjogNDksIGxvOiA3MCwgaGk6IDcyLCBmYWNldDogJ3Zvd2VsOmZhbHNlJywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgQGVxICggzqlkYnJoX182NSA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NTAnLCBpbm9ybjogNTAsIGxvOiA3NCwgaGk6IDc4LCBmYWNldDogJ3Zvd2VsOmZhbHNlJywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgQGVxICggzqlkYnJoX182NiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NTEnLCBpbm9ybjogNTEsIGxvOiA4MCwgaGk6IDg0LCBmYWNldDogJ3Zvd2VsOmZhbHNlJywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgQGVxICggzqlkYnJoX182NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NTInLCBpbm9ybjogNTIsIGxvOiA4NiwgaGk6IDkwLCBmYWNldDogJ3Zvd2VsOmZhbHNlJywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgQGVxICggzqlkYnJoX182OCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NTMnLCBpbm9ybjogNTMsIGxvOiA5OCwgaGk6IDEwMCwgZmFjZXQ6ICd2b3dlbDpmYWxzZScsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fNjkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTU0JywgaW5vcm46IDU0LCBsbzogMTAyLCBoaTogMTA0LCBmYWNldDogJ3Zvd2VsOmZhbHNlJywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgQGVxICggzqlkYnJoX183MCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NTUnLCBpbm9ybjogNTUsIGxvOiAxMDYsIGhpOiAxMTAsIGZhY2V0OiAndm93ZWw6ZmFsc2UnLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAnZmFsc2UnIH1cbiAgICBAZXEgKCDOqWRicmhfXzcxID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj01NicsIGlub3JuOiA1NiwgbG86IDExMiwgaGk6IDExNiwgZmFjZXQ6ICd2b3dlbDpmYWxzZScsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICdmYWxzZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fNzIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTU3JywgaW5vcm46IDU3LCBsbzogNjUsIGhpOiA2NSwgZmFjZXQ6ICd2b3dlbDp0cnVlJywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICBAZXEgKCDOqWRicmhfXzczID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj01OCcsIGlub3JuOiA1OCwgbG86IDY5LCBoaTogNjksIGZhY2V0OiAndm93ZWw6dHJ1ZScsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX183NCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NTknLCBpbm9ybjogNTksIGxvOiA3MywgaGk6IDczLCBmYWNldDogJ3Zvd2VsOnRydWUnLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fNzUgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTYwJywgaW5vcm46IDYwLCBsbzogNzksIGhpOiA3OSwgZmFjZXQ6ICd2b3dlbDp0cnVlJywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ3RydWUnIH1cbiAgICBAZXEgKCDOqWRicmhfXzc2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnM6Uj02MScsIGlub3JuOiA2MSwgbG86IDg1LCBoaTogODUsIGZhY2V0OiAndm93ZWw6dHJ1ZScsIGtleTogJ3Zvd2VsJywgdmFsdWU6ICd0cnVlJyB9XG4gICAgQGVxICggzqlkYnJoX183NyA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zOlI9NjInLCBpbm9ybjogNjIsIGxvOiA5NywgaGk6IDk3LCBmYWNldDogJ3Zvd2VsOnRydWUnLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fNzggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTYzJywgaW5vcm46IDYzLCBsbzogMTAxLCBoaTogMTAxLCBmYWNldDogJ3Zvd2VsOnRydWUnLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fNzkgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTY0JywgaW5vcm46IDY0LCBsbzogMTA1LCBoaTogMTA1LCBmYWNldDogJ3Zvd2VsOnRydWUnLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fODAgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTY1JywgaW5vcm46IDY1LCBsbzogMTExLCBoaTogMTExLCBmYWNldDogJ3Zvd2VsOnRydWUnLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fODEgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTY2JywgaW5vcm46IDY2LCBsbzogMTE3LCBoaTogMTE3LCBmYWNldDogJ3Zvd2VsOnRydWUnLCBrZXk6ICd2b3dlbCcsIHZhbHVlOiAndHJ1ZScgfVxuICAgIEBlcSAoIM6pZGJyaF9fODIgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVuczpSPTY3JywgaW5vcm46IDY3LCBsbzogMTE4LCBoaTogMTIyLCBmYWNldDogJ3Zvd2VsOmZhbHNlJywga2V5OiAndm93ZWwnLCB2YWx1ZTogJ2ZhbHNlJyB9XG4gICAgQGVxICggzqlkYnJoX184MyA9IC0+IHJvd3MubmV4dCgpLmRvbmUgKSwgdHJ1ZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBlY2hvIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IGgud2FsayBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2dsb2JhbF9ib3VuZHMgb3JkZXIgYnkgcG9pbnQ7XCJcbiAgICByb3dzID0gaC5nZXRfYWxsIFNRTFwic2VsZWN0ICogZnJvbSBocmRfZ2xvYmFsX2JvdW5kcyBvcmRlciBieSBwb2ludDtcIlxuICAgIEBlcSAoIM6pZGJyaF9fODQgPSAtPiByb3dzICksIFsgeyBib3VuZDogJ21pbicsIHBvaW50OiA2NSB9LCB7IGJvdW5kOiAnbWF4JywgcG9pbnQ6IDEyMiB9IF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNocnMgPSAoICggYXNfY2hyIHJvdy5wb2ludCApIGZvciByb3cgZnJvbSBoLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9icmVha3BvaW50cyBvcmRlciBieSBwb2ludDtcIiApLmpvaW4gJydcbiAgICBAZXEgKCDOqWRicmhfXzg1ID0gLT4gY2hycyApLCAnQUFCREVFRkhJSUpOTk9PUFRVVVZaYWFiZGVlZmhpaWpub29wdHV1dnonXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjaHJzID0gKCAoIGFzX2NociByb3cucG9pbnQgKSBmb3Igcm93IGZyb20gaC53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBocmRfaW5zcGVjdGlvbl9wb2ludHMgb3JkZXIgYnkgcG9pbnQ7XCIgKS5qb2luICcnXG4gICAgQGVxICggzqlkYnJoX184NiA9IC0+IGNocnMgKSwgJ0FCREVGSElKTU5PUFRVVlpbYGFiZGVmaGlqbm9wdHV2eidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBfZGJyaWNfaG9hcmRfdmlzdWFsaXplX2luZmluaXR5OiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaCAgICAgICAgICAgICAgICAgPSBIb2FyZC5yZWJ1aWxkKClcbiAgICBpbnNlcnRfdW5pY29kZV9leGNsdXNpb25zIGhcbiAgICBoLmhyZF92aXN1YWxpemUgeyBsbzogKCBjaWRfb2YgJ0EnICksIGhpOiAoIGNpZF9vZiAneicgKSwgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBkb19jb3ZlcmFnZSA9IHRydWVcbiAgZG9fY292ZXJhZ2UgPSBmYWxzZVxuICBpZiBkb19jb3ZlcmFnZVxuICAgIHsgQ292ZXJhZ2VfYW5hbHl6ZXIsICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2NvdmVyYWdlLWFuYWx5emVyJ1xuICAgIGNhID0gbmV3IENvdmVyYWdlX2FuYWx5emVyKClcbiAgICBjYS53cmFwX2NsYXNzIEhvYXJkXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2hvYXJkX3BsdWdpbl9yZWd1bGFyaXplOiB0ZXN0cy5kYnJpY19ob2FyZF9wbHVnaW5fcmVndWxhcml6ZSwgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGJyaWNfZHluYW1pY19idWlsZF9wcm9wZXJ0aWVzOiB0ZXN0cy5kYnJpY19keW5hbWljX2J1aWxkX3Byb3BlcnRpZXMsIH1cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpZiBkb19jb3ZlcmFnZVxuICAgIHdhcm4gJ86pZGJyaF9fODcnLCBcIm5vdCBjb3ZlcmVkOlwiLCByZXZlcnNlIG5hbWUgZm9yIG5hbWUgaW4gY2EudW51c2VkX25hbWVzIGlmIGNhLnVudXNlZF9uYW1lcy5sZW5ndGggPiAwXG4gICAgIyBoZWxwICfOqWRicmhfXzg4JywgY2EudXNlZF9uYW1lc1xuICAgICMgdXJnZSAnzqlkYnJoX184OScsIGNvdW50LCBuYW1lcyBmb3IgY291bnQsIG5hbWVzIG9mIGNhLm5hbWVzX2J5X2NvdW50c1xuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIDtudWxsXG5cblxuIl19
