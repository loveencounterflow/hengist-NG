(async function() {
  'use strict';
  var GUY, alert, debug, echo, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  //...........................................................................................................
  debug('Ω___1', (await import('execa')));

  // { execa
//   $ }                     = require 'execa'
// # { $: zx, cd: zx_cd }      = require 'zx'

  // demo_execa = ->
//   debug 'Ω___1', d for d from await execa"trash nosuchfile"
//   count = 0
//   # for await line from ( execa { cwd: '/home/flow/jzr/bing-image-creator-downloader', } )"cat /usr/share/dict/ngerman"
//   for await line from ( execa { cwd: '/home/flow/jzr/bing-image-creator-downloader', } )"python3.11 ./main.py"
//     count++; break if count > 10000
//     help 'Ω___1', rpr line
//   return null
// await demo_execa()

}).call(this);

//# sourceMappingURL=demo-execa.js.map