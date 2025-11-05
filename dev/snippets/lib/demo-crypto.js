(async function() {
  'use strict';
  var GUY, alert, debug, echo, get_sha1, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  
async function sha1(str) {
  const enc = new TextEncoder();
  const hash = await crypto.subtle.digest('SHA-1', enc.encode(str));
  return Array.from(new Uint8Array(hash))
    .map(v => v.toString(16).padStart(2, '0'))
    .join('');
}

  //...........................................................................................................
  // debug 'Ω___1', await import( 'execa' )
  // { execa
  //   $ }                     = require 'execa'
  // # { $: zx, cd: zx_cd }      = require 'zx'

  // demo_execa = ->
  //   debug 'Ω___2', d for d from await execa"trash nosuchfile"
  //   count = 0
  //   # for await line from ( execa { cwd: '/home/flow/jzr/bing-image-creator-downloader', } )"cat /usr/share/dict/ngerman"
  //   for await line from ( execa { cwd: '/home/flow/jzr/bing-image-creator-downloader', } )"python3.11 ./main.py"
  //     count++; break if count > 10000
  //     help 'Ω___3', rpr line
  //   return null
  // await demo_execa()
;

  debug('Ωcrypto___4', (await sha1('hello, world!')));

  debug('Ωcrypto___5', '1f09d30c707d53f3d16c530dd73d70a6ce7596a9');

  get_sha1 = function(text) {
    var CRYPTO;
    CRYPTO = require('crypto');
    return ((CRYPTO.createHash('sha1')).update(text)).digest('hex');
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tY3J5cHRvLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUFBO0FBQUEsTUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsUUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFlBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQzs7RUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBVUEsS0FBQSxDQUFNLGFBQU4sRUFBcUIsQ0FBQSxNQUFNLElBQUEsQ0FBSyxlQUFMLENBQU4sQ0FBckI7O0VBQ0EsS0FBQSxDQUFNLGFBQU4sRUFBcUIsMENBQXJCOztFQUVBLFFBQUEsR0FBVyxRQUFBLENBQUUsSUFBRixDQUFBO0FBQ1gsUUFBQTtJQUFFLE1BQUEsR0FBUyxPQUFBLENBQVEsUUFBUjtBQUNULFdBQU8sQ0FBRSxDQUFFLE1BQU0sQ0FBQyxVQUFQLENBQWtCLE1BQWxCLENBQUYsQ0FBNEIsQ0FBQyxNQUE3QixDQUFvQyxJQUFwQyxDQUFGLENBQTRDLENBQUMsTUFBN0MsQ0FBb0QsS0FBcEQ7RUFGRTtBQWhEWCIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnZGVtby1leGVjYSdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4jIGRlYnVnICfOqV9fXzEnLCBhd2FpdCBpbXBvcnQoICdleGVjYScgKVxuIyB7IGV4ZWNhXG4jICAgJCB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdleGVjYSdcbiMgIyB7ICQ6IHp4LCBjZDogenhfY2QgfSAgICAgID0gcmVxdWlyZSAnengnXG5cbiMgZGVtb19leGVjYSA9IC0+XG4jICAgZGVidWcgJ86pX19fMicsIGQgZm9yIGQgZnJvbSBhd2FpdCBleGVjYVwidHJhc2ggbm9zdWNoZmlsZVwiXG4jICAgY291bnQgPSAwXG4jICAgIyBmb3IgYXdhaXQgbGluZSBmcm9tICggZXhlY2EgeyBjd2Q6ICcvaG9tZS9mbG93L2p6ci9iaW5nLWltYWdlLWNyZWF0b3ItZG93bmxvYWRlcicsIH0gKVwiY2F0IC91c3Ivc2hhcmUvZGljdC9uZ2VybWFuXCJcbiMgICBmb3IgYXdhaXQgbGluZSBmcm9tICggZXhlY2EgeyBjd2Q6ICcvaG9tZS9mbG93L2p6ci9iaW5nLWltYWdlLWNyZWF0b3ItZG93bmxvYWRlcicsIH0gKVwicHl0aG9uMy4xMSAuL21haW4ucHlcIlxuIyAgICAgY291bnQrKzsgYnJlYWsgaWYgY291bnQgPiAxMDAwMFxuIyAgICAgaGVscCAnzqlfX18zJywgcnByIGxpbmVcbiMgICByZXR1cm4gbnVsbFxuIyBhd2FpdCBkZW1vX2V4ZWNhKClcblxuXG5gYGBcbmFzeW5jIGZ1bmN0aW9uIHNoYTEoc3RyKSB7XG4gIGNvbnN0IGVuYyA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICBjb25zdCBoYXNoID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoJ1NIQS0xJywgZW5jLmVuY29kZShzdHIpKTtcbiAgcmV0dXJuIEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkoaGFzaCkpXG4gICAgLm1hcCh2ID0+IHYudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpXG4gICAgLmpvaW4oJycpO1xufVxuXG5gYGBcbmRlYnVnICfOqWNyeXB0b19fXzQnLCBhd2FpdCBzaGExICdoZWxsbywgd29ybGQhJ1xuZGVidWcgJ86pY3J5cHRvX19fNScsICcxZjA5ZDMwYzcwN2Q1M2YzZDE2YzUzMGRkNzNkNzBhNmNlNzU5NmE5J1xuXG5nZXRfc2hhMSA9ICggdGV4dCApIC0+XG4gIENSWVBUTyA9IHJlcXVpcmUgJ2NyeXB0bydcbiAgcmV0dXJuICggKCBDUllQVE8uY3JlYXRlSGFzaCAnc2hhMScgKS51cGRhdGUgdGV4dCApLmRpZ2VzdCAnaGV4J1xuXG5cbiJdfQ==
