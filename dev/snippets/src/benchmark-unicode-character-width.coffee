
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
  whisper }               = GUY.trm.get_loggers 'benchmark-unicode-character-width.coffee'
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
SFMODULES                 = require '../../../apps/bricabrac-single-file-modules'




###

From [`chalk/strip-ansi`](https://github.com/chalk/strip-ansi) `README.md`:

> > [!NOTE]
> >
> > Node.js has this built-in now with
> > [`stripVTControlCharacters`](https://nodejs.org/api/util.html#utilstripvtcontrolcharactersstr). The
> > benefit of this package is consistent behavior across Node.js versions and faster improvements. The
> > Node.js version is actually based on this package.

console.log(util.stripVTControlCharacters('\u001B[4mvalue\u001B[0m'))

Notes:

  * [**`sindresorhus/string-width`**](https://github.com/sindresorhus/string-width) by Sindre Sorhus;
    dependencies include [`mathiasbynens/emoji-regex`](https://github.com/mathiasbynens/emoji-regex) (which
    could be replaced with a smaller library with the same API
    [`slevithan/emoji-regex-xs`](https://github.com/slevithan/emoji-regex-xs)); note the number of
    well-known, trusted authors here that more often than not deliver high-quality software.

    Dependencies:
      * [`mathiasbynens/emoji-regex`](https://github.com/mathiasbynens/emoji-regex)
      * [`komagata/get-east-asian-width`](https://github.com/komagata/eastasianwidth)
      * [`chalk/strip-ansi`](https://github.com/chalk/strip-ansi)
        * [`chalk/ansi-regex`](https://github.com/chalk/ansi-regex)

  * [**`martinheidegger/wcstring`**](https://github.com/martinheidegger/wcstring): does a lot of string
    manipulation stuff that we don't need or plan to implement in a similar but different way; uses `wcsize`
    so presumably also inherits its problems(?)

Excluded:

  * [**`martinheidegger/wcsize`**](https://github.com/martinheidegger/wcsize): not very well usable in
    modern environments as `wcsize`, according to the docs, "differ[...]s from both [`wcwidth` and
    `visualwidth-js`] by only returning the width of one character (as integer!)", meaning that it cannot,
    by construction, handle composed Latin accented letters, or let alone multi-codepoint emoji. It also
    struggles with Unicode surrogate handling, at least in trying to make sense of them in the `README.md`.

  * [**`tokuhirom/visualwidth-js`**](https://github.com/tokuhirom/visualwidth-js): too old, started ca.
    2011, last commit from ca. 2015

###

#===========================================================================================================
@benchmarks = benchmarks =

  #---------------------------------------------------------------------------------------------------------
  require_ansi_chunker: ->
    # { ansi_colors_and_effects: C, } = SFMODULES.require_ansi_colors_and_effects()
    # { Ansi_chunker,               } = SFMODULES.require_ansi_chunker()
    #.......................................................................................................
    do =>
      debug 'Ωbmwc___1', require 'wcwidth.js' ### https://github.com/mycoboco/wcwidth.js ###
      debug 'Ωbmwc___2', require 'wcstring' ### https://github.com/martinheidegger/wcstring ###
      return null
    #.......................................................................................................
    return null



#===========================================================================================================
if module is require.main then await do =>
  # demo_infinite_proxy()
  # demo_colorful_proxy()
  guytest_cfg = { throw_on_error: false,  show_passes: false, report_checks: false, }
  guytest_cfg = { throw_on_error: true,   show_passes: false, report_checks: false, }
  ( new Test guytest_cfg ).test { benchmarks, }
