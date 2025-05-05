(async function() {
  'use strict';
  var GTNG, GUY, README_demo, TMP_types, Test, WGUY, alert, debug, echo, help, info, inspect, intl_number_demo, log, mantissa_exponent_demo, plain, praise, reverse, rpr, urge, warn, whisper;

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
      var EFFSTRING, Ωfstr___2, Ωfstr___3;
      EFFSTRING = require('../../../apps/effstring');
      //.....................................................................................................
      // @throws ( Ωfstr___1 = -> create_typespace() ), /declaration for type 'wholenumber' contains forward reference to type 'integer'/
      this.eq((Ωfstr___2 = function() {
        return typeof EFFSTRING;
      }), 'object');
      this.eq((Ωfstr___3 = function() {
        return typeof EFFSTRING.f;
      }), 'function');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    re_matches: function() {
      var _fmtspec_re, Ωfstr__10, Ωfstr__11, Ωfstr__12, Ωfstr___4, Ωfstr___5, Ωfstr___6, Ωfstr___7, Ωfstr___8, Ωfstr___9;
      ({_fmtspec_re} = require('../../../apps/effstring'));
      //.....................................................................................................
      this.eq((Ωfstr___4 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":5;)".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt_spec: '5',
        tail: ')'
      });
      this.eq((Ωfstr___5 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":>5;)".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt_spec: '>5',
        tail: ')'
      });
      this.eq((Ωfstr___6 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":<5;)".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt_spec: '<5',
        tail: ')'
      });
      this.eq((Ωfstr___7 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":>5.2;)".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt_spec: '>5.2',
        tail: ')'
      });
      this.eq((Ωfstr___8 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;<5;)".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt_spec: '\\',
        tail: '<5;)'
      });
      this.eq((Ωfstr___9 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;<5;);".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt_spec: '\\',
        tail: '<5;);'
      });
      this.eq((Ωfstr__10 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;<5;)\\;".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt_spec: '\\',
        tail: '<5;)\\;'
      });
      this.eq((Ωfstr__11 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;>15;)".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt_spec: '\\',
        tail: '>15;)'
      });
      this.eq((Ωfstr__12 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":;>15;)".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt_spec: ';>15',
        tail: ')'
      });
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    basic_functionality: function() {
      var f, Ωfstr__13, Ωfstr__14, Ωfstr__15, Ωfstr__16, Ωfstr__17, Ωfstr__18, Ωfstr__19, Ωfstr__20, Ωfstr__21, Ωfstr__22, Ωfstr__23, Ωfstr__24, Ωfstr__25, Ωfstr__26, Ωfstr__27;
      ({f} = require('../../../apps/effstring'));
      //.....................................................................................................
      this.eq((Ωfstr__13 = function() {
        return f``;
      }), '');
      this.eq((Ωfstr__14 = function() {
        return f`helo`;
      }), 'helo');
      this.eq((Ωfstr__15 = function() {
        return f`(#{123})`;
      }), '(#{123})');
      this.eq((Ωfstr__16 = function() {
        return f`(#{123}\;)`;
      }), '(#{123};)');
      this.eq((Ωfstr__17 = function() {
        return f`(#{123}\\;)`;
      }), '(#{123}\\;)');
      this.eq((Ωfstr__18 = function() {
        return f`(${123})`;
      }), '(123)');
      this.eq((Ωfstr__19 = function() {
        return f`(${123}:5;)`;
      }), '(  123)');
      this.eq((Ωfstr__20 = function() {
        return f`(${123}:>5;)`;
      }), '(  123)');
      this.eq((Ωfstr__21 = function() {
        return f`(${123}:<5;)`;
      }), '(123  )');
      this.eq((Ωfstr__22 = function() {
        return f`(${123.456}:>5.2;)`;
      }), '(1.2e+2)');
      this.eq((Ωfstr__23 = function() {
        return f`(${123}:;>15;)`;
      }), '(;;;;;;;;;;;;123)');
      this.eq((Ωfstr__24 = function() {
        return f`(${123}:;<15;)`;
      }), '(123;;;;;;;;;;;;)');
      this.eq((Ωfstr__25 = function() {
        return f`(${123}:>>15;)`;
      }), '(>>>>>>>>>>>>123)');
      this.eq((Ωfstr__26 = function() {
        return f`(${123}:<>15;)`;
      }), '(<<<<<<<<<<<<123)');
      this.eq((Ωfstr__27 = function() {
        return f`(${123}:;<7;)`;
      }), '(123;;;;)');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    malformed_formats: function() {
      var Effstring_error, Effstring_lib_syntax_error, Effstring_syntax_error, f, Ωfstr__28, Ωfstr__29, Ωfstr__30, Ωfstr__31, Ωfstr__32, Ωfstr__33, Ωfstr__34, Ωfstr__35, Ωfstr__36, Ωfstr__37, Ωfstr__38, Ωfstr__39, Ωfstr__40, Ωfstr__41;
      ({f, Effstring_error, Effstring_syntax_error, Effstring_lib_syntax_error} = require('../../../apps/effstring'));
      //.......................................................................................................
      this.throws((Ωfstr__28 = function() {
        return f`(${123}:;>15)`;
      }), /illegal format specifier/);
      this.throws((Ωfstr__29 = function() {
        return f`(${123}:)`;
      }), /illegal format specifier/);
      this.throws((Ωfstr__30 = function() {
        return f`(${123}:;)`;
      }), /illegal format specifier/);
      this.throws((Ωfstr__31 = function() {
        return f`(${123}:--->3f;)`;
      }), /illegal format specifier/);
      this.eq((Ωfstr__32 = function() {
        var e;
        try {
          return f`(${123}:;)`;
        } catch (error) {
          e = error;
          return e instanceof Effstring_error;
        }
      }), true);
      this.eq((Ωfstr__33 = function() {
        var e;
        try {
          return f`(${123}:;)`;
        } catch (error) {
          e = error;
          return e instanceof Effstring_syntax_error;
        }
      }), true);
      this.eq((Ωfstr__34 = function() {
        var e;
        try {
          return f`(${123}:;)`;
        } catch (error) {
          e = error;
          return e instanceof Effstring_lib_syntax_error;
        }
      }), false);
      this.eq((Ωfstr__35 = function() {
        var e;
        try {
          return f`(${123}:--->3f;)`;
        } catch (error) {
          e = error;
          return e instanceof Effstring_error;
        }
      }), true);
      this.eq((Ωfstr__36 = function() {
        var e;
        try {
          return f`(${123}:--->3f;)`;
        } catch (error) {
          e = error;
          return e instanceof Effstring_syntax_error;
        }
      }), true);
      this.eq((Ωfstr__37 = function() {
        var e;
        try {
          return f`(${123}:--->3f;)`;
        } catch (error) {
          e = error;
          return e instanceof Effstring_lib_syntax_error;
        }
      }), true);
      this.throws((Ωfstr__38 = function() {
        return f`(${123}:\\;<5;)`;
      }), /illegal format specifier/);
      this.throws((Ωfstr__39 = function() {
        return f`(${123}:\\;<5;);`;
      }), /illegal format specifier/);
      this.throws((Ωfstr__40 = function() {
        return f`(${123}:\\;<5;)\\;`;
      }), /illegal format specifier/);
      this.throws((Ωfstr__41 = function() {
        return f`(${123}:\\;>15;)`;
      }), /illegal format specifier/);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    fixed_point_notation: function() {
      var f, Ωfstr__42, Ωfstr__43, Ωfstr__44, Ωfstr__45, Ωfstr__46, Ωfstr__47, Ωfstr__48, Ωfstr__49, Ωfstr__50, Ωfstr__51, Ωfstr__52, Ωfstr__53, Ωfstr__54, Ωfstr__55, Ωfstr__56, Ωfstr__57, Ωfstr__58, Ωfstr__59, Ωfstr__60, Ωfstr__61, Ωfstr__62, Ωfstr__63, Ωfstr__64, Ωfstr__65;
      ({f} = require('../../../apps/effstring'));
      //.....................................................................................................
      this.eq((Ωfstr__42 = function() {
        return f`(${123.456}:>5.2f;)`;
      }), '(123.46)');
      this.eq((Ωfstr__43 = function() {
        return f`(${123.456}:>15.2f;)`;
      }), '(         123.46)');
      this.eq((Ωfstr__44 = function() {
        return f`(${123.456}:<15.2f;)`;
      }), '(123.46         )');
      this.eq((Ωfstr__45 = function() {
        return f`(${1234.567}:>15.2f;)`;
      }), '(        1234.57)');
      this.eq((Ωfstr__46 = function() {
        return f`(${1234.567}:<15.2f;)`;
      }), '(1234.57        )');
      this.eq((Ωfstr__47 = function() {
        return f`(${1234.567}:=>15.2f;)`;
      }), '(========1234.57)');
      this.eq((Ωfstr__48 = function() {
        return f`(${1234.567}:=<15.2f;)`;
      }), '(1234.57========)');
      this.eq((Ωfstr__49 = function() {
        return f`(${1234.567}:=>15,.2f;)`;
      }), '(=======1,234.57)');
      this.eq((Ωfstr__50 = function() {
        return f`(${1234.567}:=<15,.2f;)`;
      }), '(1,234.57=======)');
      //.......................................................................................................
      this.eq((Ωfstr__51 = function() {
        return f`(${-1234.567}:_>15,.2f;)`;
      }), '(______−1,234.57)');
      this.eq((Ωfstr__52 = function() {
        return f`(${+1234.567}:_>-15,.2f;)`;
      }), '(_______1,234.57)');
      this.eq((Ωfstr__53 = function() {
        return f`(${-1234.567}:_>-15,.2f;)`;
      }), '(______−1,234.57)');
      this.eq((Ωfstr__54 = function() {
        return f`(${+1234.567}:_>+15,.2f;)`;
      }), '(______+1,234.57)');
      this.eq((Ωfstr__55 = function() {
        return f`(${-1234.567}:_>+15,.2f;)`;
      }), '(______−1,234.57)');
      this.eq((Ωfstr__56 = function() {
        return f`(${+1234.567}:_=+15,.2f;)`;
      }), '(+______1,234.57)');
      this.eq((Ωfstr__57 = function() {
        return f`(${-1234.567}:_=+15,.2f;)`;
      }), '(−______1,234.57)');
      this.eq((Ωfstr__58 = function() {
        return f`(${-1234.567}:_=+015,.2f;)`;
      }), '(−0,000,001,234.57)');
      this.eq((Ωfstr__59 = function() {
        return f`(${-1234.567}:=+015,.2f;)`;
      }), '(−0,000,001,234.57)');
      this.eq((Ωfstr__60 = function() {
        return f`(${+1234.567}:_=015,.2f;)`;
      }), '(0,000,001,234.57)');
      this.eq((Ωfstr__61 = function() {
        return f`(${+1234.567}:=015,.2f;)`;
      }), '(0,000,001,234.57)');
      this.eq((Ωfstr__62 = function() {
        return f`(${+1234.567}:_=015.2f;)`;
      }), '(000000001234.57)');
      this.eq((Ωfstr__63 = function() {
        return f`(${+1234.567}:=015.2f;)`;
      }), '(000000001234.57)');
      this.eq((Ωfstr__64 = function() {
        return f`(${-1234.567}:_=015.2f;)`;
      }), '(−00000001234.57)');
      this.eq((Ωfstr__65 = function() {
        return f`(${-1234.567}:=015.2f;)`;
      }), '(−00000001234.57)');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    from_the_docs: function() {
      var f, Ωfstr__66, Ωfstr__67, Ωfstr__69, Ωfstr__70, Ωfstr__71, Ωfstr__72, Ωfstr__73;
      ({f} = require('../../../apps/effstring'));
      /* TAINT check with `$` format will rely on locale setting of the machine the tests are running on */
      //.....................................................................................................
      this.eq((Ωfstr__66 = function() {
        return f`${0.123}:.0%;`;
      }), '12%'); // rounded percentage, "12%"
      this.eq((Ωfstr__67 = function() {
        return f`${-3.5}:($.2f;`;
      }), '($3.50)'); // localized fixed-point currency, "(£3.50)"
      // @eq ( Ωfstr__68 = -> f"#{-3.5}:($.2f;"  ), '(£3.50)'              # localized fixed-point currency, "(£3.50)"
      this.eq((Ωfstr__69 = function() {
        return f`${42}:+20;`;
      }), '                 +42'); // space-filled and signed, "                 +42"
      this.eq((Ωfstr__70 = function() {
        return f`${42}:.^20;`;
      }), '.........42.........'); // dot-filled and centered, ".........42........."
      this.eq((Ωfstr__71 = function() {
        return f`${42e6}:.2s;`;
      }), '42M'); // SI-prefix with two significant digits, "42M"
      this.eq((Ωfstr__72 = function() {
        return f`${48879}:#x;`;
      }), '0xbeef'); // prefixed lowercase hexadecimal, "0xbeef"
      this.eq((Ωfstr__73 = function() {
        return f`${4223}:,.2r;`;
      }), '4,200'); // grouped thousands with two significant digits, "4,200"
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    effstring_format_test_js: function() {
      var f, Ωfstr__74, Ωfstr__75, Ωfstr__76, Ωfstr__77, Ωfstr__78, Ωfstr__79, Ωfstr__80;
      ({f} = require('../../../apps/effstring'));
      /* TAINT check with `$` format will rely on locale setting of the machine the tests are running on */
      //.....................................................................................................
      this.throws((Ωfstr__74 = function() {
        return f`${0}:foo;`;
      }), /illegal format specifier/);
      this.throws((Ωfstr__75 = function() {
        return f`${0}:.-2s;`;
      }), /illegal format specifier/);
      this.throws((Ωfstr__76 = function() {
        return f`${0}:.f;`;
      }), /illegal format specifier/);
      this.eq((Ωfstr__77 = function() {
        return f`${0}:.30f;`;
      }), "0.00000000000000000000");
      this.eq((Ωfstr__78 = function() {
        return f`${1}:.0g;`;
      }), "1");
      this.eq((Ωfstr__79 = function() {
        return f`${Number.MIN_VALUE}:s;`;
      }), "0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005y");
      this.eq((Ωfstr__80 = function() {
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
      debug('Ωfstr__81', format);
      debug('Ωfstr__82', formatPrefix);
      debug('Ωfstr__83', formatDefaultLocale);
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
        var locale, Ωfstr__84, Ωfstr__85;
        locale = formatDefaultLocale(fr_FR);
        try {
          this.eq((Ωfstr__84 = function() {
            return (locale.format("$,.2f"))(12345678.90);
          }), "12.345.678,90\u00a0€");
          this.eq((Ωfstr__85 = function() {
            return (locale.format(",.0%"))(12345678.90);
          }), "1.234.567.890\u202f%"); // narrow no-break space
        } finally {
          formatDefaultLocale(en_US);
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var locale, Ωfstr__86, Ωfstr__88;
        locale = formatDefaultLocale(fr_FR);
        try {
          this.eq((Ωfstr__86 = function() {
            return formatPrefix;
          }), locale.formatPrefix);
          // @eq ( Ωfstr__87 = -> ( formatPrefix ",.2", 1e3 ) 12345678.90 ), "12.345,68k"
          this.eq((Ωfstr__88 = function() {
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
      var f, Ωfstr__89, Ωfstr__90, Ωfstr__91, Ωfstr__92, Ωfstr__93, Ωfstr__94;
      ({f} = require('../../../apps/effstring'));
      //.......................................................................................................
      this.eq((Ωfstr__89 = function() {
        return f`${'☃'}:c;`;
      }), "☃");
      this.eq((Ωfstr__90 = function() {
        return f`${'☃'}:020c;`;
      }), "0000000000000000000☃");
      this.eq((Ωfstr__91 = function() {
        return f`${'☃'}: ^20c;`;
      }), '         ☃         ');
      this.eq((Ωfstr__92 = function() {
        return f`${'経済'}: ^20c;`;
      }), '        経済        ');
      this.eq((Ωfstr__93 = function() {
        return f`${'abcd'}: ^20c;`;
      }), '        abcd        ');
      this.eq((Ωfstr__94 = function() {
        return f`${'☃'}:$c;`;
      }), "$☃");
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    locale_internals: function() {
      var _d3_format, _default_locale, _hint_as_locale_cfg, _locale_cfg_from_bcp47, _locale_cfg_from_hints, f, new_ftag, Ωfstr_100, Ωfstr_101, Ωfstr_102, Ωfstr_103, Ωfstr_104, Ωfstr_105, Ωfstr_106, Ωfstr_107, Ωfstr_108, Ωfstr_109, Ωfstr_110, Ωfstr_111, Ωfstr_112, Ωfstr_113, Ωfstr_114, Ωfstr_115, Ωfstr_121, Ωfstr_122, Ωfstr_123, Ωfstr_124, Ωfstr_125, Ωfstr_126, Ωfstr_127, Ωfstr_128, Ωfstr__95, Ωfstr__96, Ωfstr__97, Ωfstr__98, Ωfstr__99;
      ({f, new_ftag, _default_locale, _d3_format, _locale_cfg_from_bcp47, _locale_cfg_from_hints, _hint_as_locale_cfg} = require('../../../apps/effstring'));
      //.......................................................................................................
      this.eq((Ωfstr__95 = function() {
        return (_d3_format != null) && ((typeof _d3_format) === 'object');
      }), true);
      this.eq((Ωfstr__96 = function() {
        return (_locale_cfg_from_bcp47 != null) && ((typeof _locale_cfg_from_bcp47) === 'function');
      }), true);
      this.eq((Ωfstr__97 = function() {
        return (_locale_cfg_from_hints != null) && ((typeof _locale_cfg_from_hints) === 'function');
      }), true);
      this.eq((Ωfstr__98 = function() {
        return (_hint_as_locale_cfg != null) && ((typeof _hint_as_locale_cfg) === 'function');
      }), true);
      //.......................................................................................................
      this.eq((Ωfstr__99 = function() {
        return _default_locale;
      }), {
        decimal: '.',
        thousands: ',',
        grouping: [3],
        currency: ['$', ''],
        numerals: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        percent: '%',
        minus: '−',
        nan: 'NaN',
        fullwidth: true
      });
      this.eq((Ωfstr_100 = function() {
        return _locale_cfg_from_bcp47('ar-AE');
      }), {
        decimal: '٫',
        thousands: '٬',
        grouping: [3],
        currency: ['', ' د.إ.'],
        numerals: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
      });
      this.eq((Ωfstr_101 = function() {
        return _locale_cfg_from_bcp47('en-US');
      }), {
        decimal: '.',
        thousands: ',',
        grouping: [3],
        currency: ['$', '']
      });
      this.eq((Ωfstr_102 = function() {
        return _locale_cfg_from_bcp47('de-DE');
      }), {
        decimal: ',',
        thousands: '.',
        grouping: [3],
        currency: ['', ' €']
      });
      this.eq((Ωfstr_103 = function() {
        return _locale_cfg_from_bcp47('en-IN');
      }), {
        decimal: '.',
        thousands: ',',
        grouping: [3, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        currency: ['₹', '']
      });
      //.......................................................................................................
      this.eq((Ωfstr_104 = function() {
        return _hint_as_locale_cfg('ar-AE');
      }), {
        decimal: '٫',
        thousands: '٬',
        grouping: [3],
        currency: ['', ' د.إ.'],
        numerals: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
      });
      this.eq((Ωfstr_105 = function() {
        return _hint_as_locale_cfg('en-US');
      }), {
        decimal: '.',
        thousands: ',',
        grouping: [3],
        currency: ['$', '']
      });
      this.eq((Ωfstr_106 = function() {
        return _hint_as_locale_cfg('de-DE');
      }), {
        decimal: ',',
        thousands: '.',
        grouping: [3],
        currency: ['', ' €']
      });
      this.eq((Ωfstr_107 = function() {
        return _hint_as_locale_cfg('en-IN');
      }), {
        decimal: '.',
        thousands: ',',
        grouping: [3, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        currency: ['₹', '']
      });
      this.eq((Ωfstr_108 = function() {
        return _hint_as_locale_cfg({});
      }), {});
      //.......................................................................................................
      this.eq((Ωfstr_109 = function() {
        return _locale_cfg_from_hints('ar-AE');
      }), {
        decimal: '٫',
        thousands: '٬',
        grouping: [3],
        currency: ['', ' د.إ.'],
        numerals: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'],
        percent: '%',
        minus: '−',
        nan: 'NaN',
        fullwidth: true
      });
      this.eq((Ωfstr_110 = function() {
        return _locale_cfg_from_hints('en-US');
      }), {
        decimal: '.',
        thousands: ',',
        grouping: [3],
        currency: ['$', ''],
        numerals: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        percent: '%',
        minus: '−',
        nan: 'NaN',
        fullwidth: true
      });
      this.eq((Ωfstr_111 = function() {
        return _locale_cfg_from_hints('de-DE');
      }), {
        decimal: ',',
        thousands: '.',
        grouping: [3],
        currency: ['', ' €'],
        numerals: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        percent: '%',
        minus: '−',
        nan: 'NaN',
        fullwidth: true
      });
      this.eq((Ωfstr_112 = function() {
        return _locale_cfg_from_hints({
          percent: '\xa0v.Hd.'
        });
      }), {
        decimal: '.',
        thousands: ',',
        grouping: [3],
        currency: ['$', ''],
        numerals: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        percent: ' v.Hd.',
        minus: '−',
        nan: 'NaN',
        fullwidth: true
      });
      this.eq((Ωfstr_113 = function() {
        return _locale_cfg_from_hints('de-DE', {
          percent: '\xa0v.Hd.'
        });
      }), {
        decimal: ',',
        thousands: '.',
        grouping: [3],
        currency: ['', ' €'],
        numerals: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        percent: ' v.Hd.',
        minus: '−',
        nan: 'NaN',
        fullwidth: true
      });
      this.eq((Ωfstr_114 = function() {
        return _locale_cfg_from_hints('de-DE', {
          percent: '\xa0v.Hd.'
        }, {
          thousands: "'"
        });
      }), {
        decimal: ',',
        thousands: "'",
        grouping: [3],
        currency: ['', ' €'],
        numerals: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        percent: ' v.Hd.',
        minus: '−',
        nan: 'NaN',
        fullwidth: true
      });
      this.eq((Ωfstr_115 = function() {
        return _locale_cfg_from_hints({});
      }), {
        decimal: '.',
        thousands: ',',
        grouping: [3],
        currency: ['$', ''],
        numerals: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        percent: '%',
        minus: '−',
        nan: 'NaN',
        fullwidth: true
      });
      (() => {        //.......................................................................................................
        var locale, locale_cfg, Ωfstr_116, Ωfstr_117;
        locale_cfg = _locale_cfg_from_hints('de-DE');
        locale = _d3_format.formatLocale(locale_cfg);
        this.eq((Ωfstr_116 = function() {
          return (locale.format('_>17,.5%'))(0.754321);
        }), '________75,43210%');
        this.eq((Ωfstr_117 = function() {
          return (locale.format('_>17,.5f'))(1234567890);
        }), '1.234.567.890,00000');
        return null;
      })();
      (() => {        //.......................................................................................................
        var locale, locale_cfg, Ωfstr_118, Ωfstr_119;
        locale_cfg = _locale_cfg_from_hints('de-DE', {
          numerals: ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'],
          percent: ' v.H.'
        });
        locale = _d3_format.formatLocale(locale_cfg);
        this.eq((Ωfstr_118 = function() {
          return (locale.format('_>17,.5%'))(0.754321);
        }), '____⁷⁵,⁴³²¹⁰ v.H.');
        this.eq((Ωfstr_119 = function() {
          return (locale.format('_>17,.5f'))(1234567890);
        }), '¹.²³⁴.⁵⁶⁷.⁸⁹⁰,⁰⁰⁰⁰⁰');
        return null;
      })();
      //.......................................................................................................
      ((f) => {
        var Ωfstr_120;
        f = new_ftag('de-DE', {
          numerals: ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'],
          percent: ' v.H.'
        });
        this.eq((Ωfstr_120 = function() {
          return f`${0.754321}:_>17.5%;`;
        }), '____⁷⁵,⁴³²¹⁰ v.H.');
        return null;
      })(f);
      //.......................................................................................................
      this.eq((Ωfstr_121 = function() {
        return (new_ftag('en-US'))`${123456789123456789.75}:_>37,.5f;`;
      }), '________123,456,789,123,456,784.00000');
      this.eq((Ωfstr_122 = function() {
        return (new_ftag({
          grouping: [4]
        }))`${123456789123456789.75}:_>37,.5f;`;
      }), '_________12,3456,7891,2345,6784.00000');
      this.eq((Ωfstr_123 = function() {
        return (new_ftag())`${1.23}:$03.2f;[${1234567890.123456}:20,.4f;]`;
      }), '$1.23[  1,234,567,890.1235]');
      this.eq((Ωfstr_124 = function() {
        return (new_ftag({}))`${1.23}:$03.2f;[${1234567890.123456}:20,.4f;]`;
      }), '$1.23[  1,234,567,890.1235]');
      this.eq((Ωfstr_125 = function() {
        return (new_ftag('de-DE'))`${1.23}:$03.2f;[${1234567890.123456}:20,.4f;]`;
      }), '1,23 €[  1.234.567.890,1235]');
      this.eq((Ωfstr_126 = function() {
        return (new_ftag('en-US'))`${1.23}:$03.2f;[${1234567890.123456}:20,.4f;]`;
      }), '$1.23[  1,234,567,890.1235]');
      this.eq((Ωfstr_127 = function() {
        return (new_ftag('es-MX'))`${1.23}:$03.2f;[${1234567890.123456}:20,.4f;]`;
      }), '$1.23[  1,234,567,890.1235]');
      this.eq((Ωfstr_128 = function() {
        return (new_ftag('en-IN'))`${1.23}:$03.2f;[${1234567890.123456}:20,.4f;]`;
      }), '₹1.23[ 1,23,45,67,890.1235]');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    si_units_format_specifier_internals: function() {
      var _fmtspec_unit_re;
      ({_fmtspec_unit_re} = require('../../../apps/effstring'));
      (() => {        //.......................................................................................................
        var Ωfstr_129, Ωfstr_130, Ωfstr_131, Ωfstr_132, Ωfstr_133, Ωfstr_134, Ωfstr_135, Ωfstr_136, Ωfstr_137, Ωfstr_138, Ωfstr_139, Ωfstr_140, Ωfstr_141, Ωfstr_142, Ωfstr_143, Ωfstr_144, Ωfstr_145, Ωfstr_146;
        this.eq((Ωfstr_129 = function() {
          var ref;
          return (ref = '_<15,.3f/y'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/y',
          unit: 'y'
        });
        this.eq((Ωfstr_130 = function() {
          var ref;
          return (ref = '_<15,.3f/z'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/z',
          unit: 'z'
        });
        this.eq((Ωfstr_131 = function() {
          var ref;
          return (ref = '_<15,.3f/a'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/a',
          unit: 'a'
        });
        this.eq((Ωfstr_132 = function() {
          var ref;
          return (ref = '_<15,.3f/f'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/f',
          unit: 'f'
        });
        this.eq((Ωfstr_133 = function() {
          var ref;
          return (ref = '_<15,.3f/p'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/p',
          unit: 'p'
        });
        this.eq((Ωfstr_134 = function() {
          var ref;
          return (ref = '_<15,.3f/n'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/n',
          unit: 'n'
        });
        this.eq((Ωfstr_135 = function() {
          var ref;
          return (ref = '_<15,.3f/µ'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/µ',
          unit: 'µ'
        });
        this.eq((Ωfstr_136 = function() {
          var ref;
          return (ref = '_<15,.3f/m'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/m',
          unit: 'm'
        });
        this.eq((Ωfstr_137 = function() {
          var ref;
          return (ref = '_<15,.3f/1'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/1',
          unit: '1'
        });
        this.eq((Ωfstr_138 = function() {
          var ref;
          return (ref = '_<15,.3f/k'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/k',
          unit: 'k'
        });
        this.eq((Ωfstr_139 = function() {
          var ref;
          return (ref = '_<15,.3f/M'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/M',
          unit: 'M'
        });
        this.eq((Ωfstr_140 = function() {
          var ref;
          return (ref = '_<15,.3f/G'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/G',
          unit: 'G'
        });
        this.eq((Ωfstr_141 = function() {
          var ref;
          return (ref = '_<15,.3f/T'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/T',
          unit: 'T'
        });
        this.eq((Ωfstr_142 = function() {
          var ref;
          return (ref = '_<15,.3f/P'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/P',
          unit: 'P'
        });
        this.eq((Ωfstr_143 = function() {
          var ref;
          return (ref = '_<15,.3f/E'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/E',
          unit: 'E'
        });
        this.eq((Ωfstr_144 = function() {
          var ref;
          return (ref = '_<15,.3f/Z'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/Z',
          unit: 'Z'
        });
        this.eq((Ωfstr_145 = function() {
          var ref;
          return (ref = '_<15,.3f/Y'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), {
          discard: '/Y',
          unit: 'Y'
        });
        this.eq((Ωfstr_146 = function() {
          var ref;
          return (ref = '_<15,.3f/b'.match(_fmtspec_unit_re)) != null ? ref.groups : void 0;
        }), void 0);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    si_units_format_specifier: function() {
      var _d3_format, _default_locale, _hint_as_locale_cfg, _locale_cfg_from_bcp47, _locale_cfg_from_hints, f, new_ftag, probes_and_matchers;
      ({f, new_ftag, _default_locale, _d3_format, _locale_cfg_from_bcp47, _locale_cfg_from_hints, _hint_as_locale_cfg} = require('../../../apps/effstring'));
      //.......................................................................................................
      probes_and_matchers = [[0.00000042, '__________0.420µ'], [0.0000042, '__________4.200µ'], [0.000042, '_________42.000µ'], [0.00042, '________420.000µ'], [0.0042, '______4,200.000µ'], [0.042, '_____42,000.000µ'], [0.42, '____420,000.000µ']];
      (() => {        //.......................................................................................................
        var ff, i, len, matcher, probe, Ωfstr_147;
        ff = _d3_format.formatPrefix("_>15,.3f", 1e-6);
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [probe, matcher] = probes_and_matchers[i];
          this.eq((Ωfstr_147 = function() {
            return ff(probe);
          }), matcher);
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var i, len, matcher, probe, Ωfstr_148;
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [probe, matcher] = probes_and_matchers[i];
          this.eq((Ωfstr_148 = function() {
            return f`${probe}:_>15,.3f/µ;`;
          }), matcher);
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    si_units_format_specifiers_updated_with_faults: function() {
      var _d3_format, _default_locale, _hint_as_locale_cfg, _locale_cfg_from_bcp47, _locale_cfg_from_hints, f, new_ftag, Ωfstr_149, Ωfstr_150, Ωfstr_151, Ωfstr_152, Ωfstr_153, Ωfstr_154, Ωfstr_155, Ωfstr_156, Ωfstr_157, Ωfstr_158, Ωfstr_159, Ωfstr_160, Ωfstr_161, Ωfstr_162, Ωfstr_163, Ωfstr_164, Ωfstr_165;
      ({f, new_ftag, _default_locale, _d3_format, _locale_cfg_from_bcp47, _locale_cfg_from_hints, _hint_as_locale_cfg} = require('../../../apps/effstring'));
      //.......................................................................................................
      this.eq((Ωfstr_149 = function() {
        return f`d = ${1234.5678}:_>50.20f/y;m`;
      }), 'd = _____________________________________1.2345678e+27ym');
      this.eq((Ωfstr_150 = function() {
        return f`d = ${1234.5678}:_>50.20f/z;m`;
      }), 'd = _____________________________________1.2345678e+24zm');
      this.eq((Ωfstr_151 = function() {
        return f`d = ${1234.5678}:_>50.20f/a;m`;
      }), 'd = _____________________________________1.2345678e+21am');
      this.eq((Ωfstr_152 = function() {
        return f`d = ${1234.5678}:_>50.20f/f;m`;
      }), 'd = __________1234567800000000000.00000000000000000000fm');
      this.eq((Ωfstr_153 = function() {
        return f`d = ${1234.5678}:_>50.20f/p;m`;
      }), 'd = _____________1234567800000000.00000000000000000000pm');
      this.eq((Ωfstr_154 = function() {
        return f`d = ${1234.5678}:_>50.20f/n;m`;
      }), 'd = ________________1234567800000.00000000000000000000nm');
      this.eq((Ωfstr_155 = function() {
        return f`d = ${1234.5678}:_>50.20f/µ;m`;
      }), 'd = ___________________1234567800.00000000000000000000µm');
      this.eq((Ωfstr_156 = function() {
        return f`d = ${1234.5678}:_>50.20f/m;m`;
      }), 'd = ______________________1234567.80000000004656612873mm');
      this.eq((Ωfstr_157 = function() {
        return f`d = ${1234.5678}:_>50.20f/1;m`;
      }), 'd = _________________________1234.56780000000003383320m');
      this.eq((Ωfstr_158 = function() {
        return f`d = ${1234.5678}:_>50.20f/k;m`;
      }), 'd = ____________________________1.23456779999999999298km');
      this.eq((Ωfstr_159 = function() {
        return f`d = ${1234.5678}:_>50.20f/M;m`;
      }), 'd = ____________________________0.00123456780000000006Mm');
      this.eq((Ωfstr_160 = function() {
        return f`d = ${1234.5678}:_>50.20f/G;m`;
      }), 'd = ____________________________0.00000123456780000000Gm');
      this.eq((Ωfstr_161 = function() {
        return f`d = ${1234.5678}:_>50.20f/T;m`;
      }), 'd = ____________________________0.00000000123456780000Tm');
      this.eq((Ωfstr_162 = function() {
        return f`d = ${1234.5678}:_>50.20f/P;m`;
      }), 'd = ____________________________0.00000000000123456780Pm');
      this.eq((Ωfstr_163 = function() {
        return f`d = ${1234.5678}:_>50.20f/E;m`;
      }), 'd = ____________________________0.00000000000000123457Em');
      this.eq((Ωfstr_164 = function() {
        return f`d = ${1234.5678}:_>50.20f/Z;m`;
      }), 'd = ____________________________0.00000000000000000123Zm');
      this.eq((Ωfstr_165 = function() {
        return f`d = ${1234.5678}:_>50.20f/Y;m`;
      }), 'd = ____________________________0.00000000000000000000Ym');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    si_units_format_specifiers_updated_ideal: function() {
      var _d3_format, _default_locale, _hint_as_locale_cfg, _locale_cfg_from_bcp47, _locale_cfg_from_hints, f, new_ftag, Ωfstr_166, Ωfstr_167, Ωfstr_168, Ωfstr_169, Ωfstr_170, Ωfstr_171, Ωfstr_172, Ωfstr_173, Ωfstr_174, Ωfstr_175, Ωfstr_176, Ωfstr_177, Ωfstr_178, Ωfstr_179, Ωfstr_180, Ωfstr_181, Ωfstr_182;
      ({f, new_ftag, _default_locale, _d3_format, _locale_cfg_from_bcp47, _locale_cfg_from_hints, _hint_as_locale_cfg} = require('../../../apps/effstring'));
      //.......................................................................................................
      this.eq((Ωfstr_166 = function() {
        return f`d = ${1234.5678}:_>50.20f/y;m`;
      }), 'd = _____________________________________1.2345678e+27ym');
      this.eq((Ωfstr_167 = function() {
        return f`d = ${1234.5678}:_>50.20f/z;m`;
      }), 'd = _____________________________________1.2345678e+24zm');
      this.eq((Ωfstr_168 = function() {
        return f`d = ${1234.5678}:_>50.20f/a;m`;
      }), 'd = _____________________________________1.2345678e+21am');
      this.eq((Ωfstr_169 = function() {
        return f`d = ${1234.5678}:_>50.20f/f;m`;
      }), 'd = __________1234567800000000000.00000000000000000000fm');
      this.eq((Ωfstr_170 = function() {
        return f`d = ${1234.5678}:_>50.20f/p;m`;
      }), 'd = _____________1234567800000000.00000000000000000000pm');
      this.eq((Ωfstr_171 = function() {
        return f`d = ${1234.5678}:_>50.20f/n;m`;
      }), 'd = ________________1234567800000.00000000000000000000nm');
      this.eq((Ωfstr_172 = function() {
        return f`d = ${1234.5678}:_>50.20f/µ;m`;
      }), 'd = ___________________1234567800.00000000000000000000µm');
      this.eq((Ωfstr_173 = function() {
        return f`d = ${1234.5678}:_>50.20f/m;m`;
      }), 'd = ______________________1234567.80000000004656612873mm');
      this.eq((Ωfstr_174 = function() {
        return f`d = ${1234.5678}:_>50.20f/1;m`;
      }), 'd = _________________________1234.56780000000003383320m');
      this.eq((Ωfstr_175 = function() {
        return f`d = ${1234.5678}:_>50.20f/k;m`;
      }), 'd = ____________________________1.23456779999999999298km');
      this.eq((Ωfstr_176 = function() {
        return f`d = ${1234.5678}:_>50.20f/M;m`;
      }), 'd = ____________________________0.00123456780000000006Mm');
      this.eq((Ωfstr_177 = function() {
        return f`d = ${1234.5678}:_>50.20f/G;m`;
      }), 'd = ____________________________0.00000123456780000000Gm');
      this.eq((Ωfstr_178 = function() {
        return f`d = ${1234.5678}:_>50.20f/T;m`;
      }), 'd = ____________________________0.00000000123456780000Tm');
      this.eq((Ωfstr_179 = function() {
        return f`d = ${1234.5678}:_>50.20f/P;m`;
      }), 'd = ____________________________0.00000000000123456780Pm');
      this.eq((Ωfstr_180 = function() {
        return f`d = ${1234.5678}:_>50.20f/E;m`;
      }), 'd = ____________________________0.00000000000000123457Em');
      this.eq((Ωfstr_181 = function() {
        return f`d = ${1234.5678}:_>50.20f/Z;m`;
      }), 'd = ____________________________0.00000000000000000123Zm');
      this.eq((Ωfstr_182 = function() {
        return f`d = ${1234.5678}:_>50.20f/Y;m`;
      }), 'd = ____________________________0.00000000000000000000Ym');
      // @eq ( Ωfstr_183 = -> f"d = #{1234.5678}:50.60f/y;m" ), 'd =                                      1.2345678e+27ym'
      // @eq ( Ωfstr_184 = -> f"d = #{1234.5678}:50.60f/z;m" ), 'd =                                      1.2345678e+24zm'
      // @eq ( Ωfstr_185 = -> f"d = #{1234.5678}:50.60f/a;m" ), 'd =                                      1.2345678e+21am'
      // @eq ( Ωfstr_186 = -> f"d = #{1234.5678}:50.60f/f;m" ), 'd =           1234567800000000000.00000000000000000000fm'
      // @eq ( Ωfstr_187 = -> f"d = #{1234.5678}:50.60f/p;m" ), 'd =              1234567800000000.00000000000000000000pm'
      // @eq ( Ωfstr_188 = -> f"d = #{1234.5678}:50.60f/n;m" ), 'd =                 1234567800000.00000000000000000000nm'
      // @eq ( Ωfstr_189 = -> f"d = #{1234.5678}:50.60f/µ;m" ), 'd =                    1234567800.00000000000000000000µm'
      // @eq ( Ωfstr_190 = -> f"d = #{1234.5678}:50.60f/m;m" ), 'd =                       1234567.80000000004656612873mm'
      // @eq ( Ωfstr_191 = -> f"d = #{1234.5678}:50.60f/1;m" ), 'd =                          1234.56780000000003383320m'
      // @eq ( Ωfstr_192 = -> f"d = #{1234.5678}:50.60f/k;m" ), 'd =                             1.23456779999999999298km'
      // @eq ( Ωfstr_193 = -> f"d = #{1234.5678}:50.60f/M;m" ), 'd =                             0.00123456780000000006Mm'
      // @eq ( Ωfstr_194 = -> f"d = #{1234.5678}:50.60f/G;m" ), 'd =                             0.0000012345678000000000000Gm'
      // @eq ( Ωfstr_195 = -> f"d = #{1234.5678}:50.60f/T;m" ), 'd =                             0.0000000012345678000000000Tm'
      // @eq ( Ωfstr_196 = -> f"d = #{1234.5678}:50.60f/P;m" ), 'd =                             0.0000000000012345678000000Pm'
      // @eq ( Ωfstr_197 = -> f"d = #{1234.5678}:50.60f/E;m" ), 'd =                             0.0000000000000012345678000Em'
      // @eq ( Ωfstr_198 = -> f"d = #{1234.5678}:50.60f/Z;m" ), 'd =                             0.0000000000000000012345678Zm'
      // @eq ( Ωfstr_199 = -> f"d = #{1234.5678}:50.60f/Y;m" ), 'd =                             0.0000000000000000000012345Ym'
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    si_units_format_specifier_unit: function() {
      var _d3_format, _default_locale, _hint_as_locale_cfg, _locale_cfg_from_bcp47, _locale_cfg_from_hints, f, new_ftag, probes_and_matchers;
      ({f, new_ftag, _default_locale, _d3_format, _locale_cfg_from_bcp47, _locale_cfg_from_hints, _hint_as_locale_cfg} = require('../../../apps/effstring'));
      //.......................................................................................................
      probes_and_matchers = [[0.00000042, '__________0.000'], [0.0000042, '__________0.000'], [0.000042, '__________0.000'], [0.00042, '__________0.000'], [0.0042, '__________0.004'], [0.042, '__________0.042'], [0.42, '__________0.420'], [4.2, '__________4.200'], [42, '_________42.000']];
      (() => {        //.......................................................................................................
        var ff, i, len, matcher, probe, Ωfstr_200;
        ff = _d3_format.formatPrefix("_>15,.3f", 1);
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [probe, matcher] = probes_and_matchers[i];
          this.eq((Ωfstr_200 = function() {
            return ff(probe);
          }), matcher);
        }
        return null;
      })();
      (() => {        //.......................................................................................................
        var i, len, matcher, probe, Ωfstr_201;
        for (i = 0, len = probes_and_matchers.length; i < len; i++) {
          [probe, matcher] = probes_and_matchers[i];
          this.eq((Ωfstr_201 = function() {
            return f`${probe}:_>15,.3f/1;`;
          }), matcher);
        }
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    handle_nonnumeric_values: function() {
      var _d3_format, _default_locale, _hint_as_locale_cfg, _locale_cfg_from_bcp47, _locale_cfg_from_hints, f, new_ftag, Ωfstr_202, Ωfstr_204, Ωfstr_206;
      ({f, new_ftag, _default_locale, _d3_format, _locale_cfg_from_bcp47, _locale_cfg_from_hints, _hint_as_locale_cfg} = require('../../../apps/effstring'));
      //.......................................................................................................
      this.eq((Ωfstr_202 = function() {
        return urge('Ωfstr_203', rpr(f`d = ${"helo"}:60.40f/k;m`));
      }), null);
      this.eq((Ωfstr_204 = function() {
        return urge('Ωfstr_205', rpr(f`d = ${true}:60.40f/k;m`));
      }), null);
      this.eq((Ωfstr_206 = function() {
        return urge('Ωfstr_207', rpr(f`d = ${123456789n}:60.40f/k;m`));
      }), null);
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  README_demo = function() {
    var _d3_format, f, new_ftag;
    ({f, new_ftag, _d3_format} = require('../../../apps/effstring'));
    echo();
    (() => {
      // info 'Ωfstr_208', f"——#{1234}:$#20x;——"
      info('Ωfstr_209', f`——${1234}:;>20;——`);
      info('Ωfstr_210', f`——${1234}:#>20.3e;——`);
      info('Ωfstr_211', f`——${1234}:#>20.3f;——`);
      info('Ωfstr_212', f`——${1234}:#>20.3s;——`);
      info('Ωfstr_213', f`——${1234}:#>20.3n;——`);
      return info('Ωfstr_214', f`——${2e308}:#>20.3n;——`);
    })();
    (() => {
      var f_en, f_ja, ja_jp_cfg;
      ja_jp_cfg = {
        numerals: ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九']
      };
      f_en = new_ftag('en-GB');
      f_ja = new_ftag('ja-JP', ja_jp_cfg);
      console.log(f_en`${'Alice'}:*<15c; is in ${'London'}:.^12c; and has ${1234}:_>$22,.2f; in their pocket.`);
      console.log(f_en`${'Bob'}:*<15c; is in ${'London'}:.^12c; and has ${45678.93}:_>$22,.2f; in their pocket.`);
      console.log(f_ja`${'アリスさん'}:*<15c; is in ${'倫敦'}:.^12c; and has ${1234}:_>$22,.2f; in their pocket.`);
      console.log(f_ja`${'ボブさん'}:*<15c; is in ${'倫敦'}:.^12c; and has ${45678.93}:_>$22,.2f; in their pocket.`);
      return null;
    })();
    (() => {
      var f_en, f_zh, zh_tw_cfg;
      zh_tw_cfg = {
        currency: ['新臺幣', '']
      };
      // numerals: [ '〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', ],
      f_en = new_ftag('en-GB');
      f_zh = new_ftag('zh-CN', zh_tw_cfg);
      console.log(f_en`${-98765.43}:·>$20,.2f;`);
      console.log(f_zh`${-98765.43}:·>$20,.2f;`);
      console.log(f_en`${-98765.43}:·=$20,.2f;`);
      console.log(f_zh`${-98765.43}:·=$20,.2f;`);
      return null;
    })();
    echo();
    (() => {
      var f_en, f_ja, ja_jp_cfg;
      ja_jp_cfg = {
        numerals: ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九']
      };
      f_en = new_ftag('en-GB', {
        fullwidth: false
      });
      f_ja = new_ftag('ja-JP', ja_jp_cfg, {
        fullwidth: false
      });
      console.log(f_en`${'Alice'}:*<15c; is in ${'London'}:.^12c; and has ${1234}:_>$22,.2f; in their pocket.`);
      console.log(f_en`${'Bob'}:*<15c; is in ${'London'}:.^12c; and has ${45678.93}:_>$22,.2f; in their pocket.`);
      console.log(f_ja`${'アリスさん'}:*<15c; is in ${'倫敦'}:.^12c; and has ${1234}:_>$22,.2f; in their pocket.`);
      console.log(f_ja`${'ボブさん'}:*<15c; is in ${'倫敦'}:.^12c; and has ${45678.93}:_>$22,.2f; in their pocket.`);
      return null;
    })();
    (() => {
      var f_en, f_zh, zh_tw_cfg;
      zh_tw_cfg = {
        currency: ['新臺幣', '']
      };
      // numerals: [ '〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', ],
      f_en = new_ftag('en-GB', {
        fullwidth: false
      });
      f_zh = new_ftag('zh-CN', zh_tw_cfg, {
        fullwidth: false
      });
      console.log(f_en`${-98765.43}:·>$20,.2f;`);
      console.log(f_zh`${-98765.43}:·>$20,.2f;`);
      console.log(f_en`${-98765.43}:·=$20,.2f;`);
      console.log(f_zh`${-98765.43}:·=$20,.2f;`);
      return null;
    })();
    echo();
    (() => {
      var f_en, f_zh, zh_tw_cfg;
      zh_tw_cfg = {
        currency: ['NT ', ' $'],
        numerals: ['(0)', '(1)', '(2)', '(3)', '(4)', '(5)', '(6)', '(7)', '(8)', '(9)']
      };
      f_en = new_ftag('en-GB', {
        fullwidth: true
      });
      f_zh = new_ftag('zh-CN', zh_tw_cfg, {
        fullwidth: true
      });
      console.log(f_en`${-98765.43}:·>$50,.2f;`);
      console.log(f_zh`${-98765.43}:·>$50,.2f;`);
      console.log(f_en`${-98765.43}:·=$50,.2f;`);
      console.log(f_zh`${-98765.43}:·=$50,.2f;`);
      return null;
    })();
    (() => {
      var f_en, f_zh, zh_tw_cfg;
      zh_tw_cfg = {
        currency: ['NT ', ' $'],
        numerals: ['(0)', '(1)', '(2)', '(3)', '(4)', '(5)', '(6)', '(7)', '(8)', '(9)']
      };
      f_en = new_ftag('en-GB', {
        fullwidth: false
      });
      f_zh = new_ftag('zh-CN', zh_tw_cfg, {
        fullwidth: false
      });
      console.log(f_en`${-98765.43}:·>$50,.2f;`);
      console.log(f_zh`${-98765.43}:·>$50,.2f;`);
      console.log(f_en`${-98765.43}:·=$50,.2f;`);
      console.log(f_zh`${-98765.43}:·=$50,.2f;`);
      return null;
    })();
    echo();
    (() => {
      (() => {        // f_en = new_ftag 'en-GB',            { fullwidth: false, }
        // console.log f_en"#{-98765.43}:·>$50,.2f;"
        var ff;
        echo();
        ff = _d3_format.formatPrefix("_>15,.3~", 1e-6);
        info('Ωfstr_215', ff(0.00000042));
        info('Ωfstr_216', ff(0.0000042));
        info('Ωfstr_217', ff(0.000042));
        info('Ωfstr_218', ff(0.00042));
        info('Ωfstr_219', ff(0.0042));
        info('Ωfstr_220', ff(0.042));
        info('Ωfstr_221', ff(0.42));
        return null;
      })();
      (() => {
        var ff;
        echo();
        ff = _d3_format.formatPrefix("_>15,.3~s", 1e-6);
        info('Ωfstr_222', ff(0.00000042));
        info('Ωfstr_223', ff(0.0000042));
        info('Ωfstr_224', ff(0.000042));
        info('Ωfstr_225', ff(0.00042));
        info('Ωfstr_226', ff(0.0042));
        info('Ωfstr_227', ff(0.042));
        info('Ωfstr_228', ff(0.42));
        return null;
      })();
      (() => {
        var ff;
        echo();
        ff = _d3_format.formatPrefix("_>15,.3~f", 1e-6);
        info('Ωfstr_229', ff(0.00000042));
        info('Ωfstr_230', ff(0.0000042));
        info('Ωfstr_231', ff(0.000042));
        info('Ωfstr_232', ff(0.00042));
        info('Ωfstr_233', ff(0.0042));
        info('Ωfstr_234', ff(0.042));
        info('Ωfstr_235', ff(0.42));
        return null;
      })();
      (() => {
        echo();
        info('Ωfstr_236', f`${0.00000042}:_>15,.3f/µ;`);
        info('Ωfstr_237', f`${0.0000042}:_>15,.3f/µ;`);
        info('Ωfstr_238', f`${0.000042}:_>15,.3f/µ;`);
        info('Ωfstr_239', f`${0.00042}:_>15,.3f/µ;`);
        info('Ωfstr_240', f`${0.0042}:_>15,.3f/µ;`);
        info('Ωfstr_241', f`${0.042}:_>15,.3f/µ;`);
        info('Ωfstr_242', f`${0.42}:_>15,.3f/µ;`);
        return null;
      })();
      (() => {
        echo();
        info('Ωfstr_243', f`${123000}:_>9,.3f/k;m`);
        info('Ωfstr_244', f`${7000}:_>9,.3f/k;m`);
        info('Ωfstr_245', f`${500}:_>9,.3f/k;m`);
        info('Ωfstr_246', f`${99}:_>9,.3f/k;m`);
        return null;
      })();
      (() => {
        var ff;
        echo();
        ff = _d3_format.formatPrefix("_>15,.3f", 1e-3);
        info('Ωfstr_247', ff(0.00089));
        info('Ωfstr_248', ff(0.0089));
        info('Ωfstr_249', ff(0.089));
        info('Ωfstr_250', ff(0.89));
        info('Ωfstr_251', ff(8.9));
        info('Ωfstr_252', ff(89));
        info('Ωfstr_253', ff(890));
        return null;
      })();
      (() => {
        var ff;
        echo();
        ff = _d3_format.formatPrefix("_>15,.3f", 1e-2);
        info('Ωfstr_254', ff(0.00089));
        info('Ωfstr_255', ff(0.0089));
        info('Ωfstr_256', ff(0.089));
        info('Ωfstr_257', ff(0.89));
        info('Ωfstr_258', ff(8.9));
        info('Ωfstr_259', ff(89));
        info('Ωfstr_260', ff(890));
        return null;
      })();
      (() => {
        var ff;
        echo();
        ff = _d3_format.formatPrefix("_>15,.3f", 1e-1);
        info('Ωfstr_261', ff(0.00089));
        info('Ωfstr_262', ff(0.0089));
        info('Ωfstr_263', ff(0.089));
        info('Ωfstr_264', ff(0.89));
        info('Ωfstr_265', ff(8.9));
        info('Ωfstr_266', ff(89));
        info('Ωfstr_267', ff(890));
        return null;
      })();
      return (() => {
        var ff, scale;
        echo();
        ff = _d3_format.formatPrefix("_>15,.3f", 1e0);
        scale = 1 / 1e-2;
        info('Ωfstr_268', ff(0.00089 * scale));
        info('Ωfstr_269', ff(0.0089 * scale));
        info('Ωfstr_270', ff(0.089 * scale));
        info('Ωfstr_271', ff(0.89 * scale));
        info('Ωfstr_272', ff(8.9 * scale));
        info('Ωfstr_273', ff(89 * scale));
        info('Ωfstr_274', ff(890 * scale));
        return null;
      })();
    })();
    echo();
    return null;
  };

  //===========================================================================================================
  intl_number_demo = function() {
    var _d3_format, amount, f, new_ftag, rvs;
    ({f, new_ftag, _d3_format} = require('../../../apps/effstring'));
    ({
      reverse: rvs
    } = GUY.trm);
    debug('Ωfstr_275', 1234567891234567891);
    debug('Ωfstr_276', f`${1234567891234567891}:<30.3f;`);
    // debug 'Ωfstr_277', f"#{1234567891234567891n}:<30.3f;"
    debug('Ωfstr_278', f`${'1234567891234567891'}:<30.3f;`);
    (() => {
      var i, len, locale, ref, results, type, value;
      locale = new Intl.NumberFormat('en-US'); //, { style: 'currency', currency: 'USD', }
      help('Ωfstr_279', locale.resolvedOptions());
      urge('Ωfstr_280', locale.format(9876543210));
      ref = locale.formatToParts(9876543210);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        ({type, value} = ref[i]);
        results.push(debug('Ωfstr_281', f`${type}:15c;`, rvs(rpr(value))));
      }
      return results;
    })();
    echo();
    (() => {
      var de_DE, en_US, number;
      number = 123456.789;
      de_DE = new Intl.NumberFormat('de-DE');
      urge('Ωfstr_282', rvs(rpr(de_DE.format(number))));
      en_US = new Intl.NumberFormat('en-US');
      urge('Ωfstr_283', rvs(rpr(en_US.format(number))));
      return null;
    })();
    // You can also specify additional options such as the style of formatting (decimal, currency, or
    // percent), the currency to use if formatting a currency, and the number of minimum and maximum fraction
    // digits. For instance, to format a number as a currency in US dollars:
    amount = 654321.987;
    (() => {
      var numberFormat;
      numberFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      return info('Ωfstr_284', rvs(rpr(numberFormat.format(amount))));
    })();
    (() => {
      var numberFormat;
      numberFormat = new Intl.NumberFormat('en-US', {
        style: 'percent',
        currency: 'USD'
      });
      info('Ωfstr_285', rvs(rpr(numberFormat.format(amount))));
      return info('Ωfstr_286', rvs(rpr(numberFormat.format(0.756789))));
    })();
    (() => {
      var numberFormat;
      numberFormat = new Intl.NumberFormat('en-US', {
        style: 'percent',
        currency: 'USD',
        maximumSignificantDigits: 2
      });
      info('Ωfstr_287', rvs(rpr(numberFormat.format(amount))));
      return info('Ωfstr_288', rvs(rpr(numberFormat.format(0.756789))));
    })();
    (() => {
      // the nu extension key requests a numbering system, e.g. Chinese decimal
      help('Ωfstr_289', rvs(rpr((new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec')).format(123456.789))));
      help('Ωfstr_290', rvs(rpr((new Intl.NumberFormat('zh-Hans-CN-u-nu-hans')).format(123456.789))));
      help('Ωfstr_291', rvs(rpr((new Intl.NumberFormat('zh-Hans-CN-u-nu-hansfin')).format(123456.789))));
      help('Ωfstr_292', rvs(rpr((new Intl.NumberFormat('zh-Hant-TW-u-nu-hant')).format(123456.789))));
      help('Ωfstr_293', rvs(rpr((new Intl.NumberFormat('zh-Hant-TW-u-nu-hantfin')).format(123456.789))));
      return help('Ωfstr_294', rvs(rpr((new Intl.NumberFormat('roman')).format(123456.789))));
    })();
    (() => {
      var numberFormat;
      // Additionally, you can use the format method of an Intl.NumberFormat instance to format a number
      // according to the locale and formatting options of the object
      numberFormat = new Intl.NumberFormat('en-US');
      return info('Ωfstr_295', rvs(rpr(numberFormat.format(123456.789)))); // "123,456.789"
    })();
    return null;
  };

  //===========================================================================================================
  mantissa_exponent_demo = function() {
    var _d3_format, d, e, f, formatter, get_mantissa_and_exponent, new_ftag, rvs;
    ({f, new_ftag, _d3_format} = require('../../../apps/effstring'));
    ({
      reverse: rvs
    } = GUY.trm);
    (() => {})();
    get_mantissa_and_exponent = function(num) {
      var bits, exponent, mantissa, sign;
      bits = num.toString(2);
      sign = bits === '1';
      exponent = parseInt(bits.slice(1, 12), 2) - 1023;
      mantissa = '1' + bits.slice(12);
      return {sign, exponent, mantissa};
    };
    d = 123_456_789.123456789;
    e = d * 1e18;
    debug('Ωfstr_296', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
    e = d * 1e12;
    debug('Ωfstr_297', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
    e = d * 1e09;
    debug('Ωfstr_298', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
    e = d * 1e06;
    debug('Ωfstr_299', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
    e = d * 1e03;
    debug('Ωfstr_300', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
    e = d;
    debug('Ωfstr_301', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
    e = d / 1e03;
    debug('Ωfstr_302', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
    e = d / 1e06;
    debug('Ωfstr_303', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
    e = d / 1e09;
    debug('Ωfstr_304', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
    e = d / 1e12;
    debug('Ωfstr_305', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
    e = d / 1e18;
    debug('Ωfstr_306', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
    formatter = new Intl.NumberFormat('en-US', {
      useGrouping: false,
      // minimumFractionDigits:    40,
      // maximumFractionDigits:    40,
      minimumSignificantDigits: 16, // max allowed value is 21
      maximumSignificantDigits: 16 // max allowed value is 21
    });
    e = d * 1e44;
    help('Ωfstr_307', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d * 1e41;
    help('Ωfstr_307', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d * 1e39;
    help('Ωfstr_307', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d * 1e36;
    help('Ωfstr_307', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d * 1e33;
    help('Ωfstr_307', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d * 1e30;
    help('Ωfstr_307', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d * 1e27;
    help('Ωfstr_308', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d * 1e24;
    help('Ωfstr_309', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d * 1e21;
    help('Ωfstr_310', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d * 1e18;
    help('Ωfstr_311', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d * 1e15;
    help('Ωfstr_312', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d * 1e12;
    help('Ωfstr_313', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d * 1e09;
    help('Ωfstr_314', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d * 1e06;
    help('Ωfstr_315', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d * 1e03;
    help('Ωfstr_316', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    echo();
    e = d;
    help('Ωfstr_317', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    echo();
    e = d / 1e03;
    help('Ωfstr_318', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d / 1e06;
    help('Ωfstr_319', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d / 1e09;
    help('Ωfstr_320', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d / 1e12;
    help('Ωfstr_321', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d / 1e15;
    help('Ωfstr_322', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d / 1e18;
    help('Ωfstr_323', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d / 1e21;
    help('Ωfstr_324', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d / 1e24;
    help('Ωfstr_325', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d / 1e27;
    help('Ωfstr_326', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d / 1e30;
    help('Ωfstr_327', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d / 1e33;
    help('Ωfstr_328', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d / 1e36;
    help('Ωfstr_329', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d / 1e39;
    help('Ωfstr_330', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d / 1e41;
    help('Ωfstr_331', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    e = d / 1e44;
    help('Ωfstr_332', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    echo();
    e = 0.1 + 0.1 + 0.1;
    help('Ωfstr_333', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // ( new Test { throw_on_error: true, } ).test @intertype_tasks
      (new Test({
        throw_on_error: false
      })).test(this.intertype_tasks);
      // ( new Test { throw_on_error: false, } ).test { si_units_format_specifier: @intertype_tasks.si_units_format_specifier, }
      // README_demo()
      // intl_number_demo()
      return mantissa_exponent_demo();
    })();
  }

}).call(this);

//# sourceMappingURL=test-basics.js.map