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
          var bcomment, brktname, dqname, g, i, kw_with_id, lcomment, len, line, ref, source, string, token, top;
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
          kw_with_id = g.new_level({
            name: 'kw_with_id'
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

            Maybe important: Check for function calls b/c UDFs are another place where arbitrary new names may
            get introduced.

            Maybe important: in the case of a `CREATE TRIGGER` statement, the `BEGIN` ... `END` part is
            mandatory, *and* the concluding top-level semicolon *must* be preceded by `END`, only separated by
            optional comments and whitespace.

            Note: other than that, it *is* possible to have an `end` as an identifier to appear in front of a
            semicolon, as `delete from end where end = 'x' returning end;` is a valid statement. However, the
            `RETURNING` clause is not valid in the concluding part of a `CREATE TRIGGER` statement.

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
          top.new_token('kw_returning', {
            fit: /\breturning\b/i,
            jump: 'kw_with_id!'
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
          /* TAINT this is incorrect, identifiers can start with quote, bracket, contain ws, semicolon */
          kw_with_id.new_token('identifier', {
            fit: /[^;]+/,
            jump: '..'
          });
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
          //...................................................................................................
          /* Alas, a valid statement (although probably not one that can appear in regular dump file) */
          source = SQL`delete from end where end = 'x' returning end;`;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtY29hcnNlLXNxbGl0ZS1sZXhlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBLEVBQUEsZ0JBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLGVBQUEsRUFBQSxnQkFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBSUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixzQkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBZEE7OztFQW9CQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxHQUFBLEdBQTRCLE1BQU0sQ0FBQzs7RUFDbkMsQ0FBQSxDQUFFLGdCQUFGLEVBQ0UsT0FERixFQUVFLGdCQUZGLEVBR0UsZUFIRixDQUFBLEdBRzRCLE9BQUEsQ0FBUSxXQUFSLENBSDVCLEVBeEJBOzs7Ozs7Ozs7O0VBcUNB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LEdBQVMsR0FBRyxDQUFBLDhDQUFBO0FBRVo7O1VBQUEsS0FBQSxxQ0FBQTs7WUFDRSxLQUFBLHFCQUFBO2NBRUUsSUFBWSxLQUFLLENBQUMsU0FBbEI7O0FBQUEseUJBQUE7O2NBQ0EsSUFBWSxLQUFLLENBQUMsTUFBTixLQUFnQixRQUE1QjtBQUFBLHlCQUFBOztjQUNBLElBQVksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFaLEtBQW9CLFVBQWhDO0FBQUEseUJBQUE7O2NBQ0EsSUFBWSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQVosS0FBb0IsVUFBaEM7QUFBQSx5QkFBQTs7Y0FDQSxlQUFBLENBQWdCLEtBQWhCO1lBTkY7VUFERjtBQVFBLGlCQUFPO1FBbEhOLENBQUEsSUFGVDs7QUFzSE0sZUFBTztNQXZISDtJQUFOO0VBSEYsRUF4Q0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpTUEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUF5QixXQUFBLEVBQWEsS0FBdEM7UUFBNkMsYUFBQSxFQUFlO01BQTVEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUF3QixXQUFBLEVBQWEsS0FBckM7UUFBNEMsYUFBQSxFQUFlO01BQTNELEVBRGhCOzthQUdFLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsSUFBQyxDQUFBLGNBQS9CO0lBSnNDLENBQUEsSUFBeEM7O0FBak1BIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaW50ZXJsZXgvdGVzdC1iYXNpY3MnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuU1FMICAgICAgICAgICAgICAgICAgICAgICA9IFN0cmluZy5yYXdcbnsgY29uZGVuc2VfbGV4ZW1lc1xuICBhYmJybHhtXG4gIHRhYnVsYXRlX2xleGVtZXNcbiAgdGFidWxhdGVfbGV4ZW1lICAgICAgIH0gPSByZXF1aXJlICcuL2hlbHBlcnMnXG4jIHsgaW50ZXJuYWxzOiBjdF9pbnRlcm5hbHNcbiMgICBpc2FcbiMgICBzdGRcbiMgICB0eXBlX29mICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvY2xlYXJ0eXBlJ1xuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AaW50ZXJsZXhfdGFza3MgPVxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgbGV2ZWxzOlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkZW1vOiAtPlxuICAgICAgeyBHcmFtbWFyIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2ludGVybGV4J1xuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBnICAgICAgICAgICA9IG5ldyBHcmFtbWFyKClcbiAgICAgICAgdG9wICAgICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICd0b3AnLCB9XG4gICAgICAgIHN0cmluZyAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnc3RyaW5nJywgfVxuICAgICAgICBkcW5hbWUgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2RxbmFtZScsIH1cbiAgICAgICAgYnJrdG5hbWUgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdicmt0bmFtZScsIH1cbiAgICAgICAgbGNvbW1lbnQgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdsY29tbWVudCcsIH1cbiAgICAgICAgYmNvbW1lbnQgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdiY29tbWVudCcsIH1cbiAgICAgICAga3dfd2l0aF9pZCAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdrd193aXRoX2lkJywgfVxuXG4gICAgICAgICMjIyBOT1RFXG5cbiAgICAgICAgVGhlIGtleXdvcmQgYEJFR0lOYCAoYC9cXGJiZWdpblxcYi9pYCkgY2FuIGFwcGVhciBpbiBhIGBDUkVBVEUgVFJJR0dFUmAgc3RhdGVtZW50IHdoZXJlIGl0XG4gICAgICAgIHVuZm9ydHVuYXRlbHkgbWF5IGJlIHByZWNlZGVkIGJ5IGFuIGV4cHJlc3Npb24gYW5kIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIHN0YXRlbWVudHMgZWFjaCBvZiB3aGljaFxuICAgICAgICBtdXN0IGJlIHRlcm1pbmF0ZWQgYnkgYSBzZW1pY29sb247IHRoZSBlbmQgb2YgdGhlIHN1cnJvdW5kaW5nIGBDUkVBVEUgVFJJR0dFUmAgc3RhdGVtZW50IGlzIHRoZW5cbiAgICAgICAgc2lnbmFsbGVkIGJ5IGFuIGBFTkRgIGtleXdvcmQgZm9sbG93ZWQgYnkgYSBzZW1pY29sb24uIFRoaXMgc2VlbXMgdG8gYmUgdGhlIG9ubHkgcGxhY2Ugd2hlcmUgU1FMaXRlXG4gICAgICAgIGFsbG93cyBhICdmcmVlJyBzZW1pY29sb24gdGhhdCBkb2VzIG5vdCBlbmQgYSB0b3AtbGV2ZWwgc3RhdGVtZW50LlxuXG4gICAgICAgIFRoZSBvbmx5IG90aGVyIHBsYWNlIHdoZXJlIEJFR0lOIG1heSBhcHBlYXIgaXMgaW4gYSBgQkVHSU4gVFJBTlNBQ1RJT05gIHN0YXRlbWVudCB3aGljaCBoYXMgYSBtdWNoXG4gICAgICAgIHNpbXBsZXIgc3RydWN0dXJlOlxuXG4gICAgICAgIGBgYFxuICAgICAgICAgICAgICBCRUdJTiDigJTigJQr4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUK+KAlOKAlCBUUkFOU0FDVElPTlxuICAgICAgICAgICAgICAgICAgICAgIHzigJQgRVhDTFVTSVZFICDigJR8XG4gICAgICAgICAgICAgICAgICAgICAgfOKAlCBERUZFUlJFRCAgIOKAlHxcbiAgICAgICAgICAgICAgICAgICAgICB84oCUIElNTUVESUFURSAg4oCUfFxuICAgICAgICBgYGBcblxuICAgICAgICBCdXQgaXQgZ2V0cyB3b3JzZSBiZWNhdXNlIFNRTGl0ZSBhY2NlcHRzIGBiZWdpbmAgZS5nLiBhcyB0YWJsZSBuYW1lOyB3aGVuIGR1bXBpbmcgYSBEQiwgaXQgd2lsbFxuICAgICAgICBxdW90ZSB0aGF0IG5hbWUgKnNvbWV0aW1lcyogYnV0IG5vdCBhbHdheXM6XG5cbiAgICAgICAgYGBgXG4gICAgICAgIENSRUFURSBUQUJMRSBiZWdpbiAoIGcgYm9vbCApO1xuICAgICAgICBJTlNFUlQgSU5UTyBcImJlZ2luXCIgVkFMVUVTKDEpO1xuICAgICAgICBgYGBcblxuICAgICAgICBGcm9tIHRoZSBsb29rcyBvZiBpdCwgdGhpcyAqc2hvdWxkKiB3b3JrIGlmIHdlIHNldCBhIGZsYWcgd2hlbiBzZWVpbmcgYSBgQkVHSU5gOyB3ZSB0aGVuIGV4cGVjdFxuICAgICAgICB3aGl0ZXNwYWNlLCBwb3NzaWJseSBhIG5ld2xpbmUsIGNvbW1lbnRzIGFuZCBtb3JlIHdoaXRlc3BhY2UsIHRoZW4gcG9zc2libHkgb25lIG9yIG1vcmUgb2ZcbiAgICAgICAgYEVYQ0xVU0lWRWAsIGBERUZFUlJFRGAsIGBJTU1FRElBVEVgLCBgVFJBTlNBQ1RJT05g4oCUaW4gd2hpY2ggY2FzZSBgQkVHSU5gIG11c3QgaGF2ZSBiZWVuIGF0XG4gICAgICAgIHRvcC1sZXZlbCBhbmQgdGhlIGZvbGxvd2luZyBiYXJlIHNlbWljb2xvbiBkb2VzIGluZGVlZCBzaWduYWwgZW5kLW9mLXN0YXRlbWVudC5cblxuICAgICAgICAgIE1heWJlIGltcG9ydGFudDogQ2hlY2sgZm9yIGZ1bmN0aW9uIGNhbGxzIGIvYyBVREZzIGFyZSBhbm90aGVyIHBsYWNlIHdoZXJlIGFyYml0cmFyeSBuZXcgbmFtZXMgbWF5XG4gICAgICAgICAgZ2V0IGludHJvZHVjZWQuXG5cbiAgICAgICAgICBNYXliZSBpbXBvcnRhbnQ6IGluIHRoZSBjYXNlIG9mIGEgYENSRUFURSBUUklHR0VSYCBzdGF0ZW1lbnQsIHRoZSBgQkVHSU5gIC4uLiBgRU5EYCBwYXJ0IGlzXG4gICAgICAgICAgbWFuZGF0b3J5LCAqYW5kKiB0aGUgY29uY2x1ZGluZyB0b3AtbGV2ZWwgc2VtaWNvbG9uICptdXN0KiBiZSBwcmVjZWRlZCBieSBgRU5EYCwgb25seSBzZXBhcmF0ZWQgYnlcbiAgICAgICAgICBvcHRpb25hbCBjb21tZW50cyBhbmQgd2hpdGVzcGFjZS5cblxuICAgICAgICAgIE5vdGU6IG90aGVyIHRoYW4gdGhhdCwgaXQgKmlzKiBwb3NzaWJsZSB0byBoYXZlIGFuIGBlbmRgIGFzIGFuIGlkZW50aWZpZXIgdG8gYXBwZWFyIGluIGZyb250IG9mIGFcbiAgICAgICAgICBzZW1pY29sb24sIGFzIGBkZWxldGUgZnJvbSBlbmQgd2hlcmUgZW5kID0gJ3gnIHJldHVybmluZyBlbmQ7YCBpcyBhIHZhbGlkIHN0YXRlbWVudC4gSG93ZXZlciwgdGhlXG4gICAgICAgICAgYFJFVFVSTklOR2AgY2xhdXNlIGlzIG5vdCB2YWxpZCBpbiB0aGUgY29uY2x1ZGluZyBwYXJ0IG9mIGEgYENSRUFURSBUUklHR0VSYCBzdGF0ZW1lbnQuXG5cblxuICAgICAgICAjIyNcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICdkb3VibGVfZGFzaCcsICAgIHsgIGZpdDogJy0tJywganVtcDogJ2xjb21tZW50IScsIH1cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAnc2xhc2hfc3RhcicsICAgICB7ICBmaXQ6ICcvKicsIGp1bXA6ICdiY29tbWVudCEnLCB9XG4gICAgICAgIHRvcC5uZXdfdG9rZW4gICAgICAgJ2xlZnRfcGFyZW4nLCAgICAgeyAgZml0OiAnKCcsIH1cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAncmlnaHRfcGFyZW4nLCAgICB7ICBmaXQ6ICcpJywgfVxuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICdzZW1pY29sb24nLCAgICAgIHsgIGZpdDogJzsnLCB9XG4gICAgICAgIHRvcC5uZXdfdG9rZW4gICAgICAgJ3NpbmdsZV9xdW90ZScsICAgeyAgZml0OiBcIidcIiwganVtcDogJ3N0cmluZyEnLCB9XG4gICAgICAgIHRvcC5uZXdfdG9rZW4gICAgICAgJ2xlZnRfYnJhY2tldCcsICAgeyAgZml0OiBcIltcIiwganVtcDogJ2Jya3RuYW1lIScsIH1cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAnZG91YmxlX3F1b3RlJywgICB7ICBmaXQ6ICdcIicsIGp1bXA6ICdkcW5hbWUhJywgfVxuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICd3cycsICAgICAgICAgICAgIHsgIGZpdDogL1xccysvLCB9XG4gICAgICAgICMjIyBOT1RFIGFsbCBTUUwga2V5d29yZHMgYXJlIGAvXFxiW2Etel0rL2lgLCBzbyBtdWNoIG1vcmUgcmVzdHJpY3RlZDsgYWxzbywgbWF5IGdldCBhIGNvbXBsZXRlIGxpc3RcbiAgICAgICAgb2Yga2V5d29yZHMgYW5kIHRoZSBmZXcgc3BlY2lhbCBjaGFyYWN0ZXJzIChgLmAsIGAqYCwgLi4uKSBvdXQgb2YgKi5wa2NociBmaWxlcyAoc2VlXG4gICAgICAgIGh0dHBzOi8vd3d3LnNxbGl0ZS5vcmcvZG9jc3JjL2ZpbGU/Y2k9dHJ1bmsmbmFtZT1hcnQlMkZzeW50YXglMkZjcmVhdGUtdHJpZ2dlci1zdG10LnBpa2NociZwcm9vZj04MDIwMjQyMzApICMjI1xuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICAgJ2t3X2JlZ2luJywgICAgICAgeyAgZml0OiAvXFxiYmVnaW5cXGIvaSwgfVxuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICAgJ2t3X2VuZCcsICAgICAgICAgeyAgZml0OiAvXFxiZW5kXFxiL2ksIH1cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAgICdrd19yZXR1cm5pbmcnLCAgIHsgIGZpdDogL1xcYnJldHVybmluZ1xcYi9pLCBqdW1wOiAna3dfd2l0aF9pZCEnIH1cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAgICd3b3JkJywgICAgICAgICAgIHsgIGZpdDogL1teXFxzXCInXFxbO10rLywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHN0cmluZy5uZXdfdG9rZW4gICAgICAndGV4dCcsICAgICAgICAgICB7ICBmaXQ6IC9bXiddKy8sIH1cbiAgICAgICAgc3RyaW5nLm5ld190b2tlbiAgICAgICdzaW5nbGVfcXVvdGUnLCAgIHsgIGZpdDogXCInXCIsIGp1bXA6ICcuLicsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBicmt0bmFtZS5uZXdfdG9rZW4gICAgJ25hbWUnLCAgICAgICAgICAgeyAgZml0OiAvW15cXF1dKy8sIH1cbiAgICAgICAgYnJrdG5hbWUubmV3X3Rva2VuICAgICdyaWdodF9icmFja2V0JywgIHsgIGZpdDogJ10nLCBqdW1wOiAnLi4nLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZHFuYW1lLm5ld190b2tlbiAgICAgICduYW1lJywgICAgICAgICAgIHsgIGZpdDogL1teXCJdKy8sIH1cbiAgICAgICAgZHFuYW1lLm5ld190b2tlbiAgICAgICdkb3VibGVfcXVvdGUnLCAgIHsgIGZpdDogJ1wiJywganVtcDogJy4uJywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGxjb21tZW50Lm5ld190b2tlbiAgICAnY29tbWVudCcsICAgICAgICB7ICBmaXQ6IC8uKi8sIGp1bXA6ICcuLicgfVxuICAgICAgICAjIGxjb21tZW50Lm5ld190b2tlbiAgICAnZW9sJywgICAgICAgICAgICB7ICBmaXQ6IC9cXG58LywganVtcDogJy4uJywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICMjIyBUQUlOVCB0aGlzIGlzIGluY29ycmVjdCwgaWRlbnRpZmllcnMgY2FuIHN0YXJ0IHdpdGggcXVvdGUsIGJyYWNrZXQsIGNvbnRhaW4gd3MsIHNlbWljb2xvbiAjIyNcbiAgICAgICAga3dfd2l0aF9pZC5uZXdfdG9rZW4gICAgJ2lkZW50aWZpZXInLCAgIHsgIGZpdDogL1teO10rLywganVtcDogJy4uJywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGJjb21tZW50Lm5ld190b2tlbiAgICAnc3Rhcl9zbGFzaCcsICAgICB7ICBmaXQ6ICcqLycsIGp1bXA6ICcuLicsIH1cbiAgICAgICAgYmNvbW1lbnQubmV3X3Rva2VuICAgICdjb21tZW50JywgICAgICAgIHsgIGZpdDogL1xcKig/IVxcLyl8W14qXSsvLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc291cmNlID0gU1FMXCJcIlwiY3JlYXRlIHRhYmxlIFwibmFtZXNcIiAoXG4gICAgICAgICAgICBuYW1lIHRleHQgdW5pcXVlIG5vdCBudWxsLFxuICAgICAgICAgICAgXCJuby1jb21tZW50W1wiIC8qIGJjb21tZW50ISAqLyB0ZXh0IG5vdCBudWxsIGRlZmF1bHQgJ25vO2NvbW1lbnQnLCAtLSBsY29tbWVudCBicm90aGVyXG4gICAgICAgICAgICBbdXV1Z2guLi4uXSBpbnRlZ2VyICk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc291cmNlID0gU1FMXCJcIlwiQ1JFQVRFIFRSSUdHRVIganpyX21pcnJvcl90cmlwbGVzX3JlZ2lzdGVyXG4gICAgICAgICAgYmVmb3JlIGluc2VydCBvbiBqenJfbWlycm9yX3RyaXBsZXNfYmFzZVxuICAgICAgICAgIGZvciBlYWNoIHJvdyBiZWdpblxuICAgICAgICAgICAgc2VsZWN0IHRyaWdnZXJfb25fYmVmb3JlX2luc2VydCggJ2p6cl9taXJyb3JfdHJpcGxlc19iYXNlJywgbmV3LnJvd2lkLCBuZXcucmVmLCBuZXcucywgbmV3LnYsIG5ldy5vICk7XG4gICAgICAgICAgICBlbmQgLypjb21tZW50ICovIC0tIG5ld2xpbmUhXG4gICAgICAgICAgICA7XG4gICAgICAgICAgXCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgIyMjIEFsYXMsIGEgdmFsaWQgc3RhdGVtZW50IChhbHRob3VnaCBwcm9iYWJseSBub3Qgb25lIHRoYXQgY2FuIGFwcGVhciBpbiByZWd1bGFyIGR1bXAgZmlsZSkgIyMjXG4gICAgICAgIHNvdXJjZSA9IFNRTFwiXCJcImRlbGV0ZSBmcm9tIGVuZCB3aGVyZSBlbmQgPSAneCcgcmV0dXJuaW5nIGVuZDtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBmb3IgbGluZSBpbiBzb3VyY2Uuc3BsaXQgJy9uJ1xuICAgICAgICAgIGZvciB0b2tlbiBmcm9tIGcuc2NhbiBsaW5lXG4gICAgICAgICAgICAjIGRlYnVnICfOqV9fXzknLCB0b2tlblxuICAgICAgICAgICAgY29udGludWUgaWYgdG9rZW4uaXNfc2lnbmFsXG4gICAgICAgICAgICBjb250aW51ZSBpZiB0b2tlbi5mcW5hbWUgaXMgJ3RvcC53cydcbiAgICAgICAgICAgIGNvbnRpbnVlIGlmIHRva2VuLmxldmVsLm5hbWUgaXMgJ2xjb21tZW50J1xuICAgICAgICAgICAgY29udGludWUgaWYgdG9rZW4ubGV2ZWwubmFtZSBpcyAnYmNvbW1lbnQnXG4gICAgICAgICAgICB0YWJ1bGF0ZV9sZXhlbWUgdG9rZW5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgICB0b3AgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAndG9wJywgfVxuICAgICAgIyAgIHRvcC5uZXdfdG9rZW4gICAgIHsgbmFtZTogJ290aGVyJywgICAgICBmaXQ6IC9bXlwiXSsvLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgIyAgIHRvcC5uZXdfdG9rZW4gICAgIHsgbmFtZTogJ2RxJywgICAgICAgICBmaXQ6IC9cIi8sICAgICAgICAgICAgIGp1bXA6ICdkcXN0cmluZyEnLCAgfVxuICAgICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgICBkcXN0cmluZyAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdkcXN0cmluZycsIH1cbiAgICAgICMgICBkcXN0cmluZy5uZXdfdG9rZW4gIHsgbmFtZTogJ290aGVyJywgICAgICBmaXQ6IC9bXlwiXSsvLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgIyAgIGRxc3RyaW5nLm5ld190b2tlbiAgeyBuYW1lOiAnZHEnLCAgICAgICAgIGZpdDogL1wiLywgICAgICAgICAgICAganVtcDogJy4uJyAgICAgICAgICB9XG4gICAgICAjIHRleHQubmV3X3Rva2VuICAgIHsgbmFtZTogJ3RleHQnLCAgICAgICAgIGZpdDogLy8vIFxcXFwgXFxwe0RlY2ltYWxfTnVtYmVyfSB8IFxccHtMZXR0ZXJ9IC8vL3YsICAgICAgICAgICAgICAgICB9XG4gICAgICAjIHRleHQubmV3X3Rva2VuICAgIHsgbmFtZTogJ3dzJywgICAgICAgICAgIGZpdDogLy8vIFxccHtXaGl0ZV9TcGFjZX0gICAgICAgICAgICAgICAgICAgIC8vL3YsICAgICAgICAgICAgICAgICB9XG4gICAgICAjIHRleHQubmV3X3Rva2VuICAgIHsgbmFtZTogJ251bWJlcl9zdGFydCcsIGZpdDogLy8vICg/PSAoPyE8IFxcXFwgKSBcXHB7RGVjaW1hbF9OdW1iZXJ9ICkgLy8vdiwganVtcDogJ251bWJlcicsIH1cbiAgICAgICMgbnVtYmVyLm5ld190b2tlbiAgeyBuYW1lOiAnZGlnaXQnLCAgICAgICAgZml0OiAvLy8gXFxwe0RlY2ltYWxfTnVtYmVyfSB8IFxcLiB8IGUgICAgICAgIC8vL3YsICAgICAgICAgICAgICAgICB9XG4gICAgICAjIG51bWJlci5uZXdfdG9rZW4gIHsgbmFtZTogJ251bWJlcl9zdG9wJywgIGZpdDogLy8vICg/PSBcXFB7RGVjaW1hbF9OdW1iZXJ9ICkgICAgICAgICAgIC8vL3YsIGp1bXA6ICcuLicsICAgICB9XG4gICAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyB0ZXh0Lm5ld190b2tlbiB7IG5hbWU6ICduYW1lJywgZml0OiAvLy8gKD88aW5pdGlhbD4gXFxwe1VwcGVyY2FzZV9MZXR0ZXJ9ICkgXFxwe0xvd2VyY2FzZV9MZXR0ZXJ9KyAvLy92LCBtZXJnZTogdHJ1ZSwgICAgfVxuICAgICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuXG4gICAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ25hbWUnLCAgICAgICAgICAgZml0OiByeFwiKD88aW5pdGlhbD5bQS1aXSlbYS16XSpcIiwgfVxuICAgICAgIyBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ251bWJlcicsICAgICAgICAgZml0OiByeFwiWzAtOV0rXCIsICAgICAgICAgICAgICAgICAgfVxuICAgICAgIyBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ3BhcmVuX3N0YXJ0JywgICAgZml0OiByeFwiXFwoXCIsICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICMgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdwYXJlbl9zdG9wJywgICAgIGZpdDogcnhcIlxcKVwiLCAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAjIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnb3RoZXInLCAgICAgICAgICBmaXQ6IHJ4XCJbQS1aYS16MC05XStcIiwgICAgICAgICAgICB9XG4gICAgICAjIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnd3MnLCAgICAgICAgICAgICBmaXQ6IHJ4XCJcXHMrXCIsICAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgIyBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCBzaG93X3Bhc3NlczogdHJ1ZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAaW50ZXJsZXhfdGFza3NcbiJdfQ==
