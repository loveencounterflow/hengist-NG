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
      var Coverage_analyzer, ca, do_coverage, guytest_cfg, i, len, name, ref, wrap_methods_of_prototypes;
      do_coverage = true;
      do_coverage = false;
      if (do_coverage) {
        ({Coverage_analyzer} = require('../../../apps/bricabrac-sfmodules/lib/coverage-analyzer'));
        ca = new Coverage_analyzer();
        ca.wrap_class(Dbric_std);
      }
      ({wrap_methods_of_prototypes} = require('../../../apps/bricabrac-sfmodules/lib/prototype-tools'));
      // wrap_methods_of_prototypes Dbric_std, ({ fqname, callme, P, }) ->
      //   debug 'Ωdbrh__39', fqname #, P
      //   return callme()
      // db = new Dbric_std ':memory:', { rebuild: true, }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtZGJyaWMtaG9hcmQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxZQUFBLEVBQUEsVUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxZQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxjQUFBLEVBQUEsS0FBQSxFQUFBLFlBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHVCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBekJBOzs7RUEyQkEsQ0FBQSxDQUFFLEdBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEsNENBQVIsQ0FBNUI7O0VBQ0EsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsbUNBQVI7O0VBQzVCLEVBQUEsR0FBNEIsT0FBQSxDQUFRLFNBQVI7O0VBQzVCLElBQUEsR0FBNEIsT0FBQSxDQUFRLFdBQVIsRUFoQzVCOzs7RUFrQ0EsQ0FBQSxDQUFFLEtBQUYsRUFDRSxTQURGLEVBRUUsR0FGRixFQUdFLEdBSEYsRUFJRSxHQUpGLEVBS0UsR0FMRixFQU1FLFNBTkYsRUFPRSxPQVBGLEVBUUUsSUFSRixFQVNFLEtBVEYsRUFVRSxZQVZGLENBQUEsR0FVNEIsT0FBQSxDQUFRLDZDQUFSLENBVjVCOztFQVdBLENBQUEsQ0FBRSxLQUFGLEVBQ0UsT0FERixFQUVFLEdBRkYsRUFHRSxjQUhGLEVBSUUsU0FKRixDQUFBLEdBSTRCLE9BQUEsQ0FBUSxvREFBUixDQUo1Qjs7RUFLQSxDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLFNBQTVCLEVBbERBOzs7RUFzREEsWUFBQSxHQUNFO0lBQUEsSUFBQSxFQUFVLE9BQVY7SUFDQSxNQUFBLEVBQVUsS0FEVjtJQUVBLE9BQUEsRUFFRSxDQUFBOztNQUFBLEtBQUEsRUFBTyxRQUFBLENBQUEsQ0FBQTtBQUNYLFlBQUEsQ0FBQSxFQUFBLEdBQUE7OztRQUVNLEdBQUEsR0FDRTtVQUFBLGlCQUFBLEVBQTBCLElBQTFCO1VBQ0EsV0FBQSxFQUEwQixTQUQxQjtVQUVBLFVBQUEsRUFBMEI7UUFGMUIsRUFIUjs7UUFPTSxDQUFBLEdBQUksR0FQVjs7UUFTTSxDQUFDLENBQUMsSUFBRixDQUFPLEdBQUcsQ0FBQTs7OztNQUFBLENBQVYsRUFUTjs7UUFpQk0sQ0FBQyxDQUFDLElBQUYsQ0FBTyxHQUFHLENBQUE7Ozs7Ozs7b0RBQUEsQ0FBQSxDQVE4QyxHQUFBLENBQUksR0FBRyxDQUFDLGlCQUFSLENBUjlDLENBQUE7a0RBQUEsQ0FBQSxDQVM0QyxHQUFBLENBQUksR0FBRyxDQUFDLFdBQVIsQ0FUNUMsQ0FBQSxLQUFBLENBQUEsQ0FTdUUsR0FBQSxDQUFJLEdBQUcsQ0FBQyxVQUFSLENBVHZFLENBQUE7a0RBQUEsQ0FBQSxDQVU0QyxHQUFBLENBQUksR0FBRyxDQUFDLFdBQVIsQ0FWNUMsQ0FBQSxLQUFBLENBQUEsQ0FVdUUsR0FBQSxDQUFJLEdBQUcsQ0FBQyxVQUFSLENBVnZFLENBQUE7OztJQUFBLENBQVYsRUFqQk47O0FBZ0NNLGVBQU87TUFqQ0YsQ0FBUDtNQWtDQSxVQUFBLEVBQ0U7UUFBQSxPQUFBLEVBQVMsR0FBRyxDQUFBLGNBQUEsQ0FBWjtRQUNBLGtCQUFBLEVBQW9CLEdBQUcsQ0FBQTtrQ0FBQSxDQUR2QjtRQUdBLGNBQUEsRUFBZ0IsR0FBRyxDQUFBO3NDQUFBO01BSG5CO0lBbkNGO0VBSkY7O0VBOENJOztJQUFOLE1BQUEsV0FBQSxRQUF5QixVQUF6QixDQUFBOztJQUNFLFVBQUMsQ0FBQSxNQUFELEdBQVU7OztJQUNWLFVBQUMsQ0FBQSxPQUFELEdBQVUsQ0FFUixZQUZROzs7O2dCQXZHWjs7OztFQThHTSxlQUFOLE1BQUEsYUFBQSxRQUEyQixNQUEzQixDQUFBOztJQUdFLFdBQWEsQ0FBRSxFQUFGLENBQUE7V0FDWCxDQUFBO01BQ0EsSUFBQyxDQUFBLEVBQUQsR0FBTTtNQUNOLElBQUMsQ0FBQSxPQUFELENBQUE7TUFDQztJQUpVLENBRGY7OztJQVFFLE9BQVMsQ0FBQSxDQUFBLEVBQUE7OztBQUNYLFVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUE7TUFBSSxRQUFBLEdBQVcsQ0FBQTtNQUNYLEtBQUEsMEVBQUE7UUFFRSxPQUFBLEdBQWdDLElBQUksT0FBSixDQUFZLElBQVosRUFBaUIsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFHLENBQUMsSUFBZixDQUFqQixFQUF3QztVQUFFLEtBQUEsRUFBTyxHQUFHLENBQUMsS0FBYjtVQUFvQixhQUFBLEVBQWU7UUFBbkMsQ0FBeEM7UUFDaEMsUUFBUSxDQUFFLE9BQU8sQ0FBQyxLQUFWLENBQVIsR0FBZ0M7UUFDaEMsSUFBQyxDQUFBLFFBQVEsQ0FBQyxJQUFWLENBQWUsT0FBZjtNQUpGO01BS0EsS0FBQSxzRUFBQTtRQUVFLEdBQUEsR0FBZ0MsSUFBSSxHQUFKLENBQVE7VUFBRSxFQUFBLEVBQUksR0FBRyxDQUFDLEVBQVY7VUFBYyxFQUFBLEVBQUksR0FBRyxDQUFDO1FBQXRCLENBQVI7UUFDaEMsR0FBRyxDQUFDLEtBQUosR0FBZ0MsR0FBRyxDQUFDO1FBQ3BDLElBQUMsQ0FBQSxLQUFLLENBQUMsU0FBUCxHQUFnQyxJQUFJLENBQUMsR0FBTCxDQUFTLElBQUMsQ0FBQSxLQUFLLENBQUMsU0FBaEIsRUFBMkIsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBVixDQUFrQixNQUFsQixFQUEwQixFQUExQixDQUFQLENBQTNCO1FBQ2hDLEdBQUcsQ0FBQyxPQUFKLEdBQWdDLEdBQUcsQ0FBQztRQUNwQyxRQUFRLENBQUUsR0FBRyxDQUFDLE9BQU4sQ0FBZSxDQUFDLElBQXhCLEdBQWdDLElBQUEsQ0FBSyxRQUFRLENBQUUsR0FBRyxDQUFDLE9BQU4sQ0FBZSxDQUFDLElBQTdCLEVBQW1DLFFBQUEsQ0FBRSxJQUFGLENBQUE7aUJBQVksSUFBSSxDQUFDLElBQUwsQ0FBVSxHQUFWO1FBQVosQ0FBbkM7TUFObEM7YUFPQztJQWRNLENBUlg7OztJQXlCRSxJQUFNLENBQUEsQ0FBQTtBQUNSLFVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUE7QUFBSTtNQUFBLEtBQUEscUNBQUE7O1FBQ0UsT0FBTyxDQUFDLFNBQVIsQ0FBQTtRQUNBLE1BQUEsR0FBYyxTQUFBLENBQVUsSUFBVjtRQUNkLElBQUEsR0FBYyxJQUFJLENBQUMsU0FBTCxDQUFlLE9BQU8sQ0FBQyxJQUF2QjtRQUNkLElBQUMsQ0FBQSxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQWxDLENBQXNDLENBQUUsR0FBQSxPQUFGLEVBQWMsTUFBZCxFQUFzQixJQUF0QixDQUF0QztBQUNBO1FBQUEsS0FBQSx3Q0FBQTs7VUFDRSxJQUFDLENBQUEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBOUIsQ0FBa0MsQ0FBRSxHQUFBLEdBQUYsQ0FBbEM7UUFERjtNQUxGO2FBT0M7SUFSRzs7RUEzQlIsRUE5R0E7OztFQXFKQSxJQUFDLENBQUEsS0FBRCxHQUFTLEtBQUEsR0FHUCxDQUFBOztJQUFBLHdCQUFBLEVBQTBCLFFBQUEsQ0FBQSxDQUFBO0FBQzVCLFVBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxDQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUE7O01BQ0ksQ0FBQSxHQUFJLElBQUksVUFBSixDQUFlO1FBQUUsT0FBQSxFQUFTO01BQVgsQ0FBZixFQURSOztNQUdJLEtBQUEsR0FBUSxJQUFJLEdBQUo7O0FBQVU7UUFBQSxLQUFBLDZDQUFBO3VCQUFBLEdBQUcsQ0FBQztRQUFKLENBQUE7O1VBQVY7TUFDUixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLEdBQU4sQ0FBVSxnQkFBVjtNQUFILENBQWQsQ0FBSixFQUF3RCxJQUF4RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsR0FBTixDQUFVLG9CQUFWO01BQUgsQ0FBZCxDQUFKLEVBQXdELElBQXhEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxHQUFOLENBQVUsZUFBVjtNQUFILENBQWQsQ0FBSixFQUF3RCxJQUF4RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsR0FBTixDQUFVLGVBQVY7TUFBSCxDQUFkLENBQUosRUFBd0QsSUFBeEQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsS0FBSyxDQUFDLEdBQU4sQ0FBVSxZQUFWO01BQUgsQ0FBZCxDQUFKLEVBQXdELElBQXhEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLEtBQUssQ0FBQyxHQUFOLENBQVUsZUFBVjtNQUFILENBQWQsQ0FBSixFQUF3RCxJQUF4RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxLQUFLLENBQUMsR0FBTixDQUFVLFdBQVY7TUFBSCxDQUFkLENBQUosRUFBd0QsSUFBeEQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQXZCO01BQUgsQ0FBZCxDQUFKLEVBQXVEO1FBQUU7VUFBRSxDQUFBLEVBQUc7UUFBTCxDQUFGO09BQXZEO01BRUcsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxHQUFBLEdBQU0sSUFBSSxZQUFKLENBQWlCLENBQWpCO1FBQ04sS0FBQSxHQUFRLEdBQUcsQ0FBQyxXQUFKLENBQWdCO1VBQUUsaUJBQUEsRUFBbUI7UUFBckIsQ0FBaEI7UUFDUixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQztRQUFULENBQWQsQ0FBSixFQUFvQyxvQkFBcEM7UUFDQSxLQUFLLENBQUMsT0FBTixDQUFjLEdBQWQsRUFBbUIsR0FBbkI7UUFDQSxLQUFLLENBQUMsT0FBTixDQUFjLEdBQWQsRUFBbUIsR0FBbkI7UUFDQSxLQUFLLENBQUMsT0FBTixDQUFjLEdBQWQsRUFBbUIsR0FBbkI7UUFDQSxLQUFLLENBQUMsU0FBTixDQUFBO1FBQ0EsS0FBQTs7WUFBQTtVQUFBLElBQUEsQ0FBSyxHQUFMO1FBQUE7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFBYixDQUFkLENBQUosRUFBd0QsQ0FBeEQsRUFSTjs7UUFVTSxJQUFBLEdBQU8sQ0FBRSxTQUFBLENBQUEsQ0FBQTtpQkFBRyxDQUFBLE9BQVcsS0FBSyxDQUFDLElBQWpCO1FBQUgsQ0FBRixDQUFBLENBQUE7UUFDUCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQztRQUFULENBQWQsQ0FBSixFQUF3RCxvQkFBeEQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZCxDQUFKLEVBQXdEO1VBQUUsRUFBQSxFQUFJLEVBQU47VUFBVSxFQUFBLEVBQUksRUFBZDtVQUFrQixLQUFBLEVBQU8sZ0JBQXpCO1VBQTJDLE9BQUEsRUFBUztRQUFwRCxDQUF4RDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFkLENBQUosRUFBd0Q7VUFBRSxFQUFBLEVBQUksRUFBTjtVQUFVLEVBQUEsRUFBSSxFQUFkO1VBQWtCLEtBQUEsRUFBTyxnQkFBekI7VUFBMkMsT0FBQSxFQUFTO1FBQXBELENBQXhEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWQsQ0FBSixFQUF3RDtVQUFFLEVBQUEsRUFBSSxFQUFOO1VBQVUsRUFBQSxFQUFJLEdBQWQ7VUFBbUIsS0FBQSxFQUFPLGdCQUExQjtVQUE0QyxPQUFBLEVBQVM7UUFBckQsQ0FBeEQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZCxDQUFKLEVBQXdELElBQXhEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsd0JBQUosQ0FBNkIsR0FBN0I7UUFBSCxDQUFkLENBQUosRUFBMEQsSUFBMUQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyx3QkFBSixDQUE2QixHQUE3QjtRQUFILENBQWQsQ0FBSixFQUEwRDtVQUFFLGlCQUFBLEVBQW1CLENBQUUsSUFBRjtRQUFyQixDQUExRCxFQWpCTjs7UUFtQk0sR0FBRyxDQUFDLElBQUosQ0FBQTtRQUVBLEtBQUEsMkVBQUEsR0FBQTs7VUFBQSxJQUFBLENBQUssR0FBTDtRQUFBO1FBQ0EsSUFBQSxHQUFPLENBQUMsQ0FBQyxJQUFGLENBQU8sR0FBRyxDQUFBLGdEQUFBLENBQVY7UUFDUCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZCxDQUFKLEVBQTBDO1VBQUUsS0FBQSxFQUFPLG9CQUFUO1VBQStCLE1BQUEsRUFBUSxDQUF2QztVQUEwQyxJQUFBLEVBQU07UUFBaEQsQ0FBMUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZCxDQUFKLEVBQTBDLElBQTFDO1FBRUEsS0FBQSx1RUFBQSxHQUFBOztVQUFBLElBQUEsQ0FBSyxHQUFMO1FBQUE7UUFDQSxJQUFBLEdBQU8sQ0FBQyxDQUFDLElBQUYsQ0FBTyxHQUFHLENBQUEsNENBQUEsQ0FBVjtRQUNQLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFkLENBQUosRUFBMEM7VUFBRSxLQUFBLEVBQU8sZ0JBQVQ7VUFBMkIsRUFBQSxFQUFJLEVBQS9CO1VBQW1DLEVBQUEsRUFBSSxFQUF2QztVQUEyQyxPQUFBLEVBQVM7UUFBcEQsQ0FBMUM7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZCxDQUFKLEVBQTBDO1VBQUUsS0FBQSxFQUFPLGdCQUFUO1VBQTJCLEVBQUEsRUFBSSxFQUEvQjtVQUFtQyxFQUFBLEVBQUksRUFBdkM7VUFBMkMsT0FBQSxFQUFTO1FBQXBELENBQTFDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWQsQ0FBSixFQUEwQztVQUFFLEtBQUEsRUFBTyxnQkFBVDtVQUEyQixFQUFBLEVBQUksRUFBL0I7VUFBbUMsRUFBQSxFQUFJLEdBQXZDO1VBQTRDLE9BQUEsRUFBUztRQUFyRCxDQUExQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFkLENBQUosRUFBMEMsSUFBMUM7ZUFDQztNQWpDQSxDQUFBO01BbUNBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO1FBQU0sR0FBQSxHQUFNLElBQUksWUFBSixDQUFpQixDQUFqQjtRQUNOLEtBQUEsK0NBQWlDLENBQUE7UUFDakMsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxLQUFLLENBQUM7UUFBVCxDQUFkLENBQUosRUFBb0Msb0JBQXBDO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQWIsQ0FBZCxDQUFKLEVBQTBELENBQTFEO1FBQ0EsS0FBQTs7O1lBQUE7VUFBQSxJQUFBLENBQUssR0FBTDtRQUFBLENBSk47O1FBTU0sSUFBQSxHQUFPLENBQUUsU0FBQSxDQUFBLENBQUE7QUFBRSxjQUFBO2lCQUFDLENBQUEsNkNBQXdCLEdBQXhCO1FBQUgsQ0FBRixDQUFBLENBQUE7UUFDUCxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEtBQUssQ0FBQztRQUFULENBQWQsQ0FBSixFQUEwRCxvQkFBMUQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZCxDQUFKLEVBQTBEO1VBQUUsRUFBQSxFQUFJLEVBQU47VUFBVSxFQUFBLEVBQUksRUFBZDtVQUFrQixLQUFBLEVBQU8sZ0JBQXpCO1VBQTJDLE9BQUEsRUFBUztRQUFwRCxDQUExRDtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQUFXLENBQUM7UUFBZixDQUFkLENBQUosRUFBMEQ7VUFBRSxFQUFBLEVBQUksRUFBTjtVQUFVLEVBQUEsRUFBSSxFQUFkO1VBQWtCLEtBQUEsRUFBTyxnQkFBekI7VUFBMkMsT0FBQSxFQUFTO1FBQXBELENBQTFEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVcsQ0FBQztRQUFmLENBQWQsQ0FBSixFQUEwRDtVQUFFLEVBQUEsRUFBSSxFQUFOO1VBQVUsRUFBQSxFQUFJLEdBQWQ7VUFBbUIsS0FBQSxFQUFPLGdCQUExQjtVQUE0QyxPQUFBLEVBQVM7UUFBckQsQ0FBMUQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBVyxDQUFDO1FBQWYsQ0FBZCxDQUFKLEVBQTBELElBQTFEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxHQUFHLENBQUMsd0JBQUosQ0FBNkIsR0FBN0I7UUFBSCxDQUFkLENBQUosRUFBMEQsSUFBMUQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLEdBQUcsQ0FBQyx3QkFBSixDQUE2QixHQUE3QjtRQUFILENBQWQsQ0FBSixFQUEwRDtVQUFFLGlCQUFBLEVBQW1CLENBQUUsSUFBRjtRQUFyQixDQUExRCxFQWJOOztlQWVPO01BaEJBLENBQUEsSUFoRFA7O2FBa0VLO0lBbkV1QjtFQUExQixFQXhKRjs7O0VBK05BLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQSxpQkFBQSxFQUFBLEVBQUEsRUFBQSxXQUFBLEVBQUEsV0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQTtNQUFFLFdBQUEsR0FBYztNQUNkLFdBQUEsR0FBYztNQUNkLElBQUcsV0FBSDtRQUNFLENBQUEsQ0FBRSxpQkFBRixDQUFBLEdBQWtDLE9BQUEsQ0FBUSx5REFBUixDQUFsQztRQUNBLEVBQUEsR0FBSyxJQUFJLGlCQUFKLENBQUE7UUFDTCxFQUFFLENBQUMsVUFBSCxDQUFjLFNBQWQsRUFIRjs7TUFJQSxDQUFBLENBQUUsMEJBQUYsQ0FBQSxHQUFrQyxPQUFBLENBQVEsdURBQVIsQ0FBbEMsRUFORjs7Ozs7O01BWUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsSUFBdkM7UUFBNkMsYUFBQSxFQUFlO01BQTVEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixDQUFFLEtBQUYsQ0FBOUIsRUFmRjs7OztNQW1CRSxJQUFHLFdBQUg7UUFDRSxJQUE4RSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQWhCLEdBQXlCLENBQXZHO0FBQUE7VUFBQSxLQUFBLHFDQUFBOztZQUFBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLGNBQWxCLEVBQWtDLE9BQUEsQ0FBUSxJQUFSLENBQWxDO1VBQUEsQ0FBQTtTQURGO09BbkJGOzs7O2FBd0JHO0lBekJxQyxDQUFBLElBQXhDOztBQS9OQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLWRicmljLWhvYXJkJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbkZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxueyBEYnJpYyxcbiAgRGJyaWNfc3RkLFxuICBJRE4sXG4gIExJVCxcbiAgU1FMLFxuICBWRUMsXG4gIGZyb21fYm9vbCxcbiAgYXNfYm9vbCxcbiAgVHJ1ZSxcbiAgRmFsc2UsXG4gIHVucXVvdGVfbmFtZSwgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9kYnJpYydcbnsgSG9hcmQsXG4gIFNjYXR0ZXIsXG4gIFJ1bixcbiAgc3VtbWFyaXplX2RhdGEsXG4gIGludGVybmFscywgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9pbnRlcm1pc3Npb24nXG57IGxldHMsICAgICAgICAgICAgICAgICB9ID0gaW50ZXJuYWxzXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5ob2FyZF9wbHVnaW4gPVxuICBuYW1lOiAgICAgJ2hvYXJkJ1xuICBwcmVmaXg6ICAgJ2hyZCdcbiAgZXhwb3J0czpcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYnVpbGQ6IC0+XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyMjIFRBSU5UIHN0b3BnYXAgc29sdXRpb24gIyMjXG4gICAgICBjZmcgPVxuICAgICAgICBydW5zX3Jvd2lkX3JlZ2V4cDogICAgICAgICcuKydcbiAgICAgICAgZmlyc3RfcG9pbnQ6ICAgICAgICAgICAgICAweDAwXzAwMDBcbiAgICAgICAgbGFzdF9wb2ludDogICAgICAgICAgICAgICAweDEwX2ZmZmZcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBSID0gW11cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBSLnB1c2ggU1FMXCJcIlwiXG4gICAgICAgIGNyZWF0ZSB0YWJsZSBocmRfaG9hcmRfc2NhdHRlcnMgKFxuICAgICAgICAgICAgcm93aWQgICAgIHRleHQgICAgdW5pcXVlICBub3QgbnVsbCxcbiAgICAgICAgICAgIGlzX2hpdCAgICBib29sZWFuICAgICAgICAgbm90IG51bGwgZGVmYXVsdCBmYWxzZSxcbiAgICAgICAgICAgIGRhdGEgICAgICBqc29uICAgICAgICAgICAgbm90IG51bGwgZGVmYXVsdCAnbnVsbCdcbiAgICAgICAgICAgICk7XCJcIlwiXG5cbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBSLnB1c2ggU1FMXCJcIlwiXG4gICAgICAgIGNyZWF0ZSB0YWJsZSBocmRfaG9hcmRfcnVucyAoXG4gICAgICAgICAgICByb3dpZCAgICAgdGV4dCAgICB1bmlxdWUgIG5vdCBudWxsLFxuICAgICAgICAgICAgbG8gICAgICAgIGludGVnZXIgICAgICAgICBub3QgbnVsbCxcbiAgICAgICAgICAgIGhpICAgICAgICBpbnRlZ2VyICAgICAgICAgbm90IG51bGwsXG4gICAgICAgICAgICBzY2F0dGVyICAgdGV4dCAgICAgICAgICAgIG5vdCBudWxsLFxuICAgICAgICAgIC0tIHByaW1hcnkga2V5ICggcm93aWQgKSxcbiAgICAgICAgICBmb3JlaWduIGtleSAoIHNjYXR0ZXIgKSByZWZlcmVuY2VzIGhyZF9ob2FyZF9zY2F0dGVycyAoIHJvd2lkICksXG4gICAgICAgICAgY29uc3RyYWludCBcIs6pY29uc3RyYWludF9fXzFcIiBjaGVjayAoIHJvd2lkIHJlZ2V4cCAje0xJVCBjZmcucnVuc19yb3dpZF9yZWdleHAgfSApLFxuICAgICAgICAgIGNvbnN0cmFpbnQgXCLOqWNvbnN0cmFpbnRfX18yXCIgY2hlY2sgKCBsbyBiZXR3ZWVuICN7TElUIGNmZy5maXJzdF9wb2ludH0gYW5kICN7TElUIGNmZy5sYXN0X3BvaW50fSApLFxuICAgICAgICAgIGNvbnN0cmFpbnQgXCLOqWNvbnN0cmFpbnRfX18zXCIgY2hlY2sgKCBoaSBiZXR3ZWVuICN7TElUIGNmZy5maXJzdF9wb2ludH0gYW5kICN7TElUIGNmZy5sYXN0X3BvaW50fSApLFxuICAgICAgICAgIGNvbnN0cmFpbnQgXCLOqWNvbnN0cmFpbnRfX180XCIgY2hlY2sgKCBsbyA8PSBoaSApXG4gICAgICAgICAgLS0gY29uc3RyYWludCBcIs6pY29uc3RyYWludF9fXzVcIiBjaGVjayAoIHJvd2lkIHJlZ2V4cCAnXi4qJCcgKVxuICAgICAgICAgICk7XCJcIlwiXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgcmV0dXJuIFJcbiAgICBzdGF0ZW1lbnRzOlxuICAgICAgaHJkX3l5eTogU1FMXCJzZWxlY3QgMSBhcyBuO1wiXG4gICAgICBocmRfaW5zZXJ0X3NjYXR0ZXI6IFNRTFwiXCJcImluc2VydCBpbnRvIGhyZF9ob2FyZF9zY2F0dGVycyAoIHJvd2lkLCBpc19oaXQsIGRhdGEgKVxuICAgICAgICB2YWx1ZXMgKCAkcm93aWQsICRpc19oaXQsICRkYXRhICk7XCJcIlwiXG4gICAgICBocmRfaW5zZXJ0X3J1bjogU1FMXCJcIlwiaW5zZXJ0IGludG8gaHJkX2hvYXJkX3J1bnMgKCByb3dpZCwgbG8sIGhpLCBzY2F0dGVyIClcbiAgICAgICAgdmFsdWVzICggJHJvd2lkLCAkbG8sICRoaSwgJHNjYXR0ZXIgKTtcIlwiXCJcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNsYXNzIEhvYXJkX3VzZXIgZXh0ZW5kcyBEYnJpY19zdGRcbiAgQHByZWZpeDogICdqenInXG4gIEBwbHVnaW5zOiBbXG4gICAgIyAncHJvdG90eXBlcydcbiAgICBob2FyZF9wbHVnaW5cbiAgICAjICdtZSdcbiAgICBdXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jbGFzcyBIb2FyZF9leHRyYXMgZXh0ZW5kcyBIb2FyZFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdHJ1Y3RvcjogKCBkYiApIC0+XG4gICAgc3VwZXIoKVxuICAgIEBkYiA9IGRiXG4gICAgQHJlc3RvcmUoKVxuICAgIDt1bmRlZmluZWRcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVzdG9yZTogLT5cbiAgICBzY2F0dGVycyA9IHt9XG4gICAgZm9yIHJvdyBmcm9tIEBkYi53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBocmRfaG9hcmRfc2NhdHRlcnMgb3JkZXIgYnkgcm93aWQ7XCJcbiAgICAgICMjIyBUQUlOVCB1c2UgYFNjYXR0ZXIuX2Zyb21fZGJfcm93KClgICMjI1xuICAgICAgc2NhdHRlciAgICAgICAgICAgICAgICAgICAgICAgPSBuZXcgU2NhdHRlciBALCAoIEpTT04ucGFyc2Ugcm93LmRhdGEgKSwgeyByb3dpZDogcm93LnJvd2lkLCBpc19ub3JtYWxpemVkOiB0cnVlLCB9XG4gICAgICBzY2F0dGVyc1sgc2NhdHRlci5yb3dpZCBdICAgICA9IHNjYXR0ZXJcbiAgICAgIEBzY2F0dGVycy5wdXNoIHNjYXR0ZXJcbiAgICBmb3Igcm93IGZyb20gQGRiLndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ob2FyZF9ydW5zIG9yZGVyIGJ5IHJvd2lkO1wiXG4gICAgICAjIyMgVEFJTlQgdXNlIGBSdW4uX2Zyb21fZGJfcm93KClgICMjI1xuICAgICAgcnVuICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBuZXcgUnVuIHsgbG86IHJvdy5sbywgaGk6IHJvdy5oaSwgfVxuICAgICAgcnVuLnJvd2lkICAgICAgICAgICAgICAgICAgICAgPSByb3cucm93aWRcbiAgICAgIEBzdGF0ZS5ydW5fcm93aWQgICAgICAgICAgICAgID0gTWF0aC5tYXggQHN0YXRlLnJ1bl9yb3dpZCwgTnVtYmVyIHJ1bi5yb3dpZC5yZXBsYWNlIC9eLio9LywgJydcbiAgICAgIHJ1bi5zY2F0dGVyICAgICAgICAgICAgICAgICAgID0gcm93LnNjYXR0ZXJcbiAgICAgIHNjYXR0ZXJzWyBydW4uc2NhdHRlciBdLnJ1bnMgID0gbGV0cyBzY2F0dGVyc1sgcnVuLnNjYXR0ZXIgXS5ydW5zLCAoIHJ1bnMgKSAtPiBydW5zLnB1c2ggcnVuXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2F2ZTogLT5cbiAgICBmb3Igc2NhdHRlciBpbiBAc2NhdHRlcnNcbiAgICAgIHNjYXR0ZXIubm9ybWFsaXplKClcbiAgICAgIGlzX2hpdCAgICAgID0gZnJvbV9ib29sIHRydWVcbiAgICAgIGRhdGEgICAgICAgID0gSlNPTi5zdHJpbmdpZnkgc2NhdHRlci5kYXRhXG4gICAgICBAZGIuc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3NjYXR0ZXIucnVuIHsgc2NhdHRlci4uLiwgaXNfaGl0LCBkYXRhLCB9XG4gICAgICBmb3IgcnVuIGluIHNjYXR0ZXIucnVuc1xuICAgICAgICBAZGIuc3RhdGVtZW50cy5ocmRfaW5zZXJ0X3J1bi5ydW4geyBydW4uLi4sIH1cbiAgICA7bnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGJyaWNfaG9hcmRfcGx1Z2luX21vZGVsOiAtPlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdSA9IG5ldyBIb2FyZF91c2VyIHsgcmVidWlsZDogdHJ1ZSwgfVxuICAgICMgZGVidWcgJ86pZGJyaF9fXzYnLCByb3cubmFtZSBmb3Igcm93IGZyb20gdS53YWxrIHUuc3RhdGVtZW50cy5zdGRfZ2V0X3JlbGF0aW9uc1xuICAgIG5hbWVzID0gbmV3IFNldCAoIHJvdy5uYW1lIGZvciByb3cgZnJvbSB1LndhbGsgdS5zdGF0ZW1lbnRzLnN0ZF9nZXRfcmVsYXRpb25zIClcbiAgICBAZXEgKCDOqWRicmhfX183ID0gLT4gbmFtZXMuaGFzICdocmRfaG9hcmRfcnVucycgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX19fOCA9IC0+IG5hbWVzLmhhcyAnaHJkX2hvYXJkX3NjYXR0ZXJzJyAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fXzkgPSAtPiBuYW1lcy5oYXMgJ3N0ZF9mdW5jdGlvbnMnICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfXzEwID0gLT4gbmFtZXMuaGFzICdzdGRfcmVsYXRpb25zJyAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX18xMSA9IC0+IG5hbWVzLmhhcyAnc3RkX3RhYmxlcycgICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZGJyaF9fMTIgPSAtPiBuYW1lcy5oYXMgJ3N0ZF92YXJpYWJsZXMnICAgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWRicmhfXzEzID0gLT4gbmFtZXMuaGFzICdzdGRfdmlld3MnICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqlkYnJoX18xNCA9IC0+IHUuZ2V0X2FsbCB1LnN0YXRlbWVudHMuaHJkX3l5eSApLCBbIHsgbjogMSwgfSwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGhfMSA9IG5ldyBIb2FyZF9leHRyYXMgdVxuICAgICAgYXNjaWkgPSBoXzEuYWRkX3NjYXR0ZXIgeyBpc19hc2NpaV9hbHBoYW51bTogdHJ1ZSwgfVxuICAgICAgQGVxICggzqlkYnJoX18xNSA9IC0+IGFzY2lpLnJvd2lkICksICd0OmhyZDpzY2F0dGVycyxSPTEnXG4gICAgICBhc2NpaS5hZGRfcnVuICdhJywgJ3onXG4gICAgICBhc2NpaS5hZGRfcnVuICdBJywgJ1onXG4gICAgICBhc2NpaS5hZGRfcnVuICcwJywgJzknXG4gICAgICBhc2NpaS5ub3JtYWxpemUoKVxuICAgICAgZWNobyBydW4gZm9yIHJ1biBmcm9tIHJ1bnMgPSAoIC0+IHlpZWxkIGZyb20gYXNjaWkucnVucyApKClcbiAgICAgIEBlcSAoIM6pZGJyaF9fMTYgPSAtPiBoXzEuc3RhdGUucnVuX3Jvd2lkICAgICAgICAgICAgICksIDNcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcnVucyA9ICggLT4geWllbGQgZnJvbSBhc2NpaS5ydW5zICkoKVxuICAgICAgQGVxICggzqlkYnJoX18xNyA9IC0+IGFzY2lpLnJvd2lkICAgICAgICAgICAgICAgICAgICAgKSwgJ3Q6aHJkOnNjYXR0ZXJzLFI9MSdcbiAgICAgIEBlcSAoIM6pZGJyaF9fMTggPSAtPiBydW5zLm5leHQoKS52YWx1ZSAgICAgICAgICAgICAgICksIHsgbG86IDQ4LCBoaTogNTcsIHJvd2lkOiAndDpocmQ6cnVucyxSPTEnLCBzY2F0dGVyOiAndDpocmQ6c2NhdHRlcnMsUj0xJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzE5ID0gLT4gcnVucy5uZXh0KCkudmFsdWUgICAgICAgICAgICAgICApLCB7IGxvOiA2NSwgaGk6IDkwLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0yJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlkYnJoX18yMCA9IC0+IHJ1bnMubmV4dCgpLnZhbHVlICAgICAgICAgICAgICAgKSwgeyBsbzogOTcsIGhpOiAxMjIsIHJvd2lkOiAndDpocmQ6cnVucyxSPTMnLCBzY2F0dGVyOiAndDpocmQ6c2NhdHRlcnMsUj0xJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzIxID0gLT4gcnVucy5uZXh0KCkuZG9uZSAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWRicmhfXzIyID0gLT4gaF8xLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAnJicgICksIG51bGxcbiAgICAgIEBlcSAoIM6pZGJyaF9fMjMgPSAtPiBoXzEuc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICdhJyAgKSwgeyBpc19hc2NpaV9hbHBoYW51bTogWyB0cnVlIF0gfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBoXzEuc2F2ZSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGVjaG8gcm93IGZvciByb3cgZnJvbSByb3dzID0gdS53YWxrIFNRTFwic2VsZWN0ICogZnJvbSBocmRfaG9hcmRfc2NhdHRlcnMgb3JkZXIgYnkgcm93aWQ7XCJcbiAgICAgIHJvd3MgPSB1LndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ob2FyZF9zY2F0dGVycyBvcmRlciBieSByb3dpZDtcIlxuICAgICAgQGVxICggzqlkYnJoX18yNCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpzY2F0dGVycyxSPTEnLCBpc19oaXQ6IDEsIGRhdGE6ICd7XCJpc19hc2NpaV9hbHBoYW51bVwiOnRydWV9JyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzI1ID0gLT4gcm93cy5uZXh0KCkuZG9uZSAgKSwgdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBlY2hvIHJvdyBmb3Igcm93IGZyb20gcm93cyA9IHUud2FsayBTUUxcInNlbGVjdCAqIGZyb20gaHJkX2hvYXJkX3J1bnMgb3JkZXIgYnkgcm93aWQ7XCJcbiAgICAgIHJvd3MgPSB1LndhbGsgU1FMXCJzZWxlY3QgKiBmcm9tIGhyZF9ob2FyZF9ydW5zIG9yZGVyIGJ5IHJvd2lkO1wiXG4gICAgICBAZXEgKCDOqWRicmhfXzI2ID0gLT4gcm93cy5uZXh0KCkudmFsdWUgKSwgeyByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0xJywgbG86IDQ4LCBoaTogNTcsIHNjYXR0ZXI6ICd0OmhyZDpzY2F0dGVycyxSPTEnIH1cbiAgICAgIEBlcSAoIM6pZGJyaF9fMjcgPSAtPiByb3dzLm5leHQoKS52YWx1ZSApLCB7IHJvd2lkOiAndDpocmQ6cnVucyxSPTInLCBsbzogNjUsIGhpOiA5MCwgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlkYnJoX18yOCA9IC0+IHJvd3MubmV4dCgpLnZhbHVlICksIHsgcm93aWQ6ICd0OmhyZDpydW5zLFI9MycsIGxvOiA5NywgaGk6IDEyMiwgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlkYnJoX18yOSA9IC0+IHJvd3MubmV4dCgpLmRvbmUgICksIHRydWVcbiAgICAgIDtudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgaF8yID0gbmV3IEhvYXJkX2V4dHJhcyB1XG4gICAgICBhc2NpaSA9ICggaF8yLnNjYXR0ZXJzLmF0IC0xICkgPyB7fVxuICAgICAgQGVxICggzqlkYnJoX18zMCA9IC0+IGFzY2lpLnJvd2lkICksICd0OmhyZDpzY2F0dGVycyxSPTEnXG4gICAgICBAZXEgKCDOqWRicmhfXzMxID0gLT4gaF8yLnN0YXRlLnJ1bl9yb3dpZCAgICAgICAgICAgICAgICksIDNcbiAgICAgIGVjaG8gcnVuIGZvciBydW4gZnJvbSBydW5zID0gKCAtPiB5aWVsZCBmcm9tIGFzY2lpLnJ1bnMgPyBbXSApKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcnVucyA9ICggLT4geWllbGQgZnJvbSBhc2NpaS5ydW5zID8gW10gKSgpXG4gICAgICBAZXEgKCDOqWRicmhfXzMyID0gLT4gYXNjaWkucm93aWQgICAgICAgICAgICAgICAgICAgICAgICksICd0OmhyZDpzY2F0dGVycyxSPTEnXG4gICAgICBAZXEgKCDOqWRicmhfXzMzID0gLT4gcnVucy5uZXh0KCkudmFsdWUgICAgICAgICAgICAgICAgICksIHsgbG86IDQ4LCBoaTogNTcsIHJvd2lkOiAndDpocmQ6cnVucyxSPTEnLCBzY2F0dGVyOiAndDpocmQ6c2NhdHRlcnMsUj0xJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzM0ID0gLT4gcnVucy5uZXh0KCkudmFsdWUgICAgICAgICAgICAgICAgICksIHsgbG86IDY1LCBoaTogOTAsIHJvd2lkOiAndDpocmQ6cnVucyxSPTInLCBzY2F0dGVyOiAndDpocmQ6c2NhdHRlcnMsUj0xJyB9XG4gICAgICBAZXEgKCDOqWRicmhfXzM1ID0gLT4gcnVucy5uZXh0KCkudmFsdWUgICAgICAgICAgICAgICAgICksIHsgbG86IDk3LCBoaTogMTIyLCByb3dpZDogJ3Q6aHJkOnJ1bnMsUj0zJywgc2NhdHRlcjogJ3Q6aHJkOnNjYXR0ZXJzLFI9MScgfVxuICAgICAgQGVxICggzqlkYnJoX18zNiA9IC0+IHJ1bnMubmV4dCgpLmRvbmUgICAgICAgICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWRicmhfXzM3ID0gLT4gaF8yLnN1bW1hcml6ZV9kYXRhX2Zvcl9wb2ludCAnJicgICksIG51bGxcbiAgICAgIEBlcSAoIM6pZGJyaF9fMzggPSAtPiBoXzIuc3VtbWFyaXplX2RhdGFfZm9yX3BvaW50ICdhJyAgKSwgeyBpc19hc2NpaV9hbHBoYW51bTogWyB0cnVlIF0gfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICA7bnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBkb19jb3ZlcmFnZSA9IHRydWVcbiAgZG9fY292ZXJhZ2UgPSBmYWxzZVxuICBpZiBkb19jb3ZlcmFnZVxuICAgIHsgQ292ZXJhZ2VfYW5hbHl6ZXIsICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL2NvdmVyYWdlLWFuYWx5emVyJ1xuICAgIGNhID0gbmV3IENvdmVyYWdlX2FuYWx5emVyKClcbiAgICBjYS53cmFwX2NsYXNzIERicmljX3N0ZFxuICB7IHdyYXBfbWV0aG9kc19vZl9wcm90b3R5cGVzLCB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzL2xpYi9wcm90b3R5cGUtdG9vbHMnXG4gICMgd3JhcF9tZXRob2RzX29mX3Byb3RvdHlwZXMgRGJyaWNfc3RkLCAoeyBmcW5hbWUsIGNhbGxtZSwgUCwgfSkgLT5cbiAgIyAgIGRlYnVnICfOqWRicmhfXzM5JywgZnFuYW1lICMsIFBcbiAgIyAgIHJldHVybiBjYWxsbWUoKVxuICAjIGRiID0gbmV3IERicmljX3N0ZCAnOm1lbW9yeTonLCB7IHJlYnVpbGQ6IHRydWUsIH1cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgZGJyaWNfaG9hcmRfcGx1Z2luX21vZGVsOiB0ZXN0cy5kYnJpY19ob2FyZF9wbHVnaW5fbW9kZWwsIH1cbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGRicmljX2R5bmFtaWNfYnVpbGRfcHJvcGVydGllczogdGVzdHMuZGJyaWNfZHluYW1pY19idWlsZF9wcm9wZXJ0aWVzLCB9XG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaWYgZG9fY292ZXJhZ2VcbiAgICB3YXJuICfOqWRicmhfXzQwJywgXCJub3QgY292ZXJlZDpcIiwgcmV2ZXJzZSBuYW1lIGZvciBuYW1lIGluIGNhLnVudXNlZF9uYW1lcyBpZiBjYS51bnVzZWRfbmFtZXMubGVuZ3RoID4gMFxuICAgICMgaGVscCAnzqlkYnJoX180MScsIGNhLnVzZWRfbmFtZXNcbiAgICAjIHVyZ2UgJ86pZGJyaF9fNDInLCBjb3VudCwgbmFtZXMgZm9yIGNvdW50LCBuYW1lcyBvZiBjYS5uYW1lc19ieV9jb3VudHNcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICA7bnVsbFxuXG5cbiJdfQ==
