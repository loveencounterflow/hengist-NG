(async function() {
  'use strict';
  var GUY, Intertype, Intertype_namespace, Intertype_type, WEBGUY, alert, bold, debug, echo, help, info, inspect, log, nameit, plain, praise, reverse, rpr, std, urge, warn, whisper,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, bold, log} = GUY.trm);

  WEBGUY = require('../../../apps/webguy');

  ({nameit} = WEBGUY.props);

  //===========================================================================================================
  Intertype = class Intertype {
    //---------------------------------------------------------------------------------------------------------
    constructor(cfg) {
      // @_types = new Map()
      GUY.props.hide(this, 'isa', this.isa.bind(this));
      GUY.props.hide(this, 'validate', this.validate.bind(this));
      GUY.props.hide(this, 'parse', this.parse.bind(this));
      GUY.props.hide(this, 'type_of', this.type_of.bind(this));
      GUY.props.hide(this, 'memo', new Map());
      return void 0;
    }

    // #---------------------------------------------------------------------------------------------------------
    // _compile: ( declaration ) ->
    //   return R if ( R = @_types.get declaration )?
    //   ### NOTE not doing anything for the time being ###
    //   @_types.set declaration, R = declaration
    //   return R

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

  //===========================================================================================================
  Intertype_type = class Intertype_type {
    //---------------------------------------------------------------------------------------------------------
    constructor(namespace, name, declaration) {
      var key, value;
      /* NOTE not doing anything for the time being */
      // debug 'Ω___5', declaration
      this.name = name;
      this.namespace = namespace;
/* TAINT check for accidental overwrites */
      for (key in declaration) {
        value = declaration[key];
        if (key === 'isa') { // check that value is function?
          nameit(name, value);
        }
        this[key] = value;
      }
      return void 0;
    }

  };

  //===========================================================================================================
  Intertype_namespace = class Intertype_namespace {
    //---------------------------------------------------------------------------------------------------------
    constructor(namespace) {
      var declaration, name;
// debug 'Ω___6', namespace
      for (name in namespace) {
        declaration = namespace[name];
        this[name] = new Intertype_type(namespace, name, declaration);
      }
      return void 0;
    }

  };

  //===========================================================================================================
  std = new Intertype_namespace({
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

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var e, types;
      help('Ω___8', types = new Intertype());
      help('Ω___9', std);
      // help 'Ω__10', std.integer
      // help 'Ω__11', std.integer.isa 5
      help('Ω__12', GUY.trm.truth(types.isa(std.integer, 5.3)));
      help('Ω__13', GUY.trm.truth(types.isa(std.odd, 6)));
      help('Ω__14', GUY.trm.truth(types.isa(std.odd, 5)));
      help('Ω__15', GUY.trm.truth(types.isa(std.odd, 5.3)));
      help('Ω__16', (function() {
        try {
          return types.validate(std.integer, 5);
        } catch (error) {
          e = error;
          return warn('Ω__17', e.message);
        }
      })());
      return help('Ω__18', (function() {
        try {
          return types.validate(std.integer, 5.3);
        } catch (error) {
          e = error;
          return warn('Ω__19', e.message);
        }
      })());
    })();
  }

}).call(this);

//# sourceMappingURL=demo-intertype.js.map