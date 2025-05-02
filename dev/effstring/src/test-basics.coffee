

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
    @throws ( Ωfstr__28 = -> f"(#{123}:;>15)"       ), /\(Effstring_syntax_error\) illegal format expression ':;>15\)'/
    @throws ( Ωfstr__29 = -> f"(#{123}:)"           ), /\(Effstring_syntax_error\) illegal format expression/
    @throws ( Ωfstr__30 = -> f"(#{123}:;)"          ), /\(Effstring_syntax_error\) illegal format expression ':;\)'/
    @throws ( Ωfstr__31 = -> f"(#{123}:--->3f;)"    ), /\(Effstring_lib_syntax_error\) illegal format expression '--->3f'/
    @eq ( Ωfstr__32 = -> try f"(#{123}:;)"        catch e then e instanceof Effstring_error   ), true
    @eq ( Ωfstr__33 = -> try f"(#{123}:;)"        catch e then e instanceof Effstring_syntax_error   ), true
    @eq ( Ωfstr__34 = -> try f"(#{123}:;)"        catch e then e instanceof Effstring_lib_syntax_error   ), false
    @eq ( Ωfstr__35 = -> try f"(#{123}:--->3f;)"  catch e then e instanceof Effstring_error   ), true
    @eq ( Ωfstr__36 = -> try f"(#{123}:--->3f;)"  catch e then e instanceof Effstring_syntax_error   ), true
    @eq ( Ωfstr__37 = -> try f"(#{123}:--->3f;)"  catch e then e instanceof Effstring_lib_syntax_error   ), true
    @throws ( Ωfstr__38 = -> f"(#{123}:\\;<5;)"    ), /illegal format expression/
    @throws ( Ωfstr__39 = -> f"(#{123}:\\;<5;);"   ), /illegal format expression/
    @throws ( Ωfstr__40 = -> f"(#{123}:\\;<5;)\\;" ), /illegal format expression/
    @throws ( Ωfstr__41 = -> f"(#{123}:\\;>15;)"   ), /illegal format expression/
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
    @throws ( Ωfstr__74 = -> f"#{0}:foo;"   ), /invalid format: foo/
    @throws ( Ωfstr__75 = -> f"#{0}:.-2s;"  ), /invalid format: \.-2s/
    @throws ( Ωfstr__76 = -> f"#{0}:.f;"    ), /invalid format: \.f/
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
  si_units_format_specifier: ->
    { f
      new_ftag
      _default_locale
      _d3_format
      _locale_cfg_from_bcp47
      _locale_cfg_from_hints
      _hint_as_locale_cfg              } = require '../../../apps/effstring'
    #.......................................................................................................
    do =>
      ff = _d3_format.formatPrefix "_>15,.3f", 1e-6
      matchers = []
      info 'Ωfstr_129', rpr ff 0.00000042
      info 'Ωfstr_130', rpr ff 0.0000042
      info 'Ωfstr_131', rpr ff 0.000042
      info 'Ωfstr_132', rpr ff 0.00042
      info 'Ωfstr_133', rpr ff 0.0042
      info 'Ωfstr_134', rpr ff 0.042
      info 'Ωfstr_135', rpr ff 0.42
      return null
    # do =>
    #   echo()
    #   info 'Ωfstr_136', f"#{0.00000042}:_<15,.3/µ;"
    #   info 'Ωfstr_137', f"#{0.0000042}:_<15,.3/µ;"
    #   info 'Ωfstr_138', f"#{0.000042}:_<15,.3/µ;"
    #   info 'Ωfstr_139', f"#{0.00042}:_<15,.3/µ;"
    #   info 'Ωfstr_140', f"#{0.0042}:_<15,.3/µ;"
    #   info 'Ωfstr_141', f"#{0.042}:_<15,.3/µ;"
    #   info 'Ωfstr_142', f"#{0.42}:_<15,.3/µ;"
    # do ( f ) =>
    #   f = new_ftag 'de-DE', { numerals: [ '⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹', ], percent: ' v.H.', }
    #   @eq ( Ωfstr_143 = -> ( f"#{0.754321}:_>17.5%;" )    ), '____⁷⁵,⁴³²¹⁰ v.H.'
    #   return null
    #.......................................................................................................
    # @eq ( Ωfstr_144 = -> ( new_ftag 'en-IN' )"#{1.23}:$03.2f;[#{1234567890.123456}:20,.4f;]" ), '₹1.23[ 1,23,45,67,890.1235]'
    #.......................................................................................................
    return null

#===========================================================================================================
README_demo = ->
  { f, new_ftag, _d3_format, } = require '../../../apps/effstring'
  echo()
  do =>
    # info 'Ωfstr_145', f"——#{1234}:$#20x;——"
    info 'Ωfstr_146', f"——#{1234}:;>20;——"
    info 'Ωfstr_147', f"——#{1234}:#>20.3e;——"
    info 'Ωfstr_148', f"——#{1234}:#>20.3f;——"
    info 'Ωfstr_149', f"——#{1234}:#>20.3s;——"
    info 'Ωfstr_150', f"——#{1234}:#>20.3n;——"
    info 'Ωfstr_151', f"——#{Infinity}:#>20.3n;——"
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
      ff = _d3_format.formatPrefix "_<15,.3~", 1e-6
      info 'Ωfstr_152', ff 0.00000042
      info 'Ωfstr_153', ff 0.0000042
      info 'Ωfstr_154', ff 0.000042
      info 'Ωfstr_155', ff 0.00042
      info 'Ωfstr_156', ff 0.0042
      info 'Ωfstr_157', ff 0.042
      info 'Ωfstr_158', ff 0.42
      return null
    do =>
      echo()
      ff = _d3_format.formatPrefix "_<15,.3~s", 1e-6
      info 'Ωfstr_159', ff 0.00000042
      info 'Ωfstr_160', ff 0.0000042
      info 'Ωfstr_161', ff 0.000042
      info 'Ωfstr_162', ff 0.00042
      info 'Ωfstr_163', ff 0.0042
      info 'Ωfstr_164', ff 0.042
      info 'Ωfstr_165', ff 0.42
      return null
    do =>
      echo()
      ff = _d3_format.formatPrefix "_<15,.3~f", 1e-6
      info 'Ωfstr_166', ff 0.00000042
      info 'Ωfstr_167', ff 0.0000042
      info 'Ωfstr_168', ff 0.000042
      info 'Ωfstr_169', ff 0.00042
      info 'Ωfstr_170', ff 0.0042
      info 'Ωfstr_171', ff 0.042
      info 'Ωfstr_172', ff 0.42
      return null
    do =>
      echo()
      ff = _d3_format.formatPrefix "_<15,.3~c", 1e-6
      info 'Ωfstr_173', ff 0.00000042
      info 'Ωfstr_174', ff 0.0000042
      info 'Ωfstr_175', ff 0.000042
      info 'Ωfstr_176', ff 0.00042
      info 'Ωfstr_177', ff 0.0042
      info 'Ωfstr_178', ff 0.042
      info 'Ωfstr_179', ff 0.42
      return null
    do =>
      echo()
      info 'Ωfstr_180', f"#{0.00000042}:_<15,.3/µ;"
      info 'Ωfstr_181', f"#{0.0000042}:_<15,.3/µ;"
      info 'Ωfstr_182', f"#{0.000042}:_<15,.3/µ;"
      info 'Ωfstr_183', f"#{0.00042}:_<15,.3/µ;"
      info 'Ωfstr_184', f"#{0.0042}:_<15,.3/µ;"
      info 'Ωfstr_185', f"#{0.042}:_<15,.3/µ;"
      info 'Ωfstr_186', f"#{0.42}:_<15,.3/µ;"
      return null
  echo()
  return null




#===========================================================================================================
if module is require.main then await do =>
  ( new Test { throw_on_error: true, } ).test @intertype_tasks
  # ( new Test { throw_on_error: false, } ).test @intertype_tasks
  # ( new Test { throw_on_error: true, } ).test { locale_internals: @intertype_tasks.locale_internals, }
  # README_demo()



