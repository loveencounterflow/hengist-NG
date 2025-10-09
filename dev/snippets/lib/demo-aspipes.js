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
    var $, CFG, misfit, nameit, push;
    ({nameit} = SFMODULES.require_nameit());
    CFG = Symbol('CFG');
    misfit = Symbol('misfit');
    //---------------------------------------------------------------------------------------------------------
    $ = function(cfg, fn) {
      fn[CFG] = cfg;
      return fn;
    };
    //---------------------------------------------------------------------------------------------------------
    push = function(pipeline, gfn) {
      var R, cfg, first, has_first, has_last, has_nxt, last, my_idx, nxt;
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
          has_nxt = nxt != null; // nxt is misfit
        }
        if (has_first) {
          yield* gfn(first);
        }
        for (j of gfn(d)) {
          if (has_nxt) {
            yield* nxt(j);
          } else {
            yield j;
          }
        }
        if (has_last) {
          yield* gfn(last);
        }
        return null;
      });
      //.......................................................................................................
      pipeline.push(R);
      return R;
    };
    (function() {      //.........................................................................................................
      var add_2, d, ex, first, last, pipeline, upper;
      first = Symbol('(first)');
      last = Symbol('(last)');
      pipeline = [];
      push(pipeline, upper = function*(d) {
        urge('Ωap___6', 'upper:  ', rpr(d));
        return (yield d.toUpperCase());
      });
      push(pipeline, ex = function*(d, mark = '!') {
        urge('Ωap___7', 'ex:     ', rpr(d));
        return (yield d + mark);
      });
      // push pipeline, nothing  = ( d              ) -> urge 'Ωap___8', 'nothing:', rpr d; yield return null
      // push pipeline, add      = ( d              ) -> urge 'Ωap___9', 'add:    ', rpr d; yield """Let's say: \""""; yield d; yield '".'
      push(pipeline, $({first, last}, add_2 = function*(d) {
        urge('Ωap__10', 'add_2:    ', rpr(d));
        if (d === first) {
          return (yield `Let's say: \"`);
        }
        if (d === last) {
          return (yield '".');
        }
        return (yield d);
      }));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tYXNwaXBlcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxhQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxDQUFBLENBQUUsYUFBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSxTQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLG1DQUFSLEVBdEI1Qjs7O0VBMEJBLElBQUEsR0FBTyxNQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ1AsUUFBQSxNQUFBLEVBQUEsRUFBQSxF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LENBQU0sU0FBTixFQUFpQixRQUFqQjtNQUNBLElBQUEsQ0FBSyxTQUFMLEVBQWdCO1FBQUUsR0FBQTs7QUFBRTtVQUFBLEtBQUEsNEJBQUE7eUJBQUE7VUFBQSxDQUFBOztZQUFGLENBQUY7T0FBaEI7TUFDQSxJQUFBLENBQUssU0FBTCxFQUFnQjtRQUFFLEdBQUE7O0FBQUU7VUFBQSxLQUFBLDRCQUFBO3lCQUFBO1VBQUEsQ0FBQTs7WUFBRixDQUFGO09BQWlELENBQUMsSUFBbEQsQ0FBdUQsRUFBdkQsQ0FBaEI7TUFDQSxJQUFBLENBQUssU0FBTCxFQUFnQjtRQUFFLEdBQUE7O0FBQUU7VUFBQSxLQUFBLDRCQUFBO3lCQUFBO1VBQUEsQ0FBQTs7WUFBRixDQUFGO09BQWlELENBQUMsSUFBbEQsQ0FBdUQsRUFBdkQsQ0FBaEI7QUFDQSxhQUFPO0lBbEJOLENBQUEsSUF4Q0w7O0FBNERFLFdBQU87RUE3REEsRUE3Q1Q7OztFQThHQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7YUFFdEMsQ0FBQSxNQUFNLE1BQUEsQ0FBQSxDQUFOO0lBRnNDLENBQUEsSUFBeEM7O0FBOUdBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtc2Ztb2R1bGVzL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbnsgY3JlYXRlQXNQaXBlcywgICAgICAgIH0gPSByZXF1aXJlICdhc3BpcGVzJ1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW8gPSAtPlxuICB7IHBpcGUsXG4gICAgYXNQaXBlLFxuICAgIHRha2UsIH0gPSBjcmVhdGVBc1BpcGVzKClcbiAgdXBwZXIgICAgICAgICA9IGFzUGlwZSAoIGQgICAgICAgICAgICAgICkgLT4gZC50b1VwcGVyQ2FzZSgpXG4gIGV4ICAgICAgICAgICAgPSBhc1BpcGUgKCBkLCBtYXJrID0gJyEnICApIC0+IGQgKyBtYXJrXG4gIGdyZWV0aW5nICAgICAgPSBwaXBlICdoZWxsbydcbiAgIyBncmVldGluZyAgICAgICAgXFxcbiAgIyAgIHwgdXBwZXIgICAgICAgXFxcbiAgIyAgIHwgZXggJyEhISdcbiAgZ3JlZXRpbmcgICsgdXBwZXJcbiAgZ3JlZXRpbmcgICsgZXggJyEhISdcbiAgaW5mbyAnzqlhcF9fXzEnLCBncmVldGluZ1xuICBpbmZvICfOqWFwX19fMicsIGF3YWl0IGdyZWV0aW5nLnJ1bigpXG4gIGluZm8gJ86pYXBfX18zJywgYXdhaXQgZ3JlZXRpbmcucnVuKClcbiAgaW5mbyAnzqlhcF9fXzQnLCBhd2FpdCBncmVldGluZy5ydW4oKVxuICByZXR1cm4gbnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9fMiA9IC0+XG4gIHsgbmFtZWl0LCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9uYW1laXQoKVxuICBDRkcgICAgICAgICAgICAgICAgICAgICAgID0gU3ltYm9sICdDRkcnXG4gIG1pc2ZpdCAgICAgICAgICAgICAgICAgICAgPSBTeW1ib2wgJ21pc2ZpdCdcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAkID0gKCBjZmcsIGZuICkgLT5cbiAgICBmbltDRkddID0gY2ZnXG4gICAgcmV0dXJuIGZuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHVzaCA9ICggcGlwZWxpbmUsIGdmbiApIC0+XG4gICAgbXlfaWR4ICAgICAgPSBwaXBlbGluZS5sZW5ndGhcbiAgICBmaXJzdCAgICAgICA9IG51bGxcbiAgICBsYXN0ICAgICAgICA9IG51bGxcbiAgICBoYXNfZmlyc3QgICA9IGZhbHNlXG4gICAgaGFzX2xhc3QgICAgPSBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaWYgKCBjZmcgPSBnZm5bIENGRyBdICk/XG4gICAgICBoYXNfZmlyc3QgICA9IFJlZmxlY3QuaGFzIGNmZywgJ2ZpcnN0J1xuICAgICAgaGFzX2xhc3QgICAgPSBSZWZsZWN0LmhhcyBjZmcsICdsYXN0J1xuICAgICAgZmlyc3QgICAgICAgPSBjZmcuZmlyc3QgaWYgaGFzX2ZpcnN0XG4gICAgICBsYXN0ICAgICAgICA9IGNmZy5sYXN0ICBpZiBoYXNfbGFzdFxuICAgICAgIyBkZWJ1ZyAnzqlhcF9fXzUnLCB7IGZpcnN0LCBnZm4sIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIG54dCAgICAgICAgID0gbnVsbFxuICAgIGhhc19ueHQgICAgID0gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgUiA9IG5hbWVpdCBnZm4ubmFtZSwgKCBkICkgLT5cbiAgICAgIHVubGVzcyBueHQ/ICMgbnh0IGlzIG1pc2ZpdFxuICAgICAgICBueHQgICAgICAgICAgICAgPSBwaXBlbGluZVsgbXlfaWR4ICsgMSBdXG4gICAgICAgIGhhc19ueHQgICAgICAgICA9IG54dD9cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgeWllbGQgZnJvbSBnZm4gZmlyc3QgaWYgaGFzX2ZpcnN0XG4gICAgICBmb3IgaiBmcm9tIGdmbiBkXG4gICAgICAgIGlmIGhhc19ueHQgdGhlbiB5aWVsZCBmcm9tIG54dCBqXG4gICAgICAgIGVsc2UgICAgICAgICAgICB5aWVsZCBqXG4gICAgICB5aWVsZCBmcm9tIGdmbiBsYXN0IGlmIGhhc19sYXN0XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcGlwZWxpbmUucHVzaCBSXG4gICAgcmV0dXJuIFJcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBkbyAtPlxuICAgIGZpcnN0ICAgICAgICAgICAgICAgICAgICAgPSBTeW1ib2wgJyhmaXJzdCknXG4gICAgbGFzdCAgICAgICAgICAgICAgICAgICAgICA9IFN5bWJvbCAnKGxhc3QpJ1xuICAgIHBpcGVsaW5lICA9IFtdXG4gICAgcHVzaCBwaXBlbGluZSwgdXBwZXIgICAgPSAoIGQgICAgICAgICAgICAgICkgLT4gdXJnZSAnzqlhcF9fXzYnLCAndXBwZXI6ICAnLCBycHIgZDsgeWllbGQgZC50b1VwcGVyQ2FzZSgpXG4gICAgcHVzaCBwaXBlbGluZSwgZXggICAgICAgPSAoIGQsIG1hcmsgPSAnIScgICkgLT4gdXJnZSAnzqlhcF9fXzcnLCAnZXg6ICAgICAnLCBycHIgZDsgeWllbGQgZCArIG1hcmtcbiAgICAjIHB1c2ggcGlwZWxpbmUsIG5vdGhpbmcgID0gKCBkICAgICAgICAgICAgICApIC0+IHVyZ2UgJ86pYXBfX184JywgJ25vdGhpbmc6JywgcnByIGQ7IHlpZWxkIHJldHVybiBudWxsXG4gICAgIyBwdXNoIHBpcGVsaW5lLCBhZGQgICAgICA9ICggZCAgICAgICAgICAgICAgKSAtPiB1cmdlICfOqWFwX19fOScsICdhZGQ6ICAgICcsIHJwciBkOyB5aWVsZCBcIlwiXCJMZXQncyBzYXk6IFxcXCJcIlwiXCI7IHlpZWxkIGQ7IHlpZWxkICdcIi4nXG4gICAgcHVzaCBwaXBlbGluZSwgJCB7IGZpcnN0LCBsYXN0LCB9LCBhZGRfMiA9ICggZCApIC0+XG4gICAgICB1cmdlICfOqWFwX18xMCcsICdhZGRfMjogICAgJywgcnByIGRcbiAgICAgIHJldHVybiB5aWVsZCBcIlwiXCJMZXQncyBzYXk6IFxcXCJcIlwiXCIgaWYgZCBpcyBmaXJzdFxuICAgICAgcmV0dXJuIHlpZWxkICdcIi4nIGlmIGQgaXMgbGFzdFxuICAgICAgeWllbGQgZFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkZWJ1ZyAnzqlhcF9fMTEnLCBwaXBlbGluZVxuICAgIGluZm8gJ86pYXBfXzEyJywgWyAoIGQgZm9yIGQgZnJvbSBwaXBlbGluZVsgMCBdICdoaWRleS1obycgKS4uLiwgXVxuICAgIGluZm8gJ86pYXBfXzEzJywgWyAoIGQgZm9yIGQgZnJvbSBwaXBlbGluZVsgMCBdICdoaWRleS1obycgKS4uLiwgXS5qb2luICcnXG4gICAgaW5mbyAnzqlhcF9fMTMnLCBbICggZCBmb3IgZCBmcm9tIHBpcGVsaW5lWyAwIF0gJ2hpZGV5LWhvJyApLi4uLCBdLmpvaW4gJydcbiAgICByZXR1cm4gbnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBhd2FpdCBkZW1vKClcbiAgYXdhaXQgZGVtb18yKClcbiJdfQ==
