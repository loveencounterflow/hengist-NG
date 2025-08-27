(async function() {
  'use strict';
  var GUY, SFMODULES, alert, blue, bold, debug, demo_binary_lexicographic_sortkey, demo_chatgpt_solution, echo, f, gold, green, grey, help, hide, info, inspect, lime, log, plain, praise, red, reverse, rpr, set_getter, timeit, urge, warn, whisper, white;

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
  demo_chatgpt_solution = function() {
    
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
    var R, chr, cid, i;
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
  if (module === require.main) {
    await (() => {
      demo_binary_lexicographic_sortkey();
      demo_chatgpt_solution();
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tYmluYXJ5LWxleGljb2dyYXBoaWMtc29ydGtleS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBQTtBQUFBLE1BQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsaUNBQUEsRUFBQSxxQkFBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEVBQUEsTUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsMkJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLElBUkYsRUFTRSxHQVRGLEVBVUUsSUFWRixFQVdFLE9BWEYsRUFZRSxHQVpGLENBQUEsR0FZNEIsR0FBRyxDQUFDLEdBWmhDOztFQWFBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBMUJBOzs7Ozs7Ozs7Ozs7OztFQXVDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSw2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QUssVUFBTCxFQUFpQixHQUFBLENBQUksWUFBQSxDQUFhLENBQWIsRUFBZ0IsSUFBaEIsQ0FBSixDQUFqQjtJQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUEsQ0FBSSxZQUFBLENBQWEsQ0FBYixFQUFnQixJQUFoQixDQUFKLENBQWpCO0lBQ0EsSUFBQSxDQUFLLFVBQUwsRUFBaUIsR0FBQSxDQUFJLFlBQUEsQ0FBYSxNQUFNLENBQUMsZ0JBQXBCLEVBQXNDLElBQXRDLENBQUosQ0FBakIsRUF6REY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEySkUsQ0FBQSxHQUFJO0lBQ0osS0FBVyxxQ0FBWDtNQUdFLElBQVksVUFBVSxDQUFDLElBQVgsQ0FBZ0IsQ0FBRSxHQUFBLEdBQU0sTUFBTSxDQUFDLGFBQVAsQ0FBcUIsR0FBckIsQ0FBUixDQUFoQixDQUFaOzs7QUFBQSxpQkFBQTs7TUFDQSxJQUFZLG1CQUFtQixDQUFDLElBQXBCLENBQXlCLEdBQXpCLENBQVo7QUFBQSxpQkFBQTs7TUFDQSxDQUFDLENBQUMsSUFBRixDQUFPLEdBQVA7SUFMRjtXQU1BLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUEsQ0FBSSxDQUFDLENBQUMsSUFBRixDQUFPLEVBQVAsQ0FBSixDQUFqQjtFQW5Lc0IsRUExS3hCOzs7RUFpVkEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtNQUN0QyxpQ0FBQSxDQUFBO01BQ0EscUJBQUEsQ0FBQTtBQUNBLGFBQU87SUFIK0IsQ0FBQSxJQUF4Qzs7QUFqVkEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2RlbW8tYnVpbGQtdW5pY29kZS1yYW5nZXMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgbGltZVxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxuIyB7IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuIyBHVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbiMgeyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbiMgbWtkaXJwICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ21rZGlycCdcbiMgZW52X3BhdGhzICAgICAgICAgICAgICAgICA9ICggcmVxdWlyZSAnZW52LXBhdGhzJyApLmRlZmF1bHQgJ2RlbW8tbm9kZS1zcWxpdGUnXG4jIFNRTElURSAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnNxbGl0ZSdcbiMgUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiMgeyBTUUwgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZGJheSdcbiMgeyBkZWZhdWx0OiBcXFxuIyAgIG9uX3Byb2Nlc3NfZXhpdCwgICAgICB9ID0gcmVxdWlyZSAnZXhpdC1ob29rJ1xuIyBGUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xueyBoaWRlLFxuICBzZXRfZ2V0dGVyLCAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX21hbmFnZWRfcHJvcGVydHlfdG9vbHMoKVxueyB0aW1laXQsICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2JlbmNobWFya2luZygpXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9fYmluYXJ5X2xleGljb2dyYXBoaWNfc29ydGtleSA9ID0+XG4gICMjIyBpbnNwaXJlZCBieSAmIHRoeCB0byBodHRwczovL3N0YXRlbHkuY2xvdWQvYmxvZy9lbmNvZGluZy1zb3J0YWJsZS1iaW5hcnktZGF0YWJhc2Uta2V5cy8gIyMjXG4gIGQgPVxuICAgIEswMDA6ICAgICAgICdbIC05OTksICAgICAgICAgICBdIDEnXG4gICAgTDAwOiAgICAgICAgJ1sgIC05OSwgICAgICAgICAgIF0gMidcbiAgICBMMDk6ICAgICAgICAnWyAgLTkwLCAgICAgICAgICAgXSAzJ1xuICAgIEw4ODogICAgICAgICdbICAtMTEsICAgICAgICAgICBdIDQnXG4gICAgTDg5OiAgICAgICAgJ1sgIC0xMCwgICAgICAgICAgIF0gNSdcbiAgICBNMDogICAgICAgICAnWyAgIC05LCAgICAgICAgICAgXSA2J1xuICAgIE0xOiAgICAgICAgICdbICAgLTgsICAgICAgICAgICBdIDcnXG4gICAgTTI6ICAgICAgICAgJ1sgICAtNywgICAgICAgICAgIF0gOCdcbiAgICBNMzogICAgICAgICAnWyAgIC02LCAgICAgICAgICAgXSA5J1xuICAgIE00OiAgICAgICAgICdbICAgLTUsICAgICAgICAgICBdIDEwJ1xuICAgIE01OiAgICAgICAgICdbICAgLTQsICAgICAgICAgICBdIDExJ1xuICAgIE02OiAgICAgICAgICdbICAgLTMsICAgICAgICAgICBdIDEyJ1xuICAgIE03OiAgICAgICAgICdbICAgLTIsICAgICAgICAgICBdIDEzJ1xuICAgIE04OiAgICAgICAgICdbICAgLTEsICAgICAgICAgICBdIDE0J1xuICAgIE5MMjA6ICAgICAgICdbICAgKzAsICAtMjAsICAgICBdIDE1J1xuICAgIE46ICAgICAgICAgICdbICAgKzAsICAgICAgICAgICBdIDE2J1xuICAgIE5QMjA6ICAgICAgICdbICAgKzAsICArMjAsICAgICBdIDE3J1xuICAgIE85OiAgICAgICAgICdbICAgKzksICAgICAgICAgICBdIDE4J1xuICAgIFAxME02OiAgICAgICdbICArMTAsICAgLTMsICAgICBdIDE5J1xuICAgIFAxME03OiAgICAgICdbICArMTAsICAgLTIsICAgICBdIDIwJ1xuICAgIFAxME04OiAgICAgICdbICArMTAsICAgLTEsICAgICBdIDIxJ1xuICAgIFAxMDogICAgICAgICdbICArMTAsICAgICAgICAgICBdIDIyJ1xuICAgIFAxME46ICAgICAgICdbICArMTAsICAgKzAsICAgICBdIDIzJ1xuICAgIFAxME8xOiAgICAgICdbICArMTAsICAgKzEsICAgICBdIDI0J1xuICAgIFAxMFAxME04OiAgICdbICArMTAsICArMTAsIC0xLCBdIDI1J1xuICAgIFAxMFAxMDogICAgICdbICArMTAsICArMTAsICAgICBdIDI2J1xuICAgIFAxMFAyMDogICAgICdbICArMTAsICArMjAsICAgICBdIDI3J1xuICAgIFAyMDogICAgICAgICdbICArMjAsICAgICAgICAgICBdIDI4J1xuICAgIFAyMFAxMDogICAgICdbICArMjAsICArMTAsICAgICBdIDI5J1xuICAgIFA5MDogICAgICAgICdbICArOTAsICAgICAgICAgICBdIDMwJ1xuICAgIFE5MDA6ICAgICAgICdbICs5MDAsICAgICAgICAgICBdIDMxJ1xuXG4gICAgIyBpZGVudGljYWwgYi9jIG9mIHBhZGRpbmc6XG4gICAgIyBQMTA6ICAgICAgICAnWyAgKzEwLCAgICAgICBdIDI0J1xuICAgICMgUDEwTjogICAgICAnWyAgKzEwLCAgICswLCBdIDI1J1xuXG4gIG1heF9sZW5ndGggID0gIE1hdGgubWF4ICggay5sZW5ndGggZm9yIGsgaW4gT2JqZWN0LmtleXMgZCApLi4uXG4gICMjIyB0cmFpbGVyIGNhbiBiZSBvZiBmaXhlZCBsZW5ndGggc2luY2UgdGhlcmUgaXMgYW4gdXBwZXIgbGltaXQgdG8gZGlnaXQgcG9zaXRpb25zIGdpdmVuIGJ5XG4gIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIGFzIHJlcHJlc2VudGVkIGluIHRoZSBiYXNlIG9mIGNob2ljZSAoaGVyZSAxMCkgdGltZXMgdGhlIG1heGltdW0gbnVtYmVyIG9mXG4gIGRpbWVuc2lvbnMgb2YgdGhlIFZOUjogIyMjXG4gIHRyYWlsZXIgICAgID0gJ05OTk5OTk5OTk5OJ1xuICBkZWJ1ZyAnzqlic2tfX18xJywgeyBtYXhfbGVuZ3RoLCB9XG4gICMgZDEgPSBPYmplY3QuZnJvbUVudHJpZXMgKCBbICggay5wYWRFbmQgbWF4X2xlbmd0aCwgJ04nICksIHYsIF0gZm9yIGssIHYgb2YgZCApXG4gICMgZDEgPSBPYmplY3QuZnJvbUVudHJpZXMgKCBbICggayArIHRyYWlsZXIgKSwgdiwgXSBmb3IgaywgdiBvZiBkIClcbiAga2V5cyAgICAgICAgPSAoIGsgZm9yIFsgc2ssIGssIF0gaW4gKCBbIGsgKyB0cmFpbGVyLCBrLCBdIGZvciBrIG9mIGQgKS5zb3J0KCkgKVxuICBmb3Iga2V5IGluIGtleXNcbiAgICBrID0gbGltZSByZXZlcnNlIGZcIiAje2tleX06PjEwYzsgXCJcbiAgICB2ID0gZ29sZCByZXZlcnNlIGZcIiAje2RbIGtleSBdfTo8MzBjOyBcIlxuICAgIHEgPSBrZXkucmVwbGFjZSAvKFtBLVpdKVswLTldKi9nLCAnJDEnXG4gICAgcSA9IHEubGVuZ3RoXG4gICAgaGVscCAnzqlic2tfX18yJywgXCIje2t9I3t2fSAje3F9XCJcbiAgcmVmMCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIGYgPSAoIG4gKSAtPlxuICAgIHJldHVybiBbICAwLCAnTicsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIGlmIG4gaXMgMFxuICAgIHJldHVybiBbICsxLCAoICAgICAgICAgICAgbi50b1N0cmluZyAzMiApLnRvTG93ZXJDYXNlKCksICBdIGlmIG4gPiAwXG4gICAgcmV0dXJuIFsgLTEsICggKCByZWYwICsgbiApLnRvU3RyaW5nIDMyICkudG9Mb3dlckNhc2UoKS5yZXBsYWNlIC9eN1YqL2ksICcnLCAgXVxuICAgICMgMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTFcbiAgTiA9ICdOJy5jb2RlUG9pbnRBdCAwXG4gIGcgPSAoIG4gKSAtPlxuICAgIFsgc2lnbiwgbnJwciwgXSA9IGYgblxuICAgIHJldHVybiBucnByIGlmIHNpZ24gaXMgMFxuICAgIHJldHVybiAoIFN0cmluZy5mcm9tQ29kZVBvaW50IE4gKyBucnByLmxlbmd0aCApICsgbnJwciBpZiBzaWduIGlzICsxXG4gICAgcmV0dXJuICggU3RyaW5nLmZyb21Db2RlUG9pbnQgTiAtIG5ycHIubGVuZ3RoICkgKyBucnByXG4gIGluZm8gJ86pYnNrX19fMycsICcwICAgICAnLCAoIGYgMCAgICAgICksICggZyAwICAgICAgKVxuICBpbmZvICfOqWJza19fXzQnLCAnMSAgICAgJywgKCBmIDEgICAgICApLCAoIGcgMSAgICAgIClcbiAgaW5mbyAnzqlic2tfX181JywgJzIgICAgICcsICggZiAyICAgICAgKSwgKCBnIDIgICAgICApXG4gIGluZm8gJ86pYnNrX19fNicsICczMSAgICAnLCAoIGYgMzEgICAgICksICggZyAzMSAgICAgKVxuICBpbmZvICfOqWJza19fXzcnLCAnMzIgICAgJywgKCBmIDMyICAgICApLCAoIGcgMzIgICAgIClcbiAgaW5mbyAnzqlic2tfX184JywgJzMzICAgICcsICggZiAzMyAgICAgKSwgKCBnIDMzICAgICApXG4gIGluZm8gJ86pYnNrX19fOScsICctMSAgICAnLCAoIGYgLTEgICAgICksICggZyAtMSAgICAgKVxuICBpbmZvICfOqWJza19fMTAnLCAnLTMxICAgJywgKCBmIC0zMSAgICApLCAoIGcgLTMxICAgIClcbiAgaW5mbyAnzqlic2tfXzExJywgJy0zMiAgICcsICggZiAtMzIgICAgKSwgKCBnIC0zMiAgICApXG4gIGluZm8gJ86pYnNrX18xMicsICctMzI3NjcnLCAoIGYgLTMyNzY3ICksICggZyAtMzI3NjcgKVxuICBpbmZvICfOqWJza19fMTMnLCAnLTMyNzY4JywgKCBmIC0zMjc2OCApLCAoIGcgLTMyNzY4IClcbiAgaW5mbyAnzqlic2tfXzE0JywgJy0zMjc2OScsICggZiAtMzI3NjkgKSwgKCBnIC0zMjc2OSApXG5cbiAgIyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUi50b1N0cmluZyAzMlxuICAjICc3dnZ2dnZ2dnZ2didcblxuICAjIyNcblxuICAjIFZlY3RvcmlhbCBOdW1iZXJzIChWTlJzKSB0byBUcmFuc2Zvcm0gVGV4dCBhbmQgS2VlcCBJdFxuXG5cbiAgWCBbIDEwLCAzMiwgXSBgVGhlIHJlYWRpbmcgb2Yg5qiCIGlzIDxweS95dWU0LyBmb3IgPGdsb3NzL211c2ljLyBvciA8cHkvbGU0LyBtZWFuaW5nIDxnbG9zcy9qb3kvLmBcbiAgXyBbIDEwLCAzMiwgIDEsICAgIF0gYFRoZSByZWFkaW5nIG9mIOaogiBpcyBgXG4gIFggWyAxMCwgMzIsICAyLCAgICBdIGA8cHkvYFxuICBYIFsgMTAsIDMyLCAgMywgICAgXSBgeXVlNGBcbiAgXyBbIDEwLCAzMiwgIDMsIDEsIF0gYDxzcGFuIGNsYXNzPXBpbnlpbj55dcOoPC9zcGFuPmBcbiAgWCBbIDEwLCAzMiwgIDQsICAgIF0gYC9gXG4gIF8gWyAxMCwgMzIsICA1LCAgICBdIGAgZm9yIGBcbiAgWCBbIDEwLCAzMiwgIDYsICAgIF0gYDxnbG9zcy9gXG4gIFggWyAxMCwgMzIsICA3LCAgICBdIGBtdXNpY2BcbiAgXyBbIDEwLCAzMiwgIDcsIDEsIF0gYDxzcGFuIGNsYXNzPWdsb3NzPm11c2ljPC9zcGFuPmBcbiAgWCBbIDEwLCAzMiwgIDgsICAgIF0gYC9gXG4gIF8gWyAxMCwgMzIsICA5LCAgICBdIGAgb3IgYFxuICBYIFsgMTAsIDMyLCAxMCwgICAgXSBgPHB5L2BcbiAgWCBbIDEwLCAzMiwgMTEsICAgIF0gYGxlNGBcbiAgXyBbIDEwLCAzMiwgMTEsIDEsIF0gYDxzcGFuIGNsYXNzPXBpbnlpbj5sw6g8L3NwYW4+YFxuICBfIFsgMTAsIDMyLCAxMiwgICAgXSBgIG1lYW5pbmcgYFxuICBYIFsgMTAsIDMyLCAxMywgICAgXSBgPGdsb3NzL2BcbiAgWCBbIDEwLCAzMiwgMTQsICAgIF0gYGpveWBcbiAgXyBbIDEwLCAzMiwgMTQsIDEsIF0gYDxzcGFuIGNsYXNzPWdsb3NzPmpveTwvc3Bhbj5gXG4gIFggWyAxMCwgMzIsIDE1LCAgICBdIGAvYFxuICBfIFsgMTAsIDMyLCAxNiwgICAgXSBgLlxcbmBcblxuICBOT1RFIGNvdWxkJ3ZlIHJhdGhlciBzdXJyb3VuZGVkIGdsb3NzZXM6XG5cbiAgWCBbIDEwLCAzMiwgMTMsICAgIF0gYDxnbG9zcy9gXG4gIF8gWyAxMCwgMzIsIDE0LCAtMSxdIGA8c3BhbiBjbGFzcz1nbG9zcz5gXG4gIF8gWyAxMCwgMzIsIDE0LCAgICBdIGBqb3lgXG4gIF8gWyAxMCwgMzIsIDE0LCAxLCBdIGA8L3NwYW4+YFxuICBYIFsgMTAsIDMyLCAxNSwgICAgXSBgL2BcblxuICAjIyNcblxuXG4gIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19jaGF0Z3B0X3NvbHV0aW9uID0gLT5cbiAgYGBgXG4gIGZ1bmN0aW9uIGVuY29kZUJpZ0ludChudW0sIGFscGhhYmV0KSB7XG4gICAgaWYgKHR5cGVvZiBudW0gPT09IFwibnVtYmVyXCIpIG51bSA9IEJpZ0ludChudW0pO1xuICAgIGlmIChudW0gPCAwbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJPbmx5IG5vbm5lZ2F0aXZlIGludGVnZXJzIHN1cHBvcnRlZFwiKTtcbiAgICBpZiAobnVtID09PSAwbikgcmV0dXJuIGFscGhhYmV0WzBdO1xuXG4gICAgY29uc3QgYmFzZSA9IEJpZ0ludChhbHBoYWJldC5sZW5ndGgpO1xuICAgIGxldCByZXN1bHQgPSBcIlwiO1xuXG4gICAgd2hpbGUgKG51bSA+IDBuKSB7XG4gICAgICBjb25zdCByZW0gPSBudW0gJSBiYXNlO1xuICAgICAgcmVzdWx0ID0gYWxwaGFiZXRbTnVtYmVyKHJlbSldICsgcmVzdWx0O1xuICAgICAgbnVtID0gbnVtIC8gYmFzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlQmlnSW50KHN0ciwgYWxwaGFiZXQpIHtcbiAgICBjb25zdCBiYXNlID0gQmlnSW50KGFscGhhYmV0Lmxlbmd0aCk7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcChhbHBoYWJldC5zcGxpdChcIlwiKS5tYXAoKGNoLCBpKSA9PiBbY2gsIEJpZ0ludChpKV0pKTtcblxuICAgIGxldCBudW0gPSAwbjtcbiAgICBmb3IgKGNvbnN0IGNoIG9mIHN0cikge1xuICAgICAgY29uc3QgdmFsID0gbWFwLmdldChjaCk7XG4gICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjaGFyYWN0ZXI6ICR7Y2h9YCk7XG4gICAgICBudW0gPSBudW0gKiBiYXNlICsgdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBudW07XG4gIH1cbiAgYGBgXG4gIHVyZ2UgJ86pYnNrX18xNScsIGVuY29kZUJpZ0ludCAxMjM0NTY3OCwgJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6J1xuICAjIHVyZ2UgJ86pYnNrX18xNicsIHJwciBlbmNvZGVCaWdJbnQgMTAwbiwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXrCqsK1wrrDgMOBw4LDg8OEw4XDhsOHw4jDicOKw4vDjMONw47Dj8OQw5HDksOTw5TDlcOWw5jDmcOaw5vDnMOdw57Dn8Ogw6HDosOjw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDuMO5w7rDu8O8w73DvsO/xIDEgcSCxIPEhMSFxIbEh8SIxInEisSLxIzEjcSOxI/EkMSRxJLEk8SUxJXElsSXxJjEmcSaxJvEnMSdxJ7En8SgxKHEosSjxKTEpcSmxKfEqMSpxKrEq8SsxK3ErsSvxLDEscSyxLPEtMS1xLbEt8S4xLnEusS7xLzEvcS+xL/FgMWBxYLFg8WExYXFhsWHxYjFicWKxYvFjMWNxY7Fj8WQxZHFksWTxZTFlcWWxZfFmMWZxZrFm8WcxZ3FnsWfxaDFocWixaPFpMWlxabFp8WoxanFqsWrxazFrcWuxa/FsMWxxbLFs8W0xbXFtsW3xbjFucW6xbvFvMW9xb7Fv8aAxoHGgsaDxoTGhcaGxofGiMaJxorGi8aMxo3GjsaPxpDGkcaSxpPGlMaVxpbGl8aYxpnGmsabxpzGncaexp/GoMahxqLGo8akxqXGpsanxqjGqcaqxqvGrMatxq7Gr8awxrHGssazxrTGtca2xrfGuMa5xrrGu8a8xr3Gvsa/x4DHgceCx4PHhMeFx4bHh8eIx4nHiseLx4zHjceOx4/HkMeRx5LHk8eUx5XHlseXx5jHmceax5vHnMedx57Hn8egx6HHosejx6THpcemx6fHqMepx6rHq8esx63Hrsevx7DHsceyx7PHtMe1x7bHt8e4x7nHuse7x7zHvce+x7/IgMiByILIg8iEyIXIhsiHyIjIiciKyIvIjMiNyI7Ij8iQyJHIksiTyJTIlciWyJfImMiZyJrIm8icyJ3InsifyKDIociiyKPIpMilyKbIp8ioyKnIqsiryKzIrciuyK/IsMixyLLIs8i0yLXItsi3yLjIuci6yLvIvMi9yL7Iv8mAyYHJgsmDyYTJhcmGyYfJiMmJyYrJi8mMyY3JjsmPyZDJkcmSyZPJlMmVyZbJl8mYyZnJmsmbyZzJncmeyZ/JoMmhyaLJo8mkyaXJpsmnyajJqcmqyavJrMmtya7Jr8mwybHJssmzybTJtcm2ybfJuMm5ybrJu8m8yb3Jvsm/yoDKgcqCyoPKhMqFyobKh8qIyonKisqLyozKjcqOyo/KkMqRypLKk8qUypXKlsqXypjKmcqaypvKnMqdyp7Kn8qgyqHKosqjyqTKpcqmyqfKqMqpyqrKq8qsyq3KrsqvyrDKscqyyrPKtMq1yrbKt8q4yrnKusq7yrzKvcq+yr/LgMuBy4bLh8uIy4nLisuLy4zLjcuOy4/LkMuRy6DLocuiy6PLpMusy67NsM2xzbLNs820zbbNt826zbvNvM29zb/Ohs6IzonOis6Mzo7Oj86QzpHOks6TzpTOlc6WzpfOmM6ZzprOm86czp3Ons6fzqDOoc6jzqTOpc6mzqfOqM6pzqrOq86szq3Ors6vzrDOsc6yzrPOtM61zrbOt864zrnOus67zrzOvc6+zr/PgM+Bz4LPg8+Ez4XPhs+Hz4jPic+Kz4vPjM+Nz47Pj8+Qz5HPks+Tz5TPlc+Wz5fPmM+Zz5rPm8+cz53Pns+fz6DPoc+iz6PPpM+lz6bPp8+oJ1xuICAjIHVyZ2UgJ86pYnNrX18xNycsIHJwciBlbmNvZGVCaWdJbnQgMTAwMG4sICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6wqrCtcK6w4DDgcOCw4PDhMOFw4bDh8OIw4nDisOLw4zDjcOOw4/DkMORw5LDk8OUw5XDlsOYw5nDmsObw5zDncOew5/DoMOhw6LDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7jDucO6w7vDvMO9w77Dv8SAxIHEgsSDxITEhcSGxIfEiMSJxIrEi8SMxI3EjsSPxJDEkcSSxJPElMSVxJbEl8SYxJnEmsSbxJzEncSexJ/EoMShxKLEo8SkxKXEpsSnxKjEqcSqxKvErMStxK7Er8SwxLHEssSzxLTEtcS2xLfEuMS5xLrEu8S8xL3EvsS/xYDFgcWCxYPFhMWFxYbFh8WIxYnFisWLxYzFjcWOxY/FkMWRxZLFk8WUxZXFlsWXxZjFmcWaxZvFnMWdxZ7Fn8WgxaHFosWjxaTFpcWmxafFqMWpxarFq8Wsxa3FrsWvxbDFscWyxbPFtMW1xbbFt8W4xbnFusW7xbzFvcW+xb/GgMaBxoLGg8aExoXGhsaHxojGicaKxovGjMaNxo7Gj8aQxpHGksaTxpTGlcaWxpfGmMaZxprGm8acxp3GnsafxqDGocaixqPGpMalxqbGp8aoxqnGqsarxqzGrcauxq/GsMaxxrLGs8a0xrXGtsa3xrjGuca6xrvGvMa9xr7Gv8eAx4HHgseDx4THhceGx4fHiMeJx4rHi8eMx43HjsePx5DHkceSx5PHlMeVx5bHl8eYx5nHmsebx5zHnceex5/HoMehx6LHo8ekx6XHpsenx6jHqceqx6vHrMetx67Hr8ewx7HHssezx7THtce2x7fHuMe5x7rHu8e8x73Hvse/yIDIgciCyIPIhMiFyIbIh8iIyInIisiLyIzIjciOyI/IkMiRyJLIk8iUyJXIlsiXyJjImciayJvInMidyJ7In8igyKHIosijyKTIpcimyKfIqMipyKrIq8isyK3IrsivyLDIsciyyLPItMi1yLbIt8i4yLnIusi7yLzIvci+yL/JgMmByYLJg8mEyYXJhsmHyYjJicmKyYvJjMmNyY7Jj8mQyZHJksmTyZTJlcmWyZfJmMmZyZrJm8mcyZ3JnsmfyaDJocmiyaPJpMmlyabJp8moyanJqsmryazJrcmuya/JsMmxybLJs8m0ybXJtsm3ybjJucm6ybvJvMm9yb7Jv8qAyoHKgsqDyoTKhcqGyofKiMqJyorKi8qMyo3KjsqPypDKkcqSypPKlMqVypbKl8qYypnKmsqbypzKncqeyp/KoMqhyqLKo8qkyqXKpsqnyqjKqcqqyqvKrMqtyq7Kr8qwyrHKssqzyrTKtcq2yrfKuMq5yrrKu8q8yr3Kvsq/y4DLgcuGy4fLiMuJy4rLi8uMy43LjsuPy5DLkcugy6HLosujy6TLrMuuzbDNsc2yzbPNtM22zbfNus27zbzNvc2/zobOiM6JzorOjM6Ozo/OkM6RzpLOk86UzpXOls6XzpjOmc6azpvOnM6dzp7On86gzqHOo86kzqXOps6nzqjOqc6qzqvOrM6tzq7Or86wzrHOss6zzrTOtc62zrfOuM65zrrOu868zr3Ovs6/z4DPgc+Cz4PPhM+Fz4bPh8+Iz4nPis+Lz4zPjc+Oz4/PkM+Rz5LPk8+Uz5XPls+Xz5jPmc+az5vPnM+dz57Pn8+gz6HPos+jz6TPpc+mz6fPqCdcbiAgIyB1cmdlICfOqWJza19fMTgnLCBycHIgZW5jb2RlQmlnSW50IDEwMDAwbiwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXrCqsK1wrrDgMOBw4LDg8OEw4XDhsOHw4jDicOKw4vDjMONw47Dj8OQw5HDksOTw5TDlcOWw5jDmcOaw5vDnMOdw57Dn8Ogw6HDosOjw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDuMO5w7rDu8O8w73DvsO/xIDEgcSCxIPEhMSFxIbEh8SIxInEisSLxIzEjcSOxI/EkMSRxJLEk8SUxJXElsSXxJjEmcSaxJvEnMSdxJ7En8SgxKHEosSjxKTEpcSmxKfEqMSpxKrEq8SsxK3ErsSvxLDEscSyxLPEtMS1xLbEt8S4xLnEusS7xLzEvcS+xL/FgMWBxYLFg8WExYXFhsWHxYjFicWKxYvFjMWNxY7Fj8WQxZHFksWTxZTFlcWWxZfFmMWZxZrFm8WcxZ3FnsWfxaDFocWixaPFpMWlxabFp8WoxanFqsWrxazFrcWuxa/FsMWxxbLFs8W0xbXFtsW3xbjFucW6xbvFvMW9xb7Fv8aAxoHGgsaDxoTGhcaGxofGiMaJxorGi8aMxo3GjsaPxpDGkcaSxpPGlMaVxpbGl8aYxpnGmsabxpzGncaexp/GoMahxqLGo8akxqXGpsanxqjGqcaqxqvGrMatxq7Gr8awxrHGssazxrTGtca2xrfGuMa5xrrGu8a8xr3Gvsa/x4DHgceCx4PHhMeFx4bHh8eIx4nHiseLx4zHjceOx4/HkMeRx5LHk8eUx5XHlseXx5jHmceax5vHnMedx57Hn8egx6HHosejx6THpcemx6fHqMepx6rHq8esx63Hrsevx7DHsceyx7PHtMe1x7bHt8e4x7nHuse7x7zHvce+x7/IgMiByILIg8iEyIXIhsiHyIjIiciKyIvIjMiNyI7Ij8iQyJHIksiTyJTIlciWyJfImMiZyJrIm8icyJ3InsifyKDIociiyKPIpMilyKbIp8ioyKnIqsiryKzIrciuyK/IsMixyLLIs8i0yLXItsi3yLjIuci6yLvIvMi9yL7Iv8mAyYHJgsmDyYTJhcmGyYfJiMmJyYrJi8mMyY3JjsmPyZDJkcmSyZPJlMmVyZbJl8mYyZnJmsmbyZzJncmeyZ/JoMmhyaLJo8mkyaXJpsmnyajJqcmqyavJrMmtya7Jr8mwybHJssmzybTJtcm2ybfJuMm5ybrJu8m8yb3Jvsm/yoDKgcqCyoPKhMqFyobKh8qIyonKisqLyozKjcqOyo/KkMqRypLKk8qUypXKlsqXypjKmcqaypvKnMqdyp7Kn8qgyqHKosqjyqTKpcqmyqfKqMqpyqrKq8qsyq3KrsqvyrDKscqyyrPKtMq1yrbKt8q4yrnKusq7yrzKvcq+yr/LgMuBy4bLh8uIy4nLisuLy4zLjcuOy4/LkMuRy6DLocuiy6PLpMusy67NsM2xzbLNs820zbbNt826zbvNvM29zb/Ohs6IzonOis6Mzo7Oj86QzpHOks6TzpTOlc6WzpfOmM6ZzprOm86czp3Ons6fzqDOoc6jzqTOpc6mzqfOqM6pzqrOq86szq3Ors6vzrDOsc6yzrPOtM61zrbOt864zrnOus67zrzOvc6+zr/PgM+Bz4LPg8+Ez4XPhs+Hz4jPic+Kz4vPjM+Nz47Pj8+Qz5HPks+Tz5TPlc+Wz5fPmM+Zz5rPm8+cz53Pns+fz6DPoc+iz6PPpM+lz6bPp8+oJ1xuICAjIHVyZ2UgJ86pYnNrX18xOScsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDBuLCAn4oWg4oWh4oWi4oWj4oWk4oWl4oWm4oWn4oWo4oWp4oWq4oWr4oWs4oWt4oWu4oWvJ1xuICAjIHVyZ2UgJ86pYnNrX18yMCcsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDBuLCAn4pGg4pGh4pGi4pGj4pGk4pGl4pGm4pGn4pGo4pGpJ1xuICAjIHVyZ2UgJ86pYnNrX18yMScsIHJwciBlbmNvZGVCaWdJbnQgMSwgJ+KSiOKSieKSiuKSi+KSjOKSjeKSjuKSj+KSkOKSkSdcbiAgIyB1cmdlICfOqWJza19fMjInLCBycHIgZW5jb2RlQmlnSW50IDIsICfikojikonikorikovikoziko3iko7iko/ikpDikpEnXG4gICMgdXJnZSAnzqlic2tfXzIzJywgcnByIGVuY29kZUJpZ0ludCAxMCwgJ+KSiOKSieKSiuKSi+KSjOKSjeKSjuKSj+KSkOKSkSdcbiAgIyB1cmdlICfOqWJza19fMjQnLCBycHIgZW5jb2RlQmlnSW50IDEwLCAn4ryA4ryB4ryC4ryD4ryE4ryF4ryG4ryH4ryI4ryJ4ryK4ryL4ryM4ryN4ryO4ryP4ryQ4ryR4ryS4ryT4ryU4ryV4ryW4ryX4ryY4ryZ4rya4ryb4ryc4ryd4rye4ryf4ryg4ryh4ryi4ryj4ryk4ryl4rym4ryn4ryo4ryp4ryq4ryr4rys4ryt4ryu4ryv4ryw4ryx4ryy4ryz4ry04ry14ry24ry34ry44ry54ry64ry74ry84ry94ry+4ry/4r2A4r2B4r2C4r2D4r2E4r2F4r2G4r2H4r2I4r2J4r2K4r2L4r2M4r2N4r2O4r2P4r2Q4r2R4r2S4r2T4r2U4r2V4r2W4r2X4r2Y4r2Z4r2a4r2b4r2c4r2d4r2e4r2f4r2g4r2h4r2i4r2j4r2k4r2l4r2m4r2n4r2o4r2p4r2q4r2r4r2s4r2t4r2u4r2v4r2w4r2x4r2y4r2z4r204r214r224r234r244r254r264r274r284r294r2+4r2/4r6A4r6B4r6C4r6D4r6E4r6F4r6G4r6H4r6I4r6J4r6K4r6L4r6M4r6N4r6O4r6P4r6Q4r6R4r6S4r6T4r6U4r6V4r6W4r6X4r6Y4r6Z4r6a4r6b4r6c4r6d4r6e4r6f4r6g4r6h4r6i4r6j4r6k4r6l4r6m4r6n4r6o4r6p4r6q4r6r4r6s4r6t4r6u4r6v4r6w4r6x4r6y4r6z4r604r614r624r634r644r654r664r674r684r694r6+4r6/4r+A4r+B4r+C4r+D4r+E4r+F4r+G4r+H4r+I4r+J4r+K4r+L4r+M4r+N4r+O4r+P4r+Q4r+R4r+S4r+T4r+U4r+VJ1xuICAjIHVyZ2UgJ86pYnNrX18yNScsIHJwciBlbmNvZGVCaWdJbnQgMTAwLCAn4ryA4ryB4ryC4ryD4ryE4ryF4ryG4ryH4ryI4ryJ4ryK4ryL4ryM4ryN4ryO4ryP4ryQ4ryR4ryS4ryT4ryU4ryV4ryW4ryX4ryY4ryZ4rya4ryb4ryc4ryd4rye4ryf4ryg4ryh4ryi4ryj4ryk4ryl4rym4ryn4ryo4ryp4ryq4ryr4rys4ryt4ryu4ryv4ryw4ryx4ryy4ryz4ry04ry14ry24ry34ry44ry54ry64ry74ry84ry94ry+4ry/4r2A4r2B4r2C4r2D4r2E4r2F4r2G4r2H4r2I4r2J4r2K4r2L4r2M4r2N4r2O4r2P4r2Q4r2R4r2S4r2T4r2U4r2V4r2W4r2X4r2Y4r2Z4r2a4r2b4r2c4r2d4r2e4r2f4r2g4r2h4r2i4r2j4r2k4r2l4r2m4r2n4r2o4r2p4r2q4r2r4r2s4r2t4r2u4r2v4r2w4r2x4r2y4r2z4r204r214r224r234r244r254r264r274r284r294r2+4r2/4r6A4r6B4r6C4r6D4r6E4r6F4r6G4r6H4r6I4r6J4r6K4r6L4r6M4r6N4r6O4r6P4r6Q4r6R4r6S4r6T4r6U4r6V4r6W4r6X4r6Y4r6Z4r6a4r6b4r6c4r6d4r6e4r6f4r6g4r6h4r6i4r6j4r6k4r6l4r6m4r6n4r6o4r6p4r6q4r6r4r6s4r6t4r6u4r6v4r6w4r6x4r6y4r6z4r604r614r624r634r644r654r664r674r684r694r6+4r6/4r+A4r+B4r+C4r+D4r+E4r+F4r+G4r+H4r+I4r+J4r+K4r+L4r+M4r+N4r+O4r+P4r+Q4r+R4r+S4r+T4r+U4r+VJ1xuICAjIHVyZ2UgJ86pYnNrX18yNicsIHJwciBlbmNvZGVCaWdJbnQgMTAwMCwgJ+K8gOK8geK8guK8g+K8hOK8heK8huK8h+K8iOK8ieK8iuK8i+K8jOK8jeK8juK8j+K8kOK8keK8kuK8k+K8lOK8leK8luK8l+K8mOK8meK8muK8m+K8nOK8neK8nuK8n+K8oOK8oeK8ouK8o+K8pOK8peK8puK8p+K8qOK8qeK8quK8q+K8rOK8reK8ruK8r+K8sOK8seK8suK8s+K8tOK8teK8tuK8t+K8uOK8ueK8uuK8u+K8vOK8veK8vuK8v+K9gOK9geK9guK9g+K9hOK9heK9huK9h+K9iOK9ieK9iuK9i+K9jOK9jeK9juK9j+K9kOK9keK9kuK9k+K9lOK9leK9luK9l+K9mOK9meK9muK9m+K9nOK9neK9nuK9n+K9oOK9oeK9ouK9o+K9pOK9peK9puK9p+K9qOK9qeK9quK9q+K9rOK9reK9ruK9r+K9sOK9seK9suK9s+K9tOK9teK9tuK9t+K9uOK9ueK9uuK9u+K9vOK9veK9vuK9v+K+gOK+geK+guK+g+K+hOK+heK+huK+h+K+iOK+ieK+iuK+i+K+jOK+jeK+juK+j+K+kOK+keK+kuK+k+K+lOK+leK+luK+l+K+mOK+meK+muK+m+K+nOK+neK+nuK+n+K+oOK+oeK+ouK+o+K+pOK+peK+puK+p+K+qOK+qeK+quK+q+K+rOK+reK+ruK+r+K+sOK+seK+suK+s+K+tOK+teK+tuK+t+K+uOK+ueK+uuK+u+K+vOK+veK+vuK+v+K/gOK/geK/guK/g+K/hOK/heK/huK/h+K/iOK/ieK/iuK/i+K/jOK/jeK/juK/j+K/kOK/keK/kuK/k+K/lOK/lSdcbiAgIyB1cmdlICfOqWJza19fMjcnLCBycHIgZW5jb2RlQmlnSW50IDEwMDAwLCAn4ryA4ryB4ryC4ryD4ryE4ryF4ryG4ryH4ryI4ryJ4ryK4ryL4ryM4ryN4ryO4ryP4ryQ4ryR4ryS4ryT4ryU4ryV4ryW4ryX4ryY4ryZ4rya4ryb4ryc4ryd4rye4ryf4ryg4ryh4ryi4ryj4ryk4ryl4rym4ryn4ryo4ryp4ryq4ryr4rys4ryt4ryu4ryv4ryw4ryx4ryy4ryz4ry04ry14ry24ry34ry44ry54ry64ry74ry84ry94ry+4ry/4r2A4r2B4r2C4r2D4r2E4r2F4r2G4r2H4r2I4r2J4r2K4r2L4r2M4r2N4r2O4r2P4r2Q4r2R4r2S4r2T4r2U4r2V4r2W4r2X4r2Y4r2Z4r2a4r2b4r2c4r2d4r2e4r2f4r2g4r2h4r2i4r2j4r2k4r2l4r2m4r2n4r2o4r2p4r2q4r2r4r2s4r2t4r2u4r2v4r2w4r2x4r2y4r2z4r204r214r224r234r244r254r264r274r284r294r2+4r2/4r6A4r6B4r6C4r6D4r6E4r6F4r6G4r6H4r6I4r6J4r6K4r6L4r6M4r6N4r6O4r6P4r6Q4r6R4r6S4r6T4r6U4r6V4r6W4r6X4r6Y4r6Z4r6a4r6b4r6c4r6d4r6e4r6f4r6g4r6h4r6i4r6j4r6k4r6l4r6m4r6n4r6o4r6p4r6q4r6r4r6s4r6t4r6u4r6v4r6w4r6x4r6y4r6z4r604r614r624r634r644r654r664r674r684r694r6+4r6/4r+A4r+B4r+C4r+D4r+E4r+F4r+G4r+H4r+I4r+J4r+K4r+L4r+M4r+N4r+O4r+P4r+Q4r+R4r+S4r+T4r+U4r+VJ1xuICAjIHVyZ2UgJ86pYnNrX18yOCcsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDAwLCAn4ryA4ryB4ryC4ryD4ryE4ryF4ryG4ryH4ryI4ryJ4ryK4ryL4ryM4ryN4ryO4ryP4ryQ4ryR4ryS4ryT4ryU4ryV4ryW4ryX4ryY4ryZ4rya4ryb4ryc4ryd4rye4ryf4ryg4ryh4ryi4ryj4ryk4ryl4rym4ryn4ryo4ryp4ryq4ryr4rys4ryt4ryu4ryv4ryw4ryx4ryy4ryz4ry04ry14ry24ry34ry44ry54ry64ry74ry84ry94ry+4ry/4r2A4r2B4r2C4r2D4r2E4r2F4r2G4r2H4r2I4r2J4r2K4r2L4r2M4r2N4r2O4r2P4r2Q4r2R4r2S4r2T4r2U4r2V4r2W4r2X4r2Y4r2Z4r2a4r2b4r2c4r2d4r2e4r2f4r2g4r2h4r2i4r2j4r2k4r2l4r2m4r2n4r2o4r2p4r2q4r2r4r2s4r2t4r2u4r2v4r2w4r2x4r2y4r2z4r204r214r224r234r244r254r264r274r284r294r2+4r2/4r6A4r6B4r6C4r6D4r6E4r6F4r6G4r6H4r6I4r6J4r6K4r6L4r6M4r6N4r6O4r6P4r6Q4r6R4r6S4r6T4r6U4r6V4r6W4r6X4r6Y4r6Z4r6a4r6b4r6c4r6d4r6e4r6f4r6g4r6h4r6i4r6j4r6k4r6l4r6m4r6n4r6o4r6p4r6q4r6r4r6s4r6t4r6u4r6v4r6w4r6x4r6y4r6z4r604r614r624r634r644r654r664r674r684r694r6+4r6/4r+A4r+B4r+C4r+D4r+E4r+F4r+G4r+H4r+I4r+J4r+K4r+L4r+M4r+N4r+O4r+P4r+Q4r+R4r+S4r+T4r+U4r+VJ1xuICAjIHVyZ2UgJ86pYnNrX18yOScsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDAwLCAn44Ki44Kk44Km44Ko44Kq44Kr44Kt44Kv44Kx44KzJ1xuICB1cmdlICfOqWJza19fMzAnLCBycHIgZW5jb2RlQmlnSW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAnJychXCIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0AnJydcbiAgdXJnZSAnzqlic2tfXzMxJywgcnByIGVuY29kZUJpZ0ludCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgJyEjJCUmKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW11eX2BhYmMnXG4gIHVyZ2UgJ86pYnNrX18zMicsIHJwciBlbmNvZGVCaWdJbnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsICchIyQlJigpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+wqHCosKjwqTCpcKmwqfCqMKpwqrCq8Kswq7Cr8KwwrHCssKzwrTCtcK2wrfCuMK5wrrCu8K8wr3CvsK/w4DDgcOCw4PDhMOFw4bDh8OIw4nDisOLw4zDjcOOw4/DkMORw5LDk8OUw5XDlsOXw5jDmcOaw5vDnMOdw57Dn8Ogw6HDosOjw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDt8O4w7nDusO7w7zDvcO+w78nXG4gIHVyZ2UgJ86pYnNrX18zMycsIHJwciBlbmNvZGVCaWdJbnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsICchIyQlJigpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+wqHCosKjwqTCpcKmwqfCqMKpwqrCq8Kswq7Cr8KwwrHCssKzwrTCtcK2wrfCuMK5wrrCu8K8wr3CvsK/w4DDgcOCw4PDhMOFw4YnXG4gIHVyZ2UgJ86pYnNrX18zNCcsIHJwciBlbmNvZGVCaWdJbnQgMCwgJzAxJ1xuICB1cmdlICfOqWJza19fMzUnLCBycHIgZW5jb2RlQmlnSW50IDEsICcwMSdcbiAgdXJnZSAnzqlic2tfXzM2JywgcnByIGVuY29kZUJpZ0ludCAyLCAnMDEnXG4gIHVyZ2UgJ86pYnNrX18zNycsIHJwciBlbmNvZGVCaWdJbnQgMywgJzAxJ1xuICB1cmdlICfOqWJza19fMzgnLCBycHIgZW5jb2RlQmlnSW50IDcsICcwMSdcbiAgdXJnZSAnzqlic2tfXzM5JywgcnByIGVuY29kZUJpZ0ludCA4LCAnMDEnXG4gIHVyZ2UgJ86pYnNrX180MCcsIHJwciBlbmNvZGVCaWdJbnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsICcwMSdcbiAgIyArNTcgZnJlZSBjb2RlcG9pbnRzXG4gICMgIC04IHBvcyBuZWdhdGl2ZVxuICAjICAtOCBwb3MgcG9zaXRpdmVcbiAgIyAgLTEgemVyb1xuICAjIOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFxuICAjICs0MCBmb3JcbiAgIyAtMjAgbmVnYXRpdmUgc2luZ2xlLWRpZ2l0XG4gICMgLTIwIHBvc2l0aXZlIHNpbmdsZS1kaWdpdFxuICAjIDLDhsOGw4bDhsOGw4bDhlxuXG4gICMjI1xuXG5cbiAgKiBmb3IgbnVtYmVycyBgLTIwIDw9IG4gPD0gKzIwYDpcbiAgICAqIG5lZ2F0aXZlIHVuaWxpdGVyYWwgbnVtYmVycyAgICAgICAgICAgKE5VTnMpOiAgLTIwIC4uICDDj8OQw5HDksOTw5TDlcOWw5fDmMOZw5rDm8Ocw53DnsOfw6DDocOiIC4uIC0xXG4gICAgICAqIHVzZSBuZWdhdGl2ZSBpbmRleCB3aXRoIGBhdGAgaW5kZXhpbmcgYXMgaW4gYG51bi5hdCAtM2AgdG8gZ2V0IGDDoGAgZm9yIGAtM2BcbiAgICAqIHplcm8gdW5pbGl0ZXJhbCBudW1iZXIgICAgICAgICAgICAgICAgKFpVTik6ICAgIMKxMCAuLiAgw6NcbiAgICAqIHBvc2l0aXZlIHVuaWxpdGVyYWwgbnVtYmVycyAgICAgICAgICAgKFBVTnMpOiAgICsxIC4uICDDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO3IC4uICsyMFxuICAgICAgKiB1c2UgbmV4dCBzdGVwXG4gICAgKiB6ZXJvIGFuZCBwb3NpdGl2ZSB1bmlsaXRlcmFsIG51bWJlcnMgIChaUFVOcyk6ICArMCAuLiDDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7cgLi4gKzIwXG4gICAgICAqIHByZXBlbmRpbmcgWlVOIHRvIFBVTnMgZ2l2ZXMgWlBVTnMsIHVzZSBgbmAgYXMgaW5kZXggYXMgaW4gYHpwdW5bICszIF1gIG9yIGB6cHVuLmF0ICszYCB0byBnZXQgYMOlYFxuXG4gICogZm9yIG51bWJlcnMgYG4gPiArMjBgOlxuICAgICogY29udmVydCB0byBCYXNlLTEyOCB1c2luZyBhbHBoYWJldDogISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fsKhwqLCo8KkwqXCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGXG4gICAgKiBwcmVwZW5kIHBvc2l0aXZlIG1hZ25pZmllciAgICAgICAgICAgIChQTUFHKSA6ICAxIHBvc2l0aXZlIGRpZ2l0IC4uICDDuMO5w7rDu8O8w73DvsO/ICAuLiAgOCBwb3NpdGl2ZSBkaWdpdHNcblxuICAqIGZvciBudW1iZXJzIGBuIDwgLTIwYDpcbiAgICAqIGFkZCBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgIHRvIGBuYCB0byBzaGlmdCB0aGUgbnVtYmVyIGludG8gdGhlIHBvc2l0aXZlLCB0aGVuIGNvbnZlcnQgdG8gQmFzZS0xMjhcbiAgICAqIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAgaXMgYDLDhsOGw4bDhsOGw4bDhmAgaW4gQmFzZS0xMjgsIG1lYW5pbmcgdGhhdCBsZWFkaW5nIGAvXjLDhiogL2AgY2FuIGJlIGRpc2NhcmRlZFxuICAgICogcHJlcGVuZCBuZWdhdGl2ZSBtYWduaWZpZXIgICAgICAgICAgICAoTk1BRykgOiAgMSBuZWdhdGl2ZSBkaWdpdCAuLiAgw47DjcOMw4vDisOJw4jDhyAgLi4gIDggbmVnYXRpdmUgZGlnaXRzXG5cblxuICDDhyAgICA4IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiCAgICA3IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiSAgICA2IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiiAgICA1IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiyAgICA0IG5lZ2F0aXZlIGRpZ2l0c1xuICDDjCAgICAzIG5lZ2F0aXZlIGRpZ2l0c1xuICDDjSAgICAyIG5lZ2F0aXZlIGRpZ2l0c1xuICDDjiAgICAxIG5lZ2F0aXZlIGRpZ2l0c1xuICDDjyAgLTIwXG4gIMOQICAtMTlcbiAgw5EgIC0xOFxuICDDkiAgLTE3XG4gIMOTICAtMTZcbiAgw5QgIC0xNVxuICDDlSAgLTE0XG4gIMOWICAtMTNcbiAgw5cgIC0xMlxuICDDmCAgLTExXG4gIMOZICAtMTBcbiAgw5ogICAtOVxuICDDmyAgIC04XG4gIMOcICAgLTdcbiAgw50gICAtNlxuICDDniAgIC01XG4gIMOfICAgLTRcbiAgw6AgICAtM1xuICDDoSAgIC0yXG4gIMOiICAgLTEgbmVnYXRpdmUgc21hbGwgc2luZ2xlLWxldHRlciBpbmRpY2VzXG5cbiAgw6MgICDCsTAgemVyb1xuXG4gIMOkICAgKzEgcG9zaXRpdmUgc21hbGwgc2luZ2xlLWxldHRlciBpbmRpY2VzXG4gIMOlICAgKzJcbiAgw6YgICArM1xuICDDpyAgICs0XG4gIMOoICAgKzVcbiAgw6kgICArNlxuICDDqiAgICs3XG4gIMOrICAgKzhcbiAgw6wgICArOVxuICDDrSAgKzEwXG4gIMOuICArMTFcbiAgw68gICsxMlxuICDDsCAgKzEzXG4gIMOxICArMTRcbiAgw7IgICsxNVxuICDDsyAgKzE2XG4gIMO0ICArMTdcbiAgw7UgICsxOFxuICDDtiAgKzE5XG4gIMO3ICArMjBcbiAgw7ggICAgMSBwb3NpdGl2ZSBkaWdpdHNcbiAgw7kgICAgMiBwb3NpdGl2ZSBkaWdpdHNcbiAgw7ogICAgMyBwb3NpdGl2ZSBkaWdpdHNcbiAgw7sgICAgNCBwb3NpdGl2ZSBkaWdpdHNcbiAgw7wgICAgNSBwb3NpdGl2ZSBkaWdpdHNcbiAgw70gICAgNiBwb3NpdGl2ZSBkaWdpdHNcbiAgw74gICAgNyBwb3NpdGl2ZSBkaWdpdHNcbiAgw78gICAgOCBwb3NpdGl2ZSBkaWdpdHNcblxuXG4gICMjI1xuXG5cblxuICBSID0gW11cbiAgZm9yIGNpZCBpbiBbIDB4MDAyMSAuLiAweDAwZmYgXVxuICAgICMgY29udGludWUgdW5sZXNzIC9eXFxwe0x9JC92LnRlc3QgKCBjaHIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWQgKVxuICAgICMgY29udGludWUgdW5sZXNzIC9eLiQvdi50ZXN0ICggY2hyID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkIClcbiAgICBjb250aW51ZSBpZiAvXlxccHtDfSQvdi50ZXN0ICggY2hyID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkIClcbiAgICBjb250aW51ZSBpZiAvXihbJ1wiXFxcXF18XFxwe1N9KSQvdi50ZXN0IGNoclxuICAgIFIucHVzaCBjaHJcbiAgdXJnZSAnzqlic2tfXzQxJywgcnByIFIuam9pbiAnJ1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGRlbW9fYmluYXJ5X2xleGljb2dyYXBoaWNfc29ydGtleSgpXG4gIGRlbW9fY2hhdGdwdF9zb2x1dGlvbigpXG4gIHJldHVybiBudWxsXG4iXX0=
