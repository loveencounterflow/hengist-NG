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

  // Z    11  negative digit count
  // Y    10  negative digit count
  // X     9  negative digit count
  // W     8  negative digit count
  // V     7  negative digit count
  // U     6  negative digit count
  // T     5  negative digit count
  // S     4  negative digit count
  // R     3  negative digit count
  // Q     2  negative digit count
  // P   -16
  // O   -15
  // N   -14
  // M   -13
  // L   -12
  // K   -11
  // J   -10
  // I   -9
  // H   -8
  // G   -7
  // F   -6
  // E   -5
  // D   -4
  // C   -3
  // B   -2
  // A   -1
  // ^    0
  // a   +1
  // b   +2
  // c   +3
  // d   +4
  // e   +5
  // f   +6
  // g   +7
  // h   +8
  // i   +9
  // j   +10
  // k   +11
  // l   +12
  // m   +13
  // n   +14
  // o   +15
  // p   +16
  // q     2 positive digit count
  // r     3 positive digit count
  // s     4 positive digit count
  // t     5 positive digit count
  // u     6 positive digit count
  // v     7 positive digit count
  // w     8 positive digit count
  // x     9 positive digit count
  // y    10 positive digit count
  // z    11 positive digit count

  // z
  // {
  // |
  // }
  // ~
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
    urge('Ωbsk__16', rpr(encodeBigInt(100n, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzªµºÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁˆˇˈˉˊˋˌˍˎˏːˑˠˡˢˣˤˬˮͰͱͲͳʹͶͷͺͻͼͽͿΆΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨ')));
    urge('Ωbsk__17', rpr(encodeBigInt(1000n, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzªµºÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁˆˇˈˉˊˋˌˍˎˏːˑˠˡˢˣˤˬˮͰͱͲͳʹͶͷͺͻͼͽͿΆΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨ')));
    urge('Ωbsk__18', rpr(encodeBigInt(10000n, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzªµºÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁˆˇˈˉˊˋˌˍˎˏːˑˠˡˢˣˤˬˮͰͱͲͳʹͶͷͺͻͼͽͿΆΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨ')));
    urge('Ωbsk__19', rpr(encodeBigInt(10000n, 'ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅬⅭⅮⅯ')));
    urge('Ωbsk__20', rpr(encodeBigInt(10000n, '①②③④⑤⑥⑦⑧⑨⑩')));
    urge('Ωbsk__21', rpr(encodeBigInt(1, '⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑')));
    urge('Ωbsk__22', rpr(encodeBigInt(2, '⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑')));
    urge('Ωbsk__23', rpr(encodeBigInt(10, '⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑')));
    urge('Ωbsk__24', rpr(encodeBigInt(10, '⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕')));
    urge('Ωbsk__25', rpr(encodeBigInt(100, '⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕')));
    urge('Ωbsk__26', rpr(encodeBigInt(1000, '⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕')));
    urge('Ωbsk__27', rpr(encodeBigInt(10000, '⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕')));
    urge('Ωbsk__28', rpr(encodeBigInt(100000, '⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕')));
    urge('Ωbsk__29', rpr(encodeBigInt(100000, 'アイウエオカキクケコ')));
    urge('Ωbsk__30', rpr(encodeBigInt(Number.MAX_SAFE_INTEGER, `!"#$%&'()*+,-./0123456789:;<=>?@`)));
    urge('Ωbsk__31', rpr(encodeBigInt(Number.MAX_SAFE_INTEGER, '!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc')));
    urge('Ωbsk__32', rpr(encodeBigInt(Number.MAX_SAFE_INTEGER, '!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ')));
    urge('Ωbsk__33', rpr(encodeBigInt(Number.MAX_SAFE_INTEGER, '!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ')));
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

    * for numbers -20 <= n <= +20:
      * negative uniliteral numbers           (NUNs):  -20 ..  ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ .. -1
      * zero uniliteral number                (ZUN):    ±0 ..  ã
      * positive uniliteral numbers           (PUNs):   +1 ..  äåæçèéêëìíîïðñòóôõö÷ .. +20
      * zero and positive uniliteral numbers  (ZPUNs):  +0 .. ãäåæçèéêëìíîïðñòóôõö÷ .. +20

    * for numbers n > +20:
      * convert to Base-128 using alphabet: !#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ
      * prepend positive magnifier            (PMAG) :  1 positive digit ..  øùúûüýþÿ  ..  8 positive digits

    * for numbers n < -20:

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
    return urge('Ωbsk__34', rpr(R.join('')));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tYmluYXJ5LWxleGljb2dyYXBoaWMtc29ydGtleS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsaUNBQUEsRUFBQSxxQkFBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEVBQUEsTUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztFQUdBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsMkJBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLElBUkYsRUFTRSxHQVRGLEVBVUUsSUFWRixFQVdFLE9BWEYsRUFZRSxHQVpGLENBQUEsR0FZNEIsR0FBRyxDQUFDLEdBWmhDOztFQWFBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCLEVBMUJBOzs7Ozs7Ozs7Ozs7OztFQXVDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSw2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QUdFLElBQVksVUFBVSxDQUFDLElBQVgsQ0FBZ0IsQ0FBRSxHQUFBLEdBQU0sTUFBTSxDQUFDLGFBQVAsQ0FBcUIsR0FBckIsQ0FBUixDQUFoQixDQUFaOzs7QUFBQSxpQkFBQTs7TUFDQSxJQUFZLG1CQUFtQixDQUFDLElBQXBCLENBQXlCLEdBQXpCLENBQVo7QUFBQSxpQkFBQTs7TUFDQSxDQUFDLENBQUMsSUFBRixDQUFPLEdBQVA7SUFMRjtXQU1BLElBQUEsQ0FBSyxVQUFMLEVBQWlCLEdBQUEsQ0FBSSxDQUFDLENBQUMsSUFBRixDQUFPLEVBQVAsQ0FBSixDQUFqQjtFQXhKc0IsRUF6T3hCOzs7RUFxWUEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtNQUN0QyxpQ0FBQSxDQUFBO01BQ0EscUJBQUEsQ0FBQTtBQUNBLGFBQU87SUFIK0IsQ0FBQSxJQUF4Qzs7QUFyWUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnZGVtby1idWlsZC11bmljb2RlLXJhbmdlcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBsaW1lXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG4jIHsgbmZhIH0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL25vcm1hbGl6ZS1mdW5jdGlvbi1hcmd1bWVudHMnXG4jIEdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xuIyB7IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuIyBta2RpcnAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbWtkaXJwJ1xuIyBlbnZfcGF0aHMgICAgICAgICAgICAgICAgID0gKCByZXF1aXJlICdlbnYtcGF0aHMnICkuZGVmYXVsdCAnZGVtby1ub2RlLXNxbGl0ZSdcbiMgU1FMSVRFICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6c3FsaXRlJ1xuIyBQQVRIICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuIyB7IFNRTCB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9kYmF5J1xuIyB7IGRlZmF1bHQ6IFxcXG4jICAgb25fcHJvY2Vzc19leGl0LCAgICAgIH0gPSByZXF1aXJlICdleGl0LWhvb2snXG4jIEZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG57IGhpZGUsXG4gIHNldF9nZXR0ZXIsICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfbWFuYWdlZF9wcm9wZXJ0eV90b29scygpXG57IHRpbWVpdCwgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfYmVuY2htYXJraW5nKClcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19iaW5hcnlfbGV4aWNvZ3JhcGhpY19zb3J0a2V5ID0gPT5cbiAgIyMjIGluc3BpcmVkIGJ5ICYgdGh4IHRvIGh0dHBzOi8vc3RhdGVseS5jbG91ZC9ibG9nL2VuY29kaW5nLXNvcnRhYmxlLWJpbmFyeS1kYXRhYmFzZS1rZXlzLyAjIyNcbiAgZCA9XG4gICAgSzAwMDogICAgICAgJ1sgLTk5OSwgICAgICAgICAgIF0gMSdcbiAgICBMMDA6ICAgICAgICAnWyAgLTk5LCAgICAgICAgICAgXSAyJ1xuICAgIEwwOTogICAgICAgICdbICAtOTAsICAgICAgICAgICBdIDMnXG4gICAgTDg4OiAgICAgICAgJ1sgIC0xMSwgICAgICAgICAgIF0gNCdcbiAgICBMODk6ICAgICAgICAnWyAgLTEwLCAgICAgICAgICAgXSA1J1xuICAgIE0wOiAgICAgICAgICdbICAgLTksICAgICAgICAgICBdIDYnXG4gICAgTTE6ICAgICAgICAgJ1sgICAtOCwgICAgICAgICAgIF0gNydcbiAgICBNMjogICAgICAgICAnWyAgIC03LCAgICAgICAgICAgXSA4J1xuICAgIE0zOiAgICAgICAgICdbICAgLTYsICAgICAgICAgICBdIDknXG4gICAgTTQ6ICAgICAgICAgJ1sgICAtNSwgICAgICAgICAgIF0gMTAnXG4gICAgTTU6ICAgICAgICAgJ1sgICAtNCwgICAgICAgICAgIF0gMTEnXG4gICAgTTY6ICAgICAgICAgJ1sgICAtMywgICAgICAgICAgIF0gMTInXG4gICAgTTc6ICAgICAgICAgJ1sgICAtMiwgICAgICAgICAgIF0gMTMnXG4gICAgTTg6ICAgICAgICAgJ1sgICAtMSwgICAgICAgICAgIF0gMTQnXG4gICAgTkwyMDogICAgICAgJ1sgICArMCwgIC0yMCwgICAgIF0gMTUnXG4gICAgTjogICAgICAgICAgJ1sgICArMCwgICAgICAgICAgIF0gMTYnXG4gICAgTlAyMDogICAgICAgJ1sgICArMCwgICsyMCwgICAgIF0gMTcnXG4gICAgTzk6ICAgICAgICAgJ1sgICArOSwgICAgICAgICAgIF0gMTgnXG4gICAgUDEwTTY6ICAgICAgJ1sgICsxMCwgICAtMywgICAgIF0gMTknXG4gICAgUDEwTTc6ICAgICAgJ1sgICsxMCwgICAtMiwgICAgIF0gMjAnXG4gICAgUDEwTTg6ICAgICAgJ1sgICsxMCwgICAtMSwgICAgIF0gMjEnXG4gICAgUDEwOiAgICAgICAgJ1sgICsxMCwgICAgICAgICAgIF0gMjInXG4gICAgUDEwTjogICAgICAgJ1sgICsxMCwgICArMCwgICAgIF0gMjMnXG4gICAgUDEwTzE6ICAgICAgJ1sgICsxMCwgICArMSwgICAgIF0gMjQnXG4gICAgUDEwUDEwTTg6ICAgJ1sgICsxMCwgICsxMCwgLTEsIF0gMjUnXG4gICAgUDEwUDEwOiAgICAgJ1sgICsxMCwgICsxMCwgICAgIF0gMjYnXG4gICAgUDEwUDIwOiAgICAgJ1sgICsxMCwgICsyMCwgICAgIF0gMjcnXG4gICAgUDIwOiAgICAgICAgJ1sgICsyMCwgICAgICAgICAgIF0gMjgnXG4gICAgUDIwUDEwOiAgICAgJ1sgICsyMCwgICsxMCwgICAgIF0gMjknXG4gICAgUDkwOiAgICAgICAgJ1sgICs5MCwgICAgICAgICAgIF0gMzAnXG4gICAgUTkwMDogICAgICAgJ1sgKzkwMCwgICAgICAgICAgIF0gMzEnXG5cbiAgICAjIGlkZW50aWNhbCBiL2Mgb2YgcGFkZGluZzpcbiAgICAjIFAxMDogICAgICAgICdbICArMTAsICAgICAgIF0gMjQnXG4gICAgIyBQMTBOOiAgICAgICdbICArMTAsICAgKzAsIF0gMjUnXG5cbiAgbWF4X2xlbmd0aCAgPSAgTWF0aC5tYXggKCBrLmxlbmd0aCBmb3IgayBpbiBPYmplY3Qua2V5cyBkICkuLi5cbiAgIyMjIHRyYWlsZXIgY2FuIGJlIG9mIGZpeGVkIGxlbmd0aCBzaW5jZSB0aGVyZSBpcyBhbiB1cHBlciBsaW1pdCB0byBkaWdpdCBwb3NpdGlvbnMgZ2l2ZW4gYnlcbiAgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgYXMgcmVwcmVzZW50ZWQgaW4gdGhlIGJhc2Ugb2YgY2hvaWNlIChoZXJlIDEwKSB0aW1lcyB0aGUgbWF4aW11bSBudW1iZXIgb2ZcbiAgZGltZW5zaW9ucyBvZiB0aGUgVk5SOiAjIyNcbiAgdHJhaWxlciAgICAgPSAnTk5OTk5OTk5OTk4nXG4gIGRlYnVnICfOqWJza19fXzEnLCB7IG1heF9sZW5ndGgsIH1cbiAgIyBkMSA9IE9iamVjdC5mcm9tRW50cmllcyAoIFsgKCBrLnBhZEVuZCBtYXhfbGVuZ3RoLCAnTicgKSwgdiwgXSBmb3IgaywgdiBvZiBkIClcbiAgIyBkMSA9IE9iamVjdC5mcm9tRW50cmllcyAoIFsgKCBrICsgdHJhaWxlciApLCB2LCBdIGZvciBrLCB2IG9mIGQgKVxuICBrZXlzICAgICAgICA9ICggayBmb3IgWyBzaywgaywgXSBpbiAoIFsgayArIHRyYWlsZXIsIGssIF0gZm9yIGsgb2YgZCApLnNvcnQoKSApXG4gIGZvciBrZXkgaW4ga2V5c1xuICAgIGsgPSBsaW1lIHJldmVyc2UgZlwiICN7a2V5fTo+MTBjOyBcIlxuICAgIHYgPSBnb2xkIHJldmVyc2UgZlwiICN7ZFsga2V5IF19OjwzMGM7IFwiXG4gICAgcSA9IGtleS5yZXBsYWNlIC8oW0EtWl0pWzAtOV0qL2csICckMSdcbiAgICBxID0gcS5sZW5ndGhcbiAgICBoZWxwICfOqWJza19fXzInLCBcIiN7a30je3Z9ICN7cX1cIlxuICByZWYwID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgZiA9ICggbiApIC0+XG4gICAgcmV0dXJuIFsgIDAsICdOJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gaWYgbiBpcyAwXG4gICAgcmV0dXJuIFsgKzEsICggICAgICAgICAgICBuLnRvU3RyaW5nIDMyICkudG9Mb3dlckNhc2UoKSwgIF0gaWYgbiA+IDBcbiAgICByZXR1cm4gWyAtMSwgKCAoIHJlZjAgKyBuICkudG9TdHJpbmcgMzIgKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UgL143ViovaSwgJycsICBdXG4gICAgIyAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMVxuICBOID0gJ04nLmNvZGVQb2ludEF0IDBcbiAgZyA9ICggbiApIC0+XG4gICAgWyBzaWduLCBucnByLCBdID0gZiBuXG4gICAgcmV0dXJuIG5ycHIgaWYgc2lnbiBpcyAwXG4gICAgcmV0dXJuICggU3RyaW5nLmZyb21Db2RlUG9pbnQgTiArIG5ycHIubGVuZ3RoICkgKyBucnByIGlmIHNpZ24gaXMgKzFcbiAgICByZXR1cm4gKCBTdHJpbmcuZnJvbUNvZGVQb2ludCBOIC0gbnJwci5sZW5ndGggKSArIG5ycHJcbiAgaW5mbyAnzqlic2tfX18zJywgJzAgICAgICcsICggZiAwICAgICAgKSwgKCBnIDAgICAgICApXG4gIGluZm8gJ86pYnNrX19fNCcsICcxICAgICAnLCAoIGYgMSAgICAgICksICggZyAxICAgICAgKVxuICBpbmZvICfOqWJza19fXzUnLCAnMiAgICAgJywgKCBmIDIgICAgICApLCAoIGcgMiAgICAgIClcbiAgaW5mbyAnzqlic2tfX182JywgJzMxICAgICcsICggZiAzMSAgICAgKSwgKCBnIDMxICAgICApXG4gIGluZm8gJ86pYnNrX19fNycsICczMiAgICAnLCAoIGYgMzIgICAgICksICggZyAzMiAgICAgKVxuICBpbmZvICfOqWJza19fXzgnLCAnMzMgICAgJywgKCBmIDMzICAgICApLCAoIGcgMzMgICAgIClcbiAgaW5mbyAnzqlic2tfX185JywgJy0xICAgICcsICggZiAtMSAgICAgKSwgKCBnIC0xICAgICApXG4gIGluZm8gJ86pYnNrX18xMCcsICctMzEgICAnLCAoIGYgLTMxICAgICksICggZyAtMzEgICAgKVxuICBpbmZvICfOqWJza19fMTEnLCAnLTMyICAgJywgKCBmIC0zMiAgICApLCAoIGcgLTMyICAgIClcbiAgaW5mbyAnzqlic2tfXzEyJywgJy0zMjc2NycsICggZiAtMzI3NjcgKSwgKCBnIC0zMjc2NyApXG4gIGluZm8gJ86pYnNrX18xMycsICctMzI3NjgnLCAoIGYgLTMyNzY4ICksICggZyAtMzI3NjggKVxuICBpbmZvICfOqWJza19fMTQnLCAnLTMyNzY5JywgKCBmIC0zMjc2OSApLCAoIGcgLTMyNzY5IClcblxuICAjIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLnRvU3RyaW5nIDMyXG4gICMgJzd2dnZ2dnZ2dnZ2J1xuXG4gICMjI1xuXG4gICMgVmVjdG9yaWFsIE51bWJlcnMgKFZOUnMpIHRvIFRyYW5zZm9ybSBUZXh0IGFuZCBLZWVwIEl0XG5cblxuICBYIFsgMTAsIDMyLCBdIGBUaGUgcmVhZGluZyBvZiDmqIIgaXMgPHB5L3l1ZTQvIGZvciA8Z2xvc3MvbXVzaWMvIG9yIDxweS9sZTQvIG1lYW5pbmcgPGdsb3NzL2pveS8uYFxuICBfIFsgMTAsIDMyLCAgMSwgICAgXSBgVGhlIHJlYWRpbmcgb2Yg5qiCIGlzIGBcbiAgWCBbIDEwLCAzMiwgIDIsICAgIF0gYDxweS9gXG4gIFggWyAxMCwgMzIsICAzLCAgICBdIGB5dWU0YFxuICBfIFsgMTAsIDMyLCAgMywgMSwgXSBgPHNwYW4gY2xhc3M9cGlueWluPnl1w6g8L3NwYW4+YFxuICBYIFsgMTAsIDMyLCAgNCwgICAgXSBgL2BcbiAgXyBbIDEwLCAzMiwgIDUsICAgIF0gYCBmb3IgYFxuICBYIFsgMTAsIDMyLCAgNiwgICAgXSBgPGdsb3NzL2BcbiAgWCBbIDEwLCAzMiwgIDcsICAgIF0gYG11c2ljYFxuICBfIFsgMTAsIDMyLCAgNywgMSwgXSBgPHNwYW4gY2xhc3M9Z2xvc3M+bXVzaWM8L3NwYW4+YFxuICBYIFsgMTAsIDMyLCAgOCwgICAgXSBgL2BcbiAgXyBbIDEwLCAzMiwgIDksICAgIF0gYCBvciBgXG4gIFggWyAxMCwgMzIsIDEwLCAgICBdIGA8cHkvYFxuICBYIFsgMTAsIDMyLCAxMSwgICAgXSBgbGU0YFxuICBfIFsgMTAsIDMyLCAxMSwgMSwgXSBgPHNwYW4gY2xhc3M9cGlueWluPmzDqDwvc3Bhbj5gXG4gIF8gWyAxMCwgMzIsIDEyLCAgICBdIGAgbWVhbmluZyBgXG4gIFggWyAxMCwgMzIsIDEzLCAgICBdIGA8Z2xvc3MvYFxuICBYIFsgMTAsIDMyLCAxNCwgICAgXSBgam95YFxuICBfIFsgMTAsIDMyLCAxNCwgMSwgXSBgPHNwYW4gY2xhc3M9Z2xvc3M+am95PC9zcGFuPmBcbiAgWCBbIDEwLCAzMiwgMTUsICAgIF0gYC9gXG4gIF8gWyAxMCwgMzIsIDE2LCAgICBdIGAuXFxuYFxuXG4gIE5PVEUgY291bGQndmUgcmF0aGVyIHN1cnJvdW5kZWQgZ2xvc3NlczpcblxuICBYIFsgMTAsIDMyLCAxMywgICAgXSBgPGdsb3NzL2BcbiAgXyBbIDEwLCAzMiwgMTQsIC0xLF0gYDxzcGFuIGNsYXNzPWdsb3NzPmBcbiAgXyBbIDEwLCAzMiwgMTQsICAgIF0gYGpveWBcbiAgXyBbIDEwLCAzMiwgMTQsIDEsIF0gYDwvc3Bhbj5gXG4gIFggWyAxMCwgMzIsIDE1LCAgICBdIGAvYFxuXG4gICMjI1xuXG5cbiAgcmV0dXJuIG51bGxcblxuIyBaICAgIDExICBuZWdhdGl2ZSBkaWdpdCBjb3VudFxuIyBZICAgIDEwICBuZWdhdGl2ZSBkaWdpdCBjb3VudFxuIyBYICAgICA5ICBuZWdhdGl2ZSBkaWdpdCBjb3VudFxuIyBXICAgICA4ICBuZWdhdGl2ZSBkaWdpdCBjb3VudFxuIyBWICAgICA3ICBuZWdhdGl2ZSBkaWdpdCBjb3VudFxuIyBVICAgICA2ICBuZWdhdGl2ZSBkaWdpdCBjb3VudFxuIyBUICAgICA1ICBuZWdhdGl2ZSBkaWdpdCBjb3VudFxuIyBTICAgICA0ICBuZWdhdGl2ZSBkaWdpdCBjb3VudFxuIyBSICAgICAzICBuZWdhdGl2ZSBkaWdpdCBjb3VudFxuIyBRICAgICAyICBuZWdhdGl2ZSBkaWdpdCBjb3VudFxuIyBQICAgLTE2XG4jIE8gICAtMTVcbiMgTiAgIC0xNFxuIyBNICAgLTEzXG4jIEwgICAtMTJcbiMgSyAgIC0xMVxuIyBKICAgLTEwXG4jIEkgICAtOVxuIyBIICAgLThcbiMgRyAgIC03XG4jIEYgICAtNlxuIyBFICAgLTVcbiMgRCAgIC00XG4jIEMgICAtM1xuIyBCICAgLTJcbiMgQSAgIC0xXG4jIF4gICAgMFxuIyBhICAgKzFcbiMgYiAgICsyXG4jIGMgICArM1xuIyBkICAgKzRcbiMgZSAgICs1XG4jIGYgICArNlxuIyBnICAgKzdcbiMgaCAgICs4XG4jIGkgICArOVxuIyBqICAgKzEwXG4jIGsgICArMTFcbiMgbCAgICsxMlxuIyBtICAgKzEzXG4jIG4gICArMTRcbiMgbyAgICsxNVxuIyBwICAgKzE2XG4jIHEgICAgIDIgcG9zaXRpdmUgZGlnaXQgY291bnRcbiMgciAgICAgMyBwb3NpdGl2ZSBkaWdpdCBjb3VudFxuIyBzICAgICA0IHBvc2l0aXZlIGRpZ2l0IGNvdW50XG4jIHQgICAgIDUgcG9zaXRpdmUgZGlnaXQgY291bnRcbiMgdSAgICAgNiBwb3NpdGl2ZSBkaWdpdCBjb3VudFxuIyB2ICAgICA3IHBvc2l0aXZlIGRpZ2l0IGNvdW50XG4jIHcgICAgIDggcG9zaXRpdmUgZGlnaXQgY291bnRcbiMgeCAgICAgOSBwb3NpdGl2ZSBkaWdpdCBjb3VudFxuIyB5ICAgIDEwIHBvc2l0aXZlIGRpZ2l0IGNvdW50XG4jIHogICAgMTEgcG9zaXRpdmUgZGlnaXQgY291bnRcblxuXG5cblxuIyB6XG4jIHtcbiMgfFxuIyB9XG4jIH5cblxuXG5kZW1vX2NoYXRncHRfc29sdXRpb24gPSAtPlxuICBgYGBcbiAgZnVuY3Rpb24gZW5jb2RlQmlnSW50KG51bSwgYWxwaGFiZXQpIHtcbiAgICBpZiAodHlwZW9mIG51bSA9PT0gXCJudW1iZXJcIikgbnVtID0gQmlnSW50KG51bSk7XG4gICAgaWYgKG51bSA8IDBuKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIk9ubHkgbm9ubmVnYXRpdmUgaW50ZWdlcnMgc3VwcG9ydGVkXCIpO1xuICAgIGlmIChudW0gPT09IDBuKSByZXR1cm4gYWxwaGFiZXRbMF07XG5cbiAgICBjb25zdCBiYXNlID0gQmlnSW50KGFscGhhYmV0Lmxlbmd0aCk7XG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XG5cbiAgICB3aGlsZSAobnVtID4gMG4pIHtcbiAgICAgIGNvbnN0IHJlbSA9IG51bSAlIGJhc2U7XG4gICAgICByZXN1bHQgPSBhbHBoYWJldFtOdW1iZXIocmVtKV0gKyByZXN1bHQ7XG4gICAgICBudW0gPSBudW0gLyBiYXNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGVCaWdJbnQoc3RyLCBhbHBoYWJldCkge1xuICAgIGNvbnN0IGJhc2UgPSBCaWdJbnQoYWxwaGFiZXQubGVuZ3RoKTtcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKGFscGhhYmV0LnNwbGl0KFwiXCIpLm1hcCgoY2gsIGkpID0+IFtjaCwgQmlnSW50KGkpXSkpO1xuXG4gICAgbGV0IG51bSA9IDBuO1xuICAgIGZvciAoY29uc3QgY2ggb2Ygc3RyKSB7XG4gICAgICBjb25zdCB2YWwgPSBtYXAuZ2V0KGNoKTtcbiAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNoYXJhY3RlcjogJHtjaH1gKTtcbiAgICAgIG51bSA9IG51bSAqIGJhc2UgKyB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bTtcbiAgfVxuICBgYGBcbiAgdXJnZSAnzqlic2tfXzE1JywgZW5jb2RlQmlnSW50IDEyMzQ1Njc4LCAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonXG4gIHVyZ2UgJ86pYnNrX18xNicsIHJwciBlbmNvZGVCaWdJbnQgMTAwbiwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXrCqsK1wrrDgMOBw4LDg8OEw4XDhsOHw4jDicOKw4vDjMONw47Dj8OQw5HDksOTw5TDlcOWw5jDmcOaw5vDnMOdw57Dn8Ogw6HDosOjw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDuMO5w7rDu8O8w73DvsO/xIDEgcSCxIPEhMSFxIbEh8SIxInEisSLxIzEjcSOxI/EkMSRxJLEk8SUxJXElsSXxJjEmcSaxJvEnMSdxJ7En8SgxKHEosSjxKTEpcSmxKfEqMSpxKrEq8SsxK3ErsSvxLDEscSyxLPEtMS1xLbEt8S4xLnEusS7xLzEvcS+xL/FgMWBxYLFg8WExYXFhsWHxYjFicWKxYvFjMWNxY7Fj8WQxZHFksWTxZTFlcWWxZfFmMWZxZrFm8WcxZ3FnsWfxaDFocWixaPFpMWlxabFp8WoxanFqsWrxazFrcWuxa/FsMWxxbLFs8W0xbXFtsW3xbjFucW6xbvFvMW9xb7Fv8aAxoHGgsaDxoTGhcaGxofGiMaJxorGi8aMxo3GjsaPxpDGkcaSxpPGlMaVxpbGl8aYxpnGmsabxpzGncaexp/GoMahxqLGo8akxqXGpsanxqjGqcaqxqvGrMatxq7Gr8awxrHGssazxrTGtca2xrfGuMa5xrrGu8a8xr3Gvsa/x4DHgceCx4PHhMeFx4bHh8eIx4nHiseLx4zHjceOx4/HkMeRx5LHk8eUx5XHlseXx5jHmceax5vHnMedx57Hn8egx6HHosejx6THpcemx6fHqMepx6rHq8esx63Hrsevx7DHsceyx7PHtMe1x7bHt8e4x7nHuse7x7zHvce+x7/IgMiByILIg8iEyIXIhsiHyIjIiciKyIvIjMiNyI7Ij8iQyJHIksiTyJTIlciWyJfImMiZyJrIm8icyJ3InsifyKDIociiyKPIpMilyKbIp8ioyKnIqsiryKzIrciuyK/IsMixyLLIs8i0yLXItsi3yLjIuci6yLvIvMi9yL7Iv8mAyYHJgsmDyYTJhcmGyYfJiMmJyYrJi8mMyY3JjsmPyZDJkcmSyZPJlMmVyZbJl8mYyZnJmsmbyZzJncmeyZ/JoMmhyaLJo8mkyaXJpsmnyajJqcmqyavJrMmtya7Jr8mwybHJssmzybTJtcm2ybfJuMm5ybrJu8m8yb3Jvsm/yoDKgcqCyoPKhMqFyobKh8qIyonKisqLyozKjcqOyo/KkMqRypLKk8qUypXKlsqXypjKmcqaypvKnMqdyp7Kn8qgyqHKosqjyqTKpcqmyqfKqMqpyqrKq8qsyq3KrsqvyrDKscqyyrPKtMq1yrbKt8q4yrnKusq7yrzKvcq+yr/LgMuBy4bLh8uIy4nLisuLy4zLjcuOy4/LkMuRy6DLocuiy6PLpMusy67NsM2xzbLNs820zbbNt826zbvNvM29zb/Ohs6IzonOis6Mzo7Oj86QzpHOks6TzpTOlc6WzpfOmM6ZzprOm86czp3Ons6fzqDOoc6jzqTOpc6mzqfOqM6pzqrOq86szq3Ors6vzrDOsc6yzrPOtM61zrbOt864zrnOus67zrzOvc6+zr/PgM+Bz4LPg8+Ez4XPhs+Hz4jPic+Kz4vPjM+Nz47Pj8+Qz5HPks+Tz5TPlc+Wz5fPmM+Zz5rPm8+cz53Pns+fz6DPoc+iz6PPpM+lz6bPp8+oJ1xuICB1cmdlICfOqWJza19fMTcnLCBycHIgZW5jb2RlQmlnSW50IDEwMDBuLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5esKqwrXCusOAw4HDgsODw4TDhcOGw4fDiMOJw4rDi8OMw43DjsOPw5DDkcOSw5PDlMOVw5bDmMOZw5rDm8Ocw53DnsOfw6DDocOiw6PDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO4w7nDusO7w7zDvcO+w7/EgMSBxILEg8SExIXEhsSHxIjEicSKxIvEjMSNxI7Ej8SQxJHEksSTxJTElcSWxJfEmMSZxJrEm8ScxJ3EnsSfxKDEocSixKPEpMSlxKbEp8SoxKnEqsSrxKzErcSuxK/EsMSxxLLEs8S0xLXEtsS3xLjEucS6xLvEvMS9xL7Ev8WAxYHFgsWDxYTFhcWGxYfFiMWJxYrFi8WMxY3FjsWPxZDFkcWSxZPFlMWVxZbFl8WYxZnFmsWbxZzFncWexZ/FoMWhxaLFo8WkxaXFpsWnxajFqcWqxavFrMWtxa7Fr8WwxbHFssWzxbTFtcW2xbfFuMW5xbrFu8W8xb3FvsW/xoDGgcaCxoPGhMaFxobGh8aIxonGisaLxozGjcaOxo/GkMaRxpLGk8aUxpXGlsaXxpjGmcaaxpvGnMadxp7Gn8agxqHGosajxqTGpcamxqfGqMapxqrGq8asxq3GrsavxrDGscayxrPGtMa1xrbGt8a4xrnGusa7xrzGvca+xr/HgMeBx4LHg8eEx4XHhseHx4jHiceKx4vHjMeNx47Hj8eQx5HHkseTx5THlceWx5fHmMeZx5rHm8ecx53Hnsefx6DHoceix6PHpMelx6bHp8eox6nHqserx6zHrceux6/HsMexx7LHs8e0x7XHtse3x7jHuce6x7vHvMe9x77Hv8iAyIHIgsiDyITIhciGyIfIiMiJyIrIi8iMyI3IjsiPyJDIkciSyJPIlMiVyJbIl8iYyJnImsibyJzIncieyJ/IoMihyKLIo8ikyKXIpsinyKjIqciqyKvIrMityK7Ir8iwyLHIssizyLTItci2yLfIuMi5yLrIu8i8yL3Ivsi/yYDJgcmCyYPJhMmFyYbJh8mIyYnJismLyYzJjcmOyY/JkMmRyZLJk8mUyZXJlsmXyZjJmcmayZvJnMmdyZ7Jn8mgyaHJosmjyaTJpcmmyafJqMmpyarJq8msya3JrsmvybDJscmyybPJtMm1ybbJt8m4ybnJusm7ybzJvcm+yb/KgMqByoLKg8qEyoXKhsqHyojKicqKyovKjMqNyo7Kj8qQypHKksqTypTKlcqWypfKmMqZyprKm8qcyp3KnsqfyqDKocqiyqPKpMqlyqbKp8qoyqnKqsqryqzKrcquyq/KsMqxyrLKs8q0yrXKtsq3yrjKucq6yrvKvMq9yr7Kv8uAy4HLhsuHy4jLicuKy4vLjMuNy47Lj8uQy5HLoMuhy6LLo8uky6zLrs2wzbHNss2zzbTNts23zbrNu828zb3Nv86GzojOic6KzozOjs6PzpDOkc6SzpPOlM6VzpbOl86YzpnOms6bzpzOnc6ezp/OoM6hzqPOpM6lzqbOp86ozqnOqs6rzqzOrc6uzq/OsM6xzrLOs860zrXOts63zrjOuc66zrvOvM69zr7Ov8+Az4HPgs+Dz4TPhc+Gz4fPiM+Jz4rPi8+Mz43Pjs+Pz5DPkc+Sz5PPlM+Vz5bPl8+Yz5nPms+bz5zPnc+ez5/PoM+hz6LPo8+kz6XPps+nz6gnXG4gIHVyZ2UgJ86pYnNrX18xOCcsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDBuLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5esKqwrXCusOAw4HDgsODw4TDhcOGw4fDiMOJw4rDi8OMw43DjsOPw5DDkcOSw5PDlMOVw5bDmMOZw5rDm8Ocw53DnsOfw6DDocOiw6PDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtsO4w7nDusO7w7zDvcO+w7/EgMSBxILEg8SExIXEhsSHxIjEicSKxIvEjMSNxI7Ej8SQxJHEksSTxJTElcSWxJfEmMSZxJrEm8ScxJ3EnsSfxKDEocSixKPEpMSlxKbEp8SoxKnEqsSrxKzErcSuxK/EsMSxxLLEs8S0xLXEtsS3xLjEucS6xLvEvMS9xL7Ev8WAxYHFgsWDxYTFhcWGxYfFiMWJxYrFi8WMxY3FjsWPxZDFkcWSxZPFlMWVxZbFl8WYxZnFmsWbxZzFncWexZ/FoMWhxaLFo8WkxaXFpsWnxajFqcWqxavFrMWtxa7Fr8WwxbHFssWzxbTFtcW2xbfFuMW5xbrFu8W8xb3FvsW/xoDGgcaCxoPGhMaFxobGh8aIxonGisaLxozGjcaOxo/GkMaRxpLGk8aUxpXGlsaXxpjGmcaaxpvGnMadxp7Gn8agxqHGosajxqTGpcamxqfGqMapxqrGq8asxq3GrsavxrDGscayxrPGtMa1xrbGt8a4xrnGusa7xrzGvca+xr/HgMeBx4LHg8eEx4XHhseHx4jHiceKx4vHjMeNx47Hj8eQx5HHkseTx5THlceWx5fHmMeZx5rHm8ecx53Hnsefx6DHoceix6PHpMelx6bHp8eox6nHqserx6zHrceux6/HsMexx7LHs8e0x7XHtse3x7jHuce6x7vHvMe9x77Hv8iAyIHIgsiDyITIhciGyIfIiMiJyIrIi8iMyI3IjsiPyJDIkciSyJPIlMiVyJbIl8iYyJnImsibyJzIncieyJ/IoMihyKLIo8ikyKXIpsinyKjIqciqyKvIrMityK7Ir8iwyLHIssizyLTItci2yLfIuMi5yLrIu8i8yL3Ivsi/yYDJgcmCyYPJhMmFyYbJh8mIyYnJismLyYzJjcmOyY/JkMmRyZLJk8mUyZXJlsmXyZjJmcmayZvJnMmdyZ7Jn8mgyaHJosmjyaTJpcmmyafJqMmpyarJq8msya3JrsmvybDJscmyybPJtMm1ybbJt8m4ybnJusm7ybzJvcm+yb/KgMqByoLKg8qEyoXKhsqHyojKicqKyovKjMqNyo7Kj8qQypHKksqTypTKlcqWypfKmMqZyprKm8qcyp3KnsqfyqDKocqiyqPKpMqlyqbKp8qoyqnKqsqryqzKrcquyq/KsMqxyrLKs8q0yrXKtsq3yrjKucq6yrvKvMq9yr7Kv8uAy4HLhsuHy4jLicuKy4vLjMuNy47Lj8uQy5HLoMuhy6LLo8uky6zLrs2wzbHNss2zzbTNts23zbrNu828zb3Nv86GzojOic6KzozOjs6PzpDOkc6SzpPOlM6VzpbOl86YzpnOms6bzpzOnc6ezp/OoM6hzqPOpM6lzqbOp86ozqnOqs6rzqzOrc6uzq/OsM6xzrLOs860zrXOts63zrjOuc66zrvOvM69zr7Ov8+Az4HPgs+Dz4TPhc+Gz4fPiM+Jz4rPi8+Mz43Pjs+Pz5DPkc+Sz5PPlM+Vz5bPl8+Yz5nPms+bz5zPnc+ez5/PoM+hz6LPo8+kz6XPps+nz6gnXG4gIHVyZ2UgJ86pYnNrX18xOScsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDBuLCAn4oWg4oWh4oWi4oWj4oWk4oWl4oWm4oWn4oWo4oWp4oWq4oWr4oWs4oWt4oWu4oWvJ1xuICB1cmdlICfOqWJza19fMjAnLCBycHIgZW5jb2RlQmlnSW50IDEwMDAwbiwgJ+KRoOKRoeKRouKRo+KRpOKRpeKRpuKRp+KRqOKRqSdcbiAgdXJnZSAnzqlic2tfXzIxJywgcnByIGVuY29kZUJpZ0ludCAxLCAn4pKI4pKJ4pKK4pKL4pKM4pKN4pKO4pKP4pKQ4pKRJ1xuICB1cmdlICfOqWJza19fMjInLCBycHIgZW5jb2RlQmlnSW50IDIsICfikojikonikorikovikoziko3iko7iko/ikpDikpEnXG4gIHVyZ2UgJ86pYnNrX18yMycsIHJwciBlbmNvZGVCaWdJbnQgMTAsICfikojikonikorikovikoziko3iko7iko/ikpDikpEnXG4gIHVyZ2UgJ86pYnNrX18yNCcsIHJwciBlbmNvZGVCaWdJbnQgMTAsICfivIDivIHivILivIPivITivIXivIbivIfivIjivInivIrivIvivIzivI3ivI7ivI/ivJDivJHivJLivJPivJTivJXivJbivJfivJjivJnivJrivJvivJzivJ3ivJ7ivJ/ivKDivKHivKLivKPivKTivKXivKbivKfivKjivKnivKrivKvivKzivK3ivK7ivK/ivLDivLHivLLivLPivLTivLXivLbivLfivLjivLnivLrivLvivLzivL3ivL7ivL/ivYDivYHivYLivYPivYTivYXivYbivYfivYjivYnivYrivYvivYzivY3ivY7ivY/ivZDivZHivZLivZPivZTivZXivZbivZfivZjivZnivZrivZvivZzivZ3ivZ7ivZ/ivaDivaHivaLivaPivaTivaXivabivafivajivanivarivavivaziva3iva7iva/ivbDivbHivbLivbPivbTivbXivbbivbfivbjivbnivbrivbvivbzivb3ivb7ivb/ivoDivoHivoLivoPivoTivoXivobivofivojivonivorivovivozivo3ivo7ivo/ivpDivpHivpLivpPivpTivpXivpbivpfivpjivpnivprivpvivpzivp3ivp7ivp/ivqDivqHivqLivqPivqTivqXivqbivqfivqjivqnivqrivqvivqzivq3ivq7ivq/ivrDivrHivrLivrPivrTivrXivrbivrfivrjivrnivrrivrvivrzivr3ivr7ivr/iv4Div4Hiv4Liv4Piv4Tiv4Xiv4biv4fiv4jiv4niv4riv4viv4ziv43iv47iv4/iv5Div5Hiv5Liv5Piv5Tiv5UnXG4gIHVyZ2UgJ86pYnNrX18yNScsIHJwciBlbmNvZGVCaWdJbnQgMTAwLCAn4ryA4ryB4ryC4ryD4ryE4ryF4ryG4ryH4ryI4ryJ4ryK4ryL4ryM4ryN4ryO4ryP4ryQ4ryR4ryS4ryT4ryU4ryV4ryW4ryX4ryY4ryZ4rya4ryb4ryc4ryd4rye4ryf4ryg4ryh4ryi4ryj4ryk4ryl4rym4ryn4ryo4ryp4ryq4ryr4rys4ryt4ryu4ryv4ryw4ryx4ryy4ryz4ry04ry14ry24ry34ry44ry54ry64ry74ry84ry94ry+4ry/4r2A4r2B4r2C4r2D4r2E4r2F4r2G4r2H4r2I4r2J4r2K4r2L4r2M4r2N4r2O4r2P4r2Q4r2R4r2S4r2T4r2U4r2V4r2W4r2X4r2Y4r2Z4r2a4r2b4r2c4r2d4r2e4r2f4r2g4r2h4r2i4r2j4r2k4r2l4r2m4r2n4r2o4r2p4r2q4r2r4r2s4r2t4r2u4r2v4r2w4r2x4r2y4r2z4r204r214r224r234r244r254r264r274r284r294r2+4r2/4r6A4r6B4r6C4r6D4r6E4r6F4r6G4r6H4r6I4r6J4r6K4r6L4r6M4r6N4r6O4r6P4r6Q4r6R4r6S4r6T4r6U4r6V4r6W4r6X4r6Y4r6Z4r6a4r6b4r6c4r6d4r6e4r6f4r6g4r6h4r6i4r6j4r6k4r6l4r6m4r6n4r6o4r6p4r6q4r6r4r6s4r6t4r6u4r6v4r6w4r6x4r6y4r6z4r604r614r624r634r644r654r664r674r684r694r6+4r6/4r+A4r+B4r+C4r+D4r+E4r+F4r+G4r+H4r+I4r+J4r+K4r+L4r+M4r+N4r+O4r+P4r+Q4r+R4r+S4r+T4r+U4r+VJ1xuICB1cmdlICfOqWJza19fMjYnLCBycHIgZW5jb2RlQmlnSW50IDEwMDAsICfivIDivIHivILivIPivITivIXivIbivIfivIjivInivIrivIvivIzivI3ivI7ivI/ivJDivJHivJLivJPivJTivJXivJbivJfivJjivJnivJrivJvivJzivJ3ivJ7ivJ/ivKDivKHivKLivKPivKTivKXivKbivKfivKjivKnivKrivKvivKzivK3ivK7ivK/ivLDivLHivLLivLPivLTivLXivLbivLfivLjivLnivLrivLvivLzivL3ivL7ivL/ivYDivYHivYLivYPivYTivYXivYbivYfivYjivYnivYrivYvivYzivY3ivY7ivY/ivZDivZHivZLivZPivZTivZXivZbivZfivZjivZnivZrivZvivZzivZ3ivZ7ivZ/ivaDivaHivaLivaPivaTivaXivabivafivajivanivarivavivaziva3iva7iva/ivbDivbHivbLivbPivbTivbXivbbivbfivbjivbnivbrivbvivbzivb3ivb7ivb/ivoDivoHivoLivoPivoTivoXivobivofivojivonivorivovivozivo3ivo7ivo/ivpDivpHivpLivpPivpTivpXivpbivpfivpjivpnivprivpvivpzivp3ivp7ivp/ivqDivqHivqLivqPivqTivqXivqbivqfivqjivqnivqrivqvivqzivq3ivq7ivq/ivrDivrHivrLivrPivrTivrXivrbivrfivrjivrnivrrivrvivrzivr3ivr7ivr/iv4Div4Hiv4Liv4Piv4Tiv4Xiv4biv4fiv4jiv4niv4riv4viv4ziv43iv47iv4/iv5Div5Hiv5Liv5Piv5Tiv5UnXG4gIHVyZ2UgJ86pYnNrX18yNycsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDAsICfivIDivIHivILivIPivITivIXivIbivIfivIjivInivIrivIvivIzivI3ivI7ivI/ivJDivJHivJLivJPivJTivJXivJbivJfivJjivJnivJrivJvivJzivJ3ivJ7ivJ/ivKDivKHivKLivKPivKTivKXivKbivKfivKjivKnivKrivKvivKzivK3ivK7ivK/ivLDivLHivLLivLPivLTivLXivLbivLfivLjivLnivLrivLvivLzivL3ivL7ivL/ivYDivYHivYLivYPivYTivYXivYbivYfivYjivYnivYrivYvivYzivY3ivY7ivY/ivZDivZHivZLivZPivZTivZXivZbivZfivZjivZnivZrivZvivZzivZ3ivZ7ivZ/ivaDivaHivaLivaPivaTivaXivabivafivajivanivarivavivaziva3iva7iva/ivbDivbHivbLivbPivbTivbXivbbivbfivbjivbnivbrivbvivbzivb3ivb7ivb/ivoDivoHivoLivoPivoTivoXivobivofivojivonivorivovivozivo3ivo7ivo/ivpDivpHivpLivpPivpTivpXivpbivpfivpjivpnivprivpvivpzivp3ivp7ivp/ivqDivqHivqLivqPivqTivqXivqbivqfivqjivqnivqrivqvivqzivq3ivq7ivq/ivrDivrHivrLivrPivrTivrXivrbivrfivrjivrnivrrivrvivrzivr3ivr7ivr/iv4Div4Hiv4Liv4Piv4Tiv4Xiv4biv4fiv4jiv4niv4riv4viv4ziv43iv47iv4/iv5Div5Hiv5Liv5Piv5Tiv5UnXG4gIHVyZ2UgJ86pYnNrX18yOCcsIHJwciBlbmNvZGVCaWdJbnQgMTAwMDAwLCAn4ryA4ryB4ryC4ryD4ryE4ryF4ryG4ryH4ryI4ryJ4ryK4ryL4ryM4ryN4ryO4ryP4ryQ4ryR4ryS4ryT4ryU4ryV4ryW4ryX4ryY4ryZ4rya4ryb4ryc4ryd4rye4ryf4ryg4ryh4ryi4ryj4ryk4ryl4rym4ryn4ryo4ryp4ryq4ryr4rys4ryt4ryu4ryv4ryw4ryx4ryy4ryz4ry04ry14ry24ry34ry44ry54ry64ry74ry84ry94ry+4ry/4r2A4r2B4r2C4r2D4r2E4r2F4r2G4r2H4r2I4r2J4r2K4r2L4r2M4r2N4r2O4r2P4r2Q4r2R4r2S4r2T4r2U4r2V4r2W4r2X4r2Y4r2Z4r2a4r2b4r2c4r2d4r2e4r2f4r2g4r2h4r2i4r2j4r2k4r2l4r2m4r2n4r2o4r2p4r2q4r2r4r2s4r2t4r2u4r2v4r2w4r2x4r2y4r2z4r204r214r224r234r244r254r264r274r284r294r2+4r2/4r6A4r6B4r6C4r6D4r6E4r6F4r6G4r6H4r6I4r6J4r6K4r6L4r6M4r6N4r6O4r6P4r6Q4r6R4r6S4r6T4r6U4r6V4r6W4r6X4r6Y4r6Z4r6a4r6b4r6c4r6d4r6e4r6f4r6g4r6h4r6i4r6j4r6k4r6l4r6m4r6n4r6o4r6p4r6q4r6r4r6s4r6t4r6u4r6v4r6w4r6x4r6y4r6z4r604r614r624r634r644r654r664r674r684r694r6+4r6/4r+A4r+B4r+C4r+D4r+E4r+F4r+G4r+H4r+I4r+J4r+K4r+L4r+M4r+N4r+O4r+P4r+Q4r+R4r+S4r+T4r+U4r+VJ1xuICB1cmdlICfOqWJza19fMjknLCBycHIgZW5jb2RlQmlnSW50IDEwMDAwMCwgJ+OCouOCpOOCpuOCqOOCquOCq+OCreOCr+OCseOCsydcbiAgdXJnZSAnzqlic2tfXzMwJywgcnByIGVuY29kZUJpZ0ludCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgJycnIVwiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AJycnXG4gIHVyZ2UgJ86pYnNrX18zMScsIHJwciBlbmNvZGVCaWdJbnQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsICchIyQlJigpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gYWJjJ1xuICB1cmdlICfOqWJza19fMzInLCBycHIgZW5jb2RlQmlnSW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAnISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fsKhwqLCo8KkwqXCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGw4fDiMOJw4rDi8OMw43DjsOPw5DDkcOSw5PDlMOVw5bDl8OYw5nDmsObw5zDncOew5/DoMOhw6LDo8Okw6XDpsOnw6jDqcOqw6vDrMOtw67Dr8Oww7HDssOzw7TDtcO2w7fDuMO5w7rDu8O8w73DvsO/J1xuICB1cmdlICfOqWJza19fMzMnLCBycHIgZW5jb2RlQmlnSW50IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCAnISMkJSYoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fsKhwqLCo8KkwqXCpsKnwqjCqcKqwqvCrMKuwq/CsMKxwrLCs8K0wrXCtsK3wrjCucK6wrvCvMK9wr7Cv8OAw4HDgsODw4TDhcOGJ1xuICAjICs1NyBmcmVlIGNvZGVwb2ludHNcbiAgIyAgLTggcG9zIG5lZ2F0aXZlXG4gICMgIC04IHBvcyBwb3NpdGl2ZVxuICAjICAtMSB6ZXJvXG4gICMg4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG4gICMgKzQwIGZvclxuICAjIC0yMCBuZWdhdGl2ZSBzaW5nbGUtZGlnaXRcbiAgIyAtMjAgcG9zaXRpdmUgc2luZ2xlLWRpZ2l0XG4gICMgMsOGw4bDhsOGw4bDhsOGXG5cbiAgIyMjXG5cblxuICAqIGZvciBudW1iZXJzIC0yMCA8PSBuIDw9ICsyMDpcbiAgICAqIG5lZ2F0aXZlIHVuaWxpdGVyYWwgbnVtYmVycyAgICAgICAgICAgKE5VTnMpOiAgLTIwIC4uICDDj8OQw5HDksOTw5TDlcOWw5fDmMOZw5rDm8Ocw53DnsOfw6DDocOiIC4uIC0xXG4gICAgKiB6ZXJvIHVuaWxpdGVyYWwgbnVtYmVyICAgICAgICAgICAgICAgIChaVU4pOiAgICDCsTAgLi4gIMOjXG4gICAgKiBwb3NpdGl2ZSB1bmlsaXRlcmFsIG51bWJlcnMgICAgICAgICAgIChQVU5zKTogICArMSAuLiAgw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtyAuLiArMjBcbiAgICAqIHplcm8gYW5kIHBvc2l0aXZlIHVuaWxpdGVyYWwgbnVtYmVycyAgKFpQVU5zKTogICswIC4uIMOjw6TDpcOmw6fDqMOpw6rDq8Osw63DrsOvw7DDscOyw7PDtMO1w7bDtyAuLiArMjBcblxuICAqIGZvciBudW1iZXJzIG4gPiArMjA6XG4gICAgKiBjb252ZXJ0IHRvIEJhc2UtMTI4IHVzaW5nIGFscGhhYmV0OiAhIyQlJigpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+wqHCosKjwqTCpcKmwqfCqMKpwqrCq8Kswq7Cr8KwwrHCssKzwrTCtcK2wrfCuMK5wrrCu8K8wr3CvsK/w4DDgcOCw4PDhMOFw4ZcbiAgICAqIHByZXBlbmQgcG9zaXRpdmUgbWFnbmlmaWVyICAgICAgICAgICAgKFBNQUcpIDogIDEgcG9zaXRpdmUgZGlnaXQgLi4gIMO4w7nDusO7w7zDvcO+w78gIC4uICA4IHBvc2l0aXZlIGRpZ2l0c1xuXG4gICogZm9yIG51bWJlcnMgbiA8IC0yMDpcblxuXG5cblxuICDDhyAgICA4IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiCAgICA3IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiSAgICA2IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiiAgICA1IG5lZ2F0aXZlIGRpZ2l0c1xuICDDiyAgICA0IG5lZ2F0aXZlIGRpZ2l0c1xuICDDjCAgICAzIG5lZ2F0aXZlIGRpZ2l0c1xuICDDjSAgICAyIG5lZ2F0aXZlIGRpZ2l0c1xuICDDjiAgICAxIG5lZ2F0aXZlIGRpZ2l0c1xuICDDjyAgLTIwXG4gIMOQICAtMTlcbiAgw5EgIC0xOFxuICDDkiAgLTE3XG4gIMOTICAtMTZcbiAgw5QgIC0xNVxuICDDlSAgLTE0XG4gIMOWICAtMTNcbiAgw5cgIC0xMlxuICDDmCAgLTExXG4gIMOZICAtMTBcbiAgw5ogICAtOVxuICDDmyAgIC04XG4gIMOcICAgLTdcbiAgw50gICAtNlxuICDDniAgIC01XG4gIMOfICAgLTRcbiAgw6AgICAtM1xuICDDoSAgIC0yXG4gIMOiICAgLTEgbmVnYXRpdmUgc21hbGwgc2luZ2xlLWxldHRlciBpbmRpY2VzXG5cbiAgw6MgICDCsTAgemVyb1xuXG4gIMOkICAgKzEgcG9zaXRpdmUgc21hbGwgc2luZ2xlLWxldHRlciBpbmRpY2VzXG4gIMOlICAgKzJcbiAgw6YgICArM1xuICDDpyAgICs0XG4gIMOoICAgKzVcbiAgw6kgICArNlxuICDDqiAgICs3XG4gIMOrICAgKzhcbiAgw6wgICArOVxuICDDrSAgKzEwXG4gIMOuICArMTFcbiAgw68gICsxMlxuICDDsCAgKzEzXG4gIMOxICArMTRcbiAgw7IgICsxNVxuICDDsyAgKzE2XG4gIMO0ICArMTdcbiAgw7UgICsxOFxuICDDtiAgKzE5XG4gIMO3ICArMjBcbiAgw7ggICAgMSBwb3NpdGl2ZSBkaWdpdHNcbiAgw7kgICAgMiBwb3NpdGl2ZSBkaWdpdHNcbiAgw7ogICAgMyBwb3NpdGl2ZSBkaWdpdHNcbiAgw7sgICAgNCBwb3NpdGl2ZSBkaWdpdHNcbiAgw7wgICAgNSBwb3NpdGl2ZSBkaWdpdHNcbiAgw70gICAgNiBwb3NpdGl2ZSBkaWdpdHNcbiAgw74gICAgNyBwb3NpdGl2ZSBkaWdpdHNcbiAgw78gICAgOCBwb3NpdGl2ZSBkaWdpdHNcblxuXG4gICMjI1xuXG5cblxuICBSID0gW11cbiAgZm9yIGNpZCBpbiBbIDB4MDAyMSAuLiAweDAwZmYgXVxuICAgICMgY29udGludWUgdW5sZXNzIC9eXFxwe0x9JC92LnRlc3QgKCBjaHIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCBjaWQgKVxuICAgICMgY29udGludWUgdW5sZXNzIC9eLiQvdi50ZXN0ICggY2hyID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkIClcbiAgICBjb250aW51ZSBpZiAvXlxccHtDfSQvdi50ZXN0ICggY2hyID0gU3RyaW5nLmZyb21Db2RlUG9pbnQgY2lkIClcbiAgICBjb250aW51ZSBpZiAvXihbJ1wiXFxcXF18XFxwe1N9KSQvdi50ZXN0IGNoclxuICAgIFIucHVzaCBjaHJcbiAgdXJnZSAnzqlic2tfXzM0JywgcnByIFIuam9pbiAnJ1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGRlbW9fYmluYXJ5X2xleGljb2dyYXBoaWNfc29ydGtleSgpXG4gIGRlbW9fY2hhdGdwdF9zb2x1dGlvbigpXG4gIHJldHVybiBudWxsXG4iXX0=
