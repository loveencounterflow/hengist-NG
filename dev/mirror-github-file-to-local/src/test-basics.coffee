
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
  whisper }               = GUY.trm.get_loggers 'mirror-github-file-to-local'
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
@mirror_file_tasks =

  #=========================================================================================================
  basics: ->
    insert_tag_re =     /// ^
      (?<prefix> .*? )
      <
      <
      <
      (?<slash> \/? )
      (?<command> insert )
      \x20+
      ( (?<place> below | above ) \x20+ )?
      (?<path>
        (?:
          (?: ' (?: \\' | [^ ' ]  )+ ' ) |
          (?: " (?: \\" | [^ " ]  )+ " ) |
          (?: \$ [a-zA-Z0-9]+          ) # insert JS identifier pattern
          )
        )
      >
      (?<user_eoi> [^ > ]* )
      >
      (?<system_eoi> [^ > ]* )
      >
      (?<suffix> .*? )
      $ ///
    #.......................................................................................................
    probes = [
      """<<<insert below 'brackets.txt'>>>"""
      """<<<insert below 'brackets.txt'>USER>>"""
      """<!-- <<</insert below 'brackets.txt'>>SYSTEM> -->"""
      """<!-- <<</insert below 'my brackets.txt'>>SYSTEM> -->"""
      """<!-- <<</insert below "my brackets.txt">>SYSTEM> -->"""
      """<!-- <<</insert below "my \\" brackets.txt">>SYSTEM> -->"""
      """<!-- <<</insert below 'my \\> brackets.txt'>>SYSTEM> -->"""
      """<!-- <<</insert below 'my > brackets.txt'>>SYSTEM> -->"""
      """<!-- <<</insert below $brackets>>SYSTEM> -->"""
      ]
    for probe in probes
      urge 'Ωmf___1', rpr probe
      unless ( match = probe.match insert_tag_re )?
        warn 'Ωmf___2', "no match"
        continue
      help 'Ωmf___3', { match.groups..., }
    #.......................................................................................................
    return null





#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test @mirror_file_tasks
  # ( new Test guytest_cfg ).test @mirror_file_tasks.builtins
