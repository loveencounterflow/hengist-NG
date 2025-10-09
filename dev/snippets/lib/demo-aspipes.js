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
    var $, CFG, Pipeline, hide, nameit, set_getter, type_of;
    ({nameit} = SFMODULES.require_nameit());
    ({type_of} = SFMODULES.unstable.require_type_of());
    ({hide, set_getter} = SFMODULES.require_managed_property_tools());
    CFG = Symbol('CFG');
    Pipeline = (function() {
      // misfit                    = Symbol 'misfit'
      //---------------------------------------------------------------------------------------------------------
      class Pipeline {
        //---------------------------------------------------------------------------------------------------------
        constructor() {
          var callable, me;
          /* TAINT use Object.freeze, push sets new array */
          this.transforms = [];
          me = this;
          callable = function*(d) {
            return (yield* (me.is_empty ? [d] : me.transforms[0](d)));
          };
          Object.setPrototypeOf(callable, this);
          return callable;
        }

        //---------------------------------------------------------------------------------------------------------
        push(gfn) {
          var R, cfg, first, has_first, has_last, has_nxt, last, my_idx, nxt, original_gfn, type;
          switch (type = type_of(gfn)) {
            case 'function':
              original_gfn = gfn;
              if (gfn instanceof Pipeline) {
                gfn = function*(d) {
                  return (yield* original_gfn(d));
                };
              } else {
                gfn = function*(d) {
                  original_gfn(d);
                  return (yield d);
                };
              }
              break;
            case 'generatorfunction':
              null;
              break;
            default:
              `throw new Error expect a synchronous function or a synchronous generator function, got a ${type}`;
          }
          //.......................................................................................................
          my_idx = this.transforms.length;
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
          R = nameit(gfn.name, (function(me) {
            return function*(d) {
              var j;
              if (nxt == null) {
                nxt = me.transforms[my_idx + 1];
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
            };
          })(this));
          //.......................................................................................................
          this.transforms.push(R);
          return R;
        }

      };

      //---------------------------------------------------------------------------------------------------------
      set_getter(Pipeline.prototype, 'length', function() {
        return this.transforms.length;
      });

      set_getter(Pipeline.prototype, 'is_empty', function() {
        return this.transforms.length === 0;
      });

      return Pipeline;

    }).call(this);
    //---------------------------------------------------------------------------------------------------------
    $ = function(cfg, fn) {
      fn[CFG] = cfg;
      return fn;
    };
    (function() {      //.........................................................................................................
      var add_2, d, ex, first, last, p, upper, watch;
      first = Symbol('(first)');
      last = Symbol('(last)');
      p = new Pipeline();
      p.push(upper = function*(d) {
        return (yield d.toUpperCase());
      });
      p.push(ex = function*(d, mark = '!') {
        return (yield d + mark);
      });
      // p.push nothing  = ( d              ) -> urge 'Ωap___6', 'nothing:', rpr d; yield return null
      // p.push add      = ( d              ) -> urge 'Ωap___7', 'add:    ', rpr d; yield """Let's say: \""""; yield d; yield '".'
      p.push(watch = function(d) {
        return help('Ωap___8', rpr(d));
      });
      p.push($({first, last}, add_2 = function*(d) {
        if (d === first) {
          // urge 'Ωap___9', 'add_2:    ', rpr d
          return (yield `Let's say: \"`);
        }
        if (d === last) {
          return (yield '".');
        }
        return (yield d);
      }));
      p.push(watch = function(d) {
        return urge('Ωap__10', rpr(d));
      });
      //.........................................................................................................
      debug('Ωap__11', p);
      info('Ωap__12', [
        ...((function() {
          var results;
          results = [];
          for (d of p('hidey-ho')) {
            results.push(d);
          }
          return results;
        })())
      ]);
      info('Ωap__13', [
        ...((function() {
          var results;
          results = [];
          for (d of p('hidey-ho')) {
            results.push(d);
          }
          return results;
        })())
      ].join(''));
      info('Ωap__14', [
        ...((function() {
          var results;
          results = [];
          for (d of p('hidey-ho')) {
            results.push(d);
          }
          return results;
        })())
      ].join(''));
      return null;
    })();
    (function() {      //.........................................................................................................
      var d, p_1, p_2, p_3, results;
      /* empty pipeline is a pipeline without transforms, so data is passed through untransformed: */
      debug('Ωap__15', type_of(new Pipeline()));
      debug('Ωap__16', type_of((new Pipeline())('data')));
      debug('Ωap__17', [...((new Pipeline())('data'))]);
      //.......................................................................................................
      p_1 = new Pipeline();
      p_1.push(function*(d) {
        debug('Ωap__18 p_1');
        return (yield d + ' № 1');
      });
      p_1.push(function*(d) {
        debug('Ωap__19 p_1');
        return (yield d + ' № 2');
      });
      //.......................................................................................................
      p_2 = new Pipeline();
      p_2.push(function*(d) {
        debug('Ωap__20 p_2_t_1');
        return (yield d + ' № 3');
      });
      p_2.push(p_1);
      p_2.push(function*(d) {
        debug('Ωap__21 p_2_t_2');
        return (yield d + ' № 4');
      });
      //.......................................................................................................
      p_3 = new Pipeline();
      p_3.push(function*(d) {
        debug('Ωap__22 p_3_t_1');
        return (yield d + ' № 5');
      });
      p_3.push(p_2);
      p_3.push(function*(d) {
        debug('Ωap__23 p_3_t_2');
        return (yield d + ' № 6');
      });
      results = [];
      for (d of p_3('my-data')) {
        results.push(info('Ωap__24', d));
      }
      return results;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tYXNwaXBlcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxhQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxDQUFBLENBQUUsYUFBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSxTQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLG1DQUFSLEVBdEI1Qjs7O0VBMEJBLElBQUEsR0FBTyxNQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ1AsUUFBQSxNQUFBLEVBQUEsRUFBQSxF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QUFTLEtBQUEsQ0FBTSxpQkFBTjtlQUF5QixDQUFBLE1BQU0sQ0FBQSxHQUFJLE1BQVY7TUFBbEMsQ0FBVDtBQUNBO01BQUEsS0FBQSxtQkFBQTtxQkFBQSxJQUFBLENBQUssU0FBTCxFQUFnQixDQUFoQjtNQUFBLENBQUE7O0lBbkJDLENBQUEsSUFsR0w7O0FBdUhFLFdBQU87RUF4SEEsRUE3Q1Q7OztFQXlLQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7YUFFdEMsQ0FBQSxNQUFNLE1BQUEsQ0FBQSxDQUFOO0lBRnNDLENBQUEsSUFBeEM7O0FBektBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtc2Ztb2R1bGVzL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbnsgY3JlYXRlQXNQaXBlcywgICAgICAgIH0gPSByZXF1aXJlICdhc3BpcGVzJ1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW8gPSAtPlxuICB7IHBpcGUsXG4gICAgYXNQaXBlLFxuICAgIHRha2UsIH0gPSBjcmVhdGVBc1BpcGVzKClcbiAgdXBwZXIgICAgICAgICA9IGFzUGlwZSAoIGQgICAgICAgICAgICAgICkgLT4gZC50b1VwcGVyQ2FzZSgpXG4gIGV4ICAgICAgICAgICAgPSBhc1BpcGUgKCBkLCBtYXJrID0gJyEnICApIC0+IGQgKyBtYXJrXG4gIGdyZWV0aW5nICAgICAgPSBwaXBlICdoZWxsbydcbiAgIyBncmVldGluZyAgICAgICAgXFxcbiAgIyAgIHwgdXBwZXIgICAgICAgXFxcbiAgIyAgIHwgZXggJyEhISdcbiAgZ3JlZXRpbmcgICsgdXBwZXJcbiAgZ3JlZXRpbmcgICsgZXggJyEhISdcbiAgaW5mbyAnzqlhcF9fXzEnLCBncmVldGluZ1xuICBpbmZvICfOqWFwX19fMicsIGF3YWl0IGdyZWV0aW5nLnJ1bigpXG4gIGluZm8gJ86pYXBfX18zJywgYXdhaXQgZ3JlZXRpbmcucnVuKClcbiAgaW5mbyAnzqlhcF9fXzQnLCBhd2FpdCBncmVldGluZy5ydW4oKVxuICByZXR1cm4gbnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9fMiA9IC0+XG4gIHsgbmFtZWl0LCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9uYW1laXQoKVxuICB7IHR5cGVfb2YsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfdHlwZV9vZigpXG4gIHsgaGlkZSxcbiAgICBzZXRfZ2V0dGVyLCAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX21hbmFnZWRfcHJvcGVydHlfdG9vbHMoKVxuICBDRkcgICAgICAgICAgICAgICAgICAgICAgID0gU3ltYm9sICdDRkcnXG4gICMgbWlzZml0ICAgICAgICAgICAgICAgICAgICA9IFN5bWJvbCAnbWlzZml0J1xuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsYXNzIFBpcGVsaW5lXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29uc3RydWN0b3I6IC0+XG4gICAgICAjIyMgVEFJTlQgdXNlIE9iamVjdC5mcmVlemUsIHB1c2ggc2V0cyBuZXcgYXJyYXkgIyMjXG4gICAgICBAdHJhbnNmb3JtcyA9IFtdXG4gICAgICBtZSAgICAgICAgICA9IEBcbiAgICAgIGNhbGxhYmxlICAgID0gKCBkICkgLT4geWllbGQgZnJvbSBpZiBtZS5pc19lbXB0eSB0aGVuIFsgZCwgXSBlbHNlIG1lLnRyYW5zZm9ybXNbIDAgXSBkXG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YgY2FsbGFibGUsIEBcbiAgICAgIHJldHVybiBjYWxsYWJsZVxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHNldF9nZXR0ZXIgQDo6LCAnbGVuZ3RoJywgICAtPiBAdHJhbnNmb3Jtcy5sZW5ndGhcbiAgICBzZXRfZ2V0dGVyIEA6OiwgJ2lzX2VtcHR5JywgLT4gQHRyYW5zZm9ybXMubGVuZ3RoIGlzIDBcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwdXNoOiAoIGdmbiApIC0+XG4gICAgICBzd2l0Y2ggdHlwZSA9IHR5cGVfb2YgZ2ZuXG4gICAgICAgIHdoZW4gJ2Z1bmN0aW9uJ1xuICAgICAgICAgIG9yaWdpbmFsX2dmbiAgPSBnZm5cbiAgICAgICAgICBpZiBnZm4gaW5zdGFuY2VvZiBQaXBlbGluZVxuICAgICAgICAgICAgZ2ZuICAgICAgICAgICA9ICggZCApIC0+IHlpZWxkIGZyb20gb3JpZ2luYWxfZ2ZuIGRcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBnZm4gICAgICAgICAgID0gKCBkICkgLT4gb3JpZ2luYWxfZ2ZuIGQ7IHlpZWxkIGRcbiAgICAgICAgd2hlbiAnZ2VuZXJhdG9yZnVuY3Rpb24nXG4gICAgICAgICAgbnVsbFxuICAgICAgICBlbHNlIFwidGhyb3cgbmV3IEVycm9yIGV4cGVjdCBhIHN5bmNocm9ub3VzIGZ1bmN0aW9uIG9yIGEgc3luY2hyb25vdXMgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBnb3QgYSAje3R5cGV9XCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBteV9pZHggICAgICA9IEB0cmFuc2Zvcm1zLmxlbmd0aFxuICAgICAgZmlyc3QgICAgICAgPSBudWxsXG4gICAgICBsYXN0ICAgICAgICA9IG51bGxcbiAgICAgIGhhc19maXJzdCAgID0gZmFsc2VcbiAgICAgIGhhc19sYXN0ICAgID0gZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBpZiAoIGNmZyA9IGdmblsgQ0ZHIF0gKT9cbiAgICAgICAgaGFzX2ZpcnN0ICAgPSBSZWZsZWN0LmhhcyBjZmcsICdmaXJzdCdcbiAgICAgICAgaGFzX2xhc3QgICAgPSBSZWZsZWN0LmhhcyBjZmcsICdsYXN0J1xuICAgICAgICBmaXJzdCAgICAgICA9IGNmZy5maXJzdCBpZiBoYXNfZmlyc3RcbiAgICAgICAgbGFzdCAgICAgICAgPSBjZmcubGFzdCAgaWYgaGFzX2xhc3RcbiAgICAgICAgIyBkZWJ1ZyAnzqlhcF9fXzUnLCB7IGZpcnN0LCBnZm4sIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBueHQgICAgICAgICA9IG51bGxcbiAgICAgIGhhc19ueHQgICAgID0gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFIgPSBuYW1laXQgZ2ZuLm5hbWUsIGRvICggbWUgPSBAICkgLT4gKCBkICkgLT5cbiAgICAgICAgdW5sZXNzIG54dD9cbiAgICAgICAgICBueHQgICAgICAgICAgICAgPSBtZS50cmFuc2Zvcm1zWyBteV9pZHggKyAxIF1cbiAgICAgICAgICBoYXNfbnh0ICAgICAgICAgPSBueHQ/XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpZiBoYXNfZmlyc3RcbiAgICAgICAgICB5aWVsZCBmcm9tIGdmbiBmaXJzdFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZm9yIGogZnJvbSBnZm4gZFxuICAgICAgICAgIGlmIGhhc19ueHQgdGhlbiB5aWVsZCBmcm9tIG54dCBqXG4gICAgICAgICAgZWxzZSAgICAgICAgICAgIHlpZWxkIGpcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGlmIGhhc19sYXN0XG4gICAgICAgICAgeWllbGQgZnJvbSBnZm4gbGFzdFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAdHJhbnNmb3Jtcy5wdXNoIFJcbiAgICAgIHJldHVybiBSXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAkID0gKCBjZmcsIGZuICkgLT5cbiAgICBmbltDRkddID0gY2ZnXG4gICAgcmV0dXJuIGZuXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZG8gLT5cbiAgICBmaXJzdCAgID0gU3ltYm9sICcoZmlyc3QpJ1xuICAgIGxhc3QgICAgPSBTeW1ib2wgJyhsYXN0KSdcbiAgICBwICAgICAgID0gbmV3IFBpcGVsaW5lKClcbiAgICBwLnB1c2ggdXBwZXIgICAgPSAoIGQgICAgICAgICAgICAgICkgLT4geWllbGQgZC50b1VwcGVyQ2FzZSgpXG4gICAgcC5wdXNoIGV4ICAgICAgID0gKCBkLCBtYXJrID0gJyEnICApIC0+IHlpZWxkIGQgKyBtYXJrXG4gICAgIyBwLnB1c2ggbm90aGluZyAgPSAoIGQgICAgICAgICAgICAgICkgLT4gdXJnZSAnzqlhcF9fXzYnLCAnbm90aGluZzonLCBycHIgZDsgeWllbGQgcmV0dXJuIG51bGxcbiAgICAjIHAucHVzaCBhZGQgICAgICA9ICggZCAgICAgICAgICAgICAgKSAtPiB1cmdlICfOqWFwX19fNycsICdhZGQ6ICAgICcsIHJwciBkOyB5aWVsZCBcIlwiXCJMZXQncyBzYXk6IFxcXCJcIlwiXCI7IHlpZWxkIGQ7IHlpZWxkICdcIi4nXG4gICAgcC5wdXNoIHdhdGNoID0gKCBkICkgLT4gaGVscCAnzqlhcF9fXzgnLCBycHIgZFxuICAgIHAucHVzaCAkIHsgZmlyc3QsIGxhc3QsIH0sIGFkZF8yID0gKCBkICkgLT5cbiAgICAgICMgdXJnZSAnzqlhcF9fXzknLCAnYWRkXzI6ICAgICcsIHJwciBkXG4gICAgICByZXR1cm4geWllbGQgXCJcIlwiTGV0J3Mgc2F5OiBcXFwiXCJcIlwiICBpZiBkIGlzIGZpcnN0XG4gICAgICByZXR1cm4geWllbGQgJ1wiLicgICAgICAgICAgICAgICAgIGlmIGQgaXMgbGFzdFxuICAgICAgeWllbGQgZFxuICAgIHAucHVzaCB3YXRjaCA9ICggZCApIC0+IHVyZ2UgJ86pYXBfXzEwJywgcnByIGRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZGVidWcgJ86pYXBfXzExJywgcFxuICAgIGluZm8gJ86pYXBfXzEyJywgWyAoIGQgZm9yIGQgZnJvbSBwICdoaWRleS1obycgKS4uLiwgXVxuICAgIGluZm8gJ86pYXBfXzEzJywgWyAoIGQgZm9yIGQgZnJvbSBwICdoaWRleS1obycgKS4uLiwgXS5qb2luICcnXG4gICAgaW5mbyAnzqlhcF9fMTQnLCBbICggZCBmb3IgZCBmcm9tIHAgJ2hpZGV5LWhvJyApLi4uLCBdLmpvaW4gJydcbiAgICByZXR1cm4gbnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGRvIC0+XG4gICAgIyMjIGVtcHR5IHBpcGVsaW5lIGlzIGEgcGlwZWxpbmUgd2l0aG91dCB0cmFuc2Zvcm1zLCBzbyBkYXRhIGlzIHBhc3NlZCB0aHJvdWdoIHVudHJhbnNmb3JtZWQ6ICMjI1xuICAgIGRlYnVnICfOqWFwX18xNScsIHR5cGVfb2YgKCBuZXcgUGlwZWxpbmUoKSApXG4gICAgZGVidWcgJ86pYXBfXzE2JywgdHlwZV9vZiAoIG5ldyBQaXBlbGluZSgpICkgJ2RhdGEnXG4gICAgZGVidWcgJ86pYXBfXzE3JywgWyAoICggbmV3IFBpcGVsaW5lKCkgKSAnZGF0YScgKS4uLiwgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcF8xID0gbmV3IFBpcGVsaW5lKClcbiAgICBwXzEucHVzaCAoIGQgKSAtPiBkZWJ1ZyAnzqlhcF9fMTggcF8xJzsgeWllbGQgZCArICcg4oSWIDEnXG4gICAgcF8xLnB1c2ggKCBkICkgLT4gZGVidWcgJ86pYXBfXzE5IHBfMSc7IHlpZWxkIGQgKyAnIOKEliAyJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcF8yID0gbmV3IFBpcGVsaW5lKClcbiAgICBwXzIucHVzaCAoIGQgKSAtPiBkZWJ1ZyAnzqlhcF9fMjAgcF8yX3RfMSc7IHlpZWxkIGQgKyAnIOKEliAzJ1xuICAgIHBfMi5wdXNoIHBfMVxuICAgIHBfMi5wdXNoICggZCApIC0+IGRlYnVnICfOqWFwX18yMSBwXzJfdF8yJzsgeWllbGQgZCArICcg4oSWIDQnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwXzMgPSBuZXcgUGlwZWxpbmUoKVxuICAgIHBfMy5wdXNoICggZCApIC0+IGRlYnVnICfOqWFwX18yMiBwXzNfdF8xJzsgeWllbGQgZCArICcg4oSWIDUnXG4gICAgcF8zLnB1c2ggcF8yXG4gICAgcF8zLnB1c2ggKCBkICkgLT4gZGVidWcgJ86pYXBfXzIzIHBfM190XzInOyB5aWVsZCBkICsgJyDihJYgNidcbiAgICBpbmZvICfOqWFwX18yNCcsIGQgZm9yIGQgZnJvbSBwXzMgJ215LWRhdGEnXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGF3YWl0IGRlbW8oKVxuICBhd2FpdCBkZW1vXzIoKVxuIl19
