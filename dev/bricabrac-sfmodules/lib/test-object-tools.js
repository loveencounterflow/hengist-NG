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
    get_prototype_chain: function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3Qtb2JqZWN0LXRvb2xzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixtQkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQyxFQWJBOzs7OztFQTRCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSxtQ0FBUixFQTlCNUI7Ozs7OztFQXFDQSxJQUFDLENBQUEsS0FBRCxHQUFTLEtBQUEsR0FHUCxDQUFBOztJ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QUFFLEtBQUYsRUFBUyxTQUFULEVBQW9CLFVBQXBCLENBQUYsRUFBb0MsQ0FBRSxHQUFGLEVBQU8sUUFBUCxFQUFpQixZQUFqQixDQUFwQyxDQUFuRjtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxPQUFBLEdBQVUsUUFBQSxDQUFBLENBQUE7ZUFBRywwQkFBQSxDQUE2QixJQUFJLENBQUosQ0FBQSxDQUE3QixFQUFxRCxPQUFyRDtNQUFILENBQVosQ0FBSixFQUFtRixFQUFuRixFQXhCSjs7QUEwQkksYUFBTztJQTNCWTtFQWZyQixFQXhDRjs7O0VBdUZBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQTtNQUFFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLElBQXZDO1FBQTZDLGFBQUEsRUFBZTtNQUE1RDthQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsQ0FBRSxLQUFGLENBQTlCO0lBSHNDLENBQUEsSUFBeEM7O0FBdkZBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAndGVzdC1vYmplY3QtdG9vbHMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgeyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxuIyB7IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiMgRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG4jIFBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG1vZHVsZV9leHBvcnRzOiAtPlxuICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlvdF9fXzEgPSAtPiB0eXBlX29mIFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2NsZWFuX2Fzc2lnbiAgICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgQGVxICggzqlvdF9fXzIgPSAtPiB0eXBlX29mIFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3BpY2sgICAgICAgICAgICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgQGVxICggzqlvdF9fXzMgPSAtPiB0eXBlX29mIFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3JlbWFwICAgICAgICAgICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgQGVxICggzqlvdF9fXzQgPSAtPiB0eXBlX29mIFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2dldF9wcm90b3R5cGVfY2hhaW4gICApLCAnZnVuY3Rpb24nXG4gICAgIyB7IHdhbGtfYnVmZmVyc193aXRoX3Bvc2l0aW9ucyxcbiAgICAjICAgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucywgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zhc3RfbGluZXJlYWRlcigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIEB0aHJvd3MgKCDOqW90X19fNSA9IC0+IGVzcWwudW5xdW90ZV9uYW1lICcnICAgICAgICAgICAgICAgICksIC9leHBlY3RlZCBhIG5hbWUvXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0X3Byb3RvdHlwZV9jaGFpbjogLT5cbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHsgZ2V0X3Byb3RvdHlwZV9jaGFpbixcbiAgICAgIGdldF9hbGxfaW5fcHJvdG90eXBlX2NoYWluLCB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X3Byb3RvdHlwZV9jaGFpbigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjbGFzcyBBXG4gICAgICBAd29yZHMgPSBbICdhJywgJ0ZyZW5jaCcsICdkaWN0aW9uYXJ5JywgXVxuICAgIGNsYXNzIEIgZXh0ZW5kcyBBXG4gICAgICBAd29yZHMgPSBbICd0aGUnLCAnQnJpdGlzaCcsICdnYXJkZW5lcicsIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb3BfQSAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiBBXG4gICAgcHJvcF9CICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIEJcbiAgICBudWxsX29iaiAgPSBPYmplY3QuY3JlYXRlIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pb3RfX182ID0gLT4gZ2V0X3Byb3RvdHlwZV9jaGFpbiBudWxsICAgICAgICAgICApLCBbXVxuICAgIEBlcSAoIM6pb3RfX183ID0gLT4gZ2V0X3Byb3RvdHlwZV9jaGFpbiB1bmRlZmluZWQgICAgICApLCBbXVxuICAgIEBlcSAoIM6pb3RfX184ID0gLT4gZ2V0X3Byb3RvdHlwZV9jaGFpbiB7fSAgICAgICAgICAgICApLCBbIHt9LCBudWxsX29iaiwgXVxuICAgIEBlcSAoIM6pb3RfX185ID0gLT4gZ2V0X3Byb3RvdHlwZV9jaGFpbiBBICAgICAgICAgICAgICApLCBbIEEsIHByb3BfQSwgbnVsbF9vYmosIF1cbiAgICBAZXEgKCDOqW90X18xMCA9IC0+IGdldF9wcm90b3R5cGVfY2hhaW4gQiAgICAgICAgICAgICAgKSwgWyBCLCBwcm9wX0IsIHByb3BfQSwgbnVsbF9vYmosIF1cbiAgICBAZXEgKCDOqW90X18xMSA9IC0+IGdldF9wcm90b3R5cGVfY2hhaW4gbmV3IEEoKSAgICAgICAgKSwgWyB7fSwge30sIG51bGxfb2JqLCBdXG4gICAgQGVxICggzqlvdF9fMTIgPSAtPiBnZXRfcHJvdG90eXBlX2NoYWluIG5ldyBCKCkgICAgICAgICksIFsge30sIHt9LCB7fSwgbnVsbF9vYmosIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pb3RfXzEzID0gLT4gZ2V0X2FsbF9pbl9wcm90b3R5cGVfY2hhaW4gQiwgICAgICAgICAgICAgICAgICAgICAgICAnd29yZHMnICksIFsgWyAndGhlJywgJ0JyaXRpc2gnLCAnZ2FyZGVuZXInIF0sIFsgJ2EnLCAnRnJlbmNoJywgJ2RpY3Rpb25hcnknIF0gXVxuICAgIEBlcSAoIM6pb3RfXzE0ID0gLT4gZ2V0X2FsbF9pbl9wcm90b3R5cGVfY2hhaW4gKCBuZXcgQigpICkuY29uc3RydWN0b3IsICAnd29yZHMnICksIFsgWyAndGhlJywgJ0JyaXRpc2gnLCAnZ2FyZGVuZXInIF0sIFsgJ2EnLCAnRnJlbmNoJywgJ2RpY3Rpb25hcnknIF0gXVxuICAgIEBlcSAoIM6pb3RfXzE1ID0gLT4gZ2V0X2FsbF9pbl9wcm90b3R5cGVfY2hhaW4gKCBuZXcgQigpICksICAgICAgICAgICAgICAnd29yZHMnICksIFtdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiB0cnVlLCByZXBvcnRfY2hlY2tzOiB0cnVlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdGVzdHMsIH1cbiJdfQ==
