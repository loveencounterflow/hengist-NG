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

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQiw2QkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBWkE7OztFQWtCQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSxtQ0FBUjs7RUFDNUIsQ0FBQTtJQUFFLHVCQUFBLEVBQXlCO0VBQTNCLENBQUEsR0FBa0MsU0FBUyxDQUFDLCtCQUFWLENBQUEsQ0FBbEMsRUF0QkE7Ozs7O0VBNEJBLElBQUMsQ0FBQSxpQkFBRCxHQUdFLENBQUE7O0lBQUEsTUFBQSxFQUFRLFFBQUEsQ0FBQSxDQUFB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QSxDQUFxUCxHQUFBLENBQUksTUFBSixDQUFyUCxDQUFBLE1BQUEsQ0FBQSxDQUF3USxDQUFDLENBQUMsU0FBMVEsQ0FBQSxDQUFBLENBQUEsQ0FBdVIsQ0FBQyxDQUFDLE9BQUYsR0FBVSxDQUFDLENBQUMsVUFBblMsQ0FBQSxDQUFOO01BekJGLENBMUhKOztBQXFKSSxhQUFPO0lBdEpEO0VBQVIsRUEvQkY7OztFQTBMQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7YUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLElBQUMsQ0FBQSxpQkFBL0I7SUFIc0MsQ0FBQSxJQUF4Qzs7O0VBMUxBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ21pcnJvci1naXRodWItZmlsZS10by1sb2NhbCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xueyBhbnNpX2NvbG9yc19hbmRfZWZmZWN0czogQywgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2lfY29sb3JzX2FuZF9lZmZlY3RzKClcblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1pcnJvcl9maWxlX3Rhc2tzID1cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGJhc2ljczogLT5cbiAgICBwYXR0ZXJucyA9XG4gICAgICBpbnNlcnRfcmVwbGFjZTogLy8vIF5cbiAgICAgICAgKD88cHJlZml4PiAuKj8gKVxuICAgICAgICA8XG4gICAgICAgIDxcbiAgICAgICAgPFxuICAgICAgICAoPzxzbGFzaD4gXFwvPyApXG4gICAgICAgICg/PGNvbW1hbmQ+IGluc2VydCB8IHJlcGxhY2UgKVxuICAgICAgICBcXHgyMCtcbiAgICAgICAgKCAoPzxwb3NpdGlvbj4gYmVsb3cgfCBhYm92ZSApIFxceDIwKyApP1xuICAgICAgICAoc3JjXFxzKj1cXHMqKT8oPzxwMT5cbiAgICAgICAgICAoPzpcbiAgICAgICAgICAgICg/OiAnICg/OiBcXFxcJyB8IFteICcgXSAgKSsgJyApIHxcbiAgICAgICAgICAgICg/OiBcIiAoPzogXFxcXFwiIHwgW14gXCIgXSAgKSsgXCIgKSB8XG4gICAgICAgICAgICAoPzogXFwkIFthLXpBLVowLTldKyAgICAgICAgICApICMgaW5zZXJ0IEpTIGlkZW50aWZpZXIgcGF0dGVyblxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgPlxuICAgICAgICAoPzx1c2VyX2VvaT4gW14gPiBdKiApXG4gICAgICAgID5cbiAgICAgICAgKD88c3lzdGVtX2VvaT4gW14gPiBdKiApXG4gICAgICAgID5cbiAgICAgICAgKD88c3VmZml4PiAuKj8gKVxuICAgICAgICAkIC8vL1xuICAgICAgcHVibGlzaDogLy8vIF5cbiAgICAgICAgKD88cHJlZml4PiAuKj8gKVxuICAgICAgICA8XG4gICAgICAgIDxcbiAgICAgICAgPFxuICAgICAgICAoPzxzbGFzaD4gXFwvPyApXG4gICAgICAgICg/PGNvbW1hbmQ+IHB1Ymxpc2ggKVxuICAgICAgICBcXHgyMCtcbiAgICAgICAgKCAoPzxkaXNwb3NpdGlvbj4gb25lICAgfCBlbmNsb3NlZCAgKSBcXHgyMCsgKT9cbiAgICAgICAgKCAoPzxwb3NpdGlvbj4gICAgYmVsb3cgfCBhYm92ZSAgICAgKSBcXHgyMCsgKT9cbiAgICAgICAgKGFzXFxzKj1cXHMqKT8oPzxwMT5cbiAgICAgICAgICAoPzpcbiAgICAgICAgICAgICg/OiAnIFxcIyAoPzogXFxcXCcgfCBbXiAnIF0gICkrICcgKSB8XG4gICAgICAgICAgICAoPzogXCIgXFwjICg/OiBcXFxcXCIgfCBbXiBcIiBdICApKyBcIiApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICA+XG4gICAgICAgICg/PHVzZXJfZW9pPiBbXiA+IF0qIClcbiAgICAgICAgPlxuICAgICAgICAoPzxzeXN0ZW1fZW9pPiBbXiA+IF0qIClcbiAgICAgICAgPlxuICAgICAgICAoPzxzdWZmaXg+IC4qPyApXG4gICAgICAgICQgLy8vXG4gICAgICBnZW5lcmljOiAvLy8gXlxuICAgICAgICAoPzxwcmVmaXg+IC4qPyApXG4gICAgICAgIDxcbiAgICAgICAgPFxuICAgICAgICA8XG4gICAgICAgICg/PHNsYXNoPiBcXC8/IClcbiAgICAgICAgKD88cDE+IC4qPyApXG4gICAgICAgID5cbiAgICAgICAgKD88dXNlcl9lb2k+IFteID4gXSogKVxuICAgICAgICA+XG4gICAgICAgICg/PHN5c3RlbV9lb2k+IFteID4gXSogKVxuICAgICAgICA+XG4gICAgICAgICg/PHN1ZmZpeD4gLio/IClcbiAgICAgICAgJCAvLy9cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2JlcyA9IFtcbiAgICAgICMjIyBpbnNlcnQ6ICMjI1xuICAgICAgXCJcIlwiPDw8aW5zZXJ0IGJlbG93ICdicmFja2V0cy50eHQnPj4+XCJcIlwiXG4gICAgICBcIlwiXCI8PDxpbnNlcnQgYmVsb3cgJ2JyYWNrZXRzLnR4dCc+VVNFUj4+XCJcIlwiXG4gICAgICBcIlwiXCI8IS0tIDw8PC9pbnNlcnQgJ2JyYWNrZXRzLnR4dCc+PlNZU1RFTT4gLS0+XCJcIlwiXG4gICAgICBcIlwiXCI8IS0tIDw8PC9pbnNlcnQgYmVsb3cgJ2JyYWNrZXRzLnR4dCc+PlNZU1RFTT4gLS0+XCJcIlwiXG4gICAgICBcIlwiXCI8IS0tIDw8PC9pbnNlcnQgYmVsb3cgJ215IGJyYWNrZXRzLnR4dCc+PlNZU1RFTT4gLS0+XCJcIlwiXG4gICAgICBcIlwiXCI8IS0tIDw8PC9pbnNlcnQgYmVsb3cgXCJteSBicmFja2V0cy50eHRcIj4+U1lTVEVNPiAtLT5cIlwiXCJcbiAgICAgIFwiXCJcIjwhLS0gPDw8L2luc2VydCBiZWxvdyBcIm15IFxcXFxcIiBicmFja2V0cy50eHRcIj4+U1lTVEVNPiAtLT5cIlwiXCJcbiAgICAgIFwiXCJcIjwhLS0gPDw8L2luc2VydCBiZWxvdyAnbXkgXFxcXD4gYnJhY2tldHMudHh0Jz4+U1lTVEVNPiAtLT5cIlwiXCJcbiAgICAgIFwiXCJcIjwhLS0gPDw8L2luc2VydCBiZWxvdyAnbXkgPiBicmFja2V0cy50eHQnPj5TWVNURU0+IC0tPlwiXCJcIlxuICAgICAgXCJcIlwiPCEtLSA8PDwvaW5zZXJ0IGJlbG93ICRicmFja2V0cz4+U1lTVEVNPiAtLT5cIlwiXCJcbiAgICAgIFwiXCJcIjwhLS0gPDw8L2luc2VydCBiZWxvdyBzcmM9JGJyYWNrZXRzPj4+IC0tPlwiXCJcIlxuICAgICAgXCJcIlwiIyA8PDxpbnNlcnQgJGJyYWNrZXRzPj4+XCJcIlwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMjIyByZXBsYWNlOiAjIyNcbiAgICAgIFwiXCJcIiMgPDw8cmVwbGFjZSBhYm92ZSAkaGVhZGVyPj4+XCJcIlwiXG4gICAgICBcIlwiXCIjIDw8PHJlcGxhY2UgYmVsb3cgJGZvb3Rlcj4+PlwiXCJcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIyMgcHVibGlzaDogIyMjXG4gICAgICBcIlwiXCIjIDw8PHB1Ymxpc2ggJyNteW5hbWUnPj4+XCJcIlwiXG4gICAgICBcIlwiXCIjIDw8PHB1Ymxpc2ggYXM9JyNteW5hbWUnPj4+XCJcIlwiXG4gICAgICBcIlwiXCIjIDw8PHB1Ymxpc2ggYWJvdmUgYXM9JyNteW5hbWUnPj4+XCJcIlwiXG4gICAgICBcIlwiXCIjIDw8PHB1Ymxpc2ggZW5jbG9zZWQgYWJvdmUgYXM9JyNteW5hbWUnPj4+XCJcIlwiXG4gICAgICBcIlwiXCIjIDw8PHB1Ymxpc2ggYmVsb3cgYXM9JyNteW5hbWUnPj4+XCJcIlwiXG4gICAgICBcIlwiXCIjIDw8PHB1Ymxpc2ggb25lIGJlbG93IGFzPScjbXluYW1lJz4+PlwiXCJcIlxuICAgICAgXCJcIlwiIyA8PDxwdWJsaXNoIGVuY2xvc2VkIGJlbG93IGFzPScjbXluYW1lJz4+PlwiXCJcIlxuICAgICAgXCJcIlwiIyA8PDxwdWJsaXNoIGVuY2xvc2VkIGFzPScjbXluYW1lJz4+PlwiXCJcIlxuICAgICAgXCJcIlwiIyA8PDwvcHVibGlzaCBlbmNsb3NlZCBhcz0nI215bmFtZSc+Pj5cIlwiXCJcbiAgICAgIFwiXCJcIiMgPDw8cHVibGlzaCBlbmNsb3NlZCAnI215bmFtZSc+Pj5cIlwiXCJcbiAgICAgIFwiXCJcIiMgPDw8cHVibGlzaCBvbmUgJyNteW5hbWUnPj4+XCJcIlwiXG4gICAgICBcIlwiXCI8IS0tPDw8cHVibGlzaCBlbmNsb3NlZCBhcz0nI2lkJz4+Pi0tPlwiXCJcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIyMgZ2VuZXJpYzogIyMjXG4gICAgICBcIlwiXCI8IS0tIDw8PC9pbnNlcnQgYmVsb3cgXCJteSBcIiBicmFja2V0cy50eHRcIj4+U1lTVEVNPiAtLT5cIlwiXCJcbiAgICAgIFwiXCJcIiMgPDw8cHVibGlzaCBlbmNsb3NlZCAjbXluYW1lPj4+XCJcIlwiXG4gICAgICBcIlwiXCIjIDw8PHB1Ymxpc2ggZW5jbG9zZWQgYXM9I215bmFtZT4+PlwiXCJcIlxuICAgICAgXCJcIlwiIyA8PDw+Pj5cIlwiXCJcbiAgICAgIFwiXCJcIiMgPDw8ID4+PlwiXCJcIlxuICAgICAgXCJcIlwiIyA8PDw8Pj4+XCJcIlwiXG4gICAgICBcIlwiXCIjIDw8PDw8PD4+Pj4+XCJcIlwiXG4gICAgICBcIlwiXCI8PDxwdWJsaXNoIGVuY2xvc2VkIGFzPTxuYW1lPj4+PlwiXCJcIlxuICAgICAgXCJcIlwiPCEtLTw8PHB1Ymxpc2ggZW5jbG9zZWQgYXM9PG5hbWU+Pj4tLT5cIlwiXCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyMjIG5vIG1hdGNoOiAjIyNcbiAgICAgICcnXG4gICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjb2xvciAgICAgPSBDLmJsYWNrXG4gICAgYmdfY29sb3IgID0gQy5iZ19nYWluc2Jvcm9cbiAgICBlcnJvciAgICAgPSBcIiN7Qy5iZ19waW5rfSBubyBtYXRjaCAje2NvbG9yK2JnX2NvbG9yfVwiXG4gICAgZm10ICAgICAgID0gKCB4ICkgLT4gc3dpdGNoIHhcbiAgICAgIHdoZW4gJycgICAgICAgICB0aGVuICAnJ1xuICAgICAgd2hlbiB1bmRlZmluZWQgIHRoZW4gICcnXG4gICAgICB3aGVuIGVycm9yICAgICAgdGhlbiAgeFxuICAgICAgZWxzZSAgICAgICAgICAgICAgICAgIHJwciB4XG4gICAgbWF0Y2hfbGluZSA9ICggdGV4dCApIC0+XG4gICAgICBmb3IgcGF0dGVybl9uYW1lLCBwYXR0ZXJuIG9mIHBhdHRlcm5zXG4gICAgICAgIHJldHVybiB7IHBhdHRlcm5fbmFtZSwgbWF0Y2gsIH0gaWYgKCBtYXRjaCA9IHByb2JlLm1hdGNoIHBhdHRlcm4gKT9cbiAgICAgIHJldHVybiB7IHBhdHRlcm5fbmFtZTogbnVsbCwgbWF0Y2g6IG51bGwsIH1cbiAgICBmb3IgcHJvYmUgaW4gcHJvYmVzXG4gICAgICAjIHVyZ2UgJ86pbWZfX18zJywgcnByIHByb2JlXG4gICAgICB7IHBhdHRlcm5fbmFtZSwgbWF0Y2gsIH0gPSBtYXRjaF9saW5lIHByb2JlXG4gICAgICBpZiBtYXRjaD9cbiAgICAgICAgeyBwcmVmaXgsXG4gICAgICAgICAgc2xhc2gsXG4gICAgICAgICAgY29tbWFuZCxcbiAgICAgICAgICBkaXNwb3NpdGlvbixcbiAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICBwMSxcbiAgICAgICAgICB1c2VyX2VvaSxcbiAgICAgICAgICBzeXN0ZW1fZW9pLFxuICAgICAgICAgIHN1ZmZpeCwgICAgIH0gPSBtYXRjaC5ncm91cHNcbiAgICAgIGVsc2VcbiAgICAgICAgcHJlZml4ICAgICAgPSBlcnJvclxuICAgICAgICBzbGFzaCAgICAgICA9ICcnXG4gICAgICAgIGNvbW1hbmQgICAgID0gJydcbiAgICAgICAgZGlzcG9zaXRpb24gPSAnJ1xuICAgICAgICBwb3NpdGlvbiAgICA9ICcnXG4gICAgICAgIHAxICAgICAgICAgID0gJydcbiAgICAgICAgdXNlcl9lb2kgICAgPSAnJ1xuICAgICAgICBzeXN0ZW1fZW9pICA9ICcnXG4gICAgICAgIHN1ZmZpeCAgICAgID0gJydcbiAgICAgIHAxX25hbWUgPSB7IGluc2VydF9yZXBsYWNlOiAnc3JjJywgcHVibGlzaDogJ2lkJywgZ2VuZXJpYzogJ2lubmVyJywgbm9fbWF0Y2g6ICcnLCB9WyBwYXR0ZXJuX25hbWUgPyAnbm9fbWF0Y2gnIF1cbiAgICAgIHAxX25hbWUgPSBwMV9uYW1lICsgJzonIHVubGVzcyBwMV9uYW1lIGlzICcnXG4gICAgICBlY2hvIGZcIiN7Y29sb3IrYmdfY29sb3J94pSCI3tDLm92ZXJsaW5lfSN7Zm10IHBhdHRlcm5fbmFtZX06PDIwYzvilIIje2ZtdCBwcmVmaXh9OjwxMGM74pSCI3tmbXQgc2xhc2h9OjwxMGM74pSCI3tmbXQgY29tbWFuZH06PDEwYzvilIIje2ZtdCBkaXNwb3NpdGlvbn06PDEwYzvilIIje2ZtdCBwb3NpdGlvbn06PDEwYzvilIIje3AxX25hbWV9OjwxMGM7I3tmbXQgcDF9Ojw0MGM74pSCI3tmbXQgdXNlcl9lb2l9OjwxMGM74pSCI3tmbXQgc3lzdGVtX2VvaX06PDEwYzvilIIje2ZtdCBzdWZmaXh9OjwxMGM7I3tDLm92ZXJsaW5lMH3ilIIje0MuZGVmYXVsdCtDLmJnX2RlZmF1bHR9XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAbWlycm9yX2ZpbGVfdGFza3NcbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAbWlycm9yX2ZpbGVfdGFza3MuYnVpbHRpbnNcbiJdfQ==
