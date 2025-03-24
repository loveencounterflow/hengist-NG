(async function() {
  'use strict';
  var GUY, Ltsort, alert, bold, debug, echo, help, hide, info, inspect, log, misfit, nameit, plain, praise, require_intertype, reverse, rpr, urge, warn, whisper,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, bold, log} = GUY.trm);

  ({hide} = GUY.props);

  ({
    props: {nameit}
  } = require('../../../apps/webguy'));

  ({Ltsort} = require('../../../apps/ltsort'));

  misfit = Symbol('misfit');

  //###########################################################################################################
  require_intertype = function() {
    var $isa, $type_of, Type, Types, Typespace, flatly_1, flatly_2, std;
    //===========================================================================================================
    $isa = {
      text: function(x) {
        return typeof x === 'string';
      },
      function: function(x) {
        return (Object.prototype.toString.call(x)) === '[object Function]';
      }
    };
    //-----------------------------------------------------------------------------------------------------------
    $type_of = function(x) {
      return 'something';
    };
    //===========================================================================================================
    Types = class Types {
      //---------------------------------------------------------------------------------------------------------
      constructor(cfg) {
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
          throw new Error(`Ω___1 expected an instance of \`Type\`, got a ${$type_of(R)}`);
        }
        if ((ref = (R = type.isa.call(type.$typespace, x, this))) !== true && ref !== false) {
          throw new Error(`Ω___2 expected \`true\` or \`false\`, got a ${$type_of(R)}`);
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
        throw new Error(`Ω___3 expected a ${type.$typename}, got a ${$type_of(x)}`);
      }

      //---------------------------------------------------------------------------------------------------------
      create(type, ...P) {
        throw new Error("Ω___4 not yet implemented");
      }

    };
    //---------------------------------------------------------------------------------------------------------
    // evaluate: ( ??? ) ->
    // create: ( ??? ) ->

      //===========================================================================================================
    Type = class Type {
      //---------------------------------------------------------------------------------------------------------
      constructor(typespace, typename, declaration) {
        var key, value;
        this.$typename = typename; // hide @, '$typename',  typename
        hide(this, '$typespace', typespace);
//.......................................................................................................
// ### Compile fields: ###
// if declaration.fields?
//   do =>
//     ### TAINT try to move this check to validation step ###
//     if declaration.isa?
//       throw new Error "Ω___5 must have exactly one of `isa` or `fields`, not both"
//     # for field_name, field_declaration of declaration.fields
//     #   field = new Type typespace, field_name, field_declaration
//     #   debug 'Ω___6', { typename, field_name, field_declaration, }, field.$typename, field.isa
//     debug 'Ω___7', new Typespace declaration.fields
//.......................................................................................................
/* TAINT this is defective w/out proper validation */
        for (key in declaration) {
          value = declaration[key];
          if (key === 'isa') { // check that value is function?
            nameit(typename, value);
          }
          hide(this, key, value);
        }
        return void 0;
      }

    };
    //===========================================================================================================
    Typespace = class Typespace {
      //---------------------------------------------------------------------------------------------------------
      constructor(typespace_cfg) {
        var declaration, deref, i, len, typename, typenames, typeref;
        typenames = this._amend_and_sort_typenames(typespace_cfg);
        for (i = 0, len = typenames.length; i < len; i++) {
          typename = typenames[i];
          if ((declaration = typespace_cfg[typename]) == null) {
            throw new Error(`Ω___8 unknown typename ${rpr(typename)}`);
          }
          //.....................................................................................................
          switch (true) {
            //...................................................................................................
            case $isa.text(declaration):
              typeref = declaration;
              if (!((deref = this[typeref]) instanceof Type)) {
                /* TAINT should this error occur, its message is probably not meaningful to user */
                throw new Error(`Ω___9 expected type reference ${rpr(typename)} → ${rpr(typeref)} to dereference to a \`Type\`, got ${rpr(deref)} instead`);
              }
              declaration = ((deref) => {
                return {
                  isa: (function(x, t) {
                    return t.isa(deref, x);
                  })
                };
              })(deref);
              break;
            //...................................................................................................
            case $isa.function(declaration):
              declaration = {
                isa: declaration
              };
              break;
            //...................................................................................................
            case declaration instanceof Type:
              null;
              break;
            case declaration instanceof Object:
              null;
              break;
            default:
              //...................................................................................................
              throw new Error(`Ω__10 expected a typename, a function or a type as declaration, got a ${$type_of(declaration)}`);
          }
          if (!(declaration instanceof Type)) {
            //.....................................................................................................
            declaration = new Type(this, typename, declaration);
          }
          this[typename] = declaration;
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
      //.........................................................................................................
      // circle1:  'circle2'
      // circle2:  'circle3'
      // circle3:  'circle1'
      //.........................................................................................................
      weird: 'strange', // declares another name for `odd`
      strange: 'odd', // declares another name for `odd`
      abnormal: 'weird' // declares another name for `odd`
    });
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

    //===========================================================================================================
    flatly_1 = new Typespace({
      evenly: 'flat',
      flat: function(x, t) {
        return t.isa(std.even, x);
      },
      plain: 'evenly'
    });
    //-----------------------------------------------------------------------------------------------------------
    flatly_2 = new Typespace({
      evenly: 'flat',
      flat: std.even,
      plain: 'evenly'
    });
    return {
      // extras = new Typespace std,
      //   nonemptytext:   ( x, t ) -> ( t.isa @text, x ) and x.length > 0

      // quantity = new Typespace std,
      //   nonemptytext:   ( x, t ) -> ( t.isa @text, x ) and x.length > 0
      //   fields: new Typespace std,
      //   q:              'float'
      //   u:              'nonemptytext'
      //   # template:
      //   #   q:    0
      //   #   u:    'u'

      //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      Types,
      Type,
      Typespace,
      std,
      flatly_1,
      flatly_2,
      types: new Types()
    };
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var e, flatly_1, flatly_2, std, types;
      ({types, flatly_1, flatly_2, std} = require_intertype());
      info('Ω__11', std);
      info('Ω__12', flatly_1);
      info('Ω__13', flatly_2);
      info('Ω__14', flatly_1.flat);
      info('Ω__15', flatly_2.flat);
      //.........................................................................................................
      echo();
      help('Ω__16', GUY.trm.truth(types.isa(std.integer, 5)));
      help('Ω__17', GUY.trm.truth(types.isa(std.odd, 5)));
      help('Ω__18', GUY.trm.truth(types.isa(std.even, 6)));
      help('Ω__19', GUY.trm.truth(types.isa(std.strange, 5)));
      help('Ω__20', GUY.trm.truth(types.isa(std.weird, 5)));
      help('Ω__21', GUY.trm.truth(types.isa(std.abnormal, 5)));
      help('Ω__22', GUY.trm.truth(types.isa(flatly_1.flat, 8)));
      help('Ω__23', GUY.trm.truth(types.isa(flatly_1.evenly, 8)));
      help('Ω__24', GUY.trm.truth(types.isa(flatly_1.plain, 8)));
      help('Ω__25', GUY.trm.truth(types.isa(flatly_2.flat, 8)));
      help('Ω__26', GUY.trm.truth(types.isa(flatly_2.evenly, 8)));
      help('Ω__27', GUY.trm.truth(types.isa(flatly_2.plain, 8)));
      //.........................................................................................................
      echo();
      help('Ω__28', GUY.trm.truth(types.isa(std.integer, 5.3)));
      help('Ω__29', GUY.trm.truth(types.isa(std.odd, 6)));
      help('Ω__30', GUY.trm.truth(types.isa(std.odd, 5.3)));
      help('Ω__31', GUY.trm.truth(types.isa(std.even, 5)));
      help('Ω__32', GUY.trm.truth(types.isa(std.strange, 6)));
      help('Ω__33', GUY.trm.truth(types.isa(std.weird, 6)));
      help('Ω__34', GUY.trm.truth(types.isa(std.abnormal, 6)));
      help('Ω__35', GUY.trm.truth(types.isa(flatly_1.evenly, 5)));
      help('Ω__36', GUY.trm.truth(types.isa(flatly_1.flat, 5)));
      help('Ω__37', GUY.trm.truth(types.isa(flatly_1.plain, 5)));
      help('Ω__38', GUY.trm.truth(types.isa(flatly_2.flat, 5)));
      help('Ω__39', GUY.trm.truth(types.isa(flatly_2.evenly, 5)));
      help('Ω__40', GUY.trm.truth(types.isa(flatly_2.plain, 5)));
      //.........................................................................................................
      echo();
      // help 'Ω__41', GUY.trm.truth     types.isa       std.cardinal, 6
      // help 'Ω__42', GUY.trm.truth     types.isa       std.cardinal, 0
      // help 'Ω__43', GUY.trm.truth     types.isa       std.cardinal, -1
      // #.........................................................................................................
      help('Ω__44', (function() {
        try {
          return types.validate(std.integer, 5);
        } catch (error) {
          e = error;
          return warn('Ω__45', e.message);
        }
      })());
      return help('Ω__46', (function() {
        try {
          return types.validate(std.integer, 5.3);
        } catch (error) {
          e = error;
          return warn('Ω__47', e.message);
        }
      })());
    })();
  }

  // info 'Ω__48', std.weird
// info 'Ω__49', std.weird.isa
// info 'Ω__50', std.weird.isa.toString()

}).call(this);

//# sourceMappingURL=demo-intertype.js.map