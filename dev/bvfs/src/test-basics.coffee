
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
{ Test,                 } = GTNG
{ f,                    } = require '../../../apps/effstring'
PATH                      = require 'node:path'
{ $,                    } = require 'execa'

#===========================================================================================================
get_paths = ->
  hengist_path  = PATH.resolve __dirname, '../../..'
  ref_path      = PATH.join hengist_path, 'apps/bvfs'
  db_path       = PATH.join ref_path, 'bvfs.db'
  mount_path    = PATH.join ref_path, 'mount'
  assets_path   = PATH.join hengist_path, 'assets/bvfs'
  arena_path    = PATH.join hengist_path, 'arena/bvfs'
  return { ref_path, db_path, mount_path, assets_path, arena_path, }


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
    { ref_path,
      db_path,
      mount_path, } = get_paths()
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
    { ref_path,
      db_path,
      mount_path, } = get_paths()
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
    { Async_jetstream,
      Jetstream,
      internals,                } = SFMODULES.require_jetstream()
    { lets,
      freeze,                   } = require '../../../apps/letsfreezethat'
    create_glob_matcher           = require 'picomatch'
    { regex,                    } = require 'regex'
    #.........................................................................................................
    decode_octal = ( text ) -> text.replace /(?<!\\)\\([0-7]{3})/gv, ( $0, $1 ) ->
      return String.fromCodePoint parseInt $1, 8
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
      ### TAINT the output of `mount` is not escaped and not quoted, so there's lots of opportunities
      for paths and device names with spaces or parens to cause the match to fail; consider to use
      `cat /etc/mtab` instead which uses octal escapes for filenames with spaces. ###
      pattern   = ///
        ^
                        (?<device>   [^\x20]+ )
        \x20 on   \x20  (?<path>     .+?      )
        \x20 type \x20  (?<type>     [^\x20]+ )
        \x20 \(         (?<options>  [^\x20]+ ) \)
        $ ///v
      #.....................................................................................................
      sh_mount_jet = new Jetstream { empty_call: null, }
      #.....................................................................................................
      sh_mount_jet.push ( NN ) ->
        # { stdout, } = await $( { lines: true, verbose: 'none', } )"mount"
        yield from GUY.fs.walk_lines '/etc/mtab'
        #   debug 'Ωbbbt__65',
        #    line.split '\x20'
        # for line in stdout
        #   yield line
        ;null
      #.....................................................................................................
      sh_mount_jet.push ( line ) ->
        return null if line is ''
        [ device
          path
          type
          options ] = line.split '\x20'
        if [ device, path, type, options, ].some ( e ) -> ( not e? ) or ( e is '' )
          throw new Error "Ωbvfs__66 unable to parse line #{rpr line}"
        yield freeze { device, path, type, options, }
      #.....................................................................................................
      sh_mount_jet.push ( d ) ->
        yield lets d, ( d ) ->
          d.options = d.options.split ','
          d.path    = decode_octal d.path
        ;null
      #.....................................................................................................
      create_regex_matcher = ( pattern ) ->
        return ( -> true ) unless pattern?
        switch type = type_of pattern
          when 'regex'
            re = pattern
          when 'text'
            re = regex"#{pattern}"
          else throw new Error "Ωbvfs__67 expected a regex or a text, got a #{type}"
        return ( x ) -> re.lastIndex = 0; re.test x
      #.....................................................................................................
      walk_sh_mount_matches = ({ device = null, path = null, glob = null, type = null, }={}) ->
        if glob?
          if path?
            throw new Error "Ωbvfs__68 expected either glob or path, got both"
          match_glob  = create_glob_matcher glob
        else
          match_glob  = -> true
        match_device  = create_regex_matcher device
        match_path    = create_regex_matcher path
        match_type    = create_regex_matcher type
        ### TAINT allow regexes ###
        for d from sh_mount_jet.walk()
          continue unless match_device  d.device
          continue unless match_glob    d.path
          continue unless match_path    d.path
          continue unless match_type    d.type
          yield d
        ;null
      #.....................................................................................................
      has_mount = ( P... ) ->
        mounts = [ ( walk_sh_mount_matches P... )..., ]
        return switch count = mounts.length
          when 0 then false
          when 1 then true
        throw new Error "Ωbvfs__69 expected zero or one results, got #{count}"
      #.....................................................................................................
      # for await d from walk_sh_mount_matches { device: 'sqlitefs', }
      # for await d from walk_sh_mount_matches()
      #   urge 'Ωbbbt__70', d
      result = [ ( d for await d from walk_sh_mount_matches { device: 'tmpfs', } )..., ]
      @eq ( Ωbvfs__71 = -> result.length > 1 ), true
      #.....................................................................................................
      error = null
      try await has_mount { device: 'tmpfs', } catch error
        @eq ( Ωbvfs__72 = -> /expected zero or one results, got \d+/.test error.message ), true
      @eq ( Ωbvfs__73 = -> error is null ), false
      #.....................................................................................................
      @eq ( Ωbbbt__74 = -> has_mount { path: '/dev/shm',       } ), true
      @eq ( Ωbbbt__75 = -> has_mount { path: /^\/dev\/shm$/v,  } ), true
      @eq ( Ωbbbt__76 = -> has_mount { glob: '/*/shm',         } ), true
      @eq ( Ωbbbt__77 = -> has_mount { path: '/no/such/path',  } ), false
      ###
      in /etc/mtab:
      (1) /home/flow/jzr/bvfs/mou\134nt instead of /home/flow/jzr/bvfs/mou\012t
      (2) /home/flow/jzr/bvfs/mou\134tt instead of /home/flow/jzr/bvfs/mou\011t
      (3) /home/flow/jzr/bvfs/mou\134x01t instead of /home/flow/jzr/bvfs/mou\001t
      (4) /home/flow/jzr/bvfs/mou\134x7ft instead of /home/flow/jzr/bvfs/mou\177t
      (5) /home/flow/jzr/bvfs/mou\134u2029t literally '/home/flow/jzr/bvfs/mou\u2029t' with the backslash escaped
      where '\134' is 0x5c `\\` (backslash)

      `mount` command output:
      (4) /home/flow/jzr/bvfs/mou\x7ft
      (5) /home/flow/jzr/bvfs/mou\u2029t

      `mount` 'helpfully' resolves the top-level escaping (i.e. the octal escapes) but leaves the symbolic
      `\n`, `\t`, `\x..`, `\u....` in place; unfortunately, this results in filenames where the most
      notorious offender—ASCII space—is left unescaped, with no quotes around the path and no way to safely
      reconstruct the path except matching on how it probably ends (with a `type ...` and a parenthesized
      list of options that hopefully don't use any special characters).

      ###
    #.......................................................................................................
    ;null

# #===========================================================================================================
# ensure_empty_dir = ( path ) ->
#   try await result = $( { reject: false, } )"trash #{path}" catch error
#     debug 'Ωbbbt__78', rpr error.exitCode
#     debug 'Ωbbbt__79', rpr error.name
#     debug 'Ωbbbt__80', rpr error.code
#     debug 'Ωbbbt__81', rpr error.message
#     debug 'Ωbbbt__82', rpr error.originalMessage
#     debug 'Ωbbbt__83', rpr error.cause
#     process.exit 111
#     throw error
#   info 'Ωbbbt__84', rpr result
#   info 'Ωbbbt__85', rpr result?.exitCode
#   info 'Ωbbbt__86', rpr result?.name
#   info 'Ωbbbt__87', rpr result?.code
#   info 'Ωbbbt__88', rpr result?.message
#   info 'Ωbbbt__89', rpr result?.originalMessage
#   info 'Ωbbbt__90', rpr result?.cause
#   ;null

#===========================================================================================================
demo_create_mount_folders_with_strange_names = ->
  { ref_path,
    db_path,
    assets_path,
    arena_path,
    mount_path, } = get_paths()
  # debug 'Ωbbbt__91', { assets_path, }
  # debug 'Ωbbbt__92', { arena_path, }
  # await ensure_empty_dir arena_path
  { mkdirp, } = require 'mkdirp'
  # debug 'Ωbbbt__93', mkdirp
  await mkdirp PATH.join arena_path, 'test'
  await mkdirp PATH.join arena_path, 'äöü'
  await mkdirp PATH.join arena_path, 'mou\nt'
  await mkdirp PATH.join arena_path, 'mou t'
  await mkdirp PATH.join arena_path, 'mou*t'
  await mkdirp PATH.join arena_path, 'mou?t'
  await mkdirp PATH.join arena_path, 'mou𬺱t'
  await mkdirp PATH.join arena_path, 'mou　t'
  await mkdirp PATH.join arena_path, 'mou t'
  await mkdirp PATH.join arena_path, 'mou t'
  await mkdirp PATH.join arena_path, 'mou‪t'
  await mkdirp PATH.join arena_path, 'mou‫t'
  await mkdirp PATH.join arena_path, 'mou‬t'
  await mkdirp PATH.join arena_path, 'mou‭t'
  await mkdirp PATH.join arena_path, 'mou‮t'
  await mkdirp PATH.join arena_path, 'a\x01z'
  await mkdirp PATH.join arena_path, 'a\\x01z'
  await mkdirp PATH.join arena_path, 'mou\tt'
# drwxrwxr-x     - flow 2025-11-12 10:05 -- - -    mou*nt
# drwxrwxr-x     - flow 2025-11-12 10:05 -- - -    mou?nt
# drwxrwxrwx     - root 2025-11-08 16:02 -- - -    mou\012t
# drwxrwxr-x     - flow 2025-11-12 10:05 -- - -    mou\nt
# drwxrwxr-x     - flow 2025-11-12 10:14 -- - -    mou\tt
# drwxrwxr-x     - flow 2025-11-12 10:26 -- - -    mou\u2029t
# drwxrwxr-x     - flow 2025-11-12 10:15 -- - -    mou\x01t
# drwxrwxr-x     - flow 2025-11-12 10:21 -- - -    mou\x7ft
# drwxrwxr-x     - flow 2025-11-12 10:23 -- - -    mou\x80t
# drwxrwxr-x     - flow 2025-11-07 09:25 -I - -    mount
# drwxrwxr-x     - flow 2025-11-09 11:50 -- - -    'mou t'

  ;null

#===========================================================================================================
if module is require.main then await do =>
  guytest_cfg = { throw_on_error: true,   show_passes: true, report_checks: true, }
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  # ( new Test guytest_cfg ).test { access_fs_with_db: @tasks.access_fs_with_db, }
  # ( new Test guytest_cfg ).test { scripts_YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY: @tasks.scripts_YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY, }
  # await ( new Test guytest_cfg ).async_test { async_shell: @tasks.async_shell, }
  await demo_create_mount_folders_with_strange_names()

