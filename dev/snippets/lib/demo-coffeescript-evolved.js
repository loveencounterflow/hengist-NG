(async function() {
  'use strict';
  var CS, GUY, alert, blue, bold, debug, demo_parse, echo, f, gold, help, info, inspect, log, plain, praise, red, reverse, rpr, urge, warn, whisper, white;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, white, red, gold, blue, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  CS = require('../../../apps/coffeescript');

  //===========================================================================================================
  demo_parse = function() {
    var k, source;
    debug('Ωcs___1', (function() {
      var results;
      results = [];
      for (k in CS.helpers) {
        results.push(k);
      }
      return results;
    })());
    help('Ωcs___2', 'VERSION                          ', CS.VERSION);
    help('Ωcs___3', 'FILE_EXTENSIONS                  ', CS.FILE_EXTENSIONS);
    help('Ωcs___4', 'helpers                          ', 'helpers:');
    info('Ωcs___5', '   starts                          ', CS.helpers.starts);
    info('Ωcs___6', '   ends                            ', CS.helpers.ends);
    info('Ωcs___7', '   repeat                          ', CS.helpers.repeat);
    info('Ωcs___8', '   compact                         ', CS.helpers.compact);
    info('Ωcs___9', '   count                           ', CS.helpers.count);
    info('Ωcs__10', '   merge                           ', CS.helpers.merge);
    info('Ωcs__11', '   extend                          ', CS.helpers.extend);
    info('Ωcs__12', '   flatten                         ', CS.helpers.flatten);
    info('Ωcs__13', '   del                             ', CS.helpers.del);
    info('Ωcs__14', '   some                            ', CS.helpers.some);
    info('Ωcs__15', '   invertLiterate                  ', CS.helpers.invertLiterate);
    info('Ωcs__16', '   extractAllCommentTokens         ', CS.helpers.extractAllCommentTokens);
    info('Ωcs__17', '   buildTokenDataDictionary        ', CS.helpers.buildTokenDataDictionary);
    info('Ωcs__18', '   addDataToNode                   ', CS.helpers.addDataToNode);
    info('Ωcs__19', '   attachCommentsToNode            ', CS.helpers.attachCommentsToNode);
    info('Ωcs__20', '   locationDataToString            ', CS.helpers.locationDataToString);
    info('Ωcs__21', '   anonymousFileName               ', CS.helpers.anonymousFileName);
    info('Ωcs__22', '   baseFileName                    ', CS.helpers.baseFileName);
    info('Ωcs__23', '   isCoffee                        ', CS.helpers.isCoffee);
    info('Ωcs__24', '   isLiterate                      ', CS.helpers.isLiterate);
    info('Ωcs__25', '   throwSyntaxError                ', CS.helpers.throwSyntaxError);
    info('Ωcs__26', '   updateSyntaxError               ', CS.helpers.updateSyntaxError);
    info('Ωcs__27', '   nameWhitespaceCharacter         ', CS.helpers.nameWhitespaceCharacter);
    info('Ωcs__28', '   parseNumber                     ', CS.helpers.parseNumber);
    info('Ωcs__29', '   isFunction                      ', CS.helpers.isFunction);
    info('Ωcs__30', '   isNumber                        ', CS.helpers.isNumber);
    info('Ωcs__31', '   isString                        ', CS.helpers.isString);
    info('Ωcs__32', '   isBoolean                       ', CS.helpers.isBoolean);
    info('Ωcs__33', '   isPlainObject                   ', CS.helpers.isPlainObject);
    info('Ωcs__34', '   replaceUnicodeCodePointEscapes  ', CS.helpers.replaceUnicodeCodePointEscapes);
    help('Ωcs__35', 'registerCompiled                 ', CS.registerCompiled);
    help('Ωcs__36', 'compile                          ', CS.compile);
    help('Ωcs__37', 'tokens                           ', CS.tokens);
    help('Ωcs__38', 'nodes                            ', CS.nodes);
    help('Ωcs__39', 'register                         ', CS.register);
    help('Ωcs__40', 'eval                             ', CS.eval);
    help('Ωcs__41', 'run                              ', CS.run);
    help('Ωcs__42', 'patchStackTrace                  ', CS.patchStackTrace);
    help('Ωcs__43', 'transpile                        ', CS.transpile);
    help('Ωcs__44', '_compileRawFileContent           ', CS._compileRawFileContent);
    help('Ωcs__45', '_compileFile                     ', CS._compileFile);
    //.........................................................................................................
    source = "d = t + 1 ==§equals§== 9 ** 5";
    // source = "d = t + 1 ~equals 9 ** 5"
    urge('Ωcs__46', CS.compile(source, {
      bare: true
    }, function({tokens, nodes} = {}) {
      // if tokens?
      //   for token in tokens
      //     info 'Ωcs__47', token
      if (nodes != null) {
        console.log('Ωcs__48', (require('util')).inspect(nodes, false, 2e308, true));
      }
      return null;
    }));
    //.........................................................................................................
    f = function() {
      
      // * run regex on coffee-evolved source, recognize /\b~$JSID\b/,

      // * replace with `==§$JSID§==`

      // * write .coffee, transpile

      // * in JS, this results in parenthesized expression with `=== §$JSID§ && §$JSID§ ===`

      // * find leading paren, substitute $JSID in front of left paren, replace
      //   `=== §$JSID§ && §$JSID§ ===` with comma `,`

      // * OBS: some characters like U+0084 Acute Accent `´`, U+00a7 Section Sign `§` are accepted as parts of
      //   identifiers *by the CoffeeScript compiler*, but **not** by JS, so can safely assume no overlap with
      //   intentional use of such characters is possible

      // * a clean solution will still have to tokenize to recognize comments, string literals, regex literals

      /*
      debug 'Ωcs__49', ( f 1, 2 ) ~equals c
      debug 'Ωcs__50',   f 1, 2   ==§equals§== c    # f(1, (2 === §equals§ && §equals§ === c));
      debug 'Ωcs__51', f 1, ( 2   ==§equals§== c )  # f(1, (2 === §equals§ && §equals§ === c));
      debug 'Ωcs__52', f 1, ( ( c * ( 3 + d - ( g %% 4 ) ) ) ==§equals§== c )  # f(1, ((c * (3 + d - (modulo(g, 4)))) === §equals§ && §equals§ === c));
      debug 'Ωcs__53', ( f 1, 2 ) ==§equals§== c    # ((f(1, 2)) === §equals§ && §equals§ === c);
      debug 'Ωcs__54',  "A#{2   ==§equals§== c}Z"
      a ==§equals§== b                    # Ωcs__55
      if a ==§equals§== b then chucks     # Ωcs__56
      ```if ((a === §equals§ && §equals§ === b)) { chucks; }``` # Ωcs__57
      if equals(a , b) then chucks      # Ωcs__58
      */
      return null;
    };
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // await demo_execa()
      return demo_parse();
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tY29mZmVlc2NyaXB0LWV2b2x2ZWQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTs7RUFFQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHVCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEdBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLEVBU0UsR0FURixDQUFBLEdBUzRCLEdBQUcsQ0FBQyxHQVRoQzs7RUFVQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxFQUFBLEdBQTRCLE9BQUEsQ0FBUSw0QkFBUixFQXZCNUI7OztFQTJCQSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7QUFDYixRQUFBLENBQUEsRUFBQTtJQUFFLEtBQUEsQ0FBTSxTQUFOOztBQUFtQjtNQUFBLEtBQUEsZUFBQTtxQkFBQTtNQUFBLENBQUE7O1FBQW5CO0lBQ0Es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RUFBRSxDQUFDLFlBQXpELEVBNUNGOztJQThDRSxNQUFBLEdBQVMsZ0NBOUNYOztJQWdERSxJQUFBLENBQUssU0FBTCxFQUFnQixFQUFFLENBQUMsT0FBSCxDQUFXLE1BQVgsRUFBbUI7TUFBRSxJQUFBLEVBQU07SUFBUixDQUFuQixFQUFvQyxRQUFBLENBQUMsQ0FBRSxNQUFGLEVBQVUsS0FBVixJQUFtQixDQUFBLENBQXBCLENBQUEsRUFBQTs7OztNQUlsRCxJQUFHLGFBQUg7UUFDRSxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVosRUFBdUIsQ0FBRSxPQUFBLENBQVEsTUFBUixDQUFGLENBQWtCLENBQUMsT0FBbkIsQ0FBMkIsS0FBM0IsRUFBa0MsS0FBbEMsRUFBeUMsS0FBekMsRUFBbUQsSUFBbkQsQ0FBdkIsRUFERjs7QUFFQSxhQUFPO0lBTjJDLENBQXBDLENBQWhCLEVBaERGOztJQXdERSxDQUFBLEdBQUksUUFBQSxDQUFBLENBQUEsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCRixhQUFPO0lBL0JMO0FBZ0NKLFdBQU87RUF6RkksRUEzQmI7OztFQXlIQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7O2FBRXRDLFVBQUEsQ0FBQTtJQUZzQyxDQUFBLElBQXhDOztBQXpIQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdpbnRlcnR5cGUvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgcmVkXG4gIGdvbGRcbiAgYmx1ZVxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5DUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9jb2ZmZWVzY3JpcHQnXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX3BhcnNlID0gLT5cbiAgZGVidWcgJ86pY3NfX18xJywgKCBrIGZvciBrIG9mIENTLmhlbHBlcnMgKVxuICBoZWxwICfOqWNzX19fMicsICdWRVJTSU9OICAgICAgICAgICAgICAgICAgICAgICAgICAnLCAgQ1MuVkVSU0lPTlxuICBoZWxwICfOqWNzX19fMycsICdGSUxFX0VYVEVOU0lPTlMgICAgICAgICAgICAgICAgICAnLCAgQ1MuRklMRV9FWFRFTlNJT05TXG4gIGhlbHAgJ86pY3NfX180JywgJ2hlbHBlcnMgICAgICAgICAgICAgICAgICAgICAgICAgICcsICAnaGVscGVyczonXG4gIGluZm8gJ86pY3NfX181JywgJyAgIHN0YXJ0cyAgICAgICAgICAgICAgICAgICAgICAgICAgJywgQ1MuaGVscGVycy5zdGFydHNcbiAgaW5mbyAnzqljc19fXzYnLCAnICAgZW5kcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLCBDUy5oZWxwZXJzLmVuZHNcbiAgaW5mbyAnzqljc19fXzcnLCAnICAgcmVwZWF0ICAgICAgICAgICAgICAgICAgICAgICAgICAnLCBDUy5oZWxwZXJzLnJlcGVhdFxuICBpbmZvICfOqWNzX19fOCcsICcgICBjb21wYWN0ICAgICAgICAgICAgICAgICAgICAgICAgICcsIENTLmhlbHBlcnMuY29tcGFjdFxuICBpbmZvICfOqWNzX19fOScsICcgICBjb3VudCAgICAgICAgICAgICAgICAgICAgICAgICAgICcsIENTLmhlbHBlcnMuY291bnRcbiAgaW5mbyAnzqljc19fMTAnLCAnICAgbWVyZ2UgICAgICAgICAgICAgICAgICAgICAgICAgICAnLCBDUy5oZWxwZXJzLm1lcmdlXG4gIGluZm8gJ86pY3NfXzExJywgJyAgIGV4dGVuZCAgICAgICAgICAgICAgICAgICAgICAgICAgJywgQ1MuaGVscGVycy5leHRlbmRcbiAgaW5mbyAnzqljc19fMTInLCAnICAgZmxhdHRlbiAgICAgICAgICAgICAgICAgICAgICAgICAnLCBDUy5oZWxwZXJzLmZsYXR0ZW5cbiAgaW5mbyAnzqljc19fMTMnLCAnICAgZGVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLCBDUy5oZWxwZXJzLmRlbFxuICBpbmZvICfOqWNzX18xNCcsICcgICBzb21lICAgICAgICAgICAgICAgICAgICAgICAgICAgICcsIENTLmhlbHBlcnMuc29tZVxuICBpbmZvICfOqWNzX18xNScsICcgICBpbnZlcnRMaXRlcmF0ZSAgICAgICAgICAgICAgICAgICcsIENTLmhlbHBlcnMuaW52ZXJ0TGl0ZXJhdGVcbiAgaW5mbyAnzqljc19fMTYnLCAnICAgZXh0cmFjdEFsbENvbW1lbnRUb2tlbnMgICAgICAgICAnLCBDUy5oZWxwZXJzLmV4dHJhY3RBbGxDb21tZW50VG9rZW5zXG4gIGluZm8gJ86pY3NfXzE3JywgJyAgIGJ1aWxkVG9rZW5EYXRhRGljdGlvbmFyeSAgICAgICAgJywgQ1MuaGVscGVycy5idWlsZFRva2VuRGF0YURpY3Rpb25hcnlcbiAgaW5mbyAnzqljc19fMTgnLCAnICAgYWRkRGF0YVRvTm9kZSAgICAgICAgICAgICAgICAgICAnLCBDUy5oZWxwZXJzLmFkZERhdGFUb05vZGVcbiAgaW5mbyAnzqljc19fMTknLCAnICAgYXR0YWNoQ29tbWVudHNUb05vZGUgICAgICAgICAgICAnLCBDUy5oZWxwZXJzLmF0dGFjaENvbW1lbnRzVG9Ob2RlXG4gIGluZm8gJ86pY3NfXzIwJywgJyAgIGxvY2F0aW9uRGF0YVRvU3RyaW5nICAgICAgICAgICAgJywgQ1MuaGVscGVycy5sb2NhdGlvbkRhdGFUb1N0cmluZ1xuICBpbmZvICfOqWNzX18yMScsICcgICBhbm9ueW1vdXNGaWxlTmFtZSAgICAgICAgICAgICAgICcsIENTLmhlbHBlcnMuYW5vbnltb3VzRmlsZU5hbWVcbiAgaW5mbyAnzqljc19fMjInLCAnICAgYmFzZUZpbGVOYW1lICAgICAgICAgICAgICAgICAgICAnLCBDUy5oZWxwZXJzLmJhc2VGaWxlTmFtZVxuICBpbmZvICfOqWNzX18yMycsICcgICBpc0NvZmZlZSAgICAgICAgICAgICAgICAgICAgICAgICcsIENTLmhlbHBlcnMuaXNDb2ZmZWVcbiAgaW5mbyAnzqljc19fMjQnLCAnICAgaXNMaXRlcmF0ZSAgICAgICAgICAgICAgICAgICAgICAnLCBDUy5oZWxwZXJzLmlzTGl0ZXJhdGVcbiAgaW5mbyAnzqljc19fMjUnLCAnICAgdGhyb3dTeW50YXhFcnJvciAgICAgICAgICAgICAgICAnLCBDUy5oZWxwZXJzLnRocm93U3ludGF4RXJyb3JcbiAgaW5mbyAnzqljc19fMjYnLCAnICAgdXBkYXRlU3ludGF4RXJyb3IgICAgICAgICAgICAgICAnLCBDUy5oZWxwZXJzLnVwZGF0ZVN5bnRheEVycm9yXG4gIGluZm8gJ86pY3NfXzI3JywgJyAgIG5hbWVXaGl0ZXNwYWNlQ2hhcmFjdGVyICAgICAgICAgJywgQ1MuaGVscGVycy5uYW1lV2hpdGVzcGFjZUNoYXJhY3RlclxuICBpbmZvICfOqWNzX18yOCcsICcgICBwYXJzZU51bWJlciAgICAgICAgICAgICAgICAgICAgICcsIENTLmhlbHBlcnMucGFyc2VOdW1iZXJcbiAgaW5mbyAnzqljc19fMjknLCAnICAgaXNGdW5jdGlvbiAgICAgICAgICAgICAgICAgICAgICAnLCBDUy5oZWxwZXJzLmlzRnVuY3Rpb25cbiAgaW5mbyAnzqljc19fMzAnLCAnICAgaXNOdW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAnLCBDUy5oZWxwZXJzLmlzTnVtYmVyXG4gIGluZm8gJ86pY3NfXzMxJywgJyAgIGlzU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgJywgQ1MuaGVscGVycy5pc1N0cmluZ1xuICBpbmZvICfOqWNzX18zMicsICcgICBpc0Jvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgICcsIENTLmhlbHBlcnMuaXNCb29sZWFuXG4gIGluZm8gJ86pY3NfXzMzJywgJyAgIGlzUGxhaW5PYmplY3QgICAgICAgICAgICAgICAgICAgJywgQ1MuaGVscGVycy5pc1BsYWluT2JqZWN0XG4gIGluZm8gJ86pY3NfXzM0JywgJyAgIHJlcGxhY2VVbmljb2RlQ29kZVBvaW50RXNjYXBlcyAgJywgQ1MuaGVscGVycy5yZXBsYWNlVW5pY29kZUNvZGVQb2ludEVzY2FwZXNcbiAgaGVscCAnzqljc19fMzUnLCAncmVnaXN0ZXJDb21waWxlZCAgICAgICAgICAgICAgICAgJywgIENTLnJlZ2lzdGVyQ29tcGlsZWRcbiAgaGVscCAnzqljc19fMzYnLCAnY29tcGlsZSAgICAgICAgICAgICAgICAgICAgICAgICAgJywgIENTLmNvbXBpbGVcbiAgaGVscCAnzqljc19fMzcnLCAndG9rZW5zICAgICAgICAgICAgICAgICAgICAgICAgICAgJywgIENTLnRva2Vuc1xuICBoZWxwICfOqWNzX18zOCcsICdub2RlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLCAgQ1Mubm9kZXNcbiAgaGVscCAnzqljc19fMzknLCAncmVnaXN0ZXIgICAgICAgICAgICAgICAgICAgICAgICAgJywgIENTLnJlZ2lzdGVyXG4gIGhlbHAgJ86pY3NfXzQwJywgJ2V2YWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcsICBDUy5ldmFsXG4gIGhlbHAgJ86pY3NfXzQxJywgJ3J1biAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcsICBDUy5ydW5cbiAgaGVscCAnzqljc19fNDInLCAncGF0Y2hTdGFja1RyYWNlICAgICAgICAgICAgICAgICAgJywgIENTLnBhdGNoU3RhY2tUcmFjZVxuICBoZWxwICfOqWNzX180MycsICd0cmFuc3BpbGUgICAgICAgICAgICAgICAgICAgICAgICAnLCAgQ1MudHJhbnNwaWxlXG4gIGhlbHAgJ86pY3NfXzQ0JywgJ19jb21waWxlUmF3RmlsZUNvbnRlbnQgICAgICAgICAgICcsICBDUy5fY29tcGlsZVJhd0ZpbGVDb250ZW50XG4gIGhlbHAgJ86pY3NfXzQ1JywgJ19jb21waWxlRmlsZSAgICAgICAgICAgICAgICAgICAgICcsICBDUy5fY29tcGlsZUZpbGVcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBzb3VyY2UgPSBcImQgPSB0ICsgMSA9PcKnZXF1YWxzwqc9PSA5ICoqIDVcIlxuICAjIHNvdXJjZSA9IFwiZCA9IHQgKyAxIH5lcXVhbHMgOSAqKiA1XCJcbiAgdXJnZSAnzqljc19fNDYnLCBDUy5jb21waWxlIHNvdXJjZSwgeyBiYXJlOiB0cnVlLCB9LCAoeyB0b2tlbnMsIG5vZGVzLCB9PXt9KSAtPlxuICAgICMgaWYgdG9rZW5zP1xuICAgICMgICBmb3IgdG9rZW4gaW4gdG9rZW5zXG4gICAgIyAgICAgaW5mbyAnzqljc19fNDcnLCB0b2tlblxuICAgIGlmIG5vZGVzP1xuICAgICAgY29uc29sZS5sb2cgJ86pY3NfXzQ4JywgKCByZXF1aXJlICd1dGlsJyApLmluc3BlY3Qgbm9kZXMsIGZhbHNlLCBJbmZpbml0eSwgdHJ1ZVxuICAgIHJldHVybiBudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZiA9IC0+XG4gICAgI1xuICAgICMgKiBydW4gcmVnZXggb24gY29mZmVlLWV2b2x2ZWQgc291cmNlLCByZWNvZ25pemUgL1xcYn4kSlNJRFxcYi8sXG4gICAgI1xuICAgICMgKiByZXBsYWNlIHdpdGggYD09wqckSlNJRMKnPT1gXG4gICAgI1xuICAgICMgKiB3cml0ZSAuY29mZmVlLCB0cmFuc3BpbGVcbiAgICAjXG4gICAgIyAqIGluIEpTLCB0aGlzIHJlc3VsdHMgaW4gcGFyZW50aGVzaXplZCBleHByZXNzaW9uIHdpdGggYD09PSDCpyRKU0lEwqcgJiYgwqckSlNJRMKnID09PWBcbiAgICAjXG4gICAgIyAqIGZpbmQgbGVhZGluZyBwYXJlbiwgc3Vic3RpdHV0ZSAkSlNJRCBpbiBmcm9udCBvZiBsZWZ0IHBhcmVuLCByZXBsYWNlXG4gICAgIyAgIGA9PT0gwqckSlNJRMKnICYmIMKnJEpTSUTCpyA9PT1gIHdpdGggY29tbWEgYCxgXG4gICAgI1xuICAgICMgKiBPQlM6IHNvbWUgY2hhcmFjdGVycyBsaWtlIFUrMDA4NCBBY3V0ZSBBY2NlbnQgYMK0YCwgVSswMGE3IFNlY3Rpb24gU2lnbiBgwqdgIGFyZSBhY2NlcHRlZCBhcyBwYXJ0cyBvZlxuICAgICMgICBpZGVudGlmaWVycyAqYnkgdGhlIENvZmZlZVNjcmlwdCBjb21waWxlciosIGJ1dCAqKm5vdCoqIGJ5IEpTLCBzbyBjYW4gc2FmZWx5IGFzc3VtZSBubyBvdmVybGFwIHdpdGhcbiAgICAjICAgaW50ZW50aW9uYWwgdXNlIG9mIHN1Y2ggY2hhcmFjdGVycyBpcyBwb3NzaWJsZVxuICAgICNcbiAgICAjICogYSBjbGVhbiBzb2x1dGlvbiB3aWxsIHN0aWxsIGhhdmUgdG8gdG9rZW5pemUgdG8gcmVjb2duaXplIGNvbW1lbnRzLCBzdHJpbmcgbGl0ZXJhbHMsIHJlZ2V4IGxpdGVyYWxzXG4gICAgI1xuICAgICMjI1xuICAgIGRlYnVnICfOqWNzX180OScsICggZiAxLCAyICkgfmVxdWFscyBjXG4gICAgZGVidWcgJ86pY3NfXzUwJywgICBmIDEsIDIgICA9PcKnZXF1YWxzwqc9PSBjICAgICMgZigxLCAoMiA9PT0gwqdlcXVhbHPCpyAmJiDCp2VxdWFsc8KnID09PSBjKSk7XG4gICAgZGVidWcgJ86pY3NfXzUxJywgZiAxLCAoIDIgICA9PcKnZXF1YWxzwqc9PSBjICkgICMgZigxLCAoMiA9PT0gwqdlcXVhbHPCpyAmJiDCp2VxdWFsc8KnID09PSBjKSk7XG4gICAgZGVidWcgJ86pY3NfXzUyJywgZiAxLCAoICggYyAqICggMyArIGQgLSAoIGcgJSUgNCApICkgKSA9PcKnZXF1YWxzwqc9PSBjICkgICMgZigxLCAoKGMgKiAoMyArIGQgLSAobW9kdWxvKGcsIDQpKSkpID09PSDCp2VxdWFsc8KnICYmIMKnZXF1YWxzwqcgPT09IGMpKTtcbiAgICBkZWJ1ZyAnzqljc19fNTMnLCAoIGYgMSwgMiApID09wqdlcXVhbHPCpz09IGMgICAgIyAoKGYoMSwgMikpID09PSDCp2VxdWFsc8KnICYmIMKnZXF1YWxzwqcgPT09IGMpO1xuICAgIGRlYnVnICfOqWNzX181NCcsICBcIkEjezIgICA9PcKnZXF1YWxzwqc9PSBjfVpcIlxuICAgIGEgPT3Cp2VxdWFsc8KnPT0gYiAgICAgICAgICAgICAgICAgICAgIyDOqWNzX181NVxuICAgIGlmIGEgPT3Cp2VxdWFsc8KnPT0gYiB0aGVuIGNodWNrcyAgICAgIyDOqWNzX181NlxuICAgIGBgYGlmICgoYSA9PT0gwqdlcXVhbHPCpyAmJiDCp2VxdWFsc8KnID09PSBiKSkgeyBjaHVja3M7IH1gYGAgIyDOqWNzX181N1xuICAgIGlmIGVxdWFscyhhICwgYikgdGhlbiBjaHVja3MgICAgICAjIM6pY3NfXzU4XG4gICAgIyMjXG4gICAgcmV0dXJuIG51bGxcbiAgcmV0dXJuIG51bGxcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgYXdhaXQgZGVtb19leGVjYSgpXG4gIGRlbW9fcGFyc2UoKVxuXG5cblxuXG5cbiJdfQ==
//# sourceURL=../src/demo-coffeescript-evolved.coffee