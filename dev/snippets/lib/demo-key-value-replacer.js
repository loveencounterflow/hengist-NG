(async function() {
  'use strict';
  var GUY, alert, debug, demo, echo, expand, expand_strings, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  //...........................................................................................................

  //===========================================================================================================
  expand = function(strings, key, seen = new Set()) {
    var k, ref, v, value;
    if (seen.has(key)) {
      throw new Error(`Ωkvr___1 cyclic reference detected for ${key}`);
    }
    seen.add(key);
    value = (ref = strings[key]) != null ? ref : "WAT";
    for (k in strings) {
      v = strings[k];
      value = value.replaceAll(k, function() {
        return expand(strings, k, seen);
      });
    }
    return value;
  };

  //===========================================================================================================
  expand_strings = function(strings) {
    /* Expand all string values by recursively replacing keys with their mapped values */
    var R, key;
    R = {};
    for (key in strings) {
      R[key] = expand(strings, key);
    }
    return R;
  };

  //===========================================================================================================
  demo = function() {
    var strings, strings_error;
    strings = {
      '${greet}': "Hello ${who}",
      '${who}': "dear ${target}",
      '${target}': "world"
    };
    strings_error = {
      '${greet}': "Hello ${who}",
      '${who}': "dear ${target}",
      '${target}': "world ${greet}"
    };
    (() => {
      var expanded;
      expanded = expand_strings(strings);
      info('Ωkvr___2', strings);
      help('Ωkvr___3', expanded);
      help('Ωkvr___4', expanded === strings);
      return null;
    })();
    // =>
    // { greet: "Hello dear world"
    //   who:   "dear world"
    //   target:"world" }
    ((strings) => {
      var error, expanded;
      error = null;
      try {
        expanded = expand_strings(strings);
      } catch (error1) {
        error = error1;
        warn('Ωkvr___6', error.message);
      }
      if (error == null) {
        warn('Ωkvr___7', "expected error, none was thrown");
      }
      info('Ωkvr___8', strings);
      help('Ωkvr___9', expanded);
      return null;
    })(strings_error);
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      demo();
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8ta2V5LXZhbHVlLXJlcGxhY2VyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUFBO0FBQUEsTUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxjQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsWUFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBYkE7Ozs7O0VBdUJBLE1BQUEsR0FBUyxRQUFBLENBQUUsT0FBRixFQUFXLEdBQVgsRUFBZ0IsT0FBTyxJQUFJLEdBQUosQ0FBQSxDQUF2QixDQUFBO0FBQ1QsUUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsRUFBQTtJQUFFLElBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxHQUFULENBQUg7TUFDRSxNQUFNLElBQUksS0FBSixDQUFVLENBQUEsdUNBQUEsQ0FBQSxDQUEwQyxHQUExQyxDQUFBLENBQVYsRUFEUjs7SUFFQSxJQUFJLENBQUMsR0FBTCxDQUFTLEdBQVQ7SUFDQSxLQUFBLHdDQUF5QjtJQUN6QixLQUFBLFlBQUE7O01BQ0UsS0FBQSxHQUFRLEtBQUssQ0FBQyxVQUFOLENBQWlCLENBQWpCLEVBQW9CLFFBQUEsQ0FBQSxDQUFBO2VBQUcsTUFBQSxDQUFPLE9BQVAsRUFBZ0IsQ0FBaEIsRUFBbUIsSUFBbkI7TUFBSCxDQUFwQjtJQURWO0FBRUEsV0FBTztFQVBBLEVBdkJUOzs7RUFpQ0EsY0FBQSxHQUFpQixRQUFBLENBQUUsT0FBRixDQUFBLEVBQUE7O0FBQ2pCLFFBQUEsQ0FBQSxFQUFBO0lBQ0UsQ0FBQSxHQUFZLENBQUE7SUFDWixLQUFBLGNBQUE7TUFBQSxDQUFDLENBQUUsR0FBRixDQUFELEdBQVksTUFBQSxDQUFPLE9BQVAsRUFBZ0IsR0FBaEI7SUFBWjtBQUNBLFdBQU87RUFKUSxFQWpDakI7OztFQXdDQSxJQUFBLEdBQU8sUUFBQSxDQUFBLENBQUE7QUFDUCxRQUFBLE9BQUEsRUFBQTtJQUFFLE9BQUEsR0FDRTtNQUFBLFVBQUEsRUFBYyxjQUFkO01BQ0EsUUFBQSxFQUFjLGdCQURkO01BRUEsV0FBQSxFQUFjO0lBRmQ7SUFHRixhQUFBLEdBQ0U7TUFBQSxVQUFBLEVBQWMsY0FBZDtNQUNBLFFBQUEsRUFBYyxnQkFEZDtNQUVBLFdBQUEsRUFBYztJQUZkO0lBR0MsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNMLFVBQUE7TUFBSSxRQUFBLEdBQVcsY0FBQSxDQUFlLE9BQWY7TUFDWCxJQUFBLENBQUssVUFBTCxFQUFpQixPQUFqQjtNQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLFFBQWpCO01BQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsUUFBQSxLQUFZLE9BQTdCO0FBQ0EsYUFBTztJQUxOLENBQUEsSUFSTDs7Ozs7SUFrQkssQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUFBO0FBQ0wsVUFBQSxLQUFBLEVBQUE7TUFBSSxLQUFBLEdBQVE7QUFDUjtRQUFJLFFBQUEsR0FBVyxjQUFBLENBQWUsT0FBZixFQUFmO09BQ0EsY0FBQTtRQUFNO1FBQVcsSUFBQSxDQUFLLFVBQUwsRUFBaUIsS0FBSyxDQUFDLE9BQXZCLEVBQWpCOztNQUNBLElBQTBELGFBQTFEO1FBQUEsSUFBQSxDQUFLLFVBQUwsRUFBaUIsaUNBQWpCLEVBQUE7O01BQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsT0FBakI7TUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixRQUFqQjtBQUNBLGFBQU87SUFQTixDQUFBLEVBQVk7QUFRZixXQUFPO0VBM0JGLEVBeENQOzs7RUFzRUEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtNQUN0QyxJQUFBLENBQUE7QUFDQSxhQUFPO0lBRitCLENBQUEsSUFBeEM7O0FBdEVBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdkZW1vLWV4ZWNhJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwYW5kID0gKCBzdHJpbmdzLCBrZXksIHNlZW4gPSBuZXcgU2V0KCkgKSAtPlxuICBpZiBzZWVuLmhhcyBrZXlcbiAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqWt2cl9fXzEgY3ljbGljIHJlZmVyZW5jZSBkZXRlY3RlZCBmb3IgI3trZXl9XCJcbiAgc2Vlbi5hZGQga2V5XG4gIHZhbHVlID0gc3RyaW5nc1sga2V5IF0gPyBcIldBVFwiXG4gIGZvciBrLCB2IG9mIHN0cmluZ3NcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2VBbGwgaywgLT4gZXhwYW5kIHN0cmluZ3MsIGssIHNlZW5cbiAgcmV0dXJuIHZhbHVlXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwYW5kX3N0cmluZ3MgPSAoIHN0cmluZ3MgKSAtPlxuICAjIyMgRXhwYW5kIGFsbCBzdHJpbmcgdmFsdWVzIGJ5IHJlY3Vyc2l2ZWx5IHJlcGxhY2luZyBrZXlzIHdpdGggdGhlaXIgbWFwcGVkIHZhbHVlcyAjIyNcbiAgUiAgICAgICAgID0ge31cbiAgUlsga2V5IF0gID0gZXhwYW5kIHN0cmluZ3MsIGtleSBmb3Iga2V5IG9mIHN0cmluZ3NcbiAgcmV0dXJuIFJcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vID0gLT5cbiAgc3RyaW5ncyA9XG4gICAgJyR7Z3JlZXR9JzogICBcIkhlbGxvICR7d2hvfVwiXG4gICAgJyR7d2hvfSc6ICAgICBcImRlYXIgJHt0YXJnZXR9XCJcbiAgICAnJHt0YXJnZXR9JzogIFwid29ybGRcIlxuICBzdHJpbmdzX2Vycm9yID1cbiAgICAnJHtncmVldH0nOiAgIFwiSGVsbG8gJHt3aG99XCJcbiAgICAnJHt3aG99JzogICAgIFwiZGVhciAke3RhcmdldH1cIlxuICAgICcke3RhcmdldH0nOiAgXCJ3b3JsZCAke2dyZWV0fVwiXG4gIGRvID0+XG4gICAgZXhwYW5kZWQgPSBleHBhbmRfc3RyaW5ncyBzdHJpbmdzXG4gICAgaW5mbyAnzqlrdnJfX18yJywgc3RyaW5nc1xuICAgIGhlbHAgJ86pa3ZyX19fMycsIGV4cGFuZGVkXG4gICAgaGVscCAnzqlrdnJfX180JywgZXhwYW5kZWQgaXMgc3RyaW5nc1xuICAgIHJldHVybiBudWxsXG4gICMgPT5cbiAgIyB7IGdyZWV0OiBcIkhlbGxvIGRlYXIgd29ybGRcIlxuICAjICAgd2hvOiAgIFwiZGVhciB3b3JsZFwiXG4gICMgICB0YXJnZXQ6XCJ3b3JsZFwiIH1cbiAgZG8gKCBzdHJpbmdzID0gc3RyaW5nc19lcnJvciApID0+XG4gICAgZXJyb3IgPSBudWxsXG4gICAgdHJ5IGV4cGFuZGVkID0gZXhwYW5kX3N0cmluZ3Mgc3RyaW5nc1xuICAgIGNhdGNoIGVycm9yIHRoZW4gd2FybiAnzqlrdnJfX182JywgZXJyb3IubWVzc2FnZVxuICAgIHdhcm4gJ86pa3ZyX19fNycsIFwiZXhwZWN0ZWQgZXJyb3IsIG5vbmUgd2FzIHRocm93blwiIHVubGVzcyBlcnJvcj9cbiAgICBpbmZvICfOqWt2cl9fXzgnLCBzdHJpbmdzXG4gICAgaGVscCAnzqlrdnJfX185JywgZXhwYW5kZWRcbiAgICByZXR1cm4gbnVsbFxuICByZXR1cm4gbnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBkZW1vKClcbiAgcmV0dXJuIG51bGxcblxuIl19
