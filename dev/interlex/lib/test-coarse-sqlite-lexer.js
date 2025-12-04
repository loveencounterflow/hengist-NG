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
            optional comments and whitespace. Other than that, it *is* possible to have an `end` as an
            identifier to appear in front of a semicolon, as `delete from end where end = 'x' returning end;`
            is a valid statement. However, the `RETURNING` clause is not valid in the concluding part of a
            `CREATE TRIGGER` statement. As such, it *should* be possible to flag the beginning of a `CREATE
            TRIGGER` statement and then specifically wait for the `END`, `;` sequence; also observe that a
            `RETURNING` clause is not permitted in the `DELETE FROM` in a trigger.

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtY29hcnNlLXNxbGl0ZS1sZXhlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBLEVBQUEsZ0JBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLGVBQUEsRUFBQSxnQkFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBSUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixzQkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDLEVBZEE7OztFQW9CQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxHQUFBLEdBQTRCLE1BQU0sQ0FBQzs7RUFDbkMsQ0FBQSxDQUFFLGdCQUFGLEVBQ0UsT0FERixFQUVFLGdCQUZGLEVBR0UsZUFIRixDQUFBLEdBRzRCLE9BQUEsQ0FBUSxXQUFSLENBSDVCLEVBeEJBOzs7Ozs7Ozs7O0VBcUNBLElBQUMsQ0FBQSxjQUFELEdBR0UsQ0FBQTs7SUFBQSxNQUFBLEVBR0UsQ0FBQTs7TUFBQSxJQUFBLEVBQU0sUUFBQSxDQUFBLENBQUE7QUFDVixZQUFBO1FBQU0sQ0FBQSxDQUFFLE9BQUYsQ0FBQSxHQUFjLE9BQUEsQ0FBUSx3QkFBUixDQUFkO1FBRUcsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1QsY0FBQSxRQUFBLEVBQUEsUUFBQSxFQUFBLE1BQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLFVBQUEsRUFBQSxRQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUE7VUFBUSxDQUFBLEdBQWMsSUFBSSxPQUFKLENBQUE7VUFDZCxHQUFBLEdBQWMsQ0FBQyxDQUFDLFNBQUYsQ0FBWTtZQUFFLElBQUEsRUFBTTtVQUFSLENBQVo7VUFDZCxNQUFBLEdBQWMsQ0FBQyxDQUFDLFNBQUYsQ0FBWTtZQUFFLElBQUEsRUFBTTtVQUFSLENBQVo7VUFDZCxNQUFBLEdBQWMsQ0FBQyxDQUFDLFNBQUYsQ0FBWTtZQUFFLElBQUEsRUFBTTtVQUFSLENBQVo7VUFDZCxRQUFBLEdBQWMsQ0FBQyxDQUFDLFNBQUYsQ0FBWTtZQUFFLElBQUEsRUFBTTtVQUFSLENBQVo7VUFDZCxRQUFBLEdBQWMsQ0FBQyxDQUFDLFNBQUYsQ0FBWTtZQUFFLElBQUEsRUFBTTtVQUFSLENBQVo7VUFDZCxRQUFBLEdBQWMsQ0FBQyxDQUFDLFNBQUYsQ0FBWTtZQUFFLElBQUEsRUFBTTtVQUFSLENBQVo7VUFDZCxVQUFBLEdBQWMsQ0FBQyxDQUFDLFNBQUYsQ0FBWTtZQUFFLElBQUEsRUFBTTtVQUFSLENBQVosRUFQdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUF1RFEsR0FBRyxDQUFDLFNBQUosQ0FBb0IsYUFBcEIsRUFBc0M7WUFBRyxHQUFBLEVBQUssSUFBUjtZQUFjLElBQUEsRUFBTTtVQUFwQixDQUF0QztVQUNBLEdBQUcsQ0FBQyxTQUFKLENBQW9CLFlBQXBCLEVBQXNDO1lBQUcsR0FBQSxFQUFLLElBQVI7WUFBYyxJQUFBLEVBQU07VUFBcEIsQ0FBdEM7VUFDQSxHQUFHLENBQUMsU0FBSixDQUFvQixZQUFwQixFQUFzQztZQUFHLEdBQUEsRUFBSztVQUFSLENBQXRDO1VBQ0EsR0FBRyxDQUFDLFNBQUosQ0FBb0IsYUFBcEIsRUFBc0M7WUFBRyxHQUFBLEVBQUs7VUFBUixDQUF0QztVQUNBLEdBQUcsQ0FBQyxTQUFKLENBQW9CLFdBQXBCLEVBQXNDO1lBQUcsR0FBQSxFQUFLO1VBQVIsQ0FBdEM7VUFDQSxHQUFHLENBQUMsU0FBSixDQUFvQixjQUFwQixFQUFzQztZQUFHLEdBQUEsRUFBSyxHQUFSO1lBQWEsSUFBQSxFQUFNO1VBQW5CLENBQXRDO1VBQ0EsR0FBRyxDQUFDLFNBQUosQ0FBb0IsY0FBcEIsRUFBc0M7WUFBRyxHQUFBLEVBQUssR0FBUjtZQUFhLElBQUEsRUFBTTtVQUFuQixDQUF0QztVQUNBLEdBQUcsQ0FBQyxTQUFKLENBQW9CLGNBQXBCLEVBQXNDO1lBQUcsR0FBQSxFQUFLLEdBQVI7WUFBYSxJQUFBLEVBQU07VUFBbkIsQ0FBdEM7VUFDQSxHQUFHLENBQUMsU0FBSixDQUFvQixJQUFwQixFQUFzQztZQUFHLEdBQUEsRUFBSztVQUFSLENBQXRDLEVBL0RSOzs7O1VBbUVRLEdBQUcsQ0FBQyxTQUFKLENBQXNCLFVBQXRCLEVBQXdDO1lBQUcsR0FBQSxFQUFLO1VBQVIsQ0FBeEM7VUFDQSxHQUFHLENBQUMsU0FBSixDQUFzQixRQUF0QixFQUF3QztZQUFHLEdBQUEsRUFBSztVQUFSLENBQXhDO1VBQ0EsR0FBRyxDQUFDLFNBQUosQ0FBc0IsY0FBdEIsRUFBd0M7WUFBRyxHQUFBLEVBQUssZ0JBQVI7WUFBMEIsSUFBQSxFQUFNO1VBQWhDLENBQXhDO1VBQ0EsR0FBRyxDQUFDLFNBQUosQ0FBc0IsTUFBdEIsRUFBd0M7WUFBRyxHQUFBLEVBQUs7VUFBUixDQUF4QyxFQXRFUjs7VUF3RVEsTUFBTSxDQUFDLFNBQVAsQ0FBc0IsTUFBdEIsRUFBd0M7WUFBRyxHQUFBLEVBQUs7VUFBUixDQUF4QztVQUNBLE1BQU0sQ0FBQyxTQUFQLENBQXNCLGNBQXRCLEVBQXdDO1lBQUcsR0FBQSxFQUFLLEdBQVI7WUFBYSxJQUFBLEVBQU07VUFBbkIsQ0FBeEMsRUF6RVI7O1VBMkVRLFFBQVEsQ0FBQyxTQUFULENBQXNCLE1BQXRCLEVBQXdDO1lBQUcsR0FBQSxFQUFLO1VBQVIsQ0FBeEM7VUFDQSxRQUFRLENBQUMsU0FBVCxDQUFzQixlQUF0QixFQUF3QztZQUFHLEdBQUEsRUFBSyxHQUFSO1lBQWEsSUFBQSxFQUFNO1VBQW5CLENBQXhDLEVBNUVSOztVQThFUSxNQUFNLENBQUMsU0FBUCxDQUFzQixNQUF0QixFQUF3QztZQUFHLEdBQUEsRUFBSztVQUFSLENBQXhDO1VBQ0EsTUFBTSxDQUFDLFNBQVAsQ0FBc0IsY0FBdEIsRUFBd0M7WUFBRyxHQUFBLEVBQUssR0FBUjtZQUFhLElBQUEsRUFBTTtVQUFuQixDQUF4QyxFQS9FUjs7VUFpRlEsUUFBUSxDQUFDLFNBQVQsQ0FBc0IsU0FBdEIsRUFBd0M7WUFBRyxHQUFBLEVBQUssSUFBUjtZQUFjLElBQUEsRUFBTTtVQUFwQixDQUF4QyxFQWpGUjs7OztVQXFGUSxVQUFVLENBQUMsU0FBWCxDQUF3QixZQUF4QixFQUF3QztZQUFHLEdBQUEsRUFBSyxPQUFSO1lBQWlCLElBQUEsRUFBTTtVQUF2QixDQUF4QyxFQXJGUjs7VUF1RlEsUUFBUSxDQUFDLFNBQVQsQ0FBc0IsWUFBdEIsRUFBd0M7WUFBRyxHQUFBLEVBQUssSUFBUjtZQUFjLElBQUEsRUFBTTtVQUFwQixDQUF4QztVQUNBLFFBQVEsQ0FBQyxTQUFULENBQXNCLFNBQXRCLEVBQXdDO1lBQUcsR0FBQSxFQUFLO1VBQVIsQ0FBeEMsRUF4RlI7O1VBMEZRLE1BQUEsR0FBUyxHQUFHLENBQUE7OztzQkFBQSxFQTFGcEI7O1VBK0ZRLE1BQUEsR0FBUyxHQUFHLENBQUE7Ozs7O0dBQUEsRUEvRnBCOzs7VUF3R1EsTUFBQSxHQUFTLEdBQUcsQ0FBQSw4Q0FBQTtBQUVaOztVQUFBLEtBQUEscUNBQUE7O1lBQ0UsS0FBQSxxQkFBQTtjQUVFLElBQVksS0FBSyxDQUFDLFNBQWxCOztBQUFBLHlCQUFBOztjQUNBLElBQVksS0FBSyxDQUFDLE1BQU4sS0FBZ0IsUUFBNUI7QUFBQSx5QkFBQTs7Y0FDQSxJQUFZLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBWixLQUFvQixVQUFoQztBQUFBLHlCQUFBOztjQUNBLElBQVksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFaLEtBQW9CLFVBQWhDO0FBQUEseUJBQUE7O2NBQ0EsZUFBQSxDQUFnQixLQUFoQjtZQU5GO1VBREY7QUFRQSxpQkFBTztRQW5ITixDQUFBLElBRlQ7O0FBdUhNLGVBQU87TUF4SEg7SUFBTjtFQUhGLEVBeENGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa01BLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDeEMsVUFBQTtNQUFFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBeUIsV0FBQSxFQUFhLEtBQXRDO1FBQTZDLGFBQUEsRUFBZTtNQUE1RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBd0IsV0FBQSxFQUFhLEtBQXJDO1FBQTRDLGFBQUEsRUFBZTtNQUEzRCxFQURoQjs7YUFHRSxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLElBQUMsQ0FBQSxjQUEvQjtJQUpzQyxDQUFBLElBQXhDOztBQWxNQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cblxuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2ludGVybGV4L3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblNRTCAgICAgICAgICAgICAgICAgICAgICAgPSBTdHJpbmcucmF3XG57IGNvbmRlbnNlX2xleGVtZXNcbiAgYWJicmx4bVxuICB0YWJ1bGF0ZV9sZXhlbWVzXG4gIHRhYnVsYXRlX2xleGVtZSAgICAgICB9ID0gcmVxdWlyZSAnLi9oZWxwZXJzJ1xuIyB7IGludGVybmFsczogY3RfaW50ZXJuYWxzXG4jICAgaXNhXG4jICAgc3RkXG4jICAgdHlwZV9vZiAgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2NsZWFydHlwZSdcblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGludGVybGV4X3Rhc2tzID1cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGxldmVsczpcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGVtbzogLT5cbiAgICAgIHsgR3JhbW1hciB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9pbnRlcmxleCdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZyAgICAgICAgICAgPSBuZXcgR3JhbW1hcigpXG4gICAgICAgIHRvcCAgICAgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAndG9wJywgfVxuICAgICAgICBzdHJpbmcgICAgICA9IGcubmV3X2xldmVsIHsgbmFtZTogJ3N0cmluZycsIH1cbiAgICAgICAgZHFuYW1lICAgICAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdkcW5hbWUnLCB9XG4gICAgICAgIGJya3RuYW1lICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnYnJrdG5hbWUnLCB9XG4gICAgICAgIGxjb21tZW50ICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnbGNvbW1lbnQnLCB9XG4gICAgICAgIGJjb21tZW50ICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAnYmNvbW1lbnQnLCB9XG4gICAgICAgIGt3X3dpdGhfaWQgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAna3dfd2l0aF9pZCcsIH1cblxuICAgICAgICAjIyMgTk9URVxuXG4gICAgICAgIFRoZSBrZXl3b3JkIGBCRUdJTmAgKGAvXFxiYmVnaW5cXGIvaWApIGNhbiBhcHBlYXIgaW4gYSBgQ1JFQVRFIFRSSUdHRVJgIHN0YXRlbWVudCB3aGVyZSBpdFxuICAgICAgICB1bmZvcnR1bmF0ZWx5IG1heSBiZSBwcmVjZWRlZCBieSBhbiBleHByZXNzaW9uIGFuZCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBzdGF0ZW1lbnRzIGVhY2ggb2Ygd2hpY2hcbiAgICAgICAgbXVzdCBiZSB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uOyB0aGUgZW5kIG9mIHRoZSBzdXJyb3VuZGluZyBgQ1JFQVRFIFRSSUdHRVJgIHN0YXRlbWVudCBpcyB0aGVuXG4gICAgICAgIHNpZ25hbGxlZCBieSBhbiBgRU5EYCBrZXl3b3JkIGZvbGxvd2VkIGJ5IGEgc2VtaWNvbG9uLiBUaGlzIHNlZW1zIHRvIGJlIHRoZSBvbmx5IHBsYWNlIHdoZXJlIFNRTGl0ZVxuICAgICAgICBhbGxvd3MgYSAnZnJlZScgc2VtaWNvbG9uIHRoYXQgZG9lcyBub3QgZW5kIGEgdG9wLWxldmVsIHN0YXRlbWVudC5cblxuICAgICAgICBUaGUgb25seSBvdGhlciBwbGFjZSB3aGVyZSBCRUdJTiBtYXkgYXBwZWFyIGlzIGluIGEgYEJFR0lOIFRSQU5TQUNUSU9OYCBzdGF0ZW1lbnQgd2hpY2ggaGFzIGEgbXVjaFxuICAgICAgICBzaW1wbGVyIHN0cnVjdHVyZTpcblxuICAgICAgICBgYGBcbiAgICAgICAgICAgICAgQkVHSU4g4oCU4oCUK+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCvigJTigJQgVFJBTlNBQ1RJT05cbiAgICAgICAgICAgICAgICAgICAgICB84oCUIEVYQ0xVU0lWRSAg4oCUfFxuICAgICAgICAgICAgICAgICAgICAgIHzigJQgREVGRVJSRUQgICDigJR8XG4gICAgICAgICAgICAgICAgICAgICAgfOKAlCBJTU1FRElBVEUgIOKAlHxcbiAgICAgICAgYGBgXG5cbiAgICAgICAgQnV0IGl0IGdldHMgd29yc2UgYmVjYXVzZSBTUUxpdGUgYWNjZXB0cyBgYmVnaW5gIGUuZy4gYXMgdGFibGUgbmFtZTsgd2hlbiBkdW1waW5nIGEgREIsIGl0IHdpbGxcbiAgICAgICAgcXVvdGUgdGhhdCBuYW1lICpzb21ldGltZXMqIGJ1dCBub3QgYWx3YXlzOlxuXG4gICAgICAgIGBgYFxuICAgICAgICBDUkVBVEUgVEFCTEUgYmVnaW4gKCBnIGJvb2wgKTtcbiAgICAgICAgSU5TRVJUIElOVE8gXCJiZWdpblwiIFZBTFVFUygxKTtcbiAgICAgICAgYGBgXG5cbiAgICAgICAgRnJvbSB0aGUgbG9va3Mgb2YgaXQsIHRoaXMgKnNob3VsZCogd29yayBpZiB3ZSBzZXQgYSBmbGFnIHdoZW4gc2VlaW5nIGEgYEJFR0lOYDsgd2UgdGhlbiBleHBlY3RcbiAgICAgICAgd2hpdGVzcGFjZSwgcG9zc2libHkgYSBuZXdsaW5lLCBjb21tZW50cyBhbmQgbW9yZSB3aGl0ZXNwYWNlLCB0aGVuIHBvc3NpYmx5IG9uZSBvciBtb3JlIG9mXG4gICAgICAgIGBFWENMVVNJVkVgLCBgREVGRVJSRURgLCBgSU1NRURJQVRFYCwgYFRSQU5TQUNUSU9OYOKAlGluIHdoaWNoIGNhc2UgYEJFR0lOYCBtdXN0IGhhdmUgYmVlbiBhdFxuICAgICAgICB0b3AtbGV2ZWwgYW5kIHRoZSBmb2xsb3dpbmcgYmFyZSBzZW1pY29sb24gZG9lcyBpbmRlZWQgc2lnbmFsIGVuZC1vZi1zdGF0ZW1lbnQuXG5cbiAgICAgICAgICBNYXliZSBpbXBvcnRhbnQ6IENoZWNrIGZvciBmdW5jdGlvbiBjYWxscyBiL2MgVURGcyBhcmUgYW5vdGhlciBwbGFjZSB3aGVyZSBhcmJpdHJhcnkgbmV3IG5hbWVzIG1heVxuICAgICAgICAgIGdldCBpbnRyb2R1Y2VkLlxuXG4gICAgICAgICAgTWF5YmUgaW1wb3J0YW50OiBpbiB0aGUgY2FzZSBvZiBhIGBDUkVBVEUgVFJJR0dFUmAgc3RhdGVtZW50LCB0aGUgYEJFR0lOYCAuLi4gYEVORGAgcGFydCBpc1xuICAgICAgICAgIG1hbmRhdG9yeSwgKmFuZCogdGhlIGNvbmNsdWRpbmcgdG9wLWxldmVsIHNlbWljb2xvbiAqbXVzdCogYmUgcHJlY2VkZWQgYnkgYEVORGAsIG9ubHkgc2VwYXJhdGVkIGJ5XG4gICAgICAgICAgb3B0aW9uYWwgY29tbWVudHMgYW5kIHdoaXRlc3BhY2UuIE90aGVyIHRoYW4gdGhhdCwgaXQgKmlzKiBwb3NzaWJsZSB0byBoYXZlIGFuIGBlbmRgIGFzIGFuXG4gICAgICAgICAgaWRlbnRpZmllciB0byBhcHBlYXIgaW4gZnJvbnQgb2YgYSBzZW1pY29sb24sIGFzIGBkZWxldGUgZnJvbSBlbmQgd2hlcmUgZW5kID0gJ3gnIHJldHVybmluZyBlbmQ7YFxuICAgICAgICAgIGlzIGEgdmFsaWQgc3RhdGVtZW50LiBIb3dldmVyLCB0aGUgYFJFVFVSTklOR2AgY2xhdXNlIGlzIG5vdCB2YWxpZCBpbiB0aGUgY29uY2x1ZGluZyBwYXJ0IG9mIGFcbiAgICAgICAgICBgQ1JFQVRFIFRSSUdHRVJgIHN0YXRlbWVudC4gQXMgc3VjaCwgaXQgKnNob3VsZCogYmUgcG9zc2libGUgdG8gZmxhZyB0aGUgYmVnaW5uaW5nIG9mIGEgYENSRUFURVxuICAgICAgICAgIFRSSUdHRVJgIHN0YXRlbWVudCBhbmQgdGhlbiBzcGVjaWZpY2FsbHkgd2FpdCBmb3IgdGhlIGBFTkRgLCBgO2Agc2VxdWVuY2U7IGFsc28gb2JzZXJ2ZSB0aGF0IGFcbiAgICAgICAgICBgUkVUVVJOSU5HYCBjbGF1c2UgaXMgbm90IHBlcm1pdHRlZCBpbiB0aGUgYERFTEVURSBGUk9NYCBpbiBhIHRyaWdnZXIuXG5cblxuICAgICAgICAjIyNcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICdkb3VibGVfZGFzaCcsICAgIHsgIGZpdDogJy0tJywganVtcDogJ2xjb21tZW50IScsIH1cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAnc2xhc2hfc3RhcicsICAgICB7ICBmaXQ6ICcvKicsIGp1bXA6ICdiY29tbWVudCEnLCB9XG4gICAgICAgIHRvcC5uZXdfdG9rZW4gICAgICAgJ2xlZnRfcGFyZW4nLCAgICAgeyAgZml0OiAnKCcsIH1cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAncmlnaHRfcGFyZW4nLCAgICB7ICBmaXQ6ICcpJywgfVxuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICdzZW1pY29sb24nLCAgICAgIHsgIGZpdDogJzsnLCB9XG4gICAgICAgIHRvcC5uZXdfdG9rZW4gICAgICAgJ3NpbmdsZV9xdW90ZScsICAgeyAgZml0OiBcIidcIiwganVtcDogJ3N0cmluZyEnLCB9XG4gICAgICAgIHRvcC5uZXdfdG9rZW4gICAgICAgJ2xlZnRfYnJhY2tldCcsICAgeyAgZml0OiBcIltcIiwganVtcDogJ2Jya3RuYW1lIScsIH1cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAnZG91YmxlX3F1b3RlJywgICB7ICBmaXQ6ICdcIicsIGp1bXA6ICdkcW5hbWUhJywgfVxuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICd3cycsICAgICAgICAgICAgIHsgIGZpdDogL1xccysvLCB9XG4gICAgICAgICMjIyBOT1RFIGFsbCBTUUwga2V5d29yZHMgYXJlIGAvXFxiW2Etel0rL2lgLCBzbyBtdWNoIG1vcmUgcmVzdHJpY3RlZDsgYWxzbywgbWF5IGdldCBhIGNvbXBsZXRlIGxpc3RcbiAgICAgICAgb2Yga2V5d29yZHMgYW5kIHRoZSBmZXcgc3BlY2lhbCBjaGFyYWN0ZXJzIChgLmAsIGAqYCwgLi4uKSBvdXQgb2YgKi5wa2NociBmaWxlcyAoc2VlXG4gICAgICAgIGh0dHBzOi8vd3d3LnNxbGl0ZS5vcmcvZG9jc3JjL2ZpbGU/Y2k9dHJ1bmsmbmFtZT1hcnQlMkZzeW50YXglMkZjcmVhdGUtdHJpZ2dlci1zdG10LnBpa2NociZwcm9vZj04MDIwMjQyMzApICMjI1xuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICAgJ2t3X2JlZ2luJywgICAgICAgeyAgZml0OiAvXFxiYmVnaW5cXGIvaSwgfVxuICAgICAgICB0b3AubmV3X3Rva2VuICAgICAgICAgJ2t3X2VuZCcsICAgICAgICAgeyAgZml0OiAvXFxiZW5kXFxiL2ksIH1cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAgICdrd19yZXR1cm5pbmcnLCAgIHsgIGZpdDogL1xcYnJldHVybmluZ1xcYi9pLCBqdW1wOiAna3dfd2l0aF9pZCEnIH1cbiAgICAgICAgdG9wLm5ld190b2tlbiAgICAgICAgICd3b3JkJywgICAgICAgICAgIHsgIGZpdDogL1teXFxzXCInXFxbO10rLywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIHN0cmluZy5uZXdfdG9rZW4gICAgICAndGV4dCcsICAgICAgICAgICB7ICBmaXQ6IC9bXiddKy8sIH1cbiAgICAgICAgc3RyaW5nLm5ld190b2tlbiAgICAgICdzaW5nbGVfcXVvdGUnLCAgIHsgIGZpdDogXCInXCIsIGp1bXA6ICcuLicsIH1cbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBicmt0bmFtZS5uZXdfdG9rZW4gICAgJ25hbWUnLCAgICAgICAgICAgeyAgZml0OiAvW15cXF1dKy8sIH1cbiAgICAgICAgYnJrdG5hbWUubmV3X3Rva2VuICAgICdyaWdodF9icmFja2V0JywgIHsgIGZpdDogJ10nLCBqdW1wOiAnLi4nLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZHFuYW1lLm5ld190b2tlbiAgICAgICduYW1lJywgICAgICAgICAgIHsgIGZpdDogL1teXCJdKy8sIH1cbiAgICAgICAgZHFuYW1lLm5ld190b2tlbiAgICAgICdkb3VibGVfcXVvdGUnLCAgIHsgIGZpdDogJ1wiJywganVtcDogJy4uJywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGxjb21tZW50Lm5ld190b2tlbiAgICAnY29tbWVudCcsICAgICAgICB7ICBmaXQ6IC8uKi8sIGp1bXA6ICcuLicgfVxuICAgICAgICAjIGxjb21tZW50Lm5ld190b2tlbiAgICAnZW9sJywgICAgICAgICAgICB7ICBmaXQ6IC9cXG58LywganVtcDogJy4uJywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICMjIyBUQUlOVCB0aGlzIGlzIGluY29ycmVjdCwgaWRlbnRpZmllcnMgY2FuIHN0YXJ0IHdpdGggcXVvdGUsIGJyYWNrZXQsIGNvbnRhaW4gd3MsIHNlbWljb2xvbiAjIyNcbiAgICAgICAga3dfd2l0aF9pZC5uZXdfdG9rZW4gICAgJ2lkZW50aWZpZXInLCAgIHsgIGZpdDogL1teO10rLywganVtcDogJy4uJywgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGJjb21tZW50Lm5ld190b2tlbiAgICAnc3Rhcl9zbGFzaCcsICAgICB7ICBmaXQ6ICcqLycsIGp1bXA6ICcuLicsIH1cbiAgICAgICAgYmNvbW1lbnQubmV3X3Rva2VuICAgICdjb21tZW50JywgICAgICAgIHsgIGZpdDogL1xcKig/IVxcLyl8W14qXSsvLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc291cmNlID0gU1FMXCJcIlwiY3JlYXRlIHRhYmxlIFwibmFtZXNcIiAoXG4gICAgICAgICAgICBuYW1lIHRleHQgdW5pcXVlIG5vdCBudWxsLFxuICAgICAgICAgICAgXCJuby1jb21tZW50W1wiIC8qIGJjb21tZW50ISAqLyB0ZXh0IG5vdCBudWxsIGRlZmF1bHQgJ25vO2NvbW1lbnQnLCAtLSBsY29tbWVudCBicm90aGVyXG4gICAgICAgICAgICBbdXV1Z2guLi4uXSBpbnRlZ2VyICk7XCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgc291cmNlID0gU1FMXCJcIlwiQ1JFQVRFIFRSSUdHRVIganpyX21pcnJvcl90cmlwbGVzX3JlZ2lzdGVyXG4gICAgICAgICAgYmVmb3JlIGluc2VydCBvbiBqenJfbWlycm9yX3RyaXBsZXNfYmFzZVxuICAgICAgICAgIGZvciBlYWNoIHJvdyBiZWdpblxuICAgICAgICAgICAgc2VsZWN0IHRyaWdnZXJfb25fYmVmb3JlX2luc2VydCggJ2p6cl9taXJyb3JfdHJpcGxlc19iYXNlJywgbmV3LnJvd2lkLCBuZXcucmVmLCBuZXcucywgbmV3LnYsIG5ldy5vICk7XG4gICAgICAgICAgICBlbmQgLypjb21tZW50ICovIC0tIG5ld2xpbmUhXG4gICAgICAgICAgICA7XG4gICAgICAgICAgXCJcIlwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgIyMjIEFsYXMsIGEgdmFsaWQgc3RhdGVtZW50IChhbHRob3VnaCBwcm9iYWJseSBub3Qgb25lIHRoYXQgY2FuIGFwcGVhciBpbiByZWd1bGFyIGR1bXAgZmlsZSkgIyMjXG4gICAgICAgIHNvdXJjZSA9IFNRTFwiXCJcImRlbGV0ZSBmcm9tIGVuZCB3aGVyZSBlbmQgPSAneCcgcmV0dXJuaW5nIGVuZDtcIlwiXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBmb3IgbGluZSBpbiBzb3VyY2Uuc3BsaXQgJy9uJ1xuICAgICAgICAgIGZvciB0b2tlbiBmcm9tIGcuc2NhbiBsaW5lXG4gICAgICAgICAgICAjIGRlYnVnICfOqV9fXzknLCB0b2tlblxuICAgICAgICAgICAgY29udGludWUgaWYgdG9rZW4uaXNfc2lnbmFsXG4gICAgICAgICAgICBjb250aW51ZSBpZiB0b2tlbi5mcW5hbWUgaXMgJ3RvcC53cydcbiAgICAgICAgICAgIGNvbnRpbnVlIGlmIHRva2VuLmxldmVsLm5hbWUgaXMgJ2xjb21tZW50J1xuICAgICAgICAgICAgY29udGludWUgaWYgdG9rZW4ubGV2ZWwubmFtZSBpcyAnYmNvbW1lbnQnXG4gICAgICAgICAgICB0YWJ1bGF0ZV9sZXhlbWUgdG9rZW5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgICB0b3AgICAgID0gZy5uZXdfbGV2ZWwgeyBuYW1lOiAndG9wJywgfVxuICAgICAgIyAgIHRvcC5uZXdfdG9rZW4gICAgIHsgbmFtZTogJ290aGVyJywgICAgICBmaXQ6IC9bXlwiXSsvLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgIyAgIHRvcC5uZXdfdG9rZW4gICAgIHsgbmFtZTogJ2RxJywgICAgICAgICBmaXQ6IC9cIi8sICAgICAgICAgICAgIGp1bXA6ICdkcXN0cmluZyEnLCAgfVxuICAgICAgIyAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMgICBkcXN0cmluZyAgPSBnLm5ld19sZXZlbCB7IG5hbWU6ICdkcXN0cmluZycsIH1cbiAgICAgICMgICBkcXN0cmluZy5uZXdfdG9rZW4gIHsgbmFtZTogJ290aGVyJywgICAgICBmaXQ6IC9bXlwiXSsvLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgIyAgIGRxc3RyaW5nLm5ld190b2tlbiAgeyBuYW1lOiAnZHEnLCAgICAgICAgIGZpdDogL1wiLywgICAgICAgICAgICAganVtcDogJy4uJyAgICAgICAgICB9XG4gICAgICAjIHRleHQubmV3X3Rva2VuICAgIHsgbmFtZTogJ3RleHQnLCAgICAgICAgIGZpdDogLy8vIFxcXFwgXFxwe0RlY2ltYWxfTnVtYmVyfSB8IFxccHtMZXR0ZXJ9IC8vL3YsICAgICAgICAgICAgICAgICB9XG4gICAgICAjIHRleHQubmV3X3Rva2VuICAgIHsgbmFtZTogJ3dzJywgICAgICAgICAgIGZpdDogLy8vIFxccHtXaGl0ZV9TcGFjZX0gICAgICAgICAgICAgICAgICAgIC8vL3YsICAgICAgICAgICAgICAgICB9XG4gICAgICAjIHRleHQubmV3X3Rva2VuICAgIHsgbmFtZTogJ251bWJlcl9zdGFydCcsIGZpdDogLy8vICg/PSAoPyE8IFxcXFwgKSBcXHB7RGVjaW1hbF9OdW1iZXJ9ICkgLy8vdiwganVtcDogJ251bWJlcicsIH1cbiAgICAgICMgbnVtYmVyLm5ld190b2tlbiAgeyBuYW1lOiAnZGlnaXQnLCAgICAgICAgZml0OiAvLy8gXFxwe0RlY2ltYWxfTnVtYmVyfSB8IFxcLiB8IGUgICAgICAgIC8vL3YsICAgICAgICAgICAgICAgICB9XG4gICAgICAjIG51bWJlci5uZXdfdG9rZW4gIHsgbmFtZTogJ251bWJlcl9zdG9wJywgIGZpdDogLy8vICg/PSBcXFB7RGVjaW1hbF9OdW1iZXJ9ICkgICAgICAgICAgIC8vL3YsIGp1bXA6ICcuLicsICAgICB9XG4gICAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyB0ZXh0Lm5ld190b2tlbiB7IG5hbWU6ICduYW1lJywgZml0OiAvLy8gKD88aW5pdGlhbD4gXFxwe1VwcGVyY2FzZV9MZXR0ZXJ9ICkgXFxwe0xvd2VyY2FzZV9MZXR0ZXJ9KyAvLy92LCBtZXJnZTogdHJ1ZSwgICAgfVxuICAgICAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuXG4gICAgICAjICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgIyBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ25hbWUnLCAgICAgICAgICAgZml0OiByeFwiKD88aW5pdGlhbD5bQS1aXSlbYS16XSpcIiwgfVxuICAgICAgIyBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ251bWJlcicsICAgICAgICAgZml0OiByeFwiWzAtOV0rXCIsICAgICAgICAgICAgICAgICAgfVxuICAgICAgIyBnbmQubmV3X3Rva2VuICAgICAgIHsgbmFtZTogJ3BhcmVuX3N0YXJ0JywgICAgZml0OiByeFwiXFwoXCIsICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICMgZ25kLm5ld190b2tlbiAgICAgICB7IG5hbWU6ICdwYXJlbl9zdG9wJywgICAgIGZpdDogcnhcIlxcKVwiLCAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAjIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnb3RoZXInLCAgICAgICAgICBmaXQ6IHJ4XCJbQS1aYS16MC05XStcIiwgICAgICAgICAgICB9XG4gICAgICAjIGduZC5uZXdfdG9rZW4gICAgICAgeyBuYW1lOiAnd3MnLCAgICAgICAgICAgICBmaXQ6IHJ4XCJcXHMrXCIsICAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgIyBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCBzaG93X3Bhc3NlczogdHJ1ZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAaW50ZXJsZXhfdGFza3NcbiJdfQ==
