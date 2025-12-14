
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
  whisper }               = GUY.trm.get_loggers 'bricabrac-sfmodules/unicode-range-tools'
{ rpr
  inspect
  echo
  reverse
  log     }               = GUY.trm
# WGUY                      = require '../../../apps/webguy'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
{ f }                     = require '../../../apps/effstring'



############################################################################################################
#
#===========================================================================================================
@tasks =

  #---------------------------------------------------------------------------------------------------------
  ranges: ->
    SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { Range,
      Rangeset,
      internals,              } = SFMODULES.require_unicode_range_tools()
    #.......................................................................................................
    @eq     ( Ωtucrt___1 = -> new Range()                             ), { lo: 0, hi: 1114111 }
    @eq     ( Ωtucrt___2 = -> new Range 1                             ), { lo: 1, hi: 1114111 }
    @eq     ( Ωtucrt___3 = -> new Range 1, 256                        ), { lo: 1, hi: 256 }
    @eq     ( Ωtucrt___4 = -> new Range 1, { hi: 333, }               ), { lo: 1, hi: 333 }
    @eq     ( Ωtucrt___5 = -> new Range { lo: 33, hi: 333, }          ), { lo: 33, hi: 333 }
    @eq     ( Ωtucrt___6 = -> new Range undefined,  40, { lo: 12, }   ), { lo: 12, hi: 40 }
    @throws ( Ωtucrt___7 = -> new Range null, 40                      ), /yyy/
    @throws ( Ωtucrt___8 = -> new Range null, 40, { lo: 12, }         ), /yyy/
    @throws ( Ωtucrt___9 = -> new Range 200, 100                      ), /yyy/
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  rangesets: ->
    SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { Range,
      Rangeset,
      internals,              } = SFMODULES.require_unicode_range_tools()
    #.......................................................................................................
    @eq     ( Ωtucrt__10 = -> new Rangeset()                                    ), { ranges: [] }
    @eq     ( Ωtucrt__11 = -> new Rangeset { lo: 7, hi: 65, }                   ), { ranges: [ { lo: 7, hi: 65, }, ], }
    @eq     ( Ωtucrt__12 = -> new Rangeset ( new Range { lo: 7, hi: 65, } )     ), { ranges: [ { lo: 7, hi: 65, }, ], }
    @eq     ( Ωtucrt__13 = -> new Rangeset { lo: 1, hi: 2, }, { lo: 3, hi: 4, } ), { ranges: [ { lo: 1, hi: 2, }, { lo: 3, hi: 4, }, ] }
    #.......................................................................................................
    return null

  #---------------------------------------------------------------------------------------------------------
  rangeset_from_regex: ->
    SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { Range,
      Rangeset,
      internals,              } = SFMODULES.require_unicode_range_tools()
    #.......................................................................................................
    @eq     ( Ωtucrt__14 = -> new Rangeset.from_regex()                                                 ), { ranges: [ { lo: 0, hi: 55295, }, { lo: 61440, hi: 983039, } ] }
    @eq     ( Ωtucrt__15 = -> ( new Rangeset.from_regex /^[\p{L}&&\p{Script=Greek}]$/v ).ranges.length  ), 36
    @eq     ( Ωtucrt__16 = -> ( new Rangeset.from_regex /^[\p{L}&&\p{Script=Hani}]$/v ).ranges.length   ), 16
    @eq     ( Ωtucrt__17 = -> new Rangeset.from_regex /^[a-c]$/v                                        ), { ranges: [ { lo: 97, hi: 99, } ] }
    #.......................................................................................................
    rangeset = new Rangeset.from_regex /^[\p{Script=Hani}]$/v
    for range in rangeset.ranges
      first_chr = String.fromCodePoint range.lo
      last_chr  = String.fromCodePoint range.hi
      info 'Ωtucrt__18', f"#{range.lo}:#08x;..#{range.hi}:#08x;: #{first_chr}..#{last_chr}"
    #.......................................................................................................
    return null


#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @tasks
  # ( new Test guytest_cfg ).test { require_get_local_destinations: @tasks.require_get_local_destinations, }
