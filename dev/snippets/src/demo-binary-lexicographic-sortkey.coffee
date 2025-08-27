
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
    help 'Ωbsk___1', "#{k}#{v} #{q}"
  ref0 = Number.MAX_SAFE_INTEGER
  f = ( n ) ->
    return 'N'                              if n is 0
    return (            n.toString 32 ).toUpperCase()  if n > 0
    return ( ( ref0 + n ).toString 32 ).toUpperCase()
    # 11111111111111111111111111111111111111111111111111111
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

# ABCDEFGHIJKLM
# NOPQRSTUVWXYZ

#===========================================================================================================
if module is require.main then await do =>
  await demo_binary_lexicographic_sortkey()
  return null
