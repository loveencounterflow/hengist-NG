


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
  whisper }               = GUY.trm.get_loggers 'demo-execa'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
#...........................................................................................................
# debug 'Ω___1', await import( 'execa' )
# { execa
#   $ }                     = require 'execa'
# # { $: zx, cd: zx_cd }      = require 'zx'

# demo_execa = ->
#   debug 'Ω___2', d for d from await execa"trash nosuchfile"
#   count = 0
#   # for await line from ( execa { cwd: '/home/flow/jzr/bing-image-creator-downloader', } )"cat /usr/share/dict/ngerman"
#   for await line from ( execa { cwd: '/home/flow/jzr/bing-image-creator-downloader', } )"python3.11 ./main.py"
#     count++; break if count > 10000
#     help 'Ω___3', rpr line
#   return null
# await demo_execa()


```
async function sha1(str) {
  const enc = new TextEncoder();
  const hash = await crypto.subtle.digest('SHA-1', enc.encode(str));
  return Array.from(new Uint8Array(hash))
    .map(v => v.toString(16).padStart(2, '0'))
    .join('');
}

```
debug 'Ωcrypto___4', await sha1 'hello, world!'
debug 'Ωcrypto___5', '1f09d30c707d53f3d16c530dd73d70a6ce7596a9'

get_sha1 = ( text ) ->
  CRYPTO = require 'crypto'
  return ( ( CRYPTO.createHash 'sha1' ).update text ).digest 'hex'


