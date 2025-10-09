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
    var $, CFG, nameit, push;
    ({nameit} = SFMODULES.require_nameit());
    CFG = Symbol('CFG');
    // misfit                    = Symbol 'misfit'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tYXNwaXBlcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxhQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQ0FBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxDQUFBLENBQUUsYUFBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSxTQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLG1DQUFSLEVBdEI1Qjs7O0VBMEJBLElBQUEsR0FBTyxNQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ1AsUUFBQSxNQUFBLEVBQUEsRUFBQSxF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TCxFQUFnQjtRQUFFLEdBQUE7O0FBQUU7VUFBQSxLQUFBLDRCQUFBO3lCQUFBO1VBQUEsQ0FBQTs7WUFBRixDQUFGO09BQWhCO01BQ0EsSUFBQSxDQUFLLFNBQUwsRUFBZ0I7UUFBRSxHQUFBOztBQUFFO1VBQUEsS0FBQSw0QkFBQTt5QkFBQTtVQUFBLENBQUE7O1lBQUYsQ0FBRjtPQUFpRCxDQUFDLElBQWxELENBQXVELEVBQXZELENBQWhCO01BQ0EsSUFBQSxDQUFLLFNBQUwsRUFBZ0I7UUFBRSxHQUFBOztBQUFFO1VBQUEsS0FBQSw0QkFBQTt5QkFBQTtVQUFBLENBQUE7O1lBQUYsQ0FBRjtPQUFpRCxDQUFDLElBQWxELENBQXVELEVBQXZELENBQWhCO0FBQ0EsYUFBTztJQWxCTixDQUFBLElBeENMOztBQTRERSxXQUFPO0VBN0RBLEVBN0NUOzs7RUE4R0EsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7O2FBRXRDLENBQUEsTUFBTSxNQUFBLENBQUEsQ0FBTjtJQUZzQyxDQUFBLElBQXhDOztBQTlHQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLXNmbW9kdWxlcy90ZXN0LWJhc2ljcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG57IGNyZWF0ZUFzUGlwZXMsICAgICAgICB9ID0gcmVxdWlyZSAnYXNwaXBlcydcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vID0gLT5cbiAgeyBwaXBlLFxuICAgIGFzUGlwZSxcbiAgICB0YWtlLCB9ID0gY3JlYXRlQXNQaXBlcygpXG4gIHVwcGVyICAgICAgICAgPSBhc1BpcGUgKCBkICAgICAgICAgICAgICApIC0+IGQudG9VcHBlckNhc2UoKVxuICBleCAgICAgICAgICAgID0gYXNQaXBlICggZCwgbWFyayA9ICchJyAgKSAtPiBkICsgbWFya1xuICBncmVldGluZyAgICAgID0gcGlwZSAnaGVsbG8nXG4gICMgZ3JlZXRpbmcgICAgICAgIFxcXG4gICMgICB8IHVwcGVyICAgICAgIFxcXG4gICMgICB8IGV4ICchISEnXG4gIGdyZWV0aW5nICArIHVwcGVyXG4gIGdyZWV0aW5nICArIGV4ICchISEnXG4gIGluZm8gJ86pYXBfX18xJywgZ3JlZXRpbmdcbiAgaW5mbyAnzqlhcF9fXzInLCBhd2FpdCBncmVldGluZy5ydW4oKVxuICBpbmZvICfOqWFwX19fMycsIGF3YWl0IGdyZWV0aW5nLnJ1bigpXG4gIGluZm8gJ86pYXBfX180JywgYXdhaXQgZ3JlZXRpbmcucnVuKClcbiAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vXzIgPSAtPlxuICB7IG5hbWVpdCwgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfbmFtZWl0KClcbiAgQ0ZHICAgICAgICAgICAgICAgICAgICAgICA9IFN5bWJvbCAnQ0ZHJ1xuICAjIG1pc2ZpdCAgICAgICAgICAgICAgICAgICAgPSBTeW1ib2wgJ21pc2ZpdCdcbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAkID0gKCBjZmcsIGZuICkgLT5cbiAgICBmbltDRkddID0gY2ZnXG4gICAgcmV0dXJuIGZuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHVzaCA9ICggcGlwZWxpbmUsIGdmbiApIC0+XG4gICAgbXlfaWR4ICAgICAgPSBwaXBlbGluZS5sZW5ndGhcbiAgICBmaXJzdCAgICAgICA9IG51bGxcbiAgICBsYXN0ICAgICAgICA9IG51bGxcbiAgICBoYXNfZmlyc3QgICA9IGZhbHNlXG4gICAgaGFzX2xhc3QgICAgPSBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaWYgKCBjZmcgPSBnZm5bIENGRyBdICk/XG4gICAgICBoYXNfZmlyc3QgICA9IFJlZmxlY3QuaGFzIGNmZywgJ2ZpcnN0J1xuICAgICAgaGFzX2xhc3QgICAgPSBSZWZsZWN0LmhhcyBjZmcsICdsYXN0J1xuICAgICAgZmlyc3QgICAgICAgPSBjZmcuZmlyc3QgaWYgaGFzX2ZpcnN0XG4gICAgICBsYXN0ICAgICAgICA9IGNmZy5sYXN0ICBpZiBoYXNfbGFzdFxuICAgICAgIyBkZWJ1ZyAnzqlhcF9fXzUnLCB7IGZpcnN0LCBnZm4sIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIG54dCAgICAgICAgID0gbnVsbFxuICAgIGhhc19ueHQgICAgID0gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgUiA9IG5hbWVpdCBnZm4ubmFtZSwgKCBkICkgLT5cbiAgICAgIHVubGVzcyBueHQ/ICMgbnh0IGlzIG1pc2ZpdFxuICAgICAgICBueHQgICAgICAgICAgICAgPSBwaXBlbGluZVsgbXlfaWR4ICsgMSBdXG4gICAgICAgIGhhc19ueHQgICAgICAgICA9IG54dD9cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgeWllbGQgZnJvbSBnZm4gZmlyc3QgaWYgaGFzX2ZpcnN0XG4gICAgICBmb3IgaiBmcm9tIGdmbiBkXG4gICAgICAgIGlmIGhhc19ueHQgdGhlbiB5aWVsZCBmcm9tIG54dCBqXG4gICAgICAgIGVsc2UgICAgICAgICAgICB5aWVsZCBqXG4gICAgICB5aWVsZCBmcm9tIGdmbiBsYXN0IGlmIGhhc19sYXN0XG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcGlwZWxpbmUucHVzaCBSXG4gICAgcmV0dXJuIFJcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBkbyAtPlxuICAgIGZpcnN0ICAgICAgICAgICAgICAgICAgICAgPSBTeW1ib2wgJyhmaXJzdCknXG4gICAgbGFzdCAgICAgICAgICAgICAgICAgICAgICA9IFN5bWJvbCAnKGxhc3QpJ1xuICAgIHBpcGVsaW5lICA9IFtdXG4gICAgcHVzaCBwaXBlbGluZSwgdXBwZXIgICAgPSAoIGQgICAgICAgICAgICAgICkgLT4gdXJnZSAnzqlhcF9fXzYnLCAndXBwZXI6ICAnLCBycHIgZDsgeWllbGQgZC50b1VwcGVyQ2FzZSgpXG4gICAgcHVzaCBwaXBlbGluZSwgZXggICAgICAgPSAoIGQsIG1hcmsgPSAnIScgICkgLT4gdXJnZSAnzqlhcF9fXzcnLCAnZXg6ICAgICAnLCBycHIgZDsgeWllbGQgZCArIG1hcmtcbiAgICAjIHB1c2ggcGlwZWxpbmUsIG5vdGhpbmcgID0gKCBkICAgICAgICAgICAgICApIC0+IHVyZ2UgJ86pYXBfX184JywgJ25vdGhpbmc6JywgcnByIGQ7IHlpZWxkIHJldHVybiBudWxsXG4gICAgIyBwdXNoIHBpcGVsaW5lLCBhZGQgICAgICA9ICggZCAgICAgICAgICAgICAgKSAtPiB1cmdlICfOqWFwX19fOScsICdhZGQ6ICAgICcsIHJwciBkOyB5aWVsZCBcIlwiXCJMZXQncyBzYXk6IFxcXCJcIlwiXCI7IHlpZWxkIGQ7IHlpZWxkICdcIi4nXG4gICAgcHVzaCBwaXBlbGluZSwgJCB7IGZpcnN0LCBsYXN0LCB9LCBhZGRfMiA9ICggZCApIC0+XG4gICAgICB1cmdlICfOqWFwX18xMCcsICdhZGRfMjogICAgJywgcnByIGRcbiAgICAgIHJldHVybiB5aWVsZCBcIlwiXCJMZXQncyBzYXk6IFxcXCJcIlwiXCIgaWYgZCBpcyBmaXJzdFxuICAgICAgcmV0dXJuIHlpZWxkICdcIi4nIGlmIGQgaXMgbGFzdFxuICAgICAgeWllbGQgZFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkZWJ1ZyAnzqlhcF9fMTEnLCBwaXBlbGluZVxuICAgIGluZm8gJ86pYXBfXzEyJywgWyAoIGQgZm9yIGQgZnJvbSBwaXBlbGluZVsgMCBdICdoaWRleS1obycgKS4uLiwgXVxuICAgIGluZm8gJ86pYXBfXzEzJywgWyAoIGQgZm9yIGQgZnJvbSBwaXBlbGluZVsgMCBdICdoaWRleS1obycgKS4uLiwgXS5qb2luICcnXG4gICAgaW5mbyAnzqlhcF9fMTMnLCBbICggZCBmb3IgZCBmcm9tIHBpcGVsaW5lWyAwIF0gJ2hpZGV5LWhvJyApLi4uLCBdLmpvaW4gJydcbiAgICByZXR1cm4gbnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBhd2FpdCBkZW1vKClcbiAgYXdhaXQgZGVtb18yKClcbiJdfQ==
