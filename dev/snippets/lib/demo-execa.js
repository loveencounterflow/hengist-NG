(async function() {
  'use strict';
  var GUY, PATH, alert, debug, demo_execa, echo, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  //...........................................................................................................
  PATH = require('node:path');

  // # { $: zx, cd: zx_cd }      = require 'zx'

  //===========================================================================================================
  demo_execa = async function() {
    var $, count, execa, execaSync, file_path, k, parseCommandString, ref_path;
    ({parseCommandString, execa, execaSync, $} = require('execa'));
    // debug 'Ω___1', d for d from await execa"trash nosuchfile"
    ref_path = PATH.resolve(__dirname, '../../../apps/bricabrac-filemirror');
    count = 0;
    // for await line from ( execa { cwd: '/home/flow/jzr/bing-image-creator-downloader', } )"cat /usr/share/dict/ngerman"
    debug('Ωdxa___2', (function() {
      var results;
      results = [];
      for (k in execa) {
        results.push(k);
      }
      return results;
    })());
    await (async function() {      // debug 'Ωdxa___3', GUY.props.keys execa, { symbols: true, builtins: true, hidden: true, }
      //.........................................................................................................
      var line;
      help('Ωdxa___4');
      for await (line of (execa({
        cwd: ref_path
      }))`ls .`) {
        count++;
        if (count > 10000) {
          break;
        }
        help('Ωdxa___5', rpr(line));
      }
      return null;
    })();
    //.........................................................................................................
    help('Ωdxa___6');
    file_path = 'README.md';
    (function() {      //.........................................................................................................
      var stdout;
      ({stdout} = ($.sync({
        cwd: ref_path,
        shell: true,
        lines: true
      }))`stat -c '%a %A %n' ${file_path}`);
      info('Ωdxa___7', rpr(stdout));
      return null;
    })();
    (function() {      //.........................................................................................................
      var cfg, stdout;
      cfg = ['-c', '%a %A %n', file_path];
      ({stdout} = ($.sync({
        cwd: ref_path,
        shell: false,
        lines: true
      }))`stat ${cfg}`);
      info('Ωdxa___8', rpr(stdout));
      return null;
    })();
    (function() {      //.........................................................................................................
      var stdout;
      ({stdout} = $.sync('stat', ['-c', '%a %A %n', file_path], {
        cwd: ref_path,
        lines: true
      }));
      info('Ωdxa___9', rpr(stdout));
      return null;
    })();
    //.........................................................................................................
    // await execa({detached: true})`npm run start`;
    //.........................................................................................................
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // await demo_execa()
      debug('Ωdxa__10', '0o' + (0o100664 & 0x1ff).toString(8));
      return debug('Ωdxa__10', '0o' + (0o100664 & 0x1ff & 0x0100).toString(8));
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tZXhlY2EuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFlBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQWJBOzs7RUFtQkEsSUFBQSxHQUE0QixPQUFBLENBQVEsV0FBUixFQW5CNUI7Ozs7O0VBdUJBLFVBQUEsR0FBYSxNQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ2IsUUFBQSxDQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLENBQUEsRUFBQSxrQkFBQSxFQUFBO0lBQUUsQ0FBQSxDQUFFLGtCQUFGLEVBQ0UsS0FERixFQUVFLFNBRkYsRUFHRSxDQUhGLENBQUEsR0FHNEIsT0FBQSxDQUFRLE9BQVIsQ0FINUIsRUFBRjs7SUFLRSxRQUFBLEdBQWMsSUFBSSxDQUFDLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLG9DQUF4QjtJQUNkLEtBQUEsR0FBYyxFQU5oQjs7SUFRRSxLQUFBLENBQU0sVUFBTjs7QUFBb0I7TUFBQSxLQUFBLFVBQUE7cUJBQUE7TUFBQSxDQUFBOztRQUFwQjtJQUdBLE1BQVMsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxDQUFBLEVBQUE7O0FBQ1gsVUFBQTtNQUFJLElBQUEsQ0FBSyxVQUFMO01BQ0E7O2dCQUFBO1FBQ0UsS0FBQTtRQUFTLElBQVMsS0FBQSxHQUFRLEtBQWpCO0FBQUEsZ0JBQUE7O1FBQ1QsSUFBQSxDQUFLLFVBQUwsRUFBaUIsR0FBQSxDQUFJLElBQUosQ0FBakI7TUFGRjthQUdDO0lBTE0sQ0FBQSxJQVhYOztJQWtCRSxJQUFBLENBQUssVUFBTDtJQUNBLFNBQUEsR0FBYztJQUVYLENBQUEsUUFBQSxDQUFBLENBQUEsRUFBQTtBQUNMLFVBQUE7TUFBSSxDQUFBLENBQUUsTUFBRixDQUFBLEdBQWMsQ0FBRSxDQUFDLENBQUMsSUFBRixDQUFPO1FBQUUsR0FBQSxFQUFLLFFBQVA7UUFBaUIsS0FBQSxFQUFPLElBQXhCO1FBQThCLEtBQUEsRUFBTztNQUFyQyxDQUFQLENBQUYsQ0FBdUQsQ0FBQSxtQkFBQSxDQUFBLENBQXNCLFNBQXRCLENBQUEsQ0FBckU7TUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixHQUFBLENBQUksTUFBSixDQUFqQjthQUNDO0lBSEEsQ0FBQTtJQUtBLENBQUEsUUFBQSxDQUFBLENBQUEsRUFBQTtBQUNMLFVBQUEsR0FBQSxFQUFBO01BQUksR0FBQSxHQUFjLENBQUUsSUFBRixFQUFRLFVBQVIsRUFBb0IsU0FBcEI7TUFDZCxDQUFBLENBQUUsTUFBRixDQUFBLEdBQWMsQ0FBRSxDQUFDLENBQUMsSUFBRixDQUFPO1FBQUUsR0FBQSxFQUFLLFFBQVA7UUFBaUIsS0FBQSxFQUFPLEtBQXhCO1FBQStCLEtBQUEsRUFBTztNQUF0QyxDQUFQLENBQUYsQ0FBd0QsQ0FBQSxLQUFBLENBQUEsQ0FBUSxHQUFSLENBQUEsQ0FBdEU7TUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixHQUFBLENBQUksTUFBSixDQUFqQjthQUNDO0lBSkEsQ0FBQTtJQU1BLENBQUEsUUFBQSxDQUFBLENBQUEsRUFBQTtBQUNMLFVBQUE7TUFBSSxDQUFBLENBQUUsTUFBRixDQUFBLEdBQWMsQ0FBQyxDQUFDLElBQUYsQ0FBTyxNQUFQLEVBQWUsQ0FBRSxJQUFGLEVBQVEsVUFBUixFQUFvQixTQUFwQixDQUFmLEVBQWlEO1FBQUUsR0FBQSxFQUFLLFFBQVA7UUFBaUIsS0FBQSxFQUFPO01BQXhCLENBQWpELENBQWQ7TUFDQSxJQUFBLENBQUssVUFBTCxFQUFpQixHQUFBLENBQUksTUFBSixDQUFqQjthQUNDO0lBSEEsQ0FBQSxJQWhDTDs7OztXQXVDRztFQXhDVSxFQXZCYjs7O0VBb0VBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7TUFHdEMsS0FBQSxDQUFNLFVBQU4sRUFBa0IsSUFBQSxHQUFPLENBQUUsUUFBQSxHQUFXLEtBQWIsQ0FBb0IsQ0FBQyxRQUFyQixDQUE4QixDQUE5QixDQUF6QjthQUNBLEtBQUEsQ0FBTSxVQUFOLEVBQWtCLElBQUEsR0FBTyxDQUFFLFFBQUEsR0FBVyxLQUFYLEdBQW1CLE1BQXJCLENBQTZCLENBQUMsUUFBOUIsQ0FBdUMsQ0FBdkMsQ0FBekI7SUFKc0MsQ0FBQSxJQUF4Qzs7QUFwRUEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2RlbW8tZXhlY2EnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuUEFUSCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6cGF0aCdcbiMgIyB7ICQ6IHp4LCBjZDogenhfY2QgfSAgICAgID0gcmVxdWlyZSAnengnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtb19leGVjYSA9IC0+XG4gIHsgcGFyc2VDb21tYW5kU3RyaW5nXG4gICAgZXhlY2FcbiAgICBleGVjYVN5bmNcbiAgICAkIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2V4ZWNhJ1xuICAjIGRlYnVnICfOqV9fXzEnLCBkIGZvciBkIGZyb20gYXdhaXQgZXhlY2FcInRyYXNoIG5vc3VjaGZpbGVcIlxuICByZWZfcGF0aCAgICA9IFBBVEgucmVzb2x2ZSBfX2Rpcm5hbWUsICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1maWxlbWlycm9yJ1xuICBjb3VudCAgICAgICA9IDBcbiAgIyBmb3IgYXdhaXQgbGluZSBmcm9tICggZXhlY2EgeyBjd2Q6ICcvaG9tZS9mbG93L2p6ci9iaW5nLWltYWdlLWNyZWF0b3ItZG93bmxvYWRlcicsIH0gKVwiY2F0IC91c3Ivc2hhcmUvZGljdC9uZ2VybWFuXCJcbiAgZGVidWcgJ86pZHhhX19fMicsICggayBmb3IgayBvZiBleGVjYSApXG4gICMgZGVidWcgJ86pZHhhX19fMycsIEdVWS5wcm9wcy5rZXlzIGV4ZWNhLCB7IHN5bWJvbHM6IHRydWUsIGJ1aWx0aW5zOiB0cnVlLCBoaWRkZW46IHRydWUsIH1cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBhd2FpdCBkbyAtPlxuICAgIGhlbHAgJ86pZHhhX19fNCdcbiAgICBmb3IgYXdhaXQgbGluZSBmcm9tICggZXhlY2EgeyBjd2Q6IHJlZl9wYXRoLCB9IClcImxzIC5cIlxuICAgICAgY291bnQrKzsgYnJlYWsgaWYgY291bnQgPiAxMDAwMFxuICAgICAgaGVscCAnzqlkeGFfX181JywgcnByIGxpbmVcbiAgICA7bnVsbFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGhlbHAgJ86pZHhhX19fNidcbiAgZmlsZV9wYXRoICAgPSAnUkVBRE1FLm1kJ1xuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGRvIC0+XG4gICAgeyBzdGRvdXQsIH0gPSAoICQuc3luYyB7IGN3ZDogcmVmX3BhdGgsIHNoZWxsOiB0cnVlLCBsaW5lczogdHJ1ZSwgfSApXCJzdGF0IC1jICclYSAlQSAlbicgI3tmaWxlX3BhdGh9XCJcbiAgICBpbmZvICfOqWR4YV9fXzcnLCBycHIgc3Rkb3V0XG4gICAgO251bGxcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICBkbyAtPlxuICAgIGNmZyAgICAgICAgID0gWyAnLWMnLCAnJWEgJUEgJW4nLCBmaWxlX3BhdGgsIF1cbiAgICB7IHN0ZG91dCwgfSA9ICggJC5zeW5jIHsgY3dkOiByZWZfcGF0aCwgc2hlbGw6IGZhbHNlLCBsaW5lczogdHJ1ZSwgfSApXCJzdGF0ICN7Y2ZnfVwiXG4gICAgaW5mbyAnzqlkeGFfX184JywgcnByIHN0ZG91dFxuICAgIDtudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZG8gLT5cbiAgICB7IHN0ZG91dCwgfSA9ICQuc3luYyAnc3RhdCcsIFsgJy1jJywgJyVhICVBICVuJywgZmlsZV9wYXRoLCBdLCB7IGN3ZDogcmVmX3BhdGgsIGxpbmVzOiB0cnVlLCB9XG4gICAgaW5mbyAnzqlkeGFfX185JywgcnByIHN0ZG91dFxuICAgIDtudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyBhd2FpdCBleGVjYSh7ZGV0YWNoZWQ6IHRydWV9KWBucG0gcnVuIHN0YXJ0YDtcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICA7bnVsbFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBhd2FpdCBkZW1vX2V4ZWNhKClcblxuICBkZWJ1ZyAnzqlkeGFfXzEwJywgJzBvJyArICggMG8xMDA2NjQgJiAweDFmZiApLnRvU3RyaW5nIDhcbiAgZGVidWcgJ86pZHhhX18xMCcsICcwbycgKyAoIDBvMTAwNjY0ICYgMHgxZmYgJiAweDAxMDAgKS50b1N0cmluZyA4XG4iXX0=
