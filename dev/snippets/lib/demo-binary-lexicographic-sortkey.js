(async function() {
  'use strict';
  var GUY, SFMODULES, alert, blue, bold, debug, demo_binary_lexicographic_sortkey, echo, f, gold, green, grey, help, hide, info, inspect, lime, log, plain, praise, red, reverse, rpr, set_getter, timeit, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-build-unicode-ranges'));

  ({rpr, inspect, echo, white, green, lime, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  // { nfa }                   = require '../../../apps/normalize-function-arguments'
  // GTNG                      = require '../../../apps/guy-test-NG'
  // { Test                  } = GTNG
  // mkdirp                    = require 'mkdirp'
  // env_paths                 = ( require 'env-paths' ).default 'demo-node-sqlite'
  // SQLITE                    = require 'node:sqlite'
  // PATH                      = require 'node:path'
  // { SQL }                   = require '../../../apps/dbay'
  // { default: \
  //   on_process_exit,      } = require 'exit-hook'
  // FS                        = require 'node:fs'
  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  ({hide, set_getter} = SFMODULES.require_managed_property_tools());

  ({timeit} = SFMODULES.unstable.require_benchmarking());

  //===========================================================================================================
  demo_binary_lexicographic_sortkey = () => {
    /* inspired by & thx to https://stately.cloud/blog/encoding-sortable-binary-database-keys/ */
    /* trailer can be of fixed length since there is an upper limit to digit positions given by
     Number.MAX_SAFE_INTEGER as represented in the base of choice (here 10) times the maximum number of
     dimensions of the VNR: */
    var d, i, k, key, keys, len, max_length, q, ref0, sk, trailer, v;
    d = {
      K000: '[ -999,           ] 1',
      L00: '[  -99,           ] 2',
      L09: '[  -90,           ] 3',
      L88: '[  -11,           ] 4',
      L89: '[  -10,           ] 5',
      M0: '[   -9,           ] 6',
      M1: '[   -8,           ] 7',
      M2: '[   -7,           ] 8',
      M3: '[   -6,           ] 9',
      M4: '[   -5,           ] 10',
      M5: '[   -4,           ] 11',
      M6: '[   -3,           ] 12',
      M7: '[   -2,           ] 13',
      M8: '[   -1,           ] 14',
      NL20: '[   +0,  -20,     ] 15',
      N: '[   +0,           ] 16',
      NP20: '[   +0,  +20,     ] 17',
      O9: '[   +9,           ] 18',
      P10M6: '[  +10,   -3,     ] 19',
      P10M7: '[  +10,   -2,     ] 20',
      P10M8: '[  +10,   -1,     ] 21',
      P10: '[  +10,           ] 22',
      P10N: '[  +10,   +0,     ] 23',
      P10O1: '[  +10,   +1,     ] 24',
      P10P10M8: '[  +10,  +10, -1, ] 25',
      P10P10: '[  +10,  +10,     ] 26',
      P10P20: '[  +10,  +20,     ] 27',
      P20: '[  +20,           ] 28',
      P20P10: '[  +20,  +10,     ] 29',
      P90: '[  +90,           ] 30',
      Q900: '[ +900,           ] 31'
    };
    // identical b/c of padding:
    // P10:        '[  +10,       ] 24'
    // P10N:      '[  +10,   +0, ] 25'
    max_length = Math.max(...((function() {
      var i, len, ref, results;
      ref = Object.keys(d);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        k = ref[i];
        results.push(k.length);
      }
      return results;
    })()));
    trailer = 'NNNNNNNNNNN';
    debug('Ωbsk___1', {max_length});
    // d1 = Object.fromEntries ( [ ( k.padEnd max_length, 'N' ), v, ] for k, v of d )
    // d1 = Object.fromEntries ( [ ( k + trailer ), v, ] for k, v of d )
    keys = (function() {
      var i, len, ref, results;
      ref = ((function() {
        var results1;
        results1 = [];
        for (k in d) {
          results1.push([k + trailer, k]);
        }
        return results1;
      })()).sort();
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        [sk, k] = ref[i];
        results.push(k);
      }
      return results;
    })();
    for (i = 0, len = keys.length; i < len; i++) {
      key = keys[i];
      k = lime(reverse(f` ${key}:>10c; `));
      v = gold(reverse(f` ${d[key]}:<30c; `));
      q = key.replace(/([A-Z])[0-9]*/g, '$1');
      q = q.length;
      help('Ωbsk___1', `${k}${v} ${q}`);
    }
    ref0 = Number.MAX_SAFE_INTEGER;
    f = function(n) {
      if (n === 0) {
        return 'N';
      }
      if (n > 0) {
        return (n.toString(32)).toUpperCase();
      }
      return ((ref0 + n).toString(32)).toUpperCase();
    };
    // 11111111111111111111111111111111111111111111111111111
    // Number.MAX_SAFE_INTEGER.toString 32
    // '7vvvvvvvvvv'
    /*

     * Vectorial Numbers (VNRs) to Transform Text and Keep It

    X [ 10, 32, ] `The reading of 樂 is <py/yue4/ for <gloss/music/ or <py/le4/ meaning <gloss/joy/.`
    _ [ 10, 32,  1,    ] `The reading of 樂 is `
    X [ 10, 32,  2,    ] `<py/`
    X [ 10, 32,  3,    ] `yue4`
    _ [ 10, 32,  3, 1, ] `<span class=pinyin>yuè</span>`
    X [ 10, 32,  4,    ] `/`
    _ [ 10, 32,  5,    ] ` for `
    X [ 10, 32,  6,    ] `<gloss/`
    X [ 10, 32,  7,    ] `music`
    _ [ 10, 32,  7, 1, ] `<span class=gloss>music</span>`
    X [ 10, 32,  8,    ] `/`
    _ [ 10, 32,  9,    ] ` or `
    X [ 10, 32, 10,    ] `<py/`
    X [ 10, 32, 11,    ] `le4`
    _ [ 10, 32, 11, 1, ] `<span class=pinyin>lè</span>`
    _ [ 10, 32, 12,    ] ` meaning `
    X [ 10, 32, 13,    ] `<gloss/`
    X [ 10, 32, 14,    ] `joy`
    _ [ 10, 32, 14, 1, ] `<span class=gloss>joy</span>`
    X [ 10, 32, 15,    ] `/`
    _ [ 10, 32, 16,    ] `.\n`

    NOTE could've rather surrounded glosses:

    X [ 10, 32, 13,    ] `<gloss/`
    _ [ 10, 32, 14, -1,] `<span class=gloss>`
    _ [ 10, 32, 14,    ] `joy`
    _ [ 10, 32, 14, 1, ] `</span>`
    X [ 10, 32, 15,    ] `/`

     */
    return null;
  };

  // ABCDEFGHIJKLM
  // NOPQRSTUVWXYZ

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      await demo_binary_lexicographic_sortkey();
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tYmluYXJ5LWxleGljb2dyYXBoaWMtc29ydGtleS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsaUNBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLDJCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxJQVJGLEVBU0UsR0FURixFQVVFLElBVkYsRUFXRSxPQVhGLEVBWUUsR0FaRixDQUFBLEdBWTRCLEdBQUcsQ0FBQyxHQVpoQzs7RUFhQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQTFCQTs7Ozs7Ozs7Ozs7Ozs7RUF1Q0EsU0FBQSxHQUE0QixPQUFBLENBQVEsNkNBQVI7O0VBQzVC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LENBQVcsRUFBWCxDQUFiLENBQTRCLENBQUMsV0FBN0IsQ0FBQSxFQUFQOztBQUNBLGFBQU8sQ0FBRSxDQUFFLElBQUEsR0FBTyxDQUFULENBQVksQ0FBQyxRQUFiLENBQXNCLEVBQXRCLENBQUYsQ0FBNEIsQ0FBQyxXQUE3QixDQUFBO0lBSEwsRUF0RE47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9HRSxXQUFPO0VBckcyQixFQS9DcEM7Ozs7OztFQTBKQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUE7TUFDdEMsTUFBTSxpQ0FBQSxDQUFBO0FBQ04sYUFBTztJQUYrQixDQUFBLElBQXhDOztBQTFKQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdkZW1vLWJ1aWxkLXVuaWNvZGUtcmFuZ2VzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGxpbWVcbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbiMgeyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiMgR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG4jIHsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG4jIG1rZGlycCAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdta2RpcnAnXG4jIGVudl9wYXRocyAgICAgICAgICAgICAgICAgPSAoIHJlcXVpcmUgJ2Vudi1wYXRocycgKS5kZWZhdWx0ICdkZW1vLW5vZGUtc3FsaXRlJ1xuIyBTUUxJVEUgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpzcWxpdGUnXG4jIFBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4jIHsgU1FMIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2RiYXknXG4jIHsgZGVmYXVsdDogXFxcbiMgICBvbl9wcm9jZXNzX2V4aXQsICAgICAgfSA9IHJlcXVpcmUgJ2V4aXQtaG9vaydcbiMgRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcbnsgaGlkZSxcbiAgc2V0X2dldHRlciwgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9tYW5hZ2VkX3Byb3BlcnR5X3Rvb2xzKClcbnsgdGltZWl0LCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9iZW5jaG1hcmtpbmcoKVxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX2JpbmFyeV9sZXhpY29ncmFwaGljX3NvcnRrZXkgPSA9PlxuICAjIyMgaW5zcGlyZWQgYnkgJiB0aHggdG8gaHR0cHM6Ly9zdGF0ZWx5LmNsb3VkL2Jsb2cvZW5jb2Rpbmctc29ydGFibGUtYmluYXJ5LWRhdGFiYXNlLWtleXMvICMjI1xuICBkID1cbiAgICBLMDAwOiAgICAgICAnWyAtOTk5LCAgICAgICAgICAgXSAxJ1xuICAgIEwwMDogICAgICAgICdbICAtOTksICAgICAgICAgICBdIDInXG4gICAgTDA5OiAgICAgICAgJ1sgIC05MCwgICAgICAgICAgIF0gMydcbiAgICBMODg6ICAgICAgICAnWyAgLTExLCAgICAgICAgICAgXSA0J1xuICAgIEw4OTogICAgICAgICdbICAtMTAsICAgICAgICAgICBdIDUnXG4gICAgTTA6ICAgICAgICAgJ1sgICAtOSwgICAgICAgICAgIF0gNidcbiAgICBNMTogICAgICAgICAnWyAgIC04LCAgICAgICAgICAgXSA3J1xuICAgIE0yOiAgICAgICAgICdbICAgLTcsICAgICAgICAgICBdIDgnXG4gICAgTTM6ICAgICAgICAgJ1sgICAtNiwgICAgICAgICAgIF0gOSdcbiAgICBNNDogICAgICAgICAnWyAgIC01LCAgICAgICAgICAgXSAxMCdcbiAgICBNNTogICAgICAgICAnWyAgIC00LCAgICAgICAgICAgXSAxMSdcbiAgICBNNjogICAgICAgICAnWyAgIC0zLCAgICAgICAgICAgXSAxMidcbiAgICBNNzogICAgICAgICAnWyAgIC0yLCAgICAgICAgICAgXSAxMydcbiAgICBNODogICAgICAgICAnWyAgIC0xLCAgICAgICAgICAgXSAxNCdcbiAgICBOTDIwOiAgICAgICAnWyAgICswLCAgLTIwLCAgICAgXSAxNSdcbiAgICBOOiAgICAgICAgICAnWyAgICswLCAgICAgICAgICAgXSAxNidcbiAgICBOUDIwOiAgICAgICAnWyAgICswLCAgKzIwLCAgICAgXSAxNydcbiAgICBPOTogICAgICAgICAnWyAgICs5LCAgICAgICAgICAgXSAxOCdcbiAgICBQMTBNNjogICAgICAnWyAgKzEwLCAgIC0zLCAgICAgXSAxOSdcbiAgICBQMTBNNzogICAgICAnWyAgKzEwLCAgIC0yLCAgICAgXSAyMCdcbiAgICBQMTBNODogICAgICAnWyAgKzEwLCAgIC0xLCAgICAgXSAyMSdcbiAgICBQMTA6ICAgICAgICAnWyAgKzEwLCAgICAgICAgICAgXSAyMidcbiAgICBQMTBOOiAgICAgICAnWyAgKzEwLCAgICswLCAgICAgXSAyMydcbiAgICBQMTBPMTogICAgICAnWyAgKzEwLCAgICsxLCAgICAgXSAyNCdcbiAgICBQMTBQMTBNODogICAnWyAgKzEwLCAgKzEwLCAtMSwgXSAyNSdcbiAgICBQMTBQMTA6ICAgICAnWyAgKzEwLCAgKzEwLCAgICAgXSAyNidcbiAgICBQMTBQMjA6ICAgICAnWyAgKzEwLCAgKzIwLCAgICAgXSAyNydcbiAgICBQMjA6ICAgICAgICAnWyAgKzIwLCAgICAgICAgICAgXSAyOCdcbiAgICBQMjBQMTA6ICAgICAnWyAgKzIwLCAgKzEwLCAgICAgXSAyOSdcbiAgICBQOTA6ICAgICAgICAnWyAgKzkwLCAgICAgICAgICAgXSAzMCdcbiAgICBROTAwOiAgICAgICAnWyArOTAwLCAgICAgICAgICAgXSAzMSdcblxuICAgICMgaWRlbnRpY2FsIGIvYyBvZiBwYWRkaW5nOlxuICAgICMgUDEwOiAgICAgICAgJ1sgICsxMCwgICAgICAgXSAyNCdcbiAgICAjIFAxME46ICAgICAgJ1sgICsxMCwgICArMCwgXSAyNSdcblxuICBtYXhfbGVuZ3RoICA9ICBNYXRoLm1heCAoIGsubGVuZ3RoIGZvciBrIGluIE9iamVjdC5rZXlzIGQgKS4uLlxuICAjIyMgdHJhaWxlciBjYW4gYmUgb2YgZml4ZWQgbGVuZ3RoIHNpbmNlIHRoZXJlIGlzIGFuIHVwcGVyIGxpbWl0IHRvIGRpZ2l0IHBvc2l0aW9ucyBnaXZlbiBieVxuICBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiBhcyByZXByZXNlbnRlZCBpbiB0aGUgYmFzZSBvZiBjaG9pY2UgKGhlcmUgMTApIHRpbWVzIHRoZSBtYXhpbXVtIG51bWJlciBvZlxuICBkaW1lbnNpb25zIG9mIHRoZSBWTlI6ICMjI1xuICB0cmFpbGVyICAgICA9ICdOTk5OTk5OTk5OTidcbiAgZGVidWcgJ86pYnNrX19fMScsIHsgbWF4X2xlbmd0aCwgfVxuICAjIGQxID0gT2JqZWN0LmZyb21FbnRyaWVzICggWyAoIGsucGFkRW5kIG1heF9sZW5ndGgsICdOJyApLCB2LCBdIGZvciBrLCB2IG9mIGQgKVxuICAjIGQxID0gT2JqZWN0LmZyb21FbnRyaWVzICggWyAoIGsgKyB0cmFpbGVyICksIHYsIF0gZm9yIGssIHYgb2YgZCApXG4gIGtleXMgICAgICAgID0gKCBrIGZvciBbIHNrLCBrLCBdIGluICggWyBrICsgdHJhaWxlciwgaywgXSBmb3IgayBvZiBkICkuc29ydCgpIClcbiAgZm9yIGtleSBpbiBrZXlzXG4gICAgayA9IGxpbWUgcmV2ZXJzZSBmXCIgI3trZXl9Oj4xMGM7IFwiXG4gICAgdiA9IGdvbGQgcmV2ZXJzZSBmXCIgI3tkWyBrZXkgXX06PDMwYzsgXCJcbiAgICBxID0ga2V5LnJlcGxhY2UgLyhbQS1aXSlbMC05XSovZywgJyQxJ1xuICAgIHEgPSBxLmxlbmd0aFxuICAgIGhlbHAgJ86pYnNrX19fMScsIFwiI3trfSN7dn0gI3txfVwiXG4gIHJlZjAgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICBmID0gKCBuICkgLT5cbiAgICByZXR1cm4gJ04nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgbiBpcyAwXG4gICAgcmV0dXJuICggICAgICAgICAgICBuLnRvU3RyaW5nIDMyICkudG9VcHBlckNhc2UoKSAgaWYgbiA+IDBcbiAgICByZXR1cm4gKCAoIHJlZjAgKyBuICkudG9TdHJpbmcgMzIgKS50b1VwcGVyQ2FzZSgpXG4gICAgIyAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMVxuICAjIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLnRvU3RyaW5nIDMyXG4gICMgJzd2dnZ2dnZ2dnZ2J1xuXG4gICMjI1xuXG4gICMgVmVjdG9yaWFsIE51bWJlcnMgKFZOUnMpIHRvIFRyYW5zZm9ybSBUZXh0IGFuZCBLZWVwIEl0XG5cblxuICBYIFsgMTAsIDMyLCBdIGBUaGUgcmVhZGluZyBvZiDmqIIgaXMgPHB5L3l1ZTQvIGZvciA8Z2xvc3MvbXVzaWMvIG9yIDxweS9sZTQvIG1lYW5pbmcgPGdsb3NzL2pveS8uYFxuICBfIFsgMTAsIDMyLCAgMSwgICAgXSBgVGhlIHJlYWRpbmcgb2Yg5qiCIGlzIGBcbiAgWCBbIDEwLCAzMiwgIDIsICAgIF0gYDxweS9gXG4gIFggWyAxMCwgMzIsICAzLCAgICBdIGB5dWU0YFxuICBfIFsgMTAsIDMyLCAgMywgMSwgXSBgPHNwYW4gY2xhc3M9cGlueWluPnl1w6g8L3NwYW4+YFxuICBYIFsgMTAsIDMyLCAgNCwgICAgXSBgL2BcbiAgXyBbIDEwLCAzMiwgIDUsICAgIF0gYCBmb3IgYFxuICBYIFsgMTAsIDMyLCAgNiwgICAgXSBgPGdsb3NzL2BcbiAgWCBbIDEwLCAzMiwgIDcsICAgIF0gYG11c2ljYFxuICBfIFsgMTAsIDMyLCAgNywgMSwgXSBgPHNwYW4gY2xhc3M9Z2xvc3M+bXVzaWM8L3NwYW4+YFxuICBYIFsgMTAsIDMyLCAgOCwgICAgXSBgL2BcbiAgXyBbIDEwLCAzMiwgIDksICAgIF0gYCBvciBgXG4gIFggWyAxMCwgMzIsIDEwLCAgICBdIGA8cHkvYFxuICBYIFsgMTAsIDMyLCAxMSwgICAgXSBgbGU0YFxuICBfIFsgMTAsIDMyLCAxMSwgMSwgXSBgPHNwYW4gY2xhc3M9cGlueWluPmzDqDwvc3Bhbj5gXG4gIF8gWyAxMCwgMzIsIDEyLCAgICBdIGAgbWVhbmluZyBgXG4gIFggWyAxMCwgMzIsIDEzLCAgICBdIGA8Z2xvc3MvYFxuICBYIFsgMTAsIDMyLCAxNCwgICAgXSBgam95YFxuICBfIFsgMTAsIDMyLCAxNCwgMSwgXSBgPHNwYW4gY2xhc3M9Z2xvc3M+am95PC9zcGFuPmBcbiAgWCBbIDEwLCAzMiwgMTUsICAgIF0gYC9gXG4gIF8gWyAxMCwgMzIsIDE2LCAgICBdIGAuXFxuYFxuXG4gIE5PVEUgY291bGQndmUgcmF0aGVyIHN1cnJvdW5kZWQgZ2xvc3NlczpcblxuICBYIFsgMTAsIDMyLCAxMywgICAgXSBgPGdsb3NzL2BcbiAgXyBbIDEwLCAzMiwgMTQsIC0xLF0gYDxzcGFuIGNsYXNzPWdsb3NzPmBcbiAgXyBbIDEwLCAzMiwgMTQsICAgIF0gYGpveWBcbiAgXyBbIDEwLCAzMiwgMTQsIDEsIF0gYDwvc3Bhbj5gXG4gIFggWyAxMCwgMzIsIDE1LCAgICBdIGAvYFxuXG4gICMjI1xuXG5cbiAgcmV0dXJuIG51bGxcblxuIyBBQkNERUZHSElKS0xNXG4jIE5PUFFSU1RVVldYWVpcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgYXdhaXQgZGVtb19iaW5hcnlfbGV4aWNvZ3JhcGhpY19zb3J0a2V5KClcbiAgcmV0dXJuIG51bGxcbiJdfQ==
