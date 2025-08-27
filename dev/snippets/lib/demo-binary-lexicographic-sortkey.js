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
    help('Ωbsk__48', VDX.encode_integer(100));
    help('Ωbsk__49', VDX.encode_integer(127));
    help('Ωbsk__50', VDX.encode_integer(128));
    help('Ωbsk__51', VDX.encode_integer(129));
    help('Ωbsk__52', VDX.encode_integer(-10));
    help('Ωbsk__53', VDX.encode_integer(-100));
    help('Ωbsk__54', VDX.encode_integer(-127));
    help('Ωbsk__55', VDX.encode_integer(-128));
    help('Ωbsk__56', VDX.encode_integer(-129));
    help('Ωbsk__57', VDX.encode_integer(+123456789012345));
    help('Ωbsk__58', VDX.encode_integer(-123456789012345));
    help('Ωbsk__59', VDX.encode_integer(C.max_integer));
    help('Ωbsk__60', VDX.encode_integer(C.min_integer));
    help('Ωbsk__61', VDX.encode([1, 2, 3, 100]));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tYmluYXJ5LWxleGljb2dyYXBoaWMtc29ydGtleS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBQTtBQUFBLE1BQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSw4QkFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxpQ0FBQSxFQUFBLHFCQUFBLEVBQUEsMEJBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLDJCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxJQVJGLEVBU0UsR0FURixFQVVFLElBVkYsRUFXRSxPQVhGLEVBWUUsR0FaRixDQUFBLEdBWTRCLEdBQUcsQ0FBQyxHQVpoQzs7RUFhQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQTFCQTs7Ozs7Ozs7Ozs7Ozs7RUF1Q0EsU0FBQSxHQUE0QixPQUFBLENBQVEsNkNBQVI7O0VBQzVCLENBQUEsQ0FBRSxJQUFGLEVBQ0UsVUFERixDQUFBLEdBQzRCLFNBQVMsQ0FBQyw4QkFBVixDQUFBLENBRDVCOztFQUVBLENBQUEsQ0FBRSxNQUFGLENBQUEsR0FBNEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBbkIsQ0FBQSxDQUE1QixFQTFDQTs7O0VBK0NBLGlDQUFBLEdBQW9DLENBQUEsQ0FBQSxHQUFBLEVBQUE7Ozs7O0FBQ3BDLFFBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBLEVBQUEsT0FBQSxFQUFBO0lBQ0UsQ0FBQSxHQUNFO01BQUEsSUFBQSxFQUFZLHVCQUFaO01BQ0EsR0FBQSxFQUFZLHVCQURaO01BRUEsR0FBQSxFQUFZLHVCQUZaO01BR0EsR0FBQSxFQUFZLHVCQUhaO01BSUEsR0FBQSxFQUFZLHVCQUpaO01BS0EsRUFBQSxFQUFZLHVCQUxaO01BTUEsRUFBQSxFQUFZLHVCQU5aO01BT0EsRUFBQSxFQUFZLHVCQVBaO01BUUEsRUFBQSxFQUFZLHVCQVJaO01BU0EsRUFBQSxFQUFZLHdCQVRaO01BVUEsRUFBQSxFQUFZLHdCQVZaO01BV0EsRUFBQSxFQUFZLHdCQVhaO01BWUEsRUFBQSxFQUFZLHdCQVpaO01BYUEsRUFBQSxFQUFZLHdCQWJaO01BY0EsSUFBQSxFQUFZLHdCQWRaO01BZUEsQ0FBQSxFQUFZLHdCQWZaO01BZ0JBLElBQUEsRUFBWSx3QkFoQlo7TUFpQkEsRUFBQSxFQUFZLHdCQWpCWjtNQWtCQSxLQUFBLEVBQVksd0JBbEJaO01BbUJBLEtBQUEsRUFBWSx3QkFuQlo7TUFvQkEsS0FBQSxFQUFZLHdCQXBCWjtNQXFCQSxHQUFBLEVBQVksd0JBckJaO01Bc0JBLElBQUEsRUFBWSx3QkF0Qlo7TUF1QkEsS0FBQSxFQUFZLHdCQXZCWjtNQXdCQSxRQUFBLEVBQVksd0JBeEJaO01BeUJBLE1BQUEsRUFBWSx3QkF6Qlo7TUEwQkEsTUFBQSxFQUFZLHdCQTFCWjtNQTJCQSxHQUFBLEVBQVksd0JBM0JaO01BNEJBLE1BQUEsRUFBWSx3QkE1Qlo7TUE2QkEsR0FBQSxFQUFZLHdCQTdCWjtNQThCQSxJQUFBLEVBQVk7SUE5QlosRUFGSjs7OztJQXNDRSxVQUFBLEdBQWUsSUFBSSxDQUFDLEdBQUwsQ0FBUyxHQUFBOztBQUFFO0FBQUE7TUFBQSxLQUFBLHFDQUFBOztxQkFBQSxDQUFDLENBQUM7TUFBRixDQUFBOztRQUFGLENBQVQ7SUFJZixPQUFBLEdBQWM7SUFDZCxLQUFBLENBQU0sVUFBTixFQUFrQixDQUFFLFVBQUYsQ0FBbEIsRUEzQ0Y7OztJQThDRSxJQUFBOztBQUFnQjs7Ozs7Ozs7QUFBQTtNQUFBLEtBQUEscUNBQUE7UUFBTSxDQUFFLEVBQUYsRUFBTSxDQUFOO3FCQUFOO01BQUEsQ0FBQTs7O0lBQ2hCLEtBQUEsc0NBQUE7O01BQ0UsQ0FBQSxHQUFJLElBQUEsQ0FBSyxPQUFBLENBQVEsQ0FBQyxFQUFBLENBQUEsQ0FBSSxHQUFKLENBQUEsT0FBQSxDQUFULENBQUw7TUFDSixDQUFBLEdBQUksSUFBQSxDQUFLLE9BQUEsQ0FBUSxDQUFDLEVBQUEsQ0FBQSxDQUFJLENBQUMsQ0FBRSxHQUFGLENBQUwsQ0FBQSxPQUFBLENBQVQsQ0FBTDtNQUNKLENBQUEsR0FBSSxHQUFHLENBQUMsT0FBSixDQUFZLGdCQUFaLEVBQThCLElBQTlCO01BQ0osQ0FBQSxHQUFJLENBQUMsQ0FBQztNQUNOLElBQUEsQ0FBSyxVQUFMLEVBQWlCLENBQUEsQ0FBQSxDQUFHLENBQUgsQ0FBQSxDQUFBLENBQU8sQ0FBUCxFQUFBLENBQUEsQ0FBWSxDQUFaLENBQUEsQ0FBakI7SUFMRjtJQU1BLElBQUEsR0FBTyxNQUFNLENBQUM7SUFDZCxDQUFBLEdBQUksUUFBQSxDQUFFLENBQUYsQ0FBQTtNQUNGLElBQStELENBQUEsS0FBSyxDQUFwRTtBQUFBLGVBQU8sQ0FBRyxDQUFILEVBQU0sR0FBTixFQUFQOztNQUNBLElBQStELENBQUEsR0FBSSxDQUFuRTtBQUFBLGVBQU8sQ0FBRSxDQUFDLENBQUgsRUFBTSxDQUFhLENBQUMsQ0FBQyxRQUFGLENBQVcsRUFBWCxDQUFiLENBQTRCLENBQUMsV0FBN0IsQ0FBQSxDQUFOLEVBQVA7O0FBQ0EsYUFBTyxDQUFFLENBQUMsQ0FBSCxFQUFNLENBQUUsQ0FBRSxJQUFBLEdBQU8sQ0FBVCxDQUFZLENBQUMsUUFBYixDQUFzQixFQUF0QixDQUFGLENBQTRCLENBQUMsV0FBN0IsQ0FBQSxDQUEwQyxDQUFDLE9BQTNDLENBQW1ELE9BQW5ELEVBQTRELEVBQTVELENBQU47SUFITCxFQXRETjs7SUEyREUsQ0FBQSxHQUFJLEdBQUcsQ0FBQyxXQUFKLENBQWdCLENBQWhCO0lBQ0osQ0FBQSxHQUFJLFFBQUEsQ0FBRSxDQUFGLENBQUE7QUFDTixVQUFBLElBQUEsRUFBQTtNQUFJLENBQUUsSUFBRixFQUFRLElBQVIsQ0FBQSxHQUFrQixDQUFBLENBQUUsQ0FBRjtNQUNsQixJQUFlLElBQUEsS0FBUSxDQUF2QjtBQUFBLGVBQU8sS0FBUDs7TUFDQSxJQUEwRCxJQUFBLEtBQVEsQ0FBQyxDQUFuRTtBQUFBLGVBQU8sQ0FBRSxNQUFNLENBQUMsYUFBUCxDQUFxQixDQUFBLEdBQUksSUFBSSxDQUFDLE1BQTlCLENBQUYsQ0FBQSxHQUEyQyxLQUFsRDs7QUFDQSxhQUFPLENBQUUsTUFBTSxDQUFDLGFBQVAsQ0FBcUIsQ0FBQSxHQUFJLElBQUksQ0FBQyxNQUE5QixDQUFGLENBQUEsR0FBMkM7SUFKaEQ7SUFLSixJQUFBLENBQUssVUFBTCxFQUFpQixRQUFqQixFQUE2QixDQUFBLENBQUUsQ0FBRixDQUE3QixFQUEyQyxDQUFBLENBQUUsQ0FBRixDQUEzQztJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLFFBQWpCLEVBQTZCLENBQUEsQ0FBRSxDQUFGLENBQTdCLEVBQTJDLENBQUEsQ0FBRSxDQUFGLENBQTNDO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsUUFBakIsRUFBNkIsQ0FBQSxDQUFFLENBQUYsQ0FBN0IsRUFBMkMsQ0FBQSxDQUFFLENBQUYsQ0FBM0M7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixRQUFqQixFQUE2QixDQUFBLENBQUUsRUFBRixDQUE3QixFQUEyQyxDQUFBLENBQUUsRUFBRixDQUEzQztJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLFFBQWpCLEVBQTZCLENBQUEsQ0FBRSxFQUFGLENBQTdCLEVBQTJDLENBQUEsQ0FBRSxFQUFGLENBQTNDO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsUUFBakIsRUFBNkIsQ0FBQSxDQUFFLEVBQUYsQ0FBN0IsRUFBMkMsQ0FBQSxDQUFFLEVBQUYsQ0FBM0M7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixRQUFqQixFQUE2QixDQUFBLENBQUUsQ0FBQyxDQUFILENBQTdCLEVBQTJDLENBQUEsQ0FBRSxDQUFDLENBQUgsQ0FBM0M7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixRQUFqQixFQUE2QixDQUFBLENBQUUsQ0FBQyxFQUFILENBQTdCLEVBQTJDLENBQUEsQ0FBRSxDQUFDLEVBQUgsQ0FBM0M7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixRQUFqQixFQUE2QixDQUFBLENBQUUsQ0FBQyxFQUFILENBQTdCLEVBQTJDLENBQUEsQ0FBRSxDQUFDLEVBQUgsQ0FBM0M7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixRQUFqQixFQUE2QixDQUFBLENBQUUsQ0FBQyxLQUFILENBQTdCLEVBQTJDLENBQUEsQ0FBRSxDQUFDLEtBQUgsQ0FBM0M7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixRQUFqQixFQUE2QixDQUFBLENBQUUsQ0FBQyxLQUFILENBQTdCLEVBQTJDLENBQUEsQ0FBRSxDQUFDLEtBQUgsQ0FBM0M7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixRQUFqQixFQUE2QixDQUFBLENBQUUsQ0FBQyxLQUFILENBQTdCLEVBQTJDLENBQUEsQ0FBRSxDQUFDLEtBQUgsQ0FBM0MsRUE1RUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUhFLFdBQU87RUF4SDJCLEVBL0NwQzs7O0VBMEtBLDhCQUFBLEdBQWlDLFFBQUEsQ0FBQSxDQUFBO0lBQy9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQSxXQUFPLENBQUUsWUFBRixFQUFnQixZQUFoQjtFQWpDd0IsRUExS2pDOzs7RUE4TUEscUJBQUEsR0FBd0IsUUFBQSxDQUFBLENBQUE7QUFDeEIsUUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxZQUFBLEVBQUEsWUFBQSxFQUFBO0lBQUUsQ0FBQSxDQUFFLFlBQUYsRUFDRSxZQURGLENBQUEsR0FDc0IsOEJBQUEsQ0FBQSxDQUR0QjtJQUVBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLFlBQUEsQ0FBYSxRQUFiLEVBQXVCLGdFQUF2QixDQUFqQixFQUZGOzs7Ozs7Ozs7Ozs7Ozs7SUFpQkUsSUFBQSxDQUFLLFVBQUwsRUFBaUIsR0FBQSxDQUFJLFlBQUEsQ0FBYSxNQUFNLENBQUMsZ0JBQXBCLEVBQXNDLENBQUEsZ0NBQUEsQ0FBdEMsQ0FBSixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUEsQ0FBSSxZQUFBLENBQWEsTUFBTSxDQUFDLGdCQUFwQixFQUFzQyxrRUFBdEMsQ0FBSixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUEsQ0FBSSxZQUFBLENBQWEsTUFBTSxDQUFDLGdCQUFwQixFQUFzQywyTEFBdEMsQ0FBSixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUEsQ0FBSSxZQUFBLENBQWEsTUFBTSxDQUFDLGdCQUFwQixFQUFzQyxrSUFBdEMsQ0FBSixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUEsQ0FBSSxZQUFBLENBQWEsQ0FBYixFQUFnQixJQUFoQixDQUFKLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsR0FBQSxDQUFJLFlBQUEsQ0FBYSxDQUFiLEVBQWdCLElBQWhCLENBQUosQ0FBakI7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixHQUFBLENBQUksWUFBQSxDQUFhLENBQWIsRUFBZ0IsSUFBaEIsQ0FBSixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUEsQ0FBSSxZQUFBLENBQWEsQ0FBYixFQUFnQixJQUFoQixDQUFKLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsR0FBQSxDQUFJLFlBQUEsQ0FBYSxDQUFiLEVBQWdCLElBQWhCLENBQUosQ0FBakI7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixHQUFBLENBQUksWUFBQSxDQUFhLENBQWIsRUFBZ0IsSUFBaEIsQ0FBSixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUEsQ0FBSSxZQUFBLENBQWEsTUFBTSxDQUFDLGdCQUFwQixFQUFzQyxJQUF0QyxDQUFKLENBQWpCLEVBM0JGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNkhFLENBQUEsR0FBSTtJQUNKLEtBQVcscUNBQVg7TUFHRSxJQUFZLFVBQVUsQ0FBQyxJQUFYLENBQWdCLENBQUUsR0FBQSxHQUFNLE1BQU0sQ0FBQyxhQUFQLENBQXFCLEdBQXJCLENBQVIsQ0FBaEIsQ0FBWjs7O0FBQUEsaUJBQUE7O01BQ0EsSUFBWSxtQkFBbUIsQ0FBQyxJQUFwQixDQUF5QixHQUF6QixDQUFaO0FBQUEsaUJBQUE7O01BQ0EsQ0FBQyxDQUFDLElBQUYsQ0FBTyxHQUFQO0lBTEY7V0FNQSxJQUFBLENBQUssVUFBTCxFQUFpQixHQUFBLENBQUksQ0FBQyxDQUFDLElBQUYsQ0FBTyxFQUFQLENBQUosQ0FBakI7RUFySXNCLEVBOU14Qjs7O0VBc1ZBLDBCQUFBLEdBQTZCLFFBQUEsQ0FBQSxDQUFBO0FBQzdCLFFBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsU0FBQSxFQUFBLFlBQUEsRUFBQSxZQUFBLEVBQUEsU0FBQTs7OztJQUdFLENBQUEsQ0FBRSxZQUFGLEVBQ0UsWUFERixDQUFBLEdBQ3NCLDhCQUFBLENBQUEsQ0FEdEIsRUFIRjs7SUFPRSxTQUFBLEdBQVksQ0FBQSxHQUFJLE1BQU0sQ0FBQyxNQUFQLENBQ2Q7TUFBQSxXQUFBLEVBQWMsTUFBTSxDQUFDLGdCQUFyQjtNQUNBLFdBQUEsRUFBYyxNQUFNLENBQUMsZ0JBRHJCO01BRUEsS0FBQSxFQUFjLHVCQUZkO01BR0EsSUFBQSxFQUFjLHNCQUhkO01BSUEsUUFBQSxFQUFjLENBQUMsRUFKZjtNQUtBLE9BQUEsRUFBYyxDQUFDLEVBTGY7TUFNQSxPQUFBLEVBQWMsK0RBQUEsR0FDSSxxRUFQbEI7TUFRQSxJQUFBLEVBQWMsV0FSZDtNQVNBLElBQUEsRUFBYyxXQVRkO01BVUEsUUFBQSxFQUFjLE1BVmQ7SUFBQSxDQURjLEVBUGxCOzs7SUFxQkUsU0FBQSxHQUFZLE1BQU0sQ0FBQyxNQUFQLENBQWMsQ0FBRSxTQUFGLENBQWQsRUFyQmQ7O0lBd0JRLFNBQU4sTUFBQSxPQUFBLENBQUE7O01BR0UsTUFBUSxDQUFFLGVBQUYsQ0FBQTtBQUNaLFlBQUEsQ0FBQSxFQUFBLElBQUE7O1FBQ00sSUFBRyxLQUFLLENBQUMsT0FBTixDQUFjLGVBQWQsQ0FBSDtBQUNFLGlCQUFPOztBQUFFO1lBQUEsS0FBQSxpREFBQTs7MkJBQUEsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFSO1lBQUEsQ0FBQTs7dUJBQUYsQ0FBc0MsQ0FBQyxJQUF2QyxDQUE0QyxFQUE1QyxFQURUO1NBRE47O1FBSU0sQ0FBQSxHQUFJO1FBQ0osS0FBTyxNQUFNLENBQUMsUUFBUCxDQUFnQixDQUFoQixDQUFQO1VBQ0UsSUFBQSxHQUFPO1VBQ1AsTUFBTSxJQUFJLEtBQUosQ0FBVSxDQUFBLGlDQUFBLENBQUEsQ0FBb0MsSUFBcEMsQ0FBQSxDQUFWLEVBRlI7O1FBR0EsTUFBTyxDQUFBLENBQUMsQ0FBQyxXQUFGLElBQWlCLENBQWpCLElBQWlCLENBQWpCLElBQXNCLENBQUMsQ0FBQyxXQUF4QixFQUFQO1VBQ0UsTUFBTSxJQUFJLEtBQUosQ0FBVSxDQUFBLGtDQUFBLENBQUEsQ0FBcUMsQ0FBQyxDQUFDLFdBQXZDLENBQUEsS0FBQSxDQUFBLENBQTBELENBQUMsQ0FBQyxXQUE1RCxDQUFBLE1BQUEsQ0FBQSxDQUFnRixDQUFoRixDQUFBLENBQVYsRUFEUjtTQVJOOztBQVdNLGVBQU8sSUFBQyxDQUFBLGNBQUQsQ0FBZ0IsQ0FBaEI7TUFaRCxDQURaOzs7TUFnQkksY0FBZ0IsQ0FBRSxDQUFGLENBQUE7QUFDcEIsWUFBQTtRQUdNLElBQTJCLENBQUEsQ0FBQSxJQUFjLENBQWQsSUFBYyxDQUFkLElBQW1CLENBQUMsQ0FBQyxRQUFyQixDQUEzQjs7OztBQUFBLGlCQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBUixDQUFXLENBQVgsRUFBVDs7UUFHQSxJQUEyQixDQUFBLENBQUMsQ0FBQyxPQUFGLElBQWMsQ0FBZCxJQUFjLENBQWQsR0FBbUIsQ0FBbkIsQ0FBM0I7OztBQUFBLGlCQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBUCxDQUFXLENBQVgsRUFBVDtTQU5OOzs7UUFTTSxJQUFHLENBQUEsR0FBSSxDQUFDLENBQUMsUUFBVDtVQUNFLENBQUEsR0FBSSxZQUFBLENBQWEsQ0FBYixFQUFnQixDQUFDLENBQUMsT0FBbEI7QUFDSixpQkFBTyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBUCxDQUFVLENBQUMsQ0FBQyxNQUFaLENBQUYsQ0FBQSxHQUF5QixFQUZsQztTQVROOzs7UUFjTSxDQUFBLEdBQUksQ0FBRSxZQUFBLENBQWUsQ0FBQSxHQUFJLENBQUMsQ0FBQyxXQUFyQixFQUFvQyxDQUFDLENBQUMsT0FBdEMsQ0FBRixDQUFpRCxDQUFDLE9BQWxELENBQTBELENBQUMsQ0FBQyxRQUE1RCxFQUFzRSxFQUF0RTtBQUNKLGVBQU8sQ0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQVAsQ0FBVSxDQUFDLENBQUMsTUFBWixDQUFGLENBQUEsR0FBeUI7TUFoQmxCOztJQWxCbEIsRUF4QkY7O0lBNkRFLEdBQUEsR0FBTSxJQUFJLE1BQUosQ0FBQTtJQUNOLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUcsQ0FBQyxjQUFKLENBQW1CLENBQW5CLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsR0FBRyxDQUFDLGNBQUosQ0FBbUIsQ0FBQyxDQUFwQixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUcsQ0FBQyxjQUFKLENBQW1CLENBQUMsQ0FBcEIsQ0FBakI7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixHQUFHLENBQUMsY0FBSixDQUFtQixFQUFuQixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUcsQ0FBQyxjQUFKLENBQW1CLEdBQW5CLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsR0FBRyxDQUFDLGNBQUosQ0FBbUIsR0FBbkIsQ0FBakI7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixHQUFHLENBQUMsY0FBSixDQUFtQixHQUFuQixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUcsQ0FBQyxjQUFKLENBQW1CLEdBQW5CLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsR0FBRyxDQUFDLGNBQUosQ0FBbUIsQ0FBQyxFQUFwQixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUcsQ0FBQyxjQUFKLENBQW1CLENBQUMsR0FBcEIsQ0FBakI7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixHQUFHLENBQUMsY0FBSixDQUFtQixDQUFDLEdBQXBCLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsR0FBRyxDQUFDLGNBQUosQ0FBbUIsQ0FBQyxHQUFwQixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUcsQ0FBQyxjQUFKLENBQW1CLENBQUMsR0FBcEIsQ0FBakI7SUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixHQUFHLENBQUMsY0FBSixDQUFtQixDQUFDLGVBQXBCLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsR0FBRyxDQUFDLGNBQUosQ0FBbUIsQ0FBQyxlQUFwQixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUcsQ0FBQyxjQUFKLENBQW1CLENBQUMsQ0FBQyxXQUFyQixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUcsQ0FBQyxjQUFKLENBQW1CLENBQUMsQ0FBQyxXQUFyQixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUcsQ0FBQyxNQUFKLENBQVcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxHQUFYLENBQVgsQ0FBakIsRUEvRUY7O0FBa0ZFLFdBQU87RUFuRm9CLEVBdFY3Qjs7O0VBNGFBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7TUFDdEMsaUNBQUEsQ0FBQTtNQUNBLHFCQUFBLENBQUE7TUFDQSwwQkFBQSxDQUFBO0FBQ0EsYUFBTztJQUorQixDQUFBLElBQXhDOztBQTVhQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnZGVtby1idWlsZC11bmljb2RlLXJhbmdlcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBsaW1lXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG4jIHsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG4jIEdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xuIyB7IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuIyBta2RpcnAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbWtkaXJwJ1xuIyBlbnZfcGF0aHMgICAgICAgICAgICAgICAgID0gKCByZXF1aXJlICdlbnYtcGF0aHMnICkuZGVmYXVsdCAnZGVtby1ub2RlLXNxbGl0ZSdcbiMgU1FMSVRFICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6c3FsaXRlJ1xuIyBQQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuIyB7IFNRTCB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9kYmF5J1xuIyB7IGRlZmF1bHQ6IFxcXG4jICAgb25fcHJvY2Vzc19leGl0LCAgICAgIH0gPSByZXF1aXJlICdleGl0LWhvb2snXG4jIEZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG57IGhpZGUsXG4gIHNldF9nZXR0ZXIsICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfbWFuYWdlZF9wcm9wZXJ0eV90b29scygpXG57IHRpbWVpdCwgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfYmVuY2htYXJraW5nKClcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19iaW5hcnlfbGV4aWNvZ3JhcGhpY19zb3J0a2V5ID0gPT5cbiAgIyMjIGluc3BpcmVkIGJ5ICYgdGh4IHRvIGh0dHBzOi8vc3RhdGVseS5jbG91ZC9ibG9nL2VuY29kaW5nLXNvcnRhYmxlLWJpbmFyeS1kYXRhYmFzZS1rZXlzLyAjIyNcbiAgZCA9XG4gICAgSzAwMDogICAgICAgJ1sgLTk5OSwgICAgICAgICAgIF0gMSdcbiAgICBMMDA6ICAgICAgICAnWyAgLTk5LCAgICAgICAgICAgXSAyJ1xuICAgIEwwOTogICAgICAgICdbICAtOTAsICAgICAgICAgICBdIDMnXG4gICAgTDg4OiAgICAgICAgJ1sgIC0xMSwgICAgICAgICAgIF0gNCdcbiAgICBMODk6ICAgICAgICAnWyAgLTEwLCAgICAgICAgICAgXSA1J1xuICAgIE0wOiAgICAgICAgICdbICAgLTksICAgICAgICAgICBdIDYnXG4gICAgTTE6ICAgICAgICAgJ1sgICAtOCwgICAgICAgICAgIF0gNydcbiAgICBNMjogICAgICAgICAnWyAgIC03LCAgICAgICAgICAgXSA4J1xuICAgIE0zOiAgICAgICAgICdbICAgLTYsICAgICAgICAgICBdIDknXG4gICAgTTQ6ICAgICAgICAgJ1sgICAtNSwgICAgICAgICAgIF0gMTAnXG4gICAgTTU6ICAgICAgICAgJ1sgICAtNCwgICAgICAgICAgIF0gMTEnXG4gICAgTTY6ICAgICAgICAgJ1sgICAtMywgICAgICAgICAgIF0gMTInXG4gICAgTTc6ICAgICAgICAgJ1sgICAtMiwgICAgICAgICAgIF0gMTMnXG4gICAgTTg6ICAgICAgICAgJ1sgICAtMSwgICAgICAgICAgIF0gMTQnXG4gICAgTkwyMDogICAgICAgJ1sgICArMCwgIC0yMCwgICAgIF0gMTUnXG4gICAgTjogICAgICAgICAgJ1sgICArMCwgICAgICAgICAgIF0gMTYnXG4gICAgTlAyMDogICAgICAgJ1sgICArMCwgICsyMCwgICAgIF0gMTcnXG4gICAgTzk6ICAgICAgICAgJ1sgICArOSwgICAgICAgICAgIF0gMTgnXG4gICAgUDEwTTY6ICAgICAgJ1sgICsxMCwgICAtMywgICAgIF0gMTknXG4gICAgUDEwTTc6ICAgICAgJ1sgICsxMCwgICAtMiwgICAgIF0gMjAnXG4gICAgUDEwTTg6ICAgICAgJ1sgICsxMCwgICAtMSwgICAgIF0gMjEnXG4gICAgUDEwOiAgICAgICAgJ1sgICsxMCwgICAgICAgICAgIF0gMjInXG4gICAgUDEwTjogICAgICAgJ1sgICsxMCwgICArMCwgICAgIF0gMjMnXG4gICAgUDEwTzE6ICAgICAgJ1sgICsxMCwgICArMSwgICAgIF0gMjQnXG4gICAgUDEwUDEwTTg6ICAgJ1sgICsxMCwgICsxMCwgLTEsIF0gMjUnXG4gICAgUDEwUDEwOiAgICAgJ1sgICsxMCwgICsxMCwgICAgIF0gMjYnXG4gICAgUDEwUDIwOiAgICAgJ1sgICsxMCwgICsyMCwgICAgIF0gMjcnXG4gICAgUDIwOiAgICAgICAgJ1sgICsyMCwgICAgICAgICAgIF0gMjgnXG4gICAgUDIwUDEwOiAgICAgJ1sgICsyMCwgICsxMCwgICAgIF0gMjknXG4gICAgUDkwOiAgICAgICAgJ1sgICs5MCwgICAgICAgICAgIF0gMzAnXG4gICAgUTkwMDogICAgICAgJ1sgKzkwMCwgICAgICAgICAgIF0gMzEnXG5cbiAgICAjIGlkZW50aWNhbCBiL2Mgb2YgcGFkZGluZzpcbiAgICAjIFAxMDogICAgICAgICdbICArMTAsICAgICAgIF0gMjQnXG4gICAgIyBQMTBOOiAgICAgICdbICArMTAsICAgKzAsIF0gMjUnXG5cbiAgbWF4X2xlbmd0aCAgPSAgTWF0aC5tYXggKCBrLmxlbmd0aCBmb3IgayBpbiBPYmplY3Qua2V5cyBkICkuLi5cbiAgIyMjIHRyYWlsZXIgY2FuIGJlIG9mIGZpeGVkIGxlbmd0aCBzaW5jZSB0aGVyZSBpcyBhbiB1cHBlciBsaW1pdCB0byBkaWdpdCBwb3NpdGlvbnMgZ2l2ZW4gYnlcbiAgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgYXMgcmVwcmVzZW50ZWQgaW4gdGhlIGJhc2Ugb2YgY2hvaWNlIChoZXJlIDEwKSB0aW1lcyB0aGUgbWF4aW11bSBudW1iZXIgb2ZcbiAgZGltZW5zaW9ucyBvZiB0aGUgVk5SOiAjIyNcbiAgdHJhaWxlciAgICAgPSAnTk5OTk5OTk5OTk4nXG4gIGRlYnVnICfOqWJza19fXzEnLCB7IG1heF9sZW5ndGgsIH1cbiAgIyBkMSA9IE9iamVjdC5mcm9tRW50cmllcyAoIFsgKCBrLnBhZEVuZCBtYXhfbGVuZ3RoLCAnTicgKSwgdiwgXSBmb3IgaywgdiBvZiBkIClcbiAgIyBkMSA9IE9iamVjdC5mcm9tRW50cmllcyAoIFsgKCBrICsgdHJhaWxlciApLCB2LCBdIGZvciBrLCB2IG9mIGQgKVxuICBrZXlzICAgICAgICA9ICggayBmb3IgWyBzaywgaywgXSBpbiAoIFsgayArIHRyYWlsZXIsIGssIF0gZm9yIGsgb2YgZCApLnNvcnQoKSApXG4gIGZvciBrZXkgaW4ga2V5c1xuICAgIGsgPSBsaW1lIHJldmVyc2UgZlwiICN7a2V5fTo+MTBjOyBcIlxuICAgIHYgPSBnb2xkIHJldmVyc2UgZlwiICN7ZFsga2V5IF19OjwzMGM7IFwiXG4gICAgcSA9IGtleS5yZXBsYWNlIC8oW0EtWl0pWzAtOV0qL2csICckMSdcbiAgICBxID0gcS5sZW5ndGhcbiAgICBoZWxwICfOqWJza19fXzInLCBcIiN7a30je3Z9ICN7cX1cIlxuICByZWYwID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgZiA9ICggbiApIC0+XG4gICAgcmV0dXJuIFsgIDAsICdOJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gaWYgbiBpcyAwXG4gICAgcmV0dXJuIFsgKzEsICggICAgICAgICAgICBuLnRvU3RyaW5nIDMyICkudG9Mb3dlckNhc2UoKSwgIF0gaWYgbiA+IDBcbiAgICByZXR1cm4gWyAtMSwgKCAoIHJlZjAgKyBuICkudG9TdHJpbmcgMzIgKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UgL143ViovaSwgJycsICBdXG4gICAgIyAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMVxuICBOID0gJ04nLmNvZGVQb2ludEF0IDBcbiAgZyA9ICggbiApIC0+XG4gICAgWyBzaWduLCBucnByLCBdID0gZiBuXG4gICAgcmV0dXJuIG5ycHIgaWYgc2lnbiBpcyAwXG4gICAgcmV0dXJuICggU3RyaW5nLmZyb21Db2RlUG9pbnQgTiArIG5ycHIubGVuZ3RoICkgKyBucnByIGlmIHNpZ24gaXMgKzFcbiAgICByZXR1cm4gKCBTdHJpbmcuZnJvbUNvZGVQb2ludCBOIC0gbnJwci5sZW5ndGggKSArIG5ycHJcbiAgaW5mbyAnzqlic2tfX18zJywgJzAgICAgICcsICggZiAwICAgICAgKSwgKCBnIDAgICAgICApXG4gIGluZm8gJ86pYnNrX19fNCcsICcxICAgICAnLCAoIGYgMSAgICAgICksICggZyAxICAgICAgKVxuICBpbmZvICfOqWJza19fXzUnLCAnMiAgICAgJywgKCBmIDIgICAgICApLCAoIGcgMiAgICAgIClcbiAgaW5mbyAnzqlic2tfX182JywgJzMxICAgICcsICggZiAzMSAgICAgKSwgKCBnIDMxICAgICApXG4gIGluZm8gJ86pYnNrX19fNycsICczMiAgICAnLCAoIGYgMzIgICAgICksICggZyAzMiAgICAgKVxuICBpbmZvICfOqWJza19fXzgnLCAnMzMgICAgJywgKCBmIDMzICAgICApLCAoIGcgMzMgICAgIClcbiAgaW5mbyAnzqlic2tfX185JywgJy0xICAgICcsICggZiAtMSAgICAgKSwgKCBnIC0xICAgICApXG4gIGluZm8gJ86pYnNrX18xMCcsICctMzEgICAnLCAoIGYgLTMxICAgICksICggZyAtMzEgICAgKVxuICBpbmZvICfOqWJza19fMTEnLCAnLTMyICAgJywgKCBmIC0zMiAgICApLCAoIGcgLTMyICAgIClcbiAgaW5mbyAnzqlic2tfXzEyJywgJy0zMjc2NycsICggZiAtMzI3NjcgKSwgKCBnIC0zMjc2NyApXG4gIGluZm8gJ86pYnNrX18xMycsICctMzI3NjgnLCAoIGYgLTMyNzY4ICksICggZyAtMzI3NjggKVxuICBpbmZvICfOqWJza19fMTQnLCAnLTMyNzY5JywgKCBmIC0zMjc2OSApLCAoIGcgLTMyNzY5IClcblxuICAjIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLnRvU3RyaW5nIDMyXG4gICMgJzd2dnZ2dnZ2dnZ2J1xuXG4gICMjI1xuXG4gICMgVmVjdG9yaWFsIE51bWJlcnMgKFZOUnMpIHRvIFRyYW5zZm9ybSBUZXh0IGFuZCBLZWVwIEl0XG5cblxuICBYIFsgMTAsIDMyLCBdIGBUaGUgcmVhZGluZyBvZiDmqIIgaXMgPHB5L3l1ZTQvIGZvciA8Z2xvc3MvbXVzaWMvIG9yIDxweS9sZTQvIG1lYW5pbmcgPGdsb3NzL2pveS8uYFxuICBfIFsgMTAsIDMyLCAgMSwgICAgXSBgVGhlIHJlYWRpbmcgb2Yg5qiCIGlzIGBcbiAgWCBbIDEwLCAzMiwgIDIsICAgIF0gYDxweS9gXG4gIFggWyAxMCwgMzIsICAzLCAgICBdIGB5dWU0YFxuICBfIFsgMTAsIDMyLCAgMywgMSwgXSBgPHNwYW4gY2xhc3M9cGlueWluPnl1w6g8L3NwYW4+YFxuICBYIFsgMTAsIDMyLCAgNCwgICAgXSBgL2BcbiAgXyBbIDEwLCAzMiwgIDUsICAgIF0gYCBmb3IgYFxuICBYIFsgMTAsIDMyLCAgNiwgICAgXSBgPGdsb3NzL2BcbiAgWCBbIDEwLCAzMiwgIDcsICAgIF0gYG11c2ljYFxuICBfIFsgMTAsIDMyLCAgNywgMSwgXSBgPHNwYW4gY2xhc3M9Z2xvc3M+bXVzaWM8L3NwYW4+YFxuICBYIFsgMTAsIDMyLCAgOCwgICAgXSBgL2BcbiAgXyBbIDEwLCAzMiwgIDksICAgIF0gYCBvciBgXG4gIFggWyAxMCwgMzIsIDEwLCAgICBdIGA8cHkvYFxuICBYIFsgMTAsIDMyLCAxMSwgICAgXSBgbGU0YFxuICBfIFsgMTAsIDMyLCAxMSwgMSwgXSBgPHNwYW4gY2xhc3M9cGlueWluPmzDqDwvc3Bhbj5gXG4gIF8gWyAxMCwgMzIsIDEyLCAgICBdIGAgbWVhbmluZyBgXG4gIFggWyAxMCwgMzIsIDEzLCAgICBdIGA8Z2xvc3MvYFxuICBYIFsgMTAsIDMyLCAxNCwgICAgXSBgam95YFxuICBfIFsgMTAsIDMyLCAxNCwgMSwgXSBgPHNwYW4gY2xhc3M9Z2xvc3M+am95PC9zcGFuPmBcbiAgWCBbIDEwLCAzMiwgMTUsICAgIF0gYC9gXG4gIF8gWyAxMCwgMzIsIDE2LCAgICBdIGAuXFxuYFxuXG4gIE5PVEUgY291bGQndmUgcmF0aGVyIHN1cnJvdW5kZWQgZ2xvc3NlczpcblxuICBYIFsgMTAsIDMyLCAxMywgICAgXSBgPGdsb3NzL2BcbiAgXyBbIDEwLCAzMiwgMTQsIC0xLF0gYDxzcGFuIGNsYXNzPWdsb3NzPmBcbiAgXyBbIDEwLCAzMiwgMTQsICAgIF0gYGpveWBcbiAgXyBbIDEwLCAzMiwgMTQsIDEsIF0gYDwvc3Bhbj5gXG4gIFggWyAxMCwgMzIsIDE1LCAgICBdIGAvYFxuXG4gICMjI1xuXG5cbiAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5UTVBfcmVxdWlyZV9lbmNvZGVfaW5fYWxwaGFiZXQgPSAtPlxuICBgYGBcbiAgZnVuY3Rpb24gZW5jb2RlQmlnSW50KG51bSwgYWxwaGFiZXQpIHtcbiAgICBpZiAodHlwZW9mIG51bSA9PT0gXCJudW1iZXJcIikgbnVtID0gQmlnSW50KG51bSk7XG4gICAgaWYgKG51bSA8IDBuKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIk9ubHkgbm9ubmVnYXRpdmUgaW50ZWdlcnMgc3VwcG9ydGVkXCIpO1xuICAgIGlmIChudW0gPT09IDBuKSByZXR1cm4gYWxwaGFiZXRbMF07XG5cbiAgICBjb25zdCBiYXNlID0gQmlnSW50KGFscGhhYmV0Lmxlbmd0aCk7XG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XG5cbiAgICB3aGlsZSAobnVtID4gMG4pIHtcbiAgICAgIGNvbnN0IHJlbSA9IG51bSAlIGJhc2U7XG4gICAgICByZXN1bHQgPSBhbHBoYWJldFtOdW1iZXIocmVtKV0gKyByZXN1bHQ7XG4gICAgICBudW0gPSBudW0gLyBiYXNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGVCaWdJbnQoc3RyLCBhbHBoYWJldCkge1xuICAgIGNvbnN0IGJhc2UgPSBCaWdJbnQoYWxwaGFiZXQubGVuZ3RoKTtcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKGFscGhhYmV0LnNwbGl0KFwiXCIpLm1hcCgoY2gsIGkpID0+IFtjaCwgQmlnSW50KGkpXSkpO1xuXG4gICAgbGV0IG51bSA9IDBuO1xuICAgIGZvciAoY29uc3QgY2ggb2Ygc3RyKSB7XG4gICAgICBjb25zdCB2YWwgPSBtYXAuZ2V0KGNoKTtcbiAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNoYXJhY3RlcjogJHtjaH1gKTtcbiAgICAgIG51bSA9IG51bSAqIGJhc2UgKyB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bTtcbiAgfVxuICBgYGBcbiAgcmV0dXJuIHsgZW5jb2RlQmlnSW50LCBkZWNvZGVCaWdJbnQsIH1cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX2NoYXRncHRfc29sdXRpb24gPSAtPlxuICB7IGVuY29kZUJpZ0ludCxcbiAgICBkZWNvZGVCaWdJbnQsICAgfSA9IFRNUF9yZXF1aXJlX2VuY29kZV9pbl9hbHBoYWJldCgpXG4gIHVyZ2UgJ86pYnNrX18xNScsIGVuY29kZUJpZ0ludCAxMjM0NTY3OCwgJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6J1xuICAjIHVyZ2UgJ86pYnNrX18xNicsIHJwciBlbmNvZGVCaWdJbnQgMTAwbiwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXrCqsK1wrrDgMOBw4LDg8OEw4XDhsOHw4jDicOKw4vDjMONw47Dj8OQw5HDksOTw5TDlcOWw5jDmcOaw5vDnMOdw57Dn8Ogw6HDosOjw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDuMO5w7rDu8O8w73DvsO/xIDEgcSCxIPEhMSFxIbEh8SIxInEisSLxIzEjcSOxI/EkMSRxJLEk8SUxJXElsSXxJjEmcSaxJvEnMSdxJ7En8SgxKHEosSjxKTEpcSmxKfEqMSpxKrEq8SsxK3ErsSvxLDEscSyxLPEtMS1xLbEt8S4xLnEusS7xLzEvcS+xL/FgMWBxYLFg8WExYXFhsWHxYjFicWKxYvFjMWNxY7Fj8WQxZHFksWTxZTFlcWWxZfFmMWZxZrFm8WcxZ3FnsWfxaDFocWixaPFpMWlxabFp8WoxanFqsWrxazFrcWuxa/FsMWxxbLFs8W0xbXFtsW3xbjFucW6xbvFvMW9xb7Fv8aAxoHGgsaDxoTGhcaGxofGiMaJxorGi8aMxo3GjsaPxpDGkcaSxpPGlMaVxpbGl8aYxpnGmsabxpzGncaexp/GoMahxqLGo8akxqXGpsanxqjGqcaqxqvGrMatxq7Gr8awxrHGssazxrTGtca2xrfGuMa5xrrGu8a8xr3Gvsa/x4DHgceCx4PHhMeFx4bHh8eIx4nHiseLx4zHjceOx4/HkMeRx5LHk8eUx5XHlseXx5jHmceax5vHnMedx57Hn8egx6HHosejx6THpcemx6fHqMepx6rHq8esx63Hrsevx7DHsceyx7PHtMe1x7bHt8e4x7nHuse7x7zHvce+x7/IgMiByILIg8iEyIXIhsiHyIjIiciKyIvIjMiNyI7Ij8iQyJHIksiTyJTIlciWyJfImMiZyJrIm8icyJ3InsifyKDIociiyKPIpMilyKbIp8ioyKnIqsiryKzIrciuyK/IsMixyLLIs8i0yLXItsi3yLjIuci6yLvIvMi9yL7Iv8mAyYHJgsmDyYTJhcmGyYfJiMmJyYrJi8mMyY3JjsmPyZDJkcmSyZPJlMmVyZbJl8mYyZnJmsmbyZzJncmeyZ/JoMmhyaLJo8mkyaXJpsmnyajJqcmqyavJrMmtya7Jr8mwybHJssmzybTJtcm2ybfJuMm5ybrJu8m8yb3Jvsm/yoDKgcqCyoPKhMqFyobKh8qIyonKisqLyozKjcqOyo/KkMqRypLKk8qUypXKlsqXypjKmcqaypvKnMqdyp7Kn8qgyqHKosqjyqTKpcqmyqfKqMqpyqrKq8qsyq3KrsqvyrDKscqyyrPKtMq1yrbKt8q4yrnKusq7yrzKvcq+yr/LgMuBy4bLh8uIy4nLisuLy4zLjcuOy4/LkMuRy6DLocuiy6PLpMusy67NsM2xzbLNs820zbbNt826zbvNvM29zb/Ohs6IzonOis6Mzo7Oj86QzpHOks6TzpTOlc6WzpfOmM6ZzprOm86czp3Ons6fzqDOoc6jzqTOpc6mzqfOqM6pzqrOq86szq3Ors6vzrDOsc6yzrPOtM61zrbOt864zrnOus67zrzOvc6+zr/PgM+Bz4LPg8+Ez4XPhs+Hz4jPic+Kz4vPjM+Nz47Pj8+Qz5HPks+Tz5TPlc+Wz5fPmM+Zz5rPm8+cz53Pns+fz6DPoc+iz6PPpM+lz6bPp8+oJ1xuICAjIHVyZ2UgJ86pYnNrX18xNycsIHJwciBlbmNvZGVCaWdJbnQgMTAwMG4sICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6wqrCtcK6w4DDgcOCw4PDhMOFw4bDh8OIw4nDisOLw4zDjcOOw4/DkMORw5LDk8OUw5XDlsOYw5nDmsObw5zDncOew5/DoMOhw6LDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7jDucO6w7vDvMO9w77Dv8SAxIHEgsSDxITEhcSGxIfEiMSJxIrEi8SMxI3EjsSPxJDEkcSSxJPElMSVxJbEl8SYxJnEmsSbxJzEncSexJ/EoMShxKLEo8SkxKXEpsSnxKjEqcSqxKvErMStxK7Er8SwxLHEssSzxLTEtcS2xLfEuMS5xLrEu8S8xL3EvsS/xYDFgcWCxYPFhMWFxYbFh8WIxYnFisWLxYzFjcWOxY/FkMWRxZLFk8WUxZXFlsWXxZjFmcWaxZvFnMWdxZ7Fn8WgxaHFosWjxaTFpcWmxafFqMWpxarFq8Wsxa3FrsWvxbDFscWyxbPFtMW1xbbFt8W4xbnFusW7xbzFvcW+xb/GgMaBxoLGg8aExoXGhsaHxojGicaKxovGjMaNxo7Gj8aQxpHGksaTxpTGlcaWxpfGmMaZxprGm8acxp3GnsafxqDGocaixqPGpMalxqbGp8aoxqnGqsarxqzGrcauxq/GsMaxxrLGs8a0xrXGtsa3xrjGuca6xrvGvMa9xr7Gv8eAx4HHgseDx4THhceGx4fHiMeJx4rHi8eMx43HjsePx5DHkceSx5PHlMeVx5bHl8eYx5nHmsebx5zHnceex5/HoMehx6LHo8ekx6XHpsenx6jHqceqx6vHrMetx67Hr8ewx7HHssezx7THtce2x7fHuMe5x7rHu8e8x73Hvse/yIDIgciCyIPIhMiFyIbIh8iIyInIisiLyIzIjciOyI/IkMiRyJLIk8iUyJXIlsiXyJjImciayJvInMidyJ7In8igyKHIosijyKTIpcimyKfIqMipyKrIq8isyK3IrsivyLDIsciyyLPItMi1yLbIt8i4yLnIusi7yLzIvci+yL/JgMmByYLJg8mEyYXJhsmHyYjJicmKyYvJjMmNyY7Jj8mQyZHJksmTyZTJlcmWyZfJmMmZyZrJm8mcyZ3JnsmfyaDJocmiyaPJpMmlyabJp8moyanJqsmryazJrcmuya/JsMmxybLJs8m0ybXJtsm3ybjJucm6ybvJvMm9yb7Jv8qAyoHKgsqDyoTKhcqGyofKiMqJyorKi8qMyo3KjsqPypDKkcqSypPKlMqVypbKl8qYypnKmsqbypzKncqeyp/KoMqhyqLKo8qkyqXKpsqnyqjKqcqqyqvKrMqtyq7Kr8qwyrHKssqzyrTKtcq2yrfKuMq5yrrKu8q8yr3Kvsq/y4DLgcuGy4fLiMuJy4rLi8uMy43LjsuPy5DLkcugy6HLosujy6TLrMuuzbDNsc2yzbPNtM22zbfNus27zbzNvc2/zobOiM6JzorOjM6Ozo/OkM6RzpLOk86UzpXOls6XzpjOmc6azpvOnM6dzp7On86gzqHOo86kzqXOps6nzqjOqc6qzqvOrM6tzq7Or86wzrHOss6zzrTOtc62zrfOuM65zrrOu868zr3Ovs6/z4DPgc+Cz4PPhM+Fz4bPh8+Iz4nPis+Lz4zPjc+Oz4/PkM+Rz5LPk8+Uz5XPls+Xz5jPmc+az5vPnM+dz57Pn8+gz6HPos+jz6TPpc+mz6fPqCdcbiAgIyB1cmdlICfOqWJza19fMTgnLCBycHIgZW5jb2RlQmlnSW50IDEwMDAwbiwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXrCqsK1wrrDgMOBw4LDg8OEw4XDhsOHw4jDicOKw4vDjMONw47Dj8OQw5HDksOTw5TDlcOWw5jDmcOaw5vDnMOdw57Dn8Ogw6HDosOjw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDuMO5w7rDu8O8w73DvsO/xIDEgcSCxIPEhMSFxIbEh8SIxInEisSLxIzEjcSOxI/EkMSRxJLEk8SUxJXElsSXxJjEmcSaxJvEnMSdxJ7En8SgxKHEosSjxKTEpcSmxKfEqMSpxKrEq8SsxK3ErsSvxLDEscSyxLPEtMS1xLbEt8S4xLnEusS7xLzEvcS+xL/FgMWBxYLFg8WExYXFhsWHxYjFicWKxYvFjMWNxY7Fj8WQxZHFksWTxZTFlcWWxZfFmMWZxZrFm8WcxZ3FnsWfxaDFocWixaPFpMWlxabFp8WoxanFqsWrxazFrcWuxa/FsMWxxbLFs8W0xbXFtsW3xbjFucW6xbvFvMW9xb7Fv8aAxoHGgsaDxoTGhcaGxofGiMaJxorGi8aMxo3GjsaPxpDGkcaSxpPGlMaVxpbGl8aYxpnGmsabxpzGncaexp/GoMahxqLGo8akxqXGpsanxqjGqcaqxqvGrMatxq7Gr8awxrHGssazxrTGtca2xrfGuMa5xrrGu8a8xr3Gvsa/x4DHgceCx4PHhMeFx4bHh8eIx4nHiseLx4zHjceOx4/HkMeRx5LHk8eUx5XHlseXx5jHmceax5vHnMedx57Hn8egx6HHosejx6THpcemx6fHqMepx6rHq8esx63Hrsevx7DHsceyx7PHtMe1x7bHt8e4x7nHuse7x7zHvce+x7/IgMiByILIg8iEyIXIhsiHyIjIiciKyIvIjMiNyI7Ij8iQyJHIksiTyJTIlciWyJfImMiZyJrIm8icyJ3InsifyKDIociiyKPIpMilyKbIp8ioyKnIqsiryKzIrciuyK/IsMixyLLIs8i0yLXItsi3yLjIuci6yLvIvMi9yL7Iv8mAyYHJgsmDyYTJhcmGyYfJiMmJyYrJi8mMyY3JjsmPyZDJkcmSyZPJlMmVyZbJl8mYyZnJmsmbyZzJncmeyZ/JoMmhyaLJo8mkyaXJpsmnyajJqcmqyavJrMmtya7Jr8mwybHJssmzybTJtcm2ybfJuMm5ybrJu8m8yb3Jvsm/yoDKgcqCyoPKhMqFyobKh8qIyonKisqLyozKjcqOyo/KkMqRypLKk8qUypXKlsqXypjKmcqaypvKnMqdyp7Kn8qgyqHKosqjyqTKpcqmyqfKqMqpyqrKq8qsyq3KrsqvyrDKscqyyrPKtMq1yrbKt8q4yrnKusq7yrzKvcq+yr/LgMuBy4bLh8uIy4nLisuLy4zLjcuOy4/LkMuRy6DLocuiy6PLpMusy67NsM2xzbLNs820zbbNt826zbvNvM29zb/Ohs6IzonOis6Mzo7Oj86QzpHOks6TzpTOlc6WzpfOmM6ZzprOm86czp3Ons6fzqDOoc6jzqTOpc6mzqfOqM6pzqrOq86szq3Ors6vzrDOsc6yzrPOtM61zrbOt864zrnOus67zrzOvc6+zr/PgM+Bz4LPg8+Ez4XPhs+Hz4jPic+Kz4vPjM+Nz47Pj8+Qz5HPks+Tz5TPlc+Wz5fPmM+Zz5rPm8+cz53Pns+fz6DPoc+iz6PPpM+lz6bPp8+oJ1xuICAjIHVyZ2UgJ86pYnNrX18xOScsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDBuLCAn4oWg4oWh4oWi4oWj4oWk4oWl4oWm4oWn4oWo4oWp4oWq4oWr4oWs4oWt4oWu4oWvJ1xuICAjIHVyZ2UgJ86pYnNrX18yMCcsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDBuLCAn4pGg4pGh4pGi4pGj4pGk4pGl4pGm4pGn4pGo4pGpJ1xuICAjIHVyZ2UgJ86pYnNrX18yMScsIHJwciBlbmNvZGVCaWdJbnQgMSwgJ+KSiOKSieKSiuKSi+KSjOKSjeKSjuKSj+KSkOKSkSdcbiAgIyB1cmdlICfOqWJza19fMjInLCBycHIgZW5jb2RlQmlnSW50IDIsICfikojikonikorikovikoziko3iko7iko/ikpDikpEnXG4gICMgdXJnZSAnzqlic2tfXzIzJywgcnByIGVuY29kZUJpZ0ludCAxMCwgJ+KSiOKSieKSiuKSi+KSjOKSjeKSjuKSj+KSkOKSkSdcbiAgIyB1cmdlICfOqWJza19fMjQnLCBycHIgZW5jb2RlQmlnSW50IDEwLCAn4ryA4ryB4ryC4ryD4ryE4ryF4ryG4ryH4ryI4ryJ4ryK4ryL4ryM4ryN4ryO4ryP4ryQ4ryR4ryS4ryT4ryU4ryV4ryW4ryX4ryY4ryZ4rya4ryb4ryc4ryd4rye4ryf4ryg4ryh4ryi4ryj4ryk4ryl4rym4ryn4ryo4ryp4ryq4ryr4rys4ryt4ryu4ryv4ryw4ryx4ryy4ryz4ry04ry14ry24ry34ry44ry54ry64ry74ry84ry94ry+4ry/4r2A4r2B4r2C4r2D4r2E4r2F4r2G4r2H4r2I4r2J4r2K4r2L4r2M4r2N4r2O4r2P4r2Q4r2R4r2S4r2T4r2U4r2V4r2W4r2X4r2Y4r2Z4r2a4r2b4r2c4r2d4r2e4r2f4r2g4r2h4r2i4r2j4r2k4r2l4r2m4r2n4r2o4r2p4r2q4r2r4r2s4r2t4r2u4r2v4r2w4r2x4r2y4r2z4r204r214r224r234r244r254r264r274r284r294r2+4r2/4r6A4r6B4r6C4r6D4r6E4r6F4r6G4r6H4r6I4r6J4r6K4r6L4r6M4r6N4r6O4r6P4r6Q4r6R4r6S4r6T4r6U4r6V4r6W4r6X4r6Y4r6Z4r6a4r6b4r6c4r6d4r6e4r6f4r6g4r6h4r6i4r6j4r6k4r6l4r6m4r6n4r6o4r6p4r6q4r6r4r6s4r6t4r6u4r6v4r6w4r6x4r6y4r6z4r604r614r624r634r644r654r664r674r684r694r6+4r6/4r+A4r+B4r+C4r+D4r+E4r+F4r+G4r+H4r+I4r+J4r+K4r+L4r+M4r+N4r+O4r+P4r+Q4r+R4r+S4r+T4r+U4r+VJ1xuICAjIHVyZ2UgJ86pYnNrX18yNScsIHJwciBlbmNvZGVCaWdJbnQgMTAwLCAn4ryA4ryB4ryC4ryD4ryE4ryF4ryG4ryH4ryI4ryJ4ryK4ryL4ryM4ryN4ryO4ryP4ryQ4ryR4ryS4ryT4ryU4ryV4ryW4ryX4ryY4ryZ4rya4ryb4ryc4ryd4rye4ryf4ryg4ryh4ryi4ryj4ryk4ryl4rym4ryn4ryo4ryp4ryq4ryr4rys4ryt4ryu4ryv4ryw4ryx4ryy4ryz4ry04ry14ry24ry34ry44ry54ry64ry74ry84ry94ry+4ry/4r2A4r2B4r2C4r2D4r2E4r2F4r2G4r2H4r2I4r2J4r2K4r2L4r2M4r2N4r2O4r2P4r2Q4r2R4r2S4r2T4r2U4r2V4r2W4r2X4r2Y4r2Z4r2a4r2b4r2c4r2d4r2e4r2f4r2g4r2h4r2i4r2j4r2k4r2l4r2m4r2n4r2o4r2p4r2q4r2r4r2s4r2t4r2u4r2v4r2w4r2x4r2y4r2z4r204r214r224r234r244r254r264r274r284r294r2+4r2/4r6A4r6B4r6C4r6D4r6E4r6F4r6G4r6H4r6I4r6J4r6K4r6L4r6M4r6N4r6O4r6P4r6Q4r6R4r6S4r6T4r6U4r6V4r6W4r6X4r6Y4r6Z4r6a4r6b4r6c4r6d4r6e4r6f4r6g4r6h4r6i4r6j4r6k4r6l4r6m4r6n4r6o4r6p4r6q4r6r4r6s4r6t4r6u4r6v4r6w4r6x4r6y4r6z4r604r614r624r634r644r654r664r674r684r694r6+4r6/4r+A4r+B4r+C4r+D4r+E4r+F4r+G4r+H4r+I4r+J4r+K4r+L4r+M4r+N4r+O4r+P4r+Q4r+R4r+S4r+T4r+U4r+VJ1xuICAjIHVyZ2UgJ86pYnNrX18yNicsIHJwciBlbmNvZGVCaWdJbnQgMTAwMCwgJ+K8gOK8geK8guK8g+K8hOK8heK8huK8h+K8iOK8ieK8iuK8i+K8jOK8jeK8juK8j+K8kOK8keK8kuK8k+K8lOK8leK8luK8l+K8mOK8meK8muK8m+K8nOK8neK8nuK8n+K8oOK8oeK8ouK8o+K8pOK8peK8puK8p+K8qOK8qeK8quK8q+K8rOK8reK8ruK8r+K8sOK8seK8suK8s+K8tOK8teK8tuK8t+K8uOK8ueK8uuK8u+K8vOK8veK8vuK8v+K9gOK9geK9guK9g+K9hOK9heK9huK9h+K9iOK9ieK9iuK9i+K9jOK9jeK9juK9j+K9kOK9keK9kuK9k+K9lOK9leK9luK9l+K9mOK9meK9muK9m+K9nOK9neK9nuK9n+K9oOK9oeK9ouK9o+K9pOK9peK9puK9p+K9qOK9qeK9quK9q+K9rOK9reK9ruK9r+K9sOK9seK9suK9s+K9tOK9teK9tuK9t+K9uOK9ueK9uuK9u+K9vOK9veK9vuK9v+K+gOK+geK+guK+g+K+hOK+heK+huK+h+K+iOK+ieK+iuK+i+K+jOK+jeK+juK+j+K+kOK+keK+kuK+k+K+lOK+leK+luK+l+K+mOK+meK+muK+m+K+nOK+neK+nuK+n+K+oOK+oeK+ouK+o+K+pOK+peK+puK+p+K+qOK+qeK+quK+q+K+rOK+reK+ruK+r+K+sOK+seK+suK+s+K+tOK+teK+tuK+t+K+uOK+ueK+uuK+u+K+vOK+veK+vuK+v+K/gOK/geK/guK/g+K/hOK/heK/huK/h+K/iOK/ieK/iuK/i+K/jOK/jeK/juK/j+K/kOK/keK/kuK/k+K/lOK/lSdcbiAgIyB1cmdlICfOqWJza19fMjcnLCBycHIgZW5jb2RlQmlnSW50IDEwMDAwLCAn4ryA4ryB4ryC4ryD4ryE4ryF4ryG4ryH4ryI4ryJ4ryK4ryL4ryM4ryN4ryO4ryP4ryQ4ryR4ryS4ryT4ryU4ryV4ryW4ryX4ryY4ryZ4rya4ryb4ryc4ryd4rye4ryf4ryg4ryh4ryi4ryj4ryk4ryl4rym4ryn4ryo4ryp4ryq4ryr4rys4ryt4ryu4ryv4ryw4ryx4ryy4ryz4ry04ry14ry24ry34ry44ry54ry64ry74ry84ry94ry+4ry/4r2A4r2B4r2C4r2D4r2E4r2F4r2G4r2H4r2I4r2J4r2K4r2L4r2M4r2N4r2O4r2P4r2Q4r2R4r2S4r2T4r2U4r2V4r2W4r2X4r2Y4r2Z4r2a4r2b4r2c4r2d4r2e4r2f4r2g4r2h4r2i4r2j4r2k4r2l4r2m4r2n4r2o4r2p4r2q4r2r4r2s4r2t4r2u4r2v4r2w4r2x4r2y4r2z4r204r214r224r234r244r254r264r274r284r294r2+4r2/4r6A4r6B4r6C4r6D4r6E4r6F4r6G4r6H4r6I4r6J4r6K4r6L4r6M4r6N4r6O4r6P4r6Q4r6R4r6S4r6T4r6U4r6V4r6W4r6X4r6Y4r6Z4r6a4r6b4r6c4r6d4r6e4r6f4r6g4r6h4r6i4r6j4r6k4r6l4r6m4r6n4r6o4r6p4r6q4r6r4r6s4r6t4r6u4r6v4r6w4r6x4r6y4r6z4r604r614r624r634r644r654r664r674r684r694r6+4r6/4r+A4r+B4r+C4r+D4r+E4r+F4r+G4r+H4r+I4r+J4r+K4r+L4r+M4r+N4r+O4r+P4r+Q4r+R4r+S4r+T4r+U4r+VJ1xuICAjIHVyZ2UgJ86pYnNrX18yOCcsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDAwLCAn4ryA4ryB4ryC4ryD4ryE4ryF4ryG4ryH4ryI4ryJ4ryK4ryL4ryM4ryN4ryO4ryP4ryQ4ryR4ryS4ryT4ryU4ryV4ryW4ryX4ryY4ryZ4rya4ryb4ryc4ryd4rye4ryf4ryg4ryh4ryi4ryj4ryk4ryl4rym4ryn4ryo4ryp4ryq4ryr4rys4ryt4ryu4ryv4ryw4ryx4ryy4ryz4ry04ry14ry24ry34ry44ry54ry64ry74ry84ry94ry+4ry/4r2A4r2B4r2C4r2D4r2E4r2F4r2G4r2H4r2I4r2J4r2K4r2L4r2M4r2N4r2O4r2P4r2Q4r2R4r2S4r2T4r2U4r2V4r2W4r2X4r2Y4r2Z4r2a4r2b4r2c4r2d4r2e4r2f4r2g4r2h4r2i4r2j4r2k4r2l4r2m4r2n4r2o4r2p4r2q4r2r4r2s4r2t4r2u4r2v4r2w4r2x4r2y4r2z4r204r214r224r234r244r254r264r274r284r294r2+4r2/4r6A4r6B4r6C4r6D4r6E4r6F4r6G4r6H4r6I4r6J4r6K4r6L4r6M4r6N4r6O4r6P4r6Q4r6R4r6S4r6T4r6U4r6V4r6W4r6X4r6Y4r6Z4r6a4r6b4r6c4r6d4r6e4r6f4r6g4r6h4r6i4r6j4r6k4r6l4r6m4r6n4r6o4r6p4r6q4r6r4r6s4r6t4r6u4r6v4r6w4r6x4r6y4r6z4r604r614r624r634r644r654r664r674r684r694r6+4r6/4r+A4r+B4r+C4r+D4r+E4r+F4r+G4r+H4r+I4r+J4r+K4r+L4r+M4r+N4r+O4r+P4r+Q4r+R4r+S4r+T4r+U4r+VJ1xuICAjIHVyZ2UgJ86pYnNrX18yOScsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDAwLCAn44Ki44Kk44Km44Ko44Kq44Kr44Kt44Kv44Kx44KzJ1xuICB1cmdlICfOqWJza19fMzAnLCBycHIgZW5jb2RlQmlnSW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAnJychXCIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0AnJydcbiAgdXJnZSAnzqlic2tfXzMxJywgcnByIGVuY29kZUJpZ0ludCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgJyEjJCUmKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW11eX2BhYmMnXG4gIHVyZ2UgJ86pYnNrX18zMicsIHJwciBlbmNvZGVCaWdJbnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsICchIyQlJigpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+wqHCosKjwqTCpcKmwqfCqMKpwqrCq8Kswq7Cr8KwwrHCssKzwrTCtcK2wrfCuMK5wrrCu8K8wr3CvsK/w4DDgcOCw4PDhMOFw4bDh8OIw4nDisOLw4zDjcOOw4/DkMORw5LDk8OUw5XDlsOXw5jDmcOaw5vDnMOdw57Dn8Ogw6HDosOjw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDt8O4w7nDusO7w7zDvcO+w78nXG4gIHVyZ2UgJ86pYnNrX18zMycsIHJwciBlbmNvZGVCaWdJbnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsICchIyQlJigpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+wqHCosKjwqTCpcKmwqfCqMKpwqrCq8Kswq7Cr8KwwrHCssKzwrTCtcK2wrfCuMK5wrrCu8K8wr3CvsK/w4DDgcOCw4PDhMOFw4YnXG4gIHVyZ2UgJ86pYnNrX18zNCcsIHJwciBlbmNvZGVCaWdJbnQgMCwgJzAxJ1xuICB1cmdlICfOqWJza19fMzUnLCBycHIgZW5jb2RlQmlnSW50IDEsICcwMSdcbiAgdXJnZSAnzqlic2tfXzM2JywgcnByIGVuY29kZUJpZ0ludCAyLCAnMDEnXG4gIHVyZ2UgJ86pYnNrX18zNycsIHJwciBlbmNvZGVCaWdJbnQgMywgJzAxJ1xuICB1cmdlICfOqWJza19fMzgnLCBycHIgZW5jb2RlQmlnSW50IDcsICcwMSdcbiAgdXJnZSAnzqlic2tfXzM5JywgcnByIGVuY29kZUJpZ0ludCA4LCAnMDEnXG4gIHVyZ2UgJ86pYnNrX180MCcsIHJwciBlbmNvZGVCaWdJbnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsICcwMSdcbiAgIyArNTcgZnJlZSBjb2RlcG9pbnRzXG4gICMgIC04IHBvcyBuZWdhdGl2ZVxuICAjICAtOCBwb3MgcG9zaXRpdmVcbiAgIyAgLTEgemVyb1xuICAjIOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFxuICAjICs0MCBmb3JcbiAgIyAtMjAgbmVnYXRpdmUgc2luZ2xlLWRpZ2l0XG4gICMgLTIwIHBvc2l0aXZlIHNpbmdsZS1kaWdpdFxuICAjIDLDhsOGw4bDhsOGw4bDhlxuXG4gICMjI1xuXG5cbiAgKiBmb3IgbnVtYmVycyBgLTIwIDw9IG4gPD0gKzIwYDpcbiAgICAqIG5lZ2F0aXZlIHVuaWxpdGVyYWwgbnVtYmVycyAgICAgICAgICAgKE5VTnMpOiAgLTIwIC4uICDDj8OQw5HDksOTw5TDlcOWw5fDmMOZw5rDm8Ocw53DnsOfw6DDocOiIC4uIC0xXG4gICAgICAqIHVzZSBuZWdhdGl2ZSBpbmRleCB3aXRoIGBhdGAgaW5kZXhpbmcgYXMgaW4gYG51bi5hdCAtM2AgdG8gZ2V0IGDDoGAgZm9yIGAtM2BcbiAgICAqIHplcm8gdW5pbGl0ZXJhbCBudW1iZXIgICAgICAgICAgICAgICAgKFpVTik6ICAgIMKxMCAuLiAgw6NcbiAgICAqIHBvc2l0aXZlIHVuaWxpdGVyYWwgbnVtYmVycyAgICAgICAgICAgKFBVTnMpOiAgICsxIC4uICDDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO3IC4uICsyMFxuICAgICAgKiB1c2UgbmV4dCBzdGVwXG4gICAgKiB6ZXJvIGFuZCBwb3NpdGl2ZSB1bmlsaXRlcmFsIG51bWJlcnMgIChaUFVOcyk6ICArMCAuLiDDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7cgLi4gKzIwXG4gICAgICAqIHByZXBlbmRpbmcgWlVOIHRvIFBVTnMgZ2l2ZXMgWlBVTnMsIHVzZSBgbmAgYXMgaW5kZXggYXMgaW4gYHpwdW5bICszIF1gIG9yIGB6cHVuLmF0ICszYCB0byBnZXQgYMOlYFxuXG4gICogZm9yIG51bWJlcnMgYG4gPiArMjBgOlxuICAgICogY29udmVydCB0byBCYXNlLTEyOCB1c2luZyBhbHBoYWJldDogISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fsKhwqLCo8KkwqXCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGXG4gICAgKiBwcmVwZW5kIHBvc2l0aXZlIG1hZ25pZmllciAgICAgICAgICAgIChQTUFHKSA6ICAxIHBvc2l0aXZlIGRpZ2l0IC4uICDDuMO5w7rDu8O8w73DvsO/ICAuLiAgOCBwb3NpdGl2ZSBkaWdpdHNcblxuICAqIGZvciBudW1iZXJzIGBuIDwgLTIwYDpcbiAgICAqIGFkZCBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgIHRvIGBuYCB0byBzaGlmdCB0aGUgbnVtYmVyIGludG8gdGhlIHBvc2l0aXZlLCB0aGVuIGNvbnZlcnQgdG8gQmFzZS0xMjhcbiAgICAqIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAgaXMgYDLDhsOGw4bDhsOGw4bDhmAgaW4gQmFzZS0xMjgsIG1lYW5pbmcgdGhhdCBsZWFkaW5nIGAvXjLDhiogL2AgY2FuIGJlIGRpc2NhcmRlZFxuICAgICogcHJlcGVuZCBuZWdhdGl2ZSBtYWduaWZpZXIgICAgICAgICAgICAoTk1BRykgOiAgMSBuZWdhdGl2ZSBkaWdpdCAuLiAgw47DjcOMw4vDisOJw4jDhyAgLi4gIDggbmVnYXRpdmUgZGlnaXRzXG5cblxuICDDhyAgICA4IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiCAgICA3IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiSAgICA2IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiiAgICA1IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiyAgICA0IG5lZ2F0aXZlIGRpZ2l0c1xuICDDjCAgICAzIG5lZ2F0aXZlIGRpZ2l0c1xuICDDjSAgICAyIG5lZ2F0aXZlIGRpZ2l0c1xuICDDjiAgICAxIG5lZ2F0aXZlIGRpZ2l0c1xuICDDjyAgLTIwXG4gIMOQICAtMTlcbiAgw5EgIC0xOFxuICDDkiAgLTE3XG4gIMOTICAtMTZcbiAgw5QgIC0xNVxuICDDlSAgLTE0XG4gIMOWICAtMTNcbiAgw5cgIC0xMlxuICDDmCAgLTExXG4gIMOZICAtMTBcbiAgw5ogICAtOVxuICDDmyAgIC04XG4gIMOcICAgLTdcbiAgw50gICAtNlxuICDDniAgIC01XG4gIMOfICAgLTRcbiAgw6AgICAtM1xuICDDoSAgIC0yXG4gIMOiICAgLTEgbmVnYXRpdmUgc21hbGwgc2luZ2xlLWxldHRlciBpbmRpY2VzXG5cbiAgw6MgICDCsTAgemVyb1xuXG4gIMOkICAgKzEgcG9zaXRpdmUgc21hbGwgc2luZ2xlLWxldHRlciBpbmRpY2VzXG4gIMOlICAgKzJcbiAgw6YgICArM1xuICDDpyAgICs0XG4gIMOoICAgKzVcbiAgw6kgICArNlxuICDDqiAgICs3XG4gIMOrICAgKzhcbiAgw6wgICArOVxuICDDrSAgKzEwXG4gIMOuICArMTFcbiAgw68gICsxMlxuICDDsCAgKzEzXG4gIMOxICArMTRcbiAgw7IgICsxNVxuICDDsyAgKzE2XG4gIMO0ICArMTdcbiAgw7UgICsxOFxuICDDtiAgKzE5XG4gIMO3ICArMjBcbiAgw7ggICAgMSBwb3NpdGl2ZSBkaWdpdHNcbiAgw7kgICAgMiBwb3NpdGl2ZSBkaWdpdHNcbiAgw7ogICAgMyBwb3NpdGl2ZSBkaWdpdHNcbiAgw7sgICAgNCBwb3NpdGl2ZSBkaWdpdHNcbiAgw7wgICAgNSBwb3NpdGl2ZSBkaWdpdHNcbiAgw70gICAgNiBwb3NpdGl2ZSBkaWdpdHNcbiAgw74gICAgNyBwb3NpdGl2ZSBkaWdpdHNcbiAgw78gICAgOCBwb3NpdGl2ZSBkaWdpdHNcblxuXG4gICMjI1xuXG5cblxuICBSID0gW11cbiAgZm9yIGNpZCBpbiBbIDB4MDAyMSAuLiAweDAwZmYgXVxuICAgICMgY29udGludWUgdW5sZXNzIC9eXFxwe0x9JC92LnRlc3QgKCBjaHIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWQgKVxuICAgICMgY29udGludWUgdW5sZXNzIC9eLiQvdi50ZXN0ICggY2hyID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkIClcbiAgICBjb250aW51ZSBpZiAvXlxccHtDfSQvdi50ZXN0ICggY2hyID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkIClcbiAgICBjb250aW51ZSBpZiAvXihbJ1wiXFxcXF18XFxwe1N9KSQvdi50ZXN0IGNoclxuICAgIFIucHVzaCBjaHJcbiAgdXJnZSAnzqlic2tfXzQxJywgcnByIFIuam9pbiAnJ1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9faG9sbGVyaXRoX3ZkeF9zb3J0a2V5ID0gLT5cbiAgIyMjIHZlY3RvcmlhbCBpbmRleCwgYS5rLmEuICd2aW5kZXgnLCBhLmsuYS4gVkRYLCBuZXh0IHZlcnNpb24gb2YgVk5SIGFzIGltcGxlbWVudGVkIGluIGBob2xsZXJpdGgtY29kZWNgXG4gICMjI1xuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHsgZW5jb2RlQmlnSW50LFxuICAgIGRlY29kZUJpZ0ludCwgICB9ID0gVE1QX3JlcXVpcmVfZW5jb2RlX2luX2FscGhhYmV0KClcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0YW50cyA9IEMgPSBPYmplY3QuZnJlZXplXG4gICAgbWF4X2ludGVnZXI6ICBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICAgIG1pbl9pbnRlZ2VyOiAgTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVJcbiAgICB6cHVuczogICAgICAgICfDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7cnICMgemVybyBhbmQgcG9zaXRpdmUgdW5pbGl0ZXJhbCBudW1iZXJzXG4gICAgbnVuczogICAgICAgICAnw4/DkMORw5LDk8OUw5XDlsOXw5jDmcOaw5vDnMOdw57Dn8Ogw6HDoicgICMgbmVnYXRpdmUgICAgICAgICAgdW5pbGl0ZXJhbCBudW1iZXJzXG4gICAgenB1bl9tYXg6ICAgICArMjBcbiAgICBudW5fbWluOiAgICAgIC0yMFxuICAgIGJhc2UxMjg6ICAgICAgJyEjJCUmKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW11eX2AnIFxcXG4gICAgICAgICAgICAgICAgICAgICsgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fsKhwqLCo8KkwqXCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGJ1xuICAgIHBtYWc6ICAgICAgICAgJyDDuMO5w7rDu8O8w73DvsO/JyAgIyBwb3NpdGl2ZSAnbWFnbmlmaWVyJyBmb3IgMSB0byA4IHBvc2l0aXZlIGRpZ2l0c1xuICAgIG5tYWc6ICAgICAgICAgJyDDjsONw4zDi8OKw4nDiMOHJyAgIyBuZWdhdGl2ZSAnbWFnbmlmaWVyJyBmb3IgMSB0byA4IG5lZ2F0aXZlIGRpZ2l0c1xuICAgIG5sZWFkX3JlOiAgICAgL14yw4YqLyAgICAgICMgJ25lZ2F0aXZlIGxlYWRlcicsIGRpc2NhcmRhYmxlIGxlYWRpbmcgZGlnaXRzIG9mIGxpZnRlZCBuZWdhdGl2ZSBudW1iZXJzXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpbnRlcm5hbHMgPSBPYmplY3QuZnJlZXplIHsgY29uc3RhbnRzLCB9XG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjbGFzcyBWaW5kZXhcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZW5jb2RlOiAoIGludGVnZXJfb3JfbGlzdCApIC0+XG4gICAgICAjIyMgVEFJTlQgdXNlIHByb3BlciB2YWxpZGF0aW9uICMjI1xuICAgICAgaWYgQXJyYXkuaXNBcnJheSBpbnRlZ2VyX29yX2xpc3RcbiAgICAgICAgcmV0dXJuICggQGVuY29kZSBuIGZvciBuIGluIGludGVnZXJfb3JfbGlzdCApLmpvaW4gJydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgbiA9IGludGVnZXJfb3JfbGlzdFxuICAgICAgdW5sZXNzIE51bWJlci5pc0Zpbml0ZSBuXG4gICAgICAgIHR5cGUgPSAnWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWCdcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizql2ZHhfXzQyIGV4cGVjdGVkIGEgZmxvYXQsIGdvdCBhICN7dHlwZX1cIlxuICAgICAgdW5sZXNzIEMubWluX2ludGVnZXIgPD0gbiA8PSBDLm1heF9pbnRlZ2VyXG4gICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pdmR4X180MyBleHBlY3RlZCBhIGZsb2F0IGJldHdlZW4gI3tDLm1pbl9pbnRlZ2VyfSBhbmQgI3tDLm1heF9pbnRlZ2VyfSwgZ290ICN7bn1cIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gQGVuY29kZV9pbnRlZ2VyIG5cblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZW5jb2RlX2ludGVnZXI6ICggbiApIC0+XG4gICAgICAjIyMgTk9URSBjYWxsIG9ubHkgd2hlcmUgYXNzdXJlZCBgbmAgaXMgaW50ZWdlciB3aXRoaW4gbWFnbml0dWRlIG9mIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAgIyMjXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgWmVybyBvciBzbWFsbCBwb3NpdGl2ZTpcbiAgICAgIHJldHVybiAoIEMuenB1bnMuYXQgbiApIGlmIDAgICAgICAgICAgPD0gbiA8PSBDLnpwdW5fbWF4XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgU21hbGwgbmVnYXRpdmU6XG4gICAgICByZXR1cm4gKCBDLm51bnMuYXQgIG4gKSBpZiBDLm51bl9taW4gIDw9IG4gPCAgMFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIEJpZyBwb3NpdGl2ZTpcbiAgICAgIGlmIG4gPiBDLnpwdW5fbWF4XG4gICAgICAgIFIgPSBlbmNvZGVCaWdJbnQgbiwgQy5iYXNlMTI4XG4gICAgICAgIHJldHVybiAoIEMucG1hZy5hdCBSLmxlbmd0aCApICsgUlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIEJpZyBuZWdhdGl2ZTpcbiAgICAgIFIgPSAoIGVuY29kZUJpZ0ludCAoIG4gKyBDLm1heF9pbnRlZ2VyICksIEMuYmFzZTEyOCApLnJlcGxhY2UgQy5ubGVhZF9yZSwgJydcbiAgICAgIHJldHVybiAoIEMubm1hZy5hdCBSLmxlbmd0aCApICsgUlxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgVkRYID0gbmV3IFZpbmRleCgpXG4gIGhlbHAgJ86pYnNrX180NCcsIFZEWC5lbmNvZGVfaW50ZWdlciAwXG4gIGhlbHAgJ86pYnNrX180NScsIFZEWC5lbmNvZGVfaW50ZWdlciAtMVxuICBoZWxwICfOqWJza19fNDYnLCBWRFguZW5jb2RlX2ludGVnZXIgKzFcbiAgaGVscCAnzqlic2tfXzQ3JywgVkRYLmVuY29kZV9pbnRlZ2VyIDEwXG4gIGhlbHAgJ86pYnNrX180OCcsIFZEWC5lbmNvZGVfaW50ZWdlciAxMDBcbiAgaGVscCAnzqlic2tfXzQ5JywgVkRYLmVuY29kZV9pbnRlZ2VyIDEyN1xuICBoZWxwICfOqWJza19fNTAnLCBWRFguZW5jb2RlX2ludGVnZXIgMTI4XG4gIGhlbHAgJ86pYnNrX181MScsIFZEWC5lbmNvZGVfaW50ZWdlciAxMjlcbiAgaGVscCAnzqlic2tfXzUyJywgVkRYLmVuY29kZV9pbnRlZ2VyIC0xMFxuICBoZWxwICfOqWJza19fNTMnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMFxuICBoZWxwICfOqWJza19fNTQnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEyN1xuICBoZWxwICfOqWJza19fNTUnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEyOFxuICBoZWxwICfOqWJza19fNTYnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEyOVxuICBoZWxwICfOqWJza19fNTcnLCBWRFguZW5jb2RlX2ludGVnZXIgKzEyMzQ1Njc4OTAxMjM0NVxuICBoZWxwICfOqWJza19fNTgnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEyMzQ1Njc4OTAxMjM0NVxuICBoZWxwICfOqWJza19fNTknLCBWRFguZW5jb2RlX2ludGVnZXIgQy5tYXhfaW50ZWdlclxuICBoZWxwICfOqWJza19fNjAnLCBWRFguZW5jb2RlX2ludGVnZXIgQy5taW5faW50ZWdlclxuICBoZWxwICfOqWJza19fNjEnLCBWRFguZW5jb2RlIFsgMSwgMiwgMywgMTAwLCBdXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXR1cm4gbnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBkZW1vX2JpbmFyeV9sZXhpY29ncmFwaGljX3NvcnRrZXkoKVxuICBkZW1vX2NoYXRncHRfc29sdXRpb24oKVxuICBkZW1vX2hvbGxlcml0aF92ZHhfc29ydGtleSgpXG4gIHJldHVybiBudWxsXG4iXX0=
