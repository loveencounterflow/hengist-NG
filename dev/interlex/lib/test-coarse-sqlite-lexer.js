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
          var bcomment, brktname, dqname, g, i, j, lcomment, len, len1, line, ref, source, statement, statements_list, string, token, top;
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
          // kw_with_id  = g.new_level { name: 'WITH_ID', }
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
            optional comments and whitespace. Other than that, it *is* possible to have an `end` as an
            identifier to appear in front of a semicolon, as `delete from end where end = 'x' returning end;`
            is a valid statement. However, the `RETURNING` clause is not valid in the concluding part of a
            `CREATE TRIGGER` statement.

            As such, it *should* be possible to flag the beginning of a `CREATE TRIGGER` statement and then
            specifically wait for the `END`, `;` sequence.

          Error-Resilient Strategies (ERS):
            * on the lexer level:
              * loop
                * break if end of source has been reached
                * loop
                  * lex until a `top.semicolon` is encountered;
                  * try to execute the SQL to this point;
                  * if execution terminates without error, break
                  * throw error unless error is an `incomplete input` error
                  * continue to loop, possibly with a guard to only do this 1 or 2 times
            * on the lexer's consumer level:
              * loop
                * break if end of source has been reached
                * let current statement parts be an empty list
                * loop
                  * append next candidate statement to current statement parts
                  * try to execute the concatenated current statement parts
                  * if execution terminates without error, break
                  * throw error unless error is an `incomplete input` error
                  * continue to loop, possibly with a guard to only do this 1 or 2 times

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
          // top.new_token       'left_paren',     {  fit: '(', }
          // top.new_token       'right_paren',    {  fit: ')', }
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
          // ### NOTE all SQL keywords are `/\b[a-z]+/i`, so much more restricted; also, may get a complete list
          // of keywords and the few special characters (`.`, `*`, ...) out of *.pkchr files (see
          // https://www.sqlite.org/docsrc/file?ci=trunk&name=art%2Fsyntax%2Fcreate-trigger-stmt.pikchr&proof=802024230) ###
          // #...................................................................................................
          // top.new_token       'CREATE',         {  fit: /\bCREATE\b/i,        }
          // top.new_token       'TABLE',          {  fit: /\bTABLE\b/i,         }
          // top.new_token       'VIEW',           {  fit: /\bVIEW\b/i,          }
          // top.new_token       'TRIGGER',        {  fit: /\bTRIGGER\b/i,       }
          // top.new_token       'BEGIN',          {  fit: /\bBEGIN\b/i,         }
          // top.new_token       'CASE',           {  fit: /\bCASE\b/i,          }
          // top.new_token       'END',            {  fit: /\bEND\b/i,           }
          // top.new_token       'EXCLUSIVE',      {  fit: /\bEXCLUSIVE\b/i,     }
          // top.new_token       'DEFERRED',       {  fit: /\bDEFERRED\b/i,      }
          // top.new_token       'IMMEDIATE',      {  fit: /\bIMMEDIATE\b/i,     }
          // top.new_token       'TRANSACTION',    {  fit: /\bTRANSACTION\b/i,   }
          // #...................................................................................................
          // # top.new_token         'RETURNING',   {  fit: /\breturning\b/i, jump: 'WITH_ID!' }
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
          // #...................................................................................................
          // ### TAINT this is incorrect, identifiers can start with quote, bracket, contain ws, semicolon ###
          // kw_with_id.new_token    'identifier',   {  fit: /[^;]+/, jump: '..', }
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
          /* Alas, a valid statement (although probably not one that can appear in regular dump file) */
          source = SQL`delete from end where end = 'x' returning end;`;
          //...................................................................................................
          source = SQL`begin immediate transaction;`;
          //...................................................................................................
          source = SQL`begin immediate transaction;
CREATE TRIGGER jzr_mirror_triples_register
before insert on jzr_mirror_triples_base
for each row begin
  select trigger_on_before_insert( 'jzr_mirror_triples_base', new.rowid, new.ref, new.s, new.v, new.o );
  end /*comment */ -- newline!
  ;`;
          //...................................................................................................
          statements_list = [];
          statement = '';
          ref = source.split('/n');
          for (i = 0, len = ref.length; i < len; i++) {
            line = ref[i];
            for (token of g.scan(line)) {
              // debug 'Ω___9', token
              statement += token.hit;
              if (token.fqname === 'top.semicolon') {
                statements_list.push(statement);
                statement = '';
              }
              if (token.is_signal) {
                //...............................................................................................
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
          for (j = 0, len1 = statements_list.length; j < len1; j++) {
            statement = statements_list[j];
            echo('—————————————————————————————————');
            echo('\n' + GUY.trm.reverse(GUY.trm.white(` ${statement} `)));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtY29hcnNlLXNxbGl0ZS1sZXhlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBLEVBQUEsZ0JBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLGVBQUEsRUFBQSxnQkFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBSUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixzQkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBZEE7OztFQW9CQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxHQUFBLEdBQTRCLE1BQU0sQ0FBQzs7RUFDbkMsQ0FBQSxDQUFFLGdCQUFGLEVBQ0UsT0FERixFQUVFLGdCQUZGLEVBR0UsZUFIRixDQUFBLEdBRzRCLE9BQUEsQ0FBUSxXQUFSLENBSDVCLEVBeEJBOzs7Ozs7Ozs7O0VBcUNB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Q0EsSUFBWSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQVosS0FBb0IsVUFBaEM7QUFBQSx5QkFBQTs7Y0FDQSxlQUFBLENBQWdCLEtBQWhCO1lBWEY7VUFERjtVQWFBLEtBQUEsbURBQUE7O1lBQ0UsSUFBQSxDQUFLLG1DQUFMO1lBQ0EsSUFBQSxDQUFPLElBQUEsR0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQVIsQ0FBZ0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFSLENBQWMsRUFBQSxDQUFBLENBQUksU0FBSixFQUFBLENBQWQsQ0FBaEIsQ0FBZDtVQUZGO0FBR0EsaUJBQU87UUFqS04sQ0FBQSxJQUZUOztBQXFLTSxlQUFPO01BdEtIO0lBQU47RUFIRixFQXhDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWdQQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQXlCLFdBQUEsRUFBYSxLQUF0QztRQUE2QyxhQUFBLEVBQWU7TUFBNUQ7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQXdCLFdBQUEsRUFBYSxLQUFyQztRQUE0QyxhQUFBLEVBQWU7TUFBM0QsRUFEaEI7O2FBR0UsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixJQUFDLENBQUEsY0FBL0I7SUFKc0MsQ0FBQSxJQUF4Qzs7QUFoUEEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5cblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdpbnRlcmxleC90ZXN0LWJhc2ljcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5TUUwgICAgICAgICAgICAgICAgICAgICAgID0gU3RyaW5nLnJhd1xueyBjb25kZW5zZV9sZXhlbWVzXG4gIGFiYnJseG1cbiAgdGFidWxhdGVfbGV4ZW1lc1xuICB0YWJ1bGF0ZV9sZXhlbWUgICAgICAgfSA9IHJlcXVpcmUgJy4vaGVscGVycydcbiMgeyBpbnRlcm5hbHM6IGN0X2ludGVybmFsc1xuIyAgIGlzYVxuIyAgIHN0ZFxuIyAgIHR5cGVfb2YgICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9jbGVhcnR5cGUnXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBpbnRlcmxleF90YXNrcyA9XG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBsZXZlbHM6XG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRlbW86IC0+XG4gICAgICB7IEdyYW1tYXIgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvaW50ZXJsZXgnXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGcgICAgICAgICAgID0gbmV3IEdyYW1tYXIoKVxuICAgICAgICB0b3AgICAgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ3RvcCcsIH1cbiAgICAgICAgc3RyaW5nICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdzdHJpbmcnLCB9XG4gICAgICAgIGRxbmFtZSAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZHFuYW1lJywgfVxuICAgICAgICBicmt0bmFtZSAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2Jya3RuYW1lJywgfVxuICAgICAgICBsY29tbWVudCAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2xjb21tZW50JywgfVxuICAgICAgICBiY29tbWVudCAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ2Jjb21tZW50JywgfVxuICAgICAgICAjIGt3X3dpdGhfaWQgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnV0lUSF9JRCcsIH1cblxuICAgICAgICAjIyMgTk9URVxuXG4gICAgICAgIFRoZSBrZXl3b3JkIGBCRUdJTmAgKGAvXFxiYmVnaW5cXGIvaWApIGNhbiBhcHBlYXIgaW4gYSBgQ1JFQVRFIFRSSUdHRVJgIHN0YXRlbWVudCB3aGVyZSBpdFxuICAgICAgICB1bmZvcnR1bmF0ZWx5IG1heSBiZSBwcmVjZWRlZCBieSBhbiBleHByZXNzaW9uIGFuZCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBzdGF0ZW1lbnRzIGVhY2ggb2Ygd2hpY2hcbiAgICAgICAgbXVzdCBiZSB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uOyB0aGUgZW5kIG9mIHRoZSBzdXJyb3VuZGluZyBgQ1JFQVRFIFRSSUdHRVJgIHN0YXRlbWVudCBpcyB0aGVuXG4gICAgICAgIHNpZ25hbGxlZCBieSBhbiBgRU5EYCBrZXl3b3JkIGZvbGxvd2VkIGJ5IGEgc2VtaWNvbG9uLiBUaGlzIHNlZW1zIHRvIGJlIHRoZSBvbmx5IHBsYWNlIHdoZXJlIFNRTGl0ZVxuICAgICAgICBhbGxvd3MgYSAnZnJlZScgc2VtaWNvbG9uIHRoYXQgZG9lcyBub3QgZW5kIGEgdG9wLWxldmVsIHN0YXRlbWVudC5cblxuICAgICAgICBUaGUgb25seSBvdGhlciBwbGFjZSB3aGVyZSBCRUdJTiBtYXkgYXBwZWFyIGlzIGluIGEgYEJFR0lOIFRSQU5TQUNUSU9OYCBzdGF0ZW1lbnQgd2hpY2ggaGFzIGEgbXVjaFxuICAgICAgICBzaW1wbGVyIHN0cnVjdHVyZTpcblxuICAgICAgICBgYGBcbiAgICAgICAgICAgICAgQkVHSU4g4oCU4oCUK+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCvigJTigJQgVFJBTlNBQ1RJT05cbiAgICAgICAgICAgICAgICAgICAgICB84oCUIEVYQ0xVU0lWRSAg4oCUfFxuICAgICAgICAgICAgICAgICAgICAgIHzigJQgREVGRVJSRUQgICDigJR8XG4gICAgICAgICAgICAgICAgICAgICAgfOKAlCBJTU1FRElBVEUgIOKAlHxcbiAgICAgICAgYGBgXG5cbiAgICAgICAgQnV0IGl0IGdldHMgd29yc2UgYmVjYXVzZSBTUUxpdGUgYWNjZXB0cyBgYmVnaW5gIGUuZy4gYXMgdGFibGUgbmFtZTsgd2hlbiBkdW1waW5nIGEgREIsIGl0IHdpbGxcbiAgICAgICAgcXVvdGUgdGhhdCBuYW1lICpzb21ldGltZXMqIGJ1dCBub3QgYWx3YXlzOlxuXG4gICAgICAgIGBgYFxuICAgICAgICBDUkVBVEUgVEFCTEUgYmVnaW4gKCBnIGJvb2wgKTtcbiAgICAgICAgSU5TRVJUIElOVE8gXCJiZWdpblwiIFZBTFVFUygxKTtcbiAgICAgICAgYGBgXG5cbiAgICAgICAgRnJvbSB0aGUgbG9va3Mgb2YgaXQsIHRoaXMgKnNob3VsZCogd29yayBpZiB3ZSBzZXQgYSBmbGFnIHdoZW4gc2VlaW5nIGEgYEJFR0lOYDsgd2UgdGhlbiBleHBlY3RcbiAgICAgICAgd2hpdGVzcGFjZSwgcG9zc2libHkgYSBuZXdsaW5lLCBjb21tZW50cyBhbmQgbW9yZSB3aGl0ZXNwYWNlLCB0aGVuIHBvc3NpYmx5IG9uZSBvciBtb3JlIG9mXG4gICAgICAgIGBFWENMVVNJVkVgLCBgREVGRVJSRURgLCBgSU1NRURJQVRFYCwgYFRSQU5TQUNUSU9OYOKAlGluIHdoaWNoIGNhc2UgYEJFR0lOYCBtdXN0IGhhdmUgYmVlbiBhdFxuICAgICAgICB0b3AtbGV2ZWwgYW5kIHRoZSBmb2xsb3dpbmcgYmFyZSBzZW1pY29sb24gZG9lcyBpbmRlZWQgc2lnbmFsIGVuZC1vZi1zdGF0ZW1lbnQuXG5cbiAgICAgICAgICBNYXliZSBpbXBvcnRhbnQ6IENoZWNrIGZvciBmdW5jdGlvbiBjYWxscyBiL2MgVURGcyBhcmUgYW5vdGhlciBwbGFjZSB3aGVyZSBhcmJpdHJhcnkgbmV3IG5hbWVzIG1heVxuICAgICAgICAgIGdldCBpbnRyb2R1Y2VkLlxuXG4gICAgICAgICAgTWF5YmUgaW1wb3J0YW50OiBpbiB0aGUgY2FzZSBvZiBhIGBDUkVBVEUgVFJJR0dFUmAgc3RhdGVtZW50LCB0aGUgYEJFR0lOYCAuLi4gYEVORGAgcGFydCBpc1xuICAgICAgICAgIG1hbmRhdG9yeSwgKmFuZCogdGhlIGNvbmNsdWRpbmcgdG9wLWxldmVsIHNlbWljb2xvbiAqbXVzdCogYmUgcHJlY2VkZWQgYnkgYEVORGAsIG9ubHkgc2VwYXJhdGVkIGJ5XG4gICAgICAgICAgb3B0aW9uYWwgY29tbWVudHMgYW5kIHdoaXRlc3BhY2UuIE90aGVyIHRoYW4gdGhhdCwgaXQgKmlzKiBwb3NzaWJsZSB0byBoYXZlIGFuIGBlbmRgIGFzIGFuXG4gICAgICAgICAgaWRlbnRpZmllciB0byBhcHBlYXIgaW4gZnJvbnQgb2YgYSBzZW1pY29sb24sIGFzIGBkZWxldGUgZnJvbSBlbmQgd2hlcmUgZW5kID0gJ3gnIHJldHVybmluZyBlbmQ7YFxuICAgICAgICAgIGlzIGEgdmFsaWQgc3RhdGVtZW50LiBIb3dldmVyLCB0aGUgYFJFVFVSTklOR2AgY2xhdXNlIGlzIG5vdCB2YWxpZCBpbiB0aGUgY29uY2x1ZGluZyBwYXJ0IG9mIGFcbiAgICAgICAgICBgQ1JFQVRFIFRSSUdHRVJgIHN0YXRlbWVudC5cblxuICAgICAgICAgIEFzIHN1Y2gsIGl0ICpzaG91bGQqIGJlIHBvc3NpYmxlIHRvIGZsYWcgdGhlIGJlZ2lubmluZyBvZiBhIGBDUkVBVEUgVFJJR0dFUmAgc3RhdGVtZW50IGFuZCB0aGVuXG4gICAgICAgICAgc3BlY2lmaWNhbGx5IHdhaXQgZm9yIHRoZSBgRU5EYCwgYDtgIHNlcXVlbmNlLlxuXG4gICAgICAgIEVycm9yLVJlc2lsaWVudCBTdHJhdGVnaWVzIChFUlMpOlxuICAgICAgICAgICogb24gdGhlIGxleGVyIGxldmVsOlxuICAgICAgICAgICAgKiBsb29wXG4gICAgICAgICAgICAgICogYnJlYWsgaWYgZW5kIG9mIHNvdXJjZSBoYXMgYmVlbiByZWFjaGVkXG4gICAgICAgICAgICAgICogbG9vcFxuICAgICAgICAgICAgICAgICogbGV4IHVudGlsIGEgYHRvcC5zZW1pY29sb25gIGlzIGVuY291bnRlcmVkO1xuICAgICAgICAgICAgICAgICogdHJ5IHRvIGV4ZWN1dGUgdGhlIFNRTCB0byB0aGlzIHBvaW50O1xuICAgICAgICAgICAgICAgICogaWYgZXhlY3V0aW9uIHRlcm1pbmF0ZXMgd2l0aG91dCBlcnJvciwgYnJlYWtcbiAgICAgICAgICAgICAgICAqIHRocm93IGVycm9yIHVubGVzcyBlcnJvciBpcyBhbiBgaW5jb21wbGV0ZSBpbnB1dGAgZXJyb3JcbiAgICAgICAgICAgICAgICAqIGNvbnRpbnVlIHRvIGxvb3AsIHBvc3NpYmx5IHdpdGggYSBndWFyZCB0byBvbmx5IGRvIHRoaXMgMSBvciAyIHRpbWVzXG4gICAgICAgICAgKiBvbiB0aGUgbGV4ZXIncyBjb25zdW1lciBsZXZlbDpcbiAgICAgICAgICAgICogbG9vcFxuICAgICAgICAgICAgICAqIGJyZWFrIGlmIGVuZCBvZiBzb3VyY2UgaGFzIGJlZW4gcmVhY2hlZFxuICAgICAgICAgICAgICAqIGxldCBjdXJyZW50IHN0YXRlbWVudCBwYXJ0cyBiZSBhbiBlbXB0eSBsaXN0XG4gICAgICAgICAgICAgICogbG9vcFxuICAgICAgICAgICAgICAgICogYXBwZW5kIG5leHQgY2FuZGlkYXRlIHN0YXRlbWVudCB0byBjdXJyZW50IHN0YXRlbWVudCBwYXJ0c1xuICAgICAgICAgICAgICAgICogdHJ5IHRvIGV4ZWN1dGUgdGhlIGNvbmNhdGVuYXRlZCBjdXJyZW50IHN0YXRlbWVudCBwYXJ0c1xuICAgICAgICAgICAgICAgICogaWYgZXhlY3V0aW9uIHRlcm1pbmF0ZXMgd2l0aG91dCBlcnJvciwgYnJlYWtcbiAgICAgICAgICAgICAgICAqIHRocm93IGVycm9yIHVubGVzcyBlcnJvciBpcyBhbiBgaW5jb21wbGV0ZSBpbnB1dGAgZXJyb3JcbiAgICAgICAgICAgICAgICAqIGNvbnRpbnVlIHRvIGxvb3AsIHBvc3NpYmx5IHdpdGggYSBndWFyZCB0byBvbmx5IGRvIHRoaXMgMSBvciAyIHRpbWVzXG5cbiAgICAgICAgIyMjXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAnZG91YmxlX2Rhc2gnLCAgICB7ICBmaXQ6ICctLScsIGp1bXA6ICdsY29tbWVudCEnLCB9XG4gICAgICAgIHRvcC5uZXdfdG9rZW4gICAgICAgJ3NsYXNoX3N0YXInLCAgICAgeyAgZml0OiAnLyonLCBqdW1wOiAnYmNvbW1lbnQhJywgfVxuICAgICAgICAjIHRvcC5uZXdfdG9rZW4gICAgICAgJ2xlZnRfcGFyZW4nLCAgICAgeyAgZml0OiAnKCcsIH1cbiAgICAgICAgIyB0b3AubmV3X3Rva2VuICAgICAgICdyaWdodF9wYXJlbicsICAgIHsgIGZpdDogJyknLCB9XG4gICAgICAgIHRvcC5uZXdfdG9rZW4gICAgICAgJ3NlbWljb2xvbicsICAgICAgeyAgZml0OiAnOycsIH1cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAnc2luZ2xlX3F1b3RlJywgICB7ICBmaXQ6IFwiJ1wiLCBqdW1wOiAnc3RyaW5nIScsIH1cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAnbGVmdF9icmFja2V0JywgICB7ICBmaXQ6IFwiW1wiLCBqdW1wOiAnYnJrdG5hbWUhJywgfVxuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICdkb3VibGVfcXVvdGUnLCAgIHsgIGZpdDogJ1wiJywganVtcDogJ2RxbmFtZSEnLCB9XG4gICAgICAgIHRvcC5uZXdfdG9rZW4gICAgICAgJ3dzJywgICAgICAgICAgICAgeyAgZml0OiAvXFxzKy8sIH1cbiAgICAgICAgIyAjIyMgTk9URSBhbGwgU1FMIGtleXdvcmRzIGFyZSBgL1xcYlthLXpdKy9pYCwgc28gbXVjaCBtb3JlIHJlc3RyaWN0ZWQ7IGFsc28sIG1heSBnZXQgYSBjb21wbGV0ZSBsaXN0XG4gICAgICAgICMgb2Yga2V5d29yZHMgYW5kIHRoZSBmZXcgc3BlY2lhbCBjaGFyYWN0ZXJzIChgLmAsIGAqYCwgLi4uKSBvdXQgb2YgKi5wa2NociBmaWxlcyAoc2VlXG4gICAgICAgICMgaHR0cHM6Ly93d3cuc3FsaXRlLm9yZy9kb2NzcmMvZmlsZT9jaT10cnVuayZuYW1lPWFydCUyRnN5bnRheCUyRmNyZWF0ZS10cmlnZ2VyLXN0bXQucGlrY2hyJnByb29mPTgwMjAyNDIzMCkgIyMjXG4gICAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAjIHRvcC5uZXdfdG9rZW4gICAgICAgJ0NSRUFURScsICAgICAgICAgeyAgZml0OiAvXFxiQ1JFQVRFXFxiL2ksICAgICAgICB9XG4gICAgICAgICMgdG9wLm5ld190b2tlbiAgICAgICAnVEFCTEUnLCAgICAgICAgICB7ICBmaXQ6IC9cXGJUQUJMRVxcYi9pLCAgICAgICAgIH1cbiAgICAgICAgIyB0b3AubmV3X3Rva2VuICAgICAgICdWSUVXJywgICAgICAgICAgIHsgIGZpdDogL1xcYlZJRVdcXGIvaSwgICAgICAgICAgfVxuICAgICAgICAjIHRvcC5uZXdfdG9rZW4gICAgICAgJ1RSSUdHRVInLCAgICAgICAgeyAgZml0OiAvXFxiVFJJR0dFUlxcYi9pLCAgICAgICB9XG4gICAgICAgICMgdG9wLm5ld190b2tlbiAgICAgICAnQkVHSU4nLCAgICAgICAgICB7ICBmaXQ6IC9cXGJCRUdJTlxcYi9pLCAgICAgICAgIH1cbiAgICAgICAgIyB0b3AubmV3X3Rva2VuICAgICAgICdDQVNFJywgICAgICAgICAgIHsgIGZpdDogL1xcYkNBU0VcXGIvaSwgICAgICAgICAgfVxuICAgICAgICAjIHRvcC5uZXdfdG9rZW4gICAgICAgJ0VORCcsICAgICAgICAgICAgeyAgZml0OiAvXFxiRU5EXFxiL2ksICAgICAgICAgICB9XG4gICAgICAgICMgdG9wLm5ld190b2tlbiAgICAgICAnRVhDTFVTSVZFJywgICAgICB7ICBmaXQ6IC9cXGJFWENMVVNJVkVcXGIvaSwgICAgIH1cbiAgICAgICAgIyB0b3AubmV3X3Rva2VuICAgICAgICdERUZFUlJFRCcsICAgICAgIHsgIGZpdDogL1xcYkRFRkVSUkVEXFxiL2ksICAgICAgfVxuICAgICAgICAjIHRvcC5uZXdfdG9rZW4gICAgICAgJ0lNTUVESUFURScsICAgICAgeyAgZml0OiAvXFxiSU1NRURJQVRFXFxiL2ksICAgICB9XG4gICAgICAgICMgdG9wLm5ld190b2tlbiAgICAgICAnVFJBTlNBQ1RJT04nLCAgICB7ICBmaXQ6IC9cXGJUUkFOU0FDVElPTlxcYi9pLCAgIH1cbiAgICAgICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICMgIyB0b3AubmV3X3Rva2VuICAgICAgICAgJ1JFVFVSTklORycsICAgeyAgZml0OiAvXFxicmV0dXJuaW5nXFxiL2ksIGp1bXA6ICdXSVRIX0lEIScgfVxuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICAgJ3dvcmQnLCAgICAgICAgICAgeyAgZml0OiAvW15cXHNcIidcXFs7XSsvLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc3RyaW5nLm5ld190b2tlbiAgICAgICd0ZXh0JywgICAgICAgICAgIHsgIGZpdDogL1teJ10rLywgfVxuICAgICAgICBzdHJpbmcubmV3X3Rva2VuICAgICAgJ3NpbmdsZV9xdW90ZScsICAgeyAgZml0OiBcIidcIiwganVtcDogJy4uJywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGJya3RuYW1lLm5ld190b2tlbiAgICAnbmFtZScsICAgICAgICAgICB7ICBmaXQ6IC9bXlxcXV0rLywgfVxuICAgICAgICBicmt0bmFtZS5uZXdfdG9rZW4gICAgJ3JpZ2h0X2JyYWNrZXQnLCAgeyAgZml0OiAnXScsIGp1bXA6ICcuLicsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBkcW5hbWUubmV3X3Rva2VuICAgICAgJ25hbWUnLCAgICAgICAgICAgeyAgZml0OiAvW15cIl0rLywgfVxuICAgICAgICBkcW5hbWUubmV3X3Rva2VuICAgICAgJ2RvdWJsZV9xdW90ZScsICAgeyAgZml0OiAnXCInLCBqdW1wOiAnLi4nLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgbGNvbW1lbnQubmV3X3Rva2VuICAgICdjb21tZW50JywgICAgICAgIHsgIGZpdDogLy4qLywganVtcDogJy4uJyB9XG4gICAgICAgICMgbGNvbW1lbnQubmV3X3Rva2VuICAgICdlb2wnLCAgICAgICAgICAgIHsgIGZpdDogL1xcbnwvLCBqdW1wOiAnLi4nLCB9XG4gICAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAjICMjIyBUQUlOVCB0aGlzIGlzIGluY29ycmVjdCwgaWRlbnRpZmllcnMgY2FuIHN0YXJ0IHdpdGggcXVvdGUsIGJyYWNrZXQsIGNvbnRhaW4gd3MsIHNlbWljb2xvbiAjIyNcbiAgICAgICAgIyBrd193aXRoX2lkLm5ld190b2tlbiAgICAnaWRlbnRpZmllcicsICAgeyAgZml0OiAvW147XSsvLCBqdW1wOiAnLi4nLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgYmNvbW1lbnQubmV3X3Rva2VuICAgICdzdGFyX3NsYXNoJywgICAgIHsgIGZpdDogJyovJywganVtcDogJy4uJywgfVxuICAgICAgICBiY29tbWVudC5uZXdfdG9rZW4gICAgJ2NvbW1lbnQnLCAgICAgICAgeyAgZml0OiAvXFwqKD8hXFwvKXxbXipdKy8sIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzb3VyY2UgPSBTUUxcIlwiXCJjcmVhdGUgdGFibGUgXCJuYW1lc1wiIChcbiAgICAgICAgICAgIG5hbWUgdGV4dCB1bmlxdWUgbm90IG51bGwsXG4gICAgICAgICAgICBcIm5vLWNvbW1lbnRbXCIgLyogYmNvbW1lbnQhICovIHRleHQgbm90IG51bGwgZGVmYXVsdCAnbm87Y29tbWVudCcsIC0tIGxjb21tZW50IGJyb3RoZXJcbiAgICAgICAgICAgIFt1dXVnaC4uLi5dIGludGVnZXIgKTtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAjIyMgQWxhcywgYSB2YWxpZCBzdGF0ZW1lbnQgKGFsdGhvdWdoIHByb2JhYmx5IG5vdCBvbmUgdGhhdCBjYW4gYXBwZWFyIGluIHJlZ3VsYXIgZHVtcCBmaWxlKSAjIyNcbiAgICAgICAgc291cmNlID0gU1FMXCJcIlwiZGVsZXRlIGZyb20gZW5kIHdoZXJlIGVuZCA9ICd4JyByZXR1cm5pbmcgZW5kO1wiXCJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHNvdXJjZSA9IFNRTFwiXCJcImJlZ2luIGltbWVkaWF0ZSB0cmFuc2FjdGlvbjtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBzb3VyY2UgPSBTUUxcIlwiXCJcbiAgICAgICAgICBiZWdpbiBpbW1lZGlhdGUgdHJhbnNhY3Rpb247XG4gICAgICAgICAgQ1JFQVRFIFRSSUdHRVIganpyX21pcnJvcl90cmlwbGVzX3JlZ2lzdGVyXG4gICAgICAgICAgYmVmb3JlIGluc2VydCBvbiBqenJfbWlycm9yX3RyaXBsZXNfYmFzZVxuICAgICAgICAgIGZvciBlYWNoIHJvdyBiZWdpblxuICAgICAgICAgICAgc2VsZWN0IHRyaWdnZXJfb25fYmVmb3JlX2luc2VydCggJ2p6cl9taXJyb3JfdHJpcGxlc19iYXNlJywgbmV3LnJvd2lkLCBuZXcucmVmLCBuZXcucywgbmV3LnYsIG5ldy5vICk7XG4gICAgICAgICAgICBlbmQgLypjb21tZW50ICovIC0tIG5ld2xpbmUhXG4gICAgICAgICAgICA7XG4gICAgICAgICAgXCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc3RhdGVtZW50c19saXN0ID0gW11cbiAgICAgICAgc3RhdGVtZW50ICAgICAgID0gJydcbiAgICAgICAgZm9yIGxpbmUgaW4gc291cmNlLnNwbGl0ICcvbidcbiAgICAgICAgICBmb3IgdG9rZW4gZnJvbSBnLnNjYW4gbGluZVxuICAgICAgICAgICAgIyBkZWJ1ZyAnzqlfX185JywgdG9rZW5cbiAgICAgICAgICAgIHN0YXRlbWVudCArPSB0b2tlbi5oaXRcbiAgICAgICAgICAgIGlmIHRva2VuLmZxbmFtZSBpcyAndG9wLnNlbWljb2xvbidcbiAgICAgICAgICAgICAgc3RhdGVtZW50c19saXN0LnB1c2ggc3RhdGVtZW50XG4gICAgICAgICAgICAgIHN0YXRlbWVudCA9ICcnXG4gICAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICAgIGNvbnRpbnVlIGlmIHRva2VuLmlzX3NpZ25hbFxuICAgICAgICAgICAgY29udGludWUgaWYgdG9rZW4uZnFuYW1lIGlzICd0b3Aud3MnXG4gICAgICAgICAgICBjb250aW51ZSBpZiB0b2tlbi5sZXZlbC5uYW1lIGlzICdsY29tbWVudCdcbiAgICAgICAgICAgIGNvbnRpbnVlIGlmIHRva2VuLmxldmVsLm5hbWUgaXMgJ2Jjb21tZW50J1xuICAgICAgICAgICAgdGFidWxhdGVfbGV4ZW1lIHRva2VuXG4gICAgICAgIGZvciBzdGF0ZW1lbnQgaW4gc3RhdGVtZW50c19saXN0XG4gICAgICAgICAgZWNobyAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICAgICAgICAgIGVjaG8gKCAnXFxuJyArIEdVWS50cm0ucmV2ZXJzZSBHVVkudHJtLndoaXRlIFwiICN7c3RhdGVtZW50fSBcIiApXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG5cbiAgICAgICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjICAgdG9wICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ3RvcCcsIH1cbiAgICAgICMgICB0b3AubmV3X3Rva2VuICAgICB7IG5hbWU6ICdvdGhlcicsICAgICAgZml0OiAvW15cIl0rLywgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICMgICB0b3AubmV3X3Rva2VuICAgICB7IG5hbWU6ICdkcScsICAgICAgICAgZml0OiAvXCIvLCAgICAgICAgICAgICBqdW1wOiAnZHFzdHJpbmchJywgIH1cbiAgICAgICMgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjICAgZHFzdHJpbmcgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnZHFzdHJpbmcnLCB9XG4gICAgICAjICAgZHFzdHJpbmcubmV3X3Rva2VuICB7IG5hbWU6ICdvdGhlcicsICAgICAgZml0OiAvW15cIl0rLywgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICMgICBkcXN0cmluZy5uZXdfdG9rZW4gIHsgbmFtZTogJ2RxJywgICAgICAgICBmaXQ6IC9cIi8sICAgICAgICAgICAgIGp1bXA6ICcuLicgICAgICAgICAgfVxuICAgICAgIyB0ZXh0Lm5ld190b2tlbiAgICB7IG5hbWU6ICd0ZXh0JywgICAgICAgICBmaXQ6IC8vLyBcXFxcIFxccHtEZWNpbWFsX051bWJlcn0gfCBcXHB7TGV0dGVyfSAvLy92LCAgICAgICAgICAgICAgICAgfVxuICAgICAgIyB0ZXh0Lm5ld190b2tlbiAgICB7IG5hbWU6ICd3cycsICAgICAgICAgICBmaXQ6IC8vLyBcXHB7V2hpdGVfU3BhY2V9ICAgICAgICAgICAgICAgICAgICAvLy92LCAgICAgICAgICAgICAgICAgfVxuICAgICAgIyB0ZXh0Lm5ld190b2tlbiAgICB7IG5hbWU6ICdudW1iZXJfc3RhcnQnLCBmaXQ6IC8vLyAoPz0gKD8hPCBcXFxcICkgXFxwe0RlY2ltYWxfTnVtYmVyfSApIC8vL3YsIGp1bXA6ICdudW1iZXInLCB9XG4gICAgICAjIG51bWJlci5uZXdfdG9rZW4gIHsgbmFtZTogJ2RpZ2l0JywgICAgICAgIGZpdDogLy8vIFxccHtEZWNpbWFsX051bWJlcn0gfCBcXC4gfCBlICAgICAgICAvLy92LCAgICAgICAgICAgICAgICAgfVxuICAgICAgIyBudW1iZXIubmV3X3Rva2VuICB7IG5hbWU6ICdudW1iZXJfc3RvcCcsICBmaXQ6IC8vLyAoPz0gXFxQe0RlY2ltYWxfTnVtYmVyfSApICAgICAgICAgICAvLy92LCBqdW1wOiAnLi4nLCAgICAgfVxuICAgICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgdGV4dC5uZXdfdG9rZW4geyBuYW1lOiAnbmFtZScsIGZpdDogLy8vICg/PGluaXRpYWw+IFxccHtVcHBlcmNhc2VfTGV0dGVyfSApIFxccHtMb3dlcmNhc2VfTGV0dGVyfSsgLy8vdiwgbWVyZ2U6IHRydWUsICAgIH1cbiAgICAgICMgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cblxuICAgICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICduYW1lJywgICAgICAgICAgIGZpdDogcnhcIig/PGluaXRpYWw+W0EtWl0pW2Etel0qXCIsIH1cbiAgICAgICMgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdudW1iZXInLCAgICAgICAgIGZpdDogcnhcIlswLTldK1wiLCAgICAgICAgICAgICAgICAgIH1cbiAgICAgICMgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdwYXJlbl9zdGFydCcsICAgIGZpdDogcnhcIlxcKFwiLCAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAjIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAncGFyZW5fc3RvcCcsICAgICBmaXQ6IHJ4XCJcXClcIiwgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgIyBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ290aGVyJywgICAgICAgICAgZml0OiByeFwiW0EtWmEtejAtOV0rXCIsICAgICAgICAgICAgfVxuICAgICAgIyBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ3dzJywgICAgICAgICAgICAgZml0OiByeFwiXFxzK1wiLCAgICAgICAgICAgICAgICAgICAgIH1cblxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICMgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQGludGVybGV4X3Rhc2tzXG4iXX0=
