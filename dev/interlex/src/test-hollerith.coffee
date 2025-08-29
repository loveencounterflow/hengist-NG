
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


############################################################################################################
#
#===========================================================================================================
@interlex_tasks =

  #=========================================================================================================
  hollerith:


    #-------------------------------------------------------------------------------------------------------
    h10mvp2: ->
      { Grammar
        Token
        Lexeme } = require '../../../apps/interlex'
      { regex, } = require 'regex'
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
        #...................................................................................................
        zero        = zpuns[  0     ]
        puns        = zpuns[  1 ..  ]
        nmag        = nmag[   1 ..  ]
        pmag        = pmag[   1 ..  ]
        #...................................................................................................
        fit_nun     = regex"(?<letters> [ #{nuns       } ]   )                                  "
        fit_pun     = regex"(?<letters> [ #{puns       } ]   )                                  "
        fit_nnum    = regex"(?<letters> [ #{nmag       } ]   ) (?<mantissa> [ #{alphabet}  ]* ) "
        fit_pnum    = regex"(?<letters> [ #{pmag       } ]   ) (?<mantissa> [ #{alphabet}  ]* ) "
        fit_zero    = regex"(?<letters> [ #{zero       } ]+  )                                  "
        #...................................................................................................
        R       = new Grammar { emit_signals: false, }
        first   = R.new_level { name: 'first', }
        first.new_token   { name: 'nun',      fit: fit_nun,                       }
        first.new_token   { name: 'pun',      fit: fit_pun,                       }
        first.new_token   { name: 'nnum',     fit: fit_nnum,                      }
        first.new_token   { name: 'pnum',     fit: fit_pnum,                      }
        first.new_token   { name: 'zero',     fit: fit_zero,                      }
        first.new_token   { name: 'other',    fit: /./,       merge: true,        }
        #...................................................................................................
        return R
      #.....................................................................................................
      probes_and_matchers = [
        [ 'B000NNNNNN', [ -999,         ], 'nnum:B,000|zero:NNNNNN',              ]
        [ 'C00NNNNNNN', [ -99,          ], 'nnum:C,00|zero:NNNNNNN',              ]
        [ 'C09NNNNNNN', [ -90,          ], 'nnum:C,09|zero:NNNNNNN',              ]
        [ 'C88NNNNNNN', [ -11,          ], 'nnum:C,88|zero:NNNNNNN',              ]
        [ 'C89NNNNNNN', [ -10,          ], 'nnum:C,89|zero:NNNNNNN',              ]
        [ 'ENNNNNNNNN', [ -9,           ], 'nun:E|zero:NNNNNNNNN',                ]
        [ 'FNNNNNNNNN', [ -8,           ], 'nun:F|zero:NNNNNNNNN',                ]
        [ 'GNNNNNNNNN', [ -7,           ], 'nun:G|zero:NNNNNNNNN',                ]
        [ 'HNNNNNNNNN', [ -6,           ], 'nun:H|zero:NNNNNNNNN',                ]
        [ 'INNNNNNNNN', [ -5,           ], 'nun:I|zero:NNNNNNNNN',                ]
        [ 'JNNNNNNNNN', [ -4,           ], 'nun:J|zero:NNNNNNNNN',                ]
        [ 'KNNNNNNNNN', [ -3,           ], 'nun:K|zero:NNNNNNNNN',                ]
        [ 'LNNNNNNNNN', [ -2,           ], 'nun:L|zero:NNNNNNNNN',                ]
        [ 'MNNNNNNNNN', [ -1,           ], 'nun:M|zero:NNNNNNNNN',                ]
        [ 'NC79NNNNNN', [ 0, -20,       ], 'zero:N|nnum:C,79|zero:NNNNNN',        ]
        [ 'NNNNNNNNNN', [ 0,            ], 'zero:NNNNNNNNNN',                     ]
        [ 'NX20NNNNNN', [ 0, 20,        ], 'zero:N|pnum:X,20|zero:NNNNNN',        ]
        [ 'WNNNNNNNNN', [ 9,            ], 'pun:W|zero:NNNNNNNNN',               ]
        [ 'X10KNNNNNN', [ 10, -3,       ], 'pnum:X,10|nun:K|zero:NNNNNN',         ]
        [ 'X10LNNNNNN', [ 10, -2,       ], 'pnum:X,10|nun:L|zero:NNNNNN',         ]
        [ 'X10MNNNNNN', [ 10, -1,       ], 'pnum:X,10|nun:M|zero:NNNNNN',         ]
        [ 'X10NNNNNNN', [ 10,           ], 'pnum:X,10|zero:NNNNNNN',              ]
        [ 'X10NNNNNNN', [ 10, 0,        ], 'pnum:X,10|zero:NNNNNNN',              ]
        [ 'X10ONNNNNN', [ 10, 1,        ], 'pnum:X,10|pun:O|zero:NNNNNN',        ]
        [ 'X10X10MNNN', [ 10, 10, -1,   ], 'pnum:X,10|pnum:X,10|nun:M|zero:NNN',  ]
        [ 'X10X10NNNN', [ 10, 10,       ], 'pnum:X,10|pnum:X,10|zero:NNNN',       ]
        [ 'X10X20NNNN', [ 10, 20,       ], 'pnum:X,10|pnum:X,20|zero:NNNN',       ]
        [ 'X20NNNNNNN', [ 20,           ], 'pnum:X,20|zero:NNNNNNN',              ]
        [ 'X20X10NNNN', [ 20, 10,       ], 'pnum:X,20|pnum:X,10|zero:NNNN',       ]
        [ 'X90NNNNNNN', [ 90,           ], 'pnum:X,90|zero:NNNNNNN',              ]
        [ 'Y900NNNNNN', [ 900,          ], 'pnum:Y,900|zero:NNNNNN',              ]
        ]
      #.....................................................................................................
      lexer   = compile_sortkey_lexer cfg
      lexemes = lexer.scan_to_list '5'; tabulate_lexemes lexemes
      lexemes = lexer.scan_to_list 'N'; tabulate_lexemes lexemes
      lexemes = lexer.scan_to_list 'N'; tabulate_lexemes lexemes
      for [ probe, list_matcher, lexeme_matcher, ] in probes_and_matchers
        # urge 'Ωilxhol___1', rpr probe
        lexemes = []
        lexeme_result  = []
        for lexeme in lexer.scan_to_list probe
          name      = lexeme.name
          letters   = lexeme.data.letters
          mantissa  = lexeme.data.mantissa ? null
          lexemes.push { name, letters, mantissa, }
          lexeme_result.push if mantissa? then "#{name}:#{letters},#{mantissa}" else "#{name}:#{letters}"
        lexeme_result  = lexeme_result.join '|'
        # tabulate_lexemes lexemes
        # debug 'Ωilxhol___2', lexeme for lexeme in lexemes
        info 'Ωilxhol___3', rpr lexeme_result
        @eq ( Ωilxhol___4 = -> lexeme_result ), lexeme_matcher
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
