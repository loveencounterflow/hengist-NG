(async function() {
  'use strict';
  var GTNG, GUY, TMP_types, Test, WGUY, alert, debug, demo, echo, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

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
      }), 'd = _1234567800000000000000000000.00000000000000000000ym');
      this.eq((Ωfstr_150 = function() {
        return f`d = ${1234.5678}:_>50.20f/z;m`;
      }), 'd = ____1234567800000000000000000.00000000000000000000zm');
      this.eq((Ωfstr_151 = function() {
        return f`d = ${1234.5678}:_>50.20f/a;m`;
      }), 'd = _______1234567800000000000000.00000000000000000000am');
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
      }), 'd = ______________________1234567.80000000000000000000mm');
      this.eq((Ωfstr_157 = function() {
        return f`d = ${1234.5678}:_>50.20f/1;m`;
      }), 'd = _________________________1234.56780000000000000000m');
      this.eq((Ωfstr_158 = function() {
        return f`d = ${1234.5678}:_>50.20f/k;m`;
      }), 'd = ____________________________1.23456780000000000000km');
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
      }), 'd = ____________________________0.00000000000000123458Em');
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
    //=========================================================================================================
    ansi_escapes_and_widths: {
      //-------------------------------------------------------------------------------------------------------
      ansi_escapes_dont_count_for_widths: function() {
        var _d3_format, _default_locale, _hint_as_locale_cfg, _locale_cfg_from_bcp47, _locale_cfg_from_hints, bold, f, new_ftag, red, string_width, strip_ansi, to_width, width_of, Ωfstr_228, Ωfstr_229, Ωfstr_230, Ωfstr_231, Ωfstr_232, Ωfstr_233, Ωfstr_234, Ωfstr_235, Ωfstr_236, Ωfstr_237, Ωfstr_238, Ωfstr_239, Ωfstr_240, Ωfstr_241, Ωfstr_242, Ωfstr_243, Ωfstr_244, Ωfstr_245, Ωfstr_246, Ωfstr_247, Ωfstr_248, Ωfstr_249, Ωfstr_250, Ωfstr_251, Ωfstr_252, Ωfstr_253;
        ({f, new_ftag, _default_locale, _d3_format, _locale_cfg_from_bcp47, _locale_cfg_from_hints, _hint_as_locale_cfg} = require('../../../apps/effstring'));
        ({to_width, width_of} = require('../../../apps/to-width'));
        ({
          default: strip_ansi
        } = require('strip-ansi'));
        ({
          default: string_width
        } = require('../../../apps/effstring/node_modules/string-width'));
        ({red, reverse, bold} = GUY.trm);
        (() => {          //.....................................................................................................
          /*
          to-width:
              "string-width": "7.2.0",
              "wcstring": "^2.1.1"
          effstring:
              "string-width": "^7.2.0"

          */
          var C, SFMODULES_dev, ansi_matcher, chunkify, d, segmenter, split_into_visual_glyphs, text_with_ansi_codes, Ωfstr_202, Ωfstr_203, Ωfstr_204, Ωfstr_205;
          SFMODULES_dev = require('../../../apps/bricabrac-sfmodules');
          ({
            ansi_colors_and_effects: C
          } = SFMODULES_dev.require_ansi_colors_and_effects());
          this.eq((Ωfstr_202 = function() {
            return width_of(C.red + 'abc' + C.default);
          }), 3);
          this.eq((Ωfstr_203 = function() {
            return string_width(C.red + 'abc' + C.default);
          }), 3);
          this.eq((Ωfstr_204 = function() {
            return width_of(C.red + C.italic + C.bold + 'abc' + C.bold0 + C.italic0 + C.default);
          }), 3);
          this.eq((Ωfstr_205 = function() {
            return string_width(C.red + C.italic + C.bold + 'abc' + C.bold0 + C.italic0 + C.default);
          }), 3);
          ansi_matcher = /((?:\x1b\[[^m]+m)+)/g;
          segmenter = new Intl.Segmenter();
          split_into_visual_glyphs = function(text) {
            var d, results;
            results = [];
            for (d of segmenter.segment(text)) {
              results.push(d.segment);
            }
            return results;
          };
          debug('Ωfstr_206', width_of(f`${red(reverse(bold('')))}`));
          debug('Ωfstr_207', string_width(f`${red(reverse(bold('')))}`));
          debug('Ωfstr_208', f`\x1b[mA`);
          debug('Ωfstr_209', f`\x1b[45mA`);
          debug('Ωfstr_210', f`\x1b[999mA`);
          debug('Ωfstr_211', f`\x1b[999:876:7mA`);
          text_with_ansi_codes = `ABC${C.black + C.bg_red + C.bold + 'DEF' + C.bold0 + C.default + C.bg_default}XYZ`;
          debug('Ωfstr_212', text_with_ansi_codes);
          // debug 'Ωfstr_213', ( d.segment for d from segmenter.segment  text_with_ansi_codes )
          debug('Ωfstr_214', rpr(text_with_ansi_codes));
          debug('Ωfstr_215', width_of(text_with_ansi_codes));
          debug('Ωfstr_216', string_width(text_with_ansi_codes));
          debug('Ωfstr_217', rpr(strip_ansi(text_with_ansi_codes)));
          for (d of text_with_ansi_codes.matchAll(ansi_matcher)) {
            urge('Ωfstr_218', d);
          }
          debug('Ωfstr_219', text_with_ansi_codes.replace(ansi_matcher, '.'));
          chunkify = function(text) {
            var chunk, chunk_has_ansi, chunk_width, chunks, has_ansi, i, len, ref, width;
            chunks = [];
            width = 0;
            has_ansi = false;
            chunk_has_ansi = true;
            /* TAINT might as well return an empty list of chunks */
            if (text === '') {
              return {
                has_ansi,
                width,
                chunks: [
                  {
                    has_ansi,
                    width,
                    chunk: ''
                  }
                ]
              };
            }
            ref = text.split(ansi_matcher);
            for (i = 0, len = ref.length; i < len; i++) {
              chunk = ref[i];
              chunk_has_ansi = !chunk_has_ansi;
              has_ansi || (has_ansi = chunk_has_ansi);
              if (chunk === '') {
                continue;
              }
              chunk_width = has_ansi ? 0 : string_width(chunk);
              width += chunk_width;
              chunks.push({
                has_ansi: chunk_has_ansi,
                width: chunk_width,
                chunk
              });
            }
            return {has_ansi, width, chunks};
          };
          (() => {            // [Symbol.iterator]: ( -> d for d in chunks )
            var results, text;
            echo('—————————————————————————————————————————————');
            text = text_with_ansi_codes;
            urge('Ωfstr_220', chunkify(text));
            results = [];
            for (d of (chunkify(text)).chunks) {
              results.push(info('Ωfstr_221', d));
            }
            return results;
          })();
          (() => {
            var results, text;
            echo('—————————————————————————————————————————————');
            text = 'ABCDEFXYZ';
            urge('Ωfstr_222', chunkify(text));
            results = [];
            for (d of (chunkify(text)).chunks) {
              results.push(info('Ωfstr_223', d));
            }
            return results;
          })();
          (() => {
            var results, text;
            echo('—————————————————————————————————————————————');
            text = `${C.black + C.bg_red + C.bold + C.bold0 + C.default + C.bg_default}`;
            urge('Ωfstr_224', chunkify(text));
            results = [];
            for (d of (chunkify(text)).chunks) {
              results.push(info('Ωfstr_225', d));
            }
            return results;
          })();
          (() => {
            var results, text;
            echo('—————————————————————————————————————————————');
            text = '';
            urge('Ωfstr_226', chunkify(text));
            results = [];
            for (d of (chunkify(text)).chunks) {
              results.push(info('Ωfstr_227', d));
            }
            return results;
          })();
          return process.exit(111);
        })();
        //.....................................................................................................
        this.eq((Ωfstr_228 = function() {
          return width_of('abc');
        }), 3);
        this.eq((Ωfstr_229 = function() {
          return width_of(red('abc'));
        }), 3);
        this.eq((Ωfstr_230 = function() {
          return width_of(reverse('abc'));
        }), 3);
        this.eq((Ωfstr_231 = function() {
          return width_of(bold('abc'));
        }), 3);
        this.eq((Ωfstr_232 = function() {
          return width_of(red(reverse(bold('abc'))));
        }), 3);
        this.eq((Ωfstr_233 = function() {
          return string_width('abc');
        }), 3);
        this.eq((Ωfstr_234 = function() {
          return string_width(red('abc'));
        }), 3);
        this.eq((Ωfstr_235 = function() {
          return string_width(reverse('abc'));
        }), 3);
        this.eq((Ωfstr_236 = function() {
          return string_width(bold('abc'));
        }), 3);
        this.eq((Ωfstr_237 = function() {
          return string_width(red(reverse(bold('abc'))));
        }), 3);
        //.....................................................................................................
        this.eq((Ωfstr_238 = function() {
          return f`[${'abc'}:<20c;]`;
        }), '[abc                 ]');
        this.eq((Ωfstr_239 = function() {
          return strip_ansi(f`[${red('abc')}:<20c;]`);
        }), '[abc                 ]');
        this.eq((Ωfstr_240 = function() {
          return strip_ansi(f`[${reverse('abc')}:<20c;]`);
        }), '[abc                 ]');
        this.eq((Ωfstr_241 = function() {
          return strip_ansi(f`[${bold('abc')}:<20c;]`);
        }), '[abc                 ]');
        this.eq((Ωfstr_242 = function() {
          return strip_ansi(f`[${red(reverse(bold('abc')))}:<20c;]`);
        }), '[abc                 ]');
        //.....................................................................................................
        this.eq((Ωfstr_243 = function() {
          return f`[${'abc'}:>20c;]`;
        }), '[                 abc]');
        this.eq((Ωfstr_244 = function() {
          return strip_ansi(f`[${red('abc')}:>20c;]`);
        }), '[                 abc]');
        this.eq((Ωfstr_245 = function() {
          return strip_ansi(f`[${reverse('abc')}:>20c;]`);
        }), '[                 abc]');
        this.eq((Ωfstr_246 = function() {
          return strip_ansi(f`[${bold('abc')}:>20c;]`);
        }), '[                 abc]');
        this.eq((Ωfstr_247 = function() {
          return strip_ansi(f`[${red(reverse(bold('abc')))}:>20c;]`);
        }), '[                 abc]');
        //.....................................................................................................
        this.eq((Ωfstr_248 = function() {
          return f`[${'abc'}:^20c;]`;
        }), '[        abc         ]');
        this.eq((Ωfstr_249 = function() {
          return strip_ansi(f`[${red('abc')}:^20c;]`);
        }), '[        abc         ]');
        this.eq((Ωfstr_250 = function() {
          return strip_ansi(f`[${reverse('abc')}:^20c;]`);
        }), '[        abc         ]');
        this.eq((Ωfstr_251 = function() {
          return strip_ansi(f`[${bold('abc')}:^20c;]`);
        }), '[        abc         ]');
        this.eq((Ωfstr_252 = function() {
          return strip_ansi(f`[${red(reverse(bold('abc')))}:^20c;]`);
        }), '[        abc         ]');
        //.....................................................................................................
        this.eq((Ωfstr_253 = function() {
          return f`[${'abc'}:=20c;]`;
        }), '[                 abc]');
        // @eq ( Ωfstr_254 = -> strip_ansi f"[#{ red              'abc' }:=20c;]"  ), '[        abc         ]'
        // @eq ( Ωfstr_255 = -> strip_ansi f"[#{ reverse          'abc' }:=20c;]"  ), '[        abc         ]'
        // @eq ( Ωfstr_256 = -> strip_ansi f"[#{ bold             'abc' }:=20c;]"  ), '[        abc         ]'
        // @eq ( Ωfstr_257 = -> strip_ansi f"[#{ red reverse bold 'abc' }:=20c;]"  ), '[        abc         ]'
        //.....................................................................................................
        return null;
      }
    }
  };

  //###########################################################################################################

  //===========================================================================================================
  this.future_intertype_tasks = {
    //---------------------------------------------------------------------------------------------------------
    handle_nonnumeric_values: function() {
      var _d3_format, _default_locale, _hint_as_locale_cfg, _locale_cfg_from_bcp47, _locale_cfg_from_hints, f, new_ftag, Ωfstr_258, Ωfstr_260;
      ({f, new_ftag, _default_locale, _d3_format, _locale_cfg_from_bcp47, _locale_cfg_from_hints, _hint_as_locale_cfg} = require('../../../apps/effstring'));
      //.......................................................................................................
      this.eq((Ωfstr_258 = function() {
        return urge('Ωfstr_259', rpr(f`d = ${"helo"}:60.40f/k;m`));
      }), null);
      this.eq((Ωfstr_260 = function() {
        return urge('Ωfstr_261', rpr(f`d = ${true}:60.40f/k;m`));
      }), null);
      // @eq ( Ωfstr_262 = -> urge 'Ωfstr_263', rpr f"d = #{123456789n}:60.40f/k;m" ), null
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  demo = {
    README: function() {
      var _d3_format, f, new_ftag;
      ({f, new_ftag, _d3_format} = require('../../../apps/effstring'));
      echo();
      (() => {
        // info 'Ωfstr_264', f"——#{1234}:$#20x;——"
        info('Ωfstr_265', f`——${1234}:;>20;——`);
        info('Ωfstr_266', f`——${1234}:#>20.3e;——`);
        info('Ωfstr_267', f`——${1234}:#>20.3f;——`);
        info('Ωfstr_268', f`——${1234}:#>20.3s;——`);
        info('Ωfstr_269', f`——${1234}:#>20.3n;——`);
        return info('Ωfstr_270', f`——${2e308}:#>20.3n;——`);
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
        (() => {          // f_en = new_ftag 'en-GB',            { fullwidth: false, }
          // console.log f_en"#{-98765.43}:·>$50,.2f;"
          var ff;
          echo();
          ff = _d3_format.formatPrefix("_>15,.3~", 1e-6);
          info('Ωfstr_271', ff(0.00000042));
          info('Ωfstr_272', ff(0.0000042));
          info('Ωfstr_273', ff(0.000042));
          info('Ωfstr_274', ff(0.00042));
          info('Ωfstr_275', ff(0.0042));
          info('Ωfstr_276', ff(0.042));
          info('Ωfstr_277', ff(0.42));
          return null;
        })();
        (() => {
          var ff;
          echo();
          ff = _d3_format.formatPrefix("_>15,.3~s", 1e-6);
          info('Ωfstr_278', ff(0.00000042));
          info('Ωfstr_279', ff(0.0000042));
          info('Ωfstr_280', ff(0.000042));
          info('Ωfstr_281', ff(0.00042));
          info('Ωfstr_282', ff(0.0042));
          info('Ωfstr_283', ff(0.042));
          info('Ωfstr_284', ff(0.42));
          return null;
        })();
        (() => {
          var ff;
          echo();
          ff = _d3_format.formatPrefix("_>15,.3~f", 1e-6);
          info('Ωfstr_285', ff(0.00000042));
          info('Ωfstr_286', ff(0.0000042));
          info('Ωfstr_287', ff(0.000042));
          info('Ωfstr_288', ff(0.00042));
          info('Ωfstr_289', ff(0.0042));
          info('Ωfstr_290', ff(0.042));
          info('Ωfstr_291', ff(0.42));
          return null;
        })();
        (() => {
          echo();
          info('Ωfstr_292', f`${0.00000042}:_>15,.3f/µ;`);
          info('Ωfstr_293', f`${0.0000042}:_>15,.3f/µ;`);
          info('Ωfstr_294', f`${0.000042}:_>15,.3f/µ;`);
          info('Ωfstr_295', f`${0.00042}:_>15,.3f/µ;`);
          info('Ωfstr_296', f`${0.0042}:_>15,.3f/µ;`);
          info('Ωfstr_297', f`${0.042}:_>15,.3f/µ;`);
          info('Ωfstr_298', f`${0.42}:_>15,.3f/µ;`);
          return null;
        })();
        (() => {
          echo();
          info('Ωfstr_299', f`${123000}:_>9,.3f/k;m`);
          info('Ωfstr_300', f`${7000}:_>9,.3f/k;m`);
          info('Ωfstr_301', f`${500}:_>9,.3f/k;m`);
          info('Ωfstr_302', f`${99}:_>9,.3f/k;m`);
          return null;
        })();
        (() => {
          var ff;
          echo();
          ff = _d3_format.formatPrefix("_>15,.3f", 1e-3);
          info('Ωfstr_303', ff(0.00089));
          info('Ωfstr_304', ff(0.0089));
          info('Ωfstr_305', ff(0.089));
          info('Ωfstr_306', ff(0.89));
          info('Ωfstr_307', ff(8.9));
          info('Ωfstr_308', ff(89));
          info('Ωfstr_309', ff(890));
          return null;
        })();
        (() => {
          var ff;
          echo();
          ff = _d3_format.formatPrefix("_>15,.3f", 1e-2);
          info('Ωfstr_310', ff(0.00089));
          info('Ωfstr_311', ff(0.0089));
          info('Ωfstr_312', ff(0.089));
          info('Ωfstr_313', ff(0.89));
          info('Ωfstr_314', ff(8.9));
          info('Ωfstr_315', ff(89));
          info('Ωfstr_316', ff(890));
          return null;
        })();
        (() => {
          var ff;
          echo();
          ff = _d3_format.formatPrefix("_>15,.3f", 1e-1);
          info('Ωfstr_317', ff(0.00089));
          info('Ωfstr_318', ff(0.0089));
          info('Ωfstr_319', ff(0.089));
          info('Ωfstr_320', ff(0.89));
          info('Ωfstr_321', ff(8.9));
          info('Ωfstr_322', ff(89));
          info('Ωfstr_323', ff(890));
          return null;
        })();
        return (() => {
          var ff, scale;
          echo();
          ff = _d3_format.formatPrefix("_>15,.3f", 1e0);
          scale = 1 / 1e-2;
          info('Ωfstr_324', ff(0.00089 * scale));
          info('Ωfstr_325', ff(0.0089 * scale));
          info('Ωfstr_326', ff(0.089 * scale));
          info('Ωfstr_327', ff(0.89 * scale));
          info('Ωfstr_328', ff(8.9 * scale));
          info('Ωfstr_329', ff(89 * scale));
          info('Ωfstr_330', ff(890 * scale));
          return null;
        })();
      })();
      echo();
      return null;
    },
    //=========================================================================================================
    intl_number: function() {
      var _d3_format, amount, f, new_ftag, rvs;
      ({f, new_ftag, _d3_format} = require('../../../apps/effstring'));
      ({
        reverse: rvs
      } = GUY.trm);
      debug('Ωfstr_331', 1234567891234567891);
      debug('Ωfstr_332', f`${1234567891234567891}:<30.3f;`);
      // debug 'Ωfstr_333', f"#{1234567891234567891n}:<30.3f;"
      debug('Ωfstr_334', f`${'1234567891234567891'}:<30.3f;`);
      (() => {
        var i, len, locale, ref, results, type, value;
        locale = new Intl.NumberFormat('en-US'); //, { style: 'currency', currency: 'USD', }
        help('Ωfstr_335', locale.resolvedOptions());
        urge('Ωfstr_336', locale.format(9876543210));
        ref = locale.formatToParts(9876543210);
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          ({type, value} = ref[i]);
          results.push(debug('Ωfstr_337', f`${type}:15c;`, rvs(rpr(value))));
        }
        return results;
      })();
      echo();
      (() => {
        var de_DE, en_US, number;
        number = 123456.789;
        de_DE = new Intl.NumberFormat('de-DE');
        urge('Ωfstr_338', rvs(rpr(de_DE.format(number))));
        en_US = new Intl.NumberFormat('en-US');
        urge('Ωfstr_339', rvs(rpr(en_US.format(number))));
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
        return info('Ωfstr_340', rvs(rpr(numberFormat.format(amount))));
      })();
      (() => {
        var numberFormat;
        numberFormat = new Intl.NumberFormat('en-US', {
          style: 'percent',
          currency: 'USD'
        });
        info('Ωfstr_341', rvs(rpr(numberFormat.format(amount))));
        return info('Ωfstr_342', rvs(rpr(numberFormat.format(0.756789))));
      })();
      (() => {
        var numberFormat;
        numberFormat = new Intl.NumberFormat('en-US', {
          style: 'percent',
          currency: 'USD',
          maximumSignificantDigits: 2
        });
        info('Ωfstr_343', rvs(rpr(numberFormat.format(amount))));
        return info('Ωfstr_344', rvs(rpr(numberFormat.format(0.756789))));
      })();
      (() => {
        // the nu extension key requests a numbering system, e.g. Chinese decimal
        help('Ωfstr_345', rvs(rpr((new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec')).format(123456.789))));
        help('Ωfstr_346', rvs(rpr((new Intl.NumberFormat('zh-Hans-CN-u-nu-hans')).format(123456.789))));
        help('Ωfstr_347', rvs(rpr((new Intl.NumberFormat('zh-Hans-CN-u-nu-hansfin')).format(123456.789))));
        help('Ωfstr_348', rvs(rpr((new Intl.NumberFormat('zh-Hant-TW-u-nu-hant')).format(123456.789))));
        help('Ωfstr_349', rvs(rpr((new Intl.NumberFormat('zh-Hant-TW-u-nu-hantfin')).format(123456.789))));
        return help('Ωfstr_350', rvs(rpr((new Intl.NumberFormat('roman')).format(123456.789))));
      })();
      (() => {
        var numberFormat;
        // Additionally, you can use the format method of an Intl.NumberFormat instance to format a number
        // according to the locale and formatting options of the object
        numberFormat = new Intl.NumberFormat('en-US');
        return info('Ωfstr_351', rvs(rpr(numberFormat.format(123456.789)))); // "123,456.789"
      })();
      return null;
    },
    //=========================================================================================================
    mantissa_exponent: function() {
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
      debug('Ωfstr_352', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
      e = d * 1e12;
      debug('Ωfstr_353', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
      e = d * 1e09;
      debug('Ωfstr_354', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
      e = d * 1e06;
      debug('Ωfstr_355', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
      e = d * 1e03;
      debug('Ωfstr_356', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
      e = d;
      debug('Ωfstr_357', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
      e = d / 1e03;
      debug('Ωfstr_358', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
      e = d / 1e06;
      debug('Ωfstr_359', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
      e = d / 1e09;
      debug('Ωfstr_360', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
      e = d / 1e12;
      debug('Ωfstr_361', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
      e = d / 1e18;
      debug('Ωfstr_362', f`${e}:34,.17;`, get_mantissa_and_exponent(e));
      formatter = new Intl.NumberFormat('en-US', {
        useGrouping: false,
        // minimumFractionDigits:    40,
        // maximumFractionDigits:    40,
        minimumSignificantDigits: 16, // max allowed value is 21
        maximumSignificantDigits: 16 // max allowed value is 21
      });
      e = d * 1e200;
      help('Ωfstr_363', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e100;
      help('Ωfstr_364', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e50;
      help('Ωfstr_365', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e44;
      help('Ωfstr_366', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e41;
      help('Ωfstr_367', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e39;
      help('Ωfstr_368', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e36;
      help('Ωfstr_369', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e33;
      help('Ωfstr_370', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e30;
      help('Ωfstr_371', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e27;
      help('Ωfstr_372', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e24;
      help('Ωfstr_373', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e21;
      help('Ωfstr_374', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e18;
      help('Ωfstr_375', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e15;
      help('Ωfstr_376', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e12;
      help('Ωfstr_377', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e09;
      help('Ωfstr_378', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e06;
      help('Ωfstr_379', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d * 1e03;
      help('Ωfstr_380', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      echo();
      e = d;
      help('Ωfstr_381', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      echo();
      e = d / 1e03;
      help('Ωfstr_382', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e06;
      help('Ωfstr_383', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e09;
      help('Ωfstr_384', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e12;
      help('Ωfstr_385', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e15;
      help('Ωfstr_386', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e18;
      help('Ωfstr_387', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e21;
      help('Ωfstr_388', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e24;
      help('Ωfstr_389', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e27;
      help('Ωfstr_390', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e30;
      help('Ωfstr_391', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e33;
      help('Ωfstr_392', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e36;
      help('Ωfstr_393', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e39;
      help('Ωfstr_394', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e41;
      help('Ωfstr_395', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e44;
      help('Ωfstr_396', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e100;
      help('Ωfstr_397', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      e = d / 1e200;
      help('Ωfstr_398', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      echo();
      e = 0.1 + 0.1 + 0.1;
      help('Ωfstr_399', f`${formatter.format(e)}:>60c;`.replace(/0/g, '*'));
      return null;
    },
    //=========================================================================================================
    grouping: function() {
      var TOBEDONE_Error, _d3_format, demo_grouping, f, new_ftag, notation, rvs, walk_group_steps;
      ({f, new_ftag, _d3_format} = require('../../../apps/effstring'));
      ({
        reverse: rvs
      } = GUY.trm);
      //-------------------------------------------------------------------------------------------------------
      // group_digits = ( text, n = 3, separator = ',' ) ->
      //   ### TAINT validate n is integer between 1 and 100 ###
      //   # grouping_re = /// \B (?= ( \d{ #{n} } )+ (?! \d ) ) ///g
      //   grouping_re = /// \B (?= ( \d{ #{n} } )+ $ ) ///g
      //   return text.replace grouping_re, separator
      notation = function() {
        '...,###';
        [',', 3];
        '...,###,##-#:#';
        [',', 3, ',', 2, '-', 1, ':', 1];
        ',###';
        [0, ',', 3];
        ',###,##-#:#';
        return [0, ',', 3, ',', 2, '-', 1, ':', 1];
      };
      //-------------------------------------------------------------------------------------------------------
      urge('Ωfstr_400', f`${group_digits('1')}:>20c;`);
      urge('Ωfstr_401', f`${group_digits('12')}:>20c;`);
      urge('Ωfstr_402', f`${group_digits('123')}:>20c;`);
      urge('Ωfstr_403', f`${group_digits('1234')}:>20c;`);
      urge('Ωfstr_404', f`${group_digits('12345')}:>20c;`);
      urge('Ωfstr_405', f`${group_digits('123456')}:>20c;`);
      urge('Ωfstr_406', f`${group_digits('1234567')}:>20c;`);
      urge('Ωfstr_407', f`${group_digits('12345678')}:>20c;`);
      urge('Ωfstr_408', f`${group_digits('123456789')}:>20c;`);
      urge('Ωfstr_409', f`${group_digits('1234567890')}:>20c;`);
      //-------------------------------------------------------------------------------------------------------
      TOBEDONE_Error = class TOBEDONE_Error extends Error {};
      //-------------------------------------------------------------------------------------------------------
      walk_group_steps = function*(grouping_cfg, chr_count) {
        var chr_idx, delta, group_idx, marker, repeat;
        if (chr_count < 1) {
          /* assuming grouping_cfg has been validated */
          /* TAINT consider to use `grouping_cfg.at -1` &c */
          /* TAINT validate chr_count */
          return null;
        }
        chr_idx = chr_count;
        group_idx = grouping_cfg.length - 2;
        repeat = grouping_cfg[0] !== 0;
        while (true) {
          [marker, delta] = grouping_cfg.slice(group_idx, +(group_idx + 1) + 1 || 9e9);
          if (delta < 1) {
            /* for safety only, should never happen with validated grouping_cfg: */
            throw new TOBEDONE_Error("delta is zero or less");
          }
          chr_idx -= delta;
          if (chr_idx <= 0) {
            break;
          }
          yield ({marker, delta, chr_idx});
          if (repeat) {
            if (group_idx > 1) {
              group_idx -= 2;
            }
          } else {
            if (group_idx < 1) {
              break;
            }
            group_idx -= 2;
          }
        }
        return null;
      };
      //-------------------------------------------------------------------------------------------------------
      demo_grouping = function(text, grouping_cfg) {
        var chrs, insertion;
        // [...new Intl.Segmenter().segment( text )].map(s => s.segment)
        urge('Ωfstr_410', rpr(grouping_cfg.join('')));
        chrs = Array.from(text);
        for (insertion of walk_group_steps(grouping_cfg, chrs.length)) {
          chrs.splice(insertion.chr_idx, 0, insertion.marker);
        }
        return chrs.join('');
      };
      (() => {        //-------------------------------------------------------------------------------------------------------
        info('Ωfstr_411', demo_grouping('98765432109876543210', [',', 3, ',', 2, '-', 1, ':', 1]));
        info('Ωfstr_412', demo_grouping('98765432109876543210', [0, ',', 3, ',', 2, '-', 1, ':', 1]));
        info('Ωfstr_413', demo_grouping('98765432109876543210', [',', 1]));
        info('Ωfstr_414', demo_grouping('98765432109876543210', [',', 2]));
        info('Ωfstr_415', demo_grouping('98765432109876543210', [',', 3]));
        info('Ωfstr_416', demo_grouping('98765432109876543210', [',', 4]));
        return info('Ωfstr_417', demo_grouping('98765432109876543210', [',', 5]));
      })();
      //-------------------------------------------------------------------------------------------------------
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var all_tasks, guytest_cfg;
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
      all_tasks = {
        intertype_tasks: this.intertype_tasks,
        future_intertype_tasks: this.future_intertype_tasks
      };
      // ( new Test guytest_cfg ).test all_tasks
      (new Test(guytest_cfg)).test(this.intertype_tasks);
      return (new Test(guytest_cfg)).test({
        ansi_escapes_and_widths: this.intertype_tasks.ansi_escapes_and_widths
      });
    })();
  }

  // ( new Test guytest_cfg ).test @future_intertype_tasks
// ( new Test { throw_on_error: true, } ).test @intertype_tasks
// ( new Test { throw_on_error: false, } ).test @intertype_tasks
// ( new Test { throw_on_error: false, } ).test { si_units_format_specifier: @intertype_tasks.si_units_format_specifier, }
// ( new Test() ).test demo
// demo.README()
// demo.intl_number()
// demo.mantissa_exponent()
// demo.grouping()

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtYmFzaWNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQix1QkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxHQUpGLENBQUEsR0FJNEIsR0FBRyxDQUFDLEdBSmhDOztFQUtBLElBQUEsR0FBNEIsT0FBQSxDQUFRLHNCQUFSOztFQUM1QixTQUFBLEdBQTRCLElBQUksQ0FBRSxPQUFBLENBQVEsbUJBQVIsQ0FBRixDQUErQixDQUFDLFNBQXBDLENBQUE7O0VBQzVCLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCLEVBcEJBOzs7Ozs7Ozs7RUErQkEsSUFBQyxDQUFBLGVBQUQsR0FHRSxDQUFBOztJQUFBLGNBQUEsRUFBZ0IsUUFBQSxDQUFBLENBQUE7QUFDbEIsVUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO01BQUksU0FBQSxHQUFZLE9BQUEsQ0FBUSx5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N0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLEdBQUosQ0FBQSxJQUFBO01BQUosQ0FBZCxDQUFKLEVBQTZFLFNBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFKLENBQUEsS0FBQTtNQUFKLENBQWQsQ0FBSixFQUE2RSxTQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUksR0FBSixDQUFBLEtBQUE7TUFBSixDQUFkLENBQUosRUFBNkUsU0FBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQUosQ0FBQSxPQUFBO01BQUosQ0FBZCxDQUFKLEVBQTZFLFVBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFKLENBQUEsT0FBQTtNQUFKLENBQWQsQ0FBSixFQUE2RSxtQkFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLEdBQUosQ0FBQSxPQUFBO01BQUosQ0FBZCxDQUFKLEVBQTZFLG1CQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUksR0FBSixDQUFBLE9BQUE7TUFBSixDQUFkLENBQUosRUFBNkUsbUJBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFKLENBQUEsT0FBQTtNQUFKLENBQWQsQ0FBSixFQUE2RSxtQkFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLEdBQUosQ0FBQSxNQUFBO01BQUosQ0FBZCxDQUFKLEVBQTZFLFdBQTdFLEVBaEJKOztBQWtCSSxhQUFPO0lBbkJZLENBMUJyQjs7SUFnREEsaUJBQUEsRUFBbUIsUUFBQSxDQUFBLENBQUE7QUFDckIsVUFBQSxlQUFBLEVBQUEsMEJBQUEsRUFBQSxzQkFBQSxFQUFBLENBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsQ0FBRixFQUNFLGVBREYsRUFFRSxzQkFGRixFQUdFLDBCQUhGLENBQUEsR0FHaUMsT0FBQSxDQUFRLHlCQUFSLENBSGpDLEVBQUo7O01BS0ksSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFKLENBQUEsTUFBQTtNQUFKLENBQWQsQ0FBUixFQUFtRCwwQkFBbkQ7TUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLEdBQUosQ0FBQSxFQUFBO01BQUosQ0FBZCxDQUFSLEVBQW1ELDBCQUFuRDtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUksR0FBSixDQUFBLEdBQUE7TUFBSixDQUFkLENBQVIsRUFBbUQsMEJBQW5EO01BQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFKLENBQUEsU0FBQTtNQUFKLENBQWQsQ0FBUixFQUFtRCwwQkFBbkQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsWUFBQTtBQUFDO2lCQUFJLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFKLENBQUEsR0FBQSxFQUFMO1NBQXlCLGFBQUE7VUFBTTtpQkFBTyxDQUFBLFlBQWEsZ0JBQTFCOztNQUE1QixDQUFkLENBQUosRUFBNkYsSUFBN0Y7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsWUFBQTtBQUFDO2lCQUFJLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFKLENBQUEsR0FBQSxFQUFMO1NBQXlCLGFBQUE7VUFBTTtpQkFBTyxDQUFBLFlBQWEsdUJBQTFCOztNQUE1QixDQUFkLENBQUosRUFBb0csSUFBcEc7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsWUFBQTtBQUFDO2lCQUFJLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFKLENBQUEsR0FBQSxFQUFMO1NBQXlCLGFBQUE7VUFBTTtpQkFBTyxDQUFBLFlBQWEsMkJBQTFCOztNQUE1QixDQUFkLENBQUosRUFBd0csS0FBeEc7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsWUFBQTtBQUFDO2lCQUFJLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFKLENBQUEsU0FBQSxFQUFMO1NBQXlCLGFBQUE7VUFBTTtpQkFBTyxDQUFBLFlBQWEsZ0JBQTFCOztNQUE1QixDQUFkLENBQUosRUFBNkYsSUFBN0Y7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsWUFBQTtBQUFDO2lCQUFJLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFKLENBQUEsU0FBQSxFQUFMO1NBQXlCLGFBQUE7VUFBTTtpQkFBTyxDQUFBLFlBQWEsdUJBQTFCOztNQUE1QixDQUFkLENBQUosRUFBb0csSUFBcEc7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsWUFBQTtBQUFDO2lCQUFJLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFKLENBQUEsU0FBQSxFQUFMO1NBQXlCLGFBQUE7VUFBTTtpQkFBTyxDQUFBLFlBQWEsMkJBQTFCOztNQUE1QixDQUFkLENBQUosRUFBd0csSUFBeEc7TUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLEdBQUosQ0FBQSxRQUFBO01BQUosQ0FBZCxDQUFSLEVBQWtELDBCQUFsRDtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUksR0FBSixDQUFBLFNBQUE7TUFBSixDQUFkLENBQVIsRUFBa0QsMEJBQWxEO01BQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFKLENBQUEsV0FBQTtNQUFKLENBQWQsQ0FBUixFQUFrRCwwQkFBbEQ7TUFDQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLEdBQUosQ0FBQSxTQUFBO01BQUosQ0FBZCxDQUFSLEVBQWtELDBCQUFsRCxFQWxCSjs7QUFvQkksYUFBTztJQXJCVSxDQWhEbkI7O0lBd0VBLG9CQUFBLEVBQXNCLFFBQUEsQ0FBQSxDQUFBO0FBQ3hCLFVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQVMsT0FBQSxDQUFRLHlCQUFSLENBQVQsRUFBSjs7TUFFSSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQUosQ0FBQSxRQUFBO01BQUosQ0FBZCxDQUFKLEVBQTZFLFVBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFKLENBQUEsU0FBQTtNQUFKLENBQWQsQ0FBSixFQUE2RSxtQkFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQUosQ0FBQSxTQUFBO01BQUosQ0FBZCxDQUFKLEVBQTZFLG1CQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUksUUFBSixDQUFBLFNBQUE7TUFBSixDQUFkLENBQUosRUFBNkUsbUJBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxRQUFKLENBQUEsU0FBQTtNQUFKLENBQWQsQ0FBSixFQUE2RSxtQkFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLFFBQUosQ0FBQSxVQUFBO01BQUosQ0FBZCxDQUFKLEVBQTZFLG1CQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUksUUFBSixDQUFBLFVBQUE7TUFBSixDQUFkLENBQUosRUFBNkUsbUJBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxRQUFKLENBQUEsV0FBQTtNQUFKLENBQWQsQ0FBSixFQUE2RSxtQkFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLFFBQUosQ0FBQSxXQUFBO01BQUosQ0FBZCxDQUFKLEVBQTZFLG1CQUE3RSxFQVZKOztNQVlJLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUksQ0FBQyxRQUFMLENBQUEsV0FBQTtNQUFKLENBQWQsQ0FBSixFQUE2RSxtQkFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUMsUUFBTCxDQUFBLFlBQUE7TUFBSixDQUFkLENBQUosRUFBNkUsbUJBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxDQUFDLFFBQUwsQ0FBQSxZQUFBO01BQUosQ0FBZCxDQUFKLEVBQTZFLG1CQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUksQ0FBQyxRQUFMLENBQUEsWUFBQTtNQUFKLENBQWQsQ0FBSixFQUE2RSxtQkFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUMsUUFBTCxDQUFBLFlBQUE7TUFBSixDQUFkLENBQUosRUFBNkUsbUJBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxDQUFDLFFBQUwsQ0FBQSxZQUFBO01BQUosQ0FBZCxDQUFKLEVBQTZFLG1CQUE3RTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUksQ0FBQyxRQUFMLENBQUEsWUFBQTtNQUFKLENBQWQsQ0FBSixFQUE2RSxtQkFBN0U7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUMsUUFBTCxDQUFBLGFBQUE7TUFBSixDQUFkLENBQUosRUFBNkUscUJBQTdFO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFH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LEVBQVMsSUFBWDtVQUFpQixJQUFBLEVBQU07UUFBdkIsQ0FBeEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTsyRUFBd0MsQ0FBRTtRQUE1QyxDQUFkLENBQUosRUFBd0U7VUFBRSxPQUFBLEVBQVMsSUFBWDtVQUFpQixJQUFBLEVBQU07UUFBdkIsQ0FBeEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTsyRUFBd0MsQ0FBRTtRQUE1QyxDQUFkLENBQUosRUFBd0U7VUFBRSxPQUFBLEVBQVMsSUFBWDtVQUFpQixJQUFBLEVBQU07UUFBdkIsQ0FBeEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTsyRUFBd0MsQ0FBRTtRQUE1QyxDQUFkLENBQUosRUFBd0U7VUFBRSxPQUFBLEVBQVMsSUFBWDtVQUFpQixJQUFBLEVBQU07UUFBdkIsQ0FBeEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTsyRUFBd0MsQ0FBRTtRQUE1QyxDQUFkLENBQUosRUFBd0U7VUFBRSxPQUFBLEVBQVMsSUFBWDtVQUFpQixJQUFBLEVBQU07UUFBdkIsQ0FBeEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTsyRUFBd0MsQ0FBRTtRQUE1QyxDQUFkLENBQUosRUFBd0U7VUFBRSxPQUFBLEVBQVMsSUFBWDtVQUFpQixJQUFBLEVBQU07UUFBdkIsQ0FBeEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTsyRUFBd0MsQ0FBRTtRQUE1QyxDQUFkLENBQUosRUFBd0U7VUFBRSxPQUFBLEVBQVMsSUFBWDtVQUFpQixJQUFBLEVBQU07UUFBdkIsQ0FBeEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTsyRUFBd0MsQ0FBRTtRQUE1QyxDQUFkLENBQUosRUFBd0U7VUFBRSxPQUFBLEVBQVMsSUFBWDtVQUFpQixJQUFBLEVBQU07UUFBdkIsQ0FBeEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTsyRUFBd0MsQ0FBRTtRQUE1QyxDQUFkLENBQUosRUFBd0U7VUFBRSxPQUFBLEVBQVMsSUFBWDtVQUFpQixJQUFBLEVBQU07UUFBdkIsQ0FBeEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTsyRUFBd0MsQ0FBRTtRQUE1QyxDQUFkLENBQUosRUFBd0U7VUFBRSxPQUFBLEVBQVMsSUFBWDtVQUFpQixJQUFBLEVBQU07UUFBdkIsQ0FBeEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTsyRUFBd0MsQ0FBRTtRQUE1QyxDQUFkLENBQUosRUFBd0U7VUFBRSxPQUFBLEVBQVMsSUFBWDtVQUFpQixJQUFBLEVBQU07UUFBdkIsQ0FBeEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTsyRUFBd0MsQ0FBRTtRQUE1QyxDQUFkLENBQUosRUFBd0U7VUFBRSxPQUFBLEVBQVMsSUFBWDtVQUFpQixJQUFBLEVBQU07UUFBdkIsQ0FBeEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTsyRUFBd0MsQ0FBRTtRQUE1QyxDQUFkLENBQUosRUFBd0U7VUFBRSxPQUFBLEVBQVMsSUFBWDtVQUFpQixJQUFBLEVBQU07UUFBdkIsQ0FBeEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTsyRUFBd0MsQ0FBRTtRQUE1QyxDQUFkLENBQUosRUFBd0U7VUFBRSxPQUFBLEVBQVMsSUFBWDtVQUFpQixJQUFBLEVBQU07UUFBdkIsQ0FBeEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTsyRUFBd0MsQ0FBRTtRQUE1QyxDQUFkLENBQUosRUFBd0U7VUFBRSxPQUFBLEVBQVMsSUFBWDtVQUFpQixJQUFBLEVBQU07UUFBdkIsQ0FBeEU7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQUUsY0FBQTsyRUFBd0MsQ0FBRTtRQUE1QyxDQUFkLENBQUosRUFBd0UsTUFBeEU7QUFDQSxlQUFPO01BbkJOLENBQUEsSUFGUDs7QUF1QkksYUFBTztJQXhCNEIsQ0E5UHJDOztJQXlSQSx5QkFBQSxFQUEyQixRQUFBLENBQUEsQ0FBQTtBQUM3QixVQUFBLFVBQUEsRUFBQSxlQUFBLEVBQUEsbUJBQUEsRUFBQSxzQkFBQSxFQUFBLHNCQUFBLEVBQUEsQ0FBQSxFQUFBLFFBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxDQUFGLEVBQ0UsUUFERixFQUVFLGVBRkYsRUFHRSxVQUhGLEVBSUUsc0JBSkYsRUFLRSxzQkFMRixFQU1FLG1CQU5GLENBQUEsR0FNdUMsT0FBQSxDQUFRLHlCQUFSLENBTnZDLEVBQUo7O01BUUksbUJBQUEsR0FBc0IsQ0FDcEIsQ0FBRSxVQUFGLEVBQWMsa0JBQWQsQ0FEb0IsRUFFcEIsQ0FBRSxTQUFGLEVBQWMsa0JBQWQsQ0FGb0IsRUFHcEIsQ0FBRSxRQUFGLEVBQWMsa0JBQWQsQ0FIb0IsRUFJcEIsQ0FBRSxPQUFGLEVBQWMsa0JBQWQsQ0FKb0IsRUFLcEIsQ0FBRSxNQUFGLEVBQWMsa0JBQWQsQ0FMb0IsRUFNcEIsQ0FBRSxLQUFGLEVBQWMsa0JBQWQsQ0FOb0IsRUFPcEIsQ0FBRSxJQUFGLEVBQWMsa0JBQWQsQ0FQb0I7TUFVbkIsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxFQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBO1FBQU0sRUFBQSxHQUFLLFVBQVUsQ0FBQyxZQUFYLENBQXdCLFVBQXhCLEVBQW9DLElBQXBDO1FBQ0wsS0FBQSxxREFBQTtVQUFJLENBQUUsS0FBRixFQUFTLE9BQVQ7VUFDRixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHLEVBQUEsQ0FBRyxLQUFIO1VBQUgsQ0FBZCxDQUFKLEVBQWlDLE9BQWpDO1FBREY7QUFFQSxlQUFPO01BSk4sQ0FBQTtNQU1BLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBO1FBQU0sS0FBQSxxREFBQTtVQUFJLENBQUUsS0FBRixFQUFTLE9BQVQ7VUFDRixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHLENBQUMsQ0FBQSxDQUFBLENBQUcsS0FBSCxDQUFBLFlBQUE7VUFBSixDQUFkLENBQUosRUFBZ0QsT0FBaEQ7UUFERjtBQUVBLGVBQU87TUFITixDQUFBLElBeEJQOztBQTZCSSxhQUFPO0lBOUJrQixDQXpSM0I7O0lBMFRBLDhDQUFBLEVBQWdELFFBQUEsQ0FBQSxDQUFBO0FBQ2xELFVBQUEsVUFBQSxFQUFBLGVBQUEsRUFBQSxtQkFBQSxFQUFBLHNCQUFBLEVBQUEsc0JBQUEsRUFBQSxDQUFBLEVBQUEsUUFBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxDQUFGLEVBQ0UsUUFERixFQUVFLGVBRkYsRUFHRSxVQUhGLEVBSUUsc0JBSkYsRUFLRSxzQkFMRixFQU1FLG1CQU5GLENBQUEsR0FNdUMsT0FBQSxDQUFRLHlCQUFSLENBTnZDLEVBQUo7O01BUUksSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxJQUFBLENBQUEsQ0FBTyxTQUFQLENBQUEsYUFBQTtNQUFKLENBQWQsQ0FBSixFQUF5RCwwREFBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLElBQUEsQ0FBQSxDQUFPLFNBQVAsQ0FBQSxhQUFBO01BQUosQ0FBZCxDQUFKLEVBQXlELDBEQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsSUFBQSxDQUFBLENBQU8sU0FBUCxDQUFBLGFBQUE7TUFBSixDQUFkLENBQUosRUFBeUQsMERBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxJQUFBLENBQUEsQ0FBTyxTQUFQLENBQUEsYUFBQTtNQUFKLENBQWQsQ0FBSixFQUF5RCwwREFBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLElBQUEsQ0FBQSxDQUFPLFNBQVAsQ0FBQSxhQUFBO01BQUosQ0FBZCxDQUFKLEVBQXlELDBEQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsSUFBQSxDQUFBLENBQU8sU0FBUCxDQUFBLGFBQUE7TUFBSixDQUFkLENBQUosRUFBeUQsMERBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxJQUFBLENBQUEsQ0FBTyxTQUFQLENBQUEsYUFBQTtNQUFKLENBQWQsQ0FBSixFQUF5RCwwREFBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLElBQUEsQ0FBQSxDQUFPLFNBQVAsQ0FBQSxhQUFBO01BQUosQ0FBZCxDQUFKLEVBQXlELDBEQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsSUFBQSxDQUFBLENBQU8sU0FBUCxDQUFBLGFBQUE7TUFBSixDQUFkLENBQUosRUFBeUQseURBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxJQUFBLENBQUEsQ0FBTyxTQUFQLENBQUEsYUFBQTtNQUFKLENBQWQsQ0FBSixFQUF5RCwwREFBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLElBQUEsQ0FBQSxDQUFPLFNBQVAsQ0FBQSxhQUFBO01BQUosQ0FBZCxDQUFKLEVBQXlELDBEQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsSUFBQSxDQUFBLENBQU8sU0FBUCxDQUFBLGFBQUE7TUFBSixDQUFkLENBQUosRUFBeUQsMERBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxJQUFBLENBQUEsQ0FBTyxTQUFQLENBQUEsYUFBQTtNQUFKLENBQWQsQ0FBSixFQUF5RCwwREFBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLElBQUEsQ0FBQSxDQUFPLFNBQVAsQ0FBQSxhQUFBO01BQUosQ0FBZCxDQUFKLEVBQXlELDBEQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsSUFBQSxDQUFBLENBQU8sU0FBUCxDQUFBLGFBQUE7TUFBSixDQUFkLENBQUosRUFBeUQsMERBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxJQUFBLENBQUEsQ0FBTyxTQUFQLENBQUEsYUFBQTtNQUFKLENBQWQsQ0FBSixFQUF5RCwwREFBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLElBQUEsQ0FBQSxDQUFPLFNBQVAsQ0FBQSxhQUFBO01BQUosQ0FBZCxDQUFKLEVBQXlELDBEQUF6RCxFQXhCSjs7QUEwQkksYUFBTztJQTNCdUMsQ0ExVGhEOztJQXdWQSx3Q0FBQSxFQUEwQyxRQUFBLENBQUEsQ0FBQTtBQUM1QyxVQUFBLFVBQUEsRUFBQSxlQUFBLEVBQUEsbUJBQUEsRUFBQSxzQkFBQSxFQUFBLHNCQUFBLEVBQUEsQ0FBQSxFQUFBLFFBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsQ0FBRixFQUNFLFFBREYsRUFFRSxlQUZGLEVBR0UsVUFIRixFQUlFLHNCQUpGLEVBS0Usc0JBTEYsRUFNRSxtQkFORixDQUFBLEdBTXVDLE9BQUEsQ0FBUSx5QkFBUixDQU52QyxFQUFKOztNQVFJLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsSUFBQSxDQUFBLENBQU8sU0FBUCxDQUFBLGFBQUE7TUFBSixDQUFkLENBQUosRUFBeUQsMERBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxJQUFBLENBQUEsQ0FBTyxTQUFQLENBQUEsYUFBQTtNQUFKLENBQWQsQ0FBSixFQUF5RCwwREFBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLElBQUEsQ0FBQSxDQUFPLFNBQVAsQ0FBQSxhQUFBO01BQUosQ0FBZCxDQUFKLEVBQXlELDBEQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsSUFBQSxDQUFBLENBQU8sU0FBUCxDQUFBLGFBQUE7TUFBSixDQUFkLENBQUosRUFBeUQsMERBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxJQUFBLENBQUEsQ0FBTyxTQUFQLENBQUEsYUFBQTtNQUFKLENBQWQsQ0FBSixFQUF5RCwwREFBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLElBQUEsQ0FBQSxDQUFPLFNBQVAsQ0FBQSxhQUFBO01BQUosQ0FBZCxDQUFKLEVBQXlELDBEQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsSUFBQSxDQUFBLENBQU8sU0FBUCxDQUFBLGFBQUE7TUFBSixDQUFkLENBQUosRUFBeUQsMERBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxJQUFBLENBQUEsQ0FBTyxTQUFQLENBQUEsYUFBQTtNQUFKLENBQWQsQ0FBSixFQUF5RCwwREFBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLElBQUEsQ0FBQSxDQUFPLFNBQVAsQ0FBQSxhQUFBO01BQUosQ0FBZCxDQUFKLEVBQXlELHlEQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsSUFBQSxDQUFBLENBQU8sU0FBUCxDQUFBLGFBQUE7TUFBSixDQUFkLENBQUosRUFBeUQsMERBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxJQUFBLENBQUEsQ0FBTyxTQUFQLENBQUEsYUFBQTtNQUFKLENBQWQsQ0FBSixFQUF5RCwwREFBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLElBQUEsQ0FBQSxDQUFPLFNBQVAsQ0FBQSxhQUFBO01BQUosQ0FBZCxDQUFKLEVBQXlELDBEQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsSUFBQSxDQUFBLENBQU8sU0FBUCxDQUFBLGFBQUE7TUFBSixDQUFkLENBQUosRUFBeUQsMERBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxJQUFBLENBQUEsQ0FBTyxTQUFQLENBQUEsYUFBQTtNQUFKLENBQWQsQ0FBSixFQUF5RCwwREFBekQ7TUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2VBQUcsQ0FBQyxDQUFBLElBQUEsQ0FBQSxDQUFPLFNBQVAsQ0FBQSxhQUFBO01BQUosQ0FBZCxDQUFKLEVBQXlELDBEQUF6RDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUEsSUFBQSxDQUFBLENBQU8sU0FBUCxDQUFBLGFBQUE7TUFBSixDQUFkLENBQUosRUFBeUQsMERBQXpEO01BQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQSxJQUFBLENBQUEsQ0FBTyxTQUFQLENBQUEsYUFBQTtNQUFKLENBQWQsQ0FBSixFQUF5RCwwREFBekQsRUF4Qko7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0ksYUFBTztJQTVDaUMsQ0F4VjFDOztJQXVZQSw4QkFBQSxFQUFnQyxRQUFBLENBQUEsQ0FBQTtBQUNsQyxVQUFBLFVBQUEsRUFBQSxlQUFBLEVBQUEsbUJBQUEsRUFBQSxzQkFBQSxFQUFBLHNCQUFBLEVBQUEsQ0FBQSxFQUFBLFFBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxDQUFGLEVBQ0UsUUFERixFQUVFLGVBRkYsRUFHRSxVQUhGLEVBSUUsc0JBSkYsRUFLRSxzQkFMRixFQU1FLG1CQU5GLENBQUEsR0FNdUMsT0FBQSxDQUFRLHlCQUFSLENBTnZDLEVBQUo7O01BUUksbUJBQUEsR0FBc0IsQ0FDcEIsQ0FBRSxVQUFGLEVBQWMsaUJBQWQsQ0FEb0IsRUFFcEIsQ0FBRSxTQUFGLEVBQWMsaUJBQWQsQ0FGb0IsRUFHcEIsQ0FBRSxRQUFGLEVBQWMsaUJBQWQsQ0FIb0IsRUFJcEIsQ0FBRSxPQUFGLEVBQWMsaUJBQWQsQ0FKb0IsRUFLcEIsQ0FBRSxNQUFGLEVBQWMsaUJBQWQsQ0FMb0IsRUFNcEIsQ0FBRSxLQUFGLEVBQWMsaUJBQWQsQ0FOb0IsRUFPcEIsQ0FBRSxJQUFGLEVBQWMsaUJBQWQsQ0FQb0IsRUFRcEIsQ0FBRSxHQUFGLEVBQWMsaUJBQWQsQ0FSb0IsRUFTcEIsQ0FBRSxFQUFGLEVBQWMsaUJBQWQsQ0FUb0I7TUFZbkIsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBQ1AsWUFBQSxFQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBO1FBQU0sRUFBQSxHQUFLLFVBQVUsQ0FBQyxZQUFYLENBQXdCLFVBQXhCLEVBQW9DLENBQXBDO1FBQ0wsS0FBQSxxREFBQTtVQUFJLENBQUUsS0FBRixFQUFTLE9BQVQ7VUFDRixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHLEVBQUEsQ0FBRyxLQUFIO1VBQUgsQ0FBZCxDQUFKLEVBQWlDLE9BQWpDO1FBREY7QUFFQSxlQUFPO01BSk4sQ0FBQTtNQU1BLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNQLFlBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBO1FBQU0sS0FBQSxxREFBQTtVQUFJLENBQUUsS0FBRixFQUFTLE9BQVQ7VUFDRixJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFHLENBQUMsQ0FBQSxDQUFBLENBQUcsS0FBSCxDQUFBLFlBQUE7VUFBSixDQUFkLENBQUosRUFBZ0QsT0FBaEQ7UUFERjtBQUVBLGVBQU87TUFITixDQUFBLElBMUJQOztBQStCSSxhQUFPO0lBaEN1QixDQXZZaEM7O0lBMGFBLHVCQUFBLEVBR0UsQ0FBQTs7TUFBQSxrQ0FBQSxFQUFvQyxRQUFBLENBQUEsQ0FBQTtBQUN4QyxZQUFBLFVBQUEsRUFBQSxlQUFBLEVBQUEsbUJBQUEsRUFBQSxzQkFBQSxFQUFBLHNCQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxRQUFBLEVBQUEsR0FBQSxFQUFBLFlBQUEsRUFBQSxVQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7UUFBTSxDQUFBLENBQUUsQ0FBRixFQUNFLFFBREYsRUFFRSxlQUZGLEVBR0UsVUFIRixFQUlFLHNCQUpGLEVBS0Usc0JBTEYsRUFNRSxtQkFORixDQUFBLEdBTXNDLE9BQUEsQ0FBUSx5QkFBUixDQU50QztRQU9BLENBQUEsQ0FBRSxRQUFGLEVBQ0UsUUFERixDQUFBLEdBQ3NDLE9BQUEsQ0FBUSx3QkFBUixDQUR0QztRQUVBLENBQUE7VUFBRSxPQUFBLEVBQVM7UUFBWCxDQUFBLEdBQXNDLE9BQUEsQ0FBUSxZQUFSLENBQXRDO1FBQ0EsQ0FBQTtVQUFFLE9BQUEsRUFBUztRQUFYLENBQUEsR0FBc0MsT0FBQSxDQUFRLG1EQUFSLENBQXRDO1FBQ0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixDQUFBLEdBRXNDLEdBQUcsQ0FBQyxHQUYxQztRQUlHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7Ozs7Ozs7O0FBQ1QsY0FBQSxDQUFBLEVBQUEsYUFBQSxFQUFBLFlBQUEsRUFBQSxRQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSx3QkFBQSxFQUFBLG9CQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUE7VUFBUSxhQUFBLEdBQWdCLE9BQUEsQ0FBUSxtQ0FBUjtVQUNoQixDQUFBO1lBQUUsdUJBQUEsRUFBeUI7VUFBM0IsQ0FBQSxHQUFrQyxhQUFhLENBQUMsK0JBQWQsQ0FBQSxDQUFsQztVQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7bUJBQVcsUUFBQSxDQUFTLENBQUMsQ0FBQyxHQUFGLEdBQVEsS0FBUixHQUFnQixDQUFDLENBQUMsT0FBM0I7VUFBWCxDQUFkLENBQUosRUFBNkUsQ0FBN0U7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFPLFlBQUEsQ0FBYSxDQUFDLENBQUMsR0FBRixHQUFRLEtBQVIsR0FBZ0IsQ0FBQyxDQUFDLE9BQS9CO1VBQVAsQ0FBZCxDQUFKLEVBQTZFLENBQTdFO1VBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTttQkFBVyxRQUFBLENBQVMsQ0FBQyxDQUFDLEdBQUYsR0FBUSxDQUFDLENBQUMsTUFBVixHQUFtQixDQUFDLENBQUMsSUFBckIsR0FBNEIsS0FBNUIsR0FBb0MsQ0FBQyxDQUFDLEtBQXRDLEdBQThDLENBQUMsQ0FBQyxPQUFoRCxHQUEwRCxDQUFDLENBQUMsT0FBckU7VUFBWCxDQUFkLENBQUosRUFBdUgsQ0FBdkg7VUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO21CQUFPLFlBQUEsQ0FBYSxDQUFDLENBQUMsR0FBRixHQUFRLENBQUMsQ0FBQyxNQUFWLEdBQW1CLENBQUMsQ0FBQyxJQUFyQixHQUE0QixLQUE1QixHQUFvQyxDQUFDLENBQUMsS0FBdEMsR0FBOEMsQ0FBQyxDQUFDLE9BQWhELEdBQTBELENBQUMsQ0FBQyxPQUF6RTtVQUFQLENBQWQsQ0FBSixFQUF1SCxDQUF2SDtVQVVBLFlBQUEsR0FBZ0I7VUFDaEIsU0FBQSxHQUFnQixJQUFJLElBQUksQ0FBQyxTQUFULENBQUE7VUFDaEIsd0JBQUEsR0FBMkIsUUFBQSxDQUFFLElBQUYsQ0FBQTtBQUFXLGdCQUFBLENBQUEsRUFBQTtBQUFHO1lBQUEsS0FBQSw0QkFBQTsyQkFBQSxDQUFDLENBQUM7WUFBRixDQUFBOztVQUFkO1VBQzNCLEtBQUEsQ0FBTSxXQUFOLEVBQXdCLFFBQUEsQ0FBZ0IsQ0FBQyxDQUFBLENBQUEsQ0FBSSxHQUFBLENBQUksT0FBQSxDQUFRLElBQUEsQ0FBSyxFQUFMLENBQVIsQ0FBSixDQUFKLENBQUEsQ0FBakIsQ0FBeEI7VUFDQSxLQUFBLENBQU0sV0FBTixFQUF3QixZQUFBLENBQWdCLENBQUMsQ0FBQSxDQUFBLENBQUksR0FBQSxDQUFJLE9BQUEsQ0FBUSxJQUFBLENBQUssRUFBTCxDQUFSLENBQUosQ0FBSixDQUFBLENBQWpCLENBQXhCO1VBQ0EsS0FBQSxDQUFNLFdBQU4sRUFBd0MsQ0FBQyxDQUFBLE9BQUEsQ0FBekM7VUFDQSxLQUFBLENBQU0sV0FBTixFQUF3QyxDQUFDLENBQUEsU0FBQSxDQUF6QztVQUNBLEtBQUEsQ0FBTSxXQUFOLEVBQXdDLENBQUMsQ0FBQSxVQUFBLENBQXpDO1VBQ0EsS0FBQSxDQUFNLFdBQU4sRUFBd0MsQ0FBQyxDQUFBLGdCQUFBLENBQXpDO1VBQ0Esb0JBQUEsR0FBdUIsQ0FBQSxHQUFBLENBQUEsQ0FBTyxDQUFDLENBQUMsS0FBRixHQUFVLENBQUMsQ0FBQyxNQUFaLEdBQXFCLENBQUMsQ0FBQyxJQUF2QixHQUE4QixLQUE5QixHQUFzQyxDQUFDLENBQUMsS0FBeEMsR0FBZ0QsQ0FBQyxDQUFDLE9BQWxELEdBQTRELENBQUMsQ0FBQyxVQUFyRSxDQUFBLEdBQUE7VUFDdkIsS0FBQSxDQUFNLFdBQU4sRUFBc0Msb0JBQXRDLEVBekJSOztVQTJCUSxLQUFBLENBQU0sV0FBTixFQUFtQixHQUFBLENBQW1CLG9CQUFuQixDQUFuQjtVQUNBLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLFFBQUEsQ0FBbUIsb0JBQW5CLENBQW5CO1VBQ0EsS0FBQSxDQUFNLFdBQU4sRUFBbUIsWUFBQSxDQUFtQixvQkFBbkIsQ0FBbkI7VUFDQSxLQUFBLENBQU0sV0FBTixFQUFtQixHQUFBLENBQUksVUFBQSxDQUFlLG9CQUFmLENBQUosQ0FBbkI7VUFDQSxLQUFBLGdEQUFBO1lBQUEsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBbEI7VUFBQTtVQUNBLEtBQUEsQ0FBTSxXQUFOLEVBQXNDLG9CQUFvQixDQUFDLE9BQXJCLENBQThCLFlBQTlCLEVBQTRDLEdBQTVDLENBQXRDO1VBQ0EsUUFBQSxHQUFXLFFBQUEsQ0FBRSxJQUFGLENBQUE7QUFDbkIsZ0JBQUEsS0FBQSxFQUFBLGNBQUEsRUFBQSxXQUFBLEVBQUEsTUFBQSxFQUFBLFFBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQTtZQUFVLE1BQUEsR0FBa0I7WUFDbEIsS0FBQSxHQUFrQjtZQUNsQixRQUFBLEdBQWtCO1lBQ2xCLGNBQUEsR0FBa0IsS0FINUI7O1lBS1UsSUFBRyxJQUFBLEtBQVEsRUFBWDtBQUNFLHFCQUFPO2dCQUFFLFFBQUY7Z0JBQVksS0FBWjtnQkFBbUIsTUFBQSxFQUFRO2tCQUFFO29CQUFFLFFBQUY7b0JBQVksS0FBWjtvQkFBbUIsS0FBQSxFQUFPO2tCQUExQixDQUFGOztjQUEzQixFQURUOztBQUVBO1lBQUEsS0FBQSxxQ0FBQTs7Y0FDRSxjQUFBLEdBQW9CLENBQUk7Y0FDeEIsYUFBQSxXQUFvQjtjQUNwQixJQUFZLEtBQUEsS0FBUyxFQUFyQjtBQUFBLHlCQUFBOztjQUNBLFdBQUEsR0FBdUIsUUFBSCxHQUFpQixDQUFqQixHQUF3QixZQUFBLENBQWEsS0FBYjtjQUM1QyxLQUFBLElBQW9CO2NBQ3BCLE1BQU0sQ0FBQyxJQUFQLENBQVk7Z0JBQUUsUUFBQSxFQUFVLGNBQVo7Z0JBQTRCLEtBQUEsRUFBTyxXQUFuQztnQkFBZ0Q7Y0FBaEQsQ0FBWjtZQU5GO0FBT0EsbUJBQU8sQ0FBRSxRQUFGLEVBQVksS0FBWixFQUFtQixNQUFuQjtVQWZFO1VBaUJSLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNYLGdCQUFBLE9BQUEsRUFBQTtZQUFVLElBQUEsQ0FBSywrQ0FBTDtZQUNBLElBQUEsR0FBTztZQUNQLElBQUEsQ0FBSyxXQUFMLEVBQWlDLFFBQUEsQ0FBUyxJQUFULENBQWpDO0FBQ0E7WUFBQSxLQUFBLDRCQUFBOzJCQUFBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQWxCO1lBQUEsQ0FBQTs7VUFKQyxDQUFBO1VBS0EsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNYLGdCQUFBLE9BQUEsRUFBQTtZQUFVLElBQUEsQ0FBSywrQ0FBTDtZQUNBLElBQUEsR0FBTztZQUNQLElBQUEsQ0FBSyxXQUFMLEVBQWlDLFFBQUEsQ0FBUyxJQUFULENBQWpDO0FBQ0E7WUFBQSxLQUFBLDRCQUFBOzJCQUFBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQWxCO1lBQUEsQ0FBQTs7VUFKQyxDQUFBO1VBS0EsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNYLGdCQUFBLE9BQUEsRUFBQTtZQUFVLElBQUEsQ0FBSywrQ0FBTDtZQUNBLElBQUEsR0FBTyxDQUFBLENBQUEsQ0FBSSxDQUFDLENBQUMsS0FBRixHQUFVLENBQUMsQ0FBQyxNQUFaLEdBQXFCLENBQUMsQ0FBQyxJQUF2QixHQUE4QixDQUFDLENBQUMsS0FBaEMsR0FBd0MsQ0FBQyxDQUFDLE9BQTFDLEdBQW9ELENBQUMsQ0FBQyxVQUExRCxDQUFBO1lBQ1AsSUFBQSxDQUFLLFdBQUwsRUFBaUMsUUFBQSxDQUFTLElBQVQsQ0FBakM7QUFDQTtZQUFBLEtBQUEsNEJBQUE7MkJBQUEsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBbEI7WUFBQSxDQUFBOztVQUpDLENBQUE7VUFLQSxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ1gsZ0JBQUEsT0FBQSxFQUFBO1lBQVUsSUFBQSxDQUFLLCtDQUFMO1lBQ0EsSUFBQSxHQUFPO1lBQ1AsSUFBQSxDQUFLLFdBQUwsRUFBaUMsUUFBQSxDQUFTLElBQVQsQ0FBakM7QUFDQTtZQUFBLEtBQUEsNEJBQUE7MkJBQUEsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBbEI7WUFBQSxDQUFBOztVQUpDLENBQUE7aUJBS0gsT0FBTyxDQUFDLElBQVIsQ0FBYSxHQUFiO1FBdkVDLENBQUEsSUFmVDs7UUF3Rk0sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBVyxRQUFBLENBQTBCLEtBQTFCO1FBQVgsQ0FBZCxDQUFKLEVBQTJFLENBQTNFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBVyxRQUFBLENBQVMsR0FBQSxDQUFpQixLQUFqQixDQUFUO1FBQVgsQ0FBZCxDQUFKLEVBQTJFLENBQTNFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBVyxRQUFBLENBQVMsT0FBQSxDQUFpQixLQUFqQixDQUFUO1FBQVgsQ0FBZCxDQUFKLEVBQTJFLENBQTNFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBVyxRQUFBLENBQVMsSUFBQSxDQUFpQixLQUFqQixDQUFUO1FBQVgsQ0FBZCxDQUFKLEVBQTJFLENBQTNFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBVyxRQUFBLENBQVMsR0FBQSxDQUFJLE9BQUEsQ0FBUSxJQUFBLENBQUssS0FBTCxDQUFSLENBQUosQ0FBVDtRQUFYLENBQWQsQ0FBSixFQUEyRSxDQUEzRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQU8sWUFBQSxDQUE4QixLQUE5QjtRQUFQLENBQWQsQ0FBSixFQUEyRSxDQUEzRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQU8sWUFBQSxDQUFhLEdBQUEsQ0FBaUIsS0FBakIsQ0FBYjtRQUFQLENBQWQsQ0FBSixFQUEyRSxDQUEzRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQU8sWUFBQSxDQUFhLE9BQUEsQ0FBaUIsS0FBakIsQ0FBYjtRQUFQLENBQWQsQ0FBSixFQUEyRSxDQUEzRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQU8sWUFBQSxDQUFhLElBQUEsQ0FBaUIsS0FBakIsQ0FBYjtRQUFQLENBQWQsQ0FBSixFQUEyRSxDQUEzRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQU8sWUFBQSxDQUFhLEdBQUEsQ0FBSSxPQUFBLENBQVEsSUFBQSxDQUFLLEtBQUwsQ0FBUixDQUFKLENBQWI7UUFBUCxDQUFkLENBQUosRUFBMkUsQ0FBM0UsRUFqR047O1FBbUdNLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQWMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFzQixLQUF0QixDQUFBLE9BQUE7UUFBZixDQUFkLENBQUosRUFBMkUsd0JBQTNFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxVQUFBLENBQVcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFLLEdBQUEsQ0FBaUIsS0FBakIsQ0FBTCxDQUFBLE9BQUEsQ0FBWjtRQUFILENBQWQsQ0FBSixFQUEyRSx3QkFBM0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQUEsQ0FBVyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUssT0FBQSxDQUFpQixLQUFqQixDQUFMLENBQUEsT0FBQSxDQUFaO1FBQUgsQ0FBZCxDQUFKLEVBQTJFLHdCQUEzRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBQSxDQUFXLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSyxJQUFBLENBQWlCLEtBQWpCLENBQUwsQ0FBQSxPQUFBLENBQVo7UUFBSCxDQUFkLENBQUosRUFBMkUsd0JBQTNFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxVQUFBLENBQVcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFLLEdBQUEsQ0FBSSxPQUFBLENBQVEsSUFBQSxDQUFLLEtBQUwsQ0FBUixDQUFKLENBQUwsQ0FBQSxPQUFBLENBQVo7UUFBSCxDQUFkLENBQUosRUFBMkUsd0JBQTNFLEVBdkdOOztRQXlHTSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFjLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBc0IsS0FBdEIsQ0FBQSxPQUFBO1FBQWYsQ0FBZCxDQUFKLEVBQTJFLHdCQUEzRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBQSxDQUFXLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSyxHQUFBLENBQWlCLEtBQWpCLENBQUwsQ0FBQSxPQUFBLENBQVo7UUFBSCxDQUFkLENBQUosRUFBMkUsd0JBQTNFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxVQUFBLENBQVcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFLLE9BQUEsQ0FBaUIsS0FBakIsQ0FBTCxDQUFBLE9BQUEsQ0FBWjtRQUFILENBQWQsQ0FBSixFQUEyRSx3QkFBM0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQUEsQ0FBVyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUssSUFBQSxDQUFpQixLQUFqQixDQUFMLENBQUEsT0FBQSxDQUFaO1FBQUgsQ0FBZCxDQUFKLEVBQTJFLHdCQUEzRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBQSxDQUFXLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSyxHQUFBLENBQUksT0FBQSxDQUFRLElBQUEsQ0FBSyxLQUFMLENBQVIsQ0FBSixDQUFMLENBQUEsT0FBQSxDQUFaO1FBQUgsQ0FBZCxDQUFKLEVBQTJFLHdCQUEzRSxFQTdHTjs7UUErR00sSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBYyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQXNCLEtBQXRCLENBQUEsT0FBQTtRQUFmLENBQWQsQ0FBSixFQUEyRSx3QkFBM0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQUEsQ0FBVyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUssR0FBQSxDQUFpQixLQUFqQixDQUFMLENBQUEsT0FBQSxDQUFaO1FBQUgsQ0FBZCxDQUFKLEVBQTJFLHdCQUEzRTtRQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQUcsVUFBQSxDQUFXLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSyxPQUFBLENBQWlCLEtBQWpCLENBQUwsQ0FBQSxPQUFBLENBQVo7UUFBSCxDQUFkLENBQUosRUFBMkUsd0JBQTNFO1FBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtpQkFBRyxVQUFBLENBQVcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFLLElBQUEsQ0FBaUIsS0FBakIsQ0FBTCxDQUFBLE9BQUEsQ0FBWjtRQUFILENBQWQsQ0FBSixFQUEyRSx3QkFBM0U7UUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLENBQUUsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLFVBQUEsQ0FBVyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUssR0FBQSxDQUFJLE9BQUEsQ0FBUSxJQUFBLENBQUssS0FBTCxDQUFSLENBQUosQ0FBTCxDQUFBLE9BQUEsQ0FBWjtRQUFILENBQWQsQ0FBSixFQUEyRSx3QkFBM0UsRUFuSE47O1FBcUhNLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7aUJBQWMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFzQixLQUF0QixDQUFBLE9BQUE7UUFBZixDQUFkLENBQUosRUFBMkUsd0JBQTNFLEVBckhOOzs7Ozs7QUEySE0sZUFBTztNQTVIMkI7SUFBcEM7RUE3YUYsRUFsQ0Y7Ozs7O0VBa2xCQSxJQUFDLENBQUEsc0JBQUQsR0FHRSxDQUFBOztJQUFBLHdCQUFBLEVBQTBCLFFBQUEsQ0FBQSxDQUFBO0FBQzVCLFVBQUEsVUFBQSxFQUFBLGVBQUEsRUFBQSxtQkFBQSxFQUFBLHNCQUFBLEVBQUEsc0JBQUEsRUFBQSxDQUFBLEVBQUEsUUFBQSxFQUFBLFNBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxDQUFGLEVBQ0UsUUFERixFQUVFLGVBRkYsRUFHRSxVQUhGLEVBSUUsc0JBSkYsRUFLRSxzQkFMRixFQU1FLG1CQU5GLENBQUEsR0FNdUMsT0FBQSxDQUFRLHlCQUFSLENBTnZDLEVBQUo7O01BUUksSUFBQyxDQUFBLEVBQUQsQ0FBSSxDQUFFLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtlQUFHLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEdBQUEsQ0FBSSxDQUFDLENBQUEsSUFBQSxDQUFBLENBQU8sTUFBUCxDQUFBLFdBQUEsQ0FBTCxDQUFsQjtNQUFILENBQWQsQ0FBSixFQUEwRSxJQUExRTtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7ZUFBRyxJQUFBLENBQUssV0FBTCxFQUFrQixHQUFBLENBQUksQ0FBQyxDQUFBLElBQUEsQ0FBQSxDQUFPLElBQVAsQ0FBQSxXQUFBLENBQUwsQ0FBbEI7TUFBSCxDQUFkLENBQUosRUFBd0UsSUFBeEUsRUFUSjs7O0FBWUksYUFBTztJQWJpQjtFQUExQixFQXJsQkY7OztFQXFtQkEsSUFBQSxHQUNFO0lBQUEsTUFBQSxFQUFRLFFBQUEsQ0FBQSxDQUFBO0FBQ1YsVUFBQSxVQUFBLEVBQUEsQ0FBQSxFQUFBO01BQUksQ0FBQSxDQUFFLENBQUYsRUFBSyxRQUFMLEVBQWUsVUFBZixDQUFBLEdBQStCLE9BQUEsQ0FBUSx5QkFBUixDQUEvQjtNQUNBLElBQUEsQ0FBQTtNQUNHLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7UUFFRCxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsRUFBQSxDQUFBLENBQUssSUFBTCxDQUFBLFFBQUEsQ0FBbkI7UUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsRUFBQSxDQUFBLENBQUssSUFBTCxDQUFBLFdBQUEsQ0FBbkI7UUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsRUFBQSxDQUFBLENBQUssSUFBTCxDQUFBLFdBQUEsQ0FBbkI7UUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsRUFBQSxDQUFBLENBQUssSUFBTCxDQUFBLFdBQUEsQ0FBbkI7UUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsRUFBQSxDQUFBLENBQUssSUFBTCxDQUFBLFdBQUEsQ0FBbkI7ZUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsRUFBQSxDQUFBLENBQUssS0FBTCxDQUFBLFdBQUEsQ0FBbkI7TUFQQyxDQUFBO01BUUEsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNQLFlBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTtRQUFNLFNBQUEsR0FBZ0I7VUFDZCxRQUFBLEVBQVUsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckMsRUFBMEMsR0FBMUMsRUFBK0MsR0FBL0M7UUFESTtRQUVoQixJQUFBLEdBQU8sUUFBQSxDQUFTLE9BQVQ7UUFDUCxJQUFBLEdBQU8sUUFBQSxDQUFTLE9BQVQsRUFBa0IsU0FBbEI7UUFDUCxPQUFPLENBQUMsR0FBUixDQUFZLElBQUksQ0FBQSxDQUFBLENBQUcsT0FBSCxDQUFBLGNBQUEsQ0FBQSxDQUEyQixRQUEzQixDQUFBLGdCQUFBLENBQUEsQ0FBc0QsSUFBdEQsQ0FBQSw0QkFBQSxDQUFoQjtRQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBSSxDQUFBLENBQUEsQ0FBRyxLQUFILENBQUEsY0FBQSxDQUFBLENBQXlCLFFBQXpCLENBQUEsZ0JBQUEsQ0FBQSxDQUFvRCxRQUFwRCxDQUFBLDRCQUFBLENBQWhCO1FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFJLENBQUEsQ0FBQSxDQUFHLE9BQUgsQ0FBQSxjQUFBLENBQUEsQ0FBMkIsSUFBM0IsQ0FBQSxnQkFBQSxDQUFBLENBQWtELElBQWxELENBQUEsNEJBQUEsQ0FBaEI7UUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQUksQ0FBQSxDQUFBLENBQUcsTUFBSCxDQUFBLGNBQUEsQ0FBQSxDQUEwQixJQUExQixDQUFBLGdCQUFBLENBQUEsQ0FBaUQsUUFBakQsQ0FBQSw0QkFBQSxDQUFoQjtBQUNBLGVBQU87TUFUTixDQUFBO01BVUEsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNQLFlBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTtRQUFNLFNBQUEsR0FBZ0I7VUFDZCxRQUFBLEVBQVUsQ0FBRSxLQUFGLEVBQVMsRUFBVDtRQURJLEVBQXRCOztRQUlNLElBQUEsR0FBTyxRQUFBLENBQVMsT0FBVDtRQUNQLElBQUEsR0FBTyxRQUFBLENBQVMsT0FBVCxFQUFrQixTQUFsQjtRQUNQLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBSSxDQUFBLENBQUEsQ0FBRyxDQUFDLFFBQUosQ0FBQSxXQUFBLENBQWhCO1FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFJLENBQUEsQ0FBQSxDQUFHLENBQUMsUUFBSixDQUFBLFdBQUEsQ0FBaEI7UUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQUksQ0FBQSxDQUFBLENBQUcsQ0FBQyxRQUFKLENBQUEsV0FBQSxDQUFoQjtRQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBSSxDQUFBLENBQUEsQ0FBRyxDQUFDLFFBQUosQ0FBQSxXQUFBLENBQWhCO0FBQ0EsZUFBTztNQVhOLENBQUE7TUFZSCxJQUFBLENBQUE7TUFDRyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ1AsWUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBO1FBQU0sU0FBQSxHQUFnQjtVQUNkLFFBQUEsRUFBVSxDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixFQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxFQUErQyxHQUEvQztRQURJO1FBRWhCLElBQUEsR0FBTyxRQUFBLENBQVMsT0FBVCxFQUE2QjtVQUFFLFNBQUEsRUFBVztRQUFiLENBQTdCO1FBQ1AsSUFBQSxHQUFPLFFBQUEsQ0FBUyxPQUFULEVBQWtCLFNBQWxCLEVBQTZCO1VBQUUsU0FBQSxFQUFXO1FBQWIsQ0FBN0I7UUFDUCxPQUFPLENBQUMsR0FBUixDQUFZLElBQUksQ0FBQSxDQUFBLENBQUcsT0FBSCxDQUFBLGNBQUEsQ0FBQSxDQUEyQixRQUEzQixDQUFBLGdCQUFBLENBQUEsQ0FBc0QsSUFBdEQsQ0FBQSw0QkFBQSxDQUFoQjtRQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBSSxDQUFBLENBQUEsQ0FBRyxLQUFILENBQUEsY0FBQSxDQUFBLENBQXlCLFFBQXpCLENBQUEsZ0JBQUEsQ0FBQSxDQUFvRCxRQUFwRCxDQUFBLDRCQUFBLENBQWhCO1FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFJLENBQUEsQ0FBQSxDQUFHLE9BQUgsQ0FBQSxjQUFBLENBQUEsQ0FBMkIsSUFBM0IsQ0FBQSxnQkFBQSxDQUFBLENBQWtELElBQWxELENBQUEsNEJBQUEsQ0FBaEI7UUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQUksQ0FBQSxDQUFBLENBQUcsTUFBSCxDQUFBLGNBQUEsQ0FBQSxDQUEwQixJQUExQixDQUFBLGdCQUFBLENBQUEsQ0FBaUQsUUFBakQsQ0FBQSw0QkFBQSxDQUFoQjtBQUNBLGVBQU87TUFUTixDQUFBO01BVUEsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNQLFlBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTtRQUFNLFNBQUEsR0FBZ0I7VUFDZCxRQUFBLEVBQVUsQ0FBRSxLQUFGLEVBQVMsRUFBVDtRQURJLEVBQXRCOztRQUlNLElBQUEsR0FBTyxRQUFBLENBQVMsT0FBVCxFQUE2QjtVQUFFLFNBQUEsRUFBVztRQUFiLENBQTdCO1FBQ1AsSUFBQSxHQUFPLFFBQUEsQ0FBUyxPQUFULEVBQWtCLFNBQWxCLEVBQTZCO1VBQUUsU0FBQSxFQUFXO1FBQWIsQ0FBN0I7UUFDUCxPQUFPLENBQUMsR0FBUixDQUFZLElBQUksQ0FBQSxDQUFBLENBQUcsQ0FBQyxRQUFKLENBQUEsV0FBQSxDQUFoQjtRQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBSSxDQUFBLENBQUEsQ0FBRyxDQUFDLFFBQUosQ0FBQSxXQUFBLENBQWhCO1FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFJLENBQUEsQ0FBQSxDQUFHLENBQUMsUUFBSixDQUFBLFdBQUEsQ0FBaEI7UUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQUksQ0FBQSxDQUFBLENBQUcsQ0FBQyxRQUFKLENBQUEsV0FBQSxDQUFoQjtBQUNBLGVBQU87TUFYTixDQUFBO01BWUgsSUFBQSxDQUFBO01BQ0csQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNQLFlBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTtRQUFNLFNBQUEsR0FBZ0I7VUFDZCxRQUFBLEVBQVUsQ0FBRSxLQUFGLEVBQVMsSUFBVCxDQURJO1VBRWQsUUFBQSxFQUFZLENBQUUsS0FBRixFQUFTLEtBQVQsRUFBZ0IsS0FBaEIsRUFBdUIsS0FBdkIsRUFBOEIsS0FBOUIsRUFBcUMsS0FBckMsRUFBNEMsS0FBNUMsRUFBbUQsS0FBbkQsRUFBMEQsS0FBMUQsRUFBaUUsS0FBakU7UUFGRTtRQUloQixJQUFBLEdBQU8sUUFBQSxDQUFTLE9BQVQsRUFBNkI7VUFBRSxTQUFBLEVBQVc7UUFBYixDQUE3QjtRQUNQLElBQUEsR0FBTyxRQUFBLENBQVMsT0FBVCxFQUFrQixTQUFsQixFQUE2QjtVQUFFLFNBQUEsRUFBVztRQUFiLENBQTdCO1FBQ1AsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFJLENBQUEsQ0FBQSxDQUFHLENBQUMsUUFBSixDQUFBLFdBQUEsQ0FBaEI7UUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQUksQ0FBQSxDQUFBLENBQUcsQ0FBQyxRQUFKLENBQUEsV0FBQSxDQUFoQjtRQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBSSxDQUFBLENBQUEsQ0FBRyxDQUFDLFFBQUosQ0FBQSxXQUFBLENBQWhCO1FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFJLENBQUEsQ0FBQSxDQUFHLENBQUMsUUFBSixDQUFBLFdBQUEsQ0FBaEI7QUFDQSxlQUFPO01BWE4sQ0FBQTtNQVlBLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDUCxZQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7UUFBTSxTQUFBLEdBQWdCO1VBQ2QsUUFBQSxFQUFVLENBQUUsS0FBRixFQUFTLElBQVQsQ0FESTtVQUVkLFFBQUEsRUFBWSxDQUFFLEtBQUYsRUFBUyxLQUFULEVBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLEVBQThCLEtBQTlCLEVBQXFDLEtBQXJDLEVBQTRDLEtBQTVDLEVBQW1ELEtBQW5ELEVBQTBELEtBQTFELEVBQWlFLEtBQWpFO1FBRkU7UUFJaEIsSUFBQSxHQUFPLFFBQUEsQ0FBUyxPQUFULEVBQTZCO1VBQUUsU0FBQSxFQUFXO1FBQWIsQ0FBN0I7UUFDUCxJQUFBLEdBQU8sUUFBQSxDQUFTLE9BQVQsRUFBa0IsU0FBbEIsRUFBNkI7VUFBRSxTQUFBLEVBQVc7UUFBYixDQUE3QjtRQUNQLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBSSxDQUFBLENBQUEsQ0FBRyxDQUFDLFFBQUosQ0FBQSxXQUFBLENBQWhCO1FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFJLENBQUEsQ0FBQSxDQUFHLENBQUMsUUFBSixDQUFBLFdBQUEsQ0FBaEI7UUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQUksQ0FBQSxDQUFBLENBQUcsQ0FBQyxRQUFKLENBQUEsV0FBQSxDQUFoQjtRQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBSSxDQUFBLENBQUEsQ0FBRyxDQUFDLFFBQUosQ0FBQSxXQUFBLENBQWhCO0FBQ0EsZUFBTztNQVhOLENBQUE7TUFZSCxJQUFBLENBQUE7TUFDRyxDQUFBLENBQUEsQ0FBQSxHQUFBO1FBR0UsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBOztBQUNULGNBQUE7VUFBUSxJQUFBLENBQUE7VUFDQSxFQUFBLEdBQUssVUFBVSxDQUFDLFlBQVgsQ0FBd0IsVUFBeEIsRUFBb0MsSUFBcEM7VUFDTCxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsVUFBSCxDQUFsQjtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEVBQUEsQ0FBRyxTQUFILENBQWxCO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBQSxDQUFHLFFBQUgsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsT0FBSCxDQUFsQjtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEVBQUEsQ0FBRyxNQUFILENBQWxCO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBQSxDQUFHLEtBQUgsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsSUFBSCxDQUFsQjtBQUNBLGlCQUFPO1FBVk4sQ0FBQTtRQVdBLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDVCxjQUFBO1VBQVEsSUFBQSxDQUFBO1VBQ0EsRUFBQSxHQUFLLFVBQVUsQ0FBQyxZQUFYLENBQXdCLFdBQXhCLEVBQXFDLElBQXJDO1VBQ0wsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBQSxDQUFHLFVBQUgsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsU0FBSCxDQUFsQjtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEVBQUEsQ0FBRyxRQUFILENBQWxCO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBQSxDQUFHLE9BQUgsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsTUFBSCxDQUFsQjtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEVBQUEsQ0FBRyxLQUFILENBQWxCO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBQSxDQUFHLElBQUgsQ0FBbEI7QUFDQSxpQkFBTztRQVZOLENBQUE7UUFXQSxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ1QsY0FBQTtVQUFRLElBQUEsQ0FBQTtVQUNBLEVBQUEsR0FBSyxVQUFVLENBQUMsWUFBWCxDQUF3QixXQUF4QixFQUFxQyxJQUFyQztVQUNMLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEVBQUEsQ0FBRyxVQUFILENBQWxCO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBQSxDQUFHLFNBQUgsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsUUFBSCxDQUFsQjtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEVBQUEsQ0FBRyxPQUFILENBQWxCO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBQSxDQUFHLE1BQUgsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsS0FBSCxDQUFsQjtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEVBQUEsQ0FBRyxJQUFILENBQWxCO0FBQ0EsaUJBQU87UUFWTixDQUFBO1FBV0EsQ0FBQSxDQUFBLENBQUEsR0FBQTtVQUNELElBQUEsQ0FBQTtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsVUFBSCxDQUFBLFlBQUEsQ0FBbkI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFNBQUgsQ0FBQSxZQUFBLENBQW5CO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxRQUFILENBQUEsWUFBQSxDQUFuQjtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsT0FBSCxDQUFBLFlBQUEsQ0FBbkI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLE1BQUgsQ0FBQSxZQUFBLENBQW5CO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxLQUFILENBQUEsWUFBQSxDQUFuQjtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsSUFBSCxDQUFBLFlBQUEsQ0FBbkI7QUFDQSxpQkFBTztRQVROLENBQUE7UUFVQSxDQUFBLENBQUEsQ0FBQSxHQUFBO1VBQ0QsSUFBQSxDQUFBO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBSSxNQUFKLENBQUEsWUFBQSxDQUFuQjtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUksSUFBSixDQUFBLFlBQUEsQ0FBbkI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFJLEdBQUosQ0FBQSxZQUFBLENBQW5CO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBSSxFQUFKLENBQUEsWUFBQSxDQUFuQjtBQUNBLGlCQUFPO1FBTk4sQ0FBQTtRQU9BLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDVCxjQUFBO1VBQVEsSUFBQSxDQUFBO1VBQ0EsRUFBQSxHQUFLLFVBQVUsQ0FBQyxZQUFYLENBQXdCLFVBQXhCLEVBQW9DLElBQXBDO1VBQ0wsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBQSxDQUFHLE9BQUgsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsTUFBSCxDQUFsQjtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEVBQUEsQ0FBRyxLQUFILENBQWxCO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBQSxDQUFHLElBQUgsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsR0FBSCxDQUFsQjtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEVBQUEsQ0FBRyxFQUFILENBQWxCO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBQSxDQUFHLEdBQUgsQ0FBbEI7QUFDQSxpQkFBTztRQVZOLENBQUE7UUFXQSxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ1QsY0FBQTtVQUFRLElBQUEsQ0FBQTtVQUNBLEVBQUEsR0FBSyxVQUFVLENBQUMsWUFBWCxDQUF3QixVQUF4QixFQUFvQyxJQUFwQztVQUNMLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEVBQUEsQ0FBRyxPQUFILENBQWxCO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBQSxDQUFHLE1BQUgsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsS0FBSCxDQUFsQjtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEVBQUEsQ0FBRyxJQUFILENBQWxCO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBQSxDQUFHLEdBQUgsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsRUFBSCxDQUFsQjtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEVBQUEsQ0FBRyxHQUFILENBQWxCO0FBQ0EsaUJBQU87UUFWTixDQUFBO1FBV0EsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNULGNBQUE7VUFBUSxJQUFBLENBQUE7VUFDQSxFQUFBLEdBQUssVUFBVSxDQUFDLFlBQVgsQ0FBd0IsVUFBeEIsRUFBb0MsSUFBcEM7VUFDTCxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsT0FBSCxDQUFsQjtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEVBQUEsQ0FBRyxNQUFILENBQWxCO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBQSxDQUFHLEtBQUgsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsSUFBSCxDQUFsQjtVQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEVBQUEsQ0FBRyxHQUFILENBQWxCO1VBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBQSxDQUFHLEVBQUgsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsR0FBSCxDQUFsQjtBQUNBLGlCQUFPO1FBVk4sQ0FBQTtlQVdBLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDVCxjQUFBLEVBQUEsRUFBQTtVQUFRLElBQUEsQ0FBQTtVQUNBLEVBQUEsR0FBSyxVQUFVLENBQUMsWUFBWCxDQUF3QixVQUF4QixFQUFvQyxHQUFwQztVQUNMLEtBQUEsR0FBUSxDQUFBLEdBQUk7VUFDWixJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsT0FBQSxHQUFXLEtBQWQsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsTUFBQSxHQUFXLEtBQWQsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsS0FBQSxHQUFXLEtBQWQsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsSUFBQSxHQUFXLEtBQWQsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsR0FBQSxHQUFXLEtBQWQsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsRUFBQSxHQUFXLEtBQWQsQ0FBbEI7VUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixFQUFBLENBQUcsR0FBQSxHQUFXLEtBQWQsQ0FBbEI7QUFDQSxpQkFBTztRQVhOLENBQUE7TUF0RkYsQ0FBQTtNQWtHSCxJQUFBLENBQUE7QUFDQSxhQUFPO0lBckxELENBQVI7O0lBd0xBLFdBQUEsRUFBYSxRQUFBLENBQUEsQ0FBQTtBQUNmLFVBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQSxDQUFBLEVBQUEsUUFBQSxFQUFBO01BQUksQ0FBQSxDQUFFLENBQUYsRUFBSyxRQUFMLEVBQWUsVUFBZixDQUFBLEdBQStCLE9BQUEsQ0FBUSx5QkFBUixDQUEvQjtNQUNBLENBQUE7UUFBRSxPQUFBLEVBQVM7TUFBWCxDQUFBLEdBQW1CLEdBQUcsQ0FBQyxHQUF2QjtNQUNBLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLG1CQUFuQjtNQUNBLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLENBQUMsQ0FBQSxDQUFBLENBQUcsbUJBQUgsQ0FBQSxRQUFBLENBQXBCLEVBSEo7O01BS0ksS0FBQSxDQUFNLFdBQU4sRUFBbUIsQ0FBQyxDQUFBLENBQUEsQ0FBRyxxQkFBSCxDQUFBLFFBQUEsQ0FBcEI7TUFDRyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ1AsWUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtRQUFNLE1BQUEsR0FBUyxJQUFJLElBQUksQ0FBQyxZQUFULENBQXNCLE9BQXRCLEVBQWY7UUFDTSxJQUFBLENBQUssV0FBTCxFQUFrQixNQUFNLENBQUMsZUFBUCxDQUFBLENBQWxCO1FBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsTUFBTSxDQUFDLE1BQVAsQ0FBYyxVQUFkLENBQWxCO0FBQ0E7QUFBQTtRQUFBLEtBQUEscUNBQUE7V0FBSSxDQUFFLElBQUYsRUFBUSxLQUFSO3VCQUNGLEtBQUEsQ0FBTSxXQUFOLEVBQXFCLENBQUMsQ0FBQSxDQUFBLENBQUcsSUFBSCxDQUFBLEtBQUEsQ0FBdEIsRUFBMEMsR0FBQSxDQUFJLEdBQUEsQ0FBSSxLQUFKLENBQUosQ0FBMUM7UUFERixDQUFBOztNQUpDLENBQUE7TUFNSCxJQUFBLENBQUE7TUFDRyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ1AsWUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBO1FBQU0sTUFBQSxHQUFVO1FBQ1YsS0FBQSxHQUFVLElBQUksSUFBSSxDQUFDLFlBQVQsQ0FBc0IsT0FBdEI7UUFBK0IsSUFBQSxDQUFLLFdBQUwsRUFBa0IsR0FBQSxDQUFJLEdBQUEsQ0FBSSxLQUFLLENBQUMsTUFBTixDQUFhLE1BQWIsQ0FBSixDQUFKLENBQWxCO1FBQ3pDLEtBQUEsR0FBVSxJQUFJLElBQUksQ0FBQyxZQUFULENBQXNCLE9BQXRCO1FBQStCLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEdBQUEsQ0FBSSxHQUFBLENBQUksS0FBSyxDQUFDLE1BQU4sQ0FBYSxNQUFiLENBQUosQ0FBSixDQUFsQjtBQUN6QyxlQUFPO01BSk4sQ0FBQSxJQWJQOzs7O01BcUJJLE1BQUEsR0FBVTtNQUNQLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDUCxZQUFBO1FBQU0sWUFBQSxHQUFlLElBQUksSUFBSSxDQUFDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7VUFBRSxLQUFBLEVBQU8sVUFBVDtVQUFxQixRQUFBLEVBQVU7UUFBL0IsQ0FBL0I7ZUFDZixJQUFBLENBQUssV0FBTCxFQUFrQixHQUFBLENBQUksR0FBQSxDQUFJLFlBQVksQ0FBQyxNQUFiLENBQW9CLE1BQXBCLENBQUosQ0FBSixDQUFsQjtNQUZDLENBQUE7TUFHQSxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ1AsWUFBQTtRQUFNLFlBQUEsR0FBZSxJQUFJLElBQUksQ0FBQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO1VBQUUsS0FBQSxFQUFPLFNBQVQ7VUFBb0IsUUFBQSxFQUFVO1FBQTlCLENBQS9CO1FBQ2YsSUFBQSxDQUFLLFdBQUwsRUFBa0IsR0FBQSxDQUFJLEdBQUEsQ0FBSSxZQUFZLENBQUMsTUFBYixDQUFvQixNQUFwQixDQUFKLENBQUosQ0FBbEI7ZUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixHQUFBLENBQUksR0FBQSxDQUFJLFlBQVksQ0FBQyxNQUFiLENBQW9CLFFBQXBCLENBQUosQ0FBSixDQUFsQjtNQUhDLENBQUE7TUFJQSxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ1AsWUFBQTtRQUFNLFlBQUEsR0FBZSxJQUFJLElBQUksQ0FBQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO1VBQUUsS0FBQSxFQUFPLFNBQVQ7VUFBb0IsUUFBQSxFQUFVLEtBQTlCO1VBQXFDLHdCQUFBLEVBQTBCO1FBQS9ELENBQS9CO1FBQ2YsSUFBQSxDQUFLLFdBQUwsRUFBa0IsR0FBQSxDQUFJLEdBQUEsQ0FBSSxZQUFZLENBQUMsTUFBYixDQUFvQixNQUFwQixDQUFKLENBQUosQ0FBbEI7ZUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixHQUFBLENBQUksR0FBQSxDQUFJLFlBQVksQ0FBQyxNQUFiLENBQW9CLFFBQXBCLENBQUosQ0FBSixDQUFsQjtNQUhDLENBQUE7TUFJQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7O1FBRUQsSUFBQSxDQUFLLFdBQUwsRUFBa0IsR0FBQSxDQUFJLEdBQUEsQ0FBSSxDQUFFLElBQUksSUFBSSxDQUFDLFlBQVQsQ0FBc0IseUJBQXRCLENBQUYsQ0FBbUQsQ0FBQyxNQUFwRCxDQUEyRCxVQUEzRCxDQUFKLENBQUosQ0FBbEI7UUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixHQUFBLENBQUksR0FBQSxDQUFJLENBQUUsSUFBSSxJQUFJLENBQUMsWUFBVCxDQUFzQixzQkFBdEIsQ0FBRixDQUFtRCxDQUFDLE1BQXBELENBQTJELFVBQTNELENBQUosQ0FBSixDQUFsQjtRQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEdBQUEsQ0FBSSxHQUFBLENBQUksQ0FBRSxJQUFJLElBQUksQ0FBQyxZQUFULENBQXNCLHlCQUF0QixDQUFGLENBQW1ELENBQUMsTUFBcEQsQ0FBMkQsVUFBM0QsQ0FBSixDQUFKLENBQWxCO1FBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsR0FBQSxDQUFJLEdBQUEsQ0FBSSxDQUFFLElBQUksSUFBSSxDQUFDLFlBQVQsQ0FBc0Isc0JBQXRCLENBQUYsQ0FBbUQsQ0FBQyxNQUFwRCxDQUEyRCxVQUEzRCxDQUFKLENBQUosQ0FBbEI7UUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixHQUFBLENBQUksR0FBQSxDQUFJLENBQUUsSUFBSSxJQUFJLENBQUMsWUFBVCxDQUFzQix5QkFBdEIsQ0FBRixDQUFtRCxDQUFDLE1BQXBELENBQTJELFVBQTNELENBQUosQ0FBSixDQUFsQjtlQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLEdBQUEsQ0FBSSxHQUFBLENBQUksQ0FBRSxJQUFJLElBQUksQ0FBQyxZQUFULENBQXNCLE9BQXRCLENBQUYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxVQUF6QyxDQUFKLENBQUosQ0FBbEI7TUFQQyxDQUFBO01BUUEsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUNQLFlBQUEsWUFBQTs7O1FBRU0sWUFBQSxHQUFlLElBQUksSUFBSSxDQUFDLFlBQVQsQ0FBc0IsT0FBdEI7ZUFDZixJQUFBLENBQUssV0FBTCxFQUFrQixHQUFBLENBQUksR0FBQSxDQUFJLFlBQVksQ0FBQyxNQUFiLENBQW9CLFVBQXBCLENBQUosQ0FBSixDQUFsQixFQUpDO01BQUEsQ0FBQTtBQUtILGFBQU87SUEvQ0ksQ0F4TGI7O0lBME9BLGlCQUFBLEVBQW1CLFFBQUEsQ0FBQSxDQUFBO0FBQ3JCLFVBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSx5QkFBQSxFQUFBLFFBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxDQUFGLEVBQUssUUFBTCxFQUFlLFVBQWYsQ0FBQSxHQUErQixPQUFBLENBQVEseUJBQVIsQ0FBL0I7TUFDQSxDQUFBO1FBQUUsT0FBQSxFQUFTO01BQVgsQ0FBQSxHQUFtQixHQUFHLENBQUMsR0FBdkI7TUFDRyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQTtNQUNILHlCQUFBLEdBQTRCLFFBQUEsQ0FBRSxHQUFGLENBQUE7QUFDaEMsWUFBQSxJQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQTtRQUFNLElBQUEsR0FBWSxHQUFHLENBQUMsUUFBSixDQUFhLENBQWI7UUFDWixJQUFBLEdBQVksSUFBQSxLQUFRO1FBQ3BCLFFBQUEsR0FBWSxRQUFBLENBQVUsSUFBSSxDQUFDLEtBQUwsQ0FBVyxDQUFYLEVBQWMsRUFBZCxDQUFWLEVBQTZCLENBQTdCLENBQUEsR0FBa0M7UUFDOUMsUUFBQSxHQUFZLEdBQUEsR0FBTSxJQUFJLENBQUMsS0FBTCxDQUFXLEVBQVg7QUFDbEIsZUFBTyxDQUFFLElBQUYsRUFBUSxRQUFSLEVBQWtCLFFBQWxCO01BTG1CO01BTTVCLENBQUEsR0FBSTtNQUNKLENBQUEsR0FBSSxDQUFBLEdBQUk7TUFBTSxLQUFBLENBQU0sV0FBTixFQUFtQixDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUgsQ0FBQSxRQUFBLENBQXBCLEVBQW9DLHlCQUFBLENBQTBCLENBQTFCLENBQXBDO01BQ2QsQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFNLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLENBQUMsQ0FBQSxDQUFBLENBQUcsQ0FBSCxDQUFBLFFBQUEsQ0FBcEIsRUFBb0MseUJBQUEsQ0FBMEIsQ0FBMUIsQ0FBcEM7TUFDZCxDQUFBLEdBQUksQ0FBQSxHQUFJO01BQU0sS0FBQSxDQUFNLFdBQU4sRUFBbUIsQ0FBQyxDQUFBLENBQUEsQ0FBRyxDQUFILENBQUEsUUFBQSxDQUFwQixFQUFvQyx5QkFBQSxDQUEwQixDQUExQixDQUFwQztNQUNkLENBQUEsR0FBSSxDQUFBLEdBQUk7TUFBTSxLQUFBLENBQU0sV0FBTixFQUFtQixDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUgsQ0FBQSxRQUFBLENBQXBCLEVBQW9DLHlCQUFBLENBQTBCLENBQTFCLENBQXBDO01BQ2QsQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFNLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLENBQUMsQ0FBQSxDQUFBLENBQUcsQ0FBSCxDQUFBLFFBQUEsQ0FBcEIsRUFBb0MseUJBQUEsQ0FBMEIsQ0FBMUIsQ0FBcEM7TUFDZCxDQUFBLEdBQUk7TUFBVSxLQUFBLENBQU0sV0FBTixFQUFtQixDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUgsQ0FBQSxRQUFBLENBQXBCLEVBQW9DLHlCQUFBLENBQTBCLENBQTFCLENBQXBDO01BQ2QsQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFNLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLENBQUMsQ0FBQSxDQUFBLENBQUcsQ0FBSCxDQUFBLFFBQUEsQ0FBcEIsRUFBb0MseUJBQUEsQ0FBMEIsQ0FBMUIsQ0FBcEM7TUFDZCxDQUFBLEdBQUksQ0FBQSxHQUFJO01BQU0sS0FBQSxDQUFNLFdBQU4sRUFBbUIsQ0FBQyxDQUFBLENBQUEsQ0FBRyxDQUFILENBQUEsUUFBQSxDQUFwQixFQUFvQyx5QkFBQSxDQUEwQixDQUExQixDQUFwQztNQUNkLENBQUEsR0FBSSxDQUFBLEdBQUk7TUFBTSxLQUFBLENBQU0sV0FBTixFQUFtQixDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUgsQ0FBQSxRQUFBLENBQXBCLEVBQW9DLHlCQUFBLENBQTBCLENBQTFCLENBQXBDO01BQ2QsQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFNLEtBQUEsQ0FBTSxXQUFOLEVBQW1CLENBQUMsQ0FBQSxDQUFBLENBQUcsQ0FBSCxDQUFBLFFBQUEsQ0FBcEIsRUFBb0MseUJBQUEsQ0FBMEIsQ0FBMUIsQ0FBcEM7TUFDZCxDQUFBLEdBQUksQ0FBQSxHQUFJO01BQU0sS0FBQSxDQUFNLFdBQU4sRUFBbUIsQ0FBQyxDQUFBLENBQUEsQ0FBRyxDQUFILENBQUEsUUFBQSxDQUFwQixFQUFvQyx5QkFBQSxDQUEwQixDQUExQixDQUFwQztNQUNkLFNBQUEsR0FBWSxJQUFJLElBQUksQ0FBQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO1FBQ3pDLFdBQUEsRUFBMEIsS0FEZTs7O1FBSXpDLHdCQUFBLEVBQTBCLEVBSmU7UUFLekMsd0JBQUEsRUFBMEIsRUFMZTtNQUFBLENBQS9CO01BT1osQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFPLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBSCxDQUFBLE1BQUEsQ0FBNkIsQ0FBQyxPQUEvQixDQUF1QyxJQUF2QyxFQUE2QyxHQUE3QyxDQUFsQjtNQUNmLENBQUEsR0FBSSxDQUFBLEdBQUk7TUFBTyxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLENBQWpCLENBQUgsQ0FBQSxNQUFBLENBQTZCLENBQUMsT0FBL0IsQ0FBdUMsSUFBdkMsRUFBNkMsR0FBN0MsQ0FBbEI7TUFDZixDQUFBLEdBQUksQ0FBQSxHQUFJO01BQU0sSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixDQUFILENBQUEsTUFBQSxDQUE2QixDQUFDLE9BQS9CLENBQXVDLElBQXZDLEVBQTZDLEdBQTdDLENBQWxCO01BQ2QsQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFNLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBSCxDQUFBLE1BQUEsQ0FBNkIsQ0FBQyxPQUEvQixDQUF1QyxJQUF2QyxFQUE2QyxHQUE3QyxDQUFsQjtNQUNkLENBQUEsR0FBSSxDQUFBLEdBQUk7TUFBTSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLENBQWpCLENBQUgsQ0FBQSxNQUFBLENBQTZCLENBQUMsT0FBL0IsQ0FBdUMsSUFBdkMsRUFBNkMsR0FBN0MsQ0FBbEI7TUFDZCxDQUFBLEdBQUksQ0FBQSxHQUFJO01BQU0sSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixDQUFILENBQUEsTUFBQSxDQUE2QixDQUFDLE9BQS9CLENBQXVDLElBQXZDLEVBQTZDLEdBQTdDLENBQWxCO01BQ2QsQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFNLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBSCxDQUFBLE1BQUEsQ0FBNkIsQ0FBQyxPQUEvQixDQUF1QyxJQUF2QyxFQUE2QyxHQUE3QyxDQUFsQjtNQUNkLENBQUEsR0FBSSxDQUFBLEdBQUk7TUFBTSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLENBQWpCLENBQUgsQ0FBQSxNQUFBLENBQTZCLENBQUMsT0FBL0IsQ0FBdUMsSUFBdkMsRUFBNkMsR0FBN0MsQ0FBbEI7TUFDZCxDQUFBLEdBQUksQ0FBQSxHQUFJO01BQU0sSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixDQUFILENBQUEsTUFBQSxDQUE2QixDQUFDLE9BQS9CLENBQXVDLElBQXZDLEVBQTZDLEdBQTdDLENBQWxCO01BQ2QsQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFNLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBSCxDQUFBLE1BQUEsQ0FBNkIsQ0FBQyxPQUEvQixDQUF1QyxJQUF2QyxFQUE2QyxHQUE3QyxDQUFsQjtNQUNkLENBQUEsR0FBSSxDQUFBLEdBQUk7TUFBTSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLENBQWpCLENBQUgsQ0FBQSxNQUFBLENBQTZCLENBQUMsT0FBL0IsQ0FBdUMsSUFBdkMsRUFBNkMsR0FBN0MsQ0FBbEI7TUFDZCxDQUFBLEdBQUksQ0FBQSxHQUFJO01BQU0sSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixDQUFILENBQUEsTUFBQSxDQUE2QixDQUFDLE9BQS9CLENBQXVDLElBQXZDLEVBQTZDLEdBQTdDLENBQWxCO01BQ2QsQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFNLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBSCxDQUFBLE1BQUEsQ0FBNkIsQ0FBQyxPQUEvQixDQUF1QyxJQUF2QyxFQUE2QyxHQUE3QyxDQUFsQjtNQUNkLENBQUEsR0FBSSxDQUFBLEdBQUk7TUFBTSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLENBQWpCLENBQUgsQ0FBQSxNQUFBLENBQTZCLENBQUMsT0FBL0IsQ0FBdUMsSUFBdkMsRUFBNkMsR0FBN0MsQ0FBbEI7TUFDZCxDQUFBLEdBQUksQ0FBQSxHQUFJO01BQU0sSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixDQUFILENBQUEsTUFBQSxDQUE2QixDQUFDLE9BQS9CLENBQXVDLElBQXZDLEVBQTZDLEdBQTdDLENBQWxCO01BQ2QsQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFNLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBSCxDQUFBLE1BQUEsQ0FBNkIsQ0FBQyxPQUEvQixDQUF1QyxJQUF2QyxFQUE2QyxHQUE3QyxDQUFsQjtNQUNkLENBQUEsR0FBSSxDQUFBLEdBQUk7TUFBTSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLENBQWpCLENBQUgsQ0FBQSxNQUFBLENBQTZCLENBQUMsT0FBL0IsQ0FBdUMsSUFBdkMsRUFBNkMsR0FBN0MsQ0FBbEI7TUFDZCxDQUFBLEdBQUksQ0FBQSxHQUFJO01BQU0sSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixDQUFILENBQUEsTUFBQSxDQUE2QixDQUFDLE9BQS9CLENBQXVDLElBQXZDLEVBQTZDLEdBQTdDLENBQWxCO01BQ2QsSUFBQSxDQUFBO01BQ0EsQ0FBQSxHQUFJO01BQVUsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixDQUFILENBQUEsTUFBQSxDQUE2QixDQUFDLE9BQS9CLENBQXVDLElBQXZDLEVBQTZDLEdBQTdDLENBQWxCO01BQ2QsSUFBQSxDQUFBO01BQ0EsQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFNLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBSCxDQUFBLE1BQUEsQ0FBNkIsQ0FBQyxPQUEvQixDQUF1QyxJQUF2QyxFQUE2QyxHQUE3QyxDQUFsQjtNQUNkLENBQUEsR0FBSSxDQUFBLEdBQUk7TUFBTSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLENBQWpCLENBQUgsQ0FBQSxNQUFBLENBQTZCLENBQUMsT0FBL0IsQ0FBdUMsSUFBdkMsRUFBNkMsR0FBN0MsQ0FBbEI7TUFDZCxDQUFBLEdBQUksQ0FBQSxHQUFJO01BQU0sSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixDQUFILENBQUEsTUFBQSxDQUE2QixDQUFDLE9BQS9CLENBQXVDLElBQXZDLEVBQTZDLEdBQTdDLENBQWxCO01BQ2QsQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFNLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBSCxDQUFBLE1BQUEsQ0FBNkIsQ0FBQyxPQUEvQixDQUF1QyxJQUF2QyxFQUE2QyxHQUE3QyxDQUFsQjtNQUNkLENBQUEsR0FBSSxDQUFBLEdBQUk7TUFBTSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLENBQWpCLENBQUgsQ0FBQSxNQUFBLENBQTZCLENBQUMsT0FBL0IsQ0FBdUMsSUFBdkMsRUFBNkMsR0FBN0MsQ0FBbEI7TUFDZCxDQUFBLEdBQUksQ0FBQSxHQUFJO01BQU0sSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixDQUFILENBQUEsTUFBQSxDQUE2QixDQUFDLE9BQS9CLENBQXVDLElBQXZDLEVBQTZDLEdBQTdDLENBQWxCO01BQ2QsQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFNLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBSCxDQUFBLE1BQUEsQ0FBNkIsQ0FBQyxPQUEvQixDQUF1QyxJQUF2QyxFQUE2QyxHQUE3QyxDQUFsQjtNQUNkLENBQUEsR0FBSSxDQUFBLEdBQUk7TUFBTSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLENBQWpCLENBQUgsQ0FBQSxNQUFBLENBQTZCLENBQUMsT0FBL0IsQ0FBdUMsSUFBdkMsRUFBNkMsR0FBN0MsQ0FBbEI7TUFDZCxDQUFBLEdBQUksQ0FBQSxHQUFJO01BQU0sSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixDQUFILENBQUEsTUFBQSxDQUE2QixDQUFDLE9BQS9CLENBQXVDLElBQXZDLEVBQTZDLEdBQTdDLENBQWxCO01BQ2QsQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFNLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBSCxDQUFBLE1BQUEsQ0FBNkIsQ0FBQyxPQUEvQixDQUF1QyxJQUF2QyxFQUE2QyxHQUE3QyxDQUFsQjtNQUNkLENBQUEsR0FBSSxDQUFBLEdBQUk7TUFBTSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLENBQWpCLENBQUgsQ0FBQSxNQUFBLENBQTZCLENBQUMsT0FBL0IsQ0FBdUMsSUFBdkMsRUFBNkMsR0FBN0MsQ0FBbEI7TUFDZCxDQUFBLEdBQUksQ0FBQSxHQUFJO01BQU0sSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixDQUFILENBQUEsTUFBQSxDQUE2QixDQUFDLE9BQS9CLENBQXVDLElBQXZDLEVBQTZDLEdBQTdDLENBQWxCO01BQ2QsQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFNLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBSCxDQUFBLE1BQUEsQ0FBNkIsQ0FBQyxPQUEvQixDQUF1QyxJQUF2QyxFQUE2QyxHQUE3QyxDQUFsQjtNQUNkLENBQUEsR0FBSSxDQUFBLEdBQUk7TUFBTSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLENBQWpCLENBQUgsQ0FBQSxNQUFBLENBQTZCLENBQUMsT0FBL0IsQ0FBdUMsSUFBdkMsRUFBNkMsR0FBN0MsQ0FBbEI7TUFDZCxDQUFBLEdBQUksQ0FBQSxHQUFJO01BQU0sSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixDQUFILENBQUEsTUFBQSxDQUE2QixDQUFDLE9BQS9CLENBQXVDLElBQXZDLEVBQTZDLEdBQTdDLENBQWxCO01BQ2QsQ0FBQSxHQUFJLENBQUEsR0FBSTtNQUFPLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBSCxDQUFBLE1BQUEsQ0FBNkIsQ0FBQyxPQUEvQixDQUF1QyxJQUF2QyxFQUE2QyxHQUE3QyxDQUFsQjtNQUNmLENBQUEsR0FBSSxDQUFBLEdBQUk7TUFBTyxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLENBQWpCLENBQUgsQ0FBQSxNQUFBLENBQTZCLENBQUMsT0FBL0IsQ0FBdUMsSUFBdkMsRUFBNkMsR0FBN0MsQ0FBbEI7TUFDZixJQUFBLENBQUE7TUFDQSxDQUFBLEdBQUksR0FBQSxHQUFNLEdBQU4sR0FBWTtNQUFZLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBSCxDQUFBLE1BQUEsQ0FBNkIsQ0FBQyxPQUEvQixDQUF1QyxJQUF2QyxFQUE2QyxHQUE3QyxDQUFsQjtBQUM1QixhQUFPO0lBckVVLENBMU9uQjs7SUFrVEEsUUFBQSxFQUFVLFFBQUEsQ0FBQSxDQUFBO0FBQ1osVUFBQSxjQUFBLEVBQUEsVUFBQSxFQUFBLGFBQUEsRUFBQSxDQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxHQUFBLEVBQUE7TUFBSSxDQUFBLENBQUUsQ0FBRixFQUFLLFFBQUwsRUFBZSxVQUFmLENBQUEsR0FBK0IsT0FBQSxDQUFRLHlCQUFSLENBQS9CO01BQ0EsQ0FBQTtRQUFFLE9BQUEsRUFBUztNQUFYLENBQUEsR0FBbUIsR0FBRyxDQUFDLEdBQXZCLEVBREo7Ozs7Ozs7TUFRSSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7UUFDVDtRQUE4QixDQUFFLEdBQUYsRUFBTyxDQUFQO1FBQzlCO1FBQThCLENBQUUsR0FBRixFQUFPLENBQVAsRUFBVSxHQUFWLEVBQWUsQ0FBZixFQUFrQixHQUFsQixFQUF1QixDQUF2QixFQUEwQixHQUExQixFQUErQixDQUEvQjtRQUM5QjtRQUE4QixDQUFFLENBQUYsRUFBSyxHQUFMLEVBQVUsQ0FBVjtRQUM5QjtlQUE4QixDQUFFLENBQUYsRUFBSyxHQUFMLEVBQVUsQ0FBVixFQUFhLEdBQWIsRUFBa0IsQ0FBbEIsRUFBcUIsR0FBckIsRUFBMEIsQ0FBMUIsRUFBNkIsR0FBN0IsRUFBa0MsQ0FBbEM7TUFKckIsRUFSZjs7TUFjSSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFlBQUEsQ0FBYSxHQUFiLENBQUgsQ0FBQSxNQUFBLENBQW5CO01BQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxZQUFBLENBQWEsSUFBYixDQUFILENBQUEsTUFBQSxDQUFuQjtNQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsWUFBQSxDQUFhLEtBQWIsQ0FBSCxDQUFBLE1BQUEsQ0FBbkI7TUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFlBQUEsQ0FBYSxNQUFiLENBQUgsQ0FBQSxNQUFBLENBQW5CO01BQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxZQUFBLENBQWEsT0FBYixDQUFILENBQUEsTUFBQSxDQUFuQjtNQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsWUFBQSxDQUFhLFFBQWIsQ0FBSCxDQUFBLE1BQUEsQ0FBbkI7TUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFlBQUEsQ0FBYSxTQUFiLENBQUgsQ0FBQSxNQUFBLENBQW5CO01BQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBRyxZQUFBLENBQWEsVUFBYixDQUFILENBQUEsTUFBQSxDQUFuQjtNQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLENBQUMsQ0FBQSxDQUFBLENBQUcsWUFBQSxDQUFhLFdBQWIsQ0FBSCxDQUFBLE1BQUEsQ0FBbkI7TUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixDQUFDLENBQUEsQ0FBQSxDQUFHLFlBQUEsQ0FBYSxZQUFiLENBQUgsQ0FBQSxNQUFBLENBQW5CLEVBdkJKOztNQXlCVSxpQkFBTixNQUFBLGVBQUEsUUFBNkIsTUFBN0IsQ0FBQSxFQXpCSjs7TUEyQkksZ0JBQUEsR0FBbUIsU0FBQSxDQUFFLFlBQUYsRUFBZ0IsU0FBaEIsQ0FBQTtBQUN2QixZQUFBLE9BQUEsRUFBQSxLQUFBLEVBQUEsU0FBQSxFQUFBLE1BQUEsRUFBQTtRQUdNLElBQWUsU0FBQSxHQUFZLENBQTNCOzs7O0FBQUEsaUJBQU8sS0FBUDs7UUFDQSxPQUFBLEdBQVk7UUFDWixTQUFBLEdBQVksWUFBWSxDQUFDLE1BQWIsR0FBc0I7UUFDbEMsTUFBQSxHQUFZLFlBQVksQ0FBRSxDQUFGLENBQVosS0FBdUI7QUFDbkMsZUFBQSxJQUFBO1VBQ0UsQ0FBRSxNQUFGLEVBQVUsS0FBVixDQUFBLEdBQXFCLFlBQVk7VUFFakMsSUFBb0QsS0FBQSxHQUFRLENBQTVEOztZQUFBLE1BQU0sSUFBSSxjQUFKLENBQW1CLHVCQUFuQixFQUFOOztVQUNBLE9BQUEsSUFBVztVQUNYLElBQVMsT0FBQSxJQUFXLENBQXBCO0FBQUEsa0JBQUE7O1VBQ0EsTUFBTSxDQUFBLENBQUUsTUFBRixFQUFVLEtBQVYsRUFBaUIsT0FBakIsQ0FBQTtVQUNOLElBQUcsTUFBSDtZQUNFLElBQWtCLFNBQUEsR0FBWSxDQUE5QjtjQUFBLFNBQUEsSUFBYSxFQUFiO2FBREY7V0FBQSxNQUFBO1lBR0UsSUFBUyxTQUFBLEdBQVksQ0FBckI7QUFBQSxvQkFBQTs7WUFDQSxTQUFBLElBQWEsRUFKZjs7UUFQRjtBQVlBLGVBQU87TUFwQlUsRUEzQnZCOztNQWlESSxhQUFBLEdBQWdCLFFBQUEsQ0FBRSxJQUFGLEVBQVEsWUFBUixDQUFBO0FBQ3BCLFlBQUEsSUFBQSxFQUFBLFNBQUE7O1FBQ00sSUFBQSxDQUFLLFdBQUwsRUFBa0IsR0FBQSxDQUFJLFlBQVksQ0FBQyxJQUFiLENBQWtCLEVBQWxCLENBQUosQ0FBbEI7UUFDQSxJQUFBLEdBQU8sS0FBSyxDQUFDLElBQU4sQ0FBVyxJQUFYO1FBQ1AsS0FBQSx3REFBQTtVQUNFLElBQUksQ0FBQyxNQUFMLENBQVksU0FBUyxDQUFDLE9BQXRCLEVBQStCLENBQS9CLEVBQWtDLFNBQVMsQ0FBQyxNQUE1QztRQURGO0FBRUEsZUFBTyxJQUFJLENBQUMsSUFBTCxDQUFVLEVBQVY7TUFOTztNQVFiLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtRQUNELElBQUEsQ0FBSyxXQUFMLEVBQWtCLGFBQUEsQ0FBYyxzQkFBZCxFQUFzQyxDQUFNLEdBQU4sRUFBVyxDQUFYLEVBQWMsR0FBZCxFQUFtQixDQUFuQixFQUFzQixHQUF0QixFQUEyQixDQUEzQixFQUE4QixHQUE5QixFQUFtQyxDQUFuQyxDQUF0QyxDQUFsQjtRQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLGFBQUEsQ0FBYyxzQkFBZCxFQUFzQyxDQUFFLENBQUYsRUFBTSxHQUFOLEVBQVcsQ0FBWCxFQUFjLEdBQWQsRUFBbUIsQ0FBbkIsRUFBc0IsR0FBdEIsRUFBMkIsQ0FBM0IsRUFBOEIsR0FBOUIsRUFBbUMsQ0FBbkMsQ0FBdEMsQ0FBbEI7UUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixhQUFBLENBQWMsc0JBQWQsRUFBc0MsQ0FBTSxHQUFOLEVBQVcsQ0FBWCxDQUF0QyxDQUFsQjtRQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLGFBQUEsQ0FBYyxzQkFBZCxFQUFzQyxDQUFNLEdBQU4sRUFBVyxDQUFYLENBQXRDLENBQWxCO1FBQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsYUFBQSxDQUFjLHNCQUFkLEVBQXNDLENBQU0sR0FBTixFQUFXLENBQVgsQ0FBdEMsQ0FBbEI7UUFDQSxJQUFBLENBQUssV0FBTCxFQUFrQixhQUFBLENBQWMsc0JBQWQsRUFBc0MsQ0FBTSxHQUFOLEVBQVcsQ0FBWCxDQUF0QyxDQUFsQjtlQUNBLElBQUEsQ0FBSyxXQUFMLEVBQWtCLGFBQUEsQ0FBYyxzQkFBZCxFQUFzQyxDQUFNLEdBQU4sRUFBVyxDQUFYLENBQXRDLENBQWxCO01BUEMsQ0FBQSxJQXpEUDs7QUFrRUksYUFBTztJQW5FQztFQWxUVixFQXRtQkY7OztFQSs5QkEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBLFNBQUEsRUFBQTtNQUFFLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsS0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFNBQUEsR0FBWTtRQUFFLGVBQUEsRUFBaUIsSUFBQyxDQUFBLGVBQXBCO1FBQXFDLHNCQUFBLEVBQXdCLElBQUMsQ0FBQTtNQUE5RCxFQUZkOztNQUlFLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsSUFBQyxDQUFBLGVBQS9CO2FBQ0EsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QjtRQUFFLHVCQUFBLEVBQXlCLElBQUMsQ0FBQSxlQUFlLENBQUM7TUFBNUMsQ0FBOUI7SUFOc0MsQ0FBQSxJQUF4Qzs7O0VBLzlCQTs7Ozs7Ozs7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaW50ZXJ0eXBlL3Rlc3QtYmFzaWNzJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG5XR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5UTVBfdHlwZXMgICAgICAgICAgICAgICAgID0gbmV3ICggcmVxdWlyZSAnaW50ZXJ0eXBlLTIwMy4wLjAnICkuSW50ZXJ0eXBlKClcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbiMgdGVzdF9tb2RlICAgICAgICAgICAgICAgICA9ICd0aHJvd19mYWlsdXJlcydcbiMgdGVzdF9tb2RlICAgICAgICAgICAgICAgICA9ICd0aHJvd19lcnJvcnMnXG4jIHRlc3RfbW9kZSAgICAgICAgICAgICAgICAgPSAnZmFpbHNhZmUnXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AaW50ZXJ0eXBlX3Rhc2tzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG1vZHVsZV9leHBvcnRzOiAtPlxuICAgIEVGRlNUUklORyA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICMgQHRocm93cyAoIM6pZnN0cl9fXzEgPSAtPiBjcmVhdGVfdHlwZXNwYWNlKCkgKSwgL2RlY2xhcmF0aW9uIGZvciB0eXBlICd3aG9sZW51bWJlcicgY29udGFpbnMgZm9yd2FyZCByZWZlcmVuY2UgdG8gdHlwZSAnaW50ZWdlcicvXG4gICAgQGVxICggzqlmc3RyX19fMiA9IC0+IHR5cGVvZiBFRkZTVFJJTkcgICApLCAnb2JqZWN0J1xuICAgIEBlcSAoIM6pZnN0cl9fXzMgPSAtPiB0eXBlb2YgRUZGU1RSSU5HLmYgKSwgJ2Z1bmN0aW9uJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlX21hdGNoZXM6IC0+XG4gICAgeyBfZm10c3BlY19yZSB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlmc3RyX19fNCA9IC0+ICAoICggXCI6NTspXCIgICAgICAgICkubWF0Y2ggX2ZtdHNwZWNfcmUgKT8uZ3JvdXBzID8gbnVsbCApLCB7IGZtdF9zcGVjOiAnNScsICAgICAgdGFpbDogJyknICAgICAgIH1cbiAgICBAZXEgKCDOqWZzdHJfX181ID0gLT4gICggKCBcIjo+NTspXCIgICAgICAgKS5tYXRjaCBfZm10c3BlY19yZSApPy5ncm91cHMgPyBudWxsICksIHsgZm10X3NwZWM6ICc+NScsICAgICB0YWlsOiAnKScgICAgICAgfVxuICAgIEBlcSAoIM6pZnN0cl9fXzYgPSAtPiAgKCAoIFwiOjw1OylcIiAgICAgICApLm1hdGNoIF9mbXRzcGVjX3JlICk/Lmdyb3VwcyA/IG51bGwgKSwgeyBmbXRfc3BlYzogJzw1JywgICAgIHRhaWw6ICcpJyAgICAgICB9XG4gICAgQGVxICggzqlmc3RyX19fNyA9IC0+ICAoICggXCI6PjUuMjspXCIgICAgICkubWF0Y2ggX2ZtdHNwZWNfcmUgKT8uZ3JvdXBzID8gbnVsbCApLCB7IGZtdF9zcGVjOiAnPjUuMicsICAgdGFpbDogJyknICAgICAgIH1cbiAgICBAZXEgKCDOqWZzdHJfX184ID0gLT4gICggKCBcIjpcXFxcOzw1OylcIiAgICApLm1hdGNoIF9mbXRzcGVjX3JlICk/Lmdyb3VwcyA/IG51bGwgKSwgeyBmbXRfc3BlYzogJ1xcXFwnLCAgICAgdGFpbDogJzw1OyknICAgIH1cbiAgICBAZXEgKCDOqWZzdHJfX185ID0gLT4gICggKCBcIjpcXFxcOzw1Oyk7XCIgICApLm1hdGNoIF9mbXRzcGVjX3JlICk/Lmdyb3VwcyA/IG51bGwgKSwgeyBmbXRfc3BlYzogJ1xcXFwnLCAgICAgdGFpbDogJzw1Oyk7JyAgIH1cbiAgICBAZXEgKCDOqWZzdHJfXzEwID0gLT4gICggKCBcIjpcXFxcOzw1OylcXFxcO1wiICkubWF0Y2ggX2ZtdHNwZWNfcmUgKT8uZ3JvdXBzID8gbnVsbCApLCB7IGZtdF9zcGVjOiAnXFxcXCcsICAgICB0YWlsOiAnPDU7KVxcXFw7JyB9XG4gICAgQGVxICggzqlmc3RyX18xMSA9IC0+ICAoICggXCI6XFxcXDs+MTU7KVwiICAgKS5tYXRjaCBfZm10c3BlY19yZSApPy5ncm91cHMgPyBudWxsICksIHsgZm10X3NwZWM6ICdcXFxcJywgICAgIHRhaWw6ICc+MTU7KScgICB9XG4gICAgQGVxICggzqlmc3RyX18xMiA9IC0+ICAoICggXCI6Oz4xNTspXCIgICAgICkubWF0Y2ggX2ZtdHNwZWNfcmUgKT8uZ3JvdXBzID8gbnVsbCApLCB7IGZtdF9zcGVjOiAnOz4xNScsICAgdGFpbDogJyknICAgICAgIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBiYXNpY19mdW5jdGlvbmFsaXR5OiAtPlxuICAgIHsgZiwgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pZnN0cl9fMTMgPSAtPiBmJycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcnXG4gICAgQGVxICggzqlmc3RyX18xNCA9IC0+IGYnaGVsbycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJ2hlbG8nXG4gICAgQGVxICggzqlmc3RyX18xNSA9IC0+IGYnKCN7MTIzfSknICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJygjezEyM30pJ1xuICAgIEBlcSAoIM6pZnN0cl9fMTYgPSAtPiBmJygjezEyM31cXDspJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKCN7MTIzfTspJ1xuICAgIEBlcSAoIM6pZnN0cl9fMTcgPSAtPiBmJygjezEyM31cXFxcOyknICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJygjezEyM31cXFxcOyknXG4gICAgQGVxICggzqlmc3RyX18xOCA9IC0+IGZcIigjezEyM30pXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKDEyMyknXG4gICAgQGVxICggzqlmc3RyX18xOSA9IC0+IGZcIigjezEyM306NTspXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKCAgMTIzKSdcbiAgICBAZXEgKCDOqWZzdHJfXzIwID0gLT4gZlwiKCN7MTIzfTo+NTspXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksICcoICAxMjMpJ1xuICAgIEBlcSAoIM6pZnN0cl9fMjEgPSAtPiBmXCIoI3sxMjN9Ojw1OylcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJygxMjMgICknXG4gICAgQGVxICggzqlmc3RyX18yMiA9IC0+IGZcIigjezEyMy40NTZ9Oj41LjI7KVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKDEuMmUrMiknXG4gICAgQGVxICggzqlmc3RyX18yMyA9IC0+IGZcIigjezEyM306Oz4xNTspXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKDs7Ozs7Ozs7Ozs7OzEyMyknXG4gICAgQGVxICggzqlmc3RyX18yNCA9IC0+IGZcIigjezEyM306OzwxNTspXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKDEyMzs7Ozs7Ozs7Ozs7OyknXG4gICAgQGVxICggzqlmc3RyX18yNSA9IC0+IGZcIigjezEyM306Pj4xNTspXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKD4+Pj4+Pj4+Pj4+PjEyMyknXG4gICAgQGVxICggzqlmc3RyX18yNiA9IC0+IGZcIigjezEyM306PD4xNTspXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKDw8PDw8PDw8PDw8PDEyMyknXG4gICAgQGVxICggzqlmc3RyX18yNyA9IC0+IGZcIigjezEyM306Ozw3OylcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKDEyMzs7OzspJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG1hbGZvcm1lZF9mb3JtYXRzOiAtPlxuICAgIHsgZlxuICAgICAgRWZmc3RyaW5nX2Vycm9yXG4gICAgICBFZmZzdHJpbmdfc3ludGF4X2Vycm9yXG4gICAgICBFZmZzdHJpbmdfbGliX3N5bnRheF9lcnJvciB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAdGhyb3dzICggzqlmc3RyX18yOCA9IC0+IGZcIigjezEyM306Oz4xNSlcIiAgICAgICApLCAvaWxsZWdhbCBmb3JtYXQgc3BlY2lmaWVyL1xuICAgIEB0aHJvd3MgKCDOqWZzdHJfXzI5ID0gLT4gZlwiKCN7MTIzfTopXCIgICAgICAgICAgICksIC9pbGxlZ2FsIGZvcm1hdCBzcGVjaWZpZXIvXG4gICAgQHRocm93cyAoIM6pZnN0cl9fMzAgPSAtPiBmXCIoI3sxMjN9OjspXCIgICAgICAgICAgKSwgL2lsbGVnYWwgZm9ybWF0IHNwZWNpZmllci9cbiAgICBAdGhyb3dzICggzqlmc3RyX18zMSA9IC0+IGZcIigjezEyM306LS0tPjNmOylcIiAgICApLCAvaWxsZWdhbCBmb3JtYXQgc3BlY2lmaWVyL1xuICAgIEBlcSAoIM6pZnN0cl9fMzIgPSAtPiB0cnkgZlwiKCN7MTIzfTo7KVwiICAgICAgICBjYXRjaCBlIHRoZW4gZSBpbnN0YW5jZW9mIEVmZnN0cmluZ19lcnJvciAgICksIHRydWVcbiAgICBAZXEgKCDOqWZzdHJfXzMzID0gLT4gdHJ5IGZcIigjezEyM306OylcIiAgICAgICAgY2F0Y2ggZSB0aGVuIGUgaW5zdGFuY2VvZiBFZmZzdHJpbmdfc3ludGF4X2Vycm9yICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZnN0cl9fMzQgPSAtPiB0cnkgZlwiKCN7MTIzfTo7KVwiICAgICAgICBjYXRjaCBlIHRoZW4gZSBpbnN0YW5jZW9mIEVmZnN0cmluZ19saWJfc3ludGF4X2Vycm9yICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWZzdHJfXzM1ID0gLT4gdHJ5IGZcIigjezEyM306LS0tPjNmOylcIiAgY2F0Y2ggZSB0aGVuIGUgaW5zdGFuY2VvZiBFZmZzdHJpbmdfZXJyb3IgICApLCB0cnVlXG4gICAgQGVxICggzqlmc3RyX18zNiA9IC0+IHRyeSBmXCIoI3sxMjN9Oi0tLT4zZjspXCIgIGNhdGNoIGUgdGhlbiBlIGluc3RhbmNlb2YgRWZmc3RyaW5nX3N5bnRheF9lcnJvciAgICksIHRydWVcbiAgICBAZXEgKCDOqWZzdHJfXzM3ID0gLT4gdHJ5IGZcIigjezEyM306LS0tPjNmOylcIiAgY2F0Y2ggZSB0aGVuIGUgaW5zdGFuY2VvZiBFZmZzdHJpbmdfbGliX3N5bnRheF9lcnJvciAgICksIHRydWVcbiAgICBAdGhyb3dzICggzqlmc3RyX18zOCA9IC0+IGZcIigjezEyM306XFxcXDs8NTspXCIgICAgKSwgL2lsbGVnYWwgZm9ybWF0IHNwZWNpZmllci9cbiAgICBAdGhyb3dzICggzqlmc3RyX18zOSA9IC0+IGZcIigjezEyM306XFxcXDs8NTspO1wiICAgKSwgL2lsbGVnYWwgZm9ybWF0IHNwZWNpZmllci9cbiAgICBAdGhyb3dzICggzqlmc3RyX180MCA9IC0+IGZcIigjezEyM306XFxcXDs8NTspXFxcXDtcIiApLCAvaWxsZWdhbCBmb3JtYXQgc3BlY2lmaWVyL1xuICAgIEB0aHJvd3MgKCDOqWZzdHJfXzQxID0gLT4gZlwiKCN7MTIzfTpcXFxcOz4xNTspXCIgICApLCAvaWxsZWdhbCBmb3JtYXQgc3BlY2lmaWVyL1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZpeGVkX3BvaW50X25vdGF0aW9uOiAtPlxuICAgIHsgZiwgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pZnN0cl9fNDIgPSAtPiBmXCIoI3sxMjMuNDU2fTo+NS4yZjspXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJygxMjMuNDYpJ1xuICAgIEBlcSAoIM6pZnN0cl9fNDMgPSAtPiBmXCIoI3sxMjMuNDU2fTo+MTUuMmY7KVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyggICAgICAgICAxMjMuNDYpJ1xuICAgIEBlcSAoIM6pZnN0cl9fNDQgPSAtPiBmXCIoI3sxMjMuNDU2fTo8MTUuMmY7KVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJygxMjMuNDYgICAgICAgICApJ1xuICAgIEBlcSAoIM6pZnN0cl9fNDUgPSAtPiBmXCIoI3sxMjM0LjU2N306PjE1LjJmOylcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyggICAgICAgIDEyMzQuNTcpJ1xuICAgIEBlcSAoIM6pZnN0cl9fNDYgPSAtPiBmXCIoI3sxMjM0LjU2N306PDE1LjJmOylcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJygxMjM0LjU3ICAgICAgICApJ1xuICAgIEBlcSAoIM6pZnN0cl9fNDcgPSAtPiBmXCIoI3sxMjM0LjU2N306PT4xNS4yZjspXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyg9PT09PT09PTEyMzQuNTcpJ1xuICAgIEBlcSAoIM6pZnN0cl9fNDggPSAtPiBmXCIoI3sxMjM0LjU2N306PTwxNS4yZjspXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJygxMjM0LjU3PT09PT09PT0pJ1xuICAgIEBlcSAoIM6pZnN0cl9fNDkgPSAtPiBmXCIoI3sxMjM0LjU2N306PT4xNSwuMmY7KVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyg9PT09PT09MSwyMzQuNTcpJ1xuICAgIEBlcSAoIM6pZnN0cl9fNTAgPSAtPiBmXCIoI3sxMjM0LjU2N306PTwxNSwuMmY7KVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJygxLDIzNC41Nz09PT09PT0pJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlmc3RyX181MSA9IC0+IGZcIigjey0xMjM0LjU2N306Xz4xNSwuMmY7KVwiICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKF9fX19fX+KIkjEsMjM0LjU3KSdcbiAgICBAZXEgKCDOqWZzdHJfXzUyID0gLT4gZlwiKCN7KzEyMzQuNTY3fTpfPi0xNSwuMmY7KVwiICAgICAgICAgICAgICAgICAgICAgICAgICksICcoX19fX19fXzEsMjM0LjU3KSdcbiAgICBAZXEgKCDOqWZzdHJfXzUzID0gLT4gZlwiKCN7LTEyMzQuNTY3fTpfPi0xNSwuMmY7KVwiICAgICAgICAgICAgICAgICAgICAgICAgICksICcoX19fX19f4oiSMSwyMzQuNTcpJ1xuICAgIEBlcSAoIM6pZnN0cl9fNTQgPSAtPiBmXCIoI3srMTIzNC41Njd9Ol8+KzE1LC4yZjspXCIgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyhfX19fX18rMSwyMzQuNTcpJ1xuICAgIEBlcSAoIM6pZnN0cl9fNTUgPSAtPiBmXCIoI3stMTIzNC41Njd9Ol8+KzE1LC4yZjspXCIgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJyhfX19fX1/iiJIxLDIzNC41NyknXG4gICAgQGVxICggzqlmc3RyX181NiA9IC0+IGZcIigjeysxMjM0LjU2N306Xz0rMTUsLjJmOylcIiAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKCtfX19fX18xLDIzNC41NyknXG4gICAgQGVxICggzqlmc3RyX181NyA9IC0+IGZcIigjey0xMjM0LjU2N306Xz0rMTUsLjJmOylcIiAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKOKIkl9fX19fXzEsMjM0LjU3KSdcbiAgICBAZXEgKCDOqWZzdHJfXzU4ID0gLT4gZlwiKCN7LTEyMzQuNTY3fTpfPSswMTUsLjJmOylcIiAgICAgICAgICAgICAgICAgICAgICAgICksICco4oiSMCwwMDAsMDAxLDIzNC41NyknXG4gICAgQGVxICggzqlmc3RyX181OSA9IC0+IGZcIigjey0xMjM0LjU2N306PSswMTUsLjJmOylcIiAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKOKIkjAsMDAwLDAwMSwyMzQuNTcpJ1xuICAgIEBlcSAoIM6pZnN0cl9fNjAgPSAtPiBmXCIoI3srMTIzNC41Njd9Ol89MDE1LC4yZjspXCIgICAgICAgICAgICAgICAgICAgICAgICAgKSwgJygwLDAwMCwwMDEsMjM0LjU3KSdcbiAgICBAZXEgKCDOqWZzdHJfXzYxID0gLT4gZlwiKCN7KzEyMzQuNTY3fTo9MDE1LC4yZjspXCIgICAgICAgICAgICAgICAgICAgICAgICAgICksICcoMCwwMDAsMDAxLDIzNC41NyknXG4gICAgQGVxICggzqlmc3RyX182MiA9IC0+IGZcIigjeysxMjM0LjU2N306Xz0wMTUuMmY7KVwiICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKDAwMDAwMDAwMTIzNC41NyknXG4gICAgQGVxICggzqlmc3RyX182MyA9IC0+IGZcIigjeysxMjM0LjU2N306PTAxNS4yZjspXCIgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKDAwMDAwMDAwMTIzNC41NyknXG4gICAgQGVxICggzqlmc3RyX182NCA9IC0+IGZcIigjey0xMjM0LjU2N306Xz0wMTUuMmY7KVwiICAgICAgICAgICAgICAgICAgICAgICAgICApLCAnKOKIkjAwMDAwMDAxMjM0LjU3KSdcbiAgICBAZXEgKCDOqWZzdHJfXzY1ID0gLT4gZlwiKCN7LTEyMzQuNTY3fTo9MDE1LjJmOylcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICksICco4oiSMDAwMDAwMDEyMzQuNTcpJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZyb21fdGhlX2RvY3M6IC0+XG4gICAgeyBmLCB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4gICAgIyMjIFRBSU5UIGNoZWNrIHdpdGggYCRgIGZvcm1hdCB3aWxsIHJlbHkgb24gbG9jYWxlIHNldHRpbmcgb2YgdGhlIG1hY2hpbmUgdGhlIHRlc3RzIGFyZSBydW5uaW5nIG9uICMjI1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pZnN0cl9fNjYgPSAtPiBmXCIjezAuMTIzfTouMCU7XCIgICApLCAnMTIlJyAgICAgICAgICAgICAgICAgICMgcm91bmRlZCBwZXJjZW50YWdlLCBcIjEyJVwiXG4gICAgQGVxICggzqlmc3RyX182NyA9IC0+IGZcIiN7LTMuNX06KCQuMmY7XCIgICksICcoJDMuNTApJyAgICAgICAgICAgICAgIyBsb2NhbGl6ZWQgZml4ZWQtcG9pbnQgY3VycmVuY3ksIFwiKMKjMy41MClcIlxuICAgICMgQGVxICggzqlmc3RyX182OCA9IC0+IGZcIiN7LTMuNX06KCQuMmY7XCIgICksICcowqMzLjUwKScgICAgICAgICAgICAgICMgbG9jYWxpemVkIGZpeGVkLXBvaW50IGN1cnJlbmN5LCBcIijCozMuNTApXCJcbiAgICBAZXEgKCDOqWZzdHJfXzY5ID0gLT4gZlwiI3s0Mn06KzIwO1wiICAgICAgKSwgJyAgICAgICAgICAgICAgICAgKzQyJyAjIHNwYWNlLWZpbGxlZCBhbmQgc2lnbmVkLCBcIiAgICAgICAgICAgICAgICAgKzQyXCJcbiAgICBAZXEgKCDOqWZzdHJfXzcwID0gLT4gZlwiI3s0Mn06Ll4yMDtcIiAgICAgKSwgJy4uLi4uLi4uLjQyLi4uLi4uLi4uJyAjIGRvdC1maWxsZWQgYW5kIGNlbnRlcmVkLCBcIi4uLi4uLi4uLjQyLi4uLi4uLi4uXCJcbiAgICBAZXEgKCDOqWZzdHJfXzcxID0gLT4gZlwiI3s0MmU2fTouMnM7XCIgICAgKSwgJzQyTScgICAgICAgICAgICAgICAgICAjIFNJLXByZWZpeCB3aXRoIHR3byBzaWduaWZpY2FudCBkaWdpdHMsIFwiNDJNXCJcbiAgICBAZXEgKCDOqWZzdHJfXzcyID0gLT4gZlwiI3s0ODg3OX06I3g7XCIgICAgKSwgJzB4YmVlZicgICAgICAgICAgICAgICAjIHByZWZpeGVkIGxvd2VyY2FzZSBoZXhhZGVjaW1hbCwgXCIweGJlZWZcIlxuICAgIEBlcSAoIM6pZnN0cl9fNzMgPSAtPiBmXCIjezQyMjN9OiwuMnI7XCIgICApLCAnNCwyMDAnICAgICAgICAgICAgICAgICMgZ3JvdXBlZCB0aG91c2FuZHMgd2l0aCB0d28gc2lnbmlmaWNhbnQgZGlnaXRzLCBcIjQsMjAwXCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBlZmZzdHJpbmdfZm9ybWF0X3Rlc3RfanM6IC0+XG4gICAgeyBmLCB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4gICAgIyMjIFRBSU5UIGNoZWNrIHdpdGggYCRgIGZvcm1hdCB3aWxsIHJlbHkgb24gbG9jYWxlIHNldHRpbmcgb2YgdGhlIG1hY2hpbmUgdGhlIHRlc3RzIGFyZSBydW5uaW5nIG9uICMjI1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEB0aHJvd3MgKCDOqWZzdHJfXzc0ID0gLT4gZlwiI3swfTpmb287XCIgICApLCAvaWxsZWdhbCBmb3JtYXQgc3BlY2lmaWVyL1xuICAgIEB0aHJvd3MgKCDOqWZzdHJfXzc1ID0gLT4gZlwiI3swfTouLTJzO1wiICApLCAvaWxsZWdhbCBmb3JtYXQgc3BlY2lmaWVyL1xuICAgIEB0aHJvd3MgKCDOqWZzdHJfXzc2ID0gLT4gZlwiI3swfTouZjtcIiAgICApLCAvaWxsZWdhbCBmb3JtYXQgc3BlY2lmaWVyL1xuICAgIEBlcSAoIM6pZnN0cl9fNzcgPSAtPiBmXCIjezB9Oi4zMGY7XCIgICAgICAgICAgICAgICksIFwiMC4wMDAwMDAwMDAwMDAwMDAwMDAwMFwiXG4gICAgQGVxICggzqlmc3RyX183OCA9IC0+IGZcIiN7MX06LjBnO1wiICAgICAgICAgICAgICAgKSwgXCIxXCJcbiAgICBAZXEgKCDOqWZzdHJfXzc5ID0gLT4gZlwiI3tOdW1iZXIuTUlOX1ZBTFVFfTpzO1wiICApLCBcIjAuMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA1eVwiXG4gICAgQGVxICggzqlmc3RyX184MCA9IC0+IGZcIiN7TnVtYmVyLk1BWF9WQUxVRX06cztcIiAgKSwgXCIxNzk3NjkwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBZXCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkZWZhdWx0bG9jYWxlX3Rlc3RfanM6IC0+XG4gICAgeyBmLCB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4gICAge2Zvcm1hdCwgZm9ybWF0UHJlZml4LCBmb3JtYXREZWZhdWx0TG9jYWxlfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQnXG4gICAgZGVidWcgJ86pZnN0cl9fODEnLCBmb3JtYXRcbiAgICBkZWJ1ZyAnzqlmc3RyX184MicsIGZvcm1hdFByZWZpeFxuICAgIGRlYnVnICfOqWZzdHJfXzgzJywgZm9ybWF0RGVmYXVsdExvY2FsZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZW5fVVMgPVxuICAgICAgZGVjaW1hbDogICAgJy4nLFxuICAgICAgdGhvdXNhbmRzOiAgJywnLFxuICAgICAgZ3JvdXBpbmc6ICAgWyAzLCBdLFxuICAgICAgY3VycmVuY3k6ICAgWyAnJCcsICcnLCBdXG4gICAgZnJfRlIgPVxuICAgICAgZGVjaW1hbDogICAgJywnLFxuICAgICAgdGhvdXNhbmRzOiAgJy4nLFxuICAgICAgZ3JvdXBpbmc6ICAgWyAzLCBdLFxuICAgICAgY3VycmVuY3k6ICAgWyAnJywgJ1xcdTAwYTDigqwnLCBdLFxuICAgICAgcGVyY2VudDogICAgJ1xcdTIwMmYlJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGxvY2FsZSA9IGZvcm1hdERlZmF1bHRMb2NhbGUgZnJfRlJcbiAgICAgIHRyeVxuICAgICAgICBAZXEgKCDOqWZzdHJfXzg0ID0gLT4gKCBsb2NhbGUuZm9ybWF0IFwiJCwuMmZcIiApIDEyMzQ1Njc4LjkwICksIFwiMTIuMzQ1LjY3OCw5MFxcdTAwYTDigqxcIlxuICAgICAgICBAZXEgKCDOqWZzdHJfXzg1ID0gLT4gKCBsb2NhbGUuZm9ybWF0IFwiLC4wJVwiICApIDEyMzQ1Njc4LjkwICksIFwiMS4yMzQuNTY3Ljg5MFxcdTIwMmYlXCIgIyBuYXJyb3cgbm8tYnJlYWsgc3BhY2VcbiAgICAgIGZpbmFsbHlcbiAgICAgICAgZm9ybWF0RGVmYXVsdExvY2FsZSBlbl9VU1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBsb2NhbGUgPSBmb3JtYXREZWZhdWx0TG9jYWxlIGZyX0ZSXG4gICAgICB0cnlcbiAgICAgICAgQGVxICggzqlmc3RyX184NiA9IC0+IGZvcm1hdFByZWZpeCApLCBsb2NhbGUuZm9ybWF0UHJlZml4XG4gICAgICAgICMgQGVxICggzqlmc3RyX184NyA9IC0+ICggZm9ybWF0UHJlZml4IFwiLC4yXCIsIDFlMyApIDEyMzQ1Njc4LjkwICksIFwiMTIuMzQ1LDY4a1wiXG4gICAgICAgIEBlcSAoIM6pZnN0cl9fODggPSAtPiAoIGxvY2FsZS5mb3JtYXRQcmVmaXggXCIsLjJcIiwgMWUzICkgMTIzNDU2NzguOTAgKSwgXCIxMi4zNDUsNjhrXCJcbiAgICAgIGZpbmFsbHlcbiAgICAgICAgZm9ybWF0RGVmYXVsdExvY2FsZSBlbl9VU1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmb3JtYXRfdHlwZV9jX3Rlc3RfanM6IC0+XG4gICAgeyBmLCB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWZzdHJfXzg5ID0gLT4gZlwiI3sn4piDJ306YztcIiAgICAgICAgICksIFwi4piDXCJcbiAgICBAZXEgKCDOqWZzdHJfXzkwID0gLT4gZlwiI3sn4piDJ306MDIwYztcIiAgICAgICksICBcIjAwMDAwMDAwMDAwMDAwMDAwMDDimINcIlxuICAgIEBlcSAoIM6pZnN0cl9fOTEgPSAtPiBmXCIjeyfimIMnfTogXjIwYztcIiAgICAgKSwgJyAgICAgICAgIOKYgyAgICAgICAgICdcbiAgICBAZXEgKCDOqWZzdHJfXzkyID0gLT4gZlwiI3sn57WM5riIJ306IF4yMGM7XCIgICApLCAnICAgICAgICDntYzmuIggICAgICAgICdcbiAgICBAZXEgKCDOqWZzdHJfXzkzID0gLT4gZlwiI3snYWJjZCd9OiBeMjBjO1wiICAgKSwgJyAgICAgICAgYWJjZCAgICAgICAgJ1xuICAgIEBlcSAoIM6pZnN0cl9fOTQgPSAtPiBmXCIjeyfimIMnfTokYztcIiAgICAgICAgKSwgXCIk4piDXCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsb2NhbGVfaW50ZXJuYWxzOiAtPlxuICAgIHsgZlxuICAgICAgbmV3X2Z0YWdcbiAgICAgIF9kZWZhdWx0X2xvY2FsZVxuICAgICAgX2QzX2Zvcm1hdFxuICAgICAgX2xvY2FsZV9jZmdfZnJvbV9iY3A0N1xuICAgICAgX2xvY2FsZV9jZmdfZnJvbV9oaW50c1xuICAgICAgX2hpbnRfYXNfbG9jYWxlX2NmZyAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqlmc3RyX185NSA9IC0+IF9kM19mb3JtYXQ/ICAgICAgICAgICAgICBhbmQgKCAoIHR5cGVvZiBfZDNfZm9ybWF0ICAgICAgICAgICAgICkgaXMgJ29iamVjdCcgICApICksIHRydWVcbiAgICBAZXEgKCDOqWZzdHJfXzk2ID0gLT4gX2xvY2FsZV9jZmdfZnJvbV9iY3A0Nz8gIGFuZCAoICggdHlwZW9mIF9sb2NhbGVfY2ZnX2Zyb21fYmNwNDcgKSBpcyAnZnVuY3Rpb24nICkgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pZnN0cl9fOTcgPSAtPiBfbG9jYWxlX2NmZ19mcm9tX2hpbnRzPyAgYW5kICggKCB0eXBlb2YgX2xvY2FsZV9jZmdfZnJvbV9oaW50cyApIGlzICdmdW5jdGlvbicgKSApLCB0cnVlXG4gICAgQGVxICggzqlmc3RyX185OCA9IC0+IF9oaW50X2FzX2xvY2FsZV9jZmc/ICAgICBhbmQgKCAoIHR5cGVvZiBfaGludF9hc19sb2NhbGVfY2ZnICAgICkgaXMgJ2Z1bmN0aW9uJyApICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pZnN0cl9fOTkgPSAtPiBfZGVmYXVsdF9sb2NhbGUgICAgICAgICAgICAgICAgKSwgeyBkZWNpbWFsOiAnLicsIHRob3VzYW5kczogJywnLCBncm91cGluZzogWyAzIF0sIGN1cnJlbmN5OiBbICckJywgJycgXSwgbnVtZXJhbHM6IFsgJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknIF0sIHBlcmNlbnQ6ICclJywgbWludXM6ICfiiJInLCBuYW46ICdOYU4nLCBmdWxsd2lkdGg6IHRydWUsIH1cbiAgICBAZXEgKCDOqWZzdHJfMTAwID0gLT4gX2xvY2FsZV9jZmdfZnJvbV9iY3A0NyAnYXItQUUnICksIHsgZGVjaW1hbDogJ9mrJywgdGhvdXNhbmRzOiAn2awnLCBncm91cGluZzogWyAzIF0sIGN1cnJlbmN5OiBbICcnLCAnINivLtilLicgXSwgbnVtZXJhbHM6IFsgJ9mgJywgJ9mhJywgJ9miJywgJ9mjJywgJ9mkJywgJ9mlJywgJ9mmJywgJ9mnJywgJ9moJywgJ9mpJyBdIH1cbiAgICBAZXEgKCDOqWZzdHJfMTAxID0gLT4gX2xvY2FsZV9jZmdfZnJvbV9iY3A0NyAnZW4tVVMnICksIHsgZGVjaW1hbDogJy4nLCB0aG91c2FuZHM6ICcsJywgZ3JvdXBpbmc6IFsgMyBdLCBjdXJyZW5jeTogWyAnJCcsICcnIF0gfVxuICAgIEBlcSAoIM6pZnN0cl8xMDIgPSAtPiBfbG9jYWxlX2NmZ19mcm9tX2JjcDQ3ICdkZS1ERScgKSwgeyBkZWNpbWFsOiAnLCcsIHRob3VzYW5kczogJy4nLCBncm91cGluZzogWyAzIF0sIGN1cnJlbmN5OiBbICcnLCAnwqDigqwnIF0gfVxuICAgIEBlcSAoIM6pZnN0cl8xMDMgPSAtPiBfbG9jYWxlX2NmZ19mcm9tX2JjcDQ3ICdlbi1JTicgKSwgeyBkZWNpbWFsOiAnLicsIHRob3VzYW5kczogJywnLCBncm91cGluZzogWyAzLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyIF0sIGN1cnJlbmN5OiBbICfigrknLCAnJyBdIH1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pZnN0cl8xMDQgPSAtPiBfaGludF9hc19sb2NhbGVfY2ZnICdhci1BRScgICAgKSwgeyBkZWNpbWFsOiAn2asnLCB0aG91c2FuZHM6ICfZrCcsIGdyb3VwaW5nOiBbIDMgXSwgY3VycmVuY3k6IFsgJycsICcg2K8u2KUuJyBdLCBudW1lcmFsczogWyAn2aAnLCAn2aEnLCAn2aInLCAn2aMnLCAn2aQnLCAn2aUnLCAn2aYnLCAn2acnLCAn2agnLCAn2aknIF0gfVxuICAgIEBlcSAoIM6pZnN0cl8xMDUgPSAtPiBfaGludF9hc19sb2NhbGVfY2ZnICdlbi1VUycgICAgKSwgeyBkZWNpbWFsOiAnLicsIHRob3VzYW5kczogJywnLCBncm91cGluZzogWyAzIF0sIGN1cnJlbmN5OiBbICckJywgJycgXSB9XG4gICAgQGVxICggzqlmc3RyXzEwNiA9IC0+IF9oaW50X2FzX2xvY2FsZV9jZmcgJ2RlLURFJyAgICApLCB7IGRlY2ltYWw6ICcsJywgdGhvdXNhbmRzOiAnLicsIGdyb3VwaW5nOiBbIDMgXSwgY3VycmVuY3k6IFsgJycsICfCoOKCrCcgXSB9XG4gICAgQGVxICggzqlmc3RyXzEwNyA9IC0+IF9oaW50X2FzX2xvY2FsZV9jZmcgJ2VuLUlOJyAgICApLCB7IGRlY2ltYWw6ICcuJywgdGhvdXNhbmRzOiAnLCcsIGdyb3VwaW5nOiBbIDMsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIgXSwgY3VycmVuY3k6IFsgJ+KCuScsICcnIF0gfVxuICAgIEBlcSAoIM6pZnN0cl8xMDggPSAtPiBfaGludF9hc19sb2NhbGVfY2ZnIHt9ICAgICAgICAgKSwge31cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pZnN0cl8xMDkgPSAtPiBfbG9jYWxlX2NmZ19mcm9tX2hpbnRzICdhci1BRScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBkZWNpbWFsOiAn2asnLCB0aG91c2FuZHM6ICfZrCcsICBncm91cGluZzogWyAzIF0sIGN1cnJlbmN5OiBbICcnLCAnINivLtilLicgXSwgbnVtZXJhbHM6IFsgJ9mgJywgJ9mhJywgJ9miJywgJ9mjJywgJ9mkJywgJ9mlJywgJ9mmJywgJ9mnJywgJ9moJywgJ9mpJyBdLCBwZXJjZW50OiAnJScsIG1pbnVzOiAn4oiSJywgbmFuOiAnTmFOJywgZnVsbHdpZHRoOiB0cnVlLCB9XG4gICAgQGVxICggzqlmc3RyXzExMCA9IC0+IF9sb2NhbGVfY2ZnX2Zyb21faGludHMgJ2VuLVVTJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IGRlY2ltYWw6ICcuJywgdGhvdXNhbmRzOiAnLCcsIGdyb3VwaW5nOiBbIDMgXSwgY3VycmVuY3k6IFsgJyQnLCAnJyBdLCAgICAgIG51bWVyYWxzOiBbICcwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JyBdLCBwZXJjZW50OiAnJScsIG1pbnVzOiAn4oiSJywgbmFuOiAnTmFOJywgZnVsbHdpZHRoOiB0cnVlLCB9XG4gICAgQGVxICggzqlmc3RyXzExMSA9IC0+IF9sb2NhbGVfY2ZnX2Zyb21faGludHMgJ2RlLURFJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCB7IGRlY2ltYWw6ICcsJywgdGhvdXNhbmRzOiAnLicsIGdyb3VwaW5nOiBbIDMgXSwgY3VycmVuY3k6IFsgJycsICfCoOKCrCcgXSwgICAgIG51bWVyYWxzOiBbICcwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JyBdLCBwZXJjZW50OiAnJScsIG1pbnVzOiAn4oiSJywgbmFuOiAnTmFOJywgZnVsbHdpZHRoOiB0cnVlLCB9XG4gICAgQGVxICggzqlmc3RyXzExMiA9IC0+IF9sb2NhbGVfY2ZnX2Zyb21faGludHMgICAgICAgICAgeyBwZXJjZW50OiAnXFx4YTB2LkhkLicsIH0gICAgICAgICAgICAgICAgICAgICAgKSwgeyBkZWNpbWFsOiAnLicsIHRob3VzYW5kczogJywnLCBncm91cGluZzogWyAzIF0sIGN1cnJlbmN5OiBbICckJywgJycgXSwgICAgICBudW1lcmFsczogWyAnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScgXSwgcGVyY2VudDogJ8Kgdi5IZC4nLCBtaW51czogJ+KIkicsIG5hbjogJ05hTicsIGZ1bGx3aWR0aDogdHJ1ZSwgfVxuICAgIEBlcSAoIM6pZnN0cl8xMTMgPSAtPiBfbG9jYWxlX2NmZ19mcm9tX2hpbnRzICdkZS1ERScsIHsgcGVyY2VudDogJ1xceGEwdi5IZC4nLCB9ICAgICAgICAgICAgICAgICAgICAgICksIHsgZGVjaW1hbDogJywnLCB0aG91c2FuZHM6ICcuJywgZ3JvdXBpbmc6IFsgMyBdLCBjdXJyZW5jeTogWyAnJywgJ8Kg4oKsJyBdLCAgICAgbnVtZXJhbHM6IFsgJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknIF0sIHBlcmNlbnQ6ICfCoHYuSGQuJywgbWludXM6ICfiiJInLCBuYW46ICdOYU4nLCBmdWxsd2lkdGg6IHRydWUsIH1cbiAgICBAZXEgKCDOqWZzdHJfMTE0ID0gLT4gX2xvY2FsZV9jZmdfZnJvbV9oaW50cyAnZGUtREUnLCB7IHBlcmNlbnQ6ICdcXHhhMHYuSGQuJywgfSwgeyB0aG91c2FuZHM6IFwiJ1wiLCB9ICksIHsgZGVjaW1hbDogJywnLCB0aG91c2FuZHM6IFwiJ1wiLCBncm91cGluZzogWyAzIF0sIGN1cnJlbmN5OiBbICcnLCAnwqDigqwnIF0sICAgICBudW1lcmFsczogWyAnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScgXSwgcGVyY2VudDogJ8Kgdi5IZC4nLCBtaW51czogJ+KIkicsIG5hbjogJ05hTicsIGZ1bGx3aWR0aDogdHJ1ZSwgfVxuICAgIEBlcSAoIM6pZnN0cl8xMTUgPSAtPiBfbG9jYWxlX2NmZ19mcm9tX2hpbnRzIHt9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgeyBkZWNpbWFsOiAnLicsIHRob3VzYW5kczogJywnLCBncm91cGluZzogWyAzIF0sIGN1cnJlbmN5OiBbICckJywgJycgXSwgICAgICBudW1lcmFsczogWyAnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScgXSwgcGVyY2VudDogJyUnLCBtaW51czogJ+KIkicsIG5hbjogJ05hTicsIGZ1bGx3aWR0aDogdHJ1ZSwgfVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGxvY2FsZV9jZmcgID0gX2xvY2FsZV9jZmdfZnJvbV9oaW50cyAnZGUtREUnXG4gICAgICBsb2NhbGUgICAgICA9IF9kM19mb3JtYXQuZm9ybWF0TG9jYWxlIGxvY2FsZV9jZmdcbiAgICAgIEBlcSAoIM6pZnN0cl8xMTYgPSAtPiAoIGxvY2FsZS5mb3JtYXQgJ18+MTcsLjUlJyApIDAuNzU0MzIxICAgICksICdfX19fX19fXzc1LDQzMjEwJSdcbiAgICAgIEBlcSAoIM6pZnN0cl8xMTcgPSAtPiAoIGxvY2FsZS5mb3JtYXQgJ18+MTcsLjVmJyApIDEyMzQ1Njc4OTAgICksICcxLjIzNC41NjcuODkwLDAwMDAwJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBsb2NhbGVfY2ZnICA9IF9sb2NhbGVfY2ZnX2Zyb21faGludHMgJ2RlLURFJywgeyBudW1lcmFsczogWyAn4oGwJywgJ8K5JywgJ8KyJywgJ8KzJywgJ+KBtCcsICfigbUnLCAn4oG2JywgJ+KBtycsICfigbgnLCAn4oG5JywgXSwgcGVyY2VudDogJyB2LkguJywgfVxuICAgICAgbG9jYWxlICAgICAgPSBfZDNfZm9ybWF0LmZvcm1hdExvY2FsZSBsb2NhbGVfY2ZnXG4gICAgICBAZXEgKCDOqWZzdHJfMTE4ID0gLT4gKCBsb2NhbGUuZm9ybWF0ICdfPjE3LC41JScgKSAwLjc1NDMyMSAgICApLCAnX19fX+KBt+KBtSzigbTCs8KywrnigbAgdi5ILidcbiAgICAgIEBlcSAoIM6pZnN0cl8xMTkgPSAtPiAoIGxvY2FsZS5mb3JtYXQgJ18+MTcsLjVmJyApIDEyMzQ1Njc4OTAgICksICfCuS7CssKz4oG0LuKBteKBtuKBty7igbjigbnigbAs4oGw4oGw4oGw4oGw4oGwJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvICggZiApID0+XG4gICAgICBmID0gbmV3X2Z0YWcgJ2RlLURFJywgeyBudW1lcmFsczogWyAn4oGwJywgJ8K5JywgJ8KyJywgJ8KzJywgJ+KBtCcsICfigbUnLCAn4oG2JywgJ+KBtycsICfigbgnLCAn4oG5JywgXSwgcGVyY2VudDogJyB2LkguJywgfVxuICAgICAgQGVxICggzqlmc3RyXzEyMCA9IC0+ICggZlwiI3swLjc1NDMyMX06Xz4xNy41JTtcIiApICAgICksICdfX19f4oG34oG1LOKBtMKzwrLCueKBsCB2LkguJ1xuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pZnN0cl8xMjEgPSAtPiAoIG5ld19mdGFnICdlbi1VUycgKVwiI3sxMjM0NTY3ODkxMjM0NTY3ODkuNzV9Ol8+MzcsLjVmO1wiICksICdfX19fX19fXzEyMyw0NTYsNzg5LDEyMyw0NTYsNzg0LjAwMDAwJ1xuICAgIEBlcSAoIM6pZnN0cl8xMjIgPSAtPiAoIG5ld19mdGFnIHsgZ3JvdXBpbmc6IFsgNCwgXSwgfSApXCIjezEyMzQ1Njc4OTEyMzQ1Njc4OS43NX06Xz4zNywuNWY7XCIgKSwgJ19fX19fX19fXzEyLDM0NTYsNzg5MSwyMzQ1LDY3ODQuMDAwMDAnXG4gICAgQGVxICggzqlmc3RyXzEyMyA9IC0+ICggbmV3X2Z0YWcoKSAgICAgICApXCIjezEuMjN9OiQwMy4yZjtbI3sxMjM0NTY3ODkwLjEyMzQ1Nn06MjAsLjRmO11cIiApLCAnJDEuMjNbICAxLDIzNCw1NjcsODkwLjEyMzVdJ1xuICAgIEBlcSAoIM6pZnN0cl8xMjQgPSAtPiAoIG5ld19mdGFnIHt9ICAgICAgKVwiI3sxLjIzfTokMDMuMmY7WyN7MTIzNDU2Nzg5MC4xMjM0NTZ9OjIwLC40ZjtdXCIgKSwgJyQxLjIzWyAgMSwyMzQsNTY3LDg5MC4xMjM1XSdcbiAgICBAZXEgKCDOqWZzdHJfMTI1ID0gLT4gKCBuZXdfZnRhZyAnZGUtREUnIClcIiN7MS4yM306JDAzLjJmO1sjezEyMzQ1Njc4OTAuMTIzNDU2fToyMCwuNGY7XVwiICksICcxLDIzwqDigqxbICAxLjIzNC41NjcuODkwLDEyMzVdJ1xuICAgIEBlcSAoIM6pZnN0cl8xMjYgPSAtPiAoIG5ld19mdGFnICdlbi1VUycgKVwiI3sxLjIzfTokMDMuMmY7WyN7MTIzNDU2Nzg5MC4xMjM0NTZ9OjIwLC40ZjtdXCIgKSwgJyQxLjIzWyAgMSwyMzQsNTY3LDg5MC4xMjM1XSdcbiAgICBAZXEgKCDOqWZzdHJfMTI3ID0gLT4gKCBuZXdfZnRhZyAnZXMtTVgnIClcIiN7MS4yM306JDAzLjJmO1sjezEyMzQ1Njc4OTAuMTIzNDU2fToyMCwuNGY7XVwiICksICckMS4yM1sgIDEsMjM0LDU2Nyw4OTAuMTIzNV0nXG4gICAgQGVxICggzqlmc3RyXzEyOCA9IC0+ICggbmV3X2Z0YWcgJ2VuLUlOJyApXCIjezEuMjN9OiQwMy4yZjtbI3sxMjM0NTY3ODkwLjEyMzQ1Nn06MjAsLjRmO11cIiApLCAn4oK5MS4yM1sgMSwyMyw0NSw2Nyw4OTAuMTIzNV0nXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2lfdW5pdHNfZm9ybWF0X3NwZWNpZmllcl9pbnRlcm5hbHM6IC0+XG4gICAgeyBfZm10c3BlY191bml0X3JlIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBAZXEgKCDOqWZzdHJfMTI5ID0gLT4gKCAnXzwxNSwuM2YveScubWF0Y2ggX2ZtdHNwZWNfdW5pdF9yZSApPy5ncm91cHMgKSwgeyBkaXNjYXJkOiAnL3knLCB1bml0OiAneScsIH1cbiAgICAgIEBlcSAoIM6pZnN0cl8xMzAgPSAtPiAoICdfPDE1LC4zZi96Jy5tYXRjaCBfZm10c3BlY191bml0X3JlICk/Lmdyb3VwcyApLCB7IGRpc2NhcmQ6ICcveicsIHVuaXQ6ICd6JywgfVxuICAgICAgQGVxICggzqlmc3RyXzEzMSA9IC0+ICggJ188MTUsLjNmL2EnLm1hdGNoIF9mbXRzcGVjX3VuaXRfcmUgKT8uZ3JvdXBzICksIHsgZGlzY2FyZDogJy9hJywgdW5pdDogJ2EnLCB9XG4gICAgICBAZXEgKCDOqWZzdHJfMTMyID0gLT4gKCAnXzwxNSwuM2YvZicubWF0Y2ggX2ZtdHNwZWNfdW5pdF9yZSApPy5ncm91cHMgKSwgeyBkaXNjYXJkOiAnL2YnLCB1bml0OiAnZicsIH1cbiAgICAgIEBlcSAoIM6pZnN0cl8xMzMgPSAtPiAoICdfPDE1LC4zZi9wJy5tYXRjaCBfZm10c3BlY191bml0X3JlICk/Lmdyb3VwcyApLCB7IGRpc2NhcmQ6ICcvcCcsIHVuaXQ6ICdwJywgfVxuICAgICAgQGVxICggzqlmc3RyXzEzNCA9IC0+ICggJ188MTUsLjNmL24nLm1hdGNoIF9mbXRzcGVjX3VuaXRfcmUgKT8uZ3JvdXBzICksIHsgZGlzY2FyZDogJy9uJywgdW5pdDogJ24nLCB9XG4gICAgICBAZXEgKCDOqWZzdHJfMTM1ID0gLT4gKCAnXzwxNSwuM2YvwrUnLm1hdGNoIF9mbXRzcGVjX3VuaXRfcmUgKT8uZ3JvdXBzICksIHsgZGlzY2FyZDogJy/CtScsIHVuaXQ6ICfCtScsIH1cbiAgICAgIEBlcSAoIM6pZnN0cl8xMzYgPSAtPiAoICdfPDE1LC4zZi9tJy5tYXRjaCBfZm10c3BlY191bml0X3JlICk/Lmdyb3VwcyApLCB7IGRpc2NhcmQ6ICcvbScsIHVuaXQ6ICdtJywgfVxuICAgICAgQGVxICggzqlmc3RyXzEzNyA9IC0+ICggJ188MTUsLjNmLzEnLm1hdGNoIF9mbXRzcGVjX3VuaXRfcmUgKT8uZ3JvdXBzICksIHsgZGlzY2FyZDogJy8xJywgdW5pdDogJzEnLCB9XG4gICAgICBAZXEgKCDOqWZzdHJfMTM4ID0gLT4gKCAnXzwxNSwuM2YvaycubWF0Y2ggX2ZtdHNwZWNfdW5pdF9yZSApPy5ncm91cHMgKSwgeyBkaXNjYXJkOiAnL2snLCB1bml0OiAnaycsIH1cbiAgICAgIEBlcSAoIM6pZnN0cl8xMzkgPSAtPiAoICdfPDE1LC4zZi9NJy5tYXRjaCBfZm10c3BlY191bml0X3JlICk/Lmdyb3VwcyApLCB7IGRpc2NhcmQ6ICcvTScsIHVuaXQ6ICdNJywgfVxuICAgICAgQGVxICggzqlmc3RyXzE0MCA9IC0+ICggJ188MTUsLjNmL0cnLm1hdGNoIF9mbXRzcGVjX3VuaXRfcmUgKT8uZ3JvdXBzICksIHsgZGlzY2FyZDogJy9HJywgdW5pdDogJ0cnLCB9XG4gICAgICBAZXEgKCDOqWZzdHJfMTQxID0gLT4gKCAnXzwxNSwuM2YvVCcubWF0Y2ggX2ZtdHNwZWNfdW5pdF9yZSApPy5ncm91cHMgKSwgeyBkaXNjYXJkOiAnL1QnLCB1bml0OiAnVCcsIH1cbiAgICAgIEBlcSAoIM6pZnN0cl8xNDIgPSAtPiAoICdfPDE1LC4zZi9QJy5tYXRjaCBfZm10c3BlY191bml0X3JlICk/Lmdyb3VwcyApLCB7IGRpc2NhcmQ6ICcvUCcsIHVuaXQ6ICdQJywgfVxuICAgICAgQGVxICggzqlmc3RyXzE0MyA9IC0+ICggJ188MTUsLjNmL0UnLm1hdGNoIF9mbXRzcGVjX3VuaXRfcmUgKT8uZ3JvdXBzICksIHsgZGlzY2FyZDogJy9FJywgdW5pdDogJ0UnLCB9XG4gICAgICBAZXEgKCDOqWZzdHJfMTQ0ID0gLT4gKCAnXzwxNSwuM2YvWicubWF0Y2ggX2ZtdHNwZWNfdW5pdF9yZSApPy5ncm91cHMgKSwgeyBkaXNjYXJkOiAnL1onLCB1bml0OiAnWicsIH1cbiAgICAgIEBlcSAoIM6pZnN0cl8xNDUgPSAtPiAoICdfPDE1LC4zZi9ZJy5tYXRjaCBfZm10c3BlY191bml0X3JlICk/Lmdyb3VwcyApLCB7IGRpc2NhcmQ6ICcvWScsIHVuaXQ6ICdZJywgfVxuICAgICAgQGVxICggzqlmc3RyXzE0NiA9IC0+ICggJ188MTUsLjNmL2InLm1hdGNoIF9mbXRzcGVjX3VuaXRfcmUgKT8uZ3JvdXBzICksIHVuZGVmaW5lZFxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzaV91bml0c19mb3JtYXRfc3BlY2lmaWVyOiAtPlxuICAgIHsgZlxuICAgICAgbmV3X2Z0YWdcbiAgICAgIF9kZWZhdWx0X2xvY2FsZVxuICAgICAgX2QzX2Zvcm1hdFxuICAgICAgX2xvY2FsZV9jZmdfZnJvbV9iY3A0N1xuICAgICAgX2xvY2FsZV9jZmdfZnJvbV9oaW50c1xuICAgICAgX2hpbnRfYXNfbG9jYWxlX2NmZyAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgIFsgMC4wMDAwMDA0MiwgJ19fX19fX19fX18wLjQyMMK1JywgXVxuICAgICAgWyAwLjAwMDAwNDIsICAnX19fX19fX19fXzQuMjAwwrUnLCBdXG4gICAgICBbIDAuMDAwMDQyLCAgICdfX19fX19fX180Mi4wMDDCtScsIF1cbiAgICAgIFsgMC4wMDA0MiwgICAgJ19fX19fX19fNDIwLjAwMMK1JywgXVxuICAgICAgWyAwLjAwNDIsICAgICAnX19fX19fNCwyMDAuMDAwwrUnLCBdXG4gICAgICBbIDAuMDQyLCAgICAgICdfX19fXzQyLDAwMC4wMDDCtScsIF1cbiAgICAgIFsgMC40MiwgICAgICAgJ19fX180MjAsMDAwLjAwMMK1JywgXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZmID0gX2QzX2Zvcm1hdC5mb3JtYXRQcmVmaXggXCJfPjE1LC4zZlwiLCAxZS02XG4gICAgICBmb3IgWyBwcm9iZSwgbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgIEBlcSAoIM6pZnN0cl8xNDcgPSAtPiBmZiBwcm9iZSApLCBtYXRjaGVyXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZvciBbIHByb2JlLCBtYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgQGVxICggzqlmc3RyXzE0OCA9IC0+IGZcIiN7cHJvYmV9Ol8+MTUsLjNmL8K1O1wiICksIG1hdGNoZXJcbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2lfdW5pdHNfZm9ybWF0X3NwZWNpZmllcnNfdXBkYXRlZF93aXRoX2ZhdWx0czogLT5cbiAgICB7IGZcbiAgICAgIG5ld19mdGFnXG4gICAgICBfZGVmYXVsdF9sb2NhbGVcbiAgICAgIF9kM19mb3JtYXRcbiAgICAgIF9sb2NhbGVfY2ZnX2Zyb21fYmNwNDdcbiAgICAgIF9sb2NhbGVfY2ZnX2Zyb21faGludHNcbiAgICAgIF9oaW50X2FzX2xvY2FsZV9jZmcgICAgICAgICAgICAgIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pZnN0cl8xNDkgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9Ol8+NTAuMjBmL3k7bVwiICksICdkID0gXzEyMzQ1Njc4MDAwMDAwMDAwMDAwMDAwMDAwMDAuMDAwMDAwMDAwMDAwMDAwMDAwMDB5bSdcbiAgICBAZXEgKCDOqWZzdHJfMTUwID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTpfPjUwLjIwZi96O21cIiApLCAnZCA9IF9fX18xMjM0NTY3ODAwMDAwMDAwMDAwMDAwMDAwLjAwMDAwMDAwMDAwMDAwMDAwMDAwem0nXG4gICAgQGVxICggzqlmc3RyXzE1MSA9IC0+IGZcImQgPSAjezEyMzQuNTY3OH06Xz41MC4yMGYvYTttXCIgKSwgJ2QgPSBfX19fX19fMTIzNDU2NzgwMDAwMDAwMDAwMDAwMC4wMDAwMDAwMDAwMDAwMDAwMDAwMGFtJ1xuICAgIEBlcSAoIM6pZnN0cl8xNTIgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9Ol8+NTAuMjBmL2Y7bVwiICksICdkID0gX19fX19fX19fXzEyMzQ1Njc4MDAwMDAwMDAwMDAuMDAwMDAwMDAwMDAwMDAwMDAwMDBmbSdcbiAgICBAZXEgKCDOqWZzdHJfMTUzID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTpfPjUwLjIwZi9wO21cIiApLCAnZCA9IF9fX19fX19fX19fX18xMjM0NTY3ODAwMDAwMDAwLjAwMDAwMDAwMDAwMDAwMDAwMDAwcG0nXG4gICAgQGVxICggzqlmc3RyXzE1NCA9IC0+IGZcImQgPSAjezEyMzQuNTY3OH06Xz41MC4yMGYvbjttXCIgKSwgJ2QgPSBfX19fX19fX19fX19fX19fMTIzNDU2NzgwMDAwMC4wMDAwMDAwMDAwMDAwMDAwMDAwMG5tJ1xuICAgIEBlcSAoIM6pZnN0cl8xNTUgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9Ol8+NTAuMjBmL8K1O21cIiApLCAnZCA9IF9fX19fX19fX19fX19fX19fX18xMjM0NTY3ODAwLjAwMDAwMDAwMDAwMDAwMDAwMDAwwrVtJ1xuICAgIEBlcSAoIM6pZnN0cl8xNTYgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9Ol8+NTAuMjBmL207bVwiICksICdkID0gX19fX19fX19fX19fX19fX19fX19fXzEyMzQ1NjcuODAwMDAwMDAwMDAwMDAwMDAwMDBtbSdcbiAgICBAZXEgKCDOqWZzdHJfMTU3ID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTpfPjUwLjIwZi8xO21cIiApLCAnZCA9IF9fX19fX19fX19fX19fX19fX19fX19fX18xMjM0LjU2NzgwMDAwMDAwMDAwMDAwMDAwbSdcbiAgICBAZXEgKCDOqWZzdHJfMTU4ID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTpfPjUwLjIwZi9rO21cIiApLCAnZCA9IF9fX19fX19fX19fX19fX19fX19fX19fX19fX18xLjIzNDU2NzgwMDAwMDAwMDAwMDAwa20nXG4gICAgQGVxICggzqlmc3RyXzE1OSA9IC0+IGZcImQgPSAjezEyMzQuNTY3OH06Xz41MC4yMGYvTTttXCIgKSwgJ2QgPSBfX19fX19fX19fX19fX19fX19fX19fX19fX19fMC4wMDEyMzQ1Njc4MDAwMDAwMDAwNk1tJ1xuICAgIEBlcSAoIM6pZnN0cl8xNjAgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9Ol8+NTAuMjBmL0c7bVwiICksICdkID0gX19fX19fX19fX19fX19fX19fX19fX19fX19fXzAuMDAwMDAxMjM0NTY3ODAwMDAwMDBHbSdcbiAgICBAZXEgKCDOqWZzdHJfMTYxID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTpfPjUwLjIwZi9UO21cIiApLCAnZCA9IF9fX19fX19fX19fX19fX19fX19fX19fX19fX18wLjAwMDAwMDAwMTIzNDU2NzgwMDAwVG0nXG4gICAgQGVxICggzqlmc3RyXzE2MiA9IC0+IGZcImQgPSAjezEyMzQuNTY3OH06Xz41MC4yMGYvUDttXCIgKSwgJ2QgPSBfX19fX19fX19fX19fX19fX19fX19fX19fX19fMC4wMDAwMDAwMDAwMDEyMzQ1Njc4MFBtJ1xuICAgIEBlcSAoIM6pZnN0cl8xNjMgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9Ol8+NTAuMjBmL0U7bVwiICksICdkID0gX19fX19fX19fX19fX19fX19fX19fX19fX19fXzAuMDAwMDAwMDAwMDAwMDAxMjM0NThFbSdcbiAgICBAZXEgKCDOqWZzdHJfMTY0ID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTpfPjUwLjIwZi9aO21cIiApLCAnZCA9IF9fX19fX19fX19fX19fX19fX19fX19fX19fX18wLjAwMDAwMDAwMDAwMDAwMDAwMTIzWm0nXG4gICAgQGVxICggzqlmc3RyXzE2NSA9IC0+IGZcImQgPSAjezEyMzQuNTY3OH06Xz41MC4yMGYvWTttXCIgKSwgJ2QgPSBfX19fX19fX19fX19fX19fX19fX19fX19fX19fMC4wMDAwMDAwMDAwMDAwMDAwMDAwMFltJ1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNpX3VuaXRzX2Zvcm1hdF9zcGVjaWZpZXJzX3VwZGF0ZWRfaWRlYWw6IC0+XG4gICAgeyBmXG4gICAgICBuZXdfZnRhZ1xuICAgICAgX2RlZmF1bHRfbG9jYWxlXG4gICAgICBfZDNfZm9ybWF0XG4gICAgICBfbG9jYWxlX2NmZ19mcm9tX2JjcDQ3XG4gICAgICBfbG9jYWxlX2NmZ19mcm9tX2hpbnRzXG4gICAgICBfaGludF9hc19sb2NhbGVfY2ZnICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWZzdHJfMTY2ID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTpfPjUwLjIwZi95O21cIiApLCAnZCA9IF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18xLjIzNDU2NzhlKzI3eW0nXG4gICAgQGVxICggzqlmc3RyXzE2NyA9IC0+IGZcImQgPSAjezEyMzQuNTY3OH06Xz41MC4yMGYvejttXCIgKSwgJ2QgPSBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fMS4yMzQ1Njc4ZSsyNHptJ1xuICAgIEBlcSAoIM6pZnN0cl8xNjggPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9Ol8+NTAuMjBmL2E7bVwiICksICdkID0gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXzEuMjM0NTY3OGUrMjFhbSdcbiAgICBAZXEgKCDOqWZzdHJfMTY5ID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTpfPjUwLjIwZi9mO21cIiApLCAnZCA9IF9fX19fX19fX18xMjM0NTY3ODAwMDAwMDAwMDAwLjAwMDAwMDAwMDAwMDAwMDAwMDAwZm0nXG4gICAgQGVxICggzqlmc3RyXzE3MCA9IC0+IGZcImQgPSAjezEyMzQuNTY3OH06Xz41MC4yMGYvcDttXCIgKSwgJ2QgPSBfX19fX19fX19fX19fMTIzNDU2NzgwMDAwMDAwMC4wMDAwMDAwMDAwMDAwMDAwMDAwMHBtJ1xuICAgIEBlcSAoIM6pZnN0cl8xNzEgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9Ol8+NTAuMjBmL247bVwiICksICdkID0gX19fX19fX19fX19fX19fXzEyMzQ1Njc4MDAwMDAuMDAwMDAwMDAwMDAwMDAwMDAwMDBubSdcbiAgICBAZXEgKCDOqWZzdHJfMTcyID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTpfPjUwLjIwZi/CtTttXCIgKSwgJ2QgPSBfX19fX19fX19fX19fX19fX19fMTIzNDU2NzgwMC4wMDAwMDAwMDAwMDAwMDAwMDAwMMK1bSdcbiAgICBAZXEgKCDOqWZzdHJfMTczID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTpfPjUwLjIwZi9tO21cIiApLCAnZCA9IF9fX19fX19fX19fX19fX19fX19fX18xMjM0NTY3LjgwMDAwMDAwMDA0NjU2NjEyODczbW0nXG4gICAgQGVxICggzqlmc3RyXzE3NCA9IC0+IGZcImQgPSAjezEyMzQuNTY3OH06Xz41MC4yMGYvMTttXCIgKSwgJ2QgPSBfX19fX19fX19fX19fX19fX19fX19fX19fMTIzNC41Njc4MDAwMDAwMDAwMzM4MzMyMG0nXG4gICAgQGVxICggzqlmc3RyXzE3NSA9IC0+IGZcImQgPSAjezEyMzQuNTY3OH06Xz41MC4yMGYvazttXCIgKSwgJ2QgPSBfX19fX19fX19fX19fX19fX19fX19fX19fX19fMS4yMzQ1Njc3OTk5OTk5OTk5OTI5OGttJ1xuICAgIEBlcSAoIM6pZnN0cl8xNzYgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9Ol8+NTAuMjBmL007bVwiICksICdkID0gX19fX19fX19fX19fX19fX19fX19fX19fX19fXzAuMDAxMjM0NTY3ODAwMDAwMDAwMDZNbSdcbiAgICBAZXEgKCDOqWZzdHJfMTc3ID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTpfPjUwLjIwZi9HO21cIiApLCAnZCA9IF9fX19fX19fX19fX19fX19fX19fX19fX19fX18wLjAwMDAwMTIzNDU2NzgwMDAwMDAwR20nXG4gICAgQGVxICggzqlmc3RyXzE3OCA9IC0+IGZcImQgPSAjezEyMzQuNTY3OH06Xz41MC4yMGYvVDttXCIgKSwgJ2QgPSBfX19fX19fX19fX19fX19fX19fX19fX19fX19fMC4wMDAwMDAwMDEyMzQ1Njc4MDAwMFRtJ1xuICAgIEBlcSAoIM6pZnN0cl8xNzkgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9Ol8+NTAuMjBmL1A7bVwiICksICdkID0gX19fX19fX19fX19fX19fX19fX19fX19fX19fXzAuMDAwMDAwMDAwMDAxMjM0NTY3ODBQbSdcbiAgICBAZXEgKCDOqWZzdHJfMTgwID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTpfPjUwLjIwZi9FO21cIiApLCAnZCA9IF9fX19fX19fX19fX19fX19fX19fX19fX19fX18wLjAwMDAwMDAwMDAwMDAwMTIzNDU3RW0nXG4gICAgQGVxICggzqlmc3RyXzE4MSA9IC0+IGZcImQgPSAjezEyMzQuNTY3OH06Xz41MC4yMGYvWjttXCIgKSwgJ2QgPSBfX19fX19fX19fX19fX19fX19fX19fX19fX19fMC4wMDAwMDAwMDAwMDAwMDAwMDEyM1ptJ1xuICAgIEBlcSAoIM6pZnN0cl8xODIgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9Ol8+NTAuMjBmL1k7bVwiICksICdkID0gX19fX19fX19fX19fX19fX19fX19fX19fX19fXzAuMDAwMDAwMDAwMDAwMDAwMDAwMDBZbSdcbiAgICAjIEBlcSAoIM6pZnN0cl8xODMgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9OjUwLjYwZi95O21cIiApLCAnZCA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjIzNDU2NzhlKzI3eW0nXG4gICAgIyBAZXEgKCDOqWZzdHJfMTg0ID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTo1MC42MGYvejttXCIgKSwgJ2QgPSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yMzQ1Njc4ZSsyNHptJ1xuICAgICMgQGVxICggzqlmc3RyXzE4NSA9IC0+IGZcImQgPSAjezEyMzQuNTY3OH06NTAuNjBmL2E7bVwiICksICdkID0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMjM0NTY3OGUrMjFhbSdcbiAgICAjIEBlcSAoIM6pZnN0cl8xODYgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9OjUwLjYwZi9mO21cIiApLCAnZCA9ICAgICAgICAgICAxMjM0NTY3ODAwMDAwMDAwMDAwLjAwMDAwMDAwMDAwMDAwMDAwMDAwZm0nXG4gICAgIyBAZXEgKCDOqWZzdHJfMTg3ID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTo1MC42MGYvcDttXCIgKSwgJ2QgPSAgICAgICAgICAgICAgMTIzNDU2NzgwMDAwMDAwMC4wMDAwMDAwMDAwMDAwMDAwMDAwMHBtJ1xuICAgICMgQGVxICggzqlmc3RyXzE4OCA9IC0+IGZcImQgPSAjezEyMzQuNTY3OH06NTAuNjBmL247bVwiICksICdkID0gICAgICAgICAgICAgICAgIDEyMzQ1Njc4MDAwMDAuMDAwMDAwMDAwMDAwMDAwMDAwMDBubSdcbiAgICAjIEBlcSAoIM6pZnN0cl8xODkgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9OjUwLjYwZi/CtTttXCIgKSwgJ2QgPSAgICAgICAgICAgICAgICAgICAgMTIzNDU2NzgwMC4wMDAwMDAwMDAwMDAwMDAwMDAwMMK1bSdcbiAgICAjIEBlcSAoIM6pZnN0cl8xOTAgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9OjUwLjYwZi9tO21cIiApLCAnZCA9ICAgICAgICAgICAgICAgICAgICAgICAxMjM0NTY3LjgwMDAwMDAwMDA0NjU2NjEyODczbW0nXG4gICAgIyBAZXEgKCDOqWZzdHJfMTkxID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTo1MC42MGYvMTttXCIgKSwgJ2QgPSAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNC41Njc4MDAwMDAwMDAwMzM4MzMyMG0nXG4gICAgIyBAZXEgKCDOqWZzdHJfMTkyID0gLT4gZlwiZCA9ICN7MTIzNC41Njc4fTo1MC42MGYvazttXCIgKSwgJ2QgPSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yMzQ1Njc3OTk5OTk5OTk5OTI5OGttJ1xuICAgICMgQGVxICggzqlmc3RyXzE5MyA9IC0+IGZcImQgPSAjezEyMzQuNTY3OH06NTAuNjBmL007bVwiICksICdkID0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMDAxMjM0NTY3ODAwMDAwMDAwMDZNbSdcbiAgICAjIEBlcSAoIM6pZnN0cl8xOTQgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9OjUwLjYwZi9HO21cIiApLCAnZCA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAwMDAwMTIzNDU2NzgwMDAwMDAwMDAwMDBHbSdcbiAgICAjIEBlcSAoIM6pZnN0cl8xOTUgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9OjUwLjYwZi9UO21cIiApLCAnZCA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAwMDAwMDAwMTIzNDU2NzgwMDAwMDAwMDBUbSdcbiAgICAjIEBlcSAoIM6pZnN0cl8xOTYgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9OjUwLjYwZi9QO21cIiApLCAnZCA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAwMDAwMDAwMDAwMTIzNDU2NzgwMDAwMDBQbSdcbiAgICAjIEBlcSAoIM6pZnN0cl8xOTcgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9OjUwLjYwZi9FO21cIiApLCAnZCA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAwMDAwMDAwMDAwMDAwMTIzNDU2NzgwMDBFbSdcbiAgICAjIEBlcSAoIM6pZnN0cl8xOTggPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9OjUwLjYwZi9aO21cIiApLCAnZCA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAwMDAwMDAwMDAwMDAwMDAwMTIzNDU2NzhabSdcbiAgICAjIEBlcSAoIM6pZnN0cl8xOTkgPSAtPiBmXCJkID0gI3sxMjM0LjU2Nzh9OjUwLjYwZi9ZO21cIiApLCAnZCA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAwMDAwMDAwMDAwMDAwMDAwMDAwMTIzNDVZbSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzaV91bml0c19mb3JtYXRfc3BlY2lmaWVyX3VuaXQ6IC0+XG4gICAgeyBmXG4gICAgICBuZXdfZnRhZ1xuICAgICAgX2RlZmF1bHRfbG9jYWxlXG4gICAgICBfZDNfZm9ybWF0XG4gICAgICBfbG9jYWxlX2NmZ19mcm9tX2JjcDQ3XG4gICAgICBfbG9jYWxlX2NmZ19mcm9tX2hpbnRzXG4gICAgICBfaGludF9hc19sb2NhbGVfY2ZnICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgICAgWyAwLjAwMDAwMDQyLCAnX19fX19fX19fXzAuMDAwJywgXVxuICAgICAgWyAwLjAwMDAwNDIsICAnX19fX19fX19fXzAuMDAwJywgXVxuICAgICAgWyAwLjAwMDA0MiwgICAnX19fX19fX19fXzAuMDAwJywgXVxuICAgICAgWyAwLjAwMDQyLCAgICAnX19fX19fX19fXzAuMDAwJywgXVxuICAgICAgWyAwLjAwNDIsICAgICAnX19fX19fX19fXzAuMDA0JywgXVxuICAgICAgWyAwLjA0MiwgICAgICAnX19fX19fX19fXzAuMDQyJywgXVxuICAgICAgWyAwLjQyLCAgICAgICAnX19fX19fX19fXzAuNDIwJywgXVxuICAgICAgWyA0LjIsICAgICAgICAnX19fX19fX19fXzQuMjAwJywgXVxuICAgICAgWyA0MiwgICAgICAgICAnX19fX19fX19fNDIuMDAwJywgXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZmID0gX2QzX2Zvcm1hdC5mb3JtYXRQcmVmaXggXCJfPjE1LC4zZlwiLCAxXG4gICAgICBmb3IgWyBwcm9iZSwgbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgIEBlcSAoIM6pZnN0cl8yMDAgPSAtPiBmZiBwcm9iZSApLCBtYXRjaGVyXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGZvciBbIHByb2JlLCBtYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgQGVxICggzqlmc3RyXzIwMSA9IC0+IGZcIiN7cHJvYmV9Ol8+MTUsLjNmLzE7XCIgKSwgbWF0Y2hlclxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBhbnNpX2VzY2FwZXNfYW5kX3dpZHRoczpcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYW5zaV9lc2NhcGVzX2RvbnRfY291bnRfZm9yX3dpZHRoczogLT5cbiAgICAgIHsgZlxuICAgICAgICBuZXdfZnRhZ1xuICAgICAgICBfZGVmYXVsdF9sb2NhbGVcbiAgICAgICAgX2QzX2Zvcm1hdFxuICAgICAgICBfbG9jYWxlX2NmZ19mcm9tX2JjcDQ3XG4gICAgICAgIF9sb2NhbGVfY2ZnX2Zyb21faGludHNcbiAgICAgICAgX2hpbnRfYXNfbG9jYWxlX2NmZyAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4gICAgICB7IHRvX3dpZHRoXG4gICAgICAgIHdpZHRoX29mICAgICAgICAgICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvdG8td2lkdGgnXG4gICAgICB7IGRlZmF1bHQ6IHN0cmlwX2Fuc2kgICAgICAgICAgICAgfSA9IHJlcXVpcmUgJ3N0cmlwLWFuc2knXG4gICAgICB7IGRlZmF1bHQ6IHN0cmluZ193aWR0aCAgICAgICAgICAgfSA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nL25vZGVfbW9kdWxlcy9zdHJpbmctd2lkdGgnXG4gICAgICB7IHJlZFxuICAgICAgICByZXZlcnNlXG4gICAgICAgIGJvbGQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA9IEdVWS50cm1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgU0ZNT0RVTEVTX2RldiA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbiAgICAgICAgeyBhbnNpX2NvbG9yc19hbmRfZWZmZWN0czogQywgfSA9IFNGTU9EVUxFU19kZXYucmVxdWlyZV9hbnNpX2NvbG9yc19hbmRfZWZmZWN0cygpXG4gICAgICAgIEBlcSAoIM6pZnN0cl8yMDIgPSAtPiAgICAgICAgIHdpZHRoX29mIEMucmVkICsgJ2FiYycgKyBDLmRlZmF1bHQgICAgICAgICAgICksIDNcbiAgICAgICAgQGVxICggzqlmc3RyXzIwMyA9IC0+ICAgICBzdHJpbmdfd2lkdGggQy5yZWQgKyAnYWJjJyArIEMuZGVmYXVsdCAgICAgICAgICAgKSwgM1xuICAgICAgICBAZXEgKCDOqWZzdHJfMjA0ID0gLT4gICAgICAgICB3aWR0aF9vZiBDLnJlZCArIEMuaXRhbGljICsgQy5ib2xkICsgJ2FiYycgKyBDLmJvbGQwICsgQy5pdGFsaWMwICsgQy5kZWZhdWx0ICAgICAgICAgICApLCAzXG4gICAgICAgIEBlcSAoIM6pZnN0cl8yMDUgPSAtPiAgICAgc3RyaW5nX3dpZHRoIEMucmVkICsgQy5pdGFsaWMgKyBDLmJvbGQgKyAnYWJjJyArIEMuYm9sZDAgKyBDLml0YWxpYzAgKyBDLmRlZmF1bHQgICAgICAgICAgICksIDNcbiAgICAgICAgIyMjXG50by13aWR0aDpcbiAgICBcInN0cmluZy13aWR0aFwiOiBcIjcuMi4wXCIsXG4gICAgXCJ3Y3N0cmluZ1wiOiBcIl4yLjEuMVwiXG5lZmZzdHJpbmc6XG4gICAgXCJzdHJpbmctd2lkdGhcIjogXCJeNy4yLjBcIlxuXG5cbiAgICAgICAgIyMjXG4gICAgICAgIGFuc2lfbWF0Y2hlciAgPSAvKCg/OlxceDFiXFxbW15tXSttKSspL2dcbiAgICAgICAgc2VnbWVudGVyICAgICA9IG5ldyBJbnRsLlNlZ21lbnRlcigpXG4gICAgICAgIHNwbGl0X2ludG9fdmlzdWFsX2dseXBocyA9ICggdGV4dCApIC0+ICggZC5zZWdtZW50IGZvciBkIGZyb20gc2VnbWVudGVyLnNlZ21lbnQgdGV4dCApXG4gICAgICAgIGRlYnVnICfOqWZzdHJfMjA2JywgICAgICB3aWR0aF9vZiAgICAgICAgZlwiI3sgcmVkIHJldmVyc2UgYm9sZCAnJyB9XCJcbiAgICAgICAgZGVidWcgJ86pZnN0cl8yMDcnLCAgICAgIHN0cmluZ193aWR0aCAgICBmXCIjeyByZWQgcmV2ZXJzZSBib2xkICcnIH1cIlxuICAgICAgICBkZWJ1ZyAnzqlmc3RyXzIwOCcsICAgICAgICAgICAgICAgICAgICAgIGZcIlxceDFiW21BXCJcbiAgICAgICAgZGVidWcgJ86pZnN0cl8yMDknLCAgICAgICAgICAgICAgICAgICAgICBmXCJcXHgxYls0NW1BXCJcbiAgICAgICAgZGVidWcgJ86pZnN0cl8yMTAnLCAgICAgICAgICAgICAgICAgICAgICBmXCJcXHgxYls5OTltQVwiXG4gICAgICAgIGRlYnVnICfOqWZzdHJfMjExJywgICAgICAgICAgICAgICAgICAgICAgZlwiXFx4MWJbOTk5Ojg3Njo3bUFcIlxuICAgICAgICB0ZXh0X3dpdGhfYW5zaV9jb2RlcyA9IFwiQUJDI3sgQy5ibGFjayArIEMuYmdfcmVkICsgQy5ib2xkICsgJ0RFRicgKyBDLmJvbGQwICsgQy5kZWZhdWx0ICsgQy5iZ19kZWZhdWx0IH1YWVpcIlxuICAgICAgICBkZWJ1ZyAnzqlmc3RyXzIxMicsICAgICAgICAgICAgICAgICAgICB0ZXh0X3dpdGhfYW5zaV9jb2Rlc1xuICAgICAgICAjIGRlYnVnICfOqWZzdHJfMjEzJywgKCBkLnNlZ21lbnQgZm9yIGQgZnJvbSBzZWdtZW50ZXIuc2VnbWVudCAgdGV4dF93aXRoX2Fuc2lfY29kZXMgKVxuICAgICAgICBkZWJ1ZyAnzqlmc3RyXzIxNCcsIHJwciAgICAgICAgICAgICAgICB0ZXh0X3dpdGhfYW5zaV9jb2Rlc1xuICAgICAgICBkZWJ1ZyAnzqlmc3RyXzIxNScsIHdpZHRoX29mICAgICAgICAgICB0ZXh0X3dpdGhfYW5zaV9jb2Rlc1xuICAgICAgICBkZWJ1ZyAnzqlmc3RyXzIxNicsIHN0cmluZ193aWR0aCAgICAgICB0ZXh0X3dpdGhfYW5zaV9jb2Rlc1xuICAgICAgICBkZWJ1ZyAnzqlmc3RyXzIxNycsIHJwciBzdHJpcF9hbnNpICAgICB0ZXh0X3dpdGhfYW5zaV9jb2Rlc1xuICAgICAgICB1cmdlICfOqWZzdHJfMjE4JywgZCBmb3IgZCBmcm9tICAgICAgICB0ZXh0X3dpdGhfYW5zaV9jb2Rlcy5tYXRjaEFsbCBhbnNpX21hdGNoZXJcbiAgICAgICAgZGVidWcgJ86pZnN0cl8yMTknLCAgICAgICAgICAgICAgICAgICAgdGV4dF93aXRoX2Fuc2lfY29kZXMucmVwbGFjZSAgYW5zaV9tYXRjaGVyLCAnLidcbiAgICAgICAgY2h1bmtpZnkgPSAoIHRleHQgKSAtPlxuICAgICAgICAgIGNodW5rcyAgICAgICAgICA9IFtdXG4gICAgICAgICAgd2lkdGggICAgICAgICAgID0gMFxuICAgICAgICAgIGhhc19hbnNpICAgICAgICA9IGZhbHNlXG4gICAgICAgICAgY2h1bmtfaGFzX2Fuc2kgID0gdHJ1ZVxuICAgICAgICAgICMjIyBUQUlOVCBtaWdodCBhcyB3ZWxsIHJldHVybiBhbiBlbXB0eSBsaXN0IG9mIGNodW5rcyAjIyNcbiAgICAgICAgICBpZiB0ZXh0IGlzICcnXG4gICAgICAgICAgICByZXR1cm4geyBoYXNfYW5zaSwgd2lkdGgsIGNodW5rczogWyB7IGhhc19hbnNpLCB3aWR0aCwgY2h1bms6ICcnLCB9LCBdLCB9XG4gICAgICAgICAgZm9yIGNodW5rIGluIHRleHQuc3BsaXQgYW5zaV9tYXRjaGVyXG4gICAgICAgICAgICBjaHVua19oYXNfYW5zaSAgICA9IG5vdCBjaHVua19oYXNfYW5zaVxuICAgICAgICAgICAgaGFzX2Fuc2kgICAgICAgIG9yPSBjaHVua19oYXNfYW5zaVxuICAgICAgICAgICAgY29udGludWUgaWYgY2h1bmsgaXMgJydcbiAgICAgICAgICAgIGNodW5rX3dpZHRoICAgICAgID0gaWYgaGFzX2Fuc2kgdGhlbiAwIGVsc2Ugc3RyaW5nX3dpZHRoIGNodW5rXG4gICAgICAgICAgICB3aWR0aCAgICAgICAgICAgICs9IGNodW5rX3dpZHRoXG4gICAgICAgICAgICBjaHVua3MucHVzaCB7IGhhc19hbnNpOiBjaHVua19oYXNfYW5zaSwgd2lkdGg6IGNodW5rX3dpZHRoLCBjaHVuaywgfVxuICAgICAgICAgIHJldHVybiB7IGhhc19hbnNpLCB3aWR0aCwgY2h1bmtzLCB9XG4gICAgICAgICAgIyBbU3ltYm9sLml0ZXJhdG9yXTogKCAtPiBkIGZvciBkIGluIGNodW5rcyApXG4gICAgICAgIGRvID0+XG4gICAgICAgICAgZWNobyAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICAgICAgICAgIHRleHQgPSB0ZXh0X3dpdGhfYW5zaV9jb2Rlc1xuICAgICAgICAgIHVyZ2UgJ86pZnN0cl8yMjAnLCAgICAgICAgICAgICAgICBjaHVua2lmeSB0ZXh0XG4gICAgICAgICAgaW5mbyAnzqlmc3RyXzIyMScsIGQgZm9yIGQgZnJvbSAoIGNodW5raWZ5IHRleHQgKS5jaHVua3NcbiAgICAgICAgZG8gPT5cbiAgICAgICAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICAgICAgdGV4dCA9ICdBQkNERUZYWVonXG4gICAgICAgICAgdXJnZSAnzqlmc3RyXzIyMicsICAgICAgICAgICAgICAgIGNodW5raWZ5IHRleHRcbiAgICAgICAgICBpbmZvICfOqWZzdHJfMjIzJywgZCBmb3IgZCBmcm9tICggY2h1bmtpZnkgdGV4dCApLmNodW5rc1xuICAgICAgICBkbyA9PlxuICAgICAgICAgIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAgICAgICB0ZXh0ID0gXCIjeyBDLmJsYWNrICsgQy5iZ19yZWQgKyBDLmJvbGQgKyBDLmJvbGQwICsgQy5kZWZhdWx0ICsgQy5iZ19kZWZhdWx0IH1cIlxuICAgICAgICAgIHVyZ2UgJ86pZnN0cl8yMjQnLCAgICAgICAgICAgICAgICBjaHVua2lmeSB0ZXh0XG4gICAgICAgICAgaW5mbyAnzqlmc3RyXzIyNScsIGQgZm9yIGQgZnJvbSAoIGNodW5raWZ5IHRleHQgKS5jaHVua3NcbiAgICAgICAgZG8gPT5cbiAgICAgICAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICAgICAgdGV4dCA9ICcnXG4gICAgICAgICAgdXJnZSAnzqlmc3RyXzIyNicsICAgICAgICAgICAgICAgIGNodW5raWZ5IHRleHRcbiAgICAgICAgICBpbmZvICfOqWZzdHJfMjI3JywgZCBmb3IgZCBmcm9tICggY2h1bmtpZnkgdGV4dCApLmNodW5rc1xuICAgICAgICBwcm9jZXNzLmV4aXQgMTExXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pZnN0cl8yMjggPSAtPiAgICAgICAgIHdpZHRoX29mICAgICAgICAgICAgICAgICAgJ2FiYycgICAgICAgICAgICApLCAzXG4gICAgICBAZXEgKCDOqWZzdHJfMjI5ID0gLT4gICAgICAgICB3aWR0aF9vZiByZWQgICAgICAgICAgICAgICdhYmMnICAgICAgICAgICAgKSwgM1xuICAgICAgQGVxICggzqlmc3RyXzIzMCA9IC0+ICAgICAgICAgd2lkdGhfb2YgcmV2ZXJzZSAgICAgICAgICAnYWJjJyAgICAgICAgICAgICksIDNcbiAgICAgIEBlcSAoIM6pZnN0cl8yMzEgPSAtPiAgICAgICAgIHdpZHRoX29mIGJvbGQgICAgICAgICAgICAgJ2FiYycgICAgICAgICAgICApLCAzXG4gICAgICBAZXEgKCDOqWZzdHJfMjMyID0gLT4gICAgICAgICB3aWR0aF9vZiByZWQgcmV2ZXJzZSBib2xkICdhYmMnICAgICAgICAgICAgKSwgM1xuICAgICAgQGVxICggzqlmc3RyXzIzMyA9IC0+ICAgICBzdHJpbmdfd2lkdGggICAgICAgICAgICAgICAgICAnYWJjJyAgICAgICAgICAgICksIDNcbiAgICAgIEBlcSAoIM6pZnN0cl8yMzQgPSAtPiAgICAgc3RyaW5nX3dpZHRoIHJlZCAgICAgICAgICAgICAgJ2FiYycgICAgICAgICAgICApLCAzXG4gICAgICBAZXEgKCDOqWZzdHJfMjM1ID0gLT4gICAgIHN0cmluZ193aWR0aCByZXZlcnNlICAgICAgICAgICdhYmMnICAgICAgICAgICAgKSwgM1xuICAgICAgQGVxICggzqlmc3RyXzIzNiA9IC0+ICAgICBzdHJpbmdfd2lkdGggYm9sZCAgICAgICAgICAgICAnYWJjJyAgICAgICAgICAgICksIDNcbiAgICAgIEBlcSAoIM6pZnN0cl8yMzcgPSAtPiAgICAgc3RyaW5nX3dpZHRoIHJlZCByZXZlcnNlIGJvbGQgJ2FiYycgICAgICAgICAgICApLCAzXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pZnN0cl8yMzggPSAtPiAgICAgICAgICAgIGZcIlsjeyAgICAgICAgICAgICAgICAgICdhYmMnIH06PDIwYztdXCIgICksICdbYWJjICAgICAgICAgICAgICAgICBdJ1xuICAgICAgQGVxICggzqlmc3RyXzIzOSA9IC0+IHN0cmlwX2Fuc2kgZlwiWyN7IHJlZCAgICAgICAgICAgICAgJ2FiYycgfTo8MjBjO11cIiAgKSwgJ1thYmMgICAgICAgICAgICAgICAgIF0nXG4gICAgICBAZXEgKCDOqWZzdHJfMjQwID0gLT4gc3RyaXBfYW5zaSBmXCJbI3sgcmV2ZXJzZSAgICAgICAgICAnYWJjJyB9OjwyMGM7XVwiICApLCAnW2FiYyAgICAgICAgICAgICAgICAgXSdcbiAgICAgIEBlcSAoIM6pZnN0cl8yNDEgPSAtPiBzdHJpcF9hbnNpIGZcIlsjeyBib2xkICAgICAgICAgICAgICdhYmMnIH06PDIwYztdXCIgICksICdbYWJjICAgICAgICAgICAgICAgICBdJ1xuICAgICAgQGVxICggzqlmc3RyXzI0MiA9IC0+IHN0cmlwX2Fuc2kgZlwiWyN7IHJlZCByZXZlcnNlIGJvbGQgJ2FiYycgfTo8MjBjO11cIiAgKSwgJ1thYmMgICAgICAgICAgICAgICAgIF0nXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pZnN0cl8yNDMgPSAtPiAgICAgICAgICAgIGZcIlsjeyAgICAgICAgICAgICAgICAgICdhYmMnIH06PjIwYztdXCIgICksICdbICAgICAgICAgICAgICAgICBhYmNdJ1xuICAgICAgQGVxICggzqlmc3RyXzI0NCA9IC0+IHN0cmlwX2Fuc2kgZlwiWyN7IHJlZCAgICAgICAgICAgICAgJ2FiYycgfTo+MjBjO11cIiAgKSwgJ1sgICAgICAgICAgICAgICAgIGFiY10nXG4gICAgICBAZXEgKCDOqWZzdHJfMjQ1ID0gLT4gc3RyaXBfYW5zaSBmXCJbI3sgcmV2ZXJzZSAgICAgICAgICAnYWJjJyB9Oj4yMGM7XVwiICApLCAnWyAgICAgICAgICAgICAgICAgYWJjXSdcbiAgICAgIEBlcSAoIM6pZnN0cl8yNDYgPSAtPiBzdHJpcF9hbnNpIGZcIlsjeyBib2xkICAgICAgICAgICAgICdhYmMnIH06PjIwYztdXCIgICksICdbICAgICAgICAgICAgICAgICBhYmNdJ1xuICAgICAgQGVxICggzqlmc3RyXzI0NyA9IC0+IHN0cmlwX2Fuc2kgZlwiWyN7IHJlZCByZXZlcnNlIGJvbGQgJ2FiYycgfTo+MjBjO11cIiAgKSwgJ1sgICAgICAgICAgICAgICAgIGFiY10nXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pZnN0cl8yNDggPSAtPiAgICAgICAgICAgIGZcIlsjeyAgICAgICAgICAgICAgICAgICdhYmMnIH06XjIwYztdXCIgICksICdbICAgICAgICBhYmMgICAgICAgICBdJ1xuICAgICAgQGVxICggzqlmc3RyXzI0OSA9IC0+IHN0cmlwX2Fuc2kgZlwiWyN7IHJlZCAgICAgICAgICAgICAgJ2FiYycgfTpeMjBjO11cIiAgKSwgJ1sgICAgICAgIGFiYyAgICAgICAgIF0nXG4gICAgICBAZXEgKCDOqWZzdHJfMjUwID0gLT4gc3RyaXBfYW5zaSBmXCJbI3sgcmV2ZXJzZSAgICAgICAgICAnYWJjJyB9Ol4yMGM7XVwiICApLCAnWyAgICAgICAgYWJjICAgICAgICAgXSdcbiAgICAgIEBlcSAoIM6pZnN0cl8yNTEgPSAtPiBzdHJpcF9hbnNpIGZcIlsjeyBib2xkICAgICAgICAgICAgICdhYmMnIH06XjIwYztdXCIgICksICdbICAgICAgICBhYmMgICAgICAgICBdJ1xuICAgICAgQGVxICggzqlmc3RyXzI1MiA9IC0+IHN0cmlwX2Fuc2kgZlwiWyN7IHJlZCByZXZlcnNlIGJvbGQgJ2FiYycgfTpeMjBjO11cIiAgKSwgJ1sgICAgICAgIGFiYyAgICAgICAgIF0nXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBlcSAoIM6pZnN0cl8yNTMgPSAtPiAgICAgICAgICAgIGZcIlsjeyAgICAgICAgICAgICAgICAgICdhYmMnIH06PTIwYztdXCIgICksICdbICAgICAgICAgICAgICAgICBhYmNdJ1xuICAgICAgIyBAZXEgKCDOqWZzdHJfMjU0ID0gLT4gc3RyaXBfYW5zaSBmXCJbI3sgcmVkICAgICAgICAgICAgICAnYWJjJyB9Oj0yMGM7XVwiICApLCAnWyAgICAgICAgYWJjICAgICAgICAgXSdcbiAgICAgICMgQGVxICggzqlmc3RyXzI1NSA9IC0+IHN0cmlwX2Fuc2kgZlwiWyN7IHJldmVyc2UgICAgICAgICAgJ2FiYycgfTo9MjBjO11cIiAgKSwgJ1sgICAgICAgIGFiYyAgICAgICAgIF0nXG4gICAgICAjIEBlcSAoIM6pZnN0cl8yNTYgPSAtPiBzdHJpcF9hbnNpIGZcIlsjeyBib2xkICAgICAgICAgICAgICdhYmMnIH06PTIwYztdXCIgICksICdbICAgICAgICBhYmMgICAgICAgICBdJ1xuICAgICAgIyBAZXEgKCDOqWZzdHJfMjU3ID0gLT4gc3RyaXBfYW5zaSBmXCJbI3sgcmVkIHJldmVyc2UgYm9sZCAnYWJjJyB9Oj0yMGM7XVwiICApLCAnWyAgICAgICAgYWJjICAgICAgICAgXSdcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AZnV0dXJlX2ludGVydHlwZV90YXNrcyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoYW5kbGVfbm9ubnVtZXJpY192YWx1ZXM6IC0+XG4gICAgeyBmXG4gICAgICBuZXdfZnRhZ1xuICAgICAgX2RlZmF1bHRfbG9jYWxlXG4gICAgICBfZDNfZm9ybWF0XG4gICAgICBfbG9jYWxlX2NmZ19mcm9tX2JjcDQ3XG4gICAgICBfbG9jYWxlX2NmZ19mcm9tX2hpbnRzXG4gICAgICBfaGludF9hc19sb2NhbGVfY2ZnICAgICAgICAgICAgICB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWZzdHJfMjU4ID0gLT4gdXJnZSAnzqlmc3RyXzI1OScsIHJwciBmXCJkID0gI3tcImhlbG9cIn06NjAuNDBmL2s7bVwiICksIG51bGxcbiAgICBAZXEgKCDOqWZzdHJfMjYwID0gLT4gdXJnZSAnzqlmc3RyXzI2MScsIHJwciBmXCJkID0gI3t0cnVlfTo2MC40MGYvazttXCIgKSwgbnVsbFxuICAgICMgQGVxICggzqlmc3RyXzI2MiA9IC0+IHVyZ2UgJ86pZnN0cl8yNjMnLCBycHIgZlwiZCA9ICN7MTIzNDU2Nzg5bn06NjAuNDBmL2s7bVwiICksIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtbyA9XG4gIFJFQURNRTogLT5cbiAgICB7IGYsIG5ld19mdGFnLCBfZDNfZm9ybWF0LCB9ID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4gICAgZWNobygpXG4gICAgZG8gPT5cbiAgICAgICMgaW5mbyAnzqlmc3RyXzI2NCcsIGZcIuKAlOKAlCN7MTIzNH06JCMyMHg74oCU4oCUXCJcbiAgICAgIGluZm8gJ86pZnN0cl8yNjUnLCBmXCLigJTigJQjezEyMzR9Ojs+MjA74oCU4oCUXCJcbiAgICAgIGluZm8gJ86pZnN0cl8yNjYnLCBmXCLigJTigJQjezEyMzR9OiM+MjAuM2U74oCU4oCUXCJcbiAgICAgIGluZm8gJ86pZnN0cl8yNjcnLCBmXCLigJTigJQjezEyMzR9OiM+MjAuM2Y74oCU4oCUXCJcbiAgICAgIGluZm8gJ86pZnN0cl8yNjgnLCBmXCLigJTigJQjezEyMzR9OiM+MjAuM3M74oCU4oCUXCJcbiAgICAgIGluZm8gJ86pZnN0cl8yNjknLCBmXCLigJTigJQjezEyMzR9OiM+MjAuM2474oCU4oCUXCJcbiAgICAgIGluZm8gJ86pZnN0cl8yNzAnLCBmXCLigJTigJQje0luZmluaXR5fTojPjIwLjNuO+KAlOKAlFwiXG4gICAgZG8gPT5cbiAgICAgIGphX2pwX2NmZyAgICAgPSB7XG4gICAgICAgIG51bWVyYWxzOiBbICfjgIcnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nLCAn5LiDJywgJ+WFqycsICfkuZ0nLCBdLCB9XG4gICAgICBmX2VuID0gbmV3X2Z0YWcgJ2VuLUdCJ1xuICAgICAgZl9qYSA9IG5ld19mdGFnICdqYS1KUCcsIGphX2pwX2NmZ1xuICAgICAgY29uc29sZS5sb2cgZl9lblwiI3snQWxpY2UnfToqPDE1YzsgaXMgaW4gI3snTG9uZG9uJ306Ll4xMmM7IGFuZCBoYXMgI3sxMjM0fTpfPiQyMiwuMmY7IGluIHRoZWlyIHBvY2tldC5cIlxuICAgICAgY29uc29sZS5sb2cgZl9lblwiI3snQm9iJ306KjwxNWM7IGlzIGluICN7J0xvbmRvbid9Oi5eMTJjOyBhbmQgaGFzICN7NDU2NzguOTN9Ol8+JDIyLC4yZjsgaW4gdGhlaXIgcG9ja2V0LlwiXG4gICAgICBjb25zb2xlLmxvZyBmX2phXCIjeyfjgqLjg6rjgrnjgZXjgpMnfToqPDE1YzsgaXMgaW4gI3sn5YCr5pWmJ306Ll4xMmM7IGFuZCBoYXMgI3sxMjM0fTpfPiQyMiwuMmY7IGluIHRoZWlyIHBvY2tldC5cIlxuICAgICAgY29uc29sZS5sb2cgZl9qYVwiI3sn44Oc44OW44GV44KTJ306KjwxNWM7IGlzIGluICN7J+WAq+aVpid9Oi5eMTJjOyBhbmQgaGFzICN7NDU2NzguOTN9Ol8+JDIyLC4yZjsgaW4gdGhlaXIgcG9ja2V0LlwiXG4gICAgICByZXR1cm4gbnVsbFxuICAgIGRvID0+XG4gICAgICB6aF90d19jZmcgICAgID0ge1xuICAgICAgICBjdXJyZW5jeTogWyAn5paw6Ie65bmjJywgJycsIF0sXG4gICAgICAgICMgbnVtZXJhbHM6IFsgJ+OAhycsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrScsICfkuIMnLCAn5YWrJywgJ+S5nScsIF0sXG4gICAgICAgIH1cbiAgICAgIGZfZW4gPSBuZXdfZnRhZyAnZW4tR0InXG4gICAgICBmX3poID0gbmV3X2Z0YWcgJ3poLUNOJywgemhfdHdfY2ZnXG4gICAgICBjb25zb2xlLmxvZyBmX2VuXCIjey05ODc2NS40M306wrc+JDIwLC4yZjtcIlxuICAgICAgY29uc29sZS5sb2cgZl96aFwiI3stOTg3NjUuNDN9OsK3PiQyMCwuMmY7XCJcbiAgICAgIGNvbnNvbGUubG9nIGZfZW5cIiN7LTk4NzY1LjQzfTrCtz0kMjAsLjJmO1wiXG4gICAgICBjb25zb2xlLmxvZyBmX3poXCIjey05ODc2NS40M306wrc9JDIwLC4yZjtcIlxuICAgICAgcmV0dXJuIG51bGxcbiAgICBlY2hvKClcbiAgICBkbyA9PlxuICAgICAgamFfanBfY2ZnICAgICA9IHtcbiAgICAgICAgbnVtZXJhbHM6IFsgJ+OAhycsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrScsICfkuIMnLCAn5YWrJywgJ+S5nScsIF0sIH1cbiAgICAgIGZfZW4gPSBuZXdfZnRhZyAnZW4tR0InLCAgICAgICAgICAgIHsgZnVsbHdpZHRoOiBmYWxzZSwgfVxuICAgICAgZl9qYSA9IG5ld19mdGFnICdqYS1KUCcsIGphX2pwX2NmZywgeyBmdWxsd2lkdGg6IGZhbHNlLCB9XG4gICAgICBjb25zb2xlLmxvZyBmX2VuXCIjeydBbGljZSd9Oio8MTVjOyBpcyBpbiAjeydMb25kb24nfTouXjEyYzsgYW5kIGhhcyAjezEyMzR9Ol8+JDIyLC4yZjsgaW4gdGhlaXIgcG9ja2V0LlwiXG4gICAgICBjb25zb2xlLmxvZyBmX2VuXCIjeydCb2InfToqPDE1YzsgaXMgaW4gI3snTG9uZG9uJ306Ll4xMmM7IGFuZCBoYXMgI3s0NTY3OC45M306Xz4kMjIsLjJmOyBpbiB0aGVpciBwb2NrZXQuXCJcbiAgICAgIGNvbnNvbGUubG9nIGZfamFcIiN7J+OCouODquOCueOBleOCkyd9Oio8MTVjOyBpcyBpbiAjeyflgKvmlaYnfTouXjEyYzsgYW5kIGhhcyAjezEyMzR9Ol8+JDIyLC4yZjsgaW4gdGhlaXIgcG9ja2V0LlwiXG4gICAgICBjb25zb2xlLmxvZyBmX2phXCIjeyfjg5zjg5bjgZXjgpMnfToqPDE1YzsgaXMgaW4gI3sn5YCr5pWmJ306Ll4xMmM7IGFuZCBoYXMgI3s0NTY3OC45M306Xz4kMjIsLjJmOyBpbiB0aGVpciBwb2NrZXQuXCJcbiAgICAgIHJldHVybiBudWxsXG4gICAgZG8gPT5cbiAgICAgIHpoX3R3X2NmZyAgICAgPSB7XG4gICAgICAgIGN1cnJlbmN5OiBbICfmlrDoh7rluaMnLCAnJywgXSxcbiAgICAgICAgIyBudW1lcmFsczogWyAn44CHJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJywgJ+S4gycsICflhasnLCAn5LmdJywgXSxcbiAgICAgICAgfVxuICAgICAgZl9lbiA9IG5ld19mdGFnICdlbi1HQicsICAgICAgICAgICAgeyBmdWxsd2lkdGg6IGZhbHNlLCB9XG4gICAgICBmX3poID0gbmV3X2Z0YWcgJ3poLUNOJywgemhfdHdfY2ZnLCB7IGZ1bGx3aWR0aDogZmFsc2UsIH1cbiAgICAgIGNvbnNvbGUubG9nIGZfZW5cIiN7LTk4NzY1LjQzfTrCtz4kMjAsLjJmO1wiXG4gICAgICBjb25zb2xlLmxvZyBmX3poXCIjey05ODc2NS40M306wrc+JDIwLC4yZjtcIlxuICAgICAgY29uc29sZS5sb2cgZl9lblwiI3stOTg3NjUuNDN9OsK3PSQyMCwuMmY7XCJcbiAgICAgIGNvbnNvbGUubG9nIGZfemhcIiN7LTk4NzY1LjQzfTrCtz0kMjAsLjJmO1wiXG4gICAgICByZXR1cm4gbnVsbFxuICAgIGVjaG8oKVxuICAgIGRvID0+XG4gICAgICB6aF90d19jZmcgICAgID0ge1xuICAgICAgICBjdXJyZW5jeTogWyAnTlQgJywgJyAkJywgXSxcbiAgICAgICAgbnVtZXJhbHM6ICAgWyAnKDApJywgJygxKScsICcoMiknLCAnKDMpJywgJyg0KScsICcoNSknLCAnKDYpJywgJyg3KScsICcoOCknLCAnKDkpJywgXVxuICAgICAgICB9XG4gICAgICBmX2VuID0gbmV3X2Z0YWcgJ2VuLUdCJywgICAgICAgICAgICB7IGZ1bGx3aWR0aDogdHJ1ZSwgfVxuICAgICAgZl96aCA9IG5ld19mdGFnICd6aC1DTicsIHpoX3R3X2NmZywgeyBmdWxsd2lkdGg6IHRydWUsIH1cbiAgICAgIGNvbnNvbGUubG9nIGZfZW5cIiN7LTk4NzY1LjQzfTrCtz4kNTAsLjJmO1wiXG4gICAgICBjb25zb2xlLmxvZyBmX3poXCIjey05ODc2NS40M306wrc+JDUwLC4yZjtcIlxuICAgICAgY29uc29sZS5sb2cgZl9lblwiI3stOTg3NjUuNDN9OsK3PSQ1MCwuMmY7XCJcbiAgICAgIGNvbnNvbGUubG9nIGZfemhcIiN7LTk4NzY1LjQzfTrCtz0kNTAsLjJmO1wiXG4gICAgICByZXR1cm4gbnVsbFxuICAgIGRvID0+XG4gICAgICB6aF90d19jZmcgICAgID0ge1xuICAgICAgICBjdXJyZW5jeTogWyAnTlQgJywgJyAkJywgXSxcbiAgICAgICAgbnVtZXJhbHM6ICAgWyAnKDApJywgJygxKScsICcoMiknLCAnKDMpJywgJyg0KScsICcoNSknLCAnKDYpJywgJyg3KScsICcoOCknLCAnKDkpJywgXVxuICAgICAgICB9XG4gICAgICBmX2VuID0gbmV3X2Z0YWcgJ2VuLUdCJywgICAgICAgICAgICB7IGZ1bGx3aWR0aDogZmFsc2UsIH1cbiAgICAgIGZfemggPSBuZXdfZnRhZyAnemgtQ04nLCB6aF90d19jZmcsIHsgZnVsbHdpZHRoOiBmYWxzZSwgfVxuICAgICAgY29uc29sZS5sb2cgZl9lblwiI3stOTg3NjUuNDN9OsK3PiQ1MCwuMmY7XCJcbiAgICAgIGNvbnNvbGUubG9nIGZfemhcIiN7LTk4NzY1LjQzfTrCtz4kNTAsLjJmO1wiXG4gICAgICBjb25zb2xlLmxvZyBmX2VuXCIjey05ODc2NS40M306wrc9JDUwLC4yZjtcIlxuICAgICAgY29uc29sZS5sb2cgZl96aFwiI3stOTg3NjUuNDN9OsK3PSQ1MCwuMmY7XCJcbiAgICAgIHJldHVybiBudWxsXG4gICAgZWNobygpXG4gICAgZG8gPT5cbiAgICAgICMgZl9lbiA9IG5ld19mdGFnICdlbi1HQicsICAgICAgICAgICAgeyBmdWxsd2lkdGg6IGZhbHNlLCB9XG4gICAgICAjIGNvbnNvbGUubG9nIGZfZW5cIiN7LTk4NzY1LjQzfTrCtz4kNTAsLjJmO1wiXG4gICAgICBkbyA9PlxuICAgICAgICBlY2hvKClcbiAgICAgICAgZmYgPSBfZDNfZm9ybWF0LmZvcm1hdFByZWZpeCBcIl8+MTUsLjN+XCIsIDFlLTZcbiAgICAgICAgaW5mbyAnzqlmc3RyXzI3MScsIGZmIDAuMDAwMDAwNDJcbiAgICAgICAgaW5mbyAnzqlmc3RyXzI3MicsIGZmIDAuMDAwMDA0MlxuICAgICAgICBpbmZvICfOqWZzdHJfMjczJywgZmYgMC4wMDAwNDJcbiAgICAgICAgaW5mbyAnzqlmc3RyXzI3NCcsIGZmIDAuMDAwNDJcbiAgICAgICAgaW5mbyAnzqlmc3RyXzI3NScsIGZmIDAuMDA0MlxuICAgICAgICBpbmZvICfOqWZzdHJfMjc2JywgZmYgMC4wNDJcbiAgICAgICAgaW5mbyAnzqlmc3RyXzI3NycsIGZmIDAuNDJcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIGRvID0+XG4gICAgICAgIGVjaG8oKVxuICAgICAgICBmZiA9IF9kM19mb3JtYXQuZm9ybWF0UHJlZml4IFwiXz4xNSwuM35zXCIsIDFlLTZcbiAgICAgICAgaW5mbyAnzqlmc3RyXzI3OCcsIGZmIDAuMDAwMDAwNDJcbiAgICAgICAgaW5mbyAnzqlmc3RyXzI3OScsIGZmIDAuMDAwMDA0MlxuICAgICAgICBpbmZvICfOqWZzdHJfMjgwJywgZmYgMC4wMDAwNDJcbiAgICAgICAgaW5mbyAnzqlmc3RyXzI4MScsIGZmIDAuMDAwNDJcbiAgICAgICAgaW5mbyAnzqlmc3RyXzI4MicsIGZmIDAuMDA0MlxuICAgICAgICBpbmZvICfOqWZzdHJfMjgzJywgZmYgMC4wNDJcbiAgICAgICAgaW5mbyAnzqlmc3RyXzI4NCcsIGZmIDAuNDJcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIGRvID0+XG4gICAgICAgIGVjaG8oKVxuICAgICAgICBmZiA9IF9kM19mb3JtYXQuZm9ybWF0UHJlZml4IFwiXz4xNSwuM35mXCIsIDFlLTZcbiAgICAgICAgaW5mbyAnzqlmc3RyXzI4NScsIGZmIDAuMDAwMDAwNDJcbiAgICAgICAgaW5mbyAnzqlmc3RyXzI4NicsIGZmIDAuMDAwMDA0MlxuICAgICAgICBpbmZvICfOqWZzdHJfMjg3JywgZmYgMC4wMDAwNDJcbiAgICAgICAgaW5mbyAnzqlmc3RyXzI4OCcsIGZmIDAuMDAwNDJcbiAgICAgICAgaW5mbyAnzqlmc3RyXzI4OScsIGZmIDAuMDA0MlxuICAgICAgICBpbmZvICfOqWZzdHJfMjkwJywgZmYgMC4wNDJcbiAgICAgICAgaW5mbyAnzqlmc3RyXzI5MScsIGZmIDAuNDJcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIGRvID0+XG4gICAgICAgIGVjaG8oKVxuICAgICAgICBpbmZvICfOqWZzdHJfMjkyJywgZlwiI3swLjAwMDAwMDQyfTpfPjE1LC4zZi/CtTtcIlxuICAgICAgICBpbmZvICfOqWZzdHJfMjkzJywgZlwiI3swLjAwMDAwNDJ9Ol8+MTUsLjNmL8K1O1wiXG4gICAgICAgIGluZm8gJ86pZnN0cl8yOTQnLCBmXCIjezAuMDAwMDQyfTpfPjE1LC4zZi/CtTtcIlxuICAgICAgICBpbmZvICfOqWZzdHJfMjk1JywgZlwiI3swLjAwMDQyfTpfPjE1LC4zZi/CtTtcIlxuICAgICAgICBpbmZvICfOqWZzdHJfMjk2JywgZlwiI3swLjAwNDJ9Ol8+MTUsLjNmL8K1O1wiXG4gICAgICAgIGluZm8gJ86pZnN0cl8yOTcnLCBmXCIjezAuMDQyfTpfPjE1LC4zZi/CtTtcIlxuICAgICAgICBpbmZvICfOqWZzdHJfMjk4JywgZlwiI3swLjQyfTpfPjE1LC4zZi/CtTtcIlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgZG8gPT5cbiAgICAgICAgZWNobygpXG4gICAgICAgIGluZm8gJ86pZnN0cl8yOTknLCBmXCIjeyAxMjMwMDAgICAgfTpfPjksLjNmL2s7bVwiXG4gICAgICAgIGluZm8gJ86pZnN0cl8zMDAnLCBmXCIjeyA3MDAwICAgICAgfTpfPjksLjNmL2s7bVwiXG4gICAgICAgIGluZm8gJ86pZnN0cl8zMDEnLCBmXCIjeyA1MDAgICAgICAgfTpfPjksLjNmL2s7bVwiXG4gICAgICAgIGluZm8gJ86pZnN0cl8zMDInLCBmXCIjeyA5OSAgICAgICAgfTpfPjksLjNmL2s7bVwiXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICBkbyA9PlxuICAgICAgICBlY2hvKClcbiAgICAgICAgZmYgPSBfZDNfZm9ybWF0LmZvcm1hdFByZWZpeCBcIl8+MTUsLjNmXCIsIDFlLTNcbiAgICAgICAgaW5mbyAnzqlmc3RyXzMwMycsIGZmIDAuMDAwODlcbiAgICAgICAgaW5mbyAnzqlmc3RyXzMwNCcsIGZmIDAuMDA4OVxuICAgICAgICBpbmZvICfOqWZzdHJfMzA1JywgZmYgMC4wODlcbiAgICAgICAgaW5mbyAnzqlmc3RyXzMwNicsIGZmIDAuODlcbiAgICAgICAgaW5mbyAnzqlmc3RyXzMwNycsIGZmIDguOVxuICAgICAgICBpbmZvICfOqWZzdHJfMzA4JywgZmYgODlcbiAgICAgICAgaW5mbyAnzqlmc3RyXzMwOScsIGZmIDg5MFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgZG8gPT5cbiAgICAgICAgZWNobygpXG4gICAgICAgIGZmID0gX2QzX2Zvcm1hdC5mb3JtYXRQcmVmaXggXCJfPjE1LC4zZlwiLCAxZS0yXG4gICAgICAgIGluZm8gJ86pZnN0cl8zMTAnLCBmZiAwLjAwMDg5XG4gICAgICAgIGluZm8gJ86pZnN0cl8zMTEnLCBmZiAwLjAwODlcbiAgICAgICAgaW5mbyAnzqlmc3RyXzMxMicsIGZmIDAuMDg5XG4gICAgICAgIGluZm8gJ86pZnN0cl8zMTMnLCBmZiAwLjg5XG4gICAgICAgIGluZm8gJ86pZnN0cl8zMTQnLCBmZiA4LjlcbiAgICAgICAgaW5mbyAnzqlmc3RyXzMxNScsIGZmIDg5XG4gICAgICAgIGluZm8gJ86pZnN0cl8zMTYnLCBmZiA4OTBcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIGRvID0+XG4gICAgICAgIGVjaG8oKVxuICAgICAgICBmZiA9IF9kM19mb3JtYXQuZm9ybWF0UHJlZml4IFwiXz4xNSwuM2ZcIiwgMWUtMVxuICAgICAgICBpbmZvICfOqWZzdHJfMzE3JywgZmYgMC4wMDA4OVxuICAgICAgICBpbmZvICfOqWZzdHJfMzE4JywgZmYgMC4wMDg5XG4gICAgICAgIGluZm8gJ86pZnN0cl8zMTknLCBmZiAwLjA4OVxuICAgICAgICBpbmZvICfOqWZzdHJfMzIwJywgZmYgMC44OVxuICAgICAgICBpbmZvICfOqWZzdHJfMzIxJywgZmYgOC45XG4gICAgICAgIGluZm8gJ86pZnN0cl8zMjInLCBmZiA4OVxuICAgICAgICBpbmZvICfOqWZzdHJfMzIzJywgZmYgODkwXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICBkbyA9PlxuICAgICAgICBlY2hvKClcbiAgICAgICAgZmYgPSBfZDNfZm9ybWF0LmZvcm1hdFByZWZpeCBcIl8+MTUsLjNmXCIsIDFlMFxuICAgICAgICBzY2FsZSA9IDEgLyAxZS0yXG4gICAgICAgIGluZm8gJ86pZnN0cl8zMjQnLCBmZiAwLjAwMDg5ICAqIHNjYWxlXG4gICAgICAgIGluZm8gJ86pZnN0cl8zMjUnLCBmZiAwLjAwODkgICAqIHNjYWxlXG4gICAgICAgIGluZm8gJ86pZnN0cl8zMjYnLCBmZiAwLjA4OSAgICAqIHNjYWxlXG4gICAgICAgIGluZm8gJ86pZnN0cl8zMjcnLCBmZiAwLjg5ICAgICAqIHNjYWxlXG4gICAgICAgIGluZm8gJ86pZnN0cl8zMjgnLCBmZiA4LjkgICAgICAqIHNjYWxlXG4gICAgICAgIGluZm8gJ86pZnN0cl8zMjknLCBmZiA4OSAgICAgICAqIHNjYWxlXG4gICAgICAgIGluZm8gJ86pZnN0cl8zMzAnLCBmZiA4OTAgICAgICAqIHNjYWxlXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgZWNobygpXG4gICAgcmV0dXJuIG51bGxcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGludGxfbnVtYmVyOiAtPlxuICAgIHsgZiwgbmV3X2Z0YWcsIF9kM19mb3JtYXQsIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiAgICB7IHJldmVyc2U6IHJ2cyB9ID0gR1VZLnRybVxuICAgIGRlYnVnICfOqWZzdHJfMzMxJywgMTIzNDU2Nzg5MTIzNDU2Nzg5MVxuICAgIGRlYnVnICfOqWZzdHJfMzMyJywgZlwiI3sxMjM0NTY3ODkxMjM0NTY3ODkxfTo8MzAuM2Y7XCJcbiAgICAjIGRlYnVnICfOqWZzdHJfMzMzJywgZlwiI3sxMjM0NTY3ODkxMjM0NTY3ODkxbn06PDMwLjNmO1wiXG4gICAgZGVidWcgJ86pZnN0cl8zMzQnLCBmXCIjeycxMjM0NTY3ODkxMjM0NTY3ODkxJ306PDMwLjNmO1wiXG4gICAgZG8gPT5cbiAgICAgIGxvY2FsZSA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCAnZW4tVVMnICMsIHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJywgfVxuICAgICAgaGVscCAnzqlmc3RyXzMzNScsIGxvY2FsZS5yZXNvbHZlZE9wdGlvbnMoKVxuICAgICAgdXJnZSAnzqlmc3RyXzMzNicsIGxvY2FsZS5mb3JtYXQgOTg3NjU0MzIxMFxuICAgICAgZm9yIHsgdHlwZSwgdmFsdWUsIH0gaW4gbG9jYWxlLmZvcm1hdFRvUGFydHMgOTg3NjU0MzIxMFxuICAgICAgICBkZWJ1ZyAnzqlmc3RyXzMzNycsICggZlwiI3t0eXBlfToxNWM7XCIgKSwgKCBydnMgcnByIHZhbHVlIClcbiAgICBlY2hvKClcbiAgICBkbyA9PlxuICAgICAgbnVtYmVyICA9IDEyMzQ1Ni43ODlcbiAgICAgIGRlX0RFICAgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQgJ2RlLURFJzsgdXJnZSAnzqlmc3RyXzMzOCcsIHJ2cyBycHIgZGVfREUuZm9ybWF0IG51bWJlclxuICAgICAgZW5fVVMgICA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCAnZW4tVVMnOyB1cmdlICfOqWZzdHJfMzM5JywgcnZzIHJwciBlbl9VUy5mb3JtYXQgbnVtYmVyXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMgWW91IGNhbiBhbHNvIHNwZWNpZnkgYWRkaXRpb25hbCBvcHRpb25zIHN1Y2ggYXMgdGhlIHN0eWxlIG9mIGZvcm1hdHRpbmcgKGRlY2ltYWwsIGN1cnJlbmN5LCBvclxuICAgICMgcGVyY2VudCksIHRoZSBjdXJyZW5jeSB0byB1c2UgaWYgZm9ybWF0dGluZyBhIGN1cnJlbmN5LCBhbmQgdGhlIG51bWJlciBvZiBtaW5pbXVtIGFuZCBtYXhpbXVtIGZyYWN0aW9uXG4gICAgIyBkaWdpdHMuIEZvciBpbnN0YW5jZSwgdG8gZm9ybWF0IGEgbnVtYmVyIGFzIGEgY3VycmVuY3kgaW4gVVMgZG9sbGFyczpcbiAgICBhbW91bnQgID0gNjU0MzIxLjk4NztcbiAgICBkbyA9PlxuICAgICAgbnVtYmVyRm9ybWF0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0ICdlbi1VUycsIHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJywgfVxuICAgICAgaW5mbyAnzqlmc3RyXzM0MCcsIHJ2cyBycHIgbnVtYmVyRm9ybWF0LmZvcm1hdCBhbW91bnRcbiAgICBkbyA9PlxuICAgICAgbnVtYmVyRm9ybWF0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0ICdlbi1VUycsIHsgc3R5bGU6ICdwZXJjZW50JywgY3VycmVuY3k6ICdVU0QnLCB9XG4gICAgICBpbmZvICfOqWZzdHJfMzQxJywgcnZzIHJwciBudW1iZXJGb3JtYXQuZm9ybWF0IGFtb3VudFxuICAgICAgaW5mbyAnzqlmc3RyXzM0MicsIHJ2cyBycHIgbnVtYmVyRm9ybWF0LmZvcm1hdCAwLjc1Njc4OVxuICAgIGRvID0+XG4gICAgICBudW1iZXJGb3JtYXQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQgJ2VuLVVTJywgeyBzdHlsZTogJ3BlcmNlbnQnLCBjdXJyZW5jeTogJ1VTRCcsIG1heGltdW1TaWduaWZpY2FudERpZ2l0czogMiwgfVxuICAgICAgaW5mbyAnzqlmc3RyXzM0MycsIHJ2cyBycHIgbnVtYmVyRm9ybWF0LmZvcm1hdCBhbW91bnRcbiAgICAgIGluZm8gJ86pZnN0cl8zNDQnLCBydnMgcnByIG51bWJlckZvcm1hdC5mb3JtYXQgMC43NTY3ODlcbiAgICBkbyA9PlxuICAgICAgIyB0aGUgbnUgZXh0ZW5zaW9uIGtleSByZXF1ZXN0cyBhIG51bWJlcmluZyBzeXN0ZW0sIGUuZy4gQ2hpbmVzZSBkZWNpbWFsXG4gICAgICBoZWxwICfOqWZzdHJfMzQ1JywgcnZzIHJwciAoIG5ldyBJbnRsLk51bWJlckZvcm1hdCAnemgtSGFucy1DTi11LW51LWhhbmlkZWMnICkuZm9ybWF0IDEyMzQ1Ni43ODlcbiAgICAgIGhlbHAgJ86pZnN0cl8zNDYnLCBydnMgcnByICggbmV3IEludGwuTnVtYmVyRm9ybWF0ICd6aC1IYW5zLUNOLXUtbnUtaGFucycgICAgKS5mb3JtYXQgMTIzNDU2Ljc4OVxuICAgICAgaGVscCAnzqlmc3RyXzM0NycsIHJ2cyBycHIgKCBuZXcgSW50bC5OdW1iZXJGb3JtYXQgJ3poLUhhbnMtQ04tdS1udS1oYW5zZmluJyApLmZvcm1hdCAxMjM0NTYuNzg5XG4gICAgICBoZWxwICfOqWZzdHJfMzQ4JywgcnZzIHJwciAoIG5ldyBJbnRsLk51bWJlckZvcm1hdCAnemgtSGFudC1UVy11LW51LWhhbnQnICAgICkuZm9ybWF0IDEyMzQ1Ni43ODlcbiAgICAgIGhlbHAgJ86pZnN0cl8zNDknLCBydnMgcnByICggbmV3IEludGwuTnVtYmVyRm9ybWF0ICd6aC1IYW50LVRXLXUtbnUtaGFudGZpbicgKS5mb3JtYXQgMTIzNDU2Ljc4OVxuICAgICAgaGVscCAnzqlmc3RyXzM1MCcsIHJ2cyBycHIgKCBuZXcgSW50bC5OdW1iZXJGb3JtYXQgJ3JvbWFuJyApLmZvcm1hdCAxMjM0NTYuNzg5XG4gICAgZG8gPT5cbiAgICAgICMgQWRkaXRpb25hbGx5LCB5b3UgY2FuIHVzZSB0aGUgZm9ybWF0IG1ldGhvZCBvZiBhbiBJbnRsLk51bWJlckZvcm1hdCBpbnN0YW5jZSB0byBmb3JtYXQgYSBudW1iZXJcbiAgICAgICMgYWNjb3JkaW5nIHRvIHRoZSBsb2NhbGUgYW5kIGZvcm1hdHRpbmcgb3B0aW9ucyBvZiB0aGUgb2JqZWN0XG4gICAgICBudW1iZXJGb3JtYXQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQgJ2VuLVVTJ1xuICAgICAgaW5mbyAnzqlmc3RyXzM1MScsIHJ2cyBycHIgbnVtYmVyRm9ybWF0LmZvcm1hdCAxMjM0NTYuNzg5ICMgXCIxMjMsNDU2Ljc4OVwiXG4gICAgcmV0dXJuIG51bGxcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG1hbnRpc3NhX2V4cG9uZW50OiAtPlxuICAgIHsgZiwgbmV3X2Z0YWcsIF9kM19mb3JtYXQsIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiAgICB7IHJldmVyc2U6IHJ2cyB9ID0gR1VZLnRybVxuICAgIGRvID0+XG4gICAgZ2V0X21hbnRpc3NhX2FuZF9leHBvbmVudCA9ICggbnVtICkgLT5cbiAgICAgIGJpdHMgICAgICA9IG51bS50b1N0cmluZyAyXG4gICAgICBzaWduICAgICAgPSBiaXRzIGlzICcxJ1xuICAgICAgZXhwb25lbnQgID0gcGFyc2VJbnQoIGJpdHMuc2xpY2UoMSwgMTIpLCAyKSAtIDEwMjNcbiAgICAgIG1hbnRpc3NhICA9ICcxJyArIGJpdHMuc2xpY2UoMTIpXG4gICAgICByZXR1cm4geyBzaWduLCBleHBvbmVudCwgbWFudGlzc2EsIH1cbiAgICBkID0gMTIzXzQ1Nl83ODkuMTIzNDU2Nzg5XG4gICAgZSA9IGQgKiAxZTE4OyBkZWJ1ZyAnzqlmc3RyXzM1MicsIGZcIiN7ZX06MzQsLjE3O1wiLCBnZXRfbWFudGlzc2FfYW5kX2V4cG9uZW50IGVcbiAgICBlID0gZCAqIDFlMTI7IGRlYnVnICfOqWZzdHJfMzUzJywgZlwiI3tlfTozNCwuMTc7XCIsIGdldF9tYW50aXNzYV9hbmRfZXhwb25lbnQgZVxuICAgIGUgPSBkICogMWUwOTsgZGVidWcgJ86pZnN0cl8zNTQnLCBmXCIje2V9OjM0LC4xNztcIiwgZ2V0X21hbnRpc3NhX2FuZF9leHBvbmVudCBlXG4gICAgZSA9IGQgKiAxZTA2OyBkZWJ1ZyAnzqlmc3RyXzM1NScsIGZcIiN7ZX06MzQsLjE3O1wiLCBnZXRfbWFudGlzc2FfYW5kX2V4cG9uZW50IGVcbiAgICBlID0gZCAqIDFlMDM7IGRlYnVnICfOqWZzdHJfMzU2JywgZlwiI3tlfTozNCwuMTc7XCIsIGdldF9tYW50aXNzYV9hbmRfZXhwb25lbnQgZVxuICAgIGUgPSBkOyAgICAgICAgZGVidWcgJ86pZnN0cl8zNTcnLCBmXCIje2V9OjM0LC4xNztcIiwgZ2V0X21hbnRpc3NhX2FuZF9leHBvbmVudCBlXG4gICAgZSA9IGQgLyAxZTAzOyBkZWJ1ZyAnzqlmc3RyXzM1OCcsIGZcIiN7ZX06MzQsLjE3O1wiLCBnZXRfbWFudGlzc2FfYW5kX2V4cG9uZW50IGVcbiAgICBlID0gZCAvIDFlMDY7IGRlYnVnICfOqWZzdHJfMzU5JywgZlwiI3tlfTozNCwuMTc7XCIsIGdldF9tYW50aXNzYV9hbmRfZXhwb25lbnQgZVxuICAgIGUgPSBkIC8gMWUwOTsgZGVidWcgJ86pZnN0cl8zNjAnLCBmXCIje2V9OjM0LC4xNztcIiwgZ2V0X21hbnRpc3NhX2FuZF9leHBvbmVudCBlXG4gICAgZSA9IGQgLyAxZTEyOyBkZWJ1ZyAnzqlmc3RyXzM2MScsIGZcIiN7ZX06MzQsLjE3O1wiLCBnZXRfbWFudGlzc2FfYW5kX2V4cG9uZW50IGVcbiAgICBlID0gZCAvIDFlMTg7IGRlYnVnICfOqWZzdHJfMzYyJywgZlwiI3tlfTozNCwuMTc7XCIsIGdldF9tYW50aXNzYV9hbmRfZXhwb25lbnQgZVxuICAgIGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCAnZW4tVVMnLCB7XG4gICAgICB1c2VHcm91cGluZzogICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgIyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6ICAgIDQwLFxuICAgICAgIyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6ICAgIDQwLFxuICAgICAgbWluaW11bVNpZ25pZmljYW50RGlnaXRzOiAxNiwgIyBtYXggYWxsb3dlZCB2YWx1ZSBpcyAyMVxuICAgICAgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzOiAxNiwgIyBtYXggYWxsb3dlZCB2YWx1ZSBpcyAyMVxuICAgICAgfVxuICAgIGUgPSBkICogMWUyMDA7IGhlbHAgJ86pZnN0cl8zNjMnLCBmXCIje2Zvcm1hdHRlci5mb3JtYXQgZX06PjYwYztcIi5yZXBsYWNlIC8wL2csICcqJ1xuICAgIGUgPSBkICogMWUxMDA7IGhlbHAgJ86pZnN0cl8zNjQnLCBmXCIje2Zvcm1hdHRlci5mb3JtYXQgZX06PjYwYztcIi5yZXBsYWNlIC8wL2csICcqJ1xuICAgIGUgPSBkICogMWU1MDsgaGVscCAnzqlmc3RyXzM2NScsIGZcIiN7Zm9ybWF0dGVyLmZvcm1hdCBlfTo+NjBjO1wiLnJlcGxhY2UgLzAvZywgJyonXG4gICAgZSA9IGQgKiAxZTQ0OyBoZWxwICfOqWZzdHJfMzY2JywgZlwiI3tmb3JtYXR0ZXIuZm9ybWF0IGV9Oj42MGM7XCIucmVwbGFjZSAvMC9nLCAnKidcbiAgICBlID0gZCAqIDFlNDE7IGhlbHAgJ86pZnN0cl8zNjcnLCBmXCIje2Zvcm1hdHRlci5mb3JtYXQgZX06PjYwYztcIi5yZXBsYWNlIC8wL2csICcqJ1xuICAgIGUgPSBkICogMWUzOTsgaGVscCAnzqlmc3RyXzM2OCcsIGZcIiN7Zm9ybWF0dGVyLmZvcm1hdCBlfTo+NjBjO1wiLnJlcGxhY2UgLzAvZywgJyonXG4gICAgZSA9IGQgKiAxZTM2OyBoZWxwICfOqWZzdHJfMzY5JywgZlwiI3tmb3JtYXR0ZXIuZm9ybWF0IGV9Oj42MGM7XCIucmVwbGFjZSAvMC9nLCAnKidcbiAgICBlID0gZCAqIDFlMzM7IGhlbHAgJ86pZnN0cl8zNzAnLCBmXCIje2Zvcm1hdHRlci5mb3JtYXQgZX06PjYwYztcIi5yZXBsYWNlIC8wL2csICcqJ1xuICAgIGUgPSBkICogMWUzMDsgaGVscCAnzqlmc3RyXzM3MScsIGZcIiN7Zm9ybWF0dGVyLmZvcm1hdCBlfTo+NjBjO1wiLnJlcGxhY2UgLzAvZywgJyonXG4gICAgZSA9IGQgKiAxZTI3OyBoZWxwICfOqWZzdHJfMzcyJywgZlwiI3tmb3JtYXR0ZXIuZm9ybWF0IGV9Oj42MGM7XCIucmVwbGFjZSAvMC9nLCAnKidcbiAgICBlID0gZCAqIDFlMjQ7IGhlbHAgJ86pZnN0cl8zNzMnLCBmXCIje2Zvcm1hdHRlci5mb3JtYXQgZX06PjYwYztcIi5yZXBsYWNlIC8wL2csICcqJ1xuICAgIGUgPSBkICogMWUyMTsgaGVscCAnzqlmc3RyXzM3NCcsIGZcIiN7Zm9ybWF0dGVyLmZvcm1hdCBlfTo+NjBjO1wiLnJlcGxhY2UgLzAvZywgJyonXG4gICAgZSA9IGQgKiAxZTE4OyBoZWxwICfOqWZzdHJfMzc1JywgZlwiI3tmb3JtYXR0ZXIuZm9ybWF0IGV9Oj42MGM7XCIucmVwbGFjZSAvMC9nLCAnKidcbiAgICBlID0gZCAqIDFlMTU7IGhlbHAgJ86pZnN0cl8zNzYnLCBmXCIje2Zvcm1hdHRlci5mb3JtYXQgZX06PjYwYztcIi5yZXBsYWNlIC8wL2csICcqJ1xuICAgIGUgPSBkICogMWUxMjsgaGVscCAnzqlmc3RyXzM3NycsIGZcIiN7Zm9ybWF0dGVyLmZvcm1hdCBlfTo+NjBjO1wiLnJlcGxhY2UgLzAvZywgJyonXG4gICAgZSA9IGQgKiAxZTA5OyBoZWxwICfOqWZzdHJfMzc4JywgZlwiI3tmb3JtYXR0ZXIuZm9ybWF0IGV9Oj42MGM7XCIucmVwbGFjZSAvMC9nLCAnKidcbiAgICBlID0gZCAqIDFlMDY7IGhlbHAgJ86pZnN0cl8zNzknLCBmXCIje2Zvcm1hdHRlci5mb3JtYXQgZX06PjYwYztcIi5yZXBsYWNlIC8wL2csICcqJ1xuICAgIGUgPSBkICogMWUwMzsgaGVscCAnzqlmc3RyXzM4MCcsIGZcIiN7Zm9ybWF0dGVyLmZvcm1hdCBlfTo+NjBjO1wiLnJlcGxhY2UgLzAvZywgJyonXG4gICAgZWNobygpXG4gICAgZSA9IGQ7ICAgICAgICBoZWxwICfOqWZzdHJfMzgxJywgZlwiI3tmb3JtYXR0ZXIuZm9ybWF0IGV9Oj42MGM7XCIucmVwbGFjZSAvMC9nLCAnKidcbiAgICBlY2hvKClcbiAgICBlID0gZCAvIDFlMDM7IGhlbHAgJ86pZnN0cl8zODInLCBmXCIje2Zvcm1hdHRlci5mb3JtYXQgZX06PjYwYztcIi5yZXBsYWNlIC8wL2csICcqJ1xuICAgIGUgPSBkIC8gMWUwNjsgaGVscCAnzqlmc3RyXzM4MycsIGZcIiN7Zm9ybWF0dGVyLmZvcm1hdCBlfTo+NjBjO1wiLnJlcGxhY2UgLzAvZywgJyonXG4gICAgZSA9IGQgLyAxZTA5OyBoZWxwICfOqWZzdHJfMzg0JywgZlwiI3tmb3JtYXR0ZXIuZm9ybWF0IGV9Oj42MGM7XCIucmVwbGFjZSAvMC9nLCAnKidcbiAgICBlID0gZCAvIDFlMTI7IGhlbHAgJ86pZnN0cl8zODUnLCBmXCIje2Zvcm1hdHRlci5mb3JtYXQgZX06PjYwYztcIi5yZXBsYWNlIC8wL2csICcqJ1xuICAgIGUgPSBkIC8gMWUxNTsgaGVscCAnzqlmc3RyXzM4NicsIGZcIiN7Zm9ybWF0dGVyLmZvcm1hdCBlfTo+NjBjO1wiLnJlcGxhY2UgLzAvZywgJyonXG4gICAgZSA9IGQgLyAxZTE4OyBoZWxwICfOqWZzdHJfMzg3JywgZlwiI3tmb3JtYXR0ZXIuZm9ybWF0IGV9Oj42MGM7XCIucmVwbGFjZSAvMC9nLCAnKidcbiAgICBlID0gZCAvIDFlMjE7IGhlbHAgJ86pZnN0cl8zODgnLCBmXCIje2Zvcm1hdHRlci5mb3JtYXQgZX06PjYwYztcIi5yZXBsYWNlIC8wL2csICcqJ1xuICAgIGUgPSBkIC8gMWUyNDsgaGVscCAnzqlmc3RyXzM4OScsIGZcIiN7Zm9ybWF0dGVyLmZvcm1hdCBlfTo+NjBjO1wiLnJlcGxhY2UgLzAvZywgJyonXG4gICAgZSA9IGQgLyAxZTI3OyBoZWxwICfOqWZzdHJfMzkwJywgZlwiI3tmb3JtYXR0ZXIuZm9ybWF0IGV9Oj42MGM7XCIucmVwbGFjZSAvMC9nLCAnKidcbiAgICBlID0gZCAvIDFlMzA7IGhlbHAgJ86pZnN0cl8zOTEnLCBmXCIje2Zvcm1hdHRlci5mb3JtYXQgZX06PjYwYztcIi5yZXBsYWNlIC8wL2csICcqJ1xuICAgIGUgPSBkIC8gMWUzMzsgaGVscCAnzqlmc3RyXzM5MicsIGZcIiN7Zm9ybWF0dGVyLmZvcm1hdCBlfTo+NjBjO1wiLnJlcGxhY2UgLzAvZywgJyonXG4gICAgZSA9IGQgLyAxZTM2OyBoZWxwICfOqWZzdHJfMzkzJywgZlwiI3tmb3JtYXR0ZXIuZm9ybWF0IGV9Oj42MGM7XCIucmVwbGFjZSAvMC9nLCAnKidcbiAgICBlID0gZCAvIDFlMzk7IGhlbHAgJ86pZnN0cl8zOTQnLCBmXCIje2Zvcm1hdHRlci5mb3JtYXQgZX06PjYwYztcIi5yZXBsYWNlIC8wL2csICcqJ1xuICAgIGUgPSBkIC8gMWU0MTsgaGVscCAnzqlmc3RyXzM5NScsIGZcIiN7Zm9ybWF0dGVyLmZvcm1hdCBlfTo+NjBjO1wiLnJlcGxhY2UgLzAvZywgJyonXG4gICAgZSA9IGQgLyAxZTQ0OyBoZWxwICfOqWZzdHJfMzk2JywgZlwiI3tmb3JtYXR0ZXIuZm9ybWF0IGV9Oj42MGM7XCIucmVwbGFjZSAvMC9nLCAnKidcbiAgICBlID0gZCAvIDFlMTAwOyBoZWxwICfOqWZzdHJfMzk3JywgZlwiI3tmb3JtYXR0ZXIuZm9ybWF0IGV9Oj42MGM7XCIucmVwbGFjZSAvMC9nLCAnKidcbiAgICBlID0gZCAvIDFlMjAwOyBoZWxwICfOqWZzdHJfMzk4JywgZlwiI3tmb3JtYXR0ZXIuZm9ybWF0IGV9Oj42MGM7XCIucmVwbGFjZSAvMC9nLCAnKidcbiAgICBlY2hvKClcbiAgICBlID0gMC4xICsgMC4xICsgMC4xOyAgICAgICAgaGVscCAnzqlmc3RyXzM5OScsIGZcIiN7Zm9ybWF0dGVyLmZvcm1hdCBlfTo+NjBjO1wiLnJlcGxhY2UgLzAvZywgJyonXG4gICAgcmV0dXJuIG51bGxcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGdyb3VwaW5nOiAtPlxuICAgIHsgZiwgbmV3X2Z0YWcsIF9kM19mb3JtYXQsIH0gPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcbiAgICB7IHJldmVyc2U6IHJ2cyB9ID0gR1VZLnRybVxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIyBncm91cF9kaWdpdHMgPSAoIHRleHQsIG4gPSAzLCBzZXBhcmF0b3IgPSAnLCcgKSAtPlxuICAgICMgICAjIyMgVEFJTlQgdmFsaWRhdGUgbiBpcyBpbnRlZ2VyIGJldHdlZW4gMSBhbmQgMTAwICMjI1xuICAgICMgICAjIGdyb3VwaW5nX3JlID0gLy8vIFxcQiAoPz0gKCBcXGR7ICN7bn0gfSApKyAoPyEgXFxkICkgKSAvLy9nXG4gICAgIyAgIGdyb3VwaW5nX3JlID0gLy8vIFxcQiAoPz0gKCBcXGR7ICN7bn0gfSApKyAkICkgLy8vZ1xuICAgICMgICByZXR1cm4gdGV4dC5yZXBsYWNlIGdyb3VwaW5nX3JlLCBzZXBhcmF0b3JcbiAgICBub3RhdGlvbiA9IC0+XG4gICAgICAnLi4uLCMjIycgICAgICAgICAgICAgICAgICAgOyBbICcsJywgMywgXVxuICAgICAgJy4uLiwjIyMsIyMtIzojJyAgICAgICAgICAgIDsgWyAnLCcsIDMsICcsJywgMiwgJy0nLCAxLCAnOicsIDEsIF1cbiAgICAgICcsIyMjJyAgICAgICAgICAgICAgICAgICAgICA7IFsgMCwgJywnLCAzLCBdXG4gICAgICAnLCMjIywjIy0jOiMnICAgICAgICAgICAgICAgOyBbIDAsICcsJywgMywgJywnLCAyLCAnLScsIDEsICc6JywgMSwgXVxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdXJnZSAnzqlmc3RyXzQwMCcsIGZcIiN7Z3JvdXBfZGlnaXRzICcxJ306PjIwYztcIlxuICAgIHVyZ2UgJ86pZnN0cl80MDEnLCBmXCIje2dyb3VwX2RpZ2l0cyAnMTInfTo+MjBjO1wiXG4gICAgdXJnZSAnzqlmc3RyXzQwMicsIGZcIiN7Z3JvdXBfZGlnaXRzICcxMjMnfTo+MjBjO1wiXG4gICAgdXJnZSAnzqlmc3RyXzQwMycsIGZcIiN7Z3JvdXBfZGlnaXRzICcxMjM0J306PjIwYztcIlxuICAgIHVyZ2UgJ86pZnN0cl80MDQnLCBmXCIje2dyb3VwX2RpZ2l0cyAnMTIzNDUnfTo+MjBjO1wiXG4gICAgdXJnZSAnzqlmc3RyXzQwNScsIGZcIiN7Z3JvdXBfZGlnaXRzICcxMjM0NTYnfTo+MjBjO1wiXG4gICAgdXJnZSAnzqlmc3RyXzQwNicsIGZcIiN7Z3JvdXBfZGlnaXRzICcxMjM0NTY3J306PjIwYztcIlxuICAgIHVyZ2UgJ86pZnN0cl80MDcnLCBmXCIje2dyb3VwX2RpZ2l0cyAnMTIzNDU2NzgnfTo+MjBjO1wiXG4gICAgdXJnZSAnzqlmc3RyXzQwOCcsIGZcIiN7Z3JvdXBfZGlnaXRzICcxMjM0NTY3ODknfTo+MjBjO1wiXG4gICAgdXJnZSAnzqlmc3RyXzQwOScsIGZcIiN7Z3JvdXBfZGlnaXRzICcxMjM0NTY3ODkwJ306PjIwYztcIlxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY2xhc3MgVE9CRURPTkVfRXJyb3IgZXh0ZW5kcyBFcnJvclxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgd2Fsa19ncm91cF9zdGVwcyA9ICggZ3JvdXBpbmdfY2ZnLCBjaHJfY291bnQgKSAtPlxuICAgICAgIyMjIGFzc3VtaW5nIGdyb3VwaW5nX2NmZyBoYXMgYmVlbiB2YWxpZGF0ZWQgIyMjXG4gICAgICAjIyMgVEFJTlQgY29uc2lkZXIgdG8gdXNlIGBncm91cGluZ19jZmcuYXQgLTFgICZjICMjI1xuICAgICAgIyMjIFRBSU5UIHZhbGlkYXRlIGNocl9jb3VudCAjIyNcbiAgICAgIHJldHVybiBudWxsIGlmIGNocl9jb3VudCA8IDFcbiAgICAgIGNocl9pZHggICA9IGNocl9jb3VudFxuICAgICAgZ3JvdXBfaWR4ID0gZ3JvdXBpbmdfY2ZnLmxlbmd0aCAtIDJcbiAgICAgIHJlcGVhdCAgICA9IGdyb3VwaW5nX2NmZ1sgMCBdIGlzbnQgMFxuICAgICAgbG9vcFxuICAgICAgICBbIG1hcmtlciwgZGVsdGEsIF0gPSBncm91cGluZ19jZmdbIGdyb3VwX2lkeCAuLiBncm91cF9pZHggKyAxIF1cbiAgICAgICAgIyMjIGZvciBzYWZldHkgb25seSwgc2hvdWxkIG5ldmVyIGhhcHBlbiB3aXRoIHZhbGlkYXRlZCBncm91cGluZ19jZmc6ICMjI1xuICAgICAgICB0aHJvdyBuZXcgVE9CRURPTkVfRXJyb3IgXCJkZWx0YSBpcyB6ZXJvIG9yIGxlc3NcIiBpZiBkZWx0YSA8IDFcbiAgICAgICAgY2hyX2lkeCAtPSBkZWx0YVxuICAgICAgICBicmVhayBpZiBjaHJfaWR4IDw9IDBcbiAgICAgICAgeWllbGQgeyBtYXJrZXIsIGRlbHRhLCBjaHJfaWR4LCB9XG4gICAgICAgIGlmIHJlcGVhdFxuICAgICAgICAgIGdyb3VwX2lkeCAtPSAyIGlmIGdyb3VwX2lkeCA+IDFcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGJyZWFrIGlmIGdyb3VwX2lkeCA8IDFcbiAgICAgICAgICBncm91cF9pZHggLT0gMlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRlbW9fZ3JvdXBpbmcgPSAoIHRleHQsIGdyb3VwaW5nX2NmZyApIC0+XG4gICAgICAjIFsuLi5uZXcgSW50bC5TZWdtZW50ZXIoKS5zZWdtZW50KCB0ZXh0ICldLm1hcChzID0+IHMuc2VnbWVudClcbiAgICAgIHVyZ2UgJ86pZnN0cl80MTAnLCBycHIgZ3JvdXBpbmdfY2ZnLmpvaW4gJydcbiAgICAgIGNocnMgPSBBcnJheS5mcm9tIHRleHRcbiAgICAgIGZvciBpbnNlcnRpb24gZnJvbSB3YWxrX2dyb3VwX3N0ZXBzIGdyb3VwaW5nX2NmZywgY2hycy5sZW5ndGhcbiAgICAgICAgY2hycy5zcGxpY2UgaW5zZXJ0aW9uLmNocl9pZHgsIDAsIGluc2VydGlvbi5tYXJrZXJcbiAgICAgIHJldHVybiBjaHJzLmpvaW4gJydcbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRvID0+XG4gICAgICBpbmZvICfOqWZzdHJfNDExJywgZGVtb19ncm91cGluZyAnOTg3NjU0MzIxMDk4NzY1NDMyMTAnLCBbICAgICAnLCcsIDMsICcsJywgMiwgJy0nLCAxLCAnOicsIDEsIF1cbiAgICAgIGluZm8gJ86pZnN0cl80MTInLCBkZW1vX2dyb3VwaW5nICc5ODc2NTQzMjEwOTg3NjU0MzIxMCcsIFsgMCwgICcsJywgMywgJywnLCAyLCAnLScsIDEsICc6JywgMSwgXVxuICAgICAgaW5mbyAnzqlmc3RyXzQxMycsIGRlbW9fZ3JvdXBpbmcgJzk4NzY1NDMyMTA5ODc2NTQzMjEwJywgWyAgICAgJywnLCAxLCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBpbmZvICfOqWZzdHJfNDE0JywgZGVtb19ncm91cGluZyAnOTg3NjU0MzIxMDk4NzY1NDMyMTAnLCBbICAgICAnLCcsIDIsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgIGluZm8gJ86pZnN0cl80MTUnLCBkZW1vX2dyb3VwaW5nICc5ODc2NTQzMjEwOTg3NjU0MzIxMCcsIFsgICAgICcsJywgMywgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgaW5mbyAnzqlmc3RyXzQxNicsIGRlbW9fZ3JvdXBpbmcgJzk4NzY1NDMyMTA5ODc2NTQzMjEwJywgWyAgICAgJywnLCA0LCAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICBpbmZvICfOqWZzdHJfNDE3JywgZGVtb19ncm91cGluZyAnOTg3NjU0MzIxMDk4NzY1NDMyMTAnLCBbICAgICAnLCcsIDUsICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgYWxsX3Rhc2tzID0geyBpbnRlcnR5cGVfdGFza3M6IEBpbnRlcnR5cGVfdGFza3MsIGZ1dHVyZV9pbnRlcnR5cGVfdGFza3M6IEBmdXR1cmVfaW50ZXJ0eXBlX3Rhc2tzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgYWxsX3Rhc2tzXG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEBpbnRlcnR5cGVfdGFza3NcbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBhbnNpX2VzY2FwZXNfYW5kX3dpZHRoczogQGludGVydHlwZV90YXNrcy5hbnNpX2VzY2FwZXNfYW5kX3dpZHRocywgfVxuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEBmdXR1cmVfaW50ZXJ0eXBlX3Rhc2tzXG4gICMgKCBuZXcgVGVzdCB7IHRocm93X29uX2Vycm9yOiB0cnVlLCB9ICkudGVzdCBAaW50ZXJ0eXBlX3Rhc2tzXG4gICMgKCBuZXcgVGVzdCB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgfSApLnRlc3QgQGludGVydHlwZV90YXNrc1xuICAjICggbmV3IFRlc3QgeyB0aHJvd19vbl9lcnJvcjogZmFsc2UsIH0gKS50ZXN0IHsgc2lfdW5pdHNfZm9ybWF0X3NwZWNpZmllcjogQGludGVydHlwZV90YXNrcy5zaV91bml0c19mb3JtYXRfc3BlY2lmaWVyLCB9XG4gICMgKCBuZXcgVGVzdCgpICkudGVzdCBkZW1vXG4gICMgZGVtby5SRUFETUUoKVxuICAjIGRlbW8uaW50bF9udW1iZXIoKVxuICAjIGRlbW8ubWFudGlzc2FfZXhwb25lbnQoKVxuICAjIGRlbW8uZ3JvdXBpbmcoKVxuXG4iXX0=
