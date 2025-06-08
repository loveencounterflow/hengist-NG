(async function() {
  'use strict';
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
  this.effstring_tasks = {
    //=========================================================================================================
    first_take: {
      //-------------------------------------------------------------------------------------------------------
      store_data_in_lexemes: function() {
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
              data.zeros = this.data.zeros = ((ref = (ref1 = data.zeros) != null ? ref1.length : void 0) != null ? ref : 0) > 0;
              data.width = this.data.width = parseInt(data.width, 10);
              break;
            case 'fspec.precision':
              data.precision = this.data.precision = parseInt(data.precision, 10);
              break;
            case 'fspec.trim':
              data.trim = this.data.trim = ((ref2 = (ref3 = data.trim) != null ? ref3.length : void 0) != null ? ref2 : 0) > 0;
              break;
            case 'fspec.type_unit':
              data.type = this.data.type = (ref4 = data.type) != null ? ref4 : null;
              data.unit = this.data.unit = (ref5 = data.unit) != null ? ref5 : null;
          }
          return null;
        };
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωefft__10, Ωefft__11, Ωefft___4, Ωefft___5, Ωefft___6, Ωefft___7, Ωefft___8, Ωefft___9;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast
          }));
          source = ':;';
          // info 'Ωefft___1', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωefft___2', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωefft___3', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωefft___4 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωefft___5 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'outer'
            }
          });
          this.eq((Ωefft___6 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωefft___7 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:1:1',
            data: {
              target: 'outer'
            }
          });
          this.eq((Ωefft___8 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:1:2'
          });
          this.eq((Ωefft___9 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:2:2',
            data: {
              target: null
            }
          });
          this.eq((Ωefft__10 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:2:2'
          });
          this.eq((Ωefft__11 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωefft__15, Ωefft__16, Ωefft__17, Ωefft__18, Ωefft__19, Ωefft__20;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast
          }));
          source = 'not a spec';
          // info 'Ωefft__12', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωefft__13', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωefft__14', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωefft__15 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.start',
            hit: '',
            pos: '1:0:0'
          });
          this.eq((Ωefft__16 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:0:0',
            data: {
              target: 'outer'
            }
          });
          this.eq((Ωefft__17 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: 'not a spec',
            pos: '1:0:10'
          });
          this.eq((Ωefft__18 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.jump',
            hit: '',
            pos: '1:10:10',
            data: {
              target: null
            }
          });
          this.eq((Ωefft__19 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: '$signal.stop',
            hit: '',
            pos: '1:10:10'
          });
          this.eq((Ωefft__20 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωefft__24, Ωefft__25, Ωefft__26, Ωefft__27;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':.4;';
          // info 'Ωefft__21', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωefft__22', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωefft__23', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωefft__24 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωefft__25 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:1:3',
            data: {
              precision: 4
            }
          });
          this.eq((Ωefft__26 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:3:4'
          });
          this.eq((Ωefft__27 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωefft__31, Ωefft__32, Ωefft__33, Ωefft__34, Ωefft__35;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':.4;rest of text';
          // info 'Ωefft__28', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωefft__29', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωefft__30', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωefft__31 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωefft__32 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:1:3',
            data: {
              precision: 4
            }
          });
          this.eq((Ωefft__33 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:3:4'
          });
          this.eq((Ωefft__34 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: 'rest of text',
            pos: '1:4:16'
          });
          this.eq((Ωefft__35 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωefft__39, Ωefft__40, Ωefft__41, Ωefft__42, Ωefft__43, Ωefft__44;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':.4~;...';
          // info 'Ωefft__36', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωefft__37', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωefft__38', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωefft__39 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωefft__40 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:1:3',
            data: {
              precision: 4
            }
          });
          this.eq((Ωefft__41 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:3:4',
            data: {
              trim: true
            }
          });
          this.eq((Ωefft__42 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:4:5'
          });
          this.eq((Ωefft__43 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:5:8'
          });
          this.eq((Ωefft__44 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωefft__48, Ωefft__49, Ωefft__50, Ωefft__51, Ωefft__52, Ωefft__53, Ωefft__54;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':.4~f;...';
          // info 'Ωefft__45', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωefft__46', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωefft__47', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωefft__48 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωefft__49 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:1:3',
            data: {
              precision: 4
            }
          });
          this.eq((Ωefft__50 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:3:4',
            data: {
              trim: true
            }
          });
          this.eq((Ωefft__51 = function() {
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
          this.eq((Ωefft__52 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:5:6'
          });
          this.eq((Ωefft__53 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:6:9'
          });
          this.eq((Ωefft__54 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωefft__58, Ωefft__59, Ωefft__60, Ωefft__61, Ωefft__62, Ωefft__63, Ωefft__64;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':.4~f/µ;...';
          // info 'Ωefft__55', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωefft__56', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωefft__57', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωefft__58 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωefft__59 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:1:3',
            data: {
              precision: 4
            }
          });
          this.eq((Ωefft__60 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:3:4',
            data: {
              trim: true
            }
          });
          this.eq((Ωefft__61 = function() {
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
          this.eq((Ωefft__62 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:7:8'
          });
          this.eq((Ωefft__63 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:8:11'
          });
          this.eq((Ωefft__64 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωefft__68, Ωefft__69, Ωefft__70, Ωefft__71, Ωefft__72, Ωefft__73, Ωefft__74, Ωefft__75;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':20.4~f/µ;...';
          // info 'Ωefft__65', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωefft__66', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωefft__67', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωefft__68 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωefft__69 = function() {
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
          this.eq((Ωefft__70 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:3:5',
            data: {
              precision: 4
            }
          });
          this.eq((Ωefft__71 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:5:6',
            data: {
              trim: true
            }
          });
          this.eq((Ωefft__72 = function() {
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
          this.eq((Ωefft__73 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:9:10'
          });
          this.eq((Ωefft__74 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:10:13'
          });
          this.eq((Ωefft__75 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωefft__79, Ωefft__80, Ωefft__81, Ωefft__82, Ωefft__83, Ωefft__84, Ωefft__85, Ωefft__86;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':020.4~f/µ;...';
          // info 'Ωefft__76', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωefft__77', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωefft__78', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωefft__79 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωefft__80 = function() {
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
          this.eq((Ωefft__81 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:4:6',
            data: {
              precision: 4
            }
          });
          this.eq((Ωefft__82 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:6:7',
            data: {
              trim: true
            }
          });
          this.eq((Ωefft__83 = function() {
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
          this.eq((Ωefft__84 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:10:11'
          });
          this.eq((Ωefft__85 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:11:14'
          });
          this.eq((Ωefft__86 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωefft__90, Ωefft__91, Ωefft__92, Ωefft__93, Ωefft__94, Ωefft__95, Ωefft__96, Ωefft__97, Ωefft__98;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':$020.4~f/µ;...';
          // info 'Ωefft__87', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωefft__88', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωefft__89', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωefft__90 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωefft__91 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.symbol',
            hit: '$',
            pos: '1:1:2',
            data: {
              symbol: '$'
            }
          });
          this.eq((Ωefft__92 = function() {
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
          this.eq((Ωefft__93 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:5:7',
            data: {
              precision: 4
            }
          });
          this.eq((Ωefft__94 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:7:8',
            data: {
              trim: true
            }
          });
          this.eq((Ωefft__95 = function() {
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
          this.eq((Ωefft__96 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:11:12'
          });
          this.eq((Ωefft__97 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:12:15'
          });
          this.eq((Ωefft__98 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωefft_102, Ωefft_103, Ωefft_104, Ωefft_105, Ωefft_106, Ωefft_107, Ωefft_108, Ωefft_109, Ωefft_110, Ωefft_111;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ': $020.4~f/µ;...';
          // info 'Ωefft__99', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωefft_100', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωefft_101', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωefft_102 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωefft_103 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.sign',
            hit: ' ',
            pos: '1:1:2',
            data: {
              sign: ' '
            }
          });
          this.eq((Ωefft_104 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.symbol',
            hit: '$',
            pos: '1:2:3',
            data: {
              symbol: '$'
            }
          });
          this.eq((Ωefft_105 = function() {
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
          this.eq((Ωefft_106 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:6:8',
            data: {
              precision: 4
            }
          });
          this.eq((Ωefft_107 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:8:9',
            data: {
              trim: true
            }
          });
          this.eq((Ωefft_108 = function() {
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
          this.eq((Ωefft_109 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:12:13'
          });
          this.eq((Ωefft_110 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:13:16'
          });
          this.eq((Ωefft_111 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωefft_115, Ωefft_116, Ωefft_117, Ωefft_118, Ωefft_119, Ωefft_120, Ωefft_121, Ωefft_122, Ωefft_123, Ωefft_124, Ωefft_125;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':>-$020.4~f/µ;...';
          // info 'Ωefft_112', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωefft_113', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωefft_114', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωefft_115 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωefft_116 = function() {
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
          this.eq((Ωefft_117 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.sign',
            hit: '-',
            pos: '1:2:3',
            data: {
              sign: '-'
            }
          });
          this.eq((Ωefft_118 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.symbol',
            hit: '$',
            pos: '1:3:4',
            data: {
              symbol: '$'
            }
          });
          this.eq((Ωefft_119 = function() {
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
          this.eq((Ωefft_120 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:7:9',
            data: {
              precision: 4
            }
          });
          this.eq((Ωefft_121 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:9:10',
            data: {
              trim: true
            }
          });
          this.eq((Ωefft_122 = function() {
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
          this.eq((Ωefft_123 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:13:14'
          });
          this.eq((Ωefft_124 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:14:17'
          });
          this.eq((Ωefft_125 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), null);
          return null;
        })();
        (() => {          //.....................................................................................................
          var g, lexemes, source, Ωefft_129, Ωefft_130, Ωefft_131, Ωefft_132, Ωefft_133, Ωefft_134, Ωefft_135, Ωefft_136, Ωefft_137, Ωefft_138, Ωefft_139;
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':_>-$020.4~f/µ;...';
          // info 'Ωefft_126', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωefft_127', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωefft_128', source);
          g.reset_lnr();
          lexemes = g.scan(source);
          this.eq((Ωefft_129 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.enter',
            hit: ':',
            pos: '1:0:1'
          });
          this.eq((Ωefft_130 = function() {
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
          this.eq((Ωefft_131 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.sign',
            hit: '-',
            pos: '1:3:4',
            data: {
              sign: '-'
            }
          });
          this.eq((Ωefft_132 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.symbol',
            hit: '$',
            pos: '1:4:5',
            data: {
              symbol: '$'
            }
          });
          this.eq((Ωefft_133 = function() {
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
          this.eq((Ωefft_134 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.precision',
            hit: '.4',
            pos: '1:8:10',
            data: {
              precision: 4
            }
          });
          this.eq((Ωefft_135 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'fspec.trim',
            hit: '~',
            pos: '1:10:11',
            data: {
              trim: true
            }
          });
          this.eq((Ωefft_136 = function() {
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
          this.eq((Ωefft_137 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.exit',
            hit: ';',
            pos: '1:14:15'
          });
          this.eq((Ωefft_138 = function() {
            return abbrlxm(tabulate_lexeme(lexemes.next().value));
          }), {
            fqname: 'outer.tail',
            hit: '...',
            pos: '1:15:18'
          });
          this.eq((Ωefft_139 = function() {
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
                  throw new Error(`Ωefft_140 encountered unhandled lexeme ${rpr(abbrlxm(lexeme))}`);
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
          // info 'Ωefft_141', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωefft_142', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωefft_143', source);
          g.reset_lnr();
          d = parse_fspec(g, source);
          ref = (Object.keys(d)).sort();
          for (i = 0, len = ref.length; i < len; i++) {
            key = ref[i];
            value = d[key];
            help('Ωefft_144', f`${key}:<10c; | ${rpr(value)}`);
          }
          return null;
        })();
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      store_data_in_grammar: function() {
        var Grammar, cast, declare_lexemes, reset_data, rx, show_data, template;
        ({Grammar, rx} = require('../../../apps/interlex'));
        //.....................................................................................................
        show_data = function(data) {
          var i, key, len, ref, value;
          ref = Object.keys(data);
          // for key in ( Object.keys data ).sort()
          for (i = 0, len = ref.length; i < len; i++) {
            key = ref[i];
            value = data[key];
            help('Ωefft_145', f`${key}:<10c; | ${rpr(value)}`);
          }
          return null;
        };
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
        //-----------------------------------------------------------------------------------------------------
        template = {
          fill: null,
          align: null,
          sign: null,
          symbol: null,
          zeros: false,
          width: null,
          separator: false,
          precision: null,
          trim: false,
          type: null,
          unit: null,
          fspec: '',
          tail: null
        };
        //-----------------------------------------------------------------------------------------------------
        reset_data = function(template) {
          this.data = Object.assign(Object.create(null), template);
          return null;
        };
        //-----------------------------------------------------------------------------------------------------
        cast = function({lnr, level, hit, fqname, data}) {
          var ref, ref1, ref2, ref3, ref4, ref5;
          switch (fqname) {
            case 'fspec.fill_align':
              this.data.fill = data.fill;
              this.data.align = data.align;
              break;
            case 'fspec.sign':
              this.data.sign = data.sign;
              break;
            case 'fspec.symbol':
              this.data.symbol = data.symbol;
              break;
            case 'fspec.zeros_width':
              this.data.zeros = ((ref = (ref1 = data.zeros) != null ? ref1.length : void 0) != null ? ref : 0) > 0;
              this.data.width = parseInt(data.width, 10);
              break;
            case 'fspec.separator':
              this.data.separator = data.separator.length > 0;
              break;
            case 'fspec.precision':
              this.data.precision = parseInt(data.precision, 10);
              break;
            case 'fspec.trim':
              this.data.trim = ((ref2 = (ref3 = data.trim) != null ? ref3.length : void 0) != null ? ref2 : 0) > 0;
              break;
            case 'fspec.type_unit':
              this.data.type = (ref4 = data.type) != null ? ref4 : null;
              this.data.unit = (ref5 = data.unit) != null ? ref5 : null;
              break;
            //.................................................................................................
            case 'outer.enter':
              null;
              break;
            case 'outer.exit':
              null;
              break;
            case 'outer.tail':
              this.data.tail = hit;
              break;
            default:
              throw new Error(`Ωefft_146 encountered unhandled fqname ${rpr(fqname)}`);
          }
          if (level.name === 'fspec') {
            //...................................................................................................
            this.data.fspec += hit;
          }
          return null;
        };
        (() => {          //.....................................................................................................
          var extract, g, result, source, Ωefft_151, Ωefft_152, Ωefft_153, Ωefft_154, Ωefft_155, Ωefft_156, Ωefft_157, Ωefft_158, Ωefft_159, Ωefft_160, Ωefft_161, Ωefft_162, Ωefft_163;
          //---------------------------------------------------------------------------------------------------
          extract = function(g, source) {
            g.scan_to_list(source);
            return Object.assign(Object.create(null), g.data);
          };
          g = declare_lexemes(new Grammar({
            name: 'fspec',
            cast,
            emit_signals: false
          }));
          source = ':_>-$020,.4~f/µ; whatever comes after the fspec';
          // info 'Ωefft_147', source; g.reset_lnr(); tabulate_lexemes g.scan source
          // info 'Ωefft_148', source; g.reset_lnr(); echo abbrlxm lexeme for lexeme from g.scan source
          info('Ωefft_149', extract(g, source));
          info('Ωefft_150', source);
          g.reset_lnr();
          reset_data.call(g, template);
          show_data(result = extract(g, source));
          this.eq((Ωefft_151 = function() {
            return result.fill;
          }), '_');
          this.eq((Ωefft_152 = function() {
            return result.align;
          }), '>');
          this.eq((Ωefft_153 = function() {
            return result.sign;
          }), '-');
          this.eq((Ωefft_154 = function() {
            return result.symbol;
          }), '$');
          this.eq((Ωefft_155 = function() {
            return result.zeros;
          }), true);
          this.eq((Ωefft_156 = function() {
            return result.width;
          }), 20);
          this.eq((Ωefft_157 = function() {
            return result.separator;
          }), true);
          this.eq((Ωefft_158 = function() {
            return result.precision;
          }), 4);
          this.eq((Ωefft_159 = function() {
            return result.trim;
          }), true);
          this.eq((Ωefft_160 = function() {
            return result.type;
          }), 'f');
          this.eq((Ωefft_161 = function() {
            return result.unit;
          }), 'µ');
          this.eq((Ωefft_162 = function() {
            return result.fspec;
          }), '_>-$020,.4~f/µ');
          this.eq((Ωefft_163 = function() {
            return result.tail;
          }), ' whatever comes after the fspec');
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
      return (t = new Test(guytest_cfg)).test(this.effstring_tasks);
    })();
  }

}).call(this);

//# sourceMappingURL=test-effstring-specs.js.map