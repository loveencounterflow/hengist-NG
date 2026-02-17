

'use strict'

#===========================================================================================================
GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'bricabrac-dbric'
{ rpr
  inspect
  echo
  white
  green
  blue
  gold
  grey
  red
  bold
  reverse
  log     }               = GUY.trm
{ f }                     = require '../../../apps/effstring'
# write                     = ( p ) -> process.stdout.write p
{ nfa }                   = require '../../../apps/normalize-function-arguments'
GTNG                      = require '../../../apps/guy-test-NG'
{ Test                  } = GTNG
SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
FS                        = require 'node:fs'
PATH                      = require 'node:path'
#===========================================================================================================
{ Dbric,
  Dbric_std,
  Dbric_table_formatter,
  IDN,
  LIT,
  SQL,
  VEC,
  from_bool,
  as_bool,
  internals,
  True,
  False,
  unquote_name,         } = require '../../../apps/bricabrac-sfmodules/lib/dbric'


#===========================================================================================================
@tests = tests =


  #---------------------------------------------------------------------------------------------------------
  udf_table_function_with_bsql: ->
    #=======================================================================================================
    class Dbric_phrases extends Dbric
      #-----------------------------------------------------------------------------------------------------
      @build: [
        SQL"""create table phrases (
            phrase text unique not null primary key );"""
        ]
      #-----------------------------------------------------------------------------------------------------
      @statements:
        insert_phrase: SQL"""insert into phrases ( phrase ) values ( $phrase )
          on conflict ( phrase ) do nothing;"""
        select_from_phrases: SQL"""
          select
              *
            from
              phrases as p,
              re_matches( p.phrase, $matcher ) as rx
            order by p.phrase;"""
      #-----------------------------------------------------------------------------------------------------
      @table_functions:
        re_matches:
          columns:      [ 'match', 'capture', ]
          parameters:   [ 'text', 'pattern', ]
          rows: ( text, pattern ) ->
            regex = new RegExp pattern, 'g'
            for match from text.matchAll regex
              yield [ match[ 0 ], match[ 1 ], ]
            return null
    #=======================================================================================================
    do =>
      phrases   = Dbric_phrases.rebuild()
      for phrase in [ 'eleven', 'five', 'nine', 'one', 'one point five', 'seven', 'three point one' ]
        phrases.statements.insert_phrase.run { phrase, }
      #.....................................................................................................
      # echo 'Ωdbt___1', row for row from phrases.statements.select_from_phrases.iterate { matcher: '^.*([aeiou].e).*$', }
      # echo()
      #.....................................................................................................
      # echo 'Ωdbt___2', row for row from phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
      # rows = phrases.statements.select_from_phrases.iterate { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
      # @eq ( Ωdbt___3 = -> rows.next().value ), { phrase: 'eleven', match: 'le', capture: 'le' }
      # @eq ( Ωdbt___4 = -> rows.next().value ), { phrase: 'eleven', match: 've', capture: 've' }
      # @eq ( Ωdbt___5 = -> rows.next().value ), { phrase: 'five', match: 'fi', capture: 'fi' }
      # @eq ( Ωdbt___6 = -> rows.next().value ), { phrase: 'nine', match: 'ni', capture: 'ni' }
      # @eq ( Ωdbt___7 = -> rows.next().value ), { phrase: 'one', match: 'o', capture: 'o' }
      # @eq ( Ωdbt___8 = -> rows.next().value ), { phrase: 'one point five', match: 'o', capture: 'o' }
      # @eq ( Ωdbt___9 = -> rows.next().value ), { phrase: 'one point five', match: 'poi', capture: 'poi' }
      # @eq ( Ωdbt__10 = -> rows.next().value ), { phrase: 'one point five', match: 'fi', capture: 'fi' }
      # @eq ( Ωdbt__11 = -> rows.next().value ), { phrase: 'seven', match: 'se', capture: 'se' }
      # @eq ( Ωdbt__12 = -> rows.next().value ), { phrase: 'seven', match: 've', capture: 've' }
      # @eq ( Ωdbt__13 = -> rows.next().value ), { phrase: 'three point one', match: 'poi', capture: 'poi' }
      # @eq ( Ωdbt__14 = -> rows.next().value ), { phrase: 'three point one', match: ' o', capture: ' o' }
      # @eq ( Ωdbt__15 = -> rows.next().value ), undefined
      echo phrases.tbl_as_text SQL"select 1 as n;"
      echo phrases.tbl_as_text SQL"select 1 as m, 2 as k;"
      echo phrases.tbl_as_text phrases.statements.select_from_phrases, { matcher: '([^aeiou]?[aeiou]+)(?=[mnv])', }
      ;null
    #.......................................................................................................
    return null


#===========================================================================================================
if module is require.main then await do =>
  do_coverage = true
  do_coverage = false
  if do_coverage
    { Coverage_analyzer,          } = require '../../../apps/bricabrac-sfmodules/lib/coverage-analyzer'
    ca = new Coverage_analyzer()
    # ca.wrap_class Dbric_table_formatter
    ca.wrap_class Dbric_std
  { wrap_methods_of_prototypes, } = require '../../../apps/bricabrac-sfmodules/lib/prototype-tools'
  # wrap_methods_of_prototypes Dbric_std, ({ fqname, callme, P, }) ->
  #   debug 'Ωdbt__18', fqname #, P
  #   return callme()
  # db = new Dbric_std ':memory:', { rebuild: true, }
  #---------------------------------------------------------------------------------------------------------
  guytest_cfg = { throw_on_error: false,  show_passes: true, report_checks: true, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { integer_storage_with_infinity: tests.integer_storage_with_infinity, }
  #---------------------------------------------------------------------------------------------------------
  if do_coverage
    warn 'Ωdbt__19', "not covered:", reverse name for name in ca.unused_names if ca.unused_names.length > 0
    # help 'Ωdbt__20', ca.used_names
    # urge 'Ωdbt__21', count, names for count, names of ca.names_by_counts
  #=========================================================================================================
  ;null
