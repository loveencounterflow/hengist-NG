(async function() {
  'use strict';
  var GUY, SFMODULES, TMP_require_encode_in_alphabet, alert, blue, bold, debug, demo_binary_lexicographic_sortkey, demo_chatgpt_solution, demo_hollerith_vdx_sortkey, echo, f, gold, green, grey, help, hide, info, inspect, lime, log, plain, praise, red, reverse, rpr, set_getter, timeit, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-build-unicode-ranges'));

  ({rpr, inspect, echo, white, green, lime, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  // { nfa }                   = require '../../../apps/normalize-function-arguments'
  // GTNG                      = require '../../../apps/guy-test-NG'
  // { Test                  } = GTNG
  // mkdirp                    = require 'mkdirp'
  // env_paths                 = ( require 'env-paths' ).default 'demo-node-sqlite'
  // SQLITE                    = require 'node:sqlite'
  // PATH                      = require 'node:path'
  // { SQL }                   = require '../../../apps/dbay'
  // { default: \
  //   on_process_exit,      } = require 'exit-hook'
  // FS                        = require 'node:fs'
  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  ({hide, set_getter} = SFMODULES.require_managed_property_tools());

  ({timeit} = SFMODULES.unstable.require_benchmarking());

  //===========================================================================================================
  demo_binary_lexicographic_sortkey = () => {
    /* inspired by & thx to https://stately.cloud/blog/encoding-sortable-binary-database-keys/ */
    /* trailer can be of fixed length since there is an upper limit to digit positions given by
     Number.MAX_SAFE_INTEGER as represented in the base of choice (here 10) times the maximum number of
     dimensions of the VNR: */
    var N, d, g, i, k, key, keys, len, max_length, q, ref0, sk, trailer, v;
    d = {
      K000: '[ -999,           ] 1',
      L00: '[  -99,           ] 2',
      L09: '[  -90,           ] 3',
      L88: '[  -11,           ] 4',
      L89: '[  -10,           ] 5',
      M0: '[   -9,           ] 6',
      M1: '[   -8,           ] 7',
      M2: '[   -7,           ] 8',
      M3: '[   -6,           ] 9',
      M4: '[   -5,           ] 10',
      M5: '[   -4,           ] 11',
      M6: '[   -3,           ] 12',
      M7: '[   -2,           ] 13',
      M8: '[   -1,           ] 14',
      NL20: '[   +0,  -20,     ] 15',
      N: '[   +0,           ] 16',
      NP20: '[   +0,  +20,     ] 17',
      O9: '[   +9,           ] 18',
      P10M6: '[  +10,   -3,     ] 19',
      P10M7: '[  +10,   -2,     ] 20',
      P10M8: '[  +10,   -1,     ] 21',
      P10: '[  +10,           ] 22',
      P10N: '[  +10,   +0,     ] 23',
      P10O1: '[  +10,   +1,     ] 24',
      P10P10M8: '[  +10,  +10, -1, ] 25',
      P10P10: '[  +10,  +10,     ] 26',
      P10P20: '[  +10,  +20,     ] 27',
      P20: '[  +20,           ] 28',
      P20P10: '[  +20,  +10,     ] 29',
      P90: '[  +90,           ] 30',
      Q900: '[ +900,           ] 31'
    };
    // identical b/c of padding:
    // P10:        '[  +10,       ] 24'
    // P10N:      '[  +10,   +0, ] 25'
    max_length = Math.max(...((function() {
      var i, len, ref, results;
      ref = Object.keys(d);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        k = ref[i];
        results.push(k.length);
      }
      return results;
    })()));
    trailer = 'NNNNNNNNNNN';
    debug('Ωbsk___1', {max_length});
    // d1 = Object.fromEntries ( [ ( k.padEnd max_length, 'N' ), v, ] for k, v of d )
    // d1 = Object.fromEntries ( [ ( k + trailer ), v, ] for k, v of d )
    keys = (function() {
      var i, len, ref, results;
      ref = ((function() {
        var results1;
        results1 = [];
        for (k in d) {
          results1.push([k + trailer, k]);
        }
        return results1;
      })()).sort();
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        [sk, k] = ref[i];
        results.push(k);
      }
      return results;
    })();
    for (i = 0, len = keys.length; i < len; i++) {
      key = keys[i];
      k = lime(reverse(f` ${key}:>10c; `));
      v = gold(reverse(f` ${d[key]}:<30c; `));
      q = key.replace(/([A-Z])[0-9]*/g, '$1');
      q = q.length;
      help('Ωbsk___2', `${k}${v} ${q}`);
    }
    ref0 = Number.MAX_SAFE_INTEGER;
    f = function(n) {
      if (n === 0) {
        return [0, 'N'];
      }
      if (n > 0) {
        return [+1, (n.toString(32)).toLowerCase()];
      }
      return [-1, ((ref0 + n).toString(32)).toLowerCase().replace(/^7V*/i, '')];
    };
    // 11111111111111111111111111111111111111111111111111111
    N = 'N'.codePointAt(0);
    g = function(n) {
      var nrpr, sign;
      [sign, nrpr] = f(n);
      if (sign === 0) {
        return nrpr;
      }
      if (sign === +1) {
        return (String.fromCodePoint(N + nrpr.length)) + nrpr;
      }
      return (String.fromCodePoint(N - nrpr.length)) + nrpr;
    };
    info('Ωbsk___3', '0     ', f(0), g(0));
    info('Ωbsk___4', '1     ', f(1), g(1));
    info('Ωbsk___5', '2     ', f(2), g(2));
    info('Ωbsk___6', '31    ', f(31), g(31));
    info('Ωbsk___7', '32    ', f(32), g(32));
    info('Ωbsk___8', '33    ', f(33), g(33));
    info('Ωbsk___9', '-1    ', f(-1), g(-1));
    info('Ωbsk__10', '-31   ', f(-31), g(-31));
    info('Ωbsk__11', '-32   ', f(-32), g(-32));
    info('Ωbsk__12', '-32767', f(-32767), g(-32767));
    info('Ωbsk__13', '-32768', f(-32768), g(-32768));
    info('Ωbsk__14', '-32769', f(-32769), g(-32769));
    // Number.MAX_SAFE_INTEGER.toString 32
    // '7vvvvvvvvvv'
    /*

     * Vectorial Numbers (VNRs) to Transform Text and Keep It

    X [ 10, 32, ] `The reading of 樂 is <py/yue4/ for <gloss/music/ or <py/le4/ meaning <gloss/joy/.`
    _ [ 10, 32,  1,    ] `The reading of 樂 is `
    X [ 10, 32,  2,    ] `<py/`
    X [ 10, 32,  3,    ] `yue4`
    _ [ 10, 32,  3, 1, ] `<span class=pinyin>yuè</span>`
    X [ 10, 32,  4,    ] `/`
    _ [ 10, 32,  5,    ] ` for `
    X [ 10, 32,  6,    ] `<gloss/`
    X [ 10, 32,  7,    ] `music`
    _ [ 10, 32,  7, 1, ] `<span class=gloss>music</span>`
    X [ 10, 32,  8,    ] `/`
    _ [ 10, 32,  9,    ] ` or `
    X [ 10, 32, 10,    ] `<py/`
    X [ 10, 32, 11,    ] `le4`
    _ [ 10, 32, 11, 1, ] `<span class=pinyin>lè</span>`
    _ [ 10, 32, 12,    ] ` meaning `
    X [ 10, 32, 13,    ] `<gloss/`
    X [ 10, 32, 14,    ] `joy`
    _ [ 10, 32, 14, 1, ] `<span class=gloss>joy</span>`
    X [ 10, 32, 15,    ] `/`
    _ [ 10, 32, 16,    ] `.\n`

    NOTE could've rather surrounded glosses:

    X [ 10, 32, 13,    ] `<gloss/`
    _ [ 10, 32, 14, -1,] `<span class=gloss>`
    _ [ 10, 32, 14,    ] `joy`
    _ [ 10, 32, 14, 1, ] `</span>`
    X [ 10, 32, 15,    ] `/`

     */
    return null;
  };

  //===========================================================================================================
  TMP_require_encode_in_alphabet = function() {
    
  function encodeBigInt(num, alphabet) {
    if (typeof num === "number") num = BigInt(num);
    if (num < 0n) throw new RangeError("Only nonnegative integers supported");
    if (num === 0n) return alphabet[0];

    const base = BigInt(alphabet.length);
    let result = "";

    while (num > 0n) {
      const rem = num % base;
      result = alphabet[Number(rem)] + result;
      num = num / base;
    }

    return result;
  }

  function decodeBigInt(str, alphabet) {
    const base = BigInt(alphabet.length);
    const map = new Map(alphabet.split("").map((ch, i) => [ch, BigInt(i)]));

    let num = 0n;
    for (const ch of str) {
      const val = map.get(ch);
      if (val === undefined) throw new Error(`Invalid character: ${ch}`);
      num = num * base + val;
    }

    return num;
  }
  ;
    return {encodeBigInt, decodeBigInt};
  };

  //===========================================================================================================
  demo_chatgpt_solution = function() {
    var R, chr, cid, decodeBigInt, encodeBigInt, i;
    ({encodeBigInt, decodeBigInt} = TMP_require_encode_in_alphabet());
    urge('Ωbsk__15', encodeBigInt(12345678, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'));
    // urge 'Ωbsk__16', rpr encodeBigInt 100n, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzªµºÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁˆˇˈˉˊˋˌˍˎˏːˑˠˡˢˣˤˬˮͰͱͲͳʹͶͷͺͻͼͽͿΆΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨ'
    // urge 'Ωbsk__17', rpr encodeBigInt 1000n, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzªµºÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁˆˇˈˉˊˋˌˍˎˏːˑˠˡˢˣˤˬˮͰͱͲͳʹͶͷͺͻͼͽͿΆΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨ'
    // urge 'Ωbsk__18', rpr encodeBigInt 10000n, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzªµºÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁˆˇˈˉˊˋˌˍˎˏːˑˠˡˢˣˤˬˮͰͱͲͳʹͶͷͺͻͼͽͿΆΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨ'
    // urge 'Ωbsk__19', rpr encodeBigInt 10000n, 'ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅬⅭⅮⅯ'
    // urge 'Ωbsk__20', rpr encodeBigInt 10000n, '①②③④⑤⑥⑦⑧⑨⑩'
    // urge 'Ωbsk__21', rpr encodeBigInt 1, '⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑'
    // urge 'Ωbsk__22', rpr encodeBigInt 2, '⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑'
    // urge 'Ωbsk__23', rpr encodeBigInt 10, '⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑'
    // urge 'Ωbsk__24', rpr encodeBigInt 10, '⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕'
    // urge 'Ωbsk__25', rpr encodeBigInt 100, '⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕'
    // urge 'Ωbsk__26', rpr encodeBigInt 1000, '⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕'
    // urge 'Ωbsk__27', rpr encodeBigInt 10000, '⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕'
    // urge 'Ωbsk__28', rpr encodeBigInt 100000, '⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕'
    // urge 'Ωbsk__29', rpr encodeBigInt 100000, 'アイウエオカキクケコ'
    urge('Ωbsk__30', rpr(encodeBigInt(Number.MAX_SAFE_INTEGER, `!"#$%&'()*+,-./0123456789:;<=>?@`)));
    urge('Ωbsk__31', rpr(encodeBigInt(Number.MAX_SAFE_INTEGER, '!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc')));
    urge('Ωbsk__32', rpr(encodeBigInt(Number.MAX_SAFE_INTEGER, '!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ')));
    urge('Ωbsk__33', rpr(encodeBigInt(Number.MAX_SAFE_INTEGER, '!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ')));
    urge('Ωbsk__34', rpr(encodeBigInt(0, '01')));
    urge('Ωbsk__35', rpr(encodeBigInt(1, '01')));
    urge('Ωbsk__36', rpr(encodeBigInt(2, '01')));
    urge('Ωbsk__37', rpr(encodeBigInt(3, '01')));
    urge('Ωbsk__38', rpr(encodeBigInt(7, '01')));
    urge('Ωbsk__39', rpr(encodeBigInt(8, '01')));
    urge('Ωbsk__40', rpr(encodeBigInt(Number.MAX_SAFE_INTEGER, '01')));
    // +57 free codepoints
    //  -8 pos negative
    //  -8 pos positive
    //  -1 zero
    // ———————————
    // +40 for
    // -20 negative single-digit
    // -20 positive single-digit
    // 2ÆÆÆÆÆÆÆ
    /*

    * for numbers `-20 <= n <= +20`:
      * negative uniliteral numbers           (NUNs):  -20 ..  ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ .. -1
        * use negative index with `at` indexing as in `nun.at -3` to get `à` for `-3`
      * zero uniliteral number                (ZUN):    ±0 ..  ã
      * positive uniliteral numbers           (PUNs):   +1 ..  äåæçèéêëìíîïðñòóôõö÷ .. +20
        * use next step
      * zero and positive uniliteral numbers  (ZPUNs):  +0 .. ãäåæçèéêëìíîïðñòóôõö÷ .. +20
        * prepending ZUN to PUNs gives ZPUNs, use `n` as index as in `zpun[ +3 ]` or `zpun.at +3` to get `å`

    * for numbers `n > +20`:
      * convert to Base-128 using alphabet: !#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ
      * prepend positive magnifier            (PMAG) :  1 positive digit ..  øùúûüýþÿ  ..  8 positive digits

    * for numbers `n < -20`:
      * add `Number.MAX_SAFE_INTEGER` to `n` to shift the number into the positive, then convert to Base-128
      * `Number.MAX_SAFE_INTEGER` is `2ÆÆÆÆÆÆÆ` in Base-128, meaning that leading `/^2Æ* /` can be discarded
      * prepend negative magnifier            (NMAG) :  1 negative digit ..  ÎÍÌËÊÉÈÇ  ..  8 negative digits

    Ç    8 negative digits
    È    7 negative digits
    É    6 negative digits
    Ê    5 negative digits
    Ë    4 negative digits
    Ì    3 negative digits
    Í    2 negative digits
    Î    1 negative digits
    Ï  -20
    Ð  -19
    Ñ  -18
    Ò  -17
    Ó  -16
    Ô  -15
    Õ  -14
    Ö  -13
    ×  -12
    Ø  -11
    Ù  -10
    Ú   -9
    Û   -8
    Ü   -7
    Ý   -6
    Þ   -5
    ß   -4
    à   -3
    á   -2
    â   -1 negative small single-letter indices

    ã   ±0 zero

    ä   +1 positive small single-letter indices
    å   +2
    æ   +3
    ç   +4
    è   +5
    é   +6
    ê   +7
    ë   +8
    ì   +9
    í  +10
    î  +11
    ï  +12
    ð  +13
    ñ  +14
    ò  +15
    ó  +16
    ô  +17
    õ  +18
    ö  +19
    ÷  +20
    ø    1 positive digits
    ù    2 positive digits
    ú    3 positive digits
    û    4 positive digits
    ü    5 positive digits
    ý    6 positive digits
    þ    7 positive digits
    ÿ    8 positive digits

     */
    R = [];
    for (cid = i = 0x0021; i <= 255; cid = ++i) {
      if (/^\p{C}$/v.test((chr = String.fromCodePoint(cid)))) {
        // continue unless /^\p{L}$/v.test ( chr = String.fromCodePoint cid )
        // continue unless /^.$/v.test ( chr = String.fromCodePoint cid )
        continue;
      }
      if (/^(['"\\]|\p{S})$/v.test(chr)) {
        continue;
      }
      R.push(chr);
    }
    return urge('Ωbsk__41', rpr(R.join('')));
  };

  //===========================================================================================================
  demo_hollerith_vdx_sortkey = function() {
    var C, VDX, Vindex, constants, decodeBigInt, encodeBigInt, internals;
    /* vectorial index, a.k.a. 'vindex', a.k.a. VDX, next version of VNR as implemented in `hollerith-codec`
     */
    //=========================================================================================================
    ({encodeBigInt, decodeBigInt} = TMP_require_encode_in_alphabet());
    //---------------------------------------------------------------------------------------------------------
    constants = C = Object.freeze({
      max_integer: Number.MAX_SAFE_INTEGER,
      min_integer: Number.MIN_SAFE_INTEGER,
      zpuns: 'ãäåæçèéêëìíîïðñòóôõö÷', // zero and positive uniliteral numbers
      nuns: 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ', // negative          uniliteral numbers
      zpun_max: +20,
      nun_min: -20,
      base128: '!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`' + 'abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ',
      pmag: ' øùúûüýþÿ', // positive 'magnifier' for 1 to 8 positive digits
      nmag: ' ÎÍÌËÊÉÈÇ', // negative 'magnifier' for 1 to 8 negative digits
      nlead_re: /^2Æ*/ // 'negative leader', discardable leading digits of lifted negative numbers
    });
    
    //---------------------------------------------------------------------------------------------------------
    internals = Object.freeze({constants});
    //=========================================================================================================
    Vindex = class Vindex {
      //-------------------------------------------------------------------------------------------------------
      encode(integer_or_list) {
        var n, type;
        /* TAINT use proper validation */
        if (Array.isArray(integer_or_list)) {
          return ((function() {
            var i, len, results;
            results = [];
            for (i = 0, len = integer_or_list.length; i < len; i++) {
              n = integer_or_list[i];
              results.push(this.encode(n));
            }
            return results;
          }).call(this)).join('');
        }
        //.....................................................................................................
        n = integer_or_list;
        if (!Number.isFinite(n)) {
          type = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
          throw new Error(`Ωvdx__42 expected a float, got a ${type}`);
        }
        if (!((C.min_integer <= n && n <= C.max_integer))) {
          throw new Error(`Ωvdx__43 expected a float between ${C.min_integer} and ${C.max_integer}, got ${n}`);
        }
        //.....................................................................................................
        return this.encode_integer(n);
      }

      //-------------------------------------------------------------------------------------------------------
      encode_integer(n) {
        var R;
        if ((0 <= n && n <= C.zpun_max)) {
          /* NOTE call only where assured `n` is integer within magnitude of `Number.MAX_SAFE_INTEGER` */
          //.....................................................................................................
          // Zero or small positive:
          return C.zpuns.at(n);
        }
        if ((C.nun_min <= n && n < 0)) {
          //.....................................................................................................
          // Small negative:
          return C.nuns.at(n);
        }
        //.....................................................................................................
        // Big positive:
        if (n > C.zpun_max) {
          R = encodeBigInt(n, C.base128);
          return (C.pmag.at(R.length)) + R;
        }
        //.....................................................................................................
        // Big negative:
        R = (encodeBigInt(n + C.max_integer, C.base128)).replace(C.nlead_re, '');
        return (C.nmag.at(R.length)) + R;
      }

    };
    //---------------------------------------------------------------------------------------------------------
    VDX = new Vindex();
    help('Ωbsk__44', VDX.encode_integer(0));
    help('Ωbsk__45', VDX.encode_integer(-1));
    help('Ωbsk__46', VDX.encode_integer(+1));
    help('Ωbsk__47', VDX.encode_integer(10));
    help('Ωbsk__48', VDX.encode_integer(20));
    help('Ωbsk__49', VDX.encode_integer(21));
    help('Ωbsk__50', VDX.encode_integer(100));
    help('Ωbsk__51', VDX.encode_integer(127));
    help('Ωbsk__52', VDX.encode_integer(128));
    help('Ωbsk__53', VDX.encode_integer(129));
    help('Ωbsk__54', VDX.encode_integer(+123456789012345));
    help('Ωbsk__55', VDX.encode_integer(C.max_integer));
    info('Ωbsk__56');
    help('Ωbsk__57', VDX.encode_integer(-10));
    help('Ωbsk__58', VDX.encode_integer(-20));
    help('Ωbsk__59', VDX.encode_integer(-21));
    help('Ωbsk__60', VDX.encode_integer(-100));
    help('Ωbsk__61', VDX.encode_integer(-127));
    help('Ωbsk__62', VDX.encode_integer(-128));
    help('Ωbsk__63', VDX.encode_integer(-129));
    help('Ωbsk__64', VDX.encode_integer(-1000));
    help('Ωbsk__65', VDX.encode_integer(-10000));
    help('Ωbsk__66', VDX.encode_integer(-100000));
    help('Ωbsk__67', VDX.encode_integer(-1000000));
    help('Ωbsk__68', VDX.encode_integer(-10000000));
    help('Ωbsk__69', VDX.encode_integer(-100000000));
    help('Ωbsk__70', VDX.encode_integer(-1000000000));
    help('Ωbsk__71', VDX.encode_integer(-10000000000));
    help('Ωbsk__72', VDX.encode_integer(-100000000000));
    help('Ωbsk__73', VDX.encode_integer(-1000000000000));
    help('Ωbsk__74', VDX.encode_integer(-10000000000000));
    help('Ωbsk__75', VDX.encode_integer(-100000000000000));
    help('Ωbsk__76', VDX.encode_integer(-123456789012345));
    help('Ωbsk__77', VDX.encode_integer(C.min_integer));
    help('Ωbsk__78', VDX.encode_integer(C.min_integer + 1));
    help('Ωbsk__79', VDX.encode_integer(C.min_integer + 2));
    help('Ωbsk__80', VDX.encode_integer(C.min_integer + 3));
    info('Ωbsk__81');
    help('Ωbsk__82', VDX.encode([1, 2, 3, 100]));
    //---------------------------------------------------------------------------------------------------------
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      demo_binary_lexicographic_sortkey();
      demo_chatgpt_solution();
      demo_hollerith_vdx_sortkey();
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tYmluYXJ5LWxleGljb2dyYXBoaWMtc29ydGtleS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBQTtBQUFBLE1BQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSw4QkFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxpQ0FBQSxFQUFBLHFCQUFBLEVBQUEsMEJBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLDJCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxJQVJGLEVBU0UsR0FURixFQVVFLElBVkYsRUFXRSxPQVhGLEVBWUUsR0FaRixDQUFBLEdBWTRCLEdBQUcsQ0FBQyxHQVpoQzs7RUFhQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQTFCQTs7Ozs7Ozs7Ozs7Ozs7RUF1Q0Es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Y2VzQ29udGVudCI6WyJcblxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2RlbW8tYnVpbGQtdW5pY29kZS1yYW5nZXMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgbGltZVxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxuIyB7IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuIyBHVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbiMgeyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbiMgbWtkaXJwICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ21rZGlycCdcbiMgZW52X3BhdGhzICAgICAgICAgICAgICAgICA9ICggcmVxdWlyZSAnZW52LXBhdGhzJyApLmRlZmF1bHQgJ2RlbW8tbm9kZS1zcWxpdGUnXG4jIFNRTElURSAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnNxbGl0ZSdcbiMgUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiMgeyBTUUwgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZGJheSdcbiMgeyBkZWZhdWx0OiBcXFxuIyAgIG9uX3Byb2Nlc3NfZXhpdCwgICAgICB9ID0gcmVxdWlyZSAnZXhpdC1ob29rJ1xuIyBGUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xueyBoaWRlLFxuICBzZXRfZ2V0dGVyLCAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX21hbmFnZWRfcHJvcGVydHlfdG9vbHMoKVxueyB0aW1laXQsICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2JlbmNobWFya2luZygpXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9fYmluYXJ5X2xleGljb2dyYXBoaWNfc29ydGtleSA9ID0+XG4gICMjIyBpbnNwaXJlZCBieSAmIHRoeCB0byBodHRwczovL3N0YXRlbHkuY2xvdWQvYmxvZy9lbmNvZGluZy1zb3J0YWJsZS1iaW5hcnktZGF0YWJhc2Uta2V5cy8gIyMjXG4gIGQgPVxuICAgIEswMDA6ICAgICAgICdbIC05OTksICAgICAgICAgICBdIDEnXG4gICAgTDAwOiAgICAgICAgJ1sgIC05OSwgICAgICAgICAgIF0gMidcbiAgICBMMDk6ICAgICAgICAnWyAgLTkwLCAgICAgICAgICAgXSAzJ1xuICAgIEw4ODogICAgICAgICdbICAtMTEsICAgICAgICAgICBdIDQnXG4gICAgTDg5OiAgICAgICAgJ1sgIC0xMCwgICAgICAgICAgIF0gNSdcbiAgICBNMDogICAgICAgICAnWyAgIC05LCAgICAgICAgICAgXSA2J1xuICAgIE0xOiAgICAgICAgICdbICAgLTgsICAgICAgICAgICBdIDcnXG4gICAgTTI6ICAgICAgICAgJ1sgICAtNywgICAgICAgICAgIF0gOCdcbiAgICBNMzogICAgICAgICAnWyAgIC02LCAgICAgICAgICAgXSA5J1xuICAgIE00OiAgICAgICAgICdbICAgLTUsICAgICAgICAgICBdIDEwJ1xuICAgIE01OiAgICAgICAgICdbICAgLTQsICAgICAgICAgICBdIDExJ1xuICAgIE02OiAgICAgICAgICdbICAgLTMsICAgICAgICAgICBdIDEyJ1xuICAgIE03OiAgICAgICAgICdbICAgLTIsICAgICAgICAgICBdIDEzJ1xuICAgIE04OiAgICAgICAgICdbICAgLTEsICAgICAgICAgICBdIDE0J1xuICAgIE5MMjA6ICAgICAgICdbICAgKzAsICAtMjAsICAgICBdIDE1J1xuICAgIE46ICAgICAgICAgICdbICAgKzAsICAgICAgICAgICBdIDE2J1xuICAgIE5QMjA6ICAgICAgICdbICAgKzAsICArMjAsICAgICBdIDE3J1xuICAgIE85OiAgICAgICAgICdbICAgKzksICAgICAgICAgICBdIDE4J1xuICAgIFAxME02OiAgICAgICdbICArMTAsICAgLTMsICAgICBdIDE5J1xuICAgIFAxME03OiAgICAgICdbICArMTAsICAgLTIsICAgICBdIDIwJ1xuICAgIFAxME04OiAgICAgICdbICArMTAsICAgLTEsICAgICBdIDIxJ1xuICAgIFAxMDogICAgICAgICdbICArMTAsICAgICAgICAgICBdIDIyJ1xuICAgIFAxME46ICAgICAgICdbICArMTAsICAgKzAsICAgICBdIDIzJ1xuICAgIFAxME8xOiAgICAgICdbICArMTAsICAgKzEsICAgICBdIDI0J1xuICAgIFAxMFAxME04OiAgICdbICArMTAsICArMTAsIC0xLCBdIDI1J1xuICAgIFAxMFAxMDogICAgICdbICArMTAsICArMTAsICAgICBdIDI2J1xuICAgIFAxMFAyMDogICAgICdbICArMTAsICArMjAsICAgICBdIDI3J1xuICAgIFAyMDogICAgICAgICdbICArMjAsICAgICAgICAgICBdIDI4J1xuICAgIFAyMFAxMDogICAgICdbICArMjAsICArMTAsICAgICBdIDI5J1xuICAgIFA5MDogICAgICAgICdbICArOTAsICAgICAgICAgICBdIDMwJ1xuICAgIFE5MDA6ICAgICAgICdbICs5MDAsICAgICAgICAgICBdIDMxJ1xuXG4gICAgIyBpZGVudGljYWwgYi9jIG9mIHBhZGRpbmc6XG4gICAgIyBQMTA6ICAgICAgICAnWyAgKzEwLCAgICAgICBdIDI0J1xuICAgICMgUDEwTjogICAgICAnWyAgKzEwLCAgICswLCBdIDI1J1xuXG4gIG1heF9sZW5ndGggID0gIE1hdGgubWF4ICggay5sZW5ndGggZm9yIGsgaW4gT2JqZWN0LmtleXMgZCApLi4uXG4gICMjIyB0cmFpbGVyIGNhbiBiZSBvZiBmaXhlZCBsZW5ndGggc2luY2UgdGhlcmUgaXMgYW4gdXBwZXIgbGltaXQgdG8gZGlnaXQgcG9zaXRpb25zIGdpdmVuIGJ5XG4gIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIGFzIHJlcHJlc2VudGVkIGluIHRoZSBiYXNlIG9mIGNob2ljZSAoaGVyZSAxMCkgdGltZXMgdGhlIG1heGltdW0gbnVtYmVyIG9mXG4gIGRpbWVuc2lvbnMgb2YgdGhlIFZOUjogIyMjXG4gIHRyYWlsZXIgICAgID0gJ05OTk5OTk5OTk5OJ1xuICBkZWJ1ZyAnzqlic2tfX18xJywgeyBtYXhfbGVuZ3RoLCB9XG4gICMgZDEgPSBPYmplY3QuZnJvbUVudHJpZXMgKCBbICggay5wYWRFbmQgbWF4X2xlbmd0aCwgJ04nICksIHYsIF0gZm9yIGssIHYgb2YgZCApXG4gICMgZDEgPSBPYmplY3QuZnJvbUVudHJpZXMgKCBbICggayArIHRyYWlsZXIgKSwgdiwgXSBmb3IgaywgdiBvZiBkIClcbiAga2V5cyAgICAgICAgPSAoIGsgZm9yIFsgc2ssIGssIF0gaW4gKCBbIGsgKyB0cmFpbGVyLCBrLCBdIGZvciBrIG9mIGQgKS5zb3J0KCkgKVxuICBmb3Iga2V5IGluIGtleXNcbiAgICBrID0gbGltZSByZXZlcnNlIGZcIiAje2tleX06PjEwYzsgXCJcbiAgICB2ID0gZ29sZCByZXZlcnNlIGZcIiAje2RbIGtleSBdfTo8MzBjOyBcIlxuICAgIHEgPSBrZXkucmVwbGFjZSAvKFtBLVpdKVswLTldKi9nLCAnJDEnXG4gICAgcSA9IHEubGVuZ3RoXG4gICAgaGVscCAnzqlic2tfX18yJywgXCIje2t9I3t2fSAje3F9XCJcbiAgcmVmMCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIGYgPSAoIG4gKSAtPlxuICAgIHJldHVybiBbICAwLCAnTicsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIGlmIG4gaXMgMFxuICAgIHJldHVybiBbICsxLCAoICAgICAgICAgICAgbi50b1N0cmluZyAzMiApLnRvTG93ZXJDYXNlKCksICBdIGlmIG4gPiAwXG4gICAgcmV0dXJuIFsgLTEsICggKCByZWYwICsgbiApLnRvU3RyaW5nIDMyICkudG9Mb3dlckNhc2UoKS5yZXBsYWNlIC9eN1YqL2ksICcnLCAgXVxuICAgICMgMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTFcbiAgTiA9ICdOJy5jb2RlUG9pbnRBdCAwXG4gIGcgPSAoIG4gKSAtPlxuICAgIFsgc2lnbiwgbnJwciwgXSA9IGYgblxuICAgIHJldHVybiBucnByIGlmIHNpZ24gaXMgMFxuICAgIHJldHVybiAoIFN0cmluZy5mcm9tQ29kZVBvaW50IE4gKyBucnByLmxlbmd0aCApICsgbnJwciBpZiBzaWduIGlzICsxXG4gICAgcmV0dXJuICggU3RyaW5nLmZyb21Db2RlUG9pbnQgTiAtIG5ycHIubGVuZ3RoICkgKyBucnByXG4gIGluZm8gJ86pYnNrX19fMycsICcwICAgICAnLCAoIGYgMCAgICAgICksICggZyAwICAgICAgKVxuICBpbmZvICfOqWJza19fXzQnLCAnMSAgICAgJywgKCBmIDEgICAgICApLCAoIGcgMSAgICAgIClcbiAgaW5mbyAnzqlic2tfX181JywgJzIgICAgICcsICggZiAyICAgICAgKSwgKCBnIDIgICAgICApXG4gIGluZm8gJ86pYnNrX19fNicsICczMSAgICAnLCAoIGYgMzEgICAgICksICggZyAzMSAgICAgKVxuICBpbmZvICfOqWJza19fXzcnLCAnMzIgICAgJywgKCBmIDMyICAgICApLCAoIGcgMzIgICAgIClcbiAgaW5mbyAnzqlic2tfX184JywgJzMzICAgICcsICggZiAzMyAgICAgKSwgKCBnIDMzICAgICApXG4gIGluZm8gJ86pYnNrX19fOScsICctMSAgICAnLCAoIGYgLTEgICAgICksICggZyAtMSAgICAgKVxuICBpbmZvICfOqWJza19fMTAnLCAnLTMxICAgJywgKCBmIC0zMSAgICApLCAoIGcgLTMxICAgIClcbiAgaW5mbyAnzqlic2tfXzExJywgJy0zMiAgICcsICggZiAtMzIgICAgKSwgKCBnIC0zMiAgICApXG4gIGluZm8gJ86pYnNrX18xMicsICctMzI3NjcnLCAoIGYgLTMyNzY3ICksICggZyAtMzI3NjcgKVxuICBpbmZvICfOqWJza19fMTMnLCAnLTMyNzY4JywgKCBmIC0zMjc2OCApLCAoIGcgLTMyNzY4IClcbiAgaW5mbyAnzqlic2tfXzE0JywgJy0zMjc2OScsICggZiAtMzI3NjkgKSwgKCBnIC0zMjc2OSApXG5cbiAgIyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUi50b1N0cmluZyAzMlxuICAjICc3dnZ2dnZ2dnZ2didcblxuICAjIyNcblxuICAjIFZlY3RvcmlhbCBOdW1iZXJzIChWTlJzKSB0byBUcmFuc2Zvcm0gVGV4dCBhbmQgS2VlcCBJdFxuXG5cbiAgWCBbIDEwLCAzMiwgXSBgVGhlIHJlYWRpbmcgb2Yg5qiCIGlzIDxweS95dWU0LyBmb3IgPGdsb3NzL211c2ljLyBvciA8cHkvbGU0LyBtZWFuaW5nIDxnbG9zcy9qb3kvLmBcbiAgXyBbIDEwLCAzMiwgIDEsICAgIF0gYFRoZSByZWFkaW5nIG9mIOaogiBpcyBgXG4gIFggWyAxMCwgMzIsICAyLCAgICBdIGA8cHkvYFxuICBYIFsgMTAsIDMyLCAgMywgICAgXSBgeXVlNGBcbiAgXyBbIDEwLCAzMiwgIDMsIDEsIF0gYDxzcGFuIGNsYXNzPXBpbnlpbj55dcOoPC9zcGFuPmBcbiAgWCBbIDEwLCAzMiwgIDQsICAgIF0gYC9gXG4gIF8gWyAxMCwgMzIsICA1LCAgICBdIGAgZm9yIGBcbiAgWCBbIDEwLCAzMiwgIDYsICAgIF0gYDxnbG9zcy9gXG4gIFggWyAxMCwgMzIsICA3LCAgICBdIGBtdXNpY2BcbiAgXyBbIDEwLCAzMiwgIDcsIDEsIF0gYDxzcGFuIGNsYXNzPWdsb3NzPm11c2ljPC9zcGFuPmBcbiAgWCBbIDEwLCAzMiwgIDgsICAgIF0gYC9gXG4gIF8gWyAxMCwgMzIsICA5LCAgICBdIGAgb3IgYFxuICBYIFsgMTAsIDMyLCAxMCwgICAgXSBgPHB5L2BcbiAgWCBbIDEwLCAzMiwgMTEsICAgIF0gYGxlNGBcbiAgXyBbIDEwLCAzMiwgMTEsIDEsIF0gYDxzcGFuIGNsYXNzPXBpbnlpbj5sw6g8L3NwYW4+YFxuICBfIFsgMTAsIDMyLCAxMiwgICAgXSBgIG1lYW5pbmcgYFxuICBYIFsgMTAsIDMyLCAxMywgICAgXSBgPGdsb3NzL2BcbiAgWCBbIDEwLCAzMiwgMTQsICAgIF0gYGpveWBcbiAgXyBbIDEwLCAzMiwgMTQsIDEsIF0gYDxzcGFuIGNsYXNzPWdsb3NzPmpveTwvc3Bhbj5gXG4gIFggWyAxMCwgMzIsIDE1LCAgICBdIGAvYFxuICBfIFsgMTAsIDMyLCAxNiwgICAgXSBgLlxcbmBcblxuICBOT1RFIGNvdWxkJ3ZlIHJhdGhlciBzdXJyb3VuZGVkIGdsb3NzZXM6XG5cbiAgWCBbIDEwLCAzMiwgMTMsICAgIF0gYDxnbG9zcy9gXG4gIF8gWyAxMCwgMzIsIDE0LCAtMSxdIGA8c3BhbiBjbGFzcz1nbG9zcz5gXG4gIF8gWyAxMCwgMzIsIDE0LCAgICBdIGBqb3lgXG4gIF8gWyAxMCwgMzIsIDE0LCAxLCBdIGA8L3NwYW4+YFxuICBYIFsgMTAsIDMyLCAxNSwgICAgXSBgL2BcblxuICAjIyNcblxuXG4gIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuVE1QX3JlcXVpcmVfZW5jb2RlX2luX2FscGhhYmV0ID0gLT5cbiAgYGBgXG4gIGZ1bmN0aW9uIGVuY29kZUJpZ0ludChudW0sIGFscGhhYmV0KSB7XG4gICAgaWYgKHR5cGVvZiBudW0gPT09IFwibnVtYmVyXCIpIG51bSA9IEJpZ0ludChudW0pO1xuICAgIGlmIChudW0gPCAwbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJPbmx5IG5vbm5lZ2F0aXZlIGludGVnZXJzIHN1cHBvcnRlZFwiKTtcbiAgICBpZiAobnVtID09PSAwbikgcmV0dXJuIGFscGhhYmV0WzBdO1xuXG4gICAgY29uc3QgYmFzZSA9IEJpZ0ludChhbHBoYWJldC5sZW5ndGgpO1xuICAgIGxldCByZXN1bHQgPSBcIlwiO1xuXG4gICAgd2hpbGUgKG51bSA+IDBuKSB7XG4gICAgICBjb25zdCByZW0gPSBudW0gJSBiYXNlO1xuICAgICAgcmVzdWx0ID0gYWxwaGFiZXRbTnVtYmVyKHJlbSldICsgcmVzdWx0O1xuICAgICAgbnVtID0gbnVtIC8gYmFzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlQmlnSW50KHN0ciwgYWxwaGFiZXQpIHtcbiAgICBjb25zdCBiYXNlID0gQmlnSW50KGFscGhhYmV0Lmxlbmd0aCk7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcChhbHBoYWJldC5zcGxpdChcIlwiKS5tYXAoKGNoLCBpKSA9PiBbY2gsIEJpZ0ludChpKV0pKTtcblxuICAgIGxldCBudW0gPSAwbjtcbiAgICBmb3IgKGNvbnN0IGNoIG9mIHN0cikge1xuICAgICAgY29uc3QgdmFsID0gbWFwLmdldChjaCk7XG4gICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjaGFyYWN0ZXI6ICR7Y2h9YCk7XG4gICAgICBudW0gPSBudW0gKiBiYXNlICsgdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBudW07XG4gIH1cbiAgYGBgXG4gIHJldHVybiB7IGVuY29kZUJpZ0ludCwgZGVjb2RlQmlnSW50LCB9XG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19jaGF0Z3B0X3NvbHV0aW9uID0gLT5cbiAgeyBlbmNvZGVCaWdJbnQsXG4gICAgZGVjb2RlQmlnSW50LCAgIH0gPSBUTVBfcmVxdWlyZV9lbmNvZGVfaW5fYWxwaGFiZXQoKVxuICB1cmdlICfOqWJza19fMTUnLCBlbmNvZGVCaWdJbnQgMTIzNDU2NzgsICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eidcbiAgIyB1cmdlICfOqWJza19fMTYnLCBycHIgZW5jb2RlQmlnSW50IDEwMG4sICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6wqrCtcK6w4DDgcOCw4PDhMOFw4bDh8OIw4nDisOLw4zDjcOOw4/DkMORw5LDk8OUw5XDlsOYw5nDmsObw5zDncOew5/DoMOhw6LDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7jDucO6w7vDvMO9w77Dv8SAxIHEgsSDxITEhcSGxIfEiMSJxIrEi8SMxI3EjsSPxJDEkcSSxJPElMSVxJbEl8SYxJnEmsSbxJzEncSexJ/EoMShxKLEo8SkxKXEpsSnxKjEqcSqxKvErMStxK7Er8SwxLHEssSzxLTEtcS2xLfEuMS5xLrEu8S8xL3EvsS/xYDFgcWCxYPFhMWFxYbFh8WIxYnFisWLxYzFjcWOxY/FkMWRxZLFk8WUxZXFlsWXxZjFmcWaxZvFnMWdxZ7Fn8WgxaHFosWjxaTFpcWmxafFqMWpxarFq8Wsxa3FrsWvxbDFscWyxbPFtMW1xbbFt8W4xbnFusW7xbzFvcW+xb/GgMaBxoLGg8aExoXGhsaHxojGicaKxovGjMaNxo7Gj8aQxpHGksaTxpTGlcaWxpfGmMaZxprGm8acxp3GnsafxqDGocaixqPGpMalxqbGp8aoxqnGqsarxqzGrcauxq/GsMaxxrLGs8a0xrXGtsa3xrjGuca6xrvGvMa9xr7Gv8eAx4HHgseDx4THhceGx4fHiMeJx4rHi8eMx43HjsePx5DHkceSx5PHlMeVx5bHl8eYx5nHmsebx5zHnceex5/HoMehx6LHo8ekx6XHpsenx6jHqceqx6vHrMetx67Hr8ewx7HHssezx7THtce2x7fHuMe5x7rHu8e8x73Hvse/yIDIgciCyIPIhMiFyIbIh8iIyInIisiLyIzIjciOyI/IkMiRyJLIk8iUyJXIlsiXyJjImciayJvInMidyJ7In8igyKHIosijyKTIpcimyKfIqMipyKrIq8isyK3IrsivyLDIsciyyLPItMi1yLbIt8i4yLnIusi7yLzIvci+yL/JgMmByYLJg8mEyYXJhsmHyYjJicmKyYvJjMmNyY7Jj8mQyZHJksmTyZTJlcmWyZfJmMmZyZrJm8mcyZ3JnsmfyaDJocmiyaPJpMmlyabJp8moyanJqsmryazJrcmuya/JsMmxybLJs8m0ybXJtsm3ybjJucm6ybvJvMm9yb7Jv8qAyoHKgsqDyoTKhcqGyofKiMqJyorKi8qMyo3KjsqPypDKkcqSypPKlMqVypbKl8qYypnKmsqbypzKncqeyp/KoMqhyqLKo8qkyqXKpsqnyqjKqcqqyqvKrMqtyq7Kr8qwyrHKssqzyrTKtcq2yrfKuMq5yrrKu8q8yr3Kvsq/y4DLgcuGy4fLiMuJy4rLi8uMy43LjsuPy5DLkcugy6HLosujy6TLrMuuzbDNsc2yzbPNtM22zbfNus27zbzNvc2/zobOiM6JzorOjM6Ozo/OkM6RzpLOk86UzpXOls6XzpjOmc6azpvOnM6dzp7On86gzqHOo86kzqXOps6nzqjOqc6qzqvOrM6tzq7Or86wzrHOss6zzrTOtc62zrfOuM65zrrOu868zr3Ovs6/z4DPgc+Cz4PPhM+Fz4bPh8+Iz4nPis+Lz4zPjc+Oz4/PkM+Rz5LPk8+Uz5XPls+Xz5jPmc+az5vPnM+dz57Pn8+gz6HPos+jz6TPpc+mz6fPqCdcbiAgIyB1cmdlICfOqWJza19fMTcnLCBycHIgZW5jb2RlQmlnSW50IDEwMDBuLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5esKqwrXCusOAw4HDgsODw4TDhcOGw4fDiMOJw4rDi8OMw43DjsOPw5DDkcOSw5PDlMOVw5bDmMOZw5rDm8Ocw53DnsOfw6DDocOiw6PDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO4w7nDusO7w7zDvcO+w7/EgMSBxILEg8SExIXEhsSHxIjEicSKxIvEjMSNxI7Ej8SQxJHEksSTxJTElcSWxJfEmMSZxJrEm8ScxJ3EnsSfxKDEocSixKPEpMSlxKbEp8SoxKnEqsSrxKzErcSuxK/EsMSxxLLEs8S0xLXEtsS3xLjEucS6xLvEvMS9xL7Ev8WAxYHFgsWDxYTFhcWGxYfFiMWJxYrFi8WMxY3FjsWPxZDFkcWSxZPFlMWVxZbFl8WYxZnFmsWbxZzFncWexZ/FoMWhxaLFo8WkxaXFpsWnxajFqcWqxavFrMWtxa7Fr8WwxbHFssWzxbTFtcW2xbfFuMW5xbrFu8W8xb3FvsW/xoDGgcaCxoPGhMaFxobGh8aIxonGisaLxozGjcaOxo/GkMaRxpLGk8aUxpXGlsaXxpjGmcaaxpvGnMadxp7Gn8agxqHGosajxqTGpcamxqfGqMapxqrGq8asxq3GrsavxrDGscayxrPGtMa1xrbGt8a4xrnGusa7xrzGvca+xr/HgMeBx4LHg8eEx4XHhseHx4jHiceKx4vHjMeNx47Hj8eQx5HHkseTx5THlceWx5fHmMeZx5rHm8ecx53Hnsefx6DHoceix6PHpMelx6bHp8eox6nHqserx6zHrceux6/HsMexx7LHs8e0x7XHtse3x7jHuce6x7vHvMe9x77Hv8iAyIHIgsiDyITIhciGyIfIiMiJyIrIi8iMyI3IjsiPyJDIkciSyJPIlMiVyJbIl8iYyJnImsibyJzIncieyJ/IoMihyKLIo8ikyKXIpsinyKjIqciqyKvIrMityK7Ir8iwyLHIssizyLTItci2yLfIuMi5yLrIu8i8yL3Ivsi/yYDJgcmCyYPJhMmFyYbJh8mIyYnJismLyYzJjcmOyY/JkMmRyZLJk8mUyZXJlsmXyZjJmcmayZvJnMmdyZ7Jn8mgyaHJosmjyaTJpcmmyafJqMmpyarJq8msya3JrsmvybDJscmyybPJtMm1ybbJt8m4ybnJusm7ybzJvcm+yb/KgMqByoLKg8qEyoXKhsqHyojKicqKyovKjMqNyo7Kj8qQypHKksqTypTKlcqWypfKmMqZyprKm8qcyp3KnsqfyqDKocqiyqPKpMqlyqbKp8qoyqnKqsqryqzKrcquyq/KsMqxyrLKs8q0yrXKtsq3yrjKucq6yrvKvMq9yr7Kv8uAy4HLhsuHy4jLicuKy4vLjMuNy47Lj8uQy5HLoMuhy6LLo8uky6zLrs2wzbHNss2zzbTNts23zbrNu828zb3Nv86GzojOic6KzozOjs6PzpDOkc6SzpPOlM6VzpbOl86YzpnOms6bzpzOnc6ezp/OoM6hzqPOpM6lzqbOp86ozqnOqs6rzqzOrc6uzq/OsM6xzrLOs860zrXOts63zrjOuc66zrvOvM69zr7Ov8+Az4HPgs+Dz4TPhc+Gz4fPiM+Jz4rPi8+Mz43Pjs+Pz5DPkc+Sz5PPlM+Vz5bPl8+Yz5nPms+bz5zPnc+ez5/PoM+hz6LPo8+kz6XPps+nz6gnXG4gICMgdXJnZSAnzqlic2tfXzE4JywgcnByIGVuY29kZUJpZ0ludCAxMDAwMG4sICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6wqrCtcK6w4DDgcOCw4PDhMOFw4bDh8OIw4nDisOLw4zDjcOOw4/DkMORw5LDk8OUw5XDlsOYw5nDmsObw5zDncOew5/DoMOhw6LDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7jDucO6w7vDvMO9w77Dv8SAxIHEgsSDxITEhcSGxIfEiMSJxIrEi8SMxI3EjsSPxJDEkcSSxJPElMSVxJbEl8SYxJnEmsSbxJzEncSexJ/EoMShxKLEo8SkxKXEpsSnxKjEqcSqxKvErMStxK7Er8SwxLHEssSzxLTEtcS2xLfEuMS5xLrEu8S8xL3EvsS/xYDFgcWCxYPFhMWFxYbFh8WIxYnFisWLxYzFjcWOxY/FkMWRxZLFk8WUxZXFlsWXxZjFmcWaxZvFnMWdxZ7Fn8WgxaHFosWjxaTFpcWmxafFqMWpxarFq8Wsxa3FrsWvxbDFscWyxbPFtMW1xbbFt8W4xbnFusW7xbzFvcW+xb/GgMaBxoLGg8aExoXGhsaHxojGicaKxovGjMaNxo7Gj8aQxpHGksaTxpTGlcaWxpfGmMaZxprGm8acxp3GnsafxqDGocaixqPGpMalxqbGp8aoxqnGqsarxqzGrcauxq/GsMaxxrLGs8a0xrXGtsa3xrjGuca6xrvGvMa9xr7Gv8eAx4HHgseDx4THhceGx4fHiMeJx4rHi8eMx43HjsePx5DHkceSx5PHlMeVx5bHl8eYx5nHmsebx5zHnceex5/HoMehx6LHo8ekx6XHpsenx6jHqceqx6vHrMetx67Hr8ewx7HHssezx7THtce2x7fHuMe5x7rHu8e8x73Hvse/yIDIgciCyIPIhMiFyIbIh8iIyInIisiLyIzIjciOyI/IkMiRyJLIk8iUyJXIlsiXyJjImciayJvInMidyJ7In8igyKHIosijyKTIpcimyKfIqMipyKrIq8isyK3IrsivyLDIsciyyLPItMi1yLbIt8i4yLnIusi7yLzIvci+yL/JgMmByYLJg8mEyYXJhsmHyYjJicmKyYvJjMmNyY7Jj8mQyZHJksmTyZTJlcmWyZfJmMmZyZrJm8mcyZ3JnsmfyaDJocmiyaPJpMmlyabJp8moyanJqsmryazJrcmuya/JsMmxybLJs8m0ybXJtsm3ybjJucm6ybvJvMm9yb7Jv8qAyoHKgsqDyoTKhcqGyofKiMqJyorKi8qMyo3KjsqPypDKkcqSypPKlMqVypbKl8qYypnKmsqbypzKncqeyp/KoMqhyqLKo8qkyqXKpsqnyqjKqcqqyqvKrMqtyq7Kr8qwyrHKssqzyrTKtcq2yrfKuMq5yrrKu8q8yr3Kvsq/y4DLgcuGy4fLiMuJy4rLi8uMy43LjsuPy5DLkcugy6HLosujy6TLrMuuzbDNsc2yzbPNtM22zbfNus27zbzNvc2/zobOiM6JzorOjM6Ozo/OkM6RzpLOk86UzpXOls6XzpjOmc6azpvOnM6dzp7On86gzqHOo86kzqXOps6nzqjOqc6qzqvOrM6tzq7Or86wzrHOss6zzrTOtc62zrfOuM65zrrOu868zr3Ovs6/z4DPgc+Cz4PPhM+Fz4bPh8+Iz4nPis+Lz4zPjc+Oz4/PkM+Rz5LPk8+Uz5XPls+Xz5jPmc+az5vPnM+dz57Pn8+gz6HPos+jz6TPpc+mz6fPqCdcbiAgIyB1cmdlICfOqWJza19fMTknLCBycHIgZW5jb2RlQmlnSW50IDEwMDAwbiwgJ+KFoOKFoeKFouKFo+KFpOKFpeKFpuKFp+KFqOKFqeKFquKFq+KFrOKFreKFruKFrydcbiAgIyB1cmdlICfOqWJza19fMjAnLCBycHIgZW5jb2RlQmlnSW50IDEwMDAwbiwgJ+KRoOKRoeKRouKRo+KRpOKRpeKRpuKRp+KRqOKRqSdcbiAgIyB1cmdlICfOqWJza19fMjEnLCBycHIgZW5jb2RlQmlnSW50IDEsICfikojikonikorikovikoziko3iko7iko/ikpDikpEnXG4gICMgdXJnZSAnzqlic2tfXzIyJywgcnByIGVuY29kZUJpZ0ludCAyLCAn4pKI4pKJ4pKK4pKL4pKM4pKN4pKO4pKP4pKQ4pKRJ1xuICAjIHVyZ2UgJ86pYnNrX18yMycsIHJwciBlbmNvZGVCaWdJbnQgMTAsICfikojikonikorikovikoziko3iko7iko/ikpDikpEnXG4gICMgdXJnZSAnzqlic2tfXzI0JywgcnByIGVuY29kZUJpZ0ludCAxMCwgJ+K8gOK8geK8guK8g+K8hOK8heK8huK8h+K8iOK8ieK8iuK8i+K8jOK8jeK8juK8j+K8kOK8keK8kuK8k+K8lOK8leK8luK8l+K8mOK8meK8muK8m+K8nOK8neK8nuK8n+K8oOK8oeK8ouK8o+K8pOK8peK8puK8p+K8qOK8qeK8quK8q+K8rOK8reK8ruK8r+K8sOK8seK8suK8s+K8tOK8teK8tuK8t+K8uOK8ueK8uuK8u+K8vOK8veK8vuK8v+K9gOK9geK9guK9g+K9hOK9heK9huK9h+K9iOK9ieK9iuK9i+K9jOK9jeK9juK9j+K9kOK9keK9kuK9k+K9lOK9leK9luK9l+K9mOK9meK9muK9m+K9nOK9neK9nuK9n+K9oOK9oeK9ouK9o+K9pOK9peK9puK9p+K9qOK9qeK9quK9q+K9rOK9reK9ruK9r+K9sOK9seK9suK9s+K9tOK9teK9tuK9t+K9uOK9ueK9uuK9u+K9vOK9veK9vuK9v+K+gOK+geK+guK+g+K+hOK+heK+huK+h+K+iOK+ieK+iuK+i+K+jOK+jeK+juK+j+K+kOK+keK+kuK+k+K+lOK+leK+luK+l+K+mOK+meK+muK+m+K+nOK+neK+nuK+n+K+oOK+oeK+ouK+o+K+pOK+peK+puK+p+K+qOK+qeK+quK+q+K+rOK+reK+ruK+r+K+sOK+seK+suK+s+K+tOK+teK+tuK+t+K+uOK+ueK+uuK+u+K+vOK+veK+vuK+v+K/gOK/geK/guK/g+K/hOK/heK/huK/h+K/iOK/ieK/iuK/i+K/jOK/jeK/juK/j+K/kOK/keK/kuK/k+K/lOK/lSdcbiAgIyB1cmdlICfOqWJza19fMjUnLCBycHIgZW5jb2RlQmlnSW50IDEwMCwgJ+K8gOK8geK8guK8g+K8hOK8heK8huK8h+K8iOK8ieK8iuK8i+K8jOK8jeK8juK8j+K8kOK8keK8kuK8k+K8lOK8leK8luK8l+K8mOK8meK8muK8m+K8nOK8neK8nuK8n+K8oOK8oeK8ouK8o+K8pOK8peK8puK8p+K8qOK8qeK8quK8q+K8rOK8reK8ruK8r+K8sOK8seK8suK8s+K8tOK8teK8tuK8t+K8uOK8ueK8uuK8u+K8vOK8veK8vuK8v+K9gOK9geK9guK9g+K9hOK9heK9huK9h+K9iOK9ieK9iuK9i+K9jOK9jeK9juK9j+K9kOK9keK9kuK9k+K9lOK9leK9luK9l+K9mOK9meK9muK9m+K9nOK9neK9nuK9n+K9oOK9oeK9ouK9o+K9pOK9peK9puK9p+K9qOK9qeK9quK9q+K9rOK9reK9ruK9r+K9sOK9seK9suK9s+K9tOK9teK9tuK9t+K9uOK9ueK9uuK9u+K9vOK9veK9vuK9v+K+gOK+geK+guK+g+K+hOK+heK+huK+h+K+iOK+ieK+iuK+i+K+jOK+jeK+juK+j+K+kOK+keK+kuK+k+K+lOK+leK+luK+l+K+mOK+meK+muK+m+K+nOK+neK+nuK+n+K+oOK+oeK+ouK+o+K+pOK+peK+puK+p+K+qOK+qeK+quK+q+K+rOK+reK+ruK+r+K+sOK+seK+suK+s+K+tOK+teK+tuK+t+K+uOK+ueK+uuK+u+K+vOK+veK+vuK+v+K/gOK/geK/guK/g+K/hOK/heK/huK/h+K/iOK/ieK/iuK/i+K/jOK/jeK/juK/j+K/kOK/keK/kuK/k+K/lOK/lSdcbiAgIyB1cmdlICfOqWJza19fMjYnLCBycHIgZW5jb2RlQmlnSW50IDEwMDAsICfivIDivIHivILivIPivITivIXivIbivIfivIjivInivIrivIvivIzivI3ivI7ivI/ivJDivJHivJLivJPivJTivJXivJbivJfivJjivJnivJrivJvivJzivJ3ivJ7ivJ/ivKDivKHivKLivKPivKTivKXivKbivKfivKjivKnivKrivKvivKzivK3ivK7ivK/ivLDivLHivLLivLPivLTivLXivLbivLfivLjivLnivLrivLvivLzivL3ivL7ivL/ivYDivYHivYLivYPivYTivYXivYbivYfivYjivYnivYrivYvivYzivY3ivY7ivY/ivZDivZHivZLivZPivZTivZXivZbivZfivZjivZnivZrivZvivZzivZ3ivZ7ivZ/ivaDivaHivaLivaPivaTivaXivabivafivajivanivarivavivaziva3iva7iva/ivbDivbHivbLivbPivbTivbXivbbivbfivbjivbnivbrivbvivbzivb3ivb7ivb/ivoDivoHivoLivoPivoTivoXivobivofivojivonivorivovivozivo3ivo7ivo/ivpDivpHivpLivpPivpTivpXivpbivpfivpjivpnivprivpvivpzivp3ivp7ivp/ivqDivqHivqLivqPivqTivqXivqbivqfivqjivqnivqrivqvivqzivq3ivq7ivq/ivrDivrHivrLivrPivrTivrXivrbivrfivrjivrnivrrivrvivrzivr3ivr7ivr/iv4Div4Hiv4Liv4Piv4Tiv4Xiv4biv4fiv4jiv4niv4riv4viv4ziv43iv47iv4/iv5Div5Hiv5Liv5Piv5Tiv5UnXG4gICMgdXJnZSAnzqlic2tfXzI3JywgcnByIGVuY29kZUJpZ0ludCAxMDAwMCwgJ+K8gOK8geK8guK8g+K8hOK8heK8huK8h+K8iOK8ieK8iuK8i+K8jOK8jeK8juK8j+K8kOK8keK8kuK8k+K8lOK8leK8luK8l+K8mOK8meK8muK8m+K8nOK8neK8nuK8n+K8oOK8oeK8ouK8o+K8pOK8peK8puK8p+K8qOK8qeK8quK8q+K8rOK8reK8ruK8r+K8sOK8seK8suK8s+K8tOK8teK8tuK8t+K8uOK8ueK8uuK8u+K8vOK8veK8vuK8v+K9gOK9geK9guK9g+K9hOK9heK9huK9h+K9iOK9ieK9iuK9i+K9jOK9jeK9juK9j+K9kOK9keK9kuK9k+K9lOK9leK9luK9l+K9mOK9meK9muK9m+K9nOK9neK9nuK9n+K9oOK9oeK9ouK9o+K9pOK9peK9puK9p+K9qOK9qeK9quK9q+K9rOK9reK9ruK9r+K9sOK9seK9suK9s+K9tOK9teK9tuK9t+K9uOK9ueK9uuK9u+K9vOK9veK9vuK9v+K+gOK+geK+guK+g+K+hOK+heK+huK+h+K+iOK+ieK+iuK+i+K+jOK+jeK+juK+j+K+kOK+keK+kuK+k+K+lOK+leK+luK+l+K+mOK+meK+muK+m+K+nOK+neK+nuK+n+K+oOK+oeK+ouK+o+K+pOK+peK+puK+p+K+qOK+qeK+quK+q+K+rOK+reK+ruK+r+K+sOK+seK+suK+s+K+tOK+teK+tuK+t+K+uOK+ueK+uuK+u+K+vOK+veK+vuK+v+K/gOK/geK/guK/g+K/hOK/heK/huK/h+K/iOK/ieK/iuK/i+K/jOK/jeK/juK/j+K/kOK/keK/kuK/k+K/lOK/lSdcbiAgIyB1cmdlICfOqWJza19fMjgnLCBycHIgZW5jb2RlQmlnSW50IDEwMDAwMCwgJ+K8gOK8geK8guK8g+K8hOK8heK8huK8h+K8iOK8ieK8iuK8i+K8jOK8jeK8juK8j+K8kOK8keK8kuK8k+K8lOK8leK8luK8l+K8mOK8meK8muK8m+K8nOK8neK8nuK8n+K8oOK8oeK8ouK8o+K8pOK8peK8puK8p+K8qOK8qeK8quK8q+K8rOK8reK8ruK8r+K8sOK8seK8suK8s+K8tOK8teK8tuK8t+K8uOK8ueK8uuK8u+K8vOK8veK8vuK8v+K9gOK9geK9guK9g+K9hOK9heK9huK9h+K9iOK9ieK9iuK9i+K9jOK9jeK9juK9j+K9kOK9keK9kuK9k+K9lOK9leK9luK9l+K9mOK9meK9muK9m+K9nOK9neK9nuK9n+K9oOK9oeK9ouK9o+K9pOK9peK9puK9p+K9qOK9qeK9quK9q+K9rOK9reK9ruK9r+K9sOK9seK9suK9s+K9tOK9teK9tuK9t+K9uOK9ueK9uuK9u+K9vOK9veK9vuK9v+K+gOK+geK+guK+g+K+hOK+heK+huK+h+K+iOK+ieK+iuK+i+K+jOK+jeK+juK+j+K+kOK+keK+kuK+k+K+lOK+leK+luK+l+K+mOK+meK+muK+m+K+nOK+neK+nuK+n+K+oOK+oeK+ouK+o+K+pOK+peK+puK+p+K+qOK+qeK+quK+q+K+rOK+reK+ruK+r+K+sOK+seK+suK+s+K+tOK+teK+tuK+t+K+uOK+ueK+uuK+u+K+vOK+veK+vuK+v+K/gOK/geK/guK/g+K/hOK/heK/huK/h+K/iOK/ieK/iuK/i+K/jOK/jeK/juK/j+K/kOK/keK/kuK/k+K/lOK/lSdcbiAgIyB1cmdlICfOqWJza19fMjknLCBycHIgZW5jb2RlQmlnSW50IDEwMDAwMCwgJ+OCouOCpOOCpuOCqOOCquOCq+OCreOCr+OCseOCsydcbiAgdXJnZSAnzqlic2tfXzMwJywgcnByIGVuY29kZUJpZ0ludCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgJycnIVwiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AJycnXG4gIHVyZ2UgJ86pYnNrX18zMScsIHJwciBlbmNvZGVCaWdJbnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsICchIyQlJigpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gYWJjJ1xuICB1cmdlICfOqWJza19fMzInLCBycHIgZW5jb2RlQmlnSW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAnISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fsKhwqLCo8KkwqXCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGw4fDiMOJw4rDi8OMw43DjsOPw5DDkcOSw5PDlMOVw5bDl8OYw5nDmsObw5zDncOew5/DoMOhw6LDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7fDuMO5w7rDu8O8w73DvsO/J1xuICB1cmdlICfOqWJza19fMzMnLCBycHIgZW5jb2RlQmlnSW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAnISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fsKhwqLCo8KkwqXCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGJ1xuICB1cmdlICfOqWJza19fMzQnLCBycHIgZW5jb2RlQmlnSW50IDAsICcwMSdcbiAgdXJnZSAnzqlic2tfXzM1JywgcnByIGVuY29kZUJpZ0ludCAxLCAnMDEnXG4gIHVyZ2UgJ86pYnNrX18zNicsIHJwciBlbmNvZGVCaWdJbnQgMiwgJzAxJ1xuICB1cmdlICfOqWJza19fMzcnLCBycHIgZW5jb2RlQmlnSW50IDMsICcwMSdcbiAgdXJnZSAnzqlic2tfXzM4JywgcnByIGVuY29kZUJpZ0ludCA3LCAnMDEnXG4gIHVyZ2UgJ86pYnNrX18zOScsIHJwciBlbmNvZGVCaWdJbnQgOCwgJzAxJ1xuICB1cmdlICfOqWJza19fNDAnLCBycHIgZW5jb2RlQmlnSW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAnMDEnXG4gICMgKzU3IGZyZWUgY29kZXBvaW50c1xuICAjICAtOCBwb3MgbmVnYXRpdmVcbiAgIyAgLTggcG9zIHBvc2l0aXZlXG4gICMgIC0xIHplcm9cbiAgIyDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcbiAgIyArNDAgZm9yXG4gICMgLTIwIG5lZ2F0aXZlIHNpbmdsZS1kaWdpdFxuICAjIC0yMCBwb3NpdGl2ZSBzaW5nbGUtZGlnaXRcbiAgIyAyw4bDhsOGw4bDhsOGw4ZcblxuICAjIyNcblxuXG4gICogZm9yIG51bWJlcnMgYC0yMCA8PSBuIDw9ICsyMGA6XG4gICAgKiBuZWdhdGl2ZSB1bmlsaXRlcmFsIG51bWJlcnMgICAgICAgICAgIChOVU5zKTogIC0yMCAuLiAgw4/DkMORw5LDk8OUw5XDlsOXw5jDmcOaw5vDnMOdw57Dn8Ogw6HDoiAuLiAtMVxuICAgICAgKiB1c2UgbmVnYXRpdmUgaW5kZXggd2l0aCBgYXRgIGluZGV4aW5nIGFzIGluIGBudW4uYXQgLTNgIHRvIGdldCBgw6BgIGZvciBgLTNgXG4gICAgKiB6ZXJvIHVuaWxpdGVyYWwgbnVtYmVyICAgICAgICAgICAgICAgIChaVU4pOiAgICDCsTAgLi4gIMOjXG4gICAgKiBwb3NpdGl2ZSB1bmlsaXRlcmFsIG51bWJlcnMgICAgICAgICAgIChQVU5zKTogICArMSAuLiAgw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtyAuLiArMjBcbiAgICAgICogdXNlIG5leHQgc3RlcFxuICAgICogemVybyBhbmQgcG9zaXRpdmUgdW5pbGl0ZXJhbCBudW1iZXJzICAoWlBVTnMpOiAgKzAgLi4gw6PDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO3IC4uICsyMFxuICAgICAgKiBwcmVwZW5kaW5nIFpVTiB0byBQVU5zIGdpdmVzIFpQVU5zLCB1c2UgYG5gIGFzIGluZGV4IGFzIGluIGB6cHVuWyArMyBdYCBvciBgenB1bi5hdCArM2AgdG8gZ2V0IGDDpWBcblxuICAqIGZvciBudW1iZXJzIGBuID4gKzIwYDpcbiAgICAqIGNvbnZlcnQgdG8gQmFzZS0xMjggdXNpbmcgYWxwaGFiZXQ6ICEjJCUmKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW11eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX7CocKiwqPCpMKlwqbCp8KowqnCqsKrwqzCrsKvwrDCscKywrPCtMK1wrbCt8K4wrnCusK7wrzCvcK+wr/DgMOBw4LDg8OEw4XDhlxuICAgICogcHJlcGVuZCBwb3NpdGl2ZSBtYWduaWZpZXIgICAgICAgICAgICAoUE1BRykgOiAgMSBwb3NpdGl2ZSBkaWdpdCAuLiAgw7jDucO6w7vDvMO9w77DvyAgLi4gIDggcG9zaXRpdmUgZGlnaXRzXG5cbiAgKiBmb3IgbnVtYmVycyBgbiA8IC0yMGA6XG4gICAgKiBhZGQgYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYCB0byBgbmAgdG8gc2hpZnQgdGhlIG51bWJlciBpbnRvIHRoZSBwb3NpdGl2ZSwgdGhlbiBjb252ZXJ0IHRvIEJhc2UtMTI4XG4gICAgKiBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgIGlzIGAyw4bDhsOGw4bDhsOGw4ZgIGluIEJhc2UtMTI4LCBtZWFuaW5nIHRoYXQgbGVhZGluZyBgL14yw4YqIC9gIGNhbiBiZSBkaXNjYXJkZWRcbiAgICAqIHByZXBlbmQgbmVnYXRpdmUgbWFnbmlmaWVyICAgICAgICAgICAgKE5NQUcpIDogIDEgbmVnYXRpdmUgZGlnaXQgLi4gIMOOw43DjMOLw4rDicOIw4cgIC4uICA4IG5lZ2F0aXZlIGRpZ2l0c1xuXG5cbiAgw4cgICAgOCBuZWdhdGl2ZSBkaWdpdHNcbiAgw4ggICAgNyBuZWdhdGl2ZSBkaWdpdHNcbiAgw4kgICAgNiBuZWdhdGl2ZSBkaWdpdHNcbiAgw4ogICAgNSBuZWdhdGl2ZSBkaWdpdHNcbiAgw4sgICAgNCBuZWdhdGl2ZSBkaWdpdHNcbiAgw4wgICAgMyBuZWdhdGl2ZSBkaWdpdHNcbiAgw40gICAgMiBuZWdhdGl2ZSBkaWdpdHNcbiAgw44gICAgMSBuZWdhdGl2ZSBkaWdpdHNcbiAgw48gIC0yMFxuICDDkCAgLTE5XG4gIMORICAtMThcbiAgw5IgIC0xN1xuICDDkyAgLTE2XG4gIMOUICAtMTVcbiAgw5UgIC0xNFxuICDDliAgLTEzXG4gIMOXICAtMTJcbiAgw5ggIC0xMVxuICDDmSAgLTEwXG4gIMOaICAgLTlcbiAgw5sgICAtOFxuICDDnCAgIC03XG4gIMOdICAgLTZcbiAgw54gICAtNVxuICDDnyAgIC00XG4gIMOgICAgLTNcbiAgw6EgICAtMlxuICDDoiAgIC0xIG5lZ2F0aXZlIHNtYWxsIHNpbmdsZS1sZXR0ZXIgaW5kaWNlc1xuXG4gIMOjICAgwrEwIHplcm9cblxuICDDpCAgICsxIHBvc2l0aXZlIHNtYWxsIHNpbmdsZS1sZXR0ZXIgaW5kaWNlc1xuICDDpSAgICsyXG4gIMOmICAgKzNcbiAgw6cgICArNFxuICDDqCAgICs1XG4gIMOpICAgKzZcbiAgw6ogICArN1xuICDDqyAgICs4XG4gIMOsICAgKzlcbiAgw60gICsxMFxuICDDriAgKzExXG4gIMOvICArMTJcbiAgw7AgICsxM1xuICDDsSAgKzE0XG4gIMOyICArMTVcbiAgw7MgICsxNlxuICDDtCAgKzE3XG4gIMO1ICArMThcbiAgw7YgICsxOVxuICDDtyAgKzIwXG4gIMO4ICAgIDEgcG9zaXRpdmUgZGlnaXRzXG4gIMO5ICAgIDIgcG9zaXRpdmUgZGlnaXRzXG4gIMO6ICAgIDMgcG9zaXRpdmUgZGlnaXRzXG4gIMO7ICAgIDQgcG9zaXRpdmUgZGlnaXRzXG4gIMO8ICAgIDUgcG9zaXRpdmUgZGlnaXRzXG4gIMO9ICAgIDYgcG9zaXRpdmUgZGlnaXRzXG4gIMO+ICAgIDcgcG9zaXRpdmUgZGlnaXRzXG4gIMO/ICAgIDggcG9zaXRpdmUgZGlnaXRzXG5cblxuICAjIyNcblxuXG5cbiAgUiA9IFtdXG4gIGZvciBjaWQgaW4gWyAweDAwMjEgLi4gMHgwMGZmIF1cbiAgICAjIGNvbnRpbnVlIHVubGVzcyAvXlxccHtMfSQvdi50ZXN0ICggY2hyID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkIClcbiAgICAjIGNvbnRpbnVlIHVubGVzcyAvXi4kL3YudGVzdCAoIGNociA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZCApXG4gICAgY29udGludWUgaWYgL15cXHB7Q30kL3YudGVzdCAoIGNociA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZCApXG4gICAgY29udGludWUgaWYgL14oWydcIlxcXFxdfFxccHtTfSkkL3YudGVzdCBjaHJcbiAgICBSLnB1c2ggY2hyXG4gIHVyZ2UgJ86pYnNrX180MScsIHJwciBSLmpvaW4gJydcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX2hvbGxlcml0aF92ZHhfc29ydGtleSA9IC0+XG4gICMjIyB2ZWN0b3JpYWwgaW5kZXgsIGEuay5hLiAndmluZGV4JywgYS5rLmEuIFZEWCwgbmV4dCB2ZXJzaW9uIG9mIFZOUiBhcyBpbXBsZW1lbnRlZCBpbiBgaG9sbGVyaXRoLWNvZGVjYFxuICAjIyNcbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICB7IGVuY29kZUJpZ0ludCxcbiAgICBkZWNvZGVCaWdJbnQsICAgfSA9IFRNUF9yZXF1aXJlX2VuY29kZV9pbl9hbHBoYWJldCgpXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdGFudHMgPSBDID0gT2JqZWN0LmZyZWV6ZVxuICAgIG1heF9pbnRlZ2VyOiAgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgICBtaW5faW50ZWdlcjogIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSXG4gICAgenB1bnM6ICAgICAgICAnw6PDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO3JyAjIHplcm8gYW5kIHBvc2l0aXZlIHVuaWxpdGVyYWwgbnVtYmVyc1xuICAgIG51bnM6ICAgICAgICAgJ8OPw5DDkcOSw5PDlMOVw5bDl8OYw5nDmsObw5zDncOew5/DoMOhw6InICAjIG5lZ2F0aXZlICAgICAgICAgIHVuaWxpdGVyYWwgbnVtYmVyc1xuICAgIHpwdW5fbWF4OiAgICAgKzIwXG4gICAgbnVuX21pbjogICAgICAtMjBcbiAgICBiYXNlMTI4OiAgICAgICchIyQlJigpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gJyBcXFxuICAgICAgICAgICAgICAgICAgICArICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX7CocKiwqPCpMKlwqbCp8KowqnCqsKrwqzCrsKvwrDCscKywrPCtMK1wrbCt8K4wrnCusK7wrzCvcK+wr/DgMOBw4LDg8OEw4XDhidcbiAgICBwbWFnOiAgICAgICAgICcgw7jDucO6w7vDvMO9w77DvycgICMgcG9zaXRpdmUgJ21hZ25pZmllcicgZm9yIDEgdG8gOCBwb3NpdGl2ZSBkaWdpdHNcbiAgICBubWFnOiAgICAgICAgICcgw47DjcOMw4vDisOJw4jDhycgICMgbmVnYXRpdmUgJ21hZ25pZmllcicgZm9yIDEgdG8gOCBuZWdhdGl2ZSBkaWdpdHNcbiAgICBubGVhZF9yZTogICAgIC9eMsOGKi8gICAgICAjICduZWdhdGl2ZSBsZWFkZXInLCBkaXNjYXJkYWJsZSBsZWFkaW5nIGRpZ2l0cyBvZiBsaWZ0ZWQgbmVnYXRpdmUgbnVtYmVyc1xuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW50ZXJuYWxzID0gT2JqZWN0LmZyZWV6ZSB7IGNvbnN0YW50cywgfVxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY2xhc3MgVmluZGV4XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGVuY29kZTogKCBpbnRlZ2VyX29yX2xpc3QgKSAtPlxuICAgICAgIyMjIFRBSU5UIHVzZSBwcm9wZXIgdmFsaWRhdGlvbiAjIyNcbiAgICAgIGlmIEFycmF5LmlzQXJyYXkgaW50ZWdlcl9vcl9saXN0XG4gICAgICAgIHJldHVybiAoIEBlbmNvZGUgbiBmb3IgbiBpbiBpbnRlZ2VyX29yX2xpc3QgKS5qb2luICcnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIG4gPSBpbnRlZ2VyX29yX2xpc3RcbiAgICAgIHVubGVzcyBOdW1iZXIuaXNGaW5pdGUgblxuICAgICAgICB0eXBlID0gJ1hYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFgnXG4gICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pdmR4X180MiBleHBlY3RlZCBhIGZsb2F0LCBnb3QgYSAje3R5cGV9XCJcbiAgICAgIHVubGVzcyBDLm1pbl9pbnRlZ2VyIDw9IG4gPD0gQy5tYXhfaW50ZWdlclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqXZkeF9fNDMgZXhwZWN0ZWQgYSBmbG9hdCBiZXR3ZWVuICN7Qy5taW5faW50ZWdlcn0gYW5kICN7Qy5tYXhfaW50ZWdlcn0sIGdvdCAje259XCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIEBlbmNvZGVfaW50ZWdlciBuXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGVuY29kZV9pbnRlZ2VyOiAoIG4gKSAtPlxuICAgICAgIyMjIE5PVEUgY2FsbCBvbmx5IHdoZXJlIGFzc3VyZWQgYG5gIGlzIGludGVnZXIgd2l0aGluIG1hZ25pdHVkZSBvZiBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgICMjI1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIFplcm8gb3Igc21hbGwgcG9zaXRpdmU6XG4gICAgICByZXR1cm4gKCBDLnpwdW5zLmF0IG4gKSBpZiAwICAgICAgICAgIDw9IG4gPD0gQy56cHVuX21heFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIFNtYWxsIG5lZ2F0aXZlOlxuICAgICAgcmV0dXJuICggQy5udW5zLmF0ICBuICkgaWYgQy5udW5fbWluICA8PSBuIDwgIDBcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBCaWcgcG9zaXRpdmU6XG4gICAgICBpZiBuID4gQy56cHVuX21heFxuICAgICAgICBSID0gZW5jb2RlQmlnSW50IG4sIEMuYmFzZTEyOFxuICAgICAgICByZXR1cm4gKCBDLnBtYWcuYXQgUi5sZW5ndGggKSArIFJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBCaWcgbmVnYXRpdmU6XG4gICAgICBSID0gKCBlbmNvZGVCaWdJbnQgKCBuICsgQy5tYXhfaW50ZWdlciApLCBDLmJhc2UxMjggKS5yZXBsYWNlIEMubmxlYWRfcmUsICcnXG4gICAgICByZXR1cm4gKCBDLm5tYWcuYXQgUi5sZW5ndGggKSArIFJcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFZEWCA9IG5ldyBWaW5kZXgoKVxuICBoZWxwICfOqWJza19fNDQnLCBWRFguZW5jb2RlX2ludGVnZXIgMFxuICBoZWxwICfOqWJza19fNDUnLCBWRFguZW5jb2RlX2ludGVnZXIgLTFcbiAgaGVscCAnzqlic2tfXzQ2JywgVkRYLmVuY29kZV9pbnRlZ2VyICsxXG4gIGhlbHAgJ86pYnNrX180NycsIFZEWC5lbmNvZGVfaW50ZWdlciAxMFxuICBoZWxwICfOqWJza19fNDgnLCBWRFguZW5jb2RlX2ludGVnZXIgMjBcbiAgaGVscCAnzqlic2tfXzQ5JywgVkRYLmVuY29kZV9pbnRlZ2VyIDIxXG4gIGhlbHAgJ86pYnNrX181MCcsIFZEWC5lbmNvZGVfaW50ZWdlciAxMDBcbiAgaGVscCAnzqlic2tfXzUxJywgVkRYLmVuY29kZV9pbnRlZ2VyIDEyN1xuICBoZWxwICfOqWJza19fNTInLCBWRFguZW5jb2RlX2ludGVnZXIgMTI4XG4gIGhlbHAgJ86pYnNrX181MycsIFZEWC5lbmNvZGVfaW50ZWdlciAxMjlcbiAgaGVscCAnzqlic2tfXzU0JywgVkRYLmVuY29kZV9pbnRlZ2VyICsxMjM0NTY3ODkwMTIzNDVcbiAgaGVscCAnzqlic2tfXzU1JywgVkRYLmVuY29kZV9pbnRlZ2VyIEMubWF4X2ludGVnZXJcbiAgaW5mbyAnzqlic2tfXzU2J1xuICBoZWxwICfOqWJza19fNTcnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwXG4gIGhlbHAgJ86pYnNrX181OCcsIFZEWC5lbmNvZGVfaW50ZWdlciAtMjBcbiAgaGVscCAnzqlic2tfXzU5JywgVkRYLmVuY29kZV9pbnRlZ2VyIC0yMVxuICBoZWxwICfOqWJza19fNjAnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMFxuICBoZWxwICfOqWJza19fNjEnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEyN1xuICBoZWxwICfOqWJza19fNjInLCBWRFguZW5jb2RlX2ludGVnZXIgLTEyOFxuICBoZWxwICfOqWJza19fNjMnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEyOVxuICBoZWxwICfOqWJza19fNjQnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDBcbiAgaGVscCAnzqlic2tfXzY1JywgVkRYLmVuY29kZV9pbnRlZ2VyIC0xMDAwMFxuICBoZWxwICfOqWJza19fNjYnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMFxuICBoZWxwICfOqWJza19fNjcnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMDBcbiAgaGVscCAnzqlic2tfXzY4JywgVkRYLmVuY29kZV9pbnRlZ2VyIC0xMDAwMDAwMFxuICBoZWxwICfOqWJza19fNjknLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMDAwMFxuICBoZWxwICfOqWJza19fNzAnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMDAwMDBcbiAgaGVscCAnzqlic2tfXzcxJywgVkRYLmVuY29kZV9pbnRlZ2VyIC0xMDAwMDAwMDAwMFxuICBoZWxwICfOqWJza19fNzInLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMDAwMDAwMFxuICBoZWxwICfOqWJza19fNzMnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMDAwMDAwMDBcbiAgaGVscCAnzqlic2tfXzc0JywgVkRYLmVuY29kZV9pbnRlZ2VyIC0xMDAwMDAwMDAwMDAwMFxuICBoZWxwICfOqWJza19fNzUnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMDAwMDAwMDAwMFxuICBoZWxwICfOqWJza19fNzYnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEyMzQ1Njc4OTAxMjM0NVxuICBoZWxwICfOqWJza19fNzcnLCBWRFguZW5jb2RlX2ludGVnZXIgQy5taW5faW50ZWdlclxuICBoZWxwICfOqWJza19fNzgnLCBWRFguZW5jb2RlX2ludGVnZXIgQy5taW5faW50ZWdlciArIDFcbiAgaGVscCAnzqlic2tfXzc5JywgVkRYLmVuY29kZV9pbnRlZ2VyIEMubWluX2ludGVnZXIgKyAyXG4gIGhlbHAgJ86pYnNrX184MCcsIFZEWC5lbmNvZGVfaW50ZWdlciBDLm1pbl9pbnRlZ2VyICsgM1xuICBpbmZvICfOqWJza19fODEnXG4gIGhlbHAgJ86pYnNrX184MicsIFZEWC5lbmNvZGUgWyAxLCAyLCAzLCAxMDAsIF1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGRlbW9fYmluYXJ5X2xleGljb2dyYXBoaWNfc29ydGtleSgpXG4gIGRlbW9fY2hhdGdwdF9zb2x1dGlvbigpXG4gIGRlbW9faG9sbGVyaXRoX3ZkeF9zb3J0a2V5KClcbiAgcmV0dXJuIG51bGxcbiJdfQ==
