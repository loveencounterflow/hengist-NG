(async function() {
  'use strict';
  var GTNG, GUY, TMP_types, Test, WGUY, alert, debug, echo, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  WGUY = require('../../../apps/webguy');

  TMP_types = new (require('intertype-203.0.0')).Intertype();

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  // test_mode                 = 'throw_failures'
  // test_mode                 = 'throw_errors'
  // test_mode                 = 'failsafe'

  //###########################################################################################################

  //===========================================================================================================
  this.intertype_tasks = {
    //---------------------------------------------------------------------------------------------------------
    module_exports: function() {
      var EFFSTRING, Ω___2, Ω___3;
      EFFSTRING = require('../../../apps/effstring');
      //.....................................................................................................
      // @throws ( Ω___1 = -> create_typespace() ), /declaration for type 'wholenumber' contains forward reference to type 'integer'/
      this.eq((Ω___2 = function() {
        return typeof EFFSTRING;
      }), 'object');
      this.eq((Ω___3 = function() {
        return typeof EFFSTRING.f;
      }), 'function');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    re_matches: function() {
      var _format_re, Ω__10, Ω__11, Ω__12, Ω___4, Ω___5, Ω___6, Ω___7, Ω___8, Ω___9;
      ({_format_re} = require('../../../apps/effstring'));
      //.....................................................................................................
      this.eq((Ω___4 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":5;)".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '5',
        tail: ')'
      });
      this.eq((Ω___5 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":>5;)".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '>5',
        tail: ')'
      });
      this.eq((Ω___6 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":<5;)".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '<5',
        tail: ')'
      });
      this.eq((Ω___7 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":>5.2;)".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '>5.2',
        tail: ')'
      });
      this.eq((Ω___8 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;<5;)".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '\\',
        tail: '<5;)'
      });
      this.eq((Ω___9 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;<5;);".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '\\',
        tail: '<5;);'
      });
      this.eq((Ω__10 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;<5;)\\;".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '\\',
        tail: '<5;)\\;'
      });
      this.eq((Ω__11 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;>15;)".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '\\',
        tail: '>15;)'
      });
      this.eq((Ω__12 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":;>15;)".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: ';>15',
        tail: ')'
      });
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    basic_functionality: function() {
      var f, Ω__13, Ω__14, Ω__15, Ω__16, Ω__17, Ω__18, Ω__19, Ω__20, Ω__21, Ω__22, Ω__23, Ω__24, Ω__25, Ω__26, Ω__27;
      ({f} = require('../../../apps/effstring'));
      //.....................................................................................................
      this.eq((Ω__13 = function() {
        return f``;
      }), '');
      this.eq((Ω__14 = function() {
        return f`helo`;
      }), 'helo');
      this.eq((Ω__15 = function() {
        return f`(#{123})`;
      }), '(#{123})');
      this.eq((Ω__16 = function() {
        return f`(#{123}\;)`;
      }), '(#{123};)');
      this.eq((Ω__17 = function() {
        return f`(#{123}\\;)`;
      }), '(#{123}\\;)');
      this.eq((Ω__18 = function() {
        return f`(${123})`;
      }), '(123)');
      this.eq((Ω__19 = function() {
        return f`(${123}:5;)`;
      }), '(  123)');
      this.eq((Ω__20 = function() {
        return f`(${123}:>5;)`;
      }), '(  123)');
      this.eq((Ω__21 = function() {
        return f`(${123}:<5;)`;
      }), '(123  )');
      this.eq((Ω__22 = function() {
        return f`(${123.456}:>5.2;)`;
      }), '(1.2e+2)');
      this.eq((Ω__23 = function() {
        return f`(${123}:;>15;)`;
      }), '(;;;;;;;;;;;;123)');
      this.eq((Ω__24 = function() {
        return f`(${123}:;<15;)`;
      }), '(123;;;;;;;;;;;;)');
      this.eq((Ω__25 = function() {
        return f`(${123}:>>15;)`;
      }), '(>>>>>>>>>>>>123)');
      this.eq((Ω__26 = function() {
        return f`(${123}:<>15;)`;
      }), '(<<<<<<<<<<<<123)');
      this.eq((Ω__27 = function() {
        return f`(${123}:;<7;)`;
      }), '(123;;;;)');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    malformed_formats: function() {
      var Effstring_error, Effstring_lib_syntax_error, Effstring_syntax_error, f, Ω__28, Ω__29, Ω__30, Ω__31, Ω__32, Ω__33, Ω__34, Ω__35, Ω__36, Ω__37, Ω__38, Ω__39, Ω__40, Ω__41;
      ({f, Effstring_error, Effstring_syntax_error, Effstring_lib_syntax_error} = require('../../../apps/effstring'));
      //.......................................................................................................
      this.throws((Ω__28 = function() {
        return f`(${123}:;>15)`;
      }), /\(Effstring_syntax_error\) illegal format expression ':;>15\)'/);
      this.throws((Ω__29 = function() {
        return f`(${123}:)`;
      }), /\(Effstring_syntax_error\) illegal format expression/);
      this.throws((Ω__30 = function() {
        return f`(${123}:;)`;
      }), /\(Effstring_syntax_error\) illegal format expression ':;\)'/);
      this.throws((Ω__31 = function() {
        return f`(${123}:--->3f;)`;
      }), /\(Effstring_lib_syntax_error\) illegal format expression '--->3f'/);
      this.eq((Ω__32 = function() {
        var e;
        try {
          return f`(${123}:;)`;
        } catch (error) {
          e = error;
          return e instanceof Effstring_error;
        }
      }), true);
      this.eq((Ω__33 = function() {
        var e;
        try {
          return f`(${123}:;)`;
        } catch (error) {
          e = error;
          return e instanceof Effstring_syntax_error;
        }
      }), true);
      this.eq((Ω__34 = function() {
        var e;
        try {
          return f`(${123}:;)`;
        } catch (error) {
          e = error;
          return e instanceof Effstring_lib_syntax_error;
        }
      }), false);
      this.eq((Ω__35 = function() {
        var e;
        try {
          return f`(${123}:--->3f;)`;
        } catch (error) {
          e = error;
          return e instanceof Effstring_error;
        }
      }), true);
      this.eq((Ω__36 = function() {
        var e;
        try {
          return f`(${123}:--->3f;)`;
        } catch (error) {
          e = error;
          return e instanceof Effstring_syntax_error;
        }
      }), true);
      this.eq((Ω__37 = function() {
        var e;
        try {
          return f`(${123}:--->3f;)`;
        } catch (error) {
          e = error;
          return e instanceof Effstring_lib_syntax_error;
        }
      }), true);
      this.throws((Ω__38 = function() {
        return f`(${123}:\\;<5;)`;
      }), /illegal format expression/);
      this.throws((Ω__39 = function() {
        return f`(${123}:\\;<5;);`;
      }), /illegal format expression/);
      this.throws((Ω__40 = function() {
        return f`(${123}:\\;<5;)\\;`;
      }), /illegal format expression/);
      this.throws((Ω__41 = function() {
        return f`(${123}:\\;>15;)`;
      }), /illegal format expression/);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    fixed_point_notation: function() {
      var f, Ω__42, Ω__43, Ω__44, Ω__45, Ω__46, Ω__47, Ω__48, Ω__49, Ω__50, Ω__51, Ω__52, Ω__53, Ω__54, Ω__55, Ω__56, Ω__57, Ω__58, Ω__59, Ω__60, Ω__61, Ω__62, Ω__63, Ω__64, Ω__65;
      ({f} = require('../../../apps/effstring'));
      //.....................................................................................................
      this.eq((Ω__42 = function() {
        return f`(${123.456}:>5.2f;)`;
      }), '(123.46)');
      this.eq((Ω__43 = function() {
        return f`(${123.456}:>15.2f;)`;
      }), '(         123.46)');
      this.eq((Ω__44 = function() {
        return f`(${123.456}:<15.2f;)`;
      }), '(123.46         )');
      this.eq((Ω__45 = function() {
        return f`(${1234.567}:>15.2f;)`;
      }), '(        1234.57)');
      this.eq((Ω__46 = function() {
        return f`(${1234.567}:<15.2f;)`;
      }), '(1234.57        )');
      this.eq((Ω__47 = function() {
        return f`(${1234.567}:=>15.2f;)`;
      }), '(========1234.57)');
      this.eq((Ω__48 = function() {
        return f`(${1234.567}:=<15.2f;)`;
      }), '(1234.57========)');
      this.eq((Ω__49 = function() {
        return f`(${1234.567}:=>15,.2f;)`;
      }), '(=======1,234.57)');
      this.eq((Ω__50 = function() {
        return f`(${1234.567}:=<15,.2f;)`;
      }), '(1,234.57=======)');
      //.......................................................................................................
      this.eq((Ω__51 = function() {
        return f`(${-1234.567}:_>15,.2f;)`;
      }), '(______−1,234.57)');
      this.eq((Ω__52 = function() {
        return f`(${+1234.567}:_>-15,.2f;)`;
      }), '(_______1,234.57)');
      this.eq((Ω__53 = function() {
        return f`(${-1234.567}:_>-15,.2f;)`;
      }), '(______−1,234.57)');
      this.eq((Ω__54 = function() {
        return f`(${+1234.567}:_>+15,.2f;)`;
      }), '(______+1,234.57)');
      this.eq((Ω__55 = function() {
        return f`(${-1234.567}:_>+15,.2f;)`;
      }), '(______−1,234.57)');
      this.eq((Ω__56 = function() {
        return f`(${+1234.567}:_=+15,.2f;)`;
      }), '(+______1,234.57)');
      this.eq((Ω__57 = function() {
        return f`(${-1234.567}:_=+15,.2f;)`;
      }), '(−______1,234.57)');
      this.eq((Ω__58 = function() {
        return f`(${-1234.567}:_=+015,.2f;)`;
      }), '(−0,000,001,234.57)');
      this.eq((Ω__59 = function() {
        return f`(${-1234.567}:=+015,.2f;)`;
      }), '(−0,000,001,234.57)');
      this.eq((Ω__60 = function() {
        return f`(${+1234.567}:_=015,.2f;)`;
      }), '(0,000,001,234.57)');
      this.eq((Ω__61 = function() {
        return f`(${+1234.567}:=015,.2f;)`;
      }), '(0,000,001,234.57)');
      this.eq((Ω__62 = function() {
        return f`(${+1234.567}:_=015.2f;)`;
      }), '(000000001234.57)');
      this.eq((Ω__63 = function() {
        return f`(${+1234.567}:=015.2f;)`;
      }), '(000000001234.57)');
      this.eq((Ω__64 = function() {
        return f`(${-1234.567}:_=015.2f;)`;
      }), '(−00000001234.57)');
      this.eq((Ω__65 = function() {
        return f`(${-1234.567}:=015.2f;)`;
      }), '(−00000001234.57)');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    from_the_docs: function() {
      var f, Ω__66, Ω__67, Ω__69, Ω__70, Ω__71, Ω__72, Ω__73;
      ({f} = require('../../../apps/effstring'));
      /* TAINT check with `$` format will rely on locale setting of the machine the tests are running on */
      //.....................................................................................................
      this.eq((Ω__66 = function() {
        return f`${0.123}:.0%;`;
      }), '12%'); // rounded percentage, "12%"
      this.eq((Ω__67 = function() {
        return f`${-3.5}:($.2f;`;
      }), '($3.50)'); // localized fixed-point currency, "(£3.50)"
      // @eq ( Ω__68 = -> f"#{-3.5}:($.2f;"  ), '(£3.50)'              # localized fixed-point currency, "(£3.50)"
      this.eq((Ω__69 = function() {
        return f`${42}:+20;`;
      }), '                 +42'); // space-filled and signed, "                 +42"
      this.eq((Ω__70 = function() {
        return f`${42}:.^20;`;
      }), '.........42.........'); // dot-filled and centered, ".........42........."
      this.eq((Ω__71 = function() {
        return f`${42e6}:.2s;`;
      }), '42M'); // SI-prefix with two significant digits, "42M"
      this.eq((Ω__72 = function() {
        return f`${48879}:#x;`;
      }), '0xbeef'); // prefixed lowercase hexadecimal, "0xbeef"
      this.eq((Ω__73 = function() {
        return f`${4223}:,.2r;`;
      }), '4,200'); // grouped thousands with two significant digits, "4,200"
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    effstring_format_test_js: function() {
      var f, Ω__74, Ω__75, Ω__76, Ω__77, Ω__78, Ω__79, Ω__80;
      ({f} = require('../../../apps/effstring'));
      /* TAINT check with `$` format will rely on locale setting of the machine the tests are running on */
      //.....................................................................................................
      this.throws((Ω__74 = function() {
        return f`${0}:foo;`;
      }), /invalid format: foo/);
      this.throws((Ω__75 = function() {
        return f`${0}:.-2s;`;
      }), /invalid format: \.-2s/);
      this.throws((Ω__76 = function() {
        return f`${0}:.f;`;
      }), /invalid format: \.f/);
      this.eq((Ω__77 = function() {
        return f`${0}:.30f;`;
      }), "0.00000000000000000000");
      this.eq((Ω__78 = function() {
        return f`${1}:.0g;`;
      }), "1");
      this.eq((Ω__79 = function() {
        return f`${Number.MIN_VALUE}:s;`;
      }), "0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005y");
      this.eq((Ω__80 = function() {
        return f`${Number.MAX_VALUE}:s;`;
      }), "179769000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000Y");
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    defaultlocale_test_js: function() {
      var en_US, f, format, formatDefaultLocale, formatPrefix, fr_FR;
      ({f} = require('../../../apps/effstring'));
      ({format, formatPrefix, formatDefaultLocale} = require('../../../apps/effstring/node_modules/d3-format'));
      debug('Ω__81', format);
      debug('Ω__82', formatPrefix);
      debug('Ω__83', formatDefaultLocale);
      //.......................................................................................................
      en_US = {
        decimal: '.',
        thousands: ',',
        grouping: [3],
        currency: ['$', '']
      };
      fr_FR = {
        decimal: ',',
        thousands: '.',
        grouping: [3],
        currency: ['', '\u00a0€'],
        percent: '\u202f%'
      };
      (() => {        //.......................................................................................................
        var locale, Ω__84, Ω__85;
        locale = formatDefaultLocale(fr_FR);
        try {
          this.eq((Ω__84 = function() {
            return (locale.format("$,.2f"))(12345678.90);
          }), "12.345.678,90\u00a0€");
          this.eq((Ω__85 = function() {
            return (locale.format(",.0%"))(12345678.90);
          }), "1.234.567.890\u202f%"); // narrow no-break space
        } finally {
          formatDefaultLocale(en_US);
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var locale, Ω__86, Ω__88;
        locale = formatDefaultLocale(fr_FR);
        try {
          this.eq((Ω__86 = function() {
            return formatPrefix;
          }), locale.formatPrefix);
          // @eq ( Ω__87 = -> ( formatPrefix ",.2", 1e3 ) 12345678.90 ), "12.345,68k"
          this.eq((Ω__88 = function() {
            return (locale.formatPrefix(",.2", 1e3))(12345678.90);
          }), "12.345,68k");
        } finally {
          formatDefaultLocale(en_US);
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    format_type_c_test_js: function() {
      var f, Ω__89, Ω__90, Ω__91, Ω__92, Ω__93, Ω__94;
      ({f} = require('../../../apps/effstring'));
      //.......................................................................................................
      this.eq((Ω__89 = function() {
        return f`${'☃'}:c;`;
      }), "☃");
      this.eq((Ω__90 = function() {
        return f`${'☃'}:020c;`;
      }), "0000000000000000000☃");
      this.eq((Ω__91 = function() {
        return f`${'☃'}: ^20c;`;
      }), "         ☃          ");
      this.eq((Ω__92 = function() {
        return f`${'経済'}: ^20c;`;
      }), '         経済         ');
      this.eq((Ω__93 = function() {
        return f`${'abcd'}: ^20c;`;
      }), '        abcd        ');
      this.eq((Ω__94 = function() {
        return f`${'☃'}:$c;`;
      }), "$☃");
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX: function() {
      var _locale_cfg_from_bcp47, f, new_formatter, new_locale;
      ({f, _locale_cfg_from_bcp47, new_formatter, new_locale} = require('../../../apps/effstring'));
      //.......................................................................................................
      debug('Ωfstr__95', _locale_cfg_from_bcp47('ar-AE'));
      debug('Ωfstr__96', _locale_cfg_from_bcp47('en-US'));
      debug('Ωfstr__97', _locale_cfg_from_bcp47('de-DE'));
      debug('Ωfstr__98', new_locale('ar-AE'));
      debug('Ωfstr__99', new_locale('en-US'));
      debug('Ωfstr_100', new_locale('de-DE'));
      debug('Ωfstr_101', new_locale({}));
      f = new_formatter({});
      debug('Ωfstr_102', f`${1.23}:$03.2f; ${1234567890.123456}:20,.4f;`);
      f = new_formatter('de-DE');
      debug('Ωfstr_103', f`${1.23}:$03.2f; ${1234567890.123456}:20,.4f;`);
      f = new_formatter('ar-AE');
      debug('Ωfstr_104', f`${1.23}:$03.2f; ${1234567890.123456}:20,.4f;`);
      f = new_formatter('ar-001');
      debug('Ωfstr_105', f`${1.23}:$03.2f; ${1234567890.123456}:20,.4f;`);
      f = new_formatter('en-US');
      debug('Ωfstr_106', f`${1.23}:$03.2f; ${1234567890.123456}:20,.4f;`);
      f = new_formatter('es-MX');
      debug('Ωfstr_107', f`${1.23}:$03.2f; ${1234567890.123456}:20,.4f;`);
      f = new_formatter('en-IN');
      debug('Ωfstr_108', f`${1.23}:$03.2f; ${1234567890.123456}:20,.4f;`);
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // ( new Test { throw_on_error: true, } ).test { type_instantiation: @intertype_tasks.type_instantiation, }
      // ( new Test { throw_on_error: true, } ).test @intertype_tasks
      return (new Test({
        throw_on_error: false
      })).test(this.intertype_tasks);
    })();
  }

}).call(this);

//# sourceMappingURL=test-basics.js.map