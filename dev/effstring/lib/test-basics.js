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
      var _format_re, Ωfstr__10, Ωfstr__11, Ωfstr__12, Ωfstr___4, Ωfstr___5, Ωfstr___6, Ωfstr___7, Ωfstr___8, Ωfstr___9;
      ({_format_re} = require('../../../apps/effstring'));
      //.....................................................................................................
      this.eq((Ωfstr___4 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":5;)".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '5',
        tail: ')'
      });
      this.eq((Ωfstr___5 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":>5;)".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '>5',
        tail: ')'
      });
      this.eq((Ωfstr___6 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":<5;)".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '<5',
        tail: ')'
      });
      this.eq((Ωfstr___7 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":>5.2;)".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '>5.2',
        tail: ')'
      });
      this.eq((Ωfstr___8 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;<5;)".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '\\',
        tail: '<5;)'
      });
      this.eq((Ωfstr___9 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;<5;);".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '\\',
        tail: '<5;);'
      });
      this.eq((Ωfstr__10 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;<5;)\\;".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '\\',
        tail: '<5;)\\;'
      });
      this.eq((Ωfstr__11 = function() {
        var ref, ref1;
        return (ref = (ref1 = ":\\;>15;)".match(_format_re)) != null ? ref1.groups : void 0) != null ? ref : null;
      }), {
        fmt: '\\',
        tail: '>15;)'
      });
      this.eq((Ωfstr__12 = function() {
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
      var _d3_format, _format_cfg_from_hints, _hint_as_locale_cfg, _locale_cfg_from_bcp47, f, new_ftag, Ωfstr_100, Ωfstr_101, Ωfstr_102, Ωfstr_103, Ωfstr_104, Ωfstr_105, Ωfstr_106, Ωfstr_107, Ωfstr_108, Ωfstr_109, Ωfstr_110, Ωfstr_111, Ωfstr_112, Ωfstr_113, Ωfstr_114, Ωfstr__95, Ωfstr__96, Ωfstr__97, Ωfstr__98, Ωfstr__99;
      ({f, new_ftag, _d3_format, _locale_cfg_from_bcp47, _format_cfg_from_hints, _hint_as_locale_cfg} = require('../../../apps/effstring'));
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
        return _locale_cfg_from_bcp47('ar-AE');
      }), {
        decimal: '٫',
        thousands: '٬',
        grouping: [3],
        currency: ['', ' د.إ.'],
        numerals: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
      });
      this.eq((Ωfstr_100 = function() {
        return _locale_cfg_from_bcp47('en-US');
      }), {
        decimal: '.',
        thousands: ',',
        grouping: [3],
        currency: ['$', '']
      });
      this.eq((Ωfstr_101 = function() {
        return _locale_cfg_from_bcp47('de-DE');
      }), {
        decimal: ',',
        thousands: '.',
        grouping: [3],
        currency: ['', ' €']
      });
      this.eq((Ωfstr_102 = function() {
        return _locale_cfg_from_bcp47('en-IN');
      }), {
        decimal: '.',
        thousands: ',',
        grouping: [3, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        currency: ['₹', '']
      });
      //.......................................................................................................
      this.eq((Ωfstr_103 = function() {
        return _hint_as_locale_cfg('ar-AE');
      }), {
        decimal: '٫',
        thousands: '٬',
        grouping: [3],
        currency: ['', ' د.إ.'],
        numerals: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
      });
      this.eq((Ωfstr_104 = function() {
        return _hint_as_locale_cfg('en-US');
      }), {
        decimal: '.',
        thousands: ',',
        grouping: [3],
        currency: ['$', '']
      });
      this.eq((Ωfstr_105 = function() {
        return _hint_as_locale_cfg('de-DE');
      }), {
        decimal: ',',
        thousands: '.',
        grouping: [3],
        currency: ['', ' €']
      });
      this.eq((Ωfstr_106 = function() {
        return _hint_as_locale_cfg('en-IN');
      }), {
        decimal: '.',
        thousands: ',',
        grouping: [3, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        currency: ['₹', '']
      });
      this.eq((Ωfstr_107 = function() {
        return _hint_as_locale_cfg({});
      }), {});
      //.......................................................................................................
      this.eq((Ωfstr_108 = function() {
        return _format_cfg_from_hints('ar-AE');
      }), {
        decimal: '٫',
        thousands: '٬',
        grouping: [3],
        currency: ['', ' د.إ.'],
        numerals: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
      });
      this.eq((Ωfstr_109 = function() {
        return _format_cfg_from_hints('en-US');
      }), {
        decimal: '.',
        thousands: ',',
        grouping: [3],
        currency: ['$', '']
      });
      this.eq((Ωfstr_110 = function() {
        return _format_cfg_from_hints('de-DE');
      }), {
        decimal: ',',
        thousands: '.',
        grouping: [3],
        currency: ['', ' €']
      });
      this.eq((Ωfstr_111 = function() {
        return _format_cfg_from_hints({
          percent: '\xa0v.Hd.'
        });
      }), {
        percent: ' v.Hd.'
      });
      this.eq((Ωfstr_112 = function() {
        return _format_cfg_from_hints('de-DE', {
          percent: '\xa0v.Hd.'
        });
      }), {
        decimal: ',',
        thousands: '.',
        grouping: [3],
        currency: ['', ' €'],
        percent: ' v.Hd.'
      });
      this.eq((Ωfstr_113 = function() {
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
        percent: ' v.Hd.'
      });
      this.eq((Ωfstr_114 = function() {
        return _format_cfg_from_hints({});
      }), {});
      (() => {        //.......................................................................................................
        var locale, locale_cfg, Ωfstr_115, Ωfstr_116;
        locale_cfg = _format_cfg_from_hints('de-DE');
        locale = _d3_format.formatLocale(locale_cfg);
        this.eq((Ωfstr_115 = function() {
          return (locale.format('_>17,.5%'))(0.754321);
        }), '________75,43210%');
        this.eq((Ωfstr_116 = function() {
          return (locale.format('_>17,.5f'))(1234567890);
        }), '1.234.567.890,00000');
        return null;
      })();
      (() => {        //.......................................................................................................
        var locale, locale_cfg, Ωfstr_120, Ωfstr_121;
        locale_cfg = _format_cfg_from_hints('de-DE', {
          numerals: ['O', 'ⅰ', 'ⅱ', 'ⅲ', 'ⅳ', 'ⅴ', 'ⅵ', 'ⅶ', 'ⅷ', 'ⅸ'],
          percent: ' v.H.'
        });
        locale = _d3_format.formatLocale(locale_cfg);
        this.eq((Ωfstr_120 = function() {
          return (locale.format('_>17,.5%'))(0.754321);
        }), '___hf,edcba v.H.');
        return this.eq((Ωfstr_121 = function() {
          return (locale.format('_>17,.5f'))(1234567890);
        }), 'b.cde.fgh.ija,aaaaa');
      })();
      return null;
      warn('Ωfstr_122', '————————————————————————————————————————————————————––');
      info('Ωfstr_123', f`${0.75}:_>17.5%;`);
      ((f) => {
        f = new_ftag({
          numerals: ['O', 'ⅰ', 'ⅱ', 'ⅲ', 'ⅳ', 'ⅴ', 'ⅵ', 'ⅶ', 'ⅷ', 'ⅸ'],
          percent: 'v.Hdt.'
        });
        info('Ωfstr_124', f`${0.75}:_>17.5%;`);
        return null;
      })(f);
      ((f) => {
        f = new_ftag({
          grouping: [1, 4],
          percent: 'v.Hdt.'
        });
        info('Ωfstr_125', f`${123456789123456789.75}:_>37,.5f;`);
        return null;
      })(f);
      f = new_ftag({});
      debug('Ωfstr_126', f`${1.23}:$03.2f; ${1234567890.123456}:20,.4f;`);
      f = new_ftag('de-DE');
      debug('Ωfstr_127', f`${1.23}:$03.2f; ${1234567890.123456}:20,.4f;`);
      f = new_ftag('ar-AE');
      debug('Ωfstr_128', f`${1.23}:$03.2f; ${1234567890.123456}:20,.4f;`);
      f = new_ftag('ar-001');
      debug('Ωfstr_129', f`${1.23}:$03.2f; ${1234567890.123456}:20,.4f;`);
      f = new_ftag('en-US');
      debug('Ωfstr_130', f`${1.23}:$03.2f; ${1234567890.123456}:20,.4f;`);
      f = new_ftag('es-MX');
      debug('Ωfstr_131', f`${1.23}:$03.2f; ${1234567890.123456}:20,.4f;`);
      f = new_ftag('en-IN');
      debug('Ωfstr_132', f`${1.23}:$03.2f; ${1234567890.123456}:20,.4f;`);
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // ( new Test { throw_on_error: true, } ).test @intertype_tasks
      (new Test({
        throw_on_error: false
      })).test(this.intertype_tasks);
      return (new Test({
        throw_on_error: true
      })).test({
        locale_internals: this.intertype_tasks.locale_internals
      });
    })();
  }

}).call(this);

//# sourceMappingURL=test-basics.js.map