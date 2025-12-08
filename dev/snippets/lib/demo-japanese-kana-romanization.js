(async function() {
  'use strict';
  var GUY, alert, blue, bold, debug, demo_pkg_jaco, demo_pkg_japanese, demo_pkg_wanakana, echo, f, gold, help, info, inspect, log, plain, praise, red, reverse, rpr, urge, warn, whisper, white;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, white, red, gold, blue, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  //-----------------------------------------------------------------------------------------------------------
  demo_pkg_japanese = function() {
    debug('Ωdjkr___1', require('japanese'));
    return null;
  };

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
    help('Ωdjkr___3', toHiragana('ラーメン', {
      convertLongVowelMark: false
    }));
    help('Ωdjkr___4', toHiragana('ラーメン', {
      convertLongVowelMark: true
    }));
    help('Ωdjkr___5', toKana('wanakana', {
      customKanaMapping: {
        na: 'に',
        ka: 'Bana'
      }
    }));
    help('Ωdjkr___6', toKana('wanakana', {
      customKanaMapping: {
        waka: '(和歌)',
        wa: '(和2)',
        ka: '(歌2)',
        na: '(名)',
        ka: '(Bana)',
        naka: '(中)'
      }
    }));
    help('Ωdjkr___7', toRomaji('つじぎり', {
      customRomajiMapping: {
        じ: '(zi)',
        つ: '(tu)',
        り: '(li)',
        りょう: '(ryou)',
        りょ: '(ryo)'
      }
    }));
    help('Ωdjkr___8', toRomaji('つじぎりょ', {
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
        り: '(li)',
        りょう: '(ryou)',
        りょ: '(ryo)'
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
    help('Ωdjkr__11', tokenize('つじラーメン', {
      detailed: true
    }));
    help('Ωdjkr__10', toKatakana('ぎり,ラーメン,𪜈', {
      customKanaMapping: {
        𪜈: '(とも)',
        つじ: '(辻1)',
        ツジ: '(辻2)'
      }
    }));
    help('Ωdjkr__10', toHiragana('ぎり,ラーメン,𪜈', {
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
    // debug 'Ωdjkr__12', require 'jaco'
    null;
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      demo_pkg_japanese();
      demo_pkg_wanakana();
      return demo_pkg_jaco();
    })();
  }

  // re      = /// (?<= a ) b ///y
// source  = '01b3ab6'
// for idx in [ 0 .. 7 ]
//   re.lastIndex = idx; debug 'Ω__13', idx, ( rpr source[ idx ... ] ), source.match re

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tamFwYW5lc2Uta2FuYS1yb21hbml6YXRpb24uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsYUFBQSxFQUFBLGlCQUFBLEVBQUEsaUJBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTs7RUFFQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHVCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEdBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLEVBU0UsR0FURixDQUFBLEdBUzRCLEdBQUcsQ0FBQyxHQVRoQzs7RUFVQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQXRCQTs7O0VBeUJBLGlCQUFBLEdBQW9CLFFBQUEsQ0FBQSxDQUFBO0lBQ2xCLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLE9BQUEsQ0FBUSxVQUFSLENBQW5CO1dBQ0M7RUFGaUIsRUF6QnBCOzs7RUE4QkEsaUJBQUEsR0FBb0IsUUFBQSxDQUFBLENBQUEsRUFB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L0JpQixFQTlCcEI7OztFQWdFQSxhQUFBLEdBQWdCLFFBQUEsQ0FBQSxDQUFBLEVBQUE7O0lBRWQ7V0FDQztFQUhhLEVBaEVoQjs7O0VBMEVBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7TUFDdEMsaUJBQUEsQ0FBQTtNQUNBLGlCQUFBLENBQUE7YUFDQSxhQUFBLENBQUE7SUFIc0MsQ0FBQSxJQUF4Qzs7O0VBMUVBOzs7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaW50ZXJ0eXBlL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIHJlZFxuICBnb2xkXG4gIGJsdWVcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmRlbW9fcGtnX2phcGFuZXNlID0gLT5cbiAgZGVidWcgJ86pZGprcl9fXzEnLCByZXF1aXJlICdqYXBhbmVzZSdcbiAgO251bGxcblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5kZW1vX3BrZ193YW5ha2FuYSA9IC0+XG4gICMjI1xuICBOYW1lICAgICAgICAgICAgICAgICB8IFR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBBdHRyaWJ1dGVzIHwgRGVmYXVsdCAgIHwgRGVzY3JpcHRpb25cblxuICB1c2VPYnNvbGV0ZUthbmEgICAgICB8IEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCA8b3B0aW9uYWw+IHwgZmFsc2UgICAgIHwgU2V0IHRvIHRydWUgdG8gdXNlIG9ic29sZXRlIGNoYXJhY3RlcnMsIHN1Y2ggYXMg44KQIGFuZCDjgpEuXG4gIHBhc3NSb21hamkgICAgICAgICAgIHwgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDxvcHRpb25hbD4gfCBmYWxzZSAgICAgfCBTZXQgdG8gdHJ1ZSB0byBwYXNzIHJvbWFqaSB3aGVuIHVzaW5nIG1peGVkIHN5bGxhYmFyaWVzIHdpdGggdG9LYXRha2FuYSgpIG9yIHRvSGlyYWdhbmEoKVxuICBjb252ZXJ0TG9uZ1Zvd2VsTWFyayB8IEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCA8b3B0aW9uYWw+IHwgdHJ1ZSAgICAgIHwgU2V0IHRvIGZhbHNlIHRvIHByZXZlbnQgY29udmVyc2lvbnMgb2YgJ+ODvCcgdG8gZXh0ZW5kZWQgdm93ZWxzIHdpdGggdG9IaXJhZ2FuYSgpXG4gIHVwY2FzZUthdGFrYW5hICAgICAgIHwgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDxvcHRpb25hbD4gfCBmYWxzZSAgICAgfCBTZXQgdG8gdHJ1ZSB0byBjb252ZXJ0IGthdGFrYW5hIHRvIHVwcGVyY2FzZSB1c2luZyB0b1JvbWFqaSgpXG4gIElNRU1vZGUgICAgICAgICAgICAgIHwgQm9vbGVhbiB8ICd0b0hpcmFnYW5hJyB8ICd0b0thdGFrYW5hJyB8IDxvcHRpb25hbD4gfCBmYWxzZSAgICAgfCBTZXQgdG8gdHJ1ZSwgJ3RvSGlyYWdhbmEnLCBvciAndG9LYXRha2FuYScgdG8gaGFuZGxlIGNvbnZlcnNpb24gd2hpbGUgaXQgaXMgYmVpbmcgdHlwZWQuXG4gIHJvbWFuaXphdGlvbiAgICAgICAgIHwgJ2hlcGJ1cm4nICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDxvcHRpb25hbD4gfCAnaGVwYnVybicgfCBjaG9vc2UgdG9Sb21hamkoKSByb21hbml6YXRpb24gbWFwIChjdXJyZW50bHkgb25seSAnaGVwYnVybicpXG4gIGN1c3RvbUthbmFNYXBwaW5nICAgIHwgT2JqZWN0LjxTdHJpbmcsIFN0cmluZz4gICAgICAgICAgICAgICB8IDxvcHRpb25hbD4gfCAgICAgICAgICAgfCBjdXN0b20gbWFwIHdpbGwgYmUgbWVyZ2VkIHdpdGggZGVmYXVsdCBjb252ZXJzaW9uXG4gIGN1c3RvbVJvbWFqaU1hcHBpbmcgIHwgT2JqZWN0LjxTdHJpbmcsIFN0cmluZz4gICAgICAgICAgICAgICB8IDxvcHRpb25hbD4gfCAgICAgICAgICAgfCBjdXN0b20gbWFwIHdpbGwgYmUgbWVyZ2VkIHdpdGggZGVmYXVsdCBjb252ZXJzaW9uXG4gICMjI1xuICB7IHRvSGlyYWdhbmEsXG4gICAgdG9LYW5hLFxuICAgIHRvS2F0YWthbmFcbiAgICB0b1JvbWFqaSxcbiAgICB0b2tlbml6ZSwgICAgICAgICB9ID0gcmVxdWlyZSAnd2FuYWthbmEnXG4gIGhlbHAgJ86pZGprcl9fXzMnLCB0b0hpcmFnYW5hICAn44Op44O844Oh44OzJywgICAgICAgeyBjb252ZXJ0TG9uZ1Zvd2VsTWFyazogZmFsc2UsIH1cbiAgaGVscCAnzqlkamtyX19fNCcsIHRvSGlyYWdhbmEgICfjg6njg7zjg6Hjg7MnLCAgICAgICB7IGNvbnZlcnRMb25nVm93ZWxNYXJrOiB0cnVlLCB9XG4gIGhlbHAgJ86pZGprcl9fXzUnLCB0b0thbmEgICAgICAnd2FuYWthbmEnLCAgIHsgY3VzdG9tS2FuYU1hcHBpbmc6IHsgbmE6ICfjgasnLCBrYTogJ0JhbmEnIH0sIH1cbiAgaGVscCAnzqlkamtyX19fNicsIHRvS2FuYSAgICAgICd3YW5ha2FuYScsICAgeyBjdXN0b21LYW5hTWFwcGluZzogeyB3YWthOiAnKOWSjOatjCknLCB3YTogJyjlkowyKScsIGthOiAnKOatjDIpJywgbmE6ICco5ZCNKScsIGthOiAnKEJhbmEpJywgbmFrYTogJyjkuK0pJywgfSwgfVxuICBoZWxwICfOqWRqa3JfX183JywgdG9Sb21hamkgICAgJ+OBpOOBmOOBjuOCiicsICAgICB7IGN1c3RvbVJvbWFqaU1hcHBpbmc6IHsg44GYOiAnKHppKScsIOOBpDogJyh0dSknLCDjgoo6ICcobGkpJywg44KK44KH44GGOiAnKHJ5b3UpJywg44KK44KHOiAnKHJ5byknIH0sIH1cbiAgaGVscCAnzqlkamtyX19fOCcsIHRvUm9tYWppICAgICfjgaTjgZjjgY7jgorjgocnLCAgICB7IGN1c3RvbVJvbWFqaU1hcHBpbmc6IHsg44GYOiAnKHppKScsIOOBpDogJyh0dSknLCDjgoo6ICcobGkpJywg44KK44KH44GGOiAnKHJ5b3UpJywg44KK44KHOiAnKHJ5byknIH0sIH1cbiAgaGVscCAnzqlkamtyX19fOScsIHRvUm9tYWppICAgICfjgaTjgZjjgY7jgorjgofjgYYnLCAgIHsgY3VzdG9tUm9tYWppTWFwcGluZzogeyDjgZg6ICcoemkpJywg44GkOiAnKHR1KScsIOOCijogJyhsaSknLCDjgorjgofjgYY6ICcocnlvdSknLCDjgorjgoc6ICcocnlvKScgfSwgfVxuICBoZWxwICfOqWRqa3JfXzEwJywgdG9LYXRha2FuYSAgICAn44Gk44GY44GO44KK44KH44GGJywgICB7IGN1c3RvbUthbmFNYXBwaW5nOiB7IOOBpOOBmDogJyjovrsxKScsIOODhOOCuDogJyjovrsyKScsIH0sIH1cbiAgaGVscCAnzqlkamtyX18xMScsIHRva2VuaXplICAgICfjgaTjgZjjgY7jgorjgofjgYYnLCB7IGRldGFpbGVkOiB0cnVlLCB9XG4gIGhlbHAgJ86pZGprcl9fMTEnLCB0b2tlbml6ZSAgICAn44Gk44GY44Op44O844Oh44OzJywgeyBkZXRhaWxlZDogdHJ1ZSwgfVxuICBoZWxwICfOqWRqa3JfXzEwJywgdG9LYXRha2FuYSAgICAn44GO44KKLOODqeODvOODoeODsyzwqpyIJywgICB7IGN1c3RvbUthbmFNYXBwaW5nOiB7IPCqnIg6ICco44Go44KCKScsIOOBpOOBmDogJyjovrsxKScsIOODhOOCuDogJyjovrsyKScsIH0sIH1cbiAgaGVscCAnzqlkamtyX18xMCcsIHRvSGlyYWdhbmEgICAgJ+OBjuOCiizjg6njg7zjg6Hjg7Ms8KqciCcsICAgeyBjdXN0b21LYW5hTWFwcGluZzogeyDwqpyIOiAnKOOBqOOCgiknLCDjgaTjgZg6ICco6L67MSknLCDjg4Tjgrg6ICco6L67MiknLCB9LCB9XG5cbiAgO251bGxcblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5kZW1vX3BrZ19qYWNvID0gLT5cbiAgIyBkZWJ1ZyAnzqlkamtyX18xMicsIHJlcXVpcmUgJ2phY28nXG4gIG51bGxcbiAgO251bGxcblxuXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBkZW1vX3BrZ19qYXBhbmVzZSgpXG4gIGRlbW9fcGtnX3dhbmFrYW5hKClcbiAgZGVtb19wa2dfamFjbygpXG4gICMgcmUgICAgICA9IC8vLyAoPzw9IGEgKSBiIC8vL3lcbiAgIyBzb3VyY2UgID0gJzAxYjNhYjYnXG4gICMgZm9yIGlkeCBpbiBbIDAgLi4gNyBdXG4gICMgICByZS5sYXN0SW5kZXggPSBpZHg7IGRlYnVnICfOqV9fMTMnLCBpZHgsICggcnByIHNvdXJjZVsgaWR4IC4uLiBdICksIHNvdXJjZS5tYXRjaCByZVxuIl19
