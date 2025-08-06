


###

6571  cargo install sqlite-fs
 6578  mkdir /tmp/myfs-mount ; ./target/debug/sqlite-fs /tmp/myfs-mount /tmp/myfs.sqlite
 6579  mkdir /tmp/myfs-mount ; sudo ./target/debug/sqlite-fs /tmp/myfs-mount /tmp/myfs.sqlite
 6582  sudo ./target/debug/sqlite-fs /tmp/myfs-mount /tmp/myfs.sqlite
 6590  ./target/debug/sqlite-fs /tmp/myfs-mount /tmp/myfs.sqlite &
 6611  ./target/release/sqlite-fs /tmp/myfs-mount /tmp/myfs.sqlite &
 6618  ./target/release/sqlite-fs /tmp/myfs-mount /tmp/myfs.sqlite
 6630  ./target/debug/sqlite-fs /tmp/myfs-mount /tmp/myfs.sqlite

 6571  cargo install sqlite-fs
 6572  cargo install sqlitefs
 6573  git clone https://github.com/narumatt/sqlitefs ~/3rd-party-repos/sqlitefs
 6574  cd ~/3rd-party-repos/sqlitefs
 6575  cargo install .
 6576  history | grep --color=always -Pi 'fuse' | less -SRN#5
 6577  sudo apt install -y libfuse-dev
 6578  mkdir /tmp/myfs-mount ; ./target/debug/sqlite-fs /tmp/myfs-mount /tmp/myfs.sqlite
 6579  mkdir /tmp/myfs-mount ; sudo ./target/debug/sqlite-fs /tmp/myfs-mount /tmp/myfs.sqlite
 6580  l /tmp/myfs-mount
 6581  mkdir /tmp/myfs-mount
 6582  sudo ./target/debug/sqlite-fs /tmp/myfs-mount /tmp/myfs.sqlite
 6583  echo "helo" > /tmp/helo.txt
 6584  mkcd /tmp/myfs-mount
 6585  touch helo.txt
 6586  sudo touch helo.txt
 6587  sqlite3pspg /tmp/myfs.sqlite
 6588  l /tmp/
 6589  sudo umount /tmp/myfs-mount
 6590  ./target/debug/sqlite-fs /tmp/myfs-mount /tmp/myfs.sqlite &
 6591  cat /tmp/myfs-mount/helo.txt
 6592  sqlite3pspg /tmp/myfs.sqlite "select * from sqlite_schema;"
 6593  mkdir /tmp/myfs-mount/subdir
 6594  sqlite3pspg /tmp/myfs.sqlite "select name from sqlite_schema where type = 'table';"
 6595  sqlite3pspg /tmp/myfs.sqlite "select * from xattr;"
 6596  mkdir /tmp/myfs-mount/subdir/sub2
 6597  cp data/short-prompts.md /tmp/myfs-mount/subdir
 6598  cp README.md /tmp/myfs-mount/subdir
 6599  sqlite3pspg /tmp/myfs.sqlite "select * from data;"
 6600  cat /tmp/myfs-mount/subdir/README.md
 6601  cat /tmp/myfs-mount/subdir/main.coffee
 6602  cat /tmp/myfs-mount/subdir/main.coffee | sort
 6603  cat /tmp/myfs-mount/subdir/main.coffee | sort | less -SRN
 6604  mv ~/3rd-party-repos/sqlitefs ~/3rd-party-repos/narumatt-sqlitefs
 6605  git clone https://github.com/loveencounterflow/sqlitefs ~/jzr/sqlitefs
 6606  cd ~/jzr/sqlitefs
 6607  find-anywhere --glob='*.coffee' --glob='*.md' -Pi '\b(data)\b' ~/jzr/sqlitefs
 6608  find-anywhere --glob='*.coffee' --glob='*.md' -Pi '\b(metadata)\b' ~/jzr/sqlitefs/src
 6609  find-anywhere --glob='*.coffee' --glob='*.md' -Pi '\b(metadata)\b' ~/jzr/sqlitefs
 6610  find-anywhere -Pi '\b(init)\b' ~/jzr/sqlitefs
 6611  ./target/release/sqlite-fs /tmp/myfs-mount /tmp/myfs.sqlite &
 6612  time cargo build --release
 6613  trash init.sql
 6614  cargo build --release
 6615  less -SRN#5 /tmp/myfs-mount/subdir/README.md
 6616  sqlite3pspg /tmp/myfs.sqlite "select * from dentry;"
 6617  sqlite3pspg /tmp/myfs.sqlite "select * from metadata;"
 6618  ./target/release/sqlite-fs /tmp/myfs-mount /tmp/myfs.sqlite
 6619  echo "helo" > /tmp/myfs-mount/helo.txt
 6620  find-anywhere -Pi '\b(metadata)\b' ~/jzr/sqlitefs
 6621  l target/release/
 6622  trash target
 6623  trash /tmp/myfs.sqlite
 6624  sqlite3pspg /tmp/myfs.sqlite "select * from sqlitefs_metadata;"
 6625  trash /tmp/myfs.sqlite ; trash target
 6626  cargo build
 6627  echo "helo" >> /tmp/myfs-mount/helo.txt
 6628  sqlite3pspg /tmp/myfs.sqlite "select * from sqlite_schema where type = 'table';"
 6629  umount /tmp/myfs-mount

###

