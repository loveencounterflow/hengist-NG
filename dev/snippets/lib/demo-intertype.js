(async function() {
  'use strict';
  var GUY, Ltsort, WEBGUY, alert, bold, debug, echo, help, hide, info, inspect, log, misfit, nameit, plain, praise, require_intertype, reverse, rpr, urge, warn, whisper,
    splice = [].splice,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, bold, log} = GUY.trm);

  WEBGUY = require('../../../apps/webguy');

  ({hide} = GUY.props);

  ({nameit} = WEBGUY.props);

  ({Ltsort} = require('../../../apps/ltsort'));

  misfit = Symbol('misfit');

  //###########################################################################################################
  require_intertype = function() {
    var $isa, Type, Types, Typespace, find_owner, std;
    //===========================================================================================================
    $isa = {
      text: function(x) {
        return typeof x === 'string';
      },
      function: function(x) {
        return (Object.prototype.toString.call(x)) === '[object Function]';
      }
    };
    //===========================================================================================================
    find_owner = function(owners, name, fallback = misfit) {
      var i, len, owner;
      for (i = 0, len = owners.length; i < len; i++) {
        owner = owners[i];
        if (Reflect.has(owner, name)) {
          return owner;
        }
      }
      if (fallback !== misfit) {
        return fallback;
      }
      throw new Error(`Ω___1 unable to find owner of ${rpr(name)}`);
    };
    //===========================================================================================================
    Types = class Types {
      //---------------------------------------------------------------------------------------------------------
      constructor(cfg) {
        // @_types = new Map()
        hide(this, 'isa', this.isa.bind(this));
        hide(this, 'validate', this.validate.bind(this));
        hide(this, 'create', this.create.bind(this));
        hide(this, 'type_of', this.type_of.bind(this));
        hide(this, 'memo', new Map());
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      isa(type, x) {
        var R, ref;
        /* TAINT use proper validation */
        if (!(type instanceof Type)) {
          throw new Error(`Ω___2 expected an instance of \`Type\`, got a ${this.type_of(R)}`);
        }
        if ((ref = (R = type.isa.call(type.$typespace, x, this))) !== true && ref !== false) {
          throw new Error(`Ω___3 expected \`true\` or \`false\`, got a ${this.type_of(R)}`);
        }
        return R;
      }

      //---------------------------------------------------------------------------------------------------------
      type_of(x) {
        return 'something';
      }

      //---------------------------------------------------------------------------------------------------------
      validate(type, x) {
        if (this.isa(type, x)) {
          return x;
        }
        throw new Error(`Ω___4 expected a ${type.$name}, got a ${this.type_of(x)}`);
      }

      //---------------------------------------------------------------------------------------------------------
      create(type, ...P) {}

    };
    // unless ( method = type.parse )?
    //   throw new Error "Ω___5 expected a , got #{rpr R}"

      //---------------------------------------------------------------------------------------------------------
    // evaluate: ( ??? ) ->
    // create: ( ??? ) ->

      //===========================================================================================================
    Type = class Type {
      //---------------------------------------------------------------------------------------------------------
      constructor(typespace, name, declaration) {
        var key, value;
        /* NOTE not doing anything for the time being */
        /* TAINT should still implement string-valued `isa` */
        // debug 'Ω___6', rpr declaration
        hide(this, '$name', name);
        hide(this, '$typespace', typespace);
        /* TAINT check for accidental overwrites */
        //.......................................................................................................
        /* Compile fields: */
        if (declaration.fields != null) {
          (() => {
            /* TAINT try to move this check to validation step */
            if (declaration.isa != null) {
              throw new Error("Ω___7 must have exactly one of `isa` or `fields`, not both");
            }
            // for field_name, field_declaration of declaration.fields
            //   field = new Type typespace, field_name, field_declaration
            //   debug 'Ω___8', { name, field_name, field_declaration, }, field.$name, field.isa
            return debug('Ω___9', new Typespace(declaration.fields));
          })();
        }
//.......................................................................................................
        for (key in declaration) {
          value = declaration[key];
          if (key === 'isa') { // check that value is function?
            nameit(name, value);
          }
          hide(this, key, value);
        }
        return void 0;
      }

    };
    //===========================================================================================================
    Typespace = class Typespace {
      //---------------------------------------------------------------------------------------------------------
      constructor(...parents) {
        var declaration, deref, owner, ref, refs, typename, typeref, typespace_cfg;
        ref = parents, [...parents] = ref, [typespace_cfg] = splice.call(parents, -1);
        refs = this._derefence_typenames(parents, typespace_cfg);
        info('Ω__10', Object.keys(refs));
        for (typename in refs) {
          owner = refs[typename];
          help('Ω__11', typename, GUY.trm.truth(owner === typespace_cfg));
        }
        for (typename in refs) {
          owner = refs[typename];
          declaration = typespace_cfg[typename];
          urge('Ω__12', typename, owner.constructor.name, rpr(declaration));
          switch (true) {
            case $isa.text(declaration):
              typeref = declaration;
              if (owner === typespace_cfg) {
                owner = this;
              }
              if (!((deref = owner[typeref]) instanceof Type)) {
                /* TAINT should this error occur, its message is probably not meaningful to user */
                throw new Error(`Ω__13 expected type reference ${rpr(typename)} → ${rpr(typeref)} to dereference to a \`Type\`, got ${rpr(deref)} instead`);
              }
              declaration = ((deref) => {
                return {
                  isa: (function(x, t) {
                    return t.isa(deref, x);
                  })
                };
              })(deref);
              break;
            case $isa.function(declaration):
              declaration = {
                isa: declaration
              };
          }
          // else
          // ### TAINT should validate remaining possible values for typespace_cfg[ typename ] ###
          //.....................................................................................................
          this[typename] = new Type(this, typename, declaration);
        }
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      _amend_and_sort_typenames(typespace_cfg) {
        /* Given a `typespace_cfg`, return a list of names such that the declarative dependencies (where the
             type is defined by the name of another type in the typespace) can be resolved at compile time */
        /* TAINT re-throw cycle error */
        var declaration, g, name;
        g = new Ltsort();
        for (name in typespace_cfg) {
          declaration = typespace_cfg[name];
          if ($isa.text(declaration)) {
            g.add({
              name,
              needs: declaration
            });
          } else {
            g.add({name});
          }
        }
        return g.linearize({
          groups: false
        });
      }

      //---------------------------------------------------------------------------------------------------------
      _derefence_typenames(parents, typespace_cfg) {
        var R, i, len, owner, owners, typename, typenames;
        typenames = this._amend_and_sort_typenames(typespace_cfg);
        R = {};
        owners = [...parents, typespace_cfg].reverse();
        for (i = 0, len = typenames.length; i < len; i++) {
          typename = typenames[i];
          if ((owner = find_owner(owners, typename, null)) == null) {
            throw new Error(`Ω__14 unable to dereference typename ${rpr(typename)}`);
          }
          R[typename] = owner;
        }
        return R;
      }

    };
    //===========================================================================================================
    std = new Typespace({
      //.........................................................................................................
      integer: {
        isa: function(x, t) {
          return Number.isInteger(x);
        },
        foo: 4
      },
      odd: {
        isa: function(x, t) {
          return (t.isa(this.integer, x)) && (modulo(x, 2) !== 0);
        }
      },
      // short form just assigns either a test method or a type name:
      even: function(x, t) {
        return (t.isa(this.integer, x)) && (modulo(x, 2) === 0);
      },
      float: function(x, t) {
        return Number.isFinite(x);
      },
      bigint: function(x, t) {
        return typeof x === 'bigint';
      },
      text: function(x, t) {
        return typeof x === 'string';
      },
      //.........................................................................................................
      // numerical:      ( x, t ) -> ( t.isa @float, x   ) or ( t.isa @bigint, x )
      // positive0:      ( x, t ) -> ( t.isa @float, x   ) and ( x >= +0  )
      // positive1:      ( x, t ) -> ( t.isa @float, x   ) and ( x >= +1  )
      // negative0:      ( x, t ) -> ( t.isa @float, x   ) and ( x <=  0  )
      // negative1:      ( x, t ) -> ( t.isa @float, x   ) and ( x <= -1  )
      // cardinal:       ( x, t ) -> ( t.isa @integer, x ) and ( t.isa @positive0, x )
      //.........................................................................................................
      // cardinalbigint: ( x, t ) -> ( t.isa @bigint, x    ) and ( x >= +0 )
      // nonemptytext:   ( x, t ) -> ( t.isa @text, x ) and x.length > 0
      //.........................................................................................................
      // circle1:  'circle2'
      // circle2:  'circle3'
      // circle3:  'circle1'
      //.........................................................................................................
      // weird:    'strange' # declares another name for `odd`
      strange: 'odd' // declares another name for `odd`
    });
    return {
      // abnormal: 'weird' # declares another name for `odd`
      //.........................................................................................................
      // quantity:
      //   # isa: ->
      //   # each field becomes an `Type` instance; strings may refer to names in the same typespace
      //   fields:
      //     q:    'float'
      //     u:    'nonemptytext'
      //   template:
      //     q:    0
      //     u:    'u'

      // quantity = new Typespace std,
      //   q:    'float'
      //   u:    'nonemptytext'
      //   # template:
      //   #   q:    0
      //   #   u:    'u'

      //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      Types,
      Type,
      Typespace,
      std,
      types: new Types()
    };
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var e, std, types;
      // f = ( P..., x ) -> info 'Ω__15', { P, x, }
      // f 7
      // f 7, 8, 9
      // return null
      ({types, std} = require_intertype());
      // help 'Ω__16', types = new Types()
      help('Ω__17', std);
      // help 'Ω__18', std.integer
      // help 'Ω__19', std.integer.isa 5
      help('Ω__20', GUY.trm.truth(types.isa(std.integer, 5)));
      help('Ω__21', GUY.trm.truth(types.isa(std.odd, 5)));
      help('Ω__22', GUY.trm.truth(types.isa(std.even, 6)));
      help('Ω__23', GUY.trm.truth(types.isa(std.strange, 5)));
      // #.........................................................................................................
      help('Ω__24', GUY.trm.truth(types.isa(std.integer, 5.3)));
      help('Ω__25', GUY.trm.truth(types.isa(std.odd, 6)));
      help('Ω__26', GUY.trm.truth(types.isa(std.odd, 5.3)));
      help('Ω__27', GUY.trm.truth(types.isa(std.even, 5)));
      help('Ω__28', GUY.trm.truth(types.isa(std.strange, 6)));
      //.........................................................................................................
      // help 'Ω__29', GUY.trm.truth     types.isa       std.weird,    6
      // help 'Ω__30', GUY.trm.truth     types.isa       std.weird,    5
      // help 'Ω__31', GUY.trm.truth     types.isa       std.cardinal, 6
      // help 'Ω__32', GUY.trm.truth     types.isa       std.cardinal, 0
      // help 'Ω__33', GUY.trm.truth     types.isa       std.cardinal, -1
      // #.........................................................................................................
      help('Ω__34', (function() {
        try {
          return types.validate(std.integer, 5);
        } catch (error) {
          e = error;
          return warn('Ω__35', e.message);
        }
      })());
      return help('Ω__36', (function() {
        try {
          return types.validate(std.integer, 5.3);
        } catch (error) {
          e = error;
          return warn('Ω__37', e.message);
        }
      })());
    })();
  }

  // info 'Ω__38', std.weird
// info 'Ω__39', std.weird.isa
// info 'Ω__40', std.weird.isa.toString()

}).call(this);

//# sourceMappingURL=demo-intertype.js.map