
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
  whisper }               = GUY.trm.get_loggers 'demo-execa'
{ rpr
  inspect
  echo
  reverse
  bold
  log     }               = GUY.trm
{ hide }                  = GUY.props
{ props: {
    nameit } }            = require '../../../apps/webguy'


#===========================================================================================================
require_cleartype = ->

  #=========================================================================================================
  class integer
    constructor: ( n = 0 ) -> parseInt n, 10

  #=========================================================================================================
  class quantity
    constructor: ( cfg ) ->
      return { q: 0, u: 'u', cfg..., }
    my_field_names: -> ( k for k of @ )

  ###

  1.  ```
      integer = type.$create { $name: 'integer', $isa: ( -> ), ..., }

      # usage:
      integer.$create 3.141
      ```

  2.  ```
      class Integer extends Type
        $isa:     ( x ) -> Number.isInteger x
        $create:  ( x ) -> parseInt x, 10
      integer = new Integer()

      # usage:
      integer.$create 3.141
      ```

  3.  ```
      class integer extends Type
        @$isa:    ( x ) -> Number.isInteger x
        @$create: ( x ) -> parseInt x, 10

      # usage:
      integer.$create 3.141
      ```

  ###
  #=========================================================================================================
  std = {}

  #=========================================================================================================
  return { std, integer, quantity, }


#===========================================================================================================
if module is require.main then await do =>
  { integer
    quantity
    std             } = require_cleartype()
  info 'Ω___1', std
  do =>
    echo()
    info 'Ω___2', integer
    info 'Ω___3', d = new integer 3.141
    info 'Ω___4', d.constructor is Object
    info 'Ω___5', d.constructor is integer
    info 'Ω___6', 7 + d
    info 'Ω___7', d + 7
  do =>
    echo()
    info 'Ω___8', quantity
    info 'Ω___9', d = new quantity { q: 7, u: 's', }
    info 'Ω__10', d.constructor is Object
    info 'Ω__11', d.constructor is quantity
    info 'Ω__12', d.q, d.u
    info 'Ω__13', { d..., }
    info 'Ω__14', d.my_field_names
    # info 'Ω__15', d.my_field_names()

