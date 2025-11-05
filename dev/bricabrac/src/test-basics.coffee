
###


## Applications

* **RegEx Builder** (example from [Rejigs blog post](https://medium.com/@omarzawahry/rejigs-making-regular-expressions-human-readable-1fad37cb3eae))

```java
var emailRegex =
    Rejigs.Create()
          .AtStart()
          .OneOrMore(r => r.AnyLetterOrDigit().Or().AnyOf("._%+-"))
          .Text("@")
          .OneOrMore(r => r.AnyLetterOrDigit().Or().AnyOf(".-"))
          .Text(".")
          .AnyLetterOrDigit().AtLeast(2)
          .AtEnd()
          .Build();
```

* **HTML/XML Builer**
* **SQL Builder**
* **CLI Coloring**
* syntax for a **Type Checker**

###

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
  whisper }               = GUY.trm.get_loggers 'bricabrac-sfmodules'
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





# #===========================================================================================================
# @tests =

#   #---------------------------------------------------------------------------------------------------------
#   using_dbrics_to_set_file_permissions: ->
#     SFMODULES                     = require '../../../apps/bricabrac-sfmodules'
#     UP                            = require 'unix-permissions'
#     PATH                          = require 'node:path'
#     # FS                            = require 'node:fs'
#     { Dbric,
#       Dbric_std,
#       internals,                } = SFMODULES.unstable.require_dbric()
#     #.......................................................................................................
#     ref_path = PATH.resolve __dirname, '../'
#     db_path = PATH.resolve __dirname, '../'
#     #.......................................................................................................
#     ;null







#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { tests, }
  # ( new Test guytest_cfg ).test { require_get_app_details: tests.require_get_app_details, }
  # ( new Test guytest_cfg ).test { require_loupe: tests.require_loupe, }

