(async function() {
  'use strict';
  var GTNG, GUY, SFMODULES, Test, alert, createAsPipes, debug, demo, demo_2, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-sfmodules/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  ({createAsPipes} = require('aspipes'));

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  //===========================================================================================================
  demo = async function() {
    var asPipe, ex, greeting, pipe, take, upper;
    ({pipe, asPipe, take} = createAsPipes());
    upper = asPipe(function(d) {
      return d.toUpperCase();
    });
    ex = asPipe(function(d, mark = '!') {
      return d + mark;
    });
    greeting = pipe('hello');
    // greeting        \
    //   | upper       \
    //   | ex '!!!'
    greeting + upper;
    greeting + ex('!!!');
    info('Ωap___1', greeting);
    info('Ωap___2', (await greeting.run()));
    info('Ωap___3', (await greeting.run()));
    info('Ωap___4', (await greeting.run()));
    return null;
  };

  //===========================================================================================================
  demo_2 = function() {
    var $, CFG, Pipeline, nameit, push, type_of;
    ({nameit} = SFMODULES.require_nameit());
    ({type_of} = SFMODULES.unstable.require_type_of());
    CFG = Symbol('CFG');
    // misfit                    = Symbol 'misfit'
    //---------------------------------------------------------------------------------------------------------
    Pipeline = class Pipeline {
      constructor() {
        /* TAINT what happens with empty pipeline? */
        var callable;
        /* TAINT use Object.freeze, push sets new array */
        this.transforms = [];
        callable = function*(d) {
          return (yield* this.transforms[0](d));
        };
        Object.setPrototypeOf(callable, this);
        return callable;
      }

    };
    //---------------------------------------------------------------------------------------------------------
    $ = function(cfg, fn) {
      fn[CFG] = cfg;
      return fn;
    };
    //---------------------------------------------------------------------------------------------------------
    push = function(pipeline, gfn) {
      var R, cfg, first, has_first, has_last, has_nxt, last, my_idx, nxt, original_gfn, type;
      switch (type = type_of(gfn)) {
        case 'function':
          // role = 'watcher'
          original_gfn = gfn;
          gfn = function*(d) {
            original_gfn(d);
            return (yield d);
          };
          break;
        case 'generatorfunction':
          null;
          break;
        default:
          // role = 'transform'
          `throw new Error expect a synchronous function or a synchronous generator function, got a ${type}`;
      }
      //.......................................................................................................
      my_idx = pipeline.length;
      first = null;
      last = null;
      has_first = false;
      has_last = false;
      //.......................................................................................................
      if ((cfg = gfn[CFG]) != null) {
        has_first = Reflect.has(cfg, 'first');
        has_last = Reflect.has(cfg, 'last');
        if (has_first) {
          first = cfg.first;
        }
        if (has_last) {
          last = cfg.last;
        }
      }
      // debug 'Ωap___5', { first, gfn, }
      //.......................................................................................................
      nxt = null;
      has_nxt = null;
      //.......................................................................................................
      R = nameit(gfn.name, function*(d) {
        var j;
        if (nxt == null) {
          nxt = pipeline[my_idx + 1];
          has_nxt = nxt != null;
        }
        //.....................................................................................................
        if (has_first) {
          yield* gfn(first);
        }
//.....................................................................................................
        for (j of gfn(d)) {
          if (has_nxt) {
            yield* nxt(j);
          } else {
            yield j;
          }
        }
        //.....................................................................................................
        if (has_last) {
          yield* gfn(last);
        }
        //.....................................................................................................
        return null;
      });
      //.......................................................................................................
      pipeline.push(R);
      return R;
    };
    (function() {      //.........................................................................................................
      var add_2, d, ex, first, last, pipeline, upper, watch;
      first = Symbol('(first)');
      last = Symbol('(last)');
      pipeline = [];
      push(pipeline, upper = function*(d) {
        return (yield d.toUpperCase());
      });
      push(pipeline, ex = function*(d, mark = '!') {
        return (yield d + mark);
      });
      // push pipeline, nothing  = ( d              ) -> urge 'Ωap___6', 'nothing:', rpr d; yield return null
      // push pipeline, add      = ( d              ) -> urge 'Ωap___7', 'add:    ', rpr d; yield """Let's say: \""""; yield d; yield '".'
      push(pipeline, watch = function(d) {
        return help('Ωap___8', rpr(d));
      });
      push(pipeline, $({first, last}, add_2 = function*(d) {
        if (d === first) {
          // urge 'Ωap___9', 'add_2:    ', rpr d
          return (yield `Let's say: \"`);
        }
        if (d === last) {
          return (yield '".');
        }
        return (yield d);
      }));
      push(pipeline, watch = function(d) {
        return urge('Ωap__10', rpr(d));
      });
      //.........................................................................................................
      debug('Ωap__11', pipeline);
      info('Ωap__12', [
        ...((function() {
          var results;
          results = [];
          for (d of pipeline[0]('hidey-ho')) {
            results.push(d);
          }
          return results;
        })())
      ]);
      info('Ωap__13', [
        ...((function() {
          var results;
          results = [];
          for (d of pipeline[0]('hidey-ho')) {
            results.push(d);
          }
          return results;
        })())
      ].join(''));
      info('Ωap__14', [
        ...((function() {
          var results;
          results = [];
          for (d of pipeline[0]('hidey-ho')) {
            results.push(d);
          }
          return results;
        })())
      ].join(''));
      return null;
    })();
    //.........................................................................................................
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      // await demo()
      return (await demo_2());
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tYXNwaXBlcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxhQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxDQUFBLENBQUUsYUFBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSxTQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLG1DQUFSLEVBdEI1Qjs7O0VBMEJBLElBQUEsR0FBTyxNQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ1AsUUFBQSxNQUFBLEVBQUEsRUFBQSxF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LFNBQUwsRUFBZ0I7UUFBRSxHQUFBOztBQUFFO1VBQUEsS0FBQSw0QkFBQTt5QkFBQTtVQUFBLENBQUE7O1lBQUYsQ0FBRjtPQUFpRCxDQUFDLElBQWxELENBQXVELEVBQXZELENBQWhCO0FBQ0EsYUFBTztJQXBCTixDQUFBLElBakVMOztBQXVGRSxXQUFPO0VBeEZBLEVBN0NUOzs7RUF5SUEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7O2FBRXRDLENBQUEsTUFBTSxNQUFBLENBQUEsQ0FBTjtJQUZzQyxDQUFBLElBQXhDOztBQXpJQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLXNmbW9kdWxlcy90ZXN0LWJhc2ljcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG57IGNyZWF0ZUFzUGlwZXMsICAgICAgICB9ID0gcmVxdWlyZSAnYXNwaXBlcydcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vID0gLT5cbiAgeyBwaXBlLFxuICAgIGFzUGlwZSxcbiAgICB0YWtlLCB9ID0gY3JlYXRlQXNQaXBlcygpXG4gIHVwcGVyICAgICAgICAgPSBhc1BpcGUgKCBkICAgICAgICAgICAgICApIC0+IGQudG9VcHBlckNhc2UoKVxuICBleCAgICAgICAgICAgID0gYXNQaXBlICggZCwgbWFyayA9ICchJyAgKSAtPiBkICsgbWFya1xuICBncmVldGluZyAgICAgID0gcGlwZSAnaGVsbG8nXG4gICMgZ3JlZXRpbmcgICAgICAgIFxcXG4gICMgICB8IHVwcGVyICAgICAgIFxcXG4gICMgICB8IGV4ICchISEnXG4gIGdyZWV0aW5nICArIHVwcGVyXG4gIGdyZWV0aW5nICArIGV4ICchISEnXG4gIGluZm8gJ86pYXBfX18xJywgZ3JlZXRpbmdcbiAgaW5mbyAnzqlhcF9fXzInLCBhd2FpdCBncmVldGluZy5ydW4oKVxuICBpbmZvICfOqWFwX19fMycsIGF3YWl0IGdyZWV0aW5nLnJ1bigpXG4gIGluZm8gJ86pYXBfX180JywgYXdhaXQgZ3JlZXRpbmcucnVuKClcbiAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vXzIgPSAtPlxuICB7IG5hbWVpdCwgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfbmFtZWl0KClcbiAgeyB0eXBlX29mLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICBDRkcgICAgICAgICAgICAgICAgICAgICAgID0gU3ltYm9sICdDRkcnXG4gICMgbWlzZml0ICAgICAgICAgICAgICAgICAgICA9IFN5bWJvbCAnbWlzZml0J1xuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsYXNzIFBpcGVsaW5lXG4gICAgY29uc3RydWN0b3I6IC0+XG4gICAgICAjIyMgVEFJTlQgdXNlIE9iamVjdC5mcmVlemUsIHB1c2ggc2V0cyBuZXcgYXJyYXkgIyMjXG4gICAgICBAdHJhbnNmb3JtcyA9IFtdXG4gICAgICAjIyMgVEFJTlQgd2hhdCBoYXBwZW5zIHdpdGggZW1wdHkgcGlwZWxpbmU/ICMjI1xuICAgICAgY2FsbGFibGUgICAgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIEB0cmFuc2Zvcm1zWyAwIF0gZFxuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mIGNhbGxhYmxlLCBAXG4gICAgICByZXR1cm4gY2FsbGFibGVcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAkID0gKCBjZmcsIGZuICkgLT5cbiAgICBmbltDRkddID0gY2ZnXG4gICAgcmV0dXJuIGZuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHVzaCA9ICggcGlwZWxpbmUsIGdmbiApIC0+XG4gICAgc3dpdGNoIHR5cGUgPSB0eXBlX29mIGdmblxuICAgICAgd2hlbiAnZnVuY3Rpb24nXG4gICAgICAgICMgcm9sZSA9ICd3YXRjaGVyJ1xuICAgICAgICBvcmlnaW5hbF9nZm4gID0gZ2ZuXG4gICAgICAgIGdmbiAgICAgICAgICAgPSAoIGQgKSAtPiBvcmlnaW5hbF9nZm4gZDsgeWllbGQgZFxuICAgICAgd2hlbiAnZ2VuZXJhdG9yZnVuY3Rpb24nXG4gICAgICAgIG51bGxcbiAgICAgICAgIyByb2xlID0gJ3RyYW5zZm9ybSdcbiAgICAgIGVsc2UgXCJ0aHJvdyBuZXcgRXJyb3IgZXhwZWN0IGEgc3luY2hyb25vdXMgZnVuY3Rpb24gb3IgYSBzeW5jaHJvbm91cyBnZW5lcmF0b3IgZnVuY3Rpb24sIGdvdCBhICN7dHlwZX1cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgbXlfaWR4ICAgICAgPSBwaXBlbGluZS5sZW5ndGhcbiAgICBmaXJzdCAgICAgICA9IG51bGxcbiAgICBsYXN0ICAgICAgICA9IG51bGxcbiAgICBoYXNfZmlyc3QgICA9IGZhbHNlXG4gICAgaGFzX2xhc3QgICAgPSBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaWYgKCBjZmcgPSBnZm5bIENGRyBdICk/XG4gICAgICBoYXNfZmlyc3QgICA9IFJlZmxlY3QuaGFzIGNmZywgJ2ZpcnN0J1xuICAgICAgaGFzX2xhc3QgICAgPSBSZWZsZWN0LmhhcyBjZmcsICdsYXN0J1xuICAgICAgZmlyc3QgICAgICAgPSBjZmcuZmlyc3QgaWYgaGFzX2ZpcnN0XG4gICAgICBsYXN0ICAgICAgICA9IGNmZy5sYXN0ICBpZiBoYXNfbGFzdFxuICAgICAgIyBkZWJ1ZyAnzqlhcF9fXzUnLCB7IGZpcnN0LCBnZm4sIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIG54dCAgICAgICAgID0gbnVsbFxuICAgIGhhc19ueHQgICAgID0gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgUiA9IG5hbWVpdCBnZm4ubmFtZSwgKCBkICkgLT5cbiAgICAgIHVubGVzcyBueHQ/XG4gICAgICAgIG54dCAgICAgICAgICAgICA9IHBpcGVsaW5lWyBteV9pZHggKyAxIF1cbiAgICAgICAgaGFzX254dCAgICAgICAgID0gbnh0P1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBpZiBoYXNfZmlyc3RcbiAgICAgICAgeWllbGQgZnJvbSBnZm4gZmlyc3RcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZm9yIGogZnJvbSBnZm4gZFxuICAgICAgICBpZiBoYXNfbnh0IHRoZW4geWllbGQgZnJvbSBueHQgalxuICAgICAgICBlbHNlICAgICAgICAgICAgeWllbGQgalxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBpZiBoYXNfbGFzdFxuICAgICAgICB5aWVsZCBmcm9tIGdmbiBsYXN0XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwaXBlbGluZS5wdXNoIFJcbiAgICByZXR1cm4gUlxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGRvIC0+XG4gICAgZmlyc3QgICAgICAgICAgICAgICAgICAgICA9IFN5bWJvbCAnKGZpcnN0KSdcbiAgICBsYXN0ICAgICAgICAgICAgICAgICAgICAgID0gU3ltYm9sICcobGFzdCknXG4gICAgcGlwZWxpbmUgID0gW11cbiAgICBwdXNoIHBpcGVsaW5lLCB1cHBlciAgICA9ICggZCAgICAgICAgICAgICAgKSAtPiB5aWVsZCBkLnRvVXBwZXJDYXNlKClcbiAgICBwdXNoIHBpcGVsaW5lLCBleCAgICAgICA9ICggZCwgbWFyayA9ICchJyAgKSAtPiB5aWVsZCBkICsgbWFya1xuICAgICMgcHVzaCBwaXBlbGluZSwgbm90aGluZyAgPSAoIGQgICAgICAgICAgICAgICkgLT4gdXJnZSAnzqlhcF9fXzYnLCAnbm90aGluZzonLCBycHIgZDsgeWllbGQgcmV0dXJuIG51bGxcbiAgICAjIHB1c2ggcGlwZWxpbmUsIGFkZCAgICAgID0gKCBkICAgICAgICAgICAgICApIC0+IHVyZ2UgJ86pYXBfX183JywgJ2FkZDogICAgJywgcnByIGQ7IHlpZWxkIFwiXCJcIkxldCdzIHNheTogXFxcIlwiXCJcIjsgeWllbGQgZDsgeWllbGQgJ1wiLidcbiAgICBwdXNoIHBpcGVsaW5lLCB3YXRjaCA9ICggZCApIC0+IGhlbHAgJ86pYXBfX184JywgcnByIGRcbiAgICBwdXNoIHBpcGVsaW5lLCAkIHsgZmlyc3QsIGxhc3QsIH0sIGFkZF8yID0gKCBkICkgLT5cbiAgICAgICMgdXJnZSAnzqlhcF9fXzknLCAnYWRkXzI6ICAgICcsIHJwciBkXG4gICAgICByZXR1cm4geWllbGQgXCJcIlwiTGV0J3Mgc2F5OiBcXFwiXCJcIlwiICBpZiBkIGlzIGZpcnN0XG4gICAgICByZXR1cm4geWllbGQgJ1wiLicgICAgICAgICAgICAgICAgIGlmIGQgaXMgbGFzdFxuICAgICAgeWllbGQgZFxuICAgIHB1c2ggcGlwZWxpbmUsIHdhdGNoID0gKCBkICkgLT4gdXJnZSAnzqlhcF9fMTAnLCBycHIgZFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkZWJ1ZyAnzqlhcF9fMTEnLCBwaXBlbGluZVxuICAgIGluZm8gJ86pYXBfXzEyJywgWyAoIGQgZm9yIGQgZnJvbSBwaXBlbGluZVsgMCBdICdoaWRleS1obycgKS4uLiwgXVxuICAgIGluZm8gJ86pYXBfXzEzJywgWyAoIGQgZm9yIGQgZnJvbSBwaXBlbGluZVsgMCBdICdoaWRleS1obycgKS4uLiwgXS5qb2luICcnXG4gICAgaW5mbyAnzqlhcF9fMTQnLCBbICggZCBmb3IgZCBmcm9tIHBpcGVsaW5lWyAwIF0gJ2hpZGV5LWhvJyApLi4uLCBdLmpvaW4gJydcbiAgICByZXR1cm4gbnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBhd2FpdCBkZW1vKClcbiAgYXdhaXQgZGVtb18yKClcbiJdfQ==
