
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
  whisper }               = GUY.trm.get_loggers 'bricabrac-sfmodules/test-basics'
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
  basics: ->
    SFMODULES                   = require '../../../apps/bricabrac-sfmodules'
    { type_of,                } = SFMODULES.unstable.require_type_of()
    { Jetstream,
      Async_jetstream,
      internals,              } = SFMODULES.require_jetstream()
    #.......................................................................................................
    probes_and_matchers = [
      { type: 'folder',  nprm:   509, sprm: 'drwxrwxr-x', }
      { type: 'folder',  nprm: 16832, sprm: 'drwx------', }
      { type: 'folder',  nprm:   448, sprm: 'drwx------', }
      { type: 'folder',  nprm: 16704, sprm: 'dr-x------', }
      { type: 'folder',  nprm:   509, sprm: 'drwxrwxr-x', }
      { type: 'folder',  nprm:   509, sprm: 'drwxrwxr-x', }
      { type: 'file',    nprm: 33204, sprm: '.rw-rw-r--', }
      { type: 'file',    nprm: 33152, sprm: '.rw-------', }
      { type: 'file',    nprm: 33204, sprm: 'drwx------', }
      { type: 'folder',  nprm:   448, sprm: '.rw-rw-r--', }
      { type: 'file',    nprm: 33204, sprm: '.rw-rw-r--', }
      { type: 'file',    nprm: 33152, sprm: '.rw-------', }
      { type: 'file',    nprm: 33152, sprm: '.rw-------', }
      ]
    #.......................................................................................................
    do =>
      for { type, nprm, sprm, } in probes_and_matchers
        oprm = '0o' + ( nprm.toString  8 ).padStart  8, '0'
        xprm = '0x' + ( nprm.toString 16 ).padStart  8, '0'
        bprm = '__' + ( nprm.toString  2 ).padStart 16, '0'
        debug 'Ωbvfs___1', f"#{nprm}:>10c; #{oprm}:>10c; #{xprm}:>10c; #{bprm}:>20c; #{sprm}:>10c; "
      ;null
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  file_permissions_logic: ->
    SFMODULES                 = require '../../../apps/bricabrac-sfmodules'
    UP                        = require 'unix-permissions'
    FS                        = require 'node:fs'
    debug 'Ωbbbt___2', ( k for k of UP )
    debug 'Ωbbbt___3', UP.convert.object ( FS.statSync '/etc/passwd' ).mode
    debug 'Ωbbbt___4', f"#{UP.convert.number 'a-w'}:>#03o;"
    debug 'Ωbbbt___5', f"#{UP.convert.number 'a+w'}:>#03o;"
    debug 'Ωbbbt___6', f"#{UP.convert.number 'u+w'}:>#03o;"
    debug 'Ωbbbt___7', f"#{UP.convert.number 'u+r'}:>#03o;"
    debug 'Ωbbbt___8', f"#{UP.convert.number 'u-w,g-w,o-w'}:>#03o;"
    debug 'Ωbbbt___9', f"#{UP.convert.number 'u+w,g+w,o+w'}:>#03o;"
    debug 'Ωbbbt__10', f"  #{UP.convert.symbolic 'u+w,g+w,o+w'}:>20c;"
    help 'Ωbbbt__11', f"  #{UP.convert.symbolic 0o775}:>20c;"
    help 'Ωbbbt__12', f"  #{UP.convert.symbolic 0o664}:>20c;"
    help 'Ωbbbt__13', f"  #{UP.convert.symbolic 0o555}:>20c;"
    help 'Ωbbbt__14', f"  #{UP.convert.symbolic 0o444}:>20c;"
    help 'Ωbbbt__15'
    help 'Ωbbbt__16', f"  #{UP.convert.symbolic 0o000775}:>20c;"
    help 'Ωbbbt__17', f"  #{UP.convert.symbolic 0o040555}:>20c;"
    help 'Ωbbbt__18', f"  #{UP.convert.symbolic 0o100444}:>20c;"
    help 'Ωbbbt__19'
    help 'Ωbbbt__20', f"  #{UP.convert.symbolic 0o000775 & 0xfe00 | 0x01fd }:>20c;" ### 0o775 drwxrwxr-x folder open ###
    help 'Ωbbbt__21', f"  #{UP.convert.symbolic 0o040555 & 0xfe00 | 0x01fd }:>20c;" ### 0o775 drwxrwxr-x folder open ###
    help 'Ωbbbt__22', f"  #{UP.convert.symbolic 0o100444 & 0xfe00 | 0x01b4 }:>20c;" ### 0o664 .rw-rw-r-- file open ###
    help 'Ωbbbt__23'
    help 'Ωbbbt__24', f"  #{UP.convert.symbolic 0o000775 & 0xfe00 | 0x016d }:>20c;" ### 0o555 dr-xr-xr-x folder closed ###
    help 'Ωbbbt__25', f"  #{UP.convert.symbolic 0o040555 & 0xfe00 | 0x016d }:>20c;" ### 0o555 dr-xr-xr-x folder closed ###
    help 'Ωbbbt__26', f"  #{UP.convert.symbolic 0o100444 & 0xfe00 | 0x0124 }:>20c;" ### 0o444 .r--r--r-- file closed ###
    # @eq ( Ωbbbt__27 = -> false ), false
    ###
    help 'Ωbvfsto__28', "drwxrwxr-x", ( 0o775.toString 8 ), ( '0x' + ( 0o775.toString 16 ).padStart 4, '0' )
    help 'Ωbvfsto__29', ".rw-rw-r--", ( 0o664.toString 8 ), ( '0x' + ( 0o664.toString 16 ).padStart 4, '0' )
    help 'Ωbvfsto__30', "dr-xr-xr-x", ( 0o555.toString 8 ), ( '0x' + ( 0o555.toString 16 ).padStart 4, '0' )
    help 'Ωbvfsto__31', ".r--r--r--", ( 0o444.toString 8 ), ( '0x' + ( 0o444.toString 16 ).padStart 4, '0' )
    help 'Ωbvfsto__32', "??-??-??-?", ( 0b101_101_101.toString 8 ), ( '0x' + ( 0b101_101_101.toString 16 ).padStart 4, '0' )
    help 'Ωbvfsto__33', "??w??w??-?", ( 0b010_010_000.toString 8 ), ( '0x' + ( 0b010_010_000.toString 16 ).padStart 4, '0' )
    ###
    ;null

  #---------------------------------------------------------------------------------------------------------
  access_fs_with_db: ->
    SFMODULES                     = require '../../../apps/bricabrac-sfmodules'
    { type_of,                  } = SFMODULES.unstable.require_type_of()
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    PATH                          = require 'node:path'
    { execaSync,                } = require 'execa'
    #.......................................................................................................
    class Sqlitefs_db extends Dbric
      # @build: [
      #   SQL"""
      #     create table nonconform_one ( a text primary key );"""
      #   SQL"""
      #     -- this comment shouldn't be here
      #     create view nonconform_two as select * from nonconform_one;"""
      #   ]
      #-----------------------------------------------------------------------------------------------------
      @statements:
        get_fs_objects: SQL"""
          select * from bb_list;"""
      walk_fs_objects: -> yield from @statements.get_fs_objects.iterate()
    #.......................................................................................................
    ref_path    = PATH.resolve __dirname, '../../../apps/bvfs'
    db_path     = PATH.join ref_path, 'bvfs.db'
    mount_path  = PATH.join ref_path, 'mount'
    #.......................................................................................................
    shell_cfg   = { cwd: ref_path, lines: true, }
    shell       = ( cmd, P... ) -> ( execaSync cmd, P, shell_cfg ).stdout
    #.......................................................................................................
    db          = Sqlitefs_db.open db_path
    debug 'Ωbvfs__34', db.statements
    paths       = []
    #.......................................................................................................
    do =>
      for line in shell 'show-layout', mount_path
        echo line
    #.......................................................................................................
    # mode = 'close'
    # mode = 'open'
    mode = 'nothing'
    switch mode
      when 'open' then do =>
        debug 'Ωbvfs__35', db.execute SQL"""
        update metadata set mode = s.open_mode
          from metadata           as m
          join bb_standard_modes  as s on ( m.id = s.file_id );"""
        ;null
      when 'close' then do =>
        debug 'Ωbvfs__36', db.execute SQL"""
        update metadata set mode = s.closed_mode
          from metadata           as m
          join bb_standard_modes  as s on ( m.id = s.file_id );"""
        ;null
      when 'nothing' then null
      else throw new Error "unknown mode: #{rpr mode}"
    #.......................................................................................................
    for d from db.walk_fs_objects()
      full_path = PATH.join mount_path, d.path
      paths.push full_path
      urge 'Ωbvfs__37', d.mode_o, d.path # { d..., full_path, }
    #.......................................................................................................
    do =>
      for line in shell 'show-layout', mount_path
        echo line
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  scripts_YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY: ->
    SFMODULES                     = require '../../../apps/bricabrac-sfmodules'
    { type_of,                  } = SFMODULES.unstable.require_type_of()
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    PATH                          = require 'node:path'
    { execaSync,                } = require 'execa'
    { Shell,                    } = require '../../../apps/bvfs'
    #.......................................................................................................
    ref_path    = PATH.resolve __dirname, '../../../apps/bvfs'
    db_path     = PATH.join ref_path, 'bvfs.db'
    mount_path  = PATH.join ref_path, 'mount'
    shell_cfg   = { cwd: ref_path, lines: true, only_stdout: true, }
    #.......................................................................................................
    match_all_fs_mounts = ( cfg ) ->
      R     = []
      lines = shell { only_stdout: true, }, 'cat', '/etc/mtab'
      for line in lines
        [ device,
          path,
          type,   ] = line.split /\x20/
        continue if cfg.device? and ( device isnt cfg.device )
        path        = decode_octal path
        continue if cfg.path?   and ( path   isnt cfg.path   )
        continue if cfg.type?   and ( type   isnt cfg.type   )
        R.push { device, path, type, }
      return R
    #.......................................................................................................
    is_mounted = ( cfg ) ->
      switch ( mounts = match_all_fs_mounts cfg ).length
        when 0 then return false
        when 1 then return true
      throw new Error "Ωbvfs__38 expected 0 or 1 match, got #{mounts.length}: #{rpr mounts}"
    #.......................................................................................................
    do =>
      sh = new Shell()
      @throws ( Ωbvfs__39 = -> sh._validate_call_arguments null               ), /expected a pod or a text, got a/
      @throws ( Ωbvfs__40 = -> sh._validate_call_arguments []                 ), /expected a pod or a text, got a/
      @throws ( Ωbvfs__41 = -> sh._validate_call_arguments {}                 ), /expected a text, got a/
      @eq     ( Ωbbbt__42 = -> sh._validate_call_arguments 'ls'               ), { cfg: { cwd: ref_path, lines: true, }, cmd: 'ls', parameters: [] }
      @eq     ( Ωbbbt__43 = -> sh._validate_call_arguments 'ls', '-AlF'       ), { cfg: { cwd: ref_path, lines: true, }, cmd: 'ls', parameters: [ '-AlF', ] }
      @eq     ( Ωbbbt__44 = -> sh._validate_call_arguments 'ls', '-AlF', '.'  ), { cfg: { cwd: ref_path, lines: true, }, cmd: 'ls', parameters: [ '-AlF', '.', ] }
      ;null
    #.......................................................................................................
    do =>
      sh = new Shell shell_cfg
      debug 'Ωbbbt__45', sh.call 'ls'
      debug 'Ωbbbt__46', sh.call 'grep', '-Pi', 'sqlitefs', '/etc/mtab'
      try help 'Ωbbbt__47', sh.call 'grep', '-Pi', 'sqlitefs', '/etc/mtab'         catch e then warn 'Ωbbbt__48', reverse e.message
      try help 'Ωbbbt__49', sh.call 'grep', '-Pi', 'sqlitefsYYYY', '/etc/mtab'     catch e then warn 'Ωbbbt__50', reverse e.message
      try help 'Ωbbbt__51', sh.call 'grep', '-Pi', 'sqlitefsYYYY', '/etc/mtabYYYY' catch e then warn 'Ωbbbt__52', reverse e.message
      ;null
      ;null
    #.......................................................................................................
    do =>
      sh = new Shell shell_cfg
      info 'Ωbbbt__53', match_all_fs_mounts { device: 'sqlitefs', }
      info 'Ωbbbt__54', match_all_fs_mounts { device: 'sqlitefs', type: 'sqlfs', }
      info 'Ωbbbt__55', match_all_fs_mounts { device: 'sqlitefs', type: 'fuse', }
      ;null
    #.......................................................................................................
    do =>
      sh = new Shell shell_cfg
      info 'Ωbbbt__56', is_mounted { device: 'sqlitefs', }
      info 'Ωbbbt__57', is_mounted { device: 'sqlitefs', type: 'sqlfs', }
      info 'Ωbbbt__58', is_mounted { device: 'sqlitefs', type: 'fuse', }
      try info 'Ωbbbt__59', is_mounted {} catch e then warn 'Ωbbbt__60', reverse e.message
      ;null
    #.......................................................................................................
    ###
    Output when mount point name is 'm o u n t':
      [ 'sqlitefs /home/flow/jzr/bvfs/m\\040o\\040u\\040n\\040t fuse rw,nosuid,nodev,relatime,user_id=1000,group_id=1000,default_permissions,allow_other 0 0' ]
    Output when mount point name is '𫝀':
      [ 'sqlitefs /home/flow/jzr/bvfs/𫝀 fuse rw,nosuid,nodev,relatime,user_id=1000,group_id=1000,default_permissions,allow_other 0 0' ]
    ###
    # sqlitefs /home/flow/jzr/bvfs/mount fuse rw,nosuid,nodev,relatime,user_id=1000,group_id=1000,default_permissions,allow_other 0 0
    # grep: /etc/mtabYYYY: No such file or directory
    #  $$$    /// 2 х  bvfs @ 1.0.0 pkg  at 11:15:36
    #.......................................................................................................
    # trash bvfs.db && bin/sqlite-fs mount -- ./bvfs.db & disown && sqlite3 bvfs.db ".dump" > bvfs.dump.sql
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  async_shell: ->
    SFMODULES                     = require '../../../apps/bricabrac-sfmodules'
    { type_of,                  } = SFMODULES.unstable.require_type_of()
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    PATH                          = require 'node:path'
    { $,                        } = require 'execa'
    { Shell,                    } = require '../../../apps/bvfs'
    { Jetstream,
      internals,                } = SFMODULES.require_jetstream()
    #.........................................................................................................
    await $({verbose: 'full'})"cat package.json"
    await $({verbose: 'full'})"cat .gitignore"
    R = await $( { lines: true, verbose: 'full', } )"cat .gitignore".pipe"sort"
    debug 'Ωbbbt__61', R.stdout
    R = await \
      $(      { lines: true, verbose: 'full', } )"cat .gitignore" \
      .pipe(  { lines: true, verbose: 'full', } )"sort"
    debug 'Ωbbbt__62', ( rpr R.stdout )[ .. 108 ] + '...'
    R = await $( { lines: true, verbose: 'full', } )"cat .gitignore".pipe"sort".pipe"head -n2"
    debug 'Ωbbbt__63', ( rpr R.stdout )[ .. 108 ] + '...'
    R = await $( { lines: true, verbose: 'full', } )"mount"
    debug 'Ωbbbt__64', ( rpr R.stdout )[ .. 108 ] + '...'
    #.......................................................................................................
    await do =>
      # fallback  = Symbol 'fallback'
      pattern   = ///
        ^
                        (?<device>   [^\x20]+ )
        \x20 on   \x20  (?<path>     [^\x20]+ )
        \x20 type \x20  (?<type>     [^\x20]+ )
        \x20 \(         (?<options>  [^\x20]+ ) \)
        $ ///v
      #.....................................................................................................
      sh_mount_jet = new Jetstream() # { fallback, outlet: '*', }
      # #.....................................................................................................
      # sh_mount_jet.push '*', ( d ) -> help 'Ωbbbt__65', rpr d
      #.....................................................................................................
      sh_mount_jet.push ( d ) ->
        return null unless ( match = d.match pattern )?
        # help 'Ωbbbt__66', match.groups
        yield { match.groups..., }
      #.....................................................................................................
      sh_mount_jet.push ( d ) -> d.options = d.options.split ','
      #.....................................................................................................
      walk_sh_mount = ->
        { stdout, } = await $( { lines: true, verbose: 'none', } )"mount"
        for line in stdout
          yield sh_mount_jet.pick_first line ### TAINT use `fallback` to prevent error in case of no results ###
        ;null
      #.....................................................................................................
      walk_sh_mount_match = ({ device = null, path = null, type = null, }={}) ->
        ### TAINT allow regexes ###
        for await d from walk_sh_mount()
          continue if ( device? ) and not ( device is d.device )
          continue if ( path?   ) and not ( path is d.path     )
          continue if ( type?   ) and not ( type is d.type     )
          yield d
        ;null
      #.....................................................................................................
      # debug 'Ωbbbt__68', d for await d from walk_sh_mount()
      debug 'Ωbbbt__68', d for await d from walk_sh_mount_match { device: 'sqlitefs', }
      debug 'Ωbbbt__68', d for await d from walk_sh_mount_match { device: 'tmpfs', }
    #.......................................................................................................
    ;null



#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { access_fs_with_db: @tasks.access_fs_with_db, }
  # ( new Test guytest_cfg ).test { scripts_YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY: @tasks.scripts_YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY, }
  await ( new Test guytest_cfg ).async_test { async_shell: @tasks.async_shell, }

