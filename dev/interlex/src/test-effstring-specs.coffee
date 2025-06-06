
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




############################################################################################################
#
#===========================================================================================================
@interlex_tasks =

  #=========================================================================================================
  effstring_specs:
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

    #-------------------------------------------------------------------------------------------------------
    grammar: ->
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
            data.zeros      = ( data.zeros?.length ? 0 ) > 0
            data.width        = parseInt data.width, 10
          when 'fspec.precision'
            data.precision    = parseInt data.precision, 10
          when 'fspec.trim'
            data.trim         = ( data.trim?.length ? 0 ) > 0
          when 'fspec.type_unit'
            data.type         = data.type ? null
            data.unit         = data.unit ? null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, }
        source  = ':;'
        # info 'Ωilxt_597', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_598', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_599', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_600 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start', hit: '',  pos: '1:0:0' }
        @eq ( Ωilxt_601 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',  pos: '1:0:0', data: { target: 'outer' } }
        @eq ( Ωilxt_602 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',   hit: ':', pos: '1:0:1' }
        @eq ( Ωilxt_603 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',  pos: '1:1:1', data: { target: 'outer' } }
        @eq ( Ωilxt_604 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',    hit: ';', pos: '1:1:2' }
        @eq ( Ωilxt_605 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',  pos: '1:2:2', data: { target: null } }
        @eq ( Ωilxt_606 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',  hit: '',  pos: '1:2:2' }
        @eq ( Ωilxt_607 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, }
        source  = 'not a spec'
        # info 'Ωilxt_608', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_609', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_610', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_611 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.start', hit: '',           pos: '1:0:0' }
        @eq ( Ωilxt_612 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',           pos: '1:0:0', data: { target: 'outer' } }
        @eq ( Ωilxt_613 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',    hit: 'not a spec', pos: '1:0:10' }
        @eq ( Ωilxt_614 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.jump',  hit: '',           pos: '1:10:10', data: { target: null } }
        @eq ( Ωilxt_615 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: '$signal.stop',  hit: '',           pos: '1:10:10' }
        @eq ( Ωilxt_616 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':.4;'
        # info 'Ωilxt_617', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_618', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_619', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_620 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',     hit: ':',  pos: '1:0:1' }
        @eq ( Ωilxt_621 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision', hit: '.4', pos: '1:1:3', data: { precision: 4 } }
        @eq ( Ωilxt_622 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',      hit: ';',  pos: '1:3:4' }
        @eq ( Ωilxt_623 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':.4;rest of text'
        # info 'Ωilxt_624', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_625', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_626', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_627 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',     hit: ':',            pos: '1:0:1' }
        @eq ( Ωilxt_628 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision', hit: '.4',           pos: '1:1:3', data: { precision: 4 } }
        @eq ( Ωilxt_629 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',      hit: ';',            pos: '1:3:4' }
        @eq ( Ωilxt_630 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',      hit: 'rest of text', pos: '1:4:16' }
        @eq ( Ωilxt_631 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':.4~;...'
        # info 'Ωilxt_632', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_633', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_634', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_635 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter', hit: ':', pos: '1:0:1' }
        @eq ( Ωilxt_636 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision', hit: '.4', pos: '1:1:3', data: { precision: 4 } }
        @eq ( Ωilxt_637 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim', hit: '~', pos: '1:3:4', data: { trim: true, } }
        @eq ( Ωilxt_638 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit', hit: ';', pos: '1:4:5' }
        @eq ( Ωilxt_639 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail', hit: '...', pos: '1:5:8' }
        @eq ( Ωilxt_640 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':.4~f;...'
        # info 'Ωilxt_641', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_642', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_643', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_644 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',     hit: ':', pos: '1:0:1' }
        @eq ( Ωilxt_645 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision', hit: '.4', pos: '1:1:3', data: { precision: 4 } }
        @eq ( Ωilxt_646 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',      hit: '~', pos: '1:3:4', data: { trim: true, } }
        @eq ( Ωilxt_647 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit', hit: 'f', pos: '1:4:5', data: { type: 'f', unit: null, } }
        @eq ( Ωilxt_648 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',      hit: ';', pos: '1:5:6' }
        @eq ( Ωilxt_649 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',      hit: '...', pos: '1:6:9' }
        @eq ( Ωilxt_650 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':.4~f/µ;...'
        # info 'Ωilxt_651', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_652', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_653', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_654 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',     hit: ':',   pos: '1:0:1' }
        @eq ( Ωilxt_655 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision', hit: '.4',  pos: '1:1:3', data: { precision: 4 } }
        @eq ( Ωilxt_656 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',      hit: '~',   pos: '1:3:4', data: { trim: true } }
        @eq ( Ωilxt_657 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit', hit: 'f/µ', pos: '1:4:7', data: { type: 'f', unit: 'µ' } }
        @eq ( Ωilxt_658 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',      hit: ';',   pos: '1:7:8' }
        @eq ( Ωilxt_659 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',      hit: '...', pos: '1:8:11' }
        @eq ( Ωilxt_660 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':20.4~f/µ;...'
        # info 'Ωilxt_661', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_662', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_663', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_664 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',       hit: ':',   pos: '1:0:1' }
        @eq ( Ωilxt_665 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.zeros_width', hit: '20',  pos: '1:1:3', data: { zeros: false, width: 20 } }
        @eq ( Ωilxt_666 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision',   hit: '.4',  pos: '1:3:5', data: { precision: 4 } }
        @eq ( Ωilxt_667 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',        hit: '~',   pos: '1:5:6', data: { trim: true } }
        @eq ( Ωilxt_668 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit',   hit: 'f/µ', pos: '1:6:9', data: { type: 'f', unit: 'µ' } }
        @eq ( Ωilxt_669 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',        hit: ';',   pos: '1:9:10' }
        @eq ( Ωilxt_670 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',        hit: '...', pos: '1:10:13' }
        @eq ( Ωilxt_671 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':020.4~f/µ;...'
        # info 'Ωilxt_672', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_673', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_674', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_675 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',       hit: ':',   pos: '1:0:1' }
        @eq ( Ωilxt_676 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.zeros_width', hit: '020', pos: '1:1:4', data: { zeros: true, width: 20 } }
        @eq ( Ωilxt_677 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision',   hit: '.4',  pos: '1:4:6', data: { precision: 4 } }
        @eq ( Ωilxt_678 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',        hit: '~',   pos: '1:6:7', data: { trim: true } }
        @eq ( Ωilxt_679 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit',   hit: 'f/µ', pos: '1:7:10', data: { type: 'f', unit: 'µ' } }
        @eq ( Ωilxt_680 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',        hit: ';',   pos: '1:10:11' }
        @eq ( Ωilxt_681 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',        hit: '...', pos: '1:11:14' }
        @eq ( Ωilxt_682 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':$020.4~f/µ;...'
        # info 'Ωilxt_683', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_684', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_685', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_686 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',       hit: ':',   pos: '1:0:1' }
        @eq ( Ωilxt_687 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.symbol',      hit: '$',   pos: '1:1:2', data: { symbol: '$' } }
        @eq ( Ωilxt_688 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.zeros_width', hit: '020', pos: '1:2:5', data: { zeros: true, width: 20 } }
        @eq ( Ωilxt_689 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision',   hit: '.4',  pos: '1:5:7', data: { precision: 4 } }
        @eq ( Ωilxt_690 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',        hit: '~',   pos: '1:7:8', data: { trim: true } }
        @eq ( Ωilxt_691 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit',   hit: 'f/µ', pos: '1:8:11', data: { type: 'f', unit: 'µ' } }
        @eq ( Ωilxt_692 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',        hit: ';',   pos: '1:11:12' }
        @eq ( Ωilxt_693 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',        hit: '...', pos: '1:12:15' }
        @eq ( Ωilxt_694 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ': $020.4~f/µ;...'
        # info 'Ωilxt_695', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_696', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_697', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_698 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',       hit: ':',   pos: '1:0:1' }
        @eq ( Ωilxt_699 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.sign',        hit: ' ',   pos: '1:1:2', data: { sign: ' ' } }
        @eq ( Ωilxt_700 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.symbol',      hit: '$',   pos: '1:2:3', data: { symbol: '$' } }
        @eq ( Ωilxt_701 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.zeros_width', hit: '020', pos: '1:3:6', data: { zeros: true, width: 20 } }
        @eq ( Ωilxt_702 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision',   hit: '.4',  pos: '1:6:8', data: { precision: 4 } }
        @eq ( Ωilxt_703 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',        hit: '~',   pos: '1:8:9', data: { trim: true } }
        @eq ( Ωilxt_704 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit',   hit: 'f/µ', pos: '1:9:12', data: { type: 'f', unit: 'µ' } }
        @eq ( Ωilxt_705 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',        hit: ';',   pos: '1:12:13' }
        @eq ( Ωilxt_706 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',        hit: '...', pos: '1:13:16' }
        @eq ( Ωilxt_707 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':>-$020.4~f/µ;...'
        # info 'Ωilxt_708', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_709', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_710', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_711 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',       hit: ':',   pos: '1:0:1' }
        @eq ( Ωilxt_712 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.fill_align',  hit: '>', pos: '1:1:2', data: { fill: '', align: '>' } }
        @eq ( Ωilxt_713 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.sign',        hit: '-',   pos: '1:2:3', data: { sign: '-' } }
        @eq ( Ωilxt_714 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.symbol',      hit: '$',   pos: '1:3:4', data: { symbol: '$' } }
        @eq ( Ωilxt_715 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.zeros_width', hit: '020', pos: '1:4:7', data: { zeros: true, width: 20 } }
        @eq ( Ωilxt_716 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision',   hit: '.4',  pos: '1:7:9', data: { precision: 4 } }
        @eq ( Ωilxt_717 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',        hit: '~',   pos: '1:9:10', data: { trim: true } }
        @eq ( Ωilxt_718 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit',   hit: 'f/µ', pos: '1:10:13', data: { type: 'f', unit: 'µ' } }
        @eq ( Ωilxt_719 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',        hit: ';',   pos: '1:13:14' }
        @eq ( Ωilxt_720 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',        hit: '...', pos: '1:14:17' }
        @eq ( Ωilxt_721 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
        return null
      #.....................................................................................................
      do =>
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':_>-$020.4~f/µ;...'
        # info 'Ωilxt_722', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_723', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_724', source; g.reset_lnr 1; lexemes = g.scan source
        @eq ( Ωilxt_725 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.enter',       hit: ':',   pos: '1:0:1' }
        @eq ( Ωilxt_726 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.fill_align',  hit: '_>',  pos: '1:1:3', data: { fill: '_', align: '>' } }
        @eq ( Ωilxt_727 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.sign',        hit: '-',   pos: '1:3:4', data: { sign: '-' } }
        @eq ( Ωilxt_728 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.symbol',      hit: '$',   pos: '1:4:5', data: { symbol: '$' } }
        @eq ( Ωilxt_729 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.zeros_width', hit: '020', pos: '1:5:8', data: { zeros: true, width: 20 } }
        @eq ( Ωilxt_730 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.precision',   hit: '.4',  pos: '1:8:10', data: { precision: 4 } }
        @eq ( Ωilxt_731 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.trim',        hit: '~',   pos: '1:10:11', data: { trim: true } }
        @eq ( Ωilxt_732 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'fspec.type_unit',   hit: 'f/µ', pos: '1:11:14', data: { type: 'f', unit: 'µ' } }
        @eq ( Ωilxt_733 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.exit',        hit: ';',   pos: '1:14:15' }
        @eq ( Ωilxt_734 = -> abbrlxm tabulate_lexeme lexemes.next().value ), { fqname: 'outer.tail',        hit: '...', pos: '1:15:18' }
        @eq ( Ωilxt_735 = -> abbrlxm tabulate_lexeme lexemes.next().value ), null
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
              else throw new Error "Ωilxt_739 encountered unhandled lexeme #{rpr abbrlxm lexeme}"
          return R
        #---------------------------------------------------------------------------------------------------
        g       = declare_lexemes new Grammar { name: 'fspec', cast, emit_signals: false, }
        source  = ':_>-$020.4~f/µ; whatever comes after the fspec'
        # info 'Ωilxt_736', source; g.reset_lnr 1; tabulate_lexemes g.scan source
        # info 'Ωilxt_737', source; g.reset_lnr 1; echo abbrlxm lexeme for lexeme from g.scan source
        info 'Ωilxt_738', source; g.reset_lnr 1; d = parse_fspec g, source
        for key in ( Object.keys d ).sort()
          value = d[ key ]
          help 'Ωilxt_740', f"#{key}:<10c; | #{rpr value}"
        return null
      #.....................................................................................................
      return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true, show_passes: false, report_checks: false, }
  # guytest_cfg = { throw_on_error: false, show_passes: false, report_checks: false, }
  # guytest_cfg = { throw_on_error: false, show_passes: true, report_checks: true, }
  ( new Test guytest_cfg ).test @interlex_tasks
  # ( new Test guytest_cfg ).test { ghost_tokens: @interlex_tasks.ghost_tokens, }
  ( new Test guytest_cfg ).test { effstring_specs: @interlex_tasks.effstring_specs, }
  # ( new Test guytest_cfg ).test { cfg_settings: @interlex_tasks.cfg_settings, }
  # ( new Test guytest_cfg ).test { numbering: @interlex_tasks.basics.numbering, }
  # ( new Test guytest_cfg ).test { stack: @interlex_tasks.stack, }

