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
      var SFMODULES, expand_recursive_keys, type_of, Ωkvr___1;
      SFMODULES = require('../../../apps/bricabrac-sfmodules');
      ({type_of} = SFMODULES.unstable.require_type_of());
      ({expand_recursive_keys} = SFMODULES.require_expand_recursive_keys());
      //.....................................................................................................
      this.eq((Ωkvr___1 = function() {
        return type_of(expand_recursive_keys);
      }), 'function');
      (() => {
        var expanded, matcher, strings, strings_copy, Ωkvr___2, Ωkvr___3, Ωkvr___4;
        strings = {
          '${greet}': "Hello ${who}",
          '${who}': "dear ${target}",
          '${target}': "world"
        };
        matcher = {
          '${greet}': "Hello dear world",
          '${who}': "dear world",
          '${target}': "world"
        };
        strings_copy = {...strings};
        expanded = expand_recursive_keys(strings);
        this.eq((Ωkvr___2 = function() {
          return strings;
        }), strings_copy);
        this.eq((Ωkvr___3 = function() {
          return expanded;
        }), matcher);
        this.eq((Ωkvr___4 = function() {
          return expanded === strings;
        }), false);
        return null;
      })();
      (() => {        //.....................................................................................................
        var strings, strings_copy, Ωkvr___5, Ωkvr___6;
        strings = {
          '${greet}': "Hello ${who}",
          '${who}': "dear ${target}",
          '${target}': "world ${greet}"
        };
        strings_copy = {...strings};
        this.throws((Ωkvr___5 = function() {
          return expand_recursive_keys(strings);
        }), /cyclic reference detected for \$\{greet\}/);
        this.eq((Ωkvr___6 = function() {
          return strings;
        }), strings_copy);
        return null;
      })();
      (() => {        //.....................................................................................................
        var key, ref, strings, value;
        strings = {
          '/(user)/': "/Alice/",
          '(schema)//': "https://",
          '(server)/': "(schema)//example.com/",
          '(folder)': "(server)/(user)/data",
          '::file::': "(folder)/file.txt"
        };
        ref = expand_recursive_keys(strings);
        for (key in ref) {
          value = ref[key];
          debug('Ωkvr___7', f`${key}:<20c; ${rpr(value)}`);
        }
        return null;
      })();
      // #.....................................................................................................
      // do =>
      // # replacement = '/D/'
      // # debug 'Ωkvr___7', "abcd/efdklm/dgoo/d/yy".replaceAll 'd', ( match, index, original ) ->
      // #   chunk = original[ index - 1 .. index + match.length ]
      // #   # debug 'Ωkvr___8', { match, index, original }, rpr chunk
      // #   # marker = '.L'[ +replacement.startsWith '/' ] + '.R'[ +replacement.endsWith '/' ] + '.L'[ +chunk.startsWith '/' ] + '.R'[ +chunk.endsWith '/' ]
      // #   marker = './'[ +( ( replacement.startsWith '/' ) and ( chunk.startsWith '/' ) ) ] + '_' + './'[ +( ( replacement.endsWith '/' ) and ( chunk.endsWith '/' ) ) ]
      // #   debug 'Ωkvr___7', { chunk, replacement, marker, }
      // #   return switch marker
      // #     when '._.' then replacement
      // #     when '._/' then replacement[    ... replacement.length - 1 ]
      // #     when '/_.' then replacement[ 1  ...                        ]
      // #     when '/_/' then replacement[ 1  ... replacement.length - 1 ]
      // #     else throw new Error "Ωkvr___7 internal error"

      //   return null
      //.....................................................................................................
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
        show_passes: false,
        report_checks: false
      };
      return (new Test(guytest_cfg)).test(this.tasks);
    })();
  }

  // ( new Test guytest_cfg ).test @tasks.builtins

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBR0ksQ0FBQTs7SUFBQSw2QkFBQSxFQUErQixRQUFBLENBQUEsQ0FBQTtBQUNuQyxVQUFBLFNBQUEsRUFBQSxxQkFBQSxFQUFBLE9BQUEsRUFBQTtNQUFNLFNBQUEsR0FBOEIsT0FBQSxDQUFRLG1DQUFSO01BQzlCLENBQUEsQ0FBRSxPQUFGLENBQUEsR0FBOEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFuQixDQUFBLENBQTlCO01BQ0EsQ0FBQSxDQUFFLHFCQUFGLENBQUEsR0FBOEIsU0FBUyxDQUFDLDZCQUFWLENBQUEsQ0FBOUIsRUFGTjs7TUFJTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2VBQUcsT0FBQSxDQUFRLHFCQUFSO01BQUgsQ0FBYixDQUFKLEVBQXFELFVBQXJEO01BQ0csQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNULFlBQUEsUUFBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsWUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUE7UUFBUSxPQUFBLEdBQ0U7VUFBQSxVQUFBLEVBQWMsY0FBZDtVQUNBLFFBQUEsRUFBYyxnQkFEZDtVQUVBLFdBQUEsRUFBYztRQUZkO1FBR0YsT0FBQSxHQUNFO1VBQUEsVUFBQSxFQUFjLGtCQUFkO1VBQ0EsUUFBQSxFQUFjLFlBRGQ7VUFFQSxXQUFBLEVBQWM7UUFGZDtRQUdGLFlBQUEsR0FBZ0IsQ0FBRSxHQUFBLE9BQUY7UUFDaEIsUUFBQSxHQUFnQixxQkFBQSxDQUFzQixPQUF0QjtRQUNoQixJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBYixDQUFSLEVBQStDLFlBQS9DO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFILENBQWIsQ0FBUixFQUErQyxPQUEvQztRQUNBLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7aUJBQUcsUUFBQSxLQUFZO1FBQWYsQ0FBYixDQUFSLEVBQStDLEtBQS9DO0FBQ0EsZUFBTztNQWROLENBQUE7TUFnQkEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1QsWUFBQSxPQUFBLEVBQUEsWUFBQSxFQUFBLFFBQUEsRUFBQTtRQUFRLE9BQUEsR0FDRTtVQUFBLFVBQUEsRUFBYyxjQUFkO1VBQ0EsUUFBQSxFQUFjLGdCQURkO1VBRUEsV0FBQSxFQUFjO1FBRmQ7UUFHRixZQUFBLEdBQWdCLENBQUUsR0FBQSxPQUFGO1FBQ2hCLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7aUJBQUcscUJBQUEsQ0FBc0IsT0FBdEI7UUFBSCxDQUFiLENBQVIsRUFBeUQsMkNBQXpEO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRztRQUFILENBQWIsQ0FBUixFQUF5RCxZQUF6RDtBQUNBLGVBQU87TUFSTixDQUFBO01BVUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1QsWUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQTtRQUFRLE9BQUEsR0FDRTtVQUFBLFVBQUEsRUFBZ0IsU0FBaEI7VUFDQSxZQUFBLEVBQWdCLFVBRGhCO1VBRUEsV0FBQSxFQUFnQix3QkFGaEI7VUFHQSxVQUFBLEVBQWdCLHNCQUhoQjtVQUlBLFVBQUEsRUFBZ0I7UUFKaEI7QUFLRjtRQUFBLEtBQUEsVUFBQTs7VUFDRSxLQUFBLENBQU0sVUFBTixFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLEdBQUgsQ0FBQSxPQUFBLENBQUEsQ0FBZ0IsR0FBQSxDQUFJLEtBQUosQ0FBaEIsQ0FBQSxDQUFuQjtRQURGO0FBRUEsZUFBTztNQVROLENBQUEsSUEvQlQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRE0sYUFBTztJQTVEc0I7RUFBL0IsRUE5Qko7OztFQWdHQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7YUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLElBQUMsQ0FBQSxLQUEvQjtJQUhzQyxDQUFBLElBQXhDOzs7RUFoR0E7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLXNmbW9kdWxlcy90ZXN0LWJhc2ljcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRhc2tzID1cblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVxdWlyZV9leHBhbmRfcmVjdXJzaXZlX2tleXM6IC0+XG4gICAgICBTRk1PRFVMRVMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG4gICAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICAgIHsgZXhwYW5kX3JlY3Vyc2l2ZV9rZXlzLCAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2V4cGFuZF9yZWN1cnNpdmVfa2V5cygpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pa3ZyX19fMSA9IC0+IHR5cGVfb2YgZXhwYW5kX3JlY3Vyc2l2ZV9rZXlzICksICdmdW5jdGlvbidcbiAgICAgIGRvID0+XG4gICAgICAgIHN0cmluZ3MgPVxuICAgICAgICAgICcke2dyZWV0fSc6ICAgXCJIZWxsbyAke3dob31cIlxuICAgICAgICAgICcke3dob30nOiAgICAgXCJkZWFyICR7dGFyZ2V0fVwiXG4gICAgICAgICAgJyR7dGFyZ2V0fSc6ICBcIndvcmxkXCJcbiAgICAgICAgbWF0Y2hlciA9XG4gICAgICAgICAgJyR7Z3JlZXR9JzogICBcIkhlbGxvIGRlYXIgd29ybGRcIlxuICAgICAgICAgICcke3dob30nOiAgICAgXCJkZWFyIHdvcmxkXCJcbiAgICAgICAgICAnJHt0YXJnZXR9JzogIFwid29ybGRcIlxuICAgICAgICBzdHJpbmdzX2NvcHkgID0geyBzdHJpbmdzLi4uLCB9XG4gICAgICAgIGV4cGFuZGVkICAgICAgPSBleHBhbmRfcmVjdXJzaXZlX2tleXMgc3RyaW5nc1xuICAgICAgICBAZXEgICAgICggzqlrdnJfX18yID0gLT4gc3RyaW5ncyAgICAgICAgICAgICApLCBzdHJpbmdzX2NvcHlcbiAgICAgICAgQGVxICAgICAoIM6pa3ZyX19fMyA9IC0+IGV4cGFuZGVkICAgICAgICAgICAgKSwgbWF0Y2hlclxuICAgICAgICBAZXEgICAgICggzqlrdnJfX180ID0gLT4gZXhwYW5kZWQgaXMgc3RyaW5ncyApLCBmYWxzZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBzdHJpbmdzID1cbiAgICAgICAgICAnJHtncmVldH0nOiAgIFwiSGVsbG8gJHt3aG99XCJcbiAgICAgICAgICAnJHt3aG99JzogICAgIFwiZGVhciAke3RhcmdldH1cIlxuICAgICAgICAgICcke3RhcmdldH0nOiAgXCJ3b3JsZCAke2dyZWV0fVwiXG4gICAgICAgIHN0cmluZ3NfY29weSAgPSB7IHN0cmluZ3MuLi4sIH1cbiAgICAgICAgQHRocm93cyAoIM6pa3ZyX19fNSA9IC0+IGV4cGFuZF9yZWN1cnNpdmVfa2V5cyBzdHJpbmdzICksIC9jeWNsaWMgcmVmZXJlbmNlIGRldGVjdGVkIGZvciBcXCRcXHtncmVldFxcfS9cbiAgICAgICAgQGVxICAgICAoIM6pa3ZyX19fNiA9IC0+IHN0cmluZ3MgICAgICAgICAgICAgICAgICAgICAgICksIHN0cmluZ3NfY29weVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBzdHJpbmdzID1cbiAgICAgICAgICAnLyh1c2VyKS8nOiAgICAgXCIvQWxpY2UvXCJcbiAgICAgICAgICAnKHNjaGVtYSkvLyc6ICAgXCJodHRwczovL1wiXG4gICAgICAgICAgJyhzZXJ2ZXIpLyc6ICAgIFwiKHNjaGVtYSkvL2V4YW1wbGUuY29tL1wiXG4gICAgICAgICAgJyhmb2xkZXIpJzogICAgIFwiKHNlcnZlcikvKHVzZXIpL2RhdGFcIlxuICAgICAgICAgICc6OmZpbGU6Oic6ICAgICBcIihmb2xkZXIpL2ZpbGUudHh0XCJcbiAgICAgICAgZm9yIGtleSwgdmFsdWUgb2YgZXhwYW5kX3JlY3Vyc2l2ZV9rZXlzIHN0cmluZ3NcbiAgICAgICAgICBkZWJ1ZyAnzqlrdnJfX183JywgZlwiI3trZXl9OjwyMGM7ICN7cnByIHZhbHVlfVwiXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBkbyA9PlxuICAgICAgIyAjIHJlcGxhY2VtZW50ID0gJy9ELydcbiAgICAgICMgIyBkZWJ1ZyAnzqlrdnJfX183JywgXCJhYmNkL2VmZGtsbS9kZ29vL2QveXlcIi5yZXBsYWNlQWxsICdkJywgKCBtYXRjaCwgaW5kZXgsIG9yaWdpbmFsICkgLT5cbiAgICAgICMgIyAgIGNodW5rID0gb3JpZ2luYWxbIGluZGV4IC0gMSAuLiBpbmRleCArIG1hdGNoLmxlbmd0aCBdXG4gICAgICAjICMgICAjIGRlYnVnICfOqWt2cl9fXzgnLCB7IG1hdGNoLCBpbmRleCwgb3JpZ2luYWwgfSwgcnByIGNodW5rXG4gICAgICAjICMgICAjIG1hcmtlciA9ICcuTCdbICtyZXBsYWNlbWVudC5zdGFydHNXaXRoICcvJyBdICsgJy5SJ1sgK3JlcGxhY2VtZW50LmVuZHNXaXRoICcvJyBdICsgJy5MJ1sgK2NodW5rLnN0YXJ0c1dpdGggJy8nIF0gKyAnLlInWyArY2h1bmsuZW5kc1dpdGggJy8nIF1cbiAgICAgICMgIyAgIG1hcmtlciA9ICcuLydbICsoICggcmVwbGFjZW1lbnQuc3RhcnRzV2l0aCAnLycgKSBhbmQgKCBjaHVuay5zdGFydHNXaXRoICcvJyApICkgXSArICdfJyArICcuLydbICsoICggcmVwbGFjZW1lbnQuZW5kc1dpdGggJy8nICkgYW5kICggY2h1bmsuZW5kc1dpdGggJy8nICkgKSBdXG4gICAgICAjICMgICBkZWJ1ZyAnzqlrdnJfX183JywgeyBjaHVuaywgcmVwbGFjZW1lbnQsIG1hcmtlciwgfVxuICAgICAgIyAjICAgcmV0dXJuIHN3aXRjaCBtYXJrZXJcbiAgICAgICMgIyAgICAgd2hlbiAnLl8uJyB0aGVuIHJlcGxhY2VtZW50XG4gICAgICAjICMgICAgIHdoZW4gJy5fLycgdGhlbiByZXBsYWNlbWVudFsgICAgLi4uIHJlcGxhY2VtZW50Lmxlbmd0aCAtIDEgXVxuICAgICAgIyAjICAgICB3aGVuICcvXy4nIHRoZW4gcmVwbGFjZW1lbnRbIDEgIC4uLiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICMgIyAgICAgd2hlbiAnL18vJyB0aGVuIHJlcGxhY2VtZW50WyAxICAuLi4gcmVwbGFjZW1lbnQubGVuZ3RoIC0gMSBdXG4gICAgICAjICMgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yIFwizqlrdnJfX183IGludGVybmFsIGVycm9yXCJcblxuICAgICAgIyAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEB0YXNrc1xuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEB0YXNrcy5idWlsdGluc1xuIl19
