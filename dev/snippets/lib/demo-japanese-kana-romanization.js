(async function() {
  'use strict';
  var GUY, alert, blue, bold, debug, demo_pkg_jaco, demo_pkg_wanakana, echo, f, gold, help, info, inspect, log, plain, praise, red, reverse, rpr, urge, warn, whisper, white;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, white, red, gold, blue, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // #-----------------------------------------------------------------------------------------------------------
  // demo_pkg_japanese = ->
  //   debug 'Ωdjkr___1', require 'japanese'
  //   ;null

  //-----------------------------------------------------------------------------------------------------------
  demo_pkg_wanakana = function() {
    /*
    Name                 | Type                                  | Attributes | Default   | Description

    useObsoleteKana      | Boolean                               | <optional> | false     | Set to true to use obsolete characters, such as ゐ and ゑ.
    passRomaji           | Boolean                               | <optional> | false     | Set to true to pass romaji when using mixed syllabaries with toKatakana() or toHiragana()
    convertLongVowelMark | Boolean                               | <optional> | true      | Set to false to prevent conversions of 'ー' to extended vowels with toHiragana()
    upcaseKatakana       | Boolean                               | <optional> | false     | Set to true to convert katakana to uppercase using toRomaji()
    IMEMode              | Boolean | 'toHiragana' | 'toKatakana' | <optional> | false     | Set to true, 'toHiragana', or 'toKatakana' to handle conversion while it is being typed.
    romanization         | 'hepburn'                             | <optional> | 'hepburn' | choose toRomaji() romanization map (currently only 'hepburn')
    customKanaMapping    | Object.<String, String>               | <optional> |           | custom map will be merged with default conversion
    customRomajiMapping  | Object.<String, String>               | <optional> |           | custom map will be merged with default conversion
    */
    var toHiragana, toKana, toKatakana, toRomaji, tokenize;
    ({toHiragana, toKana, toKatakana, toRomaji, tokenize} = require('wanakana'));
    help('Ωdjkr___2', toHiragana('ラーメン', {
      convertLongVowelMark: false
    }));
    help('Ωdjkr___3', toHiragana('ラーメン', {
      convertLongVowelMark: true
    }));
    help('Ωdjkr___4', toKana('wanakana', {
      customKanaMapping: {
        na: 'に',
        ka: 'Bana'
      }
    }));
    help('Ωdjkr___5', toKana('wanakana', {
      customKanaMapping: {
        waka: '(和歌)',
        wa: '(和2)',
        ka: '(歌2)',
        na: '(名)',
        ka: '(Bana)',
        naka: '(中)'
      }
    }));
    help('Ωdjkr___6', toRomaji('つじぎり', {
      customRomajiMapping: {
        じ: '(zi)',
        つ: '(tu)',
        り: '(li)',
        りょう: '(ryou)',
        りょ: '(ryo)'
      }
    }));
    help('Ωdjkr___7', toRomaji('つじぎりょ', {
      customRomajiMapping: {
        じ: '(zi)',
        つ: '(tu)',
        り: '(li)',
        りょう: '(ryou)',
        りょ: '(ryo)'
      }
    }));
    help('Ωdjkr___8', toRomaji('つじぎりょう', {
      customRomajiMapping: {
        じ: '(zi)',
        つ: '(tu)',
        り: '(li)',
        りょう: '(ryou)',
        りょ: '(ryo)'
      }
    }));
    help('Ωdjkr___9', toRomaji('つじぎりょう', {
      customRomajiMapping: {
        じ: '(zi)',
        つ: '(tu)',
        り: '(li)'
      }
    }));
    help('Ωdjkr__10', toKatakana('つじぎりょう', {
      customKanaMapping: {
        つじ: '(辻1)',
        ツジ: '(辻2)'
      }
    }));
    help('Ωdjkr__11', tokenize('つじぎりょう', {
      detailed: true
    }));
    help('Ωdjkr__12', tokenize('つじラーメン', {
      detailed: true
    }));
    help('Ωdjkr__13', toKatakana('ぎり,ラーメン,𪜈', {
      customKanaMapping: {
        𪜈: '(とも)',
        つじ: '(辻1)',
        ツジ: '(辻2)'
      }
    }));
    help('Ωdjkr__14', toHiragana('ぎり,ラーメン,𪜈', {
      customKanaMapping: {
        𪜈: '(とも)',
        つじ: '(辻1)',
        ツジ: '(辻2)'
      }
    }));
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  demo_pkg_jaco = function() {
    // debug 'Ωdjkr__15', require 'jaco'
    null;
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // demo_pkg_japanese()
      return demo_pkg_wanakana();
    })();
  }

  // demo_pkg_jaco()
// re      = /// (?<= a ) b ///y
// source  = '01b3ab6'
// for idx in [ 0 .. 7 ]
//   re.lastIndex = idx; debug 'Ω__16', idx, ( rpr source[ idx ... ] ), source.match re

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tamFwYW5lc2Uta2FuYS1yb21hbml6YXRpb24uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsYUFBQSxFQUFBLGlCQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQix1QkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxHQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixFQVNFLEdBVEYsQ0FBQSxHQVM0QixHQUFHLENBQUMsR0FUaEM7O0VBVUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF0QkE7Ozs7Ozs7O0VBOEJBLGlCQUFBLEdBQW9CLFFBQUEsQ0FBQSxDQUFBLEVBQUE7Ozs7Ozs7Ozs7Ozs7QUFDcEIsUUFBQSxVQUFBLEVBQUEsTUFBQSxFQUFBLFVBQUEsRUFBQSxRQUFBLEVBQUE7SUFZRSxDQUFBLENBQUUsVUFBRixFQUNFLE1BREYsRUFFRSxVQUZGLEVB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QSxFQUFJO01BQTlCO0lBQXJCLENBQTlCLENBQWxCO1dBRUM7RUFoQ2lCLEVBOUJwQjs7O0VBaUVBLGFBQUEsR0FBZ0IsUUFBQSxDQUFBLENBQUEsRUFBQTs7SUFFZDtXQUNDO0VBSGEsRUFqRWhCOzs7RUEyRUEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBOzthQUV0QyxpQkFBQSxDQUFBO0lBRnNDLENBQUEsSUFBeEM7OztFQTNFQTs7Ozs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdpbnRlcnR5cGUvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgcmVkXG4gIGdvbGRcbiAgYmx1ZVxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5cbiMgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jIGRlbW9fcGtnX2phcGFuZXNlID0gLT5cbiMgICBkZWJ1ZyAnzqlkamtyX19fMScsIHJlcXVpcmUgJ2phcGFuZXNlJ1xuIyAgIDtudWxsXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZGVtb19wa2dfd2FuYWthbmEgPSAtPlxuICAjIyNcbiAgTmFtZSAgICAgICAgICAgICAgICAgfCBUeXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQXR0cmlidXRlcyB8IERlZmF1bHQgICB8IERlc2NyaXB0aW9uXG5cbiAgdXNlT2Jzb2xldGVLYW5hICAgICAgfCBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgPG9wdGlvbmFsPiB8IGZhbHNlICAgICB8IFNldCB0byB0cnVlIHRvIHVzZSBvYnNvbGV0ZSBjaGFyYWN0ZXJzLCBzdWNoIGFzIOOCkCBhbmQg44KRLlxuICBwYXNzUm9tYWppICAgICAgICAgICB8IEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCA8b3B0aW9uYWw+IHwgZmFsc2UgICAgIHwgU2V0IHRvIHRydWUgdG8gcGFzcyByb21hamkgd2hlbiB1c2luZyBtaXhlZCBzeWxsYWJhcmllcyB3aXRoIHRvS2F0YWthbmEoKSBvciB0b0hpcmFnYW5hKClcbiAgY29udmVydExvbmdWb3dlbE1hcmsgfCBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgPG9wdGlvbmFsPiB8IHRydWUgICAgICB8IFNldCB0byBmYWxzZSB0byBwcmV2ZW50IGNvbnZlcnNpb25zIG9mICfjg7wnIHRvIGV4dGVuZGVkIHZvd2VscyB3aXRoIHRvSGlyYWdhbmEoKVxuICB1cGNhc2VLYXRha2FuYSAgICAgICB8IEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCA8b3B0aW9uYWw+IHwgZmFsc2UgICAgIHwgU2V0IHRvIHRydWUgdG8gY29udmVydCBrYXRha2FuYSB0byB1cHBlcmNhc2UgdXNpbmcgdG9Sb21hamkoKVxuICBJTUVNb2RlICAgICAgICAgICAgICB8IEJvb2xlYW4gfCAndG9IaXJhZ2FuYScgfCAndG9LYXRha2FuYScgfCA8b3B0aW9uYWw+IHwgZmFsc2UgICAgIHwgU2V0IHRvIHRydWUsICd0b0hpcmFnYW5hJywgb3IgJ3RvS2F0YWthbmEnIHRvIGhhbmRsZSBjb252ZXJzaW9uIHdoaWxlIGl0IGlzIGJlaW5nIHR5cGVkLlxuICByb21hbml6YXRpb24gICAgICAgICB8ICdoZXBidXJuJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCA8b3B0aW9uYWw+IHwgJ2hlcGJ1cm4nIHwgY2hvb3NlIHRvUm9tYWppKCkgcm9tYW5pemF0aW9uIG1hcCAoY3VycmVudGx5IG9ubHkgJ2hlcGJ1cm4nKVxuICBjdXN0b21LYW5hTWFwcGluZyAgICB8IE9iamVjdC48U3RyaW5nLCBTdHJpbmc+ICAgICAgICAgICAgICAgfCA8b3B0aW9uYWw+IHwgICAgICAgICAgIHwgY3VzdG9tIG1hcCB3aWxsIGJlIG1lcmdlZCB3aXRoIGRlZmF1bHQgY29udmVyc2lvblxuICBjdXN0b21Sb21hamlNYXBwaW5nICB8IE9iamVjdC48U3RyaW5nLCBTdHJpbmc+ICAgICAgICAgICAgICAgfCA8b3B0aW9uYWw+IHwgICAgICAgICAgIHwgY3VzdG9tIG1hcCB3aWxsIGJlIG1lcmdlZCB3aXRoIGRlZmF1bHQgY29udmVyc2lvblxuICAjIyNcbiAgeyB0b0hpcmFnYW5hLFxuICAgIHRvS2FuYSxcbiAgICB0b0thdGFrYW5hXG4gICAgdG9Sb21hamksXG4gICAgdG9rZW5pemUsICAgICAgICAgfSA9IHJlcXVpcmUgJ3dhbmFrYW5hJ1xuICBoZWxwICfOqWRqa3JfX18yJywgdG9IaXJhZ2FuYSAgJ+ODqeODvOODoeODsycsICAgICAgIHsgY29udmVydExvbmdWb3dlbE1hcms6IGZhbHNlLCB9XG4gIGhlbHAgJ86pZGprcl9fXzMnLCB0b0hpcmFnYW5hICAn44Op44O844Oh44OzJywgICAgICAgeyBjb252ZXJ0TG9uZ1Zvd2VsTWFyazogdHJ1ZSwgfVxuICBoZWxwICfOqWRqa3JfX180JywgdG9LYW5hICAgICAgJ3dhbmFrYW5hJywgICB7IGN1c3RvbUthbmFNYXBwaW5nOiB7IG5hOiAn44GrJywga2E6ICdCYW5hJyB9LCB9XG4gIGhlbHAgJ86pZGprcl9fXzUnLCB0b0thbmEgICAgICAnd2FuYWthbmEnLCAgIHsgY3VzdG9tS2FuYU1hcHBpbmc6IHsgd2FrYTogJyjlkozmrYwpJywgd2E6ICco5ZKMMiknLCBrYTogJyjmrYwyKScsIG5hOiAnKOWQjSknLCBrYTogJyhCYW5hKScsIG5ha2E6ICco5LitKScsIH0sIH1cbiAgaGVscCAnzqlkamtyX19fNicsIHRvUm9tYWppICAgICfjgaTjgZjjgY7jgoonLCAgICAgeyBjdXN0b21Sb21hamlNYXBwaW5nOiB7IOOBmDogJyh6aSknLCDjgaQ6ICcodHUpJywg44KKOiAnKGxpKScsIOOCiuOCh+OBhjogJyhyeW91KScsIOOCiuOChzogJyhyeW8pJyB9LCB9XG4gIGhlbHAgJ86pZGprcl9fXzcnLCB0b1JvbWFqaSAgICAn44Gk44GY44GO44KK44KHJywgICAgeyBjdXN0b21Sb21hamlNYXBwaW5nOiB7IOOBmDogJyh6aSknLCDjgaQ6ICcodHUpJywg44KKOiAnKGxpKScsIOOCiuOCh+OBhjogJyhyeW91KScsIOOCiuOChzogJyhyeW8pJyB9LCB9XG4gIGhlbHAgJ86pZGprcl9fXzgnLCB0b1JvbWFqaSAgICAn44Gk44GY44GO44KK44KH44GGJywgICB7IGN1c3RvbVJvbWFqaU1hcHBpbmc6IHsg44GYOiAnKHppKScsIOOBpDogJyh0dSknLCDjgoo6ICcobGkpJywg44KK44KH44GGOiAnKHJ5b3UpJywg44KK44KHOiAnKHJ5byknIH0sIH1cbiAgaGVscCAnzqlkamtyX19fOScsIHRvUm9tYWppICAgICfjgaTjgZjjgY7jgorjgofjgYYnLCAgIHsgY3VzdG9tUm9tYWppTWFwcGluZzogeyDjgZg6ICcoemkpJywg44GkOiAnKHR1KScsIOOCijogJyhsaSknLCB9LCB9XG4gIGhlbHAgJ86pZGprcl9fMTAnLCB0b0thdGFrYW5hICAgICfjgaTjgZjjgY7jgorjgofjgYYnLCAgIHsgY3VzdG9tS2FuYU1hcHBpbmc6IHsg44Gk44GYOiAnKOi+uzEpJywg44OE44K4OiAnKOi+uzIpJywgfSwgfVxuICBoZWxwICfOqWRqa3JfXzExJywgdG9rZW5pemUgICAgJ+OBpOOBmOOBjuOCiuOCh+OBhicsIHsgZGV0YWlsZWQ6IHRydWUsIH1cbiAgaGVscCAnzqlkamtyX18xMicsIHRva2VuaXplICAgICfjgaTjgZjjg6njg7zjg6Hjg7MnLCB7IGRldGFpbGVkOiB0cnVlLCB9XG4gIGhlbHAgJ86pZGprcl9fMTMnLCB0b0thdGFrYW5hICAgICfjgY7jgoos44Op44O844Oh44OzLPCqnIgnLCAgIHsgY3VzdG9tS2FuYU1hcHBpbmc6IHsg8KqciDogJyjjgajjgoIpJywg44Gk44GYOiAnKOi+uzEpJywg44OE44K4OiAnKOi+uzIpJywgfSwgfVxuICBoZWxwICfOqWRqa3JfXzE0JywgdG9IaXJhZ2FuYSAgICAn44GO44KKLOODqeODvOODoeODsyzwqpyIJywgICB7IGN1c3RvbUthbmFNYXBwaW5nOiB7IPCqnIg6ICco44Go44KCKScsIOOBpOOBmDogJyjovrsxKScsIOODhOOCuDogJyjovrsyKScsIH0sIH1cblxuICA7bnVsbFxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmRlbW9fcGtnX2phY28gPSAtPlxuICAjIGRlYnVnICfOqWRqa3JfXzE1JywgcmVxdWlyZSAnamFjbydcbiAgbnVsbFxuICA7bnVsbFxuXG5cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb19wa2dfamFwYW5lc2UoKVxuICBkZW1vX3BrZ193YW5ha2FuYSgpXG4gICMgZGVtb19wa2dfamFjbygpXG4gICMgcmUgICAgICA9IC8vLyAoPzw9IGEgKSBiIC8vL3lcbiAgIyBzb3VyY2UgID0gJzAxYjNhYjYnXG4gICMgZm9yIGlkeCBpbiBbIDAgLi4gNyBdXG4gICMgICByZS5sYXN0SW5kZXggPSBpZHg7IGRlYnVnICfOqV9fMTYnLCBpZHgsICggcnByIHNvdXJjZVsgaWR4IC4uLiBdICksIHNvdXJjZS5tYXRjaCByZVxuIl19
