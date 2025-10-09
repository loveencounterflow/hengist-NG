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
              if (has_first) {
                yield* gfn(first);
              }
              if (has_nxt) {
                for (j of gfn(d)) {
                  (yield* nxt(j));
                }
              } else {
                for (j of gfn(d)) {
                  (yield j);
                }
              }
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
      var collector, d, p_1, p_2, p_3;
      /* empty pipeline is a pipeline without transforms, so data is passed through untransformed: */
      debug('Ωap__15', type_of(new Pipeline()));
      debug('Ωap__16', type_of((new Pipeline())('data')));
      debug('Ωap__17', [...((new Pipeline())('data'))]);
      collector = [];
      //.......................................................................................................
      p_1 = new Pipeline();
      p_1.push(function*(d) {
        collector.push('p1-t1');
        return (yield d + ' № 1');
      });
      p_1.push(function*(d) {
        collector.push('p1-t2');
        return (yield d + ' № 2');
      });
      //......................................................................................................
      p_2 = new Pipeline();
      p_2.push(function*(d) {
        collector.push('p2-t1');
        return (yield d + ' № 3');
      });
      p_2.push(p_1);
      p_2.push(function*(d) {
        collector.push('p2-t2');
        return (yield d + ' № 4');
      });
      //.......................................................................................................
      p_3 = new Pipeline();
      p_3.push(function*(d) {
        collector.push('p3-t1');
        return (yield d + ' № 5');
      });
      p_3.push(p_2);
      p_3.push(function*(d) {
        collector.push('p3-t2');
        return (yield d + ' № 6');
      });
      for (d of p_3('my-data')) {
        info('Ωap__18', d);
      }
      return help('Ωap__19', collector);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tYXNwaXBlcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxhQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxDQUFBLENBQUUsYUFBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSxTQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLG1DQUFSLEVBdEI1Qjs7O0VBMEJBLElBQUEsR0FBTyxNQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ1AsUUFBQSxNQUFBLEVBQUEsRUFBQSxF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LE1BQVY7TUFBakMsQ0FBVDtNQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsR0FBVDtNQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsU0FBQSxDQUFFLENBQUYsQ0FBQTtRQUFTLFNBQVMsQ0FBQyxJQUFWLENBQWUsT0FBZjtlQUF3QixDQUFBLE1BQU0sQ0FBQSxHQUFJLE1BQVY7TUFBakMsQ0FBVDtNQUNBLEtBQUEsbUJBQUE7UUFBQSxJQUFBLENBQUssU0FBTCxFQUFnQixDQUFoQjtNQUFBO2FBQ0EsSUFBQSxDQUFLLFNBQUwsRUFBZ0IsU0FBaEI7SUFyQkMsQ0FBQSxJQTdGTDs7QUFvSEUsV0FBTztFQXJIQSxFQTdDVDs7O0VBc0tBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBOzthQUV0QyxDQUFBLE1BQU0sTUFBQSxDQUFBLENBQU47SUFGc0MsQ0FBQSxJQUF4Qzs7QUF0S0EiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1zZm1vZHVsZXMvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xueyBjcmVhdGVBc1BpcGVzLCAgICAgICAgfSA9IHJlcXVpcmUgJ2FzcGlwZXMnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtbyA9IC0+XG4gIHsgcGlwZSxcbiAgICBhc1BpcGUsXG4gICAgdGFrZSwgfSA9IGNyZWF0ZUFzUGlwZXMoKVxuICB1cHBlciAgICAgICAgID0gYXNQaXBlICggZCAgICAgICAgICAgICAgKSAtPiBkLnRvVXBwZXJDYXNlKClcbiAgZXggICAgICAgICAgICA9IGFzUGlwZSAoIGQsIG1hcmsgPSAnIScgICkgLT4gZCArIG1hcmtcbiAgZ3JlZXRpbmcgICAgICA9IHBpcGUgJ2hlbGxvJ1xuICAjIGdyZWV0aW5nICAgICAgICBcXFxuICAjICAgfCB1cHBlciAgICAgICBcXFxuICAjICAgfCBleCAnISEhJ1xuICBncmVldGluZyAgKyB1cHBlclxuICBncmVldGluZyAgKyBleCAnISEhJ1xuICBpbmZvICfOqWFwX19fMScsIGdyZWV0aW5nXG4gIGluZm8gJ86pYXBfX18yJywgYXdhaXQgZ3JlZXRpbmcucnVuKClcbiAgaW5mbyAnzqlhcF9fXzMnLCBhd2FpdCBncmVldGluZy5ydW4oKVxuICBpbmZvICfOqWFwX19fNCcsIGF3YWl0IGdyZWV0aW5nLnJ1bigpXG4gIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb18yID0gLT5cbiAgeyBuYW1laXQsICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX25hbWVpdCgpXG4gIHsgdHlwZV9vZiwgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgeyBoaWRlLFxuICAgIHNldF9nZXR0ZXIsICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfbWFuYWdlZF9wcm9wZXJ0eV90b29scygpXG4gIENGRyAgICAgICAgICAgICAgICAgICAgICAgPSBTeW1ib2wgJ0NGRydcbiAgIyBtaXNmaXQgICAgICAgICAgICAgICAgICAgID0gU3ltYm9sICdtaXNmaXQnXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2xhc3MgUGlwZWxpbmVcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdHJ1Y3RvcjogLT5cbiAgICAgICMjIyBUQUlOVCB1c2UgT2JqZWN0LmZyZWV6ZSwgcHVzaCBzZXRzIG5ldyBhcnJheSAjIyNcbiAgICAgIEB0cmFuc2Zvcm1zID0gW11cbiAgICAgIG1lICAgICAgICAgID0gQFxuICAgICAgY2FsbGFibGUgICAgPSAoIGQgKSAtPiB5aWVsZCBmcm9tIGlmIG1lLmlzX2VtcHR5IHRoZW4gWyBkLCBdIGVsc2UgbWUudHJhbnNmb3Jtc1sgMCBdIGRcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZiBjYWxsYWJsZSwgQFxuICAgICAgcmV0dXJuIGNhbGxhYmxlXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgc2V0X2dldHRlciBAOjosICdsZW5ndGgnLCAgIC0+IEB0cmFuc2Zvcm1zLmxlbmd0aFxuICAgIHNldF9nZXR0ZXIgQDo6LCAnaXNfZW1wdHknLCAtPiBAdHJhbnNmb3Jtcy5sZW5ndGggaXMgMFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHB1c2g6ICggZ2ZuICkgLT5cbiAgICAgIHN3aXRjaCB0eXBlID0gdHlwZV9vZiBnZm5cbiAgICAgICAgd2hlbiAnZnVuY3Rpb24nXG4gICAgICAgICAgb3JpZ2luYWxfZ2ZuICA9IGdmblxuICAgICAgICAgIGlmIGdmbiBpbnN0YW5jZW9mIFBpcGVsaW5lXG4gICAgICAgICAgICBnZm4gICAgICAgICAgID0gKCBkICkgLT4geWllbGQgZnJvbSBvcmlnaW5hbF9nZm4gZFxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGdmbiAgICAgICAgICAgPSAoIGQgKSAtPiBvcmlnaW5hbF9nZm4gZDsgeWllbGQgZFxuICAgICAgICB3aGVuICdnZW5lcmF0b3JmdW5jdGlvbidcbiAgICAgICAgICBudWxsXG4gICAgICAgIGVsc2UgXCJ0aHJvdyBuZXcgRXJyb3IgZXhwZWN0IGEgc3luY2hyb25vdXMgZnVuY3Rpb24gb3IgYSBzeW5jaHJvbm91cyBnZW5lcmF0b3IgZnVuY3Rpb24sIGdvdCBhICN7dHlwZX1cIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIG15X2lkeCAgICAgID0gQHRyYW5zZm9ybXMubGVuZ3RoXG4gICAgICBmaXJzdCAgICAgICA9IG51bGxcbiAgICAgIGxhc3QgICAgICAgID0gbnVsbFxuICAgICAgaGFzX2ZpcnN0ICAgPSBmYWxzZVxuICAgICAgaGFzX2xhc3QgICAgPSBmYWxzZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGlmICggY2ZnID0gZ2ZuWyBDRkcgXSApP1xuICAgICAgICBoYXNfZmlyc3QgICA9IFJlZmxlY3QuaGFzIGNmZywgJ2ZpcnN0J1xuICAgICAgICBoYXNfbGFzdCAgICA9IFJlZmxlY3QuaGFzIGNmZywgJ2xhc3QnXG4gICAgICAgIGZpcnN0ICAgICAgID0gY2ZnLmZpcnN0IGlmIGhhc19maXJzdFxuICAgICAgICBsYXN0ICAgICAgICA9IGNmZy5sYXN0ICBpZiBoYXNfbGFzdFxuICAgICAgICAjIGRlYnVnICfOqWFwX19fNScsIHsgZmlyc3QsIGdmbiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIG54dCAgICAgICAgID0gbnVsbFxuICAgICAgaGFzX254dCAgICAgPSBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgUiA9IG5hbWVpdCBnZm4ubmFtZSwgZG8gKCBtZSA9IEAgKSAtPiAoIGQgKSAtPlxuICAgICAgICB1bmxlc3Mgbnh0P1xuICAgICAgICAgIG54dCAgICAgICAgICAgICA9IG1lLnRyYW5zZm9ybXNbIG15X2lkeCArIDEgXVxuICAgICAgICAgIGhhc19ueHQgICAgICAgICA9IG54dD9cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHlpZWxkIGZyb20gZ2ZuIGZpcnN0IGlmIGhhc19maXJzdFxuICAgICAgICBpZiBoYXNfbnh0ICB0aGVuICAoIHlpZWxkIGZyb20gbnh0IGogICkgZm9yIGogZnJvbSBnZm4gZFxuICAgICAgICBlbHNlICAgICAgICAgICAgICAoIHlpZWxkIGogICAgICAgICAgICkgZm9yIGogZnJvbSBnZm4gZFxuICAgICAgICB5aWVsZCBmcm9tIGdmbiBsYXN0IGlmIGhhc19sYXN0XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEB0cmFuc2Zvcm1zLnB1c2ggUlxuICAgICAgcmV0dXJuIFJcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICQgPSAoIGNmZywgZm4gKSAtPlxuICAgIGZuW0NGR10gPSBjZmdcbiAgICByZXR1cm4gZm5cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBkbyAtPlxuICAgIGZpcnN0ICAgPSBTeW1ib2wgJyhmaXJzdCknXG4gICAgbGFzdCAgICA9IFN5bWJvbCAnKGxhc3QpJ1xuICAgIHAgICAgICAgPSBuZXcgUGlwZWxpbmUoKVxuICAgIHAucHVzaCB1cHBlciAgICA9ICggZCAgICAgICAgICAgICAgKSAtPiB5aWVsZCBkLnRvVXBwZXJDYXNlKClcbiAgICBwLnB1c2ggZXggICAgICAgPSAoIGQsIG1hcmsgPSAnIScgICkgLT4geWllbGQgZCArIG1hcmtcbiAgICAjIHAucHVzaCBub3RoaW5nICA9ICggZCAgICAgICAgICAgICAgKSAtPiB1cmdlICfOqWFwX19fNicsICdub3RoaW5nOicsIHJwciBkOyB5aWVsZCByZXR1cm4gbnVsbFxuICAgICMgcC5wdXNoIGFkZCAgICAgID0gKCBkICAgICAgICAgICAgICApIC0+IHVyZ2UgJ86pYXBfX183JywgJ2FkZDogICAgJywgcnByIGQ7IHlpZWxkIFwiXCJcIkxldCdzIHNheTogXFxcIlwiXCJcIjsgeWllbGQgZDsgeWllbGQgJ1wiLidcbiAgICBwLnB1c2ggd2F0Y2ggPSAoIGQgKSAtPiBoZWxwICfOqWFwX19fOCcsIHJwciBkXG4gICAgcC5wdXNoICQgeyBmaXJzdCwgbGFzdCwgfSwgYWRkXzIgPSAoIGQgKSAtPlxuICAgICAgIyB1cmdlICfOqWFwX19fOScsICdhZGRfMjogICAgJywgcnByIGRcbiAgICAgIHJldHVybiB5aWVsZCBcIlwiXCJMZXQncyBzYXk6IFxcXCJcIlwiXCIgIGlmIGQgaXMgZmlyc3RcbiAgICAgIHJldHVybiB5aWVsZCAnXCIuJyAgICAgICAgICAgICAgICAgaWYgZCBpcyBsYXN0XG4gICAgICB5aWVsZCBkXG4gICAgcC5wdXNoIHdhdGNoID0gKCBkICkgLT4gdXJnZSAnzqlhcF9fMTAnLCBycHIgZFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkZWJ1ZyAnzqlhcF9fMTEnLCBwXG4gICAgaW5mbyAnzqlhcF9fMTInLCBbICggZCBmb3IgZCBmcm9tIHAgJ2hpZGV5LWhvJyApLi4uLCBdXG4gICAgaW5mbyAnzqlhcF9fMTMnLCBbICggZCBmb3IgZCBmcm9tIHAgJ2hpZGV5LWhvJyApLi4uLCBdLmpvaW4gJydcbiAgICBpbmZvICfOqWFwX18xNCcsIFsgKCBkIGZvciBkIGZyb20gcCAnaGlkZXktaG8nICkuLi4sIF0uam9pbiAnJ1xuICAgIHJldHVybiBudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZG8gLT5cbiAgICAjIyMgZW1wdHkgcGlwZWxpbmUgaXMgYSBwaXBlbGluZSB3aXRob3V0IHRyYW5zZm9ybXMsIHNvIGRhdGEgaXMgcGFzc2VkIHRocm91Z2ggdW50cmFuc2Zvcm1lZDogIyMjXG4gICAgZGVidWcgJ86pYXBfXzE1JywgdHlwZV9vZiAoIG5ldyBQaXBlbGluZSgpIClcbiAgICBkZWJ1ZyAnzqlhcF9fMTYnLCB0eXBlX29mICggbmV3IFBpcGVsaW5lKCkgKSAnZGF0YSdcbiAgICBkZWJ1ZyAnzqlhcF9fMTcnLCBbICggKCBuZXcgUGlwZWxpbmUoKSApICdkYXRhJyApLi4uLCBdXG4gICAgY29sbGVjdG9yID0gW11cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHBfMSA9IG5ldyBQaXBlbGluZSgpXG4gICAgcF8xLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AxLXQxJzsgeWllbGQgZCArICcg4oSWIDEnXG4gICAgcF8xLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AxLXQyJzsgeWllbGQgZCArICcg4oSWIDInXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHBfMiA9IG5ldyBQaXBlbGluZSgpXG4gICAgcF8yLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AyLXQxJzsgeWllbGQgZCArICcg4oSWIDMnXG4gICAgcF8yLnB1c2ggcF8xXG4gICAgcF8yLnB1c2ggKCBkICkgLT4gY29sbGVjdG9yLnB1c2ggJ3AyLXQyJzsgeWllbGQgZCArICcg4oSWIDQnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwXzMgPSBuZXcgUGlwZWxpbmUoKVxuICAgIHBfMy5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMy10MSc7IHlpZWxkIGQgKyAnIOKEliA1J1xuICAgIHBfMy5wdXNoIHBfMlxuICAgIHBfMy5wdXNoICggZCApIC0+IGNvbGxlY3Rvci5wdXNoICdwMy10Mic7IHlpZWxkIGQgKyAnIOKEliA2J1xuICAgIGluZm8gJ86pYXBfXzE4JywgZCBmb3IgZCBmcm9tIHBfMyAnbXktZGF0YSdcbiAgICBoZWxwICfOqWFwX18xOScsIGNvbGxlY3RvclxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBhd2FpdCBkZW1vKClcbiAgYXdhaXQgZGVtb18yKClcbiJdfQ==
