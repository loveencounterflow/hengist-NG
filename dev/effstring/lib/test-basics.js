(async function() {
  'use strict';
  var GTNG, GUY, README_demo, TMP_types, Test, WGUY, alert, debug, echo, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

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
        fmtspec: '5',
        tail: ')'
      });
      this.eq((Ωfstr___5 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":>5;)".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmtspec: '>5',
        tail: ')'
      });
      this.eq((Ωfstr___6 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":<5;)".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmtspec: '<5',
        tail: ')'
      });
      this.eq((Ωfstr___7 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":>5.2;)".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmtspec: '>5.2',
        tail: ')'
      });
      this.eq((Ωfstr___8 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;<5;)".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmtspec: '\\',
        tail: '<5;)'
      });
      this.eq((Ωfstr___9 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;<5;);".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmtspec: '\\',
        tail: '<5;);'
      });
      this.eq((Ωfstr__10 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;<5;)\\;".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmtspec: '\\',
        tail: '<5;)\\;'
      });
      this.eq((Ωfstr__11 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;>15;)".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmtspec: '\\',
        tail: '>15;)'
      });
      this.eq((Ωfstr__12 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":;>15;)".match(_fmtspec_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmtspec: ';>15',
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
      }), /\(Effstring_syntax_error\) illegal format expression ':;>15\)'/);
      this.throws((Ωfstr__29 = function() {
        return f`(${123}:)`;
      }), /\(Effstring_syntax_error\) illegal format expression/);
      this.throws((Ωfstr__30 = function() {
        return f`(${123}:;)`;
      }), /\(Effstring_syntax_error\) illegal format expression ':;\)'/);
      this.throws((Ωfstr__31 = function() {
        return f`(${123}:--->3f;)`;
      }), /\(Effstring_lib_syntax_error\) illegal format expression '--->3f'/);
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
      }), /illegal format expression/);
      this.throws((Ωfstr__39 = function() {
        return f`(${123}:\\;<5;);`;
      }), /illegal format expression/);
      this.throws((Ωfstr__40 = function() {
        return f`(${123}:\\;<5;)\\;`;
      }), /illegal format expression/);
      this.throws((Ωfstr__41 = function() {
        return f`(${123}:\\;>15;)`;
      }), /illegal format expression/);
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
      }), /invalid format: foo/);
      this.throws((Ωfstr__75 = function() {
        return f`${0}:.-2s;`;
      }), /invalid format: \.-2s/);
      this.throws((Ωfstr__76 = function() {
        return f`${0}:.f;`;
      }), /invalid format: \.f/);
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
      }), "         ☃          ");
      this.eq((Ωfstr__92 = function() {
        return f`${'経済'}: ^20c;`;
      }), '         経済         ');
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
      var _d3_format, _default_locale, _format_cfg_from_hints, _hint_as_locale_cfg, _locale_cfg_from_bcp47, f, new_ftag, Ωfstr_100, Ωfstr_101, Ωfstr_102, Ωfstr_103, Ωfstr_104, Ωfstr_105, Ωfstr_106, Ωfstr_107, Ωfstr_108, Ωfstr_109, Ωfstr_110, Ωfstr_111, Ωfstr_112, Ωfstr_113, Ωfstr_114, Ωfstr_115, Ωfstr_121, Ωfstr_122, Ωfstr_123, Ωfstr_124, Ωfstr_125, Ωfstr_126, Ωfstr_127, Ωfstr_128, Ωfstr__95, Ωfstr__96, Ωfstr__97, Ωfstr__98, Ωfstr__99;
      ({f, new_ftag, _default_locale, _d3_format, _locale_cfg_from_bcp47, _format_cfg_from_hints, _hint_as_locale_cfg} = require('../../../apps/effstring'));
      //.......................................................................................................
      this.eq((Ωfstr__95 = function() {
        return (_d3_format != null) && ((typeof _d3_format) === 'object');
      }), true);
      this.eq((Ωfstr__96 = function() {
        return (_locale_cfg_from_bcp47 != null) && ((typeof _locale_cfg_from_bcp47) === 'function');
      }), true);
      this.eq((Ωfstr__97 = function() {
        return (_format_cfg_from_hints != null) && ((typeof _format_cfg_from_hints) === 'function');
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
        nan: 'NaN'
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
        return _format_cfg_from_hints('ar-AE');
      }), {
        decimal: '٫',
        thousands: '٬',
        grouping: [3],
        currency: ['', ' د.إ.'],
        numerals: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'],
        percent: '%',
        minus: '−',
        nan: 'NaN'
      });
      this.eq((Ωfstr_110 = function() {
        return _format_cfg_from_hints('en-US');
      }), {
        decimal: '.',
        thousands: ',',
        grouping: [3],
        currency: ['$', ''],
        numerals: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        percent: '%',
        minus: '−',
        nan: 'NaN'
      });
      this.eq((Ωfstr_111 = function() {
        return _format_cfg_from_hints('de-DE');
      }), {
        decimal: ',',
        thousands: '.',
        grouping: [3],
        currency: ['', ' €'],
        numerals: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        percent: '%',
        minus: '−',
        nan: 'NaN'
      });
      this.eq((Ωfstr_112 = function() {
        return _format_cfg_from_hints({
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
        nan: 'NaN'
      });
      this.eq((Ωfstr_113 = function() {
        return _format_cfg_from_hints('de-DE', {
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
        nan: 'NaN'
      });
      this.eq((Ωfstr_114 = function() {
        return _format_cfg_from_hints('de-DE', {
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
        nan: 'NaN'
      });
      this.eq((Ωfstr_115 = function() {
        return _format_cfg_from_hints({});
      }), {
        decimal: '.',
        thousands: ',',
        grouping: [3],
        currency: ['$', ''],
        numerals: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        percent: '%',
        minus: '−',
        nan: 'NaN'
      });
      (() => {        //.......................................................................................................
        var locale, locale_cfg, Ωfstr_116, Ωfstr_117;
        locale_cfg = _format_cfg_from_hints('de-DE');
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
        locale_cfg = _format_cfg_from_hints('de-DE', {
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
    }
  };

  //===========================================================================================================
  README_demo = function() {
    (() => {
      var f;
      ({f} = require('../../../apps/effstring'));
      console.log(f`${'Alice'}:*<15c; has ${1234}:_>$12,.2f; in their pocket.`);
      console.log(f`${'Bob'}:*<15c; has ${45678.93}:_>$12,.2f; in their pocket.`);
      return null;
    })();
    (() => {
      var f_en, f_ja, new_ftag;
      ({new_ftag} = require('../../../apps/effstring'));
      f_en = new_ftag('en-GB');
      f_ja = new_ftag('ja-JP', {
        numerals: ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九']
      });
      console.log(f_en`${'Alice'}:*<15c; has ${1234}:_>$22,.2f; in their pocket.`);
      console.log(f_en`${'Bob'}:*<15c; has ${45678.93}:_>$22,.2f; in their pocket.`);
      console.log(f_ja`${'アリスさん'}:*<15c; has ${1234}:_>$22,.2f; in their pocket.`);
      console.log(f_ja`${'ボブさん'}:*<15c; has ${45678.93}:_>$22,.2f; in their pocket.`);
      return null;
    })();
    (() => {
      var f_en, f_ja, new_ftag, to_width;
      ({to_width} = require('../../../apps/to-width'));
      ({new_ftag} = require('../../../apps/effstring'));
      f_en = new_ftag('en-GB');
      f_ja = new_ftag('ja-JP', {
        numerals: ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九']
      });
      console.log(f_en`${'Alice'}:*<15c; has ${1234}:_>$22,.2f; in their pocket.`);
      console.log(f_en`${'Bob'}:*<15c; has ${45678.93}:_>$22,.2f; in their pocket.`);
      console.log(f_ja`${'アリスさん'}:*<15c; has ${1234}:_>$22,.2f; in their pocket.`);
      console.log(f_ja`${'ボブさん'}:*<15c; has ${45678.93}:_>$22,.2f; in their pocket.`);
      return null;
    })();
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // ( new Test { throw_on_error: true, } ).test @intertype_tasks
      (new Test({
        throw_on_error: false
      })).test(this.intertype_tasks);
      // ( new Test { throw_on_error: true, } ).test { locale_internals: @intertype_tasks.locale_internals, }
      return README_demo();
    })();
  }

}).call(this);

//# sourceMappingURL=test-basics.js.map