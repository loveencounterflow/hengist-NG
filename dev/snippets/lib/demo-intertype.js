(async function() {
  'use strict';
  var GUY, Ltsort, WEBGUY, alert, bold, debug, echo, help, hide, info, inspect, log, nameit, plain, praise, require_intertype, reverse, rpr, urge, warn, whisper,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, bold, log} = GUY.trm);

  WEBGUY = require('../../../apps/webguy');

  ({hide} = GUY.props);

  ({nameit} = WEBGUY.props);

  ({Ltsort} = require('../../../apps/ltsort'));

  //###########################################################################################################
  require_intertype = function() {
    var Type, Types, Typespace, std;
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
        if ((ref = (R = type.isa.call(type.$typespace, x, this))) !== true && ref !== false) {
          throw new Error(`Ω___2 expected \`true\` or \`false\`, got a ${this.type_of(R)}`);
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
        throw new Error(`Ω___3 expected a ${type.$name}, got a ${this.type_of(x)}`);
      }

      //---------------------------------------------------------------------------------------------------------
      create(type, ...P) {}

    };
    // unless ( method = type.parse )?
    //   throw new Error "Ω___4 expected a , got #{rpr R}"

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
        // debug 'Ω___5', rpr declaration
        hide(this, '$name', name);
        hide(this, '$typespace', typespace);
/* TAINT check for accidental overwrites */
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
      constructor(typespace_cfg) {
        var declaration, i, len, name, names;
        names = this._sort_names(typespace_cfg);
// info 'Ω___6', Object.keys typespace_cfg
// info 'Ω___7', names
        for (i = 0, len = names.length; i < len; i++) {
          name = names[i];
          if ((declaration = typespace_cfg[name]) == null) {
            throw new Error(`Ω___8 missing declaration for type ${rpr(name)}`);
          }
          this[name] = new Type(this, name, declaration);
        }
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      _sort_names(typespace_cfg) {
        /* Given a `typespace_cfg`, return a list of names such that the declarative dependencies (where the
             type is defined by the name of another type in the typespace) can be resolved at compile time */
        /* TAINT re-throw cycle error */
        var declaration, g, name;
        g = new Ltsort();
        for (name in typespace_cfg) {
          declaration = typespace_cfg[name];
          if (typeof declaration === 'string') {
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
      // circle1:  'circle2'
      // circle2:  'circle3'
      // circle3:  'circle1'
      weird: 'strange', // declares another name for `odd`
      strange: 'odd', // declares another name for `odd`
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
      abnormal: 'weird' // declares another name for `odd`
    });
    // short form just assigns either a test method or a type name:
    /*
        even:     ( x, t ) -> ( t.isa @integer, x ) and ( x %% 2 is 0 )
        quantity:
     * each field becomes an `Type` instance; strings may refer to names in the same typespace
          fields:
            q:    'float'
            u:    'nonempty_text'
     */
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    return {Types, Type, Typespace, std};
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var Types, e, std, types;
      ({Types, std} = require_intertype());
      help('Ω___9', types = new Types());
      help('Ω__10', std);
      // help 'Ω__11', std.integer
      // help 'Ω__12', std.integer.isa 5
      help('Ω__13', GUY.trm.truth(types.isa(std.integer, 5.3)));
      help('Ω__14', GUY.trm.truth(types.isa(std.strange, 6)));
      help('Ω__15', GUY.trm.truth(types.isa(std.weird, 6)));
      help('Ω__16', GUY.trm.truth(types.isa(std.odd, 6)));
      help('Ω__17', GUY.trm.truth(types.isa(std.strange, 5)));
      help('Ω__18', GUY.trm.truth(types.isa(std.weird, 5)));
      help('Ω__19', GUY.trm.truth(types.isa(std.odd, 5)));
      help('Ω__20', GUY.trm.truth(types.isa(std.odd, 5.3)));
      help('Ω__21', (function() {
        try {
          return types.validate(std.integer, 5);
        } catch (error) {
          e = error;
          return warn('Ω__22', e.message);
        }
      })());
      return help('Ω__23', (function() {
        try {
          return types.validate(std.integer, 5.3);
        } catch (error) {
          e = error;
          return warn('Ω__24', e.message);
        }
      })());
    })();
  }

}).call(this);

//# sourceMappingURL=demo-intertype.js.map