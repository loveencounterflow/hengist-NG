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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tZXhlY2EuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixZQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFiQTs7O0VBbUJBLEtBQUEsQ0FBTSxPQUFOLEVBQWUsQ0FBQSxNQUFNLE1BQUEsQ0FBUSxPQUFSLENBQU4sQ0FBZjs7RUFuQkE7Ozs7Ozs7Ozs7Ozs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnZGVtby1leGVjYSdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5kZWJ1ZyAnzqlfX18xJywgYXdhaXQgaW1wb3J0KCAnZXhlY2EnIClcbiMgeyBleGVjYVxuIyAgICQgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZXhlY2EnXG4jICMgeyAkOiB6eCwgY2Q6IHp4X2NkIH0gICAgICA9IHJlcXVpcmUgJ3p4J1xuXG4jIGRlbW9fZXhlY2EgPSAtPlxuIyAgIGRlYnVnICfOqV9fXzEnLCBkIGZvciBkIGZyb20gYXdhaXQgZXhlY2FcInRyYXNoIG5vc3VjaGZpbGVcIlxuIyAgIGNvdW50ID0gMFxuIyAgICMgZm9yIGF3YWl0IGxpbmUgZnJvbSAoIGV4ZWNhIHsgY3dkOiAnL2hvbWUvZmxvdy9qenIvYmluZy1pbWFnZS1jcmVhdG9yLWRvd25sb2FkZXInLCB9IClcImNhdCAvdXNyL3NoYXJlL2RpY3Qvbmdlcm1hblwiXG4jICAgZm9yIGF3YWl0IGxpbmUgZnJvbSAoIGV4ZWNhIHsgY3dkOiAnL2hvbWUvZmxvdy9qenIvYmluZy1pbWFnZS1jcmVhdG9yLWRvd25sb2FkZXInLCB9IClcInB5dGhvbjMuMTEgLi9tYWluLnB5XCJcbiMgICAgIGNvdW50Kys7IGJyZWFrIGlmIGNvdW50ID4gMTAwMDBcbiMgICAgIGhlbHAgJ86pX19fMScsIHJwciBsaW5lXG4jICAgcmV0dXJuIG51bGxcbiMgYXdhaXQgZGVtb19leGVjYSgpXG5cblxuIl19
//# sourceURL=../src/demo-execa.coffee