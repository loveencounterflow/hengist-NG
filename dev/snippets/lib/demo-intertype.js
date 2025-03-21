(async function() {
  'use strict';
  var GUY, WEBGUY, alert, bold, debug, echo, help, hide, info, inspect, log, nameit, plain, praise, require_intertype, reverse, rpr, urge, warn, whisper,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, bold, log} = GUY.trm);

  WEBGUY = require('../../../apps/webguy');

  ({hide} = GUY.props);

  ({nameit} = WEBGUY.props);

  //###########################################################################################################
  require_intertype = function() {
    var Intertype, Intertype_namespace, Intertype_type, std;
    //===========================================================================================================
    Intertype = class Intertype {
      //---------------------------------------------------------------------------------------------------------
      constructor(cfg) {
        // @_types = new Map()
        hide(this, 'isa', this.isa.bind(this));
        hide(this, 'validate', this.validate.bind(this));
        hide(this, 'parse', this.parse.bind(this));
        hide(this, 'type_of', this.type_of.bind(this));
        hide(this, 'memo', new Map());
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      isa(type, x) {
        var R, ref;
        // debug 'Ω___1', type
        if ((ref = (R = type.isa.call(type.namespace, x, this))) !== true && ref !== false) {
          // unless ( R = ( @_compile declaration ).isa x ) in [ true, false, ]
          throw new Error(`Ω___2 expected true or false, got ${rpr(R)}`);
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
        throw new Error(`Ω___3 expected a ${type.name}, got a ${this.type_of(x)}`);
      }

      //---------------------------------------------------------------------------------------------------------
      parse(type, x) {
        var method;
        if ((method = type.parse) == null) {
          throw new Error(`Ω___4 expected a , got ${rpr(R)}`);
        }
      }

    };
    //---------------------------------------------------------------------------------------------------------
    // evaluate: ( ??? ) ->
    // create: ( ??? ) ->

      //===========================================================================================================
    Intertype_type = class Intertype_type {
      //---------------------------------------------------------------------------------------------------------
      constructor(namespace, name, declaration) {
        var key, value;
        /* NOTE not doing anything for the time being */
        // debug 'Ω___5', declaration
        this.name = name;
        hide(this, 'namespace', namespace);
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
    Intertype_namespace = class Intertype_namespace {
      //---------------------------------------------------------------------------------------------------------
      constructor(namespace_cfg) {
        var declaration, name;
// debug 'Ω___6', namespace_cfg
        for (name in namespace_cfg) {
          declaration = namespace_cfg[name];
          this[name] = new Intertype_type(this, name, declaration);
        }
        return void 0;
      }

    };
    //===========================================================================================================
    std = new Intertype_namespace({
      // weird:    'strange' # declares another name for `odd`
      // strange:  'odd'     # declares another name for `odd`
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
      }
    });
    // short form just assigns either a test method or a type name:
    /*
        even:     ( x, t ) -> ( t.isa @integer, x ) and ( x %% 2 is 0 )
        quantity:
     * each field becomes an `Intertype_type` instance; strings may refer to names in the same namespace
          fields:
            q:    'float'
            u:    'nonempty_text'
     */
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    return {Intertype, Intertype_type, Intertype_namespace, std};
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var Intertype, e, std, types;
      ({Intertype, std} = require_intertype());
      help('Ω___9', types = new Intertype());
      help('Ω__10', std);
      // help 'Ω__11', std.integer
      // help 'Ω__12', std.integer.isa 5
      help('Ω__13', GUY.trm.truth(types.isa(std.integer, 5.3)));
      // help 'Ω__14', GUY.trm.truth     types.isa       std.strange,  6
      // help 'Ω__15', GUY.trm.truth     types.isa       std.weird,    6
      help('Ω__16', GUY.trm.truth(types.isa(std.odd, 6)));
      // help 'Ω__17', GUY.trm.truth     types.isa       std.strange,  5
      // help 'Ω__18', GUY.trm.truth     types.isa       std.weird,    5
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