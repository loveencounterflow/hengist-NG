
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
    debug 'Ωbvfs__28', db.statements
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
        debug 'Ωbvfs__29', db.execute SQL"""
        update metadata set mode = s.open_mode
          from metadata           as m
          join bb_standard_modes  as s on ( m.id = s.file_id );"""
        ;null
      when 'close' then do =>
        debug 'Ωbvfs__30', db.execute SQL"""
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
      urge 'Ωbvfs__31', d.mode_o, d.path # { d..., full_path, }
    #.......................................................................................................
    do =>
      for line in shell 'show-layout', mount_path
        echo line
    #.......................................................................................................
    ;null

  #---------------------------------------------------------------------------------------------------------
  scripts_: ->
    SFMODULES                     = require '../../../apps/bricabrac-sfmodules'
    { type_of,                  } = SFMODULES.unstable.require_type_of()
    { Dbric,
      SQL,
      internals,                } = SFMODULES.unstable.require_dbric()
    PATH                          = require 'node:path'
    { execaSync,                } = require 'execa'
    #.......................................................................................................
    ref_path    = PATH.resolve __dirname, '../../../apps/bvfs'
    db_path     = PATH.join ref_path, 'bvfs.db'
    mount_path  = PATH.join ref_path, 'mount'
    shell_cfg   = { cwd: ref_path, lines: true, only_stdout: true, }
    #.......................................................................................................
    _validate_shell_arguments = ( cfg, cmd, parameters... ) ->
      # whisper 'Ωbbbt__32', { cfg, cmd, parameters, }
      switch type = type_of cfg
        when 'text'
          if cmd is undefined then  [ cfg, cmd, parameters..., ] = [ {}, cfg,       parameters..., ]
          else                      [ cfg, cmd, parameters..., ] = [ {}, cfg, cmd,  parameters..., ]
        when 'pod'  then null
        else throw new Error "Ωbvfs__33 expected a pod or a text, got a #{type}"
      unless ( type = type_of cmd ) is 'text'
        throw new Error "Ωbvfs__34 expected a text, got a #{type}"
      cfg = { shell_cfg..., cfg..., }
      # info 'Ωbbbt__35', { cfg, cmd, parameters, }
      return { cfg, cmd, parameters, }
    #.......................................................................................................
    decode_octal = ( text ) -> text.replace /(?<!\\)\\([0-7]{3})/gv, ( $0, $1 ) ->
      return String.fromCodePoint parseInt $1, 8
    #.......................................................................................................
    shell = ( cfg, cmd, parameters... ) ->
      { cfg, cmd, parameters, } = _validate_shell_arguments cfg, cmd, parameters...
      # debug 'Ωbbbt__36', cfg
      R         = execaSync cmd, parameters, cfg
      # debug 'Ωbbbt__37', R
      # if cfg.decode_octal
      #   if cfg.lines then R.stdout = ( decode_octal line for line in R.stdout )
      #   else              R.stdout = decode_octal R.stdout
      return R.stdout if cfg.only_stdout
      return R
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
    @throws ( Ωbvfs__39 = -> _validate_shell_arguments null               ), /expected a pod or a text, got a/
    @throws ( Ωbvfs__40 = -> _validate_shell_arguments []                 ), /expected a pod or a text, got a/
    @throws ( Ωbvfs__41 = -> _validate_shell_arguments {}                 ), /expected a text, got a/
    @eq     ( Ωbbbt__42 = -> _validate_shell_arguments 'ls'               ), { cfg: { cwd: ref_path, lines: true, }, cmd: 'ls', parameters: [] }
    @eq     ( Ωbbbt__43 = -> _validate_shell_arguments 'ls', '-AlF'       ), { cfg: { cwd: ref_path, lines: true, }, cmd: 'ls', parameters: [ '-AlF', ] }
    @eq     ( Ωbbbt__44 = -> _validate_shell_arguments 'ls', '-AlF', '.'  ), { cfg: { cwd: ref_path, lines: true, }, cmd: 'ls', parameters: [ '-AlF', '.', ] }
    #.......................................................................................................
    debug 'Ωbbbt__45', shell 'ls'
    debug 'Ωbbbt__46', shell 'grep', '-Pi', 'sqlitefs', '/etc/mtab'
    try help 'Ωbbbt__47', shell 'grep', '-Pi', 'sqlitefs', '/etc/mtab'         catch e then warn 'Ωbbbt__48', reverse e.message
    try help 'Ωbbbt__49', shell 'grep', '-Pi', 'sqlitefsYYYY', '/etc/mtab'     catch e then warn 'Ωbbbt__50', reverse e.message
    try help 'Ωbbbt__51', shell 'grep', '-Pi', 'sqlitefsYYYY', '/etc/mtabYYYY' catch e then warn 'Ωbbbt__52', reverse e.message
    #.......................................................................................................
    info 'Ωbbbt__53', match_all_fs_mounts { device: 'sqlitefs', }
    info 'Ωbbbt__54', match_all_fs_mounts { device: 'sqlitefs', type: 'sqlfs', }
    info 'Ωbbbt__55', match_all_fs_mounts { device: 'sqlitefs', type: 'fuse', }
    #.......................................................................................................
    info 'Ωbbbt__56', is_mounted { device: 'sqlitefs', }
    info 'Ωbbbt__57', is_mounted { device: 'sqlitefs', type: 'sqlfs', }
    info 'Ωbbbt__58', is_mounted { device: 'sqlitefs', type: 'fuse', }
    try info 'Ωbbbt__59', is_mounted {} catch e then warn 'Ωbbbt__60', reverse e.message
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



#===========================================================================================================
if module is require.main then do =>
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { access_fs_with_db: @tasks.access_fs_with_db, }
  ( new Test guytest_cfg ).test { scripts_: @tasks.scripts_, }

  # p = 0b0000000_010_010_000; urge f"#{p}:>#08o; #{p}:>#06x;"
  # p = 0b1111111_101_101_111; urge f"#{p}:>#08o; #{p}:>#06x;"
  # p = 0b11111111111111111111111000000000; urge f"#{p}:>#08o; #{p}:>#06x;"
  # p = 0o777; urge f"#{p}:>#08o; #{p}:>#06x; #{p}:>#016b;"
  # p = 0o775; urge f"#{p}:>#08o; #{p}:>#06x; #{p}:>#016b;"
  # p = 0o664; urge f"#{p}:>#08o; #{p}:>#06x; #{p}:>#016b;"
  # urge 'Ωbvfs__61'
  # p = 0o777; urge f"#{p}:>#08o; #{p}:>#06x; #{p}:>#016b;"
  # p = 0o555; urge f"#{p}:>#08o; #{p}:>#06x; #{p}:>#016b;"
  # p = 0o444; urge f"#{p}:>#08o; #{p}:>#06x; #{p}:>#016b;"



###
│      21 │         1 │ folder │   509 │ drwxrwxr-x │ ?rwsrwsr-t    │ .Trash-1000                              │ /.Trash-1000
│      29 │        21 │ folder │ 16832 │ drwx------ │ drws-----T    │ expunged                                 │ /.Trash-1000/expunged
│      24 │        21 │ folder │   448 │ drwx------ │ ?rws-----T    │ files                                    │ /.Trash-1000/files
│      22 │        21 │ folder │   448 │ drwx------ │ ?rws-----T    │ info                                     │ /.Trash-1000/info
│       2 │         1 │ folder │ 16704 │ dr-x------ │ drws-----T    │ origin                                   │ /origin
│      17 │         2 │ folder │   448 │ drwx------ │ ?rws-----T    │ file                                     │ /origin/file
│      26 │        17 │ folder │   509 │ drwxrwxr-x │ ?rwsrwsr-t    │ jzr                                      │ /origin/file/jzr
│      27 │        26 │ folder │   509 │ drwxrwxr-x │ ?rwsrwsr-t    │ bricabrac                                │ /origin/file/jzr/bricabrac
│      28 │        27 │ file   │ 33204 │ .rw-rw-r-- │ .rwxrwSr-T    │ README.md                                │ /origin/file/jzr/bricabrac/README.md
│      18 │        17 │ folder │   448 │ drwx------ │ ?rws-----T    │ path                                     │ /origin/file/path
│      19 │        18 │ folder │   448 │ drwx------ │ ?rws-----T    │ to                                       │ /origin/file/path/to
│      20 │        19 │ file   │ 33152 │ .rw------- │ .-w------T    │ index.js                                 │ /origin/file/path/to/index.js
│      16 │         2 │ folder │   448 │ drwx------ │ ?rws-----T    │ http                                     │ /origin/http
│       3 │         2 │ folder │   448 │ drwx------ │ ?rws-----T    │ https                                    │ /origin/https
│       7 │         3 │ folder │   448 │ drwx------ │ ?rws-----T    │ raw.githubusercontent.com                │ /origin/https/raw.githubusercontent.com
│       8 │         7 │ folder │   448 │ drwx------ │ ?rws-----T    │ loveencounterflow                        │ /origin/https/raw.githubusercontent.com/loveencounterflow
│       9 │         8 │ folder │   448 │ drwx------ │ ?rws-----T    │ bricabrac-sfmodules                      │ /origin/https/raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules
│      10 │         9 │ folder │   448 │ drwx------ │ ?rws-----T    │ 2980e28985fe7b96772a7213a2cd9ae3f263177a │ /origin/https/raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/2980e28985f
│      25 │        10 │ file   │ 33204 │ drwx------ │ .rwxrwSr-T    │ README.md                                │ /origin/https/raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/2980e28985f
│      11 │        10 │ folder │   448 │ .rw-rw-r-- │ ?rws-----T    │ lib                                      │ /origin/https/raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/2980e28985f
│      12 │        11 │ file   │ 33204 │ .rw-rw-r-- │ .rwxrwSr-T    │ jetstream.brics.js                       │ /origin/https/raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/2980e28985f
│      13 │        10 │ folder │   448 │ drwx------ │ ?rws-----T    │ src                                      │ /origin/https/raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/2980e28985f
│      14 │        13 │ file   │ 33152 │ .rw------- │ .-w------T    │ jetstream.brics.coffee                   │ /origin/https/raw.githubusercontent.com/loveencounterflow/bricabrac-sfmodules/2980e28985f
│       4 │         3 │ folder │   448 │ drwx------ │ ?rws-----T    │ unpkg.com                                │ /origin/https/unpkg.com
│       5 │         4 │ folder │   448 │ drwx------ │ ?rws-----T    │ ansi_up                                  │ /origin/https/unpkg.com/ansi_up
│       6 │         5 │ file   │ 33152 │ .rw------- │ .-w------T    │ ansi_up.js                               │ /origin/https/unpkg.com/ansi_up/ansi_up.js


drwxrwxr-x     - flow 2025-11-01 20:08 ├── .Trash-1000
drwx------     - flow 2025-11-01 20:08 │   ├── expunged
drwx------     - flow 2025-11-01 20:08 │   ├── files
drwx------     - flow 2025-11-01 20:08 │   └── info
dr-x------     - flow 2025-11-01 10:02 └── origin
drwx------     - flow 2025-11-01 20:07     ├── file
drwxrwxr-x     - flow 2025-11-01 20:07     │   ├── jzr
drwxrwxr-x     - flow 2025-11-01 20:08     │   │   └── bricabrac
.rw-rw-r-- 13079 flow 2025-11-01 21:16     │   │       └── README.md
drwx------     - flow 2025-11-01 10:02     │   └── path
drwx------     - flow 2025-11-01 10:02     │       └── to
.rw-------     0 flow 2025-11-01 10:02     │           └── index.js
drwx------     - flow 2025-11-01 10:02     ├── http
drwx------     - flow 2025-11-01 10:02     └── https
drwx------     - flow 2025-11-01 10:02         ├── raw.githubusercontent.com
drwx------     - flow 2025-11-01 10:02         │   └── loveencounterflow
drwx------     - flow 2025-11-01 10:02         │       └── bricabrac-sfmodules
drwx------     - flow 2025-11-01 20:06         │           └── 2980e28985fe7b96772a7213a2cd9ae3f263177a
drwx------     - flow 2025-11-01 10:02         │               ├── lib
.rw-rw-r-- 58390 flow 2025-11-01 10:02         │               │   └── jetstream.brics.js
.rw-rw-r-- 21643 flow 2025-11-01 20:06         │               ├── README.md
drwx------     - flow 2025-11-01 10:02         │               └── src
.rw------- 15776 flow 2025-11-01 10:02         │                   └── jetstream.brics.coffee
drwx------     - flow 2025-11-01 10:02         └── unpkg.com
drwx------     - flow 2025-11-01 10:02             └── ansi_up
.rw------- 22656 flow 2025-11-01 10:02                 └── ansi_up.js



###