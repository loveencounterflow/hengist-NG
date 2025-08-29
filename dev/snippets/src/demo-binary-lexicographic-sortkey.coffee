


'use strict'

#===========================================================================================================
GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'demo-build-unicode-ranges'
{ rpr
  inspect
  echo
  white
  green
  lime
  blue
  gold
  grey
  red
  bold
  reverse
  log     }               = GUY.trm
{ f }                     = require '../../../apps/effstring'
# write                     = ( p ) -> process.stdout.write p
# { nfa }                   = require '../../../apps/normalize-function-arguments'
# GTNG                      = require '../../../apps/guy-test-NG'
# { Test                  } = GTNG
# mkdirp                    = require 'mkdirp'
# env_paths                 = ( require 'env-paths' ).default 'demo-node-sqlite'
# SQLITE                    = require 'node:sqlite'
# PATH                      = require 'node:path'
# { SQL }                   = require '../../../apps/dbay'
# { default: \
#   on_process_exit,      } = require 'exit-hook'
# FS                        = require 'node:fs'
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'
{ hide,
  set_getter,           } = SFMODULES.require_managed_property_tools()
{ timeit,               } = SFMODULES.unstable.require_benchmarking()



#===========================================================================================================
demo_binary_lexicographic_sortkey = =>
  ### inspired by & thx to https://stately.cloud/blog/encoding-sortable-binary-database-keys/ ###
  d =
    K000:       '[ -999,           ] 1'
    L00:        '[  -99,           ] 2'
    L09:        '[  -90,           ] 3'
    L88:        '[  -11,           ] 4'
    L89:        '[  -10,           ] 5'
    M0:         '[   -9,           ] 6'
    M1:         '[   -8,           ] 7'
    M2:         '[   -7,           ] 8'
    M3:         '[   -6,           ] 9'
    M4:         '[   -5,           ] 10'
    M5:         '[   -4,           ] 11'
    M6:         '[   -3,           ] 12'
    M7:         '[   -2,           ] 13'
    M8:         '[   -1,           ] 14'
    NL20:       '[   +0,  -20,     ] 15'
    N:          '[   +0,           ] 16'
    NP20:       '[   +0,  +20,     ] 17'
    O9:         '[   +9,           ] 18'
    P10M6:      '[  +10,   -3,     ] 19'
    P10M7:      '[  +10,   -2,     ] 20'
    P10M8:      '[  +10,   -1,     ] 21'
    P10:        '[  +10,           ] 22'
    P10N:       '[  +10,   +0,     ] 23'
    P10O1:      '[  +10,   +1,     ] 24'
    P10P10M8:   '[  +10,  +10, -1, ] 25'
    P10P10:     '[  +10,  +10,     ] 26'
    P10P20:     '[  +10,  +20,     ] 27'
    P20:        '[  +20,           ] 28'
    P20P10:     '[  +20,  +10,     ] 29'
    P90:        '[  +90,           ] 30'
    Q900:       '[ +900,           ] 31'

    # identical b/c of padding:
    # P10:        '[  +10,       ] 24'
    # P10N:      '[  +10,   +0, ] 25'

  max_length  =  Math.max ( k.length for k in Object.keys d )...
  ### trailer can be of fixed length since there is an upper limit to digit positions given by
  Number.MAX_SAFE_INTEGER as represented in the base of choice (here 10) times the maximum number of
  dimensions of the VNR: ###
  trailer     = 'NNNNNNNNNNN'
  debug 'Ωbsk___1', { max_length, }
  # d1 = Object.fromEntries ( [ ( k.padEnd max_length, 'N' ), v, ] for k, v of d )
  # d1 = Object.fromEntries ( [ ( k + trailer ), v, ] for k, v of d )
  keys        = ( k for [ sk, k, ] in ( [ k + trailer, k, ] for k of d ).sort() )
  for key in keys
    k = lime reverse f" #{key}:>10c; "
    v = gold reverse f" #{d[ key ]}:<30c; "
    q = key.replace /([A-Z])[0-9]*/g, '$1'
    q = q.length
    help 'Ωbsk___2', "#{k}#{v} #{q}"
  ref0 = Number.MAX_SAFE_INTEGER
  f1 = ( n ) ->
    return [  0, 'N',                                         ] if n is 0
    return [ +1, (            n.toString 32 ).toLowerCase(),  ] if n > 0
    return [ -1, ( ( ref0 + n ).toString 32 ).toLowerCase().replace /^7V*/i, '',  ]
    # 11111111111111111111111111111111111111111111111111111
  N = 'N'.codePointAt 0
  g1 = ( n ) ->
    [ sign, nrpr, ] = f1 n
    return nrpr if sign is 0
    return ( String.fromCodePoint N + nrpr.length ) + nrpr if sign is +1
    return ( String.fromCodePoint N - nrpr.length ) + nrpr
  info 'Ωbsk___3', '0     ', ( f1 0      ), ( g1 0      )
  info 'Ωbsk___4', '1     ', ( f1 1      ), ( g1 1      )
  info 'Ωbsk___5', '2     ', ( f1 2      ), ( g1 2      )
  info 'Ωbsk___6', '31    ', ( f1 31     ), ( g1 31     )
  info 'Ωbsk___7', '32    ', ( f1 32     ), ( g1 32     )
  info 'Ωbsk___8', '33    ', ( f1 33     ), ( g1 33     )
  info 'Ωbsk___9', '-1    ', ( f1 -1     ), ( g1 -1     )
  info 'Ωbsk__10', '-31   ', ( f1 -31    ), ( g1 -31    )
  info 'Ωbsk__11', '-32   ', ( f1 -32    ), ( g1 -32    )
  info 'Ωbsk__12', '-32767', ( f1 -32767 ), ( g1 -32767 )
  info 'Ωbsk__13', '-32768', ( f1 -32768 ), ( g1 -32768 )
  info 'Ωbsk__14', '-32769', ( f1 -32769 ), ( g1 -32769 )

  # Number.MAX_SAFE_INTEGER.toString 32
  # '7vvvvvvvvvv'

  ###

  # Vectorial Numbers (VNRs) to Transform Text and Keep It


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

  ###


  return null

#===========================================================================================================
TMP_require_encode_in_alphabet = ->
  ```
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
  ```
  return { encodeBigInt, decodeBigInt, }

#===========================================================================================================
demo_chatgpt_solution = ->
  { encodeBigInt,
    decodeBigInt,   } = TMP_require_encode_in_alphabet()
  urge 'Ωbsk__15', encodeBigInt 12345678, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  # urge 'Ωbsk__16', rpr encodeBigInt 100n, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzªµºÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁˆˇˈˉˊˋˌˍˎˏːˑˠˡˢˣˤˬˮͰͱͲͳʹͶͷͺͻͼͽͿΆΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨ'
  # urge 'Ωbsk__17', rpr encodeBigInt 1000n, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzªµºÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁˆˇˈˉˊˋˌˍˎˏːˑˠˡˢˣˤˬˮͰͱͲͳʹͶͷͺͻͼͽͿΆΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨ'
  # urge 'Ωbsk__18', rpr encodeBigInt 10000n, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzªµºÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁˆˇˈˉˊˋˌˍˎˏːˑˠˡˢˣˤˬˮͰͱͲͳʹͶͷͺͻͼͽͿΆΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨ'
  # urge 'Ωbsk__19', rpr encodeBigInt 10000n, 'ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅬⅭⅮⅯ'
  # urge 'Ωbsk__20', rpr encodeBigInt 10000n, '①②③④⑤⑥⑦⑧⑨⑩'
  # urge 'Ωbsk__21', rpr encodeBigInt 1, '⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑'
  # urge 'Ωbsk__22', rpr encodeBigInt 2, '⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑'
  # urge 'Ωbsk__23', rpr encodeBigInt 10, '⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑'
  # urge 'Ωbsk__24', rpr encodeBigInt 10, '⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕'
  # urge 'Ωbsk__25', rpr encodeBigInt 100, '⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕'
  # urge 'Ωbsk__26', rpr encodeBigInt 1000, '⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕'
  # urge 'Ωbsk__27', rpr encodeBigInt 10000, '⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕'
  # urge 'Ωbsk__28', rpr encodeBigInt 100000, '⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕'
  # urge 'Ωbsk__29', rpr encodeBigInt 100000, 'アイウエオカキクケコ'
  urge 'Ωbsk__30', rpr encodeBigInt Number.MAX_SAFE_INTEGER, '''!"#$%&'()*+,-./0123456789:;<=>?@'''
  urge 'Ωbsk__31', rpr encodeBigInt Number.MAX_SAFE_INTEGER, '!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abc'
  urge 'Ωbsk__32', rpr encodeBigInt Number.MAX_SAFE_INTEGER, '!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ'
  urge 'Ωbsk__33', rpr encodeBigInt Number.MAX_SAFE_INTEGER, '!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ'
  urge 'Ωbsk__34', rpr encodeBigInt 0, '01'
  urge 'Ωbsk__35', rpr encodeBigInt 1, '01'
  urge 'Ωbsk__36', rpr encodeBigInt 2, '01'
  urge 'Ωbsk__37', rpr encodeBigInt 3, '01'
  urge 'Ωbsk__38', rpr encodeBigInt 7, '01'
  urge 'Ωbsk__39', rpr encodeBigInt 8, '01'
  urge 'Ωbsk__40', rpr encodeBigInt Number.MAX_SAFE_INTEGER, '01'
  # +57 free codepoints
  #  -8 pos negative
  #  -8 pos positive
  #  -1 zero
  # ———————————
  # +40 for
  # -20 negative single-digit
  # -20 positive single-digit
  # 2ÆÆÆÆÆÆÆ

  ###


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


  ###



  R = []
  for cid in [ 0x0021 .. 0x00ff ]
    # continue unless /^\p{L}$/v.test ( chr = String.fromCodePoint cid )
    # continue unless /^.$/v.test ( chr = String.fromCodePoint cid )
    continue if /^\p{C}$/v.test ( chr = String.fromCodePoint cid )
    continue if /^(['"\\]|\p{S})$/v.test chr
    R.push chr
  urge 'Ωbsk__41', rpr R.join ''

#===========================================================================================================
demo_hollerith_vdx_sortkey = ->
  ### vectorial index, a.k.a. 'vindex', a.k.a. VDX, next version of VNR as implemented in `hollerith-codec`
  ###
  #=========================================================================================================
  { encodeBigInt,
    decodeBigInt,   } = TMP_require_encode_in_alphabet()

  #---------------------------------------------------------------------------------------------------------
  constants_128 = Object.freeze
    max_integer:  Number.MAX_SAFE_INTEGER
    min_integer:  Number.MIN_SAFE_INTEGER
    zpuns:        'ãäåæçèéêëìíîïðñòóôõö÷' # zero and positive uniliteral numbers
    nuns:         'ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâ'  # negative          uniliteral numbers
    zpun_max:     +20
    nun_min:      -20
    zero_pad_length: 8
    alphabet:     '!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`' \
                    + 'abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ'
    ### TAINT since small ints up to +/-20 are represented by uniliterals, PMAG `ø` and NMAG `Î` will never
    be used, thus can be freed for other(?) things ###
    pmag:         ' øùúûüýþÿ'  # positive 'magnifier' for 1 to 8 positive digits
    nmag:         ' ÎÍÌËÊÉÈÇ'  # negative 'magnifier' for 1 to 8 negative digits
    nlead_re:     /^2Æ*/      # 'negative leader', discardable leading digits of lifted negative numbers

  #---------------------------------------------------------------------------------------------------------
  constants_10 = Object.freeze
    max_integer:  +999
    min_integer:  -999
    zpuns:        'ãäåæ' # zero and positive uniliteral numbers
    nuns:         'ÏÐÑ'  # negative          uniliteral numbers
    zpun_max:     +3
    nun_min:      -3
    zero_pad_length:  3
    alphabet:     '0123456789'
    pmag:         ' øùúûüýþÿ'   # positive 'magnifier' for 1 to 8 positive digits
    nmag:         ' ÎÍÌËÊÉÈÇ'   # negative 'magnifier' for 1 to 8 negative digits
    nlead_re:     /^9*(?=[0-9])/         # 'negative leader', discardable leading digits of lifted negative numbers

  #---------------------------------------------------------------------------------------------------------
  # constants = C = constants_128
  constants = C = constants_10

  #---------------------------------------------------------------------------------------------------------
  internals = Object.freeze { constants, }

  #=========================================================================================================
  class Vindex

    #-------------------------------------------------------------------------------------------------------
    encode: ( integer_or_list ) ->
      ### TAINT use proper validation ###
      if Array.isArray integer_or_list
        return ( @encode n for n in integer_or_list ).join ''
      #.....................................................................................................
      n = integer_or_list
      unless Number.isFinite n
        type = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        throw new Error "Ωvdx__42 expected a float, got a #{type}"
      unless C.min_integer <= n <= C.max_integer
        throw new Error "Ωvdx__43 expected a float between #{C.min_integer} and #{C.max_integer}, got #{n}"
      #.....................................................................................................
      return @encode_integer n

    #-------------------------------------------------------------------------------------------------------
    encode_integer: ( n ) ->
      ### NOTE call only where assured `n` is integer within magnitude of `Number.MAX_SAFE_INTEGER` ###
      #.....................................................................................................
      # Zero or small positive:
      return ( C.zpuns.at n ) if 0          <= n <= C.zpun_max
      #.....................................................................................................
      # Small negative:
      return ( C.nuns.at  n ) if C.nun_min  <= n <  0
      #.....................................................................................................
      # Big positive:
      if n > C.zpun_max
        R = encodeBigInt n, C.alphabet
        return ( C.pmag.at R.length ) + R
      #.....................................................................................................
      # Big negative:
      R = ( encodeBigInt ( n + C.max_integer + 1 ), C.alphabet )
      if R.length < C.zero_pad_length   then  R = R.padStart C.zero_pad_length, C.alphabet.at 0
      else                                    R = R.replace C.nlead_re, ''
      return ( C.nmag.at R.length ) + R

  #---------------------------------------------------------------------------------------------------------
  VDX = new Vindex()
  help 'Ωbsk__44', VDX.encode_integer +1
  help 'Ωbsk__45', VDX.encode_integer +2
  help 'Ωbsk__46', VDX.encode_integer +3
  help 'Ωbsk__47', VDX.encode_integer +4
  help 'Ωbsk__48', VDX.encode_integer +5
  help 'Ωbsk__49', VDX.encode_integer 10
  help 'Ωbsk__50', VDX.encode_integer 20
  help 'Ωbsk__51', VDX.encode_integer 21
  help 'Ωbsk__52', VDX.encode_integer 100
  help 'Ωbsk__53', VDX.encode_integer 127
  help 'Ωbsk__54', VDX.encode_integer 128
  help 'Ωbsk__55', VDX.encode_integer 129
  help 'Ωbsk__56', VDX.encode_integer +123456789012345
  help 'Ωbsk__57', VDX.encode_integer C.max_integer
  info 'Ωbsk__58'
  help 'Ωbsk__59', VDX.encode_integer 0
  info 'Ωbsk__60'
  help 'Ωbsk__61', VDX.encode_integer -1
  help 'Ωbsk__62', VDX.encode_integer -2
  help 'Ωbsk__63', VDX.encode_integer -3
  help 'Ωbsk__64', VDX.encode_integer -4
  help 'Ωbsk__65', VDX.encode_integer -5
  help 'Ωbsk__66', VDX.encode_integer -10
  help 'Ωbsk__67', VDX.encode_integer -20
  help 'Ωbsk__68', VDX.encode_integer -21
  help 'Ωbsk__69', VDX.encode_integer -100
  help 'Ωbsk__70', VDX.encode_integer -127
  help 'Ωbsk__71', VDX.encode_integer -128
  help 'Ωbsk__72', VDX.encode_integer -129
  # help 'Ωbsk__73', VDX.encode_integer -1000
  # help 'Ωbsk__74', VDX.encode_integer -10000
  # help 'Ωbsk__75', VDX.encode_integer -100000
  # help 'Ωbsk__76', VDX.encode_integer -1000000
  # help 'Ωbsk__77', VDX.encode_integer -10000000
  # help 'Ωbsk__78', VDX.encode_integer -100000000
  # help 'Ωbsk__79', VDX.encode_integer -1000000000
  # help 'Ωbsk__80', VDX.encode_integer -10000000000
  # help 'Ωbsk__81', VDX.encode_integer -100000000000
  # help 'Ωbsk__82', VDX.encode_integer -1000000000000
  # help 'Ωbsk__83', VDX.encode_integer -10000000000000
  # help 'Ωbsk__84', VDX.encode_integer -100000000000000
  # help 'Ωbsk__85', VDX.encode_integer -123456789012345
  # help 'Ωbsk__86', VDX.encode_integer -800
  # help 'Ωbsk__87', VDX.encode_integer -900
  # help 'Ωbsk__88', VDX.encode_integer -950
  # help 'Ωbsk__89', VDX.encode_integer -970
  # help 'Ωbsk__90', VDX.encode_integer -980
  # help 'Ωbsk__91', VDX.encode_integer -990
  # help 'Ωbsk__92', VDX.encode_integer -995
  # help 'Ωbsk__93', VDX.encode_integer -996
  # help 'Ωbsk__94', VDX.encode_integer -997
  # help 'Ωbsk__95', VDX.encode_integer -998
  # help 'Ωbsk__96', VDX.encode_integer -999
  help 'Ωbsk__97', VDX.encode_integer C.min_integer + 3
  help 'Ωbsk__98', VDX.encode_integer C.min_integer + 2
  help 'Ωbsk__99', VDX.encode_integer C.min_integer + 1
  help 'Ωbsk_100', VDX.encode_integer C.min_integer
  info 'Ωbsk_101'
  help 'Ωbsk_102', VDX.encode [ 1, 2, 3, 100, ]
  #---------------------------------------------------------------------------------------------------------
  d = [
    { sk: null, vdx: [ -999,           ], nr: 1,  }
    { sk: null, vdx: [  -99,           ], nr: 2,  }
    { sk: null, vdx: [  -90,           ], nr: 3,  }
    { sk: null, vdx: [  -11,           ], nr: 4,  }
    { sk: null, vdx: [  -10,           ], nr: 5,  }
    { sk: null, vdx: [   -9,           ], nr: 6,  }
    { sk: null, vdx: [   -8,           ], nr: 7,  }
    { sk: null, vdx: [   -7,           ], nr: 8,  }
    { sk: null, vdx: [   -6,           ], nr: 9,  }
    { sk: null, vdx: [   -5,           ], nr: 10, }
    { sk: null, vdx: [   -4,           ], nr: 11, }
    { sk: null, vdx: [   -3,           ], nr: 12, }
    { sk: null, vdx: [   -2,           ], nr: 13, }
    { sk: null, vdx: [   -1,           ], nr: 14, } # !!!
    { sk: null, vdx: [   +0,  -20,     ], nr: 15, } # !!!
    { sk: null, vdx: [   +0,           ], nr: 16, } # !!!
    { sk: null, vdx: [   +0,  +20,     ], nr: 17, }
    { sk: null, vdx: [   +9,           ], nr: 18, } # !!!
    { sk: null, vdx: [  +10,   -3,     ], nr: 19, } # !!!
    { sk: null, vdx: [  +10,   -2,     ], nr: 20, } # !!!
    { sk: null, vdx: [  +10,   -1,     ], nr: 21, } # !!!
    { sk: null, vdx: [  +10,           ], nr: 22, } # !!!
    { sk: null, vdx: [  +10,   +0,     ], nr: 23, }
    { sk: null, vdx: [  +10,   +1,     ], nr: 24, }
    { sk: null, vdx: [  +10,  +10, -1, ], nr: 25, } # !!!
    { sk: null, vdx: [  +10,  +10,     ], nr: 26, } # !!!
    { sk: null, vdx: [  +10,  +20,     ], nr: 27, }
    { sk: null, vdx: [  +20,           ], nr: 28, }
    { sk: null, vdx: [  +20,  +10,     ], nr: 29, }
    { sk: null, vdx: [  +90,           ], nr: 30, }
    { sk: null, vdx: [ +900,           ], nr: 31, }
    ]
  for e in d
    try e.sk = VDX.encode e.vdx catch error
      warn 'Ωbsk_100', e, error.message
      e.sk = '???'
    e.sk += '0000000000000000000'
  d.sort ( a, b ) ->
    return -1 if a.sk < b.sk
    return +1 if a.sk > b.sk
    return 0
  debug 'Ωbsk_103', e for e in d
  #---------------------------------------------------------------------------------------------------------
  return null

#===========================================================================================================
if module is require.main then await do =>
  demo_binary_lexicographic_sortkey()
  demo_chatgpt_solution()
  demo_hollerith_vdx_sortkey()
  # echo f"-#{n}:0>2.0f;" for n in [ 99 .. 0 ]
  # echo f"+#{n}:0>2.0f;" for n in [ 0 .. 99 ]
  return null
