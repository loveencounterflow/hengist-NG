(async function() {
  /*

  ## Glossary of Abbreviations

  * **LPB**:      **L**eft **P**ointy **B**racket, `<`
  * **RPB**:      **R**ight **P**ointy **B**racket, `>`
  * **LTAG**:     **L**eft tag: <xxx>, <xxx/>
  * **RTAG**:     **R**ight tag: </xxx>
  * **NONCR**:    Named Or **N**umerical **C**haracter **R**eference, also a '**NON**-**C**ha**R**acter' in
    many contexts where only a literal character will have a certain function (like literal `<` as opposed
    to `&lt;` for starting a tag literal in HTML)
  * csn
  * cid
  * chr

   */
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
          var ltag, ncr_cast, outer, rtag;
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
          ncr_cast = function({fqname, hit, data}) {
            var ref;
            if ((data.csn == null) || (data.csn === '')) {
              data.csn = 'U';
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
                data.cid = (ref = {
                  apos: 0x27,
                  auml: 0xe4
                }[data.cpname]) != null ? ref : -1;
                delete data.cpname;
            }
            return null;
          };
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
            fit: /&(?<csn>[^#;]*)#(?<dec>[0-9]+);/,
            cast: ncr_cast
          });
          outer.new_token({
            name: 'ncr_hex',
            fit: /&(?<csn>[^#;]*)#[xX](?<hex>[0-9a-fA-F]+);/,
            cast: ncr_cast
          });
          outer.new_token({
            name: 'illegal',
            fit: /(?<illegal>[<>&])/,
            merge: true
          });
          outer.new_token({
            name: 'text',
            fit: /(?<text>[^<>&\\]+)/
          });
          //...................................................................................................
          /* TAINT is ltag name complicated enough for its own level? */
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
          var g, lexemes, source, Ωhsht__15, Ωhsht__16;
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
            hit: '>>&',
            pos: '1:0:3',
            data: {
              illegal: ['>', '>', '&']
            }
          });
          this.eq((Ωhsht__16 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var data, fqn, g, i, len, probes_and_matchers, source, Ωhsht__17;
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
                csn: 'U',
                cid: 39
              }
            ],
            [
              '&#1234;',
              'outer.ncr_dec',
              {
                csn: 'U',
                cid: 1234
              }
            ],
            [
              '&jzr#1234;',
              'outer.ncr_dec',
              {
                csn: 'jzr',
                cid: 1234
              }
            ],
            [
              '&#x98a;',
              'outer.ncr_hex',
              {
                csn: 'U',
                cid: 2442
              }
            ],
            [
              '&#x98A;',
              'outer.ncr_hex',
              {
                csn: 'U',
                cid: 2442
              }
            ],
            [
              '&#X98A;',
              'outer.ncr_hex',
              {
                csn: 'U',
                cid: 2442
              }
            ],
            [
              '&#X98a;',
              'outer.ncr_hex',
              {
                csn: 'U',
                cid: 2442
              }
            ],
            [
              '&gb31#xabf73;',
              'outer.ncr_hex',
              {
                csn: 'gb31',
                cid: 704371
              }
            ],
            [
              '&gb31#XABF73;',
              'outer.ncr_hex',
              {
                csn: 'gb31',
                cid: 704371
              }
            ],
            [
              '&big-5#xabf73;',
              'outer.ncr_hex',
              {
                csn: 'big-5',
                cid: 704371
              }
            ],
            [
              '&',
              'outer.illegal',
              {
                illegal: ['&']
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
                illegal: ['&']
              }
            ]
          ];
// echo ( abbrlxm2 source, g.scan_first source ) for [ source, ] in probes_and_matchers
// [ '\\', 'outer.text',                 { bslash: undefined, chr: undefined, text: '\\' } ]
          for (i = 0, len = probes_and_matchers.length; i < len; i++) {
            [source, fqn, data] = probes_and_matchers[i];
            this.eq((Ωhsht__17 = function() {
              return abbrlxm2(source, g.scan_first(source));
            }), [source, fqn, data]);
          }
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωhsht__21, Ωhsht__22, Ωhsht__23, Ωhsht__24, Ωhsht__25, Ωhsht__26, Ωhsht__27, Ωhsht__28, Ωhsht__29, Ωhsht__30, Ωhsht__31, Ωhsht__32, Ωhsht__33, Ωhsht__34, Ωhsht__35, Ωhsht__36, Ωhsht__37, Ωhsht__38;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = raw`𠀦𠀧𠀨&apos;𠀦&#1234;&#98a;&#x98a;&#x98A;&#X98A;&#X98a;&big-5#xabf73;𠀧𠀨\&ok\&auml;&auml;`;
          // info 'Ωhsht__18', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωhsht__19', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωhsht__20', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωhsht__21 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.text',
            hit: '𠀦𠀧𠀨',
            pos: '1:0:6',
            data: {
              text: '𠀦𠀧𠀨'
            }
          });
          this.eq((Ωhsht__22 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.ncr_named',
            hit: '&apos;',
            pos: '1:6:12',
            data: {
              csn: 'U',
              cid: 39
            }
          });
          this.eq((Ωhsht__23 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.text',
            hit: '𠀦',
            pos: '1:12:14',
            data: {
              text: '𠀦'
            }
          });
          this.eq((Ωhsht__24 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.ncr_dec',
            hit: '&#1234;',
            pos: '1:14:21',
            data: {
              csn: 'U',
              cid: 1234
            }
          });
          this.eq((Ωhsht__25 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.illegal',
            hit: '&',
            pos: '1:21:22',
            data: {
              illegal: ['&']
            }
          });
          this.eq((Ωhsht__26 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.text',
            hit: '#98a;',
            pos: '1:22:27',
            data: {
              text: '#98a;'
            }
          });
          this.eq((Ωhsht__27 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.ncr_hex',
            hit: '&#x98a;',
            pos: '1:27:34',
            data: {
              csn: 'U',
              cid: 2442
            }
          });
          this.eq((Ωhsht__28 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.ncr_hex',
            hit: '&#x98A;',
            pos: '1:34:41',
            data: {
              csn: 'U',
              cid: 2442
            }
          });
          this.eq((Ωhsht__29 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.ncr_hex',
            hit: '&#X98A;',
            pos: '1:41:48',
            data: {
              csn: 'U',
              cid: 2442
            }
          });
          this.eq((Ωhsht__30 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.ncr_hex',
            hit: '&#X98a;',
            pos: '1:48:55',
            data: {
              csn: 'U',
              cid: 2442
            }
          });
          this.eq((Ωhsht__31 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.ncr_hex',
            hit: '&big-5#xabf73;',
            pos: '1:55:69',
            data: {
              csn: 'big-5',
              cid: 704371
            }
          });
          this.eq((Ωhsht__32 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.text',
            hit: '𠀧𠀨',
            pos: '1:69:73',
            data: {
              text: '𠀧𠀨'
            }
          });
          this.eq((Ωhsht__33 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.escchr',
            hit: '\\&',
            pos: '1:73:75',
            data: {
              chr: '&'
            }
          });
          this.eq((Ωhsht__34 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.text',
            hit: 'ok',
            pos: '1:75:77',
            data: {
              text: 'ok'
            }
          });
          this.eq((Ωhsht__35 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.escchr',
            hit: '\\&',
            pos: '1:77:79',
            data: {
              chr: '&'
            }
          });
          this.eq((Ωhsht__36 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.text',
            hit: 'auml;',
            pos: '1:79:84',
            data: {
              text: 'auml;'
            }
          });
          this.eq((Ωhsht__37 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.ncr_named',
            hit: '&auml;',
            pos: '1:84:90',
            data: {
              csn: 'U',
              cid: 228
            }
          });
          this.eq((Ωhsht__38 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
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