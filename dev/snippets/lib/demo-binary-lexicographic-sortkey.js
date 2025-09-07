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
      max_integer: +562_949_953_421_311,
      min_integer: -562_949_953_421_311,
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
      leading_niners_re: /^(?:Æ)*?(?=.$)/gv // 'negative leader', discardable leading digits of lifted negative numbers
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
      leading_niners_re: /^(?:9)*?(?=.$)/gv // 'negative leader', discardable leading digits of lifted negative numbers
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
          R = R.replace(C.leading_niners_re, '');
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
      e.sk += '0000000000000000000';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tYmluYXJ5LWxleGljb2dyYXBoaWMtc29ydGtleS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBQTtBQUFBLE1BQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSw4QkFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxpQ0FBQSxFQUFBLHFCQUFBLEVBQUEsMEJBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLDJCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxJQVJGLEVBU0UsR0FURixFQVVFLElBVkYsRUFXRSxPQVhGLEVBWUUsR0FaRixDQUFBLEdBWTRCLEdBQUcsQ0FBQyxHQVpoQzs7RUFhQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQTFCQTs7Ozs7Ozs7Ozs7Ozs7RUF1Q0Es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QUhGLENBQVA7SUFJQSxLQUFBLHFDQUFBOztNQUFBLEtBQUEsQ0FBTSxVQUFOLEVBQWtCLENBQWxCO0lBQUEsQ0EzTEY7O0FBNkxFLFdBQU87RUE5TG9CLEVBdFY3Qjs7O0VBdWhCQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO01BQ3RDLGlDQUFBLENBQUE7TUFDQSxxQkFBQSxDQUFBO01BQ0EsMEJBQUEsQ0FBQSxFQUZGOzs7QUFLRSxhQUFPO0lBTitCLENBQUEsSUFBeEM7O0FBdmhCQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnZGVtby1idWlsZC11bmljb2RlLXJhbmdlcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBsaW1lXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG4jIHsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG4jIEdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xuIyB7IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuIyBta2RpcnAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbWtkaXJwJ1xuIyBlbnZfcGF0aHMgICAgICAgICAgICAgICAgID0gKCByZXF1aXJlICdlbnYtcGF0aHMnICkuZGVmYXVsdCAnZGVtby1ub2RlLXNxbGl0ZSdcbiMgU1FMSVRFICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6c3FsaXRlJ1xuIyBQQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuIyB7IFNRTCB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9kYmF5J1xuIyB7IGRlZmF1bHQ6IFxcXG4jICAgb25fcHJvY2Vzc19leGl0LCAgICAgIH0gPSByZXF1aXJlICdleGl0LWhvb2snXG4jIEZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG57IGhpZGUsXG4gIHNldF9nZXR0ZXIsICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfbWFuYWdlZF9wcm9wZXJ0eV90b29scygpXG57IHRpbWVpdCwgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfYmVuY2htYXJraW5nKClcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19iaW5hcnlfbGV4aWNvZ3JhcGhpY19zb3J0a2V5ID0gPT5cbiAgIyMjIGluc3BpcmVkIGJ5ICYgdGh4IHRvIGh0dHBzOi8vc3RhdGVseS5jbG91ZC9ibG9nL2VuY29kaW5nLXNvcnRhYmxlLWJpbmFyeS1kYXRhYmFzZS1rZXlzLyAjIyNcbiAgZCA9XG4gICAgSzAwMDogICAgICAgJ1sgLTk5OSwgICAgICAgICAgIF0gMSdcbiAgICBMMDA6ICAgICAgICAnWyAgLTk5LCAgICAgICAgICAgXSAyJ1xuICAgIEwwOTogICAgICAgICdbICAtOTAsICAgICAgICAgICBdIDMnXG4gICAgTDg4OiAgICAgICAgJ1sgIC0xMSwgICAgICAgICAgIF0gNCdcbiAgICBMODk6ICAgICAgICAnWyAgLTEwLCAgICAgICAgICAgXSA1J1xuICAgIE0wOiAgICAgICAgICdbICAgLTksICAgICAgICAgICBdIDYnXG4gICAgTTE6ICAgICAgICAgJ1sgICAtOCwgICAgICAgICAgIF0gNydcbiAgICBNMjogICAgICAgICAnWyAgIC03LCAgICAgICAgICAgXSA4J1xuICAgIE0zOiAgICAgICAgICdbICAgLTYsICAgICAgICAgICBdIDknXG4gICAgTTQ6ICAgICAgICAgJ1sgICAtNSwgICAgICAgICAgIF0gMTAnXG4gICAgTTU6ICAgICAgICAgJ1sgICAtNCwgICAgICAgICAgIF0gMTEnXG4gICAgTTY6ICAgICAgICAgJ1sgICAtMywgICAgICAgICAgIF0gMTInXG4gICAgTTc6ICAgICAgICAgJ1sgICAtMiwgICAgICAgICAgIF0gMTMnXG4gICAgTTg6ICAgICAgICAgJ1sgICAtMSwgICAgICAgICAgIF0gMTQnXG4gICAgTkwyMDogICAgICAgJ1sgICArMCwgIC0yMCwgICAgIF0gMTUnXG4gICAgTjogICAgICAgICAgJ1sgICArMCwgICAgICAgICAgIF0gMTYnXG4gICAgTlAyMDogICAgICAgJ1sgICArMCwgICsyMCwgICAgIF0gMTcnXG4gICAgTzk6ICAgICAgICAgJ1sgICArOSwgICAgICAgICAgIF0gMTgnXG4gICAgUDEwTTY6ICAgICAgJ1sgICsxMCwgICAtMywgICAgIF0gMTknXG4gICAgUDEwTTc6ICAgICAgJ1sgICsxMCwgICAtMiwgICAgIF0gMjAnXG4gICAgUDEwTTg6ICAgICAgJ1sgICsxMCwgICAtMSwgICAgIF0gMjEnXG4gICAgUDEwOiAgICAgICAgJ1sgICsxMCwgICAgICAgICAgIF0gMjInXG4gICAgUDEwTjogICAgICAgJ1sgICsxMCwgICArMCwgICAgIF0gMjMnXG4gICAgUDEwTzE6ICAgICAgJ1sgICsxMCwgICArMSwgICAgIF0gMjQnXG4gICAgUDEwUDEwTTg6ICAgJ1sgICsxMCwgICsxMCwgLTEsIF0gMjUnXG4gICAgUDEwUDEwOiAgICAgJ1sgICsxMCwgICsxMCwgICAgIF0gMjYnXG4gICAgUDEwUDIwOiAgICAgJ1sgICsxMCwgICsyMCwgICAgIF0gMjcnXG4gICAgUDIwOiAgICAgICAgJ1sgICsyMCwgICAgICAgICAgIF0gMjgnXG4gICAgUDIwUDEwOiAgICAgJ1sgICsyMCwgICsxMCwgICAgIF0gMjknXG4gICAgUDkwOiAgICAgICAgJ1sgICs5MCwgICAgICAgICAgIF0gMzAnXG4gICAgUTkwMDogICAgICAgJ1sgKzkwMCwgICAgICAgICAgIF0gMzEnXG5cbiAgICAjIGlkZW50aWNhbCBiL2Mgb2YgcGFkZGluZzpcbiAgICAjIFAxMDogICAgICAgICdbICArMTAsICAgICAgIF0gMjQnXG4gICAgIyBQMTBOOiAgICAgICdbICArMTAsICAgKzAsIF0gMjUnXG5cbiAgbWF4X2xlbmd0aCAgPSAgTWF0aC5tYXggKCBrLmxlbmd0aCBmb3IgayBpbiBPYmplY3Qua2V5cyBkICkuLi5cbiAgIyMjIHRyYWlsZXIgY2FuIGJlIG9mIGZpeGVkIGxlbmd0aCBzaW5jZSB0aGVyZSBpcyBhbiB1cHBlciBsaW1pdCB0byBkaWdpdCBwb3NpdGlvbnMgZ2l2ZW4gYnlcbiAgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgYXMgcmVwcmVzZW50ZWQgaW4gdGhlIGJhc2Ugb2YgY2hvaWNlIChoZXJlIDEwKSB0aW1lcyB0aGUgbWF4aW11bSBudW1iZXIgb2ZcbiAgZGltZW5zaW9ucyBvZiB0aGUgVk5SOiAjIyNcbiAgdHJhaWxlciAgICAgPSAnTk5OTk5OTk5OTk4nXG4gIGRlYnVnICfOqWJza19fXzEnLCB7IG1heF9sZW5ndGgsIH1cbiAgIyBkMSA9IE9iamVjdC5mcm9tRW50cmllcyAoIFsgKCBrLnBhZEVuZCBtYXhfbGVuZ3RoLCAnTicgKSwgdiwgXSBmb3IgaywgdiBvZiBkIClcbiAgIyBkMSA9IE9iamVjdC5mcm9tRW50cmllcyAoIFsgKCBrICsgdHJhaWxlciApLCB2LCBdIGZvciBrLCB2IG9mIGQgKVxuICBrZXlzICAgICAgICA9ICggayBmb3IgWyBzaywgaywgXSBpbiAoIFsgayArIHRyYWlsZXIsIGssIF0gZm9yIGsgb2YgZCApLnNvcnQoKSApXG4gIGZvciBrZXkgaW4ga2V5c1xuICAgIGsgPSBsaW1lIHJldmVyc2UgZlwiICN7a2V5fTo+MTBjOyBcIlxuICAgIHYgPSBnb2xkIHJldmVyc2UgZlwiICN7ZFsga2V5IF19OjwzMGM7IFwiXG4gICAgcSA9IGtleS5yZXBsYWNlIC8oW0EtWl0pWzAtOV0qL2csICckMSdcbiAgICBxID0gcS5sZW5ndGhcbiAgICBoZWxwICfOqWJza19fXzInLCBcIiN7a30je3Z9ICN7cX1cIlxuICByZWYwID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgZjEgPSAoIG4gKSAtPlxuICAgIHJldHVybiBbICAwLCAnTicsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIGlmIG4gaXMgMFxuICAgIHJldHVybiBbICsxLCAoICAgICAgICAgICAgbi50b1N0cmluZyAzMiApLnRvTG93ZXJDYXNlKCksICBdIGlmIG4gPiAwXG4gICAgcmV0dXJuIFsgLTEsICggKCByZWYwICsgbiApLnRvU3RyaW5nIDMyICkudG9Mb3dlckNhc2UoKS5yZXBsYWNlIC9eN1YqL2ksICcnLCAgXVxuICAgICMgMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTFcbiAgTiA9ICdOJy5jb2RlUG9pbnRBdCAwXG4gIGcxID0gKCBuICkgLT5cbiAgICBbIHNpZ24sIG5ycHIsIF0gPSBmMSBuXG4gICAgcmV0dXJuIG5ycHIgaWYgc2lnbiBpcyAwXG4gICAgcmV0dXJuICggU3RyaW5nLmZyb21Db2RlUG9pbnQgTiArIG5ycHIubGVuZ3RoICkgKyBucnByIGlmIHNpZ24gaXMgKzFcbiAgICByZXR1cm4gKCBTdHJpbmcuZnJvbUNvZGVQb2ludCBOIC0gbnJwci5sZW5ndGggKSArIG5ycHJcbiAgaW5mbyAnzqlic2tfX18zJywgJzAgICAgICcsICggZjEgMCAgICAgICksICggZzEgMCAgICAgIClcbiAgaW5mbyAnzqlic2tfX180JywgJzEgICAgICcsICggZjEgMSAgICAgICksICggZzEgMSAgICAgIClcbiAgaW5mbyAnzqlic2tfX181JywgJzIgICAgICcsICggZjEgMiAgICAgICksICggZzEgMiAgICAgIClcbiAgaW5mbyAnzqlic2tfX182JywgJzMxICAgICcsICggZjEgMzEgICAgICksICggZzEgMzEgICAgIClcbiAgaW5mbyAnzqlic2tfX183JywgJzMyICAgICcsICggZjEgMzIgICAgICksICggZzEgMzIgICAgIClcbiAgaW5mbyAnzqlic2tfX184JywgJzMzICAgICcsICggZjEgMzMgICAgICksICggZzEgMzMgICAgIClcbiAgaW5mbyAnzqlic2tfX185JywgJy0xICAgICcsICggZjEgLTEgICAgICksICggZzEgLTEgICAgIClcbiAgaW5mbyAnzqlic2tfXzEwJywgJy0zMSAgICcsICggZjEgLTMxICAgICksICggZzEgLTMxICAgIClcbiAgaW5mbyAnzqlic2tfXzExJywgJy0zMiAgICcsICggZjEgLTMyICAgICksICggZzEgLTMyICAgIClcbiAgaW5mbyAnzqlic2tfXzEyJywgJy0zMjc2NycsICggZjEgLTMyNzY3ICksICggZzEgLTMyNzY3IClcbiAgaW5mbyAnzqlic2tfXzEzJywgJy0zMjc2OCcsICggZjEgLTMyNzY4ICksICggZzEgLTMyNzY4IClcbiAgaW5mbyAnzqlic2tfXzE0JywgJy0zMjc2OScsICggZjEgLTMyNzY5ICksICggZzEgLTMyNzY5IClcblxuICAjIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLnRvU3RyaW5nIDMyXG4gICMgJzd2dnZ2dnZ2dnZ2J1xuXG4gICMjI1xuXG4gICMgVmVjdG9yaWFsIE51bWJlcnMgKFZOUnMpIHRvIFRyYW5zZm9ybSBUZXh0IGFuZCBLZWVwIEl0XG5cblxuICBYIFsgMTAsIDMyLCBdIGBUaGUgcmVhZGluZyBvZiDmqIIgaXMgPHB5L3l1ZTQvIGZvciA8Z2xvc3MvbXVzaWMvIG9yIDxweS9sZTQvIG1lYW5pbmcgPGdsb3NzL2pveS8uYFxuICBfIFsgMTAsIDMyLCAgMSwgICAgXSBgVGhlIHJlYWRpbmcgb2Yg5qiCIGlzIGBcbiAgWCBbIDEwLCAzMiwgIDIsICAgIF0gYDxweS9gXG4gIFggWyAxMCwgMzIsICAzLCAgICBdIGB5dWU0YFxuICBfIFsgMTAsIDMyLCAgMywgMSwgXSBgPHNwYW4gY2xhc3M9cGlueWluPnl1w6g8L3NwYW4+YFxuICBYIFsgMTAsIDMyLCAgNCwgICAgXSBgL2BcbiAgXyBbIDEwLCAzMiwgIDUsICAgIF0gYCBmb3IgYFxuICBYIFsgMTAsIDMyLCAgNiwgICAgXSBgPGdsb3NzL2BcbiAgWCBbIDEwLCAzMiwgIDcsICAgIF0gYG11c2ljYFxuICBfIFsgMTAsIDMyLCAgNywgMSwgXSBgPHNwYW4gY2xhc3M9Z2xvc3M+bXVzaWM8L3NwYW4+YFxuICBYIFsgMTAsIDMyLCAgOCwgICAgXSBgL2BcbiAgXyBbIDEwLCAzMiwgIDksICAgIF0gYCBvciBgXG4gIFggWyAxMCwgMzIsIDEwLCAgICBdIGA8cHkvYFxuICBYIFsgMTAsIDMyLCAxMSwgICAgXSBgbGU0YFxuICBfIFsgMTAsIDMyLCAxMSwgMSwgXSBgPHNwYW4gY2xhc3M9cGlueWluPmzDqDwvc3Bhbj5gXG4gIF8gWyAxMCwgMzIsIDEyLCAgICBdIGAgbWVhbmluZyBgXG4gIFggWyAxMCwgMzIsIDEzLCAgICBdIGA8Z2xvc3MvYFxuICBYIFsgMTAsIDMyLCAxNCwgICAgXSBgam95YFxuICBfIFsgMTAsIDMyLCAxNCwgMSwgXSBgPHNwYW4gY2xhc3M9Z2xvc3M+am95PC9zcGFuPmBcbiAgWCBbIDEwLCAzMiwgMTUsICAgIF0gYC9gXG4gIF8gWyAxMCwgMzIsIDE2LCAgICBdIGAuXFxuYFxuXG4gIE5PVEUgY291bGQndmUgcmF0aGVyIHN1cnJvdW5kZWQgZ2xvc3NlczpcblxuICBYIFsgMTAsIDMyLCAxMywgICAgXSBgPGdsb3NzL2BcbiAgXyBbIDEwLCAzMiwgMTQsIC0xLF0gYDxzcGFuIGNsYXNzPWdsb3NzPmBcbiAgXyBbIDEwLCAzMiwgMTQsICAgIF0gYGpveWBcbiAgXyBbIDEwLCAzMiwgMTQsIDEsIF0gYDwvc3Bhbj5gXG4gIFggWyAxMCwgMzIsIDE1LCAgICBdIGAvYFxuXG4gICMjI1xuXG5cbiAgcmV0dXJuIG51bGxcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5UTVBfcmVxdWlyZV9lbmNvZGVfaW5fYWxwaGFiZXQgPSAtPlxuICBgYGBcbiAgZnVuY3Rpb24gZW5jb2RlQmlnSW50KG51bSwgYWxwaGFiZXQpIHtcbiAgICBpZiAodHlwZW9mIG51bSA9PT0gXCJudW1iZXJcIikgbnVtID0gQmlnSW50KG51bSk7XG4gICAgaWYgKG51bSA8IDBuKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIk9ubHkgbm9ubmVnYXRpdmUgaW50ZWdlcnMgc3VwcG9ydGVkXCIpO1xuICAgIGlmIChudW0gPT09IDBuKSByZXR1cm4gYWxwaGFiZXRbMF07XG5cbiAgICBjb25zdCBiYXNlID0gQmlnSW50KGFscGhhYmV0Lmxlbmd0aCk7XG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XG5cbiAgICB3aGlsZSAobnVtID4gMG4pIHtcbiAgICAgIGNvbnN0IHJlbSA9IG51bSAlIGJhc2U7XG4gICAgICByZXN1bHQgPSBhbHBoYWJldFtOdW1iZXIocmVtKV0gKyByZXN1bHQ7XG4gICAgICBudW0gPSBudW0gLyBiYXNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGVCaWdJbnQoc3RyLCBhbHBoYWJldCkge1xuICAgIGNvbnN0IGJhc2UgPSBCaWdJbnQoYWxwaGFiZXQubGVuZ3RoKTtcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKGFscGhhYmV0LnNwbGl0KFwiXCIpLm1hcCgoY2gsIGkpID0+IFtjaCwgQmlnSW50KGkpXSkpO1xuXG4gICAgbGV0IG51bSA9IDBuO1xuICAgIGZvciAoY29uc3QgY2ggb2Ygc3RyKSB7XG4gICAgICBjb25zdCB2YWwgPSBtYXAuZ2V0KGNoKTtcbiAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNoYXJhY3RlcjogJHtjaH1gKTtcbiAgICAgIG51bSA9IG51bSAqIGJhc2UgKyB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bTtcbiAgfVxuICBgYGBcbiAgcmV0dXJuIHsgZW5jb2RlQmlnSW50LCBkZWNvZGVCaWdJbnQsIH1cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kZW1vX2NoYXRncHRfc29sdXRpb24gPSAtPlxuICB7IGVuY29kZUJpZ0ludCxcbiAgICBkZWNvZGVCaWdJbnQsICAgfSA9IFRNUF9yZXF1aXJlX2VuY29kZV9pbl9hbHBoYWJldCgpXG4gIHVyZ2UgJ86pYnNrX18xNScsIGVuY29kZUJpZ0ludCAxMjM0NTY3OCwgJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6J1xuICAjIHVyZ2UgJ86pYnNrX18xNicsIHJwciBlbmNvZGVCaWdJbnQgMTAwbiwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXrCqsK1wrrDgMOBw4LDg8OEw4XDhsOHw4jDicOKw4vDjMONw47Dj8OQw5HDksOTw5TDlcOWw5jDmcOaw5vDnMOdw57Dn8Ogw6HDosOjw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDuMO5w7rDu8O8w73DvsO/xIDEgcSCxIPEhMSFxIbEh8SIxInEisSLxIzEjcSOxI/EkMSRxJLEk8SUxJXElsSXxJjEmcSaxJvEnMSdxJ7En8SgxKHEosSjxKTEpcSmxKfEqMSpxKrEq8SsxK3ErsSvxLDEscSyxLPEtMS1xLbEt8S4xLnEusS7xLzEvcS+xL/FgMWBxYLFg8WExYXFhsWHxYjFicWKxYvFjMWNxY7Fj8WQxZHFksWTxZTFlcWWxZfFmMWZxZrFm8WcxZ3FnsWfxaDFocWixaPFpMWlxabFp8WoxanFqsWrxazFrcWuxa/FsMWxxbLFs8W0xbXFtsW3xbjFucW6xbvFvMW9xb7Fv8aAxoHGgsaDxoTGhcaGxofGiMaJxorGi8aMxo3GjsaPxpDGkcaSxpPGlMaVxpbGl8aYxpnGmsabxpzGncaexp/GoMahxqLGo8akxqXGpsanxqjGqcaqxqvGrMatxq7Gr8awxrHGssazxrTGtca2xrfGuMa5xrrGu8a8xr3Gvsa/x4DHgceCx4PHhMeFx4bHh8eIx4nHiseLx4zHjceOx4/HkMeRx5LHk8eUx5XHlseXx5jHmceax5vHnMedx57Hn8egx6HHosejx6THpcemx6fHqMepx6rHq8esx63Hrsevx7DHsceyx7PHtMe1x7bHt8e4x7nHuse7x7zHvce+x7/IgMiByILIg8iEyIXIhsiHyIjIiciKyIvIjMiNyI7Ij8iQyJHIksiTyJTIlciWyJfImMiZyJrIm8icyJ3InsifyKDIociiyKPIpMilyKbIp8ioyKnIqsiryKzIrciuyK/IsMixyLLIs8i0yLXItsi3yLjIuci6yLvIvMi9yL7Iv8mAyYHJgsmDyYTJhcmGyYfJiMmJyYrJi8mMyY3JjsmPyZDJkcmSyZPJlMmVyZbJl8mYyZnJmsmbyZzJncmeyZ/JoMmhyaLJo8mkyaXJpsmnyajJqcmqyavJrMmtya7Jr8mwybHJssmzybTJtcm2ybfJuMm5ybrJu8m8yb3Jvsm/yoDKgcqCyoPKhMqFyobKh8qIyonKisqLyozKjcqOyo/KkMqRypLKk8qUypXKlsqXypjKmcqaypvKnMqdyp7Kn8qgyqHKosqjyqTKpcqmyqfKqMqpyqrKq8qsyq3KrsqvyrDKscqyyrPKtMq1yrbKt8q4yrnKusq7yrzKvcq+yr/LgMuBy4bLh8uIy4nLisuLy4zLjcuOy4/LkMuRy6DLocuiy6PLpMusy67NsM2xzbLNs820zbbNt826zbvNvM29zb/Ohs6IzonOis6Mzo7Oj86QzpHOks6TzpTOlc6WzpfOmM6ZzprOm86czp3Ons6fzqDOoc6jzqTOpc6mzqfOqM6pzqrOq86szq3Ors6vzrDOsc6yzrPOtM61zrbOt864zrnOus67zrzOvc6+zr/PgM+Bz4LPg8+Ez4XPhs+Hz4jPic+Kz4vPjM+Nz47Pj8+Qz5HPks+Tz5TPlc+Wz5fPmM+Zz5rPm8+cz53Pns+fz6DPoc+iz6PPpM+lz6bPp8+oJ1xuICAjIHVyZ2UgJ86pYnNrX18xNycsIHJwciBlbmNvZGVCaWdJbnQgMTAwMG4sICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6wqrCtcK6w4DDgcOCw4PDhMOFw4bDh8OIw4nDisOLw4zDjcOOw4/DkMORw5LDk8OUw5XDlsOYw5nDmsObw5zDncOew5/DoMOhw6LDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7jDucO6w7vDvMO9w77Dv8SAxIHEgsSDxITEhcSGxIfEiMSJxIrEi8SMxI3EjsSPxJDEkcSSxJPElMSVxJbEl8SYxJnEmsSbxJzEncSexJ/EoMShxKLEo8SkxKXEpsSnxKjEqcSqxKvErMStxK7Er8SwxLHEssSzxLTEtcS2xLfEuMS5xLrEu8S8xL3EvsS/xYDFgcWCxYPFhMWFxYbFh8WIxYnFisWLxYzFjcWOxY/FkMWRxZLFk8WUxZXFlsWXxZjFmcWaxZvFnMWdxZ7Fn8WgxaHFosWjxaTFpcWmxafFqMWpxarFq8Wsxa3FrsWvxbDFscWyxbPFtMW1xbbFt8W4xbnFusW7xbzFvcW+xb/GgMaBxoLGg8aExoXGhsaHxojGicaKxovGjMaNxo7Gj8aQxpHGksaTxpTGlcaWxpfGmMaZxprGm8acxp3GnsafxqDGocaixqPGpMalxqbGp8aoxqnGqsarxqzGrcauxq/GsMaxxrLGs8a0xrXGtsa3xrjGuca6xrvGvMa9xr7Gv8eAx4HHgseDx4THhceGx4fHiMeJx4rHi8eMx43HjsePx5DHkceSx5PHlMeVx5bHl8eYx5nHmsebx5zHnceex5/HoMehx6LHo8ekx6XHpsenx6jHqceqx6vHrMetx67Hr8ewx7HHssezx7THtce2x7fHuMe5x7rHu8e8x73Hvse/yIDIgciCyIPIhMiFyIbIh8iIyInIisiLyIzIjciOyI/IkMiRyJLIk8iUyJXIlsiXyJjImciayJvInMidyJ7In8igyKHIosijyKTIpcimyKfIqMipyKrIq8isyK3IrsivyLDIsciyyLPItMi1yLbIt8i4yLnIusi7yLzIvci+yL/JgMmByYLJg8mEyYXJhsmHyYjJicmKyYvJjMmNyY7Jj8mQyZHJksmTyZTJlcmWyZfJmMmZyZrJm8mcyZ3JnsmfyaDJocmiyaPJpMmlyabJp8moyanJqsmryazJrcmuya/JsMmxybLJs8m0ybXJtsm3ybjJucm6ybvJvMm9yb7Jv8qAyoHKgsqDyoTKhcqGyofKiMqJyorKi8qMyo3KjsqPypDKkcqSypPKlMqVypbKl8qYypnKmsqbypzKncqeyp/KoMqhyqLKo8qkyqXKpsqnyqjKqcqqyqvKrMqtyq7Kr8qwyrHKssqzyrTKtcq2yrfKuMq5yrrKu8q8yr3Kvsq/y4DLgcuGy4fLiMuJy4rLi8uMy43LjsuPy5DLkcugy6HLosujy6TLrMuuzbDNsc2yzbPNtM22zbfNus27zbzNvc2/zobOiM6JzorOjM6Ozo/OkM6RzpLOk86UzpXOls6XzpjOmc6azpvOnM6dzp7On86gzqHOo86kzqXOps6nzqjOqc6qzqvOrM6tzq7Or86wzrHOss6zzrTOtc62zrfOuM65zrrOu868zr3Ovs6/z4DPgc+Cz4PPhM+Fz4bPh8+Iz4nPis+Lz4zPjc+Oz4/PkM+Rz5LPk8+Uz5XPls+Xz5jPmc+az5vPnM+dz57Pn8+gz6HPos+jz6TPpc+mz6fPqCdcbiAgIyB1cmdlICfOqWJza19fMTgnLCBycHIgZW5jb2RlQmlnSW50IDEwMDAwbiwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXrCqsK1wrrDgMOBw4LDg8OEw4XDhsOHw4jDicOKw4vDjMONw47Dj8OQw5HDksOTw5TDlcOWw5jDmcOaw5vDnMOdw57Dn8Ogw6HDosOjw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDuMO5w7rDu8O8w73DvsO/xIDEgcSCxIPEhMSFxIbEh8SIxInEisSLxIzEjcSOxI/EkMSRxJLEk8SUxJXElsSXxJjEmcSaxJvEnMSdxJ7En8SgxKHEosSjxKTEpcSmxKfEqMSpxKrEq8SsxK3ErsSvxLDEscSyxLPEtMS1xLbEt8S4xLnEusS7xLzEvcS+xL/FgMWBxYLFg8WExYXFhsWHxYjFicWKxYvFjMWNxY7Fj8WQxZHFksWTxZTFlcWWxZfFmMWZxZrFm8WcxZ3FnsWfxaDFocWixaPFpMWlxabFp8WoxanFqsWrxazFrcWuxa/FsMWxxbLFs8W0xbXFtsW3xbjFucW6xbvFvMW9xb7Fv8aAxoHGgsaDxoTGhcaGxofGiMaJxorGi8aMxo3GjsaPxpDGkcaSxpPGlMaVxpbGl8aYxpnGmsabxpzGncaexp/GoMahxqLGo8akxqXGpsanxqjGqcaqxqvGrMatxq7Gr8awxrHGssazxrTGtca2xrfGuMa5xrrGu8a8xr3Gvsa/x4DHgceCx4PHhMeFx4bHh8eIx4nHiseLx4zHjceOx4/HkMeRx5LHk8eUx5XHlseXx5jHmceax5vHnMedx57Hn8egx6HHosejx6THpcemx6fHqMepx6rHq8esx63Hrsevx7DHsceyx7PHtMe1x7bHt8e4x7nHuse7x7zHvce+x7/IgMiByILIg8iEyIXIhsiHyIjIiciKyIvIjMiNyI7Ij8iQyJHIksiTyJTIlciWyJfImMiZyJrIm8icyJ3InsifyKDIociiyKPIpMilyKbIp8ioyKnIqsiryKzIrciuyK/IsMixyLLIs8i0yLXItsi3yLjIuci6yLvIvMi9yL7Iv8mAyYHJgsmDyYTJhcmGyYfJiMmJyYrJi8mMyY3JjsmPyZDJkcmSyZPJlMmVyZbJl8mYyZnJmsmbyZzJncmeyZ/JoMmhyaLJo8mkyaXJpsmnyajJqcmqyavJrMmtya7Jr8mwybHJssmzybTJtcm2ybfJuMm5ybrJu8m8yb3Jvsm/yoDKgcqCyoPKhMqFyobKh8qIyonKisqLyozKjcqOyo/KkMqRypLKk8qUypXKlsqXypjKmcqaypvKnMqdyp7Kn8qgyqHKosqjyqTKpcqmyqfKqMqpyqrKq8qsyq3KrsqvyrDKscqyyrPKtMq1yrbKt8q4yrnKusq7yrzKvcq+yr/LgMuBy4bLh8uIy4nLisuLy4zLjcuOy4/LkMuRy6DLocuiy6PLpMusy67NsM2xzbLNs820zbbNt826zbvNvM29zb/Ohs6IzonOis6Mzo7Oj86QzpHOks6TzpTOlc6WzpfOmM6ZzprOm86czp3Ons6fzqDOoc6jzqTOpc6mzqfOqM6pzqrOq86szq3Ors6vzrDOsc6yzrPOtM61zrbOt864zrnOus67zrzOvc6+zr/PgM+Bz4LPg8+Ez4XPhs+Hz4jPic+Kz4vPjM+Nz47Pj8+Qz5HPks+Tz5TPlc+Wz5fPmM+Zz5rPm8+cz53Pns+fz6DPoc+iz6PPpM+lz6bPp8+oJ1xuICAjIHVyZ2UgJ86pYnNrX18xOScsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDBuLCAn4oWg4oWh4oWi4oWj4oWk4oWl4oWm4oWn4oWo4oWp4oWq4oWr4oWs4oWt4oWu4oWvJ1xuICAjIHVyZ2UgJ86pYnNrX18yMCcsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDBuLCAn4pGg4pGh4pGi4pGj4pGk4pGl4pGm4pGn4pGo4pGpJ1xuICAjIHVyZ2UgJ86pYnNrX18yMScsIHJwciBlbmNvZGVCaWdJbnQgMSwgJ+KSiOKSieKSiuKSi+KSjOKSjeKSjuKSj+KSkOKSkSdcbiAgIyB1cmdlICfOqWJza19fMjInLCBycHIgZW5jb2RlQmlnSW50IDIsICfikojikonikorikovikoziko3iko7iko/ikpDikpEnXG4gICMgdXJnZSAnzqlic2tfXzIzJywgcnByIGVuY29kZUJpZ0ludCAxMCwgJ+KSiOKSieKSiuKSi+KSjOKSjeKSjuKSj+KSkOKSkSdcbiAgIyB1cmdlICfOqWJza19fMjQnLCBycHIgZW5jb2RlQmlnSW50IDEwLCAn4ryA4ryB4ryC4ryD4ryE4ryF4ryG4ryH4ryI4ryJ4ryK4ryL4ryM4ryN4ryO4ryP4ryQ4ryR4ryS4ryT4ryU4ryV4ryW4ryX4ryY4ryZ4rya4ryb4ryc4ryd4rye4ryf4ryg4ryh4ryi4ryj4ryk4ryl4rym4ryn4ryo4ryp4ryq4ryr4rys4ryt4ryu4ryv4ryw4ryx4ryy4ryz4ry04ry14ry24ry34ry44ry54ry64ry74ry84ry94ry+4ry/4r2A4r2B4r2C4r2D4r2E4r2F4r2G4r2H4r2I4r2J4r2K4r2L4r2M4r2N4r2O4r2P4r2Q4r2R4r2S4r2T4r2U4r2V4r2W4r2X4r2Y4r2Z4r2a4r2b4r2c4r2d4r2e4r2f4r2g4r2h4r2i4r2j4r2k4r2l4r2m4r2n4r2o4r2p4r2q4r2r4r2s4r2t4r2u4r2v4r2w4r2x4r2y4r2z4r204r214r224r234r244r254r264r274r284r294r2+4r2/4r6A4r6B4r6C4r6D4r6E4r6F4r6G4r6H4r6I4r6J4r6K4r6L4r6M4r6N4r6O4r6P4r6Q4r6R4r6S4r6T4r6U4r6V4r6W4r6X4r6Y4r6Z4r6a4r6b4r6c4r6d4r6e4r6f4r6g4r6h4r6i4r6j4r6k4r6l4r6m4r6n4r6o4r6p4r6q4r6r4r6s4r6t4r6u4r6v4r6w4r6x4r6y4r6z4r604r614r624r634r644r654r664r674r684r694r6+4r6/4r+A4r+B4r+C4r+D4r+E4r+F4r+G4r+H4r+I4r+J4r+K4r+L4r+M4r+N4r+O4r+P4r+Q4r+R4r+S4r+T4r+U4r+VJ1xuICAjIHVyZ2UgJ86pYnNrX18yNScsIHJwciBlbmNvZGVCaWdJbnQgMTAwLCAn4ryA4ryB4ryC4ryD4ryE4ryF4ryG4ryH4ryI4ryJ4ryK4ryL4ryM4ryN4ryO4ryP4ryQ4ryR4ryS4ryT4ryU4ryV4ryW4ryX4ryY4ryZ4rya4ryb4ryc4ryd4rye4ryf4ryg4ryh4ryi4ryj4ryk4ryl4rym4ryn4ryo4ryp4ryq4ryr4rys4ryt4ryu4ryv4ryw4ryx4ryy4ryz4ry04ry14ry24ry34ry44ry54ry64ry74ry84ry94ry+4ry/4r2A4r2B4r2C4r2D4r2E4r2F4r2G4r2H4r2I4r2J4r2K4r2L4r2M4r2N4r2O4r2P4r2Q4r2R4r2S4r2T4r2U4r2V4r2W4r2X4r2Y4r2Z4r2a4r2b4r2c4r2d4r2e4r2f4r2g4r2h4r2i4r2j4r2k4r2l4r2m4r2n4r2o4r2p4r2q4r2r4r2s4r2t4r2u4r2v4r2w4r2x4r2y4r2z4r204r214r224r234r244r254r264r274r284r294r2+4r2/4r6A4r6B4r6C4r6D4r6E4r6F4r6G4r6H4r6I4r6J4r6K4r6L4r6M4r6N4r6O4r6P4r6Q4r6R4r6S4r6T4r6U4r6V4r6W4r6X4r6Y4r6Z4r6a4r6b4r6c4r6d4r6e4r6f4r6g4r6h4r6i4r6j4r6k4r6l4r6m4r6n4r6o4r6p4r6q4r6r4r6s4r6t4r6u4r6v4r6w4r6x4r6y4r6z4r604r614r624r634r644r654r664r674r684r694r6+4r6/4r+A4r+B4r+C4r+D4r+E4r+F4r+G4r+H4r+I4r+J4r+K4r+L4r+M4r+N4r+O4r+P4r+Q4r+R4r+S4r+T4r+U4r+VJ1xuICAjIHVyZ2UgJ86pYnNrX18yNicsIHJwciBlbmNvZGVCaWdJbnQgMTAwMCwgJ+K8gOK8geK8guK8g+K8hOK8heK8huK8h+K8iOK8ieK8iuK8i+K8jOK8jeK8juK8j+K8kOK8keK8kuK8k+K8lOK8leK8luK8l+K8mOK8meK8muK8m+K8nOK8neK8nuK8n+K8oOK8oeK8ouK8o+K8pOK8peK8puK8p+K8qOK8qeK8quK8q+K8rOK8reK8ruK8r+K8sOK8seK8suK8s+K8tOK8teK8tuK8t+K8uOK8ueK8uuK8u+K8vOK8veK8vuK8v+K9gOK9geK9guK9g+K9hOK9heK9huK9h+K9iOK9ieK9iuK9i+K9jOK9jeK9juK9j+K9kOK9keK9kuK9k+K9lOK9leK9luK9l+K9mOK9meK9muK9m+K9nOK9neK9nuK9n+K9oOK9oeK9ouK9o+K9pOK9peK9puK9p+K9qOK9qeK9quK9q+K9rOK9reK9ruK9r+K9sOK9seK9suK9s+K9tOK9teK9tuK9t+K9uOK9ueK9uuK9u+K9vOK9veK9vuK9v+K+gOK+geK+guK+g+K+hOK+heK+huK+h+K+iOK+ieK+iuK+i+K+jOK+jeK+juK+j+K+kOK+keK+kuK+k+K+lOK+leK+luK+l+K+mOK+meK+muK+m+K+nOK+neK+nuK+n+K+oOK+oeK+ouK+o+K+pOK+peK+puK+p+K+qOK+qeK+quK+q+K+rOK+reK+ruK+r+K+sOK+seK+suK+s+K+tOK+teK+tuK+t+K+uOK+ueK+uuK+u+K+vOK+veK+vuK+v+K/gOK/geK/guK/g+K/hOK/heK/huK/h+K/iOK/ieK/iuK/i+K/jOK/jeK/juK/j+K/kOK/keK/kuK/k+K/lOK/lSdcbiAgIyB1cmdlICfOqWJza19fMjcnLCBycHIgZW5jb2RlQmlnSW50IDEwMDAwLCAn4ryA4ryB4ryC4ryD4ryE4ryF4ryG4ryH4ryI4ryJ4ryK4ryL4ryM4ryN4ryO4ryP4ryQ4ryR4ryS4ryT4ryU4ryV4ryW4ryX4ryY4ryZ4rya4ryb4ryc4ryd4rye4ryf4ryg4ryh4ryi4ryj4ryk4ryl4rym4ryn4ryo4ryp4ryq4ryr4rys4ryt4ryu4ryv4ryw4ryx4ryy4ryz4ry04ry14ry24ry34ry44ry54ry64ry74ry84ry94ry+4ry/4r2A4r2B4r2C4r2D4r2E4r2F4r2G4r2H4r2I4r2J4r2K4r2L4r2M4r2N4r2O4r2P4r2Q4r2R4r2S4r2T4r2U4r2V4r2W4r2X4r2Y4r2Z4r2a4r2b4r2c4r2d4r2e4r2f4r2g4r2h4r2i4r2j4r2k4r2l4r2m4r2n4r2o4r2p4r2q4r2r4r2s4r2t4r2u4r2v4r2w4r2x4r2y4r2z4r204r214r224r234r244r254r264r274r284r294r2+4r2/4r6A4r6B4r6C4r6D4r6E4r6F4r6G4r6H4r6I4r6J4r6K4r6L4r6M4r6N4r6O4r6P4r6Q4r6R4r6S4r6T4r6U4r6V4r6W4r6X4r6Y4r6Z4r6a4r6b4r6c4r6d4r6e4r6f4r6g4r6h4r6i4r6j4r6k4r6l4r6m4r6n4r6o4r6p4r6q4r6r4r6s4r6t4r6u4r6v4r6w4r6x4r6y4r6z4r604r614r624r634r644r654r664r674r684r694r6+4r6/4r+A4r+B4r+C4r+D4r+E4r+F4r+G4r+H4r+I4r+J4r+K4r+L4r+M4r+N4r+O4r+P4r+Q4r+R4r+S4r+T4r+U4r+VJ1xuICAjIHVyZ2UgJ86pYnNrX18yOCcsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDAwLCAn4ryA4ryB4ryC4ryD4ryE4ryF4ryG4ryH4ryI4ryJ4ryK4ryL4ryM4ryN4ryO4ryP4ryQ4ryR4ryS4ryT4ryU4ryV4ryW4ryX4ryY4ryZ4rya4ryb4ryc4ryd4rye4ryf4ryg4ryh4ryi4ryj4ryk4ryl4rym4ryn4ryo4ryp4ryq4ryr4rys4ryt4ryu4ryv4ryw4ryx4ryy4ryz4ry04ry14ry24ry34ry44ry54ry64ry74ry84ry94ry+4ry/4r2A4r2B4r2C4r2D4r2E4r2F4r2G4r2H4r2I4r2J4r2K4r2L4r2M4r2N4r2O4r2P4r2Q4r2R4r2S4r2T4r2U4r2V4r2W4r2X4r2Y4r2Z4r2a4r2b4r2c4r2d4r2e4r2f4r2g4r2h4r2i4r2j4r2k4r2l4r2m4r2n4r2o4r2p4r2q4r2r4r2s4r2t4r2u4r2v4r2w4r2x4r2y4r2z4r204r214r224r234r244r254r264r274r284r294r2+4r2/4r6A4r6B4r6C4r6D4r6E4r6F4r6G4r6H4r6I4r6J4r6K4r6L4r6M4r6N4r6O4r6P4r6Q4r6R4r6S4r6T4r6U4r6V4r6W4r6X4r6Y4r6Z4r6a4r6b4r6c4r6d4r6e4r6f4r6g4r6h4r6i4r6j4r6k4r6l4r6m4r6n4r6o4r6p4r6q4r6r4r6s4r6t4r6u4r6v4r6w4r6x4r6y4r6z4r604r614r624r634r644r654r664r674r684r694r6+4r6/4r+A4r+B4r+C4r+D4r+E4r+F4r+G4r+H4r+I4r+J4r+K4r+L4r+M4r+N4r+O4r+P4r+Q4r+R4r+S4r+T4r+U4r+VJ1xuICAjIHVyZ2UgJ86pYnNrX18yOScsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDAwLCAn44Ki44Kk44Km44Ko44Kq44Kr44Kt44Kv44Kx44KzJ1xuICB1cmdlICfOqWJza19fMzAnLCBycHIgZW5jb2RlQmlnSW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAnJychXCIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0AnJydcbiAgdXJnZSAnzqlic2tfXzMxJywgcnByIGVuY29kZUJpZ0ludCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgJyEjJCUmKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW11eX2BhYmMnXG4gIHVyZ2UgJ86pYnNrX18zMicsIHJwciBlbmNvZGVCaWdJbnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsICchIyQlJigpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+wqHCosKjwqTCpcKmwqfCqMKpwqrCq8Kswq7Cr8KwwrHCssKzwrTCtcK2wrfCuMK5wrrCu8K8wr3CvsK/w4DDgcOCw4PDhMOFw4bDh8OIw4nDisOLw4zDjcOOw4/DkMORw5LDk8OUw5XDlsOXw5jDmcOaw5vDnMOdw57Dn8Ogw6HDosOjw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDt8O4w7nDusO7w7zDvcO+w78nXG4gIHVyZ2UgJ86pYnNrX18zMycsIHJwciBlbmNvZGVCaWdJbnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsICchIyQlJigpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+wqHCosKjwqTCpcKmwqfCqMKpwqrCq8Kswq7Cr8KwwrHCssKzwrTCtcK2wrfCuMK5wrrCu8K8wr3CvsK/w4DDgcOCw4PDhMOFw4YnXG4gIHVyZ2UgJ86pYnNrX18zNCcsIHJwciBlbmNvZGVCaWdJbnQgMCwgJzAxJ1xuICB1cmdlICfOqWJza19fMzUnLCBycHIgZW5jb2RlQmlnSW50IDEsICcwMSdcbiAgdXJnZSAnzqlic2tfXzM2JywgcnByIGVuY29kZUJpZ0ludCAyLCAnMDEnXG4gIHVyZ2UgJ86pYnNrX18zNycsIHJwciBlbmNvZGVCaWdJbnQgMywgJzAxJ1xuICB1cmdlICfOqWJza19fMzgnLCBycHIgZW5jb2RlQmlnSW50IDcsICcwMSdcbiAgdXJnZSAnzqlic2tfXzM5JywgcnByIGVuY29kZUJpZ0ludCA4LCAnMDEnXG4gIHVyZ2UgJ86pYnNrX180MCcsIHJwciBlbmNvZGVCaWdJbnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsICcwMSdcbiAgIyArNTcgZnJlZSBjb2RlcG9pbnRzXG4gICMgIC04IHBvcyBuZWdhdGl2ZVxuICAjICAtOCBwb3MgcG9zaXRpdmVcbiAgIyAgLTEgemVyb1xuICAjIOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFxuICAjICs0MCBmb3JcbiAgIyAtMjAgbmVnYXRpdmUgc2luZ2xlLWRpZ2l0XG4gICMgLTIwIHBvc2l0aXZlIHNpbmdsZS1kaWdpdFxuICAjIDLDhsOGw4bDhsOGw4bDhlxuXG4gICMjI1xuXG5cbiAgKiBmb3IgbnVtYmVycyBgLTIwIDw9IG4gPD0gKzIwYDpcbiAgICAqIG5lZ2F0aXZlIHVuaWxpdGVyYWwgbnVtYmVycyAgICAgICAgICAgKE5VTnMpOiAgLTIwIC4uICDDj8OQw5HDksOTw5TDlcOWw5fDmMOZw5rDm8Ocw53DnsOfw6DDocOiIC4uIC0xXG4gICAgICAqIHVzZSBuZWdhdGl2ZSBpbmRleCB3aXRoIGBhdGAgaW5kZXhpbmcgYXMgaW4gYG51bi5hdCAtM2AgdG8gZ2V0IGDDoGAgZm9yIGAtM2BcbiAgICAqIHplcm8gdW5pbGl0ZXJhbCBudW1iZXIgICAgICAgICAgICAgICAgKFpVTik6ICAgIMKxMCAuLiAgw6NcbiAgICAqIHBvc2l0aXZlIHVuaWxpdGVyYWwgbnVtYmVycyAgICAgICAgICAgKFBVTnMpOiAgICsxIC4uICDDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO3IC4uICsyMFxuICAgICAgKiB1c2UgbmV4dCBzdGVwXG4gICAgKiB6ZXJvIGFuZCBwb3NpdGl2ZSB1bmlsaXRlcmFsIG51bWJlcnMgIChaUFVOcyk6ICArMCAuLiDDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7cgLi4gKzIwXG4gICAgICAqIHByZXBlbmRpbmcgWlVOIHRvIFBVTnMgZ2l2ZXMgWlBVTnMsIHVzZSBgbmAgYXMgaW5kZXggYXMgaW4gYHpwdW5bICszIF1gIG9yIGB6cHVuLmF0ICszYCB0byBnZXQgYMOlYFxuXG4gICogZm9yIG51bWJlcnMgYG4gPiArMjBgOlxuICAgICogY29udmVydCB0byBCYXNlLTEyOCB1c2luZyBhbHBoYWJldDogISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fsKhwqLCo8KkwqXCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGXG4gICAgKiBwcmVwZW5kIHBvc2l0aXZlIG1hZ25pZmllciAgICAgICAgICAgIChQTUFHKSA6ICAxIHBvc2l0aXZlIGRpZ2l0IC4uICDDuMO5w7rDu8O8w73DvsO/ICAuLiAgOCBwb3NpdGl2ZSBkaWdpdHNcblxuICAqIGZvciBudW1iZXJzIGBuIDwgLTIwYDpcbiAgICAqIGFkZCBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgIHRvIGBuYCB0byBzaGlmdCB0aGUgbnVtYmVyIGludG8gdGhlIHBvc2l0aXZlLCB0aGVuIGNvbnZlcnQgdG8gQmFzZS0xMjhcbiAgICAqIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAgaXMgYDLDhsOGw4bDhsOGw4bDhmAgaW4gQmFzZS0xMjgsIG1lYW5pbmcgdGhhdCBsZWFkaW5nIGAvXjLDhiogL2AgY2FuIGJlIGRpc2NhcmRlZFxuICAgICogcHJlcGVuZCBuZWdhdGl2ZSBtYWduaWZpZXIgICAgICAgICAgICAoTk1BRykgOiAgMSBuZWdhdGl2ZSBkaWdpdCAuLiAgw47DjcOMw4vDisOJw4jDhyAgLi4gIDggbmVnYXRpdmUgZGlnaXRzXG5cblxuICDDhyAgICA4IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiCAgICA3IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiSAgICA2IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiiAgICA1IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiyAgICA0IG5lZ2F0aXZlIGRpZ2l0c1xuICDDjCAgICAzIG5lZ2F0aXZlIGRpZ2l0c1xuICDDjSAgICAyIG5lZ2F0aXZlIGRpZ2l0c1xuICDDjiAgICAxIG5lZ2F0aXZlIGRpZ2l0c1xuICDDjyAgLTIwXG4gIMOQICAtMTlcbiAgw5EgIC0xOFxuICDDkiAgLTE3XG4gIMOTICAtMTZcbiAgw5QgIC0xNVxuICDDlSAgLTE0XG4gIMOWICAtMTNcbiAgw5cgIC0xMlxuICDDmCAgLTExXG4gIMOZICAtMTBcbiAgw5ogICAtOVxuICDDmyAgIC04XG4gIMOcICAgLTdcbiAgw50gICAtNlxuICDDniAgIC01XG4gIMOfICAgLTRcbiAgw6AgICAtM1xuICDDoSAgIC0yXG4gIMOiICAgLTEgbmVnYXRpdmUgc21hbGwgc2luZ2xlLWxldHRlciBpbmRpY2VzXG5cbiAgw6MgICDCsTAgemVyb1xuXG4gIMOkICAgKzEgcG9zaXRpdmUgc21hbGwgc2luZ2xlLWxldHRlciBpbmRpY2VzXG4gIMOlICAgKzJcbiAgw6YgICArM1xuICDDpyAgICs0XG4gIMOoICAgKzVcbiAgw6kgICArNlxuICDDqiAgICs3XG4gIMOrICAgKzhcbiAgw6wgICArOVxuICDDrSAgKzEwXG4gIMOuICArMTFcbiAgw68gICsxMlxuICDDsCAgKzEzXG4gIMOxICArMTRcbiAgw7IgICsxNVxuICDDsyAgKzE2XG4gIMO0ICArMTdcbiAgw7UgICsxOFxuICDDtiAgKzE5XG4gIMO3ICArMjBcbiAgw7ggICAgMSBwb3NpdGl2ZSBkaWdpdHNcbiAgw7kgICAgMiBwb3NpdGl2ZSBkaWdpdHNcbiAgw7ogICAgMyBwb3NpdGl2ZSBkaWdpdHNcbiAgw7sgICAgNCBwb3NpdGl2ZSBkaWdpdHNcbiAgw7wgICAgNSBwb3NpdGl2ZSBkaWdpdHNcbiAgw70gICAgNiBwb3NpdGl2ZSBkaWdpdHNcbiAgw74gICAgNyBwb3NpdGl2ZSBkaWdpdHNcbiAgw78gICAgOCBwb3NpdGl2ZSBkaWdpdHNcblxuXG4gICMjI1xuXG5cblxuICBSID0gW11cbiAgZm9yIGNpZCBpbiBbIDB4MDAyMSAuLiAweDAwZmYgXVxuICAgICMgY29udGludWUgdW5sZXNzIC9eXFxwe0x9JC92LnRlc3QgKCBjaHIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWQgKVxuICAgICMgY29udGludWUgdW5sZXNzIC9eLiQvdi50ZXN0ICggY2hyID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkIClcbiAgICBjb250aW51ZSBpZiAvXlxccHtDfSQvdi50ZXN0ICggY2hyID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkIClcbiAgICBjb250aW51ZSBpZiAvXihbJ1wiXFxcXF18XFxwe1N9KSQvdi50ZXN0IGNoclxuICAgIFIucHVzaCBjaHJcbiAgdXJnZSAnzqlic2tfXzQxJywgcnByIFIuam9pbiAnJ1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9faG9sbGVyaXRoX3ZkeF9zb3J0a2V5ID0gLT5cbiAgIyMjIHZlY3RvcmlhbCBpbmRleCwgYS5rLmEuICd2aW5kZXgnLCBhLmsuYS4gVkRYLCBuZXh0IHZlcnNpb24gb2YgVk5SIGFzIGltcGxlbWVudGVkIGluIGBob2xsZXJpdGgtY29kZWNgXG4gICMjI1xuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHsgZW5jb2RlQmlnSW50LFxuICAgIGRlY29kZUJpZ0ludCwgICB9ID0gVE1QX3JlcXVpcmVfZW5jb2RlX2luX2FscGhhYmV0KClcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0YW50c18xMjggPSBPYmplY3QuZnJlZXplXG4gICAgbWF4X2ludGVnZXI6ICArNTYyXzk0OV85NTNfNDIxXzMxMVxuICAgIG1pbl9pbnRlZ2VyOiAgLTU2Ml85NDlfOTUzXzQyMV8zMTFcbiAgICB6cHVuczogICAgICAgICfDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7cnICMgemVybyBhbmQgcG9zaXRpdmUgdW5pbGl0ZXJhbCBudW1iZXJzXG4gICAgbnVuczogICAgICAgICAnw4/DkMORw5LDk8OUw5XDlsOXw5jDmcOaw5vDnMOdw57Dn8Ogw6HDoicgICMgbmVnYXRpdmUgICAgICAgICAgdW5pbGl0ZXJhbCBudW1iZXJzXG4gICAgenB1bl9tYXg6ICAgICArMjBcbiAgICBudW5fbWluOiAgICAgIC0yMFxuICAgIHplcm9fcGFkX2xlbmd0aDogOFxuICAgIGFscGhhYmV0OiAgICAgJyEjJCUmKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW11eX2AnIFxcXG4gICAgICAgICAgICAgICAgICAgICsgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fsKhwqLCo8KkwqXCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGJ1xuICAgICMjIyBUQUlOVCBzaW5jZSBzbWFsbCBpbnRzIHVwIHRvICsvLTIwIGFyZSByZXByZXNlbnRlZCBieSB1bmlsaXRlcmFscywgUE1BRyBgw7hgIGFuZCBOTUFHIGDDjmAgd2lsbCBuZXZlclxuICAgIGJlIHVzZWQsIHRodXMgY2FuIGJlIGZyZWVkIGZvciBvdGhlcig/KSB0aGluZ3MgIyMjXG4gICAgcG1hZzogICAgICAgICAnIMO4w7nDusO7w7zDvcO+w78nICAjIHBvc2l0aXZlICdtYWduaWZpZXInIGZvciAxIHRvIDggcG9zaXRpdmUgZGlnaXRzXG4gICAgbm1hZzogICAgICAgICAnIMOOw43DjMOLw4rDicOIw4cnICAjIG5lZ2F0aXZlICdtYWduaWZpZXInIGZvciAxIHRvIDggbmVnYXRpdmUgZGlnaXRzXG4gICAgbGVhZGluZ19uaW5lcnNfcmU6ICAgICAvLy8gXiAoPzogw4YgKSo/ICg/PSAuICQgKSAvLy9ndiAgICAgICMgJ25lZ2F0aXZlIGxlYWRlcicsIGRpc2NhcmRhYmxlIGxlYWRpbmcgZGlnaXRzIG9mIGxpZnRlZCBuZWdhdGl2ZSBudW1iZXJzXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdGFudHNfMTAgPSBPYmplY3QuZnJlZXplXG4gICAgbWF4X2ludGVnZXI6ICArOTk5XG4gICAgbWluX2ludGVnZXI6ICAtOTk5XG4gICAgenB1bnM6ICAgICAgICAnw6PDpMOlw6YnICMgemVybyBhbmQgcG9zaXRpdmUgdW5pbGl0ZXJhbCBudW1iZXJzXG4gICAgbnVuczogICAgICAgICAnw4/DkMORJyAgIyBuZWdhdGl2ZSAgICAgICAgICB1bmlsaXRlcmFsIG51bWJlcnNcbiAgICB6cHVuX21heDogICAgICszXG4gICAgbnVuX21pbjogICAgICAtM1xuICAgIHplcm9fcGFkX2xlbmd0aDogIDNcbiAgICBhbHBoYWJldDogICAgICcwMTIzNDU2Nzg5J1xuICAgIHBtYWc6ICAgICAgICAgJyDDuMO5w7rDu8O8w73DvsO/JyAgICMgcG9zaXRpdmUgJ21hZ25pZmllcicgZm9yIDEgdG8gOCBwb3NpdGl2ZSBkaWdpdHNcbiAgICBubWFnOiAgICAgICAgICcgw47DjcOMw4vDisOJw4jDhycgICAjIG5lZ2F0aXZlICdtYWduaWZpZXInIGZvciAxIHRvIDggbmVnYXRpdmUgZGlnaXRzXG4gICAgbGVhZGluZ19uaW5lcnNfcmU6ICAgICAvLy8gXiAoPzogOSApKj8gKD89IC4gJCApIC8vL2d2ICAgICAgICAgIyAnbmVnYXRpdmUgbGVhZGVyJywgZGlzY2FyZGFibGUgbGVhZGluZyBkaWdpdHMgb2YgbGlmdGVkIG5lZ2F0aXZlIG51bWJlcnNcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgY29uc3RhbnRzID0gQyA9IGNvbnN0YW50c18xMjhcbiAgY29uc3RhbnRzID0gQyA9IGNvbnN0YW50c18xMFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW50ZXJuYWxzID0gT2JqZWN0LmZyZWV6ZSB7IGNvbnN0YW50cywgfVxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY2xhc3MgVmluZGV4XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGVuY29kZTogKCBpbnRlZ2VyX29yX2xpc3QgKSAtPlxuICAgICAgIyMjIFRBSU5UIHVzZSBwcm9wZXIgdmFsaWRhdGlvbiAjIyNcbiAgICAgIGlmIEFycmF5LmlzQXJyYXkgaW50ZWdlcl9vcl9saXN0XG4gICAgICAgIHJldHVybiAoIEBlbmNvZGUgbiBmb3IgbiBpbiBpbnRlZ2VyX29yX2xpc3QgKS5qb2luICcnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIG4gPSBpbnRlZ2VyX29yX2xpc3RcbiAgICAgIHVubGVzcyBOdW1iZXIuaXNGaW5pdGUgblxuICAgICAgICB0eXBlID0gJ1hYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFgnXG4gICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pdmR4X180MiBleHBlY3RlZCBhIGZsb2F0LCBnb3QgYSAje3R5cGV9XCJcbiAgICAgIHVubGVzcyBDLm1pbl9pbnRlZ2VyIDw9IG4gPD0gQy5tYXhfaW50ZWdlclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqXZkeF9fNDMgZXhwZWN0ZWQgYSBmbG9hdCBiZXR3ZWVuICN7Qy5taW5faW50ZWdlcn0gYW5kICN7Qy5tYXhfaW50ZWdlcn0sIGdvdCAje259XCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIEBlbmNvZGVfaW50ZWdlciBuXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGVuY29kZV9pbnRlZ2VyOiAoIG4gKSAtPlxuICAgICAgIyMjIE5PVEUgY2FsbCBvbmx5IHdoZXJlIGFzc3VyZWQgYG5gIGlzIGludGVnZXIgd2l0aGluIG1hZ25pdHVkZSBvZiBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgICMjI1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIFplcm8gb3Igc21hbGwgcG9zaXRpdmU6XG4gICAgICByZXR1cm4gKCBDLnpwdW5zLmF0IG4gKSBpZiAwICAgICAgICAgIDw9IG4gPD0gQy56cHVuX21heFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIFNtYWxsIG5lZ2F0aXZlOlxuICAgICAgcmV0dXJuICggQy5udW5zLmF0ICBuICkgaWYgQy5udW5fbWluICA8PSBuIDwgIDBcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBCaWcgcG9zaXRpdmU6XG4gICAgICBpZiBuID4gQy56cHVuX21heFxuICAgICAgICBSID0gZW5jb2RlQmlnSW50IG4sIEMuYWxwaGFiZXRcbiAgICAgICAgcmV0dXJuICggQy5wbWFnLmF0IFIubGVuZ3RoICkgKyBSXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgQmlnIG5lZ2F0aXZlOlxuICAgICAgUiA9ICggZW5jb2RlQmlnSW50ICggbiArIEMubWF4X2ludGVnZXIgKyAxICksIEMuYWxwaGFiZXQgKVxuICAgICAgaWYgUi5sZW5ndGggPCBDLnplcm9fcGFkX2xlbmd0aCAgIHRoZW4gIFIgPSBSLnBhZFN0YXJ0IEMuemVyb19wYWRfbGVuZ3RoLCBDLmFscGhhYmV0LmF0IDBcbiAgICAgIGVsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSID0gUi5yZXBsYWNlIEMubGVhZGluZ19uaW5lcnNfcmUsICcnXG4gICAgICByZXR1cm4gKCBDLm5tYWcuYXQgUi5sZW5ndGggKSArIFJcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFZEWCA9IG5ldyBWaW5kZXgoKVxuICBoZWxwICfOqWJza19fNDQnLCBWRFguZW5jb2RlX2ludGVnZXIgKzFcbiAgaGVscCAnzqlic2tfXzQ1JywgVkRYLmVuY29kZV9pbnRlZ2VyICsyXG4gIGhlbHAgJ86pYnNrX180NicsIFZEWC5lbmNvZGVfaW50ZWdlciArM1xuICBoZWxwICfOqWJza19fNDcnLCBWRFguZW5jb2RlX2ludGVnZXIgKzRcbiAgaGVscCAnzqlic2tfXzQ4JywgVkRYLmVuY29kZV9pbnRlZ2VyICs1XG4gIGhlbHAgJ86pYnNrX180OScsIFZEWC5lbmNvZGVfaW50ZWdlciAxMFxuICBoZWxwICfOqWJza19fNTAnLCBWRFguZW5jb2RlX2ludGVnZXIgMjBcbiAgaGVscCAnzqlic2tfXzUxJywgVkRYLmVuY29kZV9pbnRlZ2VyIDIxXG4gIGhlbHAgJ86pYnNrX181MicsIFZEWC5lbmNvZGVfaW50ZWdlciAxMDBcbiAgaGVscCAnzqlic2tfXzUzJywgVkRYLmVuY29kZV9pbnRlZ2VyIDEyN1xuICBoZWxwICfOqWJza19fNTQnLCBWRFguZW5jb2RlX2ludGVnZXIgMTI4XG4gIGhlbHAgJ86pYnNrX181NScsIFZEWC5lbmNvZGVfaW50ZWdlciAxMjlcbiAgaGVscCAnzqlic2tfXzU2JywgVkRYLmVuY29kZV9pbnRlZ2VyICsxMjM0NTY3ODkwMTIzNDVcbiAgaGVscCAnzqlic2tfXzU3JywgVkRYLmVuY29kZV9pbnRlZ2VyIEMubWF4X2ludGVnZXJcbiAgaW5mbyAnzqlic2tfXzU4J1xuICBoZWxwICfOqWJza19fNTknLCBWRFguZW5jb2RlX2ludGVnZXIgMFxuICBpbmZvICfOqWJza19fNjAnXG4gIGhlbHAgJ86pYnNrX182MScsIFZEWC5lbmNvZGVfaW50ZWdlciAtMVxuICBoZWxwICfOqWJza19fNjInLCBWRFguZW5jb2RlX2ludGVnZXIgLTJcbiAgaGVscCAnzqlic2tfXzYzJywgVkRYLmVuY29kZV9pbnRlZ2VyIC0zXG4gIGhlbHAgJ86pYnNrX182NCcsIFZEWC5lbmNvZGVfaW50ZWdlciAtNFxuICBoZWxwICfOqWJza19fNjUnLCBWRFguZW5jb2RlX2ludGVnZXIgLTVcbiAgaGVscCAnzqlic2tfXzY2JywgVkRYLmVuY29kZV9pbnRlZ2VyIC0xMFxuICBoZWxwICfOqWJza19fNjcnLCBWRFguZW5jb2RlX2ludGVnZXIgLTIwXG4gIGhlbHAgJ86pYnNrX182OCcsIFZEWC5lbmNvZGVfaW50ZWdlciAtMjFcbiAgaGVscCAnzqlic2tfXzY5JywgVkRYLmVuY29kZV9pbnRlZ2VyIC0xMDBcbiAgaGVscCAnzqlic2tfXzcwJywgVkRYLmVuY29kZV9pbnRlZ2VyIC0xMjdcbiAgaGVscCAnzqlic2tfXzcxJywgVkRYLmVuY29kZV9pbnRlZ2VyIC0xMjhcbiAgaGVscCAnzqlic2tfXzcyJywgVkRYLmVuY29kZV9pbnRlZ2VyIC0xMjlcbiAgIyBoZWxwICfOqWJza19fNzMnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDBcbiAgIyBoZWxwICfOqWJza19fNzQnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwXG4gICMgaGVscCAnzqlic2tfXzc1JywgVkRYLmVuY29kZV9pbnRlZ2VyIC0xMDAwMDBcbiAgIyBoZWxwICfOqWJza19fNzYnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMDBcbiAgIyBoZWxwICfOqWJza19fNzcnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMDAwXG4gICMgaGVscCAnzqlic2tfXzc4JywgVkRYLmVuY29kZV9pbnRlZ2VyIC0xMDAwMDAwMDBcbiAgIyBoZWxwICfOqWJza19fNzknLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMDAwMDBcbiAgIyBoZWxwICfOqWJza19fODAnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMDAwMDAwXG4gICMgaGVscCAnzqlic2tfXzgxJywgVkRYLmVuY29kZV9pbnRlZ2VyIC0xMDAwMDAwMDAwMDBcbiAgIyBoZWxwICfOqWJza19fODInLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMDAwMDAwMDBcbiAgIyBoZWxwICfOqWJza19fODMnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEwMDAwMDAwMDAwMDAwXG4gICMgaGVscCAnzqlic2tfXzg0JywgVkRYLmVuY29kZV9pbnRlZ2VyIC0xMDAwMDAwMDAwMDAwMDBcbiAgIyBoZWxwICfOqWJza19fODUnLCBWRFguZW5jb2RlX2ludGVnZXIgLTEyMzQ1Njc4OTAxMjM0NVxuICAjIGhlbHAgJ86pYnNrX184NicsIFZEWC5lbmNvZGVfaW50ZWdlciAtODAwXG4gICMgaGVscCAnzqlic2tfXzg3JywgVkRYLmVuY29kZV9pbnRlZ2VyIC05MDBcbiAgIyBoZWxwICfOqWJza19fODgnLCBWRFguZW5jb2RlX2ludGVnZXIgLTk1MFxuICAjIGhlbHAgJ86pYnNrX184OScsIFZEWC5lbmNvZGVfaW50ZWdlciAtOTcwXG4gICMgaGVscCAnzqlic2tfXzkwJywgVkRYLmVuY29kZV9pbnRlZ2VyIC05ODBcbiAgIyBoZWxwICfOqWJza19fOTEnLCBWRFguZW5jb2RlX2ludGVnZXIgLTk5MFxuICAjIGhlbHAgJ86pYnNrX185MicsIFZEWC5lbmNvZGVfaW50ZWdlciAtOTk1XG4gICMgaGVscCAnzqlic2tfXzkzJywgVkRYLmVuY29kZV9pbnRlZ2VyIC05OTZcbiAgIyBoZWxwICfOqWJza19fOTQnLCBWRFguZW5jb2RlX2ludGVnZXIgLTk5N1xuICAjIGhlbHAgJ86pYnNrX185NScsIFZEWC5lbmNvZGVfaW50ZWdlciAtOTk4XG4gICMgaGVscCAnzqlic2tfXzk2JywgVkRYLmVuY29kZV9pbnRlZ2VyIC05OTlcbiAgaGVscCAnzqlic2tfXzk3JywgVkRYLmVuY29kZV9pbnRlZ2VyIEMubWluX2ludGVnZXIgKyAzXG4gIGhlbHAgJ86pYnNrX185OCcsIFZEWC5lbmNvZGVfaW50ZWdlciBDLm1pbl9pbnRlZ2VyICsgMlxuICBoZWxwICfOqWJza19fOTknLCBWRFguZW5jb2RlX2ludGVnZXIgQy5taW5faW50ZWdlciArIDFcbiAgaGVscCAnzqlic2tfMTAwJywgVkRYLmVuY29kZV9pbnRlZ2VyIEMubWluX2ludGVnZXJcbiAgaW5mbyAnzqlic2tfMTAxJ1xuICBoZWxwICfOqWJza18xMDInLCBWRFguZW5jb2RlIFsgMSwgMiwgMywgMTAwLCBdXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZCA9IFtcbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgLTk5OSwgICAgICAgICAgIF0sIG5yOiAxLCAgfVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgLTk5LCAgICAgICAgICAgXSwgbnI6IDIsICB9XG4gICAgeyBzazogbnVsbCwgdmR4OiBbICAtOTAsICAgICAgICAgICBdLCBucjogMywgIH1cbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgIC0xMSwgICAgICAgICAgIF0sIG5yOiA0LCAgfVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgLTEwLCAgICAgICAgICAgXSwgbnI6IDUsICB9XG4gICAgeyBzazogbnVsbCwgdmR4OiBbICAgLTksICAgICAgICAgICBdLCBucjogNiwgIH1cbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICAtOCwgICAgICAgICAgIF0sIG5yOiA3LCAgfVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgIC03LCAgICAgICAgICAgXSwgbnI6IDgsICB9XG4gICAgeyBzazogbnVsbCwgdmR4OiBbICAgLTYsICAgICAgICAgICBdLCBucjogOSwgIH1cbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICAtNSwgICAgICAgICAgIF0sIG5yOiAxMCwgfVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgIC00LCAgICAgICAgICAgXSwgbnI6IDExLCB9XG4gICAgeyBzazogbnVsbCwgdmR4OiBbICAgLTMsICAgICAgICAgICBdLCBucjogMTIsIH1cbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICAtMiwgICAgICAgICAgIF0sIG5yOiAxMywgfVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgIC0xLCAgICAgICAgICAgXSwgbnI6IDE0LCB9ICMgISEhXG4gICAgeyBzazogbnVsbCwgdmR4OiBbICAgKzAsICAtMjAsICAgICBdLCBucjogMTUsIH0gIyAhISFcbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICArMCwgICAgICAgICAgIF0sIG5yOiAxNiwgfSAjICEhIVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgICswLCAgKzIwLCAgICAgXSwgbnI6IDE3LCB9XG4gICAgeyBzazogbnVsbCwgdmR4OiBbICAgKzksICAgICAgICAgICBdLCBucjogMTgsIH0gIyAhISFcbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICsxMCwgICAtMywgICAgIF0sIG5yOiAxOSwgfSAjICEhIVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgKzEwLCAgIC0yLCAgICAgXSwgbnI6IDIwLCB9ICMgISEhXG4gICAgeyBzazogbnVsbCwgdmR4OiBbICArMTAsICAgLTEsICAgICBdLCBucjogMjEsIH0gIyAhISFcbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICsxMCwgICAgICAgICAgIF0sIG5yOiAyMiwgfSAjICEhIVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgKzEwLCAgICswLCAgICAgXSwgbnI6IDIzLCB9XG4gICAgeyBzazogbnVsbCwgdmR4OiBbICArMTAsICAgKzEsICAgICBdLCBucjogMjQsIH1cbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICsxMCwgICsxMCwgLTEsIF0sIG5yOiAyNSwgfSAjICEhIVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgKzEwLCAgKzEwLCAgICAgXSwgbnI6IDI2LCB9ICMgISEhXG4gICAgeyBzazogbnVsbCwgdmR4OiBbICArMTAsICArMjAsICAgICBdLCBucjogMjcsIH1cbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgICsyMCwgICAgICAgICAgIF0sIG5yOiAyOCwgfVxuICAgIHsgc2s6IG51bGwsIHZkeDogWyAgKzIwLCAgKzEwLCAgICAgXSwgbnI6IDI5LCB9XG4gICAgeyBzazogbnVsbCwgdmR4OiBbICArOTAsICAgICAgICAgICBdLCBucjogMzAsIH1cbiAgICB7IHNrOiBudWxsLCB2ZHg6IFsgKzkwMCwgICAgICAgICAgIF0sIG5yOiAzMSwgfVxuICAgIF1cbiAgZm9yIGUgaW4gZFxuICAgIHRyeSBlLnNrID0gVkRYLmVuY29kZSBlLnZkeCBjYXRjaCBlcnJvclxuICAgICAgd2FybiAnzqlic2tfMTAwJywgZSwgZXJyb3IubWVzc2FnZVxuICAgICAgZS5zayA9ICc/Pz8nXG4gICAgZS5zayArPSAnMDAwMDAwMDAwMDAwMDAwMDAwMCdcbiAgZC5zb3J0ICggYSwgYiApIC0+XG4gICAgcmV0dXJuIC0xIGlmIGEuc2sgPCBiLnNrXG4gICAgcmV0dXJuICsxIGlmIGEuc2sgPiBiLnNrXG4gICAgcmV0dXJuIDBcbiAgZGVidWcgJ86pYnNrXzEwMycsIGUgZm9yIGUgaW4gZFxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGRlbW9fYmluYXJ5X2xleGljb2dyYXBoaWNfc29ydGtleSgpXG4gIGRlbW9fY2hhdGdwdF9zb2x1dGlvbigpXG4gIGRlbW9faG9sbGVyaXRoX3ZkeF9zb3J0a2V5KClcbiAgIyBlY2hvIGZcIi0je259OjA+Mi4wZjtcIiBmb3IgbiBpbiBbIDk5IC4uIDAgXVxuICAjIGVjaG8gZlwiKyN7bn06MD4yLjBmO1wiIGZvciBuIGluIFsgMCAuLiA5OSBdXG4gIHJldHVybiBudWxsXG4iXX0=
