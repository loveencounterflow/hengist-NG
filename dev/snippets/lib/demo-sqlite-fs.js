(function() {
  /*

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

*/


}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tc3FsaXRlLWZzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRUc7RUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuIyMjXG5cbjY1NzEgIGNhcmdvIGluc3RhbGwgc3FsaXRlLWZzXG4gNjU3OCAgbWtkaXIgL3RtcC9teWZzLW1vdW50IDsgLi90YXJnZXQvZGVidWcvc3FsaXRlLWZzIC90bXAvbXlmcy1tb3VudCAvdG1wL215ZnMuc3FsaXRlXG4gNjU3OSAgbWtkaXIgL3RtcC9teWZzLW1vdW50IDsgc3VkbyAuL3RhcmdldC9kZWJ1Zy9zcWxpdGUtZnMgL3RtcC9teWZzLW1vdW50IC90bXAvbXlmcy5zcWxpdGVcbiA2NTgyICBzdWRvIC4vdGFyZ2V0L2RlYnVnL3NxbGl0ZS1mcyAvdG1wL215ZnMtbW91bnQgL3RtcC9teWZzLnNxbGl0ZVxuIDY1OTAgIC4vdGFyZ2V0L2RlYnVnL3NxbGl0ZS1mcyAvdG1wL215ZnMtbW91bnQgL3RtcC9teWZzLnNxbGl0ZSAmXG4gNjYxMSAgLi90YXJnZXQvcmVsZWFzZS9zcWxpdGUtZnMgL3RtcC9teWZzLW1vdW50IC90bXAvbXlmcy5zcWxpdGUgJlxuIDY2MTggIC4vdGFyZ2V0L3JlbGVhc2Uvc3FsaXRlLWZzIC90bXAvbXlmcy1tb3VudCAvdG1wL215ZnMuc3FsaXRlXG4gNjYzMCAgLi90YXJnZXQvZGVidWcvc3FsaXRlLWZzIC90bXAvbXlmcy1tb3VudCAvdG1wL215ZnMuc3FsaXRlXG5cbiA2NTcxICBjYXJnbyBpbnN0YWxsIHNxbGl0ZS1mc1xuIDY1NzIgIGNhcmdvIGluc3RhbGwgc3FsaXRlZnNcbiA2NTczICBnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL25hcnVtYXR0L3NxbGl0ZWZzIH4vM3JkLXBhcnR5LXJlcG9zL3NxbGl0ZWZzXG4gNjU3NCAgY2Qgfi8zcmQtcGFydHktcmVwb3Mvc3FsaXRlZnNcbiA2NTc1ICBjYXJnbyBpbnN0YWxsIC5cbiA2NTc2ICBoaXN0b3J5IHwgZ3JlcCAtLWNvbG9yPWFsd2F5cyAtUGkgJ2Z1c2UnIHwgbGVzcyAtU1JOIzVcbiA2NTc3ICBzdWRvIGFwdCBpbnN0YWxsIC15IGxpYmZ1c2UtZGV2XG4gNjU3OCAgbWtkaXIgL3RtcC9teWZzLW1vdW50IDsgLi90YXJnZXQvZGVidWcvc3FsaXRlLWZzIC90bXAvbXlmcy1tb3VudCAvdG1wL215ZnMuc3FsaXRlXG4gNjU3OSAgbWtkaXIgL3RtcC9teWZzLW1vdW50IDsgc3VkbyAuL3RhcmdldC9kZWJ1Zy9zcWxpdGUtZnMgL3RtcC9teWZzLW1vdW50IC90bXAvbXlmcy5zcWxpdGVcbiA2NTgwICBsIC90bXAvbXlmcy1tb3VudFxuIDY1ODEgIG1rZGlyIC90bXAvbXlmcy1tb3VudFxuIDY1ODIgIHN1ZG8gLi90YXJnZXQvZGVidWcvc3FsaXRlLWZzIC90bXAvbXlmcy1tb3VudCAvdG1wL215ZnMuc3FsaXRlXG4gNjU4MyAgZWNobyBcImhlbG9cIiA+IC90bXAvaGVsby50eHRcbiA2NTg0ICBta2NkIC90bXAvbXlmcy1tb3VudFxuIDY1ODUgIHRvdWNoIGhlbG8udHh0XG4gNjU4NiAgc3VkbyB0b3VjaCBoZWxvLnR4dFxuIDY1ODcgIHNxbGl0ZTNwc3BnIC90bXAvbXlmcy5zcWxpdGVcbiA2NTg4ICBsIC90bXAvXG4gNjU4OSAgc3VkbyB1bW91bnQgL3RtcC9teWZzLW1vdW50XG4gNjU5MCAgLi90YXJnZXQvZGVidWcvc3FsaXRlLWZzIC90bXAvbXlmcy1tb3VudCAvdG1wL215ZnMuc3FsaXRlICZcbiA2NTkxICBjYXQgL3RtcC9teWZzLW1vdW50L2hlbG8udHh0XG4gNjU5MiAgc3FsaXRlM3BzcGcgL3RtcC9teWZzLnNxbGl0ZSBcInNlbGVjdCAqIGZyb20gc3FsaXRlX3NjaGVtYTtcIlxuIDY1OTMgIG1rZGlyIC90bXAvbXlmcy1tb3VudC9zdWJkaXJcbiA2NTk0ICBzcWxpdGUzcHNwZyAvdG1wL215ZnMuc3FsaXRlIFwic2VsZWN0IG5hbWUgZnJvbSBzcWxpdGVfc2NoZW1hIHdoZXJlIHR5cGUgPSAndGFibGUnO1wiXG4gNjU5NSAgc3FsaXRlM3BzcGcgL3RtcC9teWZzLnNxbGl0ZSBcInNlbGVjdCAqIGZyb20geGF0dHI7XCJcbiA2NTk2ICBta2RpciAvdG1wL215ZnMtbW91bnQvc3ViZGlyL3N1YjJcbiA2NTk3ICBjcCBkYXRhL3Nob3J0LXByb21wdHMubWQgL3RtcC9teWZzLW1vdW50L3N1YmRpclxuIDY1OTggIGNwIFJFQURNRS5tZCAvdG1wL215ZnMtbW91bnQvc3ViZGlyXG4gNjU5OSAgc3FsaXRlM3BzcGcgL3RtcC9teWZzLnNxbGl0ZSBcInNlbGVjdCAqIGZyb20gZGF0YTtcIlxuIDY2MDAgIGNhdCAvdG1wL215ZnMtbW91bnQvc3ViZGlyL1JFQURNRS5tZFxuIDY2MDEgIGNhdCAvdG1wL215ZnMtbW91bnQvc3ViZGlyL21haW4uY29mZmVlXG4gNjYwMiAgY2F0IC90bXAvbXlmcy1tb3VudC9zdWJkaXIvbWFpbi5jb2ZmZWUgfCBzb3J0XG4gNjYwMyAgY2F0IC90bXAvbXlmcy1tb3VudC9zdWJkaXIvbWFpbi5jb2ZmZWUgfCBzb3J0IHwgbGVzcyAtU1JOXG4gNjYwNCAgbXYgfi8zcmQtcGFydHktcmVwb3Mvc3FsaXRlZnMgfi8zcmQtcGFydHktcmVwb3MvbmFydW1hdHQtc3FsaXRlZnNcbiA2NjA1ICBnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL2xvdmVlbmNvdW50ZXJmbG93L3NxbGl0ZWZzIH4vanpyL3NxbGl0ZWZzXG4gNjYwNiAgY2Qgfi9qenIvc3FsaXRlZnNcbiA2NjA3ICBmaW5kLWFueXdoZXJlIC0tZ2xvYj0nKi5jb2ZmZWUnIC0tZ2xvYj0nKi5tZCcgLVBpICdcXGIoZGF0YSlcXGInIH4vanpyL3NxbGl0ZWZzXG4gNjYwOCAgZmluZC1hbnl3aGVyZSAtLWdsb2I9JyouY29mZmVlJyAtLWdsb2I9JyoubWQnIC1QaSAnXFxiKG1ldGFkYXRhKVxcYicgfi9qenIvc3FsaXRlZnMvc3JjXG4gNjYwOSAgZmluZC1hbnl3aGVyZSAtLWdsb2I9JyouY29mZmVlJyAtLWdsb2I9JyoubWQnIC1QaSAnXFxiKG1ldGFkYXRhKVxcYicgfi9qenIvc3FsaXRlZnNcbiA2NjEwICBmaW5kLWFueXdoZXJlIC1QaSAnXFxiKGluaXQpXFxiJyB+L2p6ci9zcWxpdGVmc1xuIDY2MTEgIC4vdGFyZ2V0L3JlbGVhc2Uvc3FsaXRlLWZzIC90bXAvbXlmcy1tb3VudCAvdG1wL215ZnMuc3FsaXRlICZcbiA2NjEyICB0aW1lIGNhcmdvIGJ1aWxkIC0tcmVsZWFzZVxuIDY2MTMgIHRyYXNoIGluaXQuc3FsXG4gNjYxNCAgY2FyZ28gYnVpbGQgLS1yZWxlYXNlXG4gNjYxNSAgbGVzcyAtU1JOIzUgL3RtcC9teWZzLW1vdW50L3N1YmRpci9SRUFETUUubWRcbiA2NjE2ICBzcWxpdGUzcHNwZyAvdG1wL215ZnMuc3FsaXRlIFwic2VsZWN0ICogZnJvbSBkZW50cnk7XCJcbiA2NjE3ICBzcWxpdGUzcHNwZyAvdG1wL215ZnMuc3FsaXRlIFwic2VsZWN0ICogZnJvbSBtZXRhZGF0YTtcIlxuIDY2MTggIC4vdGFyZ2V0L3JlbGVhc2Uvc3FsaXRlLWZzIC90bXAvbXlmcy1tb3VudCAvdG1wL215ZnMuc3FsaXRlXG4gNjYxOSAgZWNobyBcImhlbG9cIiA+IC90bXAvbXlmcy1tb3VudC9oZWxvLnR4dFxuIDY2MjAgIGZpbmQtYW55d2hlcmUgLVBpICdcXGIobWV0YWRhdGEpXFxiJyB+L2p6ci9zcWxpdGVmc1xuIDY2MjEgIGwgdGFyZ2V0L3JlbGVhc2UvXG4gNjYyMiAgdHJhc2ggdGFyZ2V0XG4gNjYyMyAgdHJhc2ggL3RtcC9teWZzLnNxbGl0ZVxuIDY2MjQgIHNxbGl0ZTNwc3BnIC90bXAvbXlmcy5zcWxpdGUgXCJzZWxlY3QgKiBmcm9tIHNxbGl0ZWZzX21ldGFkYXRhO1wiXG4gNjYyNSAgdHJhc2ggL3RtcC9teWZzLnNxbGl0ZSA7IHRyYXNoIHRhcmdldFxuIDY2MjYgIGNhcmdvIGJ1aWxkXG4gNjYyNyAgZWNobyBcImhlbG9cIiA+PiAvdG1wL215ZnMtbW91bnQvaGVsby50eHRcbiA2NjI4ICBzcWxpdGUzcHNwZyAvdG1wL215ZnMuc3FsaXRlIFwic2VsZWN0ICogZnJvbSBzcWxpdGVfc2NoZW1hIHdoZXJlIHR5cGUgPSAndGFibGUnO1wiXG4gNjYyOSAgdW1vdW50IC90bXAvbXlmcy1tb3VudFxuXG4jIyNcblxuIl19
//# sourceURL=../src/demo-sqlite-fs.coffee