(function() {
  'use strict';
  var GUY, SFMODULES, alert, bold, capture_requires, debug, echo, f, help, info, inspect, log, plain, praise, red, reverse, rpr, show_requires, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-show-requires'));

  ({rpr, inspect, echo, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tc2hvdy1yZXF1aXJlcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBQTtBQUFBLE1BQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLGdCQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsYUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixvQkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEdBSEYsRUFJRSxJQUpGLEVBS0UsT0FMRixFQU1FLEdBTkYsQ0FBQSxHQU00QixHQUFHLENBQUMsR0FOaEM7O0VBT0EsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUI7O0VBQ0EsU0FBQSxHQUE0QixPQUFBLENBQVEsNkNBQVIsRUFwQjVCOzs7O0VBMEJBLGFBQUEsR0FBZ0IsUUFBQSxDQUFFLFdBQUYsQ0FBQTtBQUNoQixRQUFBLEVBQUEsRUFBQSxJQUFBLEVBQUEsWUFBQSxFQUFBLFdBQUEsRUFBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLENBQUEsRUFBQSxRQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsY0FBQSxFQUFBLEtBQUEsRUFB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LEVBQUEsVUFBQSxFQUFBO01BQUksSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFFLENBQUYsQ0FBSyxDQUFDLEVBQXpCO01BQ0EsS0FBYSxtQ0FBYjtRQUNFLElBQWEsMENBQWI7QUFBQSxnQkFBQTs7UUFDQSxJQUFZLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBcEIsQ0FBK0IsT0FBL0IsQ0FBWjtBQUFBLG1CQUFBOztRQUNBLFdBQUEsR0FBZ0IsZUFBQSxDQUFnQixDQUFFLEtBQUYsQ0FBaEI7UUFDaEIsWUFBQSxHQUFnQixDQUFBLENBQUEsQ0FBRyxXQUFXLENBQUMsSUFBZixDQUFBLENBQUEsQ0FBQSxDQUF1QixXQUFXLENBQUMsT0FBbkMsQ0FBQTtRQUNoQixVQUFBLEdBQWdCLENBQUEsQ0FBQSxDQUFHLFFBQVEsQ0FBQyxVQUFaLENBQUEsSUFBQSxDQUFBLENBQTZCLFlBQTdCLENBQUE7UUFDaEIsSUFBWSxJQUFJLENBQUMsR0FBTCxDQUFTLFVBQVQsQ0FBWjtBQUFBLG1CQUFBOztRQUNBLElBQUksQ0FBQyxHQUFMLENBQVMsVUFBVDtRQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEtBQWxCLEVBQXlCLFVBQXpCO01BUkY7QUFTQSxhQUFPLFVBQUEsQ0FBVyxHQUFBLENBQVg7SUFYcUI7QUFhOUI7O0FBQUE7SUFBQSxLQUFBLHFDQUFBOztNQUNFLE1BQWdCLENBQUUsR0FBRyxDQUFDLE9BQUosQ0FBWSxXQUFaLENBQUYsQ0FBQSxHQUE4QixDQUFDLEVBQS9DO0FBQUEsaUJBQUE7T0FBSjs7bUJBRUksT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFFLEdBQUY7SUFIdEIsQ0FBQTs7RUF0QmlCOztFQTJCbkIsTUFBTSxDQUFDLE1BQVAsQ0FBYyxNQUFNLENBQUMsT0FBckIsRUFBOEIsQ0FBRSxhQUFGLEVBQWlCLGdCQUFqQixDQUE5QjtBQXRGQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2RlbW8tc2hvdy1yZXF1aXJlcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4jIyMgTk9URSBGdXR1cmUgU2luZ2xlLUZpbGUgTW9kdWxlICMjI1xuc2hvd19yZXF1aXJlcyA9ICggbW9kdWxlX3BhdGggKSAtPlxuICBQQVRIICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpwYXRoJ1xuICBGUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcbiAgZ2xvYiAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2dsb2InXG4gIHsgd2Fsa19saW5lc193aXRoX3Bvc2l0aW9ucywgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9mYXN0X2xpbmVyZWFkZXIoKVxuICBmb2xkZXJfcGF0aCAgICAgICAgICAgICAgICAgICAgID0gUEFUSC5kaXJuYW1lIHJlcXVpcmUucmVzb2x2ZSBtb2R1bGVfcGF0aFxuICBwYXR0ZXJuICAgICAgICAgICAgICAgICAgICAgICAgID0gUEFUSC5qb2luIGZvbGRlcl9wYXRoLCAnLi4vc3JjLyouY29mZmVlJ1xuICBwYXRocyAgICAgICAgICAgICAgICAgICAgICAgICAgID0gZ2xvYi5zeW5jIFBBVEguam9pbiBwYXR0ZXJuXG4gIGhhc19sb2NhbCAgICAgICAgICAgICAgICAgICAgICAgPSBmYWxzZVxuICBsb2NhbF9yZXF1aXJlcyAgICAgICAgICAgICAgICAgID0gW11cbiAgZm9yIHBhdGggaW4gcGF0aHNcbiAgICBmb3IgeyBsbnIsIGxpbmUsIH0gZnJvbSB3YWxrX2xpbmVzX3dpdGhfcG9zaXRpb25zIHBhdGhcbiAgICAgIGNvbnRpbnVlIHVubGVzcyAoIG1hdGNoID0gbGluZS5tYXRjaCAvcmVxdWlyZVxccysnKD88bW9kdWxlX3NwZWM+LiopJ1xccyokL3YgKT9cbiAgICAgIHsgbW9kdWxlX3NwZWMsIH0gID0gbWF0Y2guZ3JvdXBzXG4gICAgICBpc19sb2NhbCAgICAgICAgICA9IC9eKFxcLlxcLlxcL3xcXC8pL3YudGVzdCBtb2R1bGVfc3BlY1xuICAgICAgaGFzX2xvY2FsICAgICAgIG9yPSBpc19sb2NhbFxuICAgICAgbWVzc2FnZSAgICAgICAgICAgPSBmXCIje3BhdGh9Ojw3MGM7ICN7bG5yfTo+My4wZjsgI3tycHIgbW9kdWxlX3NwZWN9XCJcbiAgICAgICMgY29sb3IgICAgICAgICAgICAgPSBpZiBpc19sb2NhbCB0aGVuIEdVWS50cm0uZ29sZCBlbHNlIEdVWS50cm0uZ3JleVxuICAgICAgIyBpbmZvICfOqWhsbHRfMTY4JywgY29sb3IgbWVzc2FnZVxuICAgICAgbG9jYWxfcmVxdWlyZXMucHVzaCBtZXNzYWdlIGlmIGlzX2xvY2FsXG4gIGlmIGhhc19sb2NhbFxuICAgIGV4aXRfaGFuZGxlciA9IC0+XG4gICAgICBwcm9jZXNzLmV4aXRDb2RlID0gMTExXG4gICAgICB3YXJuKClcbiAgICAgIHdhcm4gcmVkIHJldmVyc2UgYm9sZCBcIs6paGxsdF8xNjkgdGhlcmUgYXJlIGxvY2FsIHJlcXVpcmVzOlwiXG4gICAgICBmb3IgbWVzc2FnZSBpbiBsb2NhbF9yZXF1aXJlc1xuICAgICAgICB3YXJuICfOqWhsbHRfMTcwJywgR1VZLnRybS5nb2xkIG1lc3NhZ2VcbiAgICBwcm9jZXNzLm9uY2UgJ3VuY2F1Z2h0RXhjZXB0aW9uJywgICBleGl0X2hhbmRsZXJcbiAgICBwcm9jZXNzLm9uY2UgJ3VuaGFuZGxlZFJlamVjdGlvbicsICBleGl0X2hhbmRsZXJcbiAgICBwcm9jZXNzLm9uY2UgJ2V4aXQnLCAgICAgICAgICAgICAgICBleGl0X2hhbmRsZXJcbiAgcmV0dXJuIG51bGxcblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jYXB0dXJlX3JlcXVpcmVzID0gLT5cbiAgeyBnZXRfY2FsbHNpdGUsXG4gICAgZ2V0X2NhbGxzaXRlX3BhdGgsICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X2NhbGxzaXRlKClcbiAgeyBnZXRfYXBwX2RldGFpbHMsXG4gICAgcmVxdWlyZV9mcm9tX2FwcF9mb2xkZXIsXG4gICAgZ2V0X2JyaWNhYnJhY19jZmcsICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfZ2V0X2FwcF9kZXRhaWxzKClcbiAganNfaGFuZGxlciA9IHJlcXVpcmUuZXh0ZW5zaW9uc1sgJy5qcycgXVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHNlZW4gPSBuZXcgU2V0KClcbiAgcmVxdWlyZS5leHRlbnNpb25zWyAnLmpzJyBdID0gKCBQLi4uICkgLT5cbiAgICB1cmdlICfOqWhsbHRfMTcxJywgUFsgMCBdLmlkXG4gICAgZm9yIGRlbHRhIGluIFsgMSAuLiAyMCBdXG4gICAgICBicmVhayB1bmxlc3MgKCBjYWxsc2l0ZSA9IGdldF9jYWxsc2l0ZSB7IGRlbHRhLCB9ICk/XG4gICAgICBjb250aW51ZSBpZiBjYWxsc2l0ZS5zY3JpcHROYW1lLnN0YXJ0c1dpdGggJ25vZGU6J1xuICAgICAgYXBwX2RldGFpbHMgICA9IGdldF9hcHBfZGV0YWlscyB7IGRlbHRhLCB9XG4gICAgICBuYW1lX3ZlcnNpb24gID0gXCIje2FwcF9kZXRhaWxzLm5hbWV9QCN7YXBwX2RldGFpbHMudmVyc2lvbn1cIlxuICAgICAgaWRlbnRpZmllciAgICA9IFwiI3tjYWxsc2l0ZS5zY3JpcHROYW1lfSAtLSAje25hbWVfdmVyc2lvbn1cIlxuICAgICAgY29udGludWUgaWYgc2Vlbi5oYXMgaWRlbnRpZmllclxuICAgICAgc2Vlbi5hZGQgaWRlbnRpZmllclxuICAgICAgaW5mbyAnzqlobGx0XzE3OScsIGRlbHRhLCBpZGVudGlmaWVyXG4gICAgcmV0dXJuIGpzX2hhbmRsZXIgUC4uLlxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGZvciBrZXkgaW4gT2JqZWN0LmtleXMgcmVxdWlyZS5jYWNoZVxuICAgIGNvbnRpbnVlIHVubGVzcyAoIGtleS5pbmRleE9mICdob2xsZXJpdGgnICkgPiAtMVxuICAgICMgZGVidWcgJ86paGxsdF8xMDgnLCBrZXlcbiAgICBkZWxldGUgcmVxdWlyZS5jYWNoZVsga2V5IF1cblxuT2JqZWN0LmFzc2lnbiBtb2R1bGUuZXhwb3J0cywgeyBzaG93X3JlcXVpcmVzLCBjYXB0dXJlX3JlcXVpcmVzLCB9Il19
