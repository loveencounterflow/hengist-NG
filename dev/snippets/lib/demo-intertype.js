(async function() {
  var GUY, alert, bold, debug, echo, help, hide, info, inspect, log, nameit, plain, praise, require_intertype, reverse, rpr, urge, warn, whisper,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  throw new Error("moved to InterType proper");

  'use strict';

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
        hide(this, '_recording', false);
        hide(this, '_journal', null);
        hide(this, '_stack', null);
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      isa(type, x) {
        var R, entry, ref, stack;
        /* TAINT use proper validation */
        if (!(type instanceof Type)) {
          throw new Error(`Ω___2 expected an instance of \`Type\`, got a ${$type_of(R)}`);
        }
        //.......................................................................................................
        if (this._recording) {
          this._stack.push(type.$typename);
          this._journal.push(entry = {});
        }
        //.......................................................................................................
        if ((ref = (R = type.isa.call(type, x, this))) !== true && ref !== false) {
          throw new Error(`Ω___3 expected \`true\` or \`false\`, got a ${$type_of(R)}`);
        }
        //.......................................................................................................
        if (this._recording) {
          stack = this._stack.join('.');
          this._stack.pop();
          Object.assign(entry, {
            type: type.$typename,
            stack,
            value: x,
            verdict: R
          });
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
        throw new Error(`Ω___4 expected a ${type.$typename}, got a ${$type_of(x)}`);
      }

      //---------------------------------------------------------------------------------------------------------
      create(type, ...P) {
        throw new Error("Ω___5 not yet implemented");
      }

      //---------------------------------------------------------------------------------------------------------
      evaluate(type, x) {
        var R;
        this._recording = true;
        this._journal = [];
        this._stack = [];
        //.......................................................................................................
        this.isa(type, x);
        //.......................................................................................................
        R = this._journal;
        this._recording = false;
        this._journal = null;
        this._stack = null;
        return R;
      }

    };
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
        switch (true) {
          //.....................................................................................................
          case $isa.text(declaration):
            declaration = ((typeref) => {
              return {
                isa: (function(x, t) {
                  return t.isa(this.$typespace[typeref], x);
                })
              };
            })(declaration);
            break;
          //.....................................................................................................
          case $isa.function(declaration):
            declaration = {
              isa: declaration
            };
            break;
          //.....................................................................................................
          case declaration instanceof Type:
            null;
            break;
          case declaration instanceof Object:
            null;
            break;
          default:
            //.....................................................................................................
            throw new Error(`Ω___6 expected a typename, a function or a type as declaration, got a ${$type_of(declaration)}`);
        }
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

      //---------------------------------------------------------------------------------------------------------
      _compile_fields(typespace, typename, declaration) {
        var field_declaration, field_name, ref;
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
        //.......................................................................................................
        declaration.isa = this._get_default_isa_for_fields(typespace, typename, declaration);
        return null;
      }

      //---------------------------------------------------------------------------------------------------------
      _get_default_isa_for_fields(typespace, typename, declaration) {
        return function(x, t) {
          var field, field_name, ref;
          ref = this.fields;
          for (field_name in ref) {
            field = ref[field_name];
            if (!((x != null) && t.isa(field, x[field_name]))) {
              return false;
            }
          }
          return true;
        };
      }

    };
    //===========================================================================================================
    Typespace = class Typespace {
      //---------------------------------------------------------------------------------------------------------
      constructor(typespace_cfg) {
        var declaration, typename;
        for (typename in typespace_cfg) {
          declaration = typespace_cfg[typename];
          if (!(declaration instanceof Type)) {
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
      abnormal: 'weird', // declares another name for `odd`
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
      address: {
        fields: {
          postcode: 'nonempty_text',
          city: 'nonempty_text'
        }
      },
      //.........................................................................................................
      employee: {
        fields: {
          address: 'address',
          name: {
            fields: {
              firstname: 'nonempty_text',
              lastname: 'nonempty_text'
            }
          }
        }
      }
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
      var e, flatly_1, flatly_2, i, j, len, len1, matcher, probes_and_matchers, record, records, std, type, types, value;
      ({types, flatly_1, flatly_2, std} = require_intertype());
      info('Ω___8', std);
      info('Ω___9', flatly_1);
      info('Ω__10', flatly_2);
      info('Ω__11', flatly_1.flat);
      info('Ω__12', flatly_2.flat);
      info('Ω__13', std.text.nonempty);
      info('Ω__14', 'std.quantity:              ', rpr(std.quantity));
      info('Ω__15', 'std.quantity.isa:          ', rpr(std.quantity.isa));
      info('Ω__16', 'std.quantity.fields:       ', rpr(std.quantity.fields));
      info('Ω__17', 'std.quantity.fields.q:     ', rpr(std.quantity.fields.q));
      info('Ω__18', 'std.quantity.fields.q.isa: ', rpr(std.quantity.fields.q.isa));
      //.........................................................................................................
      echo();
      help('Ω__19', GUY.trm.truth(types.isa(std.integer, 5)));
      help('Ω__20', GUY.trm.truth(types.isa(std.odd, 5)));
      help('Ω__21', GUY.trm.truth(types.isa(std.even, 6)));
      help('Ω__22', GUY.trm.truth(types.isa(std.strange, 5)));
      help('Ω__23', GUY.trm.truth(types.isa(std.weird, 5)));
      help('Ω__24', GUY.trm.truth(types.isa(std.abnormal, 5)));
      help('Ω__25', GUY.trm.truth(types.isa(flatly_1.flat, 8)));
      help('Ω__26', GUY.trm.truth(types.isa(flatly_1.evenly, 8)));
      help('Ω__27', GUY.trm.truth(types.isa(flatly_1.plain, 8)));
      help('Ω__28', GUY.trm.truth(types.isa(flatly_2.flat, 8)));
      help('Ω__29', GUY.trm.truth(types.isa(flatly_2.evenly, 8)));
      help('Ω__30', GUY.trm.truth(types.isa(flatly_2.plain, 8)));
      help('Ω__31', GUY.trm.truth(types.isa(std.nonempty_text, 'abc')));
      help('Ω__32', GUY.trm.truth(types.isa(std.quantity.fields.q, 123.456)));
      help('Ω__33', GUY.trm.truth(types.isa(std.quantity.fields.u, 'm')));
      help('Ω__34', GUY.trm.truth(types.isa(std.quantity, {
        q: 123.456,
        u: 'm'
      })));
      //.........................................................................................................
      echo();
      help('Ω__35', GUY.trm.truth(types.isa(std.integer, 5.3)));
      help('Ω__36', GUY.trm.truth(types.isa(std.odd, 6)));
      help('Ω__37', GUY.trm.truth(types.isa(std.odd, 5.3)));
      help('Ω__38', GUY.trm.truth(types.isa(std.even, 5)));
      help('Ω__39', GUY.trm.truth(types.isa(std.strange, 6)));
      help('Ω__40', GUY.trm.truth(types.isa(std.weird, 6)));
      help('Ω__41', GUY.trm.truth(types.isa(std.abnormal, 6)));
      help('Ω__42', GUY.trm.truth(types.isa(flatly_1.evenly, 5)));
      help('Ω__43', GUY.trm.truth(types.isa(flatly_1.flat, 5)));
      help('Ω__44', GUY.trm.truth(types.isa(flatly_1.plain, 5)));
      help('Ω__45', GUY.trm.truth(types.isa(flatly_2.flat, 5)));
      help('Ω__46', GUY.trm.truth(types.isa(flatly_2.evenly, 5)));
      help('Ω__47', GUY.trm.truth(types.isa(flatly_2.plain, 5)));
      help('Ω__48', GUY.trm.truth(types.isa(std.nonempty_text, '')));
      help('Ω__49', GUY.trm.truth(types.isa(std.quantity.fields.q, '123.456')));
      help('Ω__50', GUY.trm.truth(types.isa(std.quantity.fields.u, '')));
      help('Ω__51', GUY.trm.truth(types.isa(std.quantity, {
        q: 123.456,
        u: ''
      })));
      help('Ω__52', GUY.trm.truth(types.isa(std.quantity, {
        q: null,
        u: 'm'
      })));
      //.........................................................................................................
      echo();
      probes_and_matchers = [
        [[std.integer,
        5],
        null],
        [[std.integer,
        5.3],
        null],
        [[std.even,
        5],
        null],
        [[flatly_1.evenly,
        5],
        null],
        [[flatly_1.evenly,
        6],
        null],
        [[flatly_2.evenly,
        5],
        null],
        [[flatly_2.evenly,
        6],
        null],
        [
          [
            std.quantity,
            {
              q: 123.456,
              u: ''
            }
          ],
          null
        ],
        [
          [
            std.quantity,
            {
              q: 123.456,
              u: null
            }
          ],
          null
        ],
        [
          [
            std.quantity,
            {
              q: 'nan',
              u: 'm'
            }
          ],
          null
        ],
        [
          [
            std.employee,
            {
              address: {
                postcode: 'SE36',
                city: 'London'
              },
              name: null
            }
          ],
          null
        ],
        [
          [
            std.employee,
            {
              address: {
                postcode: 'SE36',
                city: 'London'
              },
              name: {}
            }
          ],
          null
        ],
        [
          [
            std.employee,
            {
              address: {
                postcode: 'SE36',
                city: 'London'
              },
              name: {
                firstname: 'Bob'
              }
            }
          ],
          null
        ]
      ];
      for (i = 0, len = probes_and_matchers.length; i < len; i++) {
        [[type, value], matcher] = probes_and_matchers[i];
        info('Ω__53', type.$typename, rpr(value));
        records = types.evaluate(type, value);
        for (j = 0, len1 = records.length; j < len1; j++) {
          record = records[j];
          urge('', 'Ω__54', record.stack.padEnd(55), (rpr(record.value)).padEnd(35), GUY.trm.truth(record.verdict));
        }
      }
      //.........................................................................................................
      echo();
      // help 'Ω__55', GUY.trm.truth     types.isa       std.cardinal, 6
      // help 'Ω__56', GUY.trm.truth     types.isa       std.cardinal, 0
      // help 'Ω__57', GUY.trm.truth     types.isa       std.cardinal, -1
      // #.........................................................................................................
      help('Ω__58', (function() {
        try {
          return types.validate(std.integer, 5);
        } catch (error) {
          e = error;
          return warn('Ω__59', e.message);
        }
      })());
      return help('Ω__60', (function() {
        try {
          return types.validate(std.integer, 5.3);
        } catch (error) {
          e = error;
          return warn('Ω__61', e.message);
        }
      })());
    })();
  }

  // info 'Ω__62', std.weird
// info 'Ω__63', std.weird.isa
// info 'Ω__64', std.weird.isa.toString()

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8taW50ZXJ0eXBlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtBQUFBLE1BQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLGlCQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUE7SUFBQTs7RUFBQSxNQUFNLElBQUksS0FBSixDQUFVLDJCQUFWOztFQUVOLGFBRkE7OztFQUtBLEdBQUEsR0FBNEIsT0FBQSxDQUFRLEtBQVI7O0VBQzVCLENBQUEsQ0FBRSxLQUFGLEVBQ0UsS0FERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsS0FKRixFQUtFLE1BTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLE9BUkYsQ0FBQSxHQVE0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsQ0FBb0IsWUFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLE9BSEYsRUFJRSxJQUpGLEVBS0UsR0FMRixDQUFBLEdBSzRCLEdBQUcsQ0FBQyxHQUxoQzs7RUFNQSxDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLEdBQUcsQ0FBQyxLQUFoQzs7RUFDQSxDQUFBO0lBQUUsS0FBQSxFQUFPLENBQ0wsTUFESztFQUFULENBQUEsR0FDNEIsT0FBQSxDQUFRLHNCQUFSLENBRDVCLEVBdEJBOzs7RUEyQkEsaUJBQUEsR0FBb0IsUUFBQSxDQUFBLENBQUE7QUFFcEIsUUFBQSxJQUFBLEVBQUEsUUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsR0FBQTs7SUFDRSxJQUFB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LEVBQWMsQ0FBQyxDQUFDLE9BQWhCLEVBQWI7O1VBQXRFO0lBbkZzQyxDQUFBLElBQXhDOzs7RUFuUEE7OztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG50aHJvdyBuZXcgRXJyb3IgXCJtb3ZlZCB0byBJbnRlclR5cGUgcHJvcGVyXCJcblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdkZW1vLWV4ZWNhJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgYm9sZFxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbnsgaGlkZSB9ICAgICAgICAgICAgICAgICAgPSBHVVkucHJvcHNcbnsgcHJvcHM6IHtcbiAgICBuYW1laXQgfSB9ICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbnJlcXVpcmVfaW50ZXJ0eXBlID0gLT5cblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgJGlzYSA9XG4gICAgdGV4dDogICAgICggeCApIC0+IHR5cGVvZiB4IGlzICdzdHJpbmcnXG4gICAgZnVuY3Rpb246ICggeCApIC0+ICggT2JqZWN0Ojp0b1N0cmluZy5jYWxsIHggKSBpcyAnW29iamVjdCBGdW5jdGlvbl0nXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICR0eXBlX29mID0gKCB4ICkgLT5cbiAgICByZXR1cm4gJ251bGwnICAgICAgICAgaWYgeCBpcyBudWxsXG4gICAgcmV0dXJuICd1bmRlZmluZWQnICAgIGlmIHggaXMgdW5kZWZpbmVkXG4gICAgcmV0dXJuICdpbmZpbml0eScgICAgIGlmIHggaXMgK0luZmluaXR5XG4gICAgcmV0dXJuICdpbmZpbml0eScgICAgIGlmIHggaXMgLUluZmluaXR5XG4gICAgcmV0dXJuICdib29sZWFuJyAgICAgIGlmIHggaXMgdHJ1ZVxuICAgIHJldHVybiAnYm9vbGVhbicgICAgICBpZiB4IGlzIGZhbHNlXG4gICAgcmV0dXJuICd0ZXh0JyAgICAgICAgIGlmICRpc2EudGV4dCAgICAgIHhcbiAgICByZXR1cm4gJ2Z1bmN0aW9uJyAgICAgaWYgJGlzYS5mdW5jdGlvbiAgeFxuICAgIHJldHVybiAnc29tZXRoaW5nJ1xuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjbGFzcyBUeXBlc1xuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0cnVjdG9yOiAoIGNmZyApIC0+XG4gICAgICBoaWRlIEAsICdpc2EnLCAgICAgICAgQGlzYS5iaW5kICAgICAgIEBcbiAgICAgIGhpZGUgQCwgJ3ZhbGlkYXRlJywgICBAdmFsaWRhdGUuYmluZCAgQFxuICAgICAgaGlkZSBALCAnY3JlYXRlJywgICAgIEBjcmVhdGUuYmluZCAgICBAXG4gICAgICBoaWRlIEAsICd0eXBlX29mJywgICAgQHR5cGVfb2YuYmluZCAgIEBcbiAgICAgIGhpZGUgQCwgJ21lbW8nLCAgICAgICBuZXcgTWFwKClcbiAgICAgIGhpZGUgQCwgJ19yZWNvcmRpbmcnLCBmYWxzZVxuICAgICAgaGlkZSBALCAnX2pvdXJuYWwnLCAgIG51bGxcbiAgICAgIGhpZGUgQCwgJ19zdGFjaycsICAgICBudWxsXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaXNhOiAoIHR5cGUsIHggKSAtPlxuICAgICAgIyMjIFRBSU5UIHVzZSBwcm9wZXIgdmFsaWRhdGlvbiAjIyNcbiAgICAgIHVubGVzcyB0eXBlIGluc3RhbmNlb2YgVHlwZVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fXzIgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYFR5cGVgLCBnb3QgYSAjeyR0eXBlX29mIFJ9XCJcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBpZiBAX3JlY29yZGluZ1xuICAgICAgICBAX3N0YWNrLnB1c2ggdHlwZS4kdHlwZW5hbWVcbiAgICAgICAgQF9qb3VybmFsLnB1c2ggZW50cnkgPSB7fVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHVubGVzcyAoIFIgPSB0eXBlLmlzYS5jYWxsIHR5cGUsIHgsIEAgKSBpbiBbIHRydWUsIGZhbHNlLCBdXG4gICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pX19fMyBleHBlY3RlZCBgdHJ1ZWAgb3IgYGZhbHNlYCwgZ290IGEgI3skdHlwZV9vZiBSfVwiXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgaWYgQF9yZWNvcmRpbmdcbiAgICAgICAgc3RhY2sgPSBAX3N0YWNrLmpvaW4gJy4nXG4gICAgICAgIEBfc3RhY2sucG9wKClcbiAgICAgICAgT2JqZWN0LmFzc2lnbiBlbnRyeSwgeyB0eXBlOiB0eXBlLiR0eXBlbmFtZSwgc3RhY2ssIHZhbHVlOiB4LCB2ZXJkaWN0OiBSLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIFJcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0eXBlX29mOiAoIHggKSAtPiAnc29tZXRoaW5nJ1xuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhbGlkYXRlOiAoIHR5cGUsIHggKSAtPlxuICAgICAgcmV0dXJuIHggaWYgQGlzYSB0eXBlLCB4XG4gICAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fXzQgZXhwZWN0ZWQgYSAje3R5cGUuJHR5cGVuYW1lfSwgZ290IGEgI3skdHlwZV9vZiB4fVwiXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY3JlYXRlOiAoIHR5cGUsIFAuLi4gKSAtPlxuICAgICAgdGhyb3cgbmV3IEVycm9yIFwizqlfX181IG5vdCB5ZXQgaW1wbGVtZW50ZWRcIlxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGV2YWx1YXRlOiAoIHR5cGUsIHggKSAtPlxuICAgICAgQF9yZWNvcmRpbmcgPSB0cnVlXG4gICAgICBAX2pvdXJuYWwgICA9IFtdXG4gICAgICBAX3N0YWNrICAgICA9IFtdXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQGlzYSB0eXBlLCB4XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgUiAgICAgICAgICAgPSBAX2pvdXJuYWxcbiAgICAgIEBfcmVjb3JkaW5nID0gZmFsc2VcbiAgICAgIEBfam91cm5hbCAgID0gbnVsbFxuICAgICAgQF9zdGFjayAgICAgPSBudWxsXG4gICAgICByZXR1cm4gUlxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjbGFzcyBUeXBlXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29uc3RydWN0b3I6ICggdHlwZXNwYWNlLCB0eXBlbmFtZSwgZGVjbGFyYXRpb24gKSAtPlxuICAgICAgQCR0eXBlbmFtZSA9IHR5cGVuYW1lICMgaGlkZSBALCAnJHR5cGVuYW1lJywgIHR5cGVuYW1lXG4gICAgICBoaWRlIEAsICckdHlwZXNwYWNlJywgdHlwZXNwYWNlXG4gICAgICBAX2NvbXBpbGVfZmllbGRzIHR5cGVzcGFjZSwgdHlwZW5hbWUsIGRlY2xhcmF0aW9uIGlmIGRlY2xhcmF0aW9uLmZpZWxkcz9cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBzd2l0Y2ggdHJ1ZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgd2hlbiAkaXNhLnRleHQgZGVjbGFyYXRpb25cbiAgICAgICAgICBkZWNsYXJhdGlvbiA9IGRvICggdHlwZXJlZiA9IGRlY2xhcmF0aW9uICkgPT4geyBpc2E6ICggKCB4LCB0ICkgLT4gdC5pc2EgQCR0eXBlc3BhY2VbIHR5cGVyZWYgXSwgeCApLCB9XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICB3aGVuICRpc2EuZnVuY3Rpb24gZGVjbGFyYXRpb25cbiAgICAgICAgICBkZWNsYXJhdGlvbiA9IHsgaXNhOiBkZWNsYXJhdGlvbiwgfVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgd2hlbiBkZWNsYXJhdGlvbiBpbnN0YW5jZW9mIFR5cGUgICAgdGhlbiBudWxsXG4gICAgICAgIHdoZW4gZGVjbGFyYXRpb24gaW5zdGFuY2VvZiBPYmplY3QgIHRoZW4gbnVsbFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pX19fNiBleHBlY3RlZCBhIHR5cGVuYW1lLCBhIGZ1bmN0aW9uIG9yIGEgdHlwZSBhcyBkZWNsYXJhdGlvbiwgZ290IGEgI3skdHlwZV9vZiBkZWNsYXJhdGlvbn1cIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICMjIyBUQUlOVCB0aGlzIGlzIGRlZmVjdGl2ZSB3L291dCBwcm9wZXIgdmFsaWRhdGlvbiAjIyNcbiAgICAgIGZvciBrZXksIHZhbHVlIG9mIGRlY2xhcmF0aW9uXG4gICAgICAgIG5hbWVpdCB0eXBlbmFtZSwgdmFsdWUgaWYga2V5IGlzICdpc2EnICMgY2hlY2sgdGhhdCB2YWx1ZSBpcyBmdW5jdGlvbj9cbiAgICAgICAgaGlkZSBALCBrZXksIHZhbHVlXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgX2NvbXBpbGVfZmllbGRzOiAoIHR5cGVzcGFjZSwgdHlwZW5hbWUsIGRlY2xhcmF0aW9uICkgLT5cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAjIyMgVEFJTlQgdHJ5IHRvIG1vdmUgdGhpcyBjaGVjayB0byB2YWxpZGF0aW9uIHN0ZXAgIyMjXG4gICAgICBpZiBkZWNsYXJhdGlvbi5pc2E/XG4gICAgICAgIHRocm93IG5ldyBFcnJvciBcIs6pX19fNyBtdXN0IGhhdmUgZXhhY3RseSBvbmUgb2YgYGlzYWAgb3IgYGZpZWxkc2AsIG5vdCBib3RoXCJcbiAgICAgIGZvciBmaWVsZF9uYW1lLCBmaWVsZF9kZWNsYXJhdGlvbiBvZiBkZWNsYXJhdGlvbi5maWVsZHNcbiAgICAgICAgZGVjbGFyYXRpb24uZmllbGRzWyBmaWVsZF9uYW1lIF0gPSBuZXcgVHlwZSB0eXBlc3BhY2UsIGZpZWxkX25hbWUsIGZpZWxkX2RlY2xhcmF0aW9uXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZGVjbGFyYXRpb24uaXNhID0gQF9nZXRfZGVmYXVsdF9pc2FfZm9yX2ZpZWxkcyB0eXBlc3BhY2UsIHR5cGVuYW1lLCBkZWNsYXJhdGlvblxuICAgICAgcmV0dXJuIG51bGxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBfZ2V0X2RlZmF1bHRfaXNhX2Zvcl9maWVsZHM6ICggdHlwZXNwYWNlLCB0eXBlbmFtZSwgZGVjbGFyYXRpb24gKSAtPiAoIHgsIHQgKSAtPlxuICAgICAgZm9yIGZpZWxkX25hbWUsIGZpZWxkIG9mIEBmaWVsZHNcbiAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyB4PyBhbmQgdC5pc2EgZmllbGQsIHhbIGZpZWxkX25hbWUgXVxuICAgICAgcmV0dXJuIHRydWVcblxuICAjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY2xhc3MgVHlwZXNwYWNlXG5cbiAgICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29uc3RydWN0b3I6ICggdHlwZXNwYWNlX2NmZyApIC0+XG4gICAgICBmb3IgdHlwZW5hbWUsIGRlY2xhcmF0aW9uIG9mIHR5cGVzcGFjZV9jZmdcbiAgICAgICAgZGVjbGFyYXRpb24gICA9IG5ldyBUeXBlIEAsIHR5cGVuYW1lLCBkZWNsYXJhdGlvbiB1bmxlc3MgZGVjbGFyYXRpb24gaW5zdGFuY2VvZiBUeXBlXG4gICAgICAgIEBbIHR5cGVuYW1lIF0gPSBkZWNsYXJhdGlvblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHN0ZCA9IG5ldyBUeXBlc3BhY2VcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaW50ZWdlcjpcbiAgICAgIGlzYTogICAgKCB4LCB0ICkgLT4gTnVtYmVyLmlzSW50ZWdlciB4XG4gICAgICBmb286ICAgIDRcbiAgICBvZGQ6XG4gICAgICBpc2E6ICAgICggeCwgdCApIC0+ICggdC5pc2EgQCR0eXBlc3BhY2UuaW50ZWdlciwgeCApIGFuZCAoIHggJSUgMiBpc250IDAgKVxuICAgICMgc2hvcnQgZm9ybSBqdXN0IGFzc2lnbnMgZWl0aGVyIGEgdGVzdCBtZXRob2Qgb3IgYSB0eXBlIG5hbWU6XG4gICAgZXZlbjogICAgICAgICAgICggeCwgdCApIC0+ICggdC5pc2EgQCR0eXBlc3BhY2UuaW50ZWdlciwgeCApIGFuZCAoIHggJSUgMiBpcyAwIClcbiAgICBmbG9hdDogICAgICAgICAgKCB4LCB0ICkgLT4gTnVtYmVyLmlzRmluaXRlIHhcbiAgICBiaWdpbnQ6ICAgICAgICAgKCB4LCB0ICkgLT4gdHlwZW9mIHggaXMgJ2JpZ2ludCdcbiAgICB0ZXh0OiAgICAgICAgICAgKCB4LCB0ICkgLT4gdHlwZW9mIHggaXMgJ3N0cmluZydcbiAgICBub25lbXB0eV90ZXh0OiAgKCB4LCB0ICkgLT4gKCB0LmlzYSBAJHR5cGVzcGFjZS50ZXh0LCB4ICkgYW5kICggeC5sZW5ndGggPiAwIClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgIyBudW1lcmljYWw6ICAgICAgKCB4LCB0ICkgLT4gKCB0LmlzYSBAJHR5cGVzcGFjZS5mbG9hdCwgeCAgICkgb3IgKCB0LmlzYSBAJHR5cGVzcGFjZS5iaWdpbnQsIHggKVxuICAgICMgcG9zaXRpdmUwOiAgICAgICggeCwgdCApIC0+ICggdC5pc2EgQCR0eXBlc3BhY2UuZmxvYXQsIHggICApIGFuZCAoIHggPj0gKzAgIClcbiAgICAjIHBvc2l0aXZlMTogICAgICAoIHgsIHQgKSAtPiAoIHQuaXNhIEAkdHlwZXNwYWNlLmZsb2F0LCB4ICAgKSBhbmQgKCB4ID49ICsxICApXG4gICAgIyBuZWdhdGl2ZTA6ICAgICAgKCB4LCB0ICkgLT4gKCB0LmlzYSBAJHR5cGVzcGFjZS5mbG9hdCwgeCAgICkgYW5kICggeCA8PSAgMCAgKVxuICAgICMgbmVnYXRpdmUxOiAgICAgICggeCwgdCApIC0+ICggdC5pc2EgQCR0eXBlc3BhY2UuZmxvYXQsIHggICApIGFuZCAoIHggPD0gLTEgIClcbiAgICAjIGNhcmRpbmFsOiAgICAgICAoIHgsIHQgKSAtPiAoIHQuaXNhIEAkdHlwZXNwYWNlLmludGVnZXIsIHggKSBhbmQgKCB0LmlzYSBAJHR5cGVzcGFjZS5wb3NpdGl2ZTAsIHggKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGNhcmRpbmFsYmlnaW50OiAoIHgsIHQgKSAtPiAoIHQuaXNhIEAkdHlwZXNwYWNlLmJpZ2ludCwgeCAgICApIGFuZCAoIHggPj0gKzAgKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAjIGNpcmNsZTE6ICAnY2lyY2xlMidcbiAgICAjIGNpcmNsZTI6ICAnY2lyY2xlMydcbiAgICAjIGNpcmNsZTM6ICAnY2lyY2xlMSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgd2VpcmQ6ICAgICdzdHJhbmdlJyAjIGRlY2xhcmVzIGFub3RoZXIgbmFtZSBmb3IgYG9kZGBcbiAgICBzdHJhbmdlOiAgJ29kZCcgICAgICMgZGVjbGFyZXMgYW5vdGhlciBuYW1lIGZvciBgb2RkYFxuICAgIGFibm9ybWFsOiAnd2VpcmQnICAgIyBkZWNsYXJlcyBhbm90aGVyIG5hbWUgZm9yIGBvZGRgXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHF1YW50aXR5OlxuICAgICAgZmllbGRzOlxuICAgICAgICAjIGVhY2ggZmllbGQgYmVjb21lcyBhIGBUeXBlYCBpbnN0YW5jZTsgc3RyaW5ncyBtYXkgcmVmZXIgdG8gbmFtZXMgaW4gdGhlIHNhbWUgdHlwZXNwYWNlXG4gICAgICAgIHE6ICAgICdmbG9hdCdcbiAgICAgICAgdTogICAgJ25vbmVtcHR5X3RleHQnXG4gICAgICB0ZW1wbGF0ZTpcbiAgICAgICAgcTogICAgMFxuICAgICAgICB1OiAgICAndSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgYWRkcmVzczpcbiAgICAgIGZpZWxkczpcbiAgICAgICAgcG9zdGNvZGU6ICAgJ25vbmVtcHR5X3RleHQnXG4gICAgICAgIGNpdHk6ICAgICAgICdub25lbXB0eV90ZXh0J1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBlbXBsb3llZTpcbiAgICAgIGZpZWxkczpcbiAgICAgICAgYWRkcmVzczogICAgJ2FkZHJlc3MnXG4gICAgICAgIG5hbWU6XG4gICAgICAgICAgZmllbGRzOlxuICAgICAgICAgICAgZmlyc3RuYW1lOiAgJ25vbmVtcHR5X3RleHQnXG4gICAgICAgICAgICBsYXN0bmFtZTogICAnbm9uZW1wdHlfdGV4dCdcblxuXG4gICM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBmbGF0bHlfMSA9IG5ldyBUeXBlc3BhY2VcbiAgICBldmVubHk6ICAgICAgICdmbGF0J1xuICAgIGZsYXQ6ICAgICAgICAgKCB4LCB0ICkgLT4gdC5pc2Egc3RkLmV2ZW4sIHhcbiAgICBwbGFpbjogICAgICAgICdldmVubHknXG4gICAgIyBmb286ICAgICAgICAgICdiYXInXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZsYXRseV8yID0gbmV3IFR5cGVzcGFjZVxuICAgIGV2ZW5seTogICAgICAgJ2ZsYXQnXG4gICAgZmxhdDogICAgICAgICBzdGQuZXZlblxuICAgIHBsYWluOiAgICAgICAgJ2V2ZW5seSdcblxuXG5cbiAgIyUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG4gIHJldHVybiB7IFR5cGVzLCBUeXBlLCBUeXBlc3BhY2UsIFxcXG4gICAgc3RkLCBcXFxuICAgIGZsYXRseV8xLCBmbGF0bHlfMiwgXFxcbiAgICB0eXBlczogKCBuZXcgVHlwZXMoKSApLCB9XG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgeyB0eXBlc1xuICAgIGZsYXRseV8xXG4gICAgZmxhdGx5XzJcbiAgICBzdGQgICAgICAgICAgICAgfSA9IHJlcXVpcmVfaW50ZXJ0eXBlKClcbiAgaW5mbyAnzqlfX184Jywgc3RkXG4gIGluZm8gJ86pX19fOScsIGZsYXRseV8xXG4gIGluZm8gJ86pX18xMCcsIGZsYXRseV8yXG4gIGluZm8gJ86pX18xMScsIGZsYXRseV8xLmZsYXRcbiAgaW5mbyAnzqlfXzEyJywgZmxhdGx5XzIuZmxhdFxuICBpbmZvICfOqV9fMTMnLCBzdGQudGV4dC5ub25lbXB0eVxuICBpbmZvICfOqV9fMTQnLCAnc3RkLnF1YW50aXR5OiAgICAgICAgICAgICAgJywgcnByIHN0ZC5xdWFudGl0eVxuICBpbmZvICfOqV9fMTUnLCAnc3RkLnF1YW50aXR5LmlzYTogICAgICAgICAgJywgcnByIHN0ZC5xdWFudGl0eS5pc2FcbiAgaW5mbyAnzqlfXzE2JywgJ3N0ZC5xdWFudGl0eS5maWVsZHM6ICAgICAgICcsIHJwciBzdGQucXVhbnRpdHkuZmllbGRzXG4gIGluZm8gJ86pX18xNycsICdzdGQucXVhbnRpdHkuZmllbGRzLnE6ICAgICAnLCBycHIgc3RkLnF1YW50aXR5LmZpZWxkcy5xXG4gIGluZm8gJ86pX18xOCcsICdzdGQucXVhbnRpdHkuZmllbGRzLnEuaXNhOiAnLCBycHIgc3RkLnF1YW50aXR5LmZpZWxkcy5xLmlzYVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGVjaG8oKVxuICBoZWxwICfOqV9fMTknLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgc3RkLmludGVnZXIsICAgICAgICAgICAgICA1XG4gIGhlbHAgJ86pX18yMCcsIEdVWS50cm0udHJ1dGggICAgIHR5cGVzLmlzYSAgICAgICBzdGQub2RkLCAgICAgICAgICAgICAgICAgIDVcbiAgaGVscCAnzqlfXzIxJywgR1VZLnRybS50cnV0aCAgICAgdHlwZXMuaXNhICAgICAgIHN0ZC5ldmVuLCAgICAgICAgICAgICAgICAgNlxuICBoZWxwICfOqV9fMjInLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgc3RkLnN0cmFuZ2UsICAgICAgICAgICAgICA1XG4gIGhlbHAgJ86pX18yMycsIEdVWS50cm0udHJ1dGggICAgIHR5cGVzLmlzYSAgICAgICBzdGQud2VpcmQsICAgICAgICAgICAgICAgIDVcbiAgaGVscCAnzqlfXzI0JywgR1VZLnRybS50cnV0aCAgICAgdHlwZXMuaXNhICAgICAgIHN0ZC5hYm5vcm1hbCwgICAgICAgICAgICAgNVxuICBoZWxwICfOqV9fMjUnLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgZmxhdGx5XzEuZmxhdCwgICAgICAgICAgICA4XG4gIGhlbHAgJ86pX18yNicsIEdVWS50cm0udHJ1dGggICAgIHR5cGVzLmlzYSAgICAgICBmbGF0bHlfMS5ldmVubHksICAgICAgICAgIDhcbiAgaGVscCAnzqlfXzI3JywgR1VZLnRybS50cnV0aCAgICAgdHlwZXMuaXNhICAgICAgIGZsYXRseV8xLnBsYWluLCAgICAgICAgICAgOFxuICBoZWxwICfOqV9fMjgnLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgZmxhdGx5XzIuZmxhdCwgICAgICAgICAgICA4XG4gIGhlbHAgJ86pX18yOScsIEdVWS50cm0udHJ1dGggICAgIHR5cGVzLmlzYSAgICAgICBmbGF0bHlfMi5ldmVubHksICAgICAgICAgIDhcbiAgaGVscCAnzqlfXzMwJywgR1VZLnRybS50cnV0aCAgICAgdHlwZXMuaXNhICAgICAgIGZsYXRseV8yLnBsYWluLCAgICAgICAgICAgOFxuICBoZWxwICfOqV9fMzEnLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgc3RkLm5vbmVtcHR5X3RleHQsICAgICAgICAnYWJjJ1xuICBoZWxwICfOqV9fMzInLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgc3RkLnF1YW50aXR5LmZpZWxkcy5xLCAgICAxMjMuNDU2XG4gIGhlbHAgJ86pX18zMycsIEdVWS50cm0udHJ1dGggICAgIHR5cGVzLmlzYSAgICAgICBzdGQucXVhbnRpdHkuZmllbGRzLnUsICAgICdtJ1xuICBoZWxwICfOqV9fMzQnLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgc3RkLnF1YW50aXR5LCAgICAgICAgICAgICB7IHE6IDEyMy40NTYsIHU6ICdtJywgfVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGVjaG8oKVxuICBoZWxwICfOqV9fMzUnLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgc3RkLmludGVnZXIsICAgICAgICAgICAgICA1LjNcbiAgaGVscCAnzqlfXzM2JywgR1VZLnRybS50cnV0aCAgICAgdHlwZXMuaXNhICAgICAgIHN0ZC5vZGQsICAgICAgICAgICAgICAgICAgNlxuICBoZWxwICfOqV9fMzcnLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgc3RkLm9kZCwgICAgICAgICAgICAgICAgICA1LjNcbiAgaGVscCAnzqlfXzM4JywgR1VZLnRybS50cnV0aCAgICAgdHlwZXMuaXNhICAgICAgIHN0ZC5ldmVuLCAgICAgICAgICAgICAgICAgNVxuICBoZWxwICfOqV9fMzknLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgc3RkLnN0cmFuZ2UsICAgICAgICAgICAgICA2XG4gIGhlbHAgJ86pX180MCcsIEdVWS50cm0udHJ1dGggICAgIHR5cGVzLmlzYSAgICAgICBzdGQud2VpcmQsICAgICAgICAgICAgICAgIDZcbiAgaGVscCAnzqlfXzQxJywgR1VZLnRybS50cnV0aCAgICAgdHlwZXMuaXNhICAgICAgIHN0ZC5hYm5vcm1hbCwgICAgICAgICAgICAgNlxuICBoZWxwICfOqV9fNDInLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgZmxhdGx5XzEuZXZlbmx5LCAgICAgICAgICA1XG4gIGhlbHAgJ86pX180MycsIEdVWS50cm0udHJ1dGggICAgIHR5cGVzLmlzYSAgICAgICBmbGF0bHlfMS5mbGF0LCAgICAgICAgICAgIDVcbiAgaGVscCAnzqlfXzQ0JywgR1VZLnRybS50cnV0aCAgICAgdHlwZXMuaXNhICAgICAgIGZsYXRseV8xLnBsYWluLCAgICAgICAgICAgNVxuICBoZWxwICfOqV9fNDUnLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgZmxhdGx5XzIuZmxhdCwgICAgICAgICAgICA1XG4gIGhlbHAgJ86pX180NicsIEdVWS50cm0udHJ1dGggICAgIHR5cGVzLmlzYSAgICAgICBmbGF0bHlfMi5ldmVubHksICAgICAgICAgIDVcbiAgaGVscCAnzqlfXzQ3JywgR1VZLnRybS50cnV0aCAgICAgdHlwZXMuaXNhICAgICAgIGZsYXRseV8yLnBsYWluLCAgICAgICAgICAgNVxuICBoZWxwICfOqV9fNDgnLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgc3RkLm5vbmVtcHR5X3RleHQsICAgICAgICAnJ1xuICBoZWxwICfOqV9fNDknLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgc3RkLnF1YW50aXR5LmZpZWxkcy5xLCAgICAnMTIzLjQ1NidcbiAgaGVscCAnzqlfXzUwJywgR1VZLnRybS50cnV0aCAgICAgdHlwZXMuaXNhICAgICAgIHN0ZC5xdWFudGl0eS5maWVsZHMudSwgICAgJydcbiAgaGVscCAnzqlfXzUxJywgR1VZLnRybS50cnV0aCAgICAgdHlwZXMuaXNhICAgICAgIHN0ZC5xdWFudGl0eSwgICAgICAgICAgICAgeyBxOiAxMjMuNDU2LCB1OiAnJywgfVxuICBoZWxwICfOqV9fNTInLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgc3RkLnF1YW50aXR5LCAgICAgICAgICAgICB7IHE6IG51bGwsIHU6ICdtJywgfVxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGVjaG8oKVxuICBwcm9iZXNfYW5kX21hdGNoZXJzID0gW1xuICAgIFsgWyBzdGQuaW50ZWdlciwgICAgICA1ICAgICAgICAgICAgICAgICAgICAgICAgIF0sIG51bGwsIF1cbiAgICBbIFsgc3RkLmludGVnZXIsICAgICAgNS4zICAgICAgICAgICAgICAgICAgICAgICBdLCBudWxsLCBdXG4gICAgWyBbIHN0ZC5ldmVuLCAgICAgICAgIDUgICAgICAgICAgICAgICAgICAgICAgICAgXSwgbnVsbCwgXVxuICAgIFsgWyBmbGF0bHlfMS5ldmVubHksICA1ICAgICAgICAgICAgICAgICAgICAgICAgIF0sIG51bGwsIF1cbiAgICBbIFsgZmxhdGx5XzEuZXZlbmx5LCAgNiAgICAgICAgICAgICAgICAgICAgICAgICBdLCBudWxsLCBdXG4gICAgWyBbIGZsYXRseV8yLmV2ZW5seSwgIDUgICAgICAgICAgICAgICAgICAgICAgICAgXSwgbnVsbCwgXVxuICAgIFsgWyBmbGF0bHlfMi5ldmVubHksICA2ICAgICAgICAgICAgICAgICAgICAgICAgIF0sIG51bGwsIF1cbiAgICBbIFsgc3RkLnF1YW50aXR5LCAgICAgeyBxOiAxMjMuNDU2LCB1OiAnJywgfSAgICBdLCBudWxsLCBdXG4gICAgWyBbIHN0ZC5xdWFudGl0eSwgICAgIHsgcTogMTIzLjQ1NiwgdTogbnVsbCwgfSAgXSwgbnVsbCwgXVxuICAgIFsgWyBzdGQucXVhbnRpdHksICAgICB7IHE6ICduYW4nLCB1OiAnbScsIH0gICAgIF0sIG51bGwsIF1cbiAgICBbIFsgc3RkLmVtcGxveWVlLCAgICAgeyBhZGRyZXNzOiB7IHBvc3Rjb2RlOiAnU0UzNicsIGNpdHk6ICdMb25kb24nLCB9LCBuYW1lOiBudWxsLCB9ICAgICBdLCBudWxsLCBdXG4gICAgWyBbIHN0ZC5lbXBsb3llZSwgICAgIHsgYWRkcmVzczogeyBwb3N0Y29kZTogJ1NFMzYnLCBjaXR5OiAnTG9uZG9uJywgfSwgbmFtZToge30sIH0gICAgIF0sIG51bGwsIF1cbiAgICBbIFsgc3RkLmVtcGxveWVlLCAgICAgeyBhZGRyZXNzOiB7IHBvc3Rjb2RlOiAnU0UzNicsIGNpdHk6ICdMb25kb24nLCB9LCBuYW1lOiB7IGZpcnN0bmFtZTogJ0JvYicsIH0sIH0gICAgIF0sIG51bGwsIF1cbiAgICBdXG4gIGZvciBbIFsgdHlwZSwgdmFsdWUsIF0sIG1hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgIGluZm8gJ86pX181MycsIHR5cGUuJHR5cGVuYW1lLCBycHIgdmFsdWVcbiAgICByZWNvcmRzID0gdHlwZXMuZXZhbHVhdGUgdHlwZSwgdmFsdWVcbiAgICBmb3IgcmVjb3JkIGluIHJlY29yZHNcbiAgICAgIHVyZ2UgJycsICfOqV9fNTQnLCAoIHJlY29yZC5zdGFjay5wYWRFbmQgNTUgKSwgKCAoIHJwciByZWNvcmQudmFsdWUgKS5wYWRFbmQgMzUgKSwgR1VZLnRybS50cnV0aCByZWNvcmQudmVyZGljdFxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGVjaG8oKVxuICAjIGhlbHAgJ86pX181NScsIEdVWS50cm0udHJ1dGggICAgIHR5cGVzLmlzYSAgICAgICBzdGQuY2FyZGluYWwsIDZcbiAgIyBoZWxwICfOqV9fNTYnLCBHVVkudHJtLnRydXRoICAgICB0eXBlcy5pc2EgICAgICAgc3RkLmNhcmRpbmFsLCAwXG4gICMgaGVscCAnzqlfXzU3JywgR1VZLnRybS50cnV0aCAgICAgdHlwZXMuaXNhICAgICAgIHN0ZC5jYXJkaW5hbCwgLTFcbiAgIyAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIGhlbHAgJ86pX181OCcsIHRyeSAgICAgICAgICAgICAgIHR5cGVzLnZhbGlkYXRlICBzdGQuaW50ZWdlciwgIDUgICAgICAgY2F0Y2ggZSB0aGVuIHdhcm4gJ86pX181OScsIGUubWVzc2FnZVxuICBoZWxwICfOqV9fNjAnLCB0cnkgICAgICAgICAgICAgICB0eXBlcy52YWxpZGF0ZSAgc3RkLmludGVnZXIsICA1LjMgICAgIGNhdGNoIGUgdGhlbiB3YXJuICfOqV9fNjEnLCBlLm1lc3NhZ2VcbiAgIyBpbmZvICfOqV9fNjInLCBzdGQud2VpcmRcbiAgIyBpbmZvICfOqV9fNjMnLCBzdGQud2VpcmQuaXNhXG4gICMgaW5mbyAnzqlfXzY0Jywgc3RkLndlaXJkLmlzYS50b1N0cmluZygpXG5cblxuXG4iXX0=
//# sourceURL=../src/demo-intertype.coffee