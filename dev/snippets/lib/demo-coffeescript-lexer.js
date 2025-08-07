(async function() {
  'use strict';
  var GUY, alert, blue, bold, debug, demo_1, echo, f, gold, help, info, inspect, log, plain, praise, red, reverse, rpr, urge, warn, whisper, white,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, white, red, gold, blue, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  //-----------------------------------------------------------------------------------------------------------
  demo_1 = function() {
    var Grammar, ILX, Level, Lexeme, SLR, Token, cs, data, error, gnd, hit, indentation_cast, indentation_re, internals, jsid_re, other_cast, other_re, quote11_lit, rol_comment, rx, source, tilde_jsid_re, token;
    ILX = require('../../../apps/interlex');
    ({Grammar, Level, Token, Lexeme, rx, internals} = ILX);
    SLR = internals.slevithan_regex;
    jsid_re = SLR.regex` [ $ _ \p{ID_Start} ] [ $ _ \u200C \u200D \p{ID_Continue} ]* `;
    tilde_jsid_re = SLR.regex` ~ ${jsid_re} `;
    //.........................................................................................................
    cs = new Grammar({
      emit_signals: true,
      supply_eol: true
    });
    gnd = cs.new_level({
      name: 'gnd'
    });
    quote11_lit = cs.new_level({
      name: 'quote11_lit'
    });
    rol_comment = cs.new_level({
      name: 'rol_comment'
    });
    error = cs.new_level({
      name: 'error'
    });
    //.........................................................................................................
    indentation_re = /(?<=\n)\x20+/;
    indentation_cast = function*({hit, start, source, data, new_lexeme, lexeme}) {
      if ((modulo(hit.length, 2)) === 0) {
        data.length = hit.length;
        data.depth = hit.length / 2;
        yield lexeme;
      } else {
        yield new_lexeme('error.odd_indentation', start, source, {
          length: hit.length
        });
      }
      // yield lexeme
      return null;
    };
    //.........................................................................................................
    other_re = /./;
    other_cast = function*({hit, start, source, new_lexeme, lexeme}) {
      yield new_lexeme('error.illegal', start, source); //, { length: hit.length, }
      // yield lexeme
      return null;
    };
    //.........................................................................................................
    gnd.new_token('if', 'if');
    gnd.new_token('then', 'then');
    gnd.new_token('else', 'else');
    gnd.new_token('x_tildeidentifier', tilde_jsid_re);
    gnd.new_token('identifier', jsid_re);
    gnd.new_token('slimarrow', '->');
    gnd.new_token('fatarrow', '=>');
    gnd.new_token('x_slimarrow', '<->');
    gnd.new_token('x_fatarrow', '<=>');
    gnd.new_token('at', '@');
    gnd.new_token('nl', '\n');
    gnd.new_token('equals', '=');
    gnd.new_token('minus', '-');
    gnd.new_token('plus', '+');
    gnd.new_token('power', '**');
    gnd.new_token('times', '*');
    gnd.new_token('comma', ',');
    gnd.new_token('semicolon', ';');
    gnd.new_token('hash', '#', {
      jump: 'rol_comment!'
    });
    gnd.new_token('openparen', '(');
    gnd.new_token('closeparen', ')');
    gnd.new_token('openbracket', '[');
    gnd.new_token('closebracket', ']');
    gnd.new_token('opencurly', '{');
    gnd.new_token('closecurly', '}');
    gnd.new_token('x_return', '<-');
    gnd.new_token('indentation', indentation_re, {
      cast: indentation_cast
    });
    gnd.new_token('quote13', "'''");
    gnd.new_token('quote11', "'", {
      jump: 'quote11_lit!'
    });
    gnd.new_token('quote23', '"""');
    gnd.new_token('quote21', '"');
    gnd.new_token('digits', /[0-9]/, {
      merge: true
    });
    gnd.new_token('dot', '.');
    gnd.new_token('ws', /(?<!\n)\s+/);
    gnd.new_token('other', other_re, {
      cast: other_cast,
      merge: true
    });
    // gnd.new_token 'other',              /// [^ \x00-\/ :-\@ ] ///, { merge: true, }
    // gnd.new_token 'other',              /// . ///, { error: true, merge: true, }
    //.........................................................................................................
    quote11_lit.new_token('quote11', "'", {
      jump: '..'
    });
    quote11_lit.new_token('literal', /[^']+/);
    //.........................................................................................................
    rol_comment.new_token('literal', /[^\n]+/);
    rol_comment.new_token('nl', '\n', {
      jump: '..!'
    });
    //.........................................................................................................
    error.new_token('illegal', other_re, {
      merge: true
    });
    error.new_token('odd_indentation', indentation_re);
    //.........................................................................................................
    source = "f = ( arc, bo ) -> '(' + arc + ', ' + bo + ')'; g = => # comment";
    source = "f = ->\n  @some_method humm # comment\n  @other_method()";
    source = "f = ->\n  @some_method humm, '\n' # comment\n   @other_method()";
    source = "d.f = ( arc, bo ) ->\n  <- arc * bo\ncube = ( x ) <=> x ** 3.00";
    source = "x = 45 ~mul 31; ??? z = 0 if x ~equals y; id = 'x-96'";
//.........................................................................................................
    for (token of cs.scan(source)) {
      if (token.fqname === 'gnd.ws') {
        continue;
      }
      data = (data != null) && (Object.keys(token.data)).length > 0 ? rpr({...token.data}) : '';
      hit = token.hit === '' ? '' : reverse(bold((rpr(token.hit)).replace(/^['"](.*)['"]$/gsv, '$1')));
      if (token.is_error) {
        warn('Ω___1', f`${white(token.fqname)}:<40c; | ${red(reverse(bold(hit)))}:<70c; | ${blue(data)}`);
      } else {
        help('Ω___2', f`${white(token.fqname)}:<40c; | ${gold(hit)}:<70c; | ${blue(data)}`);
      }
    }
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      return demo_1();
    })();
  }

  // re      = /// (?<= a ) b ///y
// source  = '01b3ab6'
// for idx in [ 0 .. 7 ]
//   re.lastIndex = idx; debug 'Ω___3', idx, ( rpr source[ idx ... ] ), source.match re

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tY29mZmVlc2NyaXB0LWxleGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO0lBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQix1QkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxHQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixFQVNFLEdBVEYsQ0FBQSxHQVM0QixHQUFHLENBQUMsR0FUaEM7O0VBVUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF0QkE7OztFQXlCQSxNQUFBLEdBQVMsUUFBQSxDQUFBLENBQUE7QUFDVCxRQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLEVBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsZ0JBQUEs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QUEsS0FBSyxDQUFDLElBQVIsQ0FBSixDQUF4RCxHQUFvRjtNQUM1RixHQUFBLEdBQVcsS0FBSyxDQUFDLEdBQU4sS0FBYSxFQUFoQixHQUF3QixFQUF4QixHQUFnQyxPQUFBLENBQVEsSUFBQSxDQUFLLENBQUUsR0FBQSxDQUFJLEtBQUssQ0FBQyxHQUFWLENBQUYsQ0FBaUIsQ0FBQyxPQUFsQixDQUEwQixtQkFBMUIsRUFBK0MsSUFBL0MsQ0FBTCxDQUFSO01BQ3hDLElBQUcsS0FBSyxDQUFDLFFBQVQ7UUFDRSxJQUFBLENBQUssT0FBTCxFQUFjLENBQUMsQ0FBQSxDQUFBLENBQUcsS0FBQSxDQUFNLEtBQUssQ0FBQyxNQUFaLENBQUgsQ0FBQSxTQUFBLENBQUEsQ0FBaUMsR0FBQSxDQUFJLE9BQUEsQ0FBUSxJQUFBLENBQUssR0FBTCxDQUFSLENBQUosQ0FBakMsQ0FBQSxTQUFBLENBQUEsQ0FBaUUsSUFBQSxDQUFLLElBQUwsQ0FBakUsQ0FBQSxDQUFmLEVBREY7T0FBQSxNQUFBO1FBR0UsSUFBQSxDQUFLLE9BQUwsRUFBYyxDQUFDLENBQUEsQ0FBQSxDQUFHLEtBQUEsQ0FBTSxLQUFLLENBQUMsTUFBWixDQUFILENBQUEsU0FBQSxDQUFBLENBQWlDLElBQUEsQ0FBSyxHQUFMLENBQWpDLENBQUEsU0FBQSxDQUFBLENBQXFELElBQUEsQ0FBSyxJQUFMLENBQXJELENBQUEsQ0FBZixFQUhGOztJQUpGO0FBUUEsV0FBTztFQWhHQSxFQXpCVDs7O0VBZ0lBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7YUFDdEMsTUFBQSxDQUFBO0lBRHNDLENBQUEsSUFBeEM7OztFQWhJQTs7OztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2ludGVydHlwZS90ZXN0LWJhc2ljcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICByZWRcbiAgZ29sZFxuICBibHVlXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5kZW1vXzEgPSAtPlxuICBJTFggICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgeyBHcmFtbWFyXG4gICAgTGV2ZWxcbiAgICBUb2tlblxuICAgIExleGVtZVxuICAgIHJ4XG4gICAgaW50ZXJuYWxzICAgICAgIH0gPSBJTFhcbiAgU0xSICAgICAgICAgICAgICAgICA9IGludGVybmFscy5zbGV2aXRoYW5fcmVnZXhcbiAganNpZF9yZSAgICAgICAgICAgICA9IFNMUi5yZWdleFwiXCJcIiBbICQgXyBcXHB7SURfU3RhcnR9IF0gWyAkIF8gXFx1MjAwQyBcXHUyMDBEIFxccHtJRF9Db250aW51ZX0gXSogXCJcIlwiXG4gIHRpbGRlX2pzaWRfcmUgICAgICAgPSBTTFIucmVnZXhcIlwiXCIgfiAje2pzaWRfcmV9IFwiXCJcIlxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGNzICAgICAgICAgID0gbmV3IEdyYW1tYXIgeyBlbWl0X3NpZ25hbHM6IHRydWUsIHN1cHBseV9lb2w6IHRydWUsIH1cbiAgZ25kICAgICAgICAgPSBjcy5uZXdfbGV2ZWwgeyBuYW1lOiAnZ25kJywgfVxuICBxdW90ZTExX2xpdCA9IGNzLm5ld19sZXZlbCB7IG5hbWU6ICdxdW90ZTExX2xpdCcsIH1cbiAgcm9sX2NvbW1lbnQgPSBjcy5uZXdfbGV2ZWwgeyBuYW1lOiAncm9sX2NvbW1lbnQnLCB9XG4gIGVycm9yICAgICAgID0gY3MubmV3X2xldmVsIHsgbmFtZTogJ2Vycm9yJywgfVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGluZGVudGF0aW9uX3JlICAgID0gLy8vICg/PD0gXFxuICkgXFx4MjArIC8vL1xuICBpbmRlbnRhdGlvbl9jYXN0ICA9ICh7IGhpdCwgc3RhcnQsIHNvdXJjZSwgZGF0YSwgbmV3X2xleGVtZSwgbGV4ZW1lLCB9KSAtPlxuICAgIGlmICggaGl0Lmxlbmd0aCAlJSAyICkgaXMgMFxuICAgICAgZGF0YS5sZW5ndGggPSBoaXQubGVuZ3RoXG4gICAgICBkYXRhLmRlcHRoICA9IGhpdC5sZW5ndGggLyAyXG4gICAgICB5aWVsZCBsZXhlbWVcbiAgICBlbHNlXG4gICAgICB5aWVsZCBuZXdfbGV4ZW1lICdlcnJvci5vZGRfaW5kZW50YXRpb24nLCBzdGFydCwgc291cmNlLCB7IGxlbmd0aDogaGl0Lmxlbmd0aCwgfVxuICAgICAgIyB5aWVsZCBsZXhlbWVcbiAgICByZXR1cm4gbnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIG90aGVyX3JlICAgID0gLy4vXG4gIG90aGVyX2Nhc3QgID0gKHsgaGl0LCBzdGFydCwgc291cmNlLCBuZXdfbGV4ZW1lLCBsZXhlbWUsIH0pIC0+XG4gICAgeWllbGQgbmV3X2xleGVtZSAnZXJyb3IuaWxsZWdhbCcsIHN0YXJ0LCBzb3VyY2UgIywgeyBsZW5ndGg6IGhpdC5sZW5ndGgsIH1cbiAgICAgICMgeWllbGQgbGV4ZW1lXG4gICAgcmV0dXJuIG51bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBnbmQubmV3X3Rva2VuICdpZicsICAgICAgICAgICAgICAgICAnaWYnXG4gIGduZC5uZXdfdG9rZW4gJ3RoZW4nLCAgICAgICAgICAgICAgICd0aGVuJ1xuICBnbmQubmV3X3Rva2VuICdlbHNlJywgICAgICAgICAgICAgICAnZWxzZSdcbiAgZ25kLm5ld190b2tlbiAneF90aWxkZWlkZW50aWZpZXInLCAgdGlsZGVfanNpZF9yZVxuICBnbmQubmV3X3Rva2VuICdpZGVudGlmaWVyJywgICAgICAgICBqc2lkX3JlXG4gIGduZC5uZXdfdG9rZW4gJ3NsaW1hcnJvdycsICAgICAgICAgICctPidcbiAgZ25kLm5ld190b2tlbiAnZmF0YXJyb3cnLCAgICAgICAgICAgJz0+J1xuICBnbmQubmV3X3Rva2VuICd4X3NsaW1hcnJvdycsICAgICAgICAnPC0+J1xuICBnbmQubmV3X3Rva2VuICd4X2ZhdGFycm93JywgICAgICAgICAnPD0+J1xuICBnbmQubmV3X3Rva2VuICdhdCcsICAgICAgICAgICAgICAgICAnQCdcbiAgZ25kLm5ld190b2tlbiAnbmwnLCAgICAgICAgICAgICAgICAgJ1xcbidcbiAgZ25kLm5ld190b2tlbiAnZXF1YWxzJywgICAgICAgICAgICAgJz0nXG4gIGduZC5uZXdfdG9rZW4gJ21pbnVzJywgICAgICAgICAgICAgICctJ1xuICBnbmQubmV3X3Rva2VuICdwbHVzJywgICAgICAgICAgICAgICAnKydcbiAgZ25kLm5ld190b2tlbiAncG93ZXInLCAgICAgICAgICAgICAgJyoqJ1xuICBnbmQubmV3X3Rva2VuICd0aW1lcycsICAgICAgICAgICAgICAnKidcbiAgZ25kLm5ld190b2tlbiAnY29tbWEnLCAgICAgICAgICAgICAgJywnXG4gIGduZC5uZXdfdG9rZW4gJ3NlbWljb2xvbicsICAgICAgICAgICc7J1xuICBnbmQubmV3X3Rva2VuICdoYXNoJywgICAgICAgICAgICAgICAnIycsIHsganVtcDogJ3JvbF9jb21tZW50IScsIH1cbiAgZ25kLm5ld190b2tlbiAnb3BlbnBhcmVuJywgICAgICAgICAgJygnXG4gIGduZC5uZXdfdG9rZW4gJ2Nsb3NlcGFyZW4nLCAgICAgICAgICcpJ1xuICBnbmQubmV3X3Rva2VuICdvcGVuYnJhY2tldCcsICAgICAgICAnWydcbiAgZ25kLm5ld190b2tlbiAnY2xvc2VicmFja2V0JywgICAgICAgJ10nXG4gIGduZC5uZXdfdG9rZW4gJ29wZW5jdXJseScsICAgICAgICAgICd7J1xuICBnbmQubmV3X3Rva2VuICdjbG9zZWN1cmx5JywgICAgICAgICAnfSdcbiAgZ25kLm5ld190b2tlbiAneF9yZXR1cm4nLCAgICAgICAgICAgJzwtJ1xuICBnbmQubmV3X3Rva2VuICdpbmRlbnRhdGlvbicsICAgICAgICBpbmRlbnRhdGlvbl9yZSwgeyBjYXN0OiBpbmRlbnRhdGlvbl9jYXN0LCB9XG4gIGduZC5uZXdfdG9rZW4gJ3F1b3RlMTMnLCAgICAgICAgICAgIFwiJycnXCJcbiAgZ25kLm5ld190b2tlbiAncXVvdGUxMScsICAgICAgICAgICAgXCInXCIsIHsganVtcDogJ3F1b3RlMTFfbGl0IScsIH1cbiAgZ25kLm5ld190b2tlbiAncXVvdGUyMycsICAgICAgICAgICAgJ1wiXCJcIidcbiAgZ25kLm5ld190b2tlbiAncXVvdGUyMScsICAgICAgICAgICAgJ1wiJ1xuICBnbmQubmV3X3Rva2VuICdkaWdpdHMnLCAgICAgICAgICAgICAvLy8gWyAwLTkgXSAvLy8sIHsgbWVyZ2U6IHRydWUsIH1cbiAgZ25kLm5ld190b2tlbiAnZG90JywgICAgICAgICAgICAgICAgJy4nXG4gIGduZC5uZXdfdG9rZW4gJ3dzJywgICAgICAgICAgICAgICAgIC8vLyAoPzwhIFxcbiApIFxccysgLy8vXG4gIGduZC5uZXdfdG9rZW4gJ290aGVyJywgICAgICAgICAgICAgIG90aGVyX3JlLCB7IGNhc3Q6IG90aGVyX2Nhc3QsIG1lcmdlOiB0cnVlLCB9XG4gICMgZ25kLm5ld190b2tlbiAnb3RoZXInLCAgICAgICAgICAgICAgLy8vIFteIFxceDAwLVxcLyA6LVxcQCBdIC8vLywgeyBtZXJnZTogdHJ1ZSwgfVxuICAjIGduZC5uZXdfdG9rZW4gJ290aGVyJywgICAgICAgICAgICAgIC8vLyAuIC8vLywgeyBlcnJvcjogdHJ1ZSwgbWVyZ2U6IHRydWUsIH1cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBxdW90ZTExX2xpdC5uZXdfdG9rZW4gJ3F1b3RlMTEnLCAgXCInXCIsIHsganVtcDogJy4uJywgfVxuICBxdW90ZTExX2xpdC5uZXdfdG9rZW4gJ2xpdGVyYWwnLCAgLy8vIFteICcgXSsgLy8vXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgcm9sX2NvbW1lbnQubmV3X3Rva2VuICdsaXRlcmFsJywgIC8vLyBbXiBcXG4gXSsgLy8vXG4gIHJvbF9jb21tZW50Lm5ld190b2tlbiAnbmwnLCAgICAgICAnXFxuJywgeyBqdW1wOiAnLi4hJywgfVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGVycm9yLm5ld190b2tlbiAgICAgICAnaWxsZWdhbCcsICAgICAgICAgIG90aGVyX3JlLCB7IG1lcmdlOiB0cnVlLCB9XG4gIGVycm9yLm5ld190b2tlbiAgICAgICAnb2RkX2luZGVudGF0aW9uJywgIGluZGVudGF0aW9uX3JlXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgc291cmNlID0gXCJmID0gKCBhcmMsIGJvICkgLT4gJygnICsgYXJjICsgJywgJyArIGJvICsgJyknOyBnID0gPT4gIyBjb21tZW50XCJcbiAgc291cmNlID0gXCJmID0gLT5cXG4gIEBzb21lX21ldGhvZCBodW1tICMgY29tbWVudFxcbiAgQG90aGVyX21ldGhvZCgpXCJcbiAgc291cmNlID0gXCJmID0gLT5cXG4gIEBzb21lX21ldGhvZCBodW1tLCAnXFxuJyAjIGNvbW1lbnRcXG4gICBAb3RoZXJfbWV0aG9kKClcIlxuICBzb3VyY2UgPSBcImQuZiA9ICggYXJjLCBibyApIC0+XFxuICA8LSBhcmMgKiBib1xcbmN1YmUgPSAoIHggKSA8PT4geCAqKiAzLjAwXCJcbiAgc291cmNlID0gXCJ4ID0gNDUgfm11bCAzMTsgPz8/IHogPSAwIGlmIHggfmVxdWFscyB5OyBpZCA9ICd4LTk2J1wiXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZm9yIHRva2VuIGZyb20gY3Muc2NhbiBzb3VyY2VcbiAgICBjb250aW51ZSBpZiB0b2tlbi5mcW5hbWUgaXMgJ2duZC53cydcbiAgICBkYXRhICA9IGlmIGRhdGE/IGFuZCAoIE9iamVjdC5rZXlzIHRva2VuLmRhdGEgKS5sZW5ndGggPiAwIHRoZW4gcnByIHsgdG9rZW4uZGF0YS4uLiwgfSBlbHNlICcnXG4gICAgaGl0ICAgPSBpZiB0b2tlbi5oaXQgaXMgJycgdGhlbiAnJyBlbHNlIHJldmVyc2UgYm9sZCAoIHJwciB0b2tlbi5oaXQgKS5yZXBsYWNlIC9eWydcIl0oLiopWydcIl0kL2dzdiwgJyQxJ1xuICAgIGlmIHRva2VuLmlzX2Vycm9yXG4gICAgICB3YXJuICfOqV9fXzEnLCBmXCIje3doaXRlIHRva2VuLmZxbmFtZX06PDQwYzsgfCAje3JlZCByZXZlcnNlIGJvbGQgaGl0fTo8NzBjOyB8ICN7Ymx1ZSBkYXRhfVwiXG4gICAgZWxzZVxuICAgICAgaGVscCAnzqlfX18yJywgZlwiI3t3aGl0ZSB0b2tlbi5mcW5hbWV9Ojw0MGM7IHwgI3tnb2xkIGhpdH06PDcwYzsgfCAje2JsdWUgZGF0YX1cIlxuICByZXR1cm4gbnVsbFxuXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGRlbW9fMSgpXG4gICMgcmUgICAgICA9IC8vLyAoPzw9IGEgKSBiIC8vL3lcbiAgIyBzb3VyY2UgID0gJzAxYjNhYjYnXG4gICMgZm9yIGlkeCBpbiBbIDAgLi4gNyBdXG4gICMgICByZS5sYXN0SW5kZXggPSBpZHg7IGRlYnVnICfOqV9fXzMnLCBpZHgsICggcnByIHNvdXJjZVsgaWR4IC4uLiBdICksIHNvdXJjZS5tYXRjaCByZVxuIl19
//# sourceURL=../src/demo-coffeescript-lexer.coffee