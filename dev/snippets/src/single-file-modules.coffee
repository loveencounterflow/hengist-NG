
############################################################################################################
#
#===========================================================================================================
module.exports = SFMODULES =

  #===========================================================================================================
  ### NOTE Future Single-File Module ###
  require_list_tools: ->
    append    = ( list, P... ) -> list.splice list.length, 0, P...
    is_empty  = ( list ) -> list.length is 0
    return { append, is_empty, }

  #===========================================================================================================
  ### NOTE Future Single-File Module ###
  require_escape_html_text: ->
    escape_html_text = ( text ) ->
      R = text
      R = R.replace /&/g, '&amp;'
      R = R.replace /</g, '&lt;'
      R = R.replace />/g, '&gt;'
      return R
    return { escape_html_text, }

  #===========================================================================================================
  ### NOTE Future Single-File Module ###
  require_tagfun_tools: ->

    ### Given the arguments of either a tagged template function call ('tagfun call') or the single
    argument of a conventional function call, `get_first_argument()` will return either

    * the result of applying `as_text()` to the sole argument, or

    * the result of concatenating the constant parts and the interpolated expressions, which each
    expression replaced by the result of applying `as_text()` to it.

    Another way to describe this behavior is to say that this function treats a conventional call with
    a single expression the same way that it treats a funtag call with a string that contains nothing but
    that same expression, so the invariant `( get_first_argument exp ) == ( get_first_argument"#{ exp }"
    )` holds.

    * intended for string producers, text processing, markup production;
    * list some examples. ###

    #---------------------------------------------------------------------------------------------------------
    create_get_first_argument_fn = ( as_text = null ) ->
      as_text ?= ( expression ) -> "#{expression}"
      ### TAINT use proper validation ###
      unless ( typeof as_text ) is 'function'
        throw new Error "Ωidsp___2 expected a function, got #{rpr as_text}"
      #-------------------------------------------------------------------------------------------------------
      get_first_argument = ( P... ) ->
        unless is_tagfun_call P...
          unless P.length is 1
            throw new Error "Ωidsp___3 expected 1 argument, got #{P.length}"
          return as_text P[ 0 ]
        #.....................................................................................................
        [ parts, expressions..., ] = P
        R = parts[ 0 ]
        for expression, idx in expressions
          R += ( as_text expression ) + parts[ idx + 1 ]
        return R
      #-------------------------------------------------------------------------------------------------------
      get_first_argument.create = create_get_first_argument_fn
      return get_first_argument

    #---------------------------------------------------------------------------------------------------------
    is_tagfun_call = ( P... ) ->
      return false unless Array.isArray   P[ 0 ]
      return false unless Object.isFrozen P[ 0 ]
      return false unless P[ 0 ].raw?
      return true

    #---------------------------------------------------------------------------------------------------------
    return { get_first_argument: create_get_first_argument_fn(), is_tagfun_call, }

  #===========================================================================================================
  ### NOTE Future Single-File Module ###
  require_managed_property_tools: ->
    set_getter = ( object, name, get ) -> Object.defineProperties object, { [name]: { get, }, }
    hide = ( object, name, value ) => Object.defineProperty object, name,
        enumerable:   false
        writable:     true
        configurable: true
        value:        value

    #---------------------------------------------------------------------------------------------------------
    return { set_getter, hide, }

  #===========================================================================================================
  ### NOTE Future Single-File Module ###
  require_nameit: ->
    nameit = ( name, fn ) -> Object.defineProperty fn, 'name', { value: name, }; fn
    #---------------------------------------------------------------------------------------------------------
    return { nameit, }

  #===========================================================================================================
  ### NOTE Future Single-File Module ###
  require_stack_classes: ->
    { set_getter,
      hide,       } = SFMODULES.require_managed_property_tools()
    misfit          = Symbol 'misfit'
    class XXX_Stack_error extends Error

    #===========================================================================================================
    class Stack

      #---------------------------------------------------------------------------------------------------------
      constructor: ->
        @data = []
        return undefined

      #---------------------------------------------------------------------------------------------------------
      toString: -> "[#{ ( "#{e}" for e in @data ).join'.' }]"

      #---------------------------------------------------------------------------------------------------------
      set_getter @::, 'length',   -> @data.length
      set_getter @::, 'is_empty', -> @data.length is 0
      clear: -> @data.length = 0; null
      [Symbol.iterator]: -> yield from @data

      #---------------------------------------------------------------------------------------------------------
      push:     ( x ) -> @data.push x;    null
      unshift:  ( x ) -> @data.unshift x; null

      #---------------------------------------------------------------------------------------------------------
      pop: ( fallback = misfit ) ->
        if @is_empty
          return fallback unless fallback is misfit
          throw new XXX_Stack_error "Ωidsp___4 unable to pop value from empty stack"
        return @data.pop()

      #---------------------------------------------------------------------------------------------------------
      shift: ( fallback = misfit ) ->
        if @is_empty
          return fallback unless fallback is misfit
          throw new XXX_Stack_error "Ωidsp___5 unable to shift value from empty stack"
        return @data.shift()

      #---------------------------------------------------------------------------------------------------------
      peek: ( fallback = misfit ) ->
        if @is_empty
          return fallback unless fallback is misfit
          throw new XXX_Stack_error "Ωidsp___6 unable to peek value of empty stack"
        return @data.at -1

    #===========================================================================================================
    class Doublestack

      #---------------------------------------------------------------------------------------------------------
      constructor: ->
        @data = []
        return undefined

      #---------------------------------------------------------------------------------------------------------
      toString: -> if @length is 0 then "{ DS[] }" else "{ DS[ #{ @length-1} ] = #{@peek_stack '[]'} }"

      #---------------------------------------------------------------------------------------------------------
      set_getter @::, 'length',   -> @data.length
      set_getter @::, 'is_empty', -> @data.length is 0
      clear: -> @data.length = 0; null
      ### TAINT might want to iterate over topmost stack in @data ###
      [Symbol.iterator]: -> yield from @data

      #---------------------------------------------------------------------------------------------------------
      push_new_stack: -> @data.push ( new Stack() ); @peek_stack()
      # unshift_new_stack:  -> @data.unshift []; null

      #---------------------------------------------------------------------------------------------------------
      pop_old_stack: ( fallback = misfit ) ->
        if @is_empty
          return fallback unless fallback is misfit
          throw new XXX_Stack_error "Ωidsp___7 unable to peek value of empty stack"
        return @data.pop()

      # #---------------------------------------------------------------------------------------------------------
      # shift_old_stack:  ( fallback = misfit ) ->
      #   if @is_empty
      #     return fallback unless fallback is misfit
      #     throw new XXX_Stack_error "Ωidsp___8 unable to peek value of empty stack"
      #   return @data.shift()

      #---------------------------------------------------------------------------------------------------------
      peek_stack: ( fallback = misfit ) ->
        if @is_empty
          return fallback unless fallback is misfit
          throw new XXX_Stack_error "Ωidsp___9 unable to peek value of empty stack"
        return @data.at -1

    #-----------------------------------------------------------------------------------------------------------
    return { Stack, Doublestack, }

  #===========================================================================================================
  ### NOTE Future Single-File Module ###
  require_doublestack_infiniproxy: ->
    { Stack,
      Doublestack,  } = SFMODULES.require_stack_classes()
    #...........................................................................................................
    dsip_cfg_template =
      base:                     null
      is_initial:               true
      # empty_stack_on_new_chain: true
    #-----------------------------------------------------------------------------------------------------------
    create_doublestack_infiniproxy = ( base ) ->
      doublestack = new Doublestack()
      get_proxy   = Symbol 'get_proxy'
      #.........................................................................................................
      extendended_base = ( P... ) ->
        R = base P...
        doublestack.pop_old_stack() unless doublestack.is_empty
        return R
      #---------------------------------------------------------------------------------------------------------
      new_doublestack_infiniproxy = ( cfg ) ->
        cfg = { dsip_cfg_template..., cfg..., }
        # cfg.is_initial = false unless cfg.empty_stack_on_new_chain
        #.......................................................................................................
        proxy = new Proxy extendended_base,
          get: ( target, key ) ->
            return new_doublestack_infiniproxy { base, is_initial: false, } if key is get_proxy
            return target[ key ]                                            if ( typeof key ) is 'symbol'
            return target[ key ]                                            if Reflect.has target, key
            doublestack.push_new_stack()                                    if cfg.is_initial
            doublestack.peek_stack().push key
            return R
        if cfg.is_initial then  R = new_doublestack_infiniproxy { base, is_initial: false, }
        else                    R = proxy
        return proxy
      #.........................................................................................................
      return do ( proxy = new_doublestack_infiniproxy base ) => { proxy, doublestack, }

    #-----------------------------------------------------------------------------------------------------------
    return { create_doublestack_infiniproxy, }
