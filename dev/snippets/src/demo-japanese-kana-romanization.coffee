

'use strict'

GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'intertype/test-basics'
{ rpr
  inspect
  echo
  white
  red
  gold
  blue
  bold
  reverse
  log     }               = GUY.trm
{ f }                     = require '../../../apps/effstring'

#-----------------------------------------------------------------------------------------------------------
demo_pkg_japanese = ->
  debug 'Ωdjkr___1', require 'japanese'
  ;null

#-----------------------------------------------------------------------------------------------------------
demo_pkg_wanakana = ->
  ###
  Name                 | Type                                  | Attributes | Default   | Description

  useObsoleteKana      | Boolean                               | <optional> | false     | Set to true to use obsolete characters, such as ゐ and ゑ.
  passRomaji           | Boolean                               | <optional> | false     | Set to true to pass romaji when using mixed syllabaries with toKatakana() or toHiragana()
  convertLongVowelMark | Boolean                               | <optional> | true      | Set to false to prevent conversions of 'ー' to extended vowels with toHiragana()
  upcaseKatakana       | Boolean                               | <optional> | false     | Set to true to convert katakana to uppercase using toRomaji()
  IMEMode              | Boolean | 'toHiragana' | 'toKatakana' | <optional> | false     | Set to true, 'toHiragana', or 'toKatakana' to handle conversion while it is being typed.
  romanization         | 'hepburn'                             | <optional> | 'hepburn' | choose toRomaji() romanization map (currently only 'hepburn')
  customKanaMapping    | Object.<String, String>               | <optional> |           | custom map will be merged with default conversion
  customRomajiMapping  | Object.<String, String>               | <optional> |           | custom map will be merged with default conversion
  ###
  { toHiragana,
    toKana,
    toKatakana
    toRomaji,
    tokenize,         } = require 'wanakana'
  help 'Ωdjkr___3', toHiragana  'ラーメン',       { convertLongVowelMark: false, }
  help 'Ωdjkr___4', toHiragana  'ラーメン',       { convertLongVowelMark: true, }
  help 'Ωdjkr___5', toKana      'wanakana',   { customKanaMapping: { na: 'に', ka: 'Bana' }, }
  help 'Ωdjkr___6', toKana      'wanakana',   { customKanaMapping: { waka: '(和歌)', wa: '(和2)', ka: '(歌2)', na: '(名)', ka: '(Bana)', naka: '(中)', }, }
  help 'Ωdjkr___7', toRomaji    'つじぎり',     { customRomajiMapping: { じ: '(zi)', つ: '(tu)', り: '(li)', りょう: '(ryou)', りょ: '(ryo)' }, }
  help 'Ωdjkr___8', toRomaji    'つじぎりょ',    { customRomajiMapping: { じ: '(zi)', つ: '(tu)', り: '(li)', りょう: '(ryou)', りょ: '(ryo)' }, }
  help 'Ωdjkr___9', toRomaji    'つじぎりょう',   { customRomajiMapping: { じ: '(zi)', つ: '(tu)', り: '(li)', りょう: '(ryou)', りょ: '(ryo)' }, }
  help 'Ωdjkr__10', toKatakana    'つじぎりょう',   { customKanaMapping: { つじ: '(辻1)', ツジ: '(辻2)', }, }
  help 'Ωdjkr__11', tokenize    'つじぎりょう', { detailed: true, }
  help 'Ωdjkr__11', tokenize    'つじラーメン', { detailed: true, }
  help 'Ωdjkr__10', toKatakana    'ぎり,ラーメン,𪜈',   { customKanaMapping: { 𪜈: '(とも)', つじ: '(辻1)', ツジ: '(辻2)', }, }
  help 'Ωdjkr__10', toHiragana    'ぎり,ラーメン,𪜈',   { customKanaMapping: { 𪜈: '(とも)', つじ: '(辻1)', ツジ: '(辻2)', }, }

  ;null

#-----------------------------------------------------------------------------------------------------------
demo_pkg_jaco = ->
  # debug 'Ωdjkr__12', require 'jaco'
  null
  ;null





#===========================================================================================================
if module is require.main then await do =>
  demo_pkg_japanese()
  demo_pkg_wanakana()
  demo_pkg_jaco()
  # re      = /// (?<= a ) b ///y
  # source  = '01b3ab6'
  # for idx in [ 0 .. 7 ]
  #   re.lastIndex = idx; debug 'Ω__13', idx, ( rpr source[ idx ... ] ), source.match re
