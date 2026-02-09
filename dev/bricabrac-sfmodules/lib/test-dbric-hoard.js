(async function() {
  'use strict';
  var Dbric, Dbric_std, FS, False, GTNG, GUY, Hoard, Hoard_extras, Hoard_user, IDN, LIT, PATH, Run, SFMODULES, SQL, Scatter, Test, True, VEC, alert, as_bool, blue, bold, debug, echo, f, from_bool, gold, green, grey, help, hoard_plugin, info, inspect, internals, lets, log, nfa, plain, praise, red, reverse, rpr, summarize_data, tests, unquote_name, urge, warn, whisper, white;

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

  ({Hoard, Scatter, Run, summarize_data, internals} = require('../../../apps/bricabrac-sfmodules/lib/intermission'));

  ({lets} = internals);

  //===========================================================================================================
  hoard_plugin = {
    name: 'hoard',
    prefix: 'hrd',
    exports: {
      //---------------------------------------------------------------------------------------------------
      build: function() {
        var R, cfg;
        //.................................................................................................
        /* TAINT stopgap solution */
        cfg = {
          runs_rowid_regexp: '.+',
          first_point: 0x00_0000,
          last_point: 0x10_ffff
        };
        //.................................................................................................
        R = [];
        //-------------------------------------------------------------------------------------------------
        R.push(SQL`create table hrd_hoard_scatters (
    rowid     text    unique  not null,
    is_hit    boolean         not null default false,
    data      json            not null default 'null'
    );`);
        //-------------------------------------------------------------------------------------------------
        R.push(SQL`create table hrd_hoard_runs (
    rowid     text    unique  not null,
    lo        integer         not null,
    hi        integer         not null,
    scatter   text            not null,
  -- primary key ( rowid ),
  foreign key ( scatter ) references hrd_hoard_scatters ( rowid ),
  constraint "Ωconstraint___1" check ( rowid regexp ${LIT(cfg.runs_rowid_regexp)} ),
  constraint "Ωconstraint___2" check ( lo between ${LIT(cfg.first_point)} and ${LIT(cfg.last_point)} ),
  constraint "Ωconstraint___3" check ( hi between ${LIT(cfg.first_point)} and ${LIT(cfg.last_point)} ),
  constraint "Ωconstraint___4" check ( lo <= hi )
  -- constraint "Ωconstraint___5" check ( rowid regexp '^.*$' )
  );`);
        //-------------------------------------------------------------------------------------------------------
        return R;
      },
      statements: {
        hrd_yyy: SQL`select 1 as n;`,
        hrd_insert_scatter: SQL`insert into hrd_hoard_scatters ( rowid, is_hit, data )
values ( $rowid, $is_hit, $data );`,
        hrd_insert_run: SQL`insert into hrd_hoard_runs ( rowid, lo, hi, scatter )
values ( $rowid, $lo, $hi, $scatter );`
      }
    }
  };

  Hoard_user = (function() {
    //=======================================================================================================
    class Hoard_user extends Dbric_std {};

    Hoard_user.prefix = 'jzr';

    // 'prototypes'
    Hoard_user.plugins = [hoard_plugin];

    return Hoard_user;

  }).call(this);

  //=======================================================================================================
  // 'me'
  Hoard_extras = class Hoard_extras extends Hoard {
    //-----------------------------------------------------------------------------------------------------
    constructor(db) {
      super();
      this.db = db;
      this.restore();
      void 0;
    }

    //-----------------------------------------------------------------------------------------------------
    restore() {
      /* TAINT use `Run._from_db_row()` */
      /* TAINT use `Scatter._from_db_row()` */
      var row, run, scatter, scatters;
      scatters = {};
      for (row of this.db.walk(SQL`select * from hrd_hoard_scatters order by rowid;`)) {
        scatter = new Scatter(this, JSON.parse(row.data), {
          rowid: row.rowid,
          is_normalized: true
        });
        scatters[scatter.rowid] = scatter;
        this.scatters.push(scatter);
      }
      for (row of this.db.walk(SQL`select * from hrd_hoard_runs order by rowid;`)) {
        run = new Run({
          lo: row.lo,
          hi: row.hi
        });
        run.rowid = row.rowid;
        this.state.run_rowid = Math.max(this.state.run_rowid, Number(run.rowid.replace(/^.*=/, '')));
        run.scatter = row.scatter;
        scatters[run.scatter].runs = lets(scatters[run.scatter].runs, function(runs) {
          return runs.push(run);
        });
      }
      return null;
    }

    //-----------------------------------------------------------------------------------------------------
    save() {
      var data, i, is_hit, j, len, len1, ref, ref1, run, scatter;
      ref = this.scatters;
      for (i = 0, len = ref.length; i < len; i++) {
        scatter = ref[i];
        scatter.normalize();
        is_hit = from_bool(true);
        data = JSON.stringify(scatter.data);
        this.db.statements.hrd_insert_scatter.run({...scatter, is_hit, data});
        ref1 = scatter.runs;
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          run = ref1[j];
          this.db.statements.hrd_insert_run.run({...run});
        }
      }
      return null;
    }

  };

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    dbric_hoard_plugin_model: function() {
      var names, row, u, Ωdbrh__10, Ωdbrh__11, Ωdbrh__12, Ωdbrh__13, Ωdbrh__14, Ωdbrh___7, Ωdbrh___8, Ωdbrh___9;
      //.......................................................................................................
      u = new Hoard_user({
        rebuild: true
      });
      // debug 'Ωdbrh___6', row.name for row from u.walk u.statements.std_get_relations
      names = new Set((function() {
        var results;
        results = [];
        for (row of u.walk(u.statements.std_get_relations)) {
          results.push(row.name);
        }
        return results;
      })());
      this.eq((Ωdbrh___7 = function() {
        return names.has('hrd_hoard_runs');
      }), true);
      this.eq((Ωdbrh___8 = function() {
        return names.has('hrd_hoard_scatters');
      }), true);
      this.eq((Ωdbrh___9 = function() {
        return names.has('std_functions');
      }), true);
      this.eq((Ωdbrh__10 = function() {
        return names.has('std_relations');
      }), true);
      this.eq((Ωdbrh__11 = function() {
        return names.has('std_tables');
      }), true);
      this.eq((Ωdbrh__12 = function() {
        return names.has('std_variables');
      }), true);
      this.eq((Ωdbrh__13 = function() {
        return names.has('std_views');
      }), true);
      this.eq((Ωdbrh__14 = function() {
        return u.get_all(u.statements.hrd_yyy);
      }), [
        {
          n: 1
        }
      ]);
      (() => {        //.......................................................................................................
        var ascii, h_1, rows, run, runs, Ωdbrh__15, Ωdbrh__16, Ωdbrh__17, Ωdbrh__18, Ωdbrh__19, Ωdbrh__20, Ωdbrh__21, Ωdbrh__22, Ωdbrh__23, Ωdbrh__24, Ωdbrh__25, Ωdbrh__26, Ωdbrh__27, Ωdbrh__28, Ωdbrh__29;
        h_1 = new Hoard_extras(u);
        ascii = h_1.add_scatter({
          is_ascii_alphanum: true
        });
        this.eq((Ωdbrh__15 = function() {
          return ascii.rowid;
        }), 't:hrd:scatters,R=1');
        ascii.add_run('a', 'z');
        ascii.add_run('A', 'Z');
        ascii.add_run('0', '9');
        ascii.normalize();
        for (run of runs = (function*() {
          return (yield* ascii.runs);
        })()) {
          echo(run);
        }
        this.eq((Ωdbrh__16 = function() {
          return h_1.state.run_rowid;
        }), 3);
        //.....................................................................................................
        runs = (function*() {
          return (yield* ascii.runs);
        })();
        this.eq((Ωdbrh__17 = function() {
          return ascii.rowid;
        }), 't:hrd:scatters,R=1');
        this.eq((Ωdbrh__18 = function() {
          return runs.next().value;
        }), {
          lo: 48,
          hi: 57,
          rowid: 't:hrd:runs,R=1',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωdbrh__19 = function() {
          return runs.next().value;
        }), {
          lo: 65,
          hi: 90,
          rowid: 't:hrd:runs,R=2',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωdbrh__20 = function() {
          return runs.next().value;
        }), {
          lo: 97,
          hi: 122,
          rowid: 't:hrd:runs,R=3',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωdbrh__21 = function() {
          return runs.next().done;
        }), true);
        this.eq((Ωdbrh__22 = function() {
          return h_1.summarize_data_for_point('&');
        }), null);
        this.eq((Ωdbrh__23 = function() {
          return h_1.summarize_data_for_point('a');
        }), {
          is_ascii_alphanum: [true]
        });
        //.....................................................................................................
        h_1.save();
        for (row of rows = u.walk(SQL`select * from hrd_hoard_scatters order by rowid;`)) {
          //.....................................................................................................
          echo(row);
        }
        rows = u.walk(SQL`select * from hrd_hoard_scatters order by rowid;`);
        this.eq((Ωdbrh__24 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:scatters,R=1',
          is_hit: 1,
          data: '{"is_ascii_alphanum":true}'
        });
        this.eq((Ωdbrh__25 = function() {
          return rows.next().done;
        }), true);
        for (row of rows = u.walk(SQL`select * from hrd_hoard_runs order by rowid;`)) {
          //.....................................................................................................
          echo(row);
        }
        rows = u.walk(SQL`select * from hrd_hoard_runs order by rowid;`);
        this.eq((Ωdbrh__26 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs,R=1',
          lo: 48,
          hi: 57,
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωdbrh__27 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs,R=2',
          lo: 65,
          hi: 90,
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωdbrh__28 = function() {
          return rows.next().value;
        }), {
          rowid: 't:hrd:runs,R=3',
          lo: 97,
          hi: 122,
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωdbrh__29 = function() {
          return rows.next().done;
        }), true);
        return null;
      })();
      (() => {        //.......................................................................................................
        var ascii, h_2, ref, run, runs, Ωdbrh__30, Ωdbrh__31, Ωdbrh__32, Ωdbrh__33, Ωdbrh__34, Ωdbrh__35, Ωdbrh__36, Ωdbrh__37, Ωdbrh__38;
        h_2 = new Hoard_extras(u);
        ascii = (ref = h_2.scatters.at(-1)) != null ? ref : {};
        this.eq((Ωdbrh__30 = function() {
          return ascii.rowid;
        }), 't:hrd:scatters,R=1');
        this.eq((Ωdbrh__31 = function() {
          return h_2.state.run_rowid;
        }), 3);
        for (run of runs = (function*() {
          var ref1;
          return (yield* ((ref1 = ascii.runs) != null ? ref1 : []));
        })()) {
          echo(run);
        }
        //.....................................................................................................
        runs = (function*() {
          var ref1;
          return (yield* ((ref1 = ascii.runs) != null ? ref1 : []));
        })();
        this.eq((Ωdbrh__32 = function() {
          return ascii.rowid;
        }), 't:hrd:scatters,R=1');
        this.eq((Ωdbrh__33 = function() {
          return runs.next().value;
        }), {
          lo: 48,
          hi: 57,
          rowid: 't:hrd:runs,R=1',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωdbrh__34 = function() {
          return runs.next().value;
        }), {
          lo: 65,
          hi: 90,
          rowid: 't:hrd:runs,R=2',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωdbrh__35 = function() {
          return runs.next().value;
        }), {
          lo: 97,
          hi: 122,
          rowid: 't:hrd:runs,R=3',
          scatter: 't:hrd:scatters,R=1'
        });
        this.eq((Ωdbrh__36 = function() {
          return runs.next().done;
        }), true);
        this.eq((Ωdbrh__37 = function() {
          return h_2.summarize_data_for_point('&');
        }), null);
        this.eq((Ωdbrh__38 = function() {
          return h_2.summarize_data_for_point('a');
        }), {
          is_ascii_alphanum: [true]
        });
        //.....................................................................................................
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
        ca.wrap_class(Dbric_std);
      }
      //---------------------------------------------------------------------------------------------------------
      guytest_cfg = {
        throw_on_error: false,
        show_passes: true,
        report_checks: true
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: false,
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
            warn('Ωdbrh__40', "not covered:", reverse(name));
          }
        }
      }
      // help 'Ωdbrh__41', ca.used_names
      // urge 'Ωdbrh__42', count, names for count, names of ca.names_by_counts
      //=========================================================================================================
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMtaG9hcmQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxZQUFBLEVBQUEsVUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxZQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxjQUFBLEVBQUEsS0FBQSxFQUFBLFlBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHVCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElB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QUYsQ0FBOUIsRUFWRjs7OztNQWNFLElBQUcsV0FBSDtRQUNFLElBQThFLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBaEIsR0FBeUIsQ0FBdkc7QUFBQTtVQUFBLEtBQUEscUNBQUE7O1lBQUEsSUFBQSxDQUFLLFdBQUwsRUFBa0IsY0FBbEIsRUFBa0MsT0FBQSxDQUFRLElBQVIsQ0FBbEM7VUFBQSxDQUFBO1NBREY7T0FkRjs7OzthQW1CRztJQXBCcUMsQ0FBQSxJQUF4Qzs7QUEvTkEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1kYnJpYy1ob2FyZCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5GUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnsgRGJyaWMsXG4gIERicmljX3N0ZCxcbiAgSUROLFxuICBMSVQsXG4gIFNRTCxcbiAgVkVDLFxuICBmcm9tX2Jvb2wsXG4gIGFzX2Jvb2wsXG4gIFRydWUsXG4gIEZhbHNlLFxuICB1bnF1b3RlX25hbWUsICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvZGJyaWMnXG57IEhvYXJkLFxuICBTY2F0dGVyLFxuICBSdW4sXG4gIHN1bW1hcml6ZV9kYXRhLFxuICBpbnRlcm5hbHMsICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvaW50ZXJtaXNzaW9uJ1xueyBsZXRzLCAgICAgICAgICAgICAgICAgfSA9IGludGVybmFsc1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaG9hcmRfcGx1Z2luID1cbiAgbmFtZTogICAgICdob2FyZCdcbiAgcHJlZml4OiAgICdocmQnXG4gIGV4cG9ydHM6XG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGJ1aWxkOiAtPlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMjIyBUQUlOVCBzdG9wZ2FwIHNvbHV0aW9uICMjI1xuICAgICAgY2ZnID1cbiAgICAgICAgcnVuc19yb3dpZF9yZWdleHA6ICAgICAgICAnLisnXG4gICAgICAgIGZpcnN0X3BvaW50OiAgICAgICAgICAgICAgMHgwMF8wMDAwXG4gICAgICAgIGxhc3RfcG9pbnQ6ICAgICAgICAgICAgICAgMHgxMF9mZmZmXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgUiA9IFtdXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgUi5wdXNoIFNRTFwiXCJcIlxuICAgICAgICBjcmVhdGUgdGFibGUgaHJkX2hvYXJkX3NjYXR0ZXJzIChcbiAgICAgICAgICAgIHJvd2lkICAgICB0ZXh0ICAgIHVuaXF1ZSAgbm90IG51bGwsXG4gICAgICAgICAgICBpc19oaXQgICAgYm9vbGVhbiAgICAgICAgIG5vdCBudWxsIGRlZmF1bHQgZmFsc2UsXG4gICAgICAgICAgICBkYXRhICAgICAganNvbiAgICAgICAgICAgIG5vdCBudWxsIGRlZmF1bHQgJ251bGwnXG4gICAgICAgICAgICApO1wiXCJcIlxuXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgUi5wdXNoIFNRTFwiXCJcIlxuICAgICAgICBjcmVhdGUgdGFibGUgaHJkX2hvYXJkX3J1bnMgKFxuICAgICAgICAgICAgcm93aWQgICAgIHRleHQgICAgdW5pcXVlICBub3QgbnVsbCxcbiAgICAgICAgICAgIGxvICAgICAgICBpbnRlZ2VyICAgICAgICAgbm90IG51bGwsXG4gICAgICAgICAgICBoaSAgICAgICAgaW50ZWdlciAgICAgICAgIG5vdCBudWxsLFxuICAgICAgICAgICAgc2NhdHRlciAgIHRleHQgICAgICAgICAgICBub3QgbnVsbCxcbiAgICAgICAgICAtLSBwcmltYXJ5IGtleSAoIHJvd2lkICksXG4gICAgICAgICAgZm9yZWlnbiBrZXkgKCBzY2F0dGVyICkgcmVmZXJlbmNlcyBocmRfaG9hcmRfc2NhdHRlcnMgKCByb3dpZCApLFxuICAgICAgICAgIGNvbnN0cmFpbnQgXCLOqWNvbnN0cmFpbnRfX18xXCIgY2hlY2sgKCByb3dpZCByZWdleHAgI3tMSVQgY2ZnLnJ1bnNfcm93aWRfcmVnZXhwIH0gKSxcbiAgICAgICAgICBjb25zdHJhaW50IFwizqljb25zdHJhaW50X19fMlwiIGNoZWNrICggbG8gYmV0d2VlbiAje0xJVCBjZmcuZmlyc3RfcG9pbnR9IGFuZCAje0xJVCBjZmcubGFzdF9wb2ludH0gKSxcbiAgICAgICAgICBjb25zdHJhaW50IFwizqljb25zdHJhaW50X19fM1wiIGNoZWNrICggaGkgYmV0d2VlbiAje0xJVCBjZmcuZmlyc3RfcG9pbnR9IGFuZCAje0xJVCBjZmcubGFzdF9wb2ludH0gKSxcbiAgICAgICAgICBjb25zdHJhaW50IFwizqljb25zdHJhaW50X19fNFwiIGNoZWNrICggbG8gPD0gaGkgKVxuICAgICAgICAgIC0tIGNvbnN0cmFpbnQgXCLOqWNvbnN0cmFpbnRfX181XCIgY2hlY2sgKCByb3dpZCByZWdleHAgJ14uKiQnIClcbiAgICAgICAgICApO1wiXCJcIlxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHJldHVybiBSXG4gICAgc3RhdGVtZW50czpcbiAgICAgIGhyZF95eXk6IFNRTFwic2VsZWN0IDEgYXMgbjtcIlxuICAgICAgaHJkX2luc2VydF9zY2F0dGVyOiBTUUxcIlwiXCJpbnNlcnQgaW50byBocmRfaG9hcmRfc2NhdHRlcnMgKCByb3dpZCwgaXNfaGl0LCBkYXRhIClcbiAgICAgICAgdmFsdWVzICggJHJvd2lkLCAkaXNfaGl0LCAkZGF0YSApO1wiXCJcIlxuICAgICAgaHJkX2luc2VydF9ydW46IFNRTFwiXCJcImluc2VydCBpbnRvIGhyZF9ob2FyZF9ydW5zICggcm93aWQsIGxvLCBoaSwgc2NhdHRlciApXG4gICAgICAgIHZhbHVlcyAoICRyb3dpZCwgJGxvLCAkaGksICRzY2F0dGVyICk7XCJcIlwiXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jbGFzcyBIb2FyZF91c2VyIGV4dGVuZHMgRGJyaWNfc3RkXG4gIEBwcmVmaXg6ICAnanpyJ1xuICBAcGx1Z2luczogW1xuICAgICMgJ3Byb3RvdHlwZXMnXG4gICAgaG9hcmRfcGx1Z2luXG4gICAgIyAnbWUnXG4gICAgXVxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY2xhc3MgSG9hcmRfZXh0cmFzIGV4dGVuZHMgSG9hcmRcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3RydWN0b3I6ICggZGIgKSAtPlxuICAgIHN1cGVyKClcbiAgICBAZGIgPSBkYlxuICAgIEByZXN0b3JlKClcbiAgICA7dW5kZWZpbmVkXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlc3RvcmU6IC0+XG4gICAgc2NhdHRlcnMgPSB7fVxuICAgIGZvciByb3cgZnJvbSBAZGIud2FsayBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2hvYXJkX3NjYXR0ZXJzIG9yZGVyIGJ5IHJvd2lkO1wiXG4gICAgICAjIyMgVEFJTlQgdXNlIGBTY2F0dGVyLl9mcm9tX2RiX3JvdygpYCAjIyNcbiAgICAgIHNjYXR0ZXIgICAgICAgICAgICAgICAgICAgICAgID0gbmV3IFNjYXR0ZXIgQCwgKCBKU09OLnBhcnNlIHJvdy5kYXRhICksIHsgcm93aWQ6IHJvdy5yb3dpZCwgaXNfbm9ybWFsaXplZDogdHJ1ZSwgfVxuICAgICAgc2NhdHRlcnNbIHNjYXR0ZXIucm93aWQgXSAgICAgPSBzY2F0dGVyXG4gICAgICBAc2NhdHRlcnMucHVzaCBzY2F0dGVyXG4gICAgZm9yIHJvdyBmcm9tIEBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBocmRfaG9hcmRfcnVucyBvcmRlciBieSByb3dpZDtcIlxuICAgICAgIyMjIFRBSU5UIHVzZSBgUnVuLl9mcm9tX2RiX3JvdygpYCAjIyNcbiAgICAgIHJ1biAgICAgICAgICAgICAgICAgICAgICAgICAgID0gbmV3IFJ1biB7IGxvOiByb3cubG8sIGhpOiByb3cuaGksIH1cbiAgICAgIHJ1bi5yb3dpZCAgICAgICAgICAgICAgICAgICAgID0gcm93LnJvd2lkXG4gICAgICBAc3RhdGUucnVuX3Jvd2lkICAgICAgICAgICAgICA9IE1hdGgubWF4IEBzdGF0ZS5ydW5fcm93aWQsIE51bWJlciBydW4ucm93aWQucmVwbGFjZSAvXi4qPS8sICcnXG4gICAgICBydW4uc2NhdHRlciAgICAgICAgICAgICAgICAgICA9IHJvdy5zY2F0dGVyXG4gICAgICBzY2F0dGVyc1sgcnVuLnNjYXR0ZXIgXS5ydW5zICA9IGxldHMgc2NhdHRlcnNbIHJ1bi5zY2F0dGVyIF0ucnVucywgKCBydW5zICkgLT4gcnVucy5wdXNoIHJ1blxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNhdmU6IC0+XG4gICAgZm9yIHNjYXR0ZXIgaW4gQHNjYXR0ZXJzXG4gICAgICBzY2F0dGVyLm5vcm1hbGl6ZSgpXG4gICAgICBpc19oaXQgICAgICA9IGZyb21fYm9vbCB0cnVlXG4gICAgICBkYXRhICAgICAgICA9IEpTT04uc3RyaW5naWZ5IHNjYXR0ZXIuZGF0YVxuICAgICAgQGRiLnN0YXRlbWVudHMuaHJkX2luc2VydF9zY2F0dGVyLnJ1biB7IHNjYXR0ZXIuLi4sIGlzX2hpdCwgZGF0YSwgfVxuICAgICAgZm9yIHJ1biBpbiBzY2F0dGVyLnJ1bnNcbiAgICAgICAgQGRiLnN0YXRlbWVudHMuaHJkX2luc2VydF9ydW4ucnVuIHsgcnVuLi4uLCB9XG4gICAgO251bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRicmljX2hvYXJkX3BsdWdpbl9tb2RlbDogLT5cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHUgPSBuZXcgSG9hcmRfdXNlciB7IHJlYnVpbGQ6IHRydWUsIH1cbiAgICAjIGRlYnVnICfOqWRicmhfX182Jywgcm93Lm5hbWUgZm9yIHJvdyBmcm9tIHUud2FsayB1LnN0YXRlbWVudHMuc3RkX2dldF9yZWxhdGlvbnNcbiAgICBuYW1lcyA9IG5ldyBTZXQgKCByb3cubmFtZSBmb3Igcm93IGZyb20gdS53YWxrIHUuc3RhdGVtZW50cy5zdGRfZ2V0X3JlbGF0aW9ucyApXG4gICAgQGVxICggzqlkYnJoX19fNyA9IC0+IG5hbWVzLmhhcyAnaHJkX2hvYXJkX3J1bnMnICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzggPSAtPiBuYW1lcy5oYXMgJ2hyZF9ob2FyZF9zY2F0dGVycycgICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfX185ID0gLT4gbmFtZXMuaGFzICdzdGRfZnVuY3Rpb25zJyAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX18xMCA9IC0+IG5hbWVzLmhhcyAnc3RkX3JlbGF0aW9ucycgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fMTEgPSAtPiBuYW1lcy5oYXMgJ3N0ZF90YWJsZXMnICAgICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfXzEyID0gLT4gbmFtZXMuaGFzICdzdGRfdmFyaWFibGVzJyAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX18xMyA9IC0+IG5hbWVzLmhhcyAnc3RkX3ZpZXdzJyAgICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fMTQgPSAtPiB1LmdldF9hbGwgdS5zdGF0ZW1lbnRzLmhyZF95eXkgKSwgWyB7IG46IDEsIH0sIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBoXzEgPSBuZXcgSG9hcmRfZXh0cmFzIHVcbiAgICAgIGFzY2lpID0gaF8xLmFkZF9zY2F0dGVyIHsgaXNfYXNjaWlfYWxwaGFudW06IHRydWUsIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMTUgPSAtPiBhc2NpaS5yb3dpZCApLCAndDpocmQ6c2NhdHRlcnMsUj0xJ1xuICAgICAgYXNjaWkuYWRkX3J1biAnYScsICd6J1xuICAgICAgYXNjaWkuYWRkX3J1biAnQScsICdaJ1xuICAgICAgYXNjaWkuYWRkX3J1biAnMCcsICc5J1xuICAgICAgYXNjaWkubm9ybWFsaXplKClcbiAgICAgIGVjaG8gcnVuIGZvciBydW4gZnJvbSBydW5zID0gKCAtPiB5aWVsZCBmcm9tIGFzY2lpLnJ1bnMgKSgpXG4gICAgICBAZXEgKCDOqWRicmhfXzE2ID0gLT4gaF8xLnN0YXRlLnJ1bl9yb3dpZCAgICAgICAgICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJ1bnMgPSAoIC0+IHlpZWxkIGZyb20gYXNjaWkucnVucyApKClcbiAgICAgIEBlcSAoIM6pZGJyaF9fMTcgPSAtPiBhc2NpaS5yb3dpZCAgICAgICAgICAgICAgICAgICAgICksICd0OmhyZDpzY2F0dGVycyxSPTEnXG4gICAgICBAZXEgKCDOqWRicmhfXzE4ID0gLT4gcnVucy5uZXh0KCkudmFsdWUgICAgICAgICAgICAgICApLCB7IGxvOiA0OCwgaGk6IDU3LCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0xJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlkYnJoX18xOSA9IC0+IHJ1bnMubmV4dCgpLnZhbHVlICAgICAgICAgICAgICAgKSwgeyBsbzogNjUsIGhpOiA5MCwgcm93aWQ6ICd0OmhyZDpydW5zLFI9MicsIHNjYXR0ZXI6ICd0OmhyZDpzY2F0dGVycyxSPTEnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMjAgPSAtPiBydW5zLm5leHQoKS52YWx1ZSAgICAgICAgICAgICAgICksIHsgbG86IDk3LCBoaTogMTIyLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0zJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlkYnJoX18yMSA9IC0+IHJ1bnMubmV4dCgpLmRvbmUgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlkYnJoX18yMiA9IC0+IGhfMS5zdW1tYXJpemVfZGF0YV9mb3JfcG9pbnQgJyYnICApLCBudWxsXG4gICAgICBAZXEgKCDOqWRicmhfXzIzID0gLT4gaF8xLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAnYScgICksIHsgaXNfYXNjaWlfYWxwaGFudW06IFsgdHJ1ZSBdIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaF8xLnNhdmUoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBlY2hvIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IHUud2FsayBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2hvYXJkX3NjYXR0ZXJzIG9yZGVyIGJ5IHJvd2lkO1wiXG4gICAgICByb3dzID0gdS53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBocmRfaG9hcmRfc2NhdHRlcnMgb3JkZXIgYnkgcm93aWQ7XCJcbiAgICAgIEBlcSAoIM6pZGJyaF9fMjQgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6c2NhdHRlcnMsUj0xJywgaXNfaGl0OiAxLCBkYXRhOiAne1wiaXNfYXNjaWlfYWxwaGFudW1cIjp0cnVlfScgfVxuICAgICAgQGVxICggzqlkYnJoX18yNSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICksIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZWNobyByb3cgZm9yIHJvdyBmcm9tIHJvd3MgPSB1LndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ob2FyZF9ydW5zIG9yZGVyIGJ5IHJvd2lkO1wiXG4gICAgICByb3dzID0gdS53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBocmRfaG9hcmRfcnVucyBvcmRlciBieSByb3dpZDtcIlxuICAgICAgQGVxICggzqlkYnJoX18yNiA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zLFI9MScsIGxvOiA0OCwgaGk6IDU3LCBzY2F0dGVyOiAndDpocmQ6c2NhdHRlcnMsUj0xJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzI3ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0yJywgbG86IDY1LCBoaTogOTAsIHNjYXR0ZXI6ICd0OmhyZDpzY2F0dGVycyxSPTEnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMjggPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVucyxSPTMnLCBsbzogOTcsIGhpOiAxMjIsIHNjYXR0ZXI6ICd0OmhyZDpzY2F0dGVycyxSPTEnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMjkgPSAtPiByb3dzLm5leHQoKS5kb25lICApLCB0cnVlXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGhfMiA9IG5ldyBIb2FyZF9leHRyYXMgdVxuICAgICAgYXNjaWkgPSAoIGhfMi5zY2F0dGVycy5hdCAtMSApID8ge31cbiAgICAgIEBlcSAoIM6pZGJyaF9fMzAgPSAtPiBhc2NpaS5yb3dpZCApLCAndDpocmQ6c2NhdHRlcnMsUj0xJ1xuICAgICAgQGVxICggzqlkYnJoX18zMSA9IC0+IGhfMi5zdGF0ZS5ydW5fcm93aWQgICAgICAgICAgICAgICApLCAzXG4gICAgICBlY2hvIHJ1biBmb3IgcnVuIGZyb20gcnVucyA9ICggLT4geWllbGQgZnJvbSBhc2NpaS5ydW5zID8gW10gKSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJ1bnMgPSAoIC0+IHlpZWxkIGZyb20gYXNjaWkucnVucyA/IFtdICkoKVxuICAgICAgQGVxICggzqlkYnJoX18zMiA9IC0+IGFzY2lpLnJvd2lkICAgICAgICAgICAgICAgICAgICAgICApLCAndDpocmQ6c2NhdHRlcnMsUj0xJ1xuICAgICAgQGVxICggzqlkYnJoX18zMyA9IC0+IHJ1bnMubmV4dCgpLnZhbHVlICAgICAgICAgICAgICAgICApLCB7IGxvOiA0OCwgaGk6IDU3LCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0xJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlkYnJoX18zNCA9IC0+IHJ1bnMubmV4dCgpLnZhbHVlICAgICAgICAgICAgICAgICApLCB7IGxvOiA2NSwgaGk6IDkwLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0yJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlkYnJoX18zNSA9IC0+IHJ1bnMubmV4dCgpLnZhbHVlICAgICAgICAgICAgICAgICApLCB7IGxvOiA5NywgaGk6IDEyMiwgcm93aWQ6ICd0OmhyZDpydW5zLFI9MycsIHNjYXR0ZXI6ICd0OmhyZDpzY2F0dGVycyxSPTEnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMzYgPSAtPiBydW5zLm5leHQoKS5kb25lICAgICAgICAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlkYnJoX18zNyA9IC0+IGhfMi5zdW1tYXJpemVfZGF0YV9mb3JfcG9pbnQgJyYnICApLCBudWxsXG4gICAgICBAZXEgKCDOqWRicmhfXzM4ID0gLT4gaF8yLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAnYScgICksIHsgaXNfYXNjaWlfYWxwaGFudW06IFsgdHJ1ZSBdIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgO251bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZG9fY292ZXJhZ2UgPSB0cnVlXG4gIGRvX2NvdmVyYWdlID0gZmFsc2VcbiAgaWYgZG9fY292ZXJhZ2VcbiAgICB7IENvdmVyYWdlX2FuYWx5emVyLCAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9jb3ZlcmFnZS1hbmFseXplcidcbiAgICBjYSA9IG5ldyBDb3ZlcmFnZV9hbmFseXplcigpXG4gICAgY2Eud3JhcF9jbGFzcyBEYnJpY19zdGRcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGJyaWNfaG9hcmRfcGx1Z2luX21vZGVsOiB0ZXN0cy5kYnJpY19ob2FyZF9wbHVnaW5fbW9kZWwsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2R5bmFtaWNfYnVpbGRfcHJvcGVydGllczogdGVzdHMuZGJyaWNfZHluYW1pY19idWlsZF9wcm9wZXJ0aWVzLCB9XG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaWYgZG9fY292ZXJhZ2VcbiAgICB3YXJuICfOqWRicmhfXzQwJywgXCJub3QgY292ZXJlZDpcIiwgcmV2ZXJzZSBuYW1lIGZvciBuYW1lIGluIGNhLnVudXNlZF9uYW1lcyBpZiBjYS51bnVzZWRfbmFtZXMubGVuZ3RoID4gMFxuICAgICMgaGVscCAnzqlkYnJoX180MScsIGNhLnVzZWRfbmFtZXNcbiAgICAjIHVyZ2UgJ86pZGJyaF9fNDInLCBjb3VudCwgbmFtZXMgZm9yIGNvdW50LCBuYW1lcyBvZiBjYS5uYW1lc19ieV9jb3VudHNcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICA7bnVsbFxuXG5cbiJdfQ==
