
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
  whisper }               = GUY.trm.get_loggers 'interlex/test-basics'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'
{ condense_lexemes
  abbrlxm
  tabulate_lexemes
  tabulate_lexeme       } = require './helpers'
# { internals: ct_internals
#   isa
#   std
#   type_of               } = require '../../../apps/cleartype'
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'


############################################################################################################
#
#===========================================================================================================
@interlex_tasks =

  #=========================================================================================================
  hollerith:

    #-------------------------------------------------------------------------------------------------------
    h10mvp2_demo: ->
      { Grammar
        Token
        Lexeme                  } = require '../../../apps/interlex'
      { regex,                  } = require 'regex'
      { type_of,                } = SFMODULES.unstable.require_type_of()
      { encode, decode,         } = SFMODULES.unstable.require_anybase()
      #.....................................................................................................
      cfg = constants_10mvp2 = Object.freeze
        max_integer:  +999
        min_integer:  -999
        # MLKJIHGFEDCBA
        # N XYZ
        zpuns:        'NOPQRSTUVW' # zero and positive uniliteral numbers
        nuns:         'EFGHIJKLM'  # negative          uniliteral numbers
        zpun_max:     +9
        nun_min:      -9
        zero_pad_length:  3
        alphabet:     '0123456789'
        pmag:         '  XYZ'   # positive 'magnifier' for 1 to 8 positive digits
        nmag:         '  CBA'   # negative 'magnifier' for 1 to 8 negative digits
        nlead_re:     /^9*(?=[0-9])/         # 'negative leader', discardable leading digits of lifted negative numbers
      #.....................................................................................................
      compile_sortkey_lexer = ( cfg ) ->
        { nuns,
          zpuns,
          nmag,
          pmag,
          alphabet,     } = cfg
        # base              = alphabet.length
        #...................................................................................................
        nuns_letters  = nuns
        puns_letters  = zpuns[  1 ..  ]
        nmag_letters  = nmag[   1 ..  ]
        pmag_letters  = pmag[   1 ..  ]
        zero_letters  = zpuns[  0     ]
        max_digit     = alphabet.at -1
        #...................................................................................................
        fit_nun       = regex"(?<letters> [ #{nuns_letters} ]  )                                  "
        fit_pun       = regex"(?<letters> [ #{puns_letters} ]  )                                  "
        fit_nnum      = regex"(?<letters> [ #{nmag_letters} ]  ) (?<mantissa> [ #{alphabet}  ]* ) "
        fit_pnum      = regex"(?<letters> [ #{pmag_letters} ]  ) (?<mantissa> [ #{alphabet}  ]* ) "
        fit_padding   = regex"(?<letters> [ #{zero_letters} ]+ ) $                                "
        fit_zero      = regex"(?<letters> [ #{zero_letters} ]  (?= .* [^ #{zero_letters} ] ) )     "
        fit_other     = regex"(?<letters> .                    )                                  "
        all_zero_re   = regex"^ #{zero_letters}+ $"
        #...................................................................................................
        cast_nun      = ({ data: d, }) -> d.index = ( cfg.nuns.indexOf d.letters ) - cfg.nuns.length
        cast_pun      = ({ data: d, }) -> d.index = +cfg.zpuns.indexOf  d.letters
        cast_nnum     = ({ data: d, }) ->
          mantissa  = d.mantissa.padStart cfg.zero_pad_length, max_digit
          d.index   = ( decode mantissa, alphabet ) - cfg.max_integer
        cast_pnum     = ({ data: d, }) -> d.index = decode d.mantissa, alphabet
        cast_zero     = ({ data: d, }) -> d.index = 0
        cast_padding  = ({ data: d, source, hit, }) -> d.index = 0 if source is hit
        cast_other    = null
        #...................................................................................................
        R           = new Grammar { emit_signals: false, }
        first       = R.new_level { name: 'first', }
        first.new_token   { name: 'nun',      fit: fit_nun,                  cast: cast_nun,      }
        first.new_token   { name: 'pun',      fit: fit_pun,                  cast: cast_pun,      }
        first.new_token   { name: 'nnum',     fit: fit_nnum,                 cast: cast_nnum,     }
        first.new_token   { name: 'pnum',     fit: fit_pnum,                 cast: cast_pnum,     }
        first.new_token   { name: 'padding',  fit: fit_padding,              cast: cast_padding,  }
        first.new_token   { name: 'zero',     fit: fit_zero,                 cast: cast_zero,     }
        first.new_token   { name: 'other',    fit: fit_other, merge: 'list', cast: cast_other,    }
        #...................................................................................................
        return R
      #.....................................................................................................
      probes_and_matchers = [
        [ 'B000NNNNNN', [ -999,         ], 'nnum:B,000|padding:NNNNNN',              ]
        [ 'C00NNNNNNN', [ -99,          ], 'nnum:C,00|padding:NNNNNNN',              ]
        [ 'C09NNNNNNN', [ -90,          ], 'nnum:C,09|padding:NNNNNNN',              ]
        [ 'C88NNNNNNN', [ -11,          ], 'nnum:C,88|padding:NNNNNNN',              ]
        [ 'C89NNNNNNN', [ -10,          ], 'nnum:C,89|padding:NNNNNNN',              ]
        [ 'ENNNNNNNNN', [ -9,           ], 'nun:E|padding:NNNNNNNNN',                ]
        [ 'FNNNNNNNNN', [ -8,           ], 'nun:F|padding:NNNNNNNNN',                ]
        [ 'GNNNNNNNNN', [ -7,           ], 'nun:G|padding:NNNNNNNNN',                ]
        [ 'HNNNNNNNNN', [ -6,           ], 'nun:H|padding:NNNNNNNNN',                ]
        [ 'INNNNNNNNN', [ -5,           ], 'nun:I|padding:NNNNNNNNN',                ]
        [ 'JNNNNNNNNN', [ -4,           ], 'nun:J|padding:NNNNNNNNN',                ]
        [ 'KNNNNNNNNN', [ -3,           ], 'nun:K|padding:NNNNNNNNN',                ]
        [ 'LNNNNNNNNN', [ -2,           ], 'nun:L|padding:NNNNNNNNN',                ]
        [ 'MNNNNNNNNN', [ -1,           ], 'nun:M|padding:NNNNNNNNN',                ]
        [ 'NC79NNNNNN', [ 0, -20,       ], 'zero:N|nnum:C,79|padding:NNNNNN',        ]
        [ 'NNNNNNNNNN', [ 0,            ], 'padding:NNNNNNNNNN',                     ]
        [ 'NX20NNNNNN', [ 0, 20,        ], 'zero:N|pnum:X,20|padding:NNNNNN',        ]
        [ 'WNNNNNNNNN', [ 9,            ], 'pun:W|padding:NNNNNNNNN',               ]
        [ 'X10KNNNNNN', [ 10, -3,       ], 'pnum:X,10|nun:K|padding:NNNNNN',         ]
        [ 'X10LNNNNNN', [ 10, -2,       ], 'pnum:X,10|nun:L|padding:NNNNNN',         ]
        [ 'X10MNNNNNN', [ 10, -1,       ], 'pnum:X,10|nun:M|padding:NNNNNN',         ]
        [ 'X10NNNNNNN', [ 10,           ], 'pnum:X,10|padding:NNNNNNN',              ]
        # [ 'X10NNNNNNN', [ 10, 0,        ], 'pnum:X,10|padding:NNNNNNN',              ]
        [ 'X10ONNNNNN', [ 10, 1,        ], 'pnum:X,10|pun:O|padding:NNNNNN',        ]
        [ 'X10X10MNNN', [ 10, 10, -1,   ], 'pnum:X,10|pnum:X,10|nun:M|padding:NNN',  ]
        [ 'X10X10NNNN', [ 10, 10,       ], 'pnum:X,10|pnum:X,10|padding:NNNN',       ]
        [ 'X10X20NNNN', [ 10, 20,       ], 'pnum:X,10|pnum:X,20|padding:NNNN',       ]
        [ 'X20NNNNNNN', [ 20,           ], 'pnum:X,20|padding:NNNNNNN',              ]
        [ 'X20X10NNNN', [ 20, 10,       ], 'pnum:X,20|pnum:X,10|padding:NNNN',       ]
        [ 'X90NNNNNNN', [ 90,           ], 'pnum:X,90|padding:NNNNNNN',              ]
        [ 'Y900NNNNNN', [ 900,          ], 'pnum:Y,900|padding:NNNNNN',              ]
        [ 'NNNNNNNNN',  [ 0,            ], 'padding:NNNNNNNNN' ,                     ]
        [ 'NN',         [ 0,            ], 'padding:NN' ,                            ]
        [ 'N',          [ 0,            ], 'padding:N' ,                             ]
        [ '5',          [               ], 'other:5',                             ]
        [ 'äöü',        [               ], 'other:äöü',                           ]
        [ 'X10',        [ 10,           ], 'pnum:X,10',                           ]
        [ 'K',          [ -3,           ], 'nun:K',                               ]
        ]
      #.....................................................................................................
      lexer   = compile_sortkey_lexer cfg
      for [ probe, index_matcher, lexeme_matcher, ] in probes_and_matchers
        # urge 'Ωilxhol___2', rpr probe
        lexemes         = []
        lexeme_result   = []
        index_result    = []
        for lexeme in lexer.scan_to_list probe
          name      = lexeme.name
          letters   = lexeme.data.letters
          letters   = letters.join '' if ( type_of letters ) is 'list'
          mantissa  = lexeme.data.mantissa ? null
          lexemes.push { name, letters, mantissa, }
          lexeme_result.push if mantissa? then "#{name}:#{letters},#{mantissa}" else "#{name}:#{letters}"
          index_result.push lexeme.data.index if lexeme.data.index?
        lexeme_result   = lexeme_result.join '|'
        info 'Ωilxhol___4', f"#{( rpr lexeme_result ) + ','}:<50c; #{rpr index_result}"
        # help 'Ωilxhol___5', rpr index_result # if index_result.length > 0
        @eq ( Ωilxhol___6 = -> lexeme_result  ), lexeme_matcher
        @eq ( Ωilxhol___7 = -> index_result   ), index_matcher
      #.....................................................................................................
      return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false, show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true, show_passes: false, report_checks: false, }
  # guytest_cfg = { throw_on_error: false, show_passes: true, report_checks: true, }
  ( new Test guytest_cfg ).test @interlex_tasks
  # ( new Test guytest_cfg ).test { linking: @interlex_tasks.linking, }
  # ( new Test guytest_cfg ).test { flexible_new_token_syntax: @interlex_tasks.basics.flexible_new_token_syntax, }
