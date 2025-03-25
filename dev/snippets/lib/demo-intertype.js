(async function() {
  'use strict';
  var GUY, alert, bold, debug, echo, help, hide, info, inspect, log, nameit, plain, praise, require_intertype, reverse, rpr, urge, warn, whisper,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, bold, log} = GUY.trm);

  ({hide} = GUY.props);

  ({
    props: {nameit}
  } = require('../../../apps/webguy'));

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
      if (x === null) {
        return 'null';
      }
      if (x === void 0) {
        return 'undefined';
      }
      if (x === +2e308) {
        return 'infinity';
      }
      if (x === -2e308) {
        return 'infinity';
      }
      if (x === true) {
        return 'boolean';
      }
      if (x === false) {
        return 'boolean';
      }
      if ($isa.text(x)) {
        return 'text';
      }
      if ($isa.function(x)) {
        return 'function';
      }
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
        var R;
        /* TAINT use proper validation */
        if (!(type instanceof Type)) {
          throw new Error(`Ω___1 expected an instance of \`Type\`, got a ${$type_of(R)}`);
        }
        //.......................................................................................................
        // R = type.isa.call type.$typespace, x, @
        R = type.isa.call(type, x, this);
        //.......................................................................................................
        if (R !== true && R !== false) {
          throw new Error(`Ω___2 expected \`true\` or \`false\`, got a ${$type_of(R)}`);
        }
        //.......................................................................................................
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

      //===========================================================================================================
    Type = class Type {
      //---------------------------------------------------------------------------------------------------------
      constructor(typespace, typename, declaration) {
        var key, value;
        this.$typename = typename; // hide @, '$typename',  typename
        hide(this, '$typespace', typespace);
        if (declaration.fields != null) {
          this._compile_fields(typespace, typename, declaration);
        }
//.......................................................................................................
/* TAINT this is defective w/out proper validation */
        for (key in declaration) {
          value = declaration[key];
          debug('Ω___5', `${typename}.${key}: ${rpr(value)}`);
          if (key === 'isa') { // check that value is function?
            nameit(typename, value);
          }
          hide(this, key, value);
        }
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      _compile_fields(typespace, typename, declaration) {
        var field_declaration, field_name, ref;
        debug('Ω___6', {typename, declaration});
        //.......................................................................................................
        /* TAINT try to move this check to validation step */
        if (declaration.isa != null) {
          throw new Error("Ω___7 must have exactly one of `isa` or `fields`, not both");
        }
        ref = declaration.fields;
        for (field_name in ref) {
          field_declaration = ref[field_name];
          declaration.fields[field_name] = new Type(typespace, field_name, field_declaration);
        }
        // debug 'Ω___8', { field_name, field_declaration, field, }
        // #   debug 'Ω___9', { typename, field_name, field_declaration, }, field.$typename, field.isa
        // debug 'Ω__10', new Typespace declaration.fields
        declaration.isa = function(x, t) {
          debug('Ω__11', {
            fields: this.fields
          });
          return false;
        };
        return null;
      }

    };
    //===========================================================================================================
    Typespace = class Typespace {
      //---------------------------------------------------------------------------------------------------------
      constructor(typespace_cfg) {
        var declaration, typename;
        for (typename in typespace_cfg) {
          declaration = typespace_cfg[typename];
          //.....................................................................................................
          switch (true) {
            //...................................................................................................
            case $isa.text(declaration):
              declaration = ((typeref) => {
                return {
                  isa: (function(x, t) {
                    return t.isa(this.$typespace[typeref], x);
                  })
                };
              })(declaration);
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
              throw new Error(`Ω__12 expected a typename, a function or a type as declaration, got a ${$type_of(declaration)}`);
          }
          if (!(declaration instanceof Type)) {
            //.....................................................................................................
            declaration = new Type(this, typename, declaration);
          }
          this[typename] = declaration;
        }
        return void 0;
      }

    };
    //===========================================================================================================
    std = new Typespace({
      //.........................................................................................................
      quantity: {
        fields: {
          // each field becomes a `Type` instance; strings may refer to names in the same typespace
          q: 'float',
          u: 'nonempty_text'
        },
        template: {
          q: 0,
          u: 'u'
        }
      },
      //.........................................................................................................
      integer: {
        isa: function(x, t) {
          return Number.isInteger(x);
        },
        foo: 4
      },
      odd: {
        isa: function(x, t) {
          return (t.isa(this.$typespace.integer, x)) && (modulo(x, 2) !== 0);
        }
      },
      // short form just assigns either a test method or a type name:
      even: function(x, t) {
        return (t.isa(this.$typespace.integer, x)) && (modulo(x, 2) === 0);
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
      nonempty_text: function(x, t) {
        return (t.isa(this.$typespace.text, x)) && (x.length > 0);
      },
      //.........................................................................................................
      // numerical:      ( x, t ) -> ( t.isa @$typespace.float, x   ) or ( t.isa @$typespace.bigint, x )
      // positive0:      ( x, t ) -> ( t.isa @$typespace.float, x   ) and ( x >= +0  )
      // positive1:      ( x, t ) -> ( t.isa @$typespace.float, x   ) and ( x >= +1  )
      // negative0:      ( x, t ) -> ( t.isa @$typespace.float, x   ) and ( x <=  0  )
      // negative1:      ( x, t ) -> ( t.isa @$typespace.float, x   ) and ( x <= -1  )
      // cardinal:       ( x, t ) -> ( t.isa @$typespace.integer, x ) and ( t.isa @$typespace.positive0, x )
      //.........................................................................................................
      // cardinalbigint: ( x, t ) -> ( t.isa @$typespace.bigint, x    ) and ( x >= +0 )
      //.........................................................................................................
      // circle1:  'circle2'
      // circle2:  'circle3'
      // circle3:  'circle1'
      //.........................................................................................................
      weird: 'strange', // declares another name for `odd`
      strange: 'odd', // declares another name for `odd`
      abnormal: 'weird' // declares another name for `odd`
    });
    
    //===========================================================================================================
    flatly_1 = new Typespace({
      evenly: 'flat',
      flat: function(x, t) {
        return t.isa(std.even, x);
      },
      plain: 'evenly'
    });
    // foo:          'bar'

    //-----------------------------------------------------------------------------------------------------------
    flatly_2 = new Typespace({
      evenly: 'flat',
      flat: std.even,
      plain: 'evenly'
    });
    return {
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
      info('Ω__13', std);
      info('Ω__14', flatly_1);
      info('Ω__15', flatly_2);
      info('Ω__16', flatly_1.flat);
      info('Ω__17', flatly_2.flat);
      info('Ω__18', std.text.nonempty);
      info('Ω__19', 'std.quantity:        ', rpr(std.quantity));
      info('Ω__20', 'std.quantity.isa:    ', rpr(std.quantity.isa));
      info('Ω__21', 'std.quantity.fields: ', rpr(std.quantity.fields));
      //.........................................................................................................
      echo();
      help('Ω__22', GUY.trm.truth(types.isa(std.integer, 5)));
      help('Ω__23', GUY.trm.truth(types.isa(std.odd, 5)));
      help('Ω__24', GUY.trm.truth(types.isa(std.even, 6)));
      help('Ω__25', GUY.trm.truth(types.isa(std.strange, 5)));
      help('Ω__26', GUY.trm.truth(types.isa(std.weird, 5)));
      help('Ω__27', GUY.trm.truth(types.isa(std.abnormal, 5)));
      help('Ω__28', GUY.trm.truth(types.isa(flatly_1.flat, 8)));
      help('Ω__29', GUY.trm.truth(types.isa(flatly_1.evenly, 8)));
      help('Ω__30', GUY.trm.truth(types.isa(flatly_1.plain, 8)));
      help('Ω__31', GUY.trm.truth(types.isa(flatly_2.flat, 8)));
      help('Ω__32', GUY.trm.truth(types.isa(flatly_2.evenly, 8)));
      help('Ω__33', GUY.trm.truth(types.isa(flatly_2.plain, 8)));
      help('Ω__34', GUY.trm.truth(types.isa(std.nonempty_text, 'abc')));
      // help 'Ω__35', GUY.trm.truth     types.isa       std.quantity.fields.q,   123.456
      // help 'Ω__36', GUY.trm.truth     types.isa       std.quantity.fields.u,   'm'
      help('Ω__37', GUY.trm.truth(types.isa(std.quantity, {
        q: 123.456,
        u: 'm'
      })));
      //.........................................................................................................
      echo();
      help('Ω__38', GUY.trm.truth(types.isa(std.integer, 5.3)));
      help('Ω__39', GUY.trm.truth(types.isa(std.odd, 6)));
      help('Ω__40', GUY.trm.truth(types.isa(std.odd, 5.3)));
      help('Ω__41', GUY.trm.truth(types.isa(std.even, 5)));
      help('Ω__42', GUY.trm.truth(types.isa(std.strange, 6)));
      help('Ω__43', GUY.trm.truth(types.isa(std.weird, 6)));
      help('Ω__44', GUY.trm.truth(types.isa(std.abnormal, 6)));
      help('Ω__45', GUY.trm.truth(types.isa(flatly_1.evenly, 5)));
      help('Ω__46', GUY.trm.truth(types.isa(flatly_1.flat, 5)));
      help('Ω__47', GUY.trm.truth(types.isa(flatly_1.plain, 5)));
      help('Ω__48', GUY.trm.truth(types.isa(flatly_2.flat, 5)));
      help('Ω__49', GUY.trm.truth(types.isa(flatly_2.evenly, 5)));
      help('Ω__50', GUY.trm.truth(types.isa(flatly_2.plain, 5)));
      help('Ω__51', GUY.trm.truth(types.isa(std.nonempty_text, '')));
      // help 'Ω__52', GUY.trm.truth     types.isa       std.quantity.fields.q,   '123.456'
      // help 'Ω__53', GUY.trm.truth     types.isa       std.quantity.fields.u,   ''
      help('Ω__54', GUY.trm.truth(types.isa(std.quantity, {
        q: 123.456,
        u: ''
      })));
      help('Ω__55', GUY.trm.truth(types.isa(std.quantity, {
        q: null,
        u: 'm'
      })));
      //.........................................................................................................
      echo();
      // help 'Ω__56', GUY.trm.truth     types.isa       std.cardinal, 6
      // help 'Ω__57', GUY.trm.truth     types.isa       std.cardinal, 0
      // help 'Ω__58', GUY.trm.truth     types.isa       std.cardinal, -1
      // #.........................................................................................................
      help('Ω__59', (function() {
        try {
          return types.validate(std.integer, 5);
        } catch (error) {
          e = error;
          return warn('Ω__60', e.message);
        }
      })());
      return help('Ω__61', (function() {
        try {
          return types.validate(std.integer, 5.3);
        } catch (error) {
          e = error;
          return warn('Ω__62', e.message);
        }
      })());
    })();
  }

  // info 'Ω__63', std.weird
// info 'Ω__64', std.weird.isa
// info 'Ω__65', std.weird.isa.toString()

}).call(this);

//# sourceMappingURL=demo-intertype.js.map