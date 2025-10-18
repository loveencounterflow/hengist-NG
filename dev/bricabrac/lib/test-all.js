(function() {
  'use strict';
  var FS, GTNG, GUY, PATH, Test, alert, debug, echo, help, info, inspect, log, my_filename, plain, praise, rpr, tasks, urge, warn, whisper;

  //###########################################################################################################
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-all'));

  ({rpr, inspect, echo, log} = GUY.trm);

  //...........................................................................................................
  PATH = require('path');

  FS = require('fs');

  my_filename = PATH.basename(__filename);

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  //###########################################################################################################
  tasks = {};

  (async function() {
    var cfg, filename, i, k, len, module, path, paths;
    paths = FS.readdirSync(__dirname);
    for (i = 0, len = paths.length; i < len; i++) {
      path = paths[i];
      filename = PATH.basename(path);
      if (path.endsWith('.js.map')) {
        continue;
      }
      if (filename === my_filename) {
        continue;
      }
      if (!filename.startsWith('test-')) {
        continue;
      }
      path = PATH.join(__dirname, path);
      module = require(path);
      debug('Ω___1', module);
      debug('Ω___2', (function() {
        var results;
        results = [];
        for (k in module) {
          results.push(k);
        }
        return results;
      })());
      tasks[filename] = module;
    }
    cfg = {
      throw_on_error: false
    };
    return (await ((new Test(cfg)).async_test({tasks})));
  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYWxsLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxXQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQTs7O0VBSUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixvQkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEdBSEYsQ0FBQSxHQUc0QixHQUFHLENBQUMsR0FIaEMsRUFkQTs7O0VBbUJBLElBQUEsR0FBNEIsT0FBQSxDQUFRLE1BQVI7O0VBQzVCLEVBQUEsR0FBNEIsT0FBQSxDQUFRLElBQVI7O0VBQzVCLFdBQUEsR0FBNEIsSUFBSSxDQUFDLFFBQUwsQ0FBYyxVQUFkOztFQUM1QixJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1QixFQXZCQTs7O0VBMkJBLEtBQUEsR0FBUSxDQUFBOztFQUNMLENBQUEsTUFBQSxRQUFBLENBQUEsQ0FBQTtBQUNILFFBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsSUFBQSxFQUFBO0lBQUUsS0FBQSxHQUFRLEVBQUUsQ0FBQyxXQUFILENBQWUsU0FBZjtJQUNSLEtBQUEsdUNBQUE7O01BQ0UsUUFBQSxHQUFXLElBQUksQ0FBQyxRQUFMLENBQWMsSUFBZDtNQUNYLElBQVksSUFBSSxDQUFDLFFBQUwsQ0FBYyxTQUFkLENBQVo7QUFBQSxpQkFBQTs7TUFDQSxJQUFZLFFBQUEsS0FBWSxXQUF4QjtBQUFBLGlCQUFBOztNQUNBLEtBQWdCLFFBQVEsQ0FBQyxVQUFULENBQW9CLE9BQXBCLENBQWhCO0FBQUEsaUJBQUE7O01BQ0EsSUFBQSxHQUFvQixJQUFJLENBQUMsSUFBTCxDQUFVLFNBQVYsRUFBcUIsSUFBckI7TUFDcEIsTUFBQSxHQUFvQixPQUFBLENBQVEsSUFBUjtNQUNwQixLQUFBLENBQU0sT0FBTixFQUFlLE1BQWY7TUFDQSxLQUFBLENBQU0sT0FBTjs7QUFBaUI7UUFBQSxLQUFBLFdBQUE7dUJBQUE7UUFBQSxDQUFBOztVQUFqQjtNQUNBLEtBQUssQ0FBRSxRQUFGLENBQUwsR0FBb0I7SUFUdEI7SUFVQSxHQUFBLEdBQU07TUFBRSxjQUFBLEVBQWdCO0lBQWxCO1dBQ04sQ0FBQSxNQUFNLENBQUUsQ0FBRSxJQUFJLElBQUosQ0FBUyxHQUFULENBQUYsQ0FBZ0IsQ0FBQyxVQUFqQixDQUE0QixDQUFFLEtBQUYsQ0FBNUIsQ0FBRixDQUFOO0VBYkMsQ0FBQTtBQTVCSCIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2ludGVydHlwZS90ZXN0LWFsbCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ3BhdGgnXG5GUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZnMnXG5teV9maWxlbmFtZSAgICAgICAgICAgICAgID0gUEFUSC5iYXNlbmFtZSBfX2ZpbGVuYW1lXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG50YXNrcyA9IHt9XG5kbyAtPlxuICBwYXRocyA9IEZTLnJlYWRkaXJTeW5jIF9fZGlybmFtZVxuICBmb3IgcGF0aCBpbiBwYXRoc1xuICAgIGZpbGVuYW1lID0gUEFUSC5iYXNlbmFtZSBwYXRoXG4gICAgY29udGludWUgaWYgcGF0aC5lbmRzV2l0aCAnLmpzLm1hcCdcbiAgICBjb250aW51ZSBpZiBmaWxlbmFtZSBpcyBteV9maWxlbmFtZVxuICAgIGNvbnRpbnVlIHVubGVzcyBmaWxlbmFtZS5zdGFydHNXaXRoICd0ZXN0LSdcbiAgICBwYXRoICAgICAgICAgICAgICA9IFBBVEguam9pbiBfX2Rpcm5hbWUsIHBhdGhcbiAgICBtb2R1bGUgICAgICAgICAgICA9IHJlcXVpcmUgcGF0aFxuICAgIGRlYnVnICfOqV9fXzEnLCBtb2R1bGVcbiAgICBkZWJ1ZyAnzqlfX18yJywgKCBrIGZvciBrIG9mIG1vZHVsZSApXG4gICAgdGFza3NbIGZpbGVuYW1lIF0gPSBtb2R1bGVcbiAgY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsIH1cbiAgYXdhaXQgKCAoIG5ldyBUZXN0IGNmZyApLmFzeW5jX3Rlc3QgeyB0YXNrcywgfSApXG5cblxuIl19
