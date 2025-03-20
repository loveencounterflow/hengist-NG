(async function() {
  'use strict';
  var GUY, Intertype, Intertype_namespace, Intertype_type, alert, bold, debug, echo, help, info, inspect, log, plain, praise, reverse, rpr, std, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, bold, log} = GUY.trm);

  //===========================================================================================================
  Intertype = class Intertype {
    //---------------------------------------------------------------------------------------------------------
    constructor(cfg) {
      // @_types = new Map()
      GUY.props.hide(this, 'isa', this.isa.bind(this));
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
      debug('Ω___1', type);
      if ((ref = (R = type.isa(x))) !== true && ref !== false) {
        // unless ( R = ( @_compile declaration ).isa x ) in [ true, false, ]
        throw new Error(`Ω___2 expected true or false, got ${rpr(R)}`);
      }
      return R;
    }

    //---------------------------------------------------------------------------------------------------------
    validate(type, x) {
      if (this.isa(type, x)) {
        return x;
      }
      throw new Error(`Ω___3 expected a , got ${rpr(R)}`);
    }

  };

  //===========================================================================================================
  Intertype_type = class Intertype_type {
    //---------------------------------------------------------------------------------------------------------
    constructor(declaration) {
      var k, v;
      /* NOTE not doing anything for the time being */
      debug('Ω___4', declaration);
      for (k in declaration) {
        v = declaration[k];
        this[k] = v;
      }
      return void 0;
    }

  };

  //===========================================================================================================
  Intertype_namespace = class Intertype_namespace {
    //---------------------------------------------------------------------------------------------------------
    constructor(namespace) {
      var declaration, type;
      debug('Ω___5', namespace);
      for (type in namespace) {
        declaration = namespace[type];
        this[type] = new Intertype_type(declaration);
      }
      return void 0;
    }

  };

  //===========================================================================================================
  std = new Intertype_namespace({
    integer: {
      isa: function(x) {
        return Number.isInteger(x);
      },
      foo: 4
    }
  });

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var types;
      help('Ω___6', types = new Intertype());
      help('Ω___7', std.integer);
      help('Ω___8', std.integer.isa(5));
      help('Ω___9', types.isa(std.integer, 5.3));
      help('Ω__10', types);
      return help('Ω__11', std);
    })();
  }

}).call(this);

//# sourceMappingURL=demo-intertype.js.map