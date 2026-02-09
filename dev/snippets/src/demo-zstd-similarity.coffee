


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
  whisper }               = GUY.trm.get_loggers 'demo-zstd-similarity'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm


#===========================================================================================================
demo = ->
  Z                     = require 'node:zlib'
  { constants: ZC,
    zstdCompressSync, } = Z
  cfg =
    flush:            undefined ### <integer> Default: zlib.constants.ZSTD_e_continue ###
    finishFlush:      undefined ### <integer> Default: zlib.constants.ZSTD_e_end ###
    chunkSize:        undefined ### <integer> Default: 16 * 1024 ###
    params:           undefined ### <Object> Key-value object containing indexed Zstd parameters. ###
    maxOutputLength:  undefined ### <integer> Limits output size when using convenience methods. Default: buffer.kMaxLength ###
    info:             undefined ### <boolean> If true, returns an object with buffer and engine. Default: false ###
    dictionary:       undefined ### <Buffer> Optional dictionary used to improve compression efficiency when compressing or decompressing data that shares common patterns with the dictionary. ###

  { buffer, engine, } = zstdCompressSync 'demo', { info: true, }
  dictionary = buffer
  # debug 'Ωzstd___1', Object.keys engine
  debug 'Ωzstd___2', buffer.toString 'hex'
  { buffer, engine, } = zstdCompressSync 'demo', { info: true, dictionary, }
  debug 'Ωzstd___2', buffer.toString 'hex'
  ;null

#===========================================================================================================
if module is require.main then await do =>
  await demo()
  ;null