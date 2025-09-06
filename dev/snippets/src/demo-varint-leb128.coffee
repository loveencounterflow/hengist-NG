


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
hex_from_typed_array = ( array, joiner = '', zero = '_' ) ->
  R = ( Array.from array, ( byte ) => ( byte.toString 16 ).padStart 2, '0' ).join joiner
  return R.replace /0/gv, zero


#===========================================================================================================
demo_varint = ->
  varint                    = require 'varint'
  debug 'Ωvi___1', bytes = varint.encode 300  # === [0xAC, 0x02]
  debug 'Ωvi___2', varint.decode bytes        # 300
  debug 'Ωvi___3', varint.decode.bytes        # 2 (the last decode() call required 2 bytes)
  debug 'Ωvi___4', varint.decode [ ( varint.encode 5 )..., ( varint.encode 6 )..., ]
  debug 'Ωvi___5', varint.encodingLength 1e10
  debug 'Ωvi___6', varint.encodingLength Number.MAX_SAFE_INTEGER

  # for n in [ 0 ... 200 ]
  #   info 'Ωvi___7', n, bytes = varint.encode n

  debug 'Ωvi___8', Buffer.from varint.encode 123456

  vdx = new Uint8Array 16
  offset = 0
  for n in [ 1, 3, 5, 7, 9, ]
    n *= 1000
    vdx.set ( bytes = varint.encode n ), offset
    whisper 'Ωvi___9', bytes, varint.encode.bytes
    offset += varint.encode.bytes
  help 'Ωvi__10', hex_from_typed_array vdx, '.'
  return null


#===========================================================================================================
demo_big_varint = ->
  { encode,
    decode,     } = ( require 'big-varint' ).signed
  debug 'Ωvi__11', hex_from_typed_array encode 123n
  debug 'Ωvi__12', hex_from_typed_array encode 123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123_123n
  numbers = [ -3 .. +3 ]
  varints = ( encode ( BigInt n ) for n in numbers )
  help 'Ωvi__13', varints
  varints.sort ( a, b ) ->
    return +1 if a[ 0 ] > b[ 0 ]
    return -1 if a[ 0 ] < b[ 0 ]
    return  0
  for varint in varints
    help 'Ωvi__14', decode varint
  numbers.sort ( a, b ) ->
    return +1 if a > b
    return -1 if a < b
    return  0
  for number in numbers
    urge 'Ωvi__15', number
  return null

#===========================================================================================================
if module is require.main then await do =>
  demo_varint()
  demo_big_varint()

