(function() {
  'use strict';
  var GUY, SFMODULES, alert, bold, capture_requires, debug, echo, f, help, info, inspect, log, plain, praise, red, reverse, rpr, show_requires, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-show-requires'));

  ({rpr, inspect, echo, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  //=========================================================================================================
  /* NOTE Future Single-File Module */
  show_requires = function(module_path) {
    var FS, PATH, exit_handler, folder_path, glob, has_local, i, is_local, len, line, lnr, local_requires, match, message, module_spec, path, paths, pattern, walk_lines_with_positions, x;
    PATH = require('node:path');
    FS = require('node:fs');
    glob = require('glob');
    ({walk_lines_with_positions} = SFMODULES.unstable.require_fast_linereader());
    folder_path = PATH.dirname(require.resolve(module_path));
    pattern = PATH.join(folder_path, '../src/*.coffee');
    paths = glob.sync(PATH.join(pattern));
    has_local = false;
    local_requires = [];
    for (i = 0, len = paths.length; i < len; i++) {
      path = paths[i];
      for (x of walk_lines_with_positions(path)) {
        ({lnr, line} = x);
        if ((match = line.match(/require\s+'(?<module_spec>.*)'\s*$/v)) == null) {
          continue;
        }
        ({module_spec} = match.groups);
        is_local = /^(\.\.\/|\/)/v.test(module_spec);
        has_local || (has_local = is_local);
        message = f`${path}:<70c; ${lnr}:>3.0f; ${rpr(module_spec)}`;
        if (is_local) {
          // color             = if is_local then GUY.trm.gold else GUY.trm.grey
          // info 'Ωhllt_168', color message
          local_requires.push(message);
        }
      }
    }
    if (has_local) {
      exit_handler = function() {
        var j, len1, results;
        process.exitCode = 111;
        warn();
        warn(red(reverse(bold("Ωhllt_169 there are local requires:"))));
        results = [];
        for (j = 0, len1 = local_requires.length; j < len1; j++) {
          message = local_requires[j];
          results.push(warn('Ωhllt_170', GUY.trm.gold(message)));
        }
        return results;
      };
      process.once('uncaughtException', exit_handler);
      process.once('unhandledRejection', exit_handler);
      process.once('exit', exit_handler);
    }
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  capture_requires = function() {
    var get_app_details, get_bricabrac_cfg, get_callsite, get_callsite_path, i, js_handler, key, len, ref, require_from_app_folder, results, seen;
    ({get_callsite, get_callsite_path} = SFMODULES.unstable.require_get_callsite());
    ({get_app_details, require_from_app_folder, get_bricabrac_cfg} = SFMODULES.unstable.require_get_app_details());
    js_handler = require.extensions['.js'];
    //.........................................................................................................
    seen = new Set();
    require.extensions['.js'] = function(...P) {
      var app_details, callsite, delta, i, identifier, name_version;
      urge('Ωhllt_171', P[0].id);
      for (delta = i = 1; i <= 20; delta = ++i) {
        if ((callsite = get_callsite({delta})) == null) {
          break;
        }
        if (callsite.scriptName.startsWith('node:')) {
          continue;
        }
        app_details = get_app_details({delta});
        name_version = `${app_details.name}@${app_details.version}`;
        identifier = `${callsite.scriptName} -- ${name_version}`;
        if (seen.has(identifier)) {
          continue;
        }
        seen.add(identifier);
        info('Ωhllt_179', delta, identifier);
      }
      return js_handler(...P);
    };
    ref = Object.keys(require.cache);
    //.........................................................................................................
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      key = ref[i];
      if (!((key.indexOf('hollerith')) > -1)) {
        continue;
      }
      // debug 'Ωhllt_108', key
      results.push(delete require.cache[key]);
    }
    return results;
  };

  Object.assign(module.exports, {show_requires, capture_requires});

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tc2hvdy1yZXF1aXJlcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBQTtBQUFBLE1BQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLGdCQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsYUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixvQkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEdBSEYsRUFJRSxJQUpGLEVBS0UsT0FMRixFQU1FLEdBTkYsQ0FBQSxHQU00QixHQUFHLENBQUMsR0FOaEM7O0VBT0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsbUNBQVIsRUFwQjVCOzs7O0VBMEJBLGFBQUEsR0FBZ0IsUUFBQSxDQUFFLFdBQUYsQ0FBQTtBQUNoQixRQUFBLEVBQUEsRUFBQSxJQUFBLEVBQUEsWUFBQSxFQUFBLFdBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLENBQUEsRUFBQSxRQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsY0FBQSxFQUFBLEtBQUEsRUFB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LEVBQUEsVUFBQSxFQUFBO01BQUksSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFFLENBQUYsQ0FBSyxDQUFDLEVBQXpCO01BQ0EsS0FBYSxtQ0FBYjtRQUNFLElBQWEsMENBQWI7QUFBQSxnQkFBQTs7UUFDQSxJQUFZLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBcEIsQ0FBK0IsT0FBL0IsQ0FBWjtBQUFBLG1CQUFBOztRQUNBLFdBQUEsR0FBZ0IsZUFBQSxDQUFnQixDQUFFLEtBQUYsQ0FBaEI7UUFDaEIsWUFBQSxHQUFnQixDQUFBLENBQUEsQ0FBRyxXQUFXLENBQUMsSUFBZixDQUFBLENBQUEsQ0FBQSxDQUF1QixXQUFXLENBQUMsT0FBbkMsQ0FBQTtRQUNoQixVQUFBLEdBQWdCLENBQUEsQ0FBQSxDQUFHLFFBQVEsQ0FBQyxVQUFaLENBQUEsSUFBQSxDQUFBLENBQTZCLFlBQTdCLENBQUE7UUFDaEIsSUFBWSxJQUFJLENBQUMsR0FBTCxDQUFTLFVBQVQsQ0FBWjtBQUFBLG1CQUFBOztRQUNBLElBQUksQ0FBQyxHQUFMLENBQVMsVUFBVDtRQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEtBQWxCLEVBQXlCLFVBQXpCO01BUkY7QUFTQSxhQUFPLFVBQUEsQ0FBVyxHQUFBLENBQVg7SUFYcUI7QUFhOUI7O0FBQUE7SUFBQSxLQUFBLHFDQUFBOztNQUNFLE1BQWdCLENBQUUsR0FBRyxDQUFDLE9BQUosQ0FBWSxXQUFaLENBQUYsQ0FBQSxHQUE4QixDQUFDLEVBQS9DO0FBQUEsaUJBQUE7T0FBSjs7bUJBRUksT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFFLEdBQUY7SUFIdEIsQ0FBQTs7RUF0QmlCOztFQTJCbkIsTUFBTSxDQUFDLE1BQVAsQ0FBYyxNQUFNLENBQUMsT0FBckIsRUFBOEIsQ0FBRSxhQUFGLEVBQWlCLGdCQUFqQixDQUE5QjtBQXRGQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2RlbW8tc2hvdy1yZXF1aXJlcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiMjIyBOT1RFIEZ1dHVyZSBTaW5nbGUtRmlsZSBNb2R1bGUgIyMjXG5zaG93X3JlcXVpcmVzID0gKCBtb2R1bGVfcGF0aCApIC0+XG4gIFBBVEggICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG4gIEZTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xuICBnbG9iICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ2xvYidcbiAgeyB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zLCAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2Zhc3RfbGluZXJlYWRlcigpXG4gIGZvbGRlcl9wYXRoICAgICAgICAgICAgICAgICAgICAgPSBQQVRILmRpcm5hbWUgcmVxdWlyZS5yZXNvbHZlIG1vZHVsZV9wYXRoXG4gIHBhdHRlcm4gICAgICAgICAgICAgICAgICAgICAgICAgPSBQQVRILmpvaW4gZm9sZGVyX3BhdGgsICcuLi9zcmMvKi5jb2ZmZWUnXG4gIHBhdGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBnbG9iLnN5bmMgUEFUSC5qb2luIHBhdHRlcm5cbiAgaGFzX2xvY2FsICAgICAgICAgICAgICAgICAgICAgICA9IGZhbHNlXG4gIGxvY2FsX3JlcXVpcmVzICAgICAgICAgICAgICAgICAgPSBbXVxuICBmb3IgcGF0aCBpbiBwYXRoc1xuICAgIGZvciB7IGxuciwgbGluZSwgfSBmcm9tIHdhbGtfbGluZXNfd2l0aF9wb3NpdGlvbnMgcGF0aFxuICAgICAgY29udGludWUgdW5sZXNzICggbWF0Y2ggPSBsaW5lLm1hdGNoIC9yZXF1aXJlXFxzKycoPzxtb2R1bGVfc3BlYz4uKiknXFxzKiQvdiApP1xuICAgICAgeyBtb2R1bGVfc3BlYywgfSAgPSBtYXRjaC5ncm91cHNcbiAgICAgIGlzX2xvY2FsICAgICAgICAgID0gL14oXFwuXFwuXFwvfFxcLykvdi50ZXN0IG1vZHVsZV9zcGVjXG4gICAgICBoYXNfbG9jYWwgICAgICAgb3I9IGlzX2xvY2FsXG4gICAgICBtZXNzYWdlICAgICAgICAgICA9IGZcIiN7cGF0aH06PDcwYzsgI3tsbnJ9Oj4zLjBmOyAje3JwciBtb2R1bGVfc3BlY31cIlxuICAgICAgIyBjb2xvciAgICAgICAgICAgICA9IGlmIGlzX2xvY2FsIHRoZW4gR1VZLnRybS5nb2xkIGVsc2UgR1VZLnRybS5ncmV5XG4gICAgICAjIGluZm8gJ86paGxsdF8xNjgnLCBjb2xvciBtZXNzYWdlXG4gICAgICBsb2NhbF9yZXF1aXJlcy5wdXNoIG1lc3NhZ2UgaWYgaXNfbG9jYWxcbiAgaWYgaGFzX2xvY2FsXG4gICAgZXhpdF9oYW5kbGVyID0gLT5cbiAgICAgIHByb2Nlc3MuZXhpdENvZGUgPSAxMTFcbiAgICAgIHdhcm4oKVxuICAgICAgd2FybiByZWQgcmV2ZXJzZSBib2xkIFwizqlobGx0XzE2OSB0aGVyZSBhcmUgbG9jYWwgcmVxdWlyZXM6XCJcbiAgICAgIGZvciBtZXNzYWdlIGluIGxvY2FsX3JlcXVpcmVzXG4gICAgICAgIHdhcm4gJ86paGxsdF8xNzAnLCBHVVkudHJtLmdvbGQgbWVzc2FnZVxuICAgIHByb2Nlc3Mub25jZSAndW5jYXVnaHRFeGNlcHRpb24nLCAgIGV4aXRfaGFuZGxlclxuICAgIHByb2Nlc3Mub25jZSAndW5oYW5kbGVkUmVqZWN0aW9uJywgIGV4aXRfaGFuZGxlclxuICAgIHByb2Nlc3Mub25jZSAnZXhpdCcsICAgICAgICAgICAgICAgIGV4aXRfaGFuZGxlclxuICByZXR1cm4gbnVsbFxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNhcHR1cmVfcmVxdWlyZXMgPSAtPlxuICB7IGdldF9jYWxsc2l0ZSxcbiAgICBnZXRfY2FsbHNpdGVfcGF0aCwgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfY2FsbHNpdGUoKVxuICB7IGdldF9hcHBfZGV0YWlscyxcbiAgICByZXF1aXJlX2Zyb21fYXBwX2ZvbGRlcixcbiAgICBnZXRfYnJpY2FicmFjX2NmZywgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9nZXRfYXBwX2RldGFpbHMoKVxuICBqc19oYW5kbGVyID0gcmVxdWlyZS5leHRlbnNpb25zWyAnLmpzJyBdXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgc2VlbiA9IG5ldyBTZXQoKVxuICByZXF1aXJlLmV4dGVuc2lvbnNbICcuanMnIF0gPSAoIFAuLi4gKSAtPlxuICAgIHVyZ2UgJ86paGxsdF8xNzEnLCBQWyAwIF0uaWRcbiAgICBmb3IgZGVsdGEgaW4gWyAxIC4uIDIwIF1cbiAgICAgIGJyZWFrIHVubGVzcyAoIGNhbGxzaXRlID0gZ2V0X2NhbGxzaXRlIHsgZGVsdGEsIH0gKT9cbiAgICAgIGNvbnRpbnVlIGlmIGNhbGxzaXRlLnNjcmlwdE5hbWUuc3RhcnRzV2l0aCAnbm9kZTonXG4gICAgICBhcHBfZGV0YWlscyAgID0gZ2V0X2FwcF9kZXRhaWxzIHsgZGVsdGEsIH1cbiAgICAgIG5hbWVfdmVyc2lvbiAgPSBcIiN7YXBwX2RldGFpbHMubmFtZX1AI3thcHBfZGV0YWlscy52ZXJzaW9ufVwiXG4gICAgICBpZGVudGlmaWVyICAgID0gXCIje2NhbGxzaXRlLnNjcmlwdE5hbWV9IC0tICN7bmFtZV92ZXJzaW9ufVwiXG4gICAgICBjb250aW51ZSBpZiBzZWVuLmhhcyBpZGVudGlmaWVyXG4gICAgICBzZWVuLmFkZCBpZGVudGlmaWVyXG4gICAgICBpbmZvICfOqWhsbHRfMTc5JywgZGVsdGEsIGlkZW50aWZpZXJcbiAgICByZXR1cm4ganNfaGFuZGxlciBQLi4uXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZm9yIGtleSBpbiBPYmplY3Qua2V5cyByZXF1aXJlLmNhY2hlXG4gICAgY29udGludWUgdW5sZXNzICgga2V5LmluZGV4T2YgJ2hvbGxlcml0aCcgKSA+IC0xXG4gICAgIyBkZWJ1ZyAnzqlobGx0XzEwOCcsIGtleVxuICAgIGRlbGV0ZSByZXF1aXJlLmNhY2hlWyBrZXkgXVxuXG5PYmplY3QuYXNzaWduIG1vZHVsZS5leHBvcnRzLCB7IHNob3dfcmVxdWlyZXMsIGNhcHR1cmVfcmVxdWlyZXMsIH0iXX0=
