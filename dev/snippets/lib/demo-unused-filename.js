(async function() {
  'use strict';
  var C, GTNG, GUY, SFMODULES, Test, alert, blue, bold, debug, echo, f, file_mirror_tests, gold, grey, help, info, inspect, log, nfa, plain, praise, red, reverse, rpr, urge, warn, whisper, white, write;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-proxy'));

  ({rpr, inspect, echo, white, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  write = function(p) {
    return process.stdout.write(p);
  };

  C = require('ansis');

  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('./single-file-modules');

  //===========================================================================================================
  file_mirror_tests = {
    t1: function() {
      var PATH, cache_filename_re, exists, get_next_filename, get_next_free_filename, path_prefix, probes_and_matchers, Ω__10, Ω___7, Ω___8, Ω___9;
      ({get_next_free_filename, get_next_filename, exists, cache_filename_re} = SFMODULES.require_next_free_filename());
      PATH = require('node:path');
      //.......................................................................................................
      this.throws((Ω___7 = function() {
        return get_next_free_filename(null);
      }), /expected a text/);
      this.throws((Ω___8 = function() {
        return get_next_free_filename(void 0);
      }), /expected a text/);
      this.throws((Ω___9 = function() {
        return get_next_free_filename(true);
      }), /expected a text/);
      this.throws((Ω__10 = function() {
        return get_next_free_filename('');
      }), /expected a nonempty text/);
      //.......................................................................................................
      probes_and_matchers = [['a', [false, '~.a.0001.filemirror-cache', '~.a.0001.filemirror-cache']], ['README.md', [true, '~.README.md.0001.filemirror-cache', '~.README.md.0004.filemirror-cache']], ['~.README.md.0001.filemirror-cache', [true, '~.README.md.0002.filemirror-cache', '~.README.md.0004.filemirror-cache']], ['~.README.md.0002.filemirror-cache', [true, '~.README.md.0003.filemirror-cache', '~.README.md.0004.filemirror-cache']], ['~.README.md.0003.filemirror-cache', [true, '~.README.md.0004.filemirror-cache', '~.README.md.0004.filemirror-cache']], ['~.README.md.0004.filemirror-cache', [false, '~.README.md.0005.filemirror-cache', '~.README.md.0005.filemirror-cache']]];
      path_prefix = PATH.resolve('../../../assets/bricabrac/find-free-filename');
      (() => {        //.......................................................................................................
        var abs_matcher_2, abs_matcher_3, abs_path, i, len, matcher_1, matcher_2, matcher_3, path, Ω__12, Ω__13, Ω__14;
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [path, [matcher_1, matcher_2, matcher_3]] = probes_and_matchers[i];
          abs_path = PATH.join(path_prefix, path);
          abs_matcher_2 = PATH.join(path_prefix, matcher_2);
          abs_matcher_3 = PATH.join(path_prefix, matcher_3);
          this.eq((Ω__12 = function() {
            return exists(abs_path);
          }), matcher_1);
          this.eq((Ω__13 = function() {
            return get_next_filename(abs_path);
          }), abs_matcher_2);
          this.eq((Ω__14 = function() {
            return get_next_free_filename(abs_path);
          }), abs_matcher_3);
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var i, len, matcher_1, matcher_2, matcher_3, path, rel_matcher_2, rel_matcher_3, rel_path, Ω__12, Ω__13, Ω__14;
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [path, [matcher_1, matcher_2, matcher_3]] = probes_and_matchers[i];
          rel_path = PATH.relative(process.cwd(), PATH.join(path_prefix, path));
          rel_matcher_2 = PATH.relative(process.cwd(), PATH.join(path_prefix, matcher_2));
          rel_matcher_3 = PATH.relative(process.cwd(), PATH.join(path_prefix, matcher_3));
          this.eq((Ω__12 = function() {
            return exists(rel_path);
          }), matcher_1);
          this.eq((Ω__13 = function() {
            return get_next_filename(rel_path);
          }), rel_matcher_2);
          this.eq((Ω__14 = function() {
            return get_next_free_filename(rel_path);
          }), rel_matcher_3);
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
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
      (new Test(guytest_cfg)).test({file_mirror_tests});
      //.........................................................................................................
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=demo-unused-filename.js.map