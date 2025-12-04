(async function() {
  'use strict';
  var GTNG, GUY, SQL, Test, abbrlxm, alert, condense_lexemes, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, tabulate_lexeme, tabulate_lexemes, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('interlex/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  SQL = String.raw;

  ({condense_lexemes, abbrlxm, tabulate_lexemes, tabulate_lexeme} = require('./helpers'));

  // { internals: ct_internals
  //   isa
  //   std
  //   type_of               } = require '../../../apps/cleartype'

  //###########################################################################################################

  //===========================================================================================================
  this.interlex_tasks = {
    //=========================================================================================================
    levels: {
      //-------------------------------------------------------------------------------------------------------
      demo: function() {
        var Grammar;
        ({Grammar} = require('../../../apps/interlex'));
        (() => {          //.....................................................................................................
          var bcomment, brktname, dqname, g, i, lcomment, len, line, ref, source, string, token, top;
          g = new Grammar();
          top = g.new_level({
            name: 'top'
          });
          string = g.new_level({
            name: 'string'
          });
          dqname = g.new_level({
            name: 'dqname'
          });
          brktname = g.new_level({
            name: 'brktname'
          });
          lcomment = g.new_level({
            name: 'lcomment'
          });
          bcomment = g.new_level({
            name: 'bcomment'
          });
          /* NOTE

          The keyword `BEGIN` (`/\bbegin\b/i`) can appear in a `CREATE TRIGGER` statement where it
          unfortunately may be preceded by an expression and followed by one or more statements each of which
          must be terminated by a semicolon; the end of the surrounding `CREATE TRIGGER` statement is then
          signalled by an `END` keyword followed by a semicolon. This seems to be the only place where SQLite
          allows a 'free' semicolon that does not end a top-level statement.

          The only other place where BEGIN may appear is in a `BEGIN TRANSACTION` statement which has a much
          simpler structure:

          ```
                BEGIN ——+——————————————+—— TRANSACTION
                        |— EXCLUSIVE  —|
                        |— DEFERRED   —|
                        |— IMMEDIATE  —|
          ```

          But it gets worse because SQLite accepts `begin` e.g. as table name; when dumping a DB, it will
          quote that name *sometimes* but not always:

          ```
          CREATE TABLE begin ( g bool );
          INSERT INTO "begin" VALUES(1);
          ```

          From the looks of it, this *should* work if we set a flag when seeing a `BEGIN`; we then expect
          whitespace, possibly a newline, comments and more whitespace, then possibly one or more of
          `EXCLUSIVE`, `DEFERRED`, `IMMEDIATE`, `TRANSACTION`—in which case `BEGIN` must have been at
          top-level and the following bare semicolon does indeed signal end-of-statement.

          Maybe important: Check for function calls b/c UDFs are another place where arbitrary new names
          may get introduced.

          Maybe important: in the case of a `CREATE TRIGGER` statement, the `BEGIN` ... `END` part is
          mandatory, *and* the concluding top-level semicolon *must* be preceded by `END`, only separated
          by optional comments and whitespace.

           */
          //...................................................................................................
          top.new_token('double_dash', {
            fit: '--',
            jump: 'lcomment!'
          });
          top.new_token('slash_star', {
            fit: '/*',
            jump: 'bcomment!'
          });
          top.new_token('left_paren', {
            fit: '('
          });
          top.new_token('right_paren', {
            fit: ')'
          });
          top.new_token('semicolon', {
            fit: ';'
          });
          top.new_token('single_quote', {
            fit: "'",
            jump: 'string!'
          });
          top.new_token('left_bracket', {
            fit: "[",
            jump: 'brktname!'
          });
          top.new_token('double_quote', {
            fit: '"',
            jump: 'dqname!'
          });
          top.new_token('ws', {
            fit: /\s+/
          });
          /* NOTE all SQL keywords are `/\b[a-z]+/i`, so much more restricted; also, may get a complete list
                 of keywords and the few special characters (`.`, `*`, ...) out of *.pkchr files (see
                 https://www.sqlite.org/docsrc/file?ci=trunk&name=art%2Fsyntax%2Fcreate-trigger-stmt.pikchr&proof=802024230) */
          top.new_token('kw_begin', {
            fit: /\bbegin\b/i
          });
          top.new_token('kw_end', {
            fit: /\bend\b/i
          });
          top.new_token('word', {
            fit: /[^\s"'\[;]+/
          });
          //...................................................................................................
          string.new_token('text', {
            fit: /[^']+/
          });
          string.new_token('single_quote', {
            fit: "'",
            jump: '..'
          });
          //...................................................................................................
          brktname.new_token('name', {
            fit: /[^\]]+/
          });
          brktname.new_token('right_bracket', {
            fit: ']',
            jump: '..'
          });
          //...................................................................................................
          dqname.new_token('name', {
            fit: /[^"]+/
          });
          dqname.new_token('double_quote', {
            fit: '"',
            jump: '..'
          });
          //...................................................................................................
          lcomment.new_token('comment', {
            fit: /.*/,
            jump: '..'
          });
          // lcomment.new_token    'eol',            {  fit: /\n|/, jump: '..', }
          //...................................................................................................
          bcomment.new_token('star_slash', {
            fit: '*/',
            jump: '..'
          });
          bcomment.new_token('comment', {
            fit: /\*(?!\/)|[^*]+/
          });
          //...................................................................................................
          source = SQL`create table "names" (
name text unique not null,
"no-comment[" /* bcomment! */ text not null default 'no;comment', -- lcomment brother
[uuugh....] integer );`;
          //...................................................................................................
          source = SQL`CREATE TRIGGER jzr_mirror_triples_register
before insert on jzr_mirror_triples_base
for each row begin
  select trigger_on_before_insert( 'jzr_mirror_triples_base', new.rowid, new.ref, new.s, new.v, new.o );
  end /*comment */ -- newline!
  ;`;
          ref = source.split('/n');
          //...................................................................................................
          for (i = 0, len = ref.length; i < len; i++) {
            line = ref[i];
            for (token of g.scan(line)) {
              if (token.is_signal) {
                // debug 'Ω___9', token
                continue;
              }
              if (token.fqname === 'top.ws') {
                continue;
              }
              if (token.level.name === 'lcomment') {
                continue;
              }
              if (token.level.name === 'bcomment') {
                continue;
              }
              tabulate_lexeme(token);
            }
          }
          return null;
        })();
        //.....................................................................................................
        return null;
      }
    }
  };

  //   #...................................................................................................
  //   top     = g.new_level { name: 'top', }
  //   top.new_token     { name: 'other',      fit: /[^"]+/,                             }
  //   top.new_token     { name: 'dq',         fit: /"/,             jump: 'dqstring!',  }
  //   #...................................................................................................
  //   dqstring  = g.new_level { name: 'dqstring', }
  //   dqstring.new_token  { name: 'other',      fit: /[^"]+/,                             }
  //   dqstring.new_token  { name: 'dq',         fit: /"/,             jump: '..'          }
  // text.new_token    { name: 'text',         fit: /// \\ \p{Decimal_Number} | \p{Letter} ///v,                 }
  // text.new_token    { name: 'ws',           fit: /// \p{White_Space}                    ///v,                 }
  // text.new_token    { name: 'number_start', fit: /// (?= (?!< \\ ) \p{Decimal_Number} ) ///v, jump: 'number', }
  // number.new_token  { name: 'digit',        fit: /// \p{Decimal_Number} | \. | e        ///v,                 }
  // number.new_token  { name: 'number_stop',  fit: /// (?= \P{Decimal_Number} )           ///v, jump: '..',     }
  // #.....................................................................................................
  // text.new_token { name: 'name', fit: /// (?<initial> \p{Uppercase_Letter} ) \p{Lowercase_Letter}+ ///v, merge: true,    }
  // #.....................................................................................................

  // #.....................................................................................................
  // gnd.new_token       { name: 'name',           fit: rx"(?<initial>[A-Z])[a-z]*", }
  // gnd.new_token       { name: 'number',         fit: rx"[0-9]+",                  }
  // gnd.new_token       { name: 'paren_start',    fit: rx"\(",                      }
  // gnd.new_token       { name: 'paren_stop',     fit: rx"\)",                      }
  // gnd.new_token       { name: 'other',          fit: rx"[A-Za-z0-9]+",            }
  // gnd.new_token       { name: 'ws',             fit: rx"\s+",                     }

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
      // guytest_cfg = { throw_on_error: false, show_passes: true, report_checks: true, }
      return (new Test(guytest_cfg)).test(this.interlex_tasks);
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtY29hcnNlLXNxbGl0ZS1sZXhlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBLEVBQUEsZ0JBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLGVBQUEsRUFBQSxnQkFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBSUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixzQkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBZEE7OztFQW9CQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxHQUFBLEdBQTRCLE1BQU0sQ0FBQzs7RUFDbkMsQ0FBQSxDQUFFLGdCQUFGLEVBQ0UsT0FERixFQUVFLGdCQUZGLEVBR0UsZUFIRixDQUFBLEdBRzRCLE9BQUEsQ0FBUSxXQUFSLENBSDVCLEVBeEJBOzs7Ozs7Ozs7O0VBcUNB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RjtBQVFBLGlCQUFPO1FBdEdOLENBQUEsSUFGVDs7QUEwR00sZUFBTztNQTNHSDtJQUFOO0VBSEYsRUF4Q0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFxTEEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUF5QixXQUFBLEVBQWEsS0FBdEM7UUFBNkMsYUFBQSxFQUFlO01BQTVEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUF3QixXQUFBLEVBQWEsS0FBckM7UUFBNEMsYUFBQSxFQUFlO01BQTNELEVBRGhCOzthQUdFLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsSUFBQyxDQUFBLGNBQS9CO0lBSnNDLENBQUEsSUFBeEM7O0FBckxBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaW50ZXJsZXgvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuU1FMICAgICAgICAgICAgICAgICAgICAgICA9IFN0cmluZy5yYXdcbnsgY29uZGVuc2VfbGV4ZW1lc1xuICBhYmJybHhtXG4gIHRhYnVsYXRlX2xleGVtZXNcbiAgdGFidWxhdGVfbGV4ZW1lICAgICAgIH0gPSByZXF1aXJlICcuL2hlbHBlcnMnXG4jIHsgaW50ZXJuYWxzOiBjdF9pbnRlcm5hbHNcbiMgICBpc2FcbiMgICBzdGRcbiMgICB0eXBlX29mICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvY2xlYXJ0eXBlJ1xuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AaW50ZXJsZXhfdGFza3MgPVxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgbGV2ZWxzOlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vOiAtPlxuICAgICAgeyBHcmFtbWFyIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBnICAgICAgICAgICA9IG5ldyBHcmFtbWFyKClcbiAgICAgICAgdG9wICAgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICd0b3AnLCB9XG4gICAgICAgIHN0cmluZyAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnc3RyaW5nJywgfVxuICAgICAgICBkcW5hbWUgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2RxbmFtZScsIH1cbiAgICAgICAgYnJrdG5hbWUgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdicmt0bmFtZScsIH1cbiAgICAgICAgbGNvbW1lbnQgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdsY29tbWVudCcsIH1cbiAgICAgICAgYmNvbW1lbnQgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdiY29tbWVudCcsIH1cblxuICAgICAgICAjIyMgTk9URVxuXG4gICAgICAgIFRoZSBrZXl3b3JkIGBCRUdJTmAgKGAvXFxiYmVnaW5cXGIvaWApIGNhbiBhcHBlYXIgaW4gYSBgQ1JFQVRFIFRSSUdHRVJgIHN0YXRlbWVudCB3aGVyZSBpdFxuICAgICAgICB1bmZvcnR1bmF0ZWx5IG1heSBiZSBwcmVjZWRlZCBieSBhbiBleHByZXNzaW9uIGFuZCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBzdGF0ZW1lbnRzIGVhY2ggb2Ygd2hpY2hcbiAgICAgICAgbXVzdCBiZSB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uOyB0aGUgZW5kIG9mIHRoZSBzdXJyb3VuZGluZyBgQ1JFQVRFIFRSSUdHRVJgIHN0YXRlbWVudCBpcyB0aGVuXG4gICAgICAgIHNpZ25hbGxlZCBieSBhbiBgRU5EYCBrZXl3b3JkIGZvbGxvd2VkIGJ5IGEgc2VtaWNvbG9uLiBUaGlzIHNlZW1zIHRvIGJlIHRoZSBvbmx5IHBsYWNlIHdoZXJlIFNRTGl0ZVxuICAgICAgICBhbGxvd3MgYSAnZnJlZScgc2VtaWNvbG9uIHRoYXQgZG9lcyBub3QgZW5kIGEgdG9wLWxldmVsIHN0YXRlbWVudC5cblxuICAgICAgICBUaGUgb25seSBvdGhlciBwbGFjZSB3aGVyZSBCRUdJTiBtYXkgYXBwZWFyIGlzIGluIGEgYEJFR0lOIFRSQU5TQUNUSU9OYCBzdGF0ZW1lbnQgd2hpY2ggaGFzIGEgbXVjaFxuICAgICAgICBzaW1wbGVyIHN0cnVjdHVyZTpcblxuICAgICAgICBgYGBcbiAgICAgICAgICAgICAgQkVHSU4g4oCU4oCUK+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCvigJTigJQgVFJBTlNBQ1RJT05cbiAgICAgICAgICAgICAgICAgICAgICB84oCUIEVYQ0xVU0lWRSAg4oCUfFxuICAgICAgICAgICAgICAgICAgICAgIHzigJQgREVGRVJSRUQgICDigJR8XG4gICAgICAgICAgICAgICAgICAgICAgfOKAlCBJTU1FRElBVEUgIOKAlHxcbiAgICAgICAgYGBgXG5cbiAgICAgICAgQnV0IGl0IGdldHMgd29yc2UgYmVjYXVzZSBTUUxpdGUgYWNjZXB0cyBgYmVnaW5gIGUuZy4gYXMgdGFibGUgbmFtZTsgd2hlbiBkdW1waW5nIGEgREIsIGl0IHdpbGxcbiAgICAgICAgcXVvdGUgdGhhdCBuYW1lICpzb21ldGltZXMqIGJ1dCBub3QgYWx3YXlzOlxuXG4gICAgICAgIGBgYFxuICAgICAgICBDUkVBVEUgVEFCTEUgYmVnaW4gKCBnIGJvb2wgKTtcbiAgICAgICAgSU5TRVJUIElOVE8gXCJiZWdpblwiIFZBTFVFUygxKTtcbiAgICAgICAgYGBgXG5cbiAgICAgICAgRnJvbSB0aGUgbG9va3Mgb2YgaXQsIHRoaXMgKnNob3VsZCogd29yayBpZiB3ZSBzZXQgYSBmbGFnIHdoZW4gc2VlaW5nIGEgYEJFR0lOYDsgd2UgdGhlbiBleHBlY3RcbiAgICAgICAgd2hpdGVzcGFjZSwgcG9zc2libHkgYSBuZXdsaW5lLCBjb21tZW50cyBhbmQgbW9yZSB3aGl0ZXNwYWNlLCB0aGVuIHBvc3NpYmx5IG9uZSBvciBtb3JlIG9mXG4gICAgICAgIGBFWENMVVNJVkVgLCBgREVGRVJSRURgLCBgSU1NRURJQVRFYCwgYFRSQU5TQUNUSU9OYOKAlGluIHdoaWNoIGNhc2UgYEJFR0lOYCBtdXN0IGhhdmUgYmVlbiBhdFxuICAgICAgICB0b3AtbGV2ZWwgYW5kIHRoZSBmb2xsb3dpbmcgYmFyZSBzZW1pY29sb24gZG9lcyBpbmRlZWQgc2lnbmFsIGVuZC1vZi1zdGF0ZW1lbnQuXG5cbiAgICAgICAgTWF5YmUgaW1wb3J0YW50OiBDaGVjayBmb3IgZnVuY3Rpb24gY2FsbHMgYi9jIFVERnMgYXJlIGFub3RoZXIgcGxhY2Ugd2hlcmUgYXJiaXRyYXJ5IG5ldyBuYW1lc1xuICAgICAgICBtYXkgZ2V0IGludHJvZHVjZWQuXG5cbiAgICAgICAgTWF5YmUgaW1wb3J0YW50OiBpbiB0aGUgY2FzZSBvZiBhIGBDUkVBVEUgVFJJR0dFUmAgc3RhdGVtZW50LCB0aGUgYEJFR0lOYCAuLi4gYEVORGAgcGFydCBpc1xuICAgICAgICBtYW5kYXRvcnksICphbmQqIHRoZSBjb25jbHVkaW5nIHRvcC1sZXZlbCBzZW1pY29sb24gKm11c3QqIGJlIHByZWNlZGVkIGJ5IGBFTkRgLCBvbmx5IHNlcGFyYXRlZFxuICAgICAgICBieSBvcHRpb25hbCBjb21tZW50cyBhbmQgd2hpdGVzcGFjZS5cblxuXG4gICAgICAgICMjI1xuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHRvcC5uZXdfdG9rZW4gICAgICAgJ2RvdWJsZV9kYXNoJywgICAgeyAgZml0OiAnLS0nLCBqdW1wOiAnbGNvbW1lbnQhJywgfVxuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICdzbGFzaF9zdGFyJywgICAgIHsgIGZpdDogJy8qJywganVtcDogJ2Jjb21tZW50IScsIH1cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAnbGVmdF9wYXJlbicsICAgICB7ICBmaXQ6ICcoJywgfVxuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICdyaWdodF9wYXJlbicsICAgIHsgIGZpdDogJyknLCB9XG4gICAgICAgIHRvcC5uZXdfdG9rZW4gICAgICAgJ3NlbWljb2xvbicsICAgICAgeyAgZml0OiAnOycsIH1cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAnc2luZ2xlX3F1b3RlJywgICB7ICBmaXQ6IFwiJ1wiLCBqdW1wOiAnc3RyaW5nIScsIH1cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAnbGVmdF9icmFja2V0JywgICB7ICBmaXQ6IFwiW1wiLCBqdW1wOiAnYnJrdG5hbWUhJywgfVxuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICdkb3VibGVfcXVvdGUnLCAgIHsgIGZpdDogJ1wiJywganVtcDogJ2RxbmFtZSEnLCB9XG4gICAgICAgIHRvcC5uZXdfdG9rZW4gICAgICAgJ3dzJywgICAgICAgICAgICAgeyAgZml0OiAvXFxzKy8sIH1cbiAgICAgICAgIyMjIE5PVEUgYWxsIFNRTCBrZXl3b3JkcyBhcmUgYC9cXGJbYS16XSsvaWAsIHNvIG11Y2ggbW9yZSByZXN0cmljdGVkOyBhbHNvLCBtYXkgZ2V0IGEgY29tcGxldGUgbGlzdFxuICAgICAgICBvZiBrZXl3b3JkcyBhbmQgdGhlIGZldyBzcGVjaWFsIGNoYXJhY3RlcnMgKGAuYCwgYCpgLCAuLi4pIG91dCBvZiAqLnBrY2hyIGZpbGVzIChzZWVcbiAgICAgICAgaHR0cHM6Ly93d3cuc3FsaXRlLm9yZy9kb2NzcmMvZmlsZT9jaT10cnVuayZuYW1lPWFydCUyRnN5bnRheCUyRmNyZWF0ZS10cmlnZ2VyLXN0bXQucGlrY2hyJnByb29mPTgwMjAyNDIzMCkgIyMjXG4gICAgICAgIHRvcC5uZXdfdG9rZW4gICAgICAgICAna3dfYmVnaW4nLCAgICAgICB7ICBmaXQ6IC9cXGJiZWdpblxcYi9pLCB9XG4gICAgICAgIHRvcC5uZXdfdG9rZW4gICAgICAgICAna3dfZW5kJywgICAgICAgICB7ICBmaXQ6IC9cXGJlbmRcXGIvaSwgfVxuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICAgJ3dvcmQnLCAgICAgICAgICAgeyAgZml0OiAvW15cXHNcIidcXFs7XSsvLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc3RyaW5nLm5ld190b2tlbiAgICAgICd0ZXh0JywgICAgICAgICAgIHsgIGZpdDogL1teJ10rLywgfVxuICAgICAgICBzdHJpbmcubmV3X3Rva2VuICAgICAgJ3NpbmdsZV9xdW90ZScsICAgeyAgZml0OiBcIidcIiwganVtcDogJy4uJywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGJya3RuYW1lLm5ld190b2tlbiAgICAnbmFtZScsICAgICAgICAgICB7ICBmaXQ6IC9bXlxcXV0rLywgfVxuICAgICAgICBicmt0bmFtZS5uZXdfdG9rZW4gICAgJ3JpZ2h0X2JyYWNrZXQnLCAgeyAgZml0OiAnXScsIGp1bXA6ICcuLicsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBkcW5hbWUubmV3X3Rva2VuICAgICAgJ25hbWUnLCAgICAgICAgICAgeyAgZml0OiAvW15cIl0rLywgfVxuICAgICAgICBkcW5hbWUubmV3X3Rva2VuICAgICAgJ2RvdWJsZV9xdW90ZScsICAgeyAgZml0OiAnXCInLCBqdW1wOiAnLi4nLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgbGNvbW1lbnQubmV3X3Rva2VuICAgICdjb21tZW50JywgICAgICAgIHsgIGZpdDogLy4qLywganVtcDogJy4uJyB9XG4gICAgICAgICMgbGNvbW1lbnQubmV3X3Rva2VuICAgICdlb2wnLCAgICAgICAgICAgIHsgIGZpdDogL1xcbnwvLCBqdW1wOiAnLi4nLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgYmNvbW1lbnQubmV3X3Rva2VuICAgICdzdGFyX3NsYXNoJywgICAgIHsgIGZpdDogJyovJywganVtcDogJy4uJywgfVxuICAgICAgICBiY29tbWVudC5uZXdfdG9rZW4gICAgJ2NvbW1lbnQnLCAgICAgICAgeyAgZml0OiAvXFwqKD8hXFwvKXxbXipdKy8sIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzb3VyY2UgPSBTUUxcIlwiXCJjcmVhdGUgdGFibGUgXCJuYW1lc1wiIChcbiAgICAgICAgICAgIG5hbWUgdGV4dCB1bmlxdWUgbm90IG51bGwsXG4gICAgICAgICAgICBcIm5vLWNvbW1lbnRbXCIgLyogYmNvbW1lbnQhICovIHRleHQgbm90IG51bGwgZGVmYXVsdCAnbm87Y29tbWVudCcsIC0tIGxjb21tZW50IGJyb3RoZXJcbiAgICAgICAgICAgIFt1dXVnaC4uLi5dIGludGVnZXIgKTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzb3VyY2UgPSBTUUxcIlwiXCJDUkVBVEUgVFJJR0dFUiBqenJfbWlycm9yX3RyaXBsZXNfcmVnaXN0ZXJcbiAgICAgICAgICBiZWZvcmUgaW5zZXJ0IG9uIGp6cl9taXJyb3JfdHJpcGxlc19iYXNlXG4gICAgICAgICAgZm9yIGVhY2ggcm93IGJlZ2luXG4gICAgICAgICAgICBzZWxlY3QgdHJpZ2dlcl9vbl9iZWZvcmVfaW5zZXJ0KCAnanpyX21pcnJvcl90cmlwbGVzX2Jhc2UnLCBuZXcucm93aWQsIG5ldy5yZWYsIG5ldy5zLCBuZXcudiwgbmV3Lm8gKTtcbiAgICAgICAgICAgIGVuZCAvKmNvbW1lbnQgKi8gLS0gbmV3bGluZSFcbiAgICAgICAgICAgIDtcbiAgICAgICAgICBcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBmb3IgbGluZSBpbiBzb3VyY2Uuc3BsaXQgJy9uJ1xuICAgICAgICAgIGZvciB0b2tlbiBmcm9tIGcuc2NhbiBsaW5lXG4gICAgICAgICAgICAjIGRlYnVnICfOqV9fXzknLCB0b2tlblxuICAgICAgICAgICAgY29udGludWUgaWYgdG9rZW4uaXNfc2lnbmFsXG4gICAgICAgICAgICBjb250aW51ZSBpZiB0b2tlbi5mcW5hbWUgaXMgJ3RvcC53cydcbiAgICAgICAgICAgIGNvbnRpbnVlIGlmIHRva2VuLmxldmVsLm5hbWUgaXMgJ2xjb21tZW50J1xuICAgICAgICAgICAgY29udGludWUgaWYgdG9rZW4ubGV2ZWwubmFtZSBpcyAnYmNvbW1lbnQnXG4gICAgICAgICAgICB0YWJ1bGF0ZV9sZXhlbWUgdG9rZW5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgICB0b3AgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAndG9wJywgfVxuICAgICAgIyAgIHRvcC5uZXdfdG9rZW4gICAgIHsgbmFtZTogJ290aGVyJywgICAgICBmaXQ6IC9bXlwiXSsvLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgIyAgIHRvcC5uZXdfdG9rZW4gICAgIHsgbmFtZTogJ2RxJywgICAgICAgICBmaXQ6IC9cIi8sICAgICAgICAgICAgIGp1bXA6ICdkcXN0cmluZyEnLCAgfVxuICAgICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgICBkcXN0cmluZyAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdkcXN0cmluZycsIH1cbiAgICAgICMgICBkcXN0cmluZy5uZXdfdG9rZW4gIHsgbmFtZTogJ290aGVyJywgICAgICBmaXQ6IC9bXlwiXSsvLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgIyAgIGRxc3RyaW5nLm5ld190b2tlbiAgeyBuYW1lOiAnZHEnLCAgICAgICAgIGZpdDogL1wiLywgICAgICAgICAgICAganVtcDogJy4uJyAgICAgICAgICB9XG4gICAgICAjIHRleHQubmV3X3Rva2VuICAgIHsgbmFtZTogJ3RleHQnLCAgICAgICAgIGZpdDogLy8vIFxcXFwgXFxwe0RlY2ltYWxfTnVtYmVyfSB8IFxccHtMZXR0ZXJ9IC8vL3YsICAgICAgICAgICAgICAgICB9XG4gICAgICAjIHRleHQubmV3X3Rva2VuICAgIHsgbmFtZTogJ3dzJywgICAgICAgICAgIGZpdDogLy8vIFxccHtXaGl0ZV9TcGFjZX0gICAgICAgICAgICAgICAgICAgIC8vL3YsICAgICAgICAgICAgICAgICB9XG4gICAgICAjIHRleHQubmV3X3Rva2VuICAgIHsgbmFtZTogJ251bWJlcl9zdGFydCcsIGZpdDogLy8vICg/PSAoPyE8IFxcXFwgKSBcXHB7RGVjaW1hbF9OdW1iZXJ9ICkgLy8vdiwganVtcDogJ251bWJlcicsIH1cbiAgICAgICMgbnVtYmVyLm5ld190b2tlbiAgeyBuYW1lOiAnZGlnaXQnLCAgICAgICAgZml0OiAvLy8gXFxwe0RlY2ltYWxfTnVtYmVyfSB8IFxcLiB8IGUgICAgICAgIC8vL3YsICAgICAgICAgICAgICAgICB9XG4gICAgICAjIG51bWJlci5uZXdfdG9rZW4gIHsgbmFtZTogJ251bWJlcl9zdG9wJywgIGZpdDogLy8vICg/PSBcXFB7RGVjaW1hbF9OdW1iZXJ9ICkgICAgICAgICAgIC8vL3YsIGp1bXA6ICcuLicsICAgICB9XG4gICAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyB0ZXh0Lm5ld190b2tlbiB7IG5hbWU6ICduYW1lJywgZml0OiAvLy8gKD88aW5pdGlhbD4gXFxwe1VwcGVyY2FzZV9MZXR0ZXJ9ICkgXFxwe0xvd2VyY2FzZV9MZXR0ZXJ9KyAvLy92LCBtZXJnZTogdHJ1ZSwgICAgfVxuICAgICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuXG4gICAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ25hbWUnLCAgICAgICAgICAgZml0OiByeFwiKD88aW5pdGlhbD5bQS1aXSlbYS16XSpcIiwgfVxuICAgICAgIyBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ251bWJlcicsICAgICAgICAgZml0OiByeFwiWzAtOV0rXCIsICAgICAgICAgICAgICAgICAgfVxuICAgICAgIyBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ3BhcmVuX3N0YXJ0JywgICAgZml0OiByeFwiXFwoXCIsICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICMgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdwYXJlbl9zdG9wJywgICAgIGZpdDogcnhcIlxcKVwiLCAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAjIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnb3RoZXInLCAgICAgICAgICBmaXQ6IHJ4XCJbQS1aYS16MC05XStcIiwgICAgICAgICAgICB9XG4gICAgICAjIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnd3MnLCAgICAgICAgICAgICBmaXQ6IHJ4XCJcXHMrXCIsICAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgIyBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCBzaG93X3Bhc3NlczogdHJ1ZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAaW50ZXJsZXhfdGFza3NcbiJdfQ==
