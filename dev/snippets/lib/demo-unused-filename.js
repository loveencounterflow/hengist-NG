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
      var FS, TMP_custom_error, TMP_validation_error, cache_filename_re, exists, get_next_filename, get_next_free_filename, i, len, matcher_1, matcher_2, matcher_3, max_attempts, path, probes_and_matchers, Ω__10, Ω__11, Ω___5, Ω___6, Ω___7, Ω___8, Ω___9;
      cache_filename_re = /^~\.(?<first>.*)\.(?<nr>[0-9]{4})\.filemirror-cache/v;
      TMP_custom_error = class TMP_custom_error extends Error {};
      TMP_validation_error = class TMP_validation_error extends Error {};
      FS = require('node:fs');
      max_attempts = 9999;
      //.......................................................................................................
      exists = function(path) {
        var error;
        try {
          FS.statSync(path);
        } catch (error1) {
          error = error1;
          return false;
        }
        return true;
      };
      //.......................................................................................................
      get_next_filename = function(path) {
        var first, match, nr;
        if ((typeof path) !== 'string') {
          /* TAINT use proper type checking */
          throw new TMP_validation_error(`Ω___1 expected a text, got ${rpr(path)}`);
        }
        if (!(path.length > 0)) {
          throw new TMP_validation_error(`Ω___2 expected a nonempty text, got ${rpr(path)}`);
        }
        if ((match = path.match(cache_filename_re)) == null) {
          return `~.${path}.0001.filemirror-cache`;
        }
        ({first, nr} = match.groups);
        nr = `${(parseInt(nr, 10)) + 1}`.padStart(4, '0');
        path = first;
        return `~.${first}.${nr}.filemirror-cache`;
      };
      //.......................................................................................................
      get_next_free_filename = function(path) {
        var R, failed_attempt_count;
        R = path;
        failed_attempt_count = -1;
        while (true) {
          //...................................................................................................
          //.....................................................................................................
          failed_attempt_count++;
          if (failed_attempt_count > max_attempts) {
            throw new TMP_custom_error(`Ω___3 too many (${failed_attempt_count}) attempts; path ${rpr(R)} exists`);
          }
          //...................................................................................................
          R = get_next_filename(R);
          whisper('Ω___4', `probing ${R}`);
          if (!exists(R)) {
            break;
          }
        }
        return R;
      };
      //.......................................................................................................
      this.throws((Ω___5 = function() {
        return get_next_free_filename(null);
      }), /expected a text/);
      this.throws((Ω___6 = function() {
        return get_next_free_filename(void 0);
      }), /expected a text/);
      this.throws((Ω___7 = function() {
        return get_next_free_filename(true);
      }), /expected a text/);
      this.throws((Ω___8 = function() {
        return get_next_free_filename('');
      }), /expected a nonempty text/);
      //.......................................................................................................
      probes_and_matchers = [['a', [false, '~.a.0001.filemirror-cache', '~.a.0001.filemirror-cache']], ['README.md', [true, '~.README.md.0001.filemirror-cache', '~.README.md.0004.filemirror-cache']], ['~.README.md.0001.filemirror-cache', [true, '~.README.md.0002.filemirror-cache', '~.README.md.0004.filemirror-cache']], ['~.README.md.0002.filemirror-cache', [true, '~.README.md.0003.filemirror-cache', '~.README.md.0004.filemirror-cache']], ['~.README.md.0003.filemirror-cache', [true, '~.README.md.0004.filemirror-cache', '~.README.md.0004.filemirror-cache']], ['~.README.md.0004.filemirror-cache', [false, '~.README.md.0005.filemirror-cache', '~.README.md.0005.filemirror-cache']]];
      for (i = 0, len = probes_and_matchers.length; i < len; i++) {
        [path, [matcher_1, matcher_2, matcher_3]] = probes_and_matchers[i];
        this.eq((Ω___9 = function() {
          return exists(path);
        }), matcher_1);
        this.eq((Ω__10 = function() {
          return get_next_filename(path);
        }), matcher_2);
        this.eq((Ω__11 = function() {
          return get_next_free_filename(path);
        }), matcher_3);
      }
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