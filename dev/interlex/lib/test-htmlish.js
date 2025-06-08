(async function() {
  'use strict';
  var GTNG, GUY, Test, abbrlxm, abbrlxm2, alert, condense_lexemes, debug, echo, f, help, info, inspect, log, plain, praise, raw, reverse, rpr, tabulate_lexeme, tabulate_lexemes, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('interlex/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  ({condense_lexemes, abbrlxm, tabulate_lexemes, tabulate_lexeme} = require('./helpers'));

  raw = String.raw;

  abbrlxm2 = function(source, lxm) {
    if (lxm != null) {
      return [source, lxm.fqname, {...lxm.data}];
    } else {
      return null;
    }
  };

  //###########################################################################################################

  //===========================================================================================================
  this.htmlish_tasks = {
    //=========================================================================================================
    first_take: {
      //-------------------------------------------------------------------------------------------------------
      simple_grammar: function() {
        var Grammar, cast, declare_lexemes, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //.....................................................................................................
        declare_lexemes = function(g) {
          var ltag, ncr_cast, outer, rtag, text_re;
          outer = g.new_level({
            name: 'outer'
          });
          ltag = g.new_level({
            name: 'ltag'
          });
          rtag = g.new_level({
            name: 'rtag'
          });
          // ncr   = g.new_level { name: 'ncr', }
          //...................................................................................................
          /*
          names
            rpb     right pointy bracket
            ltag    left tag: <xxx>, <xxx/>
            rtag    right tag: </xxx>

          */
          //...................................................................................................
          ncr_cast = function({fqname, hit, data}) {
            if ((data.csname == null) || (data.csname === '')) {
              data.csname = 'U';
            }
            switch (true) {
              case data.hex != null:
                data.cid = parseInt(data.hex, 16);
                delete data.hex;
                break;
              case data.dec != null:
                data.cid = parseInt(data.dec, 10);
                delete data.dec;
                break;
              case data.cpname != null:
                data.cid = {
                  apos: 0x27
                }[data.cpname];
                delete data.cpname;
            }
            return null;
          };
          //...................................................................................................
          text_re = rx`( (?<bslash> \ ) (?<chr>.) ) |
  (?<text> [^ < > & \ ]+ )`;
          //...................................................................................................
          outer.new_token({
            name: 'escchr',
            fit: /\\(?<chr>.)/
          });
          outer.new_token({
            name: 'start_rtag',
            fit: /(?<lpb><)(?<slash>\/)/,
            jump: 'rtag!'
          });
          outer.new_token({
            name: 'start_ltag',
            fit: /(?<lpb><)/,
            jump: 'ltag!'
          });
          outer.new_token({
            name: 'ncr_named',
            fit: /&(?<cpname>[^#;]+);/,
            cast: ncr_cast
          });
          outer.new_token({
            name: 'ncr_dec',
            fit: /&(?<csname>[^#;]*)#(?<dec>[0-9]+);/,
            cast: ncr_cast
          });
          outer.new_token({
            name: 'ncr_hex',
            fit: /&(?<csname>[^#;]*)#[xX](?<hex>[0-9a-fA-F]+);/,
            cast: ncr_cast
          });
          outer.new_token({
            name: 'text',
            fit: text_re
          });
          outer.new_token({
            name: 'illegal',
            fit: /(?<illegal>[<>&])/
          });
          //...................................................................................................
          /* TAINT ltag name is complicated enough for its own level */
          ltag.new_token({
            name: 'name',
            fit: /(?<name>[^\s>\/]+)/
          });
          ltag.new_token({
            name: 'stop',
            fit: /(?<slash>\/?)(?<rpb>>)/,
            jump: '..'
          });
          //...................................................................................................
          rtag.new_token({
            name: 'name_rpb',
            fit: /(?<name>[^\s>\/]+)(?<rpb>>)/
          });
          // rtag.new_token { name: 'exit',         fit: ';', jump: '..',                                            }
          return g;
        };
        //.....................................................................................................
        cast = function({fqname, data}) {
          return null;
        };
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωhsht__10, Ωhsht__11, Ωhsht___4, Ωhsht___5, Ωhsht___6, Ωhsht___7, Ωhsht___8, Ωhsht___9;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = "abc<ltag> x y z </rtag>";
          // info 'Ωhsht___1', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωhsht___2', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωhsht___3', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωhsht___4 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.text',
            hit: 'abc',
            pos: '1:0:3',
            data: {
              text: 'abc'
            }
          });
          this.eq((Ωhsht___5 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'ltag.start_ltag',
            hit: '<',
            pos: '1:3:4',
            data: {
              lpb: '<'
            }
          });
          this.eq((Ωhsht___6 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'ltag.name',
            hit: 'ltag',
            pos: '1:4:8',
            data: {
              name: 'ltag'
            }
          });
          this.eq((Ωhsht___7 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'ltag.stop',
            hit: '>',
            pos: '1:8:9',
            data: {
              slash: '',
              rpb: '>'
            }
          });
          this.eq((Ωhsht___8 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.text',
            hit: ' x y z ',
            pos: '1:9:16',
            data: {
              text: ' x y z '
            }
          });
          this.eq((Ωhsht___9 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'rtag.start_rtag',
            hit: '</',
            pos: '1:16:18',
            data: {
              lpb: '<',
              slash: '/'
            }
          });
          this.eq((Ωhsht__10 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'rtag.name_rpb',
            hit: 'rtag>',
            pos: '1:18:23',
            data: {
              name: 'rtag',
              rpb: '>'
            }
          });
          this.eq((Ωhsht__11 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωhsht__15, Ωhsht__16, Ωhsht__17, Ωhsht__18;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ">>&";
          // info 'Ωhsht__12', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωhsht__13', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωhsht__14', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωhsht__15 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.illegal',
            hit: '>',
            pos: '1:0:1',
            data: {
              illegal: '>'
            }
          });
          this.eq((Ωhsht__16 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.illegal',
            hit: '>',
            pos: '1:1:2',
            data: {
              illegal: '>'
            }
          });
          this.eq((Ωhsht__17 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.illegal',
            hit: '&',
            pos: '1:2:3',
            data: {
              illegal: '&'
            }
          });
          this.eq((Ωhsht__18 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var data, fqn, g, i, j, len, len1, probes_and_matchers, source, Ωhsht__19;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          probes_and_matchers = [
            [
              '&apos;',
              'outer.ncr_named',
              {
                csname: 'U',
                cid: 39
              }
            ],
            [
              '&#1234;',
              'outer.ncr_dec',
              {
                csname: 'U',
                cid: 1234
              }
            ],
            [
              '&jzr#1234;',
              'outer.ncr_dec',
              {
                csname: 'jzr',
                cid: 1234
              }
            ],
            [
              '&#x98a;',
              'outer.ncr_hex',
              {
                csname: 'U',
                cid: 2442
              }
            ],
            [
              '&#x98A;',
              'outer.ncr_hex',
              {
                csname: 'U',
                cid: 2442
              }
            ],
            [
              '&#X98A;',
              'outer.ncr_hex',
              {
                csname: 'U',
                cid: 2442
              }
            ],
            [
              '&#X98a;',
              'outer.ncr_hex',
              {
                csname: 'U',
                cid: 2442
              }
            ],
            [
              '&gb31#xabf73;',
              'outer.ncr_hex',
              {
                csname: 'gb31',
                cid: 704371
              }
            ],
            [
              '&gb31#XABF73;',
              'outer.ncr_hex',
              {
                csname: 'gb31',
                cid: 704371
              }
            ],
            [
              '&big-5#xabf73;',
              'outer.ncr_hex',
              {
                csname: 'big-5',
                cid: 704371
              }
            ],
            [
              '&',
              'outer.illegal',
              {
                illegal: '&'
              }
            ],
            [
              '\\&',
              'outer.escchr',
              {
                chr: '&'
              }
            ],
            [
              '&#x98a',
              'outer.illegal',
              {
                illegal: '&'
              }
            ]
          ];
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [source] = probes_and_matchers[i];
            // echo abbrlxm2 source, g.scan_first probe for [ probe, matcher, ] in probes_and_matchers
            // [ '\\', 'outer.text',                 { bslash: undefined, chr: undefined, text: '\\' } ]
            echo(abbrlxm2(source, g.scan_first(source)));
          }
          for (j = 0, len1 = probes_and_matchers.length; j < len1; j++) {
            [source, fqn, data] = probes_and_matchers[j];
            this.eq((Ωhsht__19 = function() {
              return abbrlxm2(source, g.scan_first(source));
            }), [source, fqn, data]);
          }
          return null;
        })();
        // #.....................................................................................................
        // do =>
        //   g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        //   source  = raw"𠀦𠀧𠀨&apos;𠀦&#1234;&#98a;&#x98a;&#x98A;&#X98A;&#X98a;&big-5#xabf73;𠀧𠀨\&ok\&auml;"
        //   info 'Ωhsht__20', source; g.reset_lnr(); tabulate_lexemes g.scan source
        //   info 'Ωhsht__21', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
        //   info 'Ωhsht__22', source; g.reset_lnr(); lexemes = g.scan source
        //   # @eq ( Ωhsht__23 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.illegal', hit: '>', pos: '1:0:1', data: { illegal: '>' } }
        //   # @eq ( Ωhsht__24 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.illegal', hit: '>', pos: '1:1:2', data: { illegal: '>' } }
        //   # @eq ( Ωhsht__25 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.illegal', hit: '&', pos: '1:2:3', data: { illegal: '&' } }
        //   @eq ( Ωhsht__26 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        //   return null
        //.....................................................................................................
        return null;
      }
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg, t;
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      return (t = new Test(guytest_cfg)).test(this.htmlish_tasks);
    })();
  }

}).call(this);

//# sourceMappingURL=test-htmlish.js.map