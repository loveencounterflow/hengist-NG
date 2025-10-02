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
      var SFMODULES, expand_recursive_keys, path, replacement, type_of, Ωkvr___1;
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
      path = require('node:path');
      replacement = '/D/';
      debug('Ωkvr___7', "abcd/efdklm/dgoo/d/yy".replaceAll('d', function(match, index, original) {
        var chunk, marker;
        chunk = original.slice(index - 1, +(index + match.length) + 1 || 9e9);
        // debug 'Ωkvr___8', { match, index, original }, rpr chunk
        marker = '.L'[+replacement.startsWith('/')] + '.R'[+replacement.endsWith('/')] + '.L'[+chunk.startsWith('/')] + '.R'[+chunk.endsWith('/')];
        debug('Ωkvr___7', {chunk, replacement, marker});
        switch (marker) {
          case '....':
            return replacement;
          case '..L.':
            return replacement;
          case '..LR':
            return replacement;
          case '...R':
            return replacement;
          case 'L...':
            return replacement;
          case 'L.L.':
            return replacement;
          case 'L.LR':
            return replacement;
          case 'L..R':
            return replacement;
          case 'LR..':
            return replacement;
          case 'LRL.':
            return replacement;
          case 'LRLR':
            return replacement.replace(/^\/(.*)\/$/, '$1');
          case 'LR.R':
            return replacement.replace(/\/$/, '');
          case '.R..':
            return replacement;
          case '.RL.':
            return replacement;
          case '.RLR':
            return replacement.replace(/\/$/, '');
          case '.R.R':
            return replacement.replace(/\/$/, '');
          default:
            throw new Error("Ωkvr___7 internal error");
        }
      }));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBOztFQUVBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsaUNBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQVpBOzs7RUFrQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsMkJBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLENBQUEsR0FBNEIsSUFBNUI7O0VBQ0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUFwQkE7Ozs7O0VBMkJBLElBQUMsQ0FBQSxLQUFELEdBR0ksQ0FBQTs7SUFBQSw2QkFBQSxFQUErQixRQUFBLENBQUEsQ0FBQTtBQUNuQyxVQUFBLFNBQUEsRUFBQSxxQkFBQSxFQUFBLElBQUEsRUFBQSxXQUFBLEVBQUEsT0FBQSxFQUFBO01BQU0sU0FBQSxHQUE4QixPQUFBLENBQVEsbUNBQVI7TUFDOUIsQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsUUFBUSxDQUFDLGVBQW5CLENBQUEsQ0FBOUI7TUFDQSxDQUFBLENBQUUscUJBQUYsQ0FBQSxHQUE4QixTQUFTLENBQUMsNkJBQVYsQ0FBQSxDQUE5QixFQUZOOztNQUlNLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7ZUFBRyxPQUFBLENBQVEscUJBQVI7TUFBSCxDQUFiLENBQUosRUFBcUQsVUFBckQ7TUFDRyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ1QsWUFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQTtRQUFRLE9BQUEsR0FDRTtVQUFBLFVBQUEsRUFBYyxjQUFkO1VBQ0EsUUFBQSxFQUFjLGdCQURkO1VBRUEsV0FBQSxFQUFjO1FBRmQ7UUFHRixPQUFBLEdBQ0U7VUFBQSxVQUFBLEVBQWMsa0JBQWQ7VUFDQSxRQUFBLEVBQWMsWUFEZDtVQUVBLFdBQUEsRUFBYztRQUZkO1FBR0YsWUFBQSxHQUFnQixDQUFFLEdBQUEsT0FBRjtRQUNoQixRQUFBLEdBQWdCLHFCQUFBLENBQXNCLE9BQXRCO1FBQ2hCLElBQUMsQ0FBQSxFQUFELENBQVEsQ0FBRSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7aUJBQUc7UUFBSCxDQUFiLENBQVIsRUFBK0MsWUFBL0M7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBYixDQUFSLEVBQStDLE9BQS9DO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBUSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxRQUFBLEtBQVk7UUFBZixDQUFiLENBQVIsRUFBK0MsS0FBL0M7QUFDQSxlQUFPO01BZE4sQ0FBQTtNQWdCQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDVCxZQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUEsUUFBQSxFQUFBO1FBQVEsT0FBQSxHQUNFO1VBQUEsVUFBQSxFQUFjLGNBQWQ7VUFDQSxRQUFBLEVBQWMsZ0JBRGQ7VUFFQSxXQUFBLEVBQWM7UUFGZDtRQUdGLFlBQUEsR0FBZ0IsQ0FBRSxHQUFBLE9BQUY7UUFDaEIsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFBRyxxQkFBQSxDQUFzQixPQUF0QjtRQUFILENBQWIsQ0FBUixFQUF5RCwyQ0FBekQ7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFRLENBQUUsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO2lCQUFHO1FBQUgsQ0FBYixDQUFSLEVBQXlELFlBQXpEO0FBQ0EsZUFBTztNQVJOLENBQUE7TUFTSCxJQUFBLEdBQU8sT0FBQSxDQUFRLFdBQVI7TUFDUCxXQUFBLEdBQWM7TUFDZCxLQUFBLENBQU0sVUFBTixFQUFrQix1QkFBdUIsQ0FBQyxVQUF4QixDQUFtQyxHQUFuQyxFQUF3QyxRQUFBLENBQUUsS0FBRixFQUFTLEtBQVQsRUFBZ0IsUUFBaEIsQ0FBQTtBQUNoRSxZQUFBLEtBQUEsRUFBQTtRQUFRLEtBQUEsR0FBUSxRQUFRLHNEQUF4Qjs7UUFFUSxNQUFBLEdBQVMsSUFBSSxDQUFFLENBQUMsV0FBVyxDQUFDLFVBQVosQ0FBdUIsR0FBdkIsQ0FBSCxDQUFKLEdBQXNDLElBQUksQ0FBRSxDQUFDLFdBQVcsQ0FBQyxRQUFaLENBQXFCLEdBQXJCLENBQUgsQ0FBMUMsR0FBMEUsSUFBSSxDQUFFLENBQUMsS0FBSyxDQUFDLFVBQU4sQ0FBaUIsR0FBakIsQ0FBSCxDQUE5RSxHQUEwRyxJQUFJLENBQUUsQ0FBQyxLQUFLLENBQUMsUUFBTixDQUFlLEdBQWYsQ0FBSDtRQUN2SCxLQUFBLENBQU0sVUFBTixFQUFrQixDQUFFLEtBQUYsRUFBUyxXQUFULEVBQXNCLE1BQXRCLENBQWxCO0FBQ08sZ0JBQU8sTUFBUDtBQUFBLGVBQ0EsTUFEQTttQkFDWTtBQURaLGVBRUEsTUFGQTttQkFFWTtBQUZaLGVBR0EsTUFIQTttQkFHWTtBQUhaLGVBSUEsTUFKQTttQkFJWTtBQUpaLGVBS0EsTUFMQTttQkFLWTtBQUxaLGVBTUEsTUFOQTttQkFNWTtBQU5aLGVBT0EsTUFQQTttQkFPWTtBQVBaLGVBUUEsTUFSQTttQkFRWTtBQVJaLGVBU0EsTUFUQTttQkFTWTtBQVRaLGVBVUEsTUFWQTttQkFVWTtBQVZaLGVBV0EsTUFYQTttQkFXWSxXQUFXLENBQUMsT0FBWixDQUFvQixZQUFwQixFQUFrQyxJQUFsQztBQVhaLGVBWUEsTUFaQTttQkFZWSxXQUFXLENBQUMsT0FBWixDQUFvQixLQUFwQixFQUEyQixFQUEzQjtBQVpaLGVBYUEsTUFiQTttQkFhWTtBQWJaLGVBY0EsTUFkQTttQkFjWTtBQWRaLGVBZUEsTUFmQTttQkFlWSxXQUFXLENBQUMsT0FBWixDQUFvQixLQUFwQixFQUEyQixFQUEzQjtBQWZaLGVBZ0JBLE1BaEJBO21CQWdCWSxXQUFXLENBQUMsT0FBWixDQUFvQixLQUFwQixFQUEyQixFQUEzQjtBQWhCWjtZQWlCQSxNQUFNLElBQUksS0FBSixDQUFVLHlCQUFWO0FBakJOO01BTGlELENBQXhDLENBQWxCLEVBaENOOztBQXdETSxhQUFPO0lBekRzQjtFQUEvQixFQTlCSjs7O0VBNkZBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQTtNQUFFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDthQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsSUFBQyxDQUFBLEtBQS9CO0lBSHNDLENBQUEsSUFBeEM7OztFQTdGQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtc2Ztb2R1bGVzL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGFza3MgPVxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICByZXF1aXJlX2V4cGFuZF9yZWN1cnNpdmVfa2V5czogLT5cbiAgICAgIFNGTU9EVUxFUyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgIHsgdHlwZV9vZiwgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX3R5cGVfb2YoKVxuICAgICAgeyBleHBhbmRfcmVjdXJzaXZlX2tleXMsICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfZXhwYW5kX3JlY3Vyc2l2ZV9rZXlzKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGVxICggzqlrdnJfX18xID0gLT4gdHlwZV9vZiBleHBhbmRfcmVjdXJzaXZlX2tleXMgKSwgJ2Z1bmN0aW9uJ1xuICAgICAgZG8gPT5cbiAgICAgICAgc3RyaW5ncyA9XG4gICAgICAgICAgJyR7Z3JlZXR9JzogICBcIkhlbGxvICR7d2hvfVwiXG4gICAgICAgICAgJyR7d2hvfSc6ICAgICBcImRlYXIgJHt0YXJnZXR9XCJcbiAgICAgICAgICAnJHt0YXJnZXR9JzogIFwid29ybGRcIlxuICAgICAgICBtYXRjaGVyID1cbiAgICAgICAgICAnJHtncmVldH0nOiAgIFwiSGVsbG8gZGVhciB3b3JsZFwiXG4gICAgICAgICAgJyR7d2hvfSc6ICAgICBcImRlYXIgd29ybGRcIlxuICAgICAgICAgICcke3RhcmdldH0nOiAgXCJ3b3JsZFwiXG4gICAgICAgIHN0cmluZ3NfY29weSAgPSB7IHN0cmluZ3MuLi4sIH1cbiAgICAgICAgZXhwYW5kZWQgICAgICA9IGV4cGFuZF9yZWN1cnNpdmVfa2V5cyBzdHJpbmdzXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cl9fXzIgPSAtPiBzdHJpbmdzICAgICAgICAgICAgICksIHN0cmluZ3NfY29weVxuICAgICAgICBAZXEgICAgICggzqlrdnJfX18zID0gLT4gZXhwYW5kZWQgICAgICAgICAgICApLCBtYXRjaGVyXG4gICAgICAgIEBlcSAgICAgKCDOqWt2cl9fXzQgPSAtPiBleHBhbmRlZCBpcyBzdHJpbmdzICksIGZhbHNlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHN0cmluZ3MgPVxuICAgICAgICAgICcke2dyZWV0fSc6ICAgXCJIZWxsbyAke3dob31cIlxuICAgICAgICAgICcke3dob30nOiAgICAgXCJkZWFyICR7dGFyZ2V0fVwiXG4gICAgICAgICAgJyR7dGFyZ2V0fSc6ICBcIndvcmxkICR7Z3JlZXR9XCJcbiAgICAgICAgc3RyaW5nc19jb3B5ICA9IHsgc3RyaW5ncy4uLiwgfVxuICAgICAgICBAdGhyb3dzICggzqlrdnJfX181ID0gLT4gZXhwYW5kX3JlY3Vyc2l2ZV9rZXlzIHN0cmluZ3MgKSwgL2N5Y2xpYyByZWZlcmVuY2UgZGV0ZWN0ZWQgZm9yIFxcJFxce2dyZWV0XFx9L1xuICAgICAgICBAZXEgICAgICggzqlrdnJfX182ID0gLT4gc3RyaW5ncyAgICAgICAgICAgICAgICAgICAgICAgKSwgc3RyaW5nc19jb3B5XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICBwYXRoID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICAgICAgcmVwbGFjZW1lbnQgPSAnL0QvJ1xuICAgICAgZGVidWcgJ86pa3ZyX19fNycsIFwiYWJjZC9lZmRrbG0vZGdvby9kL3l5XCIucmVwbGFjZUFsbCAnZCcsICggbWF0Y2gsIGluZGV4LCBvcmlnaW5hbCApIC0+XG4gICAgICAgIGNodW5rID0gb3JpZ2luYWxbIGluZGV4IC0gMSAuLiBpbmRleCArIG1hdGNoLmxlbmd0aCBdXG4gICAgICAgICMgZGVidWcgJ86pa3ZyX19fOCcsIHsgbWF0Y2gsIGluZGV4LCBvcmlnaW5hbCB9LCBycHIgY2h1bmtcbiAgICAgICAgbWFya2VyID0gJy5MJ1sgK3JlcGxhY2VtZW50LnN0YXJ0c1dpdGggJy8nIF0gKyAnLlInWyArcmVwbGFjZW1lbnQuZW5kc1dpdGggJy8nIF0gKyAnLkwnWyArY2h1bmsuc3RhcnRzV2l0aCAnLycgXSArICcuUidbICtjaHVuay5lbmRzV2l0aCAnLycgXVxuICAgICAgICBkZWJ1ZyAnzqlrdnJfX183JywgeyBjaHVuaywgcmVwbGFjZW1lbnQsIG1hcmtlciwgfVxuICAgICAgICByZXR1cm4gc3dpdGNoIG1hcmtlclxuICAgICAgICAgIHdoZW4gJy4uLi4nIHRoZW4gcmVwbGFjZW1lbnRcbiAgICAgICAgICB3aGVuICcuLkwuJyB0aGVuIHJlcGxhY2VtZW50XG4gICAgICAgICAgd2hlbiAnLi5MUicgdGhlbiByZXBsYWNlbWVudFxuICAgICAgICAgIHdoZW4gJy4uLlInIHRoZW4gcmVwbGFjZW1lbnRcbiAgICAgICAgICB3aGVuICdMLi4uJyB0aGVuIHJlcGxhY2VtZW50XG4gICAgICAgICAgd2hlbiAnTC5MLicgdGhlbiByZXBsYWNlbWVudFxuICAgICAgICAgIHdoZW4gJ0wuTFInIHRoZW4gcmVwbGFjZW1lbnRcbiAgICAgICAgICB3aGVuICdMLi5SJyB0aGVuIHJlcGxhY2VtZW50XG4gICAgICAgICAgd2hlbiAnTFIuLicgdGhlbiByZXBsYWNlbWVudFxuICAgICAgICAgIHdoZW4gJ0xSTC4nIHRoZW4gcmVwbGFjZW1lbnRcbiAgICAgICAgICB3aGVuICdMUkxSJyB0aGVuIHJlcGxhY2VtZW50LnJlcGxhY2UgL15cXC8oLiopXFwvJC8sICckMSdcbiAgICAgICAgICB3aGVuICdMUi5SJyB0aGVuIHJlcGxhY2VtZW50LnJlcGxhY2UgL1xcLyQvLCAnJ1xuICAgICAgICAgIHdoZW4gJy5SLi4nIHRoZW4gcmVwbGFjZW1lbnRcbiAgICAgICAgICB3aGVuICcuUkwuJyB0aGVuIHJlcGxhY2VtZW50XG4gICAgICAgICAgd2hlbiAnLlJMUicgdGhlbiByZXBsYWNlbWVudC5yZXBsYWNlIC9cXC8kLywgJydcbiAgICAgICAgICB3aGVuICcuUi5SJyB0aGVuIHJlcGxhY2VtZW50LnJlcGxhY2UgL1xcLyQvLCAnJ1xuICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yIFwizqlrdnJfX183IGludGVybmFsIGVycm9yXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQHRhc2tzXG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQHRhc2tzLmJ1aWx0aW5zXG4iXX0=
