(async function() {
  'use strict';
  var GTNG, GUY, Test, abbrlxm, alert, condense_lexemes, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, tabulate_lexeme, tabulate_lexemes, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('interlex/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  ({condense_lexemes, abbrlxm, tabulate_lexemes, tabulate_lexeme} = require('./helpers'));

  //###########################################################################################################

  //===========================================================================================================
  this.interlex_tasks = {
    //=========================================================================================================
    effstring_specs: {
      /*
      f`${x}:[[fill]align][sign][symbol][zeros][width][thousands][.precision][~][type[/unit]];` (JS)
      f"#{x}:[[fill]align][sign][symbol][zeros][width][thousands][.precision][~][type[/unit]];" (CoffeeScript)
               ┌─── ┌────  ┌───  ┌───── ┌───── ┌───── ┌───────── ┌────────── ┌─ ┌──── ┌────
               │    │      │     │      │      │      │          │           │  │     │
               │ ¤  │ <    │ ␣   │ $    │ 0    │ ℕ    │ ,        │ .ℕ        │~ │ e   │ /y
                    │ ^    │ +   │ #                                            │ f   │ /z
                    │ >    │ -                                                  │ g   │ /a
                    │ =    │ (                                                  │ r   │ /f
                                                                                │ s   │ /p
                                                                                │ %   │ /n
                                                                                │ p   │ /µ
      * Symbols:                                                                │ b   │ /m
        ¤: any single-width Unicode BMP character                              │ o   │ /1
        ␣: U+0020, space character                                             │ d   │ /k
        ℕ: / [1-9][0-9]* /, an integer number                                  │ x   │ /M
      * other characters represent themselves;                                  │ X   │ /G
      * all fields are optional;                                                │ c   │ /T
      * a leading  fill chr must always be followed by an alignment specifier         │ /P
      * a unit prefix can only be added to fixed format `f` (e.g. `f/µ` for micro)    │ /E
                                                                                      │ /Z
                                                                                      │ /Y
       */
      //-------------------------------------------------------------------------------------------------------
      grammar: function() {
        var Grammar, cast, declare_lexemes, rx;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //.....................................................................................................
        declare_lexemes = function(g) {
          var fspec, outer;
          outer = g.new_level({
            name: 'outer'
          });
          fspec = g.new_level({
            name: 'fspec'
          });
          // :[[fill]align][sign][symbol][zeros][width][thousands][.precision][~][type[/unit]];
          //...................................................................................................
          outer.new_token({
            name: 'enter',
            fit: ':',
            jump: 'fspec'
          });
          outer.new_token({
            name: 'tail',
            fit: /.+$/
          });
          //...................................................................................................
          fspec.new_token({
            name: 'fill_align',
            fit: /(?<fill>.?)(?<align>[<\^>=])/
          });
          fspec.new_token({
            name: 'sign',
            fit: /(?<sign>[\-+\x20\(])/
          });
          fspec.new_token({
            name: 'symbol',
            fit: /(?<symbol>[$#])/
          });
          fspec.new_token({
            name: 'zeros_width',
            fit: /(?<zeros>0*)(?<width>[0-9]+)/
          });
          fspec.new_token({
            name: 'separator',
            fit: /(?<separator>,)/
          });
          fspec.new_token({
            name: 'precision',
            fit: /\.(?<precision>[0-9]+)/
          });
          fspec.new_token({
            name: 'trim',
            fit: /(?<trim>~)/
          });
          fspec.new_token({
            name: 'type_unit',
            fit: rx`(?<type>[efgrs%pbodxXc])(/(?<unit>[zafpnµm1kMGT]))?`
          });
          fspec.new_token({
            name: 'exit',
            fit: ';',
            jump: '..!'
          });
          return g;
        };
        //.....................................................................................................
        cast = function({fqname, data}) {
          var ref, ref1, ref2, ref3, ref4, ref5;
          switch (fqname) {
            case 'fspec.zeros_width':
              data.zeros = ((ref = (ref1 = data.zeros) != null ? ref1.length : void 0) != null ? ref : 0) > 0;
              data.width = parseInt(data.width, 10);
              break;
            case 'fspec.precision':
              data.precision = parseInt(data.precision, 10);
              break;
            case 'fspec.trim':
              data.trim = ((ref2 = (ref3 = data.trim) != null ? ref3.length : void 0) != null ? ref2 : 0) > 0;
              break;
            case 'fspec.type_unit':
              data.type = (ref4 = data.type) != null ? ref4 : null;
              data.unit = (ref5 = data.unit) != null ? ref5 : null;
          }
          return null;
        };
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωilxt_600, Ωilxt_601, Ωilxt_602, Ωilxt_603, Ωilxt_604, Ωilxt_605, Ωilxt_606, Ωilxt_607;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast
          }));
          source = ':;';
          // info 'Ωilxt_597', source; g.reset_lnr 1; tabulate_lexemes g.scan source
          // info 'Ωilxt_598', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_599', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_600 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_601 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'outer'
            }
          });
          this.eq((Ωilxt_602 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_603 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:1:1',
            data: {
              target: 'outer'
            }
          });
          this.eq((Ωilxt_604 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:1:2'
          });
          this.eq((Ωilxt_605 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:2:2',
            data: {
              target: null
            }
          });
          this.eq((Ωilxt_606 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:2:2'
          });
          this.eq((Ωilxt_607 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωilxt_611, Ωilxt_612, Ωilxt_613, Ωilxt_614, Ωilxt_615, Ωilxt_616;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast
          }));
          source = 'not a spec';
          // info 'Ωilxt_608', source; g.reset_lnr 1; tabulate_lexemes g.scan source
          // info 'Ωilxt_609', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_610', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_611 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωilxt_612 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'outer'
            }
          });
          this.eq((Ωilxt_613 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: 'not a spec',
            pos: '1:0:10'
          });
          this.eq((Ωilxt_614 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:10:10',
            data: {
              target: null
            }
          });
          this.eq((Ωilxt_615 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:10:10'
          });
          this.eq((Ωilxt_616 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωilxt_620, Ωilxt_621, Ωilxt_622, Ωilxt_623;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':.4;';
          // info 'Ωilxt_617', source; g.reset_lnr 1; tabulate_lexemes g.scan source
          // info 'Ωilxt_618', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_619', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_620 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_621 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:1:3',
            data: {
              precision: 4
            }
          });
          this.eq((Ωilxt_622 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:3:4'
          });
          this.eq((Ωilxt_623 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωilxt_627, Ωilxt_628, Ωilxt_629, Ωilxt_630, Ωilxt_631;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':.4;rest of text';
          // info 'Ωilxt_624', source; g.reset_lnr 1; tabulate_lexemes g.scan source
          // info 'Ωilxt_625', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_626', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_627 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_628 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:1:3',
            data: {
              precision: 4
            }
          });
          this.eq((Ωilxt_629 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:3:4'
          });
          this.eq((Ωilxt_630 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: 'rest of text',
            pos: '1:4:16'
          });
          this.eq((Ωilxt_631 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωilxt_635, Ωilxt_636, Ωilxt_637, Ωilxt_638, Ωilxt_639, Ωilxt_640;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':.4~;...';
          // info 'Ωilxt_632', source; g.reset_lnr 1; tabulate_lexemes g.scan source
          // info 'Ωilxt_633', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_634', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_635 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_636 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:1:3',
            data: {
              precision: 4
            }
          });
          this.eq((Ωilxt_637 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:3:4',
            data: {
              trim: true
            }
          });
          this.eq((Ωilxt_638 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:4:5'
          });
          this.eq((Ωilxt_639 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:5:8'
          });
          this.eq((Ωilxt_640 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωilxt_644, Ωilxt_645, Ωilxt_646, Ωilxt_647, Ωilxt_648, Ωilxt_649, Ωilxt_650;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':.4~f;...';
          // info 'Ωilxt_641', source; g.reset_lnr 1; tabulate_lexemes g.scan source
          // info 'Ωilxt_642', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_643', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_644 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_645 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:1:3',
            data: {
              precision: 4
            }
          });
          this.eq((Ωilxt_646 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:3:4',
            data: {
              trim: true
            }
          });
          this.eq((Ωilxt_647 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.type_unit',
            hit: 'f',
            pos: '1:4:5',
            data: {
              type: 'f',
              unit: null
            }
          });
          this.eq((Ωilxt_648 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:5:6'
          });
          this.eq((Ωilxt_649 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:6:9'
          });
          this.eq((Ωilxt_650 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωilxt_654, Ωilxt_655, Ωilxt_656, Ωilxt_657, Ωilxt_658, Ωilxt_659, Ωilxt_660;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':.4~f/µ;...';
          // info 'Ωilxt_651', source; g.reset_lnr 1; tabulate_lexemes g.scan source
          // info 'Ωilxt_652', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_653', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_654 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_655 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:1:3',
            data: {
              precision: 4
            }
          });
          this.eq((Ωilxt_656 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:3:4',
            data: {
              trim: true
            }
          });
          this.eq((Ωilxt_657 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.type_unit',
            hit: 'f/µ',
            pos: '1:4:7',
            data: {
              type: 'f',
              unit: 'µ'
            }
          });
          this.eq((Ωilxt_658 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:7:8'
          });
          this.eq((Ωilxt_659 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:8:11'
          });
          this.eq((Ωilxt_660 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωilxt_664, Ωilxt_665, Ωilxt_666, Ωilxt_667, Ωilxt_668, Ωilxt_669, Ωilxt_670, Ωilxt_671;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':20.4~f/µ;...';
          // info 'Ωilxt_661', source; g.reset_lnr 1; tabulate_lexemes g.scan source
          // info 'Ωilxt_662', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_663', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_664 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_665 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.zeros_width',
            hit: '20',
            pos: '1:1:3',
            data: {
              zeros: false,
              width: 20
            }
          });
          this.eq((Ωilxt_666 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:3:5',
            data: {
              precision: 4
            }
          });
          this.eq((Ωilxt_667 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:5:6',
            data: {
              trim: true
            }
          });
          this.eq((Ωilxt_668 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.type_unit',
            hit: 'f/µ',
            pos: '1:6:9',
            data: {
              type: 'f',
              unit: 'µ'
            }
          });
          this.eq((Ωilxt_669 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:9:10'
          });
          this.eq((Ωilxt_670 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:10:13'
          });
          this.eq((Ωilxt_671 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωilxt_675, Ωilxt_676, Ωilxt_677, Ωilxt_678, Ωilxt_679, Ωilxt_680, Ωilxt_681, Ωilxt_682;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':020.4~f/µ;...';
          // info 'Ωilxt_672', source; g.reset_lnr 1; tabulate_lexemes g.scan source
          // info 'Ωilxt_673', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_674', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_675 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_676 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.zeros_width',
            hit: '020',
            pos: '1:1:4',
            data: {
              zeros: true,
              width: 20
            }
          });
          this.eq((Ωilxt_677 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:4:6',
            data: {
              precision: 4
            }
          });
          this.eq((Ωilxt_678 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:6:7',
            data: {
              trim: true
            }
          });
          this.eq((Ωilxt_679 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.type_unit',
            hit: 'f/µ',
            pos: '1:7:10',
            data: {
              type: 'f',
              unit: 'µ'
            }
          });
          this.eq((Ωilxt_680 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:10:11'
          });
          this.eq((Ωilxt_681 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:11:14'
          });
          this.eq((Ωilxt_682 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωilxt_686, Ωilxt_687, Ωilxt_688, Ωilxt_689, Ωilxt_690, Ωilxt_691, Ωilxt_692, Ωilxt_693, Ωilxt_694;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':$020.4~f/µ;...';
          // info 'Ωilxt_683', source; g.reset_lnr 1; tabulate_lexemes g.scan source
          // info 'Ωilxt_684', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_685', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_686 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_687 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.symbol',
            hit: '$',
            pos: '1:1:2',
            data: {
              symbol: '$'
            }
          });
          this.eq((Ωilxt_688 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.zeros_width',
            hit: '020',
            pos: '1:2:5',
            data: {
              zeros: true,
              width: 20
            }
          });
          this.eq((Ωilxt_689 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:5:7',
            data: {
              precision: 4
            }
          });
          this.eq((Ωilxt_690 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:7:8',
            data: {
              trim: true
            }
          });
          this.eq((Ωilxt_691 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.type_unit',
            hit: 'f/µ',
            pos: '1:8:11',
            data: {
              type: 'f',
              unit: 'µ'
            }
          });
          this.eq((Ωilxt_692 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:11:12'
          });
          this.eq((Ωilxt_693 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:12:15'
          });
          this.eq((Ωilxt_694 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωilxt_698, Ωilxt_699, Ωilxt_700, Ωilxt_701, Ωilxt_702, Ωilxt_703, Ωilxt_704, Ωilxt_705, Ωilxt_706, Ωilxt_707;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ': $020.4~f/µ;...';
          // info 'Ωilxt_695', source; g.reset_lnr 1; tabulate_lexemes g.scan source
          // info 'Ωilxt_696', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_697', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_698 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_699 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.sign',
            hit: ' ',
            pos: '1:1:2',
            data: {
              sign: ' '
            }
          });
          this.eq((Ωilxt_700 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.symbol',
            hit: '$',
            pos: '1:2:3',
            data: {
              symbol: '$'
            }
          });
          this.eq((Ωilxt_701 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.zeros_width',
            hit: '020',
            pos: '1:3:6',
            data: {
              zeros: true,
              width: 20
            }
          });
          this.eq((Ωilxt_702 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:6:8',
            data: {
              precision: 4
            }
          });
          this.eq((Ωilxt_703 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:8:9',
            data: {
              trim: true
            }
          });
          this.eq((Ωilxt_704 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.type_unit',
            hit: 'f/µ',
            pos: '1:9:12',
            data: {
              type: 'f',
              unit: 'µ'
            }
          });
          this.eq((Ωilxt_705 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:12:13'
          });
          this.eq((Ωilxt_706 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:13:16'
          });
          this.eq((Ωilxt_707 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωilxt_711, Ωilxt_712, Ωilxt_713, Ωilxt_714, Ωilxt_715, Ωilxt_716, Ωilxt_717, Ωilxt_718, Ωilxt_719, Ωilxt_720, Ωilxt_721;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':>-$020.4~f/µ;...';
          // info 'Ωilxt_708', source; g.reset_lnr 1; tabulate_lexemes g.scan source
          // info 'Ωilxt_709', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_710', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_711 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_712 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.fill_align',
            hit: '>',
            pos: '1:1:2',
            data: {
              fill: '',
              align: '>'
            }
          });
          this.eq((Ωilxt_713 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.sign',
            hit: '-',
            pos: '1:2:3',
            data: {
              sign: '-'
            }
          });
          this.eq((Ωilxt_714 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.symbol',
            hit: '$',
            pos: '1:3:4',
            data: {
              symbol: '$'
            }
          });
          this.eq((Ωilxt_715 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.zeros_width',
            hit: '020',
            pos: '1:4:7',
            data: {
              zeros: true,
              width: 20
            }
          });
          this.eq((Ωilxt_716 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:7:9',
            data: {
              precision: 4
            }
          });
          this.eq((Ωilxt_717 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:9:10',
            data: {
              trim: true
            }
          });
          this.eq((Ωilxt_718 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.type_unit',
            hit: 'f/µ',
            pos: '1:10:13',
            data: {
              type: 'f',
              unit: 'µ'
            }
          });
          this.eq((Ωilxt_719 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:13:14'
          });
          this.eq((Ωilxt_720 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:14:17'
          });
          this.eq((Ωilxt_721 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωilxt_725, Ωilxt_726, Ωilxt_727, Ωilxt_728, Ωilxt_729, Ωilxt_730, Ωilxt_731, Ωilxt_732, Ωilxt_733, Ωilxt_734, Ωilxt_735;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':_>-$020.4~f/µ;...';
          // info 'Ωilxt_722', source; g.reset_lnr 1; tabulate_lexemes g.scan source
          // info 'Ωilxt_723', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_724', source);
          g.reset_lnr(1);
          lexemes = g.scan(source);
          this.eq((Ωilxt_725 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωilxt_726 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.fill_align',
            hit: '_>',
            pos: '1:1:3',
            data: {
              fill: '_',
              align: '>'
            }
          });
          this.eq((Ωilxt_727 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.sign',
            hit: '-',
            pos: '1:3:4',
            data: {
              sign: '-'
            }
          });
          this.eq((Ωilxt_728 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.symbol',
            hit: '$',
            pos: '1:4:5',
            data: {
              symbol: '$'
            }
          });
          this.eq((Ωilxt_729 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.zeros_width',
            hit: '020',
            pos: '1:5:8',
            data: {
              zeros: true,
              width: 20
            }
          });
          this.eq((Ωilxt_730 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:8:10',
            data: {
              precision: 4
            }
          });
          this.eq((Ωilxt_731 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:10:11',
            data: {
              trim: true
            }
          });
          this.eq((Ωilxt_732 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.type_unit',
            hit: 'f/µ',
            pos: '1:11:14',
            data: {
              type: 'f',
              unit: 'µ'
            }
          });
          this.eq((Ωilxt_733 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:14:15'
          });
          this.eq((Ωilxt_734 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:15:18'
          });
          this.eq((Ωilxt_735 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var d, g, i, key, len, parse_fspec, ref, source, value;
          //---------------------------------------------------------------------------------------------------
          parse_fspec = function(g, source) {
            var R, lexeme;
            R = Object.create(null);
            R.source = source;
            R.fspec = '';
            for (lexeme of g.scan(source)) {
              switch (true) {
                case lexeme.fqname === 'outer.enter':
                  null;
                  break;
                case lexeme.fqname === 'outer.exit':
                  null;
                  break;
                case lexeme.fqname === 'outer.tail':
                  R.tail = lexeme.hit;
                  break;
                case lexeme.level.name === 'fspec':
                  Object.assign(R, lexeme.data);
                  R.fspec += lexeme.hit;
                  break;
                default:
                  throw new Error(`Ωilxt_739 encountered unhandled lexeme ${rpr(abbrlxm(lexeme))}`);
              }
            }
            return R;
          };
          //---------------------------------------------------------------------------------------------------
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':_>-$020.4~f/µ; whatever comes after the fspec';
          // info 'Ωilxt_736', source; g.reset_lnr 1; tabulate_lexemes g.scan source
          // info 'Ωilxt_737', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωilxt_738', source);
          g.reset_lnr(1);
          d = parse_fspec(g, source);
          ref = (Object.keys(d)).sort();
          for (i = 0, len = ref.length; i < len; i++) {
            key = ref[i];
            value = d[key];
            help('Ωilxt_740', f`${key}:<10c; | ${rpr(value)}`);
          }
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
      var guytest_cfg;
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      // guytest_cfg = { throw_on_error: false, show_passes: false, report_checks: false, }
      // guytest_cfg = { throw_on_error: false, show_passes: true, report_checks: true, }
      (new Test(guytest_cfg)).test(this.interlex_tasks);
      // ( new Test guytest_cfg ).test { ghost_tokens: @interlex_tasks.ghost_tokens, }
      return (new Test(guytest_cfg)).test({
        effstring_specs: this.interlex_tasks.effstring_specs
      });
    })();
  }

  // ( new Test guytest_cfg ).test { cfg_settings: @interlex_tasks.cfg_settings, }
// ( new Test guytest_cfg ).test { numbering: @interlex_tasks.basics.numbering, }
// ( new Test guytest_cfg ).test { stack: @interlex_tasks.stack, }

}).call(this);

//# sourceMappingURL=test-effstring-specs.js.map