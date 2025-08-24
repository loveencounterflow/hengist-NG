(async function() {
  'use strict';
  var C, GTNG, GUY, SFMODULES, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('mirror-github-file-to-local'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  ({
    ansi_colors_and_effects: C
  } = SFMODULES.require_ansi_colors_and_effects());

  //###########################################################################################################

  //===========================================================================================================
  this.mirror_file_tasks = {
    //=========================================================================================================
    basics: function() {
      var bg_color, color, command, disposition, error, fmt, i, len, match, match_line, p1, p1_name, pattern_name, patterns, position, prefix, probe, probes, slash, suffix, system_eoi, user_eoi;
      patterns = {
        insert_replace: /^(?<prefix>.*?)<<<(?<slash>\/?)(?<command>insert|replace)\x20+((?<position>below|above)\x20+)?(src\s*=\s*)?(?<p1>(?:(?:'(?:\\'|[^'])+')|(?:"(?:\\"|[^"])+")|(?:\$[a-zA-Z0-9]+)))>(?<user_eoi>[^>]*)>(?<system_eoi>[^>]*)>(?<suffix>.*?)$/, // insert JS identifier pattern
        publish: /^(?<prefix>.*?)<<<(?<slash>\/?)(?<command>publish)\x20+((?<disposition>one|enclosed)\x20+)?((?<position>below|above)\x20+)?(as\s*=\s*)?(?<p1>(?:(?:'\#(?:\\'|[^'])+')|(?:"\#(?:\\"|[^"])+")))>(?<user_eoi>[^>]*)>(?<system_eoi>[^>]*)>(?<suffix>.*?)$/,
        generic: /^(?<prefix>.*?)<<<(?<slash>\/?)(?<p1>.*?)>(?<user_eoi>[^>]*)>(?<system_eoi>[^>]*)>(?<suffix>.*?)$/
      };
      //.......................................................................................................
      probes = [
        /* insert: */
        `<<<insert below 'brackets.txt'>>>`,
        `<<<insert below 'brackets.txt'>USER>>`,
        `<!-- <<</insert 'brackets.txt'>>SYSTEM> -->`,
        `<!-- <<</insert below 'brackets.txt'>>SYSTEM> -->`,
        `<!-- <<</insert below 'my brackets.txt'>>SYSTEM> -->`,
        `<!-- <<</insert below "my brackets.txt">>SYSTEM> -->`,
        `<!-- <<</insert below "my \\" brackets.txt">>SYSTEM> -->`,
        `<!-- <<</insert below 'my \\> brackets.txt'>>SYSTEM> -->`,
        `<!-- <<</insert below 'my > brackets.txt'>>SYSTEM> -->`,
        `<!-- <<</insert below $brackets>>SYSTEM> -->`,
        `<!-- <<</insert below src=$brackets>>> -->`,
        `# <<<insert $brackets>>>`,
        //.....................................................................................................
        /* replace: */
        `# <<<replace above $header>>>`,
        `# <<<replace below $footer>>>`,
        //.....................................................................................................
        /* publish: */
        `# <<<publish '#myname'>>>`,
        `# <<<publish as='#myname'>>>`,
        `# <<<publish above as='#myname'>>>`,
        `# <<<publish enclosed above as='#myname'>>>`,
        `# <<<publish below as='#myname'>>>`,
        `# <<<publish one below as='#myname'>>>`,
        `# <<<publish enclosed below as='#myname'>>>`,
        `# <<<publish enclosed as='#myname'>>>`,
        `# <<</publish enclosed as='#myname'>>>`,
        `# <<<publish enclosed '#myname'>>>`,
        `# <<<publish one '#myname'>>>`,
        `<!--<<<publish enclosed as='#id'>>>-->`,
        //.....................................................................................................
        /* generic: */
        `<!-- <<</insert below "my " brackets.txt">>SYSTEM> -->`,
        `# <<<publish enclosed #myname>>>`,
        `# <<<publish enclosed as=#myname>>>`,
        `# <<<>>>`,
        `# <<< >>>`,
        `# <<<<>>>`,
        `# <<<<<<>>>>>`,
        `<<<publish enclosed as=<name>>>>`,
        `<!--<<<publish enclosed as=<name>>>-->`,
        //.....................................................................................................
        /* no match: */
        ''
      ];
      //.......................................................................................................
      color = C.black;
      bg_color = C.bg_gainsboro;
      error = `${C.bg_pink} no match ${color + bg_color}`;
      fmt = function(x) {
        switch (x) {
          case '':
            return '';
          case void 0:
            return '';
          case error:
            return x;
          default:
            return rpr(x);
        }
      };
      match_line = function(text) {
        var match, pattern, pattern_name;
        for (pattern_name in patterns) {
          pattern = patterns[pattern_name];
          if ((match = probe.match(pattern)) != null) {
            return {pattern_name, match};
          }
        }
        return {
          pattern_name: null,
          match: null
        };
      };
      for (i = 0, len = probes.length; i < len; i++) {
        probe = probes[i];
        // urge 'Ωmf___3', rpr probe
        ({pattern_name, match} = match_line(probe));
        if (match != null) {
          ({prefix, slash, command, disposition, position, p1, user_eoi, system_eoi, suffix} = match.groups);
        } else {
          prefix = error;
          slash = '';
          command = '';
          disposition = '';
          position = '';
          p1 = '';
          user_eoi = '';
          system_eoi = '';
          suffix = '';
        }
        p1_name = {
          insert_replace: 'src',
          publish: 'id',
          generic: 'inner',
          no_match: ''
        }[pattern_name != null ? pattern_name : 'no_match'];
        if (p1_name !== '') {
          p1_name = p1_name + ':';
        }
        echo(f`${color + bg_color}│${C.overline}${fmt(pattern_name)}:<20c;│${fmt(prefix)}:<10c;│${fmt(slash)}:<10c;│${fmt(command)}:<10c;│${fmt(disposition)}:<10c;│${fmt(position)}:<10c;│${p1_name}:<10c;${fmt(p1)}:<40c;│${fmt(user_eoi)}:<10c;│${fmt(system_eoi)}:<10c;│${fmt(suffix)}:<10c;${C.overline0}│${C.default + C.bg_default}`);
      }
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      return (new Test(guytest_cfg)).test(this.mirror_file_tasks);
    })();
  }

  // ( new Test guytest_cfg ).test @mirror_file_tasks.builtins

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQiw2QkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSw2Q0FBUjs7RUFDNUIsQ0FBQTtJQUFFLHVCQUFBLEVBQXlCO0VBQTNCLENBQUEsR0FBa0MsU0FBUyxDQUFDLCtCQUFWLENBQUEsQ0FBbEMsRUF0QkE7Ozs7O0VBNEJBLElBQUMsQ0FBQSxpQkFBRCxHQUdFLENBQUE7O0lBQUEsTUFBQSxFQUFRLFFBQUEsQ0FBQSxDQUFB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QSxDQUFxUCxHQUFBLENBQUksTUFBSixDQUFyUCxDQUFBLE1BQUEsQ0FBQSxDQUF3USxDQUFDLENBQUMsU0FBMVEsQ0FBQSxDQUFBLENBQUEsQ0FBdVIsQ0FBQyxDQUFDLE9BQUYsR0FBVSxDQUFDLENBQUMsVUFBblMsQ0FBQSxDQUFOO01BekJGLENBMUhKOztBQXFKSSxhQUFPO0lBdEpEO0VBQVIsRUEvQkY7OztFQTBMQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7YUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLElBQUMsQ0FBQSxpQkFBL0I7SUFIc0MsQ0FBQSxJQUF4Qzs7O0VBMUxBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ21pcnJvci1naXRodWItZmlsZS10by1sb2NhbCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcbnsgYW5zaV9jb2xvcnNfYW5kX2VmZmVjdHM6IEMsIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9hbnNpX2NvbG9yc19hbmRfZWZmZWN0cygpXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBtaXJyb3JfZmlsZV90YXNrcyA9XG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBiYXNpY3M6IC0+XG4gICAgcGF0dGVybnMgPVxuICAgICAgaW5zZXJ0X3JlcGxhY2U6IC8vLyBeXG4gICAgICAgICg/PHByZWZpeD4gLio/IClcbiAgICAgICAgPFxuICAgICAgICA8XG4gICAgICAgIDxcbiAgICAgICAgKD88c2xhc2g+IFxcLz8gKVxuICAgICAgICAoPzxjb21tYW5kPiBpbnNlcnQgfCByZXBsYWNlIClcbiAgICAgICAgXFx4MjArXG4gICAgICAgICggKD88cG9zaXRpb24+IGJlbG93IHwgYWJvdmUgKSBcXHgyMCsgKT9cbiAgICAgICAgKHNyY1xccyo9XFxzKik/KD88cDE+XG4gICAgICAgICAgKD86XG4gICAgICAgICAgICAoPzogJyAoPzogXFxcXCcgfCBbXiAnIF0gICkrICcgKSB8XG4gICAgICAgICAgICAoPzogXCIgKD86IFxcXFxcIiB8IFteIFwiIF0gICkrIFwiICkgfFxuICAgICAgICAgICAgKD86IFxcJCBbYS16QS1aMC05XSsgICAgICAgICAgKSAjIGluc2VydCBKUyBpZGVudGlmaWVyIHBhdHRlcm5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgID5cbiAgICAgICAgKD88dXNlcl9lb2k+IFteID4gXSogKVxuICAgICAgICA+XG4gICAgICAgICg/PHN5c3RlbV9lb2k+IFteID4gXSogKVxuICAgICAgICA+XG4gICAgICAgICg/PHN1ZmZpeD4gLio/IClcbiAgICAgICAgJCAvLy9cbiAgICAgIHB1Ymxpc2g6IC8vLyBeXG4gICAgICAgICg/PHByZWZpeD4gLio/IClcbiAgICAgICAgPFxuICAgICAgICA8XG4gICAgICAgIDxcbiAgICAgICAgKD88c2xhc2g+IFxcLz8gKVxuICAgICAgICAoPzxjb21tYW5kPiBwdWJsaXNoIClcbiAgICAgICAgXFx4MjArXG4gICAgICAgICggKD88ZGlzcG9zaXRpb24+IG9uZSAgIHwgZW5jbG9zZWQgICkgXFx4MjArICk/XG4gICAgICAgICggKD88cG9zaXRpb24+ICAgIGJlbG93IHwgYWJvdmUgICAgICkgXFx4MjArICk/XG4gICAgICAgIChhc1xccyo9XFxzKik/KD88cDE+XG4gICAgICAgICAgKD86XG4gICAgICAgICAgICAoPzogJyBcXCMgKD86IFxcXFwnIHwgW14gJyBdICApKyAnICkgfFxuICAgICAgICAgICAgKD86IFwiIFxcIyAoPzogXFxcXFwiIHwgW14gXCIgXSAgKSsgXCIgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgPlxuICAgICAgICAoPzx1c2VyX2VvaT4gW14gPiBdKiApXG4gICAgICAgID5cbiAgICAgICAgKD88c3lzdGVtX2VvaT4gW14gPiBdKiApXG4gICAgICAgID5cbiAgICAgICAgKD88c3VmZml4PiAuKj8gKVxuICAgICAgICAkIC8vL1xuICAgICAgZ2VuZXJpYzogLy8vIF5cbiAgICAgICAgKD88cHJlZml4PiAuKj8gKVxuICAgICAgICA8XG4gICAgICAgIDxcbiAgICAgICAgPFxuICAgICAgICAoPzxzbGFzaD4gXFwvPyApXG4gICAgICAgICg/PHAxPiAuKj8gKVxuICAgICAgICA+XG4gICAgICAgICg/PHVzZXJfZW9pPiBbXiA+IF0qIClcbiAgICAgICAgPlxuICAgICAgICAoPzxzeXN0ZW1fZW9pPiBbXiA+IF0qIClcbiAgICAgICAgPlxuICAgICAgICAoPzxzdWZmaXg+IC4qPyApXG4gICAgICAgICQgLy8vXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXMgPSBbXG4gICAgICAjIyMgaW5zZXJ0OiAjIyNcbiAgICAgIFwiXCJcIjw8PGluc2VydCBiZWxvdyAnYnJhY2tldHMudHh0Jz4+PlwiXCJcIlxuICAgICAgXCJcIlwiPDw8aW5zZXJ0IGJlbG93ICdicmFja2V0cy50eHQnPlVTRVI+PlwiXCJcIlxuICAgICAgXCJcIlwiPCEtLSA8PDwvaW5zZXJ0ICdicmFja2V0cy50eHQnPj5TWVNURU0+IC0tPlwiXCJcIlxuICAgICAgXCJcIlwiPCEtLSA8PDwvaW5zZXJ0IGJlbG93ICdicmFja2V0cy50eHQnPj5TWVNURU0+IC0tPlwiXCJcIlxuICAgICAgXCJcIlwiPCEtLSA8PDwvaW5zZXJ0IGJlbG93ICdteSBicmFja2V0cy50eHQnPj5TWVNURU0+IC0tPlwiXCJcIlxuICAgICAgXCJcIlwiPCEtLSA8PDwvaW5zZXJ0IGJlbG93IFwibXkgYnJhY2tldHMudHh0XCI+PlNZU1RFTT4gLS0+XCJcIlwiXG4gICAgICBcIlwiXCI8IS0tIDw8PC9pbnNlcnQgYmVsb3cgXCJteSBcXFxcXCIgYnJhY2tldHMudHh0XCI+PlNZU1RFTT4gLS0+XCJcIlwiXG4gICAgICBcIlwiXCI8IS0tIDw8PC9pbnNlcnQgYmVsb3cgJ215IFxcXFw+IGJyYWNrZXRzLnR4dCc+PlNZU1RFTT4gLS0+XCJcIlwiXG4gICAgICBcIlwiXCI8IS0tIDw8PC9pbnNlcnQgYmVsb3cgJ215ID4gYnJhY2tldHMudHh0Jz4+U1lTVEVNPiAtLT5cIlwiXCJcbiAgICAgIFwiXCJcIjwhLS0gPDw8L2luc2VydCBiZWxvdyAkYnJhY2tldHM+PlNZU1RFTT4gLS0+XCJcIlwiXG4gICAgICBcIlwiXCI8IS0tIDw8PC9pbnNlcnQgYmVsb3cgc3JjPSRicmFja2V0cz4+PiAtLT5cIlwiXCJcbiAgICAgIFwiXCJcIiMgPDw8aW5zZXJ0ICRicmFja2V0cz4+PlwiXCJcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIyMgcmVwbGFjZTogIyMjXG4gICAgICBcIlwiXCIjIDw8PHJlcGxhY2UgYWJvdmUgJGhlYWRlcj4+PlwiXCJcIlxuICAgICAgXCJcIlwiIyA8PDxyZXBsYWNlIGJlbG93ICRmb290ZXI+Pj5cIlwiXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyMjIHB1Ymxpc2g6ICMjI1xuICAgICAgXCJcIlwiIyA8PDxwdWJsaXNoICcjbXluYW1lJz4+PlwiXCJcIlxuICAgICAgXCJcIlwiIyA8PDxwdWJsaXNoIGFzPScjbXluYW1lJz4+PlwiXCJcIlxuICAgICAgXCJcIlwiIyA8PDxwdWJsaXNoIGFib3ZlIGFzPScjbXluYW1lJz4+PlwiXCJcIlxuICAgICAgXCJcIlwiIyA8PDxwdWJsaXNoIGVuY2xvc2VkIGFib3ZlIGFzPScjbXluYW1lJz4+PlwiXCJcIlxuICAgICAgXCJcIlwiIyA8PDxwdWJsaXNoIGJlbG93IGFzPScjbXluYW1lJz4+PlwiXCJcIlxuICAgICAgXCJcIlwiIyA8PDxwdWJsaXNoIG9uZSBiZWxvdyBhcz0nI215bmFtZSc+Pj5cIlwiXCJcbiAgICAgIFwiXCJcIiMgPDw8cHVibGlzaCBlbmNsb3NlZCBiZWxvdyBhcz0nI215bmFtZSc+Pj5cIlwiXCJcbiAgICAgIFwiXCJcIiMgPDw8cHVibGlzaCBlbmNsb3NlZCBhcz0nI215bmFtZSc+Pj5cIlwiXCJcbiAgICAgIFwiXCJcIiMgPDw8L3B1Ymxpc2ggZW5jbG9zZWQgYXM9JyNteW5hbWUnPj4+XCJcIlwiXG4gICAgICBcIlwiXCIjIDw8PHB1Ymxpc2ggZW5jbG9zZWQgJyNteW5hbWUnPj4+XCJcIlwiXG4gICAgICBcIlwiXCIjIDw8PHB1Ymxpc2ggb25lICcjbXluYW1lJz4+PlwiXCJcIlxuICAgICAgXCJcIlwiPCEtLTw8PHB1Ymxpc2ggZW5jbG9zZWQgYXM9JyNpZCc+Pj4tLT5cIlwiXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyMjIGdlbmVyaWM6ICMjI1xuICAgICAgXCJcIlwiPCEtLSA8PDwvaW5zZXJ0IGJlbG93IFwibXkgXCIgYnJhY2tldHMudHh0XCI+PlNZU1RFTT4gLS0+XCJcIlwiXG4gICAgICBcIlwiXCIjIDw8PHB1Ymxpc2ggZW5jbG9zZWQgI215bmFtZT4+PlwiXCJcIlxuICAgICAgXCJcIlwiIyA8PDxwdWJsaXNoIGVuY2xvc2VkIGFzPSNteW5hbWU+Pj5cIlwiXCJcbiAgICAgIFwiXCJcIiMgPDw8Pj4+XCJcIlwiXG4gICAgICBcIlwiXCIjIDw8PCA+Pj5cIlwiXCJcbiAgICAgIFwiXCJcIiMgPDw8PD4+PlwiXCJcIlxuICAgICAgXCJcIlwiIyA8PDw8PDw+Pj4+PlwiXCJcIlxuICAgICAgXCJcIlwiPDw8cHVibGlzaCBlbmNsb3NlZCBhcz08bmFtZT4+Pj5cIlwiXCJcbiAgICAgIFwiXCJcIjwhLS08PDxwdWJsaXNoIGVuY2xvc2VkIGFzPTxuYW1lPj4+LS0+XCJcIlwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMjIyBubyBtYXRjaDogIyMjXG4gICAgICAnJ1xuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY29sb3IgICAgID0gQy5ibGFja1xuICAgIGJnX2NvbG9yICA9IEMuYmdfZ2FpbnNib3JvXG4gICAgZXJyb3IgICAgID0gXCIje0MuYmdfcGlua30gbm8gbWF0Y2ggI3tjb2xvcitiZ19jb2xvcn1cIlxuICAgIGZtdCAgICAgICA9ICggeCApIC0+IHN3aXRjaCB4XG4gICAgICB3aGVuICcnICAgICAgICAgdGhlbiAgJydcbiAgICAgIHdoZW4gdW5kZWZpbmVkICB0aGVuICAnJ1xuICAgICAgd2hlbiBlcnJvciAgICAgIHRoZW4gIHhcbiAgICAgIGVsc2UgICAgICAgICAgICAgICAgICBycHIgeFxuICAgIG1hdGNoX2xpbmUgPSAoIHRleHQgKSAtPlxuICAgICAgZm9yIHBhdHRlcm5fbmFtZSwgcGF0dGVybiBvZiBwYXR0ZXJuc1xuICAgICAgICByZXR1cm4geyBwYXR0ZXJuX25hbWUsIG1hdGNoLCB9IGlmICggbWF0Y2ggPSBwcm9iZS5tYXRjaCBwYXR0ZXJuICk/XG4gICAgICByZXR1cm4geyBwYXR0ZXJuX25hbWU6IG51bGwsIG1hdGNoOiBudWxsLCB9XG4gICAgZm9yIHByb2JlIGluIHByb2Jlc1xuICAgICAgIyB1cmdlICfOqW1mX19fMycsIHJwciBwcm9iZVxuICAgICAgeyBwYXR0ZXJuX25hbWUsIG1hdGNoLCB9ID0gbWF0Y2hfbGluZSBwcm9iZVxuICAgICAgaWYgbWF0Y2g/XG4gICAgICAgIHsgcHJlZml4LFxuICAgICAgICAgIHNsYXNoLFxuICAgICAgICAgIGNvbW1hbmQsXG4gICAgICAgICAgZGlzcG9zaXRpb24sXG4gICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgcDEsXG4gICAgICAgICAgdXNlcl9lb2ksXG4gICAgICAgICAgc3lzdGVtX2VvaSxcbiAgICAgICAgICBzdWZmaXgsICAgICB9ID0gbWF0Y2guZ3JvdXBzXG4gICAgICBlbHNlXG4gICAgICAgIHByZWZpeCAgICAgID0gZXJyb3JcbiAgICAgICAgc2xhc2ggICAgICAgPSAnJ1xuICAgICAgICBjb21tYW5kICAgICA9ICcnXG4gICAgICAgIGRpc3Bvc2l0aW9uID0gJydcbiAgICAgICAgcG9zaXRpb24gICAgPSAnJ1xuICAgICAgICBwMSAgICAgICAgICA9ICcnXG4gICAgICAgIHVzZXJfZW9pICAgID0gJydcbiAgICAgICAgc3lzdGVtX2VvaSAgPSAnJ1xuICAgICAgICBzdWZmaXggICAgICA9ICcnXG4gICAgICBwMV9uYW1lID0geyBpbnNlcnRfcmVwbGFjZTogJ3NyYycsIHB1Ymxpc2g6ICdpZCcsIGdlbmVyaWM6ICdpbm5lcicsIG5vX21hdGNoOiAnJywgfVsgcGF0dGVybl9uYW1lID8gJ25vX21hdGNoJyBdXG4gICAgICBwMV9uYW1lID0gcDFfbmFtZSArICc6JyB1bmxlc3MgcDFfbmFtZSBpcyAnJ1xuICAgICAgZWNobyBmXCIje2NvbG9yK2JnX2NvbG9yfeKUgiN7Qy5vdmVybGluZX0je2ZtdCBwYXR0ZXJuX25hbWV9OjwyMGM74pSCI3tmbXQgcHJlZml4fTo8MTBjO+KUgiN7Zm10IHNsYXNofTo8MTBjO+KUgiN7Zm10IGNvbW1hbmR9OjwxMGM74pSCI3tmbXQgZGlzcG9zaXRpb259OjwxMGM74pSCI3tmbXQgcG9zaXRpb259OjwxMGM74pSCI3twMV9uYW1lfTo8MTBjOyN7Zm10IHAxfTo8NDBjO+KUgiN7Zm10IHVzZXJfZW9pfTo8MTBjO+KUgiN7Zm10IHN5c3RlbV9lb2l9OjwxMGM74pSCI3tmbXQgc3VmZml4fTo8MTBjOyN7Qy5vdmVybGluZTB94pSCI3tDLmRlZmF1bHQrQy5iZ19kZWZhdWx0fVwiXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQG1pcnJvcl9maWxlX3Rhc2tzXG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQG1pcnJvcl9maWxlX3Rhc2tzLmJ1aWx0aW5zXG4iXX0=
//# sourceURL=../src/test-basics.coffee