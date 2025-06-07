
'use strict'

###
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
###

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




############################################################################################################
#
#===========================================================================================================
@effstring_tasks =

  #=========================================================================================================
  first_take:

    #-------------------------------------------------------------------------------------------------------
    store_data_in_lexemes: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      declare_lexemes = ( g ) ->
        outer = g.new_level { name: 'outer', }
        fspec = g.new_level { name: 'fspec', }
        # :[[fill]align][sign][symbol][zeros][width][thousands][.precision][~][type[/unit]];
        #...................................................................................................
        outer.new_token { name: 'enter',        fit: ':', jump: 'fspec',                      }
        outer.new_token { name: 'tail',         fit: /.+$/,                                   }
        #...................................................................................................
        fspec.new_token { name: 'fill_align',   fit: /(?<fill>.?)(?<align>[<\^>=])/,                              }
        fspec.new_token { name: 'sign',         fit: /(?<sign>[\-+\x20\(])/,                                      }
        fspec.new_token { name: 'symbol',       fit: /(?<symbol>[$#])/,                                           }
        fspec.new_token { name: 'zeros_width',  fit: /(?<zeros>0*)(?<width>[0-9]+)/,                              }
        fspec.new_token { name: 'separator',    fit: /(?<separator>,)/,                                           }
        fspec.new_token { name: 'precision',    fit: /\.(?<precision>[0-9]+)/,                                    }
        fspec.new_token { name: 'trim',         fit: /(?<trim>~)/,                                                }
        fspec.new_token { name: 'type_unit',    fit: rx"""(?<type>[efgrs%pbodxXc])(/(?<unit>[zafpnµm1kMGT]))?""", }
        fspec.new_token { name: 'exit',         fit: ';', jump: '..!',                                            }
        return g
      #.....................................................................................................
      cast = ({ fqname, data, }) ->
        switch fqname
          when 'fspec.zeros_width'
            data.zeros        = @data.zeros      = ( data.zeros?.length ? 0 ) > 0
            data.width        = @data.width      = parseInt data.width, 10
          when 'fspec.precision'
            data.precision    = @data.precision  = parseInt data.precision, 10
          when 'fspec.trim'
            data.trim         = @data.trim       = ( data.trim?.length ? 0 ) > 0
          when 'fspec.type_unit'
            data.type         = @data.type       = data.type ? null
            data.unit         = @data.unit       = data.unit ? null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, }
        source  = ':;'
        # info 'Ωefft___1', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωefft___2', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωefft___3', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωefft___4 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start', hit: '',  pos: '1:0:0' }
        @eq ( Ωefft___5 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',  pos: '1:0:0', data: { target: 'outer' } }
        @eq ( Ωefft___6 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',   hit: ':', pos: '1:0:1' }
        @eq ( Ωefft___7 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',  pos: '1:1:1', data: { target: 'outer' } }
        @eq ( Ωefft___8 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',    hit: ';', pos: '1:1:2' }
        @eq ( Ωefft___9 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',  pos: '1:2:2', data: { target: null } }
        @eq ( Ωefft__10 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',  hit: '',  pos: '1:2:2' }
        @eq ( Ωefft__11 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, }
        source  = 'not a spec'
        # info 'Ωefft__12', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωefft__13', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωefft__14', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωefft__15 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start', hit: '',           pos: '1:0:0' }
        @eq ( Ωefft__16 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',           pos: '1:0:0', data: { target: 'outer' } }
        @eq ( Ωefft__17 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',    hit: 'not a spec', pos: '1:0:10' }
        @eq ( Ωefft__18 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',           pos: '1:10:10', data: { target: null } }
        @eq ( Ωefft__19 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',  hit: '',           pos: '1:10:10' }
        @eq ( Ωefft__20 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':.4;'
        # info 'Ωefft__21', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωefft__22', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωefft__23', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωefft__24 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',     hit: ':',  pos: '1:0:1' }
        @eq ( Ωefft__25 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision', hit: '.4', pos: '1:1:3', data: { precision: 4 } }
        @eq ( Ωefft__26 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',      hit: ';',  pos: '1:3:4' }
        @eq ( Ωefft__27 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':.4;rest of text'
        # info 'Ωefft__28', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωefft__29', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωefft__30', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωefft__31 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',     hit: ':',            pos: '1:0:1' }
        @eq ( Ωefft__32 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision', hit: '.4',           pos: '1:1:3', data: { precision: 4 } }
        @eq ( Ωefft__33 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',      hit: ';',            pos: '1:3:4' }
        @eq ( Ωefft__34 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',      hit: 'rest of text', pos: '1:4:16' }
        @eq ( Ωefft__35 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':.4~;...'
        # info 'Ωefft__36', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωefft__37', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωefft__38', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωefft__39 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter', hit: ':', pos: '1:0:1' }
        @eq ( Ωefft__40 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision', hit: '.4', pos: '1:1:3', data: { precision: 4 } }
        @eq ( Ωefft__41 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim', hit: '~', pos: '1:3:4', data: { trim: true, } }
        @eq ( Ωefft__42 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit', hit: ';', pos: '1:4:5' }
        @eq ( Ωefft__43 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail', hit: '...', pos: '1:5:8' }
        @eq ( Ωefft__44 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':.4~f;...'
        # info 'Ωefft__45', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωefft__46', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωefft__47', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωefft__48 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',     hit: ':', pos: '1:0:1' }
        @eq ( Ωefft__49 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision', hit: '.4', pos: '1:1:3', data: { precision: 4 } }
        @eq ( Ωefft__50 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',      hit: '~', pos: '1:3:4', data: { trim: true, } }
        @eq ( Ωefft__51 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit', hit: 'f', pos: '1:4:5', data: { type: 'f', unit: null, } }
        @eq ( Ωefft__52 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',      hit: ';', pos: '1:5:6' }
        @eq ( Ωefft__53 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',      hit: '...', pos: '1:6:9' }
        @eq ( Ωefft__54 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':.4~f/µ;...'
        # info 'Ωefft__55', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωefft__56', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωefft__57', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωefft__58 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',     hit: ':',   pos: '1:0:1' }
        @eq ( Ωefft__59 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision', hit: '.4',  pos: '1:1:3', data: { precision: 4 } }
        @eq ( Ωefft__60 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',      hit: '~',   pos: '1:3:4', data: { trim: true } }
        @eq ( Ωefft__61 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit', hit: 'f/µ', pos: '1:4:7', data: { type: 'f', unit: 'µ' } }
        @eq ( Ωefft__62 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',      hit: ';',   pos: '1:7:8' }
        @eq ( Ωefft__63 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',      hit: '...', pos: '1:8:11' }
        @eq ( Ωefft__64 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':20.4~f/µ;...'
        # info 'Ωefft__65', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωefft__66', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωefft__67', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωefft__68 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',       hit: ':',   pos: '1:0:1' }
        @eq ( Ωefft__69 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.zeros_width', hit: '20',  pos: '1:1:3', data: { zeros: false, width: 20 } }
        @eq ( Ωefft__70 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision',   hit: '.4',  pos: '1:3:5', data: { precision: 4 } }
        @eq ( Ωefft__71 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',        hit: '~',   pos: '1:5:6', data: { trim: true } }
        @eq ( Ωefft__72 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit',   hit: 'f/µ', pos: '1:6:9', data: { type: 'f', unit: 'µ' } }
        @eq ( Ωefft__73 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',        hit: ';',   pos: '1:9:10' }
        @eq ( Ωefft__74 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',        hit: '...', pos: '1:10:13' }
        @eq ( Ωefft__75 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':020.4~f/µ;...'
        # info 'Ωefft__76', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωefft__77', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωefft__78', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωefft__79 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',       hit: ':',   pos: '1:0:1' }
        @eq ( Ωefft__80 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.zeros_width', hit: '020', pos: '1:1:4', data: { zeros: true, width: 20 } }
        @eq ( Ωefft__81 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision',   hit: '.4',  pos: '1:4:6', data: { precision: 4 } }
        @eq ( Ωefft__82 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',        hit: '~',   pos: '1:6:7', data: { trim: true } }
        @eq ( Ωefft__83 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit',   hit: 'f/µ', pos: '1:7:10', data: { type: 'f', unit: 'µ' } }
        @eq ( Ωefft__84 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',        hit: ';',   pos: '1:10:11' }
        @eq ( Ωefft__85 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',        hit: '...', pos: '1:11:14' }
        @eq ( Ωefft__86 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':$020.4~f/µ;...'
        # info 'Ωefft__87', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωefft__88', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωefft__89', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωefft__90 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',       hit: ':',   pos: '1:0:1' }
        @eq ( Ωefft__91 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.symbol',      hit: '$',   pos: '1:1:2', data: { symbol: '$' } }
        @eq ( Ωefft__92 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.zeros_width', hit: '020', pos: '1:2:5', data: { zeros: true, width: 20 } }
        @eq ( Ωefft__93 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision',   hit: '.4',  pos: '1:5:7', data: { precision: 4 } }
        @eq ( Ωefft__94 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',        hit: '~',   pos: '1:7:8', data: { trim: true } }
        @eq ( Ωefft__95 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit',   hit: 'f/µ', pos: '1:8:11', data: { type: 'f', unit: 'µ' } }
        @eq ( Ωefft__96 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',        hit: ';',   pos: '1:11:12' }
        @eq ( Ωefft__97 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',        hit: '...', pos: '1:12:15' }
        @eq ( Ωefft__98 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ': $020.4~f/µ;...'
        # info 'Ωefft__99', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωefft_100', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωefft_101', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωefft_102 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',       hit: ':',   pos: '1:0:1' }
        @eq ( Ωefft_103 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.sign',        hit: ' ',   pos: '1:1:2', data: { sign: ' ' } }
        @eq ( Ωefft_104 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.symbol',      hit: '$',   pos: '1:2:3', data: { symbol: '$' } }
        @eq ( Ωefft_105 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.zeros_width', hit: '020', pos: '1:3:6', data: { zeros: true, width: 20 } }
        @eq ( Ωefft_106 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision',   hit: '.4',  pos: '1:6:8', data: { precision: 4 } }
        @eq ( Ωefft_107 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',        hit: '~',   pos: '1:8:9', data: { trim: true } }
        @eq ( Ωefft_108 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit',   hit: 'f/µ', pos: '1:9:12', data: { type: 'f', unit: 'µ' } }
        @eq ( Ωefft_109 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',        hit: ';',   pos: '1:12:13' }
        @eq ( Ωefft_110 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',        hit: '...', pos: '1:13:16' }
        @eq ( Ωefft_111 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':>-$020.4~f/µ;...'
        # info 'Ωefft_112', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωefft_113', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωefft_114', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωefft_115 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',       hit: ':',   pos: '1:0:1' }
        @eq ( Ωefft_116 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.fill_align',  hit: '>', pos: '1:1:2', data: { fill: '', align: '>' } }
        @eq ( Ωefft_117 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.sign',        hit: '-',   pos: '1:2:3', data: { sign: '-' } }
        @eq ( Ωefft_118 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.symbol',      hit: '$',   pos: '1:3:4', data: { symbol: '$' } }
        @eq ( Ωefft_119 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.zeros_width', hit: '020', pos: '1:4:7', data: { zeros: true, width: 20 } }
        @eq ( Ωefft_120 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision',   hit: '.4',  pos: '1:7:9', data: { precision: 4 } }
        @eq ( Ωefft_121 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',        hit: '~',   pos: '1:9:10', data: { trim: true } }
        @eq ( Ωefft_122 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit',   hit: 'f/µ', pos: '1:10:13', data: { type: 'f', unit: 'µ' } }
        @eq ( Ωefft_123 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',        hit: ';',   pos: '1:13:14' }
        @eq ( Ωefft_124 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',        hit: '...', pos: '1:14:17' }
        @eq ( Ωefft_125 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':_>-$020.4~f/µ;...'
        # info 'Ωefft_126', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωefft_127', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωefft_128', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωefft_129 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',       hit: ':',   pos: '1:0:1' }
        @eq ( Ωefft_130 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.fill_align',  hit: '_>',  pos: '1:1:3', data: { fill: '_', align: '>' } }
        @eq ( Ωefft_131 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.sign',        hit: '-',   pos: '1:3:4', data: { sign: '-' } }
        @eq ( Ωefft_132 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.symbol',      hit: '$',   pos: '1:4:5', data: { symbol: '$' } }
        @eq ( Ωefft_133 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.zeros_width', hit: '020', pos: '1:5:8', data: { zeros: true, width: 20 } }
        @eq ( Ωefft_134 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision',   hit: '.4',  pos: '1:8:10', data: { precision: 4 } }
        @eq ( Ωefft_135 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',        hit: '~',   pos: '1:10:11', data: { trim: true } }
        @eq ( Ωefft_136 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit',   hit: 'f/µ', pos: '1:11:14', data: { type: 'f', unit: 'µ' } }
        @eq ( Ωefft_137 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',        hit: ';',   pos: '1:14:15' }
        @eq ( Ωefft_138 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',        hit: '...', pos: '1:15:18' }
        @eq ( Ωefft_139 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        #---------------------------------------------------------------------------------------------------
        parse_fspec = ( g, source ) ->
          R         = Object.create null
          R.source  = source
          R.fspec   = ''
          for lexeme from g.scan source
            switch true
              when lexeme.fqname      is 'outer.enter'  then null
              when lexeme.fqname      is 'outer.exit'   then null
              when lexeme.fqname      is 'outer.tail'   then R.tail = lexeme.hit
              when lexeme.level.name  is 'fspec'
                Object.assign R, lexeme.data
                R.fspec += lexeme.hit
              else throw new Error "Ωefft_140 encountered unhandled lexeme #{rpr abbrlxm lexeme}"
          return R
        #---------------------------------------------------------------------------------------------------
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':_>-$020.4~f/µ; whatever comes after the fspec'
        # info 'Ωefft_141', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωefft_142', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωefft_143', source; g.reset_lnr 1; d = parse_fspec g, source
        for key in ( Object.keys d ).sort()
          value = d[ key ]
          help 'Ωefft_144', f"#{key}:<10c; | #{rpr value}"
        return null
      #.....................................................................................................
      return null

    #-------------------------------------------------------------------------------------------------------
    store_data_in_grammar: ->
      { Grammar
        rx      } = require '../../../apps/interlex'
      #.....................................................................................................
      show_data = ( data ) ->
        # for key in ( Object.keys data ).sort()
        for key in Object.keys data
          value = data[ key ]
          help 'Ωefft_145', f"#{key}:<10c; | #{rpr value}"
        return null
      #.....................................................................................................
      declare_lexemes = ( g ) ->
        outer = g.new_level { name: 'outer', }
        fspec = g.new_level { name: 'fspec', }
        # :[[fill]align][sign][symbol][zeros][width][thousands][.precision][~][type[/unit]];
        #...................................................................................................
        outer.new_token { name: 'enter',        fit: ':', jump: 'fspec',                      }
        outer.new_token { name: 'tail',         fit: /.+$/,                                   }
        #...................................................................................................
        fspec.new_token { name: 'fill_align',   fit: /(?<fill>.?)(?<align>[<\^>=])/,                              }
        fspec.new_token { name: 'sign',         fit: /(?<sign>[\-+\x20\(])/,                                      }
        fspec.new_token { name: 'symbol',       fit: /(?<symbol>[$#])/,                                           }
        fspec.new_token { name: 'zeros_width',  fit: /(?<zeros>0*)(?<width>[0-9]+)/,                              }
        fspec.new_token { name: 'separator',    fit: /(?<separator>,)/,                                           }
        fspec.new_token { name: 'precision',    fit: /\.(?<precision>[0-9]+)/,                                    }
        fspec.new_token { name: 'trim',         fit: /(?<trim>~)/,                                                }
        fspec.new_token { name: 'type_unit',    fit: rx"""(?<type>[efgrs%pbodxXc])(/(?<unit>[zafpnµm1kMGT]))?""", }
        fspec.new_token { name: 'exit',         fit: ';', jump: '..!',                                            }
        return g
      #-----------------------------------------------------------------------------------------------------
      template =
        fill:       null
        align:      null
        sign:       null
        symbol:     null
        zeros:      false
        width:      null
        separator:  false
        precision:  null
        trim:       false
        type:       null
        unit:       null
        fspec:      ''
        tail:       null
      #-----------------------------------------------------------------------------------------------------
      reset_data = ( template ) ->
        @data = Object.assign ( Object.create null ), template
        return null
      #-----------------------------------------------------------------------------------------------------
      cast = ({ lnr, level, hit, fqname, data, }) ->
        switch fqname
          when 'fspec.fill_align'
            @data.fill      = data.fill
            @data.align     = data.align
          when 'fspec.sign'
            @data.sign      = data.sign
          when 'fspec.symbol'
            @data.symbol    = data.symbol
          when 'fspec.zeros_width'
            @data.zeros     = ( data.zeros?.length ? 0 ) > 0
            @data.width     = parseInt data.width, 10
          when 'fspec.separator'
            @data.separator = data.separator.length > 0
          when 'fspec.precision'
            @data.precision = parseInt data.precision, 10
          when 'fspec.trim'
            @data.trim      = ( data.trim?.length ? 0 ) > 0
          when 'fspec.type_unit'
            @data.type      = data.type ? null
            @data.unit      = data.unit ? null
          #.................................................................................................
          when 'outer.enter'  then null
          when 'outer.exit'   then null
          when 'outer.tail'   then @data.tail = hit
          else throw new Error "Ωefft_146 encountered unhandled fqname #{rpr fqname}"
        #...................................................................................................
        @data.fspec += hit if level.name is 'fspec'
        return null
      #.....................................................................................................
      do =>
        #---------------------------------------------------------------------------------------------------
        extract = ( g, source ) -> g.scan_to_list source; return Object.assign ( Object.create null ), g.data
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':_>-$020,.4~f/µ; whatever comes after the fspec'
        # info 'Ωefft_147', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωefft_148', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωefft_149', extract g, source
        info 'Ωefft_150', source; g.reset_lnr 1; reset_data.call g, template; show_data result = extract g, source
        @eq ( Ωefft_151 = -> result.fill ),       '_'
        @eq ( Ωefft_152 = -> result.align ),      '>'
        @eq ( Ωefft_153 = -> result.sign ),       '-'
        @eq ( Ωefft_154 = -> result.symbol ),     '$'
        @eq ( Ωefft_155 = -> result.zeros ),      true
        @eq ( Ωefft_156 = -> result.width ),      20
        @eq ( Ωefft_157 = -> result.separator ),  true
        @eq ( Ωefft_158 = -> result.precision ),  4
        @eq ( Ωefft_159 = -> result.trim ),       true
        @eq ( Ωefft_160 = -> result.type ),       'f'
        @eq ( Ωefft_161 = -> result.unit ),       'µ'
        @eq ( Ωefft_162 = -> result.fspec ),      '_>-$020,.4~f/µ'
        @eq ( Ωefft_163 = -> result.tail ),       ' whatever comes after the fspec'
        return null
      #.....................................................................................................
      return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true, show_passes: false, report_checks: false, }
  ( t = new Test guytest_cfg ).test @effstring_tasks

