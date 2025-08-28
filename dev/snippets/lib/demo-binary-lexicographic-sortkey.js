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
    var N, d, f1, g1, i, k, key, keys, len, max_length, q, ref0, sk, trailer, v;
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
    f1 = function(n) {
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
    g1 = function(n) {
      var nrpr, sign;
      [sign, nrpr] = f1(n);
      if (sign === 0) {
        return nrpr;
      }
      if (sign === +1) {
        return (String.fromCodePoint(N + nrpr.length)) + nrpr;
      }
      return (String.fromCodePoint(N - nrpr.length)) + nrpr;
    };
    info('Ωbsk___3', '0     ', f1(0), g1(0));
    info('Ωbsk___4', '1     ', f1(1), g1(1));
    info('Ωbsk___5', '2     ', f1(2), g1(2));
    info('Ωbsk___6', '31    ', f1(31), g1(31));
    info('Ωbsk___7', '32    ', f1(32), g1(32));
    info('Ωbsk___8', '33    ', f1(33), g1(33));
    info('Ωbsk___9', '-1    ', f1(-1), g1(-1));
    info('Ωbsk__10', '-31   ', f1(-31), g1(-31));
    info('Ωbsk__11', '-32   ', f1(-32), g1(-32));
    info('Ωbsk__12', '-32767', f1(-32767), g1(-32767));
    info('Ωbsk__13', '-32768', f1(-32768), g1(-32768));
    info('Ωbsk__14', '-32769', f1(-32769), g1(-32769));
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
    var C, VDX, Vindex, constants, constants_10, constants_128, d, decodeBigInt, e, encodeBigInt, error, i, internals, j, len, len1;
    /* vectorial index, a.k.a. 'vindex', a.k.a. VDX, next version of VNR as implemented in `hollerith-codec`
     */
    //=========================================================================================================
    ({encodeBigInt, decodeBigInt} = TMP_require_encode_in_alphabet());
    //---------------------------------------------------------------------------------------------------------
    constants_128 = Object.freeze({
      max_integer: Number.MAX_SAFE_INTEGER,
      min_integer: Number.MIN_SAFE_INTEGER,
      zpuns: 'ãäåæçèéêëìíîïðñòóôõö÷', // zero and positive uniliteral numbers
      nuns: 'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ', // negative          uniliteral numbers
      zpun_max: +20,
      nun_min: -20,
      zero_pad_length: 8,
      alphabet: '!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`' + 'abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ',
      /* TAINT since small ints up to +/-20 are represented by uniliterals, PMAG `ø` and NMAG `Î` will never
         be used, thus can be freed for other(?) things */
      pmag: ' øùúûüýþÿ', // positive 'magnifier' for 1 to 8 positive digits
      nmag: ' ÎÍÌËÊÉÈÇ', // negative 'magnifier' for 1 to 8 negative digits
      nlead_re: /^2Æ*/ // 'negative leader', discardable leading digits of lifted negative numbers
    });
    
    //---------------------------------------------------------------------------------------------------------
    constants_10 = Object.freeze({
      max_integer: +999,
      min_integer: -999,
      zpuns: 'ãäåæ', // zero and positive uniliteral numbers
      nuns: 'ÏÐÑ', // negative          uniliteral numbers
      zpun_max: +3,
      nun_min: -3,
      zero_pad_length: 3,
      alphabet: '0123456789',
      pmag: ' øùúûüýþÿ', // positive 'magnifier' for 1 to 8 positive digits
      nmag: ' ÎÍÌËÊÉÈÇ', // negative 'magnifier' for 1 to 8 negative digits
      nlead_re: /^9*(?=[0-9])/ // 'negative leader', discardable leading digits of lifted negative numbers
    });
    
    //---------------------------------------------------------------------------------------------------------
    // constants = C = constants_128
    constants = C = constants_10;
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
          R = encodeBigInt(n, C.alphabet);
          return (C.pmag.at(R.length)) + R;
        }
        //.....................................................................................................
        // Big negative:
        R = encodeBigInt(n + C.max_integer + 1, C.alphabet);
        if (R.length < C.zero_pad_length) {
          R = R.padStart(C.zero_pad_length, C.alphabet.at(0));
        } else {
          R = R.replace(C.nlead_re, '');
        }
        return (C.nmag.at(R.length)) + R;
      }

    };
    //---------------------------------------------------------------------------------------------------------
    VDX = new Vindex();
    help('Ωbsk__44', VDX.encode_integer(+1));
    help('Ωbsk__45', VDX.encode_integer(+2));
    help('Ωbsk__46', VDX.encode_integer(+3));
    help('Ωbsk__47', VDX.encode_integer(+4));
    help('Ωbsk__48', VDX.encode_integer(+5));
    help('Ωbsk__49', VDX.encode_integer(10));
    help('Ωbsk__50', VDX.encode_integer(20));
    help('Ωbsk__51', VDX.encode_integer(21));
    help('Ωbsk__52', VDX.encode_integer(100));
    help('Ωbsk__53', VDX.encode_integer(127));
    help('Ωbsk__54', VDX.encode_integer(128));
    help('Ωbsk__55', VDX.encode_integer(129));
    help('Ωbsk__56', VDX.encode_integer(+123456789012345));
    help('Ωbsk__57', VDX.encode_integer(C.max_integer));
    info('Ωbsk__58');
    help('Ωbsk__59', VDX.encode_integer(0));
    info('Ωbsk__60');
    help('Ωbsk__61', VDX.encode_integer(-1));
    help('Ωbsk__62', VDX.encode_integer(-2));
    help('Ωbsk__63', VDX.encode_integer(-3));
    help('Ωbsk__64', VDX.encode_integer(-4));
    help('Ωbsk__65', VDX.encode_integer(-5));
    help('Ωbsk__66', VDX.encode_integer(-10));
    help('Ωbsk__67', VDX.encode_integer(-20));
    help('Ωbsk__68', VDX.encode_integer(-21));
    help('Ωbsk__69', VDX.encode_integer(-100));
    help('Ωbsk__70', VDX.encode_integer(-127));
    help('Ωbsk__71', VDX.encode_integer(-128));
    help('Ωbsk__72', VDX.encode_integer(-129));
    // help 'Ωbsk__73', VDX.encode_integer -1000
    // help 'Ωbsk__74', VDX.encode_integer -10000
    // help 'Ωbsk__75', VDX.encode_integer -100000
    // help 'Ωbsk__76', VDX.encode_integer -1000000
    // help 'Ωbsk__77', VDX.encode_integer -10000000
    // help 'Ωbsk__78', VDX.encode_integer -100000000
    // help 'Ωbsk__79', VDX.encode_integer -1000000000
    // help 'Ωbsk__80', VDX.encode_integer -10000000000
    // help 'Ωbsk__81', VDX.encode_integer -100000000000
    // help 'Ωbsk__82', VDX.encode_integer -1000000000000
    // help 'Ωbsk__83', VDX.encode_integer -10000000000000
    // help 'Ωbsk__84', VDX.encode_integer -100000000000000
    // help 'Ωbsk__85', VDX.encode_integer -123456789012345
    // help 'Ωbsk__86', VDX.encode_integer -800
    // help 'Ωbsk__87', VDX.encode_integer -900
    // help 'Ωbsk__88', VDX.encode_integer -950
    // help 'Ωbsk__89', VDX.encode_integer -970
    // help 'Ωbsk__90', VDX.encode_integer -980
    // help 'Ωbsk__91', VDX.encode_integer -990
    // help 'Ωbsk__92', VDX.encode_integer -995
    // help 'Ωbsk__93', VDX.encode_integer -996
    // help 'Ωbsk__94', VDX.encode_integer -997
    // help 'Ωbsk__95', VDX.encode_integer -998
    // help 'Ωbsk__96', VDX.encode_integer -999
    help('Ωbsk__97', VDX.encode_integer(C.min_integer + 3));
    help('Ωbsk__98', VDX.encode_integer(C.min_integer + 2));
    help('Ωbsk__99', VDX.encode_integer(C.min_integer + 1));
    help('Ωbsk_100', VDX.encode_integer(C.min_integer));
    info('Ωbsk_101');
    help('Ωbsk_102', VDX.encode([1, 2, 3, 100]));
    //---------------------------------------------------------------------------------------------------------
    d = [
      {
        sk: null,
        vdx: [-999],
        nr: 1
      },
      {
        sk: null,
        vdx: [-99],
        nr: 2
      },
      {
        sk: null,
        vdx: [-90],
        nr: 3
      },
      {
        sk: null,
        vdx: [-11],
        nr: 4
      },
      {
        sk: null,
        vdx: [-10],
        nr: 5
      },
      {
        sk: null,
        vdx: [-9],
        nr: 6
      },
      {
        sk: null,
        vdx: [-8],
        nr: 7
      },
      {
        sk: null,
        vdx: [-7],
        nr: 8
      },
      {
        sk: null,
        vdx: [-6],
        nr: 9
      },
      {
        sk: null,
        vdx: [-5],
        nr: 10
      },
      {
        sk: null,
        vdx: [-4],
        nr: 11
      },
      {
        sk: null,
        vdx: [-3],
        nr: 12
      },
      {
        sk: null,
        vdx: [-2],
        nr: 13
      },
      {
        sk: null,
        vdx: [-1],
        nr: 14 // !!!
      },
      {
        sk: null,
        vdx: [+0,
      -20],
        nr: 15 // !!!
      },
      {
        sk: null,
        vdx: [+0],
        nr: 16 // !!!
      },
      {
        sk: null,
        vdx: [+0,
      +20],
        nr: 17
      },
      {
        sk: null,
        vdx: [+9],
        nr: 18 // !!!
      },
      {
        sk: null,
        vdx: [+10,
      -3],
        nr: 19 // !!!
      },
      {
        sk: null,
        vdx: [+10,
      -2],
        nr: 20 // !!!
      },
      {
        sk: null,
        vdx: [+10,
      -1],
        nr: 21 // !!!
      },
      {
        sk: null,
        vdx: [+10],
        nr: 22 // !!!
      },
      {
        sk: null,
        vdx: [+10,
      +0],
        nr: 23
      },
      {
        sk: null,
        vdx: [+10,
      +1],
        nr: 24
      },
      {
        sk: null,
        vdx: [+10,
      +10,
      -1],
        nr: 25 // !!!
      },
      {
        sk: null,
        vdx: [+10,
      +10],
        nr: 26 // !!!
      },
      {
        sk: null,
        vdx: [+10,
      +20],
        nr: 27
      },
      {
        sk: null,
        vdx: [+20],
        nr: 28
      },
      {
        sk: null,
        vdx: [+20,
      +10],
        nr: 29
      },
      {
        sk: null,
        vdx: [+90],
        nr: 30
      },
      {
        sk: null,
        vdx: [+900],
        nr: 31
      }
    ];
    for (i = 0, len = d.length; i < len; i++) {
      e = d[i];
      try {
        e.sk = VDX.encode(e.vdx);
      } catch (error1) {
        error = error1;
        warn('Ωbsk_100', e, error.message);
        e.sk = '???';
      }
    }
    d.sort(function(a, b) {
      if (a.sk < b.sk) {
        return -1;
      }
      if (a.sk > b.sk) {
        return +1;
      }
      return 0;
    });
    for (j = 0, len1 = d.length; j < len1; j++) {
      e = d[j];
      debug('Ωbsk_103', e);
    }
    //---------------------------------------------------------------------------------------------------------
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      demo_binary_lexicographic_sortkey();
      demo_chatgpt_solution();
      demo_hollerith_vdx_sortkey();
      // echo f"-#{n}:0>2.0f;" for n in [ 99 .. 0 ]
      // echo f"+#{n}:0>2.0f;" for n in [ 0 .. 99 ]
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tYmluYXJ5LWxleGljb2dyYXBoaWMtc29ydGtleS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBQTtBQUFBLE1BQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSw4QkFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxpQ0FBQSxFQUFBLHFCQUFBLEVBQUEsMEJBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLDJCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxJQVJGLEVBU0UsR0FURixFQVVFLElBVkYsRUFXRSxPQVhGLEVBWUUsR0FaRixDQUFBLEdBWTRCLEdBQUcsQ0FBQyxHQVpoQzs7RUFhQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQTFCQTs7Ozs7Ozs7Ozs7Ozs7RUF1Q0Es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QUE7O01BQUEsS0FBQSxDQUFNLFVBQU4sRUFBa0IsQ0FBbEI7SUFBQSxDQTFMRjs7QUE0TEUsV0FBTztFQTdMb0IsRUF0VjdCOzs7RUFzaEJBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7TUFDdEMsaUNBQUEsQ0FBQTtNQUNBLHFCQUFBLENBQUE7TUFDQSwwQkFBQSxDQUFBLEVBRkY7OztBQUtFLGFBQU87SUFOK0IsQ0FBQSxJQUF4Qzs7QUF0aEJBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdkZW1vLWJ1aWxkLXVuaWNvZGUtcmFuZ2VzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHdoaXRlXG4gIGdyZWVuXG4gIGxpbWVcbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiMgd3JpdGUgICAgICAgICAgICAgICAgICAgICA9ICggcCApIC0+IHByb2Nlc3Muc3Rkb3V0LndyaXRlIHBcbiMgeyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbiMgR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG4jIHsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG4jIG1rZGlycCAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdta2RpcnAnXG4jIGVudl9wYXRocyAgICAgICAgICAgICAgICAgPSAoIHJlcXVpcmUgJ2Vudi1wYXRocycgKS5kZWZhdWx0ICdkZW1vLW5vZGUtc3FsaXRlJ1xuIyBTUUxJVEUgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpzcWxpdGUnXG4jIFBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4jIHsgU1FMIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2RiYXknXG4jIHsgZGVmYXVsdDogXFxcbiMgICBvbl9wcm9jZXNzX2V4aXQsICAgICAgfSA9IHJlcXVpcmUgJ2V4aXQtaG9vaydcbiMgRlMgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6ZnMnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcbnsgaGlkZSxcbiAgc2V0X2dldHRlciwgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9tYW5hZ2VkX3Byb3BlcnR5X3Rvb2xzKClcbnsgdGltZWl0LCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9iZW5jaG1hcmtpbmcoKVxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX2JpbmFyeV9sZXhpY29ncmFwaGljX3NvcnRrZXkgPSA9PlxuICAjIyMgaW5zcGlyZWQgYnkgJiB0aHggdG8gaHR0cHM6Ly9zdGF0ZWx5LmNsb3VkL2Jsb2cvZW5jb2Rpbmctc29ydGFibGUtYmluYXJ5LWRhdGFiYXNlLWtleXMvICMjI1xuICBkID1cbiAgICBLMDAwOiAgICAgICAnWyAtOTk5LCAgICAgICAgICAgXSAxJ1xuICAgIEwwMDogICAgICAgICdbICAtOTksICAgICAgICAgICBdIDInXG4gICAgTDA5OiAgICAgICAgJ1sgIC05MCwgICAgICAgICAgIF0gMydcbiAgICBMODg6ICAgICAgICAnWyAgLTExLCAgICAgICAgICAgXSA0J1xuICAgIEw4OTogICAgICAgICdbICAtMTAsICAgICAgICAgICBdIDUnXG4gICAgTTA6ICAgICAgICAgJ1sgICAtOSwgICAgICAgICAgIF0gNidcbiAgICBNMTogICAgICAgICAnWyAgIC04LCAgICAgICAgICAgXSA3J1xuICAgIE0yOiAgICAgICAgICdbICAgLTcsICAgICAgICAgICBdIDgnXG4gICAgTTM6ICAgICAgICAgJ1sgICAtNiwgICAgICAgICAgIF0gOSdcbiAgICBNNDogICAgICAgICAnWyAgIC01LCAgICAgICAgICAgXSAxMCdcbiAgICBNNTogICAgICAgICAnWyAgIC00LCAgICAgICAgICAgXSAxMSdcbiAgICBNNjogICAgICAgICAnWyAgIC0zLCAgICAgICAgICAgXSAxMidcbiAgICBNNzogICAgICAgICAnWyAgIC0yLCAgICAgICAgICAgXSAxMydcbiAgICBNODogICAgICAgICAnWyAgIC0xLCAgICAgICAgICAgXSAxNCdcbiAgICBOTDIwOiAgICAgICAnWyAgICswLCAgLTIwLCAgICAgXSAxNSdcbiAgICBOOiAgICAgICAgICAnWyAgICswLCAgICAgICAgICAgXSAxNidcbiAgICBOUDIwOiAgICAgICAnWyAgICswLCAgKzIwLCAgICAgXSAxNydcbiAgICBPOTogICAgICAgICAnWyAgICs5LCAgICAgICAgICAgXSAxOCdcbiAgICBQMTBNNjogICAgICAnWyAgKzEwLCAgIC0zLCAgICAgXSAxOSdcbiAgICBQMTBNNzogICAgICAnWyAgKzEwLCAgIC0yLCAgICAgXSAyMCdcbiAgICBQMTBNODogICAgICAnWyAgKzEwLCAgIC0xLCAgICAgXSAyMSdcbiAgICBQMTA6ICAgICAgICAnWyAgKzEwLCAgICAgICAgICAgXSAyMidcbiAgICBQMTBOOiAgICAgICAnWyAgKzEwLCAgICswLCAgICAgXSAyMydcbiAgICBQMTBPMTogICAgICAnWyAgKzEwLCAgICsxLCAgICAgXSAyNCdcbiAgICBQMTBQMTBNODogICAnWyAgKzEwLCAgKzEwLCAtMSwgXSAyNSdcbiAgICBQMTBQMTA6ICAgICAnWyAgKzEwLCAgKzEwLCAgICAgXSAyNidcbiAgICBQMTBQMjA6ICAgICAnWyAgKzEwLCAgKzIwLCAgICAgXSAyNydcbiAgICBQMjA6ICAgICAgICAnWyAgKzIwLCAgICAgICAgICAgXSAyOCdcbiAgICBQMjBQMTA6ICAgICAnWyAgKzIwLCAgKzEwLCAgICAgXSAyOSdcbiAgICBQOTA6ICAgICAgICAnWyAgKzkwLCAgICAgICAgICAgXSAzMCdcbiAgICBROTAwOiAgICAgICAnWyArOTAwLCAgICAgICAgICAgXSAzMSdcblxuICAgICMgaWRlbnRpY2FsIGIvYyBvZiBwYWRkaW5nOlxuICAgICMgUDEwOiAgICAgICAgJ1sgICsxMCwgICAgICAgXSAyNCdcbiAgICAjIFAxME46ICAgICAgJ1sgICsxMCwgICArMCwgXSAyNSdcblxuICBtYXhfbGVuZ3RoICA9ICBNYXRoLm1heCAoIGsubGVuZ3RoIGZvciBrIGluIE9iamVjdC5rZXlzIGQgKS4uLlxuICAjIyMgdHJhaWxlciBjYW4gYmUgb2YgZml4ZWQgbGVuZ3RoIHNpbmNlIHRoZXJlIGlzIGFuIHVwcGVyIGxpbWl0IHRvIGRpZ2l0IHBvc2l0aW9ucyBnaXZlbiBieVxuICBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiBhcyByZXByZXNlbnRlZCBpbiB0aGUgYmFzZSBvZiBjaG9pY2UgKGhlcmUgMTApIHRpbWVzIHRoZSBtYXhpbXVtIG51bWJlciBvZlxuICBkaW1lbnNpb25zIG9mIHRoZSBWTlI6ICMjI1xuICB0cmFpbGVyICAgICA9ICdOTk5OTk5OTk5OTidcbiAgZGVidWcgJ86pYnNrX19fMScsIHsgbWF4X2xlbmd0aCwgfVxuICAjIGQxID0gT2JqZWN0LmZyb21FbnRyaWVzICggWyAoIGsucGFkRW5kIG1heF9sZW5ndGgsICdOJyApLCB2LCBdIGZvciBrLCB2IG9mIGQgKVxuICAjIGQxID0gT2JqZWN0LmZyb21FbnRyaWVzICggWyAoIGsgKyB0cmFpbGVyICksIHYsIF0gZm9yIGssIHYgb2YgZCApXG4gIGtleXMgICAgICAgID0gKCBrIGZvciBbIHNrLCBrLCBdIGluICggWyBrICsgdHJhaWxlciwgaywgXSBmb3IgayBvZiBkICkuc29ydCgpIClcbiAgZm9yIGtleSBpbiBrZXlzXG4gICAgayA9IGxpbWUgcmV2ZXJzZSBmXCIgI3trZXl9Oj4xMGM7IFwiXG4gICAgdiA9IGdvbGQgcmV2ZXJzZSBmXCIgI3tkWyBrZXkgXX06PDMwYzsgXCJcbiAgICBxID0ga2V5LnJlcGxhY2UgLyhbQS1aXSlbMC05XSovZywgJyQxJ1xuICAgIHEgPSBxLmxlbmd0aFxuICAgIGhlbHAgJ86pYnNrX19fMicsIFwiI3trfSN7dn0gI3txfVwiXG4gIHJlZjAgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICBmMSA9ICggbiApIC0+XG4gICAgcmV0dXJuIFsgIDAsICdOJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gaWYgbiBpcyAwXG4gICAgcmV0dXJuIFsgKzEsICggICAgICAgICAgICBuLnRvU3RyaW5nIDMyICkudG9Mb3dlckNhc2UoKSwgIF0gaWYgbiA+IDBcbiAgICByZXR1cm4gWyAtMSwgKCAoIHJlZjAgKyBuICkudG9TdHJpbmcgMzIgKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UgL143ViovaSwgJycsICBdXG4gICAgIyAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMVxuICBOID0gJ04nLmNvZGVQb2ludEF0IDBcbiAgZzEgPSAoIG4gKSAtPlxuICAgIFsgc2lnbiwgbnJwciwgXSA9IGYxIG5cbiAgICByZXR1cm4gbnJwciBpZiBzaWduIGlzIDBcbiAgICByZXR1cm4gKCBTdHJpbmcuZnJvbUNvZGVQb2ludCBOICsgbnJwci5sZW5ndGggKSArIG5ycHIgaWYgc2lnbiBpcyArMVxuICAgIHJldHVybiAoIFN0cmluZy5mcm9tQ29kZVBvaW50IE4gLSBucnByLmxlbmd0aCApICsgbnJwclxuICBpbmZvICfOqWJza19fXzMnLCAnMCAgICAgJywgKCBmMSAwICAgICAgKSwgKCBnMSAwICAgICAgKVxuICBpbmZvICfOqWJza19fXzQnLCAnMSAgICAgJywgKCBmMSAxICAgICAgKSwgKCBnMSAxICAgICAgKVxuICBpbmZvICfOqWJza19fXzUnLCAnMiAgICAgJywgKCBmMSAyICAgICAgKSwgKCBnMSAyICAgICAgKVxuICBpbmZvICfOqWJza19fXzYnLCAnMzEgICAgJywgKCBmMSAzMSAgICAgKSwgKCBnMSAzMSAgICAgKVxuICBpbmZvICfOqWJza19fXzcnLCAnMzIgICAgJywgKCBmMSAzMiAgICAgKSwgKCBnMSAzMiAgICAgKVxuICBpbmZvICfOqWJza19fXzgnLCAnMzMgICAgJywgKCBmMSAzMyAgICAgKSwgKCBnMSAzMyAgICAgKVxuICBpbmZvICfOqWJza19fXzknLCAnLTEgICAgJywgKCBmMSAtMSAgICAgKSwgKCBnMSAtMSAgICAgKVxuICBpbmZvICfOqWJza19fMTAnLCAnLTMxICAgJywgKCBmMSAtMzEgICAgKSwgKCBnMSAtMzEgICAgKVxuICBpbmZvICfOqWJza19fMTEnLCAnLTMyICAgJywgKCBmMSAtMzIgICAgKSwgKCBnMSAtMzIgICAgKVxuICBpbmZvICfOqWJza19fMTInLCAnLTMyNzY3JywgKCBmMSAtMzI3NjcgKSwgKCBnMSAtMzI3NjcgKVxuICBpbmZvICfOqWJza19fMTMnLCAnLTMyNzY4JywgKCBmMSAtMzI3NjggKSwgKCBnMSAtMzI3NjggKVxuICBpbmZvICfOqWJza19fMTQnLCAnLTMyNzY5JywgKCBmMSAtMzI3NjkgKSwgKCBnMSAtMzI3NjkgKVxuXG4gICMgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIudG9TdHJpbmcgMzJcbiAgIyAnN3Z2dnZ2dnZ2dnYnXG5cbiAgIyMjXG5cbiAgIyBWZWN0b3JpYWwgTnVtYmVycyAoVk5ScykgdG8gVHJhbnNmb3JtIFRleHQgYW5kIEtlZXAgSXRcblxuXG4gIFggWyAxMCwgMzIsIF0gYFRoZSByZWFkaW5nIG9mIOaogiBpcyA8cHkveXVlNC8gZm9yIDxnbG9zcy9tdXNpYy8gb3IgPHB5L2xlNC8gbWVhbmluZyA8Z2xvc3Mvam95Ly5gXG4gIF8gWyAxMCwgMzIsICAxLCAgICBdIGBUaGUgcmVhZGluZyBvZiDmqIIgaXMgYFxuICBYIFsgMTAsIDMyLCAgMiwgICAgXSBgPHB5L2BcbiAgWCBbIDEwLCAzMiwgIDMsICAgIF0gYHl1ZTRgXG4gIF8gWyAxMCwgMzIsICAzLCAxLCBdIGA8c3BhbiBjbGFzcz1waW55aW4+eXXDqDwvc3Bhbj5gXG4gIFggWyAxMCwgMzIsICA0LCAgICBdIGAvYFxuICBfIFsgMTAsIDMyLCAgNSwgICAgXSBgIGZvciBgXG4gIFggWyAxMCwgMzIsICA2LCAgICBdIGA8Z2xvc3MvYFxuICBYIFsgMTAsIDMyLCAgNywgICAgXSBgbXVzaWNgXG4gIF8gWyAxMCwgMzIsICA3LCAxLCBdIGA8c3BhbiBjbGFzcz1nbG9zcz5tdXNpYzwvc3Bhbj5gXG4gIFggWyAxMCwgMzIsICA4LCAgICBdIGAvYFxuICBfIFsgMTAsIDMyLCAgOSwgICAgXSBgIG9yIGBcbiAgWCBbIDEwLCAzMiwgMTAsICAgIF0gYDxweS9gXG4gIFggWyAxMCwgMzIsIDExLCAgICBdIGBsZTRgXG4gIF8gWyAxMCwgMzIsIDExLCAxLCBdIGA8c3BhbiBjbGFzcz1waW55aW4+bMOoPC9zcGFuPmBcbiAgXyBbIDEwLCAzMiwgMTIsICAgIF0gYCBtZWFuaW5nIGBcbiAgWCBbIDEwLCAzMiwgMTMsICAgIF0gYDxnbG9zcy9gXG4gIFggWyAxMCwgMzIsIDE0LCAgICBdIGBqb3lgXG4gIF8gWyAxMCwgMzIsIDE0LCAxLCBdIGA8c3BhbiBjbGFzcz1nbG9zcz5qb3k8L3NwYW4+YFxuICBYIFsgMTAsIDMyLCAxNSwgICAgXSBgL2BcbiAgXyBbIDEwLCAzMiwgMTYsICAgIF0gYC5cXG5gXG5cbiAgTk9URSBjb3VsZCd2ZSByYXRoZXIgc3Vycm91bmRlZCBnbG9zc2VzOlxuXG4gIFggWyAxMCwgMzIsIDEzLCAgICBdIGA8Z2xvc3MvYFxuICBfIFsgMTAsIDMyLCAxNCwgLTEsXSBgPHNwYW4gY2xhc3M9Z2xvc3M+YFxuICBfIFsgMTAsIDMyLCAxNCwgICAgXSBgam95YFxuICBfIFsgMTAsIDMyLCAxNCwgMSwgXSBgPC9zcGFuPmBcbiAgWCBbIDEwLCAzMiwgMTUsICAgIF0gYC9gXG5cbiAgIyMjXG5cblxuICByZXR1cm4gbnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblRNUF9yZXF1aXJlX2VuY29kZV9pbl9hbHBoYWJldCA9IC0+XG4gIGBgYFxuICBmdW5jdGlvbiBlbmNvZGVCaWdJbnQobnVtLCBhbHBoYWJldCkge1xuICAgIGlmICh0eXBlb2YgbnVtID09PSBcIm51bWJlclwiKSBudW0gPSBCaWdJbnQobnVtKTtcbiAgICBpZiAobnVtIDwgMG4pIHRocm93IG5ldyBSYW5nZUVycm9yKFwiT25seSBub25uZWdhdGl2ZSBpbnRlZ2VycyBzdXBwb3J0ZWRcIik7XG4gICAgaWYgKG51bSA9PT0gMG4pIHJldHVybiBhbHBoYWJldFswXTtcblxuICAgIGNvbnN0IGJhc2UgPSBCaWdJbnQoYWxwaGFiZXQubGVuZ3RoKTtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcblxuICAgIHdoaWxlIChudW0gPiAwbikge1xuICAgICAgY29uc3QgcmVtID0gbnVtICUgYmFzZTtcbiAgICAgIHJlc3VsdCA9IGFscGhhYmV0W051bWJlcihyZW0pXSArIHJlc3VsdDtcbiAgICAgIG51bSA9IG51bSAvIGJhc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZUJpZ0ludChzdHIsIGFscGhhYmV0KSB7XG4gICAgY29uc3QgYmFzZSA9IEJpZ0ludChhbHBoYWJldC5sZW5ndGgpO1xuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoYWxwaGFiZXQuc3BsaXQoXCJcIikubWFwKChjaCwgaSkgPT4gW2NoLCBCaWdJbnQoaSldKSk7XG5cbiAgICBsZXQgbnVtID0gMG47XG4gICAgZm9yIChjb25zdCBjaCBvZiBzdHIpIHtcbiAgICAgIGNvbnN0IHZhbCA9IG1hcC5nZXQoY2gpO1xuICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgY2hhcmFjdGVyOiAke2NofWApO1xuICAgICAgbnVtID0gbnVtICogYmFzZSArIHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtO1xuICB9XG4gIGBgYFxuICByZXR1cm4geyBlbmNvZGVCaWdJbnQsIGRlY29kZUJpZ0ludCwgfVxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9fY2hhdGdwdF9zb2x1dGlvbiA9IC0+XG4gIHsgZW5jb2RlQmlnSW50LFxuICAgIGRlY29kZUJpZ0ludCwgICB9ID0gVE1QX3JlcXVpcmVfZW5jb2RlX2luX2FscGhhYmV0KClcbiAgdXJnZSAnzqlic2tfXzE1JywgZW5jb2RlQmlnSW50IDEyMzQ1Njc4LCAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonXG4gICMgdXJnZSAnzqlic2tfXzE2JywgcnByIGVuY29kZUJpZ0ludCAxMDBuLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5esKqwrXCusOAw4HDgsODw4TDhcOGw4fDiMOJw4rDi8OMw43DjsOPw5DDkcOSw5PDlMOVw5bDmMOZw5rDm8Ocw53DnsOfw6DDocOiw6PDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO4w7nDusO7w7zDvcO+w7/EgMSBxILEg8SExIXEhsSHxIjEicSKxIvEjMSNxI7Ej8SQxJHEksSTxJTElcSWxJfEmMSZxJrEm8ScxJ3EnsSfxKDEocSixKPEpMSlxKbEp8SoxKnEqsSrxKzErcSuxK/EsMSxxLLEs8S0xLXEtsS3xLjEucS6xLvEvMS9xL7Ev8WAxYHFgsWDxYTFhcWGxYfFiMWJxYrFi8WMxY3FjsWPxZDFkcWSxZPFlMWVxZbFl8WYxZnFmsWbxZzFncWexZ/FoMWhxaLFo8WkxaXFpsWnxajFqcWqxavFrMWtxa7Fr8WwxbHFssWzxbTFtcW2xbfFuMW5xbrFu8W8xb3FvsW/xoDGgcaCxoPGhMaFxobGh8aIxonGisaLxozGjcaOxo/GkMaRxpLGk8aUxpXGlsaXxpjGmcaaxpvGnMadxp7Gn8agxqHGosajxqTGpcamxqfGqMapxqrGq8asxq3GrsavxrDGscayxrPGtMa1xrbGt8a4xrnGusa7xrzGvca+xr/HgMeBx4LHg8eEx4XHhseHx4jHiceKx4vHjMeNx47Hj8eQx5HHkseTx5THlceWx5fHmMeZx5rHm8ecx53Hnsefx6DHoceix6PHpMelx6bHp8eox6nHqserx6zHrceux6/HsMexx7LHs8e0x7XHtse3x7jHuce6x7vHvMe9x77Hv8iAyIHIgsiDyITIhciGyIfIiMiJyIrIi8iMyI3IjsiPyJDIkciSyJPIlMiVyJbIl8iYyJnImsibyJzIncieyJ/IoMihyKLIo8ikyKXIpsinyKjIqciqyKvIrMityK7Ir8iwyLHIssizyLTItci2yLfIuMi5yLrIu8i8yL3Ivsi/yYDJgcmCyYPJhMmFyYbJh8mIyYnJismLyYzJjcmOyY/JkMmRyZLJk8mUyZXJlsmXyZjJmcmayZvJnMmdyZ7Jn8mgyaHJosmjyaTJpcmmyafJqMmpyarJq8msya3JrsmvybDJscmyybPJtMm1ybbJt8m4ybnJusm7ybzJvcm+yb/KgMqByoLKg8qEyoXKhsqHyojKicqKyovKjMqNyo7Kj8qQypHKksqTypTKlcqWypfKmMqZyprKm8qcyp3KnsqfyqDKocqiyqPKpMqlyqbKp8qoyqnKqsqryqzKrcquyq/KsMqxyrLKs8q0yrXKtsq3yrjKucq6yrvKvMq9yr7Kv8uAy4HLhsuHy4jLicuKy4vLjMuNy47Lj8uQy5HLoMuhy6LLo8uky6zLrs2wzbHNss2zzbTNts23zbrNu828zb3Nv86GzojOic6KzozOjs6PzpDOkc6SzpPOlM6VzpbOl86YzpnOms6bzpzOnc6ezp/OoM6hzqPOpM6lzqbOp86ozqnOqs6rzqzOrc6uzq/OsM6xzrLOs860zrXOts63zrjOuc66zrvOvM69zr7Ov8+Az4HPgs+Dz4TPhc+Gz4fPiM+Jz4rPi8+Mz43Pjs+Pz5DPkc+Sz5PPlM+Vz5bPl8+Yz5nPms+bz5zPnc+ez5/PoM+hz6LPo8+kz6XPps+nz6gnXG4gICMgdXJnZSAnzqlic2tfXzE3JywgcnByIGVuY29kZUJpZ0ludCAxMDAwbiwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXrCqsK1wrrDgMOBw4LDg8OEw4XDhsOHw4jDicOKw4vDjMONw47Dj8OQw5HDksOTw5TDlcOWw5jDmcOaw5vDnMOdw57Dn8Ogw6HDosOjw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDuMO5w7rDu8O8w73DvsO/xIDEgcSCxIPEhMSFxIbEh8SIxInEisSLxIzEjcSOxI/EkMSRxJLEk8SUxJXElsSXxJjEmcSaxJvEnMSdxJ7En8SgxKHEosSjxKTEpcSmxKfEqMSpxKrEq8SsxK3ErsSvxLDEscSyxLPEtMS1xLbEt8S4xLnEusS7xLzEvcS+xL/FgMWBxYLFg8WExYXFhsWHxYjFicWKxYvFjMWNxY7Fj8WQxZHFksWTxZTFlcWWxZfFmMWZxZrFm8WcxZ3FnsWfxaDFocWixaPFpMWlxabFp8WoxanFqsWrxazFrcWuxa/FsMWxxbLFs8W0xbXFtsW3xbjFucW6xbvFvMW9xb7Fv8aAxoHGgsaDxoTGhcaGxofGiMaJxorGi8aMxo3GjsaPxpDGkcaSxpPGlMaVxpbGl8aYxpnGmsabxpzGncaexp/GoMahxqLGo8akxqXGpsanxqjGqcaqxqvGrMatxq7Gr8awxrHGssazxrTGtca2xrfGuMa5xrrGu8a8xr3Gvsa/x4DHgceCx4PHhMeFx4bHh8eIx4nHiseLx4zHjceOx4/HkMeRx5LHk8eUx5XHlseXx5jHmceax5vHnMedx57Hn8egx6HHosejx6THpcemx6fHqMepx6rHq8esx63Hrsevx7DHsceyx7PHtMe1x7bHt8e4x7nHuse7x7zHvce+x7/IgMiByILIg8iEyIXIhsiHyIjIiciKyIvIjMiNyI7Ij8iQyJHIksiTyJTIlciWyJfImMiZyJrIm8icyJ3InsifyKDIociiyKPIpMilyKbIp8ioyKnIqsiryKzIrciuyK/IsMixyLLIs8i0yLXItsi3yLjIuci6yLvIvMi9yL7Iv8mAyYHJgsmDyYTJhcmGyYfJiMmJyYrJi8mMyY3JjsmPyZDJkcmSyZPJlMmVyZbJl8mYyZnJmsmbyZzJncmeyZ/JoMmhyaLJo8mkyaXJpsmnyajJqcmqyavJrMmtya7Jr8mwybHJssmzybTJtcm2ybfJuMm5ybrJu8m8yb3Jvsm/yoDKgcqCyoPKhMqFyobKh8qIyonKisqLyozKjcqOyo/KkMqRypLKk8qUypXKlsqXypjKmcqaypvKnMqdyp7Kn8qgyqHKosqjyqTKpcqmyqfKqMqpyqrKq8qsyq3KrsqvyrDKscqyyrPKtMq1yrbKt8q4yrnKusq7yrzKvcq+yr/LgMuBy4bLh8uIy4nLisuLy4zLjcuOy4/LkMuRy6DLocuiy6PLpMusy67NsM2xzbLNs820zbbNt826zbvNvM29zb/Ohs6IzonOis6Mzo7Oj86QzpHOks6TzpTOlc6WzpfOmM6ZzprOm86czp3Ons6fzqDOoc6jzqTOpc6mzqfOqM6pzqrOq86szq3Ors6vzrDOsc6yzrPOtM61zrbOt864zrnOus67zrzOvc6+zr/PgM+Bz4LPg8+Ez4XPhs+Hz4jPic+Kz4vPjM+Nz47Pj8+Qz5HPks+Tz5TPlc+Wz5fPmM+Zz5rPm8+cz53Pns+fz6DPoc+iz6PPpM+lz6bPp8+oJ1xuICAjIHVyZ2UgJ86pYnNrX18xOCcsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDBuLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5esKqwrXCusOAw4HDgsODw4TDhcOGw4fDiMOJw4rDi8OMw43DjsOPw5DDkcOSw5PDlMOVw5bDmMOZw5rDm8Ocw53DnsOfw6DDocOiw6PDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO4w7nDusO7w7zDvcO+w7/EgMSBxILEg8SExIXEhsSHxIjEicSKxIvEjMSNxI7Ej8SQxJHEksSTxJTElcSWxJfEmMSZxJrEm8ScxJ3EnsSfxKDEocSixKPEpMSlxKbEp8SoxKnEqsSrxKzErcSuxK/EsMSxxLLEs8S0xLXEtsS3xLjEucS6xLvEvMS9xL7Ev8WAxYHFgsWDxYTFhcWGxYfFiMWJxYrFi8WMxY3FjsWPxZDFkcWSxZPFlMWVxZbFl8WYxZnFmsWbxZzFncWexZ/FoMWhxaLFo8WkxaXFpsWnxajFqcWqxavFrMWtxa7Fr8WwxbHFssWzxbTFtcW2xbfFuMW5xbrFu8W8xb3FvsW/xoDGgcaCxoPGhMaFxobGh8aIxonGisaLxozGjcaOxo/GkMaRxpLGk8aUxpXGlsaXxpjGmcaaxpvGnMadxp7Gn8agxqHGosajxqTGpcamxqfGqMapxqrGq8asxq3GrsavxrDGscayxrPGtMa1xrbGt8a4xrnGusa7xrzGvca+xr/HgMeBx4LHg8eEx4XHhseHx4jHiceKx4vHjMeNx47Hj8eQx5HHkseTx5THlceWx5fHmMeZx5rHm8ecx53Hnsefx6DHoceix6PHpMelx6bHp8eox6nHqserx6zHrceux6/HsMexx7LHs8e0x7XHtse3x7jHuce6x7vHvMe9x77Hv8iAyIHIgsiDyITIhciGyIfIiMiJyIrIi8iMyI3IjsiPyJDIkciSyJPIlMiVyJbIl8iYyJnImsibyJzIncieyJ/IoMihyKLIo8ikyKXIpsinyKjIqciqyKvIrMityK7Ir8iwyLHIssizyLTItci2yLfIuMi5yLrIu8i8yL3Ivsi/yYDJgcmCyYPJhMmFyYbJh8mIyYnJismLyYzJjcmOyY/JkMmRyZLJk8mUyZXJlsmXyZjJmcmayZvJnMmdyZ7Jn8mgyaHJosmjyaTJpcmmyafJqMmpyarJq8msya3JrsmvybDJscmyybPJtMm1ybbJt8m4ybnJusm7ybzJvcm+yb/KgMqByoLKg8qEyoXKhsqHyojKicqKyovKjMqNyo7Kj8qQypHKksqTypTKlcqWypfKmMqZyprKm8qcyp3KnsqfyqDKocqiyqPKpMqlyqbKp8qoyqnKqsqryqzKrcquyq/KsMqxyrLKs8q0yrXKtsq3yrjKucq6yrvKvMq9yr7Kv8uAy4HLhsuHy4jLicuKy4vLjMuNy47Lj8uQy5HLoMuhy6LLo8uky6zLrs2wzbHNss2zzbTNts23zbrNu828zb3Nv86GzojOic6KzozOjs6PzpDOkc6SzpPOlM6VzpbOl86YzpnOms6bzpzOnc6ezp/OoM6hzqPOpM6lzqbOp86ozqnOqs6rzqzOrc6uzq/OsM6xzrLOs860zrXOts63zrjOuc66zrvOvM69zr7Ov8+Az4HPgs+Dz4TPhc+Gz4fPiM+Jz4rPi8+Mz43Pjs+Pz5DPkc+Sz5PPlM+Vz5bPl8+Yz5nPms+bz5zPnc+ez5/PoM+hz6LPo8+kz6XPps+nz6gnXG4gICMgdXJnZSAnzqlic2tfXzE5JywgcnByIGVuY29kZUJpZ0ludCAxMDAwMG4sICfihaDihaHihaLihaPihaTihaXihabihafihajihaniharihavihaziha3iha7iha8nXG4gICMgdXJnZSAnzqlic2tfXzIwJywgcnByIGVuY29kZUJpZ0ludCAxMDAwMG4sICfikaDikaHikaLikaPikaTikaXikabikafikajikaknXG4gICMgdXJnZSAnzqlic2tfXzIxJywgcnByIGVuY29kZUJpZ0ludCAxLCAn4pKI4pKJ4pKK4pKL4pKM4pKN4pKO4pKP4pKQ4pKRJ1xuICAjIHVyZ2UgJ86pYnNrX18yMicsIHJwciBlbmNvZGVCaWdJbnQgMiwgJ+KSiOKSieKSiuKSi+KSjOKSjeKSjuKSj+KSkOKSkSdcbiAgIyB1cmdlICfOqWJza19fMjMnLCBycHIgZW5jb2RlQmlnSW50IDEwLCAn4pKI4pKJ4pKK4pKL4pKM4pKN4pKO4pKP4pKQ4pKRJ1xuICAjIHVyZ2UgJ86pYnNrX18yNCcsIHJwciBlbmNvZGVCaWdJbnQgMTAsICfivIDivIHivILivIPivITivIXivIbivIfivIjivInivIrivIvivIzivI3ivI7ivI/ivJDivJHivJLivJPivJTivJXivJbivJfivJjivJnivJrivJvivJzivJ3ivJ7ivJ/ivKDivKHivKLivKPivKTivKXivKbivKfivKjivKnivKrivKvivKzivK3ivK7ivK/ivLDivLHivLLivLPivLTivLXivLbivLfivLjivLnivLrivLvivLzivL3ivL7ivL/ivYDivYHivYLivYPivYTivYXivYbivYfivYjivYnivYrivYvivYzivY3ivY7ivY/ivZDivZHivZLivZPivZTivZXivZbivZfivZjivZnivZrivZvivZzivZ3ivZ7ivZ/ivaDivaHivaLivaPivaTivaXivabivafivajivanivarivavivaziva3iva7iva/ivbDivbHivbLivbPivbTivbXivbbivbfivbjivbnivbrivbvivbzivb3ivb7ivb/ivoDivoHivoLivoPivoTivoXivobivofivojivonivorivovivozivo3ivo7ivo/ivpDivpHivpLivpPivpTivpXivpbivpfivpjivpnivprivpvivpzivp3ivp7ivp/ivqDivqHivqLivqPivqTivqXivqbivqfivqjivqnivqrivqvivqzivq3ivq7ivq/ivrDivrHivrLivrPivrTivrXivrbivrfivrjivrnivrrivrvivrzivr3ivr7ivr/iv4Div4Hiv4Liv4Piv4Tiv4Xiv4biv4fiv4jiv4niv4riv4viv4ziv43iv47iv4/iv5Div5Hiv5Liv5Piv5Tiv5UnXG4gICMgdXJnZSAnzqlic2tfXzI1JywgcnByIGVuY29kZUJpZ0ludCAxMDAsICfivIDivIHivILivIPivITivIXivIbivIfivIjivInivIrivIvivIzivI3ivI7ivI/ivJDivJHivJLivJPivJTivJXivJbivJfivJjivJnivJrivJvivJzivJ3ivJ7ivJ/ivKDivKHivKLivKPivKTivKXivKbivKfivKjivKnivKrivKvivKzivK3ivK7ivK/ivLDivLHivLLivLPivLTivLXivLbivLfivLjivLnivLrivLvivLzivL3ivL7ivL/ivYDivYHivYLivYPivYTivYXivYbivYfivYjivYnivYrivYvivYzivY3ivY7ivY/ivZDivZHivZLivZPivZTivZXivZbivZfivZjivZnivZrivZvivZzivZ3ivZ7ivZ/ivaDivaHivaLivaPivaTivaXivabivafivajivanivarivavivaziva3iva7iva/ivbDivbHivbLivbPivbTivbXivbbivbfivbjivbnivbrivbvivbzivb3ivb7ivb/ivoDivoHivoLivoPivoTivoXivobivofivojivonivorivovivozivo3ivo7ivo/ivpDivpHivpLivpPivpTivpXivpbivpfivpjivpnivprivpvivpzivp3ivp7ivp/ivqDivqHivqLivqPivqTivqXivqbivqfivqjivqnivqrivqvivqzivq3ivq7ivq/ivrDivrHivrLivrPivrTivrXivrbivrfivrjivrnivrrivrvivrzivr3ivr7ivr/iv4Div4Hiv4Liv4Piv4Tiv4Xiv4biv4fiv4jiv4niv4riv4viv4ziv43iv47iv4/iv5Div5Hiv5Liv5Piv5Tiv5UnXG4gICMgdXJnZSAnzqlic2tfXzI2JywgcnByIGVuY29kZUJpZ0ludCAxMDAwLCAn4ryA4ryB4ryC4ryD4ryE4ryF4ryG4ryH4ryI4ryJ4ryK4ryL4ryM4ryN4ryO4ryP4ryQ4ryR4ryS4ryT4ryU4ryV4ryW4ryX4ryY4ryZ4rya4ryb4ryc4ryd4rye4ryf4ryg4ryh4ryi4ryj4ryk4ryl4rym4ryn4ryo4ryp4ryq4ryr4rys4ryt4ryu4ryv4ryw4ryx4ryy4ryz4ry04ry14ry24ry34ry44ry54ry64ry74ry84ry94ry+4ry/4r2A4r2B4r2C4r2D4r2E4r2F4r2G4r2H4r2I4r2J4r2K4r2L4r2M4r2N4r2O4r2P4r2Q4r2R4r2S4r2T4r2U4r2V4r2W4r2X4r2Y4r2Z4r2a4r2b4r2c4r2d4r2e4r2f4r2g4r2h4r2i4r2j4r2k4r2l4r2m4r2n4r2o4r2p4r2q4r2r4r2s4r2t4r2u4r2v4r2w4r2x4r2y4r2z4r204r214r224r234r244r254r264r274r284r294r2+4r2/4r6A4r6B4r6C4r6D4r6E4r6F4r6G4r6H4r6I4r6J4r6K4r6L4r6M4r6N4r6O4r6P4r6Q4r6R4r6S4r6T4r6U4r6V4r6W4r6X4r6Y4r6Z4r6a4r6b4r6c4r6d4r6e4r6f4r6g4r6h4r6i4r6j4r6k4r6l4r6m4r6n4r6o4r6p4r6q4r6r4r6s4r6t4r6u4r6v4r6w4r6x4r6y4r6z4r604r614r624r634r644r654r664r674r684r694r6+4r6/4r+A4r+B4r+C4r+D4r+E4r+F4r+G4r+H4r+I4r+J4r+K4r+L4r+M4r+N4r+O4r+P4r+Q4r+R4r+S4r+T4r+U4r+VJ1xuICAjIHVyZ2UgJ86pYnNrX18yNycsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDAsICfivIDivIHivILivIPivITivIXivIbivIfivIjivInivIrivIvivIzivI3ivI7ivI/ivJDivJHivJLivJPivJTivJXivJbivJfivJjivJnivJrivJvivJzivJ3ivJ7ivJ/ivKDivKHivKLivKPivKTivKXivKbivKfivKjivKnivKrivKvivKzivK3ivK7ivK/ivLDivLHivLLivLPivLTivLXivLbivLfivLjivLnivLrivLvivLzivL3ivL7ivL/ivYDivYHivYLivYPivYTivYXivYbivYfivYjivYnivYrivYvivYzivY3ivY7ivY/ivZDivZHivZLivZPivZTivZXivZbivZfivZjivZnivZrivZvivZzivZ3ivZ7ivZ/ivaDivaHivaLivaPivaTivaXivabivafivajivanivarivavivaziva3iva7iva/ivbDivbHivbLivbPivbTivbXivbbivbfivbjivbnivbrivbvivbzivb3ivb7ivb/ivoDivoHivoLivoPivoTivoXivobivofivojivonivorivovivozivo3ivo7ivo/ivpDivpHivpLivpPivpTivpXivpbivpfivpjivpnivprivpvivpzivp3ivp7ivp/ivqDivqHivqLivqPivqTivqXivqbivqfivqjivqnivqrivqvivqzivq3ivq7ivq/ivrDivrHivrLivrPivrTivrXivrbivrfivrjivrnivrrivrvivrzivr3ivr7ivr/iv4Div4Hiv4Liv4Piv4Tiv4Xiv4biv4fiv4jiv4niv4riv4viv4ziv43iv47iv4/iv5Div5Hiv5Liv5Piv5Tiv5UnXG4gICMgdXJnZSAnzqlic2tfXzI4JywgcnByIGVuY29kZUJpZ0ludCAxMDAwMDAsICfivIDivIHivILivIPivITivIXivIbivIfivIjivInivIrivIvivIzivI3ivI7ivI/ivJDivJHivJLivJPivJTivJXivJbivJfivJjivJnivJrivJvivJzivJ3ivJ7ivJ/ivKDivKHivKLivKPivKTivKXivKbivKfivKjivKnivKrivKvivKzivK3ivK7ivK/ivLDivLHivLLivLPivLTivLXivLbivLfivLjivLnivLrivLvivLzivL3ivL7ivL/ivYDivYHivYLivYPivYTivYXivYbivYfivYjivYnivYrivYvivYzivY3ivY7ivY/ivZDivZHivZLivZPivZTivZXivZbivZfivZjivZnivZrivZvivZzivZ3ivZ7ivZ/ivaDivaHivaLivaPivaTivaXivabivafivajivanivarivavivaziva3iva7iva/ivbDivbHivbLivbPivbTivbXivbbivbfivbjivbnivbrivbvivbzivb3ivb7ivb/ivoDivoHivoLivoPivoTivoXivobivofivojivonivorivovivozivo3ivo7ivo/ivpDivpHivpLivpPivpTivpXivpbivpfivpjivpnivprivpvivpzivp3ivp7ivp/ivqDivqHivqLivqPivqTivqXivqbivqfivqjivqnivqrivqvivqzivq3ivq7ivq/ivrDivrHivrLivrPivrTivrXivrbivrfivrjivrnivrrivrvivrzivr3ivr7ivr/iv4Div4Hiv4Liv4Piv4Tiv4Xiv4biv4fiv4jiv4niv4riv4viv4ziv43iv47iv4/iv5Div5Hiv5Liv5Piv5Tiv5UnXG4gICMgdXJnZSAnzqlic2tfXzI5JywgcnByIGVuY29kZUJpZ0ludCAxMDAwMDAsICfjgqLjgqTjgqbjgqjjgqrjgqvjgq3jgq/jgrHjgrMnXG4gIHVyZ2UgJ86pYnNrX18zMCcsIHJwciBlbmNvZGVCaWdJbnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsICcnJyFcIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QCcnJ1xuICB1cmdlICfOqWJza19fMzEnLCBycHIgZW5jb2RlQmlnSW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAnISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXV5fYGFiYydcbiAgdXJnZSAnzqlic2tfXzMyJywgcnByIGVuY29kZUJpZ0ludCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgJyEjJCUmKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW11eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX7CocKiwqPCpMKlwqbCp8KowqnCqsKrwqzCrsKvwrDCscKywrPCtMK1wrbCt8K4wrnCusK7wrzCvcK+wr/DgMOBw4LDg8OEw4XDhsOHw4jDicOKw4vDjMONw47Dj8OQw5HDksOTw5TDlcOWw5fDmMOZw5rDm8Ocw53DnsOfw6DDocOiw6PDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO3w7jDucO6w7vDvMO9w77DvydcbiAgdXJnZSAnzqlic2tfXzMzJywgcnByIGVuY29kZUJpZ0ludCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgJyEjJCUmKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW11eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX7CocKiwqPCpMKlwqbCp8KowqnCqsKrwqzCrsKvwrDCscKywrPCtMK1wrbCt8K4wrnCusK7wrzCvcK+wr/DgMOBw4LDg8OEw4XDhidcbiAgdXJnZSAnzqlic2tfXzM0JywgcnByIGVuY29kZUJpZ0ludCAwLCAnMDEnXG4gIHVyZ2UgJ86pYnNrX18zNScsIHJwciBlbmNvZGVCaWdJbnQgMSwgJzAxJ1xuICB1cmdlICfOqWJza19fMzYnLCBycHIgZW5jb2RlQmlnSW50IDIsICcwMSdcbiAgdXJnZSAnzqlic2tfXzM3JywgcnByIGVuY29kZUJpZ0ludCAzLCAnMDEnXG4gIHVyZ2UgJ86pYnNrX18zOCcsIHJwciBlbmNvZGVCaWdJbnQgNywgJzAxJ1xuICB1cmdlICfOqWJza19fMzknLCBycHIgZW5jb2RlQmlnSW50IDgsICcwMSdcbiAgdXJnZSAnzqlic2tfXzQwJywgcnByIGVuY29kZUJpZ0ludCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgJzAxJ1xuICAjICs1NyBmcmVlIGNvZGVwb2ludHNcbiAgIyAgLTggcG9zIG5lZ2F0aXZlXG4gICMgIC04IHBvcyBwb3NpdGl2ZVxuICAjICAtMSB6ZXJvXG4gICMg4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG4gICMgKzQwIGZvclxuICAjIC0yMCBuZWdhdGl2ZSBzaW5nbGUtZGlnaXRcbiAgIyAtMjAgcG9zaXRpdmUgc2luZ2xlLWRpZ2l0XG4gICMgMsOGw4bDhsOGw4bDhsOGXG5cbiAgIyMjXG5cblxuICAqIGZvciBudW1iZXJzIGAtMjAgPD0gbiA8PSArMjBgOlxuICAgICogbmVnYXRpdmUgdW5pbGl0ZXJhbCBudW1iZXJzICAgICAgICAgICAoTlVOcyk6ICAtMjAgLi4gIMOPw5DDkcOSw5PDlMOVw5bDl8OYw5nDmsObw5zDncOew5/DoMOhw6IgLi4gLTFcbiAgICAgICogdXNlIG5lZ2F0aXZlIGluZGV4IHdpdGggYGF0YCBpbmRleGluZyBhcyBpbiBgbnVuLmF0IC0zYCB0byBnZXQgYMOgYCBmb3IgYC0zYFxuICAgICogemVybyB1bmlsaXRlcmFsIG51bWJlciAgICAgICAgICAgICAgICAoWlVOKTogICAgwrEwIC4uICDDo1xuICAgICogcG9zaXRpdmUgdW5pbGl0ZXJhbCBudW1iZXJzICAgICAgICAgICAoUFVOcyk6ICAgKzEgLi4gIMOkw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7cgLi4gKzIwXG4gICAgICAqIHVzZSBuZXh0IHN0ZXBcbiAgICAqIHplcm8gYW5kIHBvc2l0aXZlIHVuaWxpdGVyYWwgbnVtYmVycyAgKFpQVU5zKTogICswIC4uIMOjw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtyAuLiArMjBcbiAgICAgICogcHJlcGVuZGluZyBaVU4gdG8gUFVOcyBnaXZlcyBaUFVOcywgdXNlIGBuYCBhcyBpbmRleCBhcyBpbiBgenB1blsgKzMgXWAgb3IgYHpwdW4uYXQgKzNgIHRvIGdldCBgw6VgXG5cbiAgKiBmb3IgbnVtYmVycyBgbiA+ICsyMGA6XG4gICAgKiBjb252ZXJ0IHRvIEJhc2UtMTI4IHVzaW5nIGFscGhhYmV0OiAhIyQlJigpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+wqHCosKjwqTCpcKmwqfCqMKpwqrCq8Kswq7Cr8KwwrHCssKzwrTCtcK2wrfCuMK5wrrCu8K8wr3CvsK/w4DDgcOCw4PDhMOFw4ZcbiAgICAqIHByZXBlbmQgcG9zaXRpdmUgbWFnbmlmaWVyICAgICAgICAgICAgKFBNQUcpIDogIDEgcG9zaXRpdmUgZGlnaXQgLi4gIMO4w7nDusO7w7zDvcO+w78gIC4uICA4IHBvc2l0aXZlIGRpZ2l0c1xuXG4gICogZm9yIG51bWJlcnMgYG4gPCAtMjBgOlxuICAgICogYWRkIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAgdG8gYG5gIHRvIHNoaWZ0IHRoZSBudW1iZXIgaW50byB0aGUgcG9zaXRpdmUsIHRoZW4gY29udmVydCB0byBCYXNlLTEyOFxuICAgICogYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYCBpcyBgMsOGw4bDhsOGw4bDhsOGYCBpbiBCYXNlLTEyOCwgbWVhbmluZyB0aGF0IGxlYWRpbmcgYC9eMsOGKiAvYCBjYW4gYmUgZGlzY2FyZGVkXG4gICAgKiBwcmVwZW5kIG5lZ2F0aXZlIG1hZ25pZmllciAgICAgICAgICAgIChOTUFHKSA6ICAxIG5lZ2F0aXZlIGRpZ2l0IC4uICDDjsONw4zDi8OKw4nDiMOHICAuLiAgOCBuZWdhdGl2ZSBkaWdpdHNcblxuXG4gIMOHICAgIDggbmVnYXRpdmUgZGlnaXRzXG4gIMOIICAgIDcgbmVnYXRpdmUgZGlnaXRzXG4gIMOJICAgIDYgbmVnYXRpdmUgZGlnaXRzXG4gIMOKICAgIDUgbmVnYXRpdmUgZGlnaXRzXG4gIMOLICAgIDQgbmVnYXRpdmUgZGlnaXRzXG4gIMOMICAgIDMgbmVnYXRpdmUgZGlnaXRzXG4gIMONICAgIDIgbmVnYXRpdmUgZGlnaXRzXG4gIMOOICAgIDEgbmVnYXRpdmUgZGlnaXRzXG4gIMOPICAtMjBcbiAgw5AgIC0xOVxuICDDkSAgLTE4XG4gIMOSICAtMTdcbiAgw5MgIC0xNlxuICDDlCAgLTE1XG4gIMOVICAtMTRcbiAgw5YgIC0xM1xuICDDlyAgLTEyXG4gIMOYICAtMTFcbiAgw5kgIC0xMFxuICDDmiAgIC05XG4gIMObICAgLThcbiAgw5wgICAtN1xuICDDnSAgIC02XG4gIMOeICAgLTVcbiAgw58gICAtNFxuICDDoCAgIC0zXG4gIMOhICAgLTJcbiAgw6IgICAtMSBuZWdhdGl2ZSBzbWFsbCBzaW5nbGUtbGV0dGVyIGluZGljZXNcblxuICDDoyAgIMKxMCB6ZXJvXG5cbiAgw6QgICArMSBwb3NpdGl2ZSBzbWFsbCBzaW5nbGUtbGV0dGVyIGluZGljZXNcbiAgw6UgICArMlxuICDDpiAgICszXG4gIMOnICAgKzRcbiAgw6ggICArNVxuICDDqSAgICs2XG4gIMOqICAgKzdcbiAgw6sgICArOFxuICDDrCAgICs5XG4gIMOtICArMTBcbiAgw64gICsxMVxuICDDryAgKzEyXG4gIMOwICArMTNcbiAgw7EgICsxNFxuICDDsiAgKzE1XG4gIMOzICArMTZcbiAgw7QgICsxN1xuICDDtSAgKzE4XG4gIMO2ICArMTlcbiAgw7cgICsyMFxuICDDuCAgICAxIHBvc2l0aXZlIGRpZ2l0c1xuICDDuSAgICAyIHBvc2l0aXZlIGRpZ2l0c1xuICDDuiAgICAzIHBvc2l0aXZlIGRpZ2l0c1xuICDDuyAgICA0IHBvc2l0aXZlIGRpZ2l0c1xuICDDvCAgICA1IHBvc2l0aXZlIGRpZ2l0c1xuICDDvSAgICA2IHBvc2l0aXZlIGRpZ2l0c1xuICDDviAgICA3IHBvc2l0aXZlIGRpZ2l0c1xuICDDvyAgICA4IHBvc2l0aXZlIGRpZ2l0c1xuXG5cbiAgIyMjXG5cblxuXG4gIFIgPSBbXVxuICBmb3IgY2lkIGluIFsgMHgwMDIxIC4uIDB4MDBmZiBdXG4gICAgIyBjb250aW51ZSB1bmxlc3MgL15cXHB7TH0kL3YudGVzdCAoIGNociA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZCApXG4gICAgIyBjb250aW51ZSB1bmxlc3MgL14uJC92LnRlc3QgKCBjaHIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWQgKVxuICAgIGNvbnRpbnVlIGlmIC9eXFxwe0N9JC92LnRlc3QgKCBjaHIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWQgKVxuICAgIGNvbnRpbnVlIGlmIC9eKFsnXCJcXFxcXXxcXHB7U30pJC92LnRlc3QgY2hyXG4gICAgUi5wdXNoIGNoclxuICB1cmdlICfOqWJza19fNDEnLCBycHIgUi5qb2luICcnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19ob2xsZXJpdGhfdmR4X3NvcnRrZXkgPSAtPlxuICAjIyMgdmVjdG9yaWFsIGluZGV4LCBhLmsuYS4gJ3ZpbmRleCcsIGEuay5hLiBWRFgsIG5leHQgdmVyc2lvbiBvZiBWTlIgYXMgaW1wbGVtZW50ZWQgaW4gYGhvbGxlcml0aC1jb2RlY2BcbiAgIyMjXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgeyBlbmNvZGVCaWdJbnQsXG4gICAgZGVjb2RlQmlnSW50LCAgIH0gPSBUTVBfcmVxdWlyZV9lbmNvZGVfaW5fYWxwaGFiZXQoKVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3RhbnRzXzEyOCA9IE9iamVjdC5mcmVlemVcbiAgICBtYXhfaW50ZWdlcjogIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gICAgbWluX2ludGVnZXI6ICBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUlxuICAgIHpwdW5zOiAgICAgICAgJ8Ojw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtycgIyB6ZXJvIGFuZCBwb3NpdGl2ZSB1bmlsaXRlcmFsIG51bWJlcnNcbiAgICBudW5zOiAgICAgICAgICfDj8OQw5HDksOTw5TDlcOWw5fDmMOZw5rDm8Ocw53DnsOfw6DDocOiJyAgIyBuZWdhdGl2ZSAgICAgICAgICB1bmlsaXRlcmFsIG51bWJlcnNcbiAgICB6cHVuX21heDogICAgICsyMFxuICAgIG51bl9taW46ICAgICAgLTIwXG4gICAgemVyb19wYWRfbGVuZ3RoOiA4XG4gICAgYWxwaGFiZXQ6ICAgICAnISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXV5fYCcgXFxcbiAgICAgICAgICAgICAgICAgICAgKyAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+wqHCosKjwqTCpcKmwqfCqMKpwqrCq8Kswq7Cr8KwwrHCssKzwrTCtcK2wrfCuMK5wrrCu8K8wr3CvsK/w4DDgcOCw4PDhMOFw4YnXG4gICAgIyMjIFRBSU5UIHNpbmNlIHNtYWxsIGludHMgdXAgdG8gKy8tMjAgYXJlIHJlcHJlc2VudGVkIGJ5IHVuaWxpdGVyYWxzLCBQTUFHIGDDuGAgYW5kIE5NQUcgYMOOYCB3aWxsIG5ldmVyXG4gICAgYmUgdXNlZCwgdGh1cyBjYW4gYmUgZnJlZWQgZm9yIG90aGVyKD8pIHRoaW5ncyAjIyNcbiAgICBwbWFnOiAgICAgICAgICcgw7jDucO6w7vDvMO9w77DvycgICMgcG9zaXRpdmUgJ21hZ25pZmllcicgZm9yIDEgdG8gOCBwb3NpdGl2ZSBkaWdpdHNcbiAgICBubWFnOiAgICAgICAgICcgw47DjcOMw4vDisOJw4jDhycgICMgbmVnYXRpdmUgJ21hZ25pZmllcicgZm9yIDEgdG8gOCBuZWdhdGl2ZSBkaWdpdHNcbiAgICBubGVhZF9yZTogICAgIC9eMsOGKi8gICAgICAjICduZWdhdGl2ZSBsZWFkZXInLCBkaXNjYXJkYWJsZSBsZWFkaW5nIGRpZ2l0cyBvZiBsaWZ0ZWQgbmVnYXRpdmUgbnVtYmVyc1xuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3RhbnRzXzEwID0gT2JqZWN0LmZyZWV6ZVxuICAgIG1heF9pbnRlZ2VyOiAgKzk5OVxuICAgIG1pbl9pbnRlZ2VyOiAgLTk5OVxuICAgIHpwdW5zOiAgICAgICAgJ8Ojw6TDpcOmJyAjIHplcm8gYW5kIHBvc2l0aXZlIHVuaWxpdGVyYWwgbnVtYmVyc1xuICAgIG51bnM6ICAgICAgICAgJ8OPw5DDkScgICMgbmVnYXRpdmUgICAgICAgICAgdW5pbGl0ZXJhbCBudW1iZXJzXG4gICAgenB1bl9tYXg6ICAgICArM1xuICAgIG51bl9taW46ICAgICAgLTNcbiAgICB6ZXJvX3BhZF9sZW5ndGg6ICAzXG4gICAgYWxwaGFiZXQ6ICAgICAnMDEyMzQ1Njc4OSdcbiAgICBwbWFnOiAgICAgICAgICcgw7jDucO6w7vDvMO9w77DvycgICAjIHBvc2l0aXZlICdtYWduaWZpZXInIGZvciAxIHRvIDggcG9zaXRpdmUgZGlnaXRzXG4gICAgbm1hZzogICAgICAgICAnIMOOw43DjMOLw4rDicOIw4cnICAgIyBuZWdhdGl2ZSAnbWFnbmlmaWVyJyBmb3IgMSB0byA4IG5lZ2F0aXZlIGRpZ2l0c1xuICAgIG5sZWFkX3JlOiAgICAgL145Kig/PVswLTldKS8gICAgICAgICAjICduZWdhdGl2ZSBsZWFkZXInLCBkaXNjYXJkYWJsZSBsZWFkaW5nIGRpZ2l0cyBvZiBsaWZ0ZWQgbmVnYXRpdmUgbnVtYmVyc1xuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBjb25zdGFudHMgPSBDID0gY29uc3RhbnRzXzEyOFxuICBjb25zdGFudHMgPSBDID0gY29uc3RhbnRzXzEwXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpbnRlcm5hbHMgPSBPYmplY3QuZnJlZXplIHsgY29uc3RhbnRzLCB9XG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjbGFzcyBWaW5kZXhcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZW5jb2RlOiAoIGludGVnZXJfb3JfbGlzdCApIC0+XG4gICAgICAjIyMgVEFJTlQgdXNlIHByb3BlciB2YWxpZGF0aW9uICMjI1xuICAgICAgaWYgQXJyYXkuaXNBcnJheSBpbnRlZ2VyX29yX2xpc3RcbiAgICAgICAgcmV0dXJuICggQGVuY29kZSBuIGZvciBuIGluIGludGVnZXJfb3JfbGlzdCApLmpvaW4gJydcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgbiA9IGludGVnZXJfb3JfbGlzdFxuICAgICAgdW5sZXNzIE51bWJlci5pc0Zpbml0ZSBuXG4gICAgICAgIHR5cGUgPSAnWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWCdcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwizql2ZHhfXzQyIGV4cGVjdGVkIGEgZmxvYXQsIGdvdCBhICN7dHlwZX1cIlxuICAgICAgdW5sZXNzIEMubWluX2ludGVnZXIgPD0gbiA8PSBDLm1heF9pbnRlZ2VyXG4gICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pdmR4X180MyBleHBlY3RlZCBhIGZsb2F0IGJldHdlZW4gI3tDLm1pbl9pbnRlZ2VyfSBhbmQgI3tDLm1heF9pbnRlZ2VyfSwgZ290ICN7bn1cIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gQGVuY29kZV9pbnRlZ2VyIG5cblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZW5jb2RlX2ludGVnZXI6ICggbiApIC0+XG4gICAgICAjIyMgTk9URSBjYWxsIG9ubHkgd2hlcmUgYXNzdXJlZCBgbmAgaXMgaW50ZWdlciB3aXRoaW4gbWFnbml0dWRlIG9mIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAgIyMjXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgWmVybyBvciBzbWFsbCBwb3NpdGl2ZTpcbiAgICAgIHJldHVybiAoIEMuenB1bnMuYXQgbiApIGlmIDAgICAgICAgICAgPD0gbiA8PSBDLnpwdW5fbWF4XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgU21hbGwgbmVnYXRpdmU6XG4gICAgICByZXR1cm4gKCBDLm51bnMuYXQgIG4gKSBpZiBDLm51bl9taW4gIDw9IG4gPCAgMFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIEJpZyBwb3NpdGl2ZTpcbiAgICAgIGlmIG4gPiBDLnpwdW5fbWF4XG4gICAgICAgIFIgPSBlbmNvZGVCaWdJbnQgbiwgQy5hbHBoYWJldFxuICAgICAgICByZXR1cm4gKCBDLnBtYWcuYXQgUi5sZW5ndGggKSArIFJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBCaWcgbmVnYXRpdmU6XG4gICAgICBSID0gKCBlbmNvZGVCaWdJbnQgKCBuICsgQy5tYXhfaW50ZWdlciArIDEgKSwgQy5hbHBoYWJldCApXG4gICAgICBpZiBSLmxlbmd0aCA8IEMuemVyb19wYWRfbGVuZ3RoICAgdGhlbiAgUiA9IFIucGFkU3RhcnQgQy56ZXJvX3BhZF9sZW5ndGgsIEMuYWxwaGFiZXQuYXQgMFxuICAgICAgZWxzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFIgPSBSLnJlcGxhY2UgQy5ubGVhZF9yZSwgJydcbiAgICAgIHJldHVybiAoIEMubm1hZy5hdCBSLmxlbmd0aCApICsgUlxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgVkRYID0gbmV3IFZpbmRleCgpXG4gIGhlbHAgJ86pYnNrX180NCcsIFZEWC5lbmNvZGVfaW50ZWdlciArMVxuICBoZWxwICfOqWJza19fNDUnLCBWRFguZW5jb2RlX2ludGVnZXIgKzJcbiAgaGVscCAnzqlic2tfXzQ2JywgVkRYLmVuY29kZV9pbnRlZ2VyICszXG4gIGhlbHAgJ86pYnNrX180NycsIFZEWC5lbmNvZGVfaW50ZWdlciArNFxuICBoZWxwICfOqWJza19fNDgnLCBWRFguZW5jb2RlX2ludGVnZXIgKzVcbiAgaGVscCAnzqlic2tfXzQ5JywgVkRYLmVuY29kZV9pbnRlZ2VyIDEwXG4gIGhlbHAgJ86pYnNrX181MCcsIFZEWC5lbmNvZGVfaW50ZWdlciAyMFxuICBoZWxwICfOqWJza19fNTEnLCBWRFguZW5jb2RlX2ludGVnZXIgMjFcbiAgaGVscCAnzqlic2tfXzUyJywgVkRYLmVuY29kZV9pbnRlZ2VyIDEwMFxuICBoZWxwICfOqWJza19fNTMnLCBWRFguZW5jb2RlX2ludGVnZXIgMTI3XG4gIGhlbHAgJ86pYnNrX181NCcsIFZEWC5lbmNvZGVfaW50ZWdlciAxMjhcbiAgaGVscCAnzqlic2tfXzU1JywgVkRYLmVuY29kZV9pbnRlZ2VyIDEyOVxuICBoZWxwICfOqWJza19fNTYnLCBWRFguZW5jb2RlX2ludGVnZXIgKzEyMzQ1Njc4OTAxMjM0NVxuICBoZWxwICfOqWJza19fNTcnLCBWRFguZW5jb2RlX2ludGVnZXIgQy5tYXhfaW50ZWdlclxuICBpbmZvICfOqWJza19fNTgnXG4gIGhlbHAgJ86pYnNrX181OScsIFZEWC5lbmNvZGVfaW50ZWdlciAwXG4gIGluZm8gJ86pYnNrX182MCdcbiAgaGVscCAnzqlic2tfXzYxJywgVkRYLmVuY29kZV9pbnRlZ2VyIC0xXG4gIGhlbHAgJ86pYnNrX182MicsIFZEWC5lbmNvZGVfaW50ZWdlciAtMlxuICBoZWxwICfOqWJza19fNjMnLCBWRFguZW5jb2RlX2ludGVnZXIgLTNcbiAgaGVscCAnzqlic2tfXzY0JywgVkRYLmVuY29kZV9pbnRlZ2VyIC00XG4gIGhlbHAgJ86pYnNrX182NScsIFZEWC5lbmNvZGVfaW50ZWdlciAtNVxuICBoZWxwICfOqWJza19fNjYnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwXG4gIGhlbHAgJ86pYnNrX182NycsIFZEWC5lbmNvZGVfaW50ZWdlciAtMjBcbiAgaGVscCAnzqlic2tfXzY4JywgVkRYLmVuY29kZV9pbnRlZ2VyIC0yMVxuICBoZWxwICfOqWJza19fNjknLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMFxuICBoZWxwICfOqWJza19fNzAnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEyN1xuICBoZWxwICfOqWJza19fNzEnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEyOFxuICBoZWxwICfOqWJza19fNzInLCBWRFguZW5jb2RlX2ludGVnZXIgLTEyOVxuICAjIGhlbHAgJ86pYnNrX183MycsIFZEWC5lbmNvZGVfaW50ZWdlciAtMTAwMFxuICAjIGhlbHAgJ86pYnNrX183NCcsIFZEWC5lbmNvZGVfaW50ZWdlciAtMTAwMDBcbiAgIyBoZWxwICfOqWJza19fNzUnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMFxuICAjIGhlbHAgJ86pYnNrX183NicsIFZEWC5lbmNvZGVfaW50ZWdlciAtMTAwMDAwMFxuICAjIGhlbHAgJ86pYnNrX183NycsIFZEWC5lbmNvZGVfaW50ZWdlciAtMTAwMDAwMDBcbiAgIyBoZWxwICfOqWJza19fNzgnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMDAwMFxuICAjIGhlbHAgJ86pYnNrX183OScsIFZEWC5lbmNvZGVfaW50ZWdlciAtMTAwMDAwMDAwMFxuICAjIGhlbHAgJ86pYnNrX184MCcsIFZEWC5lbmNvZGVfaW50ZWdlciAtMTAwMDAwMDAwMDBcbiAgIyBoZWxwICfOqWJza19fODEnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMDAwMDAwMFxuICAjIGhlbHAgJ86pYnNrX184MicsIFZEWC5lbmNvZGVfaW50ZWdlciAtMTAwMDAwMDAwMDAwMFxuICAjIGhlbHAgJ86pYnNrX184MycsIFZEWC5lbmNvZGVfaW50ZWdlciAtMTAwMDAwMDAwMDAwMDBcbiAgIyBoZWxwICfOqWJza19fODQnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMDAwMDAwMDAwMFxuICAjIGhlbHAgJ86pYnNrX184NScsIFZEWC5lbmNvZGVfaW50ZWdlciAtMTIzNDU2Nzg5MDEyMzQ1XG4gICMgaGVscCAnzqlic2tfXzg2JywgVkRYLmVuY29kZV9pbnRlZ2VyIC04MDBcbiAgIyBoZWxwICfOqWJza19fODcnLCBWRFguZW5jb2RlX2ludGVnZXIgLTkwMFxuICAjIGhlbHAgJ86pYnNrX184OCcsIFZEWC5lbmNvZGVfaW50ZWdlciAtOTUwXG4gICMgaGVscCAnzqlic2tfXzg5JywgVkRYLmVuY29kZV9pbnRlZ2VyIC05NzBcbiAgIyBoZWxwICfOqWJza19fOTAnLCBWRFguZW5jb2RlX2ludGVnZXIgLTk4MFxuICAjIGhlbHAgJ86pYnNrX185MScsIFZEWC5lbmNvZGVfaW50ZWdlciAtOTkwXG4gICMgaGVscCAnzqlic2tfXzkyJywgVkRYLmVuY29kZV9pbnRlZ2VyIC05OTVcbiAgIyBoZWxwICfOqWJza19fOTMnLCBWRFguZW5jb2RlX2ludGVnZXIgLTk5NlxuICAjIGhlbHAgJ86pYnNrX185NCcsIFZEWC5lbmNvZGVfaW50ZWdlciAtOTk3XG4gICMgaGVscCAnzqlic2tfXzk1JywgVkRYLmVuY29kZV9pbnRlZ2VyIC05OThcbiAgIyBoZWxwICfOqWJza19fOTYnLCBWRFguZW5jb2RlX2ludGVnZXIgLTk5OVxuICBoZWxwICfOqWJza19fOTcnLCBWRFguZW5jb2RlX2ludGVnZXIgQy5taW5faW50ZWdlciArIDNcbiAgaGVscCAnzqlic2tfXzk4JywgVkRYLmVuY29kZV9pbnRlZ2VyIEMubWluX2ludGVnZXIgKyAyXG4gIGhlbHAgJ86pYnNrX185OScsIFZEWC5lbmNvZGVfaW50ZWdlciBDLm1pbl9pbnRlZ2VyICsgMVxuICBoZWxwICfOqWJza18xMDAnLCBWRFguZW5jb2RlX2ludGVnZXIgQy5taW5faW50ZWdlclxuICBpbmZvICfOqWJza18xMDEnXG4gIGhlbHAgJ86pYnNrXzEwMicsIFZEWC5lbmNvZGUgWyAxLCAyLCAzLCAxMDAsIF1cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkID0gW1xuICAgIHsgc2s6IG51bGwsIHZkeDogWyAtOTk5LCAgICAgICAgICAgXSwgbnI6IDEsICB9XG4gICAgeyBzazogbnVsbCwgdmR4OiBbICAtOTksICAgICAgICAgICBdLCBucjogMiwgIH1cbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgIC05MCwgICAgICAgICAgIF0sIG5yOiAzLCAgfVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgLTExLCAgICAgICAgICAgXSwgbnI6IDQsICB9XG4gICAgeyBzazogbnVsbCwgdmR4OiBbICAtMTAsICAgICAgICAgICBdLCBucjogNSwgIH1cbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICAtOSwgICAgICAgICAgIF0sIG5yOiA2LCAgfVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgIC04LCAgICAgICAgICAgXSwgbnI6IDcsICB9XG4gICAgeyBzazogbnVsbCwgdmR4OiBbICAgLTcsICAgICAgICAgICBdLCBucjogOCwgIH1cbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICAtNiwgICAgICAgICAgIF0sIG5yOiA5LCAgfVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgIC01LCAgICAgICAgICAgXSwgbnI6IDEwLCB9XG4gICAgeyBzazogbnVsbCwgdmR4OiBbICAgLTQsICAgICAgICAgICBdLCBucjogMTEsIH1cbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICAtMywgICAgICAgICAgIF0sIG5yOiAxMiwgfVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgIC0yLCAgICAgICAgICAgXSwgbnI6IDEzLCB9XG4gICAgeyBzazogbnVsbCwgdmR4OiBbICAgLTEsICAgICAgICAgICBdLCBucjogMTQsIH0gIyAhISFcbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICArMCwgIC0yMCwgICAgIF0sIG5yOiAxNSwgfSAjICEhIVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgICswLCAgICAgICAgICAgXSwgbnI6IDE2LCB9ICMgISEhXG4gICAgeyBzazogbnVsbCwgdmR4OiBbICAgKzAsICArMjAsICAgICBdLCBucjogMTcsIH1cbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICArOSwgICAgICAgICAgIF0sIG5yOiAxOCwgfSAjICEhIVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgKzEwLCAgIC0zLCAgICAgXSwgbnI6IDE5LCB9ICMgISEhXG4gICAgeyBzazogbnVsbCwgdmR4OiBbICArMTAsICAgLTIsICAgICBdLCBucjogMjAsIH0gIyAhISFcbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICsxMCwgICAtMSwgICAgIF0sIG5yOiAyMSwgfSAjICEhIVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgKzEwLCAgICAgICAgICAgXSwgbnI6IDIyLCB9ICMgISEhXG4gICAgeyBzazogbnVsbCwgdmR4OiBbICArMTAsICAgKzAsICAgICBdLCBucjogMjMsIH1cbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICsxMCwgICArMSwgICAgIF0sIG5yOiAyNCwgfVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgKzEwLCAgKzEwLCAtMSwgXSwgbnI6IDI1LCB9ICMgISEhXG4gICAgeyBzazogbnVsbCwgdmR4OiBbICArMTAsICArMTAsICAgICBdLCBucjogMjYsIH0gIyAhISFcbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICsxMCwgICsyMCwgICAgIF0sIG5yOiAyNywgfVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgKzIwLCAgICAgICAgICAgXSwgbnI6IDI4LCB9XG4gICAgeyBzazogbnVsbCwgdmR4OiBbICArMjAsICArMTAsICAgICBdLCBucjogMjksIH1cbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICs5MCwgICAgICAgICAgIF0sIG5yOiAzMCwgfVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyArOTAwLCAgICAgICAgICAgXSwgbnI6IDMxLCB9XG4gICAgXVxuICBmb3IgZSBpbiBkXG4gICAgdHJ5IGUuc2sgPSBWRFguZW5jb2RlIGUudmR4IGNhdGNoIGVycm9yXG4gICAgICB3YXJuICfOqWJza18xMDAnLCBlLCBlcnJvci5tZXNzYWdlXG4gICAgICBlLnNrID0gJz8/PydcbiAgZC5zb3J0ICggYSwgYiApIC0+XG4gICAgcmV0dXJuIC0xIGlmIGEuc2sgPCBiLnNrXG4gICAgcmV0dXJuICsxIGlmIGEuc2sgPiBiLnNrXG4gICAgcmV0dXJuIDBcbiAgZGVidWcgJ86pYnNrXzEwMycsIGUgZm9yIGUgaW4gZFxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGRlbW9fYmluYXJ5X2xleGljb2dyYXBoaWNfc29ydGtleSgpXG4gIGRlbW9fY2hhdGdwdF9zb2x1dGlvbigpXG4gIGRlbW9faG9sbGVyaXRoX3ZkeF9zb3J0a2V5KClcbiAgIyBlY2hvIGZcIi0je259OjA+Mi4wZjtcIiBmb3IgbiBpbiBbIDk5IC4uIDAgXVxuICAjIGVjaG8gZlwiKyN7bn06MD4yLjBmO1wiIGZvciBuIGluIFsgMCAuLiA5OSBdXG4gIHJldHVybiBudWxsXG4iXX0=
