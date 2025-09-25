

'use strict'

GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'intertype/test-basics'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
WGUY                      = require '../../../apps/webguy'
TMP_types                 = new ( require 'intertype-203.0.0' ).Intertype()
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
# test_mode                 = 'throw_failures'
# test_mode                 = 'throw_errors'
# test_mode                 = 'failsafe'




############################################################################################################
#
#===========================================================================================================
@intertype_tasks =

  #---------------------------------------------------------------------------------------------------------
  module_exports: ->
    EFFSTRING = require '../../../apps/effstring'
    #.....................................................................................................
    # @throws ( Ωfstr___1 = -> create_typespace() ), /declaration for type 'wholenumber' contains forward reference to type 'integer'/
    @eq ( Ωfstr___2 = -> typeof EFFSTRING   ), 'object'
    @eq ( Ωfstr___3 = -> typeof EFFSTRING.f ), 'function'
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  re_matches: ->
    { _fmtspec_re } = require '../../../apps/effstring'
    #.....................................................................................................
    @eq ( Ωfstr___4 = ->  ( ( ":5;)"        ).match _fmtspec_re )?.groups ? null ), { fmt_spec: '5',      tail: ')'       }
    @eq ( Ωfstr___5 = ->  ( ( ":>5;)"       ).match _fmtspec_re )?.groups ? null ), { fmt_spec: '>5',     tail: ')'       }
    @eq ( Ωfstr___6 = ->  ( ( ":<5;)"       ).match _fmtspec_re )?.groups ? null ), { fmt_spec: '<5',     tail: ')'       }
    @eq ( Ωfstr___7 = ->  ( ( ":>5.2;)"     ).match _fmtspec_re )?.groups ? null ), { fmt_spec: '>5.2',   tail: ')'       }
    @eq ( Ωfstr___8 = ->  ( ( ":\\;<5;)"    ).match _fmtspec_re )?.groups ? null ), { fmt_spec: '\\',     tail: '<5;)'    }
    @eq ( Ωfstr___9 = ->  ( ( ":\\;<5;);"   ).match _fmtspec_re )?.groups ? null ), { fmt_spec: '\\',     tail: '<5;);'   }
    @eq ( Ωfstr__10 = ->  ( ( ":\\;<5;)\\;" ).match _fmtspec_re )?.groups ? null ), { fmt_spec: '\\',     tail: '<5;)\\;' }
    @eq ( Ωfstr__11 = ->  ( ( ":\\;>15;)"   ).match _fmtspec_re )?.groups ? null ), { fmt_spec: '\\',     tail: '>15;)'   }
    @eq ( Ωfstr__12 = ->  ( ( ":;>15;)"     ).match _fmtspec_re )?.groups ? null ), { fmt_spec: ';>15',   tail: ')'       }
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  basic_functionality: ->
    { f, } = require '../../../apps/effstring'
    #.....................................................................................................
    @eq ( Ωfstr__13 = -> f''                                                  ), ''
    @eq ( Ωfstr__14 = -> f'helo'                                              ), 'helo'
    @eq ( Ωfstr__15 = -> f'(#{123})'                                          ), '(#{123})'
    @eq ( Ωfstr__16 = -> f'(#{123}\;)'                                        ), '(#{123};)'
    @eq ( Ωfstr__17 = -> f'(#{123}\\;)'                                       ), '(#{123}\\;)'
    @eq ( Ωfstr__18 = -> f"(#{123})"                                          ), '(123)'
    @eq ( Ωfstr__19 = -> f"(#{123}:5;)"                                       ), '(  123)'
    @eq ( Ωfstr__20 = -> f"(#{123}:>5;)"                                      ), '(  123)'
    @eq ( Ωfstr__21 = -> f"(#{123}:<5;)"                                      ), '(123  )'
    @eq ( Ωfstr__22 = -> f"(#{123.456}:>5.2;)"                                ), '(1.2e+2)'
    @eq ( Ωfstr__23 = -> f"(#{123}:;>15;)"                                    ), '(;;;;;;;;;;;;123)'
    @eq ( Ωfstr__24 = -> f"(#{123}:;<15;)"                                    ), '(123;;;;;;;;;;;;)'
    @eq ( Ωfstr__25 = -> f"(#{123}:>>15;)"                                    ), '(>>>>>>>>>>>>123)'
    @eq ( Ωfstr__26 = -> f"(#{123}:<>15;)"                                    ), '(<<<<<<<<<<<<123)'
    @eq ( Ωfstr__27 = -> f"(#{123}:;<7;)"                                     ), '(123;;;;)'
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  malformed_formats: ->
    { f
      Effstring_error
      Effstring_syntax_error
      Effstring_lib_syntax_error } = require '../../../apps/effstring'
    #.......................................................................................................
    @throws ( Ωfstr__28 = -> f"(#{123}:;>15)"       ), /illegal format specifier/
    @throws ( Ωfstr__29 = -> f"(#{123}:)"           ), /illegal format specifier/
    @throws ( Ωfstr__30 = -> f"(#{123}:;)"          ), /illegal format specifier/
    @throws ( Ωfstr__31 = -> f"(#{123}:--->3f;)"    ), /illegal format specifier/
    @eq ( Ωfstr__32 = -> try f"(#{123}:;)"        catch e then e instanceof Effstring_error   ), true
    @eq ( Ωfstr__33 = -> try f"(#{123}:;)"        catch e then e instanceof Effstring_syntax_error   ), true
    @eq ( Ωfstr__34 = -> try f"(#{123}:;)"        catch e then e instanceof Effstring_lib_syntax_error   ), false
    @eq ( Ωfstr__35 = -> try f"(#{123}:--->3f;)"  catch e then e instanceof Effstring_error   ), true
    @eq ( Ωfstr__36 = -> try f"(#{123}:--->3f;)"  catch e then e instanceof Effstring_syntax_error   ), true
    @eq ( Ωfstr__37 = -> try f"(#{123}:--->3f;)"  catch e then e instanceof Effstring_lib_syntax_error   ), true
    @throws ( Ωfstr__38 = -> f"(#{123}:\\;<5;)"    ), /illegal format specifier/
    @throws ( Ωfstr__39 = -> f"(#{123}:\\;<5;);"   ), /illegal format specifier/
    @throws ( Ωfstr__40 = -> f"(#{123}:\\;<5;)\\;" ), /illegal format specifier/
    @throws ( Ωfstr__41 = -> f"(#{123}:\\;>15;)"   ), /illegal format specifier/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  fixed_point_notation: ->
    { f, } = require '../../../apps/effstring'
    #.....................................................................................................
    @eq ( Ωfstr__42 = -> f"(#{123.456}:>5.2f;)"                               ), '(123.46)'
    @eq ( Ωfstr__43 = -> f"(#{123.456}:>15.2f;)"                              ), '(         123.46)'
    @eq ( Ωfstr__44 = -> f"(#{123.456}:<15.2f;)"                              ), '(123.46         )'
    @eq ( Ωfstr__45 = -> f"(#{1234.567}:>15.2f;)"                             ), '(        1234.57)'
    @eq ( Ωfstr__46 = -> f"(#{1234.567}:<15.2f;)"                             ), '(1234.57        )'
    @eq ( Ωfstr__47 = -> f"(#{1234.567}:=>15.2f;)"                            ), '(========1234.57)'
    @eq ( Ωfstr__48 = -> f"(#{1234.567}:=<15.2f;)"                            ), '(1234.57========)'
    @eq ( Ωfstr__49 = -> f"(#{1234.567}:=>15,.2f;)"                           ), '(=======1,234.57)'
    @eq ( Ωfstr__50 = -> f"(#{1234.567}:=<15,.2f;)"                           ), '(1,234.57=======)'
    #.......................................................................................................
    @eq ( Ωfstr__51 = -> f"(#{-1234.567}:_>15,.2f;)"                          ), '(______−1,234.57)'
    @eq ( Ωfstr__52 = -> f"(#{+1234.567}:_>-15,.2f;)"                         ), '(_______1,234.57)'
    @eq ( Ωfstr__53 = -> f"(#{-1234.567}:_>-15,.2f;)"                         ), '(______−1,234.57)'
    @eq ( Ωfstr__54 = -> f"(#{+1234.567}:_>+15,.2f;)"                         ), '(______+1,234.57)'
    @eq ( Ωfstr__55 = -> f"(#{-1234.567}:_>+15,.2f;)"                         ), '(______−1,234.57)'
    @eq ( Ωfstr__56 = -> f"(#{+1234.567}:_=+15,.2f;)"                         ), '(+______1,234.57)'
    @eq ( Ωfstr__57 = -> f"(#{-1234.567}:_=+15,.2f;)"                         ), '(−______1,234.57)'
    @eq ( Ωfstr__58 = -> f"(#{-1234.567}:_=+015,.2f;)"                        ), '(−0,000,001,234.57)'
    @eq ( Ωfstr__59 = -> f"(#{-1234.567}:=+015,.2f;)"                         ), '(−0,000,001,234.57)'
    @eq ( Ωfstr__60 = -> f"(#{+1234.567}:_=015,.2f;)"                         ), '(0,000,001,234.57)'
    @eq ( Ωfstr__61 = -> f"(#{+1234.567}:=015,.2f;)"                          ), '(0,000,001,234.57)'
    @eq ( Ωfstr__62 = -> f"(#{+1234.567}:_=015.2f;)"                          ), '(000000001234.57)'
    @eq ( Ωfstr__63 = -> f"(#{+1234.567}:=015.2f;)"                           ), '(000000001234.57)'
    @eq ( Ωfstr__64 = -> f"(#{-1234.567}:_=015.2f;)"                          ), '(−00000001234.57)'
    @eq ( Ωfstr__65 = -> f"(#{-1234.567}:=015.2f;)"                           ), '(−00000001234.57)'
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  from_the_docs: ->
    { f, } = require '../../../apps/effstring'
    ### TAINT check with `$` format will rely on locale setting of the machine the tests are running on ###
    #.....................................................................................................
    @eq ( Ωfstr__66 = -> f"#{0.123}:.0%;"   ), '12%'                  # rounded percentage, "12%"
    @eq ( Ωfstr__67 = -> f"#{-3.5}:($.2f;"  ), '($3.50)'              # localized fixed-point currency, "(£3.50)"
    # @eq ( Ωfstr__68 = -> f"#{-3.5}:($.2f;"  ), '(£3.50)'              # localized fixed-point currency, "(£3.50)"
    @eq ( Ωfstr__69 = -> f"#{42}:+20;"      ), '                 +42' # space-filled and signed, "                 +42"
    @eq ( Ωfstr__70 = -> f"#{42}:.^20;"     ), '.........42.........' # dot-filled and centered, ".........42........."
    @eq ( Ωfstr__71 = -> f"#{42e6}:.2s;"    ), '42M'                  # SI-prefix with two significant digits, "42M"
    @eq ( Ωfstr__72 = -> f"#{48879}:#x;"    ), '0xbeef'               # prefixed lowercase hexadecimal, "0xbeef"
    @eq ( Ωfstr__73 = -> f"#{4223}:,.2r;"   ), '4,200'                # grouped thousands with two significant digits, "4,200"
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  effstring_format_test_js: ->
    { f, } = require '../../../apps/effstring'
    ### TAINT check with `$` format will rely on locale setting of the machine the tests are running on ###
    #.....................................................................................................
    @throws ( Ωfstr__74 = -> f"#{0}:foo;"   ), /illegal format specifier/
    @throws ( Ωfstr__75 = -> f"#{0}:.-2s;"  ), /illegal format specifier/
    @throws ( Ωfstr__76 = -> f"#{0}:.f;"    ), /illegal format specifier/
    @eq ( Ωfstr__77 = -> f"#{0}:.30f;"              ), "0.00000000000000000000"
    @eq ( Ωfstr__78 = -> f"#{1}:.0g;"               ), "1"
    @eq ( Ωfstr__79 = -> f"#{Number.MIN_VALUE}:s;"  ), "0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005y"
    @eq ( Ωfstr__80 = -> f"#{Number.MAX_VALUE}:s;"  ), "179769000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000Y"
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  defaultlocale_test_js: ->
    { f, } = require '../../../apps/effstring'
    {format, formatPrefix, formatDefaultLocale} = require '../../../apps/effstring/node_modules/d3-format'
    debug 'Ωfstr__81', format
    debug 'Ωfstr__82', formatPrefix
    debug 'Ωfstr__83', formatDefaultLocale
    #.......................................................................................................
    en_US =
      decimal:    '.',
      thousands:  ',',
      grouping:   [ 3, ],
      currency:   [ '$', '', ]
    fr_FR =
      decimal:    ',',
      thousands:  '.',
      grouping:   [ 3, ],
      currency:   [ '', '\u00a0€', ],
      percent:    '\u202f%'
    #.......................................................................................................
    do =>
      locale = formatDefaultLocale fr_FR
      try
        @eq ( Ωfstr__84 = -> ( locale.format "$,.2f" ) 12345678.90 ), "12.345.678,90\u00a0€"
        @eq ( Ωfstr__85 = -> ( locale.format ",.0%"  ) 12345678.90 ), "1.234.567.890\u202f%" # narrow no-break space
      finally
        formatDefaultLocale en_US
      return null
    #.......................................................................................................
    do =>
      locale = formatDefaultLocale fr_FR
      try
        @eq ( Ωfstr__86 = -> formatPrefix ), locale.formatPrefix
        # @eq ( Ωfstr__87 = -> ( formatPrefix ",.2", 1e3 ) 12345678.90 ), "12.345,68k"
        @eq ( Ωfstr__88 = -> ( locale.formatPrefix ",.2", 1e3 ) 12345678.90 ), "12.345,68k"
      finally
        formatDefaultLocale en_US
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  format_type_c_test_js: ->
    { f, } = require '../../../apps/effstring'
    #.......................................................................................................
    @eq ( Ωfstr__89 = -> f"#{'☃'}:c;"         ), "☃"
    @eq ( Ωfstr__90 = -> f"#{'☃'}:020c;"      ),  "0000000000000000000☃"
    @eq ( Ωfstr__91 = -> f"#{'☃'}: ^20c;"     ), '         ☃         '
    @eq ( Ωfstr__92 = -> f"#{'経済'}: ^20c;"   ), '        経済        '
    @eq ( Ωfstr__93 = -> f"#{'abcd'}: ^20c;"   ), '        abcd        '
    @eq ( Ωfstr__94 = -> f"#{'☃'}:$c;"        ), "$☃"
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  locale_internals: ->
    { f
      new_ftag
      _default_locale
      _d3_format
      _locale_cfg_from_bcp47
      _locale_cfg_from_hints
      _hint_as_locale_cfg              } = require '../../../apps/effstring'
    #.......................................................................................................
    @eq ( Ωfstr__95 = -> _d3_format?              and ( ( typeof _d3_format             ) is 'object'   ) ), true
    @eq ( Ωfstr__96 = -> _locale_cfg_from_bcp47?  and ( ( typeof _locale_cfg_from_bcp47 ) is 'function' ) ), true
    @eq ( Ωfstr__97 = -> _locale_cfg_from_hints?  and ( ( typeof _locale_cfg_from_hints ) is 'function' ) ), true
    @eq ( Ωfstr__98 = -> _hint_as_locale_cfg?     and ( ( typeof _hint_as_locale_cfg    ) is 'function' ) ), true
    #.......................................................................................................
    @eq ( Ωfstr__99 = -> _default_locale                ), { decimal: '.', thousands: ',', grouping: [ 3 ], currency: [ '$', '' ], numerals: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ], percent: '%', minus: '−', nan: 'NaN', fullwidth: true, }
    @eq ( Ωfstr_100 = -> _locale_cfg_from_bcp47 'ar-AE' ), { decimal: '٫', thousands: '٬', grouping: [ 3 ], currency: [ '', ' د.إ.' ], numerals: [ '٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩' ] }
    @eq ( Ωfstr_101 = -> _locale_cfg_from_bcp47 'en-US' ), { decimal: '.', thousands: ',', grouping: [ 3 ], currency: [ '$', '' ] }
    @eq ( Ωfstr_102 = -> _locale_cfg_from_bcp47 'de-DE' ), { decimal: ',', thousands: '.', grouping: [ 3 ], currency: [ '', ' €' ] }
    @eq ( Ωfstr_103 = -> _locale_cfg_from_bcp47 'en-IN' ), { decimal: '.', thousands: ',', grouping: [ 3, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], currency: [ '₹', '' ] }
    #.......................................................................................................
    @eq ( Ωfstr_104 = -> _hint_as_locale_cfg 'ar-AE'    ), { decimal: '٫', thousands: '٬', grouping: [ 3 ], currency: [ '', ' د.إ.' ], numerals: [ '٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩' ] }
    @eq ( Ωfstr_105 = -> _hint_as_locale_cfg 'en-US'    ), { decimal: '.', thousands: ',', grouping: [ 3 ], currency: [ '$', '' ] }
    @eq ( Ωfstr_106 = -> _hint_as_locale_cfg 'de-DE'    ), { decimal: ',', thousands: '.', grouping: [ 3 ], currency: [ '', ' €' ] }
    @eq ( Ωfstr_107 = -> _hint_as_locale_cfg 'en-IN'    ), { decimal: '.', thousands: ',', grouping: [ 3, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], currency: [ '₹', '' ] }
    @eq ( Ωfstr_108 = -> _hint_as_locale_cfg {}         ), {}
    #.......................................................................................................
    @eq ( Ωfstr_109 = -> _locale_cfg_from_hints 'ar-AE'                                                 ), { decimal: '٫', thousands: '٬',  grouping: [ 3 ], currency: [ '', ' د.إ.' ], numerals: [ '٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩' ], percent: '%', minus: '−', nan: 'NaN', fullwidth: true, }
    @eq ( Ωfstr_110 = -> _locale_cfg_from_hints 'en-US'                                                 ), { decimal: '.', thousands: ',', grouping: [ 3 ], currency: [ '$', '' ],      numerals: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ], percent: '%', minus: '−', nan: 'NaN', fullwidth: true, }
    @eq ( Ωfstr_111 = -> _locale_cfg_from_hints 'de-DE'                                                 ), { decimal: ',', thousands: '.', grouping: [ 3 ], currency: [ '', ' €' ],     numerals: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ], percent: '%', minus: '−', nan: 'NaN', fullwidth: true, }
    @eq ( Ωfstr_112 = -> _locale_cfg_from_hints          { percent: '\xa0v.Hd.', }                      ), { decimal: '.', thousands: ',', grouping: [ 3 ], currency: [ '$', '' ],      numerals: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ], percent: ' v.Hd.', minus: '−', nan: 'NaN', fullwidth: true, }
    @eq ( Ωfstr_113 = -> _locale_cfg_from_hints 'de-DE', { percent: '\xa0v.Hd.', }                      ), { decimal: ',', thousands: '.', grouping: [ 3 ], currency: [ '', ' €' ],     numerals: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ], percent: ' v.Hd.', minus: '−', nan: 'NaN', fullwidth: true, }
    @eq ( Ωfstr_114 = -> _locale_cfg_from_hints 'de-DE', { percent: '\xa0v.Hd.', }, { thousands: "'", } ), { decimal: ',', thousands: "'", grouping: [ 3 ], currency: [ '', ' €' ],     numerals: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ], percent: ' v.Hd.', minus: '−', nan: 'NaN', fullwidth: true, }
    @eq ( Ωfstr_115 = -> _locale_cfg_from_hints {}                                                      ), { decimal: '.', thousands: ',', grouping: [ 3 ], currency: [ '$', '' ],      numerals: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ], percent: '%', minus: '−', nan: 'NaN', fullwidth: true, }
    #.......................................................................................................
    do =>
      locale_cfg  = _locale_cfg_from_hints 'de-DE'
      locale      = _d3_format.formatLocale locale_cfg
      @eq ( Ωfstr_116 = -> ( locale.format '_>17,.5%' ) 0.754321    ), '________75,43210%'
      @eq ( Ωfstr_117 = -> ( locale.format '_>17,.5f' ) 1234567890  ), '1.234.567.890,00000'
      return null
    #.......................................................................................................
    do =>
      locale_cfg  = _locale_cfg_from_hints 'de-DE', { numerals: [ '⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹', ], percent: ' v.H.', }
      locale      = _d3_format.formatLocale locale_cfg
      @eq ( Ωfstr_118 = -> ( locale.format '_>17,.5%' ) 0.754321    ), '____⁷⁵,⁴³²¹⁰ v.H.'
      @eq ( Ωfstr_119 = -> ( locale.format '_>17,.5f' ) 1234567890  ), '¹.²³⁴.⁵⁶⁷.⁸⁹⁰,⁰⁰⁰⁰⁰'
      return null
    #.......................................................................................................
    do ( f ) =>
      f = new_ftag 'de-DE', { numerals: [ '⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹', ], percent: ' v.H.', }
      @eq ( Ωfstr_120 = -> ( f"#{0.754321}:_>17.5%;" )    ), '____⁷⁵,⁴³²¹⁰ v.H.'
      return null
    #.......................................................................................................
    @eq ( Ωfstr_121 = -> ( new_ftag 'en-US' )"#{123456789123456789.75}:_>37,.5f;" ), '________123,456,789,123,456,784.00000'
    @eq ( Ωfstr_122 = -> ( new_ftag { grouping: [ 4, ], } )"#{123456789123456789.75}:_>37,.5f;" ), '_________12,3456,7891,2345,6784.00000'
    @eq ( Ωfstr_123 = -> ( new_ftag()       )"#{1.23}:$03.2f;[#{1234567890.123456}:20,.4f;]" ), '$1.23[  1,234,567,890.1235]'
    @eq ( Ωfstr_124 = -> ( new_ftag {}      )"#{1.23}:$03.2f;[#{1234567890.123456}:20,.4f;]" ), '$1.23[  1,234,567,890.1235]'
    @eq ( Ωfstr_125 = -> ( new_ftag 'de-DE' )"#{1.23}:$03.2f;[#{1234567890.123456}:20,.4f;]" ), '1,23 €[  1.234.567.890,1235]'
    @eq ( Ωfstr_126 = -> ( new_ftag 'en-US' )"#{1.23}:$03.2f;[#{1234567890.123456}:20,.4f;]" ), '$1.23[  1,234,567,890.1235]'
    @eq ( Ωfstr_127 = -> ( new_ftag 'es-MX' )"#{1.23}:$03.2f;[#{1234567890.123456}:20,.4f;]" ), '$1.23[  1,234,567,890.1235]'
    @eq ( Ωfstr_128 = -> ( new_ftag 'en-IN' )"#{1.23}:$03.2f;[#{1234567890.123456}:20,.4f;]" ), '₹1.23[ 1,23,45,67,890.1235]'
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  si_units_format_specifier_internals: ->
    { _fmtspec_unit_re } = require '../../../apps/effstring'
    #.......................................................................................................
    do =>
      @eq ( Ωfstr_129 = -> ( '_<15,.3f/y'.match _fmtspec_unit_re )?.groups ), { discard: '/y', unit: 'y', }
      @eq ( Ωfstr_130 = -> ( '_<15,.3f/z'.match _fmtspec_unit_re )?.groups ), { discard: '/z', unit: 'z', }
      @eq ( Ωfstr_131 = -> ( '_<15,.3f/a'.match _fmtspec_unit_re )?.groups ), { discard: '/a', unit: 'a', }
      @eq ( Ωfstr_132 = -> ( '_<15,.3f/f'.match _fmtspec_unit_re )?.groups ), { discard: '/f', unit: 'f', }
      @eq ( Ωfstr_133 = -> ( '_<15,.3f/p'.match _fmtspec_unit_re )?.groups ), { discard: '/p', unit: 'p', }
      @eq ( Ωfstr_134 = -> ( '_<15,.3f/n'.match _fmtspec_unit_re )?.groups ), { discard: '/n', unit: 'n', }
      @eq ( Ωfstr_135 = -> ( '_<15,.3f/µ'.match _fmtspec_unit_re )?.groups ), { discard: '/µ', unit: 'µ', }
      @eq ( Ωfstr_136 = -> ( '_<15,.3f/m'.match _fmtspec_unit_re )?.groups ), { discard: '/m', unit: 'm', }
      @eq ( Ωfstr_137 = -> ( '_<15,.3f/1'.match _fmtspec_unit_re )?.groups ), { discard: '/1', unit: '1', }
      @eq ( Ωfstr_138 = -> ( '_<15,.3f/k'.match _fmtspec_unit_re )?.groups ), { discard: '/k', unit: 'k', }
      @eq ( Ωfstr_139 = -> ( '_<15,.3f/M'.match _fmtspec_unit_re )?.groups ), { discard: '/M', unit: 'M', }
      @eq ( Ωfstr_140 = -> ( '_<15,.3f/G'.match _fmtspec_unit_re )?.groups ), { discard: '/G', unit: 'G', }
      @eq ( Ωfstr_141 = -> ( '_<15,.3f/T'.match _fmtspec_unit_re )?.groups ), { discard: '/T', unit: 'T', }
      @eq ( Ωfstr_142 = -> ( '_<15,.3f/P'.match _fmtspec_unit_re )?.groups ), { discard: '/P', unit: 'P', }
      @eq ( Ωfstr_143 = -> ( '_<15,.3f/E'.match _fmtspec_unit_re )?.groups ), { discard: '/E', unit: 'E', }
      @eq ( Ωfstr_144 = -> ( '_<15,.3f/Z'.match _fmtspec_unit_re )?.groups ), { discard: '/Z', unit: 'Z', }
      @eq ( Ωfstr_145 = -> ( '_<15,.3f/Y'.match _fmtspec_unit_re )?.groups ), { discard: '/Y', unit: 'Y', }
      @eq ( Ωfstr_146 = -> ( '_<15,.3f/b'.match _fmtspec_unit_re )?.groups ), undefined
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  si_units_format_specifier: ->
    { f
      new_ftag
      _default_locale
      _d3_format
      _locale_cfg_from_bcp47
      _locale_cfg_from_hints
      _hint_as_locale_cfg              } = require '../../../apps/effstring'
    #.......................................................................................................
    probes_and_matchers = [
      [ 0.00000042, '__________0.420µ', ]
      [ 0.0000042,  '__________4.200µ', ]
      [ 0.000042,   '_________42.000µ', ]
      [ 0.00042,    '________420.000µ', ]
      [ 0.0042,     '______4,200.000µ', ]
      [ 0.042,      '_____42,000.000µ', ]
      [ 0.42,       '____420,000.000µ', ]
      ]
    #.......................................................................................................
    do =>
      ff = _d3_format.formatPrefix "_>15,.3f", 1e-6
      for [ probe, matcher, ] in probes_and_matchers
        @eq ( Ωfstr_147 = -> ff probe ), matcher
      return null
    #.......................................................................................................
    do =>
      for [ probe, matcher, ] in probes_and_matchers
        @eq ( Ωfstr_148 = -> f"#{probe}:_>15,.3f/µ;" ), matcher
      return null
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  si_units_format_specifiers_updated_with_faults: ->
    { f
      new_ftag
      _default_locale
      _d3_format
      _locale_cfg_from_bcp47
      _locale_cfg_from_hints
      _hint_as_locale_cfg              } = require '../../../apps/effstring'
    #.......................................................................................................
    @eq ( Ωfstr_149 = -> f"d = #{1234.5678}:_>50.20f/y;m" ), 'd = _1234567800000000000000000000.00000000000000000000ym'
    @eq ( Ωfstr_150 = -> f"d = #{1234.5678}:_>50.20f/z;m" ), 'd = ____1234567800000000000000000.00000000000000000000zm'
    @eq ( Ωfstr_151 = -> f"d = #{1234.5678}:_>50.20f/a;m" ), 'd = _______1234567800000000000000.00000000000000000000am'
    @eq ( Ωfstr_152 = -> f"d = #{1234.5678}:_>50.20f/f;m" ), 'd = __________1234567800000000000.00000000000000000000fm'
    @eq ( Ωfstr_153 = -> f"d = #{1234.5678}:_>50.20f/p;m" ), 'd = _____________1234567800000000.00000000000000000000pm'
    @eq ( Ωfstr_154 = -> f"d = #{1234.5678}:_>50.20f/n;m" ), 'd = ________________1234567800000.00000000000000000000nm'
    @eq ( Ωfstr_155 = -> f"d = #{1234.5678}:_>50.20f/µ;m" ), 'd = ___________________1234567800.00000000000000000000µm'
    @eq ( Ωfstr_156 = -> f"d = #{1234.5678}:_>50.20f/m;m" ), 'd = ______________________1234567.80000000000000000000mm'
    @eq ( Ωfstr_157 = -> f"d = #{1234.5678}:_>50.20f/1;m" ), 'd = _________________________1234.56780000000000000000m'
    @eq ( Ωfstr_158 = -> f"d = #{1234.5678}:_>50.20f/k;m" ), 'd = ____________________________1.23456780000000000000km'
    @eq ( Ωfstr_159 = -> f"d = #{1234.5678}:_>50.20f/M;m" ), 'd = ____________________________0.00123456780000000006Mm'
    @eq ( Ωfstr_160 = -> f"d = #{1234.5678}:_>50.20f/G;m" ), 'd = ____________________________0.00000123456780000000Gm'
    @eq ( Ωfstr_161 = -> f"d = #{1234.5678}:_>50.20f/T;m" ), 'd = ____________________________0.00000000123456780000Tm'
    @eq ( Ωfstr_162 = -> f"d = #{1234.5678}:_>50.20f/P;m" ), 'd = ____________________________0.00000000000123456780Pm'
    @eq ( Ωfstr_163 = -> f"d = #{1234.5678}:_>50.20f/E;m" ), 'd = ____________________________0.00000000000000123458Em'
    @eq ( Ωfstr_164 = -> f"d = #{1234.5678}:_>50.20f/Z;m" ), 'd = ____________________________0.00000000000000000123Zm'
    @eq ( Ωfstr_165 = -> f"d = #{1234.5678}:_>50.20f/Y;m" ), 'd = ____________________________0.00000000000000000000Ym'
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  si_units_format_specifiers_updated_ideal: ->
    { f
      new_ftag
      _default_locale
      _d3_format
      _locale_cfg_from_bcp47
      _locale_cfg_from_hints
      _hint_as_locale_cfg              } = require '../../../apps/effstring'
    #.......................................................................................................
    @eq ( Ωfstr_166 = -> f"d = #{1234.5678}:_>50.20f/y;m" ), 'd = _____________________________________1.2345678e+27ym'
    @eq ( Ωfstr_167 = -> f"d = #{1234.5678}:_>50.20f/z;m" ), 'd = _____________________________________1.2345678e+24zm'
    @eq ( Ωfstr_168 = -> f"d = #{1234.5678}:_>50.20f/a;m" ), 'd = _____________________________________1.2345678e+21am'
    @eq ( Ωfstr_169 = -> f"d = #{1234.5678}:_>50.20f/f;m" ), 'd = __________1234567800000000000.00000000000000000000fm'
    @eq ( Ωfstr_170 = -> f"d = #{1234.5678}:_>50.20f/p;m" ), 'd = _____________1234567800000000.00000000000000000000pm'
    @eq ( Ωfstr_171 = -> f"d = #{1234.5678}:_>50.20f/n;m" ), 'd = ________________1234567800000.00000000000000000000nm'
    @eq ( Ωfstr_172 = -> f"d = #{1234.5678}:_>50.20f/µ;m" ), 'd = ___________________1234567800.00000000000000000000µm'
    @eq ( Ωfstr_173 = -> f"d = #{1234.5678}:_>50.20f/m;m" ), 'd = ______________________1234567.80000000004656612873mm'
    @eq ( Ωfstr_174 = -> f"d = #{1234.5678}:_>50.20f/1;m" ), 'd = _________________________1234.56780000000003383320m'
    @eq ( Ωfstr_175 = -> f"d = #{1234.5678}:_>50.20f/k;m" ), 'd = ____________________________1.23456779999999999298km'
    @eq ( Ωfstr_176 = -> f"d = #{1234.5678}:_>50.20f/M;m" ), 'd = ____________________________0.00123456780000000006Mm'
    @eq ( Ωfstr_177 = -> f"d = #{1234.5678}:_>50.20f/G;m" ), 'd = ____________________________0.00000123456780000000Gm'
    @eq ( Ωfstr_178 = -> f"d = #{1234.5678}:_>50.20f/T;m" ), 'd = ____________________________0.00000000123456780000Tm'
    @eq ( Ωfstr_179 = -> f"d = #{1234.5678}:_>50.20f/P;m" ), 'd = ____________________________0.00000000000123456780Pm'
    @eq ( Ωfstr_180 = -> f"d = #{1234.5678}:_>50.20f/E;m" ), 'd = ____________________________0.00000000000000123457Em'
    @eq ( Ωfstr_181 = -> f"d = #{1234.5678}:_>50.20f/Z;m" ), 'd = ____________________________0.00000000000000000123Zm'
    @eq ( Ωfstr_182 = -> f"d = #{1234.5678}:_>50.20f/Y;m" ), 'd = ____________________________0.00000000000000000000Ym'
    # @eq ( Ωfstr_183 = -> f"d = #{1234.5678}:50.60f/y;m" ), 'd =                                      1.2345678e+27ym'
    # @eq ( Ωfstr_184 = -> f"d = #{1234.5678}:50.60f/z;m" ), 'd =                                      1.2345678e+24zm'
    # @eq ( Ωfstr_185 = -> f"d = #{1234.5678}:50.60f/a;m" ), 'd =                                      1.2345678e+21am'
    # @eq ( Ωfstr_186 = -> f"d = #{1234.5678}:50.60f/f;m" ), 'd =           1234567800000000000.00000000000000000000fm'
    # @eq ( Ωfstr_187 = -> f"d = #{1234.5678}:50.60f/p;m" ), 'd =              1234567800000000.00000000000000000000pm'
    # @eq ( Ωfstr_188 = -> f"d = #{1234.5678}:50.60f/n;m" ), 'd =                 1234567800000.00000000000000000000nm'
    # @eq ( Ωfstr_189 = -> f"d = #{1234.5678}:50.60f/µ;m" ), 'd =                    1234567800.00000000000000000000µm'
    # @eq ( Ωfstr_190 = -> f"d = #{1234.5678}:50.60f/m;m" ), 'd =                       1234567.80000000004656612873mm'
    # @eq ( Ωfstr_191 = -> f"d = #{1234.5678}:50.60f/1;m" ), 'd =                          1234.56780000000003383320m'
    # @eq ( Ωfstr_192 = -> f"d = #{1234.5678}:50.60f/k;m" ), 'd =                             1.23456779999999999298km'
    # @eq ( Ωfstr_193 = -> f"d = #{1234.5678}:50.60f/M;m" ), 'd =                             0.00123456780000000006Mm'
    # @eq ( Ωfstr_194 = -> f"d = #{1234.5678}:50.60f/G;m" ), 'd =                             0.0000012345678000000000000Gm'
    # @eq ( Ωfstr_195 = -> f"d = #{1234.5678}:50.60f/T;m" ), 'd =                             0.0000000012345678000000000Tm'
    # @eq ( Ωfstr_196 = -> f"d = #{1234.5678}:50.60f/P;m" ), 'd =                             0.0000000000012345678000000Pm'
    # @eq ( Ωfstr_197 = -> f"d = #{1234.5678}:50.60f/E;m" ), 'd =                             0.0000000000000012345678000Em'
    # @eq ( Ωfstr_198 = -> f"d = #{1234.5678}:50.60f/Z;m" ), 'd =                             0.0000000000000000012345678Zm'
    # @eq ( Ωfstr_199 = -> f"d = #{1234.5678}:50.60f/Y;m" ), 'd =                             0.0000000000000000000012345Ym'
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  si_units_format_specifier_unit: ->
    { f
      new_ftag
      _default_locale
      _d3_format
      _locale_cfg_from_bcp47
      _locale_cfg_from_hints
      _hint_as_locale_cfg              } = require '../../../apps/effstring'
    #.......................................................................................................
    probes_and_matchers = [
      [ 0.00000042, '__________0.000', ]
      [ 0.0000042,  '__________0.000', ]
      [ 0.000042,   '__________0.000', ]
      [ 0.00042,    '__________0.000', ]
      [ 0.0042,     '__________0.004', ]
      [ 0.042,      '__________0.042', ]
      [ 0.42,       '__________0.420', ]
      [ 4.2,        '__________4.200', ]
      [ 42,         '_________42.000', ]
      ]
    #.......................................................................................................
    do =>
      ff = _d3_format.formatPrefix "_>15,.3f", 1
      for [ probe, matcher, ] in probes_and_matchers
        @eq ( Ωfstr_200 = -> ff probe ), matcher
      return null
    #.......................................................................................................
    do =>
      for [ probe, matcher, ] in probes_and_matchers
        @eq ( Ωfstr_201 = -> f"#{probe}:_>15,.3f/1;" ), matcher
      return null
    #.......................................................................................................
    return null

  #=========================================================================================================
  ansi_escapes_and_widths:

    #-------------------------------------------------------------------------------------------------------
    ansi_escapes_dont_count_for_widths: ->
      { f
        new_ftag
        _default_locale
        _d3_format
        _locale_cfg_from_bcp47
        _locale_cfg_from_hints
        _hint_as_locale_cfg             } = require '../../../apps/effstring'
      { to_width
        width_of                        } = require '../../../apps/to-width'
      { default: strip_ansi             } = require 'strip-ansi'
      { default: string_width           } = require '../../../apps/effstring/node_modules/string-width'
      { red
        reverse
        bold                            } = GUY.trm
      #.....................................................................................................
      do =>
        SFMODULES_dev = require '../../../apps/bricabrac-sfmodules'
        { ansi_colors_and_effects: C, } = SFMODULES_dev.require_ansi_colors_and_effects()
        @eq ( Ωfstr_202 = ->         width_of C.red + 'abc' + C.default           ), 3
        @eq ( Ωfstr_203 = ->     string_width C.red + 'abc' + C.default           ), 3
        @eq ( Ωfstr_204 = ->         width_of C.red + C.italic + C.bold + 'abc' + C.bold0 + C.italic0 + C.default           ), 3
        @eq ( Ωfstr_205 = ->     string_width C.red + C.italic + C.bold + 'abc' + C.bold0 + C.italic0 + C.default           ), 3
        ###
to-width:
    "string-width": "7.2.0",
    "wcstring": "^2.1.1"
effstring:
    "string-width": "^7.2.0"


        ###
        ansi_matcher  = /((?:\x1b\[[^m]+m)+)/g
        segmenter     = new Intl.Segmenter()
        split_into_visual_glyphs = ( text ) -> ( d.segment for d from segmenter.segment text )
        debug 'Ωfstr_206',      width_of        f"#{ red reverse bold '' }"
        debug 'Ωfstr_207',      string_width    f"#{ red reverse bold '' }"
        debug 'Ωfstr_208',                      f"\x1b[mA"
        debug 'Ωfstr_209',                      f"\x1b[45mA"
        debug 'Ωfstr_210',                      f"\x1b[999mA"
        debug 'Ωfstr_211',                      f"\x1b[999:876:7mA"
        text_with_ansi_codes = "ABC#{ C.black + C.bg_red + C.bold + 'DEF' + C.bold0 + C.default + C.bg_default }XYZ"
        debug 'Ωfstr_212',                    text_with_ansi_codes
        # debug 'Ωfstr_213', ( d.segment for d from segmenter.segment  text_with_ansi_codes )
        debug 'Ωfstr_214', rpr                text_with_ansi_codes
        debug 'Ωfstr_215', width_of           text_with_ansi_codes
        debug 'Ωfstr_216', string_width       text_with_ansi_codes
        debug 'Ωfstr_217', rpr strip_ansi     text_with_ansi_codes
        urge 'Ωfstr_218', d for d from        text_with_ansi_codes.matchAll ansi_matcher
        debug 'Ωfstr_219',                    text_with_ansi_codes.replace  ansi_matcher, '.'
        chunkify = ( text ) ->
          chunks          = []
          width           = 0
          has_ansi        = false
          chunk_has_ansi  = true
          ### TAINT might as well return an empty list of chunks ###
          if text is ''
            return { has_ansi, width, chunks: [ { has_ansi, width, chunk: '', }, ], }
          for chunk in text.split ansi_matcher
            chunk_has_ansi    = not chunk_has_ansi
            has_ansi        or= chunk_has_ansi
            continue if chunk is ''
            chunk_width       = if has_ansi then 0 else string_width chunk
            width            += chunk_width
            chunks.push { has_ansi: chunk_has_ansi, width: chunk_width, chunk, }
          return { has_ansi, width, chunks, }
          # [Symbol.iterator]: ( -> d for d in chunks )
        do =>
          echo '—————————————————————————————————————————————'
          text = text_with_ansi_codes
          urge 'Ωfstr_220',                chunkify text
          info 'Ωfstr_221', d for d from ( chunkify text ).chunks
        do =>
          echo '—————————————————————————————————————————————'
          text = 'ABCDEFXYZ'
          urge 'Ωfstr_222',                chunkify text
          info 'Ωfstr_223', d for d from ( chunkify text ).chunks
        do =>
          echo '—————————————————————————————————————————————'
          text = "#{ C.black + C.bg_red + C.bold + C.bold0 + C.default + C.bg_default }"
          urge 'Ωfstr_224',                chunkify text
          info 'Ωfstr_225', d for d from ( chunkify text ).chunks
        do =>
          echo '—————————————————————————————————————————————'
          text = ''
          urge 'Ωfstr_226',                chunkify text
          info 'Ωfstr_227', d for d from ( chunkify text ).chunks
        process.exit 111
      #.....................................................................................................
      @eq ( Ωfstr_228 = ->         width_of                  'abc'            ), 3
      @eq ( Ωfstr_229 = ->         width_of red              'abc'            ), 3
      @eq ( Ωfstr_230 = ->         width_of reverse          'abc'            ), 3
      @eq ( Ωfstr_231 = ->         width_of bold             'abc'            ), 3
      @eq ( Ωfstr_232 = ->         width_of red reverse bold 'abc'            ), 3
      @eq ( Ωfstr_233 = ->     string_width                  'abc'            ), 3
      @eq ( Ωfstr_234 = ->     string_width red              'abc'            ), 3
      @eq ( Ωfstr_235 = ->     string_width reverse          'abc'            ), 3
      @eq ( Ωfstr_236 = ->     string_width bold             'abc'            ), 3
      @eq ( Ωfstr_237 = ->     string_width red reverse bold 'abc'            ), 3
      #.....................................................................................................
      @eq ( Ωfstr_238 = ->            f"[#{                  'abc' }:<20c;]"  ), '[abc                 ]'
      @eq ( Ωfstr_239 = -> strip_ansi f"[#{ red              'abc' }:<20c;]"  ), '[abc                 ]'
      @eq ( Ωfstr_240 = -> strip_ansi f"[#{ reverse          'abc' }:<20c;]"  ), '[abc                 ]'
      @eq ( Ωfstr_241 = -> strip_ansi f"[#{ bold             'abc' }:<20c;]"  ), '[abc                 ]'
      @eq ( Ωfstr_242 = -> strip_ansi f"[#{ red reverse bold 'abc' }:<20c;]"  ), '[abc                 ]'
      #.....................................................................................................
      @eq ( Ωfstr_243 = ->            f"[#{                  'abc' }:>20c;]"  ), '[                 abc]'
      @eq ( Ωfstr_244 = -> strip_ansi f"[#{ red              'abc' }:>20c;]"  ), '[                 abc]'
      @eq ( Ωfstr_245 = -> strip_ansi f"[#{ reverse          'abc' }:>20c;]"  ), '[                 abc]'
      @eq ( Ωfstr_246 = -> strip_ansi f"[#{ bold             'abc' }:>20c;]"  ), '[                 abc]'
      @eq ( Ωfstr_247 = -> strip_ansi f"[#{ red reverse bold 'abc' }:>20c;]"  ), '[                 abc]'
      #.....................................................................................................
      @eq ( Ωfstr_248 = ->            f"[#{                  'abc' }:^20c;]"  ), '[        abc         ]'
      @eq ( Ωfstr_249 = -> strip_ansi f"[#{ red              'abc' }:^20c;]"  ), '[        abc         ]'
      @eq ( Ωfstr_250 = -> strip_ansi f"[#{ reverse          'abc' }:^20c;]"  ), '[        abc         ]'
      @eq ( Ωfstr_251 = -> strip_ansi f"[#{ bold             'abc' }:^20c;]"  ), '[        abc         ]'
      @eq ( Ωfstr_252 = -> strip_ansi f"[#{ red reverse bold 'abc' }:^20c;]"  ), '[        abc         ]'
      #.....................................................................................................
      @eq ( Ωfstr_253 = ->            f"[#{                  'abc' }:=20c;]"  ), '[                 abc]'
      # @eq ( Ωfstr_254 = -> strip_ansi f"[#{ red              'abc' }:=20c;]"  ), '[        abc         ]'
      # @eq ( Ωfstr_255 = -> strip_ansi f"[#{ reverse          'abc' }:=20c;]"  ), '[        abc         ]'
      # @eq ( Ωfstr_256 = -> strip_ansi f"[#{ bold             'abc' }:=20c;]"  ), '[        abc         ]'
      # @eq ( Ωfstr_257 = -> strip_ansi f"[#{ red reverse bold 'abc' }:=20c;]"  ), '[        abc         ]'
      #.....................................................................................................
      return null



############################################################################################################
#
#===========================================================================================================
@future_intertype_tasks =

  #---------------------------------------------------------------------------------------------------------
  handle_nonnumeric_values: ->
    { f
      new_ftag
      _default_locale
      _d3_format
      _locale_cfg_from_bcp47
      _locale_cfg_from_hints
      _hint_as_locale_cfg              } = require '../../../apps/effstring'
    #.......................................................................................................
    @eq ( Ωfstr_258 = -> urge 'Ωfstr_259', rpr f"d = #{"helo"}:60.40f/k;m" ), null
    @eq ( Ωfstr_260 = -> urge 'Ωfstr_261', rpr f"d = #{true}:60.40f/k;m" ), null
    # @eq ( Ωfstr_262 = -> urge 'Ωfstr_263', rpr f"d = #{123456789n}:60.40f/k;m" ), null
    #.......................................................................................................
    return null

#===========================================================================================================
demo =
  README: ->
    { f, new_ftag, _d3_format, } = require '../../../apps/effstring'
    echo()
    do =>
      # info 'Ωfstr_264', f"——#{1234}:$#20x;——"
      info 'Ωfstr_265', f"——#{1234}:;>20;——"
      info 'Ωfstr_266', f"——#{1234}:#>20.3e;——"
      info 'Ωfstr_267', f"——#{1234}:#>20.3f;——"
      info 'Ωfstr_268', f"——#{1234}:#>20.3s;——"
      info 'Ωfstr_269', f"——#{1234}:#>20.3n;——"
      info 'Ωfstr_270', f"——#{Infinity}:#>20.3n;——"
    do =>
      ja_jp_cfg     = {
        numerals: [ '〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', ], }
      f_en = new_ftag 'en-GB'
      f_ja = new_ftag 'ja-JP', ja_jp_cfg
      console.log f_en"#{'Alice'}:*<15c; is in #{'London'}:.^12c; and has #{1234}:_>$22,.2f; in their pocket."
      console.log f_en"#{'Bob'}:*<15c; is in #{'London'}:.^12c; and has #{45678.93}:_>$22,.2f; in their pocket."
      console.log f_ja"#{'アリスさん'}:*<15c; is in #{'倫敦'}:.^12c; and has #{1234}:_>$22,.2f; in their pocket."
      console.log f_ja"#{'ボブさん'}:*<15c; is in #{'倫敦'}:.^12c; and has #{45678.93}:_>$22,.2f; in their pocket."
      return null
    do =>
      zh_tw_cfg     = {
        currency: [ '新臺幣', '', ],
        # numerals: [ '〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', ],
        }
      f_en = new_ftag 'en-GB'
      f_zh = new_ftag 'zh-CN', zh_tw_cfg
      console.log f_en"#{-98765.43}:·>$20,.2f;"
      console.log f_zh"#{-98765.43}:·>$20,.2f;"
      console.log f_en"#{-98765.43}:·=$20,.2f;"
      console.log f_zh"#{-98765.43}:·=$20,.2f;"
      return null
    echo()
    do =>
      ja_jp_cfg     = {
        numerals: [ '〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', ], }
      f_en = new_ftag 'en-GB',            { fullwidth: false, }
      f_ja = new_ftag 'ja-JP', ja_jp_cfg, { fullwidth: false, }
      console.log f_en"#{'Alice'}:*<15c; is in #{'London'}:.^12c; and has #{1234}:_>$22,.2f; in their pocket."
      console.log f_en"#{'Bob'}:*<15c; is in #{'London'}:.^12c; and has #{45678.93}:_>$22,.2f; in their pocket."
      console.log f_ja"#{'アリスさん'}:*<15c; is in #{'倫敦'}:.^12c; and has #{1234}:_>$22,.2f; in their pocket."
      console.log f_ja"#{'ボブさん'}:*<15c; is in #{'倫敦'}:.^12c; and has #{45678.93}:_>$22,.2f; in their pocket."
      return null
    do =>
      zh_tw_cfg     = {
        currency: [ '新臺幣', '', ],
        # numerals: [ '〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', ],
        }
      f_en = new_ftag 'en-GB',            { fullwidth: false, }
      f_zh = new_ftag 'zh-CN', zh_tw_cfg, { fullwidth: false, }
      console.log f_en"#{-98765.43}:·>$20,.2f;"
      console.log f_zh"#{-98765.43}:·>$20,.2f;"
      console.log f_en"#{-98765.43}:·=$20,.2f;"
      console.log f_zh"#{-98765.43}:·=$20,.2f;"
      return null
    echo()
    do =>
      zh_tw_cfg     = {
        currency: [ 'NT ', ' $', ],
        numerals:   [ '(0)', '(1)', '(2)', '(3)', '(4)', '(5)', '(6)', '(7)', '(8)', '(9)', ]
        }
      f_en = new_ftag 'en-GB',            { fullwidth: true, }
      f_zh = new_ftag 'zh-CN', zh_tw_cfg, { fullwidth: true, }
      console.log f_en"#{-98765.43}:·>$50,.2f;"
      console.log f_zh"#{-98765.43}:·>$50,.2f;"
      console.log f_en"#{-98765.43}:·=$50,.2f;"
      console.log f_zh"#{-98765.43}:·=$50,.2f;"
      return null
    do =>
      zh_tw_cfg     = {
        currency: [ 'NT ', ' $', ],
        numerals:   [ '(0)', '(1)', '(2)', '(3)', '(4)', '(5)', '(6)', '(7)', '(8)', '(9)', ]
        }
      f_en = new_ftag 'en-GB',            { fullwidth: false, }
      f_zh = new_ftag 'zh-CN', zh_tw_cfg, { fullwidth: false, }
      console.log f_en"#{-98765.43}:·>$50,.2f;"
      console.log f_zh"#{-98765.43}:·>$50,.2f;"
      console.log f_en"#{-98765.43}:·=$50,.2f;"
      console.log f_zh"#{-98765.43}:·=$50,.2f;"
      return null
    echo()
    do =>
      # f_en = new_ftag 'en-GB',            { fullwidth: false, }
      # console.log f_en"#{-98765.43}:·>$50,.2f;"
      do =>
        echo()
        ff = _d3_format.formatPrefix "_>15,.3~", 1e-6
        info 'Ωfstr_271', ff 0.00000042
        info 'Ωfstr_272', ff 0.0000042
        info 'Ωfstr_273', ff 0.000042
        info 'Ωfstr_274', ff 0.00042
        info 'Ωfstr_275', ff 0.0042
        info 'Ωfstr_276', ff 0.042
        info 'Ωfstr_277', ff 0.42
        return null
      do =>
        echo()
        ff = _d3_format.formatPrefix "_>15,.3~s", 1e-6
        info 'Ωfstr_278', ff 0.00000042
        info 'Ωfstr_279', ff 0.0000042
        info 'Ωfstr_280', ff 0.000042
        info 'Ωfstr_281', ff 0.00042
        info 'Ωfstr_282', ff 0.0042
        info 'Ωfstr_283', ff 0.042
        info 'Ωfstr_284', ff 0.42
        return null
      do =>
        echo()
        ff = _d3_format.formatPrefix "_>15,.3~f", 1e-6
        info 'Ωfstr_285', ff 0.00000042
        info 'Ωfstr_286', ff 0.0000042
        info 'Ωfstr_287', ff 0.000042
        info 'Ωfstr_288', ff 0.00042
        info 'Ωfstr_289', ff 0.0042
        info 'Ωfstr_290', ff 0.042
        info 'Ωfstr_291', ff 0.42
        return null
      do =>
        echo()
        info 'Ωfstr_292', f"#{0.00000042}:_>15,.3f/µ;"
        info 'Ωfstr_293', f"#{0.0000042}:_>15,.3f/µ;"
        info 'Ωfstr_294', f"#{0.000042}:_>15,.3f/µ;"
        info 'Ωfstr_295', f"#{0.00042}:_>15,.3f/µ;"
        info 'Ωfstr_296', f"#{0.0042}:_>15,.3f/µ;"
        info 'Ωfstr_297', f"#{0.042}:_>15,.3f/µ;"
        info 'Ωfstr_298', f"#{0.42}:_>15,.3f/µ;"
        return null
      do =>
        echo()
        info 'Ωfstr_299', f"#{ 123000    }:_>9,.3f/k;m"
        info 'Ωfstr_300', f"#{ 7000      }:_>9,.3f/k;m"
        info 'Ωfstr_301', f"#{ 500       }:_>9,.3f/k;m"
        info 'Ωfstr_302', f"#{ 99        }:_>9,.3f/k;m"
        return null
      do =>
        echo()
        ff = _d3_format.formatPrefix "_>15,.3f", 1e-3
        info 'Ωfstr_303', ff 0.00089
        info 'Ωfstr_304', ff 0.0089
        info 'Ωfstr_305', ff 0.089
        info 'Ωfstr_306', ff 0.89
        info 'Ωfstr_307', ff 8.9
        info 'Ωfstr_308', ff 89
        info 'Ωfstr_309', ff 890
        return null
      do =>
        echo()
        ff = _d3_format.formatPrefix "_>15,.3f", 1e-2
        info 'Ωfstr_310', ff 0.00089
        info 'Ωfstr_311', ff 0.0089
        info 'Ωfstr_312', ff 0.089
        info 'Ωfstr_313', ff 0.89
        info 'Ωfstr_314', ff 8.9
        info 'Ωfstr_315', ff 89
        info 'Ωfstr_316', ff 890
        return null
      do =>
        echo()
        ff = _d3_format.formatPrefix "_>15,.3f", 1e-1
        info 'Ωfstr_317', ff 0.00089
        info 'Ωfstr_318', ff 0.0089
        info 'Ωfstr_319', ff 0.089
        info 'Ωfstr_320', ff 0.89
        info 'Ωfstr_321', ff 8.9
        info 'Ωfstr_322', ff 89
        info 'Ωfstr_323', ff 890
        return null
      do =>
        echo()
        ff = _d3_format.formatPrefix "_>15,.3f", 1e0
        scale = 1 / 1e-2
        info 'Ωfstr_324', ff 0.00089  * scale
        info 'Ωfstr_325', ff 0.0089   * scale
        info 'Ωfstr_326', ff 0.089    * scale
        info 'Ωfstr_327', ff 0.89     * scale
        info 'Ωfstr_328', ff 8.9      * scale
        info 'Ωfstr_329', ff 89       * scale
        info 'Ωfstr_330', ff 890      * scale
        return null
    echo()
    return null

  #=========================================================================================================
  intl_number: ->
    { f, new_ftag, _d3_format, } = require '../../../apps/effstring'
    { reverse: rvs } = GUY.trm
    debug 'Ωfstr_331', 1234567891234567891
    debug 'Ωfstr_332', f"#{1234567891234567891}:<30.3f;"
    # debug 'Ωfstr_333', f"#{1234567891234567891n}:<30.3f;"
    debug 'Ωfstr_334', f"#{'1234567891234567891'}:<30.3f;"
    do =>
      locale = new Intl.NumberFormat 'en-US' #, { style: 'currency', currency: 'USD', }
      help 'Ωfstr_335', locale.resolvedOptions()
      urge 'Ωfstr_336', locale.format 9876543210
      for { type, value, } in locale.formatToParts 9876543210
        debug 'Ωfstr_337', ( f"#{type}:15c;" ), ( rvs rpr value )
    echo()
    do =>
      number  = 123456.789
      de_DE   = new Intl.NumberFormat 'de-DE'; urge 'Ωfstr_338', rvs rpr de_DE.format number
      en_US   = new Intl.NumberFormat 'en-US'; urge 'Ωfstr_339', rvs rpr en_US.format number
      return null
    # You can also specify additional options such as the style of formatting (decimal, currency, or
    # percent), the currency to use if formatting a currency, and the number of minimum and maximum fraction
    # digits. For instance, to format a number as a currency in US dollars:
    amount  = 654321.987;
    do =>
      numberFormat = new Intl.NumberFormat 'en-US', { style: 'currency', currency: 'USD', }
      info 'Ωfstr_340', rvs rpr numberFormat.format amount
    do =>
      numberFormat = new Intl.NumberFormat 'en-US', { style: 'percent', currency: 'USD', }
      info 'Ωfstr_341', rvs rpr numberFormat.format amount
      info 'Ωfstr_342', rvs rpr numberFormat.format 0.756789
    do =>
      numberFormat = new Intl.NumberFormat 'en-US', { style: 'percent', currency: 'USD', maximumSignificantDigits: 2, }
      info 'Ωfstr_343', rvs rpr numberFormat.format amount
      info 'Ωfstr_344', rvs rpr numberFormat.format 0.756789
    do =>
      # the nu extension key requests a numbering system, e.g. Chinese decimal
      help 'Ωfstr_345', rvs rpr ( new Intl.NumberFormat 'zh-Hans-CN-u-nu-hanidec' ).format 123456.789
      help 'Ωfstr_346', rvs rpr ( new Intl.NumberFormat 'zh-Hans-CN-u-nu-hans'    ).format 123456.789
      help 'Ωfstr_347', rvs rpr ( new Intl.NumberFormat 'zh-Hans-CN-u-nu-hansfin' ).format 123456.789
      help 'Ωfstr_348', rvs rpr ( new Intl.NumberFormat 'zh-Hant-TW-u-nu-hant'    ).format 123456.789
      help 'Ωfstr_349', rvs rpr ( new Intl.NumberFormat 'zh-Hant-TW-u-nu-hantfin' ).format 123456.789
      help 'Ωfstr_350', rvs rpr ( new Intl.NumberFormat 'roman' ).format 123456.789
    do =>
      # Additionally, you can use the format method of an Intl.NumberFormat instance to format a number
      # according to the locale and formatting options of the object
      numberFormat = new Intl.NumberFormat 'en-US'
      info 'Ωfstr_351', rvs rpr numberFormat.format 123456.789 # "123,456.789"
    return null

  #=========================================================================================================
  mantissa_exponent: ->
    { f, new_ftag, _d3_format, } = require '../../../apps/effstring'
    { reverse: rvs } = GUY.trm
    do =>
    get_mantissa_and_exponent = ( num ) ->
      bits      = num.toString 2
      sign      = bits is '1'
      exponent  = parseInt( bits.slice(1, 12), 2) - 1023
      mantissa  = '1' + bits.slice(12)
      return { sign, exponent, mantissa, }
    d = 123_456_789.123456789
    e = d * 1e18; debug 'Ωfstr_352', f"#{e}:34,.17;", get_mantissa_and_exponent e
    e = d * 1e12; debug 'Ωfstr_353', f"#{e}:34,.17;", get_mantissa_and_exponent e
    e = d * 1e09; debug 'Ωfstr_354', f"#{e}:34,.17;", get_mantissa_and_exponent e
    e = d * 1e06; debug 'Ωfstr_355', f"#{e}:34,.17;", get_mantissa_and_exponent e
    e = d * 1e03; debug 'Ωfstr_356', f"#{e}:34,.17;", get_mantissa_and_exponent e
    e = d;        debug 'Ωfstr_357', f"#{e}:34,.17;", get_mantissa_and_exponent e
    e = d / 1e03; debug 'Ωfstr_358', f"#{e}:34,.17;", get_mantissa_and_exponent e
    e = d / 1e06; debug 'Ωfstr_359', f"#{e}:34,.17;", get_mantissa_and_exponent e
    e = d / 1e09; debug 'Ωfstr_360', f"#{e}:34,.17;", get_mantissa_and_exponent e
    e = d / 1e12; debug 'Ωfstr_361', f"#{e}:34,.17;", get_mantissa_and_exponent e
    e = d / 1e18; debug 'Ωfstr_362', f"#{e}:34,.17;", get_mantissa_and_exponent e
    formatter = new Intl.NumberFormat 'en-US', {
      useGrouping:              false,
      # minimumFractionDigits:    40,
      # maximumFractionDigits:    40,
      minimumSignificantDigits: 16, # max allowed value is 21
      maximumSignificantDigits: 16, # max allowed value is 21
      }
    e = d * 1e200; help 'Ωfstr_363', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e100; help 'Ωfstr_364', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e50; help 'Ωfstr_365', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e44; help 'Ωfstr_366', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e41; help 'Ωfstr_367', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e39; help 'Ωfstr_368', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e36; help 'Ωfstr_369', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e33; help 'Ωfstr_370', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e30; help 'Ωfstr_371', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e27; help 'Ωfstr_372', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e24; help 'Ωfstr_373', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e21; help 'Ωfstr_374', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e18; help 'Ωfstr_375', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e15; help 'Ωfstr_376', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e12; help 'Ωfstr_377', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e09; help 'Ωfstr_378', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e06; help 'Ωfstr_379', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d * 1e03; help 'Ωfstr_380', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    echo()
    e = d;        help 'Ωfstr_381', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    echo()
    e = d / 1e03; help 'Ωfstr_382', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e06; help 'Ωfstr_383', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e09; help 'Ωfstr_384', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e12; help 'Ωfstr_385', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e15; help 'Ωfstr_386', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e18; help 'Ωfstr_387', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e21; help 'Ωfstr_388', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e24; help 'Ωfstr_389', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e27; help 'Ωfstr_390', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e30; help 'Ωfstr_391', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e33; help 'Ωfstr_392', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e36; help 'Ωfstr_393', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e39; help 'Ωfstr_394', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e41; help 'Ωfstr_395', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e44; help 'Ωfstr_396', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e100; help 'Ωfstr_397', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    e = d / 1e200; help 'Ωfstr_398', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    echo()
    e = 0.1 + 0.1 + 0.1;        help 'Ωfstr_399', f"#{formatter.format e}:>60c;".replace /0/g, '*'
    return null

  #=========================================================================================================
  grouping: ->
    { f, new_ftag, _d3_format, } = require '../../../apps/effstring'
    { reverse: rvs } = GUY.trm
    #-------------------------------------------------------------------------------------------------------
    # group_digits = ( text, n = 3, separator = ',' ) ->
    #   ### TAINT validate n is integer between 1 and 100 ###
    #   # grouping_re = /// \B (?= ( \d{ #{n} } )+ (?! \d ) ) ///g
    #   grouping_re = /// \B (?= ( \d{ #{n} } )+ $ ) ///g
    #   return text.replace grouping_re, separator
    notation = ->
      '...,###'                   ; [ ',', 3, ]
      '...,###,##-#:#'            ; [ ',', 3, ',', 2, '-', 1, ':', 1, ]
      ',###'                      ; [ 0, ',', 3, ]
      ',###,##-#:#'               ; [ 0, ',', 3, ',', 2, '-', 1, ':', 1, ]
    #-------------------------------------------------------------------------------------------------------
    urge 'Ωfstr_400', f"#{group_digits '1'}:>20c;"
    urge 'Ωfstr_401', f"#{group_digits '12'}:>20c;"
    urge 'Ωfstr_402', f"#{group_digits '123'}:>20c;"
    urge 'Ωfstr_403', f"#{group_digits '1234'}:>20c;"
    urge 'Ωfstr_404', f"#{group_digits '12345'}:>20c;"
    urge 'Ωfstr_405', f"#{group_digits '123456'}:>20c;"
    urge 'Ωfstr_406', f"#{group_digits '1234567'}:>20c;"
    urge 'Ωfstr_407', f"#{group_digits '12345678'}:>20c;"
    urge 'Ωfstr_408', f"#{group_digits '123456789'}:>20c;"
    urge 'Ωfstr_409', f"#{group_digits '1234567890'}:>20c;"
    #-------------------------------------------------------------------------------------------------------
    class TOBEDONE_Error extends Error
    #-------------------------------------------------------------------------------------------------------
    walk_group_steps = ( grouping_cfg, chr_count ) ->
      ### assuming grouping_cfg has been validated ###
      ### TAINT consider to use `grouping_cfg.at -1` &c ###
      ### TAINT validate chr_count ###
      return null if chr_count < 1
      chr_idx   = chr_count
      group_idx = grouping_cfg.length - 2
      repeat    = grouping_cfg[ 0 ] isnt 0
      loop
        [ marker, delta, ] = grouping_cfg[ group_idx .. group_idx + 1 ]
        ### for safety only, should never happen with validated grouping_cfg: ###
        throw new TOBEDONE_Error "delta is zero or less" if delta < 1
        chr_idx -= delta
        break if chr_idx <= 0
        yield { marker, delta, chr_idx, }
        if repeat
          group_idx -= 2 if group_idx > 1
        else
          break if group_idx < 1
          group_idx -= 2
      return null
    #-------------------------------------------------------------------------------------------------------
    demo_grouping = ( text, grouping_cfg ) ->
      # [...new Intl.Segmenter().segment( text )].map(s => s.segment)
      urge 'Ωfstr_410', rpr grouping_cfg.join ''
      chrs = Array.from text
      for insertion from walk_group_steps grouping_cfg, chrs.length
        chrs.splice insertion.chr_idx, 0, insertion.marker
      return chrs.join ''
    #-------------------------------------------------------------------------------------------------------
    do =>
      info 'Ωfstr_411', demo_grouping '98765432109876543210', [     ',', 3, ',', 2, '-', 1, ':', 1, ]
      info 'Ωfstr_412', demo_grouping '98765432109876543210', [ 0,  ',', 3, ',', 2, '-', 1, ':', 1, ]
      info 'Ωfstr_413', demo_grouping '98765432109876543210', [     ',', 1,                         ]
      info 'Ωfstr_414', demo_grouping '98765432109876543210', [     ',', 2,                         ]
      info 'Ωfstr_415', demo_grouping '98765432109876543210', [     ',', 3,                         ]
      info 'Ωfstr_416', demo_grouping '98765432109876543210', [     ',', 4,                         ]
      info 'Ωfstr_417', demo_grouping '98765432109876543210', [     ',', 5,                         ]
    #-------------------------------------------------------------------------------------------------------
    return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  all_tasks = { intertype_tasks: @intertype_tasks, future_intertype_tasks: @future_intertype_tasks, }
  # ( new Test guytest_cfg ).test all_tasks
  ( new Test guytest_cfg ).test @intertype_tasks
  ( new Test guytest_cfg ).test { ansi_escapes_and_widths: @intertype_tasks.ansi_escapes_and_widths, }
  # ( new Test guytest_cfg ).test @future_intertype_tasks
  # ( new Test { throw_on_error: true, } ).test @intertype_tasks
  # ( new Test { throw_on_error: false, } ).test @intertype_tasks
  # ( new Test { throw_on_error: false, } ).test { si_units_format_specifier: @intertype_tasks.si_units_format_specifier, }
  # ( new Test() ).test demo
  # demo.README()
  # demo.intl_number()
  # demo.mantissa_exponent()
  # demo.grouping()

