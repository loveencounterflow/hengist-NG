(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, blue, bold, debug, echo, gold, green, grey, help, info, inspect, log, plain, praise, red, reverse, rpr, tests, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('fictional-reconstructive-egyptian'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  // { f }                     = require '../../../apps/effstring'
  // # write                     = ( p ) -> process.stdout.write p
  // { nfa }                   = require '../../../apps/normalize-function-arguments'
  // SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
  // FS                        = require 'node:fs'
  // PATH                      = require 'node:path'
  // { type_of,              } = ( require '../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics' ).require_type_of()

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    interface: async function() {
      var ICU, k;
      // debug 'Ωfre___1', require '../../../apps/fictional-reconstructive-egyptian'
      // debug 'Ωfre___2', require '../../../apps/fictional-reconstructive-egyptian/node_modules/icu/lib/index.mjs'
      ICU = (await import('../../../apps/fictional-reconstructive-egyptian/node_modules/icu/lib/index.mjs'));
      debug('Ωcrmmd___3', (function() {
        var results;
        results = [];
        for (k in ICU) {
          if (/trans/iv.test(k)) {
            results.push(k);
          }
        }
        return results;
      })());
      debug('Ωcrmmd___3', new ICU.TransformResult());
      // @eq ( Ωcrmmd___4 = -> type_of FREP.find_all_repetitions                     ), 'function'
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      var guytest_cfg;
      // demo_infinite_proxy()
      // demo_colorful_proxy()
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: true,
        report_checks: true
      };
      await (new Test(guytest_cfg)).async_test({tests});
      // ( new Test guytest_cfg ).test { find_reduplication_candidates: tests.find_reduplication_candidates, }
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLG1DQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxHQVJGLEVBU0UsSUFURixFQVVFLE9BVkYsRUFXRSxHQVhGLENBQUEsR0FXNEIsR0FBRyxDQUFDLEdBWGhDOztFQVlBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCLEVBMUJBOzs7Ozs7Ozs7OztFQXNDQSxJQUFDLENBQUEsS0FBRCxHQUFTLEtBQUEsR0FHUCxDQUFBOztJQUFBLFNBQUEsRUFBVyxNQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ2IsVUFBQSxHQUFBLEVBQUEsQ0FBQTs7O01BRUksR0FBQSxHQUFNLENBQUEsTUFBTSxNQUFBLENBQVEsZ0ZBQVIsQ0FBTjtNQUNOLEtBQUEsQ0FBTSxZQUFOOztBQUFzQjtRQUFBLEtBQUEsUUFBQTtjQUFvQixTQUFTLENBQUMsSUFBVixDQUFlLENBQWY7eUJBQXBCOztRQUFBLENBQUE7O1VBQXRCO01BQ0EsS0FBQSxDQUFNLFlBQU4sRUFBb0IsSUFBSSxHQUFHLENBQUMsZUFBUixDQUFBLENBQXBCLEVBSko7OzthQU9LO0lBUlE7RUFBWCxFQXpDRjs7O0VBcURBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsS0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBLFdBQUE7OztNQUVFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLElBQXZDO1FBQTZDLGFBQUEsRUFBZTtNQUE1RDtNQUNkLE1BQU0sQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxVQUF6QixDQUFvQyxDQUFFLEtBQUYsQ0FBcEMsRUFKUjs7YUFNRztJQVBxQyxDQUFBLElBQXhDOztBQXJEQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2ZpY3Rpb25hbC1yZWNvbnN0cnVjdGl2ZS1lZ3lwdGlhbidcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuIyB7IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jICMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbiMgeyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiMgU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiMgRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4jIFBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4jIHsgdHlwZV9vZiwgICAgICAgICAgICAgIH0gPSAoIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcy9saWIvdW5zdGFibGUtcnByLXR5cGVfb2YtYnJpY3MnICkucmVxdWlyZV90eXBlX29mKClcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW50ZXJmYWNlOiAtPlxuICAgICMgZGVidWcgJ86pZnJlX19fMScsIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZmljdGlvbmFsLXJlY29uc3RydWN0aXZlLWVneXB0aWFuJ1xuICAgICMgZGVidWcgJ86pZnJlX19fMicsIHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZmljdGlvbmFsLXJlY29uc3RydWN0aXZlLWVneXB0aWFuL25vZGVfbW9kdWxlcy9pY3UvbGliL2luZGV4Lm1qcydcbiAgICBJQ1UgPSBhd2FpdCBpbXBvcnQoICcuLi8uLi8uLi9hcHBzL2ZpY3Rpb25hbC1yZWNvbnN0cnVjdGl2ZS1lZ3lwdGlhbi9ub2RlX21vZHVsZXMvaWN1L2xpYi9pbmRleC5tanMnIClcbiAgICBkZWJ1ZyAnzqljcm1tZF9fXzMnLCAoIGsgZm9yIGsgb2YgSUNVIHdoZW4gL3RyYW5zL2l2LnRlc3QgayApXG4gICAgZGVidWcgJ86pY3JtbWRfX18zJywgbmV3IElDVS5UcmFuc2Zvcm1SZXN1bHQoKVxuICAgICMgQGVxICggzqljcm1tZF9fXzQgPSAtPiB0eXBlX29mIEZSRVAuZmluZF9hbGxfcmVwZXRpdGlvbnMgICAgICAgICAgICAgICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb19pbmZpbml0ZV9wcm94eSgpXG4gICMgZGVtb19jb2xvcmZ1bF9wcm94eSgpXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogdHJ1ZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICBhd2FpdCAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkuYXN5bmNfdGVzdCB7IHRlc3RzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBmaW5kX3JlZHVwbGljYXRpb25fY2FuZGlkYXRlczogdGVzdHMuZmluZF9yZWR1cGxpY2F0aW9uX2NhbmRpZGF0ZXMsIH1cbiAgO251bGxcbiJdfQ==
