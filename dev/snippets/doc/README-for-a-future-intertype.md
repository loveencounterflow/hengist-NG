
* **Intertype Types**
  * are instances of class `Type`
  * **ISA method**:
    * When testing a value with, say, `types.isa std.integer, x`, `types.isa()` will internally call
      `std.integer.isa()`, where
      * `types` is a `Types` instance,
      * `std` is a `Typespace`,
      * `integer` is a `Type` declared in that typespace, and
      * `integer.isa()` is the type's ISA method.
    * An ISA method is a synchronous function `( x: any, t: Types ): boolean ->` that accepts two values:
      `x`, the value to be tested, and `t`, the `Types` instance used for testing.
    * Valid ISA methods must only return either `true` or `false` and must never throw an exception.
    * When used via `Types::isa()`, ISA methods will be called in the context of their respective typespace
      which means that inside an ISA method `@`&nbsp;/&nbsp;`this` can be used to refer to other types
      accessible from that typespace

* **Type declarations**: one of
  * an ISA method
  * the name of another type in the same or a parent typespace
  * an `Type` instance (from any typespace)
  * an `intertype_declaration_cfg` object

* fields of `intertype_declaration_cfg` objects:
  * `isa`: (optional) `intertype_declaration`; when `isa` is present, `fields` must not be set
  * `fields`: (optional) `object`; when `fields` is present, `isa` must not be set
  * `template`: (optional) `object`:
    * If `create()` is set, it may use the properties of the `template` object to create a new value of the
      respective type.
    * If `create()` is generated, the properties of `template` will be used as keys and values to initialize
      on a new object. No effort will be made to generate new property values from the property values of
      `template`, so if a value is not a JS primitive but for instance a list `[]`, then *that same `Array`
      object will be shared by all values created by the `create()` method of that type, **except** when the
      property is a function, in which case its return value will be used*. Therefore, the common way to
      have an (always new) empty list as default value for a field `foo`, declare `{ template: { foo: -> []
      }, }`. This is also the right way to make a function a field's default value.
  * `create`: (optional) `( P..., t ) ->`

## Declaring `Typespace`s


# InterType

## API

* `Types::isa: ( t: type, x: any ) ->`

* `Types::create: ( t: type, x: any ) ->`

* `Types::validate: ( t: type, x: any ) ->`: synchronous, (almost) pure function that looks up
  the declaration of type `t`, and calls it with `x` as only argument; returns `true` if `x` is considered
  to be a value of type `t` and `false` otherwise; testing functions are forbidden to return anything else
  (no 'truthy' or 'falsey' values); they are allowed to be impure to the degree that they may leave data
  entries (hints or results) in `Types::memo`, a `Map`-like object

  * The motivation for this piece of memoization is expressed by the slogan ['parse, don't
    validate'](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/): for example, in a given
    type system, some strings (e.g. `4.5km` or `4e23s`) may look like literals of a number plus a unit and
    thus fulfill the requirements of a type `quantityliteral`; testing for the right format is probably best
    done with one or two regular expressions, possibly followed by a check whether the unit name is already
    entered in some registry. It would be a shame if a call to `isa 'quantityliteral', x` had to
    re-implement all the work that is expected of `parse 'quantityliteral', x`, or if the latter had to
    repeat all the lifting done by the former



## To Do

* **`[—]`** use API call rather than property access to retrieve memoized data
  * <del>**`[—]`** using `WeakMap` sounds right, but as so often, the use case leans heavily on primitive
    values (esp. strings), so using a `Map` promises to be much simpler</del>
  * <del>**`[—]`** if the need should arise, can later use a custom class to replace the plain `Map` to
    limit the number of cached values (this will likely involve storing a redundant list of keys so
    order-of-insertion can be traced w/o the need to compute and inspect `Map::keys()`—that would be OK if
    we were to drop the first entry but involves more work to find the most recent entry)</del>
  * <del>**`[—]`** with API call, might want to have to pass in `x`, test for identity in caching map; thus
    more than a single entry may be cached and repetitions that are far apart can still be served</del>
  * <del>**`[—]`** toggle to switch off caching altogether (on instantiation)?</del>
  * <del>**`[—]`** API call to clear caches?</del>
  * <del>**`[—]`** would be nice to have caching switch as declarative class property like type
    declarations</del>
  * <del>**`[—]`** should refuse to cache results of testing against mutable values</del>
  * **`[—]`** on closer inspection, caching acc. to the above turns out to be a snakes' nest, therefore: use
    API to cache explicitly in ordinary or custom (for size restriction) `Map` instance—the user is
    responsible for ensuring that cached entries stay relevant
  * **`[—]`** API is just API of `Map`:
    * `Types::memo.set: ( k, v ) ->`
    * `Types::memo.get: ( k ) ->`
    * `Types::memo.delete: ( k ) ->`
    * `Types::memo.has: ( k ) ->`
    * and so on, can always customize with bespoke class when deemed necessary; by setting
      `Types::memo = new Map()`, we already have a well-known, yet sub-classable API for free
  * **`[—]`** should make configurable whether values stored in `Types::memo` are the results of
    `parse` that should be
    * **`[—]`** **set** automatically whenever `parse()` returns a result
    * **`[—]`** **retrieved** automatically whenever `isa()`, `validate()` or `parse()` is called
    * important to separate the two concerns so users can automatically benefit from cached parsing and
      still decide whether to memoize a given result of `parse x` or not

* **`[—]`** would it be better to favor `list.empty` to express that empty lists are a subset of all lists?
  * **`[—]`** or favor `list_empty` to simplify parsing (e.g. in `[ 'nonempty_list', 'of', 'integer', ]` or
    `[ 'list_nonempty', 'of', 'integer', ]`, typenames then would occupy constant positions `0` and `2` with
    `of` in position `1`)
  * other relevant typenames include `integer_positive`, `text_blank`, `text_blank_ascii`, `text_nonempty`,
    `fraction_proper`

* **`[—]`** does it make sense to use formal prefixes to two `Intertype` instances?
  * that could look like `Types::isa 'foo.quantity', x` where `foo` is a namespace for type names;
    for simplicity's sake, only allow (or demand? as in `Types::isa 'std.integer', x`) single
    prefix
  * Maybe simpler and better to just say `types = { foo: ( new Foo_types() ), bar: ( new Bar_types() ), };
    types.foo.validate 'quux', x`, not clear where merging an advantage *except* where repetition of base
    types (`integer` in `types.foo` being identical to `integer` in `types.bar`) and their redundant
    prefixes is to be avoided

* **`[—]`** the fancy API should merge type specifiers and method names (or should it?), as in
  `Types::isa 'std.integer', x` becoming `Intertype_fancy::isa.std.integer x`

* **`[—]`** how to express concatenation in a generic way as in `list of ( nonempty list of integer )`?
  * **`[—]`** one idea is to restrict usage to declared, named types, i.e. one can never call
    \*`Types::isa 'list.of.integer', x` (using whatever syntax we settle on), one can only
    declare (and thereby name) a type (say, `intlist`) that is a `list.of.integer` and then call
    `Types::isa 'intlist', x`

* **`[—]`** how to express multiple refinements as in `blank nonempty text` or `positive1 even integer`?

* **`[—]`** how to express sum types as in `integer or integerliteral`?

---------------------------------------------------------

```coffee
declarations:
  integer:
    test: ( x ) -> Number.isInteger x # or `Number.isSafeInteger()`
    refinements:
      positive0:  ( x ) -> x >= +0
      positive1:  ( x ) -> x >= +1
      negative0:  ( x ) -> x <=  0
      negative1:  ( x ) -> x <= -1
      odd:        ( x ) -> x %% 2 isnt  0
      even:       ( x ) -> x %% 2 is    0
  list:
    test: ( x ) -> Array.isArray x
    refinements:
      empty:      ( x ) -> x.length is  0
      nonempty:   ( x ) -> x.length >   0
    containment:
      contains:   ( x, y ) -> y in x

  map:
    test: ( x ) -> x instanceof Map
    refinements:
      empty:      ( x ) -> x.size is  0
      nonempty:   ( x ) -> x.size >   0
    containment:
      all:        ( x, f ) -> x.entries().every  ( e ) -> f e
      any:        ( x, f ) -> x.entries().some   ( e ) -> f e
      allkeys:    ( x, f ) -> x.keys().every     ( e ) -> f e
      anykeys:    ( x, f ) -> x.keys().some      ( e ) -> f e
      allvalues:  ( x, f ) -> x.values().every   ( e ) -> f e
      anyvalues:  ( x, f ) -> x.values().some    ( e ) -> f e
      contains:   ( x, y ) -> x.values().some    ( e ) -> e is y

  quantity.q:     'float'
  quantity.u:     'text_nonempty'
```