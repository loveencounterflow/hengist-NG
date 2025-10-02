(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-sfmodules/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  //###########################################################################################################

  //===========================================================================================================
  this.tasks = {
    //-------------------------------------------------------------------------------------------------------
    require_expand_recursive_keys: function() {
      var SFMODULES, expand_recursive_keys, strings, strings_error, type_of, Ωrxrk___1;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({expand_recursive_keys} = SFMODULES.require_expand_recursive_keys());
      this.eq((Ωrxrk___1 = function() {
        return type_of(expand_recursive_keys);
      }), 'function');
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
        expanded = expand_recursive_keys(strings);
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
          expanded = expand_recursive_keys(strings);
        } catch (error1) {
          error = error1;
          warn('Ωkvr___5', error.message);
        }
        if (error == null) {
          warn('Ωkvr___6', "expected error, none was thrown");
        }
        info('Ωkvr___7', strings);
        help('Ωkvr___8', expanded);
        return null;
      })(strings_error);
      //.....................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      return (new Test(guytest_cfg)).test(this.tasks);
    })();
  }

  // ( new Test guytest_cfg ).test @tasks.builtins

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBR0ksQ0FBQTs7SUFBQSw2QkFBQSxFQUErQixRQUFBLENBQUEsQ0FBQTtBQUNuQyxVQUFBLFNBQUEsRUFBQSxxQkFBQSxFQUFBLE9BQUEsRUFBQSxhQUFBLEVBQUEsT0FBQSxFQUFBO01BQU0sU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsUUFBUSxDQUFDLGVBQW5CLENBQUEsQ0FBOUI7TUFDQSxDQUFBLENBQUUscUJBQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsNkJBQVYsQ0FBQSxDQUE5QjtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxPQUFBLENBQVEscUJBQVI7TUFBSCxDQUFkLENBQUosRUFBb0UsVUFBcEU7TUFDQSxPQUFBLEdBQ0U7UUFBQSxVQUFBLEVBQWMsY0FBZDtRQUNBLFFBQUEsRUFBYyxnQkFEZDtRQUVBLFdBQUEsRUFBYztNQUZkO01BR0YsYUFBQSxHQUNFO1FBQUEsVUFBQSxFQUFjLGNBQWQ7UUFDQSxRQUFBLEVBQWMsZ0JBRGQ7UUFFQSxXQUFBLEVBQWM7TUFGZDtNQUdDLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDVCxZQUFBO1FBQVEsUUFBQSxHQUFXLHFCQUFBLENBQXNCLE9BQXRCO1FBQ1gsSUFBQSxDQUFLLFVBQUwsRUFBaUIsT0FBakI7UUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixRQUFqQjtRQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLFFBQUEsS0FBWSxPQUE3QjtBQUNBLGVBQU87TUFMTixDQUFBLElBWlQ7Ozs7O01Bc0JTLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBQTtBQUNULFlBQUEsS0FBQSxFQUFBO1FBQVEsS0FBQSxHQUFRO0FBQ1I7VUFBSSxRQUFBLEdBQVcscUJBQUEsQ0FBc0IsT0FBdEIsRUFBZjtTQUNBLGNBQUE7VUFBTTtVQUFXLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEtBQUssQ0FBQyxPQUF2QixFQUFqQjs7UUFDQSxJQUEwRCxhQUExRDtVQUFBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLGlDQUFqQixFQUFBOztRQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLE9BQWpCO1FBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsUUFBakI7QUFDQSxlQUFPO01BUE4sQ0FBQSxFQUFZLGVBdEJyQjs7QUErQk0sYUFBTztJQWhDc0I7RUFBL0IsRUE5Qko7OztFQW9FQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7YUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLElBQUMsQ0FBQSxLQUEvQjtJQUhzQyxDQUFBLElBQXhDOzs7RUFwRUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLXNmbW9kdWxlcy90ZXN0LWJhc2ljcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRhc2tzID1cblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVxdWlyZV9leHBhbmRfcmVjdXJzaXZlX2tleXM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgZXhwYW5kX3JlY3Vyc2l2ZV9rZXlzLCAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2V4cGFuZF9yZWN1cnNpdmVfa2V5cygpXG4gICAgICBAZXEgKCDOqXJ4cmtfX18xID0gLT4gdHlwZV9vZiBleHBhbmRfcmVjdXJzaXZlX2tleXMgICAgICAgICAgICAgICApLCAnZnVuY3Rpb24nXG4gICAgICBzdHJpbmdzID1cbiAgICAgICAgJyR7Z3JlZXR9JzogICBcIkhlbGxvICR7d2hvfVwiXG4gICAgICAgICcke3dob30nOiAgICAgXCJkZWFyICR7dGFyZ2V0fVwiXG4gICAgICAgICcke3RhcmdldH0nOiAgXCJ3b3JsZFwiXG4gICAgICBzdHJpbmdzX2Vycm9yID1cbiAgICAgICAgJyR7Z3JlZXR9JzogICBcIkhlbGxvICR7d2hvfVwiXG4gICAgICAgICcke3dob30nOiAgICAgXCJkZWFyICR7dGFyZ2V0fVwiXG4gICAgICAgICcke3RhcmdldH0nOiAgXCJ3b3JsZCAke2dyZWV0fVwiXG4gICAgICBkbyA9PlxuICAgICAgICBleHBhbmRlZCA9IGV4cGFuZF9yZWN1cnNpdmVfa2V5cyBzdHJpbmdzXG4gICAgICAgIGluZm8gJ86pa3ZyX19fMicsIHN0cmluZ3NcbiAgICAgICAgaGVscCAnzqlrdnJfX18zJywgZXhwYW5kZWRcbiAgICAgICAgaGVscCAnzqlrdnJfX180JywgZXhwYW5kZWQgaXMgc3RyaW5nc1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIyA9PlxuICAgICAgIyB7IGdyZWV0OiBcIkhlbGxvIGRlYXIgd29ybGRcIlxuICAgICAgIyAgIHdobzogICBcImRlYXIgd29ybGRcIlxuICAgICAgIyAgIHRhcmdldDpcIndvcmxkXCIgfVxuICAgICAgZG8gKCBzdHJpbmdzID0gc3RyaW5nc19lcnJvciApID0+XG4gICAgICAgIGVycm9yID0gbnVsbFxuICAgICAgICB0cnkgZXhwYW5kZWQgPSBleHBhbmRfcmVjdXJzaXZlX2tleXMgc3RyaW5nc1xuICAgICAgICBjYXRjaCBlcnJvciB0aGVuIHdhcm4gJ86pa3ZyX19fNScsIGVycm9yLm1lc3NhZ2VcbiAgICAgICAgd2FybiAnzqlrdnJfX182JywgXCJleHBlY3RlZCBlcnJvciwgbm9uZSB3YXMgdGhyb3duXCIgdW5sZXNzIGVycm9yP1xuICAgICAgICBpbmZvICfOqWt2cl9fXzcnLCBzdHJpbmdzXG4gICAgICAgIGhlbHAgJ86pa3ZyX19fOCcsIGV4cGFuZGVkXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEB0YXNrc1xuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEB0YXNrcy5idWlsdGluc1xuIl19
