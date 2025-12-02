(async function() {
  'use strict';
  var GTNG, GUY, SFMODULES, Test, alert, blue, bold, debug, echo, gold, green, grey, help, info, inspect, log, plain, praise, red, reverse, rpr, tests, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('test-object-tools'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  // { f }                     = require '../../../apps/effstring'
  // write                     = ( p ) -> process.stdout.write p
  // { nfa }                   = require '../../../apps/normalize-function-arguments'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  // FS                        = require 'node:fs'
  // PATH                      = require 'node:path'

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    module_exports: function() {
      var type_of, Ωot___1, Ωot___2, Ωot___3, Ωot___4;
      ({type_of} = SFMODULES.unstable.require_type_of());
      //.......................................................................................................
      this.eq((Ωot___1 = function() {
        return type_of(SFMODULES.unstable.require_clean_assign);
      }), 'function');
      this.eq((Ωot___2 = function() {
        return type_of(SFMODULES.unstable.require_pick);
      }), 'function');
      this.eq((Ωot___3 = function() {
        return type_of(SFMODULES.unstable.require_remap);
      }), 'function');
      this.eq((Ωot___4 = function() {
        return type_of(SFMODULES.unstable.require_get_prototype_chain);
      }), 'function');
      // { walk_buffers_with_positions,
      //   walk_lines_with_positions, } = SFMODULES.unstable.require_fast_linereader()
      //.......................................................................................................
      // @throws ( Ωot___5 = -> esql.unquote_name ''                ), /expected a name/
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    module_exports: function() {
      var A, B, get_all_in_prototype_chain, get_prototype_chain, null_obj, prop_A, prop_B, type_of, Ωot__10, Ωot__11, Ωot__12, Ωot__13, Ωot__14, Ωot__15, Ωot___6, Ωot___7, Ωot___8, Ωot___9;
      ({type_of} = SFMODULES.unstable.require_type_of());
      //.......................................................................................................
      ({get_prototype_chain, get_all_in_prototype_chain} = SFMODULES.unstable.require_get_prototype_chain());
      A = (function() {
        //.......................................................................................................
        class A {};

        A.words = ['a', 'French', 'dictionary'];

        return A;

      }).call(this);
      B = (function() {
        class B extends A {};

        B.words = ['the', 'British', 'gardener'];

        return B;

      }).call(this);
      //.......................................................................................................
      prop_A = Object.getPrototypeOf(A);
      prop_B = Object.getPrototypeOf(B);
      null_obj = Object.create(null);
      //.......................................................................................................
      this.eq((Ωot___6 = function() {
        return get_prototype_chain(null);
      }), []);
      this.eq((Ωot___7 = function() {
        return get_prototype_chain(void 0);
      }), []);
      this.eq((Ωot___8 = function() {
        return get_prototype_chain({});
      }), [{}, null_obj]);
      this.eq((Ωot___9 = function() {
        return get_prototype_chain(A);
      }), [A, prop_A, null_obj]);
      this.eq((Ωot__10 = function() {
        return get_prototype_chain(B);
      }), [B, prop_B, prop_A, null_obj]);
      this.eq((Ωot__11 = function() {
        return get_prototype_chain(new A());
      }), [{}, {}, null_obj]);
      this.eq((Ωot__12 = function() {
        return get_prototype_chain(new B());
      }), [{}, {}, {}, null_obj]);
      //.......................................................................................................
      this.eq((Ωot__13 = function() {
        return get_all_in_prototype_chain(B, 'words');
      }), [['the', 'British', 'gardener'], ['a', 'French', 'dictionary']]);
      this.eq((Ωot__14 = function() {
        return get_all_in_prototype_chain((new B()).constructor, 'words');
      }), [['the', 'British', 'gardener'], ['a', 'French', 'dictionary']]);
      this.eq((Ωot__15 = function() {
        return get_all_in_prototype_chain(new B(), 'words');
      }), []);
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
        show_passes: true,
        report_checks: true
      };
      return (new Test(guytest_cfg)).test({tests});
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3Qtb2JqZWN0LXRvb2xzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixtQkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQyxFQWJBOzs7OztFQTRCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSxtQ0FBUixFQTlCNUI7Ozs7OztFQXFDQSxJQUFDLENBQUEsS0FBRCxHQUFTLEtBQUEsR0FHUCxDQUFBOztJ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QUUsS0FBRixFQUFTLFNBQVQsRUFBb0IsVUFBcEIsQ0FBRixFQUFvQyxDQUFFLEdBQUYsRUFBTyxRQUFQLEVBQWlCLFlBQWpCLENBQXBDLENBQW5GO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLE9BQUEsR0FBVSxRQUFBLENBQUEsQ0FBQTtlQUFHLDBCQUFBLENBQTZCLElBQUksQ0FBSixDQUFBLENBQTdCLEVBQXFELE9BQXJEO01BQUgsQ0FBWixDQUFKLEVBQW1GLEVBQW5GLEVBeEJKOztBQTBCSSxhQUFPO0lBM0JPO0VBZmhCLEVBeENGOzs7RUF1RkEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsSUFBdkM7UUFBNkMsYUFBQSxFQUFlO01BQTVEO2FBQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixDQUFFLEtBQUYsQ0FBOUI7SUFIc0MsQ0FBQSxJQUF4Qzs7QUF2RkEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICd0ZXN0LW9iamVjdC10b29scydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyB7IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG4jIHsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuIyBGUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiMgUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRlc3RzID0gdGVzdHMgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbW9kdWxlX2V4cG9ydHM6IC0+XG4gICAgeyB0eXBlX29mLCAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqW90X19fMSA9IC0+IHR5cGVfb2YgU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfY2xlYW5fYXNzaWduICAgICAgICAgICksICdmdW5jdGlvbidcbiAgICBAZXEgKCDOqW90X19fMiA9IC0+IHR5cGVfb2YgU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcGljayAgICAgICAgICAgICAgICAgICksICdmdW5jdGlvbidcbiAgICBAZXEgKCDOqW90X19fMyA9IC0+IHR5cGVfb2YgU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfcmVtYXAgICAgICAgICAgICAgICAgICksICdmdW5jdGlvbidcbiAgICBAZXEgKCDOqW90X19fNCA9IC0+IHR5cGVfb2YgU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3Byb3RvdHlwZV9jaGFpbiAgICksICdmdW5jdGlvbidcbiAgICAjIHsgd2Fsa19idWZmZXJzX3dpdGhfcG9zaXRpb25zLFxuICAgICMgICB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zLCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZmFzdF9saW5lcmVhZGVyKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgQHRocm93cyAoIM6pb3RfX181ID0gLT4gZXNxbC51bnF1b3RlX25hbWUgJycgICAgICAgICAgICAgICAgKSwgL2V4cGVjdGVkIGEgbmFtZS9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBtb2R1bGVfZXhwb3J0czogLT5cbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHsgZ2V0X3Byb3RvdHlwZV9jaGFpbixcbiAgICAgIGdldF9hbGxfaW5fcHJvdG90eXBlX2NoYWluLCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3Byb3RvdHlwZV9jaGFpbigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBBXG4gICAgICBAd29yZHMgPSBbICdhJywgJ0ZyZW5jaCcsICdkaWN0aW9uYXJ5JywgXVxuICAgIGNsYXNzIEIgZXh0ZW5kcyBBXG4gICAgICBAd29yZHMgPSBbICd0aGUnLCAnQnJpdGlzaCcsICdnYXJkZW5lcicsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb3BfQSAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiBBXG4gICAgcHJvcF9CICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIEJcbiAgICBudWxsX29iaiAgPSBPYmplY3QuY3JlYXRlIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pb3RfX182ID0gLT4gZ2V0X3Byb3RvdHlwZV9jaGFpbiBudWxsICAgICAgICAgICApLCBbXVxuICAgIEBlcSAoIM6pb3RfX183ID0gLT4gZ2V0X3Byb3RvdHlwZV9jaGFpbiB1bmRlZmluZWQgICAgICApLCBbXVxuICAgIEBlcSAoIM6pb3RfX184ID0gLT4gZ2V0X3Byb3RvdHlwZV9jaGFpbiB7fSAgICAgICAgICAgICApLCBbIHt9LCBudWxsX29iaiwgXVxuICAgIEBlcSAoIM6pb3RfX185ID0gLT4gZ2V0X3Byb3RvdHlwZV9jaGFpbiBBICAgICAgICAgICAgICApLCBbIEEsIHByb3BfQSwgbnVsbF9vYmosIF1cbiAgICBAZXEgKCDOqW90X18xMCA9IC0+IGdldF9wcm90b3R5cGVfY2hhaW4gQiAgICAgICAgICAgICAgKSwgWyBCLCBwcm9wX0IsIHByb3BfQSwgbnVsbF9vYmosIF1cbiAgICBAZXEgKCDOqW90X18xMSA9IC0+IGdldF9wcm90b3R5cGVfY2hhaW4gbmV3IEEoKSAgICAgICAgKSwgWyB7fSwge30sIG51bGxfb2JqLCBdXG4gICAgQGVxICggzqlvdF9fMTIgPSAtPiBnZXRfcHJvdG90eXBlX2NoYWluIG5ldyBCKCkgICAgICAgICksIFsge30sIHt9LCB7fSwgbnVsbF9vYmosIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pb3RfXzEzID0gLT4gZ2V0X2FsbF9pbl9wcm90b3R5cGVfY2hhaW4gQiwgICAgICAgICAgICAgICAgICAgICAgICAnd29yZHMnICksIFsgWyAndGhlJywgJ0JyaXRpc2gnLCAnZ2FyZGVuZXInIF0sIFsgJ2EnLCAnRnJlbmNoJywgJ2RpY3Rpb25hcnknIF0gXVxuICAgIEBlcSAoIM6pb3RfXzE0ID0gLT4gZ2V0X2FsbF9pbl9wcm90b3R5cGVfY2hhaW4gKCBuZXcgQigpICkuY29uc3RydWN0b3IsICAnd29yZHMnICksIFsgWyAndGhlJywgJ0JyaXRpc2gnLCAnZ2FyZGVuZXInIF0sIFsgJ2EnLCAnRnJlbmNoJywgJ2RpY3Rpb25hcnknIF0gXVxuICAgIEBlcSAoIM6pb3RfXzE1ID0gLT4gZ2V0X2FsbF9pbl9wcm90b3R5cGVfY2hhaW4gKCBuZXcgQigpICksICAgICAgICAgICAgICAnd29yZHMnICksIFtdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiJdfQ==
